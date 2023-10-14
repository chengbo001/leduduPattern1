<template>
  <div>
    <page-layout>
      <page-header
        :title="title"
        describe="根据口语水平、学习进度和兴趣，推荐适合的练习材料和话题。"
      ></page-header>
    </page-layout>
    <page-layout>
      <!-- <a-card class="card" style="text-align: center">
        <a-space direction="vertical">
          <h3>当前已是最新版本，请放心使用～</h3>
          <a-button type="primary" disabled>检查更新</a-button>
        </a-space>
      </a-card> -->
      <a-card class="card" title="推荐记录" :bordered="false">
        <!-- <a-input-search placeholder="请输入您的问题" style="width: 400px" /> -->
        <!-- <div style="height: 10px"></div> -->
        <a-list
          classN="demo-loadmore-list"
          item-layout="horizontal"
          :data-source="list1"
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
              <a-button>加载更多</a-button>
            </div>
          </template>
          <template #renderItem="{ item }">
            <a-list-item>
              <template #actions>
                <a key="list-loadmore-edit">查看</a>
                <a key="list-loadmore-more">删除</a>
              </template>
              <a-skeleton avatar :title="false" :loading="false" active>
                <a-list-item-meta :description="item.desc">
                  <template #title>
                    <a href="https://www.antdv.com/">
                      {{ item.title }}
                    </a>
                  </template>
                  <template #avatar>
                    <a-avatar :src="item.avatar" />
                  </template>
                </a-list-item-meta>
                <!-- <div>content</div> -->
              </a-skeleton>
            </a-list-item>
          </template>
        </a-list>
      </a-card>
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>

<script>
import {
  defineComponent,
  onMounted,
  nextTick,
  reactive,
  ref,
  toRefs,
} from "vue";
import { message, notification } from "ant-design-vue";
import { PlusOutlined } from "@ant-design/icons-vue";
import Mock from "better-mock";

export default defineComponent({
  name: "advancedForm",
  components: {
    PlusOutlined,
  },
  setup() {
    // 广告条目数据获取
    const list1 = ref([]);
    onMounted(() => {
      list1.value = Mock.mock({
        "data|6": [
          {
            "key|+1": 1,
            avatar:
              "https://img0.baidu.com/it/u=1821253856,3774998416&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
            "title|1": ["您有一条新推荐"],
            // title() {
            //   return "ZHSWTP00002367" + this.key;
            // },
            "desc|1": ["这个练习材料更适合您", "这有一个新话题快来参加吧"],
          },
        ],
      }).data;
    });

    return {
      title: document.title,
      list1,
    };
  },
});
</script>

<style scoped lang="less">
.card {
  margin-bottom: 10px;
}
.demo-loadmore-list {
  min-height: 350px;
}
</style>
