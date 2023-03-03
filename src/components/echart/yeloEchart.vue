<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted, ref, computed, watch, toRefs, reactive, nextTick } from 'vue';

let props = defineProps({
  height: {
    type: String,
    default: 300
  },
  width: {
    type: String,
    default: 400
  },
  option: {
    type: Object,
    default: {}
  }
})

let data = toRefs(props)
let options = reactive(data.option)

let chart = ref<HTMLDivElement>()
let myChart: any
onMounted(() => {
  let chartDom = chart.value as unknown as HTMLElement;
  myChart = echarts.init(chartDom);
  myChart.setOption(options.value);
})

const getStyle = computed(() => {
  return { width: data.width.value + 'px', height: data.height.value + 'px' }
})

watch([data.height, data.width], () => {
  nextTick(() => {
    myChart.resize({
      animation: {
        duration: 300
      }
    })
  })
})
watch([options], () => {
  myChart.setOption(options.value);
})

</script>

<template>
  <div ref="chart" :style="getStyle"></div>
</template>