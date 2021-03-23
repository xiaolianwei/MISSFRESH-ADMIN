<template>
  <div class="login">
    <a-form-model
      ref="loginFrom"
      :model="loginFrom"
      :rules="rules"
      v-bind="layout"
      class="login-from"
    >
      <a-form-model-item has-feedback required label="邮箱" prop="email">
        <a-input v-model="loginFrom.email" placeholder="Email" />
      </a-form-model-item>
      <a-form-model-item has-feedback required label="密码" prop="password">
        <a-input
          v-model="loginFrom.password"
          type="password"
          autocomplete="off"
          placeholder="Password"
        />
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="submitForm('loginFrom')">
          登录
        </a-button>
        <a-button style="margin-left: 10px" @click="resetForm('loginFrom')">
          注册
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
import user from '@/api/user';
import { setCookie } from '@/utils/cookie';

export default {
  data() {
    const emailReg = /^[\w-]+@[\w-.]+.com$/;
    const checkEmail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('邮箱不能为空'));
      }
      if (emailReg.test(value)) {
        callback();
      }
      return callback(new Error('邮箱格式不正确'));
    };
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('密码不能为空'));
      }
      return callback();
    };
    return {
      loginFrom: {
        email: '',
        password: '',
      },
      rules: {
        password: [{ validator: validatePass, trigger: 'blur' }],
        email: [{ validator: checkEmail, trigger: 'blur' }],
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          user.login(this.loginFrom).then((res) => {
            console.log(res);
            this.$store.commit('initUserInfo', res);
            setCookie(res);
            this.$router.push({ name: 'Home' });
          }).catch((error) => {
            this.$message.error(error);
          });
          return true;
        }
        console.log('error submit!!');
        return false;
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less">
@import url("~@/assets/css/login.less");
</style>
