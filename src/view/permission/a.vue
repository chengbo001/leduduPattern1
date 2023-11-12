<template>
  <div>
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <a-card
        v-for="(item, index) of data"
        :key="index"
        style="margin-bottom: 10px"
      >
        <a-row>
          <a-col :span="4">
            <span style="font-weight: bold">{{ item.name }}</span>
          </a-col>
          <a-col :span="20">
            <a-checkbox-group value="B" style="width: 100%">
              <a-row>
                <a-col :span="6">
                  <a-checkbox value="A">{{ item.field1 }}</a-checkbox>
                </a-col>
                <a-col :span="6">
                  <a-checkbox value="B">{{ item.field2 }}</a-checkbox>
                </a-col>
                <a-col :span="6">
                  <a-checkbox value="C">{{ item.field3 }}</a-checkbox>
                </a-col>
                <a-col :span="6">
                  <a-checkbox value="D">{{ item.field4 }}</a-checkbox>
                </a-col>
              </a-row>
            </a-checkbox-group>
          </a-col>
        </a-row>
      </a-card>
      <a-button
        style="width: 100%; margin-top: 16px; margin-bottom: 24px"
        type="dashed"
      >
        <template #icon>
          <PlusOutlined />
        </template>
        新增
      </a-button>
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";
import Mock from "better-mock";

export default defineComponent({
  name: "permission",
  setup() {
    const data = Mock.mock({
      "data|9": [
        {
          "key|+1": 1,
          // name() {
          //   return "生产设备SCSB020" + this.key;
          // },
          name: "@CNAME",
          field1: "管理员",
          field2: "操作权限",
          field3: "查看权限",
          field4: "执行权限",
        },
      ],
    }).data;
    return {
      title: document.title,
      data,
    };
  },
});
</script>

<style scoped lang="less"></style>
