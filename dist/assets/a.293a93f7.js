import{M as g}from"./mock.browser.esm.c440f803.js";import{a as x,e as t,o,f as _,h as e,w as a,F as w,E as k,x as v,g as d}from"./index.ce8c6609.js";const y=g.mock({"data|12":[{"key|+1":1,"src|+1":["../../assets/image/course1.png"],"title|+1":["\u4EBA\u5DE5\u667A\u80FD\u4E0E\u673A\u5668\u5B66\u4E60\u4EA7\u4E1A\u5E94\u7528","\u5927\u6570\u636E\u6280\u672F\u4E0E\u751F\u4EA7","\u7F51\u7EDC\u5B89\u5168\u4E0E\u4F01\u4E1A\u4FDD\u5BC6\u7BA1\u7406"],"description|1":["\u5B66\u4E60\u5982\u4F55\u5E94\u7528\u8FD9\u4E9B\u6280\u672F\u89E3\u51B3\u5B9E\u9645\u95EE\u9898\u3002","\u5B66\u4E60\u5982\u4F55\u5E94\u7528\u8FD9\u4E9B\u6280\u672F\u89E3\u51B3\u5B9E\u9645\u95EE\u9898\u3002","\u5B66\u4E60\u5982\u4F55\u5E94\u7528\u8FD9\u4E9B\u6280\u672F\u89E3\u51B3\u5B9E\u9645\u95EE\u9898\u3002"]}]}),b={setup(){return{title:document.title,data:y.data}}},B={id:"box-list"},$=d("div",{style:{height:"10px"}},null,-1),C=d("img",{alt:"example",src:"https://hbimg.huabanimg.com/17e13f2b7dd819c01ca655487038de8c6381238e26597-YqsgaI_fw658"},null,-1);function E(p,n,F,s,M,N){const i=t("page-header"),r=t("page-layout"),u=t("a-input-search"),c=t("a-card"),m=t("a-col"),h=t("a-row"),f=t("page-footer");return o(),_("div",B,[e(r,null,{default:a(()=>[e(i,{title:s.title,describe:""},null,8,["title"])]),_:1}),e(r,null,{default:a(()=>[e(u,{placeholder:"\u627E\u51FA\u6559\u80B2\u76F8\u5173\u7684\u80CC\u666F\u56FE",style:{width:"400px"},onSearch:n[0]||(n[0]=l=>p.$alert("\u6B63\u5728\u641C\u7D22\u4E2D\uFF0C\u8BF7\u7A0D\u540E"))}),$,e(h,{wrap:!0,gutter:[10,10]},{default:a(()=>[(o(!0),_(w,null,k(s.data,l=>(o(),v(m,{key:l,span:6},{default:a(()=>[e(c,null,{default:a(()=>[e(c,{hoverable:"",style:{width:"240px",margin:"0 auto"}},{cover:a(()=>[C]),_:1})]),_:1})]),_:2},1024))),128))]),_:1})]),_:1}),e(f)])}var D=x(b,[["render",E]]);export{D as default};