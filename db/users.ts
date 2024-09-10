import { User } from "firebase/auth"
import { auth, db } from "./firebase"
import { addDoc, collection, doc, setDoc, getDoc } from "firebase/firestore"

const userCol = collection(db,"users")


export interface MappedUser{
        displayName: string;
        photoUrl: string;
        uid: string;
        email: string;
}

export const getUserById = async (uid:string) => {
    const docRef = doc(db,"users",uid)
    const snapshot = await getDoc(docRef)
    const user = snapshot.data() as MappedUser
    return user;
}

export const saveUser = async (user:User) => {
    try{
        const docRef = doc(db,"users",user.uid)
        const mappedUser = {
            displayName: user.displayName,
            photoUrl: user.photoURL,
            uid: user.uid,
            email: user.email
        }
        await setDoc(docRef,mappedUser)
        return {err:false,message: "Usuario guardado con exito"}
    }catch(err){
        let message = ""
        if(err instanceof Error) message = err.message
        return {err:true,message:message}
    }
}