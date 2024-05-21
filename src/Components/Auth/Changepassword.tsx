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
  const [otpError, setOtpError] = useState("");

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
      setIsSubmitting(false); // Stop submitting after opening the OTP modal
    }
  };

  const handleOtpSubmit = () => {
    if (otp === "123456") {
      // Dummy OTP validation logic
      message.success("Password changed successfully!");
      setIsOtpModalVisible(false);
      setIsSubmitting(false);
    } else {
      setOtpError("Invalid OTP");
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
              {({ errors, handleSubmit, touched }) => (
                <Form style={{ width: "100%" }} onFinish={handleSubmit}>
                  <Form.Item
                    validateStatus={
                      touched.currentPassword && errors.currentPassword
                        ? "error"
                        : ""
                    }
                    help={touched.currentPassword && errors.currentPassword}
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
                      touched.password && errors.password ? "error" : ""
                    }
                    help={touched.password && errors.password}
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
                      touched.confirmPassword && errors.confirmPassword
                        ? "error"
                        : ""
                    }
                    help={touched.confirmPassword && errors.confirmPassword}
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
                      disabled={isSubmitting}
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
            validateStatus={otpError ? "error" : ""}
            help={otpError || ""}
          >
            <Input
              value={otp}
              onChange={(e) => {
                setOtp(e.target.value);
                setOtpError("");
              }}
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
