import { create } from "zustand";
import { Team, TeamWithUsers } from "@/db/teams";


interface TeamStore {
    team: TeamWithUsers | null;
    setTeam: (team: TeamWithUsers) => void;
    removeTeam: () => void;
}

export const useTeamStore = create<TeamStore>((set) => ({
    team: null,
    setTeam: (team:TeamWithUsers) => set({ team }),
    removeTeam: () => set({ team: null }),
}));