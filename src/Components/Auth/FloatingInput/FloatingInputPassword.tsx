import React, { useState } from 'react';
import styled from 'styled-components';
import { Input } from 'antd';

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem; // Adjust spacing as needed
`;

export const StyledLabel = styled.label`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.3s ease;
  background: white;
  padding: 0 2px;
  pointer-events: none;
  color: black;
`;

export const StyledFloatInputPassword = styled(Input.Password)`
  width: 100%;
  height: 45px;
  border-radius: 6px;
  font-size: 14px; // Consolidated to one font-size for consistency
  padding: 0 15px;
  border: 1px solid #d9d9d9;
  background: transparent;
  color: black;
  outline: none;

  &:focus {
    border: 1px solid red;
  }
`;

const FloatingLabelInputPassword = ({ label, field, name }) => {
    const [isFocused, setIsFocused] = useState(false);
  
    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e) => {
        setIsFocused(false)
        field.onBlur(e);
    };

    console.log(isFocused);
  
    return (
      <InputWrapper>
        <StyledLabel
          style={{
            top: isFocused || field.value ? '-10px' : '50%',
            fontSize: isFocused || field.value ? '12px' : '16px', // Adjust font size for animation
            transform: isFocused || field.value ? 'translateY(0%)' : 'translateY(-50%)',
            zIndex: isFocused ? 999 : 1
          }}
        >
          {label}
        </StyledLabel>
        <StyledFloatInputPassword
          style={{ zIndex: 0 }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={field.onChange}
          value={field.value}
          name= {name}
        />
      </InputWrapper>
    );
  };

export default FloatingLabelInputPassword;