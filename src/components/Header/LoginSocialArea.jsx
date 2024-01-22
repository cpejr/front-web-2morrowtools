import { GroupMedias, Line, LoginButton, LoginSocial, SocialMedias } from "./Styles";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { signInWithGooglePopup } from "./../../services/firebase";
import { usePostUser } from "../../services/ManagerService";
import useAuthStore from "../../stores/auth";
import { useState } from "react";

export default function LoginSocialArea() {
  const { setToken, getToken, getUser, clearAuth, setUser } = useAuthStore();
  const [loginLogoff, setLoginLogoff] = useState(getToken() ? "Fazer Logoff" : "Fazer Login");
  const [profilePicture, setProfilePicture] = useState(
    loginLogoff === "Fazer Login" ? (
      <UserOutlined />
    ) : (
      <img src={getUser()?.imageURL} alt='Profile' />
    )
  );

  const logGoogleUser = async () => {
    if (getToken() === null) {
      const googleResponse = await signInWithGooglePopup();
      const response = await usePostUser({
        name: googleResponse?.user?.displayName,
        email: googleResponse?.user?.email,
        imageURL: googleResponse?.user?.photoURL,
        type: "User",
      });
      setToken(response.token);
      setUser({
        ...response.user,
        imageURL: googleResponse?.user?.photoURL,
      });

      window.location.reload();

      setLoginLogoff("Fazer Logoff");
      setProfilePicture(<img src={getUser()?.imageURL} alt='Profile' />);
    } else {
      clearAuth();
      setLoginLogoff("Fazer Login");
      setProfilePicture(<UserOutlined />);
    }
  };

  return (
    <LoginSocial>
      <LoginButton onClick={logGoogleUser}>
        {loginLogoff}
        {profilePicture}
      </LoginButton>
      <Line />
      <SocialMedias>
        <GroupMedias>
          <FacebookOutlined />
          <TwitterOutlined />
        </GroupMedias>
        <GroupMedias>
          <InstagramOutlined />
          <LinkedinOutlined />
        </GroupMedias>
      </SocialMedias>
    </LoginSocial>
  );
}
