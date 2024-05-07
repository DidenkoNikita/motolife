<template>
  <div>
    <BarChart />
  </div>
  <div class="wrapperCharts">
    <div>
      <DoughnutChart />
    </div>
    <div>
      <PieChart />
    </div>
  </div>
  <div>
    <ScatterChart />
  </div>
  <div>
    <BubbleChart />
  </div>
  <div>
    <LineChart />
  </div>
</template>

<style>
@media (min-width: 768px) {
  .wrapperCharts {
    display: flex;
    justify-content: center;
    gap: 3px;
  }
}

@media (max-width: 767px) {
  .wrapperCharts {
    display: flex;
    gap: 3px;
    flex-direction: column;
    align-items: center;
  }
}
</style>
