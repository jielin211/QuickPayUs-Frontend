import { Form, Select, Input, DatePicker, Row, Col } from "antd";
import * as Styled from "./PersonalInformationForm.styled";
import { useGetUserQuery } from "../../../../Redux/slice";
import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateKycField } from "../../../../Redux/KycVerificationSlice";
import { updateProfileField } from "../../../../Redux/profileSlice";
import {
  selectKycVerification,
  selectProfile,
} from "../../../../Redux/selectors";
import { PhoneInput } from "react-international-phone";
import { FloatingInput } from "../FloatingInput/FloatingInput";

import dayjs from "dayjs";

const { Option } = Select;

interface PersonalInformationFormProps {
  errors: {
    dateOfBirth: string;
    occupation: string;
    address: string;
  };
}

export const PersonalInformationForm: React.FC<
  PersonalInformationFormProps
> = ({ errors }) => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState({});
  const [value, setValue] = useState();
  const [countryCode, setCountryCode] = useState("");
  const [phone, setPhone] = useState(0);

  const [selectedGender, setSelectedGender] = useState("female");
  const [isFirstTimeEditing, setIsFirstTimeEditing] = useState(false);
  const kycFormData = useSelector(selectKycVerification);
  const profileFormData = useSelector(selectProfile);

  const dispatch = useDispatch();
  //  useUpdateProfileDataMutation;
  const {
    data: user,
    error,
    isLoading,
    isFetching,
  } = useGetUserQuery({
    uuid: "3e15561e-5408-4859-85d8-e0bb6b15f549",
  });

  const span = {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 12 },
    lg: { span: 12 },
    xxl: { span: 12 },
  };

  const handleValuesChange = useCallback(
    (changedValues, _allValues) => {
      setFormValues(changedValues);
      Object.entries(changedValues).forEach(([field, value]) => {
        if (
          field === "firstName" ||
          field === "lastName" ||
          field === "username" ||
          field === "email"
        ) {
          dispatch(updateProfileField({ field, value }));
        } else if (field === "mobileNo") {
          dispatch(
            updateProfileField({
              field: "countryCode",
              value: countryCode,
            })
          );
          dispatch(updateProfileField({ field: "phoneNumber", value: phone }));
        } else if (field === "dateOfBirth") {
          const formattedDate = dayjs(value as string).format("YYYY-MM-DD");
          dispatch(updateKycField({ field, value: formattedDate }));
        } else {
          dispatch(updateKycField({ field, value }));
        }
      });
    },
    [countryCode, dispatch, phone]
  );

  const handleGenderChange = (value) => {
    setSelectedGender(value);
  };

  const handlePhoneNumberChange = (inputValue, country) => {
    const val = inputValue.replace(`+${country.country.dialCode}`, "");
    setCountryCode(`+${country.country.dialCode}`);
    setPhone(val);
  };

  const handleChangeFloating = (value) => {};

  const makePhoneNumber = (countryCode, phoneNumber) => {
    return `${countryCode}${phoneNumber}`;
  };
  useEffect(() => {
    if (user) {
      if (user?.kyc) {
        console.log("user.kyc", user.kyc);
        setIsFirstTimeEditing(false);
      } else {
        setIsFirstTimeEditing(true);
      }
    }
  }, [form, user]);

  return (
    <Styled.FormContainer>
      <Styled.Heading>Personal Information Form</Styled.Heading>
      <Form
        form={form}
        initialValues={{
          firstName: profileFormData?.firstName,
          lastName: profileFormData?.lastName,
          username: profileFormData?.username,
          gender: profileFormData?.gender,
          email: profileFormData?.email,
          mobileNo: makePhoneNumber(
            profileFormData?.countryCode,
            profileFormData?.phoneNumber
          ),
          dateOfBirth: kycFormData?.dateOfBirth
            ? dayjs(kycFormData?.dateOfBirth?.dateOfBirth)
            : null,
          address: kycFormData?.address,
          occupation: kycFormData?.occupation,
        }}
        //Would need to already add these values on signin or signup
        onValuesChange={handleValuesChange}
        layout="vertical"
        style={{ maxWidth: isFirstTimeEditing ? "100%" : "600" }}
      >
        <Row gutter={[16, 16]}>
          {isFirstTimeEditing && (
            <Col {...span}>
              <Form.Item label="First Name" name="firstName">
                <Input placeholder="Add your first name" />
              </Form.Item>
              <Form.Item label="Last Name" name="lastName">
                <Input placeholder="Add your last name" />
              </Form.Item>
              <Form.Item label="Username" name="username">
                <Input placeholder="Add your username" />
              </Form.Item>
              <Form.Item label="Email" name="email">
                <Input placeholder="Add your email" type="email" />
              </Form.Item>
              <Form.Item label="Phone Number" name="mobileNo">
                <PhoneInput
                  defaultCountry="bd"
                  value={value}
                  onChange={handlePhoneNumberChange}
                />
              </Form.Item>
            </Col>
          )}
          <Col {...span}>
            <Styled.StyledFormItem label="Date of birth" name="dateOfBirth">
              <Styled.StyledDatePicker />
            </Styled.StyledFormItem>
            <Styled.ErrorMessage>{errors.dateOfBirth}</Styled.ErrorMessage>
            <Form.Item name="gender" label="Gender">
              <Styled.StyledSelect
                value={selectedGender}
                onChange={handleGenderChange}
                placeholder="Gender"
              >
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
              </Styled.StyledSelect>
            </Form.Item>
            <Styled.StyledFormItem name="occupation">
              <FloatingInput
                label="Occupation"
                name="occupation"
                onChange={handleChangeFloating}
                value={value}
              />
            </Styled.StyledFormItem>
            <Styled.ErrorMessage>{errors.occupation}</Styled.ErrorMessage>
            <Styled.StyledFormItem name="address">
              <FloatingInput
                label="Address"
                name="address"
                onChange={handleChangeFloating}
                value={value}
              />
            </Styled.StyledFormItem>
            <Styled.ErrorMessage>{errors.address}</Styled.ErrorMessage>
          </Col>
        </Row>
      </Form>
    </Styled.FormContainer>
  );
};
