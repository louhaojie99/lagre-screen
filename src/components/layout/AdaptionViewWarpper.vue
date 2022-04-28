<template>
  <div class="adaption-view-warpper" :style="style">
    <slot />
  </div>
</template>

<script>
import { DefaultSize, debounce } from "./helpr.js";
const [uiWidth, uiHeight] = DefaultSize;

export default {
  name: "AdaptionViewWarpper",
  data() {
    return {
      style: {
        width: uiWidth + "px",
        height: uiHeight + "px",
        transform: "scale(1) translate(-50%, -50%)",
      },
    };
  },
  mounted() {
    this.setScale();
    window.addEventListener("resize", debounce(this.setScale, 300));
  },
  methods: {
    getScale() {
      // 固定好16:9的宽高比，计算出最合适的缩放比，宽高比可根据需要自行更改
      const w = window.innerWidth / uiWidth;
      const h = window.innerHeight / uiHeight;
      return w < h ? w : h;
    },
    // 设置比例
    setScale() {
      this.style.transform = `scale(${this.getScale()}) translate(-50%, -50%)`;
    },
  },
  beforeDestroy() {
    // 清除副作用
    window.removeEventListener("resize", debounce(this.setScale, 300));
  },
};
</script>

<style scoped src="./styles.less" />
