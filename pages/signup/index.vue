<template>
  <div>
    <NuxtLayout :name="layout">
      <SectionSignup />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const layout = "custom";
</script>