import { GoogleAuthProvider, signInWithCredential, AuthCredential } from "firebase/auth";
import { auth } from "./firebase";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

export default async function GoogleSignIn(){
    try{
        GoogleSignin.configure({
            webClientId:  "531247001592-va40brea3h1i6keui65ocpp3k4vlt9t4.apps.googleusercontent.com"
          });
        await GoogleSignin.hasPlayServices();
        const { data } = await GoogleSignin.signIn();
    
        // Crea un objeto de credencial de Google con el token
        const googleCredential = GoogleAuthProvider.credential(data?.idToken);
    
        // Inicia sesión con Firebase usando la credencial de Google
        const {user} = await signInWithCredential(auth,googleCredential)
        const mappedUser = {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            email: user.email
        }
        return {
            error:false,
            result: mappedUser
        }
    }catch(err){
        return {
            error: true,
            err
        }
    }
}