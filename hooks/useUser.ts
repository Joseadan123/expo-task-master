import { auth, storage } from "@/db/firebase";
import { useUserStore } from "@/stores/useUserStore"
import { onAuthStateChanged } from "firebase/auth";
import { getDownloadURL } from "firebase/storage"
import { ref } from "firebase/storage";
import { useEffect, useState } from "react"

export default function useUser(){
    const {logout,setUser,user} = useUserStore()
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const profileImageRef = ref(storage, `profilePictures/${user.uid}`)
                const url = await getDownloadURL(profileImageRef).catch(() => null)
                
                const mappedUser = {
                    uid: user.uid,
                    displayName: user.displayName,
                    photoURL: url ?? user.photoURL,
                    email: user.email
                }
                setUser(mappedUser)
            } else {
                logout()
            }
            setLoading(false)
        });
        return unsubscribe
    },[])

    return {
        user,
        loading
    }
}