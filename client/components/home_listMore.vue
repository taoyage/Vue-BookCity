<template>
	<section>
            <ul class="list-h5">
                <li v-for="(item,index) in MaleData" v-if="index < 5">
                    <div class="book-h5">
                        <div class="book-h5__cover">
                            <img v-bind:src="item.cover">
                            <p class="book-h5__finish" v-if="item.finish">完结</p>
                            <p class="book-h5__finish" v-else>未完结</p>
                        </div>
                        <div class="book-h5__info">
                            <p class="book-h5__title">{{item.title}}</p>
                            <p class="book-h5__author">{{item.author}}</p>
                            <p class="book-h5__summary">{{item.summary}}</p>
                            <div class="book-h5__wrap">
                                <div class="book-h5__tag" v-for="(tags,index) in item.tags" v-if="index<3">{{tags}}</div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
	</section>
</template>

<script>
    export default{
        props:["MaleData"]
    }
</script>

<style scoped>  
    .list-h5 {
        padding: 0 13px;
    }
    
    .list-h5 li {
        padding: 17px 0;
        border-bottom: 1px solid #f0f0f0;
    }
    
    .book-h5 {
        overflow: hidden;
    }
    
    .book-h5__cover {
        float: left;
        position: relative;
        width: 85px;
        height: 113px;
        background-color: #eeece9;
        border: 1px solid #f0f0f0;
        border-radius: 1px;
        overflow: hidden;
    }
    
    .book-h5__cover img {
        width: 100%;
        height: 100%;
        border-radius: 1px;
    }
    
    .book-h5__cover .book-h5__finish {
        position: absolute;
        bottom: 0;
        width: 100%;
        box-sizing: border-box;
        font: 10px/10px a;
        padding: 25px 7px 6px;
        color: #fff;
        background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));
    }
    
    .book-h5 .book-h5__info {
        margin-left: 100px;
        padding-top: 6px;
        background: #fff;
    }
    
    .book-h5__info .book-h5__title {
        margin-bottom: 4px;
        font: 16px/17px a;
        color: rgba(0, 0, 0, 0.9);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    
    .book-h5__info .book-h5__author {
        margin-top: 8px;
        font: 12px/12px a;
        color: rgba(0, 0, 0, 0.7);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    
    .book-h5__info .book-h5__summary {
        margin: 8px 0 0;
        height: 2.8em;
        font: 12px/1.4em a;
        color: rgba(0, 0, 0, 0.6);
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    
    .book-h5__info .book-h5__wrap {
        margin-top: 10px;
        padding-top: 3px;
        overflow: hidden;
    }
    
    .book-h5__info .book-h5__tag {
        float: left;
        margin: -3px 7px 0 0;
        padding: 3px 6px 2px;
        max-width: 6em;
        font: 10px/11px a;
        color: #53ac7d;
        border-radius: 3px;
        border: 1px solid #53ac7d;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>