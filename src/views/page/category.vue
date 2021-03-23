<template>
  <div class="category-list">
    <div class="category-add">
      <a-button class="btn" @click="handleAdd">新增</a-button>
    </div>
    <category-list :data="categoryData" @edit="handleEdit" @remove="handleRemove" />
    <a-modal
      :title="title"
      :visible="visible"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
      @cancel="handleCancel"
      okText="提交"
      cancelText="取消"
    >
      <category-form :form="form" />
    </a-modal>
    <a-spin size="large" class="ant-spin" :spinning="spinning" />
  </div>
</template>

<script>
import CategoryList from '@/components/CategoryList.vue';
import CategoryForm from '@/components/CategoryForm.vue';

import category from '@/api/category';

import _ from 'lodash';

export default {
  components: {
    CategoryList,
    CategoryForm,
  },
  data() {
    return {
      title: '',
      visible: false,
      confirmLoading: false,
      categoryData: [],
      form: {},
      spinning: false,
    };
  },
  mounted() {
    this.getCategoryData();
  },
  methods: {
    getCategoryData() {
      category.get().then((res) => {
        this.categoryData = res.data.map((item) => ({
          ...item,
          key: item.id,
        }));
        this.total = res.total;
      });
    },
    handleOk() {
      const result = this.formCheck();
      if (!result) return;
      this.confirmLoading = true;
      if (this.form.key) {
        category.edit(this.form).then(() => {
          this.visible = false;
          this.confirmLoading = false;
          this.getCategoryData();
          this.$message.success('类目修改成功');
        });
      } else {
        category.add(this.form).then(() => {
          // console.log(res);
          this.visible = false;
          this.confirmLoading = false;
          this.getCategoryData();
          this.$message.success('类目新增成功');
        });
      }
    },
    handleCancel() {
      this.visible = false;
    },
    handleEdit(record) {
      this.title = '编辑标签';
      this.form = _.defaultsDeep({}, record);
      this.visible = true;
    },
    handleAdd() {
      this.title = '新增标签';
      this.form = {
        id: '',
        name: '',
        c_items: [],
      };
      this.visible = true;
    },
    handleRemove(record) {
      console.log(record);
      this.spinning = true;
      category.remove(record.id).then(() => {
        this.spinning = false;
        this.getCategoryData();
      });
    },
    formCheck() {
      const addRef = this.$store.state.cateAddForm;
      let result;
      addRef.addRef.validate((valid) => {
        if (valid) {
          result = true;
          return true;
        }
        result = false;
        return false;
      });
      return result;
    },
  },
};
</script>

<style lang="less" scoped>
.category-add {
  padding: 10px 50px;
  position: relative;
  height: 60px;
  .btn {
    position: absolute;
    right: 200px;
    top: 50%;
    transform: translateY(-50%);
  }
}
.ant-spin {
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
