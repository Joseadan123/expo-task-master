import { db } from "./firebase";
import {getDoc,getDocs,doc,addDoc, collection, updateDoc, AddPrefixToKeys} from "firebase/firestore"
import { getUserById, MappedUser } from "./users";

export interface Team{
    code:string;
    title:string;
    createdBy: string;
    partners: string[];
}

const docReference = collection(db,"teams")

export const createTeam = async (team:Team) => {
    try{
        await addDoc(docReference,team)
        return {err:false,message:"Equipo creado con exito."}
    }catch(err){
        let message = ""
        if(err instanceof Error) message = err.message
        return {err:true,message}
    }
}

export interface TeamWithUsers extends Omit<Team, "createdBy" | "partners">{
    createdBy: MappedUser,
    partners: MappedUser[]
}


export const getTeamUser = async (uid:string) : Promise<TeamWithUsers[]> => {
    const querySnapshot = await getDocs(docReference)
    const teams:TeamWithUsers[] = []
    await Promise.all(querySnapshot.docs.map(async (doc) => {
        const data = doc.data() as Team
        if(data.partners.includes(uid)){
            const createdBy = await getUserById(data.createdBy)
            const partners = await Promise.all(data.partners.map(async (partner)=>{
                return await getUserById(partner)
            }))
            const team: TeamWithUsers = {
                ...data,
                createdBy,
                partners
            }
            teams.push(team)
        }
    }))
    return teams
}

export const joinTeam = async (uid:string,teamId:string) => {
    const teams = await getDocs(docReference)

    
    const team = teams.docs.find((doc) => {
        const t = doc.data() as Team
        return t.code === teamId
    })

    if(!team?.exists()){
        return {err:true,message:"El equipo no existe."}
    }
    const data = team.data() as Team
    if(data.partners.includes(uid)){
        return {err:true,message:"Ya eres parte de este equipo."}
    }
    data.partners.push(uid)
    const teamDoc = doc(docReference,team.id)
    updateDoc(teamDoc,data as unknown as AddPrefixToKeys<string, any>)
    return {err:false,message:"Te has unido al equipo."}
}