<template>
  <div class="card">
    <div class="card__category hover:bg-white">
      <img class="card card--imgC" :src="imgC" />
      <span class="text text--category">{{ category }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  category: {
    type: String,
    required: true,
  },
  imgC: {
    type: String,
    required: true,
  },
});
</script>
