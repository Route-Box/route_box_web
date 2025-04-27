import { setTokenHeader } from '@/api/baseApi';
import { useState, useCallback, useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { storageKey } from '@/constants/storageKey';
import Loader from '@/components/common/Loader';

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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingTimeout, setLoadingTimeout] = useState<NodeJS.Timeout | null>(null);

  const toggleMessageVisibility = () => {
    setIsMessageVisible((prev) => !prev);
  };

  const startLoading = useCallback(() => {
    setIsLoading(true);
    // 통신이 5초 이상 걸릴 경우 자동으로 로딩 상태를 해제합니다
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    setLoadingTimeout(timeout);
  }, []);

  const stopLoading = useCallback(() => {
    setIsLoading(false);
    if (loadingTimeout) {
      clearTimeout(loadingTimeout);
      setLoadingTimeout(null);
    }
  }, [loadingTimeout]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sendMessageToNative = (message: NativeMessage) => {
    const messageString = JSON.stringify(message);

    // 브릿지 통신 시작 시 로딩 상태 활성화
    startLoading();

    if (window.Android) {
      window.Android.sendMessageToNative(messageString);
    } else if (window.webkit) {
      window.webkit?.messageHandlers?.sendMessageToNative?.postMessage(messageString);
    } else {
      console.log('Native bridge not found');
      // 네이티브 브릿지를 찾지 못한 경우 로딩 상태 해제
      stopLoading();
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

        // 응답을 받으면 로딩 상태 해제
        stopLoading();
      } catch (error) {
        console.error('Error parsing message:', error);
        // 에러 발생 시 로딩 상태 해제
        stopLoading();
      }
    },
    [queryClient, stopLoading]
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

  useEffect(() => {
    // 컴포넌트 unmount 시 타이머 정리
    return () => {
      if (loadingTimeout) {
        clearTimeout(loadingTimeout);
      }
    };
  }, [loadingTimeout]);

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
    // 토큰 초기화
    setToken(null);

    // 앱에 로그아웃 message 전송
    const message: NativeMessage = {
      type: 'LOGOUT',
    };
    sendMessageToNative(message);
  }, [sendMessageToNative]);

  const handleWithdraw = useCallback(() => {
    // 토큰 초기화
    setToken(null);

    // 앱에 회원탈퇴 message 전송
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

  const renderLoader = useCallback(() => {
    if (!isLoading) return null;

    return <Loader />;
  }, [isLoading]);

  return {
    token,
    setToken,
    sendMessageToNative,
    changePage,
    handleLogout,
    handleWithdraw,
    renderMessage,
    toggleMessageVisibility,
    isLoading,
    renderLoader,
    startLoading,
    stopLoading,
  };
}
