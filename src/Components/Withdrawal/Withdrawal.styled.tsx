import styled from "styled-components";
import { Select, Card} from "antd";  

export const WithdrawalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-right: 32px;
  padding-left: 32px;
  padding-top: 16px;
  padding-bottom: 32px;
  
  height: 100%;
  border-radius: 10px;
`;
 
export const FormContainer = styled.div`
  margin-left: auto;
  margin-right: auto; 
  width: 100%; 
  margin-top: 30px;
  
  padding:30px;

  

  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;

export const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  
  width: 100%;
  margin-top: 20px;
  padding: 0 24px;
`;

export const Balance = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  color: #f00000;
  width: 200px;
  height: 32px;
  padding: 4px 8px;
  margin-top: 10px;
  
`;

export const BalanceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-top: 16px;
  gap: 30px;
  

  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
 
export const StyledH2 = styled.h2`
  text-align: center;
  font-size: 28px;
  font-weight:700;
  color: #2e2e2e;
`; 
export const StyledForm = styled.form`
  text-align: left;
  
  

`;  
export const InputWrapper = styled.div`
  margin-bottom: 26px; 
  
`;     
export const StyledSelect = styled(Select)`  
  width: 200px;    
  
`;  
export const StyledCard= styled(Card)`  
  border: none;  
  background-color:#f9f9f9;
  box-shadow: 2px 4px 12px #00000014;
  padding:20px;
`;   
export const FieldLeft  = styled.div` 
  display: flex;
  align-items: center;  
  border-right: 1px solid lightgray;
  height: 40px;    
`; 
export const FieldLeftImg  = styled.img` 
  margin: 5px;   
`;