"use client"

import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const data = {
  labels: ["3rd Jan", "4th Jan", "7th Jan", "11 Jan", "13 Jan", "15 Jan", "16th Jan"],
  datasets: [
    {
      data: [42, 32, 25, 34, 28, 38, 30],
      backgroundColor: "#CAC9FF", // Updated to the requested color
      borderRadius: 2,
      barThickness: 50,
    },
  ],
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  scales: {
    y: {
      min: 0,
      max: 50,
      ticks: {
        stepSize: 10,
        color: "white",
        font: {
          size: 12,
        },
      },
      grid: {
        color: "rgba(255, 255, 255, 0.1)",
        borderDash: [5, 5],
      },
      border: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "white",
        font: {
          size: 12,
        },
      },
      border: {
        display: false,
      },
    },
  },
}

export function BarChart() {
  return <Bar data={data} options={options} />
}
