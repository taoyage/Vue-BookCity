<template>
    <section>
        <div class="wrap">
            <ul class="book-list">
                <li v-for="item in bookrack">
                    <div class="u-book">
                        <a href="javascript:">
                            <div class="book-cover">
                                <img :src="item.cover">
                            </div>
                        </a>
                        <div class="info">
                            <h3 class="title">{{item.title}}</h3>
                            <p class="author">
                                <span class="author">{{item.authors}}</span>
                            </p>
                            <div class="finish">
                                <p>最新：正文完</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
    export default {
        data() {
                return {
                    bookrack: {},
                };
            },
            created() {
                this.$http.get("http://localhost:3000/api/home/bookrack").then((response) => {
                    this.bookrack = response.body.items;
                    console.log(response.body.items)
                })
            }
    }
</script>
<style scoped>
    .wrap {
        margin-top: -10px;
    }
    
    .book-list li {
        cursor: pointer;
        position: relative;
        overflow: hidden;
        border-bottom: 1px solid #f0f0f0;
    }
    
    .book-list .u-book {
        padding: 13px 20px;
        width: auto;
        position: relative;
        overflow: hidden;
    }
    
    .u-book .book-cover {
        float: left;
        margin-right: 10px;
    }
    
    .u-book .info {
        padding-top: 1.2em;
    }
    
    .book-cover {
        position: relative;
        width: 104px;
        height: 136px;
        background-color: #eeece9;
        box-shadow: 0px 6px 5px -3px #aaa;
        border: 1px solid #f0f0f0;
        border-bottom: none;
        overflow: hidden;
    }
    
    .book-cover img {
        width: 100%;
        height: 100%;
    }
    
    .u-book .title {
        margin-bottom: 4px;
        font-size: 16px;
        font-weight: 400;
        color: #000;
        font-family: "miui", "Helvetica Neue", Helvetica, STHeiTi, sans-serif;
    }
    
    .u-book .author,
    .u-book .finish {
        margin-top: 4px;
        font-size: 12px;
        color: #8d8d8d;
    }
</style>
