import{M as o}from"./mock.browser.esm.c440f803.js";import{C as i}from"./index.72962c83.js";import{a as c,c as l,l as s,n as d,o as u,f as p}from"./index.eb0fc1ca.js";const y={setup(){const t=o.mock("@GUID"),n=l(null);return s(()=>{const{data:a}=o.mock({"data|12":[{"Month|+1":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"Evaporation|50-100":0,"Precipitation|5-100":0,"Temperature|50-100":0}]}),e=new i({container:t,autoFit:!0});e.data(a),e.title({title:"\u591A\u7EF4\u591A\u8F74\u6DF7\u5408\u7EDF\u8BA1"}),e.line().encode("x","Month").encode("y","Temperature").encode("color","#EE6666").encode("shape","smooth").scale("y",{independent:!0}).axis("y",{title:"\u7EF4\u5EA61",grid:null,titleFill:"#EE6666"}),e.interval().encode("x","Month").encode("y","Evaporation").encode("color","#5470C6").scale("y",{independent:!0,domainMax:200}).style("fillOpacity",.8).axis("y",{position:"right",title:"\u7EF4\u5EA62",titleFill:"#5470C6"}),e.line().encode("x","Month").encode("y","Precipitation").encode("color","#91CC75").scale("y",{independent:!0}).style("lineWidth",2).style("lineDash",[2,2]).axis("y",{position:"right",title:"\u7EF4\u5EA63",grid:null,titleFill:"#91CC75"}),e.render()}),d(()=>{n.value&&n.value.destroy()}),{chartContainer:t}}},f=["id"];function m(t,n,a,e,r,h){return u(),p("div",{id:e.chartContainer,style:{width:"100%",height:"320px"}},null,8,f)}var E=c(y,[["render",m]]);const v={setup(){const t=o.mock("@GUID"),n=l(null);return s(()=>{const a=o.mock({"value|5":[{"key|+1":1,name:function(){return"PXHD"+this.key},"star|500-5000":0}]}),e=new i({container:t,autoFit:!0});e.title({title:"\u7389\u73CF\u7EDF\u8BA1"}),e.coordinate({type:"radial",endAngle:Math.PI}),e.interval().data({value:a.value,transform:[{type:"sortBy",fields:[["star",!0]]}]}).encode("x","name").encode("y","star").scale("y",{type:"sqrt"}).encode("color","name").encode("size",40).style("radius",20).axis("x",{title:!1}).axis("y",!1).animate("enter",{type:"waveIn",duration:1e3}),e.render()}),d(()=>{n.value&&n.value.destroy()}),{chartContainer:t}}},_=["id"];function x(t,n,a,e,r,h){return u(),p("div",{id:e.chartContainer,style:{width:"100%",height:"320px"}},null,8,_)}var I=c(v,[["render",x]]);const $={setup(){const t=o.mock("@GUID"),n=l(null);return s(()=>{const a=o.mock({"value|5":[{"key|+1":1,id:"@CNAME","value|50-600":0}]}),e=new i({container:t,autoFit:!0});e.title({title:"\u997C\u72B6\u7EDF\u8BA1"}),e.coordinate({type:"theta",innerRadius:.25,outerRadius:.8}),e.interval().data(a.value).transform({type:"stackY"}).encode("y","value").encode("color","id").scale("color",{range:["#e8c1a0","#f47560","#f1e15b","#e8a838","#61cdbb"]}).label({text:"value",fontWeight:"bold",offset:14}).label({text:"id",position:"spider",connectorDistance:0,fontWeight:"bold",textBaseline:"bottom",textAlign:r=>["c","sass"].includes(r.id)?"end":"start",dy:-4}).style("radius",4).style("stroke","#fff").style("lineWidth",2).animate("enter",{type:"waveIn"}).legend(!1),e.render()}),d(()=>{n.value&&n.value.destroy()}),{chartContainer:t}}},g=["id"];function k(t,n,a,e,r,h){return u(),p("div",{id:e.chartContainer,style:{width:"100%",height:"320px"}},null,8,g)}var A=c($,[["render",k]]);const C={setup(){const t=o.mock("@GUID"),n=l(null);return s(()=>{o.mock({"value|5":[{"key|+1":1,"symbol|1":["\u79CD\u7C7B1","\u79CD\u7C7B2","\u79CD\u7C7B3","\u79CD\u7C7B4","\u79CD\u7C7B5"],date:"@DATE","price|50-300":0}]});const a=new i({container:t,autoFit:!0});a.title({title:"\u805A\u5408\u6298\u7EBF\u7EDF\u8BA1"}),a.line().data({type:"fetch",value:"https://gw.alipayobjects.com/os/bmw-prod/cb99c4ab-e0a3-4c76-9586-fe7fa2ff1a8c.csv"}).transform({type:"groupX",y:"mean"}).encode("x",e=>new Date(e.date).getFullYear()+13).encode("y",e=>e.price).encode("color","symbol").label({text:"price",transform:[{type:"overlapDodgeY"}],fontSize:10}).tooltip({channel:"y",valueFormatter:".1f"}),a.render()}),d(()=>{n.value&&n.value.destroy()}),{chartContainer:t}}},b=["id"];function w(t,n,a,e,r,h){return u(),p("div",{id:e.chartContainer,style:{width:"100%",height:"320px"}},null,8,b)}var R=c(C,[["render",w]]);export{R as a,E as l,A as p,I as r};