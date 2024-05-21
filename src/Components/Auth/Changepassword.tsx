import React, { useState } from "react";
import { Form, Col, Modal, Input, Button, message } from "antd";
import { Formik, Field, FormikHelpers } from "formik";
import FloatingLabelInputPassword from "./FloatingInput/FloatingInputPassword";
import * as Styled from "./Changepassword.style";

interface FormErrors {
  currentPassword?: string;
  password?: string;
  confirmPassword?: string;
}

const ChangePassword: React.FC = () => {
  const [isOtpModalVisible, setIsOtpModalVisible] = useState(false);
  const [otp, setOtp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChangePassword = (
    values: any,
    formikHelpers: FormikHelpers<any>
  ) => {
    setIsSubmitting(true);
    const errors = validateForm(values);

    if (Object.keys(errors).length > 0) {
      formikHelpers.setErrors(errors);
      setIsSubmitting(false);
    } else {
      console.log("Change Password Values:", values);
      setIsOtpModalVisible(true);
    }
  };

  const handleOtpSubmit = () => {
    if (otp === "123456") {
      // Dummy OTP validation logic
      message.success("Password changed successfully!");
      setIsOtpModalVisible(false);
      setIsSubmitting(false);
    } else {
      message.error("Invalid OTP");
    }
  };

  const validateForm = (values: any): FormErrors => {
    const errors: FormErrors = {};
    if (!values.currentPassword) {
      errors.currentPassword = "Current password is required";
    }
    if (!values.password) {
      errors.password = "New password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm password is required";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;
  };

  return (
    <Styled.MainContainer>
      <Styled.ContainerWrap>
        <Styled.ChangePasswordWrapper>
          <Styled.ChangePasswordTitle>
            Change Password
          </Styled.ChangePasswordTitle>
          <Styled.ChangePasswordContent>
            <Formik
              initialValues={{
                currentPassword: "",
                password: "",
                confirmPassword: "",
              }}
              validate={validateForm}
              onSubmit={handleChangePassword}
            >
              {({ values, errors, handleChange, handleSubmit, touched }) => (
                <Form style={{ width: "100%" }} onFinish={handleSubmit}>
                  <Form.Item
                    validateStatus={
                      isSubmitting && errors.currentPassword ? "error" : ""
                    }
                    help={isSubmitting && errors.currentPassword}
                    style={{ marginTop: "30px" }}
                  >
                    <Field name="currentPassword">
                      {({ field }) => (
                        <FloatingLabelInputPassword
                          label="Current Password"
                          field={field}
                          name="currentPassword"
                        />
                      )}
                    </Field>
                  </Form.Item>
                  <Form.Item
                    validateStatus={
                      isSubmitting && errors.password ? "error" : ""
                    }
                    help={isSubmitting && errors.password}
                    style={{ marginTop: "30px" }}
                  >
                    <Field name="password">
                      {({ field }) => (
                        <FloatingLabelInputPassword
                          label="New Password"
                          field={field}
                          name="password"
                        />
                      )}
                    </Field>
                  </Form.Item>
                  <Form.Item
                    validateStatus={
                      isSubmitting && errors.confirmPassword ? "error" : ""
                    }
                    help={isSubmitting && errors.confirmPassword}
                    style={{ marginTop: "30px" }}
                  >
                    <Field name="confirmPassword">
                      {({ field }) => (
                        <FloatingLabelInputPassword
                          label="Confirm Password"
                          field={field}
                          name="confirmPassword"
                        />
                      )}
                    </Field>
                  </Form.Item>
                  <Col span={24}>
                    <Styled.SaveBtn
                      type="primary"
                      size="large"
                      htmlType="submit"
                    >
                      Save
                    </Styled.SaveBtn>
                  </Col>
                </Form>
              )}
            </Formik>
          </Styled.ChangePasswordContent>
        </Styled.ChangePasswordWrapper>
      </Styled.ContainerWrap>

      <Modal
        title="Enter OTP"
        visible={isOtpModalVisible}
        onCancel={() => setIsOtpModalVisible(false)}
        footer={null}
      >
        <Form onFinish={handleOtpSubmit}>
          <Form.Item
            label="OTP"
            validateStatus={otp ? "" : "error"}
            help={otp ? "" : "Please enter the OTP"}
          >
            <Input
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
            />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </Modal>
    </Styled.MainContainer>
  );
};

export default ChangePassword;
