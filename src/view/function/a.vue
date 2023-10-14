<template>
  <div>
    <page-layout>
      <page-header
        :title="title"
        describe="通过语音识别技术，对用户的发音进行实时评估，并对发音不准确的地方进行标记和纠正。"
      ></page-header>
    </page-layout>
    <page-layout>
      <a-card class="card" title="录入语音" :bordered="false">
        <div style="text-align: center">
          <a-space direction="vertical">
            <img
              src="https://www.chivox.com/uploadfiles/2022/01/20220112115559566.jpg"
              class="ad-img"
              style="width: 200px"
            />
            <span
              >点击麦克风开始录音，请对我说你想说的话，可以在下方看到识别结果。录入完成，开始分析～</span
            >
          </a-space>
        </div>
      </a-card>
      <a-card class="card" title="分析结果" :bordered="false">
        <p>您说了：</p>
        <p style="text-indent: 20px">
          English is a language, that is, English is just a tool for
          communication. So, when learning English pronunciation, we should have
          the courage to speak up and love losing face.
        </p>
        <p>有如下问题：</p>
        <p style="text-indent: 20px">1.不敢开口讲英文，声音较弱</p>
        <p style="text-indent: 20px">2.发不准音</p>
        <p style="text-indent: 20px">3.读句子时没有略读辅音</p>
        <p style="text-indent: 20px">4.用中文发音习惯去发英文发音</p>
        <p>纠正:</p>
        <p style="text-indent: 20px">
          1./e/[发这个音的时候不要读“嘿”的ī，用你的嘴唇放松]
        </p>
        <p style="text-indent: 20px">
          2./æ/[发这个音时，不要发“嘿”的ī音，用扁平的嘴唇读出来]
        </p>
        <p style="text-indent: 20px">3./ə:/[长额头]</p>
        <p style="text-indent: 20px">4./ə/[额头短]</p>
      </a-card>
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
