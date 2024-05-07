// pages/index.vue

<template>
  <div class="motorcyclesHome">
    <div v-if="motorcyclesStore.isLoading" style="color: white;">Loading...</div>
    <div v-else-if="motorcyclesStore.error">{{ motorcyclesStore.error }}</div>
    <div id="equipment" class="equipmentSection" v-else>
      <div class="firstSectionDescriptionTitleWhite">
        <span class="firstSectionDescriptionTitleOrange">most popular</span>
        motorbike rental deals
      </div>
      <div class="bikeCardsContainerHome">
        <div class="bikeCardsWrapperHome" v-for="(motorcycle, index) in motorcyclesStore.motorcycles">
          <BikeCard :key="index" :motorcycle />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useMotorcyclesStore } from '~/stores/motorcycles';

export default {
  setup() {
    const motorcyclesStore = useMotorcyclesStore();

    async function fetchData() {
      await motorcyclesStore.fetchMotorcycles();
    }

    fetchData();

    return { motorcyclesStore };
  },
};
</script>

<style>
.bikeCardsWrapperHome {
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.bikeCardsContainerHome {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
}

@media (min-width: 768px) {
  .bikeCardsWrapperHome {
    gap: 40px;
  }

  .bikeCardsContainer {
    gap: 40px;
  }
}

@media (max-width: 767px) {
  .bikeCardsWrapperHome {
    gap: 50px;
    flex-direction: column;
  }

  .bikeCardsContainerHome {
    flex-direction: column;
    gap: 50px;
    align-items: start;
  }

  .motorcyclesHome {
    margin-top: -150px;
    margin-bottom: 50px;
  }
}
</style>