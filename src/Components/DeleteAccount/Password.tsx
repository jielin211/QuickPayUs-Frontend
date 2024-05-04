import React from "react";
import { Col, Form } from "antd";
import { Formik, Field } from "formik";
import axios from "axios";
import * as Styled from "./accountdelete.styled";
import { FloatingInput } from "../Auth/FloatingInput/FloatingInput";
import FloatingLabelInputPassword from "../Auth/FloatingInput/FloatingInputPassword";
import DeleteIcon from '../../assets/images/delete.svg'

interface FormErrors {
  email?: string;
  password?: string;
}

interface DeleteAccountValues {
  email: string;
  password: string;
}

const AccountDelete: React.FC = () => {
  const handleDeleteAccount = async (values: DeleteAccountValues): Promise<void> => {
    const reqData = {
      email: values.email,
      password: values.password,
    };

    try {
      const response = await axios.post('/api/v1/auth/delete', reqData);
      console.log("Account deletion successful");
    } catch (error) {
      console.error("Error during account deletion:", error);
    }
  };

  return (
    <Styled.MainRow className="account-delete">
      <Col xs={24} sm={14} md={12} lg={10} xl={9}>
        <Styled.MainCard>
          <Styled.StyledH1>
            Delete Your Account 
              
          </Styled.StyledH1>
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors: FormErrors = {};

              if (!values.email) {
                errors.email = "Please input your email";
              }
              if (!values.password) {
                errors.password = "Please input your password";
              }
              return errors;
            }}
            onSubmit={handleDeleteAccount}
          >
            {({ errors, handleSubmit, isSubmitting }) => (
              <Form layout="vertical" onFinish={handleSubmit}>
                <Form.Item
                  label=""
                  validateStatus={errors.email && "error"}
                  help={errors.email}
                >
                  <Field name="email">
                    {({ field }) => (
                      <FloatingInput
                        label="Email / Username"
                        name="email"
                        field={field}
                      />
                    )}
                  </Field>
                </Form.Item>
                <Form.Item
                  label=""
                  validateStatus={errors.password && "error"}
                  style={{ marginTop: "30px" }}
                  help={errors.password}
                >
                  <Field name="password">
                    {({ field }) => (
                      <FloatingLabelInputPassword
                        label="Password"
                        field={field}
                        name="password"
                      />
                    )}
                  </Field>
                </Form.Item>
                <Form.Item>
                  <Styled.SignInButton
                    type="primary"
                    htmlType="submit"
                    disabled={isSubmitting}
                  >
                    Delete My Account
                  </Styled.SignInButton>
                </Form.Item>
              </Form>
            )}
          </Formik>
        </Styled.MainCard>
      </Col>
    </Styled.MainRow>
  );
};

export default AccountDelete;
