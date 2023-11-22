import { create } from "zustand";
import { persist } from "zustand/middleware";
import { jwtDecode } from "jwt-decode";

const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      userId: null,
      setToken: (token, userId) => {
        set({ token, userId });
      },
      setuser: (user) => set({ user }),
      logout: () => {
        set({ token: null, user: null });
      },
      clearAuth: () => set({token: null, userId: null}),
    }),
    {
      name: "auth",
    }
  )
);

export default useAuthStore;
