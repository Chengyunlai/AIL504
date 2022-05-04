<template>
  <n-layout class="font-transparent">
    <el-affix :offset="0">
      <n-layout-header :style="headerHeight" bordered>
        <!--页头-->
        <NaiveRoomHeader>
          <template v-slot:info>
            <!--通知-->
            <NaiveNotify></NaiveNotify>
            <!--邮件-->
            <NaiveEmail></NaiveEmail>
            <!--头像-->
            <NaiveUser></NaiveUser>
          </template>
        </NaiveRoomHeader>
      </n-layout-header>
    </el-affix>


    <n-layout-content :content-style="screenHeight">
      <!--内容-->
      <NaiveRoomContent style="height: 100%"></NaiveRoomContent>
    </n-layout-content>

  </n-layout>
</template>

<script lang="ts">
import NaiveRoomHeader from "../components/naiveRoom/NaiveRoomHeader.vue";
import NaiveRoomContent from "@/components/naiveRoom/NaiveRoomContent.vue";
import {defineComponent} from "vue"

export default defineComponent({
  name: "NaiveRoom",
  components: {NaiveRoomContent, NaiveRoomHeader},
  data(){
    return{
      screenHeight:{
        height:this.changeScreenHeight()
      },
      headerHeight:{
        height:this.changeHeaderHeight()
      },
    }
  },
  methods:{
    changeScreenHeight():String{
      return document.documentElement.clientHeight<800?document.documentElement.clientHeight*0.9+'px':document.documentElement.clientHeight*0.94+'px'
    },
    changeHeaderHeight(){
      return document.documentElement.clientHeight<800?document.documentElement.clientHeight*0.1+'px':document.documentElement.clientHeight*0.06+'px'
    }
  }
})
</script>

<style scoped>
.font-transparent{
  caret-color:transparent;
}
</style>