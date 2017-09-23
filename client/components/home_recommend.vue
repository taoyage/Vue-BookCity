<template>
  <section class="channel-h5" id="recommend">
    <div class="channel-5__header">
      <p class="chanel-h5__title">
        重磅推荐<i>推</i>
      </p>
      <div class="tab">
        <a href="" class="tab__on">男</a>
        <a href="">女</a>
      </div>
    </div>
    <div>
      <ul class="list-h5">
        <li v-for="(item,index) in RecommendData" v-if="index === 0">
          <div class="book-h5">
            <div class="book-h5__cover">
              <img alt="title" v-bind:src="item.cover">
              <p class="book-h5__finish" v-if="item.finish">完结</p>
              <p class="book-h5__finish" v-else>未完结</p>
            </div>
            <div class="book-h5__info">
              <p class="book-h5__title">{{item.title}}</p>
              <p class="book-h5__author">{{item.authors}}</p>
              <p class="book-h5__summary">{{item.summary}}</p>
              <div class="book-h5__wrap">
                <div class="book-h5__tag" v-for="tags in item.tags">{{tags}}</div>
              </div>
            </div>
          </div>
        </li>
        <li v-for="(item,index) in RecommendData" v-if="index > 0 && index < 5">
          <div class="book-h5 book-h5__no-img">
            <span class="book-h5_no-img__order">0{{index + 1}}</span>
            <div class="book-h5_no-img__info">
              <p class="book-h5_no-img__title">
                {{item.title}}
                <i class="book-h5_no-img__author">
                            <span class="author">{{item.authors}}</span>
                        </i>
              </p>
            </div>
          </div>
        </li>
      </ul>
      <div class="channel-h5__footer_next">
        <a href="javascript:">换一换</a>
        <a href="/male">男生频道</a>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ['RecommendData']
}

</script>
<style scoped>
.channel-h5 {
  background: #fff;
  border-bottom: 10px solid #f5f5f5;
  position: relative;
}

.channel-5__header {
  padding: 15px 13px 14px 13px;
  border-bottom: 1px solid #f0f0f0;
}

.chanel-h5__title {
  position: relative;
  font: bold 13px/13px a;
  color: rgba(0, 0, 0, 0.9);
}

.chanel-h5__title>i {
  position: absolute;
  margin: -1px 0 0 5px;
  padding: 3px 5px 0 5px;
  font: 9px/9px a;
  color: #fff;
  background: #53ac7d;
  border-radius: 1px;
}

.tab {
  position: absolute;
  right: 13px;
  top: 9px;
}

.tab a {
  position: relative;
  padding: 16px 7px;
  font: 12px/12px a;
  color: #999;
}

.tab a:after {
  content: '';
  position: absolute;
  top: 16px;
  bottom: 16px;
  right: -1px;
  width: 1px;
  border-right: 1px solid #ccc;
}

.tab a:last-child {
  padding-right: 0px;
}

.tab a:last-child:after {
  display: none;
}

.tab__on {
  color: #528ae8 !important;
}

.list-h5 {
  padding: 0 13px;
}

.list-h5 li {
  padding: 17px 0;
  border-bottom: 1px solid #f0f0f0;
}

.list-h5 li:last-child {
  border: none;
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

.book-h5_no-img__order {
  float: left;
  margin-top: 1px;
  font: 13px/13px a;
  color: rgba(237, 83, 15, 0.9);
}

.book-h5_no-img__info {
  margin-left: 27px;
}

.book-h5_no-img__title {
  font: 15px/15px a;
  color: rgba(0, 0, 0, 0.9);
  background: #fff;
}

.book-h5_no-img__author {
  position: absolute;
  margin: 1px 0 0 13px;
  font: 12px/12px a;
  color: rgba(0, 0, 0, 0.4);
  background: #fff;
}

.channel-h5__footer_next {
  border-top: 1px solid #f0f0f0;
  overflow: hidden;
}

.channel-h5__footer_next>a {
  float: left;
  width: 50%;
  padding: 14px;
  font: 13px/1.3em a;
  color: rgba(0, 0, 0, 0.9);
  text-align: center;
  box-sizing: border-box;
}

.channel-h5__footer_next>a:first-child {
  border-right: 1px solid #f0f0f0;
}

</style>
