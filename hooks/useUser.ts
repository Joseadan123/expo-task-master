import { auth } from "@/db/firebase";
import { useUserStore } from "@/stores/useUserStore"
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react"

export default function useUser(){
    const {logout,setUser,user} = useUserStore()
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const mappedUser = {
                    uid: user.uid,
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                    email: user.email
                }
                setUser(mappedUser)
            } else {
                logout()
            }
            console.log("Entro")
            setLoading(false)
        });
        return unsubscribe
    },[])

    return {
        user,
        loading
    }
}