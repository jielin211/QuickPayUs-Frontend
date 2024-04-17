import { Col, Row, Avatar } from "antd";
import * as Styled from "./Profile.styled.js"; 

const profileData = [
   { label: "First Name :", value: "User" },
   { label: "Last Name :", value: "Name" },
   { label: "Email :", value: "email@gmail.com" },
   { label: "Username :", value: "username" },
   { label: "Country :", value: "Bangladesh" },
   { label: "Number :", value: "+88045465464" },
];

const ProfileAbout = () => {
   return ( 
      <Styled.AboutMainRow gutter={[72, 72]}>
         <Col span={24}> 
            <Styled.StyledUserInfo>  
               <Styled.StyledProfileAvatar>U</Styled.StyledProfileAvatar>
               <Styled.StyledNameLabel>User Name</Styled.StyledNameLabel>
               <Styled.StyledLevelLabel>Level: 1</Styled.StyledLevelLabel>
            </Styled.StyledUserInfo> 
            <Styled.AboutBoxRow>
               {profileData.map((item, index) => (
                  <Styled.AboutBoxCol span={12} key={index}>      
                     <Styled.AboutBoxH4>{item.label}</Styled.AboutBoxH4>   
                     <Styled.AboutBoxP>{item.value}</Styled.AboutBoxP>     
                  </Styled.AboutBoxCol>      
               ))}
            </Styled.AboutBoxRow>
         </Col>
      </Styled.AboutMainRow>
   );
};

export default ProfileAbout;
