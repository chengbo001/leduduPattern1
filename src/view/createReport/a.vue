<template>
  <div>
    <page-layout>
      <page-header :title="title" describe=""></page-header>
      <div style="height: 10px"></div>
      <a-card>
        <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-item label="报告名称" required>
            <a-input v-model:value="modelRef.name" />
          </a-form-item>
          <!-- <a-form-item label="样品编号" required>
            <a-input v-model:value="modelRef.bianhao" />
          </a-form-item> -->
          <a-form-item label="选择分类" required>
            <a-select v-model:value="modelRef.region" placeholder="可下拉选择">
              <a-select-option value="shanghai">指导性</a-select-option>
              <a-select-option value="beijing">参考性</a-select-option>
              <a-select-option value="beijing">学术性</a-select-option>
              <!-- <a-select-option value="beijing">医学性</a-select-option> -->
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
          >
            <a-button type="primary" @click.prevent="$alert('已生成并下载完成')"
              >生成</a-button
            >
            <a-button style="margin-left: 10px" @click="$alert('已重置')"
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
                  <a-list-item-meta :description="item.desc">
                    <template #title>
                      <a href="javascript:;">{{ item.title + "报告" }}</a>
                    </template>
                    <template #avatar>
                      <a-avatar>
                        <template #icon><UserOutlined /></template>
                      </a-avatar>
                    </template>
                  </a-list-item-meta>
                </a-list-item>
              </template>
            </a-list>
          </a-card>
        </a-col>
      </a-row>
    </page-layout>
  </div>
</template>

<script>
import { defineComponent, reactive, toRaw } from "vue";
import { Form } from "ant-design-vue";
import Mock from "better-mock";
const useForm = Form.useForm;
const reportData = Mock.mock({
  "data|4": [
    {
      "title|+1": ["石油化工生产", "石油化工生产"],
      "desc|+1": [
        "已经于2023/10/09下载",
        "已经于2023/10/10下载",
        "已经于2023/10/11下载",
        "已经于2023/10/12下载",
      ],
    },
  ],
}).data;
export default defineComponent({
  setup() {
    const modelRef = reactive({
      name: "",
      region: undefined,
      bianhao: undefined,
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
      reportData,
      title: document.title,
    };
  },
});
</script>

<style></style>
