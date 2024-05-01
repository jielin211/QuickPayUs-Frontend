import ReactApexChart from "react-apexcharts";
import { ApexOptions } from 'apexcharts';
import eChart from "./ChartData";
import { Row, Select, Col } from "antd";

const RankChart: React.FC = () => {
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
         <Row justify="space-between" align={"middle"} style={{padding: "0px 30px"}}>
            <Col className="w-100">  
               <h2>   
                  Analytics    
               </h2>  
            </Col>  
            <Col>   
               <Select    
                  defaultValue="Profit"
                  options={[ 
                     { value: "profit", label: "Profit" },
                     { value: "balance", label: "Balance" },
                     { value: "reward", label: "Reward" },
                  ]} 
               />  
               <Select
                  defaultValue="Month"
                  options={[
                     { value: "month", label: "Month" },
                     { value: "week", label: "Week" },
                     { value: "year", label: "Year" },
                  ]}
                  style={{paddingLeft: "20px"}}
               />
            </Col> 
         </Row>
         <ReactApexChart
            options={options}
            series={eChart.series}
            type="area"
            height={220}
         />
      </>
   );
}

export default RankChart;
