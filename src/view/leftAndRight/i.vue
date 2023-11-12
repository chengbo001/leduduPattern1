<template>
  <div>
    <!-- 系统性能表现 左折线图 右参数盒子 -->
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <a-row :gutter="[10, 10]">
        <a-col :span="8" v-for="item of 2" :key="item">
          <a-card>
            <a-image
              style="width: 100%"
              src="https://img.pconline.com.cn/images/upload/upc/tx/itbbs/1309/18/c16/25853404_1379512884743.jpg"
            ></a-image>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card class="card" title="像素视差" :bordered="false">
            <div v-for="item of 8" :key="item">
              {{
                "| 1  | 0 |\n----\n|-1  | 2 |\n----\n| 3  | 4 |\n----\n| 5  | 6 |"
              }}
            </div>
          </a-card>
        </a-col>

        <a-col :span="8" v-for="item of 2" :key="item">
          <a-card>
            <a-image
              style="width: 100%"
              src="http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1309/18/c16/25853408_1379512892056.jpg"
            ></a-image>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card class="card" title="像素视差" :bordered="false">
            <div v-for="item of 8" :key="item">
              {{
                "| 1  | 0 |\n----\n|-1  | 2 |\n----\n| 3  | 4 |\n----\n| 5  | 6 |"
              }}
            </div>
          </a-card>
        </a-col>
      </a-row>
      <a-button
        style="width: 100%; margin-top: 16px; margin-bottom: 24px"
        type="dashed"
      >
        自动匹配中
      </a-button>
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, toRefs } from "vue";
import { message, notification } from "ant-design-vue";
import { PlusOutlined } from "@ant-design/icons-vue";
import Mock from "better-mock";
import lineG2P from "@/view/chart/lineG2P.vue";

const listData = Mock.mock({
  "id|+1": 1,
  "data|8": ["设备SB082"],
}).data;

const checkLabel = [
  "TPS",
  "响应时间",
  "事务延迟",
  "吞吐量",
  "资源利用率",
  "错误率",
  "并发处理能力",
  "弹性",
  "网络延迟",
];
export default defineComponent({
  components: {
    PlusOutlined,
    lineG2P,
  },
  setup() {
    return {
      title: document.title,
      listData,
      checkLabel,
    };
  },
});
</script>

<style scoped lang="less">
.card {
  margin-bottom: 10px;
}
.ad-img {
  width: 80%;
  // border: 1px solid #9e9e9e;
  // padding: 8px;
  box-shadow: 5px 5px 5px 0px #9e9e9e;
  border-radius: 3px;
}

.demo-loadmore-list {
  min-height: 350px;
}

.active {
  background-color: #f0faff;
}
</style>
