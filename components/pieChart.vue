<template>
  <canvas id="myChart3"></canvas>
</template>

<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend, PieController } from "chart.js";
import { ref, onMounted, watch } from "vue";

ChartJS.register(ArcElement, Tooltip, Legend, PieController);

const initialData = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
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
  chartInstance.update();
};

onMounted(() => {
  const ctx = document.getElementById('myChart3') as HTMLCanvasElement;

  if (!ctx) return;

  chartInstance = new ChartJS(ctx, {
    type: "pie",
    data: chartData.value,
    // options: chartOptions.value,
  });

  const intervalId = setInterval(() => {
    updateChartData();
  }, 5000);

  watch(() => null, () => clearInterval(intervalId));
});
</script>