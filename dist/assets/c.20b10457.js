import{M as k}from"./mock.browser.esm.c440f803.js";import{a as I,s as L,K as N,c as T,e as a,o as s,f as y,h as o,w as t,F as j,E,x as n,j as _,t as p,z as r,p as F,q as M,g as v}from"./index.ce8c6609.js";const u=k.mock({"data|5":[{field1:{"serail|+1":1,"key|1":["",""],value:function(){return"TXSP072"+this.serail}},field2:{"key|1":"\u8FB9\u7F18","value|+1":["\u666F\u8272\u8FB9\u7F18","\u5EFA\u7B51\u8FB9\u7F18","\u8857\u9053\u8FB9\u7F18"],show:!0},field3:{"key|1":"\u8F6E\u5ED3","value|+1":["\u8EAB\u578B\u8F6E\u5ED3","\u5706\u5F62\u8F6E\u5ED3","\u52A8\u7269\u8F6E\u5ED3"],show:!0},field4:{"key|1":"\u7EB9\u7406","value|+1":["\u7EFF\u8272\u7EB9\u7406","\u5F69\u8272\u7EB9\u7406","\u7070\u767D\u7EB9\u7406"],show:!0},field5:{"key|1":"\u53D1\u5C04\u9891\u7387","value|+1":["\u8FBE\u5230\u9884\u5B9A\u7684\u6570\u503C","\u8FBE\u5230\u9884\u5B9A\u7684\u6570\u503C","\u8FBE\u5230\u9884\u5B9A\u7684\u6570\u503C"],show:!1},field6:{"key|1":"\u53D1\u5C04\u95F4\u9694",value:new Date().toLocaleDateString()+" "+new Date().toLocaleTimeString(),show:!1}}]}).data,O=k.mock({"data|5":[{"label|+1":["\u7B2C\u4E00\u4E2A\u76EE\u6807","\u7B2C\u4E8C\u4E2A\u76EE\u6807","\u7B2C\u4E09\u4E2A\u76EE\u6807","\u7B2C\u56DB\u4E2A\u76EE\u6807","\u7B2C\u4E94\u4E2A\u76EE\u6807"],value:!0}]}).data,q=L({components:{SettingOutlined:N},setup(){const l=document.title,i=T(5),f=Object.keys(u[0]).filter(d=>u[0][d].serail==null&&u[0][d].show==!0).map(d=>u[0][d].key).concat(["\u540D\u79F0"]);return{title:l,data:u,switchData:O,inpuValue:i,formLabel:f}}}),g=l=>(F("data-v-1223fdc4"),l=l(),M(),l),z={id:"table-dome"},K=g(()=>v("div",{style:{height:"10px"}},null,-1)),P=g(()=>v("div",{style:{height:"10px"}},null,-1));function X(l,i,f,d,A,G){const w=a("page-header"),h=a("page-layout"),b=a("a-input-search"),c=a("a-descriptions-item"),m=a("a-badge"),x=a("a-descriptions"),S=a("a-card"),$=a("a-col"),D=a("a-row"),V=a("a-pagination"),B=a("page-footer");return s(),y("div",z,[o(h,null,{default:t(()=>[o(w,{title:l.title,describe:"\u7CFB\u7EDF\u9700\u8981\u80FD\u591F\u4ECE\u56FE\u50CF\u4E2D\u63D0\u53D6\u51FA\u6709\u610F\u4E49\u7684\u7279\u5F81\uFF0C\u5982\u8FB9\u7F18\u3001\u8F6E\u5ED3\u3001\u7EB9\u7406\u7B49\uFF0C\u4EE5\u4FBF\u8FDB\u884C\u8FDB\u4E00\u6B65\u7684\u5206\u6790\u3002"},null,8,["title"])]),_:1}),o(h,null,{default:t(()=>[o(b,{placeholder:"\u8BF7\u8F93\u5165",style:{width:"400px"},onSearch:i[0]||(i[0]=e=>l.$alert("\u6B63\u5728\u641C\u7D22\u4E2D\uFF0C\u8BF7\u7A0D\u540E"))}),K,o(D,{gutter:[10,10]},{default:t(()=>[o($,{span:24},{default:t(()=>[(s(!0),y(j,null,E(l.data,(e,C)=>(s(),n(S,{class:"card",key:C},{default:t(()=>[o(x,{title:e.field1.key+" "+e.field1.value,column:5,bordered:""},{default:t(()=>[e.field2.show?(s(),n(c,{key:0,label:e.field2.key,span:2},{default:t(()=>[_(p(e.field2.value)+" ",1)]),_:2},1032,["label"])):r("",!0),e.field3.show?(s(),n(c,{key:1,label:e.field3.key,span:3},{default:t(()=>[o(m,{status:"processing",text:e.field2.value},null,8,["text"])]),_:2},1032,["label"])):r("",!0),e.field4.show?(s(),n(c,{key:2,label:e.field4.key,span:2},{default:t(()=>[_(p(e.field3.value)+" ",1)]),_:2},1032,["label"])):r("",!0),e.field5.show?(s(),n(c,{key:3,label:e.field5.key,span:3},{default:t(()=>[_(p(e.field4.value)+" ",1)]),_:2},1032,["label"])):r("",!0),e.field6.show?(s(),n(c,{key:4,label:e.field6.key,span:3},{default:t(()=>[_(p(e.field5.value)+" ",1)]),_:2},1032,["label"])):r("",!0)]),_:2},1032,["title"])]),_:2},1024))),128))]),_:1})]),_:1}),P,o(V,{current:1,total:50,"show-less-items":""})]),_:1}),o(B)])}var Q=I(q,[["render",X],["__scopeId","data-v-1223fdc4"]]);export{Q as default};