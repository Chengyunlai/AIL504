<template>
  <n-layout>
    <n-layout-header bordered>
      <n-grid style="height: 64px" x-gap="12" :cols="4">
        <n-gi>
          <!--logo-->
          <div class="light-green">
            <n-image
                width="64"
                src="img/logo-img.png"
                preview-disabled
            />
          </div>
        </n-gi>
        <n-gi>
          <div class="green">
            这里放跳转页面
          </div>
        </n-gi>
        <n-gi>
          <div class="light-green">
            这里放登录和注册
          </div>
        </n-gi>
        <n-gi>
          <div class="green">
            这里放GitHub/语雀的链接
          </div>
        </n-gi>
      </n-grid>
    </n-layout-header>
    <n-layout has-sider>
      <n-layout-sider bordered content-style="padding: 24px;">
        海淀桥
      </n-layout-sider>
      <n-layout-content content-style="padding: 24px;">
        <NaiveButton></NaiveButton>
      </n-layout-content>
    </n-layout>
    <n-layout-footer bordered>成府路</n-layout-footer>
  </n-layout>
</template>

<script>
export default {
  name: "NaiveLayout"
}
</script>

<style scoped>
.green{
  background-color: aquamarine;
}

.light-green{
  /*background-color: cadetblue;*/
}

</style>