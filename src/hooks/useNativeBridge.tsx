import { storageKey } from '@/constants/storageKey';
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sendMessageToNative: (event: any) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sendMessageToWebView: (event: any) => void;
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
    NativeInterface?: {
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
      const message = event as NativeMessage;

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
    if (window.Android) {
      window.Android.sendMessageToNative('React Component loaded');
    } else if (window.webkit) {
      window.webkit?.messageHandlers?.sendMessageToNative.postMessage('React Component loaded');
    } else {
      console.log('Native bridge not found');
    }
  }, []);

  useEffect(() => {
    /** Android bridge */
    if (window.Android) {
      window.Android.sendMessageToWebView = (event) => {
        setToken(event);
        handleReceivedMessage(event);
      };
    }
    /** IOS bridge */
    if (window.NativeInterface) {
      window.NativeInterface.sendMessageToWebView = (event) => {
        handleReceivedMessage(event);
      };
    }
  }, [handleReceivedMessage]);

  useEffect(() => {
    if (token) window.localStorage.setItem(storageKey.accessToken, token);
  }, [token]);

  // useEffect(() => {
  //   const sendMessageToWebView = new CustomEvent('sendMessageToWebView');
  //   window.dispatchEvent(sendMessageToWebView);

  //   window.addEventListener(
  //     'sendMessageToWebView',
  //     handleReceivedMessage as unknown as EventListener
  //   );
  //   return () => {
  //     window.removeEventListener(
  //       'sendMessageToWebView',
  //       handleReceivedMessage as unknown as EventListener
  //     );
  //   };
  // }, [handleReceivedMessage]);

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
    setToken,
    sendMessageToNative,
    changePage,
    renderMessage,
    toggleMessageVisibility,
  };
}
