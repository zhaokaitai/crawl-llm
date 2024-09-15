<template>
  <div class="layout">
    <h1>Playground</h1>
    <p>你可以轻松从任何网站抓取到干净的数据，然后用AI对这些数据进行智能处理。而且，整个过程是开源的，意味着你不仅可以自由使用，还能根据需要进行修改和优化，非常灵活方便。</p>
    <div class="main">
      <el-input v-model="inputURL" placeholder="https://example.com" clearable>
        <template #prepend>URL</template>
      </el-input>
      <el-input v-model="inputPrompt" placeholder="提示词之间请使用英文逗号隔开" clearable>
        <template #prepend>提示词</template>
      </el-input>
      <el-button color="orange" :disabled="inputURL === ''">立即开始</el-button>
    </div>
    <el-card>
      <template #header>
        <div class="card-title">{{ cardTitle }}</div>
        <div class="card-title2">{{ cardTitle }}</div>
      </template>
      <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="Markdown" name="markdown">
          <div class="text" v-html="markdown.replace(/\n/gm, '<br>')" />
        </el-tab-pane>
        <el-tab-pane label="Json Response" name="json">
          <pre class="text json">{{ json }}</pre>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputURL = ref('');
const inputPrompt = ref('');
const cardTitle = ref('Card Title');
const activeName = ref('markdown');
const markdown = ref('Lorem\nipsum dolor sit,\n amet consectetur adipisicing elit.\n Maxime rerum commodi eligendi, dolore accusamus enimipsum ab ullam architecto sit doloremque.Porro distinctio alias fugiat quasi, necessitatibus nulla architecto vero eveniet sunt quo ? Animi quod soluta consequatur asperiores labore.Accusamus dolorem accusantium a voluptatem soluta at quidem voluptas aliquid quo quod.In autem quibusdam illo possimus voluptate porro. Iure omnis aut impedit incidunt officia saepe facilis commodi nulla dolor.Numquam unde beatae quae quo cum porro perspiciatis incidunt magnam tenetur dolore eius laborum perferendis ex, tempora dolores explicabo officia quis sapiente.Optio quisquam veritatis ex hic cum corporis aut.Soluta facilis sequi quas doloribus, ullam neque dignissimos perspiciatis debitis.Porro fugiat, blanditiis facere ullam et repudiandae ea non, quae magnam sint, ipsa aliquam ? aiohfguhfas uaiohrg uaiophfdsg apguohii aguropih apohuigtar98h  pu8hag 98hag gha89-rw a89rwe-hg aqrw8e-90hygw9e8qahgunt officia saepe facilis commodi nulla dolor.Numquam unde beatae quae quo cum porro perspiciatis incidunt magnam tenetur dolore eius laborum perferendis ex, tempora dolores explicabo officia quis sapiente.Optio quisquam veritatis ex hic cum corporis aut.Soluta facilis sequi quas doloribus, ullam neque dignissimos perspiciatis debitis.Porro fugiat, blanditiis facere ullam et repudiandae ea non, quae magnam sint, ipsa aliquam ? aiohfguhfas uaiohrg uaiophfdsg apguohii aguropih apohuigtar98h  pu8hag 98hag gha89-rw a89rwe-hg aqrw8e-90hygw9e8qahgunt officia saepe facilis commodi nulla dolor.Numquam unde beatae quae quo cum porro perspiciatis incidunt magnam tenetur dolore eius laborum perferendis ex, tempora dolores explicabo officia quis sapiente.Optio quisquam veritatis ex hic cum corporis aut.Soluta facilis sequi quas doloribus, ullam neque dignissimos perspiciatis debitis.Porro fugiat, blanditiis facere ullam et repudiandae ea non, quae magnam sint, ipsa aliquam ? aiohfguhfas uaiohrg uaiophfdsg apguohii aguropih apohuigtar98h  pu8hag 98hag gha89-rw a89rwe-hg aqrw8e-90hygw9e8qahgunt officia saepe facilis commodi nulla dolor.Numquam unde beatae quae quo cum porro perspiciatis incidunt magnam tenetur dolore eius laborum perferendis ex, tempora dolores explicabo officia quis sapiente.Optio quisquam veritatis ex hic cum corporis aut.Soluta facilis sequi quas doloribus, ullam neque dignissimos perspiciatis debitis.Porro fugiat, blanditiis facere ullam et repudiandae ea non, quae magnam sint, ipsa aliquam ? aiohfguhfas uaiohrg uaiophfdsg apguohii aguropih apohuigtar98h  pu8hag 98hag gha89-rw a89rwe-hg aqrw8e-90hygw9e8qahg');
const json = ref('{"key":{"value1":"value1738drtjhredthjreshrw5h4tw4auoifhgdoau8igh8o7ah84r7eha78eghr8a9egh7r9oae7ghr87409q3h","value2":"value2"}}');
json.value = JSON.stringify(JSON.parse(json.value), null, 2);

</script>

<style lang="scss" scoped>
.layout {
  height: auto;
  width: 75vw;
  overflow: hidden;
  text-align: center;
  padding-top: 30px;
  color: #fff;
  font-family: 'lato', sans-serif;

  h1 {
    font-weight: bolder;
    font-size: 2em;
  }

  p {
    color: #c8c8c8;
    margin: -10px auto 0;
    width: 55%;
    text-indent: 2em;
    text-align: justify;
    font-family: "宋体";
    line-height: 1.7em;
  }

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 3vw;

    .el-input-group {
      width: 40vw;
    }

    .el-button,
    .el-input-group {
      height: 40px;
      margin-bottom: 2vw;
    }

    .el-button {
      font-weight: bolder;
      color: #fff;
    }
  }

  .el-card {
    --el-card-border-color: #fff;
    max-width: 60vw;
    margin: 0 auto;

    .el-card__header {

      .card-title,
      .card-title2 {
        text-align: left;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .card-title {
        font-weight: bolder;
        font-size: 1.2em;
      }

      .card-title2 {
        font-size: 1em;
      }
    }

    .el-card__body {
      .el-tabs {
        --el-color-primary: orange;

        ::v-deep .text {
          height: 30vw;
          overflow: auto;
          text-align: left;
          word-break: keep-all;
          font-family: 'lato', sans-serif;
          margin: 0;
          padding: 10px;
          background-color: #fffbf1;
          border-radius: 5px;

          &.json{
            word-break: normal;
          }

          /*定义滚动条宽高及背景，宽高分别对应横竖滚动条的尺寸*/
          &::-webkit-scrollbar {
            width: 7px;
            height: 7px;
          }

          /*定义滚动条的轨道颜色、内阴影及圆角*/
          &::-webkit-scrollbar-track {
            border-radius: 4px;
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
            background-color: #f1f1f1;
          }

          /*定义滑块颜色、内阴影及圆角*/
          &::-webkit-scrollbar-thumb {
            border-radius: 8px;
            background-color: #f3e0c7;
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
          }

          /*定义滑块悬停变化颜色、内阴影及圆角*/
          &::-webkit-scrollbar-thumb:hover {
            background-color: #f0bf7e;
          }
        }
      }
    }
  }
}
</style>