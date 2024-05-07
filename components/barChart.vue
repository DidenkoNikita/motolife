<template>
  <div>
    <canvas id="myChart"></canvas>
  </div>
</template>

<script setup lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  BarController
} from "chart.js";
import { ref, onMounted, watch } from "vue";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  BarController
);

const initialData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },
  ],
};

const chartData = ref<typeof initialData>(initialData);
const chartOptions = ref({
  maintainAspectRatio: false,
});

let chartInstance: ChartJS | null = null;

const updateChartData = () => {
  if (!chartInstance) return;

  const newData = initialData.datasets[0].data.map(() => Math.floor(Math.random() * 100));
  chartData.value.datasets[0].data = newData;
  chartInstance.data.datasets[0].data = newData;
  chartInstance.update();
};

onMounted(() => {
  const ctx = document.getElementById('myChart') as HTMLCanvasElement;
  if (!ctx) return;

  chartInstance = new ChartJS(ctx, {
    type: "bar",
    data: chartData.value,
    options: chartOptions.value,
  });

  const intervalId = setInterval(() => {
    updateChartData();
  }, 5000);

  watch(() => null, () => clearInterval(intervalId));
});
</script>
