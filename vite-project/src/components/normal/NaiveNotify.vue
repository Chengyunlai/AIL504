<template>
  <n-badge value="1">
    <n-icon-wrapper :size="38" :border-radius="10" color="whitesmoke">
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

</style>