import{s as x,a as M,b as k,u as T,g as q,d as A,r as P,o as z}from"../chunks/scheduler.BpGeUnIB.js";import{S as B,i as H,e as h,s as I,c as _,j as D,g as w,a as E,f as b,b as m,d as L,k as f,m as O,n as F}from"../chunks/index.BRYuX1pY.js";const G=!0,R=Object.freeze(Object.defineProperty({__proto__:null,prerender:G},Symbol.toStringTag,{value:"Module"}));function V(r){const s=function(n){const u=this.getAttribute("href").slice(1),i=document.getElementById(u);if(i)n.preventDefault(),i.scrollIntoView({behavior:"smooth",block:"start"});else{const e="/";window.location.pathname!==e&&(n.preventDefault(),sessionStorage.setItem("scrollTo",u),window.location.href=e)}};return r.addEventListener("click",s),{destroy(){r.removeEventListener("click",s)}}}function J(r){let s,n,u='<a href="/">home</a> <a href="/about">about</a>',i,e,o,$="projects",g,c,S="design",p,d,y,j;const C=r[1].default,a=M(C,r,r[0],null);return{c(){s=h("div"),n=h("div"),n.innerHTML=u,i=I(),e=h("div"),o=h("a"),o.textContent=$,g=I(),c=h("a"),c.textContent=S,p=I(),a&&a.c(),this.h()},l(t){s=_(t,"DIV",{class:!0});var l=D(s);n=_(l,"DIV",{class:!0,"data-svelte-h":!0}),w(n)!=="svelte-an56eq"&&(n.innerHTML=u),i=E(l),e=_(l,"DIV",{class:!0});var v=D(e);o=_(v,"A",{href:!0,"data-svelte-h":!0}),w(o)!=="svelte-1a1aqol"&&(o.textContent=$),g=E(v),c=_(v,"A",{href:!0,"data-svelte-h":!0}),w(c)!=="svelte-1z052nh"&&(c.textContent=S),v.forEach(b),l.forEach(b),p=E(t),a&&a.l(t),this.h()},h(){m(n,"class","top-sidebar"),m(o,"href","#projects"),m(c,"href","#design"),m(e,"class","bottom-sidebar"),m(s,"class","sidebar")},m(t,l){L(t,s,l),f(s,n),f(s,i),f(s,e),f(e,o),f(e,g),f(e,c),L(t,p,l),a&&a.m(t,l),d=!0,y||(j=[k(V.call(null,o)),k(V.call(null,c))],y=!0)},p(t,[l]){a&&a.p&&(!d||l&1)&&T(a,C,t,t[0],d?A(C,t[0],l,null):q(t[0]),null)},i(t){d||(O(a,t),d=!0)},o(t){F(a,t),d=!1},d(t){t&&(b(s),b(p)),a&&a.d(t),y=!1,P(j)}}}function K(r,s,n){let{$$slots:u={},$$scope:i}=s;return z(()=>{const e=window.location.hash;if(e){const o=document.getElementById(e.slice(1));o&&o.scrollIntoView({behavior:"smooth"})}}),r.$$set=e=>{"$$scope"in e&&n(0,i=e.$$scope)},[i,u]}class U extends B{constructor(s){super(),H(this,s,K,J,x,{})}}export{U as component,R as universal};