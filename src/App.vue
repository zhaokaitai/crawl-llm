<template>
  <div class="common-layout">
    <div class="layer1" v-show="store.getters.showHeader"></div>
    <div class="layer2" v-show="store.getters.showHeader"></div>
    <div class="layer3" v-show="store.getters.showHeader"></div>
    <el-container>
      <el-header v-show="store.getters.showHeader">
        <el-menu default-active="0" class="el-menu" mode="horizontal" :ellipsis="false" @select="handleSelect">
          <el-menu-item index="home">
            <img style="width: 100px" src="./images/element-plus-logo.svg" alt="logo" />
          </el-menu-item>
          <el-menu-item index="playground">Playground</el-menu-item>
          <el-menu-item index="buy">购买</el-menu-item>
          <el-menu-item index="console" v-show="store.getters.isLogin">控制台</el-menu-item>
          <el-menu-item index="my">
            <div class="avatar">
              <img v-if="store.getters.isLogin"
                src="https://c-ssl.dtstatic.com/uploads/blog/202304/15/20230415081411_f2e46.thumb.400_0.jpg" />
              <div v-else>登录</div>
            </div>
          </el-menu-item>
          <el-menu-item style="margin-left: -30px;" index="logout" v-show="store.getters.isLogin">退出登录</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer v-show="store.getters.showHeader">欢迎使用</el-footer>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import router from './router';
import store from './store';

const handleSelect = (key: string) => {
  if (key === 'logout') {
    store.commit('setIsLogin', false);
  } else {
    router.push({ name: key });
  }
}
</script>

<style lang="scss" scoped>
/*定义滚动条宽高及背景，宽高分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}

/*定义滚动条的轨道颜色、内阴影及圆角*/
::-webkit-scrollbar-track {
  border-radius: 4px;
  -webkit-box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.2);
  background-color: #1a1a1a;
}

/*定义滑块颜色、内阴影及圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background-color: #f3e0c7;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
}

/*定义滑块悬停变化颜色、内阴影及圆角*/
::-webkit-scrollbar-thumb:hover {
  background-color: #f0bf7e;
}

.common-layout {
  $background: v-bind("store.getters.background");

  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
  background: unquote($background);
  z-index: -999;

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
      z-index: -998;

      &::after {
        content: '';
        position: fixed;
        left: 0;
        top: 100vh;
        width: $size;
        height: $size;
        border-radius: inherit;
        box-shadow: inherit;
        z-index: inherit;
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
  position: sticky;
  top: 0;
  z-index: 1;

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
        border: 1px solid #828282;
        border-radius: 50%;
        width: 36px;
        height: 36px;
        align-items: center;
        justify-content: center;

        &:focus,
        &:hover {
          border-color: #f3e0c7;
        }

        img {
          width: inherit;
          height: inherit;
          border-radius: inherit;
        }
      }

      &.is-active {
        background: none;
        color: #f3e0c7 !important;
      }

      &:not(.is-disabled):focus,
      &:not(.is-disabled):hover {
        background: none;
        color: #f3e0c7 !important;
      }

      @for $i from 1 through 6 {
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

.el-footer{
  color: #fff;
  padding: 0 10vw;
  margin-top: 3vw;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
}
</style>
