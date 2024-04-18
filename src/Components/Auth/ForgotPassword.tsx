import React, { useState, useMemo, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Steps, Select} from 'antd';  
import * as Styled from "./SignUp.styled";  
import { InputOTP } from "antd-input-otp";
import FloatingLabelInputPassword from "./FloatingInput/FloatingInputPassword";

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  username?: string;
  password?: string;
  confirmPassword?: string;
  referral?: string;
  policy?: string;
  phone?: string
}

const initialValues = {  
  firstName: '',
  lastName: '',
  email: '',
  username: '',
  password: '', 
  confirmPassword: '', 
  referral: '',
  phone: ''
};  
  
const steps = [ 'OTP', 'Password', 'Confirm Password', ''];
  
const ForgotPassword = () => {    
 
  const [otp, setOtp] = useState([]);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(59);
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  useEffect(() => {
    // Function to handle the countdown logic
    const interval = setInterval(() => {
      // Decrease seconds if greater than 0
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      // When seconds reach 0, decrease minutes if greater than 0
      if (seconds === 0) {
        if (minutes === 0) {
          // Stop the countdown when both minutes and seconds are 0
          clearInterval(interval);
        } else {
          // Reset seconds to 59 and decrease minutes by 1
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000); // Run this effect every 1000ms (1 second)

    return () => {
      // Cleanup: stop the interval when the component unmounts
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
    setCurrentStep((prevStep) => prevStep + 1);
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

    if (currentStep === 1) {
      
    } else if (currentStep === 2 ) {
      
    } else if (currentStep === 3) {
      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (!values.username) {
        errors.username = 'Username is required';
      }
    } 

    return errors;
  };

  const handleOtpInput = (value) => {
    setOtp(value);
  };
 
  return (     
    <Styled.StyledWrapper className='signup'> 
      <Styled.MainCard 
        title="Reset Your Password"   
      > 
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={handleSubmit} 
        > 
          {({ isSubmitting, values }) => (  
            <Form>   
              <Styled.InputBox>     
                {currentStep === 0 && (  
                    <>
                        <InputOTP value={otp} onChange={handleOtpInput} />
                        <div className="countdown-text" style={{textAlign: "center"}}>
                            
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
                        </div>
                    </>
                )} 
                {currentStep === 1 && (
                  <>
                    <Field name="password"> 
                      {({ field }) => (   
                        <FloatingLabelInputPassword 
                            label="Password" 
                            field= {field}
                            name="password"
                        />
                      )}
                    </Field> 
                  </>
                )}
                {currentStep === 2 && (
                  <Field name="confirmPassword">    
                    {({ field }) => (  
                        <FloatingLabelInputPassword 
                            label="Confirm Password" 
                            field= {field}
                            name="confirmPassword"
                        />
                    )}
                  </Field>
                )}

                { currentStep !== steps.length &&
                  <Styled.BtnGrp>    
                    {currentStep > 0 && ( 
                        <>
                            <Styled.PreviousBtn onClick={prevStep}>Previous</Styled.PreviousBtn>
                            <Styled.NextBtn    
                                type="primary" 
                                htmlType={currentStep === steps.length - 1 ? 'submit' : 'button'}
                                onClick={nextStep} 
                                loading={isSubmitting}   
                                className={currentStep === 0 ? 'getone' : (currentStep === steps.length - 1 ? 'Submit' : 'Next')}
                                disabled={Object.keys(validate(values)).some(field => !!field)} 
                                >   
                                {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
                            </Styled.NextBtn> 
                        </>  
                    )}
                    {
                    !currentStep && 
                    <Styled.PreviousBtn 
                        onClick={resendOTP}
                        disabled={seconds > 0 || minutes > 0}>
                        Resend OTP
                    </Styled.PreviousBtn>
                    }
                    
                  </Styled.BtnGrp> 
                }
 
              </Styled.InputBox>  
            </Form>
          )}
        </Formik>   
        <Styled.SignInWrapper>      
          <Styled.SignInBtn><Styled.StyleLink to="/signin">Sign In</Styled.StyleLink></Styled.SignInBtn>  
          <p>if you’re a member.</p>       
        </Styled.SignInWrapper>  
         
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
    </Styled.StyledWrapper>
  );
};

export default ForgotPassword;
