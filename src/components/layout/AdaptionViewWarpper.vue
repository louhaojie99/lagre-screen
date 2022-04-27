<template>
  <div class="adaption-view-warpper" :style="scaleStyle">
    <slot />
  </div>
</template>

<script>
import { selectedDefaultSize, debounce } from "./helpr.ts";

export default {
  name: "AdaptionViewWarpper",
  props: {
    width: {
      type: Number,
      default: selectedDefaultSize.at(0),
    },
    height: {
      type: Number,
      default: selectedDefaultSize.at(1),
    },
  },
  data() {
    return {
      scale: this.getScale(),
    };
  },
  computed: {
    scaleStyle() {
      return {
        width: this.width + "px",
        height: this.height + "px",
        transform: `scale(${this.scale}) translate(-50%, -50%)`,
        "-webkit-transform": `scale(${this.scale}) translate(-50%, -50%)`,
      };
    },
  },
  mounted() {
    this.getScale();
    window.addEventListener("resize", this.setScale);
  },
  methods: {
    getScale() {
      // 固定好16:9的宽高比，计算出最合适的缩放比，宽高比可根据需要自行更改
      console.log(window.innerWidth, "window.innerWidth");
      let ww = window.innerWidth / this.width;
      let wh = window.innerHeight / this.height;
      return ww < wh ? ww : wh;
    },
    // 设置「缩放」比例
    setScale: debounce(function () {
      // 获取到缩放比，设置它
      this.scale = this.getScale();
    }, 500),
  },
  beforeDestroy() {
    // 清除副作用
    window.addEventListener("resize", this.setScale);
  },
};
</script>

<style scoped src="./styles.less" />
