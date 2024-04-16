import React from 'react';
import * as Styled from "./FloatingInput.styled";

interface FloatingInputProps {
    label: string;
    name: string;
}

export const FloatingInput: React.FC<FloatingInputProps> = ({ label, name }) => (
    <Styled.StyledFloatInputWrapper>
        <Styled.StyledFloatInput type="text" required spellCheck="false" name={name} />
        <Styled.StyledFloatInputLabel>{label}</Styled.StyledFloatInputLabel>
    </Styled.StyledFloatInputWrapper>
);