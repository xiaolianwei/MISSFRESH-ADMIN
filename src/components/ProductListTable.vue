<template>
  <a-table :columns="columns" @change="changePage" :data-source="data" :pagination="page">
    <div slot="options" slot-scope="record">
      <a-button @click="editPro(record)">编辑</a-button>
      <a-button @click="removePro(record)">删除</a-button>
    </div>
  </a-table>
</template>
<script>
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    width: 80,
    align: 'center',
  },
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
    ellipsis: true,
    align: 'center',
  },
  {
    title: '描述',
    dataIndex: 'desc',
    key: 'desc',
    ellipsis: true,
    align: 'center',
  },
  {
    title: '类目',
    dataIndex: 'categoryName',
    key: 'category',
    width: 100,
    align: 'center',
  },
  {
    title: '预售价格',
    dataIndex: 'price',
    key: 'price',
    width: 90,
    align: 'center',
  },
  {
    title: '折扣价格',
    dataIndex: 'price_off',
    key: 'price_off',
    width: 90,
    align: 'center',
  },
  {
    title: '标签',
    dataIndex: 'tags',
    key: 'tags',
    align: 'center',
  },
  {
    title: '库存',
    dataIndex: 'inventory',
    key: 'inventory',
    width: 80,
    align: 'center',
  },
  {
    title: '上架状态',
    dataIndex: 'status',
    key: 'status',
    width: 90,
    align: 'center',
    customRender(text) {
      return text === 1 ? '上架' : '下架';
    },
  },
  {
    title: '操作',
    key: 'options',
    scopedSlots: { customRender: 'options' },
    align: 'center',
  },
];

export default {
  props: {
    data: Array,
    total: Number,
  },
  data() {
    return {
      columns,
      page: {
        showSizeChanger: true,
        total: this.total,
        current: 1,
        pageSize: 10,
      },
    };
  },
  watch: {
    total() {
      this.page.total = this.total;
    },
  },
  methods: {
    changePage(page) {
      this.page = page;
    },
    editPro(record) {
      // console.log(record);
      this.$emit('editProduct', record);
    },
    removePro(record) {
      this.$confirm({
        title: '确认删除？',
        content: () => <div style="color:red;">{`确认删除标题为:  ${record.title}  的商品吗？`}</div>,
        okText: '确认',
        okType: 'danger',
        cancelText: '取消',
        onOk: () => {
          this.$emit('removeProduct', record);
        },
        onCancel: () => {
          console.log('取消');
        },
      });
    },
  },
};
</script>
