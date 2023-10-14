<template>
  <a-card :title="title" style="margin-top: 10px">
    <a-list item-layout="horizontal" :data-source="data">
      <template #renderItem="{ item }">
        <a-list-item>
          <a-list-item-meta :description="item.info">
            <template #title>
              <a href="https://www.antdv.com/">{{ item.title }}</a>
            </template>
            <template #avatar>
              <a-avatar :src="item.avatar" />
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>
  </a-card>
</template>

<script>
import Mock from "better-mock";
export default {
  setup() {
    const data = Mock.mock({
      "data|9": [
        {
          avatar:
            "https://portrait.gitee.com/uploads/avatars/user/2813/8441097_shaynas_1610801433.png!avatar200",
          title: "xx街道出现积水",
          info: "xx街道储存已满，出现积水，请及时打开排水系统",
        },
      ],
    }).data;

    return {
      data,
      title: document.title,
    };
  },
};
</script>

<style></style>
