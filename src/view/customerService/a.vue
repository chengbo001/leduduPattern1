<template>
  <div id="table-dome">
    <page-layout>
      <page-header
        :title="title"
        describe="可以在系统内部讨论项目，并分享意见和建议。"
      ></page-header>
      <!-- 提供专业客服在线指导，解答使用过程中遇到的问题。 -->
    </page-layout>
    <page-layout>
      <a-row :gutter="10">
        <a-col :span="6">
          <a-card>
            <a-row>
              <a-col :span="20">
                <span>{{ "群组" }}</span>
              </a-col>
              <a-col :span="4">
                <a-space>
                  <redo-outlined />
                  <plus-outlined />
                </a-space>
              </a-col>
            </a-row>
            <div style="height: 8px"></div>
            <div
              v-for="item of 8"
              :key="item"
              style="padding: 8px; border-bottom: 1px solid #f5f7f9"
              :class="{ bgc: 1 == item }"
            >
              <a-avatar size="small">
                <template #icon><UserOutlined /></template>
              </a-avatar>
              {{ item + "号交流群" }}
            </div>
          </a-card>
        </a-col>
        <a-col :span="18">
          <a-card>
            <div style="display: flex; justify-content: right">
              <div
                style="
                  position: relative;
                  margin-right: 18px;
                  padding: 8px;
                  border: 1px solid #f5f5f5;
                "
              >
                <!-- {{ "你好，在吗" }} -->
                {{ "科技项目KJXM049提交材料不全" }}
                <div
                  style="
                    position: absolute;
                    top: 6px;
                    right: -16px;
                    border-top: 8px solid #fff;
                    border-right: 8px solid #fff;
                    border-bottom: 8px solid #fff;
                    border-left: 8px solid #f5f5f5;
                  "
                ></div>
              </div>
              <a-avatar size="small">
                <template #icon><UserOutlined /></template>
              </a-avatar>
            </div>
            <div style="display: flex">
              <a-avatar size="small">
                <template #icon><UserOutlined /></template>
              </a-avatar>
              <div
                style="
                  position: relative;
                  margin-left: 18px;
                  padding: 8px;
                  border: 1px solid #f5f5f5;
                "
              >
                <!-- {{ "您好，很高兴为您服务，请问您想咨询什么问题？" }} -->
                {{ "科技项目KJXM049创新性不强，市场潜力不高" }}
                <div
                  style="
                    position: absolute;
                    top: 6px;
                    left: -16px;
                    border-top: 8px solid #fff;
                    border-left: 8px solid #fff;
                    border-bottom: 8px solid #fff;
                    border-right: 8px solid #f5f5f5;
                  "
                ></div>
              </div>
            </div>
            <div style="height: 400px"></div>
            <a-textarea></a-textarea>
            <div style="height: 10px"></div>
            <div style="text-align: right">
              <a-button type="primary">发送</a-button>
            </div>
          </a-card>
        </a-col>
        <!-- <a-col :span="6">
          <a-card>    
          </a-card>
        </a-col> -->
      </a-row>
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>
<script>
import Mock from "better-mock";

export default {
  setup() {
    const title = document.title;

    /// 声明抛出
    return {
      title,
    };
  },
};
</script>
<style lang="scss" scoped>
.bgc {
  background-color: #f0faff;
}
</style>
