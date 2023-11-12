<template>
  <div>
    <!-- base-list 修改的比较好 -->
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <a-row :gutter="[10, 10]">
        <a-col :span="8">
          <a-directory-tree
            multiple
            :tree-data="treeData"
            :expandedKeys="[1]"
            :selectedKeys="[11]"
          ></a-directory-tree>
        </a-col>
        <a-col :span="16">
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
                    <a key="list-loadmore-edit" @click="$alert('已提醒')">
                      提醒
                    </a>
                    <a key="list-loadmore-more" @click="$alert('已删除')">
                      删除
                    </a>
                    <!-- <right-outlined /> -->
                  </template>
                  <a-skeleton avatar :title="false" :loading="false" active>
                    <a-list-item-meta :description="item.desc">
                      <template #title>
                        <a style="display: block; text-indent: 12px">
                          <a-checkbox>
                            {{ item.title }}
                          </a-checkbox>
                        </a>
                      </template>
                      <!-- <template #avatar>
                        <a-avatar :src="1" />
                      </template> -->
                    </a-list-item-meta>
                    <div>{{ item.time }}</div>
                  </a-skeleton>
                </a-list-item>
              </template>
            </a-list>
          </a-card>
        </a-col>
        <!-- <a-col :span="8">
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
              <span style="line-height: 60px">持续监控中···</span>
            </div>
          </a-card>
        </a-col> -->
        <!-- <a-col :span="8">
          <a-card>
            <div
              v-for="item of ['家人', '医师', '药师']"
              :key="item"
              style="
                display: flex;
                justify-content: space-between;
                height: 40px;
              "
            >
              <a>发送给</a>
              <span style="font-size: 16px">{{ item }}</span>
            </div>
          </a-card>
        </a-col> -->
        <!-- <a-col :span="8">
          <a-card>
            <a-form>
              <a-form-item v-for="item of labelList" :key="item" :label="item">
                <a-input />
              </a-form-item>
              <a-button
                type="primary"
                style="display: block; margin: 0 auto"
                @click="$alert('保存成功')"
              >
                保存
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
import { defineComponent, reactive, ref, toRefs } from "vue";
import { message, notification } from "ant-design-vue";
import { PlusOutlined } from "@ant-design/icons-vue";
import Mock from "better-mock";

const listData = Mock.mock({
  "data|12": [
    {
      "id|+1": 1,
      "title|+1": ["保养", "维护"],
      "desc|+1": ["", ""],
      // "time|+1": ["11/9", "11/10", "11/11"],
      time() {
        return "11/" + (30 - this.id * 5);
      },
    },
  ],
}).data;

const treeData = Mock.mock({
  "data|9": [
    {
      "index|+1": 1,
      title() {
        return "群组0" + this.key;
      },
      "key|+1": 1,
      "children|6": [
        {
          title() {
            return "用户" + this.key;
          },
          "key|+1": 11,
          isLeaf: true,
        },
      ],
    },
  ],
}).data;

const labelList = ["名称", "时间"];

export default defineComponent({
  name: "aBaseList",
  components: {
    PlusOutlined,
  },
  setup() {
    return {
      title: document.title,
      listData,
      treeData,
      labelList,
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
