import React from "react";
import styled from "styled-components";

// antd
import { Input, Button, Card, Form, Typography } from "antd";

// breakpoints
import { breakpoint } from "../../breakpoints";

const { Title } = Typography;

const StyledTitle = styled(Title)`
  text-align: center;
  ${breakpoint.md} {
    text-align: left;
  }
`;

const ChangeEmail: React.FC = () => {
  const handleChangeEmail = (values) => {
    console.log(values);
    // Here you would typically make an API call to change the email
    // Example:
    // changeEmail({ currentPassword, newEmail })
    //   .then(response => { /* handle success */ })
    //   .catch(error => { setError(error.message); });
    // For this example, we'll just clear the fields and log a message
    // console.log("Email changed successfully");
  };

  return (
    <Card>
      <StyledTitle level={3}>Change Email</StyledTitle>
      <Form name="change_email_form" onFinish={handleChangeEmail}>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Please input current password!" },
          ]}
        >
          <Input
            placeholder="Current Password"
            type="password"
            name="password"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input new email!" }]}
        >
          <Input placeholder="New Email" type="email" name="email" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Change Email
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default ChangeEmail;
