<template>
  <a-form-model
    layout="inline"
    :model="search"
    @submit="handleSubmit"
    @submit.native.prevent
  >
    <a-form-model-item label="搜索关键字">
      <a-input v-model="search.searchWord" placeholder="请输入关键字"></a-input>
    </a-form-model-item>
    <a-form-model-item label="商品类目">
      <a-select
        show-search
        placeholder="选择商品类目"
        option-filter-prop="children"
        style="width: 130px"
        allowClear
        @change="handleChange"
      >
        <a-select-option
          v-for="category in categoryList"
          :key="category.id"
          :value="category.id"
        > {{ category.name }} </a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-model-item>
      <a-button @click="handleSearch" type="primary"> 搜索 </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
export default {
  props: ['categoryList'],
  data() {
    return {
      // categoryList: [],
      search: {
        searchWord: '',
        category: '',
      },
    };
  },
  methods: {
    handleSubmit(e) {
      console.log(this.search, e);
    },
    handleChange(value) {
      this.search.category = value;
    },
    handleSearch() {
      this.$emit('search', this.search);
    },
  },
};
</script>

<style lang="less" scoped>
.ant-form .ant-form-item:first-child{
    margin-right: 46px;
}
</style>
