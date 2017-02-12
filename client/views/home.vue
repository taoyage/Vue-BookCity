<template>
    <div :style="{width:screen_width +'px',overflow:'hidden',height:'100%'}">
        <section class="header-tab" id="app_header">
            <div class="Swipe-tab Swipe-tab_2 f-cb">
                <a href="javascript:" :class="{SwipeTab__on:isActive1}" @click="tabSwich(0)"></a>
                <a href="javascript:" :class="{SwipeTab__on:isActive2}" @click="tabSwich(1)"></router-link>
                    <i :style="{width:'50%',transitionDuration:'.3s',transform:'translate3d('+ header_tab +'%,0px,0px)'}"></i>
            </div>
            <em class="header-user"></em>
            <em class="header-checkin"></em>
        </section>
        <div v-bind:style="{width:screen_width * 2 + 'px',transitionDuration:'.3s',transform:'translate3d('+ position + 'px,0px,0px)',height:'100%'}">
            <div class="container-warp" :style="{width:screen_width+'px',float:'left'}">
                <div class="container-scroll">
                    <app-search></app-search>
                    <app-top></app-top>
                    <app-hot :HotData="HotData"></app-hot>
                    <app-recommend :RecommendData="RecommendData"></app-recommend>
                    <app-female :FemaleData="FemaleData"></app-female>
                    <app-male :MaleData="MaleData"></app-male>
                    <app-free :FreeData="FreeData"></app-free>
                </div>
            </div>
            <div class="container-warp" :style="{width:screen_width+'px',float:'left'}">
                <div class="container-scroll">
                    <app-search></app-search>
                    <app-bookrack></app-bookrack>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import search from 'components/search';
    import top from 'components/top';
    import hot from 'components/hot';
    import recommend from 'components/recommend';
    import female from 'components/female';
    import male from 'components/male';
    import free from 'components/free';
    import bookrack from 'components/bookrack';

    export default {
        components: {
            'app-search': search,
            'app-top': top,
            'app-hot': hot,
            'app-recommend': recommend,
            'app-female': female,
            'app-male': male,
            'app-free': free,
            'app-bookrack': bookrack
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
                header_tab: 0
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
                    this.position = -this.screen_width;
                    this.isActive1 = false;
                    this.isActive2 = true;
                    this.header_tab = 100;
                } else {
                    this.position = 0;
                    this.isActive1 = true;
                    this.isActive2 = false;
                    this.header_tab = 0;
                }
            }
        },
        computed: {
            screen_width() {
                return window.screen.width;
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
    
    .container-warp {
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
