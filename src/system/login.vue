<template>
  <div class="login-container">
    <!-- <div class="title_name">
    </div> -->
    <div class="login-bg">
      <el-form
        :model="ruleForm2"
        :rules="rules2"
        status-icon
        ref="ruleForm2"
        label-position="left"
        label-width="0px"
        class="demo-ruleForm login-page"
      >
        <h3 class="title">系统登录</h3>
        <el-form-item prop="username">
          <el-input
            type="text"
            v-model="ruleForm2.username"
            auto-complete="off"
            placeholder="用户名"
          >
            <template slot="prepend"
              ><span class="fa fa-user fa-lg" style="width: 13px"></span
            ></template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="ruleForm2.password"
            auto-complete="off"
            placeholder="密码"
          >
            <template slot="prepend">
              <span
                class="fa fa-lock fa-lg"
                style="width: 13px;line-height:30px"
              ></span>
            </template>
            <template slot="suffix">
              <!-- <span
                class="password-eye"
                @click="showPassword"
                :class="eyeType"
              ></span
            > -->
            </template>
          </el-input>
        </el-form-item>
        <el-checkbox v-model="checked" class="rememberme">记住密码</el-checkbox>
        <el-form-item style="width:100%;">
          <el-button
            type="primary"
            style="width:100%;"
            @click="handleSubmit"
            :loading="logining"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { login } from "@/api/user";
export default {
  data() {
    return {
      logining: false,
      ruleForm2: {
        username: "",
        password: ""
      },
      rules2: {
        username: [
          {
            required: true,
            message: "please enter your account",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "enter your password", trigger: "blur" }
        ]
      },
      checked: false,
      pwdType: "password",
      eyeType: "fa fa-eye-slash fa-lg"
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    handleSubmit(event) {
      this.$refs.ruleForm2.validate(async valid => {
        if (valid) {
          this.logining = true;
          // eslint-disable-next-line no-unused-vars
          let data = this.ruleForm2;
          // console.log(data)
          // let res = await login(data)
          // console.log(res)
          // eslint-disable-next-line no-constant-condition
          if (this.ruleForm2.username == "admin") {
            sessionStorage.setItem("usertype", "admin");
          } else {
            sessionStorage.setItem("usertype", "user");
          }
          if (valid) {
            this.logining = false;
            sessionStorage.setItem("user", this.ruleForm2.username);
            this.$router.push({ path: "/" });
            if (this.rememberme) {
              this.setCookie(this.ruleForm2.username, this.ruleForm2.password);
            } else {
              this.deleteCookie();
            }
          } else {
            this.logining = false;
            this.$message("账户密码错误");
          }
        } else {
          console.log("error submit!");
          return false;
        }
      });
    },
    showPassword() {
      if (this.pwdType === "password") {
        this.pwdType = "";
        this.eyeType = "fa fa-eye fa-lg";
      } else {
        this.pwdType = "password";
        this.eyeType = "fa fa-eye-slash fa-lg";
      }
    },
    setCookie(name, pass, days) {
      let expire = new Date();
      expire.setDate(expire.getDate() + days);
      document.cookie = `C-username=${name};expires=${expire}`;
      document.cookie = `C-password=${pass};expires=${expire}`;
    },
    getCookie() {
      if (document.cookie.length) {
        let arr = document.cookie.split("; ");
        for (let i = 0; i < arr.length; i++) {
          let arr2 = arr[i].split("=");
          if (arr2[0] === "C-username") {
            this.ruleForm2.username = arr2[1];
          } else if (arr2[0] === "C-password") {
            this.ruleForm2.password = arr2[1];
            this.rememberme = true;
          }
        }
      }
    },
    // 修改为空，天数为-1
    deleteCookie() {
      this.setCookie("", "", -1);
    }
  },
  mounted() {
    this.getCookie();
  }
};
</script>

<style scoped>
.login-container {
  width: 100%;
  height: 100%;
  background: url("../assets/login.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
}
.title_name {
  width: 100%;
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.title_name span {
  color: #000;
  font-size: 40px;
}
.login-page {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  /* margin: 180px auto; */
  margin: 0 auto;
  width: 350px;
  padding: 35px 35px 15px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  position: fixed;
  left: 40%;
  top: 50%;
  transform: translateY(-50%);
}
label.el-checkbox.rememberme {
  margin: 0px 0px 15px;
  text-align: left;
}
.el-input__suffix-inner {
  margin-top: 10px;
}
</style>
