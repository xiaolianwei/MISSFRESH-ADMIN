<template>
  <div>
    <a-steps :current="current" class="steps-wrap">
      <a-step v-for="item in steps" :key="item.title" :title="item.title" />
    </a-steps>
    <div class="steps-content">
      <product-add-form-basic :form="form" @next="next" v-if="current === 0" />
      <product-add-form-sale :form="form" @next="next" @prev="prev" v-else />
    </div>
  </div>
</template>

<script>
import ProductAddFormBasic from '@/components/ProductAddFormBasic.vue';
import ProductAddFormSale from '@/components/ProductAddFormSale.vue';

import product from '@/api/product';

export default {
  components: {
    ProductAddFormBasic,
    ProductAddFormSale,
  },
  data() {
    return {
      current: 0,
      steps: [
        {
          title: '填写商品基本信息',
        },
        {
          title: '填写商品销售信息',
        },
      ],
      form: {},
    };
  },
  mounted() {
    this.initForm();
  },
  watch: {
    $route() {
      this.initForm();
    },
  },
  methods: {
    next(form) {
      this.form = {
        ...this.form,
        ...form,
      };
      if (this.current === 0) {
        this.current += 1;
      } else if (this.current === 1) {
        if (this.$route.params.id) {
          // this.form._id = this.$route.params.id;
          product.edit(this.form).then(
            (res) => {
              this.$message.success('商品修改成功');
              this.$router.push('/productList');
              console.log(res);
            },
            (err) => {
              console.log(err);
            },
          );
        } else {
          product.add(this.form).then(
            (res) => {
              this.$message.success('商品添加成功');
              this.$router.push('/productList');
              console.log(res);
            },
            (err) => {
              console.log(err);
            },
          );
        }
      }
    },
    prev() {
      this.current -= 1;
    },
    initForm() {
      // console.log(this.$route.params);
      const { id } = this.$route.params;
      if (id) {
        product.detail(id).then((res) => {
          this.form = res;
        });
      } else {
        this.form = {
          title: '',
          category: undefined,
          desc: '',
          c_item: [],
          tags: [],
          price: null,
          price_off: null,
          inventory: null,
          unit: '',
          images: [],
          status: 1,
        };
      }
    },
  },
};
</script>

<style lang="less" scoped>
.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}

.steps-action {
  margin-top: 24px;
}
.steps-wrap {
  width: 50%;
  height: 40px;
  line-height: 40px;
  margin: 20px auto 0;
}
</style>
