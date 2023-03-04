import{e as A,f as n,c as w,d as t,a as e,w as u,u as i,r as c,p as E,b,o as k,g as _,_ as M}from"./index.91bb1f95.js";const y=o=>(E("data-v-90c637c8"),o=o(),b(),o),S={class:"echartsPage"},F=y(()=>t("hr",{class:"divide"},null,-1)),B={class:"echarts"},I=y(()=>t("h3",{class:"echarts-title"},"\u66F4\u6362options\u5207\u6362chart",-1)),O={class:"codesWrap"},N={class:"codesWrap"},V=A({__name:"Echarts",setup(o){const l={xAxis:{type:"category",data:["1","2","3","4","5","6","7"]},yAxis:{type:"value"},series:[{data:[120,{value:200,itemStyle:{color:"#a90000"}},150,80,70,110,130],type:"bar"}]},g={xAxis:{data:["2017-10-24","2017-10-25","2017-10-26","2017-10-27"]},yAxis:{},series:[{type:"candlestick",data:[[20,34,10,38],[40,35,30,50],[31,38,33,44],[38,15,5,42]]}]};let h=n("300"),r=n("500");const f=()=>{h.value=300+Math.floor(Math.random()*100-100)+"",r.value=500+Math.floor(Math.random()*100-100)+""};let a=n(l),s=!0;const v=()=>{s?(a.value=g,s=!1):(a.value=l,s=!0)},m=`<yelo-button type="primary" @click="handleChangeHeight">\u81EA\u9002\u5E94\u5C3A\u5BF8</yelo-button>
<yelo-button type="primary" @click="handleChangeChart">\u66F4\u6539options</yelo-button>
<yelo-echarts :height="height" :width="width" :option="option"></yelo-echarts>`,C=`
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
}`;return(j,z)=>{const d=c("yelo-button"),x=c("yelo-echarts"),p=c("highlightjs");return k(),w("div",S,[F,t("div",B,[t("div",null,[I,e(d,{type:"primary",onClick:f},{default:u(()=>[_("\u66F4\u6539\u5C3A\u5BF8")]),_:1}),e(d,{type:"primary",onClick:v},{default:u(()=>[_("\u66F4\u6539options")]),_:1}),e(x,{height:i(h),width:i(r),option:i(a)},null,8,["height","width","option"])]),t("div",O,[e(p,{autodetect:"",code:m})]),t("div",N,[e(p,{autodetect:"",code:C})])])])}}});const H=M(V,[["__scopeId","data-v-90c637c8"]]);export{H as default};
