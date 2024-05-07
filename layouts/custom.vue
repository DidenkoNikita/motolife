<template>
  <div class="layout">
    <HeaderForLogin />
    <main class="content">
      <slot />
    </main>
  </div>
</template>

<style>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex-grow: 1;
}
</style>
