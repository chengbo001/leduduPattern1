import{M as x}from"./mock.browser.esm.c440f803.js";import{a as R,s as F,B as S,r as B,C,e as t,o as l,f as m,h as e,w as a,F as M,E as $,x as E,g as n,j as L,p as N,q as T}from"./index.eb0fc1ca.js";const V=F({name:"advancedForm",components:{PlusOutlined:S},setup(){const o=["\u8BBE\u7F6E\u540D\u79F0","\u8BC6\u522B\u524D\u666F","\u8BC6\u522B\u80CC\u666F","\u81EA\u52A8\u8C03\u6574\u4EAE\u5EA6","\u81EA\u52A8\u8C03\u6574\u5BF9\u6BD4\u5EA6"],s=B({loading:!1,memberLoading:!1,columns:[{title:"\u8BBE\u7F6E\u540D\u79F0",dataIndex:"name",key:"name",width:"20%",slots:{customRender:"name"}},{title:"\u8BC6\u522B\u524D\u666F",dataIndex:"field1",key:"field1",width:"20%",slots:{customRender:"field1"}},{title:"\u8BC6\u522B\u80CC\u666F",dataIndex:"field2",key:"field2",width:"20%",slots:{customRender:"field2"}},{title:"\u81EA\u52A8\u8C03\u6574\u4EAE\u5EA6",dataIndex:"field3",key:"field3",width:"15%",slots:{customRender:"field3"}},{title:"\u81EA\u52A8\u8C03\u6574\u5BF9\u6BD4\u5EA6",dataIndex:"field4",key:"field4",width:"15%",slots:{customRender:"field4"}},{title:"\u64CD\u4F5C",key:"action",slots:{customRender:"operation"}}],data:x.mock({"data|6":[{"key|+1":1,name(){return"\u8BBE\u7F6ESZ056"+this.key},"field1|+1":["\u5F00\u542F\u81EA\u52A8","\u5173\u95ED\u81EA\u52A8"],"field2|+1":["\u5F00\u542F\u81EA\u52A8","\u5173\u95ED\u81EA\u52A8"],"field3|1":["\u5F00\u542F\u81EA\u52A8","\u5173\u95ED\u81EA\u52A8"],"field4|1":["\u5F00\u542F\u81EA\u52A8","\u5173\u95ED\u81EA\u52A8"]}]}).data,errors:[]});return{title:document.title,labelData:o,...C(s)}}}),d=o=>(N("data-v-4effc9d1"),o=o(),T(),o),D={style:{"text-align":"center"}},j=d(()=>n("a",null,"\u5E94\u7528",-1)),q=d(()=>n("a",null,"\u7F16\u8F91",-1)),O=d(()=>n("a",null,"\u5220\u9664",-1));function P(o,s,Z,z,A,G){const p=t("page-header"),r=t("page-layout"),u=t("a-input"),c=t("a-form-item"),f=t("a-col"),h=t("a-row"),y=t("a-button"),g=t("a-form"),i=t("a-card"),_=t("a-divider"),b=t("a-popconfirm"),v=t("a-table"),k=t("page-footer");return l(),m("div",null,[e(r,null,{default:a(()=>[e(p,{title:o.title,describe:"\u8BC6\u522B\u56FE\u50CF\u4E2D\u7684\u524D\u666F\u548C\u80CC\u666F\uFF0C\u81EA\u52A8\u8C03\u6574\u56FE\u50CF\u7684\u4EAE\u5EA6\u548C\u5BF9\u6BD4\u5EA6\u7B49\uFF0C\u4EE5\u63D0\u9AD8\u8F6C\u6362\u6548\u679C\u3002"},null,8,["title"])]),_:1}),e(r,null,{default:a(()=>[e(i,{class:"card",title:"\u8BBE\u7F6E",bordered:!1},{default:a(()=>[e(g,{class:"form",scrollToFirstError:!0},{default:a(()=>[e(h,{gutter:16},{default:a(()=>[(l(!0),m(M,null,$(o.labelData,(w,I)=>(l(),E(f,{key:I,lg:6,md:12,sm:24},{default:a(()=>[e(c,{label:w},{default:a(()=>[e(u,{placeholder:"\u8BF7\u8F93\u5165"})]),_:2},1032,["label"])]),_:2},1024))),128))]),_:1}),e(c,null,{default:a(()=>[n("div",D,[e(y,{htmlType:"submit",type:"primary"},{default:a(()=>[L("\u63D0\u4EA4")]),_:1})])]),_:1})]),_:1})]),_:1}),e(i,{title:"\u5386\u53F2\u8BB0\u5F55"},{default:a(()=>[e(v,{columns:o.columns,dataSource:o.data,pagination:!1,loading:o.memberLoading},{operation:a(({})=>[n("span",null,[j,e(_,{type:"vertical"}),q,e(_,{type:"vertical"}),e(b,{title:"\u662F\u5426\u8981\u5220\u9664\u6B64\u884C\uFF1F"},{default:a(()=>[O]),_:1})])]),_:1},8,["columns","dataSource","loading"])]),_:1})]),_:1}),e(k)])}var K=R(V,[["render",P],["__scopeId","data-v-4effc9d1"]]);export{K as default};