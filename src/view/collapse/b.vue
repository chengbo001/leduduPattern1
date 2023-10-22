<template>
  <div id="table-dome">
    <page-layout>
      <page-header
        :title="title"
        describe="系统应能够检测并识别图像中的目标，如人物、车辆、建筑物等。"
      ></page-header>
    </page-layout>
    <page-layout>
      <a-row :gutter="10">
        <a-col :span="24">
          <a-card>
            <a-input-search
              placeholder="请输入"
              style="width: 400px"
              @search="$alert('正在搜索中，请稍后')"
            />
            <div style="height: 10px"></div>
            <a-collapse
              v-model:activeKey="activeKey"
              :expand-icon-position="expandIconPosition"
            >
              <a-collapse-panel
                v-for="(item, index) of data"
                :key="index"
                :header="item.header + '' + item.serial"
              >
                <!-- <a-form layout="inline">
                  <a-form-item
                    v-for="(item, index) of switchData"
                    :key="index"
                    :label="item.label"
                  >
                    <a-switch
                      v-model:checked="item.value"
                      size="small"
                    ></a-switch>
                  </a-form-item>
                </a-form> -->
                <span style="display: block; text-indent: 40px">
                  {{ item.text }}
                </span>
                <template #extra>
                  <setting-outlined @click="handleClick" />
                </template>
              </a-collapse-panel>
            </a-collapse>
            <div style="height: 10px"></div>
            <a-pagination :current="1" :total="50" show-less-items />
          </a-card>
        </a-col>
        <!-- <a-col :span="6">
          <a-card>
            <a-form>
              <a-form-item label="标题">
                <a-input />
              </a-form-item>
              <a-form-item label="内容">
                <a-input />
              </a-form-item>
              <a-form-item label="通知方式">
                <a-radio-group
                  option-type="button"
                  :options="['短信', '邮件', '语音']"
                />
              </a-form-item>
              <a-button type="primary" style="display: block; margin: 0 auto">
                提交
              </a-button>
            </a-form>
          </a-card>
        </a-col> -->
      </a-row>
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>
<script>
import Mock from "better-mock";
import { SettingOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref, watch } from "vue";
const data = Mock.mock({
  "data|9": [
    {
      "key|+1": 1,
      "header|1": function () {
        return "";
      },
      "serial|1": function () {
        return "TXSP034" + this.key;
      },
      "text|+1": ["监测到图中有1个人，两辆车", "监测到图中有1个车，三栋建筑"],
    },
    // ["电话会议", "在线课程", "语音识别"]
  ],
}).data;

const switchData = Mock.mock({
  "data|5": [
    {
      "key|+1": 1,
      "label|+1": ["咬边", "气孔", "夹渣", "裂纹", "其他问题"],
      "value|1": [true, false],
    },
  ],
}).data;

export default defineComponent({
  components: {
    SettingOutlined,
  },
  setup() {
    const title = document.title;
    const activeKey = ref(["0", "1"]);
    const expandIconPosition = ref("right");
    const handleClick = (event) => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
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
