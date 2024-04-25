import * as Styled from "./CustomTicket.styled";  
import { Card, Input, Select, Button, Modal } from "antd"; 
import { useState } from "react";
import { PaperClipOutlined } from '@ant-design/icons';
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
      const filesWithSerializedDate = images.fileList.map(file => ({
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
      <Styled.CustomTicketContainer>     
         <Styled.FormContainer>
            <Styled.StyledH2>
               Ticket Submission System
            </Styled.StyledH2>
            <Styled.StyledForm 
               onSubmit={(e) => {
                  e.preventDefault(); 
               }}  
            >      
               <Styled.StyledCard>   
                  <Styled.InputWrapper>  
                  <label>Subject:</label> 
                  <Input
                     type="text"
                     placeholder="Enter Subject"
                     value={subject}
                     onChange={(e) => setSubject(e.target.value)}
                  />
                  </Styled.InputWrapper>
                  <Styled.InputWrapper> 
                  <label>Description:</label>
                  <TextArea rows={4} value={description} onChange={(e) => setDescription(e.target.value)}/>
                  </Styled.InputWrapper>
                  <Styled.InputWrapper> 
                     <label>Attachments:</label>
                     <UploadButton getFileList={getFileList} maxCount={2}/>
                  </Styled.InputWrapper>
                  
               </Styled.StyledCard> 

               <Styled.SubmitButtonContainer>
                  <Button
                     type="primary"
                     onClick={showModal}
                  >
                     Submit
                  </Button>
               </Styled.SubmitButtonContainer>
               <Modal title="Review Ticket" open={open} onOk={handleOk} onCancel={handleCancel}>
                  <Styled.StyledModalTitle>{subject}</Styled.StyledModalTitle>
                  <p>{description}</p>
                  {fileList.map((item, index) => <p key={index}><PaperClipOutlined />{item.name}</p>)}
               </Modal>
            </Styled.StyledForm>
         </Styled.FormContainer>
      </Styled.CustomTicketContainer>
   );
};

export default CustomTicket;
