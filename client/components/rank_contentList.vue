<template>
    <section class="rank-wrap">
        <ul class="rank-list">
            <li class="rank-list-item" v-for="(item,index) in rankData" v-if="index>18">
                <div class="rank-list-content">
                    <img :src="item.cover">
                    <div class="rank-list-info">
                        <p v-for="(book,index) in item.description">{{index+1}} {{book}}</p>
                    </div>
                </div>
            </li>
        </ul>
    </section>
</template>
<script>
    export default {
        data() {
                return {
                    rankData: [],
                    rankBook: []
                }
            },
            created() {
                this.$http.get('http://localhost:3000/api/rank').then((response) => {
                    this.rankData = response.body.items;
                    this.rankData.forEach((value, index) => {
                        this.rankData[index].description = value.description.split('\n')
                    });
                }, response => {
                    console.log(err);
                });
            }
    }
</script>
<style scoped>
    .rank-wrap {
        position: absolute;
        top: 45px;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: auto;
    }
    
    .rank-list-item {
        padding: 12px 0 6px 20px;
        border-bottom: 1px solid #EEE;
        overflow: hidden;
    }
    
    .rank-list-item img {
        width: 90px;
        height: 90px;
        float: left;
    }
    
    .rank-list-info {
        line-height: 26px;
        font-size: 14px;
        margin-left: 108px;
        margin-top: 5px;
        white-space: nowrap;
    }
    
    .rank-list-info p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top: 2px;
    }
</style>
