function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function s(t,n,e,o){if(t){const r=a(t,n,e,o);return t[0](r)}}function a(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function l(t,n,e,o,r,c,i){const u=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,c);if(u){const r=a(n,e,o,i);t.p(r,u)}}let f,d=!1;function h(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function p(t,n){d?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const n=t.childNodes,e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let s=0;s<n.length;s++){const t=h(1,r+1,(t=>n[e[t]].claim_order),n[s].claim_order)-1;o[s]=e[t]+1;const c=t+1;e[c]=s,r=Math.max(c,r)}const c=[],i=[];let u=n.length-1;for(let s=e[r]+1;0!=s;s=o[s-1]){for(c.push(n[s-1]);u>=s;u--)i.push(n[u]);u--}for(;u>=0;u--)i.push(n[u]);c.reverse(),i.sort(((t,n)=>t.claim_order-n.claim_order));for(let s=0,a=0;s<i.length;s++){for(;a<c.length&&i[s].claim_order>=c[a].claim_order;)a++;const n=a<c.length?c[a]:null;t.insertBefore(i[s],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),n!==t.actual_end_child?t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling):n.parentNode!==t&&t.appendChild(n)}function m(t,n,e){d&&!e?p(t,n):(n.parentNode!==t||e&&n.nextSibling!==e)&&t.insertBefore(n,e||null)}function _(t){t.parentNode.removeChild(t)}function g(t){return document.createElement(t)}function $(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function b(t){return document.createTextNode(t)}function y(){return b(" ")}function x(){return b("")}function w(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function v(t){return Array.from(t.childNodes)}function E(t,n,e,o,r=!1){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0});const c=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const c=t[o];if(n(c))return e(c),t.splice(o,1),r||(t.claim_info.last_index=o),c}for(let o=t.claim_info.last_index-1;o>=0;o--){const c=t[o];if(n(c))return e(c),t.splice(o,1),r?t.claim_info.last_index--:t.claim_info.last_index=o,c}return o()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function A(t,n,e,o){return E(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o?$(n):g(n)))}function k(t,n){return E(t,(t=>3===t.nodeType),(t=>{t.data=""+n}),(()=>b(n)),!0)}function N(t){return k(t," ")}function S(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function j(t,n,e){t.classList[e?"add":"remove"](n)}function B(t,n=document.body){return Array.from(n.querySelectorAll(t))}function C(t){f=t}function O(){if(!f)throw new Error("Function called outside component initialization");return f}function q(t){O().$$.on_mount.push(t)}function I(t){O().$$.after_update.push(t)}function M(t,n){O().$$.context.set(t,n)}function T(t){return O().$$.context.get(t)}const z=[],F=[],L=[],D=[],G=Promise.resolve();let H=!1;function J(t){L.push(t)}let K=!1;const P=new Set;function Q(){if(!K){K=!0;do{for(let t=0;t<z.length;t+=1){const n=z[t];C(n),R(n.$$)}for(C(null),z.length=0;F.length;)F.pop()();for(let t=0;t<L.length;t+=1){const n=L[t];P.has(n)||(P.add(n),n())}L.length=0}while(z.length);for(;D.length;)D.pop()();H=!1,K=!1,P.clear()}}function R(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(J)}}const U=new Set;let V;function W(){V={r:0,c:[],p:V}}function X(){V.r||r(V.c),V=V.p}function Y(t,n){t&&t.i&&(U.delete(t),t.i(n))}function Z(t,n,e,o){if(t&&t.o){if(U.has(t))return;U.add(t),V.c.push((()=>{U.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function tt(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const i=t[c],u=n[c];if(u){for(const t in i)t in u||(o[t]=1);for(const t in u)r[t]||(e[t]=u[t],r[t]=1);t[c]=u}else for(const t in i)r[t]=1}for(const i in o)i in e||(e[i]=void 0);return e}function nt(t){return"object"==typeof t&&null!==t?t:{}}function et(t){t&&t.c()}function ot(t,n){t&&t.l(n)}function rt(t,n,o,i){const{fragment:u,on_mount:s,on_destroy:a,after_update:l}=t.$$;u&&u.m(n,o),i||J((()=>{const n=s.map(e).filter(c);a?a.push(...n):r(n),t.$$.on_mount=[]})),l.forEach(J)}function ct(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function it(t,n){-1===t.$$.dirty[0]&&(z.push(t),H||(H=!0,G.then(Q)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function ut(n,e,c,i,u,s,a=[-1]){const l=f;C(n);const h=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:u,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:e.context||[]),callbacks:o(),dirty:a,skip_bound:!1};let p=!1;if(h.ctx=c?c(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return h.ctx&&u(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),p&&it(n,t)),e})):[],h.update(),p=!0,r(h.before_update),h.fragment=!!i&&i(h.ctx),e.target){if(e.hydrate){d=!0;const t=v(e.target);h.fragment&&h.fragment.l(t),t.forEach(_)}else h.fragment&&h.fragment.c();e.intro&&Y(n.$$.fragment),rt(n,e.target,e.anchor,e.customElement),d=!1,Q()}C(l)}class st{$destroy(){ct(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const at=[];function lt(n,e=t){let o;const r=[];function c(t){if(i(n,t)&&(n=t,o)){const t=!at.length;for(let e=0;e<r.length;e+=1){const t=r[e];t[1](),at.push(t,n)}if(t){for(let t=0;t<at.length;t+=2)at[t][0](at[t+1]);at.length=0}}}return{set:c,update:function(t){c(t(n))},subscribe:function(i,u=t){const s=[i,u];return r.push(s),1===r.length&&(o=e(c)||t),i(n),()=>{const t=r.indexOf(s);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}export{n as A,W as B,lt as C,T as D,$ as E,j as F,p as G,t as H,u as I,s as J,l as K,B as L,st as S,v as a,w as b,A as c,_ as d,g as e,m as f,k as g,S as h,ut as i,et as j,y as k,x as l,ot as m,N as n,rt as o,tt as p,nt as q,Z as r,i as s,b as t,X as u,Y as v,ct as w,M as x,I as y,q as z};