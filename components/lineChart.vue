<template>
  <div>
    <canvas id="myChart4"></canvas>
  </div>
</template>

<script setup lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineController,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const initialData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

const chartData = ref(initialData);
const chartOptions = ref({
  maintainAspectRatio: false,
});

let chartInstance: any = null;

const updateChartData = () => {
  if (!chartInstance) return;

  const newData = initialData.datasets[0].data.map(() => Math.floor(Math.random() * 100));
  chartData.value.datasets[0].data = newData;
  chartInstance.data.datasets[0].data = newData;
  chartInstance.update();
};

onMounted(() => {
  const ctx = document.getElementById('myChart4') as HTMLCanvasElement;
  if (!ctx) return;

  chartInstance = new ChartJS(ctx, {
    type: "line",
    data: chartData.value,
    options: chartOptions.value,
  });

  const intervalId = setInterval(() => {
    updateChartData();
  }, 5000);

  watch(() => null, () => clearInterval(intervalId));
});
</script>