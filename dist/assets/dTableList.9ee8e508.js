import{M as f}from"./mock.browser.esm.c440f803.js";import{b as D}from"./bin1.b176a898.js";import{a as J,e as t,o as m,f as p,h as e,w as a,F as L,E as B,j as u,t as F,g as i}from"./index.ce8c6609.js";import"./index.6923756b.js";import"./rgb.85527b54.js";import"./each.0594b2ed.js";let O=f.mock({"a|9":[{"key|+1":1,"serial|+1":1e4,"name|+1":function(){return"\u710A\u7F1DHF046"+this.key},"specs|1-5":1,"grade|1-3":1,"amount|4-10":1,"worker|1":["\u4F18","\u826F","\u52A3","\u5DEE"],time:new Date().toLocaleDateString()}]}).a;const T=f.mock({"data|6":[{"index|+1":1,title(){return"\u533A\u57DFQY"+this.key},"key|+1":1,"children|2":[{title(){return"\u5EFA\u7B51JZ028"+this.key},"key|+1":11,isLeaf:!0}]}]}),V={components:{bin1:D},setup(){return{title:document.title,pagination:{current:1,pageSize:10},fetch:async n=>new Promise(r=>{setTimeout(()=>{r({total:100,data:O})},900)}),toolbar:[{label:"\u65B0\u589E",event:function(n){alert("\u65B0\u589E\u64CD\u4F5C:"+JSON.stringify(n))}},{label:"\u5220\u9664",event:function(n){alert("\u6279\u91CF\u5220\u9664:"+JSON.stringify(n))}},{label:"\u66F4\u591A\u64CD\u4F5C",children:[{label:"\u6279\u91CF\u5BFC\u5165",event(n){alert("\u6279\u91CF\u5BFC\u5165")}},{label:"\u6279\u91CF\u5BFC\u51FA",event(n){alert("\u6279\u91CF\u5BFC\u51FA")}}]}],columns:[{title:"\u5E8F\u5217",dataIndex:"serial",key:"serial"},{title:"\u710A\u7F1D\u7F16\u53F7",dataIndex:"name",key:"name",slots:{customRender:"name"}},{title:"\u957F\u5EA6",dataIndex:"specs",key:"specs"},{title:"\u5BBD\u5EA6",dataIndex:"grade",key:"grade"},{title:"\u9762\u79EF",dataIndex:"amount",key:"amount"},{title:"\u8BC4\u4F30",dataIndex:"worker",key:"worker"}],operate:[{label:"\u67E5\u770B",event:function(n){alert("\u67E5\u770B\u8BE6\u60C5:"+JSON.stringify(n))}}],treeData:T.data}}},j={id:"table-dome"},z=i("div",{style:{height:"10px"}},null,-1),C={style:{display:"flex","flex-direction":"column","text-align":"center","justify-content":"center",height:"400px"}},E=i("span",{style:{"line-height":"60px"}},"\u6301\u7EED\u8BC4\u4F30\u4E2D\xB7\xB7\xB7",-1);function M(y,g,h,o,b,n){const r=t("page-header"),c=t("page-layout"),k=t("a-input"),s=t("a-form-item"),x=t("a-button"),v=t("a-form"),w=t("p-table"),_=t("a-card"),d=t("a-col"),S=t("a-spin"),I=t("a-row"),N=t("page-footer");return m(),p("div",j,[e(c,null,{default:a(()=>[e(r,{title:o.title,describe:"\u6D4B\u91CF\u7F3A\u9677\u7684\u53C2\u6570\uFF0C\u5982\u957F\u5EA6\u3001\u5BBD\u5EA6\u3001\u9762\u79EF\u7B49\uFF0C\u5E76\u5BF9\u710A\u7F1D\u8D28\u91CF\u8FDB\u884C\u8BC4\u4F30\u3002"},null,8,["title"])]),_:1}),e(c,null,{default:a(()=>[e(I,{gutter:10},{default:a(()=>[e(d,{span:18},{default:a(()=>[e(_,null,{default:a(()=>[e(v,{layout:"inline"},{default:a(()=>[(m(),p(L,null,B(3,l=>e(s,{key:l,label:o.columns[l].title},{default:a(()=>[e(k)]),_:2},1032,["label"])),64)),e(s,null,{default:a(()=>[e(x,{type:"primary"},{default:a(()=>[u("\u68C0\u7D22")]),_:1})]),_:1})]),_:1}),z,e(w,{fetch:o.fetch,columns:o.columns,toolbar:o.toolbar,operate:o.operate,pagination:o.pagination,rowSelection:{}},{name:a(({record:l})=>[u(F(l.name),1)]),_:1},8,["fetch","columns","toolbar","operate","pagination"])]),_:1})]),_:1}),e(d,{span:6},{default:a(()=>[e(_,null,{default:a(()=>[i("div",C,[e(S,{size:"large"}),E])]),_:1})]),_:1})]),_:1})]),_:1}),e(N)])}var q=J(V,[["render",M]]);export{q as default};