<template>
  <n-layout has-sider>
    <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="180"
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
          :render-label="renderMenuLabel"
          :render-icon="renderMenuIcon"
          :expand-icon="expandIcon"
      />
    </n-layout-sider>
    <n-layout>
      <router-view></router-view>
    </n-layout>
  </n-layout>
</template>

<script lang="ts">
import type {MenuOption } from 'naive-ui'
import { BookmarkOutline, CaretDownOutline } from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import {h,ref,defineComponent} from "vue";

const menuOptions: MenuOption[] = [
  {
    label: '项目板块',
    key: 'project-plate',
    href: '/#/room'
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    disabled: true,
    children: [
      {
        label: '鼠',
        key: 'rat'
      }
    ]
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
    disabled: true
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator'
          },
          {
            label: '羊男',
            key: 'sheep-man'
          }
        ]
      },
      {
        label: '饮品',
        key: 'beverage',
        children: [
          {
            label: '威士忌',
            key: 'whisky',
            href: 'https://baike.baidu.com/item/%E5%A8%81%E5%A3%AB%E5%BF%8C%E9%85%92/2959816?fromtitle=%E5%A8%81%E5%A3%AB%E5%BF%8C&fromid=573&fr=aladdin'
          }
        ]
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich'
          }
        ]
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
  }
]

export default defineComponent({
  name: "NaiveRoomContent",
  setup(){
    return {
      //属性 collapsed , menuOptions
      collapsed: ref(true),
      menuOptions,
      renderMenuLabel (option: MenuOption) {
        if ('href' in option) {
          return h(
              'a',
              { href: option.href},
              option.label as string
          )
        }
        return option.label as string
      },
      renderMenuIcon (option: MenuOption) {
        // 渲染图标占位符以保持缩进
        if (option.key === 'sheep-man') return true
        // 返回 falsy 值，不再渲染图标及占位符
        if (option.key === 'food') return null
        return h(NIcon, null, { default: () => h(BookmarkOutline) })
      },
      expandIcon () {
        return h(NIcon, null, { default: () => h(CaretDownOutline) })
      }
    }
  }
})
</script>

<style scoped>

</style>