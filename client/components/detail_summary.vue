<template>
    <section class="main-card">
        <div class="book-dash">
            <div class="wrap">
                <ul class="btn-group">
                    <li class="u-btn2">
                        <router-link :to="{name:'reader',params:'book.id'}" class="book-dash-text">开始阅读</router-link>
                    </li>
                    <li>
                        <a href="javascript:" class="u-btn3">购买</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="u-folder">
            <div class="folder-cnt" style="-webkit-box-orient: vertical;">
                {{book.content}}
            </div>
            <div class="folder-tail">最新:{{book.latest}}</div>
        </div>
    </section>
</template>
<script>
    export default {
        props: ['book']
    }
</script>
<style scoped>
    .main-card {
        border-bottom: 10px solid #f5f5f5;
        margin-top: -10px;
        background: #fff;
    }
    
    .book-dash .wrap {
        padding: 0 14px;
        margin: 0 0 27px;
    }
    
    .wrap .btn-group {
        width: 100%;
        font-size: 0;
        white-space: nowrap;
    }
    
    .wrap .btn-group li {
        display: inline-block;
        width: 49%;
    }
    
    .btn-group li:first-child {
        margin-right: 2%;
    }
    
    .u-btn2 {
        background: #f35d02;
        border: 1px solid #e35109;
        color: #fff;
        padding: 0 10px;
        height: 2.8em;
        line-height: 2.8em;
        text-align: center;
        border-radius: 4px;
        font-size: 14px;
        -webkit-box-sizing: border-box;
    }
    .u-btn2>a{
        color:#fff;
    }
    
    .u-btn3 {
        display: block;
        height: 2.8em;
        line-height: 2.8em;
        text-align: center;
        color: #737373;
        border: 1px solid #ddd;
        background: #fff;
        border-radius: 4px;
        font-size: 14px;
        -webkit-box-sizing: border-box;
        position: relative;
    }
    
    .folder-cnt {
        display: -webkit-box;
        text-overflow: ellipsis;
        overflow: hidden;
        -webkit-line-clamp: 5;
        position: relative;
        line-height: 1.6;
        padding: 0 14px;
        margin-bottom: 10px;
        font-size: 14px;
        color: #585858;
    }
    
    .folder-tail {
        text-align: center;
        font-size: 14px;
        border-top: 1px solid #f0f0f0;
        color: #8d8d8d;
        padding: 10px 14px;
    }
</style>
