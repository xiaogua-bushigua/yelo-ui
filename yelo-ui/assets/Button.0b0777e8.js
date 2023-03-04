import{e as h,f as m,c as v,d as u,a as t,w as o,u as I,r as i,p as E,b as x,o as B,g as n,_ as D}from"./index.91bb1f95.js";const a=l=>(E("data-v-2943dc8a"),l=l(),x(),l),w={class:"buttonPage"},C=a(()=>u("hr",{class:"divide"},null,-1)),F={class:"btns"},W=a(()=>u("h3",{class:"btns-title"},"\u4E00\u3001\u65B9\u5F62\u6309\u94AE",-1)),S={class:"btns-wrap"},z={class:"codesWrap"},P=a(()=>u("h3",{class:"btns-title"},"\u4E8C\u3001\u65B9\u5F62\u9542\u7A7A\u6309\u94AE",-1)),A={class:"btns-wrap"},k={class:"codesWrap"},j=a(()=>u("h3",{class:"btns-title"},"\u4E09\u3001\u5706\u89D2\u6309\u94AE",-1)),R={class:"btns-wrap"},N={class:"codesWrap"},V=a(()=>u("h3",{class:"btns-title"},"\u56DB\u3001\u8BBE\u7F6E\u7981\u7528",-1)),L={class:"btns-wrap"},M={class:"codesWrap"},T=a(()=>u("h3",{class:"btns-title"},"\u4E94\u3001\u8BBE\u7F6E\u6309\u94AE\u5927\u5C0F",-1)),q={class:"btns-wrap"},G={class:"codesWrap"},H=a(()=>u("h3",{class:"btns-title"},"\u516D\u3001\u524D\u540E\u7F6E\u56FE\u6807",-1)),J={class:"btns-wrap"},K={class:"codesWrap"},O=a(()=>u("h3",{class:"btns-title"},"\u4E03\u3001\u70B9\u51FB\u663E\u793A\u52A0\u8F7D",-1)),Q={class:"btns-wrap"},U={class:"codesWrap"},X=h({__name:"Button",setup(l){let d=m(!1);const c=()=>{d.value=!0,setTimeout(()=>{d.value=!1},2e3)},y=`<yelo-button>Default</yelo-button>
<yelo-button type="primary">Primary</yelo-button>
<yelo-button type="success">Success</yelo-button>
<yelo-button type="info">Info</yelo-button>
<yelo-button type="warning">Warning</yelo-button>
<yelo-button type="danger">Danger</yelo-button>`,r=`<yelo-button plain>Plain</yelo-button>
<yelo-button type="primary" plain>Primary</yelo-button>
<yelo-button type="success" plain>Success</yelo-button>
<yelo-button type="info" plain>Info</yelo-button>
<yelo-button type="warning" plain>Warning</yelo-button>
<yelo-button type="danger" plain>Danger</yelo-button>`,p=`<yelo-button round>Round</yelo-button>
<yelo-button type="primary" round>Primary</yelo-button>
<yelo-button type="success" round>Success</yelo-button>
<yelo-button type="info" round>Info</yelo-button>
<yelo-button type="warning" round>Warning</yelo-button>
<yelo-button type="danger" round>Danger</yelo-button>`,_=`<yelo-button disabled>Round</yelo-button>
<yelo-button type="primary" disabled>Primary</yelo-button>
<yelo-button type="success" disabled>Success</yelo-button>
<yelo-button type="info" disabled>Info</yelo-button>
<yelo-button type="warning" disabled>Warning</yelo-button>
<yelo-button type="danger" disabled>Danger</yelo-button>`,b=`<yelo-button type="primary" size="small">Small</yelo-button>
<yelo-button type="primary">Middle</yelo-button>
<yelo-button type="primary" size="large">Large</yelo-button>`,f=`<yelo-button type="primary" prefixIcon="shoucang">\u6536\u85CF</yelo-button>
<yelo-button type="primary" suffixIcon="dianzan">\u70B9\u8D5E</yelo-button>
<yelo-button type="primary" prefixIcon="shoucang" suffixIcon="dianzan">\u53CC\u4FA7</yelo-button>`,g='<yelo-button @btnClick="handleClick" type="primary" prefixIcon="shuyi_jiazai" suffixIcon="xiazai" :loading="loading">\u4E0B\u8F7D</yelo-button>';return(Y,Z)=>{const e=i("yelo-button"),s=i("highlightjs");return B(),v("div",w,[C,u("div",F,[u("div",null,[W,u("div",S,[t(e,null,{default:o(()=>[n("Default")]),_:1}),t(e,{type:"primary"},{default:o(()=>[n("Primary")]),_:1}),t(e,{type:"success"},{default:o(()=>[n("Success")]),_:1}),t(e,{type:"info"},{default:o(()=>[n("Info")]),_:1}),t(e,{type:"warning"},{default:o(()=>[n("Warning")]),_:1}),t(e,{type:"danger"},{default:o(()=>[n("Danger")]),_:1})]),u("div",z,[t(s,{autodetect:"",code:y})])]),u("div",null,[P,u("div",A,[t(e,{plain:""},{default:o(()=>[n("Plain")]),_:1}),t(e,{type:"primary",plain:""},{default:o(()=>[n("Primary")]),_:1}),t(e,{type:"success",plain:""},{default:o(()=>[n("Success")]),_:1}),t(e,{type:"info",plain:""},{default:o(()=>[n("Info")]),_:1}),t(e,{type:"warning",plain:""},{default:o(()=>[n("Warning")]),_:1}),t(e,{type:"danger",plain:""},{default:o(()=>[n("Danger")]),_:1})]),u("div",k,[t(s,{autodetect:"",code:r})])]),u("div",null,[j,u("div",R,[t(e,{round:""},{default:o(()=>[n("Round")]),_:1}),t(e,{type:"primary",round:""},{default:o(()=>[n("Primary")]),_:1}),t(e,{type:"success",round:""},{default:o(()=>[n("Success")]),_:1}),t(e,{type:"info",round:""},{default:o(()=>[n("Info")]),_:1}),t(e,{type:"warning",round:""},{default:o(()=>[n("Warning")]),_:1}),t(e,{type:"danger",round:""},{default:o(()=>[n("Danger")]),_:1})]),u("div",N,[t(s,{autodetect:"",code:p})])]),u("div",null,[V,u("div",L,[t(e,{disabled:""},{default:o(()=>[n("Round")]),_:1}),t(e,{type:"primary",disabled:""},{default:o(()=>[n("Primary")]),_:1}),t(e,{type:"success",disabled:""},{default:o(()=>[n("Success")]),_:1}),t(e,{type:"info",disabled:""},{default:o(()=>[n("Info")]),_:1}),t(e,{type:"warning",disabled:""},{default:o(()=>[n("Warning")]),_:1}),t(e,{type:"danger",disabled:""},{default:o(()=>[n("Danger")]),_:1})]),u("div",M,[t(s,{autodetect:"",code:_})])]),u("div",null,[T,u("div",q,[t(e,{type:"primary",size:"small"},{default:o(()=>[n("Small")]),_:1}),t(e,{type:"primary"},{default:o(()=>[n("Middle")]),_:1}),t(e,{type:"primary",size:"large"},{default:o(()=>[n("Large")]),_:1})]),u("div",G,[t(s,{autodetect:"",code:b})])]),u("div",null,[H,u("div",J,[t(e,{type:"primary",prefixIcon:"shoucang"},{default:o(()=>[n("\u6536\u85CF")]),_:1}),t(e,{type:"primary",suffixIcon:"dianzan"},{default:o(()=>[n("\u70B9\u8D5E")]),_:1}),t(e,{type:"primary",prefixIcon:"shoucang",suffixIcon:"dianzan"},{default:o(()=>[n("\u53CC\u4FA7")]),_:1})]),u("div",K,[t(s,{autodetect:"",code:f})])]),u("div",null,[O,u("div",Q,[t(e,{onBtnClick:c,type:"primary",prefixIcon:"shuyi_jiazai",suffixIcon:"xiazai",loading:I(d)},{default:o(()=>[n("\u4E0B\u8F7D")]),_:1},8,["loading"])]),u("div",U,[t(s,{autodetect:"",code:g})])])])])}}});const tt=D(X,[["__scopeId","data-v-2943dc8a"]]);export{tt as default};
