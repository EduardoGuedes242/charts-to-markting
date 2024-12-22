import React, { useEffect, useState } from "react";
import { fetchCustomertData } from "../../../services/api";
import ApexCharts from "react-apexcharts";

const CustomerGenderChart = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dadosGenero, setDadosGenero] = useState(null);

  useEffect(() => {
    const getClients = async () => {
      try {
        const response = await fetchCustomertData();
        setClients(response.data);

        const genderCounts = {};

        response.data.forEach((client) => {
          const gender = client.gender || "Desconhecido";
          if (genderCounts[gender]) {
            genderCounts[gender] += 1;
          } else {
            genderCounts[gender] = 1;
          }
        });

        const chartData = {
          labels: Object.keys(genderCounts), // Gêneros
          series: Object.values(genderCounts), // Quantidade
        };

        setDadosGenero(chartData);
      } catch (err) {
        setError("Erro ao buscar dados dos clientes.");
      } finally {
        setLoading(false);
      }
    };

    getClients();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  const options = {
    chart: {
      type: "donut",
      height: 400,
    },
    labels: dadosGenero?.labels || [],
    theme: {
      palette: "palette1",
    },
    title: {
      text: "Clientes por genero",
      align: "center",
      style: {
        fontSize: "18px",
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "55%",
        },
      },
    },
    dataLabels: {
      style: {
        fontSize: "12px",
      },
    },
    legend: {
      position: "left",
    },
  };

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
      {dadosGenero && dadosGenero.series.length > 0 ? (
        <ApexCharts
          options={options}
          series={dadosGenero.series}
          type="donut"
          height={250}
        />
      ) : (
        <p>Sem dados para exibir.</p>
      )}
    </div>
  );
};

export default CustomerGenderChart;
