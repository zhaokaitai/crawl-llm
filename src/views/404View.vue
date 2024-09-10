<template>
    <div class="layout">
        <h2>Page Not Found</h2>
        <img src="../images/404.svg" alt="">
        <div>
            对不起，您访问的页面不存在
        </div>
        <div>
            请检查一下网址是否正确，或者点击logo返回首页
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.layout {
    text-align: center;

    img {
        width: 25vh;
        height: 25vh;
        margin: 5vh 0;
    }

    h2,
    div{
        margin-top: 10vh;
        margin-bottom: 0;
        color: #fff;
        text-align: center;
        font-family: 'lato', sans-serif;
        font-weight: bolder;
        font-size: 50px;
        letter-spacing: 10px;
        background: linear-gradient(white, #38495a);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }

    div{
        font-size: 24px;
        margin-top: 10px;
        font-weight: 400;
    }
}
</style>