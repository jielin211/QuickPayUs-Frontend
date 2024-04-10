import { SearchOutlined } from "@ant-design/icons";
import { Col, Input, Row } from "antd";
import accountIcon from "../../assets/images/support-account.svg";
import billingIcon from "../../assets/images/support-billing.svg";
import reportIcon from "../../assets/images/support-report.svg";
import * as Styled from "./Support.styled";   
const Support = () => {
   return (
      <div>     
         <Styled.BgTop className="supportbg"> 
            <Styled.StyledH1>
               How can we help? 
            </Styled.StyledH1>   
            <Styled.StyledInput    
               placeholder="Search"
               prefix={<SearchOutlined />} 
            />   
         </Styled.BgTop>  

         <Styled.TopicWrapper>     
            <Styled.StyledH2>Help Topics</Styled.StyledH2>
            <Styled.StyledRow  
               justify={"space-between"} 
            > 
               {/* Col */}    
               <Styled.StyledCol lg={11}>  
                  <Row>
                     <Col lg={6}>
                        <img src={accountIcon} alt="." />
                     </Col>
                     <Col lg={18}>  
                        <Styled.StyledH3>
                           My Account
                        </Styled.StyledH3> 
                        <Styled.StyledP>
                           How to manage your account and it’s features.
                        </Styled.StyledP>
                     </Col>
                  </Row>
               </Styled.StyledCol>   
               {/* Col */}    
               <Styled.StyledCol lg={11}> 
                  <Row> 
                     <Col lg={6}> 
                        <img src={billingIcon} alt="." />
                     </Col>
                     <Col lg={18}> 
                        <Styled.StyledH3> 
                           Billing & Payments
                        </Styled.StyledH3>
                        <Styled.StyledP> 
                           Information about how we chargefor our services.
                        </Styled.StyledP> 
                     </Col>
                  </Row>
               </Styled.StyledCol>
               {/* Col */}
               <Styled.StyledCol lg={11}>
                  <Row>
                     <Col lg={6}>
                        <img src={reportIcon} alt="." />
                     </Col>
                     <Col lg={18}>
                        <Styled.StyledH3> 
                           Report 
                        </Styled.StyledH3> 
                        <Styled.StyledP> 
                           Report any issue or complaint related to us.
                        </Styled.StyledP>
                     </Col>
                  </Row>
               </Styled.StyledCol> 
            </Styled.StyledRow>    
         </Styled.TopicWrapper>
      </div>
   );
};

export default Support;
