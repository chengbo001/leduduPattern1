<template>
  <div id="box-list">
    <page-layout>
      <page-header
        :title="title"
        describe="添加、修改、删除和查询监控设备的信息"
      ></page-header>
    </page-layout>
    <page-layout>
      <a-space>
        <a-input-search placeholder="请输入" style="width: 400px" />
        <a-button type="primary" @click="showModal">新增</a-button>
      </a-space>
      <div style="height: 10px"></div>
      <a-row :wrap="true" :gutter="[10, 10]">
        <a-col v-for="item of data" :key="item" :span="6">
          <a-card :title="item.title">
            <template #extra>
              <a-space> <a href="#">修改</a><a href="#">删除</a></a-space>
            </template>
            <div>
              <a-space direction="vertical">
                <span>{{ item.field1 }}</span>
                <span>{{ item.field2 }}</span>
                <span>{{ item.field3 }}</span>
                <span>{{ item.field4 }}</span>
              </a-space>
            </div>
            <div style="text-align: right">
              <a-space>
                <a-button type="primary" size="small" shape="circle">
                  <menu-unfold-outlined />
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
    <a-modal v-model:visible="visible" title="新增">
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
const courseData = Mock.mock({
  "data|12": [
    {
      "key|+1": 1,
      title() {
        return "检测设备JCSB045" + this.key;
      },
      field1: "位置：东大街中段",
      field2: "生产商：xx科技",
      field3: "状态：正常",
      field4: "上次检修：一周",
    },
  ],
});

export default {
  setup() {
    const visible = ref(false);
    const showModal = () => {
      visible.value = true;
    };
    return {
      title: document.title,
      data: courseData.data,
      visible,
      showModal,
    };
  },
};
</script>
