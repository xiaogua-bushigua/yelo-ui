# 🚀 yelo - ui



基于 **Vue3 + TypeScript + Vite3** 的组件库

对 tour(用户引导)、ecahrts、swiper、modal、button、textarea 组件实现封装

`npm i yelo-ui`

Github：https://github.com/xiaogua-bushigua/yelo-ui

npm：https://www.npmjs.com/package/yelo-ui

在线浏览：http://175.24.176.28:8002/#/home



## 🪡 使用方法

**main.ts**

```javascript
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import yeloUI from 'yelo-ui'
import 'yelo-ui/dist/style.css'

createApp(App).use(yeloUI).mount('#app')
```
**组件页**
```html
<yeloTour :option="tourOptions" :show="true" />
```



## 🧩 Tour

```javascript
const block1 = ref<Element>();
const block2 = ref<Element>();
const block3 = ref<Element>();
const block4 = ref<Element>();
const block5 = ref<Element>();

const tourOptions = [
	{
		target: block1,
		content: '《荷塘月色》是中国现代文学家朱自清任教清华大学时创作的散文，因收入中学语文教材而广为人知，是现代抒情散文的名篇。',
		position: ['bottom', 'right'],
	},
  {
		target: block2,
		content: '《背影》是现代作家朱自清（1898-1948）于1925年所写的一篇回忆性散文。这篇散文叙述的是作者离开南京到北京大学，父亲送他到浦口火车站，照料他上车，并替他买橘子的情形。',
		position: ['bottom', 'right'],
	},
  {
		target: block3,
		content: '《故都的秋》是中国现代著名小说家、散文家、诗人、革命烈士郁达夫于1934年8月创作的散文。',
		position: ['top', 'left'],
	},
  {
		target: block4,
		content: '《六国论》提出并论证了六国灭亡“弊在赂秦”的精辟论点，“借古讽今”，抨击宋王朝对辽和西夏的屈辱政策，告诫北宋统治者要吸取六国灭亡的教训，以免重蹈覆辙。',
		position: ['bottom', 'left'],
	},
  {
		target: block5,
		content: '《赤壁赋》是北宋文学家苏轼创作的一篇赋，作于宋神宗元丰五年（1082年）作者贬谪黄州（今湖北黄冈）时。',
		position: ['top', 'right'],
	},
];
```

#### 配置项

`target`：`ref` 引用的元素

`content`：提示框里的文本内容

`position`：提示框相对于高亮元素的位置，`['top/bottom', 'right/left']`

`show`：控制组件显示【可选参数】

```vue
<yelo-tour :option="tourOptions" :show="true"/>
```

实际使用时建议搭配 v-if 指令，以在组件外更好的控制：

```javascript
onMounted(() => {
	if (localStorage.getItem('doneTour') !== 'yes') useMainStore().tourShow = true;
  	else useMainStore().tourShow = false
});

<yeloTour :option="tourOptions" v-if="useMainStore().tourShow"/>
```



## 🧩 Echarts

```typescript
import * as echarts from 'echarts';

type EChartsOption = echarts.EChartsOption;
const option1: EChartsOption = {
  xAxis: {
    type: 'category',
    data: ['1', '2', '3', '4', '5', '6', '7']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [
        120,
        {
          value: 200,
          itemStyle: {
            color: '#a90000'
          }
        },
        150,
        80,
        70,
        110,
        130
      ],
      type: 'bar'
    }
  ]
};
const option2: EChartsOption = {
  xAxis: {
    data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
  },
  yAxis: {},
  series: [
    {
      type: 'candlestick',
      data: [
        [20, 34, 10, 38],
        [40, 35, 30, 50],
        [31, 38, 33, 44],
        [38, 15, 5, 42]
      ]
    }
  ]
};

let option = ref(option1)
```

- 更改尺寸

  ```typescript
  let height = ref("300")
  let width = ref("500")
  const handleChangeSize = () => {
    height.value = (300 + Math.floor(Math.random() * 100 - 100)) + ''
    width.value = (500 + Math.floor(Math.random() * 100 - 100)) + ''
  }
  ```

  ```html
  <yeloButton type="primary" @click="handleChangeHeight">自适应尺寸</yeloButton>
  <yeloEcharts :height="height" :width="width" :option="option"></yeloEcharts>
  ```

- 更换配置

  ```typescript
  let flag = true
  const handleChangeChart = () => {
    if (flag) { option.value = option2; flag = false }
    else { option.value = option1; flag = true }
  }
  ```

  ```html
  <yeloButton type="primary" @click="handleChangeChart">更改options</yeloButton>
  <yeloEcharts :height="height" :width="width" :option="option"></yeloEcharts>
  ```

  

## 🧩 Swiper 轮播

```typescript
const imgsURL = ['/src/assets/swipers/1.jpeg', '/src/assets/swipers/2.jpeg', '/src/assets/swipers/3.jpeg']
const imgsURL1 = ['https://img2.baidu.com/it/u=2632730749,1389792745&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=721', 'https://img2.baidu.com/it/u=452199401,3287833971&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=1037', 'https://img1.baidu.com/it/u=3170338415,819326975&fm=253&fmt=auto&app=120&f=JPEG?w=640&h=896']
```

- 定时切换

  ```html
  <yeloSwiper :imgsURL="imgsURL" setTime></yeloSwiper>
  ```

- 更改尺寸

  ```html
  <yeloSwiper :imgsURL="imgsURL1" setTime :height=240 :width=160></yeloSwiper>
  ```

- 侧边点击切换+定时

  ```html
  <yeloSwiper :imgsURL="imgsURL" sideClicked setTime></yeloSwiper>
  ```

- 下方点击切换+侧方点击切换+定时

  ```html
  <yeloSwiper :imgsURL="imgsURL" botClicked setTime sideClicked></yeloSwiper>
  ```



## 🧩 Button

- default、primary、success、info、danger、warning 六种基本样式类型

  ```html
  <yelo-button>Default</yelo-button>
  <yelo-button type="primary">Primary</yelo-button>
  <yelo-button type="success">Success</yelo-button>
  <yelo-button type="info">Info</yelo-button>
  <yelo-button type="warning">Warning</yelo-button>
  <yelo-button type="danger">Danger</yelo-button>
  ```

- 圆角、plain、可设置禁用

  ```html
  <yelo-button type="primary" plain>Primary</yelo-button>
  <yelo-button type="primary" round>Primary</yelo-button>
  <yelo-button type="primary" disabled>Primary</yelo-button>
  ```

- 三种基本大小

  ```html
  <yelo-button type="primary" size="small">Small</yelo-button>
  <yelo-button type="primary">Middle</yelo-button>
  <yelo-button type="primary" size="large">Large</yelo-button>
  ```

- 设置 icon

  使用 iconfont 阿里巴巴矢量图标，https://www.iconfont.cn/

  1. 在 iconfont 添加图标至自定义的项目，选择 Font Class 一栏，并下载至本地

  2. 将解压出来的文件放到 src\assets\iconfont

  3. 在 vue 项目的 index.html 中引入，

     `<link rel="stylesheet" href="./src/assets/iconfont/iconfont.css">`

  ```html
  <yelo-button type="primary" prefixIcon="shoucang">收藏</yelo-button>
  <yelo-button type="primary" suffixIcon="dianzan">点赞</yelo-button>
  <yelo-button type="primary" prefixIcon="shoucang" suffixIcon="dianzan">双侧</yelo-button>
  ```

- 点击显示动态 icon

  ```html
  <yelo-button @btnClick="handleClick" type="primary" prefixIcon="shuyi_jiazai" suffixIcon="xiazai" :loading="loading">下载</yelo-button>
  ```



## 🧩 Textarea

```typescript
const temp = ref("请输入内容")
const test = ref('A1高闪来一个，秋梨膏')
const handleInput = (tar: HTMLInputElement) => {
  test.value = tar.value
}
const handleFocus = (tar: HTMLInputElement) => {
  console.log('您已聚焦', tar.value)
}
const handleBlur = (tar: HTMLInputElement) => {
  console.log('您已移出', tar.value)
}
```

- 基本使用

  ```html
  <yeloTextarea :text="test" @handleInputEmit="handleInput"></yeloTextarea>
  ```

- 设置禁用

  ```html
  <yeloTextarea :text="test" @handleInputEmit="handleInput" disabled></yeloTextarea>
  ```

- 设置只读

  ```html
  <yeloTextarea :text="test" @handleInputEmit="handleInput" readonly></yeloTextarea>
  ```

- 设置placeholder

  ```html
  <p>父组件绑定子组件内容：{{ test }}</p>
  <yeloTextarea :text="test" @handleInputEmit="handleInput" :placeholder="temp"></yeloTextarea>
  ```

- 设置聚焦/移出回调函数

  ```html
  <yeloTextarea :text="test" @handleInputEmit="handleInput" @handleFocusEmit="handleFocus" @handleBlurEmit="handleBlur"></yeloTextarea>
  ```

- 设置最大输入长度

  ```html
  <yeloTextarea :text="test" @handleInputEmit="handleInput" :rows=6 :cols="25" :maxLen=20></yeloTextarea>
  ```

- 开启resize

  ```html
  <yeloTextarea :text="test" @handleInputEmit="handleInput" resize></yeloTextarea>
  ```



## 🧩 Modal

```typescript
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
```

- 普通模态框

  ```html
  <yeloButton type="primary" @click="handleOpen">删除</yeloButton>
  <yeloModal title="提示框" :display="display" @handleYesEmit="handleClickYes" @handleNoEmit="handleClickNo" @handleBackEmit="handleClickBack">您确认要删除吗？</yeloModal>
  ```

- 表单模态框

  ```html
  <yeloButton type="primary" @click="handleOpen1">添加人员</yeloButton>
  <yeloModal title="提示框" :display="display" @handleYesEmit="handleClickYes" @handleNoEmit="handleClickNo" @handleBackEmit="handleClickBack">
    <div>姓名：<input type="text"/></div>
    <div>年龄：<input type="text"/></div>
    <div>身高：<input type="text"/></div>
  </yeloModal>
  ```

