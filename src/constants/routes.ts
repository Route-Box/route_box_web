// 앱의 모든 라우트 경로를 정의하는 상수
export const ROUTES = {
  HOME: '/',
  NOTIFICATION: '/notification',
  WITHDRAW_EXPLANATION: '/withdraw-explanation',
  MY_PAGE: {
    ROOT: '/my-page',
    INTRO_EDIT: '/my-page/intro-edit',
  },
  SETTING: {
    ROOT: '/setting',
    PROFILE: '/setting/profile',
    NOTIFICATIONS: '/setting/notifications',
    SUPPORT: '/setting/support',
    TERMS: '/setting/terms',
  },
  SUPPORT: {
    INQUIRY: {
      ROOT: '/support/inquiry',
      LIST: '/support/inquiry/list',
      DETAIL: (id: string) => `/support/inquiry/${id}`,
      NEW: '/support/inquiry/new',
    },
  },
};
