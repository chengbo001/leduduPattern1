import{a as B,e as l,o as N,f as V,h as e,w as t,j as a,g as s}from"./index.eb0fc1ca.js";const z={data(){return{labelCol:{span:4},wrapperCol:{span:12},other:"",form:{name:"\u5C31\u7720\u4EEA\u5F0F",region:void 0,date1:void 0,delivery:!0,type:["1","2"],resource:"\u5317\u4EAC",desc:"\u88AB\u5C81\u6708\u9542\u7A7A, \u4EA6\u53D7\u5176\u96D5\u7422"},rules:{name:[{required:!0,message:"Please input Activity name",trigger:"blur"},{min:3,max:5,message:"Length should be 3 to 5",trigger:"blur"}],region:[{required:!0,message:"Please select Activity zone",trigger:"change"}],date1:[{required:!0,message:"Please pick a date",trigger:"change",type:"object"}],type:[{type:"array",required:!0,message:"Please select at least one activity type",trigger:"change"}],resource:[{required:!0,message:"Please select activity resource",trigger:"change"}],desc:[{required:!0,message:"Please input activity form",trigger:"blur"}]}}},methods:{onSubmit(){this.$refs.ruleForm.validate().then(()=>{console.log("values",this.form)}).catch(i=>{console.log("error",i)})},resetForm(){this.$refs.ruleForm.resetFields()}}},A={class:"center"},S=s("div",{class:"username"},"\u5C31\u7720\u4EEA\u5F0F",-1),T=s("div",{class:"address"},"China",-1),E=s("div",{class:"desc"},"\u6C5F\u6E56\u65E0\u540D\uFF0C\u5B89\u5FC3\u7EC3\u5251",-1),L=s("br",null,null,-1),D=s("br",null,null,-1),G=s("br",null,null,-1),H=s("br",null,null,-1),I=s("br",null,null,-1),J=s("br",null,null,-1),K=s("br",null,null,-1);function M(i,n,O,Q,o,f){const c=l("a-avatar"),h=l("a-divider"),m=l("a-card"),d=l("a-tag"),_=l("a-col"),g=l("a-row"),k=l("a-input"),u=l("a-form-item"),v=l("a-select-option"),x=l("a-select"),C=l("a-date-picker"),w=l("a-switch"),p=l("a-checkbox"),q=l("a-checkbox-group"),P=l("a-textarea"),b=l("a-button"),F=l("a-form"),y=l("a-tab-pane"),U=l("a-tabs"),j=l("page-layout");return N(),V("div",A,[e(j,null,{default:t(()=>[e(g,{gutter:[15,15]},{default:t(()=>[e(_,{lg:6,md:6,sm:24,xs:24},{default:t(()=>[e(m,{style:{position:"relative"}},{default:t(()=>[e(c,{class:"avatar",size:64,src:"https://portrait.gitee.com/uploads/avatars/user/2813/8441097_shaynas_1610801433.png!avatar200"}),S,T,e(h),E]),_:1}),e(m,{style:{"margin-top":"15px"}},{default:t(()=>[a(" \u6807\u7B7E "),L,D,e(d,null,{default:t(()=>[a("\u5F88\u6709\u60F3\u6CD5")]),_:1}),e(d,null,{default:t(()=>[a("\u4E13\u6CE8\u8BBE\u8BA1")]),_:1}),e(d,null,{default:t(()=>[a("\u5E05")]),_:1}),e(d,null,{default:t(()=>[a("\u6D77\u7EB3\u767E\u5DDD")]),_:1}),G,H,I,a(" \u56E2\u961F "),J,K,e(g,{gutter:[20,20]},{default:t(()=>[e(_,{span:"12"},{default:t(()=>[e(c,null,{default:t(()=>[a("\u79D1")]),_:1}),a("\xA0\xA0\xA0\u79D1\u5B66\u642C\u7816\u7EC4")]),_:1}),e(_,{span:"12"},{default:t(()=>[e(c,null,{default:t(()=>[a("\u7A0B")]),_:1}),a("\xA0\xA0\xA0\u7A0B\u5E8F\u5458\u65E5\u5E38")]),_:1}),e(_,{span:"12"},{default:t(()=>[e(c,null,{default:t(()=>[a("\u4E2D")]),_:1}),a("\xA0\xA0\xA0\u4E2D\u4E8C\u5C11\u5E74\u56E2")]),_:1}),e(_,{span:"12"},{default:t(()=>[e(c,null,{default:t(()=>[a("\u8BA1")]),_:1}),a("\xA0\xA0\xA0\u8BA1\u7B97\u673A\u5929\u56E2")]),_:1})]),_:1})]),_:1})]),_:1}),e(_,{lg:18,md:18,sm:24,xs:24},{default:t(()=>[e(m,null,{default:t(()=>[e(U,{onChange:i.callback},{default:t(()=>[e(y,{key:"1",tab:"\u57FA\u672C\u4FE1\u606F"},{default:t(()=>[e(F,{ref:"ruleForm",model:o.form,rules:o.rules,"label-col":o.labelCol,"wrapper-col":o.wrapperCol,style:{"margin-top":"20px"}},{default:t(()=>[e(u,{ref:"name",label:"\u8D26\u53F7",name:"name"},{default:t(()=>[e(k,{value:o.form.name,"onUpdate:value":n[0]||(n[0]=r=>o.form.name=r)},null,8,["value"])]),_:1},512),e(u,{label:"\u5730\u533A",name:"region"},{default:t(()=>[e(x,{value:o.form.region,"onUpdate:value":n[1]||(n[1]=r=>o.form.region=r),placeholder:"\u8BF7\u9009\u62E9\u5730\u533A"},{default:t(()=>[e(v,{value:"shanghai"},{default:t(()=>[a(" \u4E0A\u6D77 ")]),_:1}),e(v,{value:"beijing"},{default:t(()=>[a(" \u5317\u4EAC ")]),_:1})]),_:1},8,["value"])]),_:1}),e(u,{label:"\u751F\u65E5",required:"",name:"date1"},{default:t(()=>[e(C,{value:o.form.date1,"onUpdate:value":n[2]||(n[2]=r=>o.form.date1=r),"show-time":"",type:"date",placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",style:{width:"100%"}},null,8,["value"])]),_:1}),e(u,{label:"\u5F02\u5730",name:"delivery"},{default:t(()=>[e(w,{checked:o.form.delivery,"onUpdate:checked":n[3]||(n[3]=r=>o.form.delivery=r)},null,8,["checked"])]),_:1}),e(u,{label:"\u72B6\u6001",name:"type"},{default:t(()=>[e(q,{value:o.form.type,"onUpdate:value":n[4]||(n[4]=r=>o.form.type=r)},{default:t(()=>[e(p,{value:"1",name:"type"},{default:t(()=>[a(" \u5728\u7EBF ")]),_:1}),e(p,{value:"2",name:"type"},{default:t(()=>[a(" \u9690\u8EAB ")]),_:1}),e(p,{value:"3",name:"type"},{default:t(()=>[a(" \u79BB\u7EBF ")]),_:1})]),_:1},8,["value"])]),_:1}),e(u,{label:"\u7B7E\u540D",name:"desc"},{default:t(()=>[e(P,{value:o.form.desc,"onUpdate:value":n[5]||(n[5]=r=>o.form.desc=r)},null,8,["value"])]),_:1}),e(u,{"wrapper-col":{span:14,offset:4}},{default:t(()=>[e(b,{type:"primary",onClick:f.onSubmit},{default:t(()=>[a(" \u4FDD\u5B58 ")]),_:1},8,["onClick"]),e(b,{style:{"margin-left":"10px"},onClick:f.resetForm},{default:t(()=>[a(" \u91CD\u7F6E ")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules","label-col","wrapper-col"])]),_:1}),e(y,{key:"2",tab:"\u8D26\u53F7\u7ED1\u5B9A","force-render":""},{default:t(()=>[a(" Content of Tab Pane 2 ")]),_:1})]),_:1},8,["onChange"])]),_:1})]),_:1})]),_:1})]),_:1})])}var W=B(z,[["render",M]]);export{W as default};