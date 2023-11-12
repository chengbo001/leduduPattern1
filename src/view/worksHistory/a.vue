<template>
  <div>
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <a-card class="card">
        <a-row :gutter="[10, 10]" v-for="item of 2" :key="item">
          <a-col :span="8">
            <a-image
              :src="getImageUrl('../../assets/image/sanweichongjian.png')"
            ></a-image>
            <div>时间：2023/10/12</div>
          </a-col>
          <a-col :span="8">
            <a-image
              :src="getImageUrl('../../assets/image/sanweichongjian2.png')"
            ></a-image>
            <div>时间：2023/10/11</div>
          </a-col>
          <a-col :span="8">
            <a-image
              :src="getImageUrl('../../assets/image/sanweichongjian2.png')"
            ></a-image>
            <div>时间：2023/10/10</div>
          </a-col>
        </a-row>
      </a-card>
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>

<script>
import {
  defineComponent,
  onMounted,
  nextTick,
  reactive,
  ref,
  toRefs,
} from "vue";
import { message, notification } from "ant-design-vue";
import { PlusOutlined } from "@ant-design/icons-vue";
import Mock from "better-mock";

export default defineComponent({
  name: "advancedForm",
  components: {
    PlusOutlined,
  },
  setup() {
    function getImageUrl(imgSrc) {
      return new URL(imgSrc, import.meta.url).href;
    }
    return {
      title: document.title,
      getImageUrl,
    };
  },
});
</script>

<style scoped lang="less">
.card {
  margin-bottom: 10px;
}
.demo-loadmore-list {
  min-height: 350px;
}
.ad-img {
  width: 80%;
  border: 1px solid #9e9e9e;
  padding: 8px;
  box-shadow: 5px 5px 5px 0px #9e9e9e;
  border-radius: 3px;
}
</style>
