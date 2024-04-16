import React from 'react';
import * as Styled from "./FloatingInput.styled";

interface FloatingInputProps {
    label: string;
    name: string;
    field: object;
}

export const FloatingInput: React.FC<FloatingInputProps> = ({ label, name, field }) => (
    <Styled.StyledFloatInputWrapper>
        <Styled.StyledFloatInput type="text" required spellCheck="false" name={name} {...field}/>
        <Styled.StyledFloatInputLabel>{label}</Styled.StyledFloatInputLabel>
    </Styled.StyledFloatInputWrapper>
);