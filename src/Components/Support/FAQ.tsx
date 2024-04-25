import * as Styled from "./CustomTicket.styled";  
import { Collapse } from 'antd';
const { Panel } = Collapse;
import { useGetFAQQuery } from "../../Redux/slice";

const data = [
    {
        title: "How to deposit my money?",
        description: `Depositing money can be done in several ways, depending on the type of account you're depositing into (e.g., savings account, checking account, investment account) and the facilities provided by your bank or financial institution. Below are common methods for depositing money:

        1. Bank Branch Deposit
        Visit your bank's branch in person to deposit cash or checks. You'll typically fill out a deposit slip with your account number, the amount being deposited, and other relevant details. Hand it over to the teller along with your cash or check.
        
        2. ATM Deposit
        Many banks offer Automated Teller Machines (ATMs) where you can deposit cash or checks. Instructions can vary by machine, but generally, you'll insert your debit card, enter your PIN, and follow the prompts to make a deposit. Some ATMs use envelopes for deposits, while others allow you to insert cash or checks directly into the machine.
        
        3. Mobile Check Deposit
        If your bank offers mobile banking, you might be able to deposit checks using your smartphone. This is done by taking a photo of the front and back of the endorsed check through your bank's mobile app. Follow the app's instructions for completing the deposit.`
    },
    {
        title: "How to deposit my money?",
        description: `Depositing money can be done in several ways, depending on the type of account you're depositing into (e.g., savings account, checking account, investment account) and the facilities provided by your bank or financial institution. Below are common methods for depositing money:

        1. Bank Branch Deposit
        Visit your bank's branch in person to deposit cash or checks. You'll typically fill out a deposit slip with your account number, the amount being deposited, and other relevant details. Hand it over to the teller along with your cash or check.
        
        2. ATM Deposit
        Many banks offer Automated Teller Machines (ATMs) where you can deposit cash or checks. Instructions can vary by machine, but generally, you'll insert your debit card, enter your PIN, and follow the prompts to make a deposit. Some ATMs use envelopes for deposits, while others allow you to insert cash or checks directly into the machine.
        
        3. Mobile Check Deposit
        If your bank offers mobile banking, you might be able to deposit checks using your smartphone. This is done by taking a photo of the front and back of the endorsed check through your bank's mobile app. Follow the app's instructions for completing the deposit.`
    },
    {
        title: "How to deposit my money?",
        description: `Depositing money can be done in several ways, depending on the type of account you're depositing into (e.g., savings account, checking account, investment account) and the facilities provided by your bank or financial institution. Below are common methods for depositing money:

        1. Bank Branch Deposit
        Visit your bank's branch in person to deposit cash or checks. You'll typically fill out a deposit slip with your account number, the amount being deposited, and other relevant details. Hand it over to the teller along with your cash or check.
        
        2. ATM Deposit
        Many banks offer Automated Teller Machines (ATMs) where you can deposit cash or checks. Instructions can vary by machine, but generally, you'll insert your debit card, enter your PIN, and follow the prompts to make a deposit. Some ATMs use envelopes for deposits, while others allow you to insert cash or checks directly into the machine.
        
        3. Mobile Check Deposit
        If your bank offers mobile banking, you might be able to deposit checks using your smartphone. This is done by taking a photo of the front and back of the endorsed check through your bank's mobile app. Follow the app's instructions for completing the deposit.`
    }
]

const FAQ: React.FC = () => {

    const {
        data: faq,
        error,
        isLoading,
        isFetching,
    } = useGetFAQQuery(null);

    const onChange = (key) => {
    };

   return (
    <Styled.CustomTicketContainer>
        <Styled.StyledFAQContent accordion onChange={onChange}>
            <Styled.StyledH2>Frequently Asked Questions</Styled.StyledH2>
            { faq &&
                faq.data.map((item, index) => 
                <Panel header={item.title} key={index}>
                    <p style={{ whiteSpace: 'pre-line' }}>{item.description}</p>
                </Panel>
                )
            }
        </Styled.StyledFAQContent> 
    </Styled.CustomTicketContainer>
   );
};

export default FAQ;