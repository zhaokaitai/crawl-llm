<template>
  <div class="layout">
    <div class="title">
      Crawl&LLM
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.layout {
  height: 100vh;
  overflow: hidden;

  .title {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    color: #fff;
    text-align: center;
    font-family: 'lato', sans-serif;
    font-weight: 300;
    font-size: 50px;
    letter-spacing: 10px;
    margin-top: -60px;
    margin-left: 10px;
    background: linear-gradient(white, #38495a);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
}
</style>