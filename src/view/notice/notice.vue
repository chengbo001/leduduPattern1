<template>
  <div>
    <page-header
      :title="title"
      describe="方便商家对消费者的问题进行处理，解答消费者的疑问。"
    ></page-header>

    <page-layout>
      <a-card style="text-align: center">
        <a-row>
          <a-col :span="8">
            <a-statistic
              title="问题"
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
            <a-list
              :loading="loading"
              item-layout="horizontal"
              :data-source="data"
            >
              <template v-slot:loadMore>
                <div v-if="showLoadingMore" class="demo-loadmore">
                  <a-spin v-if="loadingMore" />
                  <a-button v-else @click="loadMore"> 加载更多 </a-button>
                </div>
              </template>
              <template v-slot:renderItem="{ item }">
                <a-list-item>
                  <template v-slot:actions>
                    <a>回复</a>
                    <a>消除</a>
                  </template>
                  <a-list-item-meta
                    description="ZBSP030商品久久未发货，请快些发货"
                  >
                    <template v-slot:title>
                      <a href="https://www.antdv.com/">{{
                        `ZBSP030商品久久未发货`
                      }}</a>
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
              <a-form-item label="回复：">
                <span>陈默</span>
              </a-form-item>
              <a-form-item label="内容：">
                <a-textarea></a-textarea>
              </a-form-item>
              <a-button type="primary" style="display: block; margin: 0 auto">
                发送
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

const fakeDataUrl =
  "https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo";

export default {
  setup() {
    const data = ref([]);
    const loading = ref(true);
    const loadingMore = ref(false);
    const showLoadingMore = ref(false);

    const getData = function (callback) {
      axios.get(fakeDataUrl).then((reponse) => {
        callback(reponse);
      });
    };

    const loadMore = function () {
      loadingMore.value = true;
      getData((res) => {
        data.value = data.value.concat(res.data.results);
        loadingMore.value = false;
        this.$nextTick(() => {
          window.dispatchEvent(new Event("resize"));
        });
      });
    };

    getData((res) => {
      loading.value = false;
      data.value = res.data.results;
      showLoadingMore.value = true;
    });

    return {
      title: document.title,
      loading,
      loadingMore,
      showLoadingMore,
      data,
      loadMore,
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
