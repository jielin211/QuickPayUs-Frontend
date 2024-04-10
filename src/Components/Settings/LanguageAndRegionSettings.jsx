import { Link } from "react-router-dom";
import rightArrow from "../../assets/images/red-right-arrow.svg";
import * as Styled from "./settings.styled.jsx"; 

const LanguageAndRegionSettings = () => {
   return (
      <Styled.SettingsBox>
         <Styled.SettingsBoxH2>
            Language & Region
         </Styled.SettingsBoxH2>
         <div>
            <Link
               to="/change-password"
               style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #d9d9d9",
                  paddingInline: "10px",
               }}
            >
               <Styled.SettingsBoxP>
                  Choose Language
               </Styled.SettingsBoxP>
               <img src={rightArrow} alt="." />
            </Link>
            <Link
               to="/change-password"
               style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #d9d9d9",
                  paddingInline: "10px",
               }}
            >
               <Styled.SettingsBoxP>
                  Choose Region
               </Styled.SettingsBoxP>
               <img src={rightArrow} alt="." />
            </Link>
         </div>
      </Styled.SettingsBox>
   );
};

export default LanguageAndRegionSettings;
