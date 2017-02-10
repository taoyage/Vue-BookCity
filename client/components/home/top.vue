<template>
    <section class="top-home">
        <div class="slider-banner">
            <div>
                <a href="javascript:">
                    <img class="cover" src="../../assets/img/slider1.jpg">
                </a>
            </div>
        </div>
        <ul class="top-home__btn">
            <li>
                <a href="#">
                    <img class="top-home__icon" src="../../assets/img/money.png">
                    <p>免费</p>
                </a>
            </li>
            <li>
                <a href="#">
                    <img class="top-home__icon" src="../../assets/img/male.png">
                    <p>男生</p>
                </a>
            </li>
            <li>
                <a href="#">
                    <img class="top-home__icon" src="../../assets/img/female.png">
                    <p>女生</p>
                </a>
            </li>
            <li>
                <a href="#">
                    <img class="top-home__icon" src="../../assets/img/classify.png">
                    <p>分类</p>
                </a>
            </li>
            <li>
                <a href="#">
                    <img class="top-home__icon" src="../../assets/img/ranking.png">
                    <p>排行</p>
                </a>
            </li>
        </ul>
    </section>
</template>
<script>
    export default {
        name: 'top'
    }
</script>
<style scoped>
    .top-home {
        background: #fff;
        border-bottom: 10px solid #f5f5f5;
    }
    
    .cover {
        width: 100%;
    }
    
    .top-home__btn {
        margin: 14px 0 4px 0;
        display: -webkit-flex;
        width: 100%;
    }
    
    .top-home__btn li {
        line-height: 2.4;
        font-size: 12px;
        text-align: center;
        -webkit-flex: 1;
    }
    
    .top-home__icon {
        display: block;
        margin: 0 auto;
        height: 22px;
        width: 22px;
    }
</style>
