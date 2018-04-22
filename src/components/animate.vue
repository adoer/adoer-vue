<template>
<div class="animateIcon">
  <div class="icon-down">
    <div class="itemWrap" :class="'itemWrap'+(i+1)" v-for="(item,i) in dataDown" :key="i">
      <div class="item" :style="{backgroundImage:'url('+item+')'}"></div>
    </div>
  </div>
  <div class="icon-list">
    <div class="item"  v-for="(item,i) in data" :key="i"
    :style="{backgroundImage:'url('+item.icon+')'}">
      <span>{{item.val}}</span>
    </div>
  </div>
</div>
</template>

<script>
let apple = require("../assets/images/apple.svg");
let orange = require("../assets/images/orange.svg");
let pineapple = require("../assets/images/pineapple.svg");
let watermelon = require("../assets/images/watermelon.svg");
export default {
  name: 'content',
  data: function () {
    return {
      step: 2,
      dataDown: [
        apple,
        orange,
        pineapple,
        watermelon
      ],
      data: [
        {
          icon: apple,
          max: 1375,
          val: 0
        },
        {
          icon: orange,
          max: 2580,
          val: 0
        },
        {
          icon: pineapple,
          max: 136,
          val: 0
        },
        {
          icon: watermelon,
          max: 235,
          val: 0
        }
      ]
    }
  },
  methods: {
    addNum() {
      let self = this;
      for (let i = 0; i < self.data.length; i++) {
        var timerOut = setTimeout(function run() {
          self.data[i].val += self.step;
          if (self.data[i].val < self.data[i].max) {
            var timer = setTimeout(run, 10)
          } else {
            self.data[i].val = self.data[i].max;
          }
        }, i * 500);
      }
    },
  },
  mounted() {
    this.addNum();
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style style lang="scss">
* {
  padding: 0;
  margin: 0;
}
.animateIcon {
  width: 600px;
  margin: 100px auto 0;
  position: relative;
  .icon-list {
    display: flex;
    height: 100px;
    justify-content: space-between;
    // border: 1px solid #ccc;
    .item {
      background-repeat: no-repeat;
      background-position: 0 50%;
      background-size: 50px 50px;
      line-height: 100px;
      font-size: 30px;
      padding-left: 50px;
      text-align: left;
    }
  }
  .icon-down {
    height: 50px;
    width: 50px;
    border: 1px solid #ccc;
    margin-left: -25px;
    top: -166px;
    left: 50%;
    position: absolute;
    .item {
      height: 50px;
      width: 50px;
      position: absolute;
      top: 0;
      background-repeat: no-repeat;
      background-position: 0 50%;
      opacity: 0.5;
      background-size: 50px 50px;
    }
    $data: (
       (x:-270px, y:180px, delay:random() * 1#{s}),
       (x:-100px, y:180px, delay:random() * 1#{s}),
       (x:100px, y:180px, delay:random() * 1#{s}),
       (x:270px, y:180px, delay:random() * 1#{s})
    );
    @for $i from 1 through length($data) {
      $item: nth($data, $i);
      .itemWrap#{$i} {
        animation: vertical-animation#{$i} 2s cubic-bezier(
            0.01,
            0.73,
            0.8,
            0.38
          ) map-get($item, delay) infinite;
        -webkit-animation: vertical-animation#{$i} 2s cubic-bezier(
            0.01,
            0.73,
            0.8,
            0.38
          ) map-get($item, delay) infinite;
        -moz-animation: vertical-animation#{$i} 2s cubic-bezier(
            0.01,
            0.73,
            0.8,
            0.38
          ) map-get($item, delay) infinite;
      }
      .itemWrap#{$i} .item {
        animation: hor-animation#{$i} 2s linear map-get($item, delay) infinite;
        -webkit-animation: hor-animation#{$i} 2s linear map-get($item, delay) infinite;
        -moz-animation: hor-animation#{$i} 2s linear map-get($item, delay) infinite;
      }
      @-webkit-keyframes hor-animation#{$i} {
        0% {
          transform: translateX(0px);
          opacity: 0;
        }
        100% {
          transform: translateX(map-get($item, x));
          opacity: 0.5;
        }
      }
      @-webkit-keyframes vertical-animation#{$i} {
        0% {
          transform: translateY(0px);
        }
        100% {
          transform: translateY(map-get($item, y));
          opacity: 0.5;
        }
      }
    }
  }
}
</style>
