<template>
  <div id="table-dome">
    <page-layout>
      <page-header
        :title="title"
        describe="提供绿色校园建设方案，包括绿色建筑、绿色交通、绿色能源等方面的建议，帮助学校实现绿色校园建设目标。"
      ></page-header>
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
                    <a-button size="small" @click="$alert('已发送')"
                      >发送</a-button
                    >
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
              <!-- <a-form-item label="上传照片">
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
              </a-form-item> -->
              <!-- <a-radio-group
                option-type="button"
                :options="['佩戴', '未佩戴']"
              /> -->
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
      "header|+1": ["建设方案", "建设方案"],
      "serial|1": function () {
        return "JSFA034" + this.key;
      },
      "text|+1": [
        "绿色建筑：使用环保材料，智能化控制室内设备",
        "绿色交通：校内多布置自行车",
        "绿色能源：多部署太阳能设备，减少火力电源",
      ],
    },
  ],
}).data;

const imageData = Mock.mock({
  "data|6": [
    {
      "key|+1": 1,
      "src|+1": [
        "https://img0.baidu.com/it/u=1139262936,735614033&fm=253&fmt=auto&app=138&f=JPEG?w=560&h=362",
        "https://n.sinaimg.cn/sinakd10119/356/w1807h949/20201011/abe3-kakmcxc8737526.jpg",
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
