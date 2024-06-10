import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  Card,
  Typography,
  Space,
  message,
  Modal,
} from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import styled from "styled-components";

const { Title, Text } = Typography;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 17px;
  height: 100vh;
`;

const FormCard = styled(Card)`
  width: 100%;
  border-radius: 10px;
`;

const ChangeNamePage: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("user@example.com"); // Assuming email is predefined
  const [password, setPassword] = useState("");

  const handleNameChangeSubmit = (values: any) => {
    const { name } = values;
    setName(name);
    setIsModalVisible(true);
  };

  const handlePasswordSubmit = (values: any) => {
    const { password } = values;
    setPassword(password);

    // Dummy login logic
    if (password === "password") {
      message.success("Name updated successfully");
      setIsModalVisible(false);
    } else {
      message.error("Invalid password");
    }
  };

  return (
    <Container>
      <FormCard>
        <Title align={"center"} level={3}>
          Change Name
        </Title>
        <Form
          name="change_name_form"
          initialValues={{ name }}
          onFinish={handleNameChangeSubmit}
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input your Name!" }]}
          >
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="confirmName"
            dependencies={["name"]}
            rules={[
              { required: true, message: "Please confirm your Name!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("name") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The two names do not match!")
                  );
                },
              }),
            ]}
          >
            <Input placeholder="Confirm Name" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Change Name
            </Button>
          </Form.Item>
        </Form>
      </FormCard>

      <Modal
        title="Confirm Password"
        visible={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
      >
        <Form name="password_form" onFinish={handlePasswordSubmit}>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Confirm
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Container>
  );
};

export default ChangeNamePage;
