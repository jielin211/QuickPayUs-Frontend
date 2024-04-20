import { useState, useEffect } from "react";
import { Card, Select, Input, Tooltip, Button, Modal } from "antd"; 
import {   
  usePostDepositFormMutation,
  useGetProgramsDataQuery, 
} from "../../Redux/slice";

import support from "../../assets/images/question.svg";
import { SendOutlined, IdcardOutlined,DollarOutlined,CopyOutlined,CheckOutlined } from "@ant-design/icons";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";  
import * as Styled from "./Deposit.styled";

const { Option } = Select; 

interface FormProps {
  receiverAddress: string;
  senderAddress: string;
  investmentAmount: string;
}
 
const Deposit: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [isCopy, setisCopy] = useState(false);

  const [formValues, setFormValues] = useState<FormProps>({
    receiverAddress: "",
    senderAddress: "",
    investmentAmount: ""
  });
  
  const {
    data: programsData,
    isLoading: programsLoading,
    refetch,
  } = useGetProgramsDataQuery(null);
  const [postData, { isLoading: submitLoading }] = usePostDepositFormMutation();

  useEffect(() => {
    refetch(); 
  }, []);

  const handleConfirm = (values) => {
    setFormValues(values);
    setIsModalVisible(true);
  };

  const handleCopy = (value: string) => {
    setisCopy(true);
    setTimeout(() => {
      setisCopy(false);
    }, 2000);
    navigator.clipboard.writeText(value);
  };


  const handleModalSubmit = async () => {
    try {
      await postData({ 
        receiverAddress: formValues.receiverAddress,
        senderAddress: formValues.senderAddress,
        transactionType: "DEPOSIT",
        amount: formValues.investmentAmount,
      });
      setIsModalVisible(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Styled.DepositContainer>   
      <Styled.PageHeading>Deposit</Styled.PageHeading>
      <Styled.FormContainer>
        <Formik  
          initialValues={{
            investmentAmount: "", 
            receiverAddress: "",
            senderAddress: "",
          }}
          validationSchema={Yup.object().shape({
            investmentAmount: Yup.string().required(
              "Investment amount is required"
            ),
            receiverAddress: Yup.string().required(
              "Receiver Address is required"
            ),
            senderAddress: Yup.string().required("Sender Address is required"),
          })}
          onSubmit={(values) => handleConfirm(values)}
        >
          {({ errors, touched, setFieldValue }) => (
            <Form>   
              <Styled.StyledCard bordered={true}>   
                <Styled.PageCover   className="hoverdata">
                  <Styled.FlexColumnContainer>  
                    <Styled.StyledLabel> 
                      <span>Investment amount:</span>

                      <Tooltip title="Investment amount" color="#F00000">
                      <Styled.TooltipImg    
      src={support}   
      alt="Investment amount"
    /> 
        </Tooltip>
                    </Styled.StyledLabel> 
                    <Styled.FieldCover>     
                      <Styled.FieldLeft>         
                      <DollarOutlined  style={{fontSize:"25px",padding:"10px",color:"red"}} />

                      <Tooltip title="Investment amount">
                        {" "}   
                        <Styled.TooltipImg
                          src={support}
                          alt="Investment amount"
                        />
                      </Tooltip>{" "}
                    </Styled.StyledLabel> 
                    <Styled.FieldCover>     
                      <Styled.FieldLeft>         
                        <Styled.FieldLeftImg src={amount} alt="Amount"/>

                      </Styled.FieldLeft>
                      <Field name="investmentAmount">
                        {({ field }) => ( 
                          <Styled.SelectOne 
                            className="select"
                            defaultValue="Select amount"
                            {...field}
                            placeholder="Select investment amount"
                            loading={programsLoading}
                            onChange={(value) =>
                              setFieldValue("investmentAmount", value)
                            } 
                          > 
                            <Option value="">Select amount</Option>
                            {programsData &&
                              programsData?.data?.map((item) => {
                                if ("data" in item) {
                                  return item.data.map((program) => {
                                    if ("investment" in program) {
                                      const { investment } = program;
                                      return (
                                        <Option
                                          key={investment}
                                          value={investment}
                                        >
                                          ${investment}
                                        </Option>
                                      );
                                    } else {
                                      return null;
                                    }
                                  });
                                } else {
                                  return null;
                                }
                              })}
                          </Styled.SelectOne>
                        )} 
                      </Field> 

                    </Styled.FieldCover> 
                    <ErrorMessage
                      name="investmentAmount"
                      component="div"
                      className="error"
                    >
                      {(msg) => (
                        <Styled.AlertMessage
                          message={msg}
                          type="error"
                        ></Styled.AlertMessage>
                      )}
                    </ErrorMessage>
                  </Styled.FlexColumnContainer> 
                  <Styled.FlexColumnContainer>  
                    <Styled.StyledLabel> 

                      <Tooltip title="Receiver Address" color="#F00000">
                      <Styled.TooltipImg    
      src={support}   
      alt="Receiver Address"
    /> 
        </Tooltip>
        
                    </Styled.StyledLabel>
                    <Styled.FieldCover>   
                      <Styled.FieldLeft>      
                        <IdcardOutlined className="deposit-idcard" style={{fontSize:"25px",color:"red"}}/>  
                      </Styled.FieldLeft>
                      <Field name="receiverAddress">
      {({ field }: any) => (
        <>
          <Styled.InputBox
            {...field}
            placeholder="Enter receiver address"
            contentEditable="true"
            value={"hello it's receivers address"}
          />

          <Tooltip title={isCopy ? "Copied receiver's address" : "Copy receiver's address"} color="#F00000">
            <Styled.FieldLeft style={{ cursor: "pointer" }} onClick={() => handleCopy(field.value)}>
              {isCopy ?
                <CheckOutlined style={{ fontSize: "20px", color: "red", padding: "10px", transition: "opacity 0.3s ease", opacity: 1 }} /> :
                <CopyOutlined style={{ fontSize: "20px", color: "red", padding: "10px", transition: "opacity 0.3s ease", opacity: 1 }} />
              }
            </Styled.FieldLeft>
          </Tooltip>
        </>
      )}
    </Field>

                    </Styled.FieldCover>

                  </Styled.FlexColumnContainer>  
                  <Styled.FlexColumnContainer>
                    <Styled.StyledLabel> 
                      <span>Sender Address:</span>

                      <Tooltip title="Sender Address" color="#F00000">
                      <Styled.TooltipImg    
      src={support}   
      alt="Sender Address"
    /> 
        </Tooltip>
                    </Styled.StyledLabel>
                    <Styled.FieldCover>   
                      <Styled.FieldLeft>  
                      <SendOutlined className="deposit-idcard" style={{fontSize:"25px",color:"red"}}/>

                     

                      </Styled.FieldLeft> 
                      <Field name="senderAddress">
                        {({ field }) => (   
                          <Styled.InputBox 
                            {...field}
                            placeholder="Enter sender address"
                          />
                        )}
                      </Field>
                    </Styled.FieldCover>
                    <ErrorMessage
                      name="senderAddress"
                      component="div"
                      className="error"
                    >
                      {(msg) => (
                        <Styled.AlertMessage
                          message={msg}
                          type="error"
                        ></Styled.AlertMessage>
                      )}
                    </ErrorMessage>
                  </Styled.FlexColumnContainer>
                </Styled.PageCover>   
              </Styled.StyledCard>   
              <Styled.SubmitButtonContainer>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Styled.SubmitButtonContainer>
            </Form>
          )} 
        </Formik> 
        <Modal 
          title="Confirmation"
          visible={isModalVisible} 
          onCancel={handleModalCancel}
          footer={[
            <Button key="cancel" onClick={handleModalCancel}>
              Cancel
            </Button>,   
            <Styled.GradientButton 
              key="submit" 
              type="primary"
              onClick={handleModalSubmit}
              disabled={submitLoading} 
            >  
              Submit 
            </Styled.GradientButton>, 
          ]}  
        >
          <p>Are you sure you want to proceed?</p>
        </Modal>
      </Styled.FormContainer>
    </Styled.DepositContainer>  
  );
};

export default Deposit;
