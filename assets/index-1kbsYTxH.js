(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function Zy(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Md={exports:{}},pl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_;function yE(){if(R_)return pl;R_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return pl.Fragment=t,pl.jsx=i,pl.jsxs=i,pl}var w_;function xE(){return w_||(w_=1,Md.exports=yE()),Md.exports}var oe=xE(),Ed={exports:{}},ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D_;function SE(){if(D_)return ue;D_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),_=Symbol.for("react.view_transition"),S=Symbol.iterator;function E(U){return U===null||typeof U!="object"?null:(U=S&&U[S]||U["@@iterator"],typeof U=="function"?U:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,x={};function w(U,j,gt){this.props=U,this.context=j,this.refs=x,this.updater=gt||b}w.prototype.isReactComponent={},w.prototype.setState=function(U,j){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,j,"setState")},w.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function L(){}L.prototype=w.prototype;function A(U,j,gt){this.props=U,this.context=j,this.refs=x,this.updater=gt||b}var H=A.prototype=new L;H.constructor=A,M(H,w.prototype),H.isPureReactComponent=!0;var z=Array.isArray;function P(){}var I={H:null,A:null,T:null,S:null},D=Object.prototype.hasOwnProperty;function R(U,j,gt){var ut=gt.ref;return{$$typeof:o,type:U,key:j,ref:ut!==void 0?ut:null,props:gt}}function V(U,j){return R(U.type,j,U.props)}function nt(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function at(U){var j={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(gt){return j[gt]})}var lt=/\/+/g;function ft(U,j){return typeof U=="object"&&U!==null&&U.key!=null?at(""+U.key):j.toString(36)}function k(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(P,P):(U.status="pending",U.then(function(j){U.status==="pending"&&(U.status="fulfilled",U.value=j)},function(j){U.status==="pending"&&(U.status="rejected",U.reason=j)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function ot(U,j,gt,ut,bt){var Gt=typeof U;(Gt==="undefined"||Gt==="boolean")&&(U=null);var wt=!1;if(U===null)wt=!0;else switch(Gt){case"bigint":case"string":case"number":wt=!0;break;case"object":switch(U.$$typeof){case o:case t:wt=!0;break;case v:return wt=U._init,ot(wt(U._payload),j,gt,ut,bt)}}if(wt)return bt=bt(U),wt=ut===""?"."+ft(U,0):ut,z(bt)?(gt="",wt!=null&&(gt=wt.replace(lt,"$&/")+"/"),ot(bt,j,gt,"",function(le){return le})):bt!=null&&(nt(bt)&&(bt=V(bt,gt+(bt.key==null||U&&U.key===bt.key?"":(""+bt.key).replace(lt,"$&/")+"/")+wt)),j.push(bt)),1;wt=0;var Tt=ut===""?".":ut+":";if(z(U))for(var Pt=0;Pt<U.length;Pt++)ut=U[Pt],Gt=Tt+ft(ut,Pt),wt+=ot(ut,j,gt,Gt,bt);else if(Pt=E(U),typeof Pt=="function")for(U=Pt.call(U),Pt=0;!(ut=U.next()).done;)ut=ut.value,Gt=Tt+ft(ut,Pt++),wt+=ot(ut,j,gt,Gt,bt);else if(Gt==="object"){if(typeof U.then=="function")return ot(k(U),j,gt,ut,bt);throw j=String(U),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return wt}function K(U,j,gt){if(U==null)return U;var ut=[],bt=0;return ot(U,ut,"","",function(Gt){return j.call(gt,Gt,bt++)}),ut}function yt(U){if(U._status===-1){var j=U._result,gt=j();gt.then(function(ut){(U._status===0||U._status===-1)&&(U._status=1,U._result=ut,gt.status===void 0&&(gt.status="fulfilled",gt.value=ut))},function(ut){(U._status===0||U._status===-1)&&(U._status=2,U._result=ut,gt.status===void 0&&(gt.status="rejected",gt.reason=ut))}),U._status===-1&&(U._status=0,U._result=gt)}if(U._status===1)return U._result.default;throw U._result}var St=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function Ft(U){var j=I.T,gt={};gt.types=j!==null?j.types:null,I.T=gt;try{var ut=U(),bt=I.S;bt!==null&&bt(gt,ut),typeof ut=="object"&&ut!==null&&typeof ut.then=="function"&&ut.then(P,St)}catch(Gt){St(Gt)}finally{j!==null&&gt.types!==null&&(j.types=gt.types),I.T=j}}function Jt(U){var j=I.T;if(j!==null){var gt=j.types;gt===null?j.types=[U]:gt.indexOf(U)===-1&&gt.push(U)}else Ft(Jt.bind(null,U))}var xe={map:K,forEach:function(U,j,gt){K(U,function(){j.apply(this,arguments)},gt)},count:function(U){var j=0;return K(U,function(){j++}),j},toArray:function(U){return K(U,function(j){return j})||[]},only:function(U){if(!nt(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return ue.Activity=m,ue.Children=xe,ue.Component=w,ue.Fragment=i,ue.Profiler=l,ue.PureComponent=A,ue.StrictMode=s,ue.Suspense=p,ue.ViewTransition=_,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,ue.__COMPILER_RUNTIME={__proto__:null,c:function(U){return I.H.useMemoCache(U)}},ue.addTransitionType=Jt,ue.cache=function(U){return function(){return U.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(U,j,gt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var ut=M({},U.props),bt=U.key;if(j!=null)for(Gt in j.key!==void 0&&(bt=""+j.key),j)!D.call(j,Gt)||Gt==="key"||Gt==="__self"||Gt==="__source"||Gt==="ref"&&j.ref===void 0||(ut[Gt]=j[Gt]);var Gt=arguments.length-2;if(Gt===1)ut.children=gt;else if(1<Gt){for(var wt=Array(Gt),Tt=0;Tt<Gt;Tt++)wt[Tt]=arguments[Tt+2];ut.children=wt}return R(U.type,bt,ut)},ue.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},ue.createElement=function(U,j,gt){var ut,bt={},Gt=null;if(j!=null)for(ut in j.key!==void 0&&(Gt=""+j.key),j)D.call(j,ut)&&ut!=="key"&&ut!=="__self"&&ut!=="__source"&&(bt[ut]=j[ut]);var wt=arguments.length-2;if(wt===1)bt.children=gt;else if(1<wt){for(var Tt=Array(wt),Pt=0;Pt<wt;Pt++)Tt[Pt]=arguments[Pt+2];bt.children=Tt}if(U&&U.defaultProps)for(ut in wt=U.defaultProps,wt)bt[ut]===void 0&&(bt[ut]=wt[ut]);return R(U,Gt,bt)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(U){return{$$typeof:d,render:U}},ue.isValidElement=nt,ue.lazy=function(U){return{$$typeof:v,_payload:{_status:-1,_result:U},_init:yt}},ue.memo=function(U,j){return{$$typeof:g,type:U,compare:j===void 0?null:j}},ue.startTransition=Ft,ue.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},ue.use=function(U){return I.H.use(U)},ue.useActionState=function(U,j,gt){return I.H.useActionState(U,j,gt)},ue.useCallback=function(U,j){return I.H.useCallback(U,j)},ue.useContext=function(U){return I.H.useContext(U)},ue.useDebugValue=function(){},ue.useDeferredValue=function(U,j){return I.H.useDeferredValue(U,j)},ue.useEffect=function(U,j){return I.H.useEffect(U,j)},ue.useEffectEvent=function(U){return I.H.useEffectEvent(U)},ue.useId=function(){return I.H.useId()},ue.useImperativeHandle=function(U,j,gt){return I.H.useImperativeHandle(U,j,gt)},ue.useInsertionEffect=function(U,j){return I.H.useInsertionEffect(U,j)},ue.useLayoutEffect=function(U,j){return I.H.useLayoutEffect(U,j)},ue.useMemo=function(U,j){return I.H.useMemo(U,j)},ue.useOptimistic=function(U,j){return I.H.useOptimistic(U,j)},ue.useReducer=function(U,j,gt){return I.H.useReducer(U,j,gt)},ue.useRef=function(U){return I.H.useRef(U)},ue.useState=function(U){return I.H.useState(U)},ue.useSyncExternalStore=function(U,j,gt){return I.H.useSyncExternalStore(U,j,gt)},ue.useTransition=function(){return I.H.useTransition()},ue.version="19.3.1",ue}var N_;function Qp(){return N_||(N_=1,Ed.exports=SE()),Ed.exports}var hi=Qp();const QR=Zy(hi);var Td={exports:{}},ml={},bd={exports:{}},Ad={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U_;function ME(){return U_||(U_=1,(function(o){function t(k,ot){var K=k.length;k.push(ot);t:for(;0<K;){var yt=K-1>>>1,St=k[yt];if(0<l(St,ot))k[yt]=ot,k[K]=St,K=yt;else break t}}function i(k){return k.length===0?null:k[0]}function s(k){if(k.length===0)return null;var ot=k[0],K=k.pop();if(K!==ot){k[0]=K;t:for(var yt=0,St=k.length,Ft=St>>>1;yt<Ft;){var Jt=2*(yt+1)-1,xe=k[Jt],U=Jt+1,j=k[U];if(0>l(xe,K))U<St&&0>l(j,xe)?(k[yt]=j,k[U]=K,yt=U):(k[yt]=xe,k[Jt]=K,yt=Jt);else if(U<St&&0>l(j,K))k[yt]=j,k[U]=K,yt=U;else break t}}return ot}function l(k,ot){var K=k.sortIndex-ot.sortIndex;return K!==0?K:k.id-ot.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],g=[],v=1,m=null,_=3,S=!1,E=!1,b=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function A(k){for(var ot=i(g);ot!==null;){if(ot.callback===null)s(g);else if(ot.startTime<=k)s(g),ot.sortIndex=ot.expirationTime,t(p,ot);else break;ot=i(g)}}function H(k){if(b=!1,A(k),!E)if(i(p)!==null)E=!0,z||(z=!0,nt());else{var ot=i(g);ot!==null&&ft(H,ot.startTime-k)}}var z=!1,P=-1,I=5,D=-1;function R(){return M?!0:!(o.unstable_now()-D<I)}function V(){if(M=!1,z){var k=o.unstable_now();D=k;var ot=!0;try{t:{E=!1,b&&(b=!1,w(P),P=-1),S=!0;var K=_;try{e:{for(A(k),m=i(p);m!==null&&!(m.expirationTime>k&&R());){var yt=m.callback;if(typeof yt=="function"){m.callback=null,_=m.priorityLevel;var St=yt(m.expirationTime<=k);if(k=o.unstable_now(),typeof St=="function"){m.callback=St,A(k),ot=!0;break e}m===i(p)&&s(p),A(k)}else s(p);m=i(p)}if(m!==null)ot=!0;else{var Ft=i(g);Ft!==null&&ft(H,Ft.startTime-k),ot=!1}}break t}finally{m=null,_=K,S=!1}ot=void 0}}finally{ot?nt():z=!1}}}var nt;if(typeof L=="function")nt=function(){L(V)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,lt=at.port2;at.port1.onmessage=V,nt=function(){lt.postMessage(null)}}else nt=function(){x(V,0)};function ft(k,ot){P=x(function(){k(o.unstable_now())},ot)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(k){k.callback=null},o.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<k?Math.floor(1e3/k):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(k){switch(_){case 1:case 2:case 3:var ot=3;break;default:ot=_}var K=_;_=ot;try{return k()}finally{_=K}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(k,ot){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var K=_;_=k;try{return ot()}finally{_=K}},o.unstable_scheduleCallback=function(k,ot,K){var yt=o.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?yt+K:yt):K=yt,k){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=K+St,k={id:v++,callback:ot,priorityLevel:k,startTime:K,expirationTime:St,sortIndex:-1},K>yt?(k.sortIndex=K,t(g,k),i(p)===null&&k===i(g)&&(b?(w(P),P=-1):b=!0,ft(H,K-yt))):(k.sortIndex=St,t(p,k),E||S||(E=!0,z||(z=!0,nt()))),k},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(k){var ot=_;return function(){var K=_;_=ot;try{return k.apply(this,arguments)}finally{_=K}}}})(Ad)),Ad}var L_;function EE(){return L_||(L_=1,bd.exports=ME()),bd.exports}var Cd={exports:{}},Un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_;function TE(){if(O_)return Un;O_=1;var o=Qp();function t(v){var m="https://react.dev/errors/"+v;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)m+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+v+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),u=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(v,m,_){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:S===h?h:""+S,children:v,containerInfo:m,implementation:_}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(v,m){if(v==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Un.browser=function(v){return{$$typeof:u,_reason:v}},Un.createPortal=function(v,m){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return d(v,m,null,_)},Un.flushSync=function(v){var m=p.T,_=s.p;try{if(p.T=null,s.p=2,v)return v()}finally{p.T=m,s.p=_,s.d.f()}},Un.preconnect=function(v,m){typeof v=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(v,m))},Un.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},Un.preinit=function(v,m){if(typeof v=="string"&&m&&typeof m.as=="string"){var _=m.as,S=g(_,m.crossOrigin),E=typeof m.integrity=="string"?m.integrity:void 0,b=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;_==="style"?s.d.S(v,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:S,integrity:E,fetchPriority:b}):_==="script"&&s.d.X(v,{crossOrigin:S,integrity:E,fetchPriority:b,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Un.preinitModule=function(v,m){if(typeof v=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var _=g(m.as,m.crossOrigin);s.d.M(v,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}}else m==null&&s.d.M(v)},Un.preload=function(v,m){if(typeof v=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var _=m.as,S=g(_,m.crossOrigin);s.d.L(v,_,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Un.preloadModule=function(v,m){if(typeof v=="string")if(m){var _=g(m.as,m.crossOrigin);s.d.m(v,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}else s.d.m(v)},Un.requestFormReset=function(v){s.d.r(v)},Un.unstable_batchedUpdates=function(v,m){return v(m)},Un.useFormState=function(v,m,_){return p.H.useFormState(v,m,_)},Un.useFormStatus=function(){return p.H.useHostTransitionStatus()},Un.version="19.3.1",Un}var P_;function bE(){if(P_)return Cd.exports;P_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Cd.exports=TE(),Cd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_;function AE(){if(z_)return ml;z_=1;var o=EE(),t=Qp(),i=bE();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(s(188))}function g(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return p(c),e;if(f===r)return p(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var y=!1,T=c.child;T;){if(T===a){y=!0,a=c,r=f;break}if(T===r){y=!0,r=c,a=f;break}T=T.sibling}if(!y){for(T=f.child;T;){if(T===a){y=!0,a=f,r=c;break}if(T===r){y=!0,r=f,a=c;break}T=T.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}function m(e,n,a,r,c,f){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,r,c,f)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&m(e.child,n,a,r,c,f))return!0;e=e.sibling}return!1}function _(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function S(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function E(e){var n=[null,null],a=_(e);return a===null||b(n,e,a.child,{foundSelf:!1}),n}function b(e,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&b(e,n,a.child,r))return!0;a=a.sibling}return!1}function M(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var x=null,w=null;function L(e,n,a){return e===a?!0:e===n?(x=e,!0):!1}function A(e,n,a){return e===a?(w=e,!1):e===n?(w!==null&&(x=e),!0):!1}function H(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function z(e,n,a){for(var r=0,c=e;c;c=a(c))r++;c=0;for(var f=n;f;f=a(f))c++;for(;0<r-c;)e=a(e),r--;for(;0<c-r;)n=a(n),c--;for(;r--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var P=Object.assign,I=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),nt=Symbol.for("react.strict_mode"),at=Symbol.for("react.profiler"),lt=Symbol.for("react.consumer"),ft=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),ot=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),yt=Symbol.for("react.memo"),St=Symbol.for("react.lazy"),Ft=Symbol.for("react.activity"),Jt=Symbol.for("react.legacy_hidden"),xe=Symbol.for("react.memo_cache_sentinel"),U=Symbol.for("react.view_transition"),j=Symbol.for("react.recoverable"),gt=Symbol.iterator;function ut(e){return e===null||typeof e!="object"?null:(e=gt&&e[gt]||e["@@iterator"],typeof e=="function"?e:null)}var bt=Symbol.for("react.client.reference");function Gt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===bt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case V:return"Fragment";case at:return"Profiler";case nt:return"StrictMode";case ot:return"Suspense";case K:return"SuspenseList";case Ft:return"Activity";case U:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case ft:return e.displayName||"Context";case lt:return(e._context.displayName||"Context")+".Consumer";case k:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case yt:return n=e.displayName||null,n!==null?n:Gt(e.type)||"Memo";case St:n=e._payload,e=e._init;try{return Gt(e(n))}catch{}}return null}var wt=Array.isArray,Tt=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Pt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},F=[],Zt=-1;function Kt(e){return{current:e}}function Wt(e){0>Zt||(e.current=F[Zt],F[Zt]=null,Zt--)}function At(e,n){Zt++,F[Zt]=e.current,e.current=n}var me=Kt(null),qt=Kt(null),O=Kt(null),C=Kt(null);function J(e,n){switch(At(O,n),At(qt,e),At(me,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Bv(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Bv(n),e=Iv(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Wt(me),At(me,e)}function mt(){Wt(me),Wt(qt),Wt(O)}function xt(e){var n=e.memoizedState;n!==null&&(Hr._currentValue=n.memoizedState,At(C,e)),n=me.current;var a=Iv(n,e.type);n!==a&&(At(qt,e),At(me,a))}function pt(e){qt.current===e&&(Wt(me),Wt(qt)),C.current===e&&(Wt(C),Hr._currentValue=le)}var Mt,Ut;function Yt(e){if(Mt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Mt=n&&n[1]||"",Ut=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Mt+e+Ut}var te=!1;function _t(e,n){if(!e||te)return"";te=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var dt=function(){throw Error()};if(Object.defineProperty(dt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(dt,[])}catch(Dt){var Y=Dt}Reflect.construct(e,[],dt)}else{try{dt.call()}catch(Dt){Y=Dt}dt=!1;try{var et=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),dt=!0,new e}finally{dt&&(et!==void 0?Object.defineProperty(e.prototype,"props",et):delete e.prototype.props)}}}else{try{throw Error()}catch(Dt){Y=Dt}(dt=e())&&typeof dt.catch=="function"&&dt.catch(function(){})}}catch(Dt){if(Dt&&Y&&typeof Dt.stack=="string")return[Dt.stack,Y.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),y=f[0],T=f[1];if(y&&T){var B=y.split(`
`),Z=T.split(`
`);for(c=r=0;r<B.length&&!B[r].includes("DetermineComponentFrameRoot");)r++;for(;c<Z.length&&!Z[c].includes("DetermineComponentFrameRoot");)c++;if(r===B.length||c===Z.length)for(r=B.length-1,c=Z.length-1;1<=r&&0<=c&&B[r]!==Z[c];)c--;for(;1<=r&&0<=c;r--,c--)if(B[r]!==Z[c]){if(r!==1||c!==1)do if(r--,c--,0>c||B[r]!==Z[c]){var it=`
`+B[r].replace(" at new "," at ");return e.displayName&&it.includes("<anonymous>")&&(it=it.replace("<anonymous>",e.displayName)),it}while(1<=r&&0<=c);break}}}finally{te=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Yt(a):""}function Ht(e,n){switch(e.tag){case 26:case 27:case 5:return Yt(e.type);case 16:return Yt("Lazy");case 13:return e.child!==n&&n!==null?Yt("Suspense Fallback"):Yt("Suspense");case 19:return Yt("SuspenseList");case 0:case 15:return _t(e.type,!1);case 11:return _t(e.type.render,!1);case 1:return _t(e.type,!0);case 31:return Yt("Activity");case 30:return Yt("ViewTransition");default:return""}}function ee(e){try{var n="",a=null;do n+=Ht(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var ne=Object.prototype.hasOwnProperty,It=o.unstable_scheduleCallback,Se=o.unstable_cancelCallback,he=o.unstable_shouldYield,Ve=o.unstable_requestPaint,q=o.unstable_now,zt=o.unstable_getCurrentPriorityLevel,ct=o.unstable_ImmediatePriority,vt=o.unstable_UserBlockingPriority,Ot=o.unstable_NormalPriority,Bt=o.unstable_LowPriority,ce=o.unstable_IdlePriority,$e=o.log,vn=o.unstable_setDisableYieldValue,Re=null,Ke=null;function _n(e){if(typeof $e=="function"&&vn(e),Ke&&typeof Ke.setStrictMode=="function")try{Ke.setStrictMode(Re,e)}catch{}}var On=Math.clz32?Math.clz32:Eo,Hl=Math.log,na=Math.LN2;function Eo(e){return e>>>=0,e===0?32:31-(Hl(e)/na|0)|0}var _s=256,ys=262144,ia=4194304;function Ii(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function aa(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var c=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var T=r&134217727;return T!==0?(r=T&~f,r!==0?c=Ii(r):(y&=T,y!==0?c=Ii(y):a||(a=T&~e,a!==0&&(c=Ii(a))))):(T=r&~f,T!==0?c=Ii(T):y!==0?c=Ii(y):a||(a=r&~e,a!==0&&(c=Ii(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Oa(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function To(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var r=31-On(a),c=1<<r;n|=e[r],a&=~c}return n}function Zc(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vl(){var e=ia;return ia<<=1,(ia&62914560)===0&&(ia=4194304),e}function bo(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function xs(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Qc(e,n,a,r,c,f){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,B=e.expirationTimes,Z=e.hiddenUpdates;for(a=y&~a;0<a;){var it=31-On(a),dt=1<<it;T[it]=0,B[it]=-1;var Y=Z[it];if(Y!==null)for(Z[it]=null,it=0;it<Y.length;it++){var et=Y[it];et!==null&&(et.lane&=-536870913)}a&=~dt}r!==0&&Gl(e,r,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~n))}function Gl(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-On(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function N(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-On(a),c=1<<r;c&n|e[r]&n&&(e[r]|=n),a&=~c}}function Q(e,n){var a=n&-n;return a=(a&42)!==0?1:st(a),(a&(e.suspendedLanes|n))!==0?0:a}function st(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function rt(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function $(){var e=Pt.p;return e!==0?e:(e=window.event,e===void 0?32:S_(e.type))}function Et(e,n){var a=Pt.p;try{return Pt.p=e,n()}finally{Pt.p=a}}var Rt=Math.random().toString(36).slice(2),Ct="__reactFiber$"+Rt,Nt="__reactProps$"+Rt,ie="__reactContainer$"+Rt,re="__reactEvents$"+Rt,$t="__reactListeners$"+Rt,we="__reactHandles$"+Rt,Ne="__reactResources$"+Rt,je="__reactMarker$"+Rt,qe="__reactLoad$"+Rt;function Me(e){delete e[Ct],delete e[Nt],delete e[$t],delete e[we]}function jt(e){var n;if(n=e[Ct])return n;for(var a=e.parentNode;a;){if(n=a[ie]||a[Ct]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=e_(e);e!==null;){if(a=e[Ct])return a;e=e_(e)}return n}e=a,a=e.parentNode}return null}function tn(e){if(e=e[Ct]||e[ie]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function be(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function yn(e){var n=e[Ne];return n||(n=e[Ne]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Je(e){e[je]=!0}function Pn(e){e[qe]=void 0}var Pa=new Set,Ye={};function on(e,n){dn(e,n),dn(e+"Capture",n)}function dn(e,n){for(Ye[e]=n,e=0;e<n.length;e++)Pa.add(n[e])}var bn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),An={},ir={};function sa(e){return ne.call(ir,e)?!0:ne.call(An,e)?!1:bn.test(e)?ir[e]=!0:(An[e]=!0,!1)}var Le=!1;function Em(){var e=Le;return Le=!1,e}function Xl(e,n,a){if(sa(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function kl(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function ra(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,r)}}function ei(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Tm(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Fx(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(y){a=""+y,f.call(this,y)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Kc(e){if(!e._valueTracker){var n=Tm(e)?"checked":"value";e._valueTracker=Fx(e,n,""+e[n])}}function bm(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Tm(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}var Hx=/[\n"\\]/g;function mi(e){return e.replace(Hx,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Jc(e,n,a,r,c,f,y,T){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ei(n)):e.value!==""+ei(n)&&(e.value=""+ei(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?y==="number"&&e.value==n?$c(e,ei(e.value)):$c(e,ei(n)):a!=null?$c(e,ei(a)):r!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+ei(T):e.removeAttribute("name")}function Am(e,n,a,r,c,f,y,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Kc(e);return}a=a!=null?""+ei(a):"",n=n!=null?""+ei(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=T?e.checked:!!r,e.defaultChecked=!!r,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),Kc(e)}function $c(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function ar(e,n,a,r){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&r&&(e[a].defaultSelected=!0)}else{for(a=""+ei(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Cm(e,n,a){if(n!=null&&(n=""+ei(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ei(a):""}function Rm(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(wt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ei(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Kc(e)}function sr(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Vx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wm(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||Vx.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Dm(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="",Le=!0);for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&(wm(e,c,r),Le=!0)}else for(var f in n)n.hasOwnProperty(f)&&wm(e,f,n[f])}function tf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ql(e){return Xx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Fi(){}var ef=null;function nf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var rr=null,or=null;function Nm(e){var n=tn(e);if(n&&(e=n.stateNode)){var a=e[Nt]||null;t:switch(e=n.stateNode,n.type){case"input":if(Jc(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+mi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var c=r[Nt]||null;if(!c)throw Error(s(90));Jc(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&bm(r)}break t;case"textarea":Cm(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ar(e,!!a.multiple,n,!1)}}}var af=!1;function Um(e,n,a){if(af)return e(n,a);af=!0;try{var r=e(n);return r}finally{if(af=!1,(rr!==null||or!==null)&&(qu(),rr&&(n=rr,e=or,or=rr=null,Nm(n),e)))for(n=0;n<e.length;n++)Nm(e[n])}}function Ao(e,n){var a=e.stateNode;if(a===null)return null;var r=a[Nt]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var oa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sf=!1;if(oa)try{var Co={};Object.defineProperty(Co,"passive",{get:function(){sf=!0}}),window.addEventListener("test",Co,Co),window.removeEventListener("test",Co,Co)}catch{sf=!1}var za=null,rf=null,Yl=null;function Lm(){if(Yl)return Yl;var e,n=rf,a=n.length,r,c="value"in za?za.value:za.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var y=a-e;for(r=1;r<=y&&n[a-r]===c[f-r];r++);return Yl=c.slice(e,1<r?1-r:void 0)}function Wl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function jl(){return!0}function Om(){return!1}function Vn(e){function n(a,r,c,f,y){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?jl:Om,this.isPropagationStopped=Om,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=jl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=jl)},persist:function(){},isPersistent:jl}),n}var Ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zl=Vn(Ba),Ro=P({},Ba,{view:0,detail:0}),kx=Vn(Ro),of,lf,wo,Ql=P({},Ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wo&&(wo&&e.type==="mousemove"?(of=e.screenX-wo.screenX,lf=e.screenY-wo.screenY):lf=of=0,wo=e),of)},movementY:function(e){return"movementY"in e?e.movementY:lf}}),Pm=Vn(Ql),qx=P({},Ql,{dataTransfer:0}),Yx=Vn(qx),Wx=P({},Ro,{relatedTarget:0}),uf=Vn(Wx),jx=P({},Ba,{animationName:0,elapsedTime:0,pseudoElement:0}),Zx=Vn(jx),Qx=P({},Ba,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Kx=Vn(Qx),Jx=P({},Ba,{data:0}),zm=Vn(Jx),$x={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nS(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=eS[e])?!!n[e]:!1}function cf(){return nS}var iS=P({},Ro,{key:function(e){if(e.key){var n=$x[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Wl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cf,charCode:function(e){return e.type==="keypress"?Wl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),aS=Vn(iS),sS=P({},Ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bm=Vn(sS),rS=P({},Ba,{submitter:0}),oS=Vn(rS),lS=P({},Ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cf}),uS=Vn(lS),cS=P({},Ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),fS=Vn(cS),hS=P({},Ql,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dS=Vn(hS),pS=P({},Ba,{newState:0,oldState:0,source:0}),mS=Vn(pS),gS=[9,13,27,32],ff=oa&&"CompositionEvent"in window,Do=null;oa&&"documentMode"in document&&(Do=document.documentMode);var vS=oa&&"TextEvent"in window&&!Do,Im=oa&&(!ff||Do&&8<Do&&11>=Do),Fm=" ",Hm=!1;function Vm(e,n){switch(e){case"keyup":return gS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var lr=!1;function _S(e,n){switch(e){case"compositionend":return Gm(n);case"keypress":return n.which!==32?null:(Hm=!0,Fm);case"textInput":return e=n.data,e===Fm&&Hm?null:e;default:return null}}function yS(e,n){if(lr)return e==="compositionend"||!ff&&Vm(e,n)?(e=Lm(),Yl=rf=za=null,lr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Im&&n.locale!=="ko"?null:n.data;default:return null}}var xS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xm(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!xS[e.type]:n==="textarea"}function km(e,n,a,r){rr?or?or.push(r):or=[r]:rr=r,n=Ku(n,"onChange"),0<n.length&&(a=new Zl("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var No=null,Uo=null;function SS(e){Nv(e,0)}function Kl(e){var n=be(e);if(bm(n))return e}function qm(e,n){if(e==="change")return n}var Ym=!1;if(oa){var hf;if(oa){var df="oninput"in document;if(!df){var Wm=document.createElement("div");Wm.setAttribute("oninput","return;"),df=typeof Wm.oninput=="function"}hf=df}else hf=!1;Ym=hf&&(!document.documentMode||9<document.documentMode)}function jm(){No&&(No.detachEvent("onpropertychange",Zm),Uo=No=null)}function Zm(e){if(e.propertyName==="value"&&Kl(Uo)){var n=[];km(n,Uo,e,nf(e)),Um(SS,n)}}function MS(e,n,a){e==="focusin"?(jm(),No=n,Uo=a,No.attachEvent("onpropertychange",Zm)):e==="focusout"&&jm()}function ES(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Kl(Uo)}function TS(e,n){if(e==="click")return Kl(n)}function bS(e,n){if(e==="input"||e==="change")return Kl(n)}function AS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ni=typeof Object.is=="function"?Object.is:AS;function Lo(e,n){if(ni(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!ne.call(n,c)||!ni(e[c],n[c]))return!1}return!0}function pf(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Qm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Km(e,n){var a=Qm(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Qm(a)}}function Jm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Jm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function $m(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=pf(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=pf(e.document)}return n}function mf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var CS=oa&&"documentMode"in document&&11>=document.documentMode,ur=null,gf=null,Oo=null,vf=!1;function tg(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;vf||ur==null||ur!==pf(r)||(r=ur,"selectionStart"in r&&mf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Oo&&Lo(Oo,r)||(Oo=r,r=Ku(gf,"onSelect"),0<r.length&&(n=new Zl("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=ur)))}function Ss(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var cr={animationend:Ss("Animation","AnimationEnd"),animationiteration:Ss("Animation","AnimationIteration"),animationstart:Ss("Animation","AnimationStart"),transitionrun:Ss("Transition","TransitionRun"),transitionstart:Ss("Transition","TransitionStart"),transitioncancel:Ss("Transition","TransitionCancel"),transitionend:Ss("Transition","TransitionEnd")},_f={},eg={};oa&&(eg=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);function Ms(e){if(_f[e])return _f[e];if(!cr[e])return e;var n=cr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in eg)return _f[e]=n[a];return e}var ng=Ms("animationend"),ig=Ms("animationiteration"),ag=Ms("animationstart"),RS=Ms("transitionrun"),wS=Ms("transitionstart"),DS=Ms("transitioncancel"),sg=Ms("transitionend"),rg=new Map,yf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yf.push("scrollEnd");function bi(e,n){rg.set(e,n),on(n,[e])}var NS=0;function la(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=wi.identifierPrefix;var a=NS++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function og(e){if(e==null||typeof e=="string")return e;var n=null,a=Dr;if(a!==null)for(var r=0;r<a.length;r++){var c=e[a[r]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??e.default}function ua(e,n){return e=og(e),n=og(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var Jl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},gi=[],fr=0,xf=0;function $l(){for(var e=fr,n=xf=fr=0;n<e;){var a=gi[n];gi[n++]=null;var r=gi[n];gi[n++]=null;var c=gi[n];gi[n++]=null;var f=gi[n];if(gi[n++]=null,r!==null&&c!==null){var y=r.pending;y===null?c.next=c:(c.next=y.next,y.next=c),r.pending=c}f!==0&&lg(a,c,f)}}function tu(e,n,a,r){gi[fr++]=e,gi[fr++]=n,gi[fr++]=a,gi[fr++]=r,xf|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Sf(e,n,a,r){return tu(e,n,a,r),eu(e)}function Es(e,n){return tu(e,null,null,n),eu(e)}function lg(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-On(a),e=f.hiddenUpdates,r=e[c],r===null?e[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function eu(e){if(50<nl)throw nl=0,ku=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var hr={};function US(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(e,n,a,r){return new US(e,n,a,r)}function Mf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ca(e,n){var a=e.alternate;return a===null?(a=Qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function ug(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function nu(e,n,a,r,c,f){var y=0;if(r=e,typeof r=="function")Mf(r)&&(y=1);else if(typeof r=="string")y=rE(e,a,me.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(r){case Ft:return e=Qn(31,a,n,c),e.elementType=Ft,e.lanes=f,e;case V:return Ts(a.children,c,f,n);case nt:y=8,c|=24;break;case at:return e=Qn(12,a,n,c|2),e.elementType=at,e.lanes=f,e;case ot:return e=Qn(13,a,n,c),e.elementType=ot,e.lanes=f,e;case K:return e=Qn(19,a,n,c),e.elementType=K,e.lanes=f,e;case Jt:case U:return e=c|32,e=Qn(30,a,n,e),e.elementType=U,e.lanes=f,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case ft:y=10;break t;case lt:y=9;break t;case k:y=11;break t;case yt:y=14;break t;case St:y=16,r=null;break t}y=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Qn(y,a,n,c),n.elementType=e,n.type=r,n.lanes=f,n}function Ts(e,n,a,r){return e=Qn(7,e,r,n),e.lanes=a,e}function Ef(e,n,a){return e=Qn(6,e,null,n),e.lanes=a,e}function cg(e){var n=Qn(18,null,null,0);return n.stateNode=e,n}function Tf(e,n,a){return n=Qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var fg=new WeakMap;function vi(e,n){if(typeof e=="object"&&e!==null){var a=fg.get(e);return a!==void 0?a:(n={value:e,source:n,stack:ee(n)},fg.set(e,n),n)}return{value:e,source:n,stack:ee(n)}}var dr=[],pr=0,iu=null,Po=0,_i=[],yi=0,Ia=null,Hi=1,Vi="";function fa(e,n){dr[pr++]=Po,dr[pr++]=iu,iu=e,Po=n}function hg(e,n,a){_i[yi++]=Hi,_i[yi++]=Vi,_i[yi++]=Ia,Ia=e;var r=Hi;e=Vi;var c=32-On(r)-1;r&=~(1<<c),a+=1;var f=32-On(n)+c;if(30<f){var y=c-c%5;f=(r&(1<<y)-1).toString(32),r>>=y,c-=y,Hi=1<<32-On(n)+c|a<<c|r,Vi=f+e}else Hi=1<<f|a<<c|r,Vi=e}function au(e){e.return!==null&&(fa(e,1),hg(e,1,0))}function bf(e){for(;e===iu;)iu=dr[--pr],dr[pr]=null,Po=dr[--pr],dr[pr]=null;for(;e===Ia;)Ia=_i[--yi],_i[yi]=null,Vi=_i[--yi],_i[yi]=null,Hi=_i[--yi],_i[yi]=null}function dg(e,n){_i[yi++]=Hi,_i[yi++]=Vi,_i[yi++]=Ia,Hi=n.id,Vi=n.overflow,Ia=e}var xn=null,Ze=null,_e=!1,Fa=null,xi=!1,Af=Error(s(519));function Ha(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw zo(vi(n,e)),Af}function pg(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[Ct]=e,n[Nt]=r,a){case"dialog":Te("cancel",n),Te("close",n);break;case"iframe":case"object":case"embed":Te("load",n);break;case"video":case"audio":for(a=0;a<al.length;a++)Te(al[a],n);break;case"source":Te("error",n);break;case"img":case"image":case"link":Te("error",n),Te("load",n);break;case"details":Te("toggle",n);break;case"input":Te("invalid",n),Am(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Te("invalid",n);break;case"textarea":Te("invalid",n),Rm(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Pv(n.textContent,a)?(r.popover!=null&&(Te("beforetoggle",n),Te("toggle",n)),r.onScroll!=null&&Te("scroll",n),r.onScrollEnd!=null&&Te("scrollend",n),r.onClick!=null&&(n.onclick=Fi),n=!0):n=!1,n||Ha(e,!0)}function su(e){for(xn=e.return;xn;)switch(xn.tag){case 5:case 31:case 13:xi=!1;return;case 27:case 3:xi=!0;return;default:xn=xn.return}}function mr(e){if(e!==xn)return!1;if(!_e)return su(e),_e=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||nd(e.type,e.memoizedProps)),a=!a),a&&Ze&&Ha(e),su(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=t_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=t_(e)}else n===27?(n=Ze,ns(e.type)?(e=fd,fd=null,Ze=e):Ze=n):Ze=xn?Mi(e.stateNode.nextSibling):null;return!0}function bs(){Ze=xn=null,_e=!1}function Cf(){var e=Fa;return e!==null&&($n===null?$n=e:$n.push.apply($n,e),Fa=null),e}function zo(e){Fa===null?Fa=[e]:Fa.push(e)}var Rf=Kt(null),As=null,ha=null;function Va(e,n,a){At(Rf,n._currentValue),n._currentValue=a}function da(e){e._currentValue=Rf.current,Wt(Rf)}function ru(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function wf(e,n,a,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var y=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var B=0;B<n.length;B++)if(T.context===n[B]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),ru(f.return,a,e),r||(y=null);break t}f=T.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(s(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),ru(y,a,e),y=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=a,y=c.alternate,y!==null&&(y.lanes|=a),ru(c.return,a,e),y=c.child,y=y!==null?y.sibling:null):y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===e){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function Cs(e,n,a,r){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var T=c.type;ni(c.pendingProps.value,y.value)||(e!==null?e.push(T):e=[T])}}else if(c===C.current){if(y=c.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Hr):e=[Hr])}c=c.return}return e!==null&&wf(n,e,a,r),n.flags|=262144,e!==null}function ou(e){for(e=e.firstContext;e!==null;){if(!ni(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Rs(e){As=e,ha=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Cn(e){return mg(As,e)}function lu(e,n){return As===null&&Rs(e),mg(e,n)}function mg(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ha===null){if(e===null)throw Error(s(308));ha=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ha=ha.next=n;return a}var LS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},OS=o.unstable_scheduleCallback,PS=o.unstable_NormalPriority,ln={$$typeof:ft,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Df(){return{controller:new LS,data:new Map,refCount:0}}function Bo(e){e.refCount--,e.refCount===0&&OS(PS,function(){e.controller.abort()})}function gg(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var r=n[e];a.indexOf(r)===-1&&a.push(r)}}}var Io=null;function zS(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var Fo=null,Nf=0,ws=0,gr=null;function BS(e,n){if(Fo===null){var a=Fo=[];Nf=0,ws=Wh(),gr={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Nf++,n.then(vg,vg),n}function vg(){if(--Nf===0&&(Io=null,Fo!==null)){gr!==null&&(gr.status="fulfilled");var e=Fo;Fo=null,ws=0,gr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function IS(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var _g=Tt.S;Tt.S=function(e,n){if(cv=q(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&BS(e,n),Io!==null)for(var a=Or;a!==null;)gg(a,Io),a=a.next;if(a=e.types,a!==null){for(var r=Or;r!==null;)gg(r,a),r=r.next;if(ws!==0){r=Io,r===null&&(r=Io=[]);for(var c=0;c<a.length;c++){var f=a[c];r.indexOf(f)===-1&&r.push(f)}}}_g!==null&&_g(e,n)};var Ds=Kt(null);function Uf(){var e=Ds.current;return e!==null?e:We.pooledCache}function uu(e,n){n===null?At(Ds,Ds.current):At(Ds,n.pool)}function yg(){var e=Uf();return e===null?null:{parent:ln._currentValue,pool:e}}var vr=Error(s(460)),Lf=Error(s(474)),cu=Error(s(542)),fu={then:function(){}};function xg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Sg(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Fi,Fi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Eg(e),e===void 0&&!("reason"in n)?Error(s(600)):e;default:if(typeof n.status=="string")n.then(Fi,Fi);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Eg(e),e}throw Us=n,vr}}function Ns(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Us=a,vr):a}}var Us=null;function Mg(){if(Us===null)throw Error(s(459));var e=Us;return Us=null,e}function Eg(e){if(e===vr||e===cu)throw Error(s(483))}var _r=null,Ho=0;function hu(e){var n=Ho;return Ho+=1,_r===null&&(_r=[]),Sg(_r,e,n)}function Ga(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function du(e,n){throw n.$$typeof===I?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Tg(e){function n(W,X){if(e){var tt=W.deletions;tt===null?(W.deletions=[X],W.flags|=16):tt.push(X)}}function a(W,X){if(!e)return null;for(;X!==null;)n(W,X),X=X.sibling;return null}function r(W){for(var X=new Map;W!==null;)W.key===null?X.set(W.index,W):X.set(W.key,W),W=W.sibling;return X}function c(W,X){return W=ca(W,X),W.index=0,W.sibling=null,W}function f(W,X,tt){return W.index=tt,e?(tt=W.alternate,tt!==null?(tt=tt.index,tt<X?(W.flags|=2,X):tt):(W.flags|=134217730,X)):(W.flags|=1048576,X)}function y(W){return e&&W.alternate===null&&(W.flags|=134217730),W}function T(W,X,tt,ht){return X===null||X.tag!==6?(X=Ef(tt,W.mode,ht),X.return=W,X):(X=c(X,tt),X.return=W,X)}function B(W,X,tt,ht){var Vt=tt.type;return Vt===V?(W=it(W,X,tt.props.children,ht,tt.key),Ga(W,tt),W):X!==null&&(X.elementType===Vt||typeof Vt=="object"&&Vt!==null&&Vt.$$typeof===St&&Ns(Vt)===X.type)?(X=c(X,tt.props),Ga(X,tt),X.return=W,X):(X=nu(tt.type,tt.key,tt.props,null,W.mode,ht),Ga(X,tt),X.return=W,X)}function Z(W,X,tt,ht){return X===null||X.tag!==4||X.stateNode.containerInfo!==tt.containerInfo||X.stateNode.implementation!==tt.implementation?(X=Tf(tt,W.mode,ht),X.return=W,X):(X=c(X,tt.children||[]),X.return=W,X)}function it(W,X,tt,ht,Vt){return X===null||X.tag!==7?(X=Ts(tt,W.mode,ht,Vt),X.return=W,X):(X=c(X,tt),X.return=W,X)}function dt(W,X,tt){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Ef(""+X,W.mode,tt),X.return=W,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case D:return tt=nu(X.type,X.key,X.props,null,W.mode,tt),Ga(tt,X),tt.return=W,tt;case R:return X=Tf(X,W.mode,tt),X.return=W,X;case St:return X=Ns(X),dt(W,X,tt)}if(wt(X)||ut(X))return X=Ts(X,W.mode,tt,null),X.return=W,X;if(typeof X.then=="function")return dt(W,hu(X),tt);if(X.$$typeof===ft)return dt(W,lu(W,X),tt);du(W,X)}return null}function Y(W,X,tt,ht){var Vt=X!==null?X.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return Vt!==null?null:T(W,X,""+tt,ht);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case D:return tt.key===Vt?B(W,X,tt,ht):null;case R:return tt.key===Vt?Z(W,X,tt,ht):null;case St:return tt=Ns(tt),Y(W,X,tt,ht)}if(wt(tt)||ut(tt))return Vt!==null?null:it(W,X,tt,ht,null);if(typeof tt.then=="function")return Y(W,X,hu(tt),ht);if(tt.$$typeof===ft)return Y(W,X,lu(W,tt),ht);du(W,tt)}return null}function et(W,X,tt,ht,Vt){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return W=W.get(tt)||null,T(X,W,""+ht,Vt);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case D:return W=W.get(ht.key===null?tt:ht.key)||null,B(X,W,ht,Vt);case R:return W=W.get(ht.key===null?tt:ht.key)||null,Z(X,W,ht,Vt);case St:return ht=Ns(ht),et(W,X,tt,ht,Vt)}if(wt(ht)||ut(ht))return W=W.get(tt)||null,it(X,W,ht,Vt,null);if(typeof ht.then=="function")return et(W,X,tt,hu(ht),Vt);if(ht.$$typeof===ft)return et(W,X,tt,lu(X,ht),Vt);du(X,ht)}return null}function Dt(W,X,tt,ht){for(var Vt=null,Ce=null,Qt=X,ae=X=0,fn=null;Qt!==null&&ae<tt.length;ae++){Qt.index>ae?(fn=Qt,Qt=null):fn=Qt.sibling;var De=Y(W,Qt,tt[ae],ht);if(De===null){Qt===null&&(Qt=fn);break}e&&Qt&&De.alternate===null&&n(W,Qt),X=f(De,X,ae),Ce===null?Vt=De:Ce.sibling=De,Ce=De,Qt=fn}if(ae===tt.length)return a(W,Qt),_e&&fa(W,ae),Vt;if(Qt===null){for(;ae<tt.length;ae++)Qt=dt(W,tt[ae],ht),Qt!==null&&(X=f(Qt,X,ae),Ce===null?Vt=Qt:Ce.sibling=Qt,Ce=Qt);return _e&&fa(W,ae),Vt}for(Qt=r(Qt);ae<tt.length;ae++)fn=et(Qt,W,ae,tt[ae],ht),fn!==null&&(e&&(De=fn.alternate,De!==null&&Qt.delete(De.key===null?ae:De.key)),X=f(fn,X,ae),Ce===null?Vt=fn:Ce.sibling=fn,Ce=fn);return e&&Qt.forEach(function(os){return n(W,os)}),_e&&fa(W,ae),Vt}function kt(W,X,tt,ht){if(tt==null)throw Error(s(151));for(var Vt=null,Ce=null,Qt=X,ae=X=0,fn=null,De=tt.next();Qt!==null&&!De.done;ae++,De=tt.next()){Qt.index>ae?(fn=Qt,Qt=null):fn=Qt.sibling;var os=Y(W,Qt,De.value,ht);if(os===null){Qt===null&&(Qt=fn);break}e&&Qt&&os.alternate===null&&n(W,Qt),X=f(os,X,ae),Ce===null?Vt=os:Ce.sibling=os,Ce=os,Qt=fn}if(De.done)return a(W,Qt),_e&&fa(W,ae),Vt;if(Qt===null){for(;!De.done;ae++,De=tt.next())De=dt(W,De.value,ht),De!==null&&(X=f(De,X,ae),Ce===null?Vt=De:Ce.sibling=De,Ce=De);return _e&&fa(W,ae),Vt}for(Qt=r(Qt);!De.done;ae++,De=tt.next())De=et(Qt,W,ae,De.value,ht),De!==null&&(e&&(fn=De.alternate,fn!==null&&Qt.delete(fn.key===null?ae:fn.key)),X=f(De,X,ae),Ce===null?Vt=De:Ce.sibling=De,Ce=De);return e&&Qt.forEach(function(_E){return n(W,_E)}),_e&&fa(W,ae),Vt}function pe(W,X,tt,ht){if(typeof tt=="object"&&tt!==null&&tt.type===V&&tt.key===null&&tt.props.ref===void 0&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case D:t:{for(var Vt=tt.key;X!==null;){if(X.key===Vt){if(Vt=tt.type,Vt===V){if(X.tag===7){a(W,X.sibling),ht=c(X,tt.props.children),Ga(ht,tt),ht.return=W,W=ht;break t}}else if(X.elementType===Vt||typeof Vt=="object"&&Vt!==null&&Vt.$$typeof===St&&Ns(Vt)===X.type){a(W,X.sibling),ht=c(X,tt.props),Ga(ht,tt),ht.return=W,W=ht;break t}a(W,X);break}else n(W,X);X=X.sibling}tt.type===V?(ht=Ts(tt.props.children,W.mode,ht,tt.key),Ga(ht,tt),ht.return=W,W=ht):(ht=nu(tt.type,tt.key,tt.props,null,W.mode,ht),Ga(ht,tt),ht.return=W,W=ht)}return y(W);case R:t:{for(Vt=tt.key;X!==null;){if(X.key===Vt)if(X.tag===4&&X.stateNode.containerInfo===tt.containerInfo&&X.stateNode.implementation===tt.implementation){a(W,X.sibling),ht=c(X,tt.children||[]),ht.return=W,W=ht;break t}else{a(W,X);break}else n(W,X);X=X.sibling}ht=Tf(tt,W.mode,ht),ht.return=W,W=ht}return y(W);case St:return tt=Ns(tt),pe(W,X,tt,ht)}if(wt(tt))return Dt(W,X,tt,ht);if(ut(tt)){if(Vt=ut(tt),typeof Vt!="function")throw Error(s(150));return tt=Vt.call(tt),kt(W,X,tt,ht)}if(typeof tt.then=="function")return pe(W,X,hu(tt),ht);if(tt.$$typeof===ft)return pe(W,X,lu(W,tt),ht);du(W,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,X!==null&&X.tag===6?(a(W,X.sibling),ht=c(X,tt),ht.return=W,W=ht):(a(W,X),ht=Ef(tt,W.mode,ht),ht.return=W,W=ht),y(W)):a(W,X)}return function(W,X,tt,ht){try{Ho=0;var Vt=pe(W,X,tt,ht);return _r=null,Vt}catch(Qt){if(Qt===vr||Qt===cu)throw Qt;var Ce=Qn(29,Qt,null,W.mode);return Ce.lanes=ht,Ce.return=W,Ce}finally{}}}var Ls=Tg(!0),bg=Tg(!1),Xa=!1;function Of(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ka(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function qa(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Oe&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=eu(e),lg(e,null,a),n}return tu(e,r,n,a),eu(e)}function Vo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,N(e,a)}}function zf(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Bf=!1;function Go(){if(Bf){var e=gr;if(e!==null)throw e}}function Xo(e,n,a,r){Bf=!1;var c=e.updateQueue;Xa=!1;var f=c.firstBaseUpdate,y=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var B=T,Z=B.next;B.next=null,y===null?f=Z:y.next=Z,y=B;var it=e.alternate;it!==null&&(it=it.updateQueue,T=it.lastBaseUpdate,T!==y&&(T===null?it.firstBaseUpdate=Z:T.next=Z,it.lastBaseUpdate=B))}if(f!==null){var dt=c.baseState;y=0,it=Z=B=null,T=f;do{var Y=T.lane&-536870913,et=Y!==T.lane;if(et?(Ae&Y)===Y:(r&Y)===Y){Y!==0&&Y===ws&&(Bf=!0),it!==null&&(it=it.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Dt=e,kt=T;Y=n;var pe=a;switch(kt.tag){case 1:if(Dt=kt.payload,typeof Dt=="function"){dt=Dt.call(pe,dt,Y);break t}dt=Dt;break t;case 3:Dt.flags=Dt.flags&-65537|128;case 0:if(Dt=kt.payload,Y=typeof Dt=="function"?Dt.call(pe,dt,Y):Dt,Y==null)break t;dt=P({},dt,Y);break t;case 2:Xa=!0}}Y=T.callback,Y!==null&&(e.flags|=64,et&&(e.flags|=8192),et=c.callbacks,et===null?c.callbacks=[Y]:et.push(Y))}else et={lane:Y,tag:T.tag,payload:T.payload,callback:T.callback,next:null},it===null?(Z=it=et,B=dt):it=it.next=et,y|=Y;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;et=T,T=et.next,et.next=null,c.lastBaseUpdate=et,c.shared.pending=null}}while(!0);it===null&&(B=dt),c.baseState=B,c.firstBaseUpdate=Z,c.lastBaseUpdate=it,f===null&&(c.shared.lanes=0),Ja|=y,e.lanes=y,e.memoizedState=dt}}function Ag(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Cg(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ag(a[e],n)}var Ya=Kt(null),pu=Kt(0);function Rg(e,n){e=_a,At(pu,e),At(Ya,n),_a=e|n.baseLanes}function If(){At(pu,_a),At(Ya,Ya.current)}function Ff(){_a=pu.current,Wt(Ya),Wt(pu)}var Rn=Kt(null),zn=null;function Wa(e){var n=e.alternate;At(wn,wn.current&1),At(Rn,e),zn===null&&(n===null||Ya.current!==null||n.memoizedState!==null)&&(zn=e)}function Hf(e){At(wn,wn.current),At(Rn,e),zn===null&&(zn=e)}function wg(e){e.tag===22?(At(wn,wn.current),At(Rn,e),zn===null&&(zn=e)):ja()}function ja(){At(wn,wn.current),At(Rn,Rn.current)}function ii(e){Wt(Rn),zn===e&&(zn=null),Wt(wn)}var wn=Kt(0);function ko(e,n){At(Rn,Rn.current),At(wn,n)}function Vf(e){Wt(wn),Wt(Rn),zn===e&&(zn=null)}function mu(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ud(a)||cd(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var pa=0,de=null,Ge=null,un=null,gu=!1,yr=!1,Os=!1,vu=0,qo=0,xr=null,FS=0;function an(){throw Error(s(321))}function Gf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ni(e[a],n[a]))return!1;return!0}function Xf(e,n,a,r,c,f){return pa=f,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Tt.H=e===null||e.memoizedState===null?h0:d0,Os=!1,f=a(r,c),Os=!1,yr&&(f=Ng(n,a,r,c)),Dg(e),f}function Dg(e){Tt.H=Tu;var n=Ge!==null&&Ge.next!==null;if(pa=0,un=Ge=de=null,gu=!1,qo=0,xr=null,n)throw Error(s(300));e===null||cn||(e=e.dependencies,e!==null&&ou(e)&&(cn=!0))}function Ng(e,n,a,r){de=e;var c=0;do{if(yr&&(xr=null),qo=0,yr=!1,25<=c)throw Error(s(301));if(c+=1,un=Ge=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}Tt.H=WS,f=n(a,r)}while(yr);return f}function HS(){var e=Tt.H,n=e.useState()[0];return n=typeof n.then=="function"?Yo(n):n,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(de.flags|=1024),n}function kf(){var e=vu!==0;return vu=0,e}function qf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Yf(e){if(gu){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}gu=!1}pa=0,un=Ge=de=null,yr=!1,qo=vu=0,xr=null}function Gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?de.memoizedState=un=e:un=un.next=e,un}function rn(){if(Ge===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var n=un===null?de.memoizedState:un.next;if(n!==null)un=n,Ge=e;else{if(e===null)throw de.alternate===null?Error(s(467)):Error(s(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},un===null?de.memoizedState=un=e:un=un.next=e}return un}function _u(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Yo(e){var n=qo;return qo+=1,xr===null&&(xr=[]),e=Sg(xr,e,n),n=de,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,Tt.H=n===null||n.memoizedState===null?h0:d0),e}function yu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Yo(e);if(e.$$typeof===j)return;if(e.$$typeof===ft)return Cn(e)}throw Error(s(438,String(e)))}function Wf(e){var n=null,a=de.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=de.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=_u(),de.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=xe;return n.index++,a}function ma(e,n){return typeof n=="function"?n(e):n}function xu(e){var n=rn();return jf(n,Ge,e)}function jf(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=e.baseQueue,f=r.pending;if(f!==null){if(c!==null){var y=c.next;c.next=f.next,f.next=y}n.baseQueue=c=f,r.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var T=y=null,B=null,Z=n,it=!1;do{var dt=Z.lane&-536870913;if(dt!==Z.lane?(Ae&dt)===dt:(pa&dt)===dt){var Y=Z.revertLane;if(Y===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),dt===ws&&(it=!0);else if((pa&Y)===Y){Z=Z.next,Y===ws&&(it=!0);continue}else dt={lane:0,revertLane:Z.revertLane,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},B===null?(T=B=dt,y=f):B=B.next=dt,de.lanes|=Y,Ja|=Y;dt=Z.action,Os&&a(f,dt),f=Z.hasEagerState?Z.eagerState:a(f,dt)}else Y={lane:dt,revertLane:Z.revertLane,gesture:Z.gesture,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},B===null?(T=B=Y,y=f):B=B.next=Y,de.lanes|=dt,Ja|=dt;Z=Z.next}while(Z!==null&&Z!==n);if(B===null?y=f:B.next=T,!ni(f,e.memoizedState)&&(cn=!0,it&&(a=gr,a!==null)))throw a;e.memoizedState=f,e.baseState=y,e.baseQueue=B,r.lastRenderedState=f}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Zf(e){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var y=c=c.next;do f=e(f,y.action),y=y.next;while(y!==c);ni(f,n.memoizedState)||(cn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Ug(e,n,a){var r=de,c=rn(),f=_e;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!ni((Ge||c).memoizedState,a);if(y&&(c.memoizedState=a,cn=!0),c=c.queue,Jf(Pg.bind(null,r,c,e),[e]),e=c.getSnapshot!==n||y||un!==null&&(un.memoizedState.tag&1)!==0,Sr(e?9:8,{destroy:void 0},Og.bind(null,r,c,a,n),null),e){if(r.flags|=2048,We===null)throw Error(s(349));f||(pa&127)!==0||Lg(r,n,a)}return a}function Lg(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=de.updateQueue,n===null?(n=_u(),de.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Og(e,n,a,r){n.value=a,n.getSnapshot=r,zg(n)&&Bg(e)}function Pg(e,n,a){return a(function(){zg(n)&&Bg(e)})}function zg(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ni(e,a)}catch{return!0}}function Bg(e){var n=Es(e,2);n!==null&&ti(n,e,2)}function Qf(e){var n=Gn();if(typeof e=="function"){var a=e;if(e=a(),Os){_n(!0);try{a()}finally{_n(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:e},n}function Ig(e,n,a,r){return e.baseState=a,jf(e,Ge,typeof r=="function"?r:ma)}function VS(e,n,a,r,c){if(Eu(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};Tt.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Fg(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Fg(e,n){var a=n.action,r=n.payload,c=e.state;if(n.isTransition){var f=Tt.T,y={};y.types=f!==null?f.types:null,Tt.T=y;try{var T=a(c,r),B=Tt.S;B!==null&&B(y,T),Hg(e,n,T)}catch(Z){Kf(e,n,Z)}finally{f!==null&&y.types!==null&&(f.types=y.types),Tt.T=f}}else try{f=a(c,r),Hg(e,n,f)}catch(Z){Kf(e,n,Z)}}function Hg(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Vg(e,n,r)},function(r){return Kf(e,n,r)}):Vg(e,n,a)}function Vg(e,n,a){n.status="fulfilled",n.value=a,Gg(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Fg(e,a)))}function Kf(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Gg(n),n=n.next;while(n!==r)}e.action=null}function Gg(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Xg(e,n){return n}function kg(e,n){if(_e){var a=We.formState;if(a!==null){t:{var r=de;if(_e){if(Ze){e:{for(var c=Ze,f=xi;c.nodeType!==8;){if(!f){c=null;break e}if(c=Mi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ze=Mi(c.nextSibling),r=c.data==="F!";break t}}Ha(r)}r=!1}r&&(n=a[0])}}return a=Gn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xg,lastRenderedState:n},a.queue=r,a=u0.bind(null,de,r),r.dispatch=a,r=Qf(!1),f=ih.bind(null,de,!1,r.queue),r=Gn(),c={state:n,dispatch:null,action:e,pending:null},r.queue=c,a=VS.bind(null,de,c,f,a),c.dispatch=a,r.memoizedState=e,[n,a,!1]}function qg(e){var n=rn();return Yg(n,Ge,e)}function Yg(e,n,a){if(n=jf(e,n,Xg)[0],e=xu(ma)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Yo(n)}catch(y){throw y===vr?cu:y}else r=n;n=rn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(de.flags|=2048,Sr(9,{destroy:void 0},GS.bind(null,c,a),null)),[r,f,e]}function GS(e,n){e.action=n}function Wg(e){var n=rn(),a=Ge;if(a!==null)return Yg(n,a,e);rn(),n=n.memoizedState,a=rn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function Sr(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=de.updateQueue,n===null&&(n=_u(),de.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function jg(){return rn().memoizedState}function Su(e,n,a,r){var c=Gn();de.flags|=e,c.memoizedState=Sr(1|n,{destroy:void 0},a,r===void 0?null:r)}function Mu(e,n,a,r){var c=rn();r=r===void 0?null:r;var f=c.memoizedState.inst;Ge!==null&&r!==null&&Gf(r,Ge.memoizedState.deps)?c.memoizedState=Sr(n,f,a,r):(de.flags|=e,c.memoizedState=Sr(1|n,f,a,r))}function Zg(e,n){Su(8390656,8,e,n)}function Jf(e,n){Mu(2048,8,e,n)}function XS(e){de.flags|=4;var n=de.updateQueue;if(n===null)n=_u(),de.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Qg(e){var n=rn().memoizedState;return XS({ref:n,nextImpl:e}),function(){if((Oe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Kg(e,n){return Mu(4,2,e,n)}function Jg(e,n){return Mu(4,4,e,n)}function $g(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function t0(e,n,a){a=a!=null?a.concat([e]):null,Mu(4,4,$g.bind(null,n,e),a)}function $f(){}function e0(e,n){var a=rn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Gf(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function n0(e,n){var a=rn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Gf(n,r[1]))return r[0];if(r=e(),Os){_n(!0);try{e()}finally{_n(!1)}}return a.memoizedState=[r,n],r}function th(e,n,a){return a===void 0||(pa&1073741824)!==0&&(Ae&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=hv(),de.lanes|=e,Ja|=e,a)}function i0(e,n,a,r){return ni(a,n)?a:Ya.current!==null?(e=th(e,a,r),ni(e,n)||(cn=!0),e):(pa&106)===0||(pa&1073741824)!==0&&(Ae&261930)===0?(cn=!0,e.memoizedState=a):(e=hv(),de.lanes|=e,Ja|=e,n)}function a0(e,n,a,r,c){var f=Pt.p;Pt.p=f!==0&&8>f?f:8;var y=Tt.T,T={};T.types=y!==null?y.types:null,Tt.T=T,ih(e,!1,n,a);try{var B=c(),Z=Tt.S;if(Z!==null&&Z(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var it=IS(B,r);Wo(e,n,it,oi(e))}else Wo(e,n,r,oi(e))}catch(dt){Wo(e,n,{then:function(){},status:"rejected",reason:dt},oi())}finally{Pt.p=f,y!==null&&T.types!==null&&(y.types=T.types),Tt.T=y}}function kS(){}function eh(e,n,a,r){if(e.tag!==5)throw Error(s(476));var c=s0(e).queue;a0(e,c,n,le,a===null?kS:function(){return r0(e),a(r)})}function s0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:le},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function r0(e){var n=s0(e);n.next===null&&(n=e.alternate.memoizedState),Wo(e,n.next.queue,{},oi())}function nh(){return Cn(Hr)}function o0(){return rn().memoizedState}function l0(){return rn().memoizedState}function qS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=oi();e=ka(a);var r=qa(n,e,a);r!==null&&(ti(r,n,a),Vo(r,n,a)),n={cache:Df()},e.payload=n;return}n=n.return}}function YS(e,n,a){var r=oi();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Eu(e)?c0(n,a):(a=Sf(e,n,a,r),a!==null&&(ti(a,e,r),f0(a,n,r)))}function u0(e,n,a){var r=oi();Wo(e,n,a,r)}function Wo(e,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Eu(e))c0(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,T=f(y,a);if(c.hasEagerState=!0,c.eagerState=T,ni(T,y))return tu(e,n,c,0),We===null&&$l(),!1}catch{}finally{}if(a=Sf(e,n,c,r),a!==null)return ti(a,e,r),f0(a,n,r),!0}return!1}function ih(e,n,a,r){if(r={lane:2,revertLane:Wh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Eu(e)){if(n)throw Error(s(479))}else n=Sf(e,a,r,2),n!==null&&ti(n,e,2)}function Eu(e){var n=e.alternate;return e===de||n!==null&&n===de}function c0(e,n){yr=gu=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function f0(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,N(e,a)}}var Tu={readContext:Cn,use:yu,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an,useEffectEvent:an},h0={readContext:Cn,use:yu,useCallback:function(e,n){return Gn().memoizedState=[e,n===void 0?null:n],e},useContext:Cn,useEffect:Zg,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Su(4194308,4,$g.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Su(4194308,4,e,n)},useInsertionEffect:function(e,n){Su(4,2,e,n)},useMemo:function(e,n){var a=Gn();n=n===void 0?null:n;var r=e();if(Os){_n(!0);try{e()}finally{_n(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Gn();if(a!==void 0){var c=a(n);if(Os){_n(!0);try{a(n)}finally{_n(!1)}}}else c=n;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=YS.bind(null,de,e),[r.memoizedState,e]},useRef:function(e){var n=Gn();return e={current:e},n.memoizedState=e},useState:function(e){e=Qf(e);var n=e.queue,a=u0.bind(null,de,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:$f,useDeferredValue:function(e,n){var a=Gn();return th(a,e,n)},useTransition:function(){var e=Qf(!1);return e=a0.bind(null,de,e.queue,!0,!1),Gn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=de,c=Gn();if(_e){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),We===null)throw Error(s(349));(Ae&127)!==0||Lg(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Zg(Pg.bind(null,r,f,e),[e]),r.flags|=2048,Sr(9,{destroy:void 0},Og.bind(null,r,f,a,n),null),a},useId:function(){var e=Gn(),n=We.identifierPrefix;if(_e){var a=Vi,r=Hi;a=(r&~(1<<32-On(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=vu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=FS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:nh,useFormState:kg,useActionState:kg,useOptimistic:function(e){var n=Gn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ih.bind(null,de,!0,a),a.dispatch=n,[e,n]},useMemoCache:Wf,useCacheRefresh:function(){return Gn().memoizedState=qS.bind(null,de)},useEffectEvent:function(e){var n=Gn(),a={impl:e};return n.memoizedState=a,function(){if((Oe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},d0={readContext:Cn,use:yu,useCallback:e0,useContext:Cn,useEffect:Jf,useImperativeHandle:t0,useInsertionEffect:Kg,useLayoutEffect:Jg,useMemo:n0,useReducer:xu,useRef:jg,useState:function(){return xu(ma)},useDebugValue:$f,useDeferredValue:function(e,n){var a=rn();return i0(a,Ge.memoizedState,e,n)},useTransition:function(){var e=xu(ma)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:Yo(e),n]},useSyncExternalStore:Ug,useId:o0,useHostTransitionStatus:nh,useFormState:qg,useActionState:qg,useOptimistic:function(e,n){var a=rn();return Ig(a,Ge,e,n)},useMemoCache:Wf,useCacheRefresh:l0,useEffectEvent:Qg},WS={readContext:Cn,use:yu,useCallback:e0,useContext:Cn,useEffect:Jf,useImperativeHandle:t0,useInsertionEffect:Kg,useLayoutEffect:Jg,useMemo:n0,useReducer:Zf,useRef:jg,useState:function(){return Zf(ma)},useDebugValue:$f,useDeferredValue:function(e,n){var a=rn();return Ge===null?th(a,e,n):i0(a,Ge.memoizedState,e,n)},useTransition:function(){var e=Zf(ma)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:Yo(e),n]},useSyncExternalStore:Ug,useId:o0,useHostTransitionStatus:nh,useFormState:Wg,useActionState:Wg,useOptimistic:function(e,n){var a=rn();return Ge!==null?Ig(a,Ge,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Wf,useCacheRefresh:l0,useEffectEvent:Qg};function ah(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:P({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var sh={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=oi(),c=ka(r);c.payload=n,a!=null&&(c.callback=a),n=qa(e,c,r),n!==null&&(ti(n,e,r),Vo(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=oi(),c=ka(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=qa(e,c,r),n!==null&&(ti(n,e,r),Vo(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=oi(),r=ka(a);r.tag=2,n!=null&&(r.callback=n),n=qa(e,r,a),n!==null&&(ti(n,e,a),Vo(n,e,a))}};function p0(e,n,a,r,c,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,y):n.prototype&&n.prototype.isPureReactComponent?!Lo(a,r)||!Lo(c,f):!0}function m0(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&sh.enqueueReplaceState(n,n.state,null)}function Ps(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=P({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function g0(e){Jl(e)}function v0(e){console.error(e)}function _0(e){Jl(e)}function bu(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function y0(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function rh(e,n,a){return a=ka(a),a.tag=3,a.payload={element:null},a.callback=function(){bu(e,n)},a}function x0(e){return e=ka(e),e.tag=3,e}function S0(e,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;e.payload=function(){return c(f)},e.callback=function(){y0(n,a,r)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){y0(n,a,r),typeof c!="function"&&($a===null?$a=new Set([this]):$a.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})})}function jS(e,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Cs(n,a,c,!0),a=Rn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return zn===null?Yu():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===fu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),kh(e,r,c)),!1;case 22:return a.flags|=65536,r===fu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),kh(e,r,c)),!1}throw Error(s(435,a.tag))}return kh(e,r,c),Yu(),!1}if(_e)return n=Rn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==Af&&(e=Error(s(422),{cause:r}),zo(vi(e,a)))):(r!==Af&&(n=Error(s(423),{cause:r}),zo(vi(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=vi(r,a),c=rh(e.stateNode,r,c),zf(e,c),sn!==4&&(sn=2)),!1;var f=Error(s(520),{cause:r});if(f=vi(f,a),el===null?el=[f]:el.push(f),sn!==4&&(sn=2),n===null)return!0;r=vi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=rh(a.stateNode,r,e),zf(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&($a===null||!$a.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=x0(c),S0(c,e,a,r),zf(a,c),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var oh=Error(s(461)),cn=!1;function pn(e,n,a,r){n.child=e===null?bg(n,null,a,r):Ls(n,e.child,a,r)}function M0(e,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var y={};for(var T in r)T!=="ref"&&(y[T]=r[T])}else y=r;return Rs(n),r=Xf(e,n,a,y,f,c),T=kf(),e!==null&&!cn?(qf(e,n,c),ga(e,n,c)):(_e&&T&&au(n),n.flags|=1,pn(e,n,r,c),n.child)}function E0(e,n,a,r,c){if(e===null){var f=a.type;return typeof f=="function"&&!Mf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,T0(e,n,f,r,c)):(e=nu(a.type,null,r,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!mh(e,c)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:Lo,a(y,r)&&e.ref===n.ref)return ga(e,n,c)}return n.flags|=1,e=ca(f,r),e.ref=n.ref,e.return=n,n.child=e}function T0(e,n,a,r,c){if(e!==null){var f=e.memoizedProps;if(Lo(f,r)&&e.ref===n.ref)if(cn=!1,n.pendingProps=r=f,mh(e,c))(e.flags&131072)!==0&&(cn=!0);else return n.lanes=e.lanes,ga(e,n,c)}return lh(e,n,a,r,c)}function b0(e,n,a,r){var c=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return A0(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&uu(n,f!==null?f.cachePool:null),f!==null?Rg(n,f):If(),wg(n);else return r=n.lanes=536870912,A0(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(uu(n,f.cachePool),Rg(n,f),ja(),n.memoizedState=null):(e!==null&&uu(n,null),If(),ja());return pn(e,n,c,a),n.child}function jo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function A0(e,n,a,r,c){var f=Uf();return f=f===null?null:{parent:ln._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&uu(n,null),If(),wg(n),e!==null&&Cs(e,n,r,!0),n.childLanes=c,null}function Au(e,n){return n=Cu({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function C0(e,n,a){return Ls(n,e.child,null,a),e=Au(n,n.pendingProps),e.flags|=2,ii(n),n.memoizedState=null,e}function ZS(e,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(_e){if(r.mode==="hidden")return e=Au(n,r),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},jo(null,e);if(Hf(n),(e=Ze)?(e=$v(e,xi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ia!==null?{id:Hi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},a=cg(e),a.return=n,n.child=a,xn=n,Ze=null)):e=null,e===null)throw Ha(n);return n.lanes=536870912,null}return Au(n,r)}var f=e.memoizedState;if(f!==null){var y=f.dehydrated;if(Hf(n),c)if(n.flags&256)n.flags&=-257,n=C0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(cn||Cs(e,n,a,!1),c=(a&e.childLanes)!==0,cn||c){if(Ya.current===null){if(r=We,r!==null&&(y=Q(r,a),y!==0&&y!==f.retryLane))throw f.retryLane=y,Es(e,y),ti(r,e,y),oh;Yu()}n=C0(e,n,a)}else e=f.treeContext,Ze=Mi(y.nextSibling),xn=n,_e=!0,Fa=null,xi=!1,e!==null&&dg(n,e),n=Au(n,r),n.flags|=134221824;return n}return e=ca(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Mr(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function lh(e,n,a,r,c){return Rs(n),a=Xf(e,n,a,r,void 0,c),r=kf(),e!==null&&!cn?(qf(e,n,c),ga(e,n,c)):(_e&&r&&au(n),n.flags|=1,pn(e,n,a,c),n.child)}function R0(e,n,a,r,c,f){return Rs(n),n.updateQueue=null,a=Ng(n,r,a,c),Dg(e),r=kf(),e!==null&&!cn?(qf(e,n,f),ga(e,n,f)):(_e&&r&&au(n),n.flags|=1,pn(e,n,a,f),n.child)}function w0(e,n,a,r,c){if(Rs(n),n.stateNode===null){var f=hr,y=a.contextType;typeof y=="object"&&y!==null&&(f=Cn(y)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=sh,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Of(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?Cn(y):hr,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(ah(n,a,y,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&sh.enqueueReplaceState(f,f.state,null),Xo(n,r,f,c),Go(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,B=Ps(a,T);f.props=B;var Z=f.context,it=a.contextType;y=hr,typeof it=="object"&&it!==null&&(y=Cn(it));var dt=a.getDerivedStateFromProps;it=typeof dt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,it||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||Z!==y)&&m0(n,f,r,y),Xa=!1;var Y=n.memoizedState;f.state=Y,Xo(n,r,f,c),Go(),Z=n.memoizedState,T||Y!==Z||Xa?(typeof dt=="function"&&(ah(n,a,dt,r),Z=n.memoizedState),(B=Xa||p0(n,a,B,r,Y,Z,y))?(it||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=Z),f.props=r,f.state=Z,f.context=y,r=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Pf(e,n),y=n.memoizedProps,it=Ps(a,y),f.props=it,dt=n.pendingProps,Y=f.context,Z=a.contextType,B=hr,typeof Z=="object"&&Z!==null&&(B=Cn(Z)),T=a.getDerivedStateFromProps,(Z=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==dt||Y!==B)&&m0(n,f,r,B),Xa=!1,Y=n.memoizedState,f.state=Y,Xo(n,r,f,c),Go();var et=n.memoizedState;y!==dt||Y!==et||Xa||e!==null&&e.dependencies!==null&&ou(e.dependencies)?(typeof T=="function"&&(ah(n,a,T,r),et=n.memoizedState),(it=Xa||p0(n,a,it,r,Y,et,B)||e!==null&&e.dependencies!==null&&ou(e.dependencies))?(Z||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,et,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,et,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&Y===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&Y===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=et),f.props=r,f.state=et,f.context=B,r=it):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&Y===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&Y===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Mr(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=Ls(n,e.child,null,c),n.child=Ls(n,null,a,c)):pn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=ga(e,n,c),e}function D0(e,n,a,r){return bs(),n.flags|=256,pn(e,n,a,r),n.child}var uh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ch(e){return{baseLanes:e,cachePool:yg()}}function fh(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ri),e}function N0(e,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(wn.current&2)!==0),y&&(c=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(_e){if(c?Wa(n):ja(),(e=Ze)?(e=$v(e,xi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ia!==null?{id:Hi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},a=cg(e),a.return=n,n.child=a,xn=n,Ze=null)):e=null,e===null)throw Ha(n);return cd(e)?n.lanes=32:n.lanes=536870912,null}return f=r.children,r=r.fallback,c?(ja(),c=n.mode,f=Cu({mode:"hidden",children:f},c),r=Ts(r,c,a,null),f.return=n,r.return=n,f.sibling=r,n.child=f,r=n.child,r.memoizedState=ch(a),r.childLanes=fh(e,y,a),n.memoizedState=uh,jo(null,r)):(Wa(n),hh(n,f))}var T=e.memoizedState;if(T!==null){var B=T.dehydrated;if(B!==null)return QS(e,n,f,y,r,B,T,a)}return c?(ja(),c=r.fallback,f=n.mode,T=e.child,B=T.sibling,r=ca(T,{mode:"hidden",children:r.children}),r.subtreeFlags=T.subtreeFlags&1206910976,B!==null?c=ca(B,c):(c=Ts(c,f,a,null),c.flags|=2),c.return=n,r.return=n,r.sibling=c,n.child=r,jo(null,r),r=n.child,c=e.child.memoizedState,c===null?c=ch(a):(f=c.cachePool,f!==null?(T=ln._currentValue,f=f.parent!==T?{parent:T,pool:T}:f):f=yg(),c={baseLanes:c.baseLanes|a,cachePool:f}),r.memoizedState=c,r.childLanes=fh(e,y,a),n.memoizedState=uh,jo(e.child,r)):(Wa(n),a=e.child,e=a.sibling,a=ca(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function hh(e,n){return n=Cu({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Cu(e,n){return e=Qn(22,e,null,n),e.lanes=0,e}function Ru(e,n,a){return Ls(n,e.child,null,a),e=hh(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function QS(e,n,a,r,c,f,y,T){if(a)return n.flags&256?(Wa(n),n.flags&=-257,Ru(e,n,T)):n.memoizedState!==null?(ja(),n.child=e.child,n.flags|=128,null):(ja(),f=c.fallback,y=n.mode,c=Cu({mode:"visible",children:c.children},y),f=Ts(f,y,T,null),f.flags|=2,c.return=n,f.return=n,c.sibling=f,n.child=c,Ls(n,e.child,null,T),c=n.child,c.memoizedState=ch(T),c.childLanes=fh(e,r,T),n.memoizedState=uh,jo(null,c));if(Wa(n),cd(f)){if(r=f.nextSibling&&f.nextSibling.dataset,r)var B=r.dgst;return r=B,r!==""&&(c=Error(s(419)),c.stack="",c.digest=r,zo({value:c,source:null,stack:null})),Ru(e,n,T)}if(cn||Cs(e,n,T,!1),r=(T&e.childLanes)!==0,cn||r){if(Ya.current!==null)return Ru(e,n,T);if(r=We,r!==null&&(c=Q(r,T),c!==0&&c!==y.retryLane))throw y.retryLane=c,Es(e,c),ti(r,e,c),oh;return ud(f)||Yu(),Ru(e,n,T)}return ud(f)?(n.flags|=192,n.child=e.child,null):(e=y.treeContext,Ze=Mi(f.nextSibling),xn=n,_e=!0,Fa=null,xi=!1,e!==null&&dg(n,e),n=hh(n,c.children),n.flags|=134221824,n)}function U0(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ru(e.return,n,a)}function L0(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&mu(a)===null&&(n=e),e=e.sibling}return n}function wu(e,n,a,r,c,f){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=r,y.tail=a,y.tailMode=c,y.treeForkCount=f)}function dh(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function ph(e,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var y=wn.current;if(n.flags&128)return ko(n,y),null;var T=(y&2)!==0;if(T?(y=y&1|2,n.flags|=128):y&=1,ko(n,y),c==="backwards"&&e!==null?(dh(e),pn(e,n,r,a),dh(e)):pn(e,n,r,a),r=_e?Po:0,!T&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&U0(e,a,n);else if(e.tag===19)U0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"backwards":a=L0(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null,dh(n)),wu(n,!0,c,null,f,r);break;case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&mu(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}wu(n,!0,a,null,f,r);break;case"together":wu(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=L0(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),wu(n,!1,c,a,f,r)}return n.child}function O0(e,n,a){var r=n.pendingProps;return Va(n,n.type,r.value),pn(e,n,r.children,a),n.child}function ga(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ja|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Cs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ca(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ca(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function mh(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ou(e)))}function KS(e,n,a){switch(n.tag){case 3:J(n,n.stateNode.containerInfo),Va(n,ln,e.memoizedState.cache),bs();break;case 27:case 5:xt(n);break;case 4:J(n,n.stateNode.containerInfo);break;case 10:Va(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Hf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return Wa(n),n.flags|=128,null;r=Cs(e,n,a,!1);var c=n.child.childLanes;return r||(a&c)!==0?N0(e,n,a):(Wa(n),e=ga(e,n,a),e!==null?e.sibling:null)}Wa(n);break;case 19:if(n.flags&128)return ph(e,n,a);if(c=(e.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Cs(e,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return ph(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ko(n,wn.current),r)break;return null;case 22:return n.lanes=0,b0(e,n,a,n.pendingProps);case 24:Va(n,ln,e.memoizedState.cache)}return ga(e,n,a)}function P0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)cn=!0;else{if(!mh(e,a)&&(n.flags&128)===0)return cn=!1,KS(e,n,a);cn=(e.flags&131072)!==0}else cn=!1,_e&&(n.flags&1048576)!==0&&hg(n,Po,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(e=Ns(n.elementType),n.type=e,typeof e=="function")Mf(e)?(r=Ps(e,r),n.tag=1,n=w0(null,n,e,r,a)):(n.tag=0,n=lh(null,n,e,r,a));else{if(e!=null){var c=e.$$typeof;if(c===k){n.tag=11,n=M0(null,n,e,r,a);break t}else if(c===yt){n.tag=14,n=E0(null,n,e,r,a);break t}else if(c===ft){n.tag=10,n.type=e,n=O0(null,n,a);break t}}throw n=Gt(e)||e,Error(s(306,n,""))}}return n;case 0:return lh(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=Ps(r,n.pendingProps),w0(e,n,r,c,a);case 3:t:{if(J(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,Pf(e,n),Xo(n,r,null,a);var y=n.memoizedState;if(r=y.cache,Va(n,ln,r),r!==f.cache&&wf(n,[ln],a,!0),Go(),r=y.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=D0(e,n,r,a);break t}else if(r!==c){c=vi(Error(s(424)),n),zo(c),n=D0(e,n,r,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=Mi(e.firstChild),xn=n,_e=!0,Fa=null,xi=!0,a=bg(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(bs(),r===c){n=ga(e,n,a);break t}pn(e,n,r,a)}n=n.child}return n;case 26:return Mr(e,n),e===null?(a=r_(n.type,null,n.pendingProps,null))?n.memoizedState=a:_e||(n.stateNode=Fv(n.type,n.pendingProps,O.current,n)):n.memoizedState=r_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return xt(n),e===null&&_e&&(r=n.stateNode=n_(n.type,n.pendingProps,O.current),xn=n,xi=!0,c=Ze,ns(n.type)?(fd=c,Ze=Mi(r.firstChild)):Ze=c),pn(e,n,n.pendingProps.children,a),Mr(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&_e&&((c=r=Ze)&&(r=qM(r,n.type,n.pendingProps,xi),r!==null?(n.stateNode=r,xn=n,Ze=Mi(r.firstChild),xi=!1,c=!0):c=!1),c||Ha(n)),xt(n),c=n.type,f=n.pendingProps,y=e!==null?e.memoizedProps:null,r=f.children,nd(c,f)?r=null:y!==null&&nd(c,y)&&(n.flags|=32),n.memoizedState!==null&&(c=Xf(e,n,HS,null,null,a),Hr._currentValue=c),Mr(e,n),pn(e,n,r,a),n.child;case 6:return e===null&&_e&&((e=a=Ze)&&(a=YM(a,n.pendingProps,xi),a!==null?(n.stateNode=a,xn=n,Ze=null,e=!0):e=!1),e||Ha(n)),null;case 13:return N0(e,n,a);case 4:return J(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ls(n,null,r,a):pn(e,n,r,a),n.child;case 11:return M0(e,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,Mr(e,n),pn(e,n,r,a),n.child;case 8:return pn(e,n,n.pendingProps.children,a),n.child;case 12:return pn(e,n,n.pendingProps.children,a),n.child;case 10:return O0(e,n,a);case 9:return c=n.type._context,r=n.pendingProps.children,Rs(n),c=Cn(c),r=r(c),n.flags|=1,pn(e,n,r,a),n.child;case 14:return E0(e,n,n.type,n.pendingProps,a);case 15:return T0(e,n,n.type,n.pendingProps,a);case 19:return ph(e,n,a);case 31:return ZS(e,n,a);case 22:return b0(e,n,a,n.pendingProps);case 24:return Rs(n),r=Cn(ln),e===null?(c=Uf(),c===null&&(c=We,f=Df(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},Of(n),Va(n,ln,c)):((e.lanes&a)!==0&&(Pf(e,n),Xo(n,null,null,a),Go()),c=e.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Va(n,ln,r)):(r=f.cache,Va(n,ln,r),r!==c.cache&&wf(n,[ln],a,!0))),pn(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=e===null?18882560:18874368:_e&&au(n),e!==null&&e.memoizedProps.name!==r.name?n.flags|=4194816:Mr(e,n),pn(e,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function va(e){e.flags|=4}function gh(e,n,a,r,c){var f;if((f=(e.mode&32)!==0)&&(f=a===null?c_(n,r):c_(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),f){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(gv())e.flags|=8192;else throw Us=fu,Lf}else e.flags&=-16777217}function z0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!f_(n))if(gv())e.flags|=8192;else throw Us=fu,Lf}function Du(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Vl():536870912,e.lanes|=n,Cr|=n)}function Zo(e,n){if(!_e)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function Qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&1206910976,r|=c.flags&1206910976,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function JS(e,n,a){var r=n.pendingProps;switch(bf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(n),null;case 1:return Qe(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),da(ln),mt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(mr(n)?va(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Cf())),Qe(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(va(n),f!==null?(Qe(n),z0(n,f)):(Qe(n),gh(n,c,null,r,a))):f?f!==e.memoizedState?(va(n),Qe(n),z0(n,f)):(Qe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&va(n),Qe(n),gh(n,c,e,r,a)),null;case 27:if(pt(n),a=O.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&va(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Qe(n),n.subtreeFlags&=-33554433,null}e=me.current,mr(n)?pg(n):(e=n_(c,r,a),n.stateNode=e,va(n))}return Qe(n),n.subtreeFlags&=-33554433,null;case 5:if(pt(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&va(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Qe(n),n.subtreeFlags&=-33554433,null}if(f=me.current,mr(n))pg(n);else{var y=rl(O.current);switch(f){case 1:f=y.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=y.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=y.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=y.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=y.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?y.createElement("select",{is:r.is}):y.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?y.createElement(c,{is:r.is}):y.createElement(c)}}f[Ct]=n,f[Nt]=r;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)f.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=f;t:switch(Nn(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&va(n)}}return Qe(n),n.subtreeFlags&=-33554433,gh(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&va(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=O.current,mr(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,c=xn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[Ct]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Pv(e.nodeValue,a)),e||Ha(n,!0)}else e=rl(e).createTextNode(r),e[Ct]=n,n.stateNode=e}return Qe(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=mr(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Ct]=n}else bs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),e=!1}else a=Cf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ii(n),n):(ii(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Qe(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=mr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[Ct]=n}else bs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),c=!1}else c=Cf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ii(n),n):(ii(n),null)}return ii(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Du(n,n.updateQueue),Qe(n),null);case 4:return mt(),e===null&&Kh(n.stateNode.containerInfo),n.flags|=67108864,Qe(n),null;case 10:return da(n.type),Qe(n),null;case 19:if(Vf(n),r=n.memoizedState,r===null)return Qe(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)Zo(r,!1);else{if(sn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=mu(e),f!==null){for(n.flags|=128,Zo(r,!1),e=f.updateQueue,n.updateQueue=e,Du(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)ug(a,e),a=a.sibling;return ko(n,wn.current&1|2),_e&&fa(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&q()>Gu&&(n.flags|=128,c=!0,Zo(r,!1),n.lanes=4194304)}else{if(!c)if(e=mu(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Du(n,e),Zo(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!f.alternate&&!_e)return Qe(n),null}else 2*q()-r.renderingStartTime>Gu&&a!==536870912&&(n.flags|=128,c=!0,Zo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}if(r.tail!==null){e=r.tail;t:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=q(),e.sibling=null,f=wn.current,f=c?f&1|2:f&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||_e?ko(n,f):(a=f,At(Rn,n),At(wn,a),zn===null&&(zn=n)),_e&&fa(n,r.treeForkCount),e}return Qe(n),null;case 22:case 23:return ii(n),Ff(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Qe(n),n.subtreeFlags&6&&(n.flags|=8192)):Qe(n),a=n.updateQueue,a!==null&&Du(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&Wt(Ds),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),da(ln),Qe(n),null;case 25:return null;case 30:return n.flags|=33554432,Qe(n),null}throw Error(s(156,n.tag))}function $S(e,n){switch(bf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return da(ln),mt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return pt(n),null;case 31:if(n.memoizedState!==null){if(ii(n),n.alternate===null)throw Error(s(340));bs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ii(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));bs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Vf(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return mt(),null;case 10:return da(n.type),null;case 22:case 23:return ii(n),Ff(),e!==null&&Wt(Ds),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return da(ln),null;case 25:return null;default:return null}}function B0(e,n){switch(bf(n),n.tag){case 3:da(ln),mt();break;case 26:case 27:case 5:pt(n);break;case 4:mt();break;case 31:n.memoizedState!==null&&ii(n);break;case 13:ii(n);break;case 19:Vf(n);break;case 10:da(n.type);break;case 22:case 23:ii(n),Ff(),e!==null&&Wt(Ds);break;case 24:da(ln)}}function Qo(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){r=void 0;var f=a.create,y=a.inst;r=f(),y.destroy=r}a=a.next}while(a!==c)}}catch(T){Ie(n,n.return,T)}}function Za(e,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&e)===e){var y=r.inst,T=y.destroy;if(T!==void 0){y.destroy=void 0,c=n;var B=a,Z=T;try{Z()}catch(it){Ie(c,B,it)}}}r=r.next}while(r!==f)}}catch(it){Ie(n,n.return,it)}}function I0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Cg(n,a)}catch(r){Ie(e,e.return,r)}}}function F0(e,n,a){a.props=Ps(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Ie(e,n,r)}}function Gi(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var c=e.stateNode,f=la(e.memoizedProps,c);(c.ref===null||c.ref.name!==f)&&(c.ref=Yv(f)),r=c.ref;break;case 7:if(e.stateNode===null){var y=new li(e);m(e.child,!1,XM,y,void 0,void 0),e.stateNode=y}r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(T){Ie(e,n,T)}}function Dn(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Ie(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ie(e,n,c)}else a.current=null}function Nu(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)Jv(e.stateNode,n[a])}function H0(e){for(var n=e.return;n!==null&&(_h(n)&&Jv(e.stateNode,n.stateNode),!vh(n));)n=n.return}function Ko(e){for(var n=e.return;n!==null&&(_h(n)&&kM(e.stateNode,n.stateNode),!vh(n));)n=n.return}function vh(e){return e.tag===5||e.tag===3||e.tag===27}function _h(e){return e&&e.tag===7&&e.stateNode!==null}function yh(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Ie(e,e.return,c)}}function xh(e,n,a){try{var r=e.stateNode;bM(r,e.type,a,n),r[Nt]=n}catch(c){Ie(e,e.return,c)}}function V0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ns(e.type)||e.tag===4}function Sh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||V0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ns(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mh(e,n,a,r){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(c,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(c),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Fi)),Nu(e,r),Le=!0;else if(c!==4&&(c===27&&(Nu(e,r),r=null,ns(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(Mh(e,n,a,r),e=e.sibling;e!==null;)Mh(e,n,a,r),e=e.sibling}function Uu(e,n,a,r){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?a.insertBefore(c,n):a.appendChild(c),Nu(e,r),Le=!0;else if(c!==4&&(c===27&&(Nu(e,r),r=null,ns(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(Uu(e,n,a,r),e=e.sibling;e!==null;)Uu(e,n,a,r),e=e.sibling}function G0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Nn(n,r,a),n[Ct]=e,n[Nt]=a}catch(f){Ie(e,e.return,f)}}var Lu=!1,ai=null;function X0(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Lu=!0)}var Xi=null;function k0(){var e=Xi;return Xi=null,e}var Kn=0;function Er(e,n,a,r,c){return Kn=0,q0(e.child,n,a,r,c)}function q0(e,n,a,r,c){for(var f=!1;e!==null;){if(e.tag===5){var y=e.stateNode;if(r!==null){var T=sd(y);r.push(T),T.view&&(f=!0)}else f||sd(y).view&&(f=!0);Lu=!0,kv(y,Kn===0?n:n+"_"+Kn,a),Kn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&c||q0(e.child,n,a,r,c)&&(f=!0));e=e.sibling}return f}function ki(e,n){for(;e!==null;)e.tag===5?qv(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||ki(e.child,n)),e=e.sibling}function Ou(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Ou(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=ua(n.default,n.share),n!=="none"&&(Er(e,a,n,null,!1)||ki(e.child,!1))}e=e.sibling}}function Eh(e,n){if(e.tag===30){var a=e.stateNode,r=e.memoizedProps,c=la(r,a),f=ua(r.default,a.paired?r.share:r.enter);f!=="none"?Er(e,c,f,null,!1)?(Ou(e),a.paired||n||Nr(e,r.onEnter)):ki(e.child,!1):Ou(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Eh(e,n),e=e.sibling;else Ou(e)}function Th(e){if(ai!==null&&ai.size!==0){var n=ai;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var c=n.get(r);if(c!==void 0){var f=ua(a.default,a.share);if(f!=="none"&&(Er(e,r,f,null,!1)?(f=e.stateNode,c.paired=f,f.paired=c,Nr(e,a.onShare)):ki(e.child,!1)),n.delete(r),n.size===0)break}}}Th(e)}e=e.sibling}}}function bh(e){if(e.tag===30){var n=e.memoizedProps,a=la(n,e.stateNode),r=ai!==null?ai.get(a):void 0,c=ua(n.default,r!==void 0?n.share:n.exit);c!=="none"&&(Er(e,a,c,null,!1)?r!==void 0?(c=e.stateNode,r.paired=c,c.paired=r,ai.delete(a),Nr(e,n.onShare)):Nr(e,n.onExit):ki(e.child,!1)),ai!==null&&Th(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)bh(e),e=e.sibling;else ai!==null&&Th(e)}function Y0(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=la(n,e.stateNode);n=ua(n.default,n.update),e.flags&=-5,n!=="none"&&Er(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Y0(e);e=e.sibling}}function Ah(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,ki(e.child,!1))}Ah(e)}e=e.sibling}}function Pu(e){if(e.tag===30)e.stateNode.paired=null,ki(e.child,!1),Ah(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Pu(e),e=e.sibling;else Ah(e)}function W0(e){for(e=e.child;e!==null;)e.tag===30?ki(e.child,!1):(e.subtreeFlags&33554432)!==0&&W0(e),e=e.sibling}function Ch(e,n,a,r,c,f,y){for(var T=!1;n!==null;){if(n.tag===5){var B=n.stateNode;if(f!==null&&Kn<f.length){var Z=f[Kn],it=sd(B);(Z.view||it.view)&&(T=!0);var dt;if(dt=(e.flags&4)===0)if(it.clip)dt=!0;else{dt=Z.rect;var Y=it.rect;dt=dt.y!==Y.y||dt.x!==Y.x||dt.height!==Y.height||dt.width!==Y.width}dt&&(e.flags|=4),it.abs?it=!Z.abs:(Z=Z.rect,it=it.rect,it=Z.height!==it.height||Z.width!==it.width),it&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&kv(B,Kn===0?a:a+"_"+Kn,c),T&&(e.flags&4)!==0||(Xi===null&&(Xi=[]),Xi.push(B,Kn===0?r:r+"_"+Kn,n.memoizedProps)),Kn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&y?e.flags|=n.flags&32:Ch(e,n.child,a,r,c,f,y)&&(T=!0));n=n.sibling}return T}function j0(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,r=e.stateNode,c=la(a,r),f=ua(a.default,a.update),y;y=e.memoizedState,e.memoizedState=null,r=e;var T=e.child;Kn=0,c=Ch(r,T,c,c,f,y,!1),(e.flags&4)!==0&&c&&Nr(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&j0(e);e=e.sibling}}var Sn=!1,Pe=!1,qi=!1,Rh=!1,Z0=typeof WeakSet=="function"?WeakSet:Set,Mn=null,Yi=!1,Jo=!1,zu=!1,wh=!1;function tM(e,n,a){if(e=e.containerInfo,td=Vr,e=$m(e),mf(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var c=r.getSelection&&r.getSelection();if(c&&c.rangeCount!==0){r=c.anchorNode;var f=c.anchorOffset,y=c.focusNode;c=c.focusOffset;try{r.nodeType,y.nodeType}catch{r=null;break t}var T=0,B=-1,Z=-1,it=0,dt=0,Y=e,et=null;e:for(;;){for(var Dt;Y!==r||f!==0&&Y.nodeType!==3||(B=T+f),Y!==y||c!==0&&Y.nodeType!==3||(Z=T+c),Y.nodeType===3&&(T+=Y.nodeValue.length),(Dt=Y.firstChild)!==null;)et=Y,Y=Dt;for(;;){if(Y===e)break e;if(et===r&&++it===f&&(B=T),et===y&&++dt===c&&(Z=T),(Dt=Y.nextSibling)!==null)break;Y=et,et=Y.parentNode}Y=Dt}r=B===-1||Z===-1?null:{start:B,end:Z}}else r=null}r=r||{start:0,end:0}}else r=null;for(ed={focusedElem:e,selectionRange:r},Vr=!1,a=(a&335544064)===a,Mn=n,n=a?9270:1024;Mn!==null;){if(e=Mn,a&&(r=e.deletions,r!==null))for(f=0;f<r.length;f++)a&&bh(r[f]);if(e.alternate===null&&(e.flags&2)!==0)a&&X0(e),Bu(a);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&bh(r),Bu(a);continue}else if(r!==null&&r.memoizedState!==null){a&&X0(e),Bu(a);continue}}r=e.child,(e.subtreeFlags&n)!==0&&r!==null?(r.return=e,Mn=r):(a&&Y0(e),Bu(a))}}ai=null}function Bu(e){for(;Mn!==null;){var n=Mn,a=e,r=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&r!==null){a=void 0,c=r.memoizedProps,r=r.memoizedState;var f=n.stateNode;try{var y=Ps(n.type,c);a=f.getSnapshotBeforeUpdate(y,r),f.__reactInternalSnapshotBeforeUpdate=a}catch(T){Ie(n,n.return,T)}}break;case 3:if((c&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)ld(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":ld(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=la(r.memoizedProps,r.stateNode),c=n.memoizedProps,c=ua(c.default,c.update),c!=="none"&&Er(r,a,c,r.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,Mn=r;break}Mn=n.return}}function Q0(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Wi(e,a),r&4&&Qo(5,a);break;case 1:if(Wi(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){Ie(a,a.return,y)}else{var c=Ps(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Ie(a,a.return,y)}}r&64&&I0(a),r&512&&Gi(a,a.return);break;case 3:if(Wi(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Cg(e,n)}catch(y){Ie(a,a.return,y)}}break;case 27:n===null&&r&4&&G0(a);case 26:case 5:Wi(e,a),n===null&&r&4&&yh(a),r&512&&Gi(a,a.return);break;case 12:Wi(e,a);break;case 31:Wi(e,a),r&4&&tv(e,a);break;case 13:Wi(e,a),r&4&&ev(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=hM.bind(null,a),WM(e,a))));break;case 22:if(r=a.memoizedState!==null||Sn,!r){var f=n!==null&&n.memoizedState!==null||Pe;n=Sn,c=Pe,Sn=r,(Pe=f)&&!c?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Ri(e,a,r)):Wi(e,a),Sn=n,Pe=c}break;case 30:Wi(e,a),r&512&&Gi(a,a.return);break;case 7:r&512&&Gi(a,a.return);default:Wi(e,a)}}function Dh(e,n){for(e=e.child;e!==null;)K0(e,n),e=e.sibling}function K0(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var c=e.stateNode,f=e.memoizedProps.style,y=f!=null&&f.hasOwnProperty("display")?f.display:null;c.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(B){Ie(e,e.return,B)}Nh(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,Le=!0}catch(B){Ie(e,e.return,B)}break;case 18:try{var T=e.stateNode;n?Xv(T,!0):Xv(e.stateNode,!1)}catch(B){Ie(e,e.return,B)}break;case 22:case 23:e.memoizedState===null&&Dh(e,n);break;default:Dh(e,n)}}function Nh(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var a=e,r=n;switch(a.tag){case 4:K0(a,r);break t;case 22:a.memoizedState===null&&Nh(a,r);break t;default:Nh(a,r)}}e=e.sibling}}function J0(e){var n=e.alternate;n!==null&&(e.alternate=null,J0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Me(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var en=null,Jn=!1;function Ai(e,n,a){for(a=a.child;a!==null;)$0(e,n,a),a=a.sibling}function $0(e,n,a){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(Re,a)}catch{}switch(a.tag){case 26:Pe||Dn(a,n),Ai(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Pe&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Pe||Dn(a,n),Ko(a);var r=en,c=Jn;ns(a.type)&&(en=a.stateNode,Jn=!1),Ai(e,n,a),i_(a.stateNode,a.type,a.memoizedProps),en=r,Jn=c;break;case 5:Pe||Dn(a,n),Ko(a);case 6:if(a.tag===6&&Ko(a),r=en,c=Jn,en=null,Ai(e,n,a),en=r,Jn=c,en!==null)if(Jn)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(a.stateNode),Le=!0}catch(f){Ie(a,n,f)}else try{en.removeChild(a.stateNode),Le=!0}catch(f){Ie(a,n,f)}break;case 18:en!==null&&(Jn?(e=en,Gv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Gr(e)):Gv(en,a.stateNode));break;case 4:r=en,c=Jn,en=a.stateNode.containerInfo,Jn=!0,Ai(e,n,a),en=r,Jn=c;break;case 0:case 11:case 14:case 15:Za(2,a,n),Pe||Za(4,a,n),Ai(e,n,a);break;case 1:Pe||(Dn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&F0(a,n,r)),Ai(e,n,a);break;case 21:Ai(e,n,a);break;case 22:Pe=(r=Pe)||a.memoizedState!==null,Ai(e,n,a),Pe=r;break;case 30:Dn(a,n),Ai(e,n,a);break;case 7:Pe||Dn(a,n),Ai(e,n,a);break;default:Ai(e,n,a)}}function tv(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Gr(e)}catch(a){Ie(n,n.return,a)}}}function ev(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Gr(e)}catch(a){Ie(n,n.return,a)}}function eM(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Z0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Z0),n;default:throw Error(s(435,e.tag))}}function Iu(e,n){var a=eM(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=dM.bind(null,e,r);r.then(c,c)}})}function Xn(e,n,a){var r=n.deletions;if(r!==null)for(var c=0;c<r.length;c++){var f=r[c],y=e,T=n,B=T;t:for(;B!==null;){switch(B.tag){case 27:if(ns(B.type)){en=B.stateNode,Jn=!1;break t}break;case 5:en=B.stateNode,Jn=!1;break t;case 3:case 4:en=B.stateNode.containerInfo,Jn=!0;break t}B=B.return}if(en===null)throw Error(s(160));$0(y,T,f),en=null,Jn=!1,y=f.alternate,y!==null&&(y.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)nv(n,e,a),n=n.sibling}var Ci=null;function nv(e,n,a){var r=e.alternate,c=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(c&4&&(r=e.updateQueue,r=r!==null?r.events:null,r!==null))for(var f=0;f<r.length;f++){var y=r[f];y.ref.impl=y.nextImpl}Xn(n,e,a),kn(e),c&4&&(Za(3,e,e.return),Qo(3,e),Za(5,e,e.return));break;case 1:Xn(n,e,a),kn(e),c&512&&(Pe||r===null||Dn(r,r.return)),c&64&&Sn&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Ci,Xn(n,e,a),kn(e),c&512&&(Pe||r===null||Dn(r,r.return)),c&4)if(c=r!==null?r.memoizedState:null,a=e.memoizedState,r===null)if(a===null)if(e.stateNode===null)if(Sn)e.stateNode=Fv(e.type,e.memoizedProps,n.containerInfo,e);else{t:{n=e.type,a=e.memoizedProps,c=f.ownerDocument||f;e:switch(n){case"title":r=c.getElementsByTagName("title")[0],(!r||r[je]||r[Ct]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=c.createElement(n),c.head.insertBefore(r,c.querySelector("head > title"))),Nn(r,n,a),r[Ct]=e,Je(r),n=r;break t;case"link":if(f=u_("link","href",c).get(n+(a.href||""))){for(y=0;y<f.length;y++)if(r=f[y],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(y,1);break e}}r=c.createElement(n),Nn(r,n,a),c.head.appendChild(r);break;case"meta":if(f=u_("meta","content",c).get(n+(a.content||""))){for(y=0;y<f.length;y++)if(r=f[y],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(y,1);break e}}r=c.createElement(n),Nn(r,n,a),c.head.appendChild(r);break;default:throw Error(s(468,n))}r[Ct]=e,Je(r),n=r}e.stateNode=n}else Sn||md(f,e.type,e.stateNode);else e.stateNode=l_(f,a,e.memoizedProps);else c!==a?(c===null?(n=r.stateNode,n===null||Pe||n.parentNode.removeChild(n)):c.count--,a===null?Sn||md(f,e.type,e.stateNode):l_(f,a,e.memoizedProps)):a===null&&e.stateNode!==null&&xh(e,e.memoizedProps,r.memoizedProps);break;case 27:Xn(n,e,a),kn(e),c&512&&(Pe||r===null||Dn(r,r.return)),r!==null&&c&4&&xh(e,e.memoizedProps,r.memoizedProps);break;case 5:if(f=qi,qi=!1,Xn(n,e,a),qi=f,kn(e),c&512&&(Pe||r===null||Dn(r,r.return)),e.flags&32){n=e.stateNode;try{sr(n,""),Le=!0}catch(it){Ie(e,e.return,it)}}c&4&&e.stateNode!=null&&(n=e.memoizedProps,xh(e,n,r!==null?r.memoizedProps:n)),c&1024&&(Rh=!0);break;case 6:if(Xn(n,e,a),kn(e),c&4){if(e.stateNode===null)throw Error(s(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,Le=!0}catch(it){Ie(e,e.return,it)}}break;case 3:if(Le=!1,$u=null,f=Ci,Ci=ol(n.containerInfo),Xn(n,e,a),Ci=f,kn(e),c&4&&r!==null&&r.memoizedState.isDehydrated)try{Gr(n.containerInfo)}catch(it){Ie(e,e.return,it)}Rh&&(Rh=!1,iv(e)),Le=!1;break;case 4:c=qi,qi=Sn,r=Em(),f=Ci,Ci=ol(e.stateNode.containerInfo),Xn(n,e,a),kn(e),Ci=f,Le&&Jo&&(zu=!0),Le=r,qi=c;break;case 12:Xn(n,e,a),kn(e);break;case 31:Xn(n,e,a),kn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Iu(e,n)));break;case 13:Xn(n,e,a),kn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Vu=q()),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Iu(e,n)));break;case 22:f=e.memoizedState!==null,y=r!==null&&r.memoizedState!==null;var T=Sn,B=Pe,Z=qi;Sn=T||f,qi=Z||f,Pe=B||y,Xn(n,e,a),Pe=B,qi=Z,Sn=T,kn(e),c&8192&&(n=e.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||r===null||y||Sn||Pe||(n=y||Pe,a=Sn,r=Pe,Sn=f||Sn,Pe=n,Qa(e,2),Sn=a,Pe=r),!f&&qi||Dh(e,f)),c&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Iu(e,a))));break;case 19:Xn(n,e,a),kn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Iu(e,n)));break;case 30:c&512&&(Pe||r===null||Dn(r,r.return)),c=Em(),f=Jo,y=(a&335544064)===a,T=e.memoizedProps,Jo=y&&ua(T.default,T.update)!=="none",Xn(n,e,a),kn(e),y&&r!==null&&Le&&(e.flags|=4),Jo=f,Le=c;break;case 21:break;case 7:c&512&&(Pe||r===null||Dn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Xn(n,e,a),kn(e)}}function kn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(V0(r)){a=r;break}r=r.return}r=null;for(var c=e.return;c!==null;){if(_h(c)){var f=c.stateNode;r===null?r=[f]:r.push(f)}if(vh(c))break;c=c.return}var y=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var T=a.stateNode,B=Sh(e);Uu(e,B,T,y);break;case 5:var Z=a.stateNode;a.flags&32&&(sr(Z,""),a.flags&=-33);var it=Sh(e);Uu(e,it,Z,y);break;case 3:case 4:var dt=a.stateNode.containerInfo,Y=Sh(e);Mh(e,Y,dt,y);break;default:throw Error(s(161))}}catch(et){Ie(e,e.return,et)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function iv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;iv(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Vr=!0,n.reset(),Vr=!1),e=e.sibling}}function Tr(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)av(n,e),n=n.sibling;else j0(n)}function av(e,n){var a=e.alternate;if(a===null)Eh(e,!1);else switch(e.tag){case 3:if(wh=Yi=!1,k0(),Tr(n,e),!Yi&&!zu){if(e=Xi,e!==null)for(var r=0;r<e.length;r+=3){a=e[r];var c=e[r+1];qv(a,e[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),wh=!0}Xi=null;break;case 5:Tr(n,e);break;case 4:r=Yi,Yi=!1,Tr(n,e),Yi&&(zu=!0),Yi=r;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?Eh(e,!1):Tr(n,e));break;case 30:r=Yi,c=k0(),Yi=!1,Tr(n,e),Yi&&(e.flags|=4);var f=e.memoizedProps,y=e.stateNode;n=la(f,y),y=la(a.memoizedProps,y);var T=ua(f.default,f.update);T==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=e.child,Kn=0,n=Ch(e,a,n,y,T,f,!0),Kn!==(f===null?0:f.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(Nr(e,e.memoizedProps.onUpdate),Xi=c):c!==null&&(c.push.apply(c,Xi),Xi=c),Yi=(e.flags&32)!==0?!0:r;break;default:Tr(n,e)}}function Wi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Q0(e,n.alternate,n),n=n.sibling}function Qa(e,n){for(e=e.child;e!==null;){var a=e,r=n;switch(a.tag){case 0:case 11:case 14:case 15:Za(4,a,a.return),Qa(a,r);break;case 1:Dn(a,a.return);var c=a.stateNode;typeof c.componentWillUnmount=="function"&&F0(a,a.return,c),Qa(a,r);break;case 27:(r&2)!==0&&i_(a.stateNode,a.type,a.memoizedProps);case 5:Dn(a,a.return),a.tag!==5&&a.tag!==27||Ko(a),Qa(a,r);break;case 6:Ko(a);break;case 26:Dn(a,a.return),c=a.stateNode,a.memoizedState!==null||c===null||Pe||c.parentNode.removeChild(c),Qa(a,r);break;case 22:a.memoizedState===null&&Qa(a,r);break;case 30:Dn(a,a.return),Qa(a,r);break;case 7:Dn(a,a.return);default:Qa(a,r)}e=e.sibling}}function Ri(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,c=e,f=n,y=f.flags,T=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:Ri(c,f,a),Qo(4,f);break;case 1:if(Ri(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(it){Ie(r,r.return,it)}if(r=f,c=r.updateQueue,c!==null){var B=r.stateNode;try{var Z=c.shared.hiddenCallbacks;if(Z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<Z.length;c++)Ag(Z[c],B)}catch(it){Ie(r,r.return,it)}}T&&y&64&&I0(f),Gi(f,f.return);break;case 27:(a&2)!==0&&G0(f);case 5:f.tag!==5&&f.tag!==27||H0(f),Ri(c,f,a),T&&r===null&&y&4&&yh(f),Gi(f,f.return);break;case 6:H0(f);break;case 26:B=f.stateNode,f.memoizedState!==null||B===null||Sn||md(ol(B.ownerDocument),f.type,B),Ri(c,f,a),T&&r===null&&y&4&&yh(f),Gi(f,f.return);break;case 12:Ri(c,f,a);break;case 31:Ri(c,f,a),T&&y&4&&tv(c,f);break;case 13:Ri(c,f,a),T&&y&4&&ev(c,f);break;case 22:f.memoizedState===null&&Ri(c,f,a),Gi(f,f.return);break;case 30:Ri(c,f,a),Gi(f,f.return);break;case 7:Gi(f,f.return);default:Ri(c,f,a)}n=n.sibling}}function Uh(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Bo(a))}function Lh(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Bo(e))}function Si(e,n,a,r){var c=(a&335544064)===a;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)sv(e,n,a,r),n=n.sibling;else c&&W0(n)}function sv(e,n,a,r){var c=(a&335544064)===a;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Pu(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:Si(e,n,a,r),f&2048&&Qo(9,n);break;case 1:Si(e,n,a,r);break;case 3:Si(e,n,a,r),c&&wh&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&Bo(f)));break;case 12:if(f&2048){Si(e,n,a,r),f=n.stateNode;try{var y=n.memoizedProps,T=y.id,B=y.onPostCommit;typeof B=="function"&&B(T,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(Z){Ie(n,n.return,Z)}}else Si(e,n,a,r);break;case 31:Si(e,n,a,r);break;case 13:Si(e,n,a,r);break;case 23:break;case 22:y=n.stateNode,T=n.alternate,n.memoizedState!==null?(c&&T!==null&&T.memoizedState===null&&Pu(T),y._visibility&2?Si(e,n,a,r):$o(e,n)):(c&&T!==null&&T.memoizedState!==null&&Pu(n),y._visibility&2?Si(e,n,a,r):(y._visibility|=2,br(e,n,a,r,(n.subtreeFlags&10256)!==0||!1))),f&2048&&Uh(T,n);break;case 24:Si(e,n,a,r),f&2048&&Lh(n.alternate,n);break;case 30:c&&(f=n.alternate,f!==null&&(ki(f.child,!0),ki(n.child,!0))),Si(e,n,a,r);break;default:Si(e,n,a,r)}}function br(e,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,y=n,T=a,B=r,Z=y.flags;switch(y.tag){case 0:case 11:case 15:br(f,y,T,B,c),Qo(8,y);break;case 23:break;case 22:var it=y.stateNode;y.memoizedState!==null?it._visibility&2?br(f,y,T,B,c):$o(f,y):(it._visibility|=2,br(f,y,T,B,c)),c&&Z&2048&&Uh(y.alternate,y);break;case 24:br(f,y,T,B,c),c&&Z&2048&&Lh(y.alternate,y);break;default:br(f,y,T,B,c)}n=n.sibling}}function $o(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,c=r.flags;switch(r.tag){case 22:$o(a,r),c&2048&&Uh(r.alternate,r);break;case 24:$o(a,r),c&2048&&Lh(r.alternate,r);break;default:$o(a,r)}n=n.sibling}}var zs=8192;function Bs(e,n,a){if(e.subtreeFlags&zs)for(e=e.child;e!==null;)rv(e,n,a),e=e.sibling}function rv(e,n,a){switch(e.tag){case 26:Bs(e,n,a),e.flags&zs&&(e.memoizedState!==null?oE(a,Ci,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&d_(a,e)));break;case 5:Bs(e,n,a),e.flags&zs&&(e=e.stateNode,(n&335544128)===n&&d_(a,e));break;case 3:case 4:var r=Ci;Ci=ol(e.stateNode.containerInfo),Bs(e,n,a),Ci=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=zs,zs=16777216,Bs(e,n,a),zs=r):Bs(e,n,a));break;case 30:if((e.flags&zs)!==0&&(r=e.memoizedProps.name,r!=null&&r!=="auto")){var c=e.stateNode;c.paired=null,ai===null&&(ai=new Map),ai.set(r,c)}Bs(e,n,a);break;default:Bs(e,n,a)}}function ov(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function tl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Mn=r,uv(r,e)}ov(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)lv(e),e=e.sibling}function lv(e){switch(e.tag){case 0:case 11:case 15:tl(e),e.flags&2048&&Za(9,e,e.return);break;case 3:tl(e);break;case 12:tl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Fu(e)):tl(e);break;default:tl(e)}}function Fu(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Mn=r,uv(r,e)}ov(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Za(8,n,n.return),Fu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Fu(n));break;default:Fu(n)}e=e.sibling}}function uv(e,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:Za(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Bo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Mn=r;else t:for(a=e;Mn!==null;){r=Mn;var c=r.sibling,f=r.return;if(J0(r),r===a){Mn=null;break t}if(c!==null){c.return=f,Mn=c;break t}Mn=f}}}var nM={getCacheForType:function(e){var n=Cn(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Cn(ln).controller.signal}},iM=typeof WeakMap=="function"?WeakMap:Map,Oe=0,We=null,Ee=null,Ae=0,Be=0,si=null,Ka=!1,Ar=!1,Oh=!1,_a=0,sn=0,Ja=0,Is=0,Hu=0,ri=0,Cr=0,el=null,$n=null,Ph=!1,Vu=0,cv=0,Gu=1/0,Xu=null,$a=null,nn=0,wi=null,Fs=null,ji=0,zh=0,Bh=null,fv=null,Rr=null,wr=null,Dr=null,nl=0,ku=null;function oi(){return(Oe&2)!==0&&Ae!==0?Ae&-Ae:Tt.T!==null?Wh():$()}function hv(){if(ri===0)if((Ae&536870912)===0||_e){var e=ys;ys<<=1,(ys&3932160)===0&&(ys=262144),ri=e}else ri=536870912;return e=Rn.current,e!==null&&(e.flags|=32),ri}function Nr(e,n){if(n!=null){var a=e.stateNode,r=a.ref;r===null&&(r=a.ref=Yv(la(e.memoizedProps,a))),wr===null&&(wr=[]),wr.push(n.bind(null,r))}}function ti(e,n,a){(e===We&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(Ur(e,0),ts(e,Ae,ri,!1)),xs(e,a),((Oe&2)===0||e!==We)&&(e===We&&((Oe&2)===0&&(Is|=a),sn===4&&ts(e,Ae,ri,!1)),Zi(e))}function dv(e,n,a){if((Oe&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Oa(e,n),c=r?rM(e,n):Fh(e,n,!0),f=r;do{if(c===0){Ar&&!r&&ts(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!aM(a)){c=Fh(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var T=e;c=el;var B=T.current.memoizedState.isDehydrated;if(B&&(Ur(T,y).flags|=256),y=Fh(T,y,!1),y!==2&&y!==6){if(Oh&&!B){T.errorRecoveryDisabledLanes|=f,Is|=f,c=4;break t}f=$n,$n=c,f!==null&&($n===null?$n=f:$n.push.apply($n,f))}c=y}if(f=!1,c!==2)continue}}if(c===1){Ur(e,0),ts(e,n,0,!0);break}t:{switch(r=e,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:ts(r,n,ri,!Ka);break t;case 2:$n=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Vu+300-q(),10<c)){if(ts(r,n,ri,!Ka),aa(r,0,!0)!==0)break t;ji=n,r.timeoutHandle=ad(pv.bind(null,r,a,$n,Xu,Ph,n,ri,Is,Cr,Ka,f,"Throttled",-0,0),c);break t}pv(r,a,$n,Xu,Ph,n,ri,Is,Cr,Ka,f,null,-0,0)}}break}while(!0);Zi(e)}function pv(e,n,a,r,c,f,y,T,B,Z,it,dt,Y,et){e.timeoutHandle=-1;var Dt=n.subtreeFlags,kt=(f&335544064)===f;if(dt=null,(kt||Dt&8192||(Dt&16785408)===16785408)&&(dt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Fi},ai=null,rv(n,f,dt),kt&&(Dt=dt,kt=e.containerInfo,kt=(kt.nodeType===9?kt:kt.ownerDocument).__reactViewTransition,kt!=null&&(Dt.count++,Dt.waitingForViewTransition=!0,Dt=cl.bind(Dt),kt.finished.then(Dt,Dt))),Dt=(f&62914560)===f?Vu-q():(f&4194048)===f?cv-q():0,Dt=lE(dt,Dt),Dt!==null)){ji=f,e.cancelPendingCommit=Dt(Mv.bind(null,e,n,f,a,r,c,y,T,B,Z,it,dt,null,Y,et)),ts(e,f,y,!Z);return}Mv(e,n,f,a,r,c,y,T,B,Z,it,dt)}function aM(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!ni(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ts(e,n,a,r){n=To(e,n),n&=~Hu,n&=~Is,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var c=n;0<c;){var f=31-On(c),y=1<<f;r[f]=-1,c&=~y}a!==0&&Gl(e,a,n)}function qu(){return(Oe&6)===0?(il(0),!1):!0}function Ih(){if(Ee!==null){if(Be===0)var e=Ee.return;else e=Ee,ha=As=null,Yf(e),_r=null,Ho=0,e=Ee;for(;e!==null;)B0(e.alternate,e),e=e.return;Ee=null}}function Ur(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,RM(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ji=0,Ih(),We=e,Ee=a=ca(e.current,null),Ae=n,Be=0,si=null,Ka=!1,Ar=Oa(e,n),Oh=!1,Cr=ri=Hu=Is=Ja=sn=0,$n=el=null,Ph=!1,_a=To(e,n),$l(),a}function mv(e,n){de=null,Tt.H=Tu,n===vr||n===cu?(n=Mg(),Be=3):n===Lf?(n=Mg(),Be=4):Be=n===oh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,si=n,Ee===null&&(sn=1,bu(e,vi(n,e.current)))}function gv(){var e=Rn.current;return e===null?!0:(Ae&4194048)===Ae?zn===null:(Ae&62914560)===Ae||(Ae&536870912)!==0?e===zn:!1}function vv(){var e=Tt.H;return Tt.H=Tu,e===null?Tu:e}function _v(){var e=Tt.A;return Tt.A=nM,e}function Yu(){sn=4,Ka||(Ae&4194048)!==Ae&&Rn.current!==null||(Ar=!0),(Ja&134217727)===0&&(Is&134217727)===0||We===null||ts(We,Ae,ri,!1)}function Fh(e,n,a){var r=Oe;Oe|=2;var c=vv(),f=_v();(We!==e||Ae!==n)&&(Xu=null,Ur(e,n)),n=!1;var y=sn;t:do try{if(Be!==0&&Ee!==null){var T=Ee,B=si;switch(Be){case 8:Ih(),y=6;break t;case 3:case 2:case 9:case 6:Rn.current===null&&(n=!0);var Z=Be;if(Be=0,si=null,Lr(e,T,B,Z),a&&Ar){y=0;break t}break;default:Z=Be,Be=0,si=null,Lr(e,T,B,Z)}}sM(),y=sn;break}catch(it){mv(e,it)}while(!0);return n&&e.shellSuspendCounter++,ha=As=null,Oe=r,Tt.H=c,Tt.A=f,Ee===null&&(We=null,Ae=0,$l()),y}function sM(){for(;Ee!==null;)yv(Ee)}function rM(e,n){var a=Oe;Oe|=2;var r=vv(),c=_v();We!==e||Ae!==n?(Xu=null,Gu=q()+500,Ur(e,n)):Ar=Oa(e,n);t:do try{if(Be!==0&&Ee!==null){n=Ee;var f=si;e:switch(Be){case 1:Be=0,si=null,Lr(e,n,f,1);break;case 2:case 9:if(xg(f)){Be=0,si=null,xv(n);break}n=function(){Be!==2&&Be!==9||We!==e||(Be=7),Zi(e)},f.then(n,n);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:xg(f)?(Be=0,si=null,xv(n)):(Be=0,si=null,Lr(e,n,f,7));break;case 5:var y=null;switch(Ee.tag){case 26:y=Ee.memoizedState;case 5:case 27:var T=Ee;if(y?f_(y):T.stateNode.complete){Be=0,si=null;var B=T.sibling;if(B!==null)Ee=B;else{var Z=T.return;Z!==null?(Ee=Z,Wu(Z)):Ee=null}break e}}Be=0,si=null,Lr(e,n,f,5);break;case 6:Be=0,si=null,Lr(e,n,f,6);break;case 8:Ih(),sn=6;break t;default:throw Error(s(462))}}oM();break}catch(it){mv(e,it)}while(!0);return ha=As=null,Tt.H=r,Tt.A=c,Oe=a,Ee!==null?0:(We=null,Ae=0,$l(),sn)}function oM(){for(;Ee!==null&&!he();)yv(Ee)}function yv(e){var n=P0(e.alternate,e,_a);e.memoizedProps=e.pendingProps,n===null?Wu(e):Ee=n}function xv(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=R0(a,n,n.pendingProps,n.type,void 0,Ae);break;case 11:n=R0(a,n,n.pendingProps,n.type.render,n.ref,Ae);break;case 5:Yf(n);var r=n;r===xn&&(_e?(su(r),r.tag===5&&r.stateNode!=null&&(Ze=r.stateNode)):(su(r),_e=!0));default:B0(a,n),n=Ee=ug(n,_a),n=P0(a,n,_a)}e.memoizedProps=e.pendingProps,n===null?Wu(e):Ee=n}function Lr(e,n,a,r){ha=As=null,Yf(n),_r=null,Ho=0;var c=n.return;try{if(jS(e,c,n,a,Ae)){sn=1,bu(e,vi(a,e.current)),Ee=null;return}}catch(f){if(c!==null)throw Ee=c,f;sn=1,bu(e,vi(a,e.current)),Ee=null;return}n.flags&32768?(_e||r===1?e=!0:Ar||(Ae&536870912)!==0?e=!1:(Ka=e=!0,(r===2||r===9||r===3||r===6)&&(r=Rn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Sv(n,e)):Wu(n)}function Wu(e){var n=e;do{if((n.flags&32768)!==0){Sv(n,Ka);return}e=n.return;var a=JS(n.alternate,n,_a);if(a!==null){Ee=a;return}if(n=n.sibling,n!==null){Ee=n;return}Ee=n=e}while(n!==null);sn===0&&(sn=5)}function Sv(e,n){do{var a=$S(e.alternate,e);if(a!==null){a.flags&=32767,Ee=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ee=e;return}Ee=e=a}while(e!==null);sn=6,Ee=null}function Mv(e,n,a,r,c,f,y,T,B,Z,it,dt){e.cancelPendingCommit=null;do ju();while(nn!==0);if((Oe&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));e===We&&(Ee=We=null,Ae=0),Fs=n,wi=e,ji=a,Bh=c,fv=r,lM(e,n,a,y,T,B,dt)}}function lM(e,n,a,r,c,f,y){var T=n.lanes|n.childLanes;if(zh=T,T|=xf,Qc(e,a,T,r,c,f),wr=null,(a&335544064)===a?(Dr=zS(e),r=10262):(Dr=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,pM(Ot,function(){return Xh(),null})):(e.callbackNode=null,e.callbackPriority=0),Lu=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=Tt.T,Tt.T=null,c=Pt.p,Pt.p=2,f=Oe,Oe|=4;try{tM(e,n,a)}finally{Oe=f,Pt.p=c,Tt.T=r}}nn=1,Lu?Rr=OM(y,e.containerInfo,Dr,Hh,Vh,cM,Gh,Xh,uM):(Hh(),Vh(),Gh())}function uM(e){if(nn!==0){var n=wi.onRecoverableError;n(e,{componentStack:null})}}function cM(){nn===3&&(nn=0,av(Fs,wi),nn=4)}function Hh(){if(nn===1){nn=0;var e=wi,n=Fs,a=ji,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=Tt.T,Tt.T=null;var c=Pt.p;Pt.p=2;var f=Oe;Oe|=4;try{Jo=zu=!1,nv(n,e,a),a=ed;var y=$m(e.containerInfo),T=a.focusedElem,B=a.selectionRange;if(y!==T&&T&&T.ownerDocument&&Jm(T.ownerDocument.documentElement,T)){if(B!==null&&mf(T)){var Z=B.start,it=B.end;if(it===void 0&&(it=Z),"selectionStart"in T)T.selectionStart=Z,T.selectionEnd=Math.min(it,T.value.length);else{var dt=T.ownerDocument||document,Y=dt&&dt.defaultView||window;if(Y.getSelection){var et=Y.getSelection(),Dt=T.textContent.length,kt=Math.min(B.start,Dt),pe=B.end===void 0?kt:Math.min(B.end,Dt);!et.extend&&kt>pe&&(y=pe,pe=kt,kt=y);var W=Km(T,kt),X=Km(T,pe);if(W&&X&&(et.rangeCount!==1||et.anchorNode!==W.node||et.anchorOffset!==W.offset||et.focusNode!==X.node||et.focusOffset!==X.offset)){var tt=dt.createRange();tt.setStart(W.node,W.offset),et.removeAllRanges(),kt>pe?(et.addRange(tt),et.extend(X.node,X.offset)):(tt.setEnd(X.node,X.offset),et.addRange(tt))}}}}for(dt=[],et=T;et=et.parentNode;)et.nodeType===1&&dt.push({element:et,left:et.scrollLeft,top:et.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<dt.length;T++){var ht=dt[T];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}Vr=!!td,ed=td=null}finally{Oe=f,Pt.p=c,Tt.T=r}}e.current=n,nn=2}}function Vh(){if(nn===2){nn=0;var e=wi,n=Fs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=Tt.T,Tt.T=null;var r=Pt.p;Pt.p=2;var c=Oe;Oe|=4;try{Q0(e,n.alternate,n)}finally{Oe=c,Pt.p=r,Tt.T=a}}nn=3}}function Gh(){if(nn===4||nn===3){nn=0;var e=Rr;Rr=null,Ve();var n=wi,a=Fs,r=ji,c=fv,f=(r&335544064)===r?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?nn=5:(nn=0,Fs=wi=null,Ev(n,n.pendingLanes)),f=n.pendingLanes,f===0&&($a=null),rt(r),a=a.stateNode,Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(Re,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=Tt.T,f=Pt.p,Pt.p=2,Tt.T=null;try{for(var y=n.onRecoverableError,T=0;T<c.length;T++){var B=c[T];y(B.value,{componentStack:B.stack})}}finally{Tt.T=a,Pt.p=f}}if(c=wr,y=Dr,Dr=null,c!==null&&(wr=null,y===null&&(y=[]),e!==null))for(B=0;B<c.length;B++)a=(0,c[B])(y),a!==void 0&&e.finished.finally(a);(ji&3)!==0&&ju(),Zi(n),f=n.pendingLanes,(r&261930)!==0&&(f&42)!==0?n===ku?nl++:(nl=0,ku=n):(nl=0,ku=null),il(0)}}function Ev(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Bo(n)))}function ju(){return Rr!==null&&(Rr.skipTransition(),Rr=null),Hh(),Vh(),Gh(),Xh()}function Xh(){if(nn!==5)return!1;var e=wi,n=zh;zh=0;var a=rt(ji),r=Tt.T,c=Pt.p;try{Pt.p=32>a?32:a,Tt.T=null,a=Bh,Bh=null;var f=wi,y=ji;if(nn=0,Fs=wi=null,ji=0,(Oe&6)!==0)throw Error(s(331));var T=Oe;if(Oe|=4,lv(f.current),sv(f,f.current,y,a),Oe=T,il(0,!1),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(Re,f)}catch{}return!0}finally{Pt.p=c,Tt.T=r,Ev(e,n)}}function Tv(e,n,a){n=vi(a,n),n=rh(e.stateNode,n,2),e=qa(e,n,2),e!==null&&(xs(e,2),Zi(e))}function Ie(e,n,a){if(e.tag===3)Tv(e,e,a);else for(;n!==null;){if(n.tag===3){Tv(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($a===null||!$a.has(r))){e=vi(a,e),a=x0(2),r=qa(n,a,2),r!==null&&(S0(a,r,n,e),xs(r,2),Zi(r));break}}n=n.return}}function kh(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new iM;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(Oh=!0,c.add(a),e=fM.bind(null,e,n,a),n.then(e,e))}function fM(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,We===e&&(Ae&a)===a&&((sn===4||sn===3&&(Ae&62914560)===Ae&&300>q()-Vu)&&(Oe&2)===0?Ur(e,0):Hu|=a,Cr===Ae&&(Cr=0)),Zi(e)}function bv(e,n){n===0&&(n=Vl()),e=Es(e,n),e!==null&&(xs(e,n),Zi(e))}function hM(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),bv(e,a)}function dM(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),bv(e,a)}function pM(e,n){return It(e,n)}var Or=null,Pr=null,qh=!1,Zu=!1,Yh=!1,es=0;function Zi(e){e!==Pr&&e.next===null&&(Pr===null?Or=Pr=e:Pr=Pr.next=e),Zu=!0,qh||(qh=!0,gM())}function il(e,n){if(!Yh&&Zu){Yh=!0;do for(var a=!1,r=Or;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var y=r.suspendedLanes,T=r.pingedLanes;f=(1<<31-On(42|e)+1)-1,f&=c&~(y&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,wv(r,f))}else f=Ae,f=aa(r,r===We?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Oa(r,f)||(a=!0,wv(r,f));r=r.next}while(a);Yh=!1}}function mM(){Av()}function Av(){Zu=qh=!1;var e=0;es!==0&&CM()&&(e=es);for(var n=q(),a=null,r=Or;r!==null;){var c=r.next,f=Cv(r,n);f===0?(r.next=null,a===null?Or=c:a.next=c,c===null&&(Pr=a)):(a=r,(e!==0||(f&3)!==0)&&(Zu=!0)),r=c}nn!==0&&nn!==5||il(e),es!==0&&(es=0)}function Cv(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-On(f),T=1<<y,B=c[y];B===-1?((T&a)===0||(T&r)!==0)&&(c[y]=Zc(T,n)):B<=n&&(e.expiredLanes|=T),f&=~T}if(n=We,a=Ae,a=aa(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Se(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Oa(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&Se(r),rt(a)){case 2:case 8:a=vt;break;case 32:a=Ot;break;case 268435456:a=ce;break;default:a=Ot}return r=Rv.bind(null,e),a=It(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&Se(r),e.callbackPriority=2,e.callbackNode=null,2}function Rv(e,n){if(nn!==0&&nn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ju()&&e.callbackNode!==a)return null;var r=Ae;return r=aa(e,e===We?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(dv(e,r,n),Cv(e,q()),e.callbackNode!=null&&e.callbackNode===a?Rv.bind(null,e):null)}function wv(e,n){if(ju())return null;dv(e,n,!0)}function gM(){wM(function(){(Oe&6)!==0?It(ct,mM):Av()})}function Wh(){if(es===0){var e=ws;e===0&&(e=_s,_s<<=1,(_s&261888)===0&&(_s=256)),es=e}return es}function Dv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ql(e)}function vM(e,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=Dv((c[Nt]||null).action),y=r.submitter;y&&(n=(n=y[Nt]||null)?Dv(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var T=new Zl("action","action",null,r,c);e.push({event:T,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(es!==0){var B=new FormData(c,y);eh(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(T.preventDefault(),B=new FormData(c,y),eh(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var jh=0;jh<yf.length;jh++){var Zh=yf[jh],_M=Zh.toLowerCase(),yM=Zh[0].toUpperCase()+Zh.slice(1);bi(_M,"on"+yM)}bi(ng,"onAnimationEnd"),bi(ig,"onAnimationIteration"),bi(ag,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(RS,"onTransitionRun"),bi(wS,"onTransitionStart"),bi(DS,"onTransitionCancel"),bi(sg,"onTransitionEnd"),dn("onMouseEnter",["mouseout","mouseover"]),dn("onMouseLeave",["mouseout","mouseover"]),dn("onPointerEnter",["pointerout","pointerover"]),dn("onPointerLeave",["pointerout","pointerover"]),on("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),on("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),on("onBeforeInput",["compositionend","keypress","textInput","paste"]),on("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),on("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),on("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(al));function Nv(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var y=r.length-1;0<=y;y--){var T=r[y],B=T.instance,Z=T.currentTarget;if(T=T.listener,B!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=Z;try{f(c)}catch(it){Jl(it)}c.currentTarget=null,f=B}else for(y=0;y<r.length;y++){if(T=r[y],B=T.instance,Z=T.currentTarget,T=T.listener,B!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=Z;try{f(c)}catch(it){Jl(it)}c.currentTarget=null,f=B}}}}function Te(e,n){var a=n[re];a===void 0&&(a=n[re]=new Set);var r=e+"__bubble";a.has(r)||(Uv(n,e,2,!1),a.add(r))}function Qh(e,n,a){var r=0;n&&(r|=4),Uv(a,e,r,n)}var Qu="_reactListening"+Math.random().toString(36).slice(2);function Kh(e){if(!e[Qu]){e[Qu]=!0,Pa.forEach(function(a){a!=="selectionchange"&&(xM.has(a)||Qh(a,!1,e),Qh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Qu]||(n[Qu]=!0,Qh("selectionchange",!1,n))}}function Uv(e,n,a,r){switch(S_(n)){case 2:var c=hE;break;case 8:c=dE;break;default:c=vd}a=c.bind(null,n,a,e),c=void 0,!sf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Jh(e,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var y=r.tag;if(y===3||y===4){var T=r.stateNode.containerInfo;if(T===c)break;if(y===4)for(y=r.return;y!==null;){var B=y.tag;if((B===3||B===4)&&y.stateNode.containerInfo===c)return;y=y.return}for(;T!==null;){if(y=jt(T),y===null)return;if(B=y.tag,B===5||B===6||B===26||B===27){r=f=y;continue t}T=T.parentNode}}r=r.return}Um(function(){var Z=f,it=nf(a),dt=[];t:{var Y=rg.get(e);if(Y!==void 0){var et=Zl,Dt=e;switch(e){case"keypress":if(Wl(a)===0)break t;case"keydown":case"keyup":et=aS;break;case"focusin":Dt="focus",et=uf;break;case"focusout":Dt="blur",et=uf;break;case"beforeblur":case"afterblur":et=uf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":et=Pm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":et=Yx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":et=uS;break;case ng:case ig:case ag:et=Zx;break;case sg:et=fS;break;case"scroll":case"scrollend":et=kx;break;case"wheel":et=dS;break;case"copy":case"cut":case"paste":et=Kx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":et=Bm;break;case"submit":et=oS;break;case"toggle":case"beforetoggle":et=mS}var kt=(n&4)!==0,pe=!kt&&(e==="scroll"||e==="scrollend"),W=kt?Y!==null?Y+"Capture":null:Y;kt=[];for(var X=Z,tt;X!==null;){var ht=X;if(tt=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||tt===null||W===null||(ht=Ao(X,W),ht!=null&&kt.push(sl(X,ht,tt))),pe)break;X=X.return}0<kt.length&&(Y=new et(Y,Dt,null,a,it),dt.push({event:Y,listeners:kt}))}}if((n&7)===0){t:{if(et=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",et&&a!==ef&&(Dt=a.relatedTarget||a.fromElement)&&(jt(Dt)||Dt[ie]))break t;(Y||et)&&(Dt=it.window===it?it:(et=it.ownerDocument)?et.defaultView||et.parentWindow:window,Y?(et=a.relatedTarget||a.toElement,Y=Z,et=et?jt(et):null,et!==null&&(pe=u(et),kt=et.tag,et!==pe||kt!==5&&kt!==27&&kt!==6)&&(et=null)):(Y=null,et=Z),Y!==et&&(kt=Pm,ht="onMouseLeave",W="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(kt=Bm,ht="onPointerLeave",W="onPointerEnter",X="pointer"),pe=Y==null?Dt:be(Y),tt=et==null?Dt:be(et),Dt=new kt(ht,X+"leave",Y,a,it),Dt.target=pe,Dt.relatedTarget=tt,ht=null,jt(it)===Z&&(kt=new kt(W,X+"enter",et,a,it),kt.target=tt,kt.relatedTarget=pe,ht=kt),pe=ht,kt=Y&&et?z(Y,et,SM):null,Y!==null&&Lv(dt,Dt,Y,kt,!1),et!==null&&pe!==null&&Lv(dt,pe,et,kt,!0)))}t:{if(Y=Z?be(Z):window,et=Y.nodeName&&Y.nodeName.toLowerCase(),et==="select"||et==="input"&&Y.type==="file")var Vt=qm;else if(Xm(Y))if(Ym)Vt=bS;else{Vt=ES;var Ce=MS}else et=Y.nodeName,!et||et.toLowerCase()!=="input"||Y.type!=="checkbox"&&Y.type!=="radio"?Z&&tf(Z.elementType)&&(Vt=qm):Vt=TS;if(Vt&&(Vt=Vt(e,Z))){km(dt,Vt,a,it);break t}Ce&&Ce(e,Y,Z)}switch(Ce=Z?be(Z):window,e){case"focusin":(Xm(Ce)||Ce.contentEditable==="true")&&(ur=Ce,gf=Z,Oo=null);break;case"focusout":Oo=gf=ur=null;break;case"mousedown":vf=!0;break;case"contextmenu":case"mouseup":case"dragend":vf=!1,tg(dt,a,it);break;case"selectionchange":if(CS)break;case"keydown":case"keyup":tg(dt,a,it)}var Qt;if(ff)t:{switch(e){case"compositionstart":var ae="onCompositionStart";break t;case"compositionend":ae="onCompositionEnd";break t;case"compositionupdate":ae="onCompositionUpdate";break t}ae=void 0}else lr?Vm(e,a)&&(ae="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ae="onCompositionStart");ae&&(Im&&a.locale!=="ko"&&(lr||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&lr&&(Qt=Lm()):(za=it,rf="value"in za?za.value:za.textContent,lr=!0)),Ce=Ku(Z,ae),0<Ce.length&&(ae=new zm(ae,e,null,a,it),dt.push({event:ae,listeners:Ce}),Qt?ae.data=Qt:(Qt=Gm(a),Qt!==null&&(ae.data=Qt)))),(Qt=vS?_S(e,a):yS(e,a))&&(ae=Ku(Z,"onBeforeInput"),0<ae.length&&(Ce=new zm("onBeforeInput","beforeinput",null,a,it),dt.push({event:Ce,listeners:ae}),Ce.data=Qt)),vM(dt,e,Z,a,it)}Nv(dt,n)})}function sl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Ku(e,n){for(var a=n+"Capture",r=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ao(e,a),c!=null&&r.unshift(sl(e,c,f)),c=Ao(e,n),c!=null&&r.push(sl(e,c,f))),e.tag===3)return r;e=e.return}return[]}function SM(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Lv(e,n,a,r,c){for(var f=n._reactName,y=[];a!==null&&a!==r;){var T=a,B=T.alternate,Z=T.stateNode;if(T=T.tag,B!==null&&B===r)break;T!==5&&T!==26&&T!==27||Z===null||(B=Z,c?(Z=Ao(a,f),Z!=null&&y.unshift(sl(a,Z,B))):c||(Z=Ao(a,f),Z!=null&&y.push(sl(a,Z,B)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var MM=/\r\n?/g,EM=/\u0000|\uFFFD/g;function Ov(e){return(typeof e=="string"?e:""+e).replace(MM,`
`).replace(EM,"")}function Pv(e,n){return n=Ov(n),Ov(e)===n}function Fe(e,n,a,r,c,f){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||sr(e,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&sr(e,""+r);else return;break;case"className":kl(e,"class",r);break;case"tabIndex":kl(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":kl(e,a,r);break;case"style":Dm(e,r,f);return;case"data":if(n!=="object"){kl(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=ql(r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Fe(e,n,"name",c.name,c,null),Fe(e,n,"formEncType",c.formEncType,c,null),Fe(e,n,"formMethod",c.formMethod,c,null),Fe(e,n,"formTarget",c.formTarget,c,null)):(Fe(e,n,"encType",c.encType,c,null),Fe(e,n,"method",c.method,c,null),Fe(e,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=ql(r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Fi);return;case"onScroll":r!=null&&Te("scroll",e);return;case"onScrollEnd":r!=null&&Te("scrollend",e);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));(f!=null?f.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=ql(r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":Te("beforetoggle",e),Te("toggle",e),Xl(e,"popover",r);break;case"xlinkActuate":ra(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ra(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ra(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ra(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ra(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ra(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ra(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ra(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ra(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Xl(e,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=Gx.get(a)||a,Xl(e,a,r);else return}Le=!0}function $h(e,n,a,r,c,f){switch(a){case"style":Dm(e,r,f);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));(f!=null?f.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"children":if(typeof r=="string")sr(e,r);else if(typeof r=="number"||typeof r=="bigint")sr(e,""+r);else return;break;case"onScroll":r!=null&&Te("scroll",e);return;case"onScrollEnd":r!=null&&Te("scrollend",e);return;case"onClick":r!=null&&(e.onclick=Fi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Ye.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),f=a.slice(2,c?a.length-7:void 0),n=e[Nt]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(f,n,c),typeof r=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(f,r,c);break t}Le=!0,a in e?e[a]=r:r===!0?e.setAttribute(a,""):Xl(e,a,r)}return}Le=!0}function Nn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",e),Te("load",e);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Fe(e,n,f,y,a,null)}}c&&Fe(e,n,"srcSet",a.srcSet,a,null),r&&Fe(e,n,"src",a.src,a,null);return;case"input":Te("invalid",e);var T=f=y=c=null,B=null,Z=null;for(r in a)if(a.hasOwnProperty(r)){var it=a[r];if(it!=null)switch(r){case"name":c=it;break;case"type":y=it;break;case"checked":B=it;break;case"defaultChecked":Z=it;break;case"value":f=it;break;case"defaultValue":T=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,n));break;default:Fe(e,n,r,it,a,null)}}Am(e,f,T,B,Z,y,c,!1);return;case"select":Te("invalid",e),r=y=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":y=T;break;case"multiple":r=T;default:Fe(e,n,c,T,a,null)}n=f,a=y,e.multiple=!!r,n!=null?ar(e,!!r,n,!1):a!=null&&ar(e,!!r,a,!0);return;case"textarea":Te("invalid",e),f=c=r=null;for(y in a)if(a.hasOwnProperty(y)&&(T=a[y],T!=null))switch(y){case"value":r=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Fe(e,n,y,T,a,null)}Rm(e,r,c,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(r=a[B],r!=null))switch(B){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Fe(e,n,B,r,a,null)}return;case"dialog":Te("beforetoggle",e),Te("toggle",e),Te("cancel",e),Te("close",e);break;case"iframe":case"object":Te("load",e);break;case"video":case"audio":for(r=0;r<al.length;r++)Te(al[r],e);break;case"image":Te("error",e),Te("load",e);break;case"details":Te("toggle",e);break;case"embed":case"source":case"link":Te("error",e),Te("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Z in a)if(a.hasOwnProperty(Z)&&(r=a[Z],r!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Fe(e,n,Z,r,a,null)}return;default:if(tf(n)){for(it in a)a.hasOwnProperty(it)&&(r=a[it],r!==void 0&&$h(e,n,it,r,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(r=a[T],r!=null&&Fe(e,n,T,r,a,null))}var TM={};function bM(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,y=null,T=null,B=null,Z=null,it=null;for(et in a){var dt=a[et];if(a.hasOwnProperty(et)&&dt!=null)switch(et){case"checked":break;case"value":break;case"defaultValue":B=dt;default:r.hasOwnProperty(et)||Fe(e,n,et,null,r,dt)}}for(var Y in r){var et=r[Y];if(dt=a[Y],r.hasOwnProperty(Y)&&(et!=null||dt!=null))switch(Y){case"type":et!==dt&&(Le=!0),f=et;break;case"name":et!==dt&&(Le=!0),c=et;break;case"checked":et!==dt&&(Le=!0),Z=et;break;case"defaultChecked":et!==dt&&(Le=!0),it=et;break;case"value":et!==dt&&(Le=!0),y=et;break;case"defaultValue":et!==dt&&(Le=!0),T=et;break;case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(s(137,n));break;default:et!==dt&&Fe(e,n,Y,et,r,dt)}}Jc(e,y,T,B,Z,it,f,c);return;case"select":et=y=T=Y=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":et=B;default:r.hasOwnProperty(f)||Fe(e,n,f,null,r,B)}for(c in r)if(f=r[c],B=a[c],r.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":f!==B&&(Le=!0),Y=f;break;case"defaultValue":f!==B&&(Le=!0),T=f;break;case"multiple":f!==B&&(Le=!0),y=f;default:f!==B&&Fe(e,n,c,f,r,B)}n=T,a=y,r=et,Y!=null?ar(e,!!a,Y,!1):!!r!=!!a&&(n!=null?ar(e,!!a,n,!0):ar(e,!!a,a?[]:"",!1));return;case"textarea":et=Y=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!r.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Fe(e,n,T,null,r,c)}for(y in r)if(c=r[y],f=a[y],r.hasOwnProperty(y)&&(c!=null||f!=null))switch(y){case"value":c!==f&&(Le=!0),Y=c;break;case"defaultValue":c!==f&&(Le=!0),et=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Fe(e,n,y,c,r,f)}Cm(e,Y,et);return;case"option":for(var Dt in a)if(Y=a[Dt],a.hasOwnProperty(Dt)&&Y!=null&&!r.hasOwnProperty(Dt))switch(Dt){case"selected":e.selected=!1;break;default:Fe(e,n,Dt,null,r,Y)}for(B in r)if(Y=r[B],et=a[B],r.hasOwnProperty(B)&&Y!==et&&(Y!=null||et!=null))switch(B){case"selected":Y!==et&&(Le=!0),e.selected=Y&&typeof Y!="function"&&typeof Y!="symbol";break;default:Fe(e,n,B,Y,r,et)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var kt in a)Y=a[kt],a.hasOwnProperty(kt)&&Y!=null&&!r.hasOwnProperty(kt)&&Fe(e,n,kt,null,r,Y);for(Z in r)if(Y=r[Z],et=a[Z],r.hasOwnProperty(Z)&&Y!==et&&(Y!=null||et!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,n));break;default:Fe(e,n,Z,Y,r,et)}return;default:if(tf(n)){for(var pe in a)Y=a[pe],a.hasOwnProperty(pe)&&Y!==void 0&&!r.hasOwnProperty(pe)&&$h(e,n,pe,void 0,r,Y);for(it in r)Y=r[it],et=a[it],!r.hasOwnProperty(it)||Y===et||Y===void 0&&et===void 0||$h(e,n,it,Y,r,et);return}}for(var W in a)Y=a[W],a.hasOwnProperty(W)&&Y!=null&&!r.hasOwnProperty(W)&&Fe(e,n,W,null,r,Y);for(dt in r)Y=r[dt],et=a[dt],!r.hasOwnProperty(dt)||Y===et||Y==null&&et==null||Fe(e,n,dt,Y,r,et)}function zv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function AM(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,y=c.initiatorType,T=c.duration;if(f&&T&&zv(y)){for(y=0,T=c.responseEnd,r+=1;r<a.length;r++){var B=a[r],Z=B.startTime;if(Z>T)break;var it=B.transferSize,dt=B.initiatorType;it&&zv(dt)&&(B=B.responseEnd,y+=it*(B<T?1:(T-Z)/(B-Z)))}if(--r,n+=8*(f+y)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var td=null,ed=null;function rl(e){return e.nodeType===9?e:e.ownerDocument}function Bv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Iv(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Fv(e,n,a,r){return a=rl(a).createElement(e),a[Ct]=r,a[Nt]=n,Nn(a,e,n),Je(a),a}function nd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var id=null;function CM(){var e=window.event;return e&&e.type==="popstate"?e===id?!1:(id=e,!0):(id=null,!1)}var ad=typeof setTimeout=="function"?setTimeout:void 0,RM=typeof clearTimeout=="function"?clearTimeout:void 0,Hv=typeof Promise=="function"?Promise:void 0,Vv=typeof requestAnimationFrame=="function"?requestAnimationFrame:ad,wM=typeof queueMicrotask=="function"?queueMicrotask:typeof Hv<"u"?function(e){return Hv.resolve(null).then(e).catch(DM)}:ad;function DM(e){setTimeout(function(){throw e})}function ns(e){return e==="head"}function Gv(e,n){var a=n,r=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(c),Gr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")hd(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,hd(a);for(var f=a.firstChild;f;){var y=f.nextSibling,T=f.nodeName;f[je]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=y}}else a==="body"&&hd(e.ownerDocument.body);a=c}while(a);Gr(n)}function Xv(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function kv(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var r=1;else for(var c=r=0;c<n.length;c++){var f=n[c];0<f.width&&0<f.height&&r++}r===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function qv(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function NM(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function sd(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return NM(n,a,e)}function UM(e){return e.documentElement.clientHeight}function LM(e){this.addEventListener("load",e),this.addEventListener("error",e)}function OM(e,n,a,r,c,f,y,T,B){var Z=n.nodeType===9?n:n.ownerDocument;try{var it=Z.startViewTransition({update:function(){var Y=Z.defaultView,et=Y.navigation&&Y.navigation.transition,Dt=Z.fonts.status;r();var kt=[];if(Dt==="loaded"&&(UM(Z),Z.fonts.status==="loading"&&kt.push(Z.fonts.ready)),Dt=kt.length,e!==null)for(var pe=e.suspenseyImages,W=0,X=0;X<pe.length;X++){var tt=pe[X];if(!tt.complete){var ht=tt.getBoundingClientRect();if(0<ht.bottom&&0<ht.right&&ht.top<Y.innerHeight&&ht.left<Y.innerWidth){if(W+=h_(tt),W>tc){kt.length=Dt;break}tt=new Promise(LM.bind(tt)),kt.push(tt)}}}if(0<kt.length)return Y=Promise.race([Promise.all(kt),new Promise(function(Vt){return setTimeout(Vt,500)})]).then(c,c),(et?Promise.allSettled([et.finished,Y]):Y).then(f,f);if(c(),et)return et.finished.then(f,f);f()},types:a});Z.__reactViewTransition=it;var dt=[];return it.ready.then(function(){for(var Y=Z.documentElement.getAnimations({subtree:!0}),et=0;et<Y.length;et++){var Dt=Y[et],kt=Dt.effect,pe=kt.pseudoElement;if(pe!=null&&pe.startsWith("::view-transition")){dt.push(Dt),Dt=kt.getKeyframes();for(var W=pe=void 0,X=!0,tt=0;tt<Dt.length;tt++){var ht=Dt[tt],Vt=ht.width;if(pe===void 0)pe=Vt;else if(pe!==Vt){X=!1;break}if(Vt=ht.height,W===void 0)W=Vt;else if(W!==Vt){X=!1;break}delete ht.width,delete ht.height,ht.transform==="none"&&delete ht.transform}X&&pe!==void 0&&W!==void 0&&(kt.setKeyframes(Dt),X=getComputedStyle(kt.target,kt.pseudoElement),X.width!==pe||X.height!==W)&&(X=Dt[0],X.width=pe,X.height=W,X=Dt[Dt.length-1],X.width=pe,X.height=W,kt.setKeyframes(Dt))}}y()},function(Y){Z.__reactViewTransition===it&&(Z.__reactViewTransition=null);try{if(typeof Y=="object"&&Y!==null)switch(Y.name){case"InvalidStateError":(Y.message==="View transition was skipped because document visibility state is hidden."||Y.message==="Skipping view transition because document visibility state has become hidden."||Y.message==="Skipping view transition because viewport size changed."||Y.message==="Transition was aborted because of invalid state")&&(Y=null)}Y!==null&&B(Y)}finally{r(),c(),y()}}),it.finished.finally(function(){for(var Y=0;Y<dt.length;Y++)dt[Y].cancel();Z.__reactViewTransition===it&&(Z.__reactViewTransition=null),T()}),it}catch{return r(),c(),y(),null}}function Hs(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}Hs.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:P({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},Hs.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),r=[],c=0;c<a.length;c++){var f=a[c].effect;f!==null&&f.target===e&&f.pseudoElement===n&&r.push(a[c])}return r},Hs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Yv(e){return{name:e,group:new Hs("group",e),imagePair:new Hs("image-pair",e),old:new Hs("old",e),new:new Hs("new",e)}}function li(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}li.prototype.addEventListener=function(e,n,a){var r=null,c=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(jv(f,e,n,a)===-1){var y=this,T=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(T=function(B){y.removeEventListener(e,n,a),typeof n=="function"?n.call(this,B):n.handleEvent(B)}),r!==null&&(c=y.removeEventListener.bind(y,e,n,a),r.addEventListener("abort",c,{once:!0}),c=r.removeEventListener.bind(r,"abort",c)),r=zr(a),f.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:T,cleanup:c}),m(this._fragmentFiber.child,!1,PM,e,T,r)}this._eventListeners=f}};function PM(e,n,a,r){return M(e).addEventListener(n,a,r),!1}li.prototype.removeEventListener=function(e,n,a){var r=this._eventListeners;if(r!==null&&(n=jv(r,e,n,a),n!==-1)){var c=r[n];a=c.attachedListener;var f=c.cleanup;c=zr(c.optionsOrUseCapture),m(this._fragmentFiber.child,!1,zM,e,a,c),r.splice(n,1),f!==null&&f()}};function zM(e,n,a,r){return M(e).removeEventListener(n,a,r),!1}function zr(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Wv(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function jv(e,n,a,r){if(e.length===0)return-1;r=Wv(r);for(var c=0;c<e.length;c++){var f=e[c];if(f.type===n&&f.listener===a&&Wv(f.optionsOrUseCapture)===r)return c}return-1}li.prototype.dispatchEvent=function(e){var n=_(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var c=0;c<a.length;c++){var f=a[c];r.addEventListener(f.type,f.attachedListener,zr(f.optionsOrUseCapture))}if(n.appendChild(r),e=r.dispatchEvent(e),a)for(c=0;c<a.length;c++)f=a[c],r.removeEventListener(f.type,f.attachedListener,zr(f.optionsOrUseCapture));return n.removeChild(r),e}return n.dispatchEvent(e)},li.prototype.focus=function(e){m(this._fragmentFiber.child,!0,Zv,e,void 0,void 0)};function Zv(e,n){return e.tag===6?!1:(e=M(e),jM(e,n))}li.prototype.focusLast=function(e){var n=[];m(this._fragmentFiber.child,!0,rd,n,void 0,void 0);for(var a=n.length-1;0<=a&&!Zv(n[a],e);a--);};function rd(e,n){return n.push(e),!1}li.prototype.blur=function(){var e=_(this._fragmentFiber);e!==null&&(e=M(e),e=rl(e).activeElement,e!==null&&m(this._fragmentFiber.child,!1,BM,e,void 0,void 0))};function BM(e,n){return e.tag===6?!1:(e=M(e),e===n||e.contains(n)?(n.blur(),!0):!1)}li.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),m(this._fragmentFiber.child,!1,IM,e,void 0,void 0)};function IM(e,n){return e.tag===6||(e=M(e),n.observe(e)),!1}li.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),m(this._fragmentFiber.child,!1,FM,e,void 0,void 0);for(var a=n=0;a<Di.length;a++){var r=Di[a];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Di[n++]=r}Di.length=n}};function FM(e,n){return e.tag===6||(e=M(e),n.unobserve(e)),!1}var Di=[],od=!1;function HM(e,n,a){Di.push({fragmentInstance:e,observer:n,instance:a}),od||(od=!0,ZM(function(){od=!1;var r=Di;Di=[];for(var c=0;c<r.length;c++){var f=r[c];f.observer.unobserve(f.instance)}}))}li.prototype.getClientRects=function(){var e=[];return m(this._fragmentFiber.child,!1,VM,e,void 0,void 0),e};function VM(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=M(e),n.push.apply(n,e.getClientRects());return!1}li.prototype.getRootNode=function(e){var n=_(this._fragmentFiber);return n===null?this:M(n).getRootNode(e)},li.prototype.compareDocumentPosition=function(e){var n=_(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];m(this._fragmentFiber.child,!1,rd,a,void 0,void 0);var r=M(n);if(a.length===0){if(a=r,S(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var c=r=a.compareDocumentPosition(e);return a===e?c=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=E(n)[1],a===null?c=Node.DOCUMENT_POSITION_PRECEDING:(e=M(a).compareDocumentPosition(e),c=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),c=M(a[a.length-1]);var f=S(this._fragmentFiber)?n.parentElement:r;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var y=n.compareDocumentPosition(e),T=c.compareDocumentPosition(e),B=y&Node.DOCUMENT_POSITION_CONTAINED_BY||T&Node.DOCUMENT_POSITION_CONTAINED_BY;return T=r&&f&&y&Node.DOCUMENT_POSITION_FOLLOWING&&T&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===e||f&&c===e||B||T?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===e||!f&&c===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:y,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||GM(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function GM(e,n,a,r,c){var f=jt(c);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=c.ownerDocument,c===f||c===f.documentElement||c===f.body;t:{for(f=n,n=_(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=z(a,f,H),n===null?n=!1:(m(n,!0,L,f,a),f=x,x=null,n=f!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===r)&&(n=z(r,f,H),n===null?n=!1:(m(n,!0,A,f,r),f=x,w=x=null,n=f!==null)),n):!1}function Qv(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}li.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(s(566));var n=[];m(this._fragmentFiber.child,!1,rd,n,void 0,void 0);var a=e!==!1;if(n.length===0){var r=E(this._fragmentFiber);if(r=a?r[1]||r[0]||_(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=M(r),Qv(e,a);return}if(r=M(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var c=n[r];c.tag===6?(c=M(c),Qv(c,a)):M(c).scrollIntoView(e),r+=a?-1:1}};function XM(e,n){return e=M(e),Kv(e,n),!1}function Kv(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function Jv(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];e.addEventListener(c.type,c.attachedListener,zr(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var y=0,T=0;T<Di.length;T++){var B=Di[T];(B.fragmentInstance!==n||B.observer!==f||B.instance!==e)&&(Di[y++]=B)}Di.length=y,f.observe(e)}),Kv(e,n))}function kM(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];e.removeEventListener(c.type,c.attachedListener,zr(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?HM(n,f,e):f.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function ld(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ld(a),Me(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function qM(e,n,a,r){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[je])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Mi(e.nextSibling),e===null)break}return null}function YM(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Mi(e.nextSibling),e===null))return null;return e}function $v(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Mi(e.nextSibling),e===null))return null;return e}function ud(e){return e.data==="$?"||e.data==="$~"}function cd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function WM(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Mi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var fd=null;function t_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Mi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function e_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function jM(e,n){function a(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return r}function ZM(e){Vv(function(){Vv(function(n){return e(n)})})}function n_(e,n,a){switch(n=rl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function i_(e,n,a){for(var r in a){var c=a[r];a.hasOwnProperty(r)&&c!=null&&Fe(e,n,r,null,TM,c)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Fi&&(e.onclick=null),Me(e)}function hd(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Me(e)}var Ei=new Map,a_=new Set;function ol(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var ya=Pt.d;Pt.d={f:QM,r:KM,D:JM,C:$M,L:tE,m:eE,X:iE,S:nE,M:aE};function QM(){var e=ya.f(),n=qu();return e||n}function KM(e){var n=tn(e);n!==null&&n.tag===5&&n.type==="form"?r0(n):ya.r(e)}var Br=typeof document>"u"?null:document;function s_(e,n,a){var r=Br;if(r&&typeof n=="string"&&n){var c=mi(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),a_.has(c)||(a_.add(c),e={rel:e,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),Nn(n,"link",e),Je(n),r.head.appendChild(n)))}}function JM(e){ya.D(e),s_("dns-prefetch",e,null)}function $M(e,n){ya.C(e,n),s_("preconnect",e,n)}function tE(e,n,a){ya.L(e,n,a);var r=Br;if(r&&e&&n){var c='link[rel="preload"][as="'+mi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+mi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+mi(a.imageSizes)+'"]')):c+='[href="'+mi(e)+'"]';var f=c;switch(n){case"style":f=Ir(e);break;case"script":f=Fr(e)}if(!(Ei.has(f)||(e=P({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ei.set(f,e),r.querySelector(c)!==null||n==="style"&&r.querySelector(ll(f))||n==="script"&&r.querySelector(ul(f))))){var y=r.createElement("link");Nn(y,"link",e),n==="style"&&(y[qe]=!0,y.onload=y.onerror=function(){Pn(y)}),Je(y),r.head.appendChild(y)}}}function eE(e,n){ya.m(e,n);var a=Br;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+mi(r)+'"][href="'+mi(e)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Fr(e)}if(!Ei.has(f)&&(e=P({rel:"modulepreload",href:e},n),Ei.set(f,e),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ul(f)))return}r=a.createElement("link"),Nn(r,"link",e),Je(r),a.head.appendChild(r)}}}function nE(e,n,a){ya.S(e,n,a);var r=Br;if(r&&e){var c=yn(r).hoistableStyles,f=Ir(e);n=n||"default";var y=c.get(f);if(!y){var T={loading:0,preload:null};if(y=r.querySelector(ll(f)))T.loading=5;else{e=P({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ei.get(f))&&dd(e,a);var B=y=r.createElement("link");Je(B),Nn(B,"link",e),B._p=new Promise(function(Z,it){B.onload=Z,B.onerror=it}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Ju(y,n,r)}y={type:"stylesheet",instance:y,count:1,state:T},c.set(f,y)}}}function iE(e,n){ya.X(e,n);var a=Br;if(a&&e){var r=yn(a).hoistableScripts,c=Fr(e),f=r.get(c);f||(f=a.querySelector(ul(c)),f||(e=P({src:e,async:!0},n),(n=Ei.get(c))&&pd(e,n),f=a.createElement("script"),Je(f),Nn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function aE(e,n){ya.M(e,n);var a=Br;if(a&&e){var r=yn(a).hoistableScripts,c=Fr(e),f=r.get(c);f||(f=a.querySelector(ul(c)),f||(e=P({src:e,async:!0,type:"module"},n),(n=Ei.get(c))&&pd(e,n),f=a.createElement("script"),Je(f),Nn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function r_(e,n,a,r){var c=(c=O.current)?ol(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Ir(a.href),n=yn(c).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ir(a.href);var f=yn(c).hoistableStyles,y=f.get(e);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=c.querySelector(ll(e)))?f._p||(y.instance=f,y.state.loading=5):(f=Ei.get(e),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ei.set(e,f)),sE(c,e,f,y.state))),n&&r===null)throw Error(s(528,""));return y}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Fr(a),n=yn(c).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ir(e){return'href="'+mi(e)+'"'}function ll(e){return'link[rel="stylesheet"]['+e+"]"}function o_(e){return P({},e,{"data-precedence":e.precedence,precedence:null})}function sE(e,n,a,r){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[qe]!==!0){r.loading=1;return}}else n=e.createElement("link"),n[qe]=!0,n.onload=n.onerror=Pn.bind(null,n),Nn(n,"link",a),Je(n),e.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Fr(e){return'[src="'+mi(e)+'"]'}function ul(e){return"script[async]"+e}function l_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+mi(a.href)+'"]');if(r)return n.instance=r,Je(r),r;var c=P({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Je(r),Nn(r,"style",c),Ju(r,a.precedence,e),n.instance=r;case"stylesheet":c=Ir(a.href);var f=e.querySelector(ll(c));if(f)return n.state.loading|=4,n.instance=f,Je(f),f;r=o_(a),(c=Ei.get(c))&&dd(r,c),f=(e.ownerDocument||e).createElement("link"),Je(f);var y=f;return y._p=new Promise(function(T,B){y.onload=T,y.onerror=B}),Nn(f,"link",r),n.state.loading|=4,Ju(f,a.precedence,e),n.instance=f;case"script":return f=Fr(a.src),(c=e.querySelector(ul(f)))?(n.instance=c,Je(c),c):(r=a,(c=Ei.get(f))&&(r=P({},a),pd(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),Je(c),Nn(c,"link",r),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Ju(r,a.precedence,e));return n.instance}function Ju(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,y=0;y<r.length;y++){var T=r[y];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function dd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function pd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var $u=null;function u_(e,n,a){if($u===null){var r=new Map,c=$u=new Map;c.set(a,r)}else c=$u,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[je]||f[Ct]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=e+y;var T=r.get(y);T?T.push(f):r.set(y,[f])}}return r}function md(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function rE(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function c_(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function f_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function h_(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function d_(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=h_(n),e.suspenseyImages.push(n)),e=uE.bind(e),n.decode().then(e,e))}function oE(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Ir(r.href),f=n.querySelector(ll(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=cl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,Je(f);return}f=n.ownerDocument||n,r=o_(r),(c=Ei.get(c))&&dd(r,c),f=f.createElement("link"),Je(f);var y=f;y._p=new Promise(function(T,B){y.onload=T,y.onerror=B}),Nn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=cl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var tc=0;function lE(e,n){return e.stylesheets&&e.count===0&&nc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&nc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&tc===0&&(tc=62500*AM());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&nc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>tc?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function p_(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)nc(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function cl(){this.count--,p_(this)}function uE(){this.imgCount--,p_(this)}var ec=null;function nc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ec=new Map,n.forEach(cE,e),ec=null,cl.call(e))}function cE(e,n){if(!(n.state.loading&4)){var a=ec.get(e);if(a)var r=a.get(null);else{a=new Map,ec.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var y=c[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),r=y)}r&&a.set(null,r)}c=n.instance,y=c.getAttribute("data-precedence"),f=a.get(y)||r,f===r&&a.set(null,c),a.set(y,c),this.count++,r=cl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Hr={$$typeof:ft,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function fE(e,n,a,r,c,f,y,T,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bo(0),this.hiddenUpdates=bo(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.transitionTypes=null,this.incompleteTransitions=new Map}function m_(e,n,a,r,c,f,y,T,B,Z,it,dt){return e=new fE(e,n,a,y,B,Z,it,dt,T),n=1,f===!0&&(n|=24),f=Qn(3,null,null,n),e.current=f,f.stateNode=e,n=Df(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Of(f),e}function g_(e){return e?(e=hr,e):hr}function v_(e,n,a,r,c,f){c=g_(c),r.context===null?r.context=c:r.pendingContext=c,r=ka(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=qa(e,r,n),a!==null&&(ti(a,e,n),Vo(a,e,n))}function __(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function gd(e,n){__(e,n),(e=e.alternate)&&__(e,n)}function y_(e){if(e.tag===13||e.tag===31){var n=Es(e,67108864);n!==null&&ti(n,e,67108864),gd(e,67108864)}}function x_(e){if(e.tag===13||e.tag===31){var n=oi();n=st(n);var a=Es(e,n);a!==null&&ti(a,e,n),gd(e,n)}}var Vr=!0;function hE(e,n,a,r){var c=Tt.T;Tt.T=null;var f=Pt.p;try{Pt.p=2,vd(e,n,a,r)}finally{Pt.p=f,Tt.T=c}}function dE(e,n,a,r){var c=Tt.T;Tt.T=null;var f=Pt.p;try{Pt.p=8,vd(e,n,a,r)}finally{Pt.p=f,Tt.T=c}}function vd(e,n,a,r){if(Vr){var c=_d(r);if(c===null)Jh(e,n,r,ic,a),M_(e,r);else if(mE(c,e,n,a,r))r.stopPropagation();else if(M_(e,r),n&4&&-1<pE.indexOf(e)){for(;c!==null;){var f=tn(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=Ii(f.pendingLanes);if(y!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;y;){var B=1<<31-On(y);T.entanglements[1]|=B,y&=~B}Zi(f),(Oe&6)===0&&(Gu=q()+500,il(0))}}break;case 31:case 13:T=Es(f,2),T!==null&&ti(T,f,2),qu(),gd(f,2)}if(f=_d(r),f===null&&Jh(e,n,r,ic,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Jh(e,n,r,null,a)}}function _d(e){return e=nf(e),yd(e)}var ic=null;function yd(e){if(ic=null,e=jt(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ic=e,null}function S_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(zt()){case ct:return 2;case vt:return 8;case Ot:case Bt:return 32;case ce:return 268435456;default:return 32}default:return 32}}var xd=!1,is=null,as=null,ss=null,fl=new Map,hl=new Map,rs=[],pE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function M_(e,n){switch(e){case"focusin":case"focusout":is=null;break;case"dragenter":case"dragleave":as=null;break;case"mouseover":case"mouseout":ss=null;break;case"pointerover":case"pointerout":fl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":hl.delete(n.pointerId)}}function dl(e,n,a,r,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=tn(n),n!==null&&y_(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function mE(e,n,a,r,c){switch(n){case"focusin":return is=dl(is,e,n,a,r,c),!0;case"dragenter":return as=dl(as,e,n,a,r,c),!0;case"mouseover":return ss=dl(ss,e,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return fl.set(f,dl(fl.get(f)||null,e,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,hl.set(f,dl(hl.get(f)||null,e,n,a,r,c)),!0}return!1}function E_(e){var n=jt(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Et(e.priority,function(){x_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Et(e.priority,function(){x_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ac(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=_d(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);ef=r,a.target.dispatchEvent(r),ef=null}else return n=tn(a),n!==null&&y_(n),e.blockedOn=a,!1;n.shift()}return!0}function T_(e,n,a){ac(e)&&a.delete(n)}function gE(){xd=!1,is!==null&&ac(is)&&(is=null),as!==null&&ac(as)&&(as=null),ss!==null&&ac(ss)&&(ss=null),fl.forEach(T_),hl.forEach(T_)}function sc(e,n){e.blockedOn===n&&(e.blockedOn=null,xd||(xd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,gE)))}var rc=null;function b_(e){rc!==e&&(rc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){rc===e&&(rc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],c=e[n+2];if(typeof r!="function"){if(yd(r||a)===null)continue;break}var f=tn(a);f!==null&&(e.splice(n,3),n-=3,eh(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function Gr(e){function n(B){return sc(B,e)}is!==null&&sc(is,e),as!==null&&sc(as,e),ss!==null&&sc(ss,e),fl.forEach(n),hl.forEach(n);for(var a=0;a<rs.length;a++){var r=rs[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<rs.length&&(a=rs[0],a.blockedOn===null);)E_(a),a.blockedOn===null&&rs.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],y=c[Nt]||null;if(typeof f=="function")y||b_(a);else if(y){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,y=f[Nt]||null)T=y.formAction;else if(yd(c)!==null)continue}else T=y.action;typeof T=="function"?a[r+1]=T:(a.splice(r,3),r-=3),b_(a)}}}function A_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(y){return c=y})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Sd(e){this._internalRoot=e}oc.prototype.render=Sd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=oi();v_(a,r,e,n,null,null)},oc.prototype.unmount=Sd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;v_(e.current,2,null,e,null,null),qu(),n[ie]=null}};function oc(e){this._internalRoot=e}oc.prototype.unstable_scheduleHydration=function(e){if(e){var n=$();e={blockedOn:null,target:e,priority:n};for(var a=0;a<rs.length&&n!==0&&n<rs[a].priority;a++);rs.splice(a,0,e),a===0&&E_(e)}};var C_=t.version;if(C_!=="19.3.1")throw Error(s(527,C_,"19.3.1"));Pt.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=g(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var vE={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Tt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lc.isDisabled&&lc.supportsFiber)try{Re=lc.inject(vE),Ke=lc}catch{}}return ml.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",c=g0,f=v0,y=_0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=m_(e,1,!1,null,null,a,r,null,c,f,y,A_),e[ie]=n.current,Kh(e),new Sd(n)},ml.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,c="",f=g0,y=v0,T=_0,B=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=m_(e,1,!0,n,a??null,r,c,B,f,y,T,A_),n.context=g_(null),a=n.current,r=oi(),r=st(r),c=ka(r),c.callback=null,qa(a,c,r),a=r,n.current.lanes=a,xs(n,a),Zi(n),e[ie]=n.current,Kh(e),new oc(n)},ml.version="19.3.1",ml}var B_;function CE(){if(B_)return Td.exports;B_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Td.exports=AE(),Td.exports}var RE=CE();const KR=Zy(RE);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wE=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),DE=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,s)=>s?s.toUpperCase():i.toLowerCase()),I_=o=>{const t=DE(o);return t.charAt(0).toUpperCase()+t.slice(1)},Qy=(...o)=>o.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim(),NE=o=>{for(const t in o)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var UE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LE=hi.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:h,...d},p)=>hi.createElement("svg",{ref:p,...UE,width:t,height:t,stroke:o,strokeWidth:s?Number(i)*24/Number(t):i,className:Qy("lucide",l),...!u&&!NE(d)&&{"aria-hidden":"true"},...d},[...h.map(([g,v])=>hi.createElement(g,v)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=(o,t)=>{const i=hi.forwardRef(({className:s,...l},u)=>hi.createElement(LE,{ref:u,iconNode:t,className:Qy(`lucide-${wE(I_(o))}`,`lucide-${o}`,s),...l}));return i.displayName=I_(o),i};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OE=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],PE=Bl("award",OE);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],BE=Bl("building-2",zE);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IE=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],FE=Bl("cpu",IE);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],VE=Bl("earth",HE);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]],XE=Bl("fingerprint",GE),F_=[{id:"dong-son",name:"Trống Đồng Hoàng Gia 3D",subtitle:"Lễ Tân Nhà Nước & Khánh Tiết",badge:"Khuyên dùng",description:"Mặt Trống Đồng Đông Sơn 3D xoay đa tầng kết hợp vòng hào quang Mặt Trời Lạc Việt, tông Đỏ Lễ Tiết & Vàng Kim trang nghiêm.",colors:{primary:"#f5c542",secondary:"#b91c1c",accent:"#fde047",bgTop:"#240507",bgBottom:"#0c0102",particle:"#ffd75e",grid:"#7f1d1d",bloomStrength:.95},defaults:{eventBadge:"ỦY BAN NHÂN DÂN • NGÀY HỘI CHUYỂN ĐỔI SỐ",eventTitle:"NGHI THỨC KÍCH HOẠT CHUYỂN ĐỔI SỐ",eventSubtitle:"CHÍNH QUYỀN SỐ MINH BẠCH - DOANH NGHIỆP BỨT PHÁ - PHỤC VỤ NHÂN DÂN",celebrationTitle:"CHÍNH THỨC KÍCH HOẠT THÀNH CÔNG",celebrationDesc:"ĐỔI MỚI SÁNG TẠO - VƯƠN MÌNH - PHÁT TRIỂN BỀN VỮNG"}},{id:"holo-globe",name:"Quả Cầu Số Hologram 3D",subtitle:"Chuyển Đổi Số & Kết Nối Dữ Liệu",badge:"Công nghệ cao",description:"Địa cầu mạng lưới dữ liệu 3D phát sáng với các quỹ đạo vệ tinh và nút kết nối Cyan-Xanh dương hiện đại.",colors:{primary:"#38bdf8",secondary:"#0369a1",accent:"#a5f3fc",bgTop:"#031327",bgBottom:"#010611",particle:"#67e8f9",grid:"#0c4a6e",bloomStrength:1.1},defaults:{eventBadge:"CHUYỂN ĐỔI SỐ QUỐC GIA • KẾT NỐI TƯƠNG LAI",eventTitle:"KÍCH HOẠT HỆ SINH THÁI DỮ LIỆU SỐ",eventSubtitle:"DỮ LIỆU ĐÚNG ĐỦ SẠCH SỐNG - VẬN HÀNH THÔNG MINH - KẾT NỐI TOÀN DIỆN",celebrationTitle:"KÍCH HOẠT HỆ THỐNG SỐ THÀNH CÔNG",celebrationDesc:"KẾT NỐI ĐỒNG BỘ - KIẾN TẠO TƯƠNG LAI SỐ"}},{id:"smart-city",name:"Đô Thị Thông Minh 3D",subtitle:"Key Moment Sân Khấu LED",badge:"Sân khấu LED",description:"Quần thể kiến trúc Smart City 3D nổi khối trên sàn lưới năng lượng, tia sáng hội tụ mạnh mẽ về lõi trung tâm.",colors:{primary:"#fbbf24",secondary:"#1d4ed8",accent:"#60a5fa",bgTop:"#0b142c",bgBottom:"#030612",particle:"#fcd34d",grid:"#1e3a8a",bloomStrength:1},defaults:{eventBadge:"THÀNH PHỐ THÔNG MINH • DỊCH VỤ CÔNG TRỰC TUYẾN",eventTitle:"KHỞI ĐỘNG ĐÔ THỊ THÔNG MINH",eventSubtitle:"HẠ TẦNG HIỆN ĐẠI - ĐIỀU HÀNH TẬP TRUNG - PHỤC VỤ NGƯỜI DÂN",celebrationTitle:"VẬN HÀNH ĐÔ THỊ THÔNG MINH",celebrationDesc:"HIỆN ĐẠI - AN TOÀN - THÂN THIỆN - BỀN VỮNG"}},{id:"crystal-core",name:"Lõi Pha Lê Năng Lượng 3D",subtitle:"Khởi Công, Khánh Thành & Ra Mắt",badge:"Sang trọng",description:"Khối tinh thể năng lượng 3D lơ lửng trong vòng từ trường đa trục, hiệu ứng phản chiếu kim loại và pháo hoa vàng kim.",colors:{primary:"#f59e0b",secondary:"#4c1d95",accent:"#fef08a",bgTop:"#160b29",bgBottom:"#06030d",particle:"#fde68a",grid:"#4c1d95",bloomStrength:1.05},defaults:{eventBadge:"SỰ KIỆN TRỌNG ĐẠI • DẤU ẤN TIÊN PHONG",eventTitle:"NGHI THỨC KHỞI ĐỘNG DỰ ÁN MỚI",eventSubtitle:"TẦM NHÌN CHIẾN LƯỢC - ĐỒNG LÒNG KIẾN TẠO - BỨT PHÁ THÀNH CÔNG",celebrationTitle:"CHÍNH THỨC KHỞI ĐỘNG THÀNH CÔNG",celebrationDesc:"KHỞI ĐẦU VỮNG CHẮC - VƯƠN TẦM CAO MỚI"}},{id:"custom-ceremony",name:"Tự Thiết Kế Mẫu Lễ Khai Mạc",subtitle:"Custom Bàn Tay Chạm & Video Trình Chiếu",badge:"Tự Custom",isCustom:!0,description:"Tải ảnh bàn tay chạm riêng, video chạy nền và video trình chiếu khi nhấn Bắt đầu kèm hiệu ứng bàn tay phát sáng rực rỡ.",colors:{primary:"#f5c542",secondary:"#7e22ce",accent:"#fde047",bgTop:"#160a24",bgBottom:"#05020a",particle:"#facc15",grid:"#581c87",bloomStrength:1},defaults:{eventBadge:"LỄ KHAI MẠC • NGHI THỨC CHẠM TAY KÍCH HOẠT",eventTitle:"NGHI THỨC KHAI MẠC SỰ KIỆN",eventSubtitle:"ĐỒNG HÀNH PHÁT TRIỂN - BỨT PHÁ THÀNH CÔNG",celebrationTitle:"CHÚC MỪNG KHAI MẠC THÀNH CÔNG",celebrationDesc:"KHỞI ĐẦU RỰC RỠ - VỮNG BƯỚC TƯƠNG LAI"}}];function Kp(o){return F_.find(t=>t.id===o)||F_[0]}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jp="176",kE=0,H_=1,qE=2,Ky=1,YE=2,ba=3,gs=0,Zn=1,Oi=2,wa=0,lo=1,tr=2,V_=3,G_=4,WE=5,Zs=100,jE=101,ZE=102,QE=103,KE=104,JE=200,$E=201,tT=202,eT=203,lp=204,up=205,nT=206,iT=207,aT=208,sT=209,rT=210,oT=211,lT=212,uT=213,cT=214,cp=0,fp=1,hp=2,co=3,dp=4,pp=5,mp=6,gp=7,Jy=0,fT=1,hT=2,ms=0,$y=1,tx=2,ex=3,$p=4,nx=5,ix=6,ax=7,sx=300,fo=301,ho=302,vp=303,_p=304,Wc=306,wl=1e3,Ks=1001,yp=1002,di=1003,dT=1004,uc=1005,Ji=1006,Rd=1007,Js=1008,ta=1009,rx=1010,ox=1011,Dl=1012,tm=1013,er=1014,$i=1015,Da=1016,em=1017,nm=1018,Nl=1020,lx=35902,ux=1021,cx=1022,zi=1023,Ul=1026,Ll=1027,im=1028,am=1029,fx=1030,sm=1031,rm=1033,Pc=33776,zc=33777,Bc=33778,Ic=33779,xp=35840,Sp=35841,Mp=35842,Ep=35843,Tp=36196,bp=37492,Ap=37496,Cp=37808,Rp=37809,wp=37810,Dp=37811,Np=37812,Up=37813,Lp=37814,Op=37815,Pp=37816,zp=37817,Bp=37818,Ip=37819,Fp=37820,Hp=37821,Fc=36492,Vp=36494,Gp=36495,hx=36283,Xp=36284,kp=36285,qp=36286,pT=3200,mT=3201,dx=0,gT=1,ps="",Fn="srgb",po="srgb-linear",Xc="linear",He="srgb",Xr=7680,X_=519,vT=512,_T=513,yT=514,px=515,xT=516,ST=517,MT=518,ET=519,k_=35044,q_="300 es",Ca=2e3,kc=2001;class vo{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Y_=1234567;const bl=Math.PI/180,Ol=180/Math.PI;function _o(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Bn[o&255]+Bn[o>>8&255]+Bn[o>>16&255]+Bn[o>>24&255]+"-"+Bn[t&255]+Bn[t>>8&255]+"-"+Bn[t>>16&15|64]+Bn[t>>24&255]+"-"+Bn[i&63|128]+Bn[i>>8&255]+"-"+Bn[i>>16&255]+Bn[i>>24&255]+Bn[s&255]+Bn[s>>8&255]+Bn[s>>16&255]+Bn[s>>24&255]).toLowerCase()}function ye(o,t,i){return Math.max(t,Math.min(i,o))}function om(o,t){return(o%t+t)%t}function TT(o,t,i,s,l){return s+(o-t)*(l-s)/(i-t)}function bT(o,t,i){return o!==t?(i-o)/(t-o):0}function Al(o,t,i){return(1-i)*o+i*t}function AT(o,t,i,s){return Al(o,t,1-Math.exp(-i*s))}function CT(o,t=1){return t-Math.abs(om(o,t*2)-t)}function RT(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*(3-2*o))}function wT(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*o*(o*(o*6-15)+10))}function DT(o,t){return o+Math.floor(Math.random()*(t-o+1))}function NT(o,t){return o+Math.random()*(t-o)}function UT(o){return o*(.5-Math.random())}function LT(o){o!==void 0&&(Y_=o);let t=Y_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function OT(o){return o*bl}function PT(o){return o*Ol}function zT(o){return(o&o-1)===0&&o!==0}function BT(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function IT(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function FT(o,t,i,s,l){const u=Math.cos,h=Math.sin,d=u(i/2),p=h(i/2),g=u((t+s)/2),v=h((t+s)/2),m=u((t-s)/2),_=h((t-s)/2),S=u((s-t)/2),E=h((s-t)/2);switch(l){case"XYX":o.set(d*v,p*m,p*_,d*g);break;case"YZY":o.set(p*_,d*v,p*m,d*g);break;case"ZXZ":o.set(p*m,p*_,d*v,d*g);break;case"XZX":o.set(d*v,p*E,p*S,d*g);break;case"YXY":o.set(p*S,d*v,p*E,d*g);break;case"ZYZ":o.set(p*E,p*S,d*v,d*g);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function ro(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function qn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const kr={DEG2RAD:bl,RAD2DEG:Ol,generateUUID:_o,clamp:ye,euclideanModulo:om,mapLinear:TT,inverseLerp:bT,lerp:Al,damp:AT,pingpong:CT,smoothstep:RT,smootherstep:wT,randInt:DT,randFloat:NT,randFloatSpread:UT,seededRandom:LT,degToRad:OT,radToDeg:PT,isPowerOfTwo:zT,ceilPowerOfTwo:BT,floorPowerOfTwo:IT,setQuaternionFromProperEuler:FT,normalize:qn,denormalize:ro};class Xt{constructor(t=0,i=0){Xt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ye(this.x,t.x,i.x),this.y=ye(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ye(this.x,t,i),this.y=ye(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ye(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*s-h*l+t.x,this.y=u*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ge{constructor(t,i,s,l,u,h,d,p,g){ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,p,g)}set(t,i,s,l,u,h,d,p,g){const v=this.elements;return v[0]=t,v[1]=l,v[2]=d,v[3]=i,v[4]=u,v[5]=p,v[6]=s,v[7]=h,v[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],p=s[6],g=s[1],v=s[4],m=s[7],_=s[2],S=s[5],E=s[8],b=l[0],M=l[3],x=l[6],w=l[1],L=l[4],A=l[7],H=l[2],z=l[5],P=l[8];return u[0]=h*b+d*w+p*H,u[3]=h*M+d*L+p*z,u[6]=h*x+d*A+p*P,u[1]=g*b+v*w+m*H,u[4]=g*M+v*L+m*z,u[7]=g*x+v*A+m*P,u[2]=_*b+S*w+E*H,u[5]=_*M+S*L+E*z,u[8]=_*x+S*A+E*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],g=t[7],v=t[8];return i*h*v-i*d*g-s*u*v+s*d*p+l*u*g-l*h*p}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],g=t[7],v=t[8],m=v*h-d*g,_=d*p-v*u,S=g*u-h*p,E=i*m+s*_+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=m*b,t[1]=(l*g-v*s)*b,t[2]=(d*s-l*h)*b,t[3]=_*b,t[4]=(v*i-l*p)*b,t[5]=(l*u-d*i)*b,t[6]=S*b,t[7]=(s*p-g*i)*b,t[8]=(h*i-s*u)*b,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,h,d){const p=Math.cos(u),g=Math.sin(u);return this.set(s*p,s*g,-s*(p*h+g*d)+h+t,-l*g,l*p,-l*(-g*h+p*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(wd.makeScale(t,i)),this}rotate(t){return this.premultiply(wd.makeRotation(-t)),this}translate(t,i){return this.premultiply(wd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wd=new ge;function mx(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Pl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function HT(){const o=Pl("canvas");return o.style.display="block",o}const W_={};function Hc(o){o in W_||(W_[o]=!0,console.warn(o))}function VT(o,t,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}function GT(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function XT(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const j_=new ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Z_=new ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kT(){const o={enabled:!0,workingColorSpace:po,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===He&&(l.r=Na(l.r),l.g=Na(l.g),l.b=Na(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===He&&(l.r=uo(l.r),l.g=uo(l.g),l.b=uo(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ps?Xc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[po]:{primaries:t,whitePoint:s,transfer:Xc,toXYZ:j_,fromXYZ:Z_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Fn},outputColorSpaceConfig:{drawingBufferColorSpace:Fn}},[Fn]:{primaries:t,whitePoint:s,transfer:He,toXYZ:j_,fromXYZ:Z_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Fn}}}),o}const Ue=kT();function Na(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function uo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let qr;class qT{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{qr===void 0&&(qr=Pl("canvas")),qr.width=t.width,qr.height=t.height;const l=qr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=qr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Pl("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=Na(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Na(i[s]/255)*255):i[s]=Na(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let YT=0;class lm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:YT++}),this.uuid=_o(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Dd(l[h].image)):u.push(Dd(l[h]))}else u=Dd(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function Dd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?qT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let WT=0;class Ln extends vo{constructor(t=Ln.DEFAULT_IMAGE,i=Ln.DEFAULT_MAPPING,s=Ks,l=Ks,u=Ji,h=Js,d=zi,p=ta,g=Ln.DEFAULT_ANISOTROPY,v=ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:WT++}),this.uuid=_o(),this.name="",this.source=new lm(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=g,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wl:t.x=t.x-Math.floor(t.x);break;case Ks:t.x=t.x<0?0:1;break;case yp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wl:t.y=t.y-Math.floor(t.y);break;case Ks:t.y=t.y<0?0:1;break;case yp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=sx;Ln.DEFAULT_ANISOTROPY=1;class Xe{constructor(t=0,i=0,s=0,l=1){Xe.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const p=t.elements,g=p[0],v=p[4],m=p[8],_=p[1],S=p[5],E=p[9],b=p[2],M=p[6],x=p[10];if(Math.abs(v-_)<.01&&Math.abs(m-b)<.01&&Math.abs(E-M)<.01){if(Math.abs(v+_)<.1&&Math.abs(m+b)<.1&&Math.abs(E+M)<.1&&Math.abs(g+S+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(g+1)/2,A=(S+1)/2,H=(x+1)/2,z=(v+_)/4,P=(m+b)/4,I=(E+M)/4;return L>A&&L>H?L<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(L),l=z/s,u=P/s):A>H?A<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(A),s=z/l,u=I/l):H<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(H),s=P/u,l=I/u),this.set(s,l,u,i),this}let w=Math.sqrt((M-E)*(M-E)+(m-b)*(m-b)+(_-v)*(_-v));return Math.abs(w)<.001&&(w=1),this.x=(M-E)/w,this.y=(m-b)/w,this.z=(_-v)/w,this.w=Math.acos((g+S+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ye(this.x,t.x,i.x),this.y=ye(this.y,t.y,i.y),this.z=ye(this.z,t.z,i.z),this.w=ye(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ye(this.x,t,i),this.y=ye(this.y,t,i),this.z=ye(this.z,t,i),this.w=ye(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jT extends vo{constructor(t=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth?s.depth:1,this.scissor=new Xe(0,0,t,i),this.scissorTest=!1,this.viewport=new Xe(0,0,t,i);const l={width:t,height:i,depth:this.depth};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ji,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},s);const u=new Ln(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);u.flipY=!1,u.generateMipmaps=s.generateMipmaps,u.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new lm(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends jT{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class gx extends Ln{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=di,this.minFilter=di,this.wrapR=Ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ZT extends Ln{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=di,this.minFilter=di,this.wrapR=Ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Il{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,h,d){let p=s[l+0],g=s[l+1],v=s[l+2],m=s[l+3];const _=u[h+0],S=u[h+1],E=u[h+2],b=u[h+3];if(d===0){t[i+0]=p,t[i+1]=g,t[i+2]=v,t[i+3]=m;return}if(d===1){t[i+0]=_,t[i+1]=S,t[i+2]=E,t[i+3]=b;return}if(m!==b||p!==_||g!==S||v!==E){let M=1-d;const x=p*_+g*S+v*E+m*b,w=x>=0?1:-1,L=1-x*x;if(L>Number.EPSILON){const H=Math.sqrt(L),z=Math.atan2(H,x*w);M=Math.sin(M*z)/H,d=Math.sin(d*z)/H}const A=d*w;if(p=p*M+_*A,g=g*M+S*A,v=v*M+E*A,m=m*M+b*A,M===1-d){const H=1/Math.sqrt(p*p+g*g+v*v+m*m);p*=H,g*=H,v*=H,m*=H}}t[i]=p,t[i+1]=g,t[i+2]=v,t[i+3]=m}static multiplyQuaternionsFlat(t,i,s,l,u,h){const d=s[l],p=s[l+1],g=s[l+2],v=s[l+3],m=u[h],_=u[h+1],S=u[h+2],E=u[h+3];return t[i]=d*E+v*m+p*S-g*_,t[i+1]=p*E+v*_+g*m-d*S,t[i+2]=g*E+v*S+d*_-p*m,t[i+3]=v*E-d*m-p*_-g*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,p=Math.sin,g=d(s/2),v=d(l/2),m=d(u/2),_=p(s/2),S=p(l/2),E=p(u/2);switch(h){case"XYZ":this._x=_*v*m+g*S*E,this._y=g*S*m-_*v*E,this._z=g*v*E+_*S*m,this._w=g*v*m-_*S*E;break;case"YXZ":this._x=_*v*m+g*S*E,this._y=g*S*m-_*v*E,this._z=g*v*E-_*S*m,this._w=g*v*m+_*S*E;break;case"ZXY":this._x=_*v*m-g*S*E,this._y=g*S*m+_*v*E,this._z=g*v*E+_*S*m,this._w=g*v*m-_*S*E;break;case"ZYX":this._x=_*v*m-g*S*E,this._y=g*S*m+_*v*E,this._z=g*v*E-_*S*m,this._w=g*v*m+_*S*E;break;case"YZX":this._x=_*v*m+g*S*E,this._y=g*S*m+_*v*E,this._z=g*v*E-_*S*m,this._w=g*v*m-_*S*E;break;case"XZY":this._x=_*v*m-g*S*E,this._y=g*S*m-_*v*E,this._z=g*v*E+_*S*m,this._w=g*v*m+_*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],p=i[9],g=i[2],v=i[6],m=i[10],_=s+d+m;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(v-p)*S,this._y=(u-g)*S,this._z=(h-l)*S}else if(s>d&&s>m){const S=2*Math.sqrt(1+s-d-m);this._w=(v-p)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(u+g)/S}else if(d>m){const S=2*Math.sqrt(1+d-s-m);this._w=(u-g)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(p+v)/S}else{const S=2*Math.sqrt(1+m-s-d);this._w=(h-l)/S,this._x=(u+g)/S,this._y=(p+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,h=t._w,d=i._x,p=i._y,g=i._z,v=i._w;return this._x=s*v+h*d+l*g-u*p,this._y=l*v+h*p+u*d-s*g,this._z=u*v+h*g+s*p-l*d,this._w=h*v-s*d-l*p-u*g,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-i;return this._w=S*h+i*this._w,this._x=S*s+i*this._x,this._y=S*l+i*this._y,this._z=S*u+i*this._z,this.normalize(),this}const g=Math.sqrt(p),v=Math.atan2(g,d),m=Math.sin((1-i)*v)/g,_=Math.sin(i*v)/g;return this._w=h*m+this._w*_,this._x=s*m+this._x*_,this._y=l*m+this._y*_,this._z=u*m+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(t=0,i=0,s=0){G.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Q_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Q_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,h=t.y,d=t.z,p=t.w,g=2*(h*l-d*s),v=2*(d*i-u*l),m=2*(u*s-h*i);return this.x=i+p*g+h*m-d*v,this.y=s+p*v+d*g-u*m,this.z=l+p*m+u*v-h*g,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ye(this.x,t.x,i.x),this.y=ye(this.y,t.y,i.y),this.z=ye(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ye(this.x,t,i),this.y=ye(this.y,t,i),this.z=ye(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-u*d,this.y=u*h-s*p,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Nd.copy(this).projectOnVector(t),this.sub(Nd)}reflect(t){return this.sub(Nd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ye(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nd=new G,Q_=new Il;class nr{constructor(t=new G(1/0,1/0,1/0),i=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ni.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ni.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ni.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Ni):Ni.fromBufferAttribute(u,h),Ni.applyMatrix4(t.matrixWorld),this.expandByPoint(Ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),cc.copy(s.boundingBox)),cc.applyMatrix4(t.matrixWorld),this.union(cc)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ni),Ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gl),fc.subVectors(this.max,gl),Yr.subVectors(t.a,gl),Wr.subVectors(t.b,gl),jr.subVectors(t.c,gl),ls.subVectors(Wr,Yr),us.subVectors(jr,Wr),Vs.subVectors(Yr,jr);let i=[0,-ls.z,ls.y,0,-us.z,us.y,0,-Vs.z,Vs.y,ls.z,0,-ls.x,us.z,0,-us.x,Vs.z,0,-Vs.x,-ls.y,ls.x,0,-us.y,us.x,0,-Vs.y,Vs.x,0];return!Ud(i,Yr,Wr,jr,fc)||(i=[1,0,0,0,1,0,0,0,1],!Ud(i,Yr,Wr,jr,fc))?!1:(hc.crossVectors(ls,us),i=[hc.x,hc.y,hc.z],Ud(i,Yr,Wr,jr,fc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const xa=[new G,new G,new G,new G,new G,new G,new G,new G],Ni=new G,cc=new nr,Yr=new G,Wr=new G,jr=new G,ls=new G,us=new G,Vs=new G,gl=new G,fc=new G,hc=new G,Gs=new G;function Ud(o,t,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){Gs.fromArray(o,u);const d=l.x*Math.abs(Gs.x)+l.y*Math.abs(Gs.y)+l.z*Math.abs(Gs.z),p=t.dot(Gs),g=i.dot(Gs),v=s.dot(Gs);if(Math.max(-Math.max(p,g,v),Math.min(p,g,v))>d)return!1}return!0}const QT=new nr,vl=new G,Ld=new G;class yo{constructor(t=new G,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):QT.setFromPoints(t).getCenter(s);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vl.subVectors(t,this.center);const i=vl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(vl,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ld.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vl.copy(t.center).add(Ld)),this.expandByPoint(vl.copy(t.center).sub(Ld))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sa=new G,Od=new G,dc=new G,cs=new G,Pd=new G,pc=new G,zd=new G;class vx{constructor(t=new G,i=new G(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Sa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Sa.copy(this.origin).addScaledVector(this.direction,i),Sa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Od.copy(t).add(i).multiplyScalar(.5),dc.copy(i).sub(t).normalize(),cs.copy(this.origin).sub(Od);const u=t.distanceTo(i)*.5,h=-this.direction.dot(dc),d=cs.dot(this.direction),p=-cs.dot(dc),g=cs.lengthSq(),v=Math.abs(1-h*h);let m,_,S,E;if(v>0)if(m=h*p-d,_=h*d-p,E=u*v,m>=0)if(_>=-E)if(_<=E){const b=1/v;m*=b,_*=b,S=m*(m+h*_+2*d)+_*(h*m+_+2*p)+g}else _=u,m=Math.max(0,-(h*_+d)),S=-m*m+_*(_+2*p)+g;else _=-u,m=Math.max(0,-(h*_+d)),S=-m*m+_*(_+2*p)+g;else _<=-E?(m=Math.max(0,-(-h*u+d)),_=m>0?-u:Math.min(Math.max(-u,-p),u),S=-m*m+_*(_+2*p)+g):_<=E?(m=0,_=Math.min(Math.max(-u,-p),u),S=_*(_+2*p)+g):(m=Math.max(0,-(h*u+d)),_=m>0?u:Math.min(Math.max(-u,-p),u),S=-m*m+_*(_+2*p)+g);else _=h>0?-u:u,m=Math.max(0,-(h*_+d)),S=-m*m+_*(_+2*p)+g;return s&&s.copy(this.origin).addScaledVector(this.direction,m),l&&l.copy(Od).addScaledVector(dc,_),S}intersectSphere(t,i){Sa.subVectors(t.center,this.origin);const s=Sa.dot(this.direction),l=Sa.dot(Sa)-s*s,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,p=s+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,h,d,p;const g=1/this.direction.x,v=1/this.direction.y,m=1/this.direction.z,_=this.origin;return g>=0?(s=(t.min.x-_.x)*g,l=(t.max.x-_.x)*g):(s=(t.max.x-_.x)*g,l=(t.min.x-_.x)*g),v>=0?(u=(t.min.y-_.y)*v,h=(t.max.y-_.y)*v):(u=(t.max.y-_.y)*v,h=(t.min.y-_.y)*v),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),m>=0?(d=(t.min.z-_.z)*m,p=(t.max.z-_.z)*m):(d=(t.max.z-_.z)*m,p=(t.min.z-_.z)*m),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Sa)!==null}intersectTriangle(t,i,s,l,u){Pd.subVectors(i,t),pc.subVectors(s,t),zd.crossVectors(Pd,pc);let h=this.direction.dot(zd),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;cs.subVectors(this.origin,t);const p=d*this.direction.dot(pc.crossVectors(cs,pc));if(p<0)return null;const g=d*this.direction.dot(Pd.cross(cs));if(g<0||p+g>h)return null;const v=-d*cs.dot(zd);return v<0?null:this.at(v/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(t,i,s,l,u,h,d,p,g,v,m,_,S,E,b,M){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,p,g,v,m,_,S,E,b,M)}set(t,i,s,l,u,h,d,p,g,v,m,_,S,E,b,M){const x=this.elements;return x[0]=t,x[4]=i,x[8]=s,x[12]=l,x[1]=u,x[5]=h,x[9]=d,x[13]=p,x[2]=g,x[6]=v,x[10]=m,x[14]=_,x[3]=S,x[7]=E,x[11]=b,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/Zr.setFromMatrixColumn(t,0).length(),u=1/Zr.setFromMatrixColumn(t,1).length(),h=1/Zr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,h=Math.cos(s),d=Math.sin(s),p=Math.cos(l),g=Math.sin(l),v=Math.cos(u),m=Math.sin(u);if(t.order==="XYZ"){const _=h*v,S=h*m,E=d*v,b=d*m;i[0]=p*v,i[4]=-p*m,i[8]=g,i[1]=S+E*g,i[5]=_-b*g,i[9]=-d*p,i[2]=b-_*g,i[6]=E+S*g,i[10]=h*p}else if(t.order==="YXZ"){const _=p*v,S=p*m,E=g*v,b=g*m;i[0]=_+b*d,i[4]=E*d-S,i[8]=h*g,i[1]=h*m,i[5]=h*v,i[9]=-d,i[2]=S*d-E,i[6]=b+_*d,i[10]=h*p}else if(t.order==="ZXY"){const _=p*v,S=p*m,E=g*v,b=g*m;i[0]=_-b*d,i[4]=-h*m,i[8]=E+S*d,i[1]=S+E*d,i[5]=h*v,i[9]=b-_*d,i[2]=-h*g,i[6]=d,i[10]=h*p}else if(t.order==="ZYX"){const _=h*v,S=h*m,E=d*v,b=d*m;i[0]=p*v,i[4]=E*g-S,i[8]=_*g+b,i[1]=p*m,i[5]=b*g+_,i[9]=S*g-E,i[2]=-g,i[6]=d*p,i[10]=h*p}else if(t.order==="YZX"){const _=h*p,S=h*g,E=d*p,b=d*g;i[0]=p*v,i[4]=b-_*m,i[8]=E*m+S,i[1]=m,i[5]=h*v,i[9]=-d*v,i[2]=-g*v,i[6]=S*m+E,i[10]=_-b*m}else if(t.order==="XZY"){const _=h*p,S=h*g,E=d*p,b=d*g;i[0]=p*v,i[4]=-m,i[8]=g*v,i[1]=_*m+b,i[5]=h*v,i[9]=S*m-E,i[2]=E*m-S,i[6]=d*v,i[10]=b*m+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(KT,t,JT)}lookAt(t,i,s){const l=this.elements;return ui.subVectors(t,i),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),fs.crossVectors(s,ui),fs.lengthSq()===0&&(Math.abs(s.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),fs.crossVectors(s,ui)),fs.normalize(),mc.crossVectors(ui,fs),l[0]=fs.x,l[4]=mc.x,l[8]=ui.x,l[1]=fs.y,l[5]=mc.y,l[9]=ui.y,l[2]=fs.z,l[6]=mc.z,l[10]=ui.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],p=s[8],g=s[12],v=s[1],m=s[5],_=s[9],S=s[13],E=s[2],b=s[6],M=s[10],x=s[14],w=s[3],L=s[7],A=s[11],H=s[15],z=l[0],P=l[4],I=l[8],D=l[12],R=l[1],V=l[5],nt=l[9],at=l[13],lt=l[2],ft=l[6],k=l[10],ot=l[14],K=l[3],yt=l[7],St=l[11],Ft=l[15];return u[0]=h*z+d*R+p*lt+g*K,u[4]=h*P+d*V+p*ft+g*yt,u[8]=h*I+d*nt+p*k+g*St,u[12]=h*D+d*at+p*ot+g*Ft,u[1]=v*z+m*R+_*lt+S*K,u[5]=v*P+m*V+_*ft+S*yt,u[9]=v*I+m*nt+_*k+S*St,u[13]=v*D+m*at+_*ot+S*Ft,u[2]=E*z+b*R+M*lt+x*K,u[6]=E*P+b*V+M*ft+x*yt,u[10]=E*I+b*nt+M*k+x*St,u[14]=E*D+b*at+M*ot+x*Ft,u[3]=w*z+L*R+A*lt+H*K,u[7]=w*P+L*V+A*ft+H*yt,u[11]=w*I+L*nt+A*k+H*St,u[15]=w*D+L*at+A*ot+H*Ft,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],h=t[1],d=t[5],p=t[9],g=t[13],v=t[2],m=t[6],_=t[10],S=t[14],E=t[3],b=t[7],M=t[11],x=t[15];return E*(+u*p*m-l*g*m-u*d*_+s*g*_+l*d*S-s*p*S)+b*(+i*p*S-i*g*_+u*h*_-l*h*S+l*g*v-u*p*v)+M*(+i*g*m-i*d*S-u*h*m+s*h*S+u*d*v-s*g*v)+x*(-l*d*v-i*p*m+i*d*_+l*h*m-s*h*_+s*p*v)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],g=t[7],v=t[8],m=t[9],_=t[10],S=t[11],E=t[12],b=t[13],M=t[14],x=t[15],w=m*M*g-b*_*g+b*p*S-d*M*S-m*p*x+d*_*x,L=E*_*g-v*M*g-E*p*S+h*M*S+v*p*x-h*_*x,A=v*b*g-E*m*g+E*d*S-h*b*S-v*d*x+h*m*x,H=E*m*p-v*b*p-E*d*_+h*b*_+v*d*M-h*m*M,z=i*w+s*L+l*A+u*H;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/z;return t[0]=w*P,t[1]=(b*_*u-m*M*u-b*l*S+s*M*S+m*l*x-s*_*x)*P,t[2]=(d*M*u-b*p*u+b*l*g-s*M*g-d*l*x+s*p*x)*P,t[3]=(m*p*u-d*_*u-m*l*g+s*_*g+d*l*S-s*p*S)*P,t[4]=L*P,t[5]=(v*M*u-E*_*u+E*l*S-i*M*S-v*l*x+i*_*x)*P,t[6]=(E*p*u-h*M*u-E*l*g+i*M*g+h*l*x-i*p*x)*P,t[7]=(h*_*u-v*p*u+v*l*g-i*_*g-h*l*S+i*p*S)*P,t[8]=A*P,t[9]=(E*m*u-v*b*u-E*s*S+i*b*S+v*s*x-i*m*x)*P,t[10]=(h*b*u-E*d*u+E*s*g-i*b*g-h*s*x+i*d*x)*P,t[11]=(v*d*u-h*m*u-v*s*g+i*m*g+h*s*S-i*d*S)*P,t[12]=H*P,t[13]=(v*b*l-E*m*l+E*s*_-i*b*_-v*s*M+i*m*M)*P,t[14]=(E*d*l-h*b*l-E*s*p+i*b*p+h*s*M-i*d*M)*P,t[15]=(h*m*l-v*d*l+v*s*p-i*m*p-h*s*_+i*d*_)*P,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=t.x,d=t.y,p=t.z,g=u*h,v=u*d;return this.set(g*h+s,g*d-l*p,g*p+l*d,0,g*d+l*p,v*d+s,v*p-l*h,0,g*p-l*d,v*p+l*h,u*p*p+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,h){return this.set(1,s,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,p=i._w,g=u+u,v=h+h,m=d+d,_=u*g,S=u*v,E=u*m,b=h*v,M=h*m,x=d*m,w=p*g,L=p*v,A=p*m,H=s.x,z=s.y,P=s.z;return l[0]=(1-(b+x))*H,l[1]=(S+A)*H,l[2]=(E-L)*H,l[3]=0,l[4]=(S-A)*z,l[5]=(1-(_+x))*z,l[6]=(M+w)*z,l[7]=0,l[8]=(E+L)*P,l[9]=(M-w)*P,l[10]=(1-(_+b))*P,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let u=Zr.set(l[0],l[1],l[2]).length();const h=Zr.set(l[4],l[5],l[6]).length(),d=Zr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],Ui.copy(this);const g=1/u,v=1/h,m=1/d;return Ui.elements[0]*=g,Ui.elements[1]*=g,Ui.elements[2]*=g,Ui.elements[4]*=v,Ui.elements[5]*=v,Ui.elements[6]*=v,Ui.elements[8]*=m,Ui.elements[9]*=m,Ui.elements[10]*=m,i.setFromRotationMatrix(Ui),s.x=u,s.y=h,s.z=d,this}makePerspective(t,i,s,l,u,h,d=Ca){const p=this.elements,g=2*u/(i-t),v=2*u/(s-l),m=(i+t)/(i-t),_=(s+l)/(s-l);let S,E;if(d===Ca)S=-(h+u)/(h-u),E=-2*h*u/(h-u);else if(d===kc)S=-h/(h-u),E=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=m,p[12]=0,p[1]=0,p[5]=v,p[9]=_,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,u,h,d=Ca){const p=this.elements,g=1/(i-t),v=1/(s-l),m=1/(h-u),_=(i+t)*g,S=(s+l)*v;let E,b;if(d===Ca)E=(h+u)*m,b=-2*m;else if(d===kc)E=u*m,b=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*g,p[4]=0,p[8]=0,p[12]=-_,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=b,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Zr=new G,Ui=new ke,KT=new G(0,0,0),JT=new G(1,1,1),fs=new G,mc=new G,ui=new G,K_=new ke,J_=new Il;class ea{constructor(t=0,i=0,s=0,l=ea.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],p=l[1],g=l[5],v=l[9],m=l[2],_=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(_,g),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,g)):(this._y=Math.atan2(-m,u),this._z=0);break;case"ZXY":this._x=Math.asin(ye(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-m,S),this._z=Math.atan2(-h,g)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-ye(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-h,g));break;case"YZX":this._z=Math.asin(ye(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,g),this._y=Math.atan2(-m,u)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(_,g),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return K_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(K_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return J_.setFromEuler(this),this.setFromQuaternion(J_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ea.DEFAULT_ORDER="XYZ";class _x{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let $T=0;const $_=new G,Qr=new Il,Ma=new ke,gc=new G,_l=new G,t1=new G,e1=new Il,ty=new G(1,0,0),ey=new G(0,1,0),ny=new G(0,0,1),iy={type:"added"},n1={type:"removed"},Kr={type:"childadded",child:null},Bd={type:"childremoved",child:null};class Hn extends vo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$T++}),this.uuid=_o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const t=new G,i=new ea,s=new Il,l=new G(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new ke},normalMatrix:{value:new ge}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _x,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Qr.setFromAxisAngle(t,i),this.quaternion.multiply(Qr),this}rotateOnWorldAxis(t,i){return Qr.setFromAxisAngle(t,i),this.quaternion.premultiply(Qr),this}rotateX(t){return this.rotateOnAxis(ty,t)}rotateY(t){return this.rotateOnAxis(ey,t)}rotateZ(t){return this.rotateOnAxis(ny,t)}translateOnAxis(t,i){return $_.copy(t).applyQuaternion(this.quaternion),this.position.add($_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(ty,t)}translateY(t){return this.translateOnAxis(ey,t)}translateZ(t){return this.translateOnAxis(ny,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ma.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?gc.copy(t):gc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),_l.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ma.lookAt(_l,gc,this.up):Ma.lookAt(gc,_l,this.up),this.quaternion.setFromRotationMatrix(Ma),l&&(Ma.extractRotation(l.matrixWorld),Qr.setFromRotationMatrix(Ma),this.quaternion.premultiply(Qr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(iy),Kr.child=t,this.dispatchEvent(Kr),Kr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(n1),Bd.child=t,this.dispatchEvent(Bd),Bd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ma.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ma.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ma),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(iy),Kr.child=t,this.dispatchEvent(Kr),Kr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_l,t,t1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_l,e1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?{min:d.boundingBox.min.toArray(),max:d.boundingBox.max.toArray()}:void 0,boundingSphere:d.boundingSphere?{radius:d.boundingSphere.radius,center:d.boundingSphere.center.toArray()}:void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let g=0,v=p.length;g<v;g++){const m=p[g];u(t.shapes,m)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,g=this.material.length;p<g;p++)d.push(u(t.materials,this.material[p]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(u(t.animations,p))}}if(i){const d=h(t.geometries),p=h(t.materials),g=h(t.textures),v=h(t.images),m=h(t.shapes),_=h(t.skeletons),S=h(t.animations),E=h(t.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),g.length>0&&(s.textures=g),v.length>0&&(s.images=v),m.length>0&&(s.shapes=m),_.length>0&&(s.skeletons=_),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const p=[];for(const g in d){const v=d[g];delete v.metadata,p.push(v)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Hn.DEFAULT_UP=new G(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Li=new G,Ea=new G,Id=new G,Ta=new G,Jr=new G,$r=new G,ay=new G,Fd=new G,Hd=new G,Vd=new G,Gd=new Xe,Xd=new Xe,kd=new Xe;class Pi{constructor(t=new G,i=new G,s=new G){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Li.subVectors(t,i),l.cross(Li);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){Li.subVectors(l,i),Ea.subVectors(s,i),Id.subVectors(t,i);const h=Li.dot(Li),d=Li.dot(Ea),p=Li.dot(Id),g=Ea.dot(Ea),v=Ea.dot(Id),m=h*g-d*d;if(m===0)return u.set(0,0,0),null;const _=1/m,S=(g*p-d*v)*_,E=(h*v-d*p)*_;return u.set(1-S-E,E,S)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Ta)===null?!1:Ta.x>=0&&Ta.y>=0&&Ta.x+Ta.y<=1}static getInterpolation(t,i,s,l,u,h,d,p){return this.getBarycoord(t,i,s,l,Ta)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Ta.x),p.addScaledVector(h,Ta.y),p.addScaledVector(d,Ta.z),p)}static getInterpolatedAttribute(t,i,s,l,u,h){return Gd.setScalar(0),Xd.setScalar(0),kd.setScalar(0),Gd.fromBufferAttribute(t,i),Xd.fromBufferAttribute(t,s),kd.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Gd,u.x),h.addScaledVector(Xd,u.y),h.addScaledVector(kd,u.z),h}static isFrontFacing(t,i,s,l){return Li.subVectors(s,i),Ea.subVectors(t,i),Li.cross(Ea).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Li.subVectors(this.c,this.b),Ea.subVectors(this.a,this.b),Li.cross(Ea).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Pi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return Pi.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return Pi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let h,d;Jr.subVectors(l,s),$r.subVectors(u,s),Fd.subVectors(t,s);const p=Jr.dot(Fd),g=$r.dot(Fd);if(p<=0&&g<=0)return i.copy(s);Hd.subVectors(t,l);const v=Jr.dot(Hd),m=$r.dot(Hd);if(v>=0&&m<=v)return i.copy(l);const _=p*m-v*g;if(_<=0&&p>=0&&v<=0)return h=p/(p-v),i.copy(s).addScaledVector(Jr,h);Vd.subVectors(t,u);const S=Jr.dot(Vd),E=$r.dot(Vd);if(E>=0&&S<=E)return i.copy(u);const b=S*g-p*E;if(b<=0&&g>=0&&E<=0)return d=g/(g-E),i.copy(s).addScaledVector($r,d);const M=v*E-S*m;if(M<=0&&m-v>=0&&S-E>=0)return ay.subVectors(u,l),d=(m-v)/(m-v+(S-E)),i.copy(l).addScaledVector(ay,d);const x=1/(M+b+_);return h=b*x,d=_*x,i.copy(s).addScaledVector(Jr,h).addScaledVector($r,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const yx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},vc={h:0,s:0,l:0};function qd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class fe{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ue.toWorkingColorSpace(this,i),this}setRGB(t,i,s,l=Ue.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ue.toWorkingColorSpace(this,l),this}setHSL(t,i,s,l=Ue.workingColorSpace){if(t=om(t,1),i=ye(i,0,1),s=ye(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=qd(h,u,t+1/3),this.g=qd(h,u,t),this.b=qd(h,u,t-1/3)}return Ue.toWorkingColorSpace(this,l),this}setStyle(t,i=Fn){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Fn){const s=yx[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Na(t.r),this.g=Na(t.g),this.b=Na(t.b),this}copyLinearToSRGB(t){return this.r=uo(t.r),this.g=uo(t.g),this.b=uo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fn){return Ue.fromWorkingColorSpace(In.copy(this),t),Math.round(ye(In.r*255,0,255))*65536+Math.round(ye(In.g*255,0,255))*256+Math.round(ye(In.b*255,0,255))}getHexString(t=Fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ue.workingColorSpace){Ue.fromWorkingColorSpace(In.copy(this),i);const s=In.r,l=In.g,u=In.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let p,g;const v=(d+h)/2;if(d===h)p=0,g=0;else{const m=h-d;switch(g=v<=.5?m/(h+d):m/(2-h-d),h){case s:p=(l-u)/m+(l<u?6:0);break;case l:p=(u-s)/m+2;break;case u:p=(s-l)/m+4;break}p/=6}return t.h=p,t.s=g,t.l=v,t}getRGB(t,i=Ue.workingColorSpace){return Ue.fromWorkingColorSpace(In.copy(this),i),t.r=In.r,t.g=In.g,t.b=In.b,t}getStyle(t=Fn){Ue.fromWorkingColorSpace(In.copy(this),t);const i=In.r,s=In.g,l=In.b;return t!==Fn?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(hs),this.setHSL(hs.h+t,hs.s+i,hs.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(hs),t.getHSL(vc);const s=Al(hs.h,vc.h,i),l=Al(hs.s,vc.s,i),u=Al(hs.l,vc.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new fe;fe.NAMES=yx;let i1=0;class xo extends vo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:i1++}),this.uuid=_o(),this.name="",this.type="Material",this.blending=lo,this.side=gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lp,this.blendDst=up,this.blendEquation=Zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=X_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xr,this.stencilZFail=Xr,this.stencilZPass=Xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==lo&&(s.blending=this.blending),this.side!==gs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==lp&&(s.blendSrc=this.blendSrc),this.blendDst!==up&&(s.blendDst=this.blendDst),this.blendEquation!==Zs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==co&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==X_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Xr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Xr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const p=u[d];delete p.metadata,h.push(p)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ki extends xo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ea,this.combine=Jy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hn=new G,_c=new Xt;let a1=0;class pi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:a1++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=k_,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)_c.fromBufferAttribute(this,i),_c.applyMatrix3(t),this.setXY(i,_c.x,_c.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=ro(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=qn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=ro(i,this.array)),i}setX(t,i){return this.normalized&&(i=qn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=ro(i,this.array)),i}setY(t,i){return this.normalized&&(i=qn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=ro(i,this.array)),i}setZ(t,i){return this.normalized&&(i=qn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=ro(i,this.array)),i}setW(t,i){return this.normalized&&(i=qn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=qn(i,this.array),s=qn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=qn(i,this.array),s=qn(s,this.array),l=qn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=qn(i,this.array),s=qn(s,this.array),l=qn(l,this.array),u=qn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==k_&&(t.usage=this.usage),t}}class xx extends pi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Sx extends pi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class ze extends pi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let s1=0;const Ti=new ke,Yd=new Hn,to=new G,ci=new nr,yl=new nr,En=new G;class Tn extends vo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:s1++}),this.uuid=_o(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mx(t)?Sx:xx)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new ge().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ti.makeRotationFromQuaternion(t),this.applyMatrix4(Ti),this}rotateX(t){return Ti.makeRotationX(t),this.applyMatrix4(Ti),this}rotateY(t){return Ti.makeRotationY(t),this.applyMatrix4(Ti),this}rotateZ(t){return Ti.makeRotationZ(t),this.applyMatrix4(Ti),this}translate(t,i,s){return Ti.makeTranslation(t,i,s),this.applyMatrix4(Ti),this}scale(t,i,s){return Ti.makeScale(t,i,s),this.applyMatrix4(Ti),this}lookAt(t){return Yd.lookAt(t),Yd.updateMatrix(),this.applyMatrix4(Yd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new ze(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ci.setFromBufferAttribute(u),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){const s=this.boundingSphere.center;if(ci.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];yl.setFromBufferAttribute(d),this.morphTargetsRelative?(En.addVectors(ci.min,yl.min),ci.expandByPoint(En),En.addVectors(ci.max,yl.max),ci.expandByPoint(En)):(ci.expandByPoint(yl.min),ci.expandByPoint(yl.max))}ci.getCenter(s);let l=0;for(let u=0,h=t.count;u<h;u++)En.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(En));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],p=this.morphTargetsRelative;for(let g=0,v=d.count;g<v;g++)En.fromBufferAttribute(d,g),p&&(to.fromBufferAttribute(t,g),En.add(to)),l=Math.max(l,s.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let I=0;I<s.count;I++)d[I]=new G,p[I]=new G;const g=new G,v=new G,m=new G,_=new Xt,S=new Xt,E=new Xt,b=new G,M=new G;function x(I,D,R){g.fromBufferAttribute(s,I),v.fromBufferAttribute(s,D),m.fromBufferAttribute(s,R),_.fromBufferAttribute(u,I),S.fromBufferAttribute(u,D),E.fromBufferAttribute(u,R),v.sub(g),m.sub(g),S.sub(_),E.sub(_);const V=1/(S.x*E.y-E.x*S.y);isFinite(V)&&(b.copy(v).multiplyScalar(E.y).addScaledVector(m,-S.y).multiplyScalar(V),M.copy(m).multiplyScalar(S.x).addScaledVector(v,-E.x).multiplyScalar(V),d[I].add(b),d[D].add(b),d[R].add(b),p[I].add(M),p[D].add(M),p[R].add(M))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let I=0,D=w.length;I<D;++I){const R=w[I],V=R.start,nt=R.count;for(let at=V,lt=V+nt;at<lt;at+=3)x(t.getX(at+0),t.getX(at+1),t.getX(at+2))}const L=new G,A=new G,H=new G,z=new G;function P(I){H.fromBufferAttribute(l,I),z.copy(H);const D=d[I];L.copy(D),L.sub(H.multiplyScalar(H.dot(D))).normalize(),A.crossVectors(z,D);const V=A.dot(p[I])<0?-1:1;h.setXYZW(I,L.x,L.y,L.z,V)}for(let I=0,D=w.length;I<D;++I){const R=w[I],V=R.start,nt=R.count;for(let at=V,lt=V+nt;at<lt;at+=3)P(t.getX(at+0)),P(t.getX(at+1)),P(t.getX(at+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new pi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let _=0,S=s.count;_<S;_++)s.setXYZ(_,0,0,0);const l=new G,u=new G,h=new G,d=new G,p=new G,g=new G,v=new G,m=new G;if(t)for(let _=0,S=t.count;_<S;_+=3){const E=t.getX(_+0),b=t.getX(_+1),M=t.getX(_+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,M),v.subVectors(h,u),m.subVectors(l,u),v.cross(m),d.fromBufferAttribute(s,E),p.fromBufferAttribute(s,b),g.fromBufferAttribute(s,M),d.add(v),p.add(v),g.add(v),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(M,g.x,g.y,g.z)}else for(let _=0,S=i.count;_<S;_+=3)l.fromBufferAttribute(i,_+0),u.fromBufferAttribute(i,_+1),h.fromBufferAttribute(i,_+2),v.subVectors(h,u),m.subVectors(l,u),v.cross(m),s.setXYZ(_+0,v.x,v.y,v.z),s.setXYZ(_+1,v.x,v.y,v.z),s.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)En.fromBufferAttribute(t,i),En.normalize(),t.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function t(d,p){const g=d.array,v=d.itemSize,m=d.normalized,_=new g.constructor(p.length*v);let S=0,E=0;for(let b=0,M=p.length;b<M;b++){d.isInterleavedBufferAttribute?S=p[b]*d.data.stride+d.offset:S=p[b]*v;for(let x=0;x<v;x++)_[E++]=g[S++]}return new pi(_,v,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Tn,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],g=t(p,s);i.setAttribute(d,g)}const u=this.morphAttributes;for(const d in u){const p=[],g=u[d];for(let v=0,m=g.length;v<m;v++){const _=g[v],S=t(_,s);p.push(S)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const g=h[d];i.addGroup(g.start,g.count,g.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const g in p)p[g]!==void 0&&(t[g]=p[g]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const g=s[p];t.data.attributes[p]=g.toJSON(t.data)}const l={};let u=!1;for(const p in this.morphAttributes){const g=this.morphAttributes[p],v=[];for(let m=0,_=g.length;m<_;m++){const S=g[m];v.push(S.toJSON(t.data))}v.length>0&&(l[p]=v,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const g in l){const v=l[g];this.setAttribute(g,v.clone(i))}const u=t.morphAttributes;for(const g in u){const v=[],m=u[g];for(let _=0,S=m.length;_<S;_++)v.push(m[_].clone(i));this.morphAttributes[g]=v}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let g=0,v=h.length;g<v;g++){const m=h[g];this.addGroup(m.start,m.count,m.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sy=new ke,Xs=new vx,yc=new yo,ry=new G,xc=new G,Sc=new G,Mc=new G,Wd=new G,Ec=new G,oy=new G,Tc=new G;class se extends Hn{constructor(t=new Tn,i=new Ki){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){Ec.set(0,0,0);for(let p=0,g=u.length;p<g;p++){const v=d[p],m=u[p];v!==0&&(Wd.fromBufferAttribute(m,t),h?Ec.addScaledVector(Wd,v):Ec.addScaledVector(Wd.sub(i),v))}i.add(Ec)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),yc.copy(s.boundingSphere),yc.applyMatrix4(u),Xs.copy(t.ray).recast(t.near),!(yc.containsPoint(Xs.origin)===!1&&(Xs.intersectSphere(yc,ry)===null||Xs.origin.distanceToSquared(ry)>(t.far-t.near)**2))&&(sy.copy(u).invert(),Xs.copy(t.ray).applyMatrix4(sy),!(s.boundingBox!==null&&Xs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Xs)))}_computeIntersections(t,i,s){let l;const u=this.geometry,h=this.material,d=u.index,p=u.attributes.position,g=u.attributes.uv,v=u.attributes.uv1,m=u.attributes.normal,_=u.groups,S=u.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,b=_.length;E<b;E++){const M=_[E],x=h[M.materialIndex],w=Math.max(M.start,S.start),L=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let A=w,H=L;A<H;A+=3){const z=d.getX(A),P=d.getX(A+1),I=d.getX(A+2);l=bc(this,x,t,s,g,v,m,z,P,I),l&&(l.faceIndex=Math.floor(A/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),b=Math.min(d.count,S.start+S.count);for(let M=E,x=b;M<x;M+=3){const w=d.getX(M),L=d.getX(M+1),A=d.getX(M+2);l=bc(this,h,t,s,g,v,m,w,L,A),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let E=0,b=_.length;E<b;E++){const M=_[E],x=h[M.materialIndex],w=Math.max(M.start,S.start),L=Math.min(p.count,Math.min(M.start+M.count,S.start+S.count));for(let A=w,H=L;A<H;A+=3){const z=A,P=A+1,I=A+2;l=bc(this,x,t,s,g,v,m,z,P,I),l&&(l.faceIndex=Math.floor(A/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),b=Math.min(p.count,S.start+S.count);for(let M=E,x=b;M<x;M+=3){const w=M,L=M+1,A=M+2;l=bc(this,h,t,s,g,v,m,w,L,A),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function r1(o,t,i,s,l,u,h,d){let p;if(t.side===Zn?p=s.intersectTriangle(h,u,l,!0,d):p=s.intersectTriangle(l,u,h,t.side===gs,d),p===null)return null;Tc.copy(d),Tc.applyMatrix4(o.matrixWorld);const g=i.ray.origin.distanceTo(Tc);return g<i.near||g>i.far?null:{distance:g,point:Tc.clone(),object:o}}function bc(o,t,i,s,l,u,h,d,p,g){o.getVertexPosition(d,xc),o.getVertexPosition(p,Sc),o.getVertexPosition(g,Mc);const v=r1(o,t,i,s,xc,Sc,Mc,oy);if(v){const m=new G;Pi.getBarycoord(oy,xc,Sc,Mc,m),l&&(v.uv=Pi.getInterpolatedAttribute(l,d,p,g,m,new Xt)),u&&(v.uv1=Pi.getInterpolatedAttribute(u,d,p,g,m,new Xt)),h&&(v.normal=Pi.getInterpolatedAttribute(h,d,p,g,m,new G),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const _={a:d,b:p,c:g,normal:new G,materialIndex:0};Pi.getNormal(xc,Sc,Mc,_.normal),v.face=_,v.barycoord=m}return v}class Ua extends Tn{constructor(t=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const p=[],g=[],v=[],m=[];let _=0,S=0;E("z","y","x",-1,-1,s,i,t,h,u,0),E("z","y","x",1,-1,s,i,-t,h,u,1),E("x","z","y",1,1,t,s,i,l,h,2),E("x","z","y",1,-1,t,s,-i,l,h,3),E("x","y","z",1,-1,t,i,s,l,u,4),E("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(p),this.setAttribute("position",new ze(g,3)),this.setAttribute("normal",new ze(v,3)),this.setAttribute("uv",new ze(m,2));function E(b,M,x,w,L,A,H,z,P,I,D){const R=A/P,V=H/I,nt=A/2,at=H/2,lt=z/2,ft=P+1,k=I+1;let ot=0,K=0;const yt=new G;for(let St=0;St<k;St++){const Ft=St*V-at;for(let Jt=0;Jt<ft;Jt++){const xe=Jt*R-nt;yt[b]=xe*w,yt[M]=Ft*L,yt[x]=lt,g.push(yt.x,yt.y,yt.z),yt[b]=0,yt[M]=0,yt[x]=z>0?1:-1,v.push(yt.x,yt.y,yt.z),m.push(Jt/P),m.push(1-St/I),ot+=1}}for(let St=0;St<I;St++)for(let Ft=0;Ft<P;Ft++){const Jt=_+Ft+ft*St,xe=_+Ft+ft*(St+1),U=_+(Ft+1)+ft*(St+1),j=_+(Ft+1)+ft*St;p.push(Jt,xe,j),p.push(xe,U,j),K+=6}d.addGroup(S,K,D),S+=K,_+=ot}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ua(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function mo(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Yn(o){const t={};for(let i=0;i<o.length;i++){const s=mo(o[i]);for(const l in s)t[l]=s[l]}return t}function o1(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Mx(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ue.workingColorSpace}const zl={clone:mo,merge:Yn};var l1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,u1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jn extends xo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=l1,this.fragmentShader=u1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=mo(t.uniforms),this.uniformsGroups=o1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Ex extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=Ca}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ds=new G,ly=new Xt,uy=new Xt;class fi extends Ex{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Ol*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(bl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ol*2*Math.atan(Math.tan(bl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ds.x,ds.y).multiplyScalar(-t/ds.z),ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ds.x,ds.y).multiplyScalar(-t/ds.z)}getViewSize(t,i){return this.getViewBounds(t,ly,uy),i.subVectors(uy,ly)}setViewOffset(t,i,s,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(bl*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,g=h.fullHeight;u+=h.offsetX*l/p,i-=h.offsetY*s/g,l*=h.width/p,s*=h.height/g}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const eo=-90,no=1;class c1 extends Hn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new fi(eo,no,t,i);l.layers=this.layers,this.add(l);const u=new fi(eo,no,t,i);u.layers=this.layers,this.add(u);const h=new fi(eo,no,t,i);h.layers=this.layers,this.add(h);const d=new fi(eo,no,t,i);d.layers=this.layers,this.add(d);const p=new fi(eo,no,t,i);p.layers=this.layers,this.add(p);const g=new fi(eo,no,t,i);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,p]=i;for(const g of i)this.remove(g);if(t===Ca)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===kc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const g of i)this.add(g),g.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,p,g,v]=this.children,m=t.getRenderTarget(),_=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,p),t.setRenderTarget(s,4,l),t.render(i,g),s.texture.generateMipmaps=b,t.setRenderTarget(s,5,l),t.render(i,v),t.setRenderTarget(m,_,S),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Tx extends Ln{constructor(t=[],i=fo,s,l,u,h,d,p,g,v){super(t,i,s,l,u,h,d,p,g,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class f1 extends Bi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Tx(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ji}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ua(5,5,5),u=new jn({name:"CubemapFromEquirect",uniforms:mo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Zn,blending:wa});u.uniforms.tEquirect.value=i;const h=new se(l,u),d=i.minFilter;return i.minFilter===Js&&(i.minFilter=Ji),new c1(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(u)}}class Ra extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const h1={type:"move"};class jd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ra,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ra,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ra,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,h=null;const d=this._targetRay,p=this._grip,g=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(g&&t.hand){h=!0;for(const b of t.hand.values()){const M=i.getJointPose(b,s),x=this._getHandJoint(g,b);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const v=g.joints["index-finger-tip"],m=g.joints["thumb-tip"],_=v.position.distanceTo(m.position),S=.02,E=.005;g.inputState.pinching&&_>S+E?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!g.inputState.pinching&&_<=S-E&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(h1)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),g!==null&&(g.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Ra;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class um{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new fe(t),this.density=i}clone(){return new um(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class bx extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ea,this.environmentIntensity=1,this.environmentRotation=new ea,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class d1 extends Ln{constructor(t=null,i=1,s=1,l,u,h,d,p,g=di,v=di,m,_){super(null,h,d,p,g,v,l,u,m,_),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cy extends pi{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const io=new ke,fy=new ke,Ac=[],hy=new nr,p1=new ke,xl=new se,Sl=new yo;class m1 extends se{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new cy(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,p1)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new nr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,io),hy.copy(t.boundingBox).applyMatrix4(io),this.boundingBox.union(hy)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new yo),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,io),Sl.copy(t.boundingSphere).applyMatrix4(io),this.boundingSphere.union(Sl)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,u=s.length+1,h=t*u+1;for(let d=0;d<s.length;d++)s[d]=l[h+d]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(xl.geometry=this.geometry,xl.material=this.material,xl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sl.copy(this.boundingSphere),Sl.applyMatrix4(s),t.ray.intersectsSphere(Sl)!==!1))for(let u=0;u<l;u++){this.getMatrixAt(u,io),fy.multiplyMatrices(s,io),xl.matrixWorld=fy,xl.raycast(t,Ac);for(let h=0,d=Ac.length;h<d;h++){const p=Ac[h];p.instanceId=u,p.object=this,i.push(p)}Ac.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new cy(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new d1(new Float32Array(l*this.count),l,this.count,im,$i));const u=this.morphTexture.source.data.data;let h=0;for(let g=0;g<s.length;g++)h+=s[g];const d=this.geometry.morphTargetsRelative?1:1-h,p=l*t;u[p]=d,u.set(s,p+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Zd=new G,g1=new G,v1=new ge;class Ws{constructor(t=new G(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Zd.subVectors(s,i).cross(g1.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Zd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||v1.getNormalMatrix(t),l=this.coplanarPoint(Zd).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ks=new yo,Cc=new G;class cm{constructor(t=new Ws,i=new Ws,s=new Ws,l=new Ws,u=new Ws,h=new Ws){this.planes=[t,i,s,l,u,h]}set(t,i,s,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Ca){const s=this.planes,l=t.elements,u=l[0],h=l[1],d=l[2],p=l[3],g=l[4],v=l[5],m=l[6],_=l[7],S=l[8],E=l[9],b=l[10],M=l[11],x=l[12],w=l[13],L=l[14],A=l[15];if(s[0].setComponents(p-u,_-g,M-S,A-x).normalize(),s[1].setComponents(p+u,_+g,M+S,A+x).normalize(),s[2].setComponents(p+h,_+v,M+E,A+w).normalize(),s[3].setComponents(p-h,_-v,M-E,A-w).normalize(),s[4].setComponents(p-d,_-m,M-b,A-L).normalize(),i===Ca)s[5].setComponents(p+d,_+m,M+b,A+L).normalize();else if(i===kc)s[5].setComponents(d,m,b,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ks.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ks.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ks)}intersectsSprite(t){return ks.center.set(0,0,0),ks.radius=.7071067811865476,ks.applyMatrix4(t.matrixWorld),this.intersectsSphere(ks)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Cc.x=l.normal.x>0?t.max.x:t.min.x,Cc.y=l.normal.y>0?t.max.y:t.min.y,Cc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Cc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fm extends xo{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const dy=new ke,Yp=new vx,Rc=new yo,wc=new G;class Ax extends Hn{constructor(t=new Tn,i=new fm){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Rc.copy(s.boundingSphere),Rc.applyMatrix4(l),Rc.radius+=u,t.ray.intersectsSphere(Rc)===!1)return;dy.copy(l).invert(),Yp.copy(t.ray).applyMatrix4(dy);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,g=s.index,m=s.attributes.position;if(g!==null){const _=Math.max(0,h.start),S=Math.min(g.count,h.start+h.count);for(let E=_,b=S;E<b;E++){const M=g.getX(E);wc.fromBufferAttribute(m,M),py(wc,M,p,l,t,i,this)}}else{const _=Math.max(0,h.start),S=Math.min(m.count,h.start+h.count);for(let E=_,b=S;E<b;E++)wc.fromBufferAttribute(m,E),py(wc,E,p,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function py(o,t,i,s,l,u,h){const d=Yp.distanceSqToPoint(o);if(d<i){const p=new G;Yp.closestPointToPoint(o,p),p.applyMatrix4(s);const g=l.ray.origin.distanceTo(p);if(g<l.near||g>l.far)return;u.push({distance:g,distanceToRay:Math.sqrt(d),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class hm extends Ln{constructor(t,i,s,l,u,h,d,p,g){super(t,i,s,l,u,h,d,p,g),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cx extends Ln{constructor(t,i,s=er,l,u,h,d=di,p=di,g,v=Ul){if(v!==Ul&&v!==Ll)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,u,h,d,p,v,s,g),this.isDepthTexture=!0,this.image={width:t,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new lm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class dm extends Tn{constructor(t=1,i=32,s=0,l=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:s,thetaLength:l},i=Math.max(3,i);const u=[],h=[],d=[],p=[],g=new G,v=new Xt;h.push(0,0,0),d.push(0,0,1),p.push(.5,.5);for(let m=0,_=3;m<=i;m++,_+=3){const S=s+m/i*l;g.x=t*Math.cos(S),g.y=t*Math.sin(S),h.push(g.x,g.y,g.z),d.push(0,0,1),v.x=(h[_]/t+1)/2,v.y=(h[_+1]/t+1)/2,p.push(v.x,v.y)}for(let m=1;m<=i;m++)u.push(m,m+1,0);this.setIndex(u),this.setAttribute("position",new ze(h,3)),this.setAttribute("normal",new ze(d,3)),this.setAttribute("uv",new ze(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dm(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class qc extends Tn{constructor(t=1,i=1,s=1,l=32,u=1,h=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:u,openEnded:h,thetaStart:d,thetaLength:p};const g=this;l=Math.floor(l),u=Math.floor(u);const v=[],m=[],_=[],S=[];let E=0;const b=[],M=s/2;let x=0;w(),h===!1&&(t>0&&L(!0),i>0&&L(!1)),this.setIndex(v),this.setAttribute("position",new ze(m,3)),this.setAttribute("normal",new ze(_,3)),this.setAttribute("uv",new ze(S,2));function w(){const A=new G,H=new G;let z=0;const P=(i-t)/s;for(let I=0;I<=u;I++){const D=[],R=I/u,V=R*(i-t)+t;for(let nt=0;nt<=l;nt++){const at=nt/l,lt=at*p+d,ft=Math.sin(lt),k=Math.cos(lt);H.x=V*ft,H.y=-R*s+M,H.z=V*k,m.push(H.x,H.y,H.z),A.set(ft,P,k).normalize(),_.push(A.x,A.y,A.z),S.push(at,1-R),D.push(E++)}b.push(D)}for(let I=0;I<l;I++)for(let D=0;D<u;D++){const R=b[D][I],V=b[D+1][I],nt=b[D+1][I+1],at=b[D][I+1];(t>0||D!==0)&&(v.push(R,V,at),z+=3),(i>0||D!==u-1)&&(v.push(V,nt,at),z+=3)}g.addGroup(x,z,0),x+=z}function L(A){const H=E,z=new Xt,P=new G;let I=0;const D=A===!0?t:i,R=A===!0?1:-1;for(let nt=1;nt<=l;nt++)m.push(0,M*R,0),_.push(0,R,0),S.push(.5,.5),E++;const V=E;for(let nt=0;nt<=l;nt++){const lt=nt/l*p+d,ft=Math.cos(lt),k=Math.sin(lt);P.x=D*k,P.y=M*R,P.z=D*ft,m.push(P.x,P.y,P.z),_.push(0,R,0),z.x=ft*.5+.5,z.y=k*.5*R+.5,S.push(z.x,z.y),E++}for(let nt=0;nt<l;nt++){const at=H+nt,lt=V+nt;A===!0?v.push(lt,lt+1,at):v.push(lt+1,lt,at),I+=3}g.addGroup(x,I,A===!0?1:2),x+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qc(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class pm extends Tn{constructor(t=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:s,detail:l};const u=[],h=[];d(l),g(s),v(),this.setAttribute("position",new ze(u,3)),this.setAttribute("normal",new ze(u.slice(),3)),this.setAttribute("uv",new ze(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(w){const L=new G,A=new G,H=new G;for(let z=0;z<i.length;z+=3)S(i[z+0],L),S(i[z+1],A),S(i[z+2],H),p(L,A,H,w)}function p(w,L,A,H){const z=H+1,P=[];for(let I=0;I<=z;I++){P[I]=[];const D=w.clone().lerp(A,I/z),R=L.clone().lerp(A,I/z),V=z-I;for(let nt=0;nt<=V;nt++)nt===0&&I===z?P[I][nt]=D:P[I][nt]=D.clone().lerp(R,nt/V)}for(let I=0;I<z;I++)for(let D=0;D<2*(z-I)-1;D++){const R=Math.floor(D/2);D%2===0?(_(P[I][R+1]),_(P[I+1][R]),_(P[I][R])):(_(P[I][R+1]),_(P[I+1][R+1]),_(P[I+1][R]))}}function g(w){const L=new G;for(let A=0;A<u.length;A+=3)L.x=u[A+0],L.y=u[A+1],L.z=u[A+2],L.normalize().multiplyScalar(w),u[A+0]=L.x,u[A+1]=L.y,u[A+2]=L.z}function v(){const w=new G;for(let L=0;L<u.length;L+=3){w.x=u[L+0],w.y=u[L+1],w.z=u[L+2];const A=M(w)/2/Math.PI+.5,H=x(w)/Math.PI+.5;h.push(A,1-H)}E(),m()}function m(){for(let w=0;w<h.length;w+=6){const L=h[w+0],A=h[w+2],H=h[w+4],z=Math.max(L,A,H),P=Math.min(L,A,H);z>.9&&P<.1&&(L<.2&&(h[w+0]+=1),A<.2&&(h[w+2]+=1),H<.2&&(h[w+4]+=1))}}function _(w){u.push(w.x,w.y,w.z)}function S(w,L){const A=w*3;L.x=t[A+0],L.y=t[A+1],L.z=t[A+2]}function E(){const w=new G,L=new G,A=new G,H=new G,z=new Xt,P=new Xt,I=new Xt;for(let D=0,R=0;D<u.length;D+=9,R+=6){w.set(u[D+0],u[D+1],u[D+2]),L.set(u[D+3],u[D+4],u[D+5]),A.set(u[D+6],u[D+7],u[D+8]),z.set(h[R+0],h[R+1]),P.set(h[R+2],h[R+3]),I.set(h[R+4],h[R+5]),H.copy(w).add(L).add(A).divideScalar(3);const V=M(H);b(z,R+0,w,V),b(P,R+2,L,V),b(I,R+4,A,V)}}function b(w,L,A,H){H<0&&w.x===1&&(h[L]=w.x-1),A.x===0&&A.z===0&&(h[L]=H/2/Math.PI+.5)}function M(w){return Math.atan2(w.z,-w.x)}function x(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pm(t.vertices,t.indices,t.radius,t.details)}}class La{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),u=0;i.push(0);for(let h=1;h<=t;h++)s=this.getPoint(h/t),u+=s.distanceTo(l),i.push(u),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const u=s.length;let h;i?h=i:h=t*s[u-1];let d=0,p=u-1,g;for(;d<=p;)if(l=Math.floor(d+(p-d)/2),g=s[l]-h,g<0)d=l+1;else if(g>0)p=l-1;else{p=l;break}if(l=p,s[l]===h)return l/(u-1);const v=s[l],_=s[l+1]-v,S=(h-v)/_;return(l+S)/(u-1)}getTangent(t,i){let l=t-1e-4,u=t+1e-4;l<0&&(l=0),u>1&&(u=1);const h=this.getPoint(l),d=this.getPoint(u),p=i||(h.isVector2?new Xt:new G);return p.copy(d).sub(h).normalize(),p}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new G,l=[],u=[],h=[],d=new G,p=new ke;for(let S=0;S<=t;S++){const E=S/t;l[S]=this.getTangentAt(E,new G)}u[0]=new G,h[0]=new G;let g=Number.MAX_VALUE;const v=Math.abs(l[0].x),m=Math.abs(l[0].y),_=Math.abs(l[0].z);v<=g&&(g=v,s.set(1,0,0)),m<=g&&(g=m,s.set(0,1,0)),_<=g&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),u[0].crossVectors(l[0],d),h[0].crossVectors(l[0],u[0]);for(let S=1;S<=t;S++){if(u[S]=u[S-1].clone(),h[S]=h[S-1].clone(),d.crossVectors(l[S-1],l[S]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(ye(l[S-1].dot(l[S]),-1,1));u[S].applyMatrix4(p.makeRotationAxis(d,E))}h[S].crossVectors(l[S],u[S])}if(i===!0){let S=Math.acos(ye(u[0].dot(u[t]),-1,1));S/=t,l[0].dot(d.crossVectors(u[0],u[t]))>0&&(S=-S);for(let E=1;E<=t;E++)u[E].applyMatrix4(p.makeRotationAxis(l[E],S*E)),h[E].crossVectors(l[E],u[E])}return{tangents:l,normals:u,binormals:h}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Rx extends La{constructor(t=0,i=0,s=1,l=1,u=0,h=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=u,this.aEndAngle=h,this.aClockwise=d,this.aRotation=p}getPoint(t,i=new Xt){const s=i,l=Math.PI*2;let u=this.aEndAngle-this.aStartAngle;const h=Math.abs(u)<Number.EPSILON;for(;u<0;)u+=l;for(;u>l;)u-=l;u<Number.EPSILON&&(h?u=0:u=l),this.aClockwise===!0&&!h&&(u===l?u=-l:u=u-l);const d=this.aStartAngle+t*u;let p=this.aX+this.xRadius*Math.cos(d),g=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const v=Math.cos(this.aRotation),m=Math.sin(this.aRotation),_=p-this.aX,S=g-this.aY;p=_*v-S*m+this.aX,g=_*m+S*v+this.aY}return s.set(p,g)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class _1 extends Rx{constructor(t,i,s,l,u,h){super(t,i,s,s,l,u,h),this.isArcCurve=!0,this.type="ArcCurve"}}function mm(){let o=0,t=0,i=0,s=0;function l(u,h,d,p){o=u,t=d,i=-3*u+3*h-2*d-p,s=2*u-2*h+d+p}return{initCatmullRom:function(u,h,d,p,g){l(h,d,g*(d-u),g*(p-h))},initNonuniformCatmullRom:function(u,h,d,p,g,v,m){let _=(h-u)/g-(d-u)/(g+v)+(d-h)/v,S=(d-h)/v-(p-h)/(v+m)+(p-d)/m;_*=v,S*=v,l(h,d,_,S)},calc:function(u){const h=u*u,d=h*u;return o+t*u+i*h+s*d}}}const Dc=new G,Qd=new mm,Kd=new mm,Jd=new mm;class y1 extends La{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new G){const s=i,l=this.points,u=l.length,h=(u-(this.closed?0:1))*t;let d=Math.floor(h),p=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/u)+1)*u:p===0&&d===u-1&&(d=u-2,p=1);let g,v;this.closed||d>0?g=l[(d-1)%u]:(Dc.subVectors(l[0],l[1]).add(l[0]),g=Dc);const m=l[d%u],_=l[(d+1)%u];if(this.closed||d+2<u?v=l[(d+2)%u]:(Dc.subVectors(l[u-1],l[u-2]).add(l[u-1]),v=Dc),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(g.distanceToSquared(m),S),b=Math.pow(m.distanceToSquared(_),S),M=Math.pow(_.distanceToSquared(v),S);b<1e-4&&(b=1),E<1e-4&&(E=b),M<1e-4&&(M=b),Qd.initNonuniformCatmullRom(g.x,m.x,_.x,v.x,E,b,M),Kd.initNonuniformCatmullRom(g.y,m.y,_.y,v.y,E,b,M),Jd.initNonuniformCatmullRom(g.z,m.z,_.z,v.z,E,b,M)}else this.curveType==="catmullrom"&&(Qd.initCatmullRom(g.x,m.x,_.x,v.x,this.tension),Kd.initCatmullRom(g.y,m.y,_.y,v.y,this.tension),Jd.initCatmullRom(g.z,m.z,_.z,v.z,this.tension));return s.set(Qd.calc(p),Kd.calc(p),Jd.calc(p)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new G().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function my(o,t,i,s,l){const u=(s-t)*.5,h=(l-i)*.5,d=o*o,p=o*d;return(2*i-2*s+u+h)*p+(-3*i+3*s-2*u-h)*d+u*o+i}function x1(o,t){const i=1-o;return i*i*t}function S1(o,t){return 2*(1-o)*o*t}function M1(o,t){return o*o*t}function Cl(o,t,i,s){return x1(o,t)+S1(o,i)+M1(o,s)}function E1(o,t){const i=1-o;return i*i*i*t}function T1(o,t){const i=1-o;return 3*i*i*o*t}function b1(o,t){return 3*(1-o)*o*o*t}function A1(o,t){return o*o*o*t}function Rl(o,t,i,s,l){return E1(o,t)+T1(o,i)+b1(o,s)+A1(o,l)}class C1 extends La{constructor(t=new Xt,i=new Xt,s=new Xt,l=new Xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new Xt){const s=i,l=this.v0,u=this.v1,h=this.v2,d=this.v3;return s.set(Rl(t,l.x,u.x,h.x,d.x),Rl(t,l.y,u.y,h.y,d.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class R1 extends La{constructor(t=new G,i=new G,s=new G,l=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new G){const s=i,l=this.v0,u=this.v1,h=this.v2,d=this.v3;return s.set(Rl(t,l.x,u.x,h.x,d.x),Rl(t,l.y,u.y,h.y,d.y),Rl(t,l.z,u.z,h.z,d.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class w1 extends La{constructor(t=new Xt,i=new Xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new Xt){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new Xt){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class D1 extends La{constructor(t=new G,i=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new G){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new G){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class N1 extends La{constructor(t=new Xt,i=new Xt,s=new Xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new Xt){const s=i,l=this.v0,u=this.v1,h=this.v2;return s.set(Cl(t,l.x,u.x,h.x),Cl(t,l.y,u.y,h.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gm extends La{constructor(t=new G,i=new G,s=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new G){const s=i,l=this.v0,u=this.v1,h=this.v2;return s.set(Cl(t,l.x,u.x,h.x),Cl(t,l.y,u.y,h.y),Cl(t,l.z,u.z,h.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class U1 extends La{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new Xt){const s=i,l=this.points,u=(l.length-1)*t,h=Math.floor(u),d=u-h,p=l[h===0?h:h-1],g=l[h],v=l[h>l.length-2?l.length-1:h+1],m=l[h>l.length-3?l.length-1:h+2];return s.set(my(d,p.x,g.x,v.x,m.x),my(d,p.y,g.y,v.y,m.y)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new Xt().fromArray(l))}return this}}var L1=Object.freeze({__proto__:null,ArcCurve:_1,CatmullRomCurve3:y1,CubicBezierCurve:C1,CubicBezierCurve3:R1,EllipseCurve:Rx,LineCurve:w1,LineCurve3:D1,QuadraticBezierCurve:N1,QuadraticBezierCurve3:gm,SplineCurve:U1});class Aa extends pm{constructor(t=1,i=0){const s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],l=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,l,t,i),this.type="OctahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Aa(t.radius,t.detail)}}class Fl extends Tn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(s),p=Math.floor(l),g=d+1,v=p+1,m=t/d,_=i/p,S=[],E=[],b=[],M=[];for(let x=0;x<v;x++){const w=x*_-h;for(let L=0;L<g;L++){const A=L*m-u;E.push(A,-w,0),b.push(0,0,1),M.push(L/d),M.push(1-x/p)}}for(let x=0;x<p;x++)for(let w=0;w<d;w++){const L=w+g*x,A=w+g*(x+1),H=w+1+g*(x+1),z=w+1+g*x;S.push(L,A,z),S.push(A,H,z)}this.setIndex(S),this.setAttribute("position",new ze(E,3)),this.setAttribute("normal",new ze(b,3)),this.setAttribute("uv",new ze(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fl(t.width,t.height,t.widthSegments,t.heightSegments)}}class vm extends Tn{constructor(t=.5,i=1,s=32,l=1,u=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:u,thetaLength:h},s=Math.max(3,s),l=Math.max(1,l);const d=[],p=[],g=[],v=[];let m=t;const _=(i-t)/l,S=new G,E=new Xt;for(let b=0;b<=l;b++){for(let M=0;M<=s;M++){const x=u+M/s*h;S.x=m*Math.cos(x),S.y=m*Math.sin(x),p.push(S.x,S.y,S.z),g.push(0,0,1),E.x=(S.x/i+1)/2,E.y=(S.y/i+1)/2,v.push(E.x,E.y)}m+=_}for(let b=0;b<l;b++){const M=b*(s+1);for(let x=0;x<s;x++){const w=x+M,L=w,A=w+s+1,H=w+s+2,z=w+1;d.push(L,A,z),d.push(A,H,z)}}this.setIndex(d),this.setAttribute("position",new ze(p,3)),this.setAttribute("normal",new ze(g,3)),this.setAttribute("uv",new ze(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vm(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Yc extends Tn{constructor(t=1,i=32,s=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(h+d,Math.PI);let g=0;const v=[],m=new G,_=new G,S=[],E=[],b=[],M=[];for(let x=0;x<=s;x++){const w=[],L=x/s;let A=0;x===0&&h===0?A=.5/i:x===s&&p===Math.PI&&(A=-.5/i);for(let H=0;H<=i;H++){const z=H/i;m.x=-t*Math.cos(l+z*u)*Math.sin(h+L*d),m.y=t*Math.cos(h+L*d),m.z=t*Math.sin(l+z*u)*Math.sin(h+L*d),E.push(m.x,m.y,m.z),_.copy(m).normalize(),b.push(_.x,_.y,_.z),M.push(z+A,1-L),w.push(g++)}v.push(w)}for(let x=0;x<s;x++)for(let w=0;w<i;w++){const L=v[x][w+1],A=v[x][w],H=v[x+1][w],z=v[x+1][w+1];(x!==0||h>0)&&S.push(L,A,z),(x!==s-1||p<Math.PI)&&S.push(A,H,z)}this.setIndex(S),this.setAttribute("position",new ze(E,3)),this.setAttribute("normal",new ze(b,3)),this.setAttribute("uv",new ze(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Wn extends Tn{constructor(t=1,i=.4,s=12,l=48,u=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:u},s=Math.floor(s),l=Math.floor(l);const h=[],d=[],p=[],g=[],v=new G,m=new G,_=new G;for(let S=0;S<=s;S++)for(let E=0;E<=l;E++){const b=E/l*u,M=S/s*Math.PI*2;m.x=(t+i*Math.cos(M))*Math.cos(b),m.y=(t+i*Math.cos(M))*Math.sin(b),m.z=i*Math.sin(M),d.push(m.x,m.y,m.z),v.x=t*Math.cos(b),v.y=t*Math.sin(b),_.subVectors(m,v).normalize(),p.push(_.x,_.y,_.z),g.push(E/l),g.push(S/s)}for(let S=1;S<=s;S++)for(let E=1;E<=l;E++){const b=(l+1)*S+E-1,M=(l+1)*(S-1)+E-1,x=(l+1)*(S-1)+E,w=(l+1)*S+E;h.push(b,M,w),h.push(M,x,w)}this.setIndex(h),this.setAttribute("position",new ze(d,3)),this.setAttribute("normal",new ze(p,3)),this.setAttribute("uv",new ze(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class _m extends Tn{constructor(t=new gm(new G(-1,-1,0),new G(-1,1,0),new G(1,1,0)),i=64,s=1,l=8,u=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:s,radialSegments:l,closed:u};const h=t.computeFrenetFrames(i,u);this.tangents=h.tangents,this.normals=h.normals,this.binormals=h.binormals;const d=new G,p=new G,g=new Xt;let v=new G;const m=[],_=[],S=[],E=[];b(),this.setIndex(E),this.setAttribute("position",new ze(m,3)),this.setAttribute("normal",new ze(_,3)),this.setAttribute("uv",new ze(S,2));function b(){for(let L=0;L<i;L++)M(L);M(u===!1?i:0),w(),x()}function M(L){v=t.getPointAt(L/i,v);const A=h.normals[L],H=h.binormals[L];for(let z=0;z<=l;z++){const P=z/l*Math.PI*2,I=Math.sin(P),D=-Math.cos(P);p.x=D*A.x+I*H.x,p.y=D*A.y+I*H.y,p.z=D*A.z+I*H.z,p.normalize(),_.push(p.x,p.y,p.z),d.x=v.x+s*p.x,d.y=v.y+s*p.y,d.z=v.z+s*p.z,m.push(d.x,d.y,d.z)}}function x(){for(let L=1;L<=i;L++)for(let A=1;A<=l;A++){const H=(l+1)*(L-1)+(A-1),z=(l+1)*L+(A-1),P=(l+1)*L+A,I=(l+1)*(L-1)+A;E.push(H,z,I),E.push(z,P,I)}}function w(){for(let L=0;L<=i;L++)for(let A=0;A<=l;A++)g.x=L/i,g.y=A/l,S.push(g.x,g.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new _m(new L1[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class O1 extends jn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $s extends xo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dx,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ea,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class gy extends $s{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class P1 extends xo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class z1 extends xo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const vy={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class B1{constructor(t,i,s){const l=this;let u=!1,h=0,d=0,p;const g=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this.itemStart=function(v){d++,u===!1&&l.onStart!==void 0&&l.onStart(v,h,d),u=!0},this.itemEnd=function(v){h++,l.onProgress!==void 0&&l.onProgress(v,h,d),h===d&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(v){l.onError!==void 0&&l.onError(v)},this.resolveURL=function(v){return p?p(v):v},this.setURLModifier=function(v){return p=v,this},this.addHandler=function(v,m){return g.push(v,m),this},this.removeHandler=function(v){const m=g.indexOf(v);return m!==-1&&g.splice(m,2),this},this.getHandler=function(v){for(let m=0,_=g.length;m<_;m+=2){const S=g[m],E=g[m+1];if(S.global&&(S.lastIndex=0),S.test(v))return E}return null}}}const I1=new B1;class ym{constructor(t){this.manager=t!==void 0?t:I1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const s=this;return new Promise(function(l,u){s.load(t,l,i,u)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ym.DEFAULT_MATERIAL_NAME="__DEFAULT";class F1 extends ym{constructor(t){super(t)}load(t,i,s,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const u=this,h=vy.get(t);if(h!==void 0)return u.manager.itemStart(t),setTimeout(function(){i&&i(h),u.manager.itemEnd(t)},0),h;const d=Pl("img");function p(){v(),vy.add(t,this),i&&i(this),u.manager.itemEnd(t)}function g(m){v(),l&&l(m),u.manager.itemError(t),u.manager.itemEnd(t)}function v(){d.removeEventListener("load",p,!1),d.removeEventListener("error",g,!1)}return d.addEventListener("load",p,!1),d.addEventListener("error",g,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),u.manager.itemStart(t),d.src=t,d}}class H1 extends ym{constructor(t){super(t)}load(t,i,s,l){const u=new Ln,h=new F1(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(t,function(d){u.image=d,u.needsUpdate=!0,i!==void 0&&i(u)},s,l),u}}class wx extends Hn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const $d=new ke,_y=new G,yy=new G;class V1{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.mapType=ta,this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cm,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new Xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;_y.setFromMatrixPosition(t.matrixWorld),i.position.copy(_y),yy.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(yy),i.updateMatrixWorld(),$d.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix($d),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply($d)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const xy=new ke,Ml=new G,tp=new G;class G1 extends V1{constructor(){super(new fi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xt(4,2),this._viewportCount=6,this._viewports=[new Xe(2,1,1,1),new Xe(0,1,1,1),new Xe(3,1,1,1),new Xe(1,1,1,1),new Xe(3,0,1,1),new Xe(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(t,i=0){const s=this.camera,l=this.matrix,u=t.distance||s.far;u!==s.far&&(s.far=u,s.updateProjectionMatrix()),Ml.setFromMatrixPosition(t.matrixWorld),s.position.copy(Ml),tp.copy(s.position),tp.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(tp),s.updateMatrixWorld(),l.makeTranslation(-Ml.x,-Ml.y,-Ml.z),xy.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xy)}}class Wp extends wx{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new G1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Dx extends Ex{constructor(t=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,h=s+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=g*this.view.offsetX,h=u+g*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class X1 extends wx{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class k1 extends fi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Nx{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Sy(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=Sy();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function Sy(){return performance.now()}function My(o,t,i,s){const l=q1(s);switch(i){case ux:return o*t;case im:return o*t/l.components*l.byteLength;case am:return o*t/l.components*l.byteLength;case fx:return o*t*2/l.components*l.byteLength;case sm:return o*t*2/l.components*l.byteLength;case cx:return o*t*3/l.components*l.byteLength;case zi:return o*t*4/l.components*l.byteLength;case rm:return o*t*4/l.components*l.byteLength;case Pc:case zc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Bc:case Ic:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Sp:case Ep:return Math.max(o,16)*Math.max(t,8)/4;case xp:case Mp:return Math.max(o,8)*Math.max(t,8)/2;case Tp:case bp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Ap:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Cp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Rp:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case wp:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Dp:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Np:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Up:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Lp:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Op:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Pp:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case zp:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Bp:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Ip:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Fp:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Hp:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Fc:case Vp:case Gp:return Math.ceil(o/4)*Math.ceil(t/4)*16;case hx:case Xp:return Math.ceil(o/4)*Math.ceil(t/4)*8;case kp:case qp:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function q1(o){switch(o){case ta:case rx:return{byteLength:1,components:1};case Dl:case ox:case Da:return{byteLength:2,components:1};case em:case nm:return{byteLength:2,components:4};case er:case tm:case $i:return{byteLength:4,components:1};case lx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ux(){let o=null,t=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Y1(o){const t=new WeakMap;function i(d,p){const g=d.array,v=d.usage,m=g.byteLength,_=o.createBuffer();o.bindBuffer(p,_),o.bufferData(p,g,v),d.onUploadCallback();let S;if(g instanceof Float32Array)S=o.FLOAT;else if(g instanceof Uint16Array)d.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(g instanceof Int16Array)S=o.SHORT;else if(g instanceof Uint32Array)S=o.UNSIGNED_INT;else if(g instanceof Int32Array)S=o.INT;else if(g instanceof Int8Array)S=o.BYTE;else if(g instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:_,type:S,bytesPerElement:g.BYTES_PER_ELEMENT,version:d.version,size:m}}function s(d,p,g){const v=p.array,m=p.updateRanges;if(o.bindBuffer(g,d),m.length===0)o.bufferSubData(g,0,v);else{m.sort((S,E)=>S.start-E.start);let _=0;for(let S=1;S<m.length;S++){const E=m[_],b=m[S];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++_,m[_]=b)}m.length=_+1;for(let S=0,E=m.length;S<E;S++){const b=m[S];o.bufferSubData(g,b.start*v.BYTES_PER_ELEMENT,v,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(o.deleteBuffer(p.buffer),t.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=t.get(d);(!v||v.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const g=t.get(d);if(g===void 0)t.set(d,i(d,p));else if(g.version<d.version){if(g.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(g.buffer,d,p),g.version=d.version}}return{get:l,remove:u,update:h}}var W1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,j1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Z1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Q1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,K1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,J1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,nb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ib=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ab=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ob=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ub=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,db=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,gb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_b=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Eb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ab=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Rb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Db=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ub=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ob=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ib=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Fb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Hb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$b=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,uA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_A=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,SA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,MA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,EA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,wA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,DA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,NA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,UA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,OA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,BA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,HA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,VA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,GA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,XA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const YA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$A=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,t2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,e2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,n2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,s2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,o2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,f2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,d2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,p2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,v2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,S2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,T2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,b2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ve={alphahash_fragment:W1,alphahash_pars_fragment:j1,alphamap_fragment:Z1,alphamap_pars_fragment:Q1,alphatest_fragment:K1,alphatest_pars_fragment:J1,aomap_fragment:$1,aomap_pars_fragment:tb,batching_pars_vertex:eb,batching_vertex:nb,begin_vertex:ib,beginnormal_vertex:ab,bsdfs:sb,iridescence_fragment:rb,bumpmap_pars_fragment:ob,clipping_planes_fragment:lb,clipping_planes_pars_fragment:ub,clipping_planes_pars_vertex:cb,clipping_planes_vertex:fb,color_fragment:hb,color_pars_fragment:db,color_pars_vertex:pb,color_vertex:mb,common:gb,cube_uv_reflection_fragment:vb,defaultnormal_vertex:_b,displacementmap_pars_vertex:yb,displacementmap_vertex:xb,emissivemap_fragment:Sb,emissivemap_pars_fragment:Mb,colorspace_fragment:Eb,colorspace_pars_fragment:Tb,envmap_fragment:bb,envmap_common_pars_fragment:Ab,envmap_pars_fragment:Cb,envmap_pars_vertex:Rb,envmap_physical_pars_fragment:Fb,envmap_vertex:wb,fog_vertex:Db,fog_pars_vertex:Nb,fog_fragment:Ub,fog_pars_fragment:Lb,gradientmap_pars_fragment:Ob,lightmap_pars_fragment:Pb,lights_lambert_fragment:zb,lights_lambert_pars_fragment:Bb,lights_pars_begin:Ib,lights_toon_fragment:Hb,lights_toon_pars_fragment:Vb,lights_phong_fragment:Gb,lights_phong_pars_fragment:Xb,lights_physical_fragment:kb,lights_physical_pars_fragment:qb,lights_fragment_begin:Yb,lights_fragment_maps:Wb,lights_fragment_end:jb,logdepthbuf_fragment:Zb,logdepthbuf_pars_fragment:Qb,logdepthbuf_pars_vertex:Kb,logdepthbuf_vertex:Jb,map_fragment:$b,map_pars_fragment:tA,map_particle_fragment:eA,map_particle_pars_fragment:nA,metalnessmap_fragment:iA,metalnessmap_pars_fragment:aA,morphinstance_vertex:sA,morphcolor_vertex:rA,morphnormal_vertex:oA,morphtarget_pars_vertex:lA,morphtarget_vertex:uA,normal_fragment_begin:cA,normal_fragment_maps:fA,normal_pars_fragment:hA,normal_pars_vertex:dA,normal_vertex:pA,normalmap_pars_fragment:mA,clearcoat_normal_fragment_begin:gA,clearcoat_normal_fragment_maps:vA,clearcoat_pars_fragment:_A,iridescence_pars_fragment:yA,opaque_fragment:xA,packing:SA,premultiplied_alpha_fragment:MA,project_vertex:EA,dithering_fragment:TA,dithering_pars_fragment:bA,roughnessmap_fragment:AA,roughnessmap_pars_fragment:CA,shadowmap_pars_fragment:RA,shadowmap_pars_vertex:wA,shadowmap_vertex:DA,shadowmask_pars_fragment:NA,skinbase_vertex:UA,skinning_pars_vertex:LA,skinning_vertex:OA,skinnormal_vertex:PA,specularmap_fragment:zA,specularmap_pars_fragment:BA,tonemapping_fragment:IA,tonemapping_pars_fragment:FA,transmission_fragment:HA,transmission_pars_fragment:VA,uv_pars_fragment:GA,uv_pars_vertex:XA,uv_vertex:kA,worldpos_vertex:qA,background_vert:YA,background_frag:WA,backgroundCube_vert:jA,backgroundCube_frag:ZA,cube_vert:QA,cube_frag:KA,depth_vert:JA,depth_frag:$A,distanceRGBA_vert:t2,distanceRGBA_frag:e2,equirect_vert:n2,equirect_frag:i2,linedashed_vert:a2,linedashed_frag:s2,meshbasic_vert:r2,meshbasic_frag:o2,meshlambert_vert:l2,meshlambert_frag:u2,meshmatcap_vert:c2,meshmatcap_frag:f2,meshnormal_vert:h2,meshnormal_frag:d2,meshphong_vert:p2,meshphong_frag:m2,meshphysical_vert:g2,meshphysical_frag:v2,meshtoon_vert:_2,meshtoon_frag:y2,points_vert:x2,points_frag:S2,shadow_vert:M2,shadow_frag:E2,sprite_vert:T2,sprite_frag:b2},Lt={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},Qi={basic:{uniforms:Yn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Yn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new fe(0)}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Yn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Yn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Yn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new fe(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Yn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Yn([Lt.points,Lt.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Yn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Yn([Lt.common,Lt.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Yn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Yn([Lt.sprite,Lt.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distanceRGBA:{uniforms:Yn([Lt.common,Lt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distanceRGBA_vert,fragmentShader:ve.distanceRGBA_frag},shadow:{uniforms:Yn([Lt.lights,Lt.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};Qi.physical={uniforms:Yn([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};const Nc={r:0,b:0,g:0},qs=new ea,A2=new ke;function C2(o,t,i,s,l,u,h){const d=new fe(0);let p=u===!0?0:1,g,v,m=null,_=0,S=null;function E(L){let A=L.isScene===!0?L.background:null;return A&&A.isTexture&&(A=(L.backgroundBlurriness>0?i:t).get(A)),A}function b(L){let A=!1;const H=E(L);H===null?x(d,p):H&&H.isColor&&(x(H,1),A=!0);const z=o.xr.getEnvironmentBlendMode();z==="additive"?s.buffers.color.setClear(0,0,0,1,h):z==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||A)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(L,A){const H=E(A);H&&(H.isCubeTexture||H.mapping===Wc)?(v===void 0&&(v=new se(new Ua(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:mo(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(z,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),qs.copy(A.backgroundRotation),qs.x*=-1,qs.y*=-1,qs.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(qs.y*=-1,qs.z*=-1),v.material.uniforms.envMap.value=H,v.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(A2.makeRotationFromEuler(qs)),v.material.toneMapped=Ue.getTransfer(H.colorSpace)!==He,(m!==H||_!==H.version||S!==o.toneMapping)&&(v.material.needsUpdate=!0,m=H,_=H.version,S=o.toneMapping),v.layers.enableAll(),L.unshift(v,v.geometry,v.material,0,0,null)):H&&H.isTexture&&(g===void 0&&(g=new se(new Fl(2,2),new jn({name:"BackgroundMaterial",uniforms:mo(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(g)),g.material.uniforms.t2D.value=H,g.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,g.material.toneMapped=Ue.getTransfer(H.colorSpace)!==He,H.matrixAutoUpdate===!0&&H.updateMatrix(),g.material.uniforms.uvTransform.value.copy(H.matrix),(m!==H||_!==H.version||S!==o.toneMapping)&&(g.material.needsUpdate=!0,m=H,_=H.version,S=o.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null))}function x(L,A){L.getRGB(Nc,Mx(o)),s.buffers.color.setClear(Nc.r,Nc.g,Nc.b,A,h)}function w(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,A=1){d.set(L),p=A,x(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,x(d,p)},render:b,addToRenderList:M,dispose:w}}function R2(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=_(null);let u=l,h=!1;function d(R,V,nt,at,lt){let ft=!1;const k=m(at,nt,V);u!==k&&(u=k,g(u.object)),ft=S(R,at,nt,lt),ft&&E(R,at,nt,lt),lt!==null&&t.update(lt,o.ELEMENT_ARRAY_BUFFER),(ft||h)&&(h=!1,A(R,V,nt,at),lt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(lt).buffer))}function p(){return o.createVertexArray()}function g(R){return o.bindVertexArray(R)}function v(R){return o.deleteVertexArray(R)}function m(R,V,nt){const at=nt.wireframe===!0;let lt=s[R.id];lt===void 0&&(lt={},s[R.id]=lt);let ft=lt[V.id];ft===void 0&&(ft={},lt[V.id]=ft);let k=ft[at];return k===void 0&&(k=_(p()),ft[at]=k),k}function _(R){const V=[],nt=[],at=[];for(let lt=0;lt<i;lt++)V[lt]=0,nt[lt]=0,at[lt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:nt,attributeDivisors:at,object:R,attributes:{},index:null}}function S(R,V,nt,at){const lt=u.attributes,ft=V.attributes;let k=0;const ot=nt.getAttributes();for(const K in ot)if(ot[K].location>=0){const St=lt[K];let Ft=ft[K];if(Ft===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(Ft=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(Ft=R.instanceColor)),St===void 0||St.attribute!==Ft||Ft&&St.data!==Ft.data)return!0;k++}return u.attributesNum!==k||u.index!==at}function E(R,V,nt,at){const lt={},ft=V.attributes;let k=0;const ot=nt.getAttributes();for(const K in ot)if(ot[K].location>=0){let St=ft[K];St===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(St=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(St=R.instanceColor));const Ft={};Ft.attribute=St,St&&St.data&&(Ft.data=St.data),lt[K]=Ft,k++}u.attributes=lt,u.attributesNum=k,u.index=at}function b(){const R=u.newAttributes;for(let V=0,nt=R.length;V<nt;V++)R[V]=0}function M(R){x(R,0)}function x(R,V){const nt=u.newAttributes,at=u.enabledAttributes,lt=u.attributeDivisors;nt[R]=1,at[R]===0&&(o.enableVertexAttribArray(R),at[R]=1),lt[R]!==V&&(o.vertexAttribDivisor(R,V),lt[R]=V)}function w(){const R=u.newAttributes,V=u.enabledAttributes;for(let nt=0,at=V.length;nt<at;nt++)V[nt]!==R[nt]&&(o.disableVertexAttribArray(nt),V[nt]=0)}function L(R,V,nt,at,lt,ft,k){k===!0?o.vertexAttribIPointer(R,V,nt,lt,ft):o.vertexAttribPointer(R,V,nt,at,lt,ft)}function A(R,V,nt,at){b();const lt=at.attributes,ft=nt.getAttributes(),k=V.defaultAttributeValues;for(const ot in ft){const K=ft[ot];if(K.location>=0){let yt=lt[ot];if(yt===void 0&&(ot==="instanceMatrix"&&R.instanceMatrix&&(yt=R.instanceMatrix),ot==="instanceColor"&&R.instanceColor&&(yt=R.instanceColor)),yt!==void 0){const St=yt.normalized,Ft=yt.itemSize,Jt=t.get(yt);if(Jt===void 0)continue;const xe=Jt.buffer,U=Jt.type,j=Jt.bytesPerElement,gt=U===o.INT||U===o.UNSIGNED_INT||yt.gpuType===tm;if(yt.isInterleavedBufferAttribute){const ut=yt.data,bt=ut.stride,Gt=yt.offset;if(ut.isInstancedInterleavedBuffer){for(let wt=0;wt<K.locationSize;wt++)x(K.location+wt,ut.meshPerAttribute);R.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let wt=0;wt<K.locationSize;wt++)M(K.location+wt);o.bindBuffer(o.ARRAY_BUFFER,xe);for(let wt=0;wt<K.locationSize;wt++)L(K.location+wt,Ft/K.locationSize,U,St,bt*j,(Gt+Ft/K.locationSize*wt)*j,gt)}else{if(yt.isInstancedBufferAttribute){for(let ut=0;ut<K.locationSize;ut++)x(K.location+ut,yt.meshPerAttribute);R.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let ut=0;ut<K.locationSize;ut++)M(K.location+ut);o.bindBuffer(o.ARRAY_BUFFER,xe);for(let ut=0;ut<K.locationSize;ut++)L(K.location+ut,Ft/K.locationSize,U,St,Ft*j,Ft/K.locationSize*ut*j,gt)}}else if(k!==void 0){const St=k[ot];if(St!==void 0)switch(St.length){case 2:o.vertexAttrib2fv(K.location,St);break;case 3:o.vertexAttrib3fv(K.location,St);break;case 4:o.vertexAttrib4fv(K.location,St);break;default:o.vertexAttrib1fv(K.location,St)}}}}w()}function H(){I();for(const R in s){const V=s[R];for(const nt in V){const at=V[nt];for(const lt in at)v(at[lt].object),delete at[lt];delete V[nt]}delete s[R]}}function z(R){if(s[R.id]===void 0)return;const V=s[R.id];for(const nt in V){const at=V[nt];for(const lt in at)v(at[lt].object),delete at[lt];delete V[nt]}delete s[R.id]}function P(R){for(const V in s){const nt=s[V];if(nt[R.id]===void 0)continue;const at=nt[R.id];for(const lt in at)v(at[lt].object),delete at[lt];delete nt[R.id]}}function I(){D(),h=!0,u!==l&&(u=l,g(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:I,resetDefaultState:D,dispose:H,releaseStatesOfGeometry:z,releaseStatesOfProgram:P,initAttributes:b,enableAttribute:M,disableUnusedAttributes:w}}function w2(o,t,i){let s;function l(g){s=g}function u(g,v){o.drawArrays(s,g,v),i.update(v,s,1)}function h(g,v,m){m!==0&&(o.drawArraysInstanced(s,g,v,m),i.update(v,s,m))}function d(g,v,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,g,0,v,0,m);let S=0;for(let E=0;E<m;E++)S+=v[E];i.update(S,s,1)}function p(g,v,m,_){if(m===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<g.length;E++)h(g[E],v[E],_[E]);else{S.multiDrawArraysInstancedWEBGL(s,g,0,v,0,_,0,m);let E=0;for(let b=0;b<m;b++)E+=v[b]*_[b];i.update(E,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function D2(o,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==zi&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const I=P===Da&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==ta&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==$i&&!I)}function p(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=i.precision!==void 0?i.precision:"highp";const v=p(g);v!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",v,"instead."),g=v);const m=i.logarithmicDepthBuffer===!0,_=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),w=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),A=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=E>0,z=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:g,logarithmicDepthBuffer:m,reverseDepthBuffer:_,maxTextures:S,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:w,maxVaryings:L,maxFragmentUniforms:A,vertexTextures:H,maxSamples:z}}function N2(o){const t=this;let i=null,s=0,l=!1,u=!1;const h=new Ws,d=new ge,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(m,_){const S=m.length!==0||_||s!==0||l;return l=_,s=m.length,S},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(m,_){i=v(m,_,0)},this.setState=function(m,_,S){const E=m.clippingPlanes,b=m.clipIntersection,M=m.clipShadows,x=o.get(m);if(!l||E===null||E.length===0||u&&!M)u?v(null):g();else{const w=u?0:s,L=w*4;let A=x.clippingState||null;p.value=A,A=v(E,_,L,S);for(let H=0;H!==L;++H)A[H]=i[H];x.clippingState=A,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=w}};function g(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(m,_,S,E){const b=m!==null?m.length:0;let M=null;if(b!==0){if(M=p.value,E!==!0||M===null){const x=S+b*4,w=_.matrixWorldInverse;d.getNormalMatrix(w),(M===null||M.length<x)&&(M=new Float32Array(x));for(let L=0,A=S;L!==b;++L,A+=4)h.copy(m[L]).applyMatrix4(w,d),h.normal.toArray(M,A),M[A+3]=h.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,M}}function U2(o){let t=new WeakMap;function i(h,d){return d===vp?h.mapping=fo:d===_p&&(h.mapping=ho),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===vp||d===_p)if(t.has(h)){const p=t.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const g=new f1(p.height);return g.fromEquirectangularTexture(o,h),t.set(h,g),h.addEventListener("dispose",l),i(g.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const oo=4,Ey=[.125,.215,.35,.446,.526,.582],Qs=20,ep=new Dx,Ty=new fe;let np=null,ip=0,ap=0,sp=!1;const js=(1+Math.sqrt(5))/2,ao=1/js,by=[new G(-js,ao,0),new G(js,ao,0),new G(-ao,0,js),new G(ao,0,js),new G(0,js,-ao),new G(0,js,ao),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)],L2=new G;class jp{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,u={}){const{size:h=256,position:d=L2}=u;np=this._renderer.getRenderTarget(),ip=this._renderer.getActiveCubeFace(),ap=this._renderer.getActiveMipmapLevel(),sp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,s,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ry(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(np,ip,ap),this._renderer.xr.enabled=sp,t.scissorTest=!1,Uc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===fo||t.mapping===ho?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),np=this._renderer.getRenderTarget(),ip=this._renderer.getActiveCubeFace(),ap=this._renderer.getActiveMipmapLevel(),sp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ji,minFilter:Ji,generateMipmaps:!1,type:Da,format:zi,colorSpace:po,depthBuffer:!1},l=Ay(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ay(t,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=O2(u)),this._blurMaterial=P2(u,t,i)}return l}_compileMaterial(t){const i=new se(this._lodPlanes[0],t);this._renderer.compile(i,ep)}_sceneToCubeUV(t,i,s,l,u){const p=new fi(90,1,i,s),g=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],m=this._renderer,_=m.autoClear,S=m.toneMapping;m.getClearColor(Ty),m.toneMapping=ms,m.autoClear=!1;const E=new Ki({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1}),b=new se(new Ua,E);let M=!1;const x=t.background;x?x.isColor&&(E.color.copy(x),t.background=null,M=!0):(E.color.copy(Ty),M=!0);for(let w=0;w<6;w++){const L=w%3;L===0?(p.up.set(0,g[w],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+v[w],u.y,u.z)):L===1?(p.up.set(0,0,g[w]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+v[w],u.z)):(p.up.set(0,g[w],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+v[w]));const A=this._cubeSize;Uc(l,L*A,w>2?A:0,A,A),m.setRenderTarget(l),M&&m.render(b,p),m.render(t,p)}b.geometry.dispose(),b.material.dispose(),m.toneMapping=S,m.autoClear=_,t.background=x}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===fo||t.mapping===ho;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ry()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cy());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new se(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const p=this._cubeSize;Uc(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(h,ep)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=by[(l-u-1)%by.length];this._blur(t,u-1,u,h,d)}i.autoClear=s}_blur(t,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",u),this._halfBlur(h,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,h,d){const p=this._renderer,g=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,m=new se(this._lodPlanes[l],g),_=g.uniforms,S=this._sizeLods[s]-1,E=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Qs-1),b=u/E,M=isFinite(u)?1+Math.floor(v*b):Qs;M>Qs&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Qs}`);const x=[];let w=0;for(let P=0;P<Qs;++P){const I=P/b,D=Math.exp(-I*I/2);x.push(D),P===0?w+=D:P<M&&(w+=2*D)}for(let P=0;P<x.length;P++)x[P]=x[P]/w;_.envMap.value=t.texture,_.samples.value=M,_.weights.value=x,_.latitudinal.value=h==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:L}=this;_.dTheta.value=E,_.mipInt.value=L-s;const A=this._sizeLods[l],H=3*A*(l>L-oo?l-L+oo:0),z=4*(this._cubeSize-A);Uc(i,H,z,3*A,2*A),p.setRenderTarget(i),p.render(m,ep)}}function O2(o){const t=[],i=[],s=[];let l=o;const u=o-oo+1+Ey.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>o-oo?p=Ey[h-o+oo-1]:h===0&&(p=0),s.push(p);const g=1/(d-2),v=-g,m=1+g,_=[v,v,m,v,m,m,v,v,m,m,v,m],S=6,E=6,b=3,M=2,x=1,w=new Float32Array(b*E*S),L=new Float32Array(M*E*S),A=new Float32Array(x*E*S);for(let z=0;z<S;z++){const P=z%3*2/3-1,I=z>2?0:-1,D=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];w.set(D,b*E*z),L.set(_,M*E*z);const R=[z,z,z,z,z,z];A.set(R,x*E*z)}const H=new Tn;H.setAttribute("position",new pi(w,b)),H.setAttribute("uv",new pi(L,M)),H.setAttribute("faceIndex",new pi(A,x)),t.push(H),l>oo&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function Ay(o,t,i){const s=new Bi(o,t,i);return s.texture.mapping=Wc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Uc(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function P2(o,t,i){const s=new Float32Array(Qs),l=new G(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:Qs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:xm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wa,depthTest:!1,depthWrite:!1})}function Cy(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wa,depthTest:!1,depthWrite:!1})}function Ry(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wa,depthTest:!1,depthWrite:!1})}function xm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function z2(o){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const p=d.mapping,g=p===vp||p===_p,v=p===fo||p===ho;if(g||v){let m=t.get(d);const _=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return i===null&&(i=new jp(o)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const S=d.image;return g&&S&&S.height>0||v&&S&&l(S)?(i===null&&(i=new jp(o)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function l(d){let p=0;const g=6;for(let v=0;v<g;v++)d[v]!==void 0&&p++;return p===g}function u(d){const p=d.target;p.removeEventListener("dispose",u);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function B2(o){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Hc("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function I2(o,t,i,s){const l={},u=new WeakMap;function h(m){const _=m.target;_.index!==null&&t.remove(_.index);for(const E in _.attributes)t.remove(_.attributes[E]);_.removeEventListener("dispose",h),delete l[_.id];const S=u.get(_);S&&(t.remove(S),u.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function d(m,_){return l[_.id]===!0||(_.addEventListener("dispose",h),l[_.id]=!0,i.memory.geometries++),_}function p(m){const _=m.attributes;for(const S in _)t.update(_[S],o.ARRAY_BUFFER)}function g(m){const _=[],S=m.index,E=m.attributes.position;let b=0;if(S!==null){const w=S.array;b=S.version;for(let L=0,A=w.length;L<A;L+=3){const H=w[L+0],z=w[L+1],P=w[L+2];_.push(H,z,z,P,P,H)}}else if(E!==void 0){const w=E.array;b=E.version;for(let L=0,A=w.length/3-1;L<A;L+=3){const H=L+0,z=L+1,P=L+2;_.push(H,z,z,P,P,H)}}else return;const M=new(mx(_)?Sx:xx)(_,1);M.version=b;const x=u.get(m);x&&t.remove(x),u.set(m,M)}function v(m){const _=u.get(m);if(_){const S=m.index;S!==null&&_.version<S.version&&g(m)}else g(m);return u.get(m)}return{get:d,update:p,getWireframeAttribute:v}}function F2(o,t,i){let s;function l(_){s=_}let u,h;function d(_){u=_.type,h=_.bytesPerElement}function p(_,S){o.drawElements(s,S,u,_*h),i.update(S,s,1)}function g(_,S,E){E!==0&&(o.drawElementsInstanced(s,S,u,_*h,E),i.update(S,s,E))}function v(_,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,u,_,0,E);let M=0;for(let x=0;x<E;x++)M+=S[x];i.update(M,s,1)}function m(_,S,E,b){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<_.length;x++)g(_[x]/h,S[x],b[x]);else{M.multiDrawElementsInstancedWEBGL(s,S,0,u,_,0,b,0,E);let x=0;for(let w=0;w<E;w++)x+=S[w]*b[w];i.update(x,s,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=g,this.renderMultiDraw=v,this.renderMultiDrawInstances=m}function H2(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function V2(o,t,i){const s=new WeakMap,l=new Xe;function u(h,d,p){const g=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,m=v!==void 0?v.length:0;let _=s.get(d);if(_===void 0||_.count!==m){let D=function(){P.dispose(),s.delete(d),d.removeEventListener("dispose",D)};_!==void 0&&_.texture.dispose();const S=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,b=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],x=d.morphAttributes.normal||[],w=d.morphAttributes.color||[];let L=0;S===!0&&(L=1),E===!0&&(L=2),b===!0&&(L=3);let A=d.attributes.position.count*L,H=1;A>t.maxTextureSize&&(H=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const z=new Float32Array(A*H*4*m),P=new gx(z,A,H,m);P.type=$i,P.needsUpdate=!0;const I=L*4;for(let R=0;R<m;R++){const V=M[R],nt=x[R],at=w[R],lt=A*H*4*R;for(let ft=0;ft<V.count;ft++){const k=ft*I;S===!0&&(l.fromBufferAttribute(V,ft),z[lt+k+0]=l.x,z[lt+k+1]=l.y,z[lt+k+2]=l.z,z[lt+k+3]=0),E===!0&&(l.fromBufferAttribute(nt,ft),z[lt+k+4]=l.x,z[lt+k+5]=l.y,z[lt+k+6]=l.z,z[lt+k+7]=0),b===!0&&(l.fromBufferAttribute(at,ft),z[lt+k+8]=l.x,z[lt+k+9]=l.y,z[lt+k+10]=l.z,z[lt+k+11]=at.itemSize===4?l.w:1)}}_={count:m,texture:P,size:new Xt(A,H)},s.set(d,_),d.addEventListener("dispose",D)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let S=0;for(let b=0;b<g.length;b++)S+=g[b];const E=d.morphTargetsRelative?1:1-S;p.getUniforms().setValue(o,"morphTargetBaseInfluence",E),p.getUniforms().setValue(o,"morphTargetInfluences",g)}p.getUniforms().setValue(o,"morphTargetsTexture",_.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:u}}function G2(o,t,i,s){let l=new WeakMap;function u(p){const g=s.render.frame,v=p.geometry,m=t.get(p,v);if(l.get(m)!==g&&(t.update(m),l.set(m,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==g&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,g))),p.isSkinnedMesh){const _=p.skeleton;l.get(_)!==g&&(_.update(),l.set(_,g))}return m}function h(){l=new WeakMap}function d(p){const g=p.target;g.removeEventListener("dispose",d),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:u,dispose:h}}const Lx=new Ln,wy=new Cx(1,1),Ox=new gx,Px=new ZT,zx=new Tx,Dy=[],Ny=[],Uy=new Float32Array(16),Ly=new Float32Array(9),Oy=new Float32Array(4);function So(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let u=Dy[l];if(u===void 0&&(u=new Float32Array(l),Dy[l]=u),t!==0){s.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(u,d)}return u}function mn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function gn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function jc(o,t){let i=Ny[t];i===void 0&&(i=new Int32Array(t),Ny[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function X2(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function k2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2fv(this.addr,t),gn(i,t)}}function q2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(mn(i,t))return;o.uniform3fv(this.addr,t),gn(i,t)}}function Y2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4fv(this.addr,t),gn(i,t)}}function W2(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(mn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,s))return;Oy.set(s),o.uniformMatrix2fv(this.addr,!1,Oy),gn(i,s)}}function j2(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(mn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,s))return;Ly.set(s),o.uniformMatrix3fv(this.addr,!1,Ly),gn(i,s)}}function Z2(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(mn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,s))return;Uy.set(s),o.uniformMatrix4fv(this.addr,!1,Uy),gn(i,s)}}function Q2(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function K2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2iv(this.addr,t),gn(i,t)}}function J2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;o.uniform3iv(this.addr,t),gn(i,t)}}function $2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4iv(this.addr,t),gn(i,t)}}function tC(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function eC(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2uiv(this.addr,t),gn(i,t)}}function nC(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;o.uniform3uiv(this.addr,t),gn(i,t)}}function iC(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4uiv(this.addr,t),gn(i,t)}}function aC(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(wy.compareFunction=px,u=wy):u=Lx,i.setTexture2D(t||u,l)}function sC(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Px,l)}function rC(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||zx,l)}function oC(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Ox,l)}function lC(o){switch(o){case 5126:return X2;case 35664:return k2;case 35665:return q2;case 35666:return Y2;case 35674:return W2;case 35675:return j2;case 35676:return Z2;case 5124:case 35670:return Q2;case 35667:case 35671:return K2;case 35668:case 35672:return J2;case 35669:case 35673:return $2;case 5125:return tC;case 36294:return eC;case 36295:return nC;case 36296:return iC;case 35678:case 36198:case 36298:case 36306:case 35682:return aC;case 35679:case 36299:case 36307:return sC;case 35680:case 36300:case 36308:case 36293:return rC;case 36289:case 36303:case 36311:case 36292:return oC}}function uC(o,t){o.uniform1fv(this.addr,t)}function cC(o,t){const i=So(t,this.size,2);o.uniform2fv(this.addr,i)}function fC(o,t){const i=So(t,this.size,3);o.uniform3fv(this.addr,i)}function hC(o,t){const i=So(t,this.size,4);o.uniform4fv(this.addr,i)}function dC(o,t){const i=So(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function pC(o,t){const i=So(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function mC(o,t){const i=So(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function gC(o,t){o.uniform1iv(this.addr,t)}function vC(o,t){o.uniform2iv(this.addr,t)}function _C(o,t){o.uniform3iv(this.addr,t)}function yC(o,t){o.uniform4iv(this.addr,t)}function xC(o,t){o.uniform1uiv(this.addr,t)}function SC(o,t){o.uniform2uiv(this.addr,t)}function MC(o,t){o.uniform3uiv(this.addr,t)}function EC(o,t){o.uniform4uiv(this.addr,t)}function TC(o,t,i){const s=this.cache,l=t.length,u=jc(i,l);mn(s,u)||(o.uniform1iv(this.addr,u),gn(s,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||Lx,u[h])}function bC(o,t,i){const s=this.cache,l=t.length,u=jc(i,l);mn(s,u)||(o.uniform1iv(this.addr,u),gn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Px,u[h])}function AC(o,t,i){const s=this.cache,l=t.length,u=jc(i,l);mn(s,u)||(o.uniform1iv(this.addr,u),gn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||zx,u[h])}function CC(o,t,i){const s=this.cache,l=t.length,u=jc(i,l);mn(s,u)||(o.uniform1iv(this.addr,u),gn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Ox,u[h])}function RC(o){switch(o){case 5126:return uC;case 35664:return cC;case 35665:return fC;case 35666:return hC;case 35674:return dC;case 35675:return pC;case 35676:return mC;case 5124:case 35670:return gC;case 35667:case 35671:return vC;case 35668:case 35672:return _C;case 35669:case 35673:return yC;case 5125:return xC;case 36294:return SC;case 36295:return MC;case 36296:return EC;case 35678:case 36198:case 36298:case 36306:case 35682:return TC;case 35679:case 36299:case 36307:return bC;case 35680:case 36300:case 36308:case 36293:return AC;case 36289:case 36303:case 36311:case 36292:return CC}}class wC{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=lC(i.type)}}class DC{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=RC(i.type)}}class NC{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],s)}}}const rp=/(\w+)(\])?(\[|\.)?/g;function Py(o,t){o.seq.push(t),o.map[t.id]=t}function UC(o,t,i){const s=o.name,l=s.length;for(rp.lastIndex=0;;){const u=rp.exec(s),h=rp.lastIndex;let d=u[1];const p=u[2]==="]",g=u[3];if(p&&(d=d|0),g===void 0||g==="["&&h+2===l){Py(i,g===void 0?new wC(d,o,t):new DC(d,o,t));break}else{let m=i.map[d];m===void 0&&(m=new NC(d),Py(i,m)),i=m}}}class Vc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);UC(u,h,this)}}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],p=s[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function zy(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const LC=37297;let OC=0;function PC(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const By=new ge;function zC(o){Ue._getMatrix(By,Ue.workingColorSpace,o);const t=`mat3( ${By.elements.map(i=>i.toFixed(4))} )`;switch(Ue.getTransfer(o)){case Xc:return[t,"LinearTransferOETF"];case He:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Iy(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),l=o.getShaderInfoLog(t).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+PC(o.getShaderSource(t),h)}else return l}function BC(o,t){const i=zC(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function IC(o,t){let i;switch(t){case $y:i="Linear";break;case tx:i="Reinhard";break;case ex:i="Cineon";break;case $p:i="ACESFilmic";break;case ix:i="AgX";break;case ax:i="Neutral";break;case nx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Lc=new G;function FC(){Ue.getLuminanceCoefficients(Lc);const o=Lc.x.toFixed(4),t=Lc.y.toFixed(4),i=Lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function HC(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tl).join(`
`)}function VC(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function GC(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(t,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Tl(o){return o!==""}function Fy(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hy(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const XC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zp(o){return o.replace(XC,qC)}const kC=new Map;function qC(o,t){let i=ve[t];if(i===void 0){const s=kC.get(t);if(s!==void 0)i=ve[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Zp(i)}const YC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vy(o){return o.replace(YC,WC)}function WC(o,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Gy(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function jC(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Ky?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===YE?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ba&&(t="SHADOWMAP_TYPE_VSM"),t}function ZC(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case fo:case ho:t="ENVMAP_TYPE_CUBE";break;case Wc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function QC(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ho:t="ENVMAP_MODE_REFRACTION";break}return t}function KC(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Jy:t="ENVMAP_BLENDING_MULTIPLY";break;case fT:t="ENVMAP_BLENDING_MIX";break;case hT:t="ENVMAP_BLENDING_ADD";break}return t}function JC(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function $C(o,t,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=jC(i),g=ZC(i),v=QC(i),m=KC(i),_=JC(i),S=HC(i),E=VC(u),b=l.createProgram();let M,x,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Tl).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Tl).join(`
`),x.length>0&&(x+=`
`)):(M=[Gy(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tl).join(`
`),x=[Gy(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",i.envMap?"#define "+m:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ms?"#define TONE_MAPPING":"",i.toneMapping!==ms?ve.tonemapping_pars_fragment:"",i.toneMapping!==ms?IC("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,BC("linearToOutputTexel",i.outputColorSpace),FC(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Tl).join(`
`)),h=Zp(h),h=Fy(h,i),h=Hy(h,i),d=Zp(d),d=Fy(d,i),d=Hy(d,i),h=Vy(h),d=Vy(d),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===q_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===q_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=w+M+h,A=w+x+d,H=zy(l,l.VERTEX_SHADER,L),z=zy(l,l.FRAGMENT_SHADER,A);l.attachShader(b,H),l.attachShader(b,z),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function P(V){if(o.debug.checkShaderErrors){const nt=l.getProgramInfoLog(b).trim(),at=l.getShaderInfoLog(H).trim(),lt=l.getShaderInfoLog(z).trim();let ft=!0,k=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(ft=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,b,H,z);else{const ot=Iy(l,H,"vertex"),K=Iy(l,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+nt+`
`+ot+`
`+K)}else nt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",nt):(at===""||lt==="")&&(k=!1);k&&(V.diagnostics={runnable:ft,programLog:nt,vertexShader:{log:at,prefix:M},fragmentShader:{log:lt,prefix:x}})}l.deleteShader(H),l.deleteShader(z),I=new Vc(l,b),D=GC(l,b)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let D;this.getAttributes=function(){return D===void 0&&P(this),D};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(b,LC)),R},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=OC++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=H,this.fragmentShader=z,this}let tR=0;class eR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new nR(t),i.set(t,s)),s}}class nR{constructor(t){this.id=tR++,this.code=t,this.usedTimes=0}}function iR(o,t,i,s,l,u,h){const d=new _x,p=new eR,g=new Set,v=[],m=l.logarithmicDepthBuffer,_=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(D){return g.add(D),D===0?"uv":`uv${D}`}function M(D,R,V,nt,at){const lt=nt.fog,ft=at.geometry,k=D.isMeshStandardMaterial?nt.environment:null,ot=(D.isMeshStandardMaterial?i:t).get(D.envMap||k),K=ot&&ot.mapping===Wc?ot.image.height:null,yt=E[D.type];D.precision!==null&&(S=l.getMaxPrecision(D.precision),S!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",S,"instead."));const St=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,Ft=St!==void 0?St.length:0;let Jt=0;ft.morphAttributes.position!==void 0&&(Jt=1),ft.morphAttributes.normal!==void 0&&(Jt=2),ft.morphAttributes.color!==void 0&&(Jt=3);let xe,U,j,gt;if(yt){const Re=Qi[yt];xe=Re.vertexShader,U=Re.fragmentShader}else xe=D.vertexShader,U=D.fragmentShader,p.update(D),j=p.getVertexShaderID(D),gt=p.getFragmentShaderID(D);const ut=o.getRenderTarget(),bt=o.state.buffers.depth.getReversed(),Gt=at.isInstancedMesh===!0,wt=at.isBatchedMesh===!0,Tt=!!D.map,Pt=!!D.matcap,le=!!ot,F=!!D.aoMap,Zt=!!D.lightMap,Kt=!!D.bumpMap,Wt=!!D.normalMap,At=!!D.displacementMap,me=!!D.emissiveMap,qt=!!D.metalnessMap,O=!!D.roughnessMap,C=D.anisotropy>0,J=D.clearcoat>0,mt=D.dispersion>0,xt=D.iridescence>0,pt=D.sheen>0,Mt=D.transmission>0,Ut=C&&!!D.anisotropyMap,Yt=J&&!!D.clearcoatMap,te=J&&!!D.clearcoatNormalMap,_t=J&&!!D.clearcoatRoughnessMap,Ht=xt&&!!D.iridescenceMap,ee=xt&&!!D.iridescenceThicknessMap,ne=pt&&!!D.sheenColorMap,It=pt&&!!D.sheenRoughnessMap,Se=!!D.specularMap,he=!!D.specularColorMap,Ve=!!D.specularIntensityMap,q=Mt&&!!D.transmissionMap,zt=Mt&&!!D.thicknessMap,ct=!!D.gradientMap,vt=!!D.alphaMap,Ot=D.alphaTest>0,Bt=!!D.alphaHash,ce=!!D.extensions;let $e=ms;D.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&($e=o.toneMapping);const vn={shaderID:yt,shaderType:D.type,shaderName:D.name,vertexShader:xe,fragmentShader:U,defines:D.defines,customVertexShaderID:j,customFragmentShaderID:gt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:S,batching:wt,batchingColor:wt&&at._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&at.instanceColor!==null,instancingMorph:Gt&&at.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:ut===null?o.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:po,alphaToCoverage:!!D.alphaToCoverage,map:Tt,matcap:Pt,envMap:le,envMapMode:le&&ot.mapping,envMapCubeUVHeight:K,aoMap:F,lightMap:Zt,bumpMap:Kt,normalMap:Wt,displacementMap:_&&At,emissiveMap:me,normalMapObjectSpace:Wt&&D.normalMapType===gT,normalMapTangentSpace:Wt&&D.normalMapType===dx,metalnessMap:qt,roughnessMap:O,anisotropy:C,anisotropyMap:Ut,clearcoat:J,clearcoatMap:Yt,clearcoatNormalMap:te,clearcoatRoughnessMap:_t,dispersion:mt,iridescence:xt,iridescenceMap:Ht,iridescenceThicknessMap:ee,sheen:pt,sheenColorMap:ne,sheenRoughnessMap:It,specularMap:Se,specularColorMap:he,specularIntensityMap:Ve,transmission:Mt,transmissionMap:q,thicknessMap:zt,gradientMap:ct,opaque:D.transparent===!1&&D.blending===lo&&D.alphaToCoverage===!1,alphaMap:vt,alphaTest:Ot,alphaHash:Bt,combine:D.combine,mapUv:Tt&&b(D.map.channel),aoMapUv:F&&b(D.aoMap.channel),lightMapUv:Zt&&b(D.lightMap.channel),bumpMapUv:Kt&&b(D.bumpMap.channel),normalMapUv:Wt&&b(D.normalMap.channel),displacementMapUv:At&&b(D.displacementMap.channel),emissiveMapUv:me&&b(D.emissiveMap.channel),metalnessMapUv:qt&&b(D.metalnessMap.channel),roughnessMapUv:O&&b(D.roughnessMap.channel),anisotropyMapUv:Ut&&b(D.anisotropyMap.channel),clearcoatMapUv:Yt&&b(D.clearcoatMap.channel),clearcoatNormalMapUv:te&&b(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&b(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Ht&&b(D.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&b(D.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&b(D.sheenColorMap.channel),sheenRoughnessMapUv:It&&b(D.sheenRoughnessMap.channel),specularMapUv:Se&&b(D.specularMap.channel),specularColorMapUv:he&&b(D.specularColorMap.channel),specularIntensityMapUv:Ve&&b(D.specularIntensityMap.channel),transmissionMapUv:q&&b(D.transmissionMap.channel),thicknessMapUv:zt&&b(D.thicknessMap.channel),alphaMapUv:vt&&b(D.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(Wt||C),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!ft.attributes.uv&&(Tt||vt),fog:!!lt,useFog:D.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:bt,skinning:at.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:Ft,morphTextureStride:Jt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:$e,decodeVideoTexture:Tt&&D.map.isVideoTexture===!0&&Ue.getTransfer(D.map.colorSpace)===He,decodeVideoTextureEmissive:me&&D.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(D.emissiveMap.colorSpace)===He,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Oi,flipSided:D.side===Zn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:ce&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&D.extensions.multiDraw===!0||wt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return vn.vertexUv1s=g.has(1),vn.vertexUv2s=g.has(2),vn.vertexUv3s=g.has(3),g.clear(),vn}function x(D){const R=[];if(D.shaderID?R.push(D.shaderID):(R.push(D.customVertexShaderID),R.push(D.customFragmentShaderID)),D.defines!==void 0)for(const V in D.defines)R.push(V),R.push(D.defines[V]);return D.isRawShaderMaterial===!1&&(w(R,D),L(R,D),R.push(o.outputColorSpace)),R.push(D.customProgramCacheKey),R.join()}function w(D,R){D.push(R.precision),D.push(R.outputColorSpace),D.push(R.envMapMode),D.push(R.envMapCubeUVHeight),D.push(R.mapUv),D.push(R.alphaMapUv),D.push(R.lightMapUv),D.push(R.aoMapUv),D.push(R.bumpMapUv),D.push(R.normalMapUv),D.push(R.displacementMapUv),D.push(R.emissiveMapUv),D.push(R.metalnessMapUv),D.push(R.roughnessMapUv),D.push(R.anisotropyMapUv),D.push(R.clearcoatMapUv),D.push(R.clearcoatNormalMapUv),D.push(R.clearcoatRoughnessMapUv),D.push(R.iridescenceMapUv),D.push(R.iridescenceThicknessMapUv),D.push(R.sheenColorMapUv),D.push(R.sheenRoughnessMapUv),D.push(R.specularMapUv),D.push(R.specularColorMapUv),D.push(R.specularIntensityMapUv),D.push(R.transmissionMapUv),D.push(R.thicknessMapUv),D.push(R.combine),D.push(R.fogExp2),D.push(R.sizeAttenuation),D.push(R.morphTargetsCount),D.push(R.morphAttributeCount),D.push(R.numDirLights),D.push(R.numPointLights),D.push(R.numSpotLights),D.push(R.numSpotLightMaps),D.push(R.numHemiLights),D.push(R.numRectAreaLights),D.push(R.numDirLightShadows),D.push(R.numPointLightShadows),D.push(R.numSpotLightShadows),D.push(R.numSpotLightShadowsWithMaps),D.push(R.numLightProbes),D.push(R.shadowMapType),D.push(R.toneMapping),D.push(R.numClippingPlanes),D.push(R.numClipIntersection),D.push(R.depthPacking)}function L(D,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),D.push(d.mask)}function A(D){const R=E[D.type];let V;if(R){const nt=Qi[R];V=zl.clone(nt.uniforms)}else V=D.uniforms;return V}function H(D,R){let V;for(let nt=0,at=v.length;nt<at;nt++){const lt=v[nt];if(lt.cacheKey===R){V=lt,++V.usedTimes;break}}return V===void 0&&(V=new $C(o,R,D,u),v.push(V)),V}function z(D){if(--D.usedTimes===0){const R=v.indexOf(D);v[R]=v[v.length-1],v.pop(),D.destroy()}}function P(D){p.remove(D)}function I(){p.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:A,acquireProgram:H,releaseProgram:z,releaseShaderCache:P,programs:v,dispose:I}}function aR(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,p){o.get(h)[d]=p}function u(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function sR(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Xy(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function ky(){const o=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function h(m,_,S,E,b,M){let x=o[t];return x===void 0?(x={id:m.id,object:m,geometry:_,material:S,groupOrder:E,renderOrder:m.renderOrder,z:b,group:M},o[t]=x):(x.id=m.id,x.object=m,x.geometry=_,x.material=S,x.groupOrder=E,x.renderOrder=m.renderOrder,x.z=b,x.group=M),t++,x}function d(m,_,S,E,b,M){const x=h(m,_,S,E,b,M);S.transmission>0?s.push(x):S.transparent===!0?l.push(x):i.push(x)}function p(m,_,S,E,b,M){const x=h(m,_,S,E,b,M);S.transmission>0?s.unshift(x):S.transparent===!0?l.unshift(x):i.unshift(x)}function g(m,_){i.length>1&&i.sort(m||sR),s.length>1&&s.sort(_||Xy),l.length>1&&l.sort(_||Xy)}function v(){for(let m=t,_=o.length;m<_;m++){const S=o[m];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:p,finish:v,sort:g}}function rR(){let o=new WeakMap;function t(s,l){const u=o.get(s);let h;return u===void 0?(h=new ky,o.set(s,[h])):l>=u.length?(h=new ky,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function oR(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new G,color:new fe};break;case"SpotLight":i={position:new G,direction:new G,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new G,color:new fe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new G,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":i={color:new fe,position:new G,halfWidth:new G,halfHeight:new G};break}return o[t.id]=i,i}}}function lR(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let uR=0;function cR(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function fR(o){const t=new oR,i=lR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)s.probe.push(new G);const l=new G,u=new ke,h=new ke;function d(g){let v=0,m=0,_=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let S=0,E=0,b=0,M=0,x=0,w=0,L=0,A=0,H=0,z=0,P=0;g.sort(cR);for(let D=0,R=g.length;D<R;D++){const V=g[D],nt=V.color,at=V.intensity,lt=V.distance,ft=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)v+=nt.r*at,m+=nt.g*at,_+=nt.b*at;else if(V.isLightProbe){for(let k=0;k<9;k++)s.probe[k].addScaledVector(V.sh.coefficients[k],at);P++}else if(V.isDirectionalLight){const k=t.get(V);if(k.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const ot=V.shadow,K=i.get(V);K.shadowIntensity=ot.intensity,K.shadowBias=ot.bias,K.shadowNormalBias=ot.normalBias,K.shadowRadius=ot.radius,K.shadowMapSize=ot.mapSize,s.directionalShadow[S]=K,s.directionalShadowMap[S]=ft,s.directionalShadowMatrix[S]=V.shadow.matrix,w++}s.directional[S]=k,S++}else if(V.isSpotLight){const k=t.get(V);k.position.setFromMatrixPosition(V.matrixWorld),k.color.copy(nt).multiplyScalar(at),k.distance=lt,k.coneCos=Math.cos(V.angle),k.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),k.decay=V.decay,s.spot[b]=k;const ot=V.shadow;if(V.map&&(s.spotLightMap[H]=V.map,H++,ot.updateMatrices(V),V.castShadow&&z++),s.spotLightMatrix[b]=ot.matrix,V.castShadow){const K=i.get(V);K.shadowIntensity=ot.intensity,K.shadowBias=ot.bias,K.shadowNormalBias=ot.normalBias,K.shadowRadius=ot.radius,K.shadowMapSize=ot.mapSize,s.spotShadow[b]=K,s.spotShadowMap[b]=ft,A++}b++}else if(V.isRectAreaLight){const k=t.get(V);k.color.copy(nt).multiplyScalar(at),k.halfWidth.set(V.width*.5,0,0),k.halfHeight.set(0,V.height*.5,0),s.rectArea[M]=k,M++}else if(V.isPointLight){const k=t.get(V);if(k.color.copy(V.color).multiplyScalar(V.intensity),k.distance=V.distance,k.decay=V.decay,V.castShadow){const ot=V.shadow,K=i.get(V);K.shadowIntensity=ot.intensity,K.shadowBias=ot.bias,K.shadowNormalBias=ot.normalBias,K.shadowRadius=ot.radius,K.shadowMapSize=ot.mapSize,K.shadowCameraNear=ot.camera.near,K.shadowCameraFar=ot.camera.far,s.pointShadow[E]=K,s.pointShadowMap[E]=ft,s.pointShadowMatrix[E]=V.shadow.matrix,L++}s.point[E]=k,E++}else if(V.isHemisphereLight){const k=t.get(V);k.skyColor.copy(V.color).multiplyScalar(at),k.groundColor.copy(V.groundColor).multiplyScalar(at),s.hemi[x]=k,x++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Lt.LTC_FLOAT_1,s.rectAreaLTC2=Lt.LTC_FLOAT_2):(s.rectAreaLTC1=Lt.LTC_HALF_1,s.rectAreaLTC2=Lt.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=m,s.ambient[2]=_;const I=s.hash;(I.directionalLength!==S||I.pointLength!==E||I.spotLength!==b||I.rectAreaLength!==M||I.hemiLength!==x||I.numDirectionalShadows!==w||I.numPointShadows!==L||I.numSpotShadows!==A||I.numSpotMaps!==H||I.numLightProbes!==P)&&(s.directional.length=S,s.spot.length=b,s.rectArea.length=M,s.point.length=E,s.hemi.length=x,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=A+H-z,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=P,I.directionalLength=S,I.pointLength=E,I.spotLength=b,I.rectAreaLength=M,I.hemiLength=x,I.numDirectionalShadows=w,I.numPointShadows=L,I.numSpotShadows=A,I.numSpotMaps=H,I.numLightProbes=P,s.version=uR++)}function p(g,v){let m=0,_=0,S=0,E=0,b=0;const M=v.matrixWorldInverse;for(let x=0,w=g.length;x<w;x++){const L=g[x];if(L.isDirectionalLight){const A=s.directional[m];A.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),A.direction.sub(l),A.direction.transformDirection(M),m++}else if(L.isSpotLight){const A=s.spot[S];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(M),A.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),A.direction.sub(l),A.direction.transformDirection(M),S++}else if(L.isRectAreaLight){const A=s.rectArea[E];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(M),h.identity(),u.copy(L.matrixWorld),u.premultiply(M),h.extractRotation(u),A.halfWidth.set(L.width*.5,0,0),A.halfHeight.set(0,L.height*.5,0),A.halfWidth.applyMatrix4(h),A.halfHeight.applyMatrix4(h),E++}else if(L.isPointLight){const A=s.point[_];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(M),_++}else if(L.isHemisphereLight){const A=s.hemi[b];A.direction.setFromMatrixPosition(L.matrixWorld),A.direction.transformDirection(M),b++}}}return{setup:d,setupView:p,state:s}}function qy(o){const t=new fR(o),i=[],s=[];function l(v){g.camera=v,i.length=0,s.length=0}function u(v){i.push(v)}function h(v){s.push(v)}function d(){t.setup(i)}function p(v){t.setupView(i,v)}const g={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:g,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:h}}function hR(o){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new qy(o),t.set(l,[d])):u>=h.length?(d=new qy(o),h.push(d)):d=h[u],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const dR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mR(o,t,i){let s=new cm;const l=new Xt,u=new Xt,h=new Xe,d=new P1({depthPacking:mT}),p=new z1,g={},v=i.maxTextureSize,m={[gs]:Zn,[Zn]:gs,[Oi]:Oi},_=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:dR,fragmentShader:pR}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const E=new Tn;E.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new se(E,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ky;let x=this.type;this.render=function(z,P,I){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;const D=o.getRenderTarget(),R=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),nt=o.state;nt.setBlending(wa),nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const at=x!==ba&&this.type===ba,lt=x===ba&&this.type!==ba;for(let ft=0,k=z.length;ft<k;ft++){const ot=z[ft],K=ot.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",ot,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;l.copy(K.mapSize);const yt=K.getFrameExtents();if(l.multiply(yt),u.copy(K.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/yt.x),l.x=u.x*yt.x,K.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/yt.y),l.y=u.y*yt.y,K.mapSize.y=u.y)),K.map===null||at===!0||lt===!0){const Ft=this.type!==ba?{minFilter:di,magFilter:di}:{};K.map!==null&&K.map.dispose(),K.map=new Bi(l.x,l.y,Ft),K.map.texture.name=ot.name+".shadowMap",K.camera.updateProjectionMatrix()}o.setRenderTarget(K.map),o.clear();const St=K.getViewportCount();for(let Ft=0;Ft<St;Ft++){const Jt=K.getViewport(Ft);h.set(u.x*Jt.x,u.y*Jt.y,u.x*Jt.z,u.y*Jt.w),nt.viewport(h),K.updateMatrices(ot,Ft),s=K.getFrustum(),A(P,I,K.camera,ot,this.type)}K.isPointLightShadow!==!0&&this.type===ba&&w(K,I),K.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(D,R,V)};function w(z,P){const I=t.update(b);_.defines.VSM_SAMPLES!==z.blurSamples&&(_.defines.VSM_SAMPLES=z.blurSamples,S.defines.VSM_SAMPLES=z.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Bi(l.x,l.y)),_.uniforms.shadow_pass.value=z.map.texture,_.uniforms.resolution.value=z.mapSize,_.uniforms.radius.value=z.radius,o.setRenderTarget(z.mapPass),o.clear(),o.renderBufferDirect(P,null,I,_,b,null),S.uniforms.shadow_pass.value=z.mapPass.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,o.setRenderTarget(z.map),o.clear(),o.renderBufferDirect(P,null,I,S,b,null)}function L(z,P,I,D){let R=null;const V=I.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(V!==void 0)R=V;else if(R=I.isPointLight===!0?p:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const nt=R.uuid,at=P.uuid;let lt=g[nt];lt===void 0&&(lt={},g[nt]=lt);let ft=lt[at];ft===void 0&&(ft=R.clone(),lt[at]=ft,P.addEventListener("dispose",H)),R=ft}if(R.visible=P.visible,R.wireframe=P.wireframe,D===ba?R.side=P.shadowSide!==null?P.shadowSide:P.side:R.side=P.shadowSide!==null?P.shadowSide:m[P.side],R.alphaMap=P.alphaMap,R.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,R.map=P.map,R.clipShadows=P.clipShadows,R.clippingPlanes=P.clippingPlanes,R.clipIntersection=P.clipIntersection,R.displacementMap=P.displacementMap,R.displacementScale=P.displacementScale,R.displacementBias=P.displacementBias,R.wireframeLinewidth=P.wireframeLinewidth,R.linewidth=P.linewidth,I.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const nt=o.properties.get(R);nt.light=I}return R}function A(z,P,I,D,R){if(z.visible===!1)return;if(z.layers.test(P.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&R===ba)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,z.matrixWorld);const at=t.update(z),lt=z.material;if(Array.isArray(lt)){const ft=at.groups;for(let k=0,ot=ft.length;k<ot;k++){const K=ft[k],yt=lt[K.materialIndex];if(yt&&yt.visible){const St=L(z,yt,D,R);z.onBeforeShadow(o,z,P,I,at,St,K),o.renderBufferDirect(I,null,at,St,z,K),z.onAfterShadow(o,z,P,I,at,St,K)}}}else if(lt.visible){const ft=L(z,lt,D,R);z.onBeforeShadow(o,z,P,I,at,ft,null),o.renderBufferDirect(I,null,at,ft,z,null),z.onAfterShadow(o,z,P,I,at,ft,null)}}const nt=z.children;for(let at=0,lt=nt.length;at<lt;at++)A(nt[at],P,I,D,R)}function H(z){z.target.removeEventListener("dispose",H);for(const I in g){const D=g[I],R=z.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}const gR={[cp]:fp,[hp]:mp,[dp]:gp,[co]:pp,[fp]:cp,[mp]:hp,[gp]:dp,[pp]:co};function vR(o,t){function i(){let q=!1;const zt=new Xe;let ct=null;const vt=new Xe(0,0,0,0);return{setMask:function(Ot){ct!==Ot&&!q&&(o.colorMask(Ot,Ot,Ot,Ot),ct=Ot)},setLocked:function(Ot){q=Ot},setClear:function(Ot,Bt,ce,$e,vn){vn===!0&&(Ot*=$e,Bt*=$e,ce*=$e),zt.set(Ot,Bt,ce,$e),vt.equals(zt)===!1&&(o.clearColor(Ot,Bt,ce,$e),vt.copy(zt))},reset:function(){q=!1,ct=null,vt.set(-1,0,0,0)}}}function s(){let q=!1,zt=!1,ct=null,vt=null,Ot=null;return{setReversed:function(Bt){if(zt!==Bt){const ce=t.get("EXT_clip_control");Bt?ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.ZERO_TO_ONE_EXT):ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.NEGATIVE_ONE_TO_ONE_EXT),zt=Bt;const $e=Ot;Ot=null,this.setClear($e)}},getReversed:function(){return zt},setTest:function(Bt){Bt?ut(o.DEPTH_TEST):bt(o.DEPTH_TEST)},setMask:function(Bt){ct!==Bt&&!q&&(o.depthMask(Bt),ct=Bt)},setFunc:function(Bt){if(zt&&(Bt=gR[Bt]),vt!==Bt){switch(Bt){case cp:o.depthFunc(o.NEVER);break;case fp:o.depthFunc(o.ALWAYS);break;case hp:o.depthFunc(o.LESS);break;case co:o.depthFunc(o.LEQUAL);break;case dp:o.depthFunc(o.EQUAL);break;case pp:o.depthFunc(o.GEQUAL);break;case mp:o.depthFunc(o.GREATER);break;case gp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}vt=Bt}},setLocked:function(Bt){q=Bt},setClear:function(Bt){Ot!==Bt&&(zt&&(Bt=1-Bt),o.clearDepth(Bt),Ot=Bt)},reset:function(){q=!1,ct=null,vt=null,Ot=null,zt=!1}}}function l(){let q=!1,zt=null,ct=null,vt=null,Ot=null,Bt=null,ce=null,$e=null,vn=null;return{setTest:function(Re){q||(Re?ut(o.STENCIL_TEST):bt(o.STENCIL_TEST))},setMask:function(Re){zt!==Re&&!q&&(o.stencilMask(Re),zt=Re)},setFunc:function(Re,Ke,_n){(ct!==Re||vt!==Ke||Ot!==_n)&&(o.stencilFunc(Re,Ke,_n),ct=Re,vt=Ke,Ot=_n)},setOp:function(Re,Ke,_n){(Bt!==Re||ce!==Ke||$e!==_n)&&(o.stencilOp(Re,Ke,_n),Bt=Re,ce=Ke,$e=_n)},setLocked:function(Re){q=Re},setClear:function(Re){vn!==Re&&(o.clearStencil(Re),vn=Re)},reset:function(){q=!1,zt=null,ct=null,vt=null,Ot=null,Bt=null,ce=null,$e=null,vn=null}}}const u=new i,h=new s,d=new l,p=new WeakMap,g=new WeakMap;let v={},m={},_=new WeakMap,S=[],E=null,b=!1,M=null,x=null,w=null,L=null,A=null,H=null,z=null,P=new fe(0,0,0),I=0,D=!1,R=null,V=null,nt=null,at=null,lt=null;const ft=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,ot=0;const K=o.getParameter(o.VERSION);K.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(K)[1]),k=ot>=1):K.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),k=ot>=2);let yt=null,St={};const Ft=o.getParameter(o.SCISSOR_BOX),Jt=o.getParameter(o.VIEWPORT),xe=new Xe().fromArray(Ft),U=new Xe().fromArray(Jt);function j(q,zt,ct,vt){const Ot=new Uint8Array(4),Bt=o.createTexture();o.bindTexture(q,Bt),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ce=0;ce<ct;ce++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(zt,0,o.RGBA,1,1,vt,0,o.RGBA,o.UNSIGNED_BYTE,Ot):o.texImage2D(zt+ce,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ot);return Bt}const gt={};gt[o.TEXTURE_2D]=j(o.TEXTURE_2D,o.TEXTURE_2D,1),gt[o.TEXTURE_CUBE_MAP]=j(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[o.TEXTURE_2D_ARRAY]=j(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),gt[o.TEXTURE_3D]=j(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ut(o.DEPTH_TEST),h.setFunc(co),Kt(!1),Wt(H_),ut(o.CULL_FACE),F(wa);function ut(q){v[q]!==!0&&(o.enable(q),v[q]=!0)}function bt(q){v[q]!==!1&&(o.disable(q),v[q]=!1)}function Gt(q,zt){return m[q]!==zt?(o.bindFramebuffer(q,zt),m[q]=zt,q===o.DRAW_FRAMEBUFFER&&(m[o.FRAMEBUFFER]=zt),q===o.FRAMEBUFFER&&(m[o.DRAW_FRAMEBUFFER]=zt),!0):!1}function wt(q,zt){let ct=S,vt=!1;if(q){ct=_.get(zt),ct===void 0&&(ct=[],_.set(zt,ct));const Ot=q.textures;if(ct.length!==Ot.length||ct[0]!==o.COLOR_ATTACHMENT0){for(let Bt=0,ce=Ot.length;Bt<ce;Bt++)ct[Bt]=o.COLOR_ATTACHMENT0+Bt;ct.length=Ot.length,vt=!0}}else ct[0]!==o.BACK&&(ct[0]=o.BACK,vt=!0);vt&&o.drawBuffers(ct)}function Tt(q){return E!==q?(o.useProgram(q),E=q,!0):!1}const Pt={[Zs]:o.FUNC_ADD,[jE]:o.FUNC_SUBTRACT,[ZE]:o.FUNC_REVERSE_SUBTRACT};Pt[QE]=o.MIN,Pt[KE]=o.MAX;const le={[JE]:o.ZERO,[$E]:o.ONE,[tT]:o.SRC_COLOR,[lp]:o.SRC_ALPHA,[rT]:o.SRC_ALPHA_SATURATE,[aT]:o.DST_COLOR,[nT]:o.DST_ALPHA,[eT]:o.ONE_MINUS_SRC_COLOR,[up]:o.ONE_MINUS_SRC_ALPHA,[sT]:o.ONE_MINUS_DST_COLOR,[iT]:o.ONE_MINUS_DST_ALPHA,[oT]:o.CONSTANT_COLOR,[lT]:o.ONE_MINUS_CONSTANT_COLOR,[uT]:o.CONSTANT_ALPHA,[cT]:o.ONE_MINUS_CONSTANT_ALPHA};function F(q,zt,ct,vt,Ot,Bt,ce,$e,vn,Re){if(q===wa){b===!0&&(bt(o.BLEND),b=!1);return}if(b===!1&&(ut(o.BLEND),b=!0),q!==WE){if(q!==M||Re!==D){if((x!==Zs||A!==Zs)&&(o.blendEquation(o.FUNC_ADD),x=Zs,A=Zs),Re)switch(q){case lo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case tr:o.blendFunc(o.ONE,o.ONE);break;case V_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case G_:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case lo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case tr:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case V_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case G_:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}w=null,L=null,H=null,z=null,P.set(0,0,0),I=0,M=q,D=Re}return}Ot=Ot||zt,Bt=Bt||ct,ce=ce||vt,(zt!==x||Ot!==A)&&(o.blendEquationSeparate(Pt[zt],Pt[Ot]),x=zt,A=Ot),(ct!==w||vt!==L||Bt!==H||ce!==z)&&(o.blendFuncSeparate(le[ct],le[vt],le[Bt],le[ce]),w=ct,L=vt,H=Bt,z=ce),($e.equals(P)===!1||vn!==I)&&(o.blendColor($e.r,$e.g,$e.b,vn),P.copy($e),I=vn),M=q,D=!1}function Zt(q,zt){q.side===Oi?bt(o.CULL_FACE):ut(o.CULL_FACE);let ct=q.side===Zn;zt&&(ct=!ct),Kt(ct),q.blending===lo&&q.transparent===!1?F(wa):F(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),h.setFunc(q.depthFunc),h.setTest(q.depthTest),h.setMask(q.depthWrite),u.setMask(q.colorWrite);const vt=q.stencilWrite;d.setTest(vt),vt&&(d.setMask(q.stencilWriteMask),d.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),d.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),me(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?ut(o.SAMPLE_ALPHA_TO_COVERAGE):bt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(q){R!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),R=q)}function Wt(q){q!==kE?(ut(o.CULL_FACE),q!==V&&(q===H_?o.cullFace(o.BACK):q===qE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):bt(o.CULL_FACE),V=q}function At(q){q!==nt&&(k&&o.lineWidth(q),nt=q)}function me(q,zt,ct){q?(ut(o.POLYGON_OFFSET_FILL),(at!==zt||lt!==ct)&&(o.polygonOffset(zt,ct),at=zt,lt=ct)):bt(o.POLYGON_OFFSET_FILL)}function qt(q){q?ut(o.SCISSOR_TEST):bt(o.SCISSOR_TEST)}function O(q){q===void 0&&(q=o.TEXTURE0+ft-1),yt!==q&&(o.activeTexture(q),yt=q)}function C(q,zt,ct){ct===void 0&&(yt===null?ct=o.TEXTURE0+ft-1:ct=yt);let vt=St[ct];vt===void 0&&(vt={type:void 0,texture:void 0},St[ct]=vt),(vt.type!==q||vt.texture!==zt)&&(yt!==ct&&(o.activeTexture(ct),yt=ct),o.bindTexture(q,zt||gt[q]),vt.type=q,vt.texture=zt)}function J(){const q=St[yt];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function mt(){try{o.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function xt(){try{o.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function pt(){try{o.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Mt(){try{o.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ut(){try{o.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Yt(){try{o.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function te(){try{o.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function _t(){try{o.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ht(){try{o.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ee(){try{o.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ne(q){xe.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),xe.copy(q))}function It(q){U.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),U.copy(q))}function Se(q,zt){let ct=g.get(zt);ct===void 0&&(ct=new WeakMap,g.set(zt,ct));let vt=ct.get(q);vt===void 0&&(vt=o.getUniformBlockIndex(zt,q.name),ct.set(q,vt))}function he(q,zt){const vt=g.get(zt).get(q);p.get(zt)!==vt&&(o.uniformBlockBinding(zt,vt,q.__bindingPointIndex),p.set(zt,vt))}function Ve(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},yt=null,St={},m={},_=new WeakMap,S=[],E=null,b=!1,M=null,x=null,w=null,L=null,A=null,H=null,z=null,P=new fe(0,0,0),I=0,D=!1,R=null,V=null,nt=null,at=null,lt=null,xe.set(0,0,o.canvas.width,o.canvas.height),U.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:ut,disable:bt,bindFramebuffer:Gt,drawBuffers:wt,useProgram:Tt,setBlending:F,setMaterial:Zt,setFlipSided:Kt,setCullFace:Wt,setLineWidth:At,setPolygonOffset:me,setScissorTest:qt,activeTexture:O,bindTexture:C,unbindTexture:J,compressedTexImage2D:mt,compressedTexImage3D:xt,texImage2D:Ht,texImage3D:ee,updateUBOMapping:Se,uniformBlockBinding:he,texStorage2D:te,texStorage3D:_t,texSubImage2D:pt,texSubImage3D:Mt,compressedTexSubImage2D:Ut,compressedTexSubImage3D:Yt,scissor:ne,viewport:It,reset:Ve}}function _R(o,t,i,s,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new Xt,v=new WeakMap;let m;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,C){return S?new OffscreenCanvas(O,C):Pl("canvas")}function b(O,C,J){let mt=1;const xt=qt(O);if((xt.width>J||xt.height>J)&&(mt=J/Math.max(xt.width,xt.height)),mt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const pt=Math.floor(mt*xt.width),Mt=Math.floor(mt*xt.height);m===void 0&&(m=E(pt,Mt));const Ut=C?E(pt,Mt):m;return Ut.width=pt,Ut.height=Mt,Ut.getContext("2d").drawImage(O,0,0,pt,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+pt+"x"+Mt+")."),Ut}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),O;return O}function M(O){return O.generateMipmaps}function x(O){o.generateMipmap(O)}function w(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(O,C,J,mt,xt=!1){if(O!==null){if(o[O]!==void 0)return o[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let pt=C;if(C===o.RED&&(J===o.FLOAT&&(pt=o.R32F),J===o.HALF_FLOAT&&(pt=o.R16F),J===o.UNSIGNED_BYTE&&(pt=o.R8)),C===o.RED_INTEGER&&(J===o.UNSIGNED_BYTE&&(pt=o.R8UI),J===o.UNSIGNED_SHORT&&(pt=o.R16UI),J===o.UNSIGNED_INT&&(pt=o.R32UI),J===o.BYTE&&(pt=o.R8I),J===o.SHORT&&(pt=o.R16I),J===o.INT&&(pt=o.R32I)),C===o.RG&&(J===o.FLOAT&&(pt=o.RG32F),J===o.HALF_FLOAT&&(pt=o.RG16F),J===o.UNSIGNED_BYTE&&(pt=o.RG8)),C===o.RG_INTEGER&&(J===o.UNSIGNED_BYTE&&(pt=o.RG8UI),J===o.UNSIGNED_SHORT&&(pt=o.RG16UI),J===o.UNSIGNED_INT&&(pt=o.RG32UI),J===o.BYTE&&(pt=o.RG8I),J===o.SHORT&&(pt=o.RG16I),J===o.INT&&(pt=o.RG32I)),C===o.RGB_INTEGER&&(J===o.UNSIGNED_BYTE&&(pt=o.RGB8UI),J===o.UNSIGNED_SHORT&&(pt=o.RGB16UI),J===o.UNSIGNED_INT&&(pt=o.RGB32UI),J===o.BYTE&&(pt=o.RGB8I),J===o.SHORT&&(pt=o.RGB16I),J===o.INT&&(pt=o.RGB32I)),C===o.RGBA_INTEGER&&(J===o.UNSIGNED_BYTE&&(pt=o.RGBA8UI),J===o.UNSIGNED_SHORT&&(pt=o.RGBA16UI),J===o.UNSIGNED_INT&&(pt=o.RGBA32UI),J===o.BYTE&&(pt=o.RGBA8I),J===o.SHORT&&(pt=o.RGBA16I),J===o.INT&&(pt=o.RGBA32I)),C===o.RGB&&J===o.UNSIGNED_INT_5_9_9_9_REV&&(pt=o.RGB9_E5),C===o.RGBA){const Mt=xt?Xc:Ue.getTransfer(mt);J===o.FLOAT&&(pt=o.RGBA32F),J===o.HALF_FLOAT&&(pt=o.RGBA16F),J===o.UNSIGNED_BYTE&&(pt=Mt===He?o.SRGB8_ALPHA8:o.RGBA8),J===o.UNSIGNED_SHORT_4_4_4_4&&(pt=o.RGBA4),J===o.UNSIGNED_SHORT_5_5_5_1&&(pt=o.RGB5_A1)}return(pt===o.R16F||pt===o.R32F||pt===o.RG16F||pt===o.RG32F||pt===o.RGBA16F||pt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function A(O,C){let J;return O?C===null||C===er||C===Nl?J=o.DEPTH24_STENCIL8:C===$i?J=o.DEPTH32F_STENCIL8:C===Dl&&(J=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===er||C===Nl?J=o.DEPTH_COMPONENT24:C===$i?J=o.DEPTH_COMPONENT32F:C===Dl&&(J=o.DEPTH_COMPONENT16),J}function H(O,C){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==di&&O.minFilter!==Ji?Math.log2(Math.max(C.width,C.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?C.mipmaps.length:1}function z(O){const C=O.target;C.removeEventListener("dispose",z),I(C),C.isVideoTexture&&v.delete(C)}function P(O){const C=O.target;C.removeEventListener("dispose",P),R(C)}function I(O){const C=s.get(O);if(C.__webglInit===void 0)return;const J=O.source,mt=_.get(J);if(mt){const xt=mt[C.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&D(O),Object.keys(mt).length===0&&_.delete(J)}s.remove(O)}function D(O){const C=s.get(O);o.deleteTexture(C.__webglTexture);const J=O.source,mt=_.get(J);delete mt[C.__cacheKey],h.memory.textures--}function R(O){const C=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(C.__webglFramebuffer[mt]))for(let xt=0;xt<C.__webglFramebuffer[mt].length;xt++)o.deleteFramebuffer(C.__webglFramebuffer[mt][xt]);else o.deleteFramebuffer(C.__webglFramebuffer[mt]);C.__webglDepthbuffer&&o.deleteRenderbuffer(C.__webglDepthbuffer[mt])}else{if(Array.isArray(C.__webglFramebuffer))for(let mt=0;mt<C.__webglFramebuffer.length;mt++)o.deleteFramebuffer(C.__webglFramebuffer[mt]);else o.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&o.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&o.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let mt=0;mt<C.__webglColorRenderbuffer.length;mt++)C.__webglColorRenderbuffer[mt]&&o.deleteRenderbuffer(C.__webglColorRenderbuffer[mt]);C.__webglDepthRenderbuffer&&o.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const J=O.textures;for(let mt=0,xt=J.length;mt<xt;mt++){const pt=s.get(J[mt]);pt.__webglTexture&&(o.deleteTexture(pt.__webglTexture),h.memory.textures--),s.remove(J[mt])}s.remove(O)}let V=0;function nt(){V=0}function at(){const O=V;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),V+=1,O}function lt(O){const C=[];return C.push(O.wrapS),C.push(O.wrapT),C.push(O.wrapR||0),C.push(O.magFilter),C.push(O.minFilter),C.push(O.anisotropy),C.push(O.internalFormat),C.push(O.format),C.push(O.type),C.push(O.generateMipmaps),C.push(O.premultiplyAlpha),C.push(O.flipY),C.push(O.unpackAlignment),C.push(O.colorSpace),C.join()}function ft(O,C){const J=s.get(O);if(O.isVideoTexture&&At(O),O.isRenderTargetTexture===!1&&O.version>0&&J.__version!==O.version){const mt=O.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{U(J,O,C);return}}i.bindTexture(o.TEXTURE_2D,J.__webglTexture,o.TEXTURE0+C)}function k(O,C){const J=s.get(O);if(O.version>0&&J.__version!==O.version){U(J,O,C);return}i.bindTexture(o.TEXTURE_2D_ARRAY,J.__webglTexture,o.TEXTURE0+C)}function ot(O,C){const J=s.get(O);if(O.version>0&&J.__version!==O.version){U(J,O,C);return}i.bindTexture(o.TEXTURE_3D,J.__webglTexture,o.TEXTURE0+C)}function K(O,C){const J=s.get(O);if(O.version>0&&J.__version!==O.version){j(J,O,C);return}i.bindTexture(o.TEXTURE_CUBE_MAP,J.__webglTexture,o.TEXTURE0+C)}const yt={[wl]:o.REPEAT,[Ks]:o.CLAMP_TO_EDGE,[yp]:o.MIRRORED_REPEAT},St={[di]:o.NEAREST,[dT]:o.NEAREST_MIPMAP_NEAREST,[uc]:o.NEAREST_MIPMAP_LINEAR,[Ji]:o.LINEAR,[Rd]:o.LINEAR_MIPMAP_NEAREST,[Js]:o.LINEAR_MIPMAP_LINEAR},Ft={[vT]:o.NEVER,[ET]:o.ALWAYS,[_T]:o.LESS,[px]:o.LEQUAL,[yT]:o.EQUAL,[MT]:o.GEQUAL,[xT]:o.GREATER,[ST]:o.NOTEQUAL};function Jt(O,C){if(C.type===$i&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===Ji||C.magFilter===Rd||C.magFilter===uc||C.magFilter===Js||C.minFilter===Ji||C.minFilter===Rd||C.minFilter===uc||C.minFilter===Js)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,yt[C.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,yt[C.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,yt[C.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,St[C.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,St[C.minFilter]),C.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,Ft[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===di||C.minFilter!==uc&&C.minFilter!==Js||C.type===$i&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||s.get(C).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");o.texParameterf(O,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,l.getMaxAnisotropy())),s.get(C).__currentAnisotropy=C.anisotropy}}}function xe(O,C){let J=!1;O.__webglInit===void 0&&(O.__webglInit=!0,C.addEventListener("dispose",z));const mt=C.source;let xt=_.get(mt);xt===void 0&&(xt={},_.set(mt,xt));const pt=lt(C);if(pt!==O.__cacheKey){xt[pt]===void 0&&(xt[pt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,J=!0),xt[pt].usedTimes++;const Mt=xt[O.__cacheKey];Mt!==void 0&&(xt[O.__cacheKey].usedTimes--,Mt.usedTimes===0&&D(C)),O.__cacheKey=pt,O.__webglTexture=xt[pt].texture}return J}function U(O,C,J){let mt=o.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(mt=o.TEXTURE_2D_ARRAY),C.isData3DTexture&&(mt=o.TEXTURE_3D);const xt=xe(O,C),pt=C.source;i.bindTexture(mt,O.__webglTexture,o.TEXTURE0+J);const Mt=s.get(pt);if(pt.version!==Mt.__version||xt===!0){i.activeTexture(o.TEXTURE0+J);const Ut=Ue.getPrimaries(Ue.workingColorSpace),Yt=C.colorSpace===ps?null:Ue.getPrimaries(C.colorSpace),te=C.colorSpace===ps||Ut===Yt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,C.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,C.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let _t=b(C.image,!1,l.maxTextureSize);_t=me(C,_t);const Ht=u.convert(C.format,C.colorSpace),ee=u.convert(C.type);let ne=L(C.internalFormat,Ht,ee,C.colorSpace,C.isVideoTexture);Jt(mt,C);let It;const Se=C.mipmaps,he=C.isVideoTexture!==!0,Ve=Mt.__version===void 0||xt===!0,q=pt.dataReady,zt=H(C,_t);if(C.isDepthTexture)ne=A(C.format===Ll,C.type),Ve&&(he?i.texStorage2D(o.TEXTURE_2D,1,ne,_t.width,_t.height):i.texImage2D(o.TEXTURE_2D,0,ne,_t.width,_t.height,0,Ht,ee,null));else if(C.isDataTexture)if(Se.length>0){he&&Ve&&i.texStorage2D(o.TEXTURE_2D,zt,ne,Se[0].width,Se[0].height);for(let ct=0,vt=Se.length;ct<vt;ct++)It=Se[ct],he?q&&i.texSubImage2D(o.TEXTURE_2D,ct,0,0,It.width,It.height,Ht,ee,It.data):i.texImage2D(o.TEXTURE_2D,ct,ne,It.width,It.height,0,Ht,ee,It.data);C.generateMipmaps=!1}else he?(Ve&&i.texStorage2D(o.TEXTURE_2D,zt,ne,_t.width,_t.height),q&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,_t.width,_t.height,Ht,ee,_t.data)):i.texImage2D(o.TEXTURE_2D,0,ne,_t.width,_t.height,0,Ht,ee,_t.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){he&&Ve&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,ne,Se[0].width,Se[0].height,_t.depth);for(let ct=0,vt=Se.length;ct<vt;ct++)if(It=Se[ct],C.format!==zi)if(Ht!==null)if(he){if(q)if(C.layerUpdates.size>0){const Ot=My(It.width,It.height,C.format,C.type);for(const Bt of C.layerUpdates){const ce=It.data.subarray(Bt*Ot/It.data.BYTES_PER_ELEMENT,(Bt+1)*Ot/It.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ct,0,0,Bt,It.width,It.height,1,Ht,ce)}C.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ct,0,0,0,It.width,It.height,_t.depth,Ht,It.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ct,ne,It.width,It.height,_t.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else he?q&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ct,0,0,0,It.width,It.height,_t.depth,Ht,ee,It.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ct,ne,It.width,It.height,_t.depth,0,Ht,ee,It.data)}else{he&&Ve&&i.texStorage2D(o.TEXTURE_2D,zt,ne,Se[0].width,Se[0].height);for(let ct=0,vt=Se.length;ct<vt;ct++)It=Se[ct],C.format!==zi?Ht!==null?he?q&&i.compressedTexSubImage2D(o.TEXTURE_2D,ct,0,0,It.width,It.height,Ht,It.data):i.compressedTexImage2D(o.TEXTURE_2D,ct,ne,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?q&&i.texSubImage2D(o.TEXTURE_2D,ct,0,0,It.width,It.height,Ht,ee,It.data):i.texImage2D(o.TEXTURE_2D,ct,ne,It.width,It.height,0,Ht,ee,It.data)}else if(C.isDataArrayTexture)if(he){if(Ve&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,ne,_t.width,_t.height,_t.depth),q)if(C.layerUpdates.size>0){const ct=My(_t.width,_t.height,C.format,C.type);for(const vt of C.layerUpdates){const Ot=_t.data.subarray(vt*ct/_t.data.BYTES_PER_ELEMENT,(vt+1)*ct/_t.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,vt,_t.width,_t.height,1,Ht,ee,Ot)}C.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,_t.width,_t.height,_t.depth,Ht,ee,_t.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,ne,_t.width,_t.height,_t.depth,0,Ht,ee,_t.data);else if(C.isData3DTexture)he?(Ve&&i.texStorage3D(o.TEXTURE_3D,zt,ne,_t.width,_t.height,_t.depth),q&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,_t.width,_t.height,_t.depth,Ht,ee,_t.data)):i.texImage3D(o.TEXTURE_3D,0,ne,_t.width,_t.height,_t.depth,0,Ht,ee,_t.data);else if(C.isFramebufferTexture){if(Ve)if(he)i.texStorage2D(o.TEXTURE_2D,zt,ne,_t.width,_t.height);else{let ct=_t.width,vt=_t.height;for(let Ot=0;Ot<zt;Ot++)i.texImage2D(o.TEXTURE_2D,Ot,ne,ct,vt,0,Ht,ee,null),ct>>=1,vt>>=1}}else if(Se.length>0){if(he&&Ve){const ct=qt(Se[0]);i.texStorage2D(o.TEXTURE_2D,zt,ne,ct.width,ct.height)}for(let ct=0,vt=Se.length;ct<vt;ct++)It=Se[ct],he?q&&i.texSubImage2D(o.TEXTURE_2D,ct,0,0,Ht,ee,It):i.texImage2D(o.TEXTURE_2D,ct,ne,Ht,ee,It);C.generateMipmaps=!1}else if(he){if(Ve){const ct=qt(_t);i.texStorage2D(o.TEXTURE_2D,zt,ne,ct.width,ct.height)}q&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ht,ee,_t)}else i.texImage2D(o.TEXTURE_2D,0,ne,Ht,ee,_t);M(C)&&x(mt),Mt.__version=pt.version,C.onUpdate&&C.onUpdate(C)}O.__version=C.version}function j(O,C,J){if(C.image.length!==6)return;const mt=xe(O,C),xt=C.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+J);const pt=s.get(xt);if(xt.version!==pt.__version||mt===!0){i.activeTexture(o.TEXTURE0+J);const Mt=Ue.getPrimaries(Ue.workingColorSpace),Ut=C.colorSpace===ps?null:Ue.getPrimaries(C.colorSpace),Yt=C.colorSpace===ps||Mt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,C.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,C.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);const te=C.isCompressedTexture||C.image[0].isCompressedTexture,_t=C.image[0]&&C.image[0].isDataTexture,Ht=[];for(let vt=0;vt<6;vt++)!te&&!_t?Ht[vt]=b(C.image[vt],!0,l.maxCubemapSize):Ht[vt]=_t?C.image[vt].image:C.image[vt],Ht[vt]=me(C,Ht[vt]);const ee=Ht[0],ne=u.convert(C.format,C.colorSpace),It=u.convert(C.type),Se=L(C.internalFormat,ne,It,C.colorSpace),he=C.isVideoTexture!==!0,Ve=pt.__version===void 0||mt===!0,q=xt.dataReady;let zt=H(C,ee);Jt(o.TEXTURE_CUBE_MAP,C);let ct;if(te){he&&Ve&&i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,Se,ee.width,ee.height);for(let vt=0;vt<6;vt++){ct=Ht[vt].mipmaps;for(let Ot=0;Ot<ct.length;Ot++){const Bt=ct[Ot];C.format!==zi?ne!==null?he?q&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ot,0,0,Bt.width,Bt.height,ne,Bt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ot,Se,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):he?q&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ot,0,0,Bt.width,Bt.height,ne,It,Bt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ot,Se,Bt.width,Bt.height,0,ne,It,Bt.data)}}}else{if(ct=C.mipmaps,he&&Ve){ct.length>0&&zt++;const vt=qt(Ht[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,Se,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(_t){he?q&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Ht[vt].width,Ht[vt].height,ne,It,Ht[vt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Se,Ht[vt].width,Ht[vt].height,0,ne,It,Ht[vt].data);for(let Ot=0;Ot<ct.length;Ot++){const ce=ct[Ot].image[vt].image;he?q&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ot+1,0,0,ce.width,ce.height,ne,It,ce.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ot+1,Se,ce.width,ce.height,0,ne,It,ce.data)}}else{he?q&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,ne,It,Ht[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Se,ne,It,Ht[vt]);for(let Ot=0;Ot<ct.length;Ot++){const Bt=ct[Ot];he?q&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ot+1,0,0,ne,It,Bt.image[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ot+1,Se,ne,It,Bt.image[vt])}}}M(C)&&x(o.TEXTURE_CUBE_MAP),pt.__version=xt.version,C.onUpdate&&C.onUpdate(C)}O.__version=C.version}function gt(O,C,J,mt,xt,pt){const Mt=u.convert(J.format,J.colorSpace),Ut=u.convert(J.type),Yt=L(J.internalFormat,Mt,Ut,J.colorSpace),te=s.get(C),_t=s.get(J);if(_t.__renderTarget=C,!te.__hasExternalTextures){const Ht=Math.max(1,C.width>>pt),ee=Math.max(1,C.height>>pt);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?i.texImage3D(xt,pt,Yt,Ht,ee,C.depth,0,Mt,Ut,null):i.texImage2D(xt,pt,Yt,Ht,ee,0,Mt,Ut,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),Wt(C)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,mt,xt,_t.__webglTexture,0,Kt(C)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,mt,xt,_t.__webglTexture,pt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function ut(O,C,J){if(o.bindRenderbuffer(o.RENDERBUFFER,O),C.depthBuffer){const mt=C.depthTexture,xt=mt&&mt.isDepthTexture?mt.type:null,pt=A(C.stencilBuffer,xt),Mt=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=Kt(C);Wt(C)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ut,pt,C.width,C.height):J?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ut,pt,C.width,C.height):o.renderbufferStorage(o.RENDERBUFFER,pt,C.width,C.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,O)}else{const mt=C.textures;for(let xt=0;xt<mt.length;xt++){const pt=mt[xt],Mt=u.convert(pt.format,pt.colorSpace),Ut=u.convert(pt.type),Yt=L(pt.internalFormat,Mt,Ut,pt.colorSpace),te=Kt(C);J&&Wt(C)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,te,Yt,C.width,C.height):Wt(C)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,te,Yt,C.width,C.height):o.renderbufferStorage(o.RENDERBUFFER,Yt,C.width,C.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function bt(O,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const mt=s.get(C.depthTexture);mt.__renderTarget=C,(!mt.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),ft(C.depthTexture,0);const xt=mt.__webglTexture,pt=Kt(C);if(C.depthTexture.format===Ul)Wt(C)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0);else if(C.depthTexture.format===Ll)Wt(C)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0);else throw new Error("Unknown depthTexture format")}function Gt(O){const C=s.get(O),J=O.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==O.depthTexture){const mt=O.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),mt){const xt=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,mt.removeEventListener("dispose",xt)};mt.addEventListener("dispose",xt),C.__depthDisposeCallback=xt}C.__boundDepthTexture=mt}if(O.depthTexture&&!C.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");const mt=O.texture.mipmaps;mt&&mt.length>0?bt(C.__webglFramebuffer[0],O):bt(C.__webglFramebuffer,O)}else if(J){C.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(i.bindFramebuffer(o.FRAMEBUFFER,C.__webglFramebuffer[mt]),C.__webglDepthbuffer[mt]===void 0)C.__webglDepthbuffer[mt]=o.createRenderbuffer(),ut(C.__webglDepthbuffer[mt],O,!1);else{const xt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pt=C.__webglDepthbuffer[mt];o.bindRenderbuffer(o.RENDERBUFFER,pt),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,pt)}}else{const mt=O.texture.mipmaps;if(mt&&mt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,C.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=o.createRenderbuffer(),ut(C.__webglDepthbuffer,O,!1);else{const xt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pt=C.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,pt),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,pt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function wt(O,C,J){const mt=s.get(O);C!==void 0&&gt(mt.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),J!==void 0&&Gt(O)}function Tt(O){const C=O.texture,J=s.get(O),mt=s.get(C);O.addEventListener("dispose",P);const xt=O.textures,pt=O.isWebGLCubeRenderTarget===!0,Mt=xt.length>1;if(Mt||(mt.__webglTexture===void 0&&(mt.__webglTexture=o.createTexture()),mt.__version=C.version,h.memory.textures++),pt){J.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(C.mipmaps&&C.mipmaps.length>0){J.__webglFramebuffer[Ut]=[];for(let Yt=0;Yt<C.mipmaps.length;Yt++)J.__webglFramebuffer[Ut][Yt]=o.createFramebuffer()}else J.__webglFramebuffer[Ut]=o.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){J.__webglFramebuffer=[];for(let Ut=0;Ut<C.mipmaps.length;Ut++)J.__webglFramebuffer[Ut]=o.createFramebuffer()}else J.__webglFramebuffer=o.createFramebuffer();if(Mt)for(let Ut=0,Yt=xt.length;Ut<Yt;Ut++){const te=s.get(xt[Ut]);te.__webglTexture===void 0&&(te.__webglTexture=o.createTexture(),h.memory.textures++)}if(O.samples>0&&Wt(O)===!1){J.__webglMultisampledFramebuffer=o.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Ut=0;Ut<xt.length;Ut++){const Yt=xt[Ut];J.__webglColorRenderbuffer[Ut]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,J.__webglColorRenderbuffer[Ut]);const te=u.convert(Yt.format,Yt.colorSpace),_t=u.convert(Yt.type),Ht=L(Yt.internalFormat,te,_t,Yt.colorSpace,O.isXRRenderTarget===!0),ee=Kt(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,ee,Ht,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,J.__webglColorRenderbuffer[Ut])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(J.__webglDepthRenderbuffer=o.createRenderbuffer(),ut(J.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(pt){i.bindTexture(o.TEXTURE_CUBE_MAP,mt.__webglTexture),Jt(o.TEXTURE_CUBE_MAP,C);for(let Ut=0;Ut<6;Ut++)if(C.mipmaps&&C.mipmaps.length>0)for(let Yt=0;Yt<C.mipmaps.length;Yt++)gt(J.__webglFramebuffer[Ut][Yt],O,C,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Yt);else gt(J.__webglFramebuffer[Ut],O,C,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);M(C)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Mt){for(let Ut=0,Yt=xt.length;Ut<Yt;Ut++){const te=xt[Ut],_t=s.get(te);i.bindTexture(o.TEXTURE_2D,_t.__webglTexture),Jt(o.TEXTURE_2D,te),gt(J.__webglFramebuffer,O,te,o.COLOR_ATTACHMENT0+Ut,o.TEXTURE_2D,0),M(te)&&x(o.TEXTURE_2D)}i.unbindTexture()}else{let Ut=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ut=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ut,mt.__webglTexture),Jt(Ut,C),C.mipmaps&&C.mipmaps.length>0)for(let Yt=0;Yt<C.mipmaps.length;Yt++)gt(J.__webglFramebuffer[Yt],O,C,o.COLOR_ATTACHMENT0,Ut,Yt);else gt(J.__webglFramebuffer,O,C,o.COLOR_ATTACHMENT0,Ut,0);M(C)&&x(Ut),i.unbindTexture()}O.depthBuffer&&Gt(O)}function Pt(O){const C=O.textures;for(let J=0,mt=C.length;J<mt;J++){const xt=C[J];if(M(xt)){const pt=w(O),Mt=s.get(xt).__webglTexture;i.bindTexture(pt,Mt),x(pt),i.unbindTexture()}}}const le=[],F=[];function Zt(O){if(O.samples>0){if(Wt(O)===!1){const C=O.textures,J=O.width,mt=O.height;let xt=o.COLOR_BUFFER_BIT;const pt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Mt=s.get(O),Ut=C.length>1;if(Ut)for(let te=0;te<C.length;te++)i.bindFramebuffer(o.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Mt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);const Yt=O.texture.mipmaps;Yt&&Yt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let te=0;te<C.length;te++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),Ut){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Mt.__webglColorRenderbuffer[te]);const _t=s.get(C[te]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,_t,0)}o.blitFramebuffer(0,0,J,mt,0,0,J,mt,xt,o.NEAREST),p===!0&&(le.length=0,F.length=0,le.push(o.COLOR_ATTACHMENT0+te),O.depthBuffer&&O.resolveDepthBuffer===!1&&(le.push(pt),F.push(pt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,F)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,le))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ut)for(let te=0;te<C.length;te++){i.bindFramebuffer(o.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.RENDERBUFFER,Mt.__webglColorRenderbuffer[te]);const _t=s.get(C[te]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Mt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.TEXTURE_2D,_t,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&p){const C=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[C])}}}function Kt(O){return Math.min(l.maxSamples,O.samples)}function Wt(O){const C=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function At(O){const C=h.render.frame;v.get(O)!==C&&(v.set(O,C),O.update())}function me(O,C){const J=O.colorSpace,mt=O.format,xt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||J!==po&&J!==ps&&(Ue.getTransfer(J)===He?(mt!==zi||xt!==ta)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),C}function qt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(g.width=O.naturalWidth||O.width,g.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(g.width=O.displayWidth,g.height=O.displayHeight):(g.width=O.width,g.height=O.height),g}this.allocateTextureUnit=at,this.resetTextureUnits=nt,this.setTexture2D=ft,this.setTexture2DArray=k,this.setTexture3D=ot,this.setTextureCube=K,this.rebindTextures=wt,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Wt}function yR(o,t){function i(s,l=ps){let u;const h=Ue.getTransfer(l);if(s===ta)return o.UNSIGNED_BYTE;if(s===em)return o.UNSIGNED_SHORT_4_4_4_4;if(s===nm)return o.UNSIGNED_SHORT_5_5_5_1;if(s===lx)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===rx)return o.BYTE;if(s===ox)return o.SHORT;if(s===Dl)return o.UNSIGNED_SHORT;if(s===tm)return o.INT;if(s===er)return o.UNSIGNED_INT;if(s===$i)return o.FLOAT;if(s===Da)return o.HALF_FLOAT;if(s===ux)return o.ALPHA;if(s===cx)return o.RGB;if(s===zi)return o.RGBA;if(s===Ul)return o.DEPTH_COMPONENT;if(s===Ll)return o.DEPTH_STENCIL;if(s===im)return o.RED;if(s===am)return o.RED_INTEGER;if(s===fx)return o.RG;if(s===sm)return o.RG_INTEGER;if(s===rm)return o.RGBA_INTEGER;if(s===Pc||s===zc||s===Bc||s===Ic)if(h===He)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Pc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===zc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Bc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ic)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Pc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===zc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Bc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ic)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===xp||s===Sp||s===Mp||s===Ep)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===xp)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Sp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Mp)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ep)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Tp||s===bp||s===Ap)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Tp||s===bp)return h===He?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Ap)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Cp||s===Rp||s===wp||s===Dp||s===Np||s===Up||s===Lp||s===Op||s===Pp||s===zp||s===Bp||s===Ip||s===Fp||s===Hp)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Cp)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Rp)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===wp)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Dp)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Np)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Up)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Lp)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Op)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Pp)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===zp)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Bp)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ip)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Fp)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Hp)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Fc||s===Vp||s===Gp)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===Fc)return h===He?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Vp)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Gp)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===hx||s===Xp||s===kp||s===qp)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===Fc)return u.COMPRESSED_RED_RGTC1_EXT;if(s===Xp)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===kp)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===qp)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Nl?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const xR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class MR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new Ln,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new jn({vertexShader:xR,fragmentShader:SR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new se(new Fl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ER extends vo{constructor(t,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",p=1,g=null,v=null,m=null,_=null,S=null,E=null;const b=new MR,M=i.getContextAttributes();let x=null,w=null;const L=[],A=[],H=new Xt;let z=null;const P=new fi;P.viewport=new Xe;const I=new fi;I.viewport=new Xe;const D=[P,I],R=new k1;let V=null,nt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let j=L[U];return j===void 0&&(j=new jd,L[U]=j),j.getTargetRaySpace()},this.getControllerGrip=function(U){let j=L[U];return j===void 0&&(j=new jd,L[U]=j),j.getGripSpace()},this.getHand=function(U){let j=L[U];return j===void 0&&(j=new jd,L[U]=j),j.getHandSpace()};function at(U){const j=A.indexOf(U.inputSource);if(j===-1)return;const gt=L[j];gt!==void 0&&(gt.update(U.inputSource,U.frame,g||h),gt.dispatchEvent({type:U.type,data:U.inputSource}))}function lt(){l.removeEventListener("select",at),l.removeEventListener("selectstart",at),l.removeEventListener("selectend",at),l.removeEventListener("squeeze",at),l.removeEventListener("squeezestart",at),l.removeEventListener("squeezeend",at),l.removeEventListener("end",lt),l.removeEventListener("inputsourceschange",ft);for(let U=0;U<L.length;U++){const j=A[U];j!==null&&(A[U]=null,L[U].disconnect(j))}V=null,nt=null,b.reset(),t.setRenderTarget(x),S=null,_=null,m=null,l=null,w=null,xe.stop(),s.isPresenting=!1,t.setPixelRatio(z),t.setSize(H.width,H.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){u=U,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){d=U,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||h},this.setReferenceSpace=function(U){g=U},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return m},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(U){if(l=U,l!==null){if(x=t.getRenderTarget(),l.addEventListener("select",at),l.addEventListener("selectstart",at),l.addEventListener("selectend",at),l.addEventListener("squeeze",at),l.addEventListener("squeezestart",at),l.addEventListener("squeezeend",at),l.addEventListener("end",lt),l.addEventListener("inputsourceschange",ft),M.xrCompatible!==!0&&await i.makeXRCompatible(),z=t.getPixelRatio(),t.getSize(H),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,ut=null,bt=null;M.depth&&(bt=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,gt=M.stencil?Ll:Ul,ut=M.stencil?Nl:er);const Gt={colorFormat:i.RGBA8,depthFormat:bt,scaleFactor:u};m=new XRWebGLBinding(l,i),_=m.createProjectionLayer(Gt),l.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),w=new Bi(_.textureWidth,_.textureHeight,{format:zi,type:ta,depthTexture:new Cx(_.textureWidth,_.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const gt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(l,i,gt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),w=new Bi(S.framebufferWidth,S.framebufferHeight,{format:zi,type:ta,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(p),g=null,h=await l.requestReferenceSpace(d),xe.setContext(l),xe.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function ft(U){for(let j=0;j<U.removed.length;j++){const gt=U.removed[j],ut=A.indexOf(gt);ut>=0&&(A[ut]=null,L[ut].disconnect(gt))}for(let j=0;j<U.added.length;j++){const gt=U.added[j];let ut=A.indexOf(gt);if(ut===-1){for(let Gt=0;Gt<L.length;Gt++)if(Gt>=A.length){A.push(gt),ut=Gt;break}else if(A[Gt]===null){A[Gt]=gt,ut=Gt;break}if(ut===-1)break}const bt=L[ut];bt&&bt.connect(gt)}}const k=new G,ot=new G;function K(U,j,gt){k.setFromMatrixPosition(j.matrixWorld),ot.setFromMatrixPosition(gt.matrixWorld);const ut=k.distanceTo(ot),bt=j.projectionMatrix.elements,Gt=gt.projectionMatrix.elements,wt=bt[14]/(bt[10]-1),Tt=bt[14]/(bt[10]+1),Pt=(bt[9]+1)/bt[5],le=(bt[9]-1)/bt[5],F=(bt[8]-1)/bt[0],Zt=(Gt[8]+1)/Gt[0],Kt=wt*F,Wt=wt*Zt,At=ut/(-F+Zt),me=At*-F;if(j.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(me),U.translateZ(At),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),bt[10]===-1)U.projectionMatrix.copy(j.projectionMatrix),U.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const qt=wt+At,O=Tt+At,C=Kt-me,J=Wt+(ut-me),mt=Pt*Tt/O*qt,xt=le*Tt/O*qt;U.projectionMatrix.makePerspective(C,J,mt,xt,qt,O),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function yt(U,j){j===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(j.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(l===null)return;let j=U.near,gt=U.far;b.texture!==null&&(b.depthNear>0&&(j=b.depthNear),b.depthFar>0&&(gt=b.depthFar)),R.near=I.near=P.near=j,R.far=I.far=P.far=gt,(V!==R.near||nt!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),V=R.near,nt=R.far),P.layers.mask=U.layers.mask|2,I.layers.mask=U.layers.mask|4,R.layers.mask=P.layers.mask|I.layers.mask;const ut=U.parent,bt=R.cameras;yt(R,ut);for(let Gt=0;Gt<bt.length;Gt++)yt(bt[Gt],ut);bt.length===2?K(R,P,I):R.projectionMatrix.copy(P.projectionMatrix),St(U,R,ut)};function St(U,j,gt){gt===null?U.matrix.copy(j.matrixWorld):(U.matrix.copy(gt.matrixWorld),U.matrix.invert(),U.matrix.multiply(j.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(j.projectionMatrix),U.projectionMatrixInverse.copy(j.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=Ol*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(_===null&&S===null))return p},this.setFoveation=function(U){p=U,_!==null&&(_.fixedFoveation=U),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=U)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(R)};let Ft=null;function Jt(U,j){if(v=j.getViewerPose(g||h),E=j,v!==null){const gt=v.views;S!==null&&(t.setRenderTargetFramebuffer(w,S.framebuffer),t.setRenderTarget(w));let ut=!1;gt.length!==R.cameras.length&&(R.cameras.length=0,ut=!0);for(let wt=0;wt<gt.length;wt++){const Tt=gt[wt];let Pt=null;if(S!==null)Pt=S.getViewport(Tt);else{const F=m.getViewSubImage(_,Tt);Pt=F.viewport,wt===0&&(t.setRenderTargetTextures(w,F.colorTexture,F.depthStencilTexture),t.setRenderTarget(w))}let le=D[wt];le===void 0&&(le=new fi,le.layers.enable(wt),le.viewport=new Xe,D[wt]=le),le.matrix.fromArray(Tt.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(Tt.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),wt===0&&(R.matrix.copy(le.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ut===!0&&R.cameras.push(le)}const bt=l.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&m){const wt=m.getDepthInformation(gt[0]);wt&&wt.isValid&&wt.texture&&b.init(t,wt,l.renderState)}}for(let gt=0;gt<L.length;gt++){const ut=A[gt],bt=L[gt];ut!==null&&bt!==void 0&&bt.update(ut,j,g||h)}Ft&&Ft(U,j),j.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:j}),E=null}const xe=new Ux;xe.setAnimationLoop(Jt),this.setAnimationLoop=function(U){Ft=U},this.dispose=function(){}}}const Ys=new ea,TR=new ke;function bR(o,t){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,Mx(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,w,L,A){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(M,x):x.isMeshToonMaterial?(u(M,x),m(M,x)):x.isMeshPhongMaterial?(u(M,x),v(M,x)):x.isMeshStandardMaterial?(u(M,x),_(M,x),x.isMeshPhysicalMaterial&&S(M,x,A)):x.isMeshMatcapMaterial?(u(M,x),E(M,x)):x.isMeshDepthMaterial?u(M,x):x.isMeshDistanceMaterial?(u(M,x),b(M,x)):x.isMeshNormalMaterial?u(M,x):x.isLineBasicMaterial?(h(M,x),x.isLineDashedMaterial&&d(M,x)):x.isPointsMaterial?p(M,x,w,L):x.isSpriteMaterial?g(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Zn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Zn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const w=t.get(x),L=w.envMap,A=w.envMapRotation;L&&(M.envMap.value=L,Ys.copy(A),Ys.x*=-1,Ys.y*=-1,Ys.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ys.y*=-1,Ys.z*=-1),M.envMapRotation.value.setFromMatrix4(TR.makeRotationFromEuler(Ys)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function h(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function d(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function p(M,x,w,L){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*w,M.scale.value=L*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function g(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function v(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function m(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function _(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function S(M,x,w){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Zn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=w.texture,M.transmissionSamplerSize.value.set(w.width,w.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,x){x.matcap&&(M.matcap.value=x.matcap)}function b(M,x){const w=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(w.matrixWorld),M.nearDistance.value=w.shadow.camera.near,M.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function AR(o,t,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(w,L){const A=L.program;s.uniformBlockBinding(w,A)}function g(w,L){let A=l[w.id];A===void 0&&(E(w),A=v(w),l[w.id]=A,w.addEventListener("dispose",M));const H=L.program;s.updateUBOMapping(w,H);const z=t.render.frame;u[w.id]!==z&&(_(w),u[w.id]=z)}function v(w){const L=m();w.__bindingPointIndex=L;const A=o.createBuffer(),H=w.__size,z=w.usage;return o.bindBuffer(o.UNIFORM_BUFFER,A),o.bufferData(o.UNIFORM_BUFFER,H,z),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,A),A}function m(){for(let w=0;w<d;w++)if(h.indexOf(w)===-1)return h.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(w){const L=l[w.id],A=w.uniforms,H=w.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let z=0,P=A.length;z<P;z++){const I=Array.isArray(A[z])?A[z]:[A[z]];for(let D=0,R=I.length;D<R;D++){const V=I[D];if(S(V,z,D,H)===!0){const nt=V.__offset,at=Array.isArray(V.value)?V.value:[V.value];let lt=0;for(let ft=0;ft<at.length;ft++){const k=at[ft],ot=b(k);typeof k=="number"||typeof k=="boolean"?(V.__data[0]=k,o.bufferSubData(o.UNIFORM_BUFFER,nt+lt,V.__data)):k.isMatrix3?(V.__data[0]=k.elements[0],V.__data[1]=k.elements[1],V.__data[2]=k.elements[2],V.__data[3]=0,V.__data[4]=k.elements[3],V.__data[5]=k.elements[4],V.__data[6]=k.elements[5],V.__data[7]=0,V.__data[8]=k.elements[6],V.__data[9]=k.elements[7],V.__data[10]=k.elements[8],V.__data[11]=0):(k.toArray(V.__data,lt),lt+=ot.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,nt,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(w,L,A,H){const z=w.value,P=L+"_"+A;if(H[P]===void 0)return typeof z=="number"||typeof z=="boolean"?H[P]=z:H[P]=z.clone(),!0;{const I=H[P];if(typeof z=="number"||typeof z=="boolean"){if(I!==z)return H[P]=z,!0}else if(I.equals(z)===!1)return I.copy(z),!0}return!1}function E(w){const L=w.uniforms;let A=0;const H=16;for(let P=0,I=L.length;P<I;P++){const D=Array.isArray(L[P])?L[P]:[L[P]];for(let R=0,V=D.length;R<V;R++){const nt=D[R],at=Array.isArray(nt.value)?nt.value:[nt.value];for(let lt=0,ft=at.length;lt<ft;lt++){const k=at[lt],ot=b(k),K=A%H,yt=K%ot.boundary,St=K+yt;A+=yt,St!==0&&H-St<ot.storage&&(A+=H-St),nt.__data=new Float32Array(ot.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=A,A+=ot.storage}}}const z=A%H;return z>0&&(A+=H-z),w.__size=A,w.__cache={},this}function b(w){const L={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(L.boundary=4,L.storage=4):w.isVector2?(L.boundary=8,L.storage=8):w.isVector3||w.isColor?(L.boundary=16,L.storage=12):w.isVector4?(L.boundary=16,L.storage=16):w.isMatrix3?(L.boundary=48,L.storage=48):w.isMatrix4?(L.boundary=64,L.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),L}function M(w){const L=w.target;L.removeEventListener("dispose",M);const A=h.indexOf(L.__bindingPointIndex);h.splice(A,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function x(){for(const w in l)o.deleteBuffer(l[w]);h=[],l={},u={}}return{bind:p,update:g,dispose:x}}class CR{constructor(t={}){const{canvas:i=HT(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:g=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=h;const E=new Uint32Array(4),b=new Int32Array(4);let M=null,x=null;const w=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ms,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let H=!1;this._outputColorSpace=Fn;let z=0,P=0,I=null,D=-1,R=null;const V=new Xe,nt=new Xe;let at=null;const lt=new fe(0);let ft=0,k=i.width,ot=i.height,K=1,yt=null,St=null;const Ft=new Xe(0,0,k,ot),Jt=new Xe(0,0,k,ot);let xe=!1;const U=new cm;let j=!1,gt=!1;const ut=new ke,bt=new ke,Gt=new G,wt=new Xe,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pt=!1;function le(){return I===null?K:1}let F=s;function Zt(N,Q){return i.getContext(N,Q)}try{const N={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:g,powerPreference:v,failIfMajorPerformanceCaveat:m};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Jp}`),i.addEventListener("webglcontextlost",vt,!1),i.addEventListener("webglcontextrestored",Ot,!1),i.addEventListener("webglcontextcreationerror",Bt,!1),F===null){const Q="webgl2";if(F=Zt(Q,N),F===null)throw Zt(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let Kt,Wt,At,me,qt,O,C,J,mt,xt,pt,Mt,Ut,Yt,te,_t,Ht,ee,ne,It,Se,he,Ve,q;function zt(){Kt=new B2(F),Kt.init(),he=new yR(F,Kt),Wt=new D2(F,Kt,t,he),At=new vR(F,Kt),Wt.reverseDepthBuffer&&_&&At.buffers.depth.setReversed(!0),me=new H2(F),qt=new aR,O=new _R(F,Kt,At,qt,Wt,he,me),C=new U2(A),J=new z2(A),mt=new Y1(F),Ve=new R2(F,mt),xt=new I2(F,mt,me,Ve),pt=new G2(F,xt,mt,me),ne=new V2(F,Wt,O),_t=new N2(qt),Mt=new iR(A,C,J,Kt,Wt,Ve,_t),Ut=new bR(A,qt),Yt=new rR,te=new hR(Kt),ee=new C2(A,C,J,At,pt,S,p),Ht=new mR(A,pt,Wt),q=new AR(F,me,Wt,At),It=new w2(F,Kt,me),Se=new F2(F,Kt,me),me.programs=Mt.programs,A.capabilities=Wt,A.extensions=Kt,A.properties=qt,A.renderLists=Yt,A.shadowMap=Ht,A.state=At,A.info=me}zt();const ct=new ER(A,F);this.xr=ct,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const N=Kt.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Kt.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(N){N!==void 0&&(K=N,this.setSize(k,ot,!1))},this.getSize=function(N){return N.set(k,ot)},this.setSize=function(N,Q,st=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=N,ot=Q,i.width=Math.floor(N*K),i.height=Math.floor(Q*K),st===!0&&(i.style.width=N+"px",i.style.height=Q+"px"),this.setViewport(0,0,N,Q)},this.getDrawingBufferSize=function(N){return N.set(k*K,ot*K).floor()},this.setDrawingBufferSize=function(N,Q,st){k=N,ot=Q,K=st,i.width=Math.floor(N*st),i.height=Math.floor(Q*st),this.setViewport(0,0,N,Q)},this.getCurrentViewport=function(N){return N.copy(V)},this.getViewport=function(N){return N.copy(Ft)},this.setViewport=function(N,Q,st,rt){N.isVector4?Ft.set(N.x,N.y,N.z,N.w):Ft.set(N,Q,st,rt),At.viewport(V.copy(Ft).multiplyScalar(K).round())},this.getScissor=function(N){return N.copy(Jt)},this.setScissor=function(N,Q,st,rt){N.isVector4?Jt.set(N.x,N.y,N.z,N.w):Jt.set(N,Q,st,rt),At.scissor(nt.copy(Jt).multiplyScalar(K).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(N){At.setScissorTest(xe=N)},this.setOpaqueSort=function(N){yt=N},this.setTransparentSort=function(N){St=N},this.getClearColor=function(N){return N.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(N=!0,Q=!0,st=!0){let rt=0;if(N){let $=!1;if(I!==null){const Et=I.texture.format;$=Et===rm||Et===sm||Et===am}if($){const Et=I.texture.type,Rt=Et===ta||Et===er||Et===Dl||Et===Nl||Et===em||Et===nm,Ct=ee.getClearColor(),Nt=ee.getClearAlpha(),ie=Ct.r,re=Ct.g,$t=Ct.b;Rt?(E[0]=ie,E[1]=re,E[2]=$t,E[3]=Nt,F.clearBufferuiv(F.COLOR,0,E)):(b[0]=ie,b[1]=re,b[2]=$t,b[3]=Nt,F.clearBufferiv(F.COLOR,0,b))}else rt|=F.COLOR_BUFFER_BIT}Q&&(rt|=F.DEPTH_BUFFER_BIT),st&&(rt|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",vt,!1),i.removeEventListener("webglcontextrestored",Ot,!1),i.removeEventListener("webglcontextcreationerror",Bt,!1),ee.dispose(),Yt.dispose(),te.dispose(),qt.dispose(),C.dispose(),J.dispose(),pt.dispose(),Ve.dispose(),q.dispose(),Mt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",On),ct.removeEventListener("sessionend",Hl),na.stop()};function vt(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Ot(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const N=me.autoReset,Q=Ht.enabled,st=Ht.autoUpdate,rt=Ht.needsUpdate,$=Ht.type;zt(),me.autoReset=N,Ht.enabled=Q,Ht.autoUpdate=st,Ht.needsUpdate=rt,Ht.type=$}function Bt(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function ce(N){const Q=N.target;Q.removeEventListener("dispose",ce),$e(Q)}function $e(N){vn(N),qt.remove(N)}function vn(N){const Q=qt.get(N).programs;Q!==void 0&&(Q.forEach(function(st){Mt.releaseProgram(st)}),N.isShaderMaterial&&Mt.releaseShaderCache(N))}this.renderBufferDirect=function(N,Q,st,rt,$,Et){Q===null&&(Q=Tt);const Rt=$.isMesh&&$.matrixWorld.determinant()<0,Ct=Zc(N,Q,st,rt,$);At.setMaterial(rt,Rt);let Nt=st.index,ie=1;if(rt.wireframe===!0){if(Nt=xt.getWireframeAttribute(st),Nt===void 0)return;ie=2}const re=st.drawRange,$t=st.attributes.position;let we=re.start*ie,Ne=(re.start+re.count)*ie;Et!==null&&(we=Math.max(we,Et.start*ie),Ne=Math.min(Ne,(Et.start+Et.count)*ie)),Nt!==null?(we=Math.max(we,0),Ne=Math.min(Ne,Nt.count)):$t!=null&&(we=Math.max(we,0),Ne=Math.min(Ne,$t.count));const je=Ne-we;if(je<0||je===1/0)return;Ve.setup($,rt,Ct,st,Nt);let qe,Me=It;if(Nt!==null&&(qe=mt.get(Nt),Me=Se,Me.setIndex(qe)),$.isMesh)rt.wireframe===!0?(At.setLineWidth(rt.wireframeLinewidth*le()),Me.setMode(F.LINES)):Me.setMode(F.TRIANGLES);else if($.isLine){let jt=rt.linewidth;jt===void 0&&(jt=1),At.setLineWidth(jt*le()),$.isLineSegments?Me.setMode(F.LINES):$.isLineLoop?Me.setMode(F.LINE_LOOP):Me.setMode(F.LINE_STRIP)}else $.isPoints?Me.setMode(F.POINTS):$.isSprite&&Me.setMode(F.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Hc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Me.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Kt.get("WEBGL_multi_draw"))Me.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const jt=$._multiDrawStarts,tn=$._multiDrawCounts,be=$._multiDrawCount,yn=Nt?mt.get(Nt).bytesPerElement:1,Je=qt.get(rt).currentProgram.getUniforms();for(let Pn=0;Pn<be;Pn++)Je.setValue(F,"_gl_DrawID",Pn),Me.render(jt[Pn]/yn,tn[Pn])}else if($.isInstancedMesh)Me.renderInstances(we,je,$.count);else if(st.isInstancedBufferGeometry){const jt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,tn=Math.min(st.instanceCount,jt);Me.renderInstances(we,je,tn)}else Me.render(we,je)};function Re(N,Q,st){N.transparent===!0&&N.side===Oi&&N.forceSinglePass===!1?(N.side=Zn,N.needsUpdate=!0,aa(N,Q,st),N.side=gs,N.needsUpdate=!0,aa(N,Q,st),N.side=Oi):aa(N,Q,st)}this.compile=function(N,Q,st=null){st===null&&(st=N),x=te.get(st),x.init(Q),L.push(x),st.traverseVisible(function($){$.isLight&&$.layers.test(Q.layers)&&(x.pushLight($),$.castShadow&&x.pushShadow($))}),N!==st&&N.traverseVisible(function($){$.isLight&&$.layers.test(Q.layers)&&(x.pushLight($),$.castShadow&&x.pushShadow($))}),x.setupLights();const rt=new Set;return N.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Et=$.material;if(Et)if(Array.isArray(Et))for(let Rt=0;Rt<Et.length;Rt++){const Ct=Et[Rt];Re(Ct,st,$),rt.add(Ct)}else Re(Et,st,$),rt.add(Et)}),x=L.pop(),rt},this.compileAsync=function(N,Q,st=null){const rt=this.compile(N,Q,st);return new Promise($=>{function Et(){if(rt.forEach(function(Rt){qt.get(Rt).currentProgram.isReady()&&rt.delete(Rt)}),rt.size===0){$(N);return}setTimeout(Et,10)}Kt.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Ke=null;function _n(N){Ke&&Ke(N)}function On(){na.stop()}function Hl(){na.start()}const na=new Ux;na.setAnimationLoop(_n),typeof self<"u"&&na.setContext(self),this.setAnimationLoop=function(N){Ke=N,ct.setAnimationLoop(N),N===null?na.stop():na.start()},ct.addEventListener("sessionstart",On),ct.addEventListener("sessionend",Hl),this.render=function(N,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(Q),Q=ct.getCamera()),N.isScene===!0&&N.onBeforeRender(A,N,Q,I),x=te.get(N,L.length),x.init(Q),L.push(x),bt.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),U.setFromProjectionMatrix(bt),gt=this.localClippingEnabled,j=_t.init(this.clippingPlanes,gt),M=Yt.get(N,w.length),M.init(),w.push(M),ct.enabled===!0&&ct.isPresenting===!0){const Et=A.xr.getDepthSensingMesh();Et!==null&&Eo(Et,Q,-1/0,A.sortObjects)}Eo(N,Q,0,A.sortObjects),M.finish(),A.sortObjects===!0&&M.sort(yt,St),Pt=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,Pt&&ee.addToRenderList(M,N),this.info.render.frame++,j===!0&&_t.beginShadows();const st=x.state.shadowsArray;Ht.render(st,N,Q),j===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=M.opaque,$=M.transmissive;if(x.setupLights(),Q.isArrayCamera){const Et=Q.cameras;if($.length>0)for(let Rt=0,Ct=Et.length;Rt<Ct;Rt++){const Nt=Et[Rt];ys(rt,$,N,Nt)}Pt&&ee.render(N);for(let Rt=0,Ct=Et.length;Rt<Ct;Rt++){const Nt=Et[Rt];_s(M,N,Nt,Nt.viewport)}}else $.length>0&&ys(rt,$,N,Q),Pt&&ee.render(N),_s(M,N,Q);I!==null&&P===0&&(O.updateMultisampleRenderTarget(I),O.updateRenderTargetMipmap(I)),N.isScene===!0&&N.onAfterRender(A,N,Q),Ve.resetDefaultState(),D=-1,R=null,L.pop(),L.length>0?(x=L[L.length-1],j===!0&&_t.setGlobalState(A.clippingPlanes,x.state.camera)):x=null,w.pop(),w.length>0?M=w[w.length-1]:M=null};function Eo(N,Q,st,rt){if(N.visible===!1)return;if(N.layers.test(Q.layers)){if(N.isGroup)st=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(Q);else if(N.isLight)x.pushLight(N),N.castShadow&&x.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||U.intersectsSprite(N)){rt&&wt.setFromMatrixPosition(N.matrixWorld).applyMatrix4(bt);const Rt=pt.update(N),Ct=N.material;Ct.visible&&M.push(N,Rt,Ct,st,wt.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||U.intersectsObject(N))){const Rt=pt.update(N),Ct=N.material;if(rt&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),wt.copy(N.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),wt.copy(Rt.boundingSphere.center)),wt.applyMatrix4(N.matrixWorld).applyMatrix4(bt)),Array.isArray(Ct)){const Nt=Rt.groups;for(let ie=0,re=Nt.length;ie<re;ie++){const $t=Nt[ie],we=Ct[$t.materialIndex];we&&we.visible&&M.push(N,Rt,we,st,wt.z,$t)}}else Ct.visible&&M.push(N,Rt,Ct,st,wt.z,null)}}const Et=N.children;for(let Rt=0,Ct=Et.length;Rt<Ct;Rt++)Eo(Et[Rt],Q,st,rt)}function _s(N,Q,st,rt){const $=N.opaque,Et=N.transmissive,Rt=N.transparent;x.setupLightsView(st),j===!0&&_t.setGlobalState(A.clippingPlanes,st),rt&&At.viewport(V.copy(rt)),$.length>0&&ia($,Q,st),Et.length>0&&ia(Et,Q,st),Rt.length>0&&ia(Rt,Q,st),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function ys(N,Q,st,rt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[rt.id]===void 0&&(x.state.transmissionRenderTarget[rt.id]=new Bi(1,1,{generateMipmaps:!0,type:Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float")?Da:ta,minFilter:Js,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace}));const Et=x.state.transmissionRenderTarget[rt.id],Rt=rt.viewport||V;Et.setSize(Rt.z*A.transmissionResolutionScale,Rt.w*A.transmissionResolutionScale);const Ct=A.getRenderTarget();A.setRenderTarget(Et),A.getClearColor(lt),ft=A.getClearAlpha(),ft<1&&A.setClearColor(16777215,.5),A.clear(),Pt&&ee.render(st);const Nt=A.toneMapping;A.toneMapping=ms;const ie=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),x.setupLightsView(rt),j===!0&&_t.setGlobalState(A.clippingPlanes,rt),ia(N,st,rt),O.updateMultisampleRenderTarget(Et),O.updateRenderTargetMipmap(Et),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let re=!1;for(let $t=0,we=Q.length;$t<we;$t++){const Ne=Q[$t],je=Ne.object,qe=Ne.geometry,Me=Ne.material,jt=Ne.group;if(Me.side===Oi&&je.layers.test(rt.layers)){const tn=Me.side;Me.side=Zn,Me.needsUpdate=!0,Ii(je,st,rt,qe,Me,jt),Me.side=tn,Me.needsUpdate=!0,re=!0}}re===!0&&(O.updateMultisampleRenderTarget(Et),O.updateRenderTargetMipmap(Et))}A.setRenderTarget(Ct),A.setClearColor(lt,ft),ie!==void 0&&(rt.viewport=ie),A.toneMapping=Nt}function ia(N,Q,st){const rt=Q.isScene===!0?Q.overrideMaterial:null;for(let $=0,Et=N.length;$<Et;$++){const Rt=N[$],Ct=Rt.object,Nt=Rt.geometry,ie=Rt.group;let re=Rt.material;re.allowOverride===!0&&rt!==null&&(re=rt),Ct.layers.test(st.layers)&&Ii(Ct,Q,st,Nt,re,ie)}}function Ii(N,Q,st,rt,$,Et){N.onBeforeRender(A,Q,st,rt,$,Et),N.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),$.onBeforeRender(A,Q,st,rt,N,Et),$.transparent===!0&&$.side===Oi&&$.forceSinglePass===!1?($.side=Zn,$.needsUpdate=!0,A.renderBufferDirect(st,Q,rt,$,N,Et),$.side=gs,$.needsUpdate=!0,A.renderBufferDirect(st,Q,rt,$,N,Et),$.side=Oi):A.renderBufferDirect(st,Q,rt,$,N,Et),N.onAfterRender(A,Q,st,rt,$,Et)}function aa(N,Q,st){Q.isScene!==!0&&(Q=Tt);const rt=qt.get(N),$=x.state.lights,Et=x.state.shadowsArray,Rt=$.state.version,Ct=Mt.getParameters(N,$.state,Et,Q,st),Nt=Mt.getProgramCacheKey(Ct);let ie=rt.programs;rt.environment=N.isMeshStandardMaterial?Q.environment:null,rt.fog=Q.fog,rt.envMap=(N.isMeshStandardMaterial?J:C).get(N.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&N.envMap===null?Q.environmentRotation:N.envMapRotation,ie===void 0&&(N.addEventListener("dispose",ce),ie=new Map,rt.programs=ie);let re=ie.get(Nt);if(re!==void 0){if(rt.currentProgram===re&&rt.lightsStateVersion===Rt)return To(N,Ct),re}else Ct.uniforms=Mt.getUniforms(N),N.onBeforeCompile(Ct,A),re=Mt.acquireProgram(Ct,Nt),ie.set(Nt,re),rt.uniforms=Ct.uniforms;const $t=rt.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&($t.clippingPlanes=_t.uniform),To(N,Ct),rt.needsLights=bo(N),rt.lightsStateVersion=Rt,rt.needsLights&&($t.ambientLightColor.value=$.state.ambient,$t.lightProbe.value=$.state.probe,$t.directionalLights.value=$.state.directional,$t.directionalLightShadows.value=$.state.directionalShadow,$t.spotLights.value=$.state.spot,$t.spotLightShadows.value=$.state.spotShadow,$t.rectAreaLights.value=$.state.rectArea,$t.ltc_1.value=$.state.rectAreaLTC1,$t.ltc_2.value=$.state.rectAreaLTC2,$t.pointLights.value=$.state.point,$t.pointLightShadows.value=$.state.pointShadow,$t.hemisphereLights.value=$.state.hemi,$t.directionalShadowMap.value=$.state.directionalShadowMap,$t.directionalShadowMatrix.value=$.state.directionalShadowMatrix,$t.spotShadowMap.value=$.state.spotShadowMap,$t.spotLightMatrix.value=$.state.spotLightMatrix,$t.spotLightMap.value=$.state.spotLightMap,$t.pointShadowMap.value=$.state.pointShadowMap,$t.pointShadowMatrix.value=$.state.pointShadowMatrix),rt.currentProgram=re,rt.uniformsList=null,re}function Oa(N){if(N.uniformsList===null){const Q=N.currentProgram.getUniforms();N.uniformsList=Vc.seqWithValue(Q.seq,N.uniforms)}return N.uniformsList}function To(N,Q){const st=qt.get(N);st.outputColorSpace=Q.outputColorSpace,st.batching=Q.batching,st.batchingColor=Q.batchingColor,st.instancing=Q.instancing,st.instancingColor=Q.instancingColor,st.instancingMorph=Q.instancingMorph,st.skinning=Q.skinning,st.morphTargets=Q.morphTargets,st.morphNormals=Q.morphNormals,st.morphColors=Q.morphColors,st.morphTargetsCount=Q.morphTargetsCount,st.numClippingPlanes=Q.numClippingPlanes,st.numIntersection=Q.numClipIntersection,st.vertexAlphas=Q.vertexAlphas,st.vertexTangents=Q.vertexTangents,st.toneMapping=Q.toneMapping}function Zc(N,Q,st,rt,$){Q.isScene!==!0&&(Q=Tt),O.resetTextureUnits();const Et=Q.fog,Rt=rt.isMeshStandardMaterial?Q.environment:null,Ct=I===null?A.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:po,Nt=(rt.isMeshStandardMaterial?J:C).get(rt.envMap||Rt),ie=rt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,re=!!st.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),$t=!!st.morphAttributes.position,we=!!st.morphAttributes.normal,Ne=!!st.morphAttributes.color;let je=ms;rt.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(je=A.toneMapping);const qe=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Me=qe!==void 0?qe.length:0,jt=qt.get(rt),tn=x.state.lights;if(j===!0&&(gt===!0||N!==R)){const bn=N===R&&rt.id===D;_t.setState(rt,N,bn)}let be=!1;rt.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==tn.state.version||jt.outputColorSpace!==Ct||$.isBatchedMesh&&jt.batching===!1||!$.isBatchedMesh&&jt.batching===!0||$.isBatchedMesh&&jt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&jt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&jt.instancing===!1||!$.isInstancedMesh&&jt.instancing===!0||$.isSkinnedMesh&&jt.skinning===!1||!$.isSkinnedMesh&&jt.skinning===!0||$.isInstancedMesh&&jt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&jt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&jt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&jt.instancingMorph===!1&&$.morphTexture!==null||jt.envMap!==Nt||rt.fog===!0&&jt.fog!==Et||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==_t.numPlanes||jt.numIntersection!==_t.numIntersection)||jt.vertexAlphas!==ie||jt.vertexTangents!==re||jt.morphTargets!==$t||jt.morphNormals!==we||jt.morphColors!==Ne||jt.toneMapping!==je||jt.morphTargetsCount!==Me)&&(be=!0):(be=!0,jt.__version=rt.version);let yn=jt.currentProgram;be===!0&&(yn=aa(rt,Q,$));let Je=!1,Pn=!1,Pa=!1;const Ye=yn.getUniforms(),on=jt.uniforms;if(At.useProgram(yn.program)&&(Je=!0,Pn=!0,Pa=!0),rt.id!==D&&(D=rt.id,Pn=!0),Je||R!==N){At.buffers.depth.getReversed()?(ut.copy(N.projectionMatrix),GT(ut),XT(ut),Ye.setValue(F,"projectionMatrix",ut)):Ye.setValue(F,"projectionMatrix",N.projectionMatrix),Ye.setValue(F,"viewMatrix",N.matrixWorldInverse);const An=Ye.map.cameraPosition;An!==void 0&&An.setValue(F,Gt.setFromMatrixPosition(N.matrixWorld)),Wt.logarithmicDepthBuffer&&Ye.setValue(F,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Ye.setValue(F,"isOrthographic",N.isOrthographicCamera===!0),R!==N&&(R=N,Pn=!0,Pa=!0)}if($.isSkinnedMesh){Ye.setOptional(F,$,"bindMatrix"),Ye.setOptional(F,$,"bindMatrixInverse");const bn=$.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Ye.setValue(F,"boneTexture",bn.boneTexture,O))}$.isBatchedMesh&&(Ye.setOptional(F,$,"batchingTexture"),Ye.setValue(F,"batchingTexture",$._matricesTexture,O),Ye.setOptional(F,$,"batchingIdTexture"),Ye.setValue(F,"batchingIdTexture",$._indirectTexture,O),Ye.setOptional(F,$,"batchingColorTexture"),$._colorsTexture!==null&&Ye.setValue(F,"batchingColorTexture",$._colorsTexture,O));const dn=st.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&ne.update($,st,yn),(Pn||jt.receiveShadow!==$.receiveShadow)&&(jt.receiveShadow=$.receiveShadow,Ye.setValue(F,"receiveShadow",$.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(on.envMap.value=Nt,on.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&Q.environment!==null&&(on.envMapIntensity.value=Q.environmentIntensity),Pn&&(Ye.setValue(F,"toneMappingExposure",A.toneMappingExposure),jt.needsLights&&Vl(on,Pa),Et&&rt.fog===!0&&Ut.refreshFogUniforms(on,Et),Ut.refreshMaterialUniforms(on,rt,K,ot,x.state.transmissionRenderTarget[N.id]),Vc.upload(F,Oa(jt),on,O)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Vc.upload(F,Oa(jt),on,O),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Ye.setValue(F,"center",$.center),Ye.setValue(F,"modelViewMatrix",$.modelViewMatrix),Ye.setValue(F,"normalMatrix",$.normalMatrix),Ye.setValue(F,"modelMatrix",$.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const bn=rt.uniformsGroups;for(let An=0,ir=bn.length;An<ir;An++){const sa=bn[An];q.update(sa,yn),q.bind(sa,yn)}}return yn}function Vl(N,Q){N.ambientLightColor.needsUpdate=Q,N.lightProbe.needsUpdate=Q,N.directionalLights.needsUpdate=Q,N.directionalLightShadows.needsUpdate=Q,N.pointLights.needsUpdate=Q,N.pointLightShadows.needsUpdate=Q,N.spotLights.needsUpdate=Q,N.spotLightShadows.needsUpdate=Q,N.rectAreaLights.needsUpdate=Q,N.hemisphereLights.needsUpdate=Q}function bo(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(N,Q,st){const rt=qt.get(N);rt.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),qt.get(N.texture).__webglTexture=Q,qt.get(N.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:st,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,Q){const st=qt.get(N);st.__webglFramebuffer=Q,st.__useDefaultFramebuffer=Q===void 0};const xs=F.createFramebuffer();this.setRenderTarget=function(N,Q=0,st=0){I=N,z=Q,P=st;let rt=!0,$=null,Et=!1,Rt=!1;if(N){const Nt=qt.get(N);if(Nt.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(F.FRAMEBUFFER,null),rt=!1;else if(Nt.__webglFramebuffer===void 0)O.setupRenderTarget(N);else if(Nt.__hasExternalTextures)O.rebindTextures(N,qt.get(N.texture).__webglTexture,qt.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const $t=N.depthTexture;if(Nt.__boundDepthTexture!==$t){if($t!==null&&qt.has($t)&&(N.width!==$t.image.width||N.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(N)}}const ie=N.texture;(ie.isData3DTexture||ie.isDataArrayTexture||ie.isCompressedArrayTexture)&&(Rt=!0);const re=qt.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(re[Q])?$=re[Q][st]:$=re[Q],Et=!0):N.samples>0&&O.useMultisampledRTT(N)===!1?$=qt.get(N).__webglMultisampledFramebuffer:Array.isArray(re)?$=re[st]:$=re,V.copy(N.viewport),nt.copy(N.scissor),at=N.scissorTest}else V.copy(Ft).multiplyScalar(K).floor(),nt.copy(Jt).multiplyScalar(K).floor(),at=xe;if(st!==0&&($=xs),At.bindFramebuffer(F.FRAMEBUFFER,$)&&rt&&At.drawBuffers(N,$),At.viewport(V),At.scissor(nt),At.setScissorTest(at),Et){const Nt=qt.get(N.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Nt.__webglTexture,st)}else if(Rt){const Nt=qt.get(N.texture),ie=Q;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Nt.__webglTexture,st,ie)}else if(N!==null&&st!==0){const Nt=qt.get(N.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Nt.__webglTexture,st)}D=-1},this.readRenderTargetPixels=function(N,Q,st,rt,$,Et,Rt){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=qt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ct=Ct[Rt]),Ct){At.bindFramebuffer(F.FRAMEBUFFER,Ct);try{const Nt=N.texture,ie=Nt.format,re=Nt.type;if(!Wt.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=N.width-rt&&st>=0&&st<=N.height-$&&F.readPixels(Q,st,rt,$,he.convert(ie),he.convert(re),Et)}finally{const Nt=I!==null?qt.get(I).__webglFramebuffer:null;At.bindFramebuffer(F.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(N,Q,st,rt,$,Et,Rt){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=qt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ct=Ct[Rt]),Ct)if(Q>=0&&Q<=N.width-rt&&st>=0&&st<=N.height-$){At.bindFramebuffer(F.FRAMEBUFFER,Ct);const Nt=N.texture,ie=Nt.format,re=Nt.type;if(!Wt.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,$t),F.bufferData(F.PIXEL_PACK_BUFFER,Et.byteLength,F.STREAM_READ),F.readPixels(Q,st,rt,$,he.convert(ie),he.convert(re),0);const we=I!==null?qt.get(I).__webglFramebuffer:null;At.bindFramebuffer(F.FRAMEBUFFER,we);const Ne=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await VT(F,Ne,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,$t),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Et),F.deleteBuffer($t),F.deleteSync(Ne),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,Q=null,st=0){const rt=Math.pow(2,-st),$=Math.floor(N.image.width*rt),Et=Math.floor(N.image.height*rt),Rt=Q!==null?Q.x:0,Ct=Q!==null?Q.y:0;O.setTexture2D(N,0),F.copyTexSubImage2D(F.TEXTURE_2D,st,0,0,Rt,Ct,$,Et),At.unbindTexture()};const Qc=F.createFramebuffer(),Gl=F.createFramebuffer();this.copyTextureToTexture=function(N,Q,st=null,rt=null,$=0,Et=null){Et===null&&($!==0?(Hc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=$,$=0):Et=0);let Rt,Ct,Nt,ie,re,$t,we,Ne,je;const qe=N.isCompressedTexture?N.mipmaps[Et]:N.image;if(st!==null)Rt=st.max.x-st.min.x,Ct=st.max.y-st.min.y,Nt=st.isBox3?st.max.z-st.min.z:1,ie=st.min.x,re=st.min.y,$t=st.isBox3?st.min.z:0;else{const dn=Math.pow(2,-$);Rt=Math.floor(qe.width*dn),Ct=Math.floor(qe.height*dn),N.isDataArrayTexture?Nt=qe.depth:N.isData3DTexture?Nt=Math.floor(qe.depth*dn):Nt=1,ie=0,re=0,$t=0}rt!==null?(we=rt.x,Ne=rt.y,je=rt.z):(we=0,Ne=0,je=0);const Me=he.convert(Q.format),jt=he.convert(Q.type);let tn;Q.isData3DTexture?(O.setTexture3D(Q,0),tn=F.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(O.setTexture2DArray(Q,0),tn=F.TEXTURE_2D_ARRAY):(O.setTexture2D(Q,0),tn=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Q.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Q.unpackAlignment);const be=F.getParameter(F.UNPACK_ROW_LENGTH),yn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Je=F.getParameter(F.UNPACK_SKIP_PIXELS),Pn=F.getParameter(F.UNPACK_SKIP_ROWS),Pa=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,qe.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,qe.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ie),F.pixelStorei(F.UNPACK_SKIP_ROWS,re),F.pixelStorei(F.UNPACK_SKIP_IMAGES,$t);const Ye=N.isDataArrayTexture||N.isData3DTexture,on=Q.isDataArrayTexture||Q.isData3DTexture;if(N.isDepthTexture){const dn=qt.get(N),bn=qt.get(Q),An=qt.get(dn.__renderTarget),ir=qt.get(bn.__renderTarget);At.bindFramebuffer(F.READ_FRAMEBUFFER,An.__webglFramebuffer),At.bindFramebuffer(F.DRAW_FRAMEBUFFER,ir.__webglFramebuffer);for(let sa=0;sa<Nt;sa++)Ye&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,qt.get(N).__webglTexture,$,$t+sa),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,qt.get(Q).__webglTexture,Et,je+sa)),F.blitFramebuffer(ie,re,Rt,Ct,we,Ne,Rt,Ct,F.DEPTH_BUFFER_BIT,F.NEAREST);At.bindFramebuffer(F.READ_FRAMEBUFFER,null),At.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if($!==0||N.isRenderTargetTexture||qt.has(N)){const dn=qt.get(N),bn=qt.get(Q);At.bindFramebuffer(F.READ_FRAMEBUFFER,Qc),At.bindFramebuffer(F.DRAW_FRAMEBUFFER,Gl);for(let An=0;An<Nt;An++)Ye?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,dn.__webglTexture,$,$t+An):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,dn.__webglTexture,$),on?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,bn.__webglTexture,Et,je+An):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,bn.__webglTexture,Et),$!==0?F.blitFramebuffer(ie,re,Rt,Ct,we,Ne,Rt,Ct,F.COLOR_BUFFER_BIT,F.NEAREST):on?F.copyTexSubImage3D(tn,Et,we,Ne,je+An,ie,re,Rt,Ct):F.copyTexSubImage2D(tn,Et,we,Ne,ie,re,Rt,Ct);At.bindFramebuffer(F.READ_FRAMEBUFFER,null),At.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else on?N.isDataTexture||N.isData3DTexture?F.texSubImage3D(tn,Et,we,Ne,je,Rt,Ct,Nt,Me,jt,qe.data):Q.isCompressedArrayTexture?F.compressedTexSubImage3D(tn,Et,we,Ne,je,Rt,Ct,Nt,Me,qe.data):F.texSubImage3D(tn,Et,we,Ne,je,Rt,Ct,Nt,Me,jt,qe):N.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Et,we,Ne,Rt,Ct,Me,jt,qe.data):N.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Et,we,Ne,qe.width,qe.height,Me,qe.data):F.texSubImage2D(F.TEXTURE_2D,Et,we,Ne,Rt,Ct,Me,jt,qe);F.pixelStorei(F.UNPACK_ROW_LENGTH,be),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,yn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Je),F.pixelStorei(F.UNPACK_SKIP_ROWS,Pn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Pa),Et===0&&Q.generateMipmaps&&F.generateMipmap(tn),At.unbindTexture()},this.copyTextureToTexture3D=function(N,Q,st=null,rt=null,$=0){return Hc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(N,Q,st,rt,$)},this.initRenderTarget=function(N){qt.get(N).__webglFramebuffer===void 0&&O.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?O.setTextureCube(N,0):N.isData3DTexture?O.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?O.setTexture2DArray(N,0):O.setTexture2D(N,0),At.unbindTexture()},this.resetState=function(){z=0,P=0,I=null,At.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ca}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ue._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ue._getUnpackColorSpace()}}const Gc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Mo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const RR=new Dx(-1,1,1,-1,0,1);class wR extends Tn{constructor(){super(),this.setAttribute("position",new ze([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ze([0,2,0,0,2,0],2))}}const DR=new wR;class Sm{constructor(t){this._mesh=new se(DR,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,RR)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class NR extends Mo{constructor(t,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,t instanceof jn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=zl.clone(t.uniforms),this.material=new jn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Sm(this.material)}render(t,i,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Yy extends Mo{constructor(t,i){super(),this.scene=t,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,i,s){const l=t.getContext(),u=t.state;u.buffers.color.setMask(!1),u.buffers.depth.setMask(!1),u.buffers.color.setLocked(!0),u.buffers.depth.setLocked(!0);let h,d;this.inverse?(h=0,d=1):(h=1,d=0),u.buffers.stencil.setTest(!0),u.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),u.buffers.stencil.setFunc(l.ALWAYS,h,4294967295),u.buffers.stencil.setClear(d),u.buffers.stencil.setLocked(!0),t.setRenderTarget(s),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),u.buffers.color.setLocked(!1),u.buffers.depth.setLocked(!1),u.buffers.color.setMask(!0),u.buffers.depth.setMask(!0),u.buffers.stencil.setLocked(!1),u.buffers.stencil.setFunc(l.EQUAL,1,4294967295),u.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),u.buffers.stencil.setLocked(!0)}}class UR extends Mo{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class LR{constructor(t,i){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),i===void 0){const s=t.getSize(new Xt);this._width=s.width,this._height=s.height,i=new Bi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Da}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new NR(Gc),this.copyPass.material.blending=wa,this.clock=new Nx}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,i){this.passes.splice(i,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const i=this.passes.indexOf(t);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(t){for(let i=t+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const i=this.renderer.getRenderTarget();let s=!1;for(let l=0,u=this.passes.length;l<u;l++){const h=this.passes[l];if(h.enabled!==!1){if(h.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),h.render(this.renderer,this.writeBuffer,this.readBuffer,t,s),h.needsSwap){if(s){const d=this.renderer.getContext(),p=this.renderer.state.buffers.stencil;p.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),p.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}Yy!==void 0&&(h instanceof Yy?s=!0:h instanceof UR&&(s=!1))}}this.renderer.setRenderTarget(i)}reset(t){if(t===void 0){const i=this.renderer.getSize(new Xt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,i){this._width=t,this._height=i;const s=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(s,l),this.renderTarget2.setSize(s,l);for(let u=0;u<this.passes.length;u++)this.passes[u].setSize(s,l)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class OR extends Mo{constructor(t,i,s=null,l=null,u=null){super(),this.scene=t,this.camera=i,this.overrideMaterial=s,this.clearColor=l,this.clearAlpha=u,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new fe}render(t,i,s){const l=t.autoClear;t.autoClear=!1;let u,h;this.overrideMaterial!==null&&(h=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(u=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(u),this.overrideMaterial!==null&&(this.scene.overrideMaterial=h),t.autoClear=l}}const PR={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new fe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class go extends Mo{constructor(t,i=1,s,l){super(),this.strength=i,this.radius=s,this.threshold=l,this.resolution=t!==void 0?new Xt(t.x,t.y):new Xt(256,256),this.clearColor=new fe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let u=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);this.renderTargetBright=new Bi(u,h,{type:Da}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let v=0;v<this.nMips;v++){const m=new Bi(u,h,{type:Da});m.texture.name="UnrealBloomPass.h"+v,m.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(m);const _=new Bi(u,h,{type:Da});_.texture.name="UnrealBloomPass.v"+v,_.texture.generateMipmaps=!1,this.renderTargetsVertical.push(_),u=Math.round(u/2),h=Math.round(h/2)}const d=PR;this.highPassUniforms=zl.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new jn({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];const p=[3,5,7,9,11];u=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);for(let v=0;v<this.nMips;v++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(p[v])),this.separableBlurMaterials[v].uniforms.invSize.value=new Xt(1/u,1/h),u=Math.round(u/2),h=Math.round(h/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;const g=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=g,this.bloomTintColors=[new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=zl.clone(Gc.uniforms),this.blendMaterial=new jn({uniforms:this.copyUniforms,vertexShader:Gc.vertexShader,fragmentShader:Gc.fragmentShader,blending:tr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new fe,this._oldClearAlpha=1,this._basic=new Ki,this._fsQuad=new Sm(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,i){let s=Math.round(t/2),l=Math.round(i/2);this.renderTargetBright.setSize(s,l);for(let u=0;u<this.nMips;u++)this.renderTargetsHorizontal[u].setSize(s,l),this.renderTargetsVertical[u].setSize(s,l),this.separableBlurMaterials[u].uniforms.invSize.value=new Xt(1/s,1/l),s=Math.round(s/2),l=Math.round(l/2)}render(t,i,s,l,u){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const h=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),u&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=s.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let d=this.renderTargetBright;for(let p=0;p<this.nMips;p++)this._fsQuad.material=this.separableBlurMaterials[p],this.separableBlurMaterials[p].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[p].uniforms.direction.value=go.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[p]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[p].uniforms.colorTexture.value=this.renderTargetsHorizontal[p].texture,this.separableBlurMaterials[p].uniforms.direction.value=go.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[p]),t.clear(),this._fsQuad.render(t),d=this.renderTargetsVertical[p];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,u&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(s),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=h}_getSeparableBlurMaterial(t){const i=[];for(let s=0;s<t;s++)i.push(.39894*Math.exp(-.5*s*s/(t*t))/t);return new jn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Xt(.5,.5)},direction:{value:new Xt(.5,.5)},gaussianCoefficients:{value:i}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new jn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}go.BlurDirectionX=new Xt(1,0);go.BlurDirectionY=new Xt(0,1);const Oc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class zR extends Mo{constructor(){super(),this.uniforms=zl.clone(Oc.uniforms),this.material=new O1({name:Oc.name,uniforms:this.uniforms,vertexShader:Oc.vertexShader,fragmentShader:Oc.fragmentShader}),this._fsQuad=new Sm(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,i,s){this.uniforms.tDiffuse.value=s.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Ue.getTransfer(this._outputColorSpace)===He&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===$y?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===tx?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ex?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===$p?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ix?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ax?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===nx&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class BR extends bx{constructor(){super();const t=new Ua;t.deleteAttribute("uv");const i=new $s({side:Zn}),s=new $s,l=new Wp(16777215,900,28,2);l.position.set(.418,16.199,.3),this.add(l);const u=new se(t,i);u.position.set(-.757,13.219,.717),u.scale.set(31.713,28.305,28.591),this.add(u);const h=new m1(t,s,6),d=new Hn;d.position.set(-10.906,2.009,1.846),d.rotation.set(0,-.195,0),d.scale.set(2.328,7.905,4.651),d.updateMatrix(),h.setMatrixAt(0,d.matrix),d.position.set(-5.607,-.754,-.758),d.rotation.set(0,.994,0),d.scale.set(1.97,1.534,3.955),d.updateMatrix(),h.setMatrixAt(1,d.matrix),d.position.set(6.167,.857,7.803),d.rotation.set(0,.561,0),d.scale.set(3.927,6.285,3.687),d.updateMatrix(),h.setMatrixAt(2,d.matrix),d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),d.updateMatrix(),h.setMatrixAt(3,d.matrix),d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),d.updateMatrix(),h.setMatrixAt(4,d.matrix),d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),d.updateMatrix(),h.setMatrixAt(5,d.matrix),this.add(h);const p=new se(t,so(50));p.position.set(-16.116,14.37,8.208),p.scale.set(.1,2.428,2.739),this.add(p);const g=new se(t,so(50));g.position.set(-16.109,18.021,-8.207),g.scale.set(.1,2.425,2.751),this.add(g);const v=new se(t,so(17));v.position.set(14.904,12.198,-1.832),v.scale.set(.15,4.265,6.331),this.add(v);const m=new se(t,so(43));m.position.set(-.462,8.89,14.52),m.scale.set(4.38,5.441,.088),this.add(m);const _=new se(t,so(20));_.position.set(3.235,11.486,-12.541),_.scale.set(2.5,2,.1),this.add(_);const S=new se(t,so(100));S.position.set(0,20,0),S.scale.set(1,.1,1),this.add(S)}dispose(){const t=new Set;this.traverse(i=>{i.isMesh&&(t.add(i.geometry),t.add(i.material))});for(const i of t)i.dispose()}}function so(o){const t=new Ki;return t.color.setScalar(o),t}function Bx(){const t=document.createElement("canvas");t.width=64,t.height=64;const i=t.getContext("2d"),s=64/2,l=i.createRadialGradient(s,s,0,s,s,s);l.addColorStop(0,"rgba(255, 255, 255, 1)"),l.addColorStop(.25,"rgba(255, 255, 255, 0.85)"),l.addColorStop(.55,"rgba(255, 255, 255, 0.28)"),l.addColorStop(1,"rgba(255, 255, 255, 0)"),i.fillStyle=l,i.fillRect(0,0,64,64);const u=new hm(t);return u.colorSpace=Fn,u}function IR(o,t){const l=document.createElement("canvas");l.width=256,l.height=512;const u=l.getContext("2d");u.fillStyle="#070b18",u.fillRect(0,0,256,512);const h=8,d=24,p=8,g=6,v=(256-p*2)/h,m=(512-g*2)/d;for(let S=0;S<d;S++)for(let E=0;E<h;E++){const b=Math.sin(S*12.9898+E*78.233)*43758.5453,M=b-Math.floor(b);M>.28&&(u.fillStyle=M>.82?t:o,u.globalAlpha=.35+M*.55,u.fillRect(p+E*v+3,g+S*m+3,v-6,m-6))}u.globalAlpha=1;const _=new hm(l);return _.colorSpace=Fn,_.wrapS=wl,_.wrapT=wl,_}function FR(o,t){const s=document.createElement("canvas");s.width=1024,s.height=1024;const l=s.getContext("2d"),u=1024/2;l.clearRect(0,0,1024,1024);const h=64;l.strokeStyle=t,l.lineWidth=2,l.globalAlpha=.72;for(let g=0;g<=1024;g+=h)l.beginPath(),l.moveTo(g,0),l.lineTo(g,1024),l.stroke();for(let g=0;g<=1024;g+=h)l.beginPath(),l.moveTo(0,g),l.lineTo(1024,g),l.stroke();l.strokeStyle=o,l.lineWidth=1.5,l.globalAlpha=.38;for(let g=0;g<16;g++){const v=g/16*Math.PI*2;l.beginPath(),l.moveTo(u+Math.cos(v)*60,u+Math.sin(v)*60),l.lineTo(u+Math.cos(v)*470,u+Math.sin(v)*470),l.stroke()}l.strokeStyle=o,[110,195,285,375,455].forEach((g,v)=>{l.lineWidth=v%2===0?3:1.8,l.globalAlpha=v%2===0?.78:.45,l.beginPath(),l.arc(u,u,g,0,Math.PI*2),l.stroke()}),l.globalAlpha=1,l.globalCompositeOperation="destination-in";const d=l.createRadialGradient(u,u,40,u,u,u);d.addColorStop(0,"rgba(255, 255, 255, 0.85)"),d.addColorStop(.55,"rgba(255, 255, 255, 0.35)"),d.addColorStop(1,"rgba(255, 255, 255, 0)"),l.fillStyle=d,l.fillRect(0,0,1024,1024);const p=new hm(s);return p.colorSpace=Fn,p}function HR(o,t,i){const s=new Ra,l=new fe(t.primary),u=new fe(t.secondary),h=new fe(t.accent),d=new $s({color:l,emissive:l,emissiveIntensity:.65,metalness:.85,roughness:.18,wireframe:!0}),p=new $s({color:l,emissive:u,emissiveIntensity:.3,metalness:.94,roughness:.14}),g=new Ki({color:h,transparent:!0,opacity:.85});if(o==="dong-son"){const m=new H1().load("./dong-son-drum.png");m.colorSpace=Fn,m.anisotropy=8,i.push(m);const _=new se(new Wn(2.7,.055,24,128),p),S=new se(new Wn(2.84,.018,16,128),g),E=new $s({map:m,bumpMap:m,bumpScale:.05,emissiveMap:m,emissive:new fe("#ffd54f"),emissiveIntensity:.16,metalness:.12,roughness:.68,transparent:!0,alphaTest:.04,side:Oi}),b=new se(new dm(2.68,96),E);b.position.z=.02;const M=new se(new Wn(3.22,.018,16,128),g);M.rotation.x=Math.PI/3,s.add(_,S,b,M),s.userData={coreDisc:b,orbitRing1:M,outerRim:_}}else if(o==="holo-globe"){const v=new se(new Yc(1.62,32,24),d),m=new se(new Yc(1.12,48,48),new gy({color:u,emissive:l,emissiveIntensity:.45,metalness:.15,roughness:.12,clearcoat:1,transparent:!0,opacity:.45})),_=new Tn,S=360,E=new Float32Array(S*3),b=Math.PI*(3-Math.sqrt(5));for(let I=0;I<S;I++){const D=1-I/(S-1)*2,R=Math.sqrt(1-D*D),V=b*I,nt=1.66;E[I*3]=Math.cos(V)*R*nt,E[I*3+1]=D*nt,E[I*3+2]=Math.sin(V)*R*nt}_.setAttribute("position",new pi(E,3));const M=Bx();i.push(M);const x=new Ax(_,new fm({color:h,map:M,size:.11,transparent:!0,opacity:.95,blending:tr,depthWrite:!1})),w=new Ra;[[new G(1.2,.8,.7),new G(-1.1,.6,1)],[new G(-.8,-.9,1.1),new G(1.1,-.4,-1.1)],[new G(.2,1.4,-.7),new G(-1.3,-.6,-.7)]].forEach(([I,D])=>{const R=I.clone().add(D).multiplyScalar(.5).normalize().multiplyScalar(2.25),V=new gm(I,R,D),nt=new se(new _m(V,32,.018,8,!1),g);w.add(nt)});const A=new se(new Wn(2.18,.024,18,128),g);A.rotation.x=Math.PI/2.4;const H=new se(new Wn(2.44,.018,18,128),p);H.rotation.y=Math.PI/3,H.rotation.x=-Math.PI/5;const z=new se(new Aa(.09,0),g);z.position.set(2.18,0,0),A.add(z);const P=new se(new Aa(.08,0),g);P.position.set(-2.44,0,0),H.add(P),s.add(v,m,x,w,A,H),s.userData={globe:v,globeDots:x,arcsGroup:w,eqRing1:A,eqRing2:H}}else if(o==="smart-city"){const v=new Ra,m=IR(t.primary,t.accent);i.push(m);const _=new se(new qc(2.55,2.85,.16,64),p);_.position.y=-1.1;const S=new se(new Wn(2.68,.03,16,112),g);S.rotation.x=Math.PI/2,S.position.y=-1.03,v.add(_,S);const E=new $s({color:l,map:m,emissiveMap:m,emissive:l,emissiveIntensity:.72,metalness:.78,roughness:.22});[{x:0,z:0,w:.62,h:2.35,spire:!0},{x:-.88,z:.32,w:.44,h:1.72,spire:!0},{x:.88,z:-.28,w:.46,h:1.9,spire:!0},{x:-.5,z:-.84,w:.4,h:1.45},{x:.58,z:.78,w:.42,h:1.58},{x:-1.42,z:-.35,w:.34,h:1.15},{x:1.4,z:.38,w:.36,h:1.25},{x:.12,z:1.25,w:.35,h:1.05},{x:-.15,z:-1.35,w:.34,h:1.18},{x:-1.08,z:1.05,w:.3,h:.92},{x:1.1,z:-1.02,w:.3,h:.98}].forEach(w=>{const L=new se(new Ua(w.w,w.h,w.w),E);L.position.set(w.x,-1.02+w.h/2,w.z);const A=new se(new Ua(w.w*.72,w.h*.16,w.w*.72),p);A.position.set(w.x,-1.02+w.h+w.h*.16/2,w.z);const H=new se(new Ua(w.w+.025,w.h+.025,w.w+.025),d);if(H.position.copy(L.position),v.add(L,A,H),w.spire){const z=new se(new qc(.012,.03,.45,8),g);z.position.set(w.x,-1.02+w.h*1.16+.22,w.z),v.add(z)}});const M=new se(new Wn(2.92,.028,16,128),g);M.rotation.x=Math.PI/2,M.position.y=-.88;const x=new se(new Wn(2.45,.016,12,112),g);x.rotation.x=Math.PI/2.2,x.position.y=.65,v.add(M,x),s.add(v),s.userData={cityGroup:v,haloRing:M,skyOrbitRing:x}}else{const v=new gy({color:l,emissive:u,emissiveIntensity:.45,metalness:.35,roughness:.08,clearcoat:1,clearcoatRoughness:.08,iridescence:.85,flatShading:!0}),m=new se(new Aa(1.55,1),v),_=new se(new Aa(.88,0),g),S=new se(new Aa(1.92,0),d),E=new Ra;for(let w=0;w<8;w++){const L=w/8*Math.PI*2,A=new se(new Aa(.16,0),v);A.position.set(Math.cos(L)*2.35,Math.sin(L*2)*.45,Math.sin(L)*2.35),A.scale.set(.7,1.5,.7),E.add(A)}const b=new se(new Wn(2.58,.028,18,112),g),M=new se(new Wn(2.8,.024,18,112),p);M.rotation.x=Math.PI/2;const x=new se(new Wn(3.02,.02,18,112),g);x.rotation.y=Math.PI/2,s.add(m,_,S,E,b,M,x),s.userData={crystal:m,innerHeart:_,cage:S,shardsGroup:E,r1:b,r2:M,r3:x}}return s}function VR({patternId:o,phase:t,progress:i,coreY:s=0,coreScale:l=1,hideCenterpiece:u=!1}){const h=hi.useRef(null),d=hi.useRef({phase:t,progress:i,coreY:s,coreScale:l,hideCenterpiece:u});return hi.useEffect(()=>{d.current={phase:t,progress:i,coreY:s,coreScale:l,hideCenterpiece:u}},[t,i,s,l,u]),hi.useEffect(()=>{const p=h.current;if(!p)return;const g=Kp(o),{colors:v}=g,m=[],_=new bx;_.fog=new um(v.bgBottom,.04);const S=p.clientWidth||window.innerWidth,E=p.clientHeight||window.innerHeight,b=new fi(55,S/E,.1,120);b.position.set(0,1.4,9.2);const M=new CR({antialias:!0,alpha:!0,powerPreference:"high-performance"});M.setSize(S,E),M.setPixelRatio(Math.min(window.devicePixelRatio,2)),M.toneMapping=$p,M.toneMappingExposure=.92,p.appendChild(M.domElement);const x=new jp(M),w=new BR,L=x.fromScene(w,.04);_.environment=L.texture,_.environmentIntensity=.42,w.dispose();const A=new LR(M);A.addPass(new OR(_,b));const H=v.bloomStrength*.48,z=new go(new Xt(S,E),H,.42,.68);A.addPass(z),A.addPass(new zR);const P=new X1(16777215,.45),I=new Wp(v.primary,18,32);I.position.set(3.5,5.5,6);const D=new Wp(v.accent,12,32);D.position.set(-4.5,-2,4.5),_.add(P,I,D);const R=FR(v.primary,v.grid);m.push(R);const V=new se(new Fl(34,34),new Ki({map:R,transparent:!0,opacity:.88,blending:tr,depthWrite:!1}));V.rotation.x=-Math.PI/2,V.position.y=-2.95,_.add(V);const nt=new Ra;nt.position.y=-2.92;const at=new se(new Wn(3.4,.032,16,128),new Ki({color:v.primary,transparent:!0,opacity:.65}));at.rotation.x=Math.PI/2;const lt=new se(new Wn(5.1,.024,16,128),new Ki({color:v.accent,transparent:!0,opacity:.45}));lt.rotation.x=Math.PI/2;for(let F=0;F<12;F++){const Zt=F/12*Math.PI*2,Kt=new se(new Aa(.08,0),new Ki({color:v.accent,transparent:!0,opacity:.75}));Kt.position.set(Math.cos(Zt)*4.25,.04,Math.sin(Zt)*4.25),nt.add(Kt)}nt.add(at,lt),_.add(nt);const ft=HR(o,v,m);_.add(ft);const k=new Ki({color:v.accent,transparent:!0,opacity:0,side:Oi,blending:tr,depthWrite:!1}),ot=new se(new vm(.85,1.05,96),k);ot.position.set(0,.45,.2),_.add(ot);const K=Bx();m.push(K);const yt=1600,St=new Tn,Ft=new Float32Array(yt*3),Jt=new Float32Array(yt*3);for(let F=0;F<yt;F++){const Zt=3.4+Math.random()*12,Kt=Math.random()*Math.PI*2,Wt=(Math.random()-.5)*10,At=Math.cos(Kt)*Zt,me=Math.sin(Kt)*Zt-2;Ft[F*3]=At,Ft[F*3+1]=Wt,Ft[F*3+2]=me,Jt[F*3]=At,Jt[F*3+1]=Wt,Jt[F*3+2]=me}St.setAttribute("position",new pi(Ft,3));const xe=new fm({color:v.particle,map:K,size:.16,transparent:!0,opacity:.88,alphaTest:.01,blending:tr,depthWrite:!1}),U=new Ax(St,xe);_.add(U);const j={x:0,y:0},gt=F=>{j.x=(F.clientX/window.innerWidth-.5)*.6,j.y=(F.clientY/window.innerHeight-.5)*.4};window.addEventListener("pointermove",gt);const ut=()=>{const F=p.clientWidth||window.innerWidth,Zt=p.clientHeight||window.innerHeight;b.aspect=F/Zt,b.updateProjectionMatrix(),M.setSize(F,Zt),A.setSize(F,Zt)};window.addEventListener("resize",ut);const bt=new Nx;let Gt=0,wt=d.current.phase,Tt=0,Pt=0;const le=()=>{Pt=requestAnimationFrame(le);const F=Math.min(bt.getDelta(),.05);Gt+=F;const Zt=Gt,{phase:Kt,progress:Wt,coreY:At,coreScale:me,hideCenterpiece:qt}=d.current;if(wt!=="celebration"&&Kt==="celebration"&&(Tt=1,ot.scale.setScalar(.5)),wt=Kt,Tt>0){Tt=Math.max(0,Tt-F*1.15);const _t=1+(1-Tt)*11;ot.scale.setScalar(_t),k.opacity=Tt*.55}else k.opacity=0;const O=Kt==="charging",C=Kt==="celebration",J=O?1+Wt/100*3.2:C?.65:1;V.rotation.z=Zt*.03*J,nt.rotation.y=-Zt*.08*J;const mt=C||qt?.001:me,xt=kr.damp(ft.scale.x,mt,6.5,F);ft.scale.setScalar(xt);const pt=o==="holo-globe"?.72:.45;ft.position.y=kr.damp(ft.position.y,pt-At*.008,7.5,F);const Mt=ft.userData;o==="dong-son"?(Mt.coreDisc&&(Mt.coreDisc.rotation.z=Zt*.09*J),Mt.backHaloDisc&&(Mt.backHaloDisc.rotation.z=-Zt*.05*J),Mt.orbitRing1&&(Mt.orbitRing1.rotation.y=Zt*.4*J,Mt.orbitRing1.rotation.x=Math.PI/3+Math.sin(Zt*.5)*.14),ft.rotation.y=Math.sin(Zt*.35)*.16,ft.rotation.x=Math.cos(Zt*.25)*.06):o==="holo-globe"?(Mt.globe&&(Mt.globe.rotation.y=Zt*.28*J),Mt.globeDots&&(Mt.globeDots.rotation.y=Zt*.28*J),Mt.arcsGroup&&(Mt.arcsGroup.rotation.y=Zt*.28*J),Mt.eqRing1&&(Mt.eqRing1.rotation.z=Zt*.45*J),Mt.eqRing2&&(Mt.eqRing2.rotation.z=-Zt*.38*J)):o==="smart-city"?(Mt.cityGroup&&(Mt.cityGroup.rotation.y=Zt*.2*J),Mt.skyOrbitRing&&(Mt.skyOrbitRing.rotation.z=Zt*.65*J)):(Mt.crystal&&(Mt.crystal.rotation.y=Zt*.42*J,Mt.crystal.rotation.x=Math.sin(Zt*.6)*.2),Mt.innerHeart&&(Mt.innerHeart.rotation.y=-Zt*.65*J),Mt.cage&&(Mt.cage.rotation.y=-Zt*.28*J),Mt.shardsGroup&&(Mt.shardsGroup.rotation.y=Zt*.36*J),Mt.r1&&(Mt.r1.rotation.x=Zt*.65*J),Mt.r2&&(Mt.r2.rotation.y=Zt*.55*J),Mt.r3&&(Mt.r3.rotation.z=-Zt*.48*J));const Ut=O?9.2-Wt/100*1.8:C?11.2:9.2;b.position.z=kr.damp(b.position.z,Ut,4,F),b.position.x=kr.damp(b.position.x,j.x,3.5,F),b.position.y=kr.damp(b.position.y,1.2-j.y,3.5,F),b.lookAt(0,0,0),U.rotation.y=Zt*(O?.28:.045),xe.opacity=O?.82-Wt/100*.28:.82;const Yt=St.attributes.position;for(let _t=0;_t<yt;_t++){const Ht=Jt[_t*3],ee=Jt[_t*3+1],ne=Jt[_t*3+2];if(O){const It=1-Wt/100*.38;Yt.setXYZ(_t,Ht*It,ee*It+Math.sin(Zt*2+_t)*.08,ne*It)}else Yt.setXYZ(_t,Ht,ee+Math.sin(Zt+_t*.2)*.25,ne)}Yt.needsUpdate=!0;const te=O?Math.min(.78,H+Wt/100*.22):H;z.strength=kr.damp(z.strength,te,5,F),A.render()};return le(),()=>{cancelAnimationFrame(Pt),window.removeEventListener("pointermove",gt),window.removeEventListener("resize",ut),_.traverse(F=>{F.geometry&&F.geometry.dispose(),F.material&&(Array.isArray(F.material)?F.material.forEach(Zt=>Zt.dispose()):F.material.dispose())}),m.forEach(F=>F.dispose()),L.dispose(),x.dispose(),A.dispose(),M.dispose(),M.domElement.parentNode===p&&p.removeChild(M.domElement)}},[o]),oe.jsx("div",{ref:h,className:"absolute inset-0 z-10 pointer-events-none","aria-hidden":"true"})}function GR({handCount:o,podY:t,podSize:i,podGap:s,activeHands:l,primaryColor:u,glowColor:h,customHandImageUrl:d,showPodLabels:p=!0,podLabels:g=[],isCharging:v=!1,visible:m,onActivateHand:_,onDeactivateHand:S}){if(!m)return null;const E=o>8?.78:o>6?.88:1,b=Math.round(i*E),M=Math.round(s*E),x=h||u;return oe.jsx("div",{className:"absolute inset-x-0 bottom-10 z-30 flex items-center justify-center flex-wrap px-6 transition-all duration-500",style:{transform:`translateY(${t}px)`,gap:`${M}px`},children:Array.from({length:o},(w,L)=>{var P;const A=L+1,H=v||l.has(A),z=((P=g[L])==null?void 0:P.trim())||`${A}`;return oe.jsxs("div",{className:"flex flex-col items-center gap-2",children:[oe.jsxs("button",{type:"button",onMouseDown:()=>_==null?void 0:_(A),onMouseUp:()=>S==null?void 0:S(A),onMouseLeave:()=>S==null?void 0:S(A),onTouchStart:I=>{I.preventDefault(),_==null||_(A)},onTouchEnd:I=>{I.preventDefault(),S==null||S(A)},onTouchCancel:()=>S==null?void 0:S(A),style:{width:`${b}px`,height:`${b}px`,borderColor:H?"#ffffff":x,boxShadow:H?`0 0 46px ${x}, 0 0 90px ${x}99, inset 0 0 32px ${x}`:`0 0 22px ${x}55, inset 0 0 14px ${x}33`,transitionTimingFunction:"cubic-bezier(0.22, 1, 0.36, 1)"},className:`relative rounded-full border-2 flex flex-col items-center justify-center backdrop-blur-md transition-all duration-300 cursor-pointer select-none ${H?"scale-110 bg-white/20 animate-pulse-glow":"bg-black/45 hover:scale-105"}`,"aria-label":`Bục chạm ${A}`,children:[H&&oe.jsx("span",{className:"absolute -inset-2 rounded-full border opacity-60 animate-ping pointer-events-none",style:{borderColor:x,animationDuration:"1.6s"}}),oe.jsx("span",{className:"absolute inset-1.5 rounded-full border border-dashed opacity-80 animate-spin pointer-events-none",style:{borderColor:H?"#ffffff":x,animationDuration:H?"4.5s":"14s"}}),oe.jsx("span",{className:"absolute inset-3 rounded-full border border-dotted opacity-55 animate-spin-reverse pointer-events-none",style:{borderColor:H?"#ffffff":x,animationDuration:H?"7s":"20s"}}),oe.jsx("span",{className:"absolute inset-4 rounded-full pointer-events-none opacity-35",style:{background:`radial-gradient(circle, ${x}44 0%, transparent 72%)`}}),d?oe.jsx("img",{src:d,alt:`Bàn tay ${A}`,style:{width:Math.round(b*.56),height:Math.round(b*.56),filter:H?`drop-shadow(0 0 14px ${x}) brightness(1.35)`:`drop-shadow(0 0 6px ${x}88)`},className:"object-contain transition-all duration-300 pointer-events-none"}):oe.jsx(XE,{style:{width:Math.round(b*.44),height:Math.round(b*.44),color:H?"#ffffff":x,filter:H?`drop-shadow(0 0 12px ${x})`:"none"},className:"transition-all duration-200"})]}),p&&oe.jsx("span",{className:"px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-black/55 border backdrop-blur-sm",style:{borderColor:`${x}55`,color:H?"#ffffff":x},children:z})]},A)})})}const Wy=[BE,FE,VE];function XR({config:o,pattern:t,visible:i}){var v;if(!i)return null;const s=o.celebrationTheme||"match-pattern",l=s==="tech-cyan"||s==="match-pattern"&&t.id==="holo-globe",u=l?"#38bdf8":s==="royal-gold"?"#f5c542":t.colors.primary,h=l?"#a5f3fc":s==="royal-gold"?"#fde047":t.colors.accent,d=l?"#0369a1":s==="royal-gold"?"#b91c1c":t.colors.secondary,p=o.logoSize||112,g=Array.isArray(o.celebrationPillars)&&o.celebrationPillars.length>0?o.celebrationPillars:[{title:"CHÍNH QUYỀN SỐ",desc:"Minh bạch & Kiến tạo"},{title:"KINH TẾ SỐ",desc:"Đột phá & Bền vững"},{title:"XÃ HỘI SỐ",desc:"Phục vụ Nhân dân"}];return oe.jsxs("div",{className:"absolute inset-0 z-40 flex flex-col items-center justify-center px-8 text-center",children:[oe.jsx("div",{className:"mb-6 animate-float-slow",children:o.customLogoData?oe.jsx("img",{src:o.customLogoData,alt:"Logo đơn vị",style:{height:`${p}px`},className:"w-auto object-contain drop-shadow-[0_10px_30px_rgba(245,197,66,0.45)]"}):oe.jsx("div",{style:{width:`${Math.round(p*.85)}px`,height:`${Math.round(p*.85)}px`,borderColor:u,backgroundColor:`${d}55`,boxShadow:`0 0 40px ${u}66`},className:"rounded-full border-2 flex items-center justify-center backdrop-blur-md shadow-2xl",children:oe.jsx(PE,{style:{width:`${Math.round(p*.44)}px`,height:`${Math.round(p*.44)}px`,color:h}})})}),((v=o.celebrationRibbon)==null?void 0:v.trim())&&oe.jsx("div",{className:"px-7 py-2 rounded-full border text-sm md:text-base font-bold tracking-[0.22em] uppercase mb-5 backdrop-blur-md",style:{borderColor:`${u}aa`,background:`linear-gradient(90deg, ${d}aa, ${u}33, ${d}aa)`,color:h},children:o.celebrationRibbon}),oe.jsx("h1",{className:`text-4xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase max-w-5xl leading-tight mb-4 ${l?"cyan-3d-text":"gold-3d-text"}`,children:o.celebrationTitle}),oe.jsx("div",{className:"w-48 h-0.5 rounded-full my-3 opacity-80",style:{background:`linear-gradient(90deg, transparent, ${u}, transparent)`}}),oe.jsx("p",{className:"text-lg md:text-2xl font-semibold tracking-[0.14em] uppercase text-white/95 max-w-4xl mb-10 drop-shadow",children:o.celebrationDesc}),o.showCelebrationPillars!==!1&&oe.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full",children:g.map((m,_)=>{const S=Wy[_%Wy.length];return oe.jsxs("div",{className:"px-5 py-4 rounded-2xl border backdrop-blur-md flex items-center gap-3.5 text-left",style:{borderColor:`${u}55`,backgroundColor:"rgba(0,0,0,0.42)"},children:[oe.jsx("div",{className:"w-11 h-11 rounded-xl flex items-center justify-center shrink-0",style:{backgroundColor:`${u}22`},children:oe.jsx(S,{className:"w-6 h-6",style:{color:u}})}),oe.jsxs("div",{children:[oe.jsx("div",{className:"text-sm font-bold tracking-wider",style:{color:h},children:m.title}),oe.jsx("div",{className:"text-xs text-white/75",children:m.desc})]})]},`${m.title}-${_}`)})})]})}const Ix="cham_tay_studio_config_v2",kR="cham_tay_stage_sync_v2",op={patternId:"dong-son",handCount:5,chargeDuration:5e3,podY:-40,podSize:108,podGap:36,coreY:0,coreScale:1,videoBgEnabled:!0,videoSource:"local",youtubeVideoId:"sbDz4hoZWCk",videoOpacity:.55,tintDarkness:.45,screenBrightness:76,autoPhotoOpDim:!0,masterVolume:.8,audioEnabled:!0,soundPreset:"ceremony",touchSoundEnabled:!0,touchVolume:.85,countdownSoundEnabled:!0,countdownVolume:.9,fanfareSoundEnabled:!0,fanfareVolume:1,bgAudioEnabled:!1,bgAudioVolume:.45,hasCustomBgAudio:!1,hasCustomFanfareAudio:!1,showHeader:!1,eventBadge:"ỦY BAN NHÂN DÂN • NGÀY HỘI CHUYỂN ĐỔI SỐ",eventTitle:"NGHI THỨC KÍCH HOẠT CHUYỂN ĐỔI SỐ",eventSubtitle:"CHÍNH QUYỀN SỐ MINH BẠCH - DOANH NGHIỆP BỨT PHÁ - PHỤC VỤ NHÂN DÂN",celebrationTitle:"CHÍNH THỨC KÍCH HOẠT THÀNH CÔNG",celebrationDesc:"ĐỔI MỚI SÁNG TẠO - VƯƠN MÌNH - PHÁT TRIỂN BỀN VỮNG",customLogoData:null,handGlowColor:"#f5c542",showPodLabels:!0,podLabels:["Đại biểu 1","Đại biểu 2","Đại biểu 3","Đại biểu 4","Đại biểu 5"],hasCustomHandImage:!1,hasCustomBgVideo:!1,hasCustomActivationVideo:!1,activationVideoMuted:!0,celebrationRibbon:"NGHI THỨC KÍCH HOẠT HOÀN THÀNH",logoSize:112,showCelebrationPillars:!0,celebrationTheme:"match-pattern",celebrationPillars:[{title:"CHÍNH QUYỀN SỐ",desc:"Minh bạch & Kiến tạo"},{title:"KINH TẾ SỐ",desc:"Đột phá & Bền vững"},{title:"XÃ HỘI SỐ",desc:"Phục vụ Nhân dân"}]};function qR(o){if(!o)return"sbDz4hoZWCk";const t=String(o).trim(),i=t.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([^&?/\s]{11})/);return i&&i[1]?i[1]:/^[a-zA-Z0-9_-]{11}$/.test(t)?t:"sbDz4hoZWCk"}function JR(){try{const o=localStorage.getItem(Ix);if(!o)return{...op};const t=JSON.parse(o);return t.youtubeVideoId==="qyW8818wHhA"&&(t.youtubeVideoId="sbDz4hoZWCk"),{...op,...t}}catch{return{...op}}}function $R(o){try{localStorage.setItem(Ix,JSON.stringify(o))}catch(t){console.warn("Could not save config to localStorage:",t)}}function tw(o,t){const i=Kp(t);return{...o,patternId:i.id,eventBadge:i.defaults.eventBadge,eventTitle:i.defaults.eventTitle,eventSubtitle:i.defaults.eventSubtitle,celebrationTitle:i.defaults.celebrationTitle,celebrationDesc:i.defaults.celebrationDesc}}function ew(o){if(typeof BroadcastChannel>"u")return{post:()=>{},close:()=>{}};const t=new BroadcastChannel(kR);return t.onmessage=i=>{o&&i.data&&o(i.data)},{post:(i,s={})=>{try{t.postMessage({type:i,payload:s,timestamp:Date.now()})}catch(l){console.warn("BroadcastChannel post failed:",l)}},close:()=>t.close()}}const YR="./Background Trống Đồng Bản Đồ Việt Nam - I Love Viet Nam - YouTube.mp4";function jy({config:o,phase:t,progress:i,countdownSec:s,flashActive:l,activeHands:u,customHandImageUrl:h,customBgVideoUrl:d,customActivationVideoUrl:p,onActivateHand:g,onDeactivateHand:v,onActivationVideoEnded:m}){const _=Kp(o.patternId),S=t==="celebration"&&o.autoPhotoOpDim?Math.min(o.screenBrightness,72):o.screenBrightness,E=qR(o.youtubeVideoId),b=d||YR,M=!!(t==="charging"&&p);return oe.jsxs("div",{className:"relative w-full h-full overflow-hidden select-none",style:{background:`radial-gradient(circle at 50% 40%, ${_.colors.bgTop}, ${_.colors.bgBottom} 80%)`,filter:`brightness(${S/100})`,transition:"filter 0.5s ease"},children:[!M&&o.videoBgEnabled&&(o.videoSource==="local"||d)&&oe.jsx("video",{src:b,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"absolute inset-0 w-full h-full object-cover z-0 pointer-events-none",style:{opacity:o.videoOpacity}},b),!M&&!d&&o.videoBgEnabled&&o.videoSource==="youtube"&&oe.jsx("div",{className:"absolute inset-0 overflow-hidden z-0 pointer-events-none",style:{opacity:o.videoOpacity},children:oe.jsx("iframe",{title:"Video Nền YouTube",src:`https://www.youtube.com/embed/${E}?autoplay=1&mute=1&controls=0&loop=1&playlist=${E}&playsinline=1&rel=0&showinfo=0`,className:"w-[130%] h-[130%] -ml-[15%] -mt-[15%] pointer-events-none",allow:"autoplay; encrypted-media"})}),oe.jsx("div",{className:"absolute inset-0 z-0 pointer-events-none",style:{backgroundColor:`rgba(0,0,0,${o.tintDarkness})`}}),oe.jsx(VR,{patternId:o.patternId,phase:t,progress:i,coreY:o.coreY,coreScale:o.coreScale,hideCenterpiece:M}),M&&oe.jsx("video",{src:p,autoPlay:!0,muted:o.activationVideoMuted!==!1,playsInline:!0,onEnded:m,className:"absolute inset-0 w-full h-full object-cover z-20 pointer-events-none"},`act-${p}`),o.showHeader&&t!=="celebration"&&oe.jsxs("header",{className:"absolute top-8 inset-x-0 z-20 text-center px-6 pointer-events-none",children:[oe.jsx("div",{className:"inline-block px-5 py-1.5 rounded-full border text-sm font-bold tracking-[0.2em] uppercase mb-3 backdrop-blur-md",style:{borderColor:`${_.colors.primary}88`,color:_.colors.accent,backgroundColor:"rgba(0,0,0,0.4)"},children:o.eventBadge}),oe.jsx("h1",{className:`text-4xl lg:text-5xl font-black uppercase tracking-wide ${_.id==="holo-globe"?"cyan-3d-text":"gold-3d-text"}`,children:o.eventTitle}),oe.jsx("p",{className:"mt-1.5 text-base font-medium tracking-[0.15em] uppercase text-white/80",children:o.eventSubtitle})]}),t==="charging"&&!M&&oe.jsx("div",{className:"absolute inset-0 z-30 flex items-center justify-center pointer-events-none",children:oe.jsx("div",{className:`text-[11rem] md:text-[13rem] font-black leading-none animate-count-pop ${_.id==="holo-globe"?"cyan-3d-text":"gold-3d-text"}`,children:s},s)}),oe.jsx(GR,{handCount:o.handCount,podY:o.podY,podSize:o.podSize,podGap:o.podGap,activeHands:u,primaryColor:_.colors.primary,glowColor:o.handGlowColor,customHandImageUrl:h,showPodLabels:o.showPodLabels,podLabels:o.podLabels,isCharging:t==="charging",visible:t!=="celebration",onActivateHand:g,onDeactivateHand:v}),oe.jsx(XR,{config:o,pattern:_,visible:t==="celebration"}),oe.jsx("div",{className:`absolute inset-0 z-50 pointer-events-none transition-opacity duration-300 ${l?"opacity-60":"opacity-0"}`,style:{background:`radial-gradient(circle, #ffffff 0%, ${_.colors.accent} 60%, transparent 100%)`}})]})}function nw({isPreview:o=!1,...t}){const i=hi.useRef(null),[s,l]=hi.useState(.45);return hi.useEffect(()=>{if(!o||!i.current)return;const u=i.current,h=()=>{const p=u.clientWidth;p>0&&l(p/1920)};h();const d=new ResizeObserver(h);return d.observe(u),()=>d.disconnect()},[o]),o?oe.jsx("div",{ref:i,className:"relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-black",children:oe.jsx("div",{className:"origin-top-left",style:{width:"1920px",height:"1080px",transform:`scale(${s})`},children:oe.jsx(jy,{...t})})}):oe.jsx("div",{className:"relative w-screen h-screen overflow-hidden",children:oe.jsx(jy,{...t})})}class WR{constructor(){this.ctx=null,this.masterGain=null,this.compressor=null,this.dryBus=null,this.reverbSend=null,this.reverbNode=null,this.noiseBuffer=null,this.volume=.8,this.enabled=!0,this.soundPreset="ceremony",this.touchSoundEnabled=!0,this.touchVolume=.85,this.countdownSoundEnabled=!0,this.countdownVolume=.9,this.fanfareSoundEnabled=!0,this.fanfareVolume=1,this.bgAudioEnabled=!1,this.bgAudioVolume=.45,this.customBgAudioUrl=null,this.customFanfareAudioUrl=null,this.bgAudioEl=null,this.fanfareAudioEl=null,this.activeFanfareBus=null,this.bgDesiredPlaying=!1}_buildHallImpulse(t,i=2.6,s=2.4){const l=t.sampleRate,u=Math.floor(l*i),h=t.createBuffer(2,u,l);for(let d=0;d<2;d++){const p=h.getChannelData(d);let g=0;for(let v=0;v<u;v++){const m=v/u,_=Math.pow(1-m,s),S=Math.random()*2-1;g=g*.72+S*.28,p[v]=g*_}}return h}_buildNoiseBuffer(t,i=2.5){const s=t.sampleRate,l=Math.floor(s*i),u=t.createBuffer(2,l,s);for(let h=0;h<2;h++){const d=u.getChannelData(h);for(let p=0;p<l;p++)d[p]=Math.random()*2-1}return u}init(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.enabled?this.volume:0,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.compressor=this.ctx.createDynamicsCompressor(),this.compressor.threshold.setValueAtTime(-14,this.ctx.currentTime),this.compressor.knee.setValueAtTime(12,this.ctx.currentTime),this.compressor.ratio.setValueAtTime(4,this.ctx.currentTime),this.compressor.attack.setValueAtTime(.003,this.ctx.currentTime),this.compressor.release.setValueAtTime(.2,this.ctx.currentTime),this.compressor.connect(this.masterGain),this.dryBus=this.ctx.createGain(),this.dryBus.gain.setValueAtTime(1,this.ctx.currentTime),this.dryBus.connect(this.compressor),this.reverbNode=this.ctx.createConvolver(),this.reverbNode.buffer=this._buildHallImpulse(this.ctx,2.6,2.35),this.reverbSend=this.ctx.createGain(),this.reverbSend.gain.setValueAtTime(.45,this.ctx.currentTime),this.reverbSend.connect(this.reverbNode),this.reverbNode.connect(this.compressor),this.noiseBuffer=this._buildNoiseBuffer(this.ctx,2.6)}this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.masterGain&&this.masterGain.gain.setValueAtTime(this.enabled?this.volume:0,this.ctx.currentTime)}configure(t={}){typeof t.volume=="number"&&(this.volume=Math.max(0,Math.min(1,t.volume))),typeof t.enabled=="boolean"&&(this.enabled=t.enabled),typeof t.soundPreset=="string"&&(this.soundPreset=t.soundPreset),typeof t.touchSoundEnabled=="boolean"&&(this.touchSoundEnabled=t.touchSoundEnabled),typeof t.touchVolume=="number"&&(this.touchVolume=Math.max(0,Math.min(1,t.touchVolume))),typeof t.countdownSoundEnabled=="boolean"&&(this.countdownSoundEnabled=t.countdownSoundEnabled),typeof t.countdownVolume=="number"&&(this.countdownVolume=Math.max(0,Math.min(1,t.countdownVolume))),typeof t.fanfareSoundEnabled=="boolean"&&(this.fanfareSoundEnabled=t.fanfareSoundEnabled),typeof t.fanfareVolume=="number"&&(this.fanfareVolume=Math.max(0,Math.min(1,t.fanfareVolume))),typeof t.bgAudioEnabled=="boolean"&&(this.bgAudioEnabled=t.bgAudioEnabled),typeof t.bgAudioVolume=="number"&&(this.bgAudioVolume=Math.max(0,Math.min(1,t.bgAudioVolume))),t.customBgAudioUrl!==void 0&&t.customBgAudioUrl!==this.customBgAudioUrl&&(this.stopBgMusic(),this.customBgAudioUrl=t.customBgAudioUrl),t.customFanfareAudioUrl!==void 0&&t.customFanfareAudioUrl!==this.customFanfareAudioUrl&&(this.stopFanfare(),this.customFanfareAudioUrl=t.customFanfareAudioUrl),this.ctx&&this.masterGain&&this.masterGain.gain.setValueAtTime(this.enabled?this.volume:0,this.ctx.currentTime),this.bgAudioEl&&(this.bgAudioEl.volume=this.enabled&&this.bgAudioEnabled?Math.max(0,Math.min(1,this.volume*this.bgAudioVolume)):0,(!this.enabled||!this.bgAudioEnabled)&&this.bgAudioEl.pause()),this.fanfareAudioEl&&(this.fanfareAudioEl.volume=this.enabled&&this.fanfareSoundEnabled?Math.max(0,Math.min(1,this.volume*this.fanfareVolume)):0)}getDestination(){return this.dryBus||this.masterGain||(this.ctx?this.ctx.destination:null)}_routeWithReverb(t,i,s=.35){if(t.connect(i),this.reverbSend&&s>0){const l=this.ctx.createGain();l.gain.setValueAtTime(s,this.ctx.currentTime),t.connect(l),l.connect(this.reverbSend)}}_triggerDrumImpact(t,i,{startFreq:s=145,endFreq:l=32,dur:u=.65,subGain:h=.9,noiseFreq:d=340,noiseGain:p=.35,reverbAmt:g=.45,dryTarget:v=null}={}){const m=v||this.getDestination();if(!m)return;const _=this.ctx.createOscillator(),S=this.ctx.createGain();_.type="sine",_.frequency.setValueAtTime(s,t),_.frequency.exponentialRampToValueAtTime(l,t+u*.78),S.gain.setValueAtTime(.001,t),S.gain.linearRampToValueAtTime(h*i,t+.012),S.gain.exponentialRampToValueAtTime(.002,t+u),_.connect(S),this._routeWithReverb(S,m,g),_.start(t),_.stop(t+u+.05);const E=this.ctx.createOscillator(),b=this.ctx.createGain();if(E.type="triangle",E.frequency.setValueAtTime(s*1.65,t),E.frequency.exponentialRampToValueAtTime(l*1.8,t+.16),b.gain.setValueAtTime(.45*h*i,t),b.gain.exponentialRampToValueAtTime(.002,t+.22),E.connect(b),b.connect(m),E.start(t),E.stop(t+.24),this.noiseBuffer&&p>0){const M=this.ctx.createBufferSource();M.buffer=this.noiseBuffer;const x=this.ctx.createBiquadFilter();x.type="bandpass",x.frequency.setValueAtTime(d,t),x.Q.setValueAtTime(1.4,t);const w=this.ctx.createGain();w.gain.setValueAtTime(p*i,t),w.gain.exponentialRampToValueAtTime(.002,t+.18),M.connect(x),x.connect(w),this._routeWithReverb(w,m,g*1.2),M.start(t),M.stop(t+.2)}}_triggerBrassVoice(t,i,s,l,u,{pan:h=0,detuneSpread:d=8,filterStart:p=2800,filterEnd:g=1200,attack:v=.06,reverbAmt:m=.5,wave:_="sawtooth"}={}){const S=this.ctx.createBiquadFilter();S.type="lowpass",S.Q.setValueAtTime(1.8,s),S.frequency.setValueAtTime(p,s),S.frequency.exponentialRampToValueAtTime(g,s+Math.min(l*.7,.9));const E=this.ctx.createGain();E.gain.setValueAtTime(8e-4,s),E.gain.linearRampToValueAtTime(u,s+v),E.gain.setValueAtTime(u*.88,s+Math.max(v+.02,l*.45)),E.gain.exponentialRampToValueAtTime(.001,s+l);let b=E;if(typeof this.ctx.createStereoPanner=="function"&&h!==0){const x=this.ctx.createStereoPanner();x.pan.setValueAtTime(h,s),E.connect(x),b=x}S.connect(E),this._routeWithReverb(b,t,m),(d>0?[-d,0,d]:[0]).forEach(x=>{const w=this.ctx.createOscillator();w.type=_,w.frequency.setValueAtTime(i,s),x!==0&&w.detune.setValueAtTime(x,s),w.connect(S),w.start(s),w.stop(s+l+.05)})}playTouchChime(){if(!(!this.enabled||!this.touchSoundEnabled)&&(this.init(),!!this.ctx))try{const t=this.ctx.currentTime,i=this.touchVolume,s=this.getDestination(),l=this.ctx.createOscillator(),u=this.ctx.createGain();this.soundPreset==="tech"?(l.type="triangle",l.frequency.setValueAtTime(1174.66,t),l.frequency.exponentialRampToValueAtTime(1760,t+.14),u.gain.setValueAtTime(.22*i,t),u.gain.exponentialRampToValueAtTime(.004,t+.28),l.connect(u),this._routeWithReverb(u,s,.3),l.start(t),l.stop(t+.29)):this.soundPreset==="minimal"?(l.type="sine",l.frequency.setValueAtTime(783.99,t),l.frequency.exponentialRampToValueAtTime(987.77,t+.18),u.gain.setValueAtTime(.16*i,t),u.gain.exponentialRampToValueAtTime(.004,t+.34),l.connect(u),this._routeWithReverb(u,s,.2),l.start(t),l.stop(t+.35)):(l.type="sine",l.frequency.setValueAtTime(987.77,t),l.frequency.exponentialRampToValueAtTime(1318.51,t+.16),u.gain.setValueAtTime(.24*i,t),u.gain.exponentialRampToValueAtTime(.004,t+.4),l.connect(u),this._routeWithReverb(u,s,.35),l.start(t),l.stop(t+.42))}catch(t){console.warn("Audio error:",t)}}playCountdownBeep(t){if(!(!this.enabled||!this.countdownSoundEnabled)&&(this.init(),!!this.ctx))try{const i=this.ctx.currentTime,s=this.countdownVolume,l=this.getDestination(),u=Math.max(1,Math.min(7,Number(t)||1)),h=1+(5-Math.min(5,u))*.12;if(this.soundPreset==="minimal"){const g=this.ctx.createOscillator(),v=this.ctx.createGain();g.type="sine";const m=u===1?880:523.25+(5-Math.min(5,u))*55;g.frequency.setValueAtTime(m,i),v.gain.setValueAtTime(.24*s,i),v.gain.exponentialRampToValueAtTime(.003,i+.5),g.connect(v),this._routeWithReverb(v,l,.3),g.start(i),g.stop(i+.52);return}this._triggerDrumImpact(i,s,{startFreq:150-(5-Math.min(5,u))*8,endFreq:30,dur:u===1?.95:.72,subGain:.92*h,noiseFreq:this.soundPreset==="tech"?520:320,noiseGain:.38*s,reverbAmt:.55});const d=u===1?523.25:261.63+(5-Math.min(5,u))*32;if((u===1?[d*.5,d,d*1.5,d*2]:[d,d*1.5]).forEach((g,v)=>{this._triggerBrassVoice(l,g,i,u===1?.92:.68,.14*s,{pan:v%2===0?-.28:.28,detuneSpread:6,filterStart:this.soundPreset==="tech"?3600:2600,filterEnd:950,attack:.02,reverbAmt:.55,wave:this.soundPreset==="tech"?"sawtooth":"triangle"})}),u<=2&&this.noiseBuffer){const g=this.ctx.createBufferSource();g.buffer=this.noiseBuffer;const v=this.ctx.createBiquadFilter();v.type="bandpass",v.Q.setValueAtTime(2.5,i),v.frequency.setValueAtTime(u===2?400:800,i),v.frequency.exponentialRampToValueAtTime(u===2?1400:3800,i+.85);const m=this.ctx.createGain();m.gain.setValueAtTime(.001,i),m.gain.linearRampToValueAtTime(.18*s,i+.78),m.gain.exponentialRampToValueAtTime(.002,i+.92),g.connect(v),v.connect(m),this._routeWithReverb(m,l,.6),g.start(i),g.stop(i+.95)}}catch(i){console.warn("Audio error:",i)}}playSynthFanfare(){if(this.init(),!!this.ctx)try{this.stopFanfare();const t=this.ctx.currentTime,i=this.fanfareVolume,s=this.ctx.createGain();if(s.gain.setValueAtTime(1,t),s.connect(this.dryBus),this.activeFanfareBus=s,this.soundPreset==="minimal"){[261.63,329.63,392,523.25,659.25].forEach((g,v)=>{this._triggerBrassVoice(s,g,t+v*.08,2.4,.14*i,{pan:(v-2)*.2,detuneSpread:4,filterStart:1800,filterEnd:900,attack:.08,reverbAmt:.45,wave:"sine"})});return}const l=this.soundPreset==="tech";if(this._triggerDrumImpact(t,i,{startFreq:110,endFreq:26,dur:1.45,subGain:1,noiseFreq:420,noiseGain:.45,reverbAmt:.65,dryTarget:s}),this.noiseBuffer){const p=this.ctx.createBufferSource();p.buffer=this.noiseBuffer;const g=this.ctx.createBiquadFilter();g.type="highpass",g.frequency.setValueAtTime(1400,t),g.frequency.exponentialRampToValueAtTime(4800,t+2.2);const v=this.ctx.createGain();v.gain.setValueAtTime(.001,t),v.gain.linearRampToValueAtTime(.32*i,t+.03),v.gain.exponentialRampToValueAtTime(.002,t+2.5),p.connect(g),g.connect(v),this._routeWithReverb(v,s,.75),p.start(t),p.stop(t+2.55)}[{freq:392,start:0,dur:.28,gain:.16,pan:-.35},{freq:523.25,start:.18,dur:.28,gain:.17,pan:.35},{freq:659.25,start:.36,dur:.32,gain:.18,pan:-.25},{freq:783.99,start:.56,dur:1.55,gain:.2,pan:.25},{freq:1046.5,start:.85,dur:3.6,gain:.17,pan:0}].forEach(p=>{this._triggerBrassVoice(s,p.freq,t+p.start,p.dur,p.gain*i,{pan:p.pan,detuneSpread:8,filterStart:l?4200:3400,filterEnd:1500,attack:.04,reverbAmt:.6,wave:"sawtooth"})}),[{freq:65.41,start:0,dur:4.8,gain:.22,pan:0,wave:"sawtooth",fStart:900,fEnd:420},{freq:98,start:.18,dur:4.6,gain:.16,pan:-.2,wave:"sawtooth",fStart:1100,fEnd:520},{freq:130.81,start:.32,dur:4.6,gain:.18,pan:.2,wave:"sawtooth",fStart:1400,fEnd:680},{freq:261.63,start:.45,dur:4.5,gain:.14,pan:-.45,wave:"sawtooth",fStart:2200,fEnd:1100},{freq:329.63,start:.5,dur:4.4,gain:.13,pan:.45,wave:"sawtooth",fStart:2200,fEnd:1100},{freq:392,start:.55,dur:4.3,gain:.13,pan:-.3,wave:"sawtooth",fStart:2400,fEnd:1200},{freq:523.25,start:.62,dur:4.2,gain:.14,pan:.3,wave:"sawtooth",fStart:2600,fEnd:1300}].forEach(p=>{this._triggerBrassVoice(s,p.freq,t+p.start,p.dur,p.gain*i,{pan:p.pan,detuneSpread:9,filterStart:p.fStart,filterEnd:p.fEnd,attack:.18,reverbAmt:.65,wave:p.wave})}),[{freq:1046.5,delay:.45,pan:-.5},{freq:1318.51,delay:.65,pan:.5},{freq:1567.98,delay:.85,pan:-.35},{freq:2093,delay:1.05,pan:.35}].forEach(p=>{const g=this.ctx.createOscillator(),v=this.ctx.createGain();if(g.type="sine",g.frequency.setValueAtTime(p.freq,t+p.delay),v.gain.setValueAtTime(.001,t+p.delay),v.gain.linearRampToValueAtTime(.11*i,t+p.delay+.02),v.gain.exponentialRampToValueAtTime(.001,t+p.delay+2.4),g.connect(v),typeof this.ctx.createStereoPanner=="function"){const m=this.ctx.createStereoPanner();m.pan.setValueAtTime(p.pan,t+p.delay),v.connect(m),this._routeWithReverb(m,s,.75)}else this._routeWithReverb(v,s,.75);g.start(t+p.delay),g.stop(t+p.delay+2.45)})}catch(t){console.warn("Audio error:",t)}}playFanfare(){if(!(!this.enabled||!this.fanfareSoundEnabled)){if(this.customFanfareAudioUrl)try{this.stopFanfare();const t=new Audio(this.customFanfareAudioUrl);t.volume=Math.max(0,Math.min(1,this.volume*this.fanfareVolume)),this.fanfareAudioEl=t,t.play().catch(()=>{this.playSynthFanfare()});return}catch{this.playSynthFanfare();return}this.playSynthFanfare()}}stopFanfare(){if(this.fanfareAudioEl&&(this.fanfareAudioEl.pause(),this.fanfareAudioEl.currentTime=0,this.fanfareAudioEl=null),this.activeFanfareBus&&this.ctx){const t=this.activeFanfareBus;this.activeFanfareBus=null;try{const i=this.ctx.currentTime;t.gain.cancelScheduledValues(i),t.gain.setValueAtTime(t.gain.value,i),t.gain.exponentialRampToValueAtTime(1e-4,i+.14),setTimeout(()=>{try{t.disconnect()}catch{}},180)}catch{}}}syncBgMusic(t){if(this.bgDesiredPlaying=!!t,!t||!this.enabled||!this.bgAudioEnabled||!this.customBgAudioUrl){this.stopBgMusic();return}if(!this.bgAudioEl||this.bgAudioEl.src!==this.customBgAudioUrl){this.stopBgMusic();const i=new Audio(this.customBgAudioUrl);i.loop=!0,i.volume=Math.max(0,Math.min(1,this.volume*this.bgAudioVolume)),this.bgAudioEl=i}else this.bgAudioEl.volume=Math.max(0,Math.min(1,this.volume*this.bgAudioVolume));this.bgAudioEl.paused&&this.bgAudioEl.play().catch(()=>{})}unlockBgMusicIfNeeded(){this.bgDesiredPlaying&&this.bgAudioEl&&this.bgAudioEl.paused&&this.bgAudioEl.play().catch(()=>{})}stopBgMusic(){this.bgAudioEl&&(this.bgAudioEl.pause(),this.bgAudioEl.currentTime=0)}}const iw=new WR,jR="cham_tay_media_db",ZR=1,vs="media_blobs";function Mm(){return new Promise((o,t)=>{if(typeof indexedDB>"u"){t(new Error("IndexedDB is not supported"));return}const i=indexedDB.open(jR,ZR);i.onupgradeneeded=()=>{const s=i.result;s.objectStoreNames.contains(vs)||s.createObjectStore(vs)},i.onsuccess=()=>o(i.result),i.onerror=()=>t(i.error)})}async function aw(o,t){const i=await Mm();return new Promise((s,l)=>{const u=i.transaction(vs,"readwrite");u.objectStore(vs).put(t,o),u.oncomplete=()=>s(),u.onerror=()=>l(u.error)})}async function El(o){const t=await Mm();return new Promise((i,s)=>{const u=t.transaction(vs,"readonly").objectStore(vs).get(o);u.onsuccess=()=>i(u.result||null),u.onerror=()=>s(u.error)})}async function sw(o){const t=await Mm();return new Promise((i,s)=>{const l=t.transaction(vs,"readwrite");l.objectStore(vs).delete(o),l.oncomplete=()=>i(),l.onerror=()=>s(l.error)})}async function rw(){try{const[o,t,i,s,l]=await Promise.all([El("customHandImage"),El("customBgVideo"),El("customActivationVideo"),El("customBgAudio"),El("customFanfareAudio")]);return{customHandImageUrl:o?URL.createObjectURL(o):null,customBgVideoUrl:t?URL.createObjectURL(t):null,customActivationVideoUrl:i?URL.createObjectURL(i):null,customBgAudioUrl:s?URL.createObjectURL(s):null,customFanfareAudioUrl:l?URL.createObjectURL(l):null}}catch{return{customHandImageUrl:null,customBgVideoUrl:null,customActivationVideoUrl:null,customBgAudioUrl:null,customFanfareAudioUrl:null}}}export{PE as A,BE as B,F_ as P,KR as R,nw as S,iw as a,JR as b,Bl as c,sw as d,qR as e,ew as f,Kp as g,$R as h,tw as i,oe as j,QR as k,rw as l,Ix as m,hi as r,aw as s};
