<script setup lang="ts">
import { ref } from 'vue';

let loading = ref(false);
const handleClick = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};

const code1 = `<yelo-button>Default</yelo-button>
<yelo-button type="primary">Primary</yelo-button>
<yelo-button type="success">Success</yelo-button>
<yelo-button type="info">Info</yelo-button>
<yelo-button type="warning">Warning</yelo-button>
<yelo-button type="danger">Danger</yelo-button>`

const code2 = `<yelo-button plain>Plain</yelo-button>
<yelo-button type="primary" plain>Primary</yelo-button>
<yelo-button type="success" plain>Success</yelo-button>
<yelo-button type="info" plain>Info</yelo-button>
<yelo-button type="warning" plain>Warning</yelo-button>
<yelo-button type="danger" plain>Danger</yelo-button>`

const code3 = `<yelo-button round>Round</yelo-button>
<yelo-button type="primary" round>Primary</yelo-button>
<yelo-button type="success" round>Success</yelo-button>
<yelo-button type="info" round>Info</yelo-button>
<yelo-button type="warning" round>Warning</yelo-button>
<yelo-button type="danger" round>Danger</yelo-button>`

const code4 = `<yelo-button disabled>Round</yelo-button>
<yelo-button type="primary" disabled>Primary</yelo-button>
<yelo-button type="success" disabled>Success</yelo-button>
<yelo-button type="info" disabled>Info</yelo-button>
<yelo-button type="warning" disabled>Warning</yelo-button>
<yelo-button type="danger" disabled>Danger</yelo-button>`

const code5 = `<yelo-button type="primary" size="small">Small</yelo-button>
<yelo-button type="primary">Middle</yelo-button>
<yelo-button type="primary" size="large">Large</yelo-button>`

const code6 = `<yelo-button type="primary" prefixIcon="shoucang">收藏</yelo-button>
<yelo-button type="primary" suffixIcon="dianzan">点赞</yelo-button>
<yelo-button type="primary" prefixIcon="shoucang" suffixIcon="dianzan">双侧</yelo-button>`

const code7 = `<yelo-button @btnClick="handleClick" type="primary" prefixIcon="shuyi_jiazai" suffixIcon="xiazai" :loading="loading">下载</yelo-button>`
</script>

<template>
  <div class="buttonPage">
    <hr class="divide" />
    <div class="btns">
      <div>
        <h3 class="btns-title">一、方形按钮</h3>
        <div class="btns-wrap">
          <yelo-button>Default</yelo-button>
          <yelo-button type="primary">Primary</yelo-button>
          <yelo-button type="success">Success</yelo-button>
          <yelo-button type="info">Info</yelo-button>
          <yelo-button type="warning">Warning</yelo-button>
          <yelo-button type="danger">Danger</yelo-button>
        </div>
        <div class="codesWrap">
          <highlightjs autodetect :code="code1" />
        </div>
      </div>
      <div>
        <h3 class="btns-title">二、方形镂空按钮</h3>
        <div class="btns-wrap">
          <yelo-button plain>Plain</yelo-button>
          <yelo-button type="primary" plain>Primary</yelo-button>
          <yelo-button type="success" plain>Success</yelo-button>
          <yelo-button type="info" plain>Info</yelo-button>
          <yelo-button type="warning" plain>Warning</yelo-button>
          <yelo-button type="danger" plain>Danger</yelo-button>
        </div>
        <div class="codesWrap">
          <highlightjs autodetect :code="code2" />
        </div>
      </div>
      <div>
        <h3 class="btns-title">三、圆角按钮</h3>
        <div class="btns-wrap">
          <yelo-button round>Round</yelo-button>
          <yelo-button type="primary" round>Primary</yelo-button>
          <yelo-button type="success" round>Success</yelo-button>
          <yelo-button type="info" round>Info</yelo-button>
          <yelo-button type="warning" round>Warning</yelo-button>
          <yelo-button type="danger" round>Danger</yelo-button>
        </div>
        <div class="codesWrap">
          <highlightjs autodetect :code="code3" />
        </div>
      </div>
      <div>
        <h3 class="btns-title">四、设置禁用</h3>
        <div class="btns-wrap">
          <yelo-button disabled>Round</yelo-button>
          <yelo-button type="primary" disabled>Primary</yelo-button>
          <yelo-button type="success" disabled>Success</yelo-button>
          <yelo-button type="info" disabled>Info</yelo-button>
          <yelo-button type="warning" disabled>Warning</yelo-button>
          <yelo-button type="danger" disabled>Danger</yelo-button>
        </div>
        <div class="codesWrap">
          <highlightjs autodetect :code="code4" />
        </div>
      </div>
      <div>
        <h3 class="btns-title">五、设置按钮大小</h3>
        <div class="btns-wrap">
          <yelo-button type="primary" size="small">Small</yelo-button>
          <yelo-button type="primary">Middle</yelo-button>
          <yelo-button type="primary" size="large">Large</yelo-button>
        </div>
        <div class="codesWrap">
          <highlightjs autodetect :code="code5" />
        </div>
      </div>
      <div>
        <h3 class="btns-title">六、前后置图标</h3>
        <div class="btns-wrap">
          <yelo-button type="primary" prefixIcon="shoucang">收藏</yelo-button>
          <yelo-button type="primary" suffixIcon="dianzan">点赞</yelo-button>
          <yelo-button type="primary" prefixIcon="shoucang" suffixIcon="dianzan">双侧</yelo-button>
        </div>
        <div class="codesWrap">
          <highlightjs autodetect :code="code6" />
        </div>
      </div>
      <div>
        <h3 class="btns-title">七、点击显示加载</h3>
        <div class="btns-wrap">
          <yelo-button @btnClick="handleClick" type="primary" prefixIcon="shuyi_jiazai" suffixIcon="xiazai"
            :loading="loading">下载</yelo-button>
        </div>
        <div class="codesWrap">
          <highlightjs autodetect :code="code7" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.buttonPage {
  margin: 40px 20px;
  width: 1000px;
  .divide {
    margin: 40px 20px;
  }

  .btns {
    margin: 0px 40px;

    &-title {
      margin: 20px 0;
    }

    &-wrap {
      display: flex;
      align-items: center;
    }
  }
}
button {
  margin: 0 20px;
}

</style>
