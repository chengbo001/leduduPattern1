<template>
  <div id="box-list">
    <page-layout>
      <page-header
        :title="title"
        describe="可以将主讲话者的声音与第三方声音分离，从而在实时对话中消除不需要的声音。"
      ></page-header>
    </page-layout>
    <page-layout>
      <!-- <a-card>
        <a-upload-dragger :multiple="true">
          <p class="ant-upload-drag-icon">
            <inbox-outlined></inbox-outlined>
          </p>
          <p class="ant-upload-text">点击或拖动文件至此上传资源</p>
          <p class="ant-upload-hint">支持单个多个文件上传</p>
        </a-upload-dragger>
      </a-card>
      <div style="height: 10px"></div> -->
      <a-list :grid="{ gutter: 16, column: 4 }" :data-source="data">
        <template #renderItem="{ item }">
          <a-list-item>
            <a-card :title="item.title + ' ' + item.serial">
              <div>{{ item.desc }}</div>
              <br />
              效果：<a-rate :value="item.rate" />
              <br />
              <br />
              <a-space>
                <a-button type="primary" size="small">启动</a-button>
                <a-button type="dashed" size="small">停止</a-button>
                <a-button danger size="small">删除</a-button>
              </a-space>
            </a-card>
          </a-list-item>
        </template>
      </a-list>
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>
<script>
import Mock from "better-mock";
const courseData = Mock.mock({
  "data|12": [
    {
      "key|+1": 1,
      "title|+1": ["电话会议", "在线课程", "语音识别", "其他通话"],
      "serial|1": function () {
        return "YYSB036" + this.key;
      },
      "desc|+1": ["声音分离中...", "声音分离中...", "声音分离中..."],
      "rate|3-5": 1,
    },
    // "@CNAME"
  ],
});

export default {
  setup() {
    return {
      title: document.title,
      data: courseData.data,
    };
  },
};
</script>
