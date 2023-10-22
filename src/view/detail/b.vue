<template>
  <!-- 申请信息显示 -->
  <div>
    <page-layout>
      <a-card>
        <a-form>
          <a-row>
            <a-col :span="12" v-for="(item, index) of labelData1" :key="index">
              <a-form-item :label="item.key" style="width: 90%" required>
                <a-input :value="item.value"></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="12" v-for="(item, index) of labelData2" :key="index">
              <a-form-item :label="item.key" style="width: 90%" required>
                <a-image :width="200" :src="item.value" />
              </a-form-item>
            </a-col>
          </a-row>
          <a-form-item :wrapper-col="{ span: 12, offset: 11 }">
            <a-space>
              <a-button type="primary" html-type="submit">通过</a-button>
              <a-button html-type="submit">驳回</a-button>
            </a-space>
          </a-form-item>
        </a-form>
      </a-card>
    </page-layout>
  </div>
</template>

<script>
export default {
  setup() {
    const labelData1 = [
      {
        key: "风电厂商",
        value: "通用电力",
      },
      {
        key: "电场名称",
        value: "塞上风力电场",
      },
      {
        key: "地形地貌",
        value: "山丘地广",
      },
      {
        key: "地质条件",
        value: "地质坚硬",
      },
      {
        key: "气候条件",
        value: "四季常有风",
      },
      {
        key: "交通运输",
        value: "交通设施便利，快速通车",
      },
      {
        key: "周边环境",
        value: "地广人稀，地势开阔",
      },
      {
        key: "风电机组类型",
        value: "FDJZ05",
      },
    ];
    const labelData2 = [
      {
        key: "风电场布局设计",
        value:
          "https://www.susong.gov.cn/group2/M00/03/57/CtG0ZF9Z3eWAaMDxAAG6gbnx5u4750.jpg",
      },
      {
        key: "输电线路设计",
        value:
          "https://img1.baidu.com/it/u=2183681119,1787781248&fm=253&fmt=auto&app=138&f=PNG?w=1292&h=500",
      },
      {
        key: "道路规划",
        value:
          "https://cdn.keyland.com.cn/image/uploadimage/2017/11/04/y1104231935687.jpg",
      },
      {
        key: "施工计划",
        value:
          "https://file1.renrendoc.com/fileroot_temp2/2020-11/9/08be88bf-10e0-463c-b630-b15c492f76d9/08be88bf-10e0-463c-b630-b15c492f76d91.gif",
      },
      {
        key: "环境保护措施",
        value:
          "https://file2.renrendoc.com/fileroot_temp3/2021-6/10/1da7b27e-5aa7-41de-9840-72d31baa7adf/1da7b27e-5aa7-41de-9840-72d31baa7adf1.gif",
      },
      {
        key: "经济效益分析",
        value:
          "https://file1.renrendoc.com/fileroot_temp2/2020-11/12/f00cb996-e583-41e2-8637-139dcda456be/f00cb996-e583-41e2-8637-139dcda456be1.gif",
      },
    ];
    return {
      labelData1,
      labelData2,
    };
  },
};
</script>

<style></style>
