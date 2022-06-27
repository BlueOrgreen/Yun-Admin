<template>
  <div class="http404-container">
    <div class="http404">
      <div class="pic-404">
        <img
          class="pic-404-parent"
          src="src/assets/404_images/404.png"
          alt="404"
        />
        <img
          class="pic-404-child left"
          src="src/assets/404_images/404_cloud.png"
          alt="404"
        />
        <img
          class="pic-404-child mid"
          src="src/assets/404_images/404_cloud.png"
          alt="404"
        />
        <img
          class="pic-404-child right"
          src="src/assets/404_images/404_cloud.png"
          alt="404"
        />
      </div>
      <div class="bullshit">
        <div class="bullship-oops">Sorry!</div>

        <div class="bullshit-headline">{{ message }}</div>
        <div class="bullshit-info">
          检查输入网址是否正确, 或点击下方按钮返回首页
        </div>
        <a href=""></a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "404",
  computed: {
    message() {
      return "无法进入此页面";
    },
  },

  setup() {
    const router = useRouter();
    const routerBack = () => {
      router.push("https://baidu.com");
    };

    return {
      routerBack,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
