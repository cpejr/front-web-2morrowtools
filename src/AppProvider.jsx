import Routes from "./routes";
import { ConfigProvider } from "antd";
import { colors, fonts } from "./styles/styleVariables";

export default function AppProvider() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colors.blue.accent,
          colorBgContainer: colors.blue.backgroud,
          colorText: colors.white,
          fontFamily: fonts.Exo2,
          fontSize: "15px",
        },
        components: {
          Button: { primaryShadow: "0" },
          Card: {
            colorBgContainer: colors.grey.cardBackground,
            colorBorderSecondary: colors.transparent,
          },
          Input: {
            activeBorderColor: colors.blue.accent,
            activeShadow: `0 0 0 0.5px ${colors.blue.accentShadow}`,
            colorTextPlaceholder: colors.white,
          },
        },
      }}
    >
      <Routes />
    </ConfigProvider>
  );
}
