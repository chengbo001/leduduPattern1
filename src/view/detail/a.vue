<template>
  <!-- 空白申请表单 -->
  <div>
    <page-layout>
      <a-card>
        <a-form>
          <a-row>
            <a-col :span="12" v-for="(item, index) of labelData1" :key="index">
              <a-form-item :label="item" style="width: 90%" required>
                <a-input></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="12" v-for="(item, index) of labelData2" :key="index">
              <a-form-item :label="item" style="width: 90%" required>
                <a-form-item name="dragger" no-style>
                  <a-upload-dragger name="files" action="">
                    <p class="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p class="ant-upload-text">上传文件</p>
                    <p class="ant-upload-hint">支持单个、多个文件上传</p>
                  </a-upload-dragger>
                </a-form-item>
              </a-form-item>
            </a-col>
          </a-row>
          <a-form-item :wrapper-col="{ span: 12, offset: 11 }">
            <a-button type="primary" html-type="submit">提交</a-button>
          </a-form-item>
        </a-form>
      </a-card>
    </page-layout>
  </div>
</template>

<script>
export default {
  setup() {
    const labelData1 = [
      "建筑名称",
      "位置",
      "建筑高度",
      "建筑面积",
      "建筑材料",
      "建筑使用功能",
    ];
    const labelData2 = [
      "结构荷载设计",
      "输电线路设计",
      "道路规划",
      "施工计划",
      "环境保护措施",
      "经济效益分析",
    ];
    return {
      labelData1,
      labelData2,
    };
  },
};
</script>

<style></style>
