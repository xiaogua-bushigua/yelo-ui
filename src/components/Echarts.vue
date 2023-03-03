<script setup lang="ts">
import * as echarts from 'echarts';
import { ref } from 'vue';

// echarts配置项
type EChartsOption = echarts.EChartsOption;
const option1: EChartsOption = {
	xAxis: {
		type: 'category',
		data: ['1', '2', '3', '4', '5', '6', '7'],
	},
	yAxis: {
		type: 'value',
	},
	series: [
		{
			data: [
				120,
				{
					value: 200,
					itemStyle: {
						color: '#a90000',
					},
				},
				150,
				80,
				70,
				110,
				130,
			],
			type: 'bar',
		},
	],
};

const option2: EChartsOption = {
	xAxis: {
		data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27'],
	},
	yAxis: {},
	series: [
		{
			type: 'candlestick',
			data: [
				[20, 34, 10, 38],
				[40, 35, 30, 50],
				[31, 38, 33, 44],
				[38, 15, 5, 42],
			],
		},
	],
};

let height = ref('300');
let width = ref('500');
const handleChangeSize = () => {
	height.value = 300 + Math.floor(Math.random() * 100 - 100) + '';
	width.value = 500 + Math.floor(Math.random() * 100 - 100) + '';
};

let option = ref(option1);
let flag = true;
const handleChangeChart = () => {
	if (flag) {
		option.value = option2;
		flag = false;
	} else {
		option.value = option1;
		flag = true;
	}
};

const code = `<yelo-button type="primary" @click="handleChangeHeight">自适应尺寸</yelo-button>
<yelo-button type="primary" @click="handleChangeChart">更改options</yelo-button>
<yelo-echarts :height="height" :width="width" :option="option"></yelo-echarts>`;

const code1 = `
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

let height = ref("300")
let width = ref("500")
const handleChangeSize = () => {
  height.value = (300 + Math.floor(Math.random() * 100 - 100)) + ''
  width.value = (500 + Math.floor(Math.random() * 100 - 100)) + ''
}

let option = ref(option1)
let flag = true
const handleChangeChart = () => {
  if (flag) { option.value = option2; flag = false }
  else { option.value = option1; flag = true }
}`;
</script>

<template>
	<div class="echartsPage">
		<hr class="divide" />
		<div class="echarts">
			<div>
				<h3 class="echarts-title">更换options切换chart</h3>
				<yelo-button type="primary" @click="handleChangeSize">更改尺寸</yelo-button>
				<yelo-button type="primary" @click="handleChangeChart">更改options</yelo-button>
				<yelo-echarts :height="height" :width="width" :option="option"></yelo-echarts>
			</div>
			<div class="codesWrap">
				<highlightjs autodetect :code="code" />
			</div>
			<div class="codesWrap">
				<highlightjs autodetect :code="code1" />
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.echartsPage {
	margin: 40px 20px;
	width: 1000px;

	.divide {
		margin: 40px 20px;
	}

	.echarts {
		margin: 0px 40px;

		&-title {
			margin: 20px 0;
		}
	}
}

button {
	margin: 0 20px;
}
</style>
