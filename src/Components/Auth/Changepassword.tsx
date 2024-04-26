import { Row, Col, Input, Button, Form } from "antd";
import { Formik, Field } from "formik";
import * as Styled from "./Changepassword.style";

import FloatingLabelInputPassword from "./FloatingInput/FloatingInputPassword";

interface FormErrors {
   currentPassword?: string;
   password?: string;
   confirmPassword?: string;
 }

const ChangePassword: React.FC = () => {

   const handleChangePassword = () => {

   }

   return (
      <Styled.ChangePasswordWrapper>
         <Styled.ChangePasswordTitle>
            Change Password
         </Styled.ChangePasswordTitle>

         <Styled.ChangePasswordContent> 

         <Formik
            initialValues={{ currentPassword: "", password: "", confirmPassword: "" }}
            validate={(values) => {
              const errors: FormErrors = {};

              return errors;
            }}
            onSubmit={handleChangePassword}
          >
            {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
            
               <Form style={{width: "100%"}}>
                  <Form.Item
                     label=""
                     validateStatus={errors.currentPassword && "error"}
                     style={{marginTop: "30px"}}
                     help={errors.currentPassword}
                  >
                     <Field name="currentPassword"> 
                     {({ field }) => (
                        <FloatingLabelInputPassword 
                           label="Current Password" 
                           field= {field}
                           name="currentPassword"
                        />
                     )}
                     </Field>
                  </Form.Item>
                  <Form.Item
                     label=""
                     validateStatus={errors.password && "error"}
                     style={{marginTop: "30px"}}
                     help={errors.password}
                  >
                     <Field name="password"> 
                     {({ field }) => (
                        <FloatingLabelInputPassword 
                           label="New Password" 
                           field= {field}
                           name="password"
                        />
                     )}
                     </Field>
                  </Form.Item>
                  <Form.Item
                     label=""
                     validateStatus={errors.confirmPassword && "error"}
                     style={{marginTop: "30px"}}
                     help={errors.confirmPassword}
                  >
                     <Field name="confirmPassword"> 
                     {({ field }) => (
                        <FloatingLabelInputPassword 
                           label="Confirm Password" 
                           field= {field}
                           name="confirmPassword"
                        />
                     )}
                     </Field>
                  </Form.Item>
               </Form>
            )}
           
            </Formik>
            <Col lg={24}>
               <Styled.SaveBtn type="primary" size="large">
                  Save
               </Styled.SaveBtn>
            </Col>
         </Styled.ChangePasswordContent>
      </Styled.ChangePasswordWrapper>
   );
};

export default ChangePassword;
