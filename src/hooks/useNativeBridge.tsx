import { useState, useCallback, useEffect } from 'react';

type MessageType = 'TOKEN' | 'PAGE_CHANGE';

interface TokenPayload {
  token: string;
}

interface PageChangePayload {
  page: 'myroute' | 'search' | 'route';
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

declare global {
  interface Window {
    Android?: NativeBridge;
    webkit?: {
      messageHandlers: {
        iOS: NativeBridge;
      };
    };
  }
}

export function useNativeBridge() {
  const [token, setToken] = useState<string | null>(null);

  const sendMessageToNative = useCallback((message: NativeMessage) => {
    const messageString = JSON.stringify(message);
    if (window.Android) {
      window.Android.sendMessageToNative(messageString);
    } else if (window.webkit && window.webkit.messageHandlers.iOS) {
      window.webkit.messageHandlers.iOS.sendMessageToNative(messageString);
    } else {
      console.log('Native bridge not found');
    }
  }, []);

  const handleReceivedMessage = useCallback((messageString: string) => {
    try {
      const message: NativeMessage = JSON.parse(messageString);
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
    const setupNativeCommunication = () => {
      if (window.Android) {
        window.Android.sendMessageToWebView(handleReceivedMessage);
      } else if (window.webkit && window.webkit.messageHandlers.iOS) {
        window.webkit.messageHandlers.iOS.sendMessageToWebView(handleReceivedMessage);
      }
    };

    setupNativeCommunication();
  }, [handleReceivedMessage]);

  const changePage = useCallback(
    (page: 'myroute' | 'search' | 'route', id?: string) => {
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
