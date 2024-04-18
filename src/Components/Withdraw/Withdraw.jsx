import { useState, useEffect } from "react";
import { Card, Input, Select, Button, Modal } from "antd";
import { InputOTP } from "antd-input-otp";
import { usePostDataMutation } from "../../Redux/slice"; // Update the path accordingly
import * as Styled from "./Withdraw.styled";
import amount from "../../assets/images/amount.png";

const { Option } = Select;

const Withdrawal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [timer, setTimer] = useState(0);
  const [otp, setOtp] = useState([]);
  const [verificationError, setVerificationError] = useState("");
  const [verificationLoading, setVerificationLoading] = useState(false);
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [withdrawalAddress, setWithdrawalAddress] = useState("");
  const [transactionType, setTransactionType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [postData] = usePostDataMutation();

  useEffect(() => {
    let interval;
    if (otpSent && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 0) {
            clearInterval(interval);
            setOtpSent(false);
          } else {
            return prevTimer - 1;
          }
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [otpSent, timer]);

  const sendOTP = async () => {
    try {
      // Call API to send OTP
      await postData({ url: "/otp/create" });
      setOtpSent(true);
      setTimer(60);
      setIsModalVisible(true); // Open the modal after OTP is sent
    } catch (error) {
      console.error("Failed to send OTP:", error);
      setVerificationError("Failed to send OTP. Please try again.");
    }
  };

  const handleResendOTP = async () => {
    try {
      // Resend OTP logic
      await sendOTP();
      setVerificationError("");
    } catch (error) {
      console.error("Failed to resend OTP:", error);
      setVerificationError("Failed to resend OTP. Please try again.");
    }
  };

  const handleInputChange = (value) => {
    setOtp(value);
  };

  const handleSubmit = async () => {
    try {
      await sendOTP();
    } catch (error) {
      console.error("Failed to send OTP:", error);
    }
  };

  useEffect(() => {
    if (otp.length === 6) {
      handleVerifyOTP();
    }
  }, [otp]);

  const handleVerifyOTP = async () => {
    if (otp.length === 6) {
      setVerificationLoading(true);
      try {
        const isVerified = await verifyOTP();
        if (isVerified?.error?.data.success !== false) {
          await submitTransaction(); // Submit transaction only if OTP is verified
          setIsModalVisible(false);
          setOtp([]); // Clear OTP input value
        }
      } catch (error) {
        console.error("Error verifying OTP:", error);
        setVerificationError("Invalid OTP. Please try again.");
      } finally {
        setVerificationLoading(false);
      }
    } else {
      setVerificationError("Please enter the complete OTP code.");
    }
  };

  const verifyOTP = async () => {
    try {
      const datares = await postData({
        url: "/otp/verify",
        data: {
          userId: "65d90f020e3b5a197c585b8f",
          otp: otp.join(""),
        },
      });
      return datares;
    } catch (error) {
      console.error("Failed to verify OTP:", error);
      setVerificationError("Invalid OTP. Please try again.");
      return false;
    }
  };

  const submitTransaction = async () => {
    setIsLoading(true);
    try {
      // Submit transaction API
      await postData({
        url: "transactions",
        data: {
          amount: withdrawalAmount,
          withdrawalAddress: withdrawalAddress,
          withdrawalType: transactionType,
          transactionType: "WITHDRAWAL",
        },
      });
    } catch (error) {
      console.error("Error submitting transaction:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Styled.WithdrawalContainer>
      <Styled.StyledH2>Withdrawal</Styled.StyledH2>
      <Styled.FormContainer>
        <Styled.StyledForm
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <Styled.StyledCard>
            <Styled.InputWrapper>
              <label>Amount:</label>
              <Input
                type="text"
                value={withdrawalAmount}
                onChange={(e) => setWithdrawalAmount(e.target.value)}
                placeholder="Enter amount"
                style={{ marginTop: '10px', border: '1.5px solid #9e9e9e' }}
              />
            </Styled.InputWrapper>
            <Styled.InputWrapper>

              <label>Address:</label>
              <Input
                type="text"
                value={withdrawalAddress}
                onChange={(e) => setWithdrawalAddress(e.target.value)}
                placeholder="Enter receiver account ID"
                style={{ marginTop: '10px', border: '1.5px solid #9e9e9e' }}
              />
            </Styled.InputWrapper>
            <Styled.BalanceContainer>
              <div>
                <div>Type:</div>
                <Styled.StyledSelect
                  value={transactionType}
                  onChange={(value) => setTransactionType(value)}
                  style={{ marginTop: '10px' }}
                >
                  <Option value="">Select Transaction Type</Option>
                  <Option value="profit">Profit</Option>
                  <Option value="principal">Deposit</Option>
                </Styled.StyledSelect>
              </div>
              <div>
                <div>My Balance:</div>
                <Styled.Balance disabled>$334400</Styled.Balance>
              </div>
            </Styled.BalanceContainer>
          </Styled.StyledCard>

          <Styled.SubmitButtonContainer>
            <Button type="primary" htmlType="submit" disabled={isLoading}>
              Submit
            </Button>
          </Styled.SubmitButtonContainer>

          {/* OTP Modal */}
          <Modal
            title="Enter OTP"
            visible={isModalVisible}
            onCancel={() => setIsModalVisible(false)}
            footer={null}
          >
            <div>
              <InputOTP value={otp} onChange={handleInputChange} />
              <Button
                type="primary"
                onClick={handleResendOTP}
                disabled={timer > 0}
              >
                {otpSent && timer > 0 ? `Resend OTP (${timer}s)` : "Send OTP"}
              </Button>
              {verificationError && (
                <div className="color-red">{verificationError}</div>
              )}
            </div>
          </Modal>
        </Styled.StyledForm>
      </Styled.FormContainer>
    </Styled.WithdrawalContainer>
  );
};

export default Withdrawal;
