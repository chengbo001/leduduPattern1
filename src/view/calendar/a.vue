<template>
  <div id="calendar-dome">
    <page-layout>
      <page-header :title="title" describe="选择日期可以添加日程"></page-header>
    </page-layout>
    <page-layout>
      <a-card>
        <a-card>
          <a-calendar v-model:value="value" @select="showModal = true">
            <template #dateCellRender="{ current }">
              <ul class="events">
                <li v-for="item in getListData(current)" :key="item.content">
                  <a-badge :status="item.type" :text="item.content" />
                </li>
              </ul>
            </template>
            <template #monthCellRender="{ current }">
              <div v-if="getMonthData(current)" class="notes-month">
                <section>{{ getMonthData(current) }}</section>
                <span>Backlog number</span>
              </div>
            </template>
          </a-calendar>
        </a-card>
      </a-card>
    </page-layout>
    <a-modal
      v-model:visible="showModal"
      title="新增"
      @ok="$alert('提交已保存')"
    >
      <a-form>
        <a-form>
          <a-form-item
            v-for="item of ['标题', '内容']"
            :key="item"
            :label="item"
          >
            <a-input />
          </a-form-item>
        </a-form>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const value = ref();
    const getListData = (value) => {
      let listData;
      switch (value.date()) {
        case 8:
          listData = [
            {
              type: "warning",
              content: "任务阶段性汇报",
            },
            {
              type: "success",
              content: "任务阶段性汇报",
            },
          ];
          break;
        case 10:
          listData = [
            {
              type: "warning",
              content: "完成任务RW028",
            },
            {
              type: "success",
              content: "完成任务RW028",
            },
            {
              type: "error",
              content: "完成任务RW028",
            },
          ];
          break;
        case 15:
          listData = [
            {
              type: "warning",
              content: "参加新任务",
            },
            {
              type: "success",
              content: "参加新任务",
            },
            {
              type: "error",
              content: "参加新任务",
            },
          ];
          break;
        default:
      }
      return listData || [];
    };
    const getMonthData = (value) => {
      if (value.month() === 8) {
        return 1394;
      }
    };
    const showModal = ref(false);
    return {
      title: document.title,
      value,
      getListData,
      getMonthData,
      showModal,
    };
  },
});
</script>
<style scoped>
.events {
  list-style: none;
  margin: 0;
  padding: 0;
}
.events .ant-badge-status {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  text-overflow: ellipsis;
  font-size: 12px;
}
.notes-month {
  text-align: center;
  font-size: 28px;
}
.notes-month section {
  font-size: 28px;
}
</style>
