<template>
    <section class="main-card">
        <div class="u-book detail">
            <div class="book-cover">
                <img :src="book.cover">
            </div>
            <div class="info">
                <h3 class="title">{{book.title}}</h3>
                <p class="author">
                    <span class="author">{{book.authors}}</span>
                </p>
                <div class="u-grade">
                    <span class="read">{{book.score_count}}个评价</span>
                </div>
                <div class="price">价格：{{book.price}}书币/千字</div>
                <p class="count">
                    字数:{{book.word_count}}字
                    <span class="u-booktag" v-if="book.finish">已完结</span>
                    <span class="u-booktag" else-if>连载中</span>
                </p>
            </div>
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
    }
    
    .u-book {
        position: relative;
        overflow: hidden;
        font-size: 12px;
    }
    
    .u-book.detail {
        padding: 30px 20px 30px 30px;
        display: table;
        width: 100%;
        box-sizing: border-box;
    }
    
    .u-book.detail .book-cover {
        position: relative;
        background: #eeece9;
        box-shadow: 0px 6px 5px -3px #aaa;
        border: 1px solid #f0f0f0;
        border-bottom: none;
        overflow: hidden;
        width: 93px;
        height: 124px;
        margin-right: -10px;
        float: left;
    }
    
    .book-cover:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    
    .book-cover img {
        width: 100%;
        height: 100%;
    }
    
    .u-book.detail .info {
        padding: 0;
        display: table-cell;
        vertical-align: middle;
    }
    
    .u-book.detail .title {
        margin-bottom: 13px;
        font-size: 16px;
        overflow: hidden;
    }
    
    .u-book.detail .u-grade {
        margin: 3px 0 6px 0;
        line-height: 1;
    }
    
    .u-book.detail .price {
        color: #727272;
    }
    
    .u-book.detail .author {
        color: #4b99a7;
        line-height: 1.4;
    }
    
    .u-book.detail .count {
        color: #6e6e6e;
    }
    
    .u-book.detail .author>span {
        display: inline-block;
        margin-right: 5px;
    }
    
    .u-booktag {
        border: 1px solid #00a0e9;
        color: #55b4ec;
        border-radius: 4px;
        font-size: 12px;
        line-height: 16px;
        display: inline-block;
        -webkit-transform: scale(.83);
        padding: 0 2px;
    }
    
    @media (width: 320px) {
        .u-book.detail {
            padding: 20px 14px;
        }
    }
</style>
