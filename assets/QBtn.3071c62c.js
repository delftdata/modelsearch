var ye=Object.defineProperty,ke=Object.defineProperties;var pe=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var xe=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable;var H=(e,t,n)=>t in e?ye(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,R=(e,t)=>{for(var n in t||(t={}))xe.call(t,n)&&H(e,n,t[n]);if(D)for(var n of D(t))qe.call(t,n)&&H(e,n,t[n]);return e},L=(e,t)=>ke(e,pe(t));import{a6 as re,O as $e,K as ue,h as v,c as o,g as Q,a7 as Se,f as N,j as Ee,k as Re,F as ie,u as we,p as le,r as U,a as Le,s as _,v as _e,l as Be}from"./index.03f980bd.js";const V=e=>re($e(e)),Ce=e=>re(e);function Pe(e,t){return e!==void 0&&e()||t}function st(e,t){if(e!==void 0){const n=e();if(n!=null)return n.slice()}return t}function M(e,t){return e!==void 0?t.concat(e()):t}function ot(e,t){return e===void 0?t:t!==void 0?t.concat(e()):e()}function ct(e,t,n,i,g,l){t.key=i+g;const s=v(e,t,n);return g===!0?ue(s,l()):s}const I={xs:18,sm:24,md:32,lg:38,xl:46},se={size:String};function oe(e,t=I){return o(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const W="0 0 24 24",X=e=>e,K=e=>`ionicons ${e}`,ce={"mdi-":e=>`mdi ${e}`,"icon-":X,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":K,"ion-ios":K,"ion-logo":K,"iconfont ":X,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},de={o_:"-outlined",r_:"-round",s_:"-sharp"},fe={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},Te=new RegExp("^("+Object.keys(ce).join("|")+")"),je=new RegExp("^("+Object.keys(de).join("|")+")"),Y=new RegExp("^("+Object.keys(fe).join("|")+")"),Oe=/^[Mm]\s?[-+]?\.?\d/,Me=/^img:/,Ae=/^svguse:/,ze=/^ion-/,Ke=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var G=V({name:"QIcon",props:L(R({},se),{tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean}),setup(e,{slots:t}){const{proxy:{$q:n}}=Q(),i=oe(e),g=o(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),l=o(()=>{let s,a=e.name;if(a==="none"||!a)return{none:!0};if(n.iconMapFn!==null){const d=n.iconMapFn(a);if(d!==void 0)if(d.icon!==void 0){if(a=d.icon,a==="none"||!a)return{none:!0}}else return{cls:d.cls,content:d.content!==void 0?d.content:" "}}if(Oe.test(a)===!0){const[d,y=W]=a.split("|");return{svg:!0,viewBox:y,nodes:d.split("&&").map(k=>{const[r,p,b]=k.split("@@");return v("path",{style:p,d:r,transform:b})})}}if(Me.test(a)===!0)return{img:!0,src:a.substring(4)};if(Ae.test(a)===!0){const[d,y=W]=a.split("|");return{svguse:!0,src:d.substring(7),viewBox:y}}let h=" ";const $=a.match(Te);if($!==null)s=ce[$[1]](a);else if(Ke.test(a)===!0)s=a;else if(ze.test(a)===!0)s=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${a.substring(3)}`;else if(Y.test(a)===!0){s="notranslate material-symbols";const d=a.match(Y);d!==null&&(a=a.substring(6),s+=fe[d[1]]),h=a}else{s="notranslate material-icons";const d=a.match(je);d!==null&&(a=a.substring(2),s+=de[d[1]]),h=a}return{cls:s,content:h}});return()=>{const s={class:g.value,style:i.value,"aria-hidden":"true",role:"presentation"};return l.value.none===!0?v(e.tag,s,Pe(t.default)):l.value.img===!0?v("span",s,M(t.default,[v("img",{src:l.value.src})])):l.value.svg===!0?v("span",s,M(t.default,[v("svg",{viewBox:l.value.viewBox||"0 0 24 24"},l.value.nodes)])):l.value.svguse===!0?v("span",s,M(t.default,[v("svg",{viewBox:l.value.viewBox},[v("use",{"xlink:href":l.value.src})])])):(l.value.cls!==void 0&&(s.class+=" "+l.value.cls),v(e.tag,s,M(t.default,[l.value.content])))}}});const Ne={size:{type:[Number,String],default:"1em"},color:String};function Ie(e){return{cSize:o(()=>e.size in I?`${I[e.size]}px`:e.size),classes:o(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var Qe=V({name:"QSpinner",props:L(R({},Ne),{thickness:{type:Number,default:5}}),setup(e){const{cSize:t,classes:n}=Ie(e);return()=>v("svg",{class:n.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[v("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function Ve(e,t){const n=e.style;for(const i in t)n[i]=t[i]}function dt(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=Se(e)===!0?e.value:e;if(t)return t.$el||t}function ft(e,t){if(e==null||e.contains(t)===!0)return!0;for(let n=e.nextElementSibling;n!==null;n=n.nextElementSibling)if(n.contains(t))return!0;return!1}function Fe(e,t=250){let n=!1,i;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},t),i=e.apply(this,arguments)),i}}function J(e,t,n,i){n.modifiers.stop===!0&&ie(e);const g=n.modifiers.color;let l=n.modifiers.center;l=l===!0||i===!0;const s=document.createElement("span"),a=document.createElement("span"),h=we(e),{left:$,top:d,width:y,height:k}=t.getBoundingClientRect(),r=Math.sqrt(y*y+k*k),p=r/2,b=`${(y-r)/2}px`,c=l?b:`${h.left-$-p}px`,f=`${(k-r)/2}px`,x=l?f:`${h.top-d-p}px`;a.className="q-ripple__inner",Ve(a,{height:`${r}px`,width:`${r}px`,transform:`translate3d(${c},${x},0) scale3d(.2,.2,1)`,opacity:0}),s.className=`q-ripple${g?" text-"+g:""}`,s.setAttribute("dir","ltr"),s.appendChild(a),t.appendChild(s);const w=()=>{s.remove(),clearTimeout(S)};n.abort.push(w);let S=setTimeout(()=>{a.classList.add("q-ripple__inner--enter"),a.style.transform=`translate3d(${b},${f},0) scale3d(1,1,1)`,a.style.opacity=.2,S=setTimeout(()=>{a.classList.remove("q-ripple__inner--enter"),a.classList.add("q-ripple__inner--leave"),a.style.opacity=0,S=setTimeout(()=>{s.remove(),n.abort.splice(n.abort.indexOf(w),1)},275)},250)},50)}function Z(e,{modifiers:t,value:n,arg:i,instance:g}){const l=Object.assign({},g.$q.config.ripple,t,n);e.modifiers={early:l.early===!0,stop:l.stop===!0,center:l.center===!0,color:l.color||i,keyCodes:[].concat(l.keyCodes||13)}}var De=Ce({name:"ripple",beforeMount(e,t){const n={enabled:t.value!==!1,modifiers:{},abort:[],start(i){n.enabled===!0&&i.qSkipRipple!==!0&&(n.modifiers.early===!0?["mousedown","touchstart"].includes(i.type)===!0:i.type==="click")&&J(i,e,n,i.qKeyEvent===!0)},keystart:Fe(i=>{n.enabled===!0&&i.qSkipRipple!==!0&&N(i,n.modifiers.keyCodes)===!0&&i.type===`key${n.modifiers.early===!0?"down":"up"}`&&J(i,e,n,!0)},300)};Z(n,t),e.__qripple=n,Ee(n,"main",[[e,"mousedown","start","passive"],[e,"touchstart","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const n=e.__qripple;n.enabled=t.value!==!1,n.enabled===!0&&Object(t.value)===t.value&&Z(n,t)}},beforeUnmount(e){const t=e.__qripple;t.abort.forEach(n=>{n()}),Re(t,"main"),delete e._qripple}});const ve={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},He=Object.keys(ve),Ue={align:{type:String,validator:e=>He.includes(e)}};function We(e){return o(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${ve[t]}`})}function vt(e){if(Object(e.$parent)===e.$parent)return e.$parent;for(e=e.$.parent;Object(e)===e;){if(Object(e.proxy)===e.proxy)return e.proxy;e=e.parent}}function Xe(e){return e.appContext.config.globalProperties.$router!==void 0}function ee(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function te(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ye(e,t){for(const n in t){const i=t[n],g=e[n];if(typeof i=="string"){if(i!==g)return!1}else if(Array.isArray(g)===!1||g.length!==i.length||i.some((l,s)=>l!==g[s]))return!1}return!0}function ne(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((n,i)=>n===t[i]):e.length===1&&e[0]===t}function Ge(e,t){return Array.isArray(e)===!0?ne(e,t):Array.isArray(t)===!0?ne(t,e):e===t}function Je(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(Ge(e[n],t[n])===!1)return!1;return!0}const Ze={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function et(e){const t=Q(),{props:n,proxy:i}=t,g=Xe(t),l=o(()=>n.disable!==!0&&n.href!==void 0),s=o(()=>g===!0&&n.disable!==!0&&l.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),a=o(()=>{if(s.value===!0)try{return i.$router.resolve(n.to)}catch{}return null}),h=o(()=>a.value!==null),$=o(()=>l.value===!0||h.value===!0),d=o(()=>n.type==="a"||$.value===!0?"a":n.tag||e||"div"),y=o(()=>l.value===!0?{href:n.href,target:n.target}:h.value===!0?{href:a.value.href,target:n.target}:{}),k=o(()=>{if(h.value===!1)return null;const{matched:f}=a.value,{length:x}=f,w=f[x-1];if(w===void 0)return-1;const S=i.$route.matched;if(S.length===0)return-1;const T=S.findIndex(te.bind(null,w));if(T>-1)return T;const A=ee(f[x-2]);return x>1&&ee(w)===A&&S[S.length-1].path!==A?S.findIndex(te.bind(null,f[x-2])):T}),r=o(()=>h.value===!0&&k.value>-1&&Ye(i.$route.params,a.value.params)),p=o(()=>r.value===!0&&k.value===i.$route.matched.length-1&&Je(i.$route.params,a.value.params)),b=o(()=>h.value===!0?p.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":r.value===!0?` ${n.activeClass}`:"":"");function c(f){return n.disable===!0||f.metaKey||f.altKey||f.ctrlKey||f.shiftKey||f.__qNavigate!==!0&&f.defaultPrevented===!0||f.button!==void 0&&f.button!==0||n.target==="_blank"?!1:(le(f),i.$router[n.replace===!0?"replace":"push"](n.to).catch(x=>x))}return{hasRouterLink:h,hasHrefLink:l,hasLink:$,linkTag:d,linkRoute:a,linkIsActive:r,linkIsExactActive:p,linkClass:b,linkProps:y,navigateToRouterLink:c}}const ae={none:0,xs:4,sm:8,md:16,lg:24,xl:32},tt={xs:8,sm:10,md:14,lg:20,xl:24},nt=["button","submit","reset"],at=/[^\s]\/[^\s]/,rt=L(R(R({},se),Ze),{type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,round:Boolean,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:L(R({},Ue.align),{default:"center"}),stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean});function ut(e){const t=oe(e,tt),n=We(e),{hasRouterLink:i,hasLink:g,linkTag:l,linkProps:s,navigateToRouterLink:a}=et("button"),h=o(()=>{const c=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},c,{padding:e.padding.split(/\s+/).map(f=>f in ae?ae[f]+"px":f).join(" "),minWidth:"0",minHeight:"0"}):c}),$=o(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),d=o(()=>e.disable!==!0&&e.loading!==!0),y=o(()=>d.value===!0?e.tabindex||0:-1),k=o(()=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":"standard"),r=o(()=>{const c={tabindex:y.value};return g.value===!0?Object.assign(c,s.value):nt.includes(e.type)===!0&&(c.type=e.type),l.value==="a"?(e.disable===!0?c["aria-disabled"]="true":c.href===void 0&&(c.role="button"),i.value!==!0&&at.test(e.type)===!0&&(c.type=e.type)):e.disable===!0&&(c.disabled="",c["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(c,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),c}),p=o(()=>{let c;return e.color!==void 0?e.flat===!0||e.outline===!0?c=`text-${e.textColor||e.color}`:c=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(c=`text-${e.textColor}`),`q-btn--${k.value} q-btn--${e.round===!0?"round":`rectangle${$.value===!0?" q-btn--rounded":""}`}`+(c!==void 0?" "+c:"")+(d.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")}),b=o(()=>n.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:p,style:h,innerClasses:b,attributes:r,hasRouterLink:i,hasLink:g,linkTag:l,navigateToRouterLink:a,isActionable:d}}const{passiveCapture:q}=Be;let B=null,C=null,P=null;var gt=V({name:"QBtn",props:L(R({},rt),{percentage:Number,darkPercentage:Boolean}),emits:["click","keydown","touchstart","mousedown","keyup"],setup(e,{slots:t,emit:n}){const{proxy:i}=Q(),{classes:g,style:l,innerClasses:s,attributes:a,hasRouterLink:h,hasLink:$,linkTag:d,navigateToRouterLink:y,isActionable:k}=ut(e),r=U(null),p=U(null);let b=null,c,f;const x=o(()=>e.label!==void 0&&e.label!==null&&e.label!==""),w=o(()=>e.disable===!0||e.ripple===!1?!1:R({keyCodes:$.value===!0?[13,32]:[13]},e.ripple===!0?{}:e.ripple)),S=o(()=>({center:e.round})),T=o(()=>{const u=Math.max(0,Math.min(100,e.percentage));return u>0?{transition:"transform 0.6s",transform:`translateX(${u-100}%)`}:{}}),A=o(()=>e.loading===!0?{onMousedown:O,onTouchstartPassive:O,onClick:O,onKeydown:O,onKeyup:O}:k.value===!0?{onClick:F,onKeydown:me,onMousedown:be,onTouchstart:he}:{onClick:_}),ge=o(()=>R(R({ref:r,class:"q-btn q-btn-item non-selectable no-outline "+g.value,style:l.value},a.value),A.value));function F(u){if(r.value!==null){if(u!==void 0){if(u.defaultPrevented===!0)return;const m=document.activeElement;if(e.type==="submit"&&m!==document.body&&r.value.contains(m)===!1&&m.contains(r.value)===!1){r.value.focus();const z=()=>{document.removeEventListener("keydown",_,!0),document.removeEventListener("keyup",z,q),r.value!==null&&r.value.removeEventListener("blur",z,q)};document.addEventListener("keydown",_,!0),document.addEventListener("keyup",z,q),r.value.addEventListener("blur",z,q)}}if(h.value===!0){const m=()=>{u.__qNavigate=!0,y(u)};n("click",u,m),u.defaultPrevented!==!0&&m()}else n("click",u)}}function me(u){r.value!==null&&(n("keydown",u),N(u,[13,32])===!0&&C!==r.value&&(C!==null&&j(),u.defaultPrevented!==!0&&(r.value.focus(),C=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("keyup",E,!0),r.value.addEventListener("blur",E,q)),_(u)))}function he(u){r.value!==null&&(n("touchstart",u),u.defaultPrevented!==!0&&(B!==r.value&&(B!==null&&j(),B=r.value,b=u.target,b.addEventListener("touchcancel",E,q),b.addEventListener("touchend",E,q)),c=!0,clearTimeout(f),f=setTimeout(()=>{c=!1},200)))}function be(u){r.value!==null&&(u.qSkipRipple=c===!0,n("mousedown",u),u.defaultPrevented!==!0&&P!==r.value&&(P!==null&&j(),P=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("mouseup",E,q)))}function E(u){if(r.value!==null&&!(u!==void 0&&u.type==="blur"&&document.activeElement===r.value)){if(u!==void 0&&u.type==="keyup"){if(C===r.value&&N(u,[13,32])===!0){const m=new MouseEvent("click",u);m.qKeyEvent=!0,u.defaultPrevented===!0&&le(m),u.cancelBubble===!0&&ie(m),r.value.dispatchEvent(m),_(u),u.qKeyEvent=!0}n("keyup",u)}j()}}function j(u){const m=p.value;u!==!0&&(B===r.value||P===r.value)&&m!==null&&m!==document.activeElement&&(m.setAttribute("tabindex",-1),m.focus()),B===r.value&&(b!==null&&(b.removeEventListener("touchcancel",E,q),b.removeEventListener("touchend",E,q)),B=b=null),P===r.value&&(document.removeEventListener("mouseup",E,q),P=null),C===r.value&&(document.removeEventListener("keyup",E,!0),r.value!==null&&r.value.removeEventListener("blur",E,q),C=null),r.value!==null&&r.value.classList.remove("q-btn--active")}function O(u){_(u),u.qSkipRipple=!0}return Le(()=>{j(!0)}),Object.assign(i,{click:F}),()=>{let u=[];e.icon!==void 0&&u.push(v(G,{name:e.icon,left:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"})),x.value===!0&&u.push(v("span",{class:"block"},[e.label])),u=M(t.default,u),e.iconRight!==void 0&&e.round===!1&&u.push(v(G,{name:e.iconRight,right:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"}));const m=[v("span",{class:"q-focus-helper",ref:p})];return e.loading===!0&&e.percentage!==void 0&&m.push(v("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[v("span",{class:"q-btn__progress-indicator fit block",style:T.value})])),m.push(v("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+s.value},u)),e.loading!==null&&m.push(v(_e,{name:"q-transition--fade"},()=>e.loading===!0?[v("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[v(Qe)])]:null)),ue(v(d.value,ge.value,m),[[De,w.value,void 0,S.value]])}}});export{G as Q,De as R,st as a,oe as b,V as c,ot as d,Ve as e,ct as f,dt as g,Pe as h,vt as i,ft as j,M as k,Ce as l,gt as m,Qe as n,Ze as o,et as p,se as u,Xe as v};
