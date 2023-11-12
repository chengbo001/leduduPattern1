<template>
  <div id="table-dome">
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <a-input-search
        placeholder="请输入"
        style="width: 400px"
        @search="$alert('正在搜索中，请稍后')"
      />
      <a-button @click="visible = true">创建</a-button>
      <div style="height: 10px"></div>
      <a-row :gutter="[10, 10]">
        <a-col :span="24">
          <a-card v-for="(item, index) of data" :key="index">
            <a-descriptions
              :title="item.title + ' ' + item.bianhao"
              bordered
              :column="5"
            >
              <!-- <template #extra>
                <a-space>
                  <a-button
                    type="primary"
                    size="small"
                    @click="$alert('编辑成功已保存')"
                  >
                    编辑
                  </a-button>
                  <a-button size="small" @click="$alert('删除成功')"
                    >删除</a-button
                  >
                </a-space>
              </template> -->
              <a-descriptions-item
                :label="item.field1.key"
                v-if="item.field1.show"
                :span="2"
              >
                <a-badge status="success" :text="item.field1.value" />
              </a-descriptions-item>
              <a-descriptions-item
                :label="item.field2.key"
                v-if="item.field2.show"
                :span="3"
              >
                <a-badge status="processing" :text="item.field2.value" />
                <!-- TODO 使用 -->
                <!-- <a-badge-ribbon text="Hippies" color="cyan"></a-badge-ribbon> -->
                <!-- pink、red、green、purple、volcano、magenta -->
              </a-descriptions-item>
              <a-descriptions-item
                :label="item.field3.key"
                v-if="item.field3.show"
                :span="2"
              >
                <a-badge status="error" :text="item.field3.value" />
                <!-- <a-progress :percent="80" size="small" style="width: 160px" /> -->
              </a-descriptions-item>
              <a-descriptions-item
                :label="item.field4.key"
                v-if="item.field4.show"
                :span="3"
              >
                <a-badge status="purple" :text="item.field4.value" />
              </a-descriptions-item>
              <a-descriptions-item
                :label="item.field5.key"
                v-if="item.field5.show"
                :span="2"
              >
                <a-badge status="warning" :text="item.field5.value" />
              </a-descriptions-item>
              <a-descriptions-item
                :label="item.field6.key"
                v-if="item.field6.show"
                :span="3"
              >
                <a-badge color="gold" :text="item.field6.value" />
              </a-descriptions-item>
            </a-descriptions>
          </a-card>
        </a-col>
        <!-- <a-col :span="6">
          <a-card>
            <a-form>
              <a-form-item v-for="item of formLabel" :key="item" :label="item">
                <a-input />
              </a-form-item>
              <a-button type="primary" style="display: block; margin: 0 auto">
                提交
              </a-button>
            </a-form>
          </a-card>
        </a-col> -->
      </a-row>
      <div style="height: 10px"></div>
      <a-pagination :current="1" :total="50" show-less-items />
    </page-layout>
    <page-footer></page-footer>
    <a-modal v-model:visible="visible" title="新增" @ok="$alert('提交已保存')">
      <a-form>
        <a-form>
          <a-form-item v-for="item of formLabel" :key="item" :label="item">
            <a-input />
          </a-form-item>
        </a-form>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
import Mock from "better-mock";
import { SettingOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref, watch } from "vue";

const data = Mock.mock({
  "data|3": [
    {
      "key|+1": 1,
      "title|+1": ["物料", "物料", "物料"],
      bianhao() {
        return "WL0" + this.key;
      },
      field1: {
        "key|+1": "生产商",
        "value|+1": ["xx公司", "xx公司"],
        show: true,
      },
      field2: {
        "key|+1": "今日入库",
        "value|+1": ["520", "570"], //
        show: true,
      },
      field3: {
        "key|+1": "今日出库",
        "value|+1": ["300", "400"],
        show: true,
      },
      field4: {
        "key|+1": "库存",
        "value|+1": ["502", "553"],
        show: true,
      },
      field5: {
        "key|+1": "库存位置",
        "value|+1": ["394位", "843位"],
        show: true,
      },
      field6: {
        "key|+1": "时间",
        value:
          new Date().toLocaleDateString() +
          " " +
          new Date().toLocaleTimeString(),
        show: false,
      },
    },
  ],
}).data;

const formLabel = ["名称"].concat(
  Object.keys(data[0])
    .filter((item) => {
      return data[0][item].serail == undefined && data[0][item].show == true;
    })
    .map((item) => data[0][item].key)
);

export default defineComponent({
  components: {
    SettingOutlined,
  },
  setup() {
    const visible = ref(false);
    const title = document.title;
    return {
      title,
      data,
      formLabel,
      visible,
    };
  },
});
</script>
