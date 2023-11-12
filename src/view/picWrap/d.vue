<template>
  <div>
    <page-layout>
      <page-header :title="title" describe=""></page-header>
      <div style="height: 10px"></div>
      <a-card>
        <a-image width="100%" :src="getImageUrl()" />
      </a-card>
      <!-- <div style="height: 10px"></div>
      <a-pagination :current="1" :total="50" show-less-items /> -->
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: document.title,
    };
  },
  methods: {
    getImageUrl() {
      return new URL(`../../assets/image/maptuceng.png`, import.meta.url).href;
    },
  },
};
</script>
<style></style>
