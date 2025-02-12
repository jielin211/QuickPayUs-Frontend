import { ApexOptions } from "apexcharts";

interface ChartSeries {
  name: string;
  data: number[];
  color: string;
}

const eChart: {
  series: ChartSeries[];
  options: ApexOptions;
} = {
  series: [
    {
      name: "Sales",
      data: [450, 200, 100, 220, 500, 100, 400, 230, 500],
      color: "#7e7e7e",
    },
  ],

  options: {
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        gradientToColors: ["#121212"],
        stops: [10, 100],
      },
    },
    chart: {
      type: "bar",
      width: "100%",
      height: "auto",

      toolbar: {
        show: false,
      },

      events: {
        mouseMove: function (event, chartContext, config) {
          const tooltip = chartContext.el.querySelector(".apexcharts-tooltip");
          // tooltip.style.display = "none";
          // setTimeout(() => {
          //   tooltip.style.top = "0px";
          //   tooltip.style.left = "0px";
          //   tooltip.style.display = "flex";
          // }, 100);
          const { pointsArray } = config.globals;

          console.log(pointsArray);
          var seriesIndex = config.seriesIndex;
          console.log(seriesIndex);
          // var dataPointIndex =
          //   config.dataPointIndex === -1 ? 0 : config.dataPointIndex;
          // if (seriesIndex !== -1) {
          //   var position = pointsArray[seriesIndex][dataPointIndex];
          //   tooltip.style.top = position[1] + "px";
          //   tooltip.style.left = position[0] + "px";
          // }
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "23.5%",
        borderRadius: 10,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["transparent"],
    },
    grid: {
      show: true,
      borderColor: "#ccc",
      strokeDashArray: 2,
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
      labels: {
        show: true,
        style: {
          colors: "var(--color-text)",
        },
      },
    },
    yaxis: {
      labels: {
        show: true,
        align: "right",
        minWidth: 0,
        maxWidth: 160,
        style: {
          colors: "var(--color-text)",
        },
      },
    },

    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
      marker: {
        show: false,
      },
    },
  },
};

export default eChart;
