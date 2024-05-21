import React, { useState } from "react";
import { Form, Input, Button, Upload, Modal, message, Typography } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import styled from "styled-components";

const { TextArea } = Input;
const { Title } = Typography;

const MainContainer = styled.div`
  padding-top: 1px;
  padding-bottom: 17px;
  padding-right: 17px;
  padding-left: 17px;
  background-color: #f4f4f4;
  height: 100%;
`;

const FeedbackContainer = styled.div`
  background-color: #fff;
  padding-left: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  border-radius: 8px;
`;

const FeedbackForm: React.FC = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [fileList, setFileList] = useState<any[]>([]);

  const onFinish = (values: any) => {
    console.log("Received values:", values);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
    setFileList([]);
  };

  const handleUploadChange = ({ fileList }: any) => {
    setFileList(fileList);
  };

  return (
    <MainContainer>
      <Title level={3}>Send Feedback</Title>
      <FeedbackContainer>
        <Form
          form={form}
          name="feedback_form"
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item name="feedback" label="Feedback">
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item label="Attach Screenshot">
            <Upload.Dragger
              name="files"
              multiple={false}
              fileList={fileList}
              onChange={handleUploadChange}
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
            </Upload.Dragger>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit Feedback
            </Button>
          </Form.Item>
        </Form>

        <Modal
          title="Feedback Submitted"
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={[
            <Button key="ok" type="primary" onClick={handleCancel}>
              OK
            </Button>,
          ]}
        >
          <p>Thank you for your feedback!</p>
          <p>We'll review it and get back to you if necessary.</p>
        </Modal>
      </FeedbackContainer>
    </MainContainer>
  );
};

export default FeedbackForm;
