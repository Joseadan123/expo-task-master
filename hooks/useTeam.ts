import { getTeamUser } from "@/db/teams";
import { useTeamStore } from "@/stores/useTeamStore";
import { useEffect, useState } from "react";
import useUser from "./useUser";

export default function useTeam(){
    const {team,setTeam} = useTeamStore()
    const [loading, setLoading] = useState(true)
    const {user} = useUser()

    useEffect(()=>{

        if(team) return

        getTeamUser(user?.uid as string).then((teams) => {
            console.log(team)
            if(teams.length > 0) setTeam(teams[0])
        }).finally(() => setLoading(false))
    },[team,loading])

    return {
        team,
        setTeam,
        loading
    }
}