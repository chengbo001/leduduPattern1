import{a as w,O as D,Q as b,R as O,e,o as s,f as c,h as a,w as t,F as L,E as S,x as C,I as j,j as p,t as l,g as i}from"./index.eb0fc1ca.js";const d=[];for(let n=0;n<23;n++)d.push({href:"https://www.antdv.com/",title:`ant design vue part ${n}`,avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",description:"Ant Design, a design language for background applications, is refined by Ant UED Team.",content:"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."});const z={components:{StarOutlined:D,LikeOutlined:b,MessageOutlined:O},data(){return{listData:d,pagination:{onChange:n=>{console.log(n)},pageSize:3},actions:[{type:"StarOutlined",text:"156"},{type:"LikeOutlined",text:"156"},{type:"MessageOutlined",text:"2"}]}}},A=i("div",null,[i("b",null,"ant design vue"),p(" footer part")],-1),B=i("img",{width:"272",alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"},null,-1),E=["href"];function V(n,q,N,T,r,X){const u=e("page-header"),g=e("a-avatar"),m=e("a-list-item-meta"),f=e("a-list-item"),h=e("a-list"),y=e("a-card"),v=e("page-layout"),x=e("page-footer");return s(),c("div",null,[a(u,{title:"\u56FE\u6587\u5217\u8868",describe:"\u4EE5\u5361\u7247\u7684\u5F62\u5F0F\u5C55\u73B0\u5546\u54C1\u6216\u56FE\u7247\u4FE1\u606F"}),a(v,null,{default:t(()=>[a(y,null,{default:t(()=>[a(h,{"item-layout":"vertical",size:"large",pagination:r.pagination,"data-source":r.listData},{footer:t(()=>[A]),renderItem:t(({item:o})=>[a(f,{key:"item.title"},{actions:t(()=>[(s(!0),c(L,null,S(r.actions,({type:_,text:k})=>(s(),c("span",{key:_},[(s(),C(j(_),{style:{"margin-right":"8px"}})),p(" "+l(k),1)]))),128))]),extra:t(()=>[B]),default:t(()=>[a(m,{description:o.description},{title:t(()=>[i("a",{href:o.href},l(o.title),9,E)]),avatar:t(()=>[a(g,{src:o.avatar},null,8,["src"])]),_:2},1032,["description"]),p(" "+l(o.content),1)]),_:2},1024)]),_:1},8,["pagination","data-source"])]),_:1})]),_:1}),a(x)])}var I=w(z,[["render",V]]);export{I as default};