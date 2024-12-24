import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { fetchCustomerDashboardQuantityForSourceChannelData } from "../../../services/api-customer";

const CustomerSourceChannelDonut = ({}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchCustomerDashboardQuantityForSourceChannelData();
        setData(response.data);
      } catch (err) {
        setError("Erro ao buscar dados dos clientes.");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const series = data.map((item) => item.quantity);

  const categories = data.map((item) => item.sourceChannel);

  var optionDonut = {
    chart: {
      type: "donut",
      width: "100%",
      height: 400,
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        customScale: 0.8,
        donut: {
          size: "75%",
        },
        offsetY: 20,
      },
      stroke: {
        colors: undefined,
      },
    },
    title: {
      text: "Clientes por Genero",
      style: {
        fontSize: "18px",
      },
    },

    labels: categories,
    legend: {
      position: "left",
      offsetY: 80,
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
      <Chart
        options={optionDonut}
        type="donut"
        series={series}
        width={300}
        height={300}
      />
    </div>
  );
};

export default CustomerSourceChannelDonut;
