<template>
  <div>
    <!-- 深海鱼群监控 -->
    <page-layout>
      <page-header :title="title" describe=""></page-header>
    </page-layout>
    <page-layout>
      <a-row :gutter="[10, 10]">
        <a-col :span="18">
          <a-card class="card" title="" :bordered="false">
            <div style="display: flex; justify-content: center">
              <a-image
                src="https://image2.bangongziyuan.com/files/kindeditor/image/20180929/29/20180929174138_18976.png?x-oss-process=image/resize,w_862"
              ></a-image>
            </div>
            <div style="height: 10px"></div>
            <div style="display: flex; justify-content: center">
              <a-space>
                <a-button>前一张</a-button>
                <a-button>暂停</a-button>
                <a-button>后一张</a-button>
                <a-button>快退</a-button>
                <a-button>快进</a-button>
              </a-space>
            </div>
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card class="card" title="" :bordered="false">
            <a-form>
              <a-form-item label="提问">
                <!-- {{ "正常" }} -->
                <a-input></a-input>
              </a-form-item>
              <a-form-item label="评分">
                <!-- {{ "无" }} -->
                <a-rate :value="0"></a-rate>
              </a-form-item>
              <a-form-item label="反馈">
                <!-- {{ "200米" }} -->
                <a-textarea></a-textarea>
              </a-form-item>
              <a-form-item label="姓名">
                <!-- {{ "已开" }} -->
                <a-input></a-input>
              </a-form-item>
              <a-form-item label="联系方式">
                <!-- {{ "充足" }} -->
                <a-input></a-input>
              </a-form-item>
              <a-form-item label="" style="text-align: center">
                <!-- {{ "1节" }} -->
                <a-button @click="$alert('已提交')">提交</a-button>
              </a-form-item>
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

export default defineComponent({
  name: "advancedForm",
  components: {
    PlusOutlined,
  },
  setup() {
    return {
      title: document.title,
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
</style>
