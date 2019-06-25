<template>
  <div id="login">
    <mt-field label="用户名" placeholder="手机号/邮箱" v-model="username"></mt-field>
    <mt-field label="密码" placeholder="6-12位字母数字" type="password" v-model="password"></mt-field>
    <mt-button type="default" @click="login">登录</mt-button>
  </div>
</template>

<script>
import { Toast, MessageBox } from "mint-ui";
import { userInfo, register } from "../api";
import qs from "qs";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      if (this.username == "") {
        Toast("用户名不合法");
        return;
      } else if (this.username != "") {
        if (
          /^1[3-578]\d{9}$/.test(this.username) ||
          /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(
            this.username
          )
        ) {
          if (this.password == "") {
            Toast("密码不合法");
            return;
          } else if (this.passWord != "") {
            if (
              /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/.test(this.password)
            ) {
              userInfo({
                userName: this.username,
                passWord: this.password
              }).then(res => {
                if (res.status == 0) {
                  this.$router.push({path: "/home"});
                }else if (res.status == 1) {
                  MessageBox.confirm("注册并且登录?")
                    .then(action => {
                      register({
                        userName: this.username,
                        passWord: this.password
                      }).then(res => {
                        if(res.status == 0) {
                          this.$router.push({path: "/home"});
                        }
                      });
                    })
                    .catch(() => {
                      alert(2)
                    });
                }
              });
            } else {
              Toast("密码不合法");
              return;
            }
          }
        } else {
          Toast("用户名不合法");
          return;
        }
      }
    }
  }
};
</script>

<style lang="less">
#login {
  height: 100%;
  padding: 0 4vw;
  padding-top: 15vh;
  // font-size: 16px;
  background: url("../assets/img/bg.jpg")no-repeat;
  background-size: 100% 100%;
}
.mint-button {
  width: 100%;
  margin-top: 50px;
}
.mint-cell {
  border-top: 3px solid #eee !important;
  background-color: transparent;
  color: #fff;
  input {
    background: transparent;
    color: #fff;
  }
  ::-webkit-input-placeholder {
    color: #fff;
    // font-size: .5em;
  }
  .mint-field-clear {
    // opacity: 1;
  }
}
</style>
