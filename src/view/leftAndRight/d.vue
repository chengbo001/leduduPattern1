<template>
  <div>
    <!-- 机器人运动建模、模拟患者 -->
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <a-row :gutter="[10, 10]">
        <a-col :span="16">
          <a-card class="card" title="" :bordered="false">
            <div
              style="
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
              "
            >
              <a-image
                :preview="false"
                style="width: 400px"
                src="https://img1.baidu.com/it/u=2239078296,2928285377&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=308"
              ></a-image>
              <a-button style="margin-top: 10px" @click="$alert('检查中')">
                开始检查
              </a-button>
            </div>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card>
            <a-list
              class="demo-loadmore-list"
              item-layout="horizontal"
              :data-source="listData"
            >
              <!-- <template #loadMore>
                <div
                  :style="{
                    textAlign: 'center',
                    marginTop: '12px',
                    height: '32px',
                    lineHeight: '32px',
                  }"
                >
                  <a-button @click="$alert('已开始路线规划')">
                    开始路线规划
                  </a-button>
                </div>
              </template> -->
              <template #renderItem="{ item, index }">
                <a-list-item :class="{ active: index == 0 }">
                  <template #actions>
                    <!-- <a key="list-loadmore-edit" @click="$alert('已应用')">
                      应用
                    </a> -->
                    <!-- <a key="list-loadmore-more" @click="$alert('已删除')">
                      删除
                    </a> -->
                    <check-circle-two-tone />
                  </template>
                  <a-skeleton avatar :title="false" :loading="false" active>
                    <a-list-item-meta description="">
                      <template #title>
                        <a style="display: block; text-indent: 12px">
                          {{ item.label + ": " + item.value }}
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
  "data|5": [
    {
      "id|+1": 1,
      "label|+1": ["姓名", "年龄", "性别", "主诉", "医生"],
      "value|+1": ["@CNAME", "50", "男", "心口不舒服", "@CNAME"],
    },
  ],
}).data;

export default defineComponent({
  components: {
    PlusOutlined,
  },
  setup() {
    function getImageUrl(url) {
      return new URL(url, import.meta.url).href;
    }
    return {
      title: document.title,
      listData,
      getImageUrl,
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
