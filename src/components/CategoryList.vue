<template>
  <a-table
    :columns="columns"
    :data-source="data"
    :pagination="page"
    @change="changePage"
  >
    <div slot="options" slot-scope="record">
      <a-button @click="editPro(record)">编辑</a-button>
      <a-popconfirm
        title="是否删除？"
        ok-text="是"
        cancel-text="否"
        @confirm="confirm(record)"
      >
        <a-button>删除</a-button>
      </a-popconfirm>
    </div>
  </a-table>
</template>
<script>
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '操作',
    key: 'options',
    scopedSlots: { customRender: 'options' },
  },
];

export default {
  props: {
    data: Array,
  },
  data() {
    return {
      columns,
      page: {
        showSizeChanger: true,
        total: 10,
        current: 1,
        pageSize: 10,
      },
    };
  },
  methods: {
    editPro(record) {
      this.$emit('edit', record);
    },
    confirm(record) {
      this.$emit('remove', record);
    },
    changePage(page) {
      this.page = page;
    },
  },
};
</script>
