<template>
  <div>
    <page-layout>
      <page-header :title="title" describe=""></page-header>
      <div style="height: 10px"></div>
      <a-row :gutter="[10, 10]">
        <!-- v-for="item of 6" :key="item" -->
        <a-col :span="24">
          <a-card style="text-align: center">
            <!-- <a-row>
              <a-col :span="8">
                <a-statistic
                  title="时间"
                  :value="Math.floor(Math.random() * 10) + 20"
                  style="margin-right: 50px"
                >
                </a-statistic>
              </a-col>
              <a-col :span="8">
                <a-statistic
                  title="未作答"
                  :value="Math.floor(Math.random() * 10)"
                  class="demo-class"
                >
                  <template #suffix>
                    <span> </span>
                  </template>
                </a-statistic>
              </a-col>
              <a-col :span="8">
                <a-statistic
                  title="已作答"
                  :value="Math.floor(Math.random() * 20)"
                  class="demo-class"
                >
                </a-statistic>
              </a-col>
            </a-row> -->
          </a-card>
          <a-card style="text-align: center">
            <a-image
              width="70%"
              src="https://img1.baidu.com/it/u=1981183712,2131560377&fm=253&fmt=auto&app=138&f=JPG?w=724&h=476"
            />
          </a-card>
        </a-col>
      </a-row>
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
      return new URL(`../../assets/image/zhuanzhulipinggu.png`, import.meta.url)
        .href;
    },
  },
};
</script>
<style></style>
