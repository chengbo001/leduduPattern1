<template>
  <div id="box-list">
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <!-- <a-space>
        <a-input-search
          placeholder="请输入"
          style="width: 400px"
          @search="$alert('正在搜索，请稍后')"
        />
        <a-button type="primary" @click="showModal">新增</a-button>
      </a-space>
      <div style="height: 10px"></div> -->
      <a-row :wrap="true" :gutter="[10, 10]">
        <a-col v-for="(item, index) of data" :key="item" :span="6">
          <a-badge-ribbon text="已作答" :color="badgeColor[index]">
            <a-card :title="item.title">
              <!-- <template #extra>
              <a-space>
                <a @click="$alert('修改完成，已保存')">修改</a>
                <a @click="$alert('已删除')">删除</a>
              </a-space>
            </template> -->
              <a-textarea
                :value="item.field1"
                style="height: 400px"
              ></a-textarea>
            </a-card>
          </a-badge-ribbon>
        </a-col>
      </a-row>
      <!-- <div style="height: 10px"></div>
      <a-pagination :current="1" :total="50" show-less-items /> -->
      <div style="height: 10px"></div>
      <a-col :span="24">
        <a-card>
          <div style="display: flex; flex-direction: column">
            <a-button @click="$alert('提交成功')">提交</a-button>
          </div>
        </a-card>
      </a-col>
    </page-layout>
    <page-footer></page-footer>
    <a-modal v-model:visible="visible" title="新增" @ok="$alert('提交已保存')">
      <a-form>
        <a-form-item label="设备名称">
          <a-input></a-input>
        </a-form-item>
        <a-form-item label="位置">
          <a-input></a-input>
        </a-form-item>
        <a-form-item label="生产商">
          <a-input></a-input>
        </a-form-item>
        <a-form-item label="关联数据">
          <a-input></a-input>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
import Mock from "better-mock";
import { ref } from "vue";
const data = Mock.mock({
  "data|4": [
    {
      "key|+1": 1,
      // title() {
      //   return "设备SB049" + this.key;
      // },
      "title|+1": ["望诊", "问诊", "闻诊", "切诊"],
      "field1|+1": [
        "观察患者的面色、舌苔、表情等，以了解患者的健康状况。例如，面色红润说明气血充足，而面色苍白可能是贫血的迹象；舌苔白厚可能是脾胃虚寒，舌苔黄腻可能是湿热内蕴等。",
        "听患者的呼吸、咳嗽、语音等，以了解患者的病情。例如，呼吸急促可能是呼吸系统疾病，咳嗽有痰可能是肺部感染，语声低微可能是身体虚弱等。",
        "通过询问患者的症状、病史、生活习惯等，了解患者的病情。例如，询问患者关于疼痛、饮食、睡眠、大小便等问题，了解患者的身体状况。",
        "通过触摸患者的脉象、腹部、皮肤等，了解患者的病情。例如，脉象沉迟可能是阳虚，脉象洪数可能是热证，腹部胀满可能是胃肠道疾病，皮肤湿润可能是湿证等。",
      ],
      // field2: "生产商：xx科技",
      // field3: "状态：正常",
      // field4: "数据上传中",
      // field5: "温度：30°C",
      // field6: "压力：50",
      // field7: "上次检测：一周",
      // 写个函数 自动显示 filed字段
    },
  ],
}).data;

const descList = Object.keys(data[0]).filter((item) => item.includes("field"));

const badgeColor = [
  "pink",
  "red",
  "yellow",
  "orange",
  "cyan",
  "green",
  "blue",
  "purple",
  "geekblue",
  "magenta",
  "volcano",
  "gold",
  "lime",
];

export default {
  setup() {
    const visible = ref(false);
    const showModal = () => {
      visible.value = true;
    };
    return {
      title: document.title,
      data: data,
      visible,
      showModal,
      descList,
      badgeColor,
    };
  },
};
</script>
