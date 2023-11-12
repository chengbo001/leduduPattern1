<template>
  <div>
    <!-- 电梯紧急呼叫。上下布局 -->
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <a-row :gutter="[10, 10]">
        <a-col
          :span="8"
          v-for="item of ['电梯', '电梯管理员', '维修人员', '机房', '维保公司']"
          :key="item"
        >
          <!-- :offset="item == '机房' ? 4 : 0" -->
          <a-card :title="item" style="text-align: center">
            <a-space direction="vertical">
              <span style="font-size: 14px">通话中～</span>
              <a-image
                :width="100"
                src="https://img1.baidu.com/it/u=499230281,4092283460&fm=253&fmt=auto&app=120&f=PNG?w=500&h=500"
              ></a-image>
            </a-space>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card title="拉入其他人" style="text-align: center">
            <a-space direction="vertical">
              <span style="font-size: 14px"> </span>
              <a-image
                :width="100"
                src="https://imgnew13.photophoto.cn/20190429/jiahaotubiao-33116016_2.jpg"
              ></a-image>
            </a-space>
          </a-card>
        </a-col>
      </a-row>
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
  "data|8": [
    {
      "key|+1": 1,
      "title|+1": ["A栋B座2号楼电梯", "A栋B座3号楼电梯"],
      "desc|+1": ["运行中", "运行中"],
    },
  ],
}).data;
export default defineComponent({
  name: "advancedForm",
  components: {
    PlusOutlined,
  },
  setup() {
    return {
      title: document.title,
      data,
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
</style>
