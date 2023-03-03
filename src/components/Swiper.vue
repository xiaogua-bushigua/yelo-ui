<script setup lang="ts">

const imgsURL = ['/src/assets/swipers/1.jpeg', '/src/assets/swipers/2.jpeg', '/src/assets/swipers/3.jpeg']
// const imgsURL = ['/assets/swipers/1.jpeg', '/assets/swipers/2.jpeg', '/assets/swipers/3.jpeg']
const imgsURL1 = ['https://img2.baidu.com/it/u=2632730749,1389792745&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=721', 'https://img2.baidu.com/it/u=452199401,3287833971&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=1037', 'https://img1.baidu.com/it/u=3170338415,819326975&fm=253&fmt=auto&app=120&f=JPEG?w=640&h=896']

const code = `const imgsURL = ['/src/assets/swipers/1.jpeg', '/src/assets/swipers/2.jpeg', '/src/assets/swipers/3.jpeg']
const imgsURL1 = ['https://img2.baidu.com/it/u=2632730749,1389792745&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=721', 'https://img2.baidu.com/it/u=452199401,3287833971&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=1037', 'https://img1.baidu.com/it/u=3170338415,819326975&fm=253&fmt=auto&app=120&f=JPEG?w=640&h=896']`
const code0 = `<yelo-swiper :imgsURL="imgsURL1" setTime :height=240 :width=160></yelo-swiper>`
const code1 = `<yelo-swiper :imgsURL="imgsURL" setTime></yelo-swiper>`
const code2 = `<yelo-swiper :imgsURL="imgsURL" sideClicked setTime></yelo-swiper>`
const code3 = `<yelo-swiper :imgsURL="imgsURL" botClicked setTime sideClicked></yelo-swiper>`

</script>

<template>
  <div class="swiperPage">
    <hr class="divide" />
    <div class="codesWrap">
      <highlightjs autodetect :code="code" />
    </div>
    <div class="swipers">
      <div>
        <h3 class="swipers-title">一、定时切换</h3>
        <yelo-swiper :imgsURL="imgsURL" setTime></yelo-swiper>
      </div>
      <div class="codesWrap">
        <highlightjs autodetect :code="code1" />
      </div>
      <div>
        <h3 class="swipers-title">二、设置宽高</h3>
        <yelo-swiper :imgsURL="imgsURL1" setTime :height=240 :width=160></yelo-swiper>
      </div>
      <div class="codesWrap">
        <highlightjs autodetect :code="code0" />
      </div>
      <div>
        <h3 class="swipers-title">三、侧方点击切换</h3>
        <yelo-swiper :imgsURL="imgsURL" sideClicked setTime></yelo-swiper>
      </div>
      <div class="codesWrap">
        <highlightjs autodetect :code="code2" />
      </div>
      <div>
        <h3 class="swipers-title">四、下方点击切换</h3>
        <yelo-swiper :imgsURL="imgsURL" botClicked setTime sideClicked></yelo-swiper>
      </div>
      <div class="codesWrap">
        <highlightjs autodetect :code="code3" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.swiperPage {
  margin: 40px 20px;
  width: 1000px;

  .divide {
    margin: 40px 20px;
  }

  .swipers {
    margin: 0px 40px;

    &-title {
      margin: 20px 0;
    }
  }
}
</style>
