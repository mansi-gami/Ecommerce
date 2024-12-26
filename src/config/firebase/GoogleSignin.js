import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth"

export const _signInWithGoogle  = async () => {
    try {
        GoogleSignin.configure({
            offlineAccess: false,
            webClientId: '847870123839-4gir9mhie5kuk6m6l4ka6m7b28ncteef.apps.googleusercontent.com',
            scopes: ['profile','email'],
        });
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();

        const {idToken} = await GoogleSignin.signIn();
        const googleCredentials = auth.GoogleAuthProvider.credential(idToken);
        auth.signInWithCredential(googleCredentials);
        return userInfo();


    } catch (error) {
        console.log("Google Sign In", error);
        return null;
    }
};