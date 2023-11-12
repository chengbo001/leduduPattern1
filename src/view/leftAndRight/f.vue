<template>
  <div>
    <!-- AI模型训练 -->
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <a-row :gutter="[10, 10]">
        <a-col :span="6">
          <a-card>
            <a-input-search
              placeholder="请输入"
              @search="$alert('正在搜索，请稍后')"
            />
            <div style="height: 10px"></div>
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
                <a-list-item :class="{ active: index == 0 }">
                  <template #actions>
                    <!-- <a key="list-loadmore-edit">edit</a>
                    <a key="list-loadmore-more">more</a> -->
                    <right-outlined />
                  </template>
                  <a-skeleton avatar :title="false" :loading="false" active>
                    <a-list-item-meta description="">
                      <template #title>
                        <a style="display: block; text-indent: 12px">
                          {{ item }}
                        </a>
                      </template>
                      <!-- <template #avatar>
                        <a-avatar :src="1" />
                      </template> -->
                    </a-list-item-meta>
                    <!-- <div>查看详情</div> -->
                  </a-skeleton>
                </a-list-item>
              </template>
            </a-list>
          </a-card>
        </a-col>
        <a-col :span="12">
          <a-card class="card" title="" :bordered="false">
            <a-image
              src="https://5b0988e595225.cdn.sohucs.com/images/20200429/0e8cb939445c405aa74bc95c4b1b88d7.jpeg"
            ></a-image>
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card>
            <div style="display: flex; flex-direction: column">
              <a-button
                v-for="(item, index) of operateList"
                :key="index"
                @click="$alert('使用成功')"
                style="margin: 5px 0"
              >
                {{ item.value }}
              </a-button>
            </div>
          </a-card>
        </a-col>
      </a-row>
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, toRefs } from "vue";
import { message, notification } from "ant-design-vue";
import { PlusOutlined } from "@ant-design/icons-vue";
import Mock from "better-mock";

const listData = Mock.mock({
  "id|+1": 1,
  "data|4": ["模型MX081", "模型MX082"],
}).data;

const operateList = Mock.mock({
  "data|4": [
    {
      "id|+1": 1,
      "value|+1": [
        "引入数据集",
        "随机梯度下降训练",
        "Adam训练",
        "RMSprop训练",
        "分布式训练",
      ],
    },
  ],
}).data;

export default defineComponent({
  components: {
    PlusOutlined,
  },
  setup() {
    return {
      title: document.title,
      listData,
      operateList,
    };
  },
});
</script>

<style scoped lang="less">
.card {
  margin-bottom: 10px;
}
.ad-img {
  width: 80%;
  // border: 1px solid #9e9e9e;
  // padding: 8px;
  box-shadow: 5px 5px 5px 0px #9e9e9e;
  border-radius: 3px;
}

.demo-loadmore-list {
  min-height: 350px;
}

.active {
  background-color: #f0faff;
}
</style>
