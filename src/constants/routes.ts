const ROUTES = {
  HOME: {
    ROOT: '/',
    USER: '/user',
    EXPERT: '/expert',
  },

  AUTH: {
    LOGIN: '/login',
    SIGNUP: '/signup',
  },

  MYPAGE: {
    ROOT: '/mypage',
    USER: '/mypage/user',
    EXPERT: '/mypage/expert',
  },

  CATEGORY: {
    ROOT: '/category',
    WILDCARD: '/category/*',
  },

  REQUESTS: {
    ROOT: '/requests', //요청 현황 페이지
    WRITE: '/requests/write', //요청서 작성 페이지
    DETAIL: '/requests/:id', // 요청서 상세 페이지
    EDIT: '/requests/edit/:id', // 요청서 수정 페이지
    DELETE: '/requests/delete/:id', // 요청서 삭제 페이지
    WILDCARD: '/requests/*',
  },
} as const;

export default ROUTES;
