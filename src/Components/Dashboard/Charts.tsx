import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import eChart from "./ChartData";
import { Row, Select, Col } from "antd";
import * as Styled from "./Style/Dashboard.styled";

const EChart: React.FC = () => {
  const options: ApexOptions = eChart.options;

  return (
    <>
      <Row justify="space-between" align={"middle"}>
        <Col className="w-100">
          <Styled.ChartHeading>Analytics</Styled.ChartHeading>
        </Col>
        <Styled.SelectCol>
          <Styled.ChartSubjectSelect
            defaultValue="Profit"
            options={[
              { value: "profit", label: "Profit" },
              { value: "balance", label: "Balance" },
              { value: "reward", label: "Reward" },
            ]}
          />
          <Styled.ChartDateSelect
            defaultValue="Month"
            options={[
              { value: "month", label: "Month" },
              { value: "week", label: "Week" },
              { value: "year", label: "Year" },
            ]}
          />
        </Styled.SelectCol>
      </Row>
      <div className="chart-container">
        <ReactApexChart
          className="bar-chart"
          options={options}
          series={eChart.series}
          type="bar"
          height={220}
        />
      </div>
    </>
  );
};

export default EChart;
