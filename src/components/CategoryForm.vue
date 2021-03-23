<template>
  <a-form-model
    ref="ruleForm"
    :model="form"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-form-model-item label="标签ID" prop="id">
      <a-input :disabled="form.key ? true : false" v-model="form.id" />
    </a-form-model-item>
    <a-form-model-item label="标签名称" prop="name">
      <a-input v-model="form.name" />
    </a-form-model-item>
    <a-form-model-item label="所属子类目" prop="c_items">
      <a-select
        mode="tags"
        style="width: 100%"
        :token-separators="[',']"
        placeholder="选择所属子类目"
        v-model="form.c_items"
      ></a-select>
    </a-form-model-item>
  </a-form-model>
</template>
<script>

export default {
  props: {
    form: Object,
  },
  data() {
    return {
      labelCol: { span: 7 },
      wrapperCol: { span: 10 },
      rules: {
        id: [
          {
            required: true,
            message: '请输入标签ID',
            trigger: 'blur',
          },
        ],
        name: [
          {
            required: true,
            message: '请输入标签名称',
            trigger: 'blur',
          },
        ],
        c_items: [
          {
            required: true,
            message: '所属子类目不能为空',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  mounted() {
    // this.addRef.ruleForm = this.$refs.ruleForm;
    this.$store.commit('initCateAddForm', this.$refs.ruleForm);
  },
  methods: {},
};
</script>
