<template>
  <div>
    <canvas id="myChart7"></canvas>
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
  BubbleController
} from "chart.js";
import { ref, onMounted, watch } from "vue";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  BubbleController
);

const initialData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: 'First Dataset',
      data: [{
        x: 20,
        y: 30,
        r: 15
      }, {
        x: 40,
        y: 10,
        r: 10
      }],
      backgroundColor: 'rgb(255, 99, 132)'
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

  const newData = initialData.datasets[0].data.map(() => ({
    x: Math.floor(Math.random() * 100),
    y: Math.floor(Math.random() * 100),
    r: Math.floor(Math.random() * 10)
  }));

  chartData.value.datasets[0].data = newData;
  chartInstance.data.datasets[0].data = newData;
  chartInstance.update();
}

onMounted(() => {
  const ctx = document.getElementById('myChart7') as HTMLCanvasElement;

  if (!ctx) return;

  chartInstance = new ChartJS(ctx, {
    type: 'bubble',
    data: chartData.value,
    options: chartOptions.value
  });

  const intervalId = setInterval(() => {
    updateChartData();
  }, 5000);

  watch(() => null, () => clearInterval(intervalId));
})
</script>