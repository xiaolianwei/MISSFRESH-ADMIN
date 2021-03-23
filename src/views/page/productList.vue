<template>
  <div class="product-list">
    <!-- 商品搜索 -->
    <div class="search">
      <product-list-search
        @search="handleSearch"
        :categoryList="categoryList"
      />
      <a-button @click="handleAdd" class="btn">新增商品</a-button>
    </div>
    <!-- 商品列表 -->
    <product-list-table
      :total="dataTotal"
      :data="tableData"
      @editProduct="handleEdit"
      @removeProduct="handleRemove"
    />
  </div>
</template>

<script>
import ProductListSearch from '@/components/ProductListSearch.vue';
import ProductListTable from '@/components/ProductListTable.vue';

import product from '@/api/product';
import category from '@/api/category';
import axios from 'axios';

export default {
  components: {
    ProductListSearch,
    ProductListTable,
  },
  data() {
    return {
      search: {
        searchWord: '',
        category: '',
      },
      data: [],
      dataTotal: 1,
      categoryList: [],
      categoryMap: {},
    };
  },
  methods: {
    handleSearch(search) {
      this.search.searchWord = search.searchWord;
      this.search.category = search.category;
    },
    changeTotal(length) {
      this.dataTotal = length;
    },
    handleAdd() {
      this.$router.push('/productAdd');
    },
    handleEdit(record) {
      this.$router.push({
        name: 'ProductEdit',
        params: {
          id: record.id,
        },
      });
    },
    handleRemove(record) {
      product.remove(record.id).then(() => {
        this.getTableData();
        this.$message.success('删除成功');
      });
    },

    getTableData() {
      axios.all([product.get(), category.get()]).then(
        axios.spread((pRes, cRes) => {
          this.data = pRes.data;
          this.dataTotal = pRes.total;

          this.categoryList = cRes.data;
          this.categoryMap = cRes.data.reduce(
            (preVal, iCurVal) => ({
              ...preVal,
              [iCurVal.id]: iCurVal.name,
            }), {},
          );
        }),
      );
    },
  },
  mounted() {
    this.getTableData();
  },
  computed: {
    tableData() {
      const data = this.data
        .filter((item) => {
          const searchWord = this.search.searchWord.trim();
          if (this.search.category) {
            return (
              item.title.includes(searchWord)
              && item.category === this.search.category
            );
          }
          return item.title.includes(searchWord);
        })
        .map((item) => ({
          ...item,
          key: item.id,
          categoryName: this.categoryMap[item.category],
        }));
      this.changeTotal(data.length);
      return data;
    },
  },
};
</script>

<style lang="less" scoped>
.search {
  padding: 10px 50px;
  position: relative;

  .btn {
    position: absolute;
    right: 50px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
