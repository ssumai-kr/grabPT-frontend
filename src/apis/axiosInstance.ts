import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, // 쿠키,세션 필요 시
});

// 요청 인터셉터 – 토큰 자동 주입
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// 응답 인터셉터 – 에러 공통 처리
axiosInstance.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      // 예: 토큰 만료 → 로그아웃
    }
    return Promise.reject(err);
  },
);

export default axiosInstance;
