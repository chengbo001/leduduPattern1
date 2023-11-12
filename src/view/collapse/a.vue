<template>
  <div id="table-dome">
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <a-row :gutter="10">
        <a-col :span="18">
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
                :header="item.header + ' ' + item.serial"
              >
                <!-- <a-space>
                  <a-image
                    v-for="(item, index) of imageData"
                    :key="index"
                    :src="item.src"
                    :width="150"
                  ></a-image>
                </a-space> -->
                <span style="display: block; text-indent: 40px">
                  {{ item.text }}
                </span>
                <template #extra>
                  <!-- <setting-outlined @click="handleClick" /> -->
                  <a-space>
                    <a-button size="small" @click="$alert('已发送')">
                      发送
                    </a-button>
                    <a-button
                      size="small"
                      @click="$alert('已编辑成功，正在保存')"
                      >编辑</a-button
                    >
                    <a-button size="small" @click="$alert('已删除')"
                      >删除</a-button
                    >
                  </a-space>
                </template>
              </a-collapse-panel>
            </a-collapse>
            <div style="height: 10px"></div>
            <a-pagination :current="1" :total="50" show-less-items />
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card>
            <a-form>
              <a-form-item label="标题">
                <a-input />
              </a-form-item>
              <a-form-item label="内容">
                <a-input />
              </a-form-item>
              <a-form-item label="上传资料">
                <a-upload
                  name="avatar"
                  list-type="picture-card"
                  class="avatar-uploader"
                >
                  <div>
                    <plus-outlined></plus-outlined>
                    <div class="ant-upload-text">Upload</div>
                  </div>
                </a-upload>
              </a-form-item>
              <a-form-item label="优先级">
                <a-radio-group
                  option-type="button"
                  :options="['高', '中', '低']"
                />
              </a-form-item>
              <a-button
                type="primary"
                style="display: block; margin: 0 auto"
                @click="$alert('提交成功')"
              >
                提交
              </a-button>
            </a-form>
          </a-card>
        </a-col>
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
      "header|+1": ["化学品泄漏应急预案", "火灾应急预案"],
      "serial|1": function () {
        return "YA0" + this.key;
      },
      "text|+1": [
        `
          （1）发现化学品泄漏时，立即报告实验室负责人，并穿戴个人防护设备。
          （2）根据化学品的性质和泄漏程度，选择合适的处置方法，如吸附、中和、封闭等。
          （3）成立应急处理小组，负责组织人员撤离、现场清理和通风换气等工作。
          （4）记录泄漏事故的原因、处理过程和结果，及时向相关部门报告。
          （5）定期对实验室人员进行化学品泄漏应急处理的培训和演练。
        `,
        `
          （1）发现火灾时，立即拨打火警电话，同时报告实验室负责人。
          （2）组织人员紧急疏散，关闭门窗，切断电源。
          （3）使用灭火器、消防栓等消防设施进行初期火灾扑救。
          （4）成立应急处理小组，负责组织人员撤离、现场清理和通风换气等工作。
          （5）记录火灾事故的原因、处理过程和结果，及时向相关部门报告。
          （6）定期对实验室人员进行消防安全知识和灭火器使用培训，并进行消防演练。
        `,
      ],
    },
  ],
}).data;

const imageData = Mock.mock({
  "data|6": [
    {
      "key|+1": 1,
      "src|+1": [
        "https://img2.baidu.com/it/u=1297895811,412345726&fm=253&fmt=auto&app=138&f=JPEG?w=568&h=500",
        "https://img2.baidu.com/it/u=1075515209,3151979884&fm=253&fmt=auto&app=138&f=GIF?w=715&h=500",
      ],
    },
  ],
}).data;

export default defineComponent({
  components: {
    SettingOutlined,
  },
  setup() {
    const title = document.title;
    const activeKey = ref(["0", "1", "2"]);
    const expandIconPosition = ref("right");
    const handleClick = (event) => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
    };

    watch(activeKey, (val) => {});
    return {
      title,
      data,
      activeKey,
      expandIconPosition,
      handleClick,
      imageData,
    };
  },
});
</script>
