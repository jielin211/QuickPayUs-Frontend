import { Col, Row, Avatar } from "antd";
import * as Styled from "./Profile.styled.jsx"; 

const ProfileAbout = () => {
   return ( 
      <Styled.AboutMainRow gutter={[72, 72]}>
         <Col span={24}> 
            <div style={{textAlign: "center"}}>  
               <Avatar style={{
                  background: "#121212", 
                  width: "100px",
                  height: "100px", 
                  fontSize: "64px"
               }}>U</Avatar>    
               <h1 style={{marginBottom: "5px"}}>User Name</h1>  
               <p style={{ 
                  fontSize: "18px", 
                  margin: "0",
                  fontWeight: "600" , 
                  color: "#f00000"    
               }}>Level: 1</p>     
            </div> 
            <div
               style={{
                  marginTop: "40px", 
               }}  
            >
               <Styled.AboutBoxRow>    
                  <Styled.AboutBoxCol span={12} >      
                     <Styled.AboutBoxH4>First Name :</Styled.AboutBoxH4>   
                     <Styled.AboutBoxP>User</Styled.AboutBoxP>     
                  </Styled.AboutBoxCol>      
                  <Styled.AboutBoxCol2 span={12} >      
                     <Styled.AboutBoxH4>Last Name :</Styled.AboutBoxH4> 
                     <Styled.AboutBoxP>Name</Styled.AboutBoxP>     
                  </Styled.AboutBoxCol2>
               </Styled.AboutBoxRow>    
               <Styled.AboutBoxRow>    
                  <Styled.AboutBoxCol span={12} >      
                     <Styled.AboutBoxH4>Country :</Styled.AboutBoxH4>   
                     <Styled.AboutBoxP>Bangladesh</Styled.AboutBoxP>     
                  </Styled.AboutBoxCol>      
                  <Styled.AboutBoxCol2 span={12}>      
                     <Styled.AboutBoxH4>Number :</Styled.AboutBoxH4> 
                     <Styled.AboutBoxP>+88045465464</Styled.AboutBoxP>     
                  </Styled.AboutBoxCol2>
               </Styled.AboutBoxRow>
               <Styled.AboutBoxRow>    
                  <Styled.AboutBoxCol span={12}>      
                     <Styled.AboutBoxH4>Email :</Styled.AboutBoxH4>   
                     <Styled.AboutBoxP>email@gmail.com</Styled.AboutBoxP>     
                  </Styled.AboutBoxCol>      
                  <Styled.AboutBoxCol2 span={12}>      
                     <Styled.AboutBoxH4>Username :</Styled.AboutBoxH4> 
                     <Styled.AboutBoxP>username</Styled.AboutBoxP>     
                  </Styled.AboutBoxCol2>
               </Styled.AboutBoxRow>
            </div>
         </Col>
      </Styled.AboutMainRow>
   );
};

export default ProfileAbout;
