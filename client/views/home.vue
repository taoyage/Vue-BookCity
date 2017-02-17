<template>
    <div :style="wrapStyle" @touchend="moveEnd" @touchstart="moveStart" @touchmove="move">
        <section class="header-tab" id="app_header">
            <div class="Swipe-tab Swipe-tab_2 f-cb">
                <a href="javascript:" :class="{SwipeTab__on:isActive1}" @click="tabSwich(0)"></a>
                <a href="javascript:" :class="{SwipeTab__on:isActive2}" @click="tabSwich(1)"></router-link>
                    <i :style="underlineStyle"></i>
            </div>
            <em class="header-user"></em>
            <em class="header-checkin"></em>
        </section>
        <div :style="contentWrapStyle">
            <div class="container-wrap" :style="containerWrapStyle">
                <div class="container-scroll">
                    <home-search></home-search>
                    <home-top></home-top>
                    <home-hot :HotData="HotData"></home-hot>
                    <home-recommend :RecommendData="RecommendData"></home-recommend>
                    <home-female :FemaleData="FemaleData"></home-female>
                    <home-male :MaleData="MaleData"></home-male>
                    <home-free :FreeData="FreeData"></home-free>
                    <home-listMore :MaleData="MaleData"></home-listMore>
                </div>
            </div>
            <div class="container-wrap" :style="containerWrapStyle">
                <div class="container-scroll">
                    <home-search></home-search>
                    <home-bookrack></home-bookrack>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import search from 'components/home_search';
    import top from 'components/home_top';
    import hot from 'components/home_hot';
    import recommend from 'components/home_recommend';
    import female from 'components/home_female';
    import male from 'components/home_male';
    import free from 'components/home_free';
    import bookrack from 'components/home_bookrack';
    import listMore from 'components/home_listMore';

    export default {
        components: {
            'home-search': search,
            'home-top': top,
            'home-hot': hot,
            'home-recommend': recommend,
            'home-female': female,
            'home-male': male,
            'home-free': free,
            'home-bookrack': bookrack,
            'home-listMore': listMore
        },
        data() {
            return {
                HotData: {},
                RecommendData: {},
                FemaleData: {},
                MaleData: {},
                FreeData: {},
                position: 0,
                isActive1: true,
                isActive2: false,
                header_tab: 0,
                coordinateX: 0,
                distance: 0
            }
        },
        created() {
            this.$http.get('http://localhost:3000/api/home').then((response) => {
                let datas = JSON.parse(response.body);
                this.HotData = datas.items[1].data.data;
                this.RecommendData = datas.items[2].data.data;
                this.FemaleData = datas.items[3].data.data;
                this.MaleData = datas.items[4].data.data;
                this.FreeData = datas.items[5].data.data;
            }, response => {
                console.log(err);
            });
        },
        methods: {
            tabSwich() {
                if (arguments[0]) {
                    this.position = -window.screen.width;
                    this.isActive1 = false;
                    this.isActive2 = true;
                    this.header_tab = 100;
                } else {
                    this.position = 0;
                    this.isActive1 = true;
                    this.isActive2 = false;
                    this.header_tab = 0;
                }
            },
            moveStart(event) {
                this.coordinateX = event.touches[0].clientX;
            },
            move(event) {
                this.distance = event.touches[0].clientX - this.coordinateX;
                this.header_tab = Math.abs(1 / window.screen.width * this.position) * 100;
                if (this.distance < 0 && this.position < window.screen.width && this.position > -window.screen.width) {
                    this.position = this.distance;
                }
                if (this.distance > 0 && this.position < 0) {
                    this.position = -(window.screen.width - this.distance);
                }
            },
            moveEnd(event) {
                let x = Math.abs(this.position) - (window.screen.width / 2);
                if (x > 0) {
                    this.position = -window.screen.width;
                    this.header_tab = 100;
                    this.isActive2 = true;
                    this.isActive1 = false;
                } else {
                    this.position = 0;
                    this.header_tab = 0;
                    this.isActive1 = true;
                    this.isActive2 = false;
                }
            }
        },
        computed: {
            wrapStyle() {
                return {
                    width: `${window.screen.width}px`,
                    overflow: `hidden`,
                    height: `100%`
                }
            },
            underlineStyle() {
                return {
                    width: `50%`,
                    transitionDuration: `.3s`,
                    transform: `translate3d(${this.header_tab}%,0px,0px)`,
                }
            },
            contentWrapStyle() {
                return {
                    width: `${window.screen.width * 2}px`,
                    transitionDuration: `.3s`,
                    transform: `translate3d(${this.position}px,0px,0px)`,
                    height: `100%`
                }
            },
            containerWrapStyle() {
                return {
                    width: `${window.screen.width}px`,
                    float: `left`
                }
            }
        }
    };
</script>
<style type="text/css" scoped>
    .header-tab {
        padding: 0px 90px;
        text-align: center;
        line-height: 44px;
        background: #efeff0;
        border-bottom: 1px solid #ddd;
        position: relative;
    }
    
    .header-tab i {
        bottom: -1px;
    }
    
    .header-tab i:before {
        content: '';
        display: block;
        height: 2px;
        width: 34px;
        margin: 0 auto;
        background: #777;
    }
    
    .header-tab a:before {
        content: '\4e66\67b6';
        display: block;
        margin: 0 auto;
        width: 2em;
    }
    
    .header-tab a:first-child:before {
        content: '\4e66\57ce';
    }
    
    .header-user {
        position: absolute;
        right: 0px;
        top: 0px;
        width: 44px;
        height: 44px;
        background: url(../assets/img/user.png) no-repeat center;
        background-size: 16px;
    }
    
    .header-checkin {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 44px;
        height: 44px;
        background: url(../assets/img/checkin.png) no-repeat center;
        background-size: 22px;
    }
    
    .Swipe-tab {
        position: relative;
        overflow: hidden;
        z-index: 1;
    }
    
    .Swipe-tab i {
        position: absolute;
        left: 0;
        -webkit-transition: -webkit-transform 0.3s ease-out;
    }
    
    .Swipe-tab a {
        float: left;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    
    .Swipe-tab_2 a {
        width: 50%;
    }
    
    .f-cb:after {
        clear: both;
        content: '';
        display: block;
        height: 0;
        overflow: hidden;
        visibility: hidden;
    }
    
    .SwipeTab__on {
        color: #ff6600;
    }
    
    .container-wrap {
        height: 100%;
        overflow: hidden;
        position: relative;
    }
    
    .container-scroll {
        position: absolute;
        top: 0px;
        bottom: 45px;
        left: 0px;
        right: 0px;
        overflow-y: scroll;
    }
</style>
