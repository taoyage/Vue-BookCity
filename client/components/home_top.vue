<template>
    <section class="top-home">
        <div class="slider-banner" :style="sliderStyle">
            <div class="banner-wrap" ref="bannerWrap" :style="bannerWrapStyle">
                <a href="javascript:" :style="bannerStyle" v-for="item in imgUrl">
                    <img class="cover" :src="item">
                </a>
            </div>
        </div>
        <ul class="top-home__btn">
            <li>
                <a href="#">
                    <img class="top-home__icon" src="../assets/img/money.png">
                    <p>免费</p>
                </a>
            </li>
            <li>
                <a href="#">
                    <img class="top-home__icon" src="../assets/img/male.png">
                    <p>男生</p>
                </a>
            </li>
            <li>
                <a href="#">
                    <img class="top-home__icon" src="../assets/img/female.png">
                    <p>女生</p>
                </a>
            </li>
            <li>
                <a href="#">
                    <img class="top-home__icon" src="../assets/img/classify.png">
                    <p>分类</p>
                </a>
            </li>
            <li>
                <router-link to="rank">
                    <img class="top-home__icon" src="../assets/img/ranking.png">
                    <p>排行</p>
                </router-link>
            </li>
        </ul>
    </section>
</template>
<script>
    export default {
        data() {
                return {
                    move: 0,
                    imgUrl: [
                        'http://image.read.duokan.com/mfsv2/download/fdsc3/p01qDSHWUGqf/DoSt6VIaNe0oC2.jpg',
                        'http://t1.market.xiaomi.com/thumbnail/jpeg/l640/Duokan/09da548fc77b20d162615235590cb6fbcea4250b8?',
                        'http://image.read.duokan.com/mfsv2/download/fdsc3/p01efTou81ww/XRyLxQX8aCBCJ1.jpg',
                        'http://image.read.duokan.com/mfsv2/download/fdsc3/p01qDSHWUGqf/DoSt6VIaNe0oC2.jpg'
                    ]
                }
            },
            mounted() {
                let el = this.$refs.bannerWrap;
                let length = el.getElementsByTagName('a').length;
                this.move = window.screen.width;
                setInterval(() => {
                    this.slider(el, length);
                }, 10000);
            },
            methods: {
                slider(el, length) {
                    el.style.transitionDuration = `.3s`;
                    el.style.transform = `translate3d(${-this.move}px, 0px, 0px)`;
                    if (this.move === parseInt(window.screen.width * length)) {
                        el.style.transitionDuration = `.0s`;
                        this.move = 0;
                        el.style.transform = `translate3d(${-this.move}px, 0px, 0px)`;
                    }
                    this.move += window.screen.width;
                }
            },
            computed: {
                sliderStyle() {
                    return {
                        width: `${window.screen.width}px`
                    };
                },
                bannerStyle() {
                    return {
                        width: `${window.screen.width}px`
                    }
                },
                bannerWrapStyle() {
                    return {
                        width: `${window.screen.width*5}px`,
                        transitionDuration: `0s`,
                        transform: `translate3d(0px,0px,0px)`
                    }
                }
            }

    }
</script>
<style scoped>
    .top-home {
        background: #fff;
        border-bottom: 10px solid #f5f5f5;
    }
    
    .slider-banner {
        overflow: hidden;
        position: relative;
    }
    
    .banner-wrap {
        overflow: hidden;
        transition-duration: 0s;
    }
    
    .banner-wrap a {
        float: left;
    }
    
    .cover {
        width: 100%;
        min-height: 36vw;
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
