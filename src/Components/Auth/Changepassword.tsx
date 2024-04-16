import { Row, Col, Input, Button } from "antd";

const ChangePassword: React.FC = () => {
   return (
      <div  style={{
         border: "1px solid #858585", 
         borderRadius: "10px", 
         padding: "50px 30px",
         margin: "30px",
         }}>
         <h1
            style={{
               fontSize: "20px",
               fontWeight: "bold",
               color: "#f00000",
               margin: "0px 0 20px 0",
               textTransform: "uppercase",
            }}
         >
            Change Password
         </h1>

         <Row style={{padding: "20px 0px"}}> 
            <Col lg={24}>
               <label
                  htmlFor="current-password"
                  style={{
                     fontSize: "18px",
                     fontWeight: "500",
                     marginBottom: "15px",
                     display: "block",
                  }}
               >
                  Current Password
               </label>
               <Input.Password
                  type="password"
                  placeholder="Enter Your Current Password"
                  size="large"
                  style={{ borderRadius: "0", marginBottom: "24px" }}
                  id="current-password"
               />
            </Col>
            <Col lg={24}>
               <label
                  htmlFor="new-password"
                  style={{
                     fontSize: "18px",
                     fontWeight: "500",
                     marginBottom: "15px",
                     display: "block",
                  }}
               >
                  New Password
               </label>
               <Input.Password
                  type="password"
                  placeholder="Enter Your New Password"
                  size="large"
                  style={{ borderRadius: "0" ,  marginBottom: "24px"}}
                  id="new-password"
               />
            </Col>
            <Col lg={24}>
               <label
                  htmlFor="confirm-password"
                  style={{
                     fontSize: "18px",
                     fontWeight: "500",
                     marginBottom: "15px",
                     display: "block",
                  }}
               >
                  Confirm Password
               </label>
               <Input.Password
                  type="password"
                  placeholder="Re-enter Your Password to confirm"
                  size="large"
                  style={{ borderRadius: "0", marginBottom: "24px" }}
                  id="confirm-password"
               />
            </Col>
            <Col lg={24}>
               <Button
                  type="primary"
                  size="large"
                  style={{
                     background:
                        "linear-gradient(120deg,rgb(255,107,0,66%),rgb(223,11,11))",
                     paddingInline: "50px",
                     border: "none",
                     fontWeight: "bold",
                     fontSize: "18px",
                  }}
               >
                  Save
               </Button>
            </Col>
         </Row>
      </div>
   );
};

export default ChangePassword;
