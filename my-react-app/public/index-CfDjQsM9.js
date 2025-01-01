(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var Cd={exports:{}},Ua={},kd={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dg;function qE(){if(Dg)return Ce;Dg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),T=Symbol.iterator;function S(V){return V===null||typeof V!="object"?null:(V=T&&V[T]||V["@@iterator"],typeof V=="function"?V:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,z={};function L(V,G,he){this.props=V,this.context=G,this.refs=z,this.updater=he||D}L.prototype.isReactComponent={},L.prototype.setState=function(V,G){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,G,"setState")},L.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function q(){}q.prototype=L.prototype;function $(V,G,he){this.props=V,this.context=G,this.refs=z,this.updater=he||D}var Z=$.prototype=new q;Z.constructor=$,b(Z,L.prototype),Z.isPureReactComponent=!0;var re=Array.isArray,we=Object.prototype.hasOwnProperty,_e={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function I(V,G,he){var Re,Ae={},xe=null,Me=null;if(G!=null)for(Re in G.ref!==void 0&&(Me=G.ref),G.key!==void 0&&(xe=""+G.key),G)we.call(G,Re)&&!N.hasOwnProperty(Re)&&(Ae[Re]=G[Re]);var Ue=arguments.length-2;if(Ue===1)Ae.children=he;else if(1<Ue){for(var $e=Array(Ue),wt=0;wt<Ue;wt++)$e[wt]=arguments[wt+2];Ae.children=$e}if(V&&V.defaultProps)for(Re in Ue=V.defaultProps,Ue)Ae[Re]===void 0&&(Ae[Re]=Ue[Re]);return{$$typeof:n,type:V,key:xe,ref:Me,props:Ae,_owner:_e.current}}function A(V,G){return{$$typeof:n,type:V.type,key:G,ref:V.ref,props:V.props,_owner:V._owner}}function P(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function O(V){var G={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(he){return G[he]})}var M=/\/+/g;function C(V,G){return typeof V=="object"&&V!==null&&V.key!=null?O(""+V.key):G.toString(36)}function it(V,G,he,Re,Ae){var xe=typeof V;(xe==="undefined"||xe==="boolean")&&(V=null);var Me=!1;if(V===null)Me=!0;else switch(xe){case"string":case"number":Me=!0;break;case"object":switch(V.$$typeof){case n:case e:Me=!0}}if(Me)return Me=V,Ae=Ae(Me),V=Re===""?"."+C(Me,0):Re,re(Ae)?(he="",V!=null&&(he=V.replace(M,"$&/")+"/"),it(Ae,G,he,"",function(wt){return wt})):Ae!=null&&(P(Ae)&&(Ae=A(Ae,he+(!Ae.key||Me&&Me.key===Ae.key?"":(""+Ae.key).replace(M,"$&/")+"/")+V)),G.push(Ae)),1;if(Me=0,Re=Re===""?".":Re+":",re(V))for(var Ue=0;Ue<V.length;Ue++){xe=V[Ue];var $e=Re+C(xe,Ue);Me+=it(xe,G,he,$e,Ae)}else if($e=S(V),typeof $e=="function")for(V=$e.call(V),Ue=0;!(xe=V.next()).done;)xe=xe.value,$e=Re+C(xe,Ue++),Me+=it(xe,G,he,$e,Ae);else if(xe==="object")throw G=String(V),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return Me}function Ot(V,G,he){if(V==null)return V;var Re=[],Ae=0;return it(V,Re,"","",function(xe){return G.call(he,xe,Ae++)}),Re}function Lt(V){if(V._status===-1){var G=V._result;G=G(),G.then(function(he){(V._status===0||V._status===-1)&&(V._status=1,V._result=he)},function(he){(V._status===0||V._status===-1)&&(V._status=2,V._result=he)}),V._status===-1&&(V._status=0,V._result=G)}if(V._status===1)return V._result.default;throw V._result}var je={current:null},ne={transition:null},de={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:ne,ReactCurrentOwner:_e};function se(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:Ot,forEach:function(V,G,he){Ot(V,function(){G.apply(this,arguments)},he)},count:function(V){var G=0;return Ot(V,function(){G++}),G},toArray:function(V){return Ot(V,function(G){return G})||[]},only:function(V){if(!P(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Ce.Component=L,Ce.Fragment=t,Ce.Profiler=o,Ce.PureComponent=$,Ce.StrictMode=i,Ce.Suspense=p,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,Ce.act=se,Ce.cloneElement=function(V,G,he){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Re=b({},V.props),Ae=V.key,xe=V.ref,Me=V._owner;if(G!=null){if(G.ref!==void 0&&(xe=G.ref,Me=_e.current),G.key!==void 0&&(Ae=""+G.key),V.type&&V.type.defaultProps)var Ue=V.type.defaultProps;for($e in G)we.call(G,$e)&&!N.hasOwnProperty($e)&&(Re[$e]=G[$e]===void 0&&Ue!==void 0?Ue[$e]:G[$e])}var $e=arguments.length-2;if($e===1)Re.children=he;else if(1<$e){Ue=Array($e);for(var wt=0;wt<$e;wt++)Ue[wt]=arguments[wt+2];Re.children=Ue}return{$$typeof:n,type:V.type,key:Ae,ref:xe,props:Re,_owner:Me}},Ce.createContext=function(V){return V={$$typeof:c,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:l,_context:V},V.Consumer=V},Ce.createElement=I,Ce.createFactory=function(V){var G=I.bind(null,V);return G.type=V,G},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(V){return{$$typeof:d,render:V}},Ce.isValidElement=P,Ce.lazy=function(V){return{$$typeof:w,_payload:{_status:-1,_result:V},_init:Lt}},Ce.memo=function(V,G){return{$$typeof:y,type:V,compare:G===void 0?null:G}},Ce.startTransition=function(V){var G=ne.transition;ne.transition={};try{V()}finally{ne.transition=G}},Ce.unstable_act=se,Ce.useCallback=function(V,G){return je.current.useCallback(V,G)},Ce.useContext=function(V){return je.current.useContext(V)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(V){return je.current.useDeferredValue(V)},Ce.useEffect=function(V,G){return je.current.useEffect(V,G)},Ce.useId=function(){return je.current.useId()},Ce.useImperativeHandle=function(V,G,he){return je.current.useImperativeHandle(V,G,he)},Ce.useInsertionEffect=function(V,G){return je.current.useInsertionEffect(V,G)},Ce.useLayoutEffect=function(V,G){return je.current.useLayoutEffect(V,G)},Ce.useMemo=function(V,G){return je.current.useMemo(V,G)},Ce.useReducer=function(V,G,he){return je.current.useReducer(V,G,he)},Ce.useRef=function(V){return je.current.useRef(V)},Ce.useState=function(V){return je.current.useState(V)},Ce.useSyncExternalStore=function(V,G,he){return je.current.useSyncExternalStore(V,G,he)},Ce.useTransition=function(){return je.current.useTransition()},Ce.version="18.3.1",Ce}var xg;function Sf(){return xg||(xg=1,kd.exports=qE()),kd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Og;function WE(){if(Og)return Ua;Og=1;var n=Sf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,p,y){var w,T={},S=null,D=null;y!==void 0&&(S=""+y),p.key!==void 0&&(S=""+p.key),p.ref!==void 0&&(D=p.ref);for(w in p)i.call(p,w)&&!l.hasOwnProperty(w)&&(T[w]=p[w]);if(d&&d.defaultProps)for(w in p=d.defaultProps,p)T[w]===void 0&&(T[w]=p[w]);return{$$typeof:e,type:d,key:S,ref:D,props:T,_owner:o.current}}return Ua.Fragment=t,Ua.jsx=c,Ua.jsxs=c,Ua}var Lg;function KE(){return Lg||(Lg=1,Cd.exports=WE()),Cd.exports}var ye=KE(),W=Sf(),ju={},Pd={exports:{}},tn={},Nd={exports:{}},Dd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bg;function GE(){return bg||(bg=1,function(n){function e(ne,de){var se=ne.length;ne.push(de);e:for(;0<se;){var V=se-1>>>1,G=ne[V];if(0<o(G,de))ne[V]=de,ne[se]=G,se=V;else break e}}function t(ne){return ne.length===0?null:ne[0]}function i(ne){if(ne.length===0)return null;var de=ne[0],se=ne.pop();if(se!==de){ne[0]=se;e:for(var V=0,G=ne.length,he=G>>>1;V<he;){var Re=2*(V+1)-1,Ae=ne[Re],xe=Re+1,Me=ne[xe];if(0>o(Ae,se))xe<G&&0>o(Me,Ae)?(ne[V]=Me,ne[xe]=se,V=xe):(ne[V]=Ae,ne[Re]=se,V=Re);else if(xe<G&&0>o(Me,se))ne[V]=Me,ne[xe]=se,V=xe;else break e}}return de}function o(ne,de){var se=ne.sortIndex-de.sortIndex;return se!==0?se:ne.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var p=[],y=[],w=1,T=null,S=3,D=!1,b=!1,z=!1,L=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,$=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Z(ne){for(var de=t(y);de!==null;){if(de.callback===null)i(y);else if(de.startTime<=ne)i(y),de.sortIndex=de.expirationTime,e(p,de);else break;de=t(y)}}function re(ne){if(z=!1,Z(ne),!b)if(t(p)!==null)b=!0,Lt(we);else{var de=t(y);de!==null&&je(re,de.startTime-ne)}}function we(ne,de){b=!1,z&&(z=!1,q(I),I=-1),D=!0;var se=S;try{for(Z(de),T=t(p);T!==null&&(!(T.expirationTime>de)||ne&&!O());){var V=T.callback;if(typeof V=="function"){T.callback=null,S=T.priorityLevel;var G=V(T.expirationTime<=de);de=n.unstable_now(),typeof G=="function"?T.callback=G:T===t(p)&&i(p),Z(de)}else i(p);T=t(p)}if(T!==null)var he=!0;else{var Re=t(y);Re!==null&&je(re,Re.startTime-de),he=!1}return he}finally{T=null,S=se,D=!1}}var _e=!1,N=null,I=-1,A=5,P=-1;function O(){return!(n.unstable_now()-P<A)}function M(){if(N!==null){var ne=n.unstable_now();P=ne;var de=!0;try{de=N(!0,ne)}finally{de?C():(_e=!1,N=null)}}else _e=!1}var C;if(typeof $=="function")C=function(){$(M)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,Ot=it.port2;it.port1.onmessage=M,C=function(){Ot.postMessage(null)}}else C=function(){L(M,0)};function Lt(ne){N=ne,_e||(_e=!0,C())}function je(ne,de){I=L(function(){ne(n.unstable_now())},de)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ne){ne.callback=null},n.unstable_continueExecution=function(){b||D||(b=!0,Lt(we))},n.unstable_forceFrameRate=function(ne){0>ne||125<ne?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<ne?Math.floor(1e3/ne):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(ne){switch(S){case 1:case 2:case 3:var de=3;break;default:de=S}var se=S;S=de;try{return ne()}finally{S=se}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ne,de){switch(ne){case 1:case 2:case 3:case 4:case 5:break;default:ne=3}var se=S;S=ne;try{return de()}finally{S=se}},n.unstable_scheduleCallback=function(ne,de,se){var V=n.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?V+se:V):se=V,ne){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=se+G,ne={id:w++,callback:de,priorityLevel:ne,startTime:se,expirationTime:G,sortIndex:-1},se>V?(ne.sortIndex=se,e(y,ne),t(p)===null&&ne===t(y)&&(z?(q(I),I=-1):z=!0,je(re,se-V))):(ne.sortIndex=G,e(p,ne),b||D||(b=!0,Lt(we))),ne},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(ne){var de=S;return function(){var se=S;S=de;try{return ne.apply(this,arguments)}finally{S=se}}}}(Dd)),Dd}var Vg;function QE(){return Vg||(Vg=1,Nd.exports=GE()),Nd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mg;function YE(){if(Mg)return tn;Mg=1;var n=Sf(),e=QE();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},T={};function S(r){return p.call(T,r)?!0:p.call(w,r)?!1:y.test(r)?T[r]=!0:(w[r]=!0,!1)}function D(r,s,a,h){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function b(r,s,a,h){if(s===null||typeof s>"u"||D(r,s,a,h))return!0;if(h)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function z(r,s,a,h,f,g,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=v}var L={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){L[r]=new z(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];L[s]=new z(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){L[r]=new z(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){L[r]=new z(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){L[r]=new z(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){L[r]=new z(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){L[r]=new z(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){L[r]=new z(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){L[r]=new z(r,5,!1,r.toLowerCase(),null,!1,!1)});var q=/[\-:]([a-z])/g;function $(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(q,$);L[s]=new z(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(q,$);L[s]=new z(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(q,$);L[s]=new z(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){L[r]=new z(r,1,!1,r.toLowerCase(),null,!1,!1)}),L.xlinkHref=new z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){L[r]=new z(r,1,!1,r.toLowerCase(),null,!0,!0)});function Z(r,s,a,h){var f=L.hasOwnProperty(s)?L[s]:null;(f!==null?f.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(b(s,a,f,h)&&(a=null),h||f===null?S(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):f.mustUseProperty?r[f.propertyName]=a===null?f.type===3?!1:"":a:(s=f.attributeName,h=f.attributeNamespace,a===null?r.removeAttribute(s):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,h?r.setAttributeNS(h,s,a):r.setAttribute(s,a))))}var re=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,we=Symbol.for("react.element"),_e=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),O=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),it=Symbol.for("react.suspense_list"),Ot=Symbol.for("react.memo"),Lt=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),ne=Symbol.iterator;function de(r){return r===null||typeof r!="object"?null:(r=ne&&r[ne]||r["@@iterator"],typeof r=="function"?r:null)}var se=Object.assign,V;function G(r){if(V===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);V=s&&s[1]||""}return`
`+V+r}var he=!1;function Re(r,s){if(!r||he)return"";he=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(j){var h=j}Reflect.construct(r,[],s)}else{try{s.call()}catch(j){h=j}r.call(s.prototype)}else{try{throw Error()}catch(j){h=j}r()}}catch(j){if(j&&h&&typeof j.stack=="string"){for(var f=j.stack.split(`
`),g=h.stack.split(`
`),v=f.length-1,R=g.length-1;1<=v&&0<=R&&f[v]!==g[R];)R--;for(;1<=v&&0<=R;v--,R--)if(f[v]!==g[R]){if(v!==1||R!==1)do if(v--,R--,0>R||f[v]!==g[R]){var k=`
`+f[v].replace(" at new "," at ");return r.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",r.displayName)),k}while(1<=v&&0<=R);break}}}finally{he=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?G(r):""}function Ae(r){switch(r.tag){case 5:return G(r.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return r=Re(r.type,!1),r;case 11:return r=Re(r.type.render,!1),r;case 1:return r=Re(r.type,!0),r;default:return""}}function xe(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case N:return"Fragment";case _e:return"Portal";case A:return"Profiler";case I:return"StrictMode";case C:return"Suspense";case it:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case O:return(r.displayName||"Context")+".Consumer";case P:return(r._context.displayName||"Context")+".Provider";case M:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Ot:return s=r.displayName||null,s!==null?s:xe(r.type)||"Memo";case Lt:s=r._payload,r=r._init;try{return xe(r(s))}catch{}}return null}function Me(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(s);case 8:return s===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Ue(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function $e(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function wt(r){var s=$e(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),h=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(v){h=""+v,g.call(this,v)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return h},setValue:function(v){h=""+v},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function mr(r){r._valueTracker||(r._valueTracker=wt(r))}function Cs(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),h="";return r&&(h=$e(r)?r.checked?"true":"false":r.value),r=h,r!==a?(s.setValue(r),!0):!1}function $r(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Oi(r,s){var a=s.checked;return se({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function ks(r,s){var a=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;a=Ue(s.value!=null?s.value:a),r._wrapperState={initialChecked:h,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Ho(r,s){s=s.checked,s!=null&&Z(r,"checked",s,!1)}function qo(r,s){Ho(r,s);var a=Ue(s.value),h=s.type;if(a!=null)h==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(h==="submit"||h==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Ps(r,s.type,a):s.hasOwnProperty("defaultValue")&&Ps(r,s.type,Ue(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Al(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function Ps(r,s,a){(s!=="number"||$r(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var gr=Array.isArray;function yr(r,s,a,h){if(r=r.options,s){s={};for(var f=0;f<a.length;f++)s["$"+a[f]]=!0;for(a=0;a<r.length;a++)f=s.hasOwnProperty("$"+r[a].value),r[a].selected!==f&&(r[a].selected=f),f&&h&&(r[a].defaultSelected=!0)}else{for(a=""+Ue(a),s=null,f=0;f<r.length;f++){if(r[f].value===a){r[f].selected=!0,h&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function Wo(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Ns(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(gr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:Ue(a)}}function Ds(r,s){var a=Ue(s.value),h=Ue(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),h!=null&&(r.defaultValue=""+h)}function Ko(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function dt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ft(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?dt(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var _r,Go=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,h,f){MSApp.execUnsafeLocalFunction(function(){return r(s,a,h,f)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(_r=_r||document.createElement("div"),_r.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=_r.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Hr(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var Li={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bi=["Webkit","ms","Moz","O"];Object.keys(Li).forEach(function(r){bi.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Li[s]=Li[r]})});function Qo(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Li.hasOwnProperty(r)&&Li[r]?(""+s).trim():s+"px"}function Yo(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var h=a.indexOf("--")===0,f=Qo(a,s[a],h);a==="float"&&(a="cssFloat"),h?r.setProperty(a,f):r[a]=f}}var Xo=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jo(r,s){if(s){if(Xo[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Zo(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vi=null;function xs(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Os=null,mn=null,Kn=null;function Ls(r){if(r=Ia(r)){if(typeof Os!="function")throw Error(t(280));var s=r.stateNode;s&&(s=nu(s),Os(r.stateNode,r.type,s))}}function Gn(r){mn?Kn?Kn.push(r):Kn=[r]:mn=r}function ea(){if(mn){var r=mn,s=Kn;if(Kn=mn=null,Ls(r),s)for(r=0;r<s.length;r++)Ls(s[r])}}function Mi(r,s){return r(s)}function ta(){}var vr=!1;function na(r,s,a){if(vr)return r(s,a);vr=!0;try{return Mi(r,s,a)}finally{vr=!1,(mn!==null||Kn!==null)&&(ta(),ea())}}function st(r,s){var a=r.stateNode;if(a===null)return null;var h=nu(a);if(h===null)return null;a=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(r=r.type,h=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!h;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var bs=!1;if(d)try{var Pn={};Object.defineProperty(Pn,"passive",{get:function(){bs=!0}}),window.addEventListener("test",Pn,Pn),window.removeEventListener("test",Pn,Pn)}catch{bs=!1}function Ui(r,s,a,h,f,g,v,R,k){var j=Array.prototype.slice.call(arguments,3);try{s.apply(a,j)}catch(Y){this.onError(Y)}}var Fi=!1,Vs=null,Nn=!1,ra=null,th={onError:function(r){Fi=!0,Vs=r}};function Ms(r,s,a,h,f,g,v,R,k){Fi=!1,Vs=null,Ui.apply(th,arguments)}function Cl(r,s,a,h,f,g,v,R,k){if(Ms.apply(this,arguments),Fi){if(Fi){var j=Vs;Fi=!1,Vs=null}else throw Error(t(198));Nn||(Nn=!0,ra=j)}}function Dn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,s.flags&4098&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function Bi(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function xn(r){if(Dn(r)!==r)throw Error(t(188))}function kl(r){var s=r.alternate;if(!s){if(s=Dn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,h=s;;){var f=a.return;if(f===null)break;var g=f.alternate;if(g===null){if(h=f.return,h!==null){a=h;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===a)return xn(f),r;if(g===h)return xn(f),s;g=g.sibling}throw Error(t(188))}if(a.return!==h.return)a=f,h=g;else{for(var v=!1,R=f.child;R;){if(R===a){v=!0,a=f,h=g;break}if(R===h){v=!0,h=f,a=g;break}R=R.sibling}if(!v){for(R=g.child;R;){if(R===a){v=!0,a=g,h=f;break}if(R===h){v=!0,h=g,a=f;break}R=R.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==h)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function ia(r){return r=kl(r),r!==null?Us(r):null}function Us(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Us(r);if(s!==null)return s;r=r.sibling}return null}var Fs=e.unstable_scheduleCallback,sa=e.unstable_cancelCallback,Pl=e.unstable_shouldYield,nh=e.unstable_requestPaint,He=e.unstable_now,Nl=e.unstable_getCurrentPriorityLevel,ji=e.unstable_ImmediatePriority,qr=e.unstable_UserBlockingPriority,gn=e.unstable_NormalPriority,oa=e.unstable_LowPriority,Dl=e.unstable_IdlePriority,zi=null,on=null;function xl(r){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(zi,r,void 0,(r.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:Ll,aa=Math.log,Ol=Math.LN2;function Ll(r){return r>>>=0,r===0?32:31-(aa(r)/Ol|0)|0}var Bs=64,js=4194304;function Wr(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function $i(r,s){var a=r.pendingLanes;if(a===0)return 0;var h=0,f=r.suspendedLanes,g=r.pingedLanes,v=a&268435455;if(v!==0){var R=v&~f;R!==0?h=Wr(R):(g&=v,g!==0&&(h=Wr(g)))}else v=a&~f,v!==0?h=Wr(v):g!==0&&(h=Wr(g));if(h===0)return 0;if(s!==0&&s!==h&&!(s&f)&&(f=h&-h,g=s&-s,f>=g||f===16&&(g&4194240)!==0))return s;if(h&4&&(h|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=h;0<s;)a=31-$t(s),f=1<<a,h|=r[a],s&=~f;return h}function rh(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wr(r,s){for(var a=r.suspendedLanes,h=r.pingedLanes,f=r.expirationTimes,g=r.pendingLanes;0<g;){var v=31-$t(g),R=1<<v,k=f[v];k===-1?(!(R&a)||R&h)&&(f[v]=rh(R,s)):k<=s&&(r.expiredLanes|=R),g&=~R}}function an(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Hi(){var r=Bs;return Bs<<=1,!(Bs&4194240)&&(Bs=64),r}function Kr(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function Gr(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-$t(s),r[s]=a}function ze(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var h=r.eventTimes;for(r=r.expirationTimes;0<a;){var f=31-$t(a),g=1<<f;s[f]=0,h[f]=-1,r[f]=-1,a&=~g}}function Qr(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var h=31-$t(a),f=1<<h;f&s|r[h]&s&&(r[h]|=s),a&=~f}}var Ne=0;function Yr(r){return r&=-r,1<r?4<r?r&268435455?16:536870912:4:1}var bl,zs,Vl,Ml,Ul,la=!1,Qn=[],At=null,On=null,Ln=null,Xr=new Map,yn=new Map,Yn=[],ih="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fl(r,s){switch(r){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":On=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":Xr.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":yn.delete(s.pointerId)}}function Gt(r,s,a,h,f,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:h,nativeEvent:g,targetContainers:[f]},s!==null&&(s=Ia(s),s!==null&&zs(s)),r):(r.eventSystemFlags|=h,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function sh(r,s,a,h,f){switch(s){case"focusin":return At=Gt(At,r,s,a,h,f),!0;case"dragenter":return On=Gt(On,r,s,a,h,f),!0;case"mouseover":return Ln=Gt(Ln,r,s,a,h,f),!0;case"pointerover":var g=f.pointerId;return Xr.set(g,Gt(Xr.get(g)||null,r,s,a,h,f)),!0;case"gotpointercapture":return g=f.pointerId,yn.set(g,Gt(yn.get(g)||null,r,s,a,h,f)),!0}return!1}function Bl(r){var s=Qi(r.target);if(s!==null){var a=Dn(s);if(a!==null){if(s=a.tag,s===13){if(s=Bi(a),s!==null){r.blockedOn=s,Ul(r.priority,function(){Vl(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Er(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=$s(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var h=new a.constructor(a.type,a);Vi=h,a.target.dispatchEvent(h),Vi=null}else return s=Ia(a),s!==null&&zs(s),r.blockedOn=a,!1;s.shift()}return!0}function qi(r,s,a){Er(r)&&a.delete(s)}function jl(){la=!1,At!==null&&Er(At)&&(At=null),On!==null&&Er(On)&&(On=null),Ln!==null&&Er(Ln)&&(Ln=null),Xr.forEach(qi),yn.forEach(qi)}function bn(r,s){r.blockedOn===s&&(r.blockedOn=null,la||(la=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,jl)))}function Vn(r){function s(f){return bn(f,r)}if(0<Qn.length){bn(Qn[0],r);for(var a=1;a<Qn.length;a++){var h=Qn[a];h.blockedOn===r&&(h.blockedOn=null)}}for(At!==null&&bn(At,r),On!==null&&bn(On,r),Ln!==null&&bn(Ln,r),Xr.forEach(s),yn.forEach(s),a=0;a<Yn.length;a++)h=Yn[a],h.blockedOn===r&&(h.blockedOn=null);for(;0<Yn.length&&(a=Yn[0],a.blockedOn===null);)Bl(a),a.blockedOn===null&&Yn.shift()}var Tr=re.ReactCurrentBatchConfig,Jr=!0;function Ge(r,s,a,h){var f=Ne,g=Tr.transition;Tr.transition=null;try{Ne=1,ua(r,s,a,h)}finally{Ne=f,Tr.transition=g}}function oh(r,s,a,h){var f=Ne,g=Tr.transition;Tr.transition=null;try{Ne=4,ua(r,s,a,h)}finally{Ne=f,Tr.transition=g}}function ua(r,s,a,h){if(Jr){var f=$s(r,s,a,h);if(f===null)yh(r,s,h,Wi,a),Fl(r,h);else if(sh(f,r,s,a,h))h.stopPropagation();else if(Fl(r,h),s&4&&-1<ih.indexOf(r)){for(;f!==null;){var g=Ia(f);if(g!==null&&bl(g),g=$s(r,s,a,h),g===null&&yh(r,s,h,Wi,a),g===f)break;f=g}f!==null&&h.stopPropagation()}else yh(r,s,h,null,a)}}var Wi=null;function $s(r,s,a,h){if(Wi=null,r=xs(h),r=Qi(r),r!==null)if(s=Dn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=Bi(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return Wi=r,null}function ca(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Nl()){case ji:return 1;case qr:return 4;case gn:case oa:return 16;case Dl:return 536870912;default:return 16}default:return 16}}var ln=null,Hs=null,Qt=null;function ha(){if(Qt)return Qt;var r,s=Hs,a=s.length,h,f="value"in ln?ln.value:ln.textContent,g=f.length;for(r=0;r<a&&s[r]===f[r];r++);var v=a-r;for(h=1;h<=v&&s[a-h]===f[g-h];h++);return Qt=f.slice(r,1<h?1-h:void 0)}function qs(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Xn(){return!0}function da(){return!1}function Ct(r){function s(a,h,f,g,v){this._reactName=a,this._targetInst=f,this.type=h,this.nativeEvent=g,this.target=v,this.currentTarget=null;for(var R in r)r.hasOwnProperty(R)&&(a=r[R],this[R]=a?a(g):g[R]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Xn:da,this.isPropagationStopped=da,this}return se(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xn)},persist:function(){},isPersistent:Xn}),s}var Mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ws=Ct(Mn),Jn=se({},Mn,{view:0,detail:0}),ah=Ct(Jn),Ks,Ir,Zr,Ki=se({},Jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zn,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Zr&&(Zr&&r.type==="mousemove"?(Ks=r.screenX-Zr.screenX,Ir=r.screenY-Zr.screenY):Ir=Ks=0,Zr=r),Ks)},movementY:function(r){return"movementY"in r?r.movementY:Ir}}),Gs=Ct(Ki),fa=se({},Ki,{dataTransfer:0}),zl=Ct(fa),Qs=se({},Jn,{relatedTarget:0}),Ys=Ct(Qs),$l=se({},Mn,{animationName:0,elapsedTime:0,pseudoElement:0}),Sr=Ct($l),Hl=se({},Mn,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),ql=Ct(Hl),Wl=se({},Mn,{data:0}),pa=Ct(Wl),Xs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ht={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gl(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=Kl[r])?!!s[r]:!1}function Zn(){return Gl}var u=se({},Jn,{key:function(r){if(r.key){var s=Xs[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=qs(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Ht[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zn,charCode:function(r){return r.type==="keypress"?qs(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?qs(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=Ct(u),_=se({},Ki,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=Ct(_),U=se({},Jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zn}),H=Ct(U),te=se({},Mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Be=Ct(te),pt=se({},Ki,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Oe=Ct(pt),Et=[9,13,27,32],lt=d&&"CompositionEvent"in window,_n=null;d&&"documentMode"in document&&(_n=document.documentMode);var un=d&&"TextEvent"in window&&!_n,Gi=d&&(!lt||_n&&8<_n&&11>=_n),Js=" ",Rp=!1;function Ap(r,s){switch(r){case"keyup":return Et.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cp(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Zs=!1;function zw(r,s){switch(r){case"compositionend":return Cp(s);case"keypress":return s.which!==32?null:(Rp=!0,Js);case"textInput":return r=s.data,r===Js&&Rp?null:r;default:return null}}function $w(r,s){if(Zs)return r==="compositionend"||!lt&&Ap(r,s)?(r=ha(),Qt=Hs=ln=null,Zs=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Gi&&s.locale!=="ko"?null:s.data;default:return null}}var Hw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!Hw[r.type]:s==="textarea"}function Pp(r,s,a,h){Gn(h),s=Zl(s,"onChange"),0<s.length&&(a=new Ws("onChange","change",null,a,h),r.push({event:a,listeners:s}))}var ma=null,ga=null;function qw(r){Kp(r,0)}function Ql(r){var s=io(r);if(Cs(s))return r}function Ww(r,s){if(r==="change")return s}var Np=!1;if(d){var lh;if(d){var uh="oninput"in document;if(!uh){var Dp=document.createElement("div");Dp.setAttribute("oninput","return;"),uh=typeof Dp.oninput=="function"}lh=uh}else lh=!1;Np=lh&&(!document.documentMode||9<document.documentMode)}function xp(){ma&&(ma.detachEvent("onpropertychange",Op),ga=ma=null)}function Op(r){if(r.propertyName==="value"&&Ql(ga)){var s=[];Pp(s,ga,r,xs(r)),na(qw,s)}}function Kw(r,s,a){r==="focusin"?(xp(),ma=s,ga=a,ma.attachEvent("onpropertychange",Op)):r==="focusout"&&xp()}function Gw(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Ql(ga)}function Qw(r,s){if(r==="click")return Ql(s)}function Yw(r,s){if(r==="input"||r==="change")return Ql(s)}function Xw(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Un=typeof Object.is=="function"?Object.is:Xw;function ya(r,s){if(Un(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),h=Object.keys(s);if(a.length!==h.length)return!1;for(h=0;h<a.length;h++){var f=a[h];if(!p.call(s,f)||!Un(r[f],s[f]))return!1}return!0}function Lp(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function bp(r,s){var a=Lp(r);r=0;for(var h;a;){if(a.nodeType===3){if(h=r+a.textContent.length,r<=s&&h>=s)return{node:a,offset:s-r};r=h}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Lp(a)}}function Vp(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Vp(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Mp(){for(var r=window,s=$r();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=$r(r.document)}return s}function ch(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function Jw(r){var s=Mp(),a=r.focusedElem,h=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&Vp(a.ownerDocument.documentElement,a)){if(h!==null&&ch(a)){if(s=h.start,r=h.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var f=a.textContent.length,g=Math.min(h.start,f);h=h.end===void 0?g:Math.min(h.end,f),!r.extend&&g>h&&(f=h,h=g,g=f),f=bp(a,g);var v=bp(a,h);f&&v&&(r.rangeCount!==1||r.anchorNode!==f.node||r.anchorOffset!==f.offset||r.focusNode!==v.node||r.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(f.node,f.offset),r.removeAllRanges(),g>h?(r.addRange(s),r.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var Zw=d&&"documentMode"in document&&11>=document.documentMode,eo=null,hh=null,_a=null,dh=!1;function Up(r,s,a){var h=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;dh||eo==null||eo!==$r(h)||(h=eo,"selectionStart"in h&&ch(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),_a&&ya(_a,h)||(_a=h,h=Zl(hh,"onSelect"),0<h.length&&(s=new Ws("onSelect","select",null,s,a),r.push({event:s,listeners:h}),s.target=eo)))}function Yl(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var to={animationend:Yl("Animation","AnimationEnd"),animationiteration:Yl("Animation","AnimationIteration"),animationstart:Yl("Animation","AnimationStart"),transitionend:Yl("Transition","TransitionEnd")},fh={},Fp={};d&&(Fp=document.createElement("div").style,"AnimationEvent"in window||(delete to.animationend.animation,delete to.animationiteration.animation,delete to.animationstart.animation),"TransitionEvent"in window||delete to.transitionend.transition);function Xl(r){if(fh[r])return fh[r];if(!to[r])return r;var s=to[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in Fp)return fh[r]=s[a];return r}var Bp=Xl("animationend"),jp=Xl("animationiteration"),zp=Xl("animationstart"),$p=Xl("transitionend"),Hp=new Map,qp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ei(r,s){Hp.set(r,s),l(s,[r])}for(var ph=0;ph<qp.length;ph++){var mh=qp[ph],eE=mh.toLowerCase(),tE=mh[0].toUpperCase()+mh.slice(1);ei(eE,"on"+tE)}ei(Bp,"onAnimationEnd"),ei(jp,"onAnimationIteration"),ei(zp,"onAnimationStart"),ei("dblclick","onDoubleClick"),ei("focusin","onFocus"),ei("focusout","onBlur"),ei($p,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var va="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nE=new Set("cancel close invalid load scroll toggle".split(" ").concat(va));function Wp(r,s,a){var h=r.type||"unknown-event";r.currentTarget=a,Cl(h,s,void 0,r),r.currentTarget=null}function Kp(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var h=r[a],f=h.event;h=h.listeners;e:{var g=void 0;if(s)for(var v=h.length-1;0<=v;v--){var R=h[v],k=R.instance,j=R.currentTarget;if(R=R.listener,k!==g&&f.isPropagationStopped())break e;Wp(f,R,j),g=k}else for(v=0;v<h.length;v++){if(R=h[v],k=R.instance,j=R.currentTarget,R=R.listener,k!==g&&f.isPropagationStopped())break e;Wp(f,R,j),g=k}}}if(Nn)throw r=ra,Nn=!1,ra=null,r}function We(r,s){var a=s[Ih];a===void 0&&(a=s[Ih]=new Set);var h=r+"__bubble";a.has(h)||(Gp(s,r,2,!1),a.add(h))}function gh(r,s,a){var h=0;s&&(h|=4),Gp(a,r,h,s)}var Jl="_reactListening"+Math.random().toString(36).slice(2);function wa(r){if(!r[Jl]){r[Jl]=!0,i.forEach(function(a){a!=="selectionchange"&&(nE.has(a)||gh(a,!1,r),gh(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Jl]||(s[Jl]=!0,gh("selectionchange",!1,s))}}function Gp(r,s,a,h){switch(ca(s)){case 1:var f=Ge;break;case 4:f=oh;break;default:f=ua}a=f.bind(null,s,a,r),f=void 0,!bs||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),h?f!==void 0?r.addEventListener(s,a,{capture:!0,passive:f}):r.addEventListener(s,a,!0):f!==void 0?r.addEventListener(s,a,{passive:f}):r.addEventListener(s,a,!1)}function yh(r,s,a,h,f){var g=h;if(!(s&1)&&!(s&2)&&h!==null)e:for(;;){if(h===null)return;var v=h.tag;if(v===3||v===4){var R=h.stateNode.containerInfo;if(R===f||R.nodeType===8&&R.parentNode===f)break;if(v===4)for(v=h.return;v!==null;){var k=v.tag;if((k===3||k===4)&&(k=v.stateNode.containerInfo,k===f||k.nodeType===8&&k.parentNode===f))return;v=v.return}for(;R!==null;){if(v=Qi(R),v===null)return;if(k=v.tag,k===5||k===6){h=g=v;continue e}R=R.parentNode}}h=h.return}na(function(){var j=g,Y=xs(a),X=[];e:{var Q=Hp.get(r);if(Q!==void 0){var ie=Ws,le=r;switch(r){case"keypress":if(qs(a)===0)break e;case"keydown":case"keyup":ie=m;break;case"focusin":le="focus",ie=Ys;break;case"focusout":le="blur",ie=Ys;break;case"beforeblur":case"afterblur":ie=Ys;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=Gs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=zl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=H;break;case Bp:case jp:case zp:ie=Sr;break;case $p:ie=Be;break;case"scroll":ie=ah;break;case"wheel":ie=Oe;break;case"copy":case"cut":case"paste":ie=ql;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=E}var ue=(s&4)!==0,ot=!ue&&r==="scroll",F=ue?Q!==null?Q+"Capture":null:Q;ue=[];for(var x=j,B;x!==null;){B=x;var ee=B.stateNode;if(B.tag===5&&ee!==null&&(B=ee,F!==null&&(ee=st(x,F),ee!=null&&ue.push(Ea(x,ee,B)))),ot)break;x=x.return}0<ue.length&&(Q=new ie(Q,le,null,a,Y),X.push({event:Q,listeners:ue}))}}if(!(s&7)){e:{if(Q=r==="mouseover"||r==="pointerover",ie=r==="mouseout"||r==="pointerout",Q&&a!==Vi&&(le=a.relatedTarget||a.fromElement)&&(Qi(le)||le[Rr]))break e;if((ie||Q)&&(Q=Y.window===Y?Y:(Q=Y.ownerDocument)?Q.defaultView||Q.parentWindow:window,ie?(le=a.relatedTarget||a.toElement,ie=j,le=le?Qi(le):null,le!==null&&(ot=Dn(le),le!==ot||le.tag!==5&&le.tag!==6)&&(le=null)):(ie=null,le=j),ie!==le)){if(ue=Gs,ee="onMouseLeave",F="onMouseEnter",x="mouse",(r==="pointerout"||r==="pointerover")&&(ue=E,ee="onPointerLeave",F="onPointerEnter",x="pointer"),ot=ie==null?Q:io(ie),B=le==null?Q:io(le),Q=new ue(ee,x+"leave",ie,a,Y),Q.target=ot,Q.relatedTarget=B,ee=null,Qi(Y)===j&&(ue=new ue(F,x+"enter",le,a,Y),ue.target=B,ue.relatedTarget=ot,ee=ue),ot=ee,ie&&le)t:{for(ue=ie,F=le,x=0,B=ue;B;B=no(B))x++;for(B=0,ee=F;ee;ee=no(ee))B++;for(;0<x-B;)ue=no(ue),x--;for(;0<B-x;)F=no(F),B--;for(;x--;){if(ue===F||F!==null&&ue===F.alternate)break t;ue=no(ue),F=no(F)}ue=null}else ue=null;ie!==null&&Qp(X,Q,ie,ue,!1),le!==null&&ot!==null&&Qp(X,ot,le,ue,!0)}}e:{if(Q=j?io(j):window,ie=Q.nodeName&&Q.nodeName.toLowerCase(),ie==="select"||ie==="input"&&Q.type==="file")var ce=Ww;else if(kp(Q))if(Np)ce=Yw;else{ce=Gw;var pe=Kw}else(ie=Q.nodeName)&&ie.toLowerCase()==="input"&&(Q.type==="checkbox"||Q.type==="radio")&&(ce=Qw);if(ce&&(ce=ce(r,j))){Pp(X,ce,a,Y);break e}pe&&pe(r,Q,j),r==="focusout"&&(pe=Q._wrapperState)&&pe.controlled&&Q.type==="number"&&Ps(Q,"number",Q.value)}switch(pe=j?io(j):window,r){case"focusin":(kp(pe)||pe.contentEditable==="true")&&(eo=pe,hh=j,_a=null);break;case"focusout":_a=hh=eo=null;break;case"mousedown":dh=!0;break;case"contextmenu":case"mouseup":case"dragend":dh=!1,Up(X,a,Y);break;case"selectionchange":if(Zw)break;case"keydown":case"keyup":Up(X,a,Y)}var me;if(lt)e:{switch(r){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else Zs?Ap(r,a)&&(Ee="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(Gi&&a.locale!=="ko"&&(Zs||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Zs&&(me=ha()):(ln=Y,Hs="value"in ln?ln.value:ln.textContent,Zs=!0)),pe=Zl(j,Ee),0<pe.length&&(Ee=new pa(Ee,r,null,a,Y),X.push({event:Ee,listeners:pe}),me?Ee.data=me:(me=Cp(a),me!==null&&(Ee.data=me)))),(me=un?zw(r,a):$w(r,a))&&(j=Zl(j,"onBeforeInput"),0<j.length&&(Y=new pa("onBeforeInput","beforeinput",null,a,Y),X.push({event:Y,listeners:j}),Y.data=me))}Kp(X,s)})}function Ea(r,s,a){return{instance:r,listener:s,currentTarget:a}}function Zl(r,s){for(var a=s+"Capture",h=[];r!==null;){var f=r,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=st(r,a),g!=null&&h.unshift(Ea(r,g,f)),g=st(r,s),g!=null&&h.push(Ea(r,g,f))),r=r.return}return h}function no(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Qp(r,s,a,h,f){for(var g=s._reactName,v=[];a!==null&&a!==h;){var R=a,k=R.alternate,j=R.stateNode;if(k!==null&&k===h)break;R.tag===5&&j!==null&&(R=j,f?(k=st(a,g),k!=null&&v.unshift(Ea(a,k,R))):f||(k=st(a,g),k!=null&&v.push(Ea(a,k,R)))),a=a.return}v.length!==0&&r.push({event:s,listeners:v})}var rE=/\r\n?/g,iE=/\u0000|\uFFFD/g;function Yp(r){return(typeof r=="string"?r:""+r).replace(rE,`
`).replace(iE,"")}function eu(r,s,a){if(s=Yp(s),Yp(r)!==s&&a)throw Error(t(425))}function tu(){}var _h=null,vh=null;function wh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Eh=typeof setTimeout=="function"?setTimeout:void 0,sE=typeof clearTimeout=="function"?clearTimeout:void 0,Xp=typeof Promise=="function"?Promise:void 0,oE=typeof queueMicrotask=="function"?queueMicrotask:typeof Xp<"u"?function(r){return Xp.resolve(null).then(r).catch(aE)}:Eh;function aE(r){setTimeout(function(){throw r})}function Th(r,s){var a=s,h=0;do{var f=a.nextSibling;if(r.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(h===0){r.removeChild(f),Vn(s);return}h--}else a!=="$"&&a!=="$?"&&a!=="$!"||h++;a=f}while(a);Vn(s)}function ti(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Jp(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var ro=Math.random().toString(36).slice(2),er="__reactFiber$"+ro,Ta="__reactProps$"+ro,Rr="__reactContainer$"+ro,Ih="__reactEvents$"+ro,lE="__reactListeners$"+ro,uE="__reactHandles$"+ro;function Qi(r){var s=r[er];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Rr]||a[er]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=Jp(r);r!==null;){if(a=r[er])return a;r=Jp(r)}return s}r=a,a=r.parentNode}return null}function Ia(r){return r=r[er]||r[Rr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function io(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function nu(r){return r[Ta]||null}var Sh=[],so=-1;function ni(r){return{current:r}}function Ke(r){0>so||(r.current=Sh[so],Sh[so]=null,so--)}function qe(r,s){so++,Sh[so]=r.current,r.current=s}var ri={},bt=ni(ri),Yt=ni(!1),Yi=ri;function oo(r,s){var a=r.type.contextTypes;if(!a)return ri;var h=r.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in a)f[g]=s[g];return h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=f),f}function Xt(r){return r=r.childContextTypes,r!=null}function ru(){Ke(Yt),Ke(bt)}function Zp(r,s,a){if(bt.current!==ri)throw Error(t(168));qe(bt,s),qe(Yt,a)}function em(r,s,a){var h=r.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return a;h=h.getChildContext();for(var f in h)if(!(f in s))throw Error(t(108,Me(r)||"Unknown",f));return se({},a,h)}function iu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||ri,Yi=bt.current,qe(bt,r),qe(Yt,Yt.current),!0}function tm(r,s,a){var h=r.stateNode;if(!h)throw Error(t(169));a?(r=em(r,s,Yi),h.__reactInternalMemoizedMergedChildContext=r,Ke(Yt),Ke(bt),qe(bt,r)):Ke(Yt),qe(Yt,a)}var Ar=null,su=!1,Rh=!1;function nm(r){Ar===null?Ar=[r]:Ar.push(r)}function cE(r){su=!0,nm(r)}function ii(){if(!Rh&&Ar!==null){Rh=!0;var r=0,s=Ne;try{var a=Ar;for(Ne=1;r<a.length;r++){var h=a[r];do h=h(!0);while(h!==null)}Ar=null,su=!1}catch(f){throw Ar!==null&&(Ar=Ar.slice(r+1)),Fs(ji,ii),f}finally{Ne=s,Rh=!1}}return null}var ao=[],lo=0,ou=null,au=0,vn=[],wn=0,Xi=null,Cr=1,kr="";function Ji(r,s){ao[lo++]=au,ao[lo++]=ou,ou=r,au=s}function rm(r,s,a){vn[wn++]=Cr,vn[wn++]=kr,vn[wn++]=Xi,Xi=r;var h=Cr;r=kr;var f=32-$t(h)-1;h&=~(1<<f),a+=1;var g=32-$t(s)+f;if(30<g){var v=f-f%5;g=(h&(1<<v)-1).toString(32),h>>=v,f-=v,Cr=1<<32-$t(s)+f|a<<f|h,kr=g+r}else Cr=1<<g|a<<f|h,kr=r}function Ah(r){r.return!==null&&(Ji(r,1),rm(r,1,0))}function Ch(r){for(;r===ou;)ou=ao[--lo],ao[lo]=null,au=ao[--lo],ao[lo]=null;for(;r===Xi;)Xi=vn[--wn],vn[wn]=null,kr=vn[--wn],vn[wn]=null,Cr=vn[--wn],vn[wn]=null}var cn=null,hn=null,Qe=!1,Fn=null;function im(r,s){var a=Sn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function sm(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,cn=r,hn=ti(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,cn=r,hn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Xi!==null?{id:Cr,overflow:kr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=Sn(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,cn=r,hn=null,!0):!1;default:return!1}}function kh(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Ph(r){if(Qe){var s=hn;if(s){var a=s;if(!sm(r,s)){if(kh(r))throw Error(t(418));s=ti(a.nextSibling);var h=cn;s&&sm(r,s)?im(h,a):(r.flags=r.flags&-4097|2,Qe=!1,cn=r)}}else{if(kh(r))throw Error(t(418));r.flags=r.flags&-4097|2,Qe=!1,cn=r}}}function om(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;cn=r}function lu(r){if(r!==cn)return!1;if(!Qe)return om(r),Qe=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!wh(r.type,r.memoizedProps)),s&&(s=hn)){if(kh(r))throw am(),Error(t(418));for(;s;)im(r,s),s=ti(s.nextSibling)}if(om(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){hn=ti(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}hn=null}}else hn=cn?ti(r.stateNode.nextSibling):null;return!0}function am(){for(var r=hn;r;)r=ti(r.nextSibling)}function uo(){hn=cn=null,Qe=!1}function Nh(r){Fn===null?Fn=[r]:Fn.push(r)}var hE=re.ReactCurrentBatchConfig;function Sa(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var h=a.stateNode}if(!h)throw Error(t(147,r));var f=h,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(v){var R=f.refs;v===null?delete R[g]:R[g]=v},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function uu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function lm(r){var s=r._init;return s(r._payload)}function um(r){function s(F,x){if(r){var B=F.deletions;B===null?(F.deletions=[x],F.flags|=16):B.push(x)}}function a(F,x){if(!r)return null;for(;x!==null;)s(F,x),x=x.sibling;return null}function h(F,x){for(F=new Map;x!==null;)x.key!==null?F.set(x.key,x):F.set(x.index,x),x=x.sibling;return F}function f(F,x){return F=di(F,x),F.index=0,F.sibling=null,F}function g(F,x,B){return F.index=B,r?(B=F.alternate,B!==null?(B=B.index,B<x?(F.flags|=2,x):B):(F.flags|=2,x)):(F.flags|=1048576,x)}function v(F){return r&&F.alternate===null&&(F.flags|=2),F}function R(F,x,B,ee){return x===null||x.tag!==6?(x=Ed(B,F.mode,ee),x.return=F,x):(x=f(x,B),x.return=F,x)}function k(F,x,B,ee){var ce=B.type;return ce===N?Y(F,x,B.props.children,ee,B.key):x!==null&&(x.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===Lt&&lm(ce)===x.type)?(ee=f(x,B.props),ee.ref=Sa(F,x,B),ee.return=F,ee):(ee=Ou(B.type,B.key,B.props,null,F.mode,ee),ee.ref=Sa(F,x,B),ee.return=F,ee)}function j(F,x,B,ee){return x===null||x.tag!==4||x.stateNode.containerInfo!==B.containerInfo||x.stateNode.implementation!==B.implementation?(x=Td(B,F.mode,ee),x.return=F,x):(x=f(x,B.children||[]),x.return=F,x)}function Y(F,x,B,ee,ce){return x===null||x.tag!==7?(x=os(B,F.mode,ee,ce),x.return=F,x):(x=f(x,B),x.return=F,x)}function X(F,x,B){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Ed(""+x,F.mode,B),x.return=F,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case we:return B=Ou(x.type,x.key,x.props,null,F.mode,B),B.ref=Sa(F,null,x),B.return=F,B;case _e:return x=Td(x,F.mode,B),x.return=F,x;case Lt:var ee=x._init;return X(F,ee(x._payload),B)}if(gr(x)||de(x))return x=os(x,F.mode,B,null),x.return=F,x;uu(F,x)}return null}function Q(F,x,B,ee){var ce=x!==null?x.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return ce!==null?null:R(F,x,""+B,ee);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case we:return B.key===ce?k(F,x,B,ee):null;case _e:return B.key===ce?j(F,x,B,ee):null;case Lt:return ce=B._init,Q(F,x,ce(B._payload),ee)}if(gr(B)||de(B))return ce!==null?null:Y(F,x,B,ee,null);uu(F,B)}return null}function ie(F,x,B,ee,ce){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return F=F.get(B)||null,R(x,F,""+ee,ce);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case we:return F=F.get(ee.key===null?B:ee.key)||null,k(x,F,ee,ce);case _e:return F=F.get(ee.key===null?B:ee.key)||null,j(x,F,ee,ce);case Lt:var pe=ee._init;return ie(F,x,B,pe(ee._payload),ce)}if(gr(ee)||de(ee))return F=F.get(B)||null,Y(x,F,ee,ce,null);uu(x,ee)}return null}function le(F,x,B,ee){for(var ce=null,pe=null,me=x,Ee=x=0,St=null;me!==null&&Ee<B.length;Ee++){me.index>Ee?(St=me,me=null):St=me.sibling;var Ve=Q(F,me,B[Ee],ee);if(Ve===null){me===null&&(me=St);break}r&&me&&Ve.alternate===null&&s(F,me),x=g(Ve,x,Ee),pe===null?ce=Ve:pe.sibling=Ve,pe=Ve,me=St}if(Ee===B.length)return a(F,me),Qe&&Ji(F,Ee),ce;if(me===null){for(;Ee<B.length;Ee++)me=X(F,B[Ee],ee),me!==null&&(x=g(me,x,Ee),pe===null?ce=me:pe.sibling=me,pe=me);return Qe&&Ji(F,Ee),ce}for(me=h(F,me);Ee<B.length;Ee++)St=ie(me,F,Ee,B[Ee],ee),St!==null&&(r&&St.alternate!==null&&me.delete(St.key===null?Ee:St.key),x=g(St,x,Ee),pe===null?ce=St:pe.sibling=St,pe=St);return r&&me.forEach(function(fi){return s(F,fi)}),Qe&&Ji(F,Ee),ce}function ue(F,x,B,ee){var ce=de(B);if(typeof ce!="function")throw Error(t(150));if(B=ce.call(B),B==null)throw Error(t(151));for(var pe=ce=null,me=x,Ee=x=0,St=null,Ve=B.next();me!==null&&!Ve.done;Ee++,Ve=B.next()){me.index>Ee?(St=me,me=null):St=me.sibling;var fi=Q(F,me,Ve.value,ee);if(fi===null){me===null&&(me=St);break}r&&me&&fi.alternate===null&&s(F,me),x=g(fi,x,Ee),pe===null?ce=fi:pe.sibling=fi,pe=fi,me=St}if(Ve.done)return a(F,me),Qe&&Ji(F,Ee),ce;if(me===null){for(;!Ve.done;Ee++,Ve=B.next())Ve=X(F,Ve.value,ee),Ve!==null&&(x=g(Ve,x,Ee),pe===null?ce=Ve:pe.sibling=Ve,pe=Ve);return Qe&&Ji(F,Ee),ce}for(me=h(F,me);!Ve.done;Ee++,Ve=B.next())Ve=ie(me,F,Ee,Ve.value,ee),Ve!==null&&(r&&Ve.alternate!==null&&me.delete(Ve.key===null?Ee:Ve.key),x=g(Ve,x,Ee),pe===null?ce=Ve:pe.sibling=Ve,pe=Ve);return r&&me.forEach(function(HE){return s(F,HE)}),Qe&&Ji(F,Ee),ce}function ot(F,x,B,ee){if(typeof B=="object"&&B!==null&&B.type===N&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case we:e:{for(var ce=B.key,pe=x;pe!==null;){if(pe.key===ce){if(ce=B.type,ce===N){if(pe.tag===7){a(F,pe.sibling),x=f(pe,B.props.children),x.return=F,F=x;break e}}else if(pe.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===Lt&&lm(ce)===pe.type){a(F,pe.sibling),x=f(pe,B.props),x.ref=Sa(F,pe,B),x.return=F,F=x;break e}a(F,pe);break}else s(F,pe);pe=pe.sibling}B.type===N?(x=os(B.props.children,F.mode,ee,B.key),x.return=F,F=x):(ee=Ou(B.type,B.key,B.props,null,F.mode,ee),ee.ref=Sa(F,x,B),ee.return=F,F=ee)}return v(F);case _e:e:{for(pe=B.key;x!==null;){if(x.key===pe)if(x.tag===4&&x.stateNode.containerInfo===B.containerInfo&&x.stateNode.implementation===B.implementation){a(F,x.sibling),x=f(x,B.children||[]),x.return=F,F=x;break e}else{a(F,x);break}else s(F,x);x=x.sibling}x=Td(B,F.mode,ee),x.return=F,F=x}return v(F);case Lt:return pe=B._init,ot(F,x,pe(B._payload),ee)}if(gr(B))return le(F,x,B,ee);if(de(B))return ue(F,x,B,ee);uu(F,B)}return typeof B=="string"&&B!==""||typeof B=="number"?(B=""+B,x!==null&&x.tag===6?(a(F,x.sibling),x=f(x,B),x.return=F,F=x):(a(F,x),x=Ed(B,F.mode,ee),x.return=F,F=x),v(F)):a(F,x)}return ot}var co=um(!0),cm=um(!1),cu=ni(null),hu=null,ho=null,Dh=null;function xh(){Dh=ho=hu=null}function Oh(r){var s=cu.current;Ke(cu),r._currentValue=s}function Lh(r,s,a){for(;r!==null;){var h=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),r===a)break;r=r.return}}function fo(r,s){hu=r,Dh=ho=null,r=r.dependencies,r!==null&&r.firstContext!==null&&(r.lanes&s&&(Jt=!0),r.firstContext=null)}function En(r){var s=r._currentValue;if(Dh!==r)if(r={context:r,memoizedValue:s,next:null},ho===null){if(hu===null)throw Error(t(308));ho=r,hu.dependencies={lanes:0,firstContext:r}}else ho=ho.next=r;return s}var Zi=null;function bh(r){Zi===null?Zi=[r]:Zi.push(r)}function hm(r,s,a,h){var f=s.interleaved;return f===null?(a.next=a,bh(s)):(a.next=f.next,f.next=a),s.interleaved=a,Pr(r,h)}function Pr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var si=!1;function Vh(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dm(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Nr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function oi(r,s,a){var h=r.updateQueue;if(h===null)return null;if(h=h.shared,be&2){var f=h.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),h.pending=s,Pr(r,a)}return f=h.interleaved,f===null?(s.next=s,bh(h)):(s.next=f.next,f.next=s),h.interleaved=s,Pr(r,a)}function du(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var h=s.lanes;h&=r.pendingLanes,a|=h,s.lanes=a,Qr(r,a)}}function fm(r,s){var a=r.updateQueue,h=r.alternate;if(h!==null&&(h=h.updateQueue,a===h)){var f=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?f=g=v:g=g.next=v,a=a.next}while(a!==null);g===null?f=g=s:g=g.next=s}else f=g=s;a={baseState:h.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:h.shared,effects:h.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function fu(r,s,a,h){var f=r.updateQueue;si=!1;var g=f.firstBaseUpdate,v=f.lastBaseUpdate,R=f.shared.pending;if(R!==null){f.shared.pending=null;var k=R,j=k.next;k.next=null,v===null?g=j:v.next=j,v=k;var Y=r.alternate;Y!==null&&(Y=Y.updateQueue,R=Y.lastBaseUpdate,R!==v&&(R===null?Y.firstBaseUpdate=j:R.next=j,Y.lastBaseUpdate=k))}if(g!==null){var X=f.baseState;v=0,Y=j=k=null,R=g;do{var Q=R.lane,ie=R.eventTime;if((h&Q)===Q){Y!==null&&(Y=Y.next={eventTime:ie,lane:0,tag:R.tag,payload:R.payload,callback:R.callback,next:null});e:{var le=r,ue=R;switch(Q=s,ie=a,ue.tag){case 1:if(le=ue.payload,typeof le=="function"){X=le.call(ie,X,Q);break e}X=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ue.payload,Q=typeof le=="function"?le.call(ie,X,Q):le,Q==null)break e;X=se({},X,Q);break e;case 2:si=!0}}R.callback!==null&&R.lane!==0&&(r.flags|=64,Q=f.effects,Q===null?f.effects=[R]:Q.push(R))}else ie={eventTime:ie,lane:Q,tag:R.tag,payload:R.payload,callback:R.callback,next:null},Y===null?(j=Y=ie,k=X):Y=Y.next=ie,v|=Q;if(R=R.next,R===null){if(R=f.shared.pending,R===null)break;Q=R,R=Q.next,Q.next=null,f.lastBaseUpdate=Q,f.shared.pending=null}}while(!0);if(Y===null&&(k=X),f.baseState=k,f.firstBaseUpdate=j,f.lastBaseUpdate=Y,s=f.shared.interleaved,s!==null){f=s;do v|=f.lane,f=f.next;while(f!==s)}else g===null&&(f.shared.lanes=0);ns|=v,r.lanes=v,r.memoizedState=X}}function pm(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var h=r[s],f=h.callback;if(f!==null){if(h.callback=null,h=a,typeof f!="function")throw Error(t(191,f));f.call(h)}}}var Ra={},tr=ni(Ra),Aa=ni(Ra),Ca=ni(Ra);function es(r){if(r===Ra)throw Error(t(174));return r}function Mh(r,s){switch(qe(Ca,s),qe(Aa,r),qe(tr,Ra),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:ft(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=ft(s,r)}Ke(tr),qe(tr,s)}function po(){Ke(tr),Ke(Aa),Ke(Ca)}function mm(r){es(Ca.current);var s=es(tr.current),a=ft(s,r.type);s!==a&&(qe(Aa,r),qe(tr,a))}function Uh(r){Aa.current===r&&(Ke(tr),Ke(Aa))}var Xe=ni(0);function pu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Fh=[];function Bh(){for(var r=0;r<Fh.length;r++)Fh[r]._workInProgressVersionPrimary=null;Fh.length=0}var mu=re.ReactCurrentDispatcher,jh=re.ReactCurrentBatchConfig,ts=0,Je=null,mt=null,Tt=null,gu=!1,ka=!1,Pa=0,dE=0;function Vt(){throw Error(t(321))}function zh(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!Un(r[a],s[a]))return!1;return!0}function $h(r,s,a,h,f,g){if(ts=g,Je=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,mu.current=r===null||r.memoizedState===null?gE:yE,r=a(h,f),ka){g=0;do{if(ka=!1,Pa=0,25<=g)throw Error(t(301));g+=1,Tt=mt=null,s.updateQueue=null,mu.current=_E,r=a(h,f)}while(ka)}if(mu.current=vu,s=mt!==null&&mt.next!==null,ts=0,Tt=mt=Je=null,gu=!1,s)throw Error(t(300));return r}function Hh(){var r=Pa!==0;return Pa=0,r}function nr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?Je.memoizedState=Tt=r:Tt=Tt.next=r,Tt}function Tn(){if(mt===null){var r=Je.alternate;r=r!==null?r.memoizedState:null}else r=mt.next;var s=Tt===null?Je.memoizedState:Tt.next;if(s!==null)Tt=s,mt=r;else{if(r===null)throw Error(t(310));mt=r,r={memoizedState:mt.memoizedState,baseState:mt.baseState,baseQueue:mt.baseQueue,queue:mt.queue,next:null},Tt===null?Je.memoizedState=Tt=r:Tt=Tt.next=r}return Tt}function Na(r,s){return typeof s=="function"?s(r):s}function qh(r){var s=Tn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=mt,f=h.baseQueue,g=a.pending;if(g!==null){if(f!==null){var v=f.next;f.next=g.next,g.next=v}h.baseQueue=f=g,a.pending=null}if(f!==null){g=f.next,h=h.baseState;var R=v=null,k=null,j=g;do{var Y=j.lane;if((ts&Y)===Y)k!==null&&(k=k.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),h=j.hasEagerState?j.eagerState:r(h,j.action);else{var X={lane:Y,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};k===null?(R=k=X,v=h):k=k.next=X,Je.lanes|=Y,ns|=Y}j=j.next}while(j!==null&&j!==g);k===null?v=h:k.next=R,Un(h,s.memoizedState)||(Jt=!0),s.memoizedState=h,s.baseState=v,s.baseQueue=k,a.lastRenderedState=h}if(r=a.interleaved,r!==null){f=r;do g=f.lane,Je.lanes|=g,ns|=g,f=f.next;while(f!==r)}else f===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Wh(r){var s=Tn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=a.dispatch,f=a.pending,g=s.memoizedState;if(f!==null){a.pending=null;var v=f=f.next;do g=r(g,v.action),v=v.next;while(v!==f);Un(g,s.memoizedState)||(Jt=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,h]}function gm(){}function ym(r,s){var a=Je,h=Tn(),f=s(),g=!Un(h.memoizedState,f);if(g&&(h.memoizedState=f,Jt=!0),h=h.queue,Kh(wm.bind(null,a,h,r),[r]),h.getSnapshot!==s||g||Tt!==null&&Tt.memoizedState.tag&1){if(a.flags|=2048,Da(9,vm.bind(null,a,h,f,s),void 0,null),It===null)throw Error(t(349));ts&30||_m(a,s,f)}return f}function _m(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=Je.updateQueue,s===null?(s={lastEffect:null,stores:null},Je.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function vm(r,s,a,h){s.value=a,s.getSnapshot=h,Em(s)&&Tm(r)}function wm(r,s,a){return a(function(){Em(s)&&Tm(r)})}function Em(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!Un(r,a)}catch{return!0}}function Tm(r){var s=Pr(r,1);s!==null&&$n(s,r,1,-1)}function Im(r){var s=nr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:r},s.queue=r,r=r.dispatch=mE.bind(null,Je,r),[s.memoizedState,r]}function Da(r,s,a,h){return r={tag:r,create:s,destroy:a,deps:h,next:null},s=Je.updateQueue,s===null?(s={lastEffect:null,stores:null},Je.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(h=a.next,a.next=r,r.next=h,s.lastEffect=r)),r}function Sm(){return Tn().memoizedState}function yu(r,s,a,h){var f=nr();Je.flags|=r,f.memoizedState=Da(1|s,a,void 0,h===void 0?null:h)}function _u(r,s,a,h){var f=Tn();h=h===void 0?null:h;var g=void 0;if(mt!==null){var v=mt.memoizedState;if(g=v.destroy,h!==null&&zh(h,v.deps)){f.memoizedState=Da(s,a,g,h);return}}Je.flags|=r,f.memoizedState=Da(1|s,a,g,h)}function Rm(r,s){return yu(8390656,8,r,s)}function Kh(r,s){return _u(2048,8,r,s)}function Am(r,s){return _u(4,2,r,s)}function Cm(r,s){return _u(4,4,r,s)}function km(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Pm(r,s,a){return a=a!=null?a.concat([r]):null,_u(4,4,km.bind(null,s,r),a)}function Gh(){}function Nm(r,s){var a=Tn();s=s===void 0?null:s;var h=a.memoizedState;return h!==null&&s!==null&&zh(s,h[1])?h[0]:(a.memoizedState=[r,s],r)}function Dm(r,s){var a=Tn();s=s===void 0?null:s;var h=a.memoizedState;return h!==null&&s!==null&&zh(s,h[1])?h[0]:(r=r(),a.memoizedState=[r,s],r)}function xm(r,s,a){return ts&21?(Un(a,s)||(a=Hi(),Je.lanes|=a,ns|=a,r.baseState=!0),s):(r.baseState&&(r.baseState=!1,Jt=!0),r.memoizedState=a)}function fE(r,s){var a=Ne;Ne=a!==0&&4>a?a:4,r(!0);var h=jh.transition;jh.transition={};try{r(!1),s()}finally{Ne=a,jh.transition=h}}function Om(){return Tn().memoizedState}function pE(r,s,a){var h=ci(r);if(a={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null},Lm(r))bm(s,a);else if(a=hm(r,s,a,h),a!==null){var f=Wt();$n(a,r,h,f),Vm(a,s,h)}}function mE(r,s,a){var h=ci(r),f={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null};if(Lm(r))bm(s,f);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var v=s.lastRenderedState,R=g(v,a);if(f.hasEagerState=!0,f.eagerState=R,Un(R,v)){var k=s.interleaved;k===null?(f.next=f,bh(s)):(f.next=k.next,k.next=f),s.interleaved=f;return}}catch{}finally{}a=hm(r,s,f,h),a!==null&&(f=Wt(),$n(a,r,h,f),Vm(a,s,h))}}function Lm(r){var s=r.alternate;return r===Je||s!==null&&s===Je}function bm(r,s){ka=gu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function Vm(r,s,a){if(a&4194240){var h=s.lanes;h&=r.pendingLanes,a|=h,s.lanes=a,Qr(r,a)}}var vu={readContext:En,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},gE={readContext:En,useCallback:function(r,s){return nr().memoizedState=[r,s===void 0?null:s],r},useContext:En,useEffect:Rm,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,yu(4194308,4,km.bind(null,s,r),a)},useLayoutEffect:function(r,s){return yu(4194308,4,r,s)},useInsertionEffect:function(r,s){return yu(4,2,r,s)},useMemo:function(r,s){var a=nr();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var h=nr();return s=a!==void 0?a(s):s,h.memoizedState=h.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},h.queue=r,r=r.dispatch=pE.bind(null,Je,r),[h.memoizedState,r]},useRef:function(r){var s=nr();return r={current:r},s.memoizedState=r},useState:Im,useDebugValue:Gh,useDeferredValue:function(r){return nr().memoizedState=r},useTransition:function(){var r=Im(!1),s=r[0];return r=fE.bind(null,r[1]),nr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var h=Je,f=nr();if(Qe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),It===null)throw Error(t(349));ts&30||_m(h,s,a)}f.memoizedState=a;var g={value:a,getSnapshot:s};return f.queue=g,Rm(wm.bind(null,h,g,r),[r]),h.flags|=2048,Da(9,vm.bind(null,h,g,a,s),void 0,null),a},useId:function(){var r=nr(),s=It.identifierPrefix;if(Qe){var a=kr,h=Cr;a=(h&~(1<<32-$t(h)-1)).toString(32)+a,s=":"+s+"R"+a,a=Pa++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=dE++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},yE={readContext:En,useCallback:Nm,useContext:En,useEffect:Kh,useImperativeHandle:Pm,useInsertionEffect:Am,useLayoutEffect:Cm,useMemo:Dm,useReducer:qh,useRef:Sm,useState:function(){return qh(Na)},useDebugValue:Gh,useDeferredValue:function(r){var s=Tn();return xm(s,mt.memoizedState,r)},useTransition:function(){var r=qh(Na)[0],s=Tn().memoizedState;return[r,s]},useMutableSource:gm,useSyncExternalStore:ym,useId:Om,unstable_isNewReconciler:!1},_E={readContext:En,useCallback:Nm,useContext:En,useEffect:Kh,useImperativeHandle:Pm,useInsertionEffect:Am,useLayoutEffect:Cm,useMemo:Dm,useReducer:Wh,useRef:Sm,useState:function(){return Wh(Na)},useDebugValue:Gh,useDeferredValue:function(r){var s=Tn();return mt===null?s.memoizedState=r:xm(s,mt.memoizedState,r)},useTransition:function(){var r=Wh(Na)[0],s=Tn().memoizedState;return[r,s]},useMutableSource:gm,useSyncExternalStore:ym,useId:Om,unstable_isNewReconciler:!1};function Bn(r,s){if(r&&r.defaultProps){s=se({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function Qh(r,s,a,h){s=r.memoizedState,a=a(h,s),a=a==null?s:se({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var wu={isMounted:function(r){return(r=r._reactInternals)?Dn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var h=Wt(),f=ci(r),g=Nr(h,f);g.payload=s,a!=null&&(g.callback=a),s=oi(r,g,f),s!==null&&($n(s,r,f,h),du(s,r,f))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var h=Wt(),f=ci(r),g=Nr(h,f);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=oi(r,g,f),s!==null&&($n(s,r,f,h),du(s,r,f))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Wt(),h=ci(r),f=Nr(a,h);f.tag=2,s!=null&&(f.callback=s),s=oi(r,f,h),s!==null&&($n(s,r,h,a),du(s,r,h))}};function Mm(r,s,a,h,f,g,v){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(h,g,v):s.prototype&&s.prototype.isPureReactComponent?!ya(a,h)||!ya(f,g):!0}function Um(r,s,a){var h=!1,f=ri,g=s.contextType;return typeof g=="object"&&g!==null?g=En(g):(f=Xt(s)?Yi:bt.current,h=s.contextTypes,g=(h=h!=null)?oo(r,f):ri),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=wu,r.stateNode=s,s._reactInternals=r,h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=f,r.__reactInternalMemoizedMaskedChildContext=g),s}function Fm(r,s,a,h){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,h),s.state!==r&&wu.enqueueReplaceState(s,s.state,null)}function Yh(r,s,a,h){var f=r.stateNode;f.props=a,f.state=r.memoizedState,f.refs={},Vh(r);var g=s.contextType;typeof g=="object"&&g!==null?f.context=En(g):(g=Xt(s)?Yi:bt.current,f.context=oo(r,g)),f.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(Qh(r,s,g,a),f.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(s=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),s!==f.state&&wu.enqueueReplaceState(f,f.state,null),fu(r,a,f,h),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308)}function mo(r,s){try{var a="",h=s;do a+=Ae(h),h=h.return;while(h);var f=a}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:f,digest:null}}function Xh(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function Jh(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var vE=typeof WeakMap=="function"?WeakMap:Map;function Bm(r,s,a){a=Nr(-1,a),a.tag=3,a.payload={element:null};var h=s.value;return a.callback=function(){Cu||(Cu=!0,fd=h),Jh(r,s)},a}function jm(r,s,a){a=Nr(-1,a),a.tag=3;var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var f=s.value;a.payload=function(){return h(f)},a.callback=function(){Jh(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Jh(r,s),typeof h!="function"&&(li===null?li=new Set([this]):li.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),a}function zm(r,s,a){var h=r.pingCache;if(h===null){h=r.pingCache=new vE;var f=new Set;h.set(s,f)}else f=h.get(s),f===void 0&&(f=new Set,h.set(s,f));f.has(a)||(f.add(a),r=OE.bind(null,r,s,a),s.then(r,r))}function $m(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function Hm(r,s,a,h,f){return r.mode&1?(r.flags|=65536,r.lanes=f,r):(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Nr(-1,1),s.tag=2,oi(a,s,1))),a.lanes|=1),r)}var wE=re.ReactCurrentOwner,Jt=!1;function qt(r,s,a,h){s.child=r===null?cm(s,null,a,h):co(s,r.child,a,h)}function qm(r,s,a,h,f){a=a.render;var g=s.ref;return fo(s,f),h=$h(r,s,a,h,g,f),a=Hh(),r!==null&&!Jt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Dr(r,s,f)):(Qe&&a&&Ah(s),s.flags|=1,qt(r,s,h,f),s.child)}function Wm(r,s,a,h,f){if(r===null){var g=a.type;return typeof g=="function"&&!wd(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,Km(r,s,g,h,f)):(r=Ou(a.type,null,h,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,!(r.lanes&f)){var v=g.memoizedProps;if(a=a.compare,a=a!==null?a:ya,a(v,h)&&r.ref===s.ref)return Dr(r,s,f)}return s.flags|=1,r=di(g,h),r.ref=s.ref,r.return=s,s.child=r}function Km(r,s,a,h,f){if(r!==null){var g=r.memoizedProps;if(ya(g,h)&&r.ref===s.ref)if(Jt=!1,s.pendingProps=h=g,(r.lanes&f)!==0)r.flags&131072&&(Jt=!0);else return s.lanes=r.lanes,Dr(r,s,f)}return Zh(r,s,a,h,f)}function Gm(r,s,a){var h=s.pendingProps,f=h.children,g=r!==null?r.memoizedState:null;if(h.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe(yo,dn),dn|=a;else{if(!(a&1073741824))return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,qe(yo,dn),dn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=g!==null?g.baseLanes:a,qe(yo,dn),dn|=h}else g!==null?(h=g.baseLanes|a,s.memoizedState=null):h=a,qe(yo,dn),dn|=h;return qt(r,s,f,a),s.child}function Qm(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Zh(r,s,a,h,f){var g=Xt(a)?Yi:bt.current;return g=oo(s,g),fo(s,f),a=$h(r,s,a,h,g,f),h=Hh(),r!==null&&!Jt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Dr(r,s,f)):(Qe&&h&&Ah(s),s.flags|=1,qt(r,s,a,f),s.child)}function Ym(r,s,a,h,f){if(Xt(a)){var g=!0;iu(s)}else g=!1;if(fo(s,f),s.stateNode===null)Tu(r,s),Um(s,a,h),Yh(s,a,h,f),h=!0;else if(r===null){var v=s.stateNode,R=s.memoizedProps;v.props=R;var k=v.context,j=a.contextType;typeof j=="object"&&j!==null?j=En(j):(j=Xt(a)?Yi:bt.current,j=oo(s,j));var Y=a.getDerivedStateFromProps,X=typeof Y=="function"||typeof v.getSnapshotBeforeUpdate=="function";X||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(R!==h||k!==j)&&Fm(s,v,h,j),si=!1;var Q=s.memoizedState;v.state=Q,fu(s,h,v,f),k=s.memoizedState,R!==h||Q!==k||Yt.current||si?(typeof Y=="function"&&(Qh(s,a,Y,h),k=s.memoizedState),(R=si||Mm(s,a,R,h,Q,k,j))?(X||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=k),v.props=h,v.state=k,v.context=j,h=R):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{v=s.stateNode,dm(r,s),R=s.memoizedProps,j=s.type===s.elementType?R:Bn(s.type,R),v.props=j,X=s.pendingProps,Q=v.context,k=a.contextType,typeof k=="object"&&k!==null?k=En(k):(k=Xt(a)?Yi:bt.current,k=oo(s,k));var ie=a.getDerivedStateFromProps;(Y=typeof ie=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(R!==X||Q!==k)&&Fm(s,v,h,k),si=!1,Q=s.memoizedState,v.state=Q,fu(s,h,v,f);var le=s.memoizedState;R!==X||Q!==le||Yt.current||si?(typeof ie=="function"&&(Qh(s,a,ie,h),le=s.memoizedState),(j=si||Mm(s,a,j,h,Q,le,k)||!1)?(Y||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(h,le,k),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(h,le,k)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||R===r.memoizedProps&&Q===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||R===r.memoizedProps&&Q===r.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=le),v.props=h,v.state=le,v.context=k,h=j):(typeof v.componentDidUpdate!="function"||R===r.memoizedProps&&Q===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||R===r.memoizedProps&&Q===r.memoizedState||(s.flags|=1024),h=!1)}return ed(r,s,a,h,g,f)}function ed(r,s,a,h,f,g){Qm(r,s);var v=(s.flags&128)!==0;if(!h&&!v)return f&&tm(s,a,!1),Dr(r,s,g);h=s.stateNode,wE.current=s;var R=v&&typeof a.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,r!==null&&v?(s.child=co(s,r.child,null,g),s.child=co(s,null,R,g)):qt(r,s,R,g),s.memoizedState=h.state,f&&tm(s,a,!0),s.child}function Xm(r){var s=r.stateNode;s.pendingContext?Zp(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Zp(r,s.context,!1),Mh(r,s.containerInfo)}function Jm(r,s,a,h,f){return uo(),Nh(f),s.flags|=256,qt(r,s,a,h),s.child}var td={dehydrated:null,treeContext:null,retryLane:0};function nd(r){return{baseLanes:r,cachePool:null,transitions:null}}function Zm(r,s,a){var h=s.pendingProps,f=Xe.current,g=!1,v=(s.flags&128)!==0,R;if((R=v)||(R=r!==null&&r.memoizedState===null?!1:(f&2)!==0),R?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(f|=1),qe(Xe,f&1),r===null)return Ph(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?(s.mode&1?r.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(v=h.children,r=h.fallback,g?(h=s.mode,g=s.child,v={mode:"hidden",children:v},!(h&1)&&g!==null?(g.childLanes=0,g.pendingProps=v):g=Lu(v,h,0,null),r=os(r,h,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=nd(a),s.memoizedState=td,r):rd(s,v));if(f=r.memoizedState,f!==null&&(R=f.dehydrated,R!==null))return EE(r,s,v,h,R,f,a);if(g){g=h.fallback,v=s.mode,f=r.child,R=f.sibling;var k={mode:"hidden",children:h.children};return!(v&1)&&s.child!==f?(h=s.child,h.childLanes=0,h.pendingProps=k,s.deletions=null):(h=di(f,k),h.subtreeFlags=f.subtreeFlags&14680064),R!==null?g=di(R,g):(g=os(g,v,a,null),g.flags|=2),g.return=s,h.return=s,h.sibling=g,s.child=h,h=g,g=s.child,v=r.child.memoizedState,v=v===null?nd(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},g.memoizedState=v,g.childLanes=r.childLanes&~a,s.memoizedState=td,h}return g=r.child,r=g.sibling,h=di(g,{mode:"visible",children:h.children}),!(s.mode&1)&&(h.lanes=a),h.return=s,h.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=h,s.memoizedState=null,h}function rd(r,s){return s=Lu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Eu(r,s,a,h){return h!==null&&Nh(h),co(s,r.child,null,a),r=rd(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function EE(r,s,a,h,f,g,v){if(a)return s.flags&256?(s.flags&=-257,h=Xh(Error(t(422))),Eu(r,s,v,h)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=h.fallback,f=s.mode,h=Lu({mode:"visible",children:h.children},f,0,null),g=os(g,f,v,null),g.flags|=2,h.return=s,g.return=s,h.sibling=g,s.child=h,s.mode&1&&co(s,r.child,null,v),s.child.memoizedState=nd(v),s.memoizedState=td,g);if(!(s.mode&1))return Eu(r,s,v,null);if(f.data==="$!"){if(h=f.nextSibling&&f.nextSibling.dataset,h)var R=h.dgst;return h=R,g=Error(t(419)),h=Xh(g,h,void 0),Eu(r,s,v,h)}if(R=(v&r.childLanes)!==0,Jt||R){if(h=It,h!==null){switch(v&-v){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=f&(h.suspendedLanes|v)?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Pr(r,f),$n(h,r,f,-1))}return vd(),h=Xh(Error(t(421))),Eu(r,s,v,h)}return f.data==="$?"?(s.flags|=128,s.child=r.child,s=LE.bind(null,r),f._reactRetry=s,null):(r=g.treeContext,hn=ti(f.nextSibling),cn=s,Qe=!0,Fn=null,r!==null&&(vn[wn++]=Cr,vn[wn++]=kr,vn[wn++]=Xi,Cr=r.id,kr=r.overflow,Xi=s),s=rd(s,h.children),s.flags|=4096,s)}function eg(r,s,a){r.lanes|=s;var h=r.alternate;h!==null&&(h.lanes|=s),Lh(r.return,s,a)}function id(r,s,a,h,f){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:a,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=h,g.tail=a,g.tailMode=f)}function tg(r,s,a){var h=s.pendingProps,f=h.revealOrder,g=h.tail;if(qt(r,s,h.children,a),h=Xe.current,h&2)h=h&1|2,s.flags|=128;else{if(r!==null&&r.flags&128)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&eg(r,a,s);else if(r.tag===19)eg(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}h&=1}if(qe(Xe,h),!(s.mode&1))s.memoizedState=null;else switch(f){case"forwards":for(a=s.child,f=null;a!==null;)r=a.alternate,r!==null&&pu(r)===null&&(f=a),a=a.sibling;a=f,a===null?(f=s.child,s.child=null):(f=a.sibling,a.sibling=null),id(s,!1,f,a,g);break;case"backwards":for(a=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&pu(r)===null){s.child=f;break}r=f.sibling,f.sibling=a,a=f,f=r}id(s,!0,a,null,g);break;case"together":id(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Tu(r,s){!(s.mode&1)&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Dr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),ns|=s.lanes,!(a&s.childLanes))return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=di(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=di(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function TE(r,s,a){switch(s.tag){case 3:Xm(s),uo();break;case 5:mm(s);break;case 1:Xt(s.type)&&iu(s);break;case 4:Mh(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,f=s.memoizedProps.value;qe(cu,h._currentValue),h._currentValue=f;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(qe(Xe,Xe.current&1),s.flags|=128,null):a&s.child.childLanes?Zm(r,s,a):(qe(Xe,Xe.current&1),r=Dr(r,s,a),r!==null?r.sibling:null);qe(Xe,Xe.current&1);break;case 19:if(h=(a&s.childLanes)!==0,r.flags&128){if(h)return tg(r,s,a);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),qe(Xe,Xe.current),h)break;return null;case 22:case 23:return s.lanes=0,Gm(r,s,a)}return Dr(r,s,a)}var ng,sd,rg,ig;ng=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},sd=function(){},rg=function(r,s,a,h){var f=r.memoizedProps;if(f!==h){r=s.stateNode,es(tr.current);var g=null;switch(a){case"input":f=Oi(r,f),h=Oi(r,h),g=[];break;case"select":f=se({},f,{value:void 0}),h=se({},h,{value:void 0}),g=[];break;case"textarea":f=Wo(r,f),h=Wo(r,h),g=[];break;default:typeof f.onClick!="function"&&typeof h.onClick=="function"&&(r.onclick=tu)}Jo(a,h);var v;a=null;for(j in f)if(!h.hasOwnProperty(j)&&f.hasOwnProperty(j)&&f[j]!=null)if(j==="style"){var R=f[j];for(v in R)R.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(o.hasOwnProperty(j)?g||(g=[]):(g=g||[]).push(j,null));for(j in h){var k=h[j];if(R=f!=null?f[j]:void 0,h.hasOwnProperty(j)&&k!==R&&(k!=null||R!=null))if(j==="style")if(R){for(v in R)!R.hasOwnProperty(v)||k&&k.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in k)k.hasOwnProperty(v)&&R[v]!==k[v]&&(a||(a={}),a[v]=k[v])}else a||(g||(g=[]),g.push(j,a)),a=k;else j==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,R=R?R.__html:void 0,k!=null&&R!==k&&(g=g||[]).push(j,k)):j==="children"?typeof k!="string"&&typeof k!="number"||(g=g||[]).push(j,""+k):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(o.hasOwnProperty(j)?(k!=null&&j==="onScroll"&&We("scroll",r),g||R===k||(g=[])):(g=g||[]).push(j,k))}a&&(g=g||[]).push("style",a);var j=g;(s.updateQueue=j)&&(s.flags|=4)}},ig=function(r,s,a,h){a!==h&&(s.flags|=4)};function xa(r,s){if(!Qe)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var h=null;a!==null;)a.alternate!==null&&(h=a),a=a.sibling;h===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:h.sibling=null}}function Mt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,h=0;if(s)for(var f=r.child;f!==null;)a|=f.lanes|f.childLanes,h|=f.subtreeFlags&14680064,h|=f.flags&14680064,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)a|=f.lanes|f.childLanes,h|=f.subtreeFlags,h|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=h,r.childLanes=a,s}function IE(r,s,a){var h=s.pendingProps;switch(Ch(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(s),null;case 1:return Xt(s.type)&&ru(),Mt(s),null;case 3:return h=s.stateNode,po(),Ke(Yt),Ke(bt),Bh(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(r===null||r.child===null)&&(lu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,Fn!==null&&(gd(Fn),Fn=null))),sd(r,s),Mt(s),null;case 5:Uh(s);var f=es(Ca.current);if(a=s.type,r!==null&&s.stateNode!=null)rg(r,s,a,h,f),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return Mt(s),null}if(r=es(tr.current),lu(s)){h=s.stateNode,a=s.type;var g=s.memoizedProps;switch(h[er]=s,h[Ta]=g,r=(s.mode&1)!==0,a){case"dialog":We("cancel",h),We("close",h);break;case"iframe":case"object":case"embed":We("load",h);break;case"video":case"audio":for(f=0;f<va.length;f++)We(va[f],h);break;case"source":We("error",h);break;case"img":case"image":case"link":We("error",h),We("load",h);break;case"details":We("toggle",h);break;case"input":ks(h,g),We("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!g.multiple},We("invalid",h);break;case"textarea":Ns(h,g),We("invalid",h)}Jo(a,g),f=null;for(var v in g)if(g.hasOwnProperty(v)){var R=g[v];v==="children"?typeof R=="string"?h.textContent!==R&&(g.suppressHydrationWarning!==!0&&eu(h.textContent,R,r),f=["children",R]):typeof R=="number"&&h.textContent!==""+R&&(g.suppressHydrationWarning!==!0&&eu(h.textContent,R,r),f=["children",""+R]):o.hasOwnProperty(v)&&R!=null&&v==="onScroll"&&We("scroll",h)}switch(a){case"input":mr(h),Al(h,g,!0);break;case"textarea":mr(h),Ko(h);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(h.onclick=tu)}h=f,s.updateQueue=h,h!==null&&(s.flags|=4)}else{v=f.nodeType===9?f:f.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=dt(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=v.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof h.is=="string"?r=v.createElement(a,{is:h.is}):(r=v.createElement(a),a==="select"&&(v=r,h.multiple?v.multiple=!0:h.size&&(v.size=h.size))):r=v.createElementNS(r,a),r[er]=s,r[Ta]=h,ng(r,s,!1,!1),s.stateNode=r;e:{switch(v=Zo(a,h),a){case"dialog":We("cancel",r),We("close",r),f=h;break;case"iframe":case"object":case"embed":We("load",r),f=h;break;case"video":case"audio":for(f=0;f<va.length;f++)We(va[f],r);f=h;break;case"source":We("error",r),f=h;break;case"img":case"image":case"link":We("error",r),We("load",r),f=h;break;case"details":We("toggle",r),f=h;break;case"input":ks(r,h),f=Oi(r,h),We("invalid",r);break;case"option":f=h;break;case"select":r._wrapperState={wasMultiple:!!h.multiple},f=se({},h,{value:void 0}),We("invalid",r);break;case"textarea":Ns(r,h),f=Wo(r,h),We("invalid",r);break;default:f=h}Jo(a,f),R=f;for(g in R)if(R.hasOwnProperty(g)){var k=R[g];g==="style"?Yo(r,k):g==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Go(r,k)):g==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&Hr(r,k):typeof k=="number"&&Hr(r,""+k):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?k!=null&&g==="onScroll"&&We("scroll",r):k!=null&&Z(r,g,k,v))}switch(a){case"input":mr(r),Al(r,h,!1);break;case"textarea":mr(r),Ko(r);break;case"option":h.value!=null&&r.setAttribute("value",""+Ue(h.value));break;case"select":r.multiple=!!h.multiple,g=h.value,g!=null?yr(r,!!h.multiple,g,!1):h.defaultValue!=null&&yr(r,!!h.multiple,h.defaultValue,!0);break;default:typeof f.onClick=="function"&&(r.onclick=tu)}switch(a){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Mt(s),null;case 6:if(r&&s.stateNode!=null)ig(r,s,r.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(a=es(Ca.current),es(tr.current),lu(s)){if(h=s.stateNode,a=s.memoizedProps,h[er]=s,(g=h.nodeValue!==a)&&(r=cn,r!==null))switch(r.tag){case 3:eu(h.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&eu(h.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else h=(a.nodeType===9?a:a.ownerDocument).createTextNode(h),h[er]=s,s.stateNode=h}return Mt(s),null;case 13:if(Ke(Xe),h=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Qe&&hn!==null&&s.mode&1&&!(s.flags&128))am(),uo(),s.flags|=98560,g=!1;else if(g=lu(s),h!==null&&h.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[er]=s}else uo(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;Mt(s),g=!1}else Fn!==null&&(gd(Fn),Fn=null),g=!0;if(!g)return s.flags&65536?s:null}return s.flags&128?(s.lanes=a,s):(h=h!==null,h!==(r!==null&&r.memoizedState!==null)&&h&&(s.child.flags|=8192,s.mode&1&&(r===null||Xe.current&1?gt===0&&(gt=3):vd())),s.updateQueue!==null&&(s.flags|=4),Mt(s),null);case 4:return po(),sd(r,s),r===null&&wa(s.stateNode.containerInfo),Mt(s),null;case 10:return Oh(s.type._context),Mt(s),null;case 17:return Xt(s.type)&&ru(),Mt(s),null;case 19:if(Ke(Xe),g=s.memoizedState,g===null)return Mt(s),null;if(h=(s.flags&128)!==0,v=g.rendering,v===null)if(h)xa(g,!1);else{if(gt!==0||r!==null&&r.flags&128)for(r=s.child;r!==null;){if(v=pu(r),v!==null){for(s.flags|=128,xa(g,!1),h=v.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=a,a=s.child;a!==null;)g=a,r=h,g.flags&=14680066,v=g.alternate,v===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=v.childLanes,g.lanes=v.lanes,g.child=v.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=v.memoizedProps,g.memoizedState=v.memoizedState,g.updateQueue=v.updateQueue,g.type=v.type,r=v.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return qe(Xe,Xe.current&1|2),s.child}r=r.sibling}g.tail!==null&&He()>_o&&(s.flags|=128,h=!0,xa(g,!1),s.lanes=4194304)}else{if(!h)if(r=pu(v),r!==null){if(s.flags|=128,h=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),xa(g,!0),g.tail===null&&g.tailMode==="hidden"&&!v.alternate&&!Qe)return Mt(s),null}else 2*He()-g.renderingStartTime>_o&&a!==1073741824&&(s.flags|=128,h=!0,xa(g,!1),s.lanes=4194304);g.isBackwards?(v.sibling=s.child,s.child=v):(a=g.last,a!==null?a.sibling=v:s.child=v,g.last=v)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=He(),s.sibling=null,a=Xe.current,qe(Xe,h?a&1|2:a&1),s):(Mt(s),null);case 22:case 23:return _d(),h=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==h&&(s.flags|=8192),h&&s.mode&1?dn&1073741824&&(Mt(s),s.subtreeFlags&6&&(s.flags|=8192)):Mt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function SE(r,s){switch(Ch(s),s.tag){case 1:return Xt(s.type)&&ru(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return po(),Ke(Yt),Ke(bt),Bh(),r=s.flags,r&65536&&!(r&128)?(s.flags=r&-65537|128,s):null;case 5:return Uh(s),null;case 13:if(Ke(Xe),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));uo()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ke(Xe),null;case 4:return po(),null;case 10:return Oh(s.type._context),null;case 22:case 23:return _d(),null;case 24:return null;default:return null}}var Iu=!1,Ut=!1,RE=typeof WeakSet=="function"?WeakSet:Set,ae=null;function go(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(h){tt(r,s,h)}else a.current=null}function od(r,s,a){try{a()}catch(h){tt(r,s,h)}}var sg=!1;function AE(r,s){if(_h=Jr,r=Mp(),ch(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var h=a.getSelection&&a.getSelection();if(h&&h.rangeCount!==0){a=h.anchorNode;var f=h.anchorOffset,g=h.focusNode;h=h.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var v=0,R=-1,k=-1,j=0,Y=0,X=r,Q=null;t:for(;;){for(var ie;X!==a||f!==0&&X.nodeType!==3||(R=v+f),X!==g||h!==0&&X.nodeType!==3||(k=v+h),X.nodeType===3&&(v+=X.nodeValue.length),(ie=X.firstChild)!==null;)Q=X,X=ie;for(;;){if(X===r)break t;if(Q===a&&++j===f&&(R=v),Q===g&&++Y===h&&(k=v),(ie=X.nextSibling)!==null)break;X=Q,Q=X.parentNode}X=ie}a=R===-1||k===-1?null:{start:R,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(vh={focusedElem:r,selectionRange:a},Jr=!1,ae=s;ae!==null;)if(s=ae,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,ae=r;else for(;ae!==null;){s=ae;try{var le=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(le!==null){var ue=le.memoizedProps,ot=le.memoizedState,F=s.stateNode,x=F.getSnapshotBeforeUpdate(s.elementType===s.type?ue:Bn(s.type,ue),ot);F.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var B=s.stateNode.containerInfo;B.nodeType===1?B.textContent="":B.nodeType===9&&B.documentElement&&B.removeChild(B.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ee){tt(s,s.return,ee)}if(r=s.sibling,r!==null){r.return=s.return,ae=r;break}ae=s.return}return le=sg,sg=!1,le}function Oa(r,s,a){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var f=h=h.next;do{if((f.tag&r)===r){var g=f.destroy;f.destroy=void 0,g!==void 0&&od(s,a,g)}f=f.next}while(f!==h)}}function Su(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var h=a.create;a.destroy=h()}a=a.next}while(a!==s)}}function ad(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function og(r){var s=r.alternate;s!==null&&(r.alternate=null,og(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[er],delete s[Ta],delete s[Ih],delete s[lE],delete s[uE])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function ag(r){return r.tag===5||r.tag===3||r.tag===4}function lg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||ag(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function ld(r,s,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=tu));else if(h!==4&&(r=r.child,r!==null))for(ld(r,s,a),r=r.sibling;r!==null;)ld(r,s,a),r=r.sibling}function ud(r,s,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(h!==4&&(r=r.child,r!==null))for(ud(r,s,a),r=r.sibling;r!==null;)ud(r,s,a),r=r.sibling}var kt=null,jn=!1;function ai(r,s,a){for(a=a.child;a!==null;)ug(r,s,a),a=a.sibling}function ug(r,s,a){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(zi,a)}catch{}switch(a.tag){case 5:Ut||go(a,s);case 6:var h=kt,f=jn;kt=null,ai(r,s,a),kt=h,jn=f,kt!==null&&(jn?(r=kt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):kt.removeChild(a.stateNode));break;case 18:kt!==null&&(jn?(r=kt,a=a.stateNode,r.nodeType===8?Th(r.parentNode,a):r.nodeType===1&&Th(r,a),Vn(r)):Th(kt,a.stateNode));break;case 4:h=kt,f=jn,kt=a.stateNode.containerInfo,jn=!0,ai(r,s,a),kt=h,jn=f;break;case 0:case 11:case 14:case 15:if(!Ut&&(h=a.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){f=h=h.next;do{var g=f,v=g.destroy;g=g.tag,v!==void 0&&(g&2||g&4)&&od(a,s,v),f=f.next}while(f!==h)}ai(r,s,a);break;case 1:if(!Ut&&(go(a,s),h=a.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=a.memoizedProps,h.state=a.memoizedState,h.componentWillUnmount()}catch(R){tt(a,s,R)}ai(r,s,a);break;case 21:ai(r,s,a);break;case 22:a.mode&1?(Ut=(h=Ut)||a.memoizedState!==null,ai(r,s,a),Ut=h):ai(r,s,a);break;default:ai(r,s,a)}}function cg(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new RE),s.forEach(function(h){var f=bE.bind(null,r,h);a.has(h)||(a.add(h),h.then(f,f))})}}function zn(r,s){var a=s.deletions;if(a!==null)for(var h=0;h<a.length;h++){var f=a[h];try{var g=r,v=s,R=v;e:for(;R!==null;){switch(R.tag){case 5:kt=R.stateNode,jn=!1;break e;case 3:kt=R.stateNode.containerInfo,jn=!0;break e;case 4:kt=R.stateNode.containerInfo,jn=!0;break e}R=R.return}if(kt===null)throw Error(t(160));ug(g,v,f),kt=null,jn=!1;var k=f.alternate;k!==null&&(k.return=null),f.return=null}catch(j){tt(f,s,j)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)hg(s,r),s=s.sibling}function hg(r,s){var a=r.alternate,h=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(zn(s,r),rr(r),h&4){try{Oa(3,r,r.return),Su(3,r)}catch(ue){tt(r,r.return,ue)}try{Oa(5,r,r.return)}catch(ue){tt(r,r.return,ue)}}break;case 1:zn(s,r),rr(r),h&512&&a!==null&&go(a,a.return);break;case 5:if(zn(s,r),rr(r),h&512&&a!==null&&go(a,a.return),r.flags&32){var f=r.stateNode;try{Hr(f,"")}catch(ue){tt(r,r.return,ue)}}if(h&4&&(f=r.stateNode,f!=null)){var g=r.memoizedProps,v=a!==null?a.memoizedProps:g,R=r.type,k=r.updateQueue;if(r.updateQueue=null,k!==null)try{R==="input"&&g.type==="radio"&&g.name!=null&&Ho(f,g),Zo(R,v);var j=Zo(R,g);for(v=0;v<k.length;v+=2){var Y=k[v],X=k[v+1];Y==="style"?Yo(f,X):Y==="dangerouslySetInnerHTML"?Go(f,X):Y==="children"?Hr(f,X):Z(f,Y,X,j)}switch(R){case"input":qo(f,g);break;case"textarea":Ds(f,g);break;case"select":var Q=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var ie=g.value;ie!=null?yr(f,!!g.multiple,ie,!1):Q!==!!g.multiple&&(g.defaultValue!=null?yr(f,!!g.multiple,g.defaultValue,!0):yr(f,!!g.multiple,g.multiple?[]:"",!1))}f[Ta]=g}catch(ue){tt(r,r.return,ue)}}break;case 6:if(zn(s,r),rr(r),h&4){if(r.stateNode===null)throw Error(t(162));f=r.stateNode,g=r.memoizedProps;try{f.nodeValue=g}catch(ue){tt(r,r.return,ue)}}break;case 3:if(zn(s,r),rr(r),h&4&&a!==null&&a.memoizedState.isDehydrated)try{Vn(s.containerInfo)}catch(ue){tt(r,r.return,ue)}break;case 4:zn(s,r),rr(r);break;case 13:zn(s,r),rr(r),f=r.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(dd=He())),h&4&&cg(r);break;case 22:if(Y=a!==null&&a.memoizedState!==null,r.mode&1?(Ut=(j=Ut)||Y,zn(s,r),Ut=j):zn(s,r),rr(r),h&8192){if(j=r.memoizedState!==null,(r.stateNode.isHidden=j)&&!Y&&r.mode&1)for(ae=r,Y=r.child;Y!==null;){for(X=ae=Y;ae!==null;){switch(Q=ae,ie=Q.child,Q.tag){case 0:case 11:case 14:case 15:Oa(4,Q,Q.return);break;case 1:go(Q,Q.return);var le=Q.stateNode;if(typeof le.componentWillUnmount=="function"){h=Q,a=Q.return;try{s=h,le.props=s.memoizedProps,le.state=s.memoizedState,le.componentWillUnmount()}catch(ue){tt(h,a,ue)}}break;case 5:go(Q,Q.return);break;case 22:if(Q.memoizedState!==null){pg(X);continue}}ie!==null?(ie.return=Q,ae=ie):pg(X)}Y=Y.sibling}e:for(Y=null,X=r;;){if(X.tag===5){if(Y===null){Y=X;try{f=X.stateNode,j?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(R=X.stateNode,k=X.memoizedProps.style,v=k!=null&&k.hasOwnProperty("display")?k.display:null,R.style.display=Qo("display",v))}catch(ue){tt(r,r.return,ue)}}}else if(X.tag===6){if(Y===null)try{X.stateNode.nodeValue=j?"":X.memoizedProps}catch(ue){tt(r,r.return,ue)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===r)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===r)break e;for(;X.sibling===null;){if(X.return===null||X.return===r)break e;Y===X&&(Y=null),X=X.return}Y===X&&(Y=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:zn(s,r),rr(r),h&4&&cg(r);break;case 21:break;default:zn(s,r),rr(r)}}function rr(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(ag(a)){var h=a;break e}a=a.return}throw Error(t(160))}switch(h.tag){case 5:var f=h.stateNode;h.flags&32&&(Hr(f,""),h.flags&=-33);var g=lg(r);ud(r,g,f);break;case 3:case 4:var v=h.stateNode.containerInfo,R=lg(r);ld(r,R,v);break;default:throw Error(t(161))}}catch(k){tt(r,r.return,k)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function CE(r,s,a){ae=r,dg(r)}function dg(r,s,a){for(var h=(r.mode&1)!==0;ae!==null;){var f=ae,g=f.child;if(f.tag===22&&h){var v=f.memoizedState!==null||Iu;if(!v){var R=f.alternate,k=R!==null&&R.memoizedState!==null||Ut;R=Iu;var j=Ut;if(Iu=v,(Ut=k)&&!j)for(ae=f;ae!==null;)v=ae,k=v.child,v.tag===22&&v.memoizedState!==null?mg(f):k!==null?(k.return=v,ae=k):mg(f);for(;g!==null;)ae=g,dg(g),g=g.sibling;ae=f,Iu=R,Ut=j}fg(r)}else f.subtreeFlags&8772&&g!==null?(g.return=f,ae=g):fg(r)}}function fg(r){for(;ae!==null;){var s=ae;if(s.flags&8772){var a=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:Ut||Su(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!Ut)if(a===null)h.componentDidMount();else{var f=s.elementType===s.type?a.memoizedProps:Bn(s.type,a.memoizedProps);h.componentDidUpdate(f,a.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&pm(s,g,h);break;case 3:var v=s.updateQueue;if(v!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}pm(s,v,a)}break;case 5:var R=s.stateNode;if(a===null&&s.flags&4){a=R;var k=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var j=s.alternate;if(j!==null){var Y=j.memoizedState;if(Y!==null){var X=Y.dehydrated;X!==null&&Vn(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ut||s.flags&512&&ad(s)}catch(Q){tt(s,s.return,Q)}}if(s===r){ae=null;break}if(a=s.sibling,a!==null){a.return=s.return,ae=a;break}ae=s.return}}function pg(r){for(;ae!==null;){var s=ae;if(s===r){ae=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ae=a;break}ae=s.return}}function mg(r){for(;ae!==null;){var s=ae;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Su(4,s)}catch(k){tt(s,a,k)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var f=s.return;try{h.componentDidMount()}catch(k){tt(s,f,k)}}var g=s.return;try{ad(s)}catch(k){tt(s,g,k)}break;case 5:var v=s.return;try{ad(s)}catch(k){tt(s,v,k)}}}catch(k){tt(s,s.return,k)}if(s===r){ae=null;break}var R=s.sibling;if(R!==null){R.return=s.return,ae=R;break}ae=s.return}}var kE=Math.ceil,Ru=re.ReactCurrentDispatcher,cd=re.ReactCurrentOwner,In=re.ReactCurrentBatchConfig,be=0,It=null,ut=null,Pt=0,dn=0,yo=ni(0),gt=0,La=null,ns=0,Au=0,hd=0,ba=null,Zt=null,dd=0,_o=1/0,xr=null,Cu=!1,fd=null,li=null,ku=!1,ui=null,Pu=0,Va=0,pd=null,Nu=-1,Du=0;function Wt(){return be&6?He():Nu!==-1?Nu:Nu=He()}function ci(r){return r.mode&1?be&2&&Pt!==0?Pt&-Pt:hE.transition!==null?(Du===0&&(Du=Hi()),Du):(r=Ne,r!==0||(r=window.event,r=r===void 0?16:ca(r.type)),r):1}function $n(r,s,a,h){if(50<Va)throw Va=0,pd=null,Error(t(185));Gr(r,a,h),(!(be&2)||r!==It)&&(r===It&&(!(be&2)&&(Au|=a),gt===4&&hi(r,Pt)),en(r,h),a===1&&be===0&&!(s.mode&1)&&(_o=He()+500,su&&ii()))}function en(r,s){var a=r.callbackNode;wr(r,s);var h=$i(r,r===It?Pt:0);if(h===0)a!==null&&sa(a),r.callbackNode=null,r.callbackPriority=0;else if(s=h&-h,r.callbackPriority!==s){if(a!=null&&sa(a),s===1)r.tag===0?cE(yg.bind(null,r)):nm(yg.bind(null,r)),oE(function(){!(be&6)&&ii()}),a=null;else{switch(Yr(h)){case 1:a=ji;break;case 4:a=qr;break;case 16:a=gn;break;case 536870912:a=Dl;break;default:a=gn}a=Rg(a,gg.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function gg(r,s){if(Nu=-1,Du=0,be&6)throw Error(t(327));var a=r.callbackNode;if(vo()&&r.callbackNode!==a)return null;var h=$i(r,r===It?Pt:0);if(h===0)return null;if(h&30||h&r.expiredLanes||s)s=xu(r,h);else{s=h;var f=be;be|=2;var g=vg();(It!==r||Pt!==s)&&(xr=null,_o=He()+500,is(r,s));do try{DE();break}catch(R){_g(r,R)}while(!0);xh(),Ru.current=g,be=f,ut!==null?s=0:(It=null,Pt=0,s=gt)}if(s!==0){if(s===2&&(f=an(r),f!==0&&(h=f,s=md(r,f))),s===1)throw a=La,is(r,0),hi(r,h),en(r,He()),a;if(s===6)hi(r,h);else{if(f=r.current.alternate,!(h&30)&&!PE(f)&&(s=xu(r,h),s===2&&(g=an(r),g!==0&&(h=g,s=md(r,g))),s===1))throw a=La,is(r,0),hi(r,h),en(r,He()),a;switch(r.finishedWork=f,r.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:ss(r,Zt,xr);break;case 3:if(hi(r,h),(h&130023424)===h&&(s=dd+500-He(),10<s)){if($i(r,0)!==0)break;if(f=r.suspendedLanes,(f&h)!==h){Wt(),r.pingedLanes|=r.suspendedLanes&f;break}r.timeoutHandle=Eh(ss.bind(null,r,Zt,xr),s);break}ss(r,Zt,xr);break;case 4:if(hi(r,h),(h&4194240)===h)break;for(s=r.eventTimes,f=-1;0<h;){var v=31-$t(h);g=1<<v,v=s[v],v>f&&(f=v),h&=~g}if(h=f,h=He()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*kE(h/1960))-h,10<h){r.timeoutHandle=Eh(ss.bind(null,r,Zt,xr),h);break}ss(r,Zt,xr);break;case 5:ss(r,Zt,xr);break;default:throw Error(t(329))}}}return en(r,He()),r.callbackNode===a?gg.bind(null,r):null}function md(r,s){var a=ba;return r.current.memoizedState.isDehydrated&&(is(r,s).flags|=256),r=xu(r,s),r!==2&&(s=Zt,Zt=a,s!==null&&gd(s)),r}function gd(r){Zt===null?Zt=r:Zt.push.apply(Zt,r)}function PE(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var h=0;h<a.length;h++){var f=a[h],g=f.getSnapshot;f=f.value;try{if(!Un(g(),f))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function hi(r,s){for(s&=~hd,s&=~Au,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-$t(s),h=1<<a;r[a]=-1,s&=~h}}function yg(r){if(be&6)throw Error(t(327));vo();var s=$i(r,0);if(!(s&1))return en(r,He()),null;var a=xu(r,s);if(r.tag!==0&&a===2){var h=an(r);h!==0&&(s=h,a=md(r,h))}if(a===1)throw a=La,is(r,0),hi(r,s),en(r,He()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,ss(r,Zt,xr),en(r,He()),null}function yd(r,s){var a=be;be|=1;try{return r(s)}finally{be=a,be===0&&(_o=He()+500,su&&ii())}}function rs(r){ui!==null&&ui.tag===0&&!(be&6)&&vo();var s=be;be|=1;var a=In.transition,h=Ne;try{if(In.transition=null,Ne=1,r)return r()}finally{Ne=h,In.transition=a,be=s,!(be&6)&&ii()}}function _d(){dn=yo.current,Ke(yo)}function is(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,sE(a)),ut!==null)for(a=ut.return;a!==null;){var h=a;switch(Ch(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&ru();break;case 3:po(),Ke(Yt),Ke(bt),Bh();break;case 5:Uh(h);break;case 4:po();break;case 13:Ke(Xe);break;case 19:Ke(Xe);break;case 10:Oh(h.type._context);break;case 22:case 23:_d()}a=a.return}if(It=r,ut=r=di(r.current,null),Pt=dn=s,gt=0,La=null,hd=Au=ns=0,Zt=ba=null,Zi!==null){for(s=0;s<Zi.length;s++)if(a=Zi[s],h=a.interleaved,h!==null){a.interleaved=null;var f=h.next,g=a.pending;if(g!==null){var v=g.next;g.next=f,h.next=v}a.pending=h}Zi=null}return r}function _g(r,s){do{var a=ut;try{if(xh(),mu.current=vu,gu){for(var h=Je.memoizedState;h!==null;){var f=h.queue;f!==null&&(f.pending=null),h=h.next}gu=!1}if(ts=0,Tt=mt=Je=null,ka=!1,Pa=0,cd.current=null,a===null||a.return===null){gt=1,La=s,ut=null;break}e:{var g=r,v=a.return,R=a,k=s;if(s=Pt,R.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var j=k,Y=R,X=Y.tag;if(!(Y.mode&1)&&(X===0||X===11||X===15)){var Q=Y.alternate;Q?(Y.updateQueue=Q.updateQueue,Y.memoizedState=Q.memoizedState,Y.lanes=Q.lanes):(Y.updateQueue=null,Y.memoizedState=null)}var ie=$m(v);if(ie!==null){ie.flags&=-257,Hm(ie,v,R,g,s),ie.mode&1&&zm(g,j,s),s=ie,k=j;var le=s.updateQueue;if(le===null){var ue=new Set;ue.add(k),s.updateQueue=ue}else le.add(k);break e}else{if(!(s&1)){zm(g,j,s),vd();break e}k=Error(t(426))}}else if(Qe&&R.mode&1){var ot=$m(v);if(ot!==null){!(ot.flags&65536)&&(ot.flags|=256),Hm(ot,v,R,g,s),Nh(mo(k,R));break e}}g=k=mo(k,R),gt!==4&&(gt=2),ba===null?ba=[g]:ba.push(g),g=v;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var F=Bm(g,k,s);fm(g,F);break e;case 1:R=k;var x=g.type,B=g.stateNode;if(!(g.flags&128)&&(typeof x.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&(li===null||!li.has(B)))){g.flags|=65536,s&=-s,g.lanes|=s;var ee=jm(g,R,s);fm(g,ee);break e}}g=g.return}while(g!==null)}Eg(a)}catch(ce){s=ce,ut===a&&a!==null&&(ut=a=a.return);continue}break}while(!0)}function vg(){var r=Ru.current;return Ru.current=vu,r===null?vu:r}function vd(){(gt===0||gt===3||gt===2)&&(gt=4),It===null||!(ns&268435455)&&!(Au&268435455)||hi(It,Pt)}function xu(r,s){var a=be;be|=2;var h=vg();(It!==r||Pt!==s)&&(xr=null,is(r,s));do try{NE();break}catch(f){_g(r,f)}while(!0);if(xh(),be=a,Ru.current=h,ut!==null)throw Error(t(261));return It=null,Pt=0,gt}function NE(){for(;ut!==null;)wg(ut)}function DE(){for(;ut!==null&&!Pl();)wg(ut)}function wg(r){var s=Sg(r.alternate,r,dn);r.memoizedProps=r.pendingProps,s===null?Eg(r):ut=s,cd.current=null}function Eg(r){var s=r;do{var a=s.alternate;if(r=s.return,s.flags&32768){if(a=SE(a,s),a!==null){a.flags&=32767,ut=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{gt=6,ut=null;return}}else if(a=IE(a,s,dn),a!==null){ut=a;return}if(s=s.sibling,s!==null){ut=s;return}ut=s=r}while(s!==null);gt===0&&(gt=5)}function ss(r,s,a){var h=Ne,f=In.transition;try{In.transition=null,Ne=1,xE(r,s,a,h)}finally{In.transition=f,Ne=h}return null}function xE(r,s,a,h){do vo();while(ui!==null);if(be&6)throw Error(t(327));a=r.finishedWork;var f=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(ze(r,g),r===It&&(ut=It=null,Pt=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||ku||(ku=!0,Rg(gn,function(){return vo(),null})),g=(a.flags&15990)!==0,a.subtreeFlags&15990||g){g=In.transition,In.transition=null;var v=Ne;Ne=1;var R=be;be|=4,cd.current=null,AE(r,a),hg(a,r),Jw(vh),Jr=!!_h,vh=_h=null,r.current=a,CE(a),nh(),be=R,Ne=v,In.transition=g}else r.current=a;if(ku&&(ku=!1,ui=r,Pu=f),g=r.pendingLanes,g===0&&(li=null),xl(a.stateNode),en(r,He()),s!==null)for(h=r.onRecoverableError,a=0;a<s.length;a++)f=s[a],h(f.value,{componentStack:f.stack,digest:f.digest});if(Cu)throw Cu=!1,r=fd,fd=null,r;return Pu&1&&r.tag!==0&&vo(),g=r.pendingLanes,g&1?r===pd?Va++:(Va=0,pd=r):Va=0,ii(),null}function vo(){if(ui!==null){var r=Yr(Pu),s=In.transition,a=Ne;try{if(In.transition=null,Ne=16>r?16:r,ui===null)var h=!1;else{if(r=ui,ui=null,Pu=0,be&6)throw Error(t(331));var f=be;for(be|=4,ae=r.current;ae!==null;){var g=ae,v=g.child;if(ae.flags&16){var R=g.deletions;if(R!==null){for(var k=0;k<R.length;k++){var j=R[k];for(ae=j;ae!==null;){var Y=ae;switch(Y.tag){case 0:case 11:case 15:Oa(8,Y,g)}var X=Y.child;if(X!==null)X.return=Y,ae=X;else for(;ae!==null;){Y=ae;var Q=Y.sibling,ie=Y.return;if(og(Y),Y===j){ae=null;break}if(Q!==null){Q.return=ie,ae=Q;break}ae=ie}}}var le=g.alternate;if(le!==null){var ue=le.child;if(ue!==null){le.child=null;do{var ot=ue.sibling;ue.sibling=null,ue=ot}while(ue!==null)}}ae=g}}if(g.subtreeFlags&2064&&v!==null)v.return=g,ae=v;else e:for(;ae!==null;){if(g=ae,g.flags&2048)switch(g.tag){case 0:case 11:case 15:Oa(9,g,g.return)}var F=g.sibling;if(F!==null){F.return=g.return,ae=F;break e}ae=g.return}}var x=r.current;for(ae=x;ae!==null;){v=ae;var B=v.child;if(v.subtreeFlags&2064&&B!==null)B.return=v,ae=B;else e:for(v=x;ae!==null;){if(R=ae,R.flags&2048)try{switch(R.tag){case 0:case 11:case 15:Su(9,R)}}catch(ce){tt(R,R.return,ce)}if(R===v){ae=null;break e}var ee=R.sibling;if(ee!==null){ee.return=R.return,ae=ee;break e}ae=R.return}}if(be=f,ii(),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(zi,r)}catch{}h=!0}return h}finally{Ne=a,In.transition=s}}return!1}function Tg(r,s,a){s=mo(a,s),s=Bm(r,s,1),r=oi(r,s,1),s=Wt(),r!==null&&(Gr(r,1,s),en(r,s))}function tt(r,s,a){if(r.tag===3)Tg(r,r,a);else for(;s!==null;){if(s.tag===3){Tg(s,r,a);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(li===null||!li.has(h))){r=mo(a,r),r=jm(s,r,1),s=oi(s,r,1),r=Wt(),s!==null&&(Gr(s,1,r),en(s,r));break}}s=s.return}}function OE(r,s,a){var h=r.pingCache;h!==null&&h.delete(s),s=Wt(),r.pingedLanes|=r.suspendedLanes&a,It===r&&(Pt&a)===a&&(gt===4||gt===3&&(Pt&130023424)===Pt&&500>He()-dd?is(r,0):hd|=a),en(r,s)}function Ig(r,s){s===0&&(r.mode&1?(s=js,js<<=1,!(js&130023424)&&(js=4194304)):s=1);var a=Wt();r=Pr(r,s),r!==null&&(Gr(r,s,a),en(r,a))}function LE(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),Ig(r,a)}function bE(r,s){var a=0;switch(r.tag){case 13:var h=r.stateNode,f=r.memoizedState;f!==null&&(a=f.retryLane);break;case 19:h=r.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),Ig(r,a)}var Sg;Sg=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Yt.current)Jt=!0;else{if(!(r.lanes&a)&&!(s.flags&128))return Jt=!1,TE(r,s,a);Jt=!!(r.flags&131072)}else Jt=!1,Qe&&s.flags&1048576&&rm(s,au,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;Tu(r,s),r=s.pendingProps;var f=oo(s,bt.current);fo(s,a),f=$h(null,s,h,r,f,a);var g=Hh();return s.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Xt(h)?(g=!0,iu(s)):g=!1,s.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Vh(s),f.updater=wu,s.stateNode=f,f._reactInternals=s,Yh(s,h,r,a),s=ed(null,s,h,!0,g,a)):(s.tag=0,Qe&&g&&Ah(s),qt(null,s,f,a),s=s.child),s;case 16:h=s.elementType;e:{switch(Tu(r,s),r=s.pendingProps,f=h._init,h=f(h._payload),s.type=h,f=s.tag=ME(h),r=Bn(h,r),f){case 0:s=Zh(null,s,h,r,a);break e;case 1:s=Ym(null,s,h,r,a);break e;case 11:s=qm(null,s,h,r,a);break e;case 14:s=Wm(null,s,h,Bn(h.type,r),a);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Bn(h,f),Zh(r,s,h,f,a);case 1:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Bn(h,f),Ym(r,s,h,f,a);case 3:e:{if(Xm(s),r===null)throw Error(t(387));h=s.pendingProps,g=s.memoizedState,f=g.element,dm(r,s),fu(s,h,null,a);var v=s.memoizedState;if(h=v.element,g.isDehydrated)if(g={element:h,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){f=mo(Error(t(423)),s),s=Jm(r,s,h,a,f);break e}else if(h!==f){f=mo(Error(t(424)),s),s=Jm(r,s,h,a,f);break e}else for(hn=ti(s.stateNode.containerInfo.firstChild),cn=s,Qe=!0,Fn=null,a=cm(s,null,h,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(uo(),h===f){s=Dr(r,s,a);break e}qt(r,s,h,a)}s=s.child}return s;case 5:return mm(s),r===null&&Ph(s),h=s.type,f=s.pendingProps,g=r!==null?r.memoizedProps:null,v=f.children,wh(h,f)?v=null:g!==null&&wh(h,g)&&(s.flags|=32),Qm(r,s),qt(r,s,v,a),s.child;case 6:return r===null&&Ph(s),null;case 13:return Zm(r,s,a);case 4:return Mh(s,s.stateNode.containerInfo),h=s.pendingProps,r===null?s.child=co(s,null,h,a):qt(r,s,h,a),s.child;case 11:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Bn(h,f),qm(r,s,h,f,a);case 7:return qt(r,s,s.pendingProps,a),s.child;case 8:return qt(r,s,s.pendingProps.children,a),s.child;case 12:return qt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(h=s.type._context,f=s.pendingProps,g=s.memoizedProps,v=f.value,qe(cu,h._currentValue),h._currentValue=v,g!==null)if(Un(g.value,v)){if(g.children===f.children&&!Yt.current){s=Dr(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var R=g.dependencies;if(R!==null){v=g.child;for(var k=R.firstContext;k!==null;){if(k.context===h){if(g.tag===1){k=Nr(-1,a&-a),k.tag=2;var j=g.updateQueue;if(j!==null){j=j.shared;var Y=j.pending;Y===null?k.next=k:(k.next=Y.next,Y.next=k),j.pending=k}}g.lanes|=a,k=g.alternate,k!==null&&(k.lanes|=a),Lh(g.return,a,s),R.lanes|=a;break}k=k.next}}else if(g.tag===10)v=g.type===s.type?null:g.child;else if(g.tag===18){if(v=g.return,v===null)throw Error(t(341));v.lanes|=a,R=v.alternate,R!==null&&(R.lanes|=a),Lh(v,a,s),v=g.sibling}else v=g.child;if(v!==null)v.return=g;else for(v=g;v!==null;){if(v===s){v=null;break}if(g=v.sibling,g!==null){g.return=v.return,v=g;break}v=v.return}g=v}qt(r,s,f.children,a),s=s.child}return s;case 9:return f=s.type,h=s.pendingProps.children,fo(s,a),f=En(f),h=h(f),s.flags|=1,qt(r,s,h,a),s.child;case 14:return h=s.type,f=Bn(h,s.pendingProps),f=Bn(h.type,f),Wm(r,s,h,f,a);case 15:return Km(r,s,s.type,s.pendingProps,a);case 17:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Bn(h,f),Tu(r,s),s.tag=1,Xt(h)?(r=!0,iu(s)):r=!1,fo(s,a),Um(s,h,f),Yh(s,h,f,a),ed(null,s,h,!0,r,a);case 19:return tg(r,s,a);case 22:return Gm(r,s,a)}throw Error(t(156,s.tag))};function Rg(r,s){return Fs(r,s)}function VE(r,s,a,h){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(r,s,a,h){return new VE(r,s,a,h)}function wd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function ME(r){if(typeof r=="function")return wd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===M)return 11;if(r===Ot)return 14}return 2}function di(r,s){var a=r.alternate;return a===null?(a=Sn(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Ou(r,s,a,h,f,g){var v=2;if(h=r,typeof r=="function")wd(r)&&(v=1);else if(typeof r=="string")v=5;else e:switch(r){case N:return os(a.children,f,g,s);case I:v=8,f|=8;break;case A:return r=Sn(12,a,s,f|2),r.elementType=A,r.lanes=g,r;case C:return r=Sn(13,a,s,f),r.elementType=C,r.lanes=g,r;case it:return r=Sn(19,a,s,f),r.elementType=it,r.lanes=g,r;case je:return Lu(a,f,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case P:v=10;break e;case O:v=9;break e;case M:v=11;break e;case Ot:v=14;break e;case Lt:v=16,h=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=Sn(v,a,s,f),s.elementType=r,s.type=h,s.lanes=g,s}function os(r,s,a,h){return r=Sn(7,r,h,s),r.lanes=a,r}function Lu(r,s,a,h){return r=Sn(22,r,h,s),r.elementType=je,r.lanes=a,r.stateNode={isHidden:!1},r}function Ed(r,s,a){return r=Sn(6,r,null,s),r.lanes=a,r}function Td(r,s,a){return s=Sn(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function UE(r,s,a,h,f){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kr(0),this.expirationTimes=Kr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kr(0),this.identifierPrefix=h,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Id(r,s,a,h,f,g,v,R,k){return r=new UE(r,s,a,R,k),s===1?(s=1,g===!0&&(s|=8)):s=0,g=Sn(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:h,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vh(g),r}function FE(r,s,a){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_e,key:h==null?null:""+h,children:r,containerInfo:s,implementation:a}}function Ag(r){if(!r)return ri;r=r._reactInternals;e:{if(Dn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Xt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Xt(a))return em(r,a,s)}return s}function Cg(r,s,a,h,f,g,v,R,k){return r=Id(a,h,!0,r,f,g,v,R,k),r.context=Ag(null),a=r.current,h=Wt(),f=ci(a),g=Nr(h,f),g.callback=s??null,oi(a,g,f),r.current.lanes=f,Gr(r,f,h),en(r,h),r}function bu(r,s,a,h){var f=s.current,g=Wt(),v=ci(f);return a=Ag(a),s.context===null?s.context=a:s.pendingContext=a,s=Nr(g,v),s.payload={element:r},h=h===void 0?null:h,h!==null&&(s.callback=h),r=oi(f,s,v),r!==null&&($n(r,f,v,g),du(r,f,v)),v}function Vu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function kg(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function Sd(r,s){kg(r,s),(r=r.alternate)&&kg(r,s)}function BE(){return null}var Pg=typeof reportError=="function"?reportError:function(r){console.error(r)};function Rd(r){this._internalRoot=r}Mu.prototype.render=Rd.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));bu(r,s,null,null)},Mu.prototype.unmount=Rd.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;rs(function(){bu(null,r,null,null)}),s[Rr]=null}};function Mu(r){this._internalRoot=r}Mu.prototype.unstable_scheduleHydration=function(r){if(r){var s=Ml();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Yn.length&&s!==0&&s<Yn[a].priority;a++);Yn.splice(a,0,r),a===0&&Bl(r)}};function Ad(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Uu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Ng(){}function jE(r,s,a,h,f){if(f){if(typeof h=="function"){var g=h;h=function(){var j=Vu(v);g.call(j)}}var v=Cg(s,h,r,0,null,!1,!1,"",Ng);return r._reactRootContainer=v,r[Rr]=v.current,wa(r.nodeType===8?r.parentNode:r),rs(),v}for(;f=r.lastChild;)r.removeChild(f);if(typeof h=="function"){var R=h;h=function(){var j=Vu(k);R.call(j)}}var k=Id(r,0,!1,null,null,!1,!1,"",Ng);return r._reactRootContainer=k,r[Rr]=k.current,wa(r.nodeType===8?r.parentNode:r),rs(function(){bu(s,k,a,h)}),k}function Fu(r,s,a,h,f){var g=a._reactRootContainer;if(g){var v=g;if(typeof f=="function"){var R=f;f=function(){var k=Vu(v);R.call(k)}}bu(s,v,r,f)}else v=jE(a,s,r,f,h);return Vu(v)}bl=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=Wr(s.pendingLanes);a!==0&&(Qr(s,a|1),en(s,He()),!(be&6)&&(_o=He()+500,ii()))}break;case 13:rs(function(){var h=Pr(r,1);if(h!==null){var f=Wt();$n(h,r,1,f)}}),Sd(r,1)}},zs=function(r){if(r.tag===13){var s=Pr(r,134217728);if(s!==null){var a=Wt();$n(s,r,134217728,a)}Sd(r,134217728)}},Vl=function(r){if(r.tag===13){var s=ci(r),a=Pr(r,s);if(a!==null){var h=Wt();$n(a,r,s,h)}Sd(r,s)}},Ml=function(){return Ne},Ul=function(r,s){var a=Ne;try{return Ne=r,s()}finally{Ne=a}},Os=function(r,s,a){switch(s){case"input":if(qo(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var h=a[s];if(h!==r&&h.form===r.form){var f=nu(h);if(!f)throw Error(t(90));Cs(h),qo(h,f)}}}break;case"textarea":Ds(r,a);break;case"select":s=a.value,s!=null&&yr(r,!!a.multiple,s,!1)}},Mi=yd,ta=rs;var zE={usingClientEntryPoint:!1,Events:[Ia,io,nu,Gn,ea,yd]},Ma={findFiberByHostInstance:Qi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$E={bundleType:Ma.bundleType,version:Ma.version,rendererPackageName:Ma.rendererPackageName,rendererConfig:Ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:re.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=ia(r),r===null?null:r.stateNode},findFiberByHostInstance:Ma.findFiberByHostInstance||BE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bu.isDisabled&&Bu.supportsFiber)try{zi=Bu.inject($E),on=Bu}catch{}}return tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zE,tn.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ad(s))throw Error(t(200));return FE(r,s,null,a)},tn.createRoot=function(r,s){if(!Ad(r))throw Error(t(299));var a=!1,h="",f=Pg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(f=s.onRecoverableError)),s=Id(r,1,!1,null,null,a,!1,h,f),r[Rr]=s.current,wa(r.nodeType===8?r.parentNode:r),new Rd(s)},tn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=ia(s),r=r===null?null:r.stateNode,r},tn.flushSync=function(r){return rs(r)},tn.hydrate=function(r,s,a){if(!Uu(s))throw Error(t(200));return Fu(null,r,s,!0,a)},tn.hydrateRoot=function(r,s,a){if(!Ad(r))throw Error(t(405));var h=a!=null&&a.hydratedSources||null,f=!1,g="",v=Pg;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),s=Cg(s,null,r,1,a??null,f,!1,g,v),r[Rr]=s.current,wa(r),h)for(r=0;r<h.length;r++)a=h[r],f=a._getVersion,f=f(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,f]:s.mutableSourceEagerHydrationData.push(a,f);return new Mu(s)},tn.render=function(r,s,a){if(!Uu(s))throw Error(t(200));return Fu(null,r,s,!1,a)},tn.unmountComponentAtNode=function(r){if(!Uu(r))throw Error(t(40));return r._reactRootContainer?(rs(function(){Fu(null,null,r,!1,function(){r._reactRootContainer=null,r[Rr]=null})}),!0):!1},tn.unstable_batchedUpdates=yd,tn.unstable_renderSubtreeIntoContainer=function(r,s,a,h){if(!Uu(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Fu(r,s,a,!1,h)},tn.version="18.3.1-next-f1338f8080-20240426",tn}var Ug;function XE(){if(Ug)return Pd.exports;Ug=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Pd.exports=YE(),Pd.exports}var Fg;function JE(){if(Fg)return ju;Fg=1;var n=XE();return ju.createRoot=n.createRoot,ju.hydrateRoot=n.hydrateRoot,ju}var ZE=JE(),Fa={},Bg;function eT(){if(Bg)return Fa;Bg=1,Object.defineProperty(Fa,"__esModule",{value:!0}),Fa.parse=c,Fa.serialize=y;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,l=(()=>{const S=function(){};return S.prototype=Object.create(null),S})();function c(S,D){const b=new l,z=S.length;if(z<2)return b;const L=(D==null?void 0:D.decode)||w;let q=0;do{const $=S.indexOf("=",q);if($===-1)break;const Z=S.indexOf(";",q),re=Z===-1?z:Z;if($>re){q=S.lastIndexOf(";",$-1)+1;continue}const we=d(S,q,$),_e=p(S,$,we),N=S.slice(we,_e);if(b[N]===void 0){let I=d(S,$+1,re),A=p(S,re,I);const P=L(S.slice(I,A));b[N]=P}q=re+1}while(q<z);return b}function d(S,D,b){do{const z=S.charCodeAt(D);if(z!==32&&z!==9)return D}while(++D<b);return b}function p(S,D,b){for(;D>b;){const z=S.charCodeAt(--D);if(z!==32&&z!==9)return D+1}return b}function y(S,D,b){const z=(b==null?void 0:b.encode)||encodeURIComponent;if(!n.test(S))throw new TypeError(`argument name is invalid: ${S}`);const L=z(D);if(!e.test(L))throw new TypeError(`argument val is invalid: ${D}`);let q=S+"="+L;if(!b)return q;if(b.maxAge!==void 0){if(!Number.isInteger(b.maxAge))throw new TypeError(`option maxAge is invalid: ${b.maxAge}`);q+="; Max-Age="+b.maxAge}if(b.domain){if(!t.test(b.domain))throw new TypeError(`option domain is invalid: ${b.domain}`);q+="; Domain="+b.domain}if(b.path){if(!i.test(b.path))throw new TypeError(`option path is invalid: ${b.path}`);q+="; Path="+b.path}if(b.expires){if(!T(b.expires)||!Number.isFinite(b.expires.valueOf()))throw new TypeError(`option expires is invalid: ${b.expires}`);q+="; Expires="+b.expires.toUTCString()}if(b.httpOnly&&(q+="; HttpOnly"),b.secure&&(q+="; Secure"),b.partitioned&&(q+="; Partitioned"),b.priority)switch(typeof b.priority=="string"?b.priority.toLowerCase():void 0){case"low":q+="; Priority=Low";break;case"medium":q+="; Priority=Medium";break;case"high":q+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${b.priority}`)}if(b.sameSite)switch(typeof b.sameSite=="string"?b.sameSite.toLowerCase():b.sameSite){case!0:case"strict":q+="; SameSite=Strict";break;case"lax":q+="; SameSite=Lax";break;case"none":q+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${b.sameSite}`)}return q}function w(S){if(S.indexOf("%")===-1)return S;try{return decodeURIComponent(S)}catch{return S}}function T(S){return o.call(S)==="[object Date]"}return Fa}eT();/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var jg="popstate";function tT(n={}){function e(i,o){let{pathname:l,search:c,hash:d}=i.location;return Yd("",{pathname:l,search:c,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:tl(o)}return rT(e,t,null,n)}function Ze(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function hr(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function nT(){return Math.random().toString(36).substring(2,10)}function zg(n,e){return{usr:n.state,key:n.key,idx:e}}function Yd(n,e,t=null,i){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Mo(e):e,state:t,key:e&&e.key||i||nT()}}function tl({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Mo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function rT(n,e,t,i={}){let{window:o=document.defaultView,v5Compat:l=!1}=i,c=o.history,d="POP",p=null,y=w();y==null&&(y=0,c.replaceState({...c.state,idx:y},""));function w(){return(c.state||{idx:null}).idx}function T(){d="POP";let L=w(),q=L==null?null:L-y;y=L,p&&p({action:d,location:z.location,delta:q})}function S(L,q){d="PUSH";let $=Yd(z.location,L,q);y=w()+1;let Z=zg($,y),re=z.createHref($);try{c.pushState(Z,"",re)}catch(we){if(we instanceof DOMException&&we.name==="DataCloneError")throw we;o.location.assign(re)}l&&p&&p({action:d,location:z.location,delta:1})}function D(L,q){d="REPLACE";let $=Yd(z.location,L,q);y=w();let Z=zg($,y),re=z.createHref($);c.replaceState(Z,"",re),l&&p&&p({action:d,location:z.location,delta:0})}function b(L){let q=o.location.origin!=="null"?o.location.origin:o.location.href,$=typeof L=="string"?L:tl(L);return $=$.replace(/ $/,"%20"),Ze(q,`No window.location.(origin|href) available to create URL for href: ${$}`),new URL($,q)}let z={get action(){return d},get location(){return n(o,c)},listen(L){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(jg,T),p=L,()=>{o.removeEventListener(jg,T),p=null}},createHref(L){return e(o,L)},createURL:b,encodeLocation(L){let q=b(L);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:S,replace:D,go(L){return c.go(L)}};return z}function I_(n,e,t="/"){return iT(n,e,t,!1)}function iT(n,e,t,i){let o=typeof e=="string"?Mo(e):e,l=Si(o.pathname||"/",t);if(l==null)return null;let c=S_(n);sT(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let y=gT(l);d=pT(c[p],y,i)}return d}function S_(n,e=[],t=[],i=""){let o=(l,c,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(Ze(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length));let y=Vr([i,p.relativePath]),w=t.concat(p);l.children&&l.children.length>0&&(Ze(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),S_(l.children,e,w,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:dT(y,l.index),routesMeta:w})};return n.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))o(l,c);else for(let p of R_(l.path))o(l,c,p)}),e}function R_(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let c=R_(i.join("/")),d=[];return d.push(...c.map(p=>p===""?l:[l,p].join("/"))),o&&d.push(...c),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function sT(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:fT(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var oT=/^:[\w-]+$/,aT=3,lT=2,uT=1,cT=10,hT=-2,$g=n=>n==="*";function dT(n,e){let t=n.split("/"),i=t.length;return t.some($g)&&(i+=hT),e&&(i+=lT),t.filter(o=>!$g(o)).reduce((o,l)=>o+(oT.test(l)?aT:l===""?uT:cT),i)}function fT(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function pT(n,e,t=!1){let{routesMeta:i}=n,o={},l="/",c=[];for(let d=0;d<i.length;++d){let p=i[d],y=d===i.length-1,w=l==="/"?e:e.slice(l.length)||"/",T=cc({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},w),S=p.route;if(!T&&y&&t&&!i[i.length-1].route.index&&(T=cc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},w)),!T)return null;Object.assign(o,T.params),c.push({params:o,pathname:Vr([l,T.pathname]),pathnameBase:wT(Vr([l,T.pathnameBase])),route:S}),T.pathnameBase!=="/"&&(l=Vr([l,T.pathnameBase]))}return c}function cc(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=mT(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:i.reduce((y,{paramName:w,isOptional:T},S)=>{if(w==="*"){let b=d[S]||"";c=l.slice(0,l.length-b.length).replace(/(.)\/+$/,"$1")}const D=d[S];return T&&!D?y[w]=void 0:y[w]=(D||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:c,pattern:n}}function mT(n,e=!1,t=!0){hr(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(i.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function gT(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return hr(!1,`The URL path "${n}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Si(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function yT(n,e="/"){let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?Mo(n):n;return{pathname:t?t.startsWith("/")?t:_T(t,e):e,search:ET(i),hash:TT(o)}}function _T(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function xd(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function vT(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function A_(n){let e=vT(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function C_(n,e,t,i=!1){let o;typeof n=="string"?o=Mo(n):(o={...n},Ze(!o.pathname||!o.pathname.includes("?"),xd("?","pathname","search",o)),Ze(!o.pathname||!o.pathname.includes("#"),xd("#","pathname","hash",o)),Ze(!o.search||!o.search.includes("#"),xd("#","search","hash",o)));let l=n===""||o.pathname==="",c=l?"/":o.pathname,d;if(c==null)d=t;else{let T=e.length-1;if(!i&&c.startsWith("..")){let S=c.split("/");for(;S[0]==="..";)S.shift(),T-=1;o.pathname=S.join("/")}d=T>=0?e[T]:"/"}let p=yT(o,d),y=c&&c!=="/"&&c.endsWith("/"),w=(l||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||w)&&(p.pathname+="/"),p}var Vr=n=>n.join("/").replace(/\/\/+/g,"/"),wT=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),ET=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,TT=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function IT(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var k_=["POST","PUT","PATCH","DELETE"];new Set(k_);var ST=["GET",...k_];new Set(ST);var Uo=W.createContext(null);Uo.displayName="DataRouter";var Nc=W.createContext(null);Nc.displayName="DataRouterState";var P_=W.createContext({isTransitioning:!1});P_.displayName="ViewTransition";var RT=W.createContext(new Map);RT.displayName="Fetchers";var AT=W.createContext(null);AT.displayName="Await";var pr=W.createContext(null);pr.displayName="Navigation";var fl=W.createContext(null);fl.displayName="Location";var zr=W.createContext({outlet:null,matches:[],isDataRoute:!1});zr.displayName="Route";var Rf=W.createContext(null);Rf.displayName="RouteError";function CT(n,{relative:e}={}){Ze(pl(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=W.useContext(pr),{hash:o,pathname:l,search:c}=ml(n,{relative:e}),d=l;return t!=="/"&&(d=l==="/"?t:Vr([t,l])),i.createHref({pathname:d,search:c,hash:o})}function pl(){return W.useContext(fl)!=null}function vs(){return Ze(pl(),"useLocation() may be used only in the context of a <Router> component."),W.useContext(fl).location}var N_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function D_(n){W.useContext(pr).static||W.useLayoutEffect(n)}function Dc(){let{isDataRoute:n}=W.useContext(zr);return n?BT():kT()}function kT(){Ze(pl(),"useNavigate() may be used only in the context of a <Router> component.");let n=W.useContext(Uo),{basename:e,navigator:t}=W.useContext(pr),{matches:i}=W.useContext(zr),{pathname:o}=vs(),l=JSON.stringify(A_(i)),c=W.useRef(!1);return D_(()=>{c.current=!0}),W.useCallback((p,y={})=>{if(hr(c.current,N_),!c.current)return;if(typeof p=="number"){t.go(p);return}let w=C_(p,JSON.parse(l),o,y.relative==="path");n==null&&e!=="/"&&(w.pathname=w.pathname==="/"?e:Vr([e,w.pathname])),(y.replace?t.replace:t.push)(w,y.state,y)},[e,t,l,o,n])}W.createContext(null);function ml(n,{relative:e}={}){let{matches:t}=W.useContext(zr),{pathname:i}=vs(),o=JSON.stringify(A_(t));return W.useMemo(()=>C_(n,JSON.parse(o),i,e==="path"),[n,o,i,e])}function PT(n,e){return x_(n,e)}function x_(n,e,t,i){var q;Ze(pl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=W.useContext(pr),{matches:l}=W.useContext(zr),c=l[l.length-1],d=c?c.params:{},p=c?c.pathname:"/",y=c?c.pathnameBase:"/",w=c&&c.route;{let $=w&&w.path||"";O_(p,!w||$.endsWith("*")||$.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${$}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${$}"> to <Route path="${$==="/"?"*":`${$}/*`}">.`)}let T=vs(),S;if(e){let $=typeof e=="string"?Mo(e):e;Ze(y==="/"||((q=$.pathname)==null?void 0:q.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${$.pathname}" was given in the \`location\` prop.`),S=$}else S=T;let D=S.pathname||"/",b=D;if(y!=="/"){let $=y.replace(/^\//,"").split("/");b="/"+D.replace(/^\//,"").split("/").slice($.length).join("/")}let z=I_(n,{pathname:b});hr(w||z!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),hr(z==null||z[z.length-1].route.element!==void 0||z[z.length-1].route.Component!==void 0||z[z.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let L=LT(z&&z.map($=>Object.assign({},$,{params:Object.assign({},d,$.params),pathname:Vr([y,o.encodeLocation?o.encodeLocation($.pathname).pathname:$.pathname]),pathnameBase:$.pathnameBase==="/"?y:Vr([y,o.encodeLocation?o.encodeLocation($.pathnameBase).pathname:$.pathnameBase])})),l,t,i);return e&&L?W.createElement(fl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},L):L}function NT(){let n=FT(),e=IT(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},c=null;return console.error("Error handled by React Router default ErrorBoundary:",n),c=W.createElement(W.Fragment,null,W.createElement("p",null,"💿 Hey developer 👋"),W.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",W.createElement("code",{style:l},"ErrorBoundary")," or"," ",W.createElement("code",{style:l},"errorElement")," prop on your route.")),W.createElement(W.Fragment,null,W.createElement("h2",null,"Unexpected Application Error!"),W.createElement("h3",{style:{fontStyle:"italic"}},e),t?W.createElement("pre",{style:o},t):null,c)}var DT=W.createElement(NT,null),xT=class extends W.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?W.createElement(zr.Provider,{value:this.props.routeContext},W.createElement(Rf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function OT({routeContext:n,match:e,children:t}){let i=W.useContext(Uo);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),W.createElement(zr.Provider,{value:n},t)}function LT(n,e=[],t=null,i=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,l=t==null?void 0:t.errors;if(l!=null){let p=o.findIndex(y=>y.route.id&&(l==null?void 0:l[y.route.id])!==void 0);Ze(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let c=!1,d=-1;if(t)for(let p=0;p<o.length;p++){let y=o[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(d=p),y.route.id){let{loaderData:w,errors:T}=t,S=y.route.loader&&!w.hasOwnProperty(y.route.id)&&(!T||T[y.route.id]===void 0);if(y.route.lazy||S){c=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((p,y,w)=>{let T,S=!1,D=null,b=null;t&&(T=l&&y.route.id?l[y.route.id]:void 0,D=y.route.errorElement||DT,c&&(d<0&&w===0?(O_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,b=null):d===w&&(S=!0,b=y.route.hydrateFallbackElement||null)));let z=e.concat(o.slice(0,w+1)),L=()=>{let q;return T?q=D:S?q=b:y.route.Component?q=W.createElement(y.route.Component,null):y.route.element?q=y.route.element:q=p,W.createElement(OT,{match:y,routeContext:{outlet:p,matches:z,isDataRoute:t!=null},children:q})};return t&&(y.route.ErrorBoundary||y.route.errorElement||w===0)?W.createElement(xT,{location:t.location,revalidation:t.revalidation,component:D,error:T,children:L(),routeContext:{outlet:null,matches:z,isDataRoute:!0}}):L()},null)}function Af(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function bT(n){let e=W.useContext(Uo);return Ze(e,Af(n)),e}function VT(n){let e=W.useContext(Nc);return Ze(e,Af(n)),e}function MT(n){let e=W.useContext(zr);return Ze(e,Af(n)),e}function Cf(n){let e=MT(n),t=e.matches[e.matches.length-1];return Ze(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function UT(){return Cf("useRouteId")}function FT(){var i;let n=W.useContext(Rf),e=VT("useRouteError"),t=Cf("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function BT(){let{router:n}=bT("useNavigate"),e=Cf("useNavigate"),t=W.useRef(!1);return D_(()=>{t.current=!0}),W.useCallback(async(o,l={})=>{hr(t.current,N_),t.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...l}))},[n,e])}var Hg={};function O_(n,e,t){!e&&!Hg[n]&&(Hg[n]=!0,hr(!1,t))}W.memo(jT);function jT({routes:n,future:e,state:t}){return x_(n,void 0,t,e)}function Xu(n){Ze(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function zT({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:o,static:l=!1}){Ze(!pl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=n.replace(/^\/*/,"/"),d=W.useMemo(()=>({basename:c,navigator:o,static:l,future:{}}),[c,o,l]);typeof t=="string"&&(t=Mo(t));let{pathname:p="/",search:y="",hash:w="",state:T=null,key:S="default"}=t,D=W.useMemo(()=>{let b=Si(p,c);return b==null?null:{location:{pathname:b,search:y,hash:w,state:T,key:S},navigationType:i}},[c,p,y,w,T,S,i]);return hr(D!=null,`<Router basename="${c}"> is not able to match the URL "${p}${y}${w}" because it does not start with the basename, so the <Router> won't render anything.`),D==null?null:W.createElement(pr.Provider,{value:d},W.createElement(fl.Provider,{children:e,value:D}))}function $T({children:n,location:e}){return PT(Xd(n),e)}function Xd(n,e=[]){let t=[];return W.Children.forEach(n,(i,o)=>{if(!W.isValidElement(i))return;let l=[...e,o];if(i.type===W.Fragment){t.push.apply(t,Xd(i.props.children,l));return}Ze(i.type===Xu,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ze(!i.props.index||!i.props.children,"An index route cannot have child routes.");let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=Xd(i.props.children,l)),t.push(c)}),t}var Ju="get",Zu="application/x-www-form-urlencoded";function xc(n){return n!=null&&typeof n.tagName=="string"}function HT(n){return xc(n)&&n.tagName.toLowerCase()==="button"}function qT(n){return xc(n)&&n.tagName.toLowerCase()==="form"}function WT(n){return xc(n)&&n.tagName.toLowerCase()==="input"}function KT(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function GT(n,e){return n.button===0&&(!e||e==="_self")&&!KT(n)}var zu=null;function QT(){if(zu===null)try{new FormData(document.createElement("form"),0),zu=!1}catch{zu=!0}return zu}var YT=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Od(n){return n!=null&&!YT.has(n)?(hr(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Zu}"`),null):n}function XT(n,e){let t,i,o,l,c;if(qT(n)){let d=n.getAttribute("action");i=d?Si(d,e):null,t=n.getAttribute("method")||Ju,o=Od(n.getAttribute("enctype"))||Zu,l=new FormData(n)}else if(HT(n)||WT(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||d.getAttribute("action");if(i=p?Si(p,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||Ju,o=Od(n.getAttribute("formenctype"))||Od(d.getAttribute("enctype"))||Zu,l=new FormData(d,n),!QT()){let{name:y,type:w,value:T}=n;if(w==="image"){let S=y?`${y}.`:"";l.append(`${S}x`,"0"),l.append(`${S}y`,"0")}else y&&l.append(y,T)}}else{if(xc(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Ju,i=null,o=Zu,c=n}return l&&o==="text/plain"&&(c=l,l=void 0),{action:i,method:t.toLowerCase(),encType:o,formData:l,body:c}}function kf(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function JT(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ZT(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function eI(n,e,t){let i=await Promise.all(n.map(async o=>{let l=e.routes[o.route.id];if(l){let c=await JT(l,t);return c.links?c.links():[]}return[]}));return iI(i.flat(1).filter(ZT).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function qg(n,e,t,i,o,l){let c=(p,y)=>t[y]?p.route.id!==t[y].route.id:!0,d=(p,y)=>{var w;return t[y].pathname!==p.pathname||((w=t[y].route.path)==null?void 0:w.endsWith("*"))&&t[y].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,y)=>c(p,y)||d(p,y)):l==="data"?e.filter((p,y)=>{var T;let w=i.routes[p.route.id];if(!w||!w.hasLoader)return!1;if(c(p,y)||d(p,y))return!0;if(p.route.shouldRevalidate){let S=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((T=t[0])==null?void 0:T.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function tI(n,e){return nI(n.map(t=>{let i=e.routes[t.route.id];if(!i)return[];let o=[i.module];return i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function nI(n){return[...new Set(n)]}function rI(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function iI(n,e){let t=new Set;return new Set(e),n.reduce((i,o)=>{let l=JSON.stringify(rI(o));return t.has(l)||(t.add(l),i.push({key:l,link:o})),i},[])}function sI(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function oI(){let n=W.useContext(Uo);return kf(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function aI(){let n=W.useContext(Nc);return kf(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Pf=W.createContext(void 0);Pf.displayName="FrameworkContext";function L_(){let n=W.useContext(Pf);return kf(n,"You must render this element inside a <HydratedRouter> element"),n}function lI(n,e){let t=W.useContext(Pf),[i,o]=W.useState(!1),[l,c]=W.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:y,onMouseLeave:w,onTouchStart:T}=e,S=W.useRef(null);W.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let z=q=>{q.forEach($=>{c($.isIntersecting)})},L=new IntersectionObserver(z,{threshold:.5});return S.current&&L.observe(S.current),()=>{L.disconnect()}}},[n]),W.useEffect(()=>{if(i){let z=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(z)}}},[i]);let D=()=>{o(!0)},b=()=>{o(!1),c(!1)};return t?n!=="intent"?[l,S,{}]:[l,S,{onFocus:Ba(d,D),onBlur:Ba(p,b),onMouseEnter:Ba(y,D),onMouseLeave:Ba(w,b),onTouchStart:Ba(T,D)}]:[!1,S,{}]}function Ba(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function uI({page:n,...e}){let{router:t}=oI(),i=W.useMemo(()=>I_(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?W.createElement(hI,{page:n,matches:i,...e}):(console.warn(`Tried to prefetch ${n} but no routes matched.`),null)}function cI(n){let{manifest:e,routeModules:t}=L_(),[i,o]=W.useState([]);return W.useEffect(()=>{let l=!1;return eI(n,e,t).then(c=>{l||o(c)}),()=>{l=!0}},[n,e,t]),i}function hI({page:n,matches:e,...t}){let i=vs(),{manifest:o,routeModules:l}=L_(),{loaderData:c,matches:d}=aI(),p=W.useMemo(()=>qg(n,e,d,o,i,"data"),[n,e,d,o,i]),y=W.useMemo(()=>qg(n,e,d,o,i,"assets"),[n,e,d,o,i]),w=W.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let D=new Set,b=!1;if(e.forEach(L=>{var $;let q=o.routes[L.route.id];!q||!q.hasLoader||(!p.some(Z=>Z.route.id===L.route.id)&&L.route.id in c&&(($=l[L.route.id])!=null&&$.shouldRevalidate)||q.hasClientLoader?b=!0:D.add(L.route.id))}),D.size===0)return[];let z=sI(n);return b&&D.size>0&&z.searchParams.set("_routes",e.filter(L=>D.has(L.route.id)).map(L=>L.route.id).join(",")),[z.pathname+z.search]},[c,i,o,p,e,n,l]),T=W.useMemo(()=>tI(y,o),[y,o]),S=cI(y);return W.createElement(W.Fragment,null,w.map(D=>W.createElement("link",{key:D,rel:"prefetch",as:"fetch",href:D,...t})),T.map(D=>W.createElement("link",{key:D,rel:"modulepreload",href:D,...t})),S.map(({key:D,link:b})=>W.createElement("link",{key:D,...b})))}function dI(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var b_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{b_&&(window.__reactRouterVersion="7.0.2")}catch{}function fI({basename:n,children:e,window:t}){let i=W.useRef();i.current==null&&(i.current=tT({window:t,v5Compat:!0}));let o=i.current,[l,c]=W.useState({action:o.action,location:o.location}),d=W.useCallback(p=>{W.startTransition(()=>c(p))},[c]);return W.useLayoutEffect(()=>o.listen(d),[o,d]),W.createElement(zT,{basename:n,children:e,location:l.location,navigationType:l.action,navigator:o})}var V_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Nf=W.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:o,reloadDocument:l,replace:c,state:d,target:p,to:y,preventScrollReset:w,viewTransition:T,...S},D){let{basename:b}=W.useContext(pr),z=typeof y=="string"&&V_.test(y),L,q=!1;if(typeof y=="string"&&z&&(L=y,b_))try{let A=new URL(window.location.href),P=y.startsWith("//")?new URL(A.protocol+y):new URL(y),O=Si(P.pathname,b);P.origin===A.origin&&O!=null?y=O+P.search+P.hash:q=!0}catch{hr(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let $=CT(y,{relative:o}),[Z,re,we]=lI(i,S),_e=yI(y,{replace:c,state:d,target:p,preventScrollReset:w,relative:o,viewTransition:T});function N(A){e&&e(A),A.defaultPrevented||_e(A)}let I=W.createElement("a",{...S,...we,href:L||$,onClick:q||l?e:N,ref:dI(D,re),target:p,"data-discover":!z&&t==="render"?"true":void 0});return Z&&!z?W.createElement(W.Fragment,null,I,W.createElement(uI,{page:$})):I});Nf.displayName="Link";var pI=W.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:o=!1,style:l,to:c,viewTransition:d,children:p,...y},w){let T=ml(c,{relative:y.relative}),S=vs(),D=W.useContext(Nc),{navigator:b,basename:z}=W.useContext(pr),L=D!=null&&TI(T)&&d===!0,q=b.encodeLocation?b.encodeLocation(T).pathname:T.pathname,$=S.pathname,Z=D&&D.navigation&&D.navigation.location?D.navigation.location.pathname:null;t||($=$.toLowerCase(),Z=Z?Z.toLowerCase():null,q=q.toLowerCase()),Z&&z&&(Z=Si(Z,z)||Z);const re=q!=="/"&&q.endsWith("/")?q.length-1:q.length;let we=$===q||!o&&$.startsWith(q)&&$.charAt(re)==="/",_e=Z!=null&&(Z===q||!o&&Z.startsWith(q)&&Z.charAt(q.length)==="/"),N={isActive:we,isPending:_e,isTransitioning:L},I=we?e:void 0,A;typeof i=="function"?A=i(N):A=[i,we?"active":null,_e?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let P=typeof l=="function"?l(N):l;return W.createElement(Nf,{...y,"aria-current":I,className:A,ref:w,style:P,to:c,viewTransition:d},typeof p=="function"?p(N):p)});pI.displayName="NavLink";var mI=W.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:o,state:l,method:c=Ju,action:d,onSubmit:p,relative:y,preventScrollReset:w,viewTransition:T,...S},D)=>{let b=wI(),z=EI(d,{relative:y}),L=c.toLowerCase()==="get"?"get":"post",q=typeof d=="string"&&V_.test(d),$=Z=>{if(p&&p(Z),Z.defaultPrevented)return;Z.preventDefault();let re=Z.nativeEvent.submitter,we=(re==null?void 0:re.getAttribute("formmethod"))||c;b(re||Z.currentTarget,{fetcherKey:e,method:we,navigate:t,replace:o,state:l,relative:y,preventScrollReset:w,viewTransition:T})};return W.createElement("form",{ref:D,method:L,action:z,onSubmit:i?p:$,...S,"data-discover":!q&&n==="render"?"true":void 0})});mI.displayName="Form";function gI(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function M_(n){let e=W.useContext(Uo);return Ze(e,gI(n)),e}function yI(n,{target:e,replace:t,state:i,preventScrollReset:o,relative:l,viewTransition:c}={}){let d=Dc(),p=vs(),y=ml(n,{relative:l});return W.useCallback(w=>{if(GT(w,e)){w.preventDefault();let T=t!==void 0?t:tl(p)===tl(y);d(n,{replace:T,state:i,preventScrollReset:o,relative:l,viewTransition:c})}},[p,d,y,t,i,e,n,o,l,c])}var _I=0,vI=()=>`__${String(++_I)}__`;function wI(){let{router:n}=M_("useSubmit"),{basename:e}=W.useContext(pr),t=UT();return W.useCallback(async(i,o={})=>{let{action:l,method:c,encType:d,formData:p,body:y}=XT(i,e);if(o.navigate===!1){let w=o.fetcherKey||vI();await n.fetch(w,t,o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||c,formEncType:o.encType||d,flushSync:o.flushSync})}else await n.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||c,formEncType:o.encType||d,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,t])}function EI(n,{relative:e}={}){let{basename:t}=W.useContext(pr),i=W.useContext(zr);Ze(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),l={...ml(n||".",{relative:e})},c=vs();if(n==null){l.search=c.search;let d=new URLSearchParams(l.search),p=d.getAll("index");if(p.some(w=>w==="")){d.delete("index"),p.filter(T=>T).forEach(T=>d.append("index",T));let w=d.toString();l.search=w?`?${w}`:""}}return(!n||n===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Vr([t,l.pathname])),tl(l)}function TI(n,e={}){let t=W.useContext(P_);Ze(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=M_("useViewTransitionState"),o=ml(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Si(t.currentLocation.pathname,i)||t.currentLocation.pathname,c=Si(t.nextLocation.pathname,i)||t.nextLocation.pathname;return cc(o.pathname,c)!=null||cc(o.pathname,l)!=null}new TextEncoder;var Wg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},II=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],c=n[t++],d=n[t++],p=((o&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|c&63)}}return e.join("")},F_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],c=o+1<n.length,d=c?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,w=l>>2,T=(l&3)<<4|d>>4;let S=(d&15)<<2|y>>6,D=y&63;p||(D=64,c||(S=64)),i.push(t[w],t[T],t[S],t[D])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(U_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):II(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||d==null||y==null||T==null)throw new SI;const S=l<<2|d>>4;if(i.push(S),y!==64){const D=d<<4&240|y>>2;if(i.push(D),T!==64){const b=y<<6&192|T;i.push(b)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class SI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const RI=function(n){const e=U_(n);return F_.encodeByteArray(e,!0)},hc=function(n){return RI(n).replace(/\./g,"")},B_=function(n){try{return F_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI=()=>AI().__FIREBASE_DEFAULTS__,kI=()=>{if(typeof process>"u"||typeof Wg>"u")return;const n=Wg.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},PI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&B_(n[1]);return e&&JSON.parse(e)},Oc=()=>{try{return CI()||kI()||PI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},j_=n=>{var e,t;return(t=(e=Oc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},z_=n=>{const e=j_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},$_=()=>{var n;return(n=Oc())===null||n===void 0?void 0:n.config},H_=n=>{var e;return(e=Oc())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[hc(JSON.stringify(t)),hc(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function DI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function xI(){var n;const e=(n=Oc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function OI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function W_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function LI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bI(){const n=zt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function VI(){return!xI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function K_(){try{return typeof indexedDB=="object"}catch{return!1}}function G_(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function MI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI="FirebaseError";class kn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=UI,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ws.prototype.create)}}class ws{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],c=l?FI(l,i):"Error",d=`${this.serviceName}: ${c} (${o}).`;return new kn(o,d,i)}}function FI(n,e){return n.replace(BI,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const BI=/\{\$([^}]+)}/g;function jI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function nl(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],c=e[o];if(Kg(l)&&Kg(c)){if(!nl(l,c))return!1}else if(l!==c)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Kg(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function za(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function $a(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function zI(n,e){const t=new $I(n,e);return t.subscribe.bind(t)}class $I{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");HI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Ld),o.error===void 0&&(o.error=Ld),o.complete===void 0&&(o.complete=Ld);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function HI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ld(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI=1e3,WI=2,KI=4*60*60*1e3,GI=.5;function Gg(n,e=qI,t=WI){const i=e*Math.pow(t,n),o=Math.round(GI*i*(Math.random()-.5)*2);return Math.min(KI,i+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(n){return n&&n._delegate?n._delegate:n}class Cn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new NI;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(XI(e))try{this.getOrInitializeService({instanceIdentifier:as})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=as){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=as){return this.instances.has(e)}getOptions(e=as){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);i===d&&c.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const c=this.instances.get(o);return c&&e(c,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:YI(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=as){return this.component?this.component.multipleInstances?e:as:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function YI(n){return n===as?void 0:n}function XI(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new QI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ke||(ke={}));const ZI={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},eS=ke.INFO,tS={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},nS=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=tS[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lc{constructor(e){this.name=e,this._logLevel=eS,this._logHandler=nS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ZI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const rS=(n,e)=>e.some(t=>n instanceof t);let Qg,Yg;function iS(){return Qg||(Qg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sS(){return Yg||(Yg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Q_=new WeakMap,Jd=new WeakMap,Y_=new WeakMap,bd=new WeakMap,Df=new WeakMap;function oS(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(Ei(n.result)),o()},c=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&Q_.set(t,n)}).catch(()=>{}),Df.set(e,n),e}function aS(n){if(Jd.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),o()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});Jd.set(n,e)}let Zd={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Jd.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Y_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ei(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function lS(n){Zd=n(Zd)}function uS(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Vd(this),e,...t);return Y_.set(i,e.sort?e.sort():[e]),Ei(i)}:sS().includes(n)?function(...e){return n.apply(Vd(this),e),Ei(Q_.get(this))}:function(...e){return Ei(n.apply(Vd(this),e))}}function cS(n){return typeof n=="function"?uS(n):(n instanceof IDBTransaction&&aS(n),rS(n,iS())?new Proxy(n,Zd):n)}function Ei(n){if(n instanceof IDBRequest)return oS(n);if(bd.has(n))return bd.get(n);const e=cS(n);return e!==n&&(bd.set(n,e),Df.set(e,n)),e}const Vd=n=>Df.get(n);function X_(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const c=indexedDB.open(n,e),d=Ei(c);return i&&c.addEventListener("upgradeneeded",p=>{i(Ei(c.result),p.oldVersion,p.newVersion,Ei(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),d}const hS=["get","getKey","getAll","getAllKeys","count"],dS=["put","add","delete","clear"],Md=new Map;function Xg(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Md.get(e))return Md.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=dS.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||hS.includes(t)))return;const l=async function(c,...d){const p=this.transaction(c,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(d.shift())),(await Promise.all([y[t](...d),o&&p.done]))[0]};return Md.set(e,l),l}lS(n=>({...n,get:(e,t,i)=>Xg(e,t)||n.get(e,t,i),has:(e,t)=>!!Xg(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(pS(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function pS(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ef="@firebase/app",Jg="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=new Lc("@firebase/app"),mS="@firebase/app-compat",gS="@firebase/analytics-compat",yS="@firebase/analytics",_S="@firebase/app-check-compat",vS="@firebase/app-check",wS="@firebase/auth",ES="@firebase/auth-compat",TS="@firebase/database",IS="@firebase/data-connect",SS="@firebase/database-compat",RS="@firebase/functions",AS="@firebase/functions-compat",CS="@firebase/installations",kS="@firebase/installations-compat",PS="@firebase/messaging",NS="@firebase/messaging-compat",DS="@firebase/performance",xS="@firebase/performance-compat",OS="@firebase/remote-config",LS="@firebase/remote-config-compat",bS="@firebase/storage",VS="@firebase/storage-compat",MS="@firebase/firestore",US="@firebase/vertexai",FS="@firebase/firestore-compat",BS="firebase",jS="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf="[DEFAULT]",zS={[ef]:"fire-core",[mS]:"fire-core-compat",[yS]:"fire-analytics",[gS]:"fire-analytics-compat",[vS]:"fire-app-check",[_S]:"fire-app-check-compat",[wS]:"fire-auth",[ES]:"fire-auth-compat",[TS]:"fire-rtdb",[IS]:"fire-data-connect",[SS]:"fire-rtdb-compat",[RS]:"fire-fn",[AS]:"fire-fn-compat",[CS]:"fire-iid",[kS]:"fire-iid-compat",[PS]:"fire-fcm",[NS]:"fire-fcm-compat",[DS]:"fire-perf",[xS]:"fire-perf-compat",[OS]:"fire-rc",[LS]:"fire-rc-compat",[bS]:"fire-gcs",[VS]:"fire-gcs-compat",[MS]:"fire-fst",[FS]:"fire-fst-compat",[US]:"fire-vertex","fire-js":"fire-js",[BS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc=new Map,$S=new Map,nf=new Map;function Zg(n,e){try{n.container.addComponent(e)}catch(t){Ur.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function qn(n){const e=n.name;if(nf.has(e))return Ur.debug(`There were multiple attempts to register component ${e}.`),!1;nf.set(e,n);for(const t of dc.values())Zg(t,n);for(const t of $S.values())Zg(t,n);return!0}function Ni(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ir(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ti=new ws("app","Firebase",HS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ti.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es=jS;function J_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:tf,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw Ti.create("bad-app-name",{appName:String(o)});if(t||(t=$_()),!t)throw Ti.create("no-options");const l=dc.get(o);if(l){if(nl(t,l.options)&&nl(i,l.config))return l;throw Ti.create("duplicate-app",{appName:o})}const c=new JI(o);for(const p of nf.values())c.addComponent(p);const d=new qS(t,i,c);return dc.set(o,d),d}function bc(n=tf){const e=dc.get(n);if(!e&&n===tf&&$_())return J_();if(!e)throw Ti.create("no-app",{appName:n});return e}function rn(n,e,t){var i;let o=(i=zS[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const d=[`Unable to register library "${o}" with version "${e}":`];l&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ur.warn(d.join(" "));return}qn(new Cn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS="firebase-heartbeat-database",KS=1,rl="firebase-heartbeat-store";let Ud=null;function Z_(){return Ud||(Ud=X_(WS,KS,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(rl)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ti.create("idb-open",{originalErrorMessage:n.message})})),Ud}async function GS(n){try{const t=(await Z_()).transaction(rl),i=await t.objectStore(rl).get(ev(n));return await t.done,i}catch(e){if(e instanceof kn)Ur.warn(e.message);else{const t=Ti.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ur.warn(t.message)}}}async function ey(n,e){try{const i=(await Z_()).transaction(rl,"readwrite");await i.objectStore(rl).put(e,ev(n)),await i.done}catch(t){if(t instanceof kn)Ur.warn(t.message);else{const i=Ti.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ur.warn(i.message)}}}function ev(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS=1024,YS=30*24*60*60*1e3;class XS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ZS(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=ty();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const d=new Date(c.date).valueOf();return Date.now()-d<=YS}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Ur.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ty(),{heartbeatsToSend:i,unsentEntries:o}=JS(this._heartbeatsCache.heartbeats),l=hc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Ur.warn(t),""}}}function ty(){return new Date().toISOString().substring(0,10)}function JS(n,e=QS){const t=[];let i=n.slice();for(const o of n){const l=t.find(c=>c.agent===o.agent);if(l){if(l.dates.push(o.date),ny(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),ny(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class ZS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return K_()?G_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await GS(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return ey(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return ey(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function ny(n){return hc(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eR(n){qn(new Cn("platform-logger",e=>new fS(e),"PRIVATE")),qn(new Cn("heartbeat",e=>new XS(e),"PRIVATE")),rn(ef,Jg,n),rn(ef,Jg,"esm2017"),rn("fire-js","")}eR("");var tR="firebase",nR="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rn(tR,nR,"app");const tv="@firebase/installations",xf="0.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv=1e4,rv=`w:${xf}`,iv="FIS_v2",rR="https://firebaseinstallations.googleapis.com/v1",iR=60*60*1e3,sR="installations",oR="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},fs=new ws(sR,oR,aR);function sv(n){return n instanceof kn&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov({projectId:n}){return`${rR}/projects/${n}/installations`}function av(n){return{token:n.token,requestStatus:2,expiresIn:uR(n.expiresIn),creationTime:Date.now()}}async function lv(n,e){const i=(await e.json()).error;return fs.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function uv({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function lR(n,{refreshToken:e}){const t=uv(n);return t.append("Authorization",cR(e)),t}async function cv(n){const e=await n();return e.status>=500&&e.status<600?n():e}function uR(n){return Number(n.replace("s","000"))}function cR(n){return`${iv} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hR({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=ov(n),o=uv(n),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const c={fid:t,authVersion:iv,appId:n.appId,sdkVersion:rv},d={method:"POST",headers:o,body:JSON.stringify(c)},p=await cv(()=>fetch(i,d));if(p.ok){const y=await p.json();return{fid:y.fid||t,registrationStatus:2,refreshToken:y.refreshToken,authToken:av(y.authToken)}}else throw await lv("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR=/^[cdef][\w-]{21}$/,rf="";function pR(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=mR(n);return fR.test(t)?t:rf}catch{return rf}}function mR(n){return dR(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv=new Map;function fv(n,e){const t=Vc(n);pv(t,e),gR(t,e)}function pv(n,e){const t=dv.get(n);if(t)for(const i of t)i(e)}function gR(n,e){const t=yR();t&&t.postMessage({key:n,fid:e}),_R()}let ls=null;function yR(){return!ls&&"BroadcastChannel"in self&&(ls=new BroadcastChannel("[Firebase] FID Change"),ls.onmessage=n=>{pv(n.data.key,n.data.fid)}),ls}function _R(){dv.size===0&&ls&&(ls.close(),ls=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR="firebase-installations-database",wR=1,ps="firebase-installations-store";let Fd=null;function Of(){return Fd||(Fd=X_(vR,wR,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(ps)}}})),Fd}async function fc(n,e){const t=Vc(n),o=(await Of()).transaction(ps,"readwrite"),l=o.objectStore(ps),c=await l.get(t);return await l.put(e,t),await o.done,(!c||c.fid!==e.fid)&&fv(n,e.fid),e}async function mv(n){const e=Vc(n),i=(await Of()).transaction(ps,"readwrite");await i.objectStore(ps).delete(e),await i.done}async function Mc(n,e){const t=Vc(n),o=(await Of()).transaction(ps,"readwrite"),l=o.objectStore(ps),c=await l.get(t),d=e(c);return d===void 0?await l.delete(t):await l.put(d,t),await o.done,d&&(!c||c.fid!==d.fid)&&fv(n,d.fid),d}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lf(n){let e;const t=await Mc(n.appConfig,i=>{const o=ER(i),l=TR(n,o);return e=l.registrationPromise,l.installationEntry});return t.fid===rf?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function ER(n){const e=n||{fid:pR(),registrationStatus:0};return gv(e)}function TR(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(fs.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=IR(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:SR(n)}:{installationEntry:e}}async function IR(n,e){try{const t=await hR(n,e);return fc(n.appConfig,t)}catch(t){throw sv(t)&&t.customData.serverCode===409?await mv(n.appConfig):await fc(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function SR(n){let e=await ry(n.appConfig);for(;e.registrationStatus===1;)await hv(100),e=await ry(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await Lf(n);return i||t}return e}function ry(n){return Mc(n,e=>{if(!e)throw fs.create("installation-not-found");return gv(e)})}function gv(n){return RR(n)?{fid:n.fid,registrationStatus:0}:n}function RR(n){return n.registrationStatus===1&&n.registrationTime+nv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AR({appConfig:n,heartbeatServiceProvider:e},t){const i=CR(n,t),o=lR(n,t),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const c={installation:{sdkVersion:rv,appId:n.appId}},d={method:"POST",headers:o,body:JSON.stringify(c)},p=await cv(()=>fetch(i,d));if(p.ok){const y=await p.json();return av(y)}else throw await lv("Generate Auth Token",p)}function CR(n,{fid:e}){return`${ov(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bf(n,e=!1){let t;const i=await Mc(n.appConfig,l=>{if(!yv(l))throw fs.create("not-registered");const c=l.authToken;if(!e&&NR(c))return l;if(c.requestStatus===1)return t=kR(n,e),l;{if(!navigator.onLine)throw fs.create("app-offline");const d=xR(l);return t=PR(n,d),d}});return t?await t:i.authToken}async function kR(n,e){let t=await iy(n.appConfig);for(;t.authToken.requestStatus===1;)await hv(100),t=await iy(n.appConfig);const i=t.authToken;return i.requestStatus===0?bf(n,e):i}function iy(n){return Mc(n,e=>{if(!yv(e))throw fs.create("not-registered");const t=e.authToken;return OR(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function PR(n,e){try{const t=await AR(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await fc(n.appConfig,i),t}catch(t){if(sv(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await mv(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await fc(n.appConfig,i)}throw t}}function yv(n){return n!==void 0&&n.registrationStatus===2}function NR(n){return n.requestStatus===2&&!DR(n)}function DR(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+iR}function xR(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function OR(n){return n.requestStatus===1&&n.requestTime+nv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LR(n){const e=n,{installationEntry:t,registrationPromise:i}=await Lf(e);return i?i.catch(console.error):bf(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bR(n,e=!1){const t=n;return await VR(t),(await bf(t,e)).token}async function VR(n){const{registrationPromise:e}=await Lf(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MR(n){if(!n||!n.options)throw Bd("App Configuration");if(!n.name)throw Bd("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Bd(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Bd(n){return fs.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v="installations",UR="installations-internal",FR=n=>{const e=n.getProvider("app").getImmediate(),t=MR(e),i=Ni(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},BR=n=>{const e=n.getProvider("app").getImmediate(),t=Ni(e,_v).getImmediate();return{getId:()=>LR(t),getToken:o=>bR(t,o)}};function jR(){qn(new Cn(_v,FR,"PUBLIC")),qn(new Cn(UR,BR,"PRIVATE"))}jR();rn(tv,xf);rn(tv,xf,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc="analytics",zR="firebase_id",$R="origin",HR=60*1e3,qR="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Vf="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=new Lc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WR={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},pn=new ws("analytics","Analytics",WR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KR(n){if(!n.startsWith(Vf)){const e=pn.create("invalid-gtag-resource",{gtagURL:n});return sn.warn(e.message),""}return n}function vv(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function GR(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function QR(n,e){const t=GR("firebase-js-sdk-policy",{createScriptURL:KR}),i=document.createElement("script"),o=`${Vf}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(o):o,i.async=!0,document.head.appendChild(i)}function YR(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function XR(n,e,t,i,o,l){const c=i[o];try{if(c)await e[c];else{const p=(await vv(t)).find(y=>y.measurementId===o);p&&await e[p.appId]}}catch(d){sn.error(d)}n("config",o,l)}async function JR(n,e,t,i,o){try{let l=[];if(o&&o.send_to){let c=o.send_to;Array.isArray(c)||(c=[c]);const d=await vv(t);for(const p of c){const y=d.find(T=>T.measurementId===p),w=y&&e[y.appId];if(w)l.push(w);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),n("event",i,o||{})}catch(l){sn.error(l)}}function ZR(n,e,t,i){async function o(l,...c){try{if(l==="event"){const[d,p]=c;await JR(n,e,t,d,p)}else if(l==="config"){const[d,p]=c;await XR(n,e,t,i,d,p)}else if(l==="consent"){const[d,p]=c;n("consent",d,p)}else if(l==="get"){const[d,p,y]=c;n("get",d,p,y)}else if(l==="set"){const[d]=c;n("set",d)}else n(l,...c)}catch(d){sn.error(d)}}return o}function e1(n,e,t,i,o){let l=function(...c){window[i].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=ZR(l,n,e,t),{gtagCore:l,wrappedGtag:window[o]}}function t1(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Vf)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1=30,r1=1e3;class i1{constructor(e={},t=r1){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const wv=new i1;function s1(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function o1(n){var e;const{appId:t,apiKey:i}=n,o={method:"GET",headers:s1(i)},l=qR.replace("{app-id}",t),c=await fetch(l,o);if(c.status!==200&&c.status!==304){let d="";try{const p=await c.json();!((e=p.error)===null||e===void 0)&&e.message&&(d=p.error.message)}catch{}throw pn.create("config-fetch-failed",{httpStatus:c.status,responseMessage:d})}return c.json()}async function a1(n,e=wv,t){const{appId:i,apiKey:o,measurementId:l}=n.options;if(!i)throw pn.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:i};throw pn.create("no-api-key")}const c=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},d=new c1;return setTimeout(async()=>{d.abort()},HR),Ev({appId:i,apiKey:o,measurementId:l},c,d,e)}async function Ev(n,{throttleEndTimeMillis:e,backoffCount:t},i,o=wv){var l;const{appId:c,measurementId:d}=n;try{await l1(i,e)}catch(p){if(d)return sn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:c,measurementId:d};throw p}try{const p=await o1(n);return o.deleteThrottleMetadata(c),p}catch(p){const y=p;if(!u1(y)){if(o.deleteThrottleMetadata(c),d)return sn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:c,measurementId:d};throw p}const w=Number((l=y==null?void 0:y.customData)===null||l===void 0?void 0:l.httpStatus)===503?Gg(t,o.intervalMillis,n1):Gg(t,o.intervalMillis),T={throttleEndTimeMillis:Date.now()+w,backoffCount:t+1};return o.setThrottleMetadata(c,T),sn.debug(`Calling attemptFetch again in ${w} millis`),Ev(n,T,i,o)}}function l1(n,e){return new Promise((t,i)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(t,o);n.addEventListener(()=>{clearTimeout(l),i(pn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function u1(n){if(!(n instanceof kn)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class c1{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function h1(n,e,t,i,o){if(o&&o.global){n("event",t,i);return}else{const l=await e,c=Object.assign(Object.assign({},i),{send_to:l});n("event",t,c)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d1(){if(K_())try{await G_()}catch(n){return sn.warn(pn.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return sn.warn(pn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function f1(n,e,t,i,o,l,c){var d;const p=a1(n);p.then(D=>{t[D.measurementId]=D.appId,n.options.measurementId&&D.measurementId!==n.options.measurementId&&sn.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${D.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(D=>sn.error(D)),e.push(p);const y=d1().then(D=>{if(D)return i.getId()}),[w,T]=await Promise.all([p,y]);t1(l)||QR(l,w.measurementId),o("js",new Date);const S=(d=c==null?void 0:c.config)!==null&&d!==void 0?d:{};return S[$R]="firebase",S.update=!0,T!=null&&(S[zR]=T),o("config",w.measurementId,S),w.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e){this.app=e}_delete(){return delete Ga[this.app.options.appId],Promise.resolve()}}let Ga={},sy=[];const oy={};let jd="dataLayer",m1="gtag",ay,Tv,ly=!1;function g1(){const n=[];if(W_()&&n.push("This is a browser extension environment."),MI()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,o)=>`(${o+1}) ${i}`).join(" "),t=pn.create("invalid-analytics-context",{errorInfo:e});sn.warn(t.message)}}function y1(n,e,t){g1();const i=n.options.appId;if(!i)throw pn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)sn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw pn.create("no-api-key");if(Ga[i]!=null)throw pn.create("already-exists",{id:i});if(!ly){YR(jd);const{wrappedGtag:l,gtagCore:c}=e1(Ga,sy,oy,jd,m1);Tv=l,ay=c,ly=!0}return Ga[i]=f1(n,sy,oy,e,ay,jd,t),new p1(n)}function _1(n=bc()){n=ht(n);const e=Ni(n,pc);return e.isInitialized()?e.getImmediate():v1(n)}function v1(n,e={}){const t=Ni(n,pc);if(t.isInitialized()){const o=t.getImmediate();if(nl(e,t.getOptions()))return o;throw pn.create("already-initialized")}return t.initialize({options:e})}function w1(n,e,t,i){n=ht(n),h1(Tv,Ga[n.app.options.appId],e,t,i).catch(o=>sn.error(o))}const uy="@firebase/analytics",cy="0.10.10";function E1(){qn(new Cn(pc,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return y1(i,o,t)},"PUBLIC")),qn(new Cn("analytics-internal",n,"PRIVATE")),rn(uy,cy),rn(uy,cy,"esm2017");function n(e){try{const t=e.getProvider(pc).getImmediate();return{logEvent:(i,o,l)=>w1(t,i,o,l)}}catch(t){throw pn.create("interop-component-reg-failed",{reason:t})}}}E1();var hy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cs,Iv;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,I){function A(){}A.prototype=I.prototype,N.D=I.prototype,N.prototype=new A,N.prototype.constructor=N,N.C=function(P,O,M){for(var C=Array(arguments.length-2),it=2;it<arguments.length;it++)C[it-2]=arguments[it];return I.prototype[O].apply(P,C)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,I,A){A||(A=0);var P=Array(16);if(typeof I=="string")for(var O=0;16>O;++O)P[O]=I.charCodeAt(A++)|I.charCodeAt(A++)<<8|I.charCodeAt(A++)<<16|I.charCodeAt(A++)<<24;else for(O=0;16>O;++O)P[O]=I[A++]|I[A++]<<8|I[A++]<<16|I[A++]<<24;I=N.g[0],A=N.g[1],O=N.g[2];var M=N.g[3],C=I+(M^A&(O^M))+P[0]+3614090360&4294967295;I=A+(C<<7&4294967295|C>>>25),C=M+(O^I&(A^O))+P[1]+3905402710&4294967295,M=I+(C<<12&4294967295|C>>>20),C=O+(A^M&(I^A))+P[2]+606105819&4294967295,O=M+(C<<17&4294967295|C>>>15),C=A+(I^O&(M^I))+P[3]+3250441966&4294967295,A=O+(C<<22&4294967295|C>>>10),C=I+(M^A&(O^M))+P[4]+4118548399&4294967295,I=A+(C<<7&4294967295|C>>>25),C=M+(O^I&(A^O))+P[5]+1200080426&4294967295,M=I+(C<<12&4294967295|C>>>20),C=O+(A^M&(I^A))+P[6]+2821735955&4294967295,O=M+(C<<17&4294967295|C>>>15),C=A+(I^O&(M^I))+P[7]+4249261313&4294967295,A=O+(C<<22&4294967295|C>>>10),C=I+(M^A&(O^M))+P[8]+1770035416&4294967295,I=A+(C<<7&4294967295|C>>>25),C=M+(O^I&(A^O))+P[9]+2336552879&4294967295,M=I+(C<<12&4294967295|C>>>20),C=O+(A^M&(I^A))+P[10]+4294925233&4294967295,O=M+(C<<17&4294967295|C>>>15),C=A+(I^O&(M^I))+P[11]+2304563134&4294967295,A=O+(C<<22&4294967295|C>>>10),C=I+(M^A&(O^M))+P[12]+1804603682&4294967295,I=A+(C<<7&4294967295|C>>>25),C=M+(O^I&(A^O))+P[13]+4254626195&4294967295,M=I+(C<<12&4294967295|C>>>20),C=O+(A^M&(I^A))+P[14]+2792965006&4294967295,O=M+(C<<17&4294967295|C>>>15),C=A+(I^O&(M^I))+P[15]+1236535329&4294967295,A=O+(C<<22&4294967295|C>>>10),C=I+(O^M&(A^O))+P[1]+4129170786&4294967295,I=A+(C<<5&4294967295|C>>>27),C=M+(A^O&(I^A))+P[6]+3225465664&4294967295,M=I+(C<<9&4294967295|C>>>23),C=O+(I^A&(M^I))+P[11]+643717713&4294967295,O=M+(C<<14&4294967295|C>>>18),C=A+(M^I&(O^M))+P[0]+3921069994&4294967295,A=O+(C<<20&4294967295|C>>>12),C=I+(O^M&(A^O))+P[5]+3593408605&4294967295,I=A+(C<<5&4294967295|C>>>27),C=M+(A^O&(I^A))+P[10]+38016083&4294967295,M=I+(C<<9&4294967295|C>>>23),C=O+(I^A&(M^I))+P[15]+3634488961&4294967295,O=M+(C<<14&4294967295|C>>>18),C=A+(M^I&(O^M))+P[4]+3889429448&4294967295,A=O+(C<<20&4294967295|C>>>12),C=I+(O^M&(A^O))+P[9]+568446438&4294967295,I=A+(C<<5&4294967295|C>>>27),C=M+(A^O&(I^A))+P[14]+3275163606&4294967295,M=I+(C<<9&4294967295|C>>>23),C=O+(I^A&(M^I))+P[3]+4107603335&4294967295,O=M+(C<<14&4294967295|C>>>18),C=A+(M^I&(O^M))+P[8]+1163531501&4294967295,A=O+(C<<20&4294967295|C>>>12),C=I+(O^M&(A^O))+P[13]+2850285829&4294967295,I=A+(C<<5&4294967295|C>>>27),C=M+(A^O&(I^A))+P[2]+4243563512&4294967295,M=I+(C<<9&4294967295|C>>>23),C=O+(I^A&(M^I))+P[7]+1735328473&4294967295,O=M+(C<<14&4294967295|C>>>18),C=A+(M^I&(O^M))+P[12]+2368359562&4294967295,A=O+(C<<20&4294967295|C>>>12),C=I+(A^O^M)+P[5]+4294588738&4294967295,I=A+(C<<4&4294967295|C>>>28),C=M+(I^A^O)+P[8]+2272392833&4294967295,M=I+(C<<11&4294967295|C>>>21),C=O+(M^I^A)+P[11]+1839030562&4294967295,O=M+(C<<16&4294967295|C>>>16),C=A+(O^M^I)+P[14]+4259657740&4294967295,A=O+(C<<23&4294967295|C>>>9),C=I+(A^O^M)+P[1]+2763975236&4294967295,I=A+(C<<4&4294967295|C>>>28),C=M+(I^A^O)+P[4]+1272893353&4294967295,M=I+(C<<11&4294967295|C>>>21),C=O+(M^I^A)+P[7]+4139469664&4294967295,O=M+(C<<16&4294967295|C>>>16),C=A+(O^M^I)+P[10]+3200236656&4294967295,A=O+(C<<23&4294967295|C>>>9),C=I+(A^O^M)+P[13]+681279174&4294967295,I=A+(C<<4&4294967295|C>>>28),C=M+(I^A^O)+P[0]+3936430074&4294967295,M=I+(C<<11&4294967295|C>>>21),C=O+(M^I^A)+P[3]+3572445317&4294967295,O=M+(C<<16&4294967295|C>>>16),C=A+(O^M^I)+P[6]+76029189&4294967295,A=O+(C<<23&4294967295|C>>>9),C=I+(A^O^M)+P[9]+3654602809&4294967295,I=A+(C<<4&4294967295|C>>>28),C=M+(I^A^O)+P[12]+3873151461&4294967295,M=I+(C<<11&4294967295|C>>>21),C=O+(M^I^A)+P[15]+530742520&4294967295,O=M+(C<<16&4294967295|C>>>16),C=A+(O^M^I)+P[2]+3299628645&4294967295,A=O+(C<<23&4294967295|C>>>9),C=I+(O^(A|~M))+P[0]+4096336452&4294967295,I=A+(C<<6&4294967295|C>>>26),C=M+(A^(I|~O))+P[7]+1126891415&4294967295,M=I+(C<<10&4294967295|C>>>22),C=O+(I^(M|~A))+P[14]+2878612391&4294967295,O=M+(C<<15&4294967295|C>>>17),C=A+(M^(O|~I))+P[5]+4237533241&4294967295,A=O+(C<<21&4294967295|C>>>11),C=I+(O^(A|~M))+P[12]+1700485571&4294967295,I=A+(C<<6&4294967295|C>>>26),C=M+(A^(I|~O))+P[3]+2399980690&4294967295,M=I+(C<<10&4294967295|C>>>22),C=O+(I^(M|~A))+P[10]+4293915773&4294967295,O=M+(C<<15&4294967295|C>>>17),C=A+(M^(O|~I))+P[1]+2240044497&4294967295,A=O+(C<<21&4294967295|C>>>11),C=I+(O^(A|~M))+P[8]+1873313359&4294967295,I=A+(C<<6&4294967295|C>>>26),C=M+(A^(I|~O))+P[15]+4264355552&4294967295,M=I+(C<<10&4294967295|C>>>22),C=O+(I^(M|~A))+P[6]+2734768916&4294967295,O=M+(C<<15&4294967295|C>>>17),C=A+(M^(O|~I))+P[13]+1309151649&4294967295,A=O+(C<<21&4294967295|C>>>11),C=I+(O^(A|~M))+P[4]+4149444226&4294967295,I=A+(C<<6&4294967295|C>>>26),C=M+(A^(I|~O))+P[11]+3174756917&4294967295,M=I+(C<<10&4294967295|C>>>22),C=O+(I^(M|~A))+P[2]+718787259&4294967295,O=M+(C<<15&4294967295|C>>>17),C=A+(M^(O|~I))+P[9]+3951481745&4294967295,N.g[0]=N.g[0]+I&4294967295,N.g[1]=N.g[1]+(O+(C<<21&4294967295|C>>>11))&4294967295,N.g[2]=N.g[2]+O&4294967295,N.g[3]=N.g[3]+M&4294967295}i.prototype.u=function(N,I){I===void 0&&(I=N.length);for(var A=I-this.blockSize,P=this.B,O=this.h,M=0;M<I;){if(O==0)for(;M<=A;)o(this,N,M),M+=this.blockSize;if(typeof N=="string"){for(;M<I;)if(P[O++]=N.charCodeAt(M++),O==this.blockSize){o(this,P),O=0;break}}else for(;M<I;)if(P[O++]=N[M++],O==this.blockSize){o(this,P),O=0;break}}this.h=O,this.o+=I},i.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var I=1;I<N.length-8;++I)N[I]=0;var A=8*this.o;for(I=N.length-8;I<N.length;++I)N[I]=A&255,A/=256;for(this.u(N),N=Array(16),I=A=0;4>I;++I)for(var P=0;32>P;P+=8)N[A++]=this.g[I]>>>P&255;return N};function l(N,I){var A=d;return Object.prototype.hasOwnProperty.call(A,N)?A[N]:A[N]=I(N)}function c(N,I){this.h=I;for(var A=[],P=!0,O=N.length-1;0<=O;O--){var M=N[O]|0;P&&M==I||(A[O]=M,P=!1)}this.g=A}var d={};function p(N){return-128<=N&&128>N?l(N,function(I){return new c([I|0],0>I?-1:0)}):new c([N|0],0>N?-1:0)}function y(N){if(isNaN(N)||!isFinite(N))return T;if(0>N)return L(y(-N));for(var I=[],A=1,P=0;N>=A;P++)I[P]=N/A|0,A*=4294967296;return new c(I,0)}function w(N,I){if(N.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(N.charAt(0)=="-")return L(w(N.substring(1),I));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=y(Math.pow(I,8)),P=T,O=0;O<N.length;O+=8){var M=Math.min(8,N.length-O),C=parseInt(N.substring(O,O+M),I);8>M?(M=y(Math.pow(I,M)),P=P.j(M).add(y(C))):(P=P.j(A),P=P.add(y(C)))}return P}var T=p(0),S=p(1),D=p(16777216);n=c.prototype,n.m=function(){if(z(this))return-L(this).m();for(var N=0,I=1,A=0;A<this.g.length;A++){var P=this.i(A);N+=(0<=P?P:4294967296+P)*I,I*=4294967296}return N},n.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(b(this))return"0";if(z(this))return"-"+L(this).toString(N);for(var I=y(Math.pow(N,6)),A=this,P="";;){var O=re(A,I).g;A=q(A,O.j(I));var M=((0<A.g.length?A.g[0]:A.h)>>>0).toString(N);if(A=O,b(A))return M+P;for(;6>M.length;)M="0"+M;P=M+P}},n.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function b(N){if(N.h!=0)return!1;for(var I=0;I<N.g.length;I++)if(N.g[I]!=0)return!1;return!0}function z(N){return N.h==-1}n.l=function(N){return N=q(this,N),z(N)?-1:b(N)?0:1};function L(N){for(var I=N.g.length,A=[],P=0;P<I;P++)A[P]=~N.g[P];return new c(A,~N.h).add(S)}n.abs=function(){return z(this)?L(this):this},n.add=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],P=0,O=0;O<=I;O++){var M=P+(this.i(O)&65535)+(N.i(O)&65535),C=(M>>>16)+(this.i(O)>>>16)+(N.i(O)>>>16);P=C>>>16,M&=65535,C&=65535,A[O]=C<<16|M}return new c(A,A[A.length-1]&-2147483648?-1:0)};function q(N,I){return N.add(L(I))}n.j=function(N){if(b(this)||b(N))return T;if(z(this))return z(N)?L(this).j(L(N)):L(L(this).j(N));if(z(N))return L(this.j(L(N)));if(0>this.l(D)&&0>N.l(D))return y(this.m()*N.m());for(var I=this.g.length+N.g.length,A=[],P=0;P<2*I;P++)A[P]=0;for(P=0;P<this.g.length;P++)for(var O=0;O<N.g.length;O++){var M=this.i(P)>>>16,C=this.i(P)&65535,it=N.i(O)>>>16,Ot=N.i(O)&65535;A[2*P+2*O]+=C*Ot,$(A,2*P+2*O),A[2*P+2*O+1]+=M*Ot,$(A,2*P+2*O+1),A[2*P+2*O+1]+=C*it,$(A,2*P+2*O+1),A[2*P+2*O+2]+=M*it,$(A,2*P+2*O+2)}for(P=0;P<I;P++)A[P]=A[2*P+1]<<16|A[2*P];for(P=I;P<2*I;P++)A[P]=0;return new c(A,0)};function $(N,I){for(;(N[I]&65535)!=N[I];)N[I+1]+=N[I]>>>16,N[I]&=65535,I++}function Z(N,I){this.g=N,this.h=I}function re(N,I){if(b(I))throw Error("division by zero");if(b(N))return new Z(T,T);if(z(N))return I=re(L(N),I),new Z(L(I.g),L(I.h));if(z(I))return I=re(N,L(I)),new Z(L(I.g),I.h);if(30<N.g.length){if(z(N)||z(I))throw Error("slowDivide_ only works with positive integers.");for(var A=S,P=I;0>=P.l(N);)A=we(A),P=we(P);var O=_e(A,1),M=_e(P,1);for(P=_e(P,2),A=_e(A,2);!b(P);){var C=M.add(P);0>=C.l(N)&&(O=O.add(A),M=C),P=_e(P,1),A=_e(A,1)}return I=q(N,O.j(I)),new Z(O,I)}for(O=T;0<=N.l(I);){for(A=Math.max(1,Math.floor(N.m()/I.m())),P=Math.ceil(Math.log(A)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),M=y(A),C=M.j(I);z(C)||0<C.l(N);)A-=P,M=y(A),C=M.j(I);b(M)&&(M=S),O=O.add(M),N=q(N,C)}return new Z(O,N)}n.A=function(N){return re(this,N).h},n.and=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],P=0;P<I;P++)A[P]=this.i(P)&N.i(P);return new c(A,this.h&N.h)},n.or=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],P=0;P<I;P++)A[P]=this.i(P)|N.i(P);return new c(A,this.h|N.h)},n.xor=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],P=0;P<I;P++)A[P]=this.i(P)^N.i(P);return new c(A,this.h^N.h)};function we(N){for(var I=N.g.length+1,A=[],P=0;P<I;P++)A[P]=N.i(P)<<1|N.i(P-1)>>>31;return new c(A,N.h)}function _e(N,I){var A=I>>5;I%=32;for(var P=N.g.length-A,O=[],M=0;M<P;M++)O[M]=0<I?N.i(M+A)>>>I|N.i(M+A+1)<<32-I:N.i(M+A);return new c(O,N.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,Iv=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=y,c.fromString=w,cs=c}).apply(typeof hy<"u"?hy:typeof self<"u"?self:typeof window<"u"?window:{});var $u=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Sv,Ha,Rv,ec,sf,Av,Cv,kv;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof $u=="object"&&$u];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var _=i;u=u.split(".");for(var E=0;E<u.length-1;E++){var U=u[E];if(!(U in _))break e;_=_[U]}u=u[u.length-1],E=_[u],m=m(E),m!=E&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var _=0,E=!1,U={next:function(){if(!E&&_<u.length){var H=_++;return{value:m(H,u[H]),done:!1}}return E=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function w(u,m,_){return u.call.apply(u.bind,arguments)}function T(u,m,_){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,E),u.apply(m,U)}}return function(){return u.apply(m,arguments)}}function S(u,m,_){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:T,S.apply(null,arguments)}function D(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var E=_.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function b(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(E,U,H){for(var te=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)te[Be-2]=arguments[Be];return m.prototype[U].apply(E,te)}}function z(u){const m=u.length;if(0<m){const _=Array(m);for(let E=0;E<m;E++)_[E]=u[E];return _}return[]}function L(u,m){for(let _=1;_<arguments.length;_++){const E=arguments[_];if(p(E)){const U=u.length||0,H=E.length||0;u.length=U+H;for(let te=0;te<H;te++)u[U+te]=E[te]}else u.push(E)}}class q{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function $(u){return/^[\s\xa0]*$/.test(u)}function Z(){var u=d.navigator;return u&&(u=u.userAgent)?u:""}function re(u){return re[" "](u),u}re[" "]=function(){};var we=Z().indexOf("Gecko")!=-1&&!(Z().toLowerCase().indexOf("webkit")!=-1&&Z().indexOf("Edge")==-1)&&!(Z().indexOf("Trident")!=-1||Z().indexOf("MSIE")!=-1)&&Z().indexOf("Edge")==-1;function _e(u,m,_){for(const E in u)m.call(_,u[E],E,u)}function N(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function I(u){const m={};for(const _ in u)m[_]=u[_];return m}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(u,m){let _,E;for(let U=1;U<arguments.length;U++){E=arguments[U];for(_ in E)u[_]=E[_];for(let H=0;H<A.length;H++)_=A[H],Object.prototype.hasOwnProperty.call(E,_)&&(u[_]=E[_])}}function O(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function M(u){d.setTimeout(()=>{throw u},0)}function C(){var u=de;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class it{constructor(){this.h=this.g=null}add(m,_){const E=Ot.get();E.set(m,_),this.h?this.h.next=E:this.g=E,this.h=E}}var Ot=new q(()=>new Lt,u=>u.reset());class Lt{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let je,ne=!1,de=new it,se=()=>{const u=d.Promise.resolve(void 0);je=()=>{u.then(V)}};var V=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(_){M(_)}var m=Ot;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}ne=!1};function G(){this.s=this.s,this.C=this.C}G.prototype.s=!1,G.prototype.ma=function(){this.s||(this.s=!0,this.N())},G.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function he(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}he.prototype.h=function(){this.defaultPrevented=!0};var Re=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};d.addEventListener("test",_,m),d.removeEventListener("test",_,m)}catch{}return u}();function Ae(u,m){if(he.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(we){e:{try{re(m.nodeName);var U=!0;break e}catch{}U=!1}U||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:xe[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ae.aa.h.call(this)}}b(Ae,he);var xe={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),Ue=0;function $e(u,m,_,E,U){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!E,this.ha=U,this.key=++Ue,this.da=this.fa=!1}function wt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function mr(u){this.src=u,this.g={},this.h=0}mr.prototype.add=function(u,m,_,E,U){var H=u.toString();u=this.g[H],u||(u=this.g[H]=[],this.h++);var te=$r(u,m,E,U);return-1<te?(m=u[te],_||(m.fa=!1)):(m=new $e(m,this.src,H,!!E,U),m.fa=_,u.push(m)),m};function Cs(u,m){var _=m.type;if(_ in u.g){var E=u.g[_],U=Array.prototype.indexOf.call(E,m,void 0),H;(H=0<=U)&&Array.prototype.splice.call(E,U,1),H&&(wt(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function $r(u,m,_,E){for(var U=0;U<u.length;++U){var H=u[U];if(!H.da&&H.listener==m&&H.capture==!!_&&H.ha==E)return U}return-1}var Oi="closure_lm_"+(1e6*Math.random()|0),ks={};function Ho(u,m,_,E,U){if(Array.isArray(m)){for(var H=0;H<m.length;H++)Ho(u,m[H],_,E,U);return null}return _=Ko(_),u&&u[Me]?u.K(m,_,y(E)?!!E.capture:!!E,U):qo(u,m,_,!1,E,U)}function qo(u,m,_,E,U,H){if(!m)throw Error("Invalid event type");var te=y(U)?!!U.capture:!!U,Be=Ns(u);if(Be||(u[Oi]=Be=new mr(u)),_=Be.add(m,_,E,te,H),_.proxy)return _;if(E=Al(),_.proxy=E,E.src=u,E.listener=_,u.addEventListener)Re||(U=te),U===void 0&&(U=!1),u.addEventListener(m.toString(),E,U);else if(u.attachEvent)u.attachEvent(yr(m.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Al(){function u(_){return m.call(u.src,u.listener,_)}const m=Wo;return u}function Ps(u,m,_,E,U){if(Array.isArray(m))for(var H=0;H<m.length;H++)Ps(u,m[H],_,E,U);else E=y(E)?!!E.capture:!!E,_=Ko(_),u&&u[Me]?(u=u.i,m=String(m).toString(),m in u.g&&(H=u.g[m],_=$r(H,_,E,U),-1<_&&(wt(H[_]),Array.prototype.splice.call(H,_,1),H.length==0&&(delete u.g[m],u.h--)))):u&&(u=Ns(u))&&(m=u.g[m.toString()],u=-1,m&&(u=$r(m,_,E,U)),(_=-1<u?m[u]:null)&&gr(_))}function gr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Me])Cs(m.i,u);else{var _=u.type,E=u.proxy;m.removeEventListener?m.removeEventListener(_,E,u.capture):m.detachEvent?m.detachEvent(yr(_),E):m.addListener&&m.removeListener&&m.removeListener(E),(_=Ns(m))?(Cs(_,u),_.h==0&&(_.src=null,m[Oi]=null)):wt(u)}}}function yr(u){return u in ks?ks[u]:ks[u]="on"+u}function Wo(u,m){if(u.da)u=!0;else{m=new Ae(m,this);var _=u.listener,E=u.ha||u.src;u.fa&&gr(u),u=_.call(E,m)}return u}function Ns(u){return u=u[Oi],u instanceof mr?u:null}var Ds="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ko(u){return typeof u=="function"?u:(u[Ds]||(u[Ds]=function(m){return u.handleEvent(m)}),u[Ds])}function dt(){G.call(this),this.i=new mr(this),this.M=this,this.F=null}b(dt,G),dt.prototype[Me]=!0,dt.prototype.removeEventListener=function(u,m,_,E){Ps(this,u,m,_,E)};function ft(u,m){var _,E=u.F;if(E)for(_=[];E;E=E.F)_.push(E);if(u=u.M,E=m.type||m,typeof m=="string")m=new he(m,u);else if(m instanceof he)m.target=m.target||u;else{var U=m;m=new he(E,u),P(m,U)}if(U=!0,_)for(var H=_.length-1;0<=H;H--){var te=m.g=_[H];U=_r(te,E,!0,m)&&U}if(te=m.g=u,U=_r(te,E,!0,m)&&U,U=_r(te,E,!1,m)&&U,_)for(H=0;H<_.length;H++)te=m.g=_[H],U=_r(te,E,!1,m)&&U}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],E=0;E<_.length;E++)wt(_[E]);delete u.g[m],u.h--}}this.F=null},dt.prototype.K=function(u,m,_,E){return this.i.add(String(u),m,!1,_,E)},dt.prototype.L=function(u,m,_,E){return this.i.add(String(u),m,!0,_,E)};function _r(u,m,_,E){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var U=!0,H=0;H<m.length;++H){var te=m[H];if(te&&!te.da&&te.capture==_){var Be=te.listener,pt=te.ha||te.src;te.fa&&Cs(u.i,te),U=Be.call(pt,E)!==!1&&U}}return U&&!E.defaultPrevented}function Go(u,m,_){if(typeof u=="function")_&&(u=S(u,_));else if(u&&typeof u.handleEvent=="function")u=S(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:d.setTimeout(u,m||0)}function Hr(u){u.g=Go(()=>{u.g=null,u.i&&(u.i=!1,Hr(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Li extends G{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Hr(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bi(u){G.call(this),this.h=u,this.g={}}b(bi,G);var Qo=[];function Yo(u){_e(u.g,function(m,_){this.g.hasOwnProperty(_)&&gr(m)},u),u.g={}}bi.prototype.N=function(){bi.aa.N.call(this),Yo(this)},bi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xo=d.JSON.stringify,Jo=d.JSON.parse,Zo=class{stringify(u){return d.JSON.stringify(u,void 0)}parse(u){return d.JSON.parse(u,void 0)}};function Vi(){}Vi.prototype.h=null;function xs(u){return u.h||(u.h=u.i())}function Os(){}var mn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Kn(){he.call(this,"d")}b(Kn,he);function Ls(){he.call(this,"c")}b(Ls,he);var Gn={},ea=null;function Mi(){return ea=ea||new dt}Gn.La="serverreachability";function ta(u){he.call(this,Gn.La,u)}b(ta,he);function vr(u){const m=Mi();ft(m,new ta(m))}Gn.STAT_EVENT="statevent";function na(u,m){he.call(this,Gn.STAT_EVENT,u),this.stat=m}b(na,he);function st(u){const m=Mi();ft(m,new na(m,u))}Gn.Ma="timingevent";function bs(u,m){he.call(this,Gn.Ma,u),this.size=m}b(bs,he);function Pn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){u()},m)}function Ui(){this.g=!0}Ui.prototype.xa=function(){this.g=!1};function Fi(u,m,_,E,U,H){u.info(function(){if(u.g)if(H)for(var te="",Be=H.split("&"),pt=0;pt<Be.length;pt++){var Oe=Be[pt].split("=");if(1<Oe.length){var Et=Oe[0];Oe=Oe[1];var lt=Et.split("_");te=2<=lt.length&&lt[1]=="type"?te+(Et+"="+Oe+"&"):te+(Et+"=redacted&")}}else te=null;else te=H;return"XMLHTTP REQ ("+E+") [attempt "+U+"]: "+m+`
`+_+`
`+te})}function Vs(u,m,_,E,U,H,te){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+U+"]: "+m+`
`+_+`
`+H+" "+te})}function Nn(u,m,_,E){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+th(u,_)+(E?" "+E:"")})}function ra(u,m){u.info(function(){return"TIMEOUT: "+m})}Ui.prototype.info=function(){};function th(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var E=_[u];if(!(2>E.length)){var U=E[1];if(Array.isArray(U)&&!(1>U.length)){var H=U[0];if(H!="noop"&&H!="stop"&&H!="close")for(var te=1;te<U.length;te++)U[te]=""}}}}return Xo(_)}catch{return m}}var Ms={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Cl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Dn;function Bi(){}b(Bi,Vi),Bi.prototype.g=function(){return new XMLHttpRequest},Bi.prototype.i=function(){return{}},Dn=new Bi;function xn(u,m,_,E){this.j=u,this.i=m,this.l=_,this.R=E||1,this.U=new bi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new kl}function kl(){this.i=null,this.g="",this.h=!1}var ia={},Us={};function Fs(u,m,_){u.L=1,u.v=Qr(an(m)),u.m=_,u.P=!0,sa(u,null)}function sa(u,m){u.F=Date.now(),He(u),u.A=an(u.v);var _=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),Xr(_.i,"t",E),u.C=0,_=u.j.J,u.h=new kl,u.g=Wl(u.j,_?m:null,!u.m),0<u.O&&(u.M=new Li(S(u.Y,u,u.g),u.O)),m=u.U,_=u.g,E=u.ca;var U="readystatechange";Array.isArray(U)||(U&&(Qo[0]=U.toString()),U=Qo);for(var H=0;H<U.length;H++){var te=Ho(_,U[H],E||m.handleEvent,!1,m.h||m);if(!te)break;m.g[te.key]=te}m=u.H?I(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),vr(),Fi(u.i,u.u,u.A,u.l,u.R,u.m)}xn.prototype.ca=function(u){u=u.target;const m=this.M;m&&Qt(u)==3?m.j():this.Y(u)},xn.prototype.Y=function(u){try{if(u==this.g)e:{const lt=Qt(this.g);var m=this.g.Ba();const _n=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||ha(this.g)))){this.J||lt!=4||m==7||(m==8||0>=_n?vr(3):vr(2)),ji(this);var _=this.g.Z();this.X=_;t:if(Pl(this)){var E=ha(this.g);u="";var U=E.length,H=Qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gn(this),qr(this);var te="";break t}this.h.i=new d.TextDecoder}for(m=0;m<U;m++)this.h.h=!0,u+=this.h.i.decode(E[m],{stream:!(H&&m==U-1)});E.length=0,this.h.g+=u,this.C=0,te=this.h.g}else te=this.g.oa();if(this.o=_==200,Vs(this.i,this.u,this.A,this.l,this.R,lt,_),this.o){if(this.T&&!this.K){t:{if(this.g){var Be,pt=this.g;if((Be=pt.g?pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(Be)){var Oe=Be;break t}}Oe=null}if(_=Oe)Nn(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,oa(this,_);else{this.o=!1,this.s=3,st(12),gn(this),qr(this);break e}}if(this.P){_=!0;let un;for(;!this.J&&this.C<te.length;)if(un=nh(this,te),un==Us){lt==4&&(this.s=4,st(14),_=!1),Nn(this.i,this.l,null,"[Incomplete Response]");break}else if(un==ia){this.s=4,st(15),Nn(this.i,this.l,te,"[Invalid Chunk]"),_=!1;break}else Nn(this.i,this.l,un,null),oa(this,un);if(Pl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||te.length!=0||this.h.h||(this.s=1,st(16),_=!1),this.o=this.o&&_,!_)Nn(this.i,this.l,te,"[Invalid Chunked Response]"),gn(this),qr(this);else if(0<te.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+te.length),fa(Et),Et.M=!0,st(11))}}else Nn(this.i,this.l,te,null),oa(this,te);lt==4&&gn(this),this.o&&!this.J&&(lt==4?Ys(this.j,this):(this.o=!1,He(this)))}else qs(this.g),_==400&&0<te.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),gn(this),qr(this)}}}catch{}finally{}};function Pl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function nh(u,m){var _=u.C,E=m.indexOf(`
`,_);return E==-1?Us:(_=Number(m.substring(_,E)),isNaN(_)?ia:(E+=1,E+_>m.length?Us:(m=m.slice(E,E+_),u.C=E+_,m)))}xn.prototype.cancel=function(){this.J=!0,gn(this)};function He(u){u.S=Date.now()+u.I,Nl(u,u.I)}function Nl(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Pn(S(u.ba,u),m)}function ji(u){u.B&&(d.clearTimeout(u.B),u.B=null)}xn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(ra(this.i,this.A),this.L!=2&&(vr(),st(17)),gn(this),this.s=2,qr(this)):Nl(this,this.S-u)};function qr(u){u.j.G==0||u.J||Ys(u.j,u)}function gn(u){ji(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,Yo(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function oa(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||$t(_.h,u))){if(!u.K&&$t(_.h,u)&&_.G==3){try{var E=_.Da.g.parse(m)}catch{E=null}if(Array.isArray(E)&&E.length==3){var U=E;if(U[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)Qs(_),Mn(_);else break e;Gs(_),st(18)}}else _.za=U[1],0<_.za-_.T&&37500>U[2]&&_.F&&_.v==0&&!_.C&&(_.C=Pn(S(_.Za,_),6e3));if(1>=xl(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Sr(_,11)}else if((u.K||_.g==u)&&Qs(_),!$(m))for(U=_.Da.g.parse(m),m=0;m<U.length;m++){let Oe=U[m];if(_.T=Oe[0],Oe=Oe[1],_.G==2)if(Oe[0]=="c"){_.K=Oe[1],_.ia=Oe[2];const Et=Oe[3];Et!=null&&(_.la=Et,_.j.info("VER="+_.la));const lt=Oe[4];lt!=null&&(_.Aa=lt,_.j.info("SVER="+_.Aa));const _n=Oe[5];_n!=null&&typeof _n=="number"&&0<_n&&(E=1.5*_n,_.L=E,_.j.info("backChannelRequestTimeoutMs_="+E)),E=_;const un=u.g;if(un){const Gi=un.g?un.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gi){var H=E.h;H.g||Gi.indexOf("spdy")==-1&&Gi.indexOf("quic")==-1&&Gi.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(aa(H,H.h),H.h=null))}if(E.D){const Js=un.g?un.g.getResponseHeader("X-HTTP-Session-Id"):null;Js&&(E.ya=Js,ze(E.I,E.D,Js))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),E=_;var te=u;if(E.qa=ql(E,E.J?E.ia:null,E.W),te.K){Ol(E.h,te);var Be=te,pt=E.L;pt&&(Be.I=pt),Be.B&&(ji(Be),He(Be)),E.g=te}else Ki(E);0<_.i.length&&Jn(_)}else Oe[0]!="stop"&&Oe[0]!="close"||Sr(_,7);else _.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?Sr(_,7):Ct(_):Oe[0]!="noop"&&_.l&&_.l.ta(Oe),_.v=0)}}vr(4)}catch{}}var Dl=class{constructor(u,m){this.g=u,this.map=m}};function zi(u){this.l=u||10,d.PerformanceNavigationTiming?(u=d.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function on(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function xl(u){return u.h?1:u.g?u.g.size:0}function $t(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function aa(u,m){u.g?u.g.add(m):u.h=m}function Ol(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}zi.prototype.cancel=function(){if(this.i=Ll(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Ll(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return z(u.i)}function Bs(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],_=u.length,E=0;E<_;E++)m.push(u[E]);return m}m=[],_=0;for(E in u)m[_++]=u[E];return m}function js(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const E in u)m[_++]=E;return m}}}function Wr(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=js(u),E=Bs(u),U=E.length,H=0;H<U;H++)m.call(void 0,E[H],_&&_[H],u)}var $i=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rh(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var E=u[_].indexOf("="),U=null;if(0<=E){var H=u[_].substring(0,E);U=u[_].substring(E+1)}else H=u[_];m(H,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function wr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof wr){this.h=u.h,Hi(this,u.j),this.o=u.o,this.g=u.g,Kr(this,u.s),this.l=u.l;var m=u.i,_=new Qn;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),Gr(this,_),this.m=u.m}else u&&(m=String(u).match($i))?(this.h=!1,Hi(this,m[1]||"",!0),this.o=Ne(m[2]||""),this.g=Ne(m[3]||"",!0),Kr(this,m[4]),this.l=Ne(m[5]||"",!0),Gr(this,m[6]||"",!0),this.m=Ne(m[7]||"")):(this.h=!1,this.i=new Qn(null,this.h))}wr.prototype.toString=function(){var u=[],m=this.j;m&&u.push(Yr(m,zs,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(Yr(m,zs,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(Yr(_,_.charAt(0)=="/"?Ml:Vl,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",Yr(_,la)),u.join("")};function an(u){return new wr(u)}function Hi(u,m,_){u.j=_?Ne(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Kr(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function Gr(u,m,_){m instanceof Qn?(u.i=m,Yn(u.i,u.h)):(_||(m=Yr(m,Ul)),u.i=new Qn(m,u.h))}function ze(u,m,_){u.i.set(m,_)}function Qr(u){return ze(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ne(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Yr(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,bl),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function bl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var zs=/[#\/\?@]/g,Vl=/[#\?:]/g,Ml=/[#\?]/g,Ul=/[#\?@]/g,la=/#/g;function Qn(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function At(u){u.g||(u.g=new Map,u.h=0,u.i&&rh(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}n=Qn.prototype,n.add=function(u,m){At(this),this.i=null,u=yn(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function On(u,m){At(u),m=yn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Ln(u,m){return At(u),m=yn(u,m),u.g.has(m)}n.forEach=function(u,m){At(this),this.g.forEach(function(_,E){_.forEach(function(U){u.call(m,U,E,this)},this)},this)},n.na=function(){At(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let E=0;E<m.length;E++){const U=u[E];for(let H=0;H<U.length;H++)_.push(m[E])}return _},n.V=function(u){At(this);let m=[];if(typeof u=="string")Ln(this,u)&&(m=m.concat(this.g.get(yn(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},n.set=function(u,m){return At(this),this.i=null,u=yn(this,u),Ln(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function Xr(u,m,_){On(u,m),0<_.length&&(u.i=null,u.g.set(yn(u,m),z(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var E=m[_];const H=encodeURIComponent(String(E)),te=this.V(E);for(E=0;E<te.length;E++){var U=H;te[E]!==""&&(U+="="+encodeURIComponent(String(te[E]))),u.push(U)}}return this.i=u.join("&")};function yn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Yn(u,m){m&&!u.j&&(At(u),u.i=null,u.g.forEach(function(_,E){var U=E.toLowerCase();E!=U&&(On(this,E),Xr(this,U,_))},u)),u.j=m}function ih(u,m){const _=new Ui;if(d.Image){const E=new Image;E.onload=D(Gt,_,"TestLoadImage: loaded",!0,m,E),E.onerror=D(Gt,_,"TestLoadImage: error",!1,m,E),E.onabort=D(Gt,_,"TestLoadImage: abort",!1,m,E),E.ontimeout=D(Gt,_,"TestLoadImage: timeout",!1,m,E),d.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else m(!1)}function Fl(u,m){const _=new Ui,E=new AbortController,U=setTimeout(()=>{E.abort(),Gt(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:E.signal}).then(H=>{clearTimeout(U),H.ok?Gt(_,"TestPingServer: ok",!0,m):Gt(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(U),Gt(_,"TestPingServer: error",!1,m)})}function Gt(u,m,_,E,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),E(_)}catch{}}function sh(){this.g=new Zo}function Bl(u,m,_){const E=_||"";try{Wr(u,function(U,H){let te=U;y(U)&&(te=Xo(U)),m.push(E+H+"="+encodeURIComponent(te))})}catch(U){throw m.push(E+"type="+encodeURIComponent("_badmap")),U}}function Er(u){this.l=u.Ub||null,this.j=u.eb||!1}b(Er,Vi),Er.prototype.g=function(){return new qi(this.l,this.j)},Er.prototype.i=function(u){return function(){return u}}({});function qi(u,m){dt.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(qi,dt),n=qi.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Vn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||d).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Vn(this)),this.g&&(this.readyState=3,Vn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;jl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function jl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?bn(this):Vn(this),this.readyState==3&&jl(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,bn(this))},n.Qa=function(u){this.g&&(this.response=u,bn(this))},n.ga=function(){this.g&&bn(this)};function bn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Vn(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function Vn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(qi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Tr(u){let m="";return _e(u,function(_,E){m+=E,m+=":",m+=_,m+=`\r
`}),m}function Jr(u,m,_){e:{for(E in _){var E=!1;break e}E=!0}E||(_=Tr(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):ze(u,m,_))}function Ge(u){dt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(Ge,dt);var oh=/^https?$/i,ua=["POST","PUT"];n=Ge.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,_,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Dn.g(),this.v=this.o?xs(this.o):xs(Dn),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(H){Wi(this,H);return}if(u=_||"",_=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var U in E)_.set(U,E[U]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const H of E.keys())_.set(H,E.get(H));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(_.keys()).find(H=>H.toLowerCase()=="content-type"),U=d.FormData&&u instanceof d.FormData,!(0<=Array.prototype.indexOf.call(ua,m,void 0))||E||U||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,te]of _)this.g.setRequestHeader(H,te);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Hs(this),this.u=!0,this.g.send(u),this.u=!1}catch(H){Wi(this,H)}};function Wi(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,$s(u),ln(u)}function $s(u){u.A||(u.A=!0,ft(u,"complete"),ft(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ft(this,"complete"),ft(this,"abort"),ln(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ln(this,!0)),Ge.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ca(this):this.bb())},n.bb=function(){ca(this)};function ca(u){if(u.h&&typeof c<"u"&&(!u.v[1]||Qt(u)!=4||u.Z()!=2)){if(u.u&&Qt(u)==4)Go(u.Ea,0,u);else if(ft(u,"readystatechange"),Qt(u)==4){u.h=!1;try{const te=u.Z();e:switch(te){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var E;if(E=te===0){var U=String(u.D).match($i)[1]||null;!U&&d.self&&d.self.location&&(U=d.self.location.protocol.slice(0,-1)),E=!oh.test(U?U.toLowerCase():"")}_=E}if(_)ft(u,"complete"),ft(u,"success");else{u.m=6;try{var H=2<Qt(u)?u.g.statusText:""}catch{H=""}u.l=H+" ["+u.Z()+"]",$s(u)}}finally{ln(u)}}}}function ln(u,m){if(u.g){Hs(u);const _=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||ft(u,"ready");try{_.onreadystatechange=E}catch{}}}function Hs(u){u.I&&(d.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Qt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Qt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Jo(m)}};function ha(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function qs(u){const m={};u=(u.g&&2<=Qt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if($(u[E]))continue;var _=O(u[E]);const U=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const H=m[U]||[];m[U]=H,H.push(_)}N(m,function(E){return E.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xn(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function da(u){this.Aa=0,this.i=[],this.j=new Ui,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xn("baseRetryDelayMs",5e3,u),this.cb=Xn("retryDelaySeedMs",1e4,u),this.Wa=Xn("forwardChannelMaxRetries",2,u),this.wa=Xn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new zi(u&&u.concurrentRequestLimit),this.Da=new sh,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=da.prototype,n.la=8,n.G=1,n.connect=function(u,m,_,E){st(0),this.W=u,this.H=m||{},_&&E!==void 0&&(this.H.OSID=_,this.H.OAID=E),this.F=this.X,this.I=ql(this,null,this.W),Jn(this)};function Ct(u){if(Ws(u),u.G==3){var m=u.U++,_=an(u.I);if(ze(_,"SID",u.K),ze(_,"RID",m),ze(_,"TYPE","terminate"),Ir(u,_),m=new xn(u,u.j,m),m.L=2,m.v=Qr(an(_)),_=!1,d.navigator&&d.navigator.sendBeacon)try{_=d.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&d.Image&&(new Image().src=m.v,_=!0),_||(m.g=Wl(m.j,null),m.g.ea(m.v)),m.F=Date.now(),He(m)}Hl(u)}function Mn(u){u.g&&(fa(u),u.g.cancel(),u.g=null)}function Ws(u){Mn(u),u.u&&(d.clearTimeout(u.u),u.u=null),Qs(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&d.clearTimeout(u.s),u.s=null)}function Jn(u){if(!on(u.h)&&!u.s){u.s=!0;var m=u.Ga;je||se(),ne||(je(),ne=!0),de.add(m,u),u.B=0}}function ah(u,m){return xl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Pn(S(u.Ga,u,m),$l(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const U=new xn(this,this.j,u);let H=this.o;if(this.S&&(H?(H=I(H),P(H,this.S)):H=this.S),this.m!==null||this.O||(U.H=H,H=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var E=this.i[_];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(m+=E,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=Zr(this,U,m),_=an(this.I),ze(_,"RID",u),ze(_,"CVER",22),this.D&&ze(_,"X-HTTP-Session-Id",this.D),Ir(this,_),H&&(this.O?m="headers="+encodeURIComponent(String(Tr(H)))+"&"+m:this.m&&Jr(_,this.m,H)),aa(this.h,U),this.Ua&&ze(_,"TYPE","init"),this.P?(ze(_,"$req",m),ze(_,"SID","null"),U.T=!0,Fs(U,_,null)):Fs(U,_,m),this.G=2}}else this.G==3&&(u?Ks(this,u):this.i.length==0||on(this.h)||Ks(this))};function Ks(u,m){var _;m?_=m.l:_=u.U++;const E=an(u.I);ze(E,"SID",u.K),ze(E,"RID",_),ze(E,"AID",u.T),Ir(u,E),u.m&&u.o&&Jr(E,u.m,u.o),_=new xn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=Zr(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),aa(u.h,_),Fs(_,E,m)}function Ir(u,m){u.H&&_e(u.H,function(_,E){ze(m,E,_)}),u.l&&Wr({},function(_,E){ze(m,E,_)})}function Zr(u,m,_){_=Math.min(u.i.length,_);var E=u.l?S(u.l.Na,u.l,u):null;e:{var U=u.i;let H=-1;for(;;){const te=["count="+_];H==-1?0<_?(H=U[0].g,te.push("ofs="+H)):H=0:te.push("ofs="+H);let Be=!0;for(let pt=0;pt<_;pt++){let Oe=U[pt].g;const Et=U[pt].map;if(Oe-=H,0>Oe)H=Math.max(0,U[pt].g-100),Be=!1;else try{Bl(Et,te,"req"+Oe+"_")}catch{E&&E(Et)}}if(Be){E=te.join("&");break e}}}return u=u.i.splice(0,_),m.D=u,E}function Ki(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;je||se(),ne||(je(),ne=!0),de.add(m,u),u.v=0}}function Gs(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Pn(S(u.Fa,u),$l(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,zl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Pn(S(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,st(10),Mn(this),zl(this))};function fa(u){u.A!=null&&(d.clearTimeout(u.A),u.A=null)}function zl(u){u.g=new xn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=an(u.qa);ze(m,"RID","rpc"),ze(m,"SID",u.K),ze(m,"AID",u.T),ze(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&ze(m,"TO",u.ja),ze(m,"TYPE","xmlhttp"),Ir(u,m),u.m&&u.o&&Jr(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=Qr(an(m)),_.m=null,_.P=!0,sa(_,u)}n.Za=function(){this.C!=null&&(this.C=null,Mn(this),Gs(this),st(19))};function Qs(u){u.C!=null&&(d.clearTimeout(u.C),u.C=null)}function Ys(u,m){var _=null;if(u.g==m){Qs(u),fa(u),u.g=null;var E=2}else if($t(u.h,m))_=m.D,Ol(u.h,m),E=1;else return;if(u.G!=0){if(m.o)if(E==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var U=u.B;E=Mi(),ft(E,new bs(E,_)),Jn(u)}else Ki(u);else if(U=m.s,U==3||U==0&&0<m.X||!(E==1&&ah(u,m)||E==2&&Gs(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),U){case 1:Sr(u,5);break;case 4:Sr(u,10);break;case 3:Sr(u,6);break;default:Sr(u,2)}}}function $l(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function Sr(u,m){if(u.j.info("Error code "+m),m==2){var _=S(u.fb,u),E=u.Xa;const U=!E;E=new wr(E||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Hi(E,"https"),Qr(E),U?ih(E.toString(),_):Fl(E.toString(),_)}else st(2);u.G=0,u.l&&u.l.sa(m),Hl(u),Ws(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function Hl(u){if(u.G=0,u.ka=[],u.l){const m=Ll(u.h);(m.length!=0||u.i.length!=0)&&(L(u.ka,m),L(u.ka,u.i),u.h.i.length=0,z(u.i),u.i.length=0),u.l.ra()}}function ql(u,m,_){var E=_ instanceof wr?an(_):new wr(_);if(E.g!="")m&&(E.g=m+"."+E.g),Kr(E,E.s);else{var U=d.location;E=U.protocol,m=m?m+"."+U.hostname:U.hostname,U=+U.port;var H=new wr(null);E&&Hi(H,E),m&&(H.g=m),U&&Kr(H,U),_&&(H.l=_),E=H}return _=u.D,m=u.ya,_&&m&&ze(E,_,m),ze(E,"VER",u.la),Ir(u,E),E}function Wl(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Ge(new Er({eb:_})):new Ge(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function pa(){}n=pa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Xs(){}Xs.prototype.g=function(u,m){return new Ht(u,m)};function Ht(u,m){dt.call(this),this.g=new da(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!$(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!$(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new Zn(this)}b(Ht,dt),Ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ht.prototype.close=function(){Ct(this.g)},Ht.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=Xo(u),u=_);m.i.push(new Dl(m.Ya++,u)),m.G==3&&Jn(m)},Ht.prototype.N=function(){this.g.l=null,delete this.j,Ct(this.g),delete this.g,Ht.aa.N.call(this)};function Kl(u){Kn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}b(Kl,Kn);function Gl(){Ls.call(this),this.status=1}b(Gl,Ls);function Zn(u){this.g=u}b(Zn,pa),Zn.prototype.ua=function(){ft(this.g,"a")},Zn.prototype.ta=function(u){ft(this.g,new Kl(u))},Zn.prototype.sa=function(u){ft(this.g,new Gl)},Zn.prototype.ra=function(){ft(this.g,"b")},Xs.prototype.createWebChannel=Xs.prototype.g,Ht.prototype.send=Ht.prototype.o,Ht.prototype.open=Ht.prototype.m,Ht.prototype.close=Ht.prototype.close,kv=function(){return new Xs},Cv=function(){return Mi()},Av=Gn,sf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ms.NO_ERROR=0,Ms.TIMEOUT=8,Ms.HTTP_ERROR=6,ec=Ms,Cl.COMPLETE="complete",Rv=Cl,Os.EventType=mn,mn.OPEN="a",mn.CLOSE="b",mn.ERROR="c",mn.MESSAGE="d",dt.prototype.listen=dt.prototype.K,Ha=Os,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,Sv=Ge}).apply(typeof $u<"u"?$u:typeof self<"u"?self:typeof window<"u"?window:{});const dy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Bt.UNAUTHENTICATED=new Bt(null),Bt.GOOGLE_CREDENTIALS=new Bt("google-credentials-uid"),Bt.FIRST_PARTY=new Bt("first-party-uid"),Bt.MOCK_USER=new Bt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fo="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=new Lc("@firebase/firestore");function wo(){return ms.logLevel}function oe(n,...e){if(ms.logLevel<=ke.DEBUG){const t=e.map(Mf);ms.debug(`Firestore (${Fo}): ${n}`,...t)}}function Fr(n,...e){if(ms.logLevel<=ke.ERROR){const t=e.map(Mf);ms.error(`Firestore (${Fo}): ${n}`,...t)}}function No(n,...e){if(ms.logLevel<=ke.WARN){const t=e.map(Mf);ms.warn(`Firestore (${Fo}): ${n}`,...t)}}function Mf(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(n="Unexpected state"){const e=`FIRESTORE (${Fo}) INTERNAL ASSERTION FAILED: `+n;throw Fr(e),new Error(e)}function Fe(n,e){n||Te()}function Se(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class fe extends kn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class T1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Bt.UNAUTHENTICATED))}shutdown(){}}class I1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class S1{constructor(e){this.t=e,this.currentUser=Bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fe(this.o===void 0);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new hs;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new hs,e.enqueueRetryable(()=>o(this.currentUser))};const c=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},d=p=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new hs)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Fe(typeof i.accessToken=="string"),new Pv(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string"),new Bt(e)}}class R1{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=Bt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class A1{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new R1(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class C1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class k1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Fe(this.o===void 0);const i=l=>{l.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.R;return this.R=l.token,oe("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const o=l=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Fe(typeof t.token=="string"),this.R=t.token,new C1(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P1(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const o=P1(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%e.length))}return i}}function De(n,e){return n<e?-1:n>e?1:0}function Do(n,e,t){return n.length===e.length&&n.every((i,o)=>t(i,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{static now(){return _t.fromMillis(Date.now())}static fromDate(e){return _t.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new _t(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new fe(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new fe(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new fe(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new fe(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?De(this.nanoseconds,e.nanoseconds):De(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new _t(0,0))}static max(){return new Ie(new _t(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,t,i){t===void 0?t=0:t>e.length&&Te(),i===void 0?i=e.length-t:i>e.length-t&&Te(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return il.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof il?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=e.get(o),c=t.get(o);if(l<c)return-1;if(l>c)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ye extends il{construct(e,t,i){return new Ye(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new fe(J.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(o=>o.length>0))}return new Ye(t)}static emptyPath(){return new Ye([])}}const N1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends il{construct(e,t,i){return new Dt(e,t,i)}static isValidIdentifier(e){return N1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Dt(["__name__"])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new fe(J.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new fe(J.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new fe(J.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else d==="`"?(c=!c,o++):d!=="."||c?(i+=d,o++):(l(),o++)}if(l(),c)throw new fe(J.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dt(t)}static emptyPath(){return new Dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.path=e}static fromPath(e){return new ge(Ye.fromString(e))}static fromName(e){return new ge(Ye.fromString(e).popFirst(5))}static empty(){return new ge(Ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ye.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ge(new Ye(e.slice()))}}function D1(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Ie.fromTimestamp(i===1e9?new _t(t+1,0):new _t(t,i));return new Ri(o,ge.empty(),e)}function x1(n){return new Ri(n.readTime,n.key,-1)}class Ri{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Ri(Ie.min(),ge.empty(),-1)}static max(){return new Ri(Ie.max(),ge.empty(),-1)}}function O1(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ge.comparator(n.documentKey,e.documentKey),t!==0?t:De(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class b1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bo(n){if(n.code!==J.FAILED_PRECONDITION||n.message!==L1)throw n;oe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new K((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof K?t:K.resolve(t)}catch(t){return K.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):K.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):K.reject(t)}static resolve(e){return new K((t,i)=>{t(e)})}static reject(e){return new K((t,i)=>{i(e)})}static waitFor(e){return new K((t,i)=>{let o=0,l=0,c=!1;e.forEach(d=>{++o,d.next(()=>{++l,c&&l===o&&t()},p=>i(p))}),c=!0,l===o&&t()})}static or(e){let t=K.resolve(!1);for(const i of e)t=t.next(o=>o?K.resolve(o):i());return t}static forEach(e,t){const i=[];return e.forEach((o,l)=>{i.push(t.call(this,o,l))}),this.waitFor(i)}static mapArray(e,t){return new K((i,o)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const y=p;t(e[y]).next(w=>{c[y]=w,++d,d===l&&i(c)},w=>o(w))}})}static doWhile(e,t){return new K((i,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):i()};l()})}}function V1(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function jo(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Uc.oe=-1;function Fc(n){return n==null}function mc(n){return n===0&&1/n==-1/0}function M1(n){return typeof n=="number"&&Number.isInteger(n)&&!mc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U1(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=fy(e)),e=F1(n.get(t),e);return fy(e)}function F1(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case"":t+="";break;default:t+=l}}return t}function fy(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ts(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Dv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t){this.comparator=e,this.root=t||Nt.EMPTY}insert(e,t){return new et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Nt.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Nt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Hu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Hu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Hu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Hu(this.root,e,this.comparator,!0)}}class Hu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Nt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Nt.RED,this.left=o??Nt.EMPTY,this.right=l??Nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Nt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Nt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Te();const e=this.left.check();if(e!==this.right.check())throw Te();return e+(this.isRed()?0:1)}}Nt.EMPTY=null,Nt.RED=!0,Nt.BLACK=!1;Nt.EMPTY=new class{constructor(){this.size=0}get key(){throw Te()}get value(){throw Te()}get color(){throw Te()}get left(){throw Te()}get right(){throw Te()}copy(e,t,i,o,l){return this}insert(e,t,i){return new Nt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new my(this.data.getIterator())}getIteratorFrom(e){return new my(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof vt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new vt(this.comparator);return t.data=e,t}}class my{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this.fields=e,e.sort(Dt.comparator)}static empty(){return new Hn([])}unionWith(e){let t=new vt(Dt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new Hn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Do(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new xv("Invalid base64 string: "+l):l}}(e);return new xt(t)}static fromUint8Array(e){const t=function(o){let l="";for(let c=0;c<o.length;++c)l+=String.fromCharCode(o[c]);return l}(e);return new xt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return De(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const B1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ai(n){if(Fe(!!n),typeof n=="string"){let e=0;const t=B1.exec(n);if(Fe(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:at(n.seconds),nanos:at(n.nanos)}}function at(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ci(n){return typeof n=="string"?xt.fromBase64String(n):xt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Bc(n){const e=n.mapValue.fields.__previous_value__;return Uf(e)?Bc(e):e}function sl(n){const e=Ai(n.mapValue.fields.__local_write_time__.timestampValue);return new _t(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e,t,i,o,l,c,d,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=y}}class ol{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ol("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ol&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ki(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Uf(n)?4:$1(n)?9007199254740991:z1(n)?10:11:Te()}function dr(n,e){if(n===e)return!0;const t=ki(n);if(t!==ki(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return sl(n).isEqual(sl(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const c=Ai(o.timestampValue),d=Ai(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,l){return Ci(o.bytesValue).isEqual(Ci(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,l){return at(o.geoPointValue.latitude)===at(l.geoPointValue.latitude)&&at(o.geoPointValue.longitude)===at(l.geoPointValue.longitude)}(n,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return at(o.integerValue)===at(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const c=at(o.doubleValue),d=at(l.doubleValue);return c===d?mc(c)===mc(d):isNaN(c)&&isNaN(d)}return!1}(n,e);case 9:return Do(n.arrayValue.values||[],e.arrayValue.values||[],dr);case 10:case 11:return function(o,l){const c=o.mapValue.fields||{},d=l.mapValue.fields||{};if(py(c)!==py(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!dr(c[p],d[p])))return!1;return!0}(n,e);default:return Te()}}function al(n,e){return(n.values||[]).find(t=>dr(t,e))!==void 0}function xo(n,e){if(n===e)return 0;const t=ki(n),i=ki(e);if(t!==i)return De(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return De(n.booleanValue,e.booleanValue);case 2:return function(l,c){const d=at(l.integerValue||l.doubleValue),p=at(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return gy(n.timestampValue,e.timestampValue);case 4:return gy(sl(n),sl(e));case 5:return De(n.stringValue,e.stringValue);case 6:return function(l,c){const d=Ci(l),p=Ci(c);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(l,c){const d=l.split("/"),p=c.split("/");for(let y=0;y<d.length&&y<p.length;y++){const w=De(d[y],p[y]);if(w!==0)return w}return De(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,c){const d=De(at(l.latitude),at(c.latitude));return d!==0?d:De(at(l.longitude),at(c.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return yy(n.arrayValue,e.arrayValue);case 10:return function(l,c){var d,p,y,w;const T=l.fields||{},S=c.fields||{},D=(d=T.value)===null||d===void 0?void 0:d.arrayValue,b=(p=S.value)===null||p===void 0?void 0:p.arrayValue,z=De(((y=D==null?void 0:D.values)===null||y===void 0?void 0:y.length)||0,((w=b==null?void 0:b.values)===null||w===void 0?void 0:w.length)||0);return z!==0?z:yy(D,b)}(n.mapValue,e.mapValue);case 11:return function(l,c){if(l===qu.mapValue&&c===qu.mapValue)return 0;if(l===qu.mapValue)return 1;if(c===qu.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),y=c.fields||{},w=Object.keys(y);p.sort(),w.sort();for(let T=0;T<p.length&&T<w.length;++T){const S=De(p[T],w[T]);if(S!==0)return S;const D=xo(d[p[T]],y[w[T]]);if(D!==0)return D}return De(p.length,w.length)}(n.mapValue,e.mapValue);default:throw Te()}}function gy(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return De(n,e);const t=Ai(n),i=Ai(e),o=De(t.seconds,i.seconds);return o!==0?o:De(t.nanos,i.nanos)}function yy(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=xo(t[o],i[o]);if(l)return l}return De(t.length,i.length)}function Oo(n){return of(n)}function of(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Ai(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ci(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ge.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=of(l);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const c of i)l?l=!1:o+=",",o+=`${c}:${of(t.fields[c])}`;return o+"}"}(n.mapValue):Te()}function tc(n){switch(ki(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Bc(n);return e?16+tc(e):16;case 5:return 2*n.stringValue.length;case 6:return Ci(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((o,l)=>o+tc(l),0)}(n.arrayValue);case 10:case 11:return function(i){let o=0;return Ts(i.fields,(l,c)=>{o+=l.length+tc(c)}),o}(n.mapValue);default:throw Te()}}function af(n){return!!n&&"integerValue"in n}function Ff(n){return!!n&&"arrayValue"in n}function _y(n){return!!n&&"nullValue"in n}function vy(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function nc(n){return!!n&&"mapValue"in n}function z1(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Qa(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ts(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Qa(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Qa(n.arrayValue.values[t]);return e}return Object.assign({},n)}function $1(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.value=e}static empty(){return new Rn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!nc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qa(t)}setAll(e){let t=Dt.emptyPath(),i={},o=[];e.forEach((c,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=d.popLast()}c?i[d.lastSegment()]=Qa(c):o.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());nc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return dr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];nc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Ts(t,(o,l)=>e[o]=l);for(const o of i)delete e[o]}clone(){return new Rn(Qa(this.value))}}function Ov(n){const e=[];return Ts(n.fields,(t,i)=>{const o=new Dt([t]);if(nc(i)){const l=Ov(i.mapValue).fields;if(l.length===0)e.push(o);else for(const c of l)e.push(o.child(c))}else e.push(o)}),new Hn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,t,i,o,l,c,d){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new jt(e,0,Ie.min(),Ie.min(),Ie.min(),Rn.empty(),0)}static newFoundDocument(e,t,i,o){return new jt(e,1,t,Ie.min(),i,o,0)}static newNoDocument(e,t){return new jt(e,2,t,Ie.min(),Ie.min(),Rn.empty(),0)}static newUnknownDocument(e,t){return new jt(e,3,t,Ie.min(),Ie.min(),Rn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,t){this.position=e,this.inclusive=t}}function wy(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],c=n.position[o];if(l.field.isKeyField()?i=ge.comparator(ge.fromName(c.referenceValue),t.key):i=xo(c,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function Ey(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!dr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,t="asc"){this.field=e,this.dir=t}}function H1(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{}class yt extends Lv{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new W1(e,t,i):t==="array-contains"?new Q1(e,i):t==="in"?new Y1(e,i):t==="not-in"?new X1(e,i):t==="array-contains-any"?new J1(e,i):new yt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new K1(e,i):new G1(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(xo(t,this.value)):t!==null&&ki(this.value)===ki(t)&&this.matchesComparison(xo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fr extends Lv{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new fr(e,t)}matches(e){return bv(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function bv(n){return n.op==="and"}function Vv(n){return q1(n)&&bv(n)}function q1(n){for(const e of n.filters)if(e instanceof fr)return!1;return!0}function lf(n){if(n instanceof yt)return n.field.canonicalString()+n.op.toString()+Oo(n.value);if(Vv(n))return n.filters.map(e=>lf(e)).join(",");{const e=n.filters.map(t=>lf(t)).join(",");return`${n.op}(${e})`}}function Mv(n,e){return n instanceof yt?function(i,o){return o instanceof yt&&i.op===o.op&&i.field.isEqual(o.field)&&dr(i.value,o.value)}(n,e):n instanceof fr?function(i,o){return o instanceof fr&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((l,c,d)=>l&&Mv(c,o.filters[d]),!0):!1}(n,e):void Te()}function Uv(n){return n instanceof yt?function(t){return`${t.field.canonicalString()} ${t.op} ${Oo(t.value)}`}(n):n instanceof fr?function(t){return t.op.toString()+" {"+t.getFilters().map(Uv).join(" ,")+"}"}(n):"Filter"}class W1 extends yt{constructor(e,t,i){super(e,t,i),this.key=ge.fromName(i.referenceValue)}matches(e){const t=ge.comparator(e.key,this.key);return this.matchesComparison(t)}}class K1 extends yt{constructor(e,t){super(e,"in",t),this.keys=Fv("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class G1 extends yt{constructor(e,t){super(e,"not-in",t),this.keys=Fv("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Fv(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>ge.fromName(i.referenceValue))}class Q1 extends yt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ff(t)&&al(t.arrayValue,this.value)}}class Y1 extends yt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&al(this.value.arrayValue,t)}}class X1 extends yt{constructor(e,t){super(e,"not-in",t)}matches(e){if(al(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!al(this.value.arrayValue,t)}}class J1 extends yt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ff(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>al(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(e,t=null,i=[],o=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=c,this.endAt=d,this.ue=null}}function Ty(n,e=null,t=[],i=[],o=null,l=null,c=null){return new Z1(n,e,t,i,o,l,c)}function Bf(n){const e=Se(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>lf(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),Fc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Oo(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Oo(i)).join(",")),e.ue=t}return e.ue}function jf(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!H1(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Mv(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ey(n.startAt,e.startAt)&&Ey(n.endAt,e.endAt)}function uf(n){return ge.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,t=null,i=[],o=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function eA(n,e,t,i,o,l,c,d){return new jc(n,e,t,i,o,l,c,d)}function zf(n){return new jc(n)}function Iy(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function tA(n){return n.collectionGroup!==null}function Ya(n){const e=Se(n);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new vt(Dt.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(d=d.add(y.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new yc(l,i))}),t.has(Dt.keyField().canonicalString())||e.ce.push(new yc(Dt.keyField(),i))}return e.ce}function or(n){const e=Se(n);return e.le||(e.le=nA(e,Ya(n))),e.le}function nA(n,e){if(n.limitType==="F")return Ty(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new yc(o.field,l)});const t=n.endAt?new gc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new gc(n.startAt.position,n.startAt.inclusive):null;return Ty(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function cf(n,e,t){return new jc(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function zc(n,e){return jf(or(n),or(e))&&n.limitType===e.limitType}function Bv(n){return`${Bf(or(n))}|lt:${n.limitType}`}function Eo(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(o=>Uv(o)).join(", ")}]`),Fc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(o=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(o)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(o=>Oo(o)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(o=>Oo(o)).join(",")),`Target(${i})`}(or(n))}; limitType=${n.limitType})`}function $c(n,e){return e.isFoundDocument()&&function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):ge.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(n,e)&&function(i,o){for(const l of Ya(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(n,e)&&function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0}(n,e)&&function(i,o){return!(i.startAt&&!function(c,d,p){const y=wy(c,d,p);return c.inclusive?y<=0:y<0}(i.startAt,Ya(i),o)||i.endAt&&!function(c,d,p){const y=wy(c,d,p);return c.inclusive?y>=0:y>0}(i.endAt,Ya(i),o))}(n,e)}function rA(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function jv(n){return(e,t)=>{let i=!1;for(const o of Ya(n)){const l=iA(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function iA(n,e,t){const i=n.field.isKeyField()?ge.comparator(e.key,t.key):function(l,c,d){const p=c.data.field(l),y=d.data.field(l);return p!==null&&y!==null?xo(p,y):Te()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Te()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Ts(this.inner,(t,i)=>{for(const[o,l]of i)e(o,l)})}isEmpty(){return Dv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA=new et(ge.comparator);function Br(){return sA}const zv=new et(ge.comparator);function qa(...n){let e=zv;for(const t of n)e=e.insert(t.key,t);return e}function $v(n){let e=zv;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function us(){return Xa()}function Hv(){return Xa()}function Xa(){return new Is(n=>n.toString(),(n,e)=>n.isEqual(e))}const oA=new et(ge.comparator),aA=new vt(ge.comparator);function Pe(...n){let e=aA;for(const t of n)e=e.add(t);return e}const lA=new vt(De);function uA(){return lA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:mc(e)?"-0":e}}function qv(n){return{integerValue:""+n}}function cA(n,e){return M1(e)?qv(e):$f(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(){this._=void 0}}function hA(n,e,t){return n instanceof _c?function(o,l){const c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Uf(l)&&(l=Bc(l)),l&&(c.fields.__previous_value__=l),{mapValue:c}}(t,e):n instanceof ll?Kv(n,e):n instanceof ul?Gv(n,e):function(o,l){const c=Wv(o,l),d=Sy(c)+Sy(o.Pe);return af(c)&&af(o.Pe)?qv(d):$f(o.serializer,d)}(n,e)}function dA(n,e,t){return n instanceof ll?Kv(n,e):n instanceof ul?Gv(n,e):t}function Wv(n,e){return n instanceof vc?function(i){return af(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class _c extends Hc{}class ll extends Hc{constructor(e){super(),this.elements=e}}function Kv(n,e){const t=Qv(e);for(const i of n.elements)t.some(o=>dr(o,i))||t.push(i);return{arrayValue:{values:t}}}class ul extends Hc{constructor(e){super(),this.elements=e}}function Gv(n,e){let t=Qv(e);for(const i of n.elements)t=t.filter(o=>!dr(o,i));return{arrayValue:{values:t}}}class vc extends Hc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Sy(n){return at(n.integerValue||n.doubleValue)}function Qv(n){return Ff(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function fA(n,e){return n.field.isEqual(e.field)&&function(i,o){return i instanceof ll&&o instanceof ll||i instanceof ul&&o instanceof ul?Do(i.elements,o.elements,dr):i instanceof vc&&o instanceof vc?dr(i.Pe,o.Pe):i instanceof _c&&o instanceof _c}(n.transform,e.transform)}class pA{constructor(e,t){this.version=e,this.transformResults=t}}class ar{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ar}static exists(e){return new ar(void 0,e)}static updateTime(e){return new ar(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function rc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class qc{}function Yv(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Hf(n.key,ar.none()):new yl(n.key,n.data,ar.none());{const t=n.data,i=Rn.empty();let o=new vt(Dt.comparator);for(let l of e.fields)if(!o.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?i.delete(l):i.set(l,c),o=o.add(l)}return new Ss(n.key,i,new Hn(o.toArray()),ar.none())}}function mA(n,e,t){n instanceof yl?function(o,l,c){const d=o.value.clone(),p=Ay(o.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(n,e,t):n instanceof Ss?function(o,l,c){if(!rc(o.precondition,l))return void l.convertToUnknownDocument(c.version);const d=Ay(o.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(Xv(o)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(n,e,t):function(o,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function Ja(n,e,t,i){return n instanceof yl?function(l,c,d,p){if(!rc(l.precondition,c))return d;const y=l.value.clone(),w=Cy(l.fieldTransforms,p,c);return y.setAll(w),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),null}(n,e,t,i):n instanceof Ss?function(l,c,d,p){if(!rc(l.precondition,c))return d;const y=Cy(l.fieldTransforms,p,c),w=c.data;return w.setAll(Xv(l)),w.setAll(y),c.convertToFoundDocument(c.version,w).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(n,e,t,i):function(l,c,d){return rc(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(n,e,t)}function gA(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=Wv(i.transform,o||null);l!=null&&(t===null&&(t=Rn.empty()),t.set(i.field,l))}return t||null}function Ry(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Do(i,o,(l,c)=>fA(l,c))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class yl extends qc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ss extends qc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Xv(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function Ay(n,e,t){const i=new Map;Fe(n.length===t.length);for(let o=0;o<t.length;o++){const l=n[o],c=l.transform,d=e.data.field(l.field);i.set(l.field,dA(c,d,t[o]))}return i}function Cy(n,e,t){const i=new Map;for(const o of n){const l=o.transform,c=t.data.field(o.field);i.set(o.field,hA(l,c,e))}return i}class Hf extends qc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yA extends qc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&mA(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Ja(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Ja(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Hv();return this.mutations.forEach(o=>{const l=e.get(o.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(o.key)?null:d;const p=Yv(c,d);p!==null&&i.set(o.key,p),c.isValidDocument()||c.convertToNoDocument(Ie.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Pe())}isEqual(e){return this.batchId===e.batchId&&Do(this.mutations,e.mutations,(t,i)=>Ry(t,i))&&Do(this.baseMutations,e.baseMutations,(t,i)=>Ry(t,i))}}class qf{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Fe(e.mutations.length===i.length);let o=function(){return oA}();const l=e.mutations;for(let c=0;c<l.length;c++)o=o.insert(l[c].key,i[c].version);return new qf(e,t,i,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct,Le;function EA(n){switch(n){default:return Te();case J.CANCELLED:case J.UNKNOWN:case J.DEADLINE_EXCEEDED:case J.RESOURCE_EXHAUSTED:case J.INTERNAL:case J.UNAVAILABLE:case J.UNAUTHENTICATED:return!1;case J.INVALID_ARGUMENT:case J.NOT_FOUND:case J.ALREADY_EXISTS:case J.PERMISSION_DENIED:case J.FAILED_PRECONDITION:case J.ABORTED:case J.OUT_OF_RANGE:case J.UNIMPLEMENTED:case J.DATA_LOSS:return!0}}function Jv(n){if(n===void 0)return Fr("GRPC error has no .code"),J.UNKNOWN;switch(n){case ct.OK:return J.OK;case ct.CANCELLED:return J.CANCELLED;case ct.UNKNOWN:return J.UNKNOWN;case ct.DEADLINE_EXCEEDED:return J.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return J.RESOURCE_EXHAUSTED;case ct.INTERNAL:return J.INTERNAL;case ct.UNAVAILABLE:return J.UNAVAILABLE;case ct.UNAUTHENTICATED:return J.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return J.INVALID_ARGUMENT;case ct.NOT_FOUND:return J.NOT_FOUND;case ct.ALREADY_EXISTS:return J.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return J.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return J.FAILED_PRECONDITION;case ct.ABORTED:return J.ABORTED;case ct.OUT_OF_RANGE:return J.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return J.UNIMPLEMENTED;case ct.DATA_LOSS:return J.DATA_LOSS;default:return Te()}}(Le=ct||(ct={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA=new cs([4294967295,4294967295],0);function ky(n){const e=TA().encode(n),t=new Iv;return t.update(e),new Uint8Array(t.digest())}function Py(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new cs([t,i],0),new cs([o,l],0)]}class Wf{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Wa(`Invalid padding: ${t}`);if(i<0)throw new Wa(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Wa(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Wa(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=cs.fromNumber(this.Te)}Ee(e,t,i){let o=e.add(t.multiply(cs.fromNumber(i)));return o.compare(IA)===1&&(o=new cs([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=ky(e),[i,o]=Py(t);for(let l=0;l<this.hashCount;l++){const c=this.Ee(i,o,l);if(!this.de(c))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new Wf(l,o,t);return i.forEach(d=>c.insert(d)),c}insert(e){if(this.Te===0)return;const t=ky(e),[i,o]=Py(t);for(let l=0;l<this.hashCount;l++){const c=this.Ee(i,o,l);this.Ae(c)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Wa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,_l.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Wc(Ie.min(),o,new et(De),Br(),Pe())}}class _l{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new _l(i,t,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,t,i,o){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=o}}class Zv{constructor(e,t){this.targetId=e,this.me=t}}class e0{constructor(e,t,i=xt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class Ny{constructor(){this.fe=0,this.ge=Dy(),this.pe=xt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Pe(),t=Pe(),i=Pe();return this.ge.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Te()}}),new _l(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=Dy()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Fe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class SA{constructor(e){this.Le=e,this.Be=new Map,this.ke=Br(),this.qe=Wu(),this.Qe=Wu(),this.Ke=new et(De)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const i=this.ze(t);switch(e.state){case 0:this.je(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.je(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),i.De(e.resumeToken));break;default:Te()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((i,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,i=e.me.count,o=this.Ye(t);if(o){const l=o.target;if(uf(l))if(i===0){const c=new ge(l.path);this.We(t,c,jt.newNoDocument(c,Ie.min()))}else Fe(i===1);else{const c=this.Ze(t);if(c!==i){const d=this.Xe(e),p=d?this.et(d,e,c):1;if(p!==0){this.He(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,y)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let c,d;try{c=Ci(i).toUint8Array()}catch(p){if(p instanceof xv)return No("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new Wf(c,o,l)}catch(p){return No(p instanceof Wa?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.Te===0?null:d}et(e,t,i){return t.me.count===i-this.rt(e,t.targetId)?0:2}rt(e,t){const i=this.Le.getRemoteKeysForTarget(t);let o=0;return i.forEach(l=>{const c=this.Le.nt(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.We(t,l,null),o++)}),o}it(e){const t=new Map;this.Be.forEach((l,c)=>{const d=this.Ye(c);if(d){if(l.current&&uf(d.target)){const p=new ge(d.target.path);this.st(p).has(c)||this.ot(c,p)||this.We(c,p,jt.newNoDocument(p,e))}l.be&&(t.set(c,l.ve()),l.Ce())}});let i=Pe();this.Qe.forEach((l,c)=>{let d=!0;c.forEachWhile(p=>{const y=this.Ye(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(l))}),this.ke.forEach((l,c)=>c.setReadTime(e));const o=new Wc(e,t,this.Ke,this.ke,i);return this.ke=Br(),this.qe=Wu(),this.Qe=Wu(),this.Ke=new et(De),o}Ue(e,t){if(!this.je(e))return;const i=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,i){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new Ny,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new vt(De),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new vt(De),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||oe("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Ny),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Wu(){return new et(ge.comparator)}function Dy(){return new et(ge.comparator)}const RA={asc:"ASCENDING",desc:"DESCENDING"},AA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},CA={and:"AND",or:"OR"};class kA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function hf(n,e){return n.useProto3Json||Fc(e)?e:{value:e}}function wc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function t0(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function PA(n,e){return wc(n,e.toTimestamp())}function lr(n){return Fe(!!n),Ie.fromTimestamp(function(t){const i=Ai(t);return new _t(i.seconds,i.nanos)}(n))}function Kf(n,e){return df(n,e).canonicalString()}function df(n,e){const t=function(o){return new Ye(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function n0(n){const e=Ye.fromString(n);return Fe(a0(e)),e}function ff(n,e){return Kf(n.databaseId,e.path)}function zd(n,e){const t=n0(e);if(t.get(1)!==n.databaseId.projectId)throw new fe(J.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new fe(J.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ge(i0(t))}function r0(n,e){return Kf(n.databaseId,e)}function NA(n){const e=n0(n);return e.length===4?Ye.emptyPath():i0(e)}function pf(n){return new Ye(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function i0(n){return Fe(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function xy(n,e,t){return{name:ff(n,e),fields:t.value.mapValue.fields}}function DA(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Te()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=function(y,w){return y.useProto3Json?(Fe(w===void 0||typeof w=="string"),xt.fromBase64String(w||"")):(Fe(w===void 0||w instanceof Buffer||w instanceof Uint8Array),xt.fromUint8Array(w||new Uint8Array))}(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(y){const w=y.code===void 0?J.UNKNOWN:Jv(y.code);return new fe(w,y.message||"")}(c);t=new e0(i,o,l,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=zd(n,i.document.name),l=lr(i.document.updateTime),c=i.document.createTime?lr(i.document.createTime):Ie.min(),d=new Rn({mapValue:{fields:i.document.fields}}),p=jt.newFoundDocument(o,l,c,d),y=i.targetIds||[],w=i.removedTargetIds||[];t=new ic(y,w,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=zd(n,i.document),l=i.readTime?lr(i.readTime):Ie.min(),c=jt.newNoDocument(o,l),d=i.removedTargetIds||[];t=new ic([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=zd(n,i.document),l=i.removedTargetIds||[];t=new ic([],l,o,null)}else{if(!("filter"in e))return Te();{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,c=new wA(o,l),d=i.targetId;t=new Zv(d,c)}}return t}function xA(n,e){let t;if(e instanceof yl)t={update:xy(n,e.key,e.value)};else if(e instanceof Hf)t={delete:ff(n,e.key)};else if(e instanceof Ss)t={update:xy(n,e.key,e.data),updateMask:jA(e.fieldMask)};else{if(!(e instanceof yA))return Te();t={verify:ff(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(l,c){const d=c.transform;if(d instanceof _c)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof ll)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof ul)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof vc)return{fieldPath:c.field.canonicalString(),increment:d.Pe};throw Te()}(0,i))),e.precondition.isNone||(t.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:PA(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Te()}(n,e.precondition)),t}function OA(n,e){return n&&n.length>0?(Fe(e!==void 0),n.map(t=>function(o,l){let c=o.updateTime?lr(o.updateTime):lr(l);return c.isEqual(Ie.min())&&(c=lr(l)),new pA(c,o.transformResults||[])}(t,e))):[]}function LA(n,e){return{documents:[r0(n,e.path)]}}function bA(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=r0(n,o);const l=function(y){if(y.length!==0)return o0(fr.create(y,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const c=function(y){if(y.length!==0)return y.map(w=>function(S){return{field:To(S.field),direction:UA(S.dir)}}(w))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=hf(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{ct:t,parent:o}}function VA(n){let e=NA(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Fe(i===1);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=function(T){const S=s0(T);return S instanceof fr&&Vv(S)?S.getFilters():[S]}(t.where));let c=[];t.orderBy&&(c=function(T){return T.map(S=>function(b){return new yc(Io(b.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(S))}(t.orderBy));let d=null;t.limit&&(d=function(T){let S;return S=typeof T=="object"?T.value:T,Fc(S)?null:S}(t.limit));let p=null;t.startAt&&(p=function(T){const S=!!T.before,D=T.values||[];return new gc(D,S)}(t.startAt));let y=null;return t.endAt&&(y=function(T){const S=!T.before,D=T.values||[];return new gc(D,S)}(t.endAt)),eA(e,o,c,l,d,"F",p,y)}function MA(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function s0(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Io(t.unaryFilter.field);return yt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=Io(t.unaryFilter.field);return yt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Io(t.unaryFilter.field);return yt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Io(t.unaryFilter.field);return yt.create(c,"!=",{nullValue:"NULL_VALUE"});default:return Te()}}(n):n.fieldFilter!==void 0?function(t){return yt.create(Io(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Te()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return fr.create(t.compositeFilter.filters.map(i=>s0(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Te()}}(t.compositeFilter.op))}(n):Te()}function UA(n){return RA[n]}function FA(n){return AA[n]}function BA(n){return CA[n]}function To(n){return{fieldPath:n.canonicalString()}}function Io(n){return Dt.fromServerFormat(n.fieldPath)}function o0(n){return n instanceof yt?function(t){if(t.op==="=="){if(vy(t.value))return{unaryFilter:{field:To(t.field),op:"IS_NAN"}};if(_y(t.value))return{unaryFilter:{field:To(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(vy(t.value))return{unaryFilter:{field:To(t.field),op:"IS_NOT_NAN"}};if(_y(t.value))return{unaryFilter:{field:To(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:To(t.field),op:FA(t.op),value:t.value}}}(n):n instanceof fr?function(t){const i=t.getFilters().map(o=>o0(o));return i.length===1?i[0]:{compositeFilter:{op:BA(t.op),filters:i}}}(n):Te()}function jA(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function a0(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,t,i,o,l=Ie.min(),c=Ie.min(),d=xt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new wi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new wi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e){this.ht=e}}function $A(n){const e=VA({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?cf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(){this.ln=new qA}addToCollectionParentIndex(e,t){return this.ln.add(t),K.resolve()}getCollectionParents(e,t){return K.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return K.resolve()}deleteFieldIndex(e,t){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,t){return K.resolve()}getDocumentsMatchingTarget(e,t){return K.resolve(null)}getIndexType(e,t){return K.resolve(0)}getFieldIndexes(e,t){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,t){return K.resolve(Ri.min())}getMinOffsetFromCollectionGroup(e,t){return K.resolve(Ri.min())}updateCollectionGroup(e,t,i){return K.resolve()}updateIndexEntries(e,t){return K.resolve()}}class qA{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new vt(Ye.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new vt(Ye.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class nn{static withCacheSize(e){return new nn(e,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn.DEFAULT_COLLECTION_PERCENTILE=10,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nn.DEFAULT=new nn(41943040,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nn.DISABLED=new nn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Lo(0)}static Qn(){return new Lo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ly([n,e],[t,i]){const o=De(n,t);return o===0?De(e,i):o}class WA{constructor(e){this.Gn=e,this.buffer=new vt(Ly),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Ly(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class KA{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){oe("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){jo(t)?oe("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Bo(t)}await this.Yn(3e5)})}}class GA{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return K.resolve(Uc.oe);const i=new WA(t);return this.Zn.forEachTarget(e,o=>i.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>i.Hn(o))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.Zn.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(oe("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve(Oy)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(oe("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Oy):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let i,o,l,c,d,p,y;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(oe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,c=Date.now(),this.nthSequenceNumber(e,o))).next(T=>(i=T,d=Date.now(),this.removeTargets(e,i,t))).next(T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(T=>(y=Date.now(),wo()<=ke.DEBUG&&oe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-w}ms
	Determined least recently used ${o} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${T} documents in `+(y-p)+`ms
Total Duration: ${y-w}ms`),K.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T})))}}function QA(n,e){return new GA(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(){this.changes=new Is(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,jt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?K.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(i=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(i!==null&&Ja(i.mutation,o,Hn.empty(),_t.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,Pe()).next(()=>i))}getLocalViewOfDocuments(e,t,i=Pe()){const o=us();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,i).next(l=>{let c=qa();return l.forEach((d,p)=>{c=c.insert(d,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const i=us();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,Pe()))}populateOverlays(e,t,i){const o=[];return i.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((c,d)=>{t.set(c,d)})})}computeViews(e,t,i,o){let l=Br();const c=Xa(),d=function(){return Xa()}();return t.forEach((p,y)=>{const w=i.get(y.key);o.has(y.key)&&(w===void 0||w.mutation instanceof Ss)?l=l.insert(y.key,y):w!==void 0?(c.set(y.key,w.mutation.getFieldMask()),Ja(w.mutation,y,w.mutation.getFieldMask(),_t.now())):c.set(y.key,Hn.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((y,w)=>c.set(y,w)),t.forEach((y,w)=>{var T;return d.set(y,new XA(w,(T=c.get(y))!==null&&T!==void 0?T:null))}),d))}recalculateAndSaveOverlays(e,t){const i=Xa();let o=new et((c,d)=>c-d),l=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const d of c)d.keys().forEach(p=>{const y=t.get(p);if(y===null)return;let w=i.get(p)||Hn.empty();w=d.applyToLocalView(y,w),i.set(p,w);const T=(o.get(d.batchId)||Pe()).add(p);o=o.insert(d.batchId,T)})}).next(()=>{const c=[],d=o.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),y=p.key,w=p.value,T=Hv();w.forEach(S=>{if(!l.has(S)){const D=Yv(t.get(S),i.get(S));D!==null&&T.set(S,D),l=l.add(S)}}),c.push(this.documentOverlayCache.saveOverlays(e,y,T))}return K.waitFor(c)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,o){return function(c){return ge.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):tA(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next(l=>{const c=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):K.resolve(us());let d=-1,p=l;return c.next(y=>K.forEach(y,(w,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(w)?K.resolve():this.remoteDocumentCache.getEntry(e,w).next(S=>{p=p.insert(w,S)}))).next(()=>this.populateOverlays(e,y,l)).next(()=>this.computeViews(e,p,y,Pe())).next(w=>({batchId:d,changes:$v(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ge(t)).next(i=>{let o=qa();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let c=qa();return this.indexManager.getCollectionParents(e,l).next(d=>K.forEach(d,p=>{const y=function(T,S){return new jc(S,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next(w=>{w.forEach((T,S)=>{c=c.insert(T,S)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o))).next(c=>{l.forEach((p,y)=>{const w=y.getKey();c.get(w)===null&&(c=c.insert(w,jt.newInvalidDocument(w)))});let d=qa();return c.forEach((p,y)=>{const w=l.get(p);w!==void 0&&Ja(w.mutation,y,Hn.empty(),_t.now()),$c(t,y)&&(d=d.insert(p,y))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return K.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:lr(o.createTime)}}(t)),K.resolve()}getNamedQuery(e,t){return K.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:$A(o.bundledQuery),readTime:lr(o.readTime)}}(t)),K.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(){this.overlays=new et(ge.comparator),this.Er=new Map}getOverlay(e,t){return K.resolve(this.overlays.get(t))}getOverlays(e,t){const i=us();return K.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&i.set(o,l)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((o,l)=>{this.Tt(e,t,l)}),K.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Er.get(i);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.Er.delete(i)),K.resolve()}getOverlaysForCollection(e,t,i){const o=us(),l=t.length+1,c=new ge(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&p.largestBatchId>i&&o.set(p.getKey(),p)}return K.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new et((y,w)=>y-w);const c=this.overlays.getIterator();for(;c.hasNext();){const y=c.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let w=l.get(y.largestBatchId);w===null&&(w=us(),l=l.insert(y.largestBatchId,w)),w.set(y.getKey(),y)}}const d=us(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,w)=>d.set(y,w)),!(d.size()>=o)););return K.resolve(d)}Tt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const c=this.Er.get(o.largestBatchId).delete(i.key);this.Er.set(o.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new vA(t,i));let l=this.Er.get(t);l===void 0&&(l=Pe(),this.Er.set(t,l)),this.Er.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(){this.sessionToken=xt.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,K.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(){this.dr=new vt(Rt.Ar),this.Rr=new vt(Rt.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const i=new Rt(e,t);this.dr=this.dr.add(i),this.Rr=this.Rr.add(i)}mr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.gr(new Rt(e,t))}pr(e,t){e.forEach(i=>this.removeReference(i,t))}yr(e){const t=new ge(new Ye([])),i=new Rt(t,e),o=new Rt(t,e+1),l=[];return this.Rr.forEachInRange([i,o],c=>{this.gr(c),l.push(c.key)}),l}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new ge(new Ye([])),i=new Rt(t,e),o=new Rt(t,e+1);let l=Pe();return this.Rr.forEachInRange([i,o],c=>{l=l.add(c.key)}),l}containsKey(e){const t=new Rt(e,0),i=this.dr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Rt{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return ge.comparator(e.key,t.key)||De(e.br,t.br)}static Vr(e,t){return De(e.br,t.br)||ge.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new vt(Rt.Ar)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new _A(l,t,i,o);this.mutationQueue.push(c);for(const d of o)this.vr=this.vr.add(new Rt(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return K.resolve(c)}lookupMutationBatch(e,t){return K.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Fr(i),l=o<0?0:o;return K.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Rt(t,0),o=new Rt(t,Number.POSITIVE_INFINITY),l=[];return this.vr.forEachInRange([i,o],c=>{const d=this.Cr(c.br);l.push(d)}),K.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new vt(De);return t.forEach(o=>{const l=new Rt(o,0),c=new Rt(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([l,c],d=>{i=i.add(d.br)})}),K.resolve(this.Mr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;ge.isDocumentKey(l)||(l=l.child(""));const c=new Rt(new ge(l),0);let d=new vt(De);return this.vr.forEachWhile(p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(d=d.add(p.br)),!0)},c),K.resolve(this.Mr(d))}Mr(e){const t=[];return e.forEach(i=>{const o=this.Cr(i);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Fe(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.vr;return K.forEach(t.mutations,o=>{const l=new Rt(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=i})}Ln(e){}containsKey(e,t){const i=new Rt(t,0),o=this.vr.firstAfterOrEqual(i);return K.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e){this.Nr=e,this.docs=function(){return new et(ge.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,c=this.Nr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return K.resolve(i?i.document.mutableCopy():jt.newInvalidDocument(t))}getEntries(e,t){let i=Br();return t.forEach(o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():jt.newInvalidDocument(o))}),K.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Br();const c=t.path,d=new ge(c.child("")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:y,value:{document:w}}=p.getNext();if(!c.isPrefixOf(y.path))break;y.path.length>c.length+1||O1(x1(w),i)<=0||(o.has(w.key)||$c(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return K.resolve(l)}getAllFromCollectionGroup(e,t,i,o){Te()}Lr(e,t){return K.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new iC(this)}getSize(e){return K.resolve(this.size)}}class iC extends YA{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(i)}),K.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e){this.persistence=e,this.Br=new Is(t=>Bf(t),jf),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.kr=0,this.qr=new Gf,this.targetCount=0,this.Qr=Lo.qn()}forEachTarget(e,t){return this.Br.forEach((i,o)=>t(o)),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.kr&&(this.kr=t),K.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new Lo(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,K.resolve()}updateTargetData(e,t){return this.Un(t),K.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.Br.forEach((c,d)=>{d.sequenceNumber<=t&&i.get(d.targetId)===null&&(this.Br.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)}),K.waitFor(l).next(()=>o)}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,t){const i=this.Br.get(t)||null;return K.resolve(i)}addMatchingKeys(e,t,i){return this.qr.mr(t,i),K.resolve()}removeMatchingKeys(e,t,i){this.qr.pr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(c=>{l.push(o.markPotentiallyOrphaned(e,c))}),K.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),K.resolve()}getMatchingKeysForTargetId(e,t){const i=this.qr.Sr(t);return K.resolve(i)}containsKey(e,t){return K.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Uc(0),this.Ur=!1,this.Ur=!0,this.Wr=new tC,this.referenceDelegate=e(this),this.Gr=new sC(this),this.indexManager=new HA,this.remoteDocumentCache=function(o){return new rC(o)}(i=>this.referenceDelegate.zr(i)),this.serializer=new zA(t),this.jr=new ZA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new eC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Kr[e.toKey()];return i||(i=new nC(t,this.referenceDelegate),this.Kr[e.toKey()]=i),i}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,i){oe("MemoryPersistence","Starting transaction:",e);const o=new oC(this.$r.next());return this.referenceDelegate.Hr(),i(o).next(l=>this.referenceDelegate.Jr(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}Yr(e,t){return K.or(Object.values(this.Kr).map(i=>()=>i.containsKey(e,t)))}}class oC extends b1{constructor(e){super(),this.currentSequenceNumber=e}}class Qf{constructor(e){this.persistence=e,this.Zr=new Gf,this.Xr=null}static ei(e){return new Qf(e)}get ti(){if(this.Xr)return this.Xr;throw Te()}addReference(e,t,i){return this.Zr.addReference(i,t),this.ti.delete(i.toString()),K.resolve()}removeReference(e,t,i){return this.Zr.removeReference(i,t),this.ti.add(i.toString()),K.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),K.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.ti.add(l.toString()))}).next(()=>i.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.ti,i=>{const o=ge.fromPath(i);return this.ni(e,o).next(l=>{l||t.removeEntry(o,Ie.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(i=>{i?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return K.or([()=>K.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Ec{constructor(e,t){this.persistence=e,this.ri=new Is(i=>U1(i.path),(i,o)=>i.isEqual(o)),this.garbageCollector=QA(this,t)}static ei(e,t){return new Ec(e,t)}Hr(){}Jr(e){return K.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(o=>i+o))}nr(e){let t=0;return this.er(e,i=>{t++}).next(()=>t)}er(e,t){return K.forEach(this.ri,(i,o)=>this.ir(e,i,o).next(l=>l?K.resolve():t(o)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.Lr(e,c=>this.ir(e,c,t).next(d=>{d||(i++,l.removeEntry(c,Ie.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),K.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),K.resolve()}removeReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),K.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),K.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=tc(e.data.value)),t}ir(e,t,i){return K.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return K.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Wi=i,this.Gi=o}static zi(e,t){let i=Pe(),o=Pe();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Yf(e,t.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return VI()?8:V1(zt())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.Xi(e,t).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.es(e,t,o,i).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new aC;return this.ts(e,t,c).next(d=>{if(l.result=d,this.Hi)return this.ns(e,t,c,d.size)})}).next(()=>l.result)}ns(e,t,i,o){return i.documentReadCount<this.Ji?(wo()<=ke.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",Eo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),K.resolve()):(wo()<=ke.DEBUG&&oe("QueryEngine","Query:",Eo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.Yi*o?(wo()<=ke.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",Eo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,or(t))):K.resolve())}Xi(e,t){if(Iy(t))return K.resolve(null);let i=or(t);return this.indexManager.getIndexType(e,i).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=cf(t,null,"F"),i=or(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const c=Pe(...l);return this.Zi.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,i).next(p=>{const y=this.rs(t,d);return this.ss(t,y,c,p.readTime)?this.Xi(e,cf(t,null,"F")):this.os(e,y,t,p)}))})))}es(e,t,i,o){return Iy(t)||o.isEqual(Ie.min())?K.resolve(null):this.Zi.getDocuments(e,i).next(l=>{const c=this.rs(t,l);return this.ss(t,c,i,o)?K.resolve(null):(wo()<=ke.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Eo(t)),this.os(e,c,t,D1(o,-1)).next(d=>d))})}rs(e,t){let i=new vt(jv(e));return t.forEach((o,l)=>{$c(e,l)&&(i=i.add(l))}),i}ss(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ts(e,t,i){return wo()<=ke.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",Eo(t)),this.Zi.getDocumentsMatchingQuery(e,t,Ri.min(),i)}os(e,t,i,o){return this.Zi.getDocumentsMatchingQuery(e,i,o).next(l=>(t.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e,t,i,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new et(De),this.cs=new Is(l=>Bf(l),jf),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(i)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new JA(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function cC(n,e,t,i){return new uC(n,e,t,i)}async function u0(n,e){const t=Se(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next(l=>(o=l,t.Ps(e),t.mutationQueue.getAllMutationBatches(i))).next(l=>{const c=[],d=[];let p=Pe();for(const y of o){c.push(y.batchId);for(const w of y.mutations)p=p.add(w.key)}for(const y of l){d.push(y.batchId);for(const w of y.mutations)p=p.add(w.key)}return t.localDocuments.getDocuments(i,p).next(y=>({Ts:y,removedBatchIds:c,addedBatchIds:d}))})})}function hC(n,e){const t=Se(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=e.batch.keys(),l=t.hs.newChangeBuffer({trackRemovals:!0});return function(d,p,y,w){const T=y.batch,S=T.keys();let D=K.resolve();return S.forEach(b=>{D=D.next(()=>w.getEntry(p,b)).next(z=>{const L=y.docVersions.get(b);Fe(L!==null),z.version.compareTo(L)<0&&(T.applyToRemoteDocument(z,y),z.isValidDocument()&&(z.setReadTime(y.commitVersion),w.addEntry(z)))})}),D.next(()=>d.mutationQueue.removeMutationBatch(p,T))}(t,i,e,l).next(()=>l.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let p=Pe();for(let y=0;y<d.mutationResults.length;++y)d.mutationResults[y].transformResults.length>0&&(p=p.add(d.batch.mutations[y].key));return p}(e))).next(()=>t.localDocuments.getDocuments(i,o))})}function c0(n){const e=Se(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function dC(n,e){const t=Se(n),i=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const d=[];e.targetChanges.forEach((w,T)=>{const S=o.get(T);if(!S)return;d.push(t.Gr.removeMatchingKeys(l,w.removedDocuments,T).next(()=>t.Gr.addMatchingKeys(l,w.addedDocuments,T)));let D=S.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?D=D.withResumeToken(xt.EMPTY_BYTE_STRING,Ie.min()).withLastLimboFreeSnapshotVersion(Ie.min()):w.resumeToken.approximateByteSize()>0&&(D=D.withResumeToken(w.resumeToken,i)),o=o.insert(T,D),function(z,L,q){return z.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-z.snapshotVersion.toMicroseconds()>=3e8?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(S,D,w)&&d.push(t.Gr.updateTargetData(l,D))});let p=Br(),y=Pe();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,w))}),d.push(fC(l,c,e.documentUpdates).next(w=>{p=w.Is,y=w.Es})),!i.isEqual(Ie.min())){const w=t.Gr.getLastRemoteSnapshotVersion(l).next(T=>t.Gr.setTargetsMetadata(l,l.currentSequenceNumber,i));d.push(w)}return K.waitFor(d).next(()=>c.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,y)).next(()=>p)}).then(l=>(t.us=o,l))}function fC(n,e,t){let i=Pe(),o=Pe();return t.forEach(l=>i=i.add(l)),e.getEntries(n,i).next(l=>{let c=Br();return t.forEach((d,p)=>{const y=l.get(d);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(d)),p.isNoDocument()&&p.version.isEqual(Ie.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):oe("LocalStore","Ignoring outdated watch update for ",d,". Current version:",y.version," Watch version:",p.version)}),{Is:c,Es:o}})}function pC(n,e){const t=Se(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function mC(n,e){const t=Se(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return t.Gr.getTargetData(i,e).next(l=>l?(o=l,K.resolve(o)):t.Gr.allocateTargetId(i).next(c=>(o=new wi(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.Gr.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=t.us.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(i.targetId,i),t.cs.set(e,i.targetId)),i})}async function mf(n,e,t){const i=Se(n),o=i.us.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,c=>i.persistence.referenceDelegate.removeTarget(c,o))}catch(c){if(!jo(c))throw c;oe("LocalStore",`Failed to update sequence numbers for target ${e}: ${c}`)}i.us=i.us.remove(e),i.cs.delete(o.target)}function by(n,e,t){const i=Se(n);let o=Ie.min(),l=Pe();return i.persistence.runTransaction("Execute query","readwrite",c=>function(p,y,w){const T=Se(p),S=T.cs.get(w);return S!==void 0?K.resolve(T.us.get(S)):T.Gr.getTargetData(y,w)}(i,c,or(e)).next(d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,i.Gr.getMatchingKeysForTargetId(c,d.targetId).next(p=>{l=p})}).next(()=>i._s.getDocumentsMatchingQuery(c,e,t?o:Ie.min(),t?l:Pe())).next(d=>(gC(i,rA(e),d),{documents:d,ds:l})))}function gC(n,e,t){let i=n.ls.get(e)||Ie.min();t.forEach((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),n.ls.set(e,i)}class Vy{constructor(){this.activeTargetIds=uA()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class yC{constructor(){this._o=new Vy,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,i){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Vy,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){oe("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){oe("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ku=null;function $d(){return Ku===null?Ku=function(){return 268435456+Math.round(2147483648*Math.random())}():Ku++,"0x"+Ku.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="WebChannelConnection";class EC extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Fo=i+"://"+t.host,this.Mo=`projects/${o}/databases/${l}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${l}`}Oo(t,i,o,l,c){const d=$d(),p=this.No(t,i.toUriEncodedString());oe("RestConnection",`Sending RPC '${t}' ${d}:`,p,o);const y={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(y,l,c),this.Bo(t,p,y,o).then(w=>(oe("RestConnection",`Received RPC '${t}' ${d}: `,w),w),w=>{throw No("RestConnection",`RPC '${t}' ${d} failed with error: `,w,"url: ",p,"request:",o),w})}ko(t,i,o,l,c,d){return this.Oo(t,i,o,l,c)}Lo(t,i,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((l,c)=>t[c]=l),o&&o.headers.forEach((l,c)=>t[c]=l)}No(t,i){const o=vC[t];return`${this.Fo}/v1/${i}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,i,o){const l=$d();return new Promise((c,d)=>{const p=new Sv;p.setWithCredentials(!0),p.listenOnce(Rv.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case ec.NO_ERROR:const w=p.getResponseJson();oe(Ft,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(w)),c(w);break;case ec.TIMEOUT:oe(Ft,`RPC '${e}' ${l} timed out`),d(new fe(J.DEADLINE_EXCEEDED,"Request time out"));break;case ec.HTTP_ERROR:const T=p.getStatus();if(oe(Ft,`RPC '${e}' ${l} failed with status:`,T,"response text:",p.getResponseText()),T>0){let S=p.getResponseJson();Array.isArray(S)&&(S=S[0]);const D=S==null?void 0:S.error;if(D&&D.status&&D.message){const b=function(L){const q=L.toLowerCase().replace(/_/g,"-");return Object.values(J).indexOf(q)>=0?q:J.UNKNOWN}(D.status);d(new fe(b,D.message))}else d(new fe(J.UNKNOWN,"Server responded with status "+p.getStatus()))}else d(new fe(J.UNAVAILABLE,"Connection failed."));break;default:Te()}}finally{oe(Ft,`RPC '${e}' ${l} completed.`)}});const y=JSON.stringify(o);oe(Ft,`RPC '${e}' ${l} sending request:`,o),p.send(t,"POST",y,i,15)})}qo(e,t,i){const o=$d(),l=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=kv(),d=Cv(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Lo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const w=l.join("");oe(Ft,`Creating RPC '${e}' stream ${o}: ${w}`,p);const T=c.createWebChannel(w,p);let S=!1,D=!1;const b=new wC({Eo:L=>{D?oe(Ft,`Not sending because RPC '${e}' stream ${o} is closed:`,L):(S||(oe(Ft,`Opening RPC '${e}' stream ${o} transport.`),T.open(),S=!0),oe(Ft,`RPC '${e}' stream ${o} sending:`,L),T.send(L))},Ao:()=>T.close()}),z=(L,q,$)=>{L.listen(q,Z=>{try{$(Z)}catch(re){setTimeout(()=>{throw re},0)}})};return z(T,Ha.EventType.OPEN,()=>{D||(oe(Ft,`RPC '${e}' stream ${o} transport opened.`),b.So())}),z(T,Ha.EventType.CLOSE,()=>{D||(D=!0,oe(Ft,`RPC '${e}' stream ${o} transport closed`),b.Do())}),z(T,Ha.EventType.ERROR,L=>{D||(D=!0,No(Ft,`RPC '${e}' stream ${o} transport errored:`,L),b.Do(new fe(J.UNAVAILABLE,"The operation could not be completed")))}),z(T,Ha.EventType.MESSAGE,L=>{var q;if(!D){const $=L.data[0];Fe(!!$);const Z=$,re=(Z==null?void 0:Z.error)||((q=Z[0])===null||q===void 0?void 0:q.error);if(re){oe(Ft,`RPC '${e}' stream ${o} received error:`,re);const we=re.status;let _e=function(A){const P=ct[A];if(P!==void 0)return Jv(P)}(we),N=re.message;_e===void 0&&(_e=J.INTERNAL,N="Unknown error status: "+we+" with message "+re.message),D=!0,b.Do(new fe(_e,N)),T.close()}else oe(Ft,`RPC '${e}' stream ${o} received:`,$),b.vo($)}}),z(d,Av.STAT_EVENT,L=>{L.stat===sf.PROXY?oe(Ft,`RPC '${e}' stream ${o} detected buffering proxy`):L.stat===sf.NOPROXY&&oe(Ft,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{b.bo()},0),b}}function Hd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(n){return new kA(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e,t,i=1e3,o=1.5,l=6e4){this.li=e,this.timerId=t,this.Qo=i,this.Ko=o,this.$o=l,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),i=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-i);o>0&&oe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e,t,i,o,l,c,d,p){this.li=e,this.Yo=i,this.Zo=o,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new h0(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===J.RESOURCE_EXHAUSTED?(Fr(t.toString()),Fr("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===J.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.Xo===t&&this.I_(i,o)},i=>{e(()=>{const o=new fe(J.UNKNOWN,"Fetching auth token failed: "+i.message);return this.E_(o)})})}I_(e,t){const i=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{i(()=>this.listener.Ro())}),this.stream.mo(()=>{i(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{i(()=>this.E_(o))}),this.stream.onMessage(o=>{i(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return oe("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(oe("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class TC extends d0{constructor(e,t,i,o,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=DA(this.serializer,e),i=function(l){if(!("targetChange"in l))return Ie.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Ie.min():c.readTime?lr(c.readTime):Ie.min()}(e);return this.listener.R_(t,i)}V_(e){const t={};t.database=pf(this.serializer),t.addTarget=function(l,c){let d;const p=c.target;if(d=uf(p)?{documents:LA(l,p)}:{query:bA(l,p).ct},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=t0(l,c.resumeToken);const y=hf(l,c.expectedCount);y!==null&&(d.expectedCount=y)}else if(c.snapshotVersion.compareTo(Ie.min())>0){d.readTime=wc(l,c.snapshotVersion.toTimestamp());const y=hf(l,c.expectedCount);y!==null&&(d.expectedCount=y)}return d}(this.serializer,e);const i=MA(this.serializer,e);i&&(t.labels=i),this.c_(t)}m_(e){const t={};t.database=pf(this.serializer),t.removeTarget=e,this.c_(t)}}class IC extends d0{constructor(e,t,i,o,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=OA(e.writeResults,e.commitTime),i=lr(e.commitTime);return this.listener.y_(i,t)}w_(){const e={};e.database=pf(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>xA(this.serializer,i))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC extends class{}{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new fe(J.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,i,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.Oo(e,df(t,i),o,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new fe(J.UNKNOWN,l.toString())})}ko(e,t,i,o,l){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.ko(e,df(t,i),o,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new fe(J.UNKNOWN,c.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class RC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Fr(t),this.C_=!1):oe("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=l,this.Q_.uo(c=>{i.enqueueAndForget(async()=>{Rs(this)&&(oe("RemoteStore","Restarting streams for network reachability change."),await async function(p){const y=Se(p);y.k_.add(4),await vl(y),y.K_.set("Unknown"),y.k_.delete(4),await Gc(y)}(this))})}),this.K_=new RC(i,o)}}async function Gc(n){if(Rs(n))for(const e of n.q_)await e(!0)}async function vl(n){for(const e of n.q_)await e(!1)}function f0(n,e){const t=Se(n);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),ep(t)?Zf(t):zo(t).s_()&&Jf(t,e))}function Xf(n,e){const t=Se(n),i=zo(t);t.B_.delete(e),i.s_()&&p0(t,e),t.B_.size===0&&(i.s_()?i.a_():Rs(t)&&t.K_.set("Unknown"))}function Jf(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ie.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}zo(n).V_(e)}function p0(n,e){n.U_.xe(e),zo(n).m_(e)}function Zf(n){n.U_=new SA({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.B_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),zo(n).start(),n.K_.F_()}function ep(n){return Rs(n)&&!zo(n).i_()&&n.B_.size>0}function Rs(n){return Se(n).k_.size===0}function m0(n){n.U_=void 0}async function CC(n){n.K_.set("Online")}async function kC(n){n.B_.forEach((e,t)=>{Jf(n,e)})}async function PC(n,e){m0(n),ep(n)?(n.K_.O_(e),Zf(n)):n.K_.set("Unknown")}async function NC(n,e,t){if(n.K_.set("Online"),e instanceof e0&&e.state===2&&e.cause)try{await async function(o,l){const c=l.cause;for(const d of l.targetIds)o.B_.has(d)&&(await o.remoteSyncer.rejectListen(d,c),o.B_.delete(d),o.U_.removeTarget(d))}(n,e)}catch(i){oe("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Tc(n,i)}else if(e instanceof ic?n.U_.$e(e):e instanceof Zv?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(Ie.min()))try{const i=await c0(n.localStore);t.compareTo(i)>=0&&await function(l,c){const d=l.U_.it(c);return d.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const w=l.B_.get(y);w&&l.B_.set(y,w.withResumeToken(p.resumeToken,c))}}),d.targetMismatches.forEach((p,y)=>{const w=l.B_.get(p);if(!w)return;l.B_.set(p,w.withResumeToken(xt.EMPTY_BYTE_STRING,w.snapshotVersion)),p0(l,p);const T=new wi(w.target,p,y,w.sequenceNumber);Jf(l,T)}),l.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(i){oe("RemoteStore","Failed to raise snapshot:",i),await Tc(n,i)}}async function Tc(n,e,t){if(!jo(e))throw e;n.k_.add(1),await vl(n),n.K_.set("Offline"),t||(t=()=>c0(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{oe("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await Gc(n)})}function g0(n,e){return e().catch(t=>Tc(n,t,e))}async function Qc(n){const e=Se(n),t=Pi(e);let i=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;DC(e);)try{const o=await pC(e.localStore,i);if(o===null){e.L_.length===0&&t.a_();break}i=o.batchId,xC(e,o)}catch(o){await Tc(e,o)}y0(e)&&_0(e)}function DC(n){return Rs(n)&&n.L_.length<10}function xC(n,e){n.L_.push(e);const t=Pi(n);t.s_()&&t.f_&&t.g_(e.mutations)}function y0(n){return Rs(n)&&!Pi(n).i_()&&n.L_.length>0}function _0(n){Pi(n).start()}async function OC(n){Pi(n).w_()}async function LC(n){const e=Pi(n);for(const t of n.L_)e.g_(t.mutations)}async function bC(n,e,t){const i=n.L_.shift(),o=qf.from(i,e,t);await g0(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await Qc(n)}async function VC(n,e){e&&Pi(n).f_&&await async function(i,o){if(function(c){return EA(c)&&c!==J.ABORTED}(o.code)){const l=i.L_.shift();Pi(i).__(),await g0(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o)),await Qc(i)}}(n,e),y0(n)&&_0(n)}async function Uy(n,e){const t=Se(n);t.asyncQueue.verifyOperationInProgress(),oe("RemoteStore","RemoteStore received new credentials");const i=Rs(t);t.k_.add(3),await vl(t),i&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await Gc(t)}async function MC(n,e){const t=Se(n);e?(t.k_.delete(2),await Gc(t)):e||(t.k_.add(2),await vl(t),t.K_.set("Unknown"))}function zo(n){return n.W_||(n.W_=function(t,i,o){const l=Se(t);return l.b_(),new TC(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Ro:CC.bind(null,n),mo:kC.bind(null,n),po:PC.bind(null,n),R_:NC.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),ep(n)?Zf(n):n.K_.set("Unknown")):(await n.W_.stop(),m0(n))})),n.W_}function Pi(n){return n.G_||(n.G_=function(t,i,o){const l=Se(t);return l.b_(),new IC(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:OC.bind(null,n),po:VC.bind(null,n),p_:LC.bind(null,n),y_:bC.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await Qc(n)):(await n.G_.stop(),n.L_.length>0&&(oe("RemoteStore",`Stopping write stream with ${n.L_.length} pending writes`),n.L_=[]))})),n.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new hs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const c=Date.now()+i,d=new tp(e,t,c,o,l);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new fe(J.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function np(n,e){if(Fr("AsyncQueue",`${e}: ${n}`),jo(n))return new fe(J.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{static emptySet(e){return new Ro(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||ge.comparator(t.key,i.key):(t,i)=>ge.comparator(t.key,i.key),this.keyedMap=qa(),this.sortedSet=new et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ro)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Ro;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(){this.z_=new et(ge.comparator)}track(e){const t=e.doc.key,i=this.z_.get(t);i?e.type!==0&&i.type===3?this.z_=this.z_.insert(t,e):e.type===3&&i.type!==1?this.z_=this.z_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.z_=this.z_.remove(t):e.type===1&&i.type===2?this.z_=this.z_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):Te():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,i)=>{e.push(i)}),e}}class bo{constructor(e,t,i,o,l,c,d,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const c=[];return t.forEach(d=>{c.push({type:0,doc:d})}),new bo(e,t,Ro.emptySet(t),c,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class FC{constructor(){this.queries=By(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,i){const o=Se(t),l=o.queries;o.queries=By(),l.forEach((c,d)=>{for(const p of d.J_)p.onError(i)})})(this,new fe(J.ABORTED,"Firestore shutting down"))}}function By(){return new Is(n=>Bv(n),zc)}async function BC(n,e){const t=Se(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Y_()&&e.Z_()&&(i=2):(l=new UC,i=e.Z_()?0:1);try{switch(i){case 0:l.H_=await t.onListen(o,!0);break;case 1:l.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(c){const d=np(c,`Initialization of query '${Eo(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,l),l.J_.push(e),e.ea(t.onlineState),l.H_&&e.ta(l.H_)&&rp(t)}async function jC(n,e){const t=Se(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const c=l.J_.indexOf(e);c>=0&&(l.J_.splice(c,1),l.J_.length===0?o=e.Z_()?0:1:!l.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function zC(n,e){const t=Se(n);let i=!1;for(const o of e){const l=o.query,c=t.queries.get(l);if(c){for(const d of c.J_)d.ta(o)&&(i=!0);c.H_=o}}i&&rp(t)}function $C(n,e,t){const i=Se(n),o=i.queries.get(e);if(o)for(const l of o.J_)l.onError(t);i.queries.delete(e)}function rp(n){n.X_.forEach(e=>{e.next()})}var gf,jy;(jy=gf||(gf={})).na="default",jy.Cache="cache";class HC{constructor(e,t,i){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=i||{}}ta(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new bo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const i=t!=="Offline";return(!this.options.ua||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=bo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==gf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e){this.key=e}}class w0{constructor(e){this.key=e}}class qC{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Pe(),this.mutatedKeys=Pe(),this.Va=jv(e),this.ma=new Ro(this.Va)}get fa(){return this.da}ga(e,t){const i=t?t.pa:new Fy,o=t?t.ma:this.ma;let l=t?t.mutatedKeys:this.mutatedKeys,c=o,d=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((w,T)=>{const S=o.get(w),D=$c(this.query,T)?T:null,b=!!S&&this.mutatedKeys.has(S.key),z=!!D&&(D.hasLocalMutations||this.mutatedKeys.has(D.key)&&D.hasCommittedMutations);let L=!1;S&&D?S.data.isEqual(D.data)?b!==z&&(i.track({type:3,doc:D}),L=!0):this.ya(S,D)||(i.track({type:2,doc:D}),L=!0,(p&&this.Va(D,p)>0||y&&this.Va(D,y)<0)&&(d=!0)):!S&&D?(i.track({type:0,doc:D}),L=!0):S&&!D&&(i.track({type:1,doc:S}),L=!0,(p||y)&&(d=!0)),L&&(D?(c=c.add(D),l=z?l.add(w):l.delete(w)):(c=c.delete(w),l=l.delete(w)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const w=this.query.limitType==="F"?c.last():c.first();c=c.delete(w.key),l=l.delete(w.key),i.track({type:1,doc:w})}return{ma:c,pa:i,ss:d,mutatedKeys:l}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const c=e.pa.j_();c.sort((w,T)=>function(D,b){const z=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te()}};return z(D)-z(b)}(w.type,T.type)||this.Va(w.doc,T.doc)),this.wa(i),o=o!=null&&o;const d=t&&!o?this.Sa():[],p=this.Ra.size===0&&this.current&&!o?1:0,y=p!==this.Aa;return this.Aa=p,c.length!==0||y?{snapshot:new bo(this.query,e.ma,l,c,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),ba:d}:{ba:d}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Fy,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Pe(),this.ma.forEach(i=>{this.Da(i.key)&&(this.Ra=this.Ra.add(i.key))});const t=[];return e.forEach(i=>{this.Ra.has(i)||t.push(new w0(i))}),this.Ra.forEach(i=>{e.has(i)||t.push(new v0(i))}),t}va(e){this.da=e.ds,this.Ra=Pe();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return bo.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class WC{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class KC{constructor(e){this.key=e,this.Fa=!1}}class GC{constructor(e,t,i,o,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Ma={},this.xa=new Is(d=>Bv(d),zc),this.Oa=new Map,this.Na=new Set,this.La=new et(ge.comparator),this.Ba=new Map,this.ka=new Gf,this.qa={},this.Qa=new Map,this.Ka=Lo.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function QC(n,e,t=!0){const i=A0(n);let o;const l=i.xa.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Ca()):o=await E0(i,e,t,!0),o}async function YC(n,e){const t=A0(n);await E0(t,e,!0,!1)}async function E0(n,e,t,i){const o=await mC(n.localStore,or(e)),l=o.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let d;return i&&(d=await XC(n,e,l,c==="current",o.resumeToken)),n.isPrimaryClient&&t&&f0(n.remoteStore,o),d}async function XC(n,e,t,i,o){n.Ua=(T,S,D)=>async function(z,L,q,$){let Z=L.view.ga(q);Z.ss&&(Z=await by(z.localStore,L.query,!1).then(({documents:N})=>L.view.ga(N,Z)));const re=$&&$.targetChanges.get(L.targetId),we=$&&$.targetMismatches.get(L.targetId)!=null,_e=L.view.applyChanges(Z,z.isPrimaryClient,re,we);return $y(z,L.targetId,_e.ba),_e.snapshot}(n,T,S,D);const l=await by(n.localStore,e,!0),c=new qC(e,l.ds),d=c.ga(l.documents),p=_l.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=c.applyChanges(d,n.isPrimaryClient,p);$y(n,t,y.ba);const w=new WC(e,t,c);return n.xa.set(e,w),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),y.snapshot}async function JC(n,e,t){const i=Se(n),o=i.xa.get(e),l=i.Oa.get(o.targetId);if(l.length>1)return i.Oa.set(o.targetId,l.filter(c=>!zc(c,e))),void i.xa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await mf(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Xf(i.remoteStore,o.targetId),yf(i,o.targetId)}).catch(Bo)):(yf(i,o.targetId),await mf(i.localStore,o.targetId,!0))}async function ZC(n,e){const t=Se(n),i=t.xa.get(e),o=t.Oa.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Xf(t.remoteStore,i.targetId))}async function ek(n,e,t){const i=ak(n);try{const o=await function(c,d){const p=Se(c),y=_t.now(),w=d.reduce((D,b)=>D.add(b.key),Pe());let T,S;return p.persistence.runTransaction("Locally write mutations","readwrite",D=>{let b=Br(),z=Pe();return p.hs.getEntries(D,w).next(L=>{b=L,b.forEach((q,$)=>{$.isValidDocument()||(z=z.add(q))})}).next(()=>p.localDocuments.getOverlayedDocuments(D,b)).next(L=>{T=L;const q=[];for(const $ of d){const Z=gA($,T.get($.key).overlayedDocument);Z!=null&&q.push(new Ss($.key,Z,Ov(Z.value.mapValue),ar.exists(!0)))}return p.mutationQueue.addMutationBatch(D,y,q,d)}).next(L=>{S=L;const q=L.applyToLocalDocumentSet(T,z);return p.documentOverlayCache.saveOverlays(D,L.batchId,q)})}).then(()=>({batchId:S.batchId,changes:$v(T)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),function(c,d,p){let y=c.qa[c.currentUser.toKey()];y||(y=new et(De)),y=y.insert(d,p),c.qa[c.currentUser.toKey()]=y}(i,o.batchId,t),await wl(i,o.changes),await Qc(i.remoteStore)}catch(o){const l=np(o,"Failed to persist write");t.reject(l)}}async function T0(n,e){const t=Se(n);try{const i=await dC(t.localStore,e);e.targetChanges.forEach((o,l)=>{const c=t.Ba.get(l);c&&(Fe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?c.Fa=!0:o.modifiedDocuments.size>0?Fe(c.Fa):o.removedDocuments.size>0&&(Fe(c.Fa),c.Fa=!1))}),await wl(t,i,e)}catch(i){await Bo(i)}}function zy(n,e,t){const i=Se(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.xa.forEach((l,c)=>{const d=c.view.ea(e);d.snapshot&&o.push(d.snapshot)}),function(c,d){const p=Se(c);p.onlineState=d;let y=!1;p.queries.forEach((w,T)=>{for(const S of T.J_)S.ea(d)&&(y=!0)}),y&&rp(p)}(i.eventManager,e),o.length&&i.Ma.R_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function tk(n,e,t){const i=Se(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Ba.get(e),l=o&&o.key;if(l){let c=new et(ge.comparator);c=c.insert(l,jt.newNoDocument(l,Ie.min()));const d=Pe().add(l),p=new Wc(Ie.min(),new Map,new et(De),c,d);await T0(i,p),i.La=i.La.remove(l),i.Ba.delete(e),ip(i)}else await mf(i.localStore,e,!1).then(()=>yf(i,e,t)).catch(Bo)}async function nk(n,e){const t=Se(n),i=e.batch.batchId;try{const o=await hC(t.localStore,e);S0(t,i,null),I0(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await wl(t,o)}catch(o){await Bo(o)}}async function rk(n,e,t){const i=Se(n);try{const o=await function(c,d){const p=Se(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let w;return p.mutationQueue.lookupMutationBatch(y,d).next(T=>(Fe(T!==null),w=T.keys(),p.mutationQueue.removeMutationBatch(y,T))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,w,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,w)).next(()=>p.localDocuments.getDocuments(y,w))})}(i.localStore,e);S0(i,e,t),I0(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await wl(i,o)}catch(o){await Bo(o)}}function I0(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function S0(n,e,t){const i=Se(n);let o=i.qa[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.qa[i.currentUser.toKey()]=o}}function yf(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Oa.get(e))n.xa.delete(i),t&&n.Ma.Wa(i,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(i=>{n.ka.containsKey(i)||R0(n,i)})}function R0(n,e){n.Na.delete(e.path.canonicalString());const t=n.La.get(e);t!==null&&(Xf(n.remoteStore,t),n.La=n.La.remove(e),n.Ba.delete(t),ip(n))}function $y(n,e,t){for(const i of t)i instanceof v0?(n.ka.addReference(i.key,e),ik(n,i)):i instanceof w0?(oe("SyncEngine","Document no longer in limbo: "+i.key),n.ka.removeReference(i.key,e),n.ka.containsKey(i.key)||R0(n,i.key)):Te()}function ik(n,e){const t=e.key,i=t.path.canonicalString();n.La.get(t)||n.Na.has(i)||(oe("SyncEngine","New document in limbo: "+t),n.Na.add(i),ip(n))}function ip(n){for(;n.Na.size>0&&n.La.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new ge(Ye.fromString(e)),i=n.Ka.next();n.Ba.set(i,new KC(t)),n.La=n.La.insert(t,i),f0(n.remoteStore,new wi(or(zf(t.path)),i,"TargetPurposeLimboResolution",Uc.oe))}}async function wl(n,e,t){const i=Se(n),o=[],l=[],c=[];i.xa.isEmpty()||(i.xa.forEach((d,p)=>{c.push(i.Ua(p,e,t).then(y=>{var w;if((y||t)&&i.isPrimaryClient){const T=y?!y.fromCache:(w=t==null?void 0:t.targetChanges.get(p.targetId))===null||w===void 0?void 0:w.current;i.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(y){o.push(y);const T=Yf.zi(p.targetId,y);l.push(T)}}))}),await Promise.all(c),i.Ma.R_(o),await async function(p,y){const w=Se(p);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>K.forEach(y,S=>K.forEach(S.Wi,D=>w.persistence.referenceDelegate.addReference(T,S.targetId,D)).next(()=>K.forEach(S.Gi,D=>w.persistence.referenceDelegate.removeReference(T,S.targetId,D)))))}catch(T){if(!jo(T))throw T;oe("LocalStore","Failed to update sequence numbers: "+T)}for(const T of y){const S=T.targetId;if(!T.fromCache){const D=w.us.get(S),b=D.snapshotVersion,z=D.withLastLimboFreeSnapshotVersion(b);w.us=w.us.insert(S,z)}}}(i.localStore,l))}async function sk(n,e){const t=Se(n);if(!t.currentUser.isEqual(e)){oe("SyncEngine","User change. New user:",e.toKey());const i=await u0(t.localStore,e);t.currentUser=e,function(l,c){l.Qa.forEach(d=>{d.forEach(p=>{p.reject(new fe(J.CANCELLED,c))})}),l.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await wl(t,i.Ts)}}function ok(n,e){const t=Se(n),i=t.Ba.get(e);if(i&&i.Fa)return Pe().add(i.key);{let o=Pe();const l=t.Oa.get(e);if(!l)return o;for(const c of l){const d=t.xa.get(c);o=o.unionWith(d.view.fa)}return o}}function A0(n){const e=Se(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=T0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ok.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tk.bind(null,e),e.Ma.R_=zC.bind(null,e.eventManager),e.Ma.Wa=$C.bind(null,e.eventManager),e}function ak(n){const e=Se(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rk.bind(null,e),e}class Ic{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Kc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return cC(this.persistence,new lC,e.initialUser,this.serializer)}ja(e){return new l0(Qf.ei,this.serializer)}za(e){return new yC}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ic.provider={build:()=>new Ic};class lk extends Ic{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Fe(this.persistence.referenceDelegate instanceof Ec);const i=this.persistence.referenceDelegate.garbageCollector;return new KA(i,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?nn.withCacheSize(this.cacheSizeBytes):nn.DEFAULT;return new l0(i=>Ec.ei(i,t),this.serializer)}}class _f{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>zy(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=sk.bind(null,this.syncEngine),await MC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new FC}()}createDatastore(e){const t=Kc(e.databaseInfo.databaseId),i=function(l){return new EC(l)}(e.databaseInfo);return function(l,c,d,p){return new SC(l,c,d,p)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,o,l,c,d){return new AC(i,o,l,c,d)}(this.localStore,this.datastore,e.asyncQueue,t=>zy(this.syncEngine,t,0),function(){return My.p()?new My:new _C}())}createSyncEngine(e,t){return function(o,l,c,d,p,y,w){const T=new GC(o,l,c,d,p,y);return w&&(T.$a=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=Se(o);oe("RemoteStore","RemoteStore shutting down."),l.k_.add(5),await vl(l),l.Q_.shutdown(),l.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}_f.provider={build:()=>new _f};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Fr("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Bt.UNAUTHENTICATED,this.clientId=Nv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async c=>{oe("FirestoreClient","Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(i,c=>(oe("FirestoreClient","Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new hs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=np(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function qd(n,e){n.asyncQueue.verifyOperationInProgress(),oe("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await u0(e.localStore,o),i=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Hy(n,e){n.asyncQueue.verifyOperationInProgress();const t=await hk(n);oe("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>Uy(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>Uy(e.remoteStore,o)),n._onlineComponents=e}async function hk(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){oe("FirestoreClient","Using user provided OfflineComponentProvider");try{await qd(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===J.FAILED_PRECONDITION||o.code===J.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;No("Error using user provided cache. Falling back to memory cache: "+t),await qd(n,new Ic)}}else oe("FirestoreClient","Using default OfflineComponentProvider"),await qd(n,new lk(void 0));return n._offlineComponents}async function C0(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(oe("FirestoreClient","Using user provided OnlineComponentProvider"),await Hy(n,n._uninitializedComponentsProvider._online)):(oe("FirestoreClient","Using default OnlineComponentProvider"),await Hy(n,new _f))),n._onlineComponents}function dk(n){return C0(n).then(e=>e.syncEngine)}async function qy(n){const e=await C0(n),t=e.eventManager;return t.onListen=QC.bind(null,e.syncEngine),t.onUnlisten=JC.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=YC.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ZC.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k0(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P0(n,e,t){if(!t)throw new fe(J.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function fk(n,e,t,i){if(e===!0&&i===!0)throw new fe(J.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ky(n){if(!ge.isDocumentKey(n))throw new fe(J.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Gy(n){if(ge.isDocumentKey(n))throw new fe(J.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function sp(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Te()}function Ao(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new fe(J.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=sp(n);throw new fe(J.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new fe(J.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new fe(J.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=k0((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new fe(J.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new fe(J.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new fe(J.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Yc{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qy({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new fe(J.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new fe(J.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qy(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new T1;switch(i.type){case"firstParty":return new A1(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new fe(J.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=Wy.get(t);i&&(oe("ComponentProvider","Removing Datastore"),Wy.delete(t),i.terminate())}(this),Promise.resolve()}}function pk(n,e,t,i={}){var o;const l=(n=Ao(n,Yc))._getSettings(),c=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==c&&No("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},l),{host:c,ssl:!1})),i.mockUserToken){let d,p;if(typeof i.mockUserToken=="string")d=i.mockUserToken,p=Bt.MOCK_USER;else{d=q_(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const y=i.mockUserToken.sub||i.mockUserToken.user_id;if(!y)throw new fe(J.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Bt(y)}n._authCredentials=new I1(new Pv(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Xc(this.firestore,e,this._query)}}class An{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ii(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new An(this.firestore,e,this._key)}}class Ii extends Xc{constructor(e,t,i){super(e,t,zf(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new An(this.firestore,null,new ge(e))}withConverter(e){return new Ii(this.firestore,e,this._path)}}function mk(n,e,...t){if(n=ht(n),P0("collection","path",e),n instanceof Yc){const i=Ye.fromString(e,...t);return Gy(i),new Ii(n,null,i)}{if(!(n instanceof An||n instanceof Ii))throw new fe(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ye.fromString(e,...t));return Gy(i),new Ii(n.firestore,null,i)}}function N0(n,e,...t){if(n=ht(n),arguments.length===1&&(e=Nv.newId()),P0("doc","path",e),n instanceof Yc){const i=Ye.fromString(e,...t);return Ky(i),new An(n,null,new ge(i))}{if(!(n instanceof An||n instanceof Ii))throw new fe(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ye.fromString(e,...t));return Ky(i),new An(n.firestore,n instanceof Ii?n.converter:null,new ge(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new h0(this,"async_queue_retry"),this.fu=()=>{const i=Hd();i&&oe("AsyncQueue","Visibility state changed to "+i.visibilityState),this.r_.Jo()},this.gu=e;const t=Hd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=Hd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new hs;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!jo(e))throw e;oe("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(i=>{this.Au=i,this.Ru=!1;const o=function(c){let d=c.message||"";return c.stack&&(d=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),d}(i);throw Fr("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.Ru=!1,i))));return this.gu=t,t}enqueueAfterDelay(e,t,i){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=tp.createAndSchedule(this,e,t,i,l=>this.Su(l));return this.du.push(o),o}pu(){this.Au&&Te()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}function Xy(n){return function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1}(n,["next","error","complete"])}class cl extends Yc{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new Yy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Yy(e),this._firestoreClient=void 0,await e}}}function gk(n,e){const t=typeof n=="object"?n:bc(),i=typeof n=="string"?n:"(default)",o=Ni(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=z_("firestore");l&&pk(o,...l)}return o}function D0(n){if(n._terminated)throw new fe(J.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||yk(n),n._firestoreClient}function yk(n){var e,t,i;const o=n._freezeSettings(),l=function(d,p,y,w){return new j1(d,p,y,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,k0(w.experimentalLongPollingOptions),w.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new ck(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vo(xt.fromBase64String(e))}catch(t){throw new fe(J.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Vo(xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new fe(J.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new fe(J.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new fe(J.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return De(this._lat,e._lat)||De(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k=/^__.*__$/;class vk{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Ss(e,this.data,this.fieldMask,t,this.fieldTransforms):new yl(e,this.data,t,this.fieldTransforms)}}function O0(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te()}}class up{constructor(e,t,i,o,l,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Fu(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new up(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Lu(e),o}Bu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Sc(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(O0(this.Mu)&&_k.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class wk{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Kc(e)}$u(e,t,i,o=!1){return new up({Mu:e,methodName:t,Ku:i,path:Dt.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ek(n){const e=n._freezeSettings(),t=Kc(n._databaseId);return new wk(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Tk(n,e,t,i,o,l={}){const c=n.$u(l.merge||l.mergeFields?2:0,e,t,o);M0("Data must be an object, but it was:",c,i);const d=b0(i,c);let p,y;if(l.merge)p=new Hn(c.fieldMask),y=c.fieldTransforms;else if(l.mergeFields){const w=[];for(const T of l.mergeFields){const S=Ik(e,T,t);if(!c.contains(S))throw new fe(J.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);Rk(w,S)||w.push(S)}p=new Hn(w),y=c.fieldTransforms.filter(T=>p.covers(T.field))}else p=null,y=c.fieldTransforms;return new vk(new Rn(d),p,y)}function L0(n,e){if(V0(n=ht(n)))return M0("Unsupported field value:",e,n),b0(n,e);if(n instanceof x0)return function(i,o){if(!O0(o.Mu))throw o.qu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(i,o){const l=[];let c=0;for(const d of i){let p=L0(d,o.ku(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}}(n,e)}return function(i,o){if((i=ht(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return cA(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=_t.fromDate(i);return{timestampValue:wc(o.serializer,l)}}if(i instanceof _t){const l=new _t(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:wc(o.serializer,l)}}if(i instanceof ap)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Vo)return{bytesValue:t0(o.serializer,i._byteString)};if(i instanceof An){const l=o.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw o.qu(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Kf(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof lp)return function(c,d){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:c.toArray().map(p=>{if(typeof p!="number")throw d.qu("VectorValues must only contain numeric values.");return $f(d.serializer,p)})}}}}}}(i,o);throw o.qu(`Unsupported field value: ${sp(i)}`)}(n,e)}function b0(n,e){const t={};return Dv(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ts(n,(i,o)=>{const l=L0(o,e.Ou(i));l!=null&&(t[i]=l)}),{mapValue:{fields:t}}}function V0(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof _t||n instanceof ap||n instanceof Vo||n instanceof An||n instanceof x0||n instanceof lp)}function M0(n,e,t){if(!V0(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const i=sp(t);throw i==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+i)}}function Ik(n,e,t){if((e=ht(e))instanceof op)return e._internalPath;if(typeof e=="string")return U0(n,e);throw Sc("Field path arguments must be of type string or ",n,!1,void 0,t)}const Sk=new RegExp("[~\\*/\\[\\]]");function U0(n,e,t){if(e.search(Sk)>=0)throw Sc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new op(...e.split("."))._internalPath}catch{throw Sc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Sc(n,e,t,i,o){const l=i&&!i.isEmpty(),c=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${i}`),c&&(p+=` in document ${o}`),p+=")"),new fe(J.INVALID_ARGUMENT,d+n+p)}function Rk(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new An(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ak(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(B0("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Ak extends F0{data(){return super.data()}}function B0(n,e){return typeof e=="string"?U0(n,e):e instanceof op?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ck(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new fe(J.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kk{convertValue(e,t="none"){switch(ki(e)){case 0:return null;case 1:return e.booleanValue;case 2:return at(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ci(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Te()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Ts(e,(o,l)=>{i[o]=this.convertValue(l,t)}),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(c=>at(c.doubleValue));return new lp(l)}convertGeoPoint(e){return new ap(at(e.latitude),at(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Bc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(sl(e));default:return null}}convertTimestamp(e){const t=Ai(e);return new _t(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Ye.fromString(e);Fe(a0(i));const o=new ol(i.get(1),i.get(3)),l=new ge(i.popFirst(5));return o.isEqual(t)||Fr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pk(n,e,t){let i;return i=n?n.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class j0 extends F0{constructor(e,t,i,o,l,c){super(e,t,i,o,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new sc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(B0("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class sc extends j0{data(e={}){return super.data(e)}}class Nk{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Ka(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new sc(this._firestore,this._userDataWriter,i.key,i,new Ka(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new fe(J.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,l){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map(d=>{const p=new sc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new Ka(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}})}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const p=new sc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new Ka(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,w=-1;return d.type!==0&&(y=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),w=c.indexOf(d.doc.key)),{type:Dk(d.type),doc:p,oldIndex:y,newIndex:w}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Dk(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te()}}class z0 extends kk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new An(this.firestore,null,t)}}function xk(n){return $0(Ao(n.firestore,cl),[new Hf(n._key,ar.none())])}function Ok(n,e){const t=Ao(n.firestore,cl),i=N0(n),o=Pk(n.converter,e);return $0(t,[Tk(Ek(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,ar.exists(!1))]).then(()=>i)}function Lk(n,...e){var t,i,o;n=ht(n);let l={includeMetadataChanges:!1,source:"default"},c=0;typeof e[c]!="object"||Xy(e[c])||(l=e[c],c++);const d={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(Xy(e[c])){const T=e[c];e[c]=(t=T.next)===null||t===void 0?void 0:t.bind(T),e[c+1]=(i=T.error)===null||i===void 0?void 0:i.bind(T),e[c+2]=(o=T.complete)===null||o===void 0?void 0:o.bind(T)}let p,y,w;if(n instanceof An)y=Ao(n.firestore,cl),w=zf(n._key.path),p={next:T=>{e[c]&&e[c](bk(y,n,T))},error:e[c+1],complete:e[c+2]};else{const T=Ao(n,Xc);y=Ao(T.firestore,cl),w=T._query;const S=new z0(y);p={next:D=>{e[c]&&e[c](new Nk(y,S,T,D))},error:e[c+1],complete:e[c+2]},Ck(n._query)}return function(S,D,b,z){const L=new uk(z),q=new HC(D,L,b);return S.asyncQueue.enqueueAndForget(async()=>BC(await qy(S),q)),()=>{L.eu(),S.asyncQueue.enqueueAndForget(async()=>jC(await qy(S),q))}}(D0(y),w,d,p)}function $0(n,e){return function(i,o){const l=new hs;return i.asyncQueue.enqueueAndForget(async()=>ek(await dk(i),o,l)),l.promise}(D0(n),e)}function bk(n,e,t){const i=t.docs.get(e._key),o=new z0(n);return new j0(n,o,e._key,i,new Ka(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){Fo=o})(Es),qn(new Cn("firestore",(i,{instanceIdentifier:o,options:l})=>{const c=i.getProvider("app").getImmediate(),d=new cl(new S1(i.getProvider("auth-internal")),new k1(i.getProvider("app-check-internal")),function(y,w){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new fe(J.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ol(y.options.projectId,w)}(c,o),c);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),rn(dy,"4.7.5",e),rn(dy,"4.7.5","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0="firebasestorage.googleapis.com",q0="storageBucket",Vk=2*60*1e3,Mk=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends kn{constructor(e,t,i=0){super(Wd(e),`Firebase Storage: ${t} (${Wd(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,rt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Wd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var nt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(nt||(nt={}));function Wd(n){return"storage/"+n}function cp(){const n="An unknown error occurred, please check the error payload for server response.";return new rt(nt.UNKNOWN,n)}function Uk(n){return new rt(nt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Fk(n){return new rt(nt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Bk(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new rt(nt.UNAUTHENTICATED,n)}function jk(){return new rt(nt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function zk(n){return new rt(nt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function $k(){return new rt(nt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Hk(){return new rt(nt.CANCELED,"User canceled the upload/download.")}function qk(n){return new rt(nt.INVALID_URL,"Invalid URL '"+n+"'.")}function Wk(n){return new rt(nt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Kk(){return new rt(nt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+q0+"' property when initializing the app?")}function Gk(){return new rt(nt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Qk(){return new rt(nt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Yk(n){return new rt(nt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function vf(n){return new rt(nt.INVALID_ARGUMENT,n)}function W0(){return new rt(nt.APP_DELETED,"The Firebase app was deleted.")}function Xk(n){return new rt(nt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Za(n,e){return new rt(nt.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function ja(n){throw new rt(nt.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=fn.makeFromUrl(e,t)}catch{return new fn(e,"")}if(i.path==="")return i;throw Wk(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function l(re){re.path.charAt(re.path.length-1)==="/"&&(re.path_=re.path_.slice(0,-1))}const c="(/(.*))?$",d=new RegExp("^gs://"+o+c,"i"),p={bucket:1,path:3};function y(re){re.path_=decodeURIComponent(re.path)}const w="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),S="(/([^?#]*).*)?$",D=new RegExp(`^https?://${T}/${w}/b/${o}/o${S}`,"i"),b={bucket:1,path:3},z=t===H0?"(?:storage.googleapis.com|storage.cloud.google.com)":t,L="([^?#]*)",q=new RegExp(`^https?://${z}/${o}/${L}`,"i"),Z=[{regex:d,indices:p,postModify:l},{regex:D,indices:b,postModify:y},{regex:q,indices:{bucket:1,path:2},postModify:y}];for(let re=0;re<Z.length;re++){const we=Z[re],_e=we.regex.exec(e);if(_e){const N=_e[we.indices.bucket];let I=_e[we.indices.path];I||(I=""),i=new fn(N,I),we.postModify(i);break}}if(i==null)throw qk(e);return i}}class Jk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zk(n,e,t){let i=1,o=null,l=null,c=!1,d=0;function p(){return d===2}let y=!1;function w(...L){y||(y=!0,e.apply(null,L))}function T(L){o=setTimeout(()=>{o=null,n(D,p())},L)}function S(){l&&clearTimeout(l)}function D(L,...q){if(y){S();return}if(L){S(),w.call(null,L,...q);return}if(p()||c){S(),w.call(null,L,...q);return}i<64&&(i*=2);let Z;d===1?(d=2,Z=0):Z=(i+Math.random())*1e3,T(Z)}let b=!1;function z(L){b||(b=!0,S(),!y&&(o!==null?(L||(d=2),clearTimeout(o),T(0)):L||(d=1)))}return T(0),l=setTimeout(()=>{c=!0,z(!0)},t),z}function eP(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tP(n){return n!==void 0}function nP(n){return typeof n=="object"&&!Array.isArray(n)}function hp(n){return typeof n=="string"||n instanceof String}function Jy(n){return dp()&&n instanceof Blob}function dp(){return typeof Blob<"u"}function Zy(n,e,t,i){if(i<e)throw vf(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw vf(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function K0(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const o=e(i)+"="+e(n[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var ds;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(ds||(ds={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rP(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||o||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e,t,i,o,l,c,d,p,y,w,T,S=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=c,this.callback_=d,this.errorCallback_=p,this.timeout_=y,this.progressCallback_=w,this.connectionFactory_=T,this.retry=S,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((D,b)=>{this.resolve_=D,this.reject_=b,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new Gu(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const c=d=>{const p=d.loaded,y=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,y)};this.progressCallback_!==null&&l.addUploadProgressListener(c),l.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(c),this.pendingConnection_=null;const d=l.getErrorCode()===ds.NO_ERROR,p=l.getStatus();if(!d||rP(p,this.additionalRetryCodes_)&&this.retry){const w=l.getErrorCode()===ds.ABORT;i(!1,new Gu(!1,null,w));return}const y=this.successCodes_.indexOf(p)!==-1;i(!0,new Gu(y,l))})},t=(i,o)=>{const l=this.resolve_,c=this.reject_,d=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(d,d.getResponse());tP(p)?l(p):l()}catch(p){c(p)}else if(d!==null){const p=cp();p.serverResponse=d.getErrorText(),this.errorCallback_?c(this.errorCallback_(d,p)):c(p)}else if(o.canceled){const p=this.appDelete_?W0():Hk();c(p)}else{const p=$k();c(p)}};this.canceled_?t(!1,new Gu(!1,null,!0)):this.backoffId_=Zk(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&eP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Gu{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function sP(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function oP(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function aP(n,e){e&&(n["X-Firebase-GMPID"]=e)}function lP(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function uP(n,e,t,i,o,l,c=!0){const d=K0(n.urlParams),p=n.url+d,y=Object.assign({},n.headers);return aP(y,e),sP(y,t),oP(y,l),lP(y,i),new iP(p,n.method,y,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function hP(...n){const e=cP();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(dp())return new Blob(n);throw new rt(nt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function dP(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fP(n){if(typeof atob>"u")throw Yk("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Kd{constructor(e,t){this.data=e,this.contentType=t||null}}function pP(n,e){switch(n){case sr.RAW:return new Kd(G0(e));case sr.BASE64:case sr.BASE64URL:return new Kd(Q0(n,e));case sr.DATA_URL:return new Kd(gP(e),yP(e))}throw cp()}function G0(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const l=i,c=n.charCodeAt(++t);i=65536|(l&1023)<<10|c&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function mP(n){let e;try{e=decodeURIComponent(n)}catch{throw Za(sr.DATA_URL,"Malformed data URL.")}return G0(e)}function Q0(n,e){switch(n){case sr.BASE64:{const o=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(o||l)throw Za(n,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case sr.BASE64URL:{const o=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(o||l)throw Za(n,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=fP(e)}catch(o){throw o.message.includes("polyfill")?o:Za(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}class Y0{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Za(sr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=_P(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function gP(n){const e=new Y0(n);return e.base64?Q0(sr.BASE64,e.rest):mP(e.rest)}function yP(n){return new Y0(n).contentType}function _P(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,t){let i=0,o="";Jy(e)?(this.data_=e,i=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(Jy(this.data_)){const i=this.data_,o=dP(i,e,t);return o===null?null:new mi(o)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new mi(i,!0)}}static getBlob(...e){if(dp()){const t=e.map(i=>i instanceof mi?i.data_:i);return new mi(hP.apply(null,t))}else{const t=e.map(c=>hp(c)?pP(sr.RAW,c).data:c.data_);let i=0;t.forEach(c=>{i+=c.byteLength});const o=new Uint8Array(i);let l=0;return t.forEach(c=>{for(let d=0;d<c.length;d++)o[l++]=c[d]}),new mi(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X0(n){let e;try{e=JSON.parse(n)}catch{return null}return nP(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vP(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function wP(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function J0(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EP(n,e){return e}class Kt{constructor(e,t,i,o){this.server=e,this.local=t||e,this.writable=!!i,this.xform=o||EP}}let Qu=null;function TP(n){return!hp(n)||n.length<2?n:J0(n)}function Z0(){if(Qu)return Qu;const n=[];n.push(new Kt("bucket")),n.push(new Kt("generation")),n.push(new Kt("metageneration")),n.push(new Kt("name","fullPath",!0));function e(l,c){return TP(c)}const t=new Kt("name");t.xform=e,n.push(t);function i(l,c){return c!==void 0?Number(c):c}const o=new Kt("size");return o.xform=i,n.push(o),n.push(new Kt("timeCreated")),n.push(new Kt("updated")),n.push(new Kt("md5Hash",null,!0)),n.push(new Kt("cacheControl",null,!0)),n.push(new Kt("contentDisposition",null,!0)),n.push(new Kt("contentEncoding",null,!0)),n.push(new Kt("contentLanguage",null,!0)),n.push(new Kt("contentType",null,!0)),n.push(new Kt("metadata","customMetadata",!0)),Qu=n,Qu}function IP(n,e){function t(){const i=n.bucket,o=n.fullPath,l=new fn(i,o);return e._makeStorageReference(l)}Object.defineProperty(n,"ref",{get:t})}function SP(n,e,t){const i={};i.type="file";const o=t.length;for(let l=0;l<o;l++){const c=t[l];i[c.local]=c.xform(i,e[c.server])}return IP(i,n),i}function ew(n,e,t){const i=X0(e);return i===null?null:SP(n,i,t)}function RP(n,e,t,i){const o=X0(e);if(o===null||!hp(o.downloadTokens))return null;const l=o.downloadTokens;if(l.length===0)return null;const c=encodeURIComponent;return l.split(",").map(y=>{const w=n.bucket,T=n.fullPath,S="/b/"+c(w)+"/o/"+c(T),D=fp(S,t,i),b=K0({alt:"media",token:y});return D+b})[0]}function AP(n,e){const t={},i=e.length;for(let o=0;o<i;o++){const l=e[o];l.writable&&(t[l.server]=n[l.local])}return JSON.stringify(t)}class tw{constructor(e,t,i,o){this.url=e,this.method=t,this.handler=i,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(n){if(!n)throw cp()}function CP(n,e){function t(i,o){const l=ew(n,o,e);return nw(l!==null),l}return t}function kP(n,e){function t(i,o){const l=ew(n,o,e);return nw(l!==null),RP(l,o,n.host,n._protocol)}return t}function rw(n){function e(t,i){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=jk():o=Bk():t.getStatus()===402?o=Fk(n.bucket):t.getStatus()===403?o=zk(n.path):o=i,o.status=t.getStatus(),o.serverResponse=i.serverResponse,o}return e}function PP(n){const e=rw(n);function t(i,o){let l=e(i,o);return i.getStatus()===404&&(l=Uk(n.path)),l.serverResponse=o.serverResponse,l}return t}function NP(n,e,t){const i=e.fullServerUrl(),o=fp(i,n.host,n._protocol),l="GET",c=n.maxOperationRetryTime,d=new tw(o,l,kP(n,t),c);return d.errorHandler=PP(e),d}function DP(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function xP(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=DP(null,e)),i}function OP(n,e,t,i,o){const l=e.bucketOnlyServerUrl(),c={"X-Goog-Upload-Protocol":"multipart"};function d(){let Z="";for(let re=0;re<2;re++)Z=Z+Math.random().toString().slice(2);return Z}const p=d();c["Content-Type"]="multipart/related; boundary="+p;const y=xP(e,i,o),w=AP(y,t),T="--"+p+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+w+`\r
--`+p+`\r
Content-Type: `+y.contentType+`\r
\r
`,S=`\r
--`+p+"--",D=mi.getBlob(T,i,S);if(D===null)throw Gk();const b={name:y.fullPath},z=fp(l,n.host,n._protocol),L="POST",q=n.maxUploadRetryTime,$=new tw(z,L,CP(n,t),q);return $.urlParams=b,$.headers=c,$.body=D.uploadData(),$.errorHandler=rw(e),$}class LP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ds.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ds.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ds.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,o){if(this.sent_)throw ja("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),o!==void 0)for(const l in o)o.hasOwnProperty(l)&&this.xhr_.setRequestHeader(l,o[l].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ja("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ja("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ja("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ja("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class bP extends LP{initXhr(){this.xhr_.responseType="text"}}function iw(){return new bP}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,t){this._service=e,t instanceof fn?this._location=t:this._location=fn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new gs(e,t)}get root(){const e=new fn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return J0(this._location.path)}get storage(){return this._service}get parent(){const e=vP(this._location.path);if(e===null)return null;const t=new fn(this._location.bucket,e);return new gs(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Xk(e)}}function VP(n,e,t){n._throwIfRoot("uploadBytes");const i=OP(n.storage,n._location,Z0(),new mi(e,!0),t);return n.storage.makeRequestWithTokens(i,iw).then(o=>({metadata:o,ref:n}))}function MP(n){n._throwIfRoot("getDownloadURL");const e=NP(n.storage,n._location,Z0());return n.storage.makeRequestWithTokens(e,iw).then(t=>{if(t===null)throw Qk();return t})}function UP(n,e){const t=wP(n._location.path,e),i=new fn(n._location.bucket,t);return new gs(n.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FP(n){return/^[A-Za-z]+:\/\//.test(n)}function BP(n,e){return new gs(n,e)}function sw(n,e){if(n instanceof pp){const t=n;if(t._bucket==null)throw Kk();const i=new gs(t,t._bucket);return e!=null?sw(i,e):i}else return e!==void 0?UP(n,e):n}function jP(n,e){if(e&&FP(e)){if(n instanceof pp)return BP(n,e);throw vf("To use ref(service, url), the first argument must be a Storage instance.")}else return sw(n,e)}function e_(n,e){const t=e==null?void 0:e[q0];return t==null?null:fn.makeFromBucketSpec(t,n)}function zP(n,e,t,i={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:o}=i;o&&(n._overrideAuthToken=typeof o=="string"?o:q_(o,n.app.options.projectId))}class pp{constructor(e,t,i,o,l){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=l,this._bucket=null,this._host=H0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Vk,this._maxUploadRetryTime=Mk,this._requests=new Set,o!=null?this._bucket=fn.makeFromBucketSpec(o,this._host):this._bucket=e_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=fn.makeFromBucketSpec(this._url,e):this._bucket=e_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Zy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Zy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new gs(this,e)}_makeRequest(e,t,i,o,l=!0){if(this._deleted)return new Jk(W0());{const c=uP(e,this._appId,i,o,t,this._firebaseVersion,l);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const t_="@firebase/storage",n_="0.13.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow="storage";function $P(n,e,t){return n=ht(n),VP(n,e,t)}function HP(n){return n=ht(n),MP(n)}function qP(n,e){return n=ht(n),jP(n,e)}function WP(n=bc(),e){n=ht(n);const i=Ni(n,ow).getImmediate({identifier:e}),o=z_("storage");return o&&KP(i,...o),i}function KP(n,e,t,i={}){zP(n,e,t,i)}function GP(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new pp(t,i,o,e,Es)}function QP(){qn(new Cn(ow,GP,"PUBLIC").setMultipleInstances(!0)),rn(t_,n_,""),rn(t_,n_,"esm2017")}QP();const YP={apiKey:"",authDomain:"learn-c3f66.firebaseapp.com",projectId:"learn-c3f66",storageBucket:"learn-c3f66.firebasestorage.app",messagingSenderId:"263224513453",appId:"1:263224513453:web:b23caa3249ddc95a4b0724",measurementId:"G-03RKGJYEXT"},El=J_(YP);_1(El);const r_=gk(El),XP=WP(El);function mp(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function aw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JP=aw,lw=new ws("auth","Firebase",aw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc=new Lc("@firebase/auth");function ZP(n,...e){Rc.logLevel<=ke.WARN&&Rc.warn(`Auth (${Es}): ${n}`,...e)}function oc(n,...e){Rc.logLevel<=ke.ERROR&&Rc.error(`Auth (${Es}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(n,...e){throw gp(n,...e)}function ur(n,...e){return gp(n,...e)}function uw(n,e,t){const i=Object.assign(Object.assign({},JP()),{[e]:t});return new ws("auth","Firebase",i).create(e,{appName:n.name})}function Mr(n){return uw(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function gp(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return lw.create(n,...e)}function ve(n,e,...t){if(!n)throw gp(e,...t)}function Or(n){const e="INTERNAL ASSERTION FAILED: "+n;throw oc(e),new Error(e)}function jr(n,e){n||Or(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function eN(){return i_()==="http:"||i_()==="https:"}function i_(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eN()||W_()||"connection"in navigator)?navigator.onLine:!0}function nN(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,t){this.shortDelay=e,this.longDelay=t,jr(t>e,"Short delay should be less than long delay!"),this.isMobile=DI()||LI()}get(){return tN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(n,e){jr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Or("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Or("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Or("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iN=new Tl(3e4,6e4);function Di(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function xi(n,e,t,i,o={}){return hw(n,o,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const d=gl(Object.assign({key:n.config.apiKey},c)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:p},l);return OI()||(y.referrerPolicy="no-referrer"),cw.fetch()(dw(n,n.config.apiHost,t,d),y)})}async function hw(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},rN),e);try{const o=new oN(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Yu(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,y]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yu(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw Yu(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw Yu(n,"user-disabled",c);const w=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw uw(n,w,y);Wn(n,w)}}catch(o){if(o instanceof kn)throw o;Wn(n,"network-request-failed",{message:String(o)})}}async function Il(n,e,t,i,o={}){const l=await xi(n,e,t,i,o);return"mfaPendingCredential"in l&&Wn(n,"multi-factor-auth-required",{_serverResponse:l}),l}function dw(n,e,t,i){const o=`${e}${t}?${i}`;return n.config.emulator?yp(n.config,o):`${n.config.apiScheme}://${o}`}function sN(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class oN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(ur(this.auth,"network-request-failed")),iN.get())})}}function Yu(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=ur(n,e,i);return o.customData._tokenResponse=t,o}function s_(n){return n!==void 0&&n.enterprise!==void 0}class aN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return sN(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function lN(n,e){return xi(n,"GET","/v2/recaptchaConfig",Di(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uN(n,e){return xi(n,"POST","/v1/accounts:delete",e)}async function fw(n,e){return xi(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cN(n,e=!1){const t=ht(n),i=await t.getIdToken(e),o=_p(i);ve(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:el(Gd(o.auth_time)),issuedAtTime:el(Gd(o.iat)),expirationTime:el(Gd(o.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Gd(n){return Number(n)*1e3}function _p(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return oc("JWT malformed, contained fewer than 3 sections"),null;try{const o=B_(t);return o?JSON.parse(o):(oc("Failed to decode base64 JWT payload"),null)}catch(o){return oc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function o_(n){const e=_p(n);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hl(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof kn&&hN(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function hN({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=el(this.lastLoginAt),this.creationTime=el(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ac(n){var e;const t=n.auth,i=await n.getIdToken(),o=await hl(n,fw(t,{idToken:i}));ve(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?pw(l.providerUserInfo):[],d=pN(n.providerData,c),p=n.isAnonymous,y=!(n.email&&l.passwordHash)&&!(d!=null&&d.length),w=p?y:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new Ef(l.createdAt,l.lastLoginAt),isAnonymous:w};Object.assign(n,T)}async function fN(n){const e=ht(n);await Ac(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pN(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function pw(n){return n.map(e=>{var{providerId:t}=e,i=mp(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mN(n,e){const t=await hw(n,{},async()=>{const i=gl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,c=dw(n,o,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",cw.fetch()(c,{method:"POST",headers:d,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function gN(n,e){return xi(n,"POST","/v2/accounts:revokeToken",Di(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):o_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const t=o_(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await mN(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,c=new Co;return i&&(ve(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),o&&(ve(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),l&&(ve(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Co,this.toJSON())}_performRefresh(){return Or("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(n,e){ve(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Lr{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=mp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Ef(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await hl(this,this.stsTokenManager.getToken(this.auth,e));return ve(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return cN(this,e)}reload(){return fN(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Lr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Ac(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ir(this.auth.app))return Promise.reject(Mr(this.auth));const e=await this.getIdToken();return await hl(this,uN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,c,d,p,y,w;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,S=(o=t.email)!==null&&o!==void 0?o:void 0,D=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,b=(c=t.photoURL)!==null&&c!==void 0?c:void 0,z=(d=t.tenantId)!==null&&d!==void 0?d:void 0,L=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,q=(y=t.createdAt)!==null&&y!==void 0?y:void 0,$=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:Z,emailVerified:re,isAnonymous:we,providerData:_e,stsTokenManager:N}=t;ve(Z&&N,e,"internal-error");const I=Co.fromJSON(this.name,N);ve(typeof Z=="string",e,"internal-error"),pi(T,e.name),pi(S,e.name),ve(typeof re=="boolean",e,"internal-error"),ve(typeof we=="boolean",e,"internal-error"),pi(D,e.name),pi(b,e.name),pi(z,e.name),pi(L,e.name),pi(q,e.name),pi($,e.name);const A=new Lr({uid:Z,auth:e,email:S,emailVerified:re,displayName:T,isAnonymous:we,photoURL:b,phoneNumber:D,tenantId:z,stsTokenManager:I,createdAt:q,lastLoginAt:$});return _e&&Array.isArray(_e)&&(A.providerData=_e.map(P=>Object.assign({},P))),L&&(A._redirectEventId=L),A}static async _fromIdTokenResponse(e,t,i=!1){const o=new Co;o.updateFromServerResponse(t);const l=new Lr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await Ac(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];ve(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?pw(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),d=new Co;d.updateFromIdToken(i);const p=new Lr({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:c}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Ef(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_=new Map;function br(n){jr(n instanceof Function,"Expected a class definition");let e=a_.get(n);return e?(jr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,a_.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}mw.type="NONE";const l_=mw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(n,e,t){return`firebase:${n}:${e}:${t}`}class ko{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=ac(this.userKey,o.apiKey,l),this.fullPersistenceKey=ac("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Lr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new ko(br(l_),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||br(l_);const c=ac(i,e.config.apiKey,e.name);let d=null;for(const y of t)try{const w=await y._get(c);if(w){const T=Lr._fromJSON(e,w);y!==l&&(d=T),l=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new ko(l,e,i):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(c)}catch{}})),new ko(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ew(e))return"Blackberry";if(Tw(e))return"Webos";if(yw(e))return"Safari";if((e.includes("chrome/")||_w(e))&&!e.includes("edge/"))return"Chrome";if(ww(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function gw(n=zt()){return/firefox\//i.test(n)}function yw(n=zt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _w(n=zt()){return/crios\//i.test(n)}function vw(n=zt()){return/iemobile/i.test(n)}function ww(n=zt()){return/android/i.test(n)}function Ew(n=zt()){return/blackberry/i.test(n)}function Tw(n=zt()){return/webos/i.test(n)}function vp(n=zt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function yN(n=zt()){var e;return vp(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _N(){return bI()&&document.documentMode===10}function Iw(n=zt()){return vp(n)||ww(n)||Tw(n)||Ew(n)||/windows phone/i.test(n)||vw(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(n,e=[]){let t;switch(n){case"Browser":t=u_(zt());break;case"Worker":t=`${u_(zt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Es}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wN(n,e={}){return xi(n,"GET","/v2/passwordPolicy",Di(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EN=6;class TN{constructor(e){var t,i,o,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:EN,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,c,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new c_(this),this.idTokenSubscription=new c_(this),this.beforeStateQueue=new vN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=br(t)),this._initializationPromise=this.queue(async()=>{var i,o;if(!this._deleted&&(this.persistenceManager=await ko.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await fw(this,{idToken:e}),i=await Lr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ir(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===d)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ac(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ir(this.app))return Promise.reject(Mr(this));const t=e?ht(e):null;return t&&ve(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ir(this.app)?Promise.reject(Mr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ir(this.app)?Promise.reject(Mr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(br(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wN(this),t=new TN(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ws("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await gN(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&br(e)||this._popupRedirectResolver;ve(t,this,"argument-error"),this.redirectPersistenceManager=await ko.create(this,[br(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&ZP(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function As(n){return ht(n)}class c_{constructor(e){this.auth=e,this.observer=null,this.addObserver=zI(t=>this.observer=t)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function SN(n){Jc=n}function Rw(n){return Jc.loadJS(n)}function RN(){return Jc.recaptchaEnterpriseScript}function AN(){return Jc.gapiScript}function CN(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class kN{constructor(){this.enterprise=new PN}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class PN{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const NN="recaptcha-enterprise",Aw="NO_RECAPTCHA";class DN{constructor(e){this.type=NN,this.auth=As(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{lN(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const y=new aN(p);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,c(y.siteKey)}}).catch(p=>{d(p)})})}function o(l,c,d){const p=window.grecaptcha;s_(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(y=>{c(y)}).catch(()=>{c(Aw)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new kN().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{i(this.auth).then(d=>{if(!t&&s_(window.grecaptcha))o(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=RN();p.length!==0&&(p+=d),Rw(p).then(()=>{o(d,l,c)}).catch(y=>{c(y)})}}).catch(d=>{c(d)})})}}async function h_(n,e,t,i=!1,o=!1){const l=new DN(n);let c;if(o)c=Aw;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,y=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return i?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Tf(n,e,t,i,o){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await h_(n,e,t,t==="getOobCode");return i(n,c)}else return i(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await h_(n,e,t,t==="getOobCode");return i(n,d)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xN(n,e){const t=Ni(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(nl(l,e??{}))return o;Wn(o,"already-initialized")}return t.initialize({options:e})}function ON(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(br);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function LN(n,e,t){const i=As(n);ve(i._canInitEmulator,i,"emulator-config-failed"),ve(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=Cw(e),{host:c,port:d}=bN(e),p=d===null?"":`:${d}`;i.config.emulator={url:`${l}//${c}${p}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),VN()}function Cw(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function bN(n){const e=Cw(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:d_(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:d_(c)}}}function d_(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function VN(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Or("not implemented")}_getIdTokenResponse(e){return Or("not implemented")}_linkToIdToken(e,t){return Or("not implemented")}_getReauthenticationResolver(e){return Or("not implemented")}}async function MN(n,e){return xi(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UN(n,e){return Il(n,"POST","/v1/accounts:signInWithPassword",Di(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FN(n,e){return Il(n,"POST","/v1/accounts:signInWithEmailLink",Di(n,e))}async function BN(n,e){return Il(n,"POST","/v1/accounts:signInWithEmailLink",Di(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl extends wp{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new dl(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new dl(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tf(e,t,"signInWithPassword",UN);case"emailLink":return FN(e,{email:this._email,oobCode:this._password});default:Wn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tf(e,i,"signUpPassword",MN);case"emailLink":return BN(e,{idToken:t,email:this._email,oobCode:this._password});default:Wn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Po(n,e){return Il(n,"POST","/v1/accounts:signInWithIdp",Di(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jN="http://localhost";class ys extends wp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ys(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Wn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=mp(t,["providerId","signInMethod"]);if(!i||!o)return null;const c=new ys(i,o);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Po(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Po(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Po(e,t)}buildRequest(){const e={requestUri:jN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=gl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zN(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $N(n){const e=za($a(n)).link,t=e?za($a(e)).deep_link_id:null,i=za($a(n)).deep_link_id;return(i?za($a(i)).link:null)||i||t||e||n}class Ep{constructor(e){var t,i,o,l,c,d;const p=za($a(e)),y=(t=p.apiKey)!==null&&t!==void 0?t:null,w=(i=p.oobCode)!==null&&i!==void 0?i:null,T=zN((o=p.mode)!==null&&o!==void 0?o:null);ve(y&&w&&T,"argument-error"),this.apiKey=y,this.operation=T,this.code=w,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=p.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=$N(e);try{return new Ep(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(){this.providerId=$o.PROVIDER_ID}static credential(e,t){return dl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Ep.parseLink(t);return ve(i,"argument-error"),dl._fromEmailAndCode(e,i.code,i.tenantId)}}$o.PROVIDER_ID="password";$o.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$o.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl extends kw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends Sl{constructor(){super("facebook.com")}static credential(e){return ys._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gi.credential(e.oauthAccessToken)}catch{return null}}}gi.FACEBOOK_SIGN_IN_METHOD="facebook.com";gi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends Sl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ys._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return yi.credentialFromTaggedObject(e)}static credentialFromError(e){return yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return yi.credential(t,i)}catch{return null}}}yi.GOOGLE_SIGN_IN_METHOD="google.com";yi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends Sl{constructor(){super("github.com")}static credential(e){return ys._fromParams({providerId:_i.PROVIDER_ID,signInMethod:_i.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _i.credentialFromTaggedObject(e)}static credentialFromError(e){return _i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _i.credential(e.oauthAccessToken)}catch{return null}}}_i.GITHUB_SIGN_IN_METHOD="github.com";_i.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends Sl{constructor(){super("twitter.com")}static credential(e,t){return ys._fromParams({providerId:vi.PROVIDER_ID,signInMethod:vi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vi.credentialFromTaggedObject(e)}static credentialFromError(e){return vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return vi.credential(t,i)}catch{return null}}}vi.TWITTER_SIGN_IN_METHOD="twitter.com";vi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HN(n,e){return Il(n,"POST","/v1/accounts:signUp",Di(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Lr._fromIdTokenResponse(e,i,o),c=f_(i);return new _s({user:l,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=f_(i);return new _s({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function f_(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc extends kn{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Cc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new Cc(e,t,i,o)}}function Pw(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Cc._fromErrorAndOperation(n,l,e,i):l})}async function qN(n,e,t=!1){const i=await hl(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return _s._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WN(n,e,t=!1){const{auth:i}=n;if(ir(i.app))return Promise.reject(Mr(i));const o="reauthenticate";try{const l=await hl(n,Pw(i,o,e,n),t);ve(l.idToken,i,"internal-error");const c=_p(l.idToken);ve(c,i,"internal-error");const{sub:d}=c;return ve(n.uid===d,i,"user-mismatch"),_s._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Wn(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nw(n,e,t=!1){if(ir(n.app))return Promise.reject(Mr(n));const i="signIn",o=await Pw(n,i,e),l=await _s._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function KN(n,e){return Nw(As(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dw(n){const e=As(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function GN(n,e,t){if(ir(n.app))return Promise.reject(Mr(n));const i=As(n),c=await Tf(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",HN).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&Dw(n),p}),d=await _s._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(d.user),d}function QN(n,e,t){return ir(n.app)?Promise.reject(Mr(n)):KN(ht(n),$o.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Dw(n),i})}function YN(n,e,t,i){return ht(n).onIdTokenChanged(e,t,i)}function XN(n,e,t){return ht(n).beforeAuthStateChanged(e,t)}function JN(n){return ht(n).signOut()}const kc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(kc,"1"),this.storage.removeItem(kc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZN=1e3,eD=10;class Ow extends xw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Iw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);_N()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,eD):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},ZN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ow.type="LOCAL";const tD=Ow;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw extends xw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Lw.type="SESSION";const bw=Lw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nD(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Zc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const d=Array.from(c).map(async y=>y(t.origin,l)),p=await nD(d);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const y=Tp("",20);o.port1.start();const w=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:o,onMessage(T){const S=T;if(S.data.eventId===y)switch(S.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(S.data.response);break;default:clearTimeout(w),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(){return window}function iD(n){cr().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vw(){return typeof cr().WorkerGlobalScope<"u"&&typeof cr().importScripts=="function"}async function sD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oD(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function aD(){return Vw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw="firebaseLocalStorageDb",lD=1,Pc="firebaseLocalStorage",Uw="fbase_key";class Rl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function eh(n,e){return n.transaction([Pc],e?"readwrite":"readonly").objectStore(Pc)}function uD(){const n=indexedDB.deleteDatabase(Mw);return new Rl(n).toPromise()}function If(){const n=indexedDB.open(Mw,lD);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Pc,{keyPath:Uw})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Pc)?e(i):(i.close(),await uD(),e(await If()))})})}async function p_(n,e,t){const i=eh(n,!0).put({[Uw]:e,value:t});return new Rl(i).toPromise()}async function cD(n,e){const t=eh(n,!1).get(e),i=await new Rl(t).toPromise();return i===void 0?null:i.value}function m_(n,e){const t=eh(n,!0).delete(e);return new Rl(t).toPromise()}const hD=800,dD=3;class Fw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await If(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>dD)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zc._getInstance(aD()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await sD(),!this.activeServiceWorker)return;this.sender=new rD(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await If();return await p_(e,kc,"1"),await m_(e,kc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>p_(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>cD(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>m_(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=eh(o,!1).getAll();return new Rl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fw.type="LOCAL";const fD=Fw;new Tl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pD(n,e){return e?br(e):(ve(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip extends wp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Po(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Po(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Po(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function mD(n){return Nw(n.auth,new Ip(n),n.bypassAuthState)}function gD(n){const{auth:e,user:t}=n;return ve(t,e,"internal-error"),WN(t,new Ip(n),n.bypassAuthState)}async function yD(n){const{auth:e,user:t}=n;return ve(t,e,"internal-error"),qN(t,new Ip(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mD;case"linkViaPopup":case"linkViaRedirect":return yD;case"reauthViaPopup":case"reauthViaRedirect":return gD;default:Wn(this.auth,"internal-error")}}resolve(e){jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _D=new Tl(2e3,1e4);class So extends Bw{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,So.currentPopupAction&&So.currentPopupAction.cancel(),So.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){jr(this.filter.length===1,"Popup operations only handle one event");const e=Tp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ur(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ur(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,So.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ur(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_D.get())};e()}}So.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vD="pendingRedirect",lc=new Map;class wD extends Bw{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=lc.get(this.auth._key());if(!e){try{const i=await ED(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}lc.set(this.auth._key(),e)}return this.bypassAuthState||lc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ED(n,e){const t=SD(e),i=ID(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function TD(n,e){lc.set(n._key(),e)}function ID(n){return br(n._redirectPersistence)}function SD(n){return ac(vD,n.config.apiKey,n.name)}async function RD(n,e,t=!1){if(ir(n.app))return Promise.reject(Mr(n));const i=As(n),o=pD(i,e),c=await new wD(i,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AD=10*60*1e3;class CD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kD(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!jw(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(ur(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=AD&&this.cachedEventUids.clear(),this.cachedEventUids.has(g_(e))}saveEventToCache(e){this.cachedEventUids.add(g_(e)),this.lastProcessedEventTime=Date.now()}}function g_(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function jw({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kD(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jw(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PD(n,e={}){return xi(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ND=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,DD=/^https?/;async function xD(n){if(n.config.emulator)return;const{authorizedDomains:e}=await PD(n);for(const t of e)try{if(OD(t))return}catch{}Wn(n,"unauthorized-domain")}function OD(n){const e=wf(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!DD.test(t))return!1;if(ND.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LD=new Tl(3e4,6e4);function y_(){const n=cr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function bD(n){return new Promise((e,t)=>{var i,o,l;function c(){y_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{y_(),t(ur(n,"network-request-failed"))},timeout:LD.get()})}if(!((o=(i=cr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=cr().gapi)===null||l===void 0)&&l.load)c();else{const d=CN("iframefcb");return cr()[d]=()=>{gapi.load?c():t(ur(n,"network-request-failed"))},Rw(`${AN()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw uc=null,e})}let uc=null;function VD(n){return uc=uc||bD(n),uc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MD=new Tl(5e3,15e3),UD="__/auth/iframe",FD="emulator/auth/iframe",BD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zD(n){const e=n.config;ve(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?yp(e,FD):`https://${n.config.authDomain}/${UD}`,i={apiKey:e.apiKey,appName:n.name,v:Es},o=jD.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${gl(i).slice(1)}`}async function $D(n){const e=await VD(n),t=cr().gapi;return ve(t,n,"internal-error"),e.open({where:document.body,url:zD(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BD,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const c=ur(n,"network-request-failed"),d=cr().setTimeout(()=>{l(c)},MD.get());function p(){cr().clearTimeout(d),o(i)}i.ping(p).then(p,()=>{l(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qD=500,WD=600,KD="_blank",GD="http://localhost";class __{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function QD(n,e,t,i=qD,o=WD){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const p=Object.assign(Object.assign({},HD),{width:i.toString(),height:o.toString(),top:l,left:c}),y=zt().toLowerCase();t&&(d=_w(y)?KD:t),gw(y)&&(e=e||GD,p.scrollbars="yes");const w=Object.entries(p).reduce((S,[D,b])=>`${S}${D}=${b},`,"");if(yN(y)&&d!=="_self")return YD(e||"",d),new __(null);const T=window.open(e||"",d,w);ve(T,n,"popup-blocked");try{T.focus()}catch{}return new __(T)}function YD(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XD="__/auth/handler",JD="emulator/auth/handler",ZD=encodeURIComponent("fac");async function v_(n,e,t,i,o,l){ve(n.config.authDomain,n,"auth-domain-config-required"),ve(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Es,eventId:o};if(e instanceof kw){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",jI(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,T]of Object.entries({}))c[w]=T}if(e instanceof Sl){const w=e.getScopes().filter(T=>T!=="");w.length>0&&(c.scopes=w.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const w of Object.keys(d))d[w]===void 0&&delete d[w];const p=await n._getAppCheckToken(),y=p?`#${ZD}=${encodeURIComponent(p)}`:"";return`${ex(n)}?${gl(d).slice(1)}${y}`}function ex({config:n}){return n.emulator?yp(n,JD):`https://${n.authDomain}/${XD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="webStorageSupport";class tx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bw,this._completeRedirectFn=RD,this._overrideRedirectResult=TD}async _openPopup(e,t,i,o){var l;jr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await v_(e,t,i,wf(),o);return QD(e,c,Tp())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await v_(e,t,i,wf(),o);return iD(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(jr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await $D(e),i=new CD(e);return t.register("authEvent",o=>(ve(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Qd,{type:Qd},o=>{var l;const c=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Qd];c!==void 0&&t(!!c),Wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=xD(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Iw()||yw()||vp()}}const nx=tx;var w_="@firebase/auth",E_="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ix(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sx(n){qn(new Cn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=i.options;ve(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sw(n)},y=new IN(i,o,l,p);return ON(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),qn(new Cn("auth-internal",e=>{const t=As(e.getProvider("auth").getImmediate());return(i=>new rx(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),rn(w_,E_,ix(n)),rn(w_,E_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ox=5*60,ax=H_("authIdTokenMaxAge")||ox;let T_=null;const lx=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>ax)return;const o=t==null?void 0:t.token;T_!==o&&(T_=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Sp(n=bc()){const e=Ni(n,"auth");if(e.isInitialized())return e.getImmediate();const t=xN(n,{popupRedirectResolver:nx,persistence:[fD,tD,bw]}),i=H_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=lx(l.toString());XN(t,c,()=>c(t.currentUser)),YN(t,d=>c(d))}}const o=j_("auth");return o&&LN(t,`http://${o}`),t}function ux(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}SN({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=ur("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",ux().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sx("Browser");function cx(){const n=Sp(El),e=Dc(),[t,i]=W.useState({email:"",password:""}),[o,l]=W.useState(!1),[c,d]=W.useState(""),p=w=>{const{name:T,value:S}=w.target;i(D=>({...D,[T]:S}))},y=async()=>{try{const w=await GN(n,t.email,t.password);console.log("User registered successfully:",w.user),l(!0),d(""),e("/login")}catch(w){console.error("Error registering user:",w.message),d("Failed to register. Please try again.")}};return ye.jsx("div",{className:"register-container",children:ye.jsxs("div",{className:"register-box",children:[ye.jsx("h1",{children:"Register"}),ye.jsx("input",{type:"email",placeholder:"Enter your email",name:"email",onChange:p,className:"form-input"}),ye.jsx("input",{type:"password",placeholder:"Enter your password",name:"password",onChange:p,className:"form-input"}),ye.jsx("button",{className:"register-btn",onClick:y,children:"Register"}),o&&ye.jsxs("p",{className:"success-message",children:["Successfully registered! Email: ",t.email]}),c&&ye.jsx("p",{className:"error-message",children:c}),ye.jsxs("p",{className:"login-text",children:["Already have an account? ",ye.jsx(Nf,{to:"/",className:"login-link",children:"Log in here"})]})]})})}function hx(){const[n,e]=W.useState({email:"",password:""}),[t,i]=W.useState(""),o=Dc(),l=Sp(El),c=p=>{const{name:y,value:w}=p.target;e(T=>({...T,[y]:w}))},d=async()=>{try{const p=await QN(l,n.email,n.password);console.log("User logged in:",p.user),i(""),o("/dashboard")}catch(p){console.error("Error logging in:",p.message),i("Invalid email or password. Please try again.")}};return ye.jsx("div",{className:"login-container",children:ye.jsxs("div",{className:"login-form",children:[ye.jsx("h1",{children:"Welcome Back :3"}),ye.jsx("p",{className:"login-subtitle",children:"Log in to see our memories!"}),ye.jsx("input",{type:"email",placeholder:"Email",name:"email",value:n.email,onChange:c,className:"form-input"}),ye.jsx("input",{type:"password",placeholder:"Password",name:"password",value:n.password,onChange:c,className:"form-input"}),ye.jsx("button",{className:"login-btn",onClick:d,children:"Login"}),t&&ye.jsx("p",{className:"error-message",children:t}),ye.jsx("p",{className:"register-text"})]})})}function dx(){const n=Sp(),e=Dc(),[t,i]=W.useState(null),o=$=>{i(t===$?null:$)},[l,c]=W.useState(""),[d,p]=W.useState(""),[y,w]=W.useState(null),[T,S]=W.useState([]),D=mk(r_,"features"),b=async()=>{try{await JN(n),console.log("User logged out successfully"),e("/login")}catch($){console.error("Error logging out:",$.message)}};W.useEffect(()=>{const $=Lk(D,Z=>{const re=Z.docs.map(we=>({id:we.id,...we.data()}));S(re)});return()=>$()},[]);const z=async $=>{if(!$)return null;const Z=qP(XP,`images/${$.name}`);try{return await $P(Z,$),await HP(Z)}catch(re){return console.error("Error uploading image: ",re),null}},L=async()=>{if(l&&d&&y)try{const $=await z(y);$?(await Ok(D,{title:l,description:d,image:$}),c(""),p(""),w(null)):alert("Image upload failed.")}catch($){console.error("Error adding feature: ",$)}else alert("Please fill in all fields and upload an image.")},q=async $=>{try{const Z=N0(r_,"features",$);await xk(Z),console.log("Feature deleted successfully")}catch(Z){console.error("Error deleting feature: ",Z.message)}};return ye.jsxs("div",{className:"dashboard-container",children:[ye.jsxs("header",{className:"dashboard-header",children:[ye.jsx("h1",{children:"Celebrating our memories"}),ye.jsx("button",{className:"logout-btn",onClick:b,children:"Logout"})]}),ye.jsxs("div",{className:"add-feature-container",children:[ye.jsx("h2",{children:"Add a New Memory"}),ye.jsxs("div",{className:"form-group",children:[ye.jsx("input",{type:"text",placeholder:"Enter title",value:l,onChange:$=>c($.target.value),className:"form-input"}),ye.jsx("textarea",{placeholder:"Enter description",value:d,onChange:$=>p($.target.value),className:"form-textarea",rows:"4",cols:"50"}),ye.jsx("input",{type:"file",accept:"image/*",onChange:$=>w($.target.files[0]),className:"form-input"}),ye.jsx("button",{className:"add-btn",onClick:L,children:"Add Memory"})]})]}),ye.jsxs("div",{className:"features-container",children:[ye.jsx("h2",{children:"Memories"}),T.map($=>ye.jsxs("div",{className:"feature-card",children:[ye.jsxs("div",{className:"topn",children:[ye.jsx("h3",{children:$.title}),t===$.id&&ye.jsx("button",{className:"delete-btn",onClick:()=>q($.id),children:"Delete Memory"})]}),ye.jsxs("div",{className:"feature-content",children:[$.image&&ye.jsx("img",{src:$.image,alt:$.title,className:"feature-image",onClick:()=>o($.id)}),ye.jsx("div",{className:"desc",children:ye.jsx("p",{children:$.description})})]})]},$.id))]})]})}function fx(){return ye.jsxs(fI,{children:[" ",ye.jsxs($T,{children:[ye.jsx(Xu,{path:"/register",element:ye.jsx(cx,{})}),ye.jsx(Xu,{path:"/",element:ye.jsx(hx,{})}),ye.jsx(Xu,{path:"/dashboard",element:ye.jsx(dx,{})})]})]})}ZE.createRoot(document.getElementById("root")).render(ye.jsx(W.StrictMode,{children:ye.jsx(fx,{})}));
