<template>
  <div class="common-layout">
    <div class="layer1"></div>
    <div class="layer2"></div>
    <div class="layer3"></div>
    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
          @select="handleSelect">
          <el-menu-item index="home">
            <img style="width: 100px" src="./images/element-plus-logo.svg" alt="logo" />
          </el-menu-item>
          <el-menu-item index="playground">Playground</el-menu-item>
          <el-menu-item index="buy">购买</el-menu-item>
          <el-menu-item index="console">控制台</el-menu-item>
          <el-menu-item index="my">
            <div class="avatar">
              <el-avatar src="https://c-ssl.dtstatic.com/uploads/blog/202304/15/20230415081411_f2e46.thumb.400_0.jpg">
                {{ avatarText }}
              </el-avatar>
            </div>
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import router from './router';

const activeIndex = ref('0')
const avatarText = ref('登录')


const handleSelect = (key: string) => {
  if (key === 'console') {
    console.log('跳转控制台');
  } else {
    router.push({ name: key });
  }
}
</script>

<style lang="scss" scoped>
.common-layout {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);

  @function getShadows($n) {
    $shadows: '#{random(100)}vw #{random(100)}vh #fff';

    @for $i from 2 through $n {
      $shadows: '#{$shadows}, #{random(100)}vw #{random(100)}vh #fff';
    }

    @return unquote($shadows);
  }

  $duration: 400s;
  $count: 1000;

  @for $i from 1 through 3 {
    $duration: floor($duration / 2);
    $count: floor($count / 2);

    .layer#{$i} {
      $size: #{$i}px;

      position: fixed;
      width: $size;
      height: $size;
      border-radius: 50%;
      background: red;
      left: 0;
      top: 0;
      box-shadow: getShadows($count);
      animation: moveUp $duration linear infinite;

      &::after {
        content: '';
        position: fixed;
        left: 0;
        top: 100vh;
        width: $size;
        height: $size;
        border-radius: inherit;
        box-shadow: inherit;
      }
    }
  }

  @keyframes moveUp {
    100% {
      transform: translateY(-100vh);
    }
  }
}

.el-header {
  --el-header-padding: 0 10vw;
  font-weight: bolder;

  .el-menu--horizontal {
    --el-menu-horizontal-height: 100px;

    &.el-menu {
      border: none;
    }

    .el-menu-item {
      color: #fff;
      background: linear-gradient(white, #38495a);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;

      .avatar {
        display: flex;

        div {
          flex: 1;
          text-align: center;
        }

        div:not(:last-child) {
          border-right: 1px solid var(--el-border-color);
        }
      }

      &.is-active {
        background: none;
        color: #fff !important;
      }

      &:not(.is-disabled):focus,
      &:not(.is-disabled):hover {
        background: none;
        color: #fff !important;
      }

      @for $i from 1 through 5 {
        &:nth-child(#{$i}) {
          &.is-active {
            border-bottom: 2px solid transparent;
          }
        }
      }

      &:nth-child(3) {
        margin-right: auto;
      }
    }
  }

  .el-menu {
    background-color: transparent;
  }
}

.el-main {
  --el-main-padding: 0;
  display: flex;
  justify-content: center;
}
</style>
