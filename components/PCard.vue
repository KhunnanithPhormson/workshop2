<template>
  <div class="card">
    <div class="card__product">
      <img class="card card--imgP" :src="imgP" />
      <span class="text text--desc pl-[20px]">{{ desc }}</span>
      <span class="text text--title">{{ title }}</span>
      <span class="text text--desc">{{ detail }}</span>
      <div class="text text--title">{{ disprize }}</div>
      <div class="text text--price">{{ price }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const card = defineProps({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  detail: {
    type: String,
    required: true,
  },
  disprize: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  imgP: {
    type: String,
    required: true,
  },
});
</script>
