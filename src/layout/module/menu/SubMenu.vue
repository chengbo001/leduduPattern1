<template>
  <a-menu-item :key="item.path" v-if="!hasChildren(item)">
    <template #icon>
      <p-icon :type="item.meta.icon" />
    </template>
    {{ item.meta.title }}
    <!-- t(item.meta.i18n) 换为 meta.title -->
  </a-menu-item>

  <a-menu-item
    :key="item.children[0].path"
    v-else-if="
      item.children && item.children.length === 1 && item.parent === '0'
    "
  >
    <template #icon>
      <p-icon :type="item.children[0].meta.icon" />
    </template>
    {{ item.children[0].meta.title }}
  </a-menu-item>

  <a-sub-menu :key="item.path" v-else>
    <template #icon>
      <p-icon :type="item.meta.icon" />
    </template>
    <template #title>
      {{ item.meta.title }}
    </template>

    <template v-for="child in item.children" :key="child.path">
      <sub-menu v-if="!child.hidden" :item="child"></sub-menu>
    </template>
  </a-sub-menu>
</template>
<script>
import { useI18n } from "vue-i18n";

export default {
  name: "SubMenu",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const hasChildren = function (item) {
      return item.children != undefined;
    };

    const { t } = useI18n();

    return {
      t,
      hasChildren,
    };
  },
};
</script>
<style lang="scss">
// 修改菜单字体样式
.ant-menu-inline.ant-menu-root .ant-menu-item > .ant-menu-title-content,
.ant-menu-inline.ant-menu-root
  .ant-menu-submenu-title
  > .ant-menu-title-content {
  color: #475f7b;
  font-size: 15px;
  font-family: -apple-system, Rubik, "PingFang SC", "Microsoft YaHei",
    "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
}
</style>
