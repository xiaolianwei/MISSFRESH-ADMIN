<template>
  <a-form-model
    ref="ruleForm"
    :model="form"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-form-model-item size="large" label="商品售价" prop="price">
      <a-input-number v-model="form.price" :min="0" />
    </a-form-model-item>
    <a-form-model-item label="商品折扣价" prop="price_off">
      <a-input-number v-model="form.price_off" :min="0" />
    </a-form-model-item>
    <a-form-model-item label="商品库存" prop="inventory">
      <a-input-number v-model="form.inventory" :min="0" />
    </a-form-model-item>
    <a-form-model-item label="计量单位" prop="unit">
      <a-input v-model="form.unit" />
    </a-form-model-item>
    <a-form-model-item label="商品相册" prop="images">
      <a-upload
        :action="
          'https://mallapi.duyiedu.com/upload/images?appkey=' +
          $store.state.userInfo.appkey
        "
        list-type="picture-card"
        :file-list="fileList"
        @preview="handlePreview"
        @change="handleChange"
        name="avatar"
      >
        <div v-if="fileList.length < 8">
          <a-icon type="plus" />
          <div class="ant-upload-text">Upload</div>
        </div>
      </a-upload>
      <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
        <img alt="example" style="width: 100%" :src="previewImage" />
      </a-modal>
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-checkbox :defaultChecked='true' @change="onChange"> 是否上架 </a-checkbox>
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button @click="prev"> 上一页 </a-button>
      <a-button style="margin-left: 10px" type="primary" @click="onSubmit">
        提交
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
export default {
  props: {
    form: Object,
  },
  data() {
    return {
      labelCol: { span: 7 },
      wrapperCol: { span: 10 },

      previewVisible: false,
      previewImage: '',
      fileList: [],
      rules: {
        price: [
          {
            required: true,
            message: '请输入商品售价',
            trigger: 'blur',
          },
        ],
        inventory: [
          {
            required: true,
            trigger: 'blur',
            validator: (rule, value, callback) => {
              const reg = /^\d+$/;
              if (!value) {
                return callback(new Error('请填写商品库存'));
              }
              if (!reg.test(value)) {
                return callback(new Error('库存的值应该为整数的数值'));
              }
              return callback();
            },
          },
        ],
        unit: [
          {
            required: true,
            message: '请输入商品计量单位',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  mounted() {
    if (this.form.images.length > 0) {
      this.fileList = this.form.images.map((url, i) => ({
        uid: i,
        name: `image_${i}.jpg`,
        url,
      }));
    }
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$emit('next', this.form);
          return true;
        }
        console.log('请正确填写表单数据');
        return false;
      });
    },
    prev() {
      this.$emit('prev');
    },

    handleCancel() {
      this.previewVisible = false;
    },
    async handlePreview(file) {
      const file2 = file;
      if (!file2.url && !file2.preview) {
        file2.preview = await getBase64(file2.originFileObj);
      }
      this.previewImage = file2.url || file2.preview;
      this.previewVisible = true;
    },
    handleChange({ fileList, file }) {
      this.fileList = fileList;
      if (file.status === 'done') {
        this.form.images.push(file.response.data.url);
      } else if (file.status === 'removed') {
        this.form.images = this.form.images.filter(
          (item) => item !== file.response.data.url,
        );
      }
    },

    onChange(e) {
      console.log(`checked = ${e.target.checked}`);
      this.form.status = e.target.checked ? 1 : 0;
    },
  },
};
</script>

<style lang="less" scoped>
.ant-input-number {
  width: 100% !important;
}

.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
