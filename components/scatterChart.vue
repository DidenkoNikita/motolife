<template>
  <div>
    <canvas id="myChart6"></canvas>
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
  ScatterController
} from "chart.js";
import { ref, onMounted, watch } from "vue";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ScatterController
);

const initialData = {
  datasets: [{
    label: 'Scatter Dataset',
    data: [{
      x: -10,
      y: 0
    }, {
      x: 0,
      y: 10
    }, {
      x: 10,
      y: 5
    }, {
      x: 0.5,
      y: 5.5
    }],
    backgroundColor: 'rgb(255, 99, 132)'
  }],
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
    y: Math.floor(Math.random() * 100)
  }));

  chartData.value.datasets[0].data = newData;
  chartInstance.data.datasets[0].data = newData;
  chartInstance.update();
}

onMounted(() => {
  const ctx = document.getElementById('myChart6') as HTMLCanvasElement;

  if (!ctx) return;

  chartInstance = new ChartJS(ctx, {
    type: 'scatter',
    data: chartData.value,
    options: chartOptions.value
  });

  const intervalId = setInterval(() => {
    updateChartData();
  }, 5000);

  watch(() => null, () => clearInterval(intervalId));
})
</script>
