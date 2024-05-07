<template>
  <div class="header">
    <Logo />
  </div>
</template>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
}

@media (min-width: 768px) {
  .header {
    height: 140px;
    padding: 0 100px;
  }
}

@media (max-width: 767px) {
  .header {
    height: 100px;
    padding: 0 24px;
  }
}
</style>
