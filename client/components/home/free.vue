<template>
    <section class="channel-group main-card">
        <div class="channel-group__header">
            <h2>限时免费</h2>
        </div>
        <ul class="book-table">
            <li v-for="(item,index) in FreeData" v-if="index < 6">
                <div class="u-book">
                    <div class="book-cover">
                        <img v-bind:src="item.data.cover">
                        <div class="u-tagRT free-fiction"></div>
                    </div>
                    <div class="book-info">
                        <h3 class="title">{{item.ad_name}}</h3>
                    </div>
                </div>
            </li>
        </ul>
        <a class="channel-group__footer" href="/free">查看更多&gt;&gt;</a>
    </section>
</template>
<script>
    export default{
        props:['FreeData']
    }
</script>
<style scoped>
    .channel-group {
        position: relative;
    }
    
    .main-card {
        background: #fff;
        border-bottom: 10px solid #f5f5f5;
    }
    
    .channel-group__header {
        position: relative;
        padding: 10px 14px;
        border-bottom: 1px solid #f0f0f0;
        border-left: 6px solid #ffab18;
    }
    
    .channel-group .book-table {
        padding: 13px 14px 5px;
        font-size: 0;
    }
    
    .book-table li {
        margin: 0 auto;
        width: 33.3%;
        display: inline-block;
        vertical-align: top;
        line-height: 1;
        margin-bottom: 8px;
    }
    
    .u-book {
        width: 86px;
        position: relative;
        overflow: hidden;
    }
    
    .book-cover {
        position: relative;
        width: 86px;
        height: 113px;
        background-color: #eeece9;
        box-shadow: 0px 6px 5px -3px;
        border: 1px solid #f0f0f0;
        overflow: hidden;
        border-bottom: none;
    }
    
    .book-cover img {
        width: 100%;
        height: 100%;
    }
    
    .book-info {
        padding-top: 8px;
    }
    
    .book-info .title {
        font-size: 13px;
        line-height: 1.4em;
        max-height: 2.8em;
        overflow: hidden;
        color: #8d8d8d;
        margin-bottom: 0px;
        font-weight: 400;
    }
    
    .u-tagRT {
        position: absolute;
        top: 0;
        right: 0;
        line-height: 1.4;
        background-color: #ef6c2c;
        color: #fff;
        width: 100%;
        font-size: 12px;
        text-align: center;
        -webkit-transform-origin: top center;
        -webkit-transform: translateX(50%) rotate(45deg) translateY(50%) scale(0.8);
    }
    
    .u-tagRT.free-fiction {
        background-color: #49ab3f;
    }
    
    .u-tagRT.free-fiction:before {
        content: '\9650\514d';
    }
    
    .channel-group__footer {
        display: block;
        padding: 14px 0;
        font: 13px/1.3em a;
        border-top: 1px solid #f0f0f0;
        text-align: center;
    }
</style>
