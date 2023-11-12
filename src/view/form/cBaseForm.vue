<template>
  <div>
    <page-header :title="title" describe=""></page-header>
    <page-layout>
      <a-card>
        <a-row type="flex" justify="center">
          <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="22" :xxl="19">
            <a-form
              ref="ruleForm"
              :label-col="labelCol"
              :wrapper-col="wrapperCol"
            >
              <a-form-item ref="name" label="年龄" name="name">
                <a-input />
              </a-form-item>
              <a-form-item ref="name" label="性别" name="name">
                <a-input />
              </a-form-item>
              <a-form-item ref="name" label="身高" name="name">
                <a-input />
              </a-form-item>
              <a-form-item ref="amount" label="体重" name="amount">
                <a-input />
              </a-form-item>
              <a-form-item ref="amount" label="面色" name="amount">
                <a-input />
              </a-form-item>
              <a-form-item ref="amount" label="唇色" name="amount">
                <a-input />
              </a-form-item>
              <a-form-item ref="amount" label="皮肤" name="amount">
                <a-input />
              </a-form-item>
              <a-form-item ref="amount" label="毛发" name="amount">
                <a-input />
              </a-form-item>
              <a-form-item ref="amount" label="眼睛" name="amount">
                <a-input />
              </a-form-item>
              <a-form-item ref="amount" label="舌象" name="amount">
                <a-input />
              </a-form-item>
              <a-form-item label="生活习惯" name="desc">
                <a-textarea />
              </a-form-item>
              <a-form-item label="心理状态" name="desc">
                <a-textarea />
              </a-form-item>
              <a-form-item label="当前症状" name="desc">
                <a-textarea />
              </a-form-item>
              <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
                <a-button type="primary" @click="onSubmit"> 提交 </a-button>
                <a-button style="margin-left: 10px" @click="resetForm">
                  重置
                </a-button>
              </a-form-item>
            </a-form>
          </a-col>
        </a-row>
      </a-card>
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: document.title,
      labelCol: { xs: 4, sm: 3, md: 3, lg: 3, xl: 2, xxl: 3 },
      wrapperCol: { xs: 20, sm: 21, md: 21, lg: 21, xl: 20, xxl: 17 },
    };
  },
  methods: {
    onSubmit() {
      this.$alert("开始测试");
    },
    resetForm() {
      this.$alert("已重置");
    },
  },
};
</script>
