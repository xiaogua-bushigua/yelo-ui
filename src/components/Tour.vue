<script setup lang="ts">
import { ref } from 'vue';
import yeloTour from './tour/yeloTour.vue';

const block1 = ref<Element>();
const block2 = ref<Element>();
const block3 = ref<Element>();
const block4 = ref<Element>();
const block5 = ref<Element>();


const codes = `
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

<yelo-tour :option="tourOptions" :show="true"/>`

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
</script>

<template>
  <yelo-tour :option="tourOptions" :show="true"/>
	<div class="tourPage">
		<hr class="divide" />
		<div class="tour">
			<div class="codesWrap">
				<highlightjs autodetect :code="codes" />
			</div>
			<div class="blocks">
				<div class="region1">
					<div class="block1 b" ref="block1">荷塘月色</div>
					<div class="block4 b" ref="block4">六国论</div>
				</div>
				<div class="region2"><div class="block2 b" ref="block2">背影</div></div>
				<div class="region3">
					<div class="block5 b" ref="block5">赤壁赋</div>
					<div class="block3 b" ref="block3">故都的秋</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.tourPage {
	.divide {
		margin: 40px 20px;
	}

	.tour {
		width: 100%;
    .codesWrap {
      width: 1000px;
      margin-bottom: 20px;
      margin-left: 20px;
    }
	}
}

.blocks {
	width: 100%;
	height: 4000px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border: 2px solid gray;
	box-sizing: border-box;
  .b:hover {
    background-color: rgb(218, 143, 143);
  }
	.region1 {
		display: flex;
		justify-content: space-between;
		width: 100%;
		.block1 {
			width: 100px;
			height: 60px;
			border: 1px solid black;
		}
		.block4 {
			width: 200px;
			height: 160px;
			border: 1px solid black;
		}
	}
	.region2 {
		display: flex;
		justify-content: center;
		width: 100%;
		.block2 {
			width: 200px;
			height: 120px;
			border: 1px solid black;
		}
	}
	.region3 {
		display: flex;
		justify-content: space-between;
		width: 100%;
		.block5 {
			width: 100px;
			height: 60px;
			border: 1px solid black;
		}
		.block3 {
			width: 200px;
			height: 160px;
			border: 1px solid black;
		}
	}
}
</style>
