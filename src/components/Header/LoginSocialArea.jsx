import { GroupMedias, Line, LoginButton, LoginSocial, ModalStyle, SocialMedias } from "./Styles";
import {
  CloseOutlined,
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
import { colors } from "../../styles/styleVariables";
import ModalLogoff from "../features/Modals/ModalLogoff/ModalLogoff";

export default function LoginSocialArea() {
  const { setToken, getToken, getUser, clearAuth, setUser } = useAuthStore();
  const [loginLogoff, setLoginLogoff] = useState(getToken() ? "Fazer Logoff" : "Fazer Login");
  const isLogged = getToken() ? true : false;
  const [profilePicture, setProfilePicture] = useState(
    loginLogoff === "Fazer Login" ? (
      <UserOutlined />
    ) : (
      <img src={getUser()?.imageURL} alt='Profile' />
    )
  );
  const [modalLogOff, setModalLogOff] = useState(false);
  const openModalLogOff = () => setModalLogOff(true);
  const closeModalLogOff = () => setModalLogOff(false);
  const modalCloseButton = <CloseOutlined style={{ color: colors.white }} />;

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
      <LoginButton onClick={isLogged ? openModalLogOff : logGoogleUser}>
        {loginLogoff}
        {profilePicture}
      </LoginButton>
      <ModalStyle
        open={modalLogOff}
        onCancel={closeModalLogOff}
        width={500}
        height={250}
        padding={0}
        footer={null}
        closeIcon={modalCloseButton}
        centered
        destroyOnClose
      >
        <ModalLogoff close={closeModalLogOff} handleLogOff={logGoogleUser} />
      </ModalStyle>
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
