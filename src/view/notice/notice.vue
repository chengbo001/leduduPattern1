<template>
  <div>
    <page-layout>
      <page-header :title="title" describe=""></page-header>
      <div style="height: 10px"></div>
      <a-card style="text-align: center">
        <a-row>
          <a-col :span="8">
            <a-statistic
              title="预警"
              :value="Math.floor(Math.random() * 10) + 20"
              style="margin-right: 50px"
            >
            </a-statistic>
          </a-col>
          <a-col :span="8">
            <a-statistic
              title="未处理"
              :value="Math.floor(Math.random() * 10)"
              class="demo-class"
            >
              <template #suffix>
                <span> / 100</span>
              </template>
            </a-statistic>
          </a-col>
          <a-col :span="8">
            <a-statistic
              title="已处理"
              :value="Math.floor(Math.random() * 200)"
              class="demo-class"
            >
            </a-statistic>
          </a-col>
        </a-row>
      </a-card>
    </page-layout>
    <page-layout>
      <a-row :gutter="[10, 10]">
        <a-col :span="16">
          <a-card>
            <a-list item-layout="horizontal" :data-source="data">
              <template v-slot:loadMore>
                <div class="demo-loadmore">
                  <a-button> 加载更多 </a-button>
                </div>
              </template>
              <template v-slot:renderItem="{ item }">
                <a-list-item>
                  <template v-slot:actions>
                    <!-- <a>回复</a> -->
                    <a>删除</a>
                  </template>
                  <a-list-item-meta :description="item.desc">
                    <template v-slot:title>
                      <a href="javascript:;">{{ item.title }}</a>
                    </template>
                    <template v-slot:avatar>
                      <a-avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      />
                    </template>
                  </a-list-item-meta>
                  <div>查看详情</div>
                </a-list-item>
              </template>
            </a-list>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card>
            <a-form>
              <a-form-item label="预警编号">
                <!-- <span>陈默</span> -->
                <a-input></a-input>
              </a-form-item>
              <a-form-item label="处理日志">
                <a-textarea></a-textarea>
              </a-form-item>
              <a-button type="primary" style="display: block; margin: 0 auto">
                确认
              </a-button>
            </a-form>
          </a-card>
        </a-col>
      </a-row>
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>
<script>
import axios from "axios";
import { ref } from "vue";
import Mock from "better-mock";

const data = Mock.mock({
  "data|8": [
    {
      "key|+1": 1,
      "title|1": ["交通预警JTYJ035"],
      "desc|1": [
        "交通可能出现拥挤，请注意调节",
        "交通可能出现拥挤，请注意调节",
      ],
    },
  ],
}).data;

export default {
  setup() {
    return {
      title: document.title,
      data,
    };
  },
};
</script>
<style>
.demo-loadmore-list {
  min-height: 350px;
}
.demo-loadmore {
  text-align: center;
  margin-top: 12px;
  height: 32px;
  line-height: 32px;
}
</style>
