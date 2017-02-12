<template>
    <section class="main-card">
        <div class="u-floder">
            <div class="floder-top">
                <h3>类别标签</h3>
            </div>
            <div class="floder-cnt">
                <ul class="m-tags">
                    <li class="u-tag" v-for="tags in book.tags">{{tags}}</li>
                </ul>
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
    
    .u-floder .floder-top {
        font-size: 16px;
        font-weight: normal;
        color: #8d8d8d;
        padding: 14px 14px 8px;
    }
    
    .floder-cnt {
        position: relative;
        line-height: 1.6;
        padding: 0 14px;
        margin-bottom: 10px;
        font-size: 14px;
        color: #585858;
    }
    
    .u-tag {
        display: inline-block;
        width: auto;
        line-height: 1.8em;
        padding: 0 20px;
        color: #766d5d;
        border-radius: 4px;
        background: #909da8;
        font-size: 14px;
        text-align: center;
        border: 1px solid #d3d3d3;
        margin: 0 10px 5px 0;
    }
    
    .u-tag:nth-child(3n+1) {
        background-color: #fbebe8;
    }
    
    .u-tag:nth-child(3n+2) {
        background-color: #fcedda;
    }
    
    .u-tag:nth-child(3n+3) {
        background-color: #e8f9db;
    }
    
    @media (width: 320px) {
        .u-tag{
            padding: 0 10px;
        }
    }
</style>
