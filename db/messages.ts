import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";
import { User } from "firebase/auth";

export interface MessageProps{
    content: string;
    created_by: User,
    files?: string[],
    todoid:string
}

export const createMessage = async ({
    content,
    created_by,
    files,
    todoid,
} : MessageProps) => {
    const col = collection(db,`todo/${todoid}/messages`)
    await addDoc(col,{
        content,
        created_by: created_by.uid,
        files:files ?? null,
        created_at: new Date()
    })
}