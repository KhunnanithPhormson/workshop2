<template>
  <div>
    <div v-if="page">
      <img
        v-if="page.banner"
        :src="page.banner"
        :alt="`${page.title} Banner`"
      />
      <img
        v-if="page.thumbnail"
        :src="page.thumbnail"
        :alt="`${page.title} Thumbnail`"
      />
      <h1>{{ page.title }}</h1>
      <i v-if="page.createdBy || page.createdAt">
        {{ page.createdBy + ' - ' + formatMonthDayYear(page.createdAt) }} ({{
          page.readTime
        }}
        mins read)
      </i>
      <p v-dompurify-html="page.content"></p>
    </div>
    <Error404 v-else />
  </div>
</template>

<script setup>
const route = useRoute();
const { formatMonthDayYear } = useTimeFormat();

const { data: page } = await useFetch('/api/v1/pages/' + route.params.slug);

useSEO({
  title: page?.value?.metaTitle,
  description: page?.value?.metaDescription,
  keywords: page?.value?.metaKeywords,
  image: page?.value?.thumbnail,
  publishedAt: page?.value?.createdAt,
  modifiedAt: page?.value?.updatedAt,
});
</script>
