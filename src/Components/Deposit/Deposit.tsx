import { useState, useEffect } from "react";
import { Card, Select, Input, Tooltip, Button, Modal } from "antd";
import {
  usePostDepositFormMutation,
  useGetProgramsDataQuery,
} from "../../Redux/slice";
import support from "../../assets/images/question.svg";
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
  const [formValues, setFormValues] = useState<FormProps>({
    receiverAddress: "",
    senderAddress: "",
    investmentAmount: "",
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
      <Styled.FormContainer>
        <Styled.PageHeading>Deposit</Styled.PageHeading>
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
                      <span>
                        Investment amount:
                      </span>
                    </Styled.StyledLabel>
                    <Styled.FieldCover>
                      <Field name="investmentAmount">
                        {({ field }) => (
                          <Styled.SelectOne
                            className="select"
                            style={{
                              border: "1px solid #BDBDBD",
                              borderRadius: "8px",
                              overflow: "hidden",
                            }}
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
                      <span>
                        Receiver Address:
                      </span>
                    </Styled.StyledLabel>
                    <Styled.FieldCover>
                      <Field name="receiverAddress">
                        {({ field }) => (
                          <Styled.InputBox
                            style={{
                              border: "1px solid #BDBDBD",
                              borderRadius: "8px",
                              overflow: "hidden",
                              // backgroundColor: "#fff",
                              color: "#0a0a0a",
                            }}
                            {...field}
                            value="alsaif"
                            contentEditable="false"
                            disabled
                          />
                        )}
                      </Field>
                    </Styled.FieldCover>
                  </Styled.FlexColumnContainer>
                  <Styled.FlexColumnContainer>
                    <Styled.StyledLabel>
                      <span>Sender Address:</span>
                    </Styled.StyledLabel>
                    <Styled.FieldCover>
                      <Field name="senderAddress">
                        {({ field }) => (
                          <Styled.InputBox
                            style={{
                              border: "1px solid #BDBDBD",
                              borderRadius: "8px",
                              overflow: "hidden",
                              // backgroundColor: "#fff",
                              color: "#0a0a0a",
                            }}
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
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ background: "#007AFF" }}
                >
                  Submit
                </Button>
              </Styled.SubmitButtonContainer>
            </Form>
          )}
        </Formik>
        <Modal
          title="Confirmation"
          open={isModalVisible}
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
