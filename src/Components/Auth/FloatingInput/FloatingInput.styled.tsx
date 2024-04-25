import styled from 'styled-components';
import { Input } from 'antd';

export const InputWrapper = styled.div`
  position: relative;
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

export const StyledFloatInput = styled(Input)`
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