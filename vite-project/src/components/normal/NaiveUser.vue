<template>
<!--下拉菜单-->
  <n-dropdown trigger="click" :options="options" @select="">
  <!--头像-->
      <n-avatar class="avatar-img" :size="37" src="../../../img/cheng.png"></n-avatar>
  </n-dropdown>
</template>

<script lang="ts">
import { h, defineComponent } from 'vue'
import type { Component } from 'vue'
import { NIcon } from 'naive-ui'
import {
  PersonCircleOutline as UserIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon
} from '@vicons/ionicons5'

const renderIcon = (icon: Component) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    })
  }
}

export default defineComponent({
  name: "NaiveUser",
  setup () {
    return {
      options: [
        {
          label: '用户资料',
          key: 'profile',
          icon: renderIcon(UserIcon)
        },
        {
          label: '编辑用户资料',
          key: 'editProfile',
          icon: renderIcon(EditIcon)
        },
        {
          label: '退出登录',
          key: 'logout',
          icon: renderIcon(LogoutIcon)
        }
      ]
    }
  }
})
</script>

<style scoped>
 /deep/img {
   cursor: pointer;
 }
</style>