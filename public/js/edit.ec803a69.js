"use strict";(self["webpackChunkgps_leaflet"]=self["webpackChunkgps_leaflet"]||[]).push([[922],{7020:function(e,t,n){n.r(t),n.d(t,{default:function(){return Q}});var l=n(6252),o=n(2262),a=n(9963),r=n(3577),i=n(4642),u=n(6086),s=n(1528),c=n(6673),d=n(7037),p=n(7695),f=n(9665),m=n(875),v=n(1929),g=n(9483),y=n(1316),h=n(9084),b=n(6533),w=n(6719),x=n(8676),k=n(5228),S=n(3099);const W=(0,b.U)({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...(0,v.B)({origin:"center center",scrollStrategy:"block",transition:{component:f.v},zIndex:2400})},"VDialog"),V=(0,w.ev)()({name:"VDialog",props:W(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const a=(0,y.z)(e,"modelValue"),{scopeId:r}=(0,h.a)(),i=(0,o.iH)();function u(e){const t=e.relatedTarget,n=e.target;if(t!==n&&i.value?.contentEl&&i.value?.globalTop&&![document,i.value.contentEl].includes(n)&&!i.value.contentEl.contains(n)){const e=(0,x.ef)(i.value.contentEl);if(!e.length)return;const n=e[0],l=e[e.length-1];t===n?l.focus():n.focus()}}k.BR&&(0,l.YP)((()=>a.value&&e.retainFocus),(e=>{e?document.addEventListener("focusin",u):document.removeEventListener("focusin",u)}),{immediate:!0}),(0,l.YP)(a,(async e=>{await(0,l.Y3)(),e?i.value.contentEl?.focus({preventScroll:!0}):i.value.activatorEl?.focus({preventScroll:!0})}));const s=(0,l.Fl)((()=>(0,l.dG)({"aria-haspopup":"dialog","aria-expanded":String(a.value)},e.activatorProps)));return(0,S.L)((()=>{const[t]=v.y.filterProps(e);return(0,l.Wm)(v.y,(0,l.dG)({ref:i,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},t,{modelValue:a.value,"onUpdate:modelValue":e=>a.value=e,"aria-modal":"true",activatorProps:s.value,role:"dialog"},r),{activator:n.activator,default:function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return(0,l.Wm)(m.z,{root:"VDialog"},{default:()=>[n.default?.(...t)]})}})})),(0,g.F)({},i)}});var N=n(7742),F=n(9357),_=n(4007),P=n(9003),A=n(1669),R=n(3379),U=n(7737),C=n(7230),T=n(6393),j=(n(348),n(7467)),M=n(2736),D=n(24),H=n(2246),B=n(9137);const O=(0,b.U)({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...(0,D.c)(),...(0,M.hy)()},"VTextarea"),E=(0,w.ev)()({name:"VTextarea",directives:{Intersect:B.Z},inheritAttrs:!1,props:O(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:n,emit:r,slots:i}=t;const u=(0,y.z)(e,"modelValue"),{isFocused:s,focus:c,blur:d}=(0,H.K)(e),p=(0,l.Fl)((()=>"function"===typeof e.counterValue?e.counterValue(u.value):(u.value||"").toString().length)),f=(0,l.Fl)((()=>n.maxlength?n.maxlength:!e.counter||"number"!==typeof e.counter&&"string"!==typeof e.counter?void 0:e.counter));function m(t,n){e.autofocus&&t&&n[0].target?.focus?.()}const v=(0,o.iH)(),h=(0,o.iH)(),b=(0,o.XI)(""),w=(0,o.iH)(),k=(0,l.Fl)((()=>e.persistentPlaceholder||s.value||e.active));function W(){w.value!==document.activeElement&&w.value?.focus(),s.value||c()}function V(e){W(),r("click:control",e)}function N(e){r("mousedown:control",e)}function F(t){t.stopPropagation(),W(),(0,l.Y3)((()=>{u.value="",(0,x.dr)(e["onClick:clear"],t)}))}function _(t){const n=t.target;if(u.value=n.value,e.modelModifiers?.trim){const e=[n.selectionStart,n.selectionEnd];(0,l.Y3)((()=>{n.selectionStart=e[0],n.selectionEnd=e[1]}))}}const P=(0,o.iH)(),A=(0,o.iH)(+e.rows),R=(0,l.Fl)((()=>["plain","underlined"].includes(e.variant)));function U(){e.autoGrow&&(0,l.Y3)((()=>{if(!P.value||!h.value)return;const t=getComputedStyle(P.value),n=getComputedStyle(h.value.$el),l=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),o=P.value.scrollHeight,a=parseFloat(t.lineHeight),r=Math.max(parseFloat(e.rows)*a+l,parseFloat(n.getPropertyValue("--v-input-control-height"))),i=parseFloat(e.maxRows)*a+l||1/0,u=(0,x.uZ)(o??0,r,i);A.value=Math.floor((u-l)/a),b.value=(0,x.kb)(u)}))}let C;return(0,l.m0)((()=>{e.autoGrow||(A.value=+e.rows)})),(0,l.bv)(U),(0,l.YP)(u,U),(0,l.YP)((()=>e.rows),U),(0,l.YP)((()=>e.maxRows),U),(0,l.YP)((()=>e.density),U),(0,l.YP)(P,(e=>{e?(C=new ResizeObserver(U),C.observe(P.value)):C?.disconnect()})),(0,l.Jd)((()=>{C?.disconnect()})),(0,S.L)((()=>{const t=!!(i.counter||e.counter||e.counterValue),o=!(!t&&!i.details),[r,c]=(0,x.An)(n),[{modelValue:g,...y}]=D.q.filterProps(e),[S]=(0,M.g8)(e);return(0,l.Wm)(D.q,(0,l.dG)({ref:v,modelValue:u.value,"onUpdate:modelValue":e=>u.value=e,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--plain-underlined":R.value},e.class],style:e.style},r,y,{centerAffix:1===A.value&&!R.value,focused:s.value}),{...i,default:t=>{let{isDisabled:n,isDirty:o,isReadonly:r,isValid:p}=t;return(0,l.Wm)(M.hF,(0,l.dG)({ref:h,style:{"--v-textarea-control-height":b.value},onClick:V,onMousedown:N,"onClick:clear":F,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},S,{active:k.value||o.value,centerAffix:1===A.value&&!R.value,dirty:o.value||e.dirty,disabled:n.value,focused:s.value,error:!1===p.value}),{...i,default:t=>{let{props:{class:o,...i}}=t;return(0,l.Wm)(l.HY,null,[e.prefix&&(0,l.Wm)("span",{class:"v-text-field__prefix"},[e.prefix]),(0,l.wy)((0,l.Wm)("textarea",(0,l.dG)({ref:w,class:o,value:u.value,onInput:_,autofocus:e.autofocus,readonly:r.value,disabled:n.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:W,onBlur:d},i,c),null),[[(0,l.Q2)("intersect"),{handler:m},null,{once:!0}]]),e.autoGrow&&(0,l.wy)((0,l.Wm)("textarea",{class:[o,"v-textarea__sizer"],id:`${i.id}-sizer`,"onUpdate:modelValue":e=>u.value=e,ref:P,readonly:!0,"aria-hidden":"true"},null),[[a.nr,u.value]]),e.suffix&&(0,l.Wm)("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:o?n=>(0,l.Wm)(l.HY,null,[i.details?.(n),t&&(0,l.Wm)(l.HY,null,[(0,l.Wm)("span",null,null),(0,l.Wm)(j._,{active:e.persistentCounter||s.value,value:p.value,max:f.value},i.counter)])]):void 0})})),(0,g.F)({},v,h,w)}}),G=e=>((0,l.dD)("data-v-3fe71eca"),e=e(),(0,l.Cn)(),e),L=G((()=>(0,l._)("br",null,null,-1))),I=G((()=>(0,l._)("div",{class:"text-h4"},"Add a new Route",-1))),z={class:"tableBtn"};var Y={__name:"EditRoutesTable",setup(e){let t=(0,o.iH)(""),f=(0,o.qj)([{align:"start",key:"name",title:"Routes"},{key:"edit",title:"Edit",sortable:!1},{key:"del",title:"Delete",sortable:!1}]);const m=(0,i.k)(),{getRoutes:v}=(0,u.Jk)(m);let g=(0,l.Fl)((()=>m.getRoutes)),y=async e=>{m.deleteRoute(e)},h=(0,o.iH)(""),b=(0,o.iH)(),w=(0,o.iH)(""),x=(0,o.iH)(""),k=(0,o.iH)(""),S=(0,o.iH)(),W=(0,o.iH)(),j=(0,o.iH)(),M=(0,o.iH)(),D=(0,o.iH)(),H=(0,o.iH)(),B=async e=>{let t={id:e.id,name:e.name,difficulty:e.difficulty,terrain:e.terrain,desc:e.desc,poi:e.poi};m.updateRoute(t)},O=async e=>{const t=(await e).valid;if(t)try{await G();let e={route:j.value,name:h.value,gpx:W.value,difficulty:x.value,length:b.value,terrain:w.value,desc:k.value,elevation:M.value,poi:D.value};m.addRoute(e)}catch(n){console.log("error",n)}},G=()=>new Promise(((e,t)=>{try{if(S){const t=new FileReader;t.onload=async()=>{const t=n(1111),l=S.value.files[0],o=new Blob([l],{type:"text/plain"}),a=await o.text();W.value=btoa(a);const r=(new DOMParser).parseFromString(a,"text/xml"),i=t.gpx(r);j.value=i;const u=i.features[0].geometry.coordinates;let s=Math.ceil(u.length/512),c={locations:[]},d=0;for(let e=0;e<u.length;e+=s)c.locations[d]={latitude:u[e][1],longitude:u[e][0]},d++;let p=await fetch("https://api.open-elevation.com/api/v1/lookup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});p=await p.json(),c=p.results;let f=0,m=0;for(let e=1;e<c.length;e++)m=c[e].elevation-c[e-1].elevation,m>0&&(f+=m);f=Math.round(3.28084*f*10)/10,M.value=f;let v=0,g=0,y=0,h=0,w=0;for(let e=0;e<u.length-1;e++){const t=e=>e*Math.PI/180;g=t(u[e][1]),y=t(u[e][0]),h=t(u[e+1][1]),w=t(u[e+1][0]);const n=h-g,l=w-y,o=Math.sin(n/2)**2+Math.cos(g)*Math.cos(h)*Math.sin(l/2)**2,a=2*Math.atan2(Math.sqrt(o),Math.sqrt(1-o)),r=6371e3,i=r*a;v+=i}b.value=Math.round(v/1e3*.621371*10)/10;let x=t=>{e(t)};x()},t.readAsText(S.value.files[0])}}catch(l){t(l)}}));return(e,n)=>{const i=(0,l.up)("router-link");return(0,l.wg)(),(0,l.j4)(d._,null,{default:(0,l.w5)((()=>[(0,l.Wm)(p.E,null,{default:(0,l.w5)((()=>[(0,l.Wm)(_.C),(0,l.Wm)(T.h,{modelValue:(0,o.SU)(t),"onUpdate:modelValue":n[0]||(n[0]=e=>(0,o.dq)(t)?t.value=e:t=e),"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},null,8,["modelValue"])])),_:1}),L,(0,l.Wm)(P.o,{justify:"center"},{default:(0,l.w5)((()=>[(0,l.Wm)(V,null,{activator:(0,l.w5)((({props:e})=>[(0,l.Wm)(c.T,(0,l.dG)({flat:""},e),{default:(0,l.w5)((()=>[(0,l.Wm)(U.t,{icon:"mdi-plus"}),(0,l.Uk)("Add a new route")])),_:2},1040)])),default:(0,l.w5)((({isActive:t})=>[(0,l.Wm)(d._,{style:{color:"blue"}},{default:(0,l.w5)((()=>[(0,l.Wm)(A.K,null,{default:(0,l.w5)((()=>[(0,l.Wm)(P.o,{justify:"center"},{default:(0,l.w5)((()=>[I])),_:1})])),_:1}),(0,l.Wm)(F.O,{class:"routeForm","validate-on":"submit lazy",onSubmit:(0,a.iM)((0,o.SU)(O),["prevent"]),ref:"form"},{default:(0,l.w5)((()=>[(0,l.Wm)(P.o,{justify:"center"},{default:(0,l.w5)((()=>[(0,l.Wm)(R.D,{cols:"9"},{default:(0,l.w5)((()=>[(0,l.Wm)(T.h,{label:"Route Name","prepend-icon":"mdi-bike",class:"routeName",type:"text",variant:"outlined",name:"routeName",modelValue:(0,o.SU)(h),"onUpdate:modelValue":n[1]||(n[1]=e=>(0,o.dq)(h)?h.value=e:h=e),rules:e.inputRules,required:""},null,8,["modelValue","rules"])])),_:1})])),_:1}),(0,l.Wm)(P.o,{justify:"center"},{default:(0,l.w5)((()=>[(0,l.Wm)(R.D,{cols:"9"},{default:(0,l.w5)((()=>[(0,l.Wm)(C.rL,{label:"Select Terrain:","prepend-icon":"mdi-road",modelValue:(0,o.SU)(w),"onUpdate:modelValue":n[2]||(n[2]=e=>(0,o.dq)(w)?w.value=e:w=e),items:["Paved","Gravel","Dirt"],rules:e.inputRules},null,8,["modelValue","rules"])])),_:1})])),_:1}),(0,l.Wm)(P.o,{justify:"center"},{default:(0,l.w5)((()=>[(0,l.Wm)(R.D,{cols:"9"},{default:(0,l.w5)((()=>[(0,l.Wm)(C.rL,{label:"Select Difficulty: ","prepend-icon":"mdi-alert",modelValue:(0,o.SU)(x),"onUpdate:modelValue":n[3]||(n[3]=e=>(0,o.dq)(x)?x.value=e:x=e),items:["Beginner","Intermediate","Expert"],rules:e.inputRules},null,8,["modelValue","rules"])])),_:1})])),_:1}),(0,l.Wm)(P.o,{justify:"center"},{default:(0,l.w5)((()=>[(0,l.Wm)(R.D,{cols:"9"},{default:(0,l.w5)((()=>[(0,l.Wm)(E,{label:"Route Description","prepend-icon":"mdi-pencil",class:"routeDesc",type:"text",variant:"outlined",name:"routeDesc",modelValue:(0,o.SU)(k),"onUpdate:modelValue":n[4]||(n[4]=e=>(0,o.dq)(k)?k.value=e:k=e),rules:e.inputRules,required:""},null,8,["modelValue","rules"])])),_:1})])),_:1}),(0,l.Wm)(P.o,{justify:"center"},{default:(0,l.w5)((()=>[(0,l.Wm)(R.D,{cols:"9"},{default:(0,l.w5)((()=>[(0,l.Wm)(E,{label:"Points of Interest","prepend-icon":"fa:fas fa-search",class:"routeDesc",type:"text",variant:"outlined",name:"poi",modelValue:(0,o.SU)(D),"onUpdate:modelValue":n[5]||(n[5]=e=>(0,o.dq)(D)?D.value=e:D=e),rules:e.inputRules},null,8,["modelValue","rules"])])),_:1})])),_:1}),(0,l.Wm)(P.o,{justify:"center"},{default:(0,l.w5)((()=>[(0,l.Wm)(R.D,{cols:"9"},{default:(0,l.w5)((()=>[(0,l.Wm)(N.Z,{label:"Upload .gpx File",variant:"outlined",accept:".gpx",type:"file",ref_key:"file",ref:S,rules:e.inputRules,"prepend-icon":"mdi-map",required:""},null,8,["rules"])])),_:1})])),_:1}),(0,l.Wm)(P.o,{justify:"center"},{default:(0,l.w5)((()=>[(0,l.Wm)(c.T,{width:"200%",type:"submit",onClick:e=>t.value=!1,flat:""},{default:(0,l.w5)((()=>[(0,l.Uk)("submit")])),_:2},1032,["onClick"])])),_:2},1024),(0,l.Wm)(P.o,null,{default:(0,l.w5)((()=>[(0,l.Wm)(_.C)])),_:1})])),_:2},1032,["onSubmit"])])),_:2},1024)])),_:1}),(0,l.Wm)(V,{width:"500"},{activator:(0,l.w5)((({props:e})=>[])),default:(0,l.w5)((({isActive:e})=>[(0,l.Wm)(d._,{title:"Add Route"})])),_:1})])),_:1}),(0,l.Wm)((0,o.SU)(s.y_),{class:"routes-table",headers:(0,o.SU)(f),items:(0,o.SU)(g),search:(0,o.SU)(t)},{"item.name":(0,l.w5)((({item:e})=>[(0,l.Wm)(i,{to:"/route/"+e.id},{default:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(e.name),1)])),_:2},1032,["to"])])),"item.edit":(0,l.w5)((({item:t})=>[(0,l.Wm)(V,null,{activator:(0,l.w5)((({props:e})=>[(0,l.Wm)(c.T,(0,l.dG)({class:"tableBtn"},e,{icon:"mdi-pencil"}),null,16)])),default:(0,l.w5)((({isActive:n})=>[(0,l.Wm)(d._,{title:"Edit Route"},{default:(0,l.w5)((()=>[(0,l.Wm)(F.O,{class:"routeForm","validate-on":"submit lazy",onSubmit:(0,a.iM)((e=>(0,o.SU)(B)(t)),["prevent"]),ref_key:"editForm",ref:H},{default:(0,l.w5)((()=>[(0,l.Wm)(P.o,{justify:"center"},{default:(0,l.w5)((()=>[(0,l.Wm)(R.D,{cols:"9"},{default:(0,l.w5)((()=>[(0,l.Wm)(T.h,{"prepend-icon":"mdi-map-marker",modelValue:t.name,"onUpdate:modelValue":e=>t.name=e,clearable:"","hide-details":"auto",label:"Route Name"},null,8,["modelValue","onUpdate:modelValue"]),(0,l.Wm)(C.rL,{label:"Terrain","prepend-icon":"mdi-road",modelValue:t.terrain,"onUpdate:modelValue":e=>t.terrain=e,items:["Paved","Gravel","Dirt"],rules:e.inputRules},null,8,["modelValue","onUpdate:modelValue","rules"]),(0,l.Wm)(C.rL,{label:"Select Difficulty: ","prepend-icon":"mdi-alert",modelValue:t.difficulty,"onUpdate:modelValue":e=>t.difficulty=e,items:["Beginner","Intermediate","Expert"],rules:e.inputRules},null,8,["modelValue","onUpdate:modelValue","rules"]),(0,l.Wm)(E,{label:"Route Description","prepend-icon":"mdi-pencil",class:"routeDesc",type:"text",variant:"outlined",name:"routeDesc",modelValue:t.desc,"onUpdate:modelValue":e=>t.desc=e,rules:e.inputRules,required:""},null,8,["modelValue","onUpdate:modelValue","rules"]),(0,l.Wm)(E,{label:"Route POI",class:"routePOI",type:"text",variant:"outlined",name:"routeDesc",modelValue:t.poi,"onUpdate:modelValue":e=>t.poi=e,rules:e.inputRules,"prepend-icon":"fa:fas fa-search",required:""},null,8,["modelValue","onUpdate:modelValue","rules"]),(0,l.Wm)(P.o,{justify:"center"},{default:(0,l.w5)((()=>[(0,l.Wm)(c.T,{width:"200%",type:"submit",onClick:e=>n.value=!1,flat:""},{default:(0,l.w5)((()=>[(0,l.Uk)("submit")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onSubmit"])])),_:2},1024)])),_:2},1024)])),"item.del":(0,l.w5)((({item:e})=>[(0,l._)("div",z,[(0,l.Wm)(c.T,{icon:"mdi-trash-can",onClick:t=>(0,o.SU)(y)(e.id)},null,8,["onClick"])])])),_:1},8,["headers","items","search"])])),_:1})}}},q=n(3744);const $=(0,q.Z)(Y,[["__scopeId","data-v-3fe71eca"]]);var Z=$,J=n(2201),K={__name:"EditRouteView",setup(e){const t=(0,J.tv)();let n=async()=>{let e=await fetch("http://localhost:3000/v1/auth/logout",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({})});e=await e.json(),1==e.success?t.push("/"):alert("Logout failed")};return(e,t)=>((0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(P.o,{justify:"center"},{default:(0,l.w5)((()=>[(0,l.Wm)(c.T,{onClick:(0,o.SU)(n),flat:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Logout")])),_:1},8,["onClick"])])),_:1}),(0,l.Wm)(P.o,{justify:"center"},{default:(0,l.w5)((()=>[(0,l.Wm)(R.D,{cols:"6"},{default:(0,l.w5)((()=>[(0,l.Wm)(Z)])),_:1})])),_:1})],64))}};const X=K;var Q=X},1111:function(e,t){function n(e,t){return Array.from(e.getElementsByTagName(t))}function l(e){return"#"===e[0]?e:`#${e}`}function o(e,t,n){return Array.from(e.getElementsByTagNameNS(n,t))}function a(e){return e?.normalize(),e&&e.textContent||""}function r(e,t,n){const l=e.getElementsByTagName(t),o=l.length?l[0]:null;return o&&n&&n(o),o}function i(e,t,n){const l={};if(!e)return l;const o=e.getElementsByTagName(t),a=o.length?o[0]:null;return a&&n?n(a,l):l}function u(e,t,n){const l=a(r(e,t));return l&&n&&n(l)||{}}function s(e,t,n){const l=parseFloat(a(r(e,t)));if(!isNaN(l))return l&&n&&n(l)||{}}function c(e,t,n){const l=parseFloat(a(r(e,t)));if(!isNaN(l))return n&&n(l),l}function d(e,t){const n={};for(const l of t)u(e,l,(e=>{n[l]=e}));return n}function p(e){return 1===e?.nodeType}function f(e){return i(e,"line",(e=>{const t=Object.assign({},u(e,"color",(e=>({stroke:`#${e}`}))),s(e,"opacity",(e=>({"stroke-opacity":e}))),s(e,"width",(e=>({"stroke-width":96*e/25.4}))));return t}))}function m(e){let t=[];if(null===e)return t;for(const n of Array.from(e.childNodes)){if(!p(n))continue;const e=v(n.nodeName);if("gpxtpx:TrackPointExtension"===e)t=t.concat(m(n));else{const l=a(n);t.push([e,g(l)])}}return t}function v(e){return["heart","gpxtpx:hr","hr"].includes(e)?"heart":e}function g(e){const t=parseFloat(e);return isNaN(t)?e:t}function y(e){const t=[parseFloat(e.getAttribute("lon")||""),parseFloat(e.getAttribute("lat")||"")];if(isNaN(t[0])||isNaN(t[1]))return null;c(e,"ele",(e=>{t.push(e)}));const n=r(e,"time");return{coordinates:t,time:n?a(n):null,extendedValues:m(r(e,"extensions"))}}function h(e){const t=d(e,["name","cmt","desc","type","time","keywords"]),l=Array.from(e.getElementsByTagNameNS("http://www.garmin.com/xmlschemas/GpxExtensions/v3","*"));for(const n of l)n.parentNode?.parentNode===e&&(t[n.tagName.replace(":","_")]=a(n));const o=n(e,"link");return o.length&&(t.links=o.map((e=>Object.assign({href:e.getAttribute("href")},d(e,["text","type"]))))),t}function b(e,t){const l=n(e,t),o=[],a=[],r={};for(let n=0;n<l.length;n++){const e=y(l[n]);if(e){o.push(e.coordinates),e.time&&a.push(e.time);for(const[t,o]of e.extendedValues){const e="heart"===t?t:t.replace("gpxtpx:","")+"s";r[e]||(r[e]=Array(l.length).fill(null)),r[e][n]=o}}}if(!(o.length<2))return{line:o,times:a,extendedValues:r}}function w(e){const t=b(e,"rtept");if(t)return{type:"Feature",properties:Object.assign({_gpxType:"rte"},h(e),f(r(e,"extensions"))),geometry:{type:"LineString",coordinates:t.line}}}function x(e){const t=n(e,"trkseg"),l=[],o=[],a=[];for(const n of t){const e=b(n,"trkpt");e&&(a.push(e),e.times&&e.times.length&&o.push(e.times))}if(0===a.length)return null;const i=a.length>1,u=Object.assign({_gpxType:"trk"},h(e),f(r(e,"extensions")),o.length?{coordinateProperties:{times:i?o:o[0]}}:{});for(const n of a){l.push(n.line),u.coordinateProperties||(u.coordinateProperties={});const e=u.coordinateProperties,t=Object.entries(n.extendedValues);for(let n=0;n<t.length;n++){const[l,o]=t[n];i?(e[l]||(e[l]=a.map((e=>new Array(e.line.length).fill(null)))),e[l][n]=o):e[l]=o}}return{type:"Feature",properties:u,geometry:i?{type:"MultiLineString",coordinates:l}:{type:"LineString",coordinates:l[0]}}}function k(e){const t=Object.assign(h(e),d(e,["sym"])),n=y(e);return n?{type:"Feature",properties:t,geometry:{type:"Point",coordinates:n.coordinates}}:null}function*S(e){for(const t of n(e,"trk")){const e=x(t);e&&(yield e)}for(const t of n(e,"rte")){const e=w(t);e&&(yield e)}for(const t of n(e,"wpt")){const e=k(t);e&&(yield e)}}function W(e){return{type:"FeatureCollection",features:Array.from(S(e))}}Object.defineProperty(t,"__esModule",{value:!0});const V="http://www.garmin.com/xmlschemas/ActivityExtension/v2",N=[["heartRate","heartRates"],["Cadence","cadences"],["Speed","speeds"],["Watts","watts"]],F=[["TotalTimeSeconds","totalTimeSeconds"],["DistanceMeters","distanceMeters"],["MaximumSpeed","maxSpeed"],["AverageHeartRateBpm","avgHeartRate"],["MaximumHeartRateBpm","maxHeartRate"],["AvgSpeed","avgSpeed"],["AvgWatts","avgWatts"],["MaxWatts","maxWatts"]];function _(e,t){const n=[];for(const[l,o]of t){let t=r(e,l);if(!t){const n=e.getElementsByTagNameNS(V,l);n.length&&(t=n[0])}const i=parseFloat(a(t));isNaN(i)||n.push([o,i])}return n}function P(e){const t=[c(e,"LongitudeDegrees"),c(e,"LatitudeDegrees")];if(void 0===t[0]||isNaN(t[0])||void 0===t[1]||isNaN(t[1]))return null;const n=r(e,"HeartRateBpm"),l=a(r(e,"Time"));return r(e,"AltitudeMeters",(e=>{const n=parseFloat(a(e));isNaN(n)||t.push(n)})),{coordinates:t,time:l||null,heartRate:n?parseFloat(a(n)):null,extensions:_(e,N)}}function A(e){const t=n(e,"Trackpoint"),l=[],o=[],a=[];if(t.length<2)return null;const r={},i={extendedProperties:r};for(let n=0;n<t.length;n++){const e=P(t[n]);if(null===e)continue;l.push(e.coordinates);const{time:i,heartRate:u,extensions:s}=e;i&&o.push(i),u&&a.push(u);for(const[l,o]of s)r[l]||(r[l]=Array(t.length).fill(null)),r[l][n]=o}return l.length<2?null:Object.assign(i,{line:l,times:o,heartRates:a})}function R(e){const t=n(e,"Track"),l=[],o=[],r=[],u=[];let s;const c=Object.assign(Object.fromEntries(_(e,F)),i(e,"Name",(e=>({name:a(e)}))));for(const n of t)s=A(n),s&&(l.push(s.line),s.times.length&&o.push(s.times),s.heartRates.length&&r.push(s.heartRates),u.push(s.extendedProperties));for(let n=0;n<u.length;n++){const e=u[n];for(const o in e)1===t.length?s&&(c[o]=s.extendedProperties[o]):(c[o]||(c[o]=l.map((e=>Array(e.length).fill(null)))),c[o][n]=e[o])}return 0===l.length?null:((o.length||r.length)&&(c.coordinateProperties=Object.assign(o.length?{times:1===l.length?o[0]:o}:{},r.length?{heart:1===l.length?r[0]:r}:{})),{type:"Feature",properties:c,geometry:1===l.length?{type:"LineString",coordinates:l[0]}:{type:"MultiLineString",coordinates:l}})}function*U(e){for(const t of n(e,"Lap")){const e=R(t);e&&(yield e)}for(const t of n(e,"Courses")){const e=R(t);e&&(yield e)}}function C(e){return{type:"FeatureCollection",features:Array.from(U(e))}}function T(e,t){const n={},l="stroke"==t||"fill"===t?t:t+"-color";return"#"===e[0]&&(e=e.substring(1)),6===e.length||3===e.length?n[l]="#"+e:8===e.length&&(n[t+"-opacity"]=parseInt(e.substring(0,2),16)/255,n[l]="#"+e.substring(6,8)+e.substring(4,6)+e.substring(2,4)),n}function j(e,t,n){const l={};return c(e,t,(e=>{l[n]=e})),l}function M(e,t){return i(e,"color",(e=>T(a(e),t)))}function D(e){return i(e,"Icon",((e,t)=>(u(e,"href",(e=>{t.icon=e})),t)))}function H(e){return i(e,"IconStyle",(e=>Object.assign(M(e,"icon"),j(e,"scale","icon-scale"),j(e,"heading","icon-heading"),i(e,"hotSpot",(e=>{const t=parseFloat(e.getAttribute("x")||""),n=parseFloat(e.getAttribute("y")||""),l=e.getAttribute("xunits")||"",o=e.getAttribute("yunits")||"";return isNaN(t)||isNaN(n)?{}:{"icon-offset":[t,n],"icon-offset-units":[l,o]}})),D(e))))}function B(e){return i(e,"LabelStyle",(e=>Object.assign(M(e,"label"),j(e,"scale","label-scale"))))}function O(e){return i(e,"LineStyle",(e=>Object.assign(M(e,"stroke"),j(e,"width","stroke-width"))))}function E(e){return i(e,"PolyStyle",((e,t)=>Object.assign(t,i(e,"color",(e=>T(a(e),"fill"))),u(e,"fill",(e=>{if("0"===e)return{"fill-opacity":0}})),u(e,"outline",(e=>{if("0"===e)return{"stroke-opacity":0}})))))}function G(e){return Object.assign({},E(e),O(e),B(e),H(e))}const L=e=>Number(e),I={string:e=>e,int:L,uint:L,short:L,ushort:L,float:L,double:L,bool:e=>Boolean(e)};function z(e,t){return i(e,"ExtendedData",((e,l)=>{for(const t of n(e,"Data"))l[t.getAttribute("name")||""]=a(r(t,"value"));for(const o of n(e,"SimpleData")){const e=o.getAttribute("name")||"",n=t[e]||I.string;l[e]=n(a(o))}return l}))}function Y(e){const t=r(e,"description");for(const n of Array.from(t?.childNodes||[]))if(4===n.nodeType)return{description:{"@type":"html",value:a(n)}};return{}}function q(e){return i(e,"TimeSpan",(e=>({timespan:{begin:a(r(e,"begin")),end:a(r(e,"end"))}})))}function $(e){return i(e,"TimeStamp",(e=>({timestamp:a(r(e,"when"))})))}function Z(e,t){return u(e,"styleUrl",(e=>(e=l(e),t[e]?Object.assign({styleUrl:e},t[e]):{styleUrl:e})))}const J=/\s*/g,K=/^\s*|\s*$/g,X=/\s+/;function Q(e){return e.replace(J,"").split(",").map(parseFloat).filter((e=>!isNaN(e))).slice(0,3)}function ee(e){return e.replace(K,"").split(X).map(Q).filter((e=>e.length>=2))}function te(e){let t=n(e,"coord");0===t.length&&(t=o(e,"coord","*"));const l=t.map((e=>a(e).split(" ").map(parseFloat)));return 0===l.length?null:{geometry:l.length>2?{type:"LineString",coordinates:l}:{type:"Point",coordinates:l[0]},times:n(e,"when").map((e=>a(e)))}}function ne(e){if(0===e.length)return e;const t=e[0],n=e[e.length-1];let l=!0;for(let o=0;o<Math.max(t.length,n.length);o++)if(t[o]!==n[o]){l=!1;break}return l?e:e.concat([e[0]])}function le(e){return a(r(e,"coordinates"))}function oe(e){let t=[],l=[];for(let o=0;o<e.childNodes.length;o++){const a=e.childNodes.item(o);if(p(a))switch(a.tagName){case"MultiGeometry":case"MultiTrack":case"gx:MultiTrack":{const e=oe(a);t=t.concat(e.geometries),l=l.concat(e.coordTimes);break}case"Point":{const e=Q(le(a));e.length>=2&&t.push({type:"Point",coordinates:e});break}case"LinearRing":case"LineString":{const e=ee(le(a));e.length>=2&&t.push({type:"LineString",coordinates:e});break}case"Polygon":{const e=[];for(const t of n(a,"LinearRing")){const n=ne(ee(le(t)));n.length>=4&&e.push(n)}e.length&&t.push({type:"Polygon",coordinates:e});break}case"Track":case"gx:Track":{const e=te(a);if(!e)break;const{times:n,geometry:o}=e;t.push(o),n.length&&l.push(n);break}}}return{geometries:t,coordTimes:l}}function ae(e){return 0===e.length?null:1===e.length?e[0]:{type:"GeometryCollection",geometries:e}}function re(e,t,n,l){const{coordTimes:o,geometries:a}=oe(e),r=ae(a);if(!r&&l.skipNullGeometry)return null;const i={type:"Feature",geometry:r,properties:Object.assign(d(e,["name","address","visibility","open","phoneNumber","description"]),Y(e),Z(e,t),G(e),z(e,n),q(e),$(e),o.length?{coordinateProperties:{times:1===o.length?o[0]:o}}:{})};void 0!==i.properties?.visibility&&(i.properties.visibility="0"!==i.properties.visibility);const u=e.getAttribute("id");return null!==u&&""!==u&&(i.id=u),i}function ie(e){const t=r(e,"gx:LatLonQuad");if(t){const t=ne(ee(le(e)));return{geometry:{type:"Polygon",coordinates:[t]}}}return ce(e)}const ue=Math.PI/180;function se(e,t,n){const l=[(e[0]+e[2])/2,(e[1]+e[3])/2];return[t[0].map((e=>{const t=e[1]-l[1],o=e[0]-l[0],a=Math.sqrt(Math.pow(t,2)+Math.pow(o,2)),r=Math.atan2(t,o)+n*ue;return[l[0]+Math.cos(r)*a,l[1]+Math.sin(r)*a]}))]}function ce(e){const t=r(e,"LatLonBox");if(t){const e=c(t,"north"),n=c(t,"west"),l=c(t,"east"),o=c(t,"south"),a=c(t,"rotation");if("number"===typeof e&&"number"===typeof o&&"number"===typeof n&&"number"===typeof l){const t=[n,o,l,e];let r=[[[n,e],[l,e],[l,o],[n,o],[n,e]]];return"number"===typeof a&&(r=se(t,r,a)),{bbox:t,geometry:{type:"Polygon",coordinates:r}}}}return null}function de(e,t,n,l){const o=ie(e),a=o?.geometry||null;if(!a&&l.skipNullGeometry)return null;const r={type:"Feature",geometry:a,properties:Object.assign({"@geometry-type":"groundoverlay"},d(e,["name","address","visibility","open","phoneNumber","description"]),Y(e),Z(e,t),G(e),D(e),z(e,n),q(e),$(e))};o?.bbox&&(r.bbox=o.bbox),void 0!==r.properties?.visibility&&(r.properties.visibility="0"!==r.properties.visibility);const i=e.getAttribute("id");return null!==i&&""!==i&&(r.id=i),r}function pe(e){let t=e.getAttribute("id");const n=e.parentNode;return!t&&p(n)&&"CascadingStyle"===n.localName&&(t=n.getAttribute("kml:id")||n.getAttribute("id")),l(t||"")}function fe(e){const t={};for(const l of n(e,"Style"))t[pe(l)]=G(l);for(const o of n(e,"StyleMap")){const e=l(o.getAttribute("id")||"");u(o,"styleUrl",(n=>{n=l(n),t[n]&&(t[e]=t[n])}))}return t}function me(e){const t={};for(const l of n(e,"SimpleField"))t[l.getAttribute("name")||""]=I[l.getAttribute("type")||""]||I["string"];return t}const ve=["name","visibility","open","address","description","phoneNumber","visibility"];function ge(e){const t={};for(const n of Array.from(e.childNodes))p(n)&&ve.includes(n.tagName)&&(t[n.tagName]=a(n));return{type:"folder",meta:t,children:[]}}function ye(e,t={skipNullGeometry:!1}){const n=fe(e),l=me(e),o={type:"root",children:[]};function a(e,t,o){if(p(e))switch(e.tagName){case"GroundOverlay":{const a=de(e,n,l,o);a&&t.children.push(a);break}case"Placemark":{const a=re(e,n,l,o);a&&t.children.push(a);break}case"Folder":{const n=ge(e);t.children.push(n),t=n;break}}if(e.childNodes)for(let n=0;n<e.childNodes.length;n++)a(e.childNodes[n],t,o)}return a(e,o,t),o}function*he(e,t={skipNullGeometry:!1}){const l=fe(e),o=me(e);for(const a of n(e,"Placemark")){const e=re(a,l,o,t);e&&(yield e)}for(const a of n(e,"GroundOverlay")){const e=de(a,l,o,t);e&&(yield e)}}function be(e,t={skipNullGeometry:!1}){return{type:"FeatureCollection",features:Array.from(he(e,t))}}t.gpx=W,t.gpxGen=S,t.kml=be,t.kmlGen=he,t.kmlWithFolders=ye,t.tcx=C,t.tcxGen=U},7742:function(e,t,n){n.d(t,{Z:function(){return h}});var l=n(6252),o=n(4447),a=n(7467),r=n(2736),i=n(24),u=n(2246),s=n(9483),c=n(8475),d=n(1316),p=n(2262),f=n(6533),m=n(8676),v=n(6719),g=n(3099);const y=(0,f.U)({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,showSize:{type:[Boolean,Number],default:!1,validator:e=>"boolean"===typeof e||[1e3,1024].includes(e)},...(0,i.c)({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:e=>(0,m.FT)(e).every((e=>null!=e&&"object"===typeof e))},...(0,r.hy)({clearable:!0})},"VFileInput"),h=(0,v.ev)()({name:"VFileInput",inheritAttrs:!1,props:y(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:n,emit:f,slots:v}=t;const{t:y}=(0,c.bU)(),h=(0,d.z)(e,"modelValue"),{isFocused:b,focus:w,blur:x}=(0,u.K)(e),k=(0,l.Fl)((()=>"boolean"!==typeof e.showSize?e.showSize:void 0)),S=(0,l.Fl)((()=>(h.value??[]).reduce(((e,t)=>{let{size:n=0}=t;return e+n}),0))),W=(0,l.Fl)((()=>(0,m.XE)(S.value,k.value))),V=(0,l.Fl)((()=>(h.value??[]).map((t=>{const{name:n="",size:l=0}=t;return e.showSize?`${n} (${(0,m.XE)(l,k.value)})`:n})))),N=(0,l.Fl)((()=>{const t=h.value?.length??0;return e.showSize?y(e.counterSizeString,t,W.value):y(e.counterString,t)})),F=(0,p.iH)(),_=(0,p.iH)(),P=(0,p.iH)(),A=(0,l.Fl)((()=>b.value||e.active)),R=(0,l.Fl)((()=>["plain","underlined"].includes(e.variant)));function U(){P.value!==document.activeElement&&P.value?.focus(),b.value||w()}function C(e){j(e)}function T(e){f("mousedown:control",e)}function j(e){P.value?.click(),f("click:control",e)}function M(t){t.stopPropagation(),U(),(0,l.Y3)((()=>{h.value=[],(0,m.dr)(e["onClick:clear"],t)}))}return(0,l.YP)(h,(e=>{const t=!Array.isArray(e)||!e.length;t&&P.value&&(P.value.value="")})),(0,g.L)((()=>{const t=!(!v.counter&&!e.counter),u=!(!t&&!v.details),[s,c]=(0,m.An)(n),[{modelValue:d,...p}]=i.q.filterProps(e),[f]=(0,r.g8)(e);return(0,l.Wm)(i.q,(0,l.dG)({ref:F,modelValue:h.value,"onUpdate:modelValue":e=>h.value=e,class:["v-file-input",{"v-text-field--plain-underlined":R.value},e.class],style:e.style,"onClick:prepend":C},s,p,{centerAffix:!R.value,focused:b.value}),{...v,default:t=>{let{id:n,isDisabled:a,isDirty:i,isReadonly:u,isValid:s}=t;return(0,l.Wm)(r.hF,(0,l.dG)({ref:_,"prepend-icon":e.prependIcon,onMousedown:T,onClick:j,"onClick:clear":M,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},f,{id:n.value,active:A.value||i.value,dirty:i.value,disabled:a.value,focused:b.value,error:!1===s.value}),{...v,default:t=>{let{props:{class:n,...r}}=t;return(0,l.Wm)(l.HY,null,[(0,l.Wm)("input",(0,l.dG)({ref:P,type:"file",readonly:u.value,disabled:a.value,multiple:e.multiple,name:e.name,onClick:e=>{e.stopPropagation(),u.value&&e.preventDefault(),U()},onChange:e=>{if(!e.target)return;const t=e.target;h.value=[...t.files??[]]},onFocus:U,onBlur:x},r,c),null),(0,l.Wm)("div",{class:n},[!!h.value?.length&&(v.selection?v.selection({fileNames:V.value,totalBytes:S.value,totalBytesReadable:W.value}):e.chips?V.value.map((t=>(0,l.Wm)(o.v,{key:t,size:"small",color:e.color},{default:()=>[t]}))):V.value.join(", "))])])}})},details:u?e=>(0,l.Wm)(l.HY,null,[v.details?.(e),t&&(0,l.Wm)(l.HY,null,[(0,l.Wm)("span",null,null),(0,l.Wm)(a._,{active:!!h.value?.length,value:N.value},v.counter)])]):void 0})})),(0,s.F)({},F,_,P)}})},9357:function(e,t,n){n.d(t,{O:function(){return p}});var l=n(6252),o=n(9e3),a=n(9728),r=n(9483),i=n(2262),u=n(6533),s=n(6719),c=n(3099);const d=(0,u.U)({...(0,o.l)(),...(0,a.vC)()},"VForm"),p=(0,s.ev)()({name:"VForm",props:d(),emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,t){let{slots:n,emit:o}=t;const u=(0,a.Np)(e),s=(0,i.iH)();function d(e){e.preventDefault(),u.reset()}function p(e){const t=e,n=u.validate();t.then=n.then.bind(n),t.catch=n.catch.bind(n),t.finally=n.finally.bind(n),o("submit",t),t.defaultPrevented||n.then((e=>{let{valid:t}=e;t&&s.value?.submit()})),t.preventDefault()}return(0,c.L)((()=>(0,l.Wm)("form",{ref:s,class:["v-form",e.class],style:e.style,novalidate:!0,onReset:d,onSubmit:p},[n.default?.(u)]))),(0,r.F)(u,s)}})}}]);
//# sourceMappingURL=edit.ec803a69.js.map