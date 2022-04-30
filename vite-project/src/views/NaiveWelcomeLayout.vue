<template>
  <n-layout class="font-transparent">
    <n-layout-header :style="headerHeight" bordered>
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
        <n-gi class="flex-right"  span="6">
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
            <n-button size="large" @click="login = true">注册</n-button>
            <!--注册 模态框-->
          <n-modal
              v-model:show="login"
              class="custom-card"
              :mask-closable="false"
              preset="card"
              :style="bodyStyle"
              title="注册"
              size="huge"
              :bordered="false"
              :segmented="segmented"
          >

            <!--<template #header>-->
            <!--  <LoginOutlined style="width: 32px;"></LoginOutlined>-->
            <!--</template>-->
            <n-space vertical size="large">
              <n-input v-model:value="value" type="text" placeholder="起一个酷酷的用户名" />
              <n-input
                  type="password"
                  show-password-on="mousedown"
                  placeholder="密码"
                  :maxlength="8"
              />
            </n-space>

            <template #footer>
              <n-space>
                <n-button>提交</n-button>
                <n-button>取消</n-button>
              </n-space>
            </template>
          </n-modal>
            <n-button type="success" size="large">登录</n-button>
        </n-gi>

        <n-gi  class="flex-right">

          <a href="https://worker.yuque.com/groups/cf4sta/join?token=kLnkxQZAXF0X8uCM# (成员)">
            <YuqueOutlined color="#28c772" style="width: 42px"></YuqueOutlined>
          </a>


        </n-gi>
      </n-grid>
      <n-grid>

      </n-grid>
    </n-layout-header>

    <n-layout-content :content-style="screenHeight">
      <!--<h1>AIL504实验小组</h1>-->
      <div style="height: 100%;display: flex;flex-direction: column;justify-content: center">
        <div style="display: flex;justify-content: center;">
          <LogoSvg></LogoSvg>
        </div>
        <div>
          <h1 style="font-size: 5em;">AIL504</h1>
        </div>
        <div>
          <p>释放你的创造力</p>
        </div>
      </div>

    </n-layout-content>

    <n-layout-footer bordered style="display: flex;flex-direction: column;justify-content: center;align-items: center;padding: 10px">
      <div>
        <p >坐标: 浙江科技学院实验大楼510</p>
      </div>
      <div style="margin-top: 5px">
        <p >创作者: <span style="color:#96e75f;font-weight: bold">程云来</span></p>
      </div>
    </n-layout-footer>
  </n-layout>
</template>

<script lang="ts">
import logoSvg from "../components/LogoSvg.vue";
import {ref} from "vue";
// 图标
import {YuqueOutlined} from "@vicons/antd"
import {LoginOutlined} from "@vicons/antd"

import { Icon } from '@vicons/utils'

export default {
  name: "NaiveLayout",
  components: {
    logoSvg,
    YuqueOutlined,
    Icon,
    LoginOutlined
  },
  setup () {
    return {
      bodyStyle: {
        width: '600px'
      },
      segmented: {
        content: 'soft',
        footer: 'soft'
      } as const,
      login: ref(false)
    }
  },
  data(){
    return{
      screenHeight:{
        height:this.changeScreenHeight()
      },
      headerHeight:{
        height:this.changeHeaderHeight()
      }
    }
  },
  mounted() {
    let that = this
    window.onresize = function (){
      // console.log(that.headerHeight)
      that.screenHeight = {
        height:that.changeScreenHeight()
      }
      that.headerHeight = {
        height:that.changeHeaderHeight()
      }
    }
  },
  methods:{
    changeScreenHeight(){
      return document.documentElement.clientHeight<800?document.documentElement.clientHeight*0.9+'px':document.documentElement.clientHeight*0.94+'px'
    },
    changeHeaderHeight(){
      return document.documentElement.clientHeight<800?document.documentElement.clientHeight*0.1+'px':document.documentElement.clientHeight*0.06+'px'
    }
  },
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

.welcome-content{
  text-align: center;
}

/*光标隐藏*/
.font-transparent{
  caret-color:transparent;
}

</style>