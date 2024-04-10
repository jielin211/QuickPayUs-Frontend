import { Form, Select, Radio, Divider } from "antd";
import * as Styled from "./IDVerificationForm.styled";
import imgID2 from "../../../../assets/images/imgID2.jpeg";
import { UploadButton } from "../../../UploadButton/UploadButton";
import { useDispatch, useSelector } from "react-redux";
import { updateKycField } from "../../../../Redux/KycVerificationSlice";
import { useState, useCallback } from "react";
import { selectKycVerification } from "../../../../Redux/selectors";
import { DOCUMENT_TYPES } from "./constants";
import { getCountryCode, getCountryData } from "countries-list";

export const IDVerificationForm = () => {
  const dispatch = useDispatch(); 
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState({});
  const [country, setCountry] = useState("");
  const [selected, setSelected] = useState("");
  const [documentType, setDocumentType] = useState(DOCUMENT_TYPES.ID_CARD);
  const [images, setImages] = useState([]);
  const kycFormData = useSelector(selectKycVerification);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setDocumentType(e.target.value);
  };

  const handleValuesChange = useCallback(
    (changedValues, _allValues) => {
      setFormValues(changedValues);
      Object.entries(changedValues).forEach(([field, value]) => {
        console.log("field", field);
        if (field === "country") {
          console.log("country", value);
          dispatch(updateKycField({ field, value: country }));
        }
        if (field === "images") {
          dispatch(updateKycField({ field, value: images }));
        }
      });
    },
    [country, dispatch, images]
  );

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const InfoPoints = [
    "Upload a complete image of your ID document",
    "Ensure all details are readable in the image you upload",
    "Ensure the document is the original and has not expired",
    "Place documents against a solid-colored background",
  ];

  const getFileList = (images) => {
    console.log("images", images);
    setImages(images);
  };

  const handleCountryChange = (value) => {
    const countryData = getCountryData(value);
    setCountry(countryData.name);
    setSelected(value);
    console.log("countryData", countryData.name, country);
  };

  return (
    <div>
      <Styled.Heading>ID Verification Form</Styled.Heading>
      <Styled.FormDetailsContainer>
        <Styled.StyledForm 
          form={form}
          initialValues={{
            country: kycFormData?.country
              ? getCountryCode(kycFormData?.country)
              : "",
            images: kycFormData?.images,
            documentType: kycFormData?.documentType,
          }}
          onValuesChange={handleValuesChange}
          layout="vertical" 
        >
          <Form.Item label="Country" name="country">
            <Styled.CountrySelect
              searchable 
              selected={selected}
              onSelect={handleCountryChange} 
            />
          </Form.Item>
          <Form.Item label="Choose Document Type">
            <Radio.Group className="id-radiobtn" 
              onChange={onChange}   
              value={documentType} 
            > 
              <Styled.RadioCardContainer>
                <Styled.RadioCard>
                  <Radio value={DOCUMENT_TYPES.ID_CARD}>National ID</Radio>
                </Styled.RadioCard>
                <Styled.RadioCard>
                  <Radio value={DOCUMENT_TYPES.PASSPORT}>Passport</Radio>
                </Styled.RadioCard>
                <Styled.RadioCard>
                  <Radio value={DOCUMENT_TYPES.LICENSE}>License</Radio>
                </Styled.RadioCard>
              </Styled.RadioCardContainer>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Upload Documents" name="images">
            <UploadButton getFileList={getFileList} />
          </Form.Item>
        </Styled.StyledForm>
        <Styled.InfoContainer>
          <Styled.InfoTitle>
            Take pictures of both sides of your government issued id card
          </Styled.InfoTitle> 
          <div>  
            <Styled.StyledImg src={imgID2}></Styled.StyledImg> 
          </div>  
          <Styled.InfoList>
            {InfoPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </Styled.InfoList>
        </Styled.InfoContainer>
      </Styled.FormDetailsContainer>
    </div>
  );
};
