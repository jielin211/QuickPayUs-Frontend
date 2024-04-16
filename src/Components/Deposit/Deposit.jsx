import { useState, useEffect } from "react";
import { Card, Select, Input, Tooltip, Button, Modal } from "antd";
import {
  usePostDepositFormMutation,
  useGetProgramsDataQuery,
} from "../../Redux/slice";
import amount from "../../assets/images/amount.png";
import support from "../../assets/images/question.svg";
import statements from "../../assets/images/statements-icon.svg";
import { IdcardOutlined } from "@ant-design/icons";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import * as Styled from "./Deposit.styled";

const { Option } = Select;

const Deposit = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formValues, setFormValues] = useState(null);
  const {
    data: programsData,
    isLoading: programsLoading,
    refetch,
  } = useGetProgramsDataQuery();
  const [postData, { isLoading: submitLoading }] = usePostDepositFormMutation();

  useEffect(() => {
    refetch();
  }, []);

  const handleConfirm = (values) => {
    setFormValues(values);
    setIsModalVisible(true);
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
                <Styled.PageCover className="hoverdata">
                  <Styled.FlexColumnContainer>
                    <Styled.StyledLabel>
                      <span>Investment amount:</span>
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
                        <Styled.FieldLeftImg src={amount} alt="Amount" />
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
                      <span>Receiver Address:</span>
                      <Tooltip title="Receiver Address">
                        {" "}
                        <Styled.TooltipImg
                          src={support}
                          alt="Receiver Address"
                        />
                      </Tooltip>
                    </Styled.StyledLabel>
                    <Styled.FieldCover>
                      <Styled.FieldLeft>
                        <IdcardOutlined className="deposit-idcard" />
                      </Styled.FieldLeft>
                      <Field name="receiverAddress">
                        {({ field }) => (
                          <Styled.InputBox
                            {...field}
                            placeholder="Enter receiver address"
                          />
                        )}
                      </Field>
                    </Styled.FieldCover>
                    <ErrorMessage
                      name="receiverAddress"
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
                      <span>Sender Address:</span>
                      <Tooltip title="Sender Address">
                        {" "}
                        <Styled.TooltipImg
                          src={support}
                          alt="Sender Address"
                        />
                      </Tooltip>{" "}
                    </Styled.StyledLabel>
                    <Styled.FieldCover>
                      <Styled.FieldLeft>
                        <Styled.FieldLeftImg2
                          src={statements}
                          alt="Statements"
                        />
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
