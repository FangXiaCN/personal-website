<template>
  <div class="login_container">
    <div class="login_box">
      <!--    头像区域-->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="">
      </div>
      <!--    登陆表单区域-->
      <el-form ref="loginFormRef" :model="loginForm" label-width="0px" class="login_form" :rules="loginFormRules">
        <!--        用户名区域-->
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="请输入内容"
            prefix-icon="el-icon-search">
          </el-input>
        </el-form-item>
        <!--        密码区域-->
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            type="password"
          >
          </el-input>
        </el-form-item>
        <!--      按钮区域-->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录
          </el-button>
          <el-button type="info" @click="resetloginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 这是登录表单的数据绑定数据
      loginForm: {
        username: '',
        password: ''
      },
      // 这是表单的验证对象
      loginFormRules: {
        //验证用户名是否合法
        username: [
          {required: true, message: '请输入登录名称', trigger: 'blur'},
          {min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur'}
        ],
        // 验证密码是否合法
        password: [
          {required: true, message: '请输入登录密码', trigger: 'blur'},
          {min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    //点击重置按钮，重置登录表单
    resetloginForm() {
      this.$refs.loginFormRef.resetFields();
    },
    login(){
      this.$refs.loginFormRef.validate(valid =>{
        if(!valid) return;
        Bmob.User.login(this.loginForm.username,this.loginForm.password).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        });
      });
    }
  }
};
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: #FFF;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #FFFFFF;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eeeeee;
    }
  }
}

.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;

}

.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
