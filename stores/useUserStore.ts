import { create } from "zustand";

type User = {
    displayName: string | null;
    email: string | null;
    photoURL: string | null;
    uid: string | null;
};

type UserStore = {
    user: User | null;
    setUser: (user: User) => void;
    logout: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    logout: () => set({ user: null }),
}));