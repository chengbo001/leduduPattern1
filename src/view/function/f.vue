<template>
  <div>
    <!-- 电梯紧急呼叫。上下布局 -->
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <a-card class="card" :bordered="false">
        <a-form :label-col="{ span: 8 }" :wrapper-col="{ span: 8 }">
          <a-form-item label="总带宽">
            <a-input value="2000M"></a-input>
          </a-form-item>
          <!-- <a-form-item label="接收端数据">
            <a-input
              value="233r843r349gyrughhjkrvnbfjkdbvnkxvnbsjkvbndjkfhvjfchejv"
            ></a-input>
          </a-form-item> -->
        </a-form>
        <!-- <div style="text-align: center">
          <a-button type="primary"> 正在比对中～ </a-button>
        </div> -->
      </a-card>
      <!-- https://5b0988e595225.cdn.sohucs.com/images/20171219/0d26eb035daf4950b59edc4ff7a68aac.gif -->
      <!-- 呼叫通话 动画 -->
      <a-card class="card" title="列表" :bordered="true">
        <a-list :grid="{ gutter: 16, column: 4 }" :data-source="data">
          <template #renderItem="{ item }">
            <a-list-item>
              <a-card :title="item.title" hoverable>
                <!-- <div style="text-indent: 40px">
                  {{ item.desc }}
                </div> -->
                <a-form>
                  <a-form-item label="带宽">
                    <a-input-number :value="100"></a-input-number>
                  </a-form-item>
                  <a-form-item label="优先级"> 高 </a-form-item>
                </a-form>
              </a-card>
            </a-list-item>
          </template>
        </a-list>
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
  "data|12": [
    {
      "key|+1": 1,
      title() {
        return "业务YW0" + this.key;
      },
      // "title|+1": ["数据线SJX", "A栋B座3号楼电梯"],
      "desc|+1": ["准确性：99%", "准确性：99.5%"],
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
