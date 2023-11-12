<template>
  <div id="box-list">
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <a-card>
        <a-upload-dragger :multiple="true">
          <p class="ant-upload-drag-icon">
            <inbox-outlined></inbox-outlined>
          </p>
          <p class="ant-upload-text">点击或拖动文件至此上传资源</p>
          <p class="ant-upload-hint">支持单个多个文件上传</p>
        </a-upload-dragger>
      </a-card>
      <div style="height: 10px"></div>
      <a-input-search
        placeholder="请输入"
        style="width: 400px"
        @search="$alert('正在搜索中，请稍后')"
      />
      <div style="height: 10px"></div>
      <a-list :grid="{ gutter: 16, column: 4 }" :data-source="data">
        <template #renderItem="{ item }">
          <a-list-item>
            <a-card :title="item.title + '算法 ' + item.serial">
              <div style="text-indent: 30px">{{ item.desc }}</div>
              <br />
              效果：<a-rate :value="item.rate" />
              <br />
              <br />
              <a-space>
                <a-button type="primary" size="small" @click="$alert('已启动')">
                  启动
                </a-button>
                <a-button type="dashed" size="small" @click="$alert('已停止')">
                  停止
                </a-button>
                <a-button danger size="small" @click="$alert('已删除')">
                  删除
                </a-button>
              </a-space>
            </a-card>
          </a-list-item>
        </template>
      </a-list>
      <a-pagination :current="1" :total="50" show-less-items />
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>
<script>
import Mock from "better-mock";
const courseData = Mock.mock({
  "data|8": [
    {
      "key|+1": 1,
      "title|+1": ["贝叶斯分类器", "支持向量机", "决策树", "卷积神经网络"],
      "serial|1": function () {
        return "SF058" + this.key;
      },
      "desc|+1": [
        "利用机器学习、深度学习等算法对心电图数据进行综合分析，定位室性早搏。",
        "利用机器学习、深度学习等算法对心电图数据进行综合分析，定位室性早搏。",
        "利用机器学习、深度学习等算法对心电图数据进行综合分析，定位室性早搏。",
      ],
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
