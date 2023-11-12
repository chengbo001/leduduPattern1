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
                :preview="false"
                :width="420"
                src="https://img1.baidu.com/it/u=3096807722,3803434967&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
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
            <a-form :label-col="{ span: 6 }">
              <a-form-item label="位置">
                <!-- 机械臂运动 -->
                <!-- {{ "正常" }} -->
                <a-space>
                  <a-button shape="circle">
                    <template #icon><up-outlined /></template>
                  </a-button>
                  <a-button shape="circle">
                    <template #icon><down-outlined /></template>
                  </a-button>
                  <a-button shape="circle">
                    <template #icon><left-outlined /></template>
                  </a-button>
                  <a-button shape="circle">
                    <template #icon><right-outlined /></template>
                  </a-button>
                </a-space>
              </a-form-item>
              <!-- <a-form-item label="右摄像头"> -->
              <!-- 探头位置 -->
              <!-- {{ "无" }} -->
              <!-- <a-space>
                  <a-button shape="circle">
                    <template #icon><up-outlined /></template>
                  </a-button>
                  <a-button shape="circle">
                    <template #icon><down-outlined /></template>
                  </a-button>
                  <a-button shape="circle">
                    <template #icon><left-outlined /></template>
                  </a-button>
                  <a-button shape="circle">
                    <template #icon><right-outlined /></template>
                  </a-button>
                </a-space> -->
              <!-- </a-form-item> -->
              <a-form-item label="压力">
                <!-- {{ "200米" }} -->
                <a-input-number value="15"></a-input-number>
              </a-form-item>
              <a-form-item label="流量">
                <!-- {{ "已开" }} -->
                <a-input-number value="5"></a-input-number>
              </a-form-item>
              <a-form-item label="增压比">
                <!-- {{ "已开" }} -->
                <a-input-number value="2"></a-input-number>
              </a-form-item>
              <a-form-item label="运行时间">
                <!-- {{ "已开" }} -->
                <a-input-number value="6"></a-input-number>
              </a-form-item>
              <a-form-item label="休眠压力">
                <!-- {{ "已开" }} -->
                <a-input-number value="8"></a-input-number>
              </a-form-item>
              <a-form-item :wrapper-col="{ offset: 4 }">
                <!-- {{ "充足" }} -->
                <a-space>
                  <a-button @click="$alert('已启动')">启动</a-button>
                  <a-button @click="$alert('已停止')">停止</a-button>
                </a-space>
              </a-form-item>
              <!-- <a-rate :value="0"></a-rate> -->
              <!-- <a-input></a-input> -->
              <!-- <a-textarea></a-textarea> -->
              <!-- <a-form-item label="" style="text-align: center">
                <a-button @click="$alert('已提交')">提交</a-button>
              </a-form-item> -->
            </a-form>
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
  "data|4": ["设备SB01", "设备SB02"],
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
