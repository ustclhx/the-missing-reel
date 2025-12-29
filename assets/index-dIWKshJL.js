(function(){const T=document.createElement("link").relList;if(T&&T.supports&&T.supports("modulepreload"))return;for(const R of document.querySelectorAll('link[rel="modulepreload"]'))d(R);new MutationObserver(R=>{for(const U of R)if(U.type==="childList")for(const B of U.addedNodes)B.tagName==="LINK"&&B.rel==="modulepreload"&&d(B)}).observe(document,{childList:!0,subtree:!0});function O(R){const U={};return R.integrity&&(U.integrity=R.integrity),R.referrerPolicy&&(U.referrerPolicy=R.referrerPolicy),R.crossOrigin==="use-credentials"?U.credentials="include":R.crossOrigin==="anonymous"?U.credentials="omit":U.credentials="same-origin",U}function d(R){if(R.ep)return;R.ep=!0;const U=O(R);fetch(R.href,U)}})();function q0(x){return x&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,"default")?x.default:x}var ds={exports:{}},En={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N0;function oh(){if(N0)return En;N0=1;var x=Symbol.for("react.transitional.element"),T=Symbol.for("react.fragment");function O(d,R,U){var B=null;if(U!==void 0&&(B=""+U),R.key!==void 0&&(B=""+R.key),"key"in R){U={};for(var Q in R)Q!=="key"&&(U[Q]=R[Q])}else U=R;return R=U.ref,{$$typeof:x,type:d,key:B,ref:R!==void 0?R:null,props:U}}return En.Fragment=T,En.jsx=O,En.jsxs=O,En}var j0;function rh(){return j0||(j0=1,ds.exports=oh()),ds.exports}var u=rh(),ms={exports:{}},P={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E0;function fh(){if(E0)return P;E0=1;var x=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),B=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),G=Symbol.for("react.activity"),te=Symbol.iterator;function Re(r){return r===null||typeof r!="object"?null:(r=te&&r[te]||r["@@iterator"],typeof r=="function"?r:null)}var Ae={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ne=Object.assign,Be={};function ge(r,_,M){this.props=r,this.context=_,this.refs=Be,this.updater=M||Ae}ge.prototype.isReactComponent={},ge.prototype.setState=function(r,_){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,_,"setState")},ge.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function I(){}I.prototype=ge.prototype;function K(r,_,M){this.props=r,this.context=_,this.refs=Be,this.updater=M||Ae}var me=K.prototype=new I;me.constructor=K,Ne(me,ge.prototype),me.isPureReactComponent=!0;var _e=Array.isArray;function he(){}var Z={H:null,A:null,T:null,S:null},ie=Object.prototype.hasOwnProperty;function de(r,_,M){var D=M.ref;return{$$typeof:x,type:r,key:_,ref:D!==void 0?D:null,props:M}}function et(r,_){return de(r.type,_,r.props)}function be(r){return typeof r=="object"&&r!==null&&r.$$typeof===x}function qe(r){var _={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(M){return _[M]})}var De=/\/+/g;function Je(r,_){return typeof r=="object"&&r!==null&&r.key!=null?qe(""+r.key):_.toString(36)}function le(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(he,he):(r.status="pending",r.then(function(_){r.status==="pending"&&(r.status="fulfilled",r.value=_)},function(_){r.status==="pending"&&(r.status="rejected",r.reason=_)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function h(r,_,M,D,N){var H=typeof r;(H==="undefined"||H==="boolean")&&(r=null);var Y=!1;if(r===null)Y=!0;else switch(H){case"bigint":case"string":case"number":Y=!0;break;case"object":switch(r.$$typeof){case x:case T:Y=!0;break;case V:return Y=r._init,h(Y(r._payload),_,M,D,N)}}if(Y)return N=N(r),Y=D===""?"."+Je(r,0):D,_e(N)?(M="",Y!=null&&(M=Y.replace(De,"$&/")+"/"),h(N,_,M,"",function(Ce){return Ce})):N!=null&&(be(N)&&(N=et(N,M+(N.key==null||r&&r.key===N.key?"":(""+N.key).replace(De,"$&/")+"/")+Y)),_.push(N)),1;Y=0;var J=D===""?".":D+":";if(_e(r))for(var F=0;F<r.length;F++)D=r[F],H=J+Je(D,F),Y+=h(D,_,M,H,N);else if(F=Re(r),typeof F=="function")for(r=F.call(r),F=0;!(D=r.next()).done;)D=D.value,H=J+Je(D,F++),Y+=h(D,_,M,H,N);else if(H==="object"){if(typeof r.then=="function")return h(le(r),_,M,D,N);throw _=String(r),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return Y}function A(r,_,M){if(r==null)return r;var D=[],N=0;return h(r,D,"","",function(H){return _.call(M,H,N++)}),D}function q(r){if(r._status===-1){var _=r._result;_=_(),_.then(function(M){(r._status===0||r._status===-1)&&(r._status=1,r._result=M)},function(M){(r._status===0||r._status===-1)&&(r._status=2,r._result=M)}),r._status===-1&&(r._status=0,r._result=_)}if(r._status===1)return r._result.default;throw r._result}var z=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},$={map:A,forEach:function(r,_,M){A(r,function(){_.apply(this,arguments)},M)},count:function(r){var _=0;return A(r,function(){_++}),_},toArray:function(r){return A(r,function(_){return _})||[]},only:function(r){if(!be(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return P.Activity=G,P.Children=$,P.Component=ge,P.Fragment=O,P.Profiler=R,P.PureComponent=K,P.StrictMode=d,P.Suspense=w,P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,P.__COMPILER_RUNTIME={__proto__:null,c:function(r){return Z.H.useMemoCache(r)}},P.cache=function(r){return function(){return r.apply(null,arguments)}},P.cacheSignal=function(){return null},P.cloneElement=function(r,_,M){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var D=Ne({},r.props),N=r.key;if(_!=null)for(H in _.key!==void 0&&(N=""+_.key),_)!ie.call(_,H)||H==="key"||H==="__self"||H==="__source"||H==="ref"&&_.ref===void 0||(D[H]=_[H]);var H=arguments.length-2;if(H===1)D.children=M;else if(1<H){for(var Y=Array(H),J=0;J<H;J++)Y[J]=arguments[J+2];D.children=Y}return de(r.type,N,D)},P.createContext=function(r){return r={$$typeof:B,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:U,_context:r},r},P.createElement=function(r,_,M){var D,N={},H=null;if(_!=null)for(D in _.key!==void 0&&(H=""+_.key),_)ie.call(_,D)&&D!=="key"&&D!=="__self"&&D!=="__source"&&(N[D]=_[D]);var Y=arguments.length-2;if(Y===1)N.children=M;else if(1<Y){for(var J=Array(Y),F=0;F<Y;F++)J[F]=arguments[F+2];N.children=J}if(r&&r.defaultProps)for(D in Y=r.defaultProps,Y)N[D]===void 0&&(N[D]=Y[D]);return de(r,H,N)},P.createRef=function(){return{current:null}},P.forwardRef=function(r){return{$$typeof:Q,render:r}},P.isValidElement=be,P.lazy=function(r){return{$$typeof:V,_payload:{_status:-1,_result:r},_init:q}},P.memo=function(r,_){return{$$typeof:y,type:r,compare:_===void 0?null:_}},P.startTransition=function(r){var _=Z.T,M={};Z.T=M;try{var D=r(),N=Z.S;N!==null&&N(M,D),typeof D=="object"&&D!==null&&typeof D.then=="function"&&D.then(he,z)}catch(H){z(H)}finally{_!==null&&M.types!==null&&(_.types=M.types),Z.T=_}},P.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},P.use=function(r){return Z.H.use(r)},P.useActionState=function(r,_,M){return Z.H.useActionState(r,_,M)},P.useCallback=function(r,_){return Z.H.useCallback(r,_)},P.useContext=function(r){return Z.H.useContext(r)},P.useDebugValue=function(){},P.useDeferredValue=function(r,_){return Z.H.useDeferredValue(r,_)},P.useEffect=function(r,_){return Z.H.useEffect(r,_)},P.useEffectEvent=function(r){return Z.H.useEffectEvent(r)},P.useId=function(){return Z.H.useId()},P.useImperativeHandle=function(r,_,M){return Z.H.useImperativeHandle(r,_,M)},P.useInsertionEffect=function(r,_){return Z.H.useInsertionEffect(r,_)},P.useLayoutEffect=function(r,_){return Z.H.useLayoutEffect(r,_)},P.useMemo=function(r,_){return Z.H.useMemo(r,_)},P.useOptimistic=function(r,_){return Z.H.useOptimistic(r,_)},P.useReducer=function(r,_,M){return Z.H.useReducer(r,_,M)},P.useRef=function(r){return Z.H.useRef(r)},P.useState=function(r){return Z.H.useState(r)},P.useSyncExternalStore=function(r,_,M){return Z.H.useSyncExternalStore(r,_,M)},P.useTransition=function(){return Z.H.useTransition()},P.version="19.2.3",P}var z0;function _s(){return z0||(z0=1,ms.exports=fh()),ms.exports}var C=_s();const dh=q0(C);var hs={exports:{}},zn={},xs={exports:{}},vs={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T0;function mh(){return T0||(T0=1,(function(x){function T(h,A){var q=h.length;h.push(A);e:for(;0<q;){var z=q-1>>>1,$=h[z];if(0<R($,A))h[z]=A,h[q]=$,q=z;else break e}}function O(h){return h.length===0?null:h[0]}function d(h){if(h.length===0)return null;var A=h[0],q=h.pop();if(q!==A){h[0]=q;e:for(var z=0,$=h.length,r=$>>>1;z<r;){var _=2*(z+1)-1,M=h[_],D=_+1,N=h[D];if(0>R(M,q))D<$&&0>R(N,M)?(h[z]=N,h[D]=q,z=D):(h[z]=M,h[_]=q,z=_);else if(D<$&&0>R(N,q))h[z]=N,h[D]=q,z=D;else break e}}return A}function R(h,A){var q=h.sortIndex-A.sortIndex;return q!==0?q:h.id-A.id}if(x.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var U=performance;x.unstable_now=function(){return U.now()}}else{var B=Date,Q=B.now();x.unstable_now=function(){return B.now()-Q}}var w=[],y=[],V=1,G=null,te=3,Re=!1,Ae=!1,Ne=!1,Be=!1,ge=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;function me(h){for(var A=O(y);A!==null;){if(A.callback===null)d(y);else if(A.startTime<=h)d(y),A.sortIndex=A.expirationTime,T(w,A);else break;A=O(y)}}function _e(h){if(Ne=!1,me(h),!Ae)if(O(w)!==null)Ae=!0,he||(he=!0,qe());else{var A=O(y);A!==null&&le(_e,A.startTime-h)}}var he=!1,Z=-1,ie=5,de=-1;function et(){return Be?!0:!(x.unstable_now()-de<ie)}function be(){if(Be=!1,he){var h=x.unstable_now();de=h;var A=!0;try{e:{Ae=!1,Ne&&(Ne=!1,I(Z),Z=-1),Re=!0;var q=te;try{t:{for(me(h),G=O(w);G!==null&&!(G.expirationTime>h&&et());){var z=G.callback;if(typeof z=="function"){G.callback=null,te=G.priorityLevel;var $=z(G.expirationTime<=h);if(h=x.unstable_now(),typeof $=="function"){G.callback=$,me(h),A=!0;break t}G===O(w)&&d(w),me(h)}else d(w);G=O(w)}if(G!==null)A=!0;else{var r=O(y);r!==null&&le(_e,r.startTime-h),A=!1}}break e}finally{G=null,te=q,Re=!1}A=void 0}}finally{A?qe():he=!1}}}var qe;if(typeof K=="function")qe=function(){K(be)};else if(typeof MessageChannel<"u"){var De=new MessageChannel,Je=De.port2;De.port1.onmessage=be,qe=function(){Je.postMessage(null)}}else qe=function(){ge(be,0)};function le(h,A){Z=ge(function(){h(x.unstable_now())},A)}x.unstable_IdlePriority=5,x.unstable_ImmediatePriority=1,x.unstable_LowPriority=4,x.unstable_NormalPriority=3,x.unstable_Profiling=null,x.unstable_UserBlockingPriority=2,x.unstable_cancelCallback=function(h){h.callback=null},x.unstable_forceFrameRate=function(h){0>h||125<h?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ie=0<h?Math.floor(1e3/h):5},x.unstable_getCurrentPriorityLevel=function(){return te},x.unstable_next=function(h){switch(te){case 1:case 2:case 3:var A=3;break;default:A=te}var q=te;te=A;try{return h()}finally{te=q}},x.unstable_requestPaint=function(){Be=!0},x.unstable_runWithPriority=function(h,A){switch(h){case 1:case 2:case 3:case 4:case 5:break;default:h=3}var q=te;te=h;try{return A()}finally{te=q}},x.unstable_scheduleCallback=function(h,A,q){var z=x.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?z+q:z):q=z,h){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=q+$,h={id:V++,callback:A,priorityLevel:h,startTime:q,expirationTime:$,sortIndex:-1},q>z?(h.sortIndex=q,T(y,h),O(w)===null&&h===O(y)&&(Ne?(I(Z),Z=-1):Ne=!0,le(_e,q-z))):(h.sortIndex=$,T(w,h),Ae||Re||(Ae=!0,he||(he=!0,qe()))),h},x.unstable_shouldYield=et,x.unstable_wrapCallback=function(h){var A=te;return function(){var q=te;te=A;try{return h.apply(this,arguments)}finally{te=q}}}})(vs)),vs}var A0;function hh(){return A0||(A0=1,xs.exports=mh()),xs.exports}var bs={exports:{}},lt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M0;function xh(){if(M0)return lt;M0=1;var x=_s();function T(w){var y="https://react.dev/errors/"+w;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var V=2;V<arguments.length;V++)y+="&args[]="+encodeURIComponent(arguments[V])}return"Minified React error #"+w+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function O(){}var d={d:{f:O,r:function(){throw Error(T(522))},D:O,C:O,L:O,m:O,X:O,S:O,M:O},p:0,findDOMNode:null},R=Symbol.for("react.portal");function U(w,y,V){var G=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:R,key:G==null?null:""+G,children:w,containerInfo:y,implementation:V}}var B=x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Q(w,y){if(w==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,lt.createPortal=function(w,y){var V=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(T(299));return U(w,y,null,V)},lt.flushSync=function(w){var y=B.T,V=d.p;try{if(B.T=null,d.p=2,w)return w()}finally{B.T=y,d.p=V,d.d.f()}},lt.preconnect=function(w,y){typeof w=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,d.d.C(w,y))},lt.prefetchDNS=function(w){typeof w=="string"&&d.d.D(w)},lt.preinit=function(w,y){if(typeof w=="string"&&y&&typeof y.as=="string"){var V=y.as,G=Q(V,y.crossOrigin),te=typeof y.integrity=="string"?y.integrity:void 0,Re=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;V==="style"?d.d.S(w,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:G,integrity:te,fetchPriority:Re}):V==="script"&&d.d.X(w,{crossOrigin:G,integrity:te,fetchPriority:Re,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},lt.preinitModule=function(w,y){if(typeof w=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var V=Q(y.as,y.crossOrigin);d.d.M(w,{crossOrigin:V,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&d.d.M(w)},lt.preload=function(w,y){if(typeof w=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var V=y.as,G=Q(V,y.crossOrigin);d.d.L(w,V,{crossOrigin:G,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},lt.preloadModule=function(w,y){if(typeof w=="string")if(y){var V=Q(y.as,y.crossOrigin);d.d.m(w,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:V,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else d.d.m(w)},lt.requestFormReset=function(w){d.d.r(w)},lt.unstable_batchedUpdates=function(w,y){return w(y)},lt.useFormState=function(w,y,V){return B.H.useFormState(w,y,V)},lt.useFormStatus=function(){return B.H.useHostTransitionStatus()},lt.version="19.2.3",lt}var O0;function vh(){if(O0)return bs.exports;O0=1;function x(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x)}catch(T){console.error(T)}}return x(),bs.exports=xh(),bs.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D0;function bh(){if(D0)return zn;D0=1;var x=hh(),T=_s(),O=vh();function d(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function R(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function U(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function B(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Q(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function w(e){if(U(e)!==e)throw Error(d(188))}function y(e){var t=e.alternate;if(!t){if(t=U(e),t===null)throw Error(d(188));return t!==e?null:e}for(var l=e,a=t;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return w(n),e;if(i===a)return w(n),t;i=i.sibling}throw Error(d(188))}if(l.return!==a.return)l=n,a=i;else{for(var c=!1,s=n.child;s;){if(s===l){c=!0,l=n,a=i;break}if(s===a){c=!0,a=n,l=i;break}s=s.sibling}if(!c){for(s=i.child;s;){if(s===l){c=!0,l=i,a=n;break}if(s===a){c=!0,a=i,l=n;break}s=s.sibling}if(!c)throw Error(d(189))}}if(l.alternate!==a)throw Error(d(190))}if(l.tag!==3)throw Error(d(188));return l.stateNode.current===l?e:t}function V(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=V(e),t!==null)return t;e=e.sibling}return null}var G=Object.assign,te=Symbol.for("react.element"),Re=Symbol.for("react.transitional.element"),Ae=Symbol.for("react.portal"),Ne=Symbol.for("react.fragment"),Be=Symbol.for("react.strict_mode"),ge=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),K=Symbol.for("react.context"),me=Symbol.for("react.forward_ref"),_e=Symbol.for("react.suspense"),he=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),de=Symbol.for("react.activity"),et=Symbol.for("react.memo_cache_sentinel"),be=Symbol.iterator;function qe(e){return e===null||typeof e!="object"?null:(e=be&&e[be]||e["@@iterator"],typeof e=="function"?e:null)}var De=Symbol.for("react.client.reference");function Je(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===De?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ne:return"Fragment";case ge:return"Profiler";case Be:return"StrictMode";case _e:return"Suspense";case he:return"SuspenseList";case de:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Ae:return"Portal";case K:return e.displayName||"Context";case I:return(e._context.displayName||"Context")+".Consumer";case me:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Z:return t=e.displayName||null,t!==null?t:Je(e.type)||"Memo";case ie:t=e._payload,e=e._init;try{return Je(e(t))}catch{}}return null}var le=Array.isArray,h=T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=O.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},z=[],$=-1;function r(e){return{current:e}}function _(e){0>$||(e.current=z[$],z[$]=null,$--)}function M(e,t){$++,z[$]=e.current,e.current=t}var D=r(null),N=r(null),H=r(null),Y=r(null);function J(e,t){switch(M(H,t),M(N,e),M(D,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?kf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=kf(t),e=Kf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}_(D),M(D,e)}function F(){_(D),_(N),_(H)}function Ce(e){e.memoizedState!==null&&M(Y,e);var t=D.current,l=Kf(t,e.type);t!==l&&(M(N,e),M(D,l))}function tt(e){N.current===e&&(_(D),_(N)),Y.current===e&&(_(Y),yn._currentValue=q)}var ft,Gt;function wt(e){if(ft===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);ft=t&&t[1]||"",Gt=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ft+e+Gt}var Fi=!1;function Wi(e,t){if(!e||Fi)return"";Fi=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var E=function(){throw Error()};if(Object.defineProperty(E.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(E,[])}catch(g){var p=g}Reflect.construct(e,[],E)}else{try{E.call()}catch(g){p=g}e.call(E.prototype)}}else{try{throw Error()}catch(g){p=g}(E=e())&&typeof E.catch=="function"&&E.catch(function(){})}}catch(g){if(g&&p&&typeof g.stack=="string")return[g.stack,p.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),c=i[0],s=i[1];if(c&&s){var o=c.split(`
`),b=s.split(`
`);for(n=a=0;a<o.length&&!o[a].includes("DetermineComponentFrameRoot");)a++;for(;n<b.length&&!b[n].includes("DetermineComponentFrameRoot");)n++;if(a===o.length||n===b.length)for(a=o.length-1,n=b.length-1;1<=a&&0<=n&&o[a]!==b[n];)n--;for(;1<=a&&0<=n;a--,n--)if(o[a]!==b[n]){if(a!==1||n!==1)do if(a--,n--,0>n||o[a]!==b[n]){var S=`
`+o[a].replace(" at new "," at ");return e.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",e.displayName)),S}while(1<=a&&0<=n);break}}}finally{Fi=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?wt(l):""}function G0(e,t){switch(e.tag){case 26:case 27:case 5:return wt(e.type);case 16:return wt("Lazy");case 13:return e.child!==t&&t!==null?wt("Suspense Fallback"):wt("Suspense");case 19:return wt("SuspenseList");case 0:case 15:return Wi(e.type,!1);case 11:return Wi(e.type.render,!1);case 1:return Wi(e.type,!0);case 31:return wt("Activity");default:return""}}function ys(e){try{var t="",l=null;do t+=G0(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var $i=Object.prototype.hasOwnProperty,Ii=x.unstable_scheduleCallback,Pi=x.unstable_cancelCallback,Y0=x.unstable_shouldYield,X0=x.unstable_requestPaint,dt=x.unstable_now,Q0=x.unstable_getCurrentPriorityLevel,Ss=x.unstable_ImmediatePriority,Ns=x.unstable_UserBlockingPriority,Tn=x.unstable_NormalPriority,V0=x.unstable_LowPriority,js=x.unstable_IdlePriority,Z0=x.log,k0=x.unstable_setDisableYieldValue,wa=null,mt=null;function il(e){if(typeof Z0=="function"&&k0(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(wa,e)}catch{}}var ht=Math.clz32?Math.clz32:F0,K0=Math.log,J0=Math.LN2;function F0(e){return e>>>=0,e===0?32:31-(K0(e)/J0|0)|0}var An=256,Mn=262144,On=4194304;function Ol(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dn(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var n=0,i=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var s=a&134217727;return s!==0?(a=s&~i,a!==0?n=Ol(a):(c&=s,c!==0?n=Ol(c):l||(l=s&~e,l!==0&&(n=Ol(l))))):(s=a&~i,s!==0?n=Ol(s):c!==0?n=Ol(c):l||(l=a&~e,l!==0&&(n=Ol(l)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,l=t&-t,i>=l||i===32&&(l&4194048)!==0)?t:n}function Ra(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function W0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Es(){var e=On;return On<<=1,(On&62914560)===0&&(On=4194304),e}function eu(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Ca(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $0(e,t,l,a,n,i){var c=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var s=e.entanglements,o=e.expirationTimes,b=e.hiddenUpdates;for(l=c&~l;0<l;){var S=31-ht(l),E=1<<S;s[S]=0,o[S]=-1;var p=b[S];if(p!==null)for(b[S]=null,S=0;S<p.length;S++){var g=p[S];g!==null&&(g.lane&=-536870913)}l&=~E}a!==0&&zs(e,a,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(c&~t))}function zs(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-ht(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function Ts(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-ht(l),n=1<<a;n&t|e[a]&t&&(e[a]|=t),l&=~n}}function As(e,t){var l=t&-t;return l=(l&42)!==0?1:tu(l),(l&(e.suspendedLanes|t))!==0?0:l}function tu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function lu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ms(){var e=A.p;return e!==0?e:(e=window.event,e===void 0?32:v0(e.type))}function Os(e,t){var l=A.p;try{return A.p=e,t()}finally{A.p=l}}var ul=Math.random().toString(36).slice(2),Fe="__reactFiber$"+ul,nt="__reactProps$"+ul,Jl="__reactContainer$"+ul,au="__reactEvents$"+ul,I0="__reactListeners$"+ul,P0="__reactHandles$"+ul,Ds="__reactResources$"+ul,Ua="__reactMarker$"+ul;function nu(e){delete e[Fe],delete e[nt],delete e[au],delete e[I0],delete e[P0]}function Fl(e){var t=e[Fe];if(t)return t;for(var l=e.parentNode;l;){if(t=l[Jl]||l[Fe]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=e0(e);e!==null;){if(l=e[Fe])return l;e=e0(e)}return t}e=l,l=e.parentNode}return null}function Wl(e){if(e=e[Fe]||e[Jl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ha(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(d(33))}function $l(e){var t=e[Ds];return t||(t=e[Ds]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ke(e){e[Ua]=!0}var ws=new Set,Rs={};function Dl(e,t){Il(e,t),Il(e+"Capture",t)}function Il(e,t){for(Rs[e]=t,e=0;e<t.length;e++)ws.add(t[e])}var ed=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Cs={},Us={};function td(e){return $i.call(Us,e)?!0:$i.call(Cs,e)?!1:ed.test(e)?Us[e]=!0:(Cs[e]=!0,!1)}function wn(e,t,l){if(td(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function Rn(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function Yt(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}function St(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ld(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(c){l=""+c,i.call(this,c)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(c){l=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function iu(e){if(!e._valueTracker){var t=Hs(e)?"checked":"value";e._valueTracker=ld(e,t,""+e[t])}}function Bs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=Hs(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function Cn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ad=/[\n"\\]/g;function Nt(e){return e.replace(ad,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function uu(e,t,l,a,n,i,c,s){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+St(t)):e.value!==""+St(t)&&(e.value=""+St(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?cu(e,c,St(t)):l!=null?cu(e,c,St(l)):a!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+St(s):e.removeAttribute("name")}function qs(e,t,l,a,n,i,c,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){iu(e);return}l=l!=null?""+St(l):"",t=t!=null?""+St(t):l,s||t===e.value||(e.value=t),e.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=s?e.checked:!!a,e.defaultChecked=!!a,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),iu(e)}function cu(e,t,l){t==="number"&&Cn(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function Pl(e,t,l,a){if(e=e.options,t){t={};for(var n=0;n<l.length;n++)t["$"+l[n]]=!0;for(l=0;l<e.length;l++)n=t.hasOwnProperty("$"+e[l].value),e[l].selected!==n&&(e[l].selected=n),n&&a&&(e[l].defaultSelected=!0)}else{for(l=""+St(l),t=null,n=0;n<e.length;n++){if(e[n].value===l){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Ls(e,t,l){if(t!=null&&(t=""+St(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+St(l):""}function Gs(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(d(92));if(le(a)){if(1<a.length)throw Error(d(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=St(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),iu(e)}function ea(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var nd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ys(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||nd.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function Xs(e,t,l){if(t!=null&&typeof t!="object")throw Error(d(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&l[n]!==a&&Ys(e,n,a)}else for(var i in t)t.hasOwnProperty(i)&&Ys(e,i,t[i])}function su(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var id=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ud=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Un(e){return ud.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Xt(){}var ou=null;function ru(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ta=null,la=null;function Qs(e){var t=Wl(e);if(t&&(e=t.stateNode)){var l=e[nt]||null;e:switch(e=t.stateNode,t.type){case"input":if(uu(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Nt(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var n=a[nt]||null;if(!n)throw Error(d(90));uu(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&Bs(a)}break e;case"textarea":Ls(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&Pl(e,!!l.multiple,t,!1)}}}var fu=!1;function Vs(e,t,l){if(fu)return e(t,l);fu=!0;try{var a=e(t);return a}finally{if(fu=!1,(ta!==null||la!==null)&&(Si(),ta&&(t=ta,e=la,la=ta=null,Qs(t),e)))for(t=0;t<e.length;t++)Qs(e[t])}}function Ba(e,t){var l=e.stateNode;if(l===null)return null;var a=l[nt]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(d(231,t,typeof l));return l}var Qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),du=!1;if(Qt)try{var qa={};Object.defineProperty(qa,"passive",{get:function(){du=!0}}),window.addEventListener("test",qa,qa),window.removeEventListener("test",qa,qa)}catch{du=!1}var cl=null,mu=null,Hn=null;function Zs(){if(Hn)return Hn;var e,t=mu,l=t.length,a,n="value"in cl?cl.value:cl.textContent,i=n.length;for(e=0;e<l&&t[e]===n[e];e++);var c=l-e;for(a=1;a<=c&&t[l-a]===n[i-a];a++);return Hn=n.slice(e,1<a?1-a:void 0)}function Bn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qn(){return!0}function ks(){return!1}function it(e){function t(l,a,n,i,c){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(l=e[s],this[s]=l?l(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?qn:ks,this.isPropagationStopped=ks,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=qn)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=qn)},persist:function(){},isPersistent:qn}),t}var wl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ln=it(wl),La=G({},wl,{view:0,detail:0}),cd=it(La),hu,xu,Ga,Gn=G({},La,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ga&&(Ga&&e.type==="mousemove"?(hu=e.screenX-Ga.screenX,xu=e.screenY-Ga.screenY):xu=hu=0,Ga=e),hu)},movementY:function(e){return"movementY"in e?e.movementY:xu}}),Ks=it(Gn),sd=G({},Gn,{dataTransfer:0}),od=it(sd),rd=G({},La,{relatedTarget:0}),vu=it(rd),fd=G({},wl,{animationName:0,elapsedTime:0,pseudoElement:0}),dd=it(fd),md=G({},wl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hd=it(md),xd=G({},wl,{data:0}),Js=it(xd),vd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=pd[e])?!!t[e]:!1}function bu(){return gd}var _d=G({},La,{key:function(e){if(e.key){var t=vd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Bn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bu,charCode:function(e){return e.type==="keypress"?Bn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Bn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yd=it(_d),Sd=G({},Gn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fs=it(Sd),Nd=G({},La,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bu}),jd=it(Nd),Ed=G({},wl,{propertyName:0,elapsedTime:0,pseudoElement:0}),zd=it(Ed),Td=G({},Gn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ad=it(Td),Md=G({},wl,{newState:0,oldState:0}),Od=it(Md),Dd=[9,13,27,32],pu=Qt&&"CompositionEvent"in window,Ya=null;Qt&&"documentMode"in document&&(Ya=document.documentMode);var wd=Qt&&"TextEvent"in window&&!Ya,Ws=Qt&&(!pu||Ya&&8<Ya&&11>=Ya),$s=" ",Is=!1;function Ps(e,t){switch(e){case"keyup":return Dd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function eo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var aa=!1;function Rd(e,t){switch(e){case"compositionend":return eo(t);case"keypress":return t.which!==32?null:(Is=!0,$s);case"textInput":return e=t.data,e===$s&&Is?null:e;default:return null}}function Cd(e,t){if(aa)return e==="compositionend"||!pu&&Ps(e,t)?(e=Zs(),Hn=mu=cl=null,aa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ws&&t.locale!=="ko"?null:t.data;default:return null}}var Ud={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function to(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ud[e.type]:t==="textarea"}function lo(e,t,l,a){ta?la?la.push(a):la=[a]:ta=a,t=Mi(t,"onChange"),0<t.length&&(l=new Ln("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var Xa=null,Qa=null;function Hd(e){Gf(e,0)}function Yn(e){var t=Ha(e);if(Bs(t))return e}function ao(e,t){if(e==="change")return t}var no=!1;if(Qt){var gu;if(Qt){var _u="oninput"in document;if(!_u){var io=document.createElement("div");io.setAttribute("oninput","return;"),_u=typeof io.oninput=="function"}gu=_u}else gu=!1;no=gu&&(!document.documentMode||9<document.documentMode)}function uo(){Xa&&(Xa.detachEvent("onpropertychange",co),Qa=Xa=null)}function co(e){if(e.propertyName==="value"&&Yn(Qa)){var t=[];lo(t,Qa,e,ru(e)),Vs(Hd,t)}}function Bd(e,t,l){e==="focusin"?(uo(),Xa=t,Qa=l,Xa.attachEvent("onpropertychange",co)):e==="focusout"&&uo()}function qd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yn(Qa)}function Ld(e,t){if(e==="click")return Yn(t)}function Gd(e,t){if(e==="input"||e==="change")return Yn(t)}function Yd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xt=typeof Object.is=="function"?Object.is:Yd;function Va(e,t){if(xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!$i.call(t,n)||!xt(e[n],t[n]))return!1}return!0}function so(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function oo(e,t){var l=so(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=so(l)}}function ro(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ro(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function fo(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Cn(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=Cn(e.document)}return t}function yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Xd=Qt&&"documentMode"in document&&11>=document.documentMode,na=null,Su=null,Za=null,Nu=!1;function mo(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Nu||na==null||na!==Cn(a)||(a=na,"selectionStart"in a&&yu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Za&&Va(Za,a)||(Za=a,a=Mi(Su,"onSelect"),0<a.length&&(t=new Ln("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=na)))}function Rl(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var ia={animationend:Rl("Animation","AnimationEnd"),animationiteration:Rl("Animation","AnimationIteration"),animationstart:Rl("Animation","AnimationStart"),transitionrun:Rl("Transition","TransitionRun"),transitionstart:Rl("Transition","TransitionStart"),transitioncancel:Rl("Transition","TransitionCancel"),transitionend:Rl("Transition","TransitionEnd")},ju={},ho={};Qt&&(ho=document.createElement("div").style,"AnimationEvent"in window||(delete ia.animationend.animation,delete ia.animationiteration.animation,delete ia.animationstart.animation),"TransitionEvent"in window||delete ia.transitionend.transition);function Cl(e){if(ju[e])return ju[e];if(!ia[e])return e;var t=ia[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in ho)return ju[e]=t[l];return e}var xo=Cl("animationend"),vo=Cl("animationiteration"),bo=Cl("animationstart"),Qd=Cl("transitionrun"),Vd=Cl("transitionstart"),Zd=Cl("transitioncancel"),po=Cl("transitionend"),go=new Map,Eu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Eu.push("scrollEnd");function Rt(e,t){go.set(e,t),Dl(t,[e])}var Xn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},jt=[],ua=0,zu=0;function Qn(){for(var e=ua,t=zu=ua=0;t<e;){var l=jt[t];jt[t++]=null;var a=jt[t];jt[t++]=null;var n=jt[t];jt[t++]=null;var i=jt[t];if(jt[t++]=null,a!==null&&n!==null){var c=a.pending;c===null?n.next=n:(n.next=c.next,c.next=n),a.pending=n}i!==0&&_o(l,n,i)}}function Vn(e,t,l,a){jt[ua++]=e,jt[ua++]=t,jt[ua++]=l,jt[ua++]=a,zu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Tu(e,t,l,a){return Vn(e,t,l,a),Zn(e)}function Ul(e,t){return Vn(e,null,null,t),Zn(e)}function _o(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=e.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-ht(l),e=i.hiddenUpdates,a=e[n],a===null?e[n]=[t]:a.push(t),t.lane=l|536870912),i):null}function Zn(e){if(50<hn)throw hn=0,Hc=null,Error(d(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ca={};function kd(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,l,a){return new kd(e,t,l,a)}function Au(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vt(e,t){var l=e.alternate;return l===null?(l=vt(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function yo(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function kn(e,t,l,a,n,i){var c=0;if(a=e,typeof e=="function")Au(e)&&(c=1);else if(typeof e=="string")c=$m(e,l,D.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case de:return e=vt(31,l,t,n),e.elementType=de,e.lanes=i,e;case Ne:return Hl(l.children,n,i,t);case Be:c=8,n|=24;break;case ge:return e=vt(12,l,t,n|2),e.elementType=ge,e.lanes=i,e;case _e:return e=vt(13,l,t,n),e.elementType=_e,e.lanes=i,e;case he:return e=vt(19,l,t,n),e.elementType=he,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case K:c=10;break e;case I:c=9;break e;case me:c=11;break e;case Z:c=14;break e;case ie:c=16,a=null;break e}c=29,l=Error(d(130,e===null?"null":typeof e,"")),a=null}return t=vt(c,l,t,n),t.elementType=e,t.type=a,t.lanes=i,t}function Hl(e,t,l,a){return e=vt(7,e,a,t),e.lanes=l,e}function Mu(e,t,l){return e=vt(6,e,null,t),e.lanes=l,e}function So(e){var t=vt(18,null,null,0);return t.stateNode=e,t}function Ou(e,t,l){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var No=new WeakMap;function Et(e,t){if(typeof e=="object"&&e!==null){var l=No.get(e);return l!==void 0?l:(t={value:e,source:t,stack:ys(t)},No.set(e,t),t)}return{value:e,source:t,stack:ys(t)}}var sa=[],oa=0,Kn=null,ka=0,zt=[],Tt=0,sl=null,Ht=1,Bt="";function Zt(e,t){sa[oa++]=ka,sa[oa++]=Kn,Kn=e,ka=t}function jo(e,t,l){zt[Tt++]=Ht,zt[Tt++]=Bt,zt[Tt++]=sl,sl=e;var a=Ht;e=Bt;var n=32-ht(a)-1;a&=~(1<<n),l+=1;var i=32-ht(t)+n;if(30<i){var c=n-n%5;i=(a&(1<<c)-1).toString(32),a>>=c,n-=c,Ht=1<<32-ht(t)+n|l<<n|a,Bt=i+e}else Ht=1<<i|l<<n|a,Bt=e}function Du(e){e.return!==null&&(Zt(e,1),jo(e,1,0))}function wu(e){for(;e===Kn;)Kn=sa[--oa],sa[oa]=null,ka=sa[--oa],sa[oa]=null;for(;e===sl;)sl=zt[--Tt],zt[Tt]=null,Bt=zt[--Tt],zt[Tt]=null,Ht=zt[--Tt],zt[Tt]=null}function Eo(e,t){zt[Tt++]=Ht,zt[Tt++]=Bt,zt[Tt++]=sl,Ht=t.id,Bt=t.overflow,sl=e}var We=null,Me=null,re=!1,ol=null,At=!1,Ru=Error(d(519));function rl(e){var t=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ka(Et(t,e)),Ru}function zo(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[Fe]=e,t[nt]=a,l){case"dialog":ce("cancel",t),ce("close",t);break;case"iframe":case"object":case"embed":ce("load",t);break;case"video":case"audio":for(l=0;l<vn.length;l++)ce(vn[l],t);break;case"source":ce("error",t);break;case"img":case"image":case"link":ce("error",t),ce("load",t);break;case"details":ce("toggle",t);break;case"input":ce("invalid",t),qs(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":ce("invalid",t);break;case"textarea":ce("invalid",t),Gs(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||Vf(t.textContent,l)?(a.popover!=null&&(ce("beforetoggle",t),ce("toggle",t)),a.onScroll!=null&&ce("scroll",t),a.onScrollEnd!=null&&ce("scrollend",t),a.onClick!=null&&(t.onclick=Xt),t=!0):t=!1,t||rl(e,!0)}function To(e){for(We=e.return;We;)switch(We.tag){case 5:case 31:case 13:At=!1;return;case 27:case 3:At=!0;return;default:We=We.return}}function ra(e){if(e!==We)return!1;if(!re)return To(e),re=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||$c(e.type,e.memoizedProps)),l=!l),l&&Me&&rl(e),To(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));Me=Pf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));Me=Pf(e)}else t===27?(t=Me,jl(e.type)?(e=ls,ls=null,Me=e):Me=t):Me=We?Ot(e.stateNode.nextSibling):null;return!0}function Bl(){Me=We=null,re=!1}function Cu(){var e=ol;return e!==null&&(ot===null?ot=e:ot.push.apply(ot,e),ol=null),e}function Ka(e){ol===null?ol=[e]:ol.push(e)}var Uu=r(null),ql=null,kt=null;function fl(e,t,l){M(Uu,t._currentValue),t._currentValue=l}function Kt(e){e._currentValue=Uu.current,_(Uu)}function Hu(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function Bu(e,t,l,a){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var c=n.child;i=i.firstContext;e:for(;i!==null;){var s=i;i=n;for(var o=0;o<t.length;o++)if(s.context===t[o]){i.lanes|=l,s=i.alternate,s!==null&&(s.lanes|=l),Hu(i.return,l,e),a||(c=null);break e}i=s.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(d(341));c.lanes|=l,i=c.alternate,i!==null&&(i.lanes|=l),Hu(c,l,e),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===e){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function fa(e,t,l,a){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(d(387));if(c=c.memoizedProps,c!==null){var s=n.type;xt(n.pendingProps.value,c.value)||(e!==null?e.push(s):e=[s])}}else if(n===Y.current){if(c=n.alternate,c===null)throw Error(d(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(yn):e=[yn])}n=n.return}e!==null&&Bu(t,e,l,a),t.flags|=262144}function Jn(e){for(e=e.firstContext;e!==null;){if(!xt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ll(e){ql=e,kt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function $e(e){return Ao(ql,e)}function Fn(e,t){return ql===null&&Ll(e),Ao(e,t)}function Ao(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},kt===null){if(e===null)throw Error(d(308));kt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else kt=kt.next=t;return l}var Kd=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},Jd=x.unstable_scheduleCallback,Fd=x.unstable_NormalPriority,Ye={$$typeof:K,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qu(){return{controller:new Kd,data:new Map,refCount:0}}function Ja(e){e.refCount--,e.refCount===0&&Jd(Fd,function(){e.controller.abort()})}var Fa=null,Lu=0,da=0,ma=null;function Wd(e,t){if(Fa===null){var l=Fa=[];Lu=0,da=Xc(),ma={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Lu++,t.then(Mo,Mo),t}function Mo(){if(--Lu===0&&Fa!==null){ma!==null&&(ma.status="fulfilled");var e=Fa;Fa=null,da=0,ma=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function $d(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<l.length;n++)(0,l[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var Oo=h.S;h.S=function(e,t){hf=dt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Wd(e,t),Oo!==null&&Oo(e,t)};var Gl=r(null);function Gu(){var e=Gl.current;return e!==null?e:Te.pooledCache}function Wn(e,t){t===null?M(Gl,Gl.current):M(Gl,t.pool)}function Do(){var e=Gu();return e===null?null:{parent:Ye._currentValue,pool:e}}var ha=Error(d(460)),Yu=Error(d(474)),$n=Error(d(542)),In={then:function(){}};function wo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ro(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(Xt,Xt),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Uo(e),e;default:if(typeof t.status=="string")t.then(Xt,Xt);else{if(e=Te,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Uo(e),e}throw Xl=t,ha}}function Yl(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Xl=l,ha):l}}var Xl=null;function Co(){if(Xl===null)throw Error(d(459));var e=Xl;return Xl=null,e}function Uo(e){if(e===ha||e===$n)throw Error(d(483))}var xa=null,Wa=0;function Pn(e){var t=Wa;return Wa+=1,xa===null&&(xa=[]),Ro(xa,e,t)}function $a(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ei(e,t){throw t.$$typeof===te?Error(d(525)):(e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ho(e){function t(m,f){if(e){var v=m.deletions;v===null?(m.deletions=[f],m.flags|=16):v.push(f)}}function l(m,f){if(!e)return null;for(;f!==null;)t(m,f),f=f.sibling;return null}function a(m){for(var f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function n(m,f){return m=Vt(m,f),m.index=0,m.sibling=null,m}function i(m,f,v){return m.index=v,e?(v=m.alternate,v!==null?(v=v.index,v<f?(m.flags|=67108866,f):v):(m.flags|=67108866,f)):(m.flags|=1048576,f)}function c(m){return e&&m.alternate===null&&(m.flags|=67108866),m}function s(m,f,v,j){return f===null||f.tag!==6?(f=Mu(v,m.mode,j),f.return=m,f):(f=n(f,v),f.return=m,f)}function o(m,f,v,j){var k=v.type;return k===Ne?S(m,f,v.props.children,j,v.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ie&&Yl(k)===f.type)?(f=n(f,v.props),$a(f,v),f.return=m,f):(f=kn(v.type,v.key,v.props,null,m.mode,j),$a(f,v),f.return=m,f)}function b(m,f,v,j){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=Ou(v,m.mode,j),f.return=m,f):(f=n(f,v.children||[]),f.return=m,f)}function S(m,f,v,j,k){return f===null||f.tag!==7?(f=Hl(v,m.mode,j,k),f.return=m,f):(f=n(f,v),f.return=m,f)}function E(m,f,v){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=Mu(""+f,m.mode,v),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Re:return v=kn(f.type,f.key,f.props,null,m.mode,v),$a(v,f),v.return=m,v;case Ae:return f=Ou(f,m.mode,v),f.return=m,f;case ie:return f=Yl(f),E(m,f,v)}if(le(f)||qe(f))return f=Hl(f,m.mode,v,null),f.return=m,f;if(typeof f.then=="function")return E(m,Pn(f),v);if(f.$$typeof===K)return E(m,Fn(m,f),v);ei(m,f)}return null}function p(m,f,v,j){var k=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return k!==null?null:s(m,f,""+v,j);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Re:return v.key===k?o(m,f,v,j):null;case Ae:return v.key===k?b(m,f,v,j):null;case ie:return v=Yl(v),p(m,f,v,j)}if(le(v)||qe(v))return k!==null?null:S(m,f,v,j,null);if(typeof v.then=="function")return p(m,f,Pn(v),j);if(v.$$typeof===K)return p(m,f,Fn(m,v),j);ei(m,v)}return null}function g(m,f,v,j,k){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return m=m.get(v)||null,s(f,m,""+j,k);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Re:return m=m.get(j.key===null?v:j.key)||null,o(f,m,j,k);case Ae:return m=m.get(j.key===null?v:j.key)||null,b(f,m,j,k);case ie:return j=Yl(j),g(m,f,v,j,k)}if(le(j)||qe(j))return m=m.get(v)||null,S(f,m,j,k,null);if(typeof j.then=="function")return g(m,f,v,Pn(j),k);if(j.$$typeof===K)return g(m,f,v,Fn(f,j),k);ei(f,j)}return null}function L(m,f,v,j){for(var k=null,xe=null,X=f,ne=f=0,oe=null;X!==null&&ne<v.length;ne++){X.index>ne?(oe=X,X=null):oe=X.sibling;var ve=p(m,X,v[ne],j);if(ve===null){X===null&&(X=oe);break}e&&X&&ve.alternate===null&&t(m,X),f=i(ve,f,ne),xe===null?k=ve:xe.sibling=ve,xe=ve,X=oe}if(ne===v.length)return l(m,X),re&&Zt(m,ne),k;if(X===null){for(;ne<v.length;ne++)X=E(m,v[ne],j),X!==null&&(f=i(X,f,ne),xe===null?k=X:xe.sibling=X,xe=X);return re&&Zt(m,ne),k}for(X=a(X);ne<v.length;ne++)oe=g(X,m,ne,v[ne],j),oe!==null&&(e&&oe.alternate!==null&&X.delete(oe.key===null?ne:oe.key),f=i(oe,f,ne),xe===null?k=oe:xe.sibling=oe,xe=oe);return e&&X.forEach(function(Ml){return t(m,Ml)}),re&&Zt(m,ne),k}function W(m,f,v,j){if(v==null)throw Error(d(151));for(var k=null,xe=null,X=f,ne=f=0,oe=null,ve=v.next();X!==null&&!ve.done;ne++,ve=v.next()){X.index>ne?(oe=X,X=null):oe=X.sibling;var Ml=p(m,X,ve.value,j);if(Ml===null){X===null&&(X=oe);break}e&&X&&Ml.alternate===null&&t(m,X),f=i(Ml,f,ne),xe===null?k=Ml:xe.sibling=Ml,xe=Ml,X=oe}if(ve.done)return l(m,X),re&&Zt(m,ne),k;if(X===null){for(;!ve.done;ne++,ve=v.next())ve=E(m,ve.value,j),ve!==null&&(f=i(ve,f,ne),xe===null?k=ve:xe.sibling=ve,xe=ve);return re&&Zt(m,ne),k}for(X=a(X);!ve.done;ne++,ve=v.next())ve=g(X,m,ne,ve.value,j),ve!==null&&(e&&ve.alternate!==null&&X.delete(ve.key===null?ne:ve.key),f=i(ve,f,ne),xe===null?k=ve:xe.sibling=ve,xe=ve);return e&&X.forEach(function(sh){return t(m,sh)}),re&&Zt(m,ne),k}function ze(m,f,v,j){if(typeof v=="object"&&v!==null&&v.type===Ne&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Re:e:{for(var k=v.key;f!==null;){if(f.key===k){if(k=v.type,k===Ne){if(f.tag===7){l(m,f.sibling),j=n(f,v.props.children),j.return=m,m=j;break e}}else if(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ie&&Yl(k)===f.type){l(m,f.sibling),j=n(f,v.props),$a(j,v),j.return=m,m=j;break e}l(m,f);break}else t(m,f);f=f.sibling}v.type===Ne?(j=Hl(v.props.children,m.mode,j,v.key),j.return=m,m=j):(j=kn(v.type,v.key,v.props,null,m.mode,j),$a(j,v),j.return=m,m=j)}return c(m);case Ae:e:{for(k=v.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){l(m,f.sibling),j=n(f,v.children||[]),j.return=m,m=j;break e}else{l(m,f);break}else t(m,f);f=f.sibling}j=Ou(v,m.mode,j),j.return=m,m=j}return c(m);case ie:return v=Yl(v),ze(m,f,v,j)}if(le(v))return L(m,f,v,j);if(qe(v)){if(k=qe(v),typeof k!="function")throw Error(d(150));return v=k.call(v),W(m,f,v,j)}if(typeof v.then=="function")return ze(m,f,Pn(v),j);if(v.$$typeof===K)return ze(m,f,Fn(m,v),j);ei(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,f!==null&&f.tag===6?(l(m,f.sibling),j=n(f,v),j.return=m,m=j):(l(m,f),j=Mu(v,m.mode,j),j.return=m,m=j),c(m)):l(m,f)}return function(m,f,v,j){try{Wa=0;var k=ze(m,f,v,j);return xa=null,k}catch(X){if(X===ha||X===$n)throw X;var xe=vt(29,X,null,m.mode);return xe.lanes=j,xe.return=m,xe}finally{}}}var Ql=Ho(!0),Bo=Ho(!1),dl=!1;function Xu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ml(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function hl(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(pe&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=Zn(e),_o(e,null,l),t}return Vn(e,a,t,l),Zn(e)}function Ia(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,Ts(e,l)}}function Vu(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var c={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=c:i=i.next=c,l=l.next}while(l!==null);i===null?n=i=t:i=i.next=t}else n=i=t;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var Zu=!1;function Pa(){if(Zu){var e=ma;if(e!==null)throw e}}function en(e,t,l,a){Zu=!1;var n=e.updateQueue;dl=!1;var i=n.firstBaseUpdate,c=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var o=s,b=o.next;o.next=null,c===null?i=b:c.next=b,c=o;var S=e.alternate;S!==null&&(S=S.updateQueue,s=S.lastBaseUpdate,s!==c&&(s===null?S.firstBaseUpdate=b:s.next=b,S.lastBaseUpdate=o))}if(i!==null){var E=n.baseState;c=0,S=b=o=null,s=i;do{var p=s.lane&-536870913,g=p!==s.lane;if(g?(se&p)===p:(a&p)===p){p!==0&&p===da&&(Zu=!0),S!==null&&(S=S.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var L=e,W=s;p=t;var ze=l;switch(W.tag){case 1:if(L=W.payload,typeof L=="function"){E=L.call(ze,E,p);break e}E=L;break e;case 3:L.flags=L.flags&-65537|128;case 0:if(L=W.payload,p=typeof L=="function"?L.call(ze,E,p):L,p==null)break e;E=G({},E,p);break e;case 2:dl=!0}}p=s.callback,p!==null&&(e.flags|=64,g&&(e.flags|=8192),g=n.callbacks,g===null?n.callbacks=[p]:g.push(p))}else g={lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},S===null?(b=S=g,o=E):S=S.next=g,c|=p;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;g=s,s=g.next,g.next=null,n.lastBaseUpdate=g,n.shared.pending=null}}while(!0);S===null&&(o=E),n.baseState=o,n.firstBaseUpdate=b,n.lastBaseUpdate=S,i===null&&(n.shared.lanes=0),gl|=c,e.lanes=c,e.memoizedState=E}}function qo(e,t){if(typeof e!="function")throw Error(d(191,e));e.call(t)}function Lo(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)qo(l[e],t)}var va=r(null),ti=r(0);function Go(e,t){e=ll,M(ti,e),M(va,t),ll=e|t.baseLanes}function ku(){M(ti,ll),M(va,va.current)}function Ku(){ll=ti.current,_(va),_(ti)}var bt=r(null),Mt=null;function xl(e){var t=e.alternate;M(Le,Le.current&1),M(bt,e),Mt===null&&(t===null||va.current!==null||t.memoizedState!==null)&&(Mt=e)}function Ju(e){M(Le,Le.current),M(bt,e),Mt===null&&(Mt=e)}function Yo(e){e.tag===22?(M(Le,Le.current),M(bt,e),Mt===null&&(Mt=e)):vl()}function vl(){M(Le,Le.current),M(bt,bt.current)}function pt(e){_(bt),Mt===e&&(Mt=null),_(Le)}var Le=r(0);function li(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||es(l)||ts(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Jt=0,ae=null,je=null,Xe=null,ai=!1,ba=!1,Vl=!1,ni=0,tn=0,pa=null,Id=0;function Ue(){throw Error(d(321))}function Fu(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!xt(e[l],t[l]))return!1;return!0}function Wu(e,t,l,a,n,i){return Jt=i,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,h.H=e===null||e.memoizedState===null?jr:fc,Vl=!1,i=l(a,n),Vl=!1,ba&&(i=Qo(t,l,a,n)),Xo(e),i}function Xo(e){h.H=nn;var t=je!==null&&je.next!==null;if(Jt=0,Xe=je=ae=null,ai=!1,tn=0,pa=null,t)throw Error(d(300));e===null||Qe||(e=e.dependencies,e!==null&&Jn(e)&&(Qe=!0))}function Qo(e,t,l,a){ae=e;var n=0;do{if(ba&&(pa=null),tn=0,ba=!1,25<=n)throw Error(d(301));if(n+=1,Xe=je=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}h.H=Er,i=t(l,a)}while(ba);return i}function Pd(){var e=h.H,t=e.useState()[0];return t=typeof t.then=="function"?ln(t):t,e=e.useState()[0],(je!==null?je.memoizedState:null)!==e&&(ae.flags|=1024),t}function $u(){var e=ni!==0;return ni=0,e}function Iu(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function Pu(e){if(ai){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ai=!1}Jt=0,Xe=je=ae=null,ba=!1,tn=ni=0,pa=null}function at(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?ae.memoizedState=Xe=e:Xe=Xe.next=e,Xe}function Ge(){if(je===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var t=Xe===null?ae.memoizedState:Xe.next;if(t!==null)Xe=t,je=e;else{if(e===null)throw ae.alternate===null?Error(d(467)):Error(d(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Xe===null?ae.memoizedState=Xe=e:Xe=Xe.next=e}return Xe}function ii(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ln(e){var t=tn;return tn+=1,pa===null&&(pa=[]),e=Ro(pa,e,t),t=ae,(Xe===null?t.memoizedState:Xe.next)===null&&(t=t.alternate,h.H=t===null||t.memoizedState===null?jr:fc),e}function ui(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ln(e);if(e.$$typeof===K)return $e(e)}throw Error(d(438,String(e)))}function ec(e){var t=null,l=ae.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=ae.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=ii(),ae.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=et;return t.index++,l}function Ft(e,t){return typeof t=="function"?t(e):t}function ci(e){var t=Ge();return tc(t,je,e)}function tc(e,t,l){var a=e.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=l;var n=e.baseQueue,i=a.pending;if(i!==null){if(n!==null){var c=n.next;n.next=i.next,i.next=c}t.baseQueue=n=i,a.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var s=c=null,o=null,b=t,S=!1;do{var E=b.lane&-536870913;if(E!==b.lane?(se&E)===E:(Jt&E)===E){var p=b.revertLane;if(p===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null}),E===da&&(S=!0);else if((Jt&p)===p){b=b.next,p===da&&(S=!0);continue}else E={lane:0,revertLane:b.revertLane,gesture:null,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},o===null?(s=o=E,c=i):o=o.next=E,ae.lanes|=p,gl|=p;E=b.action,Vl&&l(i,E),i=b.hasEagerState?b.eagerState:l(i,E)}else p={lane:E,revertLane:b.revertLane,gesture:b.gesture,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},o===null?(s=o=p,c=i):o=o.next=p,ae.lanes|=E,gl|=E;b=b.next}while(b!==null&&b!==t);if(o===null?c=i:o.next=s,!xt(i,e.memoizedState)&&(Qe=!0,S&&(l=ma,l!==null)))throw l;e.memoizedState=i,e.baseState=c,e.baseQueue=o,a.lastRenderedState=i}return n===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function lc(e){var t=Ge(),l=t.queue;if(l===null)throw Error(d(311));l.lastRenderedReducer=e;var a=l.dispatch,n=l.pending,i=t.memoizedState;if(n!==null){l.pending=null;var c=n=n.next;do i=e(i,c.action),c=c.next;while(c!==n);xt(i,t.memoizedState)||(Qe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),l.lastRenderedState=i}return[i,a]}function Vo(e,t,l){var a=ae,n=Ge(),i=re;if(i){if(l===void 0)throw Error(d(407));l=l()}else l=t();var c=!xt((je||n).memoizedState,l);if(c&&(n.memoizedState=l,Qe=!0),n=n.queue,ic(Ko.bind(null,a,n,e),[e]),n.getSnapshot!==t||c||Xe!==null&&Xe.memoizedState.tag&1){if(a.flags|=2048,ga(9,{destroy:void 0},ko.bind(null,a,n,l,t),null),Te===null)throw Error(d(349));i||(Jt&127)!==0||Zo(a,t,l)}return l}function Zo(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=ae.updateQueue,t===null?(t=ii(),ae.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function ko(e,t,l,a){t.value=l,t.getSnapshot=a,Jo(t)&&Fo(e)}function Ko(e,t,l){return l(function(){Jo(t)&&Fo(e)})}function Jo(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!xt(e,l)}catch{return!0}}function Fo(e){var t=Ul(e,2);t!==null&&rt(t,e,2)}function ac(e){var t=at();if(typeof e=="function"){var l=e;if(e=l(),Vl){il(!0);try{l()}finally{il(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ft,lastRenderedState:e},t}function Wo(e,t,l,a){return e.baseState=l,tc(e,je,typeof a=="function"?a:Ft)}function em(e,t,l,a,n){if(ri(e))throw Error(d(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};h.T!==null?l(!0):i.isTransition=!1,a(i),l=t.pending,l===null?(i.next=t.pending=i,$o(t,i)):(i.next=l.next,t.pending=l.next=i)}}function $o(e,t){var l=t.action,a=t.payload,n=e.state;if(t.isTransition){var i=h.T,c={};h.T=c;try{var s=l(n,a),o=h.S;o!==null&&o(c,s),Io(e,t,s)}catch(b){nc(e,t,b)}finally{i!==null&&c.types!==null&&(i.types=c.types),h.T=i}}else try{i=l(n,a),Io(e,t,i)}catch(b){nc(e,t,b)}}function Io(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Po(e,t,a)},function(a){return nc(e,t,a)}):Po(e,t,l)}function Po(e,t,l){t.status="fulfilled",t.value=l,er(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,$o(e,l)))}function nc(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,er(t),t=t.next;while(t!==a)}e.action=null}function er(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function tr(e,t){return t}function lr(e,t){if(re){var l=Te.formState;if(l!==null){e:{var a=ae;if(re){if(Me){t:{for(var n=Me,i=At;n.nodeType!==8;){if(!i){n=null;break t}if(n=Ot(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Me=Ot(n.nextSibling),a=n.data==="F!";break e}}rl(a)}a=!1}a&&(t=l[0])}}return l=at(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tr,lastRenderedState:t},l.queue=a,l=yr.bind(null,ae,a),a.dispatch=l,a=ac(!1),i=rc.bind(null,ae,!1,a.queue),a=at(),n={state:t,dispatch:null,action:e,pending:null},a.queue=n,l=em.bind(null,ae,n,i,l),n.dispatch=l,a.memoizedState=e,[t,l,!1]}function ar(e){var t=Ge();return nr(t,je,e)}function nr(e,t,l){if(t=tc(e,t,tr)[0],e=ci(Ft)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=ln(t)}catch(c){throw c===ha?$n:c}else a=t;t=Ge();var n=t.queue,i=n.dispatch;return l!==t.memoizedState&&(ae.flags|=2048,ga(9,{destroy:void 0},tm.bind(null,n,l),null)),[a,i,e]}function tm(e,t){e.action=t}function ir(e){var t=Ge(),l=je;if(l!==null)return nr(t,l,e);Ge(),t=t.memoizedState,l=Ge();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function ga(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=ae.updateQueue,t===null&&(t=ii(),ae.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function ur(){return Ge().memoizedState}function si(e,t,l,a){var n=at();ae.flags|=e,n.memoizedState=ga(1|t,{destroy:void 0},l,a===void 0?null:a)}function oi(e,t,l,a){var n=Ge();a=a===void 0?null:a;var i=n.memoizedState.inst;je!==null&&a!==null&&Fu(a,je.memoizedState.deps)?n.memoizedState=ga(t,i,l,a):(ae.flags|=e,n.memoizedState=ga(1|t,i,l,a))}function cr(e,t){si(8390656,8,e,t)}function ic(e,t){oi(2048,8,e,t)}function lm(e){ae.flags|=4;var t=ae.updateQueue;if(t===null)t=ii(),ae.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function sr(e){var t=Ge().memoizedState;return lm({ref:t,nextImpl:e}),function(){if((pe&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}function or(e,t){return oi(4,2,e,t)}function rr(e,t){return oi(4,4,e,t)}function fr(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function dr(e,t,l){l=l!=null?l.concat([e]):null,oi(4,4,fr.bind(null,t,e),l)}function uc(){}function mr(e,t){var l=Ge();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&Fu(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function hr(e,t){var l=Ge();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&Fu(t,a[1]))return a[0];if(a=e(),Vl){il(!0);try{e()}finally{il(!1)}}return l.memoizedState=[a,t],a}function cc(e,t,l){return l===void 0||(Jt&1073741824)!==0&&(se&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=vf(),ae.lanes|=e,gl|=e,l)}function xr(e,t,l,a){return xt(l,t)?l:va.current!==null?(e=cc(e,l,a),xt(e,t)||(Qe=!0),e):(Jt&42)===0||(Jt&1073741824)!==0&&(se&261930)===0?(Qe=!0,e.memoizedState=l):(e=vf(),ae.lanes|=e,gl|=e,t)}function vr(e,t,l,a,n){var i=A.p;A.p=i!==0&&8>i?i:8;var c=h.T,s={};h.T=s,rc(e,!1,t,l);try{var o=n(),b=h.S;if(b!==null&&b(s,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var S=$d(o,a);an(e,t,S,yt(e))}else an(e,t,a,yt(e))}catch(E){an(e,t,{then:function(){},status:"rejected",reason:E},yt())}finally{A.p=i,c!==null&&s.types!==null&&(c.types=s.types),h.T=c}}function am(){}function sc(e,t,l,a){if(e.tag!==5)throw Error(d(476));var n=br(e).queue;vr(e,n,t,q,l===null?am:function(){return pr(e),l(a)})}function br(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ft,lastRenderedState:q},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ft,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function pr(e){var t=br(e);t.next===null&&(t=e.alternate.memoizedState),an(e,t.next.queue,{},yt())}function oc(){return $e(yn)}function gr(){return Ge().memoizedState}function _r(){return Ge().memoizedState}function nm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=yt();e=ml(l);var a=hl(t,e,l);a!==null&&(rt(a,t,l),Ia(a,t,l)),t={cache:qu()},e.payload=t;return}t=t.return}}function im(e,t,l){var a=yt();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ri(e)?Sr(t,l):(l=Tu(e,t,l,a),l!==null&&(rt(l,e,a),Nr(l,t,a)))}function yr(e,t,l){var a=yt();an(e,t,l,a)}function an(e,t,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(ri(e))Sr(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var c=t.lastRenderedState,s=i(c,l);if(n.hasEagerState=!0,n.eagerState=s,xt(s,c))return Vn(e,t,n,0),Te===null&&Qn(),!1}catch{}finally{}if(l=Tu(e,t,n,a),l!==null)return rt(l,e,a),Nr(l,t,a),!0}return!1}function rc(e,t,l,a){if(a={lane:2,revertLane:Xc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ri(e)){if(t)throw Error(d(479))}else t=Tu(e,l,a,2),t!==null&&rt(t,e,2)}function ri(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function Sr(e,t){ba=ai=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function Nr(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,Ts(e,l)}}var nn={readContext:$e,use:ui,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useLayoutEffect:Ue,useInsertionEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useSyncExternalStore:Ue,useId:Ue,useHostTransitionStatus:Ue,useFormState:Ue,useActionState:Ue,useOptimistic:Ue,useMemoCache:Ue,useCacheRefresh:Ue};nn.useEffectEvent=Ue;var jr={readContext:$e,use:ui,useCallback:function(e,t){return at().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:cr,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,si(4194308,4,fr.bind(null,t,e),l)},useLayoutEffect:function(e,t){return si(4194308,4,e,t)},useInsertionEffect:function(e,t){si(4,2,e,t)},useMemo:function(e,t){var l=at();t=t===void 0?null:t;var a=e();if(Vl){il(!0);try{e()}finally{il(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=at();if(l!==void 0){var n=l(t);if(Vl){il(!0);try{l(t)}finally{il(!1)}}}else n=t;return a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=im.bind(null,ae,e),[a.memoizedState,e]},useRef:function(e){var t=at();return e={current:e},t.memoizedState=e},useState:function(e){e=ac(e);var t=e.queue,l=yr.bind(null,ae,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:uc,useDeferredValue:function(e,t){var l=at();return cc(l,e,t)},useTransition:function(){var e=ac(!1);return e=vr.bind(null,ae,e.queue,!0,!1),at().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=ae,n=at();if(re){if(l===void 0)throw Error(d(407));l=l()}else{if(l=t(),Te===null)throw Error(d(349));(se&127)!==0||Zo(a,t,l)}n.memoizedState=l;var i={value:l,getSnapshot:t};return n.queue=i,cr(Ko.bind(null,a,i,e),[e]),a.flags|=2048,ga(9,{destroy:void 0},ko.bind(null,a,i,l,t),null),l},useId:function(){var e=at(),t=Te.identifierPrefix;if(re){var l=Bt,a=Ht;l=(a&~(1<<32-ht(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=ni++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=Id++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:oc,useFormState:lr,useActionState:lr,useOptimistic:function(e){var t=at();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=rc.bind(null,ae,!0,l),l.dispatch=t,[e,t]},useMemoCache:ec,useCacheRefresh:function(){return at().memoizedState=nm.bind(null,ae)},useEffectEvent:function(e){var t=at(),l={impl:e};return t.memoizedState=l,function(){if((pe&2)!==0)throw Error(d(440));return l.impl.apply(void 0,arguments)}}},fc={readContext:$e,use:ui,useCallback:mr,useContext:$e,useEffect:ic,useImperativeHandle:dr,useInsertionEffect:or,useLayoutEffect:rr,useMemo:hr,useReducer:ci,useRef:ur,useState:function(){return ci(Ft)},useDebugValue:uc,useDeferredValue:function(e,t){var l=Ge();return xr(l,je.memoizedState,e,t)},useTransition:function(){var e=ci(Ft)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:ln(e),t]},useSyncExternalStore:Vo,useId:gr,useHostTransitionStatus:oc,useFormState:ar,useActionState:ar,useOptimistic:function(e,t){var l=Ge();return Wo(l,je,e,t)},useMemoCache:ec,useCacheRefresh:_r};fc.useEffectEvent=sr;var Er={readContext:$e,use:ui,useCallback:mr,useContext:$e,useEffect:ic,useImperativeHandle:dr,useInsertionEffect:or,useLayoutEffect:rr,useMemo:hr,useReducer:lc,useRef:ur,useState:function(){return lc(Ft)},useDebugValue:uc,useDeferredValue:function(e,t){var l=Ge();return je===null?cc(l,e,t):xr(l,je.memoizedState,e,t)},useTransition:function(){var e=lc(Ft)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:ln(e),t]},useSyncExternalStore:Vo,useId:gr,useHostTransitionStatus:oc,useFormState:ir,useActionState:ir,useOptimistic:function(e,t){var l=Ge();return je!==null?Wo(l,je,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:ec,useCacheRefresh:_r};Er.useEffectEvent=sr;function dc(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:G({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var mc={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=yt(),n=ml(a);n.payload=t,l!=null&&(n.callback=l),t=hl(e,n,a),t!==null&&(rt(t,e,a),Ia(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=yt(),n=ml(a);n.tag=1,n.payload=t,l!=null&&(n.callback=l),t=hl(e,n,a),t!==null&&(rt(t,e,a),Ia(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=yt(),a=ml(l);a.tag=2,t!=null&&(a.callback=t),t=hl(e,a,l),t!==null&&(rt(t,e,l),Ia(t,e,l))}};function zr(e,t,l,a,n,i,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,c):t.prototype&&t.prototype.isPureReactComponent?!Va(l,a)||!Va(n,i):!0}function Tr(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&mc.enqueueReplaceState(t,t.state,null)}function Zl(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=G({},l));for(var n in e)l[n]===void 0&&(l[n]=e[n])}return l}function Ar(e){Xn(e)}function Mr(e){console.error(e)}function Or(e){Xn(e)}function fi(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Dr(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function hc(e,t,l){return l=ml(l),l.tag=3,l.payload={element:null},l.callback=function(){fi(e,t)},l}function wr(e){return e=ml(e),e.tag=3,e}function Rr(e,t,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;e.payload=function(){return n(i)},e.callback=function(){Dr(t,l,a)}}var c=l.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){Dr(t,l,a),typeof n!="function"&&(_l===null?_l=new Set([this]):_l.add(this));var s=a.stack;this.componentDidCatch(a.value,{componentStack:s!==null?s:""})})}function um(e,t,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&fa(t,l,n,!0),l=bt.current,l!==null){switch(l.tag){case 31:case 13:return Mt===null?Ni():l.alternate===null&&He===0&&(He=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===In?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),Lc(e,a,n)),!1;case 22:return l.flags|=65536,a===In?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),Lc(e,a,n)),!1}throw Error(d(435,l.tag))}return Lc(e,a,n),Ni(),!1}if(re)return t=bt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==Ru&&(e=Error(d(422),{cause:a}),Ka(Et(e,l)))):(a!==Ru&&(t=Error(d(423),{cause:a}),Ka(Et(t,l))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,a=Et(a,l),n=hc(e.stateNode,a,n),Vu(e,n),He!==4&&(He=2)),!1;var i=Error(d(520),{cause:a});if(i=Et(i,l),mn===null?mn=[i]:mn.push(i),He!==4&&(He=2),t===null)return!0;a=Et(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=n&-n,l.lanes|=e,e=hc(l.stateNode,a,e),Vu(l,e),!1;case 1:if(t=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(_l===null||!_l.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=wr(n),Rr(n,e,l,a),Vu(l,n),!1}l=l.return}while(l!==null);return!1}var xc=Error(d(461)),Qe=!1;function Ie(e,t,l,a){t.child=e===null?Bo(t,null,l,a):Ql(t,e.child,l,a)}function Cr(e,t,l,a,n){l=l.render;var i=t.ref;if("ref"in a){var c={};for(var s in a)s!=="ref"&&(c[s]=a[s])}else c=a;return Ll(t),a=Wu(e,t,l,c,i,n),s=$u(),e!==null&&!Qe?(Iu(e,t,n),Wt(e,t,n)):(re&&s&&Du(t),t.flags|=1,Ie(e,t,a,n),t.child)}function Ur(e,t,l,a,n){if(e===null){var i=l.type;return typeof i=="function"&&!Au(i)&&i.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=i,Hr(e,t,i,a,n)):(e=kn(l.type,null,a,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Nc(e,n)){var c=i.memoizedProps;if(l=l.compare,l=l!==null?l:Va,l(c,a)&&e.ref===t.ref)return Wt(e,t,n)}return t.flags|=1,e=Vt(i,a),e.ref=t.ref,e.return=t,t.child=e}function Hr(e,t,l,a,n){if(e!==null){var i=e.memoizedProps;if(Va(i,a)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=a=i,Nc(e,n))(e.flags&131072)!==0&&(Qe=!0);else return t.lanes=e.lanes,Wt(e,t,n)}return vc(e,t,l,a,n)}function Br(e,t,l,a){var n=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|l:l,e!==null){for(a=t.child=e.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,t.child=null;return qr(e,t,i,l,a)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Wn(t,i!==null?i.cachePool:null),i!==null?Go(t,i):ku(),Yo(t);else return a=t.lanes=536870912,qr(e,t,i!==null?i.baseLanes|l:l,l,a)}else i!==null?(Wn(t,i.cachePool),Go(t,i),vl(),t.memoizedState=null):(e!==null&&Wn(t,null),ku(),vl());return Ie(e,t,n,l),t.child}function un(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function qr(e,t,l,a,n){var i=Gu();return i=i===null?null:{parent:Ye._currentValue,pool:i},t.memoizedState={baseLanes:l,cachePool:i},e!==null&&Wn(t,null),ku(),Yo(t),e!==null&&fa(e,t,a,!0),t.childLanes=n,null}function di(e,t){return t=hi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Lr(e,t,l){return Ql(t,e.child,null,l),e=di(t,t.pendingProps),e.flags|=2,pt(t),t.memoizedState=null,e}function cm(e,t,l){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(re){if(a.mode==="hidden")return e=di(t,a),t.lanes=536870912,un(null,e);if(Ju(t),(e=Me)?(e=If(e,At),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:sl!==null?{id:Ht,overflow:Bt}:null,retryLane:536870912,hydrationErrors:null},l=So(e),l.return=t,t.child=l,We=t,Me=null)):e=null,e===null)throw rl(t);return t.lanes=536870912,null}return di(t,a)}var i=e.memoizedState;if(i!==null){var c=i.dehydrated;if(Ju(t),n)if(t.flags&256)t.flags&=-257,t=Lr(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(d(558));else if(Qe||fa(e,t,l,!1),n=(l&e.childLanes)!==0,Qe||n){if(a=Te,a!==null&&(c=As(a,l),c!==0&&c!==i.retryLane))throw i.retryLane=c,Ul(e,c),rt(a,e,c),xc;Ni(),t=Lr(e,t,l)}else e=i.treeContext,Me=Ot(c.nextSibling),We=t,re=!0,ol=null,At=!1,e!==null&&Eo(t,e),t=di(t,a),t.flags|=4096;return t}return e=Vt(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function mi(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(d(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function vc(e,t,l,a,n){return Ll(t),l=Wu(e,t,l,a,void 0,n),a=$u(),e!==null&&!Qe?(Iu(e,t,n),Wt(e,t,n)):(re&&a&&Du(t),t.flags|=1,Ie(e,t,l,n),t.child)}function Gr(e,t,l,a,n,i){return Ll(t),t.updateQueue=null,l=Qo(t,a,l,n),Xo(e),a=$u(),e!==null&&!Qe?(Iu(e,t,i),Wt(e,t,i)):(re&&a&&Du(t),t.flags|=1,Ie(e,t,l,i),t.child)}function Yr(e,t,l,a,n){if(Ll(t),t.stateNode===null){var i=ca,c=l.contextType;typeof c=="object"&&c!==null&&(i=$e(c)),i=new l(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=mc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},Xu(t),c=l.contextType,i.context=typeof c=="object"&&c!==null?$e(c):ca,i.state=t.memoizedState,c=l.getDerivedStateFromProps,typeof c=="function"&&(dc(t,l,c,a),i.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&mc.enqueueReplaceState(i,i.state,null),en(t,a,i,n),Pa(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var s=t.memoizedProps,o=Zl(l,s);i.props=o;var b=i.context,S=l.contextType;c=ca,typeof S=="object"&&S!==null&&(c=$e(S));var E=l.getDerivedStateFromProps;S=typeof E=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,S||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||b!==c)&&Tr(t,i,a,c),dl=!1;var p=t.memoizedState;i.state=p,en(t,a,i,n),Pa(),b=t.memoizedState,s||p!==b||dl?(typeof E=="function"&&(dc(t,l,E,a),b=t.memoizedState),(o=dl||zr(t,l,o,a,p,b,c))?(S||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=b),i.props=a,i.state=b,i.context=c,a=o):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,Qu(e,t),c=t.memoizedProps,S=Zl(l,c),i.props=S,E=t.pendingProps,p=i.context,b=l.contextType,o=ca,typeof b=="object"&&b!==null&&(o=$e(b)),s=l.getDerivedStateFromProps,(b=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==E||p!==o)&&Tr(t,i,a,o),dl=!1,p=t.memoizedState,i.state=p,en(t,a,i,n),Pa();var g=t.memoizedState;c!==E||p!==g||dl||e!==null&&e.dependencies!==null&&Jn(e.dependencies)?(typeof s=="function"&&(dc(t,l,s,a),g=t.memoizedState),(S=dl||zr(t,l,S,a,p,g,o)||e!==null&&e.dependencies!==null&&Jn(e.dependencies))?(b||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,g,o),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,g,o)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=g),i.props=a,i.state=g,i.context=o,a=S):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,mi(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=Ql(t,e.child,null,n),t.child=Ql(t,null,l,n)):Ie(e,t,l,n),t.memoizedState=i.state,e=t.child):e=Wt(e,t,n),e}function Xr(e,t,l,a){return Bl(),t.flags|=256,Ie(e,t,l,a),t.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pc(e){return{baseLanes:e,cachePool:Do()}}function gc(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=_t),e}function Qr(e,t,l){var a=t.pendingProps,n=!1,i=(t.flags&128)!==0,c;if((c=i)||(c=e!==null&&e.memoizedState===null?!1:(Le.current&2)!==0),c&&(n=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(re){if(n?xl(t):vl(),(e=Me)?(e=If(e,At),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:sl!==null?{id:Ht,overflow:Bt}:null,retryLane:536870912,hydrationErrors:null},l=So(e),l.return=t,t.child=l,We=t,Me=null)):e=null,e===null)throw rl(t);return ts(e)?t.lanes=32:t.lanes=536870912,null}var s=a.children;return a=a.fallback,n?(vl(),n=t.mode,s=hi({mode:"hidden",children:s},n),a=Hl(a,n,l,null),s.return=t,a.return=t,s.sibling=a,t.child=s,a=t.child,a.memoizedState=pc(l),a.childLanes=gc(e,c,l),t.memoizedState=bc,un(null,a)):(xl(t),_c(t,s))}var o=e.memoizedState;if(o!==null&&(s=o.dehydrated,s!==null)){if(i)t.flags&256?(xl(t),t.flags&=-257,t=yc(e,t,l)):t.memoizedState!==null?(vl(),t.child=e.child,t.flags|=128,t=null):(vl(),s=a.fallback,n=t.mode,a=hi({mode:"visible",children:a.children},n),s=Hl(s,n,l,null),s.flags|=2,a.return=t,s.return=t,a.sibling=s,t.child=a,Ql(t,e.child,null,l),a=t.child,a.memoizedState=pc(l),a.childLanes=gc(e,c,l),t.memoizedState=bc,t=un(null,a));else if(xl(t),ts(s)){if(c=s.nextSibling&&s.nextSibling.dataset,c)var b=c.dgst;c=b,a=Error(d(419)),a.stack="",a.digest=c,Ka({value:a,source:null,stack:null}),t=yc(e,t,l)}else if(Qe||fa(e,t,l,!1),c=(l&e.childLanes)!==0,Qe||c){if(c=Te,c!==null&&(a=As(c,l),a!==0&&a!==o.retryLane))throw o.retryLane=a,Ul(e,a),rt(c,e,a),xc;es(s)||Ni(),t=yc(e,t,l)}else es(s)?(t.flags|=192,t.child=e.child,t=null):(e=o.treeContext,Me=Ot(s.nextSibling),We=t,re=!0,ol=null,At=!1,e!==null&&Eo(t,e),t=_c(t,a.children),t.flags|=4096);return t}return n?(vl(),s=a.fallback,n=t.mode,o=e.child,b=o.sibling,a=Vt(o,{mode:"hidden",children:a.children}),a.subtreeFlags=o.subtreeFlags&65011712,b!==null?s=Vt(b,s):(s=Hl(s,n,l,null),s.flags|=2),s.return=t,a.return=t,a.sibling=s,t.child=a,un(null,a),a=t.child,s=e.child.memoizedState,s===null?s=pc(l):(n=s.cachePool,n!==null?(o=Ye._currentValue,n=n.parent!==o?{parent:o,pool:o}:n):n=Do(),s={baseLanes:s.baseLanes|l,cachePool:n}),a.memoizedState=s,a.childLanes=gc(e,c,l),t.memoizedState=bc,un(e.child,a)):(xl(t),l=e.child,e=l.sibling,l=Vt(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=l,t.memoizedState=null,l)}function _c(e,t){return t=hi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function hi(e,t){return e=vt(22,e,null,t),e.lanes=0,e}function yc(e,t,l){return Ql(t,e.child,null,l),e=_c(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Vr(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Hu(e.return,t,l)}function Sc(e,t,l,a,n,i){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:i}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=l,c.tailMode=n,c.treeForkCount=i)}function Zr(e,t,l){var a=t.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var c=Le.current,s=(c&2)!==0;if(s?(c=c&1|2,t.flags|=128):c&=1,M(Le,c),Ie(e,t,a,l),a=re?ka:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vr(e,l,t);else if(e.tag===19)Vr(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(l=t.child,n=null;l!==null;)e=l.alternate,e!==null&&li(e)===null&&(n=l),l=l.sibling;l=n,l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null),Sc(t,!1,n,l,i,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&li(e)===null){t.child=n;break}e=n.sibling,n.sibling=l,l=n,n=e}Sc(t,!0,l,null,i,a);break;case"together":Sc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Wt(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),gl|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(fa(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,l=Vt(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=Vt(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function Nc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Jn(e)))}function sm(e,t,l){switch(t.tag){case 3:J(t,t.stateNode.containerInfo),fl(t,Ye,e.memoizedState.cache),Bl();break;case 27:case 5:Ce(t);break;case 4:J(t,t.stateNode.containerInfo);break;case 10:fl(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ju(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(xl(t),t.flags|=128,null):(l&t.child.childLanes)!==0?Qr(e,t,l):(xl(t),e=Wt(e,t,l),e!==null?e.sibling:null);xl(t);break;case 19:var n=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(fa(e,t,l,!1),a=(l&t.childLanes)!==0),n){if(a)return Zr(e,t,l);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),M(Le,Le.current),a)break;return null;case 22:return t.lanes=0,Br(e,t,l,t.pendingProps);case 24:fl(t,Ye,e.memoizedState.cache)}return Wt(e,t,l)}function kr(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)Qe=!0;else{if(!Nc(e,l)&&(t.flags&128)===0)return Qe=!1,sm(e,t,l);Qe=(e.flags&131072)!==0}else Qe=!1,re&&(t.flags&1048576)!==0&&jo(t,ka,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Yl(t.elementType),t.type=e,typeof e=="function")Au(e)?(a=Zl(e,a),t.tag=1,t=Yr(null,t,e,a,l)):(t.tag=0,t=vc(null,t,e,a,l));else{if(e!=null){var n=e.$$typeof;if(n===me){t.tag=11,t=Cr(null,t,e,a,l);break e}else if(n===Z){t.tag=14,t=Ur(null,t,e,a,l);break e}}throw t=Je(e)||e,Error(d(306,t,""))}}return t;case 0:return vc(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,n=Zl(a,t.pendingProps),Yr(e,t,a,n,l);case 3:e:{if(J(t,t.stateNode.containerInfo),e===null)throw Error(d(387));a=t.pendingProps;var i=t.memoizedState;n=i.element,Qu(e,t),en(t,a,null,l);var c=t.memoizedState;if(a=c.cache,fl(t,Ye,a),a!==i.cache&&Bu(t,[Ye],l,!0),Pa(),a=c.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Xr(e,t,a,l);break e}else if(a!==n){n=Et(Error(d(424)),t),Ka(n),t=Xr(e,t,a,l);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Me=Ot(e.firstChild),We=t,re=!0,ol=null,At=!0,l=Bo(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Bl(),a===n){t=Wt(e,t,l);break e}Ie(e,t,a,l)}t=t.child}return t;case 26:return mi(e,t),e===null?(l=n0(t.type,null,t.pendingProps,null))?t.memoizedState=l:re||(l=t.type,e=t.pendingProps,a=Oi(H.current).createElement(l),a[Fe]=t,a[nt]=e,Pe(a,l,e),ke(a),t.stateNode=a):t.memoizedState=n0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ce(t),e===null&&re&&(a=t.stateNode=t0(t.type,t.pendingProps,H.current),We=t,At=!0,n=Me,jl(t.type)?(ls=n,Me=Ot(a.firstChild)):Me=n),Ie(e,t,t.pendingProps.children,l),mi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&re&&((n=a=Me)&&(a=qm(a,t.type,t.pendingProps,At),a!==null?(t.stateNode=a,We=t,Me=Ot(a.firstChild),At=!1,n=!0):n=!1),n||rl(t)),Ce(t),n=t.type,i=t.pendingProps,c=e!==null?e.memoizedProps:null,a=i.children,$c(n,i)?a=null:c!==null&&$c(n,c)&&(t.flags|=32),t.memoizedState!==null&&(n=Wu(e,t,Pd,null,null,l),yn._currentValue=n),mi(e,t),Ie(e,t,a,l),t.child;case 6:return e===null&&re&&((e=l=Me)&&(l=Lm(l,t.pendingProps,At),l!==null?(t.stateNode=l,We=t,Me=null,e=!0):e=!1),e||rl(t)),null;case 13:return Qr(e,t,l);case 4:return J(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Ql(t,null,a,l):Ie(e,t,a,l),t.child;case 11:return Cr(e,t,t.type,t.pendingProps,l);case 7:return Ie(e,t,t.pendingProps,l),t.child;case 8:return Ie(e,t,t.pendingProps.children,l),t.child;case 12:return Ie(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,fl(t,t.type,a.value),Ie(e,t,a.children,l),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,Ll(t),n=$e(n),a=a(n),t.flags|=1,Ie(e,t,a,l),t.child;case 14:return Ur(e,t,t.type,t.pendingProps,l);case 15:return Hr(e,t,t.type,t.pendingProps,l);case 19:return Zr(e,t,l);case 31:return cm(e,t,l);case 22:return Br(e,t,l,t.pendingProps);case 24:return Ll(t),a=$e(Ye),e===null?(n=Gu(),n===null&&(n=Te,i=qu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),t.memoizedState={parent:a,cache:n},Xu(t),fl(t,Ye,n)):((e.lanes&l)!==0&&(Qu(e,t),en(t,null,null,l),Pa()),n=e.memoizedState,i=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),fl(t,Ye,a)):(a=i.cache,fl(t,Ye,a),a!==n.cache&&Bu(t,[Ye],l,!0))),Ie(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(d(156,t.tag))}function $t(e){e.flags|=4}function jc(e,t,l,a,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(_f())e.flags|=8192;else throw Xl=In,Yu}else e.flags&=-16777217}function Kr(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!o0(t))if(_f())e.flags|=8192;else throw Xl=In,Yu}function xi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Es():536870912,e.lanes|=t,Na|=t)}function cn(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function om(e,t,l){var a=t.pendingProps;switch(wu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Oe(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Kt(Ye),F(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(ra(t)?$t(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Cu())),Oe(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?($t(t),i!==null?(Oe(t),Kr(t,i)):(Oe(t),jc(t,n,null,a,l))):i?i!==e.memoizedState?($t(t),Oe(t),Kr(t,i)):(Oe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&$t(t),Oe(t),jc(t,n,e,a,l)),null;case 27:if(tt(t),l=H.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&$t(t);else{if(!a){if(t.stateNode===null)throw Error(d(166));return Oe(t),null}e=D.current,ra(t)?zo(t):(e=t0(n,a,l),t.stateNode=e,$t(t))}return Oe(t),null;case 5:if(tt(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&$t(t);else{if(!a){if(t.stateNode===null)throw Error(d(166));return Oe(t),null}if(i=D.current,ra(t))zo(t);else{var c=Oi(H.current);switch(i){case 1:i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=c.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?c.createElement("select",{is:a.is}):c.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?c.createElement(n,{is:a.is}):c.createElement(n)}}i[Fe]=t,i[nt]=a;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=i;e:switch(Pe(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&$t(t)}}return Oe(t),jc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&$t(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(d(166));if(e=H.current,ra(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,n=We,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}e[Fe]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||Vf(e.nodeValue,l)),e||rl(t,!0)}else e=Oi(e).createTextNode(a),e[Fe]=t,t.stateNode=e}return Oe(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=ra(t),l!==null){if(e===null){if(!a)throw Error(d(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[Fe]=t}else Bl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),e=!1}else l=Cu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(pt(t),t):(pt(t),null);if((t.flags&128)!==0)throw Error(d(558))}return Oe(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=ra(t),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(d(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));n[Fe]=t}else Bl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),n=!1}else n=Cu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(pt(t),t):(pt(t),null)}return pt(t),(t.flags&128)!==0?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),xi(t,t.updateQueue),Oe(t),null);case 4:return F(),e===null&&kc(t.stateNode.containerInfo),Oe(t),null;case 10:return Kt(t.type),Oe(t),null;case 19:if(_(Le),a=t.memoizedState,a===null)return Oe(t),null;if(n=(t.flags&128)!==0,i=a.rendering,i===null)if(n)cn(a,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=li(e),i!==null){for(t.flags|=128,cn(a,!1),e=i.updateQueue,t.updateQueue=e,xi(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)yo(l,e),l=l.sibling;return M(Le,Le.current&1|2),re&&Zt(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&dt()>_i&&(t.flags|=128,n=!0,cn(a,!1),t.lanes=4194304)}else{if(!n)if(e=li(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,xi(t,e),cn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!re)return Oe(t),null}else 2*dt()-a.renderingStartTime>_i&&l!==536870912&&(t.flags|=128,n=!0,cn(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=dt(),e.sibling=null,l=Le.current,M(Le,n?l&1|2:l&1),re&&Zt(t,a.treeForkCount),e):(Oe(t),null);case 22:case 23:return pt(t),Ku(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),l=t.updateQueue,l!==null&&xi(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&_(Gl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Kt(Ye),Oe(t),null;case 25:return null;case 30:return null}throw Error(d(156,t.tag))}function rm(e,t){switch(wu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Kt(Ye),F(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return tt(t),null;case 31:if(t.memoizedState!==null){if(pt(t),t.alternate===null)throw Error(d(340));Bl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(pt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));Bl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _(Le),null;case 4:return F(),null;case 10:return Kt(t.type),null;case 22:case 23:return pt(t),Ku(),e!==null&&_(Gl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Kt(Ye),null;case 25:return null;default:return null}}function Jr(e,t){switch(wu(t),t.tag){case 3:Kt(Ye),F();break;case 26:case 27:case 5:tt(t);break;case 4:F();break;case 31:t.memoizedState!==null&&pt(t);break;case 13:pt(t);break;case 19:_(Le);break;case 10:Kt(t.type);break;case 22:case 23:pt(t),Ku(),e!==null&&_(Gl);break;case 24:Kt(Ye)}}function sn(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&e)===e){a=void 0;var i=l.create,c=l.inst;a=i(),c.destroy=a}l=l.next}while(l!==n)}}catch(s){Se(t,t.return,s)}}function bl(e,t,l){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){var c=a.inst,s=c.destroy;if(s!==void 0){c.destroy=void 0,n=t;var o=l,b=s;try{b()}catch(S){Se(n,o,S)}}}a=a.next}while(a!==i)}}catch(S){Se(t,t.return,S)}}function Fr(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{Lo(t,l)}catch(a){Se(e,e.return,a)}}}function Wr(e,t,l){l.props=Zl(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){Se(e,t,a)}}function on(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(n){Se(e,t,n)}}function qt(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){Se(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){Se(e,t,n)}else l.current=null}function $r(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){Se(e,e.return,n)}}function Ec(e,t,l){try{var a=e.stateNode;wm(a,e.type,l,t),a[nt]=t}catch(n){Se(e,e.return,n)}}function Ir(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&jl(e.type)||e.tag===4}function zc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ir(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&jl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Tc(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Xt));else if(a!==4&&(a===27&&jl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(Tc(e,t,l),e=e.sibling;e!==null;)Tc(e,t,l),e=e.sibling}function vi(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&jl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(vi(e,t,l),e=e.sibling;e!==null;)vi(e,t,l),e=e.sibling}function Pr(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Pe(t,a,l),t[Fe]=e,t[nt]=l}catch(i){Se(e,e.return,i)}}var It=!1,Ve=!1,Ac=!1,ef=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function fm(e,t){if(e=e.containerInfo,Fc=Bi,e=fo(e),yu(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break e}var c=0,s=-1,o=-1,b=0,S=0,E=e,p=null;t:for(;;){for(var g;E!==l||n!==0&&E.nodeType!==3||(s=c+n),E!==i||a!==0&&E.nodeType!==3||(o=c+a),E.nodeType===3&&(c+=E.nodeValue.length),(g=E.firstChild)!==null;)p=E,E=g;for(;;){if(E===e)break t;if(p===l&&++b===n&&(s=c),p===i&&++S===a&&(o=c),(g=E.nextSibling)!==null)break;E=p,p=E.parentNode}E=g}l=s===-1||o===-1?null:{start:s,end:o}}else l=null}l=l||{start:0,end:0}}else l=null;for(Wc={focusedElem:e,selectionRange:l},Bi=!1,Ke=t;Ke!==null;)if(t=Ke,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ke=e;else for(;Ke!==null;){switch(t=Ke,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)n=e[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,l=t,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var L=Zl(l.type,n);e=a.getSnapshotBeforeUpdate(L,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(W){Se(l,l.return,W)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)Pc(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Pc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=t.sibling,e!==null){e.return=t.return,Ke=e;break}Ke=t.return}}function tf(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:el(e,l),a&4&&sn(5,l);break;case 1:if(el(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(c){Se(l,l.return,c)}else{var n=Zl(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){Se(l,l.return,c)}}a&64&&Fr(l),a&512&&on(l,l.return);break;case 3:if(el(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{Lo(e,t)}catch(c){Se(l,l.return,c)}}break;case 27:t===null&&a&4&&Pr(l);case 26:case 5:el(e,l),t===null&&a&4&&$r(l),a&512&&on(l,l.return);break;case 12:el(e,l);break;case 31:el(e,l),a&4&&nf(e,l);break;case 13:el(e,l),a&4&&uf(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=_m.bind(null,l),Gm(e,l))));break;case 22:if(a=l.memoizedState!==null||It,!a){t=t!==null&&t.memoizedState!==null||Ve,n=It;var i=Ve;It=a,(Ve=t)&&!i?tl(e,l,(l.subtreeFlags&8772)!==0):el(e,l),It=n,Ve=i}break;case 30:break;default:el(e,l)}}function lf(e){var t=e.alternate;t!==null&&(e.alternate=null,lf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&nu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var we=null,ut=!1;function Pt(e,t,l){for(l=l.child;l!==null;)af(e,t,l),l=l.sibling}function af(e,t,l){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(wa,l)}catch{}switch(l.tag){case 26:Ve||qt(l,t),Pt(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Ve||qt(l,t);var a=we,n=ut;jl(l.type)&&(we=l.stateNode,ut=!1),Pt(e,t,l),pn(l.stateNode),we=a,ut=n;break;case 5:Ve||qt(l,t);case 6:if(a=we,n=ut,we=null,Pt(e,t,l),we=a,ut=n,we!==null)if(ut)try{(we.nodeType===9?we.body:we.nodeName==="HTML"?we.ownerDocument.body:we).removeChild(l.stateNode)}catch(i){Se(l,t,i)}else try{we.removeChild(l.stateNode)}catch(i){Se(l,t,i)}break;case 18:we!==null&&(ut?(e=we,Wf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Da(e)):Wf(we,l.stateNode));break;case 4:a=we,n=ut,we=l.stateNode.containerInfo,ut=!0,Pt(e,t,l),we=a,ut=n;break;case 0:case 11:case 14:case 15:bl(2,l,t),Ve||bl(4,l,t),Pt(e,t,l);break;case 1:Ve||(qt(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Wr(l,t,a)),Pt(e,t,l);break;case 21:Pt(e,t,l);break;case 22:Ve=(a=Ve)||l.memoizedState!==null,Pt(e,t,l),Ve=a;break;default:Pt(e,t,l)}}function nf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Da(e)}catch(l){Se(t,t.return,l)}}}function uf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Da(e)}catch(l){Se(t,t.return,l)}}function dm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ef),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ef),t;default:throw Error(d(435,e.tag))}}function bi(e,t){var l=dm(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var n=ym.bind(null,e,a);a.then(n,n)}})}function ct(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=e,c=t,s=c;e:for(;s!==null;){switch(s.tag){case 27:if(jl(s.type)){we=s.stateNode,ut=!1;break e}break;case 5:we=s.stateNode,ut=!1;break e;case 3:case 4:we=s.stateNode.containerInfo,ut=!0;break e}s=s.return}if(we===null)throw Error(d(160));af(i,c,n),we=null,ut=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)cf(t,e),t=t.sibling}var Ct=null;function cf(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ct(t,e),st(e),a&4&&(bl(3,e,e.return),sn(3,e),bl(5,e,e.return));break;case 1:ct(t,e),st(e),a&512&&(Ve||l===null||qt(l,l.return)),a&64&&It&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=Ct;if(ct(t,e),st(e),a&512&&(Ve||l===null||qt(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Ua]||i[Fe]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),Pe(i,a,l),i[Fe]=e,ke(i),a=i;break e;case"link":var c=c0("link","href",n).get(a+(l.href||""));if(c){for(var s=0;s<c.length;s++)if(i=c[s],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){c.splice(s,1);break t}}i=n.createElement(a),Pe(i,a,l),n.head.appendChild(i);break;case"meta":if(c=c0("meta","content",n).get(a+(l.content||""))){for(s=0;s<c.length;s++)if(i=c[s],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){c.splice(s,1);break t}}i=n.createElement(a),Pe(i,a,l),n.head.appendChild(i);break;default:throw Error(d(468,a))}i[Fe]=e,ke(i),a=i}e.stateNode=a}else s0(n,e.type,e.stateNode);else e.stateNode=u0(n,a,e.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?s0(n,e.type,e.stateNode):u0(n,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Ec(e,e.memoizedProps,l.memoizedProps)}break;case 27:ct(t,e),st(e),a&512&&(Ve||l===null||qt(l,l.return)),l!==null&&a&4&&Ec(e,e.memoizedProps,l.memoizedProps);break;case 5:if(ct(t,e),st(e),a&512&&(Ve||l===null||qt(l,l.return)),e.flags&32){n=e.stateNode;try{ea(n,"")}catch(L){Se(e,e.return,L)}}a&4&&e.stateNode!=null&&(n=e.memoizedProps,Ec(e,n,l!==null?l.memoizedProps:n)),a&1024&&(Ac=!0);break;case 6:if(ct(t,e),st(e),a&4){if(e.stateNode===null)throw Error(d(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(L){Se(e,e.return,L)}}break;case 3:if(Ri=null,n=Ct,Ct=Di(t.containerInfo),ct(t,e),Ct=n,st(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Da(t.containerInfo)}catch(L){Se(e,e.return,L)}Ac&&(Ac=!1,sf(e));break;case 4:a=Ct,Ct=Di(e.stateNode.containerInfo),ct(t,e),st(e),Ct=a;break;case 12:ct(t,e),st(e);break;case 31:ct(t,e),st(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,bi(e,a)));break;case 13:ct(t,e),st(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(gi=dt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,bi(e,a)));break;case 22:n=e.memoizedState!==null;var o=l!==null&&l.memoizedState!==null,b=It,S=Ve;if(It=b||n,Ve=S||o,ct(t,e),Ve=S,It=b,st(e),a&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(l===null||o||It||Ve||kl(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){o=l=t;try{if(i=o.stateNode,n)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{s=o.stateNode;var E=o.memoizedProps.style,p=E!=null&&E.hasOwnProperty("display")?E.display:null;s.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(L){Se(o,o.return,L)}}}else if(t.tag===6){if(l===null){o=t;try{o.stateNode.nodeValue=n?"":o.memoizedProps}catch(L){Se(o,o.return,L)}}}else if(t.tag===18){if(l===null){o=t;try{var g=o.stateNode;n?$f(g,!0):$f(o.stateNode,!1)}catch(L){Se(o,o.return,L)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,bi(e,l))));break;case 19:ct(t,e),st(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,bi(e,a)));break;case 30:break;case 21:break;default:ct(t,e),st(e)}}function st(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(Ir(a)){l=a;break}a=a.return}if(l==null)throw Error(d(160));switch(l.tag){case 27:var n=l.stateNode,i=zc(e);vi(e,i,n);break;case 5:var c=l.stateNode;l.flags&32&&(ea(c,""),l.flags&=-33);var s=zc(e);vi(e,s,c);break;case 3:case 4:var o=l.stateNode.containerInfo,b=zc(e);Tc(e,b,o);break;default:throw Error(d(161))}}catch(S){Se(e,e.return,S)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;sf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function el(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)tf(e,t.alternate,t),t=t.sibling}function kl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:bl(4,t,t.return),kl(t);break;case 1:qt(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&Wr(t,t.return,l),kl(t);break;case 27:pn(t.stateNode);case 26:case 5:qt(t,t.return),kl(t);break;case 22:t.memoizedState===null&&kl(t);break;case 30:kl(t);break;default:kl(t)}e=e.sibling}}function tl(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=e,i=t,c=i.flags;switch(i.tag){case 0:case 11:case 15:tl(n,i,l),sn(4,i);break;case 1:if(tl(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(b){Se(a,a.return,b)}if(a=i,n=a.updateQueue,n!==null){var s=a.stateNode;try{var o=n.shared.hiddenCallbacks;if(o!==null)for(n.shared.hiddenCallbacks=null,n=0;n<o.length;n++)qo(o[n],s)}catch(b){Se(a,a.return,b)}}l&&c&64&&Fr(i),on(i,i.return);break;case 27:Pr(i);case 26:case 5:tl(n,i,l),l&&a===null&&c&4&&$r(i),on(i,i.return);break;case 12:tl(n,i,l);break;case 31:tl(n,i,l),l&&c&4&&nf(n,i);break;case 13:tl(n,i,l),l&&c&4&&uf(n,i);break;case 22:i.memoizedState===null&&tl(n,i,l),on(i,i.return);break;case 30:break;default:tl(n,i,l)}t=t.sibling}}function Mc(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&Ja(l))}function Oc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ja(e))}function Ut(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)of(e,t,l,a),t=t.sibling}function of(e,t,l,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Ut(e,t,l,a),n&2048&&sn(9,t);break;case 1:Ut(e,t,l,a);break;case 3:Ut(e,t,l,a),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ja(e)));break;case 12:if(n&2048){Ut(e,t,l,a),e=t.stateNode;try{var i=t.memoizedProps,c=i.id,s=i.onPostCommit;typeof s=="function"&&s(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(o){Se(t,t.return,o)}}else Ut(e,t,l,a);break;case 31:Ut(e,t,l,a);break;case 13:Ut(e,t,l,a);break;case 23:break;case 22:i=t.stateNode,c=t.alternate,t.memoizedState!==null?i._visibility&2?Ut(e,t,l,a):rn(e,t):i._visibility&2?Ut(e,t,l,a):(i._visibility|=2,_a(e,t,l,a,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Mc(c,t);break;case 24:Ut(e,t,l,a),n&2048&&Oc(t.alternate,t);break;default:Ut(e,t,l,a)}}function _a(e,t,l,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,c=t,s=l,o=a,b=c.flags;switch(c.tag){case 0:case 11:case 15:_a(i,c,s,o,n),sn(8,c);break;case 23:break;case 22:var S=c.stateNode;c.memoizedState!==null?S._visibility&2?_a(i,c,s,o,n):rn(i,c):(S._visibility|=2,_a(i,c,s,o,n)),n&&b&2048&&Mc(c.alternate,c);break;case 24:_a(i,c,s,o,n),n&&b&2048&&Oc(c.alternate,c);break;default:_a(i,c,s,o,n)}t=t.sibling}}function rn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,n=a.flags;switch(a.tag){case 22:rn(l,a),n&2048&&Mc(a.alternate,a);break;case 24:rn(l,a),n&2048&&Oc(a.alternate,a);break;default:rn(l,a)}t=t.sibling}}var fn=8192;function ya(e,t,l){if(e.subtreeFlags&fn)for(e=e.child;e!==null;)rf(e,t,l),e=e.sibling}function rf(e,t,l){switch(e.tag){case 26:ya(e,t,l),e.flags&fn&&e.memoizedState!==null&&Im(l,Ct,e.memoizedState,e.memoizedProps);break;case 5:ya(e,t,l);break;case 3:case 4:var a=Ct;Ct=Di(e.stateNode.containerInfo),ya(e,t,l),Ct=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=fn,fn=16777216,ya(e,t,l),fn=a):ya(e,t,l));break;default:ya(e,t,l)}}function ff(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function dn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Ke=a,mf(a,e)}ff(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)df(e),e=e.sibling}function df(e){switch(e.tag){case 0:case 11:case 15:dn(e),e.flags&2048&&bl(9,e,e.return);break;case 3:dn(e);break;case 12:dn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,pi(e)):dn(e);break;default:dn(e)}}function pi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Ke=a,mf(a,e)}ff(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:bl(8,t,t.return),pi(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,pi(t));break;default:pi(t)}e=e.sibling}}function mf(e,t){for(;Ke!==null;){var l=Ke;switch(l.tag){case 0:case 11:case 15:bl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ja(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Ke=a;else e:for(l=e;Ke!==null;){a=Ke;var n=a.sibling,i=a.return;if(lf(a),a===l){Ke=null;break e}if(n!==null){n.return=i,Ke=n;break e}Ke=i}}}var mm={getCacheForType:function(e){var t=$e(Ye),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return $e(Ye).controller.signal}},hm=typeof WeakMap=="function"?WeakMap:Map,pe=0,Te=null,ue=null,se=0,ye=0,gt=null,pl=!1,Sa=!1,Dc=!1,ll=0,He=0,gl=0,Kl=0,wc=0,_t=0,Na=0,mn=null,ot=null,Rc=!1,gi=0,hf=0,_i=1/0,yi=null,_l=null,Ze=0,yl=null,ja=null,al=0,Cc=0,Uc=null,xf=null,hn=0,Hc=null;function yt(){return(pe&2)!==0&&se!==0?se&-se:h.T!==null?Xc():Ms()}function vf(){if(_t===0)if((se&536870912)===0||re){var e=Mn;Mn<<=1,(Mn&3932160)===0&&(Mn=262144),_t=e}else _t=536870912;return e=bt.current,e!==null&&(e.flags|=32),_t}function rt(e,t,l){(e===Te&&(ye===2||ye===9)||e.cancelPendingCommit!==null)&&(Ea(e,0),Sl(e,se,_t,!1)),Ca(e,l),((pe&2)===0||e!==Te)&&(e===Te&&((pe&2)===0&&(Kl|=l),He===4&&Sl(e,se,_t,!1)),Lt(e))}function bf(e,t,l){if((pe&6)!==0)throw Error(d(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||Ra(e,t),n=a?bm(e,t):qc(e,t,!0),i=a;do{if(n===0){Sa&&!a&&Sl(e,t,0,!1);break}else{if(l=e.current.alternate,i&&!xm(l)){n=qc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var s=e;n=mn;var o=s.current.memoizedState.isDehydrated;if(o&&(Ea(s,c).flags|=256),c=qc(s,c,!1),c!==2){if(Dc&&!o){s.errorRecoveryDisabledLanes|=i,Kl|=i,n=4;break e}i=ot,ot=n,i!==null&&(ot===null?ot=i:ot.push.apply(ot,i))}n=c}if(i=!1,n!==2)continue}}if(n===1){Ea(e,0),Sl(e,t,0,!0);break}e:{switch(a=e,i=n,i){case 0:case 1:throw Error(d(345));case 4:if((t&4194048)!==t)break;case 6:Sl(a,t,_t,!pl);break e;case 2:ot=null;break;case 3:case 5:break;default:throw Error(d(329))}if((t&62914560)===t&&(n=gi+300-dt(),10<n)){if(Sl(a,t,_t,!pl),Dn(a,0,!0)!==0)break e;al=t,a.timeoutHandle=Jf(pf.bind(null,a,l,ot,yi,Rc,t,_t,Kl,Na,pl,i,"Throttled",-0,0),n);break e}pf(a,l,ot,yi,Rc,t,_t,Kl,Na,pl,i,null,-0,0)}}break}while(!0);Lt(e)}function pf(e,t,l,a,n,i,c,s,o,b,S,E,p,g){if(e.timeoutHandle=-1,E=t.subtreeFlags,E&8192||(E&16785408)===16785408){E={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xt},rf(t,i,E);var L=(i&62914560)===i?gi-dt():(i&4194048)===i?hf-dt():0;if(L=Pm(E,L),L!==null){al=i,e.cancelPendingCommit=L(zf.bind(null,e,t,i,l,a,n,c,s,o,S,E,null,p,g)),Sl(e,i,c,!b);return}}zf(e,t,i,l,a,n,c,s,o)}function xm(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!xt(i(),n))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Sl(e,t,l,a){t&=~wc,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var n=t;0<n;){var i=31-ht(n),c=1<<i;a[i]=-1,n&=~c}l!==0&&zs(e,l,t)}function Si(){return(pe&6)===0?(xn(0),!1):!0}function Bc(){if(ue!==null){if(ye===0)var e=ue.return;else e=ue,kt=ql=null,Pu(e),xa=null,Wa=0,e=ue;for(;e!==null;)Jr(e.alternate,e),e=e.return;ue=null}}function Ea(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,Um(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),al=0,Bc(),Te=e,ue=l=Vt(e.current,null),se=t,ye=0,gt=null,pl=!1,Sa=Ra(e,t),Dc=!1,Na=_t=wc=Kl=gl=He=0,ot=mn=null,Rc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var n=31-ht(a),i=1<<n;t|=e[n],a&=~i}return ll=t,Qn(),l}function gf(e,t){ae=null,h.H=nn,t===ha||t===$n?(t=Co(),ye=3):t===Yu?(t=Co(),ye=4):ye=t===xc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,gt=t,ue===null&&(He=1,fi(e,Et(t,e.current)))}function _f(){var e=bt.current;return e===null?!0:(se&4194048)===se?Mt===null:(se&62914560)===se||(se&536870912)!==0?e===Mt:!1}function yf(){var e=h.H;return h.H=nn,e===null?nn:e}function Sf(){var e=h.A;return h.A=mm,e}function Ni(){He=4,pl||(se&4194048)!==se&&bt.current!==null||(Sa=!0),(gl&134217727)===0&&(Kl&134217727)===0||Te===null||Sl(Te,se,_t,!1)}function qc(e,t,l){var a=pe;pe|=2;var n=yf(),i=Sf();(Te!==e||se!==t)&&(yi=null,Ea(e,t)),t=!1;var c=He;e:do try{if(ye!==0&&ue!==null){var s=ue,o=gt;switch(ye){case 8:Bc(),c=6;break e;case 3:case 2:case 9:case 6:bt.current===null&&(t=!0);var b=ye;if(ye=0,gt=null,za(e,s,o,b),l&&Sa){c=0;break e}break;default:b=ye,ye=0,gt=null,za(e,s,o,b)}}vm(),c=He;break}catch(S){gf(e,S)}while(!0);return t&&e.shellSuspendCounter++,kt=ql=null,pe=a,h.H=n,h.A=i,ue===null&&(Te=null,se=0,Qn()),c}function vm(){for(;ue!==null;)Nf(ue)}function bm(e,t){var l=pe;pe|=2;var a=yf(),n=Sf();Te!==e||se!==t?(yi=null,_i=dt()+500,Ea(e,t)):Sa=Ra(e,t);e:do try{if(ye!==0&&ue!==null){t=ue;var i=gt;t:switch(ye){case 1:ye=0,gt=null,za(e,t,i,1);break;case 2:case 9:if(wo(i)){ye=0,gt=null,jf(t);break}t=function(){ye!==2&&ye!==9||Te!==e||(ye=7),Lt(e)},i.then(t,t);break e;case 3:ye=7;break e;case 4:ye=5;break e;case 7:wo(i)?(ye=0,gt=null,jf(t)):(ye=0,gt=null,za(e,t,i,7));break;case 5:var c=null;switch(ue.tag){case 26:c=ue.memoizedState;case 5:case 27:var s=ue;if(c?o0(c):s.stateNode.complete){ye=0,gt=null;var o=s.sibling;if(o!==null)ue=o;else{var b=s.return;b!==null?(ue=b,ji(b)):ue=null}break t}}ye=0,gt=null,za(e,t,i,5);break;case 6:ye=0,gt=null,za(e,t,i,6);break;case 8:Bc(),He=6;break e;default:throw Error(d(462))}}pm();break}catch(S){gf(e,S)}while(!0);return kt=ql=null,h.H=a,h.A=n,pe=l,ue!==null?0:(Te=null,se=0,Qn(),He)}function pm(){for(;ue!==null&&!Y0();)Nf(ue)}function Nf(e){var t=kr(e.alternate,e,ll);e.memoizedProps=e.pendingProps,t===null?ji(e):ue=t}function jf(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=Gr(l,t,t.pendingProps,t.type,void 0,se);break;case 11:t=Gr(l,t,t.pendingProps,t.type.render,t.ref,se);break;case 5:Pu(t);default:Jr(l,t),t=ue=yo(t,ll),t=kr(l,t,ll)}e.memoizedProps=e.pendingProps,t===null?ji(e):ue=t}function za(e,t,l,a){kt=ql=null,Pu(t),xa=null,Wa=0;var n=t.return;try{if(um(e,n,t,l,se)){He=1,fi(e,Et(l,e.current)),ue=null;return}}catch(i){if(n!==null)throw ue=n,i;He=1,fi(e,Et(l,e.current)),ue=null;return}t.flags&32768?(re||a===1?e=!0:Sa||(se&536870912)!==0?e=!1:(pl=e=!0,(a===2||a===9||a===3||a===6)&&(a=bt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Ef(t,e)):ji(t)}function ji(e){var t=e;do{if((t.flags&32768)!==0){Ef(t,pl);return}e=t.return;var l=om(t.alternate,t,ll);if(l!==null){ue=l;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);He===0&&(He=5)}function Ef(e,t){do{var l=rm(e.alternate,e);if(l!==null){l.flags&=32767,ue=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){ue=e;return}ue=e=l}while(e!==null);He=6,ue=null}function zf(e,t,l,a,n,i,c,s,o){e.cancelPendingCommit=null;do Ei();while(Ze!==0);if((pe&6)!==0)throw Error(d(327));if(t!==null){if(t===e.current)throw Error(d(177));if(i=t.lanes|t.childLanes,i|=zu,$0(e,l,i,c,s,o),e===Te&&(ue=Te=null,se=0),ja=t,yl=e,al=l,Cc=i,Uc=n,xf=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Sm(Tn,function(){return Df(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=h.T,h.T=null,n=A.p,A.p=2,c=pe,pe|=4;try{fm(e,t,l)}finally{pe=c,A.p=n,h.T=a}}Ze=1,Tf(),Af(),Mf()}}function Tf(){if(Ze===1){Ze=0;var e=yl,t=ja,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=h.T,h.T=null;var a=A.p;A.p=2;var n=pe;pe|=4;try{cf(t,e);var i=Wc,c=fo(e.containerInfo),s=i.focusedElem,o=i.selectionRange;if(c!==s&&s&&s.ownerDocument&&ro(s.ownerDocument.documentElement,s)){if(o!==null&&yu(s)){var b=o.start,S=o.end;if(S===void 0&&(S=b),"selectionStart"in s)s.selectionStart=b,s.selectionEnd=Math.min(S,s.value.length);else{var E=s.ownerDocument||document,p=E&&E.defaultView||window;if(p.getSelection){var g=p.getSelection(),L=s.textContent.length,W=Math.min(o.start,L),ze=o.end===void 0?W:Math.min(o.end,L);!g.extend&&W>ze&&(c=ze,ze=W,W=c);var m=oo(s,W),f=oo(s,ze);if(m&&f&&(g.rangeCount!==1||g.anchorNode!==m.node||g.anchorOffset!==m.offset||g.focusNode!==f.node||g.focusOffset!==f.offset)){var v=E.createRange();v.setStart(m.node,m.offset),g.removeAllRanges(),W>ze?(g.addRange(v),g.extend(f.node,f.offset)):(v.setEnd(f.node,f.offset),g.addRange(v))}}}}for(E=[],g=s;g=g.parentNode;)g.nodeType===1&&E.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<E.length;s++){var j=E[s];j.element.scrollLeft=j.left,j.element.scrollTop=j.top}}Bi=!!Fc,Wc=Fc=null}finally{pe=n,A.p=a,h.T=l}}e.current=t,Ze=2}}function Af(){if(Ze===2){Ze=0;var e=yl,t=ja,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=h.T,h.T=null;var a=A.p;A.p=2;var n=pe;pe|=4;try{tf(e,t.alternate,t)}finally{pe=n,A.p=a,h.T=l}}Ze=3}}function Mf(){if(Ze===4||Ze===3){Ze=0,X0();var e=yl,t=ja,l=al,a=xf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ze=5:(Ze=0,ja=yl=null,Of(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(_l=null),lu(l),t=t.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(wa,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=h.T,n=A.p,A.p=2,h.T=null;try{for(var i=e.onRecoverableError,c=0;c<a.length;c++){var s=a[c];i(s.value,{componentStack:s.stack})}}finally{h.T=t,A.p=n}}(al&3)!==0&&Ei(),Lt(e),n=e.pendingLanes,(l&261930)!==0&&(n&42)!==0?e===Hc?hn++:(hn=0,Hc=e):hn=0,xn(0)}}function Of(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ja(t)))}function Ei(){return Tf(),Af(),Mf(),Df()}function Df(){if(Ze!==5)return!1;var e=yl,t=Cc;Cc=0;var l=lu(al),a=h.T,n=A.p;try{A.p=32>l?32:l,h.T=null,l=Uc,Uc=null;var i=yl,c=al;if(Ze=0,ja=yl=null,al=0,(pe&6)!==0)throw Error(d(331));var s=pe;if(pe|=4,df(i.current),of(i,i.current,c,l),pe=s,xn(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(wa,i)}catch{}return!0}finally{A.p=n,h.T=a,Of(e,t)}}function wf(e,t,l){t=Et(l,t),t=hc(e.stateNode,t,2),e=hl(e,t,2),e!==null&&(Ca(e,2),Lt(e))}function Se(e,t,l){if(e.tag===3)wf(e,e,l);else for(;t!==null;){if(t.tag===3){wf(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(_l===null||!_l.has(a))){e=Et(l,e),l=wr(2),a=hl(t,l,2),a!==null&&(Rr(l,a,t,e),Ca(a,2),Lt(a));break}}t=t.return}}function Lc(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new hm;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(l)||(Dc=!0,n.add(l),e=gm.bind(null,e,t,l),t.then(e,e))}function gm(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,Te===e&&(se&l)===l&&(He===4||He===3&&(se&62914560)===se&&300>dt()-gi?(pe&2)===0&&Ea(e,0):wc|=l,Na===se&&(Na=0)),Lt(e)}function Rf(e,t){t===0&&(t=Es()),e=Ul(e,t),e!==null&&(Ca(e,t),Lt(e))}function _m(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),Rf(e,l)}function ym(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(d(314))}a!==null&&a.delete(t),Rf(e,l)}function Sm(e,t){return Ii(e,t)}var zi=null,Ta=null,Gc=!1,Ti=!1,Yc=!1,Nl=0;function Lt(e){e!==Ta&&e.next===null&&(Ta===null?zi=Ta=e:Ta=Ta.next=e),Ti=!0,Gc||(Gc=!0,jm())}function xn(e,t){if(!Yc&&Ti){Yc=!0;do for(var l=!1,a=zi;a!==null;){if(e!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var c=a.suspendedLanes,s=a.pingedLanes;i=(1<<31-ht(42|e)+1)-1,i&=n&~(c&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,Bf(a,i))}else i=se,i=Dn(a,a===Te?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Ra(a,i)||(l=!0,Bf(a,i));a=a.next}while(l);Yc=!1}}function Nm(){Cf()}function Cf(){Ti=Gc=!1;var e=0;Nl!==0&&Cm()&&(e=Nl);for(var t=dt(),l=null,a=zi;a!==null;){var n=a.next,i=Uf(a,t);i===0?(a.next=null,l===null?zi=n:l.next=n,n===null&&(Ta=l)):(l=a,(e!==0||(i&3)!==0)&&(Ti=!0)),a=n}Ze!==0&&Ze!==5||xn(e),Nl!==0&&(Nl=0)}function Uf(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var c=31-ht(i),s=1<<c,o=n[c];o===-1?((s&l)===0||(s&a)!==0)&&(n[c]=W0(s,t)):o<=t&&(e.expiredLanes|=s),i&=~s}if(t=Te,l=se,l=Dn(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(ye===2||ye===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Pi(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||Ra(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&Pi(a),lu(l)){case 2:case 8:l=Ns;break;case 32:l=Tn;break;case 268435456:l=js;break;default:l=Tn}return a=Hf.bind(null,e),l=Ii(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&Pi(a),e.callbackPriority=2,e.callbackNode=null,2}function Hf(e,t){if(Ze!==0&&Ze!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(Ei()&&e.callbackNode!==l)return null;var a=se;return a=Dn(e,e===Te?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(bf(e,a,t),Uf(e,dt()),e.callbackNode!=null&&e.callbackNode===l?Hf.bind(null,e):null)}function Bf(e,t){if(Ei())return null;bf(e,t,!0)}function jm(){Hm(function(){(pe&6)!==0?Ii(Ss,Nm):Cf()})}function Xc(){if(Nl===0){var e=da;e===0&&(e=An,An<<=1,(An&261888)===0&&(An=256)),Nl=e}return Nl}function qf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Un(""+e)}function Lf(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function Em(e,t,l,a,n){if(t==="submit"&&l&&l.stateNode===n){var i=qf((n[nt]||null).action),c=a.submitter;c&&(t=(t=c[nt]||null)?qf(t.formAction):c.getAttribute("formAction"),t!==null&&(i=t,c=null));var s=new Ln("action","action",null,a,n);e.push({event:s,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Nl!==0){var o=c?Lf(n,c):new FormData(n);sc(l,{pending:!0,data:o,method:n.method,action:i},null,o)}}else typeof i=="function"&&(s.preventDefault(),o=c?Lf(n,c):new FormData(n),sc(l,{pending:!0,data:o,method:n.method,action:i},i,o))},currentTarget:n}]})}}for(var Qc=0;Qc<Eu.length;Qc++){var Vc=Eu[Qc],zm=Vc.toLowerCase(),Tm=Vc[0].toUpperCase()+Vc.slice(1);Rt(zm,"on"+Tm)}Rt(xo,"onAnimationEnd"),Rt(vo,"onAnimationIteration"),Rt(bo,"onAnimationStart"),Rt("dblclick","onDoubleClick"),Rt("focusin","onFocus"),Rt("focusout","onBlur"),Rt(Qd,"onTransitionRun"),Rt(Vd,"onTransitionStart"),Rt(Zd,"onTransitionCancel"),Rt(po,"onTransitionEnd"),Il("onMouseEnter",["mouseout","mouseover"]),Il("onMouseLeave",["mouseout","mouseover"]),Il("onPointerEnter",["pointerout","pointerover"]),Il("onPointerLeave",["pointerout","pointerover"]),Dl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Dl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Dl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Dl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Dl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Dl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Am=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vn));function Gf(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],n=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var c=a.length-1;0<=c;c--){var s=a[c],o=s.instance,b=s.currentTarget;if(s=s.listener,o!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=b;try{i(n)}catch(S){Xn(S)}n.currentTarget=null,i=o}else for(c=0;c<a.length;c++){if(s=a[c],o=s.instance,b=s.currentTarget,s=s.listener,o!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=b;try{i(n)}catch(S){Xn(S)}n.currentTarget=null,i=o}}}}function ce(e,t){var l=t[au];l===void 0&&(l=t[au]=new Set);var a=e+"__bubble";l.has(a)||(Yf(t,e,2,!1),l.add(a))}function Zc(e,t,l){var a=0;t&&(a|=4),Yf(l,e,a,t)}var Ai="_reactListening"+Math.random().toString(36).slice(2);function kc(e){if(!e[Ai]){e[Ai]=!0,ws.forEach(function(l){l!=="selectionchange"&&(Am.has(l)||Zc(l,!1,e),Zc(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ai]||(t[Ai]=!0,Zc("selectionchange",!1,t))}}function Yf(e,t,l,a){switch(v0(t)){case 2:var n=lh;break;case 8:n=ah;break;default:n=cs}l=n.bind(null,t,l,e),n=void 0,!du||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(t,l,{capture:!0,passive:n}):e.addEventListener(t,l,!0):n!==void 0?e.addEventListener(t,l,{passive:n}):e.addEventListener(t,l,!1)}function Kc(e,t,l,a,n){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var c=a.tag;if(c===3||c===4){var s=a.stateNode.containerInfo;if(s===n)break;if(c===4)for(c=a.return;c!==null;){var o=c.tag;if((o===3||o===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;s!==null;){if(c=Fl(s),c===null)return;if(o=c.tag,o===5||o===6||o===26||o===27){a=i=c;continue e}s=s.parentNode}}a=a.return}Vs(function(){var b=i,S=ru(l),E=[];e:{var p=go.get(e);if(p!==void 0){var g=Ln,L=e;switch(e){case"keypress":if(Bn(l)===0)break e;case"keydown":case"keyup":g=yd;break;case"focusin":L="focus",g=vu;break;case"focusout":L="blur",g=vu;break;case"beforeblur":case"afterblur":g=vu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ks;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=od;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=jd;break;case xo:case vo:case bo:g=dd;break;case po:g=zd;break;case"scroll":case"scrollend":g=cd;break;case"wheel":g=Ad;break;case"copy":case"cut":case"paste":g=hd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Fs;break;case"toggle":case"beforetoggle":g=Od}var W=(t&4)!==0,ze=!W&&(e==="scroll"||e==="scrollend"),m=W?p!==null?p+"Capture":null:p;W=[];for(var f=b,v;f!==null;){var j=f;if(v=j.stateNode,j=j.tag,j!==5&&j!==26&&j!==27||v===null||m===null||(j=Ba(f,m),j!=null&&W.push(bn(f,j,v))),ze)break;f=f.return}0<W.length&&(p=new g(p,L,null,l,S),E.push({event:p,listeners:W}))}}if((t&7)===0){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&l!==ou&&(L=l.relatedTarget||l.fromElement)&&(Fl(L)||L[Jl]))break e;if((g||p)&&(p=S.window===S?S:(p=S.ownerDocument)?p.defaultView||p.parentWindow:window,g?(L=l.relatedTarget||l.toElement,g=b,L=L?Fl(L):null,L!==null&&(ze=U(L),W=L.tag,L!==ze||W!==5&&W!==27&&W!==6)&&(L=null)):(g=null,L=b),g!==L)){if(W=Ks,j="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(W=Fs,j="onPointerLeave",m="onPointerEnter",f="pointer"),ze=g==null?p:Ha(g),v=L==null?p:Ha(L),p=new W(j,f+"leave",g,l,S),p.target=ze,p.relatedTarget=v,j=null,Fl(S)===b&&(W=new W(m,f+"enter",L,l,S),W.target=v,W.relatedTarget=ze,j=W),ze=j,g&&L)t:{for(W=Mm,m=g,f=L,v=0,j=m;j;j=W(j))v++;j=0;for(var k=f;k;k=W(k))j++;for(;0<v-j;)m=W(m),v--;for(;0<j-v;)f=W(f),j--;for(;v--;){if(m===f||f!==null&&m===f.alternate){W=m;break t}m=W(m),f=W(f)}W=null}else W=null;g!==null&&Xf(E,p,g,W,!1),L!==null&&ze!==null&&Xf(E,ze,L,W,!0)}}e:{if(p=b?Ha(b):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var xe=ao;else if(to(p))if(no)xe=Gd;else{xe=qd;var X=Bd}else g=p.nodeName,!g||g.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?b&&su(b.elementType)&&(xe=ao):xe=Ld;if(xe&&(xe=xe(e,b))){lo(E,xe,l,S);break e}X&&X(e,p,b),e==="focusout"&&b&&p.type==="number"&&b.memoizedProps.value!=null&&cu(p,"number",p.value)}switch(X=b?Ha(b):window,e){case"focusin":(to(X)||X.contentEditable==="true")&&(na=X,Su=b,Za=null);break;case"focusout":Za=Su=na=null;break;case"mousedown":Nu=!0;break;case"contextmenu":case"mouseup":case"dragend":Nu=!1,mo(E,l,S);break;case"selectionchange":if(Xd)break;case"keydown":case"keyup":mo(E,l,S)}var ne;if(pu)e:{switch(e){case"compositionstart":var oe="onCompositionStart";break e;case"compositionend":oe="onCompositionEnd";break e;case"compositionupdate":oe="onCompositionUpdate";break e}oe=void 0}else aa?Ps(e,l)&&(oe="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(oe="onCompositionStart");oe&&(Ws&&l.locale!=="ko"&&(aa||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&aa&&(ne=Zs()):(cl=S,mu="value"in cl?cl.value:cl.textContent,aa=!0)),X=Mi(b,oe),0<X.length&&(oe=new Js(oe,e,null,l,S),E.push({event:oe,listeners:X}),ne?oe.data=ne:(ne=eo(l),ne!==null&&(oe.data=ne)))),(ne=wd?Rd(e,l):Cd(e,l))&&(oe=Mi(b,"onBeforeInput"),0<oe.length&&(X=new Js("onBeforeInput","beforeinput",null,l,S),E.push({event:X,listeners:oe}),X.data=ne)),Em(E,e,b,l,S)}Gf(E,t)})}function bn(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Mi(e,t){for(var l=t+"Capture",a=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ba(e,l),n!=null&&a.unshift(bn(e,n,i)),n=Ba(e,t),n!=null&&a.push(bn(e,n,i))),e.tag===3)return a;e=e.return}return[]}function Mm(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xf(e,t,l,a,n){for(var i=t._reactName,c=[];l!==null&&l!==a;){var s=l,o=s.alternate,b=s.stateNode;if(s=s.tag,o!==null&&o===a)break;s!==5&&s!==26&&s!==27||b===null||(o=b,n?(b=Ba(l,i),b!=null&&c.unshift(bn(l,b,o))):n||(b=Ba(l,i),b!=null&&c.push(bn(l,b,o)))),l=l.return}c.length!==0&&e.push({event:t,listeners:c})}var Om=/\r\n?/g,Dm=/\u0000|\uFFFD/g;function Qf(e){return(typeof e=="string"?e:""+e).replace(Om,`
`).replace(Dm,"")}function Vf(e,t){return t=Qf(t),Qf(e)===t}function Ee(e,t,l,a,n,i){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ea(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ea(e,""+a);break;case"className":Rn(e,"class",a);break;case"tabIndex":Rn(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Rn(e,l,a);break;case"style":Xs(e,a,i);break;case"data":if(t!=="object"){Rn(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Un(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(t!=="input"&&Ee(e,t,"name",n.name,n,null),Ee(e,t,"formEncType",n.formEncType,n,null),Ee(e,t,"formMethod",n.formMethod,n,null),Ee(e,t,"formTarget",n.formTarget,n,null)):(Ee(e,t,"encType",n.encType,n,null),Ee(e,t,"method",n.method,n,null),Ee(e,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Un(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=Xt);break;case"onScroll":a!=null&&ce("scroll",e);break;case"onScrollEnd":a!=null&&ce("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(d(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(d(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=Un(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":ce("beforetoggle",e),ce("toggle",e),wn(e,"popover",a);break;case"xlinkActuate":Yt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Yt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Yt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Yt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Yt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Yt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":wn(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=id.get(l)||l,wn(e,l,a))}}function Jc(e,t,l,a,n,i){switch(l){case"style":Xs(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(d(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(d(60));e.innerHTML=l}}break;case"children":typeof a=="string"?ea(e,a):(typeof a=="number"||typeof a=="bigint")&&ea(e,""+a);break;case"onScroll":a!=null&&ce("scroll",e);break;case"onScrollEnd":a!=null&&ce("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Xt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Rs.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),t=l.slice(2,n?l.length-7:void 0),i=e[nt]||null,i=i!=null?i[l]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,n);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):wn(e,l,a)}}}function Pe(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ce("error",e),ce("load",e);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];if(c!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:Ee(e,t,i,c,l,null)}}n&&Ee(e,t,"srcSet",l.srcSet,l,null),a&&Ee(e,t,"src",l.src,l,null);return;case"input":ce("invalid",e);var s=i=c=n=null,o=null,b=null;for(a in l)if(l.hasOwnProperty(a)){var S=l[a];if(S!=null)switch(a){case"name":n=S;break;case"type":c=S;break;case"checked":o=S;break;case"defaultChecked":b=S;break;case"value":i=S;break;case"defaultValue":s=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(d(137,t));break;default:Ee(e,t,a,S,l,null)}}qs(e,i,s,o,b,c,n,!1);return;case"select":ce("invalid",e),a=c=i=null;for(n in l)if(l.hasOwnProperty(n)&&(s=l[n],s!=null))switch(n){case"value":i=s;break;case"defaultValue":c=s;break;case"multiple":a=s;default:Ee(e,t,n,s,l,null)}t=i,l=c,e.multiple=!!a,t!=null?Pl(e,!!a,t,!1):l!=null&&Pl(e,!!a,l,!0);return;case"textarea":ce("invalid",e),i=n=a=null;for(c in l)if(l.hasOwnProperty(c)&&(s=l[c],s!=null))switch(c){case"value":a=s;break;case"defaultValue":n=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(d(91));break;default:Ee(e,t,c,s,l,null)}Gs(e,a,n,i);return;case"option":for(o in l)if(l.hasOwnProperty(o)&&(a=l[o],a!=null))switch(o){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Ee(e,t,o,a,l,null)}return;case"dialog":ce("beforetoggle",e),ce("toggle",e),ce("cancel",e),ce("close",e);break;case"iframe":case"object":ce("load",e);break;case"video":case"audio":for(a=0;a<vn.length;a++)ce(vn[a],e);break;case"image":ce("error",e),ce("load",e);break;case"details":ce("toggle",e);break;case"embed":case"source":case"link":ce("error",e),ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(b in l)if(l.hasOwnProperty(b)&&(a=l[b],a!=null))switch(b){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:Ee(e,t,b,a,l,null)}return;default:if(su(t)){for(S in l)l.hasOwnProperty(S)&&(a=l[S],a!==void 0&&Jc(e,t,S,a,l,void 0));return}}for(s in l)l.hasOwnProperty(s)&&(a=l[s],a!=null&&Ee(e,t,s,a,l,null))}function wm(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,c=null,s=null,o=null,b=null,S=null;for(g in l){var E=l[g];if(l.hasOwnProperty(g)&&E!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":o=E;default:a.hasOwnProperty(g)||Ee(e,t,g,null,a,E)}}for(var p in a){var g=a[p];if(E=l[p],a.hasOwnProperty(p)&&(g!=null||E!=null))switch(p){case"type":i=g;break;case"name":n=g;break;case"checked":b=g;break;case"defaultChecked":S=g;break;case"value":c=g;break;case"defaultValue":s=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(d(137,t));break;default:g!==E&&Ee(e,t,p,g,a,E)}}uu(e,c,s,o,b,S,i,n);return;case"select":g=c=s=p=null;for(i in l)if(o=l[i],l.hasOwnProperty(i)&&o!=null)switch(i){case"value":break;case"multiple":g=o;default:a.hasOwnProperty(i)||Ee(e,t,i,null,a,o)}for(n in a)if(i=a[n],o=l[n],a.hasOwnProperty(n)&&(i!=null||o!=null))switch(n){case"value":p=i;break;case"defaultValue":s=i;break;case"multiple":c=i;default:i!==o&&Ee(e,t,n,i,a,o)}t=s,l=c,a=g,p!=null?Pl(e,!!l,p,!1):!!a!=!!l&&(t!=null?Pl(e,!!l,t,!0):Pl(e,!!l,l?[]:"",!1));return;case"textarea":g=p=null;for(s in l)if(n=l[s],l.hasOwnProperty(s)&&n!=null&&!a.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:Ee(e,t,s,null,a,n)}for(c in a)if(n=a[c],i=l[c],a.hasOwnProperty(c)&&(n!=null||i!=null))switch(c){case"value":p=n;break;case"defaultValue":g=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(d(91));break;default:n!==i&&Ee(e,t,c,n,a,i)}Ls(e,p,g);return;case"option":for(var L in l)if(p=l[L],l.hasOwnProperty(L)&&p!=null&&!a.hasOwnProperty(L))switch(L){case"selected":e.selected=!1;break;default:Ee(e,t,L,null,a,p)}for(o in a)if(p=a[o],g=l[o],a.hasOwnProperty(o)&&p!==g&&(p!=null||g!=null))switch(o){case"selected":e.selected=p&&typeof p!="function"&&typeof p!="symbol";break;default:Ee(e,t,o,p,a,g)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var W in l)p=l[W],l.hasOwnProperty(W)&&p!=null&&!a.hasOwnProperty(W)&&Ee(e,t,W,null,a,p);for(b in a)if(p=a[b],g=l[b],a.hasOwnProperty(b)&&p!==g&&(p!=null||g!=null))switch(b){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(d(137,t));break;default:Ee(e,t,b,p,a,g)}return;default:if(su(t)){for(var ze in l)p=l[ze],l.hasOwnProperty(ze)&&p!==void 0&&!a.hasOwnProperty(ze)&&Jc(e,t,ze,void 0,a,p);for(S in a)p=a[S],g=l[S],!a.hasOwnProperty(S)||p===g||p===void 0&&g===void 0||Jc(e,t,S,p,a,g);return}}for(var m in l)p=l[m],l.hasOwnProperty(m)&&p!=null&&!a.hasOwnProperty(m)&&Ee(e,t,m,null,a,p);for(E in a)p=a[E],g=l[E],!a.hasOwnProperty(E)||p===g||p==null&&g==null||Ee(e,t,E,p,a,g)}function Zf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Rm(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],i=n.transferSize,c=n.initiatorType,s=n.duration;if(i&&s&&Zf(c)){for(c=0,s=n.responseEnd,a+=1;a<l.length;a++){var o=l[a],b=o.startTime;if(b>s)break;var S=o.transferSize,E=o.initiatorType;S&&Zf(E)&&(o=o.responseEnd,c+=S*(o<s?1:(s-b)/(o-b)))}if(--a,t+=8*(i+c)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Fc=null,Wc=null;function Oi(e){return e.nodeType===9?e:e.ownerDocument}function kf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Kf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function $c(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ic=null;function Cm(){var e=window.event;return e&&e.type==="popstate"?e===Ic?!1:(Ic=e,!0):(Ic=null,!1)}var Jf=typeof setTimeout=="function"?setTimeout:void 0,Um=typeof clearTimeout=="function"?clearTimeout:void 0,Ff=typeof Promise=="function"?Promise:void 0,Hm=typeof queueMicrotask=="function"?queueMicrotask:typeof Ff<"u"?function(e){return Ff.resolve(null).then(e).catch(Bm)}:Jf;function Bm(e){setTimeout(function(){throw e})}function jl(e){return e==="head"}function Wf(e,t){var l=t,a=0;do{var n=l.nextSibling;if(e.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(n),Da(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")pn(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,pn(l);for(var i=l.firstChild;i;){var c=i.nextSibling,s=i.nodeName;i[Ua]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=c}}else l==="body"&&pn(e.ownerDocument.body);l=n}while(l);Da(t)}function $f(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function Pc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Pc(l),nu(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function qm(e,t,l,a){for(;e.nodeType===1;){var n=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ua])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Ot(e.nextSibling),e===null)break}return null}function Lm(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=Ot(e.nextSibling),e===null))return null;return e}function If(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ot(e.nextSibling),e===null))return null;return e}function es(e){return e.data==="$?"||e.data==="$~"}function ts(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Gm(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var ls=null;function Pf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return Ot(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function e0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function t0(e,t,l){switch(t=Oi(l),e){case"html":if(e=t.documentElement,!e)throw Error(d(452));return e;case"head":if(e=t.head,!e)throw Error(d(453));return e;case"body":if(e=t.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function pn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);nu(e)}var Dt=new Map,l0=new Set;function Di(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var nl=A.d;A.d={f:Ym,r:Xm,D:Qm,C:Vm,L:Zm,m:km,X:Jm,S:Km,M:Fm};function Ym(){var e=nl.f(),t=Si();return e||t}function Xm(e){var t=Wl(e);t!==null&&t.tag===5&&t.type==="form"?pr(t):nl.r(e)}var Aa=typeof document>"u"?null:document;function a0(e,t,l){var a=Aa;if(a&&typeof t=="string"&&t){var n=Nt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),l0.has(n)||(l0.add(n),e={rel:e,crossOrigin:l,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),Pe(t,"link",e),ke(t),a.head.appendChild(t)))}}function Qm(e){nl.D(e),a0("dns-prefetch",e,null)}function Vm(e,t){nl.C(e,t),a0("preconnect",e,t)}function Zm(e,t,l){nl.L(e,t,l);var a=Aa;if(a&&e&&t){var n='link[rel="preload"][as="'+Nt(t)+'"]';t==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+Nt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+Nt(l.imageSizes)+'"]')):n+='[href="'+Nt(e)+'"]';var i=n;switch(t){case"style":i=Ma(e);break;case"script":i=Oa(e)}Dt.has(i)||(e=G({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),Dt.set(i,e),a.querySelector(n)!==null||t==="style"&&a.querySelector(gn(i))||t==="script"&&a.querySelector(_n(i))||(t=a.createElement("link"),Pe(t,"link",e),ke(t),a.head.appendChild(t)))}}function km(e,t){nl.m(e,t);var l=Aa;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+Nt(a)+'"][href="'+Nt(e)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Oa(e)}if(!Dt.has(i)&&(e=G({rel:"modulepreload",href:e},t),Dt.set(i,e),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(_n(i)))return}a=l.createElement("link"),Pe(a,"link",e),ke(a),l.head.appendChild(a)}}}function Km(e,t,l){nl.S(e,t,l);var a=Aa;if(a&&e){var n=$l(a).hoistableStyles,i=Ma(e);t=t||"default";var c=n.get(i);if(!c){var s={loading:0,preload:null};if(c=a.querySelector(gn(i)))s.loading=5;else{e=G({rel:"stylesheet",href:e,"data-precedence":t},l),(l=Dt.get(i))&&as(e,l);var o=c=a.createElement("link");ke(o),Pe(o,"link",e),o._p=new Promise(function(b,S){o.onload=b,o.onerror=S}),o.addEventListener("load",function(){s.loading|=1}),o.addEventListener("error",function(){s.loading|=2}),s.loading|=4,wi(c,t,a)}c={type:"stylesheet",instance:c,count:1,state:s},n.set(i,c)}}}function Jm(e,t){nl.X(e,t);var l=Aa;if(l&&e){var a=$l(l).hoistableScripts,n=Oa(e),i=a.get(n);i||(i=l.querySelector(_n(n)),i||(e=G({src:e,async:!0},t),(t=Dt.get(n))&&ns(e,t),i=l.createElement("script"),ke(i),Pe(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Fm(e,t){nl.M(e,t);var l=Aa;if(l&&e){var a=$l(l).hoistableScripts,n=Oa(e),i=a.get(n);i||(i=l.querySelector(_n(n)),i||(e=G({src:e,async:!0,type:"module"},t),(t=Dt.get(n))&&ns(e,t),i=l.createElement("script"),ke(i),Pe(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function n0(e,t,l,a){var n=(n=H.current)?Di(n):null;if(!n)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=Ma(l.href),l=$l(n).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Ma(l.href);var i=$l(n).hoistableStyles,c=i.get(e);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,c),(i=n.querySelector(gn(e)))&&!i._p&&(c.instance=i,c.state.loading=5),Dt.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Dt.set(e,l),i||Wm(n,e,l,c.state))),t&&a===null)throw Error(d(528,""));return c}if(t&&a!==null)throw Error(d(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Oa(l),l=$l(n).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function Ma(e){return'href="'+Nt(e)+'"'}function gn(e){return'link[rel="stylesheet"]['+e+"]"}function i0(e){return G({},e,{"data-precedence":e.precedence,precedence:null})}function Wm(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Pe(t,"link",l),ke(t),e.head.appendChild(t))}function Oa(e){return'[src="'+Nt(e)+'"]'}function _n(e){return"script[async]"+e}function u0(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Nt(l.href)+'"]');if(a)return t.instance=a,ke(a),a;var n=G({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),ke(a),Pe(a,"style",n),wi(a,l.precedence,e),t.instance=a;case"stylesheet":n=Ma(l.href);var i=e.querySelector(gn(n));if(i)return t.state.loading|=4,t.instance=i,ke(i),i;a=i0(l),(n=Dt.get(n))&&as(a,n),i=(e.ownerDocument||e).createElement("link"),ke(i);var c=i;return c._p=new Promise(function(s,o){c.onload=s,c.onerror=o}),Pe(i,"link",a),t.state.loading|=4,wi(i,l.precedence,e),t.instance=i;case"script":return i=Oa(l.src),(n=e.querySelector(_n(i)))?(t.instance=n,ke(n),n):(a=l,(n=Dt.get(i))&&(a=G({},l),ns(a,n)),e=e.ownerDocument||e,n=e.createElement("script"),ke(n),Pe(n,"link",a),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(d(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,wi(a,l.precedence,e));return t.instance}function wi(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,c=0;c<a.length;c++){var s=a[c];if(s.dataset.precedence===t)i=s;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function as(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ns(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ri=null;function c0(e,t,l){if(Ri===null){var a=new Map,n=Ri=new Map;n.set(l,a)}else n=Ri,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),n=0;n<l.length;n++){var i=l[n];if(!(i[Ua]||i[Fe]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(t)||"";c=e+c;var s=a.get(c);s?s.push(i):a.set(c,[i])}}return a}function s0(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function $m(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function o0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Im(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=Ma(a.href),i=t.querySelector(gn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ci.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=i,ke(i);return}i=t.ownerDocument||t,a=i0(a),(n=Dt.get(n))&&as(a,n),i=i.createElement("link"),ke(i);var c=i;c._p=new Promise(function(s,o){c.onload=s,c.onerror=o}),Pe(i,"link",a),l.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=Ci.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var is=0;function Pm(e,t){return e.stylesheets&&e.count===0&&Hi(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&Hi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&is===0&&(is=62500*Rm());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Hi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>is?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function Ci(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Hi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ui=null;function Hi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ui=new Map,t.forEach(eh,e),Ui=null,Ci.call(e))}function eh(e,t){if(!(t.state.loading&4)){var l=Ui.get(e);if(l)var a=l.get(null);else{l=new Map,Ui.set(e,l);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var c=n[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(l.set(c.dataset.precedence,c),a=c)}a&&l.set(null,a)}n=t.instance,c=n.getAttribute("data-precedence"),i=l.get(c)||a,i===a&&l.set(null,n),l.set(c,n),this.count++,a=Ci.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var yn={$$typeof:K,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function th(e,t,l,a,n,i,c,s,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=eu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=eu(0),this.hiddenUpdates=eu(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function r0(e,t,l,a,n,i,c,s,o,b,S,E){return e=new th(e,t,l,c,o,b,S,E,s),t=1,i===!0&&(t|=24),i=vt(3,null,null,t),e.current=i,i.stateNode=e,t=qu(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:t},Xu(i),e}function f0(e){return e?(e=ca,e):ca}function d0(e,t,l,a,n,i){n=f0(n),a.context===null?a.context=n:a.pendingContext=n,a=ml(t),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=hl(e,a,t),l!==null&&(rt(l,e,t),Ia(l,e,t))}function m0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function us(e,t){m0(e,t),(e=e.alternate)&&m0(e,t)}function h0(e){if(e.tag===13||e.tag===31){var t=Ul(e,67108864);t!==null&&rt(t,e,67108864),us(e,67108864)}}function x0(e){if(e.tag===13||e.tag===31){var t=yt();t=tu(t);var l=Ul(e,t);l!==null&&rt(l,e,t),us(e,t)}}var Bi=!0;function lh(e,t,l,a){var n=h.T;h.T=null;var i=A.p;try{A.p=2,cs(e,t,l,a)}finally{A.p=i,h.T=n}}function ah(e,t,l,a){var n=h.T;h.T=null;var i=A.p;try{A.p=8,cs(e,t,l,a)}finally{A.p=i,h.T=n}}function cs(e,t,l,a){if(Bi){var n=ss(a);if(n===null)Kc(e,t,a,qi,l),b0(e,a);else if(ih(n,e,t,l,a))a.stopPropagation();else if(b0(e,a),t&4&&-1<nh.indexOf(e)){for(;n!==null;){var i=Wl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=Ol(i.pendingLanes);if(c!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;c;){var o=1<<31-ht(c);s.entanglements[1]|=o,c&=~o}Lt(i),(pe&6)===0&&(_i=dt()+500,xn(0))}}break;case 31:case 13:s=Ul(i,2),s!==null&&rt(s,i,2),Si(),us(i,2)}if(i=ss(a),i===null&&Kc(e,t,a,qi,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else Kc(e,t,a,null,l)}}function ss(e){return e=ru(e),os(e)}var qi=null;function os(e){if(qi=null,e=Fl(e),e!==null){var t=U(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=B(t),e!==null)return e;e=null}else if(l===31){if(e=Q(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return qi=e,null}function v0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Q0()){case Ss:return 2;case Ns:return 8;case Tn:case V0:return 32;case js:return 268435456;default:return 32}default:return 32}}var rs=!1,El=null,zl=null,Tl=null,Sn=new Map,Nn=new Map,Al=[],nh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function b0(e,t){switch(e){case"focusin":case"focusout":El=null;break;case"dragenter":case"dragleave":zl=null;break;case"mouseover":case"mouseout":Tl=null;break;case"pointerover":case"pointerout":Sn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nn.delete(t.pointerId)}}function jn(e,t,l,a,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Wl(t),t!==null&&h0(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function ih(e,t,l,a,n){switch(t){case"focusin":return El=jn(El,e,t,l,a,n),!0;case"dragenter":return zl=jn(zl,e,t,l,a,n),!0;case"mouseover":return Tl=jn(Tl,e,t,l,a,n),!0;case"pointerover":var i=n.pointerId;return Sn.set(i,jn(Sn.get(i)||null,e,t,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,Nn.set(i,jn(Nn.get(i)||null,e,t,l,a,n)),!0}return!1}function p0(e){var t=Fl(e.target);if(t!==null){var l=U(t);if(l!==null){if(t=l.tag,t===13){if(t=B(l),t!==null){e.blockedOn=t,Os(e.priority,function(){x0(l)});return}}else if(t===31){if(t=Q(l),t!==null){e.blockedOn=t,Os(e.priority,function(){x0(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Li(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=ss(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);ou=a,l.target.dispatchEvent(a),ou=null}else return t=Wl(l),t!==null&&h0(t),e.blockedOn=l,!1;t.shift()}return!0}function g0(e,t,l){Li(e)&&l.delete(t)}function uh(){rs=!1,El!==null&&Li(El)&&(El=null),zl!==null&&Li(zl)&&(zl=null),Tl!==null&&Li(Tl)&&(Tl=null),Sn.forEach(g0),Nn.forEach(g0)}function Gi(e,t){e.blockedOn===t&&(e.blockedOn=null,rs||(rs=!0,x.unstable_scheduleCallback(x.unstable_NormalPriority,uh)))}var Yi=null;function _0(e){Yi!==e&&(Yi=e,x.unstable_scheduleCallback(x.unstable_NormalPriority,function(){Yi===e&&(Yi=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],n=e[t+2];if(typeof a!="function"){if(os(a||l)===null)continue;break}var i=Wl(l);i!==null&&(e.splice(t,3),t-=3,sc(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function Da(e){function t(o){return Gi(o,e)}El!==null&&Gi(El,e),zl!==null&&Gi(zl,e),Tl!==null&&Gi(Tl,e),Sn.forEach(t),Nn.forEach(t);for(var l=0;l<Al.length;l++){var a=Al[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Al.length&&(l=Al[0],l.blockedOn===null);)p0(l),l.blockedOn===null&&Al.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],c=n[nt]||null;if(typeof i=="function")c||_0(l);else if(c){var s=null;if(i&&i.hasAttribute("formAction")){if(n=i,c=i[nt]||null)s=c.formAction;else if(os(n)!==null)continue}else s=c.action;typeof s=="function"?l[a+1]=s:(l.splice(a,3),a-=3),_0(l)}}}function y0(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(c){return n=c})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function fs(e){this._internalRoot=e}Xi.prototype.render=fs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));var l=t.current,a=yt();d0(l,a,e,t,null,null)},Xi.prototype.unmount=fs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;d0(e.current,2,null,e,null,null),Si(),t[Jl]=null}};function Xi(e){this._internalRoot=e}Xi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ms();e={blockedOn:null,target:e,priority:t};for(var l=0;l<Al.length&&t!==0&&t<Al[l].priority;l++);Al.splice(l,0,e),l===0&&p0(e)}};var S0=T.version;if(S0!=="19.2.3")throw Error(d(527,S0,"19.2.3"));A.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=y(t),e=e!==null?V(e):null,e=e===null?null:e.stateNode,e};var ch={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:h,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qi.isDisabled&&Qi.supportsFiber)try{wa=Qi.inject(ch),mt=Qi}catch{}}return zn.createRoot=function(e,t){if(!R(e))throw Error(d(299));var l=!1,a="",n=Ar,i=Mr,c=Or;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=r0(e,1,!1,null,null,l,a,null,n,i,c,y0),e[Jl]=t.current,kc(e),new fs(t)},zn.hydrateRoot=function(e,t,l){if(!R(e))throw Error(d(299));var a=!1,n="",i=Ar,c=Mr,s=Or,o=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(c=l.onCaughtError),l.onRecoverableError!==void 0&&(s=l.onRecoverableError),l.formState!==void 0&&(o=l.formState)),t=r0(e,1,!0,t,l??null,a,n,o,i,c,s,y0),t.context=f0(null),l=t.current,a=yt(),a=tu(a),n=ml(a),n.callback=null,hl(l,n,a),l=a,t.current.lanes=l,Ca(t,l),Lt(t),e[Jl]=t.current,kc(e),new Xi(t)},zn.version="19.2.3",zn}var w0;function ph(){if(w0)return hs.exports;w0=1;function x(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x)}catch(T){console.error(T)}}return x(),hs.exports=bh(),hs.exports}var gh=ph();const _h=q0(gh),yh=({children:x,disableFilmEffects:T=!1})=>u.jsxs("div",{className:"relative w-full h-screen bg-stone-900 overflow-hidden font-serif-film text-stone-300 selection:bg-red-900 selection:text-white",children:[!T&&u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"absolute inset-0 pointer-events-none z-50 mix-blend-overlay opacity-30 film-grain"}),u.jsx("div",{className:"scratch-line left-1/4"}),u.jsx("div",{className:"scratch-line left-3/4 animation-delay-2000"})]}),u.jsx("div",{className:"absolute inset-0 pointer-events-none z-50 bg-[radial-gradient(circle,transparent_50%,#000000_150%)]"}),u.jsx("div",{className:`relative w-full h-full flex items-center justify-center ${T?"":"filter sepia-[0.3] contrast-[1.1] brightness-[0.9] flicker"}`,children:u.jsx("div",{className:"w-full max-w-4xl h-[90vh] border-4 border-stone-800 bg-stone-950 shadow-2xl relative overflow-hidden flex flex-col",children:x})})]}),Sh=({unlockedLogs:x,unlockedBlogs:T,unlockedReels:O})=>{const Q=x.length+T.length+O.length,w=Math.round(Q/51*100);return u.jsx("div",{className:"w-full bg-[#0f0e0d]/30 border border-[#3d342b] rounded-sm px-3 sm:px-4 py-3",children:u.jsxs("div",{className:"flex flex-wrap items-center gap-3 sm:gap-4",children:[u.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[u.jsx("span",{className:"text-[9px] font-mono text-[#8c8273] uppercase tracking-wider",children:"Progress"}),u.jsxs("span",{className:"text-base sm:text-lg font-bold font-mono text-[#d6cbb8]",children:[w,"%"]})]}),u.jsx("div",{className:"flex-1 min-w-[120px] h-2 bg-[#1a1816] border border-[#3d342b] overflow-hidden rounded-sm",children:u.jsx("div",{className:"h-full bg-gradient-to-r from-[#8c8273] via-[#a89078] to-[#d6cbb8] transition-all duration-500 ease-out",style:{width:`${w}%`}})}),u.jsxs("div",{className:"flex items-center gap-2 sm:gap-3 text-[10px] font-mono text-[#8c8273] shrink-0",children:[u.jsxs("span",{className:"whitespace-nowrap",children:[u.jsx("span",{className:"text-[#d6cbb8] font-bold",children:x.length}),"/",19,"R"]}),u.jsxs("span",{className:"whitespace-nowrap",children:[u.jsx("span",{className:"text-[#d6cbb8] font-bold",children:T.length}),"/",21,"B"]}),u.jsxs("span",{className:"whitespace-nowrap",children:[u.jsx("span",{className:"text-[#d6cbb8] font-bold",children:O.length}),"/",11,"F"]})]})]})})},Nh=({items:x,onSelectItem:T,unlockedLogs:O,unlockedBlogs:d,unlockedReels:R})=>u.jsxs("div",{className:"flex-1 flex flex-col bg-[#0f0e0d] relative overflow-y-auto",children:[u.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(40,30,20,0.5)_0%,rgba(0,0,0,1)_90%)] z-0 pointer-events-none"}),u.jsx("div",{className:"absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-0 pointer-events-none mix-blend-overlay"}),u.jsxs("div",{className:"flex-1 flex flex-col items-center p-6 md:p-12 z-10 relative min-h-full",children:[u.jsx("header",{className:"mb-12 border-b border-[#5c4d3c]/30 pb-4 text-center animate-in fade-in slide-in-from-top-4 duration-1000",children:u.jsx("h3",{className:"text-[10px] md:text-xs font-mono tracking-[0.8em] text-[#a89f91] opacity-60 uppercase",children:"Investigation Assets / Phase 01"})}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 w-full max-w-6xl px-4 animate-in fade-in zoom-in duration-1000 slide-in-from-bottom-8",children:x.map((U,B)=>u.jsx("button",{onClick:()=>T(U.id),className:"group relative w-full outline-none text-left perspective-1000 transition-all duration-700",style:{animationDelay:`${B*150}ms`,animationFillMode:"backwards"},children:u.jsxs("div",{className:`
                    relative h-[420px] flex flex-col overflow-hidden rounded-sm
                    bg-gradient-to-b from-[#1a1816] to-[#0a0a0a] 
                    border border-[#3d342b] 
                    shadow-[0_10px_40px_rgba(0,0,0,0.8)] 
                    transition-all duration-700
                    group-hover:border-[#a89078]
                    group-hover:-translate-y-4
                    group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.9)]
                `,children:[u.jsxs("div",{className:"flex-1 bg-black flex items-center justify-center relative overflow-hidden group-hover:bg-[#050505] transition-colors border-b border-[#2e2620]/30",children:[u.jsx("span",{className:"relative z-10 text-6xl md:text-7xl filter sepia-[0.3] group-hover:scale-110 group-hover:sepia-0 group-hover:brightness-125 transition-all duration-700 drop-shadow-[0_0_30px_rgba(214,203,184,0.15)]",children:U.icon}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"}),u.jsx("div",{className:"absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none"})]}),u.jsxs("div",{className:"h-48 p-8 flex flex-col items-center text-center relative bg-[#0f0e0d]",children:[u.jsx("div",{className:"absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/aged-paper-concrete-seamless.png')] opacity-5 mix-blend-overlay pointer-events-none"}),u.jsx("h4",{className:"text-xl md:text-2xl font-serif-film text-[#d6cbb8] tracking-[0.15em] group-hover:text-[#ffecd1] mb-3 transition-colors uppercase",children:U.name}),u.jsx("p",{className:"text-[10px] md:text-xs text-[#8c8273] font-mono leading-relaxed opacity-50 group-hover:opacity-100 transition-opacity max-w-[200px] tracking-tight",children:U.description}),u.jsxs("div",{className:"absolute top-4 right-4 text-[8px] font-mono text-[#4a4036] opacity-30 group-hover:opacity-100 transition-opacity",children:["#ARC_",B+104]}),u.jsx("div",{className:"mt-8 h-[1px] bg-[#3d342b] w-8 group-hover:w-24 group-hover:bg-[#786650] transition-all duration-700"})]}),u.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] transition-opacity duration-700"})]})},U.id))}),u.jsx("div",{className:"w-full max-w-6xl px-4 mt-6 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000",style:{animationDelay:"600ms"},children:u.jsx(Sh,{unlockedLogs:O,unlockedBlogs:d,unlockedReels:R})})]})]}),fe=x=>x.startsWith("http")||x.startsWith("data:")?x:`/the-missing-reel/${x.startsWith("/")?x.slice(1):x}`,jh=[{id:"recorder",name:"小型录音机",icon:"📼",description:"里面有一盘磁带，似乎录了一些对话。"},{id:"notebook",name:"博客主页",icon:"💻",description:"需要密码才能访问的历史日志归档。"},{id:"film",name:"8mm 胶卷",icon:"🎞️",description:"共计40个，以4个不同形状的酒杯标记顺序，且每个胶卷上所绘制杯子形状不超过2种。"}],ps=[{id:"log_auto",searchId:"AUTO_PLAY",title:"阿山_20201020",isAutoPlay:!0,locked:!1,content:`
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
苹果：……那就叫它这个。玲：怎么样，现在你能原谅我并保证不再阴阳怪气了吗？
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
苹果：好的……真的不喝一杯吗？
玲：已经喝醉啦。
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
凝固如霜的钢琴曲仍在无尽地弹奏下去。`}],Vi=[{id:"intro",password:"",title:"主页",locked:!1,content:"亲爱的朋友，这是一个不公开博客。 如果你想学习鸡尾酒，请输入酒名查看； 如果你只是想要偷窥我的树洞，那请你转身离开，去看综艺节目吧。"},{id:"boiler_maker",password:"boiler maker",title:"Boiler Maker",locked:!0,content:`Boiler Maker 
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

怎么说呢？能够利用其他人拍摄于多年前的素材，这会让我的纪录片产生强烈的时空错乱感，简直是完美的效果！更何况，这位客人___玲___已经在两个不同时空的影像里出现过。等他再次光临，我得把我的纪录片计划跟他好好聊聊！`},{id:"francis_albert",password:"francis albert",title:"Francis Albert",locked:!0,content:`Francis Albert
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
我没那么傻，这一卷我根本没有放进背包里，它也不再编号系统内。`},{id:"awen_20211020",password:"阿文_20211020",title:"阿文_20211020",locked:!0,content:`（店内熙熙攘攘，气氛松弛而愉悦，随着开门声响起，人群说话声音骤然停住。
脚步声渐渐靠近吧台。）

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
阿文：好久没往那去了吧？早就规划了，现在刚拆一半，你要想拍的话，明天最好去看看，再晚就没了。
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
阿文：这家伙，还挺会搞仪式。所以你明白了吗？你倒想人家，可人换店了，不来你这了。还tm拉黑我，也不看看谁才是最忠诚的上帝客人。`},{id:"xyz",password:"xyz",title:"XYZ",locked:!0,content:`XYZ
    White Rum 35ml
    Pisco 5ml
    Spanish Gin 2ml
    Lime 20ml
    Syrup 5ml
    Cointreau 10ml

每年__4月25日__是酒吧的__店庆日__，这天酒吧不营业，只招待老客人，当然也没有鸡尾酒，__阿山__会开十几瓶威士忌请大家喝。听说每年这天，都会有很多人喝醉，这不新鲜。但要在这天正经八百的做鸡尾酒，那倒很少见到。今年__店庆__，我就给__孟奇__做了杯酒。__XYZ__，加入一点点pisco和西班牙金酒，貌似是他自己的配方。我尝到了摇酒壶盖上残存的一点酒，很香，但除此之外，关于那天我已经没有记忆了。

💡 更新：孟奇很久没来了，今天__阿文__提醒我才想起，原来这是那天他一定要喝一杯__XYZ__，原因竟然是这个。总是作为最后一杯存在的鸡尾酒，__XYZ__，如今也成了孟奇在这个酒吧喝掉的最后一杯。
一声叹息。`},{id:"mengqi_20210425",password:"孟奇_20210425",title:"孟奇_20210425",locked:!0,content:`（麦克风有轻微剐蹭声，似乎被人装在口袋里，随着脚步移动着。
不远处，门被关上，喧闹声瞬间安静下来。）

__孟奇__: 陪我抽一根？
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

孟奇：行了。不聊这个话题了。`},{id:"goooooose",password:"goooooose",title:"Goooooose",locked:!0,content:`Goooooose
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

      |      _,,,---,,_
ZZZzz /,\`.-'\`'    -.  ;-;;,_
     |,4-  ) )-,_. , (  \`'-'
    '---''(_/--'  \`-'_)

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
不过总之，如果她到时候会来，那给她做个__Little Italy__的升级版，大概也算惊喜？`}],Zi=[{id:"reel_01",reelNumber:1,code:[0,0,0,0],label:"First Roll",contentTitle:"First Roll",contentDesc:"模糊的画面里，一个人在酒吧里做酒，完成之后镜头不断推进，拍下放在三角杯中的特写。旁边的杯垫上写 50/50 Martini。",contentImage:[fe("/assets/film_01.jpg"),fe("/assets/film_02.jpg")]},{id:"reel_02",reelNumber:2,code:[0,0,0,2],label:"Second Roll",contentTitle:"Second Roll",contentDesc:"模糊的画面里，一个高个子在酒吧里做酒，完成之后镜头不断推进，拍下放在三角杯中的特写。旁边的杯垫上写 Steph。",contentImage:[fe("/assets/film_02_1.jpg"),fe("/assets/film_02_2.jpg")]},{id:"reel_03",reelNumber:3,code:[0,0,2,0],label:"Film 4",contentTitle:"Film 4",contentDesc:"模糊的画面里，一个高个子在吧台里摇酒，完成之后镜头不断推进，拍下放在三角杯中的特写。旁边的杯垫上写Whisky Sour。",contentImage:[fe("/assets/film_03_1.jpg"),fe("/assets/film_03_2.jpg")]},{id:"reel_04",reelNumber:4,code:[0,2,0,0],label:"Fourth Roll",contentTitle:"Fourth Roll",contentDesc:"晃动的画面，人影纠缠在一起，几乎没有拍到任何清晰图像。第二张内容中，一把钥匙落在地上，拍摄者用鞋将其踩住。",contentImage:[fe("/assets/film_04_1.jpg"),fe("/assets/film_04_2.jpg")]},{id:"reel_06",reelNumber:5,code:[2,0,0,0],label:"Film 6",contentTitle:"Film 6",contentDesc:"在昏黄的夜色中，一片狼藉的废墟堆在大街中央，与侧后方的现代建筑形成鲜明对比。远处的灯光与楼宇被笼罩在一层朦胧的雾气与虚焦中，仿佛一段尘封已久的陈旧记忆。",contentImage:fe("/assets/film_06.jpg")},{id:"reel_07",reelNumber:6,code:[2,2,2,2],label:"Film 7",contentTitle:"Film 7",contentDesc:"斑驳的暗色背景上，一首充满克苏鲁与诗意感的随笔出现在画面中。内容提到“虫洞”、“女权”与“返祖现象”，署名为一个鲜红的感叹号。",contentImage:fe("/assets/film_07.jpg")},{id:"reel_00",reelNumber:0,code:[4,4,4,4],label:"Reel 0",contentTitle:"Reel 0",contentDesc:"这是一堆被剪碎的不连续的胶卷，看起来是一个阴暗的酒吧废墟，其中几张展现出烟头烙印一般的白斑，看起来不同寻常。",contentImage:[fe("/assets/film_00_3.jpg"),fe("/assets/film_00_4.jpg"),fe("/assets/film_00_5.jpg"),fe("/assets/film_00_6.jpg"),fe("/assets/film_00_7.jpg"),fe("/assets/film_00_8.jpg"),fe("/assets/film_00_9.jpg")]},{id:"reel_ghost",reelNumber:-1,code:[0,0,0,0],label:"Film 3",contentTitle:"Film 3",contentDesc:"晃动的画面，看起来是在老店，拍摄者把摄影机递给孟奇，孟奇拍下了拍摄者自己的样貌和手举名牌的图像。一人手持标有《行为艺术与心灵治愈》的书籍图片被拍下。",contentImage:fe("/assets/film_03.jpg")},{id:"reel_08",reelNumber:-2,code:[2,0,0,0],label:"Film 8",contentTitle:"Film 8",contentDesc:"在昏暗而幽闭的空间里，一叠书脊上印着《Are bats rats？》的样书静静地堆放着。厚重的阴影吞噬了大部分光线，微弱的回扣让书脊上的字迹显得格外苍白而诡异，透出一种压抑的怀旧气息。",contentImage:fe("/assets/film_08.jpg")},{id:"reel_09",reelNumber:-3,code:[1,1,1,1],label:"Film 9",contentTitle:"Film 9",contentDesc:"在昏黄而充满颗粒感的画面中，一群年轻人席地而坐，周围散落着酒瓶与杂物。光影在墙壁上投射出沉重而幽暗的阴影，模糊的面容被笼罩在一层忧郁的怀旧感中，仿佛一段被时间遗忘的私人记录。",contentImage:fe("/assets/film_09.jpg")},{id:"reel_10",reelNumber:7,code:[2,2,2,1],label:"Film Fan",contentTitle:"阿文_20221231",contentDesc:"喝醉的阿文趴在吧台沉沉睡着，手边是杯喝了一半的完美曼哈顿，旁边的书页上写着「电影迷」by taylor soigir。",contentImage:fe("/assets/film_10.jpg")},{id:"reel_11",reelNumber:8,code:[2,2,1,2],label:"Jam 12.18",contentTitle:"Jam 12.18",contentDesc:"吧台内的调酒师满怀期待地端起酒杯，面前的杯垫上写着配方：Jam 12.18。",contentImage:[fe("/assets/film_11_1.jpg"),fe("/assets/film_11_2.jpg")]}],R0={recorder:fe("/assets/recorder_music.mp3"),notebook:fe("/assets/recorder_music.mp3"),film:fe("/assets/film_music.mp3")},gs=4,Eh=({onBack:x,unlockedLogs:T,onUnlockLog:O,hasAutoPlayed:d,setHasAutoPlayed:R,onTriggerEnding:U,onMusicStart:B})=>{const[Q,w]=C.useState(null),[y,V]=C.useState(""),[G,te]=C.useState(""),[Re,Ae]=C.useState("等待输入..."),[Ne,Be]=C.useState([]),[ge,I]=C.useState(0),[K,me]=C.useState(0),_e=5,he=C.useMemo(()=>ps.filter(N=>T.includes(N.id)),[T]),Z=Math.ceil(he.length/_e),ie=C.useMemo(()=>{const N=K*_e;return he.slice(N,N+_e)},[he,K]),[de,et]=C.useState([]),[be,qe]=C.useState(0),[De,Je]=C.useState(!0),le=C.useRef(null),h=N=>N.split(`
`).map(Y=>Y.trim()).filter(Y=>Y.length>0).map((Y,J)=>{if(Y.startsWith("（")||Y.startsWith("("))return{id:J,speaker:null,text:Y,type:"direction"};const F=Y.match(/^([^：:]+)[：:](.+)$/);return F?{id:J,speaker:F[1].trim(),text:F[2].trim(),type:"dialogue"}:{id:J,speaker:null,text:Y,type:"direction"}}),A=()=>{const N=y.trim(),H=G.trim();if(!N||!H){Ae("请输入完整的姓名和日期。");return}const Y=`${N}_${H}`,J=ps.find(F=>F.searchId===Y);J?T.includes(J.id)?(Ae("该录音已存在于列表中。"),q(J)):(O(J.id),Ae("检索成功。加载中..."),setTimeout(()=>{q(J),V(""),te("")},1e3)):Ae("错误：未找到对应编号的录音。")},q=N=>{le.current&&clearTimeout(le.current);const H=h(N.content);if(Be(H),I(0),w(N),H.length>0&&H[0].type==="direction"){const J=H[0].text.split(/([，。；！])/).reduce((ft,Gt,wt)=>(Gt.match(/[，。；！]/)&&wt>0?ft[ft.length-1]+=Gt:Gt.trim()&&ft.push(Gt),ft),[]);et(J),qe(0),Je(!1);const F=J.join("").length;let Ce=0;const tt=()=>{if(Ce++,qe(Ce),Ce<F){const ft=Math.random()*30+30;le.current=setTimeout(tt,ft)}else setTimeout(()=>{Je(!0),B==null||B()},500)};tt()}else et([]),Je(!0),B==null||B()};C.useEffect(()=>()=>{le.current&&clearTimeout(le.current)},[]),C.useEffect(()=>{if(d)return;const N=ps.find(H=>H.isAutoPlay);N&&T.includes(N.id)&&(R(!0),setTimeout(()=>{q(N)},500))},[d,T,R]);const z=C.useMemo(()=>{const N=ge*gs;return Ne.slice(N,N+gs)},[Ne,ge]),$=Math.ceil(Ne.length/gs),r=(N,H)=>Ne.find((J,F)=>F<N&&J.speaker===H)?null:H,_=N=>N.split(/__([^_]+)__/g).map((Y,J)=>J%2===1?u.jsx("span",{className:"text-red-400 border-b border-red-500/40 pb-0.5 mx-1 font-bold tracking-wider",children:Y},J):u.jsx("span",{children:Y},J)),M=N=>N.includes("陌生人1")?"text-red-600 font-bold":N.includes("苹果")?"text-stone-400":"text-amber-700",D=N=>N.includes("陌生人1")?"text-red-500/90 border-red-900/50 glitch-text":N.includes("苹果")?"text-stone-200 border-stone-600":"text-amber-500/90 border-amber-900/50";return u.jsxs("div",{className:"flex-1 flex flex-col bg-stone-900 relative",children:[u.jsxs("div",{className:"h-14 sm:h-16 border-b border-stone-800 flex items-center justify-between px-3 sm:px-6 bg-stone-900 shadow-md z-10",children:[u.jsx("button",{onClick:x,className:"text-stone-400 hover:text-white text-[10px] sm:text-xs font-mono tracking-widest uppercase shrink-0",children:"[ OFF ]"}),u.jsxs("div",{className:"flex items-center gap-2 sm:gap-4 flex-1 justify-end",children:[u.jsx("span",{className:"text-[10px] text-stone-400 uppercase tracking-widest hidden lg:inline",children:"Tape Index:"}),u.jsxs("div",{className:"flex bg-stone-800/80 border border-stone-700 rounded-sm overflow-hidden group focus-within:border-stone-500 transition-colors items-center",children:[u.jsx("input",{type:"text",value:y,onChange:N=>V(N.target.value),placeholder:"姓名",className:"bg-transparent text-stone-100 px-1.5 sm:px-2 py-1 text-xs sm:text-sm focus:outline-none w-14 sm:w-20 text-center font-serif-film placeholder-stone-600"}),u.jsx("span",{className:"text-stone-400 font-mono select-none text-xs",children:"_"}),u.jsx("input",{type:"text",value:G,onChange:N=>te(N.target.value),placeholder:"日期",className:"bg-transparent text-stone-100 px-1.5 sm:px-2 py-1 text-xs sm:text-sm focus:outline-none w-16 sm:w-24 text-center font-serif-film placeholder-stone-600"}),u.jsx("button",{onClick:A,className:"text-stone-300 bg-stone-700 px-2 sm:px-3 py-1 text-[10px] sm:text-xs border-l border-stone-600 hover:bg-stone-600 hover:text-white transition-colors h-full",children:"PLAY"})]})]})]}),u.jsxs("div",{className:"flex-1 flex flex-col md:flex-row overflow-y-auto md:overflow-hidden relative",children:[u.jsxs("div",{className:`
            w-full md:w-64 bg-stone-900 border-r border-stone-800 flex flex-col z-20 
            ${Q?"hidden md:flex":"flex"}
        `,children:[u.jsx("div",{className:"p-4 border-b border-stone-800 text-[10px] text-stone-400 font-mono text-center tracking-widest",children:"ARCHIVED RECORDINGS"}),u.jsxs("div",{className:"flex-1 overflow-y-auto p-2 space-y-2 scrollbar-hide",children:[Re!=="等待输入..."&&u.jsx("div",{className:"text-xs text-amber-500 p-2 font-mono text-center animate-pulse",children:Re}),ie.map(N=>{const H=(Q==null?void 0:Q.id)===N.id;return u.jsxs("button",{onClick:()=>q(N),className:`
                                w-full text-left p-3 border rounded-sm transition-all group relative overflow-hidden
                                ${H?"bg-stone-800 border-amber-900/50 text-amber-500 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]":"bg-stone-950/30 border-stone-800 text-stone-400 hover:bg-stone-800 hover:border-stone-600"}
                            `,children:[u.jsxs("div",{className:"flex items-baseline justify-between relative z-10",children:[u.jsx("span",{className:`font-mono text-xs ${H?"text-amber-500":"text-stone-600 group-hover:text-stone-500"}`,children:H?"● PLAYING":"○ READY"}),H&&u.jsxs("span",{className:"text-[10px] animate-pulse",children:["00:0",Math.floor(Math.random()*9),"..."]})]}),u.jsx("div",{className:"mt-2 font-serif-film text-sm tracking-wide truncate relative z-10",children:N.title})]},N.id)})]}),Z>1&&u.jsxs("div",{className:"p-2 border-t border-stone-800 flex justify-between items-center bg-stone-900",children:[u.jsx("button",{onClick:()=>me(N=>Math.max(0,N-1)),disabled:K===0,className:"text-stone-500 hover:text-stone-300 disabled:opacity-30 disabled:hover:text-stone-500 px-2 py-1 text-xs font-mono",children:"< PREV"}),u.jsxs("span",{className:"text-[10px] text-stone-600 font-mono",children:["PG ",K+1,"/",Z]}),u.jsx("button",{onClick:()=>me(N=>Math.min(Z-1,N+1)),disabled:K===Z-1,className:"text-stone-500 hover:text-stone-300 disabled:opacity-30 disabled:hover:text-stone-500 px-2 py-1 text-xs font-mono",children:"NEXT >"})]})]}),u.jsxs("div",{className:"flex-1 bg-black relative flex flex-col items-center justify-center p-6 overflow-y-auto",children:[u.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,30,30,1)_0%,rgba(0,0,0,1)_100%)]"}),Q?u.jsxs(u.Fragment,{children:[De&&$>1&&u.jsxs(u.Fragment,{children:[u.jsx("button",{onClick:()=>I(N=>Math.max(0,N-1)),disabled:ge===0,className:"absolute left-0 top-1/2 -translate-y-1/2 z-50 p-3 md:p-4 text-stone-600 hover:text-stone-300 disabled:opacity-0 transition-all opacity-50 hover:opacity-100",children:u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"w-6 h-6 md:w-8 md:h-8",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5L8.25 12l7.5-7.5"})})}),u.jsx("button",{onClick:()=>{ge===$-1?(Q==null?void 0:Q.id)==="awen_20231103"&&(U==null||U()):I(N=>N+1)},disabled:ge===$-1&&(Q==null?void 0:Q.id)!=="awen_20231103",className:"absolute right-0 top-1/2 -translate-y-1/2 z-50 p-3 md:p-4 text-stone-600 hover:text-stone-300 disabled:opacity-0 transition-all opacity-50 hover:opacity-100",children:u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"w-6 h-6 md:w-8 md:h-8",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})})}),u.jsx("div",{className:"absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-50",children:Array.from({length:$}).map((N,H)=>u.jsx("div",{className:`rounded-full transition-all duration-300 ${H===ge?"w-2 h-2 bg-[#DA291C] shadow-[0_0_8px_rgba(218,41,28,0.6)]":"w-1.5 h-1.5 bg-stone-800"}`},H))})]}),u.jsxs("div",{className:"w-full max-w-2xl relative z-10 flex flex-col h-full max-h-[70vh] sm:max-h-[600px] mb-8 sm:mb-12 px-4 sm:px-8 md:px-16",children:[u.jsx("div",{className:"text-center mb-8 opacity-70",children:u.jsxs("h2",{className:"text-stone-500 text-xs font-mono tracking-[0.5em] uppercase border-b border-stone-800 pb-2 inline-block",children:[Q.title," // PAGE ",ge+1]})}),u.jsx("div",{className:"flex-1 flex flex-col justify-center space-y-8 min-h-[300px]",children:z.map(N=>{const H=N.id===0;return!De&&!H?null:u.jsx("div",{className:"w-full animate-in fade-in slide-in-from-bottom-2 duration-700 fill-mode-both",children:N.type==="direction"?u.jsx("div",{className:"text-center flex flex-col gap-2 items-center",children:H&&!De?u.jsx("div",{className:"space-y-2",children:(()=>{let J=0;return de.map((F,Ce)=>{const tt=J,ft=tt+F.length;if(J+=F.length,be<=tt)return null;const Gt=Math.min(F.length,be-tt),wt=F.slice(0,Gt);return u.jsxs("p",{className:"text-stone-600 italic font-serif-film text-sm md:text-base leading-relaxed tracking-wider px-8",children:[_(wt),be>tt&&be<ft&&u.jsx("span",{className:"inline-block w-2 h-4 bg-stone-500 ml-1 animate-pulse align-middle"})]},Ce)})})()}):u.jsx("p",{className:`
                                                    text-stone-600 italic font-serif-film text-sm md:text-base leading-relaxed tracking-wider px-8
                                                    ${N.text.includes("意外中断")?"text-red-800 font-bold animate-pulse":""}
                                                `,children:H?de.map((J,F)=>u.jsx("span",{className:"block mb-2",children:_(J)},F)):_(N.text)})}):u.jsxs("div",{className:"flex flex-col gap-1",children:[N.speaker&&r(N.id,N.speaker)&&u.jsx("span",{className:`
                                                    text-[10px] uppercase tracking-[0.2em] font-mono mb-1 ml-1
                                                    ${M(N.speaker)}
                                                `,children:N.speaker}),u.jsx("p",{className:`
                                                font-serif-film text-lg md:text-xl leading-relaxed pl-4 border-l-2
                                                ${D(N.speaker||"")}
                                            `,children:_(N.text)})]})},N.id)})})]})]}):u.jsx("div",{className:"text-stone-700 font-mono text-xs tracking-widest text-center animate-pulse",children:"NO TAPE LOADED"})]})]})]})},C0=["Tanqueray Gin","Glen grant","sotol","mezcal","rye","bourbon","singani","flying king rum","g'vine","shochu","vodka","brandy","apple jack","fernet hunter","dolin dry","angostura","amontillado","manzanilla","Montenegro","heering","disaronno","bonal","benedictine","ancho reyes","frangelico","averna","cynar","campari","bigallet china-china","maraschino","fernet branca"],U0=["ancho reyes","frangelico","averna","cynar","campari","bigallet china-china","maraschino","fernet branca","Tanqueray Gin","Glen grant","sotol","mezcal","rye","bourbon","singani","flying king rum","g'vine","shochu","vodka","brandy","apple jack"],H0=["fernet hunter","dolin dry","angostura","amontillado","manzanilla","Montenegro","heering","disaronno","bonal","benedictine","ancho reyes","frangelico","averna","cynar","campari","bigallet china-china","maraschino","fernet branca","Tanqueray Gin","Glen grant","sotol","mezcal","rye","bourbon","singani","flying king rum","g'vine","shochu","vodka","brandy","apple jack"],B0=["fernet hunter","dolin dry","angostura","amontillado","manzanilla","Montenegro","heering","disaronno","bonal","benedictine","ancho reyes","frangelico","averna","cynar","campari","bigallet china-china","maraschino","fernet branca","Tanqueray Gin","Glen grant","sotol","mezcal","rye","bourbon","singani","flying king rum","g'vine","shochu","vodka","brandy","apple jack"],zh=({onBack:x,unlockedBlogs:T,onUnlockBlog:O,onViewChange:d})=>{const[R,U]=C.useState(""),[B,Q]=C.useState(null),[w,y]=C.useState(""),[V,G]=C.useState(null),[te,Re]=C.useState(!1),[Ae,Ne]=C.useState(!1),[Be,ge]=C.useState(["???","???","???","???"]),[I,K]=C.useState(!1),[me,_e]=C.useState(0),[he,Z]=C.useState(!1),[ie,de]=C.useState(0),et=Vi.find(h=>h.id==="intro");C.useEffect(()=>{d==null||d(V!==null)},[V,d]);const be=()=>{const h=R.toLowerCase().trim();if(!h)return;if(h==="dram elysium"){Ne(!0),setTimeout(()=>{Re(!0),Ne(!1),U(""),y(""),ge(["READY","TO","SPIN","..."])},800);return}const A=h.replace("！","!"),q=Vi.find(z=>z.password.toLowerCase()===A);q?(T.includes(q.id)?(y("该日志已解锁。"),G(q.id)):(O(q.id),Q(q.title),setTimeout(()=>Q(null),1500),y(""),G(q.id)),U("")):y("鸡尾酒配方没10000个也有9000个，这么试是学不到真本事的")},qe=()=>{if(I)return;K(!0),_e(z=>z+1);let h=0;const A=20,q=setInterval(()=>{ge([C0[Math.floor(Math.random()*C0.length)],U0[Math.floor(Math.random()*U0.length)],H0[Math.floor(Math.random()*H0.length)],B0[Math.floor(Math.random()*B0.length)]]),h++,h>=A&&(clearInterval(q),K(!1))},80)},De=h=>h.split(/__([^_]+)__/g).map((q,z)=>z%2===1?u.jsx("span",{className:"font-bold text-red-600 border-b-2 border-red-500/40 px-1 transform -rotate-2 inline-block",children:q},z):u.jsx("span",{children:q},z)),Je=h=>{const{content:A}=h,q="💡 更新",z=A.split(q),$=z[0],r=z.length>1?z.slice(1).join(q):null,_=$.indexOf(`

`);let M="",D=$;if(_!==-1){const N=$.substring(0,_).trim();/[0-9]/.test(N)&&/[a-zA-Z]/.test(N)&&(M=N,D=$.substring(_).trim())}return u.jsxs(u.Fragment,{children:[M&&u.jsxs("div",{className:"mb-8 border border-stone-300 p-6 bg-[#fcfbf9] shadow-sm relative mx-2 text-center",children:[u.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-[10px] font-mono tracking-widest text-stone-400 uppercase",children:"COCKTAIL RECIPE"}),(()=>{const N=M.split(`
`),H=N[0],Y=N.slice(1).join(`
`);return u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"mb-4",children:u.jsx("h3",{className:"text-xl md:text-2xl font-black text-stone-900 font-serif-film uppercase tracking-widest border-b-2 border-stone-900/10 pb-2 inline-block px-8 transform -rotate-1",children:De(H)})}),u.jsx("div",{className:"text-sm md:text-base font-serif-film text-stone-800 whitespace-pre-wrap leading-loose tracking-wide",children:De(Y)})]})})()]}),u.jsx("div",{className:"text-base md:text-lg leading-relaxed text-indigo-900 whitespace-pre-wrap font-hand font-bold tracking-wide opacity-90 px-2",children:D.startsWith("（")&&D.indexOf("）")!==-1?(()=>{const N=D.indexOf("）"),H=D.substring(1,N),Y=D.substring(N+1),J=H.split(/([，。；！])/).reduce((F,Ce,tt,ft)=>(Ce.match(/[，。；！]/)&&tt>0?F[F.length-1]+=Ce:Ce.trim()&&F.push(Ce),F),[]);return u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"mb-8 pl-4 border-l-2 border-indigo-300/50 italic text-indigo-700/80 font-serif text-sm md:text-base space-y-2",children:J.map((F,Ce)=>u.jsx("div",{children:F.trim()},Ce))}),De(Y.trim())]})})():De(D)}),r&&u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"my-6 border-t-2 border-dashed border-indigo-300 relative mx-2",children:u.jsx("span",{className:"absolute -top-3 left-0 bg-white pr-2 text-xs font-bold text-indigo-400 font-mono tracking-widest",children:"LATER ADDED"})}),u.jsxs("div",{className:"relative pl-4 border-l-4 border-indigo-900/20 mx-2",children:[u.jsx("h3",{className:"font-hand text-indigo-800 font-bold text-lg mb-2 flex items-center gap-2",children:"💡 更新:"}),u.jsx("div",{className:"text-sm md:text-base leading-relaxed text-indigo-900/90 whitespace-pre-wrap font-hand tracking-wide font-bold",children:De(r.startsWith("：")?r.substring(1):r)})]})]}),h.attachments&&h.attachments.length>0&&h.attachmentType==="novel"&&u.jsxs("button",{onClick:()=>{Z(!0),de(0)},className:"mt-8 w-full relative group cursor-pointer text-left focus:outline-none",children:[u.jsx("div",{className:"absolute inset-0 bg-stone-800 shadow-md transform rotate-1 rounded-sm translate-y-1 translate-x-1"}),u.jsxs("div",{className:"relative bg-[#f5f5f0] border-l-4 border-stone-800 p-4 h-32 flex items-center justify-between overflow-hidden hover:bg-white transition-colors border border-stone-300",children:[u.jsxs("div",{className:"flex flex-col z-10",children:[u.jsx("span",{className:"font-serif text-xl text-stone-900 tracking-widest font-black uppercase mb-1",children:h.title}),u.jsx("span",{className:"text-xs font-sans text-stone-500 font-normal",children:"Scanned Document • PDF Source"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"text-xs font-mono font-bold text-stone-400 uppercase tracking-widest group-hover:text-stone-900 transition-colors",children:"READ ATTACHMENT"}),u.jsx("div",{className:"w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors",children:"↗"})]}),u.jsx("div",{className:"absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#f5f5f0] to-transparent pointer-events-none"})]})]})]})},le=V?Vi.find(h=>h.id===V):null;return u.jsxs("div",{className:"flex-1 bg-stone-200 flex flex-col relative overflow-hidden text-stone-800 font-sans",children:[u.jsxs("div",{className:"bg-sky-700 text-white p-4 border-b-4 border-sky-900 flex justify-between items-center shadow-lg relative z-20",children:[u.jsxs("div",{children:[u.jsx("h1",{className:"text-xl font-bold tracking-tight",children:"Apple's Secret Space"}),u.jsx("p",{className:"text-xs text-sky-200 mt-1",children:"只记录真实的感受。"})]}),u.jsx("button",{onClick:x,className:"text-xs bg-sky-800 hover:bg-sky-600 px-3 py-1 rounded border border-sky-400",children:"退出登录"})]}),B&&u.jsx("div",{className:"absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-300 pointer-events-none",children:u.jsxs("div",{className:"bg-white p-8 border-4 border-green-600 shadow-2xl transform rotate-3 flex flex-col items-center",children:[u.jsx("div",{className:"text-green-600 font-bold border-2 border-green-600 rounded-full w-16 h-16 flex items-center justify-center text-3xl mb-4 animate-bounce",children:"✓"}),u.jsx("h2",{className:"text-2xl font-black text-stone-800 uppercase tracking-widest",children:"New Entry"}),u.jsxs("p",{className:"text-stone-600 mt-2 font-serif text-lg italic",children:['"',B,'"']}),u.jsx("p",{className:"text-xs text-stone-400 mt-4 font-mono",children:"UNLOCKED"})]})}),u.jsxs("div",{className:"flex-1 overflow-y-auto p-4 md:p-8 bg-stone-200 relative z-10",children:[!le&&u.jsx("div",{className:"absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-noise.png')] opacity-10 pointer-events-none z-0"}),u.jsx("div",{className:"max-w-2xl mx-auto space-y-8 pb-20 relative z-10",children:te?u.jsxs("div",{className:"animate-in zoom-in-95 duration-500 relative",children:[u.jsx("button",{onClick:()=>Re(!1),className:"mb-6 text-xs font-mono font-bold text-stone-500 hover:text-sky-700 flex items-center gap-1 uppercase tracking-widest transition-colors",children:"← Back to Blog"}),u.jsxs("div",{className:"relative p-8 bg-[#f5f0e6] rounded-sm border-2 border-stone-800 shadow-[4px_4px_0px_rgba(40,30,20,1)] max-w-3xl mx-auto rotate-1",children:[u.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(#00000008_1px,transparent_1px),linear-gradient(90deg,#00000008_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none rounded-sm overflow-hidden"}),u.jsx("div",{className:"absolute -top-10 -right-10 w-40 h-40 border-[16px] border-[#8b451310] rounded-full blur-[2px] pointer-events-none"}),u.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-amber-100/80 backdrop-blur-sm shadow-sm rotate-1 z-10 box-decoration-clone",children:u.jsx("div",{className:"absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise-lines.png')] opacity-20"})}),u.jsx("style",{children:`
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
                                `}),u.jsxs("div",{className:"text-center mb-10 relative z-10",children:[I&&u.jsx("div",{className:"absolute inset-0 bg-white pointer-events-none animate-flash-overlay z-50 rounded-lg"}),u.jsx("h2",{className:"font-serif-film text-4xl text-stone-900 mb-4 tracking-tight",style:{textShadow:"2px 2px 0px rgba(0,0,0,0.1)"},children:"Dram Elysium"}),u.jsx("div",{className:"relative inline-block",children:u.jsxs("p",{className:"font-hand text-stone-600 text-sm md:text-base leading-relaxed max-w-lg mx-auto bg-white/60 p-4 border-2 border-stone-800 hand-drawn-border shadow-sm transform -rotate-1",children:['"你找到了彩蛋！这是一个随机配方工具，不知道做什么的调酒师们，请感受一下幸运！"',u.jsx("br",{}),u.jsx("span",{className:"block mt-2 font-bold text-stone-800 text-right",children:"——来自不吃苹果的苹果大王"})]})})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-3 mb-12 px-4 relative z-10",children:[0,1,2,3].map(h=>u.jsxs("div",{className:"bg-white border-2 border-stone-800 p-2 flex flex-col items-center justify-center h-28 relative shadow-[3px_3px_0px_#2c2c2c] hand-drawn-border transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_#2c2c2c]",children:[u.jsxs("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2 bg-stone-800 text-white text-[9px] px-2 py-0.5 min-w-[50px] text-center transform rotate-1 rounded-sm",children:["ITEM #",h+1]}),u.jsx("span",{className:`
                                                font-hand text-lg md:text-xl text-stone-900 text-center leading-tight font-bold
                                                ${I?"opacity-40 blur-[1px]":""}
                                                transition-all duration-100
                                                break-all
                                            `,children:Be[h]})]},h))}),u.jsx("div",{className:"flex justify-center -mb-12 relative z-30",children:u.jsxs("button",{onClick:qe,disabled:I,className:`
                                            group relative w-24 h-24 md:w-32 md:h-32
                                            transition-all duration-200 
                                            ${I?"animate-shake-mixer cursor-default":"hover:scale-105 active:scale-95 cursor-pointer"}
                                        `,children:[u.jsx("img",{src:fe("/assets/shaker_cute.png"),alt:"Shake for Luck",className:"w-full h-full object-contain drop-shadow-md opacity-90 contrast-125 sepia-[.2]"}),u.jsx("div",{className:`
                                            absolute top-0 -right-8 bg-white border-2 border-stone-800 px-3 py-2 rounded-2xl rounded-bl-none shadow-[2px_2px_0_rgba(0,0,0,0.1)]
                                            transition-all duration-300 transform
                                            ${I?"opacity-100 scale-105 rotate-12":"opacity-0 group-hover:opacity-100 group-hover:-translate-y-2"}
                                        `,children:u.jsx("span",{className:"font-hand text-stone-800 text-xs font-bold block whitespace-nowrap",children:I?"Mixing...":"Shake me!"})})]})}),u.jsx("div",{className:`absolute bottom-6 right-6 w-14 h-14 md:w-20 md:h-20 transition-transform duration-200 z-40 ${I?"animate-shake-logo":"hover:rotate-12"}`,children:u.jsx("img",{src:fe("/assets/dram_logo.png"),alt:"Dram Logo",className:"w-full h-full object-contain opacity-90 drop-shadow-sm"})})]})]}):le?u.jsxs("div",{className:"relative group no-caret",children:[u.jsx("button",{onClick:()=>G(null),className:"mb-4 text-xs font-mono text-stone-500 hover:text-sky-600 flex items-center gap-1",children:"← BACK TO INDEX"}),u.jsxs("div",{className:"bg-white border border-stone-300 p-6 shadow-sm relative z-20",children:[u.jsxs("div",{className:"border-b border-dashed border-stone-300 pb-2 mb-4 flex justify-between items-baseline",children:[u.jsx("h2",{className:"text-lg font-bold text-sky-800 font-mono",children:le.title}),u.jsx("span",{className:"text-xs text-stone-400 font-mono",children:"2020"})]}),Je(le),u.jsx("div",{className:"mt-6 pt-4 border-t border-stone-100 text-[10px] text-stone-400 text-right font-mono",children:"Posted by Apple"})]}),le.stickyNote&&u.jsxs("div",{className:`
                                relative w-full md:w-64 md:ml-auto
                                bg-yellow-200 p-4 shadow-[5px_5px_15px_rgba(0,0,0,0.2)] 
                                transform rotate-1 md:rotate-2 border border-yellow-300
                                mt-8 mb-4 font-hand text-stone-800 text-xs leading-relaxed z-20
                           `,children:[u.jsx("div",{className:"w-8 h-3 bg-yellow-400/50 absolute -top-1 left-1/2 -translate-x-1/2 opacity-50"}),u.jsx("h4",{className:"font-bold border-b border-yellow-700/20 pb-1 mb-2 text-yellow-900/80",children:"IMPORTANT TIPS:"}),u.jsx("div",{className:"space-y-3",children:le.stickyNote.split(`
`).map((h,A)=>u.jsxs("div",{className:"relative",children:[u.jsx("p",{className:`relative z-10 ${A===4?"font-bold text-stone-900":""}`,children:h}),A===4&&u.jsx("div",{className:"absolute -inset-2 pointer-events-none select-none",children:u.jsx("svg",{className:"w-full h-full overflow-visible opacity-80",viewBox:"0 0 300 60",preserveAspectRatio:"none",children:u.jsx("path",{d:"M5,30 Q30,5 150,5 Q270,5 290,30 Q300,55 150,55 Q10,55 5,30 M10,32 Q50,60 120,58",fill:"none",stroke:"#c2410c",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})})})]},A))})]})]}):u.jsxs("div",{className:`space-y-8 animate-in slide-in-from-left-4 duration-300 ${Ae?"opacity-0 scale-95 transition-all duration-700":""}`,children:[et&&u.jsxs("div",{className:"relative transform rotate-[-1deg] mb-8",children:[u.jsx("div",{className:"absolute top-1 left-1 w-full h-full bg-black/10 rounded-sm"}),u.jsxs("div",{className:"relative bg-[#f0eadd] p-6 border border-[#d6cbb8] shadow-md rounded-sm",children:[u.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-red-900/10 blur-[1px] transform rotate-1"}),u.jsxs("div",{className:"border-b border-stone-300 pb-2 mb-2 flex justify-between",children:[u.jsx("span",{className:"text-xs font-mono text-stone-500 uppercase tracking-widest",children:"README.TXT"}),u.jsx("span",{className:"text-xs font-mono text-stone-400",children:"2020.05.20"})]}),u.jsx("p",{className:"font-hand text-lg text-stone-800 leading-relaxed font-bold",children:et.content})]})]}),u.jsxs("div",{className:"bg-stone-900 border-2 border-stone-700 p-4 shadow-md rounded-sm caret-slow",children:[u.jsx("label",{className:"block text-xs font-bold text-stone-400 uppercase mb-2",children:"学习检索 (输入鸡尾酒名):"}),u.jsxs("div",{className:"flex gap-2",children:[u.jsx("input",{type:"text",value:R,onChange:h=>U(h.target.value),placeholder:"例如: Boiler Maker",className:`flex-1 bg-stone-800 text-stone-200 border border-stone-600 p-2 text-sm focus:outline-none focus:border-sky-500 font-mono ${Ae?"border-amber-400 bg-amber-50 text-amber-600 shadow-[0_0_30px_rgba(251,191,36,0.4)] scale-105 transition-all duration-300":""}`,onKeyDown:h=>h.key==="Enter"&&be()}),u.jsx("button",{onClick:be,className:"bg-stone-200 border border-stone-400 px-4 text-xs font-bold hover:bg-stone-300 text-stone-700 transition-colors",children:"解锁"})]}),w&&u.jsx("p",{className:"text-xs text-red-400 mt-2",children:w})]}),u.jsxs("div",{children:[u.jsxs("h3",{className:"text-stone-500 font-mono text-xs uppercase tracking-widest mb-4 border-b border-stone-300 pb-2",children:["Archived Entries (",T.filter(h=>h!=="intro").length,")"]}),u.jsx("div",{className:"grid gap-3",children:Vi.map(h=>!T.includes(h.id)||h.id==="intro"?null:u.jsxs("button",{onClick:()=>G(h.id),className:"bg-white border border-stone-300 p-4 shadow-sm hover:shadow-md hover:border-sky-400 transition-all text-left flex items-center group relative overflow-hidden",children:[u.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-1 bg-stone-300 group-hover:bg-sky-500 transition-colors"}),u.jsx("div",{className:"w-10 h-10 bg-stone-100 flex items-center justify-center mr-4 rounded-sm border border-stone-200",children:u.jsx("span",{className:"text-xl",children:"📄"})}),u.jsxs("div",{children:[u.jsx("h4",{className:"font-bold text-stone-700 group-hover:text-sky-700 font-mono",children:h.title}),u.jsx("p",{className:"text-[10px] text-stone-400 font-mono uppercase",children:"2020 ARCHIVE"})]}),u.jsx("span",{className:"ml-auto text-stone-300 group-hover:text-sky-500 font-mono text-xs",children:"OPEN →"})]},h.id))})]})]})})]}),he&&(le==null?void 0:le.attachments)&&u.jsx("div",{className:"fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4 backdrop-blur-md animate-in fade-in duration-300",onClick:()=>Z(!1),children:u.jsxs("div",{className:"relative w-full max-w-4xl max-h-full flex flex-col items-center my-8",onClick:h=>h.stopPropagation(),children:[u.jsxs("div",{className:"relative w-full max-h-[85vh] shadow-2xl bg-white rounded-sm flex flex-col md:flex-row overflow-hidden",children:[u.jsx("div",{className:"hidden md:flex flex-none w-16 items-center justify-center bg-stone-50 border-r border-stone-100 z-10 cursor-pointer hover:bg-stone-100 transition-colors",onClick:h=>{h.stopPropagation(),ie>0&&de(A=>A-1)},children:ie>0?u.jsx("button",{className:"p-4 text-stone-400 hover:text-stone-800 transition-colors","aria-label":"Previous Page",children:u.jsx("span",{className:"text-4xl font-light leading-none",children:"←"})}):u.jsx("div",{className:"w-16"})}),u.jsxs("div",{className:"relative flex-1 overflow-y-auto p-8 md:p-16 scrollbar-thin scrollbar-thumb-stone-300 scrollbar-track-transparent",children:[u.jsxs("button",{onClick:()=>Z(!1),className:"absolute top-4 right-6 z-20 text-stone-300 hover:text-stone-500 font-serif italic text-sm transition-colors flex items-center gap-1",children:[u.jsx("span",{children:"CLOSE"})," ✕"]}),le.attachments[ie].endsWith(".png")||le.attachments[ie].endsWith(".jpg")?u.jsx("img",{src:fe(le.attachments[ie]),alt:`Page ${ie+1}`,className:"w-full h-auto block rounded-sm opacity-90 transition-opacity duration-500"}):u.jsxs("div",{className:"max-w-2xl mx-auto font-serif text-stone-800 leading-relaxed text-lg whitespace-pre-wrap pb-12",children:[u.jsxs("div",{className:"flex justify-between items-center border-b border-stone-200 pb-2 mb-8",children:[u.jsxs("h3",{className:"text-sm font-sans text-stone-400 uppercase tracking-widest",children:["Page ",ie+1]}),u.jsxs("span",{className:"text-xs font-mono text-stone-300",children:[le.attachments[ie].length," chars"]})]}),le.attachments[ie].includes("「所以，你找到真相了吗？」")?u.jsxs(u.Fragment,{children:[le.attachments[ie].replace("「所以，你找到真相了吗？」",""),u.jsxs("div",{className:"flex items-center gap-4 mt-8 justify-end",children:[u.jsx("span",{className:"font-serif italic",children:"「所以，你找到真相了吗？」"}),u.jsx("img",{src:fe("/hunstler_logo.jpg"),alt:"Hunstler Klub",className:"w-16 h-auto opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"})]})]}):le.attachments[ie]]}),u.jsxs("div",{className:"flex md:hidden justify-between mt-12 pt-8 border-t border-stone-100",children:[u.jsx("button",{disabled:ie===0,onClick:h=>{h.stopPropagation(),de(A=>A-1)},className:`px-4 py-2 rounded-sm border ${ie===0?"border-stone-100 text-stone-200":"border-stone-300 text-stone-600"}`,children:"Previous"}),u.jsx("button",{disabled:ie===le.attachments.length-1,onClick:h=>{h.stopPropagation(),de(A=>A+1)},className:`px-4 py-2 rounded-sm border ${ie===le.attachments.length-1?"border-stone-100 text-stone-200":"border-stone-800 bg-stone-800 text-white"}`,children:"Next"})]})]}),u.jsx("div",{className:"hidden md:flex flex-none w-16 items-center justify-center bg-stone-50 border-l border-stone-100 z-10 cursor-pointer hover:bg-stone-100 transition-colors",onClick:h=>{h.stopPropagation(),ie<le.attachments.length-1&&de(A=>A+1)},children:ie<le.attachments.length-1?u.jsx("button",{className:"p-4 text-stone-400 hover:text-stone-800 transition-colors","aria-label":"Next Page",children:u.jsx("span",{className:"text-4xl font-light leading-none",children:"→"})}):u.jsx("div",{className:"w-16"})})]}),u.jsxs("div",{className:"mt-4 flex flex-col items-center gap-2",children:[u.jsx("div",{className:"flex gap-2",children:le.attachments.map((h,A)=>u.jsx("div",{className:`w-1.5 h-1.5 rounded-full transition-all duration-300 ${A===ie?"bg-stone-200 scale-125":"bg-stone-700"}`},A))}),u.jsxs("div",{className:"text-xs font-mono text-stone-500 uppercase tracking-[0.2em] flex items-center gap-2",children:[u.jsxs("span",{children:["ITEM ",ie+1,".",le.attachments.length]}),u.jsx("span",{className:"w-8 h-[1px] bg-stone-700"}),u.jsx("span",{children:"SCANNED_DOC"})]})]})]})})]})},Th=({film:x,onBack:T})=>{const O=Array.from({length:16}),d=Array.isArray(x.contentImage)?x.contentImage:[x.contentImage,x.contentImage],R=d[0],U=d[1]||d[0],[B,Q]=C.useState(null);return u.jsxs("div",{className:"flex-1 bg-black flex flex-col relative p-2 sm:p-4 overflow-hidden select-none",children:[u.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(40,40,40,1)_0%,rgba(0,0,0,1)_90%)] z-0"}),u.jsx("div",{className:"absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-0 pointer-events-none animate-pulse"}),u.jsx("button",{onClick:T,className:"absolute top-3 sm:top-6 left-3 sm:left-6 text-stone-500 hover:text-white z-30 text-[10px] sm:text-xs font-mono tracking-widest uppercase",children:"[ STOP ]"}),u.jsx("div",{className:"flex-1 flex items-center justify-center relative z-10 perspective-1000",children:u.jsxs("div",{className:"relative bg-black border-y-4 sm:border-y-8 border-black shadow-[0_0_50px_rgba(255,200,150,0.1)] transform rotate-1 scale-90 sm:scale-100 md:scale-110 lg:scale-125",children:[u.jsx("div",{className:"absolute top-1/2 left-0 right-0 h-40 -translate-y-1/2 bg-amber-100/10 blur-xl"}),u.jsx("div",{className:"h-6 flex justify-between items-center px-2 gap-2 bg-[#1a1a1a] border-b border-stone-800",children:O.map((w,y)=>u.jsx("div",{className:"w-3 h-4 bg-black/80 rounded-[2px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]"},`top-${y}`))}),u.jsxs("div",{className:"flex gap-[2px] bg-black py-4 px-4 overflow-hidden relative",children:[u.jsxs("div",{className:"relative w-48 sm:w-64 md:w-80 aspect-[4/3] bg-black overflow-hidden border border-stone-800/50 cursor-pointer hover:border-amber-500/50 transition-colors",onClick:()=>Q(R),children:[u.jsx("img",{src:R,alt:"Frame 1",className:`w-full h-full object-cover opacity-90 filter sepia-[0.4] contrast-[1.1] brightness-[0.9] ${x.id==="reel_06"?"saturate-[0.7]":""} ${["reel_08","reel_09"].includes(x.id)?"brightness-[0.95] contrast-[1.2] saturate-[0.8] sepia-[0.65] blur-[0.6px]":""}`}),x.id==="reel_06"&&u.jsx("div",{className:"absolute inset-0 pointer-events-none z-10 overflow-hidden",children:u.jsx("div",{className:"absolute inset-0 backdrop-blur-[1px]",style:{maskImage:"radial-gradient(circle at 35% 75%, transparent 25%, black 80%)",WebkitMaskImage:"radial-gradient(circle at 35% 75%, transparent 25%, black 80%)"}})}),["reel_08","reel_09"].includes(x.id)&&u.jsx("div",{className:"absolute inset-0 pointer-events-none z-20 bg-[radial-gradient(circle,transparent_35%,rgba(0,0,0,0.5)_100%)]"}),u.jsx("span",{className:"absolute bottom-1 right-2 text-[8px] font-mono text-amber-500/50 transform -scale-x-100",children:"8mm 2401"}),u.jsx("div",{className:"absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/50 pointer-events-none",children:u.jsx("span",{className:"text-white text-xs font-mono",children:"[ CLICK TO ZOOM ]"})})]}),u.jsxs("div",{className:"relative w-48 sm:w-64 md:w-80 aspect-[4/3] bg-black overflow-hidden border border-stone-800/50 cursor-pointer hover:border-amber-500/50 transition-colors",onClick:()=>Q(U),children:[u.jsx("img",{src:U,alt:"Frame 2",className:`w-full h-full object-cover opacity-90 filter sepia-[0.4] contrast-[1.1] brightness-[0.9] ${x.id==="reel_06"?"saturate-[0.7]":""} ${["reel_08","reel_09"].includes(x.id)?"brightness-[0.95] contrast-[1.2] saturate-[0.8] sepia-[0.65] blur-[0.6px]":""}`}),x.id==="reel_06"&&u.jsx("div",{className:"absolute inset-0 pointer-events-none z-10 overflow-hidden",children:u.jsx("div",{className:"absolute inset-0 backdrop-blur-[1px]",style:{maskImage:"radial-gradient(circle at 35% 75%, transparent 25%, black 80%)",WebkitMaskImage:"radial-gradient(circle at 35% 75%, transparent 25%, black 80%)"}})}),["reel_08","reel_09"].includes(x.id)&&u.jsx("div",{className:"absolute inset-0 pointer-events-none z-20 bg-[radial-gradient(circle,transparent_35%,rgba(0,0,0,0.5)_100%)]"}),u.jsx("div",{className:"absolute inset-0 border-l border-white/10 mx-10"}),u.jsx("span",{className:"absolute bottom-1 right-2 text-[8px] font-mono text-amber-500/50 transform -scale-x-100",children:"8mm 2402"}),u.jsx("div",{className:"absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/50 pointer-events-none",children:u.jsx("span",{className:"text-white text-xs font-mono",children:"[ CLICK TO ZOOM ]"})})]}),u.jsx("div",{className:"absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise-lines.png')] opacity-30 pointer-events-none mix-blend-overlay"})]}),u.jsx("div",{className:"h-6 flex justify-between items-center px-2 gap-2 bg-[#1a1a1a] border-t border-stone-800",children:O.map((w,y)=>u.jsx("div",{className:"w-3 h-4 bg-black/80 rounded-[2px] shadow-[inset_0_-1px_2px_rgba(255,255,255,0.1)]"},`bottom-${y}`))})]})}),u.jsx("div",{className:"absolute bottom-12 left-0 right-0 text-center z-30 px-8",children:u.jsxs("div",{className:"inline-block relative",children:[u.jsx("div",{className:"absolute -inset-4 bg-black/90 blur-md"}),u.jsx("p",{className:"relative text-transparent font-serif-film text-xs sm:text-sm md:text-lg tracking-wide leading-relaxed max-w-2xl cursor-text select-text px-2",style:{userSelect:"text",WebkitUserSelect:"text"},children:x.contentDesc}),u.jsx("div",{className:"absolute -bottom-8 left-0 right-0 text-center pointer-events-none",children:u.jsx("span",{className:"text-stone-600 text-[10px] font-mono tracking-wide animate-pulse",children:"[ DRAG TO REVEAL TEXT ]"})})]})}),u.jsx("style",{jsx:!0,children:`
        p::selection {
          background-color: rgba(217, 119, 6, 0.3);
          color: rgb(214, 211, 209);
        }
        p::-moz-selection {
          background-color: rgba(217, 119, 6, 0.3);
          color: rgb(214, 211, 209);
        }
      `}),B&&u.jsxs("div",{className:"fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-200",onClick:()=>Q(null),children:[u.jsx("button",{className:"absolute top-6 right-6 text-stone-400 hover:text-white text-xs font-mono tracking-widest uppercase z-10 transition-colors",onClick:()=>Q(null),children:"[ CLOSE ]"}),u.jsxs("div",{className:"relative max-w-[90vw] max-h-[90vh] flex items-center justify-center",children:[u.jsx("img",{src:B,alt:"Zoomed frame",className:"max-w-full max-h-[90vh] object-contain shadow-2xl",onClick:w=>w.stopPropagation()}),u.jsx("div",{className:"absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise-lines.png')] opacity-20 pointer-events-none mix-blend-overlay"})]}),u.jsx("div",{className:"absolute bottom-6 left-0 right-0 text-center",children:u.jsx("span",{className:"text-stone-500 text-xs font-mono tracking-wide",children:"[ CLICK ANYWHERE TO CLOSE ]"})})]})]})},Ah=({film:x,onBack:T})=>{const O=Array.isArray(x.contentImage)?x.contentImage:[x.contentImage],[d,R]=C.useState(null);return u.jsxs("div",{className:"flex-1 bg-[#050505] flex flex-col relative p-8 overflow-hidden select-none",children:[u.jsx("div",{className:"absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] z-0 pointer-events-none"}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black/0 to-black/60 z-0 pointer-events-none"}),u.jsxs("div",{className:"relative z-30 flex justify-between items-center mb-8 px-4",children:[u.jsx("button",{onClick:T,className:"text-stone-500 hover:text-white text-xs font-mono tracking-widest uppercase transition-colors",children:"[ CLOSE ARCHIVE ]"}),u.jsx("div",{className:"text-stone-600 font-mono text-[10px] tracking-[0.2em] uppercase",children:"Batch 00 • Shredded Fragments • Processed Oct 1984"})]}),u.jsx("div",{className:"flex-1 relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 overflow-y-auto px-4 scrollbar-hide pb-32",children:O.map((U,B)=>u.jsxs("div",{onClick:()=>R(B),className:`group relative aspect-[4/3] bg-black shadow-2xl transition-all duration-500 hover:scale-105 hover:z-40 
              border-4 border-stone-900 overflow-hidden cursor-zoom-in
            `,style:{transform:`rotate(${B%5-2}deg) translate(${Math.sin(B)*5}px, ${Math.cos(B)*10}px)`,zIndex:10+B%5},children:[u.jsx("img",{src:U||"",alt:`Fragment ${B+1}`,className:"w-full h-full object-cover filter sepia-[0.5] contrast-[1.2] brightness-[0.8] saturate-[0.7] blur-[0.4px] opacity-80 group-hover:opacity-100 group-hover:brightness-100 group-hover:blur-none transition-all duration-300"}),(B===2||B===6)&&u.jsx("div",{className:"absolute top-[8%] right-[12%] w-[25%] h-[30%] pointer-events-none z-30 overflow-hidden opacity-25 mix-blend-overlay group-hover:opacity-32 transition-opacity duration-700",children:u.jsx("img",{src:fe("/assets/ghost_overlay.png"),alt:"",className:"w-full h-full object-contain opacity-50",style:{filter:"blur(3px) contrast(0.6) brightness(1.5) grayscale(0.3)"}})}),(B===2||B===6)&&u.jsxs("div",{className:"absolute inset-0 pointer-events-none z-40 overflow-hidden",children:[u.jsx("div",{className:"absolute left-[20%] top-0 bottom-0 w-[1px] bg-white/20 blur-[0.5px]"}),u.jsx("div",{className:"absolute left-[22%] top-0 bottom-0 w-[0.5px] bg-white/10"}),u.jsx("div",{className:"absolute right-[35%] top-0 bottom-0 w-[1px] bg-stone-200/20 rotate-1"})]}),u.jsx("div",{className:"absolute inset-0 pointer-events-none z-20 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.6)_100%)]"}),u.jsx("div",{className:"absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise-lines.png')] opacity-30 pointer-events-none mix-blend-overlay"}),u.jsx("div",{className:"absolute inset-0 border-[8px] border-black/40 pointer-events-none box-border"}),u.jsx("div",{className:"absolute bottom-2 left-2 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm border border-stone-800/50",children:u.jsxs("span",{className:"text-[8px] font-mono text-stone-400 uppercase tracking-tighter",children:["FRA_",B.toString().padStart(2,"0")]})})]},`${x.id}-fragment-${B}`))}),u.jsx("div",{className:"absolute bottom-0 left-0 right-0 p-8 z-30 pointer-events-none",children:u.jsx("div",{className:"max-w-2xl mx-auto",children:u.jsxs("div",{className:"bg-black/80 backdrop-blur-lg p-6 border border-stone-800/50 shadow-2xl transform -rotate-1",children:[u.jsxs("h2",{className:"text-stone-500 font-mono text-[10px] uppercase tracking-widest mb-2 border-b border-stone-800 pb-2 flex justify-between",children:[u.jsx("span",{children:"Investigation Note"}),u.jsx("span",{className:"opacity-50",children:"Confidential"})]}),u.jsx("p",{className:"text-stone-300 font-serif text-sm italic leading-relaxed",children:x.contentDesc})]})})}),d!==null&&u.jsx("div",{className:"fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-8 md:p-16 backdrop-blur-sm cursor-zoom-out",onClick:()=>R(null),children:u.jsxs("div",{className:"relative max-w-5xl w-full aspect-[4/3] bg-black shadow-[0_0_100px_rgba(0,0,0,0.5)] border-2 border-stone-800 overflow-hidden",onClick:U=>U.stopPropagation(),children:[u.jsx("img",{src:O[d],alt:`Zoomed Fragment ${d}`,className:"w-full h-full object-contain filter sepia-[0.3] contrast-[1.1] brightness-[0.9] saturate-[0.8]"}),(d===2||d===6)&&u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"absolute top-[10%] right-[15%] w-[22%] h-[28%] pointer-events-none z-30 opacity-28 mix-blend-overlay",children:u.jsx("img",{src:fe("/assets/ghost_overlay.png"),alt:"",className:"w-full h-full object-contain opacity-55",style:{filter:"blur(3.5px) contrast(0.5) brightness(1.6) grayscale(0.4)"}})}),u.jsxs("div",{className:"absolute inset-0 pointer-events-none z-40",children:[u.jsx("div",{className:"absolute left-[20%] top-0 bottom-0 w-[1.5px] bg-white/20 blur-[1px]"}),u.jsx("div",{className:"absolute right-[35%] top-0 bottom-0 w-[1px] bg-stone-200/20 rotate-1"})]})]}),u.jsx("div",{className:"absolute inset-0 pointer-events-none z-20 bg-[radial-gradient(circle,transparent_50%,rgba(0,0,0,0.4)_100%)]"}),u.jsx("div",{className:"absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise-lines.png')] opacity-20 pointer-events-none mix-blend-overlay"}),u.jsx("button",{className:"absolute top-4 right-4 text-stone-500 hover:text-white transition-colors",onClick:()=>R(null),children:u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M6 18L18 6M6 6l12 12"})})}),u.jsxs("div",{className:"absolute bottom-4 left-6 font-mono text-[10px] text-stone-500 tracking-[0.3em] uppercase",children:["FRAGMENT_",d.toString().padStart(2,"0")," // ENLARGED_VIEW"]})]})})]})},Mh=({type:x,className:T})=>{const O={stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",className:T};switch(x){case 0:return u.jsxs("svg",{viewBox:"0 0 24 24",...O,children:[u.jsx("path",{d:"M12 21v-6"}),u.jsx("path",{d:"M8 21h8"}),u.jsx("path",{d:"M12 15l-3.5-9h7l-3.5 9"}),u.jsx("path",{d:"M9 6h6",opacity:"0.5"})]});case 1:return u.jsxs("svg",{viewBox:"0 0 24 24",...O,children:[u.jsx("path",{d:"M12 21v-9"}),u.jsx("path",{d:"M8 21h8"}),u.jsx("path",{d:"M3 5l9 7 9-7H3z"}),u.jsx("path",{d:"M6 5l6 5 6-5",opacity:"0.3"})]});case 2:return u.jsxs("svg",{viewBox:"0 0 24 24",...O,children:[u.jsx("path",{d:"M7 6l1.5 13h7l1.5-13H7z"}),u.jsx("path",{d:"M5 21h14",strokeWidth:"1",strokeDasharray:"1 2"}),u.jsx("path",{d:"M8 10h8",opacity:"0.3"}),u.jsx("path",{d:"M9 15h6",opacity:"0.3"})]});case 3:return u.jsxs("svg",{viewBox:"0 0 24 24",...O,children:[u.jsx("path",{d:"M12 21v-8"}),u.jsx("path",{d:"M8 21h8"}),u.jsx("path",{d:"M12 13c-2.5 0-4.5-1.5-4.5-4V5h9v4c0 2.5-2 4-4.5 4z"}),u.jsx("path",{d:"M8 5v2",opacity:"0.3"}),u.jsx("path",{d:"M16 5v2",opacity:"0.3"})]});case 4:return null;default:return null}},Oh=({onBack:x,onSelectReel:T,unlockedReels:O,onUnlockReel:d})=>{const[R,U]=C.useState(1),[B,Q]=C.useState([1,2,3,0]),[w,y]=C.useState(""),[V,G]=C.useState(!1),[te,Re]=C.useState(null);C.useEffect(()=>{y("");const I=Zi.find(K=>K.reelNumber===R);I&&O.includes(I.id)&&Q(I.code)},[R,O]);const Ae=I=>{y(""),Q(K=>{const me=[...K],_e=R===0?5:4;return me[I]=(me[I]+1)%_e,me})},Ne=I=>{y("");const K=Math.max(-3,Math.min(10,R+I));U(K)},Be=()=>{G(!0),setTimeout(()=>{G(!1),ge()},800)},ge=()=>{const I=Zi.find(K=>K.reelNumber===R&&JSON.stringify(K.code)===JSON.stringify(B));I?(d(I.id),T(I)):B.every(K=>K===0)?y(`REEL #${String(R)}: 曝光过度，胶片全白。`):y("胶卷顺序错误，无法查看")};return u.jsxs("div",{className:"fixed inset-0 w-full h-full bg-[#101010] flex flex-col items-center justify-center overflow-hidden select-none font-sans text-stone-300 perspective-1000",children:[u.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_center,#1a1a1a_0%,#000000_100%)]"}),u.jsx("div",{className:"absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-screen"}),u.jsxs("div",{className:"relative z-10 w-full h-full max-h-screen flex flex-col items-center justify-center p-4 gap-4",children:[u.jsxs("div",{className:"relative w-full max-w-[550px] h-auto max-h-[90vh] sm:max-h-[85vh] aspect-square shadow-2xl flex-shrink-0 group",children:[u.jsx("div",{className:"absolute -bottom-8 left-4 right-4 h-10 bg-black/90 blur-xl rounded-[50%] transform scale-y-50"}),u.jsxs("div",{className:`
                        relative w-full h-full
                        bg-[#E8AA25] /* Slightly darker/dirty Kodak Yellow */
                        shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8),inset_0_0_0_1px_rgba(255,255,255,0.05)]
                        overflow-hidden
                        rounded-sm
                    `,children:[u.jsx("div",{className:"absolute inset-0 opacity-40 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] pointer-events-none z-30"}),u.jsx("div",{className:"absolute inset-0 opacity-20 mix-blend-color-burn bg-[url('https://www.transparenttextures.com/patterns/cardboard.png')] pointer-events-none z-30"}),u.jsxs("div",{className:"absolute top-0 left-0 w-full h-[22%] bg-gradient-to-b from-[#252525] to-[#1a1a1a] px-6 flex flex-col justify-center border-b border-white/10 shadow-md z-10 relative overflow-hidden",children:[u.jsx("div",{className:"absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-30 mix-blend-overlay pointer-events-none"}),u.jsx("div",{className:"absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise-dark.png')] opacity-40 mix-blend-soft-light pointer-events-none"}),u.jsx("div",{className:"absolute top-0 right-10 w-32 h-32 bg-white/10 blur-xl rounded-full mix-blend-overlay"}),u.jsx("div",{className:"absolute bottom-2 left-20 w-24 h-24 bg-white/8 blur-lg rounded-full mix-blend-overlay"}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent mix-blend-overlay"}),u.jsxs("div",{className:"flex flex-row items-baseline gap-2 relative z-10 opacity-95",children:[u.jsx("span",{className:"text-[#C82015] font-black text-3xl md:text-5xl tracking-tighter leading-none mix-blend-screen opacity-90 blur-[0.3px]",children:"KODAK"}),u.jsx("span",{className:"text-[#e5e5e5] font-bold text-3xl md:text-5xl tracking-tight leading-none mix-blend-screen opacity-90 blur-[0.3px]",children:"VISION3"})]}),u.jsx("span",{className:"text-[#888] text-[8px] md:text-xs font-light tracking-wide mt-0.5 uppercase mix-blend-screen opacity-80",children:"Color Negative Film"})]}),u.jsxs("div",{className:"absolute top-[22%] bottom-0 left-0 w-8 bg-[#e5e5e5] flex flex-col items-center justify-end pb-2 border-r border-[#d49a24] z-10 hidden md:flex",children:[u.jsx("div",{className:"w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cardboard.png')] opacity-20 mix-blend-multiply absolute inset-0"}),u.jsx("div",{className:"w-full h-16 bg-[repeating-linear-gradient(0deg,#111,#111_1px,transparent_1px,transparent_3px)] opacity-70 mb-4 mix-blend-multiply"}),u.jsx("span",{className:"text-[6px] text-stone-800 -rotate-90 origin-center whitespace-nowrap mt-4 font-mono font-bold opacity-80",children:"7203 052 014"})]}),u.jsxs("div",{className:"absolute top-[22%] bottom-0 left-2 sm:left-4 md:left-8 right-0 p-2 sm:p-3 md:p-6 flex flex-col relative z-20 h-[78%] pb-12 sm:pb-16",children:[u.jsx("div",{className:"absolute right-[15%] top-[20%] w-40 h-40 bg-[#6b4e0d] rounded-full blur-3xl opacity-[0.25] mix-blend-multiply pointer-events-none z-0"}),u.jsx("div",{className:"absolute left-[25%] bottom-[30%] w-32 h-32 bg-[#5a4108] rounded-full blur-2xl opacity-[0.30] mix-blend-multiply pointer-events-none z-0"}),u.jsx("div",{className:"absolute right-[40%] top-[40%] w-24 h-24 bg-[#4d3606] rounded-full blur-xl opacity-[0.28] mix-blend-multiply pointer-events-none z-0"}),u.jsx("div",{className:"absolute left-[10%] top-[60%] w-20 h-20 bg-[#7a5d0f] rounded-full blur-lg opacity-[0.35] mix-blend-multiply pointer-events-none z-0"}),u.jsx("div",{className:"absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#8b6914]/40 to-transparent opacity-60 mix-blend-multiply pointer-events-none z-0"}),u.jsx("div",{className:"absolute bottom-0 left-0 w-56 h-56 bg-gradient-to-tr from-[#6b4e0d]/35 to-transparent opacity-70 mix-blend-multiply pointer-events-none z-0"}),u.jsx("div",{className:"absolute top-[10%] right-[20%] w-32 h-2 bg-[#5a4108] rotate-45 blur-sm opacity-[0.40] mix-blend-multiply pointer-events-none z-0"}),u.jsx("div",{className:"absolute bottom-[25%] left-[30%] w-24 h-2 bg-[#4d3606] -rotate-12 blur-sm opacity-[0.38] mix-blend-multiply pointer-events-none z-0"}),u.jsx("div",{className:"absolute top-[50%] left-[15%] w-28 h-1.5 bg-[#6b4e0d] rotate-[-30deg] blur-sm opacity-[0.35] mix-blend-multiply pointer-events-none z-0"}),u.jsx("div",{className:"absolute right-[5%] bottom-[15%] w-16 h-16 bg-[#7a5d0f] rounded-full blur-md opacity-[0.32] mix-blend-multiply pointer-events-none z-0"}),u.jsx("div",{className:"absolute left-[50%] top-[10%] w-12 h-12 bg-[#5a4108] rounded-full blur-md opacity-[0.30] mix-blend-multiply pointer-events-none z-0"}),u.jsx("button",{onClick:x,className:"absolute top-0 right-0 border-2 sm:border-[3px] border-[#da291c] p-0.5 sm:p-1 rotate-3 hover:rotate-0 transition-transform cursor-pointer z-50 bg-yellow-500/10 hover:bg-yellow-500/20 shadow-md",children:u.jsx("div",{className:"border-[1.5px] sm:border-[2px] border-[#da291c] px-2 sm:px-4 py-0.5 sm:py-1 flex items-center justify-center",children:u.jsx("span",{className:"text-[#da291c] font-black text-[8px] sm:text-[10px] md:text-sm tracking-widest uppercase",children:"RETURN"})})}),Zi.find(I=>I.reelNumber===R&&O.includes(I.id))&&u.jsx("div",{className:"absolute top-0 left-2 z-20 transform -rotate-6 transition-transform duration-300 origin-top-left",children:u.jsxs("div",{className:`
                                        relative px-2 py-1
                                        bg-[#fefce8]
                                        shadow-[1px_2px_3px_rgba(0,0,0,0.15)]
                                        flex items-center justify-center
                                        border border-yellow-200/60
                                    `,children:[u.jsx("div",{className:"absolute top-0 left-0 right-0 h-[6px] bg-black/[0.03] pointer-events-none mix-blend-multiply"}),u.jsx("span",{className:"text-stone-800 font-hand font-bold text-[10px] tracking-widest uppercase relative z-10 opacity-90 leading-none",children:"OPEN"})]})}),u.jsxs("div",{className:"relative z-10 flex flex-col gap-0 mt-0 shrink-0",children:[u.jsx("h1",{className:"text-[#1a1a1a] font-black text-xl sm:text-2xl md:text-5xl tracking-tight leading-none drop-shadow-sm mix-blend-multiply opacity-90 blur-[0.4px]",children:"Super 8"}),u.jsxs("div",{className:"flex items-center gap-1 mt-1",children:[u.jsx("span",{className:"text-[#222] font-bold text-xs sm:text-sm md:text-xl tracking-tighter opacity-80 blur-[0.2px] mix-blend-multiply",children:"50D"}),u.jsxs("div",{className:"flex items-center gap-0.5 sm:gap-1 border-[1px] border-[#1a1a1a]/40 px-0.5 sm:px-1 py-0.5 transform -rotate-1 bg-[#d49a24]/20 z-50 relative shadow-sm hover:scale-105 transition-transform",children:[u.jsx("span",{className:"text-[6px] sm:text-[8px] font-mono font-bold text-[#111] uppercase spacing-wide",children:"BATCH"}),u.jsx("button",{onClick:()=>Ne(-1),className:"text-[#000] hover:text-[#da291c] font-black text-[10px] sm:text-xs px-1 sm:px-1.5 cursor-pointer transition-colors",children:"<"}),u.jsx("span",{className:"text-sm sm:text-lg font-mono font-bold text-[#000] min-w-[1rem] sm:min-w-[1.2rem] text-center relative",children:String(R).padStart(2,"0")}),u.jsx("button",{onClick:()=>Ne(1),className:"text-[#000] hover:text-[#da291c] font-black text-[10px] sm:text-xs px-1 sm:px-1.5 cursor-pointer transition-colors",children:">"})]})]}),u.jsx("span",{className:"text-[#222] font-bold text-sm sm:text-lg md:text-xl tracking-tighter opacity-80 blur-[0.2px] mix-blend-multiply",children:"7203"})]}),u.jsx("div",{className:"flex flex-wrap sm:flex-nowrap flex-shrink-0 items-center justify-start gap-1.5 sm:gap-2 md:gap-5 mt-1.5 sm:mt-2 relative z-50 pl-0.5 sm:pl-1 mix-blend-normal min-h-[60px] sm:min-h-[80px] w-full",children:B.map((I,K)=>{const me=Zi.find(_e=>_e.reelNumber===R&&O.includes(_e.id));return u.jsxs("button",{onClick:()=>!me&&Ae(K),disabled:!!me,className:`
                                                group relative w-10 h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 flex-shrink-0 flex flex-col items-center justify-center 
                                                bg-[#E8AA25] border-2 border-stone-800
                                                ${me?"cursor-default opacity-90":"transition-all transform hover:-translate-y-1 cursor-pointer"}
                                            `,children:[u.jsx("div",{className:"absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cardboard.png')] opacity-10 mix-blend-multiply pointer-events-none"}),u.jsx("div",{className:`w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-10 text-stone-900 transition-colors relative z-50 ${te===K?"opacity-0":"opacity-100"}`,children:u.jsx(Mh,{type:I})}),me&&u.jsx("div",{className:"absolute top-1 right-1 w-2 h-2 rounded-full bg-[#1a1a1a]/50"}),te===K&&u.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:u.jsx("span",{className:"animate-spin text-stone-900 font-bold",children:"⟳"})}),u.jsxs("span",{className:"absolute bottom-0.5 right-0.5 sm:bottom-1 sm:right-1 text-[6px] sm:text-[8px] text-stone-500 font-mono z-10",children:["0",K+1]})]},K)})})]}),u.jsxs("div",{className:"absolute bottom-2 sm:bottom-4 left-3 sm:left-6 right-3 sm:right-6 flex justify-between items-end z-50 pointer-events-auto mix-blend-normal",children:[u.jsx("div",{className:"w-8 h-8 sm:w-10 sm:h-10 text-[#C82015] opacity-90 mix-blend-multiply",children:u.jsxs("svg",{viewBox:"0 0 100 100",fill:"currentColor",children:[u.jsx("path",{d:"M10 10 h15 v80 h-15 Z"}),u.jsx("path",{d:"M35 10 h15 l35 35 l-35 35 h-15 l35 -35 Z"})]})}),u.jsxs("button",{onClick:Be,disabled:V,className:`
                                    relative overflow-hidden
                                    border-2 sm:border-[3px] border-stone-900
                                    text-stone-900
                                    px-3 sm:px-6 py-1.5 sm:py-2
                                    text-[10px] sm:text-sm font-black uppercase tracking-widest
                                    hover:bg-stone-900 hover:text-[#E8AA25]
                                    transition-colors
                                    flex items-center gap-2
                                `,children:[u.jsx("span",{className:"relative z-10 drop-shadow-sm filter",children:V?"Running...":"INSPECT"}),u.jsx("div",{className:"absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-30 mix-blend-multiply pointer-events-none"})]})]})]}),u.jsx("div",{className:"absolute inset-0 border border-white/20 pointer-events-none mix-blend-overlay"})]}),u.jsx("div",{className:"h-10 flex items-center justify-center mt-6 px-4 text-center shrink-0",children:w&&u.jsx("div",{className:"transform rotate-1 border-l-4 border-[#C82015] bg-[#222] px-4 py-2 shadow-2xl",children:u.jsx("span",{className:"text-stone-300 text-xs font-mono font-bold tracking-tight",children:w})})})]})]})},ki=[{content:u.jsxs(u.Fragment,{children:[u.jsx("p",{children:"“苹果”是我在摄影社最好的朋友。"}),u.jsx("p",{className:"mt-8",children:"到今天，他已经不告而别一周了。"})]})},{content:u.jsxs(u.Fragment,{children:[u.jsx("p",{children:"这几年，苹果总是昼伏夜出，行踪神秘。"}),u.jsx("p",{className:"mt-8",children:"如今玩失踪，女友再也受不了，决定同他分手。"}),u.jsx("p",{className:"mt-8",children:"离开前，她将苹果寄放的背包交给了我。"})]})},{content:u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"text-stone-400 text-base mb-8 tracking-widest uppercase",children:"我打开背包，里面躺着："}),u.jsxs("ul",{className:"space-y-4 text-stone-300 text-lg text-left inline-block list-none border-l-2 border-stone-800 pl-8 font-mono-film",children:[u.jsx("li",{children:"📹 一台老式 8mm 摄影机"}),u.jsx("li",{children:"🎞️ 数不清的 8mm 胶卷，有些做了标记，有些是新的"}),u.jsx("li",{children:"📼 一支小型录音机"})]})]})},{content:u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"text-xl text-stone-200 mb-8 font-bold",children:"苹果有一个秘密，只有我知道。"}),u.jsx("p",{className:"text-base text-stone-400 leading-loose",children:"这些年，他其实一直在酒吧兼职打工。"}),u.jsx("p",{className:"mt-4 text-base text-stone-400 leading-loose",children:"他干得很有热情，在个人博客上写学习日记，"}),u.jsx("p",{className:"mt-4 text-base text-stone-400 leading-loose",children:"但却从未把这件事告诉过生活中的其他朋友。"})]})},{content:u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"text-lg text-stone-300 leading-loose mb-8",children:"所以自始至终，我也没能探明那家酒吧究竟在哪。"}),u.jsx("div",{className:"w-16 h-[1px] bg-stone-700 mx-auto my-8"}),u.jsxs("p",{className:"text-xl text-stone-200 font-bold leading-relaxed",children:["如今，胶卷、录音机和博客，",u.jsx("br",{}),"就成了找到苹果的唯一线索。"]})]})}],Dh=({onComplete:x})=>{const[T,O]=C.useState(0),[d,R]=C.useState(1),U=C.useRef(!1),B=()=>{U.current||(U.current=!0,R(0),setTimeout(()=>{T<ki.length-1?(O(w=>w+1),R(1),setTimeout(()=>{U.current=!1},500)):x()},500))},Q=ki[T];return u.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center bg-black p-4 md:p-12 relative overflow-hidden h-full cursor-pointer selection:bg-none font-serif-film",onClick:B,children:[u.jsx("div",{className:"absolute inset-4 md:inset-8 border-[6px] border-double border-stone-800 pointer-events-none opacity-60"}),u.jsx("div",{className:"absolute left-6 md:left-12 top-0 bottom-0 w-4 flex flex-col justify-around py-8 opacity-20 pointer-events-none",children:Array.from({length:12}).map((w,y)=>u.jsx("div",{className:"w-full h-5 bg-black rounded-[1px] border border-white/10 shadow-inner"},`l-${y}`))}),u.jsx("div",{className:"absolute right-6 md:right-12 top-0 bottom-0 w-4 flex flex-col justify-around py-8 opacity-20 pointer-events-none",children:Array.from({length:12}).map((w,y)=>u.jsx("div",{className:"w-full h-5 bg-black rounded-[1px] border border-white/10 shadow-inner"},`r-${y}`))}),u.jsxs("div",{className:"absolute top-12 text-[10px] text-stone-800 tracking-[0.3em]",children:["SCENE ",T+1," / ",ki.length]}),u.jsx("div",{className:"w-full max-w-2xl text-center z-10 transition-opacity duration-500 ease-in-out",style:{opacity:d},children:u.jsx("div",{className:"text-stone-300 text-xl md:text-2xl leading-loose tracking-wide drop-shadow-md min-h-[300px] flex flex-col justify-center items-center",children:Q==null?void 0:Q.content})}),u.jsx("div",{className:"absolute bottom-12 flex flex-col items-center gap-4 animate-pulse",children:u.jsx("button",{className:"text-stone-600 text-xs tracking-[0.3em] uppercase hover:text-stone-400 transition-colors",children:T===ki.length-1?"[ 点击开始调查 ]":"[ 点击继续 ]"})}),u.jsx("div",{className:"absolute bottom-6 right-8 opacity-40 hover:opacity-100 transition-opacity",children:u.jsx("button",{onClick:w=>{w.stopPropagation(),x()},className:"text-stone-700 hover:text-stone-500 text-[10px] tracking-widest uppercase border border-stone-800/50 px-2 py-1 rounded-sm",children:"SKIP"})})]})},wh=({onComplete:x})=>{const T=[fe("/assets/intro_film_1.jpg"),fe("/assets/intro_film_2.jpg")];return C.useEffect(()=>{const O=setTimeout(()=>{x()},3e3);return()=>{clearTimeout(O)}},[x]),u.jsxs("div",{className:"absolute inset-0 bg-[#050505] z-40 flex items-center justify-center font-mono",children:[u.jsx("div",{className:"absolute inset-4 md:inset-8 border-[6px] border-double border-stone-800 pointer-events-none opacity-60 z-50"}),u.jsxs("div",{className:"relative w-[340px] h-auto overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] scale-110 md:scale-100 transform rotate-1",children:[u.jsxs("div",{className:"bg-[#1a1a1a] border-x-[24px] border-[#0a0a0a] relative flex flex-col gap-[24px] py-8 box-border shadow-inner",children:[u.jsx("div",{className:"absolute left-[-18px] top-0 bottom-0 w-[14px] flex flex-col justify-start gap-[28px] py-1",children:Array.from({length:20}).map((O,d)=>u.jsx("div",{className:"w-full h-[18px] bg-black rounded-[1px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.05),0_1px_0_rgba(255,255,255,0.02)] border border-white/5"},`l-${d}`))}),u.jsx("div",{className:"absolute right-[-18px] top-0 bottom-0 w-[14px] flex flex-col justify-start gap-[28px] py-1",children:Array.from({length:20}).map((O,d)=>u.jsx("div",{className:"w-full h-[18px] bg-black rounded-[1px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.05),0_1px_0_rgba(255,255,255,0.02)] border border-white/5"},`r-${d}`))}),u.jsx("div",{className:"absolute left-[-30px] top-[40px] text-[8px] text-[#fbbf24] rotate-90 opacity-60 font-bold tracking-widest",children:"EASTMAN"}),u.jsx("div",{className:"absolute right-[-32px] top-[140px] text-[10px] text-[#fbbf24] -rotate-90 opacity-80 font-bold",children:"14"}),u.jsx("div",{className:"absolute left-[-30px] top-[260px] text-[8px] text-[#fbbf24] rotate-90 opacity-60 font-bold tracking-widest",children:"KODAK"}),u.jsx("div",{className:"absolute right-[-36px] top-[360px] text-[10px] text-[#fbbf24] -rotate-90 opacity-80 font-bold",children:"14A"}),T.map((O,d)=>u.jsxs("div",{className:"relative w-full aspect-[4/3] overflow-hidden bg-black mx-auto shadow-[inset_0_0_20px_rgba(0,0,0,1)] ring-1 ring-white/10",children:[u.jsx("img",{src:O,alt:`Film frame ${d}`,className:"w-full h-full object-cover sepia-[0.3] contrast-[1.15] brightness-[0.85] saturate-[0.8]"}),u.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.8)_100%)]"})]},d))]}),u.jsxs("div",{className:"pointer-events-none absolute inset-0 z-10 w-full h-full mix-blend-overlay opacity-60",children:[u.jsx("div",{className:"absolute inset-0 opacity-50 animate-grain-fine"}),u.jsx("div",{className:"absolute inset-0 opacity-20 animate-scratch-subtle"}),u.jsx("div",{className:"absolute inset-0 opacity-10 animate-grain-coarse"}),u.jsx("div",{className:"absolute inset-0 bg-[#4a3b2a] mix-blend-color opacity-20"}),u.jsx("div",{className:"absolute inset-0 bg-[#001a1a] mix-blend-soft-light opacity-30"})]})]})]})},Rh=({currentTrack:x,isMuted:T=!0,onToggleMute:O,isEndingMusicPlaying:d=!1,onStopEndingMusic:R})=>{const U=C.useRef(null),B=C.useRef(Promise.resolve()),Q=C.useRef(null),w=.4;C.useEffect(()=>{if(!U.current){const V=new Audio;V.loop=!0,V.volume=w,U.current=V}return()=>{U.current&&(U.current.pause(),U.current.src="")}},[]),C.useEffect(()=>{const V=U.current;V&&(B.current=B.current.then(async()=>{try{if(!x){V.pause(),Q.current=null;return}Q.current!==x&&(V.src=x,Q.current=x,V.load()),T?V.pause():(V.volume=w,await V.play())}catch(G){console.warn("BackgroundMusic operation failed:",G)}}))},[x,T]);const y=()=>{d&&R&&R(),O==null||O()};return u.jsxs("button",{onClick:y,className:`
            fixed top-6 right-6 z-[100] group flex items-center justify-center
            w-10 h-10 rounded-full border transition-all duration-500 shadow-lg cursor-pointer
            ${T?"border-stone-700 bg-stone-900/80 text-stone-500 hover:border-stone-500 hover:text-stone-300":"border-amber-700/50 bg-amber-900/30 text-amber-500 hover:border-amber-500 hover:bg-amber-900/50 shadow-amber-900/20"}
        `,title:T?"Turn Music On":"Turn Music Off",children:[u.jsxs("div",{className:`flex items-end gap-[2px] h-4 ${T?"opacity-40":""}`,children:[u.jsx("div",{className:`w-[3px] bg-current rounded-t-sm transition-all duration-300 ${T?"h-1":"h-3 animate-[pulse_0.8s_ease-in-out_infinite]"}`}),u.jsx("div",{className:`w-[3px] bg-current rounded-t-sm transition-all duration-300 ${T?"h-1":"h-5 animate-[pulse_1.2s_ease-in-out_infinite]"}`}),u.jsx("div",{className:`w-[3px] bg-current rounded-t-sm transition-all duration-300 ${T?"h-1":"h-2 animate-[pulse_1.0s_ease-in-out_infinite]"}`}),u.jsx("div",{className:`w-[3px] bg-current rounded-t-sm transition-all duration-300 ${T?"h-1":"h-4 animate-[pulse_0.6s_ease-in-out_infinite]"}`})]}),T&&u.jsx("div",{className:"absolute w-8 h-[1px] bg-stone-400 rotate-45 shadow-sm"})]})},Ch=({onStart:x})=>{const[T,O]=C.useState(!1),d=()=>{O(!0),setTimeout(x,1e3)};return u.jsxs("div",{onClick:d,className:`fixed inset-0 bg-black flex items-center justify-center cursor-pointer transition-opacity duration-1000 ${T?"opacity-0":"opacity-100"} z-50`,children:[u.jsxs("div",{className:"flex flex-col items-center gap-6",children:[u.jsx("div",{className:"text-stone-100 font-mono text-sm tracking-[0.5em] uppercase opacity-80 hover:opacity-100 transition-opacity duration-700 blur-[0.5px] animate-pulse",style:{textShadow:"2px 0 rgba(255,0,0,0.5), -2px 0 rgba(0,255,255,0.5), 0 0 4px rgba(255,255,255,0.2)"},children:"Ghost in the Reel"}),u.jsx("img",{src:fe("/hunstler_logo.jpg"),alt:"Hunstler Klub Logo",className:"w-24 h-auto opacity-80 mix-blend-screen blur-[0.5px] animate-pulse",style:{filter:"drop-shadow(0 0 4px rgba(255,255,255,0.2))"}})]}),u.jsx("div",{className:"absolute bottom-8 right-8 text-stone-500 font-mono text-[10px] tracking-widest opacity-60",children:"By Hunstler Klub"})]})},Ki="the-missing-reel-save",Uh="1.0.0";class Ji{static saveGame(T){try{const O={...T,timestamp:Date.now(),version:Uh};localStorage.setItem(Ki,JSON.stringify(O)),console.log("[SaveManager] Game saved successfully",O)}catch(O){console.error("[SaveManager] Failed to save game:",O)}}static loadGame(){try{const T=localStorage.getItem(Ki);if(!T)return console.log("[SaveManager] No save data found"),null;const O=JSON.parse(T);return!O.version||!O.timestamp?(console.warn("[SaveManager] Invalid save data format"),null):(console.log("[SaveManager] Game loaded successfully",O),O)}catch(T){return console.error("[SaveManager] Failed to load game:",T),null}}static hasSaveData(){try{return localStorage.getItem(Ki)!==null}catch(T){return console.error("[SaveManager] Failed to check save data:",T),!1}}static clearSave(){try{localStorage.removeItem(Ki),console.log("[SaveManager] Save data cleared")}catch(T){console.error("[SaveManager] Failed to clear save data:",T)}}static getSaveTimestamp(){const T=this.loadGame();return T?T.timestamp:null}}const Hh=({onNewGame:x,onContinue:T})=>{const[O,d]=C.useState(!1),[R,U]=C.useState(!1);C.useEffect(()=>{U(Ji.hasSaveData())},[]);const B=()=>{Ji.clearSave(),console.log("[SaveSelectScreen] Starting new game, save cleared"),d(!0),setTimeout(x,1e3)},Q=()=>{console.log("[SaveSelectScreen] Continuing game"),d(!0),setTimeout(T,1e3)};return u.jsx("div",{className:`fixed inset-0 bg-black flex items-center justify-center transition-opacity duration-1000 ${O?"opacity-0":"opacity-100"} z-50`,children:u.jsxs("div",{className:"flex flex-col items-center gap-6",children:[u.jsx("div",{className:"text-[#8c8273] font-mono text-xs tracking-[0.3em] uppercase opacity-60 mb-4",children:"Select Option"}),u.jsxs("div",{className:"flex flex-col gap-4",children:[u.jsx("button",{onClick:B,className:`px-12 py-4 bg-[#1a1816] border border-[#3d342b] text-[#d6cbb8] font-mono text-sm tracking-widest uppercase
                                 hover:bg-[#2a2624] hover:border-[#a89078] hover:text-[#ffecd1] 
                                 transition-all duration-300 cursor-pointer min-w-[200px]`,children:"新游戏"}),R&&u.jsx("button",{onClick:Q,className:`px-12 py-4 bg-transparent border border-[#3d342b] text-[#8c8273] font-mono text-sm tracking-widest uppercase
                                     hover:bg-[#1a1816] hover:border-[#786650] hover:text-[#d6cbb8]
                                     transition-all duration-300 cursor-pointer min-w-[200px]`,children:"继续游戏"})]}),!R&&u.jsx("div",{className:"text-[#4a4036] font-mono text-[10px] tracking-wider opacity-40 mt-4",children:"No save data found"})]})})},Bh=[{content:u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"text-xl text-stone-200 leading-loose",children:"亲爱的朋友，感谢你为‘苹果’付出的时光。"}),u.jsx("p",{className:"mt-8 text-stone-300",children:"虽然眼下仍未寻得他的踪迹，但已经大致窥见了事件全貌。"}),u.jsx("div",{className:"w-16 h-[1px] bg-stone-700 mx-auto my-12"}),u.jsxs("p",{className:"text-lg text-stone-400 leading-relaxed italic",children:["我们的故事还未结束，仅是暂告段落。现在，请在博客中搜索 'dram elysium'，",u.jsx("br",{}),"这是苹果截至最后一篇未被开启的博客内容，给陌生读者的小小礼物。"]})]})}],qh=({onComplete:x})=>{const[T,O]=C.useState(1),d=C.useRef(!1),R=()=>{d.current||(d.current=!0,O(0),setTimeout(()=>{x()},800))},U=Bh[0];return u.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center bg-black p-4 md:p-12 relative overflow-hidden h-full cursor-pointer selection:bg-none font-serif-film",onClick:R,children:[u.jsx("div",{className:"absolute inset-4 md:inset-8 border-[6px] border-double border-stone-800 pointer-events-none opacity-60"}),u.jsx("div",{className:"absolute left-6 md:left-12 top-0 bottom-0 w-4 flex flex-col justify-around py-8 opacity-20 pointer-events-none",children:Array.from({length:12}).map((B,Q)=>u.jsx("div",{className:"w-full h-5 bg-black rounded-[1px] border border-white/10 shadow-inner"},`l-${Q}`))}),u.jsx("div",{className:"absolute right-6 md:right-12 top-0 bottom-0 w-4 flex flex-col justify-around py-8 opacity-20 pointer-events-none",children:Array.from({length:12}).map((B,Q)=>u.jsx("div",{className:"w-full h-5 bg-black rounded-[1px] border border-white/10 shadow-inner"},`r-${Q}`))}),u.jsx("div",{className:"absolute top-12 text-[10px] text-stone-800 tracking-[0.3em] uppercase",children:"EPILOGUE"}),u.jsx("div",{className:"w-full max-w-2xl text-center z-10 transition-opacity duration-800 ease-in-out",style:{opacity:T},children:u.jsx("div",{className:"text-stone-300 text-xl md:text-2xl leading-loose tracking-wide drop-shadow-md min-h-[300px] flex flex-col justify-center items-center",children:U==null?void 0:U.content})}),u.jsx("div",{className:"absolute bottom-12 flex flex-col items-center gap-4 animate-pulse",children:u.jsx("button",{className:"text-stone-600 text-xs tracking-[0.3em] uppercase hover:text-stone-400 transition-colors",children:"[ 点击返回游戏 ]"})})]})};var ee=(x=>(x.INTRO="INTRO",x.INVENTORY="INVENTORY",x.RECORDER="RECORDER",x.NOTEBOOK="NOTEBOOK",x.FILM_SELECT="FILM_SELECT",x.FILM_VIEW="FILM_VIEW",x.ENDING="ENDING",x.FILM_LOOP="FILM_LOOP",x.TITLE_SCREEN="TITLE_SCREEN",x.SAVE_SELECT="SAVE_SELECT",x))(ee||{});const Lh=()=>{const[x,T]=C.useState(ee.FILM_LOOP),[O,d]=C.useState(["log_auto"]),[R,U]=C.useState(["intro"]),[B,Q]=C.useState([]),[w,y]=C.useState(!1),[V,G]=C.useState(null),[te,Re]=C.useState(!1),[Ae,Ne]=C.useState(!1),[Be,ge]=C.useState(!1),I=C.useRef(null),K=C.useRef(null),me=C.useRef(null),_e=C.useRef(null),he=C.useRef(null),[Z,ie]=C.useState(!1),[de,et]=C.useState(!1),be=C.useRef(null),qe=()=>{const z=Ji.loadGame();z&&(d(z.unlockedLogs),U(z.unlockedBlogs),Q(z.unlockedReels),y(z.hasAutoPlayedRecorder),et(z.hasEndingMusicFinished),console.log("[App] Game loaded from save"))};C.useEffect(()=>{qe()},[]),C.useEffect(()=>{const z=setTimeout(()=>{Ji.saveGame({unlockedLogs:O,unlockedBlogs:R,unlockedReels:B,hasAutoPlayedRecorder:w,hasEndingMusicFinished:de})},300);return()=>clearTimeout(z)},[O,R,B,w,de]),C.useEffect(()=>{if(!I.current){const z=new Audio("/assets/recorder_music.mp3");z.loop=!0,z.volume=.7,I.current=z}return()=>{I.current&&(I.current.pause(),I.current=null)}},[]),C.useEffect(()=>{if(!me.current){const z=new Audio("/assets/film_music.mp3");z.loop=!0,z.volume=.7,me.current=z}return()=>{me.current&&(me.current.pause(),me.current=null)}},[]),C.useEffect(()=>{if(!he.current){const z=new Audio("/assets/end_music.mp3");z.loop=!1,z.volume=.7,z.addEventListener("ended",()=>{et(!0),ie(!1)}),he.current=z}return()=>{he.current&&(he.current.pause(),he.current=null)}},[]),C.useEffect(()=>{const z=I.current;if(!z)return;const $=Be&&!te,r=Z&&!de;if($){if(r){const _=he.current;if(_&&_.volume>0){be.current&&clearInterval(be.current);const M=_.volume;let D=0;be.current=setInterval(()=>{D++,_.volume=Math.max(0,M-M/20*D),D>=20&&(_.pause(),be.current&&(clearInterval(be.current),be.current=null))},50)}}z.volume=.7,z.play().catch(_=>console.warn("Recorder music play failed:",_))}else{K.current&&clearInterval(K.current);const _=z.volume,M=20,D=_/M;let N=0;K.current=setInterval(()=>{N++;const H=Math.max(0,_-D*N);if(z.volume=H,(N>=M||H<=0)&&(z.pause(),K.current&&(clearInterval(K.current),K.current=null),Z&&!de)){const Y=he.current;if(Y&&Y.paused){Y.volume=0,Y.play().catch(Ce=>console.warn("Ending music resume failed:",Ce));let J=0;const F=setInterval(()=>{J++,Y.volume=Math.min(.7,.7/20*J),J>=20&&clearInterval(F)},50)}}},50)}return()=>{K.current&&clearInterval(K.current)}},[Be,x,te,Z,de]),C.useEffect(()=>{const z=me.current;if(!z)return;const r=(x===ee.FILM_SELECT||x===ee.FILM_VIEW)&&!te,_=Z&&!de;if(r){if(_){const M=he.current;if(M&&M.volume>0){be.current&&clearInterval(be.current);const D=M.volume;let N=0;be.current=setInterval(()=>{N++,M.volume=Math.max(0,D-D/20*N),N>=20&&(M.pause(),be.current&&(clearInterval(be.current),be.current=null))},50)}}z.volume=.7,z.play().catch(M=>console.warn("Film music play failed:",M))}else{_e.current&&clearInterval(_e.current);const M=z.volume,D=20,N=M/D;let H=0;_e.current=setInterval(()=>{H++;const Y=Math.max(0,M-N*H);if(z.volume=Y,(H>=D||Y<=0)&&(z.pause(),_e.current&&(clearInterval(_e.current),_e.current=null),Z&&!de)){const J=he.current;if(J&&J.paused){J.volume=0,J.play().catch(tt=>console.warn("Ending music resume failed:",tt));let F=0;const Ce=setInterval(()=>{F++,J.volume=Math.min(.7,.7/20*F),F>=20&&clearInterval(Ce)},50)}}},50)}return()=>{_e.current&&clearInterval(_e.current)}},[x,te,Z,de]),C.useEffect(()=>{x===ee.ENDING&&!Z&&!de&&(console.log("Entering ENDING view, setting ending music to play"),ie(!0))},[x,Z,de]),C.useEffect(()=>{const z=he.current;if(z){if(console.log("Ending music effect:",{isEndingMusicPlaying:Z,hasEndingMusicFinished:de,isMusicMuted:te,recorderMusicActive:Be,view:x}),te)z.paused||(console.log("Pausing ending music (muted)"),z.pause());else if(Z&&!de){const $=Be&&x===ee.RECORDER,r=x===ee.FILM_SELECT||x===ee.FILM_VIEW;console.log("Ending music should play?",{isRecorderActive:$,isFilmActive:r}),!$&&!r?z.paused&&(console.log("Starting ending music playback"),z.volume=.7,z.play().catch(_=>console.warn("Ending music play failed:",_))):z.paused||(console.log("Pausing ending music (priority module active)"),z.pause())}}},[Z,de,te,Be,x]);let De=null;x===ee.RECORDER?De=R0.recorder:x===ee.NOTEBOOK?De=null:x===ee.FILM_SELECT||x===ee.FILM_VIEW?De=R0.film:(x===ee.INVENTORY||x===ee.INTRO||x===ee.FILM_LOOP||x===ee.ENDING)&&(De=null);const Je=z=>{switch(z){case"recorder":T(ee.RECORDER);break;case"notebook":T(ee.NOTEBOOK);break;case"film":T(ee.FILM_SELECT);break}},le=z=>{O.includes(z)||d($=>[...$,z])},h=z=>{R.includes(z)||U($=>[...$,z])},A=z=>{B.includes(z)||Q($=>[...$,z])},q=()=>{ie(!1),et(!0);const z=he.current;z&&(z.pause(),z.currentTime=0)};return u.jsxs(yh,{disableFilmEffects:x===ee.NOTEBOOK&&Ae,children:[u.jsx(Rh,{currentTrack:De,isMuted:te,onToggleMute:()=>Re(!te),isEndingMusicPlaying:Z,onStopEndingMusic:q}),x===ee.FILM_LOOP&&u.jsx(wh,{onComplete:()=>T(ee.TITLE_SCREEN)}),x===ee.TITLE_SCREEN&&u.jsx(Ch,{onStart:()=>T(ee.SAVE_SELECT)}),x===ee.SAVE_SELECT&&u.jsx(Hh,{onNewGame:()=>T(ee.INTRO),onContinue:()=>T(ee.INVENTORY)}),x===ee.INTRO&&u.jsx(Dh,{onComplete:()=>T(ee.INVENTORY)}),x===ee.INVENTORY&&u.jsx(Nh,{items:jh,onSelectItem:Je,unlockedLogs:O,unlockedBlogs:R,unlockedReels:B}),x===ee.RECORDER&&u.jsx(Eh,{onBack:()=>{ge(!1),T(ee.INVENTORY)},unlockedLogs:O,onUnlockLog:le,hasAutoPlayed:w,setHasAutoPlayed:y,onTriggerEnding:()=>{ge(!1),T(ee.ENDING)},onMusicStart:()=>ge(!0)}),x===ee.NOTEBOOK&&u.jsx(zh,{onBack:()=>T(ee.INVENTORY),unlockedBlogs:R,onUnlockBlog:h,onViewChange:Ne}),x===ee.FILM_SELECT&&u.jsx(Oh,{onBack:()=>T(ee.INVENTORY),onSelectReel:z=>{G(z),T(ee.FILM_VIEW)},unlockedReels:B,onUnlockReel:A}),x===ee.FILM_VIEW&&V&&(V.id==="reel_00"?u.jsx(Ah,{film:V,onBack:()=>T(ee.FILM_SELECT)}):u.jsx(Th,{film:V,onBack:()=>T(ee.FILM_SELECT)})),x===ee.ENDING&&u.jsx(qh,{onComplete:()=>T(ee.INVENTORY)})]})},L0=document.getElementById("root");if(!L0)throw new Error("Could not find root element to mount to");const Gh=_h.createRoot(L0);Gh.render(u.jsx(dh.StrictMode,{children:u.jsx(Lh,{})}));
