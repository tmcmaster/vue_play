import{_ as u,s as l,u as d,c as t,a as e,b as o,t as r,F as p,r as m,o as s,d as f,w as k,R as y,e as V,f as g}from"./index-BbQXrEes.js";const h={key:0},x={key:1},b={__name:"PostsView",setup(w){const{posts:n,loading:i,error:c}=l(d()),{fetchPosts:_}=d();return _(),(N,P)=>(s(),t("main",null,[e(i)?(s(),t("p",h,"Loading posts...")):o("",!0),e(c)?(s(),t("p",x,r(e(c).message),1)):o("",!0),e(n)?(s(!0),t(p,{key:2},m(e(n),a=>(s(),t("div",{key:a.id},[f(e(y),{to:`/post/${a.id}`},{default:k(()=>[g(r(a.title),1)]),_:2},1032,["to"]),V("p",null,r(a.body),1)]))),128)):o("",!0)]))}},L=u(b,[["__scopeId","data-v-75ab12ba"]]);export{L as default};
