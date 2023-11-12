<template>
  <div>
    <!-- 设备控制 -->
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <a-row :gutter="[10, 10]">
        <a-col :span="6">
          <a-card>
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
            <div style="display: flex; justify-content: center">
              <a-image
                :width="420"
                src="https://img2.baidu.com/it/u=3246689728,1127415033&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=358"
              ></a-image>
            </div>
            <!-- <div style="height: 10px"></div>
            <div style="display: flex; justify-content: center">
              <a-space>
                <a-button>前一张</a-button>
                <a-button>暂停</a-button>
                <a-button>后一张</a-button>
                <a-button>快退</a-button>
                <a-button>快进</a-button>
              </a-space>
            </div> -->
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card class="card" title="" :bordered="false">
            <div
              style="
                display: flex;
                justify-content: center;
                flex-direction: column;
              "
            >
              <a-button @click="$alert('仓容监测中')"> 仓容监测 </a-button>
              <a-button style="margin-top: 10px" @click="$alert('料位监测中')">
                料位监测
              </a-button>
              <a-button style="margin-top: 10px" @click="$alert('自动排料中')">
                自动排料
              </a-button>
              <a-button style="margin-top: 10px" @click="$alert('开始进料中')">
                开始进料
              </a-button>
              <a-button style="margin-top: 10px" @click="$alert('物料跟踪中')">
                物料跟踪
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
  "data|4": ["仓库CK01", "仓库CK02"],
}).data;
export default defineComponent({
  name: "advancedForm",
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
