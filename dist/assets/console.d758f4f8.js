import{C as A}from"./index.72962c83.js";import{a as C,A as T,k as z,c as B,l as D,n as E,e as n,o as S,f as N,h as e,w as t,j as o,p as q,q as M,g as l}from"./index.eb0fc1ca.js";const O={components:{ArrowUpOutlined:T,ArrowDownOutlined:z},setup(){const c=B(null);return D(()=>{const x=[{year:"1951 \u5E74",sales:38},{year:"1952 \u5E74",sales:52},{year:"1956 \u5E74",sales:80},{year:"1957 \u5E74",sales:135},{year:"1958 \u5E74",sales:80},{year:"1959 \u5E74",sales:70},{year:"1960 \u5E74",sales:60},{year:"1961 \u5E74",sales:55},{year:"1962 \u5E74",sales:38}],_=new A({container:"container",autoFit:!0,forceFit:!0,height:320});c.value=_,_.data(x),_.scale("sales",{nice:!0}),_.axis("sales",!1),_.interval().position("year*sales").color("year*sales",function(f,m){return"#1890ff"}),_.interaction("active-region"),_.render();const u=document.createEvent("Event");u.initEvent("resize",!0,!0),window.dispatchEvent(u)}),E(()=>{c.value&&c.value.destroy()}),{data:[{title:"Ant Design Title 1"},{title:"Ant Design Title 2"},{title:"Ant Design Title 3"},{title:"Ant Design Title 4"}],columns:[{title:"\u6392\u540D",dataIndex:"key",key:"key"},{title:"\u95E8\u5E97",dataIndex:"name",key:"name"},{title:"\u9500\u91CF",dataIndex:"age",key:"age"},{title:"\u5730\u5740",dataIndex:"address",key:"address"}],datas:[{key:1,name:"1 \u53F7\u5E97",age:13323.34,address:"\u5317\u4EAC\u5E02\u671D\u9633\u533A\u51E4\u9E23\u8DEF 112 \u53F7."},{key:2,name:"2 \u53F7\u5E97",age:35432.41,address:"\u5317\u4EAC\u5E02\u671D\u9633\u533A\u51E4\u9E23\u8DEF 112 \u53F7."},{key:3,name:"3 \u53F7\u5E97",age:47452.44,address:"\u5317\u4EAC\u5E02\u671D\u9633\u533A\u51E4\u9E23\u8DEF 112 \u53F7."},{key:4,name:"4 \u53F7\u5E97",age:32352.44,address:"\u5317\u4EAC\u5E02\u671D\u9633\u533A\u51E4\u9E23\u8DEF 112 \u53F7."}]}}},s=c=>(q("data-v-39d92c92"),c=c(),M(),c),U={id:"home"},j=s(()=>l("div",{class:"card-left"},"\u8BBF\u95EE\u91CF",-1)),R=s(()=>l("div",{class:"card-right"},"68 \u4E07",-1)),G=s(()=>l("div",{class:"card-left"},"\u9500\u552E\u91CF",-1)),H=s(()=>l("div",{class:"card-right"},"23 \u4E07",-1)),J=s(()=>l("div",{class:"card-left"},"\u8F6C\u5316\u7387",-1)),K=s(()=>l("div",{class:"card-right"},"60 %",-1)),L=s(()=>l("div",{class:"card-left"},"\u7528\u6237\u91CF",-1)),P=s(()=>l("div",{class:"card-right"},"578 \u4EBA",-1)),Q=s(()=>l("div",{id:"container",style:{width:"100%"}},null,-1)),W=s(()=>l("div",null,"1",-1)),X=s(()=>l("span",null,"2",-1)),Y=s(()=>l("span",null,"3",-1)),Z=s(()=>l("span",null,"4",-1)),$=s(()=>l("span",null,"5",-1)),ee=s(()=>l("span",null,"6",-1)),te=s(()=>l("span",null,"7",-1));function ae(c,k,b,p,x,_){const u=n("p-count"),f=n("a-progress"),m=n("a-divider"),d=n("a-card"),a=n("a-col"),r=n("quick"),i=n("a-row"),y=n("a-tab-pane"),F=n("a-tabs"),h=n("arrow-up-outlined"),g=n("a-statistic"),v=n("arrow-down-outlined"),w=n("a-table"),V=n("page-layout"),I=n("page-footer");return S(),N("div",U,[e(V,null,{default:t(()=>[e(i,{gutter:[10,10]},{default:t(()=>[e(a,{xs:24,sm:12,md:12,lg:6,xl:6},{default:t(()=>[e(d,null,{default:t(()=>[e(u,{startVal:"5500",endVal:"6334.32",decimals:"2",speed:"300"}),e(f,{"show-info":!1,style:{"margin-top":"16px"},percent:30,size:"small"}),e(m),j,R]),_:1})]),_:1}),e(a,{xs:24,sm:12,md:12,lg:6,xl:6},{default:t(()=>[e(d,null,{default:t(()=>[e(u,{startVal:"4500",endVal:"5303.10",decimals:"2",speed:"300"}),e(f,{style:{"margin-top":"16px"},percent:50,size:"small",status:"active","show-info":!1}),e(m),G,H]),_:1})]),_:1}),e(a,{xs:24,sm:12,md:12,lg:6,xl:6},{default:t(()=>[e(d,null,{default:t(()=>[e(u,{startVal:"6500",endVal:"7600.00",decimals:"2",speed:"300"}),e(f,{"show-info":!1,style:{"margin-top":"16px"},percent:30,size:"small"}),e(m),J,K]),_:1})]),_:1}),e(a,{xs:24,sm:12,md:12,lg:6,xl:6},{default:t(()=>[e(d,null,{default:t(()=>[e(u,{startVal:"4000",endVal:"4500.00",decimals:"2",speed:"300"}),e(f,{style:{"margin-top":"16px"},percent:50,size:"small",status:"active","show-info":!1}),e(m),L,P]),_:1})]),_:1}),e(a,{xs:12,sm:6,md:6,lg:3,xl:3},{default:t(()=>[e(r,{color:"rgb(105, 192, 255)",icon:"BuildFilled",title:"\u7528\u6237"})]),_:1}),e(a,{xs:12,sm:6,md:6,lg:3,xl:3},{default:t(()=>[e(r,{color:"rgb(149, 222, 100)",icon:"CloudFilled",title:"\u9996\u9875"})]),_:1}),e(a,{xs:12,sm:6,md:6,lg:3,xl:3},{default:t(()=>[e(r,{color:"rgb(255, 156, 110)",icon:"CustomerServiceFilled",title:"\u8BBF\u95EE"})]),_:1}),e(a,{xs:12,sm:6,md:6,lg:3,xl:3},{default:t(()=>[e(r,{color:"rgb(179, 127, 235)",icon:"MailFilled",title:"\u90AE\u4EF6"})]),_:1}),e(a,{xs:12,sm:6,md:6,lg:3,xl:3},{default:t(()=>[e(r,{color:"rgb(255, 214, 102)",icon:"NotificationFilled",title:"\u6D88\u606F"})]),_:1}),e(a,{xs:12,sm:6,md:6,lg:3,xl:3},{default:t(()=>[e(r,{color:"rgb(92, 219, 211)",icon:"SignalFilled",title:"\u7EDF\u8BA1"})]),_:1}),e(a,{xs:12,sm:6,md:6,lg:3,xl:3},{default:t(()=>[e(r,{color:"rgb(255, 133, 192)",icon:"TrophyFilled",title:"\u6392\u540D"})]),_:1}),e(a,{xs:12,sm:6,md:6,lg:3,xl:3},{default:t(()=>[e(r,{color:"rgb(255, 192, 105)",icon:"BellFilled",title:"\u901A\u77E5"})]),_:1}),e(a,{span:24},{default:t(()=>[e(d,null,{default:t(()=>[e(F,null,{default:t(()=>[e(y,{key:"1",tab:"\u9500\u91CF"},{default:t(()=>[e(i,null,{default:t(()=>[e(a,{xs:24,sm:24,md:24,lg:16,xl:16},{default:t(()=>[Q]),_:1}),e(a,{xs:24,sm:24,md:24,lg:{span:7,offset:1},xl:{span:7,offset:1}},{default:t(()=>[e(i,{style:{margin:"22px"}},{default:t(()=>[e(a,{span:"2"},{default:t(()=>[W]),_:1}),e(a,{span:"18"},{default:t(()=>[o("\u9AD8\u65B0\u533A1\u53F7\u5E97")]),_:1}),e(a,{span:"4"},{default:t(()=>[o("3223.14")]),_:1})]),_:1}),e(i,{style:{margin:"22px"}},{default:t(()=>[e(a,{span:"2"},{default:t(()=>[X]),_:1}),e(a,{span:"18"},{default:t(()=>[o("\u9AD8\u65B0\u533A2\u53F7\u5E97")]),_:1}),e(a,{span:"4"},{default:t(()=>[o("2433.42")]),_:1})]),_:1}),e(i,{style:{margin:"22px"}},{default:t(()=>[e(a,{span:"2"},{default:t(()=>[Y]),_:1}),e(a,{span:"18"},{default:t(()=>[o("\u9AD8\u65B0\u533A3\u53F7\u5E97")]),_:1}),e(a,{span:"4"},{default:t(()=>[o("6392.15")]),_:1})]),_:1}),e(i,{style:{margin:"22px"}},{default:t(()=>[e(a,{span:"2"},{default:t(()=>[Z]),_:1}),e(a,{span:"18"},{default:t(()=>[o("\u9AD8\u65B0\u533A4\u53F7\u5E97")]),_:1}),e(a,{span:"4"},{default:t(()=>[o("1465.75")]),_:1})]),_:1}),e(i,{style:{margin:"22px"}},{default:t(()=>[e(a,{span:"2"},{default:t(()=>[$]),_:1}),e(a,{span:"18"},{default:t(()=>[o("\u9AD8\u65B0\u533A5\u53F7\u5E97")]),_:1}),e(a,{span:"4"},{default:t(()=>[o("4324.35")]),_:1})]),_:1}),e(i,{style:{margin:"22px"}},{default:t(()=>[e(a,{span:"2"},{default:t(()=>[ee]),_:1}),e(a,{span:"18"},{default:t(()=>[o("\u9AD8\u65B0\u533A6\u53F7\u5E97")]),_:1}),e(a,{span:"4"},{default:t(()=>[o("3233.22")]),_:1})]),_:1}),e(i,{style:{margin:"22px"}},{default:t(()=>[e(a,{span:"2"},{default:t(()=>[te]),_:1}),e(a,{span:"18"},{default:t(()=>[o("\u9AD8\u65B0\u533A7\u53F7\u5E97")]),_:1}),e(a,{span:"4"},{default:t(()=>[o("6423.32")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(y,{key:"2",tab:"\u6392\u884C","force-render":""})]),_:1})]),_:1})]),_:1}),e(a,{xs:24,sm:24,md:24,lg:12,xl:12},{default:t(()=>[e(d,{title:"\u7EBF\u4E0A\u70ED\u95E8\u641C\u7D22"},{default:t(()=>[e(i,{gutter:10},{default:t(()=>[e(a,{span:12},{default:t(()=>[e(d,null,{default:t(()=>[e(g,{title:"\u9500\u91CF",value:11.28,precision:2,suffix:"%","value-style":{color:"#3f8600"},style:{"margin-right":"50px"}},{prefix:t(()=>[e(h)]),_:1})]),_:1})]),_:1}),e(a,{span:12},{default:t(()=>[e(d,null,{default:t(()=>[e(g,{title:"\u8BBF\u5BA2",value:9.3,precision:2,suffix:"%",class:"demo-class","value-style":{color:"#cf1322"}},{prefix:t(()=>[e(v)]),_:1})]),_:1})]),_:1}),e(a,{span:"24"},{default:t(()=>[e(w,{columns:p.columns,"data-source":p.datas,style:{"margin-top":"10px"}},null,8,["columns","data-source"])]),_:1})]),_:1})]),_:1})]),_:1}),e(a,{xs:24,sm:24,md:24,lg:12,xl:12},{default:t(()=>[e(d,{title:"\u9500\u552E\u7C7B\u522B\u5360\u6BD4"},{default:t(()=>[e(i,{gutter:10},{default:t(()=>[e(a,{span:12},{default:t(()=>[e(d,null,{default:t(()=>[e(g,{title:"Feedback",value:11.28,precision:2,suffix:"%","value-style":{color:"#3f8600"},style:{"margin-right":"50px"}},{prefix:t(()=>[e(h)]),_:1})]),_:1})]),_:1}),e(a,{span:12},{default:t(()=>[e(d,null,{default:t(()=>[e(g,{title:"Idle",value:9.3,precision:2,suffix:"%",class:"demo-class","value-style":{color:"#cf1322"}},{prefix:t(()=>[e(v)]),_:1})]),_:1})]),_:1}),e(a,{span:"24"},{default:t(()=>[e(w,{columns:p.columns,"data-source":p.datas,style:{"margin-top":"10px"}},null,8,["columns","data-source"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(I)])}var ne=C(O,[["render",ae],["__scopeId","data-v-39d92c92"]]);export{ne as default};
