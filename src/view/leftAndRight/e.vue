<template>
  <div>
    <!-- 医保电子凭证打印与分享 -->
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
              src="https://p2.itc.cn/q_70/images03/20201216/98111fff5e54473f8a56f584274d03b1.jpeg"
            ></a-image>
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card>
            <div style="display: flex; flex-direction: column">
              <a-button @click="$alert('已连接打印机打印')">打印</a-button>
              <div style="height: 10px"></div>
              <a-button @click="$alert('已充值')">充值</a-button>
              <div style="height: 10px"></div>
              <a-button @click="$alert('已分享给指定用户')">分享</a-button>
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
  "data|8": ["医保电子凭证PZ082"],
}).data;
export default defineComponent({
  components: {
    PlusOutlined,
  },
  setup() {
    return {
      title: document.title,
      listData,
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
