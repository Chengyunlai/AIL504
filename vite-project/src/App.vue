<script setup lang="ts">
import { darkTheme } from 'naive-ui'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import NaiveLayout from './views/NaiveWelcomeLayout.vue';
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <router-view></router-view>
  </n-config-provider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*min-height: 100vh;*/
  /*height: 100%;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
