<template>
  <div class="header">
    <button class="headerHomeButton displayIcon" @click="router.push('/charts')">
      <IconMenu />
    </button>
    <Logo />
    <div class="linkHomeWrapper">
      <div class="selectFirstSection">
        motorbikes
        <IconChevronDown color="#F4931C" />
      </div>
      <div class="selectFirstSection">
        equipment
        <IconChevronDown color="#F4931C" />
      </div>
      <NuxtLink class="selectFirstSection" to="/charts">
        rent terms
      </NuxtLink>
      <div class="selectFirstSection">
        reviews
      </div>
      <div class="selectFirstSection">
        contacts
      </div>
    </div>
    <div class="iconsWrapper">
      <button class="headerHomeButton" @click="router.push('/profile')">
        <IconUser />
      </button>
      <IconHeart />
      <IconShoppingCart />
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  z-index: 1;
}

.iconsWrapper {
  width: 13%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.headerHomeButton {
  background-color: transparent;
  border: none;
}

.linkHomeWrapper {
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (min-width: 768px) {
  .header {
    height: 140px;
    padding: 0 100px;
  }

  .displayIcon {
    display: none;
  }
}

@media (max-width: 767px) {
  .header {
    height: 100px;
    padding: 0 24px;
  }

  .linkHomeWrapper {
    display: none;
  }

  .iconsWrapper {
    width: 50%;
  }
}
</style>
