// store/useUserRoleStore.ts
import { create } from 'zustand';

import type { Role } from '@/routes/types';

type AuthStatus = 'Loading' | 'Guest' | 'Authorized';

interface AuthState {
  status: AuthStatus;
  role: Role | null;
  isLoggedIn: boolean;
  bootstrap: () => Promise<void>;
  login: (token: string) => void;
  logout: () => void;
}
//여기 쿠키로 바꿔야 함

function parseRoleFromToken(token: string): Role | null {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.role as Role;
  } catch {
    return null;
  }
}

export const useRoleStore = create<AuthState>((set) => ({
  status: 'Loading',
  role: null,
  isLoggedIn: false,
  bootstrap: async () => {
    // Set timeout at the very top
    const timeout = setTimeout(() => {
      set({ status: 'Guest', role: null, isLoggedIn: false });
    }, 3000); // 3초
    try {
      // Cookie-based accessToken retrieval
      const match = document.cookie.match(/(?:^|; )accessToken=([^;]*)/);
      const token = match ? decodeURIComponent(match[1]) : null;
      if (!token) {
        set({ status: 'Guest', role: null, isLoggedIn: false });
        return;
      }
      const role = parseRoleFromToken(token);
      set({ status: 'Authorized', role, isLoggedIn: true });
    } finally {
      clearTimeout(timeout);
    }
  },
  login: (token) => {
    // Set cookie for accessToken, expires in 7 days, path=/
    const expires = new Date();
    expires.setDate(expires.getDate() + 7);
    document.cookie = `accessToken=${encodeURIComponent(token)}; expires=${expires.toUTCString()}; path=/`;
    const role = parseRoleFromToken(token);
    set({ status: 'Authorized', role, isLoggedIn: true });
  },
  logout: () => {
    // Delete cookie by setting expiration in the past
    document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
    set({ status: 'Guest', role: null, isLoggedIn: false });
  },
}));
