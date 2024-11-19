import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios"; 
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TransactionsBarChart = ({ selectedMonth }) => {
  const [barData, setBarData] = useState([]);

  useEffect(() => {
    fetchBarData();
  }, [selectedMonth]);

  const fetchBarData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/bar-chart", {
        params: { month: selectedMonth },
      });
      setBarData(response.data);
    } catch (error) {
      console.error("Error fetching bar chart data:", error);
    }
  };

  const chartData = {
    labels: ["0-100", "101-200", "201-300", "301-400", "401-500", "501-600", "601-700", "701-800", "801-900", "901+"],
    datasets: [
      {
        label: "Number of Items",
        data: barData,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return <
