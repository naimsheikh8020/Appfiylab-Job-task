import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  user: any;
  accessToken: string | null;
  isAuthReady: boolean;

  setAuth: (data: { user: any; accessToken: string }) => void;
  logout: () => void;
  setReady: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      isAuthReady: false,

      setAuth: ({ user, accessToken }) =>
        set({ user, accessToken }),

      logout: () =>
        set({ user: null, accessToken: null }),

      setReady: () => set({ isAuthReady: true }),
    }),
    {
      name: "auth-storage",
    }
  )
);