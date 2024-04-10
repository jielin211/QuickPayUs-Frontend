import hourglass from "../../../../assets/images/hourglass.jpeg";
import * as Styled from "./CompleteForm.styled";

export const CompleteForm = () => {
  return ( 
    <div>    
      <Styled.Heading>Under Review</Styled.Heading>
      <Styled.StyledImg src={hourglass}></Styled.StyledImg>    
      <p>You will get an email about the status of your verification</p>
    </div>
  ); 
}; 
  