import { ConfigProvider } from "antd";
const ThemeProvider = ({ children }) => {
   return (
      <ConfigProvider
         theme={{
            token: {
               colorPrimary: "#007AFF",
            },
            components: {
               Card: {
                  borderRadius: 18,
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
