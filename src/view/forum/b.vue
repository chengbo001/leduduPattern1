<template>
  <div>
    <page-layout>
      <page-header :title="title" describe=""></page-header>
      <div style="height: 10px"></div>
      <a-card>
        <a-list
          item-layout="vertical"
          size="large"
          :pagination="pagination"
          :data-source="listData"
        >
          <template v-slot:footer>
            <div><b>分析</b> 改进</div>
          </template>
          <template v-slot:renderItem="{ item }">
            <a-list-item key="item.title">
              <!-- <template v-slot:actions>
                <span v-for="{ type, text } in actions" :key="type">
                  <component v-bind:is="type" style="margin-right: 8px" />
                  {{ text }}
                </span>
              </template> -->
              <template v-slot:extra>
                <img
                  width="272"
                  alt="logo"
                  src="https://img1.baidu.com/it/u=1630120449,2257977684&fm=253&fmt=auto&app=138&f=JPEG?w=474&h=300"
                />
              </template>
              <a-list-item-meta :description="item.description">
                <template v-slot:title>
                  <a :hrefN="item.href">{{ item.title }}</a>
                </template>
                <!-- <template v-slot:avatar>
                  <a-avatar :src="item.avatar" />
                </template> -->
              </a-list-item-meta>
              <!-- 内容显示区 -->
              <!-- {{ item.content }} -->
              <div
                v-for="(item2, index2) of item.content.split('\n')"
                :key="index2"
              >
                {{ item2 }}
              </div>
            </a-list-item>
          </template>
        </a-list>
      </a-card>
    </page-layout>
    <page-footer></page-footer>
  </div>
</template>
<script>
import Mock from "better-mock";
import {
  StarOutlined,
  LikeOutlined,
  MessageOutlined,
} from "@ant-design/icons-vue";
// const listData = [];
// for (let i = 0; i < 23; i++) {
//   listData.push({
//     href: "",
//     title: `我是如何调节湿热和痰湿的`,
//     avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
//     description: "",
//     content:
//       "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
//   });
// }
const listData = Mock.mock({
  "data|23": [
    {
      "href|+1": ["", ""],
      "title|+1": [
        "火灾和爆炸",
        "化学品泄漏",
        "设备故障和人员误操作",
        "环境污染",
      ],
      "avatar|+1": [
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      ],
      "description|+1": ["", ""],
      "content|+1": [
        `- 控制车间内的乙烯基醚浓度，使其保持在安全范围内。\n
         - 安装火警及可燃气体探测报警系统，以便及时发现并处置火灾和爆炸隐患。
        `,
        `- 加强设备维护和管理，确保设备安全可靠。\n
         - 定期对设备进行泄漏检测，发现泄漏及时处理。\n
         - 在设备周围设置围堰和收集池，以避免化学品泄漏造成的环境污染。
        `,
        `- 对员工进行定期培训，提高员工的操作技能和安全意识。\n
         - 加强设备检查和维护，确保设备正常运行。\n
         - 优化生产工艺，减少人为操作失误的风险。
        `,
        `- 安装环保处理设备，对废气、废水和废渣进行有效处理，确保其达到排放标准。\n
         - 优化生产工艺，减少废气、废水和废渣的产生。
        `,
      ],
    },
  ],
}).data;

export default {
  components: {
    StarOutlined,
    LikeOutlined,
    MessageOutlined,
  },
  data() {
    return {
      title: document.title,
      listData,
      pagination: {
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 4,
      },
      actions: [
        { type: "StarOutlined", text: "156" },
        { type: "LikeOutlined", text: "156" },
        { type: "MessageOutlined", text: "2" },
      ],
    };
  },
};
</script>
<style></style>
