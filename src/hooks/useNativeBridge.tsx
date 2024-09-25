import { setTokenHeader } from '@/api/baseApi';
import { useState, useCallback, useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { storageKey } from '@/constants/storageKey';

type MessageType = 'TOKEN' | 'PAGE_CHANGE' | 'TOKEN_EXPIRED' | 'LOGOUT' | 'WITHDRAW';
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
  payload?: TokenPayload | PageChangePayload;
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
    sendMessageToWebView?: (event: NativeMessage) => void;
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
  const queryClient = useQueryClient();
  const [token, setToken] = useState<string | null>(() =>
    window.localStorage.getItem(storageKey.accessToken)
  );
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
  const handleReceivedMessage = useCallback(
    (event: NativeMessage) => {
      try {
        const message = event;
        alert(message);

        switch (message.type) {
          case 'TOKEN':
            setTokenHeader((message.payload as TokenPayload).token);
            setToken((message.payload as TokenPayload).token);
            queryClient.refetchQueries();
            break;
          default:
            console.log('Unknown message type:', message.type);
        }
      } catch (error) {
        console.error('Error parsing message:', error);
      }
    },
    [queryClient]
  );

  useEffect(() => {
    // Web to Native 브릿지 함수 실행
    if (window.Android) {
      window.Android.sendMessageToNative('React Component loaded');
    } else if (window.webkit) {
      window.webkit?.messageHandlers?.sendMessageToNative.postMessage('React Component loaded');
    } else {
      console.log('Native bridge not found');
    }
  }, []);

  useEffect(() => {
    // 브릿지 함수 선언
    if (window) {
      window.sendMessageToWebView = (message: NativeMessage) => {
        handleReceivedMessage(message);
      };
    }
    if (window.NativeInterface) {
      window.NativeInterface.sendMessageToWebView = (event) => {
        handleReceivedMessage(event);
      };
    }

    return () => {
      delete window?.sendMessageToWebView;
      delete window.NativeInterface?.sendMessageToWebView;
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

  const handleLogout = useCallback(() => {
    const message: NativeMessage = {
      type: 'LOGOUT',
    };
    sendMessageToNative(message);
  }, [sendMessageToNative]);

  const handleWithdraw = useCallback(() => {
    const message: NativeMessage = {
      type: 'WITHDRAW',
    };
    sendMessageToNative(message);
  }, [sendMessageToNative]);

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
    handleLogout,
    handleWithdraw,
    renderMessage,
    toggleMessageVisibility,
  };
}
