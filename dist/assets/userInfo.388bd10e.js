import{a as F,c as S,r as I,Y as J,Z as D,e as r,o as c,f as R,h as e,w as t,X as p,$ as _,j as s,x,t as B}from"./index.eb0fc1ca.js";const z={key:"1",name:"Joe Black",sex:"boy",age:32,createTime:"2020-02-09 00:00:00",address:"Sidney No. 1 Lake Park Sidney No. 1 ",tags:["cool","teacher"]},T={setup(){const f=async a=>new Promise(m=>{setTimeout(()=>{m({total:100,data:new Array(a.pageSize).fill(z)})},900)}),n=[{label:"\u65B0\u589E",event:function(a){alert("\u65B0\u589E\u64CD\u4F5C:"+JSON.stringify(a))}},{label:"\u5220\u9664",event:function(a){alert("\u6279\u91CF\u5220\u9664:"+JSON.stringify(a))}},{label:"\u66F4\u591A\u64CD\u4F5C",children:[{label:"\u6279\u91CF\u5BFC\u5165",event(a){alert("\u6279\u91CF\u5BFC\u5165")}},{label:"\u6279\u91CF\u5BFC\u51FA",event(a){alert("\u6279\u91CF\u5BFC\u51FA")}}]}],g=[{title:"\u59D3\u540D",dataIndex:"name",key:"name",slots:{customRender:"name"}},{title:"\u6027\u522B",dataIndex:"sex",key:"sex"},{title:"\u5E74\u9F84",dataIndex:"age",key:"age"},{title:"\u5730\u5740",dataIndex:"address",key:"address"}],l=[{label:"\u67E5\u770B",event:function(a){alert("\u67E5\u770B\u8BE6\u60C5:"+JSON.stringify(a))}},{label:"\u4FEE\u6539",event:function(a){alert("\u4FEE\u6539\u4E8B\u4EF6:"+JSON.stringify(a))}},{label:"\u5220\u9664",event:function(a){alert("\u5220\u9664\u4E8B\u4EF6:"+JSON.stringify(a))}},{label:"\u66F4\u591A",children:[{label:"\u5BFC\u51FA",event:function(a){alert("\u5BFC\u51FA")}},{label:"\u4E0B\u8F7D",event:function(a){alert("\u4E0B\u8F7D")}}]}],v=S(!1),b=S(),d=I({});return{pagination:{current:1,pageSize:10},fetch:f,toolbar:n,columns:g,operate:l,formRef:b,formState:d,expand:v,onFinish:a=>{console.log("Received values of form: ",a),console.log("formState: ",d)}}},components:{DownOutlined:J,UpOutlined:D}},j={id:"table-dome"};function P(f,n,g,l,v,b){const d=r("a-input"),i=r("a-form-item"),a=r("a-col"),m=r("SearchOutlined"),u=r("a-button"),h=r("ClearOutlined"),y=r("UpOutlined"),k=r("DownOutlined"),O=r("a-row"),w=r("a-form"),U=r("p-table"),N=r("a-card"),q=r("page-layout"),C=r("page-footer");return c(),R("div",j,[e(q,null,{default:t(()=>[e(N,null,{default:t(()=>[e(w,{ref:"formRef",name:"advanced_search",class:"ant-advanced-search-form",model:l.formState,onFinish:l.onFinish},{default:t(()=>[e(O,{gutter:24},{default:t(()=>[e(a,{xs:24,sm:12,md:8,lg:"6"},{default:t(()=>[e(i,{name:"field-1",label:"field-1",rules:[{required:!0,message:"input something"}]},{default:t(()=>[e(d,{value:l.formState["field-1"],"onUpdate:value":n[0]||(n[0]=o=>l.formState["field-1"]=o),placeholder:"placeholder"},null,8,["value"])]),_:1})]),_:1}),e(a,{xs:24,sm:12,md:8,lg:"6"},{default:t(()=>[e(i,{name:"field-1",label:"field-1",rules:[{required:!0,message:"input something"}]},{default:t(()=>[e(d,{value:l.formState["field-1"],"onUpdate:value":n[1]||(n[1]=o=>l.formState["field-1"]=o),placeholder:"placeholder"},null,8,["value"])]),_:1})]),_:1}),e(a,{xs:24,sm:12,md:8,lg:"6"},{default:t(()=>[e(i,{name:"field-1",label:"field-1",rules:[{required:!0,message:"input something"}]},{default:t(()=>[e(d,{value:l.formState["field-1"],"onUpdate:value":n[2]||(n[2]=o=>l.formState["field-1"]=o),placeholder:"placeholder"},null,8,["value"])]),_:1})]),_:1}),e(a,{xs:24,sm:12,md:8,lg:"6"},{default:t(()=>[e(i,{name:"field-1",label:"field-1",rules:[{required:!0,message:"input something"}]},{default:t(()=>[e(d,{value:l.formState["field-1"],"onUpdate:value":n[3]||(n[3]=o=>l.formState["field-1"]=o),placeholder:"placeholder"},null,8,["value"])]),_:1})]),_:1}),e(a,{xs:24,sm:12,md:8,lg:"6"},{default:t(()=>[e(i,{name:"field-1",label:"field-1",rules:[{required:!0,message:"input something"}]},{default:t(()=>[e(d,{value:l.formState["field-1"],"onUpdate:value":n[4]||(n[4]=o=>l.formState["field-1"]=o),placeholder:"placeholder"},null,8,["value"])]),_:1})]),_:1}),p(e(a,{xs:24,sm:12,md:8,lg:"6"},{default:t(()=>[e(i,{name:"field-1",label:"field-1",rules:[{required:!0,message:"input something"}]},{default:t(()=>[e(d,{value:l.formState["field-1"],"onUpdate:value":n[5]||(n[5]=o=>l.formState["field-1"]=o),placeholder:"placeholder"},null,8,["value"])]),_:1})]),_:1},512),[[_,l.expand]]),p(e(a,{xs:24,sm:12,md:8,lg:"6"},{default:t(()=>[e(i,{name:"field-1",label:"field-1",rules:[{required:!0,message:"input something"}]},{default:t(()=>[e(d,{value:l.formState["field-1"],"onUpdate:value":n[6]||(n[6]=o=>l.formState["field-1"]=o),placeholder:"placeholder"},null,8,["value"])]),_:1})]),_:1},512),[[_,l.expand]]),p(e(a,{xs:24,sm:12,md:8,lg:"6"},{default:t(()=>[e(i,{name:"field-1",label:"field-1",rules:[{required:!0,message:"input something"}]},{default:t(()=>[e(d,{value:l.formState["field-1"],"onUpdate:value":n[7]||(n[7]=o=>l.formState["field-1"]=o),placeholder:"placeholder"},null,8,["value"])]),_:1})]),_:1},512),[[_,l.expand]]),e(a,{xs:24,sm:12,md:8,lg:"6"},{default:t(()=>[e(u,{type:"primary","html-type":"submit"},{icon:t(()=>[e(m)]),default:t(()=>[s(" \u67E5\u8BE2 ")]),_:1}),e(u,{style:{margin:"0 8px"},onClick:n[8]||(n[8]=()=>l.formRef.resetFields())},{icon:t(()=>[e(h)]),default:t(()=>[s(" \u6E05\u9664 ")]),_:1}),e(u,{type:"dashed",style:{"font-size":"12px"},onClick:n[9]||(n[9]=o=>l.expand=!l.expand)},{default:t(()=>[l.expand?(c(),x(y,{key:0})):(c(),x(k,{key:1})),s(" \u66F4\u591A ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model","onFinish"]),e(U,{fetch:l.fetch,value:f.obj,columns:l.columns,toolbar:l.toolbar,operate:l.operate,pagination:l.pagination,bordered:!0},{name:t(({record:o})=>[s(B(o.name),1)]),_:1},8,["fetch","value","columns","toolbar","operate","pagination"])]),_:1})]),_:1}),e(C)])}var A=F(T,[["render",P]]);export{A as default};
