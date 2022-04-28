<template>
  <AdaptionViewWarpper>
    <div class="large-screen-layout">
      <HeaderPanel />
      <MainPanel />
      <FooterPanel />
    </div>
  </AdaptionViewWarpper>
</template>

<script>
import AdaptionViewWarpper from "@/components/layout/AdaptionViewWarpper.vue";
import HeaderPanel from "./components/HeaderPanel.vue";
import MainPanel from "./components/MainPanel.vue";
import FooterPanel from "./components/FooterPanel.vue";

export default {
  name: "Home",
  components: {
    AdaptionViewWarpper,
    HeaderPanel,
    MainPanel,
    FooterPanel,
  },
};
</script>

<style scoped lang="less" src="./styles.less"></style>
