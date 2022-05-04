<template>
  <!--布局-->
    <n-grid item-responsive responsive="screen" cols="16" style="height: 100%;">
      <!--时间/气象-->
      <n-gi span="0 m:3 l:3" style="display: flex;justify-content: center;align-items:center;flex-direction: column">
        <n-time :time=myTime format="yyyy-MM-dd hh:mm:ss" />
        <!--<p>晴天</p>-->
        <!--使用图标代替，做判断-->
        <n-icon size="26" >
          <PartlySunnyOutline color="#34ceaa"/>
        </n-icon>
      </n-gi>
      <!--功能菜单-自定义-使用插槽-->
      <n-gi span="9 m:10 l:10">
        <slot name="menu"></slot>
      </n-gi>
      <!--通知-邮件-头像-->
      <n-gi span="7 m:3 l:3" style="display: flex;justify-content: center;align-items:center;padding-top: 6px;">
        <!--间距 中间对齐-->
        <n-space :size="40" style="width: 100% ">
          <slot name="info"></slot>
        </n-space>
      </n-gi>
    </n-grid>
</template>

<script>
import NaiveUser from "../normal/NaiveUser.vue";
import NaiveEmail from "@/components/normal/NaiveEmail.vue";
import NaiveNotify from "@/components/normal/NaiveNotify.vue";
import {PartlySunnyOutline} from "@vicons/ionicons5"
export default {
  name: "NaiveRoomHeader",
  components: {NaiveNotify, NaiveEmail, NaiveUser,PartlySunnyOutline},
  data(){
    return{
      myTime:new Date()
    }
  },
  mounted() {
    let that = this
    setInterval(function (){
      that.myTime = new Date()
    })
  }
}
</script>

<style scoped>

</style>