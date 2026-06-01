var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.provider`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.iterator;function p(e){return typeof e!=`object`||!e?null:(e=f&&e[f]||e[`@@iterator`],typeof e==`function`?e:null)}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function _(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`setState(...): takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function v(){}v.prototype=_.prototype;function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}var b=y.prototype=new v;b.constructor=y,h(b,_.prototype),b.isPureReactComponent=!0;var x=Array.isArray,ee=Object.prototype.hasOwnProperty,S={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function te(e,n,r){var i,a={},o=null,s=null;if(n!=null)for(i in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=``+n.key),n)ee.call(n,i)&&!C.hasOwnProperty(i)&&(a[i]=n[i]);var c=arguments.length-2;if(c===1)a.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)a[i]===void 0&&(a[i]=c[i]);return{$$typeof:t,type:e,key:o,ref:s,props:a,_owner:S.current}}function ne(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function re(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ie(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ae=/\/+/g;function oe(e,t){return typeof e==`object`&&e&&e.key!=null?ie(``+e.key):t.toString(36)}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0}}if(c)return c=e,o=o(c),e=a===``?`.`+oe(c,0):a,x(o)?(i=``,e!=null&&(i=e.replace(ae,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(re(o)&&(o=ne(o,i+(!o.key||c&&c.key===o.key?``:(``+o.key).replace(ae,`$&/`)+`/`)+e)),r.push(o)),1;if(c=0,a=a===``?`.`:a+`:`,x(e))for(var l=0;l<e.length;l++){s=e[l];var u=a+oe(s,l);c+=se(s,r,i,u,o)}else if(u=p(e),typeof u==`function`)for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=a+oe(s,l++),c+=se(s,r,i,u,o);else if(s===`object`)throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`);return c}function ce(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function le(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var w={current:null},ue={transition:null},de={ReactCurrentDispatcher:w,ReactCurrentBatchConfig:ue,ReactCurrentOwner:S};function fe(){throw Error(`act(...) is not supported in production builds of React.`)}e.Children={map:ce,forEach:function(e,t,n){ce(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ce(e,function(){t++}),t},toArray:function(e){return ce(e,function(e){return e})||[]},only:function(e){if(!re(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}},e.Component=_,e.Fragment=r,e.Profiler=a,e.PureComponent=y,e.StrictMode=i,e.Suspense=l,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,e.act=fe,e.cloneElement=function(e,n,r){if(e==null)throw Error(`React.cloneElement(...): The argument must be a React element, but you passed `+e+`.`);var i=h({},e.props),a=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=S.current),n.key!==void 0&&(a=``+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)ee.call(n,l)&&!C.hasOwnProperty(l)&&(i[l]=n[l]===void 0&&c!==void 0?c[l]:n[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:t,type:e.type,key:a,ref:o,props:i,_owner:s}},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:o,_context:e},e.Consumer=e},e.createElement=te,e.createFactory=function(e){var t=te.bind(null,e);return t.type=e,t},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=re,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:le}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=ue.transition;ue.transition={};try{e()}finally{ue.transition=t}},e.unstable_act=fe,e.useCallback=function(e,t){return w.current.useCallback(e,t)},e.useContext=function(e){return w.current.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e){return w.current.useDeferredValue(e)},e.useEffect=function(e,t){return w.current.useEffect(e,t)},e.useId=function(){return w.current.useId()},e.useImperativeHandle=function(e,t,n){return w.current.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.current.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.current.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.current.useMemo(e,t)},e.useReducer=function(e,t,n){return w.current.useReducer(e,t,n)},e.useRef=function(e){return w.current.useRef(e)},e.useState=function(e){return w.current.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.current.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.current.useTransition()},e.version=`18.3.1`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=typeof setTimeout==`function`?setTimeout:null,_=typeof clearTimeout==`function`?clearTimeout:null,v=typeof setImmediate<`u`?setImmediate:null;typeof navigator<`u`&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function b(e){if(h=!1,y(e),!m)if(n(c)!==null)m=!0,ce(x);else{var t=n(l);t!==null&&le(b,t.startTime-e)}}function x(t,i){m=!1,h&&(h=!1,_(C),C=-1),p=!0;var a=f;try{for(y(i),d=n(c);d!==null&&(!(d.expirationTime>i)||t&&!re());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=i);i=e.unstable_now(),typeof s==`function`?d.callback=s:d===n(c)&&r(c),y(i)}else r(c);d=n(c)}if(d!==null)var u=!0;else{var g=n(l);g!==null&&le(b,g.startTime-i),u=!1}return u}finally{d=null,f=a,p=!1}}var ee=!1,S=null,C=-1,te=5,ne=-1;function re(){return!(e.unstable_now()-ne<te)}function ie(){if(S!==null){var t=e.unstable_now();ne=t;var n=!0;try{n=S(!0,t)}finally{n?ae():(ee=!1,S=null)}}else ee=!1}var ae;if(typeof v==`function`)ae=function(){v(ie)};else if(typeof MessageChannel<`u`){var oe=new MessageChannel,se=oe.port2;oe.port1.onmessage=ie,ae=function(){se.postMessage(null)}}else ae=function(){g(ie,0)};function ce(e){S=e,ee||(ee=!0,ae())}function le(t,n){C=g(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,ce(x))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):te=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(_(C),C=-1):h=!0,le(b,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ce(x))),r},e.unstable_shouldYield=re,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u(),n=f();function r(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}var i=new Set,a={};function o(e,t){s(e,t),s(e+`Capture`,t)}function s(e,t){for(a[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),l=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function h(e){return l.call(m,e)?!0:l.call(p,e)?!1:d.test(e)?m[e]=!0:(p[e]=!0,!1)}function g(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case`function`:case`symbol`:return!0;case`boolean`:return r?!1:n===null?(e=e.toLowerCase().slice(0,5),e!==`data-`&&e!==`aria-`):!n.acceptsBooleans;default:return!1}}function _(e,t,n,r){if(t==null||g(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function v(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var y={};`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach(function(e){y[e]=new v(e,0,!1,e,null,!1,!1)}),[[`acceptCharset`,`accept-charset`],[`className`,`class`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`]].forEach(function(e){var t=e[0];y[t]=new v(t,1,!1,e[1],null,!1,!1)}),[`contentEditable`,`draggable`,`spellCheck`,`value`].forEach(function(e){y[e]=new v(e,2,!1,e.toLowerCase(),null,!1,!1)}),[`autoReverse`,`externalResourcesRequired`,`focusable`,`preserveAlpha`].forEach(function(e){y[e]=new v(e,2,!1,e,null,!1,!1)}),`allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach(function(e){y[e]=new v(e,3,!1,e.toLowerCase(),null,!1,!1)}),[`checked`,`multiple`,`muted`,`selected`].forEach(function(e){y[e]=new v(e,3,!0,e,null,!1,!1)}),[`capture`,`download`].forEach(function(e){y[e]=new v(e,4,!1,e,null,!1,!1)}),[`cols`,`rows`,`size`,`span`].forEach(function(e){y[e]=new v(e,6,!1,e,null,!1,!1)}),[`rowSpan`,`start`].forEach(function(e){y[e]=new v(e,5,!1,e.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function x(e){return e[1].toUpperCase()}`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,null,!1,!1)}),`xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/1999/xlink`,!1,!1)}),[`xml:base`,`xml:lang`,`xml:space`].forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/XML/1998/namespace`,!1,!1)}),[`tabIndex`,`crossOrigin`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!1,!1)}),y.xlinkHref=new v(`xlinkHref`,1,!1,`xlink:href`,`http://www.w3.org/1999/xlink`,!0,!1),[`src`,`href`,`action`,`formAction`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!0,!0)});function ee(e,t,n,r){var i=y.hasOwnProperty(t)?y[t]:null;(i===null?r||!(2<t.length)||t[0]!==`o`&&t[0]!==`O`||t[1]!==`n`&&t[1]!==`N`:i.type!==0)&&(_(t,n,i,r)&&(n=null),r||i===null?h(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,``+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:``:n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&!0===n?``:``+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var S=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,C=Symbol.for(`react.element`),te=Symbol.for(`react.portal`),ne=Symbol.for(`react.fragment`),re=Symbol.for(`react.strict_mode`),ie=Symbol.for(`react.profiler`),ae=Symbol.for(`react.provider`),oe=Symbol.for(`react.context`),se=Symbol.for(`react.forward_ref`),ce=Symbol.for(`react.suspense`),le=Symbol.for(`react.suspense_list`),w=Symbol.for(`react.memo`),ue=Symbol.for(`react.lazy`),de=Symbol.for(`react.offscreen`),fe=Symbol.iterator;function pe(e){return typeof e!=`object`||!e?null:(e=fe&&e[fe]||e[`@@iterator`],typeof e==`function`?e:null)}var T=Object.assign,me;function he(e){if(me===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);me=t&&t[1]||``}return`
`+me+e}var ge=!1;function _e(e,t){if(!e||ge)return``;ge=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&typeof t.stack==`string`){for(var i=t.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var c=`
`+i[o].replace(` at new `,` at `);return e.displayName&&c.includes(`<anonymous>`)&&(c=c.replace(`<anonymous>`,e.displayName)),c}while(1<=o&&0<=s);break}}}finally{ge=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:``)?he(e):``}function ve(e){switch(e.tag){case 5:return he(e.type);case 16:return he(`Lazy`);case 13:return he(`Suspense`);case 19:return he(`SuspenseList`);case 0:case 2:case 15:return e=_e(e.type,!1),e;case 11:return e=_e(e.type.render,!1),e;case 1:return e=_e(e.type,!0),e;default:return``}}function ye(e){if(e==null)return null;if(typeof e==`function`)return e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case ne:return`Fragment`;case te:return`Portal`;case ie:return`Profiler`;case re:return`StrictMode`;case ce:return`Suspense`;case le:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case oe:return(e.displayName||`Context`)+`.Consumer`;case ae:return(e._context.displayName||`Context`)+`.Provider`;case se:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case w:return t=e.displayName||null,t===null?ye(e.type)||`Memo`:t;case ue:t=e._payload,e=e._init;try{return ye(e(t))}catch{}}return null}function be(e){var t=e.type;switch(e.tag){case 24:return`Cache`;case 9:return(t.displayName||`Context`)+`.Consumer`;case 10:return(t._context.displayName||`Context`)+`.Provider`;case 18:return`DehydratedFragment`;case 11:return e=t.render,e=e.displayName||e.name||``,t.displayName||(e===``?`ForwardRef`:`ForwardRef(`+e+`)`);case 7:return`Fragment`;case 5:return t;case 4:return`Portal`;case 3:return`Root`;case 6:return`Text`;case 16:return ye(t);case 8:return t===re?`StrictMode`:`Mode`;case 22:return`Offscreen`;case 12:return`Profiler`;case 21:return`Scope`;case 13:return`Suspense`;case 19:return`SuspenseList`;case 25:return`TracingMarker`;case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t==`function`)return t.displayName||t.name||null;if(typeof t==`string`)return t}return null}function xe(e){switch(typeof e){case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Se(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ce(e){var t=Se(e)?`checked`:`value`,n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=``+e[t];if(!e.hasOwnProperty(t)&&n!==void 0&&typeof n.get==`function`&&typeof n.set==`function`){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function we(e){e._valueTracker||=Ce(e)}function Te(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Se(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Ee(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function De(e,t){var n=t.checked;return T({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Oe(e,t){var n=t.defaultValue==null?``:t.defaultValue,r=t.checked==null?t.defaultChecked:t.checked;n=xe(t.value==null?n:t.value),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type===`checkbox`||t.type===`radio`?t.checked!=null:t.value!=null}}function ke(e,t){t=t.checked,t!=null&&ee(e,`checked`,t,!1)}function Ae(e,t){ke(e,t);var n=xe(t.value),r=t.type;if(n!=null)r===`number`?(n===0&&e.value===``||e.value!=n)&&(e.value=``+n):e.value!==``+n&&(e.value=``+n);else if(r===`submit`||r===`reset`){e.removeAttribute(`value`);return}t.hasOwnProperty(`value`)?Me(e,t.type,n):t.hasOwnProperty(`defaultValue`)&&Me(e,t.type,xe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function je(e,t,n){if(t.hasOwnProperty(`value`)||t.hasOwnProperty(`defaultValue`)){var r=t.type;if(!(r!==`submit`&&r!==`reset`||t.value!==void 0&&t.value!==null))return;t=``+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==``&&(e.name=``),e.defaultChecked=!!e._wrapperState.initialChecked,n!==``&&(e.name=n)}function Me(e,t,n){(t!==`number`||Ee(e.ownerDocument)!==e)&&(n==null?e.defaultValue=``+e._wrapperState.initialValue:e.defaultValue!==``+n&&(e.defaultValue=``+n))}var Ne=Array.isArray;function Pe(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+xe(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Fe(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return T({},t,{value:void 0,defaultValue:void 0,children:``+e._wrapperState.initialValue})}function Ie(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(r(92));if(Ne(n)){if(1<n.length)throw Error(r(93));n=n[0]}t=n}t??=``,n=t}e._wrapperState={initialValue:xe(n)}}function Le(e,t){var n=xe(t.value),r=xe(t.defaultValue);n!=null&&(n=``+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=``+r)}function Re(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==``&&t!==null&&(e.value=t)}function ze(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`math`:return`http://www.w3.org/1998/Math/MathML`;default:return`http://www.w3.org/1999/xhtml`}}function E(e,t){return e==null||e===`http://www.w3.org/1999/xhtml`?ze(t):e===`http://www.w3.org/2000/svg`&&t===`foreignObject`?`http://www.w3.org/1999/xhtml`:e}var Be,Ve=function(e){return typeof MSApp<`u`&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==`http://www.w3.org/2000/svg`||`innerHTML`in e)e.innerHTML=t;else{for(Be||=document.createElement(`div`),Be.innerHTML=`<svg>`+t.valueOf().toString()+`</svg>`,t=Be.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function He(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ue={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},We=[`Webkit`,`ms`,`Moz`,`O`];Object.keys(Ue).forEach(function(e){We.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ue[t]=Ue[e]})});function D(e,t,n){return t==null||typeof t==`boolean`||t===``?``:n||typeof t!=`number`||t===0||Ue.hasOwnProperty(e)&&Ue[e]?(``+t).trim():t+`px`}function Ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=n.indexOf(`--`)===0,i=D(n,t[n],r);n===`float`&&(n=`cssFloat`),r?e.setProperty(n,i):e[n]=i}}var Ke=T({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qe(e,t){if(t){if(Ke[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!=`object`||!(`__html`in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!=`object`)throw Error(r(62))}}function Je(e,t){if(e.indexOf(`-`)===-1)return typeof t.is==`string`;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Ye=null;function Xe(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ze=null,Qe=null,$e=null;function et(e){if(e=Zi(e)){if(typeof Ze!=`function`)throw Error(r(280));var t=e.stateNode;t&&(t=$i(t),Ze(e.stateNode,e.type,t))}}function tt(e){Qe?$e?$e.push(e):$e=[e]:Qe=e}function nt(){if(Qe){var e=Qe,t=$e;if($e=Qe=null,et(e),t)for(e=0;e<t.length;e++)et(t[e])}}function rt(e,t){return e(t)}function it(){}var at=!1;function ot(e,t,n){if(at)return e(t,n);at=!0;try{return rt(e,t,n)}finally{at=!1,(Qe!==null||$e!==null)&&(it(),nt())}}function st(e,t){var n=e.stateNode;if(n===null)return null;var i=$i(n);if(i===null)return null;n=i[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(i=!i.disabled)||(e=e.type,i=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!i;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(r(231,t,typeof n));return n}var ct=!1;if(c)try{var lt={};Object.defineProperty(lt,"passive",{get:function(){ct=!0}}),window.addEventListener(`test`,lt,lt),window.removeEventListener(`test`,lt,lt)}catch{ct=!1}function ut(e,t,n,r,i,a,o,s,c){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(e){this.onError(e)}}var dt=!1,ft=null,pt=!1,mt=null,ht={onError:function(e){dt=!0,ft=e}};function gt(e,t,n,r,i,a,o,s,c){dt=!1,ft=null,ut.apply(ht,arguments)}function _t(e,t,n,i,a,o,s,c,l){if(gt.apply(this,arguments),dt){if(dt){var u=ft;dt=!1,ft=null}else throw Error(r(198));pt||(pt=!0,mt=u)}}function vt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function yt(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bt(e){if(vt(e)!==e)throw Error(r(188))}function xt(e){var t=e.alternate;if(!t){if(t=vt(e),t===null)throw Error(r(188));return t===e?e:null}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return bt(a),e;if(o===i)return bt(a),t;o=o.sibling}throw Error(r(188))}if(n.return!==i.return)n=a,i=o;else{for(var s=!1,c=a.child;c;){if(c===n){s=!0,n=a,i=o;break}if(c===i){s=!0,i=a,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,i=a;break}if(c===i){s=!0,i=o,n=a;break}c=c.sibling}if(!s)throw Error(r(189))}}if(n.alternate!==i)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:t}function St(e){return e=xt(e),e===null?null:Ct(e)}function Ct(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ct(e);if(t!==null)return t;e=e.sibling}return null}var wt=n.unstable_scheduleCallback,Tt=n.unstable_cancelCallback,Et=n.unstable_shouldYield,Dt=n.unstable_requestPaint,O=n.unstable_now,Ot=n.unstable_getCurrentPriorityLevel,kt=n.unstable_ImmediatePriority,At=n.unstable_UserBlockingPriority,jt=n.unstable_NormalPriority,Mt=n.unstable_LowPriority,Nt=n.unstable_IdlePriority,Pt=null,Ft=null;function It(e){if(Ft&&typeof Ft.onCommitFiberRoot==`function`)try{Ft.onCommitFiberRoot(Pt,e,void 0,(e.current.flags&128)==128)}catch{}}var Lt=Math.clz32?Math.clz32:Bt,Rt=Math.log,zt=Math.LN2;function Bt(e){return e>>>=0,e===0?32:31-(Rt(e)/zt|0)|0}var Vt=64,Ht=4194304;function Ut(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wt(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s===0?(a&=o,a!==0&&(r=Ut(a))):r=Ut(s)}else o=n&~i,o===0?a!==0&&(r=Ut(a)):r=Ut(o);if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===16&&a&4194240))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Lt(t),i=1<<n,r|=e[n],t&=~i;return r}function Gt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kt(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Lt(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Gt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}}function qt(e){return e=e.pendingLanes&-1073741825,e===0?e&1073741824?1073741824:0:e}function Jt(){var e=Vt;return Vt<<=1,!(Vt&4194240)&&(Vt=64),e}function Yt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xt(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Lt(t),e[t]=n}function Zt(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Lt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Qt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Lt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var k=0;function $t(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var en,tn,nn,rn,an,on=!1,sn=[],cn=null,ln=null,un=null,dn=new Map,fn=new Map,pn=[],mn=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(` `);function hn(e,t){switch(e){case`focusin`:case`focusout`:cn=null;break;case`dragenter`:case`dragleave`:ln=null;break;case`mouseover`:case`mouseout`:un=null;break;case`pointerover`:case`pointerout`:dn.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:fn.delete(t.pointerId)}}function gn(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Zi(t),t!==null&&tn(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function _n(e,t,n,r,i){switch(t){case`focusin`:return cn=gn(cn,e,t,n,r,i),!0;case`dragenter`:return ln=gn(ln,e,t,n,r,i),!0;case`mouseover`:return un=gn(un,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return dn.set(a,gn(dn.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,fn.set(a,gn(fn.get(a)||null,e,t,n,r,i)),!0}return!1}function vn(e){var t=Xi(e.target);if(t!==null){var n=vt(t);if(n!==null){if(t=n.tag,t===13){if(t=yt(n),t!==null){e.blockedOn=t,an(e.priority,function(){nn(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=An(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ye=r,n.target.dispatchEvent(r),Ye=null}else return t=Zi(n),t!==null&&tn(t),e.blockedOn=n,!1;t.shift()}return!0}function bn(e,t,n){yn(e)&&n.delete(t)}function xn(){on=!1,cn!==null&&yn(cn)&&(cn=null),ln!==null&&yn(ln)&&(ln=null),un!==null&&yn(un)&&(un=null),dn.forEach(bn),fn.forEach(bn)}function Sn(e,t){e.blockedOn===t&&(e.blockedOn=null,on||(on=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,xn)))}function Cn(e){function t(t){return Sn(t,e)}if(0<sn.length){Sn(sn[0],e);for(var n=1;n<sn.length;n++){var r=sn[n];r.blockedOn===e&&(r.blockedOn=null)}}for(cn!==null&&Sn(cn,e),ln!==null&&Sn(ln,e),un!==null&&Sn(un,e),dn.forEach(t),fn.forEach(t),n=0;n<pn.length;n++)r=pn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<pn.length&&(n=pn[0],n.blockedOn===null);)vn(n),n.blockedOn===null&&pn.shift()}var wn=S.ReactCurrentBatchConfig,Tn=!0;function En(e,t,n,r){var i=k,a=wn.transition;wn.transition=null;try{k=1,On(e,t,n,r)}finally{k=i,wn.transition=a}}function Dn(e,t,n,r){var i=k,a=wn.transition;wn.transition=null;try{k=4,On(e,t,n,r)}finally{k=i,wn.transition=a}}function On(e,t,n,r){if(Tn){var i=An(e,t,n,r);if(i===null)Si(e,t,r,kn,n),hn(e,r);else if(_n(i,e,t,n,r))r.stopPropagation();else if(hn(e,r),t&4&&-1<mn.indexOf(e)){for(;i!==null;){var a=Zi(i);if(a!==null&&en(a),a=An(e,t,n,r),a===null&&Si(e,t,r,kn,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Si(e,t,r,null,n)}}var kn=null;function An(e,t,n,r){if(kn=null,e=Xe(r),e=Xi(e),e!==null)if(t=vt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=yt(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return kn=e,null}function jn(e){switch(e){case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 1;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`toggle`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 4;case`message`:switch(Ot()){case kt:return 1;case At:return 4;case jt:case Mt:return 16;case Nt:return 536870912;default:return 16}default:return 16}}var Mn=null,Nn=null,Pn=null;function Fn(){if(Pn)return Pn;var e,t=Nn,n=t.length,r,i=`value`in Mn?Mn.value:Mn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Pn=i.slice(e,1<r?1-r:void 0)}function In(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ln(){return!0}function Rn(){return!1}function zn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Ln:Rn,this.isPropagationStopped=Rn,this}return T(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Ln)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Ln)},persist:function(){},isPersistent:Ln}),t}var Bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vn=zn(Bn),Hn=T({},Bn,{view:0,detail:0}),Un=zn(Hn),Wn,Gn,Kn,qn=T({},Hn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ir,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Kn&&(Kn&&e.type===`mousemove`?(Wn=e.screenX-Kn.screenX,Gn=e.screenY-Kn.screenY):Gn=Wn=0,Kn=e),Wn)},movementY:function(e){return`movementY`in e?e.movementY:Gn}}),Jn=zn(qn),Yn=zn(T({},qn,{dataTransfer:0})),Xn=zn(T({},Hn,{relatedTarget:0})),Zn=zn(T({},Bn,{animationName:0,elapsedTime:0,pseudoElement:0})),Qn=zn(T({},Bn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),$n=zn(T({},Bn,{data:0})),er={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},tr={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},nr={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function rr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=nr[e])?!!t[e]:!1}function ir(){return rr}var ar=zn(T({},Hn,{key:function(e){if(e.key){var t=er[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=In(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?tr[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ir,charCode:function(e){return e.type===`keypress`?In(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?In(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),or=zn(T({},qn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),sr=zn(T({},Hn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ir})),cr=zn(T({},Bn,{propertyName:0,elapsedTime:0,pseudoElement:0})),lr=zn(T({},qn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),ur=[9,13,27,32],dr=c&&`CompositionEvent`in window,fr=null;c&&`documentMode`in document&&(fr=document.documentMode);var pr=c&&`TextEvent`in window&&!fr,mr=c&&(!dr||fr&&8<fr&&11>=fr),hr=` `,gr=!1;function _r(e,t){switch(e){case`keyup`:return ur.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function vr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var yr=!1;function br(e,t){switch(e){case`compositionend`:return vr(t);case`keypress`:return t.which===32?(gr=!0,hr):null;case`textInput`:return e=t.data,e===hr&&gr?null:e;default:return null}}function xr(e,t){if(yr)return e===`compositionend`||!dr&&_r(e,t)?(e=Fn(),Pn=Nn=Mn=null,yr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return mr&&t.locale!==`ko`?null:t.data;default:return null}}var Sr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Sr[e.type]:t===`textarea`}function wr(e,t,n,r){tt(r),t=wi(t,`onChange`),0<t.length&&(n=new Vn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Tr=null,Er=null;function Dr(e){_i(e,0)}function Or(e){if(Te(Qi(e)))return e}function kr(e,t){if(e===`change`)return t}var Ar=!1;if(c){var jr;if(c){var Mr=`oninput`in document;if(!Mr){var Nr=document.createElement(`div`);Nr.setAttribute(`oninput`,`return;`),Mr=typeof Nr.oninput==`function`}jr=Mr}else jr=!1;Ar=jr&&(!document.documentMode||9<document.documentMode)}function Pr(){Tr&&(Tr.detachEvent(`onpropertychange`,Fr),Er=Tr=null)}function Fr(e){if(e.propertyName===`value`&&Or(Er)){var t=[];wr(t,Er,e,Xe(e)),ot(Dr,t)}}function Ir(e,t,n){e===`focusin`?(Pr(),Tr=t,Er=n,Tr.attachEvent(`onpropertychange`,Fr)):e===`focusout`&&Pr()}function Lr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Or(Er)}function Rr(e,t){if(e===`click`)return Or(t)}function zr(e,t){if(e===`input`||e===`change`)return Or(t)}function Br(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var A=typeof Object.is==`function`?Object.is:Br;function Vr(e,t){if(A(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!l.call(t,i)||!A(e[i],t[i]))return!1}return!0}function Hr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ur(e,t){var n=Hr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Hr(n)}}function Wr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gr(){for(var e=window,t=Ee();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ee(e.document)}return t}function Kr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}function qr(e){var t=Gr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Wr(n.ownerDocument.documentElement,n)){if(r!==null&&Kr(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),`selectionStart`in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Ur(n,a);var o=Ur(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus==`function`&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jr=c&&`documentMode`in document&&11>=document.documentMode,Yr=null,Xr=null,Zr=null,Qr=!1;function $r(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qr||Yr==null||Yr!==Ee(r)||(r=Yr,`selectionStart`in r&&Kr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zr&&Vr(Zr,r)||(Zr=r,r=wi(Xr,`onSelect`),0<r.length&&(t=new Vn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Yr)))}function ei(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var ti={animationend:ei(`Animation`,`AnimationEnd`),animationiteration:ei(`Animation`,`AnimationIteration`),animationstart:ei(`Animation`,`AnimationStart`),transitionend:ei(`Transition`,`TransitionEnd`)},ni={},ri={};c&&(ri=document.createElement(`div`).style,`AnimationEvent`in window||(delete ti.animationend.animation,delete ti.animationiteration.animation,delete ti.animationstart.animation),`TransitionEvent`in window||delete ti.transitionend.transition);function ii(e){if(ni[e])return ni[e];if(!ti[e])return e;var t=ti[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ri)return ni[e]=t[n];return e}var ai=ii(`animationend`),oi=ii(`animationiteration`),si=ii(`animationstart`),ci=ii(`transitionend`),li=new Map,ui=`abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);function di(e,t){li.set(e,t),o(t,[e])}for(var fi=0;fi<ui.length;fi++){var pi=ui[fi];di(pi.toLowerCase(),`on`+(pi[0].toUpperCase()+pi.slice(1)))}di(ai,`onAnimationEnd`),di(oi,`onAnimationIteration`),di(si,`onAnimationStart`),di(`dblclick`,`onDoubleClick`),di(`focusin`,`onFocus`),di(`focusout`,`onBlur`),di(ci,`onTransitionEnd`),s(`onMouseEnter`,[`mouseout`,`mouseover`]),s(`onMouseLeave`,[`mouseout`,`mouseover`]),s(`onPointerEnter`,[`pointerout`,`pointerover`]),s(`onPointerLeave`,[`pointerout`,`pointerover`]),o(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),o(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),o(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),o(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var mi=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),hi=new Set(`cancel close invalid load scroll toggle`.split(` `).concat(mi));function gi(e,t,n){var r=e.type||`unknown-event`;e.currentTarget=n,_t(r,t,void 0,e),e.currentTarget=null}function _i(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;gi(i,s,l),a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;gi(i,s,l),a=c}}}if(pt)throw e=mt,pt=!1,mt=null,e}function j(e,t){var n=t[qi];n===void 0&&(n=t[qi]=new Set);var r=e+`__bubble`;n.has(r)||(xi(t,e,2,!1),n.add(r))}function vi(e,t,n){var r=0;t&&(r|=4),xi(n,e,r,t)}var yi=`_reactListening`+Math.random().toString(36).slice(2);function bi(e){if(!e[yi]){e[yi]=!0,i.forEach(function(t){t!==`selectionchange`&&(hi.has(t)||vi(t,!1,e),vi(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[yi]||(t[yi]=!0,vi(`selectionchange`,!1,t))}}function xi(e,t,n,r){switch(jn(t)){case 1:var i=En;break;case 4:i=Dn;break;default:i=On}n=i.bind(null,t,n,e),i=void 0,!ct||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Si(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Xi(s),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue a}s=s.parentNode}}r=r.return}ot(function(){var r=a,i=Xe(n),o=[];a:{var s=li.get(e);if(s!==void 0){var c=Vn,l=e;switch(e){case`keypress`:if(In(n)===0)break a;case`keydown`:case`keyup`:c=ar;break;case`focusin`:l=`focus`,c=Xn;break;case`focusout`:l=`blur`,c=Xn;break;case`beforeblur`:case`afterblur`:c=Xn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Jn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Yn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=sr;break;case ai:case oi:case si:c=Zn;break;case ci:c=cr;break;case`scroll`:c=Un;break;case`wheel`:c=lr;break;case`copy`:case`cut`:case`paste`:c=Qn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=or}var u=(t&4)!=0,d=!u&&e===`scroll`,f=u?s===null?null:s+`Capture`:s;u=[];for(var p=r,m;p!==null;){m=p;var h=m.stateNode;if(m.tag===5&&h!==null&&(m=h,f!==null&&(h=st(p,f),h!=null&&u.push(Ci(p,h,m)))),d)break;p=p.return}0<u.length&&(s=new c(s,l,null,n,i),o.push({event:s,listeners:u}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==Ye&&(l=n.relatedTarget||n.fromElement)&&(Xi(l)||l[Ki]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Xi(l):null,l!==null&&(d=vt(l),l!==d||l.tag!==5&&l.tag!==6)&&(l=null)):(c=null,l=r),c!==l)){if(u=Jn,h=`onMouseLeave`,f=`onMouseEnter`,p=`mouse`,(e===`pointerout`||e===`pointerover`)&&(u=or,h=`onPointerLeave`,f=`onPointerEnter`,p=`pointer`),d=c==null?s:Qi(c),m=l==null?s:Qi(l),s=new u(h,p+`leave`,c,n,i),s.target=d,s.relatedTarget=m,h=null,Xi(i)===r&&(u=new u(f,p+`enter`,l,n,i),u.target=m,u.relatedTarget=d,h=u),d=h,c&&l)b:{for(u=c,f=l,p=0,m=u;m;m=Ti(m))p++;for(m=0,h=f;h;h=Ti(h))m++;for(;0<p-m;)u=Ti(u),p--;for(;0<m-p;)f=Ti(f),m--;for(;p--;){if(u===f||f!==null&&u===f.alternate)break b;u=Ti(u),f=Ti(f)}u=null}else u=null;c!==null&&Ei(o,s,c,u,!1),l!==null&&d!==null&&Ei(o,d,l,u,!0)}}a:{if(s=r?Qi(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var g=kr;else if(Cr(s))if(Ar)g=zr;else{g=Lr;var _=Ir}else (c=s.nodeName)&&c.toLowerCase()===`input`&&(s.type===`checkbox`||s.type===`radio`)&&(g=Rr);if(g&&=g(e,r)){wr(o,g,n,i);break a}_&&_(e,s,r),e===`focusout`&&(_=s._wrapperState)&&_.controlled&&s.type===`number`&&Me(s,`number`,s.value)}switch(_=r?Qi(r):window,e){case`focusin`:(Cr(_)||_.contentEditable===`true`)&&(Yr=_,Xr=r,Zr=null);break;case`focusout`:Zr=Xr=Yr=null;break;case`mousedown`:Qr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Qr=!1,$r(o,n,i);break;case`selectionchange`:if(Jr)break;case`keydown`:case`keyup`:$r(o,n,i)}var v;if(dr)b:{switch(e){case`compositionstart`:var y=`onCompositionStart`;break b;case`compositionend`:y=`onCompositionEnd`;break b;case`compositionupdate`:y=`onCompositionUpdate`;break b}y=void 0}else yr?_r(e,n)&&(y=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(y=`onCompositionStart`);y&&(mr&&n.locale!==`ko`&&(yr||y!==`onCompositionStart`?y===`onCompositionEnd`&&yr&&(v=Fn()):(Mn=i,Nn=`value`in Mn?Mn.value:Mn.textContent,yr=!0)),_=wi(r,y),0<_.length&&(y=new $n(y,e,null,n,i),o.push({event:y,listeners:_}),v?y.data=v:(v=vr(n),v!==null&&(y.data=v)))),(v=pr?br(e,n):xr(e,n))&&(r=wi(r,`onBeforeInput`),0<r.length&&(i=new $n(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:i,listeners:r}),i.data=v))}_i(o,t)})}function Ci(e,t,n){return{instance:e,listener:t,currentTarget:n}}function wi(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=st(e,n),a!=null&&r.unshift(Ci(e,a,i)),a=st(e,t),a!=null&&r.push(Ci(e,a,i))),e=e.return}return r}function Ti(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ei(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&l!==null&&(s=l,i?(c=st(n,a),c!=null&&o.unshift(Ci(n,c,s))):i||(c=st(n,a),c!=null&&o.push(Ci(n,c,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Di=/\r\n?/g,Oi=/\u0000|\uFFFD/g;function ki(e){return(typeof e==`string`?e:``+e).replace(Di,`
`).replace(Oi,``)}function Ai(e,t,n){if(t=ki(t),ki(e)!==t&&n)throw Error(r(425))}function ji(){}var Mi=null,Ni=null;function Pi(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Fi=typeof setTimeout==`function`?setTimeout:void 0,Ii=typeof clearTimeout==`function`?clearTimeout:void 0,Li=typeof Promise==`function`?Promise:void 0,Ri=typeof queueMicrotask==`function`?queueMicrotask:Li===void 0?Fi:function(e){return Li.resolve(null).then(e).catch(zi)};function zi(e){setTimeout(function(){throw e})}function Bi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`){if(r===0){e.removeChild(i),Cn(t);return}r--}else n!==`$`&&n!==`$?`&&n!==`$!`||r++;n=i}while(n);Cn(t)}function Vi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`)break;if(t===`/$`)return null}}return e}function Hi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`){if(t===0)return e;t--}else n===`/$`&&t++}e=e.previousSibling}return null}var Ui=Math.random().toString(36).slice(2),Wi=`__reactFiber$`+Ui,Gi=`__reactProps$`+Ui,Ki=`__reactContainer$`+Ui,qi=`__reactEvents$`+Ui,Ji=`__reactListeners$`+Ui,Yi=`__reactHandles$`+Ui;function Xi(e){var t=e[Wi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ki]||n[Wi]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Hi(e);e!==null;){if(n=e[Wi])return n;e=Hi(e)}return t}e=n,n=e.parentNode}return null}function Zi(e){return e=e[Wi]||e[Ki],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function $i(e){return e[Gi]||null}var ea=[],ta=-1;function na(e){return{current:e}}function M(e){0>ta||(e.current=ea[ta],ea[ta]=null,ta--)}function N(e,t){ta++,ea[ta]=e.current,e.current=t}var ra={},P=na(ra),F=na(!1),ia=ra;function aa(e,t){var n=e.type.contextTypes;if(!n)return ra;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function oa(e){return e=e.childContextTypes,e!=null}function sa(){M(F),M(P)}function ca(e,t,n){if(P.current!==ra)throw Error(r(168));N(P,t),N(F,n)}function la(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!=`function`)return n;for(var a in i=i.getChildContext(),i)if(!(a in t))throw Error(r(108,be(e)||`Unknown`,a));return T({},n,i)}function ua(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ra,ia=P.current,N(P,e),N(F,F.current),!0}function da(e,t,n){var i=e.stateNode;if(!i)throw Error(r(169));n?(e=la(e,t,ia),i.__reactInternalMemoizedMergedChildContext=e,M(F),M(P),N(P,e)):M(F),N(F,n)}var fa=null,pa=!1,ma=!1;function ha(e){fa===null?fa=[e]:fa.push(e)}function ga(e){pa=!0,ha(e)}function _a(){if(!ma&&fa!==null){ma=!0;var e=0,t=k;try{var n=fa;for(k=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}fa=null,pa=!1}catch(t){throw fa!==null&&(fa=fa.slice(e+1)),wt(kt,_a),t}finally{k=t,ma=!1}}return null}var va=[],ya=0,ba=null,xa=0,Sa=[],Ca=0,wa=null,Ta=1,Ea=``;function Da(e,t){va[ya++]=xa,va[ya++]=ba,ba=e,xa=t}function Oa(e,t,n){Sa[Ca++]=Ta,Sa[Ca++]=Ea,Sa[Ca++]=wa,wa=e;var r=Ta;e=Ea;var i=32-Lt(r)-1;r&=~(1<<i),n+=1;var a=32-Lt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ta=1<<32-Lt(t)+i|n<<i|r,Ea=a+e}else Ta=1<<a|n<<i|r,Ea=e}function ka(e){e.return!==null&&(Da(e,1),Oa(e,1,0))}function Aa(e){for(;e===ba;)ba=va[--ya],va[ya]=null,xa=va[--ya],va[ya]=null;for(;e===wa;)wa=Sa[--Ca],Sa[Ca]=null,Ea=Sa[--Ca],Sa[Ca]=null,Ta=Sa[--Ca],Sa[Ca]=null}var ja=null,Ma=null,I=!1,Na=null;function Pa(e,t){var n=Kl(5,null,null,0);n.elementType=`DELETED`,n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Fa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t===null?!1:(e.stateNode=t,ja=e,Ma=Vi(t.firstChild),!0);case 6:return t=e.pendingProps===``||t.nodeType!==3?null:t,t===null?!1:(e.stateNode=t,ja=e,Ma=null,!0);case 13:return t=t.nodeType===8?t:null,t===null?!1:(n=wa===null?null:{id:Ta,overflow:Ea},e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Kl(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ja=e,Ma=null,!0);default:return!1}}function Ia(e){return(e.mode&1)!=0&&(e.flags&128)==0}function La(e){if(I){var t=Ma;if(t){var n=t;if(!Fa(e,t)){if(Ia(e))throw Error(r(418));t=Vi(n.nextSibling);var i=ja;t&&Fa(e,t)?Pa(i,n):(e.flags=e.flags&-4097|2,I=!1,ja=e)}}else{if(Ia(e))throw Error(r(418));e.flags=e.flags&-4097|2,I=!1,ja=e}}}function Ra(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ja=e}function za(e){if(e!==ja)return!1;if(!I)return Ra(e),I=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!==`head`&&t!==`body`&&!Pi(e.type,e.memoizedProps)),t&&=Ma){if(Ia(e))throw Ba(),Error(r(418));for(;t;)Pa(e,t),t=Vi(t.nextSibling)}if(Ra(e),e.tag===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(r(317));a:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`){if(t===0){Ma=Vi(e.nextSibling);break a}t--}else n!==`$`&&n!==`$!`&&n!==`$?`||t++}e=e.nextSibling}Ma=null}}else Ma=ja?Vi(e.stateNode.nextSibling):null;return!0}function Ba(){for(var e=Ma;e;)e=Vi(e.nextSibling)}function Va(){Ma=ja=null,I=!1}function Ha(e){Na===null?Na=[e]:Na.push(e)}var Ua=S.ReactCurrentBatchConfig;function Wa(e,t,n){if(e=n.ref,e!==null&&typeof e!=`function`&&typeof e!=`object`){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(r(309));var i=n.stateNode}if(!i)throw Error(r(147,e));var a=i,o=``+e;return t!==null&&t.ref!==null&&typeof t.ref==`function`&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;e===null?delete t[o]:t[o]=e},t._stringRef=o,t)}if(typeof e!=`string`)throw Error(r(284));if(!n._owner)throw Error(r(290,e))}return e}function Ga(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e))}function Ka(e){var t=e._init;return t(e._payload)}function qa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function i(e,t){for(e=new Map;t!==null;)t.key===null?e.set(t.index,t):e.set(t.key,t),t=t.sibling;return e}function a(e,t){return e=Yl(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=2,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=2),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=$l(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===ne?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===ue&&Ka(i)===t.type)?(r=a(t,n.props),r.ref=Wa(e,t,n),r.return=e,r):(r=Xl(n.type,n.key,n.props,null,e.mode,r),r.ref=Wa(e,t,n),r.return=e,r)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=eu(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Zl(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`)return t=$l(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case C:return n=Xl(t.type,t.key,t.props,null,e.mode,n),n.ref=Wa(e,null,t),n.return=e,n;case te:return t=eu(t,e.mode,n),t.return=e,t;case ue:var r=t._init;return f(e,r(t._payload),n)}if(Ne(t)||pe(t))return t=Zl(t,e.mode,n,null),t.return=e,t;Ga(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case C:return n.key===i?l(e,t,n,r):null;case te:return n.key===i?u(e,t,n,r):null;case ue:return i=n._init,p(e,t,i(n._payload),r)}if(Ne(n)||pe(n))return i===null?d(e,t,n,r,null):null;Ga(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case C:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case te:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ue:var a=r._init;return m(e,t,n,a(r._payload),i)}if(Ne(r)||pe(r))return e=e.get(n)||null,d(t,e,r,i,null);Ga(t,r)}return null}function h(r,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(r,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(r,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(r,d),I&&Da(r,h),l;if(d===null){for(;h<s.length;h++)d=f(r,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return I&&Da(r,h),l}for(d=i(r,d);h<s.length;h++)g=m(d,r,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(r,e)}),I&&Da(r,h),l}function g(a,s,c,l){var u=pe(c);if(typeof u!=`function`)throw Error(r(150));if(c=u.call(c),c==null)throw Error(r(151));for(var d=u=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),I&&Da(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return I&&Da(a,g),u}for(h=i(a,h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),I&&Da(a,g),u}function _(e,r,i,o){if(typeof i==`object`&&i&&i.type===ne&&i.key===null&&(i=i.props.children),typeof i==`object`&&i){switch(i.$$typeof){case C:a:{for(var c=i.key,l=r;l!==null;){if(l.key===c){if(c=i.type,c===ne){if(l.tag===7){n(e,l.sibling),r=a(l,i.props.children),r.return=e,e=r;break a}}else if(l.elementType===c||typeof c==`object`&&c&&c.$$typeof===ue&&Ka(c)===l.type){n(e,l.sibling),r=a(l,i.props),r.ref=Wa(e,l,i),r.return=e,e=r;break a}n(e,l);break}else t(e,l);l=l.sibling}i.type===ne?(r=Zl(i.props.children,e.mode,o,i.key),r.return=e,e=r):(o=Xl(i.type,i.key,i.props,null,e.mode,o),o.ref=Wa(e,r,i),o.return=e,e=o)}return s(e);case te:a:{for(l=i.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===i.containerInfo&&r.stateNode.implementation===i.implementation){n(e,r.sibling),r=a(r,i.children||[]),r.return=e,e=r;break a}else{n(e,r);break}else t(e,r);r=r.sibling}r=eu(i,e.mode,o),r.return=e,e=r}return s(e);case ue:return l=i._init,_(e,r,l(i._payload),o)}if(Ne(i))return h(e,r,i,o);if(pe(i))return g(e,r,i,o);Ga(e,i)}return typeof i==`string`&&i!==``||typeof i==`number`?(i=``+i,r!==null&&r.tag===6?(n(e,r.sibling),r=a(r,i),r.return=e,e=r):(n(e,r),r=$l(i,e.mode,o),r.return=e,e=r),s(e)):n(e,r)}return _}var Ja=qa(!0),Ya=qa(!1),Xa=na(null),Za=null,Qa=null,$a=null;function eo(){$a=Qa=Za=null}function to(e){var t=Xa.current;M(Xa),e._currentValue=t}function no(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ro(e,t){Za=e,$a=Qa=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Hs=!0),e.firstContext=null)}function io(e){var t=e._currentValue;if($a!==e)if(e={context:e,memoizedValue:t,next:null},Qa===null){if(Za===null)throw Error(r(308));Qa=e,Za.dependencies={lanes:0,firstContext:e}}else Qa=Qa.next=e;return t}var ao=null;function oo(e){ao===null?ao=[e]:ao.push(e)}function so(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,oo(t)):(n.next=i.next,i.next=n),t.interleaved=n,co(e,r)}function co(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var lo=!1;function uo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function po(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mo(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,co(e,n)}return i=r.interleaved,i===null?(t.next=t,oo(r)):(t.next=i.next,i.next=t),r.interleaved=t,co(e,n)}function ho(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194240)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qt(e,n)}}function go(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function _o(e,t,n,r){var i=e.updateQueue;lo=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane,p=s.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});a:{var m=e,h=s;switch(f=t,p=n,h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(p,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(p,d,f):m,f==null)break a;d=T({},d,f);break a;case 2:lo=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Xc|=o,e.lanes=o,e.memoizedState=d}}function vo(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(a!==null){if(i.callback=null,i=n,typeof a!=`function`)throw Error(r(191,a));a.call(i)}}}var yo={},bo=na(yo),xo=na(yo),So=na(yo);function Co(e){if(e===yo)throw Error(r(174));return e}function wo(e,t){switch(N(So,t),N(xo,e),N(bo,yo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:E(null,``);break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=E(t,e)}M(bo),N(bo,t)}function To(){M(bo),M(xo),M(So)}function Eo(e){Co(So.current);var t=Co(bo.current),n=E(t,e.type);t!==n&&(N(xo,e),N(bo,n))}function Do(e){xo.current===e&&(M(bo),M(xo))}var L=na(0);function Oo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===`$?`||n.data===`$!`))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ko=[];function Ao(){for(var e=0;e<ko.length;e++)ko[e]._workInProgressVersionPrimary=null;ko.length=0}var jo=S.ReactCurrentDispatcher,Mo=S.ReactCurrentBatchConfig,No=0,R=null,z=null,B=null,Po=!1,Fo=!1,Io=0,Lo=0;function V(){throw Error(r(321))}function Ro(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!A(e[n],t[n]))return!1;return!0}function zo(e,t,n,i,a,o){if(No=o,R=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,jo.current=e===null||e.memoizedState===null?Ss:Cs,e=n(i,a),Fo){o=0;do{if(Fo=!1,Io=0,25<=o)throw Error(r(301));o+=1,B=z=null,t.updateQueue=null,jo.current=ws,e=n(i,a)}while(Fo)}if(jo.current=xs,t=z!==null&&z.next!==null,No=0,B=z=R=null,Po=!1,t)throw Error(r(300));return e}function Bo(){var e=Io!==0;return Io=0,e}function Vo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return B===null?R.memoizedState=B=e:B=B.next=e,B}function Ho(){if(z===null){var e=R.alternate;e=e===null?null:e.memoizedState}else e=z.next;var t=B===null?R.memoizedState:B.next;if(t!==null)B=t,z=e;else{if(e===null)throw Error(r(310));z=e,e={memoizedState:z.memoizedState,baseState:z.baseState,baseQueue:z.baseQueue,queue:z.queue,next:null},B===null?R.memoizedState=B=e:B=B.next=e}return B}function Uo(e,t){return typeof t==`function`?t(e):t}function Wo(e){var t=Ho(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=z,a=i.baseQueue,o=n.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}i.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,i=i.baseState;var c=s=null,l=null,u=o;do{var d=u.lane;if((No&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(c=l=f,s=i):l=l.next=f,R.lanes|=d,Xc|=d}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=c,A(i,t.memoizedState)||(Hs=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=l,n.lastRenderedState=i}if(e=n.interleaved,e!==null){a=e;do o=a.lane,R.lanes|=o,Xc|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Go(e){var t=Ho(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);A(o,t.memoizedState)||(Hs=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function Ko(){}function qo(e,t){var n=R,i=Ho(),a=t(),o=!A(i.memoizedState,a);if(o&&(i.memoizedState=a,Hs=!0),i=i.queue,as(Xo.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||B!==null&&B.memoizedState.tag&1){if(n.flags|=2048,es(9,Yo.bind(null,n,i,a,t),void 0,null),J===null)throw Error(r(349));No&30||Jo(n,t,a)}return a}function Jo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=R.updateQueue,t===null?(t={lastEffect:null,stores:null},R.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Yo(e,t,n,r){t.value=n,t.getSnapshot=r,Zo(t)&&Qo(e)}function Xo(e,t,n){return n(function(){Zo(t)&&Qo(e)})}function Zo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!A(e,n)}catch{return!0}}function Qo(e){var t=co(e,1);t!==null&&hl(t,e,1,-1)}function $o(e){var t=Vo();return typeof e==`function`&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Uo,lastRenderedState:e},t.queue=e,e=e.dispatch=_s.bind(null,R,e),[t.memoizedState,e]}function es(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=R.updateQueue,t===null?(t={lastEffect:null,stores:null},R.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ts(){return Ho().memoizedState}function ns(e,t,n,r){var i=Vo();R.flags|=e,i.memoizedState=es(1|t,n,void 0,r===void 0?null:r)}function rs(e,t,n,r){var i=Ho();r=r===void 0?null:r;var a=void 0;if(z!==null){var o=z.memoizedState;if(a=o.destroy,r!==null&&Ro(r,o.deps)){i.memoizedState=es(t,n,a,r);return}}R.flags|=e,i.memoizedState=es(1|t,n,a,r)}function is(e,t){return ns(8390656,8,e,t)}function as(e,t){return rs(2048,8,e,t)}function os(e,t){return rs(4,2,e,t)}function ss(e,t){return rs(4,4,e,t)}function cs(e,t){if(typeof t==`function`)return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ls(e,t,n){return n=n==null?null:n.concat([e]),rs(4,4,cs.bind(null,t,e),n)}function us(){}function ds(e,t){var n=Ho();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ro(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function fs(e,t){var n=Ho();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ro(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ps(e,t,n){return No&21?(A(n,t)||(n=Jt(),R.lanes|=n,Xc|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Hs=!0),e.memoizedState=n)}function ms(e,t){var n=k;k=n!==0&&4>n?n:4,e(!0);var r=Mo.transition;Mo.transition={};try{e(!1),t()}finally{k=n,Mo.transition=r}}function hs(){return Ho().memoizedState}function gs(e,t,n){var r=ml(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},vs(e))ys(t,n);else if(n=so(e,t,n,r),n!==null){var i=Q();hl(n,e,r,i),bs(n,t,r)}}function _s(e,t,n){var r=ml(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(vs(e))ys(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,A(s,o)){var c=t.interleaved;c===null?(i.next=i,oo(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}n=so(e,t,i,r),n!==null&&(i=Q(),hl(n,e,r,i),bs(n,t,r))}}function vs(e){var t=e.alternate;return e===R||t!==null&&t===R}function ys(e,t){Fo=Po=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function bs(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qt(e,n)}}var xs={readContext:io,useCallback:V,useContext:V,useEffect:V,useImperativeHandle:V,useInsertionEffect:V,useLayoutEffect:V,useMemo:V,useReducer:V,useRef:V,useState:V,useDebugValue:V,useDeferredValue:V,useTransition:V,useMutableSource:V,useSyncExternalStore:V,useId:V,unstable_isNewReconciler:!1},Ss={readContext:io,useCallback:function(e,t){return Vo().memoizedState=[e,t===void 0?null:t],e},useContext:io,useEffect:is,useImperativeHandle:function(e,t,n){return n=n==null?null:n.concat([e]),ns(4194308,4,cs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ns(4194308,4,e,t)},useInsertionEffect:function(e,t){return ns(4,2,e,t)},useMemo:function(e,t){var n=Vo();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Vo();return t=n===void 0?t:n(t),r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=gs.bind(null,R,e),[r.memoizedState,e]},useRef:function(e){var t=Vo();return e={current:e},t.memoizedState=e},useState:$o,useDebugValue:us,useDeferredValue:function(e){return Vo().memoizedState=e},useTransition:function(){var e=$o(!1),t=e[0];return e=ms.bind(null,e[1]),Vo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=R,a=Vo();if(I){if(n===void 0)throw Error(r(407));n=n()}else{if(n=t(),J===null)throw Error(r(349));No&30||Jo(i,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,is(Xo.bind(null,i,o,e),[e]),i.flags|=2048,es(9,Yo.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=Vo(),t=J.identifierPrefix;if(I){var n=Ea,r=Ta;n=(r&~(1<<32-Lt(r)-1)).toString(32)+n,t=`:`+t+`R`+n,n=Io++,0<n&&(t+=`H`+n.toString(32)),t+=`:`}else n=Lo++,t=`:`+t+`r`+n.toString(32)+`:`;return e.memoizedState=t},unstable_isNewReconciler:!1},Cs={readContext:io,useCallback:ds,useContext:io,useEffect:as,useImperativeHandle:ls,useInsertionEffect:os,useLayoutEffect:ss,useMemo:fs,useReducer:Wo,useRef:ts,useState:function(){return Wo(Uo)},useDebugValue:us,useDeferredValue:function(e){return ps(Ho(),z.memoizedState,e)},useTransition:function(){return[Wo(Uo)[0],Ho().memoizedState]},useMutableSource:Ko,useSyncExternalStore:qo,useId:hs,unstable_isNewReconciler:!1},ws={readContext:io,useCallback:ds,useContext:io,useEffect:as,useImperativeHandle:ls,useInsertionEffect:os,useLayoutEffect:ss,useMemo:fs,useReducer:Go,useRef:ts,useState:function(){return Go(Uo)},useDebugValue:us,useDeferredValue:function(e){var t=Ho();return z===null?t.memoizedState=e:ps(t,z.memoizedState,e)},useTransition:function(){return[Go(Uo)[0],Ho().memoizedState]},useMutableSource:Ko,useSyncExternalStore:qo,useId:hs,unstable_isNewReconciler:!1};function Ts(e,t){if(e&&e.defaultProps){for(var n in t=T({},t),e=e.defaultProps,e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Es(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:T({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ds={isMounted:function(e){return(e=e._reactInternals)?vt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Q(),i=ml(e),a=po(r,i);a.payload=t,n!=null&&(a.callback=n),t=mo(e,a,i),t!==null&&(hl(t,e,i,r),ho(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Q(),i=ml(e),a=po(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=mo(e,a,i),t!==null&&(hl(t,e,i,r),ho(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Q(),r=ml(e),i=po(n,r);i.tag=2,t!=null&&(i.callback=t),t=mo(e,i,r),t!==null&&(hl(t,e,r,n),ho(t,e,r))}};function Os(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Vr(n,r)||!Vr(i,a):!0}function ks(e,t,n){var r=!1,i=ra,a=t.contextType;return typeof a==`object`&&a?a=io(a):(i=oa(t)?ia:P.current,r=t.contextTypes,a=(r=r!=null)?aa(e,i):ra),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ds,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function As(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ds.enqueueReplaceState(t,t.state,null)}function js(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},uo(e);var a=t.contextType;typeof a==`object`&&a?i.context=io(a):(a=oa(t)?ia:P.current,i.context=aa(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a==`function`&&(Es(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps==`function`||typeof i.getSnapshotBeforeUpdate==`function`||typeof i.UNSAFE_componentWillMount!=`function`&&typeof i.componentWillMount!=`function`||(t=i.state,typeof i.componentWillMount==`function`&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount==`function`&&i.UNSAFE_componentWillMount(),t!==i.state&&Ds.enqueueReplaceState(i,i.state,null),_o(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount==`function`&&(e.flags|=4194308)}function Ms(e,t){try{var n=``,r=t;do n+=ve(r),r=r.return;while(r);var i=n}catch(e){i=`
Error generating stack: `+e.message+`
`+e.stack}return{value:e,source:t,stack:i,digest:null}}function Ns(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ps(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var Fs=typeof WeakMap==`function`?WeakMap:Map;function Is(e,t,n){n=po(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){il||(il=!0,al=r),Ps(e,t)},n}function Ls(e,t,n){n=po(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r==`function`){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ps(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch==`function`&&(n.callback=function(){Ps(e,t),typeof r!=`function`&&(ol===null?ol=new Set([this]):ol.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n===null?``:n})}),n}function Rs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Fs;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=zl.bind(null,e,t,n),t.then(e,e))}function zs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t===null?!0:t.dehydrated!==null),t)return e;e=e.return}while(e!==null);return null}function Bs(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=po(-1,1),t.tag=2,mo(n,t,1))),n.lanes|=1),e)}var Vs=S.ReactCurrentOwner,Hs=!1;function H(e,t,n,r){t.child=e===null?Ya(t,null,n,r):Ja(t,e.child,n,r)}function Us(e,t,n,r,i){n=n.render;var a=t.ref;return ro(t,i),r=zo(e,t,n,r,a,i),n=Bo(),e!==null&&!Hs?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,lc(e,t,i)):(I&&n&&ka(t),t.flags|=1,H(e,t,r,i),t.child)}function Ws(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ql(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Gs(e,t,a,r,i)):(e=Xl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var o=a.memoizedProps;if(n=n.compare,n=n===null?Vr:n,n(o,r)&&e.ref===t.ref)return lc(e,t,i)}return t.flags|=1,e=Yl(a,r),e.ref=t.ref,e.return=t,t.child=e}function Gs(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Vr(a,r)&&e.ref===t.ref)if(Hs=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Hs=!0);else return t.lanes=e.lanes,lc(e,t,i)}return Js(e,t,n,r,i)}function Ks(e,t,n){var r=t.pendingProps,i=r.children,a=e===null?null:e.memoizedState;if(r.mode===`hidden`)if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},N(Jc,qc),qc|=n;else{if(!(n&1073741824))return e=a===null?n:a.baseLanes|n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,N(Jc,qc),qc|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a===null?n:a.baseLanes,N(Jc,qc),qc|=r}else a===null?r=n:(r=a.baseLanes|n,t.memoizedState=null),N(Jc,qc),qc|=r;return H(e,t,i,n),t.child}function qs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Js(e,t,n,r,i){var a=oa(n)?ia:P.current;return a=aa(t,a),ro(t,i),n=zo(e,t,n,r,a,i),r=Bo(),e!==null&&!Hs?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,lc(e,t,i)):(I&&r&&ka(t),t.flags|=1,H(e,t,n,i),t.child)}function Ys(e,t,n,r,i){if(oa(n)){var a=!0;ua(t)}else a=!1;if(ro(t,i),t.stateNode===null)cc(e,t),ks(t,n,r),js(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,l=n.contextType;typeof l==`object`&&l?l=io(l):(l=oa(n)?ia:P.current,l=aa(t,l));var u=n.getDerivedStateFromProps,d=typeof u==`function`||typeof o.getSnapshotBeforeUpdate==`function`;d||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==r||c!==l)&&As(t,o,r,l),lo=!1;var f=t.memoizedState;o.state=f,_o(t,r,o,i),c=t.memoizedState,s!==r||f!==c||F.current||lo?(typeof u==`function`&&(Es(t,n,u,r),c=t.memoizedState),(s=lo||Os(t,n,s,r,f,c,l))?(d||typeof o.UNSAFE_componentWillMount!=`function`&&typeof o.componentWillMount!=`function`||(typeof o.componentWillMount==`function`&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==`function`&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount==`function`&&(t.flags|=4194308)):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=l,r=s):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,fo(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:Ts(t.type,s),o.props=l,d=t.pendingProps,f=o.context,c=n.contextType,typeof c==`object`&&c?c=io(c):(c=oa(n)?ia:P.current,c=aa(t,c));var p=n.getDerivedStateFromProps;(u=typeof p==`function`||typeof o.getSnapshotBeforeUpdate==`function`)||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==d||f!==c)&&As(t,o,r,c),lo=!1,f=t.memoizedState,o.state=f,_o(t,r,o,i);var m=t.memoizedState;s!==d||f!==m||F.current||lo?(typeof p==`function`&&(Es(t,n,p,r),m=t.memoizedState),(l=lo||Os(t,n,l,r,f,m,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!=`function`&&typeof o.componentWillUpdate!=`function`||(typeof o.componentWillUpdate==`function`&&o.componentWillUpdate(r,m,c),typeof o.UNSAFE_componentWillUpdate==`function`&&o.UNSAFE_componentWillUpdate(r,m,c)),typeof o.componentDidUpdate==`function`&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=c,r=l):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Xs(e,t,n,r,a,i)}function Xs(e,t,n,r,i,a){qs(e,t);var o=(t.flags&128)!=0;if(!r&&!o)return i&&da(t,n,!1),lc(e,t,a);r=t.stateNode,Vs.current=t;var s=o&&typeof n.getDerivedStateFromError!=`function`?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Ja(t,e.child,null,a),t.child=Ja(t,null,s,a)):H(e,t,s,a),t.memoizedState=r.state,i&&da(t,n,!0),t.child}function Zs(e){var t=e.stateNode;t.pendingContext?ca(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ca(e,t.context,!1),wo(e,t.containerInfo)}function Qs(e,t,n,r,i){return Va(),Ha(i),t.flags|=256,H(e,t,n,r),t.child}var $s={dehydrated:null,treeContext:null,retryLane:0};function ec(e){return{baseLanes:e,cachePool:null,transitions:null}}function tc(e,t,n){var r=t.pendingProps,i=L.current,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!=0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),N(L,i&1),e===null)return La(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data===`$!`?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:`hidden`,children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Ql(o,r,0,null),e=Zl(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=ec(n),t.memoizedState=$s,e):nc(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return ic(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var c={mode:`hidden`,children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Yl(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s===null?(a=Zl(a,o,n,null),a.flags|=2):a=Yl(s,a),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?ec(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=$s,r}return a=e.child,e=a.sibling,r=Yl(a,{mode:`visible`,children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function nc(e,t){return t=Ql({mode:`visible`,children:t},e.mode,0,null),t.return=e,e.child=t}function rc(e,t,n,r){return r!==null&&Ha(r),Ja(t,e.child,null,n),e=nc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ic(e,t,n,i,a,o,s){if(n)return t.flags&256?(t.flags&=-257,i=Ns(Error(r(422))),rc(e,t,s,i)):t.memoizedState===null?(o=i.fallback,a=t.mode,i=Ql({mode:`visible`,children:i.children},a,0,null),o=Zl(o,a,s,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&Ja(t,e.child,null,s),t.child.memoizedState=ec(s),t.memoizedState=$s,o):(t.child=e.child,t.flags|=128,null);if(!(t.mode&1))return rc(e,t,s,null);if(a.data===`$!`){if(i=a.nextSibling&&a.nextSibling.dataset,i)var c=i.dgst;return i=c,o=Error(r(419)),i=Ns(o,i,void 0),rc(e,t,s,i)}if(c=(s&e.childLanes)!==0,Hs||c){if(i=J,i!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(i.suspendedLanes|s))===0?a:0,a!==0&&a!==o.retryLane&&(o.retryLane=a,co(e,a),hl(i,e,a,-1))}return kl(),i=Ns(Error(r(421))),rc(e,t,s,i)}return a.data===`$?`?(t.flags|=128,t.child=e.child,t=Vl.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,Ma=Vi(a.nextSibling),ja=t,I=!0,Na=null,e!==null&&(Sa[Ca++]=Ta,Sa[Ca++]=Ea,Sa[Ca++]=wa,Ta=e.id,Ea=e.overflow,wa=t),t=nc(t,i.children),t.flags|=4096,t)}function ac(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),no(e.return,t,n)}function oc(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function sc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(H(e,t,r.children,n),r=L.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ac(e,n,t);else if(e.tag===19)ac(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(N(L,r),!(t.mode&1))t.memoizedState=null;else switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Oo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),oc(t,!1,i,n,a);break;case`backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Oo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}oc(t,!0,n,null,a);break;case`together`:oc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function cc(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function lc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xc|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,n=Yl(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yl(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function uc(e,t,n){switch(t.tag){case 3:Zs(t),Va();break;case 5:Eo(t);break;case 1:oa(t.type)&&ua(t);break;case 4:wo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;N(Xa,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(N(L,L.current&1),e=lc(e,t,n),e===null?null:e.sibling):tc(e,t,n):(N(L,L.current&1),t.flags|=128,null);N(L,L.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return sc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),N(L,L.current),r)break;return null;case 22:case 23:return t.lanes=0,Ks(e,t,n)}return lc(e,t,n)}var dc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},fc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Co(bo.current);var o=null;switch(n){case`input`:i=De(e,i),r=De(e,r),o=[];break;case`select`:i=T({},i,{value:void 0}),r=T({},r,{value:void 0}),o=[];break;case`textarea`:i=Fe(e,i),r=Fe(e,r),o=[];break;default:typeof i.onClick!=`function`&&typeof r.onClick==`function`&&(e.onclick=ji)}qe(n,r);var s;for(u in n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u===`style`){var c=i[u];for(s in c)c.hasOwnProperty(s)&&(n||={},n[s]=``)}else u!==`dangerouslySetInnerHTML`&&u!==`children`&&u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&u!==`autoFocus`&&(a.hasOwnProperty(u)?o||=[]:(o||=[]).push(u,null));for(u in r){var l=r[u];if(c=i?.[u],r.hasOwnProperty(u)&&l!==c&&(l!=null||c!=null))if(u===`style`)if(c){for(s in c)!c.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||={},n[s]=``);for(s in l)l.hasOwnProperty(s)&&c[s]!==l[s]&&(n||={},n[s]=l[s])}else n||(o||=[],o.push(u,n)),n=l;else u===`dangerouslySetInnerHTML`?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(o||=[]).push(u,l)):u===`children`?typeof l!=`string`&&typeof l!=`number`||(o||=[]).push(u,``+l):u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&(a.hasOwnProperty(u)?(l!=null&&u===`onScroll`&&j(`scroll`,e),o||c===l||(o=[])):(o||=[]).push(u,l))}n&&(o||=[]).push(`style`,n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},pc=function(e,t,n,r){n!==r&&(t.flags|=4)};function mc(e,t){if(!I)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function U(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hc(e,t,n){var i=t.pendingProps;switch(Aa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return U(t),null;case 1:return oa(t.type)&&sa(),U(t),null;case 3:return i=t.stateNode,To(),M(F),M(P),Ao(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(za(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Na!==null&&(yl(Na),Na=null))),U(t),null;case 5:Do(t);var o=Co(So.current);if(n=t.type,e!==null&&t.stateNode!=null)fc(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(r(166));return U(t),null}if(e=Co(bo.current),za(t)){i=t.stateNode,n=t.type;var s=t.memoizedProps;switch(i[Wi]=t,i[Gi]=s,e=(t.mode&1)!=0,n){case`dialog`:j(`cancel`,i),j(`close`,i);break;case`iframe`:case`object`:case`embed`:j(`load`,i);break;case`video`:case`audio`:for(o=0;o<mi.length;o++)j(mi[o],i);break;case`source`:j(`error`,i);break;case`img`:case`image`:case`link`:j(`error`,i),j(`load`,i);break;case`details`:j(`toggle`,i);break;case`input`:Oe(i,s),j(`invalid`,i);break;case`select`:i._wrapperState={wasMultiple:!!s.multiple},j(`invalid`,i);break;case`textarea`:Ie(i,s),j(`invalid`,i)}for(var c in qe(n,s),o=null,s)if(s.hasOwnProperty(c)){var l=s[c];c===`children`?typeof l==`string`?i.textContent!==l&&(!0!==s.suppressHydrationWarning&&Ai(i.textContent,l,e),o=[`children`,l]):typeof l==`number`&&i.textContent!==``+l&&(!0!==s.suppressHydrationWarning&&Ai(i.textContent,l,e),o=[`children`,``+l]):a.hasOwnProperty(c)&&l!=null&&c===`onScroll`&&j(`scroll`,i)}switch(n){case`input`:we(i),je(i,s,!0);break;case`textarea`:we(i),Re(i);break;case`select`:case`option`:break;default:typeof s.onClick==`function`&&(i.onclick=ji)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{c=o.nodeType===9?o:o.ownerDocument,e===`http://www.w3.org/1999/xhtml`&&(e=ze(n)),e===`http://www.w3.org/1999/xhtml`?n===`script`?(e=c.createElement(`div`),e.innerHTML=`<script><\/script>`,e=e.removeChild(e.firstChild)):typeof i.is==`string`?e=c.createElement(n,{is:i.is}):(e=c.createElement(n),n===`select`&&(c=e,i.multiple?c.multiple=!0:i.size&&(c.size=i.size))):e=c.createElementNS(e,n),e[Wi]=t,e[Gi]=i,dc(e,t,!1,!1),t.stateNode=e;a:{switch(c=Je(n,i),n){case`dialog`:j(`cancel`,e),j(`close`,e),o=i;break;case`iframe`:case`object`:case`embed`:j(`load`,e),o=i;break;case`video`:case`audio`:for(o=0;o<mi.length;o++)j(mi[o],e);o=i;break;case`source`:j(`error`,e),o=i;break;case`img`:case`image`:case`link`:j(`error`,e),j(`load`,e),o=i;break;case`details`:j(`toggle`,e),o=i;break;case`input`:Oe(e,i),o=De(e,i),j(`invalid`,e);break;case`option`:o=i;break;case`select`:e._wrapperState={wasMultiple:!!i.multiple},o=T({},i,{value:void 0}),j(`invalid`,e);break;case`textarea`:Ie(e,i),o=Fe(e,i),j(`invalid`,e);break;default:o=i}for(s in qe(n,o),l=o,l)if(l.hasOwnProperty(s)){var u=l[s];s===`style`?Ge(e,u):s===`dangerouslySetInnerHTML`?(u=u?u.__html:void 0,u!=null&&Ve(e,u)):s===`children`?typeof u==`string`?(n!==`textarea`||u!==``)&&He(e,u):typeof u==`number`&&He(e,``+u):s!==`suppressContentEditableWarning`&&s!==`suppressHydrationWarning`&&s!==`autoFocus`&&(a.hasOwnProperty(s)?u!=null&&s===`onScroll`&&j(`scroll`,e):u!=null&&ee(e,s,u,c))}switch(n){case`input`:we(e),je(e,i,!1);break;case`textarea`:we(e),Re(e);break;case`option`:i.value!=null&&e.setAttribute(`value`,``+xe(i.value));break;case`select`:e.multiple=!!i.multiple,s=i.value,s==null?i.defaultValue!=null&&Pe(e,!!i.multiple,i.defaultValue,!0):Pe(e,!!i.multiple,s,!1);break;default:typeof o.onClick==`function`&&(e.onclick=ji)}switch(n){case`button`:case`input`:case`select`:case`textarea`:i=!!i.autoFocus;break a;case`img`:i=!0;break a;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return U(t),null;case 6:if(e&&t.stateNode!=null)pc(e,t,e.memoizedProps,i);else{if(typeof i!=`string`&&t.stateNode===null)throw Error(r(166));if(n=Co(So.current),Co(bo.current),za(t)){if(i=t.stateNode,n=t.memoizedProps,i[Wi]=t,(s=i.nodeValue!==n)&&(e=ja,e!==null))switch(e.tag){case 3:Ai(i.nodeValue,n,(e.mode&1)!=0);break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Ai(i.nodeValue,n,(e.mode&1)!=0)}s&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Wi]=t,t.stateNode=i}return U(t),null;case 13:if(M(L),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(I&&Ma!==null&&t.mode&1&&!(t.flags&128))Ba(),Va(),t.flags|=98560,s=!1;else if(s=za(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(r(318));if(s=t.memoizedState,s=s===null?null:s.dehydrated,!s)throw Error(r(317));s[Wi]=t}else Va(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),s=!1}else Na!==null&&(yl(Na),Na=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||L.current&1?Z===0&&(Z=3):kl())),t.updateQueue!==null&&(t.flags|=4),U(t),null);case 4:return To(),e===null&&bi(t.stateNode.containerInfo),U(t),null;case 10:return to(t.type._context),U(t),null;case 17:return oa(t.type)&&sa(),U(t),null;case 19:if(M(L),s=t.memoizedState,s===null)return U(t),null;if(i=(t.flags&128)!=0,c=s.rendering,c===null)if(i)mc(s,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(c=Oo(e),c!==null){for(t.flags|=128,mc(s,!1),i=c.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)s=n,e=i,s.flags&=14680066,c=s.alternate,c===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=c.childLanes,s.lanes=c.lanes,s.child=c.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=c.memoizedProps,s.memoizedState=c.memoizedState,s.updateQueue=c.updateQueue,s.type=c.type,e=c.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return N(L,L.current&1|2),t.child}e=e.sibling}s.tail!==null&&O()>nl&&(t.flags|=128,i=!0,mc(s,!1),t.lanes=4194304)}else{if(!i)if(e=Oo(c),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),mc(s,!0),s.tail===null&&s.tailMode===`hidden`&&!c.alternate&&!I)return U(t),null}else 2*O()-s.renderingStartTime>nl&&n!==1073741824&&(t.flags|=128,i=!0,mc(s,!1),t.lanes=4194304);s.isBackwards?(c.sibling=t.child,t.child=c):(n=s.last,n===null?t.child=c:n.sibling=c,s.last=c)}return s.tail===null?(U(t),null):(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=O(),t.sibling=null,n=L.current,N(L,i?n&1|2:n&1),t);case 22:case 23:return Tl(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?qc&1073741824&&(U(t),t.subtreeFlags&6&&(t.flags|=8192)):U(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}function gc(e,t){switch(Aa(t),t.tag){case 1:return oa(t.type)&&sa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return To(),M(F),M(P),Ao(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Do(t),null;case 13:if(M(L),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Va()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return M(L),null;case 4:return To(),null;case 10:return to(t.type._context),null;case 22:case 23:return Tl(),null;case 24:return null;default:return null}}var _c=!1,W=!1,vc=typeof WeakSet==`function`?WeakSet:Set,G=null;function yc(e,t){var n=e.ref;if(n!==null)if(typeof n==`function`)try{n(null)}catch(n){$(e,t,n)}else n.current=null}function bc(e,t,n){try{n()}catch(n){$(e,t,n)}}var xc=!1;function Sc(e,t){if(Mi=Tn,e=Gr(),Kr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Ni={focusedElem:e,selectionRange:n},Tn=!1,G=t;G!==null;)if(t=G,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,G=e;else for(;G!==null;){t=G;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var g=h.memoizedProps,_=h.memoizedState,v=t.stateNode;v.__reactInternalSnapshotBeforeUpdate=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:Ts(t.type,g),_)}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent=``:y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(e){$(t,t.return,e)}if(e=t.sibling,e!==null){e.return=t.return,G=e;break}G=t.return}return h=xc,xc=!1,h}function Cc(e,t,n){var r=t.updateQueue;if(r=r===null?null:r.lastEffect,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&bc(t,n,a)}i=i.next}while(i!==r)}}function wc(e,t){if(t=t.updateQueue,t=t===null?null:t.lastEffect,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Tc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t==`function`?t(e):t.current=e}}function Ec(e){var t=e.alternate;t!==null&&(e.alternate=null,Ec(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Wi],delete t[Gi],delete t[qi],delete t[Ji],delete t[Yi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dc(e){return e.tag===5||e.tag===3||e.tag===4}function Oc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Dc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function kc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ji));else if(r!==4&&(e=e.child,e!==null))for(kc(e,t,n),e=e.sibling;e!==null;)kc(e,t,n),e=e.sibling}function Ac(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ac(e,t,n),e=e.sibling;e!==null;)Ac(e,t,n),e=e.sibling}var K=null,jc=!1;function Mc(e,t,n){for(n=n.child;n!==null;)Nc(e,t,n),n=n.sibling}function Nc(e,t,n){if(Ft&&typeof Ft.onCommitFiberUnmount==`function`)try{Ft.onCommitFiberUnmount(Pt,n)}catch{}switch(n.tag){case 5:W||yc(n,t);case 6:var r=K,i=jc;K=null,Mc(e,t,n),K=r,jc=i,K!==null&&(jc?(e=K,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):K.removeChild(n.stateNode));break;case 18:K!==null&&(jc?(e=K,n=n.stateNode,e.nodeType===8?Bi(e.parentNode,n):e.nodeType===1&&Bi(e,n),Cn(e)):Bi(K,n.stateNode));break;case 4:r=K,i=jc,K=n.stateNode.containerInfo,jc=!0,Mc(e,t,n),K=r,jc=i;break;case 0:case 11:case 14:case 15:if(!W&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&bc(n,t,o),i=i.next}while(i!==r)}Mc(e,t,n);break;case 1:if(!W&&(yc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){$(n,t,e)}Mc(e,t,n);break;case 21:Mc(e,t,n);break;case 22:n.mode&1?(W=(r=W)||n.memoizedState!==null,Mc(e,t,n),W=r):Mc(e,t,n);break;default:Mc(e,t,n)}}function Pc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new vc),t.forEach(function(t){var r=Hl.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function Fc(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];try{var o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 5:K=c.stateNode,jc=!1;break a;case 3:K=c.stateNode.containerInfo,jc=!0;break a;case 4:K=c.stateNode.containerInfo,jc=!0;break a}c=c.return}if(K===null)throw Error(r(160));Nc(o,s,a),K=null,jc=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(e){$(a,t,e)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ic(t,e),t=t.sibling}function Ic(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Fc(t,e),Lc(e),i&4){try{Cc(3,e,e.return),wc(3,e)}catch(t){$(e,e.return,t)}try{Cc(5,e,e.return)}catch(t){$(e,e.return,t)}}break;case 1:Fc(t,e),Lc(e),i&512&&n!==null&&yc(n,n.return);break;case 5:if(Fc(t,e),Lc(e),i&512&&n!==null&&yc(n,n.return),e.flags&32){var a=e.stateNode;try{He(a,``)}catch(t){$(e,e.return,t)}}if(i&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,s=n===null?o:n.memoizedProps,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c===`input`&&o.type===`radio`&&o.name!=null&&ke(a,o),Je(c,s);var u=Je(c,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d===`style`?Ge(a,f):d===`dangerouslySetInnerHTML`?Ve(a,f):d===`children`?He(a,f):ee(a,d,f,u)}switch(c){case`input`:Ae(a,o);break;case`textarea`:Le(a,o);break;case`select`:var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m==null?p!==!!o.multiple&&(o.defaultValue==null?Pe(a,!!o.multiple,o.multiple?[]:``,!1):Pe(a,!!o.multiple,o.defaultValue,!0)):Pe(a,!!o.multiple,m,!1)}a[Gi]=o}catch(t){$(e,e.return,t)}}break;case 6:if(Fc(t,e),Lc(e),i&4){if(e.stateNode===null)throw Error(r(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(t){$(e,e.return,t)}}break;case 3:if(Fc(t,e),Lc(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Cn(t.containerInfo)}catch(t){$(e,e.return,t)}break;case 4:Fc(t,e),Lc(e);break;case 13:Fc(t,e),Lc(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(tl=O())),i&4&&Pc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(W=(u=W)||d,Fc(t,e),W=u):Fc(t,e),Lc(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(G=e,d=e.child;d!==null;){for(f=G=d;G!==null;){switch(p=G,m=p.child,p.tag){case 0:case 11:case 14:case 15:Cc(4,p,p.return);break;case 1:yc(p,p.return);var h=p.stateNode;if(typeof h.componentWillUnmount==`function`){i=p,n=p.return;try{t=i,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(e){$(i,n,e)}}break;case 5:yc(p,p.return);break;case 22:if(p.memoizedState!==null){Vc(f);continue}}m===null?Vc(f):(m.return=p,G=m)}d=d.sibling}a:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{a=f.stateNode,u?(o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`):(c=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty(`display`)?l.display:null,c.style.display=D(`display`,s))}catch(t){$(e,e.return,t)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?``:f.memoizedProps}catch(t){$(e,e.return,t)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break a;for(;f.sibling===null;){if(f.return===null||f.return===e)break a;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Fc(t,e),Lc(e),i&4&&Pc(e);break;case 21:break;default:Fc(t,e),Lc(e)}}function Lc(e){var t=e.flags;if(t&2){try{a:{for(var n=e.return;n!==null;){if(Dc(n)){var i=n;break a}n=n.return}throw Error(r(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(He(a,``),i.flags&=-33),Ac(e,Oc(e),a);break;case 3:case 4:var o=i.stateNode.containerInfo;kc(e,Oc(e),o);break;default:throw Error(r(161))}}catch(t){$(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Rc(e,t,n){G=e,zc(e,t,n)}function zc(e,t,n){for(var r=(e.mode&1)!=0;G!==null;){var i=G,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||_c;if(!o){var s=i.alternate,c=s!==null&&s.memoizedState!==null||W;s=_c;var l=W;if(_c=o,(W=c)&&!l)for(G=i;G!==null;)o=G,c=o.child,o.tag===22&&o.memoizedState!==null||c===null?Hc(i):(c.return=o,G=c);for(;a!==null;)G=a,zc(a,t,n),a=a.sibling;G=i,_c=s,W=l}Bc(e,t,n)}else i.subtreeFlags&8772&&a!==null?(a.return=i,G=a):Bc(e,t,n)}}function Bc(e){for(;G!==null;){var t=G;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:W||wc(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!W)if(n===null)i.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Ts(t.type,n.memoizedProps);i.componentDidUpdate(a,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&vo(t,o,i);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}vo(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var l=t.memoizedProps;switch(t.type){case`button`:case`input`:case`select`:case`textarea`:l.autoFocus&&n.focus();break;case`img`:l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Cn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}W||t.flags&512&&Tc(t)}catch(e){$(t,t.return,e)}}if(t===e){G=null;break}if(n=t.sibling,n!==null){n.return=t.return,G=n;break}G=t.return}}function Vc(e){for(;G!==null;){var t=G;if(t===e){G=null;break}var n=t.sibling;if(n!==null){n.return=t.return,G=n;break}G=t.return}}function Hc(e){for(;G!==null;){var t=G;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{wc(4,t)}catch(e){$(t,n,e)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount==`function`){var i=t.return;try{r.componentDidMount()}catch(e){$(t,i,e)}}var a=t.return;try{Tc(t)}catch(e){$(t,a,e)}break;case 5:var o=t.return;try{Tc(t)}catch(e){$(t,o,e)}}}catch(e){$(t,t.return,e)}if(t===e){G=null;break}var s=t.sibling;if(s!==null){s.return=t.return,G=s;break}G=t.return}}var Uc=Math.ceil,Wc=S.ReactCurrentDispatcher,Gc=S.ReactCurrentOwner,Kc=S.ReactCurrentBatchConfig,q=0,J=null,Y=null,X=0,qc=0,Jc=na(0),Z=0,Yc=null,Xc=0,Zc=0,Qc=0,$c=null,el=null,tl=0,nl=1/0,rl=null,il=!1,al=null,ol=null,sl=!1,cl=null,ll=0,ul=0,dl=null,fl=-1,pl=0;function Q(){return q&6?O():fl===-1?fl=O():fl}function ml(e){return e.mode&1?q&2&&X!==0?X&-X:Ua.transition===null?(e=k,e===0?(e=window.event,e=e===void 0?16:jn(e.type),e):e):(pl===0&&(pl=Jt()),pl):1}function hl(e,t,n,i){if(50<ul)throw ul=0,dl=null,Error(r(185));Xt(e,n,i),(!(q&2)||e!==J)&&(e===J&&(!(q&2)&&(Zc|=n),Z===4&&xl(e,X)),gl(e,i),n===1&&q===0&&!(t.mode&1)&&(nl=O()+500,pa&&_a()))}function gl(e,t){var n=e.callbackNode;Kt(e,t);var r=Wt(e,e===J?X:0);if(r===0)n!==null&&Tt(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Tt(n),t===1)e.tag===0?ga(Sl.bind(null,e)):ha(Sl.bind(null,e)),Ri(function(){!(q&6)&&_a()}),n=null;else{switch($t(r)){case 1:n=kt;break;case 4:n=At;break;case 16:n=jt;break;case 536870912:n=Nt;break;default:n=jt}n=Wl(n,_l.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function _l(e,t){if(fl=-1,pl=0,q&6)throw Error(r(327));var n=e.callbackNode;if(Ll()&&e.callbackNode!==n)return null;var i=Wt(e,e===J?X:0);if(i===0)return null;if(i&30||(i&e.expiredLanes)!==0||t)t=Al(e,i);else{t=i;var a=q;q|=2;var o=Ol();(J!==e||X!==t)&&(rl=null,nl=O()+500,El(e,t));do try{Ml();break}catch(t){Dl(e,t)}while(1);eo(),Wc.current=o,q=a,Y===null?(J=null,X=0,t=Z):t=0}if(t!==0){if(t===2&&(a=qt(e),a!==0&&(i=a,t=vl(e,a))),t===1)throw n=Yc,El(e,0),xl(e,i),gl(e,O()),n;if(t===6)xl(e,i);else{if(a=e.current.alternate,!(i&30)&&!bl(a)&&(t=Al(e,i),t===2&&(o=qt(e),o!==0&&(i=o,t=vl(e,o))),t===1))throw n=Yc,El(e,0),xl(e,i),gl(e,O()),n;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(r(345));case 2:Fl(e,el,rl);break;case 3:if(xl(e,i),(i&130023424)===i&&(t=tl+500-O(),10<t)){if(Wt(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){Q(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Fi(Fl.bind(null,e,el,rl),t);break}Fl(e,el,rl);break;case 4:if(xl(e,i),(i&4194240)===i)break;for(t=e.eventTimes,a=-1;0<i;){var s=31-Lt(i);o=1<<s,s=t[s],s>a&&(a=s),i&=~o}if(i=a,i=O()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Uc(i/1960))-i,10<i){e.timeoutHandle=Fi(Fl.bind(null,e,el,rl),i);break}Fl(e,el,rl);break;case 5:Fl(e,el,rl);break;default:throw Error(r(329))}}}return gl(e,O()),e.callbackNode===n?_l.bind(null,e):null}function vl(e,t){var n=$c;return e.current.memoizedState.isDehydrated&&(El(e,t).flags|=256),e=Al(e,t),e!==2&&(t=el,el=n,t!==null&&yl(t)),e}function yl(e){el===null?el=e:el.push.apply(el,e)}function bl(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!A(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xl(e,t){for(t&=~Qc,t&=~Zc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Lt(t),r=1<<n;e[n]=-1,t&=~r}}function Sl(e){if(q&6)throw Error(r(327));Ll();var t=Wt(e,0);if(!(t&1))return gl(e,O()),null;var n=Al(e,t);if(e.tag!==0&&n===2){var i=qt(e);i!==0&&(t=i,n=vl(e,i))}if(n===1)throw n=Yc,El(e,0),xl(e,t),gl(e,O()),n;if(n===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fl(e,el,rl),gl(e,O()),null}function Cl(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(nl=O()+500,pa&&_a())}}function wl(e){cl!==null&&cl.tag===0&&!(q&6)&&Ll();var t=q;q|=1;var n=Kc.transition,r=k;try{if(Kc.transition=null,k=1,e)return e()}finally{k=r,Kc.transition=n,q=t,!(q&6)&&_a()}}function Tl(){qc=Jc.current,M(Jc)}function El(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ii(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(Aa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&sa();break;case 3:To(),M(F),M(P),Ao();break;case 5:Do(r);break;case 4:To();break;case 13:M(L);break;case 19:M(L);break;case 10:to(r.type._context);break;case 22:case 23:Tl()}n=n.return}if(J=e,Y=e=Yl(e.current,null),X=qc=t,Z=0,Yc=null,Qc=Zc=Xc=0,el=$c=null,ao!==null){for(t=0;t<ao.length;t++)if(n=ao[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}ao=null}return e}function Dl(e,t){do{var n=Y;try{if(eo(),jo.current=xs,Po){for(var i=R.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}Po=!1}if(No=0,B=z=R=null,Fo=!1,Io=0,Gc.current=null,n===null||n.return===null){Z=1,Yc=t,Y=null;break}a:{var o=e,s=n.return,c=n,l=t;if(t=X,c.flags|=32768,typeof l==`object`&&l&&typeof l.then==`function`){var u=l,d=c,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=zs(s);if(m!==null){m.flags&=-257,Bs(m,s,c,o,t),m.mode&1&&Rs(o,u,t),t=m,l=u;var h=t.updateQueue;if(h===null){var g=new Set;g.add(l),t.updateQueue=g}else h.add(l);break a}else{if(!(t&1)){Rs(o,u,t),kl();break a}l=Error(r(426))}}else if(I&&c.mode&1){var _=zs(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Bs(_,s,c,o,t),Ha(Ms(l,c));break a}}o=l=Ms(l,c),Z!==4&&(Z=2),$c===null?$c=[o]:$c.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=Is(o,l,t);go(o,v);break a;case 1:c=l;var y=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError==`function`||b!==null&&typeof b.componentDidCatch==`function`&&(ol===null||!ol.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Ls(o,c,t);go(o,x);break a}}o=o.return}while(o!==null)}Pl(n)}catch(e){t=e,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(1)}function Ol(){var e=Wc.current;return Wc.current=xs,e===null?xs:e}function kl(){(Z===0||Z===3||Z===2)&&(Z=4),J===null||!(Xc&268435455)&&!(Zc&268435455)||xl(J,X)}function Al(e,t){var n=q;q|=2;var i=Ol();(J!==e||X!==t)&&(rl=null,El(e,t));do try{jl();break}catch(t){Dl(e,t)}while(1);if(eo(),q=n,Wc.current=i,Y!==null)throw Error(r(261));return J=null,X=0,Z}function jl(){for(;Y!==null;)Nl(Y)}function Ml(){for(;Y!==null&&!Et();)Nl(Y)}function Nl(e){var t=Ul(e.alternate,e,qc);e.memoizedProps=e.pendingProps,t===null?Pl(e):Y=t,Gc.current=null}function Pl(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=gc(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,Y=null;return}}else if(n=hc(n,t,qc),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);Z===0&&(Z=5)}function Fl(e,t,n){var r=k,i=Kc.transition;try{Kc.transition=null,k=1,Il(e,t,n,r)}finally{Kc.transition=i,k=r}return null}function Il(e,t,n,i){do Ll();while(cl!==null);if(q&6)throw Error(r(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Zt(e,o),e===J&&(Y=J=null,X=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||sl||(sl=!0,Wl(jt,function(){return Ll(),null})),o=(n.flags&15990)!=0,n.subtreeFlags&15990||o){o=Kc.transition,Kc.transition=null;var s=k;k=1;var c=q;q|=4,Gc.current=null,Sc(e,n),Ic(n,e),qr(Ni),Tn=!!Mi,Ni=Mi=null,e.current=n,Rc(n,e,a),Dt(),q=c,k=s,Kc.transition=o}else e.current=n;if(sl&&(sl=!1,cl=e,ll=a),o=e.pendingLanes,o===0&&(ol=null),It(n.stateNode,i),gl(e,O()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],i(a.value,{componentStack:a.stack,digest:a.digest});if(il)throw il=!1,e=al,al=null,e;return ll&1&&e.tag!==0&&Ll(),o=e.pendingLanes,o&1?e===dl?ul++:(ul=0,dl=e):ul=0,_a(),null}function Ll(){if(cl!==null){var e=$t(ll),t=Kc.transition,n=k;try{if(Kc.transition=null,k=16>e?16:e,cl===null)var i=!1;else{if(e=cl,cl=null,ll=0,q&6)throw Error(r(331));var a=q;for(q|=4,G=e.current;G!==null;){var o=G,s=o.child;if(G.flags&16){var c=o.deletions;if(c!==null){for(var l=0;l<c.length;l++){var u=c[l];for(G=u;G!==null;){var d=G;switch(d.tag){case 0:case 11:case 15:Cc(8,d,o)}var f=d.child;if(f!==null)f.return=d,G=f;else for(;G!==null;){d=G;var p=d.sibling,m=d.return;if(Ec(d),d===u){G=null;break}if(p!==null){p.return=m,G=p;break}G=m}}}var h=o.alternate;if(h!==null){var g=h.child;if(g!==null){h.child=null;do{var _=g.sibling;g.sibling=null,g=_}while(g!==null)}}G=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,G=s;else b:for(;G!==null;){if(o=G,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Cc(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,G=v;break b}G=o.return}}var y=e.current;for(G=y;G!==null;){s=G;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,G=b;else b:for(s=y;G!==null;){if(c=G,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:wc(9,c)}}catch(e){$(c,c.return,e)}if(c===s){G=null;break b}var x=c.sibling;if(x!==null){x.return=c.return,G=x;break b}G=c.return}}if(q=a,_a(),Ft&&typeof Ft.onPostCommitFiberRoot==`function`)try{Ft.onPostCommitFiberRoot(Pt,e)}catch{}i=!0}return i}finally{k=n,Kc.transition=t}}return!1}function Rl(e,t,n){t=Ms(n,t),t=Is(e,t,1),e=mo(e,t,1),t=Q(),e!==null&&(Xt(e,1,t),gl(e,t))}function $(e,t,n){if(e.tag===3)Rl(e,e,n);else for(;t!==null;){if(t.tag===3){Rl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ol===null||!ol.has(r))){e=Ms(n,e),e=Ls(t,e,1),t=mo(t,e,1),e=Q(),t!==null&&(Xt(t,1,e),gl(t,e));break}}t=t.return}}function zl(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Q(),e.pingedLanes|=e.suspendedLanes&n,J===e&&(X&n)===n&&(Z===4||Z===3&&(X&130023424)===X&&500>O()-tl?El(e,0):Qc|=n),gl(e,t)}function Bl(e,t){t===0&&(e.mode&1?(t=Ht,Ht<<=1,!(Ht&130023424)&&(Ht=4194304)):t=1);var n=Q();e=co(e,t),e!==null&&(Xt(e,t,n),gl(e,n))}function Vl(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Bl(e,n)}function Hl(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(r(314))}i!==null&&i.delete(t),Bl(e,n)}var Ul=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||F.current)Hs=!0;else{if((e.lanes&n)===0&&!(t.flags&128))return Hs=!1,uc(e,t,n);Hs=!!(e.flags&131072)}else Hs=!1,I&&t.flags&1048576&&Oa(t,xa,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;cc(e,t),e=t.pendingProps;var a=aa(t,P.current);ro(t,n),a=zo(null,t,i,e,a,n);var o=Bo();return t.flags|=1,typeof a==`object`&&a&&typeof a.render==`function`&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,oa(i)?(o=!0,ua(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,uo(t),a.updater=Ds,t.stateNode=a,a._reactInternals=t,js(t,i,e,n),t=Xs(null,t,i,!0,o,n)):(t.tag=0,I&&o&&ka(t),H(null,t,a,n),t=t.child),t;case 16:i=t.elementType;a:{switch(cc(e,t),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=Jl(i),e=Ts(i,e),a){case 0:t=Js(null,t,i,e,n);break a;case 1:t=Ys(null,t,i,e,n);break a;case 11:t=Us(null,t,i,e,n);break a;case 14:t=Ws(null,t,i,Ts(i.type,e),n);break a}throw Error(r(306,i,``))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:Ts(i,a),Js(e,t,i,a,n);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:Ts(i,a),Ys(e,t,i,a,n);case 3:a:{if(Zs(t),e===null)throw Error(r(387));i=t.pendingProps,o=t.memoizedState,a=o.element,fo(e,t),_o(t,i,null,n);var s=t.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=Ms(Error(r(423)),t),t=Qs(e,t,i,n,a);break a}else if(i!==a){a=Ms(Error(r(424)),t),t=Qs(e,t,i,n,a);break a}else for(Ma=Vi(t.stateNode.containerInfo.firstChild),ja=t,I=!0,Na=null,n=Ya(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Va(),i===a){t=lc(e,t,n);break a}H(e,t,i,n)}t=t.child}return t;case 5:return Eo(t),e===null&&La(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,s=a.children,Pi(i,a)?s=null:o!==null&&Pi(i,o)&&(t.flags|=32),qs(e,t),H(e,t,s,n),t.child;case 6:return e===null&&La(t),null;case 13:return tc(e,t,n);case 4:return wo(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Ja(t,null,i,n):H(e,t,i,n),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:Ts(i,a),Us(e,t,i,a,n);case 7:return H(e,t,t.pendingProps,n),t.child;case 8:return H(e,t,t.pendingProps.children,n),t.child;case 12:return H(e,t,t.pendingProps.children,n),t.child;case 10:a:{if(i=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,N(Xa,i._currentValue),i._currentValue=s,o!==null)if(A(o.value,s)){if(o.children===a.children&&!F.current){t=lc(e,t,n);break a}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){s=o.child;for(var l=c.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=po(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),no(o.return,n,t),c.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(r(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),no(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}H(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,ro(t,n),a=io(a),i=i(a),t.flags|=1,H(e,t,i,n),t.child;case 14:return i=t.type,a=Ts(i,t.pendingProps),a=Ts(i.type,a),Ws(e,t,i,a,n);case 15:return Gs(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:Ts(i,a),cc(e,t),t.tag=1,oa(i)?(e=!0,ua(t)):e=!1,ro(t,n),ks(t,i,a),js(t,i,a,n),Xs(null,t,i,!0,e,n);case 19:return sc(e,t,n);case 22:return Ks(e,t,n)}throw Error(r(156,t.tag))};function Wl(e,t){return wt(e,t)}function Gl(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kl(e,t,n,r){return new Gl(e,t,n,r)}function ql(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jl(e){if(typeof e==`function`)return+!!ql(e);if(e!=null){if(e=e.$$typeof,e===se)return 11;if(e===w)return 14}return 2}function Yl(e,t){var n=e.alternate;return n===null?(n=Kl(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xl(e,t,n,i,a,o){var s=2;if(i=e,typeof e==`function`)ql(e)&&(s=1);else if(typeof e==`string`)s=5;else a:switch(e){case ne:return Zl(n.children,a,o,t);case re:s=8,a|=8;break;case ie:return e=Kl(12,n,t,a|2),e.elementType=ie,e.lanes=o,e;case ce:return e=Kl(13,n,t,a),e.elementType=ce,e.lanes=o,e;case le:return e=Kl(19,n,t,a),e.elementType=le,e.lanes=o,e;case de:return Ql(n,a,o,t);default:if(typeof e==`object`&&e)switch(e.$$typeof){case ae:s=10;break a;case oe:s=9;break a;case se:s=11;break a;case w:s=14;break a;case ue:s=16,i=null;break a}throw Error(r(130,e==null?e:typeof e,``))}return t=Kl(s,n,t,a),t.elementType=e,t.type=i,t.lanes=o,t}function Zl(e,t,n,r){return e=Kl(7,e,r,t),e.lanes=n,e}function Ql(e,t,n,r){return e=Kl(22,e,r,t),e.elementType=de,e.lanes=n,e.stateNode={isHidden:!1},e}function $l(e,t,n){return e=Kl(6,e,null,t),e.lanes=n,e}function eu(e,t,n){return t=Kl(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function tu(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yt(0),this.expirationTimes=Yt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function nu(e,t,n,r,i,a,o,s,c){return e=new tu(e,t,n,s,c),t===1?(t=1,!0===a&&(t|=8)):t=0,a=Kl(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},uo(a),e}function ru(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:te,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}function iu(e){if(!e)return ra;e=e._reactInternals;a:{if(vt(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break a;case 1:if(oa(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break a}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var n=e.type;if(oa(n))return la(e,n,t)}return t}function au(e,t,n,r,i,a,o,s,c){return e=nu(n,r,!0,e,i,a,o,s,c),e.context=iu(null),n=e.current,r=Q(),i=ml(n),a=po(r,i),a.callback=t??null,mo(n,a,i),e.current.lanes=i,Xt(e,i,r),gl(e,r),e}function ou(e,t,n,r){var i=t.current,a=Q(),o=ml(i);return n=iu(n),t.context===null?t.context=n:t.pendingContext=n,t=po(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=mo(i,t,o),e!==null&&(hl(e,i,o,a),ho(e,i,o)),o}function su(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function lu(e,t){cu(e,t),(e=e.alternate)&&cu(e,t)}function uu(){return null}var du=typeof reportError==`function`?reportError:function(e){console.error(e)};function fu(e){this._internalRoot=e}pu.prototype.render=fu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));ou(e,t,null,null)},pu.prototype.unmount=fu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wl(function(){ou(null,e,null,null)}),t[Ki]=null}};function pu(e){this._internalRoot=e}pu.prototype.unstable_scheduleHydration=function(e){if(e){var t=rn();e={blockedOn:null,target:e,priority:t};for(var n=0;n<pn.length&&t!==0&&t<pn[n].priority;n++);pn.splice(n,0,e),n===0&&vn(e)}};function mu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==` react-mount-point-unstable `))}function gu(){}function _u(e,t,n,r,i){if(i){if(typeof r==`function`){var a=r;r=function(){var e=su(o);a.call(e)}}var o=au(t,r,e,0,null,!1,!1,``,gu);return e._reactRootContainer=o,e[Ki]=o.current,bi(e.nodeType===8?e.parentNode:e),wl(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r==`function`){var s=r;r=function(){var e=su(c);s.call(e)}}var c=nu(e,0,!1,null,null,!1,!1,``,gu);return e._reactRootContainer=c,e[Ki]=c.current,bi(e.nodeType===8?e.parentNode:e),wl(function(){ou(t,c,n,r)}),c}function vu(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i==`function`){var s=i;i=function(){var e=su(o);s.call(e)}}ou(t,o,e,i)}else o=_u(n,t,e,i,r);return su(o)}en=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ut(t.pendingLanes);n!==0&&(Qt(t,n|1),gl(t,O()),!(q&6)&&(nl=O()+500,_a()))}break;case 13:wl(function(){var t=co(e,1);t!==null&&hl(t,e,1,Q())}),lu(e,1)}},tn=function(e){if(e.tag===13){var t=co(e,134217728);t!==null&&hl(t,e,134217728,Q()),lu(e,134217728)}},nn=function(e){if(e.tag===13){var t=ml(e),n=co(e,t);n!==null&&hl(n,e,t,Q()),lu(e,t)}},rn=function(){return k},an=function(e,t){var n=k;try{return k=e,t()}finally{k=n}},Ze=function(e,t,n){switch(t){case`input`:if(Ae(e,n),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name=`+JSON.stringify(``+t)+`][type="radio"]`),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=$i(i);if(!a)throw Error(r(90));Te(i),Ae(i,a)}}}break;case`textarea`:Le(e,n);break;case`select`:t=n.value,t!=null&&Pe(e,!!n.multiple,t,!1)}},rt=Cl,it=wl;var yu={usingClientEntryPoint:!1,Events:[Zi,Qi,$i,tt,nt,Cl]},bu={findFiberByHostInstance:Xi,bundleType:0,version:`18.3.1`,rendererPackageName:`react-dom`},xu={bundleType:bu.bundleType,version:bu.version,rendererPackageName:bu.rendererPackageName,rendererConfig:bu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:S.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=St(e),e===null?null:e.stateNode},findFiberByHostInstance:bu.findFiberByHostInstance||uu,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:`18.3.1-next-f1338f8080-20240426`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Su.isDisabled&&Su.supportsFiber)try{Pt=Su.inject(xu),Ft=Su}catch{}}e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yu,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mu(t))throw Error(r(200));return ru(e,t,null,n)},e.createRoot=function(e,t){if(!mu(e))throw Error(r(299));var n=!1,i=``,a=du;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=nu(e,1,!1,null,null,n,!1,i,a),e[Ki]=t.current,bi(e.nodeType===8?e.parentNode:e),new fu(t)},e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(r(188)):(e=Object.keys(e).join(`,`),Error(r(268,e)));return e=St(t),e=e===null?null:e.stateNode,e},e.flushSync=function(e){return wl(e)},e.hydrate=function(e,t,n){if(!hu(t))throw Error(r(200));return vu(null,e,t,!0,n)},e.hydrateRoot=function(e,t,n){if(!mu(e))throw Error(r(405));var i=n!=null&&n.hydratedSources||null,a=!1,o=``,s=du;if(n!=null&&(!0===n.unstable_strictMode&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=au(t,null,e,1,n??null,a,!1,o,s),e[Ki]=t.current,bi(e),i)for(e=0;e<i.length;e++)n=i[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new pu(t)},e.render=function(e,t,n){if(!hu(t))throw Error(r(200));return vu(null,e,t,!1,n)},e.unmountComponentAtNode=function(e){if(!hu(e))throw Error(r(40));return e._reactRootContainer?(wl(function(){vu(null,null,e,!1,function(){e._reactRootContainer=null,e[Ki]=null})}),!0):!1},e.unstable_batchedUpdates=Cl,e.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!hu(n))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return vu(e,t,n,!1,i)},e.version=`18.3.1-next-f1338f8080-20240426`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=m();e.createRoot=t.createRoot,e.hydrateRoot=t.hydrateRoot})),g=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),_=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),v={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},y=c(u()),b=(0,y.forwardRef)(({color:e=`currentColor`,size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>(0,y.createElement)(`svg`,{ref:c,...v,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:_(`lucide`,i),...s},[...o.map(([e,t])=>(0,y.createElement)(e,t)),...Array.isArray(a)?a:[a]])),x=(e,t)=>{let n=(0,y.forwardRef)(({className:n,...r},i)=>(0,y.createElement)(b,{ref:i,iconNode:t,className:_(`lucide-${g(e)}`,n),...r}));return n.displayName=`${e}`,n},ee=x(`ArrowLeft`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),S=x(`ArrowRight`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),C=x(`Award`,[[`path`,{d:`m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526`,key:`1yiouv`}],[`circle`,{cx:`12`,cy:`8`,r:`6`,key:`1vp47v`}]]),te=x(`BookCheck`,[[`path`,{d:`M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20`,key:`k3hazp`}],[`path`,{d:`m9 9.5 2 2 4-4`,key:`1dth82`}]]),ne=x(`BookMarked`,[[`path`,{d:`M10 2v8l3-3 3 3V2`,key:`sqw3rj`}],[`path`,{d:`M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20`,key:`k3hazp`}]]),re=x(`BookOpen`,[[`path`,{d:`M12 7v14`,key:`1akyts`}],[`path`,{d:`M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`,key:`ruj8y`}]]),ie=x(`Brain`,[[`path`,{d:`M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z`,key:`l5xja`}],[`path`,{d:`M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z`,key:`ep3f8r`}],[`path`,{d:`M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4`,key:`1p4c4q`}],[`path`,{d:`M17.599 6.5a3 3 0 0 0 .399-1.375`,key:`tmeiqw`}],[`path`,{d:`M6.003 5.125A3 3 0 0 0 6.401 6.5`,key:`105sqy`}],[`path`,{d:`M3.477 10.896a4 4 0 0 1 .585-.396`,key:`ql3yin`}],[`path`,{d:`M19.938 10.5a4 4 0 0 1 .585.396`,key:`1qfode`}],[`path`,{d:`M6 18a4 4 0 0 1-1.967-.516`,key:`2e4loj`}],[`path`,{d:`M19.967 17.484A4 4 0 0 1 18 18`,key:`159ez6`}]]),ae=x(`CalendarCheck2`,[[`path`,{d:`M8 2v4`,key:`1cmpym`}],[`path`,{d:`M16 2v4`,key:`4m81vk`}],[`path`,{d:`M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8`,key:`bce9hv`}],[`path`,{d:`M3 10h18`,key:`8toen8`}],[`path`,{d:`m16 20 2 2 4-4`,key:`13tcca`}]]),oe=x(`CalendarClock`,[[`path`,{d:`M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5`,key:`1osxxc`}],[`path`,{d:`M16 2v4`,key:`4m81vk`}],[`path`,{d:`M8 2v4`,key:`1cmpym`}],[`path`,{d:`M3 10h5`,key:`r794hk`}],[`path`,{d:`M17.5 17.5 16 16.3V14`,key:`akvzfd`}],[`circle`,{cx:`16`,cy:`16`,r:`6`,key:`qoo3c4`}]]),se=x(`ChartColumn`,[[`path`,{d:`M3 3v16a2 2 0 0 0 2 2h16`,key:`c24i48`}],[`path`,{d:`M18 17V9`,key:`2bz60n`}],[`path`,{d:`M13 17V5`,key:`1frdt8`}],[`path`,{d:`M8 17v-3`,key:`17ska0`}]]),ce=x(`Check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),le=x(`CircleCheck`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),w=x(`CircleX`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m15 9-6 6`,key:`1uzhvr`}],[`path`,{d:`m9 9 6 6`,key:`z0biqf`}]]),ue=x(`ClipboardCheck`,[[`rect`,{width:`8`,height:`4`,x:`8`,y:`2`,rx:`1`,ry:`1`,key:`tgr4d6`}],[`path`,{d:`M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2`,key:`116196`}],[`path`,{d:`m9 14 2 2 4-4`,key:`df797q`}]]),de=x(`Clock3`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`polyline`,{points:`12 6 12 12 16.5 12`,key:`1aq6pp`}]]),fe=x(`Download`,[[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`polyline`,{points:`7 10 12 15 17 10`,key:`2ggqvy`}],[`line`,{x1:`12`,x2:`12`,y1:`15`,y2:`3`,key:`1vk2je`}]]),pe=x(`Eye`,[[`path`,{d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,key:`1nclc0`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),T=x(`Flame`,[[`path`,{d:`M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z`,key:`96xj49`}]]),me=x(`Gauge`,[[`path`,{d:`m12 14 4-4`,key:`9kzdfg`}],[`path`,{d:`M3.34 19a10 10 0 1 1 17.32 0`,key:`19p75a`}]]),he=x(`Gem`,[[`path`,{d:`M6 3h12l4 6-10 13L2 9Z`,key:`1pcd5k`}],[`path`,{d:`M11 3 8 9l4 13 4-13-3-6`,key:`1fcu3u`}],[`path`,{d:`M2 9h20`,key:`16fsjt`}]]),ge=x(`Gift`,[[`rect`,{x:`3`,y:`8`,width:`18`,height:`4`,rx:`1`,key:`bkv52`}],[`path`,{d:`M12 8v13`,key:`1c76mn`}],[`path`,{d:`M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7`,key:`6wjy6b`}],[`path`,{d:`M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5`,key:`1ihvrl`}]]),_e=x(`Inbox`,[[`polyline`,{points:`22 12 16 12 14 15 10 15 8 12 2 12`,key:`o97t9d`}],[`path`,{d:`M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z`,key:`oot6mr`}]]),ve=x(`Layers`,[[`path`,{d:`M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z`,key:`zw3jo`}],[`path`,{d:`M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12`,key:`1wduqc`}],[`path`,{d:`M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17`,key:`kqbvx6`}]]),ye=x(`LibraryBig`,[[`rect`,{width:`8`,height:`18`,x:`3`,y:`3`,rx:`1`,key:`oynpb5`}],[`path`,{d:`M7 3v18`,key:`bbkbws`}],[`path`,{d:`M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z`,key:`1qboyk`}]]),be=x(`ListChecks`,[[`path`,{d:`m3 17 2 2 4-4`,key:`1jhpwq`}],[`path`,{d:`m3 7 2 2 4-4`,key:`1obspn`}],[`path`,{d:`M13 6h8`,key:`15sg57`}],[`path`,{d:`M13 12h8`,key:`h98zly`}],[`path`,{d:`M13 18h8`,key:`oe0vm4`}]]),xe=x(`ListFilter`,[[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M7 12h10`,key:`b7w52i`}],[`path`,{d:`M10 18h4`,key:`1ulq68`}]]),Se=x(`NotebookTabs`,[[`path`,{d:`M2 6h4`,key:`aawbzj`}],[`path`,{d:`M2 10h4`,key:`l0bgd4`}],[`path`,{d:`M2 14h4`,key:`1gsvsf`}],[`path`,{d:`M2 18h4`,key:`1bu2t1`}],[`rect`,{width:`16`,height:`20`,x:`4`,y:`2`,rx:`2`,key:`1nb95v`}],[`path`,{d:`M15 2v20`,key:`dcj49h`}],[`path`,{d:`M15 7h5`,key:`1xj5lc`}],[`path`,{d:`M15 12h5`,key:`w5shd9`}],[`path`,{d:`M15 17h5`,key:`1qaofu`}]]),Ce=x(`Plus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]),we=x(`RefreshCcw`,[[`path`,{d:`M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`14sxne`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}],[`path`,{d:`M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16`,key:`1hlbsb`}],[`path`,{d:`M16 16h5v5`,key:`ccwih5`}]]),Te=x(`Repeat2`,[[`path`,{d:`m2 9 3-3 3 3`,key:`1ltn5i`}],[`path`,{d:`M13 18H7a2 2 0 0 1-2-2V6`,key:`1r6tfw`}],[`path`,{d:`m22 15-3 3-3-3`,key:`4rnwn2`}],[`path`,{d:`M11 6h6a2 2 0 0 1 2 2v10`,key:`2f72bc`}]]),Ee=x(`RotateCcw`,[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`1357e3`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}]]),De=x(`Settings`,[[`path`,{d:`M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z`,key:`1qme2f`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),Oe=x(`ShoppingBag`,[[`path`,{d:`M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z`,key:`hou9p0`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M16 10a4 4 0 0 1-8 0`,key:`1ltviw`}]]),ke=x(`Swords`,[[`polyline`,{points:`14.5 17.5 3 6 3 3 6 3 17.5 14.5`,key:`1hfsw2`}],[`line`,{x1:`13`,x2:`19`,y1:`19`,y2:`13`,key:`1vrmhu`}],[`line`,{x1:`16`,x2:`20`,y1:`16`,y2:`20`,key:`1bron3`}],[`line`,{x1:`19`,x2:`21`,y1:`21`,y2:`19`,key:`13pww6`}],[`polyline`,{points:`14.5 6.5 18 3 21 3 21 6 17.5 9.5`,key:`hbey2j`}],[`line`,{x1:`5`,x2:`9`,y1:`14`,y2:`18`,key:`1hf58s`}],[`line`,{x1:`7`,x2:`4`,y1:`17`,y2:`20`,key:`pidxm4`}],[`line`,{x1:`3`,x2:`5`,y1:`19`,y2:`21`,key:`1pehsh`}]]),Ae=x(`Target`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`circle`,{cx:`12`,cy:`12`,r:`6`,key:`1vlfrh`}],[`circle`,{cx:`12`,cy:`12`,r:`2`,key:`1c9p78`}]]),je=x(`ThumbsDown`,[[`path`,{d:`M17 14V2`,key:`8ymqnk`}],[`path`,{d:`M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z`,key:`m61m77`}]]),Me=x(`ThumbsUp`,[[`path`,{d:`M7 10v12`,key:`1qc93n`}],[`path`,{d:`M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z`,key:`emmmcr`}]]),Ne=x(`TrendingUp`,[[`polyline`,{points:`22 7 13.5 15.5 8.5 10.5 2 17`,key:`126l90`}],[`polyline`,{points:`16 7 22 7 22 13`,key:`kwv8wd`}]]),Pe=x(`Upload`,[[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`polyline`,{points:`17 8 12 3 7 8`,key:`t8dd8p`}],[`line`,{x1:`12`,x2:`12`,y1:`3`,y2:`15`,key:`widbto`}]]),Fe=x(`UserRound`,[[`circle`,{cx:`12`,cy:`8`,r:`5`,key:`1hypcn`}],[`path`,{d:`M20 21a8 8 0 0 0-16 0`,key:`rfgkzh`}]]),Ie=x(`Volume2`,[[`path`,{d:`M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`,key:`uqj9uw`}],[`path`,{d:`M16 9a5 5 0 0 1 0 6`,key:`1q6k2b`}],[`path`,{d:`M19.364 18.364a9 9 0 0 0 0-12.728`,key:`ijwkga`}]]),Le=o((e=>{var t=u(),n=Symbol.for(`react.element`),r=Symbol.for(`react.fragment`),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var s,c={},l=null,u=null;for(s in r!==void 0&&(l=``+r),t.key!==void 0&&(l=``+t.key),t.ref!==void 0&&(u=t.ref),t)i.call(t,s)&&!o.hasOwnProperty(s)&&(c[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)c[s]===void 0&&(c[s]=t[s]);return{$$typeof:n,type:e,key:l,ref:u,props:c,_owner:a.current}}e.Fragment=r,e.jsx=s,e.jsxs=s})),Re=o(((e,t)=>{t.exports=Le()})),ze=c(h(),1),E=Re(),Be=[{route:`dashboard`,label:`首页`,icon:se},{route:`units`,label:`单元`,icon:re},{route:`review`,label:`复习`,icon:we},{route:`monster`,label:`打怪`,icon:ke},{route:`profile`,label:`我的`,icon:Fe}];function Ve({current:e,onNavigate:t}){return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(`nav`,{className:`fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-[#f8fbff]/95 px-2 pb-[max(env(safe-area-inset-bottom),8px)] pt-2 shadow-[0_-8px_20px_rgba(25,33,44,0.06)] backdrop-blur md:hidden`,children:(0,E.jsx)(`div`,{className:`mx-auto grid max-w-xl grid-cols-5 gap-1`,children:Be.map(n=>{let r=n.icon;return(0,E.jsxs)(`button`,{type:`button`,onClick:()=>t(n.route),className:`grid min-h-12 place-items-center rounded-lg border text-xs transition ${e===n.route?`border-harbor/20 bg-white text-harbor`:`border-transparent text-slate-500 hover:bg-white`}`,title:n.label,children:[(0,E.jsx)(r,{size:18,"aria-hidden":`true`}),(0,E.jsx)(`span`,{children:n.label})]},n.route)})})}),(0,E.jsx)(`nav`,{className:`hidden items-center gap-2 md:flex`,children:Be.map(n=>{let r=n.icon;return(0,E.jsxs)(`button`,{type:`button`,onClick:()=>t(n.route),className:`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition ${e===n.route?`border-harbor/20 bg-white text-harbor shadow-sm`:`border-transparent text-slate-600 hover:bg-white`}`,children:[(0,E.jsx)(r,{size:16,"aria-hidden":`true`}),n.label]},n.route)})})]})}function He({current:e,onNavigate:t,children:n}){return(0,E.jsxs)(`div`,{className:`min-h-screen bg-app text-ink`,children:[(0,E.jsx)(`header`,{className:`sticky top-0 z-30 border-b border-slate-200 bg-[#f8fbff]/95 backdrop-blur`,children:(0,E.jsxs)(`div`,{className:`mx-auto flex max-w-[1100px] items-center justify-between px-4 py-3 md:px-6`,children:[(0,E.jsxs)(`button`,{type:`button`,onClick:()=>t(`dashboard`),className:`flex items-center gap-3 text-left`,children:[(0,E.jsx)(`span`,{className:`grid h-9 w-9 place-items-center rounded-lg border border-ink/15 bg-ink text-paper`,children:(0,E.jsx)(ne,{size:20,"aria-hidden":`true`})}),(0,E.jsxs)(`span`,{children:[(0,E.jsx)(`span`,{className:`block text-lg font-semibold leading-none`,children:`Reword`}),(0,E.jsx)(`span`,{className:`text-xs text-slate-500`,children:`2027考研英语红宝书`})]})]}),(0,E.jsx)(Ve,{current:e,onNavigate:t})]})}),(0,E.jsx)(`main`,{className:`mx-auto max-w-[1100px] px-4 pb-28 pt-5 md:px-6 md:pb-10`,children:n})]})}function Ue({reward:e}){return e?(0,E.jsxs)(`div`,{className:`rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800`,children:[(0,E.jsx)(`strong`,{children:e.title}),` +`,e.xp,` XP +`,e.coins,` 金币`]}):null}function We({achievement:e,stats:t}){return(0,E.jsxs)(`div`,{className:`rounded-lg border p-4 ${t.checkedAchievementIds.includes(e.id)?`border-spruce/30 bg-spruce/10`:`border-slate-200 bg-white`}`,children:[(0,E.jsx)(`div`,{className:`font-semibold text-ink`,children:e.title}),(0,E.jsx)(`div`,{className:`mt-1 text-sm text-slate-500`,children:e.description}),(0,E.jsxs)(`div`,{className:`mt-3 text-xs font-semibold text-harbor`,children:[`XP `,e.rewardXp,` / 金币 `,e.rewardCoins]})]})}function D(e=new Date){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}function Ge(e,t){let n=new Date(e);return n.setDate(n.getDate()+t),n}function Ke(e,t=new Date){return e?e===D(Ge(t,-1)):!1}function qe(e,t=new Date){return!!(e&&e===D(t))}function Je(e){let t=Math.floor(e/60),n=Math.floor(t/60),r=t%60;return n<=0?`${t}分钟`:`${n}小时${r?`${r}分钟`:``}`}function Ye(e,t=new Date){return Array.from({length:e},(n,r)=>D(Ge(t,r-e+1)))}function Xe(e,t=new Date){let n=new Date(`${e}T00:00:00`),r=new Date(t),i=r.getDay()||7;r.setDate(r.getDate()-i+1),r.setHours(0,0,0,0);let a=Ge(r,7);return n>=r&&n<a}function Ze(e,t=new Date){let n=new Date(`${e}T00:00:00`);return n.getFullYear()===t.getFullYear()&&n.getMonth()===t.getMonth()}var Qe={xp:300,coins:120,monsterPoints:300};function $e(e){return Math.floor(Math.sqrt(e/100))+1}function et(e){return e<=3?`入门背词者`:e<=6?`稳定学习者`:e<=10?`复习执行者`:e<=15?`考研单词斗士`:e<=20?`长期主义者`:`红宝书征服者`}function tt(e){return e*e*100}function nt(e,t){if(!t)return e;let n=new Date().toISOString();return e.find(e=>e.itemId===t)?e.map(e=>e.itemId===t?{...e,count:e.count+1}:e):[...e,{itemId:t,count:1,obtainedAt:n}]}function rt(e,t){let n=D(),r=e.dailyRewardCaps[n]||{xp:0,coins:0,monsterPoints:0},i=t.xp||0,a=t.coins||0,o=t.monsterPoints||0,s=t.bypassDailyCap?i:Math.max(0,Math.min(i,Qe.xp-r.xp)),c=t.bypassDailyCap?a:Math.max(0,Math.min(a,Qe.coins-r.coins)),l=t.bypassDailyCap?o:Math.max(0,Math.min(o,Qe.monsterPoints-r.monsterPoints)),u={id:`reward-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:t.type,title:t.title,description:t.description,xp:s,coins:c,createdAt:new Date().toISOString()},d=e.totalXp+s;return{...e,totalXp:d,level:$e(d),coins:e.coins+c,diamonds:e.diamonds+(t.diamonds||0),monsterPoints:e.monsterPoints+l,inventory:nt(e.inventory,t.itemId),rewardHistory:[u,...e.rewardHistory].slice(0,200),dailyRewardCaps:{...e.dailyRewardCaps,[n]:{xp:r.xp+(t.bypassDailyCap?0:s),coins:r.coins+(t.bypassDailyCap?0:c),monsterPoints:r.monsterPoints+(t.bypassDailyCap?0:l)}}}}var it=`reword-progress-v1`,at=`reword-user-stats-v1`;function ot(e){return{wordId:e,learned:!1,stage:0,knownCount:0,fuzzyCount:0,forgottenCount:0,correctCount:0,wrongCount:0,reviewHistory:[]}}function st(e,t,n=new Date){return{...e,reviewHistory:[...e.reviewHistory,{action:t,at:n.toISOString(),stage:e.stage}].slice(-200)}}function ct(){return typeof window<`u`&&`localStorage`in window}function lt(){if(!ct())return{};let e=window.localStorage.getItem(it);if(!e)return{};try{let t=JSON.parse(e);return t&&typeof t==`object`?t:{}}catch{return{}}}function ut(e){ct()&&window.localStorage.setItem(it,JSON.stringify(e))}function dt(){ct()&&(window.localStorage.removeItem(it),window.localStorage.removeItem(at))}function ft(){return JSON.stringify({progress:lt(),userStats:gt()},null,2)}function pt(e){let t=JSON.parse(e);if(!t||typeof t!=`object`)throw Error(`进度文件格式不正确`);let n=t,r=n.progress||t;return ut(r),n.userStats&&_t(ht(n.userStats)),r}function mt(){return{totalStudyDays:0,currentStreak:0,longestStreak:0,signInStreak:0,lastSignInDate:null,lastCheckInDate:null,totalStudyMinutes:0,totalWordsLearned:0,totalWordsReviewed:0,totalQuizCount:0,totalCorrectCount:0,totalWrongCount:0,totalXp:0,level:1,coins:0,diamonds:0,monsterPoints:0,defeatedMonsters:0,unlockedItems:[`theme-default`,`avatar-default`],equippedTheme:`theme-default`,equippedAvatar:`avatar-default`,checkedAchievementIds:[],defeatedWordIds:[],defeatedBossIds:[],dailyRewardCaps:{},checkInHistory:[],studySessions:[],rewardHistory:[],inventory:[],audioSettings:{autoPlayOnStudy:!1,autoPlayOnRecall:!1,defaultAccent:`us`,speechRate:1,repeatCount:1}}}function ht(e){let t=mt();return{...t,...e,audioSettings:{...t.audioSettings,...e.audioSettings},dailyRewardCaps:e.dailyRewardCaps||{},checkInHistory:e.checkInHistory||[],studySessions:e.studySessions||[],rewardHistory:e.rewardHistory||[],inventory:e.inventory||[],unlockedItems:e.unlockedItems||t.unlockedItems,checkedAchievementIds:e.checkedAchievementIds||[],defeatedWordIds:e.defeatedWordIds||[],defeatedBossIds:e.defeatedBossIds||[],level:Math.floor(Math.sqrt((e.totalXp||0)/100))+1}}function gt(){if(!ct())return mt();let e=window.localStorage.getItem(at);if(!e)return mt();try{return ht(JSON.parse(e))}catch{return mt()}}function _t(e){ct()&&window.localStorage.setItem(at,JSON.stringify({...e,level:Math.floor(Math.sqrt(e.totalXp/100))+1}))}var vt=[{stage:1,label:`5分钟`,ms:300*1e3},{stage:2,label:`30分钟`,ms:1800*1e3},{stage:3,label:`12小时`,ms:720*60*1e3},{stage:4,label:`1天`,ms:1440*60*1e3},{stage:5,label:`2天`,ms:2880*60*1e3},{stage:6,label:`4天`,ms:5760*60*1e3},{stage:7,label:`7天`,ms:10080*60*1e3},{stage:8,label:`15天`,ms:360*60*60*1e3}];function yt(e){return vt.find(t=>t.stage===e)||vt[0]}function bt(e,t){return{...e,learned:!0,firstLearnedAt:e.firstLearnedAt||t.toISOString(),lastReviewedAt:t.toISOString()}}function xt(e,t=new Date){let n=yt(Math.max(1,Math.min(e,8)));return new Date(t.getTime()+n.ms).toISOString()}function St(e,t=new Date){return st({...bt(e,t),nextReviewAt:xt(1,t)},`learned`,t)}function Ct(e,t=new Date){let n=Math.min(8,e.stage+1);return st({...bt(e,t),stage:n,knownCount:e.knownCount+1,nextReviewAt:xt(n,t)},`known`,t)}function wt(e,t=new Date){return st({...bt(e,t),fuzzyCount:e.fuzzyCount+1,nextReviewAt:new Date(t.getTime()+1800*1e3).toISOString()},`fuzzy`,t)}function Tt(e,t=new Date){return st({...bt(e,t),stage:0,forgottenCount:e.forgottenCount+1,nextReviewAt:xt(1,t)},`forgotten`,t)}function Et(e,t=new Date){return!e?.learned||!e.nextReviewAt?!1:new Date(e.nextReviewAt).getTime()<=t.getTime()}function Dt(e){return!!(e&&e.stage>=8&&e.correctCount>=2)}function O(e,t,n=new Date){return e.filter(e=>Et(t[e.id],n)).sort((e,n)=>new Date(t[e.id]?.nextReviewAt||0).getTime()-new Date(t[n.id]?.nextReviewAt||0).getTime())}function Ot(e,t){return e.filter(e=>Dt(t[e.id]))}function kt(e,t){return e.filter(e=>{let n=t[e.id];return!!(n&&n.fuzzyCount>0&&!Dt(n))})}function At(e,t){return e.filter(e=>(t[e.id]?.wrongCount||0)>0)}function jt(e,t=new Date){if(!e)return!1;let n=new Date(e);return n.getFullYear()===t.getFullYear()&&n.getMonth()===t.getMonth()&&n.getDate()===t.getDate()}function Mt(e,t=new Date){let n=new Set;Object.values(e).forEach(e=>{e.reviewHistory.forEach(e=>n.add(e.at.slice(0,10))),e.firstLearnedAt&&n.add(e.firstLearnedAt.slice(0,10))});let r=0,i=new Date(t);for(;n.has(i.toISOString().slice(0,10));)r+=1,i.setDate(i.getDate()-1);return r}function Nt(e,t,n=new Date){let r=O(e,t,n),i=Ot(e,t),a=kt(e,t),o=At(e,t),s=e.filter(e=>t[e.id]?.learned),c=s.filter(e=>jt(t[e.id]?.firstLearnedAt,n)),l=e.filter(e=>(t[e.id]?.forgottenCount||0)>0).length;return{dueCount:r.length,todayNewCount:c.length,totalCount:e.length,learnedCount:s.length,masteredCount:i.length,weakCount:a.length,wrongCount:o.length,forgottenCount:l,streak:Mt(t,n),progressPercent:e.length?Math.round(i.length/e.length*100):0}}var Pt=[{id:`first-word`,title:`第一次学习`,description:`完成第一个单词`,rewardXp:20,rewardCoins:8},{id:`first-correct`,title:`初战告捷`,description:`第一次测试答对`,rewardXp:20,rewardCoins:8},{id:`unit1-20`,title:`Unit1 入门`,description:`Unit1 学习 20 个单词`,rewardXp:40,rewardCoins:15},{id:`hundred-mastered`,title:`百词斩`,description:`掌握 100 个单词`,rewardXp:120,rewardCoins:50,rewardDiamonds:1},{id:`seven-checkin`,title:`七日坚持`,description:`连续打卡 7 天`,rewardXp:90,rewardCoins:30},{id:`thirty-checkin`,title:`长期主义者`,description:`连续打卡 30 天`,rewardXp:220,rewardCoins:80,rewardDiamonds:2}];function Ft(e,t,n){let r=t.filter(e=>n[e.id]?.learned).length,i=Object.values(n).reduce((e,t)=>e+t.correctCount,0),a=t.filter(e=>e.unitId===`unit1`&&n[e.id]?.learned).length,o=t.filter(e=>Dt(n[e.id])).length,s={"first-word":r>=1,"first-correct":i>=1,"unit1-20":a>=20,"hundred-mastered":o>=100,"seven-checkin":e.currentStreak>=7||e.longestStreak>=7,"thirty-checkin":e.currentStreak>=30||e.longestStreak>=30};return Pt.filter(e=>s[e.id])}function It(e,t,n){let r=e;return Ft(e,t,n).forEach(e=>{r.checkedAchievementIds.includes(e.id)||(r=rt({...r,checkedAchievementIds:[...r.checkedAchievementIds,e.id]},{type:`achievement`,title:e.title,description:e.description,xp:e.rewardXp,coins:e.rewardCoins,diamonds:e.rewardDiamonds,itemId:`badge-${e.id}`,bypassDailyCap:!0}))}),r}function Lt({stats:e,words:t,progressMap:n}){let r=new Set(Ft(e,t,n).map(e=>e.id));return(0,E.jsxs)(`div`,{className:`space-y-5`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Achievements`}),(0,E.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`成就徽章`})]}),(0,E.jsx)(`div`,{className:`grid gap-4 md:grid-cols-2 lg:grid-cols-3`,children:Pt.map(t=>(0,E.jsx)(`div`,{className:!r.has(t.id)&&!e.checkedAchievementIds.includes(t.id)?`opacity-60`:``,children:(0,E.jsx)(We,{achievement:t,stats:e})},t.id))})]})}function Rt(e,t,n,r=new Date){let i=D(r),a=e.filter(e=>t[e.id]?.firstLearnedAt?.slice(0,10)===i).length,o=e.filter(e=>t[e.id]?.lastReviewedAt?.slice(0,10)===i&&t[e.id]?.learned).length,s=n.studySessions.filter(e=>e.date===i).reduce((e,t)=>e+t.durationSeconds,0),c=n.studySessions.filter(e=>e.date===i&&e.mode===`quiz`&&e.wordCount>=20).reduce((e,t)=>e+t.wordCount,0),l=e.filter(e=>Et(t[e.id],r)).length;return{newWords:a,reviewedWords:o,studyMinutes:Math.floor(s/60),testCount:c,dueLeft:l}}function zt(e,t,n,r=new Date){let i=Rt(e,t,n,r);return[{id:`new-words`,title:`学习 10 个新单词`,current:i.newWords,target:10,reward:`XP 30 / 金币 12`},{id:`review`,title:`完成 20 个复习`,current:i.reviewedWords,target:20,reward:`XP 40 / 金币 16`},{id:`quiz`,title:`完成一次 20 题测试`,current:i.testCount,target:20,reward:`XP 35 / 金币 10`},{id:`time`,title:`学习满 15 分钟`,current:i.studyMinutes,target:15,reward:`XP 20 / 金币 10`}]}function Bt(e,t,n,r=new Date){return qe(n.lastCheckInDate,r)?!1:zt(e,t,n,r).some(e=>e.current>=e.target)}function Vt(e,t=new Date){let n=D(t);if(qe(e.lastSignInDate,t))return e;let r=Ke(e.lastSignInDate,t)?e.signInStreak+1:1,i=2,a;return r%30==0?(i+=80,a=`theme-morning`):r%14==0?(i+=30,a=`tool-review-boost`):r%7==0?(i+=15,a=`tool-focus-card`):r%3==0&&(i+=5),rt({...e,signInStreak:r,lastSignInDate:n},{type:`signin`,title:`每日签到`,description:`连续签到 ${r} 天`,xp:5,coins:i,itemId:a,bypassDailyCap:!0})}function Ht(e,t=new Date){let n=D(t);if(qe(e.lastCheckInDate,t))return e;let r=Ke(e.lastCheckInDate,t)?e.currentStreak+1:1,i=20,a=50,o=0,s;return[7,14,30,100].includes(r)&&(o+=1),r===3&&(i+=10),r===7&&(i+=30,s=`badge-seven-days`),r===14&&(a+=80,s=`tool-review-boost`),r===30&&(a+=200,i+=80,s=`avatar-thirty-days`),r===100&&(a+=800,i+=300,s=`badge-longterm`),rt({...e,currentStreak:r,longestStreak:Math.max(e.longestStreak,r),totalStudyDays:e.checkInHistory.some(e=>e.date===n)?e.totalStudyDays:e.totalStudyDays+1,lastCheckInDate:n,checkInHistory:[{date:n,checkedAt:t.toISOString(),streakDay:r,rewardCoins:i,rewardXp:a,rewardItem:s},...e.checkInHistory].slice(0,365)},{type:`checkin`,title:`完成今日打卡`,description:`连续打卡 ${r} 天`,xp:a,coins:i,diamonds:o,itemId:s,bypassDailyCap:!0})}function Ut(e,t=new Date){let n=new Date(t.getFullYear(),t.getMonth(),1),r=new Date(t.getFullYear(),t.getMonth()+1,0),i=new Set(e.checkInHistory.map(e=>e.date));return Array.from({length:r.getDate()},(e,r)=>{let a=D(Ge(n,r));return{date:a,day:r+1,checked:i.has(a),today:a===D(t)}})}function Wt({stats:e}){return(0,E.jsx)(`div`,{className:`grid grid-cols-7 gap-2`,children:Ut(e).map(e=>(0,E.jsx)(`div`,{className:`grid h-10 place-items-center rounded-lg border text-sm ${e.checked?`border-spruce/30 bg-spruce/10 font-semibold text-spruce`:e.today?`border-harbor bg-white text-harbor`:`border-slate-200 bg-[#f8fbff] text-slate-500`}`,children:e.day},e.date))})}function Gt({value:e,max:t=100,label:n}){let r=t===0?0:Math.min(100,Math.round(e/t*100));return(0,E.jsxs)(`div`,{className:`space-y-2`,children:[n?(0,E.jsxs)(`div`,{className:`flex items-center justify-between text-xs text-slate-500`,children:[(0,E.jsx)(`span`,{children:n}),(0,E.jsxs)(`span`,{children:[r,`%`]})]}):null,(0,E.jsx)(`div`,{className:`h-2 overflow-hidden rounded-full bg-slate-200`,children:(0,E.jsx)(`div`,{className:`h-full rounded-full bg-harbor transition-all duration-500`,style:{width:`${r}%`}})})]})}function Kt({words:e,progressMap:t,stats:n,onSignIn:r,onCheckIn:i}){let a=zt(e,t,n),o=D(),s=n.lastSignInDate===o,c=n.lastCheckInDate===o,l=Bt(e,t,n);return(0,E.jsxs)(`div`,{className:`space-y-5`,children:[(0,E.jsx)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:(0,E.jsxs)(`div`,{className:`flex flex-wrap items-start justify-between gap-4`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Check In`}),(0,E.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`打卡中心`}),(0,E.jsx)(`p`,{className:`mt-2 text-sm text-slate-500`,children:`签到是轻量奖励，打卡需要完成学习目标。`})]}),(0,E.jsxs)(`div`,{className:`flex gap-3`,children:[(0,E.jsxs)(`button`,{type:`button`,onClick:r,disabled:s,className:`btn-secondary disabled:opacity-40`,children:[(0,E.jsx)(ge,{size:18,"aria-hidden":`true`}),s?`今日已签到`:`每日签到`]}),(0,E.jsxs)(`button`,{type:`button`,onClick:i,disabled:!l||c,className:`btn-primary disabled:opacity-40`,children:[(0,E.jsx)(le,{size:18,"aria-hidden":`true`}),c?`今日已打卡`:l?`完成今日打卡`:`未达成打卡条件`]})]})]})}),(0,E.jsxs)(`section`,{className:`grid gap-4 lg:grid-cols-[1fr_0.8fr]`,children:[(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,E.jsx)(`h2`,{className:`font-semibold text-ink`,children:`今日任务`}),(0,E.jsx)(`div`,{className:`mt-4 space-y-4`,children:a.map(e=>(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-[#f8fbff] p-4`,children:[(0,E.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,E.jsx)(`div`,{className:`font-semibold text-ink`,children:e.title}),(0,E.jsxs)(`div`,{className:`text-sm text-slate-500`,children:[Math.min(e.current,e.target),` / `,e.target]})]}),(0,E.jsx)(`div`,{className:`mt-3`,children:(0,E.jsx)(Gt,{value:e.current,max:e.target,label:e.reward})})]},e.id))})]}),(0,E.jsxs)(`div`,{className:`space-y-4`,children:[(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,E.jsx)(`h2`,{className:`font-semibold text-ink`,children:`连续记录`}),(0,E.jsxs)(`div`,{className:`mt-4 grid grid-cols-2 gap-3 text-center`,children:[(0,E.jsxs)(`div`,{className:`rounded-lg bg-[#f8fbff] p-4`,children:[(0,E.jsx)(`div`,{className:`text-2xl font-semibold text-harbor`,children:n.currentStreak}),(0,E.jsx)(`div`,{className:`text-sm text-slate-500`,children:`连续打卡`})]}),(0,E.jsxs)(`div`,{className:`rounded-lg bg-[#f8fbff] p-4`,children:[(0,E.jsx)(`div`,{className:`text-2xl font-semibold text-harbor`,children:n.longestStreak}),(0,E.jsx)(`div`,{className:`text-sm text-slate-500`,children:`最长连续`})]})]})]}),(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,E.jsx)(`h2`,{className:`mb-4 font-semibold text-ink`,children:`本月打卡`}),(0,E.jsx)(Wt,{stats:n})]})]})]})]})}function qt({stats:e}){return(0,E.jsxs)(`div`,{className:`flex flex-wrap gap-2 text-sm`,children:[(0,E.jsxs)(`span`,{className:`rounded-lg border border-amber-200 bg-amber-50 px-3 py-1.5 font-semibold text-amber-700`,children:[`金币 `,e.coins]}),(0,E.jsxs)(`span`,{className:`inline-flex items-center gap-1 rounded-lg border border-sky-200 bg-sky-50 px-3 py-1.5 font-semibold text-sky-700`,children:[(0,E.jsx)(he,{size:15,"aria-hidden":`true`}),`钻石 `,e.diamonds]}),(0,E.jsxs)(`span`,{className:`inline-flex items-center gap-1 rounded-lg border border-violet-200 bg-violet-50 px-3 py-1.5 font-semibold text-violet-700`,children:[(0,E.jsx)(ke,{size:15,"aria-hidden":`true`}),`打怪 `,e.monsterPoints]})]})}function Jt({stats:e}){let t=(e.level-1)*(e.level-1)*100,n=tt(e.level),r=e.totalXp-t,i=Math.max(1,n-t);return(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-soft`,children:[(0,E.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`text-sm text-slate-500`,children:`当前等级`}),(0,E.jsxs)(`div`,{className:`text-2xl font-semibold text-ink`,children:[`Lv.`,e.level]})]}),(0,E.jsx)(`div`,{className:`text-right text-sm font-semibold text-harbor`,children:et(e.level)})]}),(0,E.jsx)(`div`,{className:`mt-4`,children:(0,E.jsx)(Gt,{value:r,max:i,label:`XP ${e.totalXp}，距离下一级 ${Math.max(0,n-e.totalXp)}`})})]})}function Yt(){return(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,E.jsx)(`div`,{className:`mb-4 flex items-end justify-between gap-4`,children:(0,E.jsx)(`div`,{children:(0,E.jsx)(`h2`,{className:`text-lg font-semibold text-ink`,children:`艾宾浩斯复习时间轴`})})}),(0,E.jsx)(`div`,{className:`grid gap-3 sm:grid-cols-2 lg:grid-cols-4`,children:vt.map(e=>(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-[#f8fbff] p-3`,children:[(0,E.jsxs)(`div`,{className:`text-xs text-slate-500`,children:[`Stage `,e.stage]}),(0,E.jsx)(`div`,{className:`mt-1 font-semibold text-harbor`,children:e.label})]},e.stage))})]})}var Xt={current:`bg-harbor/10 text-harbor`,spruce:`bg-spruce/10 text-spruce`,copper:`bg-copper/10 text-copper`,slate:`bg-slate-200 text-slate-700`};function Zt({label:e,value:t,tone:n=`current`,icon:r}){return(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-3 shadow-soft`,children:[(0,E.jsx)(`div`,{className:`mb-3 grid h-8 w-8 place-items-center rounded-md ${Xt[n]}`,children:(0,E.jsx)(r,{size:18,"aria-hidden":`true`})}),(0,E.jsx)(`div`,{className:`text-2xl font-semibold leading-none text-ink`,children:t}),(0,E.jsx)(`div`,{className:`mt-1 text-sm text-slate-500`,children:e})]})}var Qt=new Date(`2026-12-19T14:00:00+08:00`),k=[`坚持就是胜利，重复就是答案。`,`今天多记一轮，考场少慌一分。`,`背词不是拼爆发，是把每天的重复做稳。`,`看似慢的复习，最后会变成最快的提分。`];function $t(e=new Date){let t=Math.max(0,Qt.getTime()-e.getTime()),n=Math.floor(t/36e5);return{days:Math.floor(t/864e5),hours:n%24,minutes:Math.floor(t/6e4)%60,expired:t===0}}function en(e=new Date){return k[Math.floor(e.getTime()/864e5)%k.length]}function tn(e,t,n=0){let r=new Date;return{id:`session-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,date:D(r),startedAt:r.toISOString(),endedAt:r.toISOString(),durationSeconds:0,mode:e,unitId:t,wordCount:n}}function nn(e,t){if(t.durationSeconds<30)return e;let n=Math.floor(t.durationSeconds/60);return{...e,totalStudyMinutes:e.totalStudyMinutes+n,studySessions:[t,...e.studySessions].slice(0,500)}}function rn(e){let t=D(),n=an(e.studySessions.filter(e=>e.date===t)),r=an(e.studySessions.filter(e=>Xe(e.date))),i=an(e.studySessions.filter(e=>Ze(e.date))),a=e.totalStudyMinutes*60,o=new Set(e.studySessions.map(e=>e.date)).size||1,s=Math.max(0,...e.studySessions.map(e=>e.durationSeconds)),c=e.studySessions.reduce((e,t)=>(e[t.mode]=(e[t.mode]||0)+t.durationSeconds,e),{});return{todaySeconds:n,weekSeconds:r,monthSeconds:i,totalSeconds:a,averageSeconds:Math.floor(a/o),longestSeconds:s,modeTotals:c}}function an(e){return e.reduce((e,t)=>e+t.durationSeconds,0)}function on(e,t){return Ye(t).map(t=>({date:t,seconds:an(e.studySessions.filter(e=>e.date===t))}))}function sn(e,t){let n=e.reduce((e,n)=>{let r=e[n.unitName]||{total:0,mastered:0};return r.total+=1,Dt(t[n.id])&&(r.mastered+=1),e[n.unitName]=r,e},{});return Object.entries(n).map(([e,t])=>({unitName:e,...t,percent:t.total?Math.round(t.mastered/t.total*100):0})).sort((e,t)=>t.percent-e.percent)}function cn(e){if(!e)return`未安排`;let t=new Date(e);return Number.isNaN(t.getTime())?`未安排`:new Intl.DateTimeFormat(`zh-CN`,{month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`}).format(t)}function ln(e){return e?.learned?Dt(e)?`已掌握`:Et(e)?`待复习`:e.fuzzyCount>0?`需巩固`:`学习中`:`未学习`}function un(e,t){return{learned:e.filter(e=>t[e.id]?.learned).length,mastered:e.filter(e=>Dt(t[e.id])).length,due:e.filter(e=>Et(t[e.id])).length}}function dn({units:e,words:t,progressMap:n,stats:r,onSignIn:i,onNavigateReview:a,onNavigateUnits:o,onNavigateCheckIn:s,onNavigateMonster:c,onNavigateShop:l,onNavigateStatistics:u}){let d=Nt(t,n),f=rn(r),p=zt(t,n,r),m=O(t,n).slice(0,6),h=D(),g=r.lastSignInDate===h,_=r.lastCheckInDate===h,v=Bt(t,n,r),y=r.rewardHistory.slice(0,3),b=$t(),x=en();return(0,E.jsxs)(`div`,{className:`space-y-5`,children:[(0,E.jsxs)(`section`,{className:`hero-panel relative overflow-hidden`,children:[(0,E.jsx)(`div`,{className:`pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(90deg,rgba(111,185,219,0.28),rgba(255,255,255,0))]`}),(0,E.jsxs)(`div`,{className:`relative max-w-2xl`,children:[(0,E.jsx)(`div`,{className:`mb-3 text-xs font-semibold uppercase text-copper`,children:`Seaside Study Desk`}),(0,E.jsx)(`h1`,{className:`font-display text-3xl font-semibold leading-tight text-ink md:text-4xl`,children:`考研英语倒计时`}),(0,E.jsxs)(`div`,{className:`mt-3 flex flex-wrap items-end gap-3`,children:[(0,E.jsx)(`div`,{className:`font-display text-6xl font-semibold leading-none text-harbor md:text-7xl`,children:b.days}),(0,E.jsxs)(`div`,{className:`pb-2`,children:[(0,E.jsxs)(`div`,{className:`text-lg font-semibold text-ink`,children:[`天 `,b.hours,`小时 `,b.minutes,`分钟`]}),(0,E.jsxs)(`div`,{className:`text-sm text-slate-500`,children:[`预估英语考试：`,Qt.getFullYear(),`-12-19 14:00`]})]})]}),(0,E.jsx)(`div`,{className:`mt-4 rounded-lg border border-sky-100 bg-white/80 p-3 text-sm font-semibold leading-6 text-slate-700`,children:x}),(0,E.jsxs)(`div`,{className:`mt-4 grid gap-3 text-sm text-slate-600 sm:grid-cols-3`,children:[(0,E.jsxs)(`div`,{className:`rounded-lg border border-sky-100 bg-white/90 px-3 py-2`,children:[(0,E.jsx)(`span`,{className:`block text-xs text-slate-400`,children:`必备单元`}),(0,E.jsx)(`span`,{className:`font-semibold text-ink`,children:e.length})]}),(0,E.jsxs)(`div`,{className:`rounded-lg border border-sky-100 bg-white/90 px-3 py-2`,children:[(0,E.jsx)(`span`,{className:`block text-xs text-slate-400`,children:`词量`}),(0,E.jsx)(`span`,{className:`font-semibold text-ink`,children:t.length})]}),(0,E.jsxs)(`button`,{type:`button`,onClick:u,className:`rounded-lg border border-sky-100 bg-white/90 px-3 py-2 text-left transition hover:border-harbor hover:text-harbor`,children:[(0,E.jsx)(`span`,{className:`block text-xs text-slate-400`,children:`今日时长`}),(0,E.jsx)(`span`,{className:`font-semibold text-ink`,children:Je(f.todaySeconds)})]})]}),(0,E.jsxs)(`div`,{className:`mt-5 flex flex-wrap gap-3`,children:[(0,E.jsxs)(`button`,{type:`button`,onClick:a,className:`btn-primary`,children:[(0,E.jsx)(oe,{size:18,"aria-hidden":`true`}),`开始今日复习`]}),(0,E.jsxs)(`button`,{type:`button`,onClick:o,className:`btn-secondary`,children:[(0,E.jsx)(ye,{size:18,"aria-hidden":`true`}),`进入单元`]}),(0,E.jsxs)(`button`,{type:`button`,onClick:c,className:`btn-secondary`,children:[(0,E.jsx)(ke,{size:18,"aria-hidden":`true`}),`打怪进度`]})]})]}),(0,E.jsxs)(`div`,{className:`hero-meter relative`,children:[(0,E.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`text-sm text-slate-500`,children:`掌握进度`}),(0,E.jsxs)(`div`,{className:`mt-2 text-5xl font-semibold text-harbor`,children:[d.progressPercent,`%`]})]}),(0,E.jsx)(qt,{stats:r})]}),(0,E.jsx)(`div`,{className:`mt-4`,children:(0,E.jsx)(Gt,{value:d.masteredCount,max:d.totalCount,label:`${d.masteredCount}/${d.totalCount}`})}),(0,E.jsxs)(`div`,{className:`mt-4 grid grid-cols-2 gap-2 text-sm`,children:[(0,E.jsxs)(`button`,{type:`button`,onClick:i,disabled:g,className:`btn-secondary min-h-10 disabled:opacity-45`,children:[(0,E.jsx)(ge,{size:17,"aria-hidden":`true`}),g?`已签到`:`签到`]}),(0,E.jsxs)(`button`,{type:`button`,onClick:s,className:_||v?`btn-primary min-h-10`:`btn-secondary min-h-10`,children:[(0,E.jsx)(Ae,{size:17,"aria-hidden":`true`}),_?`已打卡`:v?`去打卡`:`看任务`]})]})]})]}),(0,E.jsxs)(`section`,{className:`grid gap-4 lg:grid-cols-[1fr_0.9fr]`,children:[(0,E.jsx)(Jt,{stats:r}),(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-soft`,children:[(0,E.jsxs)(`div`,{className:`mb-3 flex items-center justify-between gap-3`,children:[(0,E.jsx)(`h2`,{className:`font-semibold text-ink`,children:`今日打卡条件`}),(0,E.jsx)(`button`,{type:`button`,onClick:s,className:`text-sm font-semibold text-harbor`,children:`打卡中心`})]}),(0,E.jsx)(`div`,{className:`grid gap-3 sm:grid-cols-2`,children:p.map(e=>(0,E.jsxs)(`div`,{className:`rounded-lg border border-sky-100 bg-[#f8fbff] p-3`,children:[(0,E.jsxs)(`div`,{className:`mb-2 flex items-center justify-between gap-3 text-sm`,children:[(0,E.jsx)(`span`,{className:`font-semibold text-ink`,children:e.title}),(0,E.jsxs)(`span`,{className:`text-slate-500`,children:[Math.min(e.current,e.target),`/`,e.target]})]}),(0,E.jsx)(Gt,{value:e.current,max:e.target,label:e.reward})]},e.id))})]})]}),(0,E.jsxs)(`section`,{className:`rounded-lg border border-sky-100 bg-white p-5 shadow-soft`,children:[(0,E.jsxs)(`div`,{className:`flex flex-wrap items-start justify-between gap-4`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsxs)(`div`,{className:`flex items-center gap-2 text-sm font-semibold text-harbor`,children:[(0,E.jsx)(Te,{size:18,"aria-hidden":`true`}),`重复记忆节奏`]}),(0,E.jsx)(`h2`,{className:`mt-2 text-xl font-semibold text-ink`,children:`新学一次，复习多轮，测试收口`})]}),(0,E.jsx)(`button`,{type:`button`,onClick:a,className:`btn-secondary`,children:`进入复习`})]}),(0,E.jsx)(`div`,{className:`mt-4 grid gap-3 md:grid-cols-4`,children:[[`初学`,`先把释义看清，加入今日学习`],[`5分钟`,`马上复现一次，挡住第一波遗忘`],[`间隔复习`,`按 Stage 自动推到 30 分钟、12 小时、1 天`],[`测试`,`用选择题把熟悉变成稳定掌握`]].map(([e,t])=>(0,E.jsxs)(`div`,{className:`rounded-lg border border-sky-100 bg-[#f8fbff] p-4`,children:[(0,E.jsx)(`div`,{className:`text-base font-semibold text-ink`,children:e}),(0,E.jsx)(`div`,{className:`mt-2 text-sm leading-6 text-slate-500`,children:t})]},e))})]}),(0,E.jsxs)(`section`,{className:`grid gap-4 sm:grid-cols-2 lg:grid-cols-4`,children:[(0,E.jsx)(Zt,{label:`今日应复习`,value:d.dueCount,icon:oe,tone:`current`}),(0,E.jsx)(Zt,{label:`今日新学`,value:d.todayNewCount,icon:te,tone:`spruce`}),(0,E.jsx)(Zt,{label:`连续打卡`,value:r.currentStreak,icon:T,tone:`copper`}),(0,E.jsx)(Zt,{label:`今日学习`,value:Je(f.todaySeconds),icon:se,tone:`slate`}),(0,E.jsx)(Zt,{label:`已掌握`,value:d.masteredCount,icon:Ae,tone:`spruce`}),(0,E.jsx)(Zt,{label:`不熟词`,value:d.weakCount,icon:Ne,tone:`copper`}),(0,E.jsx)(Zt,{label:`遗忘词`,value:d.forgottenCount,icon:me,tone:`slate`}),(0,E.jsx)(Zt,{label:`错题词`,value:d.wrongCount,icon:be,tone:`current`})]}),(0,E.jsxs)(`div`,{className:`grid gap-5 lg:grid-cols-[1.15fr_0.85fr]`,children:[(0,E.jsx)(Yt,{}),(0,E.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,E.jsxs)(`div`,{className:`mb-4 flex items-center justify-between gap-4`,children:[(0,E.jsx)(`h2`,{className:`text-lg font-semibold text-ink`,children:`最近需要复习`}),(0,E.jsx)(`button`,{type:`button`,onClick:a,className:`text-sm font-semibold text-harbor`,children:`全部查看`})]}),(0,E.jsx)(`div`,{className:`space-y-3`,children:m.length?m.map(e=>(0,E.jsxs)(`div`,{className:`flex items-center justify-between gap-3 rounded-lg border border-sky-100 bg-[#f8fbff] p-3`,children:[(0,E.jsxs)(`div`,{className:`min-w-0`,children:[(0,E.jsx)(`div`,{className:`truncate font-semibold text-ink`,children:e.word}),(0,E.jsx)(`div`,{className:`text-xs text-slate-500`,children:e.unitName})]}),(0,E.jsx)(`div`,{className:`shrink-0 text-xs text-copper`,children:cn(n[e.id]?.nextReviewAt)})]},e.id)):(0,E.jsx)(`p`,{className:`rounded-lg border border-sky-100 bg-[#f8fbff] p-4 text-sm leading-6 text-slate-500`,children:`现在没有到期词，可以进入单元继续初学。`})})]})]}),(0,E.jsxs)(`section`,{className:`grid gap-4 lg:grid-cols-[0.9fr_1.1fr]`,children:[(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,E.jsxs)(`div`,{className:`mb-4 flex items-center justify-between gap-3`,children:[(0,E.jsx)(`h2`,{className:`font-semibold text-ink`,children:`快捷入口`}),(0,E.jsxs)(`button`,{type:`button`,onClick:l,className:`inline-flex items-center gap-1 text-sm font-semibold text-harbor`,children:[(0,E.jsx)(Oe,{size:16,"aria-hidden":`true`}),`商店`]})]}),(0,E.jsxs)(`div`,{className:`grid gap-3 sm:grid-cols-2`,children:[(0,E.jsxs)(`button`,{type:`button`,onClick:c,className:`mode-card`,children:[(0,E.jsx)(ke,{size:20,"aria-hidden":`true`}),(0,E.jsx)(`span`,{children:`单词打怪`})]}),(0,E.jsxs)(`button`,{type:`button`,onClick:u,className:`mode-card`,children:[(0,E.jsx)(se,{size:20,"aria-hidden":`true`}),(0,E.jsx)(`span`,{children:`学习统计`})]})]})]}),(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,E.jsx)(`h2`,{className:`font-semibold text-ink`,children:`最新奖励`}),(0,E.jsx)(`div`,{className:`mt-4 space-y-3`,children:y.length?y.map(e=>(0,E.jsxs)(`div`,{className:`flex items-center justify-between gap-3 rounded-lg border border-sky-100 bg-[#f8fbff] p-3`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`font-semibold text-ink`,children:e.title}),(0,E.jsx)(`div`,{className:`text-xs text-slate-500`,children:e.description})]}),(0,E.jsxs)(`div`,{className:`shrink-0 text-sm font-semibold text-harbor`,children:[`+`,e.xp,` XP`]})]},e.id)):(0,E.jsx)(`p`,{className:`rounded-lg border border-sky-100 bg-[#f8fbff] p-4 text-sm text-slate-500`,children:`还没有奖励记录，先签到或学一个新词。`})})]})]})]})}function fn(e,t){let n=t[e.id];if(Dt(n))return 0;if(!n)return 100;let r=n.knownCount*25+n.correctCount*20+n.fuzzyCount*10,i=n.forgottenCount*10+n.wrongCount*5;return Math.max(5,Math.min(100,100-r+i))}function pn(e,t,n){let r=e.filter(e=>Dt(t[e.id])).length;return{defeatedWords:r,activeMonsters:e.length-r,defeatedBosses:n.defeatedBossIds.length,monsterPoints:n.monsterPoints}}function mn(e,t,n){let r=e.words.filter(e=>t[e.id]?.learned).length,i=e.words.length?Math.round(r/e.words.length*100):0,a=O(e.words,t).length,o=n.defeatedBossIds.includes(e.id),s=i>=80&&a===0;return{id:e.id,name:`${e.name} Boss`,subtitle:`${hn(e.order)}·Unit${e.order}`,learnedPercent:i,dueLeft:a,defeated:o,eligible:s,hp:o?0:s?100:Math.max(20,100-i)}}function hn(e){let t=[`遗忘兽`,`拖延兽`,`混淆兽`,`倦怠兽`,`焦虑兽`,`懒散兽`,`粗心兽`,`瓶颈兽`];return t[(e-1)%t.length]}function gn({unit:e,progressMap:t,stats:n,onChallenge:r}){let i=mn(e,t,n);return(0,E.jsxs)(`div`,{className:`rounded-lg border border-violet-200 bg-white p-4 shadow-soft`,children:[(0,E.jsxs)(`div`,{className:`flex items-start justify-between gap-3`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`font-semibold text-ink`,children:i.subtitle}),(0,E.jsxs)(`div`,{className:`mt-1 text-sm text-slate-500`,children:[`学习 `,i.learnedPercent,`% / 到期 `,i.dueLeft]})]}),(0,E.jsx)(`button`,{type:`button`,onClick:()=>r(e.id),disabled:!i.eligible||i.defeated,className:`btn-secondary min-h-9 px-3 py-1.5 disabled:opacity-40`,children:i.defeated?`已击败`:`挑战`})]}),(0,E.jsx)(`div`,{className:`mt-3`,children:(0,E.jsx)(Gt,{value:100-i.hp,max:100,label:i.eligible?`可挑战`:`解锁进度`})})]})}function _n({word:e,progressMap:t}){let n=fn(e,t);return(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-soft`,children:[(0,E.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`font-semibold text-ink`,children:e.word}),(0,E.jsx)(`div`,{className:`text-sm text-slate-500`,children:e.unitName})]}),(0,E.jsxs)(`div`,{className:`text-sm font-semibold text-violet-700`,children:[`HP `,n]})]}),(0,E.jsx)(`div`,{className:`mt-3`,children:(0,E.jsx)(Gt,{value:100-n,max:100,label:n<=0?`已击败`:`攻击进度`})})]})}function vn({words:e,units:t,progressMap:n,stats:r,onChallengeBoss:i}){let a=pn(e,n,r),o=e.filter(e=>!r.defeatedWordIds.includes(e.id)).slice(0,6);return(0,E.jsxs)(`div`,{className:`space-y-5`,children:[(0,E.jsxs)(`section`,{className:`rounded-lg border border-violet-200 bg-white p-5 shadow-soft`,children:[(0,E.jsxs)(`div`,{className:`flex flex-wrap items-end justify-between gap-4`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`text-xs font-semibold uppercase text-violet-700`,children:`Monster`}),(0,E.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`单词打怪`}),(0,E.jsx)(`p`,{className:`mt-2 text-sm text-slate-500`,children:`记住、复习、答对都会攻击单词怪物。`})]}),(0,E.jsx)(qt,{stats:r})]}),(0,E.jsxs)(`div`,{className:`mt-5 grid gap-3 sm:grid-cols-3`,children:[(0,E.jsxs)(`div`,{className:`rounded-lg bg-violet-50 p-4 text-center`,children:[(0,E.jsx)(`div`,{className:`text-2xl font-semibold`,children:a.monsterPoints}),(0,E.jsx)(`div`,{className:`text-sm text-slate-500`,children:`打怪积分`})]}),(0,E.jsxs)(`div`,{className:`rounded-lg bg-violet-50 p-4 text-center`,children:[(0,E.jsx)(`div`,{className:`text-2xl font-semibold`,children:a.defeatedWords}),(0,E.jsx)(`div`,{className:`text-sm text-slate-500`,children:`击败小怪`})]}),(0,E.jsxs)(`div`,{className:`rounded-lg bg-violet-50 p-4 text-center`,children:[(0,E.jsx)(`div`,{className:`text-2xl font-semibold`,children:a.defeatedBosses}),(0,E.jsx)(`div`,{className:`text-sm text-slate-500`,children:`击败 Boss`})]})]})]}),(0,E.jsx)(`section`,{className:`grid gap-4 lg:grid-cols-2`,children:t.map(e=>(0,E.jsx)(gn,{unit:e,progressMap:n,stats:r,onChallenge:i},e.id))}),(0,E.jsx)(`section`,{className:`grid gap-4 lg:grid-cols-2`,children:o.map(e=>(0,E.jsx)(_n,{word:e,progressMap:n},e.id))})]})}function yn({words:e,progressMap:t,stats:n,onNavigateCheckIn:r,onNavigateRewards:i,onNavigateShop:a,onNavigateStatistics:o,onNavigateAchievements:s,onNavigateSettings:c,onExport:l,onImport:u,onReset:d}){let f=Nt(e,t),p=rn(n);return(0,E.jsxs)(`div`,{className:`space-y-5`,children:[(0,E.jsx)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:(0,E.jsxs)(`div`,{className:`flex flex-wrap items-start justify-between gap-4`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Profile`}),(0,E.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`我的学习账户`}),(0,E.jsx)(`p`,{className:`mt-2 text-sm text-slate-500`,children:`进度、奖励、设置都在这里统一管理。`})]}),(0,E.jsx)(qt,{stats:n})]})}),(0,E.jsxs)(`section`,{className:`grid gap-4 lg:grid-cols-[0.95fr_1.05fr]`,children:[(0,E.jsx)(Jt,{stats:n}),(0,E.jsxs)(`div`,{className:`grid gap-4 sm:grid-cols-2`,children:[(0,E.jsx)(Zt,{label:`总学习时长`,value:Je(p.totalSeconds),icon:se,tone:`current`}),(0,E.jsx)(Zt,{label:`连续打卡`,value:n.currentStreak,icon:ae,tone:`copper`}),(0,E.jsx)(Zt,{label:`已学词数`,value:f.learnedCount,icon:Pe,tone:`spruce`}),(0,E.jsx)(Zt,{label:`掌握词数`,value:f.masteredCount,icon:C,tone:`slate`})]})]}),(0,E.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,E.jsx)(`h2`,{className:`text-lg font-semibold text-ink`,children:`功能入口`}),(0,E.jsxs)(`div`,{className:`mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3`,children:[(0,E.jsxs)(`button`,{type:`button`,onClick:r,className:`mode-card`,children:[(0,E.jsx)(ae,{size:20,"aria-hidden":`true`}),(0,E.jsx)(`span`,{children:`打卡中心`})]}),(0,E.jsxs)(`button`,{type:`button`,onClick:i,className:`mode-card`,children:[(0,E.jsx)(ge,{size:20,"aria-hidden":`true`}),(0,E.jsx)(`span`,{children:`奖励记录`})]}),(0,E.jsxs)(`button`,{type:`button`,onClick:a,className:`mode-card`,children:[(0,E.jsx)(Oe,{size:20,"aria-hidden":`true`}),(0,E.jsx)(`span`,{children:`兑换商店`})]}),(0,E.jsxs)(`button`,{type:`button`,onClick:o,className:`mode-card`,children:[(0,E.jsx)(se,{size:20,"aria-hidden":`true`}),(0,E.jsx)(`span`,{children:`学习统计`})]}),(0,E.jsxs)(`button`,{type:`button`,onClick:s,className:`mode-card`,children:[(0,E.jsx)(C,{size:20,"aria-hidden":`true`}),(0,E.jsx)(`span`,{children:`成就徽章`})]}),(0,E.jsxs)(`button`,{type:`button`,onClick:c,className:`mode-card`,children:[(0,E.jsx)(De,{size:20,"aria-hidden":`true`}),(0,E.jsx)(`span`,{children:`设置`})]})]})]}),(0,E.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,E.jsx)(`h2`,{className:`text-lg font-semibold text-ink`,children:`进度管理`}),(0,E.jsxs)(`div`,{className:`mt-5 grid gap-3 sm:grid-cols-3`,children:[(0,E.jsxs)(`button`,{type:`button`,onClick:l,className:`btn-secondary`,children:[(0,E.jsx)(fe,{size:18,"aria-hidden":`true`}),`导出进度`]}),(0,E.jsxs)(`label`,{className:`btn-secondary cursor-pointer`,children:[(0,E.jsx)(Pe,{size:18,"aria-hidden":`true`}),`导入进度`,(0,E.jsx)(`input`,{type:`file`,accept:`application/json,.json`,className:`sr-only`,onChange:e=>{let t=e.target.files?.[0];t&&(t.text().then(u),e.target.value=``)}})]}),(0,E.jsxs)(`button`,{type:`button`,onClick:d,className:`btn-danger`,children:[(0,E.jsx)(Ee,{size:18,"aria-hidden":`true`}),`清空进度`]})]})]})]})}var bn=null,xn=null,Sn={autoPlayOnStudy:!1,autoPlayOnRecall:!1,defaultAccent:`us`,speechRate:1,repeatCount:1};function Cn(e){return e.toLowerCase().replace(/[^a-z-]/g,``)}function wn(){if(!(`speechSynthesis`in window))return Promise.resolve([]);let e=window.speechSynthesis.getVoices();return e.length?Promise.resolve(e):xn||(xn=new Promise(e=>{let t=()=>{window.speechSynthesis.onvoiceschanged=null,e(window.speechSynthesis.getVoices())};window.speechSynthesis.onvoiceschanged=t,window.setTimeout(t,900)}),xn)}function Tn(){bn&&=(bn.pause(),bn.currentTime=0,null),`speechSynthesis`in window&&window.speechSynthesis.cancel()}function En(e,t){return new Promise((n,r)=>{let i=new Audio(`/audio/${t}/${Cn(e)}.mp3`);bn=i,i.onended=()=>n(),i.onerror=()=>r(Error(`local audio missing`)),i.play().catch(r)})}function Dn(e){if(!(`speechSynthesis`in window))return;let t=e===`us`?`en-US`:`en-GB`,n=window.speechSynthesis.getVoices();return n.find(e=>e.lang===t)||n.find(e=>e.lang.toLowerCase().startsWith(t.toLowerCase()))}async function On(e,t,n={}){return await wn(),new Promise((r,i)=>{if(!(`speechSynthesis`in window)){i(Error(`当前浏览器不支持朗读，请添加音频文件。`));return}let a={...Sn,...n},o=t===`us`?`en-US`:`en-GB`,s=0,c=()=>{let n=new SpeechSynthesisUtterance(e);n.lang=o,n.rate=a.speechRate;let l=Dn(t);l&&(n.voice=l),n.onend=()=>{s+=1,s<a.repeatCount?c():r()},n.onerror=e=>{if(e.error===`interrupted`||e.error===`canceled`){r();return}i(Error(`当前浏览器朗读失败，请检查系统语音或浏览器权限。`))},window.speechSynthesis.speak(n)};c()})}async function kn(e,t,n={}){Tn();try{await On(e.replace(/-/g,` `),t,n)}catch{await En(e,t)}}function An({word:e,accent:t,settings:n}){let[r,i]=(0,y.useState)(!1);return(0,E.jsxs)(`button`,{type:`button`,onClick:async()=>{i(!0);try{await kn(e,t,n)}catch(e){window.alert(e instanceof Error?e.message:`当前浏览器不支持朗读，请添加音频文件。`)}finally{i(!1)}},className:`inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-sm font-semibold text-harbor transition hover:border-harbor`,children:[(0,E.jsx)(Ie,{size:15,"aria-hidden":`true`}),t.toUpperCase(),r?`...`:``]})}function jn({title:e,body:t,actionLabel:n,onAction:r}){return(0,E.jsxs)(`div`,{className:`rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center shadow-soft`,children:[(0,E.jsx)(`div`,{className:`mx-auto mb-4 grid h-12 w-12 place-items-center rounded-lg border border-harbor/15 bg-[#f8fbff] text-harbor`,children:(0,E.jsx)(_e,{size:22,"aria-hidden":`true`})}),(0,E.jsx)(`h3`,{className:`font-semibold text-ink`,children:e}),t?(0,E.jsx)(`p`,{className:`mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500`,children:t}):null,n&&r?(0,E.jsx)(`button`,{type:`button`,onClick:r,className:`btn-primary mt-5`,children:n}):null]})}function Mn({word:e,progress:t,compact:n=!1,audioSettings:r}){return(0,E.jsxs)(`article`,{className:`overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft`,children:[n?null:(0,E.jsxs)(`div`,{className:`border-b border-slate-200 bg-[#f8fbff] p-5 md:p-6`,children:[(0,E.jsxs)(`div`,{className:`mb-5 flex items-center justify-between gap-3`,children:[(0,E.jsx)(`span`,{className:`rounded-md border border-harbor/15 bg-white px-2.5 py-1 text-xs font-medium text-harbor`,children:e.unitName}),(0,E.jsxs)(`span`,{className:`text-xs text-slate-500`,children:[`#`,e.order]})]}),(0,E.jsxs)(`div`,{className:`flex flex-wrap items-end justify-between gap-4`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`h1`,{className:`break-words text-5xl font-semibold leading-tight text-ink md:text-6xl`,children:e.word}),(0,E.jsx)(`p`,{className:`mt-3 text-xl font-medium text-slate-600 md:text-2xl`,children:e.phonetic})]}),(0,E.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,E.jsx)(An,{word:e.word,accent:`us`,settings:r}),(0,E.jsx)(An,{word:e.word,accent:`uk`,settings:r})]})]})]}),(0,E.jsxs)(`div`,{className:n?`p-4`:`p-5 md:p-6`,children:[n?(0,E.jsxs)(`div`,{className:`mb-3 flex items-start justify-between gap-3`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`h3`,{className:`break-words text-2xl font-semibold text-ink`,children:e.word}),(0,E.jsx)(`p`,{className:`text-base font-medium text-slate-600`,children:e.phonetic}),(0,E.jsxs)(`div`,{className:`mt-2 flex gap-2`,children:[(0,E.jsx)(An,{word:e.word,accent:`us`,settings:r}),(0,E.jsx)(An,{word:e.word,accent:`uk`,settings:r})]})]}),(0,E.jsxs)(`span`,{className:`rounded-md border border-harbor/15 bg-[#f8fbff] px-2.5 py-1 text-xs text-harbor`,children:[`#`,e.order]})]}):null,(0,E.jsx)(`div`,{className:`space-y-3`,children:e.definitions.map((t,n)=>(0,E.jsxs)(`div`,{className:`flex gap-3 rounded-lg border border-slate-200 bg-[#f8fbff] p-4`,children:[(0,E.jsx)(`span`,{className:`shrink-0 rounded-md border border-harbor/15 bg-white px-3 py-1.5 text-base font-semibold text-harbor`,children:t.pos||`释义`}),(0,E.jsx)(`p`,{className:`min-w-0 text-xl font-semibold leading-9 text-slate-950 md:text-2xl md:leading-10`,children:t.meaning})]},`${e.id}-def-${n}`))}),(0,E.jsxs)(`div`,{className:`mt-4 grid gap-3 text-sm sm:grid-cols-3`,children:[(0,E.jsxs)(`div`,{className:`flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-600`,children:[(0,E.jsx)(ve,{size:16,"aria-hidden":`true`}),`Stage `,t?.stage||0]}),(0,E.jsxs)(`div`,{className:`flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-600`,children:[(0,E.jsx)(de,{size:16,"aria-hidden":`true`}),cn(t?.nextReviewAt)]}),(0,E.jsxs)(`div`,{className:`flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-600`,children:[(0,E.jsx)(le,{size:16,"aria-hidden":`true`}),ln(t)]})]})]})]})}function Nn(e){return e.definitions.map(e=>`${e.pos} ${e.meaning}`.trim()).join(`；`)}function Pn(e){return[...e].sort(()=>Math.random()-.5)}function Fn(e,t=e){return e.map(e=>{let n=Nn(e),r=Pn(t.filter(t=>t.id!==e.id)).map(Nn).filter(e=>e&&e!==n).slice(0,3);return{id:`quiz-${e.id}-${Date.now()}`,word:e,answer:n,options:Pn([n,...r])}})}function In({title:e,words:t,allWords:n,progressMap:r,audioSettings:i,onAnswer:a}){let[o,s]=(0,y.useState)(0),[c,l]=(0,y.useState)(t),[u,d]=(0,y.useState)(0),[f,p]=(0,y.useState)(),[m,h]=(0,y.useState)({correct:0,wrong:0}),[g,_]=(0,y.useState)([]),v=(0,y.useMemo)(()=>Fn(c,n),[c,n,o]),b=v[u],x=u>=v.length;(0,y.useEffect)(()=>{l(t),d(0),p(void 0),h({correct:0,wrong:0}),_([])},[t]);let ee=(e=t)=>{l([...e]),s(e=>e+1),d(0),p(void 0),h({correct:0,wrong:0}),_([])};if(!v.length)return(0,E.jsx)(jn,{title:`当前范围没有可测试的单词`,body:`先导入或选择一个包含单词的单元。`});if(x){let e=m.correct+m.wrong,t=e?Math.round(m.correct/e*100):0;return(0,E.jsxs)(`div`,{className:`space-y-5`,children:[(0,E.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-6 text-center shadow-soft`,children:[(0,E.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Result`}),(0,E.jsx)(`h1`,{className:`mt-2 text-3xl font-semibold text-ink`,children:`本次测试完成`}),(0,E.jsxs)(`div`,{className:`mt-6 grid gap-3 sm:grid-cols-4`,children:[(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-[#f8fbff] p-4`,children:[(0,E.jsx)(`div`,{className:`text-2xl font-semibold`,children:e}),(0,E.jsx)(`div`,{className:`text-sm text-slate-500`,children:`总题数`})]}),(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-[#f8fbff] p-4`,children:[(0,E.jsx)(`div`,{className:`text-2xl font-semibold text-spruce`,children:m.correct}),(0,E.jsx)(`div`,{className:`text-sm text-slate-500`,children:`正确`})]}),(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-[#f8fbff] p-4`,children:[(0,E.jsx)(`div`,{className:`text-2xl font-semibold text-copper`,children:m.wrong}),(0,E.jsx)(`div`,{className:`text-sm text-slate-500`,children:`错误`})]}),(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-[#f8fbff] p-4`,children:[(0,E.jsxs)(`div`,{className:`text-2xl font-semibold text-harbor`,children:[t,`%`]}),(0,E.jsx)(`div`,{className:`text-sm text-slate-500`,children:`正确率`})]})]}),(0,E.jsxs)(`div`,{className:`mt-6 flex flex-wrap justify-center gap-3`,children:[(0,E.jsxs)(`button`,{type:`button`,onClick:()=>ee(),className:`btn-secondary`,children:[(0,E.jsx)(Ee,{size:18,"aria-hidden":`true`}),`重新测试`]}),g.length?(0,E.jsxs)(`button`,{type:`button`,onClick:()=>ee(g),className:`btn-primary`,children:[(0,E.jsx)(Ee,{size:18,"aria-hidden":`true`}),`重新测试错题`]}):null]})]}),g.length?(0,E.jsx)(`div`,{className:`grid gap-3 md:grid-cols-2`,children:g.map(e=>(0,E.jsx)(Mn,{word:e,progress:r[e.id],compact:!0,audioSettings:i},e.id))}):null]})}let S=!!f,C=f===b.answer,te=e=>{if(S)return;let t=e===b.answer;p(e),h(e=>({correct:e.correct+ +!!t,wrong:e.wrong+ +!t})),t||_(e=>[...e,b.word]),a(b.word.id,t)};return(0,E.jsxs)(`div`,{className:`space-y-5`,children:[(0,E.jsxs)(`div`,{className:`flex flex-wrap items-end justify-between gap-4`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Quiz`}),(0,E.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:e})]}),(0,E.jsxs)(`div`,{className:`text-sm text-slate-500`,children:[u+1,` / `,v.length]})]}),(0,E.jsx)(Gt,{value:u+1,max:v.length,label:`测试进度`}),(0,E.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,E.jsxs)(`div`,{className:`py-8 text-center`,children:[(0,E.jsx)(`div`,{className:`text-5xl font-semibold text-ink`,children:b.word.word}),(0,E.jsx)(`div`,{className:`mt-3 text-xl text-slate-500`,children:b.word.phonetic}),(0,E.jsxs)(`div`,{className:`mt-4 flex justify-center gap-2`,children:[(0,E.jsx)(An,{word:b.word.word,accent:`us`,settings:i}),(0,E.jsx)(An,{word:b.word.word,accent:`uk`,settings:i})]})]}),(0,E.jsx)(`div`,{className:`grid gap-3`,children:b.options.map(e=>{let t=e===b.answer,n=f===e;return(0,E.jsxs)(`button`,{type:`button`,onClick:()=>te(e),className:`quiz-option ${S&&t?`border-spruce bg-spruce/10 text-spruce`:S&&n?`border-copper bg-copper/10 text-copper`:`border-slate-200 bg-[#f8fbff] text-slate-900 hover:border-harbor`}`,children:[(0,E.jsx)(`span`,{children:e}),S&&t?(0,E.jsx)(le,{size:18,"aria-hidden":`true`}):null,S&&n&&!t?(0,E.jsx)(w,{size:18,"aria-hidden":`true`}):null]},e)})}),S?(0,E.jsxs)(`div`,{className:`mt-4 rounded-lg p-4 text-sm ${C?`bg-spruce/10 text-spruce`:`bg-copper/10 text-copper`}`,children:[C?`回答正确，阶段会向前推进。`:`回答错误，正确答案是：${b.answer}`,(0,E.jsxs)(`div`,{className:`mt-3 flex gap-2`,children:[(0,E.jsx)(An,{word:b.word.word,accent:`us`,settings:i}),(0,E.jsx)(An,{word:b.word.word,accent:`uk`,settings:i})]})]}):null,(0,E.jsx)(`div`,{className:`mt-5 flex justify-end`,children:(0,E.jsx)(`button`,{type:`button`,onClick:()=>{p(void 0),d(e=>e+1)},disabled:!S,className:`btn-primary disabled:opacity-40`,children:`下一题`})})]})]})}function Ln({value:e,items:t,onChange:n}){return(0,E.jsx)(`div`,{className:`inline-grid grid-flow-col rounded-lg border border-slate-200 bg-[#f8fbff] p-1`,children:t.map(t=>(0,E.jsx)(`button`,{type:`button`,onClick:()=>n(t.value),className:`rounded-md px-3 py-2 text-sm transition ${e===t.value?`bg-white text-ink shadow-sm`:`text-slate-500 hover:text-ink`}`,children:t.label},t.value))})}function Rn({title:e,words:t,progressMap:n,audioSettings:r,initialDueOnly:i=!1,onGrade:a,onBackToStudy:o}){let[s,c]=(0,y.useState)(i?`due`:`all`),[l,u]=(0,y.useState)(0),[d,f]=(0,y.useState)(!1),p=(0,y.useMemo)(()=>s===`due`?O(t,n):t,[s,t,n]),m=p[Math.min(l,Math.max(0,p.length-1))];(0,y.useEffect)(()=>{!m||!r.autoPlayOnRecall||kn(m.word,r.defaultAccent,r).catch(()=>void 0)},[m,r]);let h=e=>{m&&(a(m.id,e),f(!1),u(e=>{let t=s===`due`?e:e+1;return Math.min(t,Math.max(0,p.length-1))}))};if(!p.length)return(0,E.jsx)(jn,{title:s===`due`?`当前没有到期词`:`当前范围没有词`,body:`可以切换到全部练习，或者先进入记忆模式完成初学。`,actionLabel:o?`去记忆模式`:void 0,onAction:o});let g=n[m.id];return(0,E.jsxs)(`div`,{className:`space-y-5`,children:[(0,E.jsxs)(`div`,{className:`flex flex-wrap items-end justify-between gap-4`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Recall`}),(0,E.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:e})]}),(0,E.jsx)(Ln,{value:s,items:[{value:`due`,label:`到期词`},{value:`all`,label:`全部词`}],onChange:e=>{c(e),u(0),f(!1)}})]}),(0,E.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,E.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500`,children:[(0,E.jsxs)(`span`,{children:[Math.min(l+1,p.length),` / `,p.length]}),(0,E.jsxs)(`span`,{children:[Et(g)?`已到期`:`未到期`,`，Stage `,g?.stage||0,`，下次 `,cn(g?.nextReviewAt)]})]}),(0,E.jsxs)(`div`,{className:`py-10 text-center`,children:[(0,E.jsx)(`div`,{className:`text-5xl font-semibold text-ink`,children:m.word}),(0,E.jsx)(`div`,{className:`mt-3 text-xl text-slate-500`,children:m.phonetic}),(0,E.jsxs)(`div`,{className:`mt-4 flex justify-center gap-2`,children:[(0,E.jsx)(An,{word:m.word,accent:`us`,settings:r}),(0,E.jsx)(An,{word:m.word,accent:`uk`,settings:r})]})]}),d?(0,E.jsx)(Mn,{word:m,progress:g,compact:!0,audioSettings:r}):null,(0,E.jsxs)(`div`,{className:`mt-5 grid gap-3 sm:grid-cols-4`,children:[(0,E.jsxs)(`button`,{type:`button`,onClick:()=>f(e=>!e),className:`btn-secondary`,children:[(0,E.jsx)(pe,{size:18,"aria-hidden":`true`}),`查看释义`]}),(0,E.jsxs)(`button`,{type:`button`,onClick:()=>h(`known`),className:`btn-primary`,children:[(0,E.jsx)(Me,{size:18,"aria-hidden":`true`}),`记住`]}),(0,E.jsxs)(`button`,{type:`button`,onClick:()=>h(`fuzzy`),className:`btn-secondary`,children:[(0,E.jsx)(Ee,{size:18,"aria-hidden":`true`}),`不太熟`]}),(0,E.jsxs)(`button`,{type:`button`,onClick:()=>h(`forgotten`),className:`btn-danger`,children:[(0,E.jsx)(je,{size:18,"aria-hidden":`true`}),`不记住`]})]})]})]})}function zn({words:e,progressMap:t,audioSettings:n,onStartReview:r,onOpenUnits:i}){let a=O(e,t);return(0,E.jsxs)(`div`,{className:`space-y-5`,children:[(0,E.jsx)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:(0,E.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-4`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Review`}),(0,E.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`复习中心`})]}),(0,E.jsxs)(`button`,{type:`button`,onClick:r,disabled:!a.length,className:`btn-primary disabled:opacity-40`,children:[(0,E.jsx)(ie,{size:18,"aria-hidden":`true`}),`一键开始`]})]})}),a.length?(0,E.jsx)(`div`,{className:`grid gap-3 lg:grid-cols-2`,children:a.map(e=>(0,E.jsx)(Mn,{word:e,progress:t[e.id],compact:!0,audioSettings:n},e.id))}):(0,E.jsx)(jn,{title:`今天暂时没有到期复习`,body:`可以先从单元里加入今日学习，初学后的单词会自动进入复习周期。`,actionLabel:`去单元`,onAction:i})]})}function Bn({stats:e}){return(0,E.jsxs)(`div`,{className:`space-y-5`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Rewards`}),(0,E.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`奖励记录`})]}),(0,E.jsx)(`div`,{className:`space-y-3`,children:e.rewardHistory.length?e.rewardHistory.map(e=>(0,E.jsx)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-soft`,children:(0,E.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`font-semibold text-ink`,children:e.title}),(0,E.jsx)(`div`,{className:`mt-1 text-sm text-slate-500`,children:e.description})]}),(0,E.jsxs)(`div`,{className:`text-sm font-semibold text-harbor`,children:[`+`,e.xp,` XP / +`,e.coins,` 金币`]})]})},e.id)):(0,E.jsx)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-8 text-center text-slate-500`,children:`暂无奖励记录`})})]})}function Vn({stats:e,onUpdateAudio:t}){let n=e.audioSettings,r=e=>t({...n,...e});return(0,E.jsxs)(`div`,{className:`space-y-5`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Settings`}),(0,E.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`设置`})]}),(0,E.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,E.jsx)(`h2`,{className:`font-semibold text-ink`,children:`发音设置`}),(0,E.jsxs)(`div`,{className:`mt-4 grid gap-4 md:grid-cols-2`,children:[(0,E.jsxs)(`label`,{className:`flex items-center justify-between rounded-lg bg-[#f8fbff] p-3`,children:[(0,E.jsx)(`span`,{children:`记忆页自动播放`}),(0,E.jsx)(`input`,{type:`checkbox`,checked:n.autoPlayOnStudy,onChange:e=>r({autoPlayOnStudy:e.target.checked})})]}),(0,E.jsxs)(`label`,{className:`flex items-center justify-between rounded-lg bg-[#f8fbff] p-3`,children:[(0,E.jsx)(`span`,{children:`理解页自动播放`}),(0,E.jsx)(`input`,{type:`checkbox`,checked:n.autoPlayOnRecall,onChange:e=>r({autoPlayOnRecall:e.target.checked})})]}),(0,E.jsxs)(`label`,{className:`rounded-lg bg-[#f8fbff] p-3`,children:[(0,E.jsx)(`span`,{className:`mb-2 block`,children:`默认口音`}),(0,E.jsxs)(`select`,{value:n.defaultAccent,onChange:e=>r({defaultAccent:e.target.value}),className:`w-full rounded-md border border-slate-200 bg-white p-2`,children:[(0,E.jsx)(`option`,{value:`us`,children:`美式`}),(0,E.jsx)(`option`,{value:`uk`,children:`英式`})]})]}),(0,E.jsxs)(`label`,{className:`rounded-lg bg-[#f8fbff] p-3`,children:[(0,E.jsx)(`span`,{className:`mb-2 block`,children:`朗读速度`}),(0,E.jsxs)(`select`,{value:n.speechRate,onChange:e=>r({speechRate:Number(e.target.value)}),className:`w-full rounded-md border border-slate-200 bg-white p-2`,children:[(0,E.jsx)(`option`,{value:.8,children:`0.8`}),(0,E.jsx)(`option`,{value:1,children:`1.0`}),(0,E.jsx)(`option`,{value:1.1,children:`1.1`})]})]}),(0,E.jsxs)(`label`,{className:`rounded-lg bg-[#f8fbff] p-3`,children:[(0,E.jsx)(`span`,{className:`mb-2 block`,children:`朗读次数`}),(0,E.jsxs)(`select`,{value:n.repeatCount,onChange:e=>r({repeatCount:Number(e.target.value)}),className:`w-full rounded-md border border-slate-200 bg-white p-2`,children:[(0,E.jsx)(`option`,{value:1,children:`1 次`}),(0,E.jsx)(`option`,{value:2,children:`2 次`})]})]})]})]})]})}var Hn=[{id:`theme-default`,name:`默认浅蓝主题`,description:`清爽的浅蓝学习桌面`,type:`theme`,priceCoins:0,icon:`蓝`,rarity:`common`},{id:`theme-dark`,name:`深色专注主题`,description:`适合夜间学习的深色主题`,type:`theme`,priceCoins:120,icon:`夜`,rarity:`rare`},{id:`theme-morning`,name:`晨读白色主题`,description:`适合早起背词的明亮主题`,type:`theme`,priceCoins:90,icon:`晨`,rarity:`common`},{id:`avatar-unit1`,name:`Unit1 完成头像框`,description:`Unit1 学习者头像框`,type:`avatar`,priceCoins:80,icon:`U1`,rarity:`common`},{id:`avatar-thirty-days`,name:`30 天坚持头像框`,description:`长期主义者的头像框`,type:`avatar`,priceCoins:220,priceDiamonds:1,icon:`30`,rarity:`epic`},{id:`tool-focus-card`,name:`专注卡`,description:`开启一次 25 分钟专注学习`,type:`tool`,priceCoins:30,icon:`专`,rarity:`common`},{id:`tool-review-boost`,name:`复习加速卡`,description:`把不熟词加入今日重点复习`,type:`tool`,priceCoins:45,icon:`复`,rarity:`rare`},{id:`tool-wrong-clean`,name:`错题清理卡`,description:`开启一次错题专项测试`,type:`tool`,priceCoins:50,icon:`错`,rarity:`rare`},{id:`tool-makeup`,name:`补签卡`,description:`预留功能，后续可用于补签`,type:`tool`,priceCoins:120,icon:`补`,rarity:`epic`},{id:`tool-double-monster`,name:`双倍积分卡`,description:`15 分钟内打怪积分翻倍`,type:`tool`,priceCoins:100,icon:`双`,rarity:`epic`},{id:`badge-seven-days`,name:`7 天坚持徽章`,description:`连续打卡 7 天纪念徽章`,type:`badge`,priceCoins:160,icon:`7`,rarity:`rare`}];function Un(e,t){return e.unlockedItems.includes(t.id)||e.inventory.some(e=>e.itemId===t.id)}function Wn(e,t){let n=t.type===`tool`;if(!n&&e.unlockedItems.includes(t.id)||e.coins<t.priceCoins||e.diamonds<(t.priceDiamonds||0))return e;let r=n?e.unlockedItems:[...e.unlockedItems,t.id];return rt({...e,coins:e.coins-t.priceCoins,diamonds:e.diamonds-(t.priceDiamonds||0),unlockedItems:r},{type:`exchange`,title:`兑换 ${t.name}`,description:t.description,itemId:n?t.id:void 0,bypassDailyCap:!0})}function Gn({item:e,stats:t,onExchange:n}){let r=Un(t,e),i=t.coins>=e.priceCoins&&t.diamonds>=(e.priceDiamonds||0);return(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-soft`,children:[(0,E.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,E.jsx)(`div`,{className:`grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#f8fbff] font-semibold text-harbor`,children:e.icon}),(0,E.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,E.jsx)(`div`,{className:`font-semibold text-ink`,children:e.name}),(0,E.jsx)(`div`,{className:`mt-1 text-sm leading-6 text-slate-500`,children:e.description}),(0,E.jsxs)(`div`,{className:`mt-2 text-xs text-slate-500`,children:[e.rarity,` / `,e.type]})]})]}),(0,E.jsx)(`button`,{type:`button`,onClick:()=>n(e),disabled:(!i||r)&&e.type!==`tool`,className:`btn-primary mt-4 w-full disabled:opacity-40`,children:r&&e.type!==`tool`?`已拥有`:`兑换 ${e.priceCoins} 金币${e.priceDiamonds?` + ${e.priceDiamonds} 钻石`:``}`})]})}function Kn({stats:e,onExchange:t}){return(0,E.jsxs)(`div`,{className:`space-y-5`,children:[(0,E.jsxs)(`div`,{className:`flex flex-wrap items-end justify-between gap-4`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Shop`}),(0,E.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`兑换商店`})]}),(0,E.jsx)(qt,{stats:e})]}),(0,E.jsx)(`div`,{className:`grid gap-4 md:grid-cols-2 lg:grid-cols-3`,children:Hn.map(n=>(0,E.jsx)(Gn,{item:n,stats:e,onExchange:t},n.id))})]})}function qn({data:e,type:t=`bar`}){let n=Math.max(60,...e.map(e=>e.seconds));return(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-soft`,children:[(0,E.jsx)(`div`,{className:`mb-4 font-semibold text-ink`,children:t===`bar`?`最近 7 天学习时长`:`最近 30 天学习趋势`}),(0,E.jsx)(`div`,{className:`flex h-36 items-end gap-1`,children:e.map(e=>(0,E.jsxs)(`div`,{className:`flex flex-1 flex-col items-center gap-2`,children:[(0,E.jsx)(`div`,{className:`w-full rounded-t bg-harbor`,style:{height:`${Math.max(4,e.seconds/n*120)}px`},title:Je(e.seconds)}),(0,E.jsx)(`div`,{className:`text-[10px] text-slate-400`,children:e.date.slice(5)})]},e.date))})]})}function Jn({stats:e,words:t,progressMap:n}){let r=rn(e),i=sn(t,n).slice(0,6);return(0,E.jsxs)(`div`,{className:`space-y-5`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Statistics`}),(0,E.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`学习统计`})]}),(0,E.jsxs)(`div`,{className:`grid gap-4 sm:grid-cols-2 lg:grid-cols-4`,children:[(0,E.jsx)(Yn,{title:`今日`,value:Je(r.todaySeconds)}),(0,E.jsx)(Yn,{title:`本周`,value:Je(r.weekSeconds)}),(0,E.jsx)(Yn,{title:`本月`,value:Je(r.monthSeconds)}),(0,E.jsx)(Yn,{title:`总学习`,value:Je(r.totalSeconds)})]}),(0,E.jsxs)(`div`,{className:`grid gap-4 lg:grid-cols-2`,children:[(0,E.jsx)(qn,{data:on(e,7)}),(0,E.jsx)(qn,{data:on(e,30),type:`line`})]}),(0,E.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,E.jsx)(`h2`,{className:`font-semibold text-ink`,children:`单元完成排行榜`}),(0,E.jsx)(`div`,{className:`mt-4 space-y-3`,children:i.map(e=>(0,E.jsxs)(`div`,{className:`flex items-center justify-between rounded-lg bg-[#f8fbff] p-3`,children:[(0,E.jsx)(`span`,{children:e.unitName}),(0,E.jsxs)(`span`,{className:`font-semibold text-harbor`,children:[e.percent,`%`]})]},e.unitName))})]})]})}function Yn({title:e,value:t}){return(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-soft`,children:[(0,E.jsx)(`div`,{className:`text-sm text-slate-500`,children:e}),(0,E.jsx)(`div`,{className:`mt-2 text-2xl font-semibold text-ink`,children:t})]})}function Xn({unit:e,words:t,progressMap:n,audioSettings:r,onLearn:i}){let[a,o]=(0,y.useState)(0),s=t[a],c=(0,y.useMemo)(()=>t.filter(e=>n[e.id]?.learned).length,[t,n]);if((0,y.useEffect)(()=>{!s||!r.autoPlayOnStudy||kn(s.word,r.defaultAccent,r).catch(()=>void 0)},[s,r]),!s)return null;let l=e=>{o(n=>Math.min(t.length-1,Math.max(0,n+e)))};return(0,E.jsxs)(`div`,{className:`space-y-5`,children:[(0,E.jsxs)(`div`,{className:`flex flex-wrap items-end justify-between gap-4`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Study`}),(0,E.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:e?.name||`总记忆功能`})]}),(0,E.jsxs)(`div`,{className:`text-sm text-slate-500`,children:[a+1,` / `,t.length]})]}),(0,E.jsx)(Gt,{value:a+1,max:t.length,label:`浏览进度，已初学 ${c} 词`}),(0,E.jsx)(Mn,{word:s,progress:n[s.id],audioSettings:r}),(0,E.jsxs)(`div`,{className:`grid gap-3 sm:grid-cols-4`,children:[(0,E.jsxs)(`button`,{type:`button`,onClick:()=>l(-1),disabled:a===0,className:`btn-secondary disabled:opacity-40`,children:[(0,E.jsx)(ee,{size:18,"aria-hidden":`true`}),`上一个`]}),(0,E.jsxs)(`button`,{type:`button`,onClick:()=>i(s.id),className:`btn-secondary sm:col-span-2`,children:[(0,E.jsx)(Ce,{size:18,"aria-hidden":`true`}),`加入今日学习`]}),(0,E.jsxs)(`button`,{type:`button`,onClick:()=>i(s.id),className:`btn-primary`,children:[(0,E.jsx)(ce,{size:18,"aria-hidden":`true`}),`标记已初学`]}),(0,E.jsxs)(`button`,{type:`button`,onClick:()=>l(1),disabled:a===t.length-1,className:`btn-secondary sm:col-start-4 disabled:opacity-40`,children:[(0,E.jsx)(S,{size:18,"aria-hidden":`true`}),`下一个`]})]})]})}function Zn({words:e,progressMap:t,audioSettings:n,onStudy:r,onRecall:i,onQuiz:a}){let[o,s]=(0,y.useState)(`all`),c=(0,y.useMemo)(()=>o===`unlearned`?e.filter(e=>!t[e.id]?.learned):o===`due`?O(e,t):o===`weak`?kt(e,t):o===`wrong`?At(e,t):o===`mastered`?Ot(e,t):e,[o,e,t]);return(0,E.jsxs)(`div`,{className:`space-y-5`,children:[(0,E.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,E.jsxs)(`div`,{className:`flex flex-wrap items-end justify-between gap-4`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Library`}),(0,E.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`总词库`}),(0,E.jsxs)(`p`,{className:`mt-2 text-sm text-slate-500`,children:[`共 `,e.length,` 词`]})]}),(0,E.jsx)(Ln,{value:o,items:[{value:`all`,label:`全部`},{value:`unlearned`,label:`未学`},{value:`due`,label:`应复习`},{value:`weak`,label:`不熟`},{value:`wrong`,label:`错题`},{value:`mastered`,label:`掌握`}],onChange:s})]}),(0,E.jsxs)(`div`,{className:`mt-5 grid gap-3 sm:grid-cols-3`,children:[(0,E.jsxs)(`button`,{type:`button`,onClick:r,className:`mode-card`,children:[(0,E.jsx)(Se,{size:20,"aria-hidden":`true`}),(0,E.jsx)(`span`,{children:`总记忆`})]}),(0,E.jsxs)(`button`,{type:`button`,onClick:i,className:`mode-card`,children:[(0,E.jsx)(ie,{size:20,"aria-hidden":`true`}),(0,E.jsx)(`span`,{children:`总理解`})]}),(0,E.jsxs)(`button`,{type:`button`,onClick:a,className:`mode-card`,children:[(0,E.jsx)(ue,{size:20,"aria-hidden":`true`}),(0,E.jsx)(`span`,{children:`总测试`})]})]})]}),(0,E.jsxs)(`div`,{className:`flex items-center gap-2 text-sm text-slate-500`,children:[(0,E.jsx)(xe,{size:16,"aria-hidden":`true`}),`当前显示 `,c.length,` 词`]}),(0,E.jsx)(`div`,{className:`grid gap-3 lg:grid-cols-2`,children:c.map(e=>(0,E.jsx)(Mn,{word:e,progress:t[e.id],compact:!0,audioSettings:n},e.id))})]})}function Qn({unit:e,progressMap:t,onStudy:n,onRecall:r,onQuiz:i}){let a=un(e.words,t);return(0,E.jsx)(`div`,{className:`space-y-5`,children:(0,E.jsx)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:(0,E.jsxs)(`div`,{className:`grid gap-5 lg:grid-cols-[1fr_320px]`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`mb-3 text-xs font-semibold uppercase text-copper`,children:`Unit`}),(0,E.jsx)(`h1`,{className:`text-3xl font-semibold text-ink`,children:e.name}),(0,E.jsxs)(`p`,{className:`mt-2 text-sm text-slate-500`,children:[`共 `,e.words.length,` 词`,e.expectedCount?`，原文标注 ${e.expectedCount} 词`:``]}),(0,E.jsxs)(`div`,{className:`mt-6 grid gap-3 sm:grid-cols-3`,children:[(0,E.jsxs)(`button`,{type:`button`,onClick:n,className:`mode-card`,children:[(0,E.jsx)(ne,{size:20,"aria-hidden":`true`}),(0,E.jsx)(`span`,{children:`记忆`})]}),(0,E.jsxs)(`button`,{type:`button`,onClick:r,className:`mode-card`,children:[(0,E.jsx)(ie,{size:20,"aria-hidden":`true`}),(0,E.jsx)(`span`,{children:`理解`})]}),(0,E.jsxs)(`button`,{type:`button`,onClick:i,className:`mode-card`,children:[(0,E.jsx)(ue,{size:20,"aria-hidden":`true`}),(0,E.jsx)(`span`,{children:`测试`})]})]})]}),(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-[#f8fbff] p-4`,children:[(0,E.jsxs)(`div`,{className:`mb-4 flex items-center gap-2 font-semibold text-ink`,children:[(0,E.jsx)(ve,{size:18,"aria-hidden":`true`}),`单元进度`]}),(0,E.jsxs)(`div`,{className:`grid grid-cols-3 gap-2 text-center text-sm`,children:[(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-3`,children:[(0,E.jsx)(`div`,{className:`font-semibold`,children:a.learned}),(0,E.jsx)(`div`,{className:`text-xs text-slate-500`,children:`学习`})]}),(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-3`,children:[(0,E.jsx)(`div`,{className:`font-semibold`,children:a.mastered}),(0,E.jsx)(`div`,{className:`text-xs text-slate-500`,children:`掌握`})]}),(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-3`,children:[(0,E.jsx)(`div`,{className:`font-semibold`,children:a.due}),(0,E.jsx)(`div`,{className:`text-xs text-slate-500`,children:`到期`})]})]}),(0,E.jsx)(`div`,{className:`mt-4`,children:(0,E.jsx)(Gt,{value:a.mastered,max:e.words.length,label:`掌握进度`})})]})]})})})}var $n=[[`基础高频`,`后续基础词包会放在这里，适合每天热身。`],[`词根词缀`,`用于把生词拆开记，减少死背压力。`],[`易混辨析`,`把拼写、词义相近的词集中复现。`]];function er({units:e,progressMap:t,onOpenUnit:n}){let[r,i]=(0,y.useState)(`required`),a=(0,y.useMemo)(()=>e.filter(e=>e.order>=1&&e.order<=26).sort((e,t)=>e.order-t.order),[e]),o=a.reduce((e,t)=>e+t.words.length,0);return(0,E.jsxs)(`div`,{className:`space-y-5`,children:[(0,E.jsx)(`section`,{className:`rounded-lg border border-sky-100 bg-white p-5 shadow-soft`,children:(0,E.jsxs)(`div`,{className:`flex flex-wrap items-end justify-between gap-4`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Units`}),(0,E.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`单元板块`}),(0,E.jsx)(`p`,{className:`mt-2 text-sm leading-6 text-slate-500`,children:`先分成基础版和必备版。必备版已放入 Unit1-26，按重复记忆节奏推进。`})]}),(0,E.jsx)(Ln,{value:r,items:[{value:`basic`,label:`基础版`},{value:`required`,label:`必备版`}],onChange:i})]})}),r===`basic`?(0,E.jsx)(`section`,{className:`grid gap-4 md:grid-cols-3`,children:$n.map(([e,t])=>(0,E.jsxs)(`article`,{className:`rounded-lg border border-dashed border-sky-200 bg-white/85 p-5 shadow-soft`,children:[(0,E.jsx)(`div`,{className:`mb-4 grid h-10 w-10 place-items-center rounded-lg border border-harbor/15 bg-[#f8fbff] text-harbor`,children:(0,E.jsx)(ve,{size:20,"aria-hidden":`true`})}),(0,E.jsx)(`h2`,{className:`text-xl font-semibold text-ink`,children:e}),(0,E.jsx)(`p`,{className:`mt-2 text-sm leading-6 text-slate-500`,children:t}),(0,E.jsx)(`div`,{className:`mt-5 rounded-lg border border-sky-100 bg-[#f8fbff] p-3 text-sm font-semibold text-harbor`,children:`不影响必备版进度`})]},e))}):(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(`section`,{className:`grid gap-4 sm:grid-cols-3`,children:[(0,E.jsxs)(`div`,{className:`rounded-lg border border-sky-100 bg-white p-4 shadow-soft`,children:[(0,E.jsx)(`div`,{className:`text-sm text-slate-500`,children:`必备单元`}),(0,E.jsx)(`div`,{className:`mt-1 text-2xl font-semibold text-ink`,children:a.length})]}),(0,E.jsxs)(`div`,{className:`rounded-lg border border-sky-100 bg-white p-4 shadow-soft`,children:[(0,E.jsx)(`div`,{className:`text-sm text-slate-500`,children:`总词量`}),(0,E.jsx)(`div`,{className:`mt-1 text-2xl font-semibold text-ink`,children:o})]}),(0,E.jsxs)(`div`,{className:`rounded-lg border border-sky-100 bg-white p-4 shadow-soft`,children:[(0,E.jsx)(`div`,{className:`text-sm text-slate-500`,children:`范围`}),(0,E.jsx)(`div`,{className:`mt-1 text-2xl font-semibold text-ink`,children:`Unit1-26`})]})]}),(0,E.jsx)(`div`,{className:`grid gap-4 md:grid-cols-2`,children:a.map(e=>{let r=un(e.words,t);return(0,E.jsxs)(`article`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,E.jsxs)(`div`,{className:`flex items-start justify-between gap-4`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`mb-3 grid h-10 w-10 place-items-center rounded-lg border border-harbor/15 bg-[#f8fbff] text-harbor`,children:(0,E.jsx)(re,{size:20,"aria-hidden":`true`})}),(0,E.jsx)(`h2`,{className:`text-xl font-semibold text-ink`,children:e.name}),(0,E.jsxs)(`p`,{className:`mt-1 text-sm text-slate-500`,children:[`共 `,e.words.length,` 词`]})]}),(0,E.jsx)(`button`,{type:`button`,onClick:()=>n(e.id),className:`icon-btn`,title:`进入单元`,children:(0,E.jsx)(S,{size:18,"aria-hidden":`true`})})]}),(0,E.jsxs)(`div`,{className:`mt-5 grid grid-cols-3 gap-3 text-center`,children:[(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-[#f8fbff] p-3`,children:[(0,E.jsx)(`div`,{className:`font-semibold text-ink`,children:r.learned}),(0,E.jsx)(`div`,{className:`text-xs text-slate-500`,children:`已学习`})]}),(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-[#f8fbff] p-3`,children:[(0,E.jsx)(`div`,{className:`font-semibold text-ink`,children:r.mastered}),(0,E.jsx)(`div`,{className:`text-xs text-slate-500`,children:`已掌握`})]}),(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-[#f8fbff] p-3`,children:[(0,E.jsx)(`div`,{className:`font-semibold text-ink`,children:r.due}),(0,E.jsx)(`div`,{className:`text-xs text-slate-500`,children:`待复习`})]})]}),(0,E.jsx)(`div`,{className:`mt-5`,children:(0,E.jsx)(Gt,{value:r.mastered,max:e.words.length,label:`掌握进度`})}),e.words.length?null:(0,E.jsxs)(`div`,{className:`mt-4 flex items-center gap-2 rounded-lg border border-copper/20 bg-copper/5 p-3 text-sm text-copper`,children:[(0,E.jsx)(le,{size:16,"aria-hidden":`true`}),`这个单元文件已放入，但还需要继续补充可解析单词。`]})]},e.id)})})]})]})}function tr({mode:e,unitId:t,wordCount:n=0,onComplete:r}){let i=(0,y.useRef)(null),a=(0,y.useRef)(0),o=(0,y.useRef)(null),[,s]=(0,y.useState)(0);if((0,y.useEffect)(()=>{if(!e)return;i.current=tn(e,t,n),a.current=Date.now();let c=window.setInterval(()=>s(e=>e+1),1e3),l=()=>{document.hidden?o.current=Date.now():o.current&&Date.now()-o.current>6e4&&(a.current+=Date.now()-o.current,o.current=null)};return document.addEventListener(`visibilitychange`,l),()=>{window.clearInterval(c),document.removeEventListener(`visibilitychange`,l);let e=i.current;if(!e)return;let t=new Date,o=Math.max(0,Math.floor((Date.now()-a.current)/1e3));r({...e,endedAt:t.toISOString(),durationSeconds:o,wordCount:n}),i.current=null}},[e,t,n,r]),!e||!i.current)return null;let c=Math.floor((Date.now()-a.current)/1e3);return(0,E.jsxs)(`div`,{className:`fixed bottom-20 right-4 z-30 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-500 shadow-soft md:bottom-4`,children:[`本次 `,Math.floor(c/60),`分`,c%60,`秒`]})}var nr=`# 2027考研英语红宝书
## 必考词Unit19 72词

1.  **anxious** /ˈæŋkʃəs/
    adj. 焦虑的；让人担忧的；渴望的

2.  **apart** /əˈpɑːt/
    adv. 相距；分离；成碎片；除外

3.  **assassinate** /əˈsæsɪneɪt/
    vt. 暗杀，刺杀

4.  **assault** /əˈsɔːlt/
    n. 攻击，袭击；攻坚；抨击
    vt. 袭击，殴打；使…感到难受

5.  **assemble** /əˈsembl/
    vi. vt. (使)集合，(使)聚集
    vt. 组装，装配

6.  **assembly** /əˈsembli/
    n. 立法机构，议会；集会；组装

7.  **assert** /əˈsɜːt/
    vt. 断言；坚持(主张)；维护(权威)

8.  **component** /kəmˈpəʊnənt/
    n. 成分，部件，组成部分
    adj. 组成的，构成的

9.  **compose** /kəmˈpəʊz/
    vt. 组成；使平静
    vt. vi. 作(曲)，写(信、诗等)

10. **composition** /ˌkɒmpəˈzɪʃn/
    n. 构成，成分；构图
    n. 作品；创作，作曲；作文

11. **comprehend** /ˌkɒmprɪˈhend/
    vi. vt. 理解，领悟

12. **comprehension** /ˌkɒmprɪˈhenʃn/
    n. 理解力；阅读(听力)理解测试

13. **comprehensive** /ˌkɒmprɪˈhensɪv/
    adj. 全面的，综合性的；综合教育的
    n. (英国)综合中学

14. **condemn** /kənˈdem/
    vt. 谴责；判处；使陷入
    vt. (因安全等原因而)封闭(建筑)

15. **condense** /kənˈdens/
    vi. vt. (使)凝结；(使)浓缩，变浓稠
    vt. 压缩，精简(文章或讲话)

16. **condition** /kənˈdɪʃn/
    n. 状态；健康状况；疾病；条件
    vt. 训练，使习惯于；影响；养护

17. **conduct** /kənˈdʌkt/
    vt. 实施，执行；表现；传导；引导
    vi. vt. 指挥(歌唱或演奏)
    n. 行为，举止；实施办法

18. **conductor** /kənˈdʌktə(r)/
    n. 指挥；列车长；售票员；导体

19. **disable** /dɪsˈeɪbl/
    vt. 使伤残；使不能运转

20. **disappear** /ˌdɪsəˈpɪə(r)/
    vi. 消失，不见；不复存在；失踪

21. **disappoint** /ˌdɪsəˈpɔɪnt/
    vt. vi. (使)失望
    vt. 使…破灭

22. **discipline** /ˈdɪsəplɪn/
    n. 纪律；训练方法；自制力；学科
    vt. 处罚；训导，管教；自我控制

23. **disclose** /dɪsˈkləʊz/
    vt. 透露，披露；使显露

24. **discover** /dɪˈskʌvə(r)/
    vt. 发现；找到；了解到；发掘

25. **discovery** /dɪˈskʌvəri/
    n. 发现；被发现的事物(或人)

26. **hoist** /hɔɪst/
    vt. 吊起，升起，提起
    n. 吊车，起重机

27. **hold** /həʊld/
    vt. 拿着；保持；持有；举行；认为
    vt. 拥抱；容纳，包含；担任
    vt. vi. (打电话时)不挂断
    n. 拿，握；影响，控制；支撑点

28. **holder** /ˈhəʊldə(r)/
    n. 持有人；支托物

29. **household** /ˈhaʊshəʊld/
    n. 家庭，一家人
    adj. 家用的，家庭的；家喻户晓的

30. **however** /haʊˈevə(r)/
    adv. 不管多么；无论如何；然而

31. **huddle** /ˈhʌdl/
    vi. 挤在一起；缩成一团
    n. 拥挤的一群；杂乱的一堆

32. **narrative** /ˈnærətɪv/
    n. 叙事；记叙，叙述
    adj. 记叙的，叙述的

33. **narrow** /ˈnærəʊ/
    adj. 狭窄的；勉强的；狭义的
    vi. vt. 使变窄，缩小

34. **nasty** /ˈnɑːsti/
    adj. 不友善的；糟糕的；严重的
    adj. 下流的；危险的

35. **nation** /ˈneɪʃn/
    n. 国家；民族；(全体)国民

36. **national** /ˈnæʃnəl/
    adj. 国家的，民族的；国有的
    n. 国民，公民

37. **nationality** /ˌnæʃəˈnæləti/
    n. 国籍；民族，种族

38. **native** /ˈneɪtɪv/
    adj. 出生地的，本地的；与生俱来的
    n. 出生于某地的人；本地人；土著

39. **natural** /ˈnætʃrəl/
    adj. 自然的；正常的；天生的
    n. 有天赋的人

40. **nature** /ˈneɪtʃə(r)/
    n. 自然；天性，性格；本质

41. **overall** /ˌəʊvərˈɔːl/
    adj. 全面的，总体的
    adv. 全部的，总计；总体上
    n. 连身工作服

42. **overcome** /ˌəʊvəˈkʌm/
    vt. 克服；击败；对…产生极大影响

43. **overlap** /ˌəʊvəˈlæp/
    vt. vi. (与…)重叠；(时间等)有重合
    n. 重叠部分

44. **portion** /ˈpɔːʃn/
    n. 部分；(饭菜的)一份
    vt. 把…分成多份

45. **possibility** /ˌpɒsəˈbɪləti/
    n. 可能性；可能的事；机会

46. **possible** /ˈpɒsəbl/
    adj. 可能的；可能存在的；合理的

47. **potential** /pəˈtenʃl/
    adj. 潜在的，可能的
    n. 潜力；潜质；可能性；电势

48. **pour** /pɔː(r)/
    vt. (使)倾倒，倒出；下大雨
    vi. (液体、烟等)涌流；不断涌向
`,rr=`# 2027考研英语红宝书
## 必考词Unit20 59词

1.  **console** /kənˈsəʊl/
    vt. 安慰，抚慰，慰藉
    n. 控制台，仪表盘

2.  **consist** /kənˈsɪst/
    vi. 由…组成；在于

3.  **consistent** /kənˈsɪstənt/
    adj. 一贯的；与…一致的；连续的

4.  **constant** /ˈkɒnstənt/
    adj. 经常的，不断的；恒定的
    n. 不变的事物，常数，常量

5.  **constituent** /kənˈstɪtjuənt/
    n. 成分；选民
    adj. 构成的，组成的

6.  **constitute** /ˈkɒnstɪtjuːt/
    v. link. 构成，组成；相当于，可算作
    vt. 设立，成立

7.  **constitution** /ˌkɒnstɪˈtjuːʃn/
    n. 宪法，章程；体质；构成，成分

8.  **constrain** /kənˈstreɪn/
    vt. 限制，约束；强迫，迫使

9.  **construct** /kənˈstrʌkt/
    vt. 建造，修建；组成，构成；绘制
    n. 构想，概念，观念

10. **distinct** /dɪˈstɪŋkt/
    adj. 截然不同的；清晰的；确实的

11. **distinction** /dɪˈstɪŋkʃn/
    n. 差别，不同；卓越；特点；荣誉

12. **distinguish** /dɪˈstɪŋɡwɪʃ/
    vi. vt. 区分，辨别，分清
    vt. 使有别于；辨别出；使表现突出

13. **fruitful** /ˈfruːtfl/
    adj. 富有成效的；富饶的，多产的

14. **frustrate** /frʌˈstreɪt/
    vt. 使灰心，使沮丧；阻止，挫败

15. **fulfill** /fʊlˈfɪl/
    vt. 实现，达到；履行；使有成就感

16. **function** /ˈfʌŋkʃn/
    n. 功能，职能；宴会；函数
    vi. 起作用，运转

17. **fund** /fʌnd/
    n. 基金；专款；资金；大量
    vt. 资助；为…提供资金

18. **fundamental** /ˌfʌndəˈmentl/
    adj. 根本的，最重要的；基础的
    n. 根本；基础

19. **evidence** /ˈevɪdəns/
    n. 证据，证明
    vt. 证明，表明

20. **evident** /ˈevɪdənt/
    adj. 明显的，显然的

21. **evil** /ˈiːvl/
    adj. 邪恶的；道德败坏的；恶魔的
    n. 邪恶；弊端；坏处

22. **environment** /ɪnˈvaɪrənmənt/
    n. 生活环境，周围状况；自然环境

23. **enterprise** /ˈentəpraɪz/
    n. 企业；项目，规划；进取心

24. **entertain** /ˌentəˈteɪn/
    vt. vi. 使快乐，使有兴趣，娱乐；款待
    vt. 怀有…想法(或感受)

25. **entertainment** /ˌentəˈteɪnmənt/
    n. 娱乐节目，娱乐活动；招待

26. **monopoly** /məˈnɒpəli/
    n. 垄断；垄断企业；大富翁(游戏)

27. **monotonous** /məˈnɒtənəs/
    adj. 单调乏味的，毫无变化的

28. **mood** /muːd/
    n. 情绪，心情；坏心情；气氛

29. **transmission** /trænzˈmɪʃn/
    n. (数据的)传输；传播；节目播送

30. **transmit** /trænzˈmɪt/
    vt. vi. 传送，发送(信号、信息等)
    vt. 传播(疾病)；传达(思想)；传导

31. **transplant** /trænsˈplɑːnt/
    n. 移植；移植的器官
    vt. 移植；移栽；使迁移

32. **transport** /trænsˈpɔːt/
    n. 交通运输系统；交通工具；运输
    vt. 运输；使…仿佛置身于

33. **stock** /stɒk/
    n. 库存；储备物；股票；家畜
    vt. (商店)存货；贮存，贮备
    adj. 老一套的；(商店)库存的，常备的

34. **store** /stɔː(r)/
    n. 商店；店铺；储备物
    vt. 贮藏；(在计算机里)存储

35. **storage** /ˈstɔːrɪdʒ/
    n. 储藏，贮存；(计算机)存储

36. **stride** /straɪd/
    vi. 大步走，阔步行走
    n. 大步；进展，进步；步伐

37. **strike** /straɪk/
    vt. 打，击，撞；突然想到；给…印象
    vi. 罢工；行进；划(火柴)；敲，鸣
    n. 罢工；袭击；击，打；全中

38. **striking** /ˈstraɪkɪŋ/
    adj. 显著的，惊人的；容貌出众的

39. **string** /strɪŋ/
    n. 细绳，线；一串；一系列；弦
    vt. 悬挂，系；把…连在一起
    adj. 弦乐器的；线织的

40. **structure** /ˈstrʌktʃə(r)/
    n. 结构，构造；建筑物；精心组织
    vt. 组织，安排

41. **stun** /stʌn/
    vt. 使震惊；使昏迷；使印象深刻

42. **primary** /ˈpraɪməri/
    adj. 首要的，主要的；最早的；小学的
    n. (美国的)初选

43. **prime** /praɪm/
    adj. 首要的；最好的；典型的
    n. 盛年；鼎盛时期
    vt. 准备；事先指点

44. **primitive** /ˈprɪmətɪv/
    adj. 原始的，落后的；原始本能的
    n. 原始派艺术家

45. **principal** /ˈprɪnsəpl/
    adj. 主要的，最重要的
    n. 校长；本金；资本；主角

46. **principle** /ˈprɪnsəpl/
    n. 原则；原理；定律

47. **psychiatry** /saɪˈkaɪətri/
    n. 精神病学；精神病治疗

48. **psychology** /saɪˈkɒlədʒi/
    n. 心理学；心理，心理特点

49. **liability** /ˌlaɪəˈbɪləti/
    n. (法律上的)责任；累赘；债务

50. **liable** /ˈlaɪəbl/
    adj. 可能做…的；有责任的；易遭受…的

51. **liberal** /ˈlɪbərəl/
    adj. 开明的；(政治)自由的；通识的
    adj. 慷慨的；不完全准确的
    n. 支持变革的人；自由党成员

52. **liberate** /ˈlɪbəreɪt/
    vt. 使自由，使解脱，解放

53. **license** /ˈlaɪsns/
    n. 许可证，执照；放肆，放纵
    vt. 批准，许可

54. **innocent** /ˈɪnəsnt/
    adj. 无罪的；无辜受害的；纯真的
    n. 无辜的人；天真的人

55. **innovation** /ˌɪnəˈveɪʃn/
    n. 创新，革新；新事物，新方法

56. **anguish** /ˈæŋɡwɪʃ/
    n. 极度痛苦

57. **annoy** /əˈnɔɪ/
    vt. 使生气；使烦恼，烦扰

58. **annual** /ˈænjuəl/
    adj. 一年一次的；年度的
    n. 年刊，年册；一年生植物

59. **anchor** /ˈæŋkə(r)/
    n. 锚；主持人；顶梁柱
    vt. 抛锚；使停泊；主持(节目)
    adj. 固定的，稳定的

`,ir=`# 2027考研英语红宝书
## 必考词Unit21 65词

1.  **pose** /pəʊz/
    vt. 造成(威胁、问题等)；提出
    vi. 摆姿势；佯装，假扮
    n. (为拍照等摆的)姿势

2.  **position** /pəˈzɪʃn/
    n. 位置；姿态，姿势；处境，立场；地位；职位
    vt. 安放，放置

3.  **positive** /ˈpɒzətɪv/
    adj. 积极的；有益的；表示赞同的；确信的；阳性的
    n. 优势，优点；阳性结果

4.  **possess** /pəˈzes/
    vt. 拥有；具有，具备；支配

5.  **possession** /pəˈzeʃn/
    n. 具有，拥有；个人财产；殖民地

6.  **dilute** /daɪˈluːt/
    vt. 稀释，冲淡；削弱，降低
    adj. 稀释的，冲淡了的

7.  **dim** /dɪm/
    adj. 昏暗的；模糊的；迟钝的；前景黯淡的
    vi. vt. (使)变昏暗；(使)变渺茫

8.  **diminish** /dɪˈmɪnɪʃ/
    vi. vt. 减少，降低，减弱
    vt. 贬低，轻视

9.  **amateur** /ˈæmətə(r)/
    n. 业余爱好者；外行
    adj. 非职业的，业余的

10. **amaze** /əˈmeɪz/
    vt. 使惊奇，使大吃一惊

11. **ambiguous** /æmˈbɪɡjuəs/
    adj. 模棱两可的，含糊不清的

12. **ambition** /æmˈbɪʃn/
    n. 野心，抱负，理想

13. **ambitious** /æmˈbɪʃəs/
    adj. 有野心的；规模宏大的，艰巨的

14. **bubble** /ˈbʌbl/
    n. 气泡；肥皂泡；经济泡沫
    vi. 起泡，冒泡；(情绪等)涌动

15. **budget** /ˈbʌdʒɪt/
    n. 预算；(政府的)预算案
    vi. vt. 把…计入预算；为…安排(时间)
    adj. 低价的，低廉的

16. **build** /bɪld/
    vt. vi. 建筑，建造
    vt. 创建，开发
    vi. (感觉)逐渐增强
    n. 体格，体形，身材

17. **business** /ˈbɪznəs/
    n. 商业，生意；商务；企业；职责

18. **compress** /kəmˈpres/
    vt. vi. (使)压紧，压缩
    vt. 精简(文章等)
    n. (用以退烧、止痛的)敷布，压布

19. **comprise** /kəmˈpraɪz/
    vt. 包括，由…组成；构成，组成

20. **compromise** /ˈkɒmprəmaɪz/
    n. 妥协，让步；折中，折中办法
    vi. 妥协，让步，折中
    vt. 违背(原则)；达不到(标准)；危及，有损于

21. **conceive** /kənˈsiːv/
    vt. 想象，想出，构想；怀孕

22. **concentrate** /ˈkɒnsntreɪt/
    vi. vt. 全神贯注；(使)集中
    n. 浓缩液，浓缩物

23. **concept** /ˈkɒnsept/
    n. 概念，想法

24. **conception** /kənˈsepʃn/
    n. 构思；概念；受孕

25. **concern** /kənˈsɜːn/
    n. 担心；关心；对…重要的事
    vt. 关于；使…担心；涉及，影响

26. **concise** /kənˈsaɪs/
    adj. 简洁的，简明的

27. **concrete** /ˈkɒŋkriːt/
    adj. 确实的，具体的；混凝土制的
    n. 混凝土

28. **conclude** /kənˈkluːd/
    vt. 推断出，作出结论；达成(协议)
    vi. vt. (使)结束，终止

29. **conclusion** /kənˈkluːʒn/
    n. 结论，推论；结束，结尾；签订

30. **concurrent** /kənˈkʌrənt/
    adj. 并存的，同时发生的

31. **confer** /kənˈfɜː(r)/
    vt. 授予，赋予
    vi. 商议，协商

32. **conference** /ˈkɒnfərəns/
    n. 会议

33. **confess** /kənˈfes/
    vi. vt. 供认，坦白；承认；忏悔

34. **epic** /ˈepɪk/
    n. 史诗；史诗般的电影或书；壮举
    adj. 史诗般的；漫长艰难的；壮丽的

35. **epidemic** /ˌepɪˈdemɪk/
    n. 流行病；泛滥，猖獗
    adj. 泛滥的，猖獗的

36. **episode** /ˈepɪsəʊd/
    n. 一段经历，小插曲；一集

37. **epoch** /ˈiːpɒk/
    n. 时代，纪元；(地质中的)世

38. **indifferent** /ɪnˈdɪfrənt/
    adj. 不感兴趣的，冷淡的；一般的

39. **indignant** /ɪnˈdɪɡnənt/
    adj. 愤慨的，愤怒的

40. **indignation** /ˌɪndɪɡˈneɪʃn/
    n. 愤慨，愤怒，义愤

41. **indispensable** /ˌɪndɪˈspensəbl/
    adj. 必不可少的，不可或缺的

42. **individual** /ˌɪndɪˈvɪdʒuəl/
    adj. 单独的，个人的；独特的
    n. 个人；有个性的人

43. **mess** /mes/
    n. 杂乱；麻烦，困境；不整洁的人
    vt. 使不整洁，弄乱

44. **message** /ˈmesɪdʒ/
    n. 信息，消息，要旨
    vt. 给…发消息

45. **messenger** /ˈmesɪndʒə(r)/
    n. 送信者，通信员

46. **method** /ˈmeθəd/
    n. 方法，办法；条理

47. **militant** /ˈmɪlɪtənt/
    adj. 好战的，激进的
    n. 好战分子，激进分子

48. **military** /ˈmɪlətri/
    adj. 军事的，军队的，军用的
    n. 军队，军方，军人

49. **mind** /maɪnd/
    n. 头脑；思维，心思；处境，立场
    vt. 当心，注意

50. **redeem** /rɪˈdiːm/
    vt. 弥补，拯救；兑换，赎回；履行(诺言)

51. **reduce** /rɪˈdjuːs/
    vt. 减少，缩小，降低
    vt. (使)蒸发，降低
    vi. 减轻体重，节食

52. **reduction** /rɪˈdʌkʃn/
    n. 减少，缩小；脱氧

53. **refer** /rɪˈfɜː(r)/
    vi. 提及；指，关于；参考，查阅

54. **reference** /ˈrefrəns/
    n. 提到；参考；书目；推荐信
    vt. 查阅，参考

55. **subject** /ˈsʌbdʒɪkt/
    n. 主题；学科；对象；主语；臣民
    adj. 易遭…的；取决于…的；受…支配
    vt. 使屈服，使顺从，使遭受

56. **subjective** /səbˈdʒektɪv/
    adj. 主观的；主语的

57. **spoil** /spɔɪl/
    vt. 破坏，毁掉；宠坏，溺爱；变质
    vi. (食物)变质
    n. 赃物，战利品

58. **sponsor** /ˈspɒnsə(r)/
    n. 赞助商；资助者；倡议者；保证人
    vt. 赞助，资助；举办，倡议

59. **spread** /spred/
    vt. 展开，摊开；伸开；使分散
    vt. 传播，散布；蔓延，扩散
    vi. 传播；散布；蔓延；扩展
    n. 传播；散布；广泛开展

60. **spur** /spɜː(r)/
    n. 马刺；鞭策，激励；山嘴
    vt. 鞭策，激励，促进，加速

61. **spy** /spaɪ/
    n. 间谍；密探
    vt. 突然看见，发现
    vi. 从事间谍活动，搜集情报

62. **stability** /stəˈbɪləti/
    n. 稳定，稳固

63. **stable** /ˈsteɪbl/
    adj. 稳定的，稳固的；(人)稳重的
    n. 马厩；养马场
    vt. 使(马)入厩

64. **staff** /stɑːf/
    n. 全体职员；(学校)行政人员
    vt. 给…配备职员，任职于

65. **stage** /steɪdʒ/
    n. 阶段；步骤；舞台
    vt. 上演，举办；组织，筹划

`,ar=`# 2027考研英语红宝书
## 必考词Unit22 73词

1.  **twist** /twɪst/
    vt. vi. (使)弯曲变形；扭动，缠绕
    vi. 曲折，蜿蜒
    vt. 使弯曲；转动，旋转；扭伤；曲解
    n. 转动，旋转；转折；急转弯处

2.  **trivial** /ˈtrɪviəl/
    adj. 琐碎的，微不足道的

3.  **try** /traɪ/
    vi. vt. 试图，努力
    vt. 试，试用；审讯，审判
    n. 尝试，努力

4.  **tumble** /ˈtʌmbl/
    vi. vt. (使)跌倒，滚落
    vi. 倒塌；暴跌；仓促移动；翻跟头
    n. 跌倒，暴跌；混乱的一堆

5.  **turbulent** /ˈtɜːbjələnt/
    adj. 动荡的，混乱的；湍急的

6.  **turn** /tɜːn/
    vi. vt. (使)旋转；转身；转弯；翻(页)；松开；折起
    vt. 把…翻过来；使成为；到达(年龄等)
    v. link. (使)变成，成为
    n. 旋转；(车)转弯；机会；转变

7.  **turnover** /ˈtɜːnəʊvə(r)/
    n. 营业额；人员流动率；三角馅饼

8.  **type** /taɪp/
    n. 类型，种类；某类人；印刷字体
    vt. 打(字)
    vt. 确定…的类型，把…分类

9.  **typical** /ˈtɪpɪkl/
    adj. 典型的；一贯的；果不其然的

10. **voluntary** /ˈvɒləntəri/
    adj. 自愿的；无偿的；志愿的

11. **volunteer** /ˌvɒlənˈtɪə(r)/
    n. 志愿者；自告奋勇者
    vi. vt. 自愿做，自告奋勇
    vt. 主动建议，主动提出
    vi. 自愿参军，主动提出

12. **vote** /vəʊt/
    vt. vi. 投票，表决，选举
    vt. 选出，推举；表明，公认；提议
    n. 选票；投票；投票权

13. **vulgar** /ˈvʌlɡə(r)/
    adj. 粗俗的，俗气的；下流的

14. **vulnerable** /ˈvʌlnərəbl/
    adj. 脆弱的，易受伤害的

15. **author** /ˈɔːθə(r)/
    n. 作者，作家
    vt. 创作，写作，撰写

16. **authority** /ɔːˈθɒrəti/
    n. 权威；权力；当权者；官方；授权

17. **auxiliary** /ɔːɡˈzɪliəri/
    adj. 辅助的，备用的
    n. 助动词

18. **avail** /əˈveɪl/
    vi. vt. 有帮助，有用；利用(机会等)
    n. 效用，帮助

19. **available** /əˈveɪləbl/
    adj. 可获得的；可用的；有空的

20. **critic** /ˈkrɪtɪk/
    n. 评论家，批评家；批评者

21. **critical** /ˈkrɪtɪkl/
    adj. 批判的；关键的；危急的

22. **criticism** /ˈkrɪtɪsɪzəm/
    n. 批评，指责；(对书等的)评论

23. **criticize** /ˈkrɪtɪsaɪz/
    vi. vt. 批评，指责，批判
    vt. 评论，评价

24. **crucial** /ˈkruːʃl/
    adj. 至关重要的，关键性的

25. **culminate** /ˈkʌlmɪneɪt/
    vi. 以…告终，达到…的顶点

26. **culprit** /ˈkʌlprɪt/
    n. 罪犯；肇事者；问题的起因

27. **cultivate** /ˈkʌltɪveɪt/
    vt. 开垦，种植；建立(友谊)；培养

28. **culture** /ˈkʌltʃə(r)/
    n. 文化

29. **dual** /ˈdjuːəl/
    adj. 双的，双重的，两部分的

30. **dubious** /ˈdjuːbiəs/
    adj. 怀疑的；可疑的；不光彩的

31. **due** /djuː/
    adj. 由于；预期的；应给的；到期的
    n. 应有的权利，应得的东西
    adv. 正对着，正向

32. **durable** /ˈdjʊərəbl/
    adj. 耐用的，持久的

33. **duration** /djuˈreɪʃn/
    n. 持续时间，期间

34. **duty** /ˈdjuːti/
    n. 责任，义务；职责；税

35. **dynamic** /daɪˈnæmɪk/
    adj. 充满活力的；动态的
    n. 动态；力学，动力学

36. **extinct** /ɪkˈstɪŋkt/
    adj. 已灭绝的，消失的；(火山)死的

37. **extinguish** /ɪkˈstɪŋɡwɪʃ/
    vt. 熄灭，扑灭；毁灭，使破灭

38. **introduce** /ˌɪntrəˈdjuːs/
    vt. 介绍，使初次了解；推行，引入

39. **introduction** /ˌɪntrəˈdʌkʃn/
    n. 采用，引进；介绍；序言

40. **invest** /ɪnˈvest/
    vi. vt. 投资；投入(时间等)；授(权)

41. **investment** /ɪnˈvestmənt/
    n. 投资；(时间、精力的)投入

42. **investigate** /ɪnˈvestɪɡeɪt/
    vi. vt. 调查，研究

43. **mutual** /ˈmjuːtʃuəl/
    adj. 相互的，彼此的，共有的

44. **mysterious** /mɪˈstɪəriəs/
    adj. 神秘的，故弄玄虚的

45. **mystery** /ˈmɪstəri/
    n. 谜；神秘的人(或物)；神秘性

46. **myth** /mɪθ/
    n. 神话；(很多人相信的)错误看法

47. **noble** /ˈnəʊbl/
    adj. 高尚的；贵族的；壮观的
    n. 贵族

48. **norm** /nɔːm/
    n. 常态，规范，准则；平均水平

49. **normal** /ˈnɔːml/
    adj. 正常的，平常的；身心健康的
    n. 通常标准，常态

50. **normalization** /ˌnɔːməlaɪˈzeɪʃn/
    n. 正常化

51. **note** /nəʊt/
    n. 笔记；便条；注释；纸币；音符；感情色彩，调子
    vt. 注意；指出，特别提到

52. **notion** /ˈnəʊʃn/
    n. 观念，理念，看法

53. **public** /ˈpʌblɪk/
    adj. 大众的；公共的；政府的；公开的
    n. 公众，民众

54. **publication** /ˌpʌblɪˈkeɪʃn/
    n. 出版；出版物；发表，公布

55. **publicity** /pʌbˈlɪsəti/
    n. (媒体的)关注，报道；宣传

56. **publish** /ˈpʌblɪʃ/
    vt. 出版，刊登；公布
    vt. vi. 发表(作品)

57. **result** /rɪˈzʌlt/
    n. 结果；得分；成绩；成果
    vi. 由…引起；造成，导致

58. **resultant** /rɪˈzʌltənt/
    adj. 作为结果的，因而发生的

59. **resume** /rɪˈzjuːm/
    vt. 继续，重新开始；恢复(职位)；回到(座位)
    n. 简历；履历；摘要(概述)

60. **reveal** /rɪˈviːl/
    vt. 揭示；揭露；展现，显露

61. **revelation** /ˌrevəˈleɪʃn/
    n. 被揭示的真相；揭露；(上帝的)启示

62. **revenge** /rɪˈvendʒ/
    n. 报复，报仇，雪耻
    vt. 报复，报仇

63. **revenue** /ˈrevənjuː/
    n. 收入；财政收入，税收

64. **supply** /səˈplaɪ/
    vt. 供应，供给，供给，供应；使满足
    vt. 使营养，供应
    n. 支持；资助；养活；支撑；证据；支持物；证据

65. **support** /səˈpɔːt/
    vt. 支持；资助；养活；支撑；证实
    n. 支持；资助；支撑物；证据

66. **suppose** /səˈpəʊz/
    vi. vt. 认为，猜想；(婉转表达)要不
    vt. 假定，假设

67. **suppress** /səˈpres/
    vt. 镇压；压抑；封锁；隐瞒；抑制

68. **supplement** /ˈsʌplɪmənt/
    n. 增补(物)，补充(物)；增刊
    adj. 增补的，补充的；备用的

69. **supreme** /suːˈpriːm/
    adj. 至高无上的；(程度上)最大的

70. **system** /ˈsɪstəm/
    n. 体系，制度；系统

71. **systematic** /ˌsɪstəˈmætɪk/
    adj. 系统的，有条理的，有计划的

72. **logic** /ˈlɒdʒɪk/
    n. 逻辑(思维)；逻辑学；逻辑系统

73. **logical** /ˈlɒdʒɪkl/
    adj. 合乎逻辑的；合乎情理的

`,or=`# 2027考研英语红宝书
## 必考词Unit23 71词

1.  **rescue** /ˈreskjuː/
    vt. 营救，救援
    n. 营救，营救活动

2.  **research** /rɪˈsɜːtʃ/
    n. 研究，调查
    vi. vt. 研究，调查

3.  **resent** /rɪˈzent/
    vt. 怨恨，憎恶

4.  **refresh** /rɪˈfreʃ/
    vt. 使恢复活力；翻新；使记起
    vt. vi. 刷新(网页)

5.  **refute** /rɪˈfjuːt/
    vt. 反驳，否认…的正确性

6.  **region** /ˈriːdʒən/
    n. 地区，区域；行政区；身体部位

7.  **regular** /ˈreɡjələr/
    adj. 有规律的；频繁的；通常的
    n. 常客，老主顾；含铅汽油

8.  **regulate** /ˈreɡjuleɪt/
    vt. vi. (以规章)管理，约束
    vt. 调整，调节

9.  **regulation** /ˌreɡjuˈleɪʃn/
    n. 规章，制度；调控，管理
    adj. 规定的，正规的

10. **replace** /rɪˈpleɪs/
    vt. 替换；更换；把…放回原处

11. **reply** /rɪˈplaɪ/
    vi. vt. 回复，答复
    vi. 作出回应
    n. 答复，回应

12. **report** /rɪˈpɔːrt/
    vt. vi. 汇报，报告；报道，宣布
    vt. 据说，传闻；举报，告发
    vi. 报到
    n. 报道；报告；传闻；成绩报告单

13. **reporter** /rɪˈpɔːrtər/
    n. 记者

14. **reputation** /ˌrepjuˈteɪʃn/
    n. 名誉，名声

15. **request** /rɪˈkwest/
    n. 请求，要求；点播的歌曲
    vt. 请求，要求

16. **require** /rɪˈkwaɪər/
    vt. 需要；要求，规定

17. **requirement** /rɪˈkwaɪərmənt/
    n. 需求，必需品；必要条件

18. **assess** /əˈses/
    vt. 评估，估算

19. **assimilate** /əˈsɪməleɪt/
    vt. 吸收，接受，学习
    vi. vt. (使)同化，融入

20. **assist** /əˈsɪst/
    vi. vt. 帮助，协助
    vt. 促进，有助于
    n. 助攻

21. **assistance** /əˈsɪstəns/
    n. 帮助，援助；支持

22. **assistant** /əˈsɪstənt/
    n. 助手，助理；售货员
    adj. 助理的；副的

23. **assume** /əˈsjuːm/
    vt. 假设；承担，取得；呈现出，假装

24. **assumption** /əˈsʌmpʃn/
    n. 假设，臆断；(责任的)承担

25. **contribute** /kənˈtrɪbjuːt/
    vt. vi. 捐赠，捐助；做贡献；撰稿
    vi. 促使，是导致…的原因之一

26. **contribution** /ˌkɒntrɪˈbjuːʃn/
    n. 贡献；捐献；定期缴款；稿件

27. **controversial** /ˌkɒntrəˈvɜːʃl/
    adj. 有争议的，引发争论的

28. **controversy** /ˈkɒntrəvɜːrsi/
    n. 争论，争议

29. **control** /kənˈtrəʊl/
    n. 控制，限制；开关
    vt. 控制，限制

30. **convene** /kənˈviːn/
    vt. vi. 召集，召开，集合

31. **convention** /kənˈvenʃn/
    n. 习俗，惯例；大会；公约，协定

32. **converge** /kənˈvɜːdʒ/
    vi. 相交；聚集；趋同

33. **convey** /kənˈveɪ/
    vt. 表达，传递，传达；运输，运送

34. **domain** /dəʊˈmeɪn/
    n. 领域，范畴；领地；域

35. **domestic** /dəˈmestɪk/
    adj. 国内的；家庭的；家养的
    n. 佣人；家庭纠纷

36. **dominant** /ˈdɒmɪnənt/
    adj. 占支配(统治)地位的；显性的

37. **dominate** /ˈdɒmɪneɪt/
    vt. vi. 主宰，统治，支配
    vt. 高耸，耸立

38. **doom** /duːm/
    n. 厄运，死亡，毁灭
    vt. 使…注定遭受(不幸等)

39. **double** /ˈdʌbl/
    adj. 两倍的，双重的；双人的
    n. 两倍，两倍量
    vt. 把…对折，使加倍

40. **doubt** /daʊt/
    n. 怀疑，不确定
    vt. 怀疑；不信任，对…没有信心

41. **probe** /prəʊb/
    vt. vi. 追问，探究，打探
    vt. (用细长工具)探查
    n. 详细调查；航天探测器；探针

42. **procedure** /prəˈsiːdʒər/
    n. 步骤，程序；手术，治疗

43. **proceed** /prəˈsiːd/
    vi. 继续做，接着做；行进，前往

44. **proceeding** /prəˈsiːdɪŋ/
    n. 诉讼；一系列行动；(会议)记录

45. **process** /ˈprəʊses/
    n. 过程，进程；工序
    vt. 加工，处理；审阅，审核

46. **procession** /prəˈseʃn/
    n. 队伍，行列，游行；一连串

47. **proclaim** /prəˈkleɪm/
    vt. 宣布，声明；表明，显示

48. **produce** /prəˈdjuːs/
    vt. 生产，制作，出产；引起；制止
    n. (食品等)农产品

49. **product** /ˈprɒdʌkt/
    n. 产品，制品；生成物；结果，积

50. **production** /prəˈdʌkʃn/
    n. 生产，制造；产量；产生，分泌

51. **productive** /prəˈdʌktɪv/
    adj. 多产的；生产的；有成效的

52. **productivity** /ˌprɒdʌkˈtɪvəti/
    n. 生产力，生产率

53. **profession** /prəˈfeʃn/
    n. 职业，业内人士；公开表明

54. **professional** /prəˈfeʃənl/
    adj. 职业的，专业的
    n. 专业人士；职业运动员；内行

55. **expand** /ɪkˈspænd/
    vi. vt. 扩充，扩大，扩展(业务)
    vi. 详谈，详述

56. **expansion** /ɪkˈspænʃn/
    n. 扩张，扩充，扩大

57. **expect** /ɪkˈspekt/
    vt. 预计，盼望；要求，期望

58. **expectation** /ˌekspekˈteɪʃn/
    n. 预料，预期；期望，指望

59. **experience** /ɪkˈspɪəriəns/
    vt. 经历，阅历，(体会)经历
    n. 经历，感受，体验

60. **experiment** /ɪkˈsperɪmənt/
    n. 实验，试验，尝试，实践
    vi. (用…)做实验，进行试验，试用

61. **expert** /ˈekspɜːt/
    n. 专家，行家
    adj. 熟练的，专家的，内行的

62. **expertise** /ˌekspɜːˈtiːz/
    n. 专门技术，专门知识，专长

63. **expire** /ɪkˈspaɪər/
    vi. (协议等)到期，失效；死亡

64. **instinct** /ˈɪnstɪŋkt/
    n. 本能，天性；直觉

65. **institute** /ˈɪnstɪtjuːt/
    n. 机构，协会，研究院，学院
    vt. 建立(体系等)；制定(规章等)

66. **institution** /ˌɪnstɪˈtjuːʃn/
    n. 机构，收容机构；习俗，制度

67. **insurance** /ɪnˈʃʊərəns/
    n. 保险(业)；保险费；预防措施

68. **insure** /ɪnˈʃʊər/
    vt. 给…上保险；提供保险；确保

69. **integral** /ˈɪntɪɡrəl/
    adj. 必不可少的；作为组成部分的

70. **integrate** /ˈɪntɪɡreɪt/
    vi. vt. (使)合并；(使)融入群体

71. **integrity** /ɪnˈteɡrəti/
    n. 正直，诚实；完整，完全

`,sr=`# 2027考研英语红宝书
## 必考词Unit24 61词

1.  **curious** /ˈkjʊriəs/
    adj. 好奇的；稀奇古怪的，不寻常的

2.  **curiosity** /ˌkjʊriˈɒsəti/
    n. 好奇心；奇物，珍品

3.  **currency** /ˈkʌrənsi/
    n. 通货，货币；通用，流传

4.  **current** /ˈkʌrənt/
    adj. 当前的，现在的，流行的
    n. 水流，气流；电流；思潮

5.  **cut** /kʌt/
    vt. 切，割，剪；削减；删节
    vi. 可切割；停止拍片
    n. 伤口；开口；削减；理发；删节

6.  **cumulative** /ˈkjuːmjələtɪv/
    adj. 累加的，积累的

7.  **average** /ˈævərɪdʒ/
    adj. 平均的；(数量)中等的；普通的
    n. 平均水平；平均数，均值
    vt. 平均数是
    vt. vi. 计算出…的平均数

8.  **avoid** /əˈvɔɪd/
    vt. 避免；回避；避免撞上

9.  **awake** /əˈweɪk/
    adj. 醒着的，没睡着的
    vi. vt. (使)醒来；唤起(情感或记忆)

10. **award** /əˈwɔːrd/
    n. 奖，奖品；(赔偿)裁定额
    vt. 授予，奖励

11. **aware** /əˈwer/
    adj. 知道的；注意到的；有…意识的

12. **awkward** /ˈɔːkwərd/
    adj. 尴尬的；难处理的；笨拙的

13. **extravagant** /ɪkˈstrævəɡənt/
    adj. 奢侈的，铺张浪费的；离谱的

14. **extreme** /ɪkˈstriːm/
    adj. 极度的；严重的；偏激的
    n. 极端，极度

15. **invisible** /ɪnˈvɪzəbl/
    adj. 看不见的，隐形的

16. **invoke** /ɪnˈvəʊk/
    vt. 援引(法律)；唤起；引用

17. **involve** /ɪnˈvɑːlv/
    vt. 需要，包含；牵涉，涉及；使参与

18. **issue** /ˈɪʃuː/
    n. 议题，问题；一期，期号
    vt. 宣布，发放，签发；出版，发行

19. **item** /ˈaɪtəm/
    n. 一件(物品)；项目；一篇报道

20. **overturn** /ˌəʊvərˈtɜːrn/
    vi. vt. (使)翻倒，打翻
    vt. 推翻(判决等)；颠覆(政府等)

21. **overwhelm** /ˌəʊvərˈwelm/
    vt. 使不知所措；击败；压垮；淹没

22. **purchase** /ˈpɜːrtʃəs/
    vt. 购买，采购
    n. 购买行为；所购之物；握紧

23. **pursue** /pərˈsuː/
    vt. 追求，继续进行；追究；追赶

24. **pursuit** /pərˈsuːt/
    n. 追求；追赶；爱好，消遣

25. **puzzle** /ˈpʌzl/
    n. 谜，智力游戏，拼图；不解之谜
    vt. 迷惑，使困惑

26. **reverse** /rɪˈvɜːrs/
    vt. 逆转，扭转；撤销，推翻；使反转
    vi. 倒车
    n. 相反的情况；背面；倒挡；损失
    adj. 相反的，反面的

27. **review** /rɪˈvjuː/
    n. 评论；审查；回顾；复习
    vt. 写评论；审查；回顾；复习

28. **revise** /rɪˈvaɪz/
    vt. 改变(想法)；修改，修订
    vi. vt. 复习

29. **revive** /rɪˈvaɪv/
    vt. vi. (使)苏醒；(使)复活
    vt. 使…复兴；重新上演

30. **reward** /rɪˈwɔːrd/
    n. 奖赏，回报；赏金
    vt. 奖励，酬谢

31. **rich** /rɪtʃ/
    adj. 富裕的；丰富多彩的；肥沃的
    adj. 大量含有…的

32. **rise** /raɪz/
    vi. 上升，提高；起床，起立；耸立
    n. 上升，提高；加薪；增强

33. **risk** /rɪsk/
    n. 风险，危险；危险的事(或人)
    vt. 使…冒风险；冒…的风险

34. **rival** /ˈraɪvl/
    n. 竞争者，对手
    vt. 能与…媲美

35. **role** /rəʊl/
    n. 作用，职能；角色

36. **roll** /rəʊl/
    vi. vt. 翻滚；原地打转；翻身；移动，滚动
    vt. 把…卷起来；使平坦；裹起来
    n. 卷，卷轴；一管；面包条；名单

37. **root** /ruːt/
    n. 根；根茎；根源；起源
    vi. vt. (使)生根，起源
    vi. 翻找

38. **route** /ruːt/
    n. 路线，路途；途径，渠道
    vt. 按某路线发送

39. **routine** /ruːˈtiːn/
    n. 惯例，常规；(演出的)一套动作
    adj. 常规的，例行公事的；乏味的

40. **row** /rəʊ/
    n. 一排，一行，一列；吵架，争议
    vi. vt. 划船

41. **rule** /ruːl/
    n. 规则，建议；定律；统治；常规
    vt. vi. 控制，统治；裁定，判决

42. **ruler** /ˈruːlər/
    n. 直尺，尺子；统治者

43. **surname** /ˈsɜːrneɪm/
    n. 姓

44. **surpass** /sərˈpæs/
    vt. 超过，胜过

45. **surplus** /ˈsɜːrpləs/
    n. 过剩，过剩量；盈余；顺差
    adj. 过剩的，剩余的

46. **surprise** /sərˈpraɪz/
    n. 意想不到的事情；惊奇
    vt. 使惊奇；使感到意外

47. **survey** /ˈsɜːrveɪ/
    n. 调查，勘测；概述
    vt. 做调查；审视；勘测；概述

48. **surveillance** /sɜːrˈveɪləns/
    n. (对嫌疑人或犯罪场所的)监视

49. **survival** /sərˈvaɪvl/
    n. 幸存，生存；残存物

50. **survive** /sərˈvaɪv/
    vi. vt. 幸存；艰难渡过
    vi. 继续维持生活；保存下来
    vt. 比…活得久

51. **susceptible** /səˈseptəbl/
    adj. 易受影响的；易患病的；敏感的

52. **suspend** /səˈspend/
    vt. 暂停，中止；使停职或停学
    vt. 延缓；悬，吊；悬浮

53. **suspect** /səˈspekt/
    vt. 怀疑，猜想
    adj. 怀疑的，可疑的

54. **suspicion** /səˈspɪʃn/
    n. 怀疑；嫌；猜疑；猜想，预感

55. **suspicious** /səˈspɪʃəs/
    adj. 觉得可疑的；可疑的

56. **sustain** /səˈsteɪn/
    vt. 保持，维持；遭受；支撑；认可

57. **swarm** /swɔːrm/
    n. 一大群(昆虫或人)
    vi. 成群移动；涌向，蜂拥

58. **swear** /swer/
    vi. 咒骂，诅咒；说脏话
    vt. 发誓；肯定地说；使起誓
    vi. vt. 发誓，郑重承诺

59. **swell** /swel/
    vi. (使)变得更响；(使)充满(激情)；变大
    vt. (使)增加，扩大
    n. 海浪的涌动；隆起；增加
    adj. 很愉快的；质量好的

60. **swing** /swɪŋ/
    vi. vt. (使)摆动；(使)转弯；朝…打去
    vi. vt. (使)改变(意见等)
    vt. (不正当地)搞到，办成
    n. 摆动；改变；秋千；挥杆动作

61. **switch** /swɪtʃ/
    n. (电路的)开关；骤变，突变
    vt. vi. (使)改变；转变，突变；调换
    vt. 交换；对调

`,cr=`# 2027考研英语红宝书
## 必考词Unit25 67词

1.  **project** /ˈprɑːdʒekt/
    n. 项目，方案，专题研究；住宅区
    vt. 规划；预测；投射；展现；投掷
    vi. 突出，伸出

2.  **profit** /ˈprɑːfɪt/
    n. 利润，收益；益处，好处
    vi. vt. 得益(于)，对…有益

3.  **profitable** /ˈprɑːfɪtəbl/
    adj. 盈利的，有利润的；有益的

4.  **profound** /prəˈfaʊnd/
    adj. 深远的；知识渊博的；玄奥的

5.  **program** /ˈproʊɡræm/
    n. 计划，程序；节目，课程
    vt. vi. 编写程序
    vt. 使…有倾向；预设

6.  **progressive** /prəˈɡresɪv/
    adj. 进步的；逐步发生的；进行式的
    n. 进步人士，开明人士

7.  **prohibit** /prəˈhɪbɪt/
    vt. 禁止；使不可能

8.  **prolong** /prəˈlɔːŋ/
    vt. 延长，拖延

9.  **prominent** /ˈprɑːmɪnənt/
    adj. 杰出的，重要的；显眼的

10. **promise** /ˈprɑːmɪs/
    vt. vi. 承诺，保证
    vt. 使很可能，预示
    n. 诺言；前途，潜质；迹象

11. **promising** /ˈprɑːmɪsɪŋ/
    adj. 大有希望的，很有前途的

12. **promote** /prəˈmoʊt/
    vt. 促进；推销；晋升；提倡

13. **prompt** /prɑːmpt/
    vt. 促使；引起，激起；提示
    adj. 迅速的，立即的；准时的
    n. 提示符
    adv. 准时地

14. **proof** /pruːf/
    n. 证据；证实；求证；校样
    adj. 能防范的，抗…的
    suff. 防…的，抗…的
    vt. 校对

15. **reservation** /ˌrezərˈveɪʃn/
    n. 预订，预约；保留意见；保留地

16. **reserve** /rɪˈzɜːrv/
    vt. 预订，预约；预留；保留(权利)
    n. 储备(量)；自然保护区；内向

17. **resist** /rɪˈzɪst/
    vt. vi. 按捺，克制；抵抗，抵制；抵御
    vt. 经得起，抗(伤害)

18. **resistance** /rɪˈzɪstəns/
    n. 抵制；反抗；抵抗力，阻力

19. **resistant** /rɪˈzɪstənt/
    adj. 有抵抗力的；反对的，抵制的
    suff. 抗…的，耐…的

20. **resilient** /rɪˈzɪliənt/
    adj. 坚韧的；有适应力的；有弹性的

21. **resort** /rɪˈzɔːrt/
    n. 度假胜地；采用的方法
    vi. 诉诸，求助

22. **resource** /ˈriːsɔːrs/
    n. 资源，物力；资料；机敏
    vt. 向…提供资金(或设备)

23. **respect** /rɪˈspekt/
    n. 尊敬，尊重；方面
    vt. 尊敬，尊重；遵守

24. **respective** /rɪˈspektɪv/
    adj. 分别的，各自的

25. **respond** /rɪˈspɑːnd/
    vi. vt. 回复，回答
    vi. 作出反应；有良好反应

26. **response** /rɪˈspɑːns/
    n. 回答，答复；反应，回应

27. **responsibility** /rɪˌspɑːnsəˈbɪləti/
    n. 责任

28. **responsible** /rɪˈspɑːnsəbl/
    adj. 负责的；应担责的；作为原因的

29. **succeed** /səkˈsiːd/
    vi. 成功
    vi. vt. 接替，继任，继承；随后出现

30. **success** /səkˈses/
    n. 成功，胜利；成功的人(或事物)

31. **successful** /səkˈsesfl/
    adj. 成功的，有成效的；有成就的

32. **succession** /səkˈseʃn/
    n. 一连串；继承，继承权

33. **successive** /səkˈsesɪv/
    adj. 连续的，接连的，相继的

34. **successor** /səkˈsesər/
    n. 接任者，继承者

35. **suck** /sʌk/
    vt. 吮，吸，抽(空气等)；把…卷入
    vi. 含在嘴里吮
    vi. 糟糕透顶，很差

36. **sue** /suː/
    vt. vi. 控告，起诉
    vi. (尤指在法庭上)提出请求

37. **suffer** /ˈsʌfər/
    vi. vt. 遭受，蒙受，受苦
    vi. 变差，变糟

38. **suffice** /səˈfaɪs/
    vi. 足够，充足

39. **sufficient** /səˈfɪʃnt/
    adj. 充足的，足够的

40. **suggest** /səˈdʒest/
    vt. 建议，提议，推荐；表明，暗示

41. **suggestion** /səˈdʒestʃən/
    n. 建议，提议；迹象；微量；暗示

42. **suicide** /ˈsuːɪsaɪd/
    n. 自杀，自杀性行为，自杀者

43. **suit** /suːt/
    n. 西服，套装；诉讼，起诉
    vt. 适合，相配，合身

44. **suitable** /ˈsuːtəbl/
    adj. 合适的，适宜的

45. **super** /ˈsuːpər/
    adj. 极好的，很棒的
    adv. 超级，格外
    pref. 超级
    n. (大楼的)看管人

46. **superb** /suːˈpɜːrb/
    adj. 极好的，卓越的

47. **superficial** /ˌsuːpərˈfɪʃl/
    adj. 肤浅的；表面的；表皮的

48. **superfluous** /suːˈpɜːrfluəs/
    adj. 过剩的，过多的，多余的

49. **superior** /suːˈpɪriər/
    adj. 更好的；级别更高的；高傲的
    n. 上级，上司

50. **superiority** /suːˌpɪriˈɔːrəti/
    n. 优越，优势；优越感，骄傲自大

51. **supervise** /ˈsuːpərvaɪz/
    vt. vi. 监督，管理，指导，主管

52. **trigger** /ˈtrɪɡər/
    n. 扳机；触发器；起因，诱因
    vt. 引起；触发

53. **triumph** /ˈtraɪʌmf/
    n. 成功，胜利；胜利的喜悦；典范
    vi. 成功，获胜

54. **assure** /əˈʃʊr/
    vt. 向…保证；弄清楚；确保

55. **assurance** /əˈʃʊrəns/
    n. 担保，保证；把握；(人寿)保险

56. **astonish** /əˈstɑːnɪʃ/
    vt. 使吃惊，使惊讶

57. **atmosphere** /ˈætməsfɪr/
    n. 气氛；大气层；空气；情调

58. **council** /ˈkaʊnsl/
    n. 地方议会；委员会

59. **counsel** /ˈkaʊnsl/
    n. 忠告，建议；辩护律师
    vt. 建议，劝告；提供专业咨询

60. **drama** /ˈdrɑːmə/
    n. 戏，剧；戏剧艺术；戏剧性事件

61. **dramatic** /drəˈmætɪk/
    adj. 戏剧的；激动人心的；戏剧性的

62. **exploit** /ɪkˈsplɔɪt/
    vt. 剥削；利用；开采
    vi. 英勇的行为

63. **explore** /ɪkˈsplɔːr/
    vt. vi. 探索，探测
    vt. 探究，探讨

64. **intellectual** /ˌɪntəˈlektʃuəl/
    adj. 智力的；脑力的；有才智的
    n. 知识分子

65. **intelligence** /ɪnˈtelɪdʒəns/
    n. 智力，理解力；情报，情报机构

66. **intelligent** /ɪnˈtelɪdʒənt/
    adj. 聪明的；有智力的；智能的

67. **intelligible** /ɪnˈtelɪdʒəbl/
    adj. 可理解的，明白易懂的

`,lr=`# 2027考研英语红宝书
## 必考词Unit26 66词

1.  **polish** /ˈpɑːlɪʃ/
    vt. vi. 擦光，抛光
    vt. 改善，润色
    n. 抛光剂，亮光剂；抛光，擦亮

2.  **point** /pɔɪnt/
    n. 观点；重点；特点；时刻；得分；地点；尖端；意图，用处
    vt. vi. 指向，瞄准
    vi. 对着，朝向

3.  **propel** /prəˈpel/
    vt. 推动，激励；推进，推

4.  **proper** /ˈprɑːpər/
    adj. 恰当的；像样的；得体的

5.  **property** /ˈprɑːpərti/
    n. 财产，所有物；房地产；特性

6.  **proportion** /prəˈpɔːrʃn/
    n. 部分，份额；比例；匀称；规模

7.  **proposal** /prəˈpoʊzl/
    n. 提议，提案；求婚

8.  **propose** /prəˈpoʊz/
    vt. 提议；打算；提出(某观点等)
    vi. vt. 求婚

9.  **proposition** /ˌprɑːpəˈzɪʃn/
    n. 提议；主张；待处理的问题

10. **prospect** /ˈprɑːspekt/
    n. 可能性；展望；前景，前途
    vi. 勘探，探矿

11. **prospective** /prəˈspektɪv/
    adj. 潜在的；可能发生的，预期的

12. **protocol** /ˈproʊtəkɔːl/
    n. 礼节，礼仪；协议；治疗方案

13. **proximate** /ˈprɑːksɪmət/
    adj. (原因)直接的；最接近的

14. **restore** /rɪˈstɔːr/
    vt. 恢复；修复，使复原；归还

15. **restrain** /rɪˈstreɪn/
    vt. 制止，阻止；克制，抑制

16. **restraint** /rɪˈstreɪnt/
    n. 克制，抑制；限制；安全装置

17. **restrict** /rɪˈstrɪkt/
    vt. 限制，约束

18. **attach** /əˈtætʃ/
    vt. 附上，系上，贴上；认为…具有
    vi. vt. (使)与…有关联

19. **attack** /əˈtæk/
    n. 攻击，袭击；抨击；(疾病)发作
    vi. vt. 攻击，袭击
    vt. 抨击；破坏，侵蚀；解决(问题)
    vi. (在足球等比赛中)进攻

20. **attain** /əˈteɪn/
    vt. 获得，赢得；达到

21. **attempt** /əˈtempt/
    vt. 尝试，试图
    n. 尝试，试图；谋杀企图

22. **attend** /əˈtend/
    vi. vt. 出席，参加
    vt. 去(学校等)；陪同；伴随
    vi. 注意，专心；照顾

23. **attention** /əˈtenʃn/
    n. 注意，关注；照料；殷勤；立正
    int. 注意，立正

24. **attitude** /ˈætɪtuːd/
    n. 态度，看法；我行我素的作风

25. **attribute** /əˈtrɪbjuːt/
    vt. 把…归因于；认为是…所作
    n. 特性，属性

26. **court** /kɔːrt/
    n. 法庭；出庭人员；球场；宫廷
    vt. 讨好；试图获得；招致；求爱
    vi. (男女)恋爱

27. **courtesy** /ˈkɜːrtəsi/
    n. 谦恭有礼的举止，礼貌
    adj. 可免费使用的

28. **cover** /ˈkʌvər/
    vt. 遮盖；覆盖；包括；够付；报道
    vi. 遮掩，敷衍
    n. 覆盖物，封面，封皮

29. **create** /kriˈeɪt/
    vt. 创造，创作，创建；授予，册封

30. **creative** /kriˈeɪtɪv/
    adj. 创造性的，有创造力的
    n. 创意人员，创作者

31. **credit** /ˈkredɪt/
    n. 信贷；赞扬；信誉；学分；结余
    vt. 把钱存入(账户)；把…归功于

32. **crisis** /ˈkraɪsɪs/
    n. 危机；病危期；危急关头

33. **drive** /draɪv/
    vi. vt. 开车，驾驶
    vt. 驾车送(人)；驱动；迫使；驱赶
    n. 驱车旅行；车道；本能需求；(为达到某目的的)努力，运动

34. **drug** /drʌɡ/
    n. 毒品；药物
    vt. 给…服麻醉剂

35. **export** /ɪkˈspɔːrt/
    vt. vi. 出口，输出
    n. 出口，输出；出口商品

36. **expose** /ɪkˈspoʊz/
    vt. 显露；揭露；使遭受；使体验

37. **exposure** /ɪkˈspoʊʒər/
    n. 暴露；揭露；接触；曝光

38. **express** /ɪkˈspres/
    vt. 表达，表现；显而易见；代表
    adj. 快速的，快递的；明确的
    n. 特快列车；快递服务

39. **expression** /ɪkˈspreʃn/
    n. 表达；表情，神情；措词，说法

40. **extend** /ɪkˈstend/
    vt. 延长；扩大；舒展；提供
    vi. 延伸，延续；适用于；使达到

41. **extension** /ɪkˈstenʃn/
    n. 扩大；延伸；扩建部分；延期；电话分机

42. **extensive** /ɪkˈstensɪv/
    adj. 广阔的；大量的；广泛的

43. **extent** /ɪkˈstent/
    n. 程度，地步；范围，面积

44. **human** /ˈhjuːmən/
    n. 人，人类
    adj. 人的，人类的；有人情味的

45. **humanity** /hjuːˈmænəti/
    n. 人类；人性，人道；人文学科

46. **humble** /ˈhʌmbl/
    adj. 谦逊的；卑微的；不起眼的
    vt. 使感到卑微；低声下气

47. **intend** /ɪnˈtend/
    vi. vt. 计划，打算，想要
    vt. 意指，意思是

48. **intention** /ɪnˈtenʃn/
    n. 意图，打算

49. **intense** /ɪnˈtens/
    adj. 强烈的；紧张激烈的；热切的

50. **intensity** /ɪnˈtensəti/
    n. 强烈，剧烈；(光、声等的)强度

51. **intensive** /ɪnˈtensɪv/
    adj. 密集的，强化的；(农业)集约的

52. **interact** /ˌɪntərˈækt/
    vi. 互动，交流；相互作用

53. **intercourse** /ˈɪntərkɔːrs/
    n. 性交；交流，交往，交际

54. **interest** /ˈɪntrəst/
    n. 兴趣，趣味；爱好；利息；利益
    vt. 使感兴趣，使关注

55. **interior** /ɪnˈtɪriər/
    adj. 内部的；内地的；内政的
    n. 内部；内地；内陆；内政

56. **internal** /ɪnˈtɜːrnl/
    adj. 国内的；内部的；体内的

57. **international** /ˌɪntərˈnæʃnəl/
    adj. 国际的
    n. 国际体育比赛

58. **interpret** /ɪnˈtɜːrprɪt/
    vt. 解释，说明；把…理解为
    vi. vt. 口译

59. **lose** /luːz/
    vt. 丢失，丧失；被夺去；使不理
    vt. 输掉；输掉比赛；(使)失去
    vt. 输掉(比赛等)；(使)失去

60. **loss** /lɔːs/
    n. 丧失，损失；亏损；逝世；失利

61. **low** /loʊ/
    adj. 低的；低声的；低劣的
    adv. 低，低于通常水平；低声地
    n. 低点；低水平；低谷

62. **lower** /ˈloʊər/
    adj. 下面的，下方的；在底部的
    vt. 把…放低，使下降；降低
    vi. 减少，变小；降低
    vi. (天空或云)变昏暗

63. **lucrative** /ˈluːkrətɪv/
    adj. 获利多的，赚钱的

64. **nerve** /nɜːrv/
    n. 神经；紧张，焦虑；勇气，厚颜

65. **nervous** /ˈnɜːrvəs/
    adj. 紧张的；易紧张的；神经系统的

66. **nevertheless** /ˌnevərðəˈles/
    adv. 然而，尽管如此

`,ur=`# 2027考研英语红宝书
## 必考词Unit1 68词

1.  **radiate** /ˈreɪdieɪt/
    vi. 散发，流露；发出(光、辐射等)
    vi. 呈辐射状发散(或伸展)

2.  **radiant** /ˈreɪdiənt/
    adj. 容光焕发的，灿烂的；辐射的

3.  **radical** /ˈrædɪkl/
    adj. 根本的，彻底的；激进的
    n. 激进分子；游离基

4.  **object** /ˈɒbdʒekt/
    n. 物体，物品；目标；对象；宾语
    vi. 不同意，反对
    vt. 提出…作为反对的理由

5.  **objective** /əbˈdʒektɪv/
    n. 目标，目的
    adj. 客观的，不带个人感情的

6.  **objection** /əbˈdʒekʃn/
    n. 反对，异议；反对的理由

7.  **obligation** /ˌɒblɪˈɡeɪʃn/
    n. 义务，责任

8.  **oblige** /əˈblaɪdʒ/
    vt. (因法律或义务)强迫，迫使
    vt. 帮忙，效劳

9.  **obscure** /əbˈskjʊə(r)/
    adj. 鲜为人知的；难以理解的
    vt. 掩盖，使模糊，使隐晦

10. **observation** /ˌɒbzəˈveɪʃn/
    n. 观察，观测；评论，评述

11. **observe** /əbˈzɜːv/
    vt. vi. 观察，注视
    vt. 注意到；遵守；庆祝；评论

12. **obsession** /əbˈseʃn/
    n. 痴迷，着魔

13. **obsolete** /ˈɒbsəliːt/
    adj. 淘汰的，废弃的，过时的

14. **obtain** /əbˈteɪn/
    vt. 获得，实现
    vi. 存在，流行

15. **obvious** /ˈɒbviəs/
    adj. 明显的，显然的；无新意的

16. **ideal** /aɪˈdiːəl/
    adj. 理想的，最佳的
    n. 理想；理想典范，完美典型

17. **ideology** /ˌaɪdiˈɒlədʒi/
    n. 思想体系，意识形态

18. **identical** /aɪˈdentɪkl/
    adj. 完全相同的，同样的

19. **identification** /aɪˌdentɪfɪˈkeɪʃn/
    n. 确认，识别；身份证明；确定

20. **identify** /aɪˈdentɪfaɪ/
    vt. 认出，确认，识别；发现，查明
    vi. 显示身份

21. **identity** /aɪˈdentəti/
    n. 身份，本体；特性，个性；相同

22. **journal** /ˈdʒɜːnl/
    n. 期刊，杂志；报纸；日志，日记

23. **journalist** /ˈdʒɜːnəlɪst/
    n. 记者，新闻工作者

24. **journey** /ˈdʒɜːni/
    n. 旅行，旅程
    vi. (长途)旅行

25. **judge** /dʒʌdʒ/
    n. 法官；裁判员，鉴定人
    vi. vt. 判断，担任裁判，评价，指责
    vt. 估计，猜测；审理，判决

26. **judgement** /ˈdʒʌdʒmənt/
    n. 看法，评价；判断力；判决

27. **judicial** /dʒuˈdɪʃl/
    adj. 审判的，司法的，法庭的

28. **jury** /ˈdʒʊəri/
    n. 陪审团；裁判委员会

29. **jurisdiction** /ˌdʒʊərɪsˈdɪkʃn/
    n. 司法权，管辖权；管辖区域

30. **justice** /ˈdʒʌstɪs/
    n. 公平，正义；法官；司法制度

31. **justify** /ˈdʒʌstɪfaɪ/
    vt. 证明…有理；为…辩解

32. **label** /ˈleɪbl/
    n. 标签，标牌；(不恰当的)称谓
    vt. 给…贴标签；(不公地)把…称为

33. **lag** /læɡ/
    vi. 落后，滞后，缓慢移动
    n. (两个事件)相隔的时间

34. **largely** /ˈlɑːdʒli/
    adv. 在很大程度上，主要地，大半地

35. **lateral** /ˈlætərəl/
    adj. 侧面的，横向的，侧向的

36. **latter** /ˈlætə(r)/
    adj. 后者的；后期的

37. **law** /lɔː/
    n. 法律，法规；法学；警方；法则

38. **lawsuit** /ˈlɔːsuːt/
    n. 诉讼，官司

39. **magnitude** /ˈmæɡnɪtjuːd/
    n. 巨大，重要性；星等，震级

40. **magnify** /ˈmæɡnɪfaɪ/
    vt. 放大；使(问题等)加重，夸大

41. **magnificent** /mæɡˈnɪfɪsnt/
    adj. 宏伟的，令人印象深刻的

42. **maintain** /meɪnˈteɪn/
    vt. 维持；维修，保养；坚称；供养

43. **maintenance** /ˈmeɪntənəns/
    n. 维护，养护；维持；赡养费

44. **major** /ˈmeɪdʒə(r)/
    adj. 主要的，重要的，大的；大调的
    n. 少校；专业；…专业的学生
    vi. 主修

45. **majority** /məˈdʒɒrəti/
    n. 大部分，大多数；多数票

46. **make** /meɪk/
    vt. 做，出产；引发，使得；强迫
    vi. 成为；合计
    n. 牌子，品牌

47. **theme** /θiːm/
    n. 主题，主旋律；主题音乐
    adj. 有特定主题的

48. **theory** /ˈθɪəri/
    n. 理论，学说；理论基础；观点

49. **theoretical** /ˌθɪəˈretɪkl/
    adj. 理论的，理论上的；假设性的

50. **therapy** /ˈθerəpi/
    n. 疗法，治疗；心理治疗

51. **qualification** /ˌkwɒlɪfɪˈkeɪʃn/
    n. 资格证，学历；资历；合格；资格

52. **qualify** /ˈkwɒlɪfaɪ/
    vt. 使合格，使具备资格
    vi. 取得资格(或学历)，合格
    vi. vt. (使)有资格，(使)有权；配得上

53. **quality** /ˈkwɒləti/
    n. 质量，品质；优质；品德，特性
    adj. 优质的，高质量的

54. **qualitative** /ˈkwɒlɪtətɪv/
    adj. 质量的，定性的，性质的

55. **safeguard** /ˈseɪfɡɑːd/
    vt. 保护，保障；捍卫
    n. 安全设施，保护措施

56. **safety** /ˈseɪfti/
    n. 安全；安全场所；保险栓

57. **savage** /ˈsævɪdʒ/
    adj. 凶恶的；猛烈抨击的；野蛮的
    n. 野蛮人；残暴的人
    vt. 凶猛地攻击；激烈抨击

58. **save** /seɪv/
    vt. 救，救助；收集；保留；避免
    vi. vt. 储蓄，节省，保存
    prep. conj. 除了

59. **saving** /ˈseɪvɪŋ/
    n. 存款；节省下来的钱(或物)
    vt. 拯救，节约

60. **scale** /skeɪl/
    n. 规模，等级；刻度；秤；鳞片
    n. 比例尺；音阶
    vt. 攀登；去鳞；改变…的大小

61. **scene** /siːn/
    n. 现场；场面；景色；圈子

62. **scenery** /ˈsiːnəri/
    n. 风景，景色；舞台布景

63. **pace** /peɪs/
    n. (移动)速度；步伐；节奏；一步
    vi. 踱步；缓慢地走来走去
    vt. 调整自己的工作节奏

64. **panel** /ˈpænl/
    n. 专门小组；镶板；仪表盘
    n. (车身的)金属板条
    vt. (用镶板)将…镶嵌

65. **panorama** /ˌpænəˈrɑːmə/
    n. 全景，全景图；全貌，概述

66. **prove** /pruːv/
    vt. 证明，证实；展现出
    link. 证明是，被发现是
    vi. 发酵

67. **provide** /prəˈvaɪd/
    vt. 提供；规定

68. **provided** /prəˈvaɪdɪd/
    conj. 如果，只要，在…条件下`,dr=`# 2027考研英语红宝书
## 必考词Unit10 77词

1.  **choke** /tʃəʊk/
    vi. vt. (使)窒息，噎住；使哽咽
    vt. 掐死，勒死；阻塞，塞满
    vi. (因紧张而)失败，发挥失常
    n. 窒息，哽咽声

2.  **chop** /tʃɒp/
    vt. 切碎，砍，劈；(大幅度地)削减
    n. 猪(或羊等)排，砍，劈；掌劈

3.  **circumstance** /ˈsɜːkəmstæns/
    n. 情况，情形；生活状况；客观环境

4.  **cite** /saɪt/
    vt. 引用(例子)；引述；传讯

5.  **claim** /kleɪm/
    vt. 声称；要求拥有，认领；获得，夺去(生命)
    vi. 索要，索取
    n. 声称；所有权；要求，索赔

6.  **clear** /klɪə(r)/
    adj. 清楚的，明显的；无疑的
    vt. 清理，清除，移走；使人离开
    vi. 变晴朗，变清澈；散去，消失
    vi. vt. 兑现(支票)；获利，净赚

7.  **border** /ˈbɔːdə(r)/
    n. 边界，国界；镶边，狭长花坛
    vt. 与…接壤；沿…的边

8.  **bore** /bɔː(r)/
    vt. 使厌烦
    vi. vt. 钻(孔)，挖(洞)
    vi. 盯着看
    n. 无趣的人，无聊的事；孔，口径

9.  **born** /bɔːn/
    vi. 出生，出世；出现，形成
    adj. 天生的

10. **bother** /ˈbɒðə(r)/
    vt. 使…烦恼，打扰
    vi. vt. 费心，费力，麻烦
    n. 麻烦，困难；令人烦恼的情况

11. **acquire** /əˈkwaɪə(r)/
    vt. 获得(技能、习惯等)；购得，得到

12. **acquisition** /ˌækwɪˈzɪʃn/
    n. 获得，习得；收购(物)；购得物

13. **act** /ækt/
    n. 行为；法案；装样子；一幕
    vi. 行动；表现得；假装；充当
    vt. vi. 扮演

14. **action** /ˈækʃn/
    n. 行动，措施；行为，诉讼；战斗

15. **activate** /ˈæktɪveɪt/
    vt. 激活，启动

16. **active** /ˈæktɪv/
    adj. 活跃的；积极的；有效的

17. **activity** /ækˈtɪvəti/
    n. 活动；活跃

18. **actual** /ˈæktʃuəl/
    adj. 真实的，实际的

19. **acute** /əˈkjuːt/
    adj. 严重的，剧烈的；(疾病)急性的
    adj. (感官)灵敏的，敏锐的；锐角的

20. **despise** /dɪˈspaɪz/
    vt. 鄙视，蔑视

21. **despite** /dɪˈspaɪt/
    prep. 尽管，虽然

22. **energetic** /ˌenəˈdʒetɪk/
    adj. (人)充满活力的；(活动)剧烈的

23. **energy** /ˈenədʒi/
    n. 力气，活力；能源；精力；能量

24. **enforce** /ɪnˈfɔːs/
    vt. 强制执行；迫使

25. **engage** /ɪnˈɡeɪdʒ/
    vi. vt. (使)从事，参加；与…交战
    vi. 吸引；聘用
    vi. 与…建立密切关系

26. **engagement** /ɪnˈɡeɪdʒmənt/
    n. 订婚；约定；交战；参加，卷入

27. **fold** /fəʊld/
    vi. vt. 折叠，对折；包，裹
    vi. 倒闭，停演
    n. 褶，褶层，褶痕；羊圈
    n. 由…部分组成的；倍

28. **folk** /fəʊk/
    n. 人们；各位；家属；民间音乐
    adj. 民间的，民俗的；流传民间的

29. **follow** /ˈfɒləʊ/
    vi. vt. 跟随；在…后发生；理解，明白
    vt. 沿着，遵循，听从；追随，关注

30. **following** /ˈfɒləʊɪŋ/
    adj. (时间上)接着的；下述的
    n. 拥护者，追随者；下述，下列
    prep. 在…之后，由于

31. **force** /fɔːs/
    n. 武力；力；影响大的事物；部队
    vt. 强迫，迫使；强行移动；使发生

32. **fore** /fɔː(r)/
    adj. 在前部的，在头部的
    adv. 向(或在)船头；向(或在)机头

33. **forecast** /ˈfɔːkɑːst/
    n. 预测，预报
    vt. 预测，预报

34. **foresee** /fɔːˈsiː/
    vt. 预见，预知，预料

35. **forge** /fɔːdʒ/
    vt. 缔造，建立；伪造；锻造，制作
    vi. 稳步前进
    n. 铁匠铺；锻造炉；锻造车间

36. **grim** /ɡrɪm/
    adj. 严肃的；令人沮丧的；阴森的

37. **grasp** /ɡrɑːsp/
    vt. 抓紧，理解；理解(抓住)机会
    n. 紧抓，控制；理解

38. **grip** /ɡrɪp/
    n. 紧握，紧抓；掌控，控制；理解
    vi. 紧握，紧抓
    vt. 使感兴趣；对…具有强烈影响

39. **gross** /ɡrəʊs/
    adj. 总的，严重的；令人恶心的
    adv. 总共，全部的
    vt. (税前)总收入为
    n. (影片的)总收入

40. **ground** /ɡraʊnd/
    n. 地，土地；开阔地；领域；根据
    vt. 使(飞机)阻止…起飞
    adj. (食物)磨细的，剁碎的

41. **group** /ɡruːp/
    n. 组，群；集团；乐队；组合
    vt. vi. (使)成群，(使)成组
    vt. 把…分组

42. **guarantee** /ˌɡærənˈtiː/
    vt. 担保，确保；提供保修
    n. 保证；保修单；保证金

43. **guard** /ɡɑːd/
    n. 卫兵，看守；警戒，保卫；后卫
    vt. 守卫，保卫；看守；提防

44. **include** /ɪnˈkluːd/
    vt. 包括；使成为…的一部分

45. **inclusive** /ɪnˈkluːsɪv/
    adj. 费用全包的；包括的，包容性强的

46. **income** /ˈɪnkʌm/
    n. 收入，所得，收益

47. **incorporate** /ɪnˈkɔːpəreɪt/
    vt. 把…并入，包含；使组成公司

48. **increase** /ɪnˈkriːs/
    vi. vt. 增加，增多，增长
    n. 增加，增多，增长

49. **increasingly** /ɪnˈkriːsɪŋli/
    adv. 越来越多地

50. **incredible** /ɪnˈkredəbl/
    adj. 极好的；极大的；难以置信的

51. **incur** /ɪnˈkɜː(r)/
    vt. 招致，引起，蒙受

52. **link** /lɪŋk/
    n. 联系；纽带；链接；交通路线
    vt. 把…连接起来，使…相关联

53. **list** /lɪst/
    n. 名单，清单
    vi. (按某次序)把…列表；列举
    vi. vt. (被)列入销售清单，列入价目表
    vi. (船)向一侧倾斜

54. **literally** /ˈlɪtərəli/
    adv. 字面上地；确实地；简直

55. **literary** /ˈlɪtərəri/
    adj. 文学的；从事写作的

56. **literature** /ˈlɪtrətʃə(r)/
    n. 文学(作品)；文献；资料

57. **memo** /ˈmeməʊ/
    n. 备忘录，公务便条

58. **memorial** /məˈmɔːriəl/
    n. 纪念碑；(追念逝者的)纪念物
    adj. (对逝者)纪念的

59. **memory** /ˈmeməri/
    n. 记忆力；回忆；内存

60. **mental** /ˈmentl/
    adj. 精神上的；智力的；疯狂的

61. **mention** /ˈmenʃn/
    vt. 提及，说起
    n. 提及，说起

62. **mentor** /ˈmentɔː(r)/
    n. 导师，指导者
    vt. 指导，辅导

63. **other** /ˈʌðə(r)/
    adj. pron. 其他的，另外的；相反
    adj. 别的，其他的

64. **otherwise** /ˈʌðəwaɪz/
    adv. 否则；除此以外；以其他方式
    adj. 不同的

65. **outcome** /ˈaʊtkʌm/
    n. 结果，后果

66. **sign** /saɪn/
    n. 迹象，征兆；标牌，标志；手势
    vt. vi. 签(名)，签字；和…签约

67. **signature** /ˈsɪɡnətʃə(r)/
    n. 签名，署名；签署；鲜明特征

68. **signal** /ˈsɪɡnəl/
    n. 信号；标志；信号灯
    vi. vt. 发信号；示意；表示
    vt. 标志，预示；表明，显示

69. **significance** /sɪɡˈnɪfɪkəns/
    n. 重要性，意义；意思，含义

70. **significant** /sɪɡˈnɪfɪkənt/
    adj. 重要的，数量大的；意味深长的

71. **signify** /ˈsɪɡnɪfaɪ/
    vt. 表示，意味着；表达，表明
    vi. 具有重要性，要紧

72. **similar** /ˈsɪmələ(r)/
    adj. 相像的，类似的

73. **simple** /ˈsɪmpl/
    adj. 简单的；简朴的；普通的
    adj. (人)单纯，笨的；普通的

74. **simplicity** /sɪmˈplɪsəti/
    n. 简单；容易；质朴；朴素

75. **simplify** /ˈsɪmplɪfaɪ/
    vt. 简化，使简洁

76. **simply** /ˈsɪmpli/
    adv. 仅仅，简直；简单地；简朴

77. **shock** /ʃɒk/
    vi. (因紧张而)失败，发挥失常
    vt. 使震惊，使愤慨
    n. 震惊；愤慨


`,fr=`# 2027考研英语红宝书
## 必考词Unit11 77词

1.  **addict** /ˈædɪkt/
    n. 瘾君子；对…入迷的人

2.  **add** /æd/
    vt. 增加，相加
    vt. 补充说，继续说；添加(特色)

3.  **addition** /əˈdɪʃn/
    n. 增添；添加物；加法；增建部分

4.  **additional** /əˈdɪʃənl/
    adj. 附加的，额外的

5.  **address** /əˈdres/
    n. 地址；网址；演讲；称呼(方式)
    vt. 寄往；对…讲话；称呼；处理

6.  **adequate** /ˈædɪkwət/
    adj. 足够的，满足要求的

7.  **adjust** /əˈdʒʌst/
    vt. 调整，调节；整理(衣着)
    vi. vt. (使)适应

8.  **administration** /ədˌmɪnɪˈstreɪʃn/
    n. 管理，行政；政府，管理部门

9.  **admire** /ədˈmaɪə(r)/
    vt. 钦佩，仰慕；欣赏，观赏

10. **admission** /ədˈmɪʃn/
    n. 准许加入；承认，招认；门票钱

11. **admit** /ədˈmɪt/
    vi. vt. 承认
    vt. 准许…进入；准许…加入；收治

12. **adapt** /əˈdæpt/
    vi. 适应
    vt. 改造(以适应新情况)；改编

13. **adopt** /əˈdɒpt/
    vt. 采纳，采用；正式通过
    vi. vt. 收养，领养

14. **adult** /ˈædʌlt/
    n. 成年人；成年动物
    adj. 成年的，成熟的；成人的

15. **brace** /breɪs/
    n. 支架；牙箍；背带
    vt. 防备，做准备；顶住，抵住

16. **brain** /breɪn/
    n. 大脑；智力；非常聪明的人

17. **branch** /brɑːntʃ/
    n. 树枝；分部；分支机构；分支
    vi. (路或河)分岔

18. **brand** /brænd/
    n. 品牌；一种，一类；烙印
    vt. 加污名于；(给牲畜)打烙印

19. **toss** /tɒs/
    vt. 扔，掷，抛；甩(以示愤怒)
    vi. vt. (使)摇摆，颠簸；掷硬币决定
    n. 掷硬币决定；猛仰头；投掷

20. **total** /ˈtəʊtl/
    adj. 全部的，总计的，完全的
    n. 总数，合计
    vt. 总计为，计算…的总和

21. **touch** /tʌtʃ/
    vt. 触摸，移动；使感动，影响
    vi. 接触，触及
    n. 触觉，触摸；润色；手法；少许

22. **tough** /tʌf/
    adj. 艰难的；严厉的，强硬的
    adj. 坚强的；剽悍的；结实的
    n. 暴徒，恶棍
    v. 坚持，挺过

23. **treat** /triːt/
    vt. 对待；治疗；处理；款待
    n. 款待

24. **treaty** /ˈtriːti/
    n. 条约，协定

25. **trend** /trend/
    n. 趋势，倾向

26. **vice** /vaɪs/
    n. 恶习；(黄赌毒等)罪行；老虎钳
    prep. 副的，次的

27. **vicious** /ˈvɪʃəs/
    adj. 残暴的，凶猛的
    adj. 恶毒的；恶性的，严重的

28. **victim** /ˈvɪktɪm/
    n. 受害者；患者；祭品

29. **click** /klɪk/
    vi. vt. 发出咔嗒声；点击
    vi. 恍然大悟；(与某人)合得来
    n. 咔嗒声；点击

30. **client** /ˈklaɪənt/
    n. 客户，顾客；当事人，委托人

31. **cling** /klɪŋ/
    vi. 紧紧抓住；粘住；依恋；坚持

32. **close** /kləʊz/
    vt. vi. 关闭，不开放；停止；(使)结束
    vt. 合上，合拢；(使)缩小，接近
    adj. 接近的；可能的；亲密的
    adv. 接近，靠近，紧挨着

33. **closet** /ˈklɒzɪt/
    n. 贮藏室，壁橱；衣柜
    adj. 隐藏(身份等)的
    vt. 把…关在房间里

34. **code** /kəʊd/
    n. 密码，代码；行为准则，法规
    vt. 给…编号；编程，编码

35. **personal** /ˈpɜːsənl/
    adj. 个人的，私人的；亲自的

36. **personality** /ˌpɜːsəˈnæləti/
    n. 性格；魅力，气质；名人；特色

37. **personnel** /ˌpɜːsəˈnel/
    n. 人员，员工；人事部门

38. **form** /fɔːm/
    n. 类型；形式；表格；形状，体能
    vi. vt. (使)出现，(使)形成，建立
    vt. (使)成形，组成；塑造(性格)

39. **formal** /ˈfɔːml/
    adj. 正式的，正规的

40. **format** /ˈfɔːmæt/
    n. 版式，格式；样式
    vt. 格式化；安排版式

41. **formation** /fɔːˈmeɪʃn/
    n. 形成，产生；组成物；编队

42. **former** /ˈfɔːmə(r)/
    adj. 以前的，前者的

43. **formidable** /ˈfɔːmɪdəbl/
    adj. 令人敬畏的，难对付的

44. **formula** /ˈfɔːmjələ/
    n. 公式；分子式；方案；配方

45. **formulate** /ˈfɔːmjuleɪt/
    vt. 规划，策划；构想；确切表达

46. **fortunate** /ˈfɔːtʃənət/
    adj. 幸运的

47. **fortune** /ˈfɔːtʃuːn/
    n. 运气，时运；命运；巨款

48. **guide** /ɡaɪd/
    n. 指南；导游；有指导意义的事物
    vt. 给…领路；指导，影响

49. **guidance** /ˈɡaɪdns/
    n. 指导，引导；制导，导航

50. **guideline** /ˈɡaɪdlaɪn/
    n. 指导方针，准则；参考

51. **guild** /ɡɪld/
    n. (同一工作、兴趣或目标的)协会

52. **guilt** /ɡɪlt/
    n. 内疚；悔恨；犯罪，罪行

53. **guilty** /ˈɡɪlti/
    adj. 内疚的；有罪的；有过失的

54. **recognition** /ˌrekəɡˈnɪʃn/
    n. 认出，识别；承认，认可；赞赏

55. **recognize** /ˈrekəɡnaɪz/
    vt. 认出；承认；公认；表彰

56. **recommend** /ˌrekəˈmend/
    vt. 推荐；建议；使受欢迎

57. **recover** /rɪˈkʌvə(r)/
    vi. 恢复，复原；康复，痊愈
    vt. 恢复(知觉等)；全额收回；找回

58. **recovery** /rɪˈkʌvəri/
    n. 康复，痊愈；恢复，复苏；收回

59. **recruit** /rɪˈkruːt/
    vt. 招收，招聘，征召
    n. 新兵；新成员

60. **sell** /sel/
    vi. vt. 卖，出售
    vt. 推销；自荐
    n. 销售品

61. **send** /send/
    vt. 寄，发送；传达；派遣；使得

62. **senior** /ˈsiːniə(r)/
    adj. 级别高的；成人的，老年的
    adj. 中学的；毕业年级的
    n. 年长者；毕业班学生

63. **smart** /smɑːt/
    adj. 聪明的；衣冠楚楚的，光鲜的
    adj. 智能的
    vi. 感到剧痛；因批评等难过

64. **smell** /smel/
    vi. 有…气味；散发着臭气
    vt. 闻到；嗅；觉察出
    n. 气味；嗅觉；臭味；嗅

65. **soak** /səʊk/
    vt. vi. 浸泡，湿透
    vt. 使湿透；把…浸湿；享受
    n. 浸泡；湿透；泡澡

66. **soar** /sɔː(r)/
    vi. 升空；猛增；翱翔；耸立；高涨

67. **sociable** /ˈsəʊʃəbl/
    adj. 喜欢交际的，合群的

68. **social** /ˈsəʊʃl/
    adj. 社会的；社交的；群居的

69. **socialism** /ˈsəʊʃəlɪzəm/
    n. 社会主义

70. **society** /səˈsaɪəti/
    n. 社会；社团；上流社会；交往

71. **sociology** /ˌsəʊsiˈɒlədʒi/
    n. 社会学

72. **soluble** /ˈsɒljəbl/
    adj. 可溶解的；(问题)可解决的

73. **solution** /səˈluːʃn/
    n. 解决办法；谜底；答案；溶液

74. **solve** /sɒlv/
    vt. 解决；解答

75. **detach** /dɪˈtætʃ/
    vt. 拆卸；分开；脱离；拆卸；收

76. **detail** /ˈdiːteɪl/
    n. 细节，详情；资料信息；小分队
    vt. 详细列举；详述；派遣

77. **detain** /dɪˈteɪn/
    vt. 拘留，扣押；耽搁

`,pr=`# 2027考研英语红宝书
## 必考词Unit12 76词

1.  **shadow** /ˈʃædəʊ/
    n. 阴影；阴暗处；少许
    vt. 跟踪，盯梢；跟随…实地学习
    adj. 影子内阁的

2.  **shade** /ʃeɪd/
    n. 阴凉处；灯罩；色度；细微差别
    vt. 给…遮挡光线；加灯罩；画阴影

3.  **sort** /sɔːt/
    n. 种类，类别；分类，排序
    vt. 分类，整理；妥善处理

4.  **soul** /səʊl/
    n. 灵魂；精神，精髓；某种人

5.  **sound** /saʊnd/
    n. 声音，声响
    vi. 听起来；鸣警报
    adj. 合理的，正确的；完好的，健康的
    adj. 透彻的，全面的；酣畅的

6.  **sour** /ˈsaʊə(r)/
    adj. 酸的，馊的；(人)阴郁的
    vi. vt. (关系、态度)变坏；变味；变馊

7.  **source** /sɔːs/
    n. 来源，出处；消息来源；根源
    vt. (从…)获得

8.  **advance** /ədˈvɑːns/
    n. 前进；进步，发展；预付款；上涨
    vi. 前进；进步，发展
    vt. 促进；预付；提议；提前
    adj. 预先的，事先的；先行的

9.  **advanced** /ədˈvɑːnst/
    adj. 先进的；(课程)高级的；晚期的

10. **advantage** /ədˈvɑːntɪdʒ/
    n. 优点，有利条件，优势
    vt. 使处于有利地位

11. **advice** /ədˈvaɪs/
    n. 建议，忠告

12. **advise** /ədˈvaɪz/
    vi. 建议，忠告；提供专业咨询
    vt. 正式通知

13. **advisable** /ədˈvaɪzəbl/
    adj. 明智的，可取的

14. **advocate** /ˈædvəkeɪt/
    vt. 提倡，主张
    n. 拥护者，提倡者；辩护律师

15. **aesthetic** /iːsˈθetɪk/
    adj. 美学的，审美的
    n. 美学，审美学；美感

16. **affair** /əˈfeə(r)/
    n. 事务；私事，事情；暧昧关系

17. **affect** /əˈfekt/
    vt. 影响；(疾病)侵袭；打动；假装

18. **affection** /əˈfekʃn/
    n. 喜爱，钟爱；爱情，爱慕

19. **affiliate** /əˈfɪlieɪt/
    vi. vt. (使)隶属于，(使)紧密联系
    n. 分支机构，附属组织，分公司

20. **affirm** /əˈfɜːm/
    vt. 证实，确认；断言，申明

21. **afford** /əˈfɔːd/
    vt. 买得起；承担得起；提供，给予

22. **breach** /briːtʃ/
    n. 违背，破坏；(关系)中断；缺口
    vt. 违反，违背；在…上打开缺口

23. **break** /breɪk/
    vi. vt. (使)破，裂，碎；弄坏；暂停
    vi. 违反；打破(纪录)；弄破；中断
    vi. 逃脱；开始；(风暴)发作；透露
    n. 休息，间歇；间断，终止，中断

24. **breakdown** /ˈbreɪkdaʊn/
    n. 故障；破裂；精神崩溃；明细

25. **breed** /briːd/
    vi. (动物)繁殖
    vt. 饲养，培育；导致，酿成
    n. 品种；(人或物的)类型

26. **brevity** /ˈbrevəti/
    n. 简洁，短暂

27. **coincide** /ˌkəʊɪnˈsaɪd/
    vi. 同时发生；(想法等)相同；重叠

28. **collapse** /kəˈlæps/
    vi. 倒塌，昏倒；崩溃；暴跌
    vi. vt. 折叠，可折叠；(肺或血管)萎陷
    n. 崩溃；倒塌；暴跌

29. **colleague** /ˈkɒliːɡ/
    n. 同事，同僚

30. **collect** /kəˈlekt/
    vt. 收集，收藏；领取，收走；收账
    vi. vt. 聚积，积累；募捐，募集；赢得
    vi. 聚集，集合，汇集
    adj. (电话)由受话人付费的

31. **collection** /kəˈlekʃn/
    n. 收藏品；一群，取走；收集
    n. 系列时装；作品集

32. **collective** /kəˈlektɪv/
    adj. 集体的，共同的
    n. 集体企业，合作农场

33. **collide** /kəˈlaɪd/
    vi. 碰撞，相撞；相冲突，相抵触

34. **column** /ˈkɒləm/
    n. 柱，柱状物；列；栏；专栏

35. **combat** /ˈkɒmbæt/
    n. 战斗，搏斗
    vt. 与…作斗争，打击，战斗

36. **combine** /kəmˈbaɪn/
    vi. vt. (使)结合，组合，合并，协力
    vt. 兼备，使融合；同时做
    n. 联合收割机；集团，联合企业

37. **command** /kəˈmɑːnd/
    n. 命令，指挥；管辖，掌握，精通
    vt. 命令；应得，博得；掌握，掌管
    vt. vi. 指挥，统率

38. **commend** /kəˈmend/
    vt. 赞扬；推荐；把…托付给

39. **comment** /ˈkɒment/
    n. 评论，意见
    vi. vt. 作出评论，发表意见

40. **commerce** /ˈkɒmɜːs/
    n. 商业，贸易

41. **commercial** /kəˈmɜːʃl/
    adj. 商业的，营利的；商业化的
    n. (电视或电台)广告

42. **commission** /kəˈmɪʃn/
    n. 委员会；佣金；手续费；委托
    vt. 正式委托；任命；为…建纪念碑

43. **commit** /kəˈmɪt/
    vt. 犯(错或罪)；承诺；花费
    vi. 忠于，全心全意投入

44. **committee** /kəˈmɪti/
    n. 委员会

45. **commodity** /kəˈmɒdəti/
    n. 商品，货物；有用的东西

46. **common** /ˈkɒmən/
    adj. 常见的，普通的；共有的

47. **communicate** /kəˈmjuːnɪkeɪt/
    vi. 交流，沟通；表达；传达
    vt. 交流，沟通；表达；传达

48. **communication** /kəˌmjuːnɪˈkeɪʃn/
    n. 交流，沟通；通信，信息

49. **communism** /ˈkɒmjunɪzəm/
    n. 共产主义

50. **community** /kəˈmjuːnəti/
    n. 社区，群体；群落

51. **detect** /dɪˈtekt/
    vt. 发现，察觉；测出

52. **deter** /dɪˈtɜː(r)/
    vt. vi. 威慑，制止，阻止

53. **deteriorate** /dɪˈtɪəriəreɪt/
    vi. 恶化，变坏，衰退

54. **determine** /dɪˈtɜːmɪn/
    vt. 确定，查明；决定
    vt. vi. 决意，下决心

55. **develop** /dɪˈveləp/
    vi. vt. (使)发展，成长；患(病)；加强
    vt. 开发，研制；修建；阐明；冲洗

56. **device** /dɪˈvaɪs/
    n. 仪器，设备；手段，花招；炸弹

57. **devise** /dɪˈvaɪz/
    vt. 想出，发明，设计

58. **ensure** /ɪnˈʃʊə(r)/
    vt. 确保

59. **entail** /ɪnˈteɪl/
    vt. 牵涉，涉及，需要

60. **indeed** /ɪnˈdiːd/
    adv. 确实，的确；真正地；其实

61. **independence** /ˌɪndɪˈpendəns/
    n. (国家的)独立；(人的)自立

62. **independent** /ˌɪndɪˈpendənt/
    adj. 独立的；自立的；自主的

63. **index** /ˈɪndeks/
    n. 索引；指数；标志，指标
    vt. 为…编索引

64. **mere** /mɪə(r)/
    adj. 仅仅，只不过；极小的，单单
    n. 小湖，池塘

65. **merely** /ˈmɪəli/
    adv. 只不过，仅仅

66. **plausible** /ˈplɔːzəbl/
    adj. (说法)貌似合理的，花言巧语的

67. **plea** /pliː/
    n. 恳求；抗辩；(犯罪的)借口

68. **plead** /pliːd/
    vi. vt. 恳求，请求；认罪，申辩
    vt. 陈述案情；以…为借口

69. **plot** /plɒt/
    n. 故事情节；阴谋；小块土地
    vi. vt. 密谋，暗中策划
    vt. 绘制

70. **policy** /ˈpɒləsi/
    n. 政策，保险单；(处事)原则

71. **polite** /pəˈlaɪt/
    adj. 有礼貌的；客气的

72. **political** /pəˈlɪtɪkl/
    adj. 政治的；政党的；关心政治的

73. **politician** /ˌpɒləˈtɪʃn/
    n. 从政者，政治家；投机钻营者

74. **politics** /ˈpɒlətɪks/
    n. 政治；政治学；政见，政治

75. **poll** /pəʊl/
    vt. 民意调查；投票；投票站
    vt. 获得(票数)
    vi. 投票

76. **ponder** /ˈpɒndə(r)/
    vi. vt. 沉思，考虑

`,mr=`# 2027考研英语红宝书
## 必考词Unit13 77词

1.  **beam** /biːm/
    n. 光束，光线；横梁；平衡木
    vi. vt. 眉开眼笑；照耀
    vt. 发射(信号)

2.  **become** /bɪˈkʌm/
    v. link. 成为，变得
    vt. 适合，与…相称

3.  **deprive** /dɪˈpraɪv/
    vt. 剥夺，使不能享有

4.  **derive** /dɪˈraɪv/
    vi. 起源于，来自
    vt. 从…中获得

5.  **describe** /dɪˈskraɪb/
    vt. 描述，描写；形成…形状

6.  **description** /dɪˈskrɪpʃn/
    n. 描述，叙述；种类，类型

7.  **deserve** /dɪˈzɜːv/
    vt. 值得，应得，应受

8.  **design** /dɪˈzaɪn/
    n. 设计；设计方案；花纹；意图
    vt. 设计

9.  **designate** /ˈdezɪɡneɪt/
    vt. 指定，选定；指派，任命；表示
    adj. 尚未就职的

10. **desirable** /dɪˈzaɪərəbl/
    adj. 理想的，值得拥有的；性感的

11. **desire** /dɪˈzaɪə(r)/
    n. 渴望，欲望
    vt. 渴望，期望

12. **flaw** /flɔː/
    n. 瑕疵，缺点；错误；性格缺陷

13. **flexible** /ˈfleksəbl/
    adj. 灵活的，可变通的；可弯曲的

14. **fling** /flɪŋ/
    vt. 扔，掷；猛动(身体)
    n. 一时的放纵；短暂的风流韵事

15. **flourish** /ˈflʌrɪʃ/
    vi. 繁荣，兴旺；茁壮成长
    vt. (为引起注意)挥舞，挥动
    n. 夸张动作；华丽辞藻

16. **grow** /ɡrəʊ/
    vi. 成长；增加，扩大；逐渐开始
    vi. vt. 种植，生长；(使)留长
    vt. 使扩大，使扩展
    v. link. 逐渐变得，逐渐成为

17. **grown-up** /ɡrəʊn ʌp/
    n. 成年人，大人
    adj. 成年的，成人的；有成人特点的

18. **growth** /ɡrəʊθ/
    n. 成长，生长；增加，增长，增强

19. **hinder** /ˈhɪndə(r)/
    vt. 阻碍，妨碍，阻止

20. **hint** /hɪnt/
    n. 暗示，提示；迹象；少许；建议
    vt. vi. 暗示，提示

21. **hitherto** /ˌhɪðəˈtuː/
    adv. 迄今，到(某时)为止

22. **impact** /ˈɪmpækt/
    n. 影响；撞击，碰撞
    vi. vt. 影响；撞击，碰撞

23. **impair** /ɪmˈpeə(r)/
    vt. 削弱，损伤

24. **impart** /ɪmˈpɑːt/
    vt. 传达，传授；赋予…特定品质

25. **implement** /ˈɪmplɪment/
    vt. 履行，实施，贯彻
    n. 工具，器具，用具

26. **implication** /ˌɪmplɪˈkeɪʃn/
    n. 可能的影响；暗示，含意；牵连

27. **implicit** /ɪmˈplɪsɪt/
    adj. 含蓄的，不言明的；内含的
    adj. 绝对的

28. **imply** /ɪmˈplaɪ/
    vt. 暗示，暗指；意味着，表明

29. **import** /ˈɪmpɔːt/
    vt. 进口，引进；导入，输入
    n. 进口(货)，舶来品；重要性，意义

30. **importance** /ɪmˈpɔːtns/
    n. 重要性

31. **important** /ɪmˈpɔːtnt/
    adj. 重要的，重大的；有影响力的

32. **impose** /ɪmˈpəʊz/
    vt. 强制实行；将…强加于；使承受
    vi. 给…添麻烦

33. **impress** /ɪmˈpres/
    vt. vi. 使印象深刻，使钦佩
    vt. 使…谨记

34. **impression** /ɪmˈpreʃn/
    n. 印象；印象画；滑稽模仿；假象

35. **impressive** /ɪmˈpresɪv/
    adj. 使人印象深刻的，令人敬佩的

36. **improve** /ɪmˈpruːv/
    vi. vt. 改进，改善，提高

37. **impulse** /ˈɪmpʌls/
    n. 冲动；脉冲；推动力

38. **limit** /ˈlɪmɪt/
    n. 限制，限度，极限；界限，范围
    vt. 限制；限定；限量

39. **limitation** /ˌlɪmɪˈteɪʃn/
    n. 限制，制约；限制规则；局限

40. **limited** /ˈlɪmɪtɪd/
    adj. 有限的，限量的

41. **origin** /ˈɒrɪdʒɪn/
    n. 源头，起因；出身

42. **original** /əˈrɪdʒənl/
    adj. 起初的；原创的；原作的
    n. 原件，原文

43. **originate** /əˈrɪdʒɪneɪt/
    vi. 起源，发源
    vt. 创始，发起

44. **petition** /pəˈtɪʃn/
    n. 请愿书；申诉书
    vi. vt. 请愿，(向法庭)申请，祈祷

45. **phase** /feɪz/
    n. 阶段，时期；(月亮的)盈亏
    vt. 分阶段进行，逐步做

46. **phenomenon** /fəˈnɒmɪnən/
    n. 现象；非凡的人或事

47. **philosopher** /fəˈlɒsəfə(r)/
    n. 哲学家

48. **philosophy** /fəˈlɒsəfi/
    n. 哲学；哲学体系；信条

49. **phrase** /freɪz/
    n. 短语，词组；成语，习语，乐段
    vt. (以某种方式)表达

50. **physical** /ˈfɪzɪkl/
    adj. 身体的；物质的；物理学的
    n. 体检

51. **physician** /fɪˈzɪʃn/
    n. (内科)医生

52. **pierce** /pɪəs/
    vt. vi. 刺入；(光、声等)穿透，突破

53. **corporate** /ˈkɔːpərət/
    adj. 公司的；全体的；团体的

54. **corporation** /ˌkɔːpəˈreɪʃn/
    n. 大公司，大企业

55. **reason** /ˈriːzn/
    n. 原因；正当理由；理智；道理
    vt. 思考，理解推断

56. **reasonable** /ˈriːznəbl/
    adj. 合理的，理智的，讲道理的
    adj. (价钱)公道的，还行的

57. **recent** /ˈriːsnt/
    adj. 近来的，最新的

58. **serve** /sɜːv/
    vi. vt. 服务；提供，端上；担任，发球
    vt. 对…有用；供应；服刑
    vi. 可用作，产生…效果

59. **servant** /ˈsɜːvənt/
    n. 仆人；政府雇员；受制于…的人

60. **service** /ˈsɜːvɪs/
    n. 服务
    vt. 维护，保养；提供服务

61. **set** /set/
    vt. 使处于；设置；开创；布置
    n. 一套，一副；电视机；布景；集
    adj. 处于…的；固定的；很可能的

62. **setback** /ˈsetbæk/
    n. 挫折，阻碍

63. **setting** /ˈsetɪŋ/
    n. 环境，背景；设置，档

64. **settle** /ˈsetl/
    vi. vt. 解决，和解；定居；(使)平静
    vt. 确定，决定；把…放好
    vi. 降落，停留

65. **settlement** /ˈsetlmənt/
    n. 协议，和解；偿付；定居点

66. **several** /ˈsevrəl/
    adj. 各自的，分别的
    det. 几个，数个，一些

67. **severe** /sɪˈvɪə(r)/
    adj. 严重的；严厉的；严峻的

68. **shape** /ʃeɪp/
    n. 形状；身材；影子；状况
    vt. 使成…形状；塑造；影响…发展

69. **share** /ʃeə(r)/
    vt. 分享，分担
    vt. 分配，分摊
    n. (分得或承担的)一份；股份

70. **sharp** /ʃɑːp/
    adj. 锋利的；急剧的；清晰的
    adj. 敏锐的，尖刻的；剧烈的
    adv. …点整
    n. 升半音；锐利的东西

71. **shelter** /ˈʃeltə(r)/
    n. 住处；庇护；避难处，收容所
    vt. 保护，掩蔽
    vi. 躲避

72. **sophisticated** /səˈfɪstɪkeɪtɪd/
    adj. 见多识广的；老练的
    adj. 精密的，复杂的

73. **sovereign** /ˈsɒvrɪn/
    n. 君主，元首；金镑
    adj. (国家)有主权的；至高无上的

74. **sow** /səʊ/
    vt. vi. 播种，种；灌输；散布，煽动
    n. 母猪

75. **toll** /təʊl/
    n. 伤亡人数；严重后果；通行费
    vi. (尤指)鸣(丧钟)

76. **tone** /təʊn/
    n. 语气；音色；风格；色调
    vt. 使更健壮，使更结实

77. **topic** /ˈtɒpɪk/
    n. 话题，主题，议题

`,hr=`# 2027考研英语红宝书
## 必考词Unit14 72词

1.  **perform** /pəˈfɔːm/
    vt. vi. 演出，表演
    vt. 执行，履行
    vi. 表现，运行

2.  **performance** /pəˈfɔːməns/
    n. 表演，演出；表现，性能；执行

3.  **period** /ˈpɪəriəd/
    n. 一段时间，阶段；经期；句号
    adv. (用于句末)到此为止

4.  **periodical** /ˌpɪəriˈɒdɪkl/
    n. (尤指学术)期刊
    adj. 周期性的，定期的

5.  **perish** /ˈperɪʃ/
    vi. 死亡；湮灭，毁灭
    vi. vt. (使橡胶等)老化

6.  **perpetual** /pəˈpetʃuəl/
    adj. 不间断的，长久的；没完没了的

7.  **perplex** /pəˈpleks/
    vt. 使困惑，使茫然

8.  **perspective** /pəˈspektɪv/
    n. 视角，观点，判断力；透视法

9.  **pessimistic** /ˌpesɪˈmɪstɪk/
    adj. 悲观的

10. **optimistic** /ˌɒptɪˈmɪstɪk/
    adj. 乐观的

11. **optimum** /ˈɒptɪməm/
    adj. 最佳的，最适宜的
    n. 最佳条件，最佳水平

12. **option** /ˈɒpʃn/
    n. 选择(权)；选修课；选项；期权
    vt. 购买(或出售)…的选择权

13. **optional** /ˈɒpʃənl/
    adj. 可选择的，非强制的

14. **organ** /ˈɔːɡən/
    n. 器官；管风琴；机构，机关

15. **organic** /ɔːˈɡænɪk/
    adj. 有机的；器官的；演进的

16. **organism** /ˈɔːɡənɪzəm/
    n. 生物，有机体；有机体系

17. **organization** /ˌɔːɡənaɪˈzeɪʃn/
    n. 组织，机构；安排；结构；条理

18. **organize** /ˈɔːɡənaɪz/
    vt. 组织，筹备；整理，使有条理
    vt. vi. 成立(联盟、党派等)

19. **enhance** /ɪnˈhɑːns/
    vt. 提高，增加，改进，改善

20. **enlarge** /ɪnˈlɑːdʒ/
    vt. vi. (使)增大，扩大
    vt. 放大

21. **enlighten** /ɪnˈlaɪtn/
    vt. 启发，开导，教化

22. **rake** /reɪk/
    n. 耙子，耙状工具
    vt. 耙平，梳理
    vi. 搜寻；搜索

23. **rare** /reə(r)/
    adj. 少见的；珍稀的；(肉类)半熟的

24. **rarely** /ˈreəli/
    adv. 难得地，少见地

25. **rate** /reɪt/
    n. 比率，率；速度；费用
    vt. vi. 评估，评价
    vt. 划分等级

26. **ratio** /ˈreɪʃiəʊ/
    n. 比，比率，比例

27. **rational** /ˈræʃnəl/
    adj. 合理的，理性的；(人)理智的

28. **reach** /riːtʃ/
    vt. 到达；增加到；实现；联系到
    vi. vt. 伸手；够得着；足够达到
    n. 手臂展开的长度；影响范围

29. **react** /riˈækt/
    vi. (作出)反应；过敏；起化学反应

30. **realistic** /ˌriːəˈlɪstɪk/
    adj. 现实的；能实现的；逼真的

31. **reality** /riˈæləti/
    n. 现实；现实的东西；真人秀

32. **realize** /ˈriːəlaɪz/
    vt. vi. 意识到
    vt. 实现；(担心的事)发生；挣得

33. **select** /sɪˈlekt/
    vt. 选择，挑选
    adj. 精选的；高级的

34. **selection** /sɪˈlekʃn/
    n. 挑选；入选者；可供选择的范围

35. **sense** /sens/
    n. 感官；感觉；理解力；意思
    vt. 意识到，觉察出

36. **sensation** /senˈseɪʃn/
    n. 知觉；感觉能力；直觉；轰动

37. **sensible** /ˈsensəbl/
    adj. 明智的；实用的；意识到…的

38. **sensitive** /ˈsensətɪv/
    adj. 体贴的；敏感的；灵敏的

39. **separate** /ˈseprət/
    adj. 单独的，分开的；不同的
    vt. vi. (使)分开，区分
    vt. 隔开，阻隔
    vi. 分居

40. **sequence** /ˈsiːkwəns/
    n. 一系列，一连串；顺序，次序
    vt. 按顺序排列；测定…的序列

41. **serial** /ˈsɪəriəl/
    n. (电视或广播)连续剧，连载故事
    adj. (尤指犯罪)连续的；顺序排列的

42. **series** /ˈsɪəriːz/
    n. 一系列；系列节目；系列比赛

43. **serious** /ˈsɪəriəs/
    adj. 严重的；严肃的；大量的

44. **toast** /təʊst/
    n. 烤面包片；吐司；干杯，祝酒
    vt. 为…举杯敬酒
    vt. vi. 烤(尤指面包)，把…烤得焦

45. **together** /təˈɡeðə(r)/
    adv. 一起，同时；结合起来；在一起

46. **token** /ˈtəʊkən/
    n. 代币；筹码；标志，代金券
    adj. 象征性的

47. **tolerance** /ˈtɒlərəns/
    n. 宽容，容忍；忍耐力；公差

48. **tolerant** /ˈtɒlərənt/
    adj. 宽容的，容忍的；能耐…的

49. **tolerate** /ˈtɒləreɪt/
    vt. 容许，忍耐；对…有耐受性

50. **accumulate** /əˈkjuːmjuleɪt/
    vt. 积累，积聚
    vi. 累积，逐渐增加

51. **accuracy** /ˈækjərəsi/
    n. 准确性，精确性

52. **accurate** /ˈækjərət/
    adj. 准确的，精确的

53. **accuse** /əˈkjuːz/
    vt. 指责，指控；控告

54. **achieve** /əˈtʃiːv/
    vt. 达到，获得，完成
    vi. 成功

55. **acknowledge** /əkˈnɒlɪdʒ/
    vt. 承认；认可；感谢
    vt. 告知收到(信件或信息等)

56. **cheer** /tʃɪə(r)/
    n. 欢呼声；欢乐的气氛
    vi. vt. 欢呼，加油
    vt. 鼓励，鼓舞；(使)振奋起来

57. **chemical** /ˈkemɪkl/
    adj. 化学的，与化学有关的
    n. 化学品，化学制品

58. **cherish** /ˈtʃerɪʃ/
    vt. 珍爱，珍惜；怀有(希望等)

59. **chip** /tʃɪp/
    n. 薯条，薯片；芯片；缺口，碎屑
    vt. 打破，弄缺；打(或踢)高球
    vt. 削下，凿下

60. **choice** /tʃɔɪs/
    n. 选择，挑选；选择权；入选者
    adj. 精选的，上等的

61. **choose** /tʃuːz/
    vt. vi. 选择，挑选

62. **board** /bɔːd/
    n. 木板，板；董事会；膳食
    vi. vt. 上(船、飞机等)
    vt. 让乘客上(船或飞机)；在校寄宿

63. **boast** /bəʊst/
    vi. vt. 自吹自擂，自夸
    vt. 有(值得自豪的事物)
    n. 自吹自擂，自夸

64. **bonus** /ˈbəʊnəs/
    n. 奖金，红利；额外的好处

65. **boom** /buːm/
    n. 繁荣，激增；风靡的时期；轰鸣
    vi. 轰鸣，轰响；繁荣；迅速发展
    vt. vi. 以低沉有力的声音说话

66. **boost** /buːst/
    vt. 使增长，推动；偷窃
    n. 激励；增加；向上一推

67. **verbal** /ˈvɜːbl/
    adj. 口头的；言辞的；动词的

68. **verdict** /ˈvɜːdɪkt/
    n. 裁决，裁定；意见，决定

69. **verify** /ˈverɪfaɪ/
    vt. 证明，核实，查证

70. **verse** /vɜːs/
    n. 诗；诗节；(《圣经》等中的)节

71. **version** /ˈvɜːʃn/
    n. 版本；描述，说法

72. **vessel** /ˈvesl/
    n. 舰，轮船；容器，器皿；血管

`,gr=`# 2027考研英语红宝书
## 必考词Unit15 77词

1.  **holy** /ˈhəʊli/
    adj. 与上帝有关的，神圣的；虔诚的

2.  **honour** /ˈɒnə(r)/
    n. 荣幸；荣誉；荣誉称号；道义
    vt. 尊敬(某人)；表彰；信守(承诺)

3.  **honourable** /ˈɒnərəbl/
    adj. 值得尊敬的；正直的；体面的

4.  **horizon** /həˈraɪzn/
    n. 地平线；范围，眼界，见识

5.  **horizontal** /ˌhɒrɪˈzɒntl/
    adj. 水平的，横的
    n. 水平位置，水平线，水平面

6.  **ingenious** /ɪnˈdʒiːniəs/
    adj. 精巧的，巧妙的；善于创造的

7.  **ingredient** /ɪnˈɡriːdiənt/
    n. 配料，成分，因素

8.  **initial** /ɪˈnɪʃl/
    adj. 开始的，最初的
    n. (名字的)首字母
    vt. 用姓名的首字母签名于

9.  **initiate** /ɪˈnɪʃieɪt/
    vt. 开始，发起；使初步了解；接纳
    n. 新入会的人

10. **initiative** /ɪˈnɪʃətɪv/
    n. 主动性；倡议，新方案；主动权

11. **local** /ˈləʊkl/
    adj. 当地的，本地的；(身体)局部的
    n. 本地人

12. **locality** /ləʊˈkæləti/
    n. 地区，区域

13. **locate** /ləʊˈkeɪt/
    vt. 确定…的位置；使位于
    vi. (公司)落户于

14. **location** /ləʊˈkeɪʃn/
    n. 地点，位置；外景拍摄地；定位

15. **neglect** /nɪˈɡlekt/
    vt. 疏忽，忽略；未做(某事)
    n. 疏忽，(被)忽略

16. **negligible** /ˈneɡlɪdʒəbl/
    adj. 微不足道的，不值一提的

17. **prescribe** /prɪˈskraɪb/
    vt. 开(药、处方)；规定

18. **prescription** /prɪˈskrɪpʃn/
    n. 处方；处方药；对策

19. **presence** /ˈprezns/
    n. 在场，出席；存在，出现；仪态

20. **present** /ˈpreznt/
    adj. 当前的；在场的；存在的
    n. 礼物；目前，现在；现在时
    vt. 授予；提交；展现；使经历

21. **presently** /ˈprezntli/
    adv. 目前，现在；马上，随即

22. **preserve** /prɪˈzɜːv/
    vt. 维护，保护；保持；保存(食物)
    n. 专门领域；蜜饯，果酱；保护区

23. **preside** /prɪˈzaɪd/
    vi. 主持，负责(会议等)

24. **press** /pres/
    n. 报刊；新闻界；印刷机；出版社
    vt. vi. 压，按
    vt. 把…按入；敦促；把…压平
    vi. 拥挤着移动

25. **pressure** /ˈpreʃə(r)/
    n. 压力；挤压；液压，气压
    vt. 对…施压，逼迫

26. **prestige** /preˈstiːʒ/
    n. 威信，声望
    adj. 令人敬仰的，受尊重的；名贵的

27. **presumably** /prɪˈzjuːməbli/
    adv. 很可能，据推测

28. **presume** /prɪˈzjuːm/
    vi. vt. 推测，猜测
    vt. (尤指法庭上)推定，假定；假设
    vi. 妄行，越权行事

29. **prevent** /prɪˈvent/
    vt. 防止，预防，阻止

30. **previous** /ˈpriːviəs/
    adj. 先前的；(时间或顺序上)稍前的

31. **prey** /preɪ/
    n. 猎物；受害者
    vi. 捕食；坑骗

32. **reliable** /rɪˈlaɪəbl/
    adj. 可信赖的，可靠的

33. **reliance** /rɪˈlaɪəns/
    n. 依赖，依靠

34. **religion** /rɪˈlɪdʒən/
    n. 宗教信仰，宗教

35. **religious** /rɪˈlɪdʒəs/
    adj. 宗教的；虔诚的，笃信宗教的

36. **rely** /rɪˈlaɪ/
    vi. 依靠；信任

37. **straight** /streɪt/
    adv. 笔直地；直接，正，直，坦率地
    adj. 直的；连续的；准的；坦率的
    n. 直道

38. **straightforward** /ˌstreɪtˈfɔːwəd/
    adj. 简单易懂的；坦率的，率直的

39. **strain** /streɪn/
    n. 压力，劳损，拉伤；品种
    vt. 拉伤，扭伤，劳损；过度使用
    vt. 尽力，使劲，拉紧
    vt. 用力推(或拉)

40. **strategy** /ˈstrætədʒi/
    n. 战略，策略；战略学

41. **strength** /streŋθ/
    n. 力量，实力，优势；强度

42. **strengthen** /ˈstreŋθn/
    vi. vt. 加强，加固

43. **strenuous** /ˈstrenjuəs/
    adj. 费力的，繁重的；竭尽全力的

44. **transaction** /trænˈzækʃn/
    n. 交易，业务；(业务)办理

45. **transfer** /trænsˈfɜː(r)/
    vi. vt. 转移，调动；移交，转学，换乘
    vt. 转账；转让；传染
    n. 转移，调动；转会，换乘

46. **transform** /trænsˈfɔːm/
    vt. 转换，改变，改造

47. **transient** /ˈtrænziənt/
    adj. 短暂的，流动的，临时的
    n. 暂住者，流浪者

48. **translation** /trænsˈleɪʃn/
    n. 翻译，译文

49. **architect** /ˈɑːkɪtekt/
    n. 建筑师；发起者，创立者

50. **architecture** /ˈɑːkɪtektʃə(r)/
    n. 建筑学；建筑风格；结构

51. **archive** /ˈɑːkaɪv/
    n. 档案，档案馆
    vt. 把(文档等)存档

52. **area** /ˈeəriə/
    n. 区域，地区；面积，部位，领域

53. **arena** /əˈriːnə/
    n. 竞技场，剧场；活动场地

54. **argue** /ˈɑːɡjuː/
    vi. vt. 争论，争吵；
    vt. 论证，主张；证明，表明

55. **argument** /ˈɑːɡjumənt/
    n. 争论，论据，理由；争议，异议

56. **arise** /əˈraɪz/
    vi. 发生，出现；由…引起；起身

57. **arouse** /əˈraʊz/
    vt. 引起，激起，激发；唤醒

58. **array** /əˈreɪ/
    n. 一大批；数列，一整套(设备)
    vt. 有序的部署；给…盛装打扮

59. **visible** /ˈvɪzəbl/
    adj. 可见的，明显的

60. **vision** /ˈvɪʒn/
    n. 视力，视野；设想，幻象，远见

61. **visual** /ˈvɪʒuəl/
    adj. 视觉的，视力的，可见的
    n. 视觉材料

62. **vital** /ˈvaɪtl/
    adj. 极其重要的；维持生命所必需的；充满活力的，生机勃勃的

63. **vivid** /ˈvɪvɪd/
    adj. 生动的，清晰的，鲜艳的

64. **void** /vɔɪd/
    n. (空白)空虚感；缺乏；空；空间
    adj. (合同)无效的，缺乏…的；空的
    vt. 使…作废，排泄

65. **volume** /ˈvɒljuːm/
    n. 体积，容积；量；音量；卷，册

66. **consequence** /ˈkɒnsɪkwəns/
    n. 结果，后果；重要性，价值

67. **consequently** /ˈkɒnsɪkwəntli/
    adv. 结果，因此，所以

68. **conservation** /ˌkɒnsəˈveɪʃn/
    n. 保护，节约；保存

69. **conservative** /kənˈsɜːvətɪv/
    adj. 保守的，守旧的
    n. 保守党员；保守的人

70. **consider** /kənˈsɪdə(r)/
    vt. 考虑，斟酌
    vt. 认为，体谅，端详

71. **considerable** /kənˈsɪdərəbl/
    adj. 相当多的，相当大的

72. **considerate** /kənˈsɪdərət/
    adj. 体贴的，考虑周到的；主动的

73. **consume** /kənˈsjuːm/
    vt. 消耗，耗费；吃，喝；使充满

74. **consumption** /kənˈsʌmpʃn/
    n. 消耗(量)；食用(量)；消费

75. **dispute** /dɪˈspjuːt/
    n. 争论，争端
    vt. 对…表示异议；对…表示质疑
    vt. 就…争论；就…争执
    vi. 争论

76. **dissolve** /dɪˈzɒlv/
    vi. vt. (使)溶解；消除；(使)消散
    vt. 解除，终止，解散
    adj. 禁不住的，未来的；(液体)局部的

77. **exchange** /ɪksˈtʃeɪndʒ/
    n. 交换，交流，交谈；兑换；互换
    vt. 交换，交流，兑换，交易

78. **exclude** /ɪkˈskluːd/
    vt. 将…排除在外；不包括；排除

79. **exclusive** /ɪkˈskluːsɪv/
    adj. 独占的；高档的；排外的
    adj. 不包括…的
    n. 独家新闻；特约报道

`,_r=`# 2027考研英语红宝书
## 必考词Unit16 75词

1.  **confine** /kənˈfaɪn/
    vt. 限制，使…局限于；监禁，关押

2.  **confirm** /kənˈfɜːm/
    vt. 证实，证明；确认(安排)；批准

3.  **conflict** /ˈkɒnflɪkt/
    n. 冲突，争执，矛盾
    vi. 相互矛盾，冲突

4.  **confidence** /ˈkɒnfɪdəns/
    n. 信心，信任；自信；把握；秘密

5.  **confident** /ˈkɒnfɪdənt/
    adj. 自信的；有把握的，确信的

6.  **confidential** /ˌkɒnfɪˈdenʃl/
    adj. 机密的；(讲话)悄悄的

7.  **configuration** /kənˌfɪɡəˈreɪʃn/
    n. 布局，构造，配置

8.  **trail** /treɪl/
    n. 痕迹，踪迹；(乡间)小路，路线
    vt. vi. (被)拖，拉；落后，失利
    vi. (尤指跟在他人后面)疲惫地走
    vt. 跟踪，追踪

9.  **train** /treɪn/
    n. 火车，列车；队列；一系列
    vt. vi. (接受)训练，(被)培训
    vt. 教育，培养…的能力

10. **training** /ˈtreɪnɪŋ/
    n. 培训，训练；体育训练，锻炼

11. **trait** /treɪt/
    n. 特性，特质

12. **view** /vjuː/
    n. 看法；(思维)方法；视野；景色
    vt. 视为，看待；看，观看

13. **viewpoint** /ˈvjuːpɔɪnt/
    n. 观点，看法；视角，角度

14. **violence** /ˈvaɪələns/
    n. 暴力，暴行；激烈，热烈

15. **violent** /ˈvaɪələnt/
    adj. 暴力的；(情感)强烈的；剧烈的

16. **virtual** /ˈvɜːtʃuəl/
    adj. 几乎…的，实际上的；虚拟的

17. **virtue** /ˈvɜːtʃuː/
    n. 美德；优点，长处

18. **apparent** /əˈpærənt/
    adj. 显然的；表面上的，貌似的

19. **appeal** /əˈpiːl/
    vi. 吸引；呼吁，恳求；上诉，打动
    n. 上诉；吸引力，魅力；呼吁

20. **appear** /əˈpɪə(r)/
    vi. 出现；起源，问世；演出；出庭
    v. link. 似乎，好像

21. **appearance** /əˈpɪərəns/
    n. 外观；公开露面；出现，问世

22. **appliance** /əˈplaɪəns/
    n. (家用)电器，装置

23. **applicable** /əˈplɪkəbl/
    adj. 适合的，适用的

24. **application** /ˌæplɪˈkeɪʃn/
    n. 申请(书)；运用；应用程序

25. **appoint** /əˈpɔɪnt/
    vt. 任命，指派；约定(时间、地点)

26. **appointment** /əˈpɔɪntmənt/
    n. 约定，预约；任命，指派；职位

27. **apply** /əˈplaɪ/
    vi. vt. 申请；(对…)适用
    vt. 应用，运用；涂抹，按，踩

28. **appreciate** /əˈpriːʃieɪt/
    vt. 欣赏，感激；理解，体会到
    vi. 升值，增值

29. **discriminate** /dɪˈskrɪmɪneɪt/
    vi. 歧视，区别对待
    vi. vt. 区分，辨别

30. **discuss** /dɪˈskʌs/
    vt. 讨论，谈论；论述，阐述

31. **disease** /dɪˈziːz/
    n. 疾病；弊病，恶习

32. **escape** /ɪˈskeɪp/
    vi. 逃跑；幸免于难；泄漏
    vi. vt. 逃脱，摆脱
    vt. 避免；被忘掉，被忽视
    n. 逃跑；解脱；渗出(量)

33. **especially** /ɪˈspeʃəli/
    adv. 特别，尤其；特地；非常

34. **essay** /ˈeseɪ/
    n. 文章，论文；随笔，小品文
    vt. 企图，尝试

35. **essence** /ˈesns/
    n. 本质，精髓；精油，香精

36. **essential** /ɪˈsenʃl/
    adj. 必不可少的；基本的，本质的
    n. 必需品；要素，要点

37. **establish** /ɪˈstæblɪʃ/
    vt. 建立，创立；使被认可；证实

38. **estimate** /ˈestɪmeɪt/
    vt. 估计，估算，估价
    n. 估计，估算，估价

39. **ethic** /ˈeθɪk/
    n. 伦理；道德体系；伦理学

40. **ethnic** /ˈeθnɪk/
    adj. 种族的，民族的；有民族特色的
    n. 少数民族的人

41. **evaluate** /ɪˈvæljueɪt/
    vt. 评价，评估

42. **industrial** /ɪnˈdʌstriəl/
    adj. 工业的；工业发达的
    adj. 工业制造的；工业用的

43. **industrialize** /ɪnˈdʌstriəlaɪz/
    vt. vi. 工业化

44. **industry** /ˈɪndəstri/
    n. 工业；行业，产业；勤奋

45. **inevitable** /ɪnˈevɪtəbl/
    adj. 不可避免的，必然发生的

46. **miserable** /ˈmɪzrəbl/
    adj. 痛苦的，令人难受的；不友善的

47. **misery** /ˈmɪzəri/
    n. 痛苦；穷困；不幸的事

48. **mislead** /ˌmɪsˈliːd/
    vt. 误导，将…引入歧途

49. **mix** /mɪks/
    vt. vi. (使)混合，掺和，融合
    vi. 交往，相处，交际
    n. 混合；配料，混录，混音

50. **mixture** /ˈmɪkstʃə(r)/
    n. 混合，混合体；混合物，混合料

51. **necessary** /ˈnesəseri/
    adj. 必需的，必要的；必然的

52. **necessitate** /nəˈsesɪteɪt/
    vt. 使成为必需

53. **necessity** /nəˈsesəti/
    n. 必要；必需品；不可避免的情况

54. **negative** /ˈneɡətɪv/
    adj. 有害的；消极的；否定的
    adj. 否定的，阴性的
    n. 否定词；否定；底片
    vt. 否定，拒绝

55. **negotiate** /nɪˈɡəʊʃieɪt/
    vi. 谈判，洽谈
    vt. 商定，达成(协议)；顺利通过

56. **outer** /ˈaʊtə(r)/
    adj. 在外的，外面的；远离中心的

57. **outlet** /ˈaʊtlet/
    n. 出口，发泄途径；经销店；折扣店
    n. 媒体公司；插座，排放口

58. **outline** /ˈaʊtlaɪn/
    n. 概要，梗概，轮廓，外形
    vt. 概述，概括；勾勒

59. **outlook** /ˈaʊtlʊk/
    n. 世界观，观点；前景；景色

60. **output** /ˈaʊtpʊt/
    n. 产量；输出量；输出功率
    vt. 输出

61. **poverty** /ˈpɒvəti/
    n. 贫穷，贫困；缺乏，短缺

62. **power** /ˈpaʊə(r)/
    n. 政权；影响力；能力；权力
    n. 动力；(力量或能量)；电力供应
    vt. 驱动(机器或车辆)
    vi. vt. (使)迅猛移动

63. **practical** /ˈpræktɪkl/
    adj. (实际的)切实可行的；务实的
    adj. (东西)实用的
    n. 实习课，实践课

64. **practice** /ˈpræktɪs/
    n. 练习，训练；实践；惯例，常规
    vi. 练习，训练
    vt. 践行，信奉；从事(医律等职业)

65. **practitioner** /prækˈtɪʃənə(r)/
    n. 从业人员；实践者

66. **preach** /priːtʃ/
    vi. 讲道，布道，宣传，鼓吹
    vt. 宣讲，布道；宣传，鼓吹

67. **precede** /prɪˈsiːd/
    vt. vi. 先于…(发生或存在)
    vt. 走在…之前

68. **precaution** /prɪˈkɔːʃn/
    n. 预防措施，防备

69. **precedent** /ˈpresɪdənt/
    n. 可援引的例子，先例，惯例

70. **preceding** /prɪˈsiːdɪŋ/
    adj. 前面的，在先的

71. **precious** /ˈpreʃəs/
    adj. 珍贵的，珍稀的；被珍惜的
    adv. (强调)太少，非常

72. **precise** /prɪˈsaɪs/
    adj. 精确的，确切的；一丝不苟的

73. **precision** /prɪˈsɪʒn/
    n. 精确，精密
    adj. 精确的，精密的

74. **stress** /stres/
    n. 压力；重音；强调
    vt. 强调，重读
    vt. (使)焦虑不安

75. **stretch** /stretʃ/
    vt. vi. 拉长，撑大；伸展，伸出
    vt. (织物)有弹性；体育训练，延续
    vt. 消耗，消耗；使竭尽所能，滥用
    n. 片段；一段时间；伸展；弹性

`,vr=`# 2027考研英语红宝书
## 必考词Unit17 61词

1.  **remote** /rɪˈməʊt/
    adj. 偏远的，遥远的，久远的
    adj. 微乎其微的；远程的；冷淡的
    n. 遥控器

2.  **remove** /rɪˈmuːv/
    vt. 移走；去除；脱掉；免除(职位)
    n. 距离，差距

3.  **removal** /rɪˈmuːvl/
    n. 移走，拿走；消除；免职；搬迁

4.  **remain** /rɪˈmeɪn/
    v. link. 保持，仍是
    vi. 余下；尚待…；留下，逗留

5.  **remainder** /rɪˈmeɪndə(r)/
    n. 剩余部分，剩余物；余数

6.  **remains** /rɪˈmeɪnz/
    n. 残余，剩余物，遗迹；遗体

7.  **remedy** /ˈremədi/
    n. 解决方法；药品，疗法
    vt. 纠正，补救

8.  **remember** /rɪˈmembə(r)/
    vt. vi. 记得，想起
    vt. 记住(去做某事)；纪念

9.  **remind** /rɪˈmaɪnd/
    vt. 提醒；使想起

10. **render** /ˈrendə(r)/
    vt. 使变得；给予，提供；表达；翻译

11. **contemporary** /kənˈtemprəri/
    adj. 当代的，现代的；同时代的
    n. 同时期的人，同时代的人

12. **contempt** /kənˈtempt/
    n. 鄙视，蔑视；藐视法庭

13. **content** /ˈkɒntent/
    n. 内容；目录；所含之物；含量
    adj. 满足的，满意的；愿意的
    vt. 使满意，使满足

14. **contend** /kənˈtend/
    vt. 声称，主张
    vi. 竞争，争夺；处理，对付

15. **contest** /ˈkɒntest/
    n. 比赛，竞赛；争夺，竞争
    vt. 争辩，提出异议；争取赢得

16. **context** /ˈkɒntekst/
    n. 背景，环境；上下文，语境

17. **contract** /ˈkɒntrækt/
    n. 合同，合约，契约
    vi. vt. (使)缩小，收缩；签合同
    vt. 患上(疾病)

18. **contradict** /ˌkɒntrəˈdɪkt/
    vt. 反驳，否认；相矛盾

19. **contrary** /ˈkɒntrəri/
    adj. 相对立的，相反的

20. **contrast** /ˈkɒntrɑːst/
    n. 差异，差别；截然不同的事物
    vt. 对照，对比
    vi. 截然不同，有明显差异

21. **diverse** /daɪˈvɜːs/
    adj. 多样的，形形色色的

22. **diversion** /daɪˈvɜːʃn/
    n. 转向，转移；令人分心的事物
    n. 消遣，娱乐

23. **divert** /daɪˈvɜːt/
    vt. 使转向；使分心；改变用途

24. **divide** /dɪˈvaɪd/
    vi. vt. (使)分开，分成；除以，除
    vt. 分配；使分离；使产生分歧
    vi. (道路)分岔
    n. 不同，分歧；分水岭

25. **dividend** /ˈdɪvɪdend/
    n. 红利，股息；被除数

26. **division** /dɪˈvɪʒn/
    n. 分开，分配；分歧；除法；部门

27. **document** /ˈdɒkjumənt/
    n. 文件，文档，文献
    vt. 记录，记载；用文献证明

28. **documentary** /ˌdɒkjuˈmentri/
    n. 纪录片，纪实节目
    adj. 记录的，纪实的；文献的

29. **execute** /ˈeksɪkjuːt/
    vt. 将…处死；执行；创作；使生效

30. **executive** /ɪɡˈzekjətɪv/
    n. 经理，主管；行政部门
    adj. 执行的，行政的；高级的

31. **exemplify** /ɪɡˈzemplɪfaɪ/
    vt. 是…的典范；举例说明

32. **exert** /ɪɡˈzɜːt/
    vt. 施加，运用，行使；努力，竭力

33. **exhaust** /ɪɡˈzɔːst/
    vt. 使…精疲力竭；耗尽；详尽探讨
    n. (发动机排出的)废气；排气管

34. **exist** /ɪɡˈzɪst/
    vi. 存在；生存

35. **existence** /ɪɡˈzɪstəns/
    n. 现实存在；生存，生活

36. **exotic** /ɪɡˈzɒtɪk/
    adj. 异国风情的，外来的

37. **moral** /ˈmɒrəl/
    adj. 道德的，出于道义的；有道德的
    n. 品行，道德；寓意

38. **morality** /məˈræləti/
    n. 道德观，道德；道德性，正当性

39. **moreover** /mɔːrˈəʊvə(r)/
    adv. 而且，此外

40. **mostly** /ˈməʊstli/
    adv. 几乎全部地；主要地，通常

41. **prior** /ˈpraɪə(r)/
    adj. 先前的；优先的；在…前面的
    n. 犯罪前科

42. **priority** /praɪˈɒrəti/
    n. 当务之急；优先权；优先通行权

43. **privacy** /ˈprɪvəsi/
    n. 隐私；独处，清静

44. **private** /ˈpraɪvət/
    adj. 私人的；私下的；私营的
    n. 二等兵，列兵；私处

45. **privilege** /ˈprɪvəlɪdʒ/
    n. 特权；荣幸；权势
    vt. 给予…特权；给予…优待

46. **prudent** /ˈpruːdnt/
    adj. 谨慎的，慎重的；精明的

47. **submit** /səbˈmɪt/
    vt. 提交，递呈；主张
    vi. vt. 顺从，屈服；被迫接受

48. **subordinate** /səˈbɔːdɪnət/
    adj. 下级的，从属的；次要的
    n. 下级，下属
    vt. 把…置于次要地位

49. **subscribe** /səbˈskraɪb/
    vi. 订阅，订购；定期赞助；同意
    vi. 申请，报名

50. **subsequent** /ˈsʌbsɪkwənt/
    adj. 随后的，后来的

51. **substance** /ˈsʌbstəns/
    n. 物质；根据；主旨；重要性

52. **substantial** /səbˈstænʃl/
    adj. 大量的，重大的；实质性的
    adj. 大而坚固的

53. **substitute** /ˈsʌbstɪtjuːt/
    n. 代替者，代替物；替补运动员
    vi. vt. 替换，取代

54. **subtle** /ˈsʌtl/
    adj. 细微的，微妙的；含蓄的；巧妙的

55. **associate** /əˈsəʊsieɪt/
    vt. 联想，联系
    vi. 与…为伍；混在一起
    adj. (等级或头衔)准的，副的

56. **association** /əˌsəʊsiˈeɪʃn/
    n. 协会，社团；联系，关联；联想

57. **amend** /əˈmend/
    vt. 修订(法律、文件等)

58. **among** /əˈmʌŋ/
    prep. 在…中；在一群人或物之中

59. **amount** /əˈmaʊnt/
    n. 数量，金额
    vi. 共计；等同于；发展成

60. **ample** /ˈæmpl/
    adj. 大量的，足够的；丰满的

61. **amuse** /əˈmjuːz/
    vt. 逗笑，逗乐；给…提供娱乐

`,yr=`# 2027考研英语红宝书
## 必考词Unit18 71词

1.  **stick** /stɪk/
    vt. vi. 刺入，插入；粘住
    vt. 随手放置
    vi. 卡住；被接受
    n. 枝条，条状物，棍

2.  **stimulate** /ˈstɪmjuleɪt/
    vt. 刺激；激发，激励；使活跃

3.  **stir** /stɜː(r)/
    vt. vi. 搅动，搅拌；(使)微动
    vt. 引起，造成，激起
    vi. (情绪等)开始出现
    n. 激动，愤怒；搅动，搅拌

4.  **stipulate** /ˈstɪpjuleɪt/
    vt. 规定，约定，明确要求

5.  **infer** /ɪnˈfɜː(r)/
    vt. 推断，推论；暗示

6.  **inference** /ˈɪnfərəns/
    n. 推论，推断的结果；推理，推断

7.  **inferior** /ɪnˈfɪəriə(r)/
    adj. 较差的，较次的；级别低的
    n. 下级，下属

8.  **influence** /ˈɪnfluəns/
    n. 影响(力)；有影响的人(或事物)
    vt. 影响，对…起作用

9.  **influential** /ˌɪnfluˈenʃl/
    adj. 有影响力的，有权势的
    n. 有影响力的人

10. **inform** /ɪnˈfɔːm/
    vt. 通知，告知；了解；影响

11. **information** /ˌɪnfəˈmeɪʃn/
    n. 信息，情报；电话号码查询台

12. **approach** /əˈprəʊtʃ/
    vi. vt. 接近，靠近
    vt. 接洽，要求；处理，对付
    n. 方法，态度；接近，靠近；路径

13. **appropriate** /əˈprəʊpriət/
    adj. 适当的，恰当的
    vt. 盗用，挪用；拨出(款项)

14. **approval** /əˈpruːvl/
    n. 赞成，同意；批准，许可

15. **approve** /əˈpruːv/
    vi. 同意，赞成，赞许
    vt. 批准，通过；认证

16. **apt** /æpt/
    adj. 有…倾向的；恰当的；聪明的

17. **conform** /kənˈfɔːm/
    vi. 遵守；顺应大流；相一致

18. **confront** /kənˈfrʌnt/
    vt. 直面，正视；使面对；对峙；对质

19. **confuse** /kənˈfjuːz/
    vt. 使困惑；将…混淆；使复杂化

20. **confusion** /kənˈfjuːʒn/
    n. 困惑；混淆；窘迫；混乱的局面

21. **congress** /ˈkɒŋɡres/
    n. 代表大会；国会

22. **connect** /kəˈnekt/
    vt. vi. (使)连接，(使)联结
    vt. 把…联系起来；为…接通电话
    vi. 衔接；与某人建立关系；击中

23. **connection** /kəˈnekʃn/
    n. 联系，关联；联结，连接；人脉

24. **conscious** /ˈkɒnʃəs/
    adj. 意识到的；清醒的；有意的
    adj. 注重…的，有…意识的

25. **continual** /kənˈtɪnjuəl/
    adj. 不停的，无间断的；频繁的

26. **continue** /kənˈtɪnjuː/
    vi. vt. 继续

27. **continuous** /kənˈtɪnjuəs/
    adj. 持续的，连续的；进行式的

28. **dismiss** /dɪsˈmɪs/
    vt. 不予考虑；解雇，开除；消除
    vt. 解散，让(某人)离开；驳回

29. **disorder** /dɪsˈɔːdə(r)/
    n. 失调，紊乱，疾病；混乱；动乱

30. **disperse** /dɪˈspɜːs/
    vi. vt. (使)扩散，(使)散开

31. **displace** /dɪsˈpleɪs/
    vt. 取代；迫使…离开家园；移走

32. **display** /dɪˈspleɪ/
    vt. 陈列，展示；显示，表现
    n. 陈列，表演；显示，表现，显示器
    vi. (为求偶而)炫耀

33. **distribute** /dɪˈstrɪbjuːt/
    vt. 分发，分配；分销；使分布

34. **distort** /dɪˈstɔːt/
    vt. 使变形，使扭曲；歪曲，曲解

35. **distract** /dɪˈstrækt/
    vt. 分散(注意力)，使分心

36. **evolution** /ˌiːvəˈluːʃn/
    n. 进化；演变，发展

37. **evolve** /iˈvɒlv/
    vi. vt. 进化；逐步发展

38. **exaggerate** /ɪɡˈzædʒəreɪt/
    vi. vt. 夸张，夸大

39. **examine** /ɪɡˈzæmɪn/
    vt. 仔细研究；仔细检查；测验

40. **mock** /mɒk/
    vt. vi. 嘲笑，(通过模仿)取笑
    vt. 不尊重，轻慢
    adj. 假装的，模拟的
    n. (英国)模拟考试

41. **mode** /məʊd/
    n. 方式，风格，模式，状态

42. **model** /ˈmɒdl/
    n. 模型；模特儿；样式，范例
    vi. 做模特儿
    vt. 将…做成模型；模仿

43. **moderate** /ˈmɒdərət/
    adj. 中等的；温和的；有节制的
    vt. vi. 缓和，使适中，调节，主持
    n. 持温和观点者

44. **modern** /ˈmɒdn/
    adj. 现代的，新式的

45. **modernization** /ˌmɒdənəˈzeɪʃn/
    n. 现代化

46. **modest** /ˈmɒdɪst/
    adj. 谦虚的；不太大的；端庄的

47. **modify** /ˈmɒdɪfaɪ/
    vt. 修改，改进，调整；(语法)修饰

48. **predecessor** /ˈpriːdisesə(r)/
    n. 前任，前辈；…的前身

49. **predict** /prɪˈdɪkt/
    vt. 预言，预测，预告

50. **preface** /ˈprefəs/
    n. (书的)序言，前言，绪论
    vt. 以…为开端；以…作为开场白

51. **preferable** /ˈprefrəbl/
    adj. 更好的，更可取的，更合适的

52. **preference** /ˈprefrəns/
    n. 偏好，优惠，优待

53. **prejudice** /ˈpredʒudɪs/
    n. 偏见，成见
    vt. 使有偏见；损害，危害

54. **preliminary** /prɪˈlɪmɪnəri/
    adj. 初步的，预备的，开始的
    n. 初步行动，准备工作

55. **premier** /ˈpremiə(r)/
    adj. 首要的，最好的
    n. 总理，首相

56. **premise** /ˈpremɪs/
    n. 前提；房屋及土地，经营场所

57. **premium** /ˈpriːmiəm/
    n. 保险费；额外费用
    adj. 优质的，高端的

58. **preparation** /ˌprepəˈreɪʃn/
    n. 准备，准备工作；制剂

59. **reflect** /rɪˈflekt/
    vt. 映出(影像)；反射；反映，显示
    vi. vt. 认真思考

60. **reflection** /rɪˈflekʃn/
    n. 映像，反射；反映；深思

61. **reform** /rɪˈfɔːm/
    vt. 变革，改革，革新
    vi. vt. (使)改过自新

62. **reject** /rɪˈdʒekt/
    vt. 拒绝接受；不录用；抛弃；排斥
    n. 次品，不合格者

63. **rejoice** /rɪˈdʒɔɪs/
    vi. vt. 非常高兴，深感欣喜

64. **relate** /rɪˈleɪt/
    vt. vi. 联系，(使)有关联
    vt. 叙述，讲述；理解，有共鸣

65. **relation** /rɪˈleɪʃn/
    n. 关系，交往；联系；亲戚

66. **relationship** /rɪˈleɪʃn/
    n. 关系，联系；恋爱关系

67. **relative** /ˈrelətɪv/
    n. 亲戚，亲属
    adj. 相对的；与…相比；关于…的

68. **relativity** /ˌreləˈtɪvəti/
    n. 相对论；相对性

69. **relevant** /ˈreləvənt/
    adj. 有关的，切题的；有价值的

70. **overlook** /ˌəʊvəˈlʊk/
    vt. 忽略，忽视；不计较；俯视

71. **overseas** /ˌəʊvəˈsiːz/
    adv. 在国外，在海外
    adj. 国外的，海外的

`,br=`# 2027考研英语红宝书
## 必考词Unit2 65词

1.  **mediate** /ˈmiːdieɪt/
    vi. 调停，调解，斡旋
    vt. 找到解决方法；调节，影响

2.  **meditation** /ˌmedɪˈteɪʃn/
    n. 冥想，默想；沉思，感想

3.  **medium** /ˈmiːdiəm/
    adj. 中等的，中号的
    n. 传播媒介；手段，工具；培养基，媒质

4.  **media** /ˈmiːdiə/
    n. 媒体，传播媒介

5.  **elaborate** /ɪˈlæbərət/
    adj. 复杂的，详尽的，精心制作的
    vi. vt. 详尽说明，详细阐述

6.  **elegant** /ˈelɪɡənt/
    adj. 优雅的，雅致的；简洁巧妙的

7.  **element** /ˈelɪmənt/
    n. 要素，基本部分；元素；少量

8.  **elementary** /ˌelɪˈmentri/
    adj. 基本的；初级的；小学的

9.  **eliminate** /ɪˈlɪmɪneɪt/
    vt. 消除，清除；淘汰；消灭，干掉

10. **abolish** /əˈbɒlɪʃ/
    vt. 废止，取消

11. **absence** /ˈæbsəns/
    n. 缺席，缺勤；不存在，缺乏

12. **absent** /ˈæbsənt/
    adj. 缺席的；缺少的；心不在焉的
    vt. 缺席，不在场
    prep. 没有

13. **abroad** /əˈbrɔːd/
    adv. 在国外，去国外；广为流传地

14. **absolute** /ˈæbsəluːt/
    adj. 绝对的；无疑的；不受约束的
    n. 绝对真理

15. **absorb** /əbˈzɔːb/
    vt. 吸收，理解，掌握；吞并；缓冲
    vt. 吸引(注意力)；承受，承担

16. **abstract** /ˈæbstrækt/
    adj. 抽象的；抽象派的
    n. 摘要，梗概；抽象派艺术作品
    vt. 提取，抽取；写…的摘要

17. **ban** /bæn/
    n. 禁止，禁令
    vt. 禁止，取缔；禁止(某人)做某事

18. **bar** /bɑː(r)/
    n. 酒吧；吧台；小馆；棒；律师界
    vt. 闩上(门或窗)；阻挡，禁止
    prep. 除…之外

19. **bare** /beə(r)/
    adj. 赤裸的；荒芜的；基本的；空的
    vt. 使暴露

20. **barely** /ˈbeəli/
    adv. 勉强才能；几乎不；仅仅；刚刚

21. **bargain** /ˈbɑːɡən/
    n. 便宜货；协议，协定
    vi. 讨价还价，洽谈，谈条件

22. **capable** /ˈkeɪpəbl/
    adj. 能做…的；能力强的，能干的

23. **capacity** /kəˈpæsəti/
    n. 容量；能力；职责；生产量

24. **capital** /ˈkæpɪtl/
    n. 首都；资本，资金；大写字母
    adj. 死刑的；大写的

25. **captive** /ˈkæptɪv/
    adj. 被关押的；非自愿的
    n. 俘虏，囚徒

26. **capture** /ˈkæptʃə(r)/
    vt. 抓住，俘虏，捕捉；攻占，夺取
    n. 捕获，攻占，夺取

27. **career** /kəˈrɪə(r)/
    n. 职业，事业；职业生涯
    vi. (失控地)猛冲，疾驶

28. **careful** /ˈkeəfl/
    adj. 小心谨慎的；细心的，周密的

29. **case** /keɪs/
    n. 情况，事例；案件；论据；箱，盒

30. **cast** /kɑːst/
    vt. 扔，抛；向…投以；投射；选角
    vt. 投(票)；浇铸
    vi. vt. 投(钓线)，抛(钓钩)
    n. 全体演员；铸造品；石膏绷带

31. **casual** /ˈkæʒuəl/
    adj. 随意的；非正式的；临时的
    n. 便装，便鞋；临时工

32. **casualty** /ˈkæʒuəlti/
    n. 伤亡人员；受害者；急诊室

33. **catch** /kætʃ/
    vt. 接住，抓住；逮捕；赶上；得病
    vi. 被绊住；烧着
    n. 接(球等)；总捕获量；扣件

34. **category** /ˈkætəɡəri/
    n. 种类，类别

35. **cater** /ˈkeɪtə(r)/
    vi. 提供饮食，承办酒席
    vi. 满足，迎合

36. **cause** /kɔːz/
    n. 原因，理由；事业；诉讼案
    vt. 导致，使发生

37. **caution** /ˈkɔːʃn/
    n. 小心，谨慎；警告，告诫
    vi. vt. 警告，告诫，提醒

38. **cautious** /ˈkɔːʃəs/
    adj. 谨慎的，慎重的，小心的

39. **cease** /siːs/
    vi. vt. (使)停止

40. **celebrate** /ˈselɪbreɪt/
    vi. vt. 祝贺，庆祝
    vt. 主持(宗教仪式)；颂扬，赞美

41. **celebrity** /səˈlebrəti/
    n. 名人，明星；名声，名气

42. **ceremony** /ˈserəməni/
    n. 仪式，典礼；礼数，客套

43. **certain** /ˈsɜːtn/
    adj. 必然的；确信的；某个，一点
    pron. 某些

44. **certainty** /ˈsɜːtnti/
    n. 确实，确定性；必然的事

45. **certificate** /səˈtɪfɪkət/
    n. 证明，证书；结业证书

46. **certify** /ˈsɜːtɪfaɪ/
    vt. 证明，证实；授予专业合格证书

47. **decline** /dɪˈklaɪn/
    vi. 下降，减少；衰退，恶化
    vi. vt. 婉拒，谢绝

48. **decrease** /dɪˈkriːs/
    vi. vt. 减少，降低
    n. 减少，降低

49. **decree** /dɪˈkriː/
    n. 法令，政令；判决，裁定
    vt. vi. 判决；颁布

50. **deem** /diːm/
    vt. 认为，视为，相信

51. **dedicate** /ˈdedɪkeɪt/
    vt. 献身，致力于；将(书等)献给

52. **deduce** /dɪˈdjuːs/
    vt. 推断，推理，演绎

53. **deduct** /dɪˈdʌkt/
    vt. (从总量中)扣除，减去

54. **fashion** /ˈfæʃn/
    n. 时尚，流行款式；时装业；方式
    vt. 制作，塑造

55. **fashionable** /ˈfæʃnəbl/
    adj. 流行的，时尚的；有钱人光顾的

56. **favour** /ˈfeɪvə(r)/
    n. 帮助，恩惠；赞同，支持；偏爱
    vt. 更喜欢；偏爱；有利于

57. **favourable** /ˈfeɪvərəbl/
    adj. 赞成的；讨人喜欢的；有利的

58. **favourite** /ˈfeɪvərɪt/
    adj. 最喜欢的，最喜爱的
    n. 最喜欢的人或物；受宠的人

59. **sit** /sɪt/
    vi. 坐，坐着；被放在；担任
    vt. 使坐，使就座
    vi. 参加考试

60. **site** /saɪt/
    n. 场所，地点；工地；网站
    vt. 使坐落于，为…选址

61. **situate** /ˈsɪtʃueɪt/
    vt. 使坐落于，使位于；将…置于

62. **situation** /ˌsɪtʃuˈeɪʃn/
    n. 情况，形势；位置，环境；工作

63. **skeleton** /ˈskelɪtn/
    n. 骨骼；(建筑等的)框架；梗概

64. **skeptical** /ˈskeptɪkl/
    adj. 表示怀疑的，持怀疑态度的
    vi. 好说，好说；详细阐述

65. **sketch** /sketʃ/
    n. 素描，草图；简报，概述；小品
    vt. vi. 画素描，画速写
    vt. 概述，简述
`,xr=`# 2027考研英语红宝书
## 必考词Unit3 83词

1.  **embrace** /ɪmˈbreɪs/
    vt. 拥抱；接受；信奉；包含
    vi. 欣然接受，包括

2.  **embed** /ɪmˈbed/
    vt. 使…嵌入；派遣(战地记者)

3.  **embody** /ɪmˈbɒdi/
    vt. 使具体化，体现；收录，包括

4.  **embryo** /ˈembriəʊ/
    n. 胚胎

5.  **elicit** /iˈlɪsɪt/
    vt. 引出，诱出，套出

6.  **elite** /eɪˈliːt/
    n. 精英，上层人士
    adj. 精英的，精锐的

7.  **elsewhere** /ˌelsˈweə(r)/
    adv. 在别处，去别处

8.  **thirst** /θɜːst/
    n. 口渴；渴求
    vi. 渴求

9.  **thorough** /ˈθʌrə/
    adj. 全面的，彻底的；(人)仔细的

10. **though** /ðəʊ/
    conj. 尽管，虽然
    conj. adv. 可是，然而

11. **thought** /θɔːt/
    n. 想法，主意；心思；思考；关心

12. **thoughtful** /ˈθɔːtfl/
    adj. 沉思的；体贴的；深思熟虑的

13. **threat** /θret/
    n. 威胁；坏事发生的可能

14. **threaten** /ˈθretn/
    vt. 威胁；危害到
    vi. vt. (坏事)可能发生，可能引发

15. **update** /ˌʌpˈdeɪt/
    vt. 更新，升级；提供最新消息
    n. 更新，升级；最新消息

16. **upgrade** /ˌʌpˈɡreɪd/
    vt. 升级，提拔
    n. 改善，升级

17. **uphold** /ʌpˈhəʊld/
    vt. 支持，维护；维持(原判)

18. **upset** /ʌpˈset/
    adj. 难过的，心烦的；肠胃不适的
    vt. 使烦恼；打乱；使(肠胃)不适
    n. 意外结果，冷门；肠胃病，苦恼

19. **up-to-date** /ˌʌp tə ˈdeɪt/
    adj. 新式的，掌握最新信息的

20. **ventilate** /ˈventɪleɪt/
    vt. 使…通风；公开表达，公开讨论

21. **venture** /ˈventʃə(r)/
    n. (有风险的)投资活动，企业
    vi. 冒险去某地
    vt. 试探地说(或做)

22. **widespread** /ˈwaɪdspred/
    adj. 普遍的，广泛的

23. **win** /wɪn/
    vi. 赢，获胜
    vt. 赢得，获得
    n. 赢，胜利

24. **wit** /wɪt/
    n. 机智风趣(的人)；头脑；明智

25. **withdraw** /wɪðˈdrɔː/
    vi. (使)撤回，撤离；(使)退出
    vt. 收回，撤销；取(款)；停止供应
    vi. 不与人交往

26. **witness** /ˈwɪtnəs/
    n. 目击者；(出庭的)证人；见证人
    vi. 目击，目睹；见证；签署

27. **inaugurate** /ɪˈnɔːɡjəreɪt/
    vt. 使正式就任；为…举行落成仪式
    vt. 开创

28. **incentive** /ɪnˈsentɪv/
    n. 激励，动机，刺激

29. **incidence** /ˈɪnsɪdəns/
    n. 发生(率)

30. **incident** /ˈɪnsɪdənt/
    n. 事件；(两国间的)冲突

31. **incidentally** /ˌɪnsɪˈdentli/
    adv. 顺便提一下；偶然地，附带地

32. **incline** /ɪnˈklaɪn/
    vi. vt. (使)倾向；(使)倾斜
    vt. 点(头)
    n. 斜坡，斜面

33. **academic** /ˌækəˈdemɪk/
    adj. 学术的；纯理论的
    n. 学者，大学教师

34. **academy** /əˈkædəmi/
    n. 学院；私立学校；学会，研究院

35. **accelerate** /əkˈseləreɪt/
    vi. vt. (使)加快
    vi. (车辆等)加速

36. **accept** /əkˈsept/
    vi. 接受，同意
    vt. 认可，承担，容忍，接纳

37. **acceptance** /əkˈseptəns/
    n. 接受；认可，赞同；接纳

38. **access** /ˈækses/
    n. 进入(权)，通道；使用权
    vt. 访问，存取；进入

39. **accessory** /əkˈsesəri/
    n. 附件，附属品；配饰；帮凶

40. **begin** /bɪˈɡɪn/
    vi. vt. 开始

41. **beginning** /bɪˈɡɪnɪŋ/
    n. 开头，开始部分；起源，初期

42. **behalf** /bɪˈhɑːf/
    n. 代表(某人)；为了…的利益

43. **behave** /bɪˈheɪv/
    vi. 表现；产生自然反应，发生作用
    vi. 表现得体，有礼貌

44. **behaviour** /bɪˈheɪvjə(r)/
    n. 行为，举止；表现方式

45. **belief** /bɪˈliːf/
    n. 信念；信任；信仰

46. **believe** /bɪˈliːv/
    vi. 相信
    vt. 认为
    vi. 有宗教信仰

47. **belong** /bɪˈlɒŋ/
    vi. 属于；应在(某处)；能适应

48. **beneficial** /ˌbenɪˈfɪʃl/
    adj. 有益的，有利的

49. **benefit** /ˈbenɪfɪt/
    n. 好处；救济金；福利；慈善活动
    vt. vi. 使受益，得益于

50. **benevolent** /bəˈnevələnt/
    adj. 仁慈的，慈爱的

51. **benign** /bɪˈnaɪn/
    adj. 和善的；良性的；无害的；宜人的

52. **challenge** /ˈtʃælɪndʒ/
    n. 挑战；艰巨任务；质疑
    vt. 质疑；向…发出挑战

53. **chance** /tʃɑːns/
    n. 机会；可能性；风险；偶然
    vt. 冒险，拿…冒风险
    vi. 偶然发生，碰巧

54. **change** /tʃeɪndʒ/
    vi. vt. (使)变化，换衣服；换乘
    vt. 使不同；转换；替代；零钱
    n. 改变，变化；替代；零钱

55. **channel** /ˈtʃænl/
    n. 频道；途径；渠道；海峡；水道
    vt. 为…输送(资金等)；输送，传送

56. **character** /ˈkærəktə(r)/
    n. 性格；角色；特点；字符；名誉

57. **characterise** /ˈkærəktəraɪz/
    vt. 是…的特征；描绘，描述；刻画

58. **characteristic** /ˌkærəktəˈrɪstɪk/
    n. 特色，特点
    adj. 典型的，独特的，特有的

59. **defend** /dɪˈfend/
    vi. vt. 防御，保卫；防守；为被告辩护
    vt. 为…辩护；卫冕

60. **define** /dɪˈfaɪn/
    vt. 给…下定义；阐明；限定

61. **definite** /ˈdefɪnət/
    adj. 确定的；清楚的；肯定的
    n. 确定的事(或人)

62. **definition** /ˌdefɪˈnɪʃn/
    n. 定义，释义；清晰，分明

63. **defy** /dɪˈfaɪ/
    vt. 违抗，违反；难以(描述、解释等)

64. **degree** /dɪˈɡriː/
    n. 度；程度；学位

65. **delay** /dɪˈleɪ/
    n. 延误；耽搁的时间；延期，延迟
    vi. vt. 推迟，使延期
    vt. 使延误，使耽搁

66. **deliberate** /dɪˈlɪbərət/
    adj. 故意的；(动作)从容的
    vi. vt. 慎重考虑

67. **delicate** /ˈdelɪkət/
    adj. 微妙的；易受损的；精美的
    adj. (仪器等)精密的；柔弱的

68. **deliver** /dɪˈlɪvə(r)/
    vt. 递送，传送；履行；兑现
    vt. 发表(讲话)；交与；接生；分娩

69. **delivery** /dɪˈlɪvəri/
    n. 递送(之物)；分娩；发言方式

70. **fiction** /ˈfɪkʃn/
    n. 小说；虚构之事，幻想

71. **field** /fiːld/
    n. 田，地；领域；运动场；实地
    vt. 使参加竞选；处理，应付

72. **fierce** /fɪəs/
    adj. 凶猛的；激烈的；(天气)猛烈的

73. **fight** /faɪt/
    vi. vt. 战斗；打架；斗争；努力争
    vi. 争取；奋力抵抗
    n. 打架；战斗；竞赛；争吵

74. **figure** /ˈfɪɡə(r)/
    n. 数字；算术；人物；人影；身材
    n. 塑像；(书中的)图表
    vt. 认为，以为；计算
    vi. 弄懂，弄清楚

75. **finance** /ˈfaɪnæns/
    n. 财政，金融；资金；财务状况
    vt. 给…提供资金，资助

76. **financial** /faɪˈnænʃl/
    adj. 财政的，金融的；财务的

77. **finding** /ˈfaɪndɪŋ/
    n. 研究结果；发现；判决

78. **finite** /ˈfaɪnaɪt/
    adj. 有限的，有限的

79. **firm** /fɜːm/
    n. 公司；商行；事务所
    adj. 坚硬的；牢固的；坚定的
    vi. 使强壮，使变坚固
    vi. 回升，稳步上涨

80. **first** /fɜːst/
    det. ord. 第一；最重要的，首要
    adv. 首先，第一；首次，第一次
    n. 第一个人(或事)；空前的成就

81. **fit** /fɪt/
    vi. vt. 适合，合身；容纳；符合
    vt. 安装；使适应；使(装备)
    adj. 健康的；健康的；适合的

82. **global** /ˈɡləʊbl/
    adj. 全球的；全面的，整体的

83. **globe** /ɡləʊb/
    n. 地球；世界；地球仪；球状物
`,Sr=`# 2027考研英语红宝书
## 必考词Unit4 68词

1.  **abandon** /əˈbændən/
    vt. 放弃，抛弃；沉湎于
    放任，放纵

2.  **abide** /əˈbaɪd/
    vi. 遵守，遵从；逗留，居住
    vt. 忍受，忍耐

3.  **ability** /əˈbɪləti/
    n. 能力；才能，本领

4.  **able** /ˈeɪbl/
    adj. 能做…的；有才干的

5.  **abnormal** /æbˈnɔːml/
    adj. 不正常的，反常的

6.  **background** /ˈbækɡraʊnd/
    n. 背景；后景；背景音；底色

7.  **balance** /ˈbæləns/
    n. 平衡，均衡；余额；债务余款
    vi. vt. (使)保持平衡；相抵，抵消
    vt. 使均衡；权衡；结平(账目)

8.  **base** /beɪs/
    n. 底部；基础，根据；基地；
    垒；碱
    vt. 以…为基地；以…为基础
    adj. 卑鄙的，无耻的

9.  **basement** /ˈbeɪsmənt/
    n. 地下室

10. **basic** /ˈbeɪsɪk/
    adj. 基本的，最简单的，最重要的

11. **basis** /ˈbeɪsɪs/
    n. 基础，要素；方式；根据，依
    据

12. **calculate** /ˈkælkjuleɪt/
    vt. 计算，核算；预测，推测

13. **call** /kɔːl/
    vt. 把…称为，认为…是；打电话
    叫
    vi. vt. 大声呼叫；召唤；给…打电
    话
    n. 通话；叫喊；短暂拜访；呼吁

14. **calm** /kɑːm/
    adj. 平静的；风平浪静的；无风的
    vt. 使平静，使镇静
    n. 平静，宁静；冷静

15. **campaign** /kæmˈpeɪn/
    n. (社会、政治)运动，活动；战
    役
    vt. 发起运动，开展活动

16. **candidate** /ˈkændɪdət/
    n. 候选人，申请人；考生

17. **data** /ˈdeɪtə/
    n. 资料，数据

18. **database** /ˈdeɪtəbeɪs/
    n. 数据库

19. **date** /deɪt/
    n. 日期；时候；约会(对象)；海
    枣
    vt. 写上日期；确定年代
    vt. vi. 与(某人)谈恋爱

20. **dazzle** /ˈdæzl/
    vt. vi. (强光)使目眩，使眼花
    vt. 使倾倒，使惊叹
    n. 令人赞叹的东西(或品质)

21. **deal** /diːl/
    n. 大量，很多；交易，协议；待
    遇
    vi. 处理，对付；与…做生意，涉
    及
    vi. vt. 发牌；非法买卖毒品，贩毒

22. **dealer** /ˈdiːlə(r)/
    n. 商人；毒品贩子；发牌人

23. **debate** /dɪˈbeɪt/
    n. 辩论，讨论，争论
    vi. vt. 辩论，讨论，争论；考虑，
    盘算

24. **decade** /ˈdekeɪd/
    n. 十年

25. **decide** /dɪˈsaɪd/
    vi. vt. 决定；裁定
    vt. 使…下定决心

26. **decision** /dɪˈsɪʒn/
    n. 决定；决断力；作出决定

27. **decisive** /dɪˈsaɪsɪv/
    adj. 决定性的，关键的；果断的

28. **decorate** /ˈdekəreɪt/
    vt. 装饰；装修；授予…勋章

29. **economic** /ˌiːkəˈnɒmɪk/
    adj. 经济的；有利可图的

30. **economical** /ˌiːkəˈnɒmɪkl/
    adj. 经济的，省钱的，节约的

31. **economics** /ˌiːkəˈnɒmɪks/
    n. 经济学；经济状况

32. **economy** /ɪˈkɒnəmi/
    n. 经济；经济体；节约

33. **educate** /ˈedʒukeɪt/
    vt. 教育；教导，培养

34. **education** /ˌedʒuˈkeɪʃn/
    n. 教育；培训；教育学

35. **effect** /ɪˈfekt/
    n. 影响，结果；特效，效果；财
    产
    vt. 引起，使发生

36. **effective** /ɪˈfektɪv/
    adj. 有效的，生效的；实际的

37. **efficient** /ɪˈfɪʃnt/
    adj. 效率高的

38. **efficiency** /ɪˈfɪʃnsi/
    n. 效率，效能

39. **effort** /ˈefət/
    n. 努力，力气；特别行动

40. **fabric** /ˈfæbrɪk/
    n. 织物，布料；结构，构造

41. **fabricate** /ˈfæbrɪkeɪt/
    vt. 捏造，编造；制造，生产

42. **face** /feɪs/
    n. 脸；面部表情；表面；钟面
    vt. vi. 面对，面向
    vt. 面临；正视；对付

43. **facet** /ˈfæsɪt/
    n. 部分，方面；(宝石的)小平面

44. **factor** /ˈfæktə(r)/
    n. 因素，要素；因子，因数；倍
    数
    vt. 把…因素包括进去

45. **fade** /feɪd/
    vi. vt. (使)褪色，(使)变暗淡
    vi. 逐渐消失

46. **fail** /feɪl/
    vi. vt. 失败；不及格；衰退；倒闭
    vi. 未做；出故障；衰退；倒闭
    vt. 使失望；有负于；不及格

47. **failure** /ˈfeɪljə(r)/
    n. 失败；失败者；未做；故障

48. **fair** /feə(r)/
    adj. 公平的；相当大的；不错的
    adj. 浅色的；晴朗的；美丽的
    n. 展销会；露天游乐场；集市
    adv. 按照规则，公平合理地

49. **fairly** /ˈfeəli/
    adv. 相当地；公正地；简直

50. **fall** /fɔːl/
    vi. 落下；跌倒；下跌；沦陷；发
    生；落下；减少；沦陷；瀑布；秋
    季
    n. 下落；减少；沦陷；瀑布；秋
    季

51. **fan** /fæn/
    n. 粉丝，狂热爱好者；风扇；扇
    子
    vt. 扇(风)；煽起，激起

52. **fancy** /ˈfænsi/
    adj. 花哨的；精致的；奢华的
    vt. 想要，想做；爱慕；自伤；认
    为
    vi. vt. 真没想到，竟然
    n. 想象；想要，爱好

53. **fascinate** /ˈfæsɪneɪt/
    vt. vi. 使着迷，迷住

54. **gain** /ɡeɪn/
    vt. 获得，赢得；增加，到达
    vt. 增加；好处，利润

55. **gamble** /ˈɡæmbl/
    vi. vt. 赌博；冒险；以…为赌注
    n. 冒险；赌博

56. **gap** /ɡæp/
    n. 缝隙；(时间)间隔；差距，漏
    洞

57. **gene** /dʒiːn/
    n. 基因

58. **general** /ˈdʒenrəl/
    adj. 普遍的，总的；通常的；大概
    的
    adj. 总的；首席的，总管的
    n. 将军

59. **generalize** /ˈdʒenrəlaɪz/
    vt. 概括，归纳

60. **habit** /ˈhæbɪt/
    n. 习惯；(对毒品、烟酒的)瘾

61. **habitat** /ˈhæbɪtæt/
    n. 栖息地，生长地

62. **hamper** /ˈhæmpə(r)/
    vt. 妨碍，阻碍
    n. 食品盒；脏衣篓

63. **handicap** /ˈhændikæp/
    n. 生理缺陷，残疾；障碍，阻碍
    vt. 妨碍，阻碍

64. **shield** /ʃiːld/
    n. 盾牌；掩护物；护罩；盾形奖
    vt. 保护，掩护

65. **shift** /ʃɪft/
    vi. vt. 转移，挪动；换(挡)
    vi. (情况等)改变
    vt. 改变(观点、态度等)；推卸(责
    任)
    n. 改变，转变；轮班(职工)

66. **shoulder** /ˈʃəʊldə(r)/
    n. 肩膀；衣肩；山肩；路肩
    vt. 承担；负担；背，扛

67. **show** /ʃəʊ/
    vt. 出示；表明；教，演示；带领
    vi. 显现，露出；露出；展览，上映
    n. 演出；电视节目；展览会；假
    象

68. **shower** /ˈʃaʊə(r)/
    n. 浴室；淋浴器；淋浴；阵雨
    vt. (大量)地给

`,Cr=`# 2027考研英语红宝书
## 必考词Unit5 84词

1.  **glamour** /ˈɡlæmə(r)/
    n. 魅力，吸引力

2.  **generate** /ˈdʒenəreɪt/
    vt. 产生，引起；发电，产生(能量)

3.  **generation** /ˌdʒenəˈreɪʃn/
    n. 一代；产生

4.  **generator** /ˈdʒenəreɪtə(r)/
    n. 发电机；发生器，生成器

5.  **generous** /ˈdʒenərəs/
    adj. 慷慨的；大量的；宽宏大量的

6.  **genius** /ˈdʒiːniəs/
    n. 天才人物；天才，天赋；本领

7.  **gift** /ɡɪft/
    n. 礼物；天赋，才能
    vt. 赠送

8.  **genre** /ˈʒɒ̃rə/
    n. (文学、艺术作品的)类型，体裁

9.  **giant** /ˈdʒaɪənt/
    adj. 巨大的，伟大的
    n. 巨人，巨兽；大公司；伟人

10. **gigantic** /dʒaɪˈɡæntɪk/
    adj. 巨大的，庞大的

11. **give** /ɡɪv/
    vt. 给；提供；支付；举办；使产生
    vi. vt. 赠送；捐赠

12. **happen** /ˈhæpən/
    vi. 发生，出现
    vi. link. 碰巧，恰好

13. **harm** /hɑːm/
    n. 伤害，损害
    vt. 伤害，损害

14. **harmony** /ˈhɑːməni/
    n. 融洽，和睦；和声；和谐，协调

15. **harsh** /hɑːʃ/
    adj. 严厉的；恶劣的；刺耳的

16. **ignorance** /ˈɪɡnərəns/
    n. 无知，愚昧

17. **ignorant** /ˈɪɡnərənt/
    adj. 无知的，愚昧的，不知情的

18. **ignore** /ɪɡˈnɔː(r)/
    vt. 不理，忽视

19. **ill** /ɪl/
    adj. 患病的，不适的；坏的，有害的
    adv. 恶劣地；差劲地
    n. 问题，弊端；疾病

20. **illness** /ˈɪlnəs/
    n. 病，疾病，患病期

21. **illusion** /ɪˈluːʒn/
    n. 错觉，幻想，错误观念；假象

22. **illustrate** /ˈɪləstreɪt/
    vt. 说明，阐明；给…加插图；表明

23. **illustration** /ˌɪləˈstreɪʃn/
    n. 插图，例证；实例，说明，图解

24. **image** /ˈɪmɪdʒ/
    n. 图像；画像；形象；印象

25. **imagine** /ɪˈmædʒɪn/
    vi. 想象，猜想，猜测
    vt. 胡思乱想，误以为

26. **imaginary** /ɪˈmædʒɪnəri/
    adj. 想象中的，虚构的

27. **imagination** /ɪˌmædʒɪˈneɪʃn/
    n. 想象力；想象，幻想；创造力

28. **imaginative** /ɪˈmædʒɪnətɪv/
    adj. 有想象力的，有独创性的

29. **imitate** /ˈɪmɪteɪt/
    vt. (为逗乐)模仿，仿效，模拟

30. **imitation** /ˌɪmɪˈteɪʃn/
    n. 模仿，效仿；仿制品；滑稽模仿

31. **lead** /liːd/
    vi. vt. 带路；领导；通往；处于首位
    vi. 导致，造成(后果)
    vt. 使得出(观点)；过(某种生活)
    n. 铅；领先地位；超前量；范例

32. **leadership** /ˈliːdəʃɪp/
    n. 领导地位；领导才能；领导层

33. **leading** /ˈliːdɪŋ/
    adj. 最重要的，最好的；领先的

34. **legal** /ˈliːɡl/
    adj. 法律的，法律方面的；合法的

35. **legislation** /ˌledʒɪsˈleɪʃn/
    n. 法律，法规；立法

36. **legitimate** /lɪˈdʒɪtɪmət/
    adj. 合法的；正当的；婚生的
    vt. 使合法化，使合理化

37. **leisure** /ˈleʒə(r)/
    n. 闲暇，空闲

38. **level** /ˈlevl/
    n. 水平；级别；水平高度；楼层
    adj. 平的；等高的；地位相同的；平坦的
    vt. 使平坦；摧毁，夷平；瞄准
    vi. vt. 使相等，使平等

39. **lever** /ˈliːvə(r)/
    n. 操纵杆；杠杆，撬棒；施压手段
    vt. 撬起，撬动

40. **levy** /ˈlevi/
    n. 征收额；(尤指)税款
    vt. 征收，征(税)

41. **manage** /ˈmænɪdʒ/
    vi. vt. 经营，管理；成功做到
    vi. 勉强维持生活
    vt. 合理使用(资源)

42. **management** /ˈmænɪdʒmənt/
    n. 管理；管理层

43. **mandate** /ˈmændeɪt/
    n. 授权；授权令；命令；任期
    vt. 强制执行；授权

44. **manifest** /ˈmænɪfest/
    vt. 显现，表明
    adj. 明显的
    n. 载货单；旅客名单

45. **manipulate** /məˈnɪpjuleɪt/
    vt. (暗中)操纵；(熟练地)操作

46. **manner** /ˈmænə(r)/
    n. 方式；态度，举止；礼貌，礼仪

47. **margin** /ˈmɑːdʒɪn/
    n. 页边空白处；差额；利润；余地

48. **marginal** /ˈmɑːdʒɪnl/
    adj. 微不足道的；页边的；边缘的

49. **mass** /mæs/
    n. 团，块；大量；群众；质量
    adj. 大量的，大批的
    vi. vt. 集结，聚集

50. **massive** /ˈmæsɪv/
    adj. 大而重的；巨大的；严重的

51. **massacre** /ˈmæsəkə(r)/
    n. 大屠杀
    vt. 大屠杀

52. **occupation** /ˌɒkjuˈpeɪʃn/
    n. 职业；占领；居住，占用；消遣

53. **occupy** /ˈɒkjupaɪ/
    vt. 占用，占领；使忙于；担任

54. **occur** /əˈkɜː(r)/
    vi. (意外地)发生；存在，出现

55. **occurrence** /əˈkʌrəns/
    n. 发生的事，事件；发生，存在

56. **offend** /əˈfend/
    vt. 冒犯，得罪
    vi. 令人不适
    vi. 违反(法规、原则等)；犯罪

57. **offer** /ˈɒfə(r)/
    vt. 主动提出，自愿给予
    vt. 提供，供应
    n. 提议；出价，报价；特价

58. **offset** /ˈɒfset/
    vt. 抵消，弥补

59. **offspring** /ˈɒfsprɪŋ/
    n. 子女，后代；幼崽，幼苗

60. **paragraph** /ˈpærəɡrɑːf/
    n. 段落，节

61. **paralyse** /ˈpærəlaɪz/
    vt. 使瘫痪；使不能正常运作

62. **parallel** /ˈpærəlel/
    adj. 平行的；相似的；同时发生的
    n. 很相似的人(情况等)；相似之处
    vi. 与…相似；与…同时发生

63. **part** /pɑːt/
    n. 部分；成员；零件；区域；角色
    vi. 离开，分别
    vt. 分离，分开
    adv. 在一定程度上，部分地

64. **partial** /ˈpɑːʃl/
    adj. 部分的；偏袒的，钟爱的

65. **participant** /pɑːˈtɪsɪpənt/
    n. 参与者，参加者

66. **participate** /pɑːˈtɪsɪpeɪt/
    vi. 参与，参加

67. **particle** /ˈpɑːtɪkl/
    n. 微粒，粒子；小品词

68. **particular** /pəˈtɪkjələ(r)/
    adj. 特定的；格外的；挑剔的
    n. 细节，详情

69. **partly** /ˈpɑːtli/
    adv. 部分地，在某种程度上

70. **partner** /ˈpɑːtnə(r)/
    n. 伙伴；配偶；搭档；合伙人
    vt. 做搭档

71. **passion** /ˈpæʃn/
    n. 热情，激情；热恋；热衷的爱好

72. **passive** /ˈpæsɪv/
    adj. 被动的，消极的；被动语态的
    n. 被动语态，被动式

73. **quick** /kwɪk/
    adj. 快的，敏捷的；立竿见影的

74. **quit** /kwɪt/
    vi. vt. 放弃(工作)；停止；退出；
    n. 离开，离开

75. **quest** /kwest/
    n. 探索，寻求，追求
    vi. 探索，寻求

76. **questionnaire** /ˌkwestʃəˈneə(r)/
    n. 调查问卷，调查表

77. **quote** /kwəʊt/
    vt. 引用，引述；报价，估价
    n. 引文，引语；报价，估价；引号

78. **span** /spæn/
    n. 持续时间；范围；跨度；宽度
    vt. 持续，贯穿；包括，涵盖；横跨

79. **spare** /speə(r)/
    adj. 闲置的；备用的；空闲的
    vt. 留出；免去；放过；吝惜
    n. 备用品；备胎；零件，备件

80. **schedule** /ˈʃedjuːl/
    n. 日程表；时刻表；节目表
    vt. 为…安排时间

81. **scheme** /skiːm/
    n. 计划，方案；阴谋，诡计
    vi. vt. 密谋，秘密策划

82. **science** /ˈsaɪəns/
    n. 科学；理科；学科

83. **scientific** /ˌsaɪənˈtɪfɪk/
    adj. 科学的；细致严谨的

84. **scientist** /ˈsaɪəntɪst/
    n. 科学家

`,wr=`# 2027考研英语红宝书
## 必考词Unit6 71词

1.  **patch** /pætʃ/
    n. 小块，斑点；补丁；小块地；眼罩
    vt. 打补丁

2.  **patent** /ˈpeɪtnt/
    n. 专利权
    adj. 专利的；明显的
    vt. 得到…的专利权

3.  **pattern** /ˈpætn/
    n. 模式，方式；图案；典范，样板
    vt. 使形成(某行为模式)

4.  **pay** /peɪ/
    vt. vi. 付费，付酬；受益，划算
    vt. 交纳，偿还
    vi. 付出代价；盈利，创收
    n. 工资，薪水

5.  **payment** /ˈpeɪmənt/
    n. 付款；付款额；报答，报应

6.  **peculiar** /pɪˈkjuːliə(r)/
    adj. 古怪的；特有的

7.  **peer** /pɪə(r)/
    n. 同龄人，同辈
    vi. 端详，费力地看

8.  **per** /pə(r)/
    prep. 每，每一

9.  **perceive** /pəˈsiːv/
    vt. 看待，视为；注意到，察觉

10. **percentage** /pəˈsentɪdʒ/
    n. 百分比，百分率；提成，股息

11. **perfect** /ˈpɜːfɪkt/
    adj. 完美的，完全的
    vt. 使完善，使完美

12. **rail** /reɪl/
    n. 铁路；铁轨；栏杆，扶手
    vi. vt. 怒斥，责骂

13. **railway** /ˈreɪlweɪ/
    n. 铁路，铁路系统

14. **raise** /reɪz/
    vt. 举起；提高；筹募；提及；抚养
    vt. 引起；饲养
    n. 加薪，工资增长

15. **rally** /ˈræli/
    n. 公众集会；拉力赛；止跌回升
    vi. vt. 召集，集合
    vi. 复原，恢复健康；止跌回升

16. **random** /ˈrændəm/
    adj. 随机的；不认识的；出人意料的

17. **range** /reɪndʒ/
    n. 一系列；范围；射程；山脉
    vi. (在一定的范围内)变化；包括
    vt. (按一定顺序)排列
    vi. 徘徊，漫步

18. **rank** /ræŋk/
    n. 级别，地位；军衔；成员，行列
    vt. vi. 把…分等级，属于某等级
    adj. 难闻的；恶臭的；糟糕的

19. **master** /ˈmɑːstə(r)/
    n. 主人；大师；硕士学位；男教师
    vt. 精通，掌握；控制
    adj. 熟练的；最重要的

20. **masterpiece** /ˈmɑːstəpiːs/
    n. 杰作，代表作

21. **mate** /meɪt/
    n. 朋友，伙伴；老兄；同伴，伴侣
    vi. (动物)交配

22. **material** /məˈtɪəriəl/
    n. 材料；布料；素材
    adj. 物质的

23. **mathematical** /ˌmæθəˈmætɪkl/
    adj. 数学的

24. **mature** /məˈtʃʊə(r)/
    adj. 成熟的
    vi. 成熟，到期

25. **maximum** /ˈmæksɪməm/
    adj. 最大数量的，最高限度的
    n. 最大量，最高程度，最大限度

26. **mean** /miːn/
    vt. 意思是；打算；对某人重要
    adj. 小气的，刻薄的；平均的
    n. 平均数

27. **meaning** /ˈmiːnɪŋ/
    n. 意思；意义

28. **means** /miːnz/
    n. 方法，途径；财富，钱财

29. **meantime** /ˈmiːntaɪm/
    adv. 在此期间，与此同时
    n. (在此)期间，其间

30. **meanwhile** /ˈmiːnwaɪl/
    adv. 在此期间，与此同时

31. **measure** /ˈmeʒə(r)/
    vt. 测量，估量；判定
    vt. link. (尺寸、数量)量度为
    n. 措施，方法；度量单位；提案

32. **opening** /ˈəʊpnɪŋ/
    n. 开幕式；缺口；空缺；开放
    adj. 开篇的，开头的

33. **opera** /ˈɒprə/
    n. 歌剧；歌剧院

34. **operate** /ˈɒpəreɪt/
    vt. 操作，使运行
    vi. 运转，工作；动手术；经营
    vi. vt. (被)使用，(使)运转

35. **operation** /ˌɒpəˈreɪʃn/
    n. 手术；运转，操作；行动；业务

36. **operational** /ˌɒpəˈreɪʃənl/
    adj. 可运转的；运营的；军事行动的

37. **operator** /ˈɒpəreɪtə(r)/
    n. 操作员，技工；接线员；经营者

38. **opinion** /əˈpɪnjən/
    n. 看法，观点；舆论；专家意见

39. **opportunity** /ˌɒpəˈtjuːnəti/
    n. 机会，时机

40. **opponent** /əˈpəʊnənt/
    n. 对手，竞争者；反对者

41. **oppose** /əˈpəʊz/
    vt. 反对，阻挠

42. **opposite** /ˈɒpəzɪt/
    adj. 对面的，另一边的；相反的
    n. 对立的人(或物)
    prep. 在与…相对；与…合演
    adv. 在对面

43. **oppress** /əˈpres/
    vt. 压迫，欺压；压抑，使烦恼

44. **scope** /skəʊp/
    n. 范围；余地；机会；…镜
    vt. 查清，探明

45. **score** /skɔː(r)/
    n. 得分，分数；乐谱；二十；大量
    vt. vi. 得分；获胜；刻下痕迹
    vt. 评分，分值是

46. **scorn** /skɔːn/
    n. 轻蔑，鄙视
    vt. 轻蔑，鄙视

47. **secure** /sɪˈkjʊə(r)/
    adj. 安全的，牢靠的；安心的
    vt. 获得；确保；固定；保卫

48. **security** /sɪˈkjʊərəti/
    n. 安全，保障；安保措施；保安部门
    n. 抵押品；证券

49. **see** /siː/
    vt. vi. 看见；明白，弄清；考虑
    vt. 观看；参见；看望；交往；认为

50. **seek** /siːk/
    vt. vi. 寻找；寻求，谋求
    vt. (向人)请求，寻求

51. **seem** /siːm/
    v. link. 似乎，看来

52. **seemingly** /ˈsiːmɪŋli/
    adv. 貌似，看似

53. **thrift** /θrɪft/
    n. 节约，节俭；海石竹

54. **thrill** /θrɪl/
    n. 亢奋感，激动；一阵强烈的感
    vt. 使非常兴奋

55. **thrive** /θraɪv/
    vi. 兴旺，繁荣；欣欣向荣

56. **through** /θruː/
    prep. 穿过；自始至终；直至；凭借
    adv. 通过；从头到尾；直达的
    adj. 直达的；完成的，结束的

57. **throughout** /θruːˈaʊt/
    prep. 遍及；自始至终，从头到尾
    adv. 自始至终，从头到尾

58. **tip** /tɪp/
    n. 建议，窍门；小费；尖端，密报
    vi. vt. (使)倾斜，倾侧；给小费
    vt. 倾倒，倒出；轻触；预言…获胜

59. **title** /ˈtaɪtl/
    n. 标题，名称；称号；头衔；职称
    vt. 加标题，命名

60. **urban** /ˈɜːbən/
    adj. 城市的，城镇的；都市音乐的

61. **urge** /ɜːdʒ/
    vt. 敦促；强烈要求；驱赶，鞭策
    n. 冲动，强烈的欲望

62. **urgent** /ˈɜːdʒənt/
    adj. 紧迫的，紧急的；急切的

63. **utilize** /ˈjuːtəlaɪz/
    vt. 利用，使用

64. **utter** /ˈʌtə(r)/
    adj. 完全的，彻底的
    vt. 发出(声音)，说

65. **wonder** /ˈwʌndə(r)/
    vt. vi. 想知道；感到诧异
    vt. (礼貌地提问或请人做事时说)
    n. 奇迹，奇观；惊讶，惊奇

66. **worship** /ˈwɜːʃɪp/
    vt. (对神的)信奉，崇拜；阁下
    n. 敬奉，景仰
    vi. 做礼拜

67. **worth** /wɜːθ/
    adj. 价值…的；值得…的
    n. 价值；财产；价值，意义

68. **worthwhile** /ˌwɜːθˈwaɪl/
    adj. 有价值的，值得的

69. **worthy** /ˈwɜːði/
    adj. 值得(或应得)…的；值得尊敬的
    adj. 受人尊敬的，名士的

70. **write** /raɪt/
    vt. vi. 写字；写作，作曲；写信

71. **writer** /ˈraɪtə(r)/
    n. 作家，作者；写的人
`,Tr=`# 2027考研英语红宝书必考词Unit 7（80词）提取结果
（已逐字核对，保留原图片所有内容，包括排版导致的重复）

---

tow /təʊ/
vi. 牵引，拖，拉(车或船)
n. (车或船的)牵引，拖，拉

towards /tɔːrdz/
prep. 向；趋于；将近；对于；用于

take /teɪk/
vt. 拿；带去；做；接受；乘坐
vi. 花费
n. 镜头；收入额；看法，意见

talent /ˈtælənt/
n. 天资，天赋；有才能的人

target /ˈtɑːrɡɪt/
n. 目标，指标；攻击对象；靶子
vt. 把…作为攻击目标；面向，针对

taste /teɪst/
n. 味道；味觉；品味；一口；爱好
vi. 有…味道
vt. 尝出(味道)；尝，品；吃，喝

technical /ˈteknɪkl/
adj. 技术的；技巧的；专业的

technician /tekˈnɪʃn/
n. 技术员，技师

technique /tekˈniːk/
n. 技巧，工艺；技艺，技能

technology /tekˈnɒlədʒi/
n. 科技，技术

teenager /ˈtiːneɪdʒər/
n. (13到19岁的)青少年

temper /ˈtempər/
n. 脾气；怒气；心情
vt. 使缓和；使(金属)回火

temperature /ˈtemprətʃər/
n. 温度，气温；体温

temporal /ˈtempərəl/
adj. 时间的；世俗的；太阳穴的

temporary /ˈtempərəri/
adj. 暂时的，临时的

tempt /tempt/
vt. 引诱，怂恿

temptation /tempˈteɪʃn/
n. 引诱，诱惑；诱惑人的事物

tend /tend/
vi. 往往会；倾向于
vt. vi. 照顾，照料
vi. 管理，打点(商店、酒吧等)

tendency /ˈtendənsi/
n. 倾向；趋势

tentative /ˈtentətɪv/
adj. 暂定的，不确定的；犹豫不定的

term /tɜːrm/
n. 术语；学期；期限
n. 条款；措辞；关系
vt. 把…称为

terminal /ˈtɜːrmɪnl/
n. 终点站；航站楼；终端
adj. (疾病)晚期的；末端的

terminate /ˈtɜːrmɪneɪt/
vt. (使)结束，(使)终止
vi. 到达终点

testify /ˈtestɪfaɪ/
vi. vt. (出庭)作证，证实，证明

trace /treɪs/
vt. 追踪；追溯
n. 痕迹，踪迹；微量，少许；追踪

track /træk/
n. 小径；踪迹；轨道；跑道；路线
n. 站台；田径；歌曲；音轨
vt. 跟踪，追踪；留下足迹

tradition /trəˈdɪʃn/
n. 传统

ultimate /ˈʌltɪmət/
adj. 最终的，终极的；极度的；根本的
n. 极致，极限；最高典范

underestimate /ˌʌndərˈestɪmeɪt/
vt. 低估，轻视
n. 低估，轻视

undergo /ˌʌndərˈɡoʊ/
vt. 经历，经受，遭受

underlie /ˌʌndərˈlaɪ/
vt. 构成…的基础，作为…的原因

underlying /ˌʌndərˈlaɪɪŋ/
adj. 深层的，潜在的；表面以下的

underline /ˌʌndərˈlaɪn/
vt. 在…下画线；强调，突出

understand /ˌʌndərˈstænd/
vt. vi. 理解，懂得；认识到；体谅
vt. 得知，获悉

understanding /ˌʌndərˈstændɪŋ/
n. 了解；协议；理解，看法
adj. 善解人意的，体谅人的

undertake /ˌʌndərˈteɪk/
vt. 承担，着手做；承诺，保证

uneasy /ʌnˈiːzi/
adj. 不安的，不自在的；不稳定的

unemployment /ˌʌnɪmˈplɔɪmənt/
n. 失业人数；失业状态；失业救济

unexpected /ˌʌnɪkˈspektɪd/
adj. 出乎意料的，意想不到的

unify /ˈjuːnɪfaɪ/
vt. vi. 使统一，使成一体

union /ˈjuːniən/
n. 工会；协会；联盟，联合

unique /juˈniːk/
adj. 独一无二的，独特的，特有的

universal /ˌjuːnɪˈvɜːrsl/
adj. 普遍的，全体的；共同的
n. 普遍看法，普遍特征

universe /ˈjuːnɪvɜːrs/
n. 宇宙；领域，范围

unlike /ˌʌnˈlaɪk/
prep. 与…不同，不像；非…的特征
adj. 不同的，不相似的

unlikely /ʌnˈlaɪkli/
adj. 不太可能的
adj. 不合适的，不可信的

unusual /ʌnˈjuːʒuəl/
adj. 不寻常的；特别的

vague /veɪɡ/
adj. 模糊的，含糊的，笼统的

vain /veɪn/
adj. 徒劳的；自负的，虚荣的

valid /ˈvælɪd/
adj. (法律上)有效的；正当合理的

valuable /ˈvæljuəbl/
adj. 有价值的，珍贵的；值钱的

value /ˈvæljuː/
n. 价值；划算程度；用处；价值观
vt. 重视，给…估价

vanish /ˈvænɪʃ/
vi. 突然消失，消亡，灭绝

variable /ˈveriəbl/
adj. 多变的，可变的
n. 变量；可变因素

variance /ˈveriəns/
n. 变化幅度，差额

variation /ˌveriˈeɪʃn/
n. 变化，差异；变体，变种；变奏

variety /vəˈraɪəti/
n. 各种各样，多样化；种类，品种

various /ˈveriəs/
adj. 各种各样的，不同的

vary /ˈveri/
vi. 不同，有差异；(根据情况)变化
vt. 改变，使多样化

vast /vɑːst/
adj. 巨大的，广阔的

wage /weɪdʒ/
n. 工资，工钱
vt. 发动，进行(运动或战争)

wander /ˈwɑːndər/
vi. 闲逛，游荡；走失，走神
n. 闲逛，游荡

want /wɑːnt/
vt. 想，想要；需要；缺少，缺乏
n. 需要的东西；缺少；贫穷

way /weɪ/
n. 方法；方向；作风；路；方向
adv. 很远；非常

weak /wiːk/
adj. 弱的；不牢固的；淡的

wear /wer/
vt. 穿；戴；留(头发)；流露
vi. 磨损，消耗
n. 衣着；磨损；用坏

weary /ˈwɪri/
adj. 疲劳的，厌倦的；使人疲劳的
vi. 使疲劳；使感到厌倦
vi. 变得不耐烦，感到厌倦

weigh /weɪ/
vi. 有…重，重量是
vt. 称重量；量体重；考虑，权衡

weight /weɪt/
n. 重量，体重；重物；重担；杠铃
vt. 在…上加重量

weird /wɪrd/
adj. 古怪的，奇异的

welfare /ˈwelfer/
n. 幸福；社会福利；社会保障金

whirl /wɜːrl/
vi. (使)旋转，(使)打转
vi. 眩晕；回旋；接连不断的活动
n. 旋转；回旋；接连不断的活动

whisper /ˈwɪspər/
vi. 耳语，小声说
vi. (私下)说；秘密告诉
n. 耳语(声)；轻柔的声音；传闻

yield /jiːld/
vi. 屈服；产生；放弃；让出
vt. 出产；让出；(投资)收益
n. 产量；产出；(投资的)收益

youth /juːθ/
n. 青年时期，年轻；青春，朝气
n. 青年

zigzag /ˈzɪɡzæɡ/
n. 锯齿形线条；之字形
adj. 之字形的，锯齿形的，曲折的

zone /zoʊn/
n. 地带；区域
n. (13到19岁的)青少年
n. (13到19岁的)青少年
vi. 使逐步成功；飙升，猛涨
n. 变焦镜头；车辆疾行的声音

key /kiː/
n. 钥匙；关键；键；答案
vt. 用键盘输入
adj. 主要的，关键的

knit /nɪt/
vt. 编织；针织；(使)紧密结合
n. 编织的衣服，针织衫

`,Er=`# 必考词Unit8 69词
1. **brisk** /brɪsk/
adj. 轻快的，麻利的；凉爽的
adj. 兴隆的

2. **brief** /briːf/
adj. 短暂的；简洁的
n. 任务简介，案情摘要，辩护状
vt. 向（某人）介绍情况

3. **browse** /braʊz/
vi. vt. (在商店)随便看看，浏览，翻阅
vi. (动物)吃草
n. 随便看看

4. **aggravate** /ˈæɡrəveɪt/
vt. 加重，使恶化；激怒，使恼火

5. **aggregate** /ˈæɡrɪɡət/
n. 总数，集合体；骨料
adj. 总数的，合计的
vt. 总计达到，使聚集

6. **aggressive** /əˈɡresɪv/
adj. 好斗的，有侵略性的；进取的

7. **agitate** /ˈædʒɪteɪt/
vi. 鼓动，煽动
vt. 激怒，使不安；搅动，摇动

8. **agreeable** /əˈɡriːəbl/
adj. 令人愉快的，乐意的；可接受的

9. **aid** /eɪd/
n. 援助，救援物资；辅助（设备）
vi. vt. 帮助，援助

10. **aim** /eɪm/
n. 目的，目标；瞄准
vi. vt. 力求达到；瞄准
vt. 旨在；针对

11. **alarm** /əˈlɑːm/
n. 警报器；警报；闹钟；惊恐
vt. 使惊恐，使忧虑；给…装警报器

12. **alien** /ˈeɪliən/
n. 外星生物；外国人，侨民
adj. 陌生的；外国的；与…不相容的
adj. 外星的

13. **alienate** /ˈeɪliəneɪt/
vt. 使疏远，使不友好；使格格不入

14. **allocate** /ˈæləkeɪt/
vt. 分配，划拨

15. **allow** /əˈlaʊ/
vt. 允许，听任；使可能；留出

16. **alter** /ˈɔːltər/
vi. vt. (使)变化，(使)改变
vt. 改（衣服使其更合身）

17. **alternate** /ˈɔːltərnət/
adj. 交替的；每隔…的；可替代的
vi. vt. (使)轮流，(使)交替
n. 替补者

18. **alternative** /ɔːlˈtɜːnətɪv/
adj. 可替代的，其他的；非传统的
n. 可供选择的事物

19. **comparable** /ˈkɒmpərəbl/
adj. 有可比性的，类似的

20. **comparative** /kəmˈpærətɪv/
adj. 比较的，相对的；比较级的
n. (形容词或副词的)比较级

21. **compare** /kəmˈpeər/
vt. 比较，对比；将…比作
vi. (与…)相比

22. **comparison** /kəmˈpærɪsn/
n. 比较，对比

23. **compel** /kəmˈpel/
vt. 强迫，逼迫

24. **compensate** /ˈkɒmpenseɪt/
vi. 弥补，补偿
vt. 给…赔偿

25. **compete** /kəmˈpiːt/
vi. 竞争，对抗；参加比赛

26. **competition** /ˌkɒmpəˈtɪʃn/
n. 竞争；比赛；竞争对手

27. **competitive** /kəmˈpetətɪv/
adj. 竞争的；有竞争力的；好胜的

28. **competent** /ˈkɒmpɪtənt/
adj. 能胜任的；还行的；有法定权的

29. **compile** /kəmˈpaɪl/
vt. 汇编，编纂；编译

30. **complain** /kəmˈpleɪn/
vi. vt. 抱怨，投诉，发牢骚

31. **complaint** /kəmˈpleɪnt/
n. 抱怨，投诉；使人不满的事；疾病

32. **complement** /ˈkɒmplɪment/
vt. 补充，补足，使完美
n. 补充物，补足物；足额；补语

33. **complete** /kəmˈpliːt/
adj. 完全的，全部的；完成的；包括
vt. 完成，结束；填（表格）；使完整

34. **complex** /ˈkɒmpleks/
adj. 复杂的，难懂的
n. 综合建筑群；复合体；情结

35. **complicate** /ˈkɒmplɪkeɪt/
vt. 使难以理解，使复杂化

36. **complicated** /ˈkɒmplɪkeɪtɪd/
adj. 复杂的，难懂的

37. **comply** /kəmˈplaɪ/
vi. 服从，遵守

38. **compliment** /ˈkɒmplɪment/
n. 称赞，赞美的话；致意，致敬
vt. 称赞，赞美

39. **differ** /ˈdɪfər/
vi. 相异，不同；持不同看法

40. **difference** /ˈdɪfrəns/
n. 差异；差额；分歧

41. **diffuse** /dɪˈfjuːz/
vt. vi. 扩散，渗透；传播，散布
adj. 扩散的，分散的；冗长的

42. **emphasis** /ˈemfəsɪs/
n. 重视，重点，强调；重读

43. **emphasize** /ˈemfəsaɪz/
vt. 强调，重视；重读；使突出

44. **employ** /ɪmˈplɔɪ/
vt. 雇用，雇佣；使用，运用

45. **employee** /ɪmˈplɔɪiː/
n. 雇员

46. **employer** /ɪmˈplɔɪər/
n. 雇主

47. **employment** /ɪmˈplɔɪmənt/
n. 在职；就业（机会）；雇用；使用

48. **enable** /ɪˈneɪbl/
vt. 使能够，使可能

49. **encounter** /ɪnˈkaʊntər/
vt. 遭遇；偶遇
n. 偶遇；冲突，经历

50. **encourage** /ɪnˈkʌrɪdʒ/
vt. 鼓励；劝告，怂恿；促进，刺激

51. **end** /end/
n. 结局，结尾，末端，结束，目标
vi. vt. 结束，终止

52. **endeavour** /ɪnˈdevər/
vi. 努力，尝试
n. 努力，尝试

53. **endorse** /ɪnˈdɔːs/
vt. 公开支持，为…代言；签名

54. **indicate** /ˈɪndɪkeɪt/
vt. 表明，暗示；指向，指示；代表

55. **indication** /ˌɪndɪˈkeɪʃn/
n. 表明，迹象，象征

56. **indicative** /ɪnˈdɪkətɪv/
adj. 表明的，表示的，暗示的

57. **outrage** /ˈaʊtreɪdʒ/
n. 愤怒，愤慨；暴行
vt. 使震怒，激怒

58. **outset** /ˈaʊtset/
n. 开始，起始

59. **outside** /ˌaʊtˈsaɪd/
adv. 在外面；向外面
adj. 外部的；向外的；不属于…的
prep. 在…外；不属于；除了
n. 外部，外观

60. **outward** /ˈaʊtwəd/
adj. 外表的，表面上的；向外的
adv. 向外，朝外

61. **special** /ˈspeʃl/
adj. 特殊的，特别重要的；专门的
adj. 特别好的；格外的；特价的

62. **specialist** /ˈspeʃəlɪst/
n. 专家；专科医生
adj. 专业的

63. **specialize** /ˈspeʃəlaɪz/
vi. 专门从事，专门研究
vt. 使专门化

64. **speciality** /ˌspeʃiˈæləti/
n. 专业，专长；特产，特色菜

65. **species** /ˈspiːʃiːz/
n. 物种，种

66. **specific** /spəˈsɪfɪk/
adj. 明确的，具体的；特定的，特有的
n. 细节，详情

67. **specification** /ˌspesɪfɪˈkeɪʃn/
n. 规格，具体要求

68. **specify** /ˈspesɪfaɪ/
vt. 具体指明，明确说明

69. **speculate** /ˈspekjuleɪt/
vi. vt. 推测，猜想
vi. 做投机买卖

`,Dr=`# 必考词Unit9 68词
1. **acclaim** /əˈkleɪm/
vt. 赞扬，公开称赞
n. 赞扬，公开称赞

2. **accommodate** /əˈkɒmədeɪt/
vt. 容纳；为…提供住宿；迎合
vi. (调整以)适应

3. **accommodation** /əˌkɒməˈdeɪʃn/
n. 住宿，住处；和解，调解

4. **accompany** /əˈkʌmpəni/
vt. 陪伴，陪同；伴随；为…伴奏

5. **accomplish** /əˈkʌmplɪʃ/
vt. 完成，达成

6. **account** /əˈkaʊnt/
n. 账户；账目；叙述；解释，说明
vi. 认为是，视为

7. **accountant** /əˈkaʊntənt/
n. 会计，会计师

8. **bias** /ˈbaɪəs/
n. 偏见，偏袒；偏好
vt. 使有偏见，使偏心

9. **bid** /bɪd/
vi. vt. 出价；叫牌
vi. 投标；努力争取
vt. 向…表示问候，向…告别；吩咐
n. 出价；投标；争取，尝试；叫牌

10. **bill** /bɪl/
n. 账单；议案；钞票；节目单；喙
vt. 开账单；把…宣传为

11. **billion** /ˈbɪljən/
num. 十亿；数以十亿计，大量

12. **birth** /bɜːθ/
n. 出生，分娩；诞生，起源；出身

13. **charge** /tʃɑːdʒ/
n. 费用；指控；指责；掌管；电荷
vt. vi. 要价，收费；猛冲，猛攻，冲锋
vt. 指控；记在账上；指责；充电
vi. 向…方向冲去

14. **charm** /tʃɑːm/
n. 魅力，吸引力；小挂件；咒语
vt. 吸引，迷住
vt. 用魔法控制

15. **chase** /tʃeɪs/
vt. vi. 追逐，追赶；追求，求爱
vt. 争取得到；催促
vi. 追逐，追赶；匆忙地走
n. 追逐，追赶；争取得到

16. **demand** /dɪˈmɑːnd/
n. 要求；需求
vt. 要求；需要

17. **democracy** /dɪˈmɒkrəsi/
n. 民主，民主制；民主国家

18. **democratic** /ˌdeməˈkrætɪk/
adj. 民主的

19. **demographic** /ˌdeməˈɡræfɪk/
adj. 人口(学)的
n. 人口统计数据；人群，群体

20. **demonstrate** /ˈdemənstreɪt/
vt. 表明，证明；示范，演示；展露
vi. 示威，游行

21. **denote** /dɪˈnəʊt/
vt. (符号等)代表，表示，意指

22. **denial** /dɪˈnaɪəl/
n. 否认；拒绝，拒绝给予

23. **deny** /dɪˈnaɪ/
vt. 否认；拒绝接受；拒绝给予

24. **department** /dɪˈpɑːtmənt/
n. 部门，科，系

25. **depend** /dɪˈpend/
vi. 取决于，依靠，信赖；确信

26. **dependent** /dɪˈpendənt/
adj. 依赖的；有瘾的；取决于…的
n. 受抚养者

27. **deposit** /dɪˈpɒzɪt/
n. 存款；订金，押金；沉积物
vt. 存入银行；放下，放置；使沉积

28. **depress** /dɪˈpres/
vt. 使沮丧；降低(价格等)；按下

29. **emerge** /ɪˈmɜːdʒ/
vi. 出现，浮现；开始为人所知
vi. vt. (事实)显露，暴露
vi. (从困境中)摆脱出来

30. **emergency** /ɪˈmɜːdʒənsi/
n. 紧急事件，意外事件

31. **eminent** /ˈemɪnənt/
adj. 杰出的，著名的

32. **emotion** /ɪˈməʊʃn/
n. 情感，情绪

33. **fear** /fɪər/
n. 害怕，惧怕，担忧
vt. 害怕，惧怕
vt. vi. 担心，担忧
vi. 恐怕

34. **fearful** /ˈfɪəfl/
adj. 害怕的；可怕的；极坏的

35. **feature** /ˈfiːtʃər/
n. 特征，特点；特写，专题；五官
vt. 以…为特色
vi. 起重要作用

36. **federal** /ˈfedərəl/
adj. 联邦制的；联邦政府的

37. **federation** /ˌfedəˈreɪʃn/
n. 联盟；联合会；联邦制国家

38. **feed** /fiːd/
vt. 喂养，养活；施肥；灌输
vt. 将…塞进机器；满足；供给
vi. (婴儿或动物)进食
n. (婴儿或动物)一餐；饲料，肥料

39. **feedback** /ˈfiːdbæk/
n. 反馈

40. **feeling** /ˈfiːlɪŋ/
n. 情绪，感情；(身体)感觉；看法

41. **fertile** /ˈfɜːtaɪl/
adj. 肥沃的；能生育的；主意多的

42. **goal** /ɡəʊl/
n. 目标；进球得分；球门

43. **goods** /ɡʊdz/
n. 商品，货物；私人财产

44. **govern** /ˈɡʌvən/
vi. 统治，治理
vt. 支配，控制，影响

45. **government** /ˈɡʌvənmənt/
n. 政府；政体；治理，统治

46. **governor** /ˈɡʌvənər/
n. 州长，省长；总督，董事，主管

47. **gradual** /ˈɡrædʒuəl/
adj. 逐渐的，逐步的；(斜坡)平缓的

48. **graduate** /ˈɡrædʒuət/
vi. 毕业
vi. vt. 授予(某人)学位
vt. 逐渐发展

49. **grand** /ɡrænd/
adj. 壮丽的，宏伟的；极好的
n. 一千英镑(或美元)；三角钢琴

50. **grant** /ɡrɑːnt/
vt. 批准，准予，给予；承认
n. 拨款；补助金

51. **heap** /hiːp/
n. (凌乱的)一堆；许多；破旧的车
vt. 堆放；对…大加赞扬(或批评)

52. **heal** /hiːl/
vi. vt. 治愈；结束(冲突)，修复
vi. (关系)

53. **health** /helθ/
n. 健康状况，健康；医疗保健

54. **healthy** /ˈhelθi/
adj. 健康的；有益健康的；合情理的

55. **hesitate** /ˈhezɪteɪt/
vi. 犹豫，迟疑
vi. (因有顾虑而)不愿意(做某事)

56. **highlight** /ˈhaɪlaɪt/
vt. 强调，突出；用彩笔做标记
n. 最突出(精彩)的部分

57. **highly** /ˈhaɪli/
adv. 非常；高水平地；赞许地

58. **immediate** /ɪˈmiːdiət/
adj. 立即的，当前的；最接近的
adj. 直系的；直接的

59. **immense** /ɪˈmens/
adj. 巨大的，极大的

60. **immerse** /ɪˈmɜːs/
vt. 使浸没；(使)深陷于，沉浸

61. **immigrant** /ˈɪmɪɡrənt/
n. (外来)移民；侨民

62. **imminent** /ˈɪmɪnənt/
adj. 即将发生的，逼近的

63. **immune** /ɪˈmjuːn/
adj. 免疫的；不受影响的；被豁免的

64. **likely** /ˈlaɪkli/
adj. 可能的；合适的
adv. 大概，很可能

65. **likelihood** /ˈlaɪklihʊd/
n. 可能性，可能的事

66. **likewise** /ˈlaɪkwaɪz/
adv. 同样地，相似地；我也一样

67. **self** /self/
n. 本来面目；自我，私心；自己
pron. 自己的；独自的；(对)自

68. **selfish** /ˈselfɪʃ/
adj. 自私的

`,Or=/^\s*(\d+)\.\s+\*\*(.+?)\*\*\s+(\/.+\/)\s*$/,kr=/^\s*([A-Za-z][A-Za-z'’.-]*(?:\s+[A-Za-z][A-Za-z'’.-]*)?)\s+(\/[^/]+\/)\s*$/,Ar=/^((?:[a-z]+\.)+(?:\s+[a-z]+\.)*)\s+(.+)$/i;function jr(e,t){let n=e.match(/^#{1,3}\s+(.+)$/m)?.[1]?.trim(),r=n?.match(/(必考词)\s*Unit\s*(\d+)/i);return r?`${r[1]} Unit${r[2]}`:n?.replace(/\s*\d+\s*词\s*$/,``).trim()||t}function Mr(e){let t=e.match(/^#{1,3}\s+.+?(\d+)\s*词/m)?.[1];return t?Number(t):void 0}function Nr(e){return e.map(e=>e.trim()).filter(Boolean).map(e=>{let t=e.match(Ar);return t?{pos:t[1].trim(),meaning:t[2].trim()}:{pos:``,meaning:e}})}function Pr(e,t){let n=t.unitName||jr(e,t.unitId),r=e.split(/\r?\n/),i=[],a,o=()=>{if(!a)return;let e=i.length+1;i.push({id:`${t.unitId}-${String(e).padStart(3,`0`)}`,unitId:t.unitId,unitName:n,order:e,word:a.word,phonetic:a.phonetic,definitions:Nr(a.definitions)})};for(let e of r){let t=e.match(Or);if(t){o(),a={order:Number(t[1]),word:t[2].trim(),phonetic:t[3].trim(),definitions:[]};continue}let n=e.match(kr);if(n){o(),a={order:i.length+1,word:n[1].trim(),phonetic:n[2].trim(),definitions:[]};continue}a&&(!e.trim()||e.trim().startsWith(`#`)||a.definitions.push(e))}return o(),{id:t.unitId,name:n,order:t.order,expectedCount:Mr(e),words:i,referenceImages:t.referenceImages}}var Fr=Object.assign({"../../单词文本/分区/19.md":nr,"../../单词文本/分区/20.md":rr,"../../单词文本/分区/21.md":ir,"../../单词文本/分区/22.md":ar,"../../单词文本/分区/23.md":or,"../../单词文本/分区/24.md":sr,"../../单词文本/分区/25.md":cr,"../../单词文本/分区/26.md":lr,"../../单词文本/分区/必修1.md":ur,"../../单词文本/分区/必修10.md":dr,"../../单词文本/分区/必修11.md":fr,"../../单词文本/分区/必修12.md":pr,"../../单词文本/分区/必修13.md":mr,"../../单词文本/分区/必修14.md":hr,"../../单词文本/分区/必修15.md":gr,"../../单词文本/分区/必修16.md":_r,"../../单词文本/分区/必修17.md":vr,"../../单词文本/分区/必修18.md":yr,"../../单词文本/分区/必修2.md":br,"../../单词文本/分区/必修3.md":xr,"../../单词文本/分区/必修4.md":Sr,"../../单词文本/分区/必修5.md":Cr,"../../单词文本/分区/必修6 .md":wr,"../../单词文本/分区/必修7.md":Tr,"../../单词文本/分区/必修8 .md":Er,"../../单词文本/分区/必修9.md":Dr}),Ir={一:1,二:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9,十:10};function Lr(e){return(e.split(`/`).pop()||e).replace(/\.[^.]+$/,``)}function Rr(e){let t=e.match(/\d+/)?.[0];if(t)return Number(t);let n=e.match(/[一二三四五六七八九十]+/)?.[0];if(n){if(n===`十`)return 10;if(n.startsWith(`十`))return 10+(Ir[n[1]]||0);if(n.endsWith(`十`))return(Ir[n[0]]||1)*10;if(n.includes(`十`)){let[e,t]=n.split(`十`);return(Ir[e]||1)*10+(Ir[t]||0)}return Ir[n]}}function zr(e,t){let n=t?.match(/Unit\s*(\d+)/i)?.[1];return n?Number(n):Rr(Lr(e))||999}var Br=Object.entries(Fr).map(([e,t])=>{let n=zr(e,t);return Pr(t,{unitId:`unit${n}`,unitName:`必备词 Unit${n}`,order:n})}).sort((e,t)=>e.order-t.order);Br.find(e=>e.id===`unit1`)||Br[0],Br.find(e=>e.id===`unit2`);var A=Br.flatMap(e=>e.words);function Vr(e){let t=new Blob([e],{type:`application/json`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`reword-progress-${new Date().toISOString().slice(0,10)}.json`,r.click(),URL.revokeObjectURL(n)}function Hr(e,t,n=6e4){return e.lastReviewedAt?t.getTime()-new Date(e.lastReviewedAt).getTime()<n:!1}function Ur(e,t){return t.rewardHistory[0]&&t.rewardHistory[0]?.id!==e.rewardHistory[0]?.id}function Wr(){let[e,t]=(0,y.useState)({name:`dashboard`}),[n,r]=(0,y.useState)(()=>lt()),[i,a]=(0,y.useState)(()=>gt()),[o,s]=(0,y.useState)(),c=(0,y.useMemo)(()=>Br.find(t=>t.id===e.unitId)||Br[0],[e.unitId]),l=e.unitId?c.words:A;(0,y.useEffect)(()=>{if(!o)return;let e=window.setTimeout(()=>s(void 0),2600);return()=>window.clearTimeout(e)},[o]);let u=(e,t,r=n)=>{let i=It(t,A,r);return _t(i),Ur(e,i)&&s(i.rewardHistory[0]),i},d=(e,t=n)=>{a(n=>u(n,e(n),t))},f=(e,t,n)=>{r(r=>{let i=r[e]||ot(e),o=t(i),s={...r,[e]:o};return ut(s),n&&a(e=>u(e,n(e,i,o,s),s)),s})},p=e=>{f(e,e=>St(e),(e,t)=>t.learned?e:rt({...e,totalWordsLearned:e.totalWordsLearned+1},{type:`study`,title:`新词入库`,description:`完成 1 个新单词初学`,xp:2,coins:1,monsterPoints:1}))},m=(e,t)=>{let n=new Date;f(e,e=>t===`known`?Ct(e,n):t===`fuzzy`?wt(e,n):Tt(e,n),(r,i,a)=>{if(Hr(i,n))return r;let o={...r,totalWordsReviewed:r.totalWordsReviewed+1};return t===`known`?o=rt(o,{type:`review`,title:`复习命中`,description:`理解模式记住 1 个单词`,xp:4,coins:2,monsterPoints:3}):t===`fuzzy`&&(o=rt(o,{type:`review`,title:`复习推进`,description:`标记 1 个不熟词，进入加固周期`,xp:1,monsterPoints:1})),t===`known`&&Dt(a)&&!o.defeatedWordIds.includes(e)&&(o=rt({...o,defeatedWordIds:[...o.defeatedWordIds,e],defeatedMonsters:o.defeatedMonsters+1},{type:`monster`,title:`击败单词小怪`,description:`一个单词进入掌握状态`,xp:10,coins:5,monsterPoints:10})),o})},h=(e,t)=>{let n=new Date;f(e,e=>t?st(Ct({...e,correctCount:e.correctCount+1},n),`quiz-correct`,n):st(Tt({...e,wrongCount:e.wrongCount+1},n),`quiz-wrong`,n),(r,i,a)=>{let o=Hr(i,n),s={...r,totalQuizCount:r.totalQuizCount+1,totalCorrectCount:r.totalCorrectCount+ +!!t,totalWrongCount:r.totalWrongCount+ +!t};return!o&&t&&(s=rt(s,{type:`quiz`,title:`测试答对`,description:`测验中答对 1 题`,xp:3,coins:1,monsterPoints:2})),t&&Dt(a)&&!s.defeatedWordIds.includes(e)&&(s=rt({...s,defeatedWordIds:[...s.defeatedWordIds,e],defeatedMonsters:s.defeatedMonsters+1},{type:`monster`,title:`击败单词小怪`,description:`测试命中让单词进入掌握状态`,xp:10,coins:5,monsterPoints:10})),s})},g=e=>{try{r(pt(e)),a(gt())}catch(e){window.alert(e instanceof Error?e.message:`导入失败`)}},_=()=>{window.confirm(`确定清空所有学习进度、金币和打卡记录吗？`)&&(dt(),r({}),a(gt()))},v=(0,y.useCallback)(e=>{a(t=>{let n=rn(t).todaySeconds,r=nn(t,e);if(r===t)return t;let i=rn(r).todaySeconds;[{minutes:15,xp:20,coins:8,monsterPoints:8},{minutes:30,xp:35,coins:12,monsterPoints:12},{minutes:60,xp:80,coins:25,monsterPoints:25}].forEach(e=>{n<e.minutes*60&&i>=e.minutes*60&&(r=rt(r,{type:`study`,title:`专注 ${e.minutes} 分钟`,description:`今日学习时长达标`,xp:e.xp,coins:e.coins,monsterPoints:e.monsterPoints}))});let a=It(r,A,lt());return _t(a),Ur(t,a)&&s(a.rewardHistory[0]),a})},[]),b=()=>{d(e=>Vt(e))},x=()=>{if(!Bt(A,n,i)){window.alert(`今日任务还没达成，先学几个新词、复习或完成一次测试。`);return}d(e=>Ht(e))},ee=e=>{a(t=>{let n=Wn(t,e);return n===t?(window.alert(`金币/钻石不足，或已经拥有这个物品。`),t):u(t,n)})},S=e=>{let t=Br.find(t=>t.id===e);t&&d(r=>{let i=mn(t,n,r);return!i.eligible||i.defeated?(window.alert(`Boss 还不能挑战：需要本单元学习达到 80%，并且没有到期复习。`),r):rt({...r,defeatedBossIds:[...r.defeatedBossIds,e],defeatedMonsters:r.defeatedMonsters+1},{type:`monster`,title:`击败 ${i.name}`,description:`完成一个单元 Boss 挑战`,xp:100,coins:50,diamonds:1,monsterPoints:60,bypassDailyCap:!0})})},C=e=>{d(t=>({...t,audioSettings:e}))},te=e=>t({name:e}),ne=e.name===`study`||e.name===`quiz`||e.name===`total`?e.name:e.name===`recall`?e.dueOnly?`review`:`recall`:void 0;return(0,E.jsxs)(He,{current:e.name,onNavigate:te,children:[o?(0,E.jsx)(`div`,{className:`fixed left-1/2 top-20 z-50 w-[min(92vw,360px)] -translate-x-1/2`,children:(0,E.jsx)(Ue,{reward:o})}):null,e.name===`dashboard`?(0,E.jsx)(dn,{units:Br,words:A,progressMap:n,stats:i,onSignIn:b,onNavigateReview:()=>t({name:`review`}),onNavigateUnits:()=>t({name:`units`}),onNavigateCheckIn:()=>t({name:`checkin`}),onNavigateMonster:()=>t({name:`monster`}),onNavigateShop:()=>t({name:`shop`}),onNavigateStatistics:()=>t({name:`statistics`})}):e.name===`units`?(0,E.jsx)(er,{units:Br,progressMap:n,onOpenUnit:e=>t({name:`unitDetail`,unitId:e})}):e.name===`unitDetail`?(0,E.jsx)(Qn,{unit:c,progressMap:n,onStudy:()=>t({name:`study`,unitId:c.id}),onRecall:()=>t({name:`recall`,unitId:c.id}),onQuiz:()=>t({name:`quiz`,unitId:c.id})}):e.name===`study`?(0,E.jsx)(Xn,{unit:e.unitId?c:void 0,words:l,progressMap:n,audioSettings:i.audioSettings,onLearn:p}):e.name===`recall`?(0,E.jsx)(Rn,{title:e.unitId?`${c.name} 理解功能`:`总理解功能`,words:l,progressMap:n,audioSettings:i.audioSettings,initialDueOnly:e.dueOnly,onGrade:m,onBackToStudy:()=>t({name:`study`,unitId:e.unitId})}):e.name===`quiz`?(0,E.jsx)(In,{title:e.unitId?`${c.name} 测试功能`:`总测试功能`,words:l,allWords:A,progressMap:n,audioSettings:i.audioSettings,onAnswer:h}):e.name===`total`?(0,E.jsx)(Zn,{words:A,progressMap:n,audioSettings:i.audioSettings,onStudy:()=>t({name:`study`}),onRecall:()=>t({name:`recall`}),onQuiz:()=>t({name:`quiz`})}):e.name===`review`?(0,E.jsx)(zn,{words:A,progressMap:n,audioSettings:i.audioSettings,onStartReview:()=>t({name:`recall`,dueOnly:!0}),onOpenUnits:()=>t({name:`units`})}):e.name===`checkin`?(0,E.jsx)(Kt,{words:A,progressMap:n,stats:i,onSignIn:b,onCheckIn:x}):e.name===`rewards`?(0,E.jsx)(Bn,{stats:i}):e.name===`shop`?(0,E.jsx)(Kn,{stats:i,onExchange:ee}):e.name===`monster`?(0,E.jsx)(vn,{words:A,units:Br,progressMap:n,stats:i,onChallengeBoss:S}):e.name===`statistics`?(0,E.jsx)(Jn,{stats:i,words:A,progressMap:n}):e.name===`achievements`?(0,E.jsx)(Lt,{stats:i,words:A,progressMap:n}):e.name===`settings`?(0,E.jsx)(Vn,{stats:i,onUpdateAudio:C}):(0,E.jsx)(yn,{words:A,progressMap:n,stats:i,onNavigateCheckIn:()=>t({name:`checkin`}),onNavigateRewards:()=>t({name:`rewards`}),onNavigateShop:()=>t({name:`shop`}),onNavigateStatistics:()=>t({name:`statistics`}),onNavigateAchievements:()=>t({name:`achievements`}),onNavigateSettings:()=>t({name:`settings`}),onExport:()=>Vr(ft()),onImport:g,onReset:_}),(0,E.jsx)(tr,{mode:ne,unitId:e.unitId,wordCount:l.length,onComplete:v})]})}ze.createRoot(document.getElementById(`root`)).render((0,E.jsx)(y.StrictMode,{children:(0,E.jsx)(Wr,{})})),`serviceWorker`in navigator&&window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`/sw.js`).catch(()=>void 0)});