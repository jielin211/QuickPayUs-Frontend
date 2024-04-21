import React, { useState } from "react";
import { Typography, Form, Col, Checkbox } from "antd";
import { Formik, Field } from "formik";
import axios from "axios"
import * as Styled from "./SignIn.styled";
import { FloatingInput } from "./FloatingInput/FloatingInput";
import FloatingLabelInputPassword from "./FloatingInput/FloatingInputPassword";

interface FormErrors {
  email?: string;
  password?: string;
}

interface SignInValues {
  email: string;
  password: string;
}

interface FormikBag {
  setSubmitting: (isSubmitting: boolean) => void;
}

const SignIn: React.FC = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const handleLearnMoreClick = () => {
    setShowMoreInfo(!showMoreInfo); // Toggle the state
  };


  const handleSignIn = async (values: SignInValues, { setSubmitting }: FormikBag): Promise<void> => {
    const reqData = {
      email: values.email,
      password: values.password,
    };

    try {
      const response = await axios.post('/api/v1/auth/signin', reqData);

      // Axios automatically parses JSON, so you don't need to call `.json()`
      const data = response.data;

      // Save the token in a cookie
      document.cookie = `token=${data.token}; path=/`;

      console.log("Sign-in successful");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error during sign-in:", error.response?.data);
      } else {
        console.error("Error during sign-in:", error);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Styled.MainRow className="signin">
      <Col xs={24} sm={14} md={12} lg={10} xl={9}>
        <Styled.MainCard>
          <Styled.StyledH1>
            Sign In if you're a member
          </Styled.StyledH1>
          <Formik
            initialValues={{ email: "", password: "", remember: true }}
            validate={(values) => {
              const errors: FormErrors = {};

              if (!values.email) {
                errors.email = "Please input your email!";
              }
              if (!values.password) {
                errors.password = "Please input your password!";
              }
              return errors;
            }}
            onSubmit={handleSignIn}
          >
            {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
              <Form layout="vertical" onFinish={handleSubmit}>
                {/* <Form.Item
                  label="Email / Username"
                  validateStatus={errors.email && "error"}
                  help={errors.email}
                >
                  <Styled.StyledInput
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                  />

                </Form.Item> */}
                <Field name="firstName"> 
                  {({ field }) => (
                    <FloatingInput 
                      label="Email / Username" 
                      name="firstName" 
                      field= {field}
                  />
                  )}
                </Field>

                

                <Form.Item
                  label=""
                  validateStatus={errors.password && "error"}
                  style={{marginTop: "20px"}}
                  help={errors.password}
                >
                  <Field name="password"> 
                  {({ field }) => (
                    <FloatingLabelInputPassword 
                      label="Password" 
                      field= {field}
                      name="password"
                    />
                  )}
                </Field>
                  {/* <Styled.StyledInputPassword
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    placeholder="Password"
                  /> */}
                </Form.Item>
                <Form.Item>
                  <Styled.SignInButton
                    type="primary"
                    htmlType="submit"
                    disabled={isSubmitting}
                  >
                    Sign In
                  </Styled.SignInButton>
                </Form.Item>
                <a href="#">
                  <Styled.ForgetTxt>
                    <Styled.StyleLink to="/forgot-password">
                      Forget Password?
                    </Styled.StyleLink>
                    
                  </Styled.ForgetTxt>
                </a>
                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
              </Form>
            )}
          </Formik>


          <p>
            <Styled.SignUpBtn>
              <Styled.StyleLink to="/signup">Sign Up</Styled.StyleLink>
            </Styled.SignUpBtn>
            to join QUICKPAYUS.
          </p>
          <Styled.PrivacyTxt>
            This page is protected by Google reCAPTCHA to ensure you&apos;re not
            a bot.
            <Styled.LearnMoreButton href="#" onClick={handleLearnMoreClick}>
              Learn more.
            </Styled.LearnMoreButton>
          </Styled.PrivacyTxt>
          <Styled.PrivacyTxt2 className={showMoreInfo ? "privacy-visible" : ""}>
            The information collected by Google reCAPTCHA is subject to the
            Google <a href="https://policies.google.com/privacy" className="color-red" target="_blank"> Privacy Policy </a>  and <a href="https://policies.google.com/terms" className="color-red" target="_blank"> Terms of Service, </a> and is used for
            providing, maintaining, and improving the reCAPTCHA service and for
            general security purposes (it is not used for personalized
            advertising by Google).
          </Styled.PrivacyTxt2>
        </Styled.MainCard>
      </Col>
    </Styled.MainRow>
  );
};

export default SignIn;
