import{M as u}from"./mock.browser.esm.c440f803.js";import{C as h}from"./index.72962c83.js";import{a as _,c as f,l as y,n as g,o as l,f as d,e as c,h as r,w as s,F as M,E as T,j as k,t as L}from"./index.eb0fc1ca.js";const O={setup(){const n=u.mock("@GUID"),a=f(null);return y(()=>{const o=new h({container:n,autoFit:!0});o.point().data({type:"fetch",value:"https://gw.alipayobjects.com/os/bmw-prod/bd73a175-4417-4749-8b88-bc04d955e899.csv"}).encode("x","x").encode("y","y").encode("shape","category").encode("color","category").encode("size",5).scale("shape",{range:["point","plus","diamond"]}),o.render()}),g(()=>{a.value&&a.value.destroy()}),{chartContainer:n}}},R=["id"];function U(n,a,o,t,i,e){return l(),d("div",{id:t.chartContainer,style:{width:"100%",height:"520px"}},null,8,R)}var A=_(O,[["render",U]]);const B={setup(){const n=u.mock("@GUID"),a=f(null);return y(()=>{const o=[264,417,438,309,397,550,575,563,430,525,592,492,467,513,546,340,539,643,626,792],t=new h({container:n,autoFit:!0});t.title({title:"\u8BBE\u5907\u91CF"}),t.data(o),t.line().encode("x",i=>i).encode("y",(i,e)=>e).encode("shape","smooth").animate("enter",{type:"fadeIn"}).label({selector:"last",text:i=>i,textAlign:"right",textBaseline:"bottom",dx:-10,dy:-10,connector:!0,fontSize:10}).axis(!1),t.interaction("tooltip",{render:(i,{title:e,items:p})=>p[0].value}),t.render()}),g(()=>{a.value&&a.value.destroy()}),{chartContainer:n}}},G=["id"];function z(n,a,o,t,i,e){return l(),d("div",{id:t.chartContainer,style:{width:"100%",height:"520px"}},null,8,G)}var E=_(B,[["render",z]]);const j={setup(){const n=u.mock("@GUID"),a=f(null);return y(()=>{const o=new h({container:n,autoFit:!0});o.interval().data([{month:"Jan.",profit:387264,start:0,end:387264},{month:"Feb.",profit:772096,start:387264,end:1159360},{month:"Mar.",profit:638075,start:1159360,end:1797435},{month:"Apr.",profit:-211386,start:1797435,end:1586049},{month:"May",profit:-138135,start:1586049,end:1447914},{month:"Jun",profit:-267238,start:1447914,end:1180676},{month:"Jul.",profit:431406,start:1180676,end:1612082},{month:"Aug.",profit:363018,start:1612082,end:1975100},{month:"Sep.",profit:-224638,start:1975100,end:1750462},{month:"Oct.",profit:-299867,start:1750462,end:1450595},{month:"Nov.",profit:607365,start:1450595,end:2057960},{month:"Dec.",profit:1106986,start:2057960,end:3164946},{month:"Total",start:0,end:3164946}]).encode("x","month").encode("y",["end","start"]).encode("color",t=>t.month==="Total"?"Total":t.profit>0?"Increase":"Decrease").axis("y",{labelFormatter:"~s"}).tooltip(["start","end"]),o.render()}),g(()=>{a.value&&a.value.destroy()}),{chartContainer:n}}},q=["id"];function K(n,a,o,t,i,e){return l(),d("div",{id:t.chartContainer,style:{width:"100%",height:"520px"}},null,8,q)}var V=_(j,[["render",K]]);const P={setup(){const n=u.mock("@GUID"),a=f(null);return y(()=>{const o=new h({container:n,autoFit:!0});o.liquid().data(.3).style({outlineBorder:4,outlineDistance:8,waveLength:128}),o.render()}),g(()=>{a.value&&a.value.destroy()}),{chartContainer:n}}},H=["id"];function Q(n,a,o,t,i,e){return l(),d("div",{id:t.chartContainer,style:{width:"100%",height:"520px"}},null,8,H)}var W=_(P,[["render",Q]]);let $=[];const X=u.mock({"a|9":[{"key|+1":1,"serial|+1":1e4,name(){return"\u6D4B\u8BD5CS032"+this.key},"specs|1":["\u8DD1\u6B65","\u8DF3\u8FDC","\u4E3E\u91CD"],"grade|1":["\u62AC\u5934","\u633A\u80F8","\u5E73\u8861"],"amount|1":["\u81C0\u90E8\u53D1\u529B","\u6838\u5FC3\u53D1\u529B","\u811A\u4E0B\u53D1\u529B"],"worker|1":["\u6B63\u5E38","\u5F02\u5E38"],time:new Date().toLocaleDateString()}]});$=X.a;const Y=u.mock({"data|6":[{"index|+1":1,title(){return"\u76D1\u6D4B\u5C0F\u7EC4"+this.key},"key|+1":1,"children|2":[{title:"@CNAME","key|+1":11,isLeaf:!0}]}]}),Z={components:{point1:A,miniline1:E,interval3:V,liquid1:W},setup(){return{title:document.title,pagination:{current:1,pageSize:10},fetch:async e=>new Promise(p=>{setTimeout(()=>{p({total:100,data:$})},900)}),toolbar:[{label:"\u6279\u91CF\u91C7\u96C6",event:function(e){alert("\u65B0\u589E\u64CD\u4F5C:"+JSON.stringify(e))}},{label:"\u65B0\u589E",event:function(e){alert("\u65B0\u589E\u64CD\u4F5C:"+JSON.stringify(e))}},{label:"\u5220\u9664",event:function(e){alert("\u6279\u91CF\u5220\u9664:"+JSON.stringify(e))}},{label:"\u66F4\u591A\u64CD\u4F5C",children:[{label:"\u6279\u91CF\u5BFC\u5165",event(e){alert("\u6279\u91CF\u5BFC\u5165")}},{label:"\u6279\u91CF\u5BFC\u51FA",event(e){alert("\u6279\u91CF\u5BFC\u51FA")}}]}],columns:[{title:"\u5E8F\u5217",dataIndex:"serial",key:"serial"},{title:"\u6D4B\u8BD5\u7F16\u53F7",dataIndex:"name",key:"name",slots:{customRender:"name"}},{title:"\u8FD0\u52A8\u6A21\u5F0F",dataIndex:"specs",key:"specs"},{title:"\u52A8\u4F5C\u6280\u5DE7",dataIndex:"grade",key:"grade"},{title:"\u53D1\u529B\u65B9\u5F0F",dataIndex:"amount",key:"amount"},{title:"\u65F6\u95F4",dataIndex:"time",key:"time"}],operate:[{label:"\u4F20\u9001",event:function(e){alert(":"+JSON.stringify(e))}}],treeData:Y.data}}},tt={id:"table-dome"};function et(n,a,o,t,i,e){const p=c("page-header"),v=c("page-layout"),w=c("a-directory-tree"),x=c("a-col"),C=c("a-input"),b=c("a-form-item"),D=c("a-button"),I=c("a-form"),S=c("p-table"),F=c("a-card"),N=c("a-row"),J=c("page-footer");return l(),d("div",tt,[r(v,null,{default:s(()=>[r(p,{title:t.title,describe:"\u5229\u7528\u8BA1\u7B97\u673A\u89C6\u89C9\u548C\u6DF1\u5EA6\u5B66\u4E60\u6280\u672F\uFF0C\u5BF9\u4EBA\u4F53\u59FF\u6001\u8FDB\u884C\u5B9E\u65F6\u8BC6\u522B\u548C\u5206\u6790\uFF0C\u4EE5\u4E86\u89E3\u4E2A\u4F53\u7684\u8FD0\u52A8\u6A21\u5F0F\u3001\u52A8\u4F5C\u6280\u5DE7\u548C\u53D1\u529B\u65B9\u5F0F\u7B49\u65B9\u9762\u7684\u4FE1\u606F\u3002"},null,8,["title"])]),_:1}),r(v,null,{default:s(()=>[r(N,{gutter:10},{default:s(()=>[r(x,{span:6},{default:s(()=>[r(w,{multiple:"","tree-data":t.treeData,expandedKeys:[1],selectedKeys:[11]},null,8,["tree-data"])]),_:1}),r(x,{span:18},{default:s(()=>[r(F,null,{default:s(()=>[r(I,{layout:"inline"},{default:s(()=>[(l(),d(M,null,T(3,m=>r(b,{key:m,label:t.columns[m].title},{default:s(()=>[r(C)]),_:2},1032,["label"])),64)),r(b,null,{default:s(()=>[r(D,{type:"primary"},{default:s(()=>[k("\u68C0\u7D22")]),_:1})]),_:1})]),_:1}),r(S,{fetch:t.fetch,columns:t.columns,toolbar:[],operate:t.operate,pagination:t.pagination},{name:s(({record:m})=>[k(L(m.name),1)]),_:1},8,["fetch","columns","operate","pagination"])]),_:1})]),_:1})]),_:1})]),_:1}),r(J)])}var rt=_(Z,[["render",et]]);export{rt as default};