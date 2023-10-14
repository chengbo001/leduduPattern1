<template>
  <div>
    <page-header
      :title="title"
      describe="评论与反馈用于登记您发现的问题，结果将反馈给我们工作人员"
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
              <a-form-item ref="name" label="问题" name="name">
                <a-input v-model:value="form.name" />
              </a-form-item>
              <a-form-item label="优先级" name="region">
                <a-select
                  v-model:value="form.region"
                  placeholder="please select"
                >
                  <a-select-option value="1"> 1 </a-select-option>
                  <a-select-option value="2"> 2 </a-select-option>
                  <a-select-option value="3"> 3 </a-select-option>
                  <a-select-option value="4"> 4 </a-select-option>
                  <a-select-option value="5"> 5 </a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item label="意见" name="desc">
                <a-textarea v-model:value="form.desc" />
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
      <a-card title="历史记录" style="margin-top: 10px">
        <a-list item-layout="horizontal" :data-source="data">
          <template #renderItem="{ item }">
            <a-list-item>
              <a-list-item-meta :description="item.info">
                <template #title>
                  <a href="https://www.antdv.com/">{{ item.title }}</a>
                </template>
                <template #avatar>
                  <a-avatar :src="item.avatar" />
                </template>
              </a-list-item-meta>
              <template v-slot:actions>
                <a>删除</a>
              </template>
              <div>查看详情</div>
            </a-list-item>
          </template>
        </a-list>
      </a-card>
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>
<script>
import Mock from "better-mock";

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
  setup() {
    const data = Mock.mock({
      "data|9": [
        {
          avatar:
            "https://portrait.gitee.com/uploads/avatars/user/2813/8441097_shaynas_1610801433.png!avatar200",
          title: "xx街道出现积水",
          info: "xx街道储存已满，出现积水，请及时打开排水系统",
        },
      ],
    }).data;

    return {
      data,
      title: document.title,
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
