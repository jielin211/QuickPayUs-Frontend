const eChart = {
   series: [
      {
         name: "Sales",
         data: [450, 200, 100, 220, 500, 100, 400, 230, 500],
         color: "#DF0B0B", 
      },
   ],

   options: {
      chart: {
         type: "bar",
         width: "100%",
         height: "auto",

         toolbar: {
            show: false,
         },
      }, 
      plotOptions: {
         bar: { 
            horizontal: false,
            columnWidth: "27.5%",  
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
            align: "right",
            minWidth: 0,
            maxWidth: 160,
         },
      },
      yaxis: {
         labels: {
            show: true,
            align: "right",
            minWidth: 0,
            maxWidth: 160,
         },
      },

      tooltip: {
         y: {
            formatter: function (val) {
               return "$ " + val + " thousands";
            },
         },
      },
   },
};

export default eChart;
