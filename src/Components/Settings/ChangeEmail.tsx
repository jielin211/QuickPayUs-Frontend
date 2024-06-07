import React, { useState } from "react";
import { Input, Button } from "antd";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background-color: var(--color-bg-container);
  border-radius: 8px;
  max-width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  // color: #333333;
`;

const StyledInput = styled(Input)`
  // padding: 12px 15px;
  margin: 10px 0;
  // border: 1px solid #ddd;
  // border-radius: 4px;
  // width: 100%;
  // font-size: 16px;
  // box-sizing: border-box;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.25);
  }
`;

const StyledButton = styled(Button)`
  // padding: 12px 20px;
  margin-top: 20px;
  // background-color: #007bff;
  // color: white;
  // border: none;
  // border-radius: 4px;
  // cursor: pointer;
  // font-size: 16px;
  // width: 100%;
  // box-sizing: border-box;

  &:hover {
    // background-color: #0056b3;
  }

  &:disabled {
    // background-color: #ccc;
    // cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
  font-size: 14px;
`;

const ChangeEmail: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [error, setError] = useState("");

  const handleChangeEmail = () => {
    if (!currentPassword || !newEmail) {
      setError("Please fill in both fields.");
      return;
    }

    // Here you would typically make an API call to change the email
    // Example:
    // changeEmail({ currentPassword, newEmail })
    //   .then(response => { /* handle success */ })
    //   .catch(error => { setError(error.message); });

    // For this example, we'll just clear the fields and log a message
    setCurrentPassword("");
    setNewEmail("");
    setError("");
    console.log("Email changed successfully");
  };

  return (
    <div
      style={{
        // background: "#f4f4f4",
        height: "100%",
        width: "100%",
        padding: "17px",
      }}
    >
      <Container>
        <Title>Change Email</Title>
        <StyledInput
          type="password"
          placeholder="Current Password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <StyledInput
          type="email"
          placeholder="New Email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
        <StyledButton
          onClick={handleChangeEmail}
          type="primary"
          disabled={!currentPassword || !newEmail}
          block
        >
          Change Email
        </StyledButton>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Container>
    </div>
  );
};

export default ChangeEmail;
