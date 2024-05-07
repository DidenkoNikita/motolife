<template>
  <div class="layout">
    <HeaderHome />
    <main class="content">
      <slot />
    </main>
    <Footer />
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
