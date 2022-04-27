<template>
  <AdaptionView>
    <div class="large-screen-layout">
      <HeaderPanel />
      <MainPanel />
      <FooterPanel />
    </div>
  </AdaptionView>
</template>

<script>
import AdaptionView from "../../components/layout/AdaptionView.vue";
import HeaderPanel from "./components/HeaderPanel.vue";
import MainPanel from "./components/MainPanel.vue";
import FooterPanel from "./components/FooterPanel.vue";

export default {
  name: "Home",
  components: { AdaptionView, HeaderPanel, MainPanel, FooterPanel },
};
</script>

<style scoped lang="less" src="./styles.less"></style>
