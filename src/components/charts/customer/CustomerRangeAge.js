import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { fetchCustomerDashboardQuantityForAgeData } from "../../../services/api-customer";

const CustomerRangeAge = ({}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchCustomerDashboardQuantityForAgeData();
        setData(response.data);
      } catch (err) {
        setError("Erro ao buscar dados dos clientes.");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

 
  const series = [
    {
      name: "Idade",
      data: data.map(item => item.age),  
    },
  ];

  const categories = data.map(item => item.quantity);  

  const optionsBar = {
    plotOptions: {
      bar: {
        columnWidth: "80%",
      },
    },
    xaxis: {
      categories: categories,  // Definindo as categorias do eixo X (idades)
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

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div
    style={{
      border: "1px solid #e0e0e0",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      padding: "16px",
      backgroundColor: "#fff",
      width: "300px",
      margin: "16px auto",
      textAlign: "center",
    }}
  >
      <Chart options={optionsBar} type="bar" series={series} width={300} height={300} />
    </div>
  );
};

export default CustomerRangeAge;
