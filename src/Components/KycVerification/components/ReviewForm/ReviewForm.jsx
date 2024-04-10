import * as Styled from "./ReviewForm.styled";
import { Space } from "antd";
import { useDevice } from "../../../../Utils/Hooks/useDevice";

import imgID2 from "../../../../assets/images/imgID2.jpeg";

export const ReviewForm = ({ form, onSubmit, onCancel }) => {
  const firstName = "John";
  const lastName = "Doe";
  const country = "Pakistan";
  const gender = "Female";
  const occupation = "Developer";
  const dateOfBirth = "2021 - 08 - 20";
  const documentType = "Passport";
  const documentImage = "image.jpg";

  const handleValuesChange = (changedValues, allValues) => {
    console.log(allValues);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const device = useDevice();
  return (
    <div> 
      <Styled.Heading>Review your Information</Styled.Heading>
      <Styled.ContainerWrapper>  
        <Styled.Container>
          <Space
            size={device?.isBreakpoint("MD") ? 32 : 16}
            direction={device?.isBreakpoint("MD") ? "horizontal" : "vertical"}
          >
            <div>
              <Styled.FieldTitle>First Name</Styled.FieldTitle>
              <Styled.FieldValue>{firstName}</Styled.FieldValue>
            </div>
            <div>
              <Styled.FieldTitle>Last Name</Styled.FieldTitle>
              <Styled.FieldValue>{lastName}</Styled.FieldValue>
            </div>
          </Space>
          <Space
            size={device?.isBreakpoint("MD") ? 32 : 16}
            direction={device?.isBreakpoint("MD") ? "horizontal" : "vertical"}
          >
            <div>
              <Styled.FieldTitle>Date of Birth</Styled.FieldTitle>
              <Styled.FieldValue>{occupation}</Styled.FieldValue>
            </div>
            <div>
              <Styled.FieldTitle>Gender</Styled.FieldTitle>
              <Styled.FieldValue>{gender}</Styled.FieldValue>
            </div>
          </Space>
        </Styled.Container>
        <Styled.Container>
          <Space
            size={device?.isBreakpoint("MD") ? 32 : 16}
            direction={device?.isBreakpoint("MD") ? "horizontal" : "vertical"}
          >
            <div>
              <Styled.FieldTitle>Country</Styled.FieldTitle>
              <Styled.FieldValue>{country}</Styled.FieldValue>
            </div>
            <div>
              <Styled.FieldTitle>Occupation</Styled.FieldTitle>
              <Styled.FieldValue>{dateOfBirth}</Styled.FieldValue>
            </div>
          </Space>

          <Space
            size={device?.isBreakpoint("MD") ? 32 : 16}
            direction={device?.isBreakpoint("MD") ? "horizontal" : "vertical"}
          >
            <div>
              <Styled.FieldTitle>Address</Styled.FieldTitle>
              <Styled.FieldValue>{dateOfBirth}</Styled.FieldValue>
            </div>
            <div>
              <Styled.FieldTitle>Document Type</Styled.FieldTitle>
              <Styled.FieldValue>{documentType}</Styled.FieldValue>
            </div>
          </Space>
        </Styled.Container>
        <Styled.UploadSection>    
          <Styled.FieldTitle> Uploaded Documents</Styled.FieldTitle>
          <Styled.ImgGrp>    
            <Styled.UploadImg src={imgID2}></Styled.UploadImg> 
            <Styled.UploadImg src={imgID2}></Styled.UploadImg>
          </Styled.ImgGrp>  
        </Styled.UploadSection>
      </Styled.ContainerWrapper> 
    </div>
  );
};
