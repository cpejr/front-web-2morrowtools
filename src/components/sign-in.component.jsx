import { signInWithGooglePopup } from "../utils/firebase.utils"


const SignIn = () => {
const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
        sessionStorage.setItem("user" , JSON.stringify(response.user.displayName))
        window.location.reload(false);
    }
return (
        <div>
            <button onClick={logGoogleUser}>Sign In With Google</button>
        </div>
    )
}
export default SignIn;