import{C as B}from"./index.72962c83.js";import{M as h}from"./mock.browser.esm.c440f803.js";import{a as F,A as N,k as S,c as E,l as U,n as O,e as o,o as v,f as b,h as a,w as t,g as n,t as c,F as j,E as q,x as G,j as C,p as L,q as R}from"./index.eb0fc1ca.js";const T={components:{ArrowUpOutlined:N,ArrowDownOutlined:S},setup(){const r=h.mock("@GUID"),m=E(null);U(()=>{const u=h.mock({"b|9":[{"num|+1":2015,year:function(){return this.num+"\u5E74"},"sales|40-140":0}]}).b,d=new B({container:r,autoFit:!0});d.interval().data(u).encode("x","year").encode("y","sales").axis("y",{labelFormatter:"10"}),d.render(),m.value=d}),O(()=>{m.value&&m.value.destroy()});const g=h.mock({"a|7":[{"key|+1":1,name:"@CNAME","amount|1000-20000":0}]}),s=[{title:"\u7F16\u53F7",dataIndex:"key",key:"key"},{title:"\u540D\u79F0",dataIndex:"name",key:"name"},{title:"\u6570\u91CF",dataIndex:"amount",key:"amount"},{title:"\u5907\u6CE8",dataIndex:"notes",key:"notes"}],y=h.mock({"a|4":[{"key|+1":1,name:function(){return"\u533B\u7597\u8BBE\u5907"+this.key},"amount|10000-20000":0,"ratio|1-30":0,notes:""}]}),k=[{title:"\u7F16\u53F7",dataIndex:"key",key:"key"},{title:"\u540D\u79F0",dataIndex:"name",key:"name"},{title:"\u6BD4\u4F8B",dataIndex:"ratio",key:"ratio"},{title:"\u5907\u6CE8",dataIndex:"notes",key:"notes"}];return{chartContainer:r,columns1:s,datas1:y.a,columns2:k,datas2:y.a,rankData:g.a}}},x=r=>(L("data-v-395aa7a0"),r=r(),R(),r),H={id:"home"},J=x(()=>n("div",{class:"card-left"},"\u76EE\u6807\u91CF",-1)),K={class:"card-right"},P=x(()=>n("div",{class:"card-left"},"\u5B8C\u6210\u91CF",-1)),Q={class:"card-right"},W=x(()=>n("div",{class:"card-left"},"\u5B8C\u6210\u7387",-1)),X={class:"card-right"},Y=x(()=>n("div",{class:"card-left"},"\u5DE5\u4F5C\u4EBA\u5458",-1)),Z={class:"card-right"},$=["id"];function aa(r,m,g,s,y,k){const _=o("p-count"),u=o("a-progress"),d=o("a-divider"),l=o("a-card"),e=o("a-col"),i=o("a-row"),M=o("a-tab-pane"),D=o("a-tabs"),w=o("arrow-up-outlined"),f=o("a-statistic"),V=o("arrow-down-outlined"),I=o("a-table"),z=o("page-layout"),A=o("page-footer");return v(),b("div",H,[a(z,null,{default:t(()=>[a(i,{gutter:[10,10]},{default:t(()=>[a(e,{xs:24,sm:12,md:12,lg:6,xl:6},{default:t(()=>[a(l,null,{default:t(()=>[a(_,{startVal:"5500",endVal:Math.floor(Math.random()*1e3)+6e3,decimals:"2",speed:"300"},null,8,["endVal"]),a(u,{"show-info":!1,style:{"margin-top":"16px"},percent:30,size:"small"}),a(d),J,n("div",K,c(Math.floor(Math.random()*10)+60)+" \u4E07 ",1)]),_:1})]),_:1}),a(e,{xs:24,sm:12,md:12,lg:6,xl:6},{default:t(()=>[a(l,null,{default:t(()=>[a(_,{startVal:"4500",endVal:Math.floor(Math.random()*1e3)+5e3,decimals:"2",speed:"300"},null,8,["endVal"]),a(u,{style:{"margin-top":"16px"},percent:50,size:"small",status:"active","show-info":!1}),a(d),P,n("div",Q,c(Math.floor(Math.random()*10)+30)+" \u4E07 ",1)]),_:1})]),_:1}),a(e,{xs:24,sm:12,md:12,lg:6,xl:6},{default:t(()=>[a(l,null,{default:t(()=>[a(_,{startVal:"6500",endVal:Math.floor(Math.random()*1e3)+7e3,decimals:"2",speed:"300"},null,8,["endVal"]),a(u,{"show-info":!1,style:{"margin-top":"16px"},percent:30,size:"small"}),a(d),W,n("div",X,c(Math.floor(Math.random()*100))+" % ",1)]),_:1})]),_:1}),a(e,{xs:24,sm:12,md:12,lg:6,xl:6},{default:t(()=>[a(l,null,{default:t(()=>[a(_,{startVal:"0",endVal:Math.floor(Math.random()*100),decimals:"2",speed:"300"},null,8,["endVal"]),a(u,{style:{"margin-top":"16px"},percent:50,size:"small",status:"active","show-info":!1}),a(d),Y,n("div",Z,c(Math.floor(Math.random()*100))+" \u4EBA ",1)]),_:1})]),_:1}),a(e,{span:24},{default:t(()=>[a(l,null,{default:t(()=>[a(D,null,{default:t(()=>[a(M,{key:"1",tab:"\u5BF9\u6BD4"},{default:t(()=>[a(i,null,{default:t(()=>[a(e,{xs:24,sm:24,md:24,lg:16,xl:16},{default:t(()=>[n("div",{id:s.chartContainer,style:{width:"100%",height:"100%"}},null,8,$)]),_:1}),a(e,{xs:24,sm:24,md:24,lg:{span:7,offset:1},xl:{span:7,offset:1}},{default:t(()=>[(v(!0),b(j,null,q(s.rankData,p=>(v(),G(i,{style:{margin:"22px"},key:p.key},{default:t(()=>[a(e,{span:"2"},{default:t(()=>[n("div",null,c(p.key),1)]),_:2},1024),a(e,{span:"18"},{default:t(()=>[C(c(p.name),1)]),_:2},1024),a(e,{span:"4"},{default:t(()=>[C(c(p.amount),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),a(M,{key:"2",tab:"\u6392\u884C","force-render":""})]),_:1})]),_:1})]),_:1}),a(e,{xs:24,sm:24,md:24,lg:12,xl:12},{default:t(()=>[a(l,{title:"\u70ED\u95E8\u7C7B"},{default:t(()=>[a(i,{gutter:10},{default:t(()=>[a(e,{span:12},{default:t(()=>[a(l,null,{default:t(()=>[a(f,{title:"\u79CD\u7C7B",value:Math.floor(Math.random()*10)+10,precision:2,suffix:"%","value-style":{color:"#3f8600"},style:{"margin-right":"50px"}},{prefix:t(()=>[a(w)]),_:1},8,["value"])]),_:1})]),_:1}),a(e,{span:12},{default:t(()=>[a(l,null,{default:t(()=>[a(f,{title:"\u4E0D\u826F\u7387",value:Math.floor(Math.random()*10)+10,precision:2,suffix:"%",class:"demo-class","value-style":{color:"#cf1322"}},{prefix:t(()=>[a(V)]),_:1},8,["value"])]),_:1})]),_:1}),a(e,{span:"24"},{default:t(()=>[a(I,{columns:s.columns1,"data-source":s.datas1,style:{"margin-top":"10px"}},null,8,["columns","data-source"])]),_:1})]),_:1})]),_:1})]),_:1}),a(e,{xs:24,sm:24,md:24,lg:12,xl:12},{default:t(()=>[a(l,{title:"\u5404\u7C7B\u5360\u6BD4"},{default:t(()=>[a(i,{gutter:10},{default:t(()=>[a(e,{span:12},{default:t(()=>[a(l,null,{default:t(()=>[a(f,{title:"\u4F18\u5316",value:Math.floor(Math.random()*10)+10,precision:2,suffix:"%","value-style":{color:"#3f8600"},style:{"margin-right":"50px"}},{prefix:t(()=>[a(w)]),_:1},8,["value"])]),_:1})]),_:1}),a(e,{span:12},{default:t(()=>[a(l,null,{default:t(()=>[a(f,{title:"\u95EE\u9898",value:Math.floor(Math.random()*10)+10,precision:2,suffix:"%",class:"demo-class","value-style":{color:"#cf1322"}},{prefix:t(()=>[a(V)]),_:1},8,["value"])]),_:1})]),_:1}),a(e,{span:"24"},{default:t(()=>[a(I,{columns:s.columns2,"data-source":s.datas2,style:{"margin-top":"10px"}},null,8,["columns","data-source"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(A)])}var la=F(T,[["render",aa],["__scopeId","data-v-395aa7a0"]]);export{la as default};
