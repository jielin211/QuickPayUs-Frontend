import ReactApexChart from "react-apexcharts";
import { ApexOptions } from 'apexcharts';
import eChart from "./ChartData";
import { Row, Select, Col } from "antd";
import * as Styled from "./Style/Dashboard.styled"; 

const EChart: React.FC = () => {
   const options: ApexOptions = eChart.options;
   // {
   //    fill: {
   //      type: "gradient",
   //      gradient: {
   //        type: "vertical",
   //        gradientToColors: ["#FF6B00"],
   //        stops: [0, 100],
   //      },
   //    },
   //    ...eChart.options,
   //  };

   return ( 
      <>
         <Row justify="space-between" align={"middle"}>
            <Col className="w-100">  
               <Styled.ChartHeading>   
                  Analytics    
               </Styled.ChartHeading>  
            </Col>  
            <Styled.SelectCol>   
               <Select    
                  defaultValue="Profit"
                  style={{ width: 120, marginRight: "10px" }}
                  options={[ 
                     { value: "profit", label: "Profit" },
                     { value: "lucy", label: "Lucy" },
                     { value: "Yiminghe", label: "yiminghe" },
                  ]} 
               />  
               <Select
                  defaultValue="Month"
                  style={{ width: 120 }}
                  options={[
                     { value: "month", label: "Month" },
                     { value: "lucy", label: "Lucy" },
                     { value: "Yiminghe", label: "yiminghe" },
                  ]}
               />
            </Styled.SelectCol> 
         </Row>
         <ReactApexChart
            className="bar-chart"
            options={options}
            series={eChart.series}
            type="bar"
            height={220}
         />
      </>
   );
}

export default EChart;
