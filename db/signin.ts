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
        return {
            error:false,
            result: signInWithCredential(auth,googleCredential)
        }
    }catch(err){
        return {
            error: true,
            err
        }
    }
}