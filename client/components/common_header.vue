<template>
    <section class="top">
        <a class="top__back" href="javascript:"></a>
        <span class="top__title">{{title}}</span>
        <a class="header-home" href="javascript:"></a>
    </section>
</template>
<script>
    export default {
        props:{
            title:{
                type:String
            }
        }
    }
</script>
<style scoped>
    .top {
        position: relative;
        height: 44px;
        border-bottom: 1px solid #ddd;
        font: 15px/45px a;
        color: rgba(0, 0, 0, 0.7);
        background-color: #efeff0;
    }
    
    .top__back {
        float: left;
        width: 42px;
        height: 44px;
    }
    
    .top__back:before {
        content: '';
        display: block;
        margin: 15px 0 0 16px;
        width: 10px;
        height: 16px;
        background: url(../assets/img/back.png) no-repeat;
        background-size: 10px 16px;
    }
    
    .header-home {
        float: right;
        width: 44px;
        height: 44px;
        background: url(../assets/img/backhome.png) no-repeat center;
        background-size: 16px;
    }
</style>
