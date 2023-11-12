<template>
  <div>
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <a-card>
        <a-row type="flex" justify="center">
          <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="22" :xxl="19">
            <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
              <a-form-item
                v-for="(item, index) of formData"
                :label="item.label"
              >
                <!-- <a-radio-group
                  value="a"
                  button-style="solid"
                  v-if="item.label == '类型'"
                >
                  <a-radio-button value="a">技术</a-radio-button>
                  <a-radio-button value="b">方案</a-radio-button>
                </a-radio-group> -->
                <!-- <a-upload v-else-if="item.label == '身份证明'">
                  <a-button>
                    <upload-outlined></upload-outlined>
                    点击上传
                  </a-button>
                </a-upload> -->
                <a-input />
                <!-- <div>{{ item.label }}</div> -->
              </a-form-item>
              <a-form-item :wrapper-col="{ span: 14, offset: 5 }">
                <a-button type="primary" @click="$alert('已提交')">
                  提交
                </a-button>
                <a-button style="margin-left: 10px" @click="$alert('已重置')">
                  重置
                </a-button>
              </a-form-item>
            </a-form>
          </a-col>
        </a-row>
      </a-card>
      <div style="height: 10px"></div>
      <a-card>
        <a-row :gutter="[140, 10]">
          <a-col v-for="item of 2" :key="item" :span="12">
            <a-list item-layout="horizontal" :data-source="data">
              <template #renderItem="{ item }">
                <a-list-item>
                  <a-list-item-meta :description="item.desc">
                    <template #title>
                      <a>{{ item.title }}</a>
                    </template>
                    <template #avatar>
                      <a-avatar
                        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.doubanio.com%2Fview%2Fgroup_topic%2Fl%2Fpublic%2Fp515017570.jpg&refer=http%3A%2F%2Fimg1.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1699709712&t=88cf44efbe2cd7e1a66245bd90d9c20c"
                      />
                    </template>
                  </a-list-item-meta>
                  <template #actions>
                    <check-circle-two-tone />
                  </template>
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
import { h, render } from "vue";
import { Input } from "ant-design-vue";
const formData = [
  {
    label: "姓名",
    html: ``,
    show: true,
  },
  {
    label: "编号",
    html: `<a-input></a-input>`,
    show: true,
  },
  {
    label: "主诉",
    html: `<a-input></a-input>`,
    show: true,
  },
  {
    label: "现病史",
    html: `<a-input></a-input>`,
    show: true,
  },
  {
    label: "既往病史",
    html: `<a-input></a-input>`,
    show: true,
  },
];
const data = Mock.mock({
  "data|4": [
    {
      "key|+1": 1,
      title() {
        return "病例BL0" + this.key;
      },
      desc() {
        return this.title + "上传完成";
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
      formData,
    };
  },
};
</script>
