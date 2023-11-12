<template>
  <!-- AI模型构建 -->
  <div>
    <page-layout>
      <page-header :title="title" describe=""></page-header>
      <div style="height: 10px"></div>
      <a-card>
        <a-row type="flex" justify="center">
          <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="22" :xxl="19">
            <a-form
              ref="ruleForm"
              :model="form"
              :rules="rules"
              :label-col="labelCol"
              :wrapper-col="wrapperCol"
            >
              <a-form-item ref="name" label="名称" name="name">
                <a-input />
              </a-form-item>
              <a-form-item label="学习率" name="region">
                <a-input></a-input>
              </a-form-item>
              <a-form-item ref="amount" label="正则化" name="amount">
                <a-input />
              </a-form-item>
              <a-form-item label="优化器" required name="date1">
                <a-input></a-input>
              </a-form-item>
              <a-form-item label="批次大小" name="delivery">
                <a-input />
              </a-form-item>
              <a-form-item label="网络结构" name="type">
                <a-input />
              </a-form-item>
              <a-form-item label="损失函数" name="resource">
                <a-input />
              </a-form-item>
              <a-form-item label="度量指标" name="desc">
                <a-textarea />
              </a-form-item>
              <a-form-item label="训练轮次" name="desc">
                <a-textarea />
              </a-form-item>
              <a-form-item label="模型架构" name="desc">
                <a-radio-group>
                  <a-radio value="1"> 全连接神经网络 </a-radio>
                  <a-radio value="2"> 卷积神经网络 </a-radio>
                  <a-radio value="3"> 循环神经网络 </a-radio>
                  <a-radio value="4"> 其他神经网络 </a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
                <a-button type="primary" @click="onSubmit"> 创建 </a-button>
                <a-button style="margin-left: 10px" @click="resetForm">
                  重置
                </a-button>
              </a-form-item>
              <!-- <a-select placeholder="please select">
                <a-select-option value="10"> 10 </a-select-option>
                <a-select-option value="20"> 20 </a-select-option>
              </a-select> -->
              <!-- <a-date-picker
                show-time
                type="date"
                placeholder="Pick a date"
                style="width: 100%"
              /> -->
              <!-- <a-switch v-model:checked="form.delivery" /> -->
              <!-- <a-checkbox-group v-model:value="">
                <a-checkbox value="1" name="type"> 高 </a-checkbox>
                <a-checkbox value="2" name="type"> 中 </a-checkbox>
                <a-checkbox value="3" name="type"> 低 </a-checkbox>
              </a-checkbox-group> -->
              <!-- <a-radio-group v-model:value="">
                <a-radio value="1"> 用途1 </a-radio>
                <a-radio value="2"> 用途2 </a-radio>
              </a-radio-group> -->
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
      other: "",
      form: {
        name: "",
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: "",
        content: "",
        desc: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please input",
            trigger: "blur",
          },
          {
            min: 3,
            max: 5,
            message: "Please input",
            trigger: "blur",
          },
        ],
        region: [
          {
            required: true,
            message: "Please input",
            trigger: "change",
          },
        ],
        date1: [
          {
            required: true,
            message: "Please input",
            trigger: "change",
            type: "object",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "Please input",
            trigger: "change",
          },
        ],
        resource: [
          {
            required: true,
            message: "Please input",
            trigger: "change",
          },
        ],
        desc: [
          {
            required: true,
            message: "Please input",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm
        .validate()
        .then(() => {
          console.log("values", this.form);
        })
        .catch((error) => {
          console.log("error", error);
        });
      this.$alert("创建成功");
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
      this.$alert("重置成功");
    },
  },
};
</script>
