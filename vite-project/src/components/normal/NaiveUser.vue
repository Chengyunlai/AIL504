<template>
<!--下拉菜单-->
  <n-dropdown trigger="click" :options="options" @select="handleSelect">
  <!--头像-->
      <n-avatar :size="39" src="../../../public/img/cheng.png"></n-avatar>
  </n-dropdown>
</template>

<script lang="ts">
export default {
  name: "NaiveUser"
}
</script>

<style scoped>

</style>