<template>
  <n-badge value="1" style="">
    <n-icon-wrapper :size="38" :border-radius="10" color="gainsboro">
      <n-icon size="26" >
        <BellOutlined/>
      </n-icon>
    </n-icon-wrapper>
  </n-badge>
</template>

<script>
import {BellOutlined} from "@vicons/antd"
export default {
  name: "NaiveNotify",
  components:{
    BellOutlined
  }
}
</script>

<style scoped>
/deep/.n-badge-sup{
  bottom: calc(100% - 14px);
}
</style>