<template>
  <n-layout class="font-transparent">
    <el-affix>
    <n-layout-header :style="headerHeight" bordered>
        <!--页头-->
        <NaiveHeader></NaiveHeader>
    </n-layout-header>
    </el-affix>


    <n-layout-content :content-style="screenHeight">
      <!--内容-->
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
      <!--页脚-->
      <NaiveFooter></NaiveFooter>
    </n-layout-footer>
  </n-layout>
</template>

<script lang="ts">
// 组件导入
import LogoSvg from "../components/naiveWelcomeLayout/LogoSvg.vue";
import NaiveHeader from "../components/normal/layout/NaiveHeader.vue";
import NaiveFooter from "../components/normal/layout/NaiveFooter.vue"

import {ref} from "vue";
// 图标
import {YuqueOutlined} from "@vicons/antd"
import {LoginOutlined} from "@vicons/antd"
import { Icon } from '@vicons/utils'

export default {
  name: "NaiveLayout",
  components: {
    LogoSvg,
    YuqueOutlined,
    Icon,
    LoginOutlined,
    NaiveHeader,
    NaiveFooter
  },
  data(){
    return{
      screenHeight:{
        height:this.changeScreenHeight()
      },
      headerHeight:{
        height:this.changeHeaderHeight()
      },
      formValue:{
        user:{
          name:'',
          age:''
        },
        phone:'',
        email:''
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
    },
    handleValidateClick(){
      //验证数据是否合法
      console.log(JSON.stringify(this.formValue))
    }
  },
}

</script>

<style scoped>
/*光标隐藏*/
.font-transparent{
  caret-color:transparent;
}
</style>