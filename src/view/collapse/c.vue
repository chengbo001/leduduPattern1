<template>
  <div id="table-dome">
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <a-input-search
        placeholder="请输入"
        style="width: 400px"
        @search="$alert('正在搜索中，请稍后')"
      />
      <div style="height: 10px"></div>
      <a-row :gutter="10">
        <a-col :span="24">
          <a-collapse
            v-model:activeKey="activeKey"
            :expand-icon-position="expandIconPosition"
          >
            <a-collapse-panel
              v-for="(item, index) of data"
              :key="index"
              :header="item.header + ' ' + item.serial"
            >
              <a-form layout="inline" style="padding-left: 50px">
                <a-form-item
                  v-for="(item, index) of switchData"
                  :key="index"
                  :label="item.label"
                >
                  <a-switch
                    v-model:checked="item.value"
                    size="small"
                  ></a-switch>
                  <!-- <a-button size="small" @click="$alert('已' + item.label)">
                    {{ item.label }}
                  </a-button> -->
                </a-form-item>
              </a-form>
              <template #extra>
                <a-space>
                  <a-button size="small" @click="$alert('已应用')">
                    应用
                  </a-button>
                  <setting-outlined @click="handleClick" />
                </a-space>
              </template>
            </a-collapse-panel>
          </a-collapse>
        </a-col>
      </a-row>
      <div style="height: 10px"></div>
      <a-pagination :current="1" :total="50" show-less-items />
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>
<script>
import Mock from "better-mock";
import { SettingOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref, watch, getCurrentInstance } from "vue";
const data = Mock.mock({
  "data|9": [
    {
      "key|+1": 1,
      "header|+1": ["课程01", "课程03", "课程05"],
      "serial|1": function () {
        // return "PZ034" + this.key;
        return "";
      },
      "text|+1": ["实时对话中已经消除不必要的声音反射。"],
    },
  ],
}).data;

const switchData = Mock.mock({
  "data|4": [
    {
      "key|+1": 1,
      "label|+1": ["初级", "中级", "高级", "特级"],
      "value|+1": [false, false, true, false],
    },
  ],
}).data;
export default defineComponent({
  components: {
    SettingOutlined,
  },
  setup() {
    const instance = getCurrentInstance();
    const title = document.title;
    const activeKey = ref(["0", "1", "2"]);
    const expandIconPosition = ref("right");
    const handleClick = (event) => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
      instance.proxy.$alert("设置成功，已保存");
    };

    watch(activeKey, (val) => {});
    return {
      title,
      data,
      switchData,
      activeKey,
      expandIconPosition,
      handleClick,
    };
  },
});
</script>
