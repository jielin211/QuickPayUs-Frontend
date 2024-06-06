import { useState } from 'react';
import * as Styled from "./FloatingInput.styled";

export const FloatingInput = ({ label, field, name, type }) => {
    const [isFocused, setIsFocused] = useState(false);
  
    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e) => {
        setIsFocused(false)
        field.onBlur(e);
    };

    return (
      <Styled.InputWrapper>
        <Styled.StyledLabel
          style={{
            top: isFocused || field.value ? '-10px' : '50%',
            fontSize: isFocused || field.value ? '12px' : '16px', // Adjust font size for animation
            transform: isFocused || field.value ? 'translateY(0%)' : 'translateY(-50%)',
            zIndex: isFocused ? 999 : 1
          }}
        >
          {label}
        </Styled.StyledLabel>
        <Styled.StyledFloatInput
          style={{ zIndex: 0 }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={field.onChange}
          value={field.value}
          name= {name}
          type={type}
        />
      </Styled.InputWrapper>
    );
  };