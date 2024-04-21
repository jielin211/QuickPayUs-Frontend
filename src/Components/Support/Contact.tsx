import * as Styled from "./CustomTicket.styled";  
import { EnvironmentFilled, PhoneFilled, SendOutlined } from '@ant-design/icons';

const ContactInfo: React.FC = () => {

   return (
    <Styled.CustomTicketContainer>
        <Styled.StyledH2>Contact Us</Styled.StyledH2>
        <Styled.StyledContactContent>
            <Styled.ContactItemWrapper>
                <Styled.ContactIconWrapper>
                    <EnvironmentFilled style={{color: "white"}}/>
                </Styled.ContactIconWrapper>
                <Styled.ContactItemContentWrapper>
                    <b>Address</b>: qweqweqweqweqweqweqweqweq weqweqweqweqweqweq weqweqweqwssssssssssssssssss sssssssss
                </Styled.ContactItemContentWrapper>
            </Styled.ContactItemWrapper>
            <Styled.ContactItemWrapper>
                <Styled.ContactIconWrapper>
                    <SendOutlined style={{color: "white"}}/>
                </Styled.ContactIconWrapper>
                <Styled.ContactItemContentWrapper>
                    <b>Email</b>: qweqweqweqweqweqweqweqwe
                </Styled.ContactItemContentWrapper>
            </Styled.ContactItemWrapper>
            <Styled.ContactItemWrapper>
                <Styled.ContactIconWrapper>
                    <PhoneFilled style={{color: "white"}}/>
                </Styled.ContactIconWrapper>
                <Styled.ContactItemContentWrapper>
                    <b>Phone</b>: qweqweqweqweqweqweqweqwe
                </Styled.ContactItemContentWrapper>
            </Styled.ContactItemWrapper>
            <Styled.ContactItemWrapper>
                <Styled.ContactIconWrapper>
                    <EnvironmentFilled style={{color: "white"}}/>
                </Styled.ContactIconWrapper>
                <Styled.ContactItemContentWrapper>
                    <b>Website</b>: qweqweqweqweqweqweqweqwe
                </Styled.ContactItemContentWrapper>
            </Styled.ContactItemWrapper>
        </Styled.StyledContactContent>
    </Styled.CustomTicketContainer>
   );
};

export default ContactInfo;