<template>
  <div id="table-dome">
    <page-layout>
      <page-header :title="title" describe=""></page-header>
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
                    <div style="display: flex; justify-content: center">
                      <a-switch
                        v-model:checked="item.value"
                        size="small"
                      ></a-switch>
                    </div>
                  </a-form-item>
                </a-form> -->
                <!-- <span style="display: block; text-indent: 40px">
                  {{ item.text }}
                </span> -->
                <div style="font-size: 12px">
                  完成：<a-progress
                    :percent="80"
                    size="small"
                    style="width: 600px"
                  />
                </div>
                <div style="font-size: 12px">
                  剩余：<a-progress
                    :percent="20"
                    size="small"
                    style="width: 600px"
                  />
                </div>
                <div style="font-size: 12px">
                  预计时间：<a-progress
                    :percent="100"
                    size="small"
                    style="width: 600px"
                  />
                </div>
                <!-- <div style="font-size: 12px">
                  孟霞进度：<a-progress
                    :percent="98"
                    size="small"
                    style="width: 600px"
                  />
                </div> -->

                <template #extra>
                  <a-space>
                    <a-button size="small" @click="$alert('已分享')">
                      分享
                    </a-button>
                    <setting-outlined @click="handleClick" />
                  </a-space>
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
import { defineComponent, ref, watch, getCurrentInstance } from "vue";
const data = Mock.mock({
  "data|12": [
    {
      "key|+1": 1,
      "header|1": function () {
        return "项目";
      },
      "serial|1": function () {
        return "XM0" + this.key;
      },
      "text|+1": [
        "均衡饮食：保持营养均衡，多吃蔬菜、水果、粗粮等，少吃油腻、高盐、高糖的食物。",
        "规律作息：每天保持充足的睡眠，早睡早起，避免熬夜。",
        "适量运动：每周进行至少150分钟的中等强度运动，如快走、游泳、瑜伽等。",
      ],
    },
    // ["电话会议", "在线课程", "语音识别"]
  ],
}).data;

const switchData = Mock.mock({
  "data|5": [
    {
      "key|+1": 1,
      "label|+1": ["访问控制", "身份验证", "加密数据", "防火墙", "入侵检测"],
      "value|1": [true, true],
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
