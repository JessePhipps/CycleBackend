"use strict";(self["webpackChunkgps_leaflet"]=self["webpackChunkgps_leaflet"]||[]).push([[922],{3853:function(e,t,n){n.r(t),n.d(t,{default:function(){return U}});var o=n(6252),r=n(9963),l=n(2262),i=n(3577),a=n(4642),s=n(6086),u=n(6673),c=n(4447),d=n(7467),p=n(2736),f=n(24),m=n(2246),g=n(9483),v=n(8475),h=n(1316),y=n(6533),b=n(8676),x=n(6719),k=n(3099);const w=(0,y.U)({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,showSize:{type:[Boolean,Number],default:!1,validator:e=>"boolean"===typeof e||[1e3,1024].includes(e)},...(0,f.c)({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:e=>(0,b.FT)(e).every((e=>null!=e&&"object"===typeof e))},...(0,p.hy)({clearable:!0})},"VFileInput"),N=(0,x.ev)()({name:"VFileInput",inheritAttrs:!1,props:w(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:n,emit:r,slots:i}=t;const{t:a}=(0,v.bU)(),s=(0,h.z)(e,"modelValue"),{isFocused:u,focus:y,blur:x}=(0,m.K)(e),w=(0,o.Fl)((()=>"boolean"!==typeof e.showSize?e.showSize:void 0)),N=(0,o.Fl)((()=>(s.value??[]).reduce(((e,t)=>{let{size:n=0}=t;return e+n}),0))),S=(0,o.Fl)((()=>(0,b.XE)(N.value,w.value))),F=(0,o.Fl)((()=>(s.value??[]).map((t=>{const{name:n="",size:o=0}=t;return e.showSize?`${n} (${(0,b.XE)(o,w.value)})`:n})))),P=(0,o.Fl)((()=>{const t=s.value?.length??0;return e.showSize?a(e.counterSizeString,t,S.value):a(e.counterString,t)})),A=(0,l.iH)(),V=(0,l.iH)(),M=(0,l.iH)(),W=(0,o.Fl)((()=>u.value||e.active)),T=(0,o.Fl)((()=>["plain","underlined"].includes(e.variant)));function C(){M.value!==document.activeElement&&M.value?.focus(),u.value||y()}function H(e){U(e)}function R(e){r("mousedown:control",e)}function U(e){M.value?.click(),r("click:control",e)}function O(t){t.stopPropagation(),C(),(0,o.Y3)((()=>{s.value=[],(0,b.dr)(e["onClick:clear"],t)}))}return(0,o.YP)(s,(e=>{const t=!Array.isArray(e)||!e.length;t&&M.value&&(M.value.value="")})),(0,k.L)((()=>{const t=!(!i.counter&&!e.counter),r=!(!t&&!i.details),[l,a]=(0,b.An)(n),[{modelValue:m,...g}]=f.q.filterProps(e),[v]=(0,p.g8)(e);return(0,o.Wm)(f.q,(0,o.dG)({ref:A,modelValue:s.value,"onUpdate:modelValue":e=>s.value=e,class:["v-file-input",{"v-text-field--plain-underlined":T.value},e.class],style:e.style,"onClick:prepend":H},l,g,{centerAffix:!T.value,focused:u.value}),{...i,default:t=>{let{id:n,isDisabled:r,isDirty:l,isReadonly:d,isValid:f}=t;return(0,o.Wm)(p.hF,(0,o.dG)({ref:V,"prepend-icon":e.prependIcon,onMousedown:R,onClick:U,"onClick:clear":O,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},v,{id:n.value,active:W.value||l.value,dirty:l.value,disabled:r.value,focused:u.value,error:!1===f.value}),{...i,default:t=>{let{props:{class:n,...l}}=t;return(0,o.Wm)(o.HY,null,[(0,o.Wm)("input",(0,o.dG)({ref:M,type:"file",readonly:d.value,disabled:r.value,multiple:e.multiple,name:e.name,onClick:e=>{e.stopPropagation(),d.value&&e.preventDefault(),C()},onChange:e=>{if(!e.target)return;const t=e.target;s.value=[...t.files??[]]},onFocus:C,onBlur:x},l,a),null),(0,o.Wm)("div",{class:n},[!!s.value?.length&&(i.selection?i.selection({fileNames:F.value,totalBytes:N.value,totalBytesReadable:S.value}):e.chips?F.value.map((t=>(0,o.Wm)(c.v,{key:t,size:"small",color:e.color},{default:()=>[t]}))):F.value.join(", "))])])}})},details:r?e=>(0,o.Wm)(o.HY,null,[i.details?.(e),t&&(0,o.Wm)(o.HY,null,[(0,o.Wm)("span",null,null),(0,o.Wm)(d._,{active:!!s.value?.length,value:P.value},i.counter)])]):void 0})})),(0,g.F)({},A,V,M)}});var S=n(9357),F=n(1669),P=n(7230),A=n(6393),V=(n(348),n(9137));const M=(0,y.U)({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...(0,f.c)(),...(0,p.hy)()},"VTextarea"),W=(0,x.ev)()({name:"VTextarea",directives:{Intersect:V.Z},inheritAttrs:!1,props:M(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:n,emit:i,slots:a}=t;const s=(0,h.z)(e,"modelValue"),{isFocused:u,focus:c,blur:v}=(0,m.K)(e),y=(0,o.Fl)((()=>"function"===typeof e.counterValue?e.counterValue(s.value):(s.value||"").toString().length)),x=(0,o.Fl)((()=>n.maxlength?n.maxlength:!e.counter||"number"!==typeof e.counter&&"string"!==typeof e.counter?void 0:e.counter));function w(t,n){e.autofocus&&t&&n[0].target?.focus?.()}const N=(0,l.iH)(),S=(0,l.iH)(),F=(0,l.XI)(""),P=(0,l.iH)(),A=(0,o.Fl)((()=>e.persistentPlaceholder||u.value||e.active));function V(){P.value!==document.activeElement&&P.value?.focus(),u.value||c()}function M(e){V(),i("click:control",e)}function W(e){i("mousedown:control",e)}function T(t){t.stopPropagation(),V(),(0,o.Y3)((()=>{s.value="",(0,b.dr)(e["onClick:clear"],t)}))}function C(t){const n=t.target;if(s.value=n.value,e.modelModifiers?.trim){const e=[n.selectionStart,n.selectionEnd];(0,o.Y3)((()=>{n.selectionStart=e[0],n.selectionEnd=e[1]}))}}const H=(0,l.iH)(),R=(0,l.iH)(+e.rows),U=(0,o.Fl)((()=>["plain","underlined"].includes(e.variant)));function O(){e.autoGrow&&(0,o.Y3)((()=>{if(!H.value||!S.value)return;const t=getComputedStyle(H.value),n=getComputedStyle(S.value.$el),o=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),r=H.value.scrollHeight,l=parseFloat(t.lineHeight),i=Math.max(parseFloat(e.rows)*l+o,parseFloat(n.getPropertyValue("--v-input-control-height"))),a=parseFloat(e.maxRows)*l+o||1/0,s=(0,b.uZ)(r??0,i,a);R.value=Math.floor((s-o)/l),F.value=(0,b.kb)(s)}))}let _;return(0,o.m0)((()=>{e.autoGrow||(R.value=+e.rows)})),(0,o.bv)(O),(0,o.YP)(s,O),(0,o.YP)((()=>e.rows),O),(0,o.YP)((()=>e.maxRows),O),(0,o.YP)((()=>e.density),O),(0,o.YP)(H,(e=>{e?(_=new ResizeObserver(O),_.observe(H.value)):_?.disconnect()})),(0,o.Jd)((()=>{_?.disconnect()})),(0,k.L)((()=>{const t=!!(a.counter||e.counter||e.counterValue),l=!(!t&&!a.details),[i,c]=(0,b.An)(n),[{modelValue:m,...g}]=f.q.filterProps(e),[h]=(0,p.g8)(e);return(0,o.Wm)(f.q,(0,o.dG)({ref:N,modelValue:s.value,"onUpdate:modelValue":e=>s.value=e,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--plain-underlined":U.value},e.class],style:e.style},i,g,{centerAffix:1===R.value&&!U.value,focused:u.value}),{...a,default:t=>{let{isDisabled:n,isDirty:l,isReadonly:i,isValid:d}=t;return(0,o.Wm)(p.hF,(0,o.dG)({ref:S,style:{"--v-textarea-control-height":F.value},onClick:M,onMousedown:W,"onClick:clear":T,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},h,{active:A.value||l.value,centerAffix:1===R.value&&!U.value,dirty:l.value||e.dirty,disabled:n.value,focused:u.value,error:!1===d.value}),{...a,default:t=>{let{props:{class:l,...a}}=t;return(0,o.Wm)(o.HY,null,[e.prefix&&(0,o.Wm)("span",{class:"v-text-field__prefix"},[e.prefix]),(0,o.wy)((0,o.Wm)("textarea",(0,o.dG)({ref:P,class:l,value:s.value,onInput:C,autofocus:e.autofocus,readonly:i.value,disabled:n.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:V,onBlur:v},a,c),null),[[(0,o.Q2)("intersect"),{handler:w},null,{once:!0}]]),e.autoGrow&&(0,o.wy)((0,o.Wm)("textarea",{class:[l,"v-textarea__sizer"],id:`${a.id}-sizer`,"onUpdate:modelValue":e=>s.value=e,ref:H,readonly:!0,"aria-hidden":"true"},null),[[r.nr,s.value]]),e.suffix&&(0,o.Wm)("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:l?n=>(0,o.Wm)(o.HY,null,[a.details?.(n),t&&(0,o.Wm)(o.HY,null,[(0,o.Wm)("span",null,null),(0,o.Wm)(d._,{active:e.persistentCounter||u.value,value:y.value,max:x.value},a.counter)])]):void 0})})),(0,g.F)({},N,S,P)}}),T={class:"add-route-container"},C=(0,o._)("h2",null,"Routes:",-1);var H={__name:"EditRoute",setup(e){const t=(0,l.iH)(null),c=(0,l.iH)(null),d=(0,a.k)(),{deleteRoute:p,addRoute:f,getRoutes:m}=(0,s.Jk)(d);let g=(0,o.Fl)((()=>d.getRoutes)),v=(0,l.iH)(),h=(0,l.iH)(""),y=(0,l.iH)(""),b=(0,l.iH)(""),x=(0,l.iH)(0),k=(0,l.iH)(""),w=(0,l.iH)(""),V=(0,l.iH)(0),M=(0,l.iH)([]),H=(0,l.iH)(""),R=(0,l.qj)([e=>e.length>0||"Please add a value to this field"]),U=e=>{d.deleteRoute(e)},O=async e=>{const t=(await e).valid;if(t)try{await _();let e={route:v.value,name:h.value,gpx:y.value,difficulty:b.value,length:x.value,terrain:k.value,desc:w.value,elevation:V.value,poi:{key:M.value,values:H.value}};d.addRoute(e)}catch(n){console.log("error",n)}},_=()=>new Promise(((e,t)=>{try{if(c){const t=new FileReader;t.onload=async()=>{const t=n(1111),o=c.value.files[0],r=new Blob([o],{type:"text/plain"}),l=await r.text();y.value=btoa(l);const i=(new DOMParser).parseFromString(l,"text/xml"),a=t.gpx(i);v.value=a;const s=a.features[0].geometry.coordinates;let u=Math.ceil(s.length/512),d={},p=0;for(let e=0;e<s.length;e+=u)d[p]={latitude:s[e][1],longitude:s[e][0]},p++;let f=await fetch("http://localhost:3000/v1/geo/e",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)});f=await f.json(),d=f.response.results;let m=0,g=0;for(let e=1;e<d.length;e++)g=d[e].elevation-d[e-1].elevation,g>0&&(m+=g);m=Math.round(3.28084*m*10)/10,V.value=m;let h=0,b=0,k=0,w=0,N=0;for(let e=0;e<s.length-1;e++){const t=e=>e*Math.PI/180;b=t(s[e][1]),k=t(s[e][0]),w=t(s[e+1][1]),N=t(s[e+1][0]);const n=w-b,o=N-k,r=Math.sin(n/2)**2+Math.cos(b)*Math.cos(w)*Math.sin(o/2)**2,l=2*Math.atan2(Math.sqrt(r),Math.sqrt(1-r)),i=6371e3,a=i*l;h+=a}x.value=Math.round(h/1e3*.621371*10)/10;let S=t=>{e(t)};S()},t.readAsText(c.value.files[0])}}catch(o){t(o)}}));return(e,n)=>((0,o.wg)(),(0,o.iD)("div",T,[(0,o.Wm)(S.O,{class:"routeForm","validate-on":"submit lazy",onSubmit:(0,r.iM)((0,l.SU)(O),["prevent"]),ref_key:"form",ref:t},{default:(0,o.w5)((()=>[(0,o.Wm)(F.K,{class:"input"},{default:(0,o.w5)((()=>[(0,o.Wm)(A.h,{label:"Route Name","prepend-icon":"mdi-bike",class:"routeName",type:"text",variant:"outlined",name:"routeName",modelValue:(0,l.SU)(h),"onUpdate:modelValue":n[0]||(n[0]=e=>(0,l.dq)(h)?h.value=e:h=e),rules:(0,l.SU)(R),required:""},null,8,["modelValue","rules"]),(0,o.Wm)(F.K,{class:"filter"},{default:(0,o.w5)((()=>[(0,o.Wm)(P.rL,{label:"Select Terrain:","prepend-icon":"mdi-road",modelValue:(0,l.SU)(k),"onUpdate:modelValue":n[1]||(n[1]=e=>(0,l.dq)(k)?k.value=e:k=e),items:["Paved","Gravel","Dirt"],rules:(0,l.SU)(R)},null,8,["modelValue","rules"]),(0,o.Wm)(P.rL,{label:"Select Difficulty: ","prepend-icon":"mdi-alert",modelValue:(0,l.SU)(b),"onUpdate:modelValue":n[2]||(n[2]=e=>(0,l.dq)(b)?b.value=e:b=e),items:["Beginner","Intermediate","Expert"],rules:(0,l.SU)(R)},null,8,["modelValue","rules"])])),_:1}),(0,o.Wm)(W,{label:"Route Description","prepend-icon":"mdi-pencil",class:"routeDesc",type:"text",variant:"outlined",name:"routeDesc",modelValue:(0,l.SU)(w),"onUpdate:modelValue":n[3]||(n[3]=e=>(0,l.dq)(w)?w.value=e:w=e),rules:(0,l.SU)(R),required:""},null,8,["modelValue","rules"]),(0,o.Wm)(N,{label:"Upload .gpx File",variant:"outlined",accept:".gpx",type:"file",ref_key:"file",ref:c,rules:(0,l.SU)(R),"prepend-icon":"mdi-map",required:""},null,8,["rules"]),(0,o.Wm)(u.T,{type:"submit"},{default:(0,o.w5)((()=>[(0,o.Uk)("submit")])),_:1})])),_:1})])),_:1},8,["onSubmit"]),(0,o.Wm)(F.K,{class:"routeList"},{default:(0,o.w5)((()=>[C,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,l.SU)(g),(e=>((0,o.wg)(),(0,o.j4)(F.K,{class:"route",key:e.name},{default:(0,o.w5)((()=>[(0,o._)("p",null,(0,i.zw)(e.name)+" ID: "+(0,i.zw)(e.id),1),(0,o.Wm)(u.T,{onClick:t=>(0,l.SU)(U)(e.id)},{default:(0,o.w5)((()=>[(0,o.Uk)("DELETE")])),_:2},1032,["onClick"])])),_:2},1024)))),128))])),_:1})]))}};const R=H;var U=R},1111:function(e,t){function n(e,t){return Array.from(e.getElementsByTagName(t))}function o(e){return"#"===e[0]?e:`#${e}`}function r(e,t,n){return Array.from(e.getElementsByTagNameNS(n,t))}function l(e){return e?.normalize(),e&&e.textContent||""}function i(e,t,n){const o=e.getElementsByTagName(t),r=o.length?o[0]:null;return r&&n&&n(r),r}function a(e,t,n){const o={};if(!e)return o;const r=e.getElementsByTagName(t),l=r.length?r[0]:null;return l&&n?n(l,o):o}function s(e,t,n){const o=l(i(e,t));return o&&n&&n(o)||{}}function u(e,t,n){const o=parseFloat(l(i(e,t)));if(!isNaN(o))return o&&n&&n(o)||{}}function c(e,t,n){const o=parseFloat(l(i(e,t)));if(!isNaN(o))return n&&n(o),o}function d(e,t){const n={};for(const o of t)s(e,o,(e=>{n[o]=e}));return n}function p(e){return 1===e?.nodeType}function f(e){return a(e,"line",(e=>{const t=Object.assign({},s(e,"color",(e=>({stroke:`#${e}`}))),u(e,"opacity",(e=>({"stroke-opacity":e}))),u(e,"width",(e=>({"stroke-width":96*e/25.4}))));return t}))}function m(e){let t=[];if(null===e)return t;for(const n of Array.from(e.childNodes)){if(!p(n))continue;const e=g(n.nodeName);if("gpxtpx:TrackPointExtension"===e)t=t.concat(m(n));else{const o=l(n);t.push([e,v(o)])}}return t}function g(e){return["heart","gpxtpx:hr","hr"].includes(e)?"heart":e}function v(e){const t=parseFloat(e);return isNaN(t)?e:t}function h(e){const t=[parseFloat(e.getAttribute("lon")||""),parseFloat(e.getAttribute("lat")||"")];if(isNaN(t[0])||isNaN(t[1]))return null;c(e,"ele",(e=>{t.push(e)}));const n=i(e,"time");return{coordinates:t,time:n?l(n):null,extendedValues:m(i(e,"extensions"))}}function y(e){const t=d(e,["name","cmt","desc","type","time","keywords"]),o=Array.from(e.getElementsByTagNameNS("http://www.garmin.com/xmlschemas/GpxExtensions/v3","*"));for(const n of o)n.parentNode?.parentNode===e&&(t[n.tagName.replace(":","_")]=l(n));const r=n(e,"link");return r.length&&(t.links=r.map((e=>Object.assign({href:e.getAttribute("href")},d(e,["text","type"]))))),t}function b(e,t){const o=n(e,t),r=[],l=[],i={};for(let n=0;n<o.length;n++){const e=h(o[n]);if(e){r.push(e.coordinates),e.time&&l.push(e.time);for(const[t,r]of e.extendedValues){const e="heart"===t?t:t.replace("gpxtpx:","")+"s";i[e]||(i[e]=Array(o.length).fill(null)),i[e][n]=r}}}if(!(r.length<2))return{line:r,times:l,extendedValues:i}}function x(e){const t=b(e,"rtept");if(t)return{type:"Feature",properties:Object.assign({_gpxType:"rte"},y(e),f(i(e,"extensions"))),geometry:{type:"LineString",coordinates:t.line}}}function k(e){const t=n(e,"trkseg"),o=[],r=[],l=[];for(const n of t){const e=b(n,"trkpt");e&&(l.push(e),e.times&&e.times.length&&r.push(e.times))}if(0===l.length)return null;const a=l.length>1,s=Object.assign({_gpxType:"trk"},y(e),f(i(e,"extensions")),r.length?{coordinateProperties:{times:a?r:r[0]}}:{});for(const n of l){o.push(n.line),s.coordinateProperties||(s.coordinateProperties={});const e=s.coordinateProperties,t=Object.entries(n.extendedValues);for(let n=0;n<t.length;n++){const[o,r]=t[n];a?(e[o]||(e[o]=l.map((e=>new Array(e.line.length).fill(null)))),e[o][n]=r):e[o]=r}}return{type:"Feature",properties:s,geometry:a?{type:"MultiLineString",coordinates:o}:{type:"LineString",coordinates:o[0]}}}function w(e){const t=Object.assign(y(e),d(e,["sym"])),n=h(e);return n?{type:"Feature",properties:t,geometry:{type:"Point",coordinates:n.coordinates}}:null}function*N(e){for(const t of n(e,"trk")){const e=k(t);e&&(yield e)}for(const t of n(e,"rte")){const e=x(t);e&&(yield e)}for(const t of n(e,"wpt")){const e=w(t);e&&(yield e)}}function S(e){return{type:"FeatureCollection",features:Array.from(N(e))}}Object.defineProperty(t,"__esModule",{value:!0});const F="http://www.garmin.com/xmlschemas/ActivityExtension/v2",P=[["heartRate","heartRates"],["Cadence","cadences"],["Speed","speeds"],["Watts","watts"]],A=[["TotalTimeSeconds","totalTimeSeconds"],["DistanceMeters","distanceMeters"],["MaximumSpeed","maxSpeed"],["AverageHeartRateBpm","avgHeartRate"],["MaximumHeartRateBpm","maxHeartRate"],["AvgSpeed","avgSpeed"],["AvgWatts","avgWatts"],["MaxWatts","maxWatts"]];function V(e,t){const n=[];for(const[o,r]of t){let t=i(e,o);if(!t){const n=e.getElementsByTagNameNS(F,o);n.length&&(t=n[0])}const a=parseFloat(l(t));isNaN(a)||n.push([r,a])}return n}function M(e){const t=[c(e,"LongitudeDegrees"),c(e,"LatitudeDegrees")];if(void 0===t[0]||isNaN(t[0])||void 0===t[1]||isNaN(t[1]))return null;const n=i(e,"HeartRateBpm"),o=l(i(e,"Time"));return i(e,"AltitudeMeters",(e=>{const n=parseFloat(l(e));isNaN(n)||t.push(n)})),{coordinates:t,time:o||null,heartRate:n?parseFloat(l(n)):null,extensions:V(e,P)}}function W(e){const t=n(e,"Trackpoint"),o=[],r=[],l=[];if(t.length<2)return null;const i={},a={extendedProperties:i};for(let n=0;n<t.length;n++){const e=M(t[n]);if(null===e)continue;o.push(e.coordinates);const{time:a,heartRate:s,extensions:u}=e;a&&r.push(a),s&&l.push(s);for(const[o,r]of u)i[o]||(i[o]=Array(t.length).fill(null)),i[o][n]=r}return o.length<2?null:Object.assign(a,{line:o,times:r,heartRates:l})}function T(e){const t=n(e,"Track"),o=[],r=[],i=[],s=[];let u;const c=Object.assign(Object.fromEntries(V(e,A)),a(e,"Name",(e=>({name:l(e)}))));for(const n of t)u=W(n),u&&(o.push(u.line),u.times.length&&r.push(u.times),u.heartRates.length&&i.push(u.heartRates),s.push(u.extendedProperties));for(let n=0;n<s.length;n++){const e=s[n];for(const r in e)1===t.length?u&&(c[r]=u.extendedProperties[r]):(c[r]||(c[r]=o.map((e=>Array(e.length).fill(null)))),c[r][n]=e[r])}return 0===o.length?null:((r.length||i.length)&&(c.coordinateProperties=Object.assign(r.length?{times:1===o.length?r[0]:r}:{},i.length?{heart:1===o.length?i[0]:i}:{})),{type:"Feature",properties:c,geometry:1===o.length?{type:"LineString",coordinates:o[0]}:{type:"MultiLineString",coordinates:o}})}function*C(e){for(const t of n(e,"Lap")){const e=T(t);e&&(yield e)}for(const t of n(e,"Courses")){const e=T(t);e&&(yield e)}}function H(e){return{type:"FeatureCollection",features:Array.from(C(e))}}function R(e,t){const n={},o="stroke"==t||"fill"===t?t:t+"-color";return"#"===e[0]&&(e=e.substring(1)),6===e.length||3===e.length?n[o]="#"+e:8===e.length&&(n[t+"-opacity"]=parseInt(e.substring(0,2),16)/255,n[o]="#"+e.substring(6,8)+e.substring(4,6)+e.substring(2,4)),n}function U(e,t,n){const o={};return c(e,t,(e=>{o[n]=e})),o}function O(e,t){return a(e,"color",(e=>R(l(e),t)))}function _(e){return a(e,"Icon",((e,t)=>(s(e,"href",(e=>{t.icon=e})),t)))}function B(e){return a(e,"IconStyle",(e=>Object.assign(O(e,"icon"),U(e,"scale","icon-scale"),U(e,"heading","icon-heading"),a(e,"hotSpot",(e=>{const t=parseFloat(e.getAttribute("x")||""),n=parseFloat(e.getAttribute("y")||""),o=e.getAttribute("xunits")||"",r=e.getAttribute("yunits")||"";return isNaN(t)||isNaN(n)?{}:{"icon-offset":[t,n],"icon-offset-units":[o,r]}})),_(e))))}function j(e){return a(e,"LabelStyle",(e=>Object.assign(O(e,"label"),U(e,"scale","label-scale"))))}function G(e){return a(e,"LineStyle",(e=>Object.assign(O(e,"stroke"),U(e,"width","stroke-width"))))}function L(e){return a(e,"PolyStyle",((e,t)=>Object.assign(t,a(e,"color",(e=>R(l(e),"fill"))),s(e,"fill",(e=>{if("0"===e)return{"fill-opacity":0}})),s(e,"outline",(e=>{if("0"===e)return{"stroke-opacity":0}})))))}function I(e){return Object.assign({},L(e),G(e),j(e),B(e))}const z=e=>Number(e),D={string:e=>e,int:z,uint:z,short:z,ushort:z,float:z,double:z,bool:e=>Boolean(e)};function E(e,t){return a(e,"ExtendedData",((e,o)=>{for(const t of n(e,"Data"))o[t.getAttribute("name")||""]=l(i(t,"value"));for(const r of n(e,"SimpleData")){const e=r.getAttribute("name")||"",n=t[e]||D.string;o[e]=n(l(r))}return o}))}function Y(e){const t=i(e,"description");for(const n of Array.from(t?.childNodes||[]))if(4===n.nodeType)return{description:{"@type":"html",value:l(n)}};return{}}function q(e){return a(e,"TimeSpan",(e=>({timespan:{begin:l(i(e,"begin")),end:l(i(e,"end"))}})))}function $(e){return a(e,"TimeStamp",(e=>({timestamp:l(i(e,"when"))})))}function K(e,t){return s(e,"styleUrl",(e=>(e=o(e),t[e]?Object.assign({styleUrl:e},t[e]):{styleUrl:e})))}const J=/\s*/g,X=/^\s*|\s*$/g,Q=/\s+/;function Z(e){return e.replace(J,"").split(",").map(parseFloat).filter((e=>!isNaN(e))).slice(0,3)}function ee(e){return e.replace(X,"").split(Q).map(Z).filter((e=>e.length>=2))}function te(e){let t=n(e,"coord");0===t.length&&(t=r(e,"coord","*"));const o=t.map((e=>l(e).split(" ").map(parseFloat)));return 0===o.length?null:{geometry:o.length>2?{type:"LineString",coordinates:o}:{type:"Point",coordinates:o[0]},times:n(e,"when").map((e=>l(e)))}}function ne(e){if(0===e.length)return e;const t=e[0],n=e[e.length-1];let o=!0;for(let r=0;r<Math.max(t.length,n.length);r++)if(t[r]!==n[r]){o=!1;break}return o?e:e.concat([e[0]])}function oe(e){return l(i(e,"coordinates"))}function re(e){let t=[],o=[];for(let r=0;r<e.childNodes.length;r++){const l=e.childNodes.item(r);if(p(l))switch(l.tagName){case"MultiGeometry":case"MultiTrack":case"gx:MultiTrack":{const e=re(l);t=t.concat(e.geometries),o=o.concat(e.coordTimes);break}case"Point":{const e=Z(oe(l));e.length>=2&&t.push({type:"Point",coordinates:e});break}case"LinearRing":case"LineString":{const e=ee(oe(l));e.length>=2&&t.push({type:"LineString",coordinates:e});break}case"Polygon":{const e=[];for(const t of n(l,"LinearRing")){const n=ne(ee(oe(t)));n.length>=4&&e.push(n)}e.length&&t.push({type:"Polygon",coordinates:e});break}case"Track":case"gx:Track":{const e=te(l);if(!e)break;const{times:n,geometry:r}=e;t.push(r),n.length&&o.push(n);break}}}return{geometries:t,coordTimes:o}}function le(e){return 0===e.length?null:1===e.length?e[0]:{type:"GeometryCollection",geometries:e}}function ie(e,t,n,o){const{coordTimes:r,geometries:l}=re(e),i=le(l);if(!i&&o.skipNullGeometry)return null;const a={type:"Feature",geometry:i,properties:Object.assign(d(e,["name","address","visibility","open","phoneNumber","description"]),Y(e),K(e,t),I(e),E(e,n),q(e),$(e),r.length?{coordinateProperties:{times:1===r.length?r[0]:r}}:{})};void 0!==a.properties?.visibility&&(a.properties.visibility="0"!==a.properties.visibility);const s=e.getAttribute("id");return null!==s&&""!==s&&(a.id=s),a}function ae(e){const t=i(e,"gx:LatLonQuad");if(t){const t=ne(ee(oe(e)));return{geometry:{type:"Polygon",coordinates:[t]}}}return ce(e)}const se=Math.PI/180;function ue(e,t,n){const o=[(e[0]+e[2])/2,(e[1]+e[3])/2];return[t[0].map((e=>{const t=e[1]-o[1],r=e[0]-o[0],l=Math.sqrt(Math.pow(t,2)+Math.pow(r,2)),i=Math.atan2(t,r)+n*se;return[o[0]+Math.cos(i)*l,o[1]+Math.sin(i)*l]}))]}function ce(e){const t=i(e,"LatLonBox");if(t){const e=c(t,"north"),n=c(t,"west"),o=c(t,"east"),r=c(t,"south"),l=c(t,"rotation");if("number"===typeof e&&"number"===typeof r&&"number"===typeof n&&"number"===typeof o){const t=[n,r,o,e];let i=[[[n,e],[o,e],[o,r],[n,r],[n,e]]];return"number"===typeof l&&(i=ue(t,i,l)),{bbox:t,geometry:{type:"Polygon",coordinates:i}}}}return null}function de(e,t,n,o){const r=ae(e),l=r?.geometry||null;if(!l&&o.skipNullGeometry)return null;const i={type:"Feature",geometry:l,properties:Object.assign({"@geometry-type":"groundoverlay"},d(e,["name","address","visibility","open","phoneNumber","description"]),Y(e),K(e,t),I(e),_(e),E(e,n),q(e),$(e))};r?.bbox&&(i.bbox=r.bbox),void 0!==i.properties?.visibility&&(i.properties.visibility="0"!==i.properties.visibility);const a=e.getAttribute("id");return null!==a&&""!==a&&(i.id=a),i}function pe(e){let t=e.getAttribute("id");const n=e.parentNode;return!t&&p(n)&&"CascadingStyle"===n.localName&&(t=n.getAttribute("kml:id")||n.getAttribute("id")),o(t||"")}function fe(e){const t={};for(const o of n(e,"Style"))t[pe(o)]=I(o);for(const r of n(e,"StyleMap")){const e=o(r.getAttribute("id")||"");s(r,"styleUrl",(n=>{n=o(n),t[n]&&(t[e]=t[n])}))}return t}function me(e){const t={};for(const o of n(e,"SimpleField"))t[o.getAttribute("name")||""]=D[o.getAttribute("type")||""]||D["string"];return t}const ge=["name","visibility","open","address","description","phoneNumber","visibility"];function ve(e){const t={};for(const n of Array.from(e.childNodes))p(n)&&ge.includes(n.tagName)&&(t[n.tagName]=l(n));return{type:"folder",meta:t,children:[]}}function he(e,t={skipNullGeometry:!1}){const n=fe(e),o=me(e),r={type:"root",children:[]};function l(e,t,r){if(p(e))switch(e.tagName){case"GroundOverlay":{const l=de(e,n,o,r);l&&t.children.push(l);break}case"Placemark":{const l=ie(e,n,o,r);l&&t.children.push(l);break}case"Folder":{const n=ve(e);t.children.push(n),t=n;break}}if(e.childNodes)for(let n=0;n<e.childNodes.length;n++)l(e.childNodes[n],t,r)}return l(e,r,t),r}function*ye(e,t={skipNullGeometry:!1}){const o=fe(e),r=me(e);for(const l of n(e,"Placemark")){const e=ie(l,o,r,t);e&&(yield e)}for(const l of n(e,"GroundOverlay")){const e=de(l,o,r,t);e&&(yield e)}}function be(e,t={skipNullGeometry:!1}){return{type:"FeatureCollection",features:Array.from(ye(e,t))}}t.gpx=S,t.gpxGen=N,t.kml=be,t.kmlGen=ye,t.kmlWithFolders=he,t.tcx=H,t.tcxGen=C},9357:function(e,t,n){n.d(t,{O:function(){return p}});var o=n(6252),r=n(9e3),l=n(9728),i=n(9483),a=n(2262),s=n(6533),u=n(6719),c=n(3099);const d=(0,s.U)({...(0,r.l)(),...(0,l.vC)()},"VForm"),p=(0,u.ev)()({name:"VForm",props:d(),emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,t){let{slots:n,emit:r}=t;const s=(0,l.Np)(e),u=(0,a.iH)();function d(e){e.preventDefault(),s.reset()}function p(e){const t=e,n=s.validate();t.then=n.then.bind(n),t.catch=n.catch.bind(n),t.finally=n.finally.bind(n),r("submit",t),t.defaultPrevented||n.then((e=>{let{valid:t}=e;t&&u.value?.submit()})),t.preventDefault()}return(0,c.L)((()=>(0,o.Wm)("form",{ref:u,class:["v-form",e.class],style:e.style,novalidate:!0,onReset:d,onSubmit:p},[n.default?.(s)]))),(0,i.F)(s,u)}})}}]);
//# sourceMappingURL=edit.af9f4d77.js.map