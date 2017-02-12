<template>
    <section class="bottom-nav">
        <div class="reader-bt-bar">
            <a href="javascript:">上一章</a>
            <a href="javascript:">1/1000</a>
            <a href="javascript:">下一章</a>
        </div>
        <div class="reader-bt-menus">
            <a href="javascript:">
                <i></i>
                <p>目录</p>
            </a>
            <a href="javascript:" @click="fontMenu">
                <i></i>
                <p>字体</p>
            </a>
            <a href="javascript:" @click="nightBtn">
                <i></i>
                <p>夜间</p>
            </a>
            <a href="javascript:">
                <i></i>
                <p>下载</p>
            </a>
        </div>
        <div class="reader-font" :style="{display:display}">
            <div class="reader-font-size">
                <span>字号</span>
                <button class="font-size-btn">大</button>
                <button class="font-size-btn">小</button>
            </div>
            <div class="reader-font-bg">
                <span>背景</span>
                <div class="bk-container" data-bg="1">
                    <div class="bk-container-current"></div>
                </div>
                <div class="bk-container" data-bg="2">
                    <div class="bk-container-current"></div>
                </div>
                <div class="bk-container" data-bg="3">
                    <div class="bk-container-current"></div>
                </div>
                <div class="bk-container" data-bg="4">
                    <div class="bk-container-current"></div>
                </div>
                <div class="bk-container" data-bg="5">
                    <div class="bk-container-current"></div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        components: {

        },
        data() {
            return {
                display: 'none',
                hasError: false
            }
        },
        methods: {
            fontMenu() {
                this.display === 'none' ? this.display = 'block' : this.display = 'none';
            },
            nightBtn(){
                
            }

        }
    }
</script>
<style scoped>
    .bottom-nav {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.9);
        z-index: 2;
    }
    
    .reader-bt-bar {
        overflow: hidden;
        border-bottom: 1px solid #333;
    }
    
    .reader-bt-menus a,
    .reader-bt-bar a {
        float: left;
        display: block;
        width: 25%;
        font-size: 13px;
        line-height: 48px;
        height: 48px;
        color: #fff;
        text-align: center;
    }
    
    .reader-bt-menus a {
        padding: 11px 0;
    }
    
    .reader-bt-bar a:nth-child(2) {
        width: 50%;
    }
    
    .reader-bt-menus {
        width: 100%;
    }
    
    .reader-bt-menus i {
        display: block;
        margin-bottom: 9px;
        width: 18px;
        height: 13px;
        margin: auto;
    }
    
    .reader-bt-menus a:nth-child(1)>i {
        background: url(../assets/img/reader_menu_icon.png) no-repeat;
        background-size: 18px 13px;
    }
    
    .reader-bt-menus a:nth-child(2)>i {
        background: url(../assets/img/reader_font_icon.png) no-repeat;
        background-size: 18px 13px;
    }
    
    .reader-bt-menus a:nth-child(3)>i {
        background: url(../assets/img/reader_night_icon.png) no-repeat;
        background-size: 18px 13px;
    }
    
    .reader-bt-menus a:nth-child(4)>i {
        background: url(../assets/img/reader_download_icon.png) no-repeat;
        background-size: 18px 13px;
    }
    
    .reader-font {
        position: absolute;
        bottom: 70px;
        left: 0;
        right: 0;
        height: 135px;
        background: rgba(0, 0, 0, 0.9);
        z-index: 2;
    }
    
    .reader-font .reader-font-size,
    .reader-font .reader-font-bg {
        margin-top: 15px;
        padding: 5px 10px;
    }
    
    .reader-font span {
        margin: 0 20px 0 10px;
        font-size: 14px;
        line-height: 21px;
        color: #fff;
    }
    
    .font-size-btn {
        display: inline-block;
        margin: 0 5px;
        border: 1px solid #8c8c8c;
        border-radius: 16px;
        padding: 5px 40px;
        font-size: 13px;
        line-height: 16px;
        color: #fff;
        background: none;
    }
    
    .bk-container {
        position: relative;
        width: 30px;
        height: 30px;
        border-radius: 15px;
        background: #fff;
        display: inline-block;
        vertical-align: -10px;
        margin-left: 10px;
    }
    
    .bk-container-current {
        position: absolute;
        width: 32px;
        height: 32px;
        border-radius: 16px;
        border: 1px #ff7800 solid;
        display: inline-block;
        top: -2px;
        left: -2px;
    }
    
    .bk-container[data-bg='1'] {
        margin-left: 5px;
        background: #f7eee5;
    }
    
    .bk-container[data-bg="2"] {
        background: #e9dfc7;
    }
    
    .bk-container[data-bg="3"] {
        background: #a4a4a4;
    }
    
    .bk-container[data-bg="4"] {
        background: #cdefce;
    }
    
    .bk-container[data-bg="5"] {
        background: #283548;
    }
</style>
