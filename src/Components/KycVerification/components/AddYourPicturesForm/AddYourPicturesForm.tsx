import { Form, Select, Radio, Divider } from "antd";
import * as Styled from "./AddYourPicturesForm.styled";
import { UploadButton } from "../../../UploadButton/UploadButton";

import { useState } from "react";
const { Option } = Select;

export const AddYourPicturesForm: React.FC = () => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState({});
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const handleValuesChange = (changedValues, allValues) => {
    setFormValues(allValues);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const getFileList = (images) => {
    
  };

  const InfoPoints = [
    "Upload a well-lit, clear photo of yourself",
    "Ensure your face and ID are clearly visible and not obscured",
    "Avoid wearing sunglasses or hats that may obscure your face",
  ];
  return ( 
    <div>
      <Styled.Heading>Upload your pictures</Styled.Heading>
      <Styled.FormDetailsContainer>
        <Styled.StyledForm  
          form={form}  
          onValuesChange={handleValuesChange}
          layout="vertical"
        > 
          <Form.Item label="Add Document">
            <UploadButton getFileList={getFileList}/>
          </Form.Item>
        </Styled.StyledForm>
        <Styled.InfoContainer>
          <Styled.InfoTitle>
            Take pictures of both sides of your government issued id card
          </Styled.InfoTitle>
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
