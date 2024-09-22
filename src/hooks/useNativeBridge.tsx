import { useState, useCallback, useEffect } from 'react';

type MessageType = 'TOKEN' | 'PAGE_CHANGE' | 'TOKEN_EXPIRED';
type PageType = 'MY_ROUTE' | 'SEARCH' | 'ROUTE' | 'COUPON';
interface TokenPayload {
  token: string;
}

interface PageChangePayload {
  page: PageType;
  id?: string;
}

interface NativeMessage {
  type: MessageType;
  payload: TokenPayload | PageChangePayload;
}

interface NativeBridge {
  sendMessageToNative: (message: string) => void;
  sendMessageToWebView: (callback: (message: string) => void) => void;
}

interface IosNativeBridge {
  sendMessageToNative: {
    postMessage: (message: string) => void;
  };
  sendMessageToWebView: (callback: (message: string) => void) => void;
}

declare global {
  interface Window {
    Android?: NativeBridge;
    webkit?: {
      messageHandlers: IosNativeBridge;
    };
    sayHello?: CustomEvent;
    helloWorld?: () => void;
    NativeInterface: {
      helloWorld?: () => void;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      sendMessageToWebView?: (event: any) => void;
    };
  }
}

export function useNativeBridge() {
  const [token, setToken] = useState<string | null>(null);
  const [isMessageVisible, setIsMessageVisible] = useState<boolean>(false);

  const toggleMessageVisibility = () => {
    setIsMessageVisible((prev) => !prev);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sendMessageToNative = (message: NativeMessage) => {
    const messageString = JSON.stringify(message);

    if (window.Android) {
      window.Android.sendMessageToNative(messageString);
    } else if (window.webkit) {
      window.webkit?.messageHandlers?.sendMessageToNative?.postMessage(messageString);
    } else {
      console.log('Native bridge not found');
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleReceivedMessage = useCallback((event: any) => {
    try {
      setToken(JSON.stringify(event));
      const message = event.data as NativeMessage;

      console.log(message);

      switch (message.type) {
        case 'TOKEN':
          setToken((message.payload as TokenPayload).token);
          break;
        default:
          console.log('Unknown message type:', message.type);
      }
    } catch (error) {
      console.error('Error parsing message:', error);
    }
  }, []);

  useEffect(() => {
    if (window.webkit) {
      window.webkit?.messageHandlers?.sendMessageToNative.postMessage('React Component loaded');
    } else {
      console.log('Native bridge not found');
    }
  }, []);

  useEffect(() => {
    window.sayHello = new CustomEvent('NativeEvent');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const nativeEventCallback = (event: any) => {
      setToken('event received');
      alert(`event receive from Native`);
    };

    window.addEventListener('NativeEvent', nativeEventCallback);

    // event listener clean up
    return () => {
      window.removeEventListener('NativeEvent', nativeEventCallback);
    };
  }, []);

  useEffect(() => {
    window.NativeInterface = {
      helloWorld: () => {
        setToken('Message received');
      },
      sendMessageToWebView: (event) => {
        setToken(JSON.stringify(event));
        console.log(event);
      },
    };
  }, []);

  useEffect(() => {
    const sendMessageToWebView = new CustomEvent('sendMessageToWebView');
    window.dispatchEvent(sendMessageToWebView);

    window.addEventListener(
      'sendMessageToWebView',
      handleReceivedMessage as unknown as EventListener
    );
    return () => {
      window.removeEventListener(
        'sendMessageToWebView',
        handleReceivedMessage as unknown as EventListener
      );
    };
  }, [handleReceivedMessage]);

  const changePage = useCallback(
    (page: PageType, id?: string) => {
      const message: NativeMessage = {
        type: 'PAGE_CHANGE',
        payload: { page, id },
      };
      sendMessageToNative(message);
    },
    [sendMessageToNative]
  );

  const renderMessage = useCallback(() => {
    if (!isMessageVisible) return null;

    return (
      <div
        style={{
          backgroundColor: '#21c8b6',
          padding: '20px',
          boxSizing: 'border-box',
          position: 'fixed',
          width: '100%',
          zIndex: 999,
          top: 0,
          left: 0,
        }}
      >
        [dev] native message received :
        <br />
        {token}
      </div>
    );
  }, [isMessageVisible, token]);

  return {
    token,
    sendMessageToNative,
    changePage,
    renderMessage,
    toggleMessageVisibility,
  };
}
