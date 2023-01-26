<template>
  <div>
    <div v-if="blog">
      <img
        v-if="blog.banner"
        :src="blog.banner"
        :alt="`${blog.title} Banner`"
      />
      <img
        v-if="blog.thumbnail"
        :src="blog.thumbnail"
        :alt="`${blog.title} Thumbnail`"
      />
      <h1>{{ blog.title }}</h1>
      <i v-if="blog.createdBy || blog.createdAt">
        {{ blog.createdBy + ' - ' + formatMonthDayYear(blog.createdAt) }}
        ({{ blog.readTime }} mins read)
      </i>
      <p v-dompurify-html="blog.content"></p>
    </div>
    <Error404 v-else />
  </div>
</template>

<script setup>
const route = useRoute();
const { formatMonthDayYear } = useTimeFormat();

const { data: blog } = await useFetch('/api/v1/blogs/' + route.params.slug);

useSEO({
  title: blog?.value?.metaTitle,
  description: blog?.value?.metaDescription,
  keywords: blog?.value?.metaKeywords,
  image: blog?.value?.thumbnail,
  publishedAt: blog?.value?.createdAt,
  modifiedAt: blog?.value?.updatedAt,
});
</script>
