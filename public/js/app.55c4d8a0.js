(function(){"use strict";var e={3709:function(e,t,n){var o=n(9963),l=n(6252),a=n(3577),r=n(6673),u=n(1492),i=n(9003),s=n(3379);const c=(0,l._)("strong",null,"City of Bolivar",-1);function d(e,t,n,o,d,f){return(0,l.wg)(),(0,l.j4)(u.c,{class:"footer"},{default:(0,l.w5)((()=>[(0,l.Wm)(i.o,{justify:"center","no-gutters":""},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.links,(e=>((0,l.wg)(),(0,l.j4)(r.T,{key:e,color:"white",variant:"text",class:"mx-2",rounded:"xl",onClick:t=>f.handleClick(e)},{default:(0,l.w5)((()=>[(0,l.Uk)((0,a.zw)(e.name),1)])),_:2},1032,["onClick"])))),128)),(0,l.Wm)(s.D,{class:"cityText",cols:"12"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,a.zw)((new Date).getFullYear())+" — ",1),c])),_:1})])),_:1})])),_:1})}var f={data:()=>({links:[{name:"Home",to:"/"},{name:"About",to:"/about"},{name:"Contact Us",to:"https://bolivar.mo.us/contact-us/"}]}),methods:{handleClick(e){var t=document.createElement("a");t.href=e.to,t.click()}}},m=n(3744);const p=(0,m.Z)(f,[["render",d]]);var g=p,h=n.p+"img/logo.5372a2a3.jpg",w=n(1669),_=n(4007),v=n(7074),y=n(5106),b=n(4147),k=n(711);const W={elevation:24};function x(e,t,n,o,u,i){const s=(0,l.up)("v-list-tile-content"),c=(0,l.up)("v-list-tile");return(0,l.wg)(),(0,l.iD)("nav",W,[(0,l.Wm)(w.K,{"justify-center":"",class:"navbar"},{default:(0,l.w5)((()=>[(0,l.Wm)(k.i,{class:"toolbar",flat:"",app:""},{default:(0,l.w5)((()=>[(0,l.Wm)(v.f,{class:"logo",src:h}),(0,l.Wm)(_.C,null,{default:(0,l.w5)((()=>[(0,l.Wm)(y.i,null,{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(u.links,(e=>((0,l.wg)(),(0,l.j4)(c,{key:e.text},{default:(0,l.w5)((()=>[(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[(0,l.Wm)(r.T,{class:"white--text",router:"",to:e.route},{default:(0,l.w5)((()=>[(0,l.Uk)((0,a.zw)(e.text),1)])),_:2},1032,["to"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1}),(0,l.Wm)(k.i,{class:"hamburger-container"},{default:(0,l.w5)((()=>[(0,l.Wm)(v.f,{class:"logo",src:h}),(0,l.Wm)(b.T,{class:"hamburger"},{activator:(0,l.w5)((({props:e})=>[(0,l.Wm)(r.T,(0,l.dG)({class:"hamburger-icon",icon:"mdi-menu",color:"#083a8c"},e),null,16)])),default:(0,l.w5)((()=>[(0,l.Wm)(y.i,{class:"menu-list"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(u.links,(e=>((0,l.wg)(),(0,l.j4)(c,{key:e.text},{default:(0,l.w5)((()=>[(0,l.Wm)(r.T,{variant:"plane",class:"white--text",router:"",to:e.route},{default:(0,l.w5)((()=>[(0,l.Uk)((0,a.zw)(e.text),1)])),_:2},1032,["to"])])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})])),_:1})])}var j={data(){return{links:[{text:"Home",route:"/"},{text:"About",route:"/about"},{text:"Route Suggestion",route:"/routesuggestion"}]}}};const S=(0,m.Z)(j,[["render",x]]);var U=S,R=n(4642),E=n(6086),z=n(1457),O=n(9289),T={__name:"App",setup(e){const t=(0,R.k)();return(0,l.bv)((async()=>{await t.getRoutesInit();const{routes:e}=(0,E.Jk)(t);return{routeStore:t}})),(e,t)=>{const n=(0,l.up)("router-view"),o=(0,l.up)("v-content");return(0,l.wg)(),(0,l.j4)(z.q,null,{default:(0,l.w5)((()=>[(0,l.Wm)(O.O,null,{default:(0,l.w5)((()=>[(0,l.Wm)(U),(0,l.Wm)(o,null,{default:(0,l.w5)((()=>[(0,l.Wm)(n)])),_:1}),(0,l.Wm)(g)])),_:1})])),_:1})}}};const D=T;var L=D,C=n(2201),P=n(2262),A=n(7713),V=n(7737),H=n(3881);const B={class:"map"},M={style:{height:"500px",width:"auto"}},K={key:0},N={class:"nameh3"};var q={__name:"Map",setup(e){const t=(0,R.k)();(0,E.Jk)(t),(0,E.Jk)(t);let n=(0,P.qj)(),o=(0,l.Fl)((()=>t.getRoutes.map((e=>({...e,color:d()}))))),r=(0,P.iH)(12),u=e=>{let t=0,n=Math.ceil(e.length/500),o=[];for(let l=0;l<e.length;l+=n)o[t]=[e[l][1],e[l][0]],t++;return o},c=0,d=()=>{Math.floor(6*Math.random());const e=["rgb(60, 140, 255)","rgb(255, 0, 255)","rgb(255, 215, 0)","rgb(100, 100 ,200 )","rgb(0, 255 ,200 )","rgb(10, 255 ,0)","rgb(200, 250,20)"],t=`${e[c]}`;return c<6?c++:c=0,t},f=(0,P.qj)({});return(e,t)=>{const c=(0,l.up)("router-link");return(0,l.wg)(),(0,l.j4)(w.K,{fluid:"",class:"mapContainer"},{default:(0,l.w5)((()=>[(0,l._)("div",B,[(0,l._)("div",M,[(0,l.Wm)((0,P.SU)(A.iA),{ref_key:"map",ref:n,zoom:(0,P.SU)(r),"onUpdate:zoom":t[0]||(t[0]=e=>(0,P.dq)(r)?r.value=e:r=e),center:[37.5997592,-93.4091279],options:(0,P.SU)(f)},{default:(0,l.w5)((()=>[(0,l.Wm)((0,P.SU)(A.Hw),{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png","layer-type":"base",name:"OpenStreetMap"}),(0,P.SU)(o)?((0,l.wg)(),(0,l.iD)("div",K,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,P.SU)(o),(e=>((0,l.wg)(),(0,l.iD)("div",{key:e.name},[(0,l.Wm)((0,P.SU)(A.P6),{"lat-lngs":(0,P.SU)(u)(e.route.features[0].geometry.coordinates),color:e.color,weight:"4"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,P.SU)(A.Q2),null,{default:(0,l.w5)((()=>[(0,l.Wm)(c,{class:"popup",to:"/route/"+e.id},{default:(0,l.w5)((()=>[(0,l.Wm)(w.K,null,{default:(0,l.w5)((()=>[(0,l._)("h3",N,(0,a.zw)(e.name),1),(0,l.Wm)(H.C,{height:5,width:0}),(0,l._)("h4",null,"Length: "+(0,a.zw)(e.length)+" miles",1),(0,l._)("h4",null,"Difficulty: "+(0,a.zw)(e.difficulty),1),(0,l._)("h4",null,"Terrain: "+(0,a.zw)(e.terrain),1),(0,l.Wm)(i.o,null,{default:(0,l.w5)((()=>[(0,l.Wm)(s.D,{cols:"10"}),(0,l.Wm)(s.D,{cols:"2"},{default:(0,l.w5)((()=>[(0,l.Wm)(V.t,{icon:"mdi-launch"})])),_:1})])),_:1})])),_:2},1024)])),_:2},1032,["to"])])),_:2},1024)])),_:2},1032,["lat-lngs","color"])])))),128))])):(0,l.kq)("",!0)])),_:1},8,["zoom","options"])])])])),_:1})}}};const F=q;var I=F,J=n(1528),Y=n(7037),G=n(7695),Z=n(6393);const $={class:"gpxBtn"};var X={__name:"RoutesTable",setup(e){let t=(0,P.iH)(""),n=(0,P.qj)([{align:"start",key:"name",sortable:!0,title:"Routes"},{key:"gpx",title:""},{key:"length",title:"Length (miles)"},{key:"terrain",title:"Terrain"},{key:"difficulty",title:"Difficulty"},{key:"elevation",title:"Elevation Gain (feet)"}]);const o=(0,R.k)(),{getRoutes:u}=(0,E.Jk)(o);let i=(0,l.Fl)((()=>o.getRoutes)),s=()=>{window.scrollTo(0,0)},c=async(e,t)=>{e=atob(e);const n=new Blob([e],{type:"text/plain"});let o=await n.text(),l=t+".gpx",a=document.createElement("a"),r=new Blob([o],{type:"application/gpx+xml"});a.setAttribute("href",window.URL.createObjectURL(r)),a.setAttribute("download",l),a.dataset.downloadurl=["application/gpx+xml",a.download,a.href].join(":"),a.draggable=!0,a.classList.add("dragout"),a.click()};return(e,o)=>{const u=(0,l.up)("router-link");return(0,l.wg)(),(0,l.j4)(Y._,null,{default:(0,l.w5)((()=>[(0,l.Wm)(G.E,null,{default:(0,l.w5)((()=>[(0,l.Wm)(_.C),(0,l.Wm)(Z.h,{modelValue:(0,P.SU)(t),"onUpdate:modelValue":o[0]||(o[0]=e=>(0,P.dq)(t)?t.value=e:t=e),"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},null,8,["modelValue"])])),_:1}),(0,l.Wm)((0,P.SU)(J.y_),{class:"routes-table",headers:(0,P.SU)(n),items:(0,P.SU)(i),search:(0,P.SU)(t)},{"item.name":(0,l.w5)((({item:e})=>[(0,l.Wm)(u,{onClick:o[1]||(o[1]=e=>(0,P.SU)(s)()),to:"/route/"+e.id},{default:(0,l.w5)((()=>[(0,l.Uk)((0,a.zw)(e.name),1)])),_:2},1032,["to"])])),"item.gpx":(0,l.w5)((({item:e})=>[(0,l._)("div",$,[(0,l.Wm)(r.T,{icon:"mdi-download",onClick:t=>(0,P.SU)(c)(e.gpx,e.name)},null,8,["onClick"])])])),"item.length":(0,l.w5)((({item:e})=>[(0,l._)("p",null,(0,a.zw)(e.length),1)])),"item.difficulty":(0,l.w5)((({item:e})=>[(0,l._)("p",null,(0,a.zw)(e.difficulty),1)])),"item.terrain":(0,l.w5)((({item:e})=>[(0,l._)("p",null,(0,a.zw)(e.terrain),1)])),"item.elevation":(0,l.w5)((({item:e})=>[(0,l._)("p",null,(0,a.zw)(e.elevation),1)])),_:1},8,["headers","items","search"])])),_:1})}}};const Q=X;var ee=Q,te=n(5911),ne=n(6334);const oe=(0,l._)("br",null,null,-1),le=(0,l._)("br",null,null,-1);function ae(e,t,n,o,u,i){const s=(0,l.up)("CardMap"),c=(0,l.up)("router-link");return(0,l.wg)(),(0,l.j4)(w.K,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c,{onClick:t[0]||(t[0]=e=>i.scrollToTop()),class:"cardlink",to:"/route/"+n.route.id},{default:(0,l.w5)((()=>[(0,l.Wm)(Y._,{class:"mx-auto","max-width":"375","max-height":"500"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{route:n.route,cover:""},null,8,["route"]),(0,l.Wm)(G.E,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,a.zw)(n.route.name),1)])),_:1}),(0,l.Wm)(te.Z,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,a.zw)(n.route.length)+" miles ",1),oe,(0,l.Uk)(" "+(0,a.zw)(n.route.difficulty)+" ",1),le,(0,l.Uk)(" Elevation Gain: "+(0,a.zw)(n.route.elevation)+" Feet",1)])),_:1}),(0,l.Wm)(ne.h,null,{default:(0,l.w5)((()=>[(0,l.Wm)(r.T,{router:"",to:u.link},{default:(0,l.w5)((()=>[(0,l.Uk)(" View Route ")])),_:1},8,["to"])])),_:1})])),_:1})])),_:1},8,["to"])])),_:1})}const re={style:{height:"200px",width:"auto"}},ue={key:0};function ie(e,t,n,o,a,r){const u=(0,l.up)("l-tile-layer"),i=(0,l.up)("LPolyline"),s=(0,l.up)("l-map");return(0,l.wg)(),(0,l.iD)("div",re,[(0,l.Wm)(s,{ref:"map",zoom:a.zoom,"onUpdate:zoom":t[0]||(t[0]=e=>a.zoom=e),options:a.mapOptions},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png","layer-type":"base",name:"OpenStreetMap"}),n.route?((0,l.wg)(),(0,l.iD)("div",ue,[(0,l.Wm)(i,{onReady:r.red,ref:"geo","lat-lngs":r.poly(n.route.route.features[0].geometry.coordinates),color:e.blue},null,8,["onReady","lat-lngs","color"])])):(0,l.kq)("",!0)])),_:1},8,["zoom","options"])])}var se={props:{route:null},components:{LMap:A.iA,LTileLayer:A.Hw,LMarker:A.$R,LGeoJson:A.jK,LPolyline:A.P6},data(){return{zoom:12,markerLatLng:[37.5997592,-93.4091279],routes:null,mapOptions:{scrollWheelZoom:!1,interactive:!1,clickable:!1,zoomControl:!1,dragging:!1}}},methods:{poly(e){let t=0,n=Math.ceil(e.length/50),o=[];for(let l=0;l<e.length;l+=n)o[t]=[e[l][1],e[l][0]],t++;return console.log(o.length),o},red(){this.geo=this.$refs.geo.leafletObject,console.log("Bounds:",this.geo.getBounds()),this.$refs.map.leafletObject.fitBounds(this.geo.getBounds())}}};const ce=(0,m.Z)(se,[["render",ie]]);var de=ce,fe={props:{route:null,link:null},data(){return{link:"/route/"+this.route.id}},methods:{scrollToTop(){window.scrollTo(0,0)}},components:{CardMap:de}};const me=(0,m.Z)(fe,[["render",ae]]);var pe=me,ge=n(7230);const he={class:"search-filters"},we=(0,l._)("br",null,null,-1),_e={class:"filters"},ve=(0,l._)("div",{class:"filter-spacing"},null,-1),ye=(0,l._)("br",null,null,-1),be=(0,l._)("div",{class:"filter-spacing"},null,-1),ke=(0,l._)("br",null,null,-1),We=(0,l._)("div",{class:"filter-spacing"},null,-1),xe=(0,l._)("br",null,null,-1),je={key:0,style:{"text-align":"center"}},Se=(0,l._)("br",null,null,-1);var Ue={__name:"HomeView",setup(e){const t=(0,R.k)(),{getRoutes:n}=(0,E.Jk)(t);(0,l.Fl)((()=>t.getRoutes));const o=(0,P.iH)(""),a=(0,P.iH)(null),r=(0,P.iH)(null),u=(0,P.iH)(null),c=(0,P.iH)(null),d=["Any","Beginner","Intermediate","Expert"],f=(0,l.Fl)((()=>{let e=n.value;const t=o.value.toLowerCase().trim();return t&&(e=e.filter((e=>e.name.toLowerCase().includes(t)))),a.value&&(e=e.filter((e=>e.length>=a.value))),r.value&&(e=e.filter((e=>e.length<=r.value))),u.value&&"Any"!==u.value&&(e=e.filter((e=>e.difficulty===u.value))),c.value&&(e=e.filter((e=>e.elevation<=c.value))),e}));return(e,t)=>((0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(w.K,null,{default:(0,l.w5)((()=>[(0,l.Wm)(I)])),_:1}),(0,l.Wm)(w.K,null,{default:(0,l.w5)((()=>[(0,l._)("div",he,[(0,l.Wm)(Z.h,{variant:"solo",modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=e=>o.value=e),"append-icon":"mdi-magnify",label:"Search for a route!","single-line":"","hide-details":"",placeholder:"Search for a route!"},null,8,["modelValue"]),we,(0,l._)("div",_e,[(0,l.Wm)(Z.h,{variant:"solo",modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=e=>a.value=e),label:"Minimum Route Length","single-line":"","hide-details":"",type:"number"},null,8,["modelValue"]),ve,ye,(0,l.Wm)(Z.h,{variant:"solo",modelValue:r.value,"onUpdate:modelValue":t[2]||(t[2]=e=>r.value=e),label:"Maximum Route Length","single-line":"","hide-details":"",type:"number"},null,8,["modelValue"]),be,ke,(0,l.Wm)(Z.h,{variant:"solo",modelValue:c.value,"onUpdate:modelValue":t[3]||(t[3]=e=>c.value=e),label:"Maximum Elevation Gain","single-line":"","hide-details":"",type:"number"},null,8,["modelValue"]),We,xe,(0,l.Wm)(ge.rL,{class:"difficulty-select",variant:"solo",modelValue:u.value,"onUpdate:modelValue":t[4]||(t[4]=e=>u.value=e),items:d,label:"Difficulty"},null,8,["modelValue"])])]),(0,l.Wm)(i.o,null,{default:(0,l.w5)((()=>[(0,l.Wm)(w.K,null,{default:(0,l.w5)((()=>[(0,l.Wm)(i.o,{justify:"center"},{default:(0,l.w5)((()=>[(0,l.Wm)(s.D,{cols:"6"},{default:(0,l.w5)((()=>[f.value.length?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("h1",je," No route found "))])),_:1})])),_:1})])),_:1}),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(f.value,(e=>((0,l.wg)(),(0,l.j4)(s.D,{key:e,sm:"12",md:"6",lg:"3",xl:"2"},{default:(0,l.w5)((()=>[(0,l.Wm)(pe,{route:e},null,8,["route"])])),_:2},1024)))),128))])),_:1})])),_:1}),(0,l.Wm)(ee),Se],64))}};const Re=Ue;var Ee=Re,ze=n(2762);const Oe=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",{class:"text-left"},"Length"),(0,l._)("th",{class:"text-left"},"Terrain"),(0,l._)("th",{class:"text-left"},"Difficulty"),(0,l._)("th",{class:"text-left"},"Elevation Gain"),(0,l._)("th",null,"Try it out!")])],-1),Te={class:"table"},De=(0,l._)("th",{class:"text-left"},"Length",-1),Le=(0,l._)("th",{class:"text-left"},"Terrain",-1),Ce=(0,l._)("th",{class:"text-left"},"Elevation Gain",-1),Pe=(0,l._)("th",{class:"text-left"},"Difficulty",-1),Ae=(0,l._)("th",{class:"text-left"},"Try it out!",-1);function Ve(e,t,n,o,u,i){return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(ze.Y,{class:"d-none d-lg-block"},{default:(0,l.w5)((()=>[Oe,(0,l._)("tbody",null,[(0,l._)("tr",null,[(0,l._)("td",null,(0,a.zw)(n.route?.length)+" miles",1),(0,l._)("td",null,(0,a.zw)(n.route?.terrain),1),(0,l._)("td",null,(0,a.zw)(n.route?.difficulty),1),(0,l._)("td",null,(0,a.zw)(n.route?.elevation)+" feet",1),(0,l._)("td",null,[(0,l.Wm)(r.T,{onClick:t[0]||(t[0]=e=>i.downloadGPX(n.route.gpx,n.route.name)),icon:"mdi-download",style:{scale:"85%",color:"blue"}})])])])])),_:1}),(0,l.Wm)(ze.Y,{class:"d-lg-none"},{default:(0,l.w5)((()=>[(0,l._)("tbody",Te,[(0,l._)("tr",null,[De,(0,l._)("td",null,(0,a.zw)(n.route?.length)+" miles",1)]),(0,l._)("tr",null,[Le,(0,l._)("td",null,(0,a.zw)(n.route?.terrain),1)]),(0,l._)("tr",null,[Ce,(0,l._)("td",null,(0,a.zw)(n.route?.elevation)+" feet",1)]),(0,l._)("tr",null,[Pe,(0,l._)("td",null,(0,a.zw)(n.route?.difficulty),1)]),(0,l._)("tr",null,[Ae,(0,l._)("td",null,[(0,l.Wm)(r.T,{class:"gpxBtn",icon:"mdi-download",onClick:t[1]||(t[1]=e=>i.downloadGPX(n.route.gpx,n.route.name))})])])])])),_:1})],64)}var He={props:{route:null},methods:{async downloadGPX(e,t){e=atob(e);const n=new Blob([e],{type:"text/plain"});let o=await n.text(),l=t+".gpx",a=document.createElement("a"),r=new Blob([o],{type:"application/gpx+xml"});a.setAttribute("href",window.URL.createObjectURL(r)),a.setAttribute("download",l),a.dataset.downloadurl=["application/gpx+xml",a.download,a.href].join(":"),a.draggable=!0,a.classList.add("dragout"),a.click()}}};const Be=(0,m.Z)(He,[["render",Ve]]);var Me=Be;const Ke=(0,l._)("strong",{class:"text-decoration-bold"},"Description",-1);function Ne(e,t,n,o,r,u){return(0,l.wg)(),(0,l.j4)(w.K,{class:"desc"},{default:(0,l.w5)((()=>[Ke,(0,l._)("p",null,(0,a.zw)(n.route?.desc),1)])),_:1})}var qe={props:{route:null}};const Fe=(0,m.Z)(qe,[["render",Ne]]);var Ie=Fe;const Je=(0,l._)("strong",{class:"text-decoration-bold"},"Points of Interest",-1);function Ye(e,t,n,o,r,u){return(0,l.wg)(),(0,l.j4)(w.K,{class:"poi"},{default:(0,l.w5)((()=>[Je,(0,l._)("p",null,(0,a.zw)(n.route?.poi),1)])),_:1})}var Ge={props:{route:null}};const Ze=(0,m.Z)(Ge,[["render",Ye]]);var $e=Ze;const Xe={key:0,class:"map"},Qe={style:{height:"400px",width:"auto"}},et={key:0};function tt(e,t,n,o,a,r){const u=(0,l.up)("l-tile-layer"),i=(0,l.up)("l-geo-json"),s=(0,l.up)("l-map");return n.route.route?((0,l.wg)(),(0,l.iD)("div",Xe,[(0,l._)("div",Qe,[(0,l.Wm)(s,{ref:"map",zoom:"9",center:[37.5997592,-93.4091279]},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png","layer-type":"base",name:"OpenStreetMap"}),n.route?((0,l.wg)(),(0,l.iD)("div",et,[(0,l.Wm)(i,{ref:"geo",onReady:r.red,geojson:n.route.route},null,8,["onReady","geojson"])])):(0,l.kq)("",!0)])),_:1},512)])])):(0,l.kq)("",!0)}var nt={props:{route:null},components:{LMap:A.iA,LTileLayer:A.Hw,LMarker:A.$R,LGeoJson:A.jK},data(){return{zoom:11,markerLatLng:[37.5997592,-93.4091279],routes:null,mapOptions:{scrollWheelZoom:!1}}},methods:{red(){this.geo=this.$refs.geo.leafletObject,this.$refs.map.leafletObject.fitBounds(this.geo.getBounds())}}};const ot=(0,m.Z)(nt,[["render",tt]]);var lt=ot;const at={key:0,class:""},rt={class:"text-h4",style:{"text-align":"center"}},ut={class:"desc"},it={key:1,class:"noRoute"},st=(0,l._)("h1",null,"Loading...",-1);var ct={__name:"RouteView",setup(e){const t=(0,R.k)(),n=(0,C.yj)(),{getRoutebyID:o}=(0,E.Jk)(t);(0,P.iH)(12);let r=(0,l.Fl)((()=>t.getRoutebyID(n.params.id)));return(e,t)=>{const n=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("div",null,[(0,P.SU)(r)?((0,l.wg)(),(0,l.iD)("div",at,[(0,l.Wm)(i.o,{justify:"center"},{default:(0,l.w5)((()=>[(0,l.Wm)(s.D,{cols:"9"},{default:(0,l.w5)((()=>[(0,l.Wm)(lt,{route:(0,P.SU)(r)},null,8,["route"])])),_:1})])),_:1}),(0,l.Wm)(i.o,{justify:"center"},{default:(0,l.w5)((()=>[(0,l.Wm)(s.D,{cols:"9"},{default:(0,l.w5)((()=>[(0,l._)("div",rt,(0,a.zw)((0,P.SU)(r).name),1)])),_:1})])),_:1}),(0,l.Wm)(i.o,{justify:"center"},{default:(0,l.w5)((()=>[(0,l.Wm)(s.D,{cols:"9"},{default:(0,l.w5)((()=>[(0,l.Wm)(Me,{route:(0,P.SU)(r)},null,8,["route"])])),_:1})])),_:1}),(0,l.Wm)(i.o,{justify:"center"},{default:(0,l.w5)((()=>[(0,l.Wm)(s.D,{cols:"9"},{default:(0,l.w5)((()=>[(0,l._)("div",ut,[(0,l.Wm)(Ie,{route:(0,P.SU)(r)},null,8,["route"]),(0,l.Wm)($e,{route:(0,P.SU)(r)},null,8,["route"])])])),_:1})])),_:1})])):(0,l.kq)("",!0),(0,P.SU)(r)?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",it,[st,(0,l.Wm)(n,{class:"noRoutea",to:"/"},{default:(0,l.w5)((()=>[(0,l.Uk)("Back to Home")])),_:1})]))])}}};const dt=ct;var ft=dt;let mt=!1,pt=async()=>{try{let e=await fetch("http://localhost:3000/a1/user/checksession",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({check:"session"})});e=await e.json(),mt="passed"===e.message}catch(e){console.error(e,"caught err"),mt=!1}};const gt=[{path:"/route/:id",name:"Route",component:ft},{path:"/",name:"home",component:Ee},{path:"/about",name:"about",component:function(){return n.e(443).then(n.bind(n,9791))}},{path:"/edit",name:"Edit Routes",meta:{requiresAuth:!0},component:function(){return n.e(922).then(n.bind(n,7020))}},{path:"/login",name:"Login",component:function(){return n.e(535).then(n.bind(n,8609))}},{path:"/forgot",name:"ForgotPW",component:function(){return n.e(89).then(n.bind(n,2625))}},{path:"/routesuggestion",name:"RouteSuggestion",component:function(){return n.e(875).then(n.bind(n,5993))}},{path:"/:pathMatch(.*)*",name:"404",component:function(){return n.e(596).then(n.bind(n,7371))}}],ht=(0,C.p7)({history:(0,C.PO)("/"),routes:gt});ht.beforeEach((async(e,t,n)=>{e.matched.some((e=>e.meta.requiresAuth))?(mt=!1,await pt(),mt?n():(alert("unauthorized"),n("/"))):n()}));var wt=ht,_t=(n(9773),n(6579)),vt=(0,_t.Rd)();async function yt(){const e=await n.e(461).then(n.t.bind(n,5933,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}const bt=(0,E.WB)();yt(),(0,o.ri)(L).use(bt).use(wt).use(vt).mount("#app")},4642:function(e,t,n){n.d(t,{k:function(){return l}});var o=n(6086);const l=(0,o.Q_)("routeStore",{state:()=>({routes:[]}),getters:{getRoutes(){return this.routes},getRoutebyID:e=>t=>e.routes.find((e=>e.id==t))},actions:{async updateRoute(e){console.log(e,"in store");let t=await fetch(`http://localhost:3000/a1/geo/${e.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});t=await t.json()},async addRoute(e){this.routes.push(e);let t=await fetch("http://localhost:3000/a1/geo/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return t=await t.json(),this.getRoutesInit(),t},async deleteRoute(e){let t=await fetch(`http://localhost:3000/a1/geo/${e}`,{method:"DELETE"});t=await t.json(),this.routes=this.routes.filter((e=>e.id!==Number(t.id))),console.log(this.routes,"del route",e)},async getRoutesInit(){console.log({NODE_ENV:"production",VUE_APP_BASE_URL:"http://localhost:3000",VUE_APP_SECRETKEY:"ES_12de96ab391e4712913c7f621ff24580",VUE_APP_SERVER_DIR:"backend",VUE_APP_SITEKEY:"61e05036-5aa4-47a1-9e3e-9109ab2c1762",BASE_URL:"/"}.VUE_APP_API_URL);try{let e=await fetch("http://localhost:3000/v1/geo");e=await e.json(),this.routes=e.routes.map((e=>({...e,route:JSON.parse(e.route)})))}catch(e){console.error(e)}}}})}},t={};function n(o){var l=t[o];if(void 0!==l)return l.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,l,a){if(!o){var r=1/0;for(c=0;c<e.length;c++){o=e[c][0],l=e[c][1],a=e[c][2];for(var u=!0,i=0;i<o.length;i++)(!1&a||r>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[i])}))?o.splice(i--,1):(u=!1,a<r&&(r=a));if(u){e.splice(c--,1);var s=l();void 0!==s&&(t=s)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,l,a]}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(o,l){if(1&l&&(o=this(o)),8&l)return o;if("object"===typeof o&&o){if(4&l&&o.__esModule)return o;if(16&l&&"function"===typeof o.then)return o}var a=Object.create(null);n.r(a);var r={};e=e||[null,t({}),t([]),t(t)];for(var u=2&l&&o;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){r[e]=function(){return o[e]}}));return r["default"]=function(){return o},n.d(a,r),a}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+({89:"forgot",443:"about",461:"webfontloader",535:"login",596:"404",875:"RouteSuggestion",922:"edit"}[e]||e)+"."+{89:"ad45aec4",93:"e29755dd",243:"20a062a4",431:"2f34b60e",443:"c168ab79",461:"7af1b9f7",535:"d2d1bf87",596:"5d519a0e",633:"39042a2a",858:"0860bd34",875:"8a3b7888",922:"ec803a69"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+{89:"forgot",443:"about",535:"login",875:"RouteSuggestion",922:"edit"}[e]+"."+{89:"b93ff68b",443:"f8dfdf80",535:"694f7436",875:"9975bd13",922:"9956693f"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="gps-leaflet:";n.l=function(o,l,a,r){if(e[o])e[o].push(l);else{var u,i;if(void 0!==a)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){u=d;break}}u||(i=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=o),e[o]=[l];var f=function(t,n){u.onerror=u.onload=null,clearTimeout(m);var l=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),l&&l.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),i&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,l){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var r=function(n){if(a.onerror=a.onload=null,"load"===n.type)o();else{var r=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=r,i.request=u,a.parentNode&&a.parentNode.removeChild(a),l(i)}};return a.onerror=a.onload=r,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var l=n[o],a=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(a===e||a===t))return l}var r=document.getElementsByTagName("style");for(o=0;o<r.length;o++){l=r[o],a=l.getAttribute("data-href");if(a===e||a===t)return l}},o=function(o){return new Promise((function(l,a){var r=n.miniCssF(o),u=n.p+r;if(t(r,u))return l();e(o,u,null,l,a)}))},l={143:0};n.f.miniCss=function(e,t){var n={89:1,443:1,535:1,875:1,922:1};l[e]?t.push(l[e]):0!==l[e]&&n[e]&&t.push(l[e]=o(e).then((function(){l[e]=0}),(function(t){throw delete l[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var l=n.o(e,t)?e[t]:void 0;if(0!==l)if(l)o.push(l[2]);else{var a=new Promise((function(n,o){l=e[t]=[n,o]}));o.push(l[2]=a);var r=n.p+n.u(t),u=new Error,i=function(o){if(n.o(e,t)&&(l=e[t],0!==l&&(e[t]=void 0),l)){var a=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",u.name="ChunkLoadError",u.type=a,u.request=r,l[1](u)}};n.l(r,i,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var l,a,r=o[0],u=o[1],i=o[2],s=0;if(r.some((function(t){return 0!==e[t]}))){for(l in u)n.o(u,l)&&(n.m[l]=u[l]);if(i)var c=i(n)}for(t&&t(o);s<r.length;s++)a=r[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},o=self["webpackChunkgps_leaflet"]=self["webpackChunkgps_leaflet"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(3709)}));o=n.O(o)})();
//# sourceMappingURL=app.55c4d8a0.js.map