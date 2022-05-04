<template>
  <n-layout has-sider>
    <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="120"
        :collapsed="collapsed"
        show-trigger
        @collapse="collapsed = true"
        @expand="collapsed = false"
    >
      <n-menu
          :collapsed="collapsed"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
      />
    </n-layout-sider>
    <n-layout>
      <router-view></router-view>
    </n-layout>
  </n-layout>
</template>

<script lang="ts">
import type {MenuOption } from 'naive-ui'
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  HomeOutline as HomeIcon,
  BulbOutline as BulbIcon,
  CalendarNumberOutline as CalendarIcon
} from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import {h,ref,defineComponent,Component} from "vue";
import { RouterLink } from 'vue-router'

function renderIcon (icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
  {
    label: () =>
        h(
            RouterLink,
            {
              to: {
                name: 'home',
                params: {
                  lang: 'zh-CN'
                }
              }
            },
            { default: () => '首页' }
        ),
    key: 'go-to-home',
    icon:renderIcon(HomeIcon)
  },
  {
    key: 'divider-1',
    type: 'divider',
    props: {
      style: {
        // marginLeft: '19px'
        background:'lightgreen'
      }
    }
  },
  {
    label: () =>
        h(
            RouterLink,
            {
              to: {
                name: 'project',
                params: {
                  lang: 'zh-CN'
                }
              }
            },
            { default: () => '项目' }
        ),
    key: 'go-to-project',
    icon:renderIcon(BulbIcon)
  },
  {
    label: () =>
        h(
            RouterLink,
            {
              to: {
                name: 'home',
                params: {
                  lang: 'zh-CN'
                }
              }
            },
            { default: () => '计划' }
        ),
    key: 'go-to-scheme',
    icon:renderIcon(CalendarIcon)
  },
]

export default defineComponent({
  name: "NaiveRoomContent",
  setup(){
    return {
      //属性 collapsed , menuOptions
      collapsed: ref(true),
      menuOptions,
    }
  }
})
</script>

<style scoped>

</style>