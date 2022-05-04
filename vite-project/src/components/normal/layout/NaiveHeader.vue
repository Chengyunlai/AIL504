<template>
  <n-grid cols="15" style="height: 100%">
      <!--logo-->
      <n-gi style="display: flex;justify-content: center;align-items: center" span="3">
        <n-image
            width="40"
            src="img/logo-img.png"
            preview-disabled
        />
        <p class="header-font">AIL504</p>
      </n-gi>
      <!--项目-->
      <n-gi class="flex-right"  span="7">
        <!--<p>智慧消防</p>-->
        <n-space justify="space-around" size="large">
          <n-button
              text
              tag="a"
              href="https://itifrd.top/home/"
              target="_blank"
              class="header-font"
              style="font-size: 1.15em"
          >
            项目
          </n-button>

          <n-button
              text
              tag="a"
              href="https://itifrd.top/home/"
              target="_blank"
              class="header-font"
              style="font-size: 1.15em"
          >
            实验室介绍
          </n-button>
        </n-space>

      </n-gi>
      <!--登录注册-->
      <n-gi style="display: flex;justify-content: space-evenly;align-items: center" span="3">
        <n-button size="large" @click="this.sign = true">注册</n-button>
        <!--注册 模态框-->
        <n-modal
            v-model:show="sign"
            class="custom-card"
            :mask-closable="false"
            preset="card"
            :style="bodyStyle"
            title="注册"
            size="huge"
            :bordered="false"
            :segmented="segmented"
        >
          <n-form
              ref="formRef"
              :label-width="80"
              :model="signFormValue"
          >
            <n-form-item label="用户名" path="name">
              <n-input v-model:value="signFormValue.name" placeholder="输入姓名" />
            </n-form-item>
            <n-form-item  label="密码" path="password">
              <n-input type="password" v-model:value="signFormValue.age" placeholder="输入密码" />
            </n-form-item>
            <n-form-item label="电话号码" path="phone">
              <n-input v-model:value="signFormValue.phone" placeholder="电话号码" />
            </n-form-item>
            <n-form-item label="电子邮箱" path="email">
              <n-input v-model:value="signFormValue.email" placeholder="电子邮箱" />
            </n-form-item>
            <n-form-item>
              <n-button disabled attr-type="button">
                验证
              </n-button>
            </n-form-item>
          </n-form>

          <template #footer>
            <n-space>
              <n-button>提交</n-button>
              <n-button  @click="sign = false">取消</n-button>
            </n-space>
          </template>
        </n-modal>

        <n-button type="success" size="large" @click="this.login = true">登录</n-button>
        <!--登录模态框-->
        <n-modal
            v-model:show="login"
            class="custom-card"
            :mask-closable="false"
            preset="card"
            :style="bodyStyle"
            title="登录"
            size="huge"
            :bordered="false"
            :segmented="segmented"
        >
          <n-form
              ref="formRef"
              :label-width="80"
              :model="loginFormValue"
          >
            <n-form-item label="用户名" path="name">
              <n-input v-model:value="loginFormValue.name" placeholder="输入用户名" />
            </n-form-item>
            <n-form-item label="密码" path="user.age">
              <n-input  type="password" v-model:value="loginFormValue.age" placeholder="输入密码" />
            </n-form-item>
            <n-form-item>
              <n-button disabled attr-type="button">
                验证
              </n-button>
            </n-form-item>
          </n-form>

          <template #footer>
            <n-space>
              <n-button @click="loginSubmit">提交</n-button>
              <n-button  @click="login = false">取消</n-button>
            </n-space>
          </template>
        </n-modal>
      </n-gi>

      <n-gi  class="flex-right">
        <a href="https://worker.yuque.com/groups/cf4sta/join?token=kLnkxQZAXF0X8uCM# (成员)">
          <YuqueOutlined color="#28c772" style="width: 42px"></YuqueOutlined>
        </a>
      </n-gi>
    </n-grid>
</template>

<script lang="ts">
import {YuqueOutlined} from "@vicons/antd"
import {LoginOutlined} from "@vicons/antd"

import {ref} from "vue";

export default {
  name: "Header",
  setup () {
    return {
      bodyStyle: {
        width: '600px'
      },
      segmented: {
        content: 'soft',
        footer: 'soft'
      } as const,
      sign: ref(false),
      login: ref(false)
    }
  },
  components:{
    YuqueOutlined,
    LoginOutlined
  },
  data(){
    return{
      signFormValue:{
        name:'',
        password:'',
        phone:'',
        email:''
      },
      loginFormValue:{
        name:'',
        password:''
      }
    }
  },
  methods:{
    loginSubmit(){
      console.log(this.$https)
    }
  }

}
</script>

<style scoped>
.flex-right {
  /*line-height: 64px;*/
  margin-left: 40px;
  display: flex;
  align-items: center;
  /*justify-content: center;*/
}

.header-font {
  font-weight: bolder;
  font-size: 1.5em;
  margin-left: 10px
}
</style>