<script setup lang="ts">
import { ref } from 'vue'

const test1 = ref('A1高闪来一个，秋梨膏')
const handleInput1 = (val: any) => {
  test1.value = val.value
}

const test2 = ref('A1高闪来一个，秋梨膏')
const handleInput2 = (val: any) => {
  test2.value = val.value
}

const test3 = ref('A1高闪来一个，秋梨膏')
const handleInput3 = (val: any) => {
  test3.value = val.value
}

const test4 = ref('')
const temp = ref("请输入内容")
const handleInput4 = (val: any) => {
  test4.value = val.value
}

const test5 = ref('A1高闪来一个，秋梨膏')
const handleInput5 = (val: any) => {
  test5.value = val.value
}
const handleFocus = (val: any) => {
  console.log('您已聚焦', val.value)
}
const handleBlur = (val: any) => {
  console.log('您已移出', val.value)
}

const test6 = ref('A1高闪来一个，秋梨膏')
const handleInput6 = (val: any) => {
  test6.value = val.value
}

const test7 = ref('A1高闪来一个，秋梨膏')
const handleInput7 = (val: any) => {
  test6.value = val.value
}

const code1 = `const test1 = ref('A1高闪来一个，秋梨膏')
const handleInput1 = (val: any) => {
  test1.value = val.value
}
...
<yelo-textarea :text="test1" @handleInputEmit="handleInput1"></yelo-textarea>
`
const code2 = `const test2 = ref('A1高闪来一个，秋梨膏')
const handleInput2 = (val: any) => {
  test2.value = val.value
}
...
<yelo-textarea :text="test2" @handleInputEmit="handleInput2" disabled></yelo-textarea>
`
const code3 = `const test3 = ref('A1高闪来一个，秋梨膏')
const handleInput3 = (val: any) => {
  test3.value = val.value
}
...
<yelo-textarea :text="test3" @handleInputEmit="handleInput3" readonly></yelo-textarea>
`

const code4 = `const test4 = ref('')
const temp = ref("请输入内容")
const handleInput4 = (val: any) => {
  test4.value = val.value
}
...
<p>父组件绑定子组件内容：{{ test4 }}</p>
<yelo-textarea :text="test4" @handleInputEmit="handleInput4" :placeholder="temp"></yelo-textarea>`

const code5 = `const test5 = ref('A1高闪来一个，秋梨膏')
const handleInput5 = (val: any) => {
  test5.value = val.value
}
const handleFocus = (val: any) => {
  console.log('您已聚焦', val.value)
}
const handleBlur = (val: any) => {
  console.log('您已移出', val.value)
}
...
<yelo-textarea :text="test5" @handleInputEmit="handleInput5" @handleFocusEmit="handleFocus" @handleBlurEmit="handleBlur"></yelo-textarea>
`

const code6 = `const test6 = ref('A1高闪来一个，秋梨膏')
const handleInput6 = (val: any) => {
  test6.value = val.value
}
...
<yelo-textarea :text="test6" @handleInputEmit="handleInput6" :rows=6 :cols="25" :maxLen=20></yelo-textarea>
`

const code7 = `const test7 = ref('A1高闪来一个，秋梨膏')
const handleInput7 = (val: any) => {
  test6.value = val.value
}
...
<yelo-textarea :text="test7" @handleInputEmit="handleInput7" resize></yelo-textarea>
`

</script>

<template>
  <div class="textareaPage">
    <hr class="divide" />
    <div class="textareas">
      <div>
        <h3 class="textareas-title">一、基本使用</h3>
        <yelo-textarea :text="test1" @handleInputEmit="handleInput1"></yelo-textarea>
      </div>
      <div class="codesWrap">
        <highlightjs codes="Javascript" :code="code1" />
      </div>
      <div>
        <h3 class="textareas-title">二、设置禁用</h3>
        <yelo-textarea :text="test2" @handleInputEmit="handleInput2" disabled></yelo-textarea>
      </div>
      <div class="codesWrap">
        <highlightjs codes="Javascript" :code="code2" />
      </div>
      <div>
        <h3 class="textareas-title">三、设置只读</h3>
        <yelo-textarea :text="test3" @handleInputEmit="handleInput3" readonly></yelo-textarea>
      </div>
      <div class="codesWrap">
        <highlightjs codes="Javascript" :code="code3" />
      </div>
      <div>
        <h3 class="textareas-title">四、设置placeholder</h3>
        <p>父组件绑定子组件内容：{{ test4 }}</p>
        <yelo-textarea :text="test4" @handleInputEmit="handleInput4" :placeholder="temp"></yelo-textarea>
      </div>
      <div class="codesWrap">
        <highlightjs codes="Javascript" :code="code4" />
      </div>
      <div>
        <h3 class="textareas-title">五、设置聚焦/移出事件</h3>
        <yelo-textarea :text="test5" @handleInputEmit="handleInput5" @handleFocusEmit="handleFocus"
          @handleBlurEmit="handleBlur"></yelo-textarea>
      </div>
      <div class="codesWrap">
        <highlightjs codes="Javascript" :code="code5" />
      </div>
      <div>
        <h3 class="textareas-title">六、设置最大输入长度</h3>
        <yelo-textarea :text="test6" @handleInputEmit="handleInput6" :rows=6 :cols="25" :maxLen=20></yelo-textarea>
      </div>
      <div class="codesWrap">
        <highlightjs codes="Javascript" :code="code6" />
      </div>
      <div>
        <h3 class="textareas-title">七、开启resize</h3>
        <yelo-textarea :text="test7" @handleInputEmit="handleInput7" resize></yelo-textarea>
      </div>
      <div class="codesWrap">
        <highlightjs codes="Javascript" :code="code7" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.textareaPage {
  margin: 40px 20px;
  width: 1000px;

  .divide {
    margin: 40px 20px;
  }

  .textareas {
    margin: 0px 40px;

    &-title {
      margin: 20px 0;
    }
  }
}
</style>
