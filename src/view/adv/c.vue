<template>
  <div>
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <a-card class="card" style="text-align: center">
        <a-space direction="vertical">
          <h3>当前已是最新版本，请放心使用～</h3>
          <a-button disabled>检查更新</a-button>
        </a-space>
      </a-card>
      <a-card class="card" title="历史版本" :bordered="false">
        <a-input-search
          placeholder="请输入"
          style="width: 400px"
          @search="$alert('正在搜索中，请稍后')"
        />
        <div style="height: 10px"></div>
        <a-timeline>
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
                <a-button @click="$alert('正在加载，请稍后')"
                  >加载更多</a-button
                >
              </div>
            </template>
            <template #renderItem="{ item }">
              <a-timeline-item>
                <a-list-item>
                  <template #actions>
                    <a key="list-loadmore-edit" @click="$alert('即将跳转')">
                      查看
                    </a>
                    <a key="list-loadmore-edit" @click="$alert('即将跳转')">
                      日志
                    </a>
                    <!-- <a key="list-loadmore-more">删除</a> -->
                  </template>
                  <a-skeleton avatar :title="false" :loading="false" active>
                    <a-list-item-meta :description="item.desc">
                      <template #title>
                        <a>
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
              </a-timeline-item>
            </template>
          </a-list>
        </a-timeline>
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
        "data|5": [
          {
            "key|+1": 1,
            avatar:
              "https://img0.baidu.com/it/u=1821253856,3774998416&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
            title() {
              return "ZHSWTP00002367" + this.key;
            },
            "desc|+1": ["修改了部分问题", "优化了算法，操作更流畅"],
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
