import { auth, storage } from "@/db/firebase";
import { useUserStore } from "@/stores/useUserStore"
import { onAuthStateChanged } from "firebase/auth";
import { getDownloadURL } from "firebase/storage"
import { ref } from "firebase/storage";
import { useEffect, useState } from "react"
import { useRouter } from "expo-router";

export default function useUser(){
    const {logout,setUser,user} = useUserStore()
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(()=>{
        if(user) return
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const profileImageRef = ref(storage, `profilePictures/${user.uid}`)
                const url = await getDownloadURL(profileImageRef).catch(() => null)
                setUser({...user,photoURL:url})
                setLoading(false)
            } else {
                logout()
                setLoading(false)
            }
        });
        return unsubscribe
    },[user])

    return {
        user,
        loading
    }
}