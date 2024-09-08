<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
          @select="handleSelect">
          <el-tooltip content="首页" placement="bottom" effect="light">
            <el-menu-item index="home">
              <img style="width: 100px" src="./images/element-plus-logo.svg" alt="logo" />
            </el-menu-item>
          </el-tooltip>
          <el-menu-item index="playground">Playground</el-menu-item>
          <el-menu-item index="buy">购买</el-menu-item>
          <el-menu-item index="console">控制台</el-menu-item>
          <el-tooltip content="我的" placement="bottom" effect="light">
            <el-menu-item index="my">
              <div class="avatar">
                <el-avatar src="https://c-ssl.dtstatic.com/uploads/blog/202304/15/20230415081411_f2e46.thumb.400_0.jpg">
                  {{ avatarText }}
                </el-avatar>
              </div>
            </el-menu-item>
          </el-tooltip>
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
  router.push({ name: key });
}
</script>

<style lang="scss" scoped>
:root {
  --el-color-primary: #000;
}

.common-layout {
  background: #fff;
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
      color: gray;

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
      }

      &:not(.is-disabled):focus,
      &:not(.is-disabled):hover {
        background: none;
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
  --el-main-padding: 30px 10vw;
  display: flex;
  justify-content: center;
}
</style>
