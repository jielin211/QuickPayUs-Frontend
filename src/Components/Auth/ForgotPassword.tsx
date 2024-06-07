import React, { useState, useEffect } from "react";
import { Formik, Field } from "formik";
import { Form } from "antd";
import * as Styled from "./SignUp.styled";
import { InputOTP } from "antd-input-otp";
import FloatingLabelInputPassword from "./FloatingInput/FloatingInputPassword";
import { FloatingInput } from "./FloatingInput/FloatingInput";

interface FormErrors {
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
};

const steps = ["Email", "OTP", "Password", "Confirm Password"];

const ForgotPassword: React.FC = () => {
  const [otp, setOtp] = useState([]);
  const [minutes, setMinutes] = useState<number>(1);
  const [seconds, setSeconds] = useState<number>(59);
  const [showMoreInfo, setShowMoreInfo] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  const resendOTP = () => {
    setMinutes(1);
    setSeconds(30);
  };

  const handleLearnMoreClick = () => {
    setShowMoreInfo(!showMoreInfo); // Toggle the state
  };

  const [currentStep, setCurrentStep] = React.useState(0);

  const nextStep = () => {
    if (currentStep === steps.length - 1) {
      window.location.href = "/signin";
    } else {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  const validate = (values): FormErrors => {
    const errors: FormErrors = {};

    if (currentStep === 0) {
      if (!values.email) {
        errors.email = "Email address is required";
      } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
        errors.email = "Invalid email address";
      }
    }

    if (currentStep === 2) {
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 6) {
        errors.password = "Password should be more than 6 characters";
      }
    }

    if (currentStep === 3) {
      if (!values.confirmPassword) {
        errors.confirmPassword = "Confirm password is required";
      } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Confirm password should be matched";
      }
    }

    return errors;
  };

  const handleOtpInput = (value) => {
    setOtp(value);
    if (value.length === 6) {
      nextStep();
    }
  };

  return (
    <Styled.StyledWrapper className="signup">
      <Styled.MainCard title="Reset Your Password">
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, values, errors, touched }) => (
            <Form>
              <Styled.InputBox>
                {currentStep === 0 && (
                  <Form.Item
                    validateStatus={
                      touched.email ? (!errors.email ? "success" : "error") : ""
                    }
                  >
                    <Form.Item
                      label=""
                      validateStatus={errors.email && "error"}
                      help={errors.email}
                    >
                      <Field name="email">
                        {({ field }) => (
                          <FloatingInput
                            label="Email"
                            name="email"
                            field={field}
                          />
                        )}
                      </Field>
                    </Form.Item>
                  </Form.Item>
                )}
                {currentStep === 1 && (
                  <>
                    <InputOTP value={otp} onChange={handleOtpInput} />
                    <Styled.CountDownTimer>
                      {seconds > 0 || minutes > 0 ? (
                        <p>
                          Time Remaining:{" "}
                          <span style={{ fontWeight: 600 }}>
                            {minutes < 10 ? `0${minutes}` : minutes}:
                            {seconds < 10 ? `0${seconds}` : seconds}
                          </span>
                        </p>
                      ) : (
                        // Display if countdown timer reaches 0
                        <p>Didn't receive code?</p>
                      )}
                    </Styled.CountDownTimer>
                  </>
                )}
                {currentStep === 2 && (
                  <Form.Item
                    label=""
                    validateStatus={errors.password && "error"}
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
                )}
                {currentStep === 3 && (
                  <Form.Item
                    label=""
                    validateStatus={errors.confirmPassword && "error"}
                    help={errors.confirmPassword}
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
                )}

                {currentStep !== steps.length && (
                  <Styled.BtnGrp>
                    {currentStep !== 1 && (
                      <>
                        {currentStep > 0 && (
                          <Styled.PreviousBtn onClick={prevStep}>
                            Previous
                          </Styled.PreviousBtn>
                        )}
                        <Styled.NextBtn
                          type="primary"
                          htmlType={
                            currentStep === steps.length - 1
                              ? "submit"
                              : "button"
                          }
                          onClick={nextStep}
                          loading={isSubmitting}
                          className={
                            currentStep === 1
                              ? "getone"
                              : currentStep === steps.length - 1
                              ? "Submit"
                              : "Next"
                          }
                          disabled={Object.keys(validate(values)).some(
                            (field) => !!field
                          )}
                        >
                          {currentStep === steps.length - 1 ? "Submit" : "Next"}
                        </Styled.NextBtn>
                      </>
                    )}
                    {currentStep === 1 && (
                      <Styled.PreviousBtn
                        onClick={resendOTP}
                        disabled={seconds > 0 || minutes > 0}
                      >
                        Resend OTP
                      </Styled.PreviousBtn>
                    )}
                  </Styled.BtnGrp>
                )}
              </Styled.InputBox>
            </Form>
          )}
        </Formik>
        <Styled.SignInWrapper>
          <Styled.SignInBtn>
            <Styled.StyleLink to="/signin">Sign In</Styled.StyleLink>
          </Styled.SignInBtn>
          <p>if you’re a member.</p>
        </Styled.SignInWrapper>

        <Styled.PrivacyTxt>
          This page is protected by Google reCAPTCHA to ensure you&apos;re not a
          bot.
          <Styled.LearnMoreButton href="#" onClick={handleLearnMoreClick}>
            Learn more.
          </Styled.LearnMoreButton>
        </Styled.PrivacyTxt>
        <Styled.PrivacyTxt2 className={showMoreInfo ? "privacy-visible" : ""}>
          The information collected by Google reCAPTCHA is subject to the Google{" "}
          <a
            href="https://policies.google.com/privacy"
            className="color-red"
            target="_blank"
          >
            {" "}
            Privacy Policy{" "}
          </a>{" "}
          and{" "}
          <a
            href="https://policies.google.com/terms"
            className="color-red"
            target="_blank"
          >
            {" "}
            Terms of Service,{" "}
          </a>{" "}
          and is used for providing, maintaining, and improving the reCAPTCHA
          service and for general security purposes (it is not used for
          personalized advertising by Google).
        </Styled.PrivacyTxt2>
      </Styled.MainCard>
    </Styled.StyledWrapper>
  );
};

export default ForgotPassword;
