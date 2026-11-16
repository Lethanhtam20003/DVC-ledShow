(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function Wy(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Ed={exports:{}},ml={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C_;function vE(){if(C_)return ml;C_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return ml.Fragment=e,ml.jsx=i,ml.jsxs=i,ml}var R_;function _E(){return R_||(R_=1,Ed.exports=vE()),Ed.exports}var oe=_E(),Td={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w_;function yE(){if(w_)return le;w_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),_=Symbol.for("react.view_transition"),S=Symbol.iterator;function E(L){return L===null||typeof L!="object"?null:(L=S&&L[S]||L["@@iterator"],typeof L=="function"?L:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,x={};function N(L,Z,gt){this.props=L,this.context=Z,this.refs=x,this.updater=gt||T}N.prototype.isReactComponent={},N.prototype.setState=function(L,Z){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,Z,"setState")},N.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function U(){}U.prototype=N.prototype;function A(L,Z,gt){this.props=L,this.context=Z,this.refs=x,this.updater=gt||T}var F=A.prototype=new U;F.constructor=A,M(F,N.prototype),F.isPureReactComponent=!0;var z=Array.isArray;function P(){}var B={H:null,A:null,T:null,S:null},w=Object.prototype.hasOwnProperty;function R(L,Z,gt){var ct=gt.ref;return{$$typeof:o,type:L,key:Z,ref:ct!==void 0?ct:null,props:gt}}function H(L,Z){return R(L.type,Z,L.props)}function tt(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function st(L){var Z={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(gt){return Z[gt]})}var ut=/\/+/g;function mt(L,Z){return typeof L=="object"&&L!==null&&L.key!=null?st(""+L.key):Z.toString(36)}function k(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(P,P):(L.status="pending",L.then(function(Z){L.status==="pending"&&(L.status="fulfilled",L.value=Z)},function(Z){L.status==="pending"&&(L.status="rejected",L.reason=Z)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function lt(L,Z,gt,ct,bt){var Gt=typeof L;(Gt==="undefined"||Gt==="boolean")&&(L=null);var Dt=!1;if(L===null)Dt=!0;else switch(Gt){case"bigint":case"string":case"number":Dt=!0;break;case"object":switch(L.$$typeof){case o:case e:Dt=!0;break;case v:return Dt=L._init,lt(Dt(L._payload),Z,gt,ct,bt)}}if(Dt)return bt=bt(L),Dt=ct===""?"."+mt(L,0):ct,z(bt)?(gt="",Dt!=null&&(gt=Dt.replace(ut,"$&/")+"/"),lt(bt,Z,gt,"",function($t){return $t})):bt!=null&&(tt(bt)&&(bt=H(bt,gt+(bt.key==null||L&&L.key===bt.key?"":(""+bt.key).replace(ut,"$&/")+"/")+Dt)),Z.push(bt)),1;Dt=0;var vt=ct===""?".":ct+":";if(z(L))for(var xt=0;xt<L.length;xt++)ct=L[xt],Gt=vt+mt(ct,xt),Dt+=lt(ct,Z,gt,Gt,bt);else if(xt=E(L),typeof xt=="function")for(L=xt.call(L),xt=0;!(ct=L.next()).done;)ct=ct.value,Gt=vt+mt(ct,xt++),Dt+=lt(ct,Z,gt,Gt,bt);else if(Gt==="object"){if(typeof L.then=="function")return lt(k(L),Z,gt,ct,bt);throw Z=String(L),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return Dt}function K(L,Z,gt){if(L==null)return L;var ct=[],bt=0;return lt(L,ct,"","",function(Gt){return Z.call(gt,Gt,bt++)}),ct}function yt(L){if(L._status===-1){var Z=L._result,gt=Z();gt.then(function(ct){(L._status===0||L._status===-1)&&(L._status=1,L._result=ct,gt.status===void 0&&(gt.status="fulfilled",gt.value=ct))},function(ct){(L._status===0||L._status===-1)&&(L._status=2,L._result=ct,gt.status===void 0&&(gt.status="rejected",gt.reason=ct))}),L._status===-1&&(L._status=0,L._result=gt)}if(L._status===1)return L._result.default;throw L._result}var Mt=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function Ft(L){var Z=B.T,gt={};gt.types=Z!==null?Z.types:null,B.T=gt;try{var ct=L(),bt=B.S;bt!==null&&bt(gt,ct),typeof ct=="object"&&ct!==null&&typeof ct.then=="function"&&ct.then(P,Mt)}catch(Gt){Mt(Gt)}finally{Z!==null&&gt.types!==null&&(Z.types=gt.types),B.T=Z}}function Jt(L){var Z=B.T;if(Z!==null){var gt=Z.types;gt===null?Z.types=[L]:gt.indexOf(L)===-1&&gt.push(L)}else Ft(Jt.bind(null,L))}var ye={map:K,forEach:function(L,Z,gt){K(L,function(){Z.apply(this,arguments)},gt)},count:function(L){var Z=0;return K(L,function(){Z++}),Z},toArray:function(L){return K(L,function(Z){return Z})||[]},only:function(L){if(!tt(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return le.Activity=m,le.Children=ye,le.Component=N,le.Fragment=i,le.Profiler=l,le.PureComponent=A,le.StrictMode=s,le.Suspense=p,le.ViewTransition=_,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,le.__COMPILER_RUNTIME={__proto__:null,c:function(L){return B.H.useMemoCache(L)}},le.addTransitionType=Jt,le.cache=function(L){return function(){return L.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(L,Z,gt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var ct=M({},L.props),bt=L.key;if(Z!=null)for(Gt in Z.key!==void 0&&(bt=""+Z.key),Z)!w.call(Z,Gt)||Gt==="key"||Gt==="__self"||Gt==="__source"||Gt==="ref"&&Z.ref===void 0||(ct[Gt]=Z[Gt]);var Gt=arguments.length-2;if(Gt===1)ct.children=gt;else if(1<Gt){for(var Dt=Array(Gt),vt=0;vt<Gt;vt++)Dt[vt]=arguments[vt+2];ct.children=Dt}return R(L.type,bt,ct)},le.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},le.createElement=function(L,Z,gt){var ct,bt={},Gt=null;if(Z!=null)for(ct in Z.key!==void 0&&(Gt=""+Z.key),Z)w.call(Z,ct)&&ct!=="key"&&ct!=="__self"&&ct!=="__source"&&(bt[ct]=Z[ct]);var Dt=arguments.length-2;if(Dt===1)bt.children=gt;else if(1<Dt){for(var vt=Array(Dt),xt=0;xt<Dt;xt++)vt[xt]=arguments[xt+2];bt.children=vt}if(L&&L.defaultProps)for(ct in Dt=L.defaultProps,Dt)bt[ct]===void 0&&(bt[ct]=Dt[ct]);return R(L,Gt,bt)},le.createRef=function(){return{current:null}},le.forwardRef=function(L){return{$$typeof:d,render:L}},le.isValidElement=tt,le.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:yt}},le.memo=function(L,Z){return{$$typeof:g,type:L,compare:Z===void 0?null:Z}},le.startTransition=Ft,le.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},le.use=function(L){return B.H.use(L)},le.useActionState=function(L,Z,gt){return B.H.useActionState(L,Z,gt)},le.useCallback=function(L,Z){return B.H.useCallback(L,Z)},le.useContext=function(L){return B.H.useContext(L)},le.useDebugValue=function(){},le.useDeferredValue=function(L,Z){return B.H.useDeferredValue(L,Z)},le.useEffect=function(L,Z){return B.H.useEffect(L,Z)},le.useEffectEvent=function(L){return B.H.useEffectEvent(L)},le.useId=function(){return B.H.useId()},le.useImperativeHandle=function(L,Z,gt){return B.H.useImperativeHandle(L,Z,gt)},le.useInsertionEffect=function(L,Z){return B.H.useInsertionEffect(L,Z)},le.useLayoutEffect=function(L,Z){return B.H.useLayoutEffect(L,Z)},le.useMemo=function(L,Z){return B.H.useMemo(L,Z)},le.useOptimistic=function(L,Z){return B.H.useOptimistic(L,Z)},le.useReducer=function(L,Z,gt){return B.H.useReducer(L,Z,gt)},le.useRef=function(L){return B.H.useRef(L)},le.useState=function(L){return B.H.useState(L)},le.useSyncExternalStore=function(L,Z,gt){return B.H.useSyncExternalStore(L,Z,gt)},le.useTransition=function(){return B.H.useTransition()},le.version="19.3.1",le}var D_;function Qp(){return D_||(D_=1,Td.exports=yE()),Td.exports}var hi=Qp();const qR=Wy(hi);var bd={exports:{}},gl={},Ad={exports:{}},Cd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_;function xE(){return N_||(N_=1,(function(o){function e(k,lt){var K=k.length;k.push(lt);t:for(;0<K;){var yt=K-1>>>1,Mt=k[yt];if(0<l(Mt,lt))k[yt]=lt,k[K]=Mt,K=yt;else break t}}function i(k){return k.length===0?null:k[0]}function s(k){if(k.length===0)return null;var lt=k[0],K=k.pop();if(K!==lt){k[0]=K;t:for(var yt=0,Mt=k.length,Ft=Mt>>>1;yt<Ft;){var Jt=2*(yt+1)-1,ye=k[Jt],L=Jt+1,Z=k[L];if(0>l(ye,K))L<Mt&&0>l(Z,ye)?(k[yt]=Z,k[L]=K,yt=L):(k[yt]=ye,k[Jt]=K,yt=Jt);else if(L<Mt&&0>l(Z,K))k[yt]=Z,k[L]=K,yt=L;else break t}}return lt}function l(k,lt){var K=k.sortIndex-lt.sortIndex;return K!==0?K:k.id-lt.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],g=[],v=1,m=null,_=3,S=!1,E=!1,T=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function A(k){for(var lt=i(g);lt!==null;){if(lt.callback===null)s(g);else if(lt.startTime<=k)s(g),lt.sortIndex=lt.expirationTime,e(p,lt);else break;lt=i(g)}}function F(k){if(T=!1,A(k),!E)if(i(p)!==null)E=!0,z||(z=!0,tt());else{var lt=i(g);lt!==null&&mt(F,lt.startTime-k)}}var z=!1,P=-1,B=5,w=-1;function R(){return M?!0:!(o.unstable_now()-w<B)}function H(){if(M=!1,z){var k=o.unstable_now();w=k;var lt=!0;try{t:{E=!1,T&&(T=!1,N(P),P=-1),S=!0;var K=_;try{e:{for(A(k),m=i(p);m!==null&&!(m.expirationTime>k&&R());){var yt=m.callback;if(typeof yt=="function"){m.callback=null,_=m.priorityLevel;var Mt=yt(m.expirationTime<=k);if(k=o.unstable_now(),typeof Mt=="function"){m.callback=Mt,A(k),lt=!0;break e}m===i(p)&&s(p),A(k)}else s(p);m=i(p)}if(m!==null)lt=!0;else{var Ft=i(g);Ft!==null&&mt(F,Ft.startTime-k),lt=!1}}break t}finally{m=null,_=K,S=!1}lt=void 0}}finally{lt?tt():z=!1}}}var tt;if(typeof U=="function")tt=function(){U(H)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,ut=st.port2;st.port1.onmessage=H,tt=function(){ut.postMessage(null)}}else tt=function(){x(H,0)};function mt(k,lt){P=x(function(){k(o.unstable_now())},lt)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(k){k.callback=null},o.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<k?Math.floor(1e3/k):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(k){switch(_){case 1:case 2:case 3:var lt=3;break;default:lt=_}var K=_;_=lt;try{return k()}finally{_=K}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(k,lt){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var K=_;_=k;try{return lt()}finally{_=K}},o.unstable_scheduleCallback=function(k,lt,K){var yt=o.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?yt+K:yt):K=yt,k){case 1:var Mt=-1;break;case 2:Mt=250;break;case 5:Mt=1073741823;break;case 4:Mt=1e4;break;default:Mt=5e3}return Mt=K+Mt,k={id:v++,callback:lt,priorityLevel:k,startTime:K,expirationTime:Mt,sortIndex:-1},K>yt?(k.sortIndex=K,e(g,k),i(p)===null&&k===i(g)&&(T?(N(P),P=-1):T=!0,mt(F,K-yt))):(k.sortIndex=Mt,e(p,k),E||S||(E=!0,z||(z=!0,tt()))),k},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(k){var lt=_;return function(){var K=_;_=lt;try{return k.apply(this,arguments)}finally{_=K}}}})(Cd)),Cd}var U_;function SE(){return U_||(U_=1,Ad.exports=xE()),Ad.exports}var Rd={exports:{}},Nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L_;function ME(){if(L_)return Nn;L_=1;var o=Qp();function e(v){var m="https://react.dev/errors/"+v;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)m+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+v+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),u=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(v,m,_){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:S===h?h:""+S,children:v,containerInfo:m,implementation:_}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(v,m){if(v==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Nn.browser=function(v){return{$$typeof:u,_reason:v}},Nn.createPortal=function(v,m){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return d(v,m,null,_)},Nn.flushSync=function(v){var m=p.T,_=s.p;try{if(p.T=null,s.p=2,v)return v()}finally{p.T=m,s.p=_,s.d.f()}},Nn.preconnect=function(v,m){typeof v=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(v,m))},Nn.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},Nn.preinit=function(v,m){if(typeof v=="string"&&m&&typeof m.as=="string"){var _=m.as,S=g(_,m.crossOrigin),E=typeof m.integrity=="string"?m.integrity:void 0,T=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;_==="style"?s.d.S(v,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:S,integrity:E,fetchPriority:T}):_==="script"&&s.d.X(v,{crossOrigin:S,integrity:E,fetchPriority:T,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Nn.preinitModule=function(v,m){if(typeof v=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var _=g(m.as,m.crossOrigin);s.d.M(v,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}}else m==null&&s.d.M(v)},Nn.preload=function(v,m){if(typeof v=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var _=m.as,S=g(_,m.crossOrigin);s.d.L(v,_,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Nn.preloadModule=function(v,m){if(typeof v=="string")if(m){var _=g(m.as,m.crossOrigin);s.d.m(v,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}else s.d.m(v)},Nn.requestFormReset=function(v){s.d.r(v)},Nn.unstable_batchedUpdates=function(v,m){return v(m)},Nn.useFormState=function(v,m,_){return p.H.useFormState(v,m,_)},Nn.useFormStatus=function(){return p.H.useHostTransitionStatus()},Nn.version="19.3.1",Nn}var O_;function EE(){if(O_)return Rd.exports;O_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Rd.exports=ME(),Rd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P_;function TE(){if(P_)return gl;P_=1;var o=SE(),e=Qp(),i=EE();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(u(t)!==t)throw Error(s(188))}function g(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return p(c),t;if(f===r)return p(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var y=!1,b=c.child;b;){if(b===a){y=!0,a=c,r=f;break}if(b===r){y=!0,r=c,a=f;break}b=b.sibling}if(!y){for(b=f.child;b;){if(b===a){y=!0,a=f,r=c;break}if(b===r){y=!0,r=f,a=c;break}b=b.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}function m(t,n,a,r,c,f){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,r,c,f)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&m(t.child,n,a,r,c,f))return!0;t=t.sibling}return!1}function _(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function S(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function E(t){var n=[null,null],a=_(t);return a===null||T(n,t,a.child,{foundSelf:!1}),n}function T(t,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&T(t,n,a.child,r))return!0;a=a.sibling}return!1}function M(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var x=null,N=null;function U(t,n,a){return t===a?!0:t===n?(x=t,!0):!1}function A(t,n,a){return t===a?(N=t,!1):t===n?(N!==null&&(x=t),!0):!1}function F(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function z(t,n,a){for(var r=0,c=t;c;c=a(c))r++;c=0;for(var f=n;f;f=a(f))c++;for(;0<r-c;)t=a(t),r--;for(;0<c-r;)n=a(n),c--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var P=Object.assign,B=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),tt=Symbol.for("react.strict_mode"),st=Symbol.for("react.profiler"),ut=Symbol.for("react.consumer"),mt=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),lt=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),yt=Symbol.for("react.memo"),Mt=Symbol.for("react.lazy"),Ft=Symbol.for("react.activity"),Jt=Symbol.for("react.legacy_hidden"),ye=Symbol.for("react.memo_cache_sentinel"),L=Symbol.for("react.view_transition"),Z=Symbol.for("react.recoverable"),gt=Symbol.iterator;function ct(t){return t===null||typeof t!="object"?null:(t=gt&&t[gt]||t["@@iterator"],typeof t=="function"?t:null)}var bt=Symbol.for("react.client.reference");function Gt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===bt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case H:return"Fragment";case st:return"Profiler";case tt:return"StrictMode";case lt:return"Suspense";case K:return"SuspenseList";case Ft:return"Activity";case L:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case R:return"Portal";case mt:return t.displayName||"Context";case ut:return(t._context.displayName||"Context")+".Consumer";case k:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case yt:return n=t.displayName||null,n!==null?n:Gt(t.type)||"Memo";case Mt:n=t._payload,t=t._init;try{return Gt(t(n))}catch{}}return null}var Dt=Array.isArray,vt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,xt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$t={pending:!1,data:null,method:null,action:null},G=[],Je=-1;function ae(t){return{current:t}}function Zt(t){0>Je||(t.current=G[Je],G[Je]=null,Je--)}function At(t,n){Je++,G[Je]=t.current,t.current=n}var me=ae(null),Ut=ae(null),O=ae(null),C=ae(null);function nt(t,n){switch(At(O,n),At(Ut,t),At(me,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?zv(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=zv(n),t=Iv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Zt(me),At(me,t)}function it(){Zt(me),Zt(Ut),Zt(O)}function St(t){var n=t.memoizedState;n!==null&&(Hr._currentValue=n.memoizedState,At(C,t)),n=me.current;var a=Iv(n,t.type);n!==a&&(At(Ut,t),At(me,a))}function ht(t){Ut.current===t&&(Zt(me),Zt(Ut)),C.current===t&&(Zt(C),Hr._currentValue=$t)}var qt,Ct;function Yt(t){if(qt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);qt=n&&n[1]||"",Ct=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qt+t+Ct}var Kt=!1;function Et(t,n){if(!t||Kt)return"";Kt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var pt=function(){throw Error()};if(Object.defineProperty(pt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(pt,[])}catch(Nt){var Y=Nt}Reflect.construct(t,[],pt)}else{try{pt.call()}catch(Nt){Y=Nt}pt=!1;try{var et=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),pt=!0,new t}finally{pt&&(et!==void 0?Object.defineProperty(t.prototype,"props",et):delete t.prototype.props)}}}else{try{throw Error()}catch(Nt){Y=Nt}(pt=t())&&typeof pt.catch=="function"&&pt.catch(function(){})}}catch(Nt){if(Nt&&Y&&typeof Nt.stack=="string")return[Nt.stack,Y.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),y=f[0],b=f[1];if(y&&b){var I=y.split(`
`),j=b.split(`
`);for(c=r=0;r<I.length&&!I[r].includes("DetermineComponentFrameRoot");)r++;for(;c<j.length&&!j[c].includes("DetermineComponentFrameRoot");)c++;if(r===I.length||c===j.length)for(r=I.length-1,c=j.length-1;1<=r&&0<=c&&I[r]!==j[c];)c--;for(;1<=r&&0<=c;r--,c--)if(I[r]!==j[c]){if(r!==1||c!==1)do if(r--,c--,0>c||I[r]!==j[c]){var at=`
`+I[r].replace(" at new "," at ");return t.displayName&&at.includes("<anonymous>")&&(at=at.replace("<anonymous>",t.displayName)),at}while(1<=r&&0<=c);break}}}finally{Kt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Yt(a):""}function Bt(t,n){switch(t.tag){case 26:case 27:case 5:return Yt(t.type);case 16:return Yt("Lazy");case 13:return t.child!==n&&n!==null?Yt("Suspense Fallback"):Yt("Suspense");case 19:return Yt("SuspenseList");case 0:case 15:return Et(t.type,!1);case 11:return Et(t.type.render,!1);case 1:return Et(t.type,!0);case 31:return Yt("Activity");case 30:return Yt("ViewTransition");default:return""}}function ne(t){try{var n="",a=null;do n+=Bt(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var se=Object.prototype.hasOwnProperty,Vt=o.unstable_scheduleCallback,xe=o.unstable_cancelCallback,fe=o.unstable_shouldYield,Fe=o.unstable_requestPaint,q=o.unstable_now,zt=o.unstable_getCurrentPriorityLevel,ft=o.unstable_ImmediatePriority,_t=o.unstable_UserBlockingPriority,Pt=o.unstable_NormalPriority,It=o.unstable_LowPriority,ue=o.unstable_IdlePriority,$e=o.log,vn=o.unstable_setDisableYieldValue,Ce=null,Ke=null;function _n(t){if(typeof $e=="function"&&vn(t),Ke&&typeof Ke.setStrictMode=="function")try{Ke.setStrictMode(Ce,t)}catch{}}var Ln=Math.clz32?Math.clz32:To,Gl=Math.log,ea=Math.LN2;function To(t){return t>>>=0,t===0?32:31-(Gl(t)/ea|0)|0}var vs=256,_s=262144,na=4194304;function Ii(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ia(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var c=0,f=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var b=r&134217727;return b!==0?(r=b&~f,r!==0?c=Ii(r):(y&=b,y!==0?c=Ii(y):a||(a=b&~t,a!==0&&(c=Ii(a))))):(b=r&~f,b!==0?c=Ii(b):y!==0?c=Ii(y):a||(a=r&~t,a!==0&&(c=Ii(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ua(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function bo(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var r=31-Ln(a),c=1<<r;n|=t[r],a&=~c}return n}function Kc(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vl(){var t=na;return na<<=1,(na&62914560)===0&&(na=4194304),t}function Ao(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function ys(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Qc(t,n,a,r,c,f){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,I=t.expirationTimes,j=t.hiddenUpdates;for(a=y&~a;0<a;){var at=31-Ln(a),pt=1<<at;b[at]=0,I[at]=-1;var Y=j[at];if(Y!==null)for(j[at]=null,at=0;at<Y.length;at++){var et=Y[at];et!==null&&(et.lane&=-536870913)}a&=~pt}r!==0&&Xl(t,r,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(y&~n))}function Xl(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Ln(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function D(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Ln(a),c=1<<r;c&n|t[r]&n&&(t[r]|=n),a&=~c}}function Q(t,n){var a=n&-n;return a=(a&42)!==0?1:rt(a),(a&(t.suspendedLanes|n))!==0?0:a}function rt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ot(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function J(){var t=xt.p;return t!==0?t:(t=window.event,t===void 0?32:x_(t.type))}function Tt(t,n){var a=xt.p;try{return xt.p=t,n()}finally{xt.p=a}}var wt=Math.random().toString(36).slice(2),Rt="__reactFiber$"+wt,Lt="__reactProps$"+wt,te="__reactContainer$"+wt,re="__reactEvents$"+wt,Qt="__reactListeners$"+wt,Re="__reactHandles$"+wt,De="__reactResources$"+wt,We="__reactMarker$"+wt,Xe="__reactLoad$"+wt;function Se(t){delete t[Rt],delete t[Lt],delete t[Qt],delete t[Re]}function Wt(t){var n;if(n=t[Rt])return n;for(var a=t.parentNode;a;){if(n=a[te]||a[Rt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=t_(t);t!==null;){if(a=t[Rt])return a;t=t_(t)}return n}t=a,a=t.parentNode}return null}function tn(t){if(t=t[Rt]||t[te]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Te(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function yn(t){var n=t[De];return n||(n=t[De]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Qe(t){t[We]=!0}function On(t){t[Xe]=void 0}var La=new Set,ke={};function on(t,n){dn(t,n),dn(t+"Capture",n)}function dn(t,n){for(ke[t]=n,t=0;t<n.length;t++)La.add(n[t])}var Tn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),bn={},ir={};function aa(t){return se.call(ir,t)?!0:se.call(bn,t)?!1:Tn.test(t)?ir[t]=!0:(bn[t]=!0,!1)}var Ue=!1;function Mm(){var t=Ue;return Ue=!1,t}function kl(t,n,a){if(aa(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function ql(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function sa(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,r)}}function ei(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Em(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ix(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(y){a=""+y,f.call(this,y)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Jc(t){if(!t._valueTracker){var n=Em(t)?"checked":"value";t._valueTracker=Ix(t,n,""+t[n])}}function Tm(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=Em(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}var Bx=/[\n"\\]/g;function mi(t){return t.replace(Bx,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function $c(t,n,a,r,c,f,y,b){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ei(n)):t.value!==""+ei(n)&&(t.value=""+ei(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?y==="number"&&t.value==n?tf(t,ei(t.value)):tf(t,ei(n)):a!=null?tf(t,ei(a)):r!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+ei(b):t.removeAttribute("name")}function bm(t,n,a,r,c,f,y,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Jc(t);return}a=a!=null?""+ei(a):"",n=n!=null?""+ei(n):a,b||n===t.value||(t.value=n),t.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=b?t.checked:!!r,t.defaultChecked=!!r,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),Jc(t)}function tf(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function ar(t,n,a,r){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&r&&(t[a].defaultSelected=!0)}else{for(a=""+ei(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Am(t,n,a){if(n!=null&&(n=""+ei(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ei(a):""}function Cm(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(Dt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ei(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Jc(t)}function sr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Fx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rm(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||Fx.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function wm(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",Ue=!0);for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&(Rm(t,c,r),Ue=!0)}else for(var f in n)n.hasOwnProperty(f)&&Rm(t,f,n[f])}function ef(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Gx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yl(t){return Gx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Bi(){}var nf=null;function af(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rr=null,or=null;function Dm(t){var n=tn(t);if(n&&(t=n.stateNode)){var a=t[Lt]||null;t:switch(t=n.stateNode,n.type){case"input":if($c(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+mi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var c=r[Lt]||null;if(!c)throw Error(s(90));$c(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&Tm(r)}break t;case"textarea":Am(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ar(t,!!a.multiple,n,!1)}}}var sf=!1;function Nm(t,n,a){if(sf)return t(n,a);sf=!0;try{var r=t(n);return r}finally{if(sf=!1,(rr!==null||or!==null)&&(Yu(),rr&&(n=rr,t=or,or=rr=null,Dm(n),t)))for(n=0;n<t.length;n++)Dm(t[n])}}function Co(t,n){var a=t.stateNode;if(a===null)return null;var r=a[Lt]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ra=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rf=!1;if(ra)try{var Ro={};Object.defineProperty(Ro,"passive",{get:function(){rf=!0}}),window.addEventListener("test",Ro,Ro),window.removeEventListener("test",Ro,Ro)}catch{rf=!1}var Oa=null,of=null,Wl=null;function Um(){if(Wl)return Wl;var t,n=of,a=n.length,r,c="value"in Oa?Oa.value:Oa.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var y=a-t;for(r=1;r<=y&&n[a-r]===c[f-r];r++);return Wl=c.slice(t,1<r?1-r:void 0)}function jl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Zl(){return!0}function Lm(){return!1}function Vn(t){function n(a,r,c,f,y){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Zl:Lm,this.isPropagationStopped=Lm,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zl)},persist:function(){},isPersistent:Zl}),n}var Pa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kl=Vn(Pa),wo=P({},Pa,{view:0,detail:0}),Vx=Vn(wo),lf,uf,Do,Ql=P({},wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ff,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Do&&(Do&&t.type==="mousemove"?(lf=t.screenX-Do.screenX,uf=t.screenY-Do.screenY):uf=lf=0,Do=t),lf)},movementY:function(t){return"movementY"in t?t.movementY:uf}}),Om=Vn(Ql),Xx=P({},Ql,{dataTransfer:0}),kx=Vn(Xx),qx=P({},wo,{relatedTarget:0}),cf=Vn(qx),Yx=P({},Pa,{animationName:0,elapsedTime:0,pseudoElement:0}),Wx=Vn(Yx),jx=P({},Pa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Zx=Vn(jx),Kx=P({},Pa,{data:0}),Pm=Vn(Kx),Qx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$x={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=$x[t])?!!n[t]:!1}function ff(){return tS}var eS=P({},wo,{key:function(t){if(t.key){var n=Qx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=jl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Jx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ff,charCode:function(t){return t.type==="keypress"?jl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?jl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),nS=Vn(eS),iS=P({},Ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zm=Vn(iS),aS=P({},Pa,{submitter:0}),sS=Vn(aS),rS=P({},wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ff}),oS=Vn(rS),lS=P({},Pa,{propertyName:0,elapsedTime:0,pseudoElement:0}),uS=Vn(lS),cS=P({},Ql,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fS=Vn(cS),hS=P({},Pa,{newState:0,oldState:0,source:0}),dS=Vn(hS),pS=[9,13,27,32],hf=ra&&"CompositionEvent"in window,No=null;ra&&"documentMode"in document&&(No=document.documentMode);var mS=ra&&"TextEvent"in window&&!No,Im=ra&&(!hf||No&&8<No&&11>=No),Bm=" ",Fm=!1;function Hm(t,n){switch(t){case"keyup":return pS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var lr=!1;function gS(t,n){switch(t){case"compositionend":return Gm(n);case"keypress":return n.which!==32?null:(Fm=!0,Bm);case"textInput":return t=n.data,t===Bm&&Fm?null:t;default:return null}}function vS(t,n){if(lr)return t==="compositionend"||!hf&&Hm(t,n)?(t=Um(),Wl=of=Oa=null,lr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Im&&n.locale!=="ko"?null:n.data;default:return null}}var _S={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!_S[t.type]:n==="textarea"}function Xm(t,n,a,r){rr?or?or.push(r):or=[r]:rr=r,n=Ju(n,"onChange"),0<n.length&&(a=new Kl("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Uo=null,Lo=null;function yS(t){Dv(t,0)}function Jl(t){var n=Te(t);if(Tm(n))return t}function km(t,n){if(t==="change")return n}var qm=!1;if(ra){var df;if(ra){var pf="oninput"in document;if(!pf){var Ym=document.createElement("div");Ym.setAttribute("oninput","return;"),pf=typeof Ym.oninput=="function"}df=pf}else df=!1;qm=df&&(!document.documentMode||9<document.documentMode)}function Wm(){Uo&&(Uo.detachEvent("onpropertychange",jm),Lo=Uo=null)}function jm(t){if(t.propertyName==="value"&&Jl(Lo)){var n=[];Xm(n,Lo,t,af(t)),Nm(yS,n)}}function xS(t,n,a){t==="focusin"?(Wm(),Uo=n,Lo=a,Uo.attachEvent("onpropertychange",jm)):t==="focusout"&&Wm()}function SS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jl(Lo)}function MS(t,n){if(t==="click")return Jl(n)}function ES(t,n){if(t==="input"||t==="change")return Jl(n)}function TS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ni=typeof Object.is=="function"?Object.is:TS;function Oo(t,n){if(ni(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!se.call(n,c)||!ni(t[c],n[c]))return!1}return!0}function mf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Zm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Km(t,n){var a=Zm(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Zm(a)}}function Qm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Qm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Jm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=mf(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=mf(t.document)}return n}function gf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var bS=ra&&"documentMode"in document&&11>=document.documentMode,ur=null,vf=null,Po=null,_f=!1;function $m(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_f||ur==null||ur!==mf(r)||(r=ur,"selectionStart"in r&&gf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Po&&Oo(Po,r)||(Po=r,r=Ju(vf,"onSelect"),0<r.length&&(n=new Kl("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=ur)))}function xs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var cr={animationend:xs("Animation","AnimationEnd"),animationiteration:xs("Animation","AnimationIteration"),animationstart:xs("Animation","AnimationStart"),transitionrun:xs("Transition","TransitionRun"),transitionstart:xs("Transition","TransitionStart"),transitioncancel:xs("Transition","TransitionCancel"),transitionend:xs("Transition","TransitionEnd")},yf={},tg={};ra&&(tg=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);function Ss(t){if(yf[t])return yf[t];if(!cr[t])return t;var n=cr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in tg)return yf[t]=n[a];return t}var eg=Ss("animationend"),ng=Ss("animationiteration"),ig=Ss("animationstart"),AS=Ss("transitionrun"),CS=Ss("transitionstart"),RS=Ss("transitioncancel"),ag=Ss("transitionend"),sg=new Map,xf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xf.push("scrollEnd");function bi(t,n){sg.set(t,n),on(n,[t])}var wS=0;function oa(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=wi.identifierPrefix;var a=wS++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function rg(t){if(t==null||typeof t=="string")return t;var n=null,a=Dr;if(a!==null)for(var r=0;r<a.length;r++){var c=t[a[r]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??t.default}function la(t,n){return t=rg(t),n=rg(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var $l=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},gi=[],fr=0,Sf=0;function tu(){for(var t=fr,n=Sf=fr=0;n<t;){var a=gi[n];gi[n++]=null;var r=gi[n];gi[n++]=null;var c=gi[n];gi[n++]=null;var f=gi[n];if(gi[n++]=null,r!==null&&c!==null){var y=r.pending;y===null?c.next=c:(c.next=y.next,y.next=c),r.pending=c}f!==0&&og(a,c,f)}}function eu(t,n,a,r){gi[fr++]=t,gi[fr++]=n,gi[fr++]=a,gi[fr++]=r,Sf|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Mf(t,n,a,r){return eu(t,n,a,r),nu(t)}function Ms(t,n){return eu(t,null,null,n),nu(t)}function og(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Ln(a),t=f.hiddenUpdates,r=t[c],r===null?t[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function nu(t){if(50<il)throw il=0,qu=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var hr={};function DS(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,n,a,r){return new DS(t,n,a,r)}function Ef(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ua(t,n){var a=t.alternate;return a===null?(a=Kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function lg(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function iu(t,n,a,r,c,f){var y=0;if(r=t,typeof r=="function")Ef(r)&&(y=1);else if(typeof r=="string")y=aE(t,a,me.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case Ft:return t=Kn(31,a,n,c),t.elementType=Ft,t.lanes=f,t;case H:return Es(a.children,c,f,n);case tt:y=8,c|=24;break;case st:return t=Kn(12,a,n,c|2),t.elementType=st,t.lanes=f,t;case lt:return t=Kn(13,a,n,c),t.elementType=lt,t.lanes=f,t;case K:return t=Kn(19,a,n,c),t.elementType=K,t.lanes=f,t;case Jt:case L:return t=c|32,t=Kn(30,a,n,t),t.elementType=L,t.lanes=f,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case mt:y=10;break t;case ut:y=9;break t;case k:y=11;break t;case yt:y=14;break t;case Mt:y=16,r=null;break t}y=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Kn(y,a,n,c),n.elementType=t,n.type=r,n.lanes=f,n}function Es(t,n,a,r){return t=Kn(7,t,r,n),t.lanes=a,t}function Tf(t,n,a){return t=Kn(6,t,null,n),t.lanes=a,t}function ug(t){var n=Kn(18,null,null,0);return n.stateNode=t,n}function bf(t,n,a){return n=Kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var cg=new WeakMap;function vi(t,n){if(typeof t=="object"&&t!==null){var a=cg.get(t);return a!==void 0?a:(n={value:t,source:n,stack:ne(n)},cg.set(t,n),n)}return{value:t,source:n,stack:ne(n)}}var dr=[],pr=0,au=null,zo=0,_i=[],yi=0,za=null,Fi=1,Hi="";function ca(t,n){dr[pr++]=zo,dr[pr++]=au,au=t,zo=n}function fg(t,n,a){_i[yi++]=Fi,_i[yi++]=Hi,_i[yi++]=za,za=t;var r=Fi;t=Hi;var c=32-Ln(r)-1;r&=~(1<<c),a+=1;var f=32-Ln(n)+c;if(30<f){var y=c-c%5;f=(r&(1<<y)-1).toString(32),r>>=y,c-=y,Fi=1<<32-Ln(n)+c|a<<c|r,Hi=f+t}else Fi=1<<f|a<<c|r,Hi=t}function su(t){t.return!==null&&(ca(t,1),fg(t,1,0))}function Af(t){for(;t===au;)au=dr[--pr],dr[pr]=null,zo=dr[--pr],dr[pr]=null;for(;t===za;)za=_i[--yi],_i[yi]=null,Hi=_i[--yi],_i[yi]=null,Fi=_i[--yi],_i[yi]=null}function hg(t,n){_i[yi++]=Fi,_i[yi++]=Hi,_i[yi++]=za,Fi=n.id,Hi=n.overflow,za=t}var xn=null,je=null,ve=!1,Ia=null,xi=!1,Cf=Error(s(519));function Ba(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Io(vi(n,t)),Cf}function dg(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[Rt]=t,n[Lt]=r,a){case"dialog":Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":case"embed":Ee("load",n);break;case"video":case"audio":for(a=0;a<sl.length;a++)Ee(sl[a],n);break;case"source":Ee("error",n);break;case"img":case"image":case"link":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"input":Ee("invalid",n),bm(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ee("invalid",n);break;case"textarea":Ee("invalid",n),Cm(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Ov(n.textContent,a)?(r.popover!=null&&(Ee("beforetoggle",n),Ee("toggle",n)),r.onScroll!=null&&Ee("scroll",n),r.onScrollEnd!=null&&Ee("scrollend",n),r.onClick!=null&&(n.onclick=Bi),n=!0):n=!1,n||Ba(t,!0)}function ru(t){for(xn=t.return;xn;)switch(xn.tag){case 5:case 31:case 13:xi=!1;return;case 27:case 3:xi=!0;return;default:xn=xn.return}}function mr(t){if(t!==xn)return!1;if(!ve)return ru(t),ve=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||id(t.type,t.memoizedProps)),a=!a),a&&je&&Ba(t),ru(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));je=$v(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));je=$v(t)}else n===27?(n=je,ts(t.type)?(t=hd,hd=null,je=t):je=n):je=xn?Mi(t.stateNode.nextSibling):null;return!0}function Ts(){je=xn=null,ve=!1}function Rf(){var t=Ia;return t!==null&&($n===null?$n=t:$n.push.apply($n,t),Ia=null),t}function Io(t){Ia===null?Ia=[t]:Ia.push(t)}var wf=ae(null),bs=null,fa=null;function Fa(t,n,a){At(wf,n._currentValue),n._currentValue=a}function ha(t){t._currentValue=wf.current,Zt(wf)}function ou(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function Df(t,n,a,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var y=c.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=c;for(var I=0;I<n.length;I++)if(b.context===n[I]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),ou(f.return,a,t),r||(y=null);break t}f=b.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(s(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),ou(y,a,t),y=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=a,y=c.alternate,y!==null&&(y.lanes|=a),ou(c.return,a,t),y=c.child,y=y!==null?y.sibling:null):y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===t){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function As(t,n,a,r){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var b=c.type;ni(c.pendingProps.value,y.value)||(t!==null?t.push(b):t=[b])}}else if(c===C.current){if(y=c.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Hr):t=[Hr])}c=c.return}return t!==null&&Df(n,t,a,r),n.flags|=262144,t!==null}function lu(t){for(t=t.firstContext;t!==null;){if(!ni(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Cs(t){bs=t,fa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return pg(bs,t)}function uu(t,n){return bs===null&&Cs(t),pg(t,n)}function pg(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},fa===null){if(t===null)throw Error(s(308));fa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else fa=fa.next=n;return a}var NS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},US=o.unstable_scheduleCallback,LS=o.unstable_NormalPriority,ln={$$typeof:mt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Nf(){return{controller:new NS,data:new Map,refCount:0}}function Bo(t){t.refCount--,t.refCount===0&&US(LS,function(){t.controller.abort()})}function mg(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];a.indexOf(r)===-1&&a.push(r)}}}var Fo=null;function OS(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Ho=null,Uf=0,Rs=0,gr=null;function PS(t,n){if(Ho===null){var a=Ho=[];Uf=0,Rs=jh(),gr={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Uf++,n.then(gg,gg),n}function gg(){if(--Uf===0&&(Fo=null,Ho!==null)){gr!==null&&(gr.status="fulfilled");var t=Ho;Ho=null,Rs=0,gr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function zS(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var vg=vt.S;vt.S=function(t,n){if(uv=q(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&PS(t,n),Fo!==null)for(var a=Or;a!==null;)mg(a,Fo),a=a.next;if(a=t.types,a!==null){for(var r=Or;r!==null;)mg(r,a),r=r.next;if(Rs!==0){r=Fo,r===null&&(r=Fo=[]);for(var c=0;c<a.length;c++){var f=a[c];r.indexOf(f)===-1&&r.push(f)}}}vg!==null&&vg(t,n)};var ws=ae(null);function Lf(){var t=ws.current;return t!==null?t:qe.pooledCache}function cu(t,n){n===null?At(ws,ws.current):At(ws,n.pool)}function _g(){var t=Lf();return t===null?null:{parent:ln._currentValue,pool:t}}var vr=Error(s(460)),Of=Error(s(474)),fu=Error(s(542)),hu={then:function(){}};function yg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function xg(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Bi,Bi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Mg(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(Bi,Bi);else{if(t=qe,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Mg(t),t}throw Ns=n,vr}}function Ds(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ns=a,vr):a}}var Ns=null;function Sg(){if(Ns===null)throw Error(s(459));var t=Ns;return Ns=null,t}function Mg(t){if(t===vr||t===fu)throw Error(s(483))}var _r=null,Go=0;function du(t){var n=Go;return Go+=1,_r===null&&(_r=[]),xg(_r,t,n)}function Ha(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function pu(t,n){throw n.$$typeof===B?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Eg(t){function n(W,X){if(t){var $=W.deletions;$===null?(W.deletions=[X],W.flags|=16):$.push(X)}}function a(W,X){if(!t)return null;for(;X!==null;)n(W,X),X=X.sibling;return null}function r(W){for(var X=new Map;W!==null;)W.key===null?X.set(W.index,W):X.set(W.key,W),W=W.sibling;return X}function c(W,X){return W=ua(W,X),W.index=0,W.sibling=null,W}function f(W,X,$){return W.index=$,t?($=W.alternate,$!==null?($=$.index,$<X?(W.flags|=2,X):$):(W.flags|=134217730,X)):(W.flags|=1048576,X)}function y(W){return t&&W.alternate===null&&(W.flags|=134217730),W}function b(W,X,$,dt){return X===null||X.tag!==6?(X=Tf($,W.mode,dt),X.return=W,X):(X=c(X,$),X.return=W,X)}function I(W,X,$,dt){var Ht=$.type;return Ht===H?(W=at(W,X,$.props.children,dt,$.key),Ha(W,$),W):X!==null&&(X.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===Mt&&Ds(Ht)===X.type)?(X=c(X,$.props),Ha(X,$),X.return=W,X):(X=iu($.type,$.key,$.props,null,W.mode,dt),Ha(X,$),X.return=W,X)}function j(W,X,$,dt){return X===null||X.tag!==4||X.stateNode.containerInfo!==$.containerInfo||X.stateNode.implementation!==$.implementation?(X=bf($,W.mode,dt),X.return=W,X):(X=c(X,$.children||[]),X.return=W,X)}function at(W,X,$,dt,Ht){return X===null||X.tag!==7?(X=Es($,W.mode,dt,Ht),X.return=W,X):(X=c(X,$),X.return=W,X)}function pt(W,X,$){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Tf(""+X,W.mode,$),X.return=W,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case w:return $=iu(X.type,X.key,X.props,null,W.mode,$),Ha($,X),$.return=W,$;case R:return X=bf(X,W.mode,$),X.return=W,X;case Mt:return X=Ds(X),pt(W,X,$)}if(Dt(X)||ct(X))return X=Es(X,W.mode,$,null),X.return=W,X;if(typeof X.then=="function")return pt(W,du(X),$);if(X.$$typeof===mt)return pt(W,uu(W,X),$);pu(W,X)}return null}function Y(W,X,$,dt){var Ht=X!==null?X.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Ht!==null?null:b(W,X,""+$,dt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case w:return $.key===Ht?I(W,X,$,dt):null;case R:return $.key===Ht?j(W,X,$,dt):null;case Mt:return $=Ds($),Y(W,X,$,dt)}if(Dt($)||ct($))return Ht!==null?null:at(W,X,$,dt,null);if(typeof $.then=="function")return Y(W,X,du($),dt);if($.$$typeof===mt)return Y(W,X,uu(W,$),dt);pu(W,$)}return null}function et(W,X,$,dt,Ht){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return W=W.get($)||null,b(X,W,""+dt,Ht);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case w:return W=W.get(dt.key===null?$:dt.key)||null,I(X,W,dt,Ht);case R:return W=W.get(dt.key===null?$:dt.key)||null,j(X,W,dt,Ht);case Mt:return dt=Ds(dt),et(W,X,$,dt,Ht)}if(Dt(dt)||ct(dt))return W=W.get($)||null,at(X,W,dt,Ht,null);if(typeof dt.then=="function")return et(W,X,$,du(dt),Ht);if(dt.$$typeof===mt)return et(W,X,$,uu(X,dt),Ht);pu(X,dt)}return null}function Nt(W,X,$,dt){for(var Ht=null,Ae=null,jt=X,ie=X=0,fn=null;jt!==null&&ie<$.length;ie++){jt.index>ie?(fn=jt,jt=null):fn=jt.sibling;var we=Y(W,jt,$[ie],dt);if(we===null){jt===null&&(jt=fn);break}t&&jt&&we.alternate===null&&n(W,jt),X=f(we,X,ie),Ae===null?Ht=we:Ae.sibling=we,Ae=we,jt=fn}if(ie===$.length)return a(W,jt),ve&&ca(W,ie),Ht;if(jt===null){for(;ie<$.length;ie++)jt=pt(W,$[ie],dt),jt!==null&&(X=f(jt,X,ie),Ae===null?Ht=jt:Ae.sibling=jt,Ae=jt);return ve&&ca(W,ie),Ht}for(jt=r(jt);ie<$.length;ie++)fn=et(jt,W,ie,$[ie],dt),fn!==null&&(t&&(we=fn.alternate,we!==null&&jt.delete(we.key===null?ie:we.key)),X=f(fn,X,ie),Ae===null?Ht=fn:Ae.sibling=fn,Ae=fn);return t&&jt.forEach(function(ss){return n(W,ss)}),ve&&ca(W,ie),Ht}function kt(W,X,$,dt){if($==null)throw Error(s(151));for(var Ht=null,Ae=null,jt=X,ie=X=0,fn=null,we=$.next();jt!==null&&!we.done;ie++,we=$.next()){jt.index>ie?(fn=jt,jt=null):fn=jt.sibling;var ss=Y(W,jt,we.value,dt);if(ss===null){jt===null&&(jt=fn);break}t&&jt&&ss.alternate===null&&n(W,jt),X=f(ss,X,ie),Ae===null?Ht=ss:Ae.sibling=ss,Ae=ss,jt=fn}if(we.done)return a(W,jt),ve&&ca(W,ie),Ht;if(jt===null){for(;!we.done;ie++,we=$.next())we=pt(W,we.value,dt),we!==null&&(X=f(we,X,ie),Ae===null?Ht=we:Ae.sibling=we,Ae=we);return ve&&ca(W,ie),Ht}for(jt=r(jt);!we.done;ie++,we=$.next())we=et(jt,W,ie,we.value,dt),we!==null&&(t&&(fn=we.alternate,fn!==null&&jt.delete(fn.key===null?ie:fn.key)),X=f(we,X,ie),Ae===null?Ht=we:Ae.sibling=we,Ae=we);return t&&jt.forEach(function(gE){return n(W,gE)}),ve&&ca(W,ie),Ht}function de(W,X,$,dt){if(typeof $=="object"&&$!==null&&$.type===H&&$.key===null&&$.props.ref===void 0&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case w:t:{for(var Ht=$.key;X!==null;){if(X.key===Ht){if(Ht=$.type,Ht===H){if(X.tag===7){a(W,X.sibling),dt=c(X,$.props.children),Ha(dt,$),dt.return=W,W=dt;break t}}else if(X.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===Mt&&Ds(Ht)===X.type){a(W,X.sibling),dt=c(X,$.props),Ha(dt,$),dt.return=W,W=dt;break t}a(W,X);break}else n(W,X);X=X.sibling}$.type===H?(dt=Es($.props.children,W.mode,dt,$.key),Ha(dt,$),dt.return=W,W=dt):(dt=iu($.type,$.key,$.props,null,W.mode,dt),Ha(dt,$),dt.return=W,W=dt)}return y(W);case R:t:{for(Ht=$.key;X!==null;){if(X.key===Ht)if(X.tag===4&&X.stateNode.containerInfo===$.containerInfo&&X.stateNode.implementation===$.implementation){a(W,X.sibling),dt=c(X,$.children||[]),dt.return=W,W=dt;break t}else{a(W,X);break}else n(W,X);X=X.sibling}dt=bf($,W.mode,dt),dt.return=W,W=dt}return y(W);case Mt:return $=Ds($),de(W,X,$,dt)}if(Dt($))return Nt(W,X,$,dt);if(ct($)){if(Ht=ct($),typeof Ht!="function")throw Error(s(150));return $=Ht.call($),kt(W,X,$,dt)}if(typeof $.then=="function")return de(W,X,du($),dt);if($.$$typeof===mt)return de(W,X,uu(W,$),dt);pu(W,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,X!==null&&X.tag===6?(a(W,X.sibling),dt=c(X,$),dt.return=W,W=dt):(a(W,X),dt=Tf($,W.mode,dt),dt.return=W,W=dt),y(W)):a(W,X)}return function(W,X,$,dt){try{Go=0;var Ht=de(W,X,$,dt);return _r=null,Ht}catch(jt){if(jt===vr||jt===fu)throw jt;var Ae=Kn(29,jt,null,W.mode);return Ae.lanes=dt,Ae.return=W,Ae}finally{}}}var Us=Eg(!0),Tg=Eg(!1),Ga=!1;function Pf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Va(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Xa(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Le&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=nu(t),og(t,null,a),n}return eu(t,r,n,a),nu(t)}function Vo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,D(t,a)}}function If(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Bf=!1;function Xo(){if(Bf){var t=gr;if(t!==null)throw t}}function ko(t,n,a,r){Bf=!1;var c=t.updateQueue;Ga=!1;var f=c.firstBaseUpdate,y=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var I=b,j=I.next;I.next=null,y===null?f=j:y.next=j,y=I;var at=t.alternate;at!==null&&(at=at.updateQueue,b=at.lastBaseUpdate,b!==y&&(b===null?at.firstBaseUpdate=j:b.next=j,at.lastBaseUpdate=I))}if(f!==null){var pt=c.baseState;y=0,at=j=I=null,b=f;do{var Y=b.lane&-536870913,et=Y!==b.lane;if(et?(be&Y)===Y:(r&Y)===Y){Y!==0&&Y===Rs&&(Bf=!0),at!==null&&(at=at.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Nt=t,kt=b;Y=n;var de=a;switch(kt.tag){case 1:if(Nt=kt.payload,typeof Nt=="function"){pt=Nt.call(de,pt,Y);break t}pt=Nt;break t;case 3:Nt.flags=Nt.flags&-65537|128;case 0:if(Nt=kt.payload,Y=typeof Nt=="function"?Nt.call(de,pt,Y):Nt,Y==null)break t;pt=P({},pt,Y);break t;case 2:Ga=!0}}Y=b.callback,Y!==null&&(t.flags|=64,et&&(t.flags|=8192),et=c.callbacks,et===null?c.callbacks=[Y]:et.push(Y))}else et={lane:Y,tag:b.tag,payload:b.payload,callback:b.callback,next:null},at===null?(j=at=et,I=pt):at=at.next=et,y|=Y;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;et=b,b=et.next,et.next=null,c.lastBaseUpdate=et,c.shared.pending=null}}while(!0);at===null&&(I=pt),c.baseState=I,c.firstBaseUpdate=j,c.lastBaseUpdate=at,f===null&&(c.shared.lanes=0),Ka|=y,t.lanes=y,t.memoizedState=pt}}function bg(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Ag(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)bg(a[t],n)}var ka=ae(null),mu=ae(0);function Cg(t,n){t=va,At(mu,t),At(ka,n),va=t|n.baseLanes}function Ff(){At(mu,va),At(ka,ka.current)}function Hf(){va=mu.current,Zt(ka),Zt(mu)}var Cn=ae(null),Pn=null;function qa(t){var n=t.alternate;At(Rn,Rn.current&1),At(Cn,t),Pn===null&&(n===null||ka.current!==null||n.memoizedState!==null)&&(Pn=t)}function Gf(t){At(Rn,Rn.current),At(Cn,t),Pn===null&&(Pn=t)}function Rg(t){t.tag===22?(At(Rn,Rn.current),At(Cn,t),Pn===null&&(Pn=t)):Ya()}function Ya(){At(Rn,Rn.current),At(Cn,Cn.current)}function ii(t){Zt(Cn),Pn===t&&(Pn=null),Zt(Rn)}var Rn=ae(0);function qo(t,n){At(Cn,Cn.current),At(Rn,n)}function Vf(t){Zt(Rn),Zt(Cn),Pn===t&&(Pn=null)}function gu(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||cd(a)||fd(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var da=0,he=null,He=null,un=null,vu=!1,yr=!1,Ls=!1,_u=0,Yo=0,xr=null,IS=0;function an(){throw Error(s(321))}function Xf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ni(t[a],n[a]))return!1;return!0}function kf(t,n,a,r,c,f){return da=f,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,vt.H=t===null||t.memoizedState===null?f0:h0,Ls=!1,f=a(r,c),Ls=!1,yr&&(f=Dg(n,a,r,c)),wg(t),f}function wg(t){vt.H=bu;var n=He!==null&&He.next!==null;if(da=0,un=He=he=null,vu=!1,Yo=0,xr=null,n)throw Error(s(300));t===null||cn||(t=t.dependencies,t!==null&&lu(t)&&(cn=!0))}function Dg(t,n,a,r){he=t;var c=0;do{if(yr&&(xr=null),Yo=0,yr=!1,25<=c)throw Error(s(301));if(c+=1,un=He=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}vt.H=qS,f=n(a,r)}while(yr);return f}function BS(){var t=vt.H,n=t.useState()[0];return n=typeof n.then=="function"?Wo(n):n,t=t.useState()[0],(He!==null?He.memoizedState:null)!==t&&(he.flags|=1024),n}function qf(){var t=_u!==0;return _u=0,t}function Yf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Wf(t){if(vu){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}vu=!1}da=0,un=He=he=null,yr=!1,Yo=_u=0,xr=null}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?he.memoizedState=un=t:un=un.next=t,un}function rn(){if(He===null){var t=he.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var n=un===null?he.memoizedState:un.next;if(n!==null)un=n,He=t;else{if(t===null)throw he.alternate===null?Error(s(467)):Error(s(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},un===null?he.memoizedState=un=t:un=un.next=t}return un}function yu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wo(t){var n=Yo;return Yo+=1,xr===null&&(xr=[]),t=xg(xr,t,n),n=he,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,vt.H=n===null||n.memoizedState===null?f0:h0),t}function xu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Wo(t);if(t.$$typeof===Z)return;if(t.$$typeof===mt)return An(t)}throw Error(s(438,String(t)))}function jf(t){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=he.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=yu(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=ye;return n.index++,a}function pa(t,n){return typeof n=="function"?n(t):n}function Su(t){var n=rn();return Zf(n,He,t)}function Zf(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=t.baseQueue,f=r.pending;if(f!==null){if(c!==null){var y=c.next;c.next=f.next,f.next=y}n.baseQueue=c=f,r.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var b=y=null,I=null,j=n,at=!1;do{var pt=j.lane&-536870913;if(pt!==j.lane?(be&pt)===pt:(da&pt)===pt){var Y=j.revertLane;if(Y===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),pt===Rs&&(at=!0);else if((da&Y)===Y){j=j.next,Y===Rs&&(at=!0);continue}else pt={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},I===null?(b=I=pt,y=f):I=I.next=pt,he.lanes|=Y,Ka|=Y;pt=j.action,Ls&&a(f,pt),f=j.hasEagerState?j.eagerState:a(f,pt)}else Y={lane:pt,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},I===null?(b=I=Y,y=f):I=I.next=Y,he.lanes|=pt,Ka|=pt;j=j.next}while(j!==null&&j!==n);if(I===null?y=f:I.next=b,!ni(f,t.memoizedState)&&(cn=!0,at&&(a=gr,a!==null)))throw a;t.memoizedState=f,t.baseState=y,t.baseQueue=I,r.lastRenderedState=f}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Kf(t){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var y=c=c.next;do f=t(f,y.action),y=y.next;while(y!==c);ni(f,n.memoizedState)||(cn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Ng(t,n,a){var r=he,c=rn(),f=ve;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!ni((He||c).memoizedState,a);if(y&&(c.memoizedState=a,cn=!0),c=c.queue,$f(Og.bind(null,r,c,t),[t]),t=c.getSnapshot!==n||y||un!==null&&(un.memoizedState.tag&1)!==0,Sr(t?9:8,{destroy:void 0},Lg.bind(null,r,c,a,n),null),t){if(r.flags|=2048,qe===null)throw Error(s(349));f||(da&127)!==0||Ug(r,n,a)}return a}function Ug(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=yu(),he.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Lg(t,n,a,r){n.value=a,n.getSnapshot=r,Pg(n)&&zg(t)}function Og(t,n,a){return a(function(){Pg(n)&&zg(t)})}function Pg(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ni(t,a)}catch{return!0}}function zg(t){var n=Ms(t,2);n!==null&&ti(n,t,2)}function Qf(t){var n=Xn();if(typeof t=="function"){var a=t;if(t=a(),Ls){_n(!0);try{a()}finally{_n(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:t},n}function Ig(t,n,a,r){return t.baseState=a,Zf(t,He,typeof r=="function"?r:pa)}function FS(t,n,a,r,c){if(Tu(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};vt.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Bg(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Bg(t,n){var a=n.action,r=n.payload,c=t.state;if(n.isTransition){var f=vt.T,y={};y.types=f!==null?f.types:null,vt.T=y;try{var b=a(c,r),I=vt.S;I!==null&&I(y,b),Fg(t,n,b)}catch(j){Jf(t,n,j)}finally{f!==null&&y.types!==null&&(f.types=y.types),vt.T=f}}else try{f=a(c,r),Fg(t,n,f)}catch(j){Jf(t,n,j)}}function Fg(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Hg(t,n,r)},function(r){return Jf(t,n,r)}):Hg(t,n,a)}function Hg(t,n,a){n.status="fulfilled",n.value=a,Gg(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Bg(t,a)))}function Jf(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Gg(n),n=n.next;while(n!==r)}t.action=null}function Gg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Vg(t,n){return n}function Xg(t,n){if(ve){var a=qe.formState;if(a!==null){t:{var r=he;if(ve){if(je){e:{for(var c=je,f=xi;c.nodeType!==8;){if(!f){c=null;break e}if(c=Mi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){je=Mi(c.nextSibling),r=c.data==="F!";break t}}Ba(r)}r=!1}r&&(n=a[0])}}return a=Xn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vg,lastRenderedState:n},a.queue=r,a=l0.bind(null,he,r),r.dispatch=a,r=Qf(!1),f=ah.bind(null,he,!1,r.queue),r=Xn(),c={state:n,dispatch:null,action:t,pending:null},r.queue=c,a=FS.bind(null,he,c,f,a),c.dispatch=a,r.memoizedState=t,[n,a,!1]}function kg(t){var n=rn();return qg(n,He,t)}function qg(t,n,a){if(n=Zf(t,n,Vg)[0],t=Su(pa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Wo(n)}catch(y){throw y===vr?fu:y}else r=n;n=rn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(he.flags|=2048,Sr(9,{destroy:void 0},HS.bind(null,c,a),null)),[r,f,t]}function HS(t,n){t.action=n}function Yg(t){var n=rn(),a=He;if(a!==null)return qg(n,a,t);rn(),n=n.memoizedState,a=rn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function Sr(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=he.updateQueue,n===null&&(n=yu(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function Wg(){return rn().memoizedState}function Mu(t,n,a,r){var c=Xn();he.flags|=t,c.memoizedState=Sr(1|n,{destroy:void 0},a,r===void 0?null:r)}function Eu(t,n,a,r){var c=rn();r=r===void 0?null:r;var f=c.memoizedState.inst;He!==null&&r!==null&&Xf(r,He.memoizedState.deps)?c.memoizedState=Sr(n,f,a,r):(he.flags|=t,c.memoizedState=Sr(1|n,f,a,r))}function jg(t,n){Mu(8390656,8,t,n)}function $f(t,n){Eu(2048,8,t,n)}function GS(t){he.flags|=4;var n=he.updateQueue;if(n===null)n=yu(),he.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Zg(t){var n=rn().memoizedState;return GS({ref:n,nextImpl:t}),function(){if((Le&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Kg(t,n){return Eu(4,2,t,n)}function Qg(t,n){return Eu(4,4,t,n)}function Jg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function $g(t,n,a){a=a!=null?a.concat([t]):null,Eu(4,4,Jg.bind(null,n,t),a)}function th(){}function t0(t,n){var a=rn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Xf(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function e0(t,n){var a=rn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Xf(n,r[1]))return r[0];if(r=t(),Ls){_n(!0);try{t()}finally{_n(!1)}}return a.memoizedState=[r,n],r}function eh(t,n,a){return a===void 0||(da&1073741824)!==0&&(be&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=fv(),he.lanes|=t,Ka|=t,a)}function n0(t,n,a,r){return ni(a,n)?a:ka.current!==null?(t=eh(t,a,r),ni(t,n)||(cn=!0),t):(da&106)===0||(da&1073741824)!==0&&(be&261930)===0?(cn=!0,t.memoizedState=a):(t=fv(),he.lanes|=t,Ka|=t,n)}function i0(t,n,a,r,c){var f=xt.p;xt.p=f!==0&&8>f?f:8;var y=vt.T,b={};b.types=y!==null?y.types:null,vt.T=b,ah(t,!1,n,a);try{var I=c(),j=vt.S;if(j!==null&&j(b,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var at=zS(I,r);jo(t,n,at,oi(t))}else jo(t,n,r,oi(t))}catch(pt){jo(t,n,{then:function(){},status:"rejected",reason:pt},oi())}finally{xt.p=f,y!==null&&b.types!==null&&(y.types=b.types),vt.T=y}}function VS(){}function nh(t,n,a,r){if(t.tag!==5)throw Error(s(476));var c=a0(t).queue;i0(t,c,n,$t,a===null?VS:function(){return s0(t),a(r)})}function a0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:$t,baseState:$t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:$t},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function s0(t){var n=a0(t);n.next===null&&(n=t.alternate.memoizedState),jo(t,n.next.queue,{},oi())}function ih(){return An(Hr)}function r0(){return rn().memoizedState}function o0(){return rn().memoizedState}function XS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=oi();t=Va(a);var r=Xa(n,t,a);r!==null&&(ti(r,n,a),Vo(r,n,a)),n={cache:Nf()},t.payload=n;return}n=n.return}}function kS(t,n,a){var r=oi();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Tu(t)?u0(n,a):(a=Mf(t,n,a,r),a!==null&&(ti(a,t,r),c0(a,n,r)))}function l0(t,n,a){var r=oi();jo(t,n,a,r)}function jo(t,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Tu(t))u0(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,b=f(y,a);if(c.hasEagerState=!0,c.eagerState=b,ni(b,y))return eu(t,n,c,0),qe===null&&tu(),!1}catch{}finally{}if(a=Mf(t,n,c,r),a!==null)return ti(a,t,r),c0(a,n,r),!0}return!1}function ah(t,n,a,r){if(r={lane:2,revertLane:jh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Tu(t)){if(n)throw Error(s(479))}else n=Mf(t,a,r,2),n!==null&&ti(n,t,2)}function Tu(t){var n=t.alternate;return t===he||n!==null&&n===he}function u0(t,n){yr=vu=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function c0(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,D(t,a)}}var bu={readContext:An,use:xu,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an,useEffectEvent:an},f0={readContext:An,use:xu,useCallback:function(t,n){return Xn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:jg,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Mu(4194308,4,Jg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Mu(4194308,4,t,n)},useInsertionEffect:function(t,n){Mu(4,2,t,n)},useMemo:function(t,n){var a=Xn();n=n===void 0?null:n;var r=t();if(Ls){_n(!0);try{t()}finally{_n(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Xn();if(a!==void 0){var c=a(n);if(Ls){_n(!0);try{a(n)}finally{_n(!1)}}}else c=n;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=kS.bind(null,he,t),[r.memoizedState,t]},useRef:function(t){var n=Xn();return t={current:t},n.memoizedState=t},useState:function(t){t=Qf(t);var n=t.queue,a=l0.bind(null,he,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:th,useDeferredValue:function(t,n){var a=Xn();return eh(a,t,n)},useTransition:function(){var t=Qf(!1);return t=i0.bind(null,he,t.queue,!0,!1),Xn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=he,c=Xn();if(ve){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),qe===null)throw Error(s(349));(be&127)!==0||Ug(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,jg(Og.bind(null,r,f,t),[t]),r.flags|=2048,Sr(9,{destroy:void 0},Lg.bind(null,r,f,a,n),null),a},useId:function(){var t=Xn(),n=qe.identifierPrefix;if(ve){var a=Hi,r=Fi;a=(r&~(1<<32-Ln(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=_u++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=IS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:ih,useFormState:Xg,useActionState:Xg,useOptimistic:function(t){var n=Xn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ah.bind(null,he,!0,a),a.dispatch=n,[t,n]},useMemoCache:jf,useCacheRefresh:function(){return Xn().memoizedState=XS.bind(null,he)},useEffectEvent:function(t){var n=Xn(),a={impl:t};return n.memoizedState=a,function(){if((Le&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},h0={readContext:An,use:xu,useCallback:t0,useContext:An,useEffect:$f,useImperativeHandle:$g,useInsertionEffect:Kg,useLayoutEffect:Qg,useMemo:e0,useReducer:Su,useRef:Wg,useState:function(){return Su(pa)},useDebugValue:th,useDeferredValue:function(t,n){var a=rn();return n0(a,He.memoizedState,t,n)},useTransition:function(){var t=Su(pa)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:Wo(t),n]},useSyncExternalStore:Ng,useId:r0,useHostTransitionStatus:ih,useFormState:kg,useActionState:kg,useOptimistic:function(t,n){var a=rn();return Ig(a,He,t,n)},useMemoCache:jf,useCacheRefresh:o0,useEffectEvent:Zg},qS={readContext:An,use:xu,useCallback:t0,useContext:An,useEffect:$f,useImperativeHandle:$g,useInsertionEffect:Kg,useLayoutEffect:Qg,useMemo:e0,useReducer:Kf,useRef:Wg,useState:function(){return Kf(pa)},useDebugValue:th,useDeferredValue:function(t,n){var a=rn();return He===null?eh(a,t,n):n0(a,He.memoizedState,t,n)},useTransition:function(){var t=Kf(pa)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:Wo(t),n]},useSyncExternalStore:Ng,useId:r0,useHostTransitionStatus:ih,useFormState:Yg,useActionState:Yg,useOptimistic:function(t,n){var a=rn();return He!==null?Ig(a,He,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:jf,useCacheRefresh:o0,useEffectEvent:Zg};function sh(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:P({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var rh={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=oi(),c=Va(r);c.payload=n,a!=null&&(c.callback=a),n=Xa(t,c,r),n!==null&&(ti(n,t,r),Vo(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=oi(),c=Va(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Xa(t,c,r),n!==null&&(ti(n,t,r),Vo(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=oi(),r=Va(a);r.tag=2,n!=null&&(r.callback=n),n=Xa(t,r,a),n!==null&&(ti(n,t,a),Vo(n,t,a))}};function d0(t,n,a,r,c,f,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,y):n.prototype&&n.prototype.isPureReactComponent?!Oo(a,r)||!Oo(c,f):!0}function p0(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&rh.enqueueReplaceState(n,n.state,null)}function Os(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=P({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function m0(t){$l(t)}function g0(t){console.error(t)}function v0(t){$l(t)}function Au(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function _0(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function oh(t,n,a){return a=Va(a),a.tag=3,a.payload={element:null},a.callback=function(){Au(t,n)},a}function y0(t){return t=Va(t),t.tag=3,t}function x0(t,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;t.payload=function(){return c(f)},t.callback=function(){_0(n,a,r)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){_0(n,a,r),typeof c!="function"&&(Qa===null?Qa=new Set([this]):Qa.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})})}function YS(t,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&As(n,a,c,!0),a=Cn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Pn===null?Wu():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===hu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),qh(t,r,c)),!1;case 22:return a.flags|=65536,r===hu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),qh(t,r,c)),!1}throw Error(s(435,a.tag))}return qh(t,r,c),Wu(),!1}if(ve)return n=Cn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==Cf&&(t=Error(s(422),{cause:r}),Io(vi(t,a)))):(r!==Cf&&(n=Error(s(423),{cause:r}),Io(vi(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=vi(r,a),c=oh(t.stateNode,r,c),If(t,c),sn!==4&&(sn=2)),!1;var f=Error(s(520),{cause:r});if(f=vi(f,a),nl===null?nl=[f]:nl.push(f),sn!==4&&(sn=2),n===null)return!0;r=vi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=oh(a.stateNode,r,t),If(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Qa===null||!Qa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=y0(c),x0(c,t,a,r),If(a,c),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var lh=Error(s(461)),cn=!1;function pn(t,n,a,r){n.child=t===null?Tg(n,null,a,r):Us(n,t.child,a,r)}function S0(t,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var y={};for(var b in r)b!=="ref"&&(y[b]=r[b])}else y=r;return Cs(n),r=kf(t,n,a,y,f,c),b=qf(),t!==null&&!cn?(Yf(t,n,c),ma(t,n,c)):(ve&&b&&su(n),n.flags|=1,pn(t,n,r,c),n.child)}function M0(t,n,a,r,c){if(t===null){var f=a.type;return typeof f=="function"&&!Ef(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,E0(t,n,f,r,c)):(t=iu(a.type,null,r,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!gh(t,c)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:Oo,a(y,r)&&t.ref===n.ref)return ma(t,n,c)}return n.flags|=1,t=ua(f,r),t.ref=n.ref,t.return=n,n.child=t}function E0(t,n,a,r,c){if(t!==null){var f=t.memoizedProps;if(Oo(f,r)&&t.ref===n.ref)if(cn=!1,n.pendingProps=r=f,gh(t,c))(t.flags&131072)!==0&&(cn=!0);else return n.lanes=t.lanes,ma(t,n,c)}return uh(t,n,a,r,c)}function T0(t,n,a,r){var c=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return b0(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&cu(n,f!==null?f.cachePool:null),f!==null?Cg(n,f):Ff(),Rg(n);else return r=n.lanes=536870912,b0(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(cu(n,f.cachePool),Cg(n,f),Ya(),n.memoizedState=null):(t!==null&&cu(n,null),Ff(),Ya());return pn(t,n,c,a),n.child}function Zo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function b0(t,n,a,r,c){var f=Lf();return f=f===null?null:{parent:ln._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&cu(n,null),Ff(),Rg(n),t!==null&&As(t,n,r,!0),n.childLanes=c,null}function Cu(t,n){return n=Ru({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function A0(t,n,a){return Us(n,t.child,null,a),t=Cu(n,n.pendingProps),t.flags|=2,ii(n),n.memoizedState=null,t}function WS(t,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ve){if(r.mode==="hidden")return t=Cu(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Zo(null,t);if(Gf(n),(t=je)?(t=Jv(t,xi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:za!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=ug(t),a.return=n,n.child=a,xn=n,je=null)):t=null,t===null)throw Ba(n);return n.lanes=536870912,null}return Cu(n,r)}var f=t.memoizedState;if(f!==null){var y=f.dehydrated;if(Gf(n),c)if(n.flags&256)n.flags&=-257,n=A0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(cn||As(t,n,a,!1),c=(a&t.childLanes)!==0,cn||c){if(ka.current===null){if(r=qe,r!==null&&(y=Q(r,a),y!==0&&y!==f.retryLane))throw f.retryLane=y,Ms(t,y),ti(r,t,y),lh;Wu()}n=A0(t,n,a)}else t=f.treeContext,je=Mi(y.nextSibling),xn=n,ve=!0,Ia=null,xi=!1,t!==null&&hg(n,t),n=Cu(n,r),n.flags|=134221824;return n}return t=ua(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Mr(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function uh(t,n,a,r,c){return Cs(n),a=kf(t,n,a,r,void 0,c),r=qf(),t!==null&&!cn?(Yf(t,n,c),ma(t,n,c)):(ve&&r&&su(n),n.flags|=1,pn(t,n,a,c),n.child)}function C0(t,n,a,r,c,f){return Cs(n),n.updateQueue=null,a=Dg(n,r,a,c),wg(t),r=qf(),t!==null&&!cn?(Yf(t,n,f),ma(t,n,f)):(ve&&r&&su(n),n.flags|=1,pn(t,n,a,f),n.child)}function R0(t,n,a,r,c){if(Cs(n),n.stateNode===null){var f=hr,y=a.contextType;typeof y=="object"&&y!==null&&(f=An(y)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=rh,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Pf(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?An(y):hr,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(sh(n,a,y,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&rh.enqueueReplaceState(f,f.state,null),ko(n,r,f,c),Xo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var b=n.memoizedProps,I=Os(a,b);f.props=I;var j=f.context,at=a.contextType;y=hr,typeof at=="object"&&at!==null&&(y=An(at));var pt=a.getDerivedStateFromProps;at=typeof pt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,at||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||j!==y)&&p0(n,f,r,y),Ga=!1;var Y=n.memoizedState;f.state=Y,ko(n,r,f,c),Xo(),j=n.memoizedState,b||Y!==j||Ga?(typeof pt=="function"&&(sh(n,a,pt,r),j=n.memoizedState),(I=Ga||d0(n,a,I,r,Y,j,y))?(at||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=j),f.props=r,f.state=j,f.context=y,r=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,zf(t,n),y=n.memoizedProps,at=Os(a,y),f.props=at,pt=n.pendingProps,Y=f.context,j=a.contextType,I=hr,typeof j=="object"&&j!==null&&(I=An(j)),b=a.getDerivedStateFromProps,(j=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==pt||Y!==I)&&p0(n,f,r,I),Ga=!1,Y=n.memoizedState,f.state=Y,ko(n,r,f,c),Xo();var et=n.memoizedState;y!==pt||Y!==et||Ga||t!==null&&t.dependencies!==null&&lu(t.dependencies)?(typeof b=="function"&&(sh(n,a,b,r),et=n.memoizedState),(at=Ga||d0(n,a,at,r,Y,et,I)||t!==null&&t.dependencies!==null&&lu(t.dependencies))?(j||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,et,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,et,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===t.memoizedProps&&Y===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&Y===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=et),f.props=r,f.state=et,f.context=I,r=at):(typeof f.componentDidUpdate!="function"||y===t.memoizedProps&&Y===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&Y===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,Mr(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=Us(n,t.child,null,c),n.child=Us(n,null,a,c)):pn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=ma(t,n,c),t}function w0(t,n,a,r){return Ts(),n.flags|=256,pn(t,n,a,r),n.child}var ch={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function fh(t){return{baseLanes:t,cachePool:_g()}}function hh(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ri),t}function D0(t,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=t!==null&&t.memoizedState===null?!1:(Rn.current&2)!==0),y&&(c=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(ve){if(c?qa(n):Ya(),(t=je)?(t=Jv(t,xi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:za!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=ug(t),a.return=n,n.child=a,xn=n,je=null)):t=null,t===null)throw Ba(n);return fd(t)?n.lanes=32:n.lanes=536870912,null}return f=r.children,r=r.fallback,c?(Ya(),c=n.mode,f=Ru({mode:"hidden",children:f},c),r=Es(r,c,a,null),f.return=n,r.return=n,f.sibling=r,n.child=f,r=n.child,r.memoizedState=fh(a),r.childLanes=hh(t,y,a),n.memoizedState=ch,Zo(null,r)):(qa(n),dh(n,f))}var b=t.memoizedState;if(b!==null){var I=b.dehydrated;if(I!==null)return jS(t,n,f,y,r,I,b,a)}return c?(Ya(),c=r.fallback,f=n.mode,b=t.child,I=b.sibling,r=ua(b,{mode:"hidden",children:r.children}),r.subtreeFlags=b.subtreeFlags&1206910976,I!==null?c=ua(I,c):(c=Es(c,f,a,null),c.flags|=2),c.return=n,r.return=n,r.sibling=c,n.child=r,Zo(null,r),r=n.child,c=t.child.memoizedState,c===null?c=fh(a):(f=c.cachePool,f!==null?(b=ln._currentValue,f=f.parent!==b?{parent:b,pool:b}:f):f=_g(),c={baseLanes:c.baseLanes|a,cachePool:f}),r.memoizedState=c,r.childLanes=hh(t,y,a),n.memoizedState=ch,Zo(t.child,r)):(qa(n),a=t.child,t=a.sibling,a=ua(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function dh(t,n){return n=Ru({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ru(t,n){return t=Kn(22,t,null,n),t.lanes=0,t}function wu(t,n,a){return Us(n,t.child,null,a),t=dh(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function jS(t,n,a,r,c,f,y,b){if(a)return n.flags&256?(qa(n),n.flags&=-257,wu(t,n,b)):n.memoizedState!==null?(Ya(),n.child=t.child,n.flags|=128,null):(Ya(),f=c.fallback,y=n.mode,c=Ru({mode:"visible",children:c.children},y),f=Es(f,y,b,null),f.flags|=2,c.return=n,f.return=n,c.sibling=f,n.child=c,Us(n,t.child,null,b),c=n.child,c.memoizedState=fh(b),c.childLanes=hh(t,r,b),n.memoizedState=ch,Zo(null,c));if(qa(n),fd(f)){if(r=f.nextSibling&&f.nextSibling.dataset,r)var I=r.dgst;return r=I,r!==""&&(c=Error(s(419)),c.stack="",c.digest=r,Io({value:c,source:null,stack:null})),wu(t,n,b)}if(cn||As(t,n,b,!1),r=(b&t.childLanes)!==0,cn||r){if(ka.current!==null)return wu(t,n,b);if(r=qe,r!==null&&(c=Q(r,b),c!==0&&c!==y.retryLane))throw y.retryLane=c,Ms(t,c),ti(r,t,c),lh;return cd(f)||Wu(),wu(t,n,b)}return cd(f)?(n.flags|=192,n.child=t.child,null):(t=y.treeContext,je=Mi(f.nextSibling),xn=n,ve=!0,Ia=null,xi=!1,t!==null&&hg(n,t),n=dh(n,c.children),n.flags|=134221824,n)}function N0(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),ou(t.return,n,a)}function U0(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&gu(a)===null&&(n=t),t=t.sibling}return n}function Du(t,n,a,r,c,f){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=r,y.tail=a,y.tailMode=c,y.treeForkCount=f)}function ph(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function mh(t,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var y=Rn.current;if(n.flags&128)return qo(n,y),null;var b=(y&2)!==0;if(b?(y=y&1|2,n.flags|=128):y&=1,qo(n,y),c==="backwards"&&t!==null?(ph(t),pn(t,n,r,a),ph(t)):pn(t,n,r,a),r=ve?zo:0,!b&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&N0(t,a,n);else if(t.tag===19)N0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"backwards":a=U0(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null,ph(n)),Du(n,!0,c,null,f,r);break;case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&gu(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Du(n,!0,a,null,f,r);break;case"together":Du(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=U0(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Du(n,!1,c,a,f,r)}return n.child}function L0(t,n,a){var r=n.pendingProps;return Fa(n,n.type,r.value),pn(t,n,r.children,a),n.child}function ma(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ka|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(As(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ua(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ua(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function gh(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&lu(t)))}function ZS(t,n,a){switch(n.tag){case 3:nt(n,n.stateNode.containerInfo),Fa(n,ln,t.memoizedState.cache),Ts();break;case 27:case 5:St(n);break;case 4:nt(n,n.stateNode.containerInfo);break;case 10:Fa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Gf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return qa(n),n.flags|=128,null;r=As(t,n,a,!1);var c=n.child.childLanes;return r||(a&c)!==0?D0(t,n,a):(qa(n),t=ma(t,n,a),t!==null?t.sibling:null)}qa(n);break;case 19:if(n.flags&128)return mh(t,n,a);if(c=(t.flags&128)!==0,r=(a&n.childLanes)!==0,r||(As(t,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return mh(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),qo(n,Rn.current),r)break;return null;case 22:return n.lanes=0,T0(t,n,a,n.pendingProps);case 24:Fa(n,ln,t.memoizedState.cache)}return ma(t,n,a)}function O0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)cn=!0;else{if(!gh(t,a)&&(n.flags&128)===0)return cn=!1,ZS(t,n,a);cn=(t.flags&131072)!==0}else cn=!1,ve&&(n.flags&1048576)!==0&&fg(n,zo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=Ds(n.elementType),n.type=t,typeof t=="function")Ef(t)?(r=Os(t,r),n.tag=1,n=R0(null,n,t,r,a)):(n.tag=0,n=uh(null,n,t,r,a));else{if(t!=null){var c=t.$$typeof;if(c===k){n.tag=11,n=S0(null,n,t,r,a);break t}else if(c===yt){n.tag=14,n=M0(null,n,t,r,a);break t}else if(c===mt){n.tag=10,n.type=t,n=L0(null,n,a);break t}}throw n=Gt(t)||t,Error(s(306,n,""))}}return n;case 0:return uh(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=Os(r,n.pendingProps),R0(t,n,r,c,a);case 3:t:{if(nt(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,zf(t,n),ko(n,r,null,a);var y=n.memoizedState;if(r=y.cache,Fa(n,ln,r),r!==f.cache&&Df(n,[ln],a,!0),Xo(),r=y.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=w0(t,n,r,a);break t}else if(r!==c){c=vi(Error(s(424)),n),Io(c),n=w0(t,n,r,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(je=Mi(t.firstChild),xn=n,ve=!0,Ia=null,xi=!0,a=Tg(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Ts(),r===c){n=ma(t,n,a);break t}pn(t,n,r,a)}n=n.child}return n;case 26:return Mr(t,n),t===null?(a=s_(n.type,null,n.pendingProps,null))?n.memoizedState=a:ve||(n.stateNode=Bv(n.type,n.pendingProps,O.current,n)):n.memoizedState=s_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return St(n),t===null&&ve&&(r=n.stateNode=e_(n.type,n.pendingProps,O.current),xn=n,xi=!0,c=je,ts(n.type)?(hd=c,je=Mi(r.firstChild)):je=c),pn(t,n,n.pendingProps.children,a),Mr(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ve&&((c=r=je)&&(r=XM(r,n.type,n.pendingProps,xi),r!==null?(n.stateNode=r,xn=n,je=Mi(r.firstChild),xi=!1,c=!0):c=!1),c||Ba(n)),St(n),c=n.type,f=n.pendingProps,y=t!==null?t.memoizedProps:null,r=f.children,id(c,f)?r=null:y!==null&&id(c,y)&&(n.flags|=32),n.memoizedState!==null&&(c=kf(t,n,BS,null,null,a),Hr._currentValue=c),Mr(t,n),pn(t,n,r,a),n.child;case 6:return t===null&&ve&&((t=a=je)&&(a=kM(a,n.pendingProps,xi),a!==null?(n.stateNode=a,xn=n,je=null,t=!0):t=!1),t||Ba(n)),null;case 13:return D0(t,n,a);case 4:return nt(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=Us(n,null,r,a):pn(t,n,r,a),n.child;case 11:return S0(t,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,Mr(t,n),pn(t,n,r,a),n.child;case 8:return pn(t,n,n.pendingProps.children,a),n.child;case 12:return pn(t,n,n.pendingProps.children,a),n.child;case 10:return L0(t,n,a);case 9:return c=n.type._context,r=n.pendingProps.children,Cs(n),c=An(c),r=r(c),n.flags|=1,pn(t,n,r,a),n.child;case 14:return M0(t,n,n.type,n.pendingProps,a);case 15:return E0(t,n,n.type,n.pendingProps,a);case 19:return mh(t,n,a);case 31:return WS(t,n,a);case 22:return T0(t,n,a,n.pendingProps);case 24:return Cs(n),r=An(ln),t===null?(c=Lf(),c===null&&(c=qe,f=Nf(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},Pf(n),Fa(n,ln,c)):((t.lanes&a)!==0&&(zf(t,n),ko(n,null,null,a),Xo()),c=t.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Fa(n,ln,r)):(r=f.cache,Fa(n,ln,r),r!==c.cache&&Df(n,[ln],a,!0))),pn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:ve&&su(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:Mr(t,n),pn(t,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ga(t){t.flags|=4}function vh(t,n,a,r,c){var f;if((f=(t.mode&32)!==0)&&(f=a===null?u_(n,r):u_(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),f){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(mv())t.flags|=8192;else throw Ns=hu,Of}else t.flags&=-16777217}function P0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!c_(n))if(mv())t.flags|=8192;else throw Ns=hu,Of}function Nu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Vl():536870912,t.lanes|=n,Cr|=n)}function Ko(t,n){if(!ve)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function Ze(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&1206910976,r|=c.flags&1206910976,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function KS(t,n,a){var r=n.pendingProps;switch(Af(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ha(ln),it(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(mr(n)?ga(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Rf())),Ze(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(ga(n),f!==null?(Ze(n),P0(n,f)):(Ze(n),vh(n,c,null,r,a))):f?f!==t.memoizedState?(ga(n),Ze(n),P0(n,f)):(Ze(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ga(n),Ze(n),vh(n,c,t,r,a)),null;case 27:if(ht(n),a=O.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ga(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ze(n),n.subtreeFlags&=-33554433,null}t=me.current,mr(n)?dg(n):(t=e_(c,r,a),n.stateNode=t,ga(n))}return Ze(n),n.subtreeFlags&=-33554433,null;case 5:if(ht(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ga(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ze(n),n.subtreeFlags&=-33554433,null}if(f=me.current,mr(n))dg(n);else{var y=ol(O.current);switch(f){case 1:f=y.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=y.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=y.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=y.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=y.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?y.createElement("select",{is:r.is}):y.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?y.createElement(c,{is:r.is}):y.createElement(c)}}f[Rt]=n,f[Lt]=r;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)f.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=f;t:switch(Dn(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ga(n)}}return Ze(n),n.subtreeFlags&=-33554433,vh(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ga(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=O.current,mr(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,c=xn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[Rt]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Ov(t.nodeValue,a)),t||Ba(n,!0)}else t=ol(t).createTextNode(r),t[Rt]=n,n.stateNode=t}return Ze(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=mr(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Rt]=n}else Ts(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),t=!1}else a=Rf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ii(n),n):(ii(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ze(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=mr(n),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[Rt]=n}else Ts(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),c=!1}else c=Rf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ii(n),n):(ii(n),null)}return ii(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Nu(n,n.updateQueue),Ze(n),null);case 4:return it(),t===null&&Jh(n.stateNode.containerInfo),n.flags|=67108864,Ze(n),null;case 10:return ha(n.type),Ze(n),null;case 19:if(Vf(n),r=n.memoizedState,r===null)return Ze(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)Ko(r,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=gu(t),f!==null){for(n.flags|=128,Ko(r,!1),t=f.updateQueue,n.updateQueue=t,Nu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)lg(a,t),a=a.sibling;return qo(n,Rn.current&1|2),ve&&ca(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&q()>Xu&&(n.flags|=128,c=!0,Ko(r,!1),n.lanes=4194304)}else{if(!c)if(t=gu(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Nu(n,t),Ko(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!f.alternate&&!ve)return Ze(n),null}else 2*q()-r.renderingStartTime>Xu&&a!==536870912&&(n.flags|=128,c=!0,Ko(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}if(r.tail!==null){t=r.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=q(),t.sibling=null,f=Rn.current,f=c?f&1|2:f&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||ve?qo(n,f):(a=f,At(Cn,n),At(Rn,a),Pn===null&&(Pn=n)),ve&&ca(n,r.treeForkCount),t}return Ze(n),null;case 22:case 23:return ii(n),Hf(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&Nu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&Zt(ws),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ha(ln),Ze(n),null;case 25:return null;case 30:return n.flags|=33554432,Ze(n),null}throw Error(s(156,n.tag))}function QS(t,n){switch(Af(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ha(ln),it(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ht(n),null;case 31:if(n.memoizedState!==null){if(ii(n),n.alternate===null)throw Error(s(340));Ts()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ii(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ts()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Vf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return it(),null;case 10:return ha(n.type),null;case 22:case 23:return ii(n),Hf(),t!==null&&Zt(ws),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ha(ln),null;case 25:return null;default:return null}}function z0(t,n){switch(Af(n),n.tag){case 3:ha(ln),it();break;case 26:case 27:case 5:ht(n);break;case 4:it();break;case 31:n.memoizedState!==null&&ii(n);break;case 13:ii(n);break;case 19:Vf(n);break;case 10:ha(n.type);break;case 22:case 23:ii(n),Hf(),t!==null&&Zt(ws);break;case 24:ha(ln)}}function Qo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&t)===t){r=void 0;var f=a.create,y=a.inst;r=f(),y.destroy=r}a=a.next}while(a!==c)}}catch(b){ze(n,n.return,b)}}function Wa(t,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&t)===t){var y=r.inst,b=y.destroy;if(b!==void 0){y.destroy=void 0,c=n;var I=a,j=b;try{j()}catch(at){ze(c,I,at)}}}r=r.next}while(r!==f)}}catch(at){ze(n,n.return,at)}}function I0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Ag(n,a)}catch(r){ze(t,t.return,r)}}}function B0(t,n,a){a.props=Os(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){ze(t,n,r)}}function Gi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var c=t.stateNode,f=oa(t.memoizedProps,c);(c.ref===null||c.ref.name!==f)&&(c.ref=qv(f)),r=c.ref;break;case 7:if(t.stateNode===null){var y=new li(t);m(t.child,!1,GM,y,void 0,void 0),t.stateNode=y}r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(b){ze(t,n,b)}}function wn(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){ze(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){ze(t,n,c)}else a.current=null}function Uu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)Qv(t.stateNode,n[a])}function F0(t){for(var n=t.return;n!==null&&(yh(n)&&Qv(t.stateNode,n.stateNode),!_h(n));)n=n.return}function Jo(t){for(var n=t.return;n!==null&&(yh(n)&&VM(t.stateNode,n.stateNode),!_h(n));)n=n.return}function _h(t){return t.tag===5||t.tag===3||t.tag===27}function yh(t){return t&&t.tag===7&&t.stateNode!==null}function xh(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){ze(t,t.return,c)}}function Sh(t,n,a){try{var r=t.stateNode;EM(r,t.type,a,n),r[Lt]=n}catch(c){ze(t,t.return,c)}}function H0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ts(t.type)||t.tag===4}function Mh(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||H0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ts(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Eh(t,n,a,r){var c=t.tag;if(c===5||c===6)c=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(c,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(c),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Bi)),Uu(t,r),Ue=!0;else if(c!==4&&(c===27&&(Uu(t,r),r=null,ts(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(Eh(t,n,a,r),t=t.sibling;t!==null;)Eh(t,n,a,r),t=t.sibling}function Lu(t,n,a,r){var c=t.tag;if(c===5||c===6)c=t.stateNode,n?a.insertBefore(c,n):a.appendChild(c),Uu(t,r),Ue=!0;else if(c!==4&&(c===27&&(Uu(t,r),r=null,ts(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(Lu(t,n,a,r),t=t.sibling;t!==null;)Lu(t,n,a,r),t=t.sibling}function G0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Dn(n,r,a),n[Rt]=t,n[Lt]=a}catch(f){ze(t,t.return,f)}}var Ou=!1,ai=null;function V0(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Ou=!0)}var Vi=null;function X0(){var t=Vi;return Vi=null,t}var Qn=0;function Er(t,n,a,r,c){return Qn=0,k0(t.child,n,a,r,c)}function k0(t,n,a,r,c){for(var f=!1;t!==null;){if(t.tag===5){var y=t.stateNode;if(r!==null){var b=rd(y);r.push(b),b.view&&(f=!0)}else f||rd(y).view&&(f=!0);Ou=!0,Xv(y,Qn===0?n:n+"_"+Qn,a),Qn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&c||k0(t.child,n,a,r,c)&&(f=!0));t=t.sibling}return f}function Xi(t,n){for(;t!==null;)t.tag===5?kv(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Xi(t.child,n)),t=t.sibling}function Pu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Pu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=la(n.default,n.share),n!=="none"&&(Er(t,a,n,null,!1)||Xi(t.child,!1))}t=t.sibling}}function Th(t,n){if(t.tag===30){var a=t.stateNode,r=t.memoizedProps,c=oa(r,a),f=la(r.default,a.paired?r.share:r.enter);f!=="none"?Er(t,c,f,null,!1)?(Pu(t),a.paired||n||Nr(t,r.onEnter)):Xi(t.child,!1):Pu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Th(t,n),t=t.sibling;else Pu(t)}function bh(t){if(ai!==null&&ai.size!==0){var n=ai;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var c=n.get(r);if(c!==void 0){var f=la(a.default,a.share);if(f!=="none"&&(Er(t,r,f,null,!1)?(f=t.stateNode,c.paired=f,f.paired=c,Nr(t,a.onShare)):Xi(t.child,!1)),n.delete(r),n.size===0)break}}}bh(t)}t=t.sibling}}}function Ah(t){if(t.tag===30){var n=t.memoizedProps,a=oa(n,t.stateNode),r=ai!==null?ai.get(a):void 0,c=la(n.default,r!==void 0?n.share:n.exit);c!=="none"&&(Er(t,a,c,null,!1)?r!==void 0?(c=t.stateNode,r.paired=c,c.paired=r,ai.delete(a),Nr(t,n.onShare)):Nr(t,n.onExit):Xi(t.child,!1)),ai!==null&&bh(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Ah(t),t=t.sibling;else ai!==null&&bh(t)}function q0(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=oa(n,t.stateNode);n=la(n.default,n.update),t.flags&=-5,n!=="none"&&Er(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&q0(t);t=t.sibling}}function Ch(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Xi(t.child,!1))}Ch(t)}t=t.sibling}}function zu(t){if(t.tag===30)t.stateNode.paired=null,Xi(t.child,!1),Ch(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)zu(t),t=t.sibling;else Ch(t)}function Y0(t){for(t=t.child;t!==null;)t.tag===30?Xi(t.child,!1):(t.subtreeFlags&33554432)!==0&&Y0(t),t=t.sibling}function Rh(t,n,a,r,c,f,y){for(var b=!1;n!==null;){if(n.tag===5){var I=n.stateNode;if(f!==null&&Qn<f.length){var j=f[Qn],at=rd(I);(j.view||at.view)&&(b=!0);var pt;if(pt=(t.flags&4)===0)if(at.clip)pt=!0;else{pt=j.rect;var Y=at.rect;pt=pt.y!==Y.y||pt.x!==Y.x||pt.height!==Y.height||pt.width!==Y.width}pt&&(t.flags|=4),at.abs?at=!j.abs:(j=j.rect,at=at.rect,at=j.height!==at.height||j.width!==at.width),at&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&Xv(I,Qn===0?a:a+"_"+Qn,c),b&&(t.flags&4)!==0||(Vi===null&&(Vi=[]),Vi.push(I,Qn===0?r:r+"_"+Qn,n.memoizedProps)),Qn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&y?t.flags|=n.flags&32:Rh(t,n.child,a,r,c,f,y)&&(b=!0));n=n.sibling}return b}function W0(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,r=t.stateNode,c=oa(a,r),f=la(a.default,a.update),y;y=t.memoizedState,t.memoizedState=null,r=t;var b=t.child;Qn=0,c=Rh(r,b,c,c,f,y,!1),(t.flags&4)!==0&&c&&Nr(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&W0(t);t=t.sibling}}var Sn=!1,Oe=!1,ki=!1,wh=!1,j0=typeof WeakSet=="function"?WeakSet:Set,Mn=null,qi=!1,$o=!1,Iu=!1,Dh=!1;function JS(t,n,a){if(t=t.containerInfo,ed=Gr,t=Jm(t),gf(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var c=r.getSelection&&r.getSelection();if(c&&c.rangeCount!==0){r=c.anchorNode;var f=c.anchorOffset,y=c.focusNode;c=c.focusOffset;try{r.nodeType,y.nodeType}catch{r=null;break t}var b=0,I=-1,j=-1,at=0,pt=0,Y=t,et=null;e:for(;;){for(var Nt;Y!==r||f!==0&&Y.nodeType!==3||(I=b+f),Y!==y||c!==0&&Y.nodeType!==3||(j=b+c),Y.nodeType===3&&(b+=Y.nodeValue.length),(Nt=Y.firstChild)!==null;)et=Y,Y=Nt;for(;;){if(Y===t)break e;if(et===r&&++at===f&&(I=b),et===y&&++pt===c&&(j=b),(Nt=Y.nextSibling)!==null)break;Y=et,et=Y.parentNode}Y=Nt}r=I===-1||j===-1?null:{start:I,end:j}}else r=null}r=r||{start:0,end:0}}else r=null;for(nd={focusedElem:t,selectionRange:r},Gr=!1,a=(a&335544064)===a,Mn=n,n=a?9270:1024;Mn!==null;){if(t=Mn,a&&(r=t.deletions,r!==null))for(f=0;f<r.length;f++)a&&Ah(r[f]);if(t.alternate===null&&(t.flags&2)!==0)a&&V0(t),Bu(a);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&Ah(r),Bu(a);continue}else if(r!==null&&r.memoizedState!==null){a&&V0(t),Bu(a);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,Mn=r):(a&&q0(t),Bu(a))}}ai=null}function Bu(t){for(;Mn!==null;){var n=Mn,a=t,r=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&r!==null){a=void 0,c=r.memoizedProps,r=r.memoizedState;var f=n.stateNode;try{var y=Os(n.type,c);a=f.getSnapshotBeforeUpdate(y,r),f.__reactInternalSnapshotBeforeUpdate=a}catch(b){ze(n,n.return,b)}}break;case 3:if((c&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)ud(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":ud(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=oa(r.memoizedProps,r.stateNode),c=n.memoizedProps,c=la(c.default,c.update),c!=="none"&&Er(r,a,c,r.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,Mn=r;break}Mn=n.return}}function Z0(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Yi(t,a),r&4&&Qo(5,a);break;case 1:if(Yi(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){ze(a,a.return,y)}else{var c=Os(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){ze(a,a.return,y)}}r&64&&I0(a),r&512&&Gi(a,a.return);break;case 3:if(Yi(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Ag(t,n)}catch(y){ze(a,a.return,y)}}break;case 27:n===null&&r&4&&G0(a);case 26:case 5:Yi(t,a),n===null&&r&4&&xh(a),r&512&&Gi(a,a.return);break;case 12:Yi(t,a);break;case 31:Yi(t,a),r&4&&$0(t,a);break;case 13:Yi(t,a),r&4&&tv(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=cM.bind(null,a),qM(t,a))));break;case 22:if(r=a.memoizedState!==null||Sn,!r){var f=n!==null&&n.memoizedState!==null||Oe;n=Sn,c=Oe,Sn=r,(Oe=f)&&!c?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Ri(t,a,r)):Yi(t,a),Sn=n,Oe=c}break;case 30:Yi(t,a),r&512&&Gi(a,a.return);break;case 7:r&512&&Gi(a,a.return);default:Yi(t,a)}}function Nh(t,n){for(t=t.child;t!==null;)K0(t,n),t=t.sibling}function K0(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var c=t.stateNode,f=t.memoizedProps.style,y=f!=null&&f.hasOwnProperty("display")?f.display:null;c.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(I){ze(t,t.return,I)}Uh(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Ue=!0}catch(I){ze(t,t.return,I)}break;case 18:try{var b=t.stateNode;n?Vv(b,!0):Vv(t.stateNode,!1)}catch(I){ze(t,t.return,I)}break;case 22:case 23:t.memoizedState===null&&Nh(t,n);break;default:Nh(t,n)}}function Uh(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,r=n;switch(a.tag){case 4:K0(a,r);break t;case 22:a.memoizedState===null&&Uh(a,r);break t;default:Uh(a,r)}}t=t.sibling}}function Q0(t){var n=t.alternate;n!==null&&(t.alternate=null,Q0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Se(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var en=null,Jn=!1;function Ai(t,n,a){for(a=a.child;a!==null;)J0(t,n,a),a=a.sibling}function J0(t,n,a){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(Ce,a)}catch{}switch(a.tag){case 26:Oe||wn(a,n),Ai(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Oe&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Oe||wn(a,n),Jo(a);var r=en,c=Jn;ts(a.type)&&(en=a.stateNode,Jn=!1),Ai(t,n,a),n_(a.stateNode,a.type,a.memoizedProps),en=r,Jn=c;break;case 5:Oe||wn(a,n),Jo(a);case 6:if(a.tag===6&&Jo(a),r=en,c=Jn,en=null,Ai(t,n,a),en=r,Jn=c,en!==null)if(Jn)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(a.stateNode),Ue=!0}catch(f){ze(a,n,f)}else try{en.removeChild(a.stateNode),Ue=!0}catch(f){ze(a,n,f)}break;case 18:en!==null&&(Jn?(t=en,Gv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Vr(t)):Gv(en,a.stateNode));break;case 4:r=en,c=Jn,en=a.stateNode.containerInfo,Jn=!0,Ai(t,n,a),en=r,Jn=c;break;case 0:case 11:case 14:case 15:Wa(2,a,n),Oe||Wa(4,a,n),Ai(t,n,a);break;case 1:Oe||(wn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&B0(a,n,r)),Ai(t,n,a);break;case 21:Ai(t,n,a);break;case 22:Oe=(r=Oe)||a.memoizedState!==null,Ai(t,n,a),Oe=r;break;case 30:wn(a,n),Ai(t,n,a);break;case 7:Oe||wn(a,n),Ai(t,n,a);break;default:Ai(t,n,a)}}function $0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Vr(t)}catch(a){ze(n,n.return,a)}}}function tv(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Vr(t)}catch(a){ze(n,n.return,a)}}function $S(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new j0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new j0),n;default:throw Error(s(435,t.tag))}}function Fu(t,n){var a=$S(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=fM.bind(null,t,r);r.then(c,c)}})}function kn(t,n,a){var r=n.deletions;if(r!==null)for(var c=0;c<r.length;c++){var f=r[c],y=t,b=n,I=b;t:for(;I!==null;){switch(I.tag){case 27:if(ts(I.type)){en=I.stateNode,Jn=!1;break t}break;case 5:en=I.stateNode,Jn=!1;break t;case 3:case 4:en=I.stateNode.containerInfo,Jn=!0;break t}I=I.return}if(en===null)throw Error(s(160));J0(y,b,f),en=null,Jn=!1,y=f.alternate,y!==null&&(y.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)ev(n,t,a),n=n.sibling}var Ci=null;function ev(t,n,a){var r=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(c&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var f=0;f<r.length;f++){var y=r[f];y.ref.impl=y.nextImpl}kn(n,t,a),qn(t),c&4&&(Wa(3,t,t.return),Qo(3,t),Wa(5,t,t.return));break;case 1:kn(n,t,a),qn(t),c&512&&(Oe||r===null||wn(r,r.return)),c&64&&Sn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Ci,kn(n,t,a),qn(t),c&512&&(Oe||r===null||wn(r,r.return)),c&4)if(c=r!==null?r.memoizedState:null,a=t.memoizedState,r===null)if(a===null)if(t.stateNode===null)if(Sn)t.stateNode=Bv(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,c=f.ownerDocument||f;e:switch(n){case"title":r=c.getElementsByTagName("title")[0],(!r||r[We]||r[Rt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=c.createElement(n),c.head.insertBefore(r,c.querySelector("head > title"))),Dn(r,n,a),r[Rt]=t,Qe(r),n=r;break t;case"link":if(f=l_("link","href",c).get(n+(a.href||""))){for(y=0;y<f.length;y++)if(r=f[y],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(y,1);break e}}r=c.createElement(n),Dn(r,n,a),c.head.appendChild(r);break;case"meta":if(f=l_("meta","content",c).get(n+(a.content||""))){for(y=0;y<f.length;y++)if(r=f[y],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(y,1);break e}}r=c.createElement(n),Dn(r,n,a),c.head.appendChild(r);break;default:throw Error(s(468,n))}r[Rt]=t,Qe(r),n=r}t.stateNode=n}else Sn||gd(f,t.type,t.stateNode);else t.stateNode=o_(f,a,t.memoizedProps);else c!==a?(c===null?(n=r.stateNode,n===null||Oe||n.parentNode.removeChild(n)):c.count--,a===null?Sn||gd(f,t.type,t.stateNode):o_(f,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Sh(t,t.memoizedProps,r.memoizedProps);break;case 27:kn(n,t,a),qn(t),c&512&&(Oe||r===null||wn(r,r.return)),r!==null&&c&4&&Sh(t,t.memoizedProps,r.memoizedProps);break;case 5:if(f=ki,ki=!1,kn(n,t,a),ki=f,qn(t),c&512&&(Oe||r===null||wn(r,r.return)),t.flags&32){n=t.stateNode;try{sr(n,""),Ue=!0}catch(at){ze(t,t.return,at)}}c&4&&t.stateNode!=null&&(n=t.memoizedProps,Sh(t,n,r!==null?r.memoizedProps:n)),c&1024&&(wh=!0);break;case 6:if(kn(n,t,a),qn(t),c&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,Ue=!0}catch(at){ze(t,t.return,at)}}break;case 3:if(Ue=!1,tc=null,f=Ci,Ci=ll(n.containerInfo),kn(n,t,a),Ci=f,qn(t),c&4&&r!==null&&r.memoizedState.isDehydrated)try{Vr(n.containerInfo)}catch(at){ze(t,t.return,at)}wh&&(wh=!1,nv(t)),Ue=!1;break;case 4:c=ki,ki=Sn,r=Mm(),f=Ci,Ci=ll(t.stateNode.containerInfo),kn(n,t,a),qn(t),Ci=f,Ue&&$o&&(Iu=!0),Ue=r,ki=c;break;case 12:kn(n,t,a),qn(t);break;case 31:kn(n,t,a),qn(t),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Fu(t,n)));break;case 13:kn(n,t,a),qn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Vu=q()),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Fu(t,n)));break;case 22:f=t.memoizedState!==null,y=r!==null&&r.memoizedState!==null;var b=Sn,I=Oe,j=ki;Sn=b||f,ki=j||f,Oe=I||y,kn(n,t,a),Oe=I,ki=j,Sn=b,qn(t),c&8192&&(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||r===null||y||Sn||Oe||(n=y||Oe,a=Sn,r=Oe,Sn=f||Sn,Oe=n,ja(t,2),Sn=a,Oe=r),!f&&ki||Nh(t,f)),c&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Fu(t,a))));break;case 19:kn(n,t,a),qn(t),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Fu(t,n)));break;case 30:c&512&&(Oe||r===null||wn(r,r.return)),c=Mm(),f=$o,y=(a&335544064)===a,b=t.memoizedProps,$o=y&&la(b.default,b.update)!=="none",kn(n,t,a),qn(t),y&&r!==null&&Ue&&(t.flags|=4),$o=f,Ue=c;break;case 21:break;case 7:c&512&&(Oe||r===null||wn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:kn(n,t,a),qn(t)}}function qn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(H0(r)){a=r;break}r=r.return}r=null;for(var c=t.return;c!==null;){if(yh(c)){var f=c.stateNode;r===null?r=[f]:r.push(f)}if(_h(c))break;c=c.return}var y=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var b=a.stateNode,I=Mh(t);Lu(t,I,b,y);break;case 5:var j=a.stateNode;a.flags&32&&(sr(j,""),a.flags&=-33);var at=Mh(t);Lu(t,at,j,y);break;case 3:case 4:var pt=a.stateNode.containerInfo,Y=Mh(t);Eh(t,Y,pt,y);break;default:throw Error(s(161))}}catch(et){ze(t,t.return,et)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function nv(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;nv(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Gr=!0,n.reset(),Gr=!1),t=t.sibling}}function Tr(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)iv(n,t),n=n.sibling;else W0(n)}function iv(t,n){var a=t.alternate;if(a===null)Th(t,!1);else switch(t.tag){case 3:if(Dh=qi=!1,X0(),Tr(n,t),!qi&&!Iu){if(t=Vi,t!==null)for(var r=0;r<t.length;r+=3){a=t[r];var c=t[r+1];kv(a,t[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Dh=!0}Vi=null;break;case 5:Tr(n,t);break;case 4:r=qi,qi=!1,Tr(n,t),qi&&(Iu=!0),qi=r;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?Th(t,!1):Tr(n,t));break;case 30:r=qi,c=X0(),qi=!1,Tr(n,t),qi&&(t.flags|=4);var f=t.memoizedProps,y=t.stateNode;n=oa(f,y),y=oa(a.memoizedProps,y);var b=la(f.default,f.update);b==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=t.child,Qn=0,n=Rh(t,a,n,y,b,f,!0),Qn!==(f===null?0:f.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Nr(t,t.memoizedProps.onUpdate),Vi=c):c!==null&&(c.push.apply(c,Vi),Vi=c),qi=(t.flags&32)!==0?!0:r;break;default:Tr(n,t)}}function Yi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Z0(t,n.alternate,n),n=n.sibling}function ja(t,n){for(t=t.child;t!==null;){var a=t,r=n;switch(a.tag){case 0:case 11:case 14:case 15:Wa(4,a,a.return),ja(a,r);break;case 1:wn(a,a.return);var c=a.stateNode;typeof c.componentWillUnmount=="function"&&B0(a,a.return,c),ja(a,r);break;case 27:(r&2)!==0&&n_(a.stateNode,a.type,a.memoizedProps);case 5:wn(a,a.return),a.tag!==5&&a.tag!==27||Jo(a),ja(a,r);break;case 6:Jo(a);break;case 26:wn(a,a.return),c=a.stateNode,a.memoizedState!==null||c===null||Oe||c.parentNode.removeChild(c),ja(a,r);break;case 22:a.memoizedState===null&&ja(a,r);break;case 30:wn(a,a.return),ja(a,r);break;case 7:wn(a,a.return);default:ja(a,r)}t=t.sibling}}function Ri(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,c=t,f=n,y=f.flags,b=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:Ri(c,f,a),Qo(4,f);break;case 1:if(Ri(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(at){ze(r,r.return,at)}if(r=f,c=r.updateQueue,c!==null){var I=r.stateNode;try{var j=c.shared.hiddenCallbacks;if(j!==null)for(c.shared.hiddenCallbacks=null,c=0;c<j.length;c++)bg(j[c],I)}catch(at){ze(r,r.return,at)}}b&&y&64&&I0(f),Gi(f,f.return);break;case 27:(a&2)!==0&&G0(f);case 5:f.tag!==5&&f.tag!==27||F0(f),Ri(c,f,a),b&&r===null&&y&4&&xh(f),Gi(f,f.return);break;case 6:F0(f);break;case 26:I=f.stateNode,f.memoizedState!==null||I===null||Sn||gd(ll(I.ownerDocument),f.type,I),Ri(c,f,a),b&&r===null&&y&4&&xh(f),Gi(f,f.return);break;case 12:Ri(c,f,a);break;case 31:Ri(c,f,a),b&&y&4&&$0(c,f);break;case 13:Ri(c,f,a),b&&y&4&&tv(c,f);break;case 22:f.memoizedState===null&&Ri(c,f,a),Gi(f,f.return);break;case 30:Ri(c,f,a),Gi(f,f.return);break;case 7:Gi(f,f.return);default:Ri(c,f,a)}n=n.sibling}}function Lh(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Bo(a))}function Oh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Bo(t))}function Si(t,n,a,r){var c=(a&335544064)===a;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)av(t,n,a,r),n=n.sibling;else c&&Y0(n)}function av(t,n,a,r){var c=(a&335544064)===a;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&zu(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:Si(t,n,a,r),f&2048&&Qo(9,n);break;case 1:Si(t,n,a,r);break;case 3:Si(t,n,a,r),c&&Dh&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&Bo(f)));break;case 12:if(f&2048){Si(t,n,a,r),f=n.stateNode;try{var y=n.memoizedProps,b=y.id,I=y.onPostCommit;typeof I=="function"&&I(b,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(j){ze(n,n.return,j)}}else Si(t,n,a,r);break;case 31:Si(t,n,a,r);break;case 13:Si(t,n,a,r);break;case 23:break;case 22:y=n.stateNode,b=n.alternate,n.memoizedState!==null?(c&&b!==null&&b.memoizedState===null&&zu(b),y._visibility&2?Si(t,n,a,r):tl(t,n)):(c&&b!==null&&b.memoizedState!==null&&zu(n),y._visibility&2?Si(t,n,a,r):(y._visibility|=2,br(t,n,a,r,(n.subtreeFlags&10256)!==0||!1))),f&2048&&Lh(b,n);break;case 24:Si(t,n,a,r),f&2048&&Oh(n.alternate,n);break;case 30:c&&(f=n.alternate,f!==null&&(Xi(f.child,!0),Xi(n.child,!0))),Si(t,n,a,r);break;default:Si(t,n,a,r)}}function br(t,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,y=n,b=a,I=r,j=y.flags;switch(y.tag){case 0:case 11:case 15:br(f,y,b,I,c),Qo(8,y);break;case 23:break;case 22:var at=y.stateNode;y.memoizedState!==null?at._visibility&2?br(f,y,b,I,c):tl(f,y):(at._visibility|=2,br(f,y,b,I,c)),c&&j&2048&&Lh(y.alternate,y);break;case 24:br(f,y,b,I,c),c&&j&2048&&Oh(y.alternate,y);break;default:br(f,y,b,I,c)}n=n.sibling}}function tl(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,c=r.flags;switch(r.tag){case 22:tl(a,r),c&2048&&Lh(r.alternate,r);break;case 24:tl(a,r),c&2048&&Oh(r.alternate,r);break;default:tl(a,r)}n=n.sibling}}var Ps=8192;function zs(t,n,a){if(t.subtreeFlags&Ps)for(t=t.child;t!==null;)sv(t,n,a),t=t.sibling}function sv(t,n,a){switch(t.tag){case 26:zs(t,n,a),t.flags&Ps&&(t.memoizedState!==null?sE(a,Ci,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&h_(a,t)));break;case 5:zs(t,n,a),t.flags&Ps&&(t=t.stateNode,(n&335544128)===n&&h_(a,t));break;case 3:case 4:var r=Ci;Ci=ll(t.stateNode.containerInfo),zs(t,n,a),Ci=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Ps,Ps=16777216,zs(t,n,a),Ps=r):zs(t,n,a));break;case 30:if((t.flags&Ps)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var c=t.stateNode;c.paired=null,ai===null&&(ai=new Map),ai.set(r,c)}zs(t,n,a);break;default:zs(t,n,a)}}function rv(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function el(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Mn=r,lv(r,t)}rv(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ov(t),t=t.sibling}function ov(t){switch(t.tag){case 0:case 11:case 15:el(t),t.flags&2048&&Wa(9,t,t.return);break;case 3:el(t);break;case 12:el(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Hu(t)):el(t);break;default:el(t)}}function Hu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Mn=r,lv(r,t)}rv(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Wa(8,n,n.return),Hu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Hu(n));break;default:Hu(n)}t=t.sibling}}function lv(t,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:Wa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Bo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Mn=r;else t:for(a=t;Mn!==null;){r=Mn;var c=r.sibling,f=r.return;if(Q0(r),r===a){Mn=null;break t}if(c!==null){c.return=f,Mn=c;break t}Mn=f}}}var tM={getCacheForType:function(t){var n=An(ln),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(ln).controller.signal}},eM=typeof WeakMap=="function"?WeakMap:Map,Le=0,qe=null,Me=null,be=0,Pe=0,si=null,Za=!1,Ar=!1,Ph=!1,va=0,sn=0,Ka=0,Is=0,Gu=0,ri=0,Cr=0,nl=null,$n=null,zh=!1,Vu=0,uv=0,Xu=1/0,ku=null,Qa=null,nn=0,wi=null,Bs=null,Wi=0,Ih=0,Bh=null,cv=null,Rr=null,wr=null,Dr=null,il=0,qu=null;function oi(){return(Le&2)!==0&&be!==0?be&-be:vt.T!==null?jh():J()}function fv(){if(ri===0)if((be&536870912)===0||ve){var t=_s;_s<<=1,(_s&3932160)===0&&(_s=262144),ri=t}else ri=536870912;return t=Cn.current,t!==null&&(t.flags|=32),ri}function Nr(t,n){if(n!=null){var a=t.stateNode,r=a.ref;r===null&&(r=a.ref=qv(oa(t.memoizedProps,a))),wr===null&&(wr=[]),wr.push(n.bind(null,r))}}function ti(t,n,a){(t===qe&&(Pe===2||Pe===9)||t.cancelPendingCommit!==null)&&(Ur(t,0),Ja(t,be,ri,!1)),ys(t,a),((Le&2)===0||t!==qe)&&(t===qe&&((Le&2)===0&&(Is|=a),sn===4&&Ja(t,be,ri,!1)),ji(t))}function hv(t,n,a){if((Le&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ua(t,n),c=r?aM(t,n):Hh(t,n,!0),f=r;do{if(c===0){Ar&&!r&&Ja(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!nM(a)){c=Hh(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var b=t;c=nl;var I=b.current.memoizedState.isDehydrated;if(I&&(Ur(b,y).flags|=256),y=Hh(b,y,!1),y!==2&&y!==6){if(Ph&&!I){b.errorRecoveryDisabledLanes|=f,Is|=f,c=4;break t}f=$n,$n=c,f!==null&&($n===null?$n=f:$n.push.apply($n,f))}c=y}if(f=!1,c!==2)continue}}if(c===1){Ur(t,0),Ja(t,n,0,!0);break}t:{switch(r=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:Ja(r,n,ri,!Za);break t;case 2:$n=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Vu+300-q(),10<c)){if(Ja(r,n,ri,!Za),ia(r,0,!0)!==0)break t;Wi=n,r.timeoutHandle=sd(dv.bind(null,r,a,$n,ku,zh,n,ri,Is,Cr,Za,f,"Throttled",-0,0),c);break t}dv(r,a,$n,ku,zh,n,ri,Is,Cr,Za,f,null,-0,0)}}break}while(!0);ji(t)}function dv(t,n,a,r,c,f,y,b,I,j,at,pt,Y,et){t.timeoutHandle=-1;var Nt=n.subtreeFlags,kt=(f&335544064)===f;if(pt=null,(kt||Nt&8192||(Nt&16785408)===16785408)&&(pt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Bi},ai=null,sv(n,f,pt),kt&&(Nt=pt,kt=t.containerInfo,kt=(kt.nodeType===9?kt:kt.ownerDocument).__reactViewTransition,kt!=null&&(Nt.count++,Nt.waitingForViewTransition=!0,Nt=fl.bind(Nt),kt.finished.then(Nt,Nt))),Nt=(f&62914560)===f?Vu-q():(f&4194048)===f?uv-q():0,Nt=rE(pt,Nt),Nt!==null)){Wi=f,t.cancelPendingCommit=Nt(Sv.bind(null,t,n,f,a,r,c,y,b,I,j,at,pt,null,Y,et)),Ja(t,f,y,!j);return}Sv(t,n,f,a,r,c,y,b,I,j,at,pt)}function nM(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!ni(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ja(t,n,a,r){n=bo(t,n),n&=~Gu,n&=~Is,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var c=n;0<c;){var f=31-Ln(c),y=1<<f;r[f]=-1,c&=~y}a!==0&&Xl(t,a,n)}function Yu(){return(Le&6)===0?(al(0),!1):!0}function Fh(){if(Me!==null){if(Pe===0)var t=Me.return;else t=Me,fa=bs=null,Wf(t),_r=null,Go=0,t=Me;for(;t!==null;)z0(t.alternate,t),t=t.return;Me=null}}function Ur(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,AM(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Wi=0,Fh(),qe=t,Me=a=ua(t.current,null),be=n,Pe=0,si=null,Za=!1,Ar=Ua(t,n),Ph=!1,Cr=ri=Gu=Is=Ka=sn=0,$n=nl=null,zh=!1,va=bo(t,n),tu(),a}function pv(t,n){he=null,vt.H=bu,n===vr||n===fu?(n=Sg(),Pe=3):n===Of?(n=Sg(),Pe=4):Pe=n===lh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,si=n,Me===null&&(sn=1,Au(t,vi(n,t.current)))}function mv(){var t=Cn.current;return t===null?!0:(be&4194048)===be?Pn===null:(be&62914560)===be||(be&536870912)!==0?t===Pn:!1}function gv(){var t=vt.H;return vt.H=bu,t===null?bu:t}function vv(){var t=vt.A;return vt.A=tM,t}function Wu(){sn=4,Za||(be&4194048)!==be&&Cn.current!==null||(Ar=!0),(Ka&134217727)===0&&(Is&134217727)===0||qe===null||Ja(qe,be,ri,!1)}function Hh(t,n,a){var r=Le;Le|=2;var c=gv(),f=vv();(qe!==t||be!==n)&&(ku=null,Ur(t,n)),n=!1;var y=sn;t:do try{if(Pe!==0&&Me!==null){var b=Me,I=si;switch(Pe){case 8:Fh(),y=6;break t;case 3:case 2:case 9:case 6:Cn.current===null&&(n=!0);var j=Pe;if(Pe=0,si=null,Lr(t,b,I,j),a&&Ar){y=0;break t}break;default:j=Pe,Pe=0,si=null,Lr(t,b,I,j)}}iM(),y=sn;break}catch(at){pv(t,at)}while(!0);return n&&t.shellSuspendCounter++,fa=bs=null,Le=r,vt.H=c,vt.A=f,Me===null&&(qe=null,be=0,tu()),y}function iM(){for(;Me!==null;)_v(Me)}function aM(t,n){var a=Le;Le|=2;var r=gv(),c=vv();qe!==t||be!==n?(ku=null,Xu=q()+500,Ur(t,n)):Ar=Ua(t,n);t:do try{if(Pe!==0&&Me!==null){n=Me;var f=si;e:switch(Pe){case 1:Pe=0,si=null,Lr(t,n,f,1);break;case 2:case 9:if(yg(f)){Pe=0,si=null,yv(n);break}n=function(){Pe!==2&&Pe!==9||qe!==t||(Pe=7),ji(t)},f.then(n,n);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:yg(f)?(Pe=0,si=null,yv(n)):(Pe=0,si=null,Lr(t,n,f,7));break;case 5:var y=null;switch(Me.tag){case 26:y=Me.memoizedState;case 5:case 27:var b=Me;if(y?c_(y):b.stateNode.complete){Pe=0,si=null;var I=b.sibling;if(I!==null)Me=I;else{var j=b.return;j!==null?(Me=j,ju(j)):Me=null}break e}}Pe=0,si=null,Lr(t,n,f,5);break;case 6:Pe=0,si=null,Lr(t,n,f,6);break;case 8:Fh(),sn=6;break t;default:throw Error(s(462))}}sM();break}catch(at){pv(t,at)}while(!0);return fa=bs=null,vt.H=r,vt.A=c,Le=a,Me!==null?0:(qe=null,be=0,tu(),sn)}function sM(){for(;Me!==null&&!fe();)_v(Me)}function _v(t){var n=O0(t.alternate,t,va);t.memoizedProps=t.pendingProps,n===null?ju(t):Me=n}function yv(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=C0(a,n,n.pendingProps,n.type,void 0,be);break;case 11:n=C0(a,n,n.pendingProps,n.type.render,n.ref,be);break;case 5:Wf(n);var r=n;r===xn&&(ve?(ru(r),r.tag===5&&r.stateNode!=null&&(je=r.stateNode)):(ru(r),ve=!0));default:z0(a,n),n=Me=lg(n,va),n=O0(a,n,va)}t.memoizedProps=t.pendingProps,n===null?ju(t):Me=n}function Lr(t,n,a,r){fa=bs=null,Wf(n),_r=null,Go=0;var c=n.return;try{if(YS(t,c,n,a,be)){sn=1,Au(t,vi(a,t.current)),Me=null;return}}catch(f){if(c!==null)throw Me=c,f;sn=1,Au(t,vi(a,t.current)),Me=null;return}n.flags&32768?(ve||r===1?t=!0:Ar||(be&536870912)!==0?t=!1:(Za=t=!0,(r===2||r===9||r===3||r===6)&&(r=Cn.current,r!==null&&r.tag===13&&(r.flags|=16384))),xv(n,t)):ju(n)}function ju(t){var n=t;do{if((n.flags&32768)!==0){xv(n,Za);return}t=n.return;var a=KS(n.alternate,n,va);if(a!==null){Me=a;return}if(n=n.sibling,n!==null){Me=n;return}Me=n=t}while(n!==null);sn===0&&(sn=5)}function xv(t,n){do{var a=QS(t.alternate,t);if(a!==null){a.flags&=32767,Me=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Me=t;return}Me=t=a}while(t!==null);sn=6,Me=null}function Sv(t,n,a,r,c,f,y,b,I,j,at,pt){t.cancelPendingCommit=null;do Zu();while(nn!==0);if((Le&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===qe&&(Me=qe=null,be=0),Bs=n,wi=t,Wi=a,Bh=c,cv=r,rM(t,n,a,y,b,I,pt)}}function rM(t,n,a,r,c,f,y){var b=n.lanes|n.childLanes;if(Ih=b,b|=Sf,Qc(t,a,b,r,c,f),wr=null,(a&335544064)===a?(Dr=OS(t),r=10262):(Dr=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,hM(Pt,function(){return kh(),null})):(t.callbackNode=null,t.callbackPriority=0),Ou=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=vt.T,vt.T=null,c=xt.p,xt.p=2,f=Le,Le|=4;try{JS(t,n,a)}finally{Le=f,xt.p=c,vt.T=r}}nn=1,Ou?Rr=UM(y,t.containerInfo,Dr,Gh,Vh,lM,Xh,kh,oM):(Gh(),Vh(),Xh())}function oM(t){if(nn!==0){var n=wi.onRecoverableError;n(t,{componentStack:null})}}function lM(){nn===3&&(nn=0,iv(Bs,wi),nn=4)}function Gh(){if(nn===1){nn=0;var t=wi,n=Bs,a=Wi,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=vt.T,vt.T=null;var c=xt.p;xt.p=2;var f=Le;Le|=4;try{$o=Iu=!1,ev(n,t,a),a=nd;var y=Jm(t.containerInfo),b=a.focusedElem,I=a.selectionRange;if(y!==b&&b&&b.ownerDocument&&Qm(b.ownerDocument.documentElement,b)){if(I!==null&&gf(b)){var j=I.start,at=I.end;if(at===void 0&&(at=j),"selectionStart"in b)b.selectionStart=j,b.selectionEnd=Math.min(at,b.value.length);else{var pt=b.ownerDocument||document,Y=pt&&pt.defaultView||window;if(Y.getSelection){var et=Y.getSelection(),Nt=b.textContent.length,kt=Math.min(I.start,Nt),de=I.end===void 0?kt:Math.min(I.end,Nt);!et.extend&&kt>de&&(y=de,de=kt,kt=y);var W=Km(b,kt),X=Km(b,de);if(W&&X&&(et.rangeCount!==1||et.anchorNode!==W.node||et.anchorOffset!==W.offset||et.focusNode!==X.node||et.focusOffset!==X.offset)){var $=pt.createRange();$.setStart(W.node,W.offset),et.removeAllRanges(),kt>de?(et.addRange($),et.extend(X.node,X.offset)):($.setEnd(X.node,X.offset),et.addRange($))}}}}for(pt=[],et=b;et=et.parentNode;)et.nodeType===1&&pt.push({element:et,left:et.scrollLeft,top:et.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<pt.length;b++){var dt=pt[b];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}Gr=!!ed,nd=ed=null}finally{Le=f,xt.p=c,vt.T=r}}t.current=n,nn=2}}function Vh(){if(nn===2){nn=0;var t=wi,n=Bs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=vt.T,vt.T=null;var r=xt.p;xt.p=2;var c=Le;Le|=4;try{Z0(t,n.alternate,n)}finally{Le=c,xt.p=r,vt.T=a}}nn=3}}function Xh(){if(nn===4||nn===3){nn=0;var t=Rr;Rr=null,Fe();var n=wi,a=Bs,r=Wi,c=cv,f=(r&335544064)===r?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?nn=5:(nn=0,Bs=wi=null,Mv(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(Qa=null),ot(r),a=a.stateNode,Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(Ce,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=vt.T,f=xt.p,xt.p=2,vt.T=null;try{for(var y=n.onRecoverableError,b=0;b<c.length;b++){var I=c[b];y(I.value,{componentStack:I.stack})}}finally{vt.T=a,xt.p=f}}if(c=wr,y=Dr,Dr=null,c!==null&&(wr=null,y===null&&(y=[]),t!==null))for(I=0;I<c.length;I++)a=(0,c[I])(y),a!==void 0&&t.finished.finally(a);(Wi&3)!==0&&Zu(),ji(n),f=n.pendingLanes,(r&261930)!==0&&(f&42)!==0?n===qu?il++:(il=0,qu=n):(il=0,qu=null),al(0)}}function Mv(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Bo(n)))}function Zu(){return Rr!==null&&(Rr.skipTransition(),Rr=null),Gh(),Vh(),Xh(),kh()}function kh(){if(nn!==5)return!1;var t=wi,n=Ih;Ih=0;var a=ot(Wi),r=vt.T,c=xt.p;try{xt.p=32>a?32:a,vt.T=null,a=Bh,Bh=null;var f=wi,y=Wi;if(nn=0,Bs=wi=null,Wi=0,(Le&6)!==0)throw Error(s(331));var b=Le;if(Le|=4,ov(f.current),av(f,f.current,y,a),Le=b,al(0,!1),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(Ce,f)}catch{}return!0}finally{xt.p=c,vt.T=r,Mv(t,n)}}function Ev(t,n,a){n=vi(a,n),n=oh(t.stateNode,n,2),t=Xa(t,n,2),t!==null&&(ys(t,2),ji(t))}function ze(t,n,a){if(t.tag===3)Ev(t,t,a);else for(;n!==null;){if(n.tag===3){Ev(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qa===null||!Qa.has(r))){t=vi(a,t),a=y0(2),r=Xa(n,a,2),r!==null&&(x0(a,r,n,t),ys(r,2),ji(r));break}}n=n.return}}function qh(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new eM;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(Ph=!0,c.add(a),t=uM.bind(null,t,n,a),n.then(t,t))}function uM(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,qe===t&&(be&a)===a&&((sn===4||sn===3&&(be&62914560)===be&&300>q()-Vu)&&(Le&2)===0?Ur(t,0):Gu|=a,Cr===be&&(Cr=0)),ji(t)}function Tv(t,n){n===0&&(n=Vl()),t=Ms(t,n),t!==null&&(ys(t,n),ji(t))}function cM(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Tv(t,a)}function fM(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Tv(t,a)}function hM(t,n){return Vt(t,n)}var Or=null,Pr=null,Yh=!1,Ku=!1,Wh=!1,$a=0;function ji(t){t!==Pr&&t.next===null&&(Pr===null?Or=Pr=t:Pr=Pr.next=t),Ku=!0,Yh||(Yh=!0,pM())}function al(t,n){if(!Wh&&Ku){Wh=!0;do for(var a=!1,r=Or;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var y=r.suspendedLanes,b=r.pingedLanes;f=(1<<31-Ln(42|t)+1)-1,f&=c&~(y&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Rv(r,f))}else f=be,f=ia(r,r===qe?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Ua(r,f)||(a=!0,Rv(r,f));r=r.next}while(a);Wh=!1}}function dM(){bv()}function bv(){Ku=Yh=!1;var t=0;$a!==0&&bM()&&(t=$a);for(var n=q(),a=null,r=Or;r!==null;){var c=r.next,f=Av(r,n);f===0?(r.next=null,a===null?Or=c:a.next=c,c===null&&(Pr=a)):(a=r,(t!==0||(f&3)!==0)&&(Ku=!0)),r=c}nn!==0&&nn!==5||al(t),$a!==0&&($a=0)}function Av(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var y=31-Ln(f),b=1<<y,I=c[y];I===-1?((b&a)===0||(b&r)!==0)&&(c[y]=Kc(b,n)):I<=n&&(t.expiredLanes|=b),f&=~b}if(n=qe,a=be,a=ia(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Pe===2||Pe===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&xe(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ua(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&xe(r),ot(a)){case 2:case 8:a=_t;break;case 32:a=Pt;break;case 268435456:a=ue;break;default:a=Pt}return r=Cv.bind(null,t),a=Vt(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&xe(r),t.callbackPriority=2,t.callbackNode=null,2}function Cv(t,n){if(nn!==0&&nn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Zu()&&t.callbackNode!==a)return null;var r=be;return r=ia(t,t===qe?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(hv(t,r,n),Av(t,q()),t.callbackNode!=null&&t.callbackNode===a?Cv.bind(null,t):null)}function Rv(t,n){if(Zu())return null;hv(t,n,!0)}function pM(){CM(function(){(Le&6)!==0?Vt(ft,dM):bv()})}function jh(){if($a===0){var t=Rs;t===0&&(t=vs,vs<<=1,(vs&261888)===0&&(vs=256)),$a=t}return $a}function wv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Yl(t)}function mM(t,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=wv((c[Lt]||null).action),y=r.submitter;y&&(n=(n=y[Lt]||null)?wv(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var b=new Kl("action","action",null,r,c);t.push({event:b,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if($a!==0){var I=new FormData(c,y);nh(a,{pending:!0,data:I,method:c.method,action:f},null,I)}}else typeof f=="function"&&(b.preventDefault(),I=new FormData(c,y),nh(a,{pending:!0,data:I,method:c.method,action:f},f,I))},currentTarget:c}]})}}for(var Zh=0;Zh<xf.length;Zh++){var Kh=xf[Zh],gM=Kh.toLowerCase(),vM=Kh[0].toUpperCase()+Kh.slice(1);bi(gM,"on"+vM)}bi(eg,"onAnimationEnd"),bi(ng,"onAnimationIteration"),bi(ig,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(AS,"onTransitionRun"),bi(CS,"onTransitionStart"),bi(RS,"onTransitionCancel"),bi(ag,"onTransitionEnd"),dn("onMouseEnter",["mouseout","mouseover"]),dn("onMouseLeave",["mouseout","mouseover"]),dn("onPointerEnter",["pointerout","pointerover"]),dn("onPointerLeave",["pointerout","pointerover"]),on("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),on("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),on("onBeforeInput",["compositionend","keypress","textInput","paste"]),on("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),on("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),on("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_M=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(sl));function Dv(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var y=r.length-1;0<=y;y--){var b=r[y],I=b.instance,j=b.currentTarget;if(b=b.listener,I!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=j;try{f(c)}catch(at){$l(at)}c.currentTarget=null,f=I}else for(y=0;y<r.length;y++){if(b=r[y],I=b.instance,j=b.currentTarget,b=b.listener,I!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=j;try{f(c)}catch(at){$l(at)}c.currentTarget=null,f=I}}}}function Ee(t,n){var a=n[re];a===void 0&&(a=n[re]=new Set);var r=t+"__bubble";a.has(r)||(Nv(n,t,2,!1),a.add(r))}function Qh(t,n,a){var r=0;n&&(r|=4),Nv(a,t,r,n)}var Qu="_reactListening"+Math.random().toString(36).slice(2);function Jh(t){if(!t[Qu]){t[Qu]=!0,La.forEach(function(a){a!=="selectionchange"&&(_M.has(a)||Qh(a,!1,t),Qh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Qu]||(n[Qu]=!0,Qh("selectionchange",!1,n))}}function Nv(t,n,a,r){switch(x_(n)){case 2:var c=cE;break;case 8:c=fE;break;default:c=_d}a=c.bind(null,n,a,t),c=void 0,!rf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function $h(t,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var y=r.tag;if(y===3||y===4){var b=r.stateNode.containerInfo;if(b===c)break;if(y===4)for(y=r.return;y!==null;){var I=y.tag;if((I===3||I===4)&&y.stateNode.containerInfo===c)return;y=y.return}for(;b!==null;){if(y=Wt(b),y===null)return;if(I=y.tag,I===5||I===6||I===26||I===27){r=f=y;continue t}b=b.parentNode}}r=r.return}Nm(function(){var j=f,at=af(a),pt=[];t:{var Y=sg.get(t);if(Y!==void 0){var et=Kl,Nt=t;switch(t){case"keypress":if(jl(a)===0)break t;case"keydown":case"keyup":et=nS;break;case"focusin":Nt="focus",et=cf;break;case"focusout":Nt="blur",et=cf;break;case"beforeblur":case"afterblur":et=cf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":et=Om;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":et=kx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":et=oS;break;case eg:case ng:case ig:et=Wx;break;case ag:et=uS;break;case"scroll":case"scrollend":et=Vx;break;case"wheel":et=fS;break;case"copy":case"cut":case"paste":et=Zx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":et=zm;break;case"submit":et=sS;break;case"toggle":case"beforetoggle":et=dS}var kt=(n&4)!==0,de=!kt&&(t==="scroll"||t==="scrollend"),W=kt?Y!==null?Y+"Capture":null:Y;kt=[];for(var X=j,$;X!==null;){var dt=X;if($=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||$===null||W===null||(dt=Co(X,W),dt!=null&&kt.push(rl(X,dt,$))),de)break;X=X.return}0<kt.length&&(Y=new et(Y,Nt,null,a,at),pt.push({event:Y,listeners:kt}))}}if((n&7)===0){t:{if(et=t==="mouseover"||t==="pointerover",Y=t==="mouseout"||t==="pointerout",et&&a!==nf&&(Nt=a.relatedTarget||a.fromElement)&&(Wt(Nt)||Nt[te]))break t;(Y||et)&&(Nt=at.window===at?at:(et=at.ownerDocument)?et.defaultView||et.parentWindow:window,Y?(et=a.relatedTarget||a.toElement,Y=j,et=et?Wt(et):null,et!==null&&(de=u(et),kt=et.tag,et!==de||kt!==5&&kt!==27&&kt!==6)&&(et=null)):(Y=null,et=j),Y!==et&&(kt=Om,dt="onMouseLeave",W="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(kt=zm,dt="onPointerLeave",W="onPointerEnter",X="pointer"),de=Y==null?Nt:Te(Y),$=et==null?Nt:Te(et),Nt=new kt(dt,X+"leave",Y,a,at),Nt.target=de,Nt.relatedTarget=$,dt=null,Wt(at)===j&&(kt=new kt(W,X+"enter",et,a,at),kt.target=$,kt.relatedTarget=de,dt=kt),de=dt,kt=Y&&et?z(Y,et,yM):null,Y!==null&&Uv(pt,Nt,Y,kt,!1),et!==null&&de!==null&&Uv(pt,de,et,kt,!0)))}t:{if(Y=j?Te(j):window,et=Y.nodeName&&Y.nodeName.toLowerCase(),et==="select"||et==="input"&&Y.type==="file")var Ht=km;else if(Vm(Y))if(qm)Ht=ES;else{Ht=SS;var Ae=xS}else et=Y.nodeName,!et||et.toLowerCase()!=="input"||Y.type!=="checkbox"&&Y.type!=="radio"?j&&ef(j.elementType)&&(Ht=km):Ht=MS;if(Ht&&(Ht=Ht(t,j))){Xm(pt,Ht,a,at);break t}Ae&&Ae(t,Y,j)}switch(Ae=j?Te(j):window,t){case"focusin":(Vm(Ae)||Ae.contentEditable==="true")&&(ur=Ae,vf=j,Po=null);break;case"focusout":Po=vf=ur=null;break;case"mousedown":_f=!0;break;case"contextmenu":case"mouseup":case"dragend":_f=!1,$m(pt,a,at);break;case"selectionchange":if(bS)break;case"keydown":case"keyup":$m(pt,a,at)}var jt;if(hf)t:{switch(t){case"compositionstart":var ie="onCompositionStart";break t;case"compositionend":ie="onCompositionEnd";break t;case"compositionupdate":ie="onCompositionUpdate";break t}ie=void 0}else lr?Hm(t,a)&&(ie="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ie="onCompositionStart");ie&&(Im&&a.locale!=="ko"&&(lr||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&lr&&(jt=Um()):(Oa=at,of="value"in Oa?Oa.value:Oa.textContent,lr=!0)),Ae=Ju(j,ie),0<Ae.length&&(ie=new Pm(ie,t,null,a,at),pt.push({event:ie,listeners:Ae}),jt?ie.data=jt:(jt=Gm(a),jt!==null&&(ie.data=jt)))),(jt=mS?gS(t,a):vS(t,a))&&(ie=Ju(j,"onBeforeInput"),0<ie.length&&(Ae=new Pm("onBeforeInput","beforeinput",null,a,at),pt.push({event:Ae,listeners:ie}),Ae.data=jt)),mM(pt,t,j,a,at)}Dv(pt,n)})}function rl(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Ju(t,n){for(var a=n+"Capture",r=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Co(t,a),c!=null&&r.unshift(rl(t,c,f)),c=Co(t,n),c!=null&&r.push(rl(t,c,f))),t.tag===3)return r;t=t.return}return[]}function yM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Uv(t,n,a,r,c){for(var f=n._reactName,y=[];a!==null&&a!==r;){var b=a,I=b.alternate,j=b.stateNode;if(b=b.tag,I!==null&&I===r)break;b!==5&&b!==26&&b!==27||j===null||(I=j,c?(j=Co(a,f),j!=null&&y.unshift(rl(a,j,I))):c||(j=Co(a,f),j!=null&&y.push(rl(a,j,I)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var xM=/\r\n?/g,SM=/\u0000|\uFFFD/g;function Lv(t){return(typeof t=="string"?t:""+t).replace(xM,`
`).replace(SM,"")}function Ov(t,n){return n=Lv(n),Lv(t)===n}function Ie(t,n,a,r,c,f){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||sr(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&sr(t,""+r);else return;break;case"className":ql(t,"class",r);break;case"tabIndex":ql(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ql(t,a,r);break;case"style":wm(t,r,f);return;case"data":if(n!=="object"){ql(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Yl(r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ie(t,n,"name",c.name,c,null),Ie(t,n,"formEncType",c.formEncType,c,null),Ie(t,n,"formMethod",c.formMethod,c,null),Ie(t,n,"formTarget",c.formTarget,c,null)):(Ie(t,n,"encType",c.encType,c,null),Ie(t,n,"method",c.method,c,null),Ie(t,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Yl(r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Bi);return;case"onScroll":r!=null&&Ee("scroll",t);return;case"onScrollEnd":r!=null&&Ee("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));(f!=null?f.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Yl(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":Ee("beforetoggle",t),Ee("toggle",t),kl(t,"popover",r);break;case"xlinkActuate":sa(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":sa(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":sa(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":sa(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":sa(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":sa(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":sa(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":sa(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":sa(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":kl(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=Hx.get(a)||a,kl(t,a,r);else return}Ue=!0}function td(t,n,a,r,c,f){switch(a){case"style":wm(t,r,f);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));(f!=null?f.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"children":if(typeof r=="string")sr(t,r);else if(typeof r=="number"||typeof r=="bigint")sr(t,""+r);else return;break;case"onScroll":r!=null&&Ee("scroll",t);return;case"onScrollEnd":r!=null&&Ee("scrollend",t);return;case"onClick":r!=null&&(t.onclick=Bi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!ke.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),f=a.slice(2,c?a.length-7:void 0),n=t[Lt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(f,n,c),typeof r=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(f,r,c);break t}Ue=!0,a in t?t[a]=r:r===!0?t.setAttribute(a,""):kl(t,a,r)}return}Ue=!0}function Dn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",t),Ee("load",t);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ie(t,n,f,y,a,null)}}c&&Ie(t,n,"srcSet",a.srcSet,a,null),r&&Ie(t,n,"src",a.src,a,null);return;case"input":Ee("invalid",t);var b=f=y=c=null,I=null,j=null;for(r in a)if(a.hasOwnProperty(r)){var at=a[r];if(at!=null)switch(r){case"name":c=at;break;case"type":y=at;break;case"checked":I=at;break;case"defaultChecked":j=at;break;case"value":f=at;break;case"defaultValue":b=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(s(137,n));break;default:Ie(t,n,r,at,a,null)}}bm(t,f,b,I,j,y,c,!1);return;case"select":Ee("invalid",t),r=y=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":y=b;break;case"multiple":r=b;default:Ie(t,n,c,b,a,null)}n=f,a=y,t.multiple=!!r,n!=null?ar(t,!!r,n,!1):a!=null&&ar(t,!!r,a,!0);return;case"textarea":Ee("invalid",t),f=c=r=null;for(y in a)if(a.hasOwnProperty(y)&&(b=a[y],b!=null))switch(y){case"value":r=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Ie(t,n,y,b,a,null)}Cm(t,r,c,f);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(r=a[I],r!=null))switch(I){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Ie(t,n,I,r,a,null)}return;case"dialog":Ee("beforetoggle",t),Ee("toggle",t),Ee("cancel",t),Ee("close",t);break;case"iframe":case"object":Ee("load",t);break;case"video":case"audio":for(r=0;r<sl.length;r++)Ee(sl[r],t);break;case"image":Ee("error",t),Ee("load",t);break;case"details":Ee("toggle",t);break;case"embed":case"source":case"link":Ee("error",t),Ee("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in a)if(a.hasOwnProperty(j)&&(r=a[j],r!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ie(t,n,j,r,a,null)}return;default:if(ef(n)){for(at in a)a.hasOwnProperty(at)&&(r=a[at],r!==void 0&&td(t,n,at,r,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(r=a[b],r!=null&&Ie(t,n,b,r,a,null))}var MM={};function EM(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,y=null,b=null,I=null,j=null,at=null;for(et in a){var pt=a[et];if(a.hasOwnProperty(et)&&pt!=null)switch(et){case"checked":break;case"value":break;case"defaultValue":I=pt;default:r.hasOwnProperty(et)||Ie(t,n,et,null,r,pt)}}for(var Y in r){var et=r[Y];if(pt=a[Y],r.hasOwnProperty(Y)&&(et!=null||pt!=null))switch(Y){case"type":et!==pt&&(Ue=!0),f=et;break;case"name":et!==pt&&(Ue=!0),c=et;break;case"checked":et!==pt&&(Ue=!0),j=et;break;case"defaultChecked":et!==pt&&(Ue=!0),at=et;break;case"value":et!==pt&&(Ue=!0),y=et;break;case"defaultValue":et!==pt&&(Ue=!0),b=et;break;case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(s(137,n));break;default:et!==pt&&Ie(t,n,Y,et,r,pt)}}$c(t,y,b,I,j,at,f,c);return;case"select":et=y=b=Y=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":et=I;default:r.hasOwnProperty(f)||Ie(t,n,f,null,r,I)}for(c in r)if(f=r[c],I=a[c],r.hasOwnProperty(c)&&(f!=null||I!=null))switch(c){case"value":f!==I&&(Ue=!0),Y=f;break;case"defaultValue":f!==I&&(Ue=!0),b=f;break;case"multiple":f!==I&&(Ue=!0),y=f;default:f!==I&&Ie(t,n,c,f,r,I)}n=b,a=y,r=et,Y!=null?ar(t,!!a,Y,!1):!!r!=!!a&&(n!=null?ar(t,!!a,n,!0):ar(t,!!a,a?[]:"",!1));return;case"textarea":et=Y=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!r.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ie(t,n,b,null,r,c)}for(y in r)if(c=r[y],f=a[y],r.hasOwnProperty(y)&&(c!=null||f!=null))switch(y){case"value":c!==f&&(Ue=!0),Y=c;break;case"defaultValue":c!==f&&(Ue=!0),et=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Ie(t,n,y,c,r,f)}Am(t,Y,et);return;case"option":for(var Nt in a)if(Y=a[Nt],a.hasOwnProperty(Nt)&&Y!=null&&!r.hasOwnProperty(Nt))switch(Nt){case"selected":t.selected=!1;break;default:Ie(t,n,Nt,null,r,Y)}for(I in r)if(Y=r[I],et=a[I],r.hasOwnProperty(I)&&Y!==et&&(Y!=null||et!=null))switch(I){case"selected":Y!==et&&(Ue=!0),t.selected=Y&&typeof Y!="function"&&typeof Y!="symbol";break;default:Ie(t,n,I,Y,r,et)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var kt in a)Y=a[kt],a.hasOwnProperty(kt)&&Y!=null&&!r.hasOwnProperty(kt)&&Ie(t,n,kt,null,r,Y);for(j in r)if(Y=r[j],et=a[j],r.hasOwnProperty(j)&&Y!==et&&(Y!=null||et!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,n));break;default:Ie(t,n,j,Y,r,et)}return;default:if(ef(n)){for(var de in a)Y=a[de],a.hasOwnProperty(de)&&Y!==void 0&&!r.hasOwnProperty(de)&&td(t,n,de,void 0,r,Y);for(at in r)Y=r[at],et=a[at],!r.hasOwnProperty(at)||Y===et||Y===void 0&&et===void 0||td(t,n,at,Y,r,et);return}}for(var W in a)Y=a[W],a.hasOwnProperty(W)&&Y!=null&&!r.hasOwnProperty(W)&&Ie(t,n,W,null,r,Y);for(pt in r)Y=r[pt],et=a[pt],!r.hasOwnProperty(pt)||Y===et||Y==null&&et==null||Ie(t,n,pt,Y,r,et)}function Pv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function TM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,y=c.initiatorType,b=c.duration;if(f&&b&&Pv(y)){for(y=0,b=c.responseEnd,r+=1;r<a.length;r++){var I=a[r],j=I.startTime;if(j>b)break;var at=I.transferSize,pt=I.initiatorType;at&&Pv(pt)&&(I=I.responseEnd,y+=at*(I<b?1:(b-j)/(I-j)))}if(--r,n+=8*(f+y)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ed=null,nd=null;function ol(t){return t.nodeType===9?t:t.ownerDocument}function zv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Iv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Bv(t,n,a,r){return a=ol(a).createElement(t),a[Rt]=r,a[Lt]=n,Dn(a,t,n),Qe(a),a}function id(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ad=null;function bM(){var t=window.event;return t&&t.type==="popstate"?t===ad?!1:(ad=t,!0):(ad=null,!1)}var sd=typeof setTimeout=="function"?setTimeout:void 0,AM=typeof clearTimeout=="function"?clearTimeout:void 0,Fv=typeof Promise=="function"?Promise:void 0,Hv=typeof requestAnimationFrame=="function"?requestAnimationFrame:sd,CM=typeof queueMicrotask=="function"?queueMicrotask:typeof Fv<"u"?function(t){return Fv.resolve(null).then(t).catch(RM)}:sd;function RM(t){setTimeout(function(){throw t})}function ts(t){return t==="head"}function Gv(t,n){var a=n,r=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(c),Vr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")dd(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,dd(a);for(var f=a.firstChild;f;){var y=f.nextSibling,b=f.nodeName;f[We]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=y}}else a==="body"&&dd(t.ownerDocument.body);a=c}while(a);Vr(n)}function Vv(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Xv(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var c=r=0;c<n.length;c++){var f=n[c];0<f.width&&0<f.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function kv(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function wM(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function rd(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return wM(n,a,t)}function DM(t){return t.documentElement.clientHeight}function NM(t){this.addEventListener("load",t),this.addEventListener("error",t)}function UM(t,n,a,r,c,f,y,b,I){var j=n.nodeType===9?n:n.ownerDocument;try{var at=j.startViewTransition({update:function(){var Y=j.defaultView,et=Y.navigation&&Y.navigation.transition,Nt=j.fonts.status;r();var kt=[];if(Nt==="loaded"&&(DM(j),j.fonts.status==="loading"&&kt.push(j.fonts.ready)),Nt=kt.length,t!==null)for(var de=t.suspenseyImages,W=0,X=0;X<de.length;X++){var $=de[X];if(!$.complete){var dt=$.getBoundingClientRect();if(0<dt.bottom&&0<dt.right&&dt.top<Y.innerHeight&&dt.left<Y.innerWidth){if(W+=f_($),W>ec){kt.length=Nt;break}$=new Promise(NM.bind($)),kt.push($)}}}if(0<kt.length)return Y=Promise.race([Promise.all(kt),new Promise(function(Ht){return setTimeout(Ht,500)})]).then(c,c),(et?Promise.allSettled([et.finished,Y]):Y).then(f,f);if(c(),et)return et.finished.then(f,f);f()},types:a});j.__reactViewTransition=at;var pt=[];return at.ready.then(function(){for(var Y=j.documentElement.getAnimations({subtree:!0}),et=0;et<Y.length;et++){var Nt=Y[et],kt=Nt.effect,de=kt.pseudoElement;if(de!=null&&de.startsWith("::view-transition")){pt.push(Nt),Nt=kt.getKeyframes();for(var W=de=void 0,X=!0,$=0;$<Nt.length;$++){var dt=Nt[$],Ht=dt.width;if(de===void 0)de=Ht;else if(de!==Ht){X=!1;break}if(Ht=dt.height,W===void 0)W=Ht;else if(W!==Ht){X=!1;break}delete dt.width,delete dt.height,dt.transform==="none"&&delete dt.transform}X&&de!==void 0&&W!==void 0&&(kt.setKeyframes(Nt),X=getComputedStyle(kt.target,kt.pseudoElement),X.width!==de||X.height!==W)&&(X=Nt[0],X.width=de,X.height=W,X=Nt[Nt.length-1],X.width=de,X.height=W,kt.setKeyframes(Nt))}}y()},function(Y){j.__reactViewTransition===at&&(j.__reactViewTransition=null);try{if(typeof Y=="object"&&Y!==null)switch(Y.name){case"InvalidStateError":(Y.message==="View transition was skipped because document visibility state is hidden."||Y.message==="Skipping view transition because document visibility state has become hidden."||Y.message==="Skipping view transition because viewport size changed."||Y.message==="Transition was aborted because of invalid state")&&(Y=null)}Y!==null&&I(Y)}finally{r(),c(),y()}}),at.finished.finally(function(){for(var Y=0;Y<pt.length;Y++)pt[Y].cancel();j.__reactViewTransition===at&&(j.__reactViewTransition=null),b()}),at}catch{return r(),c(),y(),null}}function Fs(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Fs.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:P({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Fs.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),r=[],c=0;c<a.length;c++){var f=a[c].effect;f!==null&&f.target===t&&f.pseudoElement===n&&r.push(a[c])}return r},Fs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function qv(t){return{name:t,group:new Fs("group",t),imagePair:new Fs("image-pair",t),old:new Fs("old",t),new:new Fs("new",t)}}function li(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}li.prototype.addEventListener=function(t,n,a){var r=null,c=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(Wv(f,t,n,a)===-1){var y=this,b=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(b=function(I){y.removeEventListener(t,n,a),typeof n=="function"?n.call(this,I):n.handleEvent(I)}),r!==null&&(c=y.removeEventListener.bind(y,t,n,a),r.addEventListener("abort",c,{once:!0}),c=r.removeEventListener.bind(r,"abort",c)),r=zr(a),f.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:b,cleanup:c}),m(this._fragmentFiber.child,!1,LM,t,b,r)}this._eventListeners=f}};function LM(t,n,a,r){return M(t).addEventListener(n,a,r),!1}li.prototype.removeEventListener=function(t,n,a){var r=this._eventListeners;if(r!==null&&(n=Wv(r,t,n,a),n!==-1)){var c=r[n];a=c.attachedListener;var f=c.cleanup;c=zr(c.optionsOrUseCapture),m(this._fragmentFiber.child,!1,OM,t,a,c),r.splice(n,1),f!==null&&f()}};function OM(t,n,a,r){return M(t).removeEventListener(n,a,r),!1}function zr(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function Yv(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function Wv(t,n,a,r){if(t.length===0)return-1;r=Yv(r);for(var c=0;c<t.length;c++){var f=t[c];if(f.type===n&&f.listener===a&&Yv(f.optionsOrUseCapture)===r)return c}return-1}li.prototype.dispatchEvent=function(t){var n=_(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var c=0;c<a.length;c++){var f=a[c];r.addEventListener(f.type,f.attachedListener,zr(f.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),a)for(c=0;c<a.length;c++)f=a[c],r.removeEventListener(f.type,f.attachedListener,zr(f.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},li.prototype.focus=function(t){m(this._fragmentFiber.child,!0,jv,t,void 0,void 0)};function jv(t,n){return t.tag===6?!1:(t=M(t),YM(t,n))}li.prototype.focusLast=function(t){var n=[];m(this._fragmentFiber.child,!0,od,n,void 0,void 0);for(var a=n.length-1;0<=a&&!jv(n[a],t);a--);};function od(t,n){return n.push(t),!1}li.prototype.blur=function(){var t=_(this._fragmentFiber);t!==null&&(t=M(t),t=ol(t).activeElement,t!==null&&m(this._fragmentFiber.child,!1,PM,t,void 0,void 0))};function PM(t,n){return t.tag===6?!1:(t=M(t),t===n||t.contains(n)?(n.blur(),!0):!1)}li.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),m(this._fragmentFiber.child,!1,zM,t,void 0,void 0)};function zM(t,n){return t.tag===6||(t=M(t),n.observe(t)),!1}li.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),m(this._fragmentFiber.child,!1,IM,t,void 0,void 0);for(var a=n=0;a<Di.length;a++){var r=Di[a];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Di[n++]=r}Di.length=n}};function IM(t,n){return t.tag===6||(t=M(t),n.unobserve(t)),!1}var Di=[],ld=!1;function BM(t,n,a){Di.push({fragmentInstance:t,observer:n,instance:a}),ld||(ld=!0,WM(function(){ld=!1;var r=Di;Di=[];for(var c=0;c<r.length;c++){var f=r[c];f.observer.unobserve(f.instance)}}))}li.prototype.getClientRects=function(){var t=[];return m(this._fragmentFiber.child,!1,FM,t,void 0,void 0),t};function FM(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=M(t),n.push.apply(n,t.getClientRects());return!1}li.prototype.getRootNode=function(t){var n=_(this._fragmentFiber);return n===null?this:M(n).getRootNode(t)},li.prototype.compareDocumentPosition=function(t){var n=_(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];m(this._fragmentFiber.child,!1,od,a,void 0,void 0);var r=M(n);if(a.length===0){if(a=r,S(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var c=r=a.compareDocumentPosition(t);return a===t?c=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=E(n)[1],a===null?c=Node.DOCUMENT_POSITION_PRECEDING:(t=M(a).compareDocumentPosition(t),c=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),c=M(a[a.length-1]);var f=S(this._fragmentFiber)?n.parentElement:r;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var y=n.compareDocumentPosition(t),b=c.compareDocumentPosition(t),I=y&Node.DOCUMENT_POSITION_CONTAINED_BY||b&Node.DOCUMENT_POSITION_CONTAINED_BY;return b=r&&f&&y&Node.DOCUMENT_POSITION_FOLLOWING&&b&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||f&&c===t||I||b?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!f&&c===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:y,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||HM(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function HM(t,n,a,r,c){var f=Wt(c);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=c.ownerDocument,c===f||c===f.documentElement||c===f.body;t:{for(f=n,n=_(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=z(a,f,F),n===null?n=!1:(m(n,!0,U,f,a),f=x,x=null,n=f!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===r)&&(n=z(r,f,F),n===null?n=!1:(m(n,!0,A,f,r),f=x,N=x=null,n=f!==null)),n):!1}function Zv(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}li.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];m(this._fragmentFiber.child,!1,od,n,void 0,void 0);var a=t!==!1;if(n.length===0){var r=E(this._fragmentFiber);if(r=a?r[1]||r[0]||_(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=M(r),Zv(t,a);return}if(r=M(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var c=n[r];c.tag===6?(c=M(c),Zv(c,a)):M(c).scrollIntoView(t),r+=a?-1:1}};function GM(t,n){return t=M(t),Kv(t,n),!1}function Kv(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function Qv(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];t.addEventListener(c.type,c.attachedListener,zr(c.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var y=0,b=0;b<Di.length;b++){var I=Di[b];(I.fragmentInstance!==n||I.observer!==f||I.instance!==t)&&(Di[y++]=I)}Di.length=y,f.observe(t)}),Kv(t,n))}function VM(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];t.removeEventListener(c.type,c.attachedListener,zr(c.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?BM(n,f,t):f.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function ud(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ud(a),Se(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function XM(t,n,a,r){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[We])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Mi(t.nextSibling),t===null)break}return null}function kM(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Mi(t.nextSibling),t===null))return null;return t}function Jv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Mi(t.nextSibling),t===null))return null;return t}function cd(t){return t.data==="$?"||t.data==="$~"}function fd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function qM(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function Mi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var hd=null;function $v(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Mi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function t_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function YM(t,n){function a(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return r}function WM(t){Hv(function(){Hv(function(n){return t(n)})})}function e_(t,n,a){switch(n=ol(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function n_(t,n,a){for(var r in a){var c=a[r];a.hasOwnProperty(r)&&c!=null&&Ie(t,n,r,null,MM,c)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Bi&&(t.onclick=null),Se(t)}function dd(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Se(t)}var Ei=new Map,i_=new Set;function ll(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var _a=xt.d;xt.d={f:jM,r:ZM,D:KM,C:QM,L:JM,m:$M,X:eE,S:tE,M:nE};function jM(){var t=_a.f(),n=Yu();return t||n}function ZM(t){var n=tn(t);n!==null&&n.tag===5&&n.type==="form"?s0(n):_a.r(t)}var Ir=typeof document>"u"?null:document;function a_(t,n,a){var r=Ir;if(r&&typeof n=="string"&&n){var c=mi(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),i_.has(c)||(i_.add(c),t={rel:t,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),Dn(n,"link",t),Qe(n),r.head.appendChild(n)))}}function KM(t){_a.D(t),a_("dns-prefetch",t,null)}function QM(t,n){_a.C(t,n),a_("preconnect",t,n)}function JM(t,n,a){_a.L(t,n,a);var r=Ir;if(r&&t&&n){var c='link[rel="preload"][as="'+mi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+mi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+mi(a.imageSizes)+'"]')):c+='[href="'+mi(t)+'"]';var f=c;switch(n){case"style":f=Br(t);break;case"script":f=Fr(t)}if(!(Ei.has(f)||(t=P({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ei.set(f,t),r.querySelector(c)!==null||n==="style"&&r.querySelector(ul(f))||n==="script"&&r.querySelector(cl(f))))){var y=r.createElement("link");Dn(y,"link",t),n==="style"&&(y[Xe]=!0,y.onload=y.onerror=function(){On(y)}),Qe(y),r.head.appendChild(y)}}}function $M(t,n){_a.m(t,n);var a=Ir;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+mi(r)+'"][href="'+mi(t)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Fr(t)}if(!Ei.has(f)&&(t=P({rel:"modulepreload",href:t},n),Ei.set(f,t),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(cl(f)))return}r=a.createElement("link"),Dn(r,"link",t),Qe(r),a.head.appendChild(r)}}}function tE(t,n,a){_a.S(t,n,a);var r=Ir;if(r&&t){var c=yn(r).hoistableStyles,f=Br(t);n=n||"default";var y=c.get(f);if(!y){var b={loading:0,preload:null};if(y=r.querySelector(ul(f)))b.loading=5;else{t=P({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ei.get(f))&&pd(t,a);var I=y=r.createElement("link");Qe(I),Dn(I,"link",t),I._p=new Promise(function(j,at){I.onload=j,I.onerror=at}),I.addEventListener("load",function(){b.loading|=1}),I.addEventListener("error",function(){b.loading|=2}),b.loading|=4,$u(y,n,r)}y={type:"stylesheet",instance:y,count:1,state:b},c.set(f,y)}}}function eE(t,n){_a.X(t,n);var a=Ir;if(a&&t){var r=yn(a).hoistableScripts,c=Fr(t),f=r.get(c);f||(f=a.querySelector(cl(c)),f||(t=P({src:t,async:!0},n),(n=Ei.get(c))&&md(t,n),f=a.createElement("script"),Qe(f),Dn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function nE(t,n){_a.M(t,n);var a=Ir;if(a&&t){var r=yn(a).hoistableScripts,c=Fr(t),f=r.get(c);f||(f=a.querySelector(cl(c)),f||(t=P({src:t,async:!0,type:"module"},n),(n=Ei.get(c))&&md(t,n),f=a.createElement("script"),Qe(f),Dn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function s_(t,n,a,r){var c=(c=O.current)?ll(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Br(a.href),n=yn(c).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Br(a.href);var f=yn(c).hoistableStyles,y=f.get(t);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,y),(f=c.querySelector(ul(t)))?f._p||(y.instance=f,y.state.loading=5):(f=Ei.get(t),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ei.set(t,f)),iE(c,t,f,y.state))),n&&r===null)throw Error(s(528,""));return y}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Fr(a),n=yn(c).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Br(t){return'href="'+mi(t)+'"'}function ul(t){return'link[rel="stylesheet"]['+t+"]"}function r_(t){return P({},t,{"data-precedence":t.precedence,precedence:null})}function iE(t,n,a,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Xe]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[Xe]=!0,n.onload=n.onerror=On.bind(null,n),Dn(n,"link",a),Qe(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Fr(t){return'[src="'+mi(t)+'"]'}function cl(t){return"script[async]"+t}function o_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+mi(a.href)+'"]');if(r)return n.instance=r,Qe(r),r;var c=P({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Qe(r),Dn(r,"style",c),$u(r,a.precedence,t),n.instance=r;case"stylesheet":c=Br(a.href);var f=t.querySelector(ul(c));if(f)return n.state.loading|=4,n.instance=f,Qe(f),f;r=r_(a),(c=Ei.get(c))&&pd(r,c),f=(t.ownerDocument||t).createElement("link"),Qe(f);var y=f;return y._p=new Promise(function(b,I){y.onload=b,y.onerror=I}),Dn(f,"link",r),n.state.loading|=4,$u(f,a.precedence,t),n.instance=f;case"script":return f=Fr(a.src),(c=t.querySelector(cl(f)))?(n.instance=c,Qe(c),c):(r=a,(c=Ei.get(f))&&(r=P({},a),md(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),Qe(c),Dn(c,"link",r),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,$u(r,a.precedence,t));return n.instance}function $u(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,y=0;y<r.length;y++){var b=r[y];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function pd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function md(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var tc=null;function l_(t,n,a){if(tc===null){var r=new Map,c=tc=new Map;c.set(a,r)}else c=tc,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[We]||f[Rt]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=t+y;var b=r.get(y);b?b.push(f):r.set(y,[f])}}return r}function gd(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function aE(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function u_(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function c_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function f_(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function h_(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=f_(n),t.suspenseyImages.push(n)),t=oE.bind(t),n.decode().then(t,t))}function sE(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Br(r.href),f=n.querySelector(ul(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=fl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,Qe(f);return}f=n.ownerDocument||n,r=r_(r),(c=Ei.get(c))&&pd(r,c),f=f.createElement("link"),Qe(f);var y=f;y._p=new Promise(function(b,I){y.onload=b,y.onerror=I}),Dn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=fl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var ec=0;function rE(t,n){return t.stylesheets&&t.count===0&&ic(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&ic(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&ec===0&&(ec=62500*TM());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ic(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>ec?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function d_(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)ic(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function fl(){this.count--,d_(this)}function oE(){this.imgCount--,d_(this)}var nc=null;function ic(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,nc=new Map,n.forEach(lE,t),nc=null,fl.call(t))}function lE(t,n){if(!(n.state.loading&4)){var a=nc.get(t);if(a)var r=a.get(null);else{a=new Map,nc.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var y=c[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),r=y)}r&&a.set(null,r)}c=n.instance,y=c.getAttribute("data-precedence"),f=a.get(y)||r,f===r&&a.set(null,c),a.set(y,c),this.count++,r=fl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Hr={$$typeof:mt,Provider:null,Consumer:null,_currentValue:$t,_currentValue2:$t,_threadCount:0};function uE(t,n,a,r,c,f,y,b,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ao(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ao(0),this.hiddenUpdates=Ao(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.transitionTypes=null,this.incompleteTransitions=new Map}function p_(t,n,a,r,c,f,y,b,I,j,at,pt){return t=new uE(t,n,a,y,I,j,at,pt,b),n=1,f===!0&&(n|=24),f=Kn(3,null,null,n),t.current=f,f.stateNode=t,n=Nf(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Pf(f),t}function m_(t){return t?(t=hr,t):hr}function g_(t,n,a,r,c,f){c=m_(c),r.context===null?r.context=c:r.pendingContext=c,r=Va(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Xa(t,r,n),a!==null&&(ti(a,t,n),Vo(a,t,n))}function v_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function vd(t,n){v_(t,n),(t=t.alternate)&&v_(t,n)}function __(t){if(t.tag===13||t.tag===31){var n=Ms(t,67108864);n!==null&&ti(n,t,67108864),vd(t,67108864)}}function y_(t){if(t.tag===13||t.tag===31){var n=oi();n=rt(n);var a=Ms(t,n);a!==null&&ti(a,t,n),vd(t,n)}}var Gr=!0;function cE(t,n,a,r){var c=vt.T;vt.T=null;var f=xt.p;try{xt.p=2,_d(t,n,a,r)}finally{xt.p=f,vt.T=c}}function fE(t,n,a,r){var c=vt.T;vt.T=null;var f=xt.p;try{xt.p=8,_d(t,n,a,r)}finally{xt.p=f,vt.T=c}}function _d(t,n,a,r){if(Gr){var c=yd(r);if(c===null)$h(t,n,r,ac,a),S_(t,r);else if(dE(c,t,n,a,r))r.stopPropagation();else if(S_(t,r),n&4&&-1<hE.indexOf(t)){for(;c!==null;){var f=tn(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=Ii(f.pendingLanes);if(y!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;y;){var I=1<<31-Ln(y);b.entanglements[1]|=I,y&=~I}ji(f),(Le&6)===0&&(Xu=q()+500,al(0))}}break;case 31:case 13:b=Ms(f,2),b!==null&&ti(b,f,2),Yu(),vd(f,2)}if(f=yd(r),f===null&&$h(t,n,r,ac,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else $h(t,n,r,null,a)}}function yd(t){return t=af(t),xd(t)}var ac=null;function xd(t){if(ac=null,t=Wt(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ac=t,null}function x_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(zt()){case ft:return 2;case _t:return 8;case Pt:case It:return 32;case ue:return 268435456;default:return 32}default:return 32}}var Sd=!1,es=null,ns=null,is=null,hl=new Map,dl=new Map,as=[],hE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function S_(t,n){switch(t){case"focusin":case"focusout":es=null;break;case"dragenter":case"dragleave":ns=null;break;case"mouseover":case"mouseout":is=null;break;case"pointerover":case"pointerout":hl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":dl.delete(n.pointerId)}}function pl(t,n,a,r,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=tn(n),n!==null&&__(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function dE(t,n,a,r,c){switch(n){case"focusin":return es=pl(es,t,n,a,r,c),!0;case"dragenter":return ns=pl(ns,t,n,a,r,c),!0;case"mouseover":return is=pl(is,t,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return hl.set(f,pl(hl.get(f)||null,t,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,dl.set(f,pl(dl.get(f)||null,t,n,a,r,c)),!0}return!1}function M_(t){var n=Wt(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Tt(t.priority,function(){y_(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Tt(t.priority,function(){y_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function sc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=yd(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);nf=r,a.target.dispatchEvent(r),nf=null}else return n=tn(a),n!==null&&__(n),t.blockedOn=a,!1;n.shift()}return!0}function E_(t,n,a){sc(t)&&a.delete(n)}function pE(){Sd=!1,es!==null&&sc(es)&&(es=null),ns!==null&&sc(ns)&&(ns=null),is!==null&&sc(is)&&(is=null),hl.forEach(E_),dl.forEach(E_)}function rc(t,n){t.blockedOn===n&&(t.blockedOn=null,Sd||(Sd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,pE)))}var oc=null;function T_(t){oc!==t&&(oc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){oc===t&&(oc=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],c=t[n+2];if(typeof r!="function"){if(xd(r||a)===null)continue;break}var f=tn(a);f!==null&&(t.splice(n,3),n-=3,nh(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function Vr(t){function n(I){return rc(I,t)}es!==null&&rc(es,t),ns!==null&&rc(ns,t),is!==null&&rc(is,t),hl.forEach(n),dl.forEach(n);for(var a=0;a<as.length;a++){var r=as[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<as.length&&(a=as[0],a.blockedOn===null);)M_(a),a.blockedOn===null&&as.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],y=c[Lt]||null;if(typeof f=="function")y||T_(a);else if(y){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,y=f[Lt]||null)b=y.formAction;else if(xd(c)!==null)continue}else b=y.action;typeof b=="function"?a[r+1]=b:(a.splice(r,3),r-=3),T_(a)}}}function b_(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(y){return c=y})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Md(t){this._internalRoot=t}lc.prototype.render=Md.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=oi();g_(a,r,t,n,null,null)},lc.prototype.unmount=Md.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;g_(t.current,2,null,t,null,null),Yu(),n[te]=null}};function lc(t){this._internalRoot=t}lc.prototype.unstable_scheduleHydration=function(t){if(t){var n=J();t={blockedOn:null,target:t,priority:n};for(var a=0;a<as.length&&n!==0&&n<as[a].priority;a++);as.splice(a,0,t),a===0&&M_(t)}};var A_=e.version;if(A_!=="19.3.1")throw Error(s(527,A_,"19.3.1"));xt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=g(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var mE={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:vt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uc.isDisabled&&uc.supportsFiber)try{Ce=uc.inject(mE),Ke=uc}catch{}}return gl.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",c=m0,f=g0,y=v0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=p_(t,1,!1,null,null,a,r,null,c,f,y,b_),t[te]=n.current,Jh(t),new Md(n)},gl.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,c="",f=m0,y=g0,b=v0,I=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=p_(t,1,!0,n,a??null,r,c,I,f,y,b,b_),n.context=m_(null),a=n.current,r=oi(),r=rt(r),c=Va(r),c.callback=null,Xa(a,c,r),a=r,n.current.lanes=a,ys(n,a),ji(n),t[te]=n.current,Jh(t),new lc(n)},gl.version="19.3.1",gl}var z_;function bE(){if(z_)return bd.exports;z_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),bd.exports=TE(),bd.exports}var AE=bE();const YR=Wy(AE);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CE=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),RE=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase()),I_=o=>{const e=RE(o);return e.charAt(0).toUpperCase()+e.slice(1)},jy=(...o)=>o.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim(),wE=o=>{for(const e in o)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var DE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE=hi.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:h,...d},p)=>hi.createElement("svg",{ref:p,...DE,width:e,height:e,stroke:o,strokeWidth:s?Number(i)*24/Number(e):i,className:jy("lucide",l),...!u&&!wE(d)&&{"aria-hidden":"true"},...d},[...h.map(([g,v])=>hi.createElement(g,v)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=(o,e)=>{const i=hi.forwardRef(({className:s,...l},u)=>hi.createElement(NE,{ref:u,iconNode:e,className:jy(`lucide-${CE(I_(o))}`,`lucide-${o}`,s),...l}));return i.displayName=I_(o),i};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UE=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],LE=Bl("award",UE);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OE=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],PE=Bl("building-2",OE);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],IE=Bl("cpu",zE);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],FE=Bl("earth",BE);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]],GE=Bl("fingerprint",HE),B_=[{id:"dong-son",name:"Trống Đồng Hoàng Gia 3D",subtitle:"Lễ Tân Nhà Nước & Khánh Tiết",badge:"Khuyên dùng",description:"Mặt Trống Đồng Đông Sơn 3D xoay đa tầng kết hợp vòng hào quang Mặt Trời Lạc Việt, tông Đỏ Lễ Tiết & Vàng Kim trang nghiêm.",colors:{primary:"#f5c542",secondary:"#b91c1c",accent:"#fde047",bgTop:"#240507",bgBottom:"#0c0102",particle:"#ffd75e",grid:"#7f1d1d",bloomStrength:.95},defaults:{eventBadge:"ỦY BAN NHÂN DÂN • NGÀY HỘI CHUYỂN ĐỔI SỐ",eventTitle:"NGHI THỨC KÍCH HOẠT CHUYỂN ĐỔI SỐ",eventSubtitle:"CHÍNH QUYỀN SỐ MINH BẠCH - DOANH NGHIỆP BỨT PHÁ - PHỤC VỤ NHÂN DÂN",celebrationTitle:"CHÍNH THỨC KÍCH HOẠT THÀNH CÔNG",celebrationDesc:"ĐỔI MỚI SÁNG TẠO - VƯƠN MÌNH - PHÁT TRIỂN BỀN VỮNG"}},{id:"holo-globe",name:"Quả Cầu Số Hologram 3D",subtitle:"Chuyển Đổi Số & Kết Nối Dữ Liệu",badge:"Công nghệ cao",description:"Địa cầu mạng lưới dữ liệu 3D phát sáng với các quỹ đạo vệ tinh và nút kết nối Cyan-Xanh dương hiện đại.",colors:{primary:"#38bdf8",secondary:"#0369a1",accent:"#a5f3fc",bgTop:"#031327",bgBottom:"#010611",particle:"#67e8f9",grid:"#0c4a6e",bloomStrength:1.1},defaults:{eventBadge:"CHUYỂN ĐỔI SỐ QUỐC GIA • KẾT NỐI TƯƠNG LAI",eventTitle:"KÍCH HOẠT HỆ SINH THÁI DỮ LIỆU SỐ",eventSubtitle:"DỮ LIỆU ĐÚNG ĐỦ SẠCH SỐNG - VẬN HÀNH THÔNG MINH - KẾT NỐI TOÀN DIỆN",celebrationTitle:"KÍCH HOẠT HỆ THỐNG SỐ THÀNH CÔNG",celebrationDesc:"KẾT NỐI ĐỒNG BỘ - KIẾN TẠO TƯƠNG LAI SỐ"}},{id:"smart-city",name:"Đô Thị Thông Minh 3D",subtitle:"Key Moment Sân Khấu LED",badge:"Sân khấu LED",description:"Quần thể kiến trúc Smart City 3D nổi khối trên sàn lưới năng lượng, tia sáng hội tụ mạnh mẽ về lõi trung tâm.",colors:{primary:"#fbbf24",secondary:"#1d4ed8",accent:"#60a5fa",bgTop:"#0b142c",bgBottom:"#030612",particle:"#fcd34d",grid:"#1e3a8a",bloomStrength:1},defaults:{eventBadge:"THÀNH PHỐ THÔNG MINH • DỊCH VỤ CÔNG TRỰC TUYẾN",eventTitle:"KHỞI ĐỘNG ĐÔ THỊ THÔNG MINH",eventSubtitle:"HẠ TẦNG HIỆN ĐẠI - ĐIỀU HÀNH TẬP TRUNG - PHỤC VỤ NGƯỜI DÂN",celebrationTitle:"VẬN HÀNH ĐÔ THỊ THÔNG MINH",celebrationDesc:"HIỆN ĐẠI - AN TOÀN - THÂN THIỆN - BỀN VỮNG"}},{id:"crystal-core",name:"Lõi Pha Lê Năng Lượng 3D",subtitle:"Khởi Công, Khánh Thành & Ra Mắt",badge:"Sang trọng",description:"Khối tinh thể năng lượng 3D lơ lửng trong vòng từ trường đa trục, hiệu ứng phản chiếu kim loại và pháo hoa vàng kim.",colors:{primary:"#f59e0b",secondary:"#4c1d95",accent:"#fef08a",bgTop:"#160b29",bgBottom:"#06030d",particle:"#fde68a",grid:"#4c1d95",bloomStrength:1.05},defaults:{eventBadge:"SỰ KIỆN TRỌNG ĐẠI • DẤU ẤN TIÊN PHONG",eventTitle:"NGHI THỨC KHỞI ĐỘNG DỰ ÁN MỚI",eventSubtitle:"TẦM NHÌN CHIẾN LƯỢC - ĐỒNG LÒNG KIẾN TẠO - BỨT PHÁ THÀNH CÔNG",celebrationTitle:"CHÍNH THỨC KHỞI ĐỘNG THÀNH CÔNG",celebrationDesc:"KHỞI ĐẦU VỮNG CHẮC - VƯƠN TẦM CAO MỚI"}},{id:"custom-ceremony",name:"Tự Thiết Kế Mẫu Lễ Khai Mạc",subtitle:"Custom Bàn Tay Chạm & Video Trình Chiếu",badge:"Tự Custom",isCustom:!0,description:"Tải ảnh bàn tay chạm riêng, video chạy nền và video trình chiếu khi nhấn Bắt đầu kèm hiệu ứng bàn tay phát sáng rực rỡ.",colors:{primary:"#f5c542",secondary:"#7e22ce",accent:"#fde047",bgTop:"#160a24",bgBottom:"#05020a",particle:"#facc15",grid:"#581c87",bloomStrength:1},defaults:{eventBadge:"LỄ KHAI MẠC • NGHI THỨC CHẠM TAY KÍCH HOẠT",eventTitle:"NGHI THỨC KHAI MẠC SỰ KIỆN",eventSubtitle:"ĐỒNG HÀNH PHÁT TRIỂN - BỨT PHÁ THÀNH CÔNG",celebrationTitle:"CHÚC MỪNG KHAI MẠC THÀNH CÔNG",celebrationDesc:"KHỞI ĐẦU RỰC RỠ - VỮNG BƯỚC TƯƠNG LAI"}}];function Jp(o){return B_.find(e=>e.id===o)||B_[0]}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $p="176",VE=0,F_=1,XE=2,Zy=1,kE=2,Ta=3,ms=0,Zn=1,Ki=2,Ca=0,lo=1,$s=2,H_=3,G_=4,qE=5,js=100,YE=101,WE=102,jE=103,ZE=104,KE=200,QE=201,JE=202,$E=203,up=204,cp=205,tT=206,eT=207,nT=208,iT=209,aT=210,sT=211,rT=212,oT=213,lT=214,fp=0,hp=1,dp=2,fo=3,pp=4,mp=5,gp=6,vp=7,Ky=0,uT=1,cT=2,ps=0,Qy=1,Jy=2,$y=3,tm=4,tx=5,ex=6,nx=7,ix=300,ho=301,po=302,_p=303,yp=304,Wc=306,Nl=1e3,Ks=1001,xp=1002,di=1003,fT=1004,cc=1005,Qi=1006,wd=1007,Qs=1008,$i=1009,ax=1010,sx=1011,Ul=1012,em=1013,tr=1014,Ji=1015,Ra=1016,nm=1017,im=1018,Ll=1020,rx=35902,ox=1021,lx=1022,Pi=1023,Ol=1026,Pl=1027,am=1028,sm=1029,ux=1030,rm=1031,om=1033,zc=33776,Ic=33777,Bc=33778,Fc=33779,Sp=35840,Mp=35841,Ep=35842,Tp=35843,bp=36196,Ap=37492,Cp=37496,Rp=37808,wp=37809,Dp=37810,Np=37811,Up=37812,Lp=37813,Op=37814,Pp=37815,zp=37816,Ip=37817,Bp=37818,Fp=37819,Hp=37820,Gp=37821,Hc=36492,Vp=36494,Xp=36495,cx=36283,kp=36284,qp=36285,Yp=36286,hT=3200,dT=3201,fx=0,pT=1,ds="",Fn="srgb",mo="srgb-linear",kc="linear",Be="srgb",Xr=7680,V_=519,mT=512,gT=513,vT=514,hx=515,_T=516,yT=517,xT=518,ST=519,X_=35044,k_="300 es",Aa=2e3,qc=2001;class _o{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let q_=1234567;const Al=Math.PI/180,zl=180/Math.PI;function yo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(zn[o&255]+zn[o>>8&255]+zn[o>>16&255]+zn[o>>24&255]+"-"+zn[e&255]+zn[e>>8&255]+"-"+zn[e>>16&15|64]+zn[e>>24&255]+"-"+zn[i&63|128]+zn[i>>8&255]+"-"+zn[i>>16&255]+zn[i>>24&255]+zn[s&255]+zn[s>>8&255]+zn[s>>16&255]+zn[s>>24&255]).toLowerCase()}function _e(o,e,i){return Math.max(e,Math.min(i,o))}function lm(o,e){return(o%e+e)%e}function MT(o,e,i,s,l){return s+(o-e)*(l-s)/(i-e)}function ET(o,e,i){return o!==e?(i-o)/(e-o):0}function Cl(o,e,i){return(1-i)*o+i*e}function TT(o,e,i,s){return Cl(o,e,1-Math.exp(-i*s))}function bT(o,e=1){return e-Math.abs(lm(o,e*2)-e)}function AT(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*(3-2*o))}function CT(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*o*(o*(o*6-15)+10))}function RT(o,e){return o+Math.floor(Math.random()*(e-o+1))}function wT(o,e){return o+Math.random()*(e-o)}function DT(o){return o*(.5-Math.random())}function NT(o){o!==void 0&&(q_=o);let e=q_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function UT(o){return o*Al}function LT(o){return o*zl}function OT(o){return(o&o-1)===0&&o!==0}function PT(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function zT(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function IT(o,e,i,s,l){const u=Math.cos,h=Math.sin,d=u(i/2),p=h(i/2),g=u((e+s)/2),v=h((e+s)/2),m=u((e-s)/2),_=h((e-s)/2),S=u((s-e)/2),E=h((s-e)/2);switch(l){case"XYX":o.set(d*v,p*m,p*_,d*g);break;case"YZY":o.set(p*_,d*v,p*m,d*g);break;case"ZXZ":o.set(p*m,p*_,d*v,d*g);break;case"XZX":o.set(d*v,p*E,p*S,d*g);break;case"YXY":o.set(p*S,d*v,p*E,d*g);break;case"ZYZ":o.set(p*E,p*S,d*v,d*g);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function ro(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Yn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const kr={DEG2RAD:Al,RAD2DEG:zl,generateUUID:yo,clamp:_e,euclideanModulo:lm,mapLinear:MT,inverseLerp:ET,lerp:Cl,damp:TT,pingpong:bT,smoothstep:AT,smootherstep:CT,randInt:RT,randFloat:wT,randFloatSpread:DT,seededRandom:NT,degToRad:UT,radToDeg:LT,isPowerOfTwo:OT,ceilPowerOfTwo:PT,floorPowerOfTwo:zT,setQuaternionFromProperEuler:IT,normalize:Yn,denormalize:ro};class Xt{constructor(e=0,i=0){Xt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=_e(this.x,e.x,i.x),this.y=_e(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=_e(this.x,e,i),this.y=_e(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(_e(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*s-h*l+e.x,this.y=u*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pe{constructor(e,i,s,l,u,h,d,p,g){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,p,g)}set(e,i,s,l,u,h,d,p,g){const v=this.elements;return v[0]=e,v[1]=l,v[2]=d,v[3]=i,v[4]=u,v[5]=p,v[6]=s,v[7]=h,v[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],p=s[6],g=s[1],v=s[4],m=s[7],_=s[2],S=s[5],E=s[8],T=l[0],M=l[3],x=l[6],N=l[1],U=l[4],A=l[7],F=l[2],z=l[5],P=l[8];return u[0]=h*T+d*N+p*F,u[3]=h*M+d*U+p*z,u[6]=h*x+d*A+p*P,u[1]=g*T+v*N+m*F,u[4]=g*M+v*U+m*z,u[7]=g*x+v*A+m*P,u[2]=_*T+S*N+E*F,u[5]=_*M+S*U+E*z,u[8]=_*x+S*A+E*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],g=e[7],v=e[8];return i*h*v-i*d*g-s*u*v+s*d*p+l*u*g-l*h*p}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],g=e[7],v=e[8],m=v*h-d*g,_=d*p-v*u,S=g*u-h*p,E=i*m+s*_+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=m*T,e[1]=(l*g-v*s)*T,e[2]=(d*s-l*h)*T,e[3]=_*T,e[4]=(v*i-l*p)*T,e[5]=(l*u-d*i)*T,e[6]=S*T,e[7]=(s*p-g*i)*T,e[8]=(h*i-s*u)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,h,d){const p=Math.cos(u),g=Math.sin(u);return this.set(s*p,s*g,-s*(p*h+g*d)+h+e,-l*g,l*p,-l*(-g*h+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Dd.makeScale(e,i)),this}rotate(e){return this.premultiply(Dd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Dd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Dd=new pe;function dx(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Yc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function BT(){const o=Yc("canvas");return o.style.display="block",o}const Y_={};function Gc(o){o in Y_||(Y_[o]=!0,console.warn(o))}function FT(o,e,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}function HT(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function GT(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const W_=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),j_=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function VT(){const o={enabled:!0,workingColorSpace:mo,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Be&&(l.r=wa(l.r),l.g=wa(l.g),l.b=wa(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Be&&(l.r=uo(l.r),l.g=uo(l.g),l.b=uo(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ds?kc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[mo]:{primaries:e,whitePoint:s,transfer:kc,toXYZ:W_,fromXYZ:j_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Fn},outputColorSpaceConfig:{drawingBufferColorSpace:Fn}},[Fn]:{primaries:e,whitePoint:s,transfer:Be,toXYZ:W_,fromXYZ:j_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Fn}}}),o}const Ne=VT();function wa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function uo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let qr;class XT{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{qr===void 0&&(qr=Yc("canvas")),qr.width=e.width,qr.height=e.height;const l=qr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=qr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Yc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=wa(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(wa(i[s]/255)*255):i[s]=wa(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kT=0;class um{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kT++}),this.uuid=yo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Nd(l[h].image)):u.push(Nd(l[h]))}else u=Nd(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function Nd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?XT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qT=0;class Hn extends _o{constructor(e=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,s=Ks,l=Ks,u=Qi,h=Qs,d=Pi,p=$i,g=Hn.DEFAULT_ANISOTROPY,v=ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qT++}),this.uuid=yo(),this.name="",this.source=new um(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=g,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ix)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nl:e.x=e.x-Math.floor(e.x);break;case Ks:e.x=e.x<0?0:1;break;case xp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nl:e.y=e.y-Math.floor(e.y);break;case Ks:e.y=e.y<0?0:1;break;case xp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=ix;Hn.DEFAULT_ANISOTROPY=1;class Ge{constructor(e=0,i=0,s=0,l=1){Ge.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const p=e.elements,g=p[0],v=p[4],m=p[8],_=p[1],S=p[5],E=p[9],T=p[2],M=p[6],x=p[10];if(Math.abs(v-_)<.01&&Math.abs(m-T)<.01&&Math.abs(E-M)<.01){if(Math.abs(v+_)<.1&&Math.abs(m+T)<.1&&Math.abs(E+M)<.1&&Math.abs(g+S+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(g+1)/2,A=(S+1)/2,F=(x+1)/2,z=(v+_)/4,P=(m+T)/4,B=(E+M)/4;return U>A&&U>F?U<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(U),l=z/s,u=P/s):A>F?A<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(A),s=z/l,u=B/l):F<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(F),s=P/u,l=B/u),this.set(s,l,u,i),this}let N=Math.sqrt((M-E)*(M-E)+(m-T)*(m-T)+(_-v)*(_-v));return Math.abs(N)<.001&&(N=1),this.x=(M-E)/N,this.y=(m-T)/N,this.z=(_-v)/N,this.w=Math.acos((g+S+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=_e(this.x,e.x,i.x),this.y=_e(this.y,e.y,i.y),this.z=_e(this.z,e.z,i.z),this.w=_e(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=_e(this.x,e,i),this.y=_e(this.y,e,i),this.z=_e(this.z,e,i),this.w=_e(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class YT extends _o{constructor(e=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth?s.depth:1,this.scissor=new Ge(0,0,e,i),this.scissorTest=!1,this.viewport=new Ge(0,0,e,i);const l={width:e,height:i,depth:this.depth};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},s);const u=new Hn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);u.flipY=!1,u.generateMipmaps=s.generateMipmaps,u.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new um(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends YT{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class px extends Hn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=di,this.minFilter=di,this.wrapR=Ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class WT extends Hn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=di,this.minFilter=di,this.wrapR=Ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fl{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,h,d){let p=s[l+0],g=s[l+1],v=s[l+2],m=s[l+3];const _=u[h+0],S=u[h+1],E=u[h+2],T=u[h+3];if(d===0){e[i+0]=p,e[i+1]=g,e[i+2]=v,e[i+3]=m;return}if(d===1){e[i+0]=_,e[i+1]=S,e[i+2]=E,e[i+3]=T;return}if(m!==T||p!==_||g!==S||v!==E){let M=1-d;const x=p*_+g*S+v*E+m*T,N=x>=0?1:-1,U=1-x*x;if(U>Number.EPSILON){const F=Math.sqrt(U),z=Math.atan2(F,x*N);M=Math.sin(M*z)/F,d=Math.sin(d*z)/F}const A=d*N;if(p=p*M+_*A,g=g*M+S*A,v=v*M+E*A,m=m*M+T*A,M===1-d){const F=1/Math.sqrt(p*p+g*g+v*v+m*m);p*=F,g*=F,v*=F,m*=F}}e[i]=p,e[i+1]=g,e[i+2]=v,e[i+3]=m}static multiplyQuaternionsFlat(e,i,s,l,u,h){const d=s[l],p=s[l+1],g=s[l+2],v=s[l+3],m=u[h],_=u[h+1],S=u[h+2],E=u[h+3];return e[i]=d*E+v*m+p*S-g*_,e[i+1]=p*E+v*_+g*m-d*S,e[i+2]=g*E+v*S+d*_-p*m,e[i+3]=v*E-d*m-p*_-g*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,p=Math.sin,g=d(s/2),v=d(l/2),m=d(u/2),_=p(s/2),S=p(l/2),E=p(u/2);switch(h){case"XYZ":this._x=_*v*m+g*S*E,this._y=g*S*m-_*v*E,this._z=g*v*E+_*S*m,this._w=g*v*m-_*S*E;break;case"YXZ":this._x=_*v*m+g*S*E,this._y=g*S*m-_*v*E,this._z=g*v*E-_*S*m,this._w=g*v*m+_*S*E;break;case"ZXY":this._x=_*v*m-g*S*E,this._y=g*S*m+_*v*E,this._z=g*v*E+_*S*m,this._w=g*v*m-_*S*E;break;case"ZYX":this._x=_*v*m-g*S*E,this._y=g*S*m+_*v*E,this._z=g*v*E-_*S*m,this._w=g*v*m+_*S*E;break;case"YZX":this._x=_*v*m+g*S*E,this._y=g*S*m+_*v*E,this._z=g*v*E-_*S*m,this._w=g*v*m-_*S*E;break;case"XZY":this._x=_*v*m-g*S*E,this._y=g*S*m-_*v*E,this._z=g*v*E+_*S*m,this._w=g*v*m+_*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],p=i[9],g=i[2],v=i[6],m=i[10],_=s+d+m;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(v-p)*S,this._y=(u-g)*S,this._z=(h-l)*S}else if(s>d&&s>m){const S=2*Math.sqrt(1+s-d-m);this._w=(v-p)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(u+g)/S}else if(d>m){const S=2*Math.sqrt(1+d-s-m);this._w=(u-g)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(p+v)/S}else{const S=2*Math.sqrt(1+m-s-d);this._w=(h-l)/S,this._x=(u+g)/S,this._y=(p+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_e(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,h=e._w,d=i._x,p=i._y,g=i._z,v=i._w;return this._x=s*v+h*d+l*g-u*p,this._y=l*v+h*p+u*d-s*g,this._z=u*v+h*g+s*p-l*d,this._w=h*v-s*d-l*p-u*g,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+s*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=l,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-i;return this._w=S*h+i*this._w,this._x=S*s+i*this._x,this._y=S*l+i*this._y,this._z=S*u+i*this._z,this.normalize(),this}const g=Math.sqrt(p),v=Math.atan2(g,d),m=Math.sin((1-i)*v)/g,_=Math.sin(i*v)/g;return this._w=h*m+this._w*_,this._x=s*m+this._x*_,this._y=l*m+this._y*_,this._z=u*m+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,i=0,s=0){V.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Z_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Z_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,h=e.y,d=e.z,p=e.w,g=2*(h*l-d*s),v=2*(d*i-u*l),m=2*(u*s-h*i);return this.x=i+p*g+h*m-d*v,this.y=s+p*v+d*g-u*m,this.z=l+p*m+u*v-h*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=_e(this.x,e.x,i.x),this.y=_e(this.y,e.y,i.y),this.z=_e(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=_e(this.x,e,i),this.y=_e(this.y,e,i),this.z=_e(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-u*d,this.y=u*h-s*p,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Ud.copy(this).projectOnVector(e),this.sub(Ud)}reflect(e){return this.sub(Ud.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(_e(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ud=new V,Z_=new Fl;class nr{constructor(e=new V(1/0,1/0,1/0),i=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ni.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ni.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ni.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Ni):Ni.fromBufferAttribute(u,h),Ni.applyMatrix4(e.matrixWorld),this.expandByPoint(Ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),fc.copy(s.boundingBox)),fc.applyMatrix4(e.matrixWorld),this.union(fc)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vl),hc.subVectors(this.max,vl),Yr.subVectors(e.a,vl),Wr.subVectors(e.b,vl),jr.subVectors(e.c,vl),rs.subVectors(Wr,Yr),os.subVectors(jr,Wr),Hs.subVectors(Yr,jr);let i=[0,-rs.z,rs.y,0,-os.z,os.y,0,-Hs.z,Hs.y,rs.z,0,-rs.x,os.z,0,-os.x,Hs.z,0,-Hs.x,-rs.y,rs.x,0,-os.y,os.x,0,-Hs.y,Hs.x,0];return!Ld(i,Yr,Wr,jr,hc)||(i=[1,0,0,0,1,0,0,0,1],!Ld(i,Yr,Wr,jr,hc))?!1:(dc.crossVectors(rs,os),i=[dc.x,dc.y,dc.z],Ld(i,Yr,Wr,jr,hc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ya[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ya[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ya[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ya[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ya[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ya[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ya[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ya[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ya),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ya=[new V,new V,new V,new V,new V,new V,new V,new V],Ni=new V,fc=new nr,Yr=new V,Wr=new V,jr=new V,rs=new V,os=new V,Hs=new V,vl=new V,hc=new V,dc=new V,Gs=new V;function Ld(o,e,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){Gs.fromArray(o,u);const d=l.x*Math.abs(Gs.x)+l.y*Math.abs(Gs.y)+l.z*Math.abs(Gs.z),p=e.dot(Gs),g=i.dot(Gs),v=s.dot(Gs);if(Math.max(-Math.max(p,g,v),Math.min(p,g,v))>d)return!1}return!0}const jT=new nr,_l=new V,Od=new V;class xo{constructor(e=new V,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):jT.setFromPoints(e).getCenter(s);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_l.subVectors(e,this.center);const i=_l.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(_l,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Od.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_l.copy(e.center).add(Od)),this.expandByPoint(_l.copy(e.center).sub(Od))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xa=new V,Pd=new V,pc=new V,ls=new V,zd=new V,mc=new V,Id=new V;class mx{constructor(e=new V,i=new V(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=xa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(xa.copy(this.origin).addScaledVector(this.direction,i),xa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Pd.copy(e).add(i).multiplyScalar(.5),pc.copy(i).sub(e).normalize(),ls.copy(this.origin).sub(Pd);const u=e.distanceTo(i)*.5,h=-this.direction.dot(pc),d=ls.dot(this.direction),p=-ls.dot(pc),g=ls.lengthSq(),v=Math.abs(1-h*h);let m,_,S,E;if(v>0)if(m=h*p-d,_=h*d-p,E=u*v,m>=0)if(_>=-E)if(_<=E){const T=1/v;m*=T,_*=T,S=m*(m+h*_+2*d)+_*(h*m+_+2*p)+g}else _=u,m=Math.max(0,-(h*_+d)),S=-m*m+_*(_+2*p)+g;else _=-u,m=Math.max(0,-(h*_+d)),S=-m*m+_*(_+2*p)+g;else _<=-E?(m=Math.max(0,-(-h*u+d)),_=m>0?-u:Math.min(Math.max(-u,-p),u),S=-m*m+_*(_+2*p)+g):_<=E?(m=0,_=Math.min(Math.max(-u,-p),u),S=_*(_+2*p)+g):(m=Math.max(0,-(h*u+d)),_=m>0?u:Math.min(Math.max(-u,-p),u),S=-m*m+_*(_+2*p)+g);else _=h>0?-u:u,m=Math.max(0,-(h*_+d)),S=-m*m+_*(_+2*p)+g;return s&&s.copy(this.origin).addScaledVector(this.direction,m),l&&l.copy(Pd).addScaledVector(pc,_),S}intersectSphere(e,i){xa.subVectors(e.center,this.origin);const s=xa.dot(this.direction),l=xa.dot(xa)-s*s,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,p=s+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,h,d,p;const g=1/this.direction.x,v=1/this.direction.y,m=1/this.direction.z,_=this.origin;return g>=0?(s=(e.min.x-_.x)*g,l=(e.max.x-_.x)*g):(s=(e.max.x-_.x)*g,l=(e.min.x-_.x)*g),v>=0?(u=(e.min.y-_.y)*v,h=(e.max.y-_.y)*v):(u=(e.max.y-_.y)*v,h=(e.min.y-_.y)*v),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),m>=0?(d=(e.min.z-_.z)*m,p=(e.max.z-_.z)*m):(d=(e.max.z-_.z)*m,p=(e.min.z-_.z)*m),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,xa)!==null}intersectTriangle(e,i,s,l,u){zd.subVectors(i,e),mc.subVectors(s,e),Id.crossVectors(zd,mc);let h=this.direction.dot(Id),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;ls.subVectors(this.origin,e);const p=d*this.direction.dot(mc.crossVectors(ls,mc));if(p<0)return null;const g=d*this.direction.dot(zd.cross(ls));if(g<0||p+g>h)return null;const v=-d*ls.dot(Id);return v<0?null:this.at(v/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(e,i,s,l,u,h,d,p,g,v,m,_,S,E,T,M){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,p,g,v,m,_,S,E,T,M)}set(e,i,s,l,u,h,d,p,g,v,m,_,S,E,T,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=s,x[12]=l,x[1]=u,x[5]=h,x[9]=d,x[13]=p,x[2]=g,x[6]=v,x[10]=m,x[14]=_,x[3]=S,x[7]=E,x[11]=T,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/Zr.setFromMatrixColumn(e,0).length(),u=1/Zr.setFromMatrixColumn(e,1).length(),h=1/Zr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,h=Math.cos(s),d=Math.sin(s),p=Math.cos(l),g=Math.sin(l),v=Math.cos(u),m=Math.sin(u);if(e.order==="XYZ"){const _=h*v,S=h*m,E=d*v,T=d*m;i[0]=p*v,i[4]=-p*m,i[8]=g,i[1]=S+E*g,i[5]=_-T*g,i[9]=-d*p,i[2]=T-_*g,i[6]=E+S*g,i[10]=h*p}else if(e.order==="YXZ"){const _=p*v,S=p*m,E=g*v,T=g*m;i[0]=_+T*d,i[4]=E*d-S,i[8]=h*g,i[1]=h*m,i[5]=h*v,i[9]=-d,i[2]=S*d-E,i[6]=T+_*d,i[10]=h*p}else if(e.order==="ZXY"){const _=p*v,S=p*m,E=g*v,T=g*m;i[0]=_-T*d,i[4]=-h*m,i[8]=E+S*d,i[1]=S+E*d,i[5]=h*v,i[9]=T-_*d,i[2]=-h*g,i[6]=d,i[10]=h*p}else if(e.order==="ZYX"){const _=h*v,S=h*m,E=d*v,T=d*m;i[0]=p*v,i[4]=E*g-S,i[8]=_*g+T,i[1]=p*m,i[5]=T*g+_,i[9]=S*g-E,i[2]=-g,i[6]=d*p,i[10]=h*p}else if(e.order==="YZX"){const _=h*p,S=h*g,E=d*p,T=d*g;i[0]=p*v,i[4]=T-_*m,i[8]=E*m+S,i[1]=m,i[5]=h*v,i[9]=-d*v,i[2]=-g*v,i[6]=S*m+E,i[10]=_-T*m}else if(e.order==="XZY"){const _=h*p,S=h*g,E=d*p,T=d*g;i[0]=p*v,i[4]=-m,i[8]=g*v,i[1]=_*m+T,i[5]=h*v,i[9]=S*m-E,i[2]=E*m-S,i[6]=d*v,i[10]=T*m+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ZT,e,KT)}lookAt(e,i,s){const l=this.elements;return ui.subVectors(e,i),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),us.crossVectors(s,ui),us.lengthSq()===0&&(Math.abs(s.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),us.crossVectors(s,ui)),us.normalize(),gc.crossVectors(ui,us),l[0]=us.x,l[4]=gc.x,l[8]=ui.x,l[1]=us.y,l[5]=gc.y,l[9]=ui.y,l[2]=us.z,l[6]=gc.z,l[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],p=s[8],g=s[12],v=s[1],m=s[5],_=s[9],S=s[13],E=s[2],T=s[6],M=s[10],x=s[14],N=s[3],U=s[7],A=s[11],F=s[15],z=l[0],P=l[4],B=l[8],w=l[12],R=l[1],H=l[5],tt=l[9],st=l[13],ut=l[2],mt=l[6],k=l[10],lt=l[14],K=l[3],yt=l[7],Mt=l[11],Ft=l[15];return u[0]=h*z+d*R+p*ut+g*K,u[4]=h*P+d*H+p*mt+g*yt,u[8]=h*B+d*tt+p*k+g*Mt,u[12]=h*w+d*st+p*lt+g*Ft,u[1]=v*z+m*R+_*ut+S*K,u[5]=v*P+m*H+_*mt+S*yt,u[9]=v*B+m*tt+_*k+S*Mt,u[13]=v*w+m*st+_*lt+S*Ft,u[2]=E*z+T*R+M*ut+x*K,u[6]=E*P+T*H+M*mt+x*yt,u[10]=E*B+T*tt+M*k+x*Mt,u[14]=E*w+T*st+M*lt+x*Ft,u[3]=N*z+U*R+A*ut+F*K,u[7]=N*P+U*H+A*mt+F*yt,u[11]=N*B+U*tt+A*k+F*Mt,u[15]=N*w+U*st+A*lt+F*Ft,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],h=e[1],d=e[5],p=e[9],g=e[13],v=e[2],m=e[6],_=e[10],S=e[14],E=e[3],T=e[7],M=e[11],x=e[15];return E*(+u*p*m-l*g*m-u*d*_+s*g*_+l*d*S-s*p*S)+T*(+i*p*S-i*g*_+u*h*_-l*h*S+l*g*v-u*p*v)+M*(+i*g*m-i*d*S-u*h*m+s*h*S+u*d*v-s*g*v)+x*(-l*d*v-i*p*m+i*d*_+l*h*m-s*h*_+s*p*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],g=e[7],v=e[8],m=e[9],_=e[10],S=e[11],E=e[12],T=e[13],M=e[14],x=e[15],N=m*M*g-T*_*g+T*p*S-d*M*S-m*p*x+d*_*x,U=E*_*g-v*M*g-E*p*S+h*M*S+v*p*x-h*_*x,A=v*T*g-E*m*g+E*d*S-h*T*S-v*d*x+h*m*x,F=E*m*p-v*T*p-E*d*_+h*T*_+v*d*M-h*m*M,z=i*N+s*U+l*A+u*F;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/z;return e[0]=N*P,e[1]=(T*_*u-m*M*u-T*l*S+s*M*S+m*l*x-s*_*x)*P,e[2]=(d*M*u-T*p*u+T*l*g-s*M*g-d*l*x+s*p*x)*P,e[3]=(m*p*u-d*_*u-m*l*g+s*_*g+d*l*S-s*p*S)*P,e[4]=U*P,e[5]=(v*M*u-E*_*u+E*l*S-i*M*S-v*l*x+i*_*x)*P,e[6]=(E*p*u-h*M*u-E*l*g+i*M*g+h*l*x-i*p*x)*P,e[7]=(h*_*u-v*p*u+v*l*g-i*_*g-h*l*S+i*p*S)*P,e[8]=A*P,e[9]=(E*m*u-v*T*u-E*s*S+i*T*S+v*s*x-i*m*x)*P,e[10]=(h*T*u-E*d*u+E*s*g-i*T*g-h*s*x+i*d*x)*P,e[11]=(v*d*u-h*m*u-v*s*g+i*m*g+h*s*S-i*d*S)*P,e[12]=F*P,e[13]=(v*T*l-E*m*l+E*s*_-i*T*_-v*s*M+i*m*M)*P,e[14]=(E*d*l-h*T*l-E*s*p+i*T*p+h*s*M-i*d*M)*P,e[15]=(h*m*l-v*d*l+v*s*p-i*m*p-h*s*_+i*d*_)*P,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=e.x,d=e.y,p=e.z,g=u*h,v=u*d;return this.set(g*h+s,g*d-l*p,g*p+l*d,0,g*d+l*p,v*d+s,v*p-l*h,0,g*p-l*d,v*p+l*h,u*p*p+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,h){return this.set(1,s,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,p=i._w,g=u+u,v=h+h,m=d+d,_=u*g,S=u*v,E=u*m,T=h*v,M=h*m,x=d*m,N=p*g,U=p*v,A=p*m,F=s.x,z=s.y,P=s.z;return l[0]=(1-(T+x))*F,l[1]=(S+A)*F,l[2]=(E-U)*F,l[3]=0,l[4]=(S-A)*z,l[5]=(1-(_+x))*z,l[6]=(M+N)*z,l[7]=0,l[8]=(E+U)*P,l[9]=(M-N)*P,l[10]=(1-(_+T))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let u=Zr.set(l[0],l[1],l[2]).length();const h=Zr.set(l[4],l[5],l[6]).length(),d=Zr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],Ui.copy(this);const g=1/u,v=1/h,m=1/d;return Ui.elements[0]*=g,Ui.elements[1]*=g,Ui.elements[2]*=g,Ui.elements[4]*=v,Ui.elements[5]*=v,Ui.elements[6]*=v,Ui.elements[8]*=m,Ui.elements[9]*=m,Ui.elements[10]*=m,i.setFromRotationMatrix(Ui),s.x=u,s.y=h,s.z=d,this}makePerspective(e,i,s,l,u,h,d=Aa){const p=this.elements,g=2*u/(i-e),v=2*u/(s-l),m=(i+e)/(i-e),_=(s+l)/(s-l);let S,E;if(d===Aa)S=-(h+u)/(h-u),E=-2*h*u/(h-u);else if(d===qc)S=-h/(h-u),E=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=m,p[12]=0,p[1]=0,p[5]=v,p[9]=_,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,u,h,d=Aa){const p=this.elements,g=1/(i-e),v=1/(s-l),m=1/(h-u),_=(i+e)*g,S=(s+l)*v;let E,T;if(d===Aa)E=(h+u)*m,T=-2*m;else if(d===qc)E=u*m,T=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*g,p[4]=0,p[8]=0,p[12]=-_,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=T,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const Zr=new V,Ui=new Ve,ZT=new V(0,0,0),KT=new V(1,1,1),us=new V,gc=new V,ui=new V,K_=new Ve,Q_=new Fl;class ta{constructor(e=0,i=0,s=0,l=ta.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],p=l[1],g=l[5],v=l[9],m=l[2],_=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(_e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(_,g),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,g)):(this._y=Math.atan2(-m,u),this._z=0);break;case"ZXY":this._x=Math.asin(_e(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-m,S),this._z=Math.atan2(-h,g)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-_e(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-h,g));break;case"YZX":this._z=Math.asin(_e(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,g),this._y=Math.atan2(-m,u)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(_,g),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return K_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(K_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Q_.setFromEuler(this),this.setFromQuaternion(Q_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ta.DEFAULT_ORDER="XYZ";class gx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let QT=0;const J_=new V,Kr=new Fl,Sa=new Ve,vc=new V,yl=new V,JT=new V,$T=new Fl,$_=new V(1,0,0),ty=new V(0,1,0),ey=new V(0,0,1),ny={type:"added"},t1={type:"removed"},Qr={type:"childadded",child:null},Bd={type:"childremoved",child:null};class Gn extends _o{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:QT++}),this.uuid=yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gn.DEFAULT_UP.clone();const e=new V,i=new ta,s=new Fl,l=new V(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ve},normalMatrix:{value:new pe}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=Gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Kr.setFromAxisAngle(e,i),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(e,i){return Kr.setFromAxisAngle(e,i),this.quaternion.premultiply(Kr),this}rotateX(e){return this.rotateOnAxis($_,e)}rotateY(e){return this.rotateOnAxis(ty,e)}rotateZ(e){return this.rotateOnAxis(ey,e)}translateOnAxis(e,i){return J_.copy(e).applyQuaternion(this.quaternion),this.position.add(J_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis($_,e)}translateY(e){return this.translateOnAxis(ty,e)}translateZ(e){return this.translateOnAxis(ey,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?vc.copy(e):vc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),yl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sa.lookAt(yl,vc,this.up):Sa.lookAt(vc,yl,this.up),this.quaternion.setFromRotationMatrix(Sa),l&&(Sa.extractRotation(l.matrixWorld),Kr.setFromRotationMatrix(Sa),this.quaternion.premultiply(Kr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ny),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(t1),Bd.child=e,this.dispatchEvent(Bd),Bd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ny),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yl,e,JT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yl,$T,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?{min:d.boundingBox.min.toArray(),max:d.boundingBox.max.toArray()}:void 0,boundingSphere:d.boundingSphere?{radius:d.boundingSphere.radius,center:d.boundingSphere.center.toArray()}:void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let g=0,v=p.length;g<v;g++){const m=p[g];u(e.shapes,m)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,g=this.material.length;p<g;p++)d.push(u(e.materials,this.material[p]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(u(e.animations,p))}}if(i){const d=h(e.geometries),p=h(e.materials),g=h(e.textures),v=h(e.images),m=h(e.shapes),_=h(e.skeletons),S=h(e.animations),E=h(e.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),g.length>0&&(s.textures=g),v.length>0&&(s.images=v),m.length>0&&(s.shapes=m),_.length>0&&(s.skeletons=_),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const p=[];for(const g in d){const v=d[g];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Gn.DEFAULT_UP=new V(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Li=new V,Ma=new V,Fd=new V,Ea=new V,Jr=new V,$r=new V,iy=new V,Hd=new V,Gd=new V,Vd=new V,Xd=new Ge,kd=new Ge,qd=new Ge;class Oi{constructor(e=new V,i=new V,s=new V){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Li.subVectors(e,i),l.cross(Li);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){Li.subVectors(l,i),Ma.subVectors(s,i),Fd.subVectors(e,i);const h=Li.dot(Li),d=Li.dot(Ma),p=Li.dot(Fd),g=Ma.dot(Ma),v=Ma.dot(Fd),m=h*g-d*d;if(m===0)return u.set(0,0,0),null;const _=1/m,S=(g*p-d*v)*_,E=(h*v-d*p)*_;return u.set(1-S-E,E,S)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Ea)===null?!1:Ea.x>=0&&Ea.y>=0&&Ea.x+Ea.y<=1}static getInterpolation(e,i,s,l,u,h,d,p){return this.getBarycoord(e,i,s,l,Ea)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Ea.x),p.addScaledVector(h,Ea.y),p.addScaledVector(d,Ea.z),p)}static getInterpolatedAttribute(e,i,s,l,u,h){return Xd.setScalar(0),kd.setScalar(0),qd.setScalar(0),Xd.fromBufferAttribute(e,i),kd.fromBufferAttribute(e,s),qd.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Xd,u.x),h.addScaledVector(kd,u.y),h.addScaledVector(qd,u.z),h}static isFrontFacing(e,i,s,l){return Li.subVectors(s,i),Ma.subVectors(e,i),Li.cross(Ma).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),Ma.subVectors(this.a,this.b),Li.cross(Ma).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Oi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return Oi.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let h,d;Jr.subVectors(l,s),$r.subVectors(u,s),Hd.subVectors(e,s);const p=Jr.dot(Hd),g=$r.dot(Hd);if(p<=0&&g<=0)return i.copy(s);Gd.subVectors(e,l);const v=Jr.dot(Gd),m=$r.dot(Gd);if(v>=0&&m<=v)return i.copy(l);const _=p*m-v*g;if(_<=0&&p>=0&&v<=0)return h=p/(p-v),i.copy(s).addScaledVector(Jr,h);Vd.subVectors(e,u);const S=Jr.dot(Vd),E=$r.dot(Vd);if(E>=0&&S<=E)return i.copy(u);const T=S*g-p*E;if(T<=0&&g>=0&&E<=0)return d=g/(g-E),i.copy(s).addScaledVector($r,d);const M=v*E-S*m;if(M<=0&&m-v>=0&&S-E>=0)return iy.subVectors(u,l),d=(m-v)/(m-v+(S-E)),i.copy(l).addScaledVector(iy,d);const x=1/(M+T+_);return h=T*x,d=_*x,i.copy(s).addScaledVector(Jr,h).addScaledVector($r,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},_c={h:0,s:0,l:0};function Yd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class ce{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ne.toWorkingColorSpace(this,i),this}setRGB(e,i,s,l=Ne.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ne.toWorkingColorSpace(this,l),this}setHSL(e,i,s,l=Ne.workingColorSpace){if(e=lm(e,1),i=_e(i,0,1),s=_e(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=Yd(h,u,e+1/3),this.g=Yd(h,u,e),this.b=Yd(h,u,e-1/3)}return Ne.toWorkingColorSpace(this,l),this}setStyle(e,i=Fn){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Fn){const s=vx[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wa(e.r),this.g=wa(e.g),this.b=wa(e.b),this}copyLinearToSRGB(e){return this.r=uo(e.r),this.g=uo(e.g),this.b=uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return Ne.fromWorkingColorSpace(In.copy(this),e),Math.round(_e(In.r*255,0,255))*65536+Math.round(_e(In.g*255,0,255))*256+Math.round(_e(In.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ne.workingColorSpace){Ne.fromWorkingColorSpace(In.copy(this),i);const s=In.r,l=In.g,u=In.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let p,g;const v=(d+h)/2;if(d===h)p=0,g=0;else{const m=h-d;switch(g=v<=.5?m/(h+d):m/(2-h-d),h){case s:p=(l-u)/m+(l<u?6:0);break;case l:p=(u-s)/m+2;break;case u:p=(s-l)/m+4;break}p/=6}return e.h=p,e.s=g,e.l=v,e}getRGB(e,i=Ne.workingColorSpace){return Ne.fromWorkingColorSpace(In.copy(this),i),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=Fn){Ne.fromWorkingColorSpace(In.copy(this),e);const i=In.r,s=In.g,l=In.b;return e!==Fn?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(cs),this.setHSL(cs.h+e,cs.s+i,cs.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(cs),e.getHSL(_c);const s=Cl(cs.h,_c.h,i),l=Cl(cs.s,_c.s,i),u=Cl(cs.l,_c.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new ce;ce.NAMES=vx;let e1=0;class So extends _o{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e1++}),this.uuid=yo(),this.name="",this.type="Material",this.blending=lo,this.side=ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=up,this.blendDst=cp,this.blendEquation=js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=V_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xr,this.stencilZFail=Xr,this.stencilZPass=Xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==lo&&(s.blending=this.blending),this.side!==ms&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==up&&(s.blendSrc=this.blendSrc),this.blendDst!==cp&&(s.blendDst=this.blendDst),this.blendEquation!==js&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==fo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==V_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Xr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Xr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const p=u[d];delete p.metadata,h.push(p)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class er extends So{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.combine=Ky,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hn=new V,yc=new Xt;let n1=0;class pi{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:n1++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=X_,this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)yc.fromBufferAttribute(this,i),yc.applyMatrix3(e),this.setXY(i,yc.x,yc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=ro(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Yn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ro(i,this.array)),i}setX(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ro(i,this.array)),i}setY(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ro(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ro(i,this.array)),i}setW(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),s=Yn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),s=Yn(s,this.array),l=Yn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),s=Yn(s,this.array),l=Yn(l,this.array),u=Yn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==X_&&(e.usage=this.usage),e}}class _x extends pi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class yx extends pi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Ye extends pi{constructor(e,i,s){super(new Float32Array(e),i,s)}}let i1=0;const Ti=new Ve,Wd=new Gn,to=new V,ci=new nr,xl=new nr,En=new V;class Un extends _o{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i1++}),this.uuid=yo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dx(e)?yx:_x)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new pe().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ti.makeRotationFromQuaternion(e),this.applyMatrix4(Ti),this}rotateX(e){return Ti.makeRotationX(e),this.applyMatrix4(Ti),this}rotateY(e){return Ti.makeRotationY(e),this.applyMatrix4(Ti),this}rotateZ(e){return Ti.makeRotationZ(e),this.applyMatrix4(Ti),this}translate(e,i,s){return Ti.makeTranslation(e,i,s),this.applyMatrix4(Ti),this}scale(e,i,s){return Ti.makeScale(e,i,s),this.applyMatrix4(Ti),this}lookAt(e){return Wd.lookAt(e),Wd.updateMatrix(),this.applyMatrix4(Wd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Ye(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nr);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ci.setFromBufferAttribute(u),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const s=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];xl.setFromBufferAttribute(d),this.morphTargetsRelative?(En.addVectors(ci.min,xl.min),ci.expandByPoint(En),En.addVectors(ci.max,xl.max),ci.expandByPoint(En)):(ci.expandByPoint(xl.min),ci.expandByPoint(xl.max))}ci.getCenter(s);let l=0;for(let u=0,h=e.count;u<h;u++)En.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(En));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],p=this.morphTargetsRelative;for(let g=0,v=d.count;g<v;g++)En.fromBufferAttribute(d,g),p&&(to.fromBufferAttribute(e,g),En.add(to)),l=Math.max(l,s.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let B=0;B<s.count;B++)d[B]=new V,p[B]=new V;const g=new V,v=new V,m=new V,_=new Xt,S=new Xt,E=new Xt,T=new V,M=new V;function x(B,w,R){g.fromBufferAttribute(s,B),v.fromBufferAttribute(s,w),m.fromBufferAttribute(s,R),_.fromBufferAttribute(u,B),S.fromBufferAttribute(u,w),E.fromBufferAttribute(u,R),v.sub(g),m.sub(g),S.sub(_),E.sub(_);const H=1/(S.x*E.y-E.x*S.y);isFinite(H)&&(T.copy(v).multiplyScalar(E.y).addScaledVector(m,-S.y).multiplyScalar(H),M.copy(m).multiplyScalar(S.x).addScaledVector(v,-E.x).multiplyScalar(H),d[B].add(T),d[w].add(T),d[R].add(T),p[B].add(M),p[w].add(M),p[R].add(M))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let B=0,w=N.length;B<w;++B){const R=N[B],H=R.start,tt=R.count;for(let st=H,ut=H+tt;st<ut;st+=3)x(e.getX(st+0),e.getX(st+1),e.getX(st+2))}const U=new V,A=new V,F=new V,z=new V;function P(B){F.fromBufferAttribute(l,B),z.copy(F);const w=d[B];U.copy(w),U.sub(F.multiplyScalar(F.dot(w))).normalize(),A.crossVectors(z,w);const H=A.dot(p[B])<0?-1:1;h.setXYZW(B,U.x,U.y,U.z,H)}for(let B=0,w=N.length;B<w;++B){const R=N[B],H=R.start,tt=R.count;for(let st=H,ut=H+tt;st<ut;st+=3)P(e.getX(st+0)),P(e.getX(st+1)),P(e.getX(st+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new pi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let _=0,S=s.count;_<S;_++)s.setXYZ(_,0,0,0);const l=new V,u=new V,h=new V,d=new V,p=new V,g=new V,v=new V,m=new V;if(e)for(let _=0,S=e.count;_<S;_+=3){const E=e.getX(_+0),T=e.getX(_+1),M=e.getX(_+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,T),h.fromBufferAttribute(i,M),v.subVectors(h,u),m.subVectors(l,u),v.cross(m),d.fromBufferAttribute(s,E),p.fromBufferAttribute(s,T),g.fromBufferAttribute(s,M),d.add(v),p.add(v),g.add(v),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(M,g.x,g.y,g.z)}else for(let _=0,S=i.count;_<S;_+=3)l.fromBufferAttribute(i,_+0),u.fromBufferAttribute(i,_+1),h.fromBufferAttribute(i,_+2),v.subVectors(h,u),m.subVectors(l,u),v.cross(m),s.setXYZ(_+0,v.x,v.y,v.z),s.setXYZ(_+1,v.x,v.y,v.z),s.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)En.fromBufferAttribute(e,i),En.normalize(),e.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function e(d,p){const g=d.array,v=d.itemSize,m=d.normalized,_=new g.constructor(p.length*v);let S=0,E=0;for(let T=0,M=p.length;T<M;T++){d.isInterleavedBufferAttribute?S=p[T]*d.data.stride+d.offset:S=p[T]*v;for(let x=0;x<v;x++)_[E++]=g[S++]}return new pi(_,v,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Un,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],g=e(p,s);i.setAttribute(d,g)}const u=this.morphAttributes;for(const d in u){const p=[],g=u[d];for(let v=0,m=g.length;v<m;v++){const _=g[v],S=e(_,s);p.push(S)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const g=h[d];i.addGroup(g.start,g.count,g.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const g in p)p[g]!==void 0&&(e[g]=p[g]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const g=s[p];e.data.attributes[p]=g.toJSON(e.data)}const l={};let u=!1;for(const p in this.morphAttributes){const g=this.morphAttributes[p],v=[];for(let m=0,_=g.length;m<_;m++){const S=g[m];v.push(S.toJSON(e.data))}v.length>0&&(l[p]=v,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const g in l){const v=l[g];this.setAttribute(g,v.clone(i))}const u=e.morphAttributes;for(const g in u){const v=[],m=u[g];for(let _=0,S=m.length;_<S;_++)v.push(m[_].clone(i));this.morphAttributes[g]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let g=0,v=h.length;g<v;g++){const m=h[g];this.addGroup(m.start,m.count,m.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ay=new Ve,Vs=new mx,xc=new xo,sy=new V,Sc=new V,Mc=new V,Ec=new V,jd=new V,Tc=new V,ry=new V,bc=new V;class ee extends Gn{constructor(e=new Un,i=new er){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){Tc.set(0,0,0);for(let p=0,g=u.length;p<g;p++){const v=d[p],m=u[p];v!==0&&(jd.fromBufferAttribute(m,e),h?Tc.addScaledVector(jd,v):Tc.addScaledVector(jd.sub(i),v))}i.add(Tc)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),xc.copy(s.boundingSphere),xc.applyMatrix4(u),Vs.copy(e.ray).recast(e.near),!(xc.containsPoint(Vs.origin)===!1&&(Vs.intersectSphere(xc,sy)===null||Vs.origin.distanceToSquared(sy)>(e.far-e.near)**2))&&(ay.copy(u).invert(),Vs.copy(e.ray).applyMatrix4(ay),!(s.boundingBox!==null&&Vs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Vs)))}_computeIntersections(e,i,s){let l;const u=this.geometry,h=this.material,d=u.index,p=u.attributes.position,g=u.attributes.uv,v=u.attributes.uv1,m=u.attributes.normal,_=u.groups,S=u.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,T=_.length;E<T;E++){const M=_[E],x=h[M.materialIndex],N=Math.max(M.start,S.start),U=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let A=N,F=U;A<F;A+=3){const z=d.getX(A),P=d.getX(A+1),B=d.getX(A+2);l=Ac(this,x,e,s,g,v,m,z,P,B),l&&(l.faceIndex=Math.floor(A/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),T=Math.min(d.count,S.start+S.count);for(let M=E,x=T;M<x;M+=3){const N=d.getX(M),U=d.getX(M+1),A=d.getX(M+2);l=Ac(this,h,e,s,g,v,m,N,U,A),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let E=0,T=_.length;E<T;E++){const M=_[E],x=h[M.materialIndex],N=Math.max(M.start,S.start),U=Math.min(p.count,Math.min(M.start+M.count,S.start+S.count));for(let A=N,F=U;A<F;A+=3){const z=A,P=A+1,B=A+2;l=Ac(this,x,e,s,g,v,m,z,P,B),l&&(l.faceIndex=Math.floor(A/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),T=Math.min(p.count,S.start+S.count);for(let M=E,x=T;M<x;M+=3){const N=M,U=M+1,A=M+2;l=Ac(this,h,e,s,g,v,m,N,U,A),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function a1(o,e,i,s,l,u,h,d){let p;if(e.side===Zn?p=s.intersectTriangle(h,u,l,!0,d):p=s.intersectTriangle(l,u,h,e.side===ms,d),p===null)return null;bc.copy(d),bc.applyMatrix4(o.matrixWorld);const g=i.ray.origin.distanceTo(bc);return g<i.near||g>i.far?null:{distance:g,point:bc.clone(),object:o}}function Ac(o,e,i,s,l,u,h,d,p,g){o.getVertexPosition(d,Sc),o.getVertexPosition(p,Mc),o.getVertexPosition(g,Ec);const v=a1(o,e,i,s,Sc,Mc,Ec,ry);if(v){const m=new V;Oi.getBarycoord(ry,Sc,Mc,Ec,m),l&&(v.uv=Oi.getInterpolatedAttribute(l,d,p,g,m,new Xt)),u&&(v.uv1=Oi.getInterpolatedAttribute(u,d,p,g,m,new Xt)),h&&(v.normal=Oi.getInterpolatedAttribute(h,d,p,g,m,new V),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const _={a:d,b:p,c:g,normal:new V,materialIndex:0};Oi.getNormal(Sc,Mc,Ec,_.normal),v.face=_,v.barycoord=m}return v}class Da extends Un{constructor(e=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const p=[],g=[],v=[],m=[];let _=0,S=0;E("z","y","x",-1,-1,s,i,e,h,u,0),E("z","y","x",1,-1,s,i,-e,h,u,1),E("x","z","y",1,1,e,s,i,l,h,2),E("x","z","y",1,-1,e,s,-i,l,h,3),E("x","y","z",1,-1,e,i,s,l,u,4),E("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(p),this.setAttribute("position",new Ye(g,3)),this.setAttribute("normal",new Ye(v,3)),this.setAttribute("uv",new Ye(m,2));function E(T,M,x,N,U,A,F,z,P,B,w){const R=A/P,H=F/B,tt=A/2,st=F/2,ut=z/2,mt=P+1,k=B+1;let lt=0,K=0;const yt=new V;for(let Mt=0;Mt<k;Mt++){const Ft=Mt*H-st;for(let Jt=0;Jt<mt;Jt++){const ye=Jt*R-tt;yt[T]=ye*N,yt[M]=Ft*U,yt[x]=ut,g.push(yt.x,yt.y,yt.z),yt[T]=0,yt[M]=0,yt[x]=z>0?1:-1,v.push(yt.x,yt.y,yt.z),m.push(Jt/P),m.push(1-Mt/B),lt+=1}}for(let Mt=0;Mt<B;Mt++)for(let Ft=0;Ft<P;Ft++){const Jt=_+Ft+mt*Mt,ye=_+Ft+mt*(Mt+1),L=_+(Ft+1)+mt*(Mt+1),Z=_+(Ft+1)+mt*Mt;p.push(Jt,ye,Z),p.push(ye,L,Z),K+=6}d.addGroup(S,K,w),S+=K,_+=lt}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Da(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function go(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Wn(o){const e={};for(let i=0;i<o.length;i++){const s=go(o[i]);for(const l in s)e[l]=s[l]}return e}function s1(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function xx(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ne.workingColorSpace}const Il={clone:go,merge:Wn};var r1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jn extends So{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=r1,this.fragmentShader=o1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=go(e.uniforms),this.uniformsGroups=s1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Sx extends Gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=Aa}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fs=new V,oy=new Xt,ly=new Xt;class fi extends Sx{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=zl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Al*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zl*2*Math.atan(Math.tan(Al*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fs.x,fs.y).multiplyScalar(-e/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(fs.x,fs.y).multiplyScalar(-e/fs.z)}getViewSize(e,i){return this.getViewBounds(e,oy,ly),i.subVectors(ly,oy)}setViewOffset(e,i,s,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Al*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,g=h.fullHeight;u+=h.offsetX*l/p,i-=h.offsetY*s/g,l*=h.width/p,s*=h.height/g}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const eo=-90,no=1;class l1 extends Gn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new fi(eo,no,e,i);l.layers=this.layers,this.add(l);const u=new fi(eo,no,e,i);u.layers=this.layers,this.add(u);const h=new fi(eo,no,e,i);h.layers=this.layers,this.add(h);const d=new fi(eo,no,e,i);d.layers=this.layers,this.add(d);const p=new fi(eo,no,e,i);p.layers=this.layers,this.add(p);const g=new fi(eo,no,e,i);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,p]=i;for(const g of i)this.remove(g);if(e===Aa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===qc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of i)this.add(g),g.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,p,g,v]=this.children,m=e.getRenderTarget(),_=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,u),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,p),e.setRenderTarget(s,4,l),e.render(i,g),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,l),e.render(i,v),e.setRenderTarget(m,_,S),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Mx extends Hn{constructor(e=[],i=ho,s,l,u,h,d,p,g,v){super(e,i,s,l,u,h,d,p,g,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class u1 extends zi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Mx(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Qi}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Da(5,5,5),u=new jn({name:"CubemapFromEquirect",uniforms:go(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Zn,blending:Ca});u.uniforms.tEquirect.value=i;const h=new ee(l,u),d=i.minFilter;return i.minFilter===Qs&&(i.minFilter=Qi),new l1(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(u)}}class ba extends Gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const c1={type:"move"};class Zd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ba,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ba,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ba,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,h=null;const d=this._targetRay,p=this._grip,g=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(g&&e.hand){h=!0;for(const T of e.hand.values()){const M=i.getJointPose(T,s),x=this._getHandJoint(g,T);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const v=g.joints["index-finger-tip"],m=g.joints["thumb-tip"],_=v.position.distanceTo(m.position),S=.02,E=.005;g.inputState.pinching&&_>S+E?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&_<=S-E&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(c1)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),g!==null&&(g.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new ba;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class cm{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new ce(e),this.density=i}clone(){return new cm(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ex extends Gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ta,this.environmentIntensity=1,this.environmentRotation=new ta,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class f1 extends Hn{constructor(e=null,i=1,s=1,l,u,h,d,p,g=di,v=di,m,_){super(null,h,d,p,g,v,l,u,m,_),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uy extends pi{constructor(e,i,s,l=1){super(e,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const io=new Ve,cy=new Ve,Cc=[],fy=new nr,h1=new Ve,Sl=new ee,Ml=new xo;class d1 extends ee{constructor(e,i,s){super(e,i),this.isInstancedMesh=!0,this.instanceMatrix=new uy(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,h1)}computeBoundingBox(){const e=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new nr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,io),fy.copy(e.boundingBox).applyMatrix4(io),this.boundingBox.union(fy)}computeBoundingSphere(){const e=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new xo),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,io),Ml.copy(e.boundingSphere).applyMatrix4(io),this.boundingSphere.union(Ml)}copy(e,i){return super.copy(e,i),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,i){i.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,i){i.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,u=s.length+1,h=e*u+1;for(let d=0;d<s.length;d++)s[d]=l[h+d]}raycast(e,i){const s=this.matrixWorld,l=this.count;if(Sl.geometry=this.geometry,Sl.material=this.material,Sl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ml.copy(this.boundingSphere),Ml.applyMatrix4(s),e.ray.intersectsSphere(Ml)!==!1))for(let u=0;u<l;u++){this.getMatrixAt(u,io),cy.multiplyMatrices(s,io),Sl.matrixWorld=cy,Sl.raycast(e,Cc);for(let h=0,d=Cc.length;h<d;h++){const p=Cc[h];p.instanceId=u,p.object=this,i.push(p)}Cc.length=0}}setColorAt(e,i){this.instanceColor===null&&(this.instanceColor=new uy(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,i){i.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new f1(new Float32Array(l*this.count),l,this.count,am,Ji));const u=this.morphTexture.source.data.data;let h=0;for(let g=0;g<s.length;g++)h+=s[g];const d=this.geometry.morphTargetsRelative?1:1-h,p=l*e;u[p]=d,u.set(s,p+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Kd=new V,p1=new V,m1=new pe;class Ys{constructor(e=new V(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Kd.subVectors(s,i).cross(p1.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Kd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||m1.getNormalMatrix(e),l=this.coplanarPoint(Kd).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xs=new xo,Rc=new V;class fm{constructor(e=new Ys,i=new Ys,s=new Ys,l=new Ys,u=new Ys,h=new Ys){this.planes=[e,i,s,l,u,h]}set(e,i,s,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Aa){const s=this.planes,l=e.elements,u=l[0],h=l[1],d=l[2],p=l[3],g=l[4],v=l[5],m=l[6],_=l[7],S=l[8],E=l[9],T=l[10],M=l[11],x=l[12],N=l[13],U=l[14],A=l[15];if(s[0].setComponents(p-u,_-g,M-S,A-x).normalize(),s[1].setComponents(p+u,_+g,M+S,A+x).normalize(),s[2].setComponents(p+h,_+v,M+E,A+N).normalize(),s[3].setComponents(p-h,_-v,M-E,A-N).normalize(),s[4].setComponents(p-d,_-m,M-T,A-U).normalize(),i===Aa)s[5].setComponents(p+d,_+m,M+T,A+U).normalize();else if(i===qc)s[5].setComponents(d,m,T,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Xs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xs)}intersectsSprite(e){return Xs.center.set(0,0,0),Xs.radius=.7071067811865476,Xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Rc.x=l.normal.x>0?e.max.x:e.min.x,Rc.y=l.normal.y>0?e.max.y:e.min.y,Rc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Rc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hm extends So{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const hy=new Ve,Wp=new mx,wc=new xo,Dc=new V;class Tx extends Gn{constructor(e=new Un,i=new hm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),wc.copy(s.boundingSphere),wc.applyMatrix4(l),wc.radius+=u,e.ray.intersectsSphere(wc)===!1)return;hy.copy(l).invert(),Wp.copy(e.ray).applyMatrix4(hy);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,g=s.index,m=s.attributes.position;if(g!==null){const _=Math.max(0,h.start),S=Math.min(g.count,h.start+h.count);for(let E=_,T=S;E<T;E++){const M=g.getX(E);Dc.fromBufferAttribute(m,M),dy(Dc,M,p,l,e,i,this)}}else{const _=Math.max(0,h.start),S=Math.min(m.count,h.start+h.count);for(let E=_,T=S;E<T;E++)Dc.fromBufferAttribute(m,E),dy(Dc,E,p,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function dy(o,e,i,s,l,u,h){const d=Wp.distanceSqToPoint(o);if(d<i){const p=new V;Wp.closestPointToPoint(o,p),p.applyMatrix4(s);const g=l.ray.origin.distanceTo(p);if(g<l.near||g>l.far)return;u.push({distance:g,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class jc extends Hn{constructor(e,i,s,l,u,h,d,p,g){super(e,i,s,l,u,h,d,p,g),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bx extends Hn{constructor(e,i,s=tr,l,u,h,d=di,p=di,g,v=Ol){if(v!==Ol&&v!==Pl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,u,h,d,p,v,s,g),this.isDepthTexture=!0,this.image={width:e,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new um(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class co extends Un{constructor(e=1,i=1,s=1,l=32,u=1,h=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:u,openEnded:h,thetaStart:d,thetaLength:p};const g=this;l=Math.floor(l),u=Math.floor(u);const v=[],m=[],_=[],S=[];let E=0;const T=[],M=s/2;let x=0;N(),h===!1&&(e>0&&U(!0),i>0&&U(!1)),this.setIndex(v),this.setAttribute("position",new Ye(m,3)),this.setAttribute("normal",new Ye(_,3)),this.setAttribute("uv",new Ye(S,2));function N(){const A=new V,F=new V;let z=0;const P=(i-e)/s;for(let B=0;B<=u;B++){const w=[],R=B/u,H=R*(i-e)+e;for(let tt=0;tt<=l;tt++){const st=tt/l,ut=st*p+d,mt=Math.sin(ut),k=Math.cos(ut);F.x=H*mt,F.y=-R*s+M,F.z=H*k,m.push(F.x,F.y,F.z),A.set(mt,P,k).normalize(),_.push(A.x,A.y,A.z),S.push(st,1-R),w.push(E++)}T.push(w)}for(let B=0;B<l;B++)for(let w=0;w<u;w++){const R=T[w][B],H=T[w+1][B],tt=T[w+1][B+1],st=T[w][B+1];(e>0||w!==0)&&(v.push(R,H,st),z+=3),(i>0||w!==u-1)&&(v.push(H,tt,st),z+=3)}g.addGroup(x,z,0),x+=z}function U(A){const F=E,z=new Xt,P=new V;let B=0;const w=A===!0?e:i,R=A===!0?1:-1;for(let tt=1;tt<=l;tt++)m.push(0,M*R,0),_.push(0,R,0),S.push(.5,.5),E++;const H=E;for(let tt=0;tt<=l;tt++){const ut=tt/l*p+d,mt=Math.cos(ut),k=Math.sin(ut);P.x=w*k,P.y=M*R,P.z=w*mt,m.push(P.x,P.y,P.z),_.push(0,R,0),z.x=mt*.5+.5,z.y=k*.5*R+.5,S.push(z.x,z.y),E++}for(let tt=0;tt<l;tt++){const st=F+tt,ut=H+tt;A===!0?v.push(ut,ut+1,st):v.push(ut+1,ut,st),B+=3}g.addGroup(x,B,A===!0?1:2),x+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new co(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class dm extends co{constructor(e=1,i=1,s=32,l=1,u=!1,h=0,d=Math.PI*2){super(0,e,i,s,l,u,h,d),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:s,heightSegments:l,openEnded:u,thetaStart:h,thetaLength:d}}static fromJSON(e){return new dm(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pm extends Un{constructor(e=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:s,detail:l};const u=[],h=[];d(l),g(s),v(),this.setAttribute("position",new Ye(u,3)),this.setAttribute("normal",new Ye(u.slice(),3)),this.setAttribute("uv",new Ye(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(N){const U=new V,A=new V,F=new V;for(let z=0;z<i.length;z+=3)S(i[z+0],U),S(i[z+1],A),S(i[z+2],F),p(U,A,F,N)}function p(N,U,A,F){const z=F+1,P=[];for(let B=0;B<=z;B++){P[B]=[];const w=N.clone().lerp(A,B/z),R=U.clone().lerp(A,B/z),H=z-B;for(let tt=0;tt<=H;tt++)tt===0&&B===z?P[B][tt]=w:P[B][tt]=w.clone().lerp(R,tt/H)}for(let B=0;B<z;B++)for(let w=0;w<2*(z-B)-1;w++){const R=Math.floor(w/2);w%2===0?(_(P[B][R+1]),_(P[B+1][R]),_(P[B][R])):(_(P[B][R+1]),_(P[B+1][R+1]),_(P[B+1][R]))}}function g(N){const U=new V;for(let A=0;A<u.length;A+=3)U.x=u[A+0],U.y=u[A+1],U.z=u[A+2],U.normalize().multiplyScalar(N),u[A+0]=U.x,u[A+1]=U.y,u[A+2]=U.z}function v(){const N=new V;for(let U=0;U<u.length;U+=3){N.x=u[U+0],N.y=u[U+1],N.z=u[U+2];const A=M(N)/2/Math.PI+.5,F=x(N)/Math.PI+.5;h.push(A,1-F)}E(),m()}function m(){for(let N=0;N<h.length;N+=6){const U=h[N+0],A=h[N+2],F=h[N+4],z=Math.max(U,A,F),P=Math.min(U,A,F);z>.9&&P<.1&&(U<.2&&(h[N+0]+=1),A<.2&&(h[N+2]+=1),F<.2&&(h[N+4]+=1))}}function _(N){u.push(N.x,N.y,N.z)}function S(N,U){const A=N*3;U.x=e[A+0],U.y=e[A+1],U.z=e[A+2]}function E(){const N=new V,U=new V,A=new V,F=new V,z=new Xt,P=new Xt,B=new Xt;for(let w=0,R=0;w<u.length;w+=9,R+=6){N.set(u[w+0],u[w+1],u[w+2]),U.set(u[w+3],u[w+4],u[w+5]),A.set(u[w+6],u[w+7],u[w+8]),z.set(h[R+0],h[R+1]),P.set(h[R+2],h[R+3]),B.set(h[R+4],h[R+5]),F.copy(N).add(U).add(A).divideScalar(3);const H=M(F);T(z,R+0,N,H),T(P,R+2,U,H),T(B,R+4,A,H)}}function T(N,U,A,F){F<0&&N.x===1&&(h[U]=N.x-1),A.x===0&&A.z===0&&(h[U]=F/2/Math.PI+.5)}function M(N){return Math.atan2(N.z,-N.x)}function x(N){return Math.atan2(-N.y,Math.sqrt(N.x*N.x+N.z*N.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pm(e.vertices,e.indices,e.radius,e.details)}}class Na{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,i){const s=this.getUtoTmapping(e);return this.getPoint(s,i)}getPoints(e=5){const i=[];for(let s=0;s<=e;s++)i.push(this.getPoint(s/e));return i}getSpacedPoints(e=5){const i=[];for(let s=0;s<=e;s++)i.push(this.getPointAt(s/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),u=0;i.push(0);for(let h=1;h<=e;h++)s=this.getPoint(h/e),u+=s.distanceTo(l),i.push(u),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i=null){const s=this.getLengths();let l=0;const u=s.length;let h;i?h=i:h=e*s[u-1];let d=0,p=u-1,g;for(;d<=p;)if(l=Math.floor(d+(p-d)/2),g=s[l]-h,g<0)d=l+1;else if(g>0)p=l-1;else{p=l;break}if(l=p,s[l]===h)return l/(u-1);const v=s[l],_=s[l+1]-v,S=(h-v)/_;return(l+S)/(u-1)}getTangent(e,i){let l=e-1e-4,u=e+1e-4;l<0&&(l=0),u>1&&(u=1);const h=this.getPoint(l),d=this.getPoint(u),p=i||(h.isVector2?new Xt:new V);return p.copy(d).sub(h).normalize(),p}getTangentAt(e,i){const s=this.getUtoTmapping(e);return this.getTangent(s,i)}computeFrenetFrames(e,i=!1){const s=new V,l=[],u=[],h=[],d=new V,p=new Ve;for(let S=0;S<=e;S++){const E=S/e;l[S]=this.getTangentAt(E,new V)}u[0]=new V,h[0]=new V;let g=Number.MAX_VALUE;const v=Math.abs(l[0].x),m=Math.abs(l[0].y),_=Math.abs(l[0].z);v<=g&&(g=v,s.set(1,0,0)),m<=g&&(g=m,s.set(0,1,0)),_<=g&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),u[0].crossVectors(l[0],d),h[0].crossVectors(l[0],u[0]);for(let S=1;S<=e;S++){if(u[S]=u[S-1].clone(),h[S]=h[S-1].clone(),d.crossVectors(l[S-1],l[S]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(_e(l[S-1].dot(l[S]),-1,1));u[S].applyMatrix4(p.makeRotationAxis(d,E))}h[S].crossVectors(l[S],u[S])}if(i===!0){let S=Math.acos(_e(u[0].dot(u[e]),-1,1));S/=e,l[0].dot(d.crossVectors(u[0],u[e]))>0&&(S=-S);for(let E=1;E<=e;E++)u[E].applyMatrix4(p.makeRotationAxis(l[E],S*E)),h[E].crossVectors(l[E],u[E])}return{tangents:l,normals:u,binormals:h}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ax extends Na{constructor(e=0,i=0,s=1,l=1,u=0,h=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=u,this.aEndAngle=h,this.aClockwise=d,this.aRotation=p}getPoint(e,i=new Xt){const s=i,l=Math.PI*2;let u=this.aEndAngle-this.aStartAngle;const h=Math.abs(u)<Number.EPSILON;for(;u<0;)u+=l;for(;u>l;)u-=l;u<Number.EPSILON&&(h?u=0:u=l),this.aClockwise===!0&&!h&&(u===l?u=-l:u=u-l);const d=this.aStartAngle+e*u;let p=this.aX+this.xRadius*Math.cos(d),g=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const v=Math.cos(this.aRotation),m=Math.sin(this.aRotation),_=p-this.aX,S=g-this.aY;p=_*v-S*m+this.aX,g=_*m+S*v+this.aY}return s.set(p,g)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class g1 extends Ax{constructor(e,i,s,l,u,h){super(e,i,s,s,l,u,h),this.isArcCurve=!0,this.type="ArcCurve"}}function mm(){let o=0,e=0,i=0,s=0;function l(u,h,d,p){o=u,e=d,i=-3*u+3*h-2*d-p,s=2*u-2*h+d+p}return{initCatmullRom:function(u,h,d,p,g){l(h,d,g*(d-u),g*(p-h))},initNonuniformCatmullRom:function(u,h,d,p,g,v,m){let _=(h-u)/g-(d-u)/(g+v)+(d-h)/v,S=(d-h)/v-(p-h)/(v+m)+(p-d)/m;_*=v,S*=v,l(h,d,_,S)},calc:function(u){const h=u*u,d=h*u;return o+e*u+i*h+s*d}}}const Nc=new V,Qd=new mm,Jd=new mm,$d=new mm;class v1 extends Na{constructor(e=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=i,this.curveType=s,this.tension=l}getPoint(e,i=new V){const s=i,l=this.points,u=l.length,h=(u-(this.closed?0:1))*e;let d=Math.floor(h),p=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/u)+1)*u:p===0&&d===u-1&&(d=u-2,p=1);let g,v;this.closed||d>0?g=l[(d-1)%u]:(Nc.subVectors(l[0],l[1]).add(l[0]),g=Nc);const m=l[d%u],_=l[(d+1)%u];if(this.closed||d+2<u?v=l[(d+2)%u]:(Nc.subVectors(l[u-1],l[u-2]).add(l[u-1]),v=Nc),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(g.distanceToSquared(m),S),T=Math.pow(m.distanceToSquared(_),S),M=Math.pow(_.distanceToSquared(v),S);T<1e-4&&(T=1),E<1e-4&&(E=T),M<1e-4&&(M=T),Qd.initNonuniformCatmullRom(g.x,m.x,_.x,v.x,E,T,M),Jd.initNonuniformCatmullRom(g.y,m.y,_.y,v.y,E,T,M),$d.initNonuniformCatmullRom(g.z,m.z,_.z,v.z,E,T,M)}else this.curveType==="catmullrom"&&(Qd.initCatmullRom(g.x,m.x,_.x,v.x,this.tension),Jd.initCatmullRom(g.y,m.y,_.y,v.y,this.tension),$d.initCatmullRom(g.z,m.z,_.z,v.z,this.tension));return s.set(Qd.calc(p),Jd.calc(p),$d.calc(p)),s}copy(e){super.copy(e),this.points=[];for(let i=0,s=e.points.length;i<s;i++){const l=e.points[i];this.points.push(l.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];e.points.push(l.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,s=e.points.length;i<s;i++){const l=e.points[i];this.points.push(new V().fromArray(l))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function py(o,e,i,s,l){const u=(s-e)*.5,h=(l-i)*.5,d=o*o,p=o*d;return(2*i-2*s+u+h)*p+(-3*i+3*s-2*u-h)*d+u*o+i}function _1(o,e){const i=1-o;return i*i*e}function y1(o,e){return 2*(1-o)*o*e}function x1(o,e){return o*o*e}function Rl(o,e,i,s){return _1(o,e)+y1(o,i)+x1(o,s)}function S1(o,e){const i=1-o;return i*i*i*e}function M1(o,e){const i=1-o;return 3*i*i*o*e}function E1(o,e){return 3*(1-o)*o*o*e}function T1(o,e){return o*o*o*e}function wl(o,e,i,s,l){return S1(o,e)+M1(o,i)+E1(o,s)+T1(o,l)}class b1 extends Na{constructor(e=new Xt,i=new Xt,s=new Xt,l=new Xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=i,this.v2=s,this.v3=l}getPoint(e,i=new Xt){const s=i,l=this.v0,u=this.v1,h=this.v2,d=this.v3;return s.set(wl(e,l.x,u.x,h.x,d.x),wl(e,l.y,u.y,h.y,d.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class A1 extends Na{constructor(e=new V,i=new V,s=new V,l=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=i,this.v2=s,this.v3=l}getPoint(e,i=new V){const s=i,l=this.v0,u=this.v1,h=this.v2,d=this.v3;return s.set(wl(e,l.x,u.x,h.x,d.x),wl(e,l.y,u.y,h.y,d.y),wl(e,l.z,u.z,h.z,d.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class C1 extends Na{constructor(e=new Xt,i=new Xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=i}getPoint(e,i=new Xt){const s=i;return e===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(e).add(this.v1)),s}getPointAt(e,i){return this.getPoint(e,i)}getTangent(e,i=new Xt){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,i){return this.getTangent(e,i)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class R1 extends Na{constructor(e=new V,i=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=i}getPoint(e,i=new V){const s=i;return e===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(e).add(this.v1)),s}getPointAt(e,i){return this.getPoint(e,i)}getTangent(e,i=new V){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,i){return this.getTangent(e,i)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class w1 extends Na{constructor(e=new Xt,i=new Xt,s=new Xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=i,this.v2=s}getPoint(e,i=new Xt){const s=i,l=this.v0,u=this.v1,h=this.v2;return s.set(Rl(e,l.x,u.x,h.x),Rl(e,l.y,u.y,h.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gm extends Na{constructor(e=new V,i=new V,s=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=i,this.v2=s}getPoint(e,i=new V){const s=i,l=this.v0,u=this.v1,h=this.v2;return s.set(Rl(e,l.x,u.x,h.x),Rl(e,l.y,u.y,h.y),Rl(e,l.z,u.z,h.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class D1 extends Na{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,i=new Xt){const s=i,l=this.points,u=(l.length-1)*e,h=Math.floor(u),d=u-h,p=l[h===0?h:h-1],g=l[h],v=l[h>l.length-2?l.length-1:h+1],m=l[h>l.length-3?l.length-1:h+2];return s.set(py(d,p.x,g.x,v.x,m.x),py(d,p.y,g.y,v.y,m.y)),s}copy(e){super.copy(e),this.points=[];for(let i=0,s=e.points.length;i<s;i++){const l=e.points[i];this.points.push(l.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];e.points.push(l.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,s=e.points.length;i<s;i++){const l=e.points[i];this.points.push(new Xt().fromArray(l))}return this}}var N1=Object.freeze({__proto__:null,ArcCurve:g1,CatmullRomCurve3:v1,CubicBezierCurve:b1,CubicBezierCurve3:A1,EllipseCurve:Ax,LineCurve:C1,LineCurve3:R1,QuadraticBezierCurve:w1,QuadraticBezierCurve3:gm,SplineCurve:D1});class hs extends pm{constructor(e=1,i=0){const s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],l=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,l,e,i),this.type="OctahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new hs(e.radius,e.detail)}}class Hl extends Un{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(s),p=Math.floor(l),g=d+1,v=p+1,m=e/d,_=i/p,S=[],E=[],T=[],M=[];for(let x=0;x<v;x++){const N=x*_-h;for(let U=0;U<g;U++){const A=U*m-u;E.push(A,-N,0),T.push(0,0,1),M.push(U/d),M.push(1-x/p)}}for(let x=0;x<p;x++)for(let N=0;N<d;N++){const U=N+g*x,A=N+g*(x+1),F=N+1+g*(x+1),z=N+1+g*x;S.push(U,A,z),S.push(A,F,z)}this.setIndex(S),this.setAttribute("position",new Ye(E,3)),this.setAttribute("normal",new Ye(T,3)),this.setAttribute("uv",new Ye(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hl(e.width,e.height,e.widthSegments,e.heightSegments)}}class vm extends Un{constructor(e=.5,i=1,s=32,l=1,u=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:u,thetaLength:h},s=Math.max(3,s),l=Math.max(1,l);const d=[],p=[],g=[],v=[];let m=e;const _=(i-e)/l,S=new V,E=new Xt;for(let T=0;T<=l;T++){for(let M=0;M<=s;M++){const x=u+M/s*h;S.x=m*Math.cos(x),S.y=m*Math.sin(x),p.push(S.x,S.y,S.z),g.push(0,0,1),E.x=(S.x/i+1)/2,E.y=(S.y/i+1)/2,v.push(E.x,E.y)}m+=_}for(let T=0;T<l;T++){const M=T*(s+1);for(let x=0;x<s;x++){const N=x+M,U=N,A=N+s+1,F=N+s+2,z=N+1;d.push(U,A,z),d.push(A,F,z)}}this.setIndex(d),this.setAttribute("position",new Ye(p,3)),this.setAttribute("normal",new Ye(g,3)),this.setAttribute("uv",new Ye(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vm(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Dl extends Un{constructor(e=1,i=32,s=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(h+d,Math.PI);let g=0;const v=[],m=new V,_=new V,S=[],E=[],T=[],M=[];for(let x=0;x<=s;x++){const N=[],U=x/s;let A=0;x===0&&h===0?A=.5/i:x===s&&p===Math.PI&&(A=-.5/i);for(let F=0;F<=i;F++){const z=F/i;m.x=-e*Math.cos(l+z*u)*Math.sin(h+U*d),m.y=e*Math.cos(h+U*d),m.z=e*Math.sin(l+z*u)*Math.sin(h+U*d),E.push(m.x,m.y,m.z),_.copy(m).normalize(),T.push(_.x,_.y,_.z),M.push(z+A,1-U),N.push(g++)}v.push(N)}for(let x=0;x<s;x++)for(let N=0;N<i;N++){const U=v[x][N+1],A=v[x][N],F=v[x+1][N],z=v[x+1][N+1];(x!==0||h>0)&&S.push(U,A,z),(x!==s-1||p<Math.PI)&&S.push(A,F,z)}this.setIndex(S),this.setAttribute("position",new Ye(E,3)),this.setAttribute("normal",new Ye(T,3)),this.setAttribute("uv",new Ye(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Bn extends Un{constructor(e=1,i=.4,s=12,l=48,u=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:u},s=Math.floor(s),l=Math.floor(l);const h=[],d=[],p=[],g=[],v=new V,m=new V,_=new V;for(let S=0;S<=s;S++)for(let E=0;E<=l;E++){const T=E/l*u,M=S/s*Math.PI*2;m.x=(e+i*Math.cos(M))*Math.cos(T),m.y=(e+i*Math.cos(M))*Math.sin(T),m.z=i*Math.sin(M),d.push(m.x,m.y,m.z),v.x=e*Math.cos(T),v.y=e*Math.sin(T),_.subVectors(m,v).normalize(),p.push(_.x,_.y,_.z),g.push(E/l),g.push(S/s)}for(let S=1;S<=s;S++)for(let E=1;E<=l;E++){const T=(l+1)*S+E-1,M=(l+1)*(S-1)+E-1,x=(l+1)*(S-1)+E,N=(l+1)*S+E;h.push(T,M,N),h.push(M,x,N)}this.setIndex(h),this.setAttribute("position",new Ye(d,3)),this.setAttribute("normal",new Ye(p,3)),this.setAttribute("uv",new Ye(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class _m extends Un{constructor(e=new gm(new V(-1,-1,0),new V(-1,1,0),new V(1,1,0)),i=64,s=1,l=8,u=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:i,radius:s,radialSegments:l,closed:u};const h=e.computeFrenetFrames(i,u);this.tangents=h.tangents,this.normals=h.normals,this.binormals=h.binormals;const d=new V,p=new V,g=new Xt;let v=new V;const m=[],_=[],S=[],E=[];T(),this.setIndex(E),this.setAttribute("position",new Ye(m,3)),this.setAttribute("normal",new Ye(_,3)),this.setAttribute("uv",new Ye(S,2));function T(){for(let U=0;U<i;U++)M(U);M(u===!1?i:0),N(),x()}function M(U){v=e.getPointAt(U/i,v);const A=h.normals[U],F=h.binormals[U];for(let z=0;z<=l;z++){const P=z/l*Math.PI*2,B=Math.sin(P),w=-Math.cos(P);p.x=w*A.x+B*F.x,p.y=w*A.y+B*F.y,p.z=w*A.z+B*F.z,p.normalize(),_.push(p.x,p.y,p.z),d.x=v.x+s*p.x,d.y=v.y+s*p.y,d.z=v.z+s*p.z,m.push(d.x,d.y,d.z)}}function x(){for(let U=1;U<=i;U++)for(let A=1;A<=l;A++){const F=(l+1)*(U-1)+(A-1),z=(l+1)*U+(A-1),P=(l+1)*U+A,B=(l+1)*(U-1)+A;E.push(F,z,B),E.push(z,P,B)}}function N(){for(let U=0;U<=i;U++)for(let A=0;A<=l;A++)g.x=U/i,g.y=A/l,S.push(g.x,g.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new _m(new N1[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class U1 extends jn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Js extends So{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fx,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class my extends Js{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class L1 extends So{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class O1 extends So{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Cx extends Gn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const tp=new Ve,gy=new V,vy=new V;class P1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.mapType=$i,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fm,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;gy.setFromMatrixPosition(e.matrixWorld),i.position.copy(gy),vy.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(vy),i.updateMatrixWorld(),tp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tp),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(tp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const _y=new Ve,El=new V,ep=new V;class z1 extends P1{constructor(){super(new fi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xt(4,2),this._viewportCount=6,this._viewports=[new Ge(2,1,1,1),new Ge(0,1,1,1),new Ge(3,1,1,1),new Ge(1,1,1,1),new Ge(3,0,1,1),new Ge(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,i=0){const s=this.camera,l=this.matrix,u=e.distance||s.far;u!==s.far&&(s.far=u,s.updateProjectionMatrix()),El.setFromMatrixPosition(e.matrixWorld),s.position.copy(El),ep.copy(s.position),ep.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(ep),s.updateMatrixWorld(),l.makeTranslation(-El.x,-El.y,-El.z),_y.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_y)}}class jp extends Cx{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new z1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Rx extends Sx{constructor(e=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,h=s+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=g*this.view.offsetX,h=u+g*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class I1 extends Cx{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class B1 extends fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class wx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=yy(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=yy();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function yy(){return performance.now()}function xy(o,e,i,s){const l=F1(s);switch(i){case ox:return o*e;case am:return o*e/l.components*l.byteLength;case sm:return o*e/l.components*l.byteLength;case ux:return o*e*2/l.components*l.byteLength;case rm:return o*e*2/l.components*l.byteLength;case lx:return o*e*3/l.components*l.byteLength;case Pi:return o*e*4/l.components*l.byteLength;case om:return o*e*4/l.components*l.byteLength;case zc:case Ic:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Bc:case Fc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Mp:case Tp:return Math.max(o,16)*Math.max(e,8)/4;case Sp:case Ep:return Math.max(o,8)*Math.max(e,8)/2;case bp:case Ap:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Cp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Rp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case wp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Dp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Np:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Up:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Lp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Op:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Pp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case zp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Ip:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Bp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Fp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Hp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Gp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Hc:case Vp:case Xp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case cx:case kp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case qp:case Yp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function F1(o){switch(o){case $i:case ax:return{byteLength:1,components:1};case Ul:case sx:case Ra:return{byteLength:2,components:1};case nm:case im:return{byteLength:2,components:4};case tr:case em:case Ji:return{byteLength:4,components:1};case rx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$p}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$p);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Dx(){let o=null,e=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function H1(o){const e=new WeakMap;function i(d,p){const g=d.array,v=d.usage,m=g.byteLength,_=o.createBuffer();o.bindBuffer(p,_),o.bufferData(p,g,v),d.onUploadCallback();let S;if(g instanceof Float32Array)S=o.FLOAT;else if(g instanceof Uint16Array)d.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(g instanceof Int16Array)S=o.SHORT;else if(g instanceof Uint32Array)S=o.UNSIGNED_INT;else if(g instanceof Int32Array)S=o.INT;else if(g instanceof Int8Array)S=o.BYTE;else if(g instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:_,type:S,bytesPerElement:g.BYTES_PER_ELEMENT,version:d.version,size:m}}function s(d,p,g){const v=p.array,m=p.updateRanges;if(o.bindBuffer(g,d),m.length===0)o.bufferSubData(g,0,v);else{m.sort((S,E)=>S.start-E.start);let _=0;for(let S=1;S<m.length;S++){const E=m[_],T=m[S];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++_,m[_]=T)}m.length=_+1;for(let S=0,E=m.length;S<E;S++){const T=m[S];o.bufferSubData(g,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(o.deleteBuffer(p.buffer),e.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const g=e.get(d);if(g===void 0)e.set(d,i(d,p));else if(g.version<d.version){if(g.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(g.buffer,d,p),g.version=d.version}}return{get:l,remove:u,update:h}}var G1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,V1=`#ifdef USE_ALPHAHASH
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
#endif`,X1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,k1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,q1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Y1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,W1=`#ifdef USE_AOMAP
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
#endif`,j1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Z1=`#ifdef USE_BATCHING
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
#endif`,K1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Q1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,J1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tb=`#ifdef USE_IRIDESCENCE
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
#endif`,eb=`#ifdef USE_BUMPMAP
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
#endif`,nb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ib=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ab=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ob=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ub=`#if defined( USE_COLOR_ALPHA )
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
#endif`,cb=`#define PI 3.141592653589793
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
} // validated`,fb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hb=`vec3 transformedNormal = objectNormal;
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
#endif`,db=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vb="gl_FragColor = linearToOutputTexel( gl_FragColor );",_b=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yb=`#ifdef USE_ENVMAP
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
#endif`,xb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sb=`#ifdef USE_ENVMAP
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
#endif`,Mb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Eb=`#ifdef USE_ENVMAP
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
#endif`,Tb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ab=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rb=`#ifdef USE_GRADIENTMAP
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
}`,wb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Db=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ub=`uniform bool receiveShadow;
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
#endif`,Lb=`#ifdef USE_ENVMAP
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
#endif`,Ob=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ib=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bb=`PhysicalMaterial material;
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
#endif`,Fb=`struct PhysicalMaterial {
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
}`,Hb=`
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
#endif`,Gb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kb=`#if defined( USE_POINTS_UV )
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
#endif`,Qb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$b=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nA=`#ifdef USE_MORPHTARGETS
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
#endif`,iA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uA=`#ifdef USE_NORMALMAP
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
#endif`,cA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_A=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,MA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,EA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,TA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bA=`float getShadowMask() {
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
}`,AA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CA=`#ifdef USE_SKINNING
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
#endif`,RA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wA=`#ifdef USE_SKINNING
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
#endif`,DA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,UA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,OA=`#ifdef USE_TRANSMISSION
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
#endif`,PA=`#ifdef USE_TRANSMISSION
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
#endif`,zA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GA=`uniform sampler2D t2D;
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
}`,VA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YA=`#include <common>
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
}`,WA=`#if DEPTH_PACKING == 3200
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
}`,jA=`#define DISTANCE
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
}`,ZA=`#define DISTANCE
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
}`,KA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JA=`uniform float scale;
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
}`,$A=`uniform vec3 diffuse;
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
}`,t2=`#include <common>
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
}`,e2=`uniform vec3 diffuse;
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
}`,n2=`#define LAMBERT
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
}`,i2=`#define LAMBERT
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
}`,a2=`#define MATCAP
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
}`,s2=`#define MATCAP
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
}`,r2=`#define NORMAL
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
}`,o2=`#define NORMAL
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
}`,l2=`#define PHONG
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
}`,u2=`#define PHONG
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
}`,c2=`#define STANDARD
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
}`,f2=`#define STANDARD
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
}`,h2=`#define TOON
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
}`,d2=`#define TOON
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
}`,p2=`uniform float size;
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
}`,m2=`uniform vec3 diffuse;
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
}`,g2=`#include <common>
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
}`,v2=`uniform vec3 color;
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
}`,_2=`uniform float rotation;
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
}`,y2=`uniform vec3 diffuse;
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
}`,ge={alphahash_fragment:G1,alphahash_pars_fragment:V1,alphamap_fragment:X1,alphamap_pars_fragment:k1,alphatest_fragment:q1,alphatest_pars_fragment:Y1,aomap_fragment:W1,aomap_pars_fragment:j1,batching_pars_vertex:Z1,batching_vertex:K1,begin_vertex:Q1,beginnormal_vertex:J1,bsdfs:$1,iridescence_fragment:tb,bumpmap_pars_fragment:eb,clipping_planes_fragment:nb,clipping_planes_pars_fragment:ib,clipping_planes_pars_vertex:ab,clipping_planes_vertex:sb,color_fragment:rb,color_pars_fragment:ob,color_pars_vertex:lb,color_vertex:ub,common:cb,cube_uv_reflection_fragment:fb,defaultnormal_vertex:hb,displacementmap_pars_vertex:db,displacementmap_vertex:pb,emissivemap_fragment:mb,emissivemap_pars_fragment:gb,colorspace_fragment:vb,colorspace_pars_fragment:_b,envmap_fragment:yb,envmap_common_pars_fragment:xb,envmap_pars_fragment:Sb,envmap_pars_vertex:Mb,envmap_physical_pars_fragment:Lb,envmap_vertex:Eb,fog_vertex:Tb,fog_pars_vertex:bb,fog_fragment:Ab,fog_pars_fragment:Cb,gradientmap_pars_fragment:Rb,lightmap_pars_fragment:wb,lights_lambert_fragment:Db,lights_lambert_pars_fragment:Nb,lights_pars_begin:Ub,lights_toon_fragment:Ob,lights_toon_pars_fragment:Pb,lights_phong_fragment:zb,lights_phong_pars_fragment:Ib,lights_physical_fragment:Bb,lights_physical_pars_fragment:Fb,lights_fragment_begin:Hb,lights_fragment_maps:Gb,lights_fragment_end:Vb,logdepthbuf_fragment:Xb,logdepthbuf_pars_fragment:kb,logdepthbuf_pars_vertex:qb,logdepthbuf_vertex:Yb,map_fragment:Wb,map_pars_fragment:jb,map_particle_fragment:Zb,map_particle_pars_fragment:Kb,metalnessmap_fragment:Qb,metalnessmap_pars_fragment:Jb,morphinstance_vertex:$b,morphcolor_vertex:tA,morphnormal_vertex:eA,morphtarget_pars_vertex:nA,morphtarget_vertex:iA,normal_fragment_begin:aA,normal_fragment_maps:sA,normal_pars_fragment:rA,normal_pars_vertex:oA,normal_vertex:lA,normalmap_pars_fragment:uA,clearcoat_normal_fragment_begin:cA,clearcoat_normal_fragment_maps:fA,clearcoat_pars_fragment:hA,iridescence_pars_fragment:dA,opaque_fragment:pA,packing:mA,premultiplied_alpha_fragment:gA,project_vertex:vA,dithering_fragment:_A,dithering_pars_fragment:yA,roughnessmap_fragment:xA,roughnessmap_pars_fragment:SA,shadowmap_pars_fragment:MA,shadowmap_pars_vertex:EA,shadowmap_vertex:TA,shadowmask_pars_fragment:bA,skinbase_vertex:AA,skinning_pars_vertex:CA,skinning_vertex:RA,skinnormal_vertex:wA,specularmap_fragment:DA,specularmap_pars_fragment:NA,tonemapping_fragment:UA,tonemapping_pars_fragment:LA,transmission_fragment:OA,transmission_pars_fragment:PA,uv_pars_fragment:zA,uv_pars_vertex:IA,uv_vertex:BA,worldpos_vertex:FA,background_vert:HA,background_frag:GA,backgroundCube_vert:VA,backgroundCube_frag:XA,cube_vert:kA,cube_frag:qA,depth_vert:YA,depth_frag:WA,distanceRGBA_vert:jA,distanceRGBA_frag:ZA,equirect_vert:KA,equirect_frag:QA,linedashed_vert:JA,linedashed_frag:$A,meshbasic_vert:t2,meshbasic_frag:e2,meshlambert_vert:n2,meshlambert_frag:i2,meshmatcap_vert:a2,meshmatcap_frag:s2,meshnormal_vert:r2,meshnormal_frag:o2,meshphong_vert:l2,meshphong_frag:u2,meshphysical_vert:c2,meshphysical_frag:f2,meshtoon_vert:h2,meshtoon_frag:d2,points_vert:p2,points_frag:m2,shadow_vert:g2,shadow_frag:v2,sprite_vert:_2,sprite_frag:y2},Ot={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Zi={basic:{uniforms:Wn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Wn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new ce(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Wn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Wn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Wn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new ce(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Wn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Wn([Ot.points,Ot.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Wn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Wn([Ot.common,Ot.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Wn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Wn([Ot.sprite,Ot.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:Wn([Ot.common,Ot.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag},shadow:{uniforms:Wn([Ot.lights,Ot.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Zi.physical={uniforms:Wn([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const Uc={r:0,b:0,g:0},ks=new ta,x2=new Ve;function S2(o,e,i,s,l,u,h){const d=new ce(0);let p=u===!0?0:1,g,v,m=null,_=0,S=null;function E(U){let A=U.isScene===!0?U.background:null;return A&&A.isTexture&&(A=(U.backgroundBlurriness>0?i:e).get(A)),A}function T(U){let A=!1;const F=E(U);F===null?x(d,p):F&&F.isColor&&(x(F,1),A=!0);const z=o.xr.getEnvironmentBlendMode();z==="additive"?s.buffers.color.setClear(0,0,0,1,h):z==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||A)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(U,A){const F=E(A);F&&(F.isCubeTexture||F.mapping===Wc)?(v===void 0&&(v=new ee(new Da(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:go(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(z,P,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),ks.copy(A.backgroundRotation),ks.x*=-1,ks.y*=-1,ks.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(ks.y*=-1,ks.z*=-1),v.material.uniforms.envMap.value=F,v.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(x2.makeRotationFromEuler(ks)),v.material.toneMapped=Ne.getTransfer(F.colorSpace)!==Be,(m!==F||_!==F.version||S!==o.toneMapping)&&(v.material.needsUpdate=!0,m=F,_=F.version,S=o.toneMapping),v.layers.enableAll(),U.unshift(v,v.geometry,v.material,0,0,null)):F&&F.isTexture&&(g===void 0&&(g=new ee(new Hl(2,2),new jn({name:"BackgroundMaterial",uniforms:go(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(g)),g.material.uniforms.t2D.value=F,g.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,g.material.toneMapped=Ne.getTransfer(F.colorSpace)!==Be,F.matrixAutoUpdate===!0&&F.updateMatrix(),g.material.uniforms.uvTransform.value.copy(F.matrix),(m!==F||_!==F.version||S!==o.toneMapping)&&(g.material.needsUpdate=!0,m=F,_=F.version,S=o.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null))}function x(U,A){U.getRGB(Uc,xx(o)),s.buffers.color.setClear(Uc.r,Uc.g,Uc.b,A,h)}function N(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,A=1){d.set(U),p=A,x(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,x(d,p)},render:T,addToRenderList:M,dispose:N}}function M2(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=_(null);let u=l,h=!1;function d(R,H,tt,st,ut){let mt=!1;const k=m(st,tt,H);u!==k&&(u=k,g(u.object)),mt=S(R,st,tt,ut),mt&&E(R,st,tt,ut),ut!==null&&e.update(ut,o.ELEMENT_ARRAY_BUFFER),(mt||h)&&(h=!1,A(R,H,tt,st),ut!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ut).buffer))}function p(){return o.createVertexArray()}function g(R){return o.bindVertexArray(R)}function v(R){return o.deleteVertexArray(R)}function m(R,H,tt){const st=tt.wireframe===!0;let ut=s[R.id];ut===void 0&&(ut={},s[R.id]=ut);let mt=ut[H.id];mt===void 0&&(mt={},ut[H.id]=mt);let k=mt[st];return k===void 0&&(k=_(p()),mt[st]=k),k}function _(R){const H=[],tt=[],st=[];for(let ut=0;ut<i;ut++)H[ut]=0,tt[ut]=0,st[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:tt,attributeDivisors:st,object:R,attributes:{},index:null}}function S(R,H,tt,st){const ut=u.attributes,mt=H.attributes;let k=0;const lt=tt.getAttributes();for(const K in lt)if(lt[K].location>=0){const Mt=ut[K];let Ft=mt[K];if(Ft===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(Ft=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(Ft=R.instanceColor)),Mt===void 0||Mt.attribute!==Ft||Ft&&Mt.data!==Ft.data)return!0;k++}return u.attributesNum!==k||u.index!==st}function E(R,H,tt,st){const ut={},mt=H.attributes;let k=0;const lt=tt.getAttributes();for(const K in lt)if(lt[K].location>=0){let Mt=mt[K];Mt===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(Mt=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(Mt=R.instanceColor));const Ft={};Ft.attribute=Mt,Mt&&Mt.data&&(Ft.data=Mt.data),ut[K]=Ft,k++}u.attributes=ut,u.attributesNum=k,u.index=st}function T(){const R=u.newAttributes;for(let H=0,tt=R.length;H<tt;H++)R[H]=0}function M(R){x(R,0)}function x(R,H){const tt=u.newAttributes,st=u.enabledAttributes,ut=u.attributeDivisors;tt[R]=1,st[R]===0&&(o.enableVertexAttribArray(R),st[R]=1),ut[R]!==H&&(o.vertexAttribDivisor(R,H),ut[R]=H)}function N(){const R=u.newAttributes,H=u.enabledAttributes;for(let tt=0,st=H.length;tt<st;tt++)H[tt]!==R[tt]&&(o.disableVertexAttribArray(tt),H[tt]=0)}function U(R,H,tt,st,ut,mt,k){k===!0?o.vertexAttribIPointer(R,H,tt,ut,mt):o.vertexAttribPointer(R,H,tt,st,ut,mt)}function A(R,H,tt,st){T();const ut=st.attributes,mt=tt.getAttributes(),k=H.defaultAttributeValues;for(const lt in mt){const K=mt[lt];if(K.location>=0){let yt=ut[lt];if(yt===void 0&&(lt==="instanceMatrix"&&R.instanceMatrix&&(yt=R.instanceMatrix),lt==="instanceColor"&&R.instanceColor&&(yt=R.instanceColor)),yt!==void 0){const Mt=yt.normalized,Ft=yt.itemSize,Jt=e.get(yt);if(Jt===void 0)continue;const ye=Jt.buffer,L=Jt.type,Z=Jt.bytesPerElement,gt=L===o.INT||L===o.UNSIGNED_INT||yt.gpuType===em;if(yt.isInterleavedBufferAttribute){const ct=yt.data,bt=ct.stride,Gt=yt.offset;if(ct.isInstancedInterleavedBuffer){for(let Dt=0;Dt<K.locationSize;Dt++)x(K.location+Dt,ct.meshPerAttribute);R.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Dt=0;Dt<K.locationSize;Dt++)M(K.location+Dt);o.bindBuffer(o.ARRAY_BUFFER,ye);for(let Dt=0;Dt<K.locationSize;Dt++)U(K.location+Dt,Ft/K.locationSize,L,Mt,bt*Z,(Gt+Ft/K.locationSize*Dt)*Z,gt)}else{if(yt.isInstancedBufferAttribute){for(let ct=0;ct<K.locationSize;ct++)x(K.location+ct,yt.meshPerAttribute);R.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let ct=0;ct<K.locationSize;ct++)M(K.location+ct);o.bindBuffer(o.ARRAY_BUFFER,ye);for(let ct=0;ct<K.locationSize;ct++)U(K.location+ct,Ft/K.locationSize,L,Mt,Ft*Z,Ft/K.locationSize*ct*Z,gt)}}else if(k!==void 0){const Mt=k[lt];if(Mt!==void 0)switch(Mt.length){case 2:o.vertexAttrib2fv(K.location,Mt);break;case 3:o.vertexAttrib3fv(K.location,Mt);break;case 4:o.vertexAttrib4fv(K.location,Mt);break;default:o.vertexAttrib1fv(K.location,Mt)}}}}N()}function F(){B();for(const R in s){const H=s[R];for(const tt in H){const st=H[tt];for(const ut in st)v(st[ut].object),delete st[ut];delete H[tt]}delete s[R]}}function z(R){if(s[R.id]===void 0)return;const H=s[R.id];for(const tt in H){const st=H[tt];for(const ut in st)v(st[ut].object),delete st[ut];delete H[tt]}delete s[R.id]}function P(R){for(const H in s){const tt=s[H];if(tt[R.id]===void 0)continue;const st=tt[R.id];for(const ut in st)v(st[ut].object),delete st[ut];delete tt[R.id]}}function B(){w(),h=!0,u!==l&&(u=l,g(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:B,resetDefaultState:w,dispose:F,releaseStatesOfGeometry:z,releaseStatesOfProgram:P,initAttributes:T,enableAttribute:M,disableUnusedAttributes:N}}function E2(o,e,i){let s;function l(g){s=g}function u(g,v){o.drawArrays(s,g,v),i.update(v,s,1)}function h(g,v,m){m!==0&&(o.drawArraysInstanced(s,g,v,m),i.update(v,s,m))}function d(g,v,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,g,0,v,0,m);let S=0;for(let E=0;E<m;E++)S+=v[E];i.update(S,s,1)}function p(g,v,m,_){if(m===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<g.length;E++)h(g[E],v[E],_[E]);else{S.multiDrawArraysInstancedWEBGL(s,g,0,v,0,_,0,m);let E=0;for(let T=0;T<m;T++)E+=v[T]*_[T];i.update(E,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function T2(o,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==Pi&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const B=P===Ra&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==$i&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Ji&&!B)}function p(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=i.precision!==void 0?i.precision:"highp";const v=p(g);v!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",v,"instead."),g=v);const m=i.logarithmicDepthBuffer===!0,_=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),A=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=E>0,z=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:g,logarithmicDepthBuffer:m,reverseDepthBuffer:_,maxTextures:S,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:N,maxVaryings:U,maxFragmentUniforms:A,vertexTextures:F,maxSamples:z}}function b2(o){const e=this;let i=null,s=0,l=!1,u=!1;const h=new Ys,d=new pe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(m,_){const S=m.length!==0||_||s!==0||l;return l=_,s=m.length,S},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(m,_){i=v(m,_,0)},this.setState=function(m,_,S){const E=m.clippingPlanes,T=m.clipIntersection,M=m.clipShadows,x=o.get(m);if(!l||E===null||E.length===0||u&&!M)u?v(null):g();else{const N=u?0:s,U=N*4;let A=x.clippingState||null;p.value=A,A=v(E,_,U,S);for(let F=0;F!==U;++F)A[F]=i[F];x.clippingState=A,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=N}};function g(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(m,_,S,E){const T=m!==null?m.length:0;let M=null;if(T!==0){if(M=p.value,E!==!0||M===null){const x=S+T*4,N=_.matrixWorldInverse;d.getNormalMatrix(N),(M===null||M.length<x)&&(M=new Float32Array(x));for(let U=0,A=S;U!==T;++U,A+=4)h.copy(m[U]).applyMatrix4(N,d),h.normal.toArray(M,A),M[A+3]=h.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,M}}function A2(o){let e=new WeakMap;function i(h,d){return d===_p?h.mapping=ho:d===yp&&(h.mapping=po),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===_p||d===yp)if(e.has(h)){const p=e.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const g=new u1(p.height);return g.fromEquirectangularTexture(o,h),e.set(h,g),h.addEventListener("dispose",l),i(g.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:s,dispose:u}}const oo=4,Sy=[.125,.215,.35,.446,.526,.582],Zs=20,np=new Rx,My=new ce;let ip=null,ap=0,sp=0,rp=!1;const Ws=(1+Math.sqrt(5))/2,ao=1/Ws,Ey=[new V(-Ws,ao,0),new V(Ws,ao,0),new V(-ao,0,Ws),new V(ao,0,Ws),new V(0,Ws,-ao),new V(0,Ws,ao),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],C2=new V;class Zp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100,u={}){const{size:h=256,position:d=C2}=u;ip=this._renderer.getRenderTarget(),ap=this._renderer.getActiveCubeFace(),sp=this._renderer.getActiveMipmapLevel(),rp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,s,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ay(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=by(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ip,ap,sp),this._renderer.xr.enabled=rp,e.scissorTest=!1,Lc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ho||e.mapping===po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ip=this._renderer.getRenderTarget(),ap=this._renderer.getActiveCubeFace(),sp=this._renderer.getActiveMipmapLevel(),rp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Qi,minFilter:Qi,generateMipmaps:!1,type:Ra,format:Pi,colorSpace:mo,depthBuffer:!1},l=Ty(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ty(e,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=R2(u)),this._blurMaterial=w2(u,e,i)}return l}_compileMaterial(e){const i=new ee(this._lodPlanes[0],e);this._renderer.compile(i,np)}_sceneToCubeUV(e,i,s,l,u){const p=new fi(90,1,i,s),g=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],m=this._renderer,_=m.autoClear,S=m.toneMapping;m.getClearColor(My),m.toneMapping=ps,m.autoClear=!1;const E=new er({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1}),T=new ee(new Da,E);let M=!1;const x=e.background;x?x.isColor&&(E.color.copy(x),e.background=null,M=!0):(E.color.copy(My),M=!0);for(let N=0;N<6;N++){const U=N%3;U===0?(p.up.set(0,g[N],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+v[N],u.y,u.z)):U===1?(p.up.set(0,0,g[N]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+v[N],u.z)):(p.up.set(0,g[N],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+v[N]));const A=this._cubeSize;Lc(l,U*A,N>2?A:0,A,A),m.setRenderTarget(l),M&&m.render(T,p),m.render(e,p)}T.geometry.dispose(),T.material.dispose(),m.toneMapping=S,m.autoClear=_,e.background=x}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===ho||e.mapping===po;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ay()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=by());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new ee(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;Lc(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(h,np)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=Ey[(l-u-1)%Ey.length];this._blur(e,u-1,u,h,d)}i.autoClear=s}_blur(e,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",u),this._halfBlur(h,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,h,d){const p=this._renderer,g=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,m=new ee(this._lodPlanes[l],g),_=g.uniforms,S=this._sizeLods[s]-1,E=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Zs-1),T=u/E,M=isFinite(u)?1+Math.floor(v*T):Zs;M>Zs&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Zs}`);const x=[];let N=0;for(let P=0;P<Zs;++P){const B=P/T,w=Math.exp(-B*B/2);x.push(w),P===0?N+=w:P<M&&(N+=2*w)}for(let P=0;P<x.length;P++)x[P]=x[P]/N;_.envMap.value=e.texture,_.samples.value=M,_.weights.value=x,_.latitudinal.value=h==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:U}=this;_.dTheta.value=E,_.mipInt.value=U-s;const A=this._sizeLods[l],F=3*A*(l>U-oo?l-U+oo:0),z=4*(this._cubeSize-A);Lc(i,F,z,3*A,2*A),p.setRenderTarget(i),p.render(m,np)}}function R2(o){const e=[],i=[],s=[];let l=o;const u=o-oo+1+Sy.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>o-oo?p=Sy[h-o+oo-1]:h===0&&(p=0),s.push(p);const g=1/(d-2),v=-g,m=1+g,_=[v,v,m,v,m,m,v,v,m,m,v,m],S=6,E=6,T=3,M=2,x=1,N=new Float32Array(T*E*S),U=new Float32Array(M*E*S),A=new Float32Array(x*E*S);for(let z=0;z<S;z++){const P=z%3*2/3-1,B=z>2?0:-1,w=[P,B,0,P+2/3,B,0,P+2/3,B+1,0,P,B,0,P+2/3,B+1,0,P,B+1,0];N.set(w,T*E*z),U.set(_,M*E*z);const R=[z,z,z,z,z,z];A.set(R,x*E*z)}const F=new Un;F.setAttribute("position",new pi(N,T)),F.setAttribute("uv",new pi(U,M)),F.setAttribute("faceIndex",new pi(A,x)),e.push(F),l>oo&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function Ty(o,e,i){const s=new zi(o,e,i);return s.texture.mapping=Wc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Lc(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function w2(o,e,i){const s=new Float32Array(Zs),l=new V(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:Zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ym(),fragmentShader:`

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
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function by(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ym(),fragmentShader:`

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
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function Ay(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ym(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function ym(){return`

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
	`}function D2(o){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const p=d.mapping,g=p===_p||p===yp,v=p===ho||p===po;if(g||v){let m=e.get(d);const _=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return i===null&&(i=new Zp(o)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const S=d.image;return g&&S&&S.height>0||v&&S&&l(S)?(i===null&&(i=new Zp(o)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function l(d){let p=0;const g=6;for(let v=0;v<g;v++)d[v]!==void 0&&p++;return p===g}function u(d){const p=d.target;p.removeEventListener("dispose",u);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function N2(o){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Gc("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function U2(o,e,i,s){const l={},u=new WeakMap;function h(m){const _=m.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);_.removeEventListener("dispose",h),delete l[_.id];const S=u.get(_);S&&(e.remove(S),u.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function d(m,_){return l[_.id]===!0||(_.addEventListener("dispose",h),l[_.id]=!0,i.memory.geometries++),_}function p(m){const _=m.attributes;for(const S in _)e.update(_[S],o.ARRAY_BUFFER)}function g(m){const _=[],S=m.index,E=m.attributes.position;let T=0;if(S!==null){const N=S.array;T=S.version;for(let U=0,A=N.length;U<A;U+=3){const F=N[U+0],z=N[U+1],P=N[U+2];_.push(F,z,z,P,P,F)}}else if(E!==void 0){const N=E.array;T=E.version;for(let U=0,A=N.length/3-1;U<A;U+=3){const F=U+0,z=U+1,P=U+2;_.push(F,z,z,P,P,F)}}else return;const M=new(dx(_)?yx:_x)(_,1);M.version=T;const x=u.get(m);x&&e.remove(x),u.set(m,M)}function v(m){const _=u.get(m);if(_){const S=m.index;S!==null&&_.version<S.version&&g(m)}else g(m);return u.get(m)}return{get:d,update:p,getWireframeAttribute:v}}function L2(o,e,i){let s;function l(_){s=_}let u,h;function d(_){u=_.type,h=_.bytesPerElement}function p(_,S){o.drawElements(s,S,u,_*h),i.update(S,s,1)}function g(_,S,E){E!==0&&(o.drawElementsInstanced(s,S,u,_*h,E),i.update(S,s,E))}function v(_,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,u,_,0,E);let M=0;for(let x=0;x<E;x++)M+=S[x];i.update(M,s,1)}function m(_,S,E,T){if(E===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<_.length;x++)g(_[x]/h,S[x],T[x]);else{M.multiDrawElementsInstancedWEBGL(s,S,0,u,_,0,T,0,E);let x=0;for(let N=0;N<E;N++)x+=S[N]*T[N];i.update(x,s,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=g,this.renderMultiDraw=v,this.renderMultiDrawInstances=m}function O2(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function P2(o,e,i){const s=new WeakMap,l=new Ge;function u(h,d,p){const g=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,m=v!==void 0?v.length:0;let _=s.get(d);if(_===void 0||_.count!==m){let w=function(){P.dispose(),s.delete(d),d.removeEventListener("dispose",w)};_!==void 0&&_.texture.dispose();const S=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,T=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],x=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let U=0;S===!0&&(U=1),E===!0&&(U=2),T===!0&&(U=3);let A=d.attributes.position.count*U,F=1;A>e.maxTextureSize&&(F=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const z=new Float32Array(A*F*4*m),P=new px(z,A,F,m);P.type=Ji,P.needsUpdate=!0;const B=U*4;for(let R=0;R<m;R++){const H=M[R],tt=x[R],st=N[R],ut=A*F*4*R;for(let mt=0;mt<H.count;mt++){const k=mt*B;S===!0&&(l.fromBufferAttribute(H,mt),z[ut+k+0]=l.x,z[ut+k+1]=l.y,z[ut+k+2]=l.z,z[ut+k+3]=0),E===!0&&(l.fromBufferAttribute(tt,mt),z[ut+k+4]=l.x,z[ut+k+5]=l.y,z[ut+k+6]=l.z,z[ut+k+7]=0),T===!0&&(l.fromBufferAttribute(st,mt),z[ut+k+8]=l.x,z[ut+k+9]=l.y,z[ut+k+10]=l.z,z[ut+k+11]=st.itemSize===4?l.w:1)}}_={count:m,texture:P,size:new Xt(A,F)},s.set(d,_),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let S=0;for(let T=0;T<g.length;T++)S+=g[T];const E=d.morphTargetsRelative?1:1-S;p.getUniforms().setValue(o,"morphTargetBaseInfluence",E),p.getUniforms().setValue(o,"morphTargetInfluences",g)}p.getUniforms().setValue(o,"morphTargetsTexture",_.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:u}}function z2(o,e,i,s){let l=new WeakMap;function u(p){const g=s.render.frame,v=p.geometry,m=e.get(p,v);if(l.get(m)!==g&&(e.update(m),l.set(m,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==g&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,g))),p.isSkinnedMesh){const _=p.skeleton;l.get(_)!==g&&(_.update(),l.set(_,g))}return m}function h(){l=new WeakMap}function d(p){const g=p.target;g.removeEventListener("dispose",d),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:u,dispose:h}}const Nx=new Hn,Cy=new bx(1,1),Ux=new px,Lx=new WT,Ox=new Mx,Ry=[],wy=[],Dy=new Float32Array(16),Ny=new Float32Array(9),Uy=new Float32Array(4);function Mo(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let u=Ry[l];if(u===void 0&&(u=new Float32Array(l),Ry[l]=u),e!==0){s.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function mn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function gn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Zc(o,e){let i=wy[e];i===void 0&&(i=new Int32Array(e),wy[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function I2(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function B2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2fv(this.addr,e),gn(i,e)}}function F2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(mn(i,e))return;o.uniform3fv(this.addr,e),gn(i,e)}}function H2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4fv(this.addr,e),gn(i,e)}}function G2(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,s))return;Uy.set(s),o.uniformMatrix2fv(this.addr,!1,Uy),gn(i,s)}}function V2(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,s))return;Ny.set(s),o.uniformMatrix3fv(this.addr,!1,Ny),gn(i,s)}}function X2(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,s))return;Dy.set(s),o.uniformMatrix4fv(this.addr,!1,Dy),gn(i,s)}}function k2(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function q2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2iv(this.addr,e),gn(i,e)}}function Y2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;o.uniform3iv(this.addr,e),gn(i,e)}}function W2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4iv(this.addr,e),gn(i,e)}}function j2(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function Z2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2uiv(this.addr,e),gn(i,e)}}function K2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;o.uniform3uiv(this.addr,e),gn(i,e)}}function Q2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4uiv(this.addr,e),gn(i,e)}}function J2(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Cy.compareFunction=hx,u=Cy):u=Nx,i.setTexture2D(e||u,l)}function $2(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Lx,l)}function tC(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Ox,l)}function eC(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Ux,l)}function nC(o){switch(o){case 5126:return I2;case 35664:return B2;case 35665:return F2;case 35666:return H2;case 35674:return G2;case 35675:return V2;case 35676:return X2;case 5124:case 35670:return k2;case 35667:case 35671:return q2;case 35668:case 35672:return Y2;case 35669:case 35673:return W2;case 5125:return j2;case 36294:return Z2;case 36295:return K2;case 36296:return Q2;case 35678:case 36198:case 36298:case 36306:case 35682:return J2;case 35679:case 36299:case 36307:return $2;case 35680:case 36300:case 36308:case 36293:return tC;case 36289:case 36303:case 36311:case 36292:return eC}}function iC(o,e){o.uniform1fv(this.addr,e)}function aC(o,e){const i=Mo(e,this.size,2);o.uniform2fv(this.addr,i)}function sC(o,e){const i=Mo(e,this.size,3);o.uniform3fv(this.addr,i)}function rC(o,e){const i=Mo(e,this.size,4);o.uniform4fv(this.addr,i)}function oC(o,e){const i=Mo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function lC(o,e){const i=Mo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function uC(o,e){const i=Mo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function cC(o,e){o.uniform1iv(this.addr,e)}function fC(o,e){o.uniform2iv(this.addr,e)}function hC(o,e){o.uniform3iv(this.addr,e)}function dC(o,e){o.uniform4iv(this.addr,e)}function pC(o,e){o.uniform1uiv(this.addr,e)}function mC(o,e){o.uniform2uiv(this.addr,e)}function gC(o,e){o.uniform3uiv(this.addr,e)}function vC(o,e){o.uniform4uiv(this.addr,e)}function _C(o,e,i){const s=this.cache,l=e.length,u=Zc(i,l);mn(s,u)||(o.uniform1iv(this.addr,u),gn(s,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||Nx,u[h])}function yC(o,e,i){const s=this.cache,l=e.length,u=Zc(i,l);mn(s,u)||(o.uniform1iv(this.addr,u),gn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Lx,u[h])}function xC(o,e,i){const s=this.cache,l=e.length,u=Zc(i,l);mn(s,u)||(o.uniform1iv(this.addr,u),gn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Ox,u[h])}function SC(o,e,i){const s=this.cache,l=e.length,u=Zc(i,l);mn(s,u)||(o.uniform1iv(this.addr,u),gn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Ux,u[h])}function MC(o){switch(o){case 5126:return iC;case 35664:return aC;case 35665:return sC;case 35666:return rC;case 35674:return oC;case 35675:return lC;case 35676:return uC;case 5124:case 35670:return cC;case 35667:case 35671:return fC;case 35668:case 35672:return hC;case 35669:case 35673:return dC;case 5125:return pC;case 36294:return mC;case 36295:return gC;case 36296:return vC;case 35678:case 36198:case 36298:case 36306:case 35682:return _C;case 35679:case 36299:case 36307:return yC;case 35680:case 36300:case 36308:case 36293:return xC;case 36289:case 36303:case 36311:case 36292:return SC}}class EC{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=nC(i.type)}}class TC{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=MC(i.type)}}class bC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],s)}}}const op=/(\w+)(\])?(\[|\.)?/g;function Ly(o,e){o.seq.push(e),o.map[e.id]=e}function AC(o,e,i){const s=o.name,l=s.length;for(op.lastIndex=0;;){const u=op.exec(s),h=op.lastIndex;let d=u[1];const p=u[2]==="]",g=u[3];if(p&&(d=d|0),g===void 0||g==="["&&h+2===l){Ly(i,g===void 0?new EC(d,o,e):new TC(d,o,e));break}else{let m=i.map[d];m===void 0&&(m=new bC(d),Ly(i,m)),i=m}}}class Vc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);AC(u,h,this)}}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],p=s[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function Oy(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const CC=37297;let RC=0;function wC(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const Py=new pe;function DC(o){Ne._getMatrix(Py,Ne.workingColorSpace,o);const e=`mat3( ${Py.elements.map(i=>i.toFixed(4))} )`;switch(Ne.getTransfer(o)){case kc:return[e,"LinearTransferOETF"];case Be:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function zy(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+wC(o.getShaderSource(e),h)}else return l}function NC(o,e){const i=DC(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function UC(o,e){let i;switch(e){case Qy:i="Linear";break;case Jy:i="Reinhard";break;case $y:i="Cineon";break;case tm:i="ACESFilmic";break;case ex:i="AgX";break;case nx:i="Neutral";break;case tx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Oc=new V;function LC(){Ne.getLuminanceCoefficients(Oc);const o=Oc.x.toFixed(4),e=Oc.y.toFixed(4),i=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function OC(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bl).join(`
`)}function PC(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function zC(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function bl(o){return o!==""}function Iy(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function By(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const IC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kp(o){return o.replace(IC,FC)}const BC=new Map;function FC(o,e){let i=ge[e];if(i===void 0){const s=BC.get(e);if(s!==void 0)i=ge[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Kp(i)}const HC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fy(o){return o.replace(HC,GC)}function GC(o,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Hy(o){let e=`precision ${o.precision} float;
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
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function VC(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Zy?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===kE?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ta&&(e="SHADOWMAP_TYPE_VSM"),e}function XC(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ho:case po:e="ENVMAP_TYPE_CUBE";break;case Wc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kC(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case po:e="ENVMAP_MODE_REFRACTION";break}return e}function qC(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Ky:e="ENVMAP_BLENDING_MULTIPLY";break;case uT:e="ENVMAP_BLENDING_MIX";break;case cT:e="ENVMAP_BLENDING_ADD";break}return e}function YC(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function WC(o,e,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=VC(i),g=XC(i),v=kC(i),m=qC(i),_=YC(i),S=OC(i),E=PC(u),T=l.createProgram();let M,x,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(bl).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(bl).join(`
`),x.length>0&&(x+=`
`)):(M=[Hy(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bl).join(`
`),x=[Hy(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",i.envMap?"#define "+m:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ps?"#define TONE_MAPPING":"",i.toneMapping!==ps?ge.tonemapping_pars_fragment:"",i.toneMapping!==ps?UC("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,NC("linearToOutputTexel",i.outputColorSpace),LC(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(bl).join(`
`)),h=Kp(h),h=Iy(h,i),h=By(h,i),d=Kp(d),d=Iy(d,i),d=By(d,i),h=Fy(h),d=Fy(d),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===k_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===k_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const U=N+M+h,A=N+x+d,F=Oy(l,l.VERTEX_SHADER,U),z=Oy(l,l.FRAGMENT_SHADER,A);l.attachShader(T,F),l.attachShader(T,z),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function P(H){if(o.debug.checkShaderErrors){const tt=l.getProgramInfoLog(T).trim(),st=l.getShaderInfoLog(F).trim(),ut=l.getShaderInfoLog(z).trim();let mt=!0,k=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(mt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,T,F,z);else{const lt=zy(l,F,"vertex"),K=zy(l,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+tt+`
`+lt+`
`+K)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(st===""||ut==="")&&(k=!1);k&&(H.diagnostics={runnable:mt,programLog:tt,vertexShader:{log:st,prefix:M},fragmentShader:{log:ut,prefix:x}})}l.deleteShader(F),l.deleteShader(z),B=new Vc(l,T),w=zC(l,T)}let B;this.getUniforms=function(){return B===void 0&&P(this),B};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(T,CC)),R},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=RC++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=F,this.fragmentShader=z,this}let jC=0;class ZC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new KC(e),i.set(e,s)),s}}class KC{constructor(e){this.id=jC++,this.code=e,this.usedTimes=0}}function QC(o,e,i,s,l,u,h){const d=new gx,p=new ZC,g=new Set,v=[],m=l.logarithmicDepthBuffer,_=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(w){return g.add(w),w===0?"uv":`uv${w}`}function M(w,R,H,tt,st){const ut=tt.fog,mt=st.geometry,k=w.isMeshStandardMaterial?tt.environment:null,lt=(w.isMeshStandardMaterial?i:e).get(w.envMap||k),K=lt&&lt.mapping===Wc?lt.image.height:null,yt=E[w.type];w.precision!==null&&(S=l.getMaxPrecision(w.precision),S!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",S,"instead."));const Mt=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,Ft=Mt!==void 0?Mt.length:0;let Jt=0;mt.morphAttributes.position!==void 0&&(Jt=1),mt.morphAttributes.normal!==void 0&&(Jt=2),mt.morphAttributes.color!==void 0&&(Jt=3);let ye,L,Z,gt;if(yt){const Ce=Zi[yt];ye=Ce.vertexShader,L=Ce.fragmentShader}else ye=w.vertexShader,L=w.fragmentShader,p.update(w),Z=p.getVertexShaderID(w),gt=p.getFragmentShaderID(w);const ct=o.getRenderTarget(),bt=o.state.buffers.depth.getReversed(),Gt=st.isInstancedMesh===!0,Dt=st.isBatchedMesh===!0,vt=!!w.map,xt=!!w.matcap,$t=!!lt,G=!!w.aoMap,Je=!!w.lightMap,ae=!!w.bumpMap,Zt=!!w.normalMap,At=!!w.displacementMap,me=!!w.emissiveMap,Ut=!!w.metalnessMap,O=!!w.roughnessMap,C=w.anisotropy>0,nt=w.clearcoat>0,it=w.dispersion>0,St=w.iridescence>0,ht=w.sheen>0,qt=w.transmission>0,Ct=C&&!!w.anisotropyMap,Yt=nt&&!!w.clearcoatMap,Kt=nt&&!!w.clearcoatNormalMap,Et=nt&&!!w.clearcoatRoughnessMap,Bt=St&&!!w.iridescenceMap,ne=St&&!!w.iridescenceThicknessMap,se=ht&&!!w.sheenColorMap,Vt=ht&&!!w.sheenRoughnessMap,xe=!!w.specularMap,fe=!!w.specularColorMap,Fe=!!w.specularIntensityMap,q=qt&&!!w.transmissionMap,zt=qt&&!!w.thicknessMap,ft=!!w.gradientMap,_t=!!w.alphaMap,Pt=w.alphaTest>0,It=!!w.alphaHash,ue=!!w.extensions;let $e=ps;w.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&($e=o.toneMapping);const vn={shaderID:yt,shaderType:w.type,shaderName:w.name,vertexShader:ye,fragmentShader:L,defines:w.defines,customVertexShaderID:Z,customFragmentShaderID:gt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:S,batching:Dt,batchingColor:Dt&&st._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&st.instanceColor!==null,instancingMorph:Gt&&st.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:ct===null?o.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:mo,alphaToCoverage:!!w.alphaToCoverage,map:vt,matcap:xt,envMap:$t,envMapMode:$t&&lt.mapping,envMapCubeUVHeight:K,aoMap:G,lightMap:Je,bumpMap:ae,normalMap:Zt,displacementMap:_&&At,emissiveMap:me,normalMapObjectSpace:Zt&&w.normalMapType===pT,normalMapTangentSpace:Zt&&w.normalMapType===fx,metalnessMap:Ut,roughnessMap:O,anisotropy:C,anisotropyMap:Ct,clearcoat:nt,clearcoatMap:Yt,clearcoatNormalMap:Kt,clearcoatRoughnessMap:Et,dispersion:it,iridescence:St,iridescenceMap:Bt,iridescenceThicknessMap:ne,sheen:ht,sheenColorMap:se,sheenRoughnessMap:Vt,specularMap:xe,specularColorMap:fe,specularIntensityMap:Fe,transmission:qt,transmissionMap:q,thicknessMap:zt,gradientMap:ft,opaque:w.transparent===!1&&w.blending===lo&&w.alphaToCoverage===!1,alphaMap:_t,alphaTest:Pt,alphaHash:It,combine:w.combine,mapUv:vt&&T(w.map.channel),aoMapUv:G&&T(w.aoMap.channel),lightMapUv:Je&&T(w.lightMap.channel),bumpMapUv:ae&&T(w.bumpMap.channel),normalMapUv:Zt&&T(w.normalMap.channel),displacementMapUv:At&&T(w.displacementMap.channel),emissiveMapUv:me&&T(w.emissiveMap.channel),metalnessMapUv:Ut&&T(w.metalnessMap.channel),roughnessMapUv:O&&T(w.roughnessMap.channel),anisotropyMapUv:Ct&&T(w.anisotropyMap.channel),clearcoatMapUv:Yt&&T(w.clearcoatMap.channel),clearcoatNormalMapUv:Kt&&T(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&T(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&T(w.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&T(w.iridescenceThicknessMap.channel),sheenColorMapUv:se&&T(w.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&T(w.sheenRoughnessMap.channel),specularMapUv:xe&&T(w.specularMap.channel),specularColorMapUv:fe&&T(w.specularColorMap.channel),specularIntensityMapUv:Fe&&T(w.specularIntensityMap.channel),transmissionMapUv:q&&T(w.transmissionMap.channel),thicknessMapUv:zt&&T(w.thicknessMap.channel),alphaMapUv:_t&&T(w.alphaMap.channel),vertexTangents:!!mt.attributes.tangent&&(Zt||C),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!mt.attributes.uv&&(vt||_t),fog:!!ut,useFog:w.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:bt,skinning:st.isSkinnedMesh===!0,morphTargets:mt.morphAttributes.position!==void 0,morphNormals:mt.morphAttributes.normal!==void 0,morphColors:mt.morphAttributes.color!==void 0,morphTargetsCount:Ft,morphTextureStride:Jt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:$e,decodeVideoTexture:vt&&w.map.isVideoTexture===!0&&Ne.getTransfer(w.map.colorSpace)===Be,decodeVideoTextureEmissive:me&&w.emissiveMap.isVideoTexture===!0&&Ne.getTransfer(w.emissiveMap.colorSpace)===Be,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ki,flipSided:w.side===Zn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ue&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&w.extensions.multiDraw===!0||Dt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return vn.vertexUv1s=g.has(1),vn.vertexUv2s=g.has(2),vn.vertexUv3s=g.has(3),g.clear(),vn}function x(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const H in w.defines)R.push(H),R.push(w.defines[H]);return w.isRawShaderMaterial===!1&&(N(R,w),U(R,w),R.push(o.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function N(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function U(w,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),w.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),w.push(d.mask)}function A(w){const R=E[w.type];let H;if(R){const tt=Zi[R];H=Il.clone(tt.uniforms)}else H=w.uniforms;return H}function F(w,R){let H;for(let tt=0,st=v.length;tt<st;tt++){const ut=v[tt];if(ut.cacheKey===R){H=ut,++H.usedTimes;break}}return H===void 0&&(H=new WC(o,R,w,u),v.push(H)),H}function z(w){if(--w.usedTimes===0){const R=v.indexOf(w);v[R]=v[v.length-1],v.pop(),w.destroy()}}function P(w){p.remove(w)}function B(){p.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:A,acquireProgram:F,releaseProgram:z,releaseShaderCache:P,programs:v,dispose:B}}function JC(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,p){o.get(h)[d]=p}function u(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function $C(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Gy(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Vy(){const o=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function h(m,_,S,E,T,M){let x=o[e];return x===void 0?(x={id:m.id,object:m,geometry:_,material:S,groupOrder:E,renderOrder:m.renderOrder,z:T,group:M},o[e]=x):(x.id=m.id,x.object=m,x.geometry=_,x.material=S,x.groupOrder=E,x.renderOrder=m.renderOrder,x.z=T,x.group=M),e++,x}function d(m,_,S,E,T,M){const x=h(m,_,S,E,T,M);S.transmission>0?s.push(x):S.transparent===!0?l.push(x):i.push(x)}function p(m,_,S,E,T,M){const x=h(m,_,S,E,T,M);S.transmission>0?s.unshift(x):S.transparent===!0?l.unshift(x):i.unshift(x)}function g(m,_){i.length>1&&i.sort(m||$C),s.length>1&&s.sort(_||Gy),l.length>1&&l.sort(_||Gy)}function v(){for(let m=e,_=o.length;m<_;m++){const S=o[m];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:p,finish:v,sort:g}}function tR(){let o=new WeakMap;function e(s,l){const u=o.get(s);let h;return u===void 0?(h=new Vy,o.set(s,[h])):l>=u.length?(h=new Vy,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function eR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new V,color:new ce};break;case"SpotLight":i={position:new V,direction:new V,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new V,color:new ce,distance:0,decay:0};break;case"HemisphereLight":i={direction:new V,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":i={color:new ce,position:new V,halfWidth:new V,halfHeight:new V};break}return o[e.id]=i,i}}}function nR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let iR=0;function aR(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function sR(o){const e=new eR,i=nR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)s.probe.push(new V);const l=new V,u=new Ve,h=new Ve;function d(g){let v=0,m=0,_=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let S=0,E=0,T=0,M=0,x=0,N=0,U=0,A=0,F=0,z=0,P=0;g.sort(aR);for(let w=0,R=g.length;w<R;w++){const H=g[w],tt=H.color,st=H.intensity,ut=H.distance,mt=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)v+=tt.r*st,m+=tt.g*st,_+=tt.b*st;else if(H.isLightProbe){for(let k=0;k<9;k++)s.probe[k].addScaledVector(H.sh.coefficients[k],st);P++}else if(H.isDirectionalLight){const k=e.get(H);if(k.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const lt=H.shadow,K=i.get(H);K.shadowIntensity=lt.intensity,K.shadowBias=lt.bias,K.shadowNormalBias=lt.normalBias,K.shadowRadius=lt.radius,K.shadowMapSize=lt.mapSize,s.directionalShadow[S]=K,s.directionalShadowMap[S]=mt,s.directionalShadowMatrix[S]=H.shadow.matrix,N++}s.directional[S]=k,S++}else if(H.isSpotLight){const k=e.get(H);k.position.setFromMatrixPosition(H.matrixWorld),k.color.copy(tt).multiplyScalar(st),k.distance=ut,k.coneCos=Math.cos(H.angle),k.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),k.decay=H.decay,s.spot[T]=k;const lt=H.shadow;if(H.map&&(s.spotLightMap[F]=H.map,F++,lt.updateMatrices(H),H.castShadow&&z++),s.spotLightMatrix[T]=lt.matrix,H.castShadow){const K=i.get(H);K.shadowIntensity=lt.intensity,K.shadowBias=lt.bias,K.shadowNormalBias=lt.normalBias,K.shadowRadius=lt.radius,K.shadowMapSize=lt.mapSize,s.spotShadow[T]=K,s.spotShadowMap[T]=mt,A++}T++}else if(H.isRectAreaLight){const k=e.get(H);k.color.copy(tt).multiplyScalar(st),k.halfWidth.set(H.width*.5,0,0),k.halfHeight.set(0,H.height*.5,0),s.rectArea[M]=k,M++}else if(H.isPointLight){const k=e.get(H);if(k.color.copy(H.color).multiplyScalar(H.intensity),k.distance=H.distance,k.decay=H.decay,H.castShadow){const lt=H.shadow,K=i.get(H);K.shadowIntensity=lt.intensity,K.shadowBias=lt.bias,K.shadowNormalBias=lt.normalBias,K.shadowRadius=lt.radius,K.shadowMapSize=lt.mapSize,K.shadowCameraNear=lt.camera.near,K.shadowCameraFar=lt.camera.far,s.pointShadow[E]=K,s.pointShadowMap[E]=mt,s.pointShadowMatrix[E]=H.shadow.matrix,U++}s.point[E]=k,E++}else if(H.isHemisphereLight){const k=e.get(H);k.skyColor.copy(H.color).multiplyScalar(st),k.groundColor.copy(H.groundColor).multiplyScalar(st),s.hemi[x]=k,x++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ot.LTC_FLOAT_1,s.rectAreaLTC2=Ot.LTC_FLOAT_2):(s.rectAreaLTC1=Ot.LTC_HALF_1,s.rectAreaLTC2=Ot.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=m,s.ambient[2]=_;const B=s.hash;(B.directionalLength!==S||B.pointLength!==E||B.spotLength!==T||B.rectAreaLength!==M||B.hemiLength!==x||B.numDirectionalShadows!==N||B.numPointShadows!==U||B.numSpotShadows!==A||B.numSpotMaps!==F||B.numLightProbes!==P)&&(s.directional.length=S,s.spot.length=T,s.rectArea.length=M,s.point.length=E,s.hemi.length=x,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=A+F-z,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=P,B.directionalLength=S,B.pointLength=E,B.spotLength=T,B.rectAreaLength=M,B.hemiLength=x,B.numDirectionalShadows=N,B.numPointShadows=U,B.numSpotShadows=A,B.numSpotMaps=F,B.numLightProbes=P,s.version=iR++)}function p(g,v){let m=0,_=0,S=0,E=0,T=0;const M=v.matrixWorldInverse;for(let x=0,N=g.length;x<N;x++){const U=g[x];if(U.isDirectionalLight){const A=s.directional[m];A.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),A.direction.sub(l),A.direction.transformDirection(M),m++}else if(U.isSpotLight){const A=s.spot[S];A.position.setFromMatrixPosition(U.matrixWorld),A.position.applyMatrix4(M),A.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),A.direction.sub(l),A.direction.transformDirection(M),S++}else if(U.isRectAreaLight){const A=s.rectArea[E];A.position.setFromMatrixPosition(U.matrixWorld),A.position.applyMatrix4(M),h.identity(),u.copy(U.matrixWorld),u.premultiply(M),h.extractRotation(u),A.halfWidth.set(U.width*.5,0,0),A.halfHeight.set(0,U.height*.5,0),A.halfWidth.applyMatrix4(h),A.halfHeight.applyMatrix4(h),E++}else if(U.isPointLight){const A=s.point[_];A.position.setFromMatrixPosition(U.matrixWorld),A.position.applyMatrix4(M),_++}else if(U.isHemisphereLight){const A=s.hemi[T];A.direction.setFromMatrixPosition(U.matrixWorld),A.direction.transformDirection(M),T++}}}return{setup:d,setupView:p,state:s}}function Xy(o){const e=new sR(o),i=[],s=[];function l(v){g.camera=v,i.length=0,s.length=0}function u(v){i.push(v)}function h(v){s.push(v)}function d(){e.setup(i)}function p(v){e.setupView(i,v)}const g={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:g,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:h}}function rR(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new Xy(o),e.set(l,[d])):u>=h.length?(d=new Xy(o),h.push(d)):d=h[u],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const oR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lR=`uniform sampler2D shadow_pass;
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
}`;function uR(o,e,i){let s=new fm;const l=new Xt,u=new Xt,h=new Ge,d=new L1({depthPacking:dT}),p=new O1,g={},v=i.maxTextureSize,m={[ms]:Zn,[Zn]:ms,[Ki]:Ki},_=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:oR,fragmentShader:lR}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const E=new Un;E.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ee(E,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zy;let x=this.type;this.render=function(z,P,B){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;const w=o.getRenderTarget(),R=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),tt=o.state;tt.setBlending(Ca),tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);const st=x!==Ta&&this.type===Ta,ut=x===Ta&&this.type!==Ta;for(let mt=0,k=z.length;mt<k;mt++){const lt=z[mt],K=lt.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",lt,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;l.copy(K.mapSize);const yt=K.getFrameExtents();if(l.multiply(yt),u.copy(K.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/yt.x),l.x=u.x*yt.x,K.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/yt.y),l.y=u.y*yt.y,K.mapSize.y=u.y)),K.map===null||st===!0||ut===!0){const Ft=this.type!==Ta?{minFilter:di,magFilter:di}:{};K.map!==null&&K.map.dispose(),K.map=new zi(l.x,l.y,Ft),K.map.texture.name=lt.name+".shadowMap",K.camera.updateProjectionMatrix()}o.setRenderTarget(K.map),o.clear();const Mt=K.getViewportCount();for(let Ft=0;Ft<Mt;Ft++){const Jt=K.getViewport(Ft);h.set(u.x*Jt.x,u.y*Jt.y,u.x*Jt.z,u.y*Jt.w),tt.viewport(h),K.updateMatrices(lt,Ft),s=K.getFrustum(),A(P,B,K.camera,lt,this.type)}K.isPointLightShadow!==!0&&this.type===Ta&&N(K,B),K.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(w,R,H)};function N(z,P){const B=e.update(T);_.defines.VSM_SAMPLES!==z.blurSamples&&(_.defines.VSM_SAMPLES=z.blurSamples,S.defines.VSM_SAMPLES=z.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new zi(l.x,l.y)),_.uniforms.shadow_pass.value=z.map.texture,_.uniforms.resolution.value=z.mapSize,_.uniforms.radius.value=z.radius,o.setRenderTarget(z.mapPass),o.clear(),o.renderBufferDirect(P,null,B,_,T,null),S.uniforms.shadow_pass.value=z.mapPass.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,o.setRenderTarget(z.map),o.clear(),o.renderBufferDirect(P,null,B,S,T,null)}function U(z,P,B,w){let R=null;const H=B.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(H!==void 0)R=H;else if(R=B.isPointLight===!0?p:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const tt=R.uuid,st=P.uuid;let ut=g[tt];ut===void 0&&(ut={},g[tt]=ut);let mt=ut[st];mt===void 0&&(mt=R.clone(),ut[st]=mt,P.addEventListener("dispose",F)),R=mt}if(R.visible=P.visible,R.wireframe=P.wireframe,w===Ta?R.side=P.shadowSide!==null?P.shadowSide:P.side:R.side=P.shadowSide!==null?P.shadowSide:m[P.side],R.alphaMap=P.alphaMap,R.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,R.map=P.map,R.clipShadows=P.clipShadows,R.clippingPlanes=P.clippingPlanes,R.clipIntersection=P.clipIntersection,R.displacementMap=P.displacementMap,R.displacementScale=P.displacementScale,R.displacementBias=P.displacementBias,R.wireframeLinewidth=P.wireframeLinewidth,R.linewidth=P.linewidth,B.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const tt=o.properties.get(R);tt.light=B}return R}function A(z,P,B,w,R){if(z.visible===!1)return;if(z.layers.test(P.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&R===Ta)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,z.matrixWorld);const st=e.update(z),ut=z.material;if(Array.isArray(ut)){const mt=st.groups;for(let k=0,lt=mt.length;k<lt;k++){const K=mt[k],yt=ut[K.materialIndex];if(yt&&yt.visible){const Mt=U(z,yt,w,R);z.onBeforeShadow(o,z,P,B,st,Mt,K),o.renderBufferDirect(B,null,st,Mt,z,K),z.onAfterShadow(o,z,P,B,st,Mt,K)}}}else if(ut.visible){const mt=U(z,ut,w,R);z.onBeforeShadow(o,z,P,B,st,mt,null),o.renderBufferDirect(B,null,st,mt,z,null),z.onAfterShadow(o,z,P,B,st,mt,null)}}const tt=z.children;for(let st=0,ut=tt.length;st<ut;st++)A(tt[st],P,B,w,R)}function F(z){z.target.removeEventListener("dispose",F);for(const B in g){const w=g[B],R=z.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}const cR={[fp]:hp,[dp]:gp,[pp]:vp,[fo]:mp,[hp]:fp,[gp]:dp,[vp]:pp,[mp]:fo};function fR(o,e){function i(){let q=!1;const zt=new Ge;let ft=null;const _t=new Ge(0,0,0,0);return{setMask:function(Pt){ft!==Pt&&!q&&(o.colorMask(Pt,Pt,Pt,Pt),ft=Pt)},setLocked:function(Pt){q=Pt},setClear:function(Pt,It,ue,$e,vn){vn===!0&&(Pt*=$e,It*=$e,ue*=$e),zt.set(Pt,It,ue,$e),_t.equals(zt)===!1&&(o.clearColor(Pt,It,ue,$e),_t.copy(zt))},reset:function(){q=!1,ft=null,_t.set(-1,0,0,0)}}}function s(){let q=!1,zt=!1,ft=null,_t=null,Pt=null;return{setReversed:function(It){if(zt!==It){const ue=e.get("EXT_clip_control");It?ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.ZERO_TO_ONE_EXT):ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.NEGATIVE_ONE_TO_ONE_EXT),zt=It;const $e=Pt;Pt=null,this.setClear($e)}},getReversed:function(){return zt},setTest:function(It){It?ct(o.DEPTH_TEST):bt(o.DEPTH_TEST)},setMask:function(It){ft!==It&&!q&&(o.depthMask(It),ft=It)},setFunc:function(It){if(zt&&(It=cR[It]),_t!==It){switch(It){case fp:o.depthFunc(o.NEVER);break;case hp:o.depthFunc(o.ALWAYS);break;case dp:o.depthFunc(o.LESS);break;case fo:o.depthFunc(o.LEQUAL);break;case pp:o.depthFunc(o.EQUAL);break;case mp:o.depthFunc(o.GEQUAL);break;case gp:o.depthFunc(o.GREATER);break;case vp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}_t=It}},setLocked:function(It){q=It},setClear:function(It){Pt!==It&&(zt&&(It=1-It),o.clearDepth(It),Pt=It)},reset:function(){q=!1,ft=null,_t=null,Pt=null,zt=!1}}}function l(){let q=!1,zt=null,ft=null,_t=null,Pt=null,It=null,ue=null,$e=null,vn=null;return{setTest:function(Ce){q||(Ce?ct(o.STENCIL_TEST):bt(o.STENCIL_TEST))},setMask:function(Ce){zt!==Ce&&!q&&(o.stencilMask(Ce),zt=Ce)},setFunc:function(Ce,Ke,_n){(ft!==Ce||_t!==Ke||Pt!==_n)&&(o.stencilFunc(Ce,Ke,_n),ft=Ce,_t=Ke,Pt=_n)},setOp:function(Ce,Ke,_n){(It!==Ce||ue!==Ke||$e!==_n)&&(o.stencilOp(Ce,Ke,_n),It=Ce,ue=Ke,$e=_n)},setLocked:function(Ce){q=Ce},setClear:function(Ce){vn!==Ce&&(o.clearStencil(Ce),vn=Ce)},reset:function(){q=!1,zt=null,ft=null,_t=null,Pt=null,It=null,ue=null,$e=null,vn=null}}}const u=new i,h=new s,d=new l,p=new WeakMap,g=new WeakMap;let v={},m={},_=new WeakMap,S=[],E=null,T=!1,M=null,x=null,N=null,U=null,A=null,F=null,z=null,P=new ce(0,0,0),B=0,w=!1,R=null,H=null,tt=null,st=null,ut=null;const mt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,lt=0;const K=o.getParameter(o.VERSION);K.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec(K)[1]),k=lt>=1):K.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),k=lt>=2);let yt=null,Mt={};const Ft=o.getParameter(o.SCISSOR_BOX),Jt=o.getParameter(o.VIEWPORT),ye=new Ge().fromArray(Ft),L=new Ge().fromArray(Jt);function Z(q,zt,ft,_t){const Pt=new Uint8Array(4),It=o.createTexture();o.bindTexture(q,It),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ue=0;ue<ft;ue++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(zt,0,o.RGBA,1,1,_t,0,o.RGBA,o.UNSIGNED_BYTE,Pt):o.texImage2D(zt+ue,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Pt);return It}const gt={};gt[o.TEXTURE_2D]=Z(o.TEXTURE_2D,o.TEXTURE_2D,1),gt[o.TEXTURE_CUBE_MAP]=Z(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[o.TEXTURE_2D_ARRAY]=Z(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),gt[o.TEXTURE_3D]=Z(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ct(o.DEPTH_TEST),h.setFunc(fo),ae(!1),Zt(F_),ct(o.CULL_FACE),G(Ca);function ct(q){v[q]!==!0&&(o.enable(q),v[q]=!0)}function bt(q){v[q]!==!1&&(o.disable(q),v[q]=!1)}function Gt(q,zt){return m[q]!==zt?(o.bindFramebuffer(q,zt),m[q]=zt,q===o.DRAW_FRAMEBUFFER&&(m[o.FRAMEBUFFER]=zt),q===o.FRAMEBUFFER&&(m[o.DRAW_FRAMEBUFFER]=zt),!0):!1}function Dt(q,zt){let ft=S,_t=!1;if(q){ft=_.get(zt),ft===void 0&&(ft=[],_.set(zt,ft));const Pt=q.textures;if(ft.length!==Pt.length||ft[0]!==o.COLOR_ATTACHMENT0){for(let It=0,ue=Pt.length;It<ue;It++)ft[It]=o.COLOR_ATTACHMENT0+It;ft.length=Pt.length,_t=!0}}else ft[0]!==o.BACK&&(ft[0]=o.BACK,_t=!0);_t&&o.drawBuffers(ft)}function vt(q){return E!==q?(o.useProgram(q),E=q,!0):!1}const xt={[js]:o.FUNC_ADD,[YE]:o.FUNC_SUBTRACT,[WE]:o.FUNC_REVERSE_SUBTRACT};xt[jE]=o.MIN,xt[ZE]=o.MAX;const $t={[KE]:o.ZERO,[QE]:o.ONE,[JE]:o.SRC_COLOR,[up]:o.SRC_ALPHA,[aT]:o.SRC_ALPHA_SATURATE,[nT]:o.DST_COLOR,[tT]:o.DST_ALPHA,[$E]:o.ONE_MINUS_SRC_COLOR,[cp]:o.ONE_MINUS_SRC_ALPHA,[iT]:o.ONE_MINUS_DST_COLOR,[eT]:o.ONE_MINUS_DST_ALPHA,[sT]:o.CONSTANT_COLOR,[rT]:o.ONE_MINUS_CONSTANT_COLOR,[oT]:o.CONSTANT_ALPHA,[lT]:o.ONE_MINUS_CONSTANT_ALPHA};function G(q,zt,ft,_t,Pt,It,ue,$e,vn,Ce){if(q===Ca){T===!0&&(bt(o.BLEND),T=!1);return}if(T===!1&&(ct(o.BLEND),T=!0),q!==qE){if(q!==M||Ce!==w){if((x!==js||A!==js)&&(o.blendEquation(o.FUNC_ADD),x=js,A=js),Ce)switch(q){case lo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case $s:o.blendFunc(o.ONE,o.ONE);break;case H_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case G_:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case lo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case $s:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case H_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case G_:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}N=null,U=null,F=null,z=null,P.set(0,0,0),B=0,M=q,w=Ce}return}Pt=Pt||zt,It=It||ft,ue=ue||_t,(zt!==x||Pt!==A)&&(o.blendEquationSeparate(xt[zt],xt[Pt]),x=zt,A=Pt),(ft!==N||_t!==U||It!==F||ue!==z)&&(o.blendFuncSeparate($t[ft],$t[_t],$t[It],$t[ue]),N=ft,U=_t,F=It,z=ue),($e.equals(P)===!1||vn!==B)&&(o.blendColor($e.r,$e.g,$e.b,vn),P.copy($e),B=vn),M=q,w=!1}function Je(q,zt){q.side===Ki?bt(o.CULL_FACE):ct(o.CULL_FACE);let ft=q.side===Zn;zt&&(ft=!ft),ae(ft),q.blending===lo&&q.transparent===!1?G(Ca):G(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),h.setFunc(q.depthFunc),h.setTest(q.depthTest),h.setMask(q.depthWrite),u.setMask(q.colorWrite);const _t=q.stencilWrite;d.setTest(_t),_t&&(d.setMask(q.stencilWriteMask),d.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),d.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),me(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?ct(o.SAMPLE_ALPHA_TO_COVERAGE):bt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ae(q){R!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),R=q)}function Zt(q){q!==VE?(ct(o.CULL_FACE),q!==H&&(q===F_?o.cullFace(o.BACK):q===XE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):bt(o.CULL_FACE),H=q}function At(q){q!==tt&&(k&&o.lineWidth(q),tt=q)}function me(q,zt,ft){q?(ct(o.POLYGON_OFFSET_FILL),(st!==zt||ut!==ft)&&(o.polygonOffset(zt,ft),st=zt,ut=ft)):bt(o.POLYGON_OFFSET_FILL)}function Ut(q){q?ct(o.SCISSOR_TEST):bt(o.SCISSOR_TEST)}function O(q){q===void 0&&(q=o.TEXTURE0+mt-1),yt!==q&&(o.activeTexture(q),yt=q)}function C(q,zt,ft){ft===void 0&&(yt===null?ft=o.TEXTURE0+mt-1:ft=yt);let _t=Mt[ft];_t===void 0&&(_t={type:void 0,texture:void 0},Mt[ft]=_t),(_t.type!==q||_t.texture!==zt)&&(yt!==ft&&(o.activeTexture(ft),yt=ft),o.bindTexture(q,zt||gt[q]),_t.type=q,_t.texture=zt)}function nt(){const q=Mt[yt];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function it(){try{o.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function St(){try{o.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ht(){try{o.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function qt(){try{o.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ct(){try{o.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Yt(){try{o.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Kt(){try{o.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Et(){try{o.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Bt(){try{o.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ne(){try{o.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function se(q){ye.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),ye.copy(q))}function Vt(q){L.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),L.copy(q))}function xe(q,zt){let ft=g.get(zt);ft===void 0&&(ft=new WeakMap,g.set(zt,ft));let _t=ft.get(q);_t===void 0&&(_t=o.getUniformBlockIndex(zt,q.name),ft.set(q,_t))}function fe(q,zt){const _t=g.get(zt).get(q);p.get(zt)!==_t&&(o.uniformBlockBinding(zt,_t,q.__bindingPointIndex),p.set(zt,_t))}function Fe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},yt=null,Mt={},m={},_=new WeakMap,S=[],E=null,T=!1,M=null,x=null,N=null,U=null,A=null,F=null,z=null,P=new ce(0,0,0),B=0,w=!1,R=null,H=null,tt=null,st=null,ut=null,ye.set(0,0,o.canvas.width,o.canvas.height),L.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:ct,disable:bt,bindFramebuffer:Gt,drawBuffers:Dt,useProgram:vt,setBlending:G,setMaterial:Je,setFlipSided:ae,setCullFace:Zt,setLineWidth:At,setPolygonOffset:me,setScissorTest:Ut,activeTexture:O,bindTexture:C,unbindTexture:nt,compressedTexImage2D:it,compressedTexImage3D:St,texImage2D:Bt,texImage3D:ne,updateUBOMapping:xe,uniformBlockBinding:fe,texStorage2D:Kt,texStorage3D:Et,texSubImage2D:ht,texSubImage3D:qt,compressedTexSubImage2D:Ct,compressedTexSubImage3D:Yt,scissor:se,viewport:Vt,reset:Fe}}function hR(o,e,i,s,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new Xt,v=new WeakMap;let m;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,C){return S?new OffscreenCanvas(O,C):Yc("canvas")}function T(O,C,nt){let it=1;const St=Ut(O);if((St.width>nt||St.height>nt)&&(it=nt/Math.max(St.width,St.height)),it<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ht=Math.floor(it*St.width),qt=Math.floor(it*St.height);m===void 0&&(m=E(ht,qt));const Ct=C?E(ht,qt):m;return Ct.width=ht,Ct.height=qt,Ct.getContext("2d").drawImage(O,0,0,ht,qt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+ht+"x"+qt+")."),Ct}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),O;return O}function M(O){return O.generateMipmaps}function x(O){o.generateMipmap(O)}function N(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(O,C,nt,it,St=!1){if(O!==null){if(o[O]!==void 0)return o[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ht=C;if(C===o.RED&&(nt===o.FLOAT&&(ht=o.R32F),nt===o.HALF_FLOAT&&(ht=o.R16F),nt===o.UNSIGNED_BYTE&&(ht=o.R8)),C===o.RED_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ht=o.R8UI),nt===o.UNSIGNED_SHORT&&(ht=o.R16UI),nt===o.UNSIGNED_INT&&(ht=o.R32UI),nt===o.BYTE&&(ht=o.R8I),nt===o.SHORT&&(ht=o.R16I),nt===o.INT&&(ht=o.R32I)),C===o.RG&&(nt===o.FLOAT&&(ht=o.RG32F),nt===o.HALF_FLOAT&&(ht=o.RG16F),nt===o.UNSIGNED_BYTE&&(ht=o.RG8)),C===o.RG_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ht=o.RG8UI),nt===o.UNSIGNED_SHORT&&(ht=o.RG16UI),nt===o.UNSIGNED_INT&&(ht=o.RG32UI),nt===o.BYTE&&(ht=o.RG8I),nt===o.SHORT&&(ht=o.RG16I),nt===o.INT&&(ht=o.RG32I)),C===o.RGB_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ht=o.RGB8UI),nt===o.UNSIGNED_SHORT&&(ht=o.RGB16UI),nt===o.UNSIGNED_INT&&(ht=o.RGB32UI),nt===o.BYTE&&(ht=o.RGB8I),nt===o.SHORT&&(ht=o.RGB16I),nt===o.INT&&(ht=o.RGB32I)),C===o.RGBA_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ht=o.RGBA8UI),nt===o.UNSIGNED_SHORT&&(ht=o.RGBA16UI),nt===o.UNSIGNED_INT&&(ht=o.RGBA32UI),nt===o.BYTE&&(ht=o.RGBA8I),nt===o.SHORT&&(ht=o.RGBA16I),nt===o.INT&&(ht=o.RGBA32I)),C===o.RGB&&nt===o.UNSIGNED_INT_5_9_9_9_REV&&(ht=o.RGB9_E5),C===o.RGBA){const qt=St?kc:Ne.getTransfer(it);nt===o.FLOAT&&(ht=o.RGBA32F),nt===o.HALF_FLOAT&&(ht=o.RGBA16F),nt===o.UNSIGNED_BYTE&&(ht=qt===Be?o.SRGB8_ALPHA8:o.RGBA8),nt===o.UNSIGNED_SHORT_4_4_4_4&&(ht=o.RGBA4),nt===o.UNSIGNED_SHORT_5_5_5_1&&(ht=o.RGB5_A1)}return(ht===o.R16F||ht===o.R32F||ht===o.RG16F||ht===o.RG32F||ht===o.RGBA16F||ht===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ht}function A(O,C){let nt;return O?C===null||C===tr||C===Ll?nt=o.DEPTH24_STENCIL8:C===Ji?nt=o.DEPTH32F_STENCIL8:C===Ul&&(nt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===tr||C===Ll?nt=o.DEPTH_COMPONENT24:C===Ji?nt=o.DEPTH_COMPONENT32F:C===Ul&&(nt=o.DEPTH_COMPONENT16),nt}function F(O,C){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==di&&O.minFilter!==Qi?Math.log2(Math.max(C.width,C.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?C.mipmaps.length:1}function z(O){const C=O.target;C.removeEventListener("dispose",z),B(C),C.isVideoTexture&&v.delete(C)}function P(O){const C=O.target;C.removeEventListener("dispose",P),R(C)}function B(O){const C=s.get(O);if(C.__webglInit===void 0)return;const nt=O.source,it=_.get(nt);if(it){const St=it[C.__cacheKey];St.usedTimes--,St.usedTimes===0&&w(O),Object.keys(it).length===0&&_.delete(nt)}s.remove(O)}function w(O){const C=s.get(O);o.deleteTexture(C.__webglTexture);const nt=O.source,it=_.get(nt);delete it[C.__cacheKey],h.memory.textures--}function R(O){const C=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(C.__webglFramebuffer[it]))for(let St=0;St<C.__webglFramebuffer[it].length;St++)o.deleteFramebuffer(C.__webglFramebuffer[it][St]);else o.deleteFramebuffer(C.__webglFramebuffer[it]);C.__webglDepthbuffer&&o.deleteRenderbuffer(C.__webglDepthbuffer[it])}else{if(Array.isArray(C.__webglFramebuffer))for(let it=0;it<C.__webglFramebuffer.length;it++)o.deleteFramebuffer(C.__webglFramebuffer[it]);else o.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&o.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&o.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let it=0;it<C.__webglColorRenderbuffer.length;it++)C.__webglColorRenderbuffer[it]&&o.deleteRenderbuffer(C.__webglColorRenderbuffer[it]);C.__webglDepthRenderbuffer&&o.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const nt=O.textures;for(let it=0,St=nt.length;it<St;it++){const ht=s.get(nt[it]);ht.__webglTexture&&(o.deleteTexture(ht.__webglTexture),h.memory.textures--),s.remove(nt[it])}s.remove(O)}let H=0;function tt(){H=0}function st(){const O=H;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),H+=1,O}function ut(O){const C=[];return C.push(O.wrapS),C.push(O.wrapT),C.push(O.wrapR||0),C.push(O.magFilter),C.push(O.minFilter),C.push(O.anisotropy),C.push(O.internalFormat),C.push(O.format),C.push(O.type),C.push(O.generateMipmaps),C.push(O.premultiplyAlpha),C.push(O.flipY),C.push(O.unpackAlignment),C.push(O.colorSpace),C.join()}function mt(O,C){const nt=s.get(O);if(O.isVideoTexture&&At(O),O.isRenderTargetTexture===!1&&O.version>0&&nt.__version!==O.version){const it=O.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{L(nt,O,C);return}}i.bindTexture(o.TEXTURE_2D,nt.__webglTexture,o.TEXTURE0+C)}function k(O,C){const nt=s.get(O);if(O.version>0&&nt.__version!==O.version){L(nt,O,C);return}i.bindTexture(o.TEXTURE_2D_ARRAY,nt.__webglTexture,o.TEXTURE0+C)}function lt(O,C){const nt=s.get(O);if(O.version>0&&nt.__version!==O.version){L(nt,O,C);return}i.bindTexture(o.TEXTURE_3D,nt.__webglTexture,o.TEXTURE0+C)}function K(O,C){const nt=s.get(O);if(O.version>0&&nt.__version!==O.version){Z(nt,O,C);return}i.bindTexture(o.TEXTURE_CUBE_MAP,nt.__webglTexture,o.TEXTURE0+C)}const yt={[Nl]:o.REPEAT,[Ks]:o.CLAMP_TO_EDGE,[xp]:o.MIRRORED_REPEAT},Mt={[di]:o.NEAREST,[fT]:o.NEAREST_MIPMAP_NEAREST,[cc]:o.NEAREST_MIPMAP_LINEAR,[Qi]:o.LINEAR,[wd]:o.LINEAR_MIPMAP_NEAREST,[Qs]:o.LINEAR_MIPMAP_LINEAR},Ft={[mT]:o.NEVER,[ST]:o.ALWAYS,[gT]:o.LESS,[hx]:o.LEQUAL,[vT]:o.EQUAL,[xT]:o.GEQUAL,[_T]:o.GREATER,[yT]:o.NOTEQUAL};function Jt(O,C){if(C.type===Ji&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Qi||C.magFilter===wd||C.magFilter===cc||C.magFilter===Qs||C.minFilter===Qi||C.minFilter===wd||C.minFilter===cc||C.minFilter===Qs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,yt[C.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,yt[C.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,yt[C.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,Mt[C.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,Mt[C.minFilter]),C.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,Ft[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===di||C.minFilter!==cc&&C.minFilter!==Qs||C.type===Ji&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||s.get(C).__currentAnisotropy){const nt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(O,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,l.getMaxAnisotropy())),s.get(C).__currentAnisotropy=C.anisotropy}}}function ye(O,C){let nt=!1;O.__webglInit===void 0&&(O.__webglInit=!0,C.addEventListener("dispose",z));const it=C.source;let St=_.get(it);St===void 0&&(St={},_.set(it,St));const ht=ut(C);if(ht!==O.__cacheKey){St[ht]===void 0&&(St[ht]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,nt=!0),St[ht].usedTimes++;const qt=St[O.__cacheKey];qt!==void 0&&(St[O.__cacheKey].usedTimes--,qt.usedTimes===0&&w(C)),O.__cacheKey=ht,O.__webglTexture=St[ht].texture}return nt}function L(O,C,nt){let it=o.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(it=o.TEXTURE_2D_ARRAY),C.isData3DTexture&&(it=o.TEXTURE_3D);const St=ye(O,C),ht=C.source;i.bindTexture(it,O.__webglTexture,o.TEXTURE0+nt);const qt=s.get(ht);if(ht.version!==qt.__version||St===!0){i.activeTexture(o.TEXTURE0+nt);const Ct=Ne.getPrimaries(Ne.workingColorSpace),Yt=C.colorSpace===ds?null:Ne.getPrimaries(C.colorSpace),Kt=C.colorSpace===ds||Ct===Yt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,C.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,C.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let Et=T(C.image,!1,l.maxTextureSize);Et=me(C,Et);const Bt=u.convert(C.format,C.colorSpace),ne=u.convert(C.type);let se=U(C.internalFormat,Bt,ne,C.colorSpace,C.isVideoTexture);Jt(it,C);let Vt;const xe=C.mipmaps,fe=C.isVideoTexture!==!0,Fe=qt.__version===void 0||St===!0,q=ht.dataReady,zt=F(C,Et);if(C.isDepthTexture)se=A(C.format===Pl,C.type),Fe&&(fe?i.texStorage2D(o.TEXTURE_2D,1,se,Et.width,Et.height):i.texImage2D(o.TEXTURE_2D,0,se,Et.width,Et.height,0,Bt,ne,null));else if(C.isDataTexture)if(xe.length>0){fe&&Fe&&i.texStorage2D(o.TEXTURE_2D,zt,se,xe[0].width,xe[0].height);for(let ft=0,_t=xe.length;ft<_t;ft++)Vt=xe[ft],fe?q&&i.texSubImage2D(o.TEXTURE_2D,ft,0,0,Vt.width,Vt.height,Bt,ne,Vt.data):i.texImage2D(o.TEXTURE_2D,ft,se,Vt.width,Vt.height,0,Bt,ne,Vt.data);C.generateMipmaps=!1}else fe?(Fe&&i.texStorage2D(o.TEXTURE_2D,zt,se,Et.width,Et.height),q&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Et.width,Et.height,Bt,ne,Et.data)):i.texImage2D(o.TEXTURE_2D,0,se,Et.width,Et.height,0,Bt,ne,Et.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){fe&&Fe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,se,xe[0].width,xe[0].height,Et.depth);for(let ft=0,_t=xe.length;ft<_t;ft++)if(Vt=xe[ft],C.format!==Pi)if(Bt!==null)if(fe){if(q)if(C.layerUpdates.size>0){const Pt=xy(Vt.width,Vt.height,C.format,C.type);for(const It of C.layerUpdates){const ue=Vt.data.subarray(It*Pt/Vt.data.BYTES_PER_ELEMENT,(It+1)*Pt/Vt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ft,0,0,It,Vt.width,Vt.height,1,Bt,ue)}C.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ft,0,0,0,Vt.width,Vt.height,Et.depth,Bt,Vt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ft,se,Vt.width,Vt.height,Et.depth,0,Vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?q&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ft,0,0,0,Vt.width,Vt.height,Et.depth,Bt,ne,Vt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ft,se,Vt.width,Vt.height,Et.depth,0,Bt,ne,Vt.data)}else{fe&&Fe&&i.texStorage2D(o.TEXTURE_2D,zt,se,xe[0].width,xe[0].height);for(let ft=0,_t=xe.length;ft<_t;ft++)Vt=xe[ft],C.format!==Pi?Bt!==null?fe?q&&i.compressedTexSubImage2D(o.TEXTURE_2D,ft,0,0,Vt.width,Vt.height,Bt,Vt.data):i.compressedTexImage2D(o.TEXTURE_2D,ft,se,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?q&&i.texSubImage2D(o.TEXTURE_2D,ft,0,0,Vt.width,Vt.height,Bt,ne,Vt.data):i.texImage2D(o.TEXTURE_2D,ft,se,Vt.width,Vt.height,0,Bt,ne,Vt.data)}else if(C.isDataArrayTexture)if(fe){if(Fe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,se,Et.width,Et.height,Et.depth),q)if(C.layerUpdates.size>0){const ft=xy(Et.width,Et.height,C.format,C.type);for(const _t of C.layerUpdates){const Pt=Et.data.subarray(_t*ft/Et.data.BYTES_PER_ELEMENT,(_t+1)*ft/Et.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,Et.width,Et.height,1,Bt,ne,Pt)}C.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Bt,ne,Et.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,se,Et.width,Et.height,Et.depth,0,Bt,ne,Et.data);else if(C.isData3DTexture)fe?(Fe&&i.texStorage3D(o.TEXTURE_3D,zt,se,Et.width,Et.height,Et.depth),q&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Bt,ne,Et.data)):i.texImage3D(o.TEXTURE_3D,0,se,Et.width,Et.height,Et.depth,0,Bt,ne,Et.data);else if(C.isFramebufferTexture){if(Fe)if(fe)i.texStorage2D(o.TEXTURE_2D,zt,se,Et.width,Et.height);else{let ft=Et.width,_t=Et.height;for(let Pt=0;Pt<zt;Pt++)i.texImage2D(o.TEXTURE_2D,Pt,se,ft,_t,0,Bt,ne,null),ft>>=1,_t>>=1}}else if(xe.length>0){if(fe&&Fe){const ft=Ut(xe[0]);i.texStorage2D(o.TEXTURE_2D,zt,se,ft.width,ft.height)}for(let ft=0,_t=xe.length;ft<_t;ft++)Vt=xe[ft],fe?q&&i.texSubImage2D(o.TEXTURE_2D,ft,0,0,Bt,ne,Vt):i.texImage2D(o.TEXTURE_2D,ft,se,Bt,ne,Vt);C.generateMipmaps=!1}else if(fe){if(Fe){const ft=Ut(Et);i.texStorage2D(o.TEXTURE_2D,zt,se,ft.width,ft.height)}q&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Bt,ne,Et)}else i.texImage2D(o.TEXTURE_2D,0,se,Bt,ne,Et);M(C)&&x(it),qt.__version=ht.version,C.onUpdate&&C.onUpdate(C)}O.__version=C.version}function Z(O,C,nt){if(C.image.length!==6)return;const it=ye(O,C),St=C.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+nt);const ht=s.get(St);if(St.version!==ht.__version||it===!0){i.activeTexture(o.TEXTURE0+nt);const qt=Ne.getPrimaries(Ne.workingColorSpace),Ct=C.colorSpace===ds?null:Ne.getPrimaries(C.colorSpace),Yt=C.colorSpace===ds||qt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,C.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,C.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);const Kt=C.isCompressedTexture||C.image[0].isCompressedTexture,Et=C.image[0]&&C.image[0].isDataTexture,Bt=[];for(let _t=0;_t<6;_t++)!Kt&&!Et?Bt[_t]=T(C.image[_t],!0,l.maxCubemapSize):Bt[_t]=Et?C.image[_t].image:C.image[_t],Bt[_t]=me(C,Bt[_t]);const ne=Bt[0],se=u.convert(C.format,C.colorSpace),Vt=u.convert(C.type),xe=U(C.internalFormat,se,Vt,C.colorSpace),fe=C.isVideoTexture!==!0,Fe=ht.__version===void 0||it===!0,q=St.dataReady;let zt=F(C,ne);Jt(o.TEXTURE_CUBE_MAP,C);let ft;if(Kt){fe&&Fe&&i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,xe,ne.width,ne.height);for(let _t=0;_t<6;_t++){ft=Bt[_t].mipmaps;for(let Pt=0;Pt<ft.length;Pt++){const It=ft[Pt];C.format!==Pi?se!==null?fe?q&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Pt,0,0,It.width,It.height,se,It.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Pt,xe,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):fe?q&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Pt,0,0,It.width,It.height,se,Vt,It.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Pt,xe,It.width,It.height,0,se,Vt,It.data)}}}else{if(ft=C.mipmaps,fe&&Fe){ft.length>0&&zt++;const _t=Ut(Bt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,xe,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Et){fe?q&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Bt[_t].width,Bt[_t].height,se,Vt,Bt[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,xe,Bt[_t].width,Bt[_t].height,0,se,Vt,Bt[_t].data);for(let Pt=0;Pt<ft.length;Pt++){const ue=ft[Pt].image[_t].image;fe?q&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Pt+1,0,0,ue.width,ue.height,se,Vt,ue.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Pt+1,xe,ue.width,ue.height,0,se,Vt,ue.data)}}else{fe?q&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,se,Vt,Bt[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,xe,se,Vt,Bt[_t]);for(let Pt=0;Pt<ft.length;Pt++){const It=ft[Pt];fe?q&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Pt+1,0,0,se,Vt,It.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Pt+1,xe,se,Vt,It.image[_t])}}}M(C)&&x(o.TEXTURE_CUBE_MAP),ht.__version=St.version,C.onUpdate&&C.onUpdate(C)}O.__version=C.version}function gt(O,C,nt,it,St,ht){const qt=u.convert(nt.format,nt.colorSpace),Ct=u.convert(nt.type),Yt=U(nt.internalFormat,qt,Ct,nt.colorSpace),Kt=s.get(C),Et=s.get(nt);if(Et.__renderTarget=C,!Kt.__hasExternalTextures){const Bt=Math.max(1,C.width>>ht),ne=Math.max(1,C.height>>ht);St===o.TEXTURE_3D||St===o.TEXTURE_2D_ARRAY?i.texImage3D(St,ht,Yt,Bt,ne,C.depth,0,qt,Ct,null):i.texImage2D(St,ht,Yt,Bt,ne,0,qt,Ct,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),Zt(C)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,it,St,Et.__webglTexture,0,ae(C)):(St===o.TEXTURE_2D||St>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,it,St,Et.__webglTexture,ht),i.bindFramebuffer(o.FRAMEBUFFER,null)}function ct(O,C,nt){if(o.bindRenderbuffer(o.RENDERBUFFER,O),C.depthBuffer){const it=C.depthTexture,St=it&&it.isDepthTexture?it.type:null,ht=A(C.stencilBuffer,St),qt=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=ae(C);Zt(C)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ct,ht,C.width,C.height):nt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ct,ht,C.width,C.height):o.renderbufferStorage(o.RENDERBUFFER,ht,C.width,C.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,qt,o.RENDERBUFFER,O)}else{const it=C.textures;for(let St=0;St<it.length;St++){const ht=it[St],qt=u.convert(ht.format,ht.colorSpace),Ct=u.convert(ht.type),Yt=U(ht.internalFormat,qt,Ct,ht.colorSpace),Kt=ae(C);nt&&Zt(C)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Kt,Yt,C.width,C.height):Zt(C)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Kt,Yt,C.width,C.height):o.renderbufferStorage(o.RENDERBUFFER,Yt,C.width,C.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function bt(O,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const it=s.get(C.depthTexture);it.__renderTarget=C,(!it.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),mt(C.depthTexture,0);const St=it.__webglTexture,ht=ae(C);if(C.depthTexture.format===Ol)Zt(C)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0,ht):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0);else if(C.depthTexture.format===Pl)Zt(C)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0,ht):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function Gt(O){const C=s.get(O),nt=O.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==O.depthTexture){const it=O.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),it){const St=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,it.removeEventListener("dispose",St)};it.addEventListener("dispose",St),C.__depthDisposeCallback=St}C.__boundDepthTexture=it}if(O.depthTexture&&!C.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");const it=O.texture.mipmaps;it&&it.length>0?bt(C.__webglFramebuffer[0],O):bt(C.__webglFramebuffer,O)}else if(nt){C.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(i.bindFramebuffer(o.FRAMEBUFFER,C.__webglFramebuffer[it]),C.__webglDepthbuffer[it]===void 0)C.__webglDepthbuffer[it]=o.createRenderbuffer(),ct(C.__webglDepthbuffer[it],O,!1);else{const St=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=C.__webglDepthbuffer[it];o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,ht)}}else{const it=O.texture.mipmaps;if(it&&it.length>0?i.bindFramebuffer(o.FRAMEBUFFER,C.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=o.createRenderbuffer(),ct(C.__webglDepthbuffer,O,!1);else{const St=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=C.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,ht)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Dt(O,C,nt){const it=s.get(O);C!==void 0&&gt(it.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),nt!==void 0&&Gt(O)}function vt(O){const C=O.texture,nt=s.get(O),it=s.get(C);O.addEventListener("dispose",P);const St=O.textures,ht=O.isWebGLCubeRenderTarget===!0,qt=St.length>1;if(qt||(it.__webglTexture===void 0&&(it.__webglTexture=o.createTexture()),it.__version=C.version,h.memory.textures++),ht){nt.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(C.mipmaps&&C.mipmaps.length>0){nt.__webglFramebuffer[Ct]=[];for(let Yt=0;Yt<C.mipmaps.length;Yt++)nt.__webglFramebuffer[Ct][Yt]=o.createFramebuffer()}else nt.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){nt.__webglFramebuffer=[];for(let Ct=0;Ct<C.mipmaps.length;Ct++)nt.__webglFramebuffer[Ct]=o.createFramebuffer()}else nt.__webglFramebuffer=o.createFramebuffer();if(qt)for(let Ct=0,Yt=St.length;Ct<Yt;Ct++){const Kt=s.get(St[Ct]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=o.createTexture(),h.memory.textures++)}if(O.samples>0&&Zt(O)===!1){nt.__webglMultisampledFramebuffer=o.createFramebuffer(),nt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let Ct=0;Ct<St.length;Ct++){const Yt=St[Ct];nt.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,nt.__webglColorRenderbuffer[Ct]);const Kt=u.convert(Yt.format,Yt.colorSpace),Et=u.convert(Yt.type),Bt=U(Yt.internalFormat,Kt,Et,Yt.colorSpace,O.isXRRenderTarget===!0),ne=ae(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,ne,Bt,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,nt.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(nt.__webglDepthRenderbuffer=o.createRenderbuffer(),ct(nt.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ht){i.bindTexture(o.TEXTURE_CUBE_MAP,it.__webglTexture),Jt(o.TEXTURE_CUBE_MAP,C);for(let Ct=0;Ct<6;Ct++)if(C.mipmaps&&C.mipmaps.length>0)for(let Yt=0;Yt<C.mipmaps.length;Yt++)gt(nt.__webglFramebuffer[Ct][Yt],O,C,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Yt);else gt(nt.__webglFramebuffer[Ct],O,C,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);M(C)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qt){for(let Ct=0,Yt=St.length;Ct<Yt;Ct++){const Kt=St[Ct],Et=s.get(Kt);i.bindTexture(o.TEXTURE_2D,Et.__webglTexture),Jt(o.TEXTURE_2D,Kt),gt(nt.__webglFramebuffer,O,Kt,o.COLOR_ATTACHMENT0+Ct,o.TEXTURE_2D,0),M(Kt)&&x(o.TEXTURE_2D)}i.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ct=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,it.__webglTexture),Jt(Ct,C),C.mipmaps&&C.mipmaps.length>0)for(let Yt=0;Yt<C.mipmaps.length;Yt++)gt(nt.__webglFramebuffer[Yt],O,C,o.COLOR_ATTACHMENT0,Ct,Yt);else gt(nt.__webglFramebuffer,O,C,o.COLOR_ATTACHMENT0,Ct,0);M(C)&&x(Ct),i.unbindTexture()}O.depthBuffer&&Gt(O)}function xt(O){const C=O.textures;for(let nt=0,it=C.length;nt<it;nt++){const St=C[nt];if(M(St)){const ht=N(O),qt=s.get(St).__webglTexture;i.bindTexture(ht,qt),x(ht),i.unbindTexture()}}}const $t=[],G=[];function Je(O){if(O.samples>0){if(Zt(O)===!1){const C=O.textures,nt=O.width,it=O.height;let St=o.COLOR_BUFFER_BIT;const ht=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,qt=s.get(O),Ct=C.length>1;if(Ct)for(let Kt=0;Kt<C.length;Kt++)i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,qt.__webglMultisampledFramebuffer);const Yt=O.texture.mipmaps;Yt&&Yt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let Kt=0;Kt<C.length;Kt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(St|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(St|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,qt.__webglColorRenderbuffer[Kt]);const Et=s.get(C[Kt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Et,0)}o.blitFramebuffer(0,0,nt,it,0,0,nt,it,St,o.NEAREST),p===!0&&($t.length=0,G.length=0,$t.push(o.COLOR_ATTACHMENT0+Kt),O.depthBuffer&&O.resolveDepthBuffer===!1&&($t.push(ht),G.push(ht),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,G)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,$t))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let Kt=0;Kt<C.length;Kt++){i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.RENDERBUFFER,qt.__webglColorRenderbuffer[Kt]);const Et=s.get(C[Kt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.TEXTURE_2D,Et,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&p){const C=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[C])}}}function ae(O){return Math.min(l.maxSamples,O.samples)}function Zt(O){const C=s.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function At(O){const C=h.render.frame;v.get(O)!==C&&(v.set(O,C),O.update())}function me(O,C){const nt=O.colorSpace,it=O.format,St=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||nt!==mo&&nt!==ds&&(Ne.getTransfer(nt)===Be?(it!==Pi||St!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),C}function Ut(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(g.width=O.naturalWidth||O.width,g.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(g.width=O.displayWidth,g.height=O.displayHeight):(g.width=O.width,g.height=O.height),g}this.allocateTextureUnit=st,this.resetTextureUnits=tt,this.setTexture2D=mt,this.setTexture2DArray=k,this.setTexture3D=lt,this.setTextureCube=K,this.rebindTextures=Dt,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Zt}function dR(o,e){function i(s,l=ds){let u;const h=Ne.getTransfer(l);if(s===$i)return o.UNSIGNED_BYTE;if(s===nm)return o.UNSIGNED_SHORT_4_4_4_4;if(s===im)return o.UNSIGNED_SHORT_5_5_5_1;if(s===rx)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===ax)return o.BYTE;if(s===sx)return o.SHORT;if(s===Ul)return o.UNSIGNED_SHORT;if(s===em)return o.INT;if(s===tr)return o.UNSIGNED_INT;if(s===Ji)return o.FLOAT;if(s===Ra)return o.HALF_FLOAT;if(s===ox)return o.ALPHA;if(s===lx)return o.RGB;if(s===Pi)return o.RGBA;if(s===Ol)return o.DEPTH_COMPONENT;if(s===Pl)return o.DEPTH_STENCIL;if(s===am)return o.RED;if(s===sm)return o.RED_INTEGER;if(s===ux)return o.RG;if(s===rm)return o.RG_INTEGER;if(s===om)return o.RGBA_INTEGER;if(s===zc||s===Ic||s===Bc||s===Fc)if(h===Be)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===zc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ic)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Bc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Fc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===zc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ic)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Bc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Fc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Sp||s===Mp||s===Ep||s===Tp)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Sp)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Mp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ep)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Tp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===bp||s===Ap||s===Cp)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===bp||s===Ap)return h===Be?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Cp)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Rp||s===wp||s===Dp||s===Np||s===Up||s===Lp||s===Op||s===Pp||s===zp||s===Ip||s===Bp||s===Fp||s===Hp||s===Gp)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Rp)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===wp)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Dp)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Np)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Up)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Lp)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Op)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Pp)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===zp)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ip)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Bp)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Fp)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Hp)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Gp)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Hc||s===Vp||s===Xp)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===Hc)return h===Be?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Vp)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Xp)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===cx||s===kp||s===qp||s===Yp)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===Hc)return u.COMPRESSED_RED_RGTC1_EXT;if(s===kp)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===qp)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Yp)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ll?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const pR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mR=`
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

}`;class gR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,s){if(this.texture===null){const l=new Hn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new jn({vertexShader:pR,fragmentShader:mR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ee(new Hl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vR extends _o{constructor(e,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",p=1,g=null,v=null,m=null,_=null,S=null,E=null;const T=new gR,M=i.getContextAttributes();let x=null,N=null;const U=[],A=[],F=new Xt;let z=null;const P=new fi;P.viewport=new Ge;const B=new fi;B.viewport=new Ge;const w=[P,B],R=new B1;let H=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let Z=U[L];return Z===void 0&&(Z=new Zd,U[L]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(L){let Z=U[L];return Z===void 0&&(Z=new Zd,U[L]=Z),Z.getGripSpace()},this.getHand=function(L){let Z=U[L];return Z===void 0&&(Z=new Zd,U[L]=Z),Z.getHandSpace()};function st(L){const Z=A.indexOf(L.inputSource);if(Z===-1)return;const gt=U[Z];gt!==void 0&&(gt.update(L.inputSource,L.frame,g||h),gt.dispatchEvent({type:L.type,data:L.inputSource}))}function ut(){l.removeEventListener("select",st),l.removeEventListener("selectstart",st),l.removeEventListener("selectend",st),l.removeEventListener("squeeze",st),l.removeEventListener("squeezestart",st),l.removeEventListener("squeezeend",st),l.removeEventListener("end",ut),l.removeEventListener("inputsourceschange",mt);for(let L=0;L<U.length;L++){const Z=A[L];Z!==null&&(A[L]=null,U[L].disconnect(Z))}H=null,tt=null,T.reset(),e.setRenderTarget(x),S=null,_=null,m=null,l=null,N=null,ye.stop(),s.isPresenting=!1,e.setPixelRatio(z),e.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){u=L,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){d=L,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||h},this.setReferenceSpace=function(L){g=L},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return m},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(L){if(l=L,l!==null){if(x=e.getRenderTarget(),l.addEventListener("select",st),l.addEventListener("selectstart",st),l.addEventListener("selectend",st),l.addEventListener("squeeze",st),l.addEventListener("squeezestart",st),l.addEventListener("squeezeend",st),l.addEventListener("end",ut),l.addEventListener("inputsourceschange",mt),M.xrCompatible!==!0&&await i.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(F),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,ct=null,bt=null;M.depth&&(bt=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,gt=M.stencil?Pl:Ol,ct=M.stencil?Ll:tr);const Gt={colorFormat:i.RGBA8,depthFormat:bt,scaleFactor:u};m=new XRWebGLBinding(l,i),_=m.createProjectionLayer(Gt),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),N=new zi(_.textureWidth,_.textureHeight,{format:Pi,type:$i,depthTexture:new bx(_.textureWidth,_.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const gt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(l,i,gt),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new zi(S.framebufferWidth,S.framebufferHeight,{format:Pi,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(p),g=null,h=await l.requestReferenceSpace(d),ye.setContext(l),ye.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function mt(L){for(let Z=0;Z<L.removed.length;Z++){const gt=L.removed[Z],ct=A.indexOf(gt);ct>=0&&(A[ct]=null,U[ct].disconnect(gt))}for(let Z=0;Z<L.added.length;Z++){const gt=L.added[Z];let ct=A.indexOf(gt);if(ct===-1){for(let Gt=0;Gt<U.length;Gt++)if(Gt>=A.length){A.push(gt),ct=Gt;break}else if(A[Gt]===null){A[Gt]=gt,ct=Gt;break}if(ct===-1)break}const bt=U[ct];bt&&bt.connect(gt)}}const k=new V,lt=new V;function K(L,Z,gt){k.setFromMatrixPosition(Z.matrixWorld),lt.setFromMatrixPosition(gt.matrixWorld);const ct=k.distanceTo(lt),bt=Z.projectionMatrix.elements,Gt=gt.projectionMatrix.elements,Dt=bt[14]/(bt[10]-1),vt=bt[14]/(bt[10]+1),xt=(bt[9]+1)/bt[5],$t=(bt[9]-1)/bt[5],G=(bt[8]-1)/bt[0],Je=(Gt[8]+1)/Gt[0],ae=Dt*G,Zt=Dt*Je,At=ct/(-G+Je),me=At*-G;if(Z.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(me),L.translateZ(At),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert(),bt[10]===-1)L.projectionMatrix.copy(Z.projectionMatrix),L.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Ut=Dt+At,O=vt+At,C=ae-me,nt=Zt+(ct-me),it=xt*vt/O*Ut,St=$t*vt/O*Ut;L.projectionMatrix.makePerspective(C,nt,it,St,Ut,O),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}}function yt(L,Z){Z===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(Z.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(l===null)return;let Z=L.near,gt=L.far;T.texture!==null&&(T.depthNear>0&&(Z=T.depthNear),T.depthFar>0&&(gt=T.depthFar)),R.near=B.near=P.near=Z,R.far=B.far=P.far=gt,(H!==R.near||tt!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),H=R.near,tt=R.far),P.layers.mask=L.layers.mask|2,B.layers.mask=L.layers.mask|4,R.layers.mask=P.layers.mask|B.layers.mask;const ct=L.parent,bt=R.cameras;yt(R,ct);for(let Gt=0;Gt<bt.length;Gt++)yt(bt[Gt],ct);bt.length===2?K(R,P,B):R.projectionMatrix.copy(P.projectionMatrix),Mt(L,R,ct)};function Mt(L,Z,gt){gt===null?L.matrix.copy(Z.matrixWorld):(L.matrix.copy(gt.matrixWorld),L.matrix.invert(),L.matrix.multiply(Z.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(Z.projectionMatrix),L.projectionMatrixInverse.copy(Z.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=zl*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(_===null&&S===null))return p},this.setFoveation=function(L){p=L,_!==null&&(_.fixedFoveation=L),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=L)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(R)};let Ft=null;function Jt(L,Z){if(v=Z.getViewerPose(g||h),E=Z,v!==null){const gt=v.views;S!==null&&(e.setRenderTargetFramebuffer(N,S.framebuffer),e.setRenderTarget(N));let ct=!1;gt.length!==R.cameras.length&&(R.cameras.length=0,ct=!0);for(let Dt=0;Dt<gt.length;Dt++){const vt=gt[Dt];let xt=null;if(S!==null)xt=S.getViewport(vt);else{const G=m.getViewSubImage(_,vt);xt=G.viewport,Dt===0&&(e.setRenderTargetTextures(N,G.colorTexture,G.depthStencilTexture),e.setRenderTarget(N))}let $t=w[Dt];$t===void 0&&($t=new fi,$t.layers.enable(Dt),$t.viewport=new Ge,w[Dt]=$t),$t.matrix.fromArray(vt.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(vt.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(xt.x,xt.y,xt.width,xt.height),Dt===0&&(R.matrix.copy($t.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ct===!0&&R.cameras.push($t)}const bt=l.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&m){const Dt=m.getDepthInformation(gt[0]);Dt&&Dt.isValid&&Dt.texture&&T.init(e,Dt,l.renderState)}}for(let gt=0;gt<U.length;gt++){const ct=A[gt],bt=U[gt];ct!==null&&bt!==void 0&&bt.update(ct,Z,g||h)}Ft&&Ft(L,Z),Z.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Z}),E=null}const ye=new Dx;ye.setAnimationLoop(Jt),this.setAnimationLoop=function(L){Ft=L},this.dispose=function(){}}}const qs=new ta,_R=new Ve;function yR(o,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,xx(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,N,U,A){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(M,x):x.isMeshToonMaterial?(u(M,x),m(M,x)):x.isMeshPhongMaterial?(u(M,x),v(M,x)):x.isMeshStandardMaterial?(u(M,x),_(M,x),x.isMeshPhysicalMaterial&&S(M,x,A)):x.isMeshMatcapMaterial?(u(M,x),E(M,x)):x.isMeshDepthMaterial?u(M,x):x.isMeshDistanceMaterial?(u(M,x),T(M,x)):x.isMeshNormalMaterial?u(M,x):x.isLineBasicMaterial?(h(M,x),x.isLineDashedMaterial&&d(M,x)):x.isPointsMaterial?p(M,x,N,U):x.isSpriteMaterial?g(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Zn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Zn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const N=e.get(x),U=N.envMap,A=N.envMapRotation;U&&(M.envMap.value=U,qs.copy(A),qs.x*=-1,qs.y*=-1,qs.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(qs.y*=-1,qs.z*=-1),M.envMapRotation.value.setFromMatrix4(_R.makeRotationFromEuler(qs)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function h(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function d(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function p(M,x,N,U){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*N,M.scale.value=U*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function g(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function v(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function m(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function _(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function S(M,x,N){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Zn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=N.texture,M.transmissionSamplerSize.value.set(N.width,N.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,x){x.matcap&&(M.matcap.value=x.matcap)}function T(M,x){const N=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(N.matrixWorld),M.nearDistance.value=N.shadow.camera.near,M.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function xR(o,e,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(N,U){const A=U.program;s.uniformBlockBinding(N,A)}function g(N,U){let A=l[N.id];A===void 0&&(E(N),A=v(N),l[N.id]=A,N.addEventListener("dispose",M));const F=U.program;s.updateUBOMapping(N,F);const z=e.render.frame;u[N.id]!==z&&(_(N),u[N.id]=z)}function v(N){const U=m();N.__bindingPointIndex=U;const A=o.createBuffer(),F=N.__size,z=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,A),o.bufferData(o.UNIFORM_BUFFER,F,z),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,A),A}function m(){for(let N=0;N<d;N++)if(h.indexOf(N)===-1)return h.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(N){const U=l[N.id],A=N.uniforms,F=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let z=0,P=A.length;z<P;z++){const B=Array.isArray(A[z])?A[z]:[A[z]];for(let w=0,R=B.length;w<R;w++){const H=B[w];if(S(H,z,w,F)===!0){const tt=H.__offset,st=Array.isArray(H.value)?H.value:[H.value];let ut=0;for(let mt=0;mt<st.length;mt++){const k=st[mt],lt=T(k);typeof k=="number"||typeof k=="boolean"?(H.__data[0]=k,o.bufferSubData(o.UNIFORM_BUFFER,tt+ut,H.__data)):k.isMatrix3?(H.__data[0]=k.elements[0],H.__data[1]=k.elements[1],H.__data[2]=k.elements[2],H.__data[3]=0,H.__data[4]=k.elements[3],H.__data[5]=k.elements[4],H.__data[6]=k.elements[5],H.__data[7]=0,H.__data[8]=k.elements[6],H.__data[9]=k.elements[7],H.__data[10]=k.elements[8],H.__data[11]=0):(k.toArray(H.__data,ut),ut+=lt.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,tt,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(N,U,A,F){const z=N.value,P=U+"_"+A;if(F[P]===void 0)return typeof z=="number"||typeof z=="boolean"?F[P]=z:F[P]=z.clone(),!0;{const B=F[P];if(typeof z=="number"||typeof z=="boolean"){if(B!==z)return F[P]=z,!0}else if(B.equals(z)===!1)return B.copy(z),!0}return!1}function E(N){const U=N.uniforms;let A=0;const F=16;for(let P=0,B=U.length;P<B;P++){const w=Array.isArray(U[P])?U[P]:[U[P]];for(let R=0,H=w.length;R<H;R++){const tt=w[R],st=Array.isArray(tt.value)?tt.value:[tt.value];for(let ut=0,mt=st.length;ut<mt;ut++){const k=st[ut],lt=T(k),K=A%F,yt=K%lt.boundary,Mt=K+yt;A+=yt,Mt!==0&&F-Mt<lt.storage&&(A+=F-Mt),tt.__data=new Float32Array(lt.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=A,A+=lt.storage}}}const z=A%F;return z>0&&(A+=F-z),N.__size=A,N.__cache={},this}function T(N){const U={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(U.boundary=4,U.storage=4):N.isVector2?(U.boundary=8,U.storage=8):N.isVector3||N.isColor?(U.boundary=16,U.storage=12):N.isVector4?(U.boundary=16,U.storage=16):N.isMatrix3?(U.boundary=48,U.storage=48):N.isMatrix4?(U.boundary=64,U.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),U}function M(N){const U=N.target;U.removeEventListener("dispose",M);const A=h.indexOf(U.__bindingPointIndex);h.splice(A,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function x(){for(const N in l)o.deleteBuffer(l[N]);h=[],l={},u={}}return{bind:p,update:g,dispose:x}}class SR{constructor(e={}){const{canvas:i=BT(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:g=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=h;const E=new Uint32Array(4),T=new Int32Array(4);let M=null,x=null;const N=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ps,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let F=!1;this._outputColorSpace=Fn;let z=0,P=0,B=null,w=-1,R=null;const H=new Ge,tt=new Ge;let st=null;const ut=new ce(0);let mt=0,k=i.width,lt=i.height,K=1,yt=null,Mt=null;const Ft=new Ge(0,0,k,lt),Jt=new Ge(0,0,k,lt);let ye=!1;const L=new fm;let Z=!1,gt=!1;const ct=new Ve,bt=new Ve,Gt=new V,Dt=new Ge,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function $t(){return B===null?K:1}let G=s;function Je(D,Q){return i.getContext(D,Q)}try{const D={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:g,powerPreference:v,failIfMajorPerformanceCaveat:m};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${$p}`),i.addEventListener("webglcontextlost",_t,!1),i.addEventListener("webglcontextrestored",Pt,!1),i.addEventListener("webglcontextcreationerror",It,!1),G===null){const Q="webgl2";if(G=Je(Q,D),G===null)throw Je(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let ae,Zt,At,me,Ut,O,C,nt,it,St,ht,qt,Ct,Yt,Kt,Et,Bt,ne,se,Vt,xe,fe,Fe,q;function zt(){ae=new N2(G),ae.init(),fe=new dR(G,ae),Zt=new T2(G,ae,e,fe),At=new fR(G,ae),Zt.reverseDepthBuffer&&_&&At.buffers.depth.setReversed(!0),me=new O2(G),Ut=new JC,O=new hR(G,ae,At,Ut,Zt,fe,me),C=new A2(A),nt=new D2(A),it=new H1(G),Fe=new M2(G,it),St=new U2(G,it,me,Fe),ht=new z2(G,St,it,me),se=new P2(G,Zt,O),Et=new b2(Ut),qt=new QC(A,C,nt,ae,Zt,Fe,Et),Ct=new yR(A,Ut),Yt=new tR,Kt=new rR(ae),ne=new S2(A,C,nt,At,ht,S,p),Bt=new uR(A,ht,Zt),q=new xR(G,me,Zt,At),Vt=new E2(G,ae,me),xe=new L2(G,ae,me),me.programs=qt.programs,A.capabilities=Zt,A.extensions=ae,A.properties=Ut,A.renderLists=Yt,A.shadowMap=Bt,A.state=At,A.info=me}zt();const ft=new vR(A,G);this.xr=ft,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const D=ae.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=ae.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(D){D!==void 0&&(K=D,this.setSize(k,lt,!1))},this.getSize=function(D){return D.set(k,lt)},this.setSize=function(D,Q,rt=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=D,lt=Q,i.width=Math.floor(D*K),i.height=Math.floor(Q*K),rt===!0&&(i.style.width=D+"px",i.style.height=Q+"px"),this.setViewport(0,0,D,Q)},this.getDrawingBufferSize=function(D){return D.set(k*K,lt*K).floor()},this.setDrawingBufferSize=function(D,Q,rt){k=D,lt=Q,K=rt,i.width=Math.floor(D*rt),i.height=Math.floor(Q*rt),this.setViewport(0,0,D,Q)},this.getCurrentViewport=function(D){return D.copy(H)},this.getViewport=function(D){return D.copy(Ft)},this.setViewport=function(D,Q,rt,ot){D.isVector4?Ft.set(D.x,D.y,D.z,D.w):Ft.set(D,Q,rt,ot),At.viewport(H.copy(Ft).multiplyScalar(K).round())},this.getScissor=function(D){return D.copy(Jt)},this.setScissor=function(D,Q,rt,ot){D.isVector4?Jt.set(D.x,D.y,D.z,D.w):Jt.set(D,Q,rt,ot),At.scissor(tt.copy(Jt).multiplyScalar(K).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(D){At.setScissorTest(ye=D)},this.setOpaqueSort=function(D){yt=D},this.setTransparentSort=function(D){Mt=D},this.getClearColor=function(D){return D.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments)},this.clear=function(D=!0,Q=!0,rt=!0){let ot=0;if(D){let J=!1;if(B!==null){const Tt=B.texture.format;J=Tt===om||Tt===rm||Tt===sm}if(J){const Tt=B.texture.type,wt=Tt===$i||Tt===tr||Tt===Ul||Tt===Ll||Tt===nm||Tt===im,Rt=ne.getClearColor(),Lt=ne.getClearAlpha(),te=Rt.r,re=Rt.g,Qt=Rt.b;wt?(E[0]=te,E[1]=re,E[2]=Qt,E[3]=Lt,G.clearBufferuiv(G.COLOR,0,E)):(T[0]=te,T[1]=re,T[2]=Qt,T[3]=Lt,G.clearBufferiv(G.COLOR,0,T))}else ot|=G.COLOR_BUFFER_BIT}Q&&(ot|=G.DEPTH_BUFFER_BIT),rt&&(ot|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",_t,!1),i.removeEventListener("webglcontextrestored",Pt,!1),i.removeEventListener("webglcontextcreationerror",It,!1),ne.dispose(),Yt.dispose(),Kt.dispose(),Ut.dispose(),C.dispose(),nt.dispose(),ht.dispose(),Fe.dispose(),q.dispose(),qt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",Ln),ft.removeEventListener("sessionend",Gl),ea.stop()};function _t(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const D=me.autoReset,Q=Bt.enabled,rt=Bt.autoUpdate,ot=Bt.needsUpdate,J=Bt.type;zt(),me.autoReset=D,Bt.enabled=Q,Bt.autoUpdate=rt,Bt.needsUpdate=ot,Bt.type=J}function It(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function ue(D){const Q=D.target;Q.removeEventListener("dispose",ue),$e(Q)}function $e(D){vn(D),Ut.remove(D)}function vn(D){const Q=Ut.get(D).programs;Q!==void 0&&(Q.forEach(function(rt){qt.releaseProgram(rt)}),D.isShaderMaterial&&qt.releaseShaderCache(D))}this.renderBufferDirect=function(D,Q,rt,ot,J,Tt){Q===null&&(Q=vt);const wt=J.isMesh&&J.matrixWorld.determinant()<0,Rt=Kc(D,Q,rt,ot,J);At.setMaterial(ot,wt);let Lt=rt.index,te=1;if(ot.wireframe===!0){if(Lt=St.getWireframeAttribute(rt),Lt===void 0)return;te=2}const re=rt.drawRange,Qt=rt.attributes.position;let Re=re.start*te,De=(re.start+re.count)*te;Tt!==null&&(Re=Math.max(Re,Tt.start*te),De=Math.min(De,(Tt.start+Tt.count)*te)),Lt!==null?(Re=Math.max(Re,0),De=Math.min(De,Lt.count)):Qt!=null&&(Re=Math.max(Re,0),De=Math.min(De,Qt.count));const We=De-Re;if(We<0||We===1/0)return;Fe.setup(J,ot,Rt,rt,Lt);let Xe,Se=Vt;if(Lt!==null&&(Xe=it.get(Lt),Se=xe,Se.setIndex(Xe)),J.isMesh)ot.wireframe===!0?(At.setLineWidth(ot.wireframeLinewidth*$t()),Se.setMode(G.LINES)):Se.setMode(G.TRIANGLES);else if(J.isLine){let Wt=ot.linewidth;Wt===void 0&&(Wt=1),At.setLineWidth(Wt*$t()),J.isLineSegments?Se.setMode(G.LINES):J.isLineLoop?Se.setMode(G.LINE_LOOP):Se.setMode(G.LINE_STRIP)}else J.isPoints?Se.setMode(G.POINTS):J.isSprite&&Se.setMode(G.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Gc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Se.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))Se.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Wt=J._multiDrawStarts,tn=J._multiDrawCounts,Te=J._multiDrawCount,yn=Lt?it.get(Lt).bytesPerElement:1,Qe=Ut.get(ot).currentProgram.getUniforms();for(let On=0;On<Te;On++)Qe.setValue(G,"_gl_DrawID",On),Se.render(Wt[On]/yn,tn[On])}else if(J.isInstancedMesh)Se.renderInstances(Re,We,J.count);else if(rt.isInstancedBufferGeometry){const Wt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,tn=Math.min(rt.instanceCount,Wt);Se.renderInstances(Re,We,tn)}else Se.render(Re,We)};function Ce(D,Q,rt){D.transparent===!0&&D.side===Ki&&D.forceSinglePass===!1?(D.side=Zn,D.needsUpdate=!0,ia(D,Q,rt),D.side=ms,D.needsUpdate=!0,ia(D,Q,rt),D.side=Ki):ia(D,Q,rt)}this.compile=function(D,Q,rt=null){rt===null&&(rt=D),x=Kt.get(rt),x.init(Q),U.push(x),rt.traverseVisible(function(J){J.isLight&&J.layers.test(Q.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))}),D!==rt&&D.traverseVisible(function(J){J.isLight&&J.layers.test(Q.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))}),x.setupLights();const ot=new Set;return D.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Tt=J.material;if(Tt)if(Array.isArray(Tt))for(let wt=0;wt<Tt.length;wt++){const Rt=Tt[wt];Ce(Rt,rt,J),ot.add(Rt)}else Ce(Tt,rt,J),ot.add(Tt)}),x=U.pop(),ot},this.compileAsync=function(D,Q,rt=null){const ot=this.compile(D,Q,rt);return new Promise(J=>{function Tt(){if(ot.forEach(function(wt){Ut.get(wt).currentProgram.isReady()&&ot.delete(wt)}),ot.size===0){J(D);return}setTimeout(Tt,10)}ae.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Ke=null;function _n(D){Ke&&Ke(D)}function Ln(){ea.stop()}function Gl(){ea.start()}const ea=new Dx;ea.setAnimationLoop(_n),typeof self<"u"&&ea.setContext(self),this.setAnimationLoop=function(D){Ke=D,ft.setAnimationLoop(D),D===null?ea.stop():ea.start()},ft.addEventListener("sessionstart",Ln),ft.addEventListener("sessionend",Gl),this.render=function(D,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(Q),Q=ft.getCamera()),D.isScene===!0&&D.onBeforeRender(A,D,Q,B),x=Kt.get(D,U.length),x.init(Q),U.push(x),bt.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),L.setFromProjectionMatrix(bt),gt=this.localClippingEnabled,Z=Et.init(this.clippingPlanes,gt),M=Yt.get(D,N.length),M.init(),N.push(M),ft.enabled===!0&&ft.isPresenting===!0){const Tt=A.xr.getDepthSensingMesh();Tt!==null&&To(Tt,Q,-1/0,A.sortObjects)}To(D,Q,0,A.sortObjects),M.finish(),A.sortObjects===!0&&M.sort(yt,Mt),xt=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,xt&&ne.addToRenderList(M,D),this.info.render.frame++,Z===!0&&Et.beginShadows();const rt=x.state.shadowsArray;Bt.render(rt,D,Q),Z===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=M.opaque,J=M.transmissive;if(x.setupLights(),Q.isArrayCamera){const Tt=Q.cameras;if(J.length>0)for(let wt=0,Rt=Tt.length;wt<Rt;wt++){const Lt=Tt[wt];_s(ot,J,D,Lt)}xt&&ne.render(D);for(let wt=0,Rt=Tt.length;wt<Rt;wt++){const Lt=Tt[wt];vs(M,D,Lt,Lt.viewport)}}else J.length>0&&_s(ot,J,D,Q),xt&&ne.render(D),vs(M,D,Q);B!==null&&P===0&&(O.updateMultisampleRenderTarget(B),O.updateRenderTargetMipmap(B)),D.isScene===!0&&D.onAfterRender(A,D,Q),Fe.resetDefaultState(),w=-1,R=null,U.pop(),U.length>0?(x=U[U.length-1],Z===!0&&Et.setGlobalState(A.clippingPlanes,x.state.camera)):x=null,N.pop(),N.length>0?M=N[N.length-1]:M=null};function To(D,Q,rt,ot){if(D.visible===!1)return;if(D.layers.test(Q.layers)){if(D.isGroup)rt=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Q);else if(D.isLight)x.pushLight(D),D.castShadow&&x.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||L.intersectsSprite(D)){ot&&Dt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(bt);const wt=ht.update(D),Rt=D.material;Rt.visible&&M.push(D,wt,Rt,rt,Dt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||L.intersectsObject(D))){const wt=ht.update(D),Rt=D.material;if(ot&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Dt.copy(D.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Dt.copy(wt.boundingSphere.center)),Dt.applyMatrix4(D.matrixWorld).applyMatrix4(bt)),Array.isArray(Rt)){const Lt=wt.groups;for(let te=0,re=Lt.length;te<re;te++){const Qt=Lt[te],Re=Rt[Qt.materialIndex];Re&&Re.visible&&M.push(D,wt,Re,rt,Dt.z,Qt)}}else Rt.visible&&M.push(D,wt,Rt,rt,Dt.z,null)}}const Tt=D.children;for(let wt=0,Rt=Tt.length;wt<Rt;wt++)To(Tt[wt],Q,rt,ot)}function vs(D,Q,rt,ot){const J=D.opaque,Tt=D.transmissive,wt=D.transparent;x.setupLightsView(rt),Z===!0&&Et.setGlobalState(A.clippingPlanes,rt),ot&&At.viewport(H.copy(ot)),J.length>0&&na(J,Q,rt),Tt.length>0&&na(Tt,Q,rt),wt.length>0&&na(wt,Q,rt),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function _s(D,Q,rt,ot){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ot.id]===void 0&&(x.state.transmissionRenderTarget[ot.id]=new zi(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?Ra:$i,minFilter:Qs,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ne.workingColorSpace}));const Tt=x.state.transmissionRenderTarget[ot.id],wt=ot.viewport||H;Tt.setSize(wt.z*A.transmissionResolutionScale,wt.w*A.transmissionResolutionScale);const Rt=A.getRenderTarget();A.setRenderTarget(Tt),A.getClearColor(ut),mt=A.getClearAlpha(),mt<1&&A.setClearColor(16777215,.5),A.clear(),xt&&ne.render(rt);const Lt=A.toneMapping;A.toneMapping=ps;const te=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),x.setupLightsView(ot),Z===!0&&Et.setGlobalState(A.clippingPlanes,ot),na(D,rt,ot),O.updateMultisampleRenderTarget(Tt),O.updateRenderTargetMipmap(Tt),ae.has("WEBGL_multisampled_render_to_texture")===!1){let re=!1;for(let Qt=0,Re=Q.length;Qt<Re;Qt++){const De=Q[Qt],We=De.object,Xe=De.geometry,Se=De.material,Wt=De.group;if(Se.side===Ki&&We.layers.test(ot.layers)){const tn=Se.side;Se.side=Zn,Se.needsUpdate=!0,Ii(We,rt,ot,Xe,Se,Wt),Se.side=tn,Se.needsUpdate=!0,re=!0}}re===!0&&(O.updateMultisampleRenderTarget(Tt),O.updateRenderTargetMipmap(Tt))}A.setRenderTarget(Rt),A.setClearColor(ut,mt),te!==void 0&&(ot.viewport=te),A.toneMapping=Lt}function na(D,Q,rt){const ot=Q.isScene===!0?Q.overrideMaterial:null;for(let J=0,Tt=D.length;J<Tt;J++){const wt=D[J],Rt=wt.object,Lt=wt.geometry,te=wt.group;let re=wt.material;re.allowOverride===!0&&ot!==null&&(re=ot),Rt.layers.test(rt.layers)&&Ii(Rt,Q,rt,Lt,re,te)}}function Ii(D,Q,rt,ot,J,Tt){D.onBeforeRender(A,Q,rt,ot,J,Tt),D.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),J.onBeforeRender(A,Q,rt,ot,D,Tt),J.transparent===!0&&J.side===Ki&&J.forceSinglePass===!1?(J.side=Zn,J.needsUpdate=!0,A.renderBufferDirect(rt,Q,ot,J,D,Tt),J.side=ms,J.needsUpdate=!0,A.renderBufferDirect(rt,Q,ot,J,D,Tt),J.side=Ki):A.renderBufferDirect(rt,Q,ot,J,D,Tt),D.onAfterRender(A,Q,rt,ot,J,Tt)}function ia(D,Q,rt){Q.isScene!==!0&&(Q=vt);const ot=Ut.get(D),J=x.state.lights,Tt=x.state.shadowsArray,wt=J.state.version,Rt=qt.getParameters(D,J.state,Tt,Q,rt),Lt=qt.getProgramCacheKey(Rt);let te=ot.programs;ot.environment=D.isMeshStandardMaterial?Q.environment:null,ot.fog=Q.fog,ot.envMap=(D.isMeshStandardMaterial?nt:C).get(D.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&D.envMap===null?Q.environmentRotation:D.envMapRotation,te===void 0&&(D.addEventListener("dispose",ue),te=new Map,ot.programs=te);let re=te.get(Lt);if(re!==void 0){if(ot.currentProgram===re&&ot.lightsStateVersion===wt)return bo(D,Rt),re}else Rt.uniforms=qt.getUniforms(D),D.onBeforeCompile(Rt,A),re=qt.acquireProgram(Rt,Lt),te.set(Lt,re),ot.uniforms=Rt.uniforms;const Qt=ot.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Qt.clippingPlanes=Et.uniform),bo(D,Rt),ot.needsLights=Ao(D),ot.lightsStateVersion=wt,ot.needsLights&&(Qt.ambientLightColor.value=J.state.ambient,Qt.lightProbe.value=J.state.probe,Qt.directionalLights.value=J.state.directional,Qt.directionalLightShadows.value=J.state.directionalShadow,Qt.spotLights.value=J.state.spot,Qt.spotLightShadows.value=J.state.spotShadow,Qt.rectAreaLights.value=J.state.rectArea,Qt.ltc_1.value=J.state.rectAreaLTC1,Qt.ltc_2.value=J.state.rectAreaLTC2,Qt.pointLights.value=J.state.point,Qt.pointLightShadows.value=J.state.pointShadow,Qt.hemisphereLights.value=J.state.hemi,Qt.directionalShadowMap.value=J.state.directionalShadowMap,Qt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Qt.spotShadowMap.value=J.state.spotShadowMap,Qt.spotLightMatrix.value=J.state.spotLightMatrix,Qt.spotLightMap.value=J.state.spotLightMap,Qt.pointShadowMap.value=J.state.pointShadowMap,Qt.pointShadowMatrix.value=J.state.pointShadowMatrix),ot.currentProgram=re,ot.uniformsList=null,re}function Ua(D){if(D.uniformsList===null){const Q=D.currentProgram.getUniforms();D.uniformsList=Vc.seqWithValue(Q.seq,D.uniforms)}return D.uniformsList}function bo(D,Q){const rt=Ut.get(D);rt.outputColorSpace=Q.outputColorSpace,rt.batching=Q.batching,rt.batchingColor=Q.batchingColor,rt.instancing=Q.instancing,rt.instancingColor=Q.instancingColor,rt.instancingMorph=Q.instancingMorph,rt.skinning=Q.skinning,rt.morphTargets=Q.morphTargets,rt.morphNormals=Q.morphNormals,rt.morphColors=Q.morphColors,rt.morphTargetsCount=Q.morphTargetsCount,rt.numClippingPlanes=Q.numClippingPlanes,rt.numIntersection=Q.numClipIntersection,rt.vertexAlphas=Q.vertexAlphas,rt.vertexTangents=Q.vertexTangents,rt.toneMapping=Q.toneMapping}function Kc(D,Q,rt,ot,J){Q.isScene!==!0&&(Q=vt),O.resetTextureUnits();const Tt=Q.fog,wt=ot.isMeshStandardMaterial?Q.environment:null,Rt=B===null?A.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:mo,Lt=(ot.isMeshStandardMaterial?nt:C).get(ot.envMap||wt),te=ot.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,re=!!rt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Qt=!!rt.morphAttributes.position,Re=!!rt.morphAttributes.normal,De=!!rt.morphAttributes.color;let We=ps;ot.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(We=A.toneMapping);const Xe=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Se=Xe!==void 0?Xe.length:0,Wt=Ut.get(ot),tn=x.state.lights;if(Z===!0&&(gt===!0||D!==R)){const Tn=D===R&&ot.id===w;Et.setState(ot,D,Tn)}let Te=!1;ot.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==tn.state.version||Wt.outputColorSpace!==Rt||J.isBatchedMesh&&Wt.batching===!1||!J.isBatchedMesh&&Wt.batching===!0||J.isBatchedMesh&&Wt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Wt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Wt.instancing===!1||!J.isInstancedMesh&&Wt.instancing===!0||J.isSkinnedMesh&&Wt.skinning===!1||!J.isSkinnedMesh&&Wt.skinning===!0||J.isInstancedMesh&&Wt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Wt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Wt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Wt.instancingMorph===!1&&J.morphTexture!==null||Wt.envMap!==Lt||ot.fog===!0&&Wt.fog!==Tt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Et.numPlanes||Wt.numIntersection!==Et.numIntersection)||Wt.vertexAlphas!==te||Wt.vertexTangents!==re||Wt.morphTargets!==Qt||Wt.morphNormals!==Re||Wt.morphColors!==De||Wt.toneMapping!==We||Wt.morphTargetsCount!==Se)&&(Te=!0):(Te=!0,Wt.__version=ot.version);let yn=Wt.currentProgram;Te===!0&&(yn=ia(ot,Q,J));let Qe=!1,On=!1,La=!1;const ke=yn.getUniforms(),on=Wt.uniforms;if(At.useProgram(yn.program)&&(Qe=!0,On=!0,La=!0),ot.id!==w&&(w=ot.id,On=!0),Qe||R!==D){At.buffers.depth.getReversed()?(ct.copy(D.projectionMatrix),HT(ct),GT(ct),ke.setValue(G,"projectionMatrix",ct)):ke.setValue(G,"projectionMatrix",D.projectionMatrix),ke.setValue(G,"viewMatrix",D.matrixWorldInverse);const bn=ke.map.cameraPosition;bn!==void 0&&bn.setValue(G,Gt.setFromMatrixPosition(D.matrixWorld)),Zt.logarithmicDepthBuffer&&ke.setValue(G,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&ke.setValue(G,"isOrthographic",D.isOrthographicCamera===!0),R!==D&&(R=D,On=!0,La=!0)}if(J.isSkinnedMesh){ke.setOptional(G,J,"bindMatrix"),ke.setOptional(G,J,"bindMatrixInverse");const Tn=J.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),ke.setValue(G,"boneTexture",Tn.boneTexture,O))}J.isBatchedMesh&&(ke.setOptional(G,J,"batchingTexture"),ke.setValue(G,"batchingTexture",J._matricesTexture,O),ke.setOptional(G,J,"batchingIdTexture"),ke.setValue(G,"batchingIdTexture",J._indirectTexture,O),ke.setOptional(G,J,"batchingColorTexture"),J._colorsTexture!==null&&ke.setValue(G,"batchingColorTexture",J._colorsTexture,O));const dn=rt.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&se.update(J,rt,yn),(On||Wt.receiveShadow!==J.receiveShadow)&&(Wt.receiveShadow=J.receiveShadow,ke.setValue(G,"receiveShadow",J.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(on.envMap.value=Lt,on.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&Q.environment!==null&&(on.envMapIntensity.value=Q.environmentIntensity),On&&(ke.setValue(G,"toneMappingExposure",A.toneMappingExposure),Wt.needsLights&&Vl(on,La),Tt&&ot.fog===!0&&Ct.refreshFogUniforms(on,Tt),Ct.refreshMaterialUniforms(on,ot,K,lt,x.state.transmissionRenderTarget[D.id]),Vc.upload(G,Ua(Wt),on,O)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Vc.upload(G,Ua(Wt),on,O),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&ke.setValue(G,"center",J.center),ke.setValue(G,"modelViewMatrix",J.modelViewMatrix),ke.setValue(G,"normalMatrix",J.normalMatrix),ke.setValue(G,"modelMatrix",J.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const Tn=ot.uniformsGroups;for(let bn=0,ir=Tn.length;bn<ir;bn++){const aa=Tn[bn];q.update(aa,yn),q.bind(aa,yn)}}return yn}function Vl(D,Q){D.ambientLightColor.needsUpdate=Q,D.lightProbe.needsUpdate=Q,D.directionalLights.needsUpdate=Q,D.directionalLightShadows.needsUpdate=Q,D.pointLights.needsUpdate=Q,D.pointLightShadows.needsUpdate=Q,D.spotLights.needsUpdate=Q,D.spotLightShadows.needsUpdate=Q,D.rectAreaLights.needsUpdate=Q,D.hemisphereLights.needsUpdate=Q}function Ao(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(D,Q,rt){const ot=Ut.get(D);ot.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),Ut.get(D.texture).__webglTexture=Q,Ut.get(D.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:rt,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,Q){const rt=Ut.get(D);rt.__webglFramebuffer=Q,rt.__useDefaultFramebuffer=Q===void 0};const ys=G.createFramebuffer();this.setRenderTarget=function(D,Q=0,rt=0){B=D,z=Q,P=rt;let ot=!0,J=null,Tt=!1,wt=!1;if(D){const Lt=Ut.get(D);if(Lt.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(G.FRAMEBUFFER,null),ot=!1;else if(Lt.__webglFramebuffer===void 0)O.setupRenderTarget(D);else if(Lt.__hasExternalTextures)O.rebindTextures(D,Ut.get(D.texture).__webglTexture,Ut.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const Qt=D.depthTexture;if(Lt.__boundDepthTexture!==Qt){if(Qt!==null&&Ut.has(Qt)&&(D.width!==Qt.image.width||D.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(D)}}const te=D.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(wt=!0);const re=Ut.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(re[Q])?J=re[Q][rt]:J=re[Q],Tt=!0):D.samples>0&&O.useMultisampledRTT(D)===!1?J=Ut.get(D).__webglMultisampledFramebuffer:Array.isArray(re)?J=re[rt]:J=re,H.copy(D.viewport),tt.copy(D.scissor),st=D.scissorTest}else H.copy(Ft).multiplyScalar(K).floor(),tt.copy(Jt).multiplyScalar(K).floor(),st=ye;if(rt!==0&&(J=ys),At.bindFramebuffer(G.FRAMEBUFFER,J)&&ot&&At.drawBuffers(D,J),At.viewport(H),At.scissor(tt),At.setScissorTest(st),Tt){const Lt=Ut.get(D.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Lt.__webglTexture,rt)}else if(wt){const Lt=Ut.get(D.texture),te=Q;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Lt.__webglTexture,rt,te)}else if(D!==null&&rt!==0){const Lt=Ut.get(D.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Lt.__webglTexture,rt)}w=-1},this.readRenderTargetPixels=function(D,Q,rt,ot,J,Tt,wt){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=Ut.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&wt!==void 0&&(Rt=Rt[wt]),Rt){At.bindFramebuffer(G.FRAMEBUFFER,Rt);try{const Lt=D.texture,te=Lt.format,re=Lt.type;if(!Zt.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Zt.textureTypeReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=D.width-ot&&rt>=0&&rt<=D.height-J&&G.readPixels(Q,rt,ot,J,fe.convert(te),fe.convert(re),Tt)}finally{const Lt=B!==null?Ut.get(B).__webglFramebuffer:null;At.bindFramebuffer(G.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(D,Q,rt,ot,J,Tt,wt){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=Ut.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&wt!==void 0&&(Rt=Rt[wt]),Rt)if(Q>=0&&Q<=D.width-ot&&rt>=0&&rt<=D.height-J){At.bindFramebuffer(G.FRAMEBUFFER,Rt);const Lt=D.texture,te=Lt.format,re=Lt.type;if(!Zt.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Zt.textureTypeReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Qt),G.bufferData(G.PIXEL_PACK_BUFFER,Tt.byteLength,G.STREAM_READ),G.readPixels(Q,rt,ot,J,fe.convert(te),fe.convert(re),0);const Re=B!==null?Ut.get(B).__webglFramebuffer:null;At.bindFramebuffer(G.FRAMEBUFFER,Re);const De=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await FT(G,De,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Qt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Tt),G.deleteBuffer(Qt),G.deleteSync(De),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,Q=null,rt=0){const ot=Math.pow(2,-rt),J=Math.floor(D.image.width*ot),Tt=Math.floor(D.image.height*ot),wt=Q!==null?Q.x:0,Rt=Q!==null?Q.y:0;O.setTexture2D(D,0),G.copyTexSubImage2D(G.TEXTURE_2D,rt,0,0,wt,Rt,J,Tt),At.unbindTexture()};const Qc=G.createFramebuffer(),Xl=G.createFramebuffer();this.copyTextureToTexture=function(D,Q,rt=null,ot=null,J=0,Tt=null){Tt===null&&(J!==0?(Gc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=J,J=0):Tt=0);let wt,Rt,Lt,te,re,Qt,Re,De,We;const Xe=D.isCompressedTexture?D.mipmaps[Tt]:D.image;if(rt!==null)wt=rt.max.x-rt.min.x,Rt=rt.max.y-rt.min.y,Lt=rt.isBox3?rt.max.z-rt.min.z:1,te=rt.min.x,re=rt.min.y,Qt=rt.isBox3?rt.min.z:0;else{const dn=Math.pow(2,-J);wt=Math.floor(Xe.width*dn),Rt=Math.floor(Xe.height*dn),D.isDataArrayTexture?Lt=Xe.depth:D.isData3DTexture?Lt=Math.floor(Xe.depth*dn):Lt=1,te=0,re=0,Qt=0}ot!==null?(Re=ot.x,De=ot.y,We=ot.z):(Re=0,De=0,We=0);const Se=fe.convert(Q.format),Wt=fe.convert(Q.type);let tn;Q.isData3DTexture?(O.setTexture3D(Q,0),tn=G.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(O.setTexture2DArray(Q,0),tn=G.TEXTURE_2D_ARRAY):(O.setTexture2D(Q,0),tn=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Q.unpackAlignment);const Te=G.getParameter(G.UNPACK_ROW_LENGTH),yn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Qe=G.getParameter(G.UNPACK_SKIP_PIXELS),On=G.getParameter(G.UNPACK_SKIP_ROWS),La=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Xe.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Xe.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,te),G.pixelStorei(G.UNPACK_SKIP_ROWS,re),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Qt);const ke=D.isDataArrayTexture||D.isData3DTexture,on=Q.isDataArrayTexture||Q.isData3DTexture;if(D.isDepthTexture){const dn=Ut.get(D),Tn=Ut.get(Q),bn=Ut.get(dn.__renderTarget),ir=Ut.get(Tn.__renderTarget);At.bindFramebuffer(G.READ_FRAMEBUFFER,bn.__webglFramebuffer),At.bindFramebuffer(G.DRAW_FRAMEBUFFER,ir.__webglFramebuffer);for(let aa=0;aa<Lt;aa++)ke&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ut.get(D).__webglTexture,J,Qt+aa),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ut.get(Q).__webglTexture,Tt,We+aa)),G.blitFramebuffer(te,re,wt,Rt,Re,De,wt,Rt,G.DEPTH_BUFFER_BIT,G.NEAREST);At.bindFramebuffer(G.READ_FRAMEBUFFER,null),At.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(J!==0||D.isRenderTargetTexture||Ut.has(D)){const dn=Ut.get(D),Tn=Ut.get(Q);At.bindFramebuffer(G.READ_FRAMEBUFFER,Qc),At.bindFramebuffer(G.DRAW_FRAMEBUFFER,Xl);for(let bn=0;bn<Lt;bn++)ke?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,dn.__webglTexture,J,Qt+bn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,dn.__webglTexture,J),on?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Tn.__webglTexture,Tt,We+bn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Tn.__webglTexture,Tt),J!==0?G.blitFramebuffer(te,re,wt,Rt,Re,De,wt,Rt,G.COLOR_BUFFER_BIT,G.NEAREST):on?G.copyTexSubImage3D(tn,Tt,Re,De,We+bn,te,re,wt,Rt):G.copyTexSubImage2D(tn,Tt,Re,De,te,re,wt,Rt);At.bindFramebuffer(G.READ_FRAMEBUFFER,null),At.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else on?D.isDataTexture||D.isData3DTexture?G.texSubImage3D(tn,Tt,Re,De,We,wt,Rt,Lt,Se,Wt,Xe.data):Q.isCompressedArrayTexture?G.compressedTexSubImage3D(tn,Tt,Re,De,We,wt,Rt,Lt,Se,Xe.data):G.texSubImage3D(tn,Tt,Re,De,We,wt,Rt,Lt,Se,Wt,Xe):D.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Tt,Re,De,wt,Rt,Se,Wt,Xe.data):D.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Tt,Re,De,Xe.width,Xe.height,Se,Xe.data):G.texSubImage2D(G.TEXTURE_2D,Tt,Re,De,wt,Rt,Se,Wt,Xe);G.pixelStorei(G.UNPACK_ROW_LENGTH,Te),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,yn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Qe),G.pixelStorei(G.UNPACK_SKIP_ROWS,On),G.pixelStorei(G.UNPACK_SKIP_IMAGES,La),Tt===0&&Q.generateMipmaps&&G.generateMipmap(tn),At.unbindTexture()},this.copyTextureToTexture3D=function(D,Q,rt=null,ot=null,J=0){return Gc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,Q,rt,ot,J)},this.initRenderTarget=function(D){Ut.get(D).__webglFramebuffer===void 0&&O.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?O.setTextureCube(D,0):D.isData3DTexture?O.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?O.setTexture2DArray(D,0):O.setTexture2D(D,0),At.unbindTexture()},this.resetState=function(){z=0,P=0,B=null,At.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Aa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ne._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ne._getUnpackColorSpace()}}const Xc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Eo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const MR=new Rx(-1,1,1,-1,0,1);class ER extends Un{constructor(){super(),this.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ye([0,2,0,0,2,0],2))}}const TR=new ER;class xm{constructor(e){this._mesh=new ee(TR,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,MR)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class bR extends Eo{constructor(e,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,e instanceof jn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Il.clone(e.uniforms),this.material=new jn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new xm(this.material)}render(e,i,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ky extends Eo{constructor(e,i){super(),this.scene=e,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,i,s){const l=e.getContext(),u=e.state;u.buffers.color.setMask(!1),u.buffers.depth.setMask(!1),u.buffers.color.setLocked(!0),u.buffers.depth.setLocked(!0);let h,d;this.inverse?(h=0,d=1):(h=1,d=0),u.buffers.stencil.setTest(!0),u.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),u.buffers.stencil.setFunc(l.ALWAYS,h,4294967295),u.buffers.stencil.setClear(d),u.buffers.stencil.setLocked(!0),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),u.buffers.color.setLocked(!1),u.buffers.depth.setLocked(!1),u.buffers.color.setMask(!0),u.buffers.depth.setMask(!0),u.buffers.stencil.setLocked(!1),u.buffers.stencil.setFunc(l.EQUAL,1,4294967295),u.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),u.buffers.stencil.setLocked(!0)}}class AR extends Eo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class CR{constructor(e,i){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),i===void 0){const s=e.getSize(new Xt);this._width=s.width,this._height=s.height,i=new zi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ra}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new bR(Xc),this.copyPass.material.blending=Ca,this.clock=new wx}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,i){this.passes.splice(i,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const i=this.passes.indexOf(e);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(e){for(let i=e+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const i=this.renderer.getRenderTarget();let s=!1;for(let l=0,u=this.passes.length;l<u;l++){const h=this.passes[l];if(h.enabled!==!1){if(h.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),h.render(this.renderer,this.writeBuffer,this.readBuffer,e,s),h.needsSwap){if(s){const d=this.renderer.getContext(),p=this.renderer.state.buffers.stencil;p.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),p.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}ky!==void 0&&(h instanceof ky?s=!0:h instanceof AR&&(s=!1))}}this.renderer.setRenderTarget(i)}reset(e){if(e===void 0){const i=this.renderer.getSize(new Xt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,i){this._width=e,this._height=i;const s=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(s,l),this.renderTarget2.setSize(s,l);for(let u=0;u<this.passes.length;u++)this.passes[u].setSize(s,l)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class RR extends Eo{constructor(e,i,s=null,l=null,u=null){super(),this.scene=e,this.camera=i,this.overrideMaterial=s,this.clearColor=l,this.clearAlpha=u,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ce}render(e,i,s){const l=e.autoClear;e.autoClear=!1;let u,h;this.overrideMaterial!==null&&(h=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(u=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(u),this.overrideMaterial!==null&&(this.scene.overrideMaterial=h),e.autoClear=l}}const wR={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ce(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class vo extends Eo{constructor(e,i=1,s,l){super(),this.strength=i,this.radius=s,this.threshold=l,this.resolution=e!==void 0?new Xt(e.x,e.y):new Xt(256,256),this.clearColor=new ce(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let u=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);this.renderTargetBright=new zi(u,h,{type:Ra}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let v=0;v<this.nMips;v++){const m=new zi(u,h,{type:Ra});m.texture.name="UnrealBloomPass.h"+v,m.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(m);const _=new zi(u,h,{type:Ra});_.texture.name="UnrealBloomPass.v"+v,_.texture.generateMipmaps=!1,this.renderTargetsVertical.push(_),u=Math.round(u/2),h=Math.round(h/2)}const d=wR;this.highPassUniforms=Il.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new jn({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];const p=[3,5,7,9,11];u=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);for(let v=0;v<this.nMips;v++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(p[v])),this.separableBlurMaterials[v].uniforms.invSize.value=new Xt(1/u,1/h),u=Math.round(u/2),h=Math.round(h/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;const g=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=g,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Il.clone(Xc.uniforms),this.blendMaterial=new jn({uniforms:this.copyUniforms,vertexShader:Xc.vertexShader,fragmentShader:Xc.fragmentShader,blending:$s,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ce,this._oldClearAlpha=1,this._basic=new er,this._fsQuad=new xm(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,i){let s=Math.round(e/2),l=Math.round(i/2);this.renderTargetBright.setSize(s,l);for(let u=0;u<this.nMips;u++)this.renderTargetsHorizontal[u].setSize(s,l),this.renderTargetsVertical[u].setSize(s,l),this.separableBlurMaterials[u].uniforms.invSize.value=new Xt(1/s,1/l),s=Math.round(s/2),l=Math.round(l/2)}render(e,i,s,l,u){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const h=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),u&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=s.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let d=this.renderTargetBright;for(let p=0;p<this.nMips;p++)this._fsQuad.material=this.separableBlurMaterials[p],this.separableBlurMaterials[p].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[p].uniforms.direction.value=vo.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[p]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[p].uniforms.colorTexture.value=this.renderTargetsHorizontal[p].texture,this.separableBlurMaterials[p].uniforms.direction.value=vo.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[p]),e.clear(),this._fsQuad.render(e),d=this.renderTargetsVertical[p];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,u&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(s),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=h}_getSeparableBlurMaterial(e){const i=[];for(let s=0;s<e;s++)i.push(.39894*Math.exp(-.5*s*s/(e*e))/e);return new jn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Xt(.5,.5)},direction:{value:new Xt(.5,.5)},gaussianCoefficients:{value:i}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new jn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}vo.BlurDirectionX=new Xt(1,0);vo.BlurDirectionY=new Xt(0,1);const Pc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class DR extends Eo{constructor(){super(),this.uniforms=Il.clone(Pc.uniforms),this.material=new U1({name:Pc.name,uniforms:this.uniforms,vertexShader:Pc.vertexShader,fragmentShader:Pc.fragmentShader}),this._fsQuad=new xm(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,i,s){this.uniforms.tDiffuse.value=s.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ne.getTransfer(this._outputColorSpace)===Be&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Qy?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Jy?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===$y?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===tm?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ex?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===nx?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===tx&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class NR extends Ex{constructor(){super();const e=new Da;e.deleteAttribute("uv");const i=new Js({side:Zn}),s=new Js,l=new jp(16777215,900,28,2);l.position.set(.418,16.199,.3),this.add(l);const u=new ee(e,i);u.position.set(-.757,13.219,.717),u.scale.set(31.713,28.305,28.591),this.add(u);const h=new d1(e,s,6),d=new Gn;d.position.set(-10.906,2.009,1.846),d.rotation.set(0,-.195,0),d.scale.set(2.328,7.905,4.651),d.updateMatrix(),h.setMatrixAt(0,d.matrix),d.position.set(-5.607,-.754,-.758),d.rotation.set(0,.994,0),d.scale.set(1.97,1.534,3.955),d.updateMatrix(),h.setMatrixAt(1,d.matrix),d.position.set(6.167,.857,7.803),d.rotation.set(0,.561,0),d.scale.set(3.927,6.285,3.687),d.updateMatrix(),h.setMatrixAt(2,d.matrix),d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),d.updateMatrix(),h.setMatrixAt(3,d.matrix),d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),d.updateMatrix(),h.setMatrixAt(4,d.matrix),d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),d.updateMatrix(),h.setMatrixAt(5,d.matrix),this.add(h);const p=new ee(e,so(50));p.position.set(-16.116,14.37,8.208),p.scale.set(.1,2.428,2.739),this.add(p);const g=new ee(e,so(50));g.position.set(-16.109,18.021,-8.207),g.scale.set(.1,2.425,2.751),this.add(g);const v=new ee(e,so(17));v.position.set(14.904,12.198,-1.832),v.scale.set(.15,4.265,6.331),this.add(v);const m=new ee(e,so(43));m.position.set(-.462,8.89,14.52),m.scale.set(4.38,5.441,.088),this.add(m);const _=new ee(e,so(20));_.position.set(3.235,11.486,-12.541),_.scale.set(2.5,2,.1),this.add(_);const S=new ee(e,so(100));S.position.set(0,20,0),S.scale.set(1,.1,1),this.add(S)}dispose(){const e=new Set;this.traverse(i=>{i.isMesh&&(e.add(i.geometry),e.add(i.material))});for(const i of e)i.dispose()}}function so(o){const e=new er;return e.color.setScalar(o),e}function Px(){const e=document.createElement("canvas");e.width=64,e.height=64;const i=e.getContext("2d"),s=64/2,l=i.createRadialGradient(s,s,0,s,s,s);l.addColorStop(0,"rgba(255, 255, 255, 1)"),l.addColorStop(.25,"rgba(255, 255, 255, 0.85)"),l.addColorStop(.55,"rgba(255, 255, 255, 0.28)"),l.addColorStop(1,"rgba(255, 255, 255, 0)"),i.fillStyle=l,i.fillRect(0,0,64,64);const u=new jc(e);return u.colorSpace=Fn,u}function UR(o,e,i){const l=document.createElement("canvas");l.width=1024,l.height=1024;const u=l.getContext("2d"),h=1024/2,d=1024/2,p=u.createRadialGradient(h,d,20,h,d,1024*.49);p.addColorStop(0,i),p.addColorStop(.18,o),p.addColorStop(.55,e),p.addColorStop(1,"#1a0406"),u.fillStyle=p,u.fillRect(0,0,1024,1024),[110,155,210,275,345,410,465].forEach((E,T)=>{u.beginPath(),u.arc(h,d,E,0,Math.PI*2),u.strokeStyle=T%2===0?i:o,u.lineWidth=T%2===0?4:2.5,u.globalAlpha=.85,u.stroke()}),u.save(),u.translate(h,d),u.fillStyle=i,u.globalAlpha=.95,u.beginPath();const v=12;for(let E=0;E<v*2;E++){const T=E%2===0?115:44,M=E/(v*2)*Math.PI*2,x=Math.cos(M)*T,N=Math.sin(M)*T;E===0?u.moveTo(x,N):u.lineTo(x,N)}u.closePath(),u.fill(),u.strokeStyle=o,u.lineWidth=2.5,u.globalAlpha=.78;const m=48;u.beginPath();for(let E=0;E<=m;E++){const T=E/m*Math.PI*2,M=E%2===0?235:258,x=Math.cos(T)*M,N=Math.sin(T)*M;E===0?u.moveTo(x,N):u.lineTo(x,N)}u.stroke();const _=8;for(let E=0;E<_;E++){const T=E/_*Math.PI*2;u.save(),u.rotate(T),u.strokeStyle=i,u.lineWidth=3,u.globalAlpha=.88,u.beginPath(),u.moveTo(300,-18),u.quadraticCurveTo(325,-4,355,-24),u.moveTo(312,0),u.quadraticCurveTo(335,16,365,-4),u.stroke(),u.restore()}u.fillStyle=i,u.globalAlpha=.85;for(let E=0;E<60;E++){const T=E/60*Math.PI*2;u.beginPath(),u.arc(Math.cos(T)*438,Math.sin(T)*438,4.5,0,Math.PI*2),u.fill()}u.restore();const S=new jc(l);return S.colorSpace=Fn,S.anisotropy=4,S}function LR(o,e){const l=document.createElement("canvas");l.width=256,l.height=512;const u=l.getContext("2d");u.fillStyle="#070b18",u.fillRect(0,0,256,512);const h=8,d=24,p=8,g=6,v=(256-p*2)/h,m=(512-g*2)/d;for(let S=0;S<d;S++)for(let E=0;E<h;E++){const T=Math.sin(S*12.9898+E*78.233)*43758.5453,M=T-Math.floor(T);M>.28&&(u.fillStyle=M>.82?e:o,u.globalAlpha=.35+M*.55,u.fillRect(p+E*v+3,g+S*m+3,v-6,m-6))}u.globalAlpha=1;const _=new jc(l);return _.colorSpace=Fn,_.wrapS=Nl,_.wrapT=Nl,_}function OR(o,e){const s=document.createElement("canvas");s.width=1024,s.height=1024;const l=s.getContext("2d"),u=1024/2;l.clearRect(0,0,1024,1024);const h=64;l.strokeStyle=e,l.lineWidth=1.5;for(let g=0;g<=1024;g+=h)l.beginPath(),l.moveTo(g,0),l.lineTo(g,1024),l.stroke();for(let g=0;g<=1024;g+=h)l.beginPath(),l.moveTo(0,g),l.lineTo(1024,g),l.stroke();l.strokeStyle=o,l.lineWidth=2,[140,250,360].forEach(g=>{l.beginPath(),l.arc(u,u,g,0,Math.PI*2),l.stroke()}),l.globalCompositeOperation="destination-in";const d=l.createRadialGradient(u,u,40,u,u,u);d.addColorStop(0,"rgba(255, 255, 255, 0.85)"),d.addColorStop(.55,"rgba(255, 255, 255, 0.35)"),d.addColorStop(1,"rgba(255, 255, 255, 0)"),l.fillStyle=d,l.fillRect(0,0,1024,1024);const p=new jc(s);return p.colorSpace=Fn,p}function PR(o,e,i){const s=new ba,l=new ce(e.primary),u=new ce(e.secondary),h=new ce(e.accent),d=new Js({color:l,emissive:l,emissiveIntensity:.65,metalness:.85,roughness:.18,wireframe:!0}),p=new Js({color:l,emissive:u,emissiveIntensity:.3,metalness:.94,roughness:.14}),g=new er({color:h,transparent:!0,opacity:.85});if(o==="dong-son"){const v=UR(e.primary,e.secondary,e.accent);i.push(v);const m=new ee(new Bn(2.65,.085,24,128),p),_=new ee(new Bn(2.48,.032,16,128),g),S=new ee(new Bn(2.02,.045,20,112),p),E=new ee(new Bn(1.38,.035,18,96),g),T=new Js({map:v,bumpMap:v,bumpScale:.045,emissiveMap:v,emissive:l,emissiveIntensity:.22,metalness:.82,roughness:.28,transparent:!0,opacity:.86}),M=new ee(new co(2.38,2.38,.09,72),T);M.rotation.x=Math.PI/2;const x=new ba;for(let A=0;A<12;A++){const F=A/12*Math.PI*2,z=new ee(new dm(.11,.52,8),p);z.position.set(Math.cos(F)*1.7,Math.sin(F)*1.7,.08),z.rotation.z=F-Math.PI/2,x.add(z);const P=new ee(new Dl(.045,12,12),g);P.position.set(Math.cos(F)*2.24,Math.sin(F)*2.24,.08),x.add(P)}const N=new ee(new Bn(3.08,.022,16,128),g);N.rotation.x=Math.PI/3;const U=new ee(new Bn(3.32,.016,16,128),p);U.rotation.x=-Math.PI/3.4,U.rotation.y=Math.PI/5,s.add(m,_,S,E,M,x,N,U),s.userData={raysGroup:x,orbitRing1:N,orbitRing2:U,outerRim:m}}else if(o==="holo-globe"){const v=new ee(new Dl(1.62,32,24),d),m=new ee(new Dl(1.12,48,48),new my({color:u,emissive:l,emissiveIntensity:.45,metalness:.15,roughness:.12,clearcoat:1,transparent:!0,opacity:.45})),_=new Un,S=360,E=new Float32Array(S*3),T=Math.PI*(3-Math.sqrt(5));for(let B=0;B<S;B++){const w=1-B/(S-1)*2,R=Math.sqrt(1-w*w),H=T*B,tt=1.66;E[B*3]=Math.cos(H)*R*tt,E[B*3+1]=w*tt,E[B*3+2]=Math.sin(H)*R*tt}_.setAttribute("position",new pi(E,3));const M=Px();i.push(M);const x=new Tx(_,new hm({color:h,map:M,size:.11,transparent:!0,opacity:.95,blending:$s,depthWrite:!1})),N=new ba;[[new V(1.2,.8,.7),new V(-1.1,.6,1)],[new V(-.8,-.9,1.1),new V(1.1,-.4,-1.1)],[new V(.2,1.4,-.7),new V(-1.3,-.6,-.7)]].forEach(([B,w])=>{const R=B.clone().add(w).multiplyScalar(.5).normalize().multiplyScalar(2.25),H=new gm(B,R,w),tt=new ee(new _m(H,32,.018,8,!1),g);N.add(tt)});const A=new ee(new Bn(2.18,.024,18,128),g);A.rotation.x=Math.PI/2.4;const F=new ee(new Bn(2.44,.018,18,128),p);F.rotation.y=Math.PI/3,F.rotation.x=-Math.PI/5;const z=new ee(new hs(.09,0),g);z.position.set(2.18,0,0),A.add(z);const P=new ee(new hs(.08,0),g);P.position.set(-2.44,0,0),F.add(P),s.add(v,m,x,N,A,F),s.userData={globe:v,globeDots:x,arcsGroup:N,eqRing1:A,eqRing2:F}}else if(o==="smart-city"){const v=new ba,m=LR(e.primary,e.accent);i.push(m);const _=new ee(new co(2.55,2.85,.16,64),p);_.position.y=-1.1;const S=new ee(new Bn(2.68,.03,16,112),g);S.rotation.x=Math.PI/2,S.position.y=-1.03,v.add(_,S);const E=new Js({color:l,map:m,emissiveMap:m,emissive:l,emissiveIntensity:.72,metalness:.78,roughness:.22});[{x:0,z:0,w:.62,h:2.35,spire:!0},{x:-.88,z:.32,w:.44,h:1.72,spire:!0},{x:.88,z:-.28,w:.46,h:1.9,spire:!0},{x:-.5,z:-.84,w:.4,h:1.45},{x:.58,z:.78,w:.42,h:1.58},{x:-1.42,z:-.35,w:.34,h:1.15},{x:1.4,z:.38,w:.36,h:1.25},{x:.12,z:1.25,w:.35,h:1.05},{x:-.15,z:-1.35,w:.34,h:1.18},{x:-1.08,z:1.05,w:.3,h:.92},{x:1.1,z:-1.02,w:.3,h:.98}].forEach(N=>{const U=new ee(new Da(N.w,N.h,N.w),E);U.position.set(N.x,-1.02+N.h/2,N.z);const A=new ee(new Da(N.w*.72,N.h*.16,N.w*.72),p);A.position.set(N.x,-1.02+N.h+N.h*.16/2,N.z);const F=new ee(new Da(N.w+.025,N.h+.025,N.w+.025),d);if(F.position.copy(U.position),v.add(U,A,F),N.spire){const z=new ee(new co(.012,.03,.45,8),g);z.position.set(N.x,-1.02+N.h*1.16+.22,N.z),v.add(z)}});const M=new ee(new Bn(2.92,.028,16,128),g);M.rotation.x=Math.PI/2,M.position.y=-.88;const x=new ee(new Bn(2.45,.016,12,112),g);x.rotation.x=Math.PI/2.2,x.position.y=.65,v.add(M,x),s.add(v),s.userData={cityGroup:v,haloRing:M,skyOrbitRing:x}}else{const v=new my({color:l,emissive:u,emissiveIntensity:.45,metalness:.35,roughness:.08,clearcoat:1,clearcoatRoughness:.08,iridescence:.85,flatShading:!0}),m=new ee(new hs(1.55,1),v),_=new ee(new hs(.88,0),g),S=new ee(new hs(1.92,0),d),E=new ba;for(let N=0;N<8;N++){const U=N/8*Math.PI*2,A=new ee(new hs(.16,0),v);A.position.set(Math.cos(U)*2.35,Math.sin(U*2)*.45,Math.sin(U)*2.35),A.scale.set(.7,1.5,.7),E.add(A)}const T=new ee(new Bn(2.58,.028,18,112),g),M=new ee(new Bn(2.8,.024,18,112),p);M.rotation.x=Math.PI/2;const x=new ee(new Bn(3.02,.02,18,112),g);x.rotation.y=Math.PI/2,s.add(m,_,S,E,T,M,x),s.userData={crystal:m,innerHeart:_,cage:S,shardsGroup:E,r1:T,r2:M,r3:x}}return s}function zR({patternId:o,phase:e,progress:i,coreY:s=0,coreScale:l=1,hideCenterpiece:u=!1}){const h=hi.useRef(null),d=hi.useRef({phase:e,progress:i,coreY:s,coreScale:l,hideCenterpiece:u});return hi.useEffect(()=>{d.current={phase:e,progress:i,coreY:s,coreScale:l,hideCenterpiece:u}},[e,i,s,l,u]),hi.useEffect(()=>{const p=h.current;if(!p)return;const g=Jp(o),{colors:v}=g,m=[],_=new Ex;_.fog=new cm(v.bgBottom,.04);const S=p.clientWidth||window.innerWidth,E=p.clientHeight||window.innerHeight,T=new fi(55,S/E,.1,120);T.position.set(0,1.4,9.2);const M=new SR({antialias:!0,alpha:!0,powerPreference:"high-performance"});M.setSize(S,E),M.setPixelRatio(Math.min(window.devicePixelRatio,2)),M.toneMapping=tm,M.toneMappingExposure=.96,p.appendChild(M.domElement);const x=new Zp(M),N=new NR,U=x.fromScene(N,.04);_.environment=U.texture,_.environmentIntensity=.52,N.dispose();const A=new CR(M);A.addPass(new RR(_,T));const F=v.bloomStrength*.72,z=new vo(new Xt(S,E),F,.52,.42);A.addPass(z),A.addPass(new DR);const P=new I1(16777215,.55),B=new jp(v.primary,48,32);B.position.set(3.5,5.5,6);const w=new jp(v.accent,34,32);w.position.set(-4.5,-2,4.5),_.add(P,B,w);const R=OR(v.primary,v.grid);m.push(R);const H=new ee(new Hl(34,34),new er({map:R,transparent:!0,opacity:.65,blending:$s,depthWrite:!1}));H.rotation.x=-Math.PI/2,H.position.y=-3.4,_.add(H);const tt=PR(o,v,m);_.add(tt);const st=new er({color:v.accent,transparent:!0,opacity:0,side:Ki,blending:$s,depthWrite:!1}),ut=new ee(new vm(.85,1.05,96),st);ut.position.set(0,.45,.2),_.add(ut);const mt=Px();m.push(mt);const k=1600,lt=new Un,K=new Float32Array(k*3),yt=new Float32Array(k*3);for(let vt=0;vt<k;vt++){const xt=3.4+Math.random()*12,$t=Math.random()*Math.PI*2,G=(Math.random()-.5)*10,Je=Math.cos($t)*xt,ae=Math.sin($t)*xt-2;K[vt*3]=Je,K[vt*3+1]=G,K[vt*3+2]=ae,yt[vt*3]=Je,yt[vt*3+1]=G,yt[vt*3+2]=ae}lt.setAttribute("position",new pi(K,3));const Mt=new hm({color:v.particle,map:mt,size:.16,transparent:!0,opacity:.88,alphaTest:.01,blending:$s,depthWrite:!1}),Ft=new Tx(lt,Mt);_.add(Ft);const Jt={x:0,y:0},ye=vt=>{Jt.x=(vt.clientX/window.innerWidth-.5)*.6,Jt.y=(vt.clientY/window.innerHeight-.5)*.4};window.addEventListener("pointermove",ye);const L=()=>{const vt=p.clientWidth||window.innerWidth,xt=p.clientHeight||window.innerHeight;T.aspect=vt/xt,T.updateProjectionMatrix(),M.setSize(vt,xt),A.setSize(vt,xt)};window.addEventListener("resize",L);const Z=new wx;let gt=0,ct=d.current.phase,bt=0,Gt=0;const Dt=()=>{Gt=requestAnimationFrame(Dt);const vt=Math.min(Z.getDelta(),.05);gt+=vt;const xt=gt,{phase:$t,progress:G,coreY:Je,coreScale:ae,hideCenterpiece:Zt}=d.current;if(ct!=="celebration"&&$t==="celebration"&&(bt=1,ut.scale.setScalar(.5)),ct=$t,bt>0){bt=Math.max(0,bt-vt*1.15);const Ct=1+(1-bt)*11;ut.scale.setScalar(Ct),st.opacity=bt*.55}else st.opacity=0;const At=$t==="charging",me=$t==="celebration",Ut=At?1+G/100*3.2:me?.65:1,O=me||Zt?.001:ae,C=kr.damp(tt.scale.x,O,6.5,vt);tt.scale.setScalar(C);const nt=o==="holo-globe"?.72:.45;tt.position.y=kr.damp(tt.position.y,nt-Je*.008,7.5,vt);const it=tt.userData;o==="dong-son"?(it.raysGroup&&(it.raysGroup.rotation.z=xt*.24*Ut),it.orbitRing1&&(it.orbitRing1.rotation.y=xt*.45*Ut,it.orbitRing1.rotation.x=Math.PI/3+Math.sin(xt*.5)*.14),it.orbitRing2&&(it.orbitRing2.rotation.z=-xt*.35*Ut),tt.rotation.y=Math.sin(xt*.35)*.18):o==="holo-globe"?(it.globe&&(it.globe.rotation.y=xt*.28*Ut),it.globeDots&&(it.globeDots.rotation.y=xt*.28*Ut),it.arcsGroup&&(it.arcsGroup.rotation.y=xt*.28*Ut),it.eqRing1&&(it.eqRing1.rotation.z=xt*.45*Ut),it.eqRing2&&(it.eqRing2.rotation.z=-xt*.38*Ut)):o==="smart-city"?(it.cityGroup&&(it.cityGroup.rotation.y=xt*.2*Ut),it.skyOrbitRing&&(it.skyOrbitRing.rotation.z=xt*.65*Ut)):(it.crystal&&(it.crystal.rotation.y=xt*.42*Ut,it.crystal.rotation.x=Math.sin(xt*.6)*.2),it.innerHeart&&(it.innerHeart.rotation.y=-xt*.65*Ut),it.cage&&(it.cage.rotation.y=-xt*.28*Ut),it.shardsGroup&&(it.shardsGroup.rotation.y=xt*.36*Ut),it.r1&&(it.r1.rotation.x=xt*.65*Ut),it.r2&&(it.r2.rotation.y=xt*.55*Ut),it.r3&&(it.r3.rotation.z=-xt*.48*Ut));const St=At?9.2-G/100*1.8:me?11.2:9.2;T.position.z=kr.damp(T.position.z,St,4,vt),T.position.x=kr.damp(T.position.x,Jt.x,3.5,vt),T.position.y=kr.damp(T.position.y,1.2-Jt.y,3.5,vt),T.lookAt(0,0,0),Ft.rotation.y=xt*(At?.28:.045),Mt.opacity=At?.82-G/100*.28:.82;const ht=lt.attributes.position;for(let Ct=0;Ct<k;Ct++){const Yt=yt[Ct*3],Kt=yt[Ct*3+1],Et=yt[Ct*3+2];if(At){const Bt=1-G/100*.38;ht.setXYZ(Ct,Yt*Bt,Kt*Bt+Math.sin(xt*2+Ct)*.08,Et*Bt)}else ht.setXYZ(Ct,Yt,Kt+Math.sin(xt+Ct*.2)*.25,Et)}ht.needsUpdate=!0;const qt=At?Math.min(1.02,F+G/100*.24):F;z.strength=kr.damp(z.strength,qt,5,vt),A.render()};return Dt(),()=>{cancelAnimationFrame(Gt),window.removeEventListener("pointermove",ye),window.removeEventListener("resize",L),_.traverse(vt=>{vt.geometry&&vt.geometry.dispose(),vt.material&&(Array.isArray(vt.material)?vt.material.forEach(xt=>xt.dispose()):vt.material.dispose())}),m.forEach(vt=>vt.dispose()),U.dispose(),x.dispose(),A.dispose(),M.dispose(),M.domElement.parentNode===p&&p.removeChild(M.domElement)}},[o]),oe.jsx("div",{ref:h,className:"absolute inset-0 z-10 pointer-events-none","aria-hidden":"true"})}function IR({handCount:o,podY:e,podSize:i,podGap:s,activeHands:l,primaryColor:u,glowColor:h,customHandImageUrl:d,showPodLabels:p=!0,podLabels:g=[],isCharging:v=!1,visible:m,onActivateHand:_,onDeactivateHand:S}){if(!m)return null;const E=o>8?.78:o>6?.88:1,T=Math.round(i*E),M=Math.round(s*E),x=h||u;return oe.jsx("div",{className:"absolute inset-x-0 bottom-10 z-30 flex items-center justify-center flex-wrap px-6 transition-all duration-500",style:{transform:`translateY(${e}px)`,gap:`${M}px`},children:Array.from({length:o},(N,U)=>{var P;const A=U+1,F=v||l.has(A),z=((P=g[U])==null?void 0:P.trim())||`${A}`;return oe.jsxs("div",{className:"flex flex-col items-center gap-2",children:[oe.jsxs("button",{type:"button",onMouseDown:()=>_==null?void 0:_(A),onMouseUp:()=>S==null?void 0:S(A),onMouseLeave:()=>S==null?void 0:S(A),onTouchStart:B=>{B.preventDefault(),_==null||_(A)},onTouchEnd:B=>{B.preventDefault(),S==null||S(A)},onTouchCancel:()=>S==null?void 0:S(A),style:{width:`${T}px`,height:`${T}px`,borderColor:F?"#ffffff":x,boxShadow:F?`0 0 46px ${x}, 0 0 90px ${x}99, inset 0 0 32px ${x}`:`0 0 22px ${x}55, inset 0 0 14px ${x}33`,transitionTimingFunction:"cubic-bezier(0.22, 1, 0.36, 1)"},className:`relative rounded-full border-2 flex flex-col items-center justify-center backdrop-blur-md transition-all duration-300 cursor-pointer select-none ${F?"scale-110 bg-white/20 animate-pulse-glow":"bg-black/45 hover:scale-105"}`,"aria-label":`Bục chạm ${A}`,children:[F&&oe.jsx("span",{className:"absolute -inset-2 rounded-full border opacity-60 animate-ping pointer-events-none",style:{borderColor:x,animationDuration:"1.6s"}}),oe.jsx("span",{className:"absolute inset-1.5 rounded-full border border-dashed opacity-80 animate-spin pointer-events-none",style:{borderColor:F?"#ffffff":x,animationDuration:F?"4.5s":"14s"}}),oe.jsx("span",{className:"absolute inset-3 rounded-full border border-dotted opacity-55 animate-spin-reverse pointer-events-none",style:{borderColor:F?"#ffffff":x,animationDuration:F?"7s":"20s"}}),oe.jsx("span",{className:"absolute inset-4 rounded-full pointer-events-none opacity-35",style:{background:`radial-gradient(circle, ${x}44 0%, transparent 72%)`}}),d?oe.jsx("img",{src:d,alt:`Bàn tay ${A}`,style:{width:Math.round(T*.56),height:Math.round(T*.56),filter:F?`drop-shadow(0 0 14px ${x}) brightness(1.35)`:`drop-shadow(0 0 6px ${x}88)`},className:"object-contain transition-all duration-300 pointer-events-none"}):oe.jsx(GE,{style:{width:Math.round(T*.44),height:Math.round(T*.44),color:F?"#ffffff":x,filter:F?`drop-shadow(0 0 12px ${x})`:"none"},className:"transition-all duration-200"})]}),p&&oe.jsx("span",{className:"px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-black/55 border backdrop-blur-sm",style:{borderColor:`${x}55`,color:F?"#ffffff":x},children:z})]},A)})})}const qy=[PE,IE,FE];function BR({config:o,pattern:e,visible:i}){var v;if(!i)return null;const s=o.celebrationTheme||"match-pattern",l=s==="tech-cyan"||s==="match-pattern"&&e.id==="holo-globe",u=l?"#38bdf8":s==="royal-gold"?"#f5c542":e.colors.primary,h=l?"#a5f3fc":s==="royal-gold"?"#fde047":e.colors.accent,d=l?"#0369a1":s==="royal-gold"?"#b91c1c":e.colors.secondary,p=o.logoSize||112,g=Array.isArray(o.celebrationPillars)&&o.celebrationPillars.length>0?o.celebrationPillars:[{title:"CHÍNH QUYỀN SỐ",desc:"Minh bạch & Kiến tạo"},{title:"KINH TẾ SỐ",desc:"Đột phá & Bền vững"},{title:"XÃ HỘI SỐ",desc:"Phục vụ Nhân dân"}];return oe.jsxs("div",{className:"absolute inset-0 z-40 flex flex-col items-center justify-center px-8 text-center",children:[oe.jsx("div",{className:"mb-6 animate-float-slow",children:o.customLogoData?oe.jsx("img",{src:o.customLogoData,alt:"Logo đơn vị",style:{height:`${p}px`},className:"w-auto object-contain drop-shadow-[0_10px_30px_rgba(245,197,66,0.45)]"}):oe.jsx("div",{style:{width:`${Math.round(p*.85)}px`,height:`${Math.round(p*.85)}px`,borderColor:u,backgroundColor:`${d}55`,boxShadow:`0 0 40px ${u}66`},className:"rounded-full border-2 flex items-center justify-center backdrop-blur-md shadow-2xl",children:oe.jsx(LE,{style:{width:`${Math.round(p*.44)}px`,height:`${Math.round(p*.44)}px`,color:h}})})}),((v=o.celebrationRibbon)==null?void 0:v.trim())&&oe.jsx("div",{className:"px-7 py-2 rounded-full border text-sm md:text-base font-bold tracking-[0.22em] uppercase mb-5 backdrop-blur-md",style:{borderColor:`${u}aa`,background:`linear-gradient(90deg, ${d}aa, ${u}33, ${d}aa)`,color:h},children:o.celebrationRibbon}),oe.jsx("h1",{className:`text-4xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase max-w-5xl leading-tight mb-4 ${l?"cyan-3d-text":"gold-3d-text"}`,children:o.celebrationTitle}),oe.jsx("div",{className:"w-48 h-0.5 rounded-full my-3 opacity-80",style:{background:`linear-gradient(90deg, transparent, ${u}, transparent)`}}),oe.jsx("p",{className:"text-lg md:text-2xl font-semibold tracking-[0.14em] uppercase text-white/95 max-w-4xl mb-10 drop-shadow",children:o.celebrationDesc}),o.showCelebrationPillars!==!1&&oe.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full",children:g.map((m,_)=>{const S=qy[_%qy.length];return oe.jsxs("div",{className:"px-5 py-4 rounded-2xl border backdrop-blur-md flex items-center gap-3.5 text-left",style:{borderColor:`${u}55`,backgroundColor:"rgba(0,0,0,0.42)"},children:[oe.jsx("div",{className:"w-11 h-11 rounded-xl flex items-center justify-center shrink-0",style:{backgroundColor:`${u}22`},children:oe.jsx(S,{className:"w-6 h-6",style:{color:u}})}),oe.jsxs("div",{children:[oe.jsx("div",{className:"text-sm font-bold tracking-wider",style:{color:h},children:m.title}),oe.jsx("div",{className:"text-xs text-white/75",children:m.desc})]})]},`${m.title}-${_}`)})})]})}const zx="cham_tay_studio_config_v2",FR="cham_tay_stage_sync_v2",lp={patternId:"dong-son",handCount:5,chargeDuration:5e3,podY:-40,podSize:108,podGap:36,coreY:0,coreScale:1,videoBgEnabled:!0,videoSource:"local",youtubeVideoId:"sbDz4hoZWCk",videoOpacity:.55,tintDarkness:.45,screenBrightness:76,autoPhotoOpDim:!0,masterVolume:.8,audioEnabled:!0,soundPreset:"ceremony",touchSoundEnabled:!0,touchVolume:.85,countdownSoundEnabled:!0,countdownVolume:.9,fanfareSoundEnabled:!0,fanfareVolume:1,bgAudioEnabled:!1,bgAudioVolume:.45,hasCustomBgAudio:!1,hasCustomFanfareAudio:!1,showHeader:!1,eventBadge:"ỦY BAN NHÂN DÂN • NGÀY HỘI CHUYỂN ĐỔI SỐ",eventTitle:"NGHI THỨC KÍCH HOẠT CHUYỂN ĐỔI SỐ",eventSubtitle:"CHÍNH QUYỀN SỐ MINH BẠCH - DOANH NGHIỆP BỨT PHÁ - PHỤC VỤ NHÂN DÂN",celebrationTitle:"CHÍNH THỨC KÍCH HOẠT THÀNH CÔNG",celebrationDesc:"ĐỔI MỚI SÁNG TẠO - VƯƠN MÌNH - PHÁT TRIỂN BỀN VỮNG",customLogoData:null,handGlowColor:"#f5c542",showPodLabels:!0,podLabels:["Đại biểu 1","Đại biểu 2","Đại biểu 3","Đại biểu 4","Đại biểu 5"],hasCustomHandImage:!1,hasCustomBgVideo:!1,hasCustomActivationVideo:!1,activationVideoMuted:!0,celebrationRibbon:"NGHI THỨC KÍCH HOẠT HOÀN THÀNH",logoSize:112,showCelebrationPillars:!0,celebrationTheme:"match-pattern",celebrationPillars:[{title:"CHÍNH QUYỀN SỐ",desc:"Minh bạch & Kiến tạo"},{title:"KINH TẾ SỐ",desc:"Đột phá & Bền vững"},{title:"XÃ HỘI SỐ",desc:"Phục vụ Nhân dân"}]};function HR(o){if(!o)return"sbDz4hoZWCk";const e=String(o).trim(),i=e.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([^&?/\s]{11})/);return i&&i[1]?i[1]:/^[a-zA-Z0-9_-]{11}$/.test(e)?e:"sbDz4hoZWCk"}function WR(){try{const o=localStorage.getItem(zx);if(!o)return{...lp};const e=JSON.parse(o);return e.youtubeVideoId==="qyW8818wHhA"&&(e.youtubeVideoId="sbDz4hoZWCk"),{...lp,...e}}catch{return{...lp}}}function jR(o){try{localStorage.setItem(zx,JSON.stringify(o))}catch(e){console.warn("Could not save config to localStorage:",e)}}function ZR(o,e){const i=Jp(e);return{...o,patternId:i.id,eventBadge:i.defaults.eventBadge,eventTitle:i.defaults.eventTitle,eventSubtitle:i.defaults.eventSubtitle,celebrationTitle:i.defaults.celebrationTitle,celebrationDesc:i.defaults.celebrationDesc}}function KR(o){if(typeof BroadcastChannel>"u")return{post:()=>{},close:()=>{}};const e=new BroadcastChannel(FR);return e.onmessage=i=>{o&&i.data&&o(i.data)},{post:(i,s={})=>{try{e.postMessage({type:i,payload:s,timestamp:Date.now()})}catch(l){console.warn("BroadcastChannel post failed:",l)}},close:()=>e.close()}}const GR="./Background Trống Đồng Bản Đồ Việt Nam - I Love Viet Nam - YouTube.mp4";function Yy({config:o,phase:e,progress:i,countdownSec:s,flashActive:l,activeHands:u,customHandImageUrl:h,customBgVideoUrl:d,customActivationVideoUrl:p,onActivateHand:g,onDeactivateHand:v,onActivationVideoEnded:m}){const _=Jp(o.patternId),S=e==="celebration"&&o.autoPhotoOpDim?Math.min(o.screenBrightness,72):o.screenBrightness,E=HR(o.youtubeVideoId),T=d||GR,M=!!(e==="charging"&&p);return oe.jsxs("div",{className:"relative w-full h-full overflow-hidden select-none",style:{background:`radial-gradient(circle at 50% 40%, ${_.colors.bgTop}, ${_.colors.bgBottom} 80%)`,filter:`brightness(${S/100})`,transition:"filter 0.5s ease"},children:[!M&&o.videoBgEnabled&&(o.videoSource==="local"||d)&&oe.jsx("video",{src:T,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"absolute inset-0 w-full h-full object-cover z-0 pointer-events-none",style:{opacity:o.videoOpacity}},T),!M&&!d&&o.videoBgEnabled&&o.videoSource==="youtube"&&oe.jsx("div",{className:"absolute inset-0 overflow-hidden z-0 pointer-events-none",style:{opacity:o.videoOpacity},children:oe.jsx("iframe",{title:"Video Nền YouTube",src:`https://www.youtube.com/embed/${E}?autoplay=1&mute=1&controls=0&loop=1&playlist=${E}&playsinline=1&rel=0&showinfo=0`,className:"w-[130%] h-[130%] -ml-[15%] -mt-[15%] pointer-events-none",allow:"autoplay; encrypted-media"})}),oe.jsx("div",{className:"absolute inset-0 z-0 pointer-events-none",style:{backgroundColor:`rgba(0,0,0,${o.tintDarkness})`}}),oe.jsx(zR,{patternId:o.patternId,phase:e,progress:i,coreY:o.coreY,coreScale:o.coreScale,hideCenterpiece:M}),M&&oe.jsx("video",{src:p,autoPlay:!0,muted:o.activationVideoMuted!==!1,playsInline:!0,onEnded:m,className:"absolute inset-0 w-full h-full object-cover z-20 pointer-events-none"},`act-${p}`),o.showHeader&&e!=="celebration"&&oe.jsxs("header",{className:"absolute top-8 inset-x-0 z-20 text-center px-6 pointer-events-none",children:[oe.jsx("div",{className:"inline-block px-5 py-1.5 rounded-full border text-sm font-bold tracking-[0.2em] uppercase mb-3 backdrop-blur-md",style:{borderColor:`${_.colors.primary}88`,color:_.colors.accent,backgroundColor:"rgba(0,0,0,0.4)"},children:o.eventBadge}),oe.jsx("h1",{className:`text-4xl lg:text-5xl font-black uppercase tracking-wide ${_.id==="holo-globe"?"cyan-3d-text":"gold-3d-text"}`,children:o.eventTitle}),oe.jsx("p",{className:"mt-1.5 text-base font-medium tracking-[0.15em] uppercase text-white/80",children:o.eventSubtitle})]}),e==="charging"&&!M&&oe.jsx("div",{className:"absolute inset-0 z-30 flex items-center justify-center pointer-events-none",children:oe.jsx("div",{className:`text-[11rem] md:text-[13rem] font-black leading-none animate-count-pop ${_.id==="holo-globe"?"cyan-3d-text":"gold-3d-text"}`,children:s},s)}),oe.jsx(IR,{handCount:o.handCount,podY:o.podY,podSize:o.podSize,podGap:o.podGap,activeHands:u,primaryColor:_.colors.primary,glowColor:o.handGlowColor,customHandImageUrl:h,showPodLabels:o.showPodLabels,podLabels:o.podLabels,isCharging:e==="charging",visible:e!=="celebration",onActivateHand:g,onDeactivateHand:v}),oe.jsx(BR,{config:o,pattern:_,visible:e==="celebration"}),oe.jsx("div",{className:`absolute inset-0 z-50 pointer-events-none transition-opacity duration-300 ${l?"opacity-60":"opacity-0"}`,style:{background:`radial-gradient(circle, #ffffff 0%, ${_.colors.accent} 60%, transparent 100%)`}})]})}function QR({isPreview:o=!1,...e}){const i=hi.useRef(null),[s,l]=hi.useState(.45);return hi.useEffect(()=>{if(!o||!i.current)return;const u=i.current,h=()=>{const p=u.clientWidth;p>0&&l(p/1920)};h();const d=new ResizeObserver(h);return d.observe(u),()=>d.disconnect()},[o]),o?oe.jsx("div",{ref:i,className:"relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-black",children:oe.jsx("div",{className:"origin-top-left",style:{width:"1920px",height:"1080px",transform:`scale(${s})`},children:oe.jsx(Yy,{...e})})}):oe.jsx("div",{className:"relative w-screen h-screen overflow-hidden",children:oe.jsx(Yy,{...e})})}class VR{constructor(){this.ctx=null,this.masterGain=null,this.volume=.8,this.enabled=!0,this.soundPreset="ceremony",this.touchSoundEnabled=!0,this.touchVolume=.85,this.countdownSoundEnabled=!0,this.countdownVolume=.9,this.fanfareSoundEnabled=!0,this.fanfareVolume=1,this.bgAudioEnabled=!1,this.bgAudioVolume=.45,this.customBgAudioUrl=null,this.customFanfareAudioUrl=null,this.bgAudioEl=null,this.fanfareAudioEl=null,this.bgDesiredPlaying=!1}init(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.enabled?this.volume:0,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination)}this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.masterGain&&this.masterGain.gain.setValueAtTime(this.enabled?this.volume:0,this.ctx.currentTime)}configure(e={}){typeof e.volume=="number"&&(this.volume=Math.max(0,Math.min(1,e.volume))),typeof e.enabled=="boolean"&&(this.enabled=e.enabled),typeof e.soundPreset=="string"&&(this.soundPreset=e.soundPreset),typeof e.touchSoundEnabled=="boolean"&&(this.touchSoundEnabled=e.touchSoundEnabled),typeof e.touchVolume=="number"&&(this.touchVolume=Math.max(0,Math.min(1,e.touchVolume))),typeof e.countdownSoundEnabled=="boolean"&&(this.countdownSoundEnabled=e.countdownSoundEnabled),typeof e.countdownVolume=="number"&&(this.countdownVolume=Math.max(0,Math.min(1,e.countdownVolume))),typeof e.fanfareSoundEnabled=="boolean"&&(this.fanfareSoundEnabled=e.fanfareSoundEnabled),typeof e.fanfareVolume=="number"&&(this.fanfareVolume=Math.max(0,Math.min(1,e.fanfareVolume))),typeof e.bgAudioEnabled=="boolean"&&(this.bgAudioEnabled=e.bgAudioEnabled),typeof e.bgAudioVolume=="number"&&(this.bgAudioVolume=Math.max(0,Math.min(1,e.bgAudioVolume))),e.customBgAudioUrl!==void 0&&e.customBgAudioUrl!==this.customBgAudioUrl&&(this.stopBgMusic(),this.customBgAudioUrl=e.customBgAudioUrl),e.customFanfareAudioUrl!==void 0&&e.customFanfareAudioUrl!==this.customFanfareAudioUrl&&(this.stopFanfare(),this.customFanfareAudioUrl=e.customFanfareAudioUrl),this.ctx&&this.masterGain&&this.masterGain.gain.setValueAtTime(this.enabled?this.volume:0,this.ctx.currentTime),this.bgAudioEl&&(this.bgAudioEl.volume=this.enabled&&this.bgAudioEnabled?Math.max(0,Math.min(1,this.volume*this.bgAudioVolume)):0,(!this.enabled||!this.bgAudioEnabled)&&this.bgAudioEl.pause()),this.fanfareAudioEl&&(this.fanfareAudioEl.volume=this.enabled&&this.fanfareSoundEnabled?Math.max(0,Math.min(1,this.volume*this.fanfareVolume)):0)}getDestination(){return this.masterGain||(this.ctx?this.ctx.destination:null)}playTouchChime(){if(!(!this.enabled||!this.touchSoundEnabled)&&(this.init(),!!this.ctx))try{const e=this.ctx.currentTime,i=this.touchVolume,s=this.ctx.createOscillator(),l=this.ctx.createGain();this.soundPreset==="tech"?(s.type="triangle",s.frequency.setValueAtTime(1174.66,e),s.frequency.exponentialRampToValueAtTime(1760,e+.14),l.gain.setValueAtTime(.22*i,e),l.gain.exponentialRampToValueAtTime(.004,e+.28),s.connect(l),l.connect(this.getDestination()),s.start(e),s.stop(e+.29)):this.soundPreset==="minimal"?(s.type="sine",s.frequency.setValueAtTime(783.99,e),s.frequency.exponentialRampToValueAtTime(987.77,e+.18),l.gain.setValueAtTime(.16*i,e),l.gain.exponentialRampToValueAtTime(.004,e+.34),s.connect(l),l.connect(this.getDestination()),s.start(e),s.stop(e+.35)):(s.type="sine",s.frequency.setValueAtTime(987.77,e),s.frequency.exponentialRampToValueAtTime(1318.51,e+.16),l.gain.setValueAtTime(.24*i,e),l.gain.exponentialRampToValueAtTime(.004,e+.36),s.connect(l),l.connect(this.getDestination()),s.start(e),s.stop(e+.37))}catch(e){console.warn("Audio error:",e)}}playCountdownBeep(e){if(!(!this.enabled||!this.countdownSoundEnabled)&&(this.init(),!!this.ctx))try{const i=this.ctx.currentTime,s=this.countdownVolume;if(this.soundPreset!=="minimal"){const d=this.ctx.createOscillator(),p=this.ctx.createGain();d.type="sine",d.frequency.setValueAtTime(125-(5-e)*10,i),d.frequency.exponentialRampToValueAtTime(32,i+.38),p.gain.setValueAtTime((this.soundPreset==="tech"?.5:.72)*s,i),p.gain.exponentialRampToValueAtTime(.005,i+.38),d.connect(p),p.connect(this.getDestination()),d.start(i),d.stop(i+.4)}const l=this.ctx.createOscillator(),u=this.ctx.createGain();l.type=this.soundPreset==="tech"?"sawtooth":this.soundPreset==="minimal"?"sine":"triangle";const h=e===1?880:523.25+(5-e)*55;if(l.frequency.setValueAtTime(h,i),u.gain.setValueAtTime((this.soundPreset==="minimal"?.2:.28)*s,i),u.gain.exponentialRampToValueAtTime(.004,i+.42),this.soundPreset==="tech"){const d=this.ctx.createBiquadFilter();d.type="lowpass",d.frequency.setValueAtTime(2200,i),l.connect(d),d.connect(u)}else l.connect(u);u.connect(this.getDestination()),l.start(i),l.stop(i+.45)}catch(i){console.warn("Audio error:",i)}}playSynthFanfare(){if(this.init(),!!this.ctx)try{const e=this.ctx.currentTime,i=this.fanfareVolume,s=this.soundPreset==="minimal",l=this.soundPreset==="tech";[{freq:261.63,delay:0,dur:1.5,gain:.28},{freq:329.63,delay:.08,dur:1.5,gain:.24},{freq:392,delay:.16,dur:1.6,gain:.24},{freq:523.25,delay:.24,dur:1.9,gain:.32},{freq:659.25,delay:.34,dur:1.8,gain:.2}].forEach(h=>{const d=this.ctx.createOscillator(),p=this.ctx.createGain();d.type=s?"sine":l?"triangle":"sawtooth";const g=this.ctx.createBiquadFilter();g.type="lowpass",g.frequency.setValueAtTime(l?2800:1800,e+h.delay),d.frequency.setValueAtTime(h.freq,e+h.delay),p.gain.setValueAtTime(.001,e+h.delay),p.gain.linearRampToValueAtTime(h.gain*i,e+h.delay+.08),p.gain.exponentialRampToValueAtTime(.003,e+h.delay+h.dur),d.connect(g),g.connect(p),p.connect(this.getDestination()),d.start(e+h.delay),d.stop(e+h.delay+h.dur+.05)})}catch(e){console.warn("Audio error:",e)}}playFanfare(){if(!(!this.enabled||!this.fanfareSoundEnabled)){if(this.customFanfareAudioUrl)try{this.stopFanfare();const e=new Audio(this.customFanfareAudioUrl);e.volume=Math.max(0,Math.min(1,this.volume*this.fanfareVolume)),this.fanfareAudioEl=e,e.play().catch(()=>{this.playSynthFanfare()});return}catch{this.playSynthFanfare();return}this.playSynthFanfare()}}stopFanfare(){this.fanfareAudioEl&&(this.fanfareAudioEl.pause(),this.fanfareAudioEl.currentTime=0,this.fanfareAudioEl=null)}syncBgMusic(e){if(this.bgDesiredPlaying=!!e,!e||!this.enabled||!this.bgAudioEnabled||!this.customBgAudioUrl){this.stopBgMusic();return}if(!this.bgAudioEl||this.bgAudioEl.src!==this.customBgAudioUrl){this.stopBgMusic();const i=new Audio(this.customBgAudioUrl);i.loop=!0,i.volume=Math.max(0,Math.min(1,this.volume*this.bgAudioVolume)),this.bgAudioEl=i}else this.bgAudioEl.volume=Math.max(0,Math.min(1,this.volume*this.bgAudioVolume));this.bgAudioEl.paused&&this.bgAudioEl.play().catch(()=>{})}unlockBgMusicIfNeeded(){this.bgDesiredPlaying&&this.bgAudioEl&&this.bgAudioEl.paused&&this.bgAudioEl.play().catch(()=>{})}stopBgMusic(){this.bgAudioEl&&(this.bgAudioEl.pause(),this.bgAudioEl.currentTime=0)}}const JR=new VR,XR="cham_tay_media_db",kR=1,gs="media_blobs";function Sm(){return new Promise((o,e)=>{if(typeof indexedDB>"u"){e(new Error("IndexedDB is not supported"));return}const i=indexedDB.open(XR,kR);i.onupgradeneeded=()=>{const s=i.result;s.objectStoreNames.contains(gs)||s.createObjectStore(gs)},i.onsuccess=()=>o(i.result),i.onerror=()=>e(i.error)})}async function $R(o,e){const i=await Sm();return new Promise((s,l)=>{const u=i.transaction(gs,"readwrite");u.objectStore(gs).put(e,o),u.oncomplete=()=>s(),u.onerror=()=>l(u.error)})}async function Tl(o){const e=await Sm();return new Promise((i,s)=>{const u=e.transaction(gs,"readonly").objectStore(gs).get(o);u.onsuccess=()=>i(u.result||null),u.onerror=()=>s(u.error)})}async function tw(o){const e=await Sm();return new Promise((i,s)=>{const l=e.transaction(gs,"readwrite");l.objectStore(gs).delete(o),l.oncomplete=()=>i(),l.onerror=()=>s(l.error)})}async function ew(){try{const[o,e,i,s,l]=await Promise.all([Tl("customHandImage"),Tl("customBgVideo"),Tl("customActivationVideo"),Tl("customBgAudio"),Tl("customFanfareAudio")]);return{customHandImageUrl:o?URL.createObjectURL(o):null,customBgVideoUrl:e?URL.createObjectURL(e):null,customActivationVideoUrl:i?URL.createObjectURL(i):null,customBgAudioUrl:s?URL.createObjectURL(s):null,customFanfareAudioUrl:l?URL.createObjectURL(l):null}}catch{return{customHandImageUrl:null,customBgVideoUrl:null,customActivationVideoUrl:null,customBgAudioUrl:null,customFanfareAudioUrl:null}}}export{LE as A,PE as B,B_ as P,YR as R,QR as S,JR as a,WR as b,Bl as c,tw as d,HR as e,KR as f,Jp as g,jR as h,ZR as i,oe as j,qR as k,ew as l,zx as m,hi as r,$R as s};
