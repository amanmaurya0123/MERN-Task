import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios"; // Import axios
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const TransactionsPieChart = ({ selectedMonth }) => {
  const [pieData, setPieData] = useState({});

  useEffect(() => {
    fetchPieData();
  }, [selectedMonth]);

  const fetchPieData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/pie-chart", {
        params: { month: selectedMonth },
      });
      setPieData(response.data);
    } catch (error) {
      console.error("Error fetching pie chart data:", error);
    }
  };

  const chartData = {
    labels: Object.keys(pieData),
    datasets: [
      {
        label: "Categories",
        data: Object.values(pieData),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default TransactionsPieChart;
