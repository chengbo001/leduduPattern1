import{C as h}from"./index.72962c83.js";import{M as y}from"./mock.browser.esm.c440f803.js";import{a as g,c as x,l as v,n as w,e as a,o as C,f as N,h as t,w as e,g as p,j as c}from"./index.eb0fc1ca.js";const k={setup(){const l=y.mock("@GUID"),n=x(null);return v(()=>{const o=new h({container:l,autoFit:!0,padding:0});o.axis(!1),o.image().style("src","https://gw.alipayobjects.com/zos/rmsportal/NeUTMwKtPcPxIFNTWZOZ.png").style("x","50%").style("y","50%").style("width","100%").style("height","100%").tooltip(!1),o.heatmap().data({type:"fetch",value:"https://assets.antv.antgroup.com/g2/heatmap.json"}).encode("x","g").encode("y","l").encode("color","tmp").style("opacity",0).tooltip(!1),o.render(),n.value=o}),w(()=>{n.value&&n.value.destroy()}),{title:document.title,chartContainer:l}}},M=["id"],b=p("div",{style:{height:"10px"}},null,-1);function j(l,n,o,u,B,T){const r=a("a-card"),d=a("a-input"),_=a("a-form-item"),s=a("a-tag"),i=a("a-space"),m=a("a-form"),f=a("page-layout");return C(),N("div",null,[t(f,null,{default:e(()=>[t(r,null,{default:e(()=>[p("div",{id:u.chartContainer,style:{height:"450px"}},null,8,M)]),_:1}),b,t(r,null,{default:e(()=>[t(m,null,{default:e(()=>[t(_,{label:"\u8F93\u5165\u5730\u5740"},{default:e(()=>[t(d,{placeholder:"\u5BF9\u62DF\u5EFA\u98CE\u7535\u573A\u7684\u98CE\u8D44\u6E90\u8FDB\u884C\u8BC4\u4F30"})]),_:1}),t(_,{label:"\u8BC4\u4F30\u7ED3\u679C"},{default:e(()=>[t(i,null,{default:e(()=>[t(s,null,{default:e(()=>[c("\u98CE\u901F\uFF1A\u5FEB")]),_:1}),t(s,null,{default:e(()=>[c("\u98CE\u5411\uFF1A\u7A33\u5B9A")]),_:1}),t(s,null,{default:e(()=>[c("\u6E4D\u6D41\u5F3A\u5EA6\uFF1A\u5F3A")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}var F=g(k,[["render",j]]);export{F as default};