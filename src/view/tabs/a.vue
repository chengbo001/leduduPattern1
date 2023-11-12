<template>
  <div>
    <!-- 标签页切换 -->
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <a-card class="card" :bordered="false">
        <a-tabs v-model:activeKey="activeKey">
          <a-tab-pane v-for="item of data" :key="item.key" :tab="item.title">
            <div style="display: flex; justify-content: center">
              <a-space direction="vertical">
                <a-image :width="200" :src="item.img"></a-image>
                <span style="display: block; text-align: center">
                  {{ item.title + "二维码" }}
                </span>
                <!-- <span>{{ item.desc }}</span> -->
              </a-space>
            </div>
          </a-tab-pane>
        </a-tabs>
      </a-card>
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, toRefs } from "vue";
import { message, notification } from "ant-design-vue";
import { PlusOutlined } from "@ant-design/icons-vue";
import Mock from "better-mock";

const data = Mock.mock({
  "data|3": [
    {
      "key|+1": 1,
      "title|+1": ["微信", "支付宝", "银行卡"],
      "img|+1": [
        "https://bpic.588ku.com/element_origin_min_pic/01/37/16/11573c3e6c4ce82.jpg",
        "https://img0.baidu.com/it/u=1213030744,3566456001&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        "https://img.zcool.cn/community/015e725743fff032f8759a3ef93499.jpg@1280w_1l_2o_100sh.jpg",
      ],
      "desc|+1": ["1"],
    },
  ],
}).data;
export default defineComponent({
  components: {
    PlusOutlined,
  },
  setup() {
    return {
      title: document.title,
      activeKey: ref(1),
      data,
    };
  },
});
</script>

<style scoped lang="less">
.card {
  margin-bottom: 10px;
}
</style>
