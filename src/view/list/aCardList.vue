<template>
  <div>
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <!-- <page-layout>
      <a-card>
        <a-upload-dragger
          v-model:fileList="fileList"
          name="file"
          :multiple="true"
          action=""
          @change="handleChange"
          @drop="handleDrop"
        >
          <p class="ant-upload-drag-icon">
            <inbox-outlined></inbox-outlined>
          </p>
          <p class="ant-upload-text">上传资料</p>
          <p class="ant-upload-hint">支持单文件及多文件上传</p>
        </a-upload-dragger>
      </a-card>
    </page-layout> -->
    <page-layout>
      <a-input-search
        placeholder="请输入"
        style="width: 400px"
        @search="$alert('正在搜索，请稍后')"
      />
      <div style="height: 10px"></div>
      <a-card>
        <a-row :gutter="[15, 15]">
          <a-col :span="6" v-for="item of 8" :key="item">
            <a-card hoverable>
              <template v-slot:cover>
                <img
                  alt="example"
                  src="https://pic.quanjing.com/nd/i8/QJ8678058191.jpg@%21350h"
                  style="width: 200px; margin: 0 auto"
                />
                <!-- https://img1.baidu.com/it/u=3904400277,3071610820&fm=253&fmt=auto&app=138&f=JPEG?w=535&h=492 -->
                <!-- https://pic.quanjing.com/nd/i8/QJ8678058191.jpg@%21350h -->
              </template>
              <template v-slot:actions>
                <!-- <setting-outlined key="setting" @click="$alert('设置已保存')" />
                <edit-outlined key="edit" @click="$alert('已修改')" />
                <ellipsis-outlined key="ellipsis" @click="$alert('已展开')" /> -->
                <eye-outlined key="edit" @click="$alert('即将跳转页面')" />
                <download-outlined @click="$alert('下载完成')" />
                <share-alt-outlined @click="$alert('已分享')" />
                <!-- <check-outlined key="edit" @click="$alert('已应用')" />
                <delete-outlined key="edit" @click="$alert('已删除')" /> -->
                <!-- <span @click="$alert('已开启')">开</span>
                <span @click="$alert('已关闭')">关</span>
                <span @click="$alert('自动开关')">自动</span> -->
              </template>
              <a-card-meta
                :title="'合同HT0' + item"
                :description="'时间：2023/10/0' + (9 - item)"
              >
                <!-- <template v-slot:avatar>
                  <a-avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                </template> -->
              </a-card-meta>
            </a-card>
          </a-col>
        </a-row>
      </a-card>
      <div style="height: 10px"></div>
      <a-pagination :current="1" :total="50" show-less-items />
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>
<script lang="ts">
import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons-vue";
import { InboxOutlined } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { defineComponent, ref } from "vue";
import type { UploadChangeParam } from "ant-design-vue";
export default {
  components: {
    SettingOutlined,
    EditOutlined,
    EllipsisOutlined,
    InboxOutlined,
  },
  setup() {
    const handleChange = (info: UploadChangeParam) => {
      const status = info.file.status;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    };
    return {
      title: document.title,
      handleChange,
      fileList: ref([]),
      handleDrop: (e: DragEvent) => {
        console.log(e);
      },
    };
  },
};
</script>
