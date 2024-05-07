<template>
  <div>
    <NuxtLayout :name="layout">
      <SectionLogin />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const layout = "custom";
</script>