<template>
  <a-form-model
    ref="ruleForm"
    :model="form"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-form-model-item label="副标题" prop="title">
      <a-input v-model="form.title" />
    </a-form-model-item>
    <a-form-model-item label="产品描述" prop="desc">
      <a-input v-model="form.desc" type="textarea" />
    </a-form-model-item>
    <a-form-model-item label="产品类目" prop="category">
      <a-select v-model="form.category" placeholder="选择类目">
        <a-select-option
          v-for="category in categoryList"
          :key="category.id"
          :value="category.id"
        > {{ category.name }} </a-select-option>
      </a-select>
      <a-select v-model="form.c_item" placeholder="选择所属子类目">
        <a-select-option
          v-for="c_item in c_itemList"
          :key="c_item.id"
          :value="c_item.title"
        > {{ c_item.title }} </a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-model-item label="商品标签" prop="tags">
      <a-select
        mode="tags"
        style="width: 100%"
        :token-separators="[',']"
        placeholder="选择标签"
        v-model="form.tags"
      >
        <a-select-option value="包邮，最晚次日达">
          包邮，最晚次日达
        </a-select-option>
      </a-select>
    </a-form-model-item>

    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="next"> 下一步 </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
import category from '@/api/category';

export default {
  props: {
    form: Object,
  },
  data() {
    return {
      labelCol: { span: 7 },
      wrapperCol: { span: 10 },
      categoryList: [],
      rules: {
        title: [
          {
            required: true,
            message: '请输入商品副标题',
            trigger: 'blur',
          },
        ],
        category: [
          {
            required: true,
            message: '请输入商品类目',
            trigger: 'change',
          },
        ],
        tags: [
          {
            required: true,
            message: '请输入商品标签',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  mounted() {
    category.get().then((res) => {
      this.categoryList = res.data;
    });
  },
  methods: {
    next() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$emit('next', this.form);
          return true;
        }
        console.log('error submit!!');
        return false;
      });
    },
  },
  computed: {
    c_itemList() {
      const arr = this.categoryList.filter((val) => val.id === this.form.category);
      if (arr.length) {
        return arr[0].c_items.map((val) => ({ title: val, id: new Date().getDate() }));
      }
      return arr;
    },
  },
};
</script>
