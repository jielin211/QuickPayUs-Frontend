import { Button, Input, InputRef, Space } from "antd";
import React, { useEffect, useRef } from "react";

import { CountrySelector, usePhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

interface AntPhoneProps {
  value: string;
  onChange: any;
  onBlur: any;
  name: string,
  handleChange: any
}

export const AntPhone: React.FC<AntPhoneProps> = ({ value, onChange, handleChange }) => {
  const phoneInput = usePhoneInput({
    defaultCountry: "us",
    value,
    onChange: (data) => {
      onChange(data.phone);
      handleChange(data.country.dialCode, data.phone);
    }
  });

  const inputRef = useRef<InputRef>(null);

  // Need to reassign inputRef because antd provides not default ref
  useEffect(() => {
    if (phoneInput.inputRef && inputRef.current?.input) {
      phoneInput.inputRef.current = inputRef.current.input;
    }
  }, [inputRef, phoneInput.inputRef]);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Space.Compact style={{width: "100%"}}>
        <CountrySelector
          selectedCountry={phoneInput.country.iso2}
          onSelect={(country) => phoneInput.setCountry(country.iso2)}
          renderButtonWrapper={({ children, rootProps }) => (
            <Button
              {...rootProps}
              style={{
                padding: "4px",
                height: "100%",
                zIndex: 1 // fix focus overlap
              }}
            >
              {children}
            </Button>
          )}
          dropdownStyleProps={{
            style: {
              top: "35px"
            }
          }}
        />
        <Input
          placeholder="Phone number"
          type="tel"
          value={phoneInput.phone}
          name="phone"
          onChange={phoneInput.handlePhoneValueChange}
          ref={inputRef}
          style={{height: "40px"}}
        />
      </Space.Compact>
    </div>
  );
};
