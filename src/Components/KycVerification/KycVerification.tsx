import { useState } from "react";
import { Avatar, Button, message } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import * as Styled from "./KycVerification.styled";
import { PersonalInformationForm } from "./components/PersonalInformationForm/PersonalInformationForm";
import { IDVerificationForm } from "./components/IDVerificationForm/IDVerificationForm";
import { ReviewForm } from "./components/ReviewForm/ReviewForm";
import { CompleteForm } from "./components/FormStatus/CompleteForm";
import { AddYourPicturesForm } from "./components/AddYourPicturesForm/AddYourPicturesForm";
import { useUpdateKycVerificationDataMutation } from "../../Redux/slice";
import { selectKycVerification } from "../../Redux/selectors";
import { selectProfile } from "../../Redux/selectors";
import { useSelector } from "react-redux";
import { useDevice } from "../../Utils/Hooks/useDevice";
 
export const KycVerification: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const device = useDevice();

  const kycRedux = useSelector(selectKycVerification);

  const profileRedux = useSelector(selectProfile);

  console.log(kycRedux, "kycReduc");
  console.log(profileRedux, "profileRedux");

  const [updateKycVerificationData, { isLoading }] = useUpdateKycVerificationDataMutation();

  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const handleSubmitForm = async () => {
    next();
    // try {
    //   await updateKycVerificationData({
    //     firstName: firstName,
    //     lastName: lastName,
    //     email: email,
    //     dateOfBirth: dateOfBirth,
    //     userName: userName,
    //     occupation: occupation,
    //     address: address,
    //     phoneNumber: phoneNumber,
    //     country: country,
    //     documentType: documentType,
    //   });
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };

  const steps = [
    {
      content: <PersonalInformationForm />,
      title: "personalInformation"
    },

    {
      content: <IDVerificationForm />,
      title: "IDVerification"
    },
    {
      content: <AddYourPicturesForm />,
      title: "AddYourPicture"
    },
    {
      content: <ReviewForm />,
      title: "Review"
    },
    {
      content: <CompleteForm state={0}/>,
      title: "Complete"
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: ""
  }));
 
  return ( 
    <Styled.PageWrapper>
      {current !== steps.length - 1 &&
      <Styled.Header>
        <Styled.HeaderTitle>KYC Verification</Styled.HeaderTitle>
        <Styled.HeaderSubTitle>
          Please complete your KYC verification to continue using our services
        </Styled.HeaderSubTitle>
      </Styled.Header>
      }
      <Styled.Content>
        { device?.isBreakpoint("MD") ? (
          <Styled.StepsWrapper>   
            {current !== steps.length - 1 &&
            <Styled.Steps
              progressDot
              current={current}
              items={items}
              direction={"vertical"}
              labelPlacement="horizontal"
              responsive={false}
            />}
            <Styled.StepsContent>  
              <div>{steps[current].content}</div>
            </Styled.StepsContent>
          </Styled.StepsWrapper>
        ) : (
          <>
            <Styled.StepsWrapper>   
            {current !== steps.length - 1 &&
              <Styled.Steps
                progressDot
                current={current}
                items={items}
                direction={"horizontal"}
                labelPlacement="vertical"
                responsive={false}
              />
            }
              <Styled.StepsContent>  
                <div>{steps[current].content}</div>
              </Styled.StepsContent>
            </Styled.StepsWrapper>
          </>
        )}
        <Styled.PaginationWrapper>  
          {current > 0 && current < steps.length - 1 && ( 
            <Styled.StyledBtn onClick={() => prev()}>
              Previous
            </Styled.StyledBtn>  
          )}
          {current < steps.length - 2 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 2 && (
            <Button type="primary" onClick={handleSubmitForm}>
              Submit{" "}
            </Button>
          )}
        </Styled.PaginationWrapper>
      </Styled.Content>
    </Styled.PageWrapper>
  );
};
