import React from "react";
import Chart from "react-apexcharts";

const CustomerRangeAge = ({}) => {
  var series = [
    {
      name: "Idade",
      data: [42, 52, 16, 55, 59, 51, 45, 32, 26, 33, 44, 51, 42, 80],
    },
  ];

  var optionsBar = {
    plotOptions: {
      bar: {
        columnWidth: "80%",
      },
    },
    
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: "#78909c",
        },
      },
    },
    title: {
      text: "Clientes por Idade",
      align: "left",
      style: {
        fontSize: "18px",
      },
    },
  };

  return (
    <>
      <div>
        <Chart options={optionsBar} type="bar" series={series} width={300} height={300} />
      </div>
    </>
  );
};

export default CustomerRangeAge;
