import * as Styled from "./CustomTicket.styled";  
import { EnvironmentFilled, PhoneFilled, SendOutlined } from '@ant-design/icons';

const ContactInfo: React.FC = () => {

   return (
    <Styled.CustomTicketContainer>
        <Styled.StyledContactContent>
            <Styled.StyledH2>Contact Us</Styled.StyledH2>
            <Styled.ContactItemWrapper>
                <Styled.ContactIconWrapper>
                    <EnvironmentFilled style={{color: "white"}}/>
                </Styled.ContactIconWrapper>
                <Styled.ContactItemContentWrapper>
                    <b>Address</b>: <br/>ENCINITAS CA 92024, USA
                </Styled.ContactItemContentWrapper>
            </Styled.ContactItemWrapper>
            <Styled.ContactItemWrapper>
                <Styled.ContactIconWrapper>
                    <SendOutlined style={{color: "white"}}/>
                </Styled.ContactIconWrapper>
                <Styled.ContactItemContentWrapper>
                    <b>Email</b>: <br/>support@quickpayus.com
                </Styled.ContactItemContentWrapper>
            </Styled.ContactItemWrapper>
            <Styled.ContactItemWrapper>
                <Styled.ContactIconWrapper>
                    <PhoneFilled style={{color: "white"}}/>
                </Styled.ContactIconWrapper>
                <Styled.ContactItemContentWrapper>
                    <b>Phone</b>: <br/>+1 760-487-5420
                </Styled.ContactItemContentWrapper>
            </Styled.ContactItemWrapper>
            <Styled.ContactItemWrapper>
                <Styled.ContactIconWrapper>
                    <EnvironmentFilled style={{color: "white"}}/>
                </Styled.ContactIconWrapper>
                <Styled.ContactItemContentWrapper>
                    <b>Website</b>: <br/>quickpayus.com
                </Styled.ContactItemContentWrapper>
            </Styled.ContactItemWrapper>
        </Styled.StyledContactContent>
    </Styled.CustomTicketContainer>
   );
};

export default ContactInfo;