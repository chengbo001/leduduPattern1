<template>
  <div>
    <page-header
      :title="title"
      describe="提供丰富的词汇表和例句，帮助用户扩大词汇量，提升口语表达水平。"
    ></page-header>
    <page-layout>
      <a-card>
        <a-image width="100%" :src="getImageUrl()" />
      </a-card>
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
      return new URL(`../../assets/image/englishWord.png`, import.meta.url)
        .href;
    },
  },
};
</script>
<style></style>
