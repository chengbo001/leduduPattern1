import{s as U,r as F,v as P,a as B,e as l,o as k,x as q,w as t,h as e,y as c,j as f,z as E,B as j,c as N,C as M,f as $,D as z,F as L,g as R,E as A,t as K,m as G,p as H,q as J}from"./index.eb0fc1ca.js";const Q=U({name:"RepositoryForm",props:{showSubmit:{type:Boolean,default:!1}},setup(){const a=F({name:"",url:"",owner:void 0,approver:void 0,dateRange:[],type:void 0}),o=(_,u,m)=>{/^user-(.*)$/.test(u)||m(new Error("\u9700\u8981\u4EE5 user- \u5F00\u5934")),m()},{resetFields:d,validate:b,validateInfos:S}=P(a,F({name:[{required:!0,message:"\u8BF7\u8F93\u5165\u4ED3\u5E93\u540D\u79F0"}],url:[{required:!0,message:"\u8BF7\u8F93\u5165\u4ED3\u5E93\u57DF\u540D"},{validator:o}],owner:[{required:!0,message:"\u8BF7\u9009\u62E9\u7BA1\u7406\u5458"}],approver:[{required:!0,message:"\u8BF7\u9009\u62E9\u5BA1\u6279\u5458"}],dateRange:[{required:!0,type:"array",message:"\u8BF7\u9009\u62E9\u751F\u6548\u65E5\u671F"}],type:[{required:!0,message:"\u8BF7\u9009\u62E9\u4ED3\u5E93\u7C7B\u578B"}]}));return{validateInfos:S,onSubmit:async _=>{_.preventDefault();const u=await b();console.log(u)},formState:a,validate:b,resetFields:d}}});function W(a,o,d,b,S,h){const _=l("a-input"),u=l("a-form-item"),m=l("a-col"),p=l("a-select-option"),g=l("a-select"),y=l("a-row"),r=l("a-range-picker"),s=l("a-button"),i=l("a-form");return k(),q(i,{class:"form",onSubmit:a.onSubmit,scrollToFirstError:!0},{default:t(()=>[e(y,{class:"form-row",gutter:16},{default:t(()=>[e(m,{lg:6,md:12,sm:24},{default:t(()=>[e(u,c({label:"\u4ED3\u5E93\u540D"},a.validateInfos.name),{default:t(()=>[e(_,{placeholder:"\u8BF7\u8F93\u5165\u4ED3\u5E93\u540D\u79F0",value:a.formState.name,"onUpdate:value":o[0]||(o[0]=n=>a.formState.name=n)},null,8,["value"])]),_:1},16)]),_:1}),e(m,{xl:{span:7,offset:1},lg:{span:8},md:{span:12},sm:24},{default:t(()=>[e(u,c({label:"\u4ED3\u5E93\u57DF\u540D"},a.validateInfos.url),{default:t(()=>[e(_,{addonBefore:"http://",addonAfter:".com",placeholder:"\u8BF7\u8F93\u5165",value:a.formState.url,"onUpdate:value":o[1]||(o[1]=n=>a.formState.url=n)},null,8,["value"])]),_:1},16)]),_:1}),e(m,{xl:{span:9,offset:1},lg:{span:10},md:{span:24},sm:24},{default:t(()=>[e(u,c({label:"\u4ED3\u5E93\u7BA1\u7406\u5458"},a.validateInfos.owner),{default:t(()=>[e(g,{placeholder:"\u8BF7\u9009\u62E9\u7BA1\u7406\u5458",value:a.formState.owner,"onUpdate:value":o[2]||(o[2]=n=>a.formState.owner=n)},{default:t(()=>[e(p,{value:"\u738B\u540C\u5B66"},{default:t(()=>[f("\u738B\u540C\u5B66")]),_:1}),e(p,{value:"\u674E\u540C\u5B66"},{default:t(()=>[f("\u674E\u540C\u5B66")]),_:1}),e(p,{value:"\u9EC4\u540C\u5B66"},{default:t(()=>[f("\u9EC4\u540C\u5B66")]),_:1})]),_:1},8,["value"])]),_:1},16)]),_:1})]),_:1}),e(y,{class:"form-row",gutter:16},{default:t(()=>[e(m,{lg:6,md:12,sm:24},{default:t(()=>[e(u,c(a.validateInfos.approver,{label:"\u5BA1\u6279\u4EBA"}),{default:t(()=>[e(g,{placeholder:"\u8BF7\u9009\u62E9\u5BA1\u6279\u5458",value:a.formState.approver,"onUpdate:value":o[3]||(o[3]=n=>a.formState.approver=n)},{default:t(()=>[e(p,{value:"\u738B\u6653\u4E3D"},{default:t(()=>[f("\u738B\u6653\u4E3D")]),_:1}),e(p,{value:"\u674E\u519B"},{default:t(()=>[f("\u674E\u519B")]),_:1})]),_:1},8,["value"])]),_:1},16)]),_:1}),e(m,{xl:{span:7,offset:1},lg:{span:8},md:{span:12},sm:24},{default:t(()=>[e(u,c(a.validateInfos.dateRange,{label:"\u751F\u6548\u65E5\u671F"}),{default:t(()=>[e(r,{style:{width:"100%"},value:a.formState.dateRange,"onUpdate:value":o[4]||(o[4]=n=>a.formState.dateRange=n)},null,8,["value"])]),_:1},16)]),_:1}),e(m,{xl:{span:9,offset:1},lg:{span:10},md:{span:24},sm:24},{default:t(()=>[e(u,c(a.validateInfos.type,{label:"\u4ED3\u5E93\u7C7B\u578B"}),{default:t(()=>[e(g,{placeholder:"\u8BF7\u9009\u62E9\u4ED3\u5E93\u7C7B\u578B",value:a.formState.type,"onUpdate:value":o[5]||(o[5]=n=>a.formState.type=n)},{default:t(()=>[e(p,{value:"\u516C\u5F00"},{default:t(()=>[f("\u516C\u5F00")]),_:1}),e(p,{value:"\u79C1\u5BC6"},{default:t(()=>[f("\u79C1\u5BC6")]),_:1})]),_:1},8,["value"])]),_:1},16)]),_:1})]),_:1}),a.showSubmit?(k(),q(u,{key:0},{default:t(()=>[e(s,{htmlType:"submit"},{default:t(()=>[f("Submit")]),_:1})]),_:1})):E("",!0)]),_:1},8,["onSubmit"])}var X=B(Q,[["render",W],["__scopeId","data-v-edfc2354"]]);const Y=U({name:"TaskForm",props:{showSubmit:{type:Boolean,default:!1}},setup(){const a=F({name2:"",url2:"",owner2:void 0,approver2:void 0,dateRange2:"",type2:void 0}),{resetFields:o,validate:d,validateInfos:b}=P(a,F({name2:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EFB\u52A1\u540D\u79F0"}],url2:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EFB\u52A1\u63CF\u8FF0"}],owner2:[{required:!0,message:"\u8BF7\u9009\u62E9\u6267\u884C\u4EBA"}],approver2:[{required:!0,message:"\u8BF7\u9009\u62E9\u8D23\u4EFB\u4EBA"}],dateRange2:[{required:!0,message:"\u8BF7\u9009\u62E9\u63D0\u9192\u65F6\u95F4"}],type2:[{required:!0,message:"\u8BF7\u9009\u62E9\u4EFB\u52A1\u7C7B\u578B"}]}));return{validateInfos:b,onSubmit:async h=>{h.preventDefault();const _=await d();console.log(_)},formState:a,validate:d,resetFields:o}}});function Z(a,o,d,b,S,h){const _=l("a-input"),u=l("a-form-item"),m=l("a-col"),p=l("a-select-option"),g=l("a-select"),y=l("a-row"),r=l("a-time-picker"),s=l("a-button"),i=l("a-form");return k(),q(i,{onSubmit:a.onSubmit,class:"form"},{default:t(()=>[e(y,{class:"form-row",gutter:16},{default:t(()=>[e(m,{lg:6,md:12,sm:24},{default:t(()=>[e(u,c(a.validateInfos.name2,{label:"\u4EFB\u52A1\u540D"}),{default:t(()=>[e(_,{placeholder:"\u8BF7\u8F93\u5165\u4EFB\u52A1\u540D\u79F0",value:a.formState.name2,"onUpdate:value":o[0]||(o[0]=n=>a.formState.name2=n)},null,8,["value"])]),_:1},16)]),_:1}),e(m,{xl:{span:7,offset:1},lg:{span:8},md:{span:12},sm:24},{default:t(()=>[e(u,c(a.validateInfos.url2,{label:"\u4EFB\u52A1\u63CF\u8FF0"}),{default:t(()=>[e(_,{placeholder:"\u8BF7\u8F93\u5165\u4EFB\u52A1\u63CF\u8FF0",value:a.formState.url2,"onUpdate:value":o[1]||(o[1]=n=>a.formState.url2=n)},null,8,["value"])]),_:1},16)]),_:1}),e(m,{xl:{span:9,offset:1},lg:{span:10},md:{span:24},sm:24},{default:t(()=>[e(u,c(a.validateInfos.owner2,{label:"\u6267\u884C\u4EBA"}),{default:t(()=>[e(g,{placeholder:"\u8BF7\u9009\u62E9\u6267\u884C\u4EBA",value:a.formState.owner2,"onUpdate:value":o[2]||(o[2]=n=>a.formState.owner2=n)},{default:t(()=>[e(p,{value:"\u9EC4\u4E3D\u4E3D"},{default:t(()=>[f("\u9EC4\u4E3D\u4E3D")]),_:1}),e(p,{value:"\u674E\u5927\u5200"},{default:t(()=>[f("\u674E\u5927\u5200")]),_:1})]),_:1},8,["value"])]),_:1},16)]),_:1})]),_:1}),e(y,{class:"form-row",gutter:16},{default:t(()=>[e(m,{lg:6,md:12,sm:24},{default:t(()=>[e(u,c(a.validateInfos.approver2,{label:"\u8D23\u4EFB\u4EBA"}),{default:t(()=>[e(g,{placeholder:"\u8BF7\u9009\u62E9\u8D23\u4EFB\u4EBA",value:a.formState.approver2,"onUpdate:value":o[3]||(o[3]=n=>a.formState.approver2=n)},{default:t(()=>[e(p,{value:"\u738B\u4F1F"},{default:t(()=>[f("\u738B\u4F1F")]),_:1}),e(p,{value:"\u674E\u7EA2\u519B"},{default:t(()=>[f("\u674E\u7EA2\u519B")]),_:1})]),_:1},8,["value"])]),_:1},16)]),_:1}),e(m,{xl:{span:7,offset:1},lg:{span:8},md:{span:12},sm:24},{default:t(()=>[e(u,c(a.validateInfos.dateRange2,{label:"\u63D0\u9192\u65F6\u95F4"}),{default:t(()=>[e(r,{style:{width:"100%"},value:a.formState.dateRange2,"onUpdate:value":o[4]||(o[4]=n=>a.formState.dateRange2=n)},null,8,["value"])]),_:1},16)]),_:1}),e(m,{xl:{span:9,offset:1},lg:{span:10},md:{span:24},sm:24},{default:t(()=>[e(u,c(a.validateInfos.type2,{label:"\u4EFB\u52A1\u7C7B\u578B"}),{default:t(()=>[e(g,{placeholder:"\u8BF7\u9009\u62E9\u4EFB\u52A1\u7C7B\u578B",value:a.formState.type2,"onUpdate:value":o[5]||(o[5]=n=>a.formState.type2=n)},{default:t(()=>[e(p,{value:"\u5B9A\u65F6\u6267\u884C"},{default:t(()=>[f("\u5B9A\u65F6\u6267\u884C")]),_:1}),e(p,{value:"\u5468\u671F\u6267\u884C"},{default:t(()=>[f("\u5468\u671F\u6267\u884C")]),_:1})]),_:1},8,["value"])]),_:1},16)]),_:1})]),_:1}),a.showSubmit?(k(),q(u,{key:0},{default:t(()=>[e(s,{htmlType:"submit"},{default:t(()=>[f("Submit")]),_:1})]),_:1})):E("",!0)]),_:1},8,["onSubmit"])}var x=B(Y,[["render",Z],["__scopeId","data-v-73875b0d"]]);const ee=U({name:"advancedForm",components:{"repository-form":X,"task-form":x,PlusOutlined:j},setup(){const a=N(null),o=N(null),d=F({loading:!1,memberLoading:!1,columns:[{title:"\u6210\u5458\u59D3\u540D",dataIndex:"name",key:"name",width:"20%",slots:{customRender:"name"}},{title:"\u5DE5\u53F7",dataIndex:"workId",key:"workId",width:"20%",slots:{customRender:"workId"}},{title:"\u6240\u5C5E\u90E8\u95E8",dataIndex:"department",key:"department",width:"40%",slots:{customRender:"department"}},{title:"\u64CD\u4F5C",key:"action",slots:{customRender:"operation"}}],data:[{key:"1",name:"\u5C0F\u660E",workId:"001",editable:!1,department:"\u884C\u653F\u90E8"},{key:"2",name:"\u674E\u8389",workId:"002",editable:!1,department:"IT\u90E8"},{key:"3",name:"\u738B\u5C0F\u5E05",workId:"003",editable:!1,department:"\u8D22\u52A1\u90E8"}],errors:[]}),b=()=>{const r=d.data.length;d.data.push({key:r===0?"1":(parseInt(d.data[r-1].key)+1).toString(),name:"",workId:"",department:"",editable:!0,isNew:!0})},S=r=>{const s=d.data.filter(i=>i.key!==r);d.data=s},h=r=>{d.memberLoading=!0;const{key:s,name:i,workId:n,department:C}=r;if(!i||!n||!C){d.memberLoading=!1,G.error("\u8BF7\u586B\u5199\u5B8C\u6574\u6210\u5458\u4FE1\u606F\u3002");return}new Promise(w=>{setTimeout(()=>{w({loop:!1})},800)}).then(()=>{const w=d.data.find(v=>v.key===s);w.editable=!1,w.isNew=!1,d.memberLoading=!1})},_=r=>{const s=d.data.find(i=>i.key===r);s._originalData={...s},s.editable=!s.editable},u=(r,s)=>{const i=d.data;return(s||i).find(n=>n.key===r)},m=r=>{const s=d.data.find(i=>i.key===r);Object.keys(s).forEach(i=>{s[i]=s._originalData[i]}),s._originalData=void 0},p=(r,s,i)=>{const n=[...d.data],C=n.find(w=>s===w.key);C&&(C[i]=r,d.data=n)},g=async()=>{const r=[a.value.validate(),o.value.validate()];try{const s=await Promise.all(r);console.log(s)}catch(s){console.log(s)}},y=r=>{a.value.resetFields(),o.value.resetFields()};return{repository:a,task:o,...M(d),newMember:b,remove:S,saveRow:h,toggle:_,getRowByKey:u,cancel:m,handleChange:p,validate:g,resetForm:y}}}),O=a=>(H("data-v-6e6cdd58"),a=a(),J(),a),ae={key:0},te=["onClick"],oe=O(()=>R("a",null,"\u5220\u9664",-1)),ne={key:1},le=["onClick"],se=["onClick"],re={key:1},de=["onClick"],ue=O(()=>R("a",null,"\u5220\u9664",-1));function me(a,o,d,b,S,h){const _=l("page-header"),u=l("repository-form"),m=l("a-card"),p=l("task-form"),g=l("a-input"),y=l("a-divider"),r=l("a-popconfirm"),s=l("a-table"),i=l("PlusOutlined"),n=l("a-button"),C=l("page-layout"),w=l("page-footer");return k(),$("div",null,[e(_,{title:"\u9AD8\u7EA7\u8868\u5355",describe:"\u9AD8\u7EA7\u8868\u5355\u5E38\u89C1\u4E8E\u4E00\u6B21\u6027\u8F93\u5165\u548C\u63D0\u4EA4\u5927\u6279\u91CF\u6570\u636E\u7684\u573A\u666F"}),e(C,null,{default:t(()=>[e(m,{class:"card",title:"\u4ED3\u5E93\u7BA1\u7406",bordered:!1},{default:t(()=>[e(u,{ref:"repository",showSubmit:!1},null,512)]),_:1}),e(m,{class:"card",title:"\u4EFB\u52A1\u7BA1\u7406",bordered:!1},{default:t(()=>[e(p,{ref:"task",showSubmit:!1},null,512)]),_:1}),e(m,null,{default:t(()=>[e(s,{columns:a.columns,dataSource:a.data,pagination:!1,loading:a.memberLoading},z({operation:t(({record:v})=>[v.editable?(k(),$(L,{key:0},[v.isNew?(k(),$("span",ae,[R("a",{onClick:I=>a.saveRow(v)},"\u6DFB\u52A0",8,te),e(y,{type:"vertical"}),e(r,{title:"\u662F\u5426\u8981\u5220\u9664\u6B64\u884C\uFF1F",onConfirm:I=>a.remove(v.key)},{default:t(()=>[oe]),_:2},1032,["onConfirm"])])):(k(),$("span",ne,[R("a",{onClick:I=>a.saveRow(v)},"\u4FDD\u5B58",8,le),e(y,{type:"vertical"}),R("a",{onClick:I=>a.cancel(v.key)},"\u53D6\u6D88",8,se)]))],64)):(k(),$("span",re,[R("a",{onClick:I=>a.toggle(v.key)},"\u7F16\u8F91",8,de),e(y,{type:"vertical"}),e(r,{title:"\u662F\u5426\u8981\u5220\u9664\u6B64\u884C\uFF1F",onConfirm:I=>a.remove(v.key)},{default:t(()=>[ue]),_:2},1032,["onConfirm"])]))]),_:2},[A(["name","workId","department"],(v,I)=>({name:v,fn:t(({text:D,record:T})=>[T.editable?(k(),q(g,{key:v,style:{margin:"-5px 0"},value:D,placeholder:a.columns[I].title,onChange:V=>a.handleChange(V.target.value,T.key,v)},null,8,["value","placeholder","onChange"])):(k(),$(L,{key:1},[f(K(D),1)],64))])}))]),1032,["columns","dataSource","loading"]),e(n,{style:{width:"100%","margin-top":"16px","margin-bottom":"24px"},type:"dashed",onClick:a.newMember},{icon:t(()=>[e(i)]),default:t(()=>[f(" \u65B0\u589E\u6210\u5458 ")]),_:1},8,["onClick"]),e(n,{onClick:a.resetForm},{default:t(()=>[f("\u91CD\u7F6E")]),_:1},8,["onClick"]),e(n,{type:"primary",onClick:a.validate,loading:a.loading,style:{"margin-left":"16px"}},{default:t(()=>[f("\u63D0\u4EA4")]),_:1},8,["onClick","loading"])]),_:1})]),_:1}),e(w)])}var pe=B(ee,[["render",me],["__scopeId","data-v-6e6cdd58"]]);export{pe as default};
