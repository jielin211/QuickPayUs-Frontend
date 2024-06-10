import * as Styled from "./CustomTicket.styled";
import { Card, Input, Button, Modal, Form } from "antd";
import { useState } from "react";
import { PaperClipOutlined } from "@ant-design/icons";
import { UploadButton } from "../UploadButton/UploadButton";

const { TextArea } = Input;

interface File {
  name: string;
  size: number;
  lastModifiedDate: string;
  lastModified: any;
}

const CustomTicket: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [fileList, setFileList] = useState<File[]>([]);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const getFileList = (images) => {
    const filesWithSerializedDate = images.fileList.map((file) => ({
      // ...file,
      lastModified: file.lastModified,
      lastModifiedDate: file.lastModifiedDate.toISOString(), // Convert Date to string
      name: file.name,
      size: file.size,
      // Copy any other needed properties
    }));
    setFileList(filesWithSerializedDate);
  };

  return (
    <>
      <Card>
        <Styled.StyledTitle level={3}>
          Ticket Submission System
        </Styled.StyledTitle>
        <Form
          name="ticket_submit_form"
          onFinish={(values) => {
            setSubject(values.subject);
            setDescription(values.description);
            showModal();
          }}
          layout="vertical"
        >
          <Form.Item
            name="subject"
            rules={[{ required: true, message: "Please input subject!" }]}
            label="Subject"
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            name="description"
            rules={[{ required: true, message: "Please input description!" }]}
            label="Description"
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item label="Attachments">
            <UploadButton getFileList={getFileList} maxCount={2} />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form>
      </Card>
      <Modal
        title="Review Ticket"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Styled.StyledModalTitle>{subject}</Styled.StyledModalTitle>
        <p>{description}</p>
        {fileList.map((item, index) => (
          <p key={index}>
            <PaperClipOutlined />
            {item.name}
          </p>
        ))}
      </Modal>
    </>
  );
};

export default CustomTicket;
