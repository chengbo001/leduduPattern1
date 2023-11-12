<template>
  <div>
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <a-input-search
        placeholder="请输入"
        style="width: 400px"
        @search="$alert('正在搜索，请稍后')"
      />
      <div style="height: 10px"></div>
      <a-card>
        <a-row :gutter="[15, 15]">
          <a-col :span="6" v-for="(item, index) of videoList" :key="index">
            <a-card hoverable>
              <template v-slot:cover>
                <img
                  alt="example"
                  src="https://img0.baidu.com/it/u=1073614533,2990989192&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500"
                />
              </template>
              <template v-slot:actions>
                <eye-outlined key="edit" @click="$alert('即将跳转页面')" />
                <download-outlined @click="$alert('保存完成')" />
                <!-- TODO 自定义函数 TS类型解决报错 -->
                <share-alt-outlined @click="$alert('已分享')" />
              </template>
              <a-card-meta
                :title="item.title + '监控JK0' + item.key"
                description="时间：2023/10/24 12:00:08"
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
import Mock from "better-mock";
export default {
  components: {
    SettingOutlined,
    EditOutlined,
    EllipsisOutlined,
    InboxOutlined,
  },
  setup() {
    const videoList = Mock.mock({
      "data|8": [
        {
          "key|+1": 1,
          "title|+1": ["易燃易爆物质", "有毒物质", "高温高压", "机械伤害"],
          "desc|+1": ["", ""],
        },
      ],
    }).data;
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
      videoList,
      handleChange,
      fileList: ref([]),
      handleDrop: (e: DragEvent) => {
        console.log(e);
      },
    };
  },
};
</script>
