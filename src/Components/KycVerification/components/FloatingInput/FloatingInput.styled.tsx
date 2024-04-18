import styled from "styled-components";

export const StyledFloatInputWrapper = styled.div`
  position: relative; 
`;

export const StyledFloatInput = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 6px;
  font-size: 18px;
  padding: 0 15px;
  border: 1px solid #d9d9d9;
  background: transparent;
  color: black;
  outline: none;
  font-size: 14px;

  &:focus {
    border: 1px solid red;
  }

  &:focus ~ label,
  &:valid ~ label {
    top: 0;
    left: 15px;
    font-size: 12px;
    padding: 0 2px;
    background: white;

    position: absolute; /* Ensure label can be positioned relative to input */
    transition: all 0.3s ease; /* Smooth transition for label movement */
    color: black; /* Set label text color */
  }
`;

export const StyledFloatInputLabel = styled.label`
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    color: black;
    font-size: 14px;
    pointer-event: none;
    transition: 0.3s;
`

