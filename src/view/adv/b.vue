<template>
  <div>
    <page-layout>
      <page-header
        :title="title"
        describe="提供系统的使用指南和常见问题解答。"
      ></page-header>
    </page-layout>
    <page-layout>
      <!-- <a-card class="card" style="text-align: center">
        <a-space direction="vertical">
          <h3>当前已是最新版本，请放心使用～</h3>
          <a-button type="primary" disabled>检查更新</a-button>
        </a-space>
      </a-card> -->
      <a-card class="card" title="使用指南" :bordered="false">
        <a-input-search placeholder="请输入您的问题" style="width: 400px" />
        <div style="height: 10px"></div>
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
                <!-- <a key="list-loadmore-more">删除</a> -->
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
      <a-card class="card" title="常见问题解答" :bordered="false">
        <a-input-search placeholder="请输入您的问题" style="width: 400px" />
        <div style="height: 10px"></div>
        <a-list
          classN="demo-loadmore-list"
          item-layout="horizontal"
          :data-source="list2"
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
                <!-- <a key="list-loadmore-more">删除</a> -->
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
    const list2 = ref([]);
    onMounted(() => {
      list1.value = Mock.mock({
        "data|6": [
          {
            "key|+1": 1,
            avatar:
              "https://img0.baidu.com/it/u=1821253856,3774998416&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
            "title|+1": ["如何汇聚数据", "如何流转数据"],
            // title() {
            //   return "ZHSWTP00002367" + this.key;
            // },
            "desc|+1": [
              "在数据采集模块进行添加设备汇聚数据",
              "在系统集成模块进行集成其他系统，流转出数据",
            ],
          },
        ],
      }).data;
      list2.value = Mock.mock({
        "data|6": [
          {
            "key|+1": 1,
            avatar:
              "https://img0.baidu.com/it/u=1821253856,3774998416&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
            "title|1": ["如何修改规则引擎", "如何修改告警设置"],
            "desc|1": ["在相应的模块进行修改"],
          },
        ],
      }).data;
    });

    return {
      title: document.title,
      list1,
      list2,
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
