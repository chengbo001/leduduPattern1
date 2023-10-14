<template>
  <div>
    <page-layout>
      <page-header
        :title="title"
        describe="评估一个人的心血管耐力、肌肉力量、柔韧性、平衡性、协调性等方面的状况，以及是否存在运动风险。"
      ></page-header>
    </page-layout>
    <page-layout>
      <a-card>
        <a-row type="flex" justify="center">
          <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="22" :xxl="19">
            <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
              <a-form-item label="姓名">
                <a-input />
              </a-form-item>
              <a-form-item label="测试小组">
                <a-select style="width: 100%" placeholder="可选择">
                  <a-select-option :value="1">测试小组1</a-select-option>
                  <a-select-option :value="1">测试小组2</a-select-option>
                  <a-select-option :value="1">测试小组3</a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item label="心血管耐力">
                <a-input></a-input>
              </a-form-item>
              <a-form-item label="肌肉力量">
                <a-input-number :min="1" :max="10" />
                <span class="ant-form-text">公斤</span>
              </a-form-item>
              <a-form-item label="柔韧性">
                <a-input></a-input>
              </a-form-item>
              <a-form-item label="协调性">
                <a-input></a-input>
              </a-form-item>
              <a-form-item label="平衡性">
                <a-input></a-input>
              </a-form-item>
              <a-form-item label="备注">
                <a-textarea />
              </a-form-item>
              <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
                <a-button type="primary"> 提交 </a-button>
                <a-button style="margin-left: 10px"> 重置 </a-button>
              </a-form-item>
            </a-form>
          </a-col>
        </a-row>
      </a-card>
      <div style="height: 10px"></div>
      <a-card>
        <a-row>
          <a-col v-for="item of 2" :key="item" :span="12">
            <a-list item-layout="horizontal" :data-source="data">
              <template #renderItem="{ item }">
                <a-list-item>
                  <a-list-item-meta :description="item.desc">
                    <template #title>
                      <a href="https://www.antdv.com/">{{ item.title }}</a>
                    </template>
                    <template #avatar>
                      <a-avatar
                        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.doubanio.com%2Fview%2Fgroup_topic%2Fl%2Fpublic%2Fp515017570.jpg&refer=http%3A%2F%2Fimg1.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1699709712&t=88cf44efbe2cd7e1a66245bd90d9c20c"
                      />
                    </template>
                  </a-list-item-meta>
                </a-list-item>
              </template>
            </a-list>
          </a-col>
        </a-row>
      </a-card>
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>
<script>
import Mock from "better-mock";
const data = Mock.mock({
  "data|4": [
    {
      "key|+1": 1,
      title() {
        return "运动测试单YDCSD047" + this.key;
      },
      desc() {
        return this.title + "填写完成，已上传至系统。";
      },
    },
  ],
}).data;
export default {
  data() {
    return {
      title: document.title,
      data,
      labelCol: { xs: 4, sm: 3, md: 3, lg: 3, xl: 2, xxl: 3 },
      wrapperCol: { xs: 20, sm: 21, md: 21, lg: 21, xl: 20, xxl: 17 },
    };
  },
};
</script>
