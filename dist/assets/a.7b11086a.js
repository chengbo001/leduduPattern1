import{a as j,a8 as T,s as H,r as D,e as a,o as v,f as E,h as e,w as t,j as o,y as P,a9 as S,F as V,E as $,g as c,t as I,a6 as U}from"./index.eb0fc1ca.js";const z=T.useForm,L=[{title:"\u6865\u6881\u6DF7\u51DD\u571F\u62A5\u544A"},{title:"\u516C\u8DEF\u6DF7\u51DD\u571F\u62A5\u544A"},{title:"\u4ED3\u5E93\u6DF7\u51DD\u571F\u62A5\u544A"},{title:"\u4F4F\u5B85\u697C\u6DF7\u51DD\u571F\u62A5\u544A"}],M=H({setup(){const u=D({name:"",region:void 0,type:[]}),l=D({name:[{required:!0,message:"Please input name"}],region:[{required:!0,message:"Please select region"}],type:[{required:!0,message:"Please select type",type:"array"}]}),{resetFields:d,validate:_,validateInfos:m}=z(u,l,{onValidate:(...s)=>console.log(...s)});return{labelCol:{span:4},wrapperCol:{span:14},validateInfos:m,resetFields:d,modelRef:u,onSubmit:()=>{_().then(()=>{console.log(U(u))}).catch(s=>{console.log("error",s)})},reportData:L,title:document.title}}}),G=c("div",{style:{height:"10px"}},null,-1),J=c("div",{style:{height:"10px"}},null,-1),K={href:"https://www.antdv.com/"};function O(u,l,d,_,m,g){const s=a("page-header"),C=a("a-input"),r=a("a-form-item"),i=a("a-select-option"),h=a("a-select"),p=a("a-checkbox"),A=a("a-checkbox-group"),f=a("a-button"),b=a("a-form"),F=a("a-card"),y=a("a-avatar"),B=a("a-list-item-meta"),w=a("a-list-item"),k=a("a-list"),R=a("a-col"),N=a("a-row");return v(),E("div",null,[e(s,{title:u.title,describe:"\u53EF\u6839\u636E\u9700\u8981\u751F\u6210\u62A5\u544A\uFF0C\u5305\u62EC\u6E29\u5EA6\u76D1\u6D4B\u62A5\u544A\u3001\u5F02\u5E38\u60C5\u51B5\u62A5\u544A\u7B49\uFF0C\u65B9\u4FBF\u9879\u76EE\u7BA1\u7406\u4EBA\u5458\u4E86\u89E3\u6DF7\u51DD\u571F\u6D4B\u6E29\u6570\u636E\u7684\u6574\u4F53\u60C5\u51B5"},null,8,["title"]),G,e(F,null,{default:t(()=>[e(b,{"label-col":u.labelCol,"wrapper-col":u.wrapperCol},{default:t(()=>[e(r,{label:"\u62A5\u544A\u540D\u79F0",required:""},{default:t(()=>[e(C,{value:u.modelRef.name,"onUpdate:value":l[0]||(l[0]=n=>u.modelRef.name=n)},null,8,["value"])]),_:1}),e(r,{label:"\u9009\u62E9\u6DF7\u51DD\u571F\u7F16\u53F7",required:""},{default:t(()=>[e(h,{value:u.modelRef.region,"onUpdate:value":l[1]||(l[1]=n=>u.modelRef.region=n),placeholder:"please select your zone"},{default:t(()=>[e(i,{value:"shanghai"},{default:t(()=>[o("HNT20231009003")]),_:1}),e(i,{value:"beijing"},{default:t(()=>[o("HNT20231009004")]),_:1}),e(i,{value:"beijing"},{default:t(()=>[o("HNT20231009004")]),_:1}),e(i,{value:"beijing"},{default:t(()=>[o("HNT20231009004")]),_:1})]),_:1},8,["value"])]),_:1}),e(r,{label:"\u62A5\u544A\u7C7B\u578B",required:""},{default:t(()=>[e(A,{value:u.modelRef.type,"onUpdate:value":l[2]||(l[2]=n=>u.modelRef.type=n)},{default:t(()=>[e(p,{value:"1",name:"type"},{default:t(()=>[o("\u8BE6\u7EC6")]),_:1}),e(p,{value:"2",name:"type"},{default:t(()=>[o("\u7B80\u6D01")]),_:1}),e(p,{value:"3",name:"type"},{default:t(()=>[o("\u9002\u4E2D")]),_:1})]),_:1},8,["value"])]),_:1}),e(r,P({class:"error-infos","wrapper-col":{span:14,offset:4}},u.errorInfos),{default:t(()=>[e(f,{type:"primary",onClick:S(u.onSubmit,["prevent"])},{default:t(()=>[o("\u751F\u6210")]),_:1},8,["onClick"]),e(f,{style:{"margin-left":"10px"},onClick:u.resetFields},{default:t(()=>[o("\u91CD\u7F6E")]),_:1},8,["onClick"])]),_:1},16)]),_:1},8,["label-col","wrapper-col"])]),_:1}),J,e(N,null,{default:t(()=>[(v(),E(V,null,$(4,n=>e(R,{key:n,span:6},{default:t(()=>[e(F,null,{default:t(()=>[e(k,{"item-layout":"horizontal","data-source":u.reportData},{renderItem:t(({item:q})=>[e(w,null,{default:t(()=>[e(B,{description:"\u5DF2\u7ECF\u4E8E2023/10/09\u4E0B\u8F7D"},{title:t(()=>[c("a",K,I(q.title),1)]),avatar:t(()=>[e(y,{src:"https://joeschmoe.io/api/v1/random"})]),_:2},1024)]),_:2},1024)]),_:2},1032,["data-source"])]),_:2},1024)]),_:2},1024)),64))]),_:1})])}var W=j(M,[["render",O]]);export{W as default};