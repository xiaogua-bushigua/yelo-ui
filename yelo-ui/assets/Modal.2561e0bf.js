import{e as D,f as _,c as g,d as e,a as u,w as s,u as h,r as d,p as b,b as f,o as x,g as o,_ as N}from"./index.91bb1f95.js";const l=a=>(b("data-v-501e6ba6"),a=a(),f(),a),Y={class:"modalsPage"},H=l(()=>e("hr",{class:"divide"},null,-1)),O={class:"modals"},I=l(()=>e("h3",{class:"modals-title"},"\u4E00\u3001\u666E\u901A\u6A21\u6001\u7A97\u53E3",-1)),w={class:"codesWrap"},M={class:"modals"},S=l(()=>e("h3",{class:"modals-title"},"\u4E8C\u3001\u8868\u5355\u6A21\u6001\u7A97\u53E3",-1)),V=l(()=>e("div",null,[o("\u59D3\u540D\uFF1A"),e("input",{type:"text"})],-1)),j=l(()=>e("div",null,[o("\u5E74\u9F84\uFF1A"),e("input",{type:"text"})],-1)),W=l(()=>e("div",null,[o("\u8EAB\u9AD8\uFF1A"),e("input",{type:"text"})],-1)),P={class:"codesWrap"},T=D({__name:"Modal",setup(a){let t=_("none");const y=()=>{t.value="block"},F=()=>{t.value="none",console.log("\u4F60\u70B9\u51FB\u4E86\u786E\u8BA4")},B=()=>{t.value="none",console.log("\u4F60\u70B9\u51FB\u4E86\u53D6\u6D88")},E=()=>{t.value="none",console.log("\u4F60\u70B9\u51FB\u4E86\u906E\u7F69")};let n=_("none");const m=()=>{n.value="block"},v=()=>{n.value="none",console.log("\u4F60\u70B9\u51FB\u4E86\u786E\u8BA4")},k=()=>{n.value="none",console.log("\u4F60\u70B9\u51FB\u4E86\u53D6\u6D88")},A=()=>{n.value="none",console.log("\u4F60\u70B9\u51FB\u4E86\u906E\u7F69")},r=`let display = ref('none')
const handleOpen = () => {
  display.value = 'block'
}

const handleClickYes = () => {
  display.value = 'none'
  console.log('\u4F60\u70B9\u51FB\u4E86\u786E\u8BA4');
}
const handleClickNo = () => {
  display.value = 'none'
  console.log('\u4F60\u70B9\u51FB\u4E86\u53D6\u6D88');
}
const handleClickBack = () => {
  display.value = 'none'
  console.log('\u4F60\u70B9\u51FB\u4E86\u906E\u7F69');
}
...
<yelo-button type="primary" @click="handleOpen">\u5220\u9664</yelo-button>
<yelo-modal title="\u63D0\u793A\u6846" :display="display" @handleYesEmit="handleClickYes" @handleNoEmit="handleClickNo" @handleBackEmit="handleClickBack">\u60A8\u786E\u8BA4\u8981\u5220\u9664\u5417\uFF1F</yelo-modal>
`,C=`<yelo-button type="primary" @click="handleOpen1">\u6DFB\u52A0\u4EBA\u5458</yelo-button>
<yelo-modal title="\u63D0\u793A\u6846" :display="display" @handleYesEmit="handleClickYes" @handleNoEmit="handleClickNo" @handleBackEmit="handleClickBack">
  <div>\u59D3\u540D\uFF1A<input type="text"/></div>
  <div>\u5E74\u9F84\uFF1A<input type="text"/></div>
  <div>\u8EAB\u9AD8\uFF1A<input type="text"/></div>
</yelo-modal>`;return(q,z)=>{const c=d("yelo-button"),i=d("yelo-modal"),p=d("highlightjs");return x(),g("div",Y,[H,e("div",O,[e("div",null,[I,u(c,{type:"primary",onClick:y},{default:s(()=>[o("\u5220\u9664")]),_:1}),u(i,{title:"\u63D0\u793A\u6846",display:h(t),onHandleYesEmit:F,onHandleNoEmit:B,onHandleBackEmit:E},{default:s(()=>[o("\u60A8\u786E\u8BA4\u8981\u5220\u9664\u5417\uFF1F")]),_:1},8,["display"])]),e("div",w,[u(p,{autodetect:"",code:r})])]),e("div",M,[e("div",null,[S,u(c,{type:"primary",onClick:m},{default:s(()=>[o("\u6DFB\u52A0\u4EBA\u5458")]),_:1}),u(i,{title:"\u63D0\u793A\u6846",display:h(n),onHandleYesEmit:v,onHandleNoEmit:k,onHandleBackEmit:A},{default:s(()=>[V,j,W]),_:1},8,["display"])]),e("div",P,[u(p,{autodetect:"",code:C})])])])}}});const J=N(T,[["__scopeId","data-v-501e6ba6"]]);export{J as default};
