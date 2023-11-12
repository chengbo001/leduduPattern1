<template>
  <div>
    <!-- AI测试场景 左表单 右列表 -->
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <a-row :gutter="[10, 10]">
        <a-col :span="16">
          <a-card class="card" title="" :bordered="false">
            <a-form :label-col="{ span: 6 }" :wrapper-col="{ span: 12 }">
              <a-form-item
                v-for="(item, index) of labelData"
                :key="index"
                :label="item"
              >
                <a-input />
              </a-form-item>
              <a-form-item :wrapper-col="{ span: 10, offset: 10 }">
                <a-button type="primary" @click="$alert('提交成功')">
                  提交
                </a-button>
                <a-button style="margin-left: 10px" @click="$alert('重置成功')">
                  重置
                </a-button>
              </a-form-item>
            </a-form>
          </a-card>
        </a-col>
        <a-col :span="8">
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
                    <a key="list-loadmore-edit" @click="$alert('已应用')"
                      >应用</a
                    >
                    <a key="list-loadmore-more" @click="$alert('已删除')"
                      >删除</a
                    >
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
  "data|3": ["场景CJ01", "场景CJ02", "场景CJ03"],
}).data;

const labelData = ["倾斜角度", "速度", "加速度", "时间"];

export default defineComponent({
  name: "advancedForm",
  components: {
    PlusOutlined,
  },
  setup() {
    return {
      title: document.title,
      listData,
      labelData,
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
