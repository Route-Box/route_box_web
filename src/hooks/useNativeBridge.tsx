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
  }
}

export function useNativeBridge() {
  const [token, setToken] = useState<string | null>(null);

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
      const message = event.detail as NativeMessage;
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

  // useEffect(() => {
  //   const setupNativeCommunication = () => {
  //     if (window.Android) {
  //       window.Android.sendMessageToWebView(handleReceivedMessage);
  //     } else if (window.webkit && window.webkit.messageHandlers) {
  //       window.webkit.messageHandlers?.sendMessageToWebView(handleReceivedMessage);
  //     }
  //   };

  //   setupNativeCommunication();
  // }, [handleReceivedMessage]);

  useEffect(() => {
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

  return {
    token,
    sendMessageToNative,
    changePage,
  };
}
