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
            <n-button size="large">注册</n-button>
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

<script>
import logoSvg from "../components/LogoSvg.vue";
// import {ref, onMounted} from "vue";
import {YuqueOutlined} from "@vicons/antd"
import { Icon } from '@vicons/utils'

export default {
  name: "NaiveLayout",
  components: {
    logoSvg,
    YuqueOutlined,
    Icon
  },
  data(){
    return{
      screenHeight:{
        height:document.documentElement.clientHeight<800?document.documentElement.clientHeight*0.9+'px':document.documentElement.clientHeight*0.94+'px'
      },
      headerHeight:{
        height:document.documentElement.clientHeight<800?document.documentElement.clientHeight*0.1+'px':document.documentElement.clientHeight*0.06+'px',
      }
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

.welcome-content{
  text-align: center;
}

/*光标隐藏*/
.font-transparent{
  caret-color:transparent;
}

</style>