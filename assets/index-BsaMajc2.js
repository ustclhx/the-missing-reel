(function(){const S=document.createElement("link").relList;if(S&&S.supports&&S.supports("modulepreload"))return;for(const I of document.querySelectorAll('link[rel="modulepreload"]'))f(I);new MutationObserver(I=>{for(const D of I)if(D.type==="childList")for(const j of D.addedNodes)j.tagName==="LINK"&&j.rel==="modulepreload"&&f(j)}).observe(document,{childList:!0,subtree:!0});function E(I){const D={};return I.integrity&&(D.integrity=I.integrity),I.referrerPolicy&&(D.referrerPolicy=I.referrerPolicy),I.crossOrigin==="use-credentials"?D.credentials="include":I.crossOrigin==="anonymous"?D.credentials="omit":D.credentials="same-origin",D}function f(I){if(I.ep)return;I.ep=!0;const D=E(I);fetch(I.href,D)}})();function Yh(m){return m&&m.__esModule&&Object.prototype.hasOwnProperty.call(m,"default")?m.default:m}var br={exports:{}},Ol={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nh;function gp(){if(Nh)return Ol;Nh=1;var m=Symbol.for("react.transitional.element"),S=Symbol.for("react.fragment");function E(f,I,D){var j=null;if(D!==void 0&&(j=""+D),I.key!==void 0&&(j=""+I.key),"key"in I){D={};for(var q in I)q!=="key"&&(D[q]=I[q])}else D=I;return I=D.ref,{$$typeof:m,type:f,key:j,ref:I!==void 0?I:null,props:D}}return Ol.Fragment=S,Ol.jsx=E,Ol.jsxs=E,Ol}var jh;function bp(){return jh||(jh=1,br.exports=gp()),br.exports}var o=bp(),vr={exports:{}},P={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Th;function vp(){if(Th)return P;Th=1;var m=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),j=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),H=Symbol.for("react.activity"),F=Symbol.iterator;function Ee(d){return d===null||typeof d!="object"?null:(d=F&&d[F]||d["@@iterator"],typeof d=="function"?d:null)}var De={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ie=Object.assign,Be={};function qe(d,u,N){this.props=d,this.context=u,this.refs=Be,this.updater=N||De}qe.prototype.isReactComponent={},qe.prototype.setState=function(d,u){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,u,"setState")},qe.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function Ce(){}Ce.prototype=qe.prototype;function $(d,u,N){this.props=d,this.context=u,this.refs=Be,this.updater=N||De}var le=$.prototype=new Ce;le.constructor=$,Ie(le,qe.prototype),le.isPureReactComponent=!0;var me=Array.isArray;function xe(){}var X={H:null,A:null,T:null,S:null},oe=Object.prototype.hasOwnProperty;function we(d,u,N){var M=N.ref;return{$$typeof:m,type:d,key:u,ref:M!==void 0?M:null,props:N}}function ut(d,u){return we(d.type,u,d.props)}function ve(d){return typeof d=="object"&&d!==null&&d.$$typeof===m}function Ve(d){var u={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(N){return u[N]})}var ze=/\/+/g;function pe(d,u){return typeof d=="object"&&d!==null&&d.key!=null?Ve(""+d.key):u.toString(36)}function Ae(d){switch(d.status){case"fulfilled":return d.value;case"rejected":throw d.reason;default:switch(typeof d.status=="string"?d.then(xe,xe):(d.status="pending",d.then(function(u){d.status==="pending"&&(d.status="fulfilled",d.value=u)},function(u){d.status==="pending"&&(d.status="rejected",d.reason=u)})),d.status){case"fulfilled":return d.value;case"rejected":throw d.reason}}throw d}function _(d,u,N,M,L){var R=typeof d;(R==="undefined"||R==="boolean")&&(d=null);var J=!1;if(d===null)J=!0;else switch(R){case"bigint":case"string":case"number":J=!0;break;case"object":switch(d.$$typeof){case m:case S:J=!0;break;case B:return J=d._init,_(J(d._payload),u,N,M,L)}}if(J)return L=L(d),J=M===""?"."+pe(d,0):M,me(L)?(N="",J!=null&&(N=J.replace(ze,"$&/")+"/"),_(L,u,N,"",function(K){return K})):L!=null&&(ve(L)&&(L=ut(L,N+(L.key==null||d&&d.key===L.key?"":(""+L.key).replace(ze,"$&/")+"/")+J)),u.push(L)),1;J=0;var ce=M===""?".":M+":";if(me(d))for(var T=0;T<d.length;T++)M=d[T],R=ce+pe(M,T),J+=_(M,u,N,R,L);else if(T=Ee(d),typeof T=="function")for(d=T.call(d),T=0;!(M=d.next()).done;)M=M.value,R=ce+pe(M,T++),J+=_(M,u,N,R,L);else if(R==="object"){if(typeof d.then=="function")return _(Ae(d),u,N,M,L);throw u=String(d),Error("Objects are not valid as a React child (found: "+(u==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":u)+"). If you meant to render a collection of children, use an array instead.")}return J}function C(d,u,N){if(d==null)return d;var M=[],L=0;return _(d,M,"","",function(R){return u.call(N,R,L++)}),M}function G(d){if(d._status===-1){var u=d._result;u=u(),u.then(function(N){(d._status===0||d._status===-1)&&(d._status=1,d._result=N)},function(N){(d._status===0||d._status===-1)&&(d._status=2,d._result=N)}),d._status===-1&&(d._status=0,d._result=u)}if(d._status===1)return d._result.default;throw d._result}var te=typeof reportError=="function"?reportError:function(d){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var u=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof d=="object"&&d!==null&&typeof d.message=="string"?String(d.message):String(d),error:d});if(!window.dispatchEvent(u))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",d);return}console.error(d)},ye={map:C,forEach:function(d,u,N){C(d,function(){u.apply(this,arguments)},N)},count:function(d){var u=0;return C(d,function(){u++}),u},toArray:function(d){return C(d,function(u){return u})||[]},only:function(d){if(!ve(d))throw Error("React.Children.only expected to receive a single React element child.");return d}};return P.Activity=H,P.Children=ye,P.Component=qe,P.Fragment=E,P.Profiler=I,P.PureComponent=$,P.StrictMode=f,P.Suspense=z,P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,P.__COMPILER_RUNTIME={__proto__:null,c:function(d){return X.H.useMemoCache(d)}},P.cache=function(d){return function(){return d.apply(null,arguments)}},P.cacheSignal=function(){return null},P.cloneElement=function(d,u,N){if(d==null)throw Error("The argument must be a React element, but you passed "+d+".");var M=Ie({},d.props),L=d.key;if(u!=null)for(R in u.key!==void 0&&(L=""+u.key),u)!oe.call(u,R)||R==="key"||R==="__self"||R==="__source"||R==="ref"&&u.ref===void 0||(M[R]=u[R]);var R=arguments.length-2;if(R===1)M.children=N;else if(1<R){for(var J=Array(R),ce=0;ce<R;ce++)J[ce]=arguments[ce+2];M.children=J}return we(d.type,L,M)},P.createContext=function(d){return d={$$typeof:j,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null},d.Provider=d,d.Consumer={$$typeof:D,_context:d},d},P.createElement=function(d,u,N){var M,L={},R=null;if(u!=null)for(M in u.key!==void 0&&(R=""+u.key),u)oe.call(u,M)&&M!=="key"&&M!=="__self"&&M!=="__source"&&(L[M]=u[M]);var J=arguments.length-2;if(J===1)L.children=N;else if(1<J){for(var ce=Array(J),T=0;T<J;T++)ce[T]=arguments[T+2];L.children=ce}if(d&&d.defaultProps)for(M in J=d.defaultProps,J)L[M]===void 0&&(L[M]=J[M]);return we(d,R,L)},P.createRef=function(){return{current:null}},P.forwardRef=function(d){return{$$typeof:q,render:d}},P.isValidElement=ve,P.lazy=function(d){return{$$typeof:B,_payload:{_status:-1,_result:d},_init:G}},P.memo=function(d,u){return{$$typeof:x,type:d,compare:u===void 0?null:u}},P.startTransition=function(d){var u=X.T,N={};X.T=N;try{var M=d(),L=X.S;L!==null&&L(N,M),typeof M=="object"&&M!==null&&typeof M.then=="function"&&M.then(xe,te)}catch(R){te(R)}finally{u!==null&&N.types!==null&&(u.types=N.types),X.T=u}},P.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},P.use=function(d){return X.H.use(d)},P.useActionState=function(d,u,N){return X.H.useActionState(d,u,N)},P.useCallback=function(d,u){return X.H.useCallback(d,u)},P.useContext=function(d){return X.H.useContext(d)},P.useDebugValue=function(){},P.useDeferredValue=function(d,u){return X.H.useDeferredValue(d,u)},P.useEffect=function(d,u){return X.H.useEffect(d,u)},P.useEffectEvent=function(d){return X.H.useEffectEvent(d)},P.useId=function(){return X.H.useId()},P.useImperativeHandle=function(d,u,N){return X.H.useImperativeHandle(d,u,N)},P.useInsertionEffect=function(d,u){return X.H.useInsertionEffect(d,u)},P.useLayoutEffect=function(d,u){return X.H.useLayoutEffect(d,u)},P.useMemo=function(d,u){return X.H.useMemo(d,u)},P.useOptimistic=function(d,u){return X.H.useOptimistic(d,u)},P.useReducer=function(d,u,N){return X.H.useReducer(d,u,N)},P.useRef=function(d){return X.H.useRef(d)},P.useState=function(d){return X.H.useState(d)},P.useSyncExternalStore=function(d,u,N){return X.H.useSyncExternalStore(d,u,N)},P.useTransition=function(){return X.H.useTransition()},P.version="19.2.3",P}var Eh;function Nr(){return Eh||(Eh=1,vr.exports=vp()),vr.exports}var O=Nr();const _p=Yh(O);var _r={exports:{}},Dl={},xr={exports:{}},wr={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zh;function xp(){return zh||(zh=1,(function(m){function S(_,C){var G=_.length;_.push(C);e:for(;0<G;){var te=G-1>>>1,ye=_[te];if(0<I(ye,C))_[te]=C,_[G]=ye,G=te;else break e}}function E(_){return _.length===0?null:_[0]}function f(_){if(_.length===0)return null;var C=_[0],G=_.pop();if(G!==C){_[0]=G;e:for(var te=0,ye=_.length,d=ye>>>1;te<d;){var u=2*(te+1)-1,N=_[u],M=u+1,L=_[M];if(0>I(N,G))M<ye&&0>I(L,N)?(_[te]=L,_[M]=G,te=M):(_[te]=N,_[u]=G,te=u);else if(M<ye&&0>I(L,G))_[te]=L,_[M]=G,te=M;else break e}}return C}function I(_,C){var G=_.sortIndex-C.sortIndex;return G!==0?G:_.id-C.id}if(m.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var D=performance;m.unstable_now=function(){return D.now()}}else{var j=Date,q=j.now();m.unstable_now=function(){return j.now()-q}}var z=[],x=[],B=1,H=null,F=3,Ee=!1,De=!1,Ie=!1,Be=!1,qe=typeof setTimeout=="function"?setTimeout:null,Ce=typeof clearTimeout=="function"?clearTimeout:null,$=typeof setImmediate<"u"?setImmediate:null;function le(_){for(var C=E(x);C!==null;){if(C.callback===null)f(x);else if(C.startTime<=_)f(x),C.sortIndex=C.expirationTime,S(z,C);else break;C=E(x)}}function me(_){if(Ie=!1,le(_),!De)if(E(z)!==null)De=!0,xe||(xe=!0,Ve());else{var C=E(x);C!==null&&Ae(me,C.startTime-_)}}var xe=!1,X=-1,oe=5,we=-1;function ut(){return Be?!0:!(m.unstable_now()-we<oe)}function ve(){if(Be=!1,xe){var _=m.unstable_now();we=_;var C=!0;try{e:{De=!1,Ie&&(Ie=!1,Ce(X),X=-1),Ee=!0;var G=F;try{t:{for(le(_),H=E(z);H!==null&&!(H.expirationTime>_&&ut());){var te=H.callback;if(typeof te=="function"){H.callback=null,F=H.priorityLevel;var ye=te(H.expirationTime<=_);if(_=m.unstable_now(),typeof ye=="function"){H.callback=ye,le(_),C=!0;break t}H===E(z)&&f(z),le(_)}else f(z);H=E(z)}if(H!==null)C=!0;else{var d=E(x);d!==null&&Ae(me,d.startTime-_),C=!1}}break e}finally{H=null,F=G,Ee=!1}C=void 0}}finally{C?Ve():xe=!1}}}var Ve;if(typeof $=="function")Ve=function(){$(ve)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,pe=ze.port2;ze.port1.onmessage=ve,Ve=function(){pe.postMessage(null)}}else Ve=function(){qe(ve,0)};function Ae(_,C){X=qe(function(){_(m.unstable_now())},C)}m.unstable_IdlePriority=5,m.unstable_ImmediatePriority=1,m.unstable_LowPriority=4,m.unstable_NormalPriority=3,m.unstable_Profiling=null,m.unstable_UserBlockingPriority=2,m.unstable_cancelCallback=function(_){_.callback=null},m.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):oe=0<_?Math.floor(1e3/_):5},m.unstable_getCurrentPriorityLevel=function(){return F},m.unstable_next=function(_){switch(F){case 1:case 2:case 3:var C=3;break;default:C=F}var G=F;F=C;try{return _()}finally{F=G}},m.unstable_requestPaint=function(){Be=!0},m.unstable_runWithPriority=function(_,C){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var G=F;F=_;try{return C()}finally{F=G}},m.unstable_scheduleCallback=function(_,C,G){var te=m.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?te+G:te):G=te,_){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=G+ye,_={id:B++,callback:C,priorityLevel:_,startTime:G,expirationTime:ye,sortIndex:-1},G>te?(_.sortIndex=G,S(x,_),E(z)===null&&_===E(x)&&(Ie?(Ce(X),X=-1):Ie=!0,Ae(me,G-te))):(_.sortIndex=ye,S(z,_),De||Ee||(De=!0,xe||(xe=!0,Ve()))),_},m.unstable_shouldYield=ut,m.unstable_wrapCallback=function(_){var C=F;return function(){var G=F;F=C;try{return _.apply(this,arguments)}finally{F=G}}}})(wr)),wr}var Mh;function wp(){return Mh||(Mh=1,xr.exports=xp()),xr.exports}var Ar={exports:{}},st={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oh;function Ap(){if(Oh)return st;Oh=1;var m=Nr();function S(z){var x="https://react.dev/errors/"+z;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var B=2;B<arguments.length;B++)x+="&args[]="+encodeURIComponent(arguments[B])}return"Minified React error #"+z+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function E(){}var f={d:{f:E,r:function(){throw Error(S(522))},D:E,C:E,L:E,m:E,X:E,S:E,M:E},p:0,findDOMNode:null},I=Symbol.for("react.portal");function D(z,x,B){var H=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:H==null?null:""+H,children:z,containerInfo:x,implementation:B}}var j=m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function q(z,x){if(z==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return st.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=f,st.createPortal=function(z,x){var B=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(S(299));return D(z,x,null,B)},st.flushSync=function(z){var x=j.T,B=f.p;try{if(j.T=null,f.p=2,z)return z()}finally{j.T=x,f.p=B,f.d.f()}},st.preconnect=function(z,x){typeof z=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,f.d.C(z,x))},st.prefetchDNS=function(z){typeof z=="string"&&f.d.D(z)},st.preinit=function(z,x){if(typeof z=="string"&&x&&typeof x.as=="string"){var B=x.as,H=q(B,x.crossOrigin),F=typeof x.integrity=="string"?x.integrity:void 0,Ee=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;B==="style"?f.d.S(z,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:H,integrity:F,fetchPriority:Ee}):B==="script"&&f.d.X(z,{crossOrigin:H,integrity:F,fetchPriority:Ee,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},st.preinitModule=function(z,x){if(typeof z=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var B=q(x.as,x.crossOrigin);f.d.M(z,{crossOrigin:B,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&f.d.M(z)},st.preload=function(z,x){if(typeof z=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var B=x.as,H=q(B,x.crossOrigin);f.d.L(z,B,{crossOrigin:H,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},st.preloadModule=function(z,x){if(typeof z=="string")if(x){var B=q(x.as,x.crossOrigin);f.d.m(z,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:B,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else f.d.m(z)},st.requestFormReset=function(z){f.d.r(z)},st.unstable_batchedUpdates=function(z,x){return z(x)},st.useFormState=function(z,x,B){return j.H.useFormState(z,x,B)},st.useFormStatus=function(){return j.H.useHostTransitionStatus()},st.version="19.2.3",st}var Dh;function Sp(){if(Dh)return Ar.exports;Dh=1;function m(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m)}catch(S){console.error(S)}}return m(),Ar.exports=Ap(),Ar.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ih;function kp(){if(Ih)return Dl;Ih=1;var m=wp(),S=Nr(),E=Sp();function f(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function I(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function D(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function j(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function q(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function z(e){if(D(e)!==e)throw Error(f(188))}function x(e){var t=e.alternate;if(!t){if(t=D(e),t===null)throw Error(f(188));return t!==e?null:e}for(var a=e,n=t;;){var l=a.return;if(l===null)break;var i=l.alternate;if(i===null){if(n=l.return,n!==null){a=n;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===a)return z(l),e;if(i===n)return z(l),t;i=i.sibling}throw Error(f(188))}if(a.return!==n.return)a=l,n=i;else{for(var s=!1,r=l.child;r;){if(r===a){s=!0,a=l,n=i;break}if(r===n){s=!0,n=l,a=i;break}r=r.sibling}if(!s){for(r=i.child;r;){if(r===a){s=!0,a=i,n=l;break}if(r===n){s=!0,n=i,a=l;break}r=r.sibling}if(!s)throw Error(f(189))}}if(a.alternate!==n)throw Error(f(190))}if(a.tag!==3)throw Error(f(188));return a.stateNode.current===a?e:t}function B(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=B(e),t!==null)return t;e=e.sibling}return null}var H=Object.assign,F=Symbol.for("react.element"),Ee=Symbol.for("react.transitional.element"),De=Symbol.for("react.portal"),Ie=Symbol.for("react.fragment"),Be=Symbol.for("react.strict_mode"),qe=Symbol.for("react.profiler"),Ce=Symbol.for("react.consumer"),$=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),me=Symbol.for("react.suspense"),xe=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),we=Symbol.for("react.activity"),ut=Symbol.for("react.memo_cache_sentinel"),ve=Symbol.iterator;function Ve(e){return e===null||typeof e!="object"?null:(e=ve&&e[ve]||e["@@iterator"],typeof e=="function"?e:null)}var ze=Symbol.for("react.client.reference");function pe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ze?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ie:return"Fragment";case qe:return"Profiler";case Be:return"StrictMode";case me:return"Suspense";case xe:return"SuspenseList";case we:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case De:return"Portal";case $:return e.displayName||"Context";case Ce:return(e._context.displayName||"Context")+".Consumer";case le:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return t=e.displayName||null,t!==null?t:pe(e.type)||"Memo";case oe:t=e._payload,e=e._init;try{return pe(e(t))}catch{}}return null}var Ae=Array.isArray,_=S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,C=E.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},te=[],ye=-1;function d(e){return{current:e}}function u(e){0>ye||(e.current=te[ye],te[ye]=null,ye--)}function N(e,t){ye++,te[ye]=e.current,e.current=t}var M=d(null),L=d(null),R=d(null),J=d(null);function ce(e,t){switch(N(R,t),N(L,e),N(M,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Wd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Wd(t),e=Jd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}u(M),N(M,e)}function T(){u(M),u(L),u(R)}function K(e){e.memoizedState!==null&&N(J,e);var t=M.current,a=Jd(t,e.type);t!==a&&(N(L,e),N(M,a))}function ae(e){L.current===e&&(u(M),u(L)),J.current===e&&(u(J),Tl._currentValue=G)}var se,Me;function tt(e){if(se===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);se=t&&t[1]||"",Me=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+se+e+Me}var $e=!1;function Je(e,t){if(!e||$e)return"";$e=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var k=function(){throw Error()};if(Object.defineProperty(k.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(k,[])}catch(v){var b=v}Reflect.construct(e,[],k)}else{try{k.call()}catch(v){b=v}e.call(k.prototype)}}else{try{throw Error()}catch(v){b=v}(k=e())&&typeof k.catch=="function"&&k.catch(function(){})}}catch(v){if(v&&b&&typeof v.stack=="string")return[v.stack,b.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=n.DetermineComponentFrameRoot(),s=i[0],r=i[1];if(s&&r){var c=s.split(`
`),g=r.split(`
`);for(l=n=0;n<c.length&&!c[n].includes("DetermineComponentFrameRoot");)n++;for(;l<g.length&&!g[l].includes("DetermineComponentFrameRoot");)l++;if(n===c.length||l===g.length)for(n=c.length-1,l=g.length-1;1<=n&&0<=l&&c[n]!==g[l];)l--;for(;1<=n&&0<=l;n--,l--)if(c[n]!==g[l]){if(n!==1||l!==1)do if(n--,l--,0>l||c[n]!==g[l]){var w=`
`+c[n].replace(" at new "," at ");return e.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",e.displayName)),w}while(1<=n&&0<=l);break}}}finally{$e=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?tt(a):""}function Ut(e,t){switch(e.tag){case 26:case 27:case 5:return tt(e.type);case 16:return tt("Lazy");case 13:return e.child!==t&&t!==null?tt("Suspense Fallback"):tt("Suspense");case 19:return tt("SuspenseList");case 0:case 15:return Je(e.type,!1);case 11:return Je(e.type.render,!1);case 1:return Je(e.type,!0);case 31:return tt("Activity");default:return""}}function La(e){try{var t="",a=null;do t+=Ut(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var ao=Object.prototype.hasOwnProperty,no=m.unstable_scheduleCallback,lo=m.unstable_cancelCallback,Kh=m.unstable_shouldYield,Wh=m.unstable_requestPaint,bt=m.unstable_now,Jh=m.unstable_getCurrentPriorityLevel,jr=m.unstable_ImmediatePriority,Tr=m.unstable_UserBlockingPriority,Cl=m.unstable_NormalPriority,Fh=m.unstable_LowPriority,Er=m.unstable_IdlePriority,$h=m.log,Ph=m.unstable_setDisableYieldValue,Vn=null,vt=null;function ca(e){if(typeof $h=="function"&&Ph(e),vt&&typeof vt.setStrictMode=="function")try{vt.setStrictMode(Vn,e)}catch{}}var _t=Math.clz32?Math.clz32:af,ef=Math.log,tf=Math.LN2;function af(e){return e>>>=0,e===0?32:31-(ef(e)/tf|0)|0}var Ll=256,Rl=262144,Hl=4194304;function Ra(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Bl(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var l=0,i=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var r=n&134217727;return r!==0?(n=r&~i,n!==0?l=Ra(n):(s&=r,s!==0?l=Ra(s):a||(a=r&~e,a!==0&&(l=Ra(a))))):(r=n&~i,r!==0?l=Ra(r):s!==0?l=Ra(s):a||(a=n&~e,a!==0&&(l=Ra(a)))),l===0?0:t!==0&&t!==l&&(t&i)===0&&(i=l&-l,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:l}function Un(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function nf(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zr(){var e=Hl;return Hl<<=1,(Hl&62914560)===0&&(Hl=4194304),e}function io(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Yn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function lf(e,t,a,n,l,i){var s=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var r=e.entanglements,c=e.expirationTimes,g=e.hiddenUpdates;for(a=s&~a;0<a;){var w=31-_t(a),k=1<<w;r[w]=0,c[w]=-1;var b=g[w];if(b!==null)for(g[w]=null,w=0;w<b.length;w++){var v=b[w];v!==null&&(v.lane&=-536870913)}a&=~k}n!==0&&Mr(e,n,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(s&~t))}function Mr(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-_t(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function Or(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-_t(a),l=1<<n;l&t|e[n]&t&&(e[n]|=t),a&=~l}}function Dr(e,t){var a=t&-t;return a=(a&42)!==0?1:oo(a),(a&(e.suspendedLanes|t))!==0?0:a}function oo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function so(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ir(){var e=C.p;return e!==0?e:(e=window.event,e===void 0?32:vh(e.type))}function Cr(e,t){var a=C.p;try{return C.p=e,t()}finally{C.p=a}}var da=Math.random().toString(36).slice(2),at="__reactFiber$"+da,dt="__reactProps$"+da,tn="__reactContainer$"+da,ro="__reactEvents$"+da,of="__reactListeners$"+da,sf="__reactHandles$"+da,Lr="__reactResources$"+da,qn="__reactMarker$"+da;function uo(e){delete e[at],delete e[dt],delete e[ro],delete e[of],delete e[sf]}function an(e){var t=e[at];if(t)return t;for(var a=e.parentNode;a;){if(t=a[tn]||a[at]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=nh(e);e!==null;){if(a=e[at])return a;e=nh(e)}return t}e=a,a=e.parentNode}return null}function nn(e){if(e=e[at]||e[tn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Gn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(f(33))}function ln(e){var t=e[Lr];return t||(t=e[Lr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Pe(e){e[qn]=!0}var Rr=new Set,Hr={};function Ha(e,t){on(e,t),on(e+"Capture",t)}function on(e,t){for(Hr[e]=t,e=0;e<t.length;e++)Rr.add(t[e])}var rf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Br={},Vr={};function uf(e){return ao.call(Vr,e)?!0:ao.call(Br,e)?!1:rf.test(e)?Vr[e]=!0:(Br[e]=!0,!1)}function Vl(e,t,a){if(uf(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Ul(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Xt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function Tt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ur(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cf(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){a=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function co(e){if(!e._valueTracker){var t=Ur(e)?"checked":"value";e._valueTracker=cf(e,t,""+e[t])}}function Yr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Ur(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Yl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var df=/[\n"\\]/g;function Et(e){return e.replace(df,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ho(e,t,a,n,l,i,s,r){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Tt(t)):e.value!==""+Tt(t)&&(e.value=""+Tt(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?fo(e,s,Tt(t)):a!=null?fo(e,s,Tt(a)):n!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.name=""+Tt(r):e.removeAttribute("name")}function qr(e,t,a,n,l,i,s,r){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){co(e);return}a=a!=null?""+Tt(a):"",t=t!=null?""+Tt(t):a,r||t===e.value||(e.value=t),e.defaultValue=t}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=r?e.checked:!!n,e.defaultChecked=!!n,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),co(e)}function fo(e,t,a){t==="number"&&Yl(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function sn(e,t,a,n){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&n&&(e[a].defaultSelected=!0)}else{for(a=""+Tt(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Gr(e,t,a){if(t!=null&&(t=""+Tt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Tt(a):""}function Qr(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(f(92));if(Ae(n)){if(1<n.length)throw Error(f(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=Tt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),co(e)}function rn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var hf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xr(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||hf.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Zr(e,t,a){if(t!=null&&typeof t!="object")throw Error(f(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var l in t)n=t[l],t.hasOwnProperty(l)&&a[l]!==n&&Xr(e,l,n)}else for(var i in t)t.hasOwnProperty(i)&&Xr(e,i,t[i])}function mo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ff=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),mf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ql(e){return mf.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zt(){}var po=null;function yo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var un=null,cn=null;function Kr(e){var t=nn(e);if(t&&(e=t.stateNode)){var a=e[dt]||null;e:switch(e=t.stateNode,t.type){case"input":if(ho(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Et(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var l=n[dt]||null;if(!l)throw Error(f(90));ho(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Yr(n)}break e;case"textarea":Gr(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&sn(e,!!a.multiple,t,!1)}}}var go=!1;function Wr(e,t,a){if(go)return e(t,a);go=!0;try{var n=e(t);return n}finally{if(go=!1,(un!==null||cn!==null)&&(zi(),un&&(t=un,e=cn,cn=un=null,Kr(t),e)))for(t=0;t<e.length;t++)Kr(e[t])}}function Qn(e,t){var a=e.stateNode;if(a===null)return null;var n=a[dt]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(f(231,t,typeof a));return a}var Kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bo=!1;if(Kt)try{var Xn={};Object.defineProperty(Xn,"passive",{get:function(){bo=!0}}),window.addEventListener("test",Xn,Xn),window.removeEventListener("test",Xn,Xn)}catch{bo=!1}var ha=null,vo=null,Gl=null;function Jr(){if(Gl)return Gl;var e,t=vo,a=t.length,n,l="value"in ha?ha.value:ha.textContent,i=l.length;for(e=0;e<a&&t[e]===l[e];e++);var s=a-e;for(n=1;n<=s&&t[a-n]===l[i-n];n++);return Gl=l.slice(e,1<n?1-n:void 0)}function Ql(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xl(){return!0}function Fr(){return!1}function ht(e){function t(a,n,l,i,s){this._reactName=a,this._targetInst=l,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var r in e)e.hasOwnProperty(r)&&(a=e[r],this[r]=a?a(i):i[r]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Xl:Fr,this.isPropagationStopped=Fr,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xl)},persist:function(){},isPersistent:Xl}),t}var Ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zl=ht(Ba),Zn=H({},Ba,{view:0,detail:0}),pf=ht(Zn),_o,xo,Kn,Kl=H({},Zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ao,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kn&&(Kn&&e.type==="mousemove"?(_o=e.screenX-Kn.screenX,xo=e.screenY-Kn.screenY):xo=_o=0,Kn=e),_o)},movementY:function(e){return"movementY"in e?e.movementY:xo}}),$r=ht(Kl),yf=H({},Kl,{dataTransfer:0}),gf=ht(yf),bf=H({},Zn,{relatedTarget:0}),wo=ht(bf),vf=H({},Ba,{animationName:0,elapsedTime:0,pseudoElement:0}),_f=ht(vf),xf=H({},Ba,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wf=ht(xf),Af=H({},Ba,{data:0}),Pr=ht(Af),Sf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Nf[e])?!!t[e]:!1}function Ao(){return jf}var Tf=H({},Zn,{key:function(e){if(e.key){var t=Sf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ql(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ao,charCode:function(e){return e.type==="keypress"?Ql(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ql(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ef=ht(Tf),zf=H({},Kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eu=ht(zf),Mf=H({},Zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ao}),Of=ht(Mf),Df=H({},Ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),If=ht(Df),Cf=H({},Kl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lf=ht(Cf),Rf=H({},Ba,{newState:0,oldState:0}),Hf=ht(Rf),Bf=[9,13,27,32],So=Kt&&"CompositionEvent"in window,Wn=null;Kt&&"documentMode"in document&&(Wn=document.documentMode);var Vf=Kt&&"TextEvent"in window&&!Wn,tu=Kt&&(!So||Wn&&8<Wn&&11>=Wn),au=" ",nu=!1;function lu(e,t){switch(e){case"keyup":return Bf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function iu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dn=!1;function Uf(e,t){switch(e){case"compositionend":return iu(t);case"keypress":return t.which!==32?null:(nu=!0,au);case"textInput":return e=t.data,e===au&&nu?null:e;default:return null}}function Yf(e,t){if(dn)return e==="compositionend"||!So&&lu(e,t)?(e=Jr(),Gl=vo=ha=null,dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return tu&&t.locale!=="ko"?null:t.data;default:return null}}var qf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ou(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!qf[e.type]:t==="textarea"}function su(e,t,a,n){un?cn?cn.push(n):cn=[n]:un=n,t=Ri(t,"onChange"),0<t.length&&(a=new Zl("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Jn=null,Fn=null;function Gf(e){qd(e,0)}function Wl(e){var t=Gn(e);if(Yr(t))return e}function ru(e,t){if(e==="change")return t}var uu=!1;if(Kt){var ko;if(Kt){var No="oninput"in document;if(!No){var cu=document.createElement("div");cu.setAttribute("oninput","return;"),No=typeof cu.oninput=="function"}ko=No}else ko=!1;uu=ko&&(!document.documentMode||9<document.documentMode)}function du(){Jn&&(Jn.detachEvent("onpropertychange",hu),Fn=Jn=null)}function hu(e){if(e.propertyName==="value"&&Wl(Fn)){var t=[];su(t,Fn,e,yo(e)),Wr(Gf,t)}}function Qf(e,t,a){e==="focusin"?(du(),Jn=t,Fn=a,Jn.attachEvent("onpropertychange",hu)):e==="focusout"&&du()}function Xf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wl(Fn)}function Zf(e,t){if(e==="click")return Wl(t)}function Kf(e,t){if(e==="input"||e==="change")return Wl(t)}function Wf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xt=typeof Object.is=="function"?Object.is:Wf;function $n(e,t){if(xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var l=a[n];if(!ao.call(t,l)||!xt(e[l],t[l]))return!1}return!0}function fu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mu(e,t){var a=fu(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=fu(a)}}function pu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?pu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Yl(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Yl(e.document)}return t}function jo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Jf=Kt&&"documentMode"in document&&11>=document.documentMode,hn=null,To=null,Pn=null,Eo=!1;function gu(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Eo||hn==null||hn!==Yl(n)||(n=hn,"selectionStart"in n&&jo(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Pn&&$n(Pn,n)||(Pn=n,n=Ri(To,"onSelect"),0<n.length&&(t=new Zl("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=hn)))}function Va(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var fn={animationend:Va("Animation","AnimationEnd"),animationiteration:Va("Animation","AnimationIteration"),animationstart:Va("Animation","AnimationStart"),transitionrun:Va("Transition","TransitionRun"),transitionstart:Va("Transition","TransitionStart"),transitioncancel:Va("Transition","TransitionCancel"),transitionend:Va("Transition","TransitionEnd")},zo={},bu={};Kt&&(bu=document.createElement("div").style,"AnimationEvent"in window||(delete fn.animationend.animation,delete fn.animationiteration.animation,delete fn.animationstart.animation),"TransitionEvent"in window||delete fn.transitionend.transition);function Ua(e){if(zo[e])return zo[e];if(!fn[e])return e;var t=fn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in bu)return zo[e]=t[a];return e}var vu=Ua("animationend"),_u=Ua("animationiteration"),xu=Ua("animationstart"),Ff=Ua("transitionrun"),$f=Ua("transitionstart"),Pf=Ua("transitioncancel"),wu=Ua("transitionend"),Au=new Map,Mo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Mo.push("scrollEnd");function Ht(e,t){Au.set(e,t),Ha(t,[e])}var Jl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},zt=[],mn=0,Oo=0;function Fl(){for(var e=mn,t=Oo=mn=0;t<e;){var a=zt[t];zt[t++]=null;var n=zt[t];zt[t++]=null;var l=zt[t];zt[t++]=null;var i=zt[t];if(zt[t++]=null,n!==null&&l!==null){var s=n.pending;s===null?l.next=l:(l.next=s.next,s.next=l),n.pending=l}i!==0&&Su(a,l,i)}}function $l(e,t,a,n){zt[mn++]=e,zt[mn++]=t,zt[mn++]=a,zt[mn++]=n,Oo|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Do(e,t,a,n){return $l(e,t,a,n),Pl(e)}function Ya(e,t){return $l(e,null,null,t),Pl(e)}function Su(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var l=!1,i=e.return;i!==null;)i.childLanes|=a,n=i.alternate,n!==null&&(n.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&t!==null&&(l=31-_t(a),e=i.hiddenUpdates,n=e[l],n===null?e[l]=[t]:n.push(t),t.lane=a|536870912),i):null}function Pl(e){if(50<xl)throw xl=0,Ys=null,Error(f(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var pn={};function em(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wt(e,t,a,n){return new em(e,t,a,n)}function Io(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wt(e,t){var a=e.alternate;return a===null?(a=wt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function ku(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ei(e,t,a,n,l,i){var s=0;if(n=e,typeof e=="function")Io(e)&&(s=1);else if(typeof e=="string")s=ip(e,a,M.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case we:return e=wt(31,a,t,l),e.elementType=we,e.lanes=i,e;case Ie:return qa(a.children,l,i,t);case Be:s=8,l|=24;break;case qe:return e=wt(12,a,t,l|2),e.elementType=qe,e.lanes=i,e;case me:return e=wt(13,a,t,l),e.elementType=me,e.lanes=i,e;case xe:return e=wt(19,a,t,l),e.elementType=xe,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $:s=10;break e;case Ce:s=9;break e;case le:s=11;break e;case X:s=14;break e;case oe:s=16,n=null;break e}s=29,a=Error(f(130,e===null?"null":typeof e,"")),n=null}return t=wt(s,a,t,l),t.elementType=e,t.type=n,t.lanes=i,t}function qa(e,t,a,n){return e=wt(7,e,n,t),e.lanes=a,e}function Co(e,t,a){return e=wt(6,e,null,t),e.lanes=a,e}function Nu(e){var t=wt(18,null,null,0);return t.stateNode=e,t}function Lo(e,t,a){return t=wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ju=new WeakMap;function Mt(e,t){if(typeof e=="object"&&e!==null){var a=ju.get(e);return a!==void 0?a:(t={value:e,source:t,stack:La(t)},ju.set(e,t),t)}return{value:e,source:t,stack:La(t)}}var yn=[],gn=0,ti=null,el=0,Ot=[],Dt=0,fa=null,Yt=1,qt="";function Jt(e,t){yn[gn++]=el,yn[gn++]=ti,ti=e,el=t}function Tu(e,t,a){Ot[Dt++]=Yt,Ot[Dt++]=qt,Ot[Dt++]=fa,fa=e;var n=Yt;e=qt;var l=32-_t(n)-1;n&=~(1<<l),a+=1;var i=32-_t(t)+l;if(30<i){var s=l-l%5;i=(n&(1<<s)-1).toString(32),n>>=s,l-=s,Yt=1<<32-_t(t)+l|a<<l|n,qt=i+e}else Yt=1<<i|a<<l|n,qt=e}function Ro(e){e.return!==null&&(Jt(e,1),Tu(e,1,0))}function Ho(e){for(;e===ti;)ti=yn[--gn],yn[gn]=null,el=yn[--gn],yn[gn]=null;for(;e===fa;)fa=Ot[--Dt],Ot[Dt]=null,qt=Ot[--Dt],Ot[Dt]=null,Yt=Ot[--Dt],Ot[Dt]=null}function Eu(e,t){Ot[Dt++]=Yt,Ot[Dt++]=qt,Ot[Dt++]=fa,Yt=t.id,qt=t.overflow,fa=e}var nt=null,Le=null,fe=!1,ma=null,It=!1,Bo=Error(f(519));function pa(e){var t=Error(f(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw tl(Mt(t,e)),Bo}function zu(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[at]=e,t[dt]=n,a){case"dialog":ue("cancel",t),ue("close",t);break;case"iframe":case"object":case"embed":ue("load",t);break;case"video":case"audio":for(a=0;a<Al.length;a++)ue(Al[a],t);break;case"source":ue("error",t);break;case"img":case"image":case"link":ue("error",t),ue("load",t);break;case"details":ue("toggle",t);break;case"input":ue("invalid",t),qr(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":ue("invalid",t);break;case"textarea":ue("invalid",t),Qr(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||Zd(t.textContent,a)?(n.popover!=null&&(ue("beforetoggle",t),ue("toggle",t)),n.onScroll!=null&&ue("scroll",t),n.onScrollEnd!=null&&ue("scrollend",t),n.onClick!=null&&(t.onclick=Zt),t=!0):t=!1,t||pa(e,!0)}function Mu(e){for(nt=e.return;nt;)switch(nt.tag){case 5:case 31:case 13:It=!1;return;case 27:case 3:It=!0;return;default:nt=nt.return}}function bn(e){if(e!==nt)return!1;if(!fe)return Mu(e),fe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||nr(e.type,e.memoizedProps)),a=!a),a&&Le&&pa(e),Mu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));Le=ah(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));Le=ah(e)}else t===27?(t=Le,Ea(e.type)?(e=rr,rr=null,Le=e):Le=t):Le=nt?Lt(e.stateNode.nextSibling):null;return!0}function Ga(){Le=nt=null,fe=!1}function Vo(){var e=ma;return e!==null&&(yt===null?yt=e:yt.push.apply(yt,e),ma=null),e}function tl(e){ma===null?ma=[e]:ma.push(e)}var Uo=d(null),Qa=null,Ft=null;function ya(e,t,a){N(Uo,t._currentValue),t._currentValue=a}function $t(e){e._currentValue=Uo.current,u(Uo)}function Yo(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function qo(e,t,a,n){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var s=l.child;i=i.firstContext;e:for(;i!==null;){var r=i;i=l;for(var c=0;c<t.length;c++)if(r.context===t[c]){i.lanes|=a,r=i.alternate,r!==null&&(r.lanes|=a),Yo(i.return,a,e),n||(s=null);break e}i=r.next}}else if(l.tag===18){if(s=l.return,s===null)throw Error(f(341));s.lanes|=a,i=s.alternate,i!==null&&(i.lanes|=a),Yo(s,a,e),s=null}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===e){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}}function vn(e,t,a,n){e=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var s=l.alternate;if(s===null)throw Error(f(387));if(s=s.memoizedProps,s!==null){var r=l.type;xt(l.pendingProps.value,s.value)||(e!==null?e.push(r):e=[r])}}else if(l===J.current){if(s=l.alternate,s===null)throw Error(f(387));s.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Tl):e=[Tl])}l=l.return}e!==null&&qo(t,e,a,n),t.flags|=262144}function ai(e){for(e=e.firstContext;e!==null;){if(!xt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Xa(e){Qa=e,Ft=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function lt(e){return Ou(Qa,e)}function ni(e,t){return Qa===null&&Xa(e),Ou(e,t)}function Ou(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Ft===null){if(e===null)throw Error(f(308));Ft=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ft=Ft.next=t;return a}var tm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},am=m.unstable_scheduleCallback,nm=m.unstable_NormalPriority,Xe={$$typeof:$,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Go(){return{controller:new tm,data:new Map,refCount:0}}function al(e){e.refCount--,e.refCount===0&&am(nm,function(){e.controller.abort()})}var nl=null,Qo=0,_n=0,xn=null;function lm(e,t){if(nl===null){var a=nl=[];Qo=0,_n=Ks(),xn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Qo++,t.then(Du,Du),t}function Du(){if(--Qo===0&&nl!==null){xn!==null&&(xn.status="fulfilled");var e=nl;nl=null,_n=0,xn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function im(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(n.status="rejected",n.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),n}var Iu=_.S;_.S=function(e,t){gd=bt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&lm(e,t),Iu!==null&&Iu(e,t)};var Za=d(null);function Xo(){var e=Za.current;return e!==null?e:Oe.pooledCache}function li(e,t){t===null?N(Za,Za.current):N(Za,t.pool)}function Cu(){var e=Xo();return e===null?null:{parent:Xe._currentValue,pool:e}}var wn=Error(f(460)),Zo=Error(f(474)),ii=Error(f(542)),oi={then:function(){}};function Lu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ru(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Zt,Zt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Bu(e),e;default:if(typeof t.status=="string")t.then(Zt,Zt);else{if(e=Oe,e!==null&&100<e.shellSuspendCounter)throw Error(f(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=n}},function(n){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Bu(e),e}throw Wa=t,wn}}function Ka(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Wa=a,wn):a}}var Wa=null;function Hu(){if(Wa===null)throw Error(f(459));var e=Wa;return Wa=null,e}function Bu(e){if(e===wn||e===ii)throw Error(f(483))}var An=null,ll=0;function si(e){var t=ll;return ll+=1,An===null&&(An=[]),Ru(An,e,t)}function il(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ri(e,t){throw t.$$typeof===F?Error(f(525)):(e=Object.prototype.toString.call(t),Error(f(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Vu(e){function t(p,h){if(e){var y=p.deletions;y===null?(p.deletions=[h],p.flags|=16):y.push(h)}}function a(p,h){if(!e)return null;for(;h!==null;)t(p,h),h=h.sibling;return null}function n(p){for(var h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function l(p,h){return p=Wt(p,h),p.index=0,p.sibling=null,p}function i(p,h,y){return p.index=y,e?(y=p.alternate,y!==null?(y=y.index,y<h?(p.flags|=67108866,h):y):(p.flags|=67108866,h)):(p.flags|=1048576,h)}function s(p){return e&&p.alternate===null&&(p.flags|=67108866),p}function r(p,h,y,A){return h===null||h.tag!==6?(h=Co(y,p.mode,A),h.return=p,h):(h=l(h,y),h.return=p,h)}function c(p,h,y,A){var Q=y.type;return Q===Ie?w(p,h,y.props.children,A,y.key):h!==null&&(h.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===oe&&Ka(Q)===h.type)?(h=l(h,y.props),il(h,y),h.return=p,h):(h=ei(y.type,y.key,y.props,null,p.mode,A),il(h,y),h.return=p,h)}function g(p,h,y,A){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=Lo(y,p.mode,A),h.return=p,h):(h=l(h,y.children||[]),h.return=p,h)}function w(p,h,y,A,Q){return h===null||h.tag!==7?(h=qa(y,p.mode,A,Q),h.return=p,h):(h=l(h,y),h.return=p,h)}function k(p,h,y){if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return h=Co(""+h,p.mode,y),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ee:return y=ei(h.type,h.key,h.props,null,p.mode,y),il(y,h),y.return=p,y;case De:return h=Lo(h,p.mode,y),h.return=p,h;case oe:return h=Ka(h),k(p,h,y)}if(Ae(h)||Ve(h))return h=qa(h,p.mode,y,null),h.return=p,h;if(typeof h.then=="function")return k(p,si(h),y);if(h.$$typeof===$)return k(p,ni(p,h),y);ri(p,h)}return null}function b(p,h,y,A){var Q=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return Q!==null?null:r(p,h,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ee:return y.key===Q?c(p,h,y,A):null;case De:return y.key===Q?g(p,h,y,A):null;case oe:return y=Ka(y),b(p,h,y,A)}if(Ae(y)||Ve(y))return Q!==null?null:w(p,h,y,A,null);if(typeof y.then=="function")return b(p,h,si(y),A);if(y.$$typeof===$)return b(p,h,ni(p,y),A);ri(p,y)}return null}function v(p,h,y,A,Q){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return p=p.get(y)||null,r(h,p,""+A,Q);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Ee:return p=p.get(A.key===null?y:A.key)||null,c(h,p,A,Q);case De:return p=p.get(A.key===null?y:A.key)||null,g(h,p,A,Q);case oe:return A=Ka(A),v(p,h,y,A,Q)}if(Ae(A)||Ve(A))return p=p.get(y)||null,w(h,p,A,Q,null);if(typeof A.then=="function")return v(p,h,y,si(A),Q);if(A.$$typeof===$)return v(p,h,y,ni(h,A),Q);ri(h,A)}return null}function V(p,h,y,A){for(var Q=null,ge=null,Y=h,ie=h=0,he=null;Y!==null&&ie<y.length;ie++){Y.index>ie?(he=Y,Y=null):he=Y.sibling;var be=b(p,Y,y[ie],A);if(be===null){Y===null&&(Y=he);break}e&&Y&&be.alternate===null&&t(p,Y),h=i(be,h,ie),ge===null?Q=be:ge.sibling=be,ge=be,Y=he}if(ie===y.length)return a(p,Y),fe&&Jt(p,ie),Q;if(Y===null){for(;ie<y.length;ie++)Y=k(p,y[ie],A),Y!==null&&(h=i(Y,h,ie),ge===null?Q=Y:ge.sibling=Y,ge=Y);return fe&&Jt(p,ie),Q}for(Y=n(Y);ie<y.length;ie++)he=v(Y,p,ie,y[ie],A),he!==null&&(e&&he.alternate!==null&&Y.delete(he.key===null?ie:he.key),h=i(he,h,ie),ge===null?Q=he:ge.sibling=he,ge=he);return e&&Y.forEach(function(Ia){return t(p,Ia)}),fe&&Jt(p,ie),Q}function W(p,h,y,A){if(y==null)throw Error(f(151));for(var Q=null,ge=null,Y=h,ie=h=0,he=null,be=y.next();Y!==null&&!be.done;ie++,be=y.next()){Y.index>ie?(he=Y,Y=null):he=Y.sibling;var Ia=b(p,Y,be.value,A);if(Ia===null){Y===null&&(Y=he);break}e&&Y&&Ia.alternate===null&&t(p,Y),h=i(Ia,h,ie),ge===null?Q=Ia:ge.sibling=Ia,ge=Ia,Y=he}if(be.done)return a(p,Y),fe&&Jt(p,ie),Q;if(Y===null){for(;!be.done;ie++,be=y.next())be=k(p,be.value,A),be!==null&&(h=i(be,h,ie),ge===null?Q=be:ge.sibling=be,ge=be);return fe&&Jt(p,ie),Q}for(Y=n(Y);!be.done;ie++,be=y.next())be=v(Y,p,ie,be.value,A),be!==null&&(e&&be.alternate!==null&&Y.delete(be.key===null?ie:be.key),h=i(be,h,ie),ge===null?Q=be:ge.sibling=be,ge=be);return e&&Y.forEach(function(yp){return t(p,yp)}),fe&&Jt(p,ie),Q}function Te(p,h,y,A){if(typeof y=="object"&&y!==null&&y.type===Ie&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ee:e:{for(var Q=y.key;h!==null;){if(h.key===Q){if(Q=y.type,Q===Ie){if(h.tag===7){a(p,h.sibling),A=l(h,y.props.children),A.return=p,p=A;break e}}else if(h.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===oe&&Ka(Q)===h.type){a(p,h.sibling),A=l(h,y.props),il(A,y),A.return=p,p=A;break e}a(p,h);break}else t(p,h);h=h.sibling}y.type===Ie?(A=qa(y.props.children,p.mode,A,y.key),A.return=p,p=A):(A=ei(y.type,y.key,y.props,null,p.mode,A),il(A,y),A.return=p,p=A)}return s(p);case De:e:{for(Q=y.key;h!==null;){if(h.key===Q)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){a(p,h.sibling),A=l(h,y.children||[]),A.return=p,p=A;break e}else{a(p,h);break}else t(p,h);h=h.sibling}A=Lo(y,p.mode,A),A.return=p,p=A}return s(p);case oe:return y=Ka(y),Te(p,h,y,A)}if(Ae(y))return V(p,h,y,A);if(Ve(y)){if(Q=Ve(y),typeof Q!="function")throw Error(f(150));return y=Q.call(y),W(p,h,y,A)}if(typeof y.then=="function")return Te(p,h,si(y),A);if(y.$$typeof===$)return Te(p,h,ni(p,y),A);ri(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,h!==null&&h.tag===6?(a(p,h.sibling),A=l(h,y),A.return=p,p=A):(a(p,h),A=Co(y,p.mode,A),A.return=p,p=A),s(p)):a(p,h)}return function(p,h,y,A){try{ll=0;var Q=Te(p,h,y,A);return An=null,Q}catch(Y){if(Y===wn||Y===ii)throw Y;var ge=wt(29,Y,null,p.mode);return ge.lanes=A,ge.return=p,ge}finally{}}}var Ja=Vu(!0),Uu=Vu(!1),ga=!1;function Ko(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function va(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(_e&2)!==0){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,t=Pl(e),Su(e,null,a),t}return $l(e,n,t,a),Pl(e)}function ol(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Or(e,a)}}function Jo(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var l=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?l=i=s:i=i.next=s,a=a.next}while(a!==null);i===null?l=i=t:i=i.next=t}else l=i=t;a={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Fo=!1;function sl(){if(Fo){var e=xn;if(e!==null)throw e}}function rl(e,t,a,n){Fo=!1;var l=e.updateQueue;ga=!1;var i=l.firstBaseUpdate,s=l.lastBaseUpdate,r=l.shared.pending;if(r!==null){l.shared.pending=null;var c=r,g=c.next;c.next=null,s===null?i=g:s.next=g,s=c;var w=e.alternate;w!==null&&(w=w.updateQueue,r=w.lastBaseUpdate,r!==s&&(r===null?w.firstBaseUpdate=g:r.next=g,w.lastBaseUpdate=c))}if(i!==null){var k=l.baseState;s=0,w=g=c=null,r=i;do{var b=r.lane&-536870913,v=b!==r.lane;if(v?(de&b)===b:(n&b)===b){b!==0&&b===_n&&(Fo=!0),w!==null&&(w=w.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});e:{var V=e,W=r;b=t;var Te=a;switch(W.tag){case 1:if(V=W.payload,typeof V=="function"){k=V.call(Te,k,b);break e}k=V;break e;case 3:V.flags=V.flags&-65537|128;case 0:if(V=W.payload,b=typeof V=="function"?V.call(Te,k,b):V,b==null)break e;k=H({},k,b);break e;case 2:ga=!0}}b=r.callback,b!==null&&(e.flags|=64,v&&(e.flags|=8192),v=l.callbacks,v===null?l.callbacks=[b]:v.push(b))}else v={lane:b,tag:r.tag,payload:r.payload,callback:r.callback,next:null},w===null?(g=w=v,c=k):w=w.next=v,s|=b;if(r=r.next,r===null){if(r=l.shared.pending,r===null)break;v=r,r=v.next,v.next=null,l.lastBaseUpdate=v,l.shared.pending=null}}while(!0);w===null&&(c=k),l.baseState=c,l.firstBaseUpdate=g,l.lastBaseUpdate=w,i===null&&(l.shared.lanes=0),Sa|=s,e.lanes=s,e.memoizedState=k}}function Yu(e,t){if(typeof e!="function")throw Error(f(191,e));e.call(t)}function qu(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Yu(a[e],t)}var Sn=d(null),ui=d(0);function Gu(e,t){e=sa,N(ui,e),N(Sn,t),sa=e|t.baseLanes}function $o(){N(ui,sa),N(Sn,Sn.current)}function Po(){sa=ui.current,u(Sn),u(ui)}var At=d(null),Ct=null;function _a(e){var t=e.alternate;N(Ge,Ge.current&1),N(At,e),Ct===null&&(t===null||Sn.current!==null||t.memoizedState!==null)&&(Ct=e)}function es(e){N(Ge,Ge.current),N(At,e),Ct===null&&(Ct=e)}function Qu(e){e.tag===22?(N(Ge,Ge.current),N(At,e),Ct===null&&(Ct=e)):xa()}function xa(){N(Ge,Ge.current),N(At,At.current)}function St(e){u(At),Ct===e&&(Ct=null),u(Ge)}var Ge=d(0);function ci(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||or(a)||sr(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Pt=0,ne=null,Ne=null,Ze=null,di=!1,kn=!1,Fa=!1,hi=0,ul=0,Nn=null,om=0;function Ue(){throw Error(f(321))}function ts(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!xt(e[a],t[a]))return!1;return!0}function as(e,t,a,n,l,i){return Pt=i,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=e===null||e.memoizedState===null?Tc:gs,Fa=!1,i=a(n,l),Fa=!1,kn&&(i=Zu(t,a,n,l)),Xu(e),i}function Xu(e){_.H=hl;var t=Ne!==null&&Ne.next!==null;if(Pt=0,Ze=Ne=ne=null,di=!1,ul=0,Nn=null,t)throw Error(f(300));e===null||Ke||(e=e.dependencies,e!==null&&ai(e)&&(Ke=!0))}function Zu(e,t,a,n){ne=e;var l=0;do{if(kn&&(Nn=null),ul=0,kn=!1,25<=l)throw Error(f(301));if(l+=1,Ze=Ne=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}_.H=Ec,i=t(a,n)}while(kn);return i}function sm(){var e=_.H,t=e.useState()[0];return t=typeof t.then=="function"?cl(t):t,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(ne.flags|=1024),t}function ns(){var e=hi!==0;return hi=0,e}function ls(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function is(e){if(di){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}di=!1}Pt=0,Ze=Ne=ne=null,kn=!1,ul=hi=0,Nn=null}function ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?ne.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function Qe(){if(Ne===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=Ze===null?ne.memoizedState:Ze.next;if(t!==null)Ze=t,Ne=e;else{if(e===null)throw ne.alternate===null?Error(f(467)):Error(f(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Ze===null?ne.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function fi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function cl(e){var t=ul;return ul+=1,Nn===null&&(Nn=[]),e=Ru(Nn,e,t),t=ne,(Ze===null?t.memoizedState:Ze.next)===null&&(t=t.alternate,_.H=t===null||t.memoizedState===null?Tc:gs),e}function mi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return cl(e);if(e.$$typeof===$)return lt(e)}throw Error(f(438,String(e)))}function os(e){var t=null,a=ne.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=ne.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=fi(),ne.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=ut;return t.index++,a}function ea(e,t){return typeof t=="function"?t(e):t}function pi(e){var t=Qe();return ss(t,Ne,e)}function ss(e,t,a){var n=e.queue;if(n===null)throw Error(f(311));n.lastRenderedReducer=a;var l=e.baseQueue,i=n.pending;if(i!==null){if(l!==null){var s=l.next;l.next=i.next,i.next=s}t.baseQueue=l=i,n.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var r=s=null,c=null,g=t,w=!1;do{var k=g.lane&-536870913;if(k!==g.lane?(de&k)===k:(Pt&k)===k){var b=g.revertLane;if(b===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),k===_n&&(w=!0);else if((Pt&b)===b){g=g.next,b===_n&&(w=!0);continue}else k={lane:0,revertLane:g.revertLane,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},c===null?(r=c=k,s=i):c=c.next=k,ne.lanes|=b,Sa|=b;k=g.action,Fa&&a(i,k),i=g.hasEagerState?g.eagerState:a(i,k)}else b={lane:k,revertLane:g.revertLane,gesture:g.gesture,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},c===null?(r=c=b,s=i):c=c.next=b,ne.lanes|=k,Sa|=k;g=g.next}while(g!==null&&g!==t);if(c===null?s=i:c.next=r,!xt(i,e.memoizedState)&&(Ke=!0,w&&(a=xn,a!==null)))throw a;e.memoizedState=i,e.baseState=s,e.baseQueue=c,n.lastRenderedState=i}return l===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function rs(e){var t=Qe(),a=t.queue;if(a===null)throw Error(f(311));a.lastRenderedReducer=e;var n=a.dispatch,l=a.pending,i=t.memoizedState;if(l!==null){a.pending=null;var s=l=l.next;do i=e(i,s.action),s=s.next;while(s!==l);xt(i,t.memoizedState)||(Ke=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,n]}function Ku(e,t,a){var n=ne,l=Qe(),i=fe;if(i){if(a===void 0)throw Error(f(407));a=a()}else a=t();var s=!xt((Ne||l).memoizedState,a);if(s&&(l.memoizedState=a,Ke=!0),l=l.queue,ds(Fu.bind(null,n,l,e),[e]),l.getSnapshot!==t||s||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,jn(9,{destroy:void 0},Ju.bind(null,n,l,a,t),null),Oe===null)throw Error(f(349));i||(Pt&127)!==0||Wu(n,t,a)}return a}function Wu(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ne.updateQueue,t===null?(t=fi(),ne.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Ju(e,t,a,n){t.value=a,t.getSnapshot=n,$u(t)&&Pu(e)}function Fu(e,t,a){return a(function(){$u(t)&&Pu(e)})}function $u(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!xt(e,a)}catch{return!0}}function Pu(e){var t=Ya(e,2);t!==null&&gt(t,e,2)}function us(e){var t=ct();if(typeof e=="function"){var a=e;if(e=a(),Fa){ca(!0);try{a()}finally{ca(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:e},t}function ec(e,t,a,n){return e.baseState=a,ss(e,Ne,typeof n=="function"?n:ea)}function rm(e,t,a,n,l){if(bi(e))throw Error(f(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){i.listeners.push(s)}};_.T!==null?a(!0):i.isTransition=!1,n(i),a=t.pending,a===null?(i.next=t.pending=i,tc(t,i)):(i.next=a.next,t.pending=a.next=i)}}function tc(e,t){var a=t.action,n=t.payload,l=e.state;if(t.isTransition){var i=_.T,s={};_.T=s;try{var r=a(l,n),c=_.S;c!==null&&c(s,r),ac(e,t,r)}catch(g){cs(e,t,g)}finally{i!==null&&s.types!==null&&(i.types=s.types),_.T=i}}else try{i=a(l,n),ac(e,t,i)}catch(g){cs(e,t,g)}}function ac(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){nc(e,t,n)},function(n){return cs(e,t,n)}):nc(e,t,a)}function nc(e,t,a){t.status="fulfilled",t.value=a,lc(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,tc(e,a)))}function cs(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,lc(t),t=t.next;while(t!==n)}e.action=null}function lc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ic(e,t){return t}function oc(e,t){if(fe){var a=Oe.formState;if(a!==null){e:{var n=ne;if(fe){if(Le){t:{for(var l=Le,i=It;l.nodeType!==8;){if(!i){l=null;break t}if(l=Lt(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){Le=Lt(l.nextSibling),n=l.data==="F!";break e}}pa(n)}n=!1}n&&(t=a[0])}}return a=ct(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ic,lastRenderedState:t},a.queue=n,a=kc.bind(null,ne,n),n.dispatch=a,n=us(!1),i=ys.bind(null,ne,!1,n.queue),n=ct(),l={state:t,dispatch:null,action:e,pending:null},n.queue=l,a=rm.bind(null,ne,l,i,a),l.dispatch=a,n.memoizedState=e,[t,a,!1]}function sc(e){var t=Qe();return rc(t,Ne,e)}function rc(e,t,a){if(t=ss(e,t,ic)[0],e=pi(ea)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=cl(t)}catch(s){throw s===wn?ii:s}else n=t;t=Qe();var l=t.queue,i=l.dispatch;return a!==t.memoizedState&&(ne.flags|=2048,jn(9,{destroy:void 0},um.bind(null,l,a),null)),[n,i,e]}function um(e,t){e.action=t}function uc(e){var t=Qe(),a=Ne;if(a!==null)return rc(t,a,e);Qe(),t=t.memoizedState,a=Qe();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function jn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=ne.updateQueue,t===null&&(t=fi(),ne.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function cc(){return Qe().memoizedState}function yi(e,t,a,n){var l=ct();ne.flags|=e,l.memoizedState=jn(1|t,{destroy:void 0},a,n===void 0?null:n)}function gi(e,t,a,n){var l=Qe();n=n===void 0?null:n;var i=l.memoizedState.inst;Ne!==null&&n!==null&&ts(n,Ne.memoizedState.deps)?l.memoizedState=jn(t,i,a,n):(ne.flags|=e,l.memoizedState=jn(1|t,i,a,n))}function dc(e,t){yi(8390656,8,e,t)}function ds(e,t){gi(2048,8,e,t)}function cm(e){ne.flags|=4;var t=ne.updateQueue;if(t===null)t=fi(),ne.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function hc(e){var t=Qe().memoizedState;return cm({ref:t,nextImpl:e}),function(){if((_e&2)!==0)throw Error(f(440));return t.impl.apply(void 0,arguments)}}function fc(e,t){return gi(4,2,e,t)}function mc(e,t){return gi(4,4,e,t)}function pc(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yc(e,t,a){a=a!=null?a.concat([e]):null,gi(4,4,pc.bind(null,t,e),a)}function hs(){}function gc(e,t){var a=Qe();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&ts(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function bc(e,t){var a=Qe();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&ts(t,n[1]))return n[0];if(n=e(),Fa){ca(!0);try{e()}finally{ca(!1)}}return a.memoizedState=[n,t],n}function fs(e,t,a){return a===void 0||(Pt&1073741824)!==0&&(de&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=vd(),ne.lanes|=e,Sa|=e,a)}function vc(e,t,a,n){return xt(a,t)?a:Sn.current!==null?(e=fs(e,a,n),xt(e,t)||(Ke=!0),e):(Pt&42)===0||(Pt&1073741824)!==0&&(de&261930)===0?(Ke=!0,e.memoizedState=a):(e=vd(),ne.lanes|=e,Sa|=e,t)}function _c(e,t,a,n,l){var i=C.p;C.p=i!==0&&8>i?i:8;var s=_.T,r={};_.T=r,ys(e,!1,t,a);try{var c=l(),g=_.S;if(g!==null&&g(r,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var w=im(c,n);dl(e,t,w,jt(e))}else dl(e,t,n,jt(e))}catch(k){dl(e,t,{then:function(){},status:"rejected",reason:k},jt())}finally{C.p=i,s!==null&&r.types!==null&&(s.types=r.types),_.T=s}}function dm(){}function ms(e,t,a,n){if(e.tag!==5)throw Error(f(476));var l=xc(e).queue;_c(e,l,t,G,a===null?dm:function(){return wc(e),a(n)})}function xc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:G},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function wc(e){var t=xc(e);t.next===null&&(t=e.alternate.memoizedState),dl(e,t.next.queue,{},jt())}function ps(){return lt(Tl)}function Ac(){return Qe().memoizedState}function Sc(){return Qe().memoizedState}function hm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=jt();e=ba(a);var n=va(t,e,a);n!==null&&(gt(n,t,a),ol(n,t,a)),t={cache:Go()},e.payload=t;return}t=t.return}}function fm(e,t,a){var n=jt();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},bi(e)?Nc(t,a):(a=Do(e,t,a,n),a!==null&&(gt(a,e,n),jc(a,t,n)))}function kc(e,t,a){var n=jt();dl(e,t,a,n)}function dl(e,t,a,n){var l={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(bi(e))Nc(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,r=i(s,a);if(l.hasEagerState=!0,l.eagerState=r,xt(r,s))return $l(e,t,l,0),Oe===null&&Fl(),!1}catch{}finally{}if(a=Do(e,t,l,n),a!==null)return gt(a,e,n),jc(a,t,n),!0}return!1}function ys(e,t,a,n){if(n={lane:2,revertLane:Ks(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},bi(e)){if(t)throw Error(f(479))}else t=Do(e,a,n,2),t!==null&&gt(t,e,2)}function bi(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function Nc(e,t){kn=di=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function jc(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Or(e,a)}}var hl={readContext:lt,use:mi,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useLayoutEffect:Ue,useInsertionEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useSyncExternalStore:Ue,useId:Ue,useHostTransitionStatus:Ue,useFormState:Ue,useActionState:Ue,useOptimistic:Ue,useMemoCache:Ue,useCacheRefresh:Ue};hl.useEffectEvent=Ue;var Tc={readContext:lt,use:mi,useCallback:function(e,t){return ct().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:dc,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,yi(4194308,4,pc.bind(null,t,e),a)},useLayoutEffect:function(e,t){return yi(4194308,4,e,t)},useInsertionEffect:function(e,t){yi(4,2,e,t)},useMemo:function(e,t){var a=ct();t=t===void 0?null:t;var n=e();if(Fa){ca(!0);try{e()}finally{ca(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=ct();if(a!==void 0){var l=a(t);if(Fa){ca(!0);try{a(t)}finally{ca(!1)}}}else l=t;return n.memoizedState=n.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},n.queue=e,e=e.dispatch=fm.bind(null,ne,e),[n.memoizedState,e]},useRef:function(e){var t=ct();return e={current:e},t.memoizedState=e},useState:function(e){e=us(e);var t=e.queue,a=kc.bind(null,ne,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:hs,useDeferredValue:function(e,t){var a=ct();return fs(a,e,t)},useTransition:function(){var e=us(!1);return e=_c.bind(null,ne,e.queue,!0,!1),ct().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=ne,l=ct();if(fe){if(a===void 0)throw Error(f(407));a=a()}else{if(a=t(),Oe===null)throw Error(f(349));(de&127)!==0||Wu(n,t,a)}l.memoizedState=a;var i={value:a,getSnapshot:t};return l.queue=i,dc(Fu.bind(null,n,i,e),[e]),n.flags|=2048,jn(9,{destroy:void 0},Ju.bind(null,n,i,a,t),null),a},useId:function(){var e=ct(),t=Oe.identifierPrefix;if(fe){var a=qt,n=Yt;a=(n&~(1<<32-_t(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=hi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=om++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ps,useFormState:oc,useActionState:oc,useOptimistic:function(e){var t=ct();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=ys.bind(null,ne,!0,a),a.dispatch=t,[e,t]},useMemoCache:os,useCacheRefresh:function(){return ct().memoizedState=hm.bind(null,ne)},useEffectEvent:function(e){var t=ct(),a={impl:e};return t.memoizedState=a,function(){if((_e&2)!==0)throw Error(f(440));return a.impl.apply(void 0,arguments)}}},gs={readContext:lt,use:mi,useCallback:gc,useContext:lt,useEffect:ds,useImperativeHandle:yc,useInsertionEffect:fc,useLayoutEffect:mc,useMemo:bc,useReducer:pi,useRef:cc,useState:function(){return pi(ea)},useDebugValue:hs,useDeferredValue:function(e,t){var a=Qe();return vc(a,Ne.memoizedState,e,t)},useTransition:function(){var e=pi(ea)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:cl(e),t]},useSyncExternalStore:Ku,useId:Ac,useHostTransitionStatus:ps,useFormState:sc,useActionState:sc,useOptimistic:function(e,t){var a=Qe();return ec(a,Ne,e,t)},useMemoCache:os,useCacheRefresh:Sc};gs.useEffectEvent=hc;var Ec={readContext:lt,use:mi,useCallback:gc,useContext:lt,useEffect:ds,useImperativeHandle:yc,useInsertionEffect:fc,useLayoutEffect:mc,useMemo:bc,useReducer:rs,useRef:cc,useState:function(){return rs(ea)},useDebugValue:hs,useDeferredValue:function(e,t){var a=Qe();return Ne===null?fs(a,e,t):vc(a,Ne.memoizedState,e,t)},useTransition:function(){var e=rs(ea)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:cl(e),t]},useSyncExternalStore:Ku,useId:Ac,useHostTransitionStatus:ps,useFormState:uc,useActionState:uc,useOptimistic:function(e,t){var a=Qe();return Ne!==null?ec(a,Ne,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:os,useCacheRefresh:Sc};Ec.useEffectEvent=hc;function bs(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:H({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var vs={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=jt(),l=ba(n);l.payload=t,a!=null&&(l.callback=a),t=va(e,l,n),t!==null&&(gt(t,e,n),ol(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=jt(),l=ba(n);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=va(e,l,n),t!==null&&(gt(t,e,n),ol(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=jt(),n=ba(a);n.tag=2,t!=null&&(n.callback=t),t=va(e,n,a),t!==null&&(gt(t,e,a),ol(t,e,a))}};function zc(e,t,a,n,l,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,s):t.prototype&&t.prototype.isPureReactComponent?!$n(a,n)||!$n(l,i):!0}function Mc(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&vs.enqueueReplaceState(t,t.state,null)}function $a(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=H({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function Oc(e){Jl(e)}function Dc(e){console.error(e)}function Ic(e){Jl(e)}function vi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Cc(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function _s(e,t,a){return a=ba(a),a.tag=3,a.payload={element:null},a.callback=function(){vi(e,t)},a}function Lc(e){return e=ba(e),e.tag=3,e}function Rc(e,t,a,n){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var i=n.value;e.payload=function(){return l(i)},e.callback=function(){Cc(t,a,n)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Cc(t,a,n),typeof l!="function"&&(ka===null?ka=new Set([this]):ka.add(this));var r=n.stack;this.componentDidCatch(n.value,{componentStack:r!==null?r:""})})}function mm(e,t,a,n,l){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&vn(t,a,l,!0),a=At.current,a!==null){switch(a.tag){case 31:case 13:return Ct===null?Mi():a.alternate===null&&Ye===0&&(Ye=3),a.flags&=-257,a.flags|=65536,a.lanes=l,n===oi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),Qs(e,n,l)),!1;case 22:return a.flags|=65536,n===oi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),Qs(e,n,l)),!1}throw Error(f(435,a.tag))}return Qs(e,n,l),Mi(),!1}if(fe)return t=At.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,n!==Bo&&(e=Error(f(422),{cause:n}),tl(Mt(e,a)))):(n!==Bo&&(t=Error(f(423),{cause:n}),tl(Mt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,n=Mt(n,a),l=_s(e.stateNode,n,l),Jo(e,l),Ye!==4&&(Ye=2)),!1;var i=Error(f(520),{cause:n});if(i=Mt(i,a),_l===null?_l=[i]:_l.push(i),Ye!==4&&(Ye=2),t===null)return!0;n=Mt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=_s(a.stateNode,n,e),Jo(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ka===null||!ka.has(i))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Lc(l),Rc(l,e,a,n),Jo(a,l),!1}a=a.return}while(a!==null);return!1}var xs=Error(f(461)),Ke=!1;function it(e,t,a,n){t.child=e===null?Uu(t,null,a,n):Ja(t,e.child,a,n)}function Hc(e,t,a,n,l){a=a.render;var i=t.ref;if("ref"in n){var s={};for(var r in n)r!=="ref"&&(s[r]=n[r])}else s=n;return Xa(t),n=as(e,t,a,s,i,l),r=ns(),e!==null&&!Ke?(ls(e,t,l),ta(e,t,l)):(fe&&r&&Ro(t),t.flags|=1,it(e,t,n,l),t.child)}function Bc(e,t,a,n,l){if(e===null){var i=a.type;return typeof i=="function"&&!Io(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Vc(e,t,i,n,l)):(e=ei(a.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Es(e,l)){var s=i.memoizedProps;if(a=a.compare,a=a!==null?a:$n,a(s,n)&&e.ref===t.ref)return ta(e,t,l)}return t.flags|=1,e=Wt(i,n),e.ref=t.ref,e.return=t,t.child=e}function Vc(e,t,a,n,l){if(e!==null){var i=e.memoizedProps;if($n(i,n)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=n=i,Es(e,l))(e.flags&131072)!==0&&(Ke=!0);else return t.lanes=e.lanes,ta(e,t,l)}return ws(e,t,a,n,l)}function Uc(e,t,a,n){var l=n.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(n=t.child=e.child,l=0;n!==null;)l=l|n.lanes|n.childLanes,n=n.sibling;n=l&~i}else n=0,t.child=null;return Yc(e,t,i,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&li(t,i!==null?i.cachePool:null),i!==null?Gu(t,i):$o(),Qu(t);else return n=t.lanes=536870912,Yc(e,t,i!==null?i.baseLanes|a:a,a,n)}else i!==null?(li(t,i.cachePool),Gu(t,i),xa(),t.memoizedState=null):(e!==null&&li(t,null),$o(),xa());return it(e,t,l,a),t.child}function fl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Yc(e,t,a,n,l){var i=Xo();return i=i===null?null:{parent:Xe._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&li(t,null),$o(),Qu(t),e!==null&&vn(e,t,n,!0),t.childLanes=l,null}function _i(e,t){return t=wi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function qc(e,t,a){return Ja(t,e.child,null,a),e=_i(t,t.pendingProps),e.flags|=2,St(t),t.memoizedState=null,e}function pm(e,t,a){var n=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(fe){if(n.mode==="hidden")return e=_i(t,n),t.lanes=536870912,fl(null,e);if(es(t),(e=Le)?(e=th(e,It),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:fa!==null?{id:Yt,overflow:qt}:null,retryLane:536870912,hydrationErrors:null},a=Nu(e),a.return=t,t.child=a,nt=t,Le=null)):e=null,e===null)throw pa(t);return t.lanes=536870912,null}return _i(t,n)}var i=e.memoizedState;if(i!==null){var s=i.dehydrated;if(es(t),l)if(t.flags&256)t.flags&=-257,t=qc(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(f(558));else if(Ke||vn(e,t,a,!1),l=(a&e.childLanes)!==0,Ke||l){if(n=Oe,n!==null&&(s=Dr(n,a),s!==0&&s!==i.retryLane))throw i.retryLane=s,Ya(e,s),gt(n,e,s),xs;Mi(),t=qc(e,t,a)}else e=i.treeContext,Le=Lt(s.nextSibling),nt=t,fe=!0,ma=null,It=!1,e!==null&&Eu(t,e),t=_i(t,n),t.flags|=4096;return t}return e=Wt(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function xi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(f(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function ws(e,t,a,n,l){return Xa(t),a=as(e,t,a,n,void 0,l),n=ns(),e!==null&&!Ke?(ls(e,t,l),ta(e,t,l)):(fe&&n&&Ro(t),t.flags|=1,it(e,t,a,l),t.child)}function Gc(e,t,a,n,l,i){return Xa(t),t.updateQueue=null,a=Zu(t,n,a,l),Xu(e),n=ns(),e!==null&&!Ke?(ls(e,t,i),ta(e,t,i)):(fe&&n&&Ro(t),t.flags|=1,it(e,t,a,i),t.child)}function Qc(e,t,a,n,l){if(Xa(t),t.stateNode===null){var i=pn,s=a.contextType;typeof s=="object"&&s!==null&&(i=lt(s)),i=new a(n,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=vs,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=n,i.state=t.memoizedState,i.refs={},Ko(t),s=a.contextType,i.context=typeof s=="object"&&s!==null?lt(s):pn,i.state=t.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(bs(t,a,s,n),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&vs.enqueueReplaceState(i,i.state,null),rl(t,n,i,l),sl(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){i=t.stateNode;var r=t.memoizedProps,c=$a(a,r);i.props=c;var g=i.context,w=a.contextType;s=pn,typeof w=="object"&&w!==null&&(s=lt(w));var k=a.getDerivedStateFromProps;w=typeof k=="function"||typeof i.getSnapshotBeforeUpdate=="function",r=t.pendingProps!==r,w||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r||g!==s)&&Mc(t,i,n,s),ga=!1;var b=t.memoizedState;i.state=b,rl(t,n,i,l),sl(),g=t.memoizedState,r||b!==g||ga?(typeof k=="function"&&(bs(t,a,k,n),g=t.memoizedState),(c=ga||zc(t,a,c,n,b,g,s))?(w||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=g),i.props=n,i.state=g,i.context=s,n=c):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,Wo(e,t),s=t.memoizedProps,w=$a(a,s),i.props=w,k=t.pendingProps,b=i.context,g=a.contextType,c=pn,typeof g=="object"&&g!==null&&(c=lt(g)),r=a.getDerivedStateFromProps,(g=typeof r=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==k||b!==c)&&Mc(t,i,n,c),ga=!1,b=t.memoizedState,i.state=b,rl(t,n,i,l),sl();var v=t.memoizedState;s!==k||b!==v||ga||e!==null&&e.dependencies!==null&&ai(e.dependencies)?(typeof r=="function"&&(bs(t,a,r,n),v=t.memoizedState),(w=ga||zc(t,a,w,n,b,v,c)||e!==null&&e.dependencies!==null&&ai(e.dependencies))?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,v,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,v,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=v),i.props=n,i.state=v,i.context=c,n=w):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),n=!1)}return i=n,xi(e,t),n=(t.flags&128)!==0,i||n?(i=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&n?(t.child=Ja(t,e.child,null,l),t.child=Ja(t,null,a,l)):it(e,t,a,l),t.memoizedState=i.state,e=t.child):e=ta(e,t,l),e}function Xc(e,t,a,n){return Ga(),t.flags|=256,it(e,t,a,n),t.child}var As={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ss(e){return{baseLanes:e,cachePool:Cu()}}function ks(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Nt),e}function Zc(e,t,a){var n=t.pendingProps,l=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(Ge.current&2)!==0),s&&(l=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(fe){if(l?_a(t):xa(),(e=Le)?(e=th(e,It),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:fa!==null?{id:Yt,overflow:qt}:null,retryLane:536870912,hydrationErrors:null},a=Nu(e),a.return=t,t.child=a,nt=t,Le=null)):e=null,e===null)throw pa(t);return sr(e)?t.lanes=32:t.lanes=536870912,null}var r=n.children;return n=n.fallback,l?(xa(),l=t.mode,r=wi({mode:"hidden",children:r},l),n=qa(n,l,a,null),r.return=t,n.return=t,r.sibling=n,t.child=r,n=t.child,n.memoizedState=Ss(a),n.childLanes=ks(e,s,a),t.memoizedState=As,fl(null,n)):(_a(t),Ns(t,r))}var c=e.memoizedState;if(c!==null&&(r=c.dehydrated,r!==null)){if(i)t.flags&256?(_a(t),t.flags&=-257,t=js(e,t,a)):t.memoizedState!==null?(xa(),t.child=e.child,t.flags|=128,t=null):(xa(),r=n.fallback,l=t.mode,n=wi({mode:"visible",children:n.children},l),r=qa(r,l,a,null),r.flags|=2,n.return=t,r.return=t,n.sibling=r,t.child=n,Ja(t,e.child,null,a),n=t.child,n.memoizedState=Ss(a),n.childLanes=ks(e,s,a),t.memoizedState=As,t=fl(null,n));else if(_a(t),sr(r)){if(s=r.nextSibling&&r.nextSibling.dataset,s)var g=s.dgst;s=g,n=Error(f(419)),n.stack="",n.digest=s,tl({value:n,source:null,stack:null}),t=js(e,t,a)}else if(Ke||vn(e,t,a,!1),s=(a&e.childLanes)!==0,Ke||s){if(s=Oe,s!==null&&(n=Dr(s,a),n!==0&&n!==c.retryLane))throw c.retryLane=n,Ya(e,n),gt(s,e,n),xs;or(r)||Mi(),t=js(e,t,a)}else or(r)?(t.flags|=192,t.child=e.child,t=null):(e=c.treeContext,Le=Lt(r.nextSibling),nt=t,fe=!0,ma=null,It=!1,e!==null&&Eu(t,e),t=Ns(t,n.children),t.flags|=4096);return t}return l?(xa(),r=n.fallback,l=t.mode,c=e.child,g=c.sibling,n=Wt(c,{mode:"hidden",children:n.children}),n.subtreeFlags=c.subtreeFlags&65011712,g!==null?r=Wt(g,r):(r=qa(r,l,a,null),r.flags|=2),r.return=t,n.return=t,n.sibling=r,t.child=n,fl(null,n),n=t.child,r=e.child.memoizedState,r===null?r=Ss(a):(l=r.cachePool,l!==null?(c=Xe._currentValue,l=l.parent!==c?{parent:c,pool:c}:l):l=Cu(),r={baseLanes:r.baseLanes|a,cachePool:l}),n.memoizedState=r,n.childLanes=ks(e,s,a),t.memoizedState=As,fl(e.child,n)):(_a(t),a=e.child,e=a.sibling,a=Wt(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=a,t.memoizedState=null,a)}function Ns(e,t){return t=wi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function wi(e,t){return e=wt(22,e,null,t),e.lanes=0,e}function js(e,t,a){return Ja(t,e.child,null,a),e=Ns(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Kc(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Yo(e.return,t,a)}function Ts(e,t,a,n,l,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:l,treeForkCount:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=a,s.tailMode=l,s.treeForkCount=i)}function Wc(e,t,a){var n=t.pendingProps,l=n.revealOrder,i=n.tail;n=n.children;var s=Ge.current,r=(s&2)!==0;if(r?(s=s&1|2,t.flags|=128):s&=1,N(Ge,s),it(e,t,n,a),n=fe?el:0,!r&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Kc(e,a,t);else if(e.tag===19)Kc(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&ci(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),Ts(t,!1,l,a,i,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ci(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}Ts(t,!0,a,null,i,n);break;case"together":Ts(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function ta(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Sa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(vn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(f(153));if(t.child!==null){for(e=t.child,a=Wt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Wt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Es(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ai(e)))}function ym(e,t,a){switch(t.tag){case 3:ce(t,t.stateNode.containerInfo),ya(t,Xe,e.memoizedState.cache),Ga();break;case 27:case 5:K(t);break;case 4:ce(t,t.stateNode.containerInfo);break;case 10:ya(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,es(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(_a(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Zc(e,t,a):(_a(t),e=ta(e,t,a),e!==null?e.sibling:null);_a(t);break;case 19:var l=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(vn(e,t,a,!1),n=(a&t.childLanes)!==0),l){if(n)return Wc(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),N(Ge,Ge.current),n)break;return null;case 22:return t.lanes=0,Uc(e,t,a,t.pendingProps);case 24:ya(t,Xe,e.memoizedState.cache)}return ta(e,t,a)}function Jc(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ke=!0;else{if(!Es(e,a)&&(t.flags&128)===0)return Ke=!1,ym(e,t,a);Ke=(e.flags&131072)!==0}else Ke=!1,fe&&(t.flags&1048576)!==0&&Tu(t,el,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=Ka(t.elementType),t.type=e,typeof e=="function")Io(e)?(n=$a(e,n),t.tag=1,t=Qc(null,t,e,n,a)):(t.tag=0,t=ws(null,t,e,n,a));else{if(e!=null){var l=e.$$typeof;if(l===le){t.tag=11,t=Hc(null,t,e,n,a);break e}else if(l===X){t.tag=14,t=Bc(null,t,e,n,a);break e}}throw t=pe(e)||e,Error(f(306,t,""))}}return t;case 0:return ws(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,l=$a(n,t.pendingProps),Qc(e,t,n,l,a);case 3:e:{if(ce(t,t.stateNode.containerInfo),e===null)throw Error(f(387));n=t.pendingProps;var i=t.memoizedState;l=i.element,Wo(e,t),rl(t,n,null,a);var s=t.memoizedState;if(n=s.cache,ya(t,Xe,n),n!==i.cache&&qo(t,[Xe],a,!0),sl(),n=s.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Xc(e,t,n,a);break e}else if(n!==l){l=Mt(Error(f(424)),t),tl(l),t=Xc(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Le=Lt(e.firstChild),nt=t,fe=!0,ma=null,It=!0,a=Uu(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ga(),n===l){t=ta(e,t,a);break e}it(e,t,n,a)}t=t.child}return t;case 26:return xi(e,t),e===null?(a=sh(t.type,null,t.pendingProps,null))?t.memoizedState=a:fe||(a=t.type,e=t.pendingProps,n=Hi(R.current).createElement(a),n[at]=t,n[dt]=e,ot(n,a,e),Pe(n),t.stateNode=n):t.memoizedState=sh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return K(t),e===null&&fe&&(n=t.stateNode=lh(t.type,t.pendingProps,R.current),nt=t,It=!0,l=Le,Ea(t.type)?(rr=l,Le=Lt(n.firstChild)):Le=l),it(e,t,t.pendingProps.children,a),xi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&fe&&((l=n=Le)&&(n=Xm(n,t.type,t.pendingProps,It),n!==null?(t.stateNode=n,nt=t,Le=Lt(n.firstChild),It=!1,l=!0):l=!1),l||pa(t)),K(t),l=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,n=i.children,nr(l,i)?n=null:s!==null&&nr(l,s)&&(t.flags|=32),t.memoizedState!==null&&(l=as(e,t,sm,null,null,a),Tl._currentValue=l),xi(e,t),it(e,t,n,a),t.child;case 6:return e===null&&fe&&((e=a=Le)&&(a=Zm(a,t.pendingProps,It),a!==null?(t.stateNode=a,nt=t,Le=null,e=!0):e=!1),e||pa(t)),null;case 13:return Zc(e,t,a);case 4:return ce(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Ja(t,null,n,a):it(e,t,n,a),t.child;case 11:return Hc(e,t,t.type,t.pendingProps,a);case 7:return it(e,t,t.pendingProps,a),t.child;case 8:return it(e,t,t.pendingProps.children,a),t.child;case 12:return it(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,ya(t,t.type,n.value),it(e,t,n.children,a),t.child;case 9:return l=t.type._context,n=t.pendingProps.children,Xa(t),l=lt(l),n=n(l),t.flags|=1,it(e,t,n,a),t.child;case 14:return Bc(e,t,t.type,t.pendingProps,a);case 15:return Vc(e,t,t.type,t.pendingProps,a);case 19:return Wc(e,t,a);case 31:return pm(e,t,a);case 22:return Uc(e,t,a,t.pendingProps);case 24:return Xa(t),n=lt(Xe),e===null?(l=Xo(),l===null&&(l=Oe,i=Go(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=a),l=i),t.memoizedState={parent:n,cache:l},Ko(t),ya(t,Xe,l)):((e.lanes&a)!==0&&(Wo(e,t),rl(t,null,null,a),sl()),l=e.memoizedState,i=t.memoizedState,l.parent!==n?(l={parent:n,cache:n},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),ya(t,Xe,n)):(n=i.cache,ya(t,Xe,n),n!==l.cache&&qo(t,[Xe],a,!0))),it(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(f(156,t.tag))}function aa(e){e.flags|=4}function zs(e,t,a,n,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Ad())e.flags|=8192;else throw Wa=oi,Zo}else e.flags&=-16777217}function Fc(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!hh(t))if(Ad())e.flags|=8192;else throw Wa=oi,Zo}function Ai(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?zr():536870912,e.lanes|=t,Mn|=t)}function ml(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags&65011712,n|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function gm(e,t,a){var n=t.pendingProps;switch(Ho(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return Re(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),$t(Xe),T(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(bn(t)?aa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Vo())),Re(t),null;case 26:var l=t.type,i=t.memoizedState;return e===null?(aa(t),i!==null?(Re(t),Fc(t,i)):(Re(t),zs(t,l,null,n,a))):i?i!==e.memoizedState?(aa(t),Re(t),Fc(t,i)):(Re(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&aa(t),Re(t),zs(t,l,e,n,a)),null;case 27:if(ae(t),a=R.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&aa(t);else{if(!n){if(t.stateNode===null)throw Error(f(166));return Re(t),null}e=M.current,bn(t)?zu(t):(e=lh(l,n,a),t.stateNode=e,aa(t))}return Re(t),null;case 5:if(ae(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&aa(t);else{if(!n){if(t.stateNode===null)throw Error(f(166));return Re(t),null}if(i=M.current,bn(t))zu(t);else{var s=Hi(R.current);switch(i){case 1:i=s.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=s.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=s.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof n.is=="string"?s.createElement("select",{is:n.is}):s.createElement("select"),n.multiple?i.multiple=!0:n.size&&(i.size=n.size);break;default:i=typeof n.is=="string"?s.createElement(l,{is:n.is}):s.createElement(l)}}i[at]=t,i[dt]=n;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)i.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=i;e:switch(ot(i,l,n),l){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&aa(t)}}return Re(t),zs(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&aa(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(f(166));if(e=R.current,bn(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,l=nt,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}e[at]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||Zd(e.nodeValue,a)),e||pa(t,!0)}else e=Hi(e).createTextNode(n),e[at]=t,t.stateNode=e}return Re(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=bn(t),a!==null){if(e===null){if(!n)throw Error(f(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(557));e[at]=t}else Ga(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Re(t),e=!1}else a=Vo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(St(t),t):(St(t),null);if((t.flags&128)!==0)throw Error(f(558))}return Re(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=bn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(f(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(f(317));l[at]=t}else Ga(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Re(t),l=!1}else l=Vo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(St(t),t):(St(t),null)}return St(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool),i=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==l&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Ai(t,t.updateQueue),Re(t),null);case 4:return T(),e===null&&$s(t.stateNode.containerInfo),Re(t),null;case 10:return $t(t.type),Re(t),null;case 19:if(u(Ge),n=t.memoizedState,n===null)return Re(t),null;if(l=(t.flags&128)!==0,i=n.rendering,i===null)if(l)ml(n,!1);else{if(Ye!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=ci(e),i!==null){for(t.flags|=128,ml(n,!1),e=i.updateQueue,t.updateQueue=e,Ai(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)ku(a,e),a=a.sibling;return N(Ge,Ge.current&1|2),fe&&Jt(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&bt()>Ti&&(t.flags|=128,l=!0,ml(n,!1),t.lanes=4194304)}else{if(!l)if(e=ci(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Ai(t,e),ml(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!fe)return Re(t),null}else 2*bt()-n.renderingStartTime>Ti&&a!==536870912&&(t.flags|=128,l=!0,ml(n,!1),t.lanes=4194304);n.isBackwards?(i.sibling=t.child,t.child=i):(e=n.last,e!==null?e.sibling=i:t.child=i,n.last=i)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=bt(),e.sibling=null,a=Ge.current,N(Ge,l?a&1|2:a&1),fe&&Jt(t,n.treeForkCount),e):(Re(t),null);case 22:case 23:return St(t),Po(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),a=t.updateQueue,a!==null&&Ai(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&u(Za),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),$t(Xe),Re(t),null;case 25:return null;case 30:return null}throw Error(f(156,t.tag))}function bm(e,t){switch(Ho(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $t(Xe),T(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ae(t),null;case 31:if(t.memoizedState!==null){if(St(t),t.alternate===null)throw Error(f(340));Ga()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(St(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(f(340));Ga()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return u(Ge),null;case 4:return T(),null;case 10:return $t(t.type),null;case 22:case 23:return St(t),Po(),e!==null&&u(Za),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return $t(Xe),null;case 25:return null;default:return null}}function $c(e,t){switch(Ho(t),t.tag){case 3:$t(Xe),T();break;case 26:case 27:case 5:ae(t);break;case 4:T();break;case 31:t.memoizedState!==null&&St(t);break;case 13:St(t);break;case 19:u(Ge);break;case 10:$t(t.type);break;case 22:case 23:St(t),Po(),e!==null&&u(Za);break;case 24:$t(Xe)}}function pl(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var l=n.next;a=l;do{if((a.tag&e)===e){n=void 0;var i=a.create,s=a.inst;n=i(),s.destroy=n}a=a.next}while(a!==l)}}catch(r){ke(t,t.return,r)}}function wa(e,t,a){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var i=l.next;n=i;do{if((n.tag&e)===e){var s=n.inst,r=s.destroy;if(r!==void 0){s.destroy=void 0,l=t;var c=a,g=r;try{g()}catch(w){ke(l,c,w)}}}n=n.next}while(n!==i)}}catch(w){ke(t,t.return,w)}}function Pc(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{qu(t,a)}catch(n){ke(e,e.return,n)}}}function ed(e,t,a){a.props=$a(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){ke(e,t,n)}}function yl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(l){ke(e,t,l)}}function Gt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(l){ke(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){ke(e,t,l)}else a.current=null}function td(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(l){ke(e,e.return,l)}}function Ms(e,t,a){try{var n=e.stateNode;Vm(n,e.type,a,t),n[dt]=t}catch(l){ke(e,e.return,l)}}function ad(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ea(e.type)||e.tag===4}function Os(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ad(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ea(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ds(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Zt));else if(n!==4&&(n===27&&Ea(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Ds(e,t,a),e=e.sibling;e!==null;)Ds(e,t,a),e=e.sibling}function Si(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&Ea(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Si(e,t,a),e=e.sibling;e!==null;)Si(e,t,a),e=e.sibling}function nd(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);ot(t,n,a),t[at]=e,t[dt]=a}catch(i){ke(e,e.return,i)}}var na=!1,We=!1,Is=!1,ld=typeof WeakSet=="function"?WeakSet:Set,et=null;function vm(e,t){if(e=e.containerInfo,tr=Qi,e=yu(e),jo(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var l=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var s=0,r=-1,c=-1,g=0,w=0,k=e,b=null;t:for(;;){for(var v;k!==a||l!==0&&k.nodeType!==3||(r=s+l),k!==i||n!==0&&k.nodeType!==3||(c=s+n),k.nodeType===3&&(s+=k.nodeValue.length),(v=k.firstChild)!==null;)b=k,k=v;for(;;){if(k===e)break t;if(b===a&&++g===l&&(r=s),b===i&&++w===n&&(c=s),(v=k.nextSibling)!==null)break;k=b,b=k.parentNode}k=v}a=r===-1||c===-1?null:{start:r,end:c}}else a=null}a=a||{start:0,end:0}}else a=null;for(ar={focusedElem:e,selectionRange:a},Qi=!1,et=t;et!==null;)if(t=et,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,et=e;else for(;et!==null;){switch(t=et,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,l=i.memoizedProps,i=i.memoizedState,n=a.stateNode;try{var V=$a(a.type,l);e=n.getSnapshotBeforeUpdate(V,i),n.__reactInternalSnapshotBeforeUpdate=e}catch(W){ke(a,a.return,W)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)ir(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ir(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(f(163))}if(e=t.sibling,e!==null){e.return=t.return,et=e;break}et=t.return}}function id(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:ia(e,a),n&4&&pl(5,a);break;case 1:if(ia(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(s){ke(a,a.return,s)}else{var l=$a(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){ke(a,a.return,s)}}n&64&&Pc(a),n&512&&yl(a,a.return);break;case 3:if(ia(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{qu(e,t)}catch(s){ke(a,a.return,s)}}break;case 27:t===null&&n&4&&nd(a);case 26:case 5:ia(e,a),t===null&&n&4&&td(a),n&512&&yl(a,a.return);break;case 12:ia(e,a);break;case 31:ia(e,a),n&4&&rd(e,a);break;case 13:ia(e,a),n&4&&ud(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Tm.bind(null,a),Km(e,a))));break;case 22:if(n=a.memoizedState!==null||na,!n){t=t!==null&&t.memoizedState!==null||We,l=na;var i=We;na=n,(We=t)&&!i?oa(e,a,(a.subtreeFlags&8772)!==0):ia(e,a),na=l,We=i}break;case 30:break;default:ia(e,a)}}function od(e){var t=e.alternate;t!==null&&(e.alternate=null,od(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&uo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var He=null,ft=!1;function la(e,t,a){for(a=a.child;a!==null;)sd(e,t,a),a=a.sibling}function sd(e,t,a){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(Vn,a)}catch{}switch(a.tag){case 26:We||Gt(a,t),la(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:We||Gt(a,t);var n=He,l=ft;Ea(a.type)&&(He=a.stateNode,ft=!1),la(e,t,a),kl(a.stateNode),He=n,ft=l;break;case 5:We||Gt(a,t);case 6:if(n=He,l=ft,He=null,la(e,t,a),He=n,ft=l,He!==null)if(ft)try{(He.nodeType===9?He.body:He.nodeName==="HTML"?He.ownerDocument.body:He).removeChild(a.stateNode)}catch(i){ke(a,t,i)}else try{He.removeChild(a.stateNode)}catch(i){ke(a,t,i)}break;case 18:He!==null&&(ft?(e=He,Pd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Bn(e)):Pd(He,a.stateNode));break;case 4:n=He,l=ft,He=a.stateNode.containerInfo,ft=!0,la(e,t,a),He=n,ft=l;break;case 0:case 11:case 14:case 15:wa(2,a,t),We||wa(4,a,t),la(e,t,a);break;case 1:We||(Gt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&ed(a,t,n)),la(e,t,a);break;case 21:la(e,t,a);break;case 22:We=(n=We)||a.memoizedState!==null,la(e,t,a),We=n;break;default:la(e,t,a)}}function rd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Bn(e)}catch(a){ke(t,t.return,a)}}}function ud(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Bn(e)}catch(a){ke(t,t.return,a)}}function _m(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ld),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ld),t;default:throw Error(f(435,e.tag))}}function ki(e,t){var a=_m(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var l=Em.bind(null,e,n);n.then(l,l)}})}function mt(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var l=a[n],i=e,s=t,r=s;e:for(;r!==null;){switch(r.tag){case 27:if(Ea(r.type)){He=r.stateNode,ft=!1;break e}break;case 5:He=r.stateNode,ft=!1;break e;case 3:case 4:He=r.stateNode.containerInfo,ft=!0;break e}r=r.return}if(He===null)throw Error(f(160));sd(i,s,l),He=null,ft=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)cd(t,e),t=t.sibling}var Bt=null;function cd(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:mt(t,e),pt(e),n&4&&(wa(3,e,e.return),pl(3,e),wa(5,e,e.return));break;case 1:mt(t,e),pt(e),n&512&&(We||a===null||Gt(a,a.return)),n&64&&na&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var l=Bt;if(mt(t,e),pt(e),n&512&&(We||a===null||Gt(a,a.return)),n&4){var i=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(n){case"title":i=l.getElementsByTagName("title")[0],(!i||i[qn]||i[at]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(n),l.head.insertBefore(i,l.querySelector("head > title"))),ot(i,n,a),i[at]=e,Pe(i),n=i;break e;case"link":var s=ch("link","href",l).get(n+(a.href||""));if(s){for(var r=0;r<s.length;r++)if(i=s[r],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(r,1);break t}}i=l.createElement(n),ot(i,n,a),l.head.appendChild(i);break;case"meta":if(s=ch("meta","content",l).get(n+(a.content||""))){for(r=0;r<s.length;r++)if(i=s[r],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(r,1);break t}}i=l.createElement(n),ot(i,n,a),l.head.appendChild(i);break;default:throw Error(f(468,n))}i[at]=e,Pe(i),n=i}e.stateNode=n}else dh(l,e.type,e.stateNode);else e.stateNode=uh(l,n,e.memoizedProps);else i!==n?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,n===null?dh(l,e.type,e.stateNode):uh(l,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Ms(e,e.memoizedProps,a.memoizedProps)}break;case 27:mt(t,e),pt(e),n&512&&(We||a===null||Gt(a,a.return)),a!==null&&n&4&&Ms(e,e.memoizedProps,a.memoizedProps);break;case 5:if(mt(t,e),pt(e),n&512&&(We||a===null||Gt(a,a.return)),e.flags&32){l=e.stateNode;try{rn(l,"")}catch(V){ke(e,e.return,V)}}n&4&&e.stateNode!=null&&(l=e.memoizedProps,Ms(e,l,a!==null?a.memoizedProps:l)),n&1024&&(Is=!0);break;case 6:if(mt(t,e),pt(e),n&4){if(e.stateNode===null)throw Error(f(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(V){ke(e,e.return,V)}}break;case 3:if(Ui=null,l=Bt,Bt=Bi(t.containerInfo),mt(t,e),Bt=l,pt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Bn(t.containerInfo)}catch(V){ke(e,e.return,V)}Is&&(Is=!1,dd(e));break;case 4:n=Bt,Bt=Bi(e.stateNode.containerInfo),mt(t,e),pt(e),Bt=n;break;case 12:mt(t,e),pt(e);break;case 31:mt(t,e),pt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ki(e,n)));break;case 13:mt(t,e),pt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ji=bt()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ki(e,n)));break;case 22:l=e.memoizedState!==null;var c=a!==null&&a.memoizedState!==null,g=na,w=We;if(na=g||l,We=w||c,mt(t,e),We=w,na=g,pt(e),n&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||c||na||We||Pa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){c=a=t;try{if(i=c.stateNode,l)s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{r=c.stateNode;var k=c.memoizedProps.style,b=k!=null&&k.hasOwnProperty("display")?k.display:null;r.style.display=b==null||typeof b=="boolean"?"":(""+b).trim()}}catch(V){ke(c,c.return,V)}}}else if(t.tag===6){if(a===null){c=t;try{c.stateNode.nodeValue=l?"":c.memoizedProps}catch(V){ke(c,c.return,V)}}}else if(t.tag===18){if(a===null){c=t;try{var v=c.stateNode;l?eh(v,!0):eh(c.stateNode,!1)}catch(V){ke(c,c.return,V)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,ki(e,a))));break;case 19:mt(t,e),pt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ki(e,n)));break;case 30:break;case 21:break;default:mt(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(ad(n)){a=n;break}n=n.return}if(a==null)throw Error(f(160));switch(a.tag){case 27:var l=a.stateNode,i=Os(e);Si(e,i,l);break;case 5:var s=a.stateNode;a.flags&32&&(rn(s,""),a.flags&=-33);var r=Os(e);Si(e,r,s);break;case 3:case 4:var c=a.stateNode.containerInfo,g=Os(e);Ds(e,g,c);break;default:throw Error(f(161))}}catch(w){ke(e,e.return,w)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;dd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ia(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)id(e,t.alternate,t),t=t.sibling}function Pa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:wa(4,t,t.return),Pa(t);break;case 1:Gt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&ed(t,t.return,a),Pa(t);break;case 27:kl(t.stateNode);case 26:case 5:Gt(t,t.return),Pa(t);break;case 22:t.memoizedState===null&&Pa(t);break;case 30:Pa(t);break;default:Pa(t)}e=e.sibling}}function oa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,l=e,i=t,s=i.flags;switch(i.tag){case 0:case 11:case 15:oa(l,i,a),pl(4,i);break;case 1:if(oa(l,i,a),n=i,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(g){ke(n,n.return,g)}if(n=i,l=n.updateQueue,l!==null){var r=n.stateNode;try{var c=l.shared.hiddenCallbacks;if(c!==null)for(l.shared.hiddenCallbacks=null,l=0;l<c.length;l++)Yu(c[l],r)}catch(g){ke(n,n.return,g)}}a&&s&64&&Pc(i),yl(i,i.return);break;case 27:nd(i);case 26:case 5:oa(l,i,a),a&&n===null&&s&4&&td(i),yl(i,i.return);break;case 12:oa(l,i,a);break;case 31:oa(l,i,a),a&&s&4&&rd(l,i);break;case 13:oa(l,i,a),a&&s&4&&ud(l,i);break;case 22:i.memoizedState===null&&oa(l,i,a),yl(i,i.return);break;case 30:break;default:oa(l,i,a)}t=t.sibling}}function Cs(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&al(a))}function Ls(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&al(e))}function Vt(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)hd(e,t,a,n),t=t.sibling}function hd(e,t,a,n){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Vt(e,t,a,n),l&2048&&pl(9,t);break;case 1:Vt(e,t,a,n);break;case 3:Vt(e,t,a,n),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&al(e)));break;case 12:if(l&2048){Vt(e,t,a,n),e=t.stateNode;try{var i=t.memoizedProps,s=i.id,r=i.onPostCommit;typeof r=="function"&&r(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(c){ke(t,t.return,c)}}else Vt(e,t,a,n);break;case 31:Vt(e,t,a,n);break;case 13:Vt(e,t,a,n);break;case 23:break;case 22:i=t.stateNode,s=t.alternate,t.memoizedState!==null?i._visibility&2?Vt(e,t,a,n):gl(e,t):i._visibility&2?Vt(e,t,a,n):(i._visibility|=2,Tn(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),l&2048&&Cs(s,t);break;case 24:Vt(e,t,a,n),l&2048&&Ls(t.alternate,t);break;default:Vt(e,t,a,n)}}function Tn(e,t,a,n,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,s=t,r=a,c=n,g=s.flags;switch(s.tag){case 0:case 11:case 15:Tn(i,s,r,c,l),pl(8,s);break;case 23:break;case 22:var w=s.stateNode;s.memoizedState!==null?w._visibility&2?Tn(i,s,r,c,l):gl(i,s):(w._visibility|=2,Tn(i,s,r,c,l)),l&&g&2048&&Cs(s.alternate,s);break;case 24:Tn(i,s,r,c,l),l&&g&2048&&Ls(s.alternate,s);break;default:Tn(i,s,r,c,l)}t=t.sibling}}function gl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,l=n.flags;switch(n.tag){case 22:gl(a,n),l&2048&&Cs(n.alternate,n);break;case 24:gl(a,n),l&2048&&Ls(n.alternate,n);break;default:gl(a,n)}t=t.sibling}}var bl=8192;function En(e,t,a){if(e.subtreeFlags&bl)for(e=e.child;e!==null;)fd(e,t,a),e=e.sibling}function fd(e,t,a){switch(e.tag){case 26:En(e,t,a),e.flags&bl&&e.memoizedState!==null&&op(a,Bt,e.memoizedState,e.memoizedProps);break;case 5:En(e,t,a);break;case 3:case 4:var n=Bt;Bt=Bi(e.stateNode.containerInfo),En(e,t,a),Bt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=bl,bl=16777216,En(e,t,a),bl=n):En(e,t,a));break;default:En(e,t,a)}}function md(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function vl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];et=n,yd(n,e)}md(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)pd(e),e=e.sibling}function pd(e){switch(e.tag){case 0:case 11:case 15:vl(e),e.flags&2048&&wa(9,e,e.return);break;case 3:vl(e);break;case 12:vl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ni(e)):vl(e);break;default:vl(e)}}function Ni(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];et=n,yd(n,e)}md(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:wa(8,t,t.return),Ni(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ni(t));break;default:Ni(t)}e=e.sibling}}function yd(e,t){for(;et!==null;){var a=et;switch(a.tag){case 0:case 11:case 15:wa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:al(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,et=n;else e:for(a=e;et!==null;){n=et;var l=n.sibling,i=n.return;if(od(n),n===a){et=null;break e}if(l!==null){l.return=i,et=l;break e}et=i}}}var xm={getCacheForType:function(e){var t=lt(Xe),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return lt(Xe).controller.signal}},wm=typeof WeakMap=="function"?WeakMap:Map,_e=0,Oe=null,re=null,de=0,Se=0,kt=null,Aa=!1,zn=!1,Rs=!1,sa=0,Ye=0,Sa=0,en=0,Hs=0,Nt=0,Mn=0,_l=null,yt=null,Bs=!1,ji=0,gd=0,Ti=1/0,Ei=null,ka=null,Fe=0,Na=null,On=null,ra=0,Vs=0,Us=null,bd=null,xl=0,Ys=null;function jt(){return(_e&2)!==0&&de!==0?de&-de:_.T!==null?Ks():Ir()}function vd(){if(Nt===0)if((de&536870912)===0||fe){var e=Rl;Rl<<=1,(Rl&3932160)===0&&(Rl=262144),Nt=e}else Nt=536870912;return e=At.current,e!==null&&(e.flags|=32),Nt}function gt(e,t,a){(e===Oe&&(Se===2||Se===9)||e.cancelPendingCommit!==null)&&(Dn(e,0),ja(e,de,Nt,!1)),Yn(e,a),((_e&2)===0||e!==Oe)&&(e===Oe&&((_e&2)===0&&(en|=a),Ye===4&&ja(e,de,Nt,!1)),Qt(e))}function _d(e,t,a){if((_e&6)!==0)throw Error(f(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Un(e,t),l=n?km(e,t):Gs(e,t,!0),i=n;do{if(l===0){zn&&!n&&ja(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!Am(a)){l=Gs(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var r=e;l=_l;var c=r.current.memoizedState.isDehydrated;if(c&&(Dn(r,s).flags|=256),s=Gs(r,s,!1),s!==2){if(Rs&&!c){r.errorRecoveryDisabledLanes|=i,en|=i,l=4;break e}i=yt,yt=l,i!==null&&(yt===null?yt=i:yt.push.apply(yt,i))}l=s}if(i=!1,l!==2)continue}}if(l===1){Dn(e,0),ja(e,t,0,!0);break}e:{switch(n=e,i=l,i){case 0:case 1:throw Error(f(345));case 4:if((t&4194048)!==t)break;case 6:ja(n,t,Nt,!Aa);break e;case 2:yt=null;break;case 3:case 5:break;default:throw Error(f(329))}if((t&62914560)===t&&(l=ji+300-bt(),10<l)){if(ja(n,t,Nt,!Aa),Bl(n,0,!0)!==0)break e;ra=t,n.timeoutHandle=Fd(xd.bind(null,n,a,yt,Ei,Bs,t,Nt,en,Mn,Aa,i,"Throttled",-0,0),l);break e}xd(n,a,yt,Ei,Bs,t,Nt,en,Mn,Aa,i,null,-0,0)}}break}while(!0);Qt(e)}function xd(e,t,a,n,l,i,s,r,c,g,w,k,b,v){if(e.timeoutHandle=-1,k=t.subtreeFlags,k&8192||(k&16785408)===16785408){k={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zt},fd(t,i,k);var V=(i&62914560)===i?ji-bt():(i&4194048)===i?gd-bt():0;if(V=sp(k,V),V!==null){ra=i,e.cancelPendingCommit=V(Ed.bind(null,e,t,i,a,n,l,s,r,c,w,k,null,b,v)),ja(e,i,s,!g);return}}Ed(e,t,i,a,n,l,s,r,c)}function Am(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var l=a[n],i=l.getSnapshot;l=l.value;try{if(!xt(i(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ja(e,t,a,n){t&=~Hs,t&=~en,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var l=t;0<l;){var i=31-_t(l),s=1<<i;n[i]=-1,l&=~s}a!==0&&Mr(e,a,t)}function zi(){return(_e&6)===0?(wl(0),!1):!0}function qs(){if(re!==null){if(Se===0)var e=re.return;else e=re,Ft=Qa=null,is(e),An=null,ll=0,e=re;for(;e!==null;)$c(e.alternate,e),e=e.return;re=null}}function Dn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,qm(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ra=0,qs(),Oe=e,re=a=Wt(e.current,null),de=t,Se=0,kt=null,Aa=!1,zn=Un(e,t),Rs=!1,Mn=Nt=Hs=en=Sa=Ye=0,yt=_l=null,Bs=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var l=31-_t(n),i=1<<l;t|=e[l],n&=~i}return sa=t,Fl(),a}function wd(e,t){ne=null,_.H=hl,t===wn||t===ii?(t=Hu(),Se=3):t===Zo?(t=Hu(),Se=4):Se=t===xs?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,kt=t,re===null&&(Ye=1,vi(e,Mt(t,e.current)))}function Ad(){var e=At.current;return e===null?!0:(de&4194048)===de?Ct===null:(de&62914560)===de||(de&536870912)!==0?e===Ct:!1}function Sd(){var e=_.H;return _.H=hl,e===null?hl:e}function kd(){var e=_.A;return _.A=xm,e}function Mi(){Ye=4,Aa||(de&4194048)!==de&&At.current!==null||(zn=!0),(Sa&134217727)===0&&(en&134217727)===0||Oe===null||ja(Oe,de,Nt,!1)}function Gs(e,t,a){var n=_e;_e|=2;var l=Sd(),i=kd();(Oe!==e||de!==t)&&(Ei=null,Dn(e,t)),t=!1;var s=Ye;e:do try{if(Se!==0&&re!==null){var r=re,c=kt;switch(Se){case 8:qs(),s=6;break e;case 3:case 2:case 9:case 6:At.current===null&&(t=!0);var g=Se;if(Se=0,kt=null,In(e,r,c,g),a&&zn){s=0;break e}break;default:g=Se,Se=0,kt=null,In(e,r,c,g)}}Sm(),s=Ye;break}catch(w){wd(e,w)}while(!0);return t&&e.shellSuspendCounter++,Ft=Qa=null,_e=n,_.H=l,_.A=i,re===null&&(Oe=null,de=0,Fl()),s}function Sm(){for(;re!==null;)Nd(re)}function km(e,t){var a=_e;_e|=2;var n=Sd(),l=kd();Oe!==e||de!==t?(Ei=null,Ti=bt()+500,Dn(e,t)):zn=Un(e,t);e:do try{if(Se!==0&&re!==null){t=re;var i=kt;t:switch(Se){case 1:Se=0,kt=null,In(e,t,i,1);break;case 2:case 9:if(Lu(i)){Se=0,kt=null,jd(t);break}t=function(){Se!==2&&Se!==9||Oe!==e||(Se=7),Qt(e)},i.then(t,t);break e;case 3:Se=7;break e;case 4:Se=5;break e;case 7:Lu(i)?(Se=0,kt=null,jd(t)):(Se=0,kt=null,In(e,t,i,7));break;case 5:var s=null;switch(re.tag){case 26:s=re.memoizedState;case 5:case 27:var r=re;if(s?hh(s):r.stateNode.complete){Se=0,kt=null;var c=r.sibling;if(c!==null)re=c;else{var g=r.return;g!==null?(re=g,Oi(g)):re=null}break t}}Se=0,kt=null,In(e,t,i,5);break;case 6:Se=0,kt=null,In(e,t,i,6);break;case 8:qs(),Ye=6;break e;default:throw Error(f(462))}}Nm();break}catch(w){wd(e,w)}while(!0);return Ft=Qa=null,_.H=n,_.A=l,_e=a,re!==null?0:(Oe=null,de=0,Fl(),Ye)}function Nm(){for(;re!==null&&!Kh();)Nd(re)}function Nd(e){var t=Jc(e.alternate,e,sa);e.memoizedProps=e.pendingProps,t===null?Oi(e):re=t}function jd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Gc(a,t,t.pendingProps,t.type,void 0,de);break;case 11:t=Gc(a,t,t.pendingProps,t.type.render,t.ref,de);break;case 5:is(t);default:$c(a,t),t=re=ku(t,sa),t=Jc(a,t,sa)}e.memoizedProps=e.pendingProps,t===null?Oi(e):re=t}function In(e,t,a,n){Ft=Qa=null,is(t),An=null,ll=0;var l=t.return;try{if(mm(e,l,t,a,de)){Ye=1,vi(e,Mt(a,e.current)),re=null;return}}catch(i){if(l!==null)throw re=l,i;Ye=1,vi(e,Mt(a,e.current)),re=null;return}t.flags&32768?(fe||n===1?e=!0:zn||(de&536870912)!==0?e=!1:(Aa=e=!0,(n===2||n===9||n===3||n===6)&&(n=At.current,n!==null&&n.tag===13&&(n.flags|=16384))),Td(t,e)):Oi(t)}function Oi(e){var t=e;do{if((t.flags&32768)!==0){Td(t,Aa);return}e=t.return;var a=gm(t.alternate,t,sa);if(a!==null){re=a;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);Ye===0&&(Ye=5)}function Td(e,t){do{var a=bm(e.alternate,e);if(a!==null){a.flags&=32767,re=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){re=e;return}re=e=a}while(e!==null);Ye=6,re=null}function Ed(e,t,a,n,l,i,s,r,c){e.cancelPendingCommit=null;do Di();while(Fe!==0);if((_e&6)!==0)throw Error(f(327));if(t!==null){if(t===e.current)throw Error(f(177));if(i=t.lanes|t.childLanes,i|=Oo,lf(e,a,i,s,r,c),e===Oe&&(re=Oe=null,de=0),On=t,Na=e,ra=a,Vs=i,Us=l,bd=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,zm(Cl,function(){return Id(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=_.T,_.T=null,l=C.p,C.p=2,s=_e,_e|=4;try{vm(e,t,a)}finally{_e=s,C.p=l,_.T=n}}Fe=1,zd(),Md(),Od()}}function zd(){if(Fe===1){Fe=0;var e=Na,t=On,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=_.T,_.T=null;var n=C.p;C.p=2;var l=_e;_e|=4;try{cd(t,e);var i=ar,s=yu(e.containerInfo),r=i.focusedElem,c=i.selectionRange;if(s!==r&&r&&r.ownerDocument&&pu(r.ownerDocument.documentElement,r)){if(c!==null&&jo(r)){var g=c.start,w=c.end;if(w===void 0&&(w=g),"selectionStart"in r)r.selectionStart=g,r.selectionEnd=Math.min(w,r.value.length);else{var k=r.ownerDocument||document,b=k&&k.defaultView||window;if(b.getSelection){var v=b.getSelection(),V=r.textContent.length,W=Math.min(c.start,V),Te=c.end===void 0?W:Math.min(c.end,V);!v.extend&&W>Te&&(s=Te,Te=W,W=s);var p=mu(r,W),h=mu(r,Te);if(p&&h&&(v.rangeCount!==1||v.anchorNode!==p.node||v.anchorOffset!==p.offset||v.focusNode!==h.node||v.focusOffset!==h.offset)){var y=k.createRange();y.setStart(p.node,p.offset),v.removeAllRanges(),W>Te?(v.addRange(y),v.extend(h.node,h.offset)):(y.setEnd(h.node,h.offset),v.addRange(y))}}}}for(k=[],v=r;v=v.parentNode;)v.nodeType===1&&k.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<k.length;r++){var A=k[r];A.element.scrollLeft=A.left,A.element.scrollTop=A.top}}Qi=!!tr,ar=tr=null}finally{_e=l,C.p=n,_.T=a}}e.current=t,Fe=2}}function Md(){if(Fe===2){Fe=0;var e=Na,t=On,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=_.T,_.T=null;var n=C.p;C.p=2;var l=_e;_e|=4;try{id(e,t.alternate,t)}finally{_e=l,C.p=n,_.T=a}}Fe=3}}function Od(){if(Fe===4||Fe===3){Fe=0,Wh();var e=Na,t=On,a=ra,n=bd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Fe=5:(Fe=0,On=Na=null,Dd(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(ka=null),so(a),t=t.stateNode,vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(Vn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=_.T,l=C.p,C.p=2,_.T=null;try{for(var i=e.onRecoverableError,s=0;s<n.length;s++){var r=n[s];i(r.value,{componentStack:r.stack})}}finally{_.T=t,C.p=l}}(ra&3)!==0&&Di(),Qt(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===Ys?xl++:(xl=0,Ys=e):xl=0,wl(0)}}function Dd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,al(t)))}function Di(){return zd(),Md(),Od(),Id()}function Id(){if(Fe!==5)return!1;var e=Na,t=Vs;Vs=0;var a=so(ra),n=_.T,l=C.p;try{C.p=32>a?32:a,_.T=null,a=Us,Us=null;var i=Na,s=ra;if(Fe=0,On=Na=null,ra=0,(_e&6)!==0)throw Error(f(331));var r=_e;if(_e|=4,pd(i.current),hd(i,i.current,s,a),_e=r,wl(0,!1),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(Vn,i)}catch{}return!0}finally{C.p=l,_.T=n,Dd(e,t)}}function Cd(e,t,a){t=Mt(a,t),t=_s(e.stateNode,t,2),e=va(e,t,2),e!==null&&(Yn(e,2),Qt(e))}function ke(e,t,a){if(e.tag===3)Cd(e,e,a);else for(;t!==null;){if(t.tag===3){Cd(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ka===null||!ka.has(n))){e=Mt(a,e),a=Lc(2),n=va(t,a,2),n!==null&&(Rc(a,n,t,e),Yn(n,2),Qt(n));break}}t=t.return}}function Qs(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new wm;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(a)||(Rs=!0,l.add(a),e=jm.bind(null,e,t,a),t.then(e,e))}function jm(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Oe===e&&(de&a)===a&&(Ye===4||Ye===3&&(de&62914560)===de&&300>bt()-ji?(_e&2)===0&&Dn(e,0):Hs|=a,Mn===de&&(Mn=0)),Qt(e)}function Ld(e,t){t===0&&(t=zr()),e=Ya(e,t),e!==null&&(Yn(e,t),Qt(e))}function Tm(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Ld(e,a)}function Em(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(f(314))}n!==null&&n.delete(t),Ld(e,a)}function zm(e,t){return no(e,t)}var Ii=null,Cn=null,Xs=!1,Ci=!1,Zs=!1,Ta=0;function Qt(e){e!==Cn&&e.next===null&&(Cn===null?Ii=Cn=e:Cn=Cn.next=e),Ci=!0,Xs||(Xs=!0,Om())}function wl(e,t){if(!Zs&&Ci){Zs=!0;do for(var a=!1,n=Ii;n!==null;){if(e!==0){var l=n.pendingLanes;if(l===0)var i=0;else{var s=n.suspendedLanes,r=n.pingedLanes;i=(1<<31-_t(42|e)+1)-1,i&=l&~(s&~r),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Vd(n,i))}else i=de,i=Bl(n,n===Oe?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(i&3)===0||Un(n,i)||(a=!0,Vd(n,i));n=n.next}while(a);Zs=!1}}function Mm(){Rd()}function Rd(){Ci=Xs=!1;var e=0;Ta!==0&&Ym()&&(e=Ta);for(var t=bt(),a=null,n=Ii;n!==null;){var l=n.next,i=Hd(n,t);i===0?(n.next=null,a===null?Ii=l:a.next=l,l===null&&(Cn=a)):(a=n,(e!==0||(i&3)!==0)&&(Ci=!0)),n=l}Fe!==0&&Fe!==5||wl(e),Ta!==0&&(Ta=0)}function Hd(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var s=31-_t(i),r=1<<s,c=l[s];c===-1?((r&a)===0||(r&n)!==0)&&(l[s]=nf(r,t)):c<=t&&(e.expiredLanes|=r),i&=~r}if(t=Oe,a=de,a=Bl(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(Se===2||Se===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&lo(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Un(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&lo(n),so(a)){case 2:case 8:a=Tr;break;case 32:a=Cl;break;case 268435456:a=Er;break;default:a=Cl}return n=Bd.bind(null,e),a=no(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&lo(n),e.callbackPriority=2,e.callbackNode=null,2}function Bd(e,t){if(Fe!==0&&Fe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Di()&&e.callbackNode!==a)return null;var n=de;return n=Bl(e,e===Oe?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(_d(e,n,t),Hd(e,bt()),e.callbackNode!=null&&e.callbackNode===a?Bd.bind(null,e):null)}function Vd(e,t){if(Di())return null;_d(e,t,!0)}function Om(){Gm(function(){(_e&6)!==0?no(jr,Mm):Rd()})}function Ks(){if(Ta===0){var e=_n;e===0&&(e=Ll,Ll<<=1,(Ll&261888)===0&&(Ll=256)),Ta=e}return Ta}function Ud(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ql(""+e)}function Yd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Dm(e,t,a,n,l){if(t==="submit"&&a&&a.stateNode===l){var i=Ud((l[dt]||null).action),s=n.submitter;s&&(t=(t=s[dt]||null)?Ud(t.formAction):s.getAttribute("formAction"),t!==null&&(i=t,s=null));var r=new Zl("action","action",null,n,l);e.push({event:r,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Ta!==0){var c=s?Yd(l,s):new FormData(l);ms(a,{pending:!0,data:c,method:l.method,action:i},null,c)}}else typeof i=="function"&&(r.preventDefault(),c=s?Yd(l,s):new FormData(l),ms(a,{pending:!0,data:c,method:l.method,action:i},i,c))},currentTarget:l}]})}}for(var Ws=0;Ws<Mo.length;Ws++){var Js=Mo[Ws],Im=Js.toLowerCase(),Cm=Js[0].toUpperCase()+Js.slice(1);Ht(Im,"on"+Cm)}Ht(vu,"onAnimationEnd"),Ht(_u,"onAnimationIteration"),Ht(xu,"onAnimationStart"),Ht("dblclick","onDoubleClick"),Ht("focusin","onFocus"),Ht("focusout","onBlur"),Ht(Ff,"onTransitionRun"),Ht($f,"onTransitionStart"),Ht(Pf,"onTransitionCancel"),Ht(wu,"onTransitionEnd"),on("onMouseEnter",["mouseout","mouseover"]),on("onMouseLeave",["mouseout","mouseover"]),on("onPointerEnter",["pointerout","pointerover"]),on("onPointerLeave",["pointerout","pointerover"]),Ha("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ha("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ha("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ha("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ha("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ha("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Al));function qd(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],l=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var s=n.length-1;0<=s;s--){var r=n[s],c=r.instance,g=r.currentTarget;if(r=r.listener,c!==i&&l.isPropagationStopped())break e;i=r,l.currentTarget=g;try{i(l)}catch(w){Jl(w)}l.currentTarget=null,i=c}else for(s=0;s<n.length;s++){if(r=n[s],c=r.instance,g=r.currentTarget,r=r.listener,c!==i&&l.isPropagationStopped())break e;i=r,l.currentTarget=g;try{i(l)}catch(w){Jl(w)}l.currentTarget=null,i=c}}}}function ue(e,t){var a=t[ro];a===void 0&&(a=t[ro]=new Set);var n=e+"__bubble";a.has(n)||(Gd(t,e,2,!1),a.add(n))}function Fs(e,t,a){var n=0;t&&(n|=4),Gd(a,e,n,t)}var Li="_reactListening"+Math.random().toString(36).slice(2);function $s(e){if(!e[Li]){e[Li]=!0,Rr.forEach(function(a){a!=="selectionchange"&&(Lm.has(a)||Fs(a,!1,e),Fs(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Li]||(t[Li]=!0,Fs("selectionchange",!1,t))}}function Gd(e,t,a,n){switch(vh(t)){case 2:var l=cp;break;case 8:l=dp;break;default:l=fr}a=l.bind(null,t,a,e),l=void 0,!bo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function Ps(e,t,a,n,l){var i=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var r=n.stateNode.containerInfo;if(r===l)break;if(s===4)for(s=n.return;s!==null;){var c=s.tag;if((c===3||c===4)&&s.stateNode.containerInfo===l)return;s=s.return}for(;r!==null;){if(s=an(r),s===null)return;if(c=s.tag,c===5||c===6||c===26||c===27){n=i=s;continue e}r=r.parentNode}}n=n.return}Wr(function(){var g=i,w=yo(a),k=[];e:{var b=Au.get(e);if(b!==void 0){var v=Zl,V=e;switch(e){case"keypress":if(Ql(a)===0)break e;case"keydown":case"keyup":v=Ef;break;case"focusin":V="focus",v=wo;break;case"focusout":V="blur",v=wo;break;case"beforeblur":case"afterblur":v=wo;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=$r;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=gf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Of;break;case vu:case _u:case xu:v=_f;break;case wu:v=If;break;case"scroll":case"scrollend":v=pf;break;case"wheel":v=Lf;break;case"copy":case"cut":case"paste":v=wf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=eu;break;case"toggle":case"beforetoggle":v=Hf}var W=(t&4)!==0,Te=!W&&(e==="scroll"||e==="scrollend"),p=W?b!==null?b+"Capture":null:b;W=[];for(var h=g,y;h!==null;){var A=h;if(y=A.stateNode,A=A.tag,A!==5&&A!==26&&A!==27||y===null||p===null||(A=Qn(h,p),A!=null&&W.push(Sl(h,A,y))),Te)break;h=h.return}0<W.length&&(b=new v(b,V,null,a,w),k.push({event:b,listeners:W}))}}if((t&7)===0){e:{if(b=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",b&&a!==po&&(V=a.relatedTarget||a.fromElement)&&(an(V)||V[tn]))break e;if((v||b)&&(b=w.window===w?w:(b=w.ownerDocument)?b.defaultView||b.parentWindow:window,v?(V=a.relatedTarget||a.toElement,v=g,V=V?an(V):null,V!==null&&(Te=D(V),W=V.tag,V!==Te||W!==5&&W!==27&&W!==6)&&(V=null)):(v=null,V=g),v!==V)){if(W=$r,A="onMouseLeave",p="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(W=eu,A="onPointerLeave",p="onPointerEnter",h="pointer"),Te=v==null?b:Gn(v),y=V==null?b:Gn(V),b=new W(A,h+"leave",v,a,w),b.target=Te,b.relatedTarget=y,A=null,an(w)===g&&(W=new W(p,h+"enter",V,a,w),W.target=y,W.relatedTarget=Te,A=W),Te=A,v&&V)t:{for(W=Rm,p=v,h=V,y=0,A=p;A;A=W(A))y++;A=0;for(var Q=h;Q;Q=W(Q))A++;for(;0<y-A;)p=W(p),y--;for(;0<A-y;)h=W(h),A--;for(;y--;){if(p===h||h!==null&&p===h.alternate){W=p;break t}p=W(p),h=W(h)}W=null}else W=null;v!==null&&Qd(k,b,v,W,!1),V!==null&&Te!==null&&Qd(k,Te,V,W,!0)}}e:{if(b=g?Gn(g):window,v=b.nodeName&&b.nodeName.toLowerCase(),v==="select"||v==="input"&&b.type==="file")var ge=ru;else if(ou(b))if(uu)ge=Kf;else{ge=Xf;var Y=Qf}else v=b.nodeName,!v||v.toLowerCase()!=="input"||b.type!=="checkbox"&&b.type!=="radio"?g&&mo(g.elementType)&&(ge=ru):ge=Zf;if(ge&&(ge=ge(e,g))){su(k,ge,a,w);break e}Y&&Y(e,b,g),e==="focusout"&&g&&b.type==="number"&&g.memoizedProps.value!=null&&fo(b,"number",b.value)}switch(Y=g?Gn(g):window,e){case"focusin":(ou(Y)||Y.contentEditable==="true")&&(hn=Y,To=g,Pn=null);break;case"focusout":Pn=To=hn=null;break;case"mousedown":Eo=!0;break;case"contextmenu":case"mouseup":case"dragend":Eo=!1,gu(k,a,w);break;case"selectionchange":if(Jf)break;case"keydown":case"keyup":gu(k,a,w)}var ie;if(So)e:{switch(e){case"compositionstart":var he="onCompositionStart";break e;case"compositionend":he="onCompositionEnd";break e;case"compositionupdate":he="onCompositionUpdate";break e}he=void 0}else dn?lu(e,a)&&(he="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(he="onCompositionStart");he&&(tu&&a.locale!=="ko"&&(dn||he!=="onCompositionStart"?he==="onCompositionEnd"&&dn&&(ie=Jr()):(ha=w,vo="value"in ha?ha.value:ha.textContent,dn=!0)),Y=Ri(g,he),0<Y.length&&(he=new Pr(he,e,null,a,w),k.push({event:he,listeners:Y}),ie?he.data=ie:(ie=iu(a),ie!==null&&(he.data=ie)))),(ie=Vf?Uf(e,a):Yf(e,a))&&(he=Ri(g,"onBeforeInput"),0<he.length&&(Y=new Pr("onBeforeInput","beforeinput",null,a,w),k.push({event:Y,listeners:he}),Y.data=ie)),Dm(k,e,g,a,w)}qd(k,t)})}function Sl(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ri(e,t){for(var a=t+"Capture",n=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=Qn(e,a),l!=null&&n.unshift(Sl(e,l,i)),l=Qn(e,t),l!=null&&n.push(Sl(e,l,i))),e.tag===3)return n;e=e.return}return[]}function Rm(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Qd(e,t,a,n,l){for(var i=t._reactName,s=[];a!==null&&a!==n;){var r=a,c=r.alternate,g=r.stateNode;if(r=r.tag,c!==null&&c===n)break;r!==5&&r!==26&&r!==27||g===null||(c=g,l?(g=Qn(a,i),g!=null&&s.unshift(Sl(a,g,c))):l||(g=Qn(a,i),g!=null&&s.push(Sl(a,g,c)))),a=a.return}s.length!==0&&e.push({event:t,listeners:s})}var Hm=/\r\n?/g,Bm=/\u0000|\uFFFD/g;function Xd(e){return(typeof e=="string"?e:""+e).replace(Hm,`
`).replace(Bm,"")}function Zd(e,t){return t=Xd(t),Xd(e)===t}function je(e,t,a,n,l,i){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||rn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&rn(e,""+n);break;case"className":Ul(e,"class",n);break;case"tabIndex":Ul(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Ul(e,a,n);break;case"style":Zr(e,n,i);break;case"data":if(t!=="object"){Ul(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=ql(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&je(e,t,"name",l.name,l,null),je(e,t,"formEncType",l.formEncType,l,null),je(e,t,"formMethod",l.formMethod,l,null),je(e,t,"formTarget",l.formTarget,l,null)):(je(e,t,"encType",l.encType,l,null),je(e,t,"method",l.method,l,null),je(e,t,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=ql(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Zt);break;case"onScroll":n!=null&&ue("scroll",e);break;case"onScrollEnd":n!=null&&ue("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(f(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(f(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=ql(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":ue("beforetoggle",e),ue("toggle",e),Vl(e,"popover",n);break;case"xlinkActuate":Xt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Xt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Xt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Xt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Xt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Xt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Vl(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ff.get(a)||a,Vl(e,a,n))}}function er(e,t,a,n,l,i){switch(a){case"style":Zr(e,n,i);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(f(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(f(60));e.innerHTML=a}}break;case"children":typeof n=="string"?rn(e,n):(typeof n=="number"||typeof n=="bigint")&&rn(e,""+n);break;case"onScroll":n!=null&&ue("scroll",e);break;case"onScrollEnd":n!=null&&ue("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Zt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Hr.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),i=e[dt]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,l),typeof n=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,l);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Vl(e,a,n)}}}function ot(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ue("error",e),ue("load",e);var n=!1,l=!1,i;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];if(s!=null)switch(i){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,t));default:je(e,t,i,s,a,null)}}l&&je(e,t,"srcSet",a.srcSet,a,null),n&&je(e,t,"src",a.src,a,null);return;case"input":ue("invalid",e);var r=i=s=l=null,c=null,g=null;for(n in a)if(a.hasOwnProperty(n)){var w=a[n];if(w!=null)switch(n){case"name":l=w;break;case"type":s=w;break;case"checked":c=w;break;case"defaultChecked":g=w;break;case"value":i=w;break;case"defaultValue":r=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(f(137,t));break;default:je(e,t,n,w,a,null)}}qr(e,i,r,c,g,s,l,!1);return;case"select":ue("invalid",e),n=s=i=null;for(l in a)if(a.hasOwnProperty(l)&&(r=a[l],r!=null))switch(l){case"value":i=r;break;case"defaultValue":s=r;break;case"multiple":n=r;default:je(e,t,l,r,a,null)}t=i,a=s,e.multiple=!!n,t!=null?sn(e,!!n,t,!1):a!=null&&sn(e,!!n,a,!0);return;case"textarea":ue("invalid",e),i=l=n=null;for(s in a)if(a.hasOwnProperty(s)&&(r=a[s],r!=null))switch(s){case"value":n=r;break;case"defaultValue":l=r;break;case"children":i=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(f(91));break;default:je(e,t,s,r,a,null)}Qr(e,n,l,i);return;case"option":for(c in a)if(a.hasOwnProperty(c)&&(n=a[c],n!=null))switch(c){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:je(e,t,c,n,a,null)}return;case"dialog":ue("beforetoggle",e),ue("toggle",e),ue("cancel",e),ue("close",e);break;case"iframe":case"object":ue("load",e);break;case"video":case"audio":for(n=0;n<Al.length;n++)ue(Al[n],e);break;case"image":ue("error",e),ue("load",e);break;case"details":ue("toggle",e);break;case"embed":case"source":case"link":ue("error",e),ue("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in a)if(a.hasOwnProperty(g)&&(n=a[g],n!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,t));default:je(e,t,g,n,a,null)}return;default:if(mo(t)){for(w in a)a.hasOwnProperty(w)&&(n=a[w],n!==void 0&&er(e,t,w,n,a,void 0));return}}for(r in a)a.hasOwnProperty(r)&&(n=a[r],n!=null&&je(e,t,r,n,a,null))}function Vm(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,s=null,r=null,c=null,g=null,w=null;for(v in a){var k=a[v];if(a.hasOwnProperty(v)&&k!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":c=k;default:n.hasOwnProperty(v)||je(e,t,v,null,n,k)}}for(var b in n){var v=n[b];if(k=a[b],n.hasOwnProperty(b)&&(v!=null||k!=null))switch(b){case"type":i=v;break;case"name":l=v;break;case"checked":g=v;break;case"defaultChecked":w=v;break;case"value":s=v;break;case"defaultValue":r=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(f(137,t));break;default:v!==k&&je(e,t,b,v,n,k)}}ho(e,s,r,c,g,w,i,l);return;case"select":v=s=r=b=null;for(i in a)if(c=a[i],a.hasOwnProperty(i)&&c!=null)switch(i){case"value":break;case"multiple":v=c;default:n.hasOwnProperty(i)||je(e,t,i,null,n,c)}for(l in n)if(i=n[l],c=a[l],n.hasOwnProperty(l)&&(i!=null||c!=null))switch(l){case"value":b=i;break;case"defaultValue":r=i;break;case"multiple":s=i;default:i!==c&&je(e,t,l,i,n,c)}t=r,a=s,n=v,b!=null?sn(e,!!a,b,!1):!!n!=!!a&&(t!=null?sn(e,!!a,t,!0):sn(e,!!a,a?[]:"",!1));return;case"textarea":v=b=null;for(r in a)if(l=a[r],a.hasOwnProperty(r)&&l!=null&&!n.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:je(e,t,r,null,n,l)}for(s in n)if(l=n[s],i=a[s],n.hasOwnProperty(s)&&(l!=null||i!=null))switch(s){case"value":b=l;break;case"defaultValue":v=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(f(91));break;default:l!==i&&je(e,t,s,l,n,i)}Gr(e,b,v);return;case"option":for(var V in a)if(b=a[V],a.hasOwnProperty(V)&&b!=null&&!n.hasOwnProperty(V))switch(V){case"selected":e.selected=!1;break;default:je(e,t,V,null,n,b)}for(c in n)if(b=n[c],v=a[c],n.hasOwnProperty(c)&&b!==v&&(b!=null||v!=null))switch(c){case"selected":e.selected=b&&typeof b!="function"&&typeof b!="symbol";break;default:je(e,t,c,b,n,v)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var W in a)b=a[W],a.hasOwnProperty(W)&&b!=null&&!n.hasOwnProperty(W)&&je(e,t,W,null,n,b);for(g in n)if(b=n[g],v=a[g],n.hasOwnProperty(g)&&b!==v&&(b!=null||v!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(f(137,t));break;default:je(e,t,g,b,n,v)}return;default:if(mo(t)){for(var Te in a)b=a[Te],a.hasOwnProperty(Te)&&b!==void 0&&!n.hasOwnProperty(Te)&&er(e,t,Te,void 0,n,b);for(w in n)b=n[w],v=a[w],!n.hasOwnProperty(w)||b===v||b===void 0&&v===void 0||er(e,t,w,b,n,v);return}}for(var p in a)b=a[p],a.hasOwnProperty(p)&&b!=null&&!n.hasOwnProperty(p)&&je(e,t,p,null,n,b);for(k in n)b=n[k],v=a[k],!n.hasOwnProperty(k)||b===v||b==null&&v==null||je(e,t,k,b,n,v)}function Kd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Um(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var l=a[n],i=l.transferSize,s=l.initiatorType,r=l.duration;if(i&&r&&Kd(s)){for(s=0,r=l.responseEnd,n+=1;n<a.length;n++){var c=a[n],g=c.startTime;if(g>r)break;var w=c.transferSize,k=c.initiatorType;w&&Kd(k)&&(c=c.responseEnd,s+=w*(c<r?1:(r-g)/(c-g)))}if(--n,t+=8*(i+s)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var tr=null,ar=null;function Hi(e){return e.nodeType===9?e:e.ownerDocument}function Wd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Jd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function nr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var lr=null;function Ym(){var e=window.event;return e&&e.type==="popstate"?e===lr?!1:(lr=e,!0):(lr=null,!1)}var Fd=typeof setTimeout=="function"?setTimeout:void 0,qm=typeof clearTimeout=="function"?clearTimeout:void 0,$d=typeof Promise=="function"?Promise:void 0,Gm=typeof queueMicrotask=="function"?queueMicrotask:typeof $d<"u"?function(e){return $d.resolve(null).then(e).catch(Qm)}:Fd;function Qm(e){setTimeout(function(){throw e})}function Ea(e){return e==="head"}function Pd(e,t){var a=t,n=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(l),Bn(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")kl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,kl(a);for(var i=a.firstChild;i;){var s=i.nextSibling,r=i.nodeName;i[qn]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=s}}else a==="body"&&kl(e.ownerDocument.body);a=l}while(a);Bn(t)}function eh(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function ir(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ir(a),uo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Xm(e,t,a,n){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[qn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Lt(e.nextSibling),e===null)break}return null}function Zm(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Lt(e.nextSibling),e===null))return null;return e}function th(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Lt(e.nextSibling),e===null))return null;return e}function or(e){return e.data==="$?"||e.data==="$~"}function sr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Km(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Lt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var rr=null;function ah(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Lt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function nh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function lh(e,t,a){switch(t=Hi(a),e){case"html":if(e=t.documentElement,!e)throw Error(f(452));return e;case"head":if(e=t.head,!e)throw Error(f(453));return e;case"body":if(e=t.body,!e)throw Error(f(454));return e;default:throw Error(f(451))}}function kl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);uo(e)}var Rt=new Map,ih=new Set;function Bi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ua=C.d;C.d={f:Wm,r:Jm,D:Fm,C:$m,L:Pm,m:ep,X:ap,S:tp,M:np};function Wm(){var e=ua.f(),t=zi();return e||t}function Jm(e){var t=nn(e);t!==null&&t.tag===5&&t.type==="form"?wc(t):ua.r(e)}var Ln=typeof document>"u"?null:document;function oh(e,t,a){var n=Ln;if(n&&typeof t=="string"&&t){var l=Et(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),ih.has(l)||(ih.add(l),e={rel:e,crossOrigin:a,href:t},n.querySelector(l)===null&&(t=n.createElement("link"),ot(t,"link",e),Pe(t),n.head.appendChild(t)))}}function Fm(e){ua.D(e),oh("dns-prefetch",e,null)}function $m(e,t){ua.C(e,t),oh("preconnect",e,t)}function Pm(e,t,a){ua.L(e,t,a);var n=Ln;if(n&&e&&t){var l='link[rel="preload"][as="'+Et(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Et(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Et(a.imageSizes)+'"]')):l+='[href="'+Et(e)+'"]';var i=l;switch(t){case"style":i=Rn(e);break;case"script":i=Hn(e)}Rt.has(i)||(e=H({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Rt.set(i,e),n.querySelector(l)!==null||t==="style"&&n.querySelector(Nl(i))||t==="script"&&n.querySelector(jl(i))||(t=n.createElement("link"),ot(t,"link",e),Pe(t),n.head.appendChild(t)))}}function ep(e,t){ua.m(e,t);var a=Ln;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Et(n)+'"][href="'+Et(e)+'"]',i=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Hn(e)}if(!Rt.has(i)&&(e=H({rel:"modulepreload",href:e},t),Rt.set(i,e),a.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(jl(i)))return}n=a.createElement("link"),ot(n,"link",e),Pe(n),a.head.appendChild(n)}}}function tp(e,t,a){ua.S(e,t,a);var n=Ln;if(n&&e){var l=ln(n).hoistableStyles,i=Rn(e);t=t||"default";var s=l.get(i);if(!s){var r={loading:0,preload:null};if(s=n.querySelector(Nl(i)))r.loading=5;else{e=H({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Rt.get(i))&&ur(e,a);var c=s=n.createElement("link");Pe(c),ot(c,"link",e),c._p=new Promise(function(g,w){c.onload=g,c.onerror=w}),c.addEventListener("load",function(){r.loading|=1}),c.addEventListener("error",function(){r.loading|=2}),r.loading|=4,Vi(s,t,n)}s={type:"stylesheet",instance:s,count:1,state:r},l.set(i,s)}}}function ap(e,t){ua.X(e,t);var a=Ln;if(a&&e){var n=ln(a).hoistableScripts,l=Hn(e),i=n.get(l);i||(i=a.querySelector(jl(l)),i||(e=H({src:e,async:!0},t),(t=Rt.get(l))&&cr(e,t),i=a.createElement("script"),Pe(i),ot(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function np(e,t){ua.M(e,t);var a=Ln;if(a&&e){var n=ln(a).hoistableScripts,l=Hn(e),i=n.get(l);i||(i=a.querySelector(jl(l)),i||(e=H({src:e,async:!0,type:"module"},t),(t=Rt.get(l))&&cr(e,t),i=a.createElement("script"),Pe(i),ot(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function sh(e,t,a,n){var l=(l=R.current)?Bi(l):null;if(!l)throw Error(f(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Rn(a.href),a=ln(l).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Rn(a.href);var i=ln(l).hoistableStyles,s=i.get(e);if(s||(l=l.ownerDocument||l,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,s),(i=l.querySelector(Nl(e)))&&!i._p&&(s.instance=i,s.state.loading=5),Rt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Rt.set(e,a),i||lp(l,e,a,s.state))),t&&n===null)throw Error(f(528,""));return s}if(t&&n!==null)throw Error(f(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Hn(a),a=ln(l).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,e))}}function Rn(e){return'href="'+Et(e)+'"'}function Nl(e){return'link[rel="stylesheet"]['+e+"]"}function rh(e){return H({},e,{"data-precedence":e.precedence,precedence:null})}function lp(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),ot(t,"link",a),Pe(t),e.head.appendChild(t))}function Hn(e){return'[src="'+Et(e)+'"]'}function jl(e){return"script[async]"+e}function uh(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+Et(a.href)+'"]');if(n)return t.instance=n,Pe(n),n;var l=H({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Pe(n),ot(n,"style",l),Vi(n,a.precedence,e),t.instance=n;case"stylesheet":l=Rn(a.href);var i=e.querySelector(Nl(l));if(i)return t.state.loading|=4,t.instance=i,Pe(i),i;n=rh(a),(l=Rt.get(l))&&ur(n,l),i=(e.ownerDocument||e).createElement("link"),Pe(i);var s=i;return s._p=new Promise(function(r,c){s.onload=r,s.onerror=c}),ot(i,"link",n),t.state.loading|=4,Vi(i,a.precedence,e),t.instance=i;case"script":return i=Hn(a.src),(l=e.querySelector(jl(i)))?(t.instance=l,Pe(l),l):(n=a,(l=Rt.get(i))&&(n=H({},a),cr(n,l)),e=e.ownerDocument||e,l=e.createElement("script"),Pe(l),ot(l,"link",n),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(f(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Vi(n,a.precedence,e));return t.instance}function Vi(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,i=l,s=0;s<n.length;s++){var r=n[s];if(r.dataset.precedence===t)i=r;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function ur(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function cr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ui=null;function ch(e,t,a){if(Ui===null){var n=new Map,l=Ui=new Map;l.set(a,n)}else l=Ui,n=l.get(a),n||(n=new Map,l.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var i=a[l];if(!(i[qn]||i[at]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var s=i.getAttribute(t)||"";s=e+s;var r=n.get(s);r?r.push(i):n.set(s,[i])}}return n}function dh(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function ip(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function hh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function op(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=Rn(n.href),i=t.querySelector(Nl(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Yi.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Pe(i);return}i=t.ownerDocument||t,n=rh(n),(l=Rt.get(l))&&ur(n,l),i=i.createElement("link"),Pe(i);var s=i;s._p=new Promise(function(r,c){s.onload=r,s.onerror=c}),ot(i,"link",n),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Yi.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var dr=0;function sp(e,t){return e.stylesheets&&e.count===0&&Gi(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&Gi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&dr===0&&(dr=62500*Um());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Gi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>dr?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(l)}}:null}function Yi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Gi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var qi=null;function Gi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,qi=new Map,t.forEach(rp,e),qi=null,Yi.call(e))}function rp(e,t){if(!(t.state.loading&4)){var a=qi.get(e);if(a)var n=a.get(null);else{a=new Map,qi.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var s=l[i];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),n=s)}n&&a.set(null,n)}l=t.instance,s=l.getAttribute("data-precedence"),i=a.get(s)||n,i===n&&a.set(null,l),a.set(s,l),this.count++,n=Yi.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Tl={$$typeof:$,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function up(e,t,a,n,l,i,s,r,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=io(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=io(0),this.hiddenUpdates=io(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function fh(e,t,a,n,l,i,s,r,c,g,w,k){return e=new up(e,t,a,s,c,g,w,k,r),t=1,i===!0&&(t|=24),i=wt(3,null,null,t),e.current=i,i.stateNode=e,t=Go(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:n,isDehydrated:a,cache:t},Ko(i),e}function mh(e){return e?(e=pn,e):pn}function ph(e,t,a,n,l,i){l=mh(l),n.context===null?n.context=l:n.pendingContext=l,n=ba(t),n.payload={element:a},i=i===void 0?null:i,i!==null&&(n.callback=i),a=va(e,n,t),a!==null&&(gt(a,e,t),ol(a,e,t))}function yh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function hr(e,t){yh(e,t),(e=e.alternate)&&yh(e,t)}function gh(e){if(e.tag===13||e.tag===31){var t=Ya(e,67108864);t!==null&&gt(t,e,67108864),hr(e,67108864)}}function bh(e){if(e.tag===13||e.tag===31){var t=jt();t=oo(t);var a=Ya(e,t);a!==null&&gt(a,e,t),hr(e,t)}}var Qi=!0;function cp(e,t,a,n){var l=_.T;_.T=null;var i=C.p;try{C.p=2,fr(e,t,a,n)}finally{C.p=i,_.T=l}}function dp(e,t,a,n){var l=_.T;_.T=null;var i=C.p;try{C.p=8,fr(e,t,a,n)}finally{C.p=i,_.T=l}}function fr(e,t,a,n){if(Qi){var l=mr(n);if(l===null)Ps(e,t,n,Xi,a),_h(e,n);else if(fp(l,e,t,a,n))n.stopPropagation();else if(_h(e,n),t&4&&-1<hp.indexOf(e)){for(;l!==null;){var i=nn(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var s=Ra(i.pendingLanes);if(s!==0){var r=i;for(r.pendingLanes|=2,r.entangledLanes|=2;s;){var c=1<<31-_t(s);r.entanglements[1]|=c,s&=~c}Qt(i),(_e&6)===0&&(Ti=bt()+500,wl(0))}}break;case 31:case 13:r=Ya(i,2),r!==null&&gt(r,i,2),zi(),hr(i,2)}if(i=mr(n),i===null&&Ps(e,t,n,Xi,a),i===l)break;l=i}l!==null&&n.stopPropagation()}else Ps(e,t,n,null,a)}}function mr(e){return e=yo(e),pr(e)}var Xi=null;function pr(e){if(Xi=null,e=an(e),e!==null){var t=D(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=j(t),e!==null)return e;e=null}else if(a===31){if(e=q(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Xi=e,null}function vh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Jh()){case jr:return 2;case Tr:return 8;case Cl:case Fh:return 32;case Er:return 268435456;default:return 32}default:return 32}}var yr=!1,za=null,Ma=null,Oa=null,El=new Map,zl=new Map,Da=[],hp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _h(e,t){switch(e){case"focusin":case"focusout":za=null;break;case"dragenter":case"dragleave":Ma=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":El.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zl.delete(t.pointerId)}}function Ml(e,t,a,n,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:i,targetContainers:[l]},t!==null&&(t=nn(t),t!==null&&gh(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function fp(e,t,a,n,l){switch(t){case"focusin":return za=Ml(za,e,t,a,n,l),!0;case"dragenter":return Ma=Ml(Ma,e,t,a,n,l),!0;case"mouseover":return Oa=Ml(Oa,e,t,a,n,l),!0;case"pointerover":var i=l.pointerId;return El.set(i,Ml(El.get(i)||null,e,t,a,n,l)),!0;case"gotpointercapture":return i=l.pointerId,zl.set(i,Ml(zl.get(i)||null,e,t,a,n,l)),!0}return!1}function xh(e){var t=an(e.target);if(t!==null){var a=D(t);if(a!==null){if(t=a.tag,t===13){if(t=j(a),t!==null){e.blockedOn=t,Cr(e.priority,function(){bh(a)});return}}else if(t===31){if(t=q(a),t!==null){e.blockedOn=t,Cr(e.priority,function(){bh(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=mr(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);po=n,a.target.dispatchEvent(n),po=null}else return t=nn(a),t!==null&&gh(t),e.blockedOn=a,!1;t.shift()}return!0}function wh(e,t,a){Zi(e)&&a.delete(t)}function mp(){yr=!1,za!==null&&Zi(za)&&(za=null),Ma!==null&&Zi(Ma)&&(Ma=null),Oa!==null&&Zi(Oa)&&(Oa=null),El.forEach(wh),zl.forEach(wh)}function Ki(e,t){e.blockedOn===t&&(e.blockedOn=null,yr||(yr=!0,m.unstable_scheduleCallback(m.unstable_NormalPriority,mp)))}var Wi=null;function Ah(e){Wi!==e&&(Wi=e,m.unstable_scheduleCallback(m.unstable_NormalPriority,function(){Wi===e&&(Wi=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],l=e[t+2];if(typeof n!="function"){if(pr(n||a)===null)continue;break}var i=nn(a);i!==null&&(e.splice(t,3),t-=3,ms(i,{pending:!0,data:l,method:a.method,action:n},n,l))}}))}function Bn(e){function t(c){return Ki(c,e)}za!==null&&Ki(za,e),Ma!==null&&Ki(Ma,e),Oa!==null&&Ki(Oa,e),El.forEach(t),zl.forEach(t);for(var a=0;a<Da.length;a++){var n=Da[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Da.length&&(a=Da[0],a.blockedOn===null);)xh(a),a.blockedOn===null&&Da.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var l=a[n],i=a[n+1],s=l[dt]||null;if(typeof i=="function")s||Ah(a);else if(s){var r=null;if(i&&i.hasAttribute("formAction")){if(l=i,s=i[dt]||null)r=s.formAction;else if(pr(l)!==null)continue}else r=s.action;typeof r=="function"?a[n+1]=r:(a.splice(n,3),n-=3),Ah(a)}}}function Sh(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(s){return l=s})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function gr(e){this._internalRoot=e}Ji.prototype.render=gr.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(f(409));var a=t.current,n=jt();ph(a,n,e,t,null,null)},Ji.prototype.unmount=gr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ph(e.current,2,null,e,null,null),zi(),t[tn]=null}};function Ji(e){this._internalRoot=e}Ji.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ir();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Da.length&&t!==0&&t<Da[a].priority;a++);Da.splice(a,0,e),a===0&&xh(e)}};var kh=S.version;if(kh!=="19.2.3")throw Error(f(527,kh,"19.2.3"));C.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(f(188)):(e=Object.keys(e).join(","),Error(f(268,e)));return e=x(t),e=e!==null?B(e):null,e=e===null?null:e.stateNode,e};var pp={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fi.isDisabled&&Fi.supportsFiber)try{Vn=Fi.inject(pp),vt=Fi}catch{}}return Dl.createRoot=function(e,t){if(!I(e))throw Error(f(299));var a=!1,n="",l=Oc,i=Dc,s=Ic;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=fh(e,1,!1,null,null,a,n,null,l,i,s,Sh),e[tn]=t.current,$s(e),new gr(t)},Dl.hydrateRoot=function(e,t,a){if(!I(e))throw Error(f(299));var n=!1,l="",i=Oc,s=Dc,r=Ic,c=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(r=a.onRecoverableError),a.formState!==void 0&&(c=a.formState)),t=fh(e,1,!0,t,a??null,n,l,c,i,s,r,Sh),t.context=mh(null),a=t.current,n=jt(),n=oo(n),l=ba(n),l.callback=null,va(a,l,n),a=n,t.current.lanes=a,Yn(t,a),Qt(t),e[tn]=t.current,$s(e),new Ji(t)},Dl.version="19.2.3",Dl}var Ch;function Np(){if(Ch)return _r.exports;Ch=1;function m(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m)}catch(S){console.error(S)}}return m(),_r.exports=kp(),_r.exports}var jp=Np();const Tp=Yh(jp),Ep=({children:m,disableFilmEffects:S=!1})=>o.jsxs("div",{className:"relative w-full h-screen bg-stone-900 overflow-hidden font-serif-film text-stone-300 selection:bg-red-900 selection:text-white",children:[!S&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"absolute inset-0 pointer-events-none z-50 mix-blend-overlay opacity-30 film-grain"}),o.jsx("div",{className:"scratch-line left-1/4"}),o.jsx("div",{className:"scratch-line left-3/4 animation-delay-2000"})]}),o.jsx("div",{className:"absolute inset-0 pointer-events-none z-50 bg-[radial-gradient(circle,transparent_50%,#000000_150%)]"}),o.jsx("div",{className:`relative w-full h-full flex items-center justify-center ${S?"":"filter sepia-[0.3] contrast-[1.1] brightness-[0.9] flicker"}`,children:o.jsx("div",{className:"w-full max-w-4xl h-[90vh] border-4 border-stone-800 bg-stone-950 shadow-2xl relative overflow-hidden flex flex-col",children:m})})]}),zp=({unlockedLogs:m,unlockedBlogs:S,unlockedReels:E})=>{const q=m.length+S.length+E.length,z=Math.round(q/50*100);return o.jsx("div",{className:"w-full bg-[#0f0e0d]/30 border border-[#3d342b] rounded-sm px-3 sm:px-4 py-3",children:o.jsxs("div",{className:"flex flex-wrap items-center gap-3 sm:gap-4",children:[o.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[o.jsx("span",{className:"text-[9px] font-mono text-[#8c8273] uppercase tracking-wider",children:"Progress"}),o.jsxs("span",{className:"text-base sm:text-lg font-bold font-mono text-[#d6cbb8]",children:[z,"%"]})]}),o.jsx("div",{className:"flex-1 min-w-[120px] h-2 bg-[#1a1816] border border-[#3d342b] overflow-hidden rounded-sm",children:o.jsx("div",{className:"h-full bg-gradient-to-r from-[#8c8273] via-[#a89078] to-[#d6cbb8] transition-all duration-500 ease-out",style:{width:`${z}%`}})}),o.jsxs("div",{className:"flex items-center gap-2 sm:gap-3 text-[10px] font-mono text-[#8c8273] shrink-0",children:[o.jsxs("span",{className:"whitespace-nowrap",children:[o.jsx("span",{className:"text-[#d6cbb8] font-bold",children:m.length}),"/",19,"R"]}),o.jsxs("span",{className:"whitespace-nowrap",children:[o.jsx("span",{className:"text-[#d6cbb8] font-bold",children:S.length}),"/",19,"B"]}),o.jsxs("span",{className:"whitespace-nowrap",children:[o.jsx("span",{className:"text-[#d6cbb8] font-bold",children:E.length}),"/",12,"F"]})]})]})})},Mp=({items:m,onSelectItem:S,unlockedLogs:E,unlockedBlogs:f,unlockedReels:I})=>o.jsxs("div",{className:"flex-1 flex flex-col bg-[#0f0e0d] relative overflow-y-auto",children:[o.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(40,30,20,0.5)_0%,rgba(0,0,0,1)_90%)] z-0 pointer-events-none"}),o.jsx("div",{className:"absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-0 pointer-events-none mix-blend-overlay"}),o.jsxs("div",{className:"flex-1 flex flex-col items-center p-6 md:p-12 z-10 relative min-h-full",children:[o.jsx("header",{className:"mb-12 border-b border-[#5c4d3c]/30 pb-4 text-center animate-in fade-in slide-in-from-top-4 duration-1000",children:o.jsx("h3",{className:"text-[10px] md:text-xs font-mono tracking-[0.8em] text-[#a89f91] opacity-60 uppercase",children:"Investigation Assets / Phase 01"})}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 w-full max-w-6xl px-4 animate-in fade-in zoom-in duration-1000 slide-in-from-bottom-8",children:m.map((D,j)=>o.jsx("button",{onClick:()=>S(D.id),className:"group relative w-full outline-none text-left perspective-1000 transition-all duration-700",style:{animationDelay:`${j*150}ms`,animationFillMode:"backwards"},children:o.jsxs("div",{className:`
                    relative h-[420px] flex flex-col overflow-hidden rounded-sm
                    bg-gradient-to-b from-[#1a1816] to-[#0a0a0a] 
                    border border-[#3d342b] 
                    shadow-[0_10px_40px_rgba(0,0,0,0.8)] 
                    transition-all duration-700
                    group-hover:border-[#a89078]
                    group-hover:-translate-y-4
                    group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.9)]
                `,children:[o.jsxs("div",{className:"flex-1 bg-black flex items-center justify-center relative overflow-hidden group-hover:bg-[#050505] transition-colors border-b border-[#2e2620]/30",children:[o.jsx("span",{className:"relative z-10 text-6xl md:text-7xl filter sepia-[0.3] group-hover:scale-110 group-hover:sepia-0 group-hover:brightness-125 transition-all duration-700 drop-shadow-[0_0_30px_rgba(214,203,184,0.15)]",children:D.icon}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"}),o.jsx("div",{className:"absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none"})]}),o.jsxs("div",{className:"h-48 p-8 flex flex-col items-center text-center relative bg-[#0f0e0d]",children:[o.jsx("div",{className:"absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/aged-paper-concrete-seamless.png')] opacity-5 mix-blend-overlay pointer-events-none"}),o.jsx("h4",{className:"text-xl md:text-2xl font-serif-film text-[#d6cbb8] tracking-[0.15em] group-hover:text-[#ffecd1] mb-3 transition-colors uppercase",children:D.name}),o.jsx("p",{className:"text-[10px] md:text-xs text-[#8c8273] font-mono leading-relaxed opacity-50 group-hover:opacity-100 transition-opacity max-w-[200px] tracking-tight",children:D.description}),o.jsxs("div",{className:"absolute top-4 right-4 text-[8px] font-mono text-[#4a4036] opacity-30 group-hover:opacity-100 transition-opacity",children:["#ARC_",j+104]}),o.jsx("div",{className:"mt-8 h-[1px] bg-[#3d342b] w-8 group-hover:w-24 group-hover:bg-[#786650] transition-all duration-700"})]}),o.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] transition-opacity duration-700"})]})},D.id))}),o.jsx("div",{className:"w-full max-w-6xl px-4 mt-6 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000",style:{animationDelay:"600ms"},children:o.jsx(zp,{unlockedLogs:E,unlockedBlogs:f,unlockedReels:I})})]})]});var rt=(m=>(m.Chinese="zh",m.English="en",m))(rt||{});const Op={title:{zh:"The Missing Reel",en:"The Missing Reel"},newGame:{zh:"新游戏",en:"New Game"},continueGame:{zh:"继续游戏",en:"Continue"},credits:{zh:"制作人员",en:"Credits"},inventory:{zh:"物品",en:"Inventory"},progress:{zh:"进度",en:"Progress"},recorder:{zh:"小型录音机",en:"Voice Recorder"},recorderDesc:{zh:"里面有一盘磁带，似乎录了一些对话。",en:"Contains a cassette tape with recorded conversations."},notebook:{zh:"博客主页",en:"Blog Archive"},notebookDesc:{zh:"需要密码才能访问的历史日志归档。",en:"Password-protected archive of historical logs."},film:{zh:"8mm 胶卷",en:"8mm Film Reels"},filmDesc:{zh:"共计40个，以4个不同形状的酒杯标记顺序，且每个胶卷上所绘制杯子形状不超过2种。",en:"40 reels total, marked with 4 different glass shapes for ordering. Each reel shows no more than 2 glass types."},recorderWaiting:{zh:"等待输入...",en:"WAITING FOR INPUT..."},recorderEnterInfo:{zh:"请输入完整的姓名和日期。",en:"PLEASE ENTER FULL NAME AND DATE."},recorderSearchSuccess:{zh:"检索成功。加载中...",en:"SEARCH SUCCESSFUL. LOADING..."},recorderExists:{zh:"该录音已存在于列表中。",en:"RECORDING ALREADY IN ARCHIVE."},recorderNotFound:{zh:"错误：未找到对应编号的录音。",en:"ERROR: RECORDING NOT FOUND."},audioLogs:{zh:"录音档案",en:"Audio Logs"},play:{zh:"播放",en:"Play"},pause:{zh:"暂停",en:"Pause"},close:{zh:"关闭",en:"Close"},back:{zh:"返回",en:"Back"},blogTitle:{zh:"Apple's Secret Space",en:"Apple's Secret Space"},blogSubtitle:{zh:"只记录真实的感受。",en:"Recording genuine feelings only."},searchPlaceholder:{zh:"例如: Boiler Maker",en:"e.g.: Boiler Maker"},unlock:{zh:"解锁",en:"Unlock"},logout:{zh:"退出登录",en:"Logout"},archivedEntries:{zh:"已归档条目",en:"Archived Entries"},backToIndex:{zh:"← 返回索引",en:"← BACK TO INDEX"},postedBy:{zh:"发布者",en:"Posted by"},archiveDateLabel:{zh:"始于 2020",en:"SINCE 2020"},readme:{zh:"主页",en:"README"},searchLabel:{zh:"学习检索 (输入鸡尾酒名):",en:"LEARNING SEARCH (ENTER COCKTAIL NAME):"},placeholderName:{zh:"姓名",en:"NAME"},placeholderDate:{zh:"日期",en:"DATE"},blogIntro:{zh:"亲爱的朋友，这是一个不公开博客。 如果你想学习鸡尾酒，请输入酒名查看； 如果你只是想要偷窥我的树洞，那请你转身离开，去看综艺节目吧。",en:"Dear friend, this is a private blog. If you want to learn about cocktails, enter the drink name to search. If you just want to peek into my secrets, please turn around and go watch variety shows instead."},searchError:{zh:"鸡尾酒配方没10000个也有9000个，这么试是学不到真本事的",en:"There are thousands of cocktail recipes - you won't master them by random guessing"},alreadyUnlocked:{zh:"该日志已解锁。",en:"Already unlocked."},filmArchive:{zh:"胶片档案",en:"Film Archive"},selectReel:{zh:"选择胶卷",en:"Select Reel"},reelOverexposed:{zh:"曝光过度，胶片全白。",en:"OVEREXPOSED. FILM IS BLANK."},reelOrderError:{zh:"胶卷顺序错误，无法查看",en:"INCORRECT REEL ORDER. CANNOT VIEW."},progressLabel:{zh:"进度",en:"Progress"},notebookTutorial:{zh:"都出来写博客了，怎么还要这样藏来藏去，看来我要在其他地方获得一些酒名的线索才能偷窥他的树洞。这个闪来闪去的特效又是什么，有没有考虑过读者的眼睛，算他有良心还放了个可以关闭的按钮。",en:"Writes a blog yet still hides like this... Looks like I'll need to find clues for drink names elsewhere to peek into his secret hole. And what is this flickering effect? Has he considered the readers' eyes? Suppose he has some conscience adding a close button."},recorderTutorial:{zh:"苹果这家伙还藏了不少秘密，连一个录音机都设置了机关，看起来除了一个公开的录音外，其他的录音都需要按照对话对象+日期的格式检索才能暴露",en:'Apple has hidden quite a few secrets; even the recorder is rigged. It seems apart from one public log, other logs require searching by "Contact + Date" format to be revealed.'},thoughtBubbleLabel:{zh:"我 / 调查者",en:"Me / Investigator"},briefingSkip:{zh:"跳过",en:"Skip"},endingNextPage:{zh:"下一页",en:"Next Page"},endingClose:{zh:"关闭",en:"Close"},creditsTitle:{zh:"制作人员",en:"Credits"},creditsRole:{zh:"游戏设计与开发",en:"Game Design & Development"},effectsOn:{zh:"特效: ON",en:"Effects: ON"},effectsOff:{zh:"特效: OFF",en:"Effects: OFF"},introSlide1Line1:{zh:'"苹果"是我在摄影社最好的朋友。',en:'"Apple" is my best friend from the photography club.'},introSlide1Line2:{zh:"到今天，他已经不告而别一周了。",en:"As of today, he has been missing for a week without a word."},introSlide2Line1:{zh:"这几年，苹果总是昼伏夜出，行踪神秘。",en:"These past years, Apple has been active at night, his whereabouts mysterious."},introSlide2Line2:{zh:"如今玩失踪，女友再也受不了，决定同他分手。",en:"Now with him missing, his girlfriend couldn't take it anymore and decided to break up."},introSlide2Line3:{zh:"离开前，她将苹果寄放的背包交给了我。",en:"Before leaving, she gave me the backpack Apple had left with her."},introSlide3Header:{zh:"我打开背包，里面躺着：",en:"I OPENED THE BACKPACK, INSIDE LAY:"},introSlide3Item1:{zh:"📹 一台老式 8mm 摄影机",en:"📹 An old 8mm camera"},introSlide3Item2:{zh:"🎞️ 数不清的 8mm 胶卷，有些做了标记，有些是新的",en:"🎞️ Countless 8mm film reels, some marked, some new"},introSlide3Item3:{zh:"📼 一支小型录音机",en:"📼 A small voice recorder"},introSlide4Line1:{zh:"苹果有一个秘密，只有我知道。",en:"Apple has a secret that only I know."},introSlide4Line2:{zh:"这些年，他其实一直在酒吧兼职打工。",en:"All these years, he's actually been working part-time at a bar."},introSlide4Line3:{zh:"他干得很有热情，在个人博客上写学习日记，",en:"He worked passionately, writing learning journals on his personal blog,"},introSlide4Line4:{zh:"但却从未把这件事告诉过生活中的其他朋友。",en:"but never told any of his other friends about this."},introSlide5Line1:{zh:"所以自始至终，我也没能探明那家酒吧究竟在哪。",en:"So from beginning to end, I never found out where that bar actually was."},introSlide5Line2:{zh:"如今，胶卷、录音机和博客，就成了找到苹果的唯一线索。",en:"Now, the film reels, recorder, and blog have become the only clues to finding Apple."},introClickContinue:{zh:"[ 点击继续 ]",en:"[ CLICK TO CONTINUE ]"},introClickStart:{zh:"[ 点击开始调查 ]",en:"[ CLICK TO BEGIN INVESTIGATION ]"},introSkip:{zh:"SKIP",en:"SKIP"},dramElysiumIntro:{zh:"你找到了彩蛋！这是一个随机配方工具，不知道做什么的调酒师们，请感受一下幸运！",en:"You found the Easter egg! This is a random recipe tool. Bartenders who don't know what to make, let's seek some luck!"},dramElysiumSignature:{zh:"——来自不吃苹果的苹果大王",en:"—From The Apple King Who Doesn't Eat Apples"},endingLine1:{zh:"亲爱的朋友，感谢你为「苹果」付出的时光。",en:"Dear friend, thank you for the time you spent searching for 'Apple'."},endingLine2:{zh:"虽然眼下仍未寻得他的踪迹，但已经大致窥见了事件全貌。",en:"Though we still haven't found his whereabouts, we've glimpsed the full picture of events."},endingLine3:{zh:"我们的故事还未结束，仅是暂告段落。现在，请在博客中搜索 'dram elysium'，这是苹果截至最后一篇未被开启的博客内容，给陌生读者的小小礼物。",en:"Our story isn't over, merely paused for now. Search for 'dram elysium' in the blog—this is Apple's final unopened blog entry, a small gift to unknown readers."},endingClickReturn:{zh:"[ 点击返回游戏 ]",en:"[ CLICK TO RETURN TO GAME ]"}};function Z(m,S){return Op[m][S]}const U=m=>m.startsWith("http")||m.startsWith("data:")?m:`/the-missing-reel/${m.startsWith("/")?m.slice(1):m}`,Dp=[{id:"recorder",name:"小型录音机",icon:"📼",description:"里面有一盘磁带，似乎录了一些对话。"},{id:"notebook",name:"博客主页",icon:"💻",description:"需要密码才能访问的历史日志归档。"},{id:"film",name:"8mm 胶卷",icon:"🎞️",description:"共计40个，以4个不同形状的酒杯标记顺序，且每个胶卷上所绘制杯子形状不超过2种。"}],Ip=[{id:"log_auto",searchId:"AUTO_PLAY",title:"阿山_20201020",isAutoPlay:!0,locked:!1,content:`
远处的背景音乐声音细微，仔细听是清脆的镲片声配合细腻的贝斯演奏。近处，一只装满酒的杯子在吧台被推动。
    
__陌生人1__：你尝尝这个。
__苹果__：所以这么做也能算是鸡尾酒吗？
陌生人1：这可是非常经典的做法，把装有烈酒的子弹杯扔进啤酒里，这个做法叫做 __Boiler Maker__，而我们用金酒搭配淡色艾尔啤酒，味道是很搭的。

喝酒的声音。

苹果：竟然真的很清爽。
陌生人1：我还会骗你吗？说吧，听说你有事要跟我聊。
苹果：哦，是的。我在想，你会不会愿意招一些兼职……
陌生人1：你说你自己吗？
苹果：对——也不是，我就想先了解一下。
陌生人1：为什么好奇？
苹果：虽然我最近两个月才成为熟客，但老实说，我很喜欢店里的氛围。客人们同你都很有默契，大家聊天内容也很有意思……总之，这个店虽然看起来很新，但却莫名有些百年老店的味道。

一阵小声说话后，远处客人默契地发出一阵哄笑。

陌生人1：喂，怎么回事呢，注意点分寸哦——那什么，因为这里根本就不是新店呀。之前我们就在别处开过好些年呢，搬家之后，老客人们跟着一起过来了。
苹果：原来如此，可既然气氛那么好，为什么要费劲搬家呢？
陌生人1：呃……反正种种原因吧。
苹果：而且还没有门，藏在另一个酒吧的厕所旁边……不好意思，我没恶意。
陌生人1：没事，很多情况你以后就知道了。
苹果：那么我刚才问您的事……
陌生人1：实话告诉你吧，本来我没有招兼职的计划，但你想来的话——就可以。不过有一点，想在店里工作，好好学习鸡尾酒是必要的，我可不想你以后每天来混日子，还不肯消费！
苹果：您放心，我一定认真学习。`},{id:"log_awen",searchId:"阿文_20201020",title:"阿文_20201020",locked:!0,content:`摇摇晃晃的脚步声由远至近，一个穿着粗气的人在录音机前坐下。

__苹果__：聊得怎么样了？
__阿文__：请我喝酒。
苹果：怎么回事——是说，他同意了吗？
阿文：先请我喝酒！
苹果：那我亲自给你做一杯……这个。
阿文：怎么着，今天就想上岗了吗？我听说酒吧的规矩是得学习半年后才能让做酒——不过现在他已经被我灌醉了，也只能你来做了。

一阵杯具冰块撞击的声音，杯子被沉沉放置在录音机跟前。一阵啜饮品鉴的声音传来。

苹果：喝起来怎么样？
阿文：唔……我不该叛逆的。
苹果：什么意思？
阿文：咱还是老老实实一步步学着来吧。
苹果：难喝？
阿文：你自己尝尝。

一阵吸吮的声音，紧接着液体被吐出来。

苹果：呸——这真没法喝。那什么，还是等我练出来再请你喝酒吧。
阿文：放心，我会记着的。
苹果：这么说他是答应了？
阿文：__你明天自己问他__。
苹果：话说回来，你知道老店为什么关门吗？
阿文：知道啊，闹鬼呗，还能是什么原因。
苹果：不是，真的假的？
阿文：当然是假的。
苹果：我就说嘛。
阿文：这么好奇……那你想听真话吗？
苹果：想啊。
阿文：就是这个原因。
苹果：什么意思？
阿文：自己琢磨去吧，不然怎么要搬到这么个地方来的。`},{id:"log_ashan",searchId:"阿山_20201021",title:"阿山_20201021",locked:!0,content:`十分安静，听不到任何背景音乐。一只沉重的木箱被搬上桌。

__阿山__：就这个东西。
__苹果__：真的能给我用吗？
阿山：用呗，你连胶片都不用买，还有好几十卷吧。

一阵翻动的声音。

苹果：不好意思，可这是谁的摄影机呢？我看有些胶片做了标记，应该是已经被拍过了。
阿山：你是说我不配拥有这么高雅的爱好是吗？
苹果：没……我没这个意思……
阿山：我确实没这个爱好，这是一个老客人留下的，他当时想给店里拍些日常记录，我不同意，他想偷偷拍，被我发现后就扣押了设备。
苹果：那现在怎么让我拍了。
阿山：我有说让你在酒吧里拍了吗？
苹果：我以为……
阿山：嗨，我说笑呢。你想拍就拍吧，我现在是觉得无所谓了。
苹果：那这些已经被标记过的胶片，我是不是应该把他还给……
阿山：你拿走吧，都拿走，我看着心烦。
苹果：那我会做好标记。
阿山：这都无所谓……哎不是，你现在就要拍吗？

一阵操作的声音。

苹果：来吧，教我做一杯酒。
阿山：真烦人……行吧，你从那个装配方的盒子里抽出一张递给我，抽出哪张算哪张。
苹果：就这个，来吧。等你先给胶片做个标记。
阿山：你在上边画__四个香槟杯__干什么，这酒又不用这个杯子。
苹果：我知道，这不是用来……我有别的计划。`},{id:"log_mengqi",searchId:"孟奇_20201023",title:"孟奇_20201023",locked:!0,content:`安静舒缓的钢琴独奏。突如其来的打喷嚏声，暂时中断了店内其他客人的交谈。随着谈话刚要恢复，又是一声新的喷嚏声。

__苹果__：我以为得有阵子见不到你了，他们说你病了。
__孟奇__：感冒更需要喝酒，把我的那瓶威士忌拿给我。
苹果：加冰吗？
孟奇：来杯热水就行。

酒瓶放置在吧台，暖瓶塞被开启。一阵细微的摩擦和磕碰之后，啜饮声传来。

苹果：这是什么喝法，威士忌加热水？
孟奇：把威士忌想象成茶叶就好了，这就是我睡前的安神茶。
苹果：又学到了。
孟奇：不，要学各种类型的__Martini__我或许还能教你两手，可威士忌加热水——老天，全天下就两个人会这么喝，你可别给别人推销这杯，他们不会觉得好喝的。
苹果：两个人？除了你还有谁呢？
孟奇：你不认识，一个神人。
苹果：哦？也是店里客人？
孟奇：算是吧，消失很久了。

一阵沉默。

孟奇：再拿个杯子，陪我喝两杯。
苹果：__阿山__不许我……
孟奇：谁管他允不允许的。

又一个杯子被放在吧台上，酒液被注入其中。

苹果：好吧，咱们这杯是为了——
孟奇：任何一次都会少一次。
苹果：什么意思？
孟奇：——每一刻都值得庆祝，不一定非得为了什么才得干杯。
苹果：任何一次都会少一次，这个说法挺妙。
孟奇：就是那位也喜欢这么喝威士忌的朋友说的。
苹果：我好像听他们说起过这个人，也是一个老客人。
孟奇：不，他是我的朋友。
苹果：快说说，他是个什么样的人。
孟奇：那时我们都在为一个剧团工作，他拍纪录片，我做音乐，收工之后总会找个酒吧继续聊电影。他特别喜欢聊，从阿巴斯到黑泽明，全都是他的最爱。起初我们哪都去，后来发现了这家酒吧，他一眼认出墙上的海报有__李沧东__导演签名，之后我们就不再去其他地方了。
苹果：海报？
孟奇：没错，此刻它就挂在你的身后。
苹果：所以他是个纪录片导演？
孟奇：很难这么说，就像我并不真的算个音乐家一样。你只能说，我喜欢音乐，能够做一点音乐，而他喜欢电影，喜欢了一辈子，哪怕四十几岁了，也还在为自己的处女作做准备。
苹果：我听阿山说，他甚至想过为酒吧拍一部纪录片，但阿山没让。
孟奇：他想的是用这台摄影机去记录他的生活，仅此而已。只是碰巧，酒吧里循环往复的日常跟他的生活完全贴合上了。
苹果：现在阿山的想法变了，所以摄影机在我手里了。
孟奇：去用吧，反正他也人间蒸发了。

啜饮酒水的声音。

苹果：你是他的朋友，也不知道他去了哪里吗？
孟奇：不知道，是死是活都不知道，以前的联络方式也全都失效了。
苹果：好吧……我找到了几卷他拍过的胶卷。
孟奇：嘿，当初这些瞬间被记录在胶片上的时候我还觉得平平无奇，结果一晃它就成了历史遗迹。
苹果：我在想，没准以后能用上……
孟奇：用吧，都是你的了。再给我做杯鸡尾酒吧。
苹果：我去叫阿山来。
孟奇：不用，你来就好。
苹果：做哪杯呢？
孟奇：就做把__阿文__喝吐的那杯吧。
苹果：可我刚搞砸一次，今天再做也不会有进步的。
孟奇：我在，相信我。你把摄影机给我，我帮你拍下来，就用这个胶卷吗?画着__三个香槟杯和古典杯__的那个……
苹果：对，就用那个。`},{id:"log_mengqi_2",searchId:"孟奇_20201030",title:"孟奇_20201030",locked:!0,content:`伴随吧台远端的客人连连发出的赞叹声，一堆冰块被倒进水槽里。

__苹果__：不可思议，居然这一点点调整，会对酒的呈现有如此大影响。今晚连__阿文__都没有为难我，这还得多谢你。
__孟奇__：不客气。
苹果：你是怎么发现的？为什么我去问__阿山__，他都不肯承认。
孟奇：他不是不肯承认，是没有意识到。我看他做这杯酒做了很多年了，他每回倒金酒都会达到表面张力，倒威士忌时却总是差着一毫米。或许这就纯粹是手感的差别，然而是做纯烈酒鸡尾酒时，一点点差别就会对风味产生巨大影响。
苹果：受教了。

一阵翻找的声音，接着一本书被放置在吧台上。

苹果：我找到了这个，或许你会感兴趣。
孟奇：这本书……你从哪找到这本书的？
苹果：就在仓库那堆纸箱子里，跟很多从老店搬来的东西放在一起。总之……我想你可能会感兴趣。
孟奇：我确实很感兴趣……你有打开看过吗？
苹果：还没有。
孟奇：你觉得这是本关于什么的书？
苹果：看起来神神叨叨的。
孟奇：那只是个封皮，你看里边。

书页翻动的声音。

苹果：什么意思？是一本小说吗？为什么跟封面完全不是一个内容。
孟奇：我不知道你怎么发现它的，估计也没兴趣细看——但这本书背后有个好玩的事情可以同你分享。
苹果：什么事？
孟奇：再给我来一杯先。
苹果：一样的吗？
孟奇：不，来个经典的，用摇壶做的。
苹果：__White Lady__？__Side Car__？__Whisky Sour__？
孟奇：来威士忌的，做那个加雪莉酒的版本。
苹果：知道了，但我没做过，只能照着阿山给的配方来做。
孟奇：问题不大，我又不是阿文，没那么多要求。
苹果：我边做你边说呗，这书背后有什么事？

伴随孟奇的叙述，冰块磕碰金属的声音间或传来。

孟奇：我们刚发现这个酒吧的时候，失踪的那个朋友刚刚写完他第一本小说。
苹果：不是想拍电影吗？怎么又写上小说了。
孟奇：谁知道，不用花钱就能完成吧？
苹果：是个长篇小说咯。
孟奇：与其说是个长篇，不如说是一堆发散性写作训练的集合，流动的念头，飘来飘去，你知道吧？根本没人能读得下去。我劝他改，他不愿意，还觉得拒绝他的出版社什么也不懂。
苹果：后来呢？

啜饮液体的声音。

苹果：尝起来怎么样。
孟奇：还行。总之后来他几次尝试投稿都以失败告终，结果居然突发奇想，去书店买来十几本不同的书，撕下它们的包装，把自己的小说打印好，装订进去，然后跑到书店，偷偷藏到书架上。
苹果：哈？
孟奇：还跑到附近的大学里，故意把书遗落到食堂的座位上。
苹果：他就这么希望别人看他的东西吗？可是把书散出去，也没法得到回音呀？
孟奇：起先我也这么认为，后来他失踪了，我还异想天开，想要翻书找线索——你猜怎么着？我还是读不进去，可我却发现他在文末留了联络邮箱。

书页翻动的声音。

苹果：你发消息了？
孟奇：直接拒信了，邮箱在那时已经被注销了，但至少证明，他是希望被人看到并回复的。
苹果：真是是个神人。所以这之后他就在考虑拍电影的事情了吗？
孟奇：之前，之后，说不清哪个先那个后，他总是像个没头苍蝇一样，到头来什么也没做成，就把自己搞丢了。
__陌生人1__：__什么神人，他就是个神经病。__

录音意外中断。`},{id:"log_awen_2",searchId:"阿文_20201030",title:"阿文_20201030",locked:!0,content:`扫帚扫过碎玻璃的声音，背景中隐约有人在叫骂。近处有喘息声传来。

__苹果__：血止住了么？给你换一块毛巾？
__阿文__：没什么可换的，就是擦伤而已，要不是今天多喝了几杯，他还能伤着我？
苹果：你说你，何必呢？你们不是认识很多年了吗？怎么还找他不爱听的说呢？
阿文：我憋了很久了，就烦他天天跟这演戏，跟全世界就他一人关心似的。
苹果：所以你也认识那个失踪的人？
阿文：我可烦他了！一天到晚都在聊，好像世上所有事都跟拍电影有关系似的。然后呢？好几年连个剧本也写不出来，每天没到中午就把自己喝醉了，这不是颓废是什么？
苹果：听说他写过一个小说……
阿文：没人看，有屁用啊？行了，先给我做杯酒。

冰块与液体磕碰金属，晃动着被倾倒出来。啜饮液体的声音。

阿文：怎么一股氧化的味道？铁锈味儿！
苹果：我不知道，我是按照配方……哎，给你重新做一杯，行么？
阿文：重做会变得更好吗？
苹果：我不知道……
阿文：你哪天休息？
苹果：每周二……
阿文：那就是__4天后__，那天__阿山__亲自上班，对吧？那到时候我再来喝杯正确的味道，这杯算你请我的。
苹果：——那什么，你刚才说到老店，那地方究竟在哪啊？
阿文：就__往南两条街，有个开了很多年的书店，书店的隔壁有一条小巷子__——等等，我的钥匙怎么没了？
苹果：可能刚才你们比划的时候跑到吧台下边了，过几天我收拾冰箱，到时给你找找。
阿文：我是真讨厌这帮文艺青年，你知道吗？尤其是他们明明已经不年轻的时候。
苹果：我理解你。
阿文：你理解个屁！我看就你跟他最聊得来。
苹果……
阿文：可别怪我没提醒你，回头找到钥匙，也可别憋不住好奇去老店探险，招些脏东西回来。
苹果：不……不会吧？你进去过？
阿文：当然！
苹果：你看到了什么？
阿文：这你别管，你就想想吧，老店关了快一年了，现在都租不出去，总得有点什么原因吧？`},{id:"log_ling",searchId:"玲_20201103",title:"玲_20201103",locked:!0,content:`喧闹的交谈混合着酒杯相互碰撞的声音，一阵脚步声由远至近传来。谈话时断时续。

__玲__：在喝什么呢？
__苹果__：什么？
玲：我说你这杯酒是什么？我看你喝得很认真的样子。
苹果：哦，这杯酒叫__Francis Albert__。
玲：怎么休息还来店里？
苹果：你说什么？
玲：我听他们说，你平时也在这个酒吧工作？
苹果：哦，对，对。
玲：请问你怎么称呼？
苹果：他们都叫我苹果。
玲：因为你喜欢吃苹果吗？
苹果：我的网名本来叫不爱吃苹果，因为我天生不爱吃苹果，但时间久了，就被缩写成了苹果……
玲：你看起来很年轻，还在上学吗？
苹果：对，学摄影的。
玲：我说嘛，看你拿着个摄影机，录音机。

麦克风发出被剐蹭的声音，似乎录音机被拿起又放下。

苹果：对，我去拍了点东西。
玲：拍了什么？
苹果：我告诉你，可以不告诉别人吗？
玲：我刚来这，谁也不认识。
苹果：这家酒吧搬过家，以前的老店就在附近，__我碰巧有钥匙__，今天休息，就进去看了看。
玲：怎么样，好玩吗？
苹果：下次给你看，看起来是个很老的店，很多时光的痕迹……
玲：听起来很有意思，因为我对这个新店也蛮有好感，藏在另一个酒吧的卫生间旁边，你说这是谁想到的。
苹果：听别人说，这还是老板精心安排的……
玲：干嘛欲言又止的？
苹果：因为传闻很荒唐，说老店闹鬼。
玲：所以你今天才去，怎么样，见到鬼了吗？
苹果：是有些吓人，但没见到鬼。
玲：你可别把什么不干净的东西带到这里来，我还想来喝酒呢。
苹果：据说这就是不让这家店有门的原因，老板算过，__这样脏东西就进不来了__。
玲：先别管神神鬼鬼的了，你要尝尝我的这杯酒吗？
苹果：我……
玲：嗨，我想什么呢，你自己就是调酒师，肯定了如指掌了。
苹果：没有，我刚开始学习。
玲：那你可要尝尝这杯。

数秒停顿。

玲：好喝吗？
苹果：所以它叫什么？
玲：__Little Italy__。
苹果：好喝。
玲：下次我来你要做给我喝！`},{id:"log_ling_2",searchId:"玲_20220215",title:"玲_20220215",locked:!0,content:`安静的空间，背景音乐声音小的几乎听不见。机械钟的发条清脆地转动着。不远处，弹力门忽然发出吱嘎吱嘎的声音。

__玲__：不好意思，请问在营业吗？
__苹果__：在，在。抱歉，我睡着了。
玲：没关系，看来今天很冷清啊。
苹果：每一年中的这天通常都没什么人。
玲：那我算来对了。
苹果：请坐，想喝杯什么呢？
玲：有一杯说好的酒，还记得吗？
苹果：说好的……哦，想起来了！你是……抱歉，我忘记了。
玲：不怪你，上回咱们聊了一整晚，不过我似乎没有介绍过自己。
苹果：真的都过去好久了……不管了，你可以叫我苹果——
玲：我记得，哈哈，对了，我叫玲。
苹果：就一个字吗？玲。
玲：对，一个字。
苹果：爱喝__Little Italy__的玲。
玲：看来你终于记起来了。

冰块与玻璃的磕碰声，酒液倾倒的声音。

苹果：抱歉，我已经不记得正确的味道了。
玲：没关系，我也不记得，但这杯很好喝。
苹果：谢谢你。
玲：真得哎，竟然一个人都没有。甚至于__阿文__和__孟奇__都不在。
苹果：你认识阿文和孟奇？
玲：认识呀……上回我来的时候，就是他们跟我介绍的你。
苹果：他俩，一块吗？真奇怪，他俩通常喝不到一起去。
玲：或许是威士忌的作用。
苹果：我怎么觉得多数时候喝酒倒让两人矛盾更严重呢——哎，无论如何，孟奇最近几个月都没来过，阿文……我老板不让他再来这个店了。
玲：不让他来？他不是一个老客人吗？认识很多年那种。发生了很严重的事情吗？
苹果：说严重也不严重。可一两句也很难说清楚。你还记得上回见面，我提到老店的事情吗？
玲：记得！因为闹鬼，导致酒吧不得不搬迁至此的那个老店！
苹果：嘘……
玲：怕什么，又没有别的客人——既然今晚没生意，我们不如提早关店，去那个地方冒险怎么样。
苹果：去不了了。
玲：我记得你说是在很近的地方——难道说，已经租出去做其他用处了？
苹果：那个房子已经被拆了，什么都没有了。
玲：这么突然！
苹果：不突然，是你太久没有来啦，拆了有__大半年__了。
玲：话说回来，你当时不是带着摄影机去过一趟嘛？你拍的东西可以给我看看吗？
苹果：可以是可以……你确定要看吗？
玲：反正无聊。

书包落在吧台上的磕碰声。

苹果：都在这里了，你可以随便看。
玲：有什么我不能看的，你可得提前说哦。
苹果：哪有不能看的，反正都是店里的日常嘛。
玲：逗你呢。这杯喝完了，再给我做杯酒先。
苹果：你想喝什么？
玲：你做什么我喝什么。

翻找杯垫的声音。

苹果：这个怎么样？
玲：这是什么？
苹果：我们会把配方直接写在杯垫上。
玲：所以这杯就叫这个名字？__Jam 10.30__，为什么叫这个。
苹果：相当于某月某日即兴做的一杯，觉得还不错，就把配方记录下来了。
玲：这么个起名还头一次见，可真随便呀。行，就喝它。

冰块滑过玻璃，吧勺在其中搅动。胶片盒被倾倒在吧台上。

玲：为什么每个胶片盒上都画着四个杯子？
苹果：这是我的一个编号系统……
玲：标记顺序吗？四进制？
苹果：不是四进制。
玲：我发现了，好像每个胶片盒上最多只有两种杯子，而且没有哪个上是两两相同，都是一个单独的，三个一样的。要么全一样。所以最重要的是那个单独杯子的位置，我说的对吗？
苹果：其实顺序无所谓的，我只是要……

胶片盒被重新调整摆放。

苹果：尝尝看。
玲：哦！我知道它们的规律了。应该是按照这种排列，从左到右，或者从右到左，对吗？可我应该先看哪一个呢？
苹果：从右往左第五个。
玲：让我来看一看……这还挺吓人的，你一个人去难道不害怕吗？
苹果：你真的不想先尝尝酒吗？
玲：等一下……这是什么？
苹果：嗯？
玲：你看这张，这个角落里怎么像是蹲着一个人呢？
苹果：那不会有人的，是我自己的影子吧。
玲：……你看，镜头虽然划过去了，但到这里还有。这里，它好像比刚才……往前了一点？

录音意外中断。`},{id:"log_awen_20211020",searchId:"阿文_20211020",title:"阿文_20211020",locked:!0,content:`店内熙熙攘攘，气氛松弛而愉悦，随着开门声响起，人群说话声音骤然停住。
脚步声渐渐靠近吧台。

__阿文__：聊呗，接着聊。
__苹果__：喂，__阿山__不让你来，忘了？
阿文：反正他又不在，怎么着，我的钱不是钱啊？
苹果：反正我提醒你，他过几天就回来了。
阿文：吓唬我？他在我也来。
苹果：说吧，喝什么？
阿文：喝什么不重要，这不你__入职一周年__吗？我送你个威士忌。
苹果：我看你是想放瓶酒在这自己喝吧？
阿文：又不是什么原则性问题，行了别没完没了的，快用它给我做杯酒。

冰块与玻璃磕碰，酒液倾倒。

阿文：哟，做这杯。
苹果：喝过？
阿文：这不那谁喝的嘛。
苹果：谁？
阿文：跟我装傻？行。
苹果：这不是个新经典嘛，好多人都喝呢。

酒液入杯，啜饮声。

阿文：不成，还得练练，你要是就做到这程度，不够给姑娘表现的。

水流冲洗工具的声音。

阿文：咋了，还不乐意了？说你两句不行？
苹果：那没有，你直说都比其他人……算了，不说了。
阿文：咋回事？
苹果：反正就是怪怪的。
阿文：怪？还不都赖你拿我钥匙去老店瞎拍，招了不干净的东西，害了__孟奇__。
苹果：我没有……
阿文：得了啊，骗兄弟可以，别骗自己了。
苹果：……可是我谁都没说，怎么都知道了。
阿文：这你就别管了。对了，还有个事。
苹果：啥事？
阿文：老店那边的房子在拆了。
苹果：什么？这么突然？
阿文：好久没往那去了吧？早就规划了，现在刚拆一半，你要想拍的话，__明天__最好去看看，再晚就没了。
苹果：竟然拆了……
阿文：这种事情，谁说得好。
苹果：阿山知道这事吗？
阿文：放心吧，他并不在乎。哎孟奇呢？这家伙好久没来了吧？
苹果：这你都知道？最后一次是__店庆日__吧？那天还买了蛋糕……
阿文：我猜也是，知道为啥么？因为那个失踪的家伙最后一次出现在店里，也是__店庆__。
苹果：你说他该不会也……
阿文：你说失踪？不会。你看吧——

水流声停止，手机在吧台挪动的细微声。

苹果：这是哪？谁拍的照片？
阿文：另一家店的酒保，问是不是我朋友。
苹果：哦……怪不得那天他让我做__XYZ__。
阿文：这家伙，还挺会搞仪式。所以你明白了吗？你倒想人家，可人换店了，不来你这了。还tm拉黑我，也不看看谁才是最忠诚的上帝客人。`},{id:"log_mengqi_20210425",searchId:"孟奇_20210425",title:"孟奇_20210425",locked:!0,content:`麦克风有轻微剐蹭声，似乎被人装在口袋里，随着脚步移动着。
不远处，门被关上，喧闹声瞬间安静下来。

__孟奇__:陪我抽一根？
__苹果__：不……不会。哈哈哈，但是我可以给你点上。

打火机的转轮被拨动。

孟奇：不是，你烧我头发了——
苹果：反正你头发多，烧掉一点也看不出来。
孟奇：嘿，你今晚喝了多少啊？
苹果：没多少……那你看，我要是不喝，__阿山__就得喝，但阿山已经喝挂了，那不就只能我喝了么？哈哈。
孟奇：哎，行吧。
苹果：你让我做那杯，可以，好喝。
孟奇：可不是嘛，我就喝了一口，剩下的全是你喝的。
苹果：为什么它要叫这个名字呢？
孟奇：你自己去查查。
苹果：我以为你会知道呢。
孟奇：其实绝大部分鸡尾酒的名字都是随便起的，就跟你给路边碰到的小猫起名一样。
苹果：我当然知道了，有时候随便做个什么，都有客人上赶着要给它起名字，你说这些人……
孟奇：比如我最喜欢的一杯叫__Goooooose__，问过阿山为什么叫这么名字，他也说不出道理。
苹果：这是什么酒？从没听说过。
孟奇：看来你对他那堆杯垫配方的研究还不到位啊。话说回来，今天吧台上的新面孔还真不少，而且基本都跟你很熟，要这么看来阿山算是退居二线了。
苹果：怎么还害羞起来了？我以为你……你们才是这个吧台的主人吧。
孟奇：只是觉得……都变了吧。
苹果：刚才阿山喝醉前跟我说，客人都是一茬一茬的。旧的一拨总会厌倦，要么生活方式发生改变了，渐渐就消失了，但总有新的一拨，那种看什么都新鲜的年轻人。
孟奇：不说这个了，我叫你出来有正事。
苹果：有什么事不能明天说，我都喝成这样了，啥都记不住了。
孟奇：你找__阿文__要钥匙，再去趟老店。百叶窗正对那面墙上有盏壁灯，壁灯杆上挂着一株死掉的空气凤梨。你掀开它，墙上应该用很小的字写着一首诗。
苹果：谁写的？那个失踪的人？
孟奇：我不知道，我发现的时候它就已经在那了。有一阵子，这酒吧是相当文艺的，还组织过写作小组什么的。总之，或许你能搞清楚那是谁写的。
苹果：我不去。老实说，我对探听那个失踪者的下落已经没有兴趣了。
孟奇：那你的纪录片呢？
苹果：哎，再说吧……每天这样过着，我挺开心的。说真的，我不知道为什么刚开始的时候，我非得要假装有洞察，假装要保持一个置身事外的姿态呢？我现在觉得这挺装逼的。
孟奇：这话你是认真说的？
苹果：我喝多了，上句说了啥我已经忘记了……哦，说阿文是吧，你直接找他拿钥匙不完了？你说你们，都认识这么久了，怎么就闹到如今这个境地了。

短暂地停顿。

孟奇：行了。不聊这个话题了。`},{id:"log_ashan_20220204",searchId:"阿山_20220204",title:"阿山_20220204",locked:!0,content:`背景中，嘈杂的电子音乐声渐渐变小，爵士钢琴缓慢响起，远处的酒客发出质疑的声音。

__苹果__：要不是他们带烧酒来，这个配方你怕永远也记不起来了。
__阿山__：好配方很多的，有一两个被永远遗忘了，那又怎么样呢？我一直说一句话，鸡尾酒里没有酒吗？有酒它就好喝，否认这一点你就不是个合格的酒鬼！
苹果：这是在讲什么干话呢？
阿山：哈哈哈，别在意，我只是想告诉你，要享受酒，享受变化，每一杯酒会是这个味道，都有一整串缘由，去感受这些差别吧，不然还有什么意思呢？
苹果：我好奇，你现在每天在店里的时间越来越短，你还记得刚开店那些年，你的感受是啥样的吗？跟现在相比呢？
阿山：实在说，其实每换一茬客人，我也会更新自己一遍，要不这样做，我恐怕也跟__老莫__一样，就此迷失了。
苹果：说起这个，我前阵子又去了一趟老店。
阿山：不是都拆了么？
苹果：还以为你根本不知道这事呢。
阿山：拆之前去的吗？你又偷__阿文__钥匙了？
苹果：名正言顺地要的，总之呢我在墙上看到一首诗，署名是……

铅笔在纸上划过的声音。

苹果：你还记得是谁写在墙上的吗？
阿山：这哪记得——何况你也不想想，这能是人名吗？
苹果：万一是他的外号呢？
阿山：这能是人的外号吗？
苹果：所以它可能就是个单纯的笔名……话说最近有人提起，说老店以前做过写作小组？大家写的都是小说吗？
阿山：都过去多少年了，竟然还有人记得这事。想想那时还真有热情，什么事情都要掺和一下。
苹果：我能看到这些东西吗？
阿山：当时印了一些样稿，有客人还为它画了一个人体骨骼画作封面……谁知道搬家有没有带过来呢。仓库里有就有，没有就没有了。

短暂地沉默

阿山：我忽然想起以前自己做过一杯酒，始终都想不出起什么名字，所以客人点单的时候习惯性朝我瞪眼点头，我就意会了。
苹果：还能这样吗？
阿山：反正后来有人把配方抄下来，倒是用__一个标点符号__做名字。
苹果：抄配方的人，你还记得是谁吗？
阿山：太久之前了，哪还记得。倒是这杯酒怎么做，我或许能想起来。`},{id:"log_laochen_20221105",searchId:"老陈_20221105",title:"老陈_20221105",locked:!0,content:`熙熙攘攘的喧闹人声，几个粗哑的嗓音组合在一起，正在唱着生日歌。

__老陈__：不好意思，我想再点一杯。
__苹果__：你说什么？
老陈：我想点酒。
苹果：说吧，喝点什么？
老陈：没想好。
苹果：那您再想想——

几个躯干接连撞向吧台，叮叮咣咣的干杯声也凑到近前来。

老陈：这店这么热闹啊……
苹果：哦，抱歉，有熟客过生日，都是大学生，所以比较没规矩。您刚才说想喝什么？
老陈：没事，我再可以想想，要是实在没主意……反正我__明天还来__。
苹果：谢谢您照顾。
老陈：客气啥，也是机会难得……对了，我听说这个店有个前身，以前不在这地方，是吗？
苹果：有这事，老店就在附近，去年拆掉了。我们也搬过来挺久的了。
老陈：那就对上了。我说呢，看这幅画特别眼熟，以前就挂在老店酒柜上。
苹果：那我就不知道了。这边开了我才来的。
老陈：看来我没记错，以前做酒的是另一个人。
苹果：是我老板吧，__阿山__。
老陈：对！是叫阿山。我出国前还常去喝他的酒，跟__老莫__、__梓荀__、__宋阳__他们都认识。
苹果：你说的这些人我都没见过了。
老陈：哎，看来他们也都跟我一样，渐渐走散了。本来我还以为这趟来会见到几个熟面孔。
苹果：__孟奇__您认识吗？
老陈：做音乐那个，对吗？
苹果：对，搬家之后他还来过这边几次，不过现在也不来了。
老陈：那就太遗憾了，本来我还带了这个，想跟大伙叙叙旧——

拉链拉开的声音，杯子挪开。

苹果：这是……哦，我知道这个！这不是他们之前做的小开本杂志吗？
老陈：你居然见过这个，我以为你不会知道这东西的。
苹果：我只见过照片，后来在仓库找了半天，一本都没找到。
老陈：可惜我的这本已经散架了，有些书页也遗失了。

书页被哗啦啦翻开。

苹果：……这一眼老莫啊！听谁说来着，他这次又是憋半天崩不出个字，最后随便丢个设定，直接滚键盘交差了。
老陈：阿山说的吗？
苹果：不会是他，以前的事他什么都不记得了。
老陈：看来店里还有别人记得当年的事儿。
苹果：说起这个，您对一个署名是感叹号的人有印象吗？
老陈：我找找……这个册子里应该有一篇是他写的……可能已经遗失了。
苹果：您认识这个人？
老陈：不熟，非常不熟，可能就见过一次。他们叫他……__大白__之类的，后来也没在见过了。他似乎跟更早一拨人更熟悉，我基本不认识他们。
苹果：还有更早一拨人。
老陈：是吧，这家店的历史比你想的更久，或者说，熟客的更替速度也比你想的更快——当然，今天推门进来前我也没想到，居然一个人也不认识了。
苹果：确实没想到。
老陈：看来当初老莫的想法是对的，虽然他说是要给店拍个纪录片，其实记录的还是当初那帮人。过了十年，店或许还会存在，但人却一定都会走散的。
苹果：您稍等。

一只背包被拖动，放置在吧台上。

老陈：这个是……
苹果：老莫当时拍了一些素材，胶卷全留下了。
老陈：这这……可我记得阿山当时不是不让他拍吗？
苹果：在老板阻止他之前，他拍了一些东西。
老陈：这……咱们现在能看看吗？我应该先看哪个？
苹果：我也不知道顺序，你随便看一个吧。
老陈：这都做了标记？那我先看……这个画着__四杯马提尼__的卷好了。对了，能给我做一杯马提尼吗？
苹果：我给你做另一杯好了，就交给我吧。

冰块与玻璃相互磕碰。

老陈：……你看！看这个！
苹果：这些人……哦对，这是你。
老陈：这就是宋阳，__阿昭__，梓荀。这人是……叫什么来着？
苹果：看见你了，这是你吧？真年轻啊。
老陈：这得将近__七八年前__了……还有这张，你看，这是老莫和梓荀。
苹果：——等等，你认识她吗？
老陈：谁？我看看……不认识，但也不确定，太模糊了。

短暂沉默。

老陈：怎么了？
苹果：……没事，我自己问她去。
老陈：咋回事？说来听听。
苹果：我就知道，有些人没说实话。
老陈：关于什么的？
苹果：回头再说。

嬉闹的声音再度传来，空杯子被接连放到吧台上。`},{id:"log_laochen_20221106",searchId:"老陈_20221106",title:"老陈_20221106",locked:!0,content:`空间安静，背景音乐缓慢得让人沉睡。
推门的声音响起。

__老陈__：你好！
__苹果__：哟，来了。
老陈：我给你带了点吃的……馄饨和猪蹄，但昨天忘了问你，还担心你今天会不会休息。
苹果：不会，能在我基本都在。
老陈：__阿山__呢？平时都不来啦？
苹果：也来，但走得早。
老陈：这才……不到十一点。
苹果：没办法，熬夜他就睡不着觉。无所谓，反正来了也躺在那个单人沙发上睡觉。

沙发吱吱响了起来，似乎有人坐到了上边。

老陈：这沙发我知道，是从老店抢救出来的吧。还是挺舒服的。
苹果：舒服是挺舒服，谁坐上去都想睡觉，不过看着已经快散架了。
老陈：从我见到它的时候它就这样。
苹果：好吧……喝杯什么？
老陈：有雪莉酒吗？
苹果：有。
老陈：教你一个配方。
苹果：你说。
老陈：我给你写下来吧。

铅笔书写的声音。

苹果：哦，这么个搭配，柯林杯装呗？
老陈：对。
苹果：这哪喝到的配方啊？
老陈：老外前些做的，现在变成新经典了。
苹果：新经典……它叫什么名字？
老陈：__Second Serve__。
苹果：店里没有fino，我用这个给你做行么？manzanilla雪利。
老陈：更好了。

酒瓶摆放在吧台的磕碰声。

老陈：昨天的话没说完，你说要当面问人家的，后来姑娘来了么？
苹果：没来，再说吧。搞不懂她啥意思。
老陈：我冒昧问下，你跟她有事儿没有？
苹果：……这……怎么算有事儿呢？
老陈：有没有事儿，你自己心里清楚啊。
苹果：那……我这怎么跟你说呢？
老陈：人我是没印象了，看照片挺漂亮的。怎么说呢，长这么漂亮的人是有资格拥有秘密的，明白吗？
苹果：我发现你今天说话非常像一位父亲。
老陈：瞧你，你可别介意啊，我们上年纪的人说话就比较直接——没事，你要不想说，也可以不用告诉我，哈哈。
苹果：我是真不知道怎么说。`},{id:"log_ling_20221109",searchId:"玲_20221109",title:"玲_20221109",locked:!0,content:`冰块在摇酒壶中相互碰撞，酒液被倒入杯子里。

__苹果__：尝尝吧，顺便再看看这个。

啜饮酒液的声音。

__玲__：蛮好喝的，不过你想让我看什么？
苹果：刚才说的胶片啊。
玲：然后呢？
苹果：你看这个人，像不像你。

短暂停顿。

玲：有点吧，发型不像。
苹果：只是有点吗？
玲：怎么了？你到底在怀疑什么。
苹果：我没怀疑什么，只是问问。
玲：给我做下一杯吧。
苹果：行，做。
玲：我想喝……我能用下手机么？
苹果：随便。

短暂停顿。

玲：让我们来试一试……你找到了彩蛋！这是一个随机配方工具，不知道做什么的调酒师们——
苹果：不是，你怎么知道这东西的？
玲：请感受一下幸运！——来自不爱吃苹果的苹果大王。
苹果：你怎么找到这个东西的？
玲：且让我来随机一下……杏仁利口酒、雅梵娜苦酒、希娜苦酒、野樱桃利口酒，这个怎么样？
苹果：这全是利口酒，能好喝吗？
玲：那这个呢？金酒、蒲公英苦精、泥煤威士忌、加上蒙特内罗，这个听起来不错。就给我做这个。
苹果：比例呢？
玲：你来决定。
苹果：不好喝别怪我。
玲：你只要放酒了，它就不会难喝。

短暂沉默。

玲：所以，所有这个工具随机出来的酒都叫同一个名字，dram啥啥的。
苹果：我不知道，没考虑过。
玲：你怎么还是一副没好气的样子。
苹果：因为你明明知道我在写博客，却从来不告诉我。
玲：我知道那是你的小秘密呀，告诉你怕你不舒服。实话告诉你吧，我发现这家店就是因为找到了这个博客，发现很有意思，才顺着你的线索摸到了这里。
苹果：瞎说，我可从没在博客里提到过酒吧的位置。
玲：你提到过，但你写了太多酒，自己都忘记了。
苹果：怎么可能！
玲：你自己在搜索框下边说的，鸡尾酒配方没10000个也有9000个，不是吗？忘掉一些配方是很正常的事情。顺便一说，我很喜欢你设计的这个摇壶按钮，就是它的背景色有点丑，哈哈。
苹果：……我一直没想起来把这个背景色去掉，因为没想到会有第二个人看到这东西。你是怎么试出来的啊？
玲：那你别管。我不仅在你这玩，我还偷偷去其他酒吧玩过，然后胡乱编一些名字，告诉人家这是某个现代经典的配方，我喝过很好喝。逼调酒师们发挥出自己的极限水平。
苹果：你真是恶魔。
玲：我就当你在夸我了。

短暂沉默，钢琴声占据上沉默的空气，与冰块与酒相互配合。

苹果：尝尝吧。
玲：你还别说，这个真的很好喝。
苹果：是吗？
玲：好喝，好喝到它应该有个自己的名字。
苹果：那叫什么？
玲：现在在放的这首曲子叫什么？
苹果：我去看看……叫《__My Wild Irish Rose__》，“我的爱尔兰野玫瑰”。
玲：听起来是个不错的名字，你觉得呢？作为一杯给我做的酒的话。
苹果：……那就叫它这个。
玲：怎么样，现在你能原谅我并保证不再阴阳怪气了吗？
苹果：我哪有。`},{id:"log_awen_3",searchId:"阿文_20221231",title:"阿文_20221231",locked:!0,content:`安静的酒吧内，背景音乐是温暖的爵士钢琴，推门声响起。

__阿文__：哟，这么安静啊，是不是倒闭的前奏了。
__苹果__：你怎么来了？
阿文：跨年本想热闹热闹，谁知道一个人也没有，真扫兴！这城市没法待了。
苹果：那你搬家啊？更何况你也不看看，这才几点，离跨年还有好几个小时呢。现在年轻人们都还在其他地方吃饭，谁像你，老年人，喝两杯就得赶回家睡觉。
阿文：今天谁不待到你关门谁是孙子。
苹果：大可不必文哥，我可没有激你。
阿文：行了，别说没用的，赶紧给我搞酒。最近做了什么好玩的东西，做来喝一下。
苹果：这不已经在给你弄了嘛。
阿文：做个什么呢？
苹果：你喝就知道了。

冰块与酒相互碰撞。

苹果：怎么样，尝起来。
阿文：这谁的配方，叫什么名字？
苹果：你先别说这个，尝起来怎么样？
阿文：是__孟奇__最近来了吗？
苹果：没有啊，他不是再也不来了。
阿文：恍惚了，因为这杯酒尝起来像他会喜欢的东西。
苹果：嗨，这酒跟他没关系……是别人启发的我。
阿文：别人，又有新妞？
苹果：别整天妞妞的行么，你没看出来吗？这店不是以前那样的风气了。
阿文：那咋了，我们以前在酒吧就这么说话。
苹果：味儿太冲了，受不了。
阿文：真没劲。

短暂沉默。

阿文：我说，你不会还跟那谁搞在一块吧。
苹果：谁？
阿文：你知道我说的是谁。
苹果：什么叫搞在一块，人偶尔来喝酒。
阿文：行行行，你爱演我不拦着，但我记得她有对象。
苹果：什么意思？
阿文：对啊，她第一回来就是对象带来的。
苹果：你说我刚到这上班一周的那次？
阿文：比这早多了，好几年前，你还跟教室揪女生头发的时候吧。
苹果：什么意思，她去过老店？
阿文：你不知道？
苹果：可她说来这家店是因为……反正见到我那次是她头回来。
阿文：那要么是我认错人了，要么是你被骗了呗。
苹果：肯定是你老眼昏花认错了。
阿文：没事，年轻人即便被骗也吃不了多大亏哈。

清洗调酒工具的声音。

苹果：先不管你跟我说的是不是同一个人，你认识带她去老店的那个所谓“男友”吗？
阿文：好像是叫__刘斐__还是__李斐__来着，老跟另一个叫__大白__的人一起来。不过我变熟客之后，这些人就没再出现过了。
苹果：大白？这名字耳熟，谁说的来着……
阿文：你耳熟？不可能的，我听说这某斐前几年就得病死了。
苹果：死了……

短暂沉默。

苹果：对了，你见过这玩意嘛？

书本被放置在吧台，有人开始翻书。

阿文：这不他们自娱自乐印的地下小杂志嘛，你从哪翻出来的？
苹果：一个叫__老陈__的人拿来的——
阿文：妈的，脏东西！

书本被扔到吧台上。

苹果：咋回事，你认识他？
阿文：你还好意思嫌我油腻猥琐呢，这人不比我恶心多了！
苹果：你俩……不相伯仲吧。行了行了，反正他那天来说起这个大白，可惜杂志散架，没找到他当时写的东西。
阿文：这就不知道了，不关心。
苹果：——最近还有个叫__小树__的人来过，说也去过老店……
阿文：行了行了，别说这些老黄历了，赶紧给我做杯酒。
苹果：那什么，刚好，老陈分享了一个配方，我这就给你做——
阿文：停停停，你别恶心我了，成吗？给我做完美曼哈顿。
苹果：什么叫完美曼哈顿？
阿文：__Perfect Manhattan__。
苹果：不知道。
阿文：你不是大学生吗？这都不知道。
苹果：我懒得理你。

冰块磕碰。

苹果：做完了，喝吧。
阿文：来来，让我尝尝……唔，这杯酒应该算是一个变种，叫imperfect Manhattan，not even close。
苹果：有的喝你就喝。
阿文：哈哈哈，就喜欢看你急眼。对了，我刚想起一个事。
苹果：什么？
阿文：你把那幅画取下来。
苹果：为啥？
阿文：你取下来，然后我跟你说。
苹果：要干嘛啊，全是灰尘。

短暂停顿。

苹果：搭把手。
阿文：这样，翻过来，放在吧台上……对，就是这个。
苹果：接下来呢？要干嘛？

金属工件相互摩擦的声音。

苹果：你拆它干嘛。
阿文：我记得他们以前藏过一个东西在这……对，就是这个。
苹果：这是什么？
阿文：喝多了打赌的赌约吧，不重要，但你看它的背面。
苹果：这是……这是什么？
阿文：看来我脑子还没喝坏，我记得有人写过一个以大白为主角的小说，就是这个。`},{id:"xiaoshu_20221224",searchId:"小树_20221224",title:"小树_20221224",locked:!0,content:`（先后两声推开门的声音，脚步声一前一后。）

__小树__：你抽烟吗？
__苹果__：不抽，我就陪你站会。
小树：谢谢你啊，大冷天的。

（火机滚轮摩擦的声音。）

苹果：这不刚好聊到一半吗，说起来，我上回陪人站这抽烟，就是陪__孟奇__。
小树：这也算某种缘分吧，我今天用这词是不是用得太多了？
苹果：不会啊，的确很有缘，这座城市这么多酒吧，你偏偏就找到了这间。后边我拿出__老莫__的胶卷，你随便拿出一个就在里边找到了自己。
小树：是啊，我都戒酒好几年了，今天只不过想找个地方坐坐，喝一杯苏打水，谁知道竟然又一次走进以前天天去的地方——虽然搬家了吧。
苹果：呀，原来你已经戒酒了，早知道不给你推荐那杯酒了。
小树：那杯酒很好喝，值得为此破一次戒。叫……__second serve__，是吗？
苹果：__Second Serve__。
小树：我记住了，虽然我并不认识什么__老陈__，哈哈。
苹果：而且你还帮我解开了一个谜团。
小树：算解开吗？也不太算，只能算是……某种说法。
苹果：其实我们第一次检查这些胶卷的时候就感觉到不对劲，但从没……
小树：但从没把那些带着刮痕的胶片拼在一起去看，是吗？
苹果：竟然真能看到一个人影。
小树：取决于你相不相信这些事情了。
苹果：我不知道。
小树：因为我自己相信。而不信的人会认为这里没有人影，都是咱们一厢情愿地脑补，哈哈哈。
苹果：你的意思是说……你相信鬼神？

（推门的声音响起。脚步身由远至近，又由近至远。
似乎有人离开了酒吧。）

小树：不不，比这个复杂，也比这个具体。
苹果：那是什么呢？
小树：你可以把我们所处的时间线，想象成一条无限长的笔直的高速公路——
苹果：高速公路……
小树：对，其实这条路上有无数的十字路口，通向一些狭窄的幽暗小径什么的。但我们身处高速路上，“车速”太快，根本注意不到这些小路，直到摄像技术的发明。而你那天看到的，其实就是这样一条小径。
苹果：我没明白，是说我进入了异度空间吗？
小树：这些空间本来就在那，你只是那天碰巧观察到了。
苹果：你接着说。
小树：理论上，高速路上的人进不去小径，小径里的“人”也出不来。但……也不排除一些意外情况下，小径里的人因为想要挤入“高速路”，一旦他让出身位，才叫高速路上的人掉进了“小径”里。
苹果：你的意思是说，我们所处的是一个看似连续时则存在着无数断裂的时空，有些人会被被拆散成以一种不可触碰的形态，再被塞进不同的“帧”里。
小树：类似这样。
苹果：这听着也太玄乎了。像是……
小树：像是融合了科幻和怪力乱神？哈哈哈。
苹果：对，没错。
小树：所以我才说，信的人就信了，不信的人不信也不会影响他们的生活。
苹果：我了解，有些客人确实会突然不再出现，但老莫是实打实失踪了。
小树：据我所知是这样。反正孟奇还去老家找过他，他不相信一个人能这么凭空消失，杳无音讯。
苹果：你跟他聊过吗？你的这个推论。
小树：说过呀，他当我喝多了。反正在那帮人里，过去的我根本像是神婆一样的存在，可能他们还觉得，是我会先遭遇什么事情吧。
苹果：那……按照你的说法，这事情有什么逆转的可能吗？
小树：从岔路中回到我们的时空吗？
苹果：对。刚才你只让我把所有问题的胶片找出来，但只拼了其中一些。你说，要是我把它们全部拼在一起会怎么样呢？
小树：不知道，但如果发生了的话……大概会有很糟糕的事情。
苹果：因为有人出来，就要有人进去？
小树：你有没有想过，其实存在于一段连续的时空里也并非好事一桩，反过来说，被困在某处，也并不一定全是坏事，就像那些纯粹的怀旧主义者……你不相信我说的？
苹果：也不能这么说，哈哈。
小树：那你也可以当我喝多了，咱们只是在酒后闲聊。
苹果：当然是闲聊，总比无聊强嘛。
小树：那么，如果想喝酒，今天给我做杯什么呢？
苹果：别的酒我不知道怎么样，__Hot Toddy__的话，这就可以做。只要纯威士忌。
苹果：那不就是威士忌加热水？以前孟奇也常这么喝。可我才意识到，这酒其实有个名字。
小树：别这么感伤，你刚才不是说，没准此刻孟奇正在这个城市的另一个酒吧，喝着一模一样的东西呢。
苹果：就像古人跟你，你们看的是同一个月亮那样。`},{id:"mengqi_20201218",searchId:"孟奇_20201218",title:"孟奇_20201218",locked:!0,content:`（玻璃碎裂的声音，
嬉笑声紧接着传来。）

__苹果__：不好意思，又当着你的面碎了俩杯子。哈……手滑。 
__孟奇__：你醉了。 
苹果：谁让你的配方这么神？没忍住，连干了三杯。 
孟奇：我觉得也就是一般。 
苹果：你说怪不怪？你平时喝的那些东西简直像泔水，脑子里怎么藏着这么干净的配方？ 
孟奇：因为好不好喝对我来说，不重要。 
苹果：哈，懂了。你只是需要酒精，不需要调酒的人。 
孟奇：也不对。其实我需要人。我需要盯着某样东西，确认它还在流动，还在变化……你看，我从不一个人在家里喝酒。 
苹果：对，千万别在家喝，不然我们这行全得饿死。 
孟奇：……你还记得两个小时前跟我说过什么吗？ 
苹果：我不记得。哈哈，我都不知道五分钟前说了什么。
孟奇：你说，你忽然理解不了人们为什么要花两倍的钱来酒吧买醉。你说你遭遇了职业危机，觉得自己撑不下去了。 
苹果：多可笑一人啊我。才干了两个月，这也配叫职业危机？ 
孟奇：这种情绪很常见。我见过不少刚入行的，因为某个喜欢的熟客再没出现，就开始怀疑自己存在的意义。 
苹果：……你怎么知道我是因为有人没来才……才觉得没劲的？
孟奇：那天我就看出来了。你喜欢那姑娘。
苹果：这么明显吗？我还以为藏得挺深…… 
孟奇：但我要提醒你，她接近你的目的，可能没那么纯洁。 
苹果：干嘛把人想得这么坏？何况她也没再来，我还巴不得她是有目的的…… 
孟奇：你会错意了，我是说—— 
苹果：别说了。等她哪天真出现了，你再来给我上课吧。 
孟奇：也是。这样吧，我给你一个配方。以后或许可以做给她喝。 
苹果：她会喜欢吗？ 
孟奇：她会喜欢的。相信我。 
苹果：这杯酒叫什么？ 
孟奇：__Perseverance Cocktail__.
苹果：听不懂。你还是写下来吧。

（铅笔划过杯垫的声音。）

孟奇：不管怎么样，你肯定会熬过来的……
苹果：你说什么？
孟奇：没说什么，自言自语。`},{id:"ling_20231103",searchId:"玲_20231103",title:"玲_20231103",locked:!0,content:`店内环境干净。
一声推门声响起。
脚步声一前一后，由远至近。

玲：嗨。
苹果：你终于来啦，我一直在等你，刚好我准备了一杯新酒——诶？是两位吗？
玲：对，我朋友。
苹果：请……请坐。
玲：没关系，我们不坐啦。
苹果：诶？
玲：——刚才我们在另一个酒吧喝酒呢，突然想起来，就让他用了你的彩蛋。
苹果：啊，是吗……
玲：总之我们尝了好几杯，有好有坏吧……但彩蛋很有趣呀，所以顺便带他来看看制作者。
苹果：我理解了……
玲：怎么样，今天人很少吗？
苹果：是比较少人。
玲：我们刚才在那个酒吧，人好多，好吵……总之我们就是过来看看你。
苹果：好的……真的不喝一杯吗？我已经为你做好了预调。
玲：真的已经喝醉啦，你替我把它喝掉吧。
苹果：需要喝杯水吗？
玲：太晚了，我们回去了。改天见。
苹果：改天见。

脚步声一前一后，由近至远。`},{id:"awen_20231103",searchId:"阿文_20231103",title:"阿文_20231103",locked:!0,content:`安静的钢琴声。
推门声响起。

阿文：没事，是我。
苹果：我看见是你了。
阿文：这么冷淡呢……你在等什么人吗？
苹果：没有啊。
阿文：哦，我看你把一杯做好的短饮倒进啤酒里了。
苹果：准备做一杯新酒来着，最后决定掺着世涛喝吧。

短暂沉默。

苹果：你喝什么？我给你做。
阿文：我就喝你手里这个。
苹果：我没做过，不确定味道怎么样。
阿文：我就喝这个，没事的，不会为难你。

杯子在吧台被推动的声音。
啜饮声。

阿文：是好喝的。你尝尝？
苹果：没关系，你喝吧。
阿文：尝尝吧，没准成你以后的主打产品。
苹果：那就很戏剧化了，甚至可以说荒谬。
阿文：怎么说？
苹果：没事。

啜饮声。

苹果：嗯，还行吧。
阿文：这孩子，真谦虚！行了，想喝什么自己倒，今天我请你.
苹果：怎么回事，突然请我喝酒。
阿文：我要搬家了，来跟你告别一下。
苹果：搬家？这么突然？
阿文：对，也不突然吧，我一直都想换个城市生活，这你也知道。
苹果：我以为你都只是说说。去哪啊？
阿文：先回家，明年春天再看去哪。反正老朋友们渐渐走散了，我也应该向前看呗。
苹果：什么时候走呢？
阿文：东西都收拾完了，明天收尾寄走，后天我人就走了。
苹果：那这——我是不是应该联系阿山，让他回店里一趟。
阿文：没事，犯不着。就咱俩聊聊挺好的。
苹果：我以为你俩已经和解了……
阿文：谈不上没和解，也谈不上和解。
苹果：什么意思？
阿文：很难解释。
苹果：可你们毕竟认识这么多年了，我才刚来多久？
阿文：就是淡了，明白吗？淡到连告别都完全没必要了，这画面，光想想就怪恶心的。
苹果：我大概明白，阿山有回说，每隔几年客人就会换一茬，他也得跟着新来的熟客更新版本，一旦更新，老事儿就都模糊了，忘了。
阿文：所以我说么，他这人表面和气，其实是很残忍。也许这种性格反倒天生就适合干这个。
苹果：他现在来店里都少了，什么都交给我。
阿文：你要撑住啊，以后我回来玩，还想喝杯这个。怎么样，给它起个名字吧？
苹果：放心，我会记住的，但也许到时候你应该喝杯steph，毕竟给你做的第一杯是这个。
阿文：还记仇呢？其实你那杯做得蛮不错，但那会咱俩刚认识，你又第一天上班，我可不能让自己显得好应付，知道吗？
苹果：你就这么坑我是吧。
阿文：开个玩笑么。快把你收藏的老莫的那些胶卷拿出来，让我最后好好看看以前的日子。

背包被放在吧台上的声音。

阿文：真是一晃十年过去，你看那时候我多年轻啊。
苹果：这个你也可以看看。
阿文：是什么？
苹果：那年偷你钥匙，上老店拍照来着。
阿文：我就知道。
苹果：你这么着。

薄片划过吧台的声音。

苹果：你看，把这些带白圈的帧叠起来看，像不像一个人影？
阿文：怎么，你也觉得老莫被关在这堆胶卷里了？
苹果：为什么说也？
阿文：忘记了，大概以前听人提到过这种说法吧。我看看……

薄片继续划过吧台的。

苹果：哎，你不能把全部都给拢一块，不然……
阿文：不然什么？你自己看啊，得全都叠在一起，看起来才更像一个人影。
苹果：没……没什么。
阿文：是有点像。

短暂沉默。

阿文：嘿！你看，我准是老眼昏花色令智昏了，怎么差点被你的鬼话骗了。
苹果：我才懒得骗你.
阿文：行了，收起来吧。

背包整理归位的声音。

苹果：说起来，你最近见过孟奇吗？有跟他说你后边的计划吗？
阿文：以后有机会，或者你跟他说。
苹果：那难了。
阿文：无所谓——说真的，你也别总惦记着这群老人了，会有新客人的。
苹果：我有新客人啊。
阿文：你最好有. 行了，我得回去收拾东西了，如果明天有空会再来。
苹果：我送你。
阿文：不用，青山不改绿水长流，再会了。
苹果：明天见。

吧凳挪动的声音，脚步声由近至远。

阿文：对了。
苹果：什么？
阿文：我刚来的时候，在门口看到两个人往外走。
苹果：啊，怎么？
阿文：你记得你问过我，老店墙上那首署名惊叹号的诗是谁写的吗？
苹果：记得啊。
阿文：很像那个人。
苹果：什么？你是说，那是大白？可他不是……等等，他没有失踪吗？
阿文：也可能看错了吧，明天见。
苹果：你等等——

推门声响起.
急促的脚步声由近至远。

苹果：嗯？人呢？

短暂沉默。

苹果：你还在吗？

店内恢复安静。
凝固如霜的钢琴曲仍在无尽地弹奏下去。`}],Cp=[{id:"intro",password:"",title:"主页",locked:!1,content:"亲爱的朋友，这是一个不公开博客。 如果你想学习鸡尾酒，请输入酒名查看； 如果你只是想要偷窥我的树洞，那请你转身离开，去看综艺节目吧。"},{id:"boiler_maker",password:"boiler maker",title:"Boiler Maker",locked:!0,content:`Boiler Maker 
    30ml Tanqueray Gin
    400ml Pale Ale

使用子弹杯装满金酒，扔进盛放啤酒的杯子里。谁能想到如此简单的做法居然还挺合理，金酒的植物感让淡色艾尔的啤酒花香气进一步增强，每喝一口都像在植物园中闲逛的感觉……

  说起来，这算是第一篇我的调酒学习笔记吧。如果你碰巧发现了这里，那你算是发现了我的秘密，毕竟我的调酒生涯居然从一杯啤酒鸡尾酒开始的，哈哈！

  不管怎么样，__今天还有一件事情值得记录__。得知我求职成功，熟客__阿文__也很高兴，他知道我是摄影系学生，还说他知道店里碰巧有台8mm摄影机，“蛮难处理”，还不如让老板__阿山__交给我使用。

  这可是bolex的8mm摄影机啊！开心！如果老板答应，我就有机会用它给自己的酒吧生涯拍些胶片素材了，以后能做纪录片也说不定。

  哦对，关于纪录片我已经有想法了，为了展现周而复始循环往复的酒吧生活，__我要打乱所有胶片的顺序__，让整个故事看起来像是同一天的不断重复！只有我才知道每个胶卷是在什么时候被拍下的。
  
  💡 更新：

  今天，我把一杯给某个客人准备的鸡尾酒倒进世涛啤酒里，过程中正好被阿文看见，他说，我这是做了一杯boiler maker twist。

  回想起来，这距离我第一次喝这杯酒，竟然已经过去__三年__了。

  好喝，阿文也说好喝。

  可又能怎么样呢？`},{id:"martini",password:"50/50 martini",title:"50/50 Martini",locked:!0,content:`50 / 50 Martini
    Dolin Dry Vermouth 25ml
    La Quintinye Dry Vermouth 15ml
    Tanqueray Gin 40ml
    Fernet Hunter 1 / 2 barspoon
    Lemon Juice 1 drop

我一向不喜欢Dry Martini，结果给__阿文__做了一次还被吐槽，更讨厌了。

  但这杯不一样，50 / 50，指的是其中两种材料按照一比一的比例调制，听阿文说这样做其实更符合这杯酒刚被发明时的样子。我不知道，尝起来根本两码事。

  学会之后__刚过两天__，有个叫__孟奇__的熟客就点了这杯，做完之后他还算满意——当然是老板的配方好——他说尝起来更像另一款叫"__竹子__"的经典鸡尾酒，据说是在一位熟客的反复调试下才制作成功的，也有其他材料加入，并不能严格算作50 / 50。

  有意思，我以前没怎么同这个孟奇说过话，谁想到他居然会了解我好奇的那件事呢？

  顺便一说，摄影机已经拿到了。贴个tips在这以防忘记。`,stickyNote:`1. 胶片跑动不畅，或因卷轴张力过紧所致。
  2. 在户外强光下拍摄时：请勿只依赖自动曝光，务必使用内置的日光滤镜，以确保画面色彩不会过分偏蓝或泛白。
  3. 注意上弦的次数与力度：机械上弦马达通常只能拍摄约20 - 30秒即需再次上弦。
  4. 避免在镜头前哈气清洁：口中的湿气会加速镀膜的老化。
  5. 胶片画面中出现耀斑，往往由镜头存在划痕所致。`},{id:"steph",password:"steph",title:"Steph",locked:!0,content:`Steph
    Tanqueray Gin 40ml
    Glen Grant Scotch Whisky 10ml
    Dolin Dry Vermouth 20ml
    Suze 12ml
    Fernet Hunter 3ml

店里有些客人对这杯酒的喜爱达到了狂热的程度，甚至声称再难找到比它更美味的鸡尾酒了。我对此持保留意见，从未真正品出它有什么了不起的地方。

  然而，上工第一天就因为给__阿文__做砸了而被退回，这让我严重怀疑自己是否有必要将它写进博客里。如果你碰巧看到这个页面，我强烈建议你先跳过这杯。谁知道呢，或许根本是配方本身就有问题！

💡 更新：好吧，我又来更新了。今天被一位客人耐心而细致地指导后，我重新制作了一次，谁想居然成功了？ 虽然我个人依然喝不出其中奥妙，但客人非常满意，可能他是为了安慰我吧！无论如何，他说下次来时，会教我一杯所有烈酒爱好者都会爱不释手的鸡尾酒，他说这款酒叫__Francis Albert__！

今天他跟我提起了那位失踪已久的客人，鼓励我用他留下的胶片做点什么。实际上，我已经将这些古旧、变脆的胶卷全都仔细检查了一遍，并用__一种完全对称的方式标记__出了所有能用的部分（或许全都能用？）。

怎么说呢？能够利用其他人拍摄于多年前的素材，这会让我的纪录片产生强烈的时空错乱感，简直是完美的效果！更何况，这位客人已经在两个不同时空的影像里出现过。等他再次光临，我得把我的纪录片计划跟他好好聊聊！`},{id:"francis_albert",password:"francis albert",title:"Francis Albert",locked:!0,content:`Francis Albert
    Tanqueray Gin 30ml
    Wild Turkey Rare Breed Whiskey 28ml
    Lemon Peel

__孟奇__还真病了，过了整整一周，直到__万圣夜的前一天__才又出现。这期间我跟其他熟客聊过这杯酒，据说__阿山__一直以来都以这杯酒著称，可单看配方他却只是完全依照经典做法来的。

直到孟奇再出现，他兑现诺言，把阿山制作这杯酒的秘密告诉了我。原来诀窍就在于，少放那一点点的威士忌。我一尝，满脑子原来如此的想法：浓郁但有清脆感的柑橘菠萝香气，波本威士忌令人不悦的那种拧成一团树皮气味被金酒的植物感冲淡，真是奥妙无穷！据孟奇说，这也是那位消失客人的最爱。

不过他会去哪了呢？

💡 更新：在第一个休息日回到店里，点上一杯__Francis Albert__，重新做回客人的感觉还是挺好的。

我才注意到，原来那个讨厌鬼也会抱怨阿山的酒，不过阿山却完全面无表情。__玲__见我啧啧称奇，说选择性耳聋是成为酒保的必要技巧，让我学着点。

ps：玲是新朋友，新客人，但我们却聊了一整晚。
怎么说呢，我渐渐有点讨厌老店的那些江湖恩怨了吧。`},{id:"whisky_sour",password:"whisky sour",title:"Whisky Sour",locked:!0,content:`Whisky Sour
    Buffalo Trace 40ml
    Manzanilla Sherry 10ml
    Rich Syrup 10ml
    Lemon Juice 20ml

__一天晚上__做了两杯，得到了两种完全不同的评价。把经典配方中的一部分威士忌拆掉，换成发酵感和果香更重的雪利酒，确实让这杯经典酒多了很多微妙的味道，话梅？苹果？或许吧。

看__孟奇__在喝，想要插话的__阿文__非得让我给他做杯，然后每一口都喝得一脸不乐意，真不知道他为什么总要找我的茬——应该说，今天晚上他就一直在找所有人的茬！

不过冷静下来想想，哪怕是不愉快，也都算是酒吧经营的日常，不是吗？既然是日常，就值得被记录下来。`},{id:"little_italy",password:"little italy",title:"Little Italy",locked:!0,content:`Little Italy
    Knob Creek Rye 50ml
    Vermouth Rosso 20ml
    Cynar 15ml

算是__Boulevardier__的变种吗？尝起来差不多的样子，所以也从没当回事，没记录在博客里。

回想起来，第一次尝这杯酒，还是在这上班的首个休息日。一个没见过的女生点了这杯酒，主动请我尝尝。

或许是同样作为新人的共同气质让我们彼此吸引？反正我记得那天晚上我们聊了很多，似乎很投缘，投缘到我认为她以后每周都会出现在这里。无论如何，就在我以为终于要有一个自己的熟客之后，她就再也没有来过。

直到今天。

本来嘛，__昨天才刚过完情人节__，我以为店里会清净到一个人也没有，谁知她竟终于再度出现，甚至还记得__一年半前__的那个约定。但时过境迁，我早就把它的正确风味和配方忘得一干二净了——而且最重要的是，在遭遇了那些事之后，这几天我根本不在乎一杯酒到底好不好喝，实在是提不起那个精神！`},{id:"jam_1030",password:"jam 10.30",title:"Jam 10.30",locked:!0,content:`Jam 10.30
    Sotol 45ml
    Bourbon 15ml
    Caffo Amaro 12ml
    Amontillado Sherry 10ml
    Creme De Cassis 5ml / Chinachina 5ml

Sotol是种蛮少见的一种烈酒，产自墨西哥北部。不知道从什么时候起，__阿山__忽然对它感兴趣，这两个月便用它做了几个新配方。搞不懂，此前他很久没有做新配方的热情了，而且最近生意并不好，有时老客人们宁愿喝杯啤酒。
不知道是不是我的问题。自从__孟奇__再也不来之后，其他人对我的服务和出品总有洋溢着一种客气和假笑，就像是即便我做得不尽如人意，但他们也愿意包容我似的，这种感觉很别扭，觉得不好直说不行么？又或者根本就是其他问题？
我就直说了吧。前阵子没拍片，因为没心情，所以把存放胶片的背包扔在仓库里。前几天我__入职一周年__，不拍说不过去。可刚翻出背包，就发现里边的胶片被人动过，去问阿山也支支吾吾的，只有__阿文__肯说实话。归根结底，他们还是觉得孟奇发生意外，跟我去老店招惹了不干净的东西有关。估计也是因此才想要把那卷胶片找出来扔掉。
我没那么傻，这一卷我根本没有放进背包里，它也不在编号系统内。`},{id:"xyz",password:"xyz",title:"XYZ",locked:!0,content:`XYZ
    White Rum 35ml
    Pisco 5ml
    Spanish Gin 2ml
    Lime 20ml
    Syrup 5ml
    Cointreau 10ml

每年__4月25日__是酒吧的__店庆日__，这天酒吧不营业，只招待老客人，当然也没有鸡尾酒，__阿山__会开十几瓶威士忌请大家喝。听说每年这天，都会有很多人喝醉，这不新鲜。但要在这天正经八百的做鸡尾酒，那倒很少见到。今年__店庆__，我就给__孟奇__做了杯酒。__XYZ__，加入一点点pisco和西班牙金酒，貌似是他自己的配方。我尝到了摇酒壶盖上残存的一点酒，很香，但除此之外，关于那天我已经没有记忆了。

💡 更新：孟奇很久没来了，今天__阿文__提醒我才想起，原来这是那天他一定要喝一杯__XYZ__，原因竟然是这个。总是作为最后一杯存在的鸡尾酒，__XYZ__，如今也成了孟奇在这个酒吧喝掉的最后一杯。
一声叹息。`},{id:"goooooose",password:"goooooose",title:"Goooooose",locked:!0,content:`Goooooose
    Shochu 50ml
    White Rum 20ml
    Italicus 10ml
    Vermouth Dry 15ml
    Lemon Peel

翻那堆老配方有了新发现，可由于店里长期没有烧酒，到__立春__那天，有人带来一瓶做礼物，我才终于试做了一次，结果味道惊人地不错。在低烈度和清新性格的表象之下，保留着变化的空间……
我去问__阿山__这配方怎么来的，为什么叫这个名字，他先说或许是某天喝开心了，让哪个客人进来做的，也许当时碰巧有烧酒，众人喝完觉得不错就写了下来，结果因为喝太开心，所以全都喝多了，第二天也就完全忘了这事。反正一直以来，也没什么人喜欢这杯。兴许就该被忘记吧。
总之阿山说了很多，但我今天喝得很开心，不记得他说了什么。`},{id:"exclamation",password:"!",title:"! （大勘定）",locked:!0,content:`!
    Knob Creeks Rye Whiskey 30ml
    Tanqueray Gin 30ml
    Singani 10ml
    Gran Classico 10ml
    Spanish Bitters 2dash

__阿山__很熟练地操作起这杯酒，用上了柜子最里边一个落灰的瓶子，那是仅剩一个瓶底的玻利维亚葡萄蒸馏酒singani。
今晚之前我从不知道世上存在这种酒，也不知道店里还有一小口这种酒，更不知道我得上哪去找到这个酒来复制这个配方。
我必须得说，（如果有机会找得到singani的话），__Francis Albert__的爱好者应该去尝试这杯酒，因为从香气和复杂度上，它都像是一个妖娆版本的FA。

💡 更新：今天又得到了新情报！有人让我用普通的pisco制作了这杯酒，来人清晰地讲出了这杯酒的配方，并且告诉我这杯酒叫“__大勘定__”。他还说，因为这杯酒本来就是__Francis Albert__的变体，而后者又与__Frank Sinatra__有关，所以变体才使用了日本爵士钢琴家__明田川莊之__一张专辑的名字。
我不知道这究竟是巧合还是某种文化演变，但考虑到阿山语焉不详的，而这个据说很多年前曾是常客的信源却说得有鼻子有眼，所以我现在更愿意相信，它根本就是阿山从别的地方偷到的配方！anyway，信源自称__老陈__，我们聊了非常多，据他说自己亲历那年酒吧写作小组举办的第一届小说大赛，对失踪的__老莫__等人印象深刻，而我则即兴做了一杯酒，并__用那个杂志样书的名称__来命名。
你说我是想展现这个店的延续性也好，或是硬要置身事内也好，但究其本质，我真的不太关心以前这些事了，当故事听都费劲！`},{id:"are_bats_rats",password:"are bats rats",title:"Are Bats Rats",locked:!0,content:`Are Bats Rats
__aka Jam 11.05__
Glengrant 45ml
    Fernet Branca 10ml
    Vermouth Bianco 25ml

为一个酒吧工作__超过两年__后，我终于做了自己的第一款原创鸡尾酒。
主要还是因为，这个酒吧自己拥有的鸡尾酒配方实在太多了，有时我打扫卫生，都会从吧台的缝隙里找出一些写在餐巾纸上的配方来，要知道这个店刚搬到这里不到三年，而这些配方甚至不是__阿山__留下来的。
它——我是说这个酒吧，本身就像是一个会自己产生配方总结配方的奶牛。
而我的这款酒，甚至谈不上原创，作为一个Hanky Panky的twist，我相信这个搭配肯定早被人做过千百次了。
但你猜怎么着，效果居然还不错，可为什么没有人把它“注册”成某个经典鸡尾酒呢？

无法理解。
无法理解人。
无法理解喝酒的人。
无法理解喝酒的女人。`},{id:"second_serve",password:"second serve",title:"Second Serve",locked:!0,content:`Second Serve
    Montenegro 30ml
    Manzanilla Sherry 30ml
    Monin Cane Syrup 10ml
    Lemon Juice 20ml
    Soda 60ml

从来没尝过成品。第一次做根本懒得尝，第二次——也就是今天，也只尝到了在酒壶里预调时的那一点点，酸甜苦，发酵感。还可以吧。
事实上，当你不知道怎么开启话题的时候，用一杯酒确实是个办法。__三天前__有客人推荐了这个配方；这人自称是__老店__客人；说到了__老店__以前的事，于是我们看了__老莫__留下的胶卷，比如这一张。
然后把照片展示出来，给当事人__她__看，看__她__有什么话讲。

💡 更新：不知不觉，这款酒似乎变成打通某种逝去记忆的钥匙。__老陈__之后，半年内竟然先后有两个老客再度造访——虽然对我来说他们完全就是新人。我无一例外地给他们做这款酒，他们也顺其自然地聊起关于过去的话题。

该怎么说呢。其实最近这段时间，因为某些原因（或是某个人），我对这家店的历史是既关心又不关心，两种感觉同时存在，一方面我觉得自己没必要关心跟我没关系的事，应该在意的是当下的人。另一方面，我又觉得自己有必要关心，因为即使是当下的人，或许也跟那段过往有联系，我说得对吗？

但归根结底吧，我已经稀里糊涂地成了这家店的一份子，无论如何都不可能再带着刚来时那种旁观者的好奇心再来了解这些事情了。

ps：这两个老客人也是有趣，喝到这杯酒后，他们分别跟我说了些怪话，其中一个还好，另一个——喂，__平安夜__说这些真的没问题吗？`},{id:"my_wild_irish_rose",password:"my wild irish rose",title:"My Wild Irish Rose",locked:!0,content:`My Wild Irish Rose
    Tanqueray Gin 40ml
    Dandelion Bitters 5dash
Montenegro 15ml
Islay Mist 10ml
Tanqueray No.10 10ml

完蛋，秘密被发现了！
有种别人偷走宝贝的失落感（并没有
我原本以为没有人会找到这个地方来的，结果连彩蛋都被发现了。还好胡乱搓出的第一杯就被认可了，不然也太丢人了。
总之，这杯酒得到了它的名字！Keith Jarrett的一首曲子，考虑到这是一杯有甘草和玫瑰花香气的martini，配这个名字还真的很适合。

[IMAGE:/cat_decoration.png]


💡 更新：好吧，连__阿文__都对这杯酒赞不绝口，在我印象当中，他被禁足前可从没夸过我。这回阿文又是趁着阿山不在的时候出现在店里，连问都没问我一下。这可是__跨年夜__当天，一年中酒吧最忙的时候，99.9 % 的情况下阿山都会在。我都怀疑，他们是不是早就为了不至于尴尬而开始私下对时间了。

又或者，他想和解？`},{id:"perfect_manhattan",password:"perfect manhattan",title:"Perfect Manhattan",locked:!0,content:`Perfect Manhattan
    Knob Creek Rye 60ml
    Carpano Punt E Mes Vermouth 15ml
    Dolin Dry Vermouth 15ml
    Orange Bitters 3 Dash

不完美就不完美呗，反正剩的半杯，常温下放了一个多小时，我再喝也觉得挺好喝的。谁能想到__阿文__这家伙居然一杯半就喝多了，哪怕是我刚到店里的那一年，他每天也至少六杯起步。
难道这就是衰老吗？
不知道为什么，我觉得这一幕特别值得被拍下来。
__编号系统继续启用__吧，嘿：）`},{id:"film_fan",password:"电影迷",title:"电影迷",locked:!0,content:`电影迷是一篇小说，作者署名__Taylor Soigir__。
我把小说的扫描文件录入到博客，以便之后有时间再慢慢看。
不知道，我隐隐觉得这事与__小树__跟我说的话有联系。`,attachments:[`电影迷
By Taylor Soigir


我从小就很喜欢看电影。

长大的那个县城很小，老一块看电影的朋友也只有一个，哥们叫大白。

虽说爱好的东西一样，但我还是没这家伙命好，大白喜欢电影是家传的，他老爹就是个电影迷，小时候就听大人传说，《少林寺》上映的时候他爹偷家里钱到县城电影院买过一天的8张联票。联票什么概念，同一个座位号，一整天八场放映，他买下来，然后坐那一口气连看八遍不起身。

后来县城开了录像厅，他爹跑去打工，这之后便不再去电影院。等到家家户户都有电视的年代，他爹率先在县城主街上开了租碟租录像带的门店，门面不大，货架非常深，黑漆漆，白天都懒得开灯，照明全靠一台放在高处的电视。

我对他这老爹有印象，是因为他天天坐在店门口那张收银的木桌子旁边，盯着头顶上19寸电视机看，我在里头偷摸翻柜架上的三级片封面，摸一整天他也不管。`,`我们在一块看过两三次，每次到这个部分，大白都会把强奸细节极尽所能的口述出来，我听得毛骨悚然，虽然80年代末国产片拍过很多“厉害”的东西，但如此极至的影像表达还是让我不敢相信。更让我无法理解的是，大白坚信导演亲自指导男演员完成了一场真实的强奸戏，也就是说，强奸在拍摄过程中真实发生过。

即便后来我俩看的电影越来越多，兴趣也都超越了小孩时喜欢的刺激，我们也常常围绕这部电影，争执创作时拍摄电影是否有必要采用极端手段操作以抵达最逼真的表演。但电影这东西终归还是离我们太远了，那些关于电影创作的想象自然出格的离谱。

到那几年，县里的电影院早没生意了，碟店反倒越来越多。去高中报道那天，我妈给我买了第一台手机，大白没来送我，说是得帮家里看店。其实我和大白关系早就淡了，看待电影的方式也越发不同。对我们来说，电影就是个认识外面世界的工具，等我做好了准备真要去外边的世界看看，这东西就不重要了。但对大白来说，他对看电影已经形成一种补完拼图式的需求。小时候他曾经问我，我们有没有可能把世界上所有的电影看完，那时候我还笑话他，但到如今，对他来说，每一部单独的电影已经不再独立存在，而是相互关联，拼在一起构成了这个年代。所以，一定没有哪一块拼图他不想牢牢抓住的，于是他不再理我们这群人，而是开始花更多的时间看电影。要我说，他看电影的方式，更像是在和电影工业赛跑。

反正初中毕业之后，大白就接了他爹的班。我呢，外出考学，之后一年也未必回家一趟，跟他联系越来越少。我们关于电影的喜好都已变成一段记录往事的老照片，渐渐泛黄暗淡，更不用说对于那部电影的争执了。`,`前几年我跟家里通电话，偶尔还会跟我妈扯起大白和他的事，我妈说现在光纤进了家家户户，哪有人还租碟买碟，那条街上原本的七八家音像店，现在又剩下大白家了。他能坚挺那么多，还是因为把店铺的一大半被用作快递接收点。我妈说现在大白都可忙活了，每天都得花好几个小时整理邻里们的网购成果。电话里我哼哼哈哈，说着我对他的了解，工作的间歇他肯定还会昂着头，看看电视上放的新片，要不就看他那些几乎放不出影像的录像带收藏。我妈说，还是你了解他，别人都说他魔怔了。接着妈又问我还看电影吗？我说，早不看了，没那个耐心。我妈说，幸好，都那玩意害的。我说，大白是给困在咱们那个小地方了。

前几天一下班回家，保安亭的大爷站小区门口说有个人等了我一下午，我一看是大白，他坐在录像机箱子上，拿着一台DV在拍我。

第二天我仍照常上班，留大白在家休息几天，等到晚上回家，家里竟然多出一台旧电视，一个DVD机，大白说任何人家里都不能缺台电视，不然太像宿舍，他从附近二手家店市场给我收了两台机器。我哭笑不得，这家伙一天宿舍没住过，到操心起我来了。但只能和他租屋里找个空地，连他带的机器，把这过时的家具三件套摆好设好。

弄完之后我在屋洗澡，大白连找电源，等我点烟裹着浴巾出来时大白已经放上一部片子，我坐在他旁边心不在焉，但没过一会儿便认出，这就是当年那部引发我俩争议的电影。大白看我还记得，心里挺激动，我说我记得是记得，但除了一部分片段之外，电影讲了啥早忘得一干二净了。大白找来的这个版本经过画质修复，看起来更加陌生了，而且它毕竟是二十多年前的通俗类型片，现在再看就显出情节老套，走戏僵硬的毛病。我很快疲了，直到一场绞杀戏开演，大白才道明这次来找我的真正目的。

大白无比确信，这场戏的声音采集自真实谋杀的环境录音。

大白告诉我，他之所以如此确定，是因为他在店里，没事就从碟商给的目录单里进货退货，拉了无数部那个年代的片子，终于把电影和名字对上号。据大白所知，这部电影名叫《黄色幽灵》，电影上映没几年导演达式彪就去世了，那个被大白认为遭到强奸的女演员则在若干年后因为组织卖淫活动被捕。

由于导演的死因一直没有公布，大白认为，这场戏中，被绞杀的受害者所发出的声音，很可能就是导演本人的声音。

“异想天开，导演怎么可能把自己濒死的声音放进自己的电影里？”我说。

大白提醒我，根据他的记忆，这一剪辑版本已经与他自己的录像带版已经大不相同，素材如今连来源都很难追查到，而知道真相的相关人士要不死了，要不身处牢笼，要不失踪。

“任何电影的剪辑修复工作都会有大量人参与，一定有人利用庞杂的胶片搜集和修复体系，把真实录制的杀人现场收音加入到了片子里以传达某个真相。”大白无比确定说。

但真相是什么，又该如何查找，他当然搞不清楚。我说你别嫌我说话直，但你在咱们那县活了一辈子，连电影修复的流程都一窍不通，你要怎么找？县里电影院都关门了，谁还看电影，谁还还在乎这些拍电影的人在干什么呢，年近40的大白很激动，他掏出自己那盘几乎已经读不出画面来的带子冲我挥舞，说他在乎。这场对话不欢而散，我躲进屋子里像往常一样躺在床上玩手机，不一会儿睡着了。等到第二天我出屋一看，大白已经离开了。`,`把纸条叠成一叠，然后拔掉那三台机器的电源，把它们堆一块。

时间过去一个月，我接到老家电话，大白的老爹突发中风，他的家人托我妈找我说大白家人与大白断联有一阵了，希望我告知并让他速回，我这才知道大白根本没有回家。

自此大白便失踪了，他的家人很焦急，但我并不在意，我猜他还是在找那个真相。

再说，一个40岁的人失踪，这既实在叫我关心不起来。

时间又过去大半年，想到左右躲不开大白失踪这个话题，我决定趁着参加大白爹葬礼的机会回家看看。大白爹葬礼结束之后，我走在面目全非的老街上，不由得想起了热火朝天的童年往事。我有点伤感，同时也意识到，记忆中残存的气味记忆本可靠重回物理时空环境去唤醒，但当物理时空逐渐坍塌之后，那些记忆也会渐渐消失。

我胡思乱想走到大白店门口，卷帘门上贴着暂停营业的打印纸显现被水泡过又晒干的痕迹。自大白出走到大白爹中风，大这家一团乱麻自然无心经营，但我却在这时想起了大白纸条上的话，“回到最开始的地方”。

我试着拉了一下卷帘门，门未上锁，干燥的阳光射入黑漆漆的屋子里，气味让我脑中浮现站在那些碟片封面面的自己，但实时映入眼帘的却是堆叠的快递柜架，架上除了大白的DV别无一物。

我拿起DV翻看，机器几乎发没电了。我在存储卡上的录像中看到了小区门口的我自己，看到了大白出发时的画面，接着又看到大白回到店里一盘接一盘看带子，看来他在离开我那之后回到过县里，但却没进过家门。

我合上DV往店的深处走，终于看到角落里看到满载影像和尘埃的碟架，那是熟悉的物件，我触摸着从新到锈的铁艺架台，踩到了地上的一盘录像带。我抬起脚，发现了地上的泡面空箱和散落一地的录像带。

大白从录像中发现了什么吗？大白去哪里找他的真相去了？我拿起地上随便一盘带子塞进机器，电影画面模糊，无头无尾，坐在这样的环境中我就像回到了小时候。大白好像从来没有离开，我好像也从来没离开。`,`我重新回到生活中，关于大白的心结却怎么也解不开了。晚上下班回家，我总是盯着电视黑屏发呆，大白的DV被我带了回来当做纪念，此刻也被我堆到电视机头上。我总在想那画面。

胡乱了一阵之后我把电脑关掉，躺回床上操作手机。我不知道大白是怎么找到这些名字的，通过这些名字搜到的资源总也对不上那些我们小时候看过的电影，我甚至怀疑后来大白给我的看的《黄色幽灵》和小时候根本不是同一部，但想又觉得，其实是同一部，但随着时间流逝，它们也在苍老，也在变化……

我开始怀疑自己，这是不是说明大白的判断是对的？我在内心里越来越倾向于他了？

依然没有任何证据，除了现在能找到资源中那场绞杀戏中的，所谓来自导演濒死的哀嚎，但我越来越不确定，因为时间并不止步。

我在在这座城市的生活随它节奏之间或发生震动，后来的几年里，我搬了几次家，钥匙环上的钥匙越积越多，我认识了新的女朋友们，每一次我都以为她们是对的世界，是新的。然而新难免变成了旧，“对”则不再重要。

逐渐地，就连我与大白在那个间出租屋最后一次看电影的记忆，都像印在热敏纸上的笔记一样越变越淡。

老家也没有任何消息。

一天晚上，我做了一个梦，我梦到成吨的塑料碟片被堆积在老家的垃圾山上，它们被挖掘机碾过，被填埋。我看到风中无数录像带中扯出的黑色胶带在飞舞，缠绕在高压电线上，勾住鸟，被电弧烧得没影踪。我看到了一个人影站在远处，用一台没有电的DV悄声无息记录着这一切，风代替了转轴的驱动力，拽着从坏掉的外壳中露出的胶片向外抛散，在暴力的撕扯中完成了这一场连续的曝光。

睡醒之后我给老家打了电话，母亲搞不懂我怎么又问起大白家的事情，很显然在大白爸去世之后大白的妈妈便搬回了乡下老家，店面也早早退租关掉，那些碟和带子肯定也不知所踪了。

母亲语气略带狐疑，我知道她生怕我变得跟大白一样神神叨叨，便随便说了几句现状就挂掉电话。

我心神不宁，把全部家当翻过一遍，找出从老家带回的那台DV，机器自我带回就没被充过电，更别提打开过了，我拔出其中数据卡插到电脑上，我又看到了大白拍到的我，以及在那个出租屋里我拍到的大白，那年从大白的店里回来之后，我已经好些年也没看过这些画面。`,`在一段画面上，大白在拍我们再看录像，录像的内容又是从这台DV上考过去的。我看着视频里的那些物件儿，想起他给我买的电视和录影带机来，这些东西早被我留给那个租屋的房东，如今不知还在不在那。

不知不觉我就翻到了数据卡中最后一段录像，这段录像录制于大白回到小镇，回到自己的店里。DV被大白放置在快递柜上，内容是他自己在店内重新观看录像带的画面。我正准备关掉，却发现画面中大白起身上前从录像带机中退出带子，装进了快递袋中并在地址栏写上一行地址，录像到这因为卡满就自动停下了，我在电脑上放大最后一格画面想看大白写了什么，却什么也看不清，但我能看清，他随意拿起的是印着邮政标识的快递袋。`,`深夜，我跟在一个年轻女性的背后走进小区大门， 还生怕被保安拦下盘问，那个年老的与我相熟的保安早不知到哪去了。

站在曾住过的小区楼下，我看到那个硕大却几乎不再被使用的邮政专用快递箱仍然还安放原地，我安下心来，走上前查看曾属于我的邮件箱。在用暴力手段把它撬开后，我从落了一层灰的广告纸下边取出了那个邮政包裹。

我站在楼下眺望自己曾经住过的屋子，看了很长时间，屋内灯光从未亮起，我的决心一点一点被种下。站在那扇防盗门前，我掏出钥匙串，悉心辨认一番之后把没有归还的钥匙插进锁孔。

我吸了一口气，脑袋依然是蒙的。

屋里漆黑一片，我告诉自己已经尽可能小声，说完便不那么紧张了。我不敢开灯，用手机照明扫过那些熟悉的旧家具，它们的摆位并没有发生变化，我走到自己曾经堆放那堆机器的角落，它们依然在原位，但所有的插头都没接电。

我摩挲着不知道是房东还是新租客给它套上的绸面电视罩，手指粘上一层灰。我取下罩子，接上电，把录像带扔到面前的地板上，然后在黑暗中坐在电视机前，手机照明灯的光点击向显像管又漫散开来。我不知道该不该把带子塞进去，我不知道该不该看。于是我关掉闪光灯，跑到阳台上抽烟。

一根烟还没抽完，客厅的灯突然亮起，客厅内有人喊了一句，“阳台上有人！”`,`在派出所里，我反复跟警察解释事情来龙去脉，我说我和发小曾经是离电影最远的电影迷，现在电影已经没了，电影院全在放怪力乱神的杂技，但发小却在那些老电影里迷失了一辈子，到现在失踪了，而线索却在我们一块看过的电影里。

除了一个民警表示一头雾水之外，另外那些根本不信我。怎么会有人入室行窃自己赠予他人的东西呢？但在致电房东确认了我的身份和我说的话之后，他们还是决定把我放了，由一名警察陪同上门返还钥匙，并向已经原谅我的房东道歉。

在路上，我和民警聊着各自关于电影的记忆，从小区门口那个冷清的电影院门前走过，穿小门进了小区。我站在房东门前敲门，敲门声的间隙，我听到屋子里传来了《黄色幽灵》的声音，我猜一定是在我被警察带走之后，房东发现了我仍在地上的这盘带子。

迎我们进屋之后房东赶忙摁了暂停键，我把钥匙递给房东，房东有些不好意思，但我理解，他只是想知道我冒这么大风险入室到底是想看什么。“不就是几乎完全看不清楚的一盘带子嘛。”他说。

看到事情解决，警察决定离开，我也转身准备走，房东叫住我，他想把录像带还给我，我回身时却怔住了，连忙叫停准备推出带子的房东。

我看到的是暂停状态下的《黄色幽灵》留给电视的最后一帧画面，它在显像管上的荧光粉有规律地颤动着。房东说得对，过了这么多年，这盘录像带的画面已经近乎无法被看清，声音也毛毛糙糙。但我确信，在画面上，女主角的身边，我看到了大白的身影。

那是一圈噪点构成的身影。噪点随画面闪烁而闪烁，其匍匐姿态与多年前在电视前打坐的大白一模一样。原本这一帧画面不存在任何瘢痕，所有的痕迹都因为一遍又一遍反复观看带来的，最终瘢痕挤占了画面，构成了影像的主体。此时此刻，这个由时间和磨损构成的大白，正蜷缩在画面深处的角落里观察。我想起那年，也是在这个位置大白很激动，冲我挥舞手里的录像带，我记得那时候我问他说，你说你在乎，但你连电影院都没进去过。电影这东西离你可太远了，你是全世界离电影最远的人，你要怎么找那个所谓的真相啊？

此刻我只能盯着闪烁的屏幕，我看的不是画面上的女人，我在看的是那些噪点。

我看了很久，却一句话也说不出。

「所以，你找到真相了吗？」`],attachmentType:"novel"},{id:"hot_toddy",password:"hot toddy",title:"Hot Toddy",locked:!0,content:`Hot Toddy
    Whisky With Peaty Flavour 50ml
    Hot Water 180ml

我始终不理解。但__孟奇__一直说，要把这杯酒理解成一种淡茶。他说在帕乌斯托夫斯基的小说里，苏联人把任何用热水泡出味道的饮品都称之为茶——哪怕家里只有胡萝卜干、甜菜干或者柳兰叶，泡进热水里，也能用它来招待客人。

我不知道。孟奇身上一直有种苦修的精神，这体现他对风味的漠视上；有时甚至反过来，是在刻意追求一种寡淡与粗粝。可明明他很懂酒，在我刚做调酒师时，他给过我很多指导，甚至比__阿山__帮我的还要多。

只有一回，他让我拿出尽可能多的瓶子，去做一杯风味极其复杂的酒。那是入行__三个月左右__，我正怀疑自己能不能干下去。显然，孟奇那杯酒不是为了自己喝，而是为了让我领略鸡尾酒风味的奥妙，鼓励我坚持下去。现在我才意识到，那算是我职业生涯的一个小小转折点（幸好那时我正如痴如醉地摆弄摄影机，当然也把这个时刻记录了下来）。

至于他自己，如今似乎只需要酒精本身了。`},{id:"jam_1218",password:"jam 12.18",title:"Jam 12.18",locked:!0,content:`Jam 12.18
    Mezcal 40ml
    Rye 20ml
    Fernet Branca 10ml
    Bigallet China-China 8ml
    La Quintinye Dry Vermouth 10ml
    Spanish Bitters 3ds
    Cardamom Bitters 2ds

还在学习基酒和利口酒呢，忽然给我搞这么一杯，用的还全是我不认识的材料。
真有你的。

但，很好喝。

多的我也不记得了，因为我喝多了，哈哈哈。

我会记得这个配方吗？
无所谓囖，
就让它顺着时间之河，飘到下游某个地方
然后我再把它给捞起来。

算是一个来自过去的礼物吧，

或者永远被遗忘。`},{id:"perseverance_cocktail",password:"perseverance cocktail",title:"Perseverance Cocktail",locked:!0,content:`Perseverance Cocktail
    Rye 60ml
    Ramazzotti 15ml
    Dubonnet Rouge 15ml
    Sweet Vermouth 15ml
    Orange Bitters 2ds

我说过，这个店里到处都是配方。它们都被写在杯垫上，然后塞到各种缝隙里。
工作的这三年里，我已经把所有能够找到的配方全都收集起来，放进一个小盒子里了。
但今天，我居然又从冰箱和吧台缝隙里翻出这么个东西。
更奇怪的是，看字迹，这个陈旧的杯垫既不是我也不是__阿山__写的。
没有头绪。
但这都不重要！重要的是那酒的味道，简直就是为了某人量身定做的。
真的太巧了，下周正好是__她__来这儿的__三周年__纪念日，虽然只有我一个人在单方面纪念。
不过总之，如果她到时候会来，那给她做个__Little Italy__的升级版，大概也算惊喜？`}],Lp=[{id:"reel_01",reelNumber:1,code:[0,0,0,0],label:"First Roll",contentTitle:"First Roll",contentDesc:"模糊的画面里，一个人在酒吧里做酒，完成之后镜头不断推进，拍下放在三角杯中的特写。旁边的杯垫上写 50/50 Martini。",contentImage:[U("/assets/film_01.jpg"),U("/assets/film_02.jpg")]},{id:"reel_02",reelNumber:2,code:[0,0,0,2],label:"Second Roll",contentTitle:"Second Roll",contentDesc:"模糊的画面里，一个高个子在酒吧里做酒，完成之后镜头不断推进，拍下放在三角杯中的特写。旁边的杯垫上写 Steph。",contentImage:[U("/assets/film_02_1.jpg"),U("/assets/film_02_2.jpg")]},{id:"reel_03",reelNumber:3,code:[0,0,2,0],label:"Film 4",contentTitle:"Film 4",contentDesc:"模糊的画面里，一个高个子在吧台里摇酒，完成之后镜头不断推进，拍下放在三角杯中的特写。旁边的杯垫上写Whisky Sour。",contentImage:[U("/assets/film_03_1.jpg"),U("/assets/film_03_2.jpg")]},{id:"reel_04",reelNumber:4,code:[0,2,0,0],label:"Fourth Roll",contentTitle:"Fourth Roll",contentDesc:"晃动的画面，人影纠缠在一起，几乎没有拍到任何清晰图像。第二张内容中，一把钥匙落在地上，拍摄者用鞋将其踩住。",contentImage:[U("/assets/film_04_1.jpg"),U("/assets/film_04_2.jpg")]},{id:"reel_06",reelNumber:5,code:[2,0,0,0],label:"Film 6",contentTitle:"Film 6",contentDesc:"在昏黄的夜色中，一片狼藉的废墟堆在大街中央，与侧后方的现代建筑形成鲜明对比。远处的灯光与楼宇被笼罩在一层朦胧的雾气与虚焦中，仿佛一段尘封已久的陈旧记忆。",contentImage:U("/assets/film_06.jpg")},{id:"reel_07",reelNumber:6,code:[2,2,2,2],label:"Film 7",contentTitle:"Film 7",contentDesc:"斑驳的暗色背景上，一首充满克苏鲁与诗意感的随笔出现在画面中。内容提到“虫洞”、“女权”与“返祖现象”，署名为一个鲜红的感叹号。",contentImage:U("/assets/film_07.jpg")},{id:"reel_00",reelNumber:0,code:[4,4,4,4],label:"Reel 0",contentTitle:"Reel 0",contentDesc:"这是一堆被剪碎的不连续的胶卷，看起来是一个阴暗的酒吧废墟，其中几张展现出烟头烙印一般的白斑，看起来不同寻常。",contentImage:[U("/assets/film_00_3.jpg"),U("/assets/film_00_4.jpg"),U("/assets/film_00_5.jpg"),U("/assets/film_00_6.jpg"),U("/assets/film_00_7.jpg"),U("/assets/film_00_8.jpg"),U("/assets/film_00_9.jpg")]},{id:"reel_ghost",reelNumber:-1,code:[0,0,0,0],label:"Film 3",contentTitle:"Film 3",contentDesc:"晃动的画面，看起来是在老店，拍摄者把摄影机递给孟奇，孟奇拍下了拍摄者自己的样貌和手举名牌的图像。一人手持标有《行为艺术与心灵治愈》的书籍图片被拍下。",contentImage:U("/assets/film_03.jpg")},{id:"reel_08",reelNumber:-2,code:[2,0,0,0],label:"Film 8",contentTitle:"Film 8",contentDesc:"在昏暗而幽闭的空间里，一叠书脊上印着《Are bats rats？》的样书静静地堆放着。厚重的阴影吞噬了大部分光线，微弱的回扣让书脊上的字迹显得格外苍白而诡异，透出一种压抑的怀旧气息。",contentImage:U("/assets/film_08.jpg")},{id:"reel_09",reelNumber:-3,code:[1,1,1,1],label:"Film 9",contentTitle:"Film 9",contentDesc:"在昏黄而充满颗粒感的画面中，一群年轻人席地而坐，周围散落着酒瓶与杂物。光影在墙壁上投射出沉重而幽暗的阴影，模糊的面容被笼罩在一层忧郁的怀旧感中，仿佛一段被时间遗忘的私人记录。",contentImage:U("/assets/film_09.jpg")},{id:"reel_10",reelNumber:7,code:[2,2,2,1],label:"Film Fan",contentTitle:"阿文_20221231",contentDesc:"喝醉的阿文趴在吧台沉沉睡着，手边是杯喝了一半的完美曼哈顿，旁边的书页上写着「电影迷」by taylor soigir。",contentImage:U("/assets/film_10.jpg")},{id:"reel_11",reelNumber:8,code:[2,2,1,2],label:"Jam 12.18",contentTitle:"Jam 12.18",contentDesc:"吧台内的调酒师满怀期待地端起酒杯，面前的杯垫上写着配方：Jam 12.18。",contentImage:[U("/assets/film_11_1.jpg"),U("/assets/film_11_2.jpg")]}],Rp={recorder:U("/assets/recorder_music.mp3"),notebook:U("/assets/recorder_music.mp3"),film:U("/assets/film_music.mp3")},qh=Object.freeze(Object.defineProperty({__proto__:null,AUDIO_LOGS:Ip,BLOG_ENTRIES:Cp,FILM_ARCHIVE:Lp,INITIAL_ITEMS:Dp,MUSIC_TRACKS:Rp},Symbol.toStringTag,{value:"Module"})),Hp=[{id:"recorder",name:"Voice Recorder",icon:"📼",description:"Contains cassette tapes with recorded conversations."},{id:"notebook",name:"Blog Archive",icon:"💻",description:"Password-protected archive of historical logs."},{id:"film",name:"8mm Film Reels",icon:"🎞️",description:"40 reels total, marked with 4 different glass shapes for ordering. Each reel shows no more than 2 glass types."}],Bp=[{id:"log_auto",searchId:"AUTO_PLAY",title:"Ash_20201020",isAutoPlay:!0,locked:!1,content:`
Faint background music can be heard - crisp cymbals accompanied by delicate bass playing. Nearby, a glass full of liquor is pushed across the bar.
    
__Stranger 1__：Try this.
__Apple__：So this counts as a cocktail?
Stranger 1：This is a very classic approach - dropping a shot glass of spirits into beer. It's called a __Boiler Maker__, and we're using gin with pale ale beer, the flavors pair really well.

Sound of drinking.

Apple：It's actually really refreshing.
Stranger 1：Would I lie to you? So, tell me, I heard you wanted to talk to me about something.
Apple：Oh, yes. I was wondering if you'd be willing to hire some part-timers...
Stranger 1：You mean yourself?
Apple：Yes—well, not exactly, I just wanted to learn more first.
Stranger 1：Why curious?
Apple：Although I've only been a regular for two months, honestly, I really like the atmosphere here. You and the customers all have great chemistry, everyone's conversations are interesting... In short, this place looks new, but somehow it has the feeling of a century-old establishment.

After a bout of quiet talking, customers in the distance share a knowing laugh.

Stranger 1：Hey, what's going on there, watch your manners—anyway, this isn't actually a new bar. We've been running elsewhere for many years before moving here, and the regulars followed us.
Apple：I see. But if the atmosphere was that good, why go through the trouble of moving?
Stranger 1：Uh... various reasons.
Apple：And there's no door, hidden next to a bathroom in another bar... Sorry, I don't mean anything by it.
Stranger 1：It's fine, you'll learn about many things later.
Apple：So about what I asked you...
Stranger 1：To be honest, I hadn't planned to hire part-timers, but if you want to come—you can. However, if you want to work here, seriously learning about cocktails is essential. I don't want you coming here every day just to slack off without spending money!
Apple：Don't worry, I'll definitely study hard.`},{id:"log_awen",searchId:"Vin_20201020",title:"Vin_20201020",locked:!0,content:`Staggering footsteps approach from afar, and someone breathing heavily sits down in front of the recorder.

__Apple__：How did it go?
__Vin__：Buy me a drink.
Apple：What happened—I mean, did he agree?
Vin：Buy me a drink first!
Apple：Then I'll make you one myself... this one.
Vin：What, trying to start your shift today? I heard the bar's rule is you need to study for half a year before being allowed to make drinks—but now he's drunk because of me, so you'll have to do it.

Sound of glasses and ice clinking, then a glass is heavily placed in front of the recorder. Sound of sipping and tasting.

Apple：How is it?
Vin：Hmm... I shouldn't have rebelled.
Apple：What do you mean?
Vin：Let's just take it step by step, the proper way.
Apple：Bad?
Vin：Try it yourself.

Sound of sipping, then liquid being spat out.

Apple：Ugh—this is undrinkable. Well, I'll wait until I've practiced more before making you a drink.
Vin：Don't worry, I'll remember.
Apple：So he agreed?
Vin：__Ask him yourself tomorrow__.
Apple：By the way, do you know why the old bar closed?
Vin：Know? It's haunted, what other reason could there be.
Apple：No way, really?
Vin：Of course it's fake.
Apple：I thought so.
Vin：So curious... do you want to hear the truth?
Apple：Yes.
Vin：That's the reason.
Apple：What do you mean?
Vin：Figure it out yourself, otherwise why would we move to a place like this.`},{id:"log_ashan",searchId:"Ash_20201021",title:"Ash_20201021",locked:!0,content:`Very quiet, no background music can be heard. A heavy wooden box is placed on the table.

__Ash__：Here's the thing.
__Apple__：I can really use this?
Ash：Go ahead, you don't even need to buy film, there are dozens of rolls.

Sound of rummaging.

Apple：Sorry, but whose camera is this? I see some film has been marked, it must have already been shot.
Ash：Are you saying I'm not cultured enough to have such an elegant hobby?
Apple：No... I didn't mean that...
Ash：I really don't have this hobby. A long-time regular left it behind. He wanted to film daily records of the bar, I didn't agree. He tried to film secretly, and I confiscated the equipment after discovering it.
Apple：So why are you letting me film now?
Ash：Did I say you could film in the bar?
Apple：I thought...
Ash：Hey, I'm kidding. Film if you want, I don't care anymore.
Apple：What about these marked films, should I return them to...
Ash：Take them, take them all, I don't want to see them.
Apple：Then I'll make proper labels.
Ash：Whatever... Wait, you're going to film now?

Sound of operation.

Apple：Come on, teach me to make a drink.
Ash：So annoying... Fine, pick a recipe card from that box and hand it to me, whichever one you draw.
Apple：This one, let's go. Wait, let me mark the film first.
Ash：Why are you drawing __four champagne glasses__ on it? This drink doesn't use that glass.
Apple：I know, it's not for that... I have other plans.`},{id:"log_mengqi",searchId:"Monty_20201023",title:"Monty_20201023",locked:!0,content:`Quiet, soothing piano solo. A sudden sneeze temporarily interrupts other customers' conversations. Just as the talking resumes, another sneeze.

__Apple__：I thought we wouldn't see you for a while, they said you were sick.
__Monty__：Caught a cold, more alcohol needed. Get me my bottle of whisky.
Apple：With ice?
Monty：Just some hot water.

A bottle is placed on the bar, a thermos cap is opened. After some subtle friction and clinking, sipping sounds follow.

Apple：What kind of drinking method is this, whisky with hot water?
Monty：Just imagine the whisky as tea leaves, this is my calming bedtime tea.
Apple：Learned something new.
Monty：No, I could teach you about various types of __Martini__, but whisky with hot water—God, only two people in the world drink it this way. Don't try selling this to others, they won't find it tasty.
Apple：Two people? Who else besides you?
Monty：Someone you don't know, a remarkable person.
Apple：Oh? Also a customer here?
Monty：Sort of, disappeared long ago.

A moment of silence.

Monty：Get another glass, drink with me.
Apple：__Ash__ doesn't allow me to...
Monty：Who cares what he allows.

Another glass is placed on the bar, liquid poured into it.

Apple：Alright, let's toast to—
Monty：One less time with each time.
Apple：What does that mean?
Monty：—Every moment is worth celebrating, we don't always need a reason to toast.
Apple：One less time with each time, that's quite a saying.
Monty：That's what the friend who also likes drinking whisky this way said.
Apple：I think I've heard them mention this person, also an old customer.
Monty：No, he was my friend.
Apple：Tell me, what kind of person was he?
Monty：Back then we both worked for a theater company, he made documentaries, I did music. After work we'd find a bar to continue talking about films. He especially enjoyed talking from Abbas to Kurosawa, all his favorites. At first we went everywhere, then we discovered this bar. He immediately recognized __Lee Chang-dong__'s signature on the poster on the wall, and after that we never went anywhere else.
Apple：The poster?
Monty：Right, it's hanging behind you right now.
Apple：So he's a documentary director?
Monty：Hard to say, just like I'm not really a musician. You can only say, I love music and can make some music, while he loved cinema, loved it his whole life. Even in his forties, he was still preparing for his debut film.
Apple：I heard Ash say he even wanted to make a documentary about the bar, but Ash didn't allow it.
Monty：He wanted to use this camera to record his life, that's all. It just happened that the bar's cyclical daily routine perfectly aligned with his life.
Apple：Now Ash changed his mind, so the camera is in my hands.
Monty：Go use it, he's vanished from the world anyway.

Sound of sipping.

Apple：You were his friend, don't you know where he went?
Monty：No idea, don't know if he's alive or dead, all previous contact methods are invalid.
Apple：Well... I found some film reels he shot.
Monty：Hey, when these moments were first recorded on film I thought they were ordinary, but in a flash they've become historical relics.
Apple：I'm thinking, maybe they'll be useful later...
Monty：Use them, they're all yours now. Make me another cocktail.
Apple：I'll call Ash over.
Monty：No need, you do it.
Apple：Which one?
Monty：The one that made __Vin__ throw up.
Apple：But I just messed it up once, making it again today won't improve it.
Monty：I'm here, trust me. Give me the camera, I'll film it for you. Use this reel? The one with __three champagne glasses and an old fashioned glass__...
Apple：Right, use that one.`},{id:"log_mengqi_2",searchId:"Monty_20201030",title:"Monty_20201030",locked:!0,content:`Accompanied by customers at the far end of the bar repeatedly exclaiming, a pile of ice is dumped into the sink.

__Apple__：Incredible, such a small adjustment has such a huge impact on the drink's presentation. Even __Vin__ didn't give me a hard time tonight, thanks to you.
__Monty__：You're welcome.
Apple：How did you discover it? Why wouldn't __Ash__ admit it when I asked him?
Monty：He's not refusing to admit it, he's just not aware. I've watched him make this drink for many years. Every time he pours gin he reaches surface tension, but when pouring whisky he's always a millimeter short. Maybe it's purely a difference in feel, but when making spirit-forward cocktails, the slightest difference can hugely impact flavor.
Apple：I've learned.

Sounds of searching, then a book is placed on the bar.

Apple：I found this, thought you might be interested.
Monty：This book... where did you find it?
Apple：In those boxes in the warehouse, with lots of stuff moved from the old bar. Anyway... I thought you might be interested.
Monty：I am indeed interested... did you open it?
Apple：Not yet.
Monty：What do you think this book is about?
Apple：Looks mysterious.
Monty：That's just the cover, look inside.

Sound of pages turning.

Apple：What does this mean? Is it a novel? Why is the content completely different from the cover?
Monty：I don't know how you found it, and you're probably not interested in reading it carefully—but there's an interesting story behind this book I can share with you.
Apple：What story?
Monty：Make me another drink first.
Apple：Same one?
Monty：No, a classic one, made with a shaker.
Apple：__White Lady__? __Side Car__? __Whisky Sour__?
Monty：The whisky one, make the version with sherry.
Apple：Got it, but I haven't made it before, can only follow Ash's recipe.
Monty：No problem, I'm not Vin, don't have that many requirements.
Apple：Tell me the story while I am making it, what's behind this book?

Accompanied by Monty's narration, sounds of ice hitting metal occasionally come through.

Monty：When we first discovered this bar, the missing friend had just finished his first novel.
Apple：Didn't he want to make films? How did he start writing novels?
Monty：Who knows? Maybe because it doesn't cost anything.
Apple：A full-length novel then.
Monty：Rather than a novel, it's more like a collection of stream-of-consciousness writing exercises, flowing thoughts drifting around, you know? Nobody could read through it. I advised him to revise, he refused, even thought the publishers who rejected him knew nothing.
Apple：What happened next?

Sound of sipping liquid.

Apple：How does it taste?
Monty：Not bad. Anyway, after several failed submission attempts, he had a wild idea. He bought over a dozen different books from bookstores, tore off their covers, printed his novel, bound it, then ran to bookstores to secretly hide them on shelves.
Apple：What?
Monty：He even went to nearby universities, deliberately leaving books on cafeteria seats.
Apple：Did he want people to read his work that badly? But scattering books around, there's no way to get feedback, right?
Monty：That's what I thought at first. Later when he disappeared, I had the wild idea of searching through the book for clues—guess what? I still couldn't read it, but I discovered he left a contact email at the end.

Sound of pages turning.

Apple：Did you send a message?
Monty：It bounced back, the email had been cancelled by then. But at least it proved he hoped to be seen and get replies.
Apple：Really a remarkable person. So after this he started thinking about making films?
Monty：Before, after, can't say which came first. He was always like a headless chicken, ended up accomplishing nothing and just lost himself.
__Stranger 1__：__What a remarkable person, he's just crazy.__

Recording unexpectedly interrupted.`},{id:"log_awen_2",searchId:"Vin_20201030",title:"Vin_20201030",locked:!0,content:`Sound of a broom sweeping broken glass, vague cursing in the background. Nearby, heavy breathing.

__Apple__：Did the bleeding stop? Want me to get you another towel?
__Vin__：No need, just a scrape. If I hadn't had a few drinks today, how could he have hurt me?
Apple：Why did you have to? Haven't you known each other for years? Why say things he doesn't want to hear?
Vin：I've been holding it in for too long. Tired of him acting all day, like he's the only one in the world who cares.
Apple：So you also knew the missing person?
Vin：I was so annoyed by him! Talking all day long, as if everything in the world relates to making films. And then what? Couldn't even write a script for years, getting drunk before noon every day. If that's not decadence, what is?
Apple：I heard he wrote a novel...
Vin：Nobody reads it, what's the point? Whatever, just make me a drink first.

Ice and liquid clinking against metal, being shaken and poured. Sound of sipping.

Vin：Why does it smell oxidized? Like rust!
Apple：I don't know, I followed the recipe... Hey, let me make you a new one, okay?
Vin：Will remaking it be better?
Apple：I don't know...
Vin：What day are you off?
Apple：Every Tuesday...
Vin：So that's __4 days from now__, when __Ash__ works himself, right? I'll come back then for the correct taste. This one's on you.
Apple：—Wait, you mentioned the old bar earlier, where exactly is it?
Vin：Just __two streets south, there's a bookstore that's been open for years, next to the bookstore is a small alley__—wait, where's my key?
Apple：Maybe it fell under the bar when you two were fighting. I'll look for it when I clean the fridge in a few days.
Vin：I really hate these artsy youth, you know? Especially when they're clearly not young anymore.
Apple：I understand.
Vin：You understand nothing! I think you got along with him best.
Apple...
Vin：Don't say I didn't warn you. When you find the key, don't let curiosity drive you to explore the old bar and bring back something evil.
Apple：No... really? Have you been inside?
Vin：Of course!
Apple：What did you see?
Vin：None of your business. Just think about it, the old bar's been closed for almost a year, still can't rent it out. There's gotta be some reason, right?`},{id:"log_ling",searchId:"Lynn_20201103",title:"Lynn_20201103",locked:!0,content:`Noisy chatter mixed with clinking glasses, footsteps approaching. Conversation intermittent.

__Lynn__：What are you drinking?
__Apple__：What?
Lynn：I'm asking what drink you have? I see you're drinking quite seriously.
Apple：Oh, this is called __Francis Albert__.
Lynn：Why come to the bar on your day off?
Apple：What?
Lynn：I heard them say you usually work at this bar?
Apple：Oh, right, yes.
Lynn：What should I call you?
Apple：Everyone calls me Apple.
Lynn：Because you like eating apples?
Apple：My screen name was originally "doesn't like eating apples" because I naturally don't like eating apples, but over time it got shortened to Apple...
Lynn：You look young, still in school?
Apple：Yes, studying photography.
Lynn：I thought so, seeing you with a camera and recorder.

Microphone makes a scraping sound, as if the recorder was picked up and put down.

Apple：Right, I went to shoot some things.
Lynn：What did you shoot?
Apple：Can I tell you something? Don’t tell anyone else.
Lynn：I just got here, don't know anyone.
Apple：This bar moved locations. The old bar is nearby, and __I happened to have the key__, so on my day off, I went in to look around.
Lynn：How was it, fun?
Apple：I'll show you next time. It looks like a very old place, lots of traces of time...
Lynn：Sounds interesting, because I quite like this new place too. Hidden next to a bathroom in another bar, who thought of that?
Apple：I heard others say it was the owner's careful arrangement...
Lynn：Why hesitate to say more?
Apple：Because the rumor is absurd, saying the old bar is haunted.
Lynn：So that's why you went today. Well, did you see ghosts?
Apple：It was a bit scary, but no ghosts.
Lynn：Don't bring anything unclean here, I still want to come drink.
Apple：They say that's why this place has no door. The owner calculated that __this way evil things can't enter__.
Lynn：Forget about ghosts for now. Want to try my drink?
Apple：I...
Lynn：Hey, what am I thinking? You're a bartender yourself, you must know everything.
Apple：No, I just started learning.
Lynn：Then you must try this one.

Several seconds of pause.

Lynn：Is it good?
Apple：So what's it called?
Lynn：__Little Italy__.
Apple：Delicious.
Lynn：Next time I come, you have to make it for me!`},{id:"log_ling_2",searchId:"Lynn_20220215",title:"Lynn_20220215",locked:!0,content:`Quiet space, background music barely audible. A mechanical clock ticks crisply. Not far away, a spring door suddenly creaks.

__Lynn__：Excuse me, are you open?
__Apple__：Yes, yes. Sorry, I fell asleep.
Lynn：It's okay. Seems quite empty today.
Apple：This day every year is usually quiet.
Lynn：Then I came at the right time.
Apple：Please sit. What would you like to drink?
Lynn：There's a promised drink, remember?
Apple：Promised... oh, I remember now! You're... sorry, I forgot.
Lynn：Not your fault. Last time we talked all night, but I don't think I introduced myself.
Apple：It really has been a while... Never mind, you can call me Apple—
Lynn：I remember. Haha, by the way, my name is Lynn.
Apple：Just one character? Lynn.
Lynn：Right, one character.
Apple：Lynn who loves __Little Italy__.
Lynn：Looks like you finally remembered.

Sound of ice clinking with glass, liquid pouring.

Apple：Sorry, I don't remember the exact taste anymore.
Lynn：It's okay, I don't remember either, but this one tastes great.
Apple：Thank you.
Lynn：Really, not a single person here. Even __Vin__ and __Monty__ aren't here.
Apple：You know Vin and Monty?
Lynn：Yes... last time I came, they introduced you to me.
Apple：The two of them, together? Strange, they usually don't drink together.
Lynn：Perhaps it was just the whiskey at work.
Apple：I feel like most times drinking makes their conflict worse—anyway, Monty hasn't been here for months, and Vin... my boss won't let him come to this bar anymore.
Lynn：Won't let him come? Isn't he an old customer? Known for years. Did something serious happen?
Apple：Serious but not serious. Hard to explain in a sentence or two. Remember last time when I mentioned the old bar?
Lynn：Of course! The old bar that had to relocate here because of ghosts!
Apple：Shh...
Lynn：Why worry, there are no other customers—since there's no business tonight, why don't we close early and go explore that place?
Apple：Can't go anymore.
Lynn：I remember you said it's nearby—has it been rented for other purposes?
Apple：That place has been demolished, nothing left.
Lynn：So sudden!
Apple：Not sudden, you just haven't been here in too long. It's been demolished for __more than half a year__.
Lynn：By the way, didn't you bring your camera there once? Can I see what you filmed?
Apple：I can... are you sure you want to see it?
Lynn：Might as well, I'm bored.

Sound of a bag dropping on the bar.

Apple：It's all here, you can look at anything.
Lynn：If there's anything I can't see, tell me in advance.
Apple：Nothing you can't see, it's all just daily bar stuff.
Lynn：Just kidding. Finished this drink, make me another first.
Apple：What would you like?
Lynn：Whatever you make, I'll drink.

Sound of searching through coasters.

Apple：How about this one?
Lynn：What's this?
Apple：We write recipes directly on coasters.
Lynn：So this drink is called this? __Jam 10.30__, why that name?
Apple：It means improvised on a certain month and day. Felt it was good, so recorded the recipe.
Lynn：First time seeing this kind of naming, so casual. Okay, I'll have it.

Ice sliding through glass, bar spoon stirring. Film canisters being dumped on the bar.

Lynn：Why are there four glasses drawn on each film canister?
Apple：It's my numbering system...
Lynn：Marking order? Base four?
Apple：Not base four.
Lynn：I found it! Seems like each canister has at most two types of glasses, and none has two pairs. Always one single, three of the same. Or all the same. So the most important thing is the position of that single glass, am I right?
Apple：Actually the order doesn't matter, I just need to...

Sound of film canisters being rearranged.

Apple：Try it.
Lynn：Oh! I know their pattern. Should be arranged like this, left to right, or right to left, right? But which one should I watch first?
Apple：Fifth from the right.
Lynn：Let me see... this is quite scary. Weren't you afraid going alone?
Apple：Don't you want to try the drink first?
Lynn：Wait... what's this?
Apple：Hm?
Lynn：Look at this one, doesn't it look like someone's crouching in this corner?
Apple：There can't be anyone, it's probably my own shadow.
Lynn：... look, even though the camera panned away, it's still here. Here, it seems like it... moved forward a bit?

Recording unexpectedly interrupted.`},{id:"log_awen_20211020",searchId:"Vin_20211020",title:"Vin_20211020",locked:!0,content:`The bar bustles cheerfully with a relaxed atmosphere. As the door opens, conversation abruptly stops.
Foot steps gradually approach the bar.

__Vin__：Keep talking, go on.
__Apple__：Hey, __Ash__ said you can't come, forgot?
Vin：He's not here anyway. What, my money isn't money?
Apple：Just warning you, he'll be back in a few days.
Vin：Scaring me? I'll come even when he's here.
Apple：Fine, what will you have?
Vin：Doesn't matter what, it's your __one-year work anniversary__, right? I'm giving you a whisky.
Apple：I think you just want to keep a bottle here to drink yourself?
Vin：Not a matter of principle. Enough with the endless talk, hurry up and make me a drink with it.

Ice clinks with glass, liquid pours.

Vin：Oh, making this one.
Apple：Had it before?
Vin：Isn't this the one that person drinks?
Apple：Who?
Vin：Playing dumb? Fine.
Apple：This is a modern classic, lots of people drink it.

Liquid enters glass, sipping sound.

Vin：Not good enough, need more practice. If you only make it to this level, not enough to impress a girl.

Sound of water washing tools.

Vin：What, unhappy now? Can't take two comments?
Apple：No, you saying it directly is better than others... forget it, never mind.
Vin：What's wrong?
Apple：Just feels weird.
Vin：Weird? It's all because you took my key to film randomly at the old bar, brought back unclean things, and harmed __Monty__.
Apple：I didn't...
Vin：Come on, you can lie to others, don't lie to yourself.
Apple：...but I didn't tell anyone, how does everyone know?
Vin：Don't worry about that. By the way, there's something else.
Apple：What?
Vin：The old bar building is being demolished.
Apple：What? So sudden?
Vin：Haven't been there in a while, right? It was planned long ago. They just started tearing it down, half demolished. If you want to film, __go tomorrow__, any later and it'll be gone.
Apple：Actually demolishing it...
Vin：Who can say about these things.
Apple：Does Ash know?
Vin：Don't worry, he doesn't care. Hey, where's Monty? He hasn't been here in a while, right?
Apple：You know about that too? Last time was the __anniversary celebration__? We even bought a cake that day...
Vin：I guessed. Know why? Because the last time that missing guy appeared in the bar was also the __anniversary__.
Apple：You're saying he might also...
Vin：You mean disappeared? No. Look—

Water sound stops, subtle phone movement on the bar.

Apple：Where's this? Who took the photo?
Vin：A bartender from another bar, asking if it's my friend.
Apple：Oh... no wonder he asked me to make __XYZ__ that day.
Vin：This guy, quite ceremonial. So you understand now? You miss him, but he switched bars, won't come to yours anymore. Even blocked me. Who's the most loyal regular customer anyway.`},{id:"log_mengqi_20210425",searchId:"Monty_20210425",title:"Monty_20210425",locked:!0,content:`Microphone makes slight scraping sounds, as if in a pocket, moving with footsteps.
Not far away, a door closes, noise instantly quiets.

__Monty__: Want to smoke one with me?
__Apple__：No... can't. Haha, but I can light it for you.

Lighter wheel spins.

Monty：No, you're burning my hair—
Apple：You have plenty of hair, burning a bit won't show.
Monty：Hey, how much did you drink tonight?
Apple：Not much... see, if I don't drink, __Ash__ has to, but Ash is already drunk, so only I can drink, right? Haha.
Monty：Okay, fine.
Apple：The one you asked me to make, yes, delicious.
Monty：Of course, I only had one sip, you drank the rest.
Apple：Why is it called that name?
Monty：Look it up yourself.
Apple：I thought you'd know.
Monty：Actually most cocktail names are randomly chosen, just like naming a cat you met on the street.
Apple：I know that, sometimes we randomly make something, and customers rush to name it. You should see these people...
Monty：For example my favorite is called __Goooooose__. Asked Ash why that name, he couldn't explain either.
Apple：What drink is that? Never heard of it.
Monty：Seems your research of his coaster recipes isn't thorough. By the way, lots of new faces at the bar today, and they all know you well. Looks like Ash is taking a back seat.
Apple：Why are you getting shy? I thought you... you guys were the real owners of this bar.
Monty：Just feel... everything's changed.
Apple：Earlier before Ash got drunk he told me, customers come in waves. The old wave always tires, or their lifestyles change and they gradually disappear, but there's always a new wave, those young people who find everything fresh.
Monty：Let's not talk about this. I called you out here for something important.
Apple：Can't you say it tomorrow? I'm this drunk, can't remember anything.
Monty：Ask __Vin__ for the key, go to the old bar again. On the wall facing the blinds there's a wall lamp. An air plant hangs dead on the lamp rod. Lift it, there should be a poem written on the wall in very small letters.
Apple：Who wrote it? That missing person?
Monty：I don't know. When I discovered it, it was already there. For a while, this bar was quite literary, even organized writing groups and such. Anyway, maybe you can figure out who wrote it.
Apple：I'm not going. Honestly, I'm not interested in finding out where that missing person went anymore.
Monty：What about your documentary?
Apple：Well, we'll see... I'm quite happy living like this every day. Really, I don't know why at the beginning I had to pretend to be insightful, pretend to maintain a detached stance. Now I think that's quite pretentious.
Monty：Are you serious?
Apple：I'm drunk, already forgot what I just said... oh, you mean Vin, right? Why don't you just ask him for the key yourself? You guys have known each other so long, how did it get to this point.

Brief pause.

Monty：Okay. Let's not talk about this.`},{id:"log_ashan_20220204",searchId:"Ash_20220204",title:"Ash_20220204",locked:!0,content:`In the background, noisy electronic music gradually fades, slow jazz piano rises. Distant customers voice doubts.

__Apple__：If they hadn't brought shochu, you'd probably never remember this recipe.
__Ash__：There are many good recipes. If one or two are forever forgotten, so what? I always say, isn't there alcohol in cocktails? If there's alcohol, it tastes good. Deny this and you're not a qualified drinker!
Apple：What kind of nonsense is that?
Ash：Hahaha, don't mind me. I just want to tell you, enjoy the alcohol, enjoy the changes. Every drink tastes like it does for a whole chain of reasons. Feel these differences, otherwise what's the point?
Apple：I'm curious, now you spend less and less time in the bar. Do you remember how you felt those first years when you opened? Compared to now?
Ash：Honestly, every time customers change, I renew myself too. If I didn't, I'd probably be lost like __Old Mo__.
Apple：Speaking of which, I went to the old bar again recently.
Ash：Wasn't it all demolished?
Apple：I thought you didn't even know about that.
Ash：Did you go before it was torn down? You stole __Vin__'s key again?
Apple：Asked for it properly. Anyway I saw a poem on the wall, signed by...

Sound of pencil on paper.

Apple：Do you remember who wrote it on the wall?
Ash：How would I remember—besides, you think, could this be someone's name?
Apple：What if it's his nickname?
Ash：Could this be someone's nickname?
Apple：So it might just be a pen name... By the way, someone recently mentioned the old bar used to do writing groups? Was everyone writing novels?
Ash：So many years ago, someone still remembers this. Thinking back, we really had passion then, had to get involved in everything.
Apple：Can I see these things?
Ash：We printed some manuscripts then. A customer even drew a human skeleton as the cover... Who knows if we brought it when we moved. If it's in the warehouse it's there, if not it's gone.

Brief silence.

Ash：I suddenly remembered I once made a drink, could never think of a name for it. So when customers ordered, they'd habitually stare and nod at me, and I'd understand.
Apple：Really?
Ash：Anyway someone later copied down the recipe, they used __a punctuation mark__ as the name.
Apple：The person who copied the recipe, do you remember who?
Ash：Too long ago, don't remember. But how to make this drink, maybe I can recall.`},{id:"log_laochen_20221105",searchId:"Old Chen_20221105",title:"Old Chen_20221105",locked:!0,content:`Bustling noise, several hoarse voices together singing birthday song.

__Old Chen__：Excuse me, I'd like another drink.
__Apple__：What?
Old Chen：I want to order.
Apple：Sure, what would you like?
Old Chen：Haven't decided.
Apple：Then think about it—

Several bodies bump into the bar, clinking toasts approach.

Old Chen：This place is so lively...
Apple：Oh, sorry, a regular's birthday, all university students, so a bit unruly. You said you want what?
Old Chen：It's okay, I need more time. If I really can't decide... anyway I'll __come again tomorrow__.
Apple：Thank you for your patronage.
Old Chen：Don't mention it, it's a rare opportunity... By the way, I heard this bar has a previous location, it wasn't in this place before, right?
Apple：That's right. The old bar is nearby, was demolished last year. We've been here quite a while.
Old Chen：Then that matches. I thought so, this painting looks very familiar, it used to hang above the liquor cabinet at the old bar.
Apple：I wouldn't know. I only came after this place opened.
Old Chen：Seems I remember correctly. Before, someone else made the drinks.
Apple：My boss, __Ash__.
Old Chen：Right! Called Ash. Before I went abroad I often went to drink his cocktails. I knew __Old Mo__, __Zixun__, __Song Yang__ and them.
Apple：I haven't seen any of those people you mentioned.
Old Chen：Ah, seems they're like me, gradually scattered. I thought I'd see some familiar faces this time.
Apple：Do you know __Monty__?
Old Chen：The one who makes music, right?
Apple：Right. After we moved he came here a few times, but doesn't come anymore either.
Old Chen：That's too bad. I brought this, wanted to catch up with everyone—

Sound of zipper opening, glass moving.

Apple：This is... oh, I know this! Isn't this the small magazine they made before?
Old Chen：You've actually seen this, I thought you wouldn't know about it.
Apple：I only saw photos. Later searched the warehouse forever, couldn't find a single copy.
Old Chen：Unfortunately mine has fallen apart, some pages are lost too.

Pages turning rapidly.

Apple：... This is so Old Mo! Heard from someone, he struggled forever and couldn't write a word, finally just threw out a random setting and keyboard-smashed to finish it.
Old Chen：Did Ash say that?
Apple：Wouldn't be him, he doesn't remember anything from before.
Old Chen：Seems someone else in the bar remembers those days.
Apple：Speaking of which, do you remember someone whose signature is an exclamation mark?
Old Chen：Let me look... there should be a piece by him in this booklet... might be lost.
Apple：You know this person?
Old Chen：Not familiar, very unfamiliar, maybe only met once. They called him... __Dabai__ or something, never saw him again after. He seemed familiar with an even earlier group, I basically don't know them.
Apple：There's an even earlier group.
Old Chen：Right, this bar's history is longer than you think, or rather, regular turnover is faster than you think—of course, before pushing through the door today I didn't expect to not recognize a single person.
Apple：Really unexpected.
Old Chen：Seems Old Mo's idea was right. Though he said he wanted to make a documentary about the bar, he was really recording that group of people. After ten years, the bar might still exist, but people will definitely have scattered.
Apple：Wait a moment.

A backpack being dragged, placed on the bar.

Old Chen：This is...
Apple：Old Mo filmed some material, left all the reels.
Old Chen：This this... but I remember Ash didn't let him film?
Apple：Before the boss stopped him, he filmed some things.
Old Chen：This... can we watch now? Which should I watch first?
Apple：I don't know the order either, just pick one.
Old Chen：These are all marked? Then I'll watch... this one with __four martini glasses__. Oh, can you make me a martini?
Apple：I'll make you another one instead. Leave it to me.

Ice clinks with glass.

Old Chen：... Look! Look at this!
Apple：These people... oh right, this is you.
Old Chen：That's Song Yang, __Ah Zhao__, Zixun. This person is... what's his name?
Apple：I see you. That's you, right? So young.
Old Chen：This must be __seven or eight years ago__... and this one, look, this is Old Mo and Zixun.
Apple：—wait, do you know her?
Old Chen：Who? Let me see... don't know her, but not sure, too blurry.

Brief silence.

Old Chen：What's wrong?
Apple：... Nothing, I'll ask her myself.
Old Chen：What's going on? Tell me.
Apple：I knew it, some people didn't tell the truth.
Old Chen：About what?
Apple：Talk later.

Playful noise comes again, empty glasses placed on the bar one after another.`},{id:"log_laochen_20221106",searchId:"Old Chen_20221106",title:"Old Chen_20221106",locked:!0,content:`Quiet space, background music so slow it's sleep-inducing.
Sound of door pushing open.

__Old Chen__：Hello!
__Apple__：Oh, you came.
Old Chen：I brought you some food... wontons and pig trotters, but yesterday forgot to ask if you'd be off today.
Apple：No, I'm basically always here.
Old Chen：Where's __Ash__? Doesn't come daily now?
Apple：He comes, but leaves early.
Old Chen：It's only... not even eleven.
Apple：Can't help it, if he stays up late he can't sleep. Doesn't matter, when he comes he just lies on that single sofa and sleeps anyway.

Sofa creaks, someone sits on it.

Old Chen：I know this sofa, rescued from the old bar right? Still quite comfortable.
Apple：Comfortable is comfortable, whoever sits on it wants to sleep, but it looks like it's falling apart.
Old Chen：It was like this when I first saw it.
Apple：Okay... what to drink?
Old Chen：Have sherry?
Apple：Yes.
Old Chen：Let me teach you a recipe.
Apple：Go ahead.
Old Chen：I'll write it down for you.

Sound of pencil writing.

Apple：Oh, this combination, Collins glass right?
Old Chen：Right.
Apple：Where'd you get this recipe?
Old Chen：A foreigner made it recently, now it's a modern classic.
Apple：Modern classic... what's it called?
Old Chen：__Second Serve__.
Apple：Don't have fino, can I use this? Manzanilla sherry.
Old Chen：Even better.

Bottle clinks on bar.

Old Chen：Yesterday didn't finish talking. You said you'd ask her in person, did the girl come?
Apple：No, we'll see. Can't figure out what she means.
Old Chen：May I ask, is there something between you two?
Apple：... This... how do you define something?
Old Chen：You know in your heart if there's something.
Apple：Then... how do I tell you?
Old Chen：I don't remember the person, but she looks pretty in the photo. How to say, someone this pretty has the right to have secrets, understand?
Apple：I find you talk very much like a father today.
Old Chen：Hey now, don't take offense. Us older folks are more direct—it's okay, if you don't want to say, you don't have to tell me, haha.
Apple：I really don't know how to say it.`},{id:"log_ling_20221109",searchId:"Lynn_20221109",title:"Lynn_20221109",locked:!0,content:`Ice clinking in shaker, liquid poured into glass.

__Apple__：Try it, and look at this while you're at it.

Sound of sipping.

__Lynn__：Pretty good, but what do you want me to see?
Apple：The film I just mentioned.
Lynn：And then?
Apple：Look at this person, doesn't it look like you?

Brief pause.

Lynn：A bit, but the hairstyle doesn't match.
Apple：Just a bit?
Lynn：What's wrong? What exactly are you suspicious of?
Apple：I'm not suspicious of anything, just asking.
Lynn：Make me the next drink.
Apple：Okay, making it.
Lynn：I want to drink... can I use my phone?
Apple：Go ahead.

Brief pause.

Lynn：Let me try this... you found an Easter egg! This is a random recipe tool, for bartenders who don't know what to make—
Apple：Wait, how do you know about this thing?
Lynn：Please feel the luck!—From Apple King who doesn't like eating apples.
Apple：How did you find this?
Lynn：Let me random it... amaretto, averna, cynar, maraschino, how about this?
Apple：All liqueurs, can it be good?
Lynn：Then this one? Gin, dandelion bitters, peated whisky, plus Montenegro. This sounds good. Make me this.
Apple：Proportions?
Lynn：You decide.
Apple：Don't blame me if it's not good.
Lynn：As long as you put alcohol in it, it won't taste bad.

Brief silence.

Lynn：So all drinks this tool generates are called the same name, dram something.
Apple：I don't know, never thought about it.
Lynn：You still look unhappy.
Apple：Because you clearly knew I write a blog and never told me.
Lynn：I knew it was your little secret, afraid telling you would make you uncomfortable. Honestly, I found this bar because I found this blog, found it interesting, and followed your clues to find this place.
Apple：Nonsense, I never mentioned the bar's location in the blog.
Lynn：You did, but you've written so many about drinks, you forgot. Didn't you say under the search box yourself, there must be 9,000 cocktail recipes if not 10,000, right? Forgetting some recipes is very normal. By the way, I really like your shaker button design, just the background color is a bit ugly, haha.
Apple：... I never got around to removing that background color, didn't think a second person would see this thing. How did you figure it out?
Lynn：Don't worry about that. Not only did I play at yours, I secretly played at other bars too, then randomly made up names and told them this was some modern classic recipe I drank that was really good. Forcing bartenders to push their limits.
Apple：You're a demon.
Lynn：I'll take that as a compliment.

Brief silence, piano fills the quiet air, mingling with ice and spirits.

Apple：Try it.
Lynn：You know what, this is really delicious.
Apple：Is it?
Lynn：Delicious, so delicious it should have its own name.
Apple：What should it be called?
Lynn：What's this song playing?
Apple：Let me check... it's called __My Wild Irish Rose__.
Lynn：Sounds like a good name, what do you think? For a drink you made for me.
Apple：... Then let's call it that.
Lynn：So, can you forgive me now and promise not to be passive-aggressive anymore?
Apple：I wasn't being...`},{id:"log_awen_3",searchId:"Vin_20221231",title:"Vin_20221231",locked:!0,content:`Quiet bar, background music is warm jazz piano. Sound of door opening.

__Vin__：Yo, so quiet, is this the prelude to closing down?
__Apple__：Why are you here?
Vin：Wanted to celebrate New Year's Eve, who knew there's not a single person. What a downer! Can't stay in this city anymore.
Apple：Then move? Besides, look at the time, it's hours before New Year's. Young people are still eating elsewhere. Who's like you, old man, has a couple drinks and has to go home to sleep.
Vin：Whoever doesn't stay until you close today is a punk.
Apple：No need Brother Vin, I didn't provoke you.
Vin：Alright, enough nonsense, hurry up and get me a drink. What interesting things have you made recently? Make one to drink.
Apple：Already making it for you.
Vin：What you making?
Apple：You'll know when you taste it.

Ice and spirits clinking.

Apple：Well, how does it taste?
Vin：Whose recipe is this, what's it called?
Apple：Don't ask that yet, how does it taste?
Vin：Did __Monty__ come recently?
Apple：No, he's never coming again.
Vin：I'm confused, because this drink tastes like something he'd like.
Apple：Hey, this drink has nothing to do with him... someone else inspired me.
Vin：Someone else, new girl?
Apple：Don't girl girl all the time, can't you see? This bar isn't like before.
Vin：So what, we talked like this at bars before.
Apple：Smell's too strong, can't take it.
Vin：Really boring.

Brief silence.

Vin：Tell me, you're not still messing around with that person, are you?
Apple：Who?
Vin：You know who I mean.
Apple：What do you mean messing around? She comes to drink occasionally.
Vin：Fine fine, you love to act, I won't stop you, but I remember she has a boyfriend.
Apple：What do you mean?
Vin：Yeah, her first time came was brought by her boyfriend.
Apple：You mean my first week working here?
Vin：Way earlier, several years ago, when you were still pulling girls' hair in class.
Apple：What do you mean, she went to the old bar?
Vin：You didn't know?
Apple：But she said she came to this bar because... anyway first time meeting me was her first time here.
Vin：Then either I recognized the wrong person, or you got fooled.
Apple：Must be your old eyes got it wrong.
Vin：It's okay, even if young people get fooled they won't lose much haha.

Sound of washing bartending tools.

Apple：Regardless of whether you and I are talking about the same person, did you know the so-called "boyfriend" who brought her to the old bar?
Vin：Think his name was __Liu Fei__ or __Li Fei__, always came with another guy called __Dabai__. But after I became a regular, these people never appeared again.
Apple：Dabai? That name sounds familiar, who mentioned it...
Vin：You find it familiar? Impossible, I heard that guy Fei died years ago from illness.
Apple：Died...

Brief silence.

Apple：Oh right, have you seen this thing?

Book placed on bar, someone starts flipping through.

Vin：Isn't this the underground magazine they printed for fun? Where did you dig this up?
Apple：Someone named __Old Chen__ brought it—
Vin：Damn, dirty thing!

Book thrown on bar.

Apple：What's wrong, you know him?
Vin：You have the nerve to say I'm greasy and disgusting? This guy isn't way more disgusting than me!
Apple：You two... not much difference. Anyway, fine. That day he mentioned this Dabai, unfortunately the magazine fell apart, couldn't find what he wrote.
Vin：Don't know, don't care.
Apple：—Recently someone named __Echo__ also came, said he also went to the old bar...
Vin：Enough enough, stop with these old calendars, hurry make me a drink.
Apple：Well then, Old Chen shared a recipe, I'll make it for you—
Vin：Stop stop stop, don't disgust me, okay? Make me a Perfect Manhattan.
Apple：What's Perfect Manhattan?
Vin：__Perfect Manhattan__.
Apple：Don't know it.
Vin：Aren't you a college student? Don't even know this.
Apple：Too lazy to deal with you.

Ice clinking.

Apple：Done, drink up.
Vin：Here here, let me taste... mm, this drink should be a variant, called Imperfect Manhattan, not even close.
Apple：You have a drink so drink it.
Vin：Hahaha, love seeing you get mad. Oh, I just thought of something.
Apple：What?
Vin：Take that painting down.
Apple：Why?
Vin：You take it down, then I'll tell you.
Apple：What for, it's all dusty.

Brief pause.

Apple：Give me a hand.
Vin：Like this, flip it over, put it on the bar... right, that's it.
Apple：What next? What for?

Sound of metal parts rubbing.

Apple：Why you taking it apart?
Vin：I remember they used to hide something in this... right, this is it.
Apple：What's this?
Vin：Probably some drunken bet, not important, but look at its back.
Apple：This is... what is this?
Vin：Looks like my brain isn't ruined by drinking. I remember someone wrote a novel with Dabai as the protagonist, this is it.`},{id:"xiaoshu_20221224",searchId:"Echo_20221224",title:"Echo_20221224",locked:!0,content:`Two sounds of door opening, footsteps one after another.

__Echo__：Do you smoke?
__Apple__：No, I'll just keep you company.
Echo：Thanks, it's freezing out here.

Lighter wheel friction.

Apple：We were just mid-conversation, speaking of which, last time I kept someone company smoking here was __Monty__.
Echo：That's also a kind of fate, am I using that word too much today?
Apple：Not at all, really fate. So many bars in this city, you just happened to find this one. Then I showed __Old Mo__'s film, you picked one at random and found yourself in it.
Echo：Yeah, I quit drinking years ago. Today I just wanted to find a place to sit, have a soda water, who knew I'd walk into a place I used to go to every day again—though it moved.
Apple：Oh, you already quit drinking. Wish I'd known, wouldn't have recommended that drink.
Echo：That drink was delicious, worth breaking the rule for. Called... __second serve__, right?
Apple：__Second Serve__.
Echo：I'll remember, even though I don't know any __Old Chen__, haha.
Apple：And you also helped me solve a mystery.
Echo：Did I solve it? Not really, can only say... one interpretation.
Apple：Actually when we first checked these films we felt something was off, but never...
Echo：But never put together those scratched film strips to watch, right?
Apple：We can actually see a figure.
Echo：Depends whether you believe these things.
Apple：I don't know.
Echo：Because I believe it myself. And people who don't believe will think there's no figure, it's all our wishful imagination, hahaha.
Apple：You mean... you believe in ghosts and spirits?

Door opening sound. Footsteps from far to near, then near to far.
Seems someone left the bar.

Echo：No no, more complex than that, and more specific.
Apple：Then what is it?
Echo：You can imagine the timeline we're in as an infinitely long, straight highway—
Apple：Highway...
Echo：Right, actually this road has countless intersections leading to narrow, dim side paths and such. But we're on the highway, the "speed" is too fast, we don't notice these small roads at all, until the invention of camera technology. What you saw that day was actually such a side path.
Apple：I don't understand, you mean I entered an alternate dimension?
Echo：These spaces were always there, you just happened to observe it that day.
Apple：Continue.
Echo：Theoretically, people on the highway can't enter the path, and "people" in the path can't come out. But... can't rule out some exceptional situations where people in the path, wanting to squeeze into the "highway", once they give up their position, actually cause people on the highway to fall into the "path".
Apple：You mean we exist in what seems continuous time but actually contains countless ruptures, some people are torn apart into an untouchable form, then stuffed into different "frames".
Echo：Something like that.
Apple：This sounds way too mystical. Like...
Echo：Like merging sci-fi and supernatural? Hahaha.
Apple：Right, exactly.
Echo：So I said, those who believe believe, those who don't won't affect their lives.
Apple：I understand. Some customers do suddenly stop appearing, but Old Mo really did disappear.
Echo：From what I know, yes. Anyway Monty even went to his hometown looking for him. He doesn't believe a person can just vanish without a trace.
Apple：Did you talk to him about this? Your theory.
Echo：Yes, he thought I was drunk. Anyway to that group of people, the old me was like a fortune teller. Maybe they even thought I'd be the one something would happen to first.
Apple：Then... according to what you're saying, is there any way to reverse this?
Echo：Return to our spacetime from the side path?
Apple：Yes. Earlier you only had me find all the problematic films, but only put together some of them. You said, what if I put all of them together?
Echo：Don't know, but if it happened... probably something very bad.
Apple：Because if someone comes out, someone has to go in?
Echo：Have you thought that existing in a continuous spacetime isn't necessarily good, and conversely, being trapped somewhere isn't necessarily all bad, like those pure nostalgia lovers... you don't believe what I'm saying?
Apple：Can't quite say that, haha.
Echo：Then you can also think I'm drunk, we're just chatting after drinks.
Apple：Of course just chatting, better than being bored.
Echo：So, if I want to drink, what will you make me today?
Apple：Don't know about other drinks, __Hot Toddy__ I can make right now. Just straight whisky with hot water.
Echo：Isn't that just whisky with hot water? Monty used to drink it like this often. But I just realized this drink actually has a name.
Apple：Don't be so sentimental. Didn't you just say maybe right now Monty is at another bar in this city, drinking exactly the same thing.
Echo：Like you and the ancients, looking at the same moon.`},{id:"mengqi_20201218",searchId:"Monty_20201218",title:"Monty_20201218",locked:!0,content:`Sound of glass breaking.
Laughter immediately follows.

__Apple__：Sorry, broke two more glasses in front of you. Ha... hand slipped.
__Monty__：You're drunk.
Apple：Who told your recipe to be so magical? Couldn't help it, downed three glasses.
Monty：I think it's just average.
Apple：Isn't it weird? The things you usually drink are like slop, how does your brain store such clean recipes?
Monty：Because whether it's good or not doesn't matter to me.
Apple：Ha, got it. You just need alcohol, don't need the bartender.
Monty：Also not right. Actually I need people. I need to stare at something, confirm it's still flowing, still changing... see, I never drink alone at home.
Apple：Right, never drink at home, or we'd all starve.
Monty：... do you remember what you told me two hours ago?
Apple：I don't remember. Haha, I don't know what I said five minutes ago.
Monty：You said you suddenly don't understand why people spend twice the money to get drunk at bars. You said you're having a career crisis, feel like you can't hold on.
Apple：What a ridiculous person I am. Only worked two months, this counts as career crisis?
Monty：This emotion is common. I've seen quite a few beginners who start doubting the meaning of their existence because some regular they like stopped coming.
Apple：... how do you know I only feel bored because someone didn't come?
Monty：I could tell that day. You like that girl.
Apple：That obvious? I thought I hid it well...
Monty：But I need to remind you, her purpose for approaching you might not be so pure.
Apple：Why think so badly of people? Besides she hasn't come back, I wish she did have a purpose...
Monty：You misunderstood, I mean—
Apple：Stop. When she actually appears someday, then come give me lessons.
Monty：True. How about this, I'll give you a recipe. Maybe you can make it for her later.
Apple：Will she like it?
Monty：She will. Trust me.
Apple：What's this drink called?
Monty：__Perseverance Cocktail__.
Apple：Don't understand. Just write it down.

Sound of pencil on coaster.

Monty：Either way, you'll definitely get through this...
Apple：What?
Monty：Nothing, talking to myself.`},{id:"ling_20231103",searchId:"Lynn_20231103",title:"Lynn_20231103",locked:!0,content:`Bar environment clean.
Sound of door opening.
Footsteps one after another, from far to near.

Lynn：Hey.
Apple：You finally came, I've been waiting for you. I just prepared a new drink—eh? Two of you?
Lynn：Right, my friend.
Apple：Please... please sit.
Lynn：It's okay, we won't sit.
Apple：Eh?
Lynn：—We were just drinking at another bar, suddenly remembered, so I had him use your Easter egg.
Apple：Ah, is that so...
Lynn：Anyway we tried several drinks, some good some bad... but the Easter egg is really interesting, so brought him to see the creator.
Apple：I understand...
Lynn：How is it, not many people today?
Apple：Relatively few.
Lynn：We were just at that bar, so many people, so noisy... anyway we just stopped by to see you.
Apple：Okay... really won't have a drink? I already made one for you in advance.
Lynn：Really already drunk, you drink it for me.
Apple：Want some water?
Lynn：Too late, we're going back. See you another time.
Apple：See you another time.

Footsteps one after another, from near to far.`},{id:"awen_20231103",searchId:"Vin_20231103",title:"Vin_20231103",locked:!0,content:`Quiet piano music.
Door opening sound.

Vin：It's okay, it's me.
Apple：I saw it was you.
Vin：So cold... are you waiting for someone?
Apple：No.
Vin：Oh, I saw you pour a finished short drink into beer.
Apple：Was going to make a new drink, decided to mix it with stout instead.

Brief silence.

Apple：What will you have? I'll make it.
Vin：I'll have what's in your hand.
Apple：I haven't made it before, not sure how it tastes.
Vin：I'll have this, it's fine, won't make it hard for you.

Sound of glass being pushed on bar.
Sipping sound.

Vin：It's good. Want to try?
Apple：It's okay, you drink it.
Vin：Try it, might become your signature product in the future.
Apple：That would be quite dramatic, even absurd.
Vin：How so?
Apple：Never mind.

Sipping sound.

Apple：Mm, not bad.
Vin：Kid's so modest! Alright, pour yourself whatever you want, my treat today.
Apple：What's the occasion? Suddenly treating me.
Vin：I'm moving, came to say goodbye.
Apple：Moving? So sudden?
Vin：Yeah, well, not really. I've always wanted to change cities, you know that.
Apple：I thought you were just talk. Where to?
Vin：Home first, see where to next spring. Anyway, old friends are scattering, I should look forward too.
Apple：When do you leave?
Vin：Done packing, shipping tomorrow, leaving the day after.
Apple：Then—should I call Ash, get him to come in?
Vin：No need, not worth it. Just chatting with you is fine.
Apple：I thought you two reconciled...
Vin：Can't say we didn't, can't say we did.
Apple：What do you mean?
Vin：Hard to explain.
Apple：But you've known each other for years, I've barely been here long.
Vin：It just faded, you know? Faded to the point where even a goodbye is unnecessary. Just thinking about that scene is gross.
Apple：I think I get it. Ash once said customers change in waves, and he has to update himself with the new regulars. Once updated, the old stuff gets blurry, forgotten.
Vin：That's why I say, he looks nice but is actually cruel. Maybe that personality is born for this job.
Apple：He comes in less now, leaves it all to me.
Vin：Hang in there. If I come back to visit, I want to drink this again. How about giving it a name?
Apple：Don't worry, I'll remember. But maybe you should drink a __Steph__ then, since that was the first drink I made you.
Vin：Still holding a grudge? Actually you made it fine, but we just met back then, and it was your first day, I couldn't look easy to handle, you know?
Apple：So you were pranking me.
Vin：Just a joke. Come on, bring out those reels from __Old Mo__, let me take a last look at the old days.

Sound of a bag being placed on the bar.

Vin：Ten years gone in a flash, look how young I was.
Apple：You can look at this too.
Vin：What is it?
Apple：That year I stole your key and took photos at the old bar.
Vin：I knew it.
Apple：Look at this.

Sound of thin sheets sliding.

Apple：See, if you stack these frames with white circles, does it look like a silhouette?
Vin：What, you also think Old Mo is trapped in these films?
Apple：Why "also"?
Vin：Forgot, probably heard someone mention it. Let me see...

Sheets sliding.

Apple：Hey, you can't stack them all, otherwise...
Vin：Otherwise what? Look, you have to stack them all to look like a person.
Apple：N-nothing.
Vin：Does look a bit like one.

Brief silence.

Vin：Hey! Look at me, old and confused, almost fell for your ghost story.
Apple：I'm too lazy to trick you.
Vin：Alright, put them away.

Bag being packed.

Apple：Speaking of which, seen __Monty__ lately? Did you tell him your plans?
Vin：If there's a chance, or you tell him.
Apple：That'll be hard.
Vin：Doesn't matter—honestly, don't dwell on these old folks, there'll be new customers.
Apple：I have new customers.
Vin：Better have. Alright, gotta go back and pack. If I have time tomorrow I'll come again.
Apple：I'll walk you out.
Vin：No need. The hills remain green and the waters flow long—see you around.
Apple：See you tomorrow.

Stool moving, footsteps receding.

Vin：By the way.
Apple：What?
Vin：When I came in, I saw two people walking out.
Apple：Oh, yeah?
Vin：Remember asking who wrote that poem signed with an exclamation mark at the old bar?
Apple：I remember.
Vin：Looked a lot like that person.
Apple：What? You mean __Dabai__? But wasn't he... wait, isn't he missing?
Vin：Maybe I saw wrong. See you tomorrow.
Apple：Wait—

Door opens.
Rapid footsteps receding.

Apple：Huh? Where'd he go?

Brief silence.

Apple：Are you still there?

The bar returns to silence.
The frozen piano music continues to play endlessly.`}],Vp=[{id:"intro",password:"",title:"Home",locked:!1,content:"Dear friend, this is a private blog. If you want to learn about cocktails, enter the drink name to search. If you just want to peek into my secrets, please turn around and go watch variety shows instead."},{id:"boiler_maker",password:"boiler maker",title:"Boiler Maker",locked:!0,content:`Boiler Maker 
    30ml Tanqueray Gin
    400ml Pale Ale

Fill a shot glass with gin and drop it into a glass of beer. Who would have thought such a simple method could actually work so well? The botanical notes of gin enhance the hoppy aroma of the pale ale, making each sip feel like strolling through a botanical garden...

Come to think of it, this should be my first bartending study note. If you happened to find this place, you've discovered my secret - my bartending career actually started with a beer cocktail, haha!

Anyway, __there's something else worth recording today__. Learning that I got the job, regular customer __Vin__ was also happy. Knowing I'm a photography student, he mentioned there happens to be an 8mm camera at the bar that's "hard to deal with," and suggested the owner __Ash__ let me use it.

This is a Bolex 8mm camera! Exciting! If the boss agrees, I'll have a chance to use it to shoot some film footage of my bartending life, maybe even make a documentary later.

Oh right, about the documentary, I already have an idea. To showcase the repetitive, cyclical nature of bar life, __I'm going to scramble all the film reels__, making the whole story look like the same day repeating over and over! Only I will know when each reel was actually filmed.

💡 Update:

Today, I poured a cocktail meant for a customer into stout beer, and __Vin__ happened to see the process. He said I made a boiler maker twist.

Looking back, it's been __three years__ since I first tried this drink.

Delicious. Vin said it was delicious too.

But so what?`},{id:"martini",password:"50/50 martini",title:"50/50 Martini",locked:!0,content:`50 / 50 Martini
    Dolin Dry Vermouth 25ml
    La Quintinye Dry Vermouth 15ml
    Tanqueray Gin 40ml
    Fernet Hunter 1 / 2 barspoon
    Lemon Juice 1 drop

I never liked Dry Martini. After making one for __Vin__ and getting criticized, I disliked it even more.

But this one is different. 50/50 refers to two ingredients mixed in a one-to-one ratio. According to Vin, this is actually closer to how the drink was when it was first invented. I don't know, it tastes completely different to me.

__Just two days__ after learning it, a regular named __Monty__ ordered this drink. After making it he was quite satisfied—of course it's the boss's recipe—he said it tastes more like another classic cocktail called "__Bamboo__," which was reportedly created after repeated adjustments by a regular customer, with other ingredients added, so it can't strictly be called 50/50.

Interesting, I never really talked to Monty before. Who knew he'd know about the thing I'm curious about?

By the way, I got the camera. Posting tips here so I don't forget.`,stickyNote:`1. Film running unevenly may be due to excessive reel tension.
2. When shooting outdoors in bright light: Don't rely solely on auto exposure, be sure to use the built-in daylight filter to ensure colors don't turn too blue or washed out.
3. Pay attention to winding frequency and force: The mechanical motor typically only shoots about 20-30 seconds before needing to be wound again.
4. Avoid breathing on the lens to clean it: Moisture from your breath will accelerate coating degradation.
5. Lens flare in footage is often caused by scratches on the lens.`},{id:"steph",password:"steph",title:"Steph",locked:!0,content:`Steph
    Tanqueray Gin 40ml
    Glen Grant Scotch Whisky 10ml
    Dolin Dry Vermouth 20ml
    Suze 12ml
    Fernet Hunter 3ml

Some customers here love this drink to a fanatical degree, even claiming they'll never find a more delicious cocktail. I remain skeptical, never really tasted what's so great about it.

However, messing it up for __Vin__ on my first day and having it sent back made me seriously doubt whether I should even write it in my blog. If you happen to see this page, I strongly suggest skipping this one. Who knows, maybe the recipe itself is flawed!

💡 Update: Okay, I'm updating again. After being patiently and carefully guided by a customer today, I remade it and it actually worked? Although I personally still can't taste its mystery, the customer was very satisfied—maybe he was just comforting me! Anyway, he said next time he comes, he'll teach me a cocktail that all spirit lovers will adore. He said it's called __Francis Albert__!

Today he mentioned that long-missing customer, encouraging me to do something with the film he left behind. Actually, I've already carefully examined all these old, brittle film reels and marked all the usable parts __in a completely symmetrical way__ (maybe all usable?).

How to put it? Being able to utilize footage shot by others years ago will give my documentary a strong sense of temporal dislocation, which is perfect! Moreover, this customer has already appeared in images from two different time periods. When he visits again, I need to talk to him about my documentary plan!`},{id:"francis_albert",password:"francis albert",title:"Francis Albert",locked:!0,content:`Francis Albert
    Tanqueray Gin 30ml
    Wild Turkey Rare Breed Whiskey 28ml
    Lemon Peel

__Monty__ was indeed sick. A whole week passed before he finally appeared again on __the day before Halloween__. During this time I chatted with other regulars about this drink. They say __Ash__ has always been known for this cocktail, but looking at just the recipe, he simply follows the classic method completely.

When Monty reappeared, he kept his promise and told me Ash's secret for making this drink. Turns out the trick is putting in slightly less whiskey. I tried it, my mind full of "of course" thoughts: Rich yet crisp citrus and pineapple aromas, the unpleasant tangled bark smell of bourbon whiskey is diluted by the botanical notes of gin. Truly marvelous! According to Monty, this was also the missing customer's favorite.

But where did he go?

💡 Update: On my first day off, I came back to the bar and ordered a __Francis Albert__. It felt good to be a customer again.

I just noticed that annoying guy also complains about Ash's drinks, but Ash remains completely expressionless. Seeing my amazement, __Lynn__ said selective deafness is a necessary skill for bartenders, told me to learn it.

ps: Lynn is a new friend, new customer, but we talked all night.
How to put it, I'm gradually getting tired of the old bar's feuds.`},{id:"whisky_sour",password:"whisky sour",title:"Whisky Sour",locked:!0,content:`Whisky Sour
    Buffalo Trace 40ml
    Manzanilla Sherry 10ml
    Rich Syrup 10ml
    Lemon Juice 20ml

Made two drinks __one evening__, got two completely different reviews. Taking out part of the whiskey from the classic recipe and replacing it with sherry that has more fermented and fruity notes indeed gives this classic many subtle flavors. Plum? Apple? Maybe.

Watching __Monty__ drink, __Vin__ insisted I make him one, then drank every sip with a face full of displeasure. Really don't know why he always has to be picking on me—I should say, tonight he's been finding fault with everyone!

But thinking calmly, even unpleasantness is all part of bar operations, isn't it? Since it's daily life, it's worth recording.`},{id:"little_italy",password:"little italy",title:"Little Italy",locked:!0,content:`Little Italy
    Knob Creek Rye 50ml
    Vermouth Rosso 20ml
    Cynar 15ml

Is this a __Boulevardier__ variant? Tastes about the same, so I never took it seriously, never recorded it in my blog.

Looking back, the first time I tasted this drink was on my first day off working here. An unfamiliar girl ordered it and invited me to try it.

Perhaps the common quality of being newcomers attracted us to each other? Anyway, I remember we talked a lot that night, seemed quite compatible, so compatible I thought she'd appear here every week. However, just when I thought I'd finally have my own regular customer, she never came again.

Until today.

__Yesterday was just past Valentine's Day__, I thought the bar would be so quiet there wouldn't be a single person. Who knew she'd finally reappear, even remembering the promise from __a year and a half ago__. But times have changed, I've long forgotten its correct flavor and recipe—and most importantly, after experiencing those things, these past few days I don't care whether a drink tastes good or not, I just don’t have it in me.`},{id:"jam_1030",password:"jam 10.30",title:"Jam 10.30",locked:!0,content:`Jam 10.30
    Sotol 45ml
    Bourbon 15ml
    Caffo Amaro 12ml
    Amontillado Sherry 10ml
    Creme De Cassis 5ml / Chinachina 5ml

Sotol is a fairly rare spirit from northern Mexico. Don't know when __Ash__ suddenly became interested in it, these past two months he's made several new recipes with it. Don't understand, he hadn't had enthusiasm for new recipes in a long time, and recently business isn't great, sometimes regulars would rather just drink beer.

Don't know if it's my problem. Ever since __Monty__ stopped coming, others have been treating my service and drinks with a kind of politeness and fake smile, as if even when I don't do well, they're willing to tolerate me. This feeling is awkward. Can't they just say it's not good? Or maybe it's something else entirely?

Let me be blunt. Haven't filmed lately because I wasn't in the mood, so I threw the film backpack in the warehouse. A few days ago was my __one-year work anniversary__, couldn't not film. But when I dug out the backpack, I found the film inside had been tampered with. Asked Ash and he was evasive, only __Vin__ would tell the truth. Basically, they still think Monty's accident is related to me going to the old bar and encountering something unclean. Probably why they wanted to find and throw away that reel.

I'm not that stupid, I never put that reel in the backpack, it's not in the numbering system either.`},{id:"xyz",password:"xyz",title:"XYZ",locked:!0,content:`XYZ
    White Rum 35ml
    Pisco 5ml
    Spanish Gin 2ml
    Lime 20ml
    Syrup 5ml
    Cointreau 10ml

Every year __April 25th__ is the bar's __anniversary__. On this day the bar doesn't operate commercially, only treats regulars, and of course no cocktails. __Ash__ will open a dozen bottles of whisky for everyone to drink. I hear every year many people get drunk on this day, nothing new. But to seriously make cocktails on this day, that's quite rare. This year's __anniversary__, I made a drink for __Monty__. __XYZ__, adding a bit of pisco and Spanish gin, apparently his own recipe. I tasted a bit of the liquor left on the shaker lid, very fragrant, but beyond that, I have no memory of that day.

💡 Update: Monty hasn't come in a long time. __Vin__ reminded me today and I realized the reason he insisted on having an __XYZ__ that day was actually this. A cocktail that always exists as the last drink, __XYZ__, has now also become the last drink Monty had at this bar.

A sigh.`},{id:"goooooose",password:"goooooose",title:"Goooooose",locked:!0,content:`Goooooose
    Shochu 50ml
    White Rum 20ml
    Italicus 10ml
    Vermouth Dry 15ml
    Lemon Peel

Found something new going through those old recipes, but since the bar hasn't had shochu for a long time, it wasn't until __Lichun__ (Start of Spring) when someone brought a bottle as a gift that I finally tried making it once. The result was surprisingly delicious. Beneath the appearance of low alcohol and fresh character, it retains space for variation...

I asked __Ash__ where this recipe came from and why it's called this. He first said maybe one day when everyone was having a good time, some customer came in and made it, maybe there happened to be shochu. Everyone thought it was good so they wrote it down, but because they were too happy, everyone got drunk, and completely forgot about it the next day. Anyway, no one has really liked this drink. Maybe it should just be forgotten.

Anyway Ash said a lot, but I was really happy drinking today, don't remember what he said.`},{id:"exclamation",password:"!",title:"! (Daikanjou)",locked:!0,content:`!
    Knob Creeks Rye Whiskey 30ml
    Tanqueray Gin 30ml
    Singani 10ml
    Gran Classico 10ml
    Spanish Bitters 2dash

__Ash__ skillfully operated this drink, using a dusty bottle from the back of the cabinet, the last drops of Bolivian grape distillate singani.

Before tonight I never knew this liquor existed, didn't know the bar still had a tiny bit left, and don't know where I'd go to find this liquor to replicate this recipe.

I must say, (if there's a chance to find singani), __Francis Albert__ lovers should try this drink, because in terms of aroma and complexity, it's like a seductive version of FA.

💡 Update: Got new intel today! Someone had me make this drink with regular pisco, and clearly stated the recipe, telling me this drink is called "__Daikanjou__" (Great Reckoning). He also said, because this drink was originally a __Francis Albert__ variant, and the latter is related to __Frank Sinatra__, the variant used the name of an album by Japanese jazz pianist __Shoji Aketagawa__.

I don't know if this is coincidence or some cultural evolution, but considering Ash was vague about it, while this source who was supposedly a regular many years ago spoke with such detail, I'm now more inclined to believe he simply stole this recipe from somewhere else! Anyway, the source calls himself __Old Chen__. We chatted a lot. He said he personally experienced the first novel competition held by the bar's writing group, had vivid impressions of the missing __Old Mo__ and others. I improvised a drink and __named it after that magazine sample book__.

Whether you say I'm trying to show the bar's continuity or forcibly inserting myself into things, fundamentally I really don't care about these past events anymore, listening to stories is exhausting!`},{id:"are_bats_rats",password:"are bats rats",title:"Are Bats Rats",locked:!0,content:`Are Bats Rats
__aka Jam 11.05__
Glengrant 45ml
    Fernet Branca 10ml
    Vermouth Bianco 25ml

After working at a bar for __over two years__, I finally made my first original cocktail.

Mainly because this bar has too many of its own cocktail recipes. Sometimes when I'm cleaning, I find recipes written on napkins from the bar's crevices. You know this place just moved here less than three years ago, and these recipes weren't even left by __Ash__.

It—I mean this bar, is itself like a cow that produces and summarizes recipes.

And my drink can't even be called original. As a Hanky Panky twist, I believe this combination has been made thousands of times.

But guess what, the effect is actually pretty good. So why hasn't anyone "registered" it as some classic cocktail?

Can't understand.
Can't understand people.
Can't understand people who drink.
Can't understand women who drink.`},{id:"second_serve",password:"second serve",title:"Second Serve",locked:!0,content:`Second Serve
    Montenegro 30ml
    Manzanilla Sherry 30ml
    Monin Cane Syrup 10ml
    Lemon Juice 20ml
    Soda 60ml

Never tasted the finished product. First time making it I was too lazy to taste. Second time—today, I only tasted a bit when pre-mixing in the shaker. Sour, sweet, bitter, fermented notes. Not bad.

In fact, when you don't know how to start a conversation, using a drink is indeed a method. __Three days ago__ a customer recommended this recipe; this person claims to be an __old bar__ customer; talked about things at the __old bar__ before, so we looked at the film __Old Mo__ left behind, like this one.

Then show the photos to the person involved, __her__, see what __she__ has to say.

💡 Update: Without realizing it, this drink seems to become a key to unlocking some lost memories. After __Old Chen__, within half a year two more old customers visited again—though to me they're complete newcomers. Without exception I made this drink for them, and they naturally talked about the past.

How to put it. Actually recently, for certain reasons (or a certain person), I both care and don't care about this bar's history. Both feelings exist simultaneously. On one hand I feel I don't need to care about things unrelated to me, should care about people in the present. On the other hand, I feel I need to care, because even people in the present might be connected to that past. Am I right?

But fundamentally, I've already confusedly become part of this bar. No matter what, I can't approach these things with the curious detachment I had when I first arrived.

ps: These two old customers are interesting too. After drinking this, they each told me strange things. One was okay, the other—hey, is it really okay to say these things on __Christmas Eve__?`},{id:"my_wild_irish_rose",password:"my wild irish rose",title:"My Wild Irish Rose",locked:!0,content:`My Wild Irish Rose
    Tanqueray Gin 40ml
    Dandelion Bitters 5dash
Montenegro 15ml
Islay Mist 10ml
Tanqueray No.10 10ml

Damn, secret's been discovered!

Feels like someone stole my treasure (not really). I originally thought no one would find this place, but even the Easter egg was discovered. Good thing the first drink I randomly threw together was approved, otherwise it would be too embarrassing.

Anyway, this drink got its name! A piece by Keith Jarrett. Considering this is a martini with licorice and rose aromas, this name is really fitting.

[IMAGE:/cat_decoration.png]

💡 Update: Well, even __Vin__ praised this drink endlessly. In my memory, he never complimented me before his ban. This time Vin appeared at the bar again when Ash wasn't around, didn't even ask me. This was on __New Year's Eve__, the busiest time of year for the bar, 99.9% of the time Ash would be here. I suspect they've been privately coordinating schedules to avoid awkwardness.

Or maybe, he wants to reconcile?`},{id:"perfect_manhattan",password:"perfect manhattan",title:"Perfect Manhattan",locked:!0,content:`Perfect Manhattan
    Knob Creek Rye 60ml
    Carpano Punt E Mes Vermouth 15ml
    Dolin Dry Vermouth 15ml
    Orange Bitters 3 Dash

Imperfect is imperfect. Anyway, the remaining half glass, after sitting at room temperature for over an hour, I still found it delicious. Who could have thought __Vin__ would get drunk after just a glass and a half, even in my first year at the bar, he had at least six drinks minimum every day.

Is this aging?

Don't know why, I feel this moment is especially worth filming.
__Continue using the numbering system__, hehe :)`},{id:"hot_toddy",password:"hot toddy",title:"Hot Toddy",locked:!0,content:`Hot Toddy
    Whisky With Peaty Flavour 50ml
    Hot Water 180ml

I never understood. But __Monty__ always said, understand this drink as a kind of light tea. He said in Paustovsky's novels, Soviets called any beverage steeped in hot water "tea"—even if they only had dried carrots, dried beets or fireweed leaves, steeping them in hot water could be used to entertain guests.

I don't know. Monty always had an ascetic spirit, reflected in his indifference to flavor; sometimes even the opposite, deliberately pursuing a kind of blandness and roughness. But he clearly understood drinks well. When I first became a bartender, he gave me a lot of guidance, even more than __Ash__ helped me.

Only once, he had me bring out as many bottles as possible to make an extremely complex-flavored drink. That was __about three months__ into the job, when I was doubting whether I could continue. Obviously, Monty's drink wasn't for himself, but to let me appreciate the subtleties of cocktail flavors, encouraging me to persevere. Only now do I realize that was a small turning point in my career (fortunately I was obsessed with the camera then, of course I recorded this moment too).

As for him, now he seems to only need the alcohol itself.`},{id:"jam_1218",password:"jam 12.18",title:"Jam 12.18",locked:!0,content:`Jam 12.18
    Mezcal 40ml
    Rye 20ml
    Fernet Branca 10ml
    Bigallet China-China 8ml
    La Quintinye Dry Vermouth 10ml
    Spanish Bitters 3ds
    Cardamom Bitters 2ds

Still learning base spirits and liqueurs, suddenly you make me something like this, using ingredients I don't even recognize.

Really something.

But, delicious.

Don't remember much else, because I got drunk, hahaha.

Will I remember this recipe?
Doesn't matter,
just let it drift down the river of time
to some place downstream
and then I'll fish it back up.

A gift from the past,

or forever forgotten.`},{id:"perseverance_cocktail",password:"perseverance cocktail",title:"Perseverance Cocktail",locked:!0,content:`Perseverance Cocktail
    Rye 60ml
    Ramazzotti 15ml
    Dubonnet Rouge 15ml
    Sweet Vermouth 15ml
    Orange Bitters 2ds

I said, this bar is full of recipes everywhere. They're all written on coasters, then stuffed into various crevices.

In these three years of working, I've collected all the recipes I could find and put them in a small box.

But today, I actually found this thing from the gap between the fridge and the bar.

Even stranger, looking at the handwriting, this old coaster wasn't written by me or __Ash__.

No clue.

But none of this matters! What matters is the drink's taste, simply tailor-made for a certain someone.

Really such a coincidence. Next week is the __three-year anniversary__ of __her__ coming here, though only I'm unilaterally commemorating it.

But anyway, if she comes then, making her an upgraded version of __Little Italy__ might count as a surprise?`},{id:"film_fan",password:"filmnik!",title:"filmnik!",locked:!0,content:`filmnik! is a novel, authored by __Taylor Soigir__.
I've uploaded the scanned document to my blog so I can read it slowly later.
Don't know, I vaguely feel this is connected to what __Echo__ told me.`,attachments:[`filmnik!
By Taylor Soigir


I've loved watching movies since I was little.

The county town where I grew up was small, and I only had one friend who watched movies with me, a guy named Dabai.

Although we shared the same hobby, I still wasn't as fortunate as him. Dabai's love for movies was hereditary—his old man was a film fan. As a kid, I heard adults say that when "Shaolin Temple" premiered, his dad stole money from home to buy 8 consecutive tickets at the county cinema. Consecutive tickets meant the same seat number for all eight showings in one day. He bought them all, sat there, and watched it eight times straight without getting up.

Later the county opened a video rental place, and his dad worked there. After that, he stopped going to cinemas. By the time every household had a TV, his dad was the first to open a disc and VHS rental shop on the main street of the county. The storefront wasn't big, but the shelves were very deep and pitch black. Even during the day he was too lazy to turn on lights—the only illumination came from a TV placed up high.

I remember his old man because he sat at the wooden checkout desk by the store entrance every day, staring at the 19-inch TV overhead. I'd sneak around flipping through adult film covers on the shelves, and he wouldn't care even if I did it all day.`,`We watched it together two or three times, and each time at this part, Dabai would describe the rape details in as much detail as possible. I listened with horror. Although late '80s Chinese films shot a lot of "intense" stuff, such extreme visual expression still made me unable to believe it. What I couldn't understand even more was that Dabai firmly believed the director personally supervised the male actor in completing a real rape scene—meaning the rape actually happened during filming.

Even as we watched more and more films and our interests evolved beyond the stimulation we liked as kids, we often argued about this film, debating whether it's necessary to use extreme methods during film creation to achieve the most realistic performance. But film was ultimately too far removed from us, so our imaginations about film creation were naturally outlandishly absurd.

By those years, the county cinema had long lost business, but disc rental shops kept multiplying. On the day I reported to high school, my mom bought me my first phone. Dabai didn't come see me off, said he had to watch the family store. Actually Dabai and I had drifted apart long ago, and our ways of viewing films had diverged increasingly. For me, film was a tool to understand the outside world. Once I was ready to actually go see that outside world, it became unimportant. But for Dabai, he'd developed a jigsaw puzzle-like compulsion for watching films. As a kid he once asked me if we could watch every film in the world. Back then I laughed at him, but by now, for him, individual films no longer existed independently—they were interconnected, piecing together to form this era. So there couldn't be any piece of the puzzle he didn't want to firmly grasp. He stopped caring about our group and instead spent more time watching films. If you ask me, his way of watching films was more like racing against the film industry.

Anyway, after junior high graduation, Dabai took over his dad's business. I went away to study, and after that I might not return home even once a year. We contacted each other less and less. Our shared love of films had become an old photo recording the past, gradually yellowing and fading, not to mention our arguments about that film.`,`A few years ago when I called home, I'd occasionally mention Dabai and his business to my mom. She said now that fiber optics reached every household, who still rents or buys discs? Of the seven or eight video stores that used to be on that street, only Dabai's family remained. He could hold on because half his shop was used as a package pickup point. Mom said Dabai was really busy now, spending several hours every day organizing neighbors' online shopping hauls. On the phone I hummed and hawed, saying based on my understanding of him, during work breaks he'd definitely still crane his neck watching new releases on TV, or watching his VHS collection that barely plays anymore. Mom said, you still understand him—others all say he's obsessed. Then Mom asked if I still watch movies. I said, stopped long ago, don't have the patience. Mom said, good thing, it's all that thing's fault. I said, Dabai just got trapped in our small place.

A few days ago after work, the security guard at the gate said someone had been waiting for me all afternoon. I looked and it was Dabai, sitting on a video recorder box, holding a DV camera filming me.

The next day I went to work as usual, leaving Dabai to rest at home. When I got home that evening, there was an extra old TV and DVD player at home. Dabai said no one's home can lack a TV, otherwise it's too much like a dorm. He'd picked up two machines from the nearby secondhand market. I didn't know whether to laugh or cry—this guy never lived in a dorm but worried about me. But I could only find a spot in the rental with him and his machines, setting up this outdated three-piece furniture set.

After finishing I went to shower, Dabai connected the power. When I came out wrapped in a towel with a cigarette, Dabai had already put in a film. I sat next to him absent-mindedly, but soon recognized it—this was the very film that caused our argument years ago. Seeing I still remembered, Dabai was quite excited. I said I remember, but aside from certain segments, I'd long forgotten what the film was about. The version Dabai found had been restored, looking even more unfamiliar. And it was, after all, a popular genre film from over twenty years ago—watching it now revealed clichéd plot and stiff acting. I quickly tired, until a strangulation scene began, when Dabai revealed his real purpose for this visit.

Dabai was absolutely certain the sound in this scene was collected from real murder environment audio.

Dabai told me he was so certain because in his store, with nothing to do, he'd ordered and returned countless films from that era based on disc suppliers' catalogs, finally matching the film with its name. According to Dabai, this film was called "Yellow Ghost." A few years after release, director Da Shiqiu died, and the actress he believed was raped was arrested years later for organizing prostitution.

Since the director's cause of death was never announced, Dabai believed the strangled victim's voice in this scene was probably the director's own voice.

"Absurd, how could a director put their own dying voice into their own film?" I said.

Dabai reminded me that based on his memory, this edited version was already quite different from his VHS version. The footage source was now hard to trace, and those who knew the truth were either dead, imprisoned, or missing.

"Any film restoration involves many people. Someone must have used the complex film collection and restoration system to add real murder scene audio to the film to convey some truth," Dabai said with certainty.

But what truth, and how to find it, he naturally had no idea. I said don't mind my bluntness, but you've lived in our county your whole life, know nothing about film restoration processes—how will you find it? The county cinema closed, who still watches movies, who still cares what these filmmakers are doing? Nearly 40-year-old Dabai got agitated, pulling out his tape that barely showed any image and waving it at me, saying he cared. This conversation ended badly. I hid in my room lying on the bed scrolling my phone as usual, and soon fell asleep. When I came out the next morning, Dabai had already left.`,`I folded the note into a stack, then unplugged those three machines and piled them together.

A month passed. I got a call from home—Dabai's old man had a stroke. His family asked my mom to have me notify Dabai and tell him to hurry back. Only then did I realize Dabai never went home.

Since then Dabai disappeared. His family was anxious, but I didn't care. I guessed he was still searching for that truth.

Besides, a 40-year-old man disappearing really couldn't make me care.

Another half year passed. Realizing I couldn't avoid the topic of Dabai's disappearance, I decided to go home for Dabai's dad's funeral. After the funeral, walking on the unrecognizable old street, I couldn't help recalling the bustling childhood memories. I felt somewhat sad, and also realized that smell memories in memory could be awakened by returning to physical space, but when physical space gradually collapses, those memories gradually disappear too.

Lost in thought, I walked to Dabai's store entrance. The rolling door had a printed "Temporarily Closed" notice showing signs of water damage and sun bleaching. From Dabai's departure to his dad's stroke, the family was in chaos and naturally had no mind for business. But at this moment I remembered Dabai's note saying "return to the beginning."

I tried pulling the rolling door—it wasn't locked. Dry sunlight shot into the pitch-black room, the smell made my mind conjure an image of myself standing before those disc covers. But what actually met my eyes were stacked package shelves, with nothing but Dabai's DV on them.

I picked up the DV and flipped through—the device was almost out of battery. On the storage card I saw myself at the complex entrance, saw footage of Dabai departing, then saw Dabai back at the store watching tapes one by one. Seems after leaving me, he came back to the county but never entered his home.

I closed the DV and walked deeper into the store, finally seeing the shelves full of images and dust at the corner—familiar objects. I touched the iron frame from new to rusted,  stepping on a VHS tape on the floor. I lifted my foot and discovered empty instant noodle boxes and scattered tapes all over the floor.

Did Dabai discover something from the footage? Where did Dabai go to find his truth? I picked up a random tape from the floor and stuck it in the machine. The film image was blurry, no beginning or end. Sitting in this environment I felt like I'd returned to childhood. Dabai seemed never to have left, and neither had I.`,`I returned to my life, but the knot about Dabai couldn't be untied. At night after work, I'd stare at the black TV screen in a daze. I'd brought Dabai's DV back as a keepsake, currently piled on top of the TV. I kept thinking about that image.\\n\\nAfter messing around for a while I closed my computer and lay back on the bed operating my phone. I don't know how Dabai found these names. Resources searched by these names never matched the films we watched as kids. I even suspected the "Yellow Ghost" Dabai showed me later wasn't the same one at all. But thinking again, it was the same, but as time passed, they were aging too, changing too...\\n\\nI started doubting myself. Does this mean Dabai's judgment was right? Was I increasingly leaning toward his side internally?\\n\\nStill no evidence, except the so-called dying director's wail in the strangulation scene from currently available resources. But I was increasingly uncertain, because time doesn't stop.\\n\\nMy life in this city oscillated with its rhythm. Over the following years I moved several times, keys accumulating on my keychain. I met new girlfriends. Each time I thought they were the right world, the new one. But new inevitably became old, and "right" no longer mattered.\\n\\nGradually, even my memory of that last time watching a film with Dabai in that rental room faded like notes written on thermal paper.\\n\\nNo news from home either.\\n\\nOne night I had a dream. I dreamed tons of plastic discs piled on my hometown's garbage mountain, crushed by excavators, buried. I saw countless black tapes pulled from VHS cassettes dancing in the wind, tangling on high-voltage power lines, hooking birds, burned without a trace by electric arcs. I saw a silhouette standing in the distance, silently recording all this with an unpowered DV. Wind replaced the drive shaft, pulling film exposed from the broken shell outward, completing continuous exposure through violent tearing.\\n\\nAfter waking I called home. Mother couldn't understand why I was asking about Dabai's family again. Obviously after Dabai's dad died, Dabai's mom moved back to her rural hometown. The storefront was returned long ago, those discs and tapes whereabouts unknown.\\n\\nMother's tone was slightly suspicious. I knew she feared I'd become神神叨叨 like Dabai, so I casually mentioned my current situation and hung up.\\n\\nUneasy, I turned over all my possessions and found the DV I'd brought back from home. Since bringing it back I'd never charged it, let alone opened it. I pulled out the data card and inserted it into my computer. I saw Dabai filming me, and me filming Dabai in that rental room. After returning from Dabai's store that year, I hadn't looked at this footage in years.`,"In one clip, Dabai was filming us watching a tape, and the tape content was copied from this DV. Looking at the objects in the video, I remembered the TV and VCR he bought me. I'd left those things with the landlord of that rental, don't know if they're still there.\\n\\nWithout realizing it I'd scrolled to the last footage on the data card. This clip was recorded when Dabai returned to the small town, back to his own store. The DV was placed on a package shelf by Dabai, filming him rewatching VHS tapes in the store. I was about to close it when I noticed Dabai getting up and removing a tape from the VCR, putting it in a postal bag and writing an address on the address field. The recording stopped there because the card was full. I enlarged the last frame on my computer trying to see what Dabai wrote, but couldn't make anything out. But I could clearly see the bag he casually picked up had a postal service logo.",`Late at night, I followed a young woman into the complex entrance, still afraid security would stop and question me. That old guard I knew was long gone.\\n\\nStanding under the building I used to live in, I saw that huge but barely-used dedicated postal service package box still in its original place. Relieved, I went forward to check the mailbox that used to be mine. After forcibly prying it open, I retrieved the postal package from under a layer of dusty advertisement papers.\\n\\nI stood downstairs gazing up at the place I used to live for a long time. The lights inside never came on. My determination was planted bit by bit. Standing before that security door, I took out my keychain, carefully distinguished, and inserted the unreturned key into the lock.\\n\\nI took a breath, my head still foggy.\\n\\nThe room was pitch black. I told myself I was being as quiet as possible, and after saying so felt less nervous. I didn't dare turn on lights, using my phone flashlight to sweep over those familiar old furniture. Their positions hadn't changed. I walked to the corner where I used to pile those machines—they were still there, but all plugs were disconnected.\\n\\nI caressed the television cover—don't know if the landlord or new tenant put it on—satin-faced, my fingers picking up a layer of dust. I removed the cover, plugged it in, tossed the VHS tape onto the floor in front of me, then sat before the TV in darkness. My phone's light beam hit the cathode ray tube and diffused. I didn't know whether I should put the tape in, whether I should watch. So I turned off the flashlight and ran to the balcony to smoke.\\n\\nBefore finishing one cigarette, the living room light suddenly came on. Someone inside shouted, "There's someone on the balcony!"`,`At the police station, I repeatedly explained the whole story to the police. I said my childhood friend and I were film fans furthest from film. Now film is gone, cinemas only show acrobatic nonsense, but my friend got lost in those old films for a lifetime, and now he's missing. The clue is in a film we watched together.\\n\\nBesides one officer expressing confusion, the others didn't believe me at all. How could someone break in to steal things they'd given to others? But after calling the landlord to confirm my identity and my story, they decided to let me go, with one officer accompanying me to return the key and apologize to the landlord who'd forgiven me.\\n\\nOn the way, the officer and I chatted about our respective film memories, passing the deserted cinema at the complex entrance, entering through the side door. I stood at the landlord's door knocking. In the gaps between knocks, I heard "Yellow Ghost" audio coming from inside. I guessed after police took me away, the landlord discovered the tape I'd left on the floor.\\n\\nAfter welcoming us in, the landlord quickly hit pause. I handed the landlord the key. The landlord was a bit embarrassed, but I understood—he just wanted to know what I'd risked breaking in to watch. "Just a tape you can barely see anything on," he said.\\n\\nSeeing things resolved, the officer decided to leave. I turned to go too when the landlord called me back, wanting to return the tape. When I turned back I froze, quickly stopping the landlord about to eject the tape.\\n\\nWhat I saw was "Yellow Ghost" paused on the last frame on the TV, flickering regularly on the cathode ray tube's phosphor. The landlord was right—after so many years, this tape's image was nearly impossible to see clearly, the sound rough and scratchy. But I was certain, on screen, beside the female protagonist, I saw Dabai's silhouette.\\n\\nIt was a silhouette formed by noise. The noise flickered with the frame's flicker, its crouched posture identical to Dabai sitting cross-legged before the TV years ago. Originally this frame had no blemishes at all. All traces came from watching it over and over again. Eventually the blemishes occupied the frame, becoming the image's main subject. At this moment and place, this Dabai formed by time and wear crouched in the corner of the frame observing. I remembered that year, also at this position, Dabai got excited, waving the VHS in his hand at me. I remember asking him, you say you care, but you've never even entered a cinema. Film is too far from you. You're the person furthest from film in the whole world. How will you find that so-called truth?\\n\\nAt this moment I could only stare at the flickering screen. I wasn't watching the woman on screen, I was watching that noise.\\n\\nI watched for a long time but couldn't say a word.\\n\\n「So, did you find the truth?」`],attachmentType:"novel"}],Up=[{id:"reel_01",reelNumber:1,code:[0,0,0,0],label:"First Roll",contentTitle:"First Roll",contentDesc:'In blurry footage, someone makes a drink at the bar. After finishing, the camera zooms in to capture a close-up of the cocktail in a martini glass. The coaster next to it reads "50/50 Martini".',contentImage:[U("/assets/film_01.jpg"),U("/assets/film_02.jpg")]},{id:"reel_02",reelNumber:2,code:[0,0,0,2],label:"Second Roll",contentTitle:"Second Roll",contentDesc:'In blurry footage, a tall person makes a drink at the bar. After finishing, the camera zooms in to capture a close-up in a martini glass. The coaster next to it reads "Steph".',contentImage:[U("/assets/film_02_1.jpg"),U("/assets/film_02_2.jpg")]},{id:"reel_03",reelNumber:3,code:[0,0,2,0],label:"Film 4",contentTitle:"Film 4",contentDesc:'In blurry footage, a tall person shakes a drink at the bar. After finishing, the camera zooms in to capture a close-up in a martini glass. The coaster next to it reads "Whisky Sour".',contentImage:[U("/assets/film_03_1.jpg"),U("/assets/film_03_2.jpg")]},{id:"reel_04",reelNumber:4,code:[0,2,0,0],label:"Fourth Roll",contentTitle:"Fourth Roll",contentDesc:"Shaky footage, figures tangled together, barely capturing any clear images. In the second shot, a key falls to the ground, and the photographer steps on it with their shoe.",contentImage:[U("/assets/film_04_1.jpg"),U("/assets/film_04_2.jpg")]},{id:"reel_06",reelNumber:5,code:[2,0,0,0],label:"Film 6",contentTitle:"Film 6",contentDesc:"In the dim yellow night, a chaotic pile of ruins sits in the middle of the street, forming a stark contrast with modern buildings behind. Distant lights and buildings are shrouded in a layer of hazy mist and soft focus, like a long-sealed old memory.",contentImage:U("/assets/film_06.jpg")},{id:"reel_07",reelNumber:6,code:[2,2,2,2],label:"Film 7",contentTitle:"Film 7",contentDesc:'Against a mottled dark background, an essay full of Lovecraftian and poetic sentiment appears in the frame. The content mentions "wormholes," "feminism," and "atavism," signed with a bright red exclamation mark.',contentImage:U("/assets/film_07.jpg")},{id:"reel_00",reelNumber:0,code:[4,4,4,4],label:"Reel 0",contentTitle:"Reel 0",contentDesc:"This is a pile of fragmented, discontinuous film strips. It appears to be a dark bar ruin, with several frames showing unusual white spots resembling cigarette burn marks.",contentImage:[U("/assets/film_00_3.jpg"),U("/assets/film_00_4.jpg"),U("/assets/film_00_5.jpg"),U("/assets/film_00_6.jpg"),U("/assets/film_00_7.jpg"),U("/assets/film_00_8.jpg"),U("/assets/film_00_9.jpg")]},{id:"reel_ghost",reelNumber:-1,code:[0,0,0,0],label:"Film 3",contentTitle:"Film 3",contentDesc:`Shaky footage, appears to be at the old bar. The photographer hands the camera to Monty, who films the photographer's appearance and an image holding a sign. One person holds a book titled "Performance Art and Spiritual Healing."`,contentImage:U("/assets/film_03.jpg")},{id:"reel_08",reelNumber:-2,code:[2,0,0,0],label:"Film 8",contentTitle:"Film 8",contentDesc:'In a dim and enclosed space, a stack of sample books with "Are bats rats?" printed on their spines sits quietly. Heavy shadows swallow most of the light, with faint reflections making the text on the spines appear particularly pale and eerie, exuding a suppressed nostalgic atmosphere.',contentImage:U("/assets/film_08.jpg")},{id:"reel_09",reelNumber:-3,code:[1,1,1,1],label:"Film 9",contentTitle:"Film 9",contentDesc:"In dim yellow, grainy footage, a group of young people sit on the floor, surrounded by scattered bottles and miscellaneous items. Light and shadow cast heavy, dark shadows on the walls. Blurred faces are shrouded in a layer of melancholic nostalgia, like a private record forgotten by time.",contentImage:U("/assets/film_09.jpg")},{id:"reel_10",reelNumber:7,code:[2,2,2,1],label:"Film Fan",contentTitle:"Vin_20221231",contentDesc:'Drunk Vin slumps asleep at the bar, a half-finished Perfect Manhattan beside him. Next to it, book pages read "filmnik!" by Taylor Soigir.',contentImage:U("/assets/film_10.jpg")},{id:"reel_11",reelNumber:8,code:[2,2,1,2],label:"Jam 12.18",contentTitle:"Jam 12.18",contentDesc:"The bartender behind the bar expectantly raises a glass. The coaster in front reads the recipe: Jam 12.18.",contentImage:[U("/assets/film_11_1.jpg"),U("/assets/film_11_2.jpg")]}],Yp={recorder:U("/assets/recorder_music.mp3"),notebook:U("/assets/recorder_music.mp3"),film:U("/assets/film_music.mp3")},Gh=Object.freeze(Object.defineProperty({__proto__:null,AUDIO_LOGS:Bp,BLOG_ENTRIES:Vp,FILM_ARCHIVE:Up,INITIAL_ITEMS:Hp,MUSIC_TRACKS:Yp},Symbol.toStringTag,{value:"Module"}));function qp(){return typeof window>"u"?rt.Chinese:localStorage.getItem("the-missing-reel-language")||rt.Chinese}const Gp=qp(),Il=Gp===rt.English?Gh:qh,Qp=Il.INITIAL_ITEMS,Sr=Il.AUDIO_LOGS,$i=Il.BLOG_ENTRIES,Pi=Il.FILM_ARCHIVE,Lh=Il.MUSIC_TRACKS,Qh=O.createContext(void 0),Rh="the-missing-reel-language",Xp=({children:m})=>{const[S,E]=O.useState(()=>typeof window>"u"?rt.Chinese:localStorage.getItem(Rh)||rt.Chinese),f=S===rt.English?Gh:qh,I=j=>{E(j),localStorage.setItem(Rh,j),sessionStorage.setItem("the-missing-reel-skip-intro","true"),window.location.reload()},D=()=>{const j=S===rt.Chinese?rt.English:rt.Chinese;I(j)};return o.jsx(Qh.Provider,{value:{language:S,setLanguage:I,toggleLanguage:D,constants:f},children:m})},Ca=()=>{const m=O.useContext(Qh);if(m===void 0)throw new Error("useLanguage must be used within a LanguageProvider");return m},Xh=({text:m,onClose:S,isVisible:E})=>{const[f,I]=O.useState(E),{language:D}=Ca();return O.useEffect(()=>{if(E)I(!0);else{const j=setTimeout(()=>I(!1),500);return()=>clearTimeout(j)}},[E]),f?o.jsx("div",{className:`fixed bottom-10 left-10 z-[100] max-w-sm md:max-w-lg transition-all duration-500 ease-out transform ${E?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,onClick:S,children:o.jsxs("div",{className:"relative bg-stone-900/90 border border-stone-600 px-6 py-10 rounded-xl shadow-2xl backdrop-blur-sm cursor-pointer hover:bg-stone-800/95 transition-colors group",children:[o.jsx("div",{className:"absolute -top-4 left-6 bg-stone-800 px-3 py-1 border border-stone-600 rounded text-xs text-stone-400 font-mono tracking-widest uppercase",children:Z("thoughtBubbleLabel",D)}),o.jsxs("p",{className:"text-stone-300 font-serif text-lg md:text-xl leading-relaxed italic",children:['"',m,'"']}),o.jsx("div",{className:"absolute -bottom-3 left-10 w-6 h-6 bg-stone-900 border-r border-b border-stone-600 transform rotate-45"}),o.jsx("div",{className:"absolute bottom-2 right-3 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-stone-500 font-mono",children:"[CLICK TO DISMISS]"})]})}):null},kr=4,Zp=({onBack:m,unlockedLogs:S,onUnlockLog:E,hasAutoPlayed:f,setHasAutoPlayed:I,onTriggerEnding:D,onMusicStart:j})=>{const{language:q}=Ca(),[z,x]=O.useState(null),[B,H]=O.useState(""),[F,Ee]=O.useState(""),[De,Ie]=O.useState(Z("recorderWaiting",q)),[Be,qe]=O.useState([]),[Ce,$]=O.useState(0),[le,me]=O.useState(!1);O.useEffect(()=>{if(!localStorage.getItem("the-missing-reel-tutorial-seen")){const K=setTimeout(()=>me(!0),1e3);return()=>clearTimeout(K)}},[]);const xe=()=>{me(!1),localStorage.setItem("the-missing-reel-tutorial-seen","true")},[X,oe]=O.useState(0),we=5,ut=O.useMemo(()=>Sr.filter(T=>S.includes(T.id)),[S]),ve=Math.ceil(ut.length/we),Ve=O.useMemo(()=>{const T=X*we;return ut.slice(T,T+we)},[ut,X]),[ze,pe]=O.useState([]),[Ae,_]=O.useState(0),[C,G]=O.useState(!0),te=O.useRef(null),ye=T=>T.split(`
`).map(ae=>ae.trim()).filter(ae=>ae.length>0).map((ae,se)=>{if(ae.startsWith("（")||ae.startsWith("("))return{id:se,speaker:null,text:ae,type:"direction"};const Me=ae.match(/^([^：:]+)[：:](.+)$/);return Me?{id:se,speaker:Me[1].trim(),text:Me[2].trim(),type:"dialogue"}:{id:se,speaker:null,text:ae,type:"direction"}}),d=()=>{const T=B.trim(),K=F.trim();if(!T||!K){Ie(Z("recorderEnterInfo",q));return}const ae=`${T}_${K}`.toLowerCase(),se=Sr.find(Me=>Me.searchId.toLowerCase()===ae);se?S.includes(se.id)?(Ie(Z("recorderExists",q)),u(se)):(E(se.id),Ie(Z("recorderSearchSuccess",q)),setTimeout(()=>{u(se),H(""),Ee("")},1e3)):Ie(Z("recorderNotFound",q))},u=T=>{te.current&&clearTimeout(te.current);const K=ye(T.content);if(qe(K),$(0),x(T),K.length>0&&K[0].type==="direction"){const se=K[0].text.split(/([，。；！])/).reduce((Je,Ut,La)=>(Ut.match(/[，。；！]/)&&La>0?Je[Je.length-1]+=Ut:Ut.trim()&&Je.push(Ut),Je),[]);pe(se),_(0),G(!1);const Me=se.join("").length;let tt=0;const $e=()=>{if(tt++,_(tt),tt<Me){const Je=Math.random()*30+30;te.current=setTimeout($e,Je)}else setTimeout(()=>{G(!0),j==null||j()},500)};$e()}else pe([]),G(!0),j==null||j()};O.useEffect(()=>()=>{te.current&&clearTimeout(te.current)},[]),O.useEffect(()=>{if(f)return;const T=Sr.find(K=>K.isAutoPlay);T&&S.includes(T.id)&&(I(!0),setTimeout(()=>{u(T)},500))},[f,S,I]);const N=O.useMemo(()=>{const T=Ce*kr;return Be.slice(T,T+kr)},[Be,Ce]),M=Math.ceil(Be.length/kr),L=(T,K)=>Be.find((se,Me)=>Me<T&&se.speaker===K)?null:K,R=T=>T.split(/__([^_]+)__/g).map((ae,se)=>se%2===1?o.jsx("span",{className:"text-red-400 border-b border-red-500/40 pb-0.5 mx-1 font-bold tracking-wider",children:ae},se):o.jsx("span",{children:ae},se)),J=T=>T.includes("陌生人1")||T.includes("Stranger 1")?"text-red-600 font-bold":T.includes("苹果")||T.includes("Apple")?"text-stone-400":"text-amber-700",ce=T=>T.includes("陌生人1")||T.includes("Stranger 1")?"text-red-500/90 border-red-900/50 glitch-text":T.includes("苹果")||T.includes("Apple")?"text-stone-200 border-stone-600":"text-amber-500/90 border-amber-900/50";return o.jsxs("div",{className:"flex-1 flex flex-col bg-stone-900 relative",children:[o.jsxs("div",{className:"h-14 sm:h-16 border-b border-stone-800 flex items-center justify-between px-3 sm:px-6 bg-stone-900 shadow-md z-10",children:[o.jsx("button",{onClick:m,className:"text-stone-400 hover:text-white text-[10px] sm:text-xs font-mono tracking-widest uppercase shrink-0",children:"[ OFF ]"}),o.jsxs("div",{className:"flex items-center gap-2 sm:gap-4 flex-1 justify-end",children:[o.jsx("span",{className:"text-[10px] text-stone-400 uppercase tracking-widest hidden lg:inline",children:"Tape Index:"}),o.jsxs("div",{className:"flex bg-stone-800/80 border border-stone-700 rounded-sm overflow-hidden group focus-within:border-stone-500 transition-colors items-center",children:[o.jsx("input",{type:"text",value:B,onChange:T=>H(T.target.value),placeholder:Z("placeholderName",q),className:"bg-transparent text-stone-100 px-1.5 sm:px-2 py-1 text-xs sm:text-sm focus:outline-none w-14 sm:w-20 text-center font-serif-film placeholder-stone-600"}),o.jsx("span",{className:"text-stone-400 font-mono select-none text-xs",children:"_"}),o.jsx("input",{type:"text",value:F,onChange:T=>Ee(T.target.value),placeholder:Z("placeholderDate",q),className:"bg-transparent text-stone-100 px-1.5 sm:px-2 py-1 text-xs sm:text-sm focus:outline-none w-16 sm:w-24 text-center font-serif-film placeholder-stone-600"}),o.jsx("button",{onClick:d,className:"text-stone-300 bg-stone-700 px-2 sm:px-3 py-1 text-[10px] sm:text-xs border-l border-stone-600 hover:bg-stone-600 hover:text-white transition-colors h-full",children:"PLAY"})]})]})]}),o.jsxs("div",{className:"flex-1 flex flex-col md:flex-row overflow-y-auto md:overflow-hidden relative",children:[o.jsxs("div",{className:`
            w-full md:w-64 bg-stone-900 border-r border-stone-800 flex flex-col z-20 
            ${z?"hidden md:flex":"flex"}
        `,children:[o.jsx("div",{className:"p-4 border-b border-stone-800 text-[10px] text-stone-400 font-mono text-center tracking-widest",children:"ARCHIVED RECORDINGS"}),o.jsxs("div",{className:"flex-1 overflow-y-auto p-2 space-y-2 scrollbar-hide",children:[De!==Z("recorderWaiting",rt.Chinese)&&De!==Z("recorderWaiting",rt.English)&&o.jsx("div",{className:"text-xs text-amber-500 p-2 font-mono text-center animate-pulse",children:De}),Ve.map(T=>{const K=(z==null?void 0:z.id)===T.id;return o.jsxs("button",{onClick:()=>u(T),className:`
                                w-full text-left p-3 border rounded-sm transition-all group relative overflow-hidden
                                ${K?"bg-stone-800 border-amber-900/50 text-amber-500 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]":"bg-stone-950/30 border-stone-800 text-stone-400 hover:bg-stone-800 hover:border-stone-600"}
                            `,children:[o.jsxs("div",{className:"flex items-baseline justify-between relative z-10",children:[o.jsx("span",{className:`font-mono text-xs ${K?"text-amber-500":"text-stone-600 group-hover:text-stone-500"}`,children:K?"● PLAYING":"○ READY"}),K&&o.jsxs("span",{className:"text-[10px] animate-pulse",children:["00:0",Math.floor(Math.random()*9),"..."]})]}),o.jsx("div",{className:"mt-2 font-serif-film text-sm tracking-wide truncate relative z-10",children:T.title})]},T.id)})]}),ve>1&&o.jsxs("div",{className:"p-2 border-t border-stone-800 flex justify-between items-center bg-stone-900",children:[o.jsx("button",{onClick:()=>oe(T=>Math.max(0,T-1)),disabled:X===0,className:"text-stone-500 hover:text-stone-300 disabled:opacity-30 disabled:hover:text-stone-500 px-2 py-1 text-xs font-mono",children:"< PREV"}),o.jsxs("span",{className:"text-[10px] text-stone-600 font-mono",children:["PG ",X+1,"/",ve]}),o.jsx("button",{onClick:()=>oe(T=>Math.min(ve-1,T+1)),disabled:X===ve-1,className:"text-stone-500 hover:text-stone-300 disabled:opacity-30 disabled:hover:text-stone-500 px-2 py-1 text-xs font-mono",children:"NEXT >"})]})]}),o.jsxs("div",{className:"flex-1 bg-black relative flex flex-col items-center justify-center p-6 overflow-y-auto",children:[o.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,30,30,1)_0%,rgba(0,0,0,1)_100%)]"}),z?o.jsxs(o.Fragment,{children:[C&&M>1&&o.jsxs(o.Fragment,{children:[o.jsx("button",{onClick:()=>$(T=>Math.max(0,T-1)),disabled:Ce===0,className:"absolute left-0 top-1/2 -translate-y-1/2 z-50 p-3 md:p-4 text-stone-600 hover:text-stone-300 disabled:opacity-0 transition-all opacity-50 hover:opacity-100",children:o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"w-6 h-6 md:w-8 md:h-8",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5L8.25 12l7.5-7.5"})})}),o.jsx("button",{onClick:()=>{Ce===M-1?(z==null?void 0:z.id)==="awen_20231103"&&(D==null||D()):$(T=>T+1)},disabled:Ce===M-1&&(z==null?void 0:z.id)!=="awen_20231103",className:"absolute right-0 top-1/2 -translate-y-1/2 z-50 p-3 md:p-4 text-stone-600 hover:text-stone-300 disabled:opacity-0 transition-all opacity-50 hover:opacity-100",children:o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"w-6 h-6 md:w-8 md:h-8",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})})}),o.jsx("div",{className:"absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-50",children:Array.from({length:M}).map((T,K)=>o.jsx("div",{className:`rounded-full transition-all duration-300 ${K===Ce?"w-2 h-2 bg-[#DA291C] shadow-[0_0_8px_rgba(218,41,28,0.6)]":"w-1.5 h-1.5 bg-stone-800"}`},K))})]}),o.jsxs("div",{className:"w-full max-w-2xl relative z-10 flex flex-col h-full max-h-[70vh] sm:max-h-[600px] mb-8 sm:mb-12 px-4 sm:px-8 md:px-16",children:[o.jsx("div",{className:"text-center mb-8 opacity-70",children:o.jsxs("h2",{className:"text-stone-500 text-xs font-mono tracking-[0.5em] uppercase border-b border-stone-800 pb-2 inline-block",children:[z.title," // PAGE ",Ce+1]})}),o.jsx("div",{className:"flex-1 flex flex-col justify-center space-y-8 min-h-[300px]",children:N.map(T=>{const K=T.id===0;return!C&&!K?null:o.jsx("div",{className:"w-full animate-in fade-in slide-in-from-bottom-2 duration-700 fill-mode-both",children:T.type==="direction"?o.jsx("div",{className:"text-center flex flex-col gap-2 items-center",children:K&&!C?o.jsx("div",{className:"space-y-2",children:(()=>{let se=0;return ze.map((Me,tt)=>{const $e=se,Je=$e+Me.length;if(se+=Me.length,Ae<=$e)return null;const Ut=Math.min(Me.length,Ae-$e),La=Me.slice(0,Ut);return o.jsxs("p",{className:"text-stone-600 italic font-serif-film text-sm md:text-base leading-relaxed tracking-wider px-8",children:[R(La),Ae>$e&&Ae<Je&&o.jsx("span",{className:"inline-block w-2 h-4 bg-stone-500 ml-1 animate-pulse align-middle"})]},tt)})})()}):o.jsx("p",{className:`
                                                    text-stone-600 italic font-serif-film text-sm md:text-base leading-relaxed tracking-wider px-8
                                                    ${T.text.includes("意外中断")?"text-red-800 font-bold animate-pulse":""}
                                                `,children:K?ze.map((se,Me)=>o.jsx("span",{className:"block mb-2",children:R(se)},Me)):R(T.text)})}):o.jsxs("div",{className:"flex flex-col gap-1",children:[T.speaker&&L(T.id,T.speaker)&&o.jsx("span",{className:`
                                                    text-[10px] uppercase tracking-[0.2em] font-mono mb-1 ml-1
                                                    ${J(T.speaker)}
                                                `,children:T.speaker}),o.jsx("p",{className:`
                                                font-serif-film text-lg md:text-xl leading-relaxed pl-4 border-l-2
                                                ${ce(T.speaker||"")}
                                            `,children:R(T.text)})]})},T.id)})})]})]}):o.jsx("div",{className:"text-stone-700 font-mono text-xs tracking-widest text-center animate-pulse",children:"NO TAPE LOADED"})]})]}),o.jsx(Xh,{text:Z("recorderTutorial",q),isVisible:le,onClose:xe})]})},Hh=["Tanqueray Gin","Glen grant","sotol","mezcal","rye","bourbon","singani","flying king rum","g'vine","shochu","vodka","brandy","apple jack","fernet hunter","dolin dry","angostura","amontillado","manzanilla","Montenegro","heering","disaronno","bonal","benedictine","ancho reyes","frangelico","averna","cynar","campari","bigallet china-china","maraschino","fernet branca"],Bh=["ancho reyes","frangelico","averna","cynar","campari","bigallet china-china","maraschino","fernet branca","Tanqueray Gin","Glen grant","sotol","mezcal","rye","bourbon","singani","flying king rum","g'vine","shochu","vodka","brandy","apple jack"],Vh=["fernet hunter","dolin dry","angostura","amontillado","manzanilla","Montenegro","heering","disaronno","bonal","benedictine","ancho reyes","frangelico","averna","cynar","campari","bigallet china-china","maraschino","fernet branca","Tanqueray Gin","Glen grant","sotol","mezcal","rye","bourbon","singani","flying king rum","g'vine","shochu","vodka","brandy","apple jack"],Uh=["fernet hunter","dolin dry","angostura","amontillado","manzanilla","Montenegro","heering","disaronno","bonal","benedictine","ancho reyes","frangelico","averna","cynar","campari","bigallet china-china","maraschino","fernet branca","Tanqueray Gin","Glen grant","sotol","mezcal","rye","bourbon","singani","flying king rum","g'vine","shochu","vodka","brandy","apple jack"],Kp=({onBack:m,unlockedBlogs:S,onUnlockBlog:E,onViewChange:f,isFlickerDisabled:I=!1,onToggleFlicker:D})=>{const{language:j}=Ca(),[q,z]=O.useState(""),[x,B]=O.useState(null),[H,F]=O.useState(""),[Ee,De]=O.useState(null),[Ie,Be]=O.useState(!1);O.useEffect(()=>{if(!localStorage.getItem("the-missing-reel-notebook-tutorial-seen")){const N=setTimeout(()=>Be(!0),1500);return()=>clearTimeout(N)}},[]);const qe=()=>{Be(!1),localStorage.setItem("the-missing-reel-notebook-tutorial-seen","true")},[Ce,$]=O.useState(!1),[le,me]=O.useState(!1),[xe,X]=O.useState(["???","???","???","???"]),[oe,we]=O.useState(!1),[ut,ve]=O.useState(0),[Ve,ze]=O.useState(!1),[pe,Ae]=O.useState(0),_=$i.find(u=>u.id==="intro");O.useEffect(()=>{f==null||f(Ee!==null)},[Ee,f]);const C=()=>{const u=q.toLowerCase().trim();if(!u)return;if(u==="dram elysium"){me(!0),setTimeout(()=>{$(!0),me(!1),z(""),F(""),X(["READY","TO","SPIN","..."])},800);return}const N=u.replace("！","!"),M=$i.find(L=>L.password.toLowerCase()===N);M?(S.includes(M.id)?(F("该日志已解锁。"),De(M.id)):(E(M.id),B(M.title),setTimeout(()=>B(null),1500),F(""),De(M.id)),z("")):F(j==="zh"?"鸡尾酒配方没10000个也有9000个，这么试是学不到真本事的":"Ten thousand recipes. You'll never learn them just by taking wild stabs at it.")},G=()=>{if(oe)return;we(!0),ve(L=>L+1);let u=0;const N=20,M=setInterval(()=>{X([Hh[Math.floor(Math.random()*Hh.length)],Bh[Math.floor(Math.random()*Bh.length)],Vh[Math.floor(Math.random()*Vh.length)],Uh[Math.floor(Math.random()*Uh.length)]]),u++,u>=N&&(clearInterval(M),we(!1))},80)},te=u=>u.split(/(\[IMAGE:[^\]]+\])/g).map((M,L)=>{const R=M.match(/\[IMAGE:([^\]]+)\]/);if(R){const ce=R[1];return o.jsx("div",{className:"my-6 flex justify-center",children:o.jsx("img",{src:U(ce),alt:"Decoration",className:"max-w-[200px] h-auto rounded-sm shadow-md border-2 border-stone-200 bg-white p-2"})},`img-${L}`)}return M.split(/__([^_]+)__/g).map((ce,T)=>T%2===1?o.jsx("span",{className:"font-bold text-red-600 border-b-2 border-red-500/40 px-1 transform -rotate-2 inline-block",children:ce},`${L}-${T}`):o.jsx("span",{children:ce},`${L}-${T}`))}),ye=u=>{const{content:N}=u,M="💡 更新",L=N.split(M),R=L[0],J=L.length>1?L.slice(1).join(M):null,ce=R.indexOf(`

`);let T="",K=R;if(ce!==-1){const ae=R.substring(0,ce).trim();/[0-9]/.test(ae)&&/[a-zA-Z]/.test(ae)&&(T=ae,K=R.substring(ce).trim())}return o.jsxs(o.Fragment,{children:[T&&o.jsxs("div",{className:"mb-8 border border-stone-300 p-6 bg-[#fcfbf9] shadow-sm relative mx-2 text-center",children:[o.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-[10px] font-mono tracking-widest text-stone-400 uppercase",children:"COCKTAIL RECIPE"}),(()=>{const ae=T.split(`
`),se=ae[0],Me=ae.slice(1).join(`
`);return o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"mb-4",children:o.jsx("h3",{className:"text-xl md:text-2xl font-black text-stone-900 font-serif-film uppercase tracking-widest border-b-2 border-stone-900/10 pb-2 inline-block px-8 transform -rotate-1",children:te(se)})}),o.jsx("div",{className:"text-sm md:text-base font-serif-film text-stone-800 whitespace-pre-wrap leading-loose tracking-wide",children:te(Me)})]})})()]}),o.jsx("div",{className:"text-base md:text-lg leading-relaxed text-indigo-900 whitespace-pre-wrap font-hand font-bold tracking-wide opacity-90 px-2",children:K.startsWith("（")&&K.indexOf("）")!==-1?(()=>{const ae=K.indexOf("）"),se=K.substring(1,ae),Me=K.substring(ae+1),tt=se.split(/([，。；！])/).reduce(($e,Je,Ut,La)=>(Je.match(/[，。；！]/)&&Ut>0?$e[$e.length-1]+=Je:Je.trim()&&$e.push(Je),$e),[]);return o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"mb-8 pl-4 border-l-2 border-indigo-300/50 italic text-indigo-700/80 font-serif text-sm md:text-base space-y-2",children:tt.map(($e,Je)=>o.jsx("div",{children:$e.trim()},Je))}),te(Me.trim())]})})():te(K)}),J&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"my-6 border-t-2 border-dashed border-indigo-300 relative mx-2",children:o.jsx("span",{className:"absolute -top-3 left-0 bg-white pr-2 text-xs font-bold text-indigo-400 font-mono tracking-widest",children:"LATER ADDED"})}),o.jsxs("div",{className:"relative pl-4 border-l-4 border-indigo-900/20 mx-2",children:[o.jsx("h3",{className:"font-hand text-indigo-800 font-bold text-lg mb-2 flex items-center gap-2",children:"💡 更新:"}),o.jsx("div",{className:"text-sm md:text-base leading-relaxed text-indigo-900/90 whitespace-pre-wrap font-hand tracking-wide font-bold",children:te(J.startsWith("：")?J.substring(1):J)})]})]}),u.attachments&&u.attachments.length>0&&u.attachmentType==="novel"&&o.jsxs("button",{onClick:()=>{ze(!0),Ae(0)},className:"mt-8 w-full relative group cursor-pointer text-left focus:outline-none",children:[o.jsx("div",{className:"absolute inset-0 bg-stone-800 shadow-md transform rotate-1 rounded-sm translate-y-1 translate-x-1"}),o.jsxs("div",{className:"relative bg-[#f5f5f0] border-l-4 border-stone-800 p-4 h-32 flex items-center justify-between overflow-hidden hover:bg-white transition-colors border border-stone-300",children:[o.jsxs("div",{className:"flex flex-col z-10",children:[o.jsx("span",{className:"font-serif text-xl text-stone-900 tracking-widest font-black uppercase mb-1",children:u.title}),o.jsx("span",{className:"text-xs font-sans text-stone-500 font-normal",children:"Scanned Document • PDF Source"})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"text-xs font-mono font-bold text-stone-400 uppercase tracking-widest group-hover:text-stone-900 transition-colors",children:"READ ATTACHMENT"}),o.jsx("div",{className:"w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors",children:"↗"})]}),o.jsx("div",{className:"absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#f5f5f0] to-transparent pointer-events-none"})]})]})]})},d=Ee?$i.find(u=>u.id===Ee):null;return o.jsxs("div",{className:"flex-1 bg-stone-200 flex flex-col relative overflow-hidden text-stone-800 font-sans",children:[o.jsxs("div",{className:"bg-sky-700 text-white p-4 border-b-4 border-sky-900 flex justify-between items-center shadow-lg relative z-20",children:[o.jsxs("div",{children:[o.jsx("h1",{className:"text-xl font-bold tracking-tight",children:Z("blogTitle",j)}),o.jsx("p",{className:"text-xs text-sky-200 mt-1",children:Z("blogSubtitle",j)})]}),o.jsxs("div",{className:"flex items-center gap-3",children:[D&&o.jsx("button",{onClick:D,className:`text-[10px] px-2 py-1 rounded border transition-colors ${I?"bg-stone-600 border-stone-500 text-stone-300 hover:bg-stone-500":"bg-sky-600 border-sky-400 text-white hover:bg-sky-500"}`,children:Z(I?"effectsOff":"effectsOn",j)}),o.jsx("button",{onClick:m,className:"text-xs bg-sky-800 hover:bg-sky-600 px-3 py-1 rounded border border-sky-400",children:Z("logout",j)})]})]}),o.jsx(Xh,{text:"都出来写博客了，怎么还要这样藏来藏去，看来我要在其他地方获得一些酒名的线索才能偷窥他的树洞。这个闪来闪去的特效又是什么，有没有考虑过读者的眼睛，算他有良心还放了个可以关闭的按钮。",isVisible:Ie,onClose:qe}),x&&o.jsx("div",{className:"absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-300 pointer-events-none",children:o.jsxs("div",{className:"bg-white p-8 border-4 border-green-600 shadow-2xl transform rotate-3 flex flex-col items-center",children:[o.jsx("div",{className:"text-green-600 font-bold border-2 border-green-600 rounded-full w-16 h-16 flex items-center justify-center text-3xl mb-4 animate-bounce",children:"✓"}),o.jsx("h2",{className:"text-2xl font-black text-stone-800 uppercase tracking-widest",children:"New Entry"}),o.jsxs("p",{className:"text-stone-600 mt-2 font-serif text-lg italic",children:['"',x,'"']}),o.jsx("p",{className:"text-xs text-stone-400 mt-4 font-mono",children:"UNLOCKED"})]})}),o.jsxs("div",{className:"flex-1 overflow-y-auto p-4 md:p-8 bg-stone-200 relative z-10",children:[Ee&&o.jsx("button",{onClick:()=>De(null),className:"sticky top-0 left-0 ml-auto mb-4 text-[10px] sm:text-xs font-mono text-stone-500 hover:text-sky-600 flex items-center gap-1 bg-white/95 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-2 rounded border border-stone-300 shadow-lg transition-all hover:shadow-xl hover:border-sky-400 z-50 w-fit",children:Z("backToIndex",j)}),!d&&o.jsx("div",{className:"absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-noise.png')] opacity-10 pointer-events-none z-0"}),o.jsx("div",{className:"max-w-2xl mx-auto space-y-8 pb-20 relative z-10",children:Ce?o.jsxs("div",{className:"animate-in zoom-in-95 duration-500 relative",children:[o.jsx("button",{onClick:()=>$(!1),className:"mb-6 text-xs font-mono font-bold text-stone-500 hover:text-sky-700 flex items-center gap-1 uppercase tracking-widest transition-colors",children:"← Back to Blog"}),o.jsxs("div",{className:"relative p-8 bg-[#f5f0e6] rounded-sm border-2 border-stone-800 shadow-[4px_4px_0px_rgba(40,30,20,1)] max-w-3xl mx-auto rotate-1",children:[o.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(#00000008_1px,transparent_1px),linear-gradient(90deg,#00000008_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none rounded-sm overflow-hidden"}),o.jsx("div",{className:"absolute -top-10 -right-10 w-40 h-40 border-[16px] border-[#8b451310] rounded-full blur-[2px] pointer-events-none"}),o.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-amber-100/80 backdrop-blur-sm shadow-sm rotate-1 z-10 box-decoration-clone",children:o.jsx("div",{className:"absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise-lines.png')] opacity-20"})}),o.jsx("style",{children:`
                                    /* Fast efficient shake for the mixer */
                                    @keyframes shake-fast {
                                        0% { transform: translate(0, 0) rotate(0deg); }
                                        25% { transform: translate(-1px, 1px) rotate(-2deg); }
                                        50% { transform: translate(1px, -1px) rotate(2deg); }
                                        75% { transform: translate(-1px, -1px) rotate(-1deg); }
                                        100% { transform: translate(0, 0) rotate(0deg); }
                                    }
                                    
                                    /* Pinwheel/Windmill rotation for the logo - 10x faster */
                                    @keyframes pinwheel-spin {
                                        0% { transform: rotate(0deg); }
                                        100% { transform: rotate(360deg); }
                                    }
                                    
                                    /* Camera flash overlay fade-out */
                                    @keyframes flash-overlay {
                                        0% { opacity: 1; }
                                        15% { opacity: 0.8; }
                                        40% { opacity: 0.4; }
                                        70% { opacity: 0.15; }
                                        100% { opacity: 0; }
                                    }

                                    .animate-shake-mixer {
                                        animation: shake-fast 0.2s linear infinite;
                                        transform-origin: center center;
                                    }

                                    .animate-shake-logo {
                                        animation: pinwheel-spin 0.04s ease-in-out infinite;
                                        transform-origin: 70% center;
                                    }
                                    
                                    .animate-flash-overlay {
                                        animation: flash-overlay 2.5s ease-out forwards;
                                    }

                                    .hand-drawn-border {
                                        border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
                                    }
                                `}),o.jsxs("div",{className:"text-center mb-10 relative z-10",children:[oe&&o.jsx("div",{className:"absolute inset-0 bg-white pointer-events-none animate-flash-overlay z-50 rounded-lg"}),o.jsx("h2",{className:"font-serif-film text-4xl text-stone-900 mb-4 tracking-tight",style:{textShadow:"2px 2px 0px rgba(0,0,0,0.1)"},children:"Dram Elysium"}),o.jsx("div",{className:"relative inline-block",children:o.jsxs("p",{className:"font-hand text-stone-600 text-sm md:text-base leading-relaxed max-w-lg mx-auto bg-white/60 p-4 border-2 border-stone-800 hand-drawn-border shadow-sm transform -rotate-1",children:['"',Z("dramElysiumIntro",j),'"',o.jsx("br",{}),o.jsx("span",{className:"block mt-2 font-bold text-stone-800 text-right",children:Z("dramElysiumSignature",j)})]})})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-3 mb-12 px-4 relative z-10",children:[0,1,2,3].map(u=>o.jsxs("div",{className:"bg-white border-2 border-stone-800 p-2 flex flex-col items-center justify-center h-28 relative shadow-[3px_3px_0px_#2c2c2c] hand-drawn-border transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_#2c2c2c]",children:[o.jsxs("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2 bg-stone-800 text-white text-[9px] px-2 py-0.5 min-w-[50px] text-center transform rotate-1 rounded-sm",children:["ITEM #",u+1]}),o.jsx("span",{className:`
                                                font-hand text-lg md:text-xl text-stone-900 text-center leading-tight font-bold
                                                ${oe?"opacity-40 blur-[1px]":""}
                                                transition-all duration-100
                                                break-all
                                            `,children:xe[u]})]},u))}),o.jsx("div",{className:"flex justify-center -mb-12 relative z-30",children:o.jsxs("button",{onClick:G,disabled:oe,className:`
                                            group relative w-24 h-24 md:w-32 md:h-32
                                            transition-all duration-200 
                                            ${oe?"animate-shake-mixer cursor-default":"hover:scale-105 active:scale-95 cursor-pointer"}
                                        `,children:[o.jsx("img",{src:U("/assets/shaker_cute.png"),alt:"Shake for Luck",className:"w-full h-full object-contain drop-shadow-md opacity-90 contrast-125 sepia-[.2]"}),o.jsx("div",{className:`
                                            absolute top-0 -right-8 bg-white border-2 border-stone-800 px-3 py-2 rounded-2xl rounded-bl-none shadow-[2px_2px_0_rgba(0,0,0,0.1)]
                                            transition-all duration-300 transform
                                            ${oe?"opacity-100 scale-105 rotate-12":"opacity-0 group-hover:opacity-100 group-hover:-translate-y-2"}
                                        `,children:o.jsx("span",{className:"font-hand text-stone-800 text-xs font-bold block whitespace-nowrap",children:oe?"Mixing...":"Shake me!"})})]})}),o.jsx("div",{className:`absolute bottom-6 right-6 w-14 h-14 md:w-20 md:h-20 transition-transform duration-200 z-40 ${oe?"animate-shake-logo":"hover:rotate-12"}`,children:o.jsx("img",{src:U("/assets/dram_logo.png"),alt:"Dram Logo",className:"w-full h-full object-contain opacity-90 drop-shadow-sm"})})]})]}):d?o.jsxs("div",{className:"relative group no-caret",children:[o.jsxs("div",{className:"bg-white border border-stone-300 p-6 shadow-sm relative z-20",children:[o.jsx("div",{className:"border-b border-dashed border-stone-300 pb-2 mb-4",children:o.jsx("h2",{className:"text-lg font-bold text-sky-800 font-mono",children:d.title})}),ye(d),o.jsxs("div",{className:"mt-6 pt-4 border-t border-stone-100 text-[10px] text-stone-400 text-right font-mono",children:[Z("postedBy",j)," Apple"]})]}),d.stickyNote&&o.jsxs("div",{className:`
                                relative w-full md:w-64 md:ml-auto
                                bg-yellow-200 p-4 shadow-[5px_5px_15px_rgba(0,0,0,0.2)] 
                                transform rotate-1 md:rotate-2 border border-yellow-300
                                mt-8 mb-4 font-hand text-stone-800 text-xs leading-relaxed z-20
                           `,children:[o.jsx("div",{className:"w-8 h-3 bg-yellow-400/50 absolute -top-1 left-1/2 -translate-x-1/2 opacity-50"}),o.jsx("h4",{className:"font-bold border-b border-yellow-700/20 pb-1 mb-2 text-yellow-900/80",children:"IMPORTANT TIPS:"}),o.jsx("div",{className:"space-y-3",children:d.stickyNote.split(`
`).map((u,N)=>o.jsxs("div",{className:"relative",children:[o.jsx("p",{className:`relative z-10 ${N===4?"font-bold text-stone-900":""}`,children:u}),N===4&&o.jsx("div",{className:"absolute -inset-2 pointer-events-none select-none",children:o.jsx("svg",{className:"w-full h-full overflow-visible opacity-80",viewBox:"0 0 300 60",preserveAspectRatio:"none",children:o.jsx("path",{d:"M5,30 Q30,5 150,5 Q270,5 290,30 Q300,55 150,55 Q10,55 5,30 M10,32 Q50,60 120,58",fill:"none",stroke:"#c2410c",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})})})]},N))})]})]}):o.jsxs("div",{className:`space-y-8 animate-in slide-in-from-left-4 duration-300 ${le?"opacity-0 scale-95 transition-all duration-700":""}`,children:[_&&o.jsxs("div",{className:"relative transform rotate-[-1deg] mb-8",children:[o.jsx("div",{className:"absolute top-1 left-1 w-full h-full bg-black/10 rounded-sm"}),o.jsxs("div",{className:"relative bg-[#f0eadd] p-6 border border-[#d6cbb8] shadow-md rounded-sm",children:[o.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-red-900/10 blur-[1px] transform rotate-1"}),o.jsxs("div",{className:"border-b border-stone-300 pb-2 mb-2 flex justify-between",children:[o.jsxs("span",{className:"text-xs font-mono text-stone-500 uppercase tracking-widest",children:[Z("readme",j),".TXT"]}),o.jsx("span",{className:"text-xs font-mono text-stone-400",children:"2020.05.20"})]}),o.jsx("p",{className:"font-hand text-lg text-stone-800 leading-relaxed font-bold",children:_.content})]})]}),o.jsxs("div",{className:"bg-stone-900 border-2 border-stone-700 p-4 shadow-md rounded-sm caret-slow",children:[o.jsx("label",{className:"block text-xs font-bold text-stone-400 uppercase mb-2",children:Z("searchLabel",j)}),o.jsxs("div",{className:"flex gap-2",children:[o.jsx("input",{type:"text",value:q,onChange:u=>z(u.target.value),placeholder:Z("searchPlaceholder",j),className:`flex-1 bg-stone-800 text-stone-200 border border-stone-600 p-2 text-sm focus:outline-none focus:border-sky-500 font-mono ${le?"border-amber-400 bg-amber-50 text-amber-600 shadow-[0_0_30px_rgba(251,191,36,0.4)] scale-105 transition-all duration-300":""}`,onKeyDown:u=>u.key==="Enter"&&C()}),o.jsx("button",{onClick:C,className:"bg-stone-200 border border-stone-400 px-4 text-xs font-bold hover:bg-stone-300 text-stone-700 transition-colors",children:Z("unlock",j)})]}),H&&o.jsx("p",{className:"text-xs text-red-400 mt-2",children:H})]}),o.jsxs("div",{children:[o.jsxs("h3",{className:"text-stone-500 font-mono text-xs uppercase tracking-widest mb-4 border-b border-stone-300 pb-2",children:[Z("archivedEntries",j)," (",S.filter(u=>u!=="intro").length,")"]}),o.jsx("div",{className:"grid gap-3",children:$i.map(u=>!S.includes(u.id)||u.id==="intro"?null:o.jsxs("button",{onClick:()=>De(u.id),className:"bg-white border border-stone-300 p-4 shadow-sm hover:shadow-md hover:border-sky-400 transition-all text-left flex items-center group relative overflow-hidden",children:[o.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-1 bg-stone-300 group-hover:bg-sky-500 transition-colors"}),o.jsx("div",{className:"w-10 h-10 bg-stone-100 flex items-center justify-center mr-4 rounded-sm border border-stone-200",children:o.jsx("span",{className:"text-xl",children:"📄"})}),o.jsxs("div",{children:[o.jsx("h4",{className:"font-bold text-stone-700 group-hover:text-sky-700 font-mono",children:u.title}),o.jsx("p",{className:"text-[10px] text-stone-400 font-mono uppercase",children:Z("archiveDateLabel",j)})]}),o.jsx("span",{className:"ml-auto text-stone-300 group-hover:text-sky-500 font-mono text-xs",children:"OPEN →"})]},u.id))})]})]})})]}),Ve&&(d==null?void 0:d.attachments)&&o.jsx("div",{className:"fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4 backdrop-blur-md animate-in fade-in duration-300",onClick:()=>ze(!1),children:o.jsxs("div",{className:"relative w-full max-w-4xl max-h-full flex flex-col items-center my-8",onClick:u=>u.stopPropagation(),children:[o.jsxs("div",{className:"relative w-full max-h-[85vh] shadow-2xl bg-white rounded-sm flex flex-col md:flex-row overflow-hidden",children:[o.jsx("div",{className:"hidden md:flex flex-none w-16 items-center justify-center bg-stone-50 border-r border-stone-100 z-10 cursor-pointer hover:bg-stone-100 transition-colors",onClick:u=>{u.stopPropagation(),pe>0&&Ae(N=>N-1)},children:pe>0?o.jsx("button",{className:"p-4 text-stone-400 hover:text-stone-800 transition-colors","aria-label":"Previous Page",children:o.jsx("span",{className:"text-4xl font-light leading-none",children:"←"})}):o.jsx("div",{className:"w-16"})}),o.jsxs("div",{className:"relative flex-1 overflow-y-auto p-8 md:p-16 scrollbar-thin scrollbar-thumb-stone-300 scrollbar-track-transparent",children:[o.jsxs("button",{onClick:()=>ze(!1),className:"absolute top-4 right-6 z-20 text-stone-300 hover:text-stone-500 font-serif italic text-sm transition-colors flex items-center gap-1",children:[o.jsx("span",{children:"CLOSE"})," ✕"]}),d.attachments[pe].endsWith(".png")||d.attachments[pe].endsWith(".jpg")?o.jsx("img",{src:U(d.attachments[pe]),alt:`Page ${pe+1}`,className:"w-full h-auto block rounded-sm opacity-90 transition-opacity duration-500"}):o.jsxs("div",{className:"max-w-2xl mx-auto font-serif text-stone-800 leading-relaxed text-lg whitespace-pre-wrap pb-12",children:[o.jsxs("div",{className:"flex justify-between items-center border-b border-stone-200 pb-2 mb-8",children:[o.jsxs("h3",{className:"text-sm font-sans text-stone-400 uppercase tracking-widest",children:["Page ",pe+1]}),o.jsxs("span",{className:"text-xs font-mono text-stone-300",children:[d.attachments[pe].length," chars"]})]}),d.attachments[pe].includes("「所以，你找到真相了吗？」")?o.jsxs(o.Fragment,{children:[d.attachments[pe].replace("「所以，你找到真相了吗？」",""),o.jsxs("div",{className:"flex items-center gap-4 mt-8 justify-end",children:[o.jsx("span",{className:"font-serif italic",children:"「所以，你找到真相了吗？」"}),o.jsx("img",{src:U("/hunstler_logo.jpg"),alt:"Hunstler Klub",className:"w-16 h-auto opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"})]})]}):d.attachments[pe]]}),o.jsxs("div",{className:"flex md:hidden justify-between mt-12 pt-8 border-t border-stone-100",children:[o.jsx("button",{disabled:pe===0,onClick:u=>{u.stopPropagation(),Ae(N=>N-1)},className:`px-4 py-2 rounded-sm border ${pe===0?"border-stone-100 text-stone-200":"border-stone-300 text-stone-600"}`,children:"Previous"}),o.jsx("button",{disabled:pe===d.attachments.length-1,onClick:u=>{u.stopPropagation(),Ae(N=>N+1)},className:`px-4 py-2 rounded-sm border ${pe===d.attachments.length-1?"border-stone-100 text-stone-200":"border-stone-800 bg-stone-800 text-white"}`,children:"Next"})]})]}),o.jsx("div",{className:"hidden md:flex flex-none w-16 items-center justify-center bg-stone-50 border-l border-stone-100 z-10 cursor-pointer hover:bg-stone-100 transition-colors",onClick:u=>{u.stopPropagation(),pe<d.attachments.length-1&&Ae(N=>N+1)},children:pe<d.attachments.length-1?o.jsx("button",{className:"p-4 text-stone-400 hover:text-stone-800 transition-colors","aria-label":"Next Page",children:o.jsx("span",{className:"text-4xl font-light leading-none",children:"→"})}):o.jsx("div",{className:"w-16"})})]}),o.jsxs("div",{className:"mt-4 flex flex-col items-center gap-2",children:[o.jsx("div",{className:"flex gap-2",children:d.attachments.map((u,N)=>o.jsx("div",{className:`w-1.5 h-1.5 rounded-full transition-all duration-300 ${N===pe?"bg-stone-200 scale-125":"bg-stone-700"}`},N))}),o.jsxs("div",{className:"text-xs font-mono text-stone-500 uppercase tracking-[0.2em] flex items-center gap-2",children:[o.jsxs("span",{children:["ITEM ",pe+1,".",d.attachments.length]}),o.jsx("span",{className:"w-8 h-[1px] bg-stone-700"}),o.jsx("span",{children:"SCANNED_DOC"})]})]})]})})]})},Wp=({film:m,onBack:S})=>{const E=Array.from({length:16}),f=Array.isArray(m.contentImage)?m.contentImage:[m.contentImage,m.contentImage],I=f[0],D=f[1]||f[0],[j,q]=O.useState(null);return o.jsxs("div",{className:"flex-1 bg-black flex flex-col relative p-2 sm:p-4 overflow-hidden",children:[o.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(40,40,40,1)_0%,rgba(0,0,0,1)_90%)] z-0"}),o.jsx("div",{className:"absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-0 pointer-events-none animate-pulse"}),o.jsx("button",{onClick:S,className:"absolute top-3 sm:top-6 left-3 sm:left-6 text-stone-500 hover:text-white z-30 text-[10px] sm:text-xs font-mono tracking-widest uppercase",children:"[ RETURN ]"}),o.jsx("div",{className:"flex-1 flex items-center justify-center relative z-10 perspective-1000",children:o.jsxs("div",{className:"relative bg-black border-y-4 sm:border-y-8 border-black shadow-[0_0_50px_rgba(255,200,150,0.1)] transform rotate-1 scale-90 sm:scale-100 md:scale-110 lg:scale-125",children:[o.jsx("div",{className:"absolute top-1/2 left-0 right-0 h-40 -translate-y-1/2 bg-amber-100/10 blur-xl"}),o.jsx("div",{className:"h-6 flex justify-between items-center px-2 gap-2 bg-[#1a1a1a] border-b border-stone-800",children:E.map((z,x)=>o.jsx("div",{className:"w-3 h-4 bg-black/80 rounded-[2px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]"},`top-${x}`))}),o.jsxs("div",{className:"flex gap-[2px] bg-black py-4 px-4 overflow-hidden relative",children:[o.jsxs("div",{className:"relative w-48 sm:w-64 md:w-80 aspect-[4/3] bg-black overflow-hidden border border-stone-800/50 cursor-pointer hover:border-amber-500/50 transition-colors",onClick:()=>q(I),children:[o.jsx("img",{src:I,alt:"Frame 1",className:`w-full h-full object-cover opacity-90 filter sepia-[0.4] contrast-[1.1] brightness-[0.9] ${m.id==="reel_06"?"saturate-[0.7]":""} ${["reel_08","reel_09"].includes(m.id)?"brightness-[0.95] contrast-[1.2] saturate-[0.8] sepia-[0.65] blur-[0.6px]":""}`}),m.id==="reel_06"&&o.jsx("div",{className:"absolute inset-0 pointer-events-none z-10 overflow-hidden",children:o.jsx("div",{className:"absolute inset-0 backdrop-blur-[1px]",style:{maskImage:"radial-gradient(circle at 35% 75%, transparent 25%, black 80%)",WebkitMaskImage:"radial-gradient(circle at 35% 75%, transparent 25%, black 80%)"}})}),["reel_08","reel_09"].includes(m.id)&&o.jsx("div",{className:"absolute inset-0 pointer-events-none z-20 bg-[radial-gradient(circle,transparent_35%,rgba(0,0,0,0.5)_100%)]"}),o.jsx("span",{className:"absolute bottom-1 right-2 text-[8px] font-mono text-amber-500/50 transform -scale-x-100",children:"8mm 2401"}),o.jsx("div",{className:"absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/50 pointer-events-none",children:o.jsx("span",{className:"text-white text-xs font-mono",children:"[ CLICK TO ZOOM ]"})})]}),o.jsxs("div",{className:"relative w-48 sm:w-64 md:w-80 aspect-[4/3] bg-black overflow-hidden border border-stone-800/50 cursor-pointer hover:border-amber-500/50 transition-colors",onClick:()=>q(D),children:[o.jsx("img",{src:D,alt:"Frame 2",className:`w-full h-full object-cover opacity-90 filter sepia-[0.4] contrast-[1.1] brightness-[0.9] ${m.id==="reel_06"?"saturate-[0.7]":""} ${["reel_08","reel_09"].includes(m.id)?"brightness-[0.95] contrast-[1.2] saturate-[0.8] sepia-[0.65] blur-[0.6px]":""}`}),m.id==="reel_06"&&o.jsx("div",{className:"absolute inset-0 pointer-events-none z-10 overflow-hidden",children:o.jsx("div",{className:"absolute inset-0 backdrop-blur-[1px]",style:{maskImage:"radial-gradient(circle at 35% 75%, transparent 25%, black 80%)",WebkitMaskImage:"radial-gradient(circle at 35% 75%, transparent 25%, black 80%)"}})}),["reel_08","reel_09"].includes(m.id)&&o.jsx("div",{className:"absolute inset-0 pointer-events-none z-20 bg-[radial-gradient(circle,transparent_35%,rgba(0,0,0,0.5)_100%)]"}),o.jsx("div",{className:"absolute inset-0 border-l border-white/10 mx-10"}),o.jsx("span",{className:"absolute bottom-1 right-2 text-[8px] font-mono text-amber-500/50 transform -scale-x-100",children:"8mm 2402"}),o.jsx("div",{className:"absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/50 pointer-events-none",children:o.jsx("span",{className:"text-white text-xs font-mono",children:"[ CLICK TO ZOOM ]"})})]}),o.jsx("div",{className:"absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise-lines.png')] opacity-30 pointer-events-none mix-blend-overlay"})]}),o.jsx("div",{className:"h-6 flex justify-between items-center px-2 gap-2 bg-[#1a1a1a] border-t border-stone-800",children:E.map((z,x)=>o.jsx("div",{className:"w-3 h-4 bg-black/80 rounded-[2px] shadow-[inset_0_-1px_2px_rgba(255,255,255,0.1)]"},`bottom-${x}`))})]})}),o.jsx("div",{className:"absolute bottom-12 left-0 right-0 text-center z-30 px-8",children:o.jsxs("div",{className:"inline-block relative",children:[o.jsx("div",{className:"absolute -inset-4 bg-black/90 blur-md"}),o.jsx("p",{className:"relative text-stone-200 font-serif-film text-xs sm:text-sm md:text-lg tracking-wide leading-relaxed max-w-2xl cursor-text select-text px-2",style:{userSelect:"text",WebkitUserSelect:"text"},children:m.contentDesc})]})}),o.jsx("style",{jsx:!0,children:`
        p::selection {
          background-color: rgba(217, 119, 6, 0.3);
          color: rgb(214, 211, 209);
        }
        p::-moz-selection {
          background-color: rgba(217, 119, 6, 0.3);
          color: rgb(214, 211, 209);
        }
      `}),j&&o.jsxs("div",{className:"fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-200",onClick:()=>q(null),children:[o.jsx("button",{className:"absolute top-6 right-6 text-stone-400 hover:text-white text-xs font-mono tracking-widest uppercase z-10 transition-colors",onClick:()=>q(null),children:"[ CLOSE ]"}),o.jsxs("div",{className:"relative max-w-[90vw] max-h-[90vh] flex items-center justify-center",children:[o.jsx("img",{src:j,alt:"Zoomed frame",className:"max-w-full max-h-[90vh] object-contain shadow-2xl",onClick:z=>z.stopPropagation()}),o.jsx("div",{className:"absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise-lines.png')] opacity-20 pointer-events-none mix-blend-overlay"})]}),o.jsx("div",{className:"absolute bottom-6 left-0 right-0 text-center",children:o.jsx("span",{className:"text-stone-500 text-xs font-mono tracking-wide",children:"[ CLICK ANYWHERE TO CLOSE ]"})})]})]})},Jp=({film:m,onBack:S})=>{const E=Array.isArray(m.contentImage)?m.contentImage:[m.contentImage],[f,I]=O.useState(null);return o.jsxs("div",{className:"flex-1 bg-[#050505] flex flex-col relative p-8 overflow-hidden",children:[o.jsx("div",{className:"absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] z-0 pointer-events-none"}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black/0 to-black/60 z-0 pointer-events-none"}),o.jsxs("div",{className:"relative z-30 flex justify-between items-center mb-8 px-4",children:[o.jsx("button",{onClick:S,className:"text-stone-500 hover:text-white text-xs font-mono tracking-widest uppercase transition-colors",children:"[ CLOSE ARCHIVE ]"}),o.jsx("div",{className:"text-stone-600 font-mono text-[10px] tracking-[0.2em] uppercase",children:"Batch 00 • Shredded Fragments • Processed Oct 1984"})]}),o.jsx("div",{className:"flex-1 relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 overflow-y-auto px-4 scrollbar-hide pb-32",children:E.map((D,j)=>o.jsxs("div",{onClick:()=>I(j),className:`group relative aspect-[4/3] bg-black shadow-2xl transition-all duration-500 hover:scale-105 hover:z-40 
              border-4 border-stone-900 overflow-hidden cursor-zoom-in
            `,style:{transform:`rotate(${j%5-2}deg) translate(${Math.sin(j)*5}px, ${Math.cos(j)*10}px)`,zIndex:10+j%5},children:[o.jsx("img",{src:D||"",alt:`Fragment ${j+1}`,className:"w-full h-full object-cover filter sepia-[0.5] contrast-[1.2] brightness-[0.8] saturate-[0.7] blur-[0.4px] opacity-80 group-hover:opacity-100 group-hover:brightness-100 group-hover:blur-none transition-all duration-300"}),(j===2||j===6)&&o.jsx("div",{className:"absolute top-[8%] right-[12%] w-[25%] h-[30%] pointer-events-none z-30 overflow-hidden opacity-25 mix-blend-overlay group-hover:opacity-32 transition-opacity duration-700",children:o.jsx("img",{src:U("/assets/ghost_overlay.png"),alt:"",className:"w-full h-full object-contain opacity-50",style:{filter:"blur(3px) contrast(0.6) brightness(1.5) grayscale(0.3)"}})}),(j===2||j===6)&&o.jsxs("div",{className:"absolute inset-0 pointer-events-none z-40 overflow-hidden",children:[o.jsx("div",{className:"absolute left-[20%] top-0 bottom-0 w-[1px] bg-white/20 blur-[0.5px]"}),o.jsx("div",{className:"absolute left-[22%] top-0 bottom-0 w-[0.5px] bg-white/10"}),o.jsx("div",{className:"absolute right-[35%] top-0 bottom-0 w-[1px] bg-stone-200/20 rotate-1"})]}),o.jsx("div",{className:"absolute inset-0 pointer-events-none z-20 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.6)_100%)]"}),o.jsx("div",{className:"absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise-lines.png')] opacity-30 pointer-events-none mix-blend-overlay"}),o.jsx("div",{className:"absolute inset-0 border-[8px] border-black/40 pointer-events-none box-border"}),o.jsx("div",{className:"absolute bottom-2 left-2 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm border border-stone-800/50",children:o.jsxs("span",{className:"text-[8px] font-mono text-stone-400 uppercase tracking-tighter",children:["FRA_",j.toString().padStart(2,"0")]})})]},`${m.id}-fragment-${j}`))}),o.jsx("div",{className:"absolute bottom-0 left-0 right-0 p-8 z-30 pointer-events-none",children:o.jsx("div",{className:"max-w-2xl mx-auto",children:o.jsxs("div",{className:"bg-black/80 backdrop-blur-lg p-6 border border-stone-800/50 shadow-2xl transform -rotate-1",children:[o.jsxs("h2",{className:"text-stone-500 font-mono text-[10px] uppercase tracking-widest mb-2 border-b border-stone-800 pb-2 flex justify-between",children:[o.jsx("span",{children:"Investigation Note"}),o.jsx("span",{className:"opacity-50",children:"Confidential"})]}),o.jsx("p",{className:"text-stone-300 font-serif text-sm italic leading-relaxed",children:m.contentDesc})]})})}),f!==null&&o.jsx("div",{className:"fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-8 md:p-16 backdrop-blur-sm cursor-zoom-out",onClick:()=>I(null),children:o.jsxs("div",{className:"relative max-w-5xl w-full aspect-[4/3] bg-black shadow-[0_0_100px_rgba(0,0,0,0.5)] border-2 border-stone-800 overflow-hidden",onClick:D=>D.stopPropagation(),children:[o.jsx("img",{src:E[f],alt:`Zoomed Fragment ${f}`,className:"w-full h-full object-contain filter sepia-[0.3] contrast-[1.1] brightness-[0.9] saturate-[0.8]"}),(f===2||f===6)&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"absolute top-[10%] right-[15%] w-[22%] h-[28%] pointer-events-none z-30 opacity-28 mix-blend-overlay",children:o.jsx("img",{src:U("/assets/ghost_overlay.png"),alt:"",className:"w-full h-full object-contain opacity-55",style:{filter:"blur(3.5px) contrast(0.5) brightness(1.6) grayscale(0.4)"}})}),o.jsxs("div",{className:"absolute inset-0 pointer-events-none z-40",children:[o.jsx("div",{className:"absolute left-[20%] top-0 bottom-0 w-[1.5px] bg-white/20 blur-[1px]"}),o.jsx("div",{className:"absolute right-[35%] top-0 bottom-0 w-[1px] bg-stone-200/20 rotate-1"})]})]}),o.jsx("div",{className:"absolute inset-0 pointer-events-none z-20 bg-[radial-gradient(circle,transparent_50%,rgba(0,0,0,0.4)_100%)]"}),o.jsx("div",{className:"absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise-lines.png')] opacity-20 pointer-events-none mix-blend-overlay"}),o.jsx("button",{className:"absolute top-4 right-4 text-stone-500 hover:text-white transition-colors",onClick:()=>I(null),children:o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M6 18L18 6M6 6l12 12"})})}),o.jsxs("div",{className:"absolute bottom-4 left-6 font-mono text-[10px] text-stone-500 tracking-[0.3em] uppercase",children:["FRAGMENT_",f.toString().padStart(2,"0")," // ENLARGED_VIEW"]})]})})]})},Fp=({type:m,className:S})=>{const E={stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",className:S};switch(m){case 0:return o.jsxs("svg",{viewBox:"0 0 24 24",...E,children:[o.jsx("path",{d:"M12 21v-6"}),o.jsx("path",{d:"M8 21h8"}),o.jsx("path",{d:"M12 15l-3.5-9h7l-3.5 9"}),o.jsx("path",{d:"M9 6h6",opacity:"0.5"})]});case 1:return o.jsxs("svg",{viewBox:"0 0 24 24",...E,children:[o.jsx("path",{d:"M12 21v-9"}),o.jsx("path",{d:"M8 21h8"}),o.jsx("path",{d:"M3 5l9 7 9-7H3z"}),o.jsx("path",{d:"M6 5l6 5 6-5",opacity:"0.3"})]});case 2:return o.jsxs("svg",{viewBox:"0 0 24 24",...E,children:[o.jsx("path",{d:"M7 6l1.5 13h7l1.5-13H7z"}),o.jsx("path",{d:"M5 21h14",strokeWidth:"1",strokeDasharray:"1 2"}),o.jsx("path",{d:"M8 10h8",opacity:"0.3"}),o.jsx("path",{d:"M9 15h6",opacity:"0.3"})]});case 3:return o.jsxs("svg",{viewBox:"0 0 24 24",...E,children:[o.jsx("path",{d:"M12 21v-8"}),o.jsx("path",{d:"M8 21h8"}),o.jsx("path",{d:"M12 13c-2.5 0-4.5-1.5-4.5-4V5h9v4c0 2.5-2 4-4.5 4z"}),o.jsx("path",{d:"M8 5v2",opacity:"0.3"}),o.jsx("path",{d:"M16 5v2",opacity:"0.3"})]});case 4:return null;default:return null}},$p=({onBack:m,onSelectReel:S,unlockedReels:E,onUnlockReel:f})=>{const{language:I}=Ca(),[D,j]=O.useState(1),[q,z]=O.useState([1,2,3,0]),[x,B]=O.useState(""),[H,F]=O.useState(!1),[Ee,De]=O.useState(null);O.useEffect(()=>{B("");const $=Pi.find(le=>le.reelNumber===D);$&&E.includes($.id)&&z($.code)},[D,E]);const Ie=$=>{B(""),z(le=>{const me=[...le],xe=D===0?5:4;return me[$]=(me[$]+1)%xe,me})},Be=$=>{B("");const le=Math.max(-3,Math.min(8,D+$));j(le)},qe=()=>{F(!0),setTimeout(()=>{F(!1),Ce()},800)},Ce=()=>{const $=Pi.find(le=>le.reelNumber===D&&JSON.stringify(le.code)===JSON.stringify(q));$?(f($.id),S($)):q.every(le=>le===0)?B(`REEL #${String(D)}: ${Z("reelOverexposed",I)}`):B(Z("reelOrderError",I))};return o.jsxs("div",{className:"fixed inset-0 w-full h-full bg-[#101010] flex flex-col items-center justify-center overflow-hidden font-sans text-stone-300 perspective-1000",children:[o.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_center,#1a1a1a_0%,#000000_100%)]"}),o.jsx("div",{className:"absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-screen"}),o.jsxs("div",{className:"relative z-10 w-full h-full max-h-screen flex flex-col items-center justify-center p-4 gap-4",children:[o.jsxs("div",{className:"relative w-full max-w-[550px] h-auto max-h-[90vh] sm:max-h-[85vh] aspect-square shadow-2xl flex-shrink-0 group",children:[o.jsx("div",{className:"absolute -bottom-8 left-4 right-4 h-10 bg-black/90 blur-xl rounded-[50%] transform scale-y-50"}),o.jsxs("div",{className:`
                        relative w-full h-full
                        bg-[#E8AA25] /* Slightly darker/dirty Kodak Yellow */
                        shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8),inset_0_0_0_1px_rgba(255,255,255,0.05)]
                        overflow-hidden
                        rounded-sm
                    `,children:[o.jsx("div",{className:"absolute inset-0 opacity-40 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] pointer-events-none z-30"}),o.jsx("div",{className:"absolute inset-0 opacity-20 mix-blend-color-burn bg-[url('https://www.transparenttextures.com/patterns/cardboard.png')] pointer-events-none z-30"}),o.jsxs("div",{className:"absolute top-0 left-0 w-full h-[22%] bg-gradient-to-b from-[#252525] to-[#1a1a1a] px-6 flex flex-col justify-center border-b border-white/10 shadow-md z-10 relative overflow-hidden",children:[o.jsx("div",{className:"absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-30 mix-blend-overlay pointer-events-none"}),o.jsx("div",{className:"absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise-dark.png')] opacity-40 mix-blend-soft-light pointer-events-none"}),o.jsx("div",{className:"absolute top-0 right-10 w-32 h-32 bg-white/10 blur-xl rounded-full mix-blend-overlay"}),o.jsx("div",{className:"absolute bottom-2 left-20 w-24 h-24 bg-white/8 blur-lg rounded-full mix-blend-overlay"}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent mix-blend-overlay"}),o.jsxs("div",{className:"flex flex-row items-baseline gap-2 relative z-10 opacity-95",children:[o.jsx("span",{className:"text-[#C82015] font-black text-3xl md:text-5xl tracking-tighter leading-none mix-blend-screen opacity-90 blur-[0.3px]",children:"KODAK"}),o.jsx("span",{className:"text-[#e5e5e5] font-bold text-3xl md:text-5xl tracking-tight leading-none mix-blend-screen opacity-90 blur-[0.3px]",children:"VISION3"})]}),o.jsx("span",{className:"text-[#888] text-[8px] md:text-xs font-light tracking-wide mt-0.5 uppercase mix-blend-screen opacity-80",children:"Color Negative Film"})]}),o.jsxs("div",{className:"absolute top-[22%] bottom-0 left-0 w-8 bg-[#e5e5e5] flex flex-col items-center justify-end pb-2 border-r border-[#d49a24] z-10 hidden md:flex",children:[o.jsx("div",{className:"w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cardboard.png')] opacity-20 mix-blend-multiply absolute inset-0"}),o.jsx("div",{className:"w-full h-16 bg-[repeating-linear-gradient(0deg,#111,#111_1px,transparent_1px,transparent_3px)] opacity-70 mb-4 mix-blend-multiply"}),o.jsx("span",{className:"text-[6px] text-stone-800 -rotate-90 origin-center whitespace-nowrap mt-4 font-mono font-bold opacity-80",children:"7203 052 014"})]}),o.jsxs("div",{className:"absolute top-[22%] bottom-0 left-2 sm:left-4 md:left-8 right-0 p-2 sm:p-3 md:p-6 flex flex-col relative z-20 h-[78%] pb-12 sm:pb-16",children:[o.jsx("div",{className:"absolute right-[15%] top-[20%] w-40 h-40 bg-[#6b4e0d] rounded-full blur-3xl opacity-[0.25] mix-blend-multiply pointer-events-none z-0"}),o.jsx("div",{className:"absolute left-[25%] bottom-[30%] w-32 h-32 bg-[#5a4108] rounded-full blur-2xl opacity-[0.30] mix-blend-multiply pointer-events-none z-0"}),o.jsx("div",{className:"absolute right-[40%] top-[40%] w-24 h-24 bg-[#4d3606] rounded-full blur-xl opacity-[0.28] mix-blend-multiply pointer-events-none z-0"}),o.jsx("div",{className:"absolute left-[10%] top-[60%] w-20 h-20 bg-[#7a5d0f] rounded-full blur-lg opacity-[0.35] mix-blend-multiply pointer-events-none z-0"}),o.jsx("div",{className:"absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#8b6914]/40 to-transparent opacity-60 mix-blend-multiply pointer-events-none z-0"}),o.jsx("div",{className:"absolute bottom-0 left-0 w-56 h-56 bg-gradient-to-tr from-[#6b4e0d]/35 to-transparent opacity-70 mix-blend-multiply pointer-events-none z-0"}),o.jsx("div",{className:"absolute top-[10%] right-[20%] w-32 h-2 bg-[#5a4108] rotate-45 blur-sm opacity-[0.40] mix-blend-multiply pointer-events-none z-0"}),o.jsx("div",{className:"absolute bottom-[25%] left-[30%] w-24 h-2 bg-[#4d3606] -rotate-12 blur-sm opacity-[0.38] mix-blend-multiply pointer-events-none z-0"}),o.jsx("div",{className:"absolute top-[50%] left-[15%] w-28 h-1.5 bg-[#6b4e0d] rotate-[-30deg] blur-sm opacity-[0.35] mix-blend-multiply pointer-events-none z-0"}),o.jsx("div",{className:"absolute right-[5%] bottom-[15%] w-16 h-16 bg-[#7a5d0f] rounded-full blur-md opacity-[0.32] mix-blend-multiply pointer-events-none z-0"}),o.jsx("div",{className:"absolute left-[50%] top-[10%] w-12 h-12 bg-[#5a4108] rounded-full blur-md opacity-[0.30] mix-blend-multiply pointer-events-none z-0"}),o.jsx("button",{onClick:m,className:"absolute top-0 right-0 border-2 sm:border-[3px] border-[#da291c] p-0.5 sm:p-1 rotate-3 hover:rotate-0 transition-transform cursor-pointer z-50 bg-yellow-500/10 hover:bg-yellow-500/20 shadow-md",children:o.jsx("div",{className:"border-[1.5px] sm:border-[2px] border-[#da291c] px-2 sm:px-4 py-0.5 sm:py-1 flex items-center justify-center",children:o.jsx("span",{className:"text-[#da291c] font-black text-[8px] sm:text-[10px] md:text-sm tracking-widest uppercase",children:"RETURN"})})}),Pi.find($=>$.reelNumber===D&&E.includes($.id))&&o.jsx("div",{className:"absolute top-0 left-2 z-20 transform -rotate-6 transition-transform duration-300 origin-top-left",children:o.jsxs("div",{className:`
                                        relative px-2 py-1
                                        bg-[#fefce8]
                                        shadow-[1px_2px_3px_rgba(0,0,0,0.15)]
                                        flex items-center justify-center
                                        border border-yellow-200/60
                                    `,children:[o.jsx("div",{className:"absolute top-0 left-0 right-0 h-[6px] bg-black/[0.03] pointer-events-none mix-blend-multiply"}),o.jsx("span",{className:"text-stone-800 font-hand font-bold text-[10px] tracking-widest uppercase relative z-10 opacity-90 leading-none",children:"OPEN"})]})}),o.jsxs("div",{className:"relative z-10 flex flex-col gap-0 mt-0 shrink-0",children:[o.jsx("h1",{className:"text-[#1a1a1a] font-black text-xl sm:text-2xl md:text-5xl tracking-tight leading-none drop-shadow-sm mix-blend-multiply opacity-90 blur-[0.4px]",children:"Super 8"}),o.jsxs("div",{className:"flex items-center gap-1 mt-1",children:[o.jsx("span",{className:"text-[#222] font-bold text-xs sm:text-sm md:text-xl tracking-tighter opacity-80 blur-[0.2px] mix-blend-multiply",children:"50D"}),o.jsxs("div",{className:"flex items-center gap-0.5 sm:gap-1 border-[1px] border-[#1a1a1a]/40 px-0.5 sm:px-1 py-0.5 transform -rotate-1 bg-[#d49a24]/20 z-50 relative shadow-sm hover:scale-105 transition-transform",children:[o.jsx("span",{className:"text-[6px] sm:text-[8px] font-mono font-bold text-[#111] uppercase spacing-wide",children:"BATCH"}),o.jsx("button",{onClick:()=>Be(-1),className:"text-[#000] hover:text-[#da291c] font-black text-[10px] sm:text-xs px-1 sm:px-1.5 cursor-pointer transition-colors",children:"<"}),o.jsx("span",{className:"text-sm sm:text-lg font-mono font-bold text-[#000] min-w-[1rem] sm:min-w-[1.2rem] text-center relative",children:String(D).padStart(2,"0")}),o.jsx("button",{onClick:()=>Be(1),className:"text-[#000] hover:text-[#da291c] font-black text-[10px] sm:text-xs px-1 sm:px-1.5 cursor-pointer transition-colors",children:">"})]})]}),o.jsx("span",{className:"text-[#222] font-bold text-sm sm:text-lg md:text-xl tracking-tighter opacity-80 blur-[0.2px] mix-blend-multiply",children:"7203"})]}),o.jsx("div",{className:"flex flex-wrap sm:flex-nowrap flex-shrink-0 items-center justify-start gap-1.5 sm:gap-2 md:gap-5 mt-1.5 sm:mt-2 relative z-50 pl-0.5 sm:pl-1 mix-blend-normal min-h-[60px] sm:min-h-[80px] w-full",children:q.map(($,le)=>{const me=Pi.find(xe=>xe.reelNumber===D&&E.includes(xe.id));return o.jsxs("button",{onClick:()=>!me&&Ie(le),disabled:!!me,className:`
                                                group relative w-10 h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 flex-shrink-0 flex flex-col items-center justify-center 
                                                bg-[#E8AA25] border-2 border-stone-800
                                                ${me?"cursor-default opacity-90":"transition-all transform hover:-translate-y-1 cursor-pointer"}
                                            `,children:[o.jsx("div",{className:"absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cardboard.png')] opacity-10 mix-blend-multiply pointer-events-none"}),o.jsx("div",{className:`w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-10 text-stone-900 transition-colors relative z-50 ${Ee===le?"opacity-0":"opacity-100"}`,children:o.jsx(Fp,{type:$})}),me&&o.jsx("div",{className:"absolute top-1 right-1 w-2 h-2 rounded-full bg-[#1a1a1a]/50"}),Ee===le&&o.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:o.jsx("span",{className:"animate-spin text-stone-900 font-bold",children:"⟳"})}),o.jsxs("span",{className:"absolute bottom-0.5 right-0.5 sm:bottom-1 sm:right-1 text-[6px] sm:text-[8px] text-stone-500 font-mono z-10",children:["0",le+1]})]},le)})})]}),o.jsxs("div",{className:"absolute bottom-2 sm:bottom-4 left-3 sm:left-6 right-3 sm:right-6 flex justify-between items-end z-50 pointer-events-auto mix-blend-normal",children:[o.jsx("div",{className:"w-8 h-8 sm:w-10 sm:h-10 text-[#C82015] opacity-90 mix-blend-multiply",children:o.jsxs("svg",{viewBox:"0 0 100 100",fill:"currentColor",children:[o.jsx("path",{d:"M10 10 h15 v80 h-15 Z"}),o.jsx("path",{d:"M35 10 h15 l35 35 l-35 35 h-15 l35 -35 Z"})]})}),o.jsxs("button",{onClick:qe,disabled:H,className:`
                                    relative overflow-hidden
                                    border-2 sm:border-[3px] border-stone-900
                                    text-stone-900
                                    px-3 sm:px-6 py-1.5 sm:py-2
                                    text-[10px] sm:text-sm font-black uppercase tracking-widest
                                    hover:bg-stone-900 hover:text-[#E8AA25]
                                    transition-colors
                                    flex items-center gap-2
                                `,children:[o.jsx("span",{className:"relative z-10 drop-shadow-sm filter",children:H?"Running...":"INSPECT"}),o.jsx("div",{className:"absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-30 mix-blend-multiply pointer-events-none"})]})]})]}),o.jsx("div",{className:"absolute inset-0 border border-white/20 pointer-events-none mix-blend-overlay"})]}),o.jsx("div",{className:"h-10 flex items-center justify-center mt-6 px-4 text-center shrink-0",children:x&&o.jsx("div",{className:"transform rotate-1 border-l-4 border-[#C82015] bg-[#222] px-4 py-2 shadow-2xl",children:o.jsx("span",{className:"text-stone-300 text-xs font-mono font-bold tracking-tight",children:x})})})]})]})},Pp=({onComplete:m})=>{const[S,E]=O.useState(0),[f,I]=O.useState(1),D=O.useRef(!1),{language:j}=Ca(),q=[{content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:Z("introSlide1Line1",j)}),o.jsx("p",{className:"mt-8",children:Z("introSlide1Line2",j)})]})},{content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:Z("introSlide2Line1",j)}),o.jsx("p",{className:"mt-8",children:Z("introSlide2Line2",j)}),o.jsx("p",{className:"mt-8",children:Z("introSlide2Line3",j)})]})},{content:o.jsxs(o.Fragment,{children:[o.jsx("p",{className:"text-stone-400 text-base mb-8 tracking-widest uppercase",children:Z("introSlide3Header",j)}),o.jsxs("ul",{className:"space-y-4 text-stone-300 text-lg text-left inline-block list-none border-l-2 border-stone-800 pl-8 font-mono-film",children:[o.jsx("li",{children:Z("introSlide3Item1",j)}),o.jsx("li",{children:Z("introSlide3Item2",j)}),o.jsx("li",{children:Z("introSlide3Item3",j)})]})]})},{content:o.jsxs(o.Fragment,{children:[o.jsx("p",{className:"text-xl text-stone-200 mb-8 font-bold",children:Z("introSlide4Line1",j)}),o.jsx("p",{className:"text-base text-stone-400 leading-loose",children:Z("introSlide4Line2",j)}),o.jsx("p",{className:"mt-4 text-base text-stone-400 leading-loose",children:Z("introSlide4Line3",j)}),o.jsx("p",{className:"mt-4 text-base text-stone-400 leading-loose",children:Z("introSlide4Line4",j)})]})},{content:o.jsxs(o.Fragment,{children:[o.jsx("p",{className:"text-lg text-stone-300 leading-loose mb-8",children:Z("introSlide5Line1",j)}),o.jsx("div",{className:"w-16 h-[1px] bg-stone-700 mx-auto my-8"}),o.jsx("p",{className:"text-xl text-stone-200 font-bold leading-relaxed",children:Z("introSlide5Line2",j)})]})}],z=()=>{D.current||(D.current=!0,I(0),setTimeout(()=>{S<q.length-1?(E(B=>B+1),I(1),setTimeout(()=>{D.current=!1},500)):m()},500))},x=q[S];return o.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center bg-black p-4 md:p-12 relative overflow-hidden h-full cursor-pointer selection:bg-none font-serif-film",onClick:z,children:[o.jsx("div",{className:"absolute inset-4 md:inset-8 border-[6px] border-double border-stone-800 pointer-events-none opacity-60"}),o.jsx("div",{className:"absolute left-6 md:left-12 top-0 bottom-0 w-4 flex flex-col justify-around py-8 opacity-20 pointer-events-none",children:Array.from({length:12}).map((B,H)=>o.jsx("div",{className:"w-full h-5 bg-black rounded-[1px] border border-white/10 shadow-inner"},`l-${H}`))}),o.jsx("div",{className:"absolute right-6 md:right-12 top-0 bottom-0 w-4 flex flex-col justify-around py-8 opacity-20 pointer-events-none",children:Array.from({length:12}).map((B,H)=>o.jsx("div",{className:"w-full h-5 bg-black rounded-[1px] border border-white/10 shadow-inner"},`r-${H}`))}),o.jsxs("div",{className:"absolute top-12 text-[10px] text-stone-800 tracking-[0.3em]",children:["SCENE ",S+1," / ",q.length]}),o.jsx("div",{className:"w-full max-w-2xl text-center z-10 transition-opacity duration-500 ease-in-out",style:{opacity:f},children:o.jsx("div",{className:"text-stone-300 text-xl md:text-2xl leading-loose tracking-wide drop-shadow-md min-h-[300px] flex flex-col justify-center items-center",children:x==null?void 0:x.content})}),o.jsx("div",{className:"absolute bottom-12 flex flex-col items-center gap-4 animate-pulse",children:o.jsx("button",{className:"text-stone-600 text-xs tracking-[0.3em] uppercase hover:text-stone-400 transition-colors",children:S===q.length-1?Z("introClickStart",j):Z("introClickContinue",j)})}),o.jsx("div",{className:"absolute bottom-6 right-8 opacity-40 hover:opacity-100 transition-opacity",children:o.jsx("button",{onClick:B=>{B.stopPropagation(),m()},className:"text-stone-700 hover:text-stone-500 text-[10px] tracking-widest uppercase border border-stone-800/50 px-2 py-1 rounded-sm",children:Z("introSkip",j)})})]})},ey=({onComplete:m})=>{const S=[U("/assets/intro_film_1.jpg"),U("/assets/intro_film_2.jpg")];return O.useEffect(()=>{const E=setTimeout(()=>{m()},3e3);return()=>{clearTimeout(E)}},[m]),o.jsxs("div",{className:"absolute inset-0 bg-[#050505] z-40 flex items-center justify-center font-mono",children:[o.jsx("div",{className:"absolute inset-4 md:inset-8 border-[6px] border-double border-stone-800 pointer-events-none opacity-60 z-50"}),o.jsxs("div",{className:"relative w-[340px] h-auto overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] scale-110 md:scale-100 transform rotate-1",children:[o.jsxs("div",{className:"bg-[#1a1a1a] border-x-[24px] border-[#0a0a0a] relative flex flex-col gap-[24px] py-8 box-border shadow-inner",children:[o.jsx("div",{className:"absolute left-[-18px] top-0 bottom-0 w-[14px] flex flex-col justify-start gap-[28px] py-1",children:Array.from({length:20}).map((E,f)=>o.jsx("div",{className:"w-full h-[18px] bg-black rounded-[1px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.05),0_1px_0_rgba(255,255,255,0.02)] border border-white/5"},`l-${f}`))}),o.jsx("div",{className:"absolute right-[-18px] top-0 bottom-0 w-[14px] flex flex-col justify-start gap-[28px] py-1",children:Array.from({length:20}).map((E,f)=>o.jsx("div",{className:"w-full h-[18px] bg-black rounded-[1px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.05),0_1px_0_rgba(255,255,255,0.02)] border border-white/5"},`r-${f}`))}),o.jsx("div",{className:"absolute left-[-30px] top-[40px] text-[8px] text-[#fbbf24] rotate-90 opacity-60 font-bold tracking-widest",children:"EASTMAN"}),o.jsx("div",{className:"absolute right-[-32px] top-[140px] text-[10px] text-[#fbbf24] -rotate-90 opacity-80 font-bold",children:"14"}),o.jsx("div",{className:"absolute left-[-30px] top-[260px] text-[8px] text-[#fbbf24] rotate-90 opacity-60 font-bold tracking-widest",children:"KODAK"}),o.jsx("div",{className:"absolute right-[-36px] top-[360px] text-[10px] text-[#fbbf24] -rotate-90 opacity-80 font-bold",children:"14A"}),S.map((E,f)=>o.jsxs("div",{className:"relative w-full aspect-[4/3] overflow-hidden bg-black mx-auto shadow-[inset_0_0_20px_rgba(0,0,0,1)] ring-1 ring-white/10",children:[o.jsx("img",{src:E,alt:`Film frame ${f}`,className:"w-full h-full object-cover sepia-[0.3] contrast-[1.15] brightness-[0.85] saturate-[0.8]"}),o.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.8)_100%)]"})]},f))]}),o.jsxs("div",{className:"pointer-events-none absolute inset-0 z-10 w-full h-full mix-blend-overlay opacity-60",children:[o.jsx("div",{className:"absolute inset-0 opacity-50 animate-grain-fine"}),o.jsx("div",{className:"absolute inset-0 opacity-20 animate-scratch-subtle"}),o.jsx("div",{className:"absolute inset-0 opacity-10 animate-grain-coarse"}),o.jsx("div",{className:"absolute inset-0 bg-[#4a3b2a] mix-blend-color opacity-20"}),o.jsx("div",{className:"absolute inset-0 bg-[#001a1a] mix-blend-soft-light opacity-30"})]})]})]})},ty=({currentTrack:m,isMuted:S=!0,onToggleMute:E,isEndingMusicPlaying:f=!1,onStopEndingMusic:I})=>{const D=O.useRef(null),j=O.useRef(Promise.resolve()),q=O.useRef(null),z=.4;O.useEffect(()=>{if(!D.current){const B=new Audio;B.loop=!0,B.volume=z,D.current=B}return()=>{D.current&&(D.current.pause(),D.current.src="")}},[]),O.useEffect(()=>{const B=D.current;B&&(j.current=j.current.then(async()=>{try{if(!m){B.pause(),q.current=null;return}q.current!==m&&(B.src=m,q.current=m,B.load()),S?B.pause():(B.volume=z,await B.play())}catch(H){console.warn("BackgroundMusic operation failed:",H)}}))},[m,S]);const x=()=>{f&&I&&I(),E==null||E()};return o.jsxs("button",{onClick:x,className:`
            fixed top-6 right-6 z-[100] group flex items-center justify-center
            w-10 h-10 rounded-full border transition-all duration-500 shadow-lg cursor-pointer
            ${S?"border-stone-700 bg-stone-900/80 text-stone-500 hover:border-stone-500 hover:text-stone-300":"border-amber-700/50 bg-amber-900/30 text-amber-500 hover:border-amber-500 hover:bg-amber-900/50 shadow-amber-900/20"}
        `,title:S?"Turn Music On":"Turn Music Off",children:[o.jsxs("div",{className:`flex items-end gap-[2px] h-4 ${S?"opacity-40":""}`,children:[o.jsx("div",{className:`w-[3px] bg-current rounded-t-sm transition-all duration-300 ${S?"h-1":"h-3 animate-[pulse_0.8s_ease-in-out_infinite]"}`}),o.jsx("div",{className:`w-[3px] bg-current rounded-t-sm transition-all duration-300 ${S?"h-1":"h-5 animate-[pulse_1.2s_ease-in-out_infinite]"}`}),o.jsx("div",{className:`w-[3px] bg-current rounded-t-sm transition-all duration-300 ${S?"h-1":"h-2 animate-[pulse_1.0s_ease-in-out_infinite]"}`}),o.jsx("div",{className:`w-[3px] bg-current rounded-t-sm transition-all duration-300 ${S?"h-1":"h-4 animate-[pulse_0.6s_ease-in-out_infinite]"}`})]}),S&&o.jsx("div",{className:"absolute w-8 h-[1px] bg-stone-400 rotate-45 shadow-sm"})]})},ay=()=>{const{language:m,setLanguage:S}=Ca();return o.jsxs("div",{className:"flex items-center gap-4 bg-stone-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-stone-800",children:[o.jsx("button",{onClick:()=>S(rt.Chinese),className:`text-xs font-mono tracking-wider transition-all duration-300 ${m===rt.Chinese?"text-stone-100 font-bold scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]":"text-stone-600 hover:text-stone-400"}`,children:"中文"}),o.jsx("div",{className:"w-[1px] h-3 bg-stone-700"}),o.jsx("button",{onClick:()=>S(rt.English),className:`text-xs font-mono tracking-wider transition-all duration-300 ${m===rt.English?"text-stone-100 font-bold scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]":"text-stone-600 hover:text-stone-400"}`,children:"ENGLISH"})]})},ny=({onStart:m})=>{const[S,E]=O.useState(!1),f=()=>{E(!0),setTimeout(m,1e3)};return o.jsxs("div",{onClick:f,className:`fixed inset-0 bg-black flex items-center justify-center cursor-pointer transition-opacity duration-1000 ${S?"opacity-0":"opacity-100"} z-50`,children:[o.jsxs("div",{className:"flex flex-col items-center gap-6",children:[o.jsx("div",{className:"text-stone-100 font-mono text-sm tracking-[0.5em] uppercase opacity-80 hover:opacity-100 transition-opacity duration-700 blur-[0.5px] animate-pulse",style:{textShadow:"2px 0 rgba(255,0,0,0.5), -2px 0 rgba(0,255,255,0.5), 0 0 4px rgba(255,255,255,0.2)"},children:"Ghost in the Reel"}),o.jsx("img",{src:U("/hunstler_logo.jpg"),alt:"Hunstler Klub Logo",className:"w-24 h-auto opacity-80 mix-blend-screen blur-[0.5px] animate-pulse",style:{filter:"drop-shadow(0 0 4px rgba(255,255,255,0.2))"}}),o.jsx("div",{className:"flex gap-6 mt-8",onClick:I=>I.stopPropagation(),children:o.jsx(ay,{})}),o.jsx("div",{className:"text-stone-500 font-mono text-xs tracking-widest mt-4 animate-pulse",children:"[ CLICK TO ENTER ]"})]}),o.jsx("div",{className:"absolute bottom-8 right-8 text-stone-500 font-mono text-[10px] tracking-widest opacity-60",children:"By Hunstler Klub"})]})},eo="the-missing-reel-save",ly="1.0.0";class to{static saveGame(S){try{const E={...S,timestamp:Date.now(),version:ly};localStorage.setItem(eo,JSON.stringify(E)),console.log("[SaveManager] Game saved successfully",E)}catch(E){console.error("[SaveManager] Failed to save game:",E)}}static loadGame(){try{const S=localStorage.getItem(eo);if(!S)return console.log("[SaveManager] No save data found"),null;const E=JSON.parse(S);return!E.version||!E.timestamp?(console.warn("[SaveManager] Invalid save data format"),null):(console.log("[SaveManager] Game loaded successfully",E),E)}catch(S){return console.error("[SaveManager] Failed to load game:",S),null}}static hasSaveData(){try{return localStorage.getItem(eo)!==null}catch(S){return console.error("[SaveManager] Failed to check save data:",S),!1}}static clearSave(){try{localStorage.removeItem(eo),console.log("[SaveManager] Save data cleared")}catch(S){console.error("[SaveManager] Failed to clear save data:",S)}}static getSaveTimestamp(){const S=this.loadGame();return S?S.timestamp:null}}const iy=({onNewGame:m,onContinue:S})=>{const{language:E}=Ca(),[f,I]=O.useState(!1),[D,j]=O.useState(!1);O.useEffect(()=>{j(to.hasSaveData())},[]);const q=()=>{to.clearSave(),console.log("[SaveSelectScreen] Starting new game, save cleared"),I(!0),setTimeout(m,1e3)},z=()=>{console.log("[SaveSelectScreen] Continuing game"),I(!0),setTimeout(S,1e3)};return o.jsx("div",{className:`fixed inset-0 bg-black flex items-center justify-center transition-opacity duration-1000 ${f?"opacity-0":"opacity-100"} z-50`,children:o.jsxs("div",{className:"flex flex-col items-center gap-6",children:[o.jsx("div",{className:"text-[#8c8273] font-mono text-xs tracking-[0.3em] uppercase opacity-60 mb-4",children:"Select Option"}),o.jsxs("div",{className:"flex flex-col gap-4",children:[o.jsx("button",{onClick:q,className:`px-12 py-4 bg-[#1a1816] border border-[#3d342b] text-[#d6cbb8] font-mono text-sm tracking-widest uppercase
                                 hover:bg-[#2a2624] hover:border-[#a89078] hover:text-[#ffecd1] 
                                 transition-all duration-300 cursor-pointer min-w-[200px]`,children:Z("newGame",E)}),D&&o.jsx("button",{onClick:z,className:`px-12 py-4 bg-transparent border border-[#3d342b] text-[#8c8273] font-mono text-sm tracking-widest uppercase
                                     hover:bg-[#1a1816] hover:border-[#786650] hover:text-[#d6cbb8]
                                     transition-all duration-300 cursor-pointer min-w-[200px]`,children:Z("continueGame",E)})]}),!D&&o.jsx("div",{className:"text-[#4a4036] font-mono text-[10px] tracking-wider opacity-40 mt-4",children:"No save data found"})]})})},oy=({onComplete:m})=>{const[S,E]=O.useState(1),f=O.useRef(!1),{language:I}=Ca(),D=[{content:o.jsxs(o.Fragment,{children:[o.jsx("p",{className:"text-xl text-stone-200 leading-loose",children:Z("endingLine1",I)}),o.jsx("p",{className:"mt-8 text-stone-300",children:Z("endingLine2",I)}),o.jsx("div",{className:"w-16 h-[1px] bg-stone-700 mx-auto my-12"}),o.jsx("p",{className:"text-lg text-stone-400 leading-relaxed italic",children:Z("endingLine3",I)})]})}],j=()=>{f.current||(f.current=!0,E(0),setTimeout(()=>{m()},800))},q=D[0];return o.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center bg-black p-4 md:p-12 relative overflow-hidden h-full cursor-pointer selection:bg-none font-serif-film",onClick:j,children:[o.jsx("div",{className:"absolute inset-4 md:inset-8 border-[6px] border-double border-stone-800 pointer-events-none opacity-60"}),o.jsx("div",{className:"absolute left-6 md:left-12 top-0 bottom-0 w-4 flex flex-col justify-around py-8 opacity-20 pointer-events-none",children:Array.from({length:12}).map((z,x)=>o.jsx("div",{className:"w-full h-5 bg-black rounded-[1px] border border-white/10 shadow-inner"},`l-${x}`))}),o.jsx("div",{className:"absolute right-6 md:right-12 top-0 bottom-0 w-4 flex flex-col justify-around py-8 opacity-20 pointer-events-none",children:Array.from({length:12}).map((z,x)=>o.jsx("div",{className:"w-full h-5 bg-black rounded-[1px] border border-white/10 shadow-inner"},`r-${x}`))}),o.jsx("div",{className:"absolute top-12 text-[10px] text-stone-800 tracking-[0.3em] uppercase",children:"EPILOGUE"}),o.jsx("div",{className:"w-full max-w-2xl text-center z-10 transition-opacity duration-800 ease-in-out",style:{opacity:S},children:o.jsx("div",{className:"text-stone-300 text-xl md:text-2xl leading-loose tracking-wide drop-shadow-md min-h-[300px] flex flex-col justify-center items-center",children:q==null?void 0:q.content})}),o.jsx("div",{className:"absolute bottom-12 flex flex-col items-center gap-4 animate-pulse",children:o.jsx("button",{className:"text-stone-600 text-xs tracking-[0.3em] uppercase hover:text-stone-400 transition-colors",children:Z("endingClickReturn",I)})})]})};var ee=(m=>(m.INTRO="INTRO",m.INVENTORY="INVENTORY",m.RECORDER="RECORDER",m.NOTEBOOK="NOTEBOOK",m.FILM_SELECT="FILM_SELECT",m.FILM_VIEW="FILM_VIEW",m.ENDING="ENDING",m.FILM_LOOP="FILM_LOOP",m.TITLE_SCREEN="TITLE_SCREEN",m.SAVE_SELECT="SAVE_SELECT",m))(ee||{});const sy=()=>{const[m,S]=O.useState(()=>typeof window<"u"&&sessionStorage.getItem("the-missing-reel-skip-intro")?(sessionStorage.removeItem("the-missing-reel-skip-intro"),ee.SAVE_SELECT):ee.FILM_LOOP),[E,f]=O.useState(["log_auto"]),[I,D]=O.useState(["intro"]),[j,q]=O.useState([]),[z,x]=O.useState(!1),[B,H]=O.useState(null),[F,Ee]=O.useState(!1),[De,Ie]=O.useState(!1),[Be,qe]=O.useState(!1),[Ce,$]=O.useState(!1),le=O.useRef(null),me=O.useRef(null),xe=O.useRef(null),X=O.useRef(null),oe=O.useRef(null),[we,ut]=O.useState(!1),[ve,Ve]=O.useState(!1),ze=O.useRef(null),pe=()=>{const u=to.loadGame();u&&(f(u.unlockedLogs),D(u.unlockedBlogs),q(u.unlockedReels),x(u.hasAutoPlayedRecorder),Ve(u.hasEndingMusicFinished),console.log("[App] Game loaded from save"))};O.useEffect(()=>{pe()},[]),O.useEffect(()=>{const u=setTimeout(()=>{to.saveGame({unlockedLogs:E,unlockedBlogs:I,unlockedReels:j,hasAutoPlayedRecorder:z,hasEndingMusicFinished:ve})},300);return()=>clearTimeout(u)},[E,I,j,z,ve]),O.useEffect(()=>{if(!le.current){const u=new Audio(U("/assets/recorder_music.mp3"));u.loop=!0,u.volume=.7,le.current=u}return()=>{le.current&&(le.current.pause(),le.current=null)}},[]),O.useEffect(()=>{if(!xe.current){const u=new Audio(U("/assets/film_music.mp3"));u.loop=!0,u.volume=.7,xe.current=u}return()=>{xe.current&&(xe.current.pause(),xe.current=null)}},[]),O.useEffect(()=>{if(!oe.current){const u=new Audio(U("/assets/end_music.mp3"));u.loop=!1,u.volume=.7,u.addEventListener("ended",()=>{Ve(!0),ut(!1)}),oe.current=u}return()=>{oe.current&&(oe.current.pause(),oe.current=null)}},[]),O.useEffect(()=>{const u=le.current;if(!u)return;const N=Ce&&!F,M=we&&!ve;if(N){if(M){const L=oe.current;if(L&&L.volume>0){ze.current&&clearInterval(ze.current);const R=L.volume;let J=0;ze.current=setInterval(()=>{J++,L.volume=Math.max(0,R-R/20*J),J>=20&&(L.pause(),ze.current&&(clearInterval(ze.current),ze.current=null))},50)}}u.volume=.7,u.play().catch(L=>console.warn("Recorder music play failed:",L))}else{me.current&&clearInterval(me.current);const L=u.volume,R=20,J=L/R;let ce=0;me.current=setInterval(()=>{ce++;const T=Math.max(0,L-J*ce);if(u.volume=T,(ce>=R||T<=0)&&(u.pause(),me.current&&(clearInterval(me.current),me.current=null),we&&!ve)){const K=oe.current;if(K&&K.paused){K.volume=0,K.play().catch(Me=>console.warn("Ending music resume failed:",Me));let ae=0;const se=setInterval(()=>{ae++,K.volume=Math.min(.7,.7/20*ae),ae>=20&&clearInterval(se)},50)}}},50)}return()=>{me.current&&clearInterval(me.current)}},[Ce,m,F,we,ve]),O.useEffect(()=>{const u=xe.current;if(!u)return;const M=(m===ee.FILM_SELECT||m===ee.FILM_VIEW)&&!F,L=we&&!ve;if(M){if(L){const R=oe.current;if(R&&R.volume>0){ze.current&&clearInterval(ze.current);const J=R.volume;let ce=0;ze.current=setInterval(()=>{ce++,R.volume=Math.max(0,J-J/20*ce),ce>=20&&(R.pause(),ze.current&&(clearInterval(ze.current),ze.current=null))},50)}}u.volume=.7,u.play().catch(R=>console.warn("Film music play failed:",R))}else{X.current&&clearInterval(X.current);const R=u.volume,J=20,ce=R/J;let T=0;X.current=setInterval(()=>{T++;const K=Math.max(0,R-ce*T);if(u.volume=K,(T>=J||K<=0)&&(u.pause(),X.current&&(clearInterval(X.current),X.current=null),we&&!ve)){const ae=oe.current;if(ae&&ae.paused){ae.volume=0,ae.play().catch(tt=>console.warn("Ending music resume failed:",tt));let se=0;const Me=setInterval(()=>{se++,ae.volume=Math.min(.7,.7/20*se),se>=20&&clearInterval(Me)},50)}}},50)}return()=>{X.current&&clearInterval(X.current)}},[m,F,we,ve]),O.useEffect(()=>{m===ee.ENDING&&!we&&!ve&&(console.log("Entering ENDING view, setting ending music to play"),ut(!0))},[m,we,ve]),O.useEffect(()=>{const u=oe.current;if(u){if(console.log("Ending music effect:",{isEndingMusicPlaying:we,hasEndingMusicFinished:ve,isMusicMuted:F,recorderMusicActive:Ce,view:m}),F)u.paused||(console.log("Pausing ending music (muted)"),u.pause());else if(we&&!ve){const N=Ce&&m===ee.RECORDER,M=m===ee.FILM_SELECT||m===ee.FILM_VIEW;console.log("Ending music should play?",{isRecorderActive:N,isFilmActive:M}),!N&&!M?u.paused&&(console.log("Starting ending music playback"),u.volume=.7,u.play().catch(L=>console.warn("Ending music play failed:",L))):u.paused||(console.log("Pausing ending music (priority module active)"),u.pause())}}},[we,ve,F,Ce,m]);let Ae=null;m===ee.RECORDER?Ae=Lh.recorder:m===ee.NOTEBOOK?Ae=null:m===ee.FILM_SELECT||m===ee.FILM_VIEW?Ae=Lh.film:(m===ee.INVENTORY||m===ee.INTRO||m===ee.FILM_LOOP||m===ee.ENDING)&&(Ae=null);const _=u=>{switch(u){case"recorder":S(ee.RECORDER);break;case"notebook":S(ee.NOTEBOOK);break;case"film":S(ee.FILM_SELECT);break}},C=u=>{E.includes(u)||f(N=>[...N,u])},G=u=>{I.includes(u)||D(N=>[...N,u])},te=u=>{j.includes(u)||q(N=>[...N,u])},ye=()=>{ut(!1),Ve(!0);const u=oe.current;u&&(u.pause(),u.currentTime=0)},d=()=>{console.log("[App] Resetting game state for new game"),localStorage.removeItem("the-missing-reel-tutorial-seen"),f(["log_auto"]),D(["intro"]),q([]),x(!1),Ve(!1),H(null),S(ee.INTRO)};return o.jsx(Xp,{children:o.jsxs(Ep,{disableFilmEffects:m===ee.NOTEBOOK&&(Be||De),children:[o.jsx(ty,{currentTrack:Ae,isMuted:F,onToggleMute:()=>Ee(!F),isEndingMusicPlaying:we,onStopEndingMusic:ye}),m===ee.FILM_LOOP&&o.jsx(ey,{onComplete:()=>S(ee.TITLE_SCREEN)}),m===ee.TITLE_SCREEN&&o.jsx(ny,{onStart:()=>S(ee.SAVE_SELECT)}),m===ee.SAVE_SELECT&&o.jsx(iy,{onNewGame:d,onContinue:()=>S(ee.INVENTORY)}),m===ee.INTRO&&o.jsx(Pp,{onComplete:()=>S(ee.INVENTORY)}),m===ee.INVENTORY&&o.jsx(Mp,{items:Qp,onSelectItem:_,unlockedLogs:E,unlockedBlogs:I,unlockedReels:j}),m===ee.RECORDER&&o.jsx(Zp,{onBack:()=>{$(!1),S(ee.INVENTORY)},unlockedLogs:E,onUnlockLog:C,hasAutoPlayed:z,setHasAutoPlayed:x,onTriggerEnding:()=>{$(!1),S(ee.ENDING)},onMusicStart:()=>$(!0)}),m===ee.NOTEBOOK&&o.jsx(Kp,{onBack:()=>S(ee.INVENTORY),unlockedBlogs:I,onUnlockBlog:G,onViewChange:Ie,isFlickerDisabled:Be,onToggleFlicker:()=>qe(u=>!u)}),m===ee.FILM_SELECT&&o.jsx($p,{onBack:()=>S(ee.INVENTORY),onSelectReel:u=>{H(u),S(ee.FILM_VIEW)},unlockedReels:j,onUnlockReel:te}),m===ee.FILM_VIEW&&B&&(B.id==="reel_00"?o.jsx(Jp,{film:B,onBack:()=>S(ee.FILM_SELECT)}):o.jsx(Wp,{film:B,onBack:()=>S(ee.FILM_SELECT)})),m===ee.ENDING&&o.jsx(oy,{onComplete:()=>S(ee.INVENTORY)})]})})},Zh=document.getElementById("root");if(!Zh)throw new Error("Could not find root element to mount to");const ry=Tp.createRoot(Zh);ry.render(o.jsx(_p.StrictMode,{children:o.jsx(sy,{})}));
