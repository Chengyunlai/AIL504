<template>
  <n-layout>
    <n-layout-header bordered>
      <n-grid style="height:60px" x-gap="12" :cols="4">
        <n-gi class="flex-right">
          <!--logo-->
          <!--<LogoSvg></LogoSvg>-->

          <n-image
              width="40"
              src="img/logo-img.png"
              preview-disabled
          />
          <p class="header-font">AIL504</p>
        </n-gi>
        <n-gi class="flex-right">
          <!--<p>智慧消防</p>-->
          <n-space justify="space-around" size="large">
            <n-button
                text
                tag="a"
                href="https://itifrd.top/home/"
                target="_blank"
                class="header-font"
                style="font-size: 1.15em"
            >
              项目
            </n-button>

            <n-button
                text
                tag="a"
                href="https://itifrd.top/home/"
                target="_blank"
                class="header-font"
                style="font-size: 1.15em"
            >
              实验室介绍
            </n-button>
          </n-space>

        </n-gi>
        <n-gi>
          <div class="light-green">
            <!--<p>登录</p>-->
            <!--<p>注册</p>-->
          </div>
        </n-gi>
        <n-gi>
          <div class="green">
            <!--这里放GitHub/语雀的链接-->
          </div>
        </n-gi>
      </n-grid>
    </n-layout-header>

    <n-layout-content content-style="display: flex;align-items:center;justify-content: center;flex-direction:column">
      <!--<h1>AIL504实验小组</h1>-->
      <LogoSvg></LogoSvg>
      <div>
        <h1 style="font-size: 5em">AIL504</h1>
      </div>
      <div>
        <p>活着就是为了改变世界，难道还有其他原因吗?</p>
      </div>

    </n-layout-content>

    <n-layout-footer bordered style="display: flex;justify-content: center;align-items: center">
      <div>
        <p >Location:浙江科技学院实验大楼510</p>
      </div>
    </n-layout-footer>
  </n-layout>
</template>

<script>
import logoSvg from "../components/LogoSvg.vue";

export default {
  name: "NaiveLayout",
  components: {
    logoSvg
  },
  created() {
    let height;
    height = screen.height * 0.8;
  //  改变n-layout-content的高度
    console.log(height)

  }
}

</script>

<style scoped>
.flex-right {
  /*line-height: 64px;*/
  margin-left: 40px;
  display: flex;
  align-items: center;
  /*justify-content: center;*/
}

.header-font {
  font-weight: bolder;
  font-size: 1.5em;
  margin-left: 10px
}

</style>