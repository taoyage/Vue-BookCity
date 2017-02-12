<template>
    <section id="top-nav" class="top-nav">
        <div class="icon-back"></div>
        <div class="nav-title">返回</div>
    </section>
</template>
<script>
</script>
<style scoped>
    .top-nav {
        position: fixed;
        top: 0;
        height: 50px;
        width: 100%;
        z-index: 2;
        background: #000;
    }
    .icon-back{
    	position:absolute;
    	top:14px;
    	left:10px;
    	width:23px;
    	height:23px;
    	background:url(../assets/img/reader_back.png);
    	background-size:contain;
    }
    .nav-title{
    	position: absolute;
    	top:16px;
    	left:42px;
    	color:#d5d5d6;
    }
</style>
