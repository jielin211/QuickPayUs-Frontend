import styled from "styled-components";

// antd
import { Select, Collapse, Card } from "antd";

// breakpoints
import { breakpoint } from "../../breakpoints";

export const StyledTitle = styled.h2`
  font-weight: var(--font-weight-page-title);
  margin-bottom: var(--margin-bottom-page-title);
  text-align: center;
  ${breakpoint.md} {
    text-align: left;
  }
`;
export const StyledCard = styled(Card)`
  margin-bottom: 20px;
`;
export const StyledSelect = styled(Select)`
  width: 100%;
`;
export const StyledModalTitle = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 24px;
`;
export const StyledFAQContent = styled(Collapse)`
  margin: 0 auto;
  width: 80%;
  margin-top: 30px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 24px;

  @media screen and (max-width: 992px) {
    width: 100%;
    box-shadow: none;
  }
`;
export const StyledContactContent = styled.div`
  margin: 0 auto;
  width: 350px;
  margin-top: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 24px;

  @media screen and (max-width: 992px) {
    width: 100%;
    box-shadow: none;
  }
`;
export const ContactIconWrapper = styled.div`
  font-size: 24px;
  background: #4f95f7;
  padding: 10px 12px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
`;
export const ContactItemWrapper = styled.div`
  display: flex;
  margin: 20px;
`;
export const ContactItemContentWrapper = styled.div`
  padding: 0 10px;
  wordwrap: break-word;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
`;
