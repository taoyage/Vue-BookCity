<template>
    <ul class="book-table">
        <li v-for="(item,index) in data" v-if="index < 6">
            <div class="u-book">
                <div class="book-cover">
                    <router-link to="/detail/18218">
                        <img v-if="item.cover" v-bind:src="item.cover">
                        <img v-else v-bind:src="item.data.cover">
                        <div v-if="!item.cover" class="u-tagRT free-fiction"></div>
                    </router-link>
                </div>
                <div class="book-info">
                    <h3 class="title" v-if="item.ad_name">{{item.ad_name}}</h3>
                    <h3 class="title" v-else>{{item.title}}</h3>
                </div>
            </div>
        </li>
    </ul>
</template>
<script>
    export default {
        props: ['data']
    }
</script>
<style scoped>
    .book-table {
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
</style>
