<template>
    <div class="layout">
        <div class="card">
            <div class="card-header">
                基本信息
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col">头像</div>
                    <div class="col">aaa</div>
                </div>
                <div class="row">
                    <div class="col">用户名</div>
                    <div class="col">aaa</div>
                </div>
                <div class="row">
                    <div class="col">账号</div>
                    <div class="col">aaa</div>
                </div>
                <div class="row">
                    <div class="col">注册日期</div>
                    <div class="col">aaa</div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                我的积分
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col">本月已用积分</div>
                    <div class="col">300</div>
                </div>
                <div class="row">
                    <div class="col">本月总积分</div>
                    <div class="col">1300</div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                账号设置
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col">手机号码</div>
                    <div class="col">12345678901</div>
                </div>
                <div class="row">
                    <div class="col">邮箱</div>
                    <div class="col">116981151581</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>


</script>

<style lang="scss" scoped>
.layout {
    width: 80%;
    box-shadow: 0 0 5px #cacaca;
    padding: 20px;
    border-radius: 10px;

    .card {
        margin-top: 3vw;

        .card-header {
            color: #000;
            font-size: 1.2rem;
            font-weight: bold;
            border-bottom: 1px solid #000;
            padding-bottom: 5px;
        }

        .card-body {
            .row{
                margin: 10px 0;
                display: grid;
                grid-template-columns:1fr 4fr;
            }
        }
    }
}
</style>