import { create } from "zustand";
import { persist } from "zustand/middleware";
import { jwtDecode } from "jwt-decode";

const useAuthStore = create(
  persist(
    (set,get) => ({
      token: null,
      user: null,
      setToken: (token) => {

        const user = jwtDecode(token).userFound;    
        set({token, user});
      },
      getToken : () => {
        return get().token;
      },
      getUser : () => {
        return get().user;
      },
      clearAuth: () => {
        set({ token: null, user: null });
      },
    }),
    {
      name: "auth",
    }
  )
);

export default useAuthStore;

