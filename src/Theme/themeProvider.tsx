import { ConfigProvider } from "antd";
const ThemeProvider = ({ children }) => {
   return (
      <ConfigProvider
         theme={{
            token: {
               colorPrimary: "#DF0B0B",
            },
            components: {
               Card: {
                  borderRadius: 10,
               },
               Layout: {
                  bodyBg: "white",
               },
            },
         }}
      >
         {children}
      </ConfigProvider>
   );
};

export default ThemeProvider;
