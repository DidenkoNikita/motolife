<template>
  <div class="bikeCardProfile">
    <div class="nameAndImageBikeCardContainerProfile">
      <div class="typeOfBikeCardProfile">{{ $props.motorcycle.type }}</div>
      <img class="imageOfBikeCardProfile" :src="$props.motorcycle.imageUrl" />
      <div class="imageOfBikeCardOverlayProfile" />
      <button class="iconButtonHeart">
        <IconHeart />
      </button>
    </div>
    <div class="nameAndDataWrapperProfile">
      <div class="motorcycleNameBikeCardProfile">{{ $props.motorcycle.name }}</div>
      <div class="characteristicsContainerBikeCardProfile">
        <div class="typeOfBikeCardProfile">one hour rental</div>
        <div class="delimiterBikeCardProfile" />
        <div class="priceBikeCardProfile">{{ $props.motorcycle.oneHourRental }}</div>
      </div>
      <div class="characteristicsContainerBikeCardProfile">
        <div class="typeOfBikeCardProfile">rental day</div>
        <div class="delimiterBikeCardProfile" />
        <div class="priceBikeCardProfile">{{ $props.motorcycle.rentalDay }}</div>
      </div>
      <div class="characteristicsContainerBikeCardProfile">
        <div class="typeOfBikeCardProfile">deposit</div>
        <div class="delimiterBikeCardProfile" />
        <div class="priceBikeCardProfile">{{ $props.motorcycle.deposit }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MotorcyclesLanding } from '~/public/constants/constants';

defineProps<{
  motorcycle: MotorcyclesLanding
}>()
</script>

<style>
.bikeCardProfile {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;
  width: 110%;
}

.nameAndImageBikeCardContainerProfile {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 100%;
}

.typeOfBikeCardProfile {
  color: #fbfcfc;
  font-family: "Altone Trial";
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.36px;
  text-transform: uppercase;
  text-align: center;
}

.imageOfBikeCardProfile {
  width: 100%;
  box-sizing: border-box;
  object-fit: cover;
}

.imageOfBikeCardOverlayProfile {
  position: absolute;
  top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  opacity: 0.6;
  background: var(--Style, #000101);
  mix-blend-mode: overlay;
}

.iconButtonHeart {
  position: absolute;
  top: 50px;
  right: 10px;
  width: 50px;
  height: 50px;
  background-color: #000101;
  border: none;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.iconButtonHeart:hover {
  border: 1px solid #f6a63f;
}

.iconButtonHeart:active {
  border: 1px solid #e3881a;
}

.motorcycleNameBikeCardProfile {
  color: #f4931c;
  font-family: "GetVoIP Grotesque";
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.characteristicsContainerBikeCardProfile {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.delimiterBikeCardProfile {
  width: 30px;
  height: 1px;
  background: #fbfcfc;
}

.priceBikeCardProfile {
  color: #fbfcfc;
  font-family: "GetVoIP Grotesque";
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.nameAndDataWrapperProfile {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 30px;
  width: 100%;
  margin-top: 40px;
}

@media (min-width: 768px) {
  /* .bikeCardProfile {
    width: 28.47vw;
  } */

  .imageOfBikeCardProfile {
    width: 300px;
    height: 200px;
    border-left: 3px solid #f4931c;
  }

  .imageOfBikeCardOverlayProfile {
    /* width: calc(100% - 3px);
    height: 37.04vh; */
    /* width: calc(15.63vw - 3px); */
    width: 297px;
    height: 200px;
    left: 2.7px;
  }
}

@media (max-width: 767px) {
  .nameAndImageBikeCardContainerProfile {
    gap: 10px;
  }

  .bikeCardProfile {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }

  .imageOfBikeCardProfile {
    width: calc(100vw - 48px);
    height: 29.58vh;
    border-left: 1.892px solid #f4931c;
  }

  .imageOfBikeCardOverlayProfile {
    width: calc(100% - 1.892px);
    left: 1.892px;
    height: 29.58vh;
  }

  .nameAndDataWrapperProfile {
    margin-top: 0;
  }
}
</style>
