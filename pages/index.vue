<template>
  <div class="background">
    <div class="wrap">
      <div class="div-header">
        <div class="text text--header">Category</div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
      <div class="card-group">
        <Swiper
          :modules="[SwiperPagination, SwiperNavigation]"
          :slides-per-view="5"
          :loop="true"
          :autoplay="{
            delay: 8000,
          }"
          :pagination="{
            el: '.swiper-pagination',
          }"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
        >
          <SwiperSlide v-for="(item, index) in categories" :key="index">
            <Card key="slide" :category="item.category" :img-c="item.imgC" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="div">
        <h2><span>Other Products</span></h2>
      </div>
      <div class="max-w-[1600px] mx-[200px]">
        <div class="card-group">
          <Swiper
            :modules="[SwiperPagination]"
            :slides-per-view="3"
            :loop="true"
            :autoplay="{
              delay: 8000,
            }"
            :pagination="{
              el: '.swiper-pagination',
            }"
            :navigation="{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }"
          >
            <SwiperSlide v-for="(item, index) in products" :key="index">
              <PCard
                key="slide"
                :desc="item.desc"
                :title="item.title"
                :detail="item.detail"
                :disprize="item.disprize"
                :price="item.price"
                :img-p="item.imgP"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="w-[1600px] flex justify-end pr-[400px]">
          <img class="w-[119px] h-[40px]" src="/arrow_right.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const categories = ref([
  {
    category: 'ALL PRODUCT',
    // imgC: '~~/asset/img/product.png',
    imgC: 'cate1.jpg',
  },
  {
    category: 'DOI TUNG PORK',
    imgC: 'cate2.jpg',
  },
  {
    category: 'BEEF',
    imgC: 'cate3.jpg',
  },
  {
    category: 'PORK',
    imgC: 'cate4.jpg',
  },
  {
    category: 'SAUSAGES & BURGERS',
    imgC: 'cate5.jpg',
  },
  {
    category: 'BACON',
    imgC: 'cate1.jpg',
  },
  {
    category: 'COLD CUTS',
    imgC: 'cate1.jpg',
  },
  {
    category: 'PIZZA & PIES',
    imgC: 'cate1.jpg',
  },
  {
    category: 'CHEESE',
    imgC: 'cate1.jpg',
  },
  {
    category: 'SAUCES & RUB',
    imgC: 'cate1.jpg',
  },
  {
    category: 'POULTRY',
    imgC: 'cate1.jpg',
  },
  {
    category: 'BO.LAN GROCERY',
    imgC: 'cate1.jpg',
  },
  {
    category: 'PASTA BY SCARLETTA',
    imgC: 'cate1.jpg',
  },
  {
    category: 'CAST IRON BY RARO',
    imgC: 'cate1.jpg',
  },
  {
    category: 'DOG FOOD',
    imgC: 'cate1.jpg',
  },
  {
    category: 'OTHER',
    imgC: 'cate1.jpg',
  },
]);
const products = ref([
  {
    desc: 'Beef-Primary Cuts',
    title: 'Product name',
    detail: 'Aliqua id fugiat nostrud irure .',
    disprize: '3.99',
    price: '5.99',
    imgP: 'pic1.png',
  },
  {
    desc: 'Beef-Primary Cuts',
    title: 'Product name',
    detail: 'Aliqua id fugiat nostrud irure .',
    disprize: '3.99',
    price: '5.99',
    imgP: 'pic2.png',
  },
  {
    desc: 'Beef-Primary Cuts',
    title: 'Product name',
    detail: 'Aliqua id fugiat nostrud irure .',
    disprize: '3.99',
    price: '5.99',
    imgP: 'pic3.png',
  },
]);
</script>
