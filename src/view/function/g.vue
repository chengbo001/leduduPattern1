<template>
  <div>
    <!-- 电梯维修员通话。上下布局 -->
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <a-row :gutter="[10, 10]">
        <a-col v-for="(item, index) of statisticData" :key="index" :span="6">
          <a-card>
            <a-statistic
              :title="item.title"
              :value="item.value"
              :valueStyle="{ fontSize: '15px' }"
            >
              <template #suffix>
                <a-switch :checked="true" size="small"></a-switch>
              </template>
            </a-statistic>
          </a-card>
        </a-col>
      </a-row>
      <div style="height: 10px"></div>
      <!--拨打通话 -->
      <!-- https://5b0988e595225.cdn.sohucs.com/images/20171219/0d26eb035daf4950b59edc4ff7a68aac.gif -->
      <a-card class="card" title="列表" :bordered="true">
        <a-list :grid="{ gutter: 16, column: 4 }" :data-source="data">
          <template #renderItem="{ item }">
            <a-list-item>
              <a-card :title="item.title" hoverable>
                <a-space direction="vertical">
                  {{ item.desc }}
                  <!-- <phone-two-tone @click="$alert('正在进行拨号')" />
                  {{ item.field1 }} -->
                </a-space>
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

const statisticData = Mock.mock({
  "data|4": [
    {
      "key|+1": 1,
      "title|+1": ["混合电磁", "宁静电磁", "射频电磁", "微波电磁"],
      "value|+1": ["开启", "开启", "开启", "开启"],
    },
  ],
}).data;

const data = Mock.mock({
  "data|12": [
    {
      "key|+1": 1,
      title() {
        return "数据线SJX0" + this.key;
      },
      // "title|+1": ["@CNAME"],
      "desc|+1": "传输性能稳定",
      "field1|+1": ["值班中", "休班中"],
    },
    // ["A栋B座2号楼电梯", "A栋B座3号楼电梯"]
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
      statisticData,
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
