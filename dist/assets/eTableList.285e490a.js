import{M as f}from"./mock.browser.esm.c440f803.js";import{a as j,e as a,o as m,f as p,h as e,w as t,F as B,E as C,j as l,t as E}from"./index.eb0fc1ca.js";let y=[];const J=f.mock({"a|10":[{"key|+1":1,"serial|+1":1e4,name(){return"ZBSP050"+this.key+"\u5546\u54C1"},"specs|1":"","grade|1":"","amount|1":["\u662F","\u5426"],worker:function(){return"\u5957\u9898"+this.key},time:new Date().toLocaleDateString()}]});y=J.a;const M=f.mock({"data|6":[{"index|+1":1,title(){return"\u76D1\u6D4B\u5C0F\u7EC4"+this.key},"key|+1":1,"children|2":[{title:"@CNAME","key|+1":11,isLeaf:!0}]}]}),O={setup(){return{title:document.title,pagination:{current:1,pageSize:10},fetch:async n=>new Promise(s=>{setTimeout(()=>{s({total:100,data:y})},900)}),toolbar:[{label:"\u65B0\u589E",event:function(n){alert("\u65B0\u589E\u64CD\u4F5C:"+JSON.stringify(n))}},{label:"\u5220\u9664",event:function(n){alert("\u6279\u91CF\u5220\u9664:"+JSON.stringify(n))}},{label:"\u66F4\u591A\u64CD\u4F5C",children:[{label:"\u6279\u91CF\u5BFC\u5165",event(n){alert("\u6279\u91CF\u5BFC\u5165")}},{label:"\u6279\u91CF\u5BFC\u51FA",event(n){alert("\u6279\u91CF\u5BFC\u51FA")}}]}],columns:[{title:"\u7F16\u53F7",dataIndex:"serial",key:"serial"},{title:"\u8FD0\u52A8\u5904\u65B9\u7F16\u53F7",dataIndex:"name",key:"name",slots:{customRender:"name"}},{title:"\u6548\u679C",dataIndex:"specs",key:"specs",slots:{customRender:"specs"}},{title:"\u63CF\u8FF0",dataIndex:"grade",key:"grade",slots:{customRender:"grade"}}],operate:[{label:"\u63D0\u4EA4",event:function(n){alert("\u67E5\u770B\u8BE6\u60C5:"+JSON.stringify(n))}}],treeData:M.data}}},R={id:"table-dome"};function T(i,g,b,o,k,n){const s=a("page-header"),h=a("a-directory-tree"),_=a("a-col"),d=a("a-input"),u=a("a-form-item"),v=a("a-button"),x=a("a-form"),r=a("a-select-option"),w=a("a-select"),D=a("p-table"),S=a("a-card"),N=a("a-row"),I=a("page-layout"),L=a("page-footer");return m(),p("div",R,[e(s,{title:o.title,describe:"\u5BF9\u4E2A\u4F53\u9075\u5FAA\u8FD0\u52A8\u5904\u65B9\u8FDB\u884C\u8BAD\u7EC3\u7684\u6548\u679C\u8FDB\u884C\u8BC4\u4F30\uFF0C\u4EE5\u4FBF\u8C03\u6574\u8FD0\u52A8\u5904\u65B9\uFF0C\u786E\u4FDD\u5176\u59CB\u7EC8\u7B26\u5408\u4E2A\u4F53\u7684\u9700\u6C42\u548C\u8EAB\u4F53\u72B6\u51B5\u3002"},null,8,["title"]),e(I,null,{default:t(()=>[e(N,{gutter:10},{default:t(()=>[e(_,{span:6},{default:t(()=>[e(h,{multiple:"","tree-data":o.treeData,expandedKeys:[1],selectedKeys:[11]},null,8,["tree-data"])]),_:1}),e(_,{span:18},{default:t(()=>[e(S,null,{default:t(()=>[e(x,{layout:"inline"},{default:t(()=>[(m(),p(B,null,C(3,c=>e(u,{key:c,label:o.columns[c].title},{default:t(()=>[e(d)]),_:2},1032,["label"])),64)),e(u,null,{default:t(()=>[e(v,{type:"primary"},{default:t(()=>[l("\u68C0\u7D22")]),_:1})]),_:1})]),_:1}),e(D,{fetch:o.fetch,value:i.obj,columns:o.columns,toolbar:o.toolbar,operate:o.operate,pagination:o.pagination},{name:t(({record:c})=>[l(E(c.name),1)]),specs:t(({})=>[e(w,{style:{width:"100%"},placeholder:"\u53EF\u9009\u62E9"},{default:t(()=>[e(r,{value:"jack"},{default:t(()=>[l("\u6548\u679C\u8F83\u597D")]),_:1}),e(r,{value:"lucy"},{default:t(()=>[l("\u6548\u679C\u4E00\u822C")]),_:1}),e(r,{value:"lucy"},{default:t(()=>[l("\u6548\u679C\u4E0D\u597D")]),_:1}),e(r,{value:"lucy"},{default:t(()=>[l("\u975E\u5E38\u4E0D\u597D")]),_:1})]),_:1})]),grade:t(({})=>[e(d)]),_:1},8,["fetch","value","columns","toolbar","operate","pagination"])]),_:1})]),_:1})]),_:1})]),_:1}),e(L)])}var P=j(O,[["render",T]]);export{P as default};