<template>
  <n-badge value="1">
    <n-icon-wrapper :size="38" :border-radius="10" color="gainsboro">
      <n-icon size="26" >
        <EmailOutlined/>
      </n-icon>
    </n-icon-wrapper>
  </n-badge>
</template>

<script>
import {EmailOutlined} from "@vicons/material"

export default {
  name: "NaiveEmail",
  components:{
    EmailOutlined
  }
}
</script>

<style scoped>
/deep/.n-badge-sup{
  bottom: calc(100% - 14px);
}
</style>