import{M as x}from"./mock.browser.esm.c440f803.js";import{a as w,s as B,e as a,o as _,f,h as e,w as t,F as C,E as N,x as $,g as E,t as s,j as d}from"./index.eb0fc1ca.js";const M=B({name:"permission",setup(){const o=x.mock({"data|9":[{"key|+1":1,name:"@CNAME",field1:"\u7BA1\u7406\u5458",field2:"\u8FD0\u8425\u4EBA\u5458",field3:"\u5BA2\u670D",field4:"\u53D1\u8D27\u4EBA\u5458"}]}).data;return{title:document.title,data:o}}}),V={style:{"font-weight":"bold"}};function A(o,c,D,F,O,P){const i=a("page-header"),p=a("page-layout"),n=a("a-col"),u=a("a-checkbox"),r=a("a-row"),m=a("a-checkbox-group"),g=a("a-card"),h=a("PlusOutlined"),v=a("a-button"),k=a("page-footer");return _(),f("div",null,[e(p,null,{default:t(()=>[e(i,{title:o.title,describe:"\u5B9E\u65BD\u4E25\u683C\u7684\u8BBF\u95EE\u63A7\u5236\u7B56\u7565\uFF0C\u786E\u4FDD\u76F8\u5E94\u529F\u80FD\u53EA\u6709\u88AB\u6388\u4E88\u76F8\u5E94\u89D2\u8272\u7684\u4EBA\u624D\u80FD\u8BBF\u95EE\uFF0C\u4FDD\u969C\u7CFB\u7EDF\u548C\u6570\u636E\u7684\u5B89\u5168\u3002"},null,8,["title"])]),_:1}),e(p,null,{default:t(()=>[(_(!0),f(C,null,N(o.data,(l,b)=>(_(),$(g,{key:b,style:{"margin-bottom":"10px"}},{default:t(()=>[e(r,null,{default:t(()=>[e(n,{span:4},{default:t(()=>[E("span",V,s(l.name),1)]),_:2},1024),e(n,{span:20},{default:t(()=>[e(m,{value:o.value,"onUpdate:value":c[0]||(c[0]=y=>o.value=y),style:{width:"100%"}},{default:t(()=>[e(r,null,{default:t(()=>[e(n,{span:6},{default:t(()=>[e(u,{value:"A"},{default:t(()=>[d(s(l.field1),1)]),_:2},1024)]),_:2},1024),e(n,{span:6},{default:t(()=>[e(u,{value:"B"},{default:t(()=>[d(s(l.field2),1)]),_:2},1024)]),_:2},1024),e(n,{span:6},{default:t(()=>[e(u,{value:"C"},{default:t(()=>[d(s(l.field3),1)]),_:2},1024)]),_:2},1024),e(n,{span:6},{default:t(()=>[e(u,{value:"D"},{default:t(()=>[d(s(l.field4),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["value"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),e(v,{style:{width:"100%","margin-top":"16px","margin-bottom":"24px"},type:"dashed"},{icon:t(()=>[e(h)]),default:t(()=>[d(" \u65B0\u589E ")]),_:1})]),_:1}),e(k)])}var S=w(M,[["render",A]]);export{S as default};