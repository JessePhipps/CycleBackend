"use strict";(self["webpackChunkgps_leaflet"]=self["webpackChunkgps_leaflet"]||[]).push([[535],{4659:function(e,t,l){l.r(t),l.d(t,{default:function(){return h}});var a=l(6252),n=l(2262),u=l(9963),o=l(6673),i=l(9357),s=l(9003),d=l(3379),r=l(6393);const c={style:{display:"flex","justify-content":"center"}},f=(0,a._)("h1",null,"Login",-1);var m={__name:"LoginView",setup(e){let t=(0,n.iH)(""),l=(0,n.iH)(""),m=(0,n.qj)([e=>e.length>0||"Please add a value to this field"]),p=async()=>{let e={username:t.value,password:l.value},a=await fetch("http://localhost:3000/v1/auth/login",{method:"POST",headers:{"Content-Type":"application/json",credentials:"include"},body:JSON.stringify(e)});a=await a.json()},h=async()=>{let e=await fetch("http://localhost:3000/v1/auth/logout",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({})});e=await e.json()},v=()=>{p()};return(e,p)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",c,[(0,a.Wm)(o.T,{onClick:(0,n.SU)(h),flat:""},{default:(0,a.w5)((()=>[(0,a.Uk)("Logout")])),_:1},8,["onClick"])]),(0,a.Wm)(s.o,{justify:"center"},{default:(0,a.w5)((()=>[(0,a.Wm)(d.D,{cols:"3"},{default:(0,a.w5)((()=>[(0,a.Wm)(i.O,{class:"form",onSubmit:(0,u.iM)((0,n.SU)(v),["prevent"])},{default:(0,a.w5)((()=>[f,(0,a.Wm)(r.h,{label:"Username",variant:"outlined",modelValue:(0,n.SU)(t),"onUpdate:modelValue":p[0]||(p[0]=e=>(0,n.dq)(t)?t.value=e:t=e),rules:(0,n.SU)(m),required:""},null,8,["modelValue","rules"]),(0,a.Wm)(r.h,{label:"Password",variant:"outlined",modelValue:(0,n.SU)(l),"onUpdate:modelValue":p[1]||(p[1]=e=>(0,n.dq)(l)?l.value=e:l=e),rules:(0,n.SU)(m),required:""},null,8,["modelValue","rules"]),(0,a.Wm)(o.T,{type:"submit",flat:""},{default:(0,a.w5)((()=>[(0,a.Uk)("Submit")])),_:1})])),_:1},8,["onSubmit"])])),_:1})])),_:1})],64))}};const p=m;var h=p},9357:function(e,t,l){l.d(t,{O:function(){return f}});var a=l(6252),n=l(9e3),u=l(9728),o=l(9483),i=l(2262),s=l(6533),d=l(6719),r=l(3099);const c=(0,s.U)({...(0,n.l)(),...(0,u.vC)()},"VForm"),f=(0,d.ev)()({name:"VForm",props:c(),emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,t){let{slots:l,emit:n}=t;const s=(0,u.Np)(e),d=(0,i.iH)();function c(e){e.preventDefault(),s.reset()}function f(e){const t=e,l=s.validate();t.then=l.then.bind(l),t.catch=l.catch.bind(l),t.finally=l.finally.bind(l),n("submit",t),t.defaultPrevented||l.then((e=>{let{valid:t}=e;t&&d.value?.submit()})),t.preventDefault()}return(0,r.L)((()=>(0,a.Wm)("form",{ref:d,class:["v-form",e.class],style:e.style,novalidate:!0,onReset:c,onSubmit:f},[l.default?.(s)]))),(0,o.F)(s,d)}})}}]);
//# sourceMappingURL=login.33a79822.js.map