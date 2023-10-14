<template>
  <div>
    <page-layout>
      <page-header
        :title="title"
        describe="对用户的口语表达进行语法检查，找出并纠正语法错误。"
      ></page-header>
    </page-layout>
    <page-layout>
      <a-card class="card" title="录入语音" :bordered="false">
        <div style="text-align: center">
          <a-space direction="vertical">
            <img
              src="https://5b0988e595225.cdn.sohucs.com/images/20181026/33dc6ca2bf3e4879b5792639390656c3.jpeg"
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
        <p style="text-indent: 20px">1.可数名词和不可数名词混用</p>
        <p style="text-indent: 20px">2.不规则动词和规则动词不清楚</p>
        <p style="text-indent: 20px">3.主谓一致问题。</p>
        <p style="text-indent: 20px">4.助动词的使用</p>
        <p>纠正:</p>
        <p style="text-indent: 20px">1.可数名词和不可数名词有不同的量词修饰</p>
        <p style="text-indent: 20px">
          2.熟悉掌握相对较少的不规则动词，并且注意区分使用。
        </p>
        <p style="text-indent: 20px">3.一定要注意注意再注意</p>
        <p style="text-indent: 20px">
          4.do一般在一般现在时出现，be一般在进行时和被动语态里，have一般出现在完成时态
        </p>
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
