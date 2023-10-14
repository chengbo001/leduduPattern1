<template>
  <div>
    <page-header
      :title="title"
      describe="在线测试，对您的学习情况进行考察和测试."
    ></page-header>

    <page-layout>
      <a-card style="text-align: center">
        <a-row>
          <a-col :span="8">
            <a-statistic
              title="时间"
              :value="Math.floor(Math.random() * 10) + 20"
              style="margin-right: 50px"
            >
            </a-statistic>
          </a-col>
          <a-col :span="8">
            <a-statistic
              title="未作答"
              :value="Math.floor(Math.random() * 10)"
              class="demo-class"
            >
              <template #suffix>
                <span> / 100</span>
              </template>
            </a-statistic>
          </a-col>
          <a-col :span="8">
            <a-statistic
              title="已作答"
              :value="Math.floor(Math.random() * 200)"
              class="demo-class"
            >
            </a-statistic>
          </a-col>
        </a-row>
      </a-card>
    </page-layout>
    <page-layout>
      <a-row :gutter="[10, 10]">
        <a-col
          :xs="24"
          :sm="12"
          :md="12"
          :lg="6"
          :xl="6"
          v-for="item of 4"
          :key="item"
        >
          <a-card>
            <a-button type="link" block style="margin-top: 10px">
              jungle
            </a-button>
            <a-button type="dashed" block style="margin-top: 10px">
              vt.刷新
            </a-button>
            <a-button type="dashed" block style="margin-top: 10px">
              vt.相信
            </a-button>
            <a-button type="dashed" block style="margin-top: 10px">
              vt.管理
            </a-button>
            <a-button type="dashed" block style="margin-top: 10px">
              vt.认证
            </a-button>
          </a-card>
        </a-col>
      </a-row>
      <a-button type="primary" style="display: block; margin: 10px auto">
        Next
      </a-button>
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>
<script>
import axios from "axios";
import { ref } from "vue";

export default {
  setup() {
    return {
      title: document.title,
    };
  },
};
</script>
<style>
.demo-loadmore-list {
  min-height: 350px;
}
.demo-loadmore {
  text-align: center;
  margin-top: 12px;
  height: 32px;
  line-height: 32px;
}
</style>
