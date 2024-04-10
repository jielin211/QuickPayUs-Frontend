import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Steps, Select} from 'antd';  
import * as Styled from "./SignUp.styled";  

const { Step } = Steps;

 
const initialValues = {  
  firstName: '',
  lastName: '',
  email: '',
  username: '',
  password: '', 
  confirmPassword: '', 
  referral: '',
};  
  
const steps = [ 'Get Started', 'Name', 'Number', 'Email & Username', 'Password', 'Referral'];
  
const SignupForm = () => {    
 
  

  const [showMoreInfo, setShowMoreInfo] = useState(false);

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

  const validate = (values) => {
    const errors = {};

    if (currentStep === 1) {
      if (!values.firstName) {
        errors.firstName = 'First name is required';
      }
      if (!values.lastName) {
        errors.lastName = 'Last name is required';
      }
    } else if (currentStep === 3) {
      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (!values.username) {
        errors.username = 'Username is required';
      }
    } else if (currentStep === 4) {
      if (!values.password) {
        errors.password = 'Password is required';
      } else if (values.password.length < 6) {
        errors.password = 'Password must be at least 6 characters long';
      }  
      else if (!/[A-Z]/.test(values.password)) { 
        errors.password = 'Password must have one uppercase'; 
      }
      else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(values.password)) { 
        errors.password = 'Password must have one special character';
      } 
      if (!values.confirmPassword) {
        errors.confirmPassword = 'Confirm password is required';
      } else if (values.password !== values.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
      } 
    } else if (currentStep === 5) { 
      if (!values.referral) {
        errors.referral = 'Referral code is required';
      }
      if (!values.policy) {     
        errors.policy = ''; 
      }    

    }

    return errors;
  };
 
  return (     
    <Styled.StyledWrapper className='signup'> 
      <Styled.MainCard 
        title="Sign Up to join QUICKPAYUS"   
      > 
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={handleSubmit} 
        > 
          {({ isSubmitting, values }) => (  
            <Form>   
              
              <Steps current={currentStep} progressDot>
                {steps.map((step) => (
                  <Step key={step} />    
                ))}   
              </Steps>   

              <Styled.InputBox>     
                {currentStep === 0 && (  
                  <p></p>   
                )} 
                {currentStep === 1 && (
                  <>
                    <Field name="firstName"> 
                      {({ field }) => (   
                        <Styled.InputWrapper>     
                          <Styled.InputLabel htmlFor="firstName" > 
                            First Name  
                          </Styled.InputLabel>    
                          <Styled.InputField {...field}  
                          placeholder="First Name" /> 
                          <ErrorMessage name="firstName" component="div" className='color-red' />
                        </Styled.InputWrapper> 
                      )}
                    </Field> 
                    <Field name="lastName">    
                      {({ field }) => (
                        <Styled.InputWrapper>
                          <Styled.InputLabel htmlFor="lastName">
                            Last Name 
                          </Styled.InputLabel> 
                          <Styled.InputField {...field} placeholder="Last Name" />
                          <ErrorMessage name="lastName" component="div" className='color-red' />
                        </Styled.InputWrapper> 
                      )}
                    </Field>
                  </>
                )}
                {currentStep === 2 && (
                  <> 
                    <Field name="countryName"> 
                      {({ field }) => (      
                        <Styled.InputWrapper>     
                          <Styled.InputLabel htmlFor="countryName" > 
                            Country
                          </Styled.InputLabel>    
                          <Styled.InputField {...field}  
                          placeholder="First Name" /> 
                          <ErrorMessage name="countryName" component="div" className='color-red' />
                        </Styled.InputWrapper> 
                      )}
                    </Field> 
                    <Field name="phoneNumber">    
                      {({ field }) => (  
                        <Styled.InputWrapper>
                          <Styled.InputLabel htmlFor="phoneNumber">
                            Number 
                          </Styled.InputLabel> 
                          <Styled.InputField {...field} placeholder="Last Name" />
                          <ErrorMessage name="phoneNumber" component="div" className='color-red' />
                        </Styled.InputWrapper> 
                      )}
                    </Field>
                  </>
                )}
                {currentStep === 3 && (
                  <>
                    <Field name="email">
                      {({ field }) => (
                        <Styled.InputWrapper>   
                          <Styled.InputLabel htmlFor="email">Email</Styled.InputLabel>
                          <Styled.InputField {...field} placeholder="Email" /> 
                          <ErrorMessage name="email" component="div" className='color-red' />
                        </Styled.InputWrapper> 
                      )}
                    </Field>
                    <Field name="username">
                      {({ field }) => (
                        <Styled.InputWrapper>  
                          <Styled.InputLabel htmlFor="username">Username</Styled.InputLabel>
                          <Styled.InputField {...field} placeholder="Username" /> 
                          <ErrorMessage name="username" component="div" className='color-red' />
                        </Styled.InputWrapper> 
                      )}
                    </Field>
                  </>
                )}
                {currentStep === 4 && (
                  <>
                    <Field name="password">
                      {({ field }) => ( 
                        <Styled.InputWrapper>  
                          <Styled.InputLabel htmlFor="password">Password</Styled.InputLabel>
                          <Styled.InputFieldPassword {...field} type="password" placeholder="Password" />
                          <ErrorMessage name="password" component="div" className='color-red' /> 
                        </Styled.InputWrapper> 
                      )}
                    </Field>
                    <Field name="confirmPassword">
                      {({ field }) => (
                        <Styled.InputWrapper>    
                          <Styled.InputLabel htmlFor="confirmPassword">Confirm Password</Styled.InputLabel>
                          <Styled.InputFieldPassword {...field} type="password" placeholder="Confirm Password" />
                          <ErrorMessage name="confirmPassword" component="div" className='color-red' /> 
                        </Styled.InputWrapper>
                      )}
                    </Field>
                  </>
                )}  
                {currentStep === 5 && (
                <> 
                  <Field name="referral"> 
                    {({ field }) => ( 
                      <Styled.InputWrapper>  
                        <Styled.InputLabel htmlFor="referral">Referral</Styled.InputLabel>
                        <Styled.InputField {...field} placeholder="Referral" /> 
                        <ErrorMessage name="referral" component="div" className='color-red' />
                      </Styled.InputWrapper>  
                    )}
                  </Field> 
                  <Field name="policy">   
                  {({ field }) => ( 
                    <Styled.InputWrapper>   
                      <Styled.StyledCheckbox {...field}>         
                        I agree with the <a href="#" className="color-red">Privacy Policy</a> and <a href="#" className="color-red">Terms of Services.</a>
                      </Styled.StyledCheckbox>    
                      <ErrorMessage name="policy" component="div" className='color-red'/>     
                    </Styled.InputWrapper> 
                  )}
                </Field> 
                </>
                )}     
 
                <Styled.BtnGrp>    
                  {currentStep > 0 && (   
                    <Styled.PreviousBtn onClick={prevStep}>Previous</Styled.PreviousBtn>
                  )}
                  <Styled.NextBtn    
                    type="primary" 
                    htmlType={currentStep === steps.length - 1 ? 'submit' : 'button'}
                    onClick={nextStep} 
                    loading={isSubmitting}   
                    className={currentStep === 0 ? 'getone' : (currentStep === steps.length - 1 ? 'Submit' : 'next')}
                    disabled={Object.keys(validate(values)).some(field => !!field)} 
                  >   
                  {currentStep === 0 ? 'Get started' : (currentStep === steps.length - 1 ? 'Submit' : 'next')}
                  </Styled.NextBtn> 
                </Styled.BtnGrp> 
              </Styled.InputBox>  
            </Form>
          )}
        </Formik>   
        <Styled.SignInWrapper>      
          <Styled.SignInBtn to="/signin">Sign In</Styled.SignInBtn>  
          <p>if you’re a member.</p>       
        </Styled.SignInWrapper>  
         
          <Styled.PrivacyTxt>     
            This page is protected by Google reCAPTCHA to ensure you&apos;re not
            a bot.    
            <Styled.LearnMoreButton href="#" onClick={handleLearnMoreClick}>    
              Learn more.  
            </Styled.LearnMoreButton>          
          </Styled.PrivacyTxt>       
          <Styled.PrivacyTxt2 style={{ display: showMoreInfo ? "block" : "none" }}> 
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

export default SignupForm;
