<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const props = defineProps({
  imgsURL: {
    type: Array<string>,
    default: ''
  },
  stayTime: {
    type: Number,
    default: 1200
  },
  height: {
    type: Number,
    default: 180
  },
  width: {
    type: Number,
    default: 320
  },
  setTime: {
    type: Boolean,
    default: false
  },
  sideClicked: {
    type: Boolean,
    default: false
  },
  botClicked: {
    type: Boolean,
    default: false
  }
})

// banner的宽高
const getBannerStyle = computed(() => {
  return { height: props.height + 'px', width: props.width + 'px' }
})

// 动态加载图片
const getSrc = (url: string) => {
  return new URL(url, import.meta.url).href
};
// 定时自动滚动末尾会追加第一张图
const timedImgs = computed(() => {
  // 不能直接写let res = props.imgsURL，这样是深拷贝，对res的操作会影响props.imgsURL
  let res = props.imgsURL.slice(0, props.imgsURL.length)
  res.push(props.imgsURL[0])
  return res
})
const notTimedImgs = computed(() => {
  return timedImgs.value.slice(0, timedImgs.value.length - 1)
})

// 获取DOM
let imgList = ref<HTMLDivElement>()
// 滚动距离
let left = ref(0)
// 当前图片的index
let nowIndex = ref(0)
// 圆点滚动的定时器
let timerBot: any
// 图片滚动的定时器
let timerImg
// 获取下方圆点DOM，并设置初始圆点高亮状态
let radios = [] as any
onMounted(() => {
  radios = document.querySelectorAll('.bot-radio')
})


// 圆点滚动函数
const runBot = () => {
  let timeout = (left.value % props.width == 0) ? props.stayTime : 10
  radios.forEach((el: any) => {
    el.style.setProperty('background-color', '')
  });
  nowIndex.value = Math.floor(-left.value / props.width)
  if (nowIndex.value === radios.length) nowIndex.value = 0
  if (nowIndex.value < radios.length) {
    radios[nowIndex.value].style.setProperty('background-color', 'rgba(255,255,255,0.7)')
  }
  timerBot = setTimeout(runBot, timeout);
}

// 图片滚动函数
function runImg() {
  if (left.value <= -(props.width * (timedImgs.value.length - 1))) left.value = 0
  nowIndex.value = Math.floor(-left.value / props.width)
  imgList.value?.style.setProperty('margin-left', left.value + 'px')
  let timeout = (left.value % props.width == 0) ? props.stayTime : 10
  left.value -= 10
  timerImg = setTimeout(runImg, timeout);
}


/* 处理多种使用场景 */


// **** 一、定时切换
if (props.setTime) {
  runImg()
}


// **** 二、侧方点击切换
// 传入图片位置索引，来改变left
const handleImgChange = (n: number) => {
  left.value = -(n * props.width)
  imgList.value?.style.setProperty('margin-left', left.value + 'px')
}
// 点击上一张
const handlePrev = () => {
  let prevgo = Math.floor(-left.value / props.width) - 1
  if (prevgo == -1) prevgo = notTimedImgs.value.length - 1
  handleImgChange(prevgo)
}
// 点击下一张
const handleNext = () => {
  let nextgo = Math.floor(-left.value / props.width) + 1
  if (nextgo == props.imgsURL.length) nextgo = 0
  handleImgChange(nextgo)
}


// **** 三、下方点击切换
const handleBotClick = (index: number) => {
  nowIndex.value = index
  clearTimeout(timerBot)
  handleImgChange(nowIndex.value)
  runBot()
}
if (props.botClicked) {
  runBot()
}

</script>

<template>
  <div class="banner" :style="getBannerStyle">
    <ul id="imgList" ref="imgList">
      <li v-for="(img, index) in (props.setTime ? timedImgs : notTimedImgs)" :key="img"><img :src="getSrc(img)" alt="">
      </li>
    </ul>
    <div class="bot-radios" v-if="props.botClicked" ref="botRadios">
      <div class="bot-radio" v-for="(img, index) in notTimedImgs" :key="img" @click="handleBotClick(index)"></div>
    </div>
    <div @click="handlePrev" class="btnSide prev" v-if="props.sideClicked"><i class="iconfont icon-left"></i></div>
    <div @click="handleNext" class="btnSide next" v-if="props.sideClicked"><i class="iconfont icon-right"></i></div>
  </div>
</template>

<style scoped lang="scss">
$radio-border-color: rgba(207, 208, 141, 0.8);
$prev-hover-color: rgba(255, 255, 255, 0.8);
$prev-default-color: rgba(0, 0, 0, 0.2);
$prev-font-size: 18px;
$prev-wrap-width: 40px;
$radio-wrap-height: 40px;
$radio-circle-size: 15px;

.banner {
  overflow: hidden;
  position: relative;

  #imgList {
    width: 100%;
    height: 100%;
    display: flex;
    margin: 0;
    padding: 0;
  }

  .btnSide {
    position: absolute;
    height: 100%;
    width: $prev-wrap-width;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .prev {
    font-size: $prev-font-size;
    color: $prev-default-color;
    left: 0;

    &:hover {
      background-image: linear-gradient(to right, $prev-default-color, transparent);

      .iconfont {
        color: $prev-hover-color;
      }
    }
  }

  .next {
    font-size: $prev-font-size;
    color: $prev-default-color;
    right: 0;

    &:hover {
      background-image: linear-gradient(to left, $prev-default-color, transparent);

      .iconfont {
        color: $prev-hover-color;
      }
    }
  }

  .bot-radios {
    position: absolute;
    width: 100%;
    height: $radio-wrap-height;
    bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: center;

    .bot-radio {
      margin: 0 5px;
      width: $radio-circle-size;
      height: $radio-circle-size;
      border-radius: 50%;
      border: 1px solid $radio-border-color;
      cursor: pointer;
    }
  }
}

#imgList li {
  list-style: none;
  flex-shrink: 0;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>