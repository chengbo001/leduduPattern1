<template>
  <div>
    <page-header
      :title="title"
      describe="新增表单用于登记新的需求，结果将呈现在列表中"
    ></page-header>
    <page-layout>
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
                <a-input v-model:value="form.name" />
              </a-form-item>
              <a-form-item label="规格" name="region">
                <a-select
                  v-model:value="form.region"
                  placeholder="please select"
                >
                  <a-select-option value="10"> 10 </a-select-option>
                  <a-select-option value="20"> 20 </a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item ref="amount" label="数量" name="amount">
                <a-input v-model:value="form.amount" />
              </a-form-item>
              <a-form-item label="时间" required name="date1">
                <a-date-picker
                  v-model:value="form.date1"
                  show-time
                  type="date"
                  placeholder="Pick a date"
                  style="width: 100%"
                />
              </a-form-item>
              <a-form-item label="危险" name="delivery">
                <a-switch v-model:checked="form.delivery" />
              </a-form-item>
              <a-form-item label="等级" name="type">
                <a-checkbox-group v-model:value="form.type">
                  <a-checkbox value="1" name="type"> 高 </a-checkbox>
                  <a-checkbox value="2" name="type"> 中 </a-checkbox>
                  <a-checkbox value="3" name="type"> 低 </a-checkbox>
                </a-checkbox-group>
              </a-form-item>
              <a-form-item label="用途" name="resource">
                <a-radio-group v-model:value="form.resource">
                  <a-radio value="1"> 用途1 </a-radio>
                  <a-radio value="2"> 用途2 </a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="描述" name="desc">
                <a-textarea v-model:value="form.desc" />
              </a-form-item>
              <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
                <a-button type="primary" @click="onSubmit"> 创建 </a-button>
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
            message: "Please input Activity name",
            trigger: "blur",
          },
          {
            min: 3,
            max: 5,
            message: "Length should be 3 to 5",
            trigger: "blur",
          },
        ],
        region: [
          {
            required: true,
            message: "Please select Activity zone",
            trigger: "change",
          },
        ],
        date1: [
          {
            required: true,
            message: "Please pick a date",
            trigger: "change",
            type: "object",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "Please select at least one activity type",
            trigger: "change",
          },
        ],
        resource: [
          {
            required: true,
            message: "Please select activity resource",
            trigger: "change",
          },
        ],
        desc: [
          {
            required: true,
            message: "Please input activity form",
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
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
  },
};
</script>
