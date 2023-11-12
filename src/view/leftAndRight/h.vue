<template>
  <div>
    <!-- 系统性能表现 左折线图 右参数盒子 -->
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <a-row :gutter="[10, 10]">
        <a-col :span="12">
          <a-card>
            <lineG2P></lineG2P>
            <!-- <a-list
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
                    <a key="list-loadmore-edit">edit</a>
                    <a key="list-loadmore-more">more</a>
                    <right-outlined />
                  </template>
                  <a-skeleton avatar :title="false" :loading="false" active>
                    <a-list-item-meta description="">
                      <template #title>
                        <a style="display: block; text-indent: 12px">
                          {{ item }}
                        </a>
                      </template>
                      <template #avatar>
                        <a-avatar :src="1" />
                      </template>
                    </a-list-item-meta>
                    <div>查看详情</div>
                  </a-skeleton>
                </a-list-item>
              </template>
            </a-list> -->
          </a-card>
        </a-col>
        <a-col :span="12">
          <a-card class="card" title="" :bordered="false">
            <a-form>
              <a-form-item
                v-for="(item, index) of checkLabel"
                :key="index"
                :label="item"
              >
                <div style="display: flex; justify-content: space-between">
                  <span>{{ "高性能" }}</span>
                  <check-circle-two-tone />
                </div>
              </a-form-item>
              <!-- <a-form-item label="" style="text-align: center">
                <a-button @click="$alert('已开启自检')">开始自检</a-button>
              </a-form-item> -->
            </a-form>
          </a-card>
        </a-col>
        <!-- <a-col :span="6">
          <a-card class="card" title="" :bordered="false">
            <a-card>
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  text-align: center;
                  justify-content: center;
                  height: 400px;
                "
              >
                <a-spin size="large" />
                <span style="line-height: 60px">自检中···</span>
              </div>
            </a-card>
          </a-card>
        </a-col> -->
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
import lineG2P from "@/view/chart/lineG2P.vue";

const listData = Mock.mock({
  "id|+1": 1,
  "data|8": ["设备SB082"],
}).data;

const checkLabel = [
  "TPS",
  "响应时间",
  "事务延迟",
  "吞吐量",
  "资源利用率",
  "错误率",
  "并发处理能力",
  "弹性",
  "网络延迟",
];
export default defineComponent({
  name: "advancedForm",
  components: {
    PlusOutlined,
    lineG2P,
  },
  setup() {
    return {
      title: document.title,
      listData,
      checkLabel,
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
