import{M as h}from"./mock.browser.esm.c440f803.js";import{a as b,s as B,K as P,c as _,a7 as S,e,o as c,f as u,h as t,w as o,F as D,E,x as F,g as i,t as I}from"./index.ce8c6609.js";const M=h.mock({"data|9":[{"key|+1":1,"header|1":function(){return""},"serial|1":function(){return"TXSP034"+this.key},"text|+1":["\u76D1\u6D4B\u5230\u56FE\u4E2D\u67091\u4E2A\u4EBA\uFF0C\u4E24\u8F86\u8F66","\u76D1\u6D4B\u5230\u56FE\u4E2D\u67091\u4E2A\u8F66\uFF0C\u4E09\u680B\u5EFA\u7B51"]}]}).data,N=h.mock({"data|5":[{"key|+1":1,"label|+1":["\u54AC\u8FB9","\u6C14\u5B54","\u5939\u6E23","\u88C2\u7EB9","\u5176\u4ED6\u95EE\u9898"],"value|1":[!0,!1]}]}).data,V=B({components:{SettingOutlined:P},setup(){const a=document.title,n=_(["0","1"]),r=_("right"),p=l=>{l.stopPropagation()};return S(n,l=>{}),{title:a,data:M,switchData:N,activeKey:n,expandIconPosition:r,handleClick:p}}}),L={id:"table-dome"},O=i("div",{style:{height:"10px"}},null,-1),T={style:{display:"block","text-indent":"40px"}},U=i("div",{style:{height:"10px"}},null,-1);function X(a,n,r,p,l,j){const m=e("page-header"),d=e("page-layout"),f=e("a-input-search"),g=e("setting-outlined"),y=e("a-collapse-panel"),k=e("a-collapse"),v=e("a-pagination"),x=e("a-card"),w=e("a-col"),C=e("a-row"),K=e("page-footer");return c(),u("div",L,[t(d,null,{default:o(()=>[t(m,{title:a.title,describe:"\u7CFB\u7EDF\u5E94\u80FD\u591F\u68C0\u6D4B\u5E76\u8BC6\u522B\u56FE\u50CF\u4E2D\u7684\u76EE\u6807\uFF0C\u5982\u4EBA\u7269\u3001\u8F66\u8F86\u3001\u5EFA\u7B51\u7269\u7B49\u3002"},null,8,["title"])]),_:1}),t(d,null,{default:o(()=>[t(C,{gutter:10},{default:o(()=>[t(w,{span:24},{default:o(()=>[t(x,null,{default:o(()=>[t(f,{placeholder:"\u8BF7\u8F93\u5165",style:{width:"400px"},onSearch:n[0]||(n[0]=s=>a.$alert("\u6B63\u5728\u641C\u7D22\u4E2D\uFF0C\u8BF7\u7A0D\u540E"))}),O,t(k,{activeKey:a.activeKey,"onUpdate:activeKey":n[1]||(n[1]=s=>a.activeKey=s),"expand-icon-position":a.expandIconPosition},{default:o(()=>[(c(!0),u(D,null,E(a.data,(s,$)=>(c(),F(y,{key:$,header:s.header+""+s.serial},{extra:o(()=>[t(g,{onClick:a.handleClick},null,8,["onClick"])]),default:o(()=>[i("span",T,I(s.text),1)]),_:2},1032,["header"]))),128))]),_:1},8,["activeKey","expand-icon-position"]),U,t(v,{current:1,total:50,"show-less-items":""})]),_:1})]),_:1})]),_:1})]),_:1}),t(K)])}var A=b(V,[["render",X]]);export{A as default};