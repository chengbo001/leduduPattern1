import{M as f}from"./mock.browser.esm.c440f803.js";import{a as L,e as a,o as m,f as p,h as e,w as t,F as T,E as j,j as l,t as E}from"./index.ce8c6609.js";let y=[];const J=f.mock({"a|10":[{"key|+1":1,"serial|+1":1e4,name(){return"\u8FD0\u52A8\u4F53\u6D4BYDTC048"+this.key},"specs|1":["\u5065\u5EB7","\u975E\u5065\u5EB7"],"grade|1":["\u5065\u5EB7","\u975E\u5065\u5EB7"],"amount|1":["\u5065\u5EB7","\u975E\u5065\u5EB7"],"worker|1":["\u662F","\u5426"],time:new Date().toLocaleDateString()}]});y=J.a;const M=f.mock({"data|6":[{"index|+1":1,title(){return"\u76D1\u6D4B\u5C0F\u7EC4"+this.key},"key|+1":1,"children|2":[{title:"@CNAME","key|+1":11,isLeaf:!0}]}]}),O={setup(){return{title:document.title,pagination:{current:1,pageSize:10},fetch:async n=>new Promise(s=>{setTimeout(()=>{s({total:100,data:y})},900)}),toolbar:[{label:"\u65B0\u589E",event:function(n){alert("\u65B0\u589E\u64CD\u4F5C:"+JSON.stringify(n))}},{label:"\u5220\u9664",event:function(n){alert("\u6279\u91CF\u5220\u9664:"+JSON.stringify(n))}},{label:"\u66F4\u591A\u64CD\u4F5C",children:[{label:"\u6279\u91CF\u5BFC\u5165",event(n){alert("\u6279\u91CF\u5BFC\u5165")}},{label:"\u6279\u91CF\u5BFC\u51FA",event(n){alert("\u6279\u91CF\u5BFC\u51FA")}}]}],columns:[{title:"\u7F16\u53F7",dataIndex:"serial",key:"serial"},{title:"\u4F53\u6D4B\u7F16\u53F7",dataIndex:"name",key:"name",slots:{customRender:"name"}},{title:"\u5FC3\u8840\u7BA1",dataIndex:"specs",key:"specs"},{title:"\u808C\u8089\u529B\u91CF",dataIndex:"grade",key:"grade"},{title:"\u67D4\u97E7 \u5E73\u8861 \u534F\u8C03",dataIndex:"amount",key:"amount"},{title:"\u5B58\u5728\u98CE\u9669",dataIndex:"worker",key:"worker"},{title:"\u65F6\u95F4",dataIndex:"time",key:"time"}],operate:[{label:"\u5206\u4EAB",event:function(n){alert("\u67E5\u770B\u8BE6\u60C5:"+JSON.stringify(n))}}],treeData:M.data}}},B={id:"table-dome"};function F(i,k,b,o,g,n){const s=a("page-header"),h=a("a-directory-tree"),_=a("a-col"),d=a("a-input"),u=a("a-form-item"),v=a("a-button"),x=a("a-form"),r=a("a-select-option"),w=a("a-select"),D=a("p-table"),I=a("a-card"),N=a("a-row"),S=a("page-layout"),C=a("page-footer");return m(),p("div",B,[e(s,{title:o.title,describe:"\u8BB0\u5F55\u4E00\u4E2A\u4EBA\u7684\u5FC3\u8840\u7BA1\u8010\u529B\u3001\u808C\u8089\u529B\u91CF\u3001\u67D4\u97E7\u6027\u3001\u5E73\u8861\u6027\u3001\u534F\u8C03\u6027\u7B49\u65B9\u9762\u7684\u72B6\u51B5\uFF0C\u4EE5\u53CA\u662F\u5426\u5B58\u5728\u8FD0\u52A8\u98CE\u9669\u3002"},null,8,["title"]),e(S,null,{default:t(()=>[e(N,{gutter:10},{default:t(()=>[e(_,{span:6},{default:t(()=>[e(h,{multiple:"","tree-data":o.treeData,expandedKeys:[1],selectedKeys:[11]},null,8,["tree-data"])]),_:1}),e(_,{span:18},{default:t(()=>[e(I,null,{default:t(()=>[e(x,{layout:"inline"},{default:t(()=>[(m(),p(T,null,j(3,c=>e(u,{key:c,label:o.columns[c].title},{default:t(()=>[e(d)]),_:2},1032,["label"])),64)),e(u,null,{default:t(()=>[e(v,{type:"primary"},{default:t(()=>[l("\u68C0\u7D22")]),_:1})]),_:1})]),_:1}),e(D,{fetch:o.fetch,value:i.obj,columns:o.columns,toolbar:o.toolbar,operate:o.operate,pagination:o.pagination},{name:t(({record:c})=>[l(E(c.name),1)]),specs:t(({})=>[e(w,{style:{width:"100%"},placeholder:"\u53EF\u9009\u62E9"},{default:t(()=>[e(r,{value:"jack"},{default:t(()=>[l("\u6548\u679C\u8F83\u597D")]),_:1}),e(r,{value:"lucy"},{default:t(()=>[l("\u6548\u679C\u4E00\u822C")]),_:1}),e(r,{value:"lucy"},{default:t(()=>[l("\u6548\u679C\u4E0D\u597D")]),_:1}),e(r,{value:"lucy"},{default:t(()=>[l("\u975E\u5E38\u4E0D\u597D")]),_:1})]),_:1})]),grade:t(({})=>[e(d)]),_:1},8,["fetch","value","columns","toolbar","operate","pagination"])]),_:1})]),_:1})]),_:1})]),_:1}),e(C)])}var z=L(O,[["render",F]]);export{z as default};