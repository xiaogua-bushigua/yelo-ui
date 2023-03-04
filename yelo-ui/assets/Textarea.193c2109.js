import{e as w,f as a,c as z,d as e,a as u,t as T,r as p,p as j,b as k,o as L,_ as N}from"./index.91bb1f95.js";const s=o=>(j("data-v-27011cd6"),o=o(),k(),o),V={class:"textareaPage"},P=s(()=>e("hr",{class:"divide"},null,-1)),q={class:"textareas"},G=s(()=>e("h3",{class:"textareas-title"},"\u4E00\u3001\u57FA\u672C\u4F7F\u7528",-1)),K={class:"codesWrap"},M=s(()=>e("h3",{class:"textareas-title"},"\u4E8C\u3001\u8BBE\u7F6E\u7981\u7528",-1)),O={class:"codesWrap"},Q=s(()=>e("h3",{class:"textareas-title"},"\u4E09\u3001\u8BBE\u7F6E\u53EA\u8BFB",-1)),R={class:"codesWrap"},U=s(()=>e("h3",{class:"textareas-title"},"\u56DB\u3001\u8BBE\u7F6Eplaceholder",-1)),X={class:"codesWrap"},Y=s(()=>e("h3",{class:"textareas-title"},"\u4E94\u3001\u8BBE\u7F6E\u805A\u7126/\u79FB\u51FA\u4E8B\u4EF6",-1)),Z={class:"codesWrap"},$=s(()=>e("h3",{class:"textareas-title"},"\u516D\u3001\u8BBE\u7F6E\u6700\u5927\u8F93\u5165\u957F\u5EA6",-1)),ee={class:"codesWrap"},te=s(()=>e("h3",{class:"textareas-title"},"\u4E03\u3001\u5F00\u542Fresize",-1)),ue={class:"codesWrap"},ae=w({__name:"Textarea",setup(o){const v=a("A1\u9AD8\u95EA\u6765\u4E00\u4E2A\uFF0C\u79CB\u68A8\u818F"),A=t=>{v.value=t.value},E=a("A1\u9AD8\u95EA\u6765\u4E00\u4E2A\uFF0C\u79CB\u68A8\u818F"),F=t=>{E.value=t.value},i=a("A1\u9AD8\u95EA\u6765\u4E00\u4E2A\uFF0C\u79CB\u68A8\u818F"),h=t=>{i.value=t.value},c=a(""),_=a("\u8BF7\u8F93\u5165\u5185\u5BB9"),x=t=>{c.value=t.value},r=a("A1\u9AD8\u95EA\u6765\u4E00\u4E2A\uFF0C\u79CB\u68A8\u818F"),B=t=>{r.value=t.value},I=t=>{console.log("\u60A8\u5DF2\u805A\u7126",t.value)},m=t=>{console.log("\u60A8\u5DF2\u79FB\u51FA",t.value)},d=a("A1\u9AD8\u95EA\u6765\u4E00\u4E2A\uFF0C\u79CB\u68A8\u818F"),C=t=>{d.value=t.value},y=a("A1\u9AD8\u95EA\u6765\u4E00\u4E2A\uFF0C\u79CB\u68A8\u818F"),D=t=>{d.value=t.value},f=`const test1 = ref('A1\u9AD8\u95EA\u6765\u4E00\u4E2A\uFF0C\u79CB\u68A8\u818F')
const handleInput1 = (val: any) => {
  test1.value = val.value
}
...
<yelo-textarea :text="test1" @handleInputEmit="handleInput1"></yelo-textarea>
`,g=`const test2 = ref('A1\u9AD8\u95EA\u6765\u4E00\u4E2A\uFF0C\u79CB\u68A8\u818F')
const handleInput2 = (val: any) => {
  test2.value = val.value
}
...
<yelo-textarea :text="test2" @handleInputEmit="handleInput2" disabled></yelo-textarea>
`,H=`const test3 = ref('A1\u9AD8\u95EA\u6765\u4E00\u4E2A\uFF0C\u79CB\u68A8\u818F')
const handleInput3 = (val: any) => {
  test3.value = val.value
}
...
<yelo-textarea :text="test3" @handleInputEmit="handleInput3" readonly></yelo-textarea>
`,J=`const test4 = ref('')
const temp = ref("\u8BF7\u8F93\u5165\u5185\u5BB9")
const handleInput4 = (val: any) => {
  test4.value = val.value
}
...
<p>\u7236\u7EC4\u4EF6\u7ED1\u5B9A\u5B50\u7EC4\u4EF6\u5185\u5BB9\uFF1A{{ test4 }}</p>
<yelo-textarea :text="test4" @handleInputEmit="handleInput4" :placeholder="temp"></yelo-textarea>`,W=`const test5 = ref('A1\u9AD8\u95EA\u6765\u4E00\u4E2A\uFF0C\u79CB\u68A8\u818F')
const handleInput5 = (val: any) => {
  test5.value = val.value
}
const handleFocus = (val: any) => {
  console.log('\u60A8\u5DF2\u805A\u7126', val.value)
}
const handleBlur = (val: any) => {
  console.log('\u60A8\u5DF2\u79FB\u51FA', val.value)
}
...
<yelo-textarea :text="test5" @handleInputEmit="handleInput5" @handleFocusEmit="handleFocus" @handleBlurEmit="handleBlur"></yelo-textarea>
`,S=`const test6 = ref('A1\u9AD8\u95EA\u6765\u4E00\u4E2A\uFF0C\u79CB\u68A8\u818F')
const handleInput6 = (val: any) => {
  test6.value = val.value
}
...
<yelo-textarea :text="test6" @handleInputEmit="handleInput6" :rows=6 :cols="25" :maxLen=20></yelo-textarea>
`,b=`const test7 = ref('A1\u9AD8\u95EA\u6765\u4E00\u4E2A\uFF0C\u79CB\u68A8\u818F')
const handleInput7 = (val: any) => {
  test6.value = val.value
}
...
<yelo-textarea :text="test7" @handleInputEmit="handleInput7" resize></yelo-textarea>
`;return(t,se)=>{const l=p("yelo-textarea"),n=p("highlightjs");return L(),z("div",V,[P,e("div",q,[e("div",null,[G,u(l,{text:v.value,onHandleInputEmit:A},null,8,["text"])]),e("div",K,[u(n,{codes:"Javascript",code:f})]),e("div",null,[M,u(l,{text:E.value,onHandleInputEmit:F,disabled:""},null,8,["text"])]),e("div",O,[u(n,{codes:"Javascript",code:g})]),e("div",null,[Q,u(l,{text:i.value,onHandleInputEmit:h,readonly:""},null,8,["text"])]),e("div",R,[u(n,{codes:"Javascript",code:H})]),e("div",null,[U,e("p",null,"\u7236\u7EC4\u4EF6\u7ED1\u5B9A\u5B50\u7EC4\u4EF6\u5185\u5BB9\uFF1A"+T(c.value),1),u(l,{text:c.value,onHandleInputEmit:x,placeholder:_.value},null,8,["text","placeholder"])]),e("div",X,[u(n,{codes:"Javascript",code:J})]),e("div",null,[Y,u(l,{text:r.value,onHandleInputEmit:B,onHandleFocusEmit:I,onHandleBlurEmit:m},null,8,["text"])]),e("div",Z,[u(n,{codes:"Javascript",code:W})]),e("div",null,[$,u(l,{text:d.value,onHandleInputEmit:C,rows:6,cols:25,maxLen:20},null,8,["text"])]),e("div",ee,[u(n,{codes:"Javascript",code:S})]),e("div",null,[te,u(l,{text:y.value,onHandleInputEmit:D,resize:""},null,8,["text"])]),e("div",ue,[u(n,{codes:"Javascript",code:b})])])])}}});const ne=N(ae,[["__scopeId","data-v-27011cd6"]]);export{ne as default};
