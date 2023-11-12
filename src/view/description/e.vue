<template>
  <div id="table-dome">
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <a-space>
        <a-input-search
          placeholder="请输入"
          style="width: 800px"
          @search="$alert('正在搜索中，请稍后')"
        />
        <!-- <a-button>开始校验</a-button> -->
      </a-space>
      <div style="height: 10px"></div>
      <a-row :gutter="[10, 10]">
        <a-col :span="6">
          <a-card title="项目">
            <a-list
              class="demo-loadmore-list"
              item-layout="horizontal"
              :data-source="listData"
            >
              <template #loadMore>
                <div
                  :style="{
                    textAlign: 'center',
                    marginTop: '12px',
                    height: '32px',
                    lineHeight: '32px',
                  }"
                >
                  <a-button @click="$alert('加载中，请稍后')">
                    加载更多
                  </a-button>
                </div>
              </template>
              <template #renderItem="{ item, index }">
                <a-list-item :class="{ active: index == 0, hovercolor: true }">
                  <template #actions>
                    <right-outlined />
                  </template>
                  <a-skeleton avatar :title="false" :loading="false" active>
                    <a-list-item-meta :description="item.desc">
                      <template #title>
                        <a style="display: block; text-indent: 12px">
                          {{ item.title }}
                        </a>
                      </template>
                      <!-- <template #avatar>
                        <a-avatar :src="1" />
                      </template> -->
                    </a-list-item-meta>
                    <!-- <div>{{ item.time }}</div> -->
                  </a-skeleton>
                </a-list-item>
              </template>
            </a-list>
          </a-card>
        </a-col>
        <a-col :span="18">
          <a-card class="card" v-for="(item, index) of data" :key="index">
            <a-card :title="item.field1.key + ' ' + item.field1.value">
              <a-card-grid
                v-for="(item2, index2) of itemList"
                :key="index2"
                style="width: 25%; text-align: center"
              >
                <div>
                  {{ item[item2].key + ":" }}
                  <a-badge
                    style="margin-left: 20px"
                    status="processing"
                    :text="item[item2].value"
                  />
                </div>
              </a-card-grid>
            </a-card>
          </a-card>
          <div style="height: 10px"></div>
          <a-pagination :current="1" :total="50" show-less-items />
        </a-col>
        <!-- <a-col :span="6">
          <a-card>
            <a-form>
              <a-form-item
                v-for="item of ['名称', '描述', '目标', '方法', '预期成果']"
                :key="item"
                :label="item"
              >
                <a-input />
              </a-form-item>
              <a-button type="primary" style="display: block; margin: 0 auto">
                提交
              </a-button>
            </a-form>
          </a-card>
        </a-col> -->
      </a-row>
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>
<script>
import Mock from "better-mock";
import {
  SettingOutlined,
  TrademarkCircleOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, ref, watch } from "vue";

const data = Mock.mock({
  "data|5": [
    {
      field1: {
        "serail|+1": 1,
        "key|+1": ["结构工程", "装饰工程", "安装工程"],
        value: function () {
          return "YW0" + this.serail;
        },
      },
      field2: {
        "key|1": "计量单位",
        "value|+1": ["体积", "面积", "长度"],
        show: true,
      },
      field3: {
        "key|1": "工程量",
        "value|+1": ["3月", "2月", "4月"],
        show: true,
      },
      field4: {
        "key|1": "单价",
        "value|+1": ["500", "600", "550"],
        show: true,
      },
      field5: {
        "key|1": "特征",
        "value|+1": ["技术特殊", "技术特殊", "技术特殊"],
        show: true,
      },
      field6: {
        "key|1": "发射间隔",
        value:
          // new Date().toLocaleDateString() +
          // " " +
          new Date().toLocaleTimeString(),
        show: false,
      },
    },
  ],
}).data;

const listData = Mock.mock({
  "data|12": [
    {
      "id|+1": 1,
      "title|+1": ["天虹项目", "恒通项目"],
      "desc|+1": ["", ""],
      "time|+1": ["11/9", "11/10", "11/11"],
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

const itemList = Object.keys(data[0]).filter((item) => {
  return data[0][item].serail == undefined && data[0][item].show == true;
});

export default defineComponent({
  components: {
    SettingOutlined,
  },
  setup() {
    const title = document.title;
    return {
      title,
      data,
      listData,
      formLabel,
      itemList,
    };
  },
});
</script>
<style lang="scss" scoped>
.card {
  margin-bottom: 10px;
}
.active {
  background-color: #f0faff;
}
.hovercolor:hover {
  background-color: #f0faff;
}
</style>
