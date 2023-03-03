<script setup lang="ts">
import { ref } from 'vue'

let display = ref('none')
const handleOpen = () => {
  display.value = 'block'
}

const handleClickYes = () => {
  display.value = 'none'
  console.log('你点击了确认');
}
const handleClickNo = () => {
  display.value = 'none'
  console.log('你点击了取消');
}
const handleClickBack = () => {
  display.value = 'none'
  console.log('你点击了遮罩');
}



let display1 = ref('none')
const handleOpen1 = () => {
  display1.value = 'block'
}

const handleClickYes1 = () => {
  display1.value = 'none'
  console.log('你点击了确认');
}
const handleClickNo1 = () => {
  display1.value = 'none'
  console.log('你点击了取消');
}
const handleClickBack1 = () => {
  display1.value = 'none'
  console.log('你点击了遮罩');
}

const code1 = `let display = ref('none')
const handleOpen = () => {
  display.value = 'block'
}

const handleClickYes = () => {
  display.value = 'none'
  console.log('你点击了确认');
}
const handleClickNo = () => {
  display.value = 'none'
  console.log('你点击了取消');
}
const handleClickBack = () => {
  display.value = 'none'
  console.log('你点击了遮罩');
}
...
<yelo-button type="primary" @click="handleOpen">删除</yelo-button>
<yelo-modal title="提示框" :display="display" @handleYesEmit="handleClickYes" @handleNoEmit="handleClickNo" @handleBackEmit="handleClickBack">您确认要删除吗？</yelo-modal>
`

const code2 = `<yelo-button type="primary" @click="handleOpen1">添加人员</yelo-button>
<yelo-modal title="提示框" :display="display" @handleYesEmit="handleClickYes" @handleNoEmit="handleClickNo" @handleBackEmit="handleClickBack">
  <div>姓名：<input type="text"/></div>
  <div>年龄：<input type="text"/></div>
  <div>身高：<input type="text"/></div>
</yelo-modal>`
</script>

<template>
  <div class="modalsPage">
    <hr class="divide" />
    <div class="modals">
      <div>
        <h3 class="modals-title">一、普通模态窗口</h3>
        <yelo-button type="primary" @click="handleOpen">删除</yelo-button>
        <yelo-modal title="提示框" :display="display" @handleYesEmit="handleClickYes" @handleNoEmit="handleClickNo"
          @handleBackEmit="handleClickBack">您确认要删除吗？</yelo-modal>
      </div>
      <div class="codesWrap">
        <highlightjs autodetect :code="code1" />
      </div>
    </div>
    <div class="modals">
      <div>
        <h3 class="modals-title">二、表单模态窗口</h3>
        <yelo-button type="primary" @click="handleOpen1">添加人员</yelo-button>
        <yelo-modal title="提示框" :display="display1" @handleYesEmit="handleClickYes1" @handleNoEmit="handleClickNo1"
          @handleBackEmit="handleClickBack1">
          <div>姓名：<input type="text"/></div>
          <div>年龄：<input type="text"/></div>
          <div>身高：<input type="text"/></div>
        </yelo-modal>
      </div>
      <div class="codesWrap">
        <highlightjs autodetect :code="code2" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modalsPage {
  margin: 40px 20px;
  width: 1000px;

  .divide {
    margin: 40px 20px;
  }

  .modals {
    margin: 30px 40px;

    &-title {
      margin: 20px 0;
    }
  }
}
</style>
