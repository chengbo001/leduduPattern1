<template>
  <div>
    <page-header
      :title="title"
      describe="可根据需要生成报告，包括温度监测报告、异常情况报告等，方便项目管理人员了解混凝土测温数据的整体情况"
    ></page-header>
    <div style="height: 10px"></div>
    <a-card>
      <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-item label="报告名称" required>
          <a-input v-model:value="modelRef.name" />
        </a-form-item>
        <a-form-item label="选择混凝土编号" required>
          <a-select
            v-model:value="modelRef.region"
            placeholder="please select your zone"
          >
            <a-select-option value="shanghai">HNT20231009003</a-select-option>
            <a-select-option value="beijing">HNT20231009004</a-select-option>
            <a-select-option value="beijing">HNT20231009004</a-select-option>
            <a-select-option value="beijing">HNT20231009004</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="报告类型" required>
          <a-checkbox-group v-model:value="modelRef.type">
            <a-checkbox value="1" name="type">详细</a-checkbox>
            <a-checkbox value="2" name="type">简洁</a-checkbox>
            <a-checkbox value="3" name="type">适中</a-checkbox>
          </a-checkbox-group>
        </a-form-item>
        <a-form-item
          class="error-infos"
          :wrapper-col="{ span: 14, offset: 4 }"
          v-bind="errorInfos"
        >
          <a-button type="primary" @click.prevent="onSubmit">生成</a-button>
          <a-button style="margin-left: 10px" @click="resetFields"
            >重置</a-button
          >
        </a-form-item>
      </a-form>
    </a-card>
    <div style="height: 10px"></div>
    <a-row>
      <a-col v-for="item of 4" :key="item" :span="6">
        <a-card>
          <a-list item-layout="horizontal" :data-source="reportData">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-list-item-meta description="已经于2023/10/09下载">
                  <template #title>
                    <a href="https://www.antdv.com/">{{ item.title }}</a>
                  </template>
                  <template #avatar>
                    <a-avatar src="https://joeschmoe.io/api/v1/random" />
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </template>
          </a-list>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRaw } from "vue";
import { Form } from "ant-design-vue";
const useForm = Form.useForm;
const reportData = [
  {
    title: "桥梁混凝土报告",
  },
  {
    title: "公路混凝土报告",
  },
  {
    title: "仓库混凝土报告",
  },
  {
    title: "住宅楼混凝土报告",
  },
];
export default defineComponent({
  setup() {
    const modelRef = reactive({
      name: "",
      region: undefined,
      type: [],
    });
    const rulesRef = reactive({
      name: [
        {
          required: true,
          message: "Please input name",
        },
      ],
      region: [
        {
          required: true,
          message: "Please select region",
        },
      ],
      type: [
        {
          required: true,
          message: "Please select type",
          type: "array",
        },
      ],
    });
    const { resetFields, validate, validateInfos } = useForm(
      modelRef,
      rulesRef,
      {
        onValidate: (...args) => console.log(...args),
      }
    );
    const onSubmit = () => {
      validate()
        .then(() => {
          console.log(toRaw(modelRef));
        })
        .catch((err) => {
          console.log("error", err);
        });
    };
    return {
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 14,
      },
      validateInfos,
      resetFields,
      modelRef,
      onSubmit,
      reportData,
      title: document.title,
    };
  },
});
</script>

<style></style>
