<template>
  <div id="box-list">
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <a-space>
        <a-input-search
          placeholder="请输入"
          style="width: 400px"
          @search="$alert('正在搜索，请稍后')"
        />
        <a-button type="primary" @click="showModal">新增</a-button>
      </a-space>
      <div style="height: 10px"></div>

      <a-row :wrap="true" :gutter="[10, 10]">
        <a-col v-for="item of data" :key="item" :span="6">
          <a-card :title="item.title">
            <template #extra>
              <a-space>
                <a @click="$alert('修改完成，已保存')">修改</a>
                <a @click="$alert('已删除')">删除</a>
              </a-space>
            </template>
            <div>
              <a-space direction="vertical">
                <span v-for="(item2, index2) of descList" :key="index2">
                  <a-badge :color="badgeColor[index2]" :text="item[item2]" />
                </span>
              </a-space>
            </div>
            <div style="text-align: right">
              <a-space>
                <a-button type="primary" size="small" shape="circle">
                  <menu-unfold-outlined @click="$alert('即将跳转页面')" />
                </a-button>
                <!-- <a-button size="small" shape="circle">
                  <download-outlined />
                  <delete-outlined />
                </a-button> -->
              </a-space>
            </div>
          </a-card>
        </a-col>
      </a-row>

      <div style="height: 10px"></div>
      <a-pagination :current="1" :total="50" show-less-items />
    </page-layout>
    <page-footer></page-footer>

    <a-modal v-model:visible="visible" title="新增" @ok="$alert('提交已保存')">
      <a-form>
        <a-form-item label="设备名称">
          <a-input></a-input>
        </a-form-item>
        <a-form-item label="位置">
          <a-input></a-input>
        </a-form-item>
        <a-form-item label="生产商">
          <a-input></a-input>
        </a-form-item>
        <a-form-item label="关联数据">
          <a-input></a-input>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
import Mock from "better-mock";
import { ref } from "vue";
const data = Mock.mock({
  "data|8": [
    {
      "key|+1": 1,
      title() {
        return "设备SB0" + this.key;
      },
      field1: "位置：WZ0561",
      field2: "生产商：xx科技",
      field3: "状态：正常",
      field4: "数据上传中",
      field5: "温度：30°C",
      field6: "压力：50",
      field7: "上次检测：一周前",
      // field8: "折旧：80%",
      // 写个函数 自动显示 filed字段
    },
  ],
}).data;

const descList = Object.keys(data[0]).filter((item) => item.includes("field"));

const badgeColor = [
  "pink",
  "red",
  "yellow",
  "orange",
  "cyan",
  "green",
  "blue",
  "purple",
  "geekblue",
  "magenta",
  "volcano",
  "gold",
  "lime",
];

export default {
  setup() {
    const visible = ref(false);
    const showModal = () => {
      visible.value = true;
    };
    return {
      title: document.title,
      data: data,
      visible,
      showModal,
      descList,
      badgeColor,
    };
  },
};
</script>
