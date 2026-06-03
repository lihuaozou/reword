var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.provider`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.iterator;function p(e){return typeof e!=`object`||!e?null:(e=f&&e[f]||e[`@@iterator`],typeof e==`function`?e:null)}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function _(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`setState(...): takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function v(){}v.prototype=_.prototype;function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}var b=y.prototype=new v;b.constructor=y,h(b,_.prototype),b.isPureReactComponent=!0;var x=Array.isArray,S=Object.prototype.hasOwnProperty,C={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function ee(e,n,r){var i,a={},o=null,s=null;if(n!=null)for(i in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=``+n.key),n)S.call(n,i)&&!w.hasOwnProperty(i)&&(a[i]=n[i]);var c=arguments.length-2;if(c===1)a.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)a[i]===void 0&&(a[i]=c[i]);return{$$typeof:t,type:e,key:o,ref:s,props:a,_owner:C.current}}function te(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ne(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function oe(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0}}if(c)return c=e,o=o(c),e=a===``?`.`+ae(c,0):a,x(o)?(i=``,e!=null&&(i=e.replace(ie,`$&/`)+`/`),oe(o,r,i,``,function(e){return e})):o!=null&&(ne(o)&&(o=te(o,i+(!o.key||c&&c.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+e)),r.push(o)),1;if(c=0,a=a===``?`.`:a+`:`,x(e))for(var l=0;l<e.length;l++){s=e[l];var u=a+ae(s,l);c+=oe(s,r,i,u,o)}else if(u=p(e),typeof u==`function`)for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=a+ae(s,l++),c+=oe(s,r,i,u,o);else if(s===`object`)throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`);return c}function se(e,t,n){if(e==null)return e;var r=[],i=0;return oe(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ce(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var le={current:null},ue={transition:null},de={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:ue,ReactCurrentOwner:C};function fe(){throw Error(`act(...) is not supported in production builds of React.`)}e.Children={map:se,forEach:function(e,t,n){se(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return se(e,function(){t++}),t},toArray:function(e){return se(e,function(e){return e})||[]},only:function(e){if(!ne(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}},e.Component=_,e.Fragment=r,e.Profiler=a,e.PureComponent=y,e.StrictMode=i,e.Suspense=l,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,e.act=fe,e.cloneElement=function(e,n,r){if(e==null)throw Error(`React.cloneElement(...): The argument must be a React element, but you passed `+e+`.`);var i=h({},e.props),a=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=C.current),n.key!==void 0&&(a=``+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)S.call(n,l)&&!w.hasOwnProperty(l)&&(i[l]=n[l]===void 0&&c!==void 0?c[l]:n[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:t,type:e.type,key:a,ref:o,props:i,_owner:s}},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:o,_context:e},e.Consumer=e},e.createElement=ee,e.createFactory=function(e){var t=ee.bind(null,e);return t.type=e,t},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ne,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ce}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=ue.transition;ue.transition={};try{e()}finally{ue.transition=t}},e.unstable_act=fe,e.useCallback=function(e,t){return le.current.useCallback(e,t)},e.useContext=function(e){return le.current.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e){return le.current.useDeferredValue(e)},e.useEffect=function(e,t){return le.current.useEffect(e,t)},e.useId=function(){return le.current.useId()},e.useImperativeHandle=function(e,t,n){return le.current.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return le.current.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return le.current.useLayoutEffect(e,t)},e.useMemo=function(e,t){return le.current.useMemo(e,t)},e.useReducer=function(e,t,n){return le.current.useReducer(e,t,n)},e.useRef=function(e){return le.current.useRef(e)},e.useState=function(e){return le.current.useState(e)},e.useSyncExternalStore=function(e,t,n){return le.current.useSyncExternalStore(e,t,n)},e.useTransition=function(){return le.current.useTransition()},e.version=`18.3.1`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=typeof setTimeout==`function`?setTimeout:null,_=typeof clearTimeout==`function`?clearTimeout:null,v=typeof setImmediate<`u`?setImmediate:null;typeof navigator<`u`&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function b(e){if(h=!1,y(e),!m)if(n(c)!==null)m=!0,se(x);else{var t=n(l);t!==null&&ce(b,t.startTime-e)}}function x(t,i){m=!1,h&&(h=!1,_(w),w=-1),p=!0;var a=f;try{for(y(i),d=n(c);d!==null&&(!(d.expirationTime>i)||t&&!ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=i);i=e.unstable_now(),typeof s==`function`?d.callback=s:d===n(c)&&r(c),y(i)}else r(c);d=n(c)}if(d!==null)var u=!0;else{var g=n(l);g!==null&&ce(b,g.startTime-i),u=!1}return u}finally{d=null,f=a,p=!1}}var S=!1,C=null,w=-1,ee=5,te=-1;function ne(){return!(e.unstable_now()-te<ee)}function re(){if(C!==null){var t=e.unstable_now();te=t;var n=!0;try{n=C(!0,t)}finally{n?ie():(S=!1,C=null)}}else S=!1}var ie;if(typeof v==`function`)ie=function(){v(re)};else if(typeof MessageChannel<`u`){var ae=new MessageChannel,oe=ae.port2;ae.port1.onmessage=re,ie=function(){oe.postMessage(null)}}else ie=function(){g(re,0)};function se(e){C=e,S||(S=!0,ie())}function ce(t,n){w=g(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,se(x))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):ee=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(_(w),w=-1):h=!0,ce(b,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,se(x))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u(),n=f();function r(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}var i=new Set,a={};function o(e,t){s(e,t),s(e+`Capture`,t)}function s(e,t){for(a[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),l=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function h(e){return l.call(m,e)?!0:l.call(p,e)?!1:d.test(e)?m[e]=!0:(p[e]=!0,!1)}function g(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case`function`:case`symbol`:return!0;case`boolean`:return r?!1:n===null?(e=e.toLowerCase().slice(0,5),e!==`data-`&&e!==`aria-`):!n.acceptsBooleans;default:return!1}}function _(e,t,n,r){if(t==null||g(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function v(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var y={};`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach(function(e){y[e]=new v(e,0,!1,e,null,!1,!1)}),[[`acceptCharset`,`accept-charset`],[`className`,`class`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`]].forEach(function(e){var t=e[0];y[t]=new v(t,1,!1,e[1],null,!1,!1)}),[`contentEditable`,`draggable`,`spellCheck`,`value`].forEach(function(e){y[e]=new v(e,2,!1,e.toLowerCase(),null,!1,!1)}),[`autoReverse`,`externalResourcesRequired`,`focusable`,`preserveAlpha`].forEach(function(e){y[e]=new v(e,2,!1,e,null,!1,!1)}),`allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach(function(e){y[e]=new v(e,3,!1,e.toLowerCase(),null,!1,!1)}),[`checked`,`multiple`,`muted`,`selected`].forEach(function(e){y[e]=new v(e,3,!0,e,null,!1,!1)}),[`capture`,`download`].forEach(function(e){y[e]=new v(e,4,!1,e,null,!1,!1)}),[`cols`,`rows`,`size`,`span`].forEach(function(e){y[e]=new v(e,6,!1,e,null,!1,!1)}),[`rowSpan`,`start`].forEach(function(e){y[e]=new v(e,5,!1,e.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function x(e){return e[1].toUpperCase()}`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,null,!1,!1)}),`xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/1999/xlink`,!1,!1)}),[`xml:base`,`xml:lang`,`xml:space`].forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/XML/1998/namespace`,!1,!1)}),[`tabIndex`,`crossOrigin`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!1,!1)}),y.xlinkHref=new v(`xlinkHref`,1,!1,`xlink:href`,`http://www.w3.org/1999/xlink`,!0,!1),[`src`,`href`,`action`,`formAction`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!0,!0)});function S(e,t,n,r){var i=y.hasOwnProperty(t)?y[t]:null;(i===null?r||!(2<t.length)||t[0]!==`o`&&t[0]!==`O`||t[1]!==`n`&&t[1]!==`N`:i.type!==0)&&(_(t,n,i,r)&&(n=null),r||i===null?h(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,``+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:``:n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&!0===n?``:``+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var C=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for(`react.element`),ee=Symbol.for(`react.portal`),te=Symbol.for(`react.fragment`),ne=Symbol.for(`react.strict_mode`),re=Symbol.for(`react.profiler`),ie=Symbol.for(`react.provider`),ae=Symbol.for(`react.context`),oe=Symbol.for(`react.forward_ref`),se=Symbol.for(`react.suspense`),ce=Symbol.for(`react.suspense_list`),le=Symbol.for(`react.memo`),ue=Symbol.for(`react.lazy`),de=Symbol.for(`react.offscreen`),fe=Symbol.iterator;function pe(e){return typeof e!=`object`||!e?null:(e=fe&&e[fe]||e[`@@iterator`],typeof e==`function`?e:null)}var T=Object.assign,me;function he(e){if(me===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);me=t&&t[1]||``}return`
`+me+e}var ge=!1;function _e(e,t){if(!e||ge)return``;ge=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&typeof t.stack==`string`){for(var i=t.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var c=`
`+i[o].replace(` at new `,` at `);return e.displayName&&c.includes(`<anonymous>`)&&(c=c.replace(`<anonymous>`,e.displayName)),c}while(1<=o&&0<=s);break}}}finally{ge=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:``)?he(e):``}function ve(e){switch(e.tag){case 5:return he(e.type);case 16:return he(`Lazy`);case 13:return he(`Suspense`);case 19:return he(`SuspenseList`);case 0:case 2:case 15:return e=_e(e.type,!1),e;case 11:return e=_e(e.type.render,!1),e;case 1:return e=_e(e.type,!0),e;default:return``}}function ye(e){if(e==null)return null;if(typeof e==`function`)return e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case te:return`Fragment`;case ee:return`Portal`;case re:return`Profiler`;case ne:return`StrictMode`;case se:return`Suspense`;case ce:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case ae:return(e.displayName||`Context`)+`.Consumer`;case ie:return(e._context.displayName||`Context`)+`.Provider`;case oe:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case le:return t=e.displayName||null,t===null?ye(e.type)||`Memo`:t;case ue:t=e._payload,e=e._init;try{return ye(e(t))}catch{}}return null}function be(e){var t=e.type;switch(e.tag){case 24:return`Cache`;case 9:return(t.displayName||`Context`)+`.Consumer`;case 10:return(t._context.displayName||`Context`)+`.Provider`;case 18:return`DehydratedFragment`;case 11:return e=t.render,e=e.displayName||e.name||``,t.displayName||(e===``?`ForwardRef`:`ForwardRef(`+e+`)`);case 7:return`Fragment`;case 5:return t;case 4:return`Portal`;case 3:return`Root`;case 6:return`Text`;case 16:return ye(t);case 8:return t===ne?`StrictMode`:`Mode`;case 22:return`Offscreen`;case 12:return`Profiler`;case 21:return`Scope`;case 13:return`Suspense`;case 19:return`SuspenseList`;case 25:return`TracingMarker`;case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t==`function`)return t.displayName||t.name||null;if(typeof t==`string`)return t}return null}function xe(e){switch(typeof e){case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Se(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ce(e){var t=Se(e)?`checked`:`value`,n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=``+e[t];if(!e.hasOwnProperty(t)&&n!==void 0&&typeof n.get==`function`&&typeof n.set==`function`){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function we(e){e._valueTracker||=Ce(e)}function Te(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Se(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Ee(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function De(e,t){var n=t.checked;return T({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Oe(e,t){var n=t.defaultValue==null?``:t.defaultValue,r=t.checked==null?t.defaultChecked:t.checked;n=xe(t.value==null?n:t.value),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type===`checkbox`||t.type===`radio`?t.checked!=null:t.value!=null}}function ke(e,t){t=t.checked,t!=null&&S(e,`checked`,t,!1)}function Ae(e,t){ke(e,t);var n=xe(t.value),r=t.type;if(n!=null)r===`number`?(n===0&&e.value===``||e.value!=n)&&(e.value=``+n):e.value!==``+n&&(e.value=``+n);else if(r===`submit`||r===`reset`){e.removeAttribute(`value`);return}t.hasOwnProperty(`value`)?Me(e,t.type,n):t.hasOwnProperty(`defaultValue`)&&Me(e,t.type,xe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function je(e,t,n){if(t.hasOwnProperty(`value`)||t.hasOwnProperty(`defaultValue`)){var r=t.type;if(!(r!==`submit`&&r!==`reset`||t.value!==void 0&&t.value!==null))return;t=``+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==``&&(e.name=``),e.defaultChecked=!!e._wrapperState.initialChecked,n!==``&&(e.name=n)}function Me(e,t,n){(t!==`number`||Ee(e.ownerDocument)!==e)&&(n==null?e.defaultValue=``+e._wrapperState.initialValue:e.defaultValue!==``+n&&(e.defaultValue=``+n))}var Ne=Array.isArray;function Pe(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+xe(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Fe(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return T({},t,{value:void 0,defaultValue:void 0,children:``+e._wrapperState.initialValue})}function Ie(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(r(92));if(Ne(n)){if(1<n.length)throw Error(r(93));n=n[0]}t=n}t??=``,n=t}e._wrapperState={initialValue:xe(n)}}function Le(e,t){var n=xe(t.value),r=xe(t.defaultValue);n!=null&&(n=``+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=``+r)}function Re(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==``&&t!==null&&(e.value=t)}function ze(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`math`:return`http://www.w3.org/1998/Math/MathML`;default:return`http://www.w3.org/1999/xhtml`}}function Be(e,t){return e==null||e===`http://www.w3.org/1999/xhtml`?ze(t):e===`http://www.w3.org/2000/svg`&&t===`foreignObject`?`http://www.w3.org/1999/xhtml`:e}var Ve,He=function(e){return typeof MSApp<`u`&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==`http://www.w3.org/2000/svg`||`innerHTML`in e)e.innerHTML=t;else{for(Ve||=document.createElement(`div`),Ve.innerHTML=`<svg>`+t.valueOf().toString()+`</svg>`,t=Ve.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ue(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var We={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ge=[`Webkit`,`ms`,`Moz`,`O`];Object.keys(We).forEach(function(e){Ge.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),We[t]=We[e]})});function Ke(e,t,n){return t==null||typeof t==`boolean`||t===``?``:n||typeof t!=`number`||t===0||We.hasOwnProperty(e)&&We[e]?(``+t).trim():t+`px`}function qe(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=n.indexOf(`--`)===0,i=Ke(n,t[n],r);n===`float`&&(n=`cssFloat`),r?e.setProperty(n,i):e[n]=i}}var Je=T({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ye(e,t){if(t){if(Je[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!=`object`||!(`__html`in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!=`object`)throw Error(r(62))}}function Xe(e,t){if(e.indexOf(`-`)===-1)return typeof t.is==`string`;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Ze=null;function Qe(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $e=null,et=null,tt=null;function nt(e){if(e=P(e)){if(typeof $e!=`function`)throw Error(r(280));var t=e.stateNode;t&&(t=Xi(t),$e(e.stateNode,e.type,t))}}function rt(e){et?tt?tt.push(e):tt=[e]:et=e}function it(){if(et){var e=et,t=tt;if(tt=et=null,nt(e),t)for(e=0;e<t.length;e++)nt(t[e])}}function at(e,t){return e(t)}function ot(){}var E=!1;function st(e,t,n){if(E)return e(t,n);E=!0;try{return at(e,t,n)}finally{E=!1,(et!==null||tt!==null)&&(ot(),it())}}function ct(e,t){var n=e.stateNode;if(n===null)return null;var i=Xi(n);if(i===null)return null;n=i[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(i=!i.disabled)||(e=e.type,i=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!i;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(r(231,t,typeof n));return n}var lt=!1;if(c)try{var ut={};Object.defineProperty(ut,"passive",{get:function(){lt=!0}}),window.addEventListener(`test`,ut,ut),window.removeEventListener(`test`,ut,ut)}catch{lt=!1}function dt(e,t,n,r,i,a,o,s,c){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(e){this.onError(e)}}var ft=!1,pt=null,mt=!1,ht=null,gt={onError:function(e){ft=!0,pt=e}};function _t(e,t,n,r,i,a,o,s,c){ft=!1,pt=null,dt.apply(gt,arguments)}function vt(e,t,n,i,a,o,s,c,l){if(_t.apply(this,arguments),ft){if(ft){var u=pt;ft=!1,pt=null}else throw Error(r(198));mt||(mt=!0,ht=u)}}function yt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function bt(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function xt(e){if(yt(e)!==e)throw Error(r(188))}function St(e){var t=e.alternate;if(!t){if(t=yt(e),t===null)throw Error(r(188));return t===e?e:null}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return xt(a),e;if(o===i)return xt(a),t;o=o.sibling}throw Error(r(188))}if(n.return!==i.return)n=a,i=o;else{for(var s=!1,c=a.child;c;){if(c===n){s=!0,n=a,i=o;break}if(c===i){s=!0,i=a,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,i=a;break}if(c===i){s=!0,i=o,n=a;break}c=c.sibling}if(!s)throw Error(r(189))}}if(n.alternate!==i)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:t}function Ct(e){return e=St(e),e===null?null:wt(e)}function wt(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=wt(e);if(t!==null)return t;e=e.sibling}return null}var Tt=n.unstable_scheduleCallback,Et=n.unstable_cancelCallback,Dt=n.unstable_shouldYield,Ot=n.unstable_requestPaint,D=n.unstable_now,kt=n.unstable_getCurrentPriorityLevel,At=n.unstable_ImmediatePriority,jt=n.unstable_UserBlockingPriority,Mt=n.unstable_NormalPriority,Nt=n.unstable_LowPriority,Pt=n.unstable_IdlePriority,Ft=null,It=null;function Lt(e){if(It&&typeof It.onCommitFiberRoot==`function`)try{It.onCommitFiberRoot(Ft,e,void 0,(e.current.flags&128)==128)}catch{}}var Rt=Math.clz32?Math.clz32:Vt,zt=Math.log,Bt=Math.LN2;function Vt(e){return e>>>=0,e===0?32:31-(zt(e)/Bt|0)|0}var Ht=64,Ut=4194304;function Wt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Gt(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s===0?(a&=o,a!==0&&(r=Wt(a))):r=Wt(s)}else o=n&~i,o===0?a!==0&&(r=Wt(a)):r=Wt(o);if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===16&&a&4194240))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Rt(t),i=1<<n,r|=e[n],t&=~i;return r}function Kt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qt(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Rt(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Kt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}}function Jt(e){return e=e.pendingLanes&-1073741825,e===0?e&1073741824?1073741824:0:e}function Yt(){var e=Ht;return Ht<<=1,!(Ht&4194240)&&(Ht=64),e}function Xt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zt(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Rt(t),e[t]=n}function Qt(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Rt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function $t(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Rt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var O=0;function en(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var tn,nn,rn,an,on,sn=!1,cn=[],ln=null,un=null,dn=null,k=new Map,fn=new Map,pn=[],mn=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(` `);function hn(e,t){switch(e){case`focusin`:case`focusout`:ln=null;break;case`dragenter`:case`dragleave`:un=null;break;case`mouseover`:case`mouseout`:dn=null;break;case`pointerover`:case`pointerout`:k.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:fn.delete(t.pointerId)}}function gn(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=P(t),t!==null&&nn(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function _n(e,t,n,r,i){switch(t){case`focusin`:return ln=gn(ln,e,t,n,r,i),!0;case`dragenter`:return un=gn(un,e,t,n,r,i),!0;case`mouseover`:return dn=gn(dn,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return k.set(a,gn(k.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,fn.set(a,gn(fn.get(a)||null,e,t,n,r,i)),!0}return!1}function vn(e){var t=Ji(e.target);if(t!==null){var n=yt(t);if(n!==null){if(t=n.tag,t===13){if(t=bt(n),t!==null){e.blockedOn=t,on(e.priority,function(){rn(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=An(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ze=r,n.target.dispatchEvent(r),Ze=null}else return t=P(n),t!==null&&nn(t),e.blockedOn=n,!1;t.shift()}return!0}function bn(e,t,n){yn(e)&&n.delete(t)}function xn(){sn=!1,ln!==null&&yn(ln)&&(ln=null),un!==null&&yn(un)&&(un=null),dn!==null&&yn(dn)&&(dn=null),k.forEach(bn),fn.forEach(bn)}function Sn(e,t){e.blockedOn===t&&(e.blockedOn=null,sn||(sn=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,xn)))}function Cn(e){function t(t){return Sn(t,e)}if(0<cn.length){Sn(cn[0],e);for(var n=1;n<cn.length;n++){var r=cn[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ln!==null&&Sn(ln,e),un!==null&&Sn(un,e),dn!==null&&Sn(dn,e),k.forEach(t),fn.forEach(t),n=0;n<pn.length;n++)r=pn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<pn.length&&(n=pn[0],n.blockedOn===null);)vn(n),n.blockedOn===null&&pn.shift()}var wn=C.ReactCurrentBatchConfig,Tn=!0;function En(e,t,n,r){var i=O,a=wn.transition;wn.transition=null;try{O=1,On(e,t,n,r)}finally{O=i,wn.transition=a}}function Dn(e,t,n,r){var i=O,a=wn.transition;wn.transition=null;try{O=4,On(e,t,n,r)}finally{O=i,wn.transition=a}}function On(e,t,n,r){if(Tn){var i=An(e,t,n,r);if(i===null)xi(e,t,r,kn,n),hn(e,r);else if(_n(i,e,t,n,r))r.stopPropagation();else if(hn(e,r),t&4&&-1<mn.indexOf(e)){for(;i!==null;){var a=P(i);if(a!==null&&tn(a),a=An(e,t,n,r),a===null&&xi(e,t,r,kn,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else xi(e,t,r,null,n)}}var kn=null;function An(e,t,n,r){if(kn=null,e=Qe(r),e=Ji(e),e!==null)if(t=yt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=bt(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return kn=e,null}function jn(e){switch(e){case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 1;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`toggle`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 4;case`message`:switch(kt()){case At:return 1;case jt:return 4;case Mt:case Nt:return 16;case Pt:return 536870912;default:return 16}default:return 16}}var Mn=null,Nn=null,Pn=null;function Fn(){if(Pn)return Pn;var e,t=Nn,n=t.length,r,i=`value`in Mn?Mn.value:Mn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Pn=i.slice(e,1<r?1-r:void 0)}function In(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ln(){return!0}function Rn(){return!1}function zn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Ln:Rn,this.isPropagationStopped=Rn,this}return T(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Ln)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Ln)},persist:function(){},isPersistent:Ln}),t}var Bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vn=zn(Bn),Hn=T({},Bn,{view:0,detail:0}),Un=zn(Hn),Wn,Gn,Kn,qn=T({},Hn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ir,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Kn&&(Kn&&e.type===`mousemove`?(Wn=e.screenX-Kn.screenX,Gn=e.screenY-Kn.screenY):Gn=Wn=0,Kn=e),Wn)},movementY:function(e){return`movementY`in e?e.movementY:Gn}}),Jn=zn(qn),Yn=zn(T({},qn,{dataTransfer:0})),Xn=zn(T({},Hn,{relatedTarget:0})),Zn=zn(T({},Bn,{animationName:0,elapsedTime:0,pseudoElement:0})),Qn=zn(T({},Bn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),$n=zn(T({},Bn,{data:0})),er={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},tr={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},nr={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function rr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=nr[e])?!!t[e]:!1}function ir(){return rr}var ar=zn(T({},Hn,{key:function(e){if(e.key){var t=er[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=In(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?tr[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ir,charCode:function(e){return e.type===`keypress`?In(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?In(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),or=zn(T({},qn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),sr=zn(T({},Hn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ir})),cr=zn(T({},Bn,{propertyName:0,elapsedTime:0,pseudoElement:0})),lr=zn(T({},qn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),ur=[9,13,27,32],dr=c&&`CompositionEvent`in window,fr=null;c&&`documentMode`in document&&(fr=document.documentMode);var pr=c&&`TextEvent`in window&&!fr,mr=c&&(!dr||fr&&8<fr&&11>=fr),hr=` `,gr=!1;function _r(e,t){switch(e){case`keyup`:return ur.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function vr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var yr=!1;function br(e,t){switch(e){case`compositionend`:return vr(t);case`keypress`:return t.which===32?(gr=!0,hr):null;case`textInput`:return e=t.data,e===hr&&gr?null:e;default:return null}}function xr(e,t){if(yr)return e===`compositionend`||!dr&&_r(e,t)?(e=Fn(),Pn=Nn=Mn=null,yr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return mr&&t.locale!==`ko`?null:t.data;default:return null}}var Sr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Sr[e.type]:t===`textarea`}function wr(e,t,n,r){rt(r),t=Ci(t,`onChange`),0<t.length&&(n=new Vn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Tr=null,A=null;function Er(e){_i(e,0)}function Dr(e){if(Te(Yi(e)))return e}function Or(e,t){if(e===`change`)return t}var kr=!1;if(c){var Ar;if(c){var jr=`oninput`in document;if(!jr){var Mr=document.createElement(`div`);Mr.setAttribute(`oninput`,`return;`),jr=typeof Mr.oninput==`function`}Ar=jr}else Ar=!1;kr=Ar&&(!document.documentMode||9<document.documentMode)}function Nr(){Tr&&(Tr.detachEvent(`onpropertychange`,Pr),A=Tr=null)}function Pr(e){if(e.propertyName===`value`&&Dr(A)){var t=[];wr(t,A,e,Qe(e)),st(Er,t)}}function Fr(e,t,n){e===`focusin`?(Nr(),Tr=t,A=n,Tr.attachEvent(`onpropertychange`,Pr)):e===`focusout`&&Nr()}function Ir(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Dr(A)}function Lr(e,t){if(e===`click`)return Dr(t)}function Rr(e,t){if(e===`input`||e===`change`)return Dr(t)}function zr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Br=typeof Object.is==`function`?Object.is:zr;function Vr(e,t){if(Br(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!l.call(t,i)||!Br(e[i],t[i]))return!1}return!0}function Hr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ur(e,t){var n=Hr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Hr(n)}}function Wr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gr(){for(var e=window,t=Ee();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ee(e.document)}return t}function Kr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}function qr(e){var t=Gr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Wr(n.ownerDocument.documentElement,n)){if(r!==null&&Kr(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),`selectionStart`in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Ur(n,a);var o=Ur(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus==`function`&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jr=c&&`documentMode`in document&&11>=document.documentMode,Yr=null,Xr=null,Zr=null,Qr=!1;function $r(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qr||Yr==null||Yr!==Ee(r)||(r=Yr,`selectionStart`in r&&Kr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zr&&Vr(Zr,r)||(Zr=r,r=Ci(Xr,`onSelect`),0<r.length&&(t=new Vn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Yr)))}function ei(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var ti={animationend:ei(`Animation`,`AnimationEnd`),animationiteration:ei(`Animation`,`AnimationIteration`),animationstart:ei(`Animation`,`AnimationStart`),transitionend:ei(`Transition`,`TransitionEnd`)},ni={},ri={};c&&(ri=document.createElement(`div`).style,`AnimationEvent`in window||(delete ti.animationend.animation,delete ti.animationiteration.animation,delete ti.animationstart.animation),`TransitionEvent`in window||delete ti.transitionend.transition);function ii(e){if(ni[e])return ni[e];if(!ti[e])return e;var t=ti[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ri)return ni[e]=t[n];return e}var ai=ii(`animationend`),oi=ii(`animationiteration`),si=ii(`animationstart`),ci=ii(`transitionend`),li=new Map,ui=`abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);function di(e,t){li.set(e,t),o(t,[e])}for(var fi=0;fi<ui.length;fi++){var pi=ui[fi];di(pi.toLowerCase(),`on`+(pi[0].toUpperCase()+pi.slice(1)))}di(ai,`onAnimationEnd`),di(oi,`onAnimationIteration`),di(si,`onAnimationStart`),di(`dblclick`,`onDoubleClick`),di(`focusin`,`onFocus`),di(`focusout`,`onBlur`),di(ci,`onTransitionEnd`),s(`onMouseEnter`,[`mouseout`,`mouseover`]),s(`onMouseLeave`,[`mouseout`,`mouseover`]),s(`onPointerEnter`,[`pointerout`,`pointerover`]),s(`onPointerLeave`,[`pointerout`,`pointerover`]),o(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),o(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),o(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),o(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var mi=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),hi=new Set(`cancel close invalid load scroll toggle`.split(` `).concat(mi));function gi(e,t,n){var r=e.type||`unknown-event`;e.currentTarget=n,vt(r,t,void 0,e),e.currentTarget=null}function _i(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;gi(i,s,l),a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;gi(i,s,l),a=c}}}if(mt)throw e=ht,mt=!1,ht=null,e}function j(e,t){var n=t[Gi];n===void 0&&(n=t[Gi]=new Set);var r=e+`__bubble`;n.has(r)||(bi(t,e,2,!1),n.add(r))}function vi(e,t,n){var r=0;t&&(r|=4),bi(n,e,r,t)}var yi=`_reactListening`+Math.random().toString(36).slice(2);function M(e){if(!e[yi]){e[yi]=!0,i.forEach(function(t){t!==`selectionchange`&&(hi.has(t)||vi(t,!1,e),vi(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[yi]||(t[yi]=!0,vi(`selectionchange`,!1,t))}}function bi(e,t,n,r){switch(jn(t)){case 1:var i=En;break;case 4:i=Dn;break;default:i=On}n=i.bind(null,t,n,e),i=void 0,!lt||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function xi(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Ji(s),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue a}s=s.parentNode}}r=r.return}st(function(){var r=a,i=Qe(n),o=[];a:{var s=li.get(e);if(s!==void 0){var c=Vn,l=e;switch(e){case`keypress`:if(In(n)===0)break a;case`keydown`:case`keyup`:c=ar;break;case`focusin`:l=`focus`,c=Xn;break;case`focusout`:l=`blur`,c=Xn;break;case`beforeblur`:case`afterblur`:c=Xn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Jn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Yn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=sr;break;case ai:case oi:case si:c=Zn;break;case ci:c=cr;break;case`scroll`:c=Un;break;case`wheel`:c=lr;break;case`copy`:case`cut`:case`paste`:c=Qn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=or}var u=(t&4)!=0,d=!u&&e===`scroll`,f=u?s===null?null:s+`Capture`:s;u=[];for(var p=r,m;p!==null;){m=p;var h=m.stateNode;if(m.tag===5&&h!==null&&(m=h,f!==null&&(h=ct(p,f),h!=null&&u.push(Si(p,h,m)))),d)break;p=p.return}0<u.length&&(s=new c(s,l,null,n,i),o.push({event:s,listeners:u}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==Ze&&(l=n.relatedTarget||n.fromElement)&&(Ji(l)||l[Wi]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Ji(l):null,l!==null&&(d=yt(l),l!==d||l.tag!==5&&l.tag!==6)&&(l=null)):(c=null,l=r),c!==l)){if(u=Jn,h=`onMouseLeave`,f=`onMouseEnter`,p=`mouse`,(e===`pointerout`||e===`pointerover`)&&(u=or,h=`onPointerLeave`,f=`onPointerEnter`,p=`pointer`),d=c==null?s:Yi(c),m=l==null?s:Yi(l),s=new u(h,p+`leave`,c,n,i),s.target=d,s.relatedTarget=m,h=null,Ji(i)===r&&(u=new u(f,p+`enter`,l,n,i),u.target=m,u.relatedTarget=d,h=u),d=h,c&&l)b:{for(u=c,f=l,p=0,m=u;m;m=N(m))p++;for(m=0,h=f;h;h=N(h))m++;for(;0<p-m;)u=N(u),p--;for(;0<m-p;)f=N(f),m--;for(;p--;){if(u===f||f!==null&&u===f.alternate)break b;u=N(u),f=N(f)}u=null}else u=null;c!==null&&wi(o,s,c,u,!1),l!==null&&d!==null&&wi(o,d,l,u,!0)}}a:{if(s=r?Yi(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var g=Or;else if(Cr(s))if(kr)g=Rr;else{g=Ir;var _=Fr}else (c=s.nodeName)&&c.toLowerCase()===`input`&&(s.type===`checkbox`||s.type===`radio`)&&(g=Lr);if(g&&=g(e,r)){wr(o,g,n,i);break a}_&&_(e,s,r),e===`focusout`&&(_=s._wrapperState)&&_.controlled&&s.type===`number`&&Me(s,`number`,s.value)}switch(_=r?Yi(r):window,e){case`focusin`:(Cr(_)||_.contentEditable===`true`)&&(Yr=_,Xr=r,Zr=null);break;case`focusout`:Zr=Xr=Yr=null;break;case`mousedown`:Qr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Qr=!1,$r(o,n,i);break;case`selectionchange`:if(Jr)break;case`keydown`:case`keyup`:$r(o,n,i)}var v;if(dr)b:{switch(e){case`compositionstart`:var y=`onCompositionStart`;break b;case`compositionend`:y=`onCompositionEnd`;break b;case`compositionupdate`:y=`onCompositionUpdate`;break b}y=void 0}else yr?_r(e,n)&&(y=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(y=`onCompositionStart`);y&&(mr&&n.locale!==`ko`&&(yr||y!==`onCompositionStart`?y===`onCompositionEnd`&&yr&&(v=Fn()):(Mn=i,Nn=`value`in Mn?Mn.value:Mn.textContent,yr=!0)),_=Ci(r,y),0<_.length&&(y=new $n(y,e,null,n,i),o.push({event:y,listeners:_}),v?y.data=v:(v=vr(n),v!==null&&(y.data=v)))),(v=pr?br(e,n):xr(e,n))&&(r=Ci(r,`onBeforeInput`),0<r.length&&(i=new $n(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:i,listeners:r}),i.data=v))}_i(o,t)})}function Si(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ci(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=ct(e,n),a!=null&&r.unshift(Si(e,a,i)),a=ct(e,t),a!=null&&r.push(Si(e,a,i))),e=e.return}return r}function N(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wi(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&l!==null&&(s=l,i?(c=ct(n,a),c!=null&&o.unshift(Si(n,c,s))):i||(c=ct(n,a),c!=null&&o.push(Si(n,c,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ti=/\r\n?/g,Ei=/\u0000|\uFFFD/g;function Di(e){return(typeof e==`string`?e:``+e).replace(Ti,`
`).replace(Ei,``)}function Oi(e,t,n){if(t=Di(t),Di(e)!==t&&n)throw Error(r(425))}function ki(){}var Ai=null,ji=null;function Mi(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ni=typeof setTimeout==`function`?setTimeout:void 0,Pi=typeof clearTimeout==`function`?clearTimeout:void 0,Fi=typeof Promise==`function`?Promise:void 0,Ii=typeof queueMicrotask==`function`?queueMicrotask:Fi===void 0?Ni:function(e){return Fi.resolve(null).then(e).catch(Li)};function Li(e){setTimeout(function(){throw e})}function Ri(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`){if(r===0){e.removeChild(i),Cn(t);return}r--}else n!==`$`&&n!==`$?`&&n!==`$!`||r++;n=i}while(n);Cn(t)}function zi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`)break;if(t===`/$`)return null}}return e}function Bi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`){if(t===0)return e;t--}else n===`/$`&&t++}e=e.previousSibling}return null}var Vi=Math.random().toString(36).slice(2),Hi=`__reactFiber$`+Vi,Ui=`__reactProps$`+Vi,Wi=`__reactContainer$`+Vi,Gi=`__reactEvents$`+Vi,Ki=`__reactListeners$`+Vi,qi=`__reactHandles$`+Vi;function Ji(e){var t=e[Hi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Wi]||n[Hi]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Bi(e);e!==null;){if(n=e[Hi])return n;e=Bi(e)}return t}e=n,n=e.parentNode}return null}function P(e){return e=e[Hi]||e[Wi],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function Xi(e){return e[Ui]||null}var Zi=[],Qi=-1;function $i(e){return{current:e}}function F(e){0>Qi||(e.current=Zi[Qi],Zi[Qi]=null,Qi--)}function I(e,t){Qi++,Zi[Qi]=e.current,e.current=t}var L={},ea=$i(L),ta=$i(!1),na=L;function ra(e,t){var n=e.type.contextTypes;if(!n)return L;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ia(e){return e=e.childContextTypes,e!=null}function aa(){F(ta),F(ea)}function oa(e,t,n){if(ea.current!==L)throw Error(r(168));I(ea,t),I(ta,n)}function sa(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!=`function`)return n;for(var a in i=i.getChildContext(),i)if(!(a in t))throw Error(r(108,be(e)||`Unknown`,a));return T({},n,i)}function ca(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||L,na=ea.current,I(ea,e),I(ta,ta.current),!0}function la(e,t,n){var i=e.stateNode;if(!i)throw Error(r(169));n?(e=sa(e,t,na),i.__reactInternalMemoizedMergedChildContext=e,F(ta),F(ea),I(ea,e)):F(ta),I(ta,n)}var ua=null,da=!1,fa=!1;function pa(e){ua===null?ua=[e]:ua.push(e)}function ma(e){da=!0,pa(e)}function ha(){if(!fa&&ua!==null){fa=!0;var e=0,t=O;try{var n=ua;for(O=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ua=null,da=!1}catch(t){throw ua!==null&&(ua=ua.slice(e+1)),Tt(At,ha),t}finally{O=t,fa=!1}}return null}var ga=[],_a=0,va=null,ya=0,ba=[],xa=0,Sa=null,R=1,Ca=``;function wa(e,t){ga[_a++]=ya,ga[_a++]=va,va=e,ya=t}function Ta(e,t,n){ba[xa++]=R,ba[xa++]=Ca,ba[xa++]=Sa,Sa=e;var r=R;e=Ca;var i=32-Rt(r)-1;r&=~(1<<i),n+=1;var a=32-Rt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,R=1<<32-Rt(t)+i|n<<i|r,Ca=a+e}else R=1<<a|n<<i|r,Ca=e}function Ea(e){e.return!==null&&(wa(e,1),Ta(e,1,0))}function Da(e){for(;e===va;)va=ga[--_a],ga[_a]=null,ya=ga[--_a],ga[_a]=null;for(;e===Sa;)Sa=ba[--xa],ba[xa]=null,Ca=ba[--xa],ba[xa]=null,R=ba[--xa],ba[xa]=null}var Oa=null,ka=null,z=!1,Aa=null;function ja(e,t){var n=ql(5,null,null,0);n.elementType=`DELETED`,n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ma(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t===null?!1:(e.stateNode=t,Oa=e,ka=zi(t.firstChild),!0);case 6:return t=e.pendingProps===``||t.nodeType!==3?null:t,t===null?!1:(e.stateNode=t,Oa=e,ka=null,!0);case 13:return t=t.nodeType===8?t:null,t===null?!1:(n=Sa===null?null:{id:R,overflow:Ca},e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ql(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Oa=e,ka=null,!0);default:return!1}}function Na(e){return(e.mode&1)!=0&&(e.flags&128)==0}function Pa(e){if(z){var t=ka;if(t){var n=t;if(!Ma(e,t)){if(Na(e))throw Error(r(418));t=zi(n.nextSibling);var i=Oa;t&&Ma(e,t)?ja(i,n):(e.flags=e.flags&-4097|2,z=!1,Oa=e)}}else{if(Na(e))throw Error(r(418));e.flags=e.flags&-4097|2,z=!1,Oa=e}}}function Fa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Oa=e}function Ia(e){if(e!==Oa)return!1;if(!z)return Fa(e),z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!==`head`&&t!==`body`&&!Mi(e.type,e.memoizedProps)),t&&=ka){if(Na(e))throw La(),Error(r(418));for(;t;)ja(e,t),t=zi(t.nextSibling)}if(Fa(e),e.tag===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(r(317));a:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`){if(t===0){ka=zi(e.nextSibling);break a}t--}else n!==`$`&&n!==`$!`&&n!==`$?`||t++}e=e.nextSibling}ka=null}}else ka=Oa?zi(e.stateNode.nextSibling):null;return!0}function La(){for(var e=ka;e;)e=zi(e.nextSibling)}function Ra(){ka=Oa=null,z=!1}function za(e){Aa===null?Aa=[e]:Aa.push(e)}var Ba=C.ReactCurrentBatchConfig;function Va(e,t,n){if(e=n.ref,e!==null&&typeof e!=`function`&&typeof e!=`object`){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(r(309));var i=n.stateNode}if(!i)throw Error(r(147,e));var a=i,o=``+e;return t!==null&&t.ref!==null&&typeof t.ref==`function`&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;e===null?delete t[o]:t[o]=e},t._stringRef=o,t)}if(typeof e!=`string`)throw Error(r(284));if(!n._owner)throw Error(r(290,e))}return e}function B(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e))}function Ha(e){var t=e._init;return t(e._payload)}function Ua(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function i(e,t){for(e=new Map;t!==null;)t.key===null?e.set(t.index,t):e.set(t.key,t),t=t.sibling;return e}function a(e,t){return e=Xl(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=2,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=2),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=eu(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===te?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===ue&&Ha(i)===t.type)?(r=a(t,n.props),r.ref=Va(e,t,n),r.return=e,r):(r=Zl(n.type,n.key,n.props,null,e.mode,r),r.ref=Va(e,t,n),r.return=e,r)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=tu(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Ql(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`)return t=eu(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case w:return n=Zl(t.type,t.key,t.props,null,e.mode,n),n.ref=Va(e,null,t),n.return=e,n;case ee:return t=tu(t,e.mode,n),t.return=e,t;case ue:var r=t._init;return f(e,r(t._payload),n)}if(Ne(t)||pe(t))return t=Ql(t,e.mode,n,null),t.return=e,t;B(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case w:return n.key===i?l(e,t,n,r):null;case ee:return n.key===i?u(e,t,n,r):null;case ue:return i=n._init,p(e,t,i(n._payload),r)}if(Ne(n)||pe(n))return i===null?d(e,t,n,r,null):null;B(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case w:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case ee:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ue:var a=r._init;return m(e,t,n,a(r._payload),i)}if(Ne(r)||pe(r))return e=e.get(n)||null,d(t,e,r,i,null);B(t,r)}return null}function h(r,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(r,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(r,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(r,d),z&&wa(r,h),l;if(d===null){for(;h<s.length;h++)d=f(r,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return z&&wa(r,h),l}for(d=i(r,d);h<s.length;h++)g=m(d,r,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(r,e)}),z&&wa(r,h),l}function g(a,s,c,l){var u=pe(c);if(typeof u!=`function`)throw Error(r(150));if(c=u.call(c),c==null)throw Error(r(151));for(var d=u=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),z&&wa(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return z&&wa(a,g),u}for(h=i(a,h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),z&&wa(a,g),u}function _(e,r,i,o){if(typeof i==`object`&&i&&i.type===te&&i.key===null&&(i=i.props.children),typeof i==`object`&&i){switch(i.$$typeof){case w:a:{for(var c=i.key,l=r;l!==null;){if(l.key===c){if(c=i.type,c===te){if(l.tag===7){n(e,l.sibling),r=a(l,i.props.children),r.return=e,e=r;break a}}else if(l.elementType===c||typeof c==`object`&&c&&c.$$typeof===ue&&Ha(c)===l.type){n(e,l.sibling),r=a(l,i.props),r.ref=Va(e,l,i),r.return=e,e=r;break a}n(e,l);break}else t(e,l);l=l.sibling}i.type===te?(r=Ql(i.props.children,e.mode,o,i.key),r.return=e,e=r):(o=Zl(i.type,i.key,i.props,null,e.mode,o),o.ref=Va(e,r,i),o.return=e,e=o)}return s(e);case ee:a:{for(l=i.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===i.containerInfo&&r.stateNode.implementation===i.implementation){n(e,r.sibling),r=a(r,i.children||[]),r.return=e,e=r;break a}else{n(e,r);break}else t(e,r);r=r.sibling}r=tu(i,e.mode,o),r.return=e,e=r}return s(e);case ue:return l=i._init,_(e,r,l(i._payload),o)}if(Ne(i))return h(e,r,i,o);if(pe(i))return g(e,r,i,o);B(e,i)}return typeof i==`string`&&i!==``||typeof i==`number`?(i=``+i,r!==null&&r.tag===6?(n(e,r.sibling),r=a(r,i),r.return=e,e=r):(n(e,r),r=eu(i,e.mode,o),r.return=e,e=r),s(e)):n(e,r)}return _}var Wa=Ua(!0),Ga=Ua(!1),Ka=$i(null),qa=null,Ja=null,Ya=null;function Xa(){Ya=Ja=qa=null}function Za(e){var t=Ka.current;F(Ka),e._currentValue=t}function Qa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function $a(e,t){qa=e,Ya=Ja=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Rs=!0),e.firstContext=null)}function eo(e){var t=e._currentValue;if(Ya!==e)if(e={context:e,memoizedValue:t,next:null},Ja===null){if(qa===null)throw Error(r(308));Ja=e,qa.dependencies={lanes:0,firstContext:e}}else Ja=Ja.next=e;return t}var to=null;function no(e){to===null?to=[e]:to.push(e)}function ro(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,no(t)):(n.next=i.next,i.next=n),t.interleaved=n,io(e,r)}function io(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ao=!1;function oo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function so(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function co(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function lo(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,io(e,n)}return i=r.interleaved,i===null?(t.next=t,no(r)):(t.next=i.next,i.next=t),r.interleaved=t,io(e,n)}function uo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194240)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$t(e,n)}}function fo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function po(e,t,n,r){var i=e.updateQueue;ao=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane,p=s.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});a:{var m=e,h=s;switch(f=t,p=n,h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(p,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(p,d,f):m,f==null)break a;d=T({},d,f);break a;case 2:ao=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Zc|=o,e.lanes=o,e.memoizedState=d}}function mo(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(a!==null){if(i.callback=null,i=n,typeof a!=`function`)throw Error(r(191,a));a.call(i)}}}var ho={},go=$i(ho),_o=$i(ho),vo=$i(ho);function yo(e){if(e===ho)throw Error(r(174));return e}function bo(e,t){switch(I(vo,t),I(_o,e),I(go,ho),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Be(null,``);break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Be(t,e)}F(go),I(go,t)}function xo(){F(go),F(_o),F(vo)}function So(e){yo(vo.current);var t=yo(go.current),n=Be(t,e.type);t!==n&&(I(_o,e),I(go,n))}function Co(e){_o.current===e&&(F(go),F(_o))}var V=$i(0);function wo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===`$?`||n.data===`$!`))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var To=[];function Eo(){for(var e=0;e<To.length;e++)To[e]._workInProgressVersionPrimary=null;To.length=0}var Do=C.ReactCurrentDispatcher,Oo=C.ReactCurrentBatchConfig,ko=0,H=null,U=null,Ao=null,jo=!1,Mo=!1,No=0,W=0;function Po(){throw Error(r(321))}function Fo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Br(e[n],t[n]))return!1;return!0}function Io(e,t,n,i,a,o){if(ko=o,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Do.current=e===null||e.memoizedState===null?vs:ys,e=n(i,a),Mo){o=0;do{if(Mo=!1,No=0,25<=o)throw Error(r(301));o+=1,Ao=U=null,t.updateQueue=null,Do.current=bs,e=n(i,a)}while(Mo)}if(Do.current=_s,t=U!==null&&U.next!==null,ko=0,Ao=U=H=null,jo=!1,t)throw Error(r(300));return e}function Lo(){var e=No!==0;return No=0,e}function Ro(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ao===null?H.memoizedState=Ao=e:Ao=Ao.next=e,Ao}function zo(){if(U===null){var e=H.alternate;e=e===null?null:e.memoizedState}else e=U.next;var t=Ao===null?H.memoizedState:Ao.next;if(t!==null)Ao=t,U=e;else{if(e===null)throw Error(r(310));U=e,e={memoizedState:U.memoizedState,baseState:U.baseState,baseQueue:U.baseQueue,queue:U.queue,next:null},Ao===null?H.memoizedState=Ao=e:Ao=Ao.next=e}return Ao}function Bo(e,t){return typeof t==`function`?t(e):t}function Vo(e){var t=zo(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=U,a=i.baseQueue,o=n.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}i.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,i=i.baseState;var c=s=null,l=null,u=o;do{var d=u.lane;if((ko&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(c=l=f,s=i):l=l.next=f,H.lanes|=d,Zc|=d}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=c,Br(i,t.memoizedState)||(Rs=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=l,n.lastRenderedState=i}if(e=n.interleaved,e!==null){a=e;do o=a.lane,H.lanes|=o,Zc|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ho(e){var t=zo(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Br(o,t.memoizedState)||(Rs=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function Uo(){}function Wo(e,t){var n=H,i=zo(),a=t(),o=!Br(i.memoizedState,a);if(o&&(i.memoizedState=a,Rs=!0),i=i.queue,ts(qo.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||Ao!==null&&Ao.memoizedState.tag&1){if(n.flags|=2048,Zo(9,Ko.bind(null,n,i,a,t),void 0,null),Y===null)throw Error(r(349));ko&30||Go(n,t,a)}return a}function Go(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ko(e,t,n,r){t.value=n,t.getSnapshot=r,Jo(t)&&Yo(e)}function qo(e,t,n){return n(function(){Jo(t)&&Yo(e)})}function Jo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Br(e,n)}catch{return!0}}function Yo(e){var t=io(e,1);t!==null&&_l(t,e,1,-1)}function Xo(e){var t=Ro();return typeof e==`function`&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:e},t.queue=e,e=e.dispatch=ps.bind(null,H,e),[t.memoizedState,e]}function Zo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Qo(){return zo().memoizedState}function $o(e,t,n,r){var i=Ro();H.flags|=e,i.memoizedState=Zo(1|t,n,void 0,r===void 0?null:r)}function G(e,t,n,r){var i=zo();r=r===void 0?null:r;var a=void 0;if(U!==null){var o=U.memoizedState;if(a=o.destroy,r!==null&&Fo(r,o.deps)){i.memoizedState=Zo(t,n,a,r);return}}H.flags|=e,i.memoizedState=Zo(1|t,n,a,r)}function es(e,t){return $o(8390656,8,e,t)}function ts(e,t){return G(2048,8,e,t)}function ns(e,t){return G(4,2,e,t)}function rs(e,t){return G(4,4,e,t)}function is(e,t){if(typeof t==`function`)return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function as(e,t,n){return n=n==null?null:n.concat([e]),G(4,4,is.bind(null,t,e),n)}function os(){}function ss(e,t){var n=zo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function cs(e,t){var n=zo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ls(e,t,n){return ko&21?(Br(n,t)||(n=Yt(),H.lanes|=n,Zc|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Rs=!0),e.memoizedState=n)}function us(e,t){var n=O;O=n!==0&&4>n?n:4,e(!0);var r=Oo.transition;Oo.transition={};try{e(!1),t()}finally{O=n,Oo.transition=r}}function ds(){return zo().memoizedState}function fs(e,t,n){var r=gl(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ms(e))hs(t,n);else if(n=ro(e,t,n,r),n!==null){var i=hl();_l(n,e,r,i),gs(n,t,r)}}function ps(e,t,n){var r=gl(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ms(e))hs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Br(s,o)){var c=t.interleaved;c===null?(i.next=i,no(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}n=ro(e,t,i,r),n!==null&&(i=hl(),_l(n,e,r,i),gs(n,t,r))}}function ms(e){var t=e.alternate;return e===H||t!==null&&t===H}function hs(e,t){Mo=jo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function gs(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$t(e,n)}}var _s={readContext:eo,useCallback:Po,useContext:Po,useEffect:Po,useImperativeHandle:Po,useInsertionEffect:Po,useLayoutEffect:Po,useMemo:Po,useReducer:Po,useRef:Po,useState:Po,useDebugValue:Po,useDeferredValue:Po,useTransition:Po,useMutableSource:Po,useSyncExternalStore:Po,useId:Po,unstable_isNewReconciler:!1},vs={readContext:eo,useCallback:function(e,t){return Ro().memoizedState=[e,t===void 0?null:t],e},useContext:eo,useEffect:es,useImperativeHandle:function(e,t,n){return n=n==null?null:n.concat([e]),$o(4194308,4,is.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $o(4194308,4,e,t)},useInsertionEffect:function(e,t){return $o(4,2,e,t)},useMemo:function(e,t){var n=Ro();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ro();return t=n===void 0?t:n(t),r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=fs.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=Ro();return e={current:e},t.memoizedState=e},useState:Xo,useDebugValue:os,useDeferredValue:function(e){return Ro().memoizedState=e},useTransition:function(){var e=Xo(!1),t=e[0];return e=us.bind(null,e[1]),Ro().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=H,a=Ro();if(z){if(n===void 0)throw Error(r(407));n=n()}else{if(n=t(),Y===null)throw Error(r(349));ko&30||Go(i,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,es(qo.bind(null,i,o,e),[e]),i.flags|=2048,Zo(9,Ko.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=Ro(),t=Y.identifierPrefix;if(z){var n=Ca,r=R;n=(r&~(1<<32-Rt(r)-1)).toString(32)+n,t=`:`+t+`R`+n,n=No++,0<n&&(t+=`H`+n.toString(32)),t+=`:`}else n=W++,t=`:`+t+`r`+n.toString(32)+`:`;return e.memoizedState=t},unstable_isNewReconciler:!1},ys={readContext:eo,useCallback:ss,useContext:eo,useEffect:ts,useImperativeHandle:as,useInsertionEffect:ns,useLayoutEffect:rs,useMemo:cs,useReducer:Vo,useRef:Qo,useState:function(){return Vo(Bo)},useDebugValue:os,useDeferredValue:function(e){return ls(zo(),U.memoizedState,e)},useTransition:function(){return[Vo(Bo)[0],zo().memoizedState]},useMutableSource:Uo,useSyncExternalStore:Wo,useId:ds,unstable_isNewReconciler:!1},bs={readContext:eo,useCallback:ss,useContext:eo,useEffect:ts,useImperativeHandle:as,useInsertionEffect:ns,useLayoutEffect:rs,useMemo:cs,useReducer:Ho,useRef:Qo,useState:function(){return Ho(Bo)},useDebugValue:os,useDeferredValue:function(e){var t=zo();return U===null?t.memoizedState=e:ls(t,U.memoizedState,e)},useTransition:function(){return[Ho(Bo)[0],zo().memoizedState]},useMutableSource:Uo,useSyncExternalStore:Wo,useId:ds,unstable_isNewReconciler:!1};function xs(e,t){if(e&&e.defaultProps){for(var n in t=T({},t),e=e.defaultProps,e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ss(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:T({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Cs={isMounted:function(e){return(e=e._reactInternals)?yt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=hl(),i=gl(e),a=co(r,i);a.payload=t,n!=null&&(a.callback=n),t=lo(e,a,i),t!==null&&(_l(t,e,i,r),uo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=hl(),i=gl(e),a=co(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=lo(e,a,i),t!==null&&(_l(t,e,i,r),uo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=hl(),r=gl(e),i=co(n,r);i.tag=2,t!=null&&(i.callback=t),t=lo(e,i,r),t!==null&&(_l(t,e,r,n),uo(t,e,r))}};function ws(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Vr(n,r)||!Vr(i,a):!0}function Ts(e,t,n){var r=!1,i=L,a=t.contextType;return typeof a==`object`&&a?a=eo(a):(i=ia(t)?na:ea.current,r=t.contextTypes,a=(r=r!=null)?ra(e,i):L),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Cs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Es(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Cs.enqueueReplaceState(t,t.state,null)}function Ds(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},oo(e);var a=t.contextType;typeof a==`object`&&a?i.context=eo(a):(a=ia(t)?na:ea.current,i.context=ra(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a==`function`&&(Ss(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps==`function`||typeof i.getSnapshotBeforeUpdate==`function`||typeof i.UNSAFE_componentWillMount!=`function`&&typeof i.componentWillMount!=`function`||(t=i.state,typeof i.componentWillMount==`function`&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount==`function`&&i.UNSAFE_componentWillMount(),t!==i.state&&Cs.enqueueReplaceState(i,i.state,null),po(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount==`function`&&(e.flags|=4194308)}function Os(e,t){try{var n=``,r=t;do n+=ve(r),r=r.return;while(r);var i=n}catch(e){i=`
Error generating stack: `+e.message+`
`+e.stack}return{value:e,source:t,stack:i,digest:null}}function ks(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function As(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var js=typeof WeakMap==`function`?WeakMap:Map;function Ms(e,t,n){n=co(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){al||(al=!0,ol=r),As(e,t)},n}function Ns(e,t,n){n=co(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r==`function`){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){As(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch==`function`&&(n.callback=function(){As(e,t),typeof r!=`function`&&(sl===null?sl=new Set([this]):sl.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n===null?``:n})}),n}function Ps(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new js;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Bl.bind(null,e,t,n),t.then(e,e))}function Fs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t===null?!0:t.dehydrated!==null),t)return e;e=e.return}while(e!==null);return null}function Is(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=co(-1,1),t.tag=2,lo(n,t,1))),n.lanes|=1),e)}var Ls=C.ReactCurrentOwner,Rs=!1;function zs(e,t,n,r){t.child=e===null?Ga(t,null,n,r):Wa(t,e.child,n,r)}function Bs(e,t,n,r,i){n=n.render;var a=t.ref;return $a(t,i),r=Io(e,t,n,r,a,i),n=Lo(),e!==null&&!Rs?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,oc(e,t,i)):(z&&n&&Ea(t),t.flags|=1,zs(e,t,r,i),t.child)}function Vs(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Jl(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Hs(e,t,a,r,i)):(e=Zl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var o=a.memoizedProps;if(n=n.compare,n=n===null?Vr:n,n(o,r)&&e.ref===t.ref)return oc(e,t,i)}return t.flags|=1,e=Xl(a,r),e.ref=t.ref,e.return=t,t.child=e}function Hs(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Vr(a,r)&&e.ref===t.ref)if(Rs=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Rs=!0);else return t.lanes=e.lanes,oc(e,t,i)}return Gs(e,t,n,r,i)}function Us(e,t,n){var r=t.pendingProps,i=r.children,a=e===null?null:e.memoizedState;if(r.mode===`hidden`)if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(Jc,qc),qc|=n;else{if(!(n&1073741824))return e=a===null?n:a.baseLanes|n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,I(Jc,qc),qc|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a===null?n:a.baseLanes,I(Jc,qc),qc|=r}else a===null?r=n:(r=a.baseLanes|n,t.memoizedState=null),I(Jc,qc),qc|=r;return zs(e,t,i,n),t.child}function Ws(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Gs(e,t,n,r,i){var a=ia(n)?na:ea.current;return a=ra(t,a),$a(t,i),n=Io(e,t,n,r,a,i),r=Lo(),e!==null&&!Rs?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,oc(e,t,i)):(z&&r&&Ea(t),t.flags|=1,zs(e,t,n,i),t.child)}function Ks(e,t,n,r,i){if(ia(n)){var a=!0;ca(t)}else a=!1;if($a(t,i),t.stateNode===null)ac(e,t),Ts(t,n,r),Ds(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,l=n.contextType;typeof l==`object`&&l?l=eo(l):(l=ia(n)?na:ea.current,l=ra(t,l));var u=n.getDerivedStateFromProps,d=typeof u==`function`||typeof o.getSnapshotBeforeUpdate==`function`;d||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==r||c!==l)&&Es(t,o,r,l),ao=!1;var f=t.memoizedState;o.state=f,po(t,r,o,i),c=t.memoizedState,s!==r||f!==c||ta.current||ao?(typeof u==`function`&&(Ss(t,n,u,r),c=t.memoizedState),(s=ao||ws(t,n,s,r,f,c,l))?(d||typeof o.UNSAFE_componentWillMount!=`function`&&typeof o.componentWillMount!=`function`||(typeof o.componentWillMount==`function`&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==`function`&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount==`function`&&(t.flags|=4194308)):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=l,r=s):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,so(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:xs(t.type,s),o.props=l,d=t.pendingProps,f=o.context,c=n.contextType,typeof c==`object`&&c?c=eo(c):(c=ia(n)?na:ea.current,c=ra(t,c));var p=n.getDerivedStateFromProps;(u=typeof p==`function`||typeof o.getSnapshotBeforeUpdate==`function`)||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==d||f!==c)&&Es(t,o,r,c),ao=!1,f=t.memoizedState,o.state=f,po(t,r,o,i);var m=t.memoizedState;s!==d||f!==m||ta.current||ao?(typeof p==`function`&&(Ss(t,n,p,r),m=t.memoizedState),(l=ao||ws(t,n,l,r,f,m,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!=`function`&&typeof o.componentWillUpdate!=`function`||(typeof o.componentWillUpdate==`function`&&o.componentWillUpdate(r,m,c),typeof o.UNSAFE_componentWillUpdate==`function`&&o.UNSAFE_componentWillUpdate(r,m,c)),typeof o.componentDidUpdate==`function`&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=c,r=l):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return qs(e,t,n,r,a,i)}function qs(e,t,n,r,i,a){Ws(e,t);var o=(t.flags&128)!=0;if(!r&&!o)return i&&la(t,n,!1),oc(e,t,a);r=t.stateNode,Ls.current=t;var s=o&&typeof n.getDerivedStateFromError!=`function`?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Wa(t,e.child,null,a),t.child=Wa(t,null,s,a)):zs(e,t,s,a),t.memoizedState=r.state,i&&la(t,n,!0),t.child}function Js(e){var t=e.stateNode;t.pendingContext?oa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&oa(e,t.context,!1),bo(e,t.containerInfo)}function Ys(e,t,n,r,i){return Ra(),za(i),t.flags|=256,zs(e,t,n,r),t.child}var Xs={dehydrated:null,treeContext:null,retryLane:0};function Zs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qs(e,t,n){var r=t.pendingProps,i=V.current,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!=0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),I(V,i&1),e===null)return Pa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data===`$!`?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:`hidden`,children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=$l(o,r,0,null),e=Ql(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Zs(n),t.memoizedState=Xs,e):$s(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return tc(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var c={mode:`hidden`,children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Xl(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s===null?(a=Ql(a,o,n,null),a.flags|=2):a=Xl(s,a),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Zs(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Xs,r}return a=e.child,e=a.sibling,r=Xl(a,{mode:`visible`,children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function $s(e,t){return t=$l({mode:`visible`,children:t},e.mode,0,null),t.return=e,e.child=t}function ec(e,t,n,r){return r!==null&&za(r),Wa(t,e.child,null,n),e=$s(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function tc(e,t,n,i,a,o,s){if(n)return t.flags&256?(t.flags&=-257,i=ks(Error(r(422))),ec(e,t,s,i)):t.memoizedState===null?(o=i.fallback,a=t.mode,i=$l({mode:`visible`,children:i.children},a,0,null),o=Ql(o,a,s,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&Wa(t,e.child,null,s),t.child.memoizedState=Zs(s),t.memoizedState=Xs,o):(t.child=e.child,t.flags|=128,null);if(!(t.mode&1))return ec(e,t,s,null);if(a.data===`$!`){if(i=a.nextSibling&&a.nextSibling.dataset,i)var c=i.dgst;return i=c,o=Error(r(419)),i=ks(o,i,void 0),ec(e,t,s,i)}if(c=(s&e.childLanes)!==0,Rs||c){if(i=Y,i!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(i.suspendedLanes|s))===0?a:0,a!==0&&a!==o.retryLane&&(o.retryLane=a,io(e,a),_l(i,e,a,-1))}return Al(),i=ks(Error(r(421))),ec(e,t,s,i)}return a.data===`$?`?(t.flags|=128,t.child=e.child,t=Hl.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,ka=zi(a.nextSibling),Oa=t,z=!0,Aa=null,e!==null&&(ba[xa++]=R,ba[xa++]=Ca,ba[xa++]=Sa,R=e.id,Ca=e.overflow,Sa=t),t=$s(t,i.children),t.flags|=4096,t)}function nc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qa(e.return,t,n)}function rc(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function ic(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(zs(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nc(e,n,t);else if(e.tag===19)nc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(I(V,r),!(t.mode&1))t.memoizedState=null;else switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&wo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),rc(t,!1,i,n,a);break;case`backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&wo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}rc(t,!0,n,null,a);break;case`together`:rc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ac(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function oc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Zc|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,n=Xl(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Xl(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sc(e,t,n){switch(t.tag){case 3:Js(t),Ra();break;case 5:So(t);break;case 1:ia(t.type)&&ca(t);break;case 4:bo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;I(Ka,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(I(V,V.current&1),e=oc(e,t,n),e===null?null:e.sibling):Qs(e,t,n):(I(V,V.current&1),t.flags|=128,null);I(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ic(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),I(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,Us(e,t,n)}return oc(e,t,n)}var cc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},lc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,yo(go.current);var o=null;switch(n){case`input`:i=De(e,i),r=De(e,r),o=[];break;case`select`:i=T({},i,{value:void 0}),r=T({},r,{value:void 0}),o=[];break;case`textarea`:i=Fe(e,i),r=Fe(e,r),o=[];break;default:typeof i.onClick!=`function`&&typeof r.onClick==`function`&&(e.onclick=ki)}Ye(n,r);var s;for(u in n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u===`style`){var c=i[u];for(s in c)c.hasOwnProperty(s)&&(n||={},n[s]=``)}else u!==`dangerouslySetInnerHTML`&&u!==`children`&&u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&u!==`autoFocus`&&(a.hasOwnProperty(u)?o||=[]:(o||=[]).push(u,null));for(u in r){var l=r[u];if(c=i?.[u],r.hasOwnProperty(u)&&l!==c&&(l!=null||c!=null))if(u===`style`)if(c){for(s in c)!c.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||={},n[s]=``);for(s in l)l.hasOwnProperty(s)&&c[s]!==l[s]&&(n||={},n[s]=l[s])}else n||(o||=[],o.push(u,n)),n=l;else u===`dangerouslySetInnerHTML`?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(o||=[]).push(u,l)):u===`children`?typeof l!=`string`&&typeof l!=`number`||(o||=[]).push(u,``+l):u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&(a.hasOwnProperty(u)?(l!=null&&u===`onScroll`&&j(`scroll`,e),o||c===l||(o=[])):(o||=[]).push(u,l))}n&&(o||=[]).push(`style`,n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},uc=function(e,t,n,r){n!==r&&(t.flags|=4)};function dc(e,t){if(!z)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function fc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function pc(e,t,n){var i=t.pendingProps;switch(Da(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fc(t),null;case 1:return ia(t.type)&&aa(),fc(t),null;case 3:return i=t.stateNode,xo(),F(ta),F(ea),Eo(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Ia(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Aa!==null&&(xl(Aa),Aa=null))),fc(t),null;case 5:Co(t);var o=yo(vo.current);if(n=t.type,e!==null&&t.stateNode!=null)lc(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(r(166));return fc(t),null}if(e=yo(go.current),Ia(t)){i=t.stateNode,n=t.type;var s=t.memoizedProps;switch(i[Hi]=t,i[Ui]=s,e=(t.mode&1)!=0,n){case`dialog`:j(`cancel`,i),j(`close`,i);break;case`iframe`:case`object`:case`embed`:j(`load`,i);break;case`video`:case`audio`:for(o=0;o<mi.length;o++)j(mi[o],i);break;case`source`:j(`error`,i);break;case`img`:case`image`:case`link`:j(`error`,i),j(`load`,i);break;case`details`:j(`toggle`,i);break;case`input`:Oe(i,s),j(`invalid`,i);break;case`select`:i._wrapperState={wasMultiple:!!s.multiple},j(`invalid`,i);break;case`textarea`:Ie(i,s),j(`invalid`,i)}for(var c in Ye(n,s),o=null,s)if(s.hasOwnProperty(c)){var l=s[c];c===`children`?typeof l==`string`?i.textContent!==l&&(!0!==s.suppressHydrationWarning&&Oi(i.textContent,l,e),o=[`children`,l]):typeof l==`number`&&i.textContent!==``+l&&(!0!==s.suppressHydrationWarning&&Oi(i.textContent,l,e),o=[`children`,``+l]):a.hasOwnProperty(c)&&l!=null&&c===`onScroll`&&j(`scroll`,i)}switch(n){case`input`:we(i),je(i,s,!0);break;case`textarea`:we(i),Re(i);break;case`select`:case`option`:break;default:typeof s.onClick==`function`&&(i.onclick=ki)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{c=o.nodeType===9?o:o.ownerDocument,e===`http://www.w3.org/1999/xhtml`&&(e=ze(n)),e===`http://www.w3.org/1999/xhtml`?n===`script`?(e=c.createElement(`div`),e.innerHTML=`<script><\/script>`,e=e.removeChild(e.firstChild)):typeof i.is==`string`?e=c.createElement(n,{is:i.is}):(e=c.createElement(n),n===`select`&&(c=e,i.multiple?c.multiple=!0:i.size&&(c.size=i.size))):e=c.createElementNS(e,n),e[Hi]=t,e[Ui]=i,cc(e,t,!1,!1),t.stateNode=e;a:{switch(c=Xe(n,i),n){case`dialog`:j(`cancel`,e),j(`close`,e),o=i;break;case`iframe`:case`object`:case`embed`:j(`load`,e),o=i;break;case`video`:case`audio`:for(o=0;o<mi.length;o++)j(mi[o],e);o=i;break;case`source`:j(`error`,e),o=i;break;case`img`:case`image`:case`link`:j(`error`,e),j(`load`,e),o=i;break;case`details`:j(`toggle`,e),o=i;break;case`input`:Oe(e,i),o=De(e,i),j(`invalid`,e);break;case`option`:o=i;break;case`select`:e._wrapperState={wasMultiple:!!i.multiple},o=T({},i,{value:void 0}),j(`invalid`,e);break;case`textarea`:Ie(e,i),o=Fe(e,i),j(`invalid`,e);break;default:o=i}for(s in Ye(n,o),l=o,l)if(l.hasOwnProperty(s)){var u=l[s];s===`style`?qe(e,u):s===`dangerouslySetInnerHTML`?(u=u?u.__html:void 0,u!=null&&He(e,u)):s===`children`?typeof u==`string`?(n!==`textarea`||u!==``)&&Ue(e,u):typeof u==`number`&&Ue(e,``+u):s!==`suppressContentEditableWarning`&&s!==`suppressHydrationWarning`&&s!==`autoFocus`&&(a.hasOwnProperty(s)?u!=null&&s===`onScroll`&&j(`scroll`,e):u!=null&&S(e,s,u,c))}switch(n){case`input`:we(e),je(e,i,!1);break;case`textarea`:we(e),Re(e);break;case`option`:i.value!=null&&e.setAttribute(`value`,``+xe(i.value));break;case`select`:e.multiple=!!i.multiple,s=i.value,s==null?i.defaultValue!=null&&Pe(e,!!i.multiple,i.defaultValue,!0):Pe(e,!!i.multiple,s,!1);break;default:typeof o.onClick==`function`&&(e.onclick=ki)}switch(n){case`button`:case`input`:case`select`:case`textarea`:i=!!i.autoFocus;break a;case`img`:i=!0;break a;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return fc(t),null;case 6:if(e&&t.stateNode!=null)uc(e,t,e.memoizedProps,i);else{if(typeof i!=`string`&&t.stateNode===null)throw Error(r(166));if(n=yo(vo.current),yo(go.current),Ia(t)){if(i=t.stateNode,n=t.memoizedProps,i[Hi]=t,(s=i.nodeValue!==n)&&(e=Oa,e!==null))switch(e.tag){case 3:Oi(i.nodeValue,n,(e.mode&1)!=0);break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Oi(i.nodeValue,n,(e.mode&1)!=0)}s&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Hi]=t,t.stateNode=i}return fc(t),null;case 13:if(F(V),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(z&&ka!==null&&t.mode&1&&!(t.flags&128))La(),Ra(),t.flags|=98560,s=!1;else if(s=Ia(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(r(318));if(s=t.memoizedState,s=s===null?null:s.dehydrated,!s)throw Error(r(317));s[Hi]=t}else Ra(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;fc(t),s=!1}else Aa!==null&&(xl(Aa),Aa=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?Yc===0&&(Yc=3):Al())),t.updateQueue!==null&&(t.flags|=4),fc(t),null);case 4:return xo(),e===null&&M(t.stateNode.containerInfo),fc(t),null;case 10:return Za(t.type._context),fc(t),null;case 17:return ia(t.type)&&aa(),fc(t),null;case 19:if(F(V),s=t.memoizedState,s===null)return fc(t),null;if(i=(t.flags&128)!=0,c=s.rendering,c===null)if(i)dc(s,!1);else{if(Yc!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(c=wo(e),c!==null){for(t.flags|=128,dc(s,!1),i=c.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)s=n,e=i,s.flags&=14680066,c=s.alternate,c===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=c.childLanes,s.lanes=c.lanes,s.child=c.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=c.memoizedProps,s.memoizedState=c.memoizedState,s.updateQueue=c.updateQueue,s.type=c.type,e=c.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return I(V,V.current&1|2),t.child}e=e.sibling}s.tail!==null&&D()>rl&&(t.flags|=128,i=!0,dc(s,!1),t.lanes=4194304)}else{if(!i)if(e=wo(c),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),dc(s,!0),s.tail===null&&s.tailMode===`hidden`&&!c.alternate&&!z)return fc(t),null}else 2*D()-s.renderingStartTime>rl&&n!==1073741824&&(t.flags|=128,i=!0,dc(s,!1),t.lanes=4194304);s.isBackwards?(c.sibling=t.child,t.child=c):(n=s.last,n===null?t.child=c:n.sibling=c,s.last=c)}return s.tail===null?(fc(t),null):(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=D(),t.sibling=null,n=V.current,I(V,i?n&1|2:n&1),t);case 22:case 23:return Dl(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?qc&1073741824&&(fc(t),t.subtreeFlags&6&&(t.flags|=8192)):fc(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}function mc(e,t){switch(Da(t),t.tag){case 1:return ia(t.type)&&aa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xo(),F(ta),F(ea),Eo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Co(t),null;case 13:if(F(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Ra()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F(V),null;case 4:return xo(),null;case 10:return Za(t.type._context),null;case 22:case 23:return Dl(),null;case 24:return null;default:return null}}var hc=!1,gc=!1,_c=typeof WeakSet==`function`?WeakSet:Set,K=null;function vc(e,t){var n=e.ref;if(n!==null)if(typeof n==`function`)try{n(null)}catch(n){Q(e,t,n)}else n.current=null}function yc(e,t,n){try{n()}catch(n){Q(e,t,n)}}var bc=!1;function xc(e,t){if(Ai=Tn,e=Gr(),Kr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(ji={focusedElem:e,selectionRange:n},Tn=!1,K=t;K!==null;)if(t=K,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,K=e;else for(;K!==null;){t=K;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var g=h.memoizedProps,_=h.memoizedState,v=t.stateNode;v.__reactInternalSnapshotBeforeUpdate=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:xs(t.type,g),_)}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent=``:y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(e){Q(t,t.return,e)}if(e=t.sibling,e!==null){e.return=t.return,K=e;break}K=t.return}return h=bc,bc=!1,h}function Sc(e,t,n){var r=t.updateQueue;if(r=r===null?null:r.lastEffect,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&yc(t,n,a)}i=i.next}while(i!==r)}}function Cc(e,t){if(t=t.updateQueue,t=t===null?null:t.lastEffect,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function wc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t==`function`?t(e):t.current=e}}function Tc(e){var t=e.alternate;t!==null&&(e.alternate=null,Tc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Hi],delete t[Ui],delete t[Gi],delete t[Ki],delete t[qi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ec(e){return e.tag===5||e.tag===3||e.tag===4}function Dc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Ec(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ki));else if(r!==4&&(e=e.child,e!==null))for(Oc(e,t,n),e=e.sibling;e!==null;)Oc(e,t,n),e=e.sibling}function kc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(kc(e,t,n),e=e.sibling;e!==null;)kc(e,t,n),e=e.sibling}var q=null,Ac=!1;function jc(e,t,n){for(n=n.child;n!==null;)Mc(e,t,n),n=n.sibling}function Mc(e,t,n){if(It&&typeof It.onCommitFiberUnmount==`function`)try{It.onCommitFiberUnmount(Ft,n)}catch{}switch(n.tag){case 5:gc||vc(n,t);case 6:var r=q,i=Ac;q=null,jc(e,t,n),q=r,Ac=i,q!==null&&(Ac?(e=q,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):q.removeChild(n.stateNode));break;case 18:q!==null&&(Ac?(e=q,n=n.stateNode,e.nodeType===8?Ri(e.parentNode,n):e.nodeType===1&&Ri(e,n),Cn(e)):Ri(q,n.stateNode));break;case 4:r=q,i=Ac,q=n.stateNode.containerInfo,Ac=!0,jc(e,t,n),q=r,Ac=i;break;case 0:case 11:case 14:case 15:if(!gc&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&yc(n,t,o),i=i.next}while(i!==r)}jc(e,t,n);break;case 1:if(!gc&&(vc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){Q(n,t,e)}jc(e,t,n);break;case 21:jc(e,t,n);break;case 22:n.mode&1?(gc=(r=gc)||n.memoizedState!==null,jc(e,t,n),gc=r):jc(e,t,n);break;default:jc(e,t,n)}}function Nc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new _c),t.forEach(function(t){var r=Ul.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function Pc(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];try{var o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 5:q=c.stateNode,Ac=!1;break a;case 3:q=c.stateNode.containerInfo,Ac=!0;break a;case 4:q=c.stateNode.containerInfo,Ac=!0;break a}c=c.return}if(q===null)throw Error(r(160));Mc(o,s,a),q=null,Ac=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(e){Q(a,t,e)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Fc(t,e),t=t.sibling}function Fc(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pc(t,e),Ic(e),i&4){try{Sc(3,e,e.return),Cc(3,e)}catch(t){Q(e,e.return,t)}try{Sc(5,e,e.return)}catch(t){Q(e,e.return,t)}}break;case 1:Pc(t,e),Ic(e),i&512&&n!==null&&vc(n,n.return);break;case 5:if(Pc(t,e),Ic(e),i&512&&n!==null&&vc(n,n.return),e.flags&32){var a=e.stateNode;try{Ue(a,``)}catch(t){Q(e,e.return,t)}}if(i&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,s=n===null?o:n.memoizedProps,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c===`input`&&o.type===`radio`&&o.name!=null&&ke(a,o),Xe(c,s);var u=Xe(c,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d===`style`?qe(a,f):d===`dangerouslySetInnerHTML`?He(a,f):d===`children`?Ue(a,f):S(a,d,f,u)}switch(c){case`input`:Ae(a,o);break;case`textarea`:Le(a,o);break;case`select`:var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m==null?p!==!!o.multiple&&(o.defaultValue==null?Pe(a,!!o.multiple,o.multiple?[]:``,!1):Pe(a,!!o.multiple,o.defaultValue,!0)):Pe(a,!!o.multiple,m,!1)}a[Ui]=o}catch(t){Q(e,e.return,t)}}break;case 6:if(Pc(t,e),Ic(e),i&4){if(e.stateNode===null)throw Error(r(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(t){Q(e,e.return,t)}}break;case 3:if(Pc(t,e),Ic(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Cn(t.containerInfo)}catch(t){Q(e,e.return,t)}break;case 4:Pc(t,e),Ic(e);break;case 13:Pc(t,e),Ic(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(nl=D())),i&4&&Nc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(gc=(u=gc)||d,Pc(t,e),gc=u):Pc(t,e),Ic(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(K=e,d=e.child;d!==null;){for(f=K=d;K!==null;){switch(p=K,m=p.child,p.tag){case 0:case 11:case 14:case 15:Sc(4,p,p.return);break;case 1:vc(p,p.return);var h=p.stateNode;if(typeof h.componentWillUnmount==`function`){i=p,n=p.return;try{t=i,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(e){Q(i,n,e)}}break;case 5:vc(p,p.return);break;case 22:if(p.memoizedState!==null){Bc(f);continue}}m===null?Bc(f):(m.return=p,K=m)}d=d.sibling}a:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{a=f.stateNode,u?(o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`):(c=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty(`display`)?l.display:null,c.style.display=Ke(`display`,s))}catch(t){Q(e,e.return,t)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?``:f.memoizedProps}catch(t){Q(e,e.return,t)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break a;for(;f.sibling===null;){if(f.return===null||f.return===e)break a;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Pc(t,e),Ic(e),i&4&&Nc(e);break;case 21:break;default:Pc(t,e),Ic(e)}}function Ic(e){var t=e.flags;if(t&2){try{a:{for(var n=e.return;n!==null;){if(Ec(n)){var i=n;break a}n=n.return}throw Error(r(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(Ue(a,``),i.flags&=-33),kc(e,Dc(e),a);break;case 3:case 4:var o=i.stateNode.containerInfo;Oc(e,Dc(e),o);break;default:throw Error(r(161))}}catch(t){Q(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Lc(e,t,n){K=e,Rc(e,t,n)}function Rc(e,t,n){for(var r=(e.mode&1)!=0;K!==null;){var i=K,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||hc;if(!o){var s=i.alternate,c=s!==null&&s.memoizedState!==null||gc;s=hc;var l=gc;if(hc=o,(gc=c)&&!l)for(K=i;K!==null;)o=K,c=o.child,o.tag===22&&o.memoizedState!==null||c===null?Vc(i):(c.return=o,K=c);for(;a!==null;)K=a,Rc(a,t,n),a=a.sibling;K=i,hc=s,gc=l}zc(e,t,n)}else i.subtreeFlags&8772&&a!==null?(a.return=i,K=a):zc(e,t,n)}}function zc(e){for(;K!==null;){var t=K;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:gc||Cc(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!gc)if(n===null)i.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:xs(t.type,n.memoizedProps);i.componentDidUpdate(a,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&mo(t,o,i);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}mo(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var l=t.memoizedProps;switch(t.type){case`button`:case`input`:case`select`:case`textarea`:l.autoFocus&&n.focus();break;case`img`:l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Cn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}gc||t.flags&512&&wc(t)}catch(e){Q(t,t.return,e)}}if(t===e){K=null;break}if(n=t.sibling,n!==null){n.return=t.return,K=n;break}K=t.return}}function Bc(e){for(;K!==null;){var t=K;if(t===e){K=null;break}var n=t.sibling;if(n!==null){n.return=t.return,K=n;break}K=t.return}}function Vc(e){for(;K!==null;){var t=K;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Cc(4,t)}catch(e){Q(t,n,e)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount==`function`){var i=t.return;try{r.componentDidMount()}catch(e){Q(t,i,e)}}var a=t.return;try{wc(t)}catch(e){Q(t,a,e)}break;case 5:var o=t.return;try{wc(t)}catch(e){Q(t,o,e)}}}catch(e){Q(t,t.return,e)}if(t===e){K=null;break}var s=t.sibling;if(s!==null){s.return=t.return,K=s;break}K=t.return}}var Hc=Math.ceil,Uc=C.ReactCurrentDispatcher,Wc=C.ReactCurrentOwner,Gc=C.ReactCurrentBatchConfig,J=0,Y=null,X=null,Kc=0,qc=0,Jc=$i(0),Yc=0,Xc=null,Zc=0,Qc=0,$c=0,el=null,tl=null,nl=0,rl=1/0,il=null,al=!1,ol=null,sl=null,cl=!1,ll=null,ul=0,dl=0,fl=null,pl=-1,ml=0;function hl(){return J&6?D():pl===-1?pl=D():pl}function gl(e){return e.mode&1?J&2&&Kc!==0?Kc&-Kc:Ba.transition===null?(e=O,e===0?(e=window.event,e=e===void 0?16:jn(e.type),e):e):(ml===0&&(ml=Yt()),ml):1}function _l(e,t,n,i){if(50<dl)throw dl=0,fl=null,Error(r(185));Zt(e,n,i),(!(J&2)||e!==Y)&&(e===Y&&(!(J&2)&&(Qc|=n),Yc===4&&Cl(e,Kc)),vl(e,i),n===1&&J===0&&!(t.mode&1)&&(rl=D()+500,da&&ha()))}function vl(e,t){var n=e.callbackNode;qt(e,t);var r=Gt(e,e===Y?Kc:0);if(r===0)n!==null&&Et(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Et(n),t===1)e.tag===0?ma(wl.bind(null,e)):pa(wl.bind(null,e)),Ii(function(){!(J&6)&&ha()}),n=null;else{switch(en(r)){case 1:n=At;break;case 4:n=jt;break;case 16:n=Mt;break;case 536870912:n=Pt;break;default:n=Mt}n=Gl(n,yl.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function yl(e,t){if(pl=-1,ml=0,J&6)throw Error(r(327));var n=e.callbackNode;if(Rl()&&e.callbackNode!==n)return null;var i=Gt(e,e===Y?Kc:0);if(i===0)return null;if(i&30||(i&e.expiredLanes)!==0||t)t=jl(e,i);else{t=i;var a=J;J|=2;var o=kl();(Y!==e||Kc!==t)&&(il=null,rl=D()+500,Z(e,t));do try{Nl();break}catch(t){Ol(e,t)}while(1);Xa(),Uc.current=o,J=a,X===null?(Y=null,Kc=0,t=Yc):t=0}if(t!==0){if(t===2&&(a=Jt(e),a!==0&&(i=a,t=bl(e,a))),t===1)throw n=Xc,Z(e,0),Cl(e,i),vl(e,D()),n;if(t===6)Cl(e,i);else{if(a=e.current.alternate,!(i&30)&&!Sl(a)&&(t=jl(e,i),t===2&&(o=Jt(e),o!==0&&(i=o,t=bl(e,o))),t===1))throw n=Xc,Z(e,0),Cl(e,i),vl(e,D()),n;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(r(345));case 2:Il(e,tl,il);break;case 3:if(Cl(e,i),(i&130023424)===i&&(t=nl+500-D(),10<t)){if(Gt(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){hl(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ni(Il.bind(null,e,tl,il),t);break}Il(e,tl,il);break;case 4:if(Cl(e,i),(i&4194240)===i)break;for(t=e.eventTimes,a=-1;0<i;){var s=31-Rt(i);o=1<<s,s=t[s],s>a&&(a=s),i&=~o}if(i=a,i=D()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Hc(i/1960))-i,10<i){e.timeoutHandle=Ni(Il.bind(null,e,tl,il),i);break}Il(e,tl,il);break;case 5:Il(e,tl,il);break;default:throw Error(r(329))}}}return vl(e,D()),e.callbackNode===n?yl.bind(null,e):null}function bl(e,t){var n=el;return e.current.memoizedState.isDehydrated&&(Z(e,t).flags|=256),e=jl(e,t),e!==2&&(t=tl,tl=n,t!==null&&xl(t)),e}function xl(e){tl===null?tl=e:tl.push.apply(tl,e)}function Sl(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Br(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Cl(e,t){for(t&=~$c,t&=~Qc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Rt(t),r=1<<n;e[n]=-1,t&=~r}}function wl(e){if(J&6)throw Error(r(327));Rl();var t=Gt(e,0);if(!(t&1))return vl(e,D()),null;var n=jl(e,t);if(e.tag!==0&&n===2){var i=Jt(e);i!==0&&(t=i,n=bl(e,i))}if(n===1)throw n=Xc,Z(e,0),Cl(e,t),vl(e,D()),n;if(n===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Il(e,tl,il),vl(e,D()),null}function Tl(e,t){var n=J;J|=1;try{return e(t)}finally{J=n,J===0&&(rl=D()+500,da&&ha())}}function El(e){ll!==null&&ll.tag===0&&!(J&6)&&Rl();var t=J;J|=1;var n=Gc.transition,r=O;try{if(Gc.transition=null,O=1,e)return e()}finally{O=r,Gc.transition=n,J=t,!(J&6)&&ha()}}function Dl(){qc=Jc.current,F(Jc)}function Z(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Pi(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(Da(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&aa();break;case 3:xo(),F(ta),F(ea),Eo();break;case 5:Co(r);break;case 4:xo();break;case 13:F(V);break;case 19:F(V);break;case 10:Za(r.type._context);break;case 22:case 23:Dl()}n=n.return}if(Y=e,X=e=Xl(e.current,null),Kc=qc=t,Yc=0,Xc=null,$c=Qc=Zc=0,tl=el=null,to!==null){for(t=0;t<to.length;t++)if(n=to[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}to=null}return e}function Ol(e,t){do{var n=X;try{if(Xa(),Do.current=_s,jo){for(var i=H.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}jo=!1}if(ko=0,Ao=U=H=null,Mo=!1,No=0,Wc.current=null,n===null||n.return===null){Yc=1,Xc=t,X=null;break}a:{var o=e,s=n.return,c=n,l=t;if(t=Kc,c.flags|=32768,typeof l==`object`&&l&&typeof l.then==`function`){var u=l,d=c,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Fs(s);if(m!==null){m.flags&=-257,Is(m,s,c,o,t),m.mode&1&&Ps(o,u,t),t=m,l=u;var h=t.updateQueue;if(h===null){var g=new Set;g.add(l),t.updateQueue=g}else h.add(l);break a}else{if(!(t&1)){Ps(o,u,t),Al();break a}l=Error(r(426))}}else if(z&&c.mode&1){var _=Fs(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Is(_,s,c,o,t),za(Os(l,c));break a}}o=l=Os(l,c),Yc!==4&&(Yc=2),el===null?el=[o]:el.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=Ms(o,l,t);fo(o,v);break a;case 1:c=l;var y=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError==`function`||b!==null&&typeof b.componentDidCatch==`function`&&(sl===null||!sl.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Ns(o,c,t);fo(o,x);break a}}o=o.return}while(o!==null)}Fl(n)}catch(e){t=e,X===n&&n!==null&&(X=n=n.return);continue}break}while(1)}function kl(){var e=Uc.current;return Uc.current=_s,e===null?_s:e}function Al(){(Yc===0||Yc===3||Yc===2)&&(Yc=4),Y===null||!(Zc&268435455)&&!(Qc&268435455)||Cl(Y,Kc)}function jl(e,t){var n=J;J|=2;var i=kl();(Y!==e||Kc!==t)&&(il=null,Z(e,t));do try{Ml();break}catch(t){Ol(e,t)}while(1);if(Xa(),J=n,Uc.current=i,X!==null)throw Error(r(261));return Y=null,Kc=0,Yc}function Ml(){for(;X!==null;)Pl(X)}function Nl(){for(;X!==null&&!Dt();)Pl(X)}function Pl(e){var t=Wl(e.alternate,e,qc);e.memoizedProps=e.pendingProps,t===null?Fl(e):X=t,Wc.current=null}function Fl(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=mc(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Yc=6,X=null;return}}else if(n=pc(n,t,qc),n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);Yc===0&&(Yc=5)}function Il(e,t,n){var r=O,i=Gc.transition;try{Gc.transition=null,O=1,Ll(e,t,n,r)}finally{Gc.transition=i,O=r}return null}function Ll(e,t,n,i){do Rl();while(ll!==null);if(J&6)throw Error(r(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Qt(e,o),e===Y&&(X=Y=null,Kc=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||cl||(cl=!0,Gl(Mt,function(){return Rl(),null})),o=(n.flags&15990)!=0,n.subtreeFlags&15990||o){o=Gc.transition,Gc.transition=null;var s=O;O=1;var c=J;J|=4,Wc.current=null,xc(e,n),Fc(n,e),qr(ji),Tn=!!Ai,ji=Ai=null,e.current=n,Lc(n,e,a),Ot(),J=c,O=s,Gc.transition=o}else e.current=n;if(cl&&(cl=!1,ll=e,ul=a),o=e.pendingLanes,o===0&&(sl=null),Lt(n.stateNode,i),vl(e,D()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],i(a.value,{componentStack:a.stack,digest:a.digest});if(al)throw al=!1,e=ol,ol=null,e;return ul&1&&e.tag!==0&&Rl(),o=e.pendingLanes,o&1?e===fl?dl++:(dl=0,fl=e):dl=0,ha(),null}function Rl(){if(ll!==null){var e=en(ul),t=Gc.transition,n=O;try{if(Gc.transition=null,O=16>e?16:e,ll===null)var i=!1;else{if(e=ll,ll=null,ul=0,J&6)throw Error(r(331));var a=J;for(J|=4,K=e.current;K!==null;){var o=K,s=o.child;if(K.flags&16){var c=o.deletions;if(c!==null){for(var l=0;l<c.length;l++){var u=c[l];for(K=u;K!==null;){var d=K;switch(d.tag){case 0:case 11:case 15:Sc(8,d,o)}var f=d.child;if(f!==null)f.return=d,K=f;else for(;K!==null;){d=K;var p=d.sibling,m=d.return;if(Tc(d),d===u){K=null;break}if(p!==null){p.return=m,K=p;break}K=m}}}var h=o.alternate;if(h!==null){var g=h.child;if(g!==null){h.child=null;do{var _=g.sibling;g.sibling=null,g=_}while(g!==null)}}K=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,K=s;else b:for(;K!==null;){if(o=K,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Sc(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,K=v;break b}K=o.return}}var y=e.current;for(K=y;K!==null;){s=K;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,K=b;else b:for(s=y;K!==null;){if(c=K,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Cc(9,c)}}catch(e){Q(c,c.return,e)}if(c===s){K=null;break b}var x=c.sibling;if(x!==null){x.return=c.return,K=x;break b}K=c.return}}if(J=a,ha(),It&&typeof It.onPostCommitFiberRoot==`function`)try{It.onPostCommitFiberRoot(Ft,e)}catch{}i=!0}return i}finally{O=n,Gc.transition=t}}return!1}function zl(e,t,n){t=Os(n,t),t=Ms(e,t,1),e=lo(e,t,1),t=hl(),e!==null&&(Zt(e,1,t),vl(e,t))}function Q(e,t,n){if(e.tag===3)zl(e,e,n);else for(;t!==null;){if(t.tag===3){zl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(sl===null||!sl.has(r))){e=Os(n,e),e=Ns(t,e,1),t=lo(t,e,1),e=hl(),t!==null&&(Zt(t,1,e),vl(t,e));break}}t=t.return}}function Bl(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=hl(),e.pingedLanes|=e.suspendedLanes&n,Y===e&&(Kc&n)===n&&(Yc===4||Yc===3&&(Kc&130023424)===Kc&&500>D()-nl?Z(e,0):$c|=n),vl(e,t)}function Vl(e,t){t===0&&(e.mode&1?(t=Ut,Ut<<=1,!(Ut&130023424)&&(Ut=4194304)):t=1);var n=hl();e=io(e,t),e!==null&&(Zt(e,t,n),vl(e,n))}function Hl(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vl(e,n)}function Ul(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(r(314))}i!==null&&i.delete(t),Vl(e,n)}var Wl=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ta.current)Rs=!0;else{if((e.lanes&n)===0&&!(t.flags&128))return Rs=!1,sc(e,t,n);Rs=!!(e.flags&131072)}else Rs=!1,z&&t.flags&1048576&&Ta(t,ya,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;ac(e,t),e=t.pendingProps;var a=ra(t,ea.current);$a(t,n),a=Io(null,t,i,e,a,n);var o=Lo();return t.flags|=1,typeof a==`object`&&a&&typeof a.render==`function`&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ia(i)?(o=!0,ca(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,oo(t),a.updater=Cs,t.stateNode=a,a._reactInternals=t,Ds(t,i,e,n),t=qs(null,t,i,!0,o,n)):(t.tag=0,z&&o&&Ea(t),zs(null,t,a,n),t=t.child),t;case 16:i=t.elementType;a:{switch(ac(e,t),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=Yl(i),e=xs(i,e),a){case 0:t=Gs(null,t,i,e,n);break a;case 1:t=Ks(null,t,i,e,n);break a;case 11:t=Bs(null,t,i,e,n);break a;case 14:t=Vs(null,t,i,xs(i.type,e),n);break a}throw Error(r(306,i,``))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:xs(i,a),Gs(e,t,i,a,n);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:xs(i,a),Ks(e,t,i,a,n);case 3:a:{if(Js(t),e===null)throw Error(r(387));i=t.pendingProps,o=t.memoizedState,a=o.element,so(e,t),po(t,i,null,n);var s=t.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=Os(Error(r(423)),t),t=Ys(e,t,i,n,a);break a}else if(i!==a){a=Os(Error(r(424)),t),t=Ys(e,t,i,n,a);break a}else for(ka=zi(t.stateNode.containerInfo.firstChild),Oa=t,z=!0,Aa=null,n=Ga(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ra(),i===a){t=oc(e,t,n);break a}zs(e,t,i,n)}t=t.child}return t;case 5:return So(t),e===null&&Pa(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,s=a.children,Mi(i,a)?s=null:o!==null&&Mi(i,o)&&(t.flags|=32),Ws(e,t),zs(e,t,s,n),t.child;case 6:return e===null&&Pa(t),null;case 13:return Qs(e,t,n);case 4:return bo(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Wa(t,null,i,n):zs(e,t,i,n),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:xs(i,a),Bs(e,t,i,a,n);case 7:return zs(e,t,t.pendingProps,n),t.child;case 8:return zs(e,t,t.pendingProps.children,n),t.child;case 12:return zs(e,t,t.pendingProps.children,n),t.child;case 10:a:{if(i=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,I(Ka,i._currentValue),i._currentValue=s,o!==null)if(Br(o.value,s)){if(o.children===a.children&&!ta.current){t=oc(e,t,n);break a}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){s=o.child;for(var l=c.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=co(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Qa(o.return,n,t),c.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(r(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Qa(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}zs(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,$a(t,n),a=eo(a),i=i(a),t.flags|=1,zs(e,t,i,n),t.child;case 14:return i=t.type,a=xs(i,t.pendingProps),a=xs(i.type,a),Vs(e,t,i,a,n);case 15:return Hs(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:xs(i,a),ac(e,t),t.tag=1,ia(i)?(e=!0,ca(t)):e=!1,$a(t,n),Ts(t,i,a),Ds(t,i,a,n),qs(null,t,i,!0,e,n);case 19:return ic(e,t,n);case 22:return Us(e,t,n)}throw Error(r(156,t.tag))};function Gl(e,t){return Tt(e,t)}function Kl(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ql(e,t,n,r){return new Kl(e,t,n,r)}function Jl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yl(e){if(typeof e==`function`)return+!!Jl(e);if(e!=null){if(e=e.$$typeof,e===oe)return 11;if(e===le)return 14}return 2}function Xl(e,t){var n=e.alternate;return n===null?(n=ql(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Zl(e,t,n,i,a,o){var s=2;if(i=e,typeof e==`function`)Jl(e)&&(s=1);else if(typeof e==`string`)s=5;else a:switch(e){case te:return Ql(n.children,a,o,t);case ne:s=8,a|=8;break;case re:return e=ql(12,n,t,a|2),e.elementType=re,e.lanes=o,e;case se:return e=ql(13,n,t,a),e.elementType=se,e.lanes=o,e;case ce:return e=ql(19,n,t,a),e.elementType=ce,e.lanes=o,e;case de:return $l(n,a,o,t);default:if(typeof e==`object`&&e)switch(e.$$typeof){case ie:s=10;break a;case ae:s=9;break a;case oe:s=11;break a;case le:s=14;break a;case ue:s=16,i=null;break a}throw Error(r(130,e==null?e:typeof e,``))}return t=ql(s,n,t,a),t.elementType=e,t.type=i,t.lanes=o,t}function Ql(e,t,n,r){return e=ql(7,e,r,t),e.lanes=n,e}function $l(e,t,n,r){return e=ql(22,e,r,t),e.elementType=de,e.lanes=n,e.stateNode={isHidden:!1},e}function eu(e,t,n){return e=ql(6,e,null,t),e.lanes=n,e}function tu(e,t,n){return t=ql(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function nu(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xt(0),this.expirationTimes=Xt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ru(e,t,n,r,i,a,o,s,c){return e=new nu(e,t,n,s,c),t===1?(t=1,!0===a&&(t|=8)):t=0,a=ql(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},oo(a),e}function iu(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ee,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}function au(e){if(!e)return L;e=e._reactInternals;a:{if(yt(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break a;case 1:if(ia(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break a}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var n=e.type;if(ia(n))return sa(e,n,t)}return t}function ou(e,t,n,r,i,a,o,s,c){return e=ru(n,r,!0,e,i,a,o,s,c),e.context=au(null),n=e.current,r=hl(),i=gl(n),a=co(r,i),a.callback=t??null,lo(n,a,i),e.current.lanes=i,Zt(e,i,r),vl(e,r),e}function su(e,t,n,r){var i=t.current,a=hl(),o=gl(i);return n=au(n),t.context===null?t.context=n:t.pendingContext=n,t=co(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=lo(i,t,o),e!==null&&(_l(e,i,o,a),uo(e,i,o)),o}function cu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function lu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function uu(e,t){lu(e,t),(e=e.alternate)&&lu(e,t)}function du(){return null}var fu=typeof reportError==`function`?reportError:function(e){console.error(e)};function pu(e){this._internalRoot=e}mu.prototype.render=pu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));su(e,t,null,null)},mu.prototype.unmount=pu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;El(function(){su(null,e,null,null)}),t[Wi]=null}};function mu(e){this._internalRoot=e}mu.prototype.unstable_scheduleHydration=function(e){if(e){var t=an();e={blockedOn:null,target:e,priority:t};for(var n=0;n<pn.length&&t!==0&&t<pn[n].priority;n++);pn.splice(n,0,e),n===0&&vn(e)}};function hu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==` react-mount-point-unstable `))}function _u(){}function vu(e,t,n,r,i){if(i){if(typeof r==`function`){var a=r;r=function(){var e=cu(o);a.call(e)}}var o=ou(t,r,e,0,null,!1,!1,``,_u);return e._reactRootContainer=o,e[Wi]=o.current,M(e.nodeType===8?e.parentNode:e),El(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r==`function`){var s=r;r=function(){var e=cu(c);s.call(e)}}var c=ru(e,0,!1,null,null,!1,!1,``,_u);return e._reactRootContainer=c,e[Wi]=c.current,M(e.nodeType===8?e.parentNode:e),El(function(){su(t,c,n,r)}),c}function yu(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i==`function`){var s=i;i=function(){var e=cu(o);s.call(e)}}su(t,o,e,i)}else o=vu(n,t,e,i,r);return cu(o)}tn=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Wt(t.pendingLanes);n!==0&&($t(t,n|1),vl(t,D()),!(J&6)&&(rl=D()+500,ha()))}break;case 13:El(function(){var t=io(e,1);t!==null&&_l(t,e,1,hl())}),uu(e,1)}},nn=function(e){if(e.tag===13){var t=io(e,134217728);t!==null&&_l(t,e,134217728,hl()),uu(e,134217728)}},rn=function(e){if(e.tag===13){var t=gl(e),n=io(e,t);n!==null&&_l(n,e,t,hl()),uu(e,t)}},an=function(){return O},on=function(e,t){var n=O;try{return O=e,t()}finally{O=n}},$e=function(e,t,n){switch(t){case`input`:if(Ae(e,n),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name=`+JSON.stringify(``+t)+`][type="radio"]`),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=Xi(i);if(!a)throw Error(r(90));Te(i),Ae(i,a)}}}break;case`textarea`:Le(e,n);break;case`select`:t=n.value,t!=null&&Pe(e,!!n.multiple,t,!1)}},at=Tl,ot=El;var bu={usingClientEntryPoint:!1,Events:[P,Yi,Xi,rt,it,Tl]},xu={findFiberByHostInstance:Ji,bundleType:0,version:`18.3.1`,rendererPackageName:`react-dom`},Su={bundleType:xu.bundleType,version:xu.version,rendererPackageName:xu.rendererPackageName,rendererConfig:xu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ct(e),e===null?null:e.stateNode},findFiberByHostInstance:xu.findFiberByHostInstance||du,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:`18.3.1-next-f1338f8080-20240426`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Cu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cu.isDisabled&&Cu.supportsFiber)try{Ft=Cu.inject(Su),It=Cu}catch{}}e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bu,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hu(t))throw Error(r(200));return iu(e,t,null,n)},e.createRoot=function(e,t){if(!hu(e))throw Error(r(299));var n=!1,i=``,a=fu;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=ru(e,1,!1,null,null,n,!1,i,a),e[Wi]=t.current,M(e.nodeType===8?e.parentNode:e),new pu(t)},e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(r(188)):(e=Object.keys(e).join(`,`),Error(r(268,e)));return e=Ct(t),e=e===null?null:e.stateNode,e},e.flushSync=function(e){return El(e)},e.hydrate=function(e,t,n){if(!gu(t))throw Error(r(200));return yu(null,e,t,!0,n)},e.hydrateRoot=function(e,t,n){if(!hu(e))throw Error(r(405));var i=n!=null&&n.hydratedSources||null,a=!1,o=``,s=fu;if(n!=null&&(!0===n.unstable_strictMode&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=ou(t,null,e,1,n??null,a,!1,o,s),e[Wi]=t.current,M(e),i)for(e=0;e<i.length;e++)n=i[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new mu(t)},e.render=function(e,t,n){if(!gu(t))throw Error(r(200));return yu(null,e,t,!1,n)},e.unmountComponentAtNode=function(e){if(!gu(e))throw Error(r(40));return e._reactRootContainer?(El(function(){yu(null,null,e,!1,function(){e._reactRootContainer=null,e[Wi]=null})}),!0):!1},e.unstable_batchedUpdates=Tl,e.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!gu(n))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return yu(e,t,n,!1,i)},e.version=`18.3.1-next-f1338f8080-20240426`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=m();e.createRoot=t.createRoot,e.hydrateRoot=t.hydrateRoot})),g=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),_=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),v={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},y=c(u()),b=(0,y.forwardRef)(({color:e=`currentColor`,size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>(0,y.createElement)(`svg`,{ref:c,...v,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:_(`lucide`,i),...s},[...o.map(([e,t])=>(0,y.createElement)(e,t)),...Array.isArray(a)?a:[a]])),x=(e,t)=>{let n=(0,y.forwardRef)(({className:n,...r},i)=>(0,y.createElement)(b,{ref:i,iconNode:t,className:_(`lucide-${g(e)}`,n),...r}));return n.displayName=`${e}`,n},S=x(`ArrowLeft`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),C=x(`ArrowRight`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),w=x(`Award`,[[`path`,{d:`m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526`,key:`1yiouv`}],[`circle`,{cx:`12`,cy:`8`,r:`6`,key:`1vp47v`}]]),ee=x(`BookCheck`,[[`path`,{d:`M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20`,key:`k3hazp`}],[`path`,{d:`m9 9.5 2 2 4-4`,key:`1dth82`}]]),te=x(`BookMarked`,[[`path`,{d:`M10 2v8l3-3 3 3V2`,key:`sqw3rj`}],[`path`,{d:`M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20`,key:`k3hazp`}]]),ne=x(`BookOpen`,[[`path`,{d:`M12 7v14`,key:`1akyts`}],[`path`,{d:`M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`,key:`ruj8y`}]]),re=x(`Brain`,[[`path`,{d:`M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z`,key:`l5xja`}],[`path`,{d:`M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z`,key:`ep3f8r`}],[`path`,{d:`M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4`,key:`1p4c4q`}],[`path`,{d:`M17.599 6.5a3 3 0 0 0 .399-1.375`,key:`tmeiqw`}],[`path`,{d:`M6.003 5.125A3 3 0 0 0 6.401 6.5`,key:`105sqy`}],[`path`,{d:`M3.477 10.896a4 4 0 0 1 .585-.396`,key:`ql3yin`}],[`path`,{d:`M19.938 10.5a4 4 0 0 1 .585.396`,key:`1qfode`}],[`path`,{d:`M6 18a4 4 0 0 1-1.967-.516`,key:`2e4loj`}],[`path`,{d:`M19.967 17.484A4 4 0 0 1 18 18`,key:`159ez6`}]]),ie=x(`CalendarCheck2`,[[`path`,{d:`M8 2v4`,key:`1cmpym`}],[`path`,{d:`M16 2v4`,key:`4m81vk`}],[`path`,{d:`M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8`,key:`bce9hv`}],[`path`,{d:`M3 10h18`,key:`8toen8`}],[`path`,{d:`m16 20 2 2 4-4`,key:`13tcca`}]]),ae=x(`CalendarClock`,[[`path`,{d:`M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5`,key:`1osxxc`}],[`path`,{d:`M16 2v4`,key:`4m81vk`}],[`path`,{d:`M8 2v4`,key:`1cmpym`}],[`path`,{d:`M3 10h5`,key:`r794hk`}],[`path`,{d:`M17.5 17.5 16 16.3V14`,key:`akvzfd`}],[`circle`,{cx:`16`,cy:`16`,r:`6`,key:`qoo3c4`}]]),oe=x(`ChartColumn`,[[`path`,{d:`M3 3v16a2 2 0 0 0 2 2h16`,key:`c24i48`}],[`path`,{d:`M18 17V9`,key:`2bz60n`}],[`path`,{d:`M13 17V5`,key:`1frdt8`}],[`path`,{d:`M8 17v-3`,key:`17ska0`}]]),se=x(`Check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),ce=x(`CircleCheck`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),le=x(`CirclePlay`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`polygon`,{points:`10 8 16 12 10 16 10 8`,key:`1cimsy`}]]),ue=x(`CircleX`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m15 9-6 6`,key:`1uzhvr`}],[`path`,{d:`m9 9 6 6`,key:`z0biqf`}]]),de=x(`ClipboardCheck`,[[`rect`,{width:`8`,height:`4`,x:`8`,y:`2`,rx:`1`,ry:`1`,key:`tgr4d6`}],[`path`,{d:`M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2`,key:`116196`}],[`path`,{d:`m9 14 2 2 4-4`,key:`df797q`}]]),fe=x(`Clock3`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`polyline`,{points:`12 6 12 12 16.5 12`,key:`1aq6pp`}]]),pe=x(`CloudDownload`,[[`path`,{d:`M12 13v8l-4-4`,key:`1f5nwf`}],[`path`,{d:`m12 21 4-4`,key:`1lfcce`}],[`path`,{d:`M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284`,key:`ui1hmy`}]]),T=x(`CloudOff`,[[`path`,{d:`m2 2 20 20`,key:`1ooewy`}],[`path`,{d:`M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193`,key:`yfwify`}],[`path`,{d:`M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07`,key:`jlfiyv`}]]),me=x(`CloudUpload`,[[`path`,{d:`M12 13v8`,key:`1l5pq0`}],[`path`,{d:`M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242`,key:`1pljnt`}],[`path`,{d:`m8 17 4-4 4 4`,key:`1quai1`}]]),he=x(`Cloud`,[[`path`,{d:`M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z`,key:`p7xjir`}]]),ge=x(`Database`,[[`ellipse`,{cx:`12`,cy:`5`,rx:`9`,ry:`3`,key:`msslwz`}],[`path`,{d:`M3 5V19A9 3 0 0 0 21 19V5`,key:`1wlel7`}],[`path`,{d:`M3 12A9 3 0 0 0 21 12`,key:`mv7ke4`}]]),_e=x(`Download`,[[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`polyline`,{points:`7 10 12 15 17 10`,key:`2ggqvy`}],[`line`,{x1:`12`,x2:`12`,y1:`15`,y2:`3`,key:`1vk2je`}]]),ve=x(`ExternalLink`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`M10 14 21 3`,key:`gplh6r`}],[`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,key:`a6xqqp`}]]),ye=x(`Eye`,[[`path`,{d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,key:`1nclc0`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),be=x(`Flame`,[[`path`,{d:`M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z`,key:`96xj49`}]]),xe=x(`Gauge`,[[`path`,{d:`m12 14 4-4`,key:`9kzdfg`}],[`path`,{d:`M3.34 19a10 10 0 1 1 17.32 0`,key:`19p75a`}]]),Se=x(`Gem`,[[`path`,{d:`M6 3h12l4 6-10 13L2 9Z`,key:`1pcd5k`}],[`path`,{d:`M11 3 8 9l4 13 4-13-3-6`,key:`1fcu3u`}],[`path`,{d:`M2 9h20`,key:`16fsjt`}]]),Ce=x(`Gift`,[[`rect`,{x:`3`,y:`8`,width:`18`,height:`4`,rx:`1`,key:`bkv52`}],[`path`,{d:`M12 8v13`,key:`1c76mn`}],[`path`,{d:`M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7`,key:`6wjy6b`}],[`path`,{d:`M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5`,key:`1ihvrl`}]]),we=x(`GitMerge`,[[`circle`,{cx:`18`,cy:`18`,r:`3`,key:`1xkwt0`}],[`circle`,{cx:`6`,cy:`6`,r:`3`,key:`1lh9wr`}],[`path`,{d:`M6 21V9a9 9 0 0 0 9 9`,key:`7kw0sc`}]]),Te=x(`Github`,[[`path`,{d:`M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4`,key:`tonef`}],[`path`,{d:`M9 18c-4.51 2-5-2-7-2`,key:`9comsn`}]]),Ee=x(`Inbox`,[[`polyline`,{points:`22 12 16 12 14 15 10 15 8 12 2 12`,key:`o97t9d`}],[`path`,{d:`M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z`,key:`oot6mr`}]]),De=x(`KeyRound`,[[`path`,{d:`M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z`,key:`1s6t7t`}],[`circle`,{cx:`16.5`,cy:`7.5`,r:`.5`,fill:`currentColor`,key:`w0ekpg`}]]),Oe=x(`Layers`,[[`path`,{d:`M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z`,key:`zw3jo`}],[`path`,{d:`M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12`,key:`1wduqc`}],[`path`,{d:`M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17`,key:`kqbvx6`}]]),ke=x(`LibraryBig`,[[`rect`,{width:`8`,height:`18`,x:`3`,y:`3`,rx:`1`,key:`oynpb5`}],[`path`,{d:`M7 3v18`,key:`bbkbws`}],[`path`,{d:`M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z`,key:`1qboyk`}]]),Ae=x(`ListChecks`,[[`path`,{d:`m3 17 2 2 4-4`,key:`1jhpwq`}],[`path`,{d:`m3 7 2 2 4-4`,key:`1obspn`}],[`path`,{d:`M13 6h8`,key:`15sg57`}],[`path`,{d:`M13 12h8`,key:`h98zly`}],[`path`,{d:`M13 18h8`,key:`oe0vm4`}]]),je=x(`ListFilter`,[[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M7 12h10`,key:`b7w52i`}],[`path`,{d:`M10 18h4`,key:`1ulq68`}]]),Me=x(`LoaderCircle`,[[`path`,{d:`M21 12a9 9 0 1 1-6.219-8.56`,key:`13zald`}]]),Ne=x(`LogIn`,[[`path`,{d:`M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4`,key:`u53s6r`}],[`polyline`,{points:`10 17 15 12 10 7`,key:`1ail0h`}],[`line`,{x1:`15`,x2:`3`,y1:`12`,y2:`12`,key:`v6grx8`}]]),Pe=x(`LogOut`,[[`path`,{d:`M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4`,key:`1uf3rs`}],[`polyline`,{points:`16 17 21 12 16 7`,key:`1gabdz`}],[`line`,{x1:`21`,x2:`9`,y1:`12`,y2:`12`,key:`1uyos4`}]]),Fe=x(`Mail`,[[`rect`,{width:`20`,height:`16`,x:`2`,y:`4`,rx:`2`,key:`18n3k1`}],[`path`,{d:`m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7`,key:`1ocrg3`}]]),Ie=x(`NotebookTabs`,[[`path`,{d:`M2 6h4`,key:`aawbzj`}],[`path`,{d:`M2 10h4`,key:`l0bgd4`}],[`path`,{d:`M2 14h4`,key:`1gsvsf`}],[`path`,{d:`M2 18h4`,key:`1bu2t1`}],[`rect`,{width:`16`,height:`20`,x:`4`,y:`2`,rx:`2`,key:`1nb95v`}],[`path`,{d:`M15 2v20`,key:`dcj49h`}],[`path`,{d:`M15 7h5`,key:`1xj5lc`}],[`path`,{d:`M15 12h5`,key:`w5shd9`}],[`path`,{d:`M15 17h5`,key:`1qaofu`}]]),Le=x(`PackageCheck`,[[`path`,{d:`m16 16 2 2 4-4`,key:`gfu2re`}],[`path`,{d:`M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14`,key:`e7tb2h`}],[`path`,{d:`m7.5 4.27 9 5.15`,key:`1c824w`}],[`polyline`,{points:`3.29 7 12 12 20.71 7`,key:`ousv84`}],[`line`,{x1:`12`,x2:`12`,y1:`22`,y2:`12`,key:`a4e8g8`}]]),Re=x(`Plus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]),ze=x(`RefreshCcw`,[[`path`,{d:`M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`14sxne`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}],[`path`,{d:`M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16`,key:`1hlbsb`}],[`path`,{d:`M16 16h5v5`,key:`ccwih5`}]]),Be=x(`RefreshCw`,[[`path`,{d:`M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8`,key:`v9h5vc`}],[`path`,{d:`M21 3v5h-5`,key:`1q7to0`}],[`path`,{d:`M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16`,key:`3uifl3`}],[`path`,{d:`M8 16H3v5`,key:`1cv678`}]]),Ve=x(`RotateCcw`,[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`1357e3`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}]]),He=x(`Settings`,[[`path`,{d:`M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z`,key:`1qme2f`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),Ue=x(`ShieldAlert`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`M12 8v4`,key:`1got3b`}],[`path`,{d:`M12 16h.01`,key:`1drbdi`}]]),We=x(`ShoppingBag`,[[`path`,{d:`M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z`,key:`hou9p0`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M16 10a4 4 0 0 1-8 0`,key:`1ltviw`}]]),Ge=x(`Smartphone`,[[`rect`,{width:`14`,height:`20`,x:`5`,y:`2`,rx:`2`,ry:`2`,key:`1yt0o3`}],[`path`,{d:`M12 18h.01`,key:`mhygvu`}]]),Ke=x(`Swords`,[[`polyline`,{points:`14.5 17.5 3 6 3 3 6 3 17.5 14.5`,key:`1hfsw2`}],[`line`,{x1:`13`,x2:`19`,y1:`19`,y2:`13`,key:`1vrmhu`}],[`line`,{x1:`16`,x2:`20`,y1:`16`,y2:`20`,key:`1bron3`}],[`line`,{x1:`19`,x2:`21`,y1:`21`,y2:`19`,key:`13pww6`}],[`polyline`,{points:`14.5 6.5 18 3 21 3 21 6 17.5 9.5`,key:`hbey2j`}],[`line`,{x1:`5`,x2:`9`,y1:`14`,y2:`18`,key:`1hf58s`}],[`line`,{x1:`7`,x2:`4`,y1:`17`,y2:`20`,key:`pidxm4`}],[`line`,{x1:`3`,x2:`5`,y1:`19`,y2:`21`,key:`1pehsh`}]]),qe=x(`Target`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`circle`,{cx:`12`,cy:`12`,r:`6`,key:`1vlfrh`}],[`circle`,{cx:`12`,cy:`12`,r:`2`,key:`1c9p78`}]]),Je=x(`ThumbsDown`,[[`path`,{d:`M17 14V2`,key:`8ymqnk`}],[`path`,{d:`M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z`,key:`m61m77`}]]),Ye=x(`ThumbsUp`,[[`path`,{d:`M7 10v12`,key:`1qc93n`}],[`path`,{d:`M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z`,key:`emmmcr`}]]),Xe=x(`TrendingUp`,[[`polyline`,{points:`22 7 13.5 15.5 8.5 10.5 2 17`,key:`126l90`}],[`polyline`,{points:`16 7 22 7 22 13`,key:`kwv8wd`}]]),Ze=x(`Upload`,[[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`polyline`,{points:`17 8 12 3 7 8`,key:`t8dd8p`}],[`line`,{x1:`12`,x2:`12`,y1:`3`,y2:`15`,key:`widbto`}]]),Qe=x(`UserPlus`,[[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}],[`line`,{x1:`19`,x2:`19`,y1:`8`,y2:`14`,key:`1bvyxn`}],[`line`,{x1:`22`,x2:`16`,y1:`11`,y2:`11`,key:`1shjgl`}]]),$e=x(`UserRound`,[[`circle`,{cx:`12`,cy:`8`,r:`5`,key:`1hypcn`}],[`path`,{d:`M20 21a8 8 0 0 0-16 0`,key:`rfgkzh`}]]),et=x(`Volume2`,[[`path`,{d:`M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`,key:`uqj9uw`}],[`path`,{d:`M16 9a5 5 0 0 1 0 6`,key:`1q6k2b`}],[`path`,{d:`M19.364 18.364a9 9 0 0 0 0-12.728`,key:`ijwkga`}]]),tt=x(`WifiOff`,[[`path`,{d:`M12 20h.01`,key:`zekei9`}],[`path`,{d:`M8.5 16.429a5 5 0 0 1 7 0`,key:`1bycff`}],[`path`,{d:`M5 12.859a10 10 0 0 1 5.17-2.69`,key:`1dl1wf`}],[`path`,{d:`M19 12.859a10 10 0 0 0-2.007-1.523`,key:`4k23kn`}],[`path`,{d:`M2 8.82a15 15 0 0 1 4.177-2.643`,key:`1grhjp`}],[`path`,{d:`M22 8.82a15 15 0 0 0-11.288-3.764`,key:`z3jwby`}],[`path`,{d:`m2 2 20 20`,key:`1ooewy`}]]),nt=x(`Wifi`,[[`path`,{d:`M12 20h.01`,key:`zekei9`}],[`path`,{d:`M2 8.82a15 15 0 0 1 20 0`,key:`dnpr2z`}],[`path`,{d:`M5 12.859a10 10 0 0 1 14 0`,key:`1x1e6c`}],[`path`,{d:`M8.5 16.429a5 5 0 0 1 7 0`,key:`1bycff`}]]),rt=x(`X`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),it=o((e=>{var t=u(),n=Symbol.for(`react.element`),r=Symbol.for(`react.fragment`),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var s,c={},l=null,u=null;for(s in r!==void 0&&(l=``+r),t.key!==void 0&&(l=``+t.key),t.ref!==void 0&&(u=t.ref),t)i.call(t,s)&&!o.hasOwnProperty(s)&&(c[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)c[s]===void 0&&(c[s]=t[s]);return{$$typeof:n,type:e,key:l,ref:u,props:c,_owner:a.current}}e.Fragment=r,e.jsx=s,e.jsxs=s})),at=o(((e,t)=>{t.exports=it()})),ot=c(h(),1),E=at();function st({user:e,profile:t,onLogin:n,onAccount:r}){return e?(0,E.jsxs)(`button`,{type:`button`,onClick:r,className:`inline-flex h-9 items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 text-xs font-semibold text-emerald-700 transition hover:border-emerald-400`,children:[(0,E.jsx)($e,{size:15,"aria-hidden":`true`}),(0,E.jsx)(`span`,{className:`max-w-[96px] truncate`,children:t?.displayName||t?.username||e.email}),(0,E.jsx)(he,{size:14,"aria-hidden":`true`})]}):(0,E.jsxs)(`button`,{type:`button`,onClick:n,className:`inline-flex h-9 items-center gap-2 rounded-lg border border-sky-200 bg-white px-3 text-xs font-semibold text-harbor transition hover:border-harbor`,children:[(0,E.jsx)(Ne,{size:15,"aria-hidden":`true`}),`登录同步`]})}var ct=[{route:`dashboard`,label:`首页 Dashboard`,shortLabel:`首页`,icon:oe},{route:`units`,label:`单元学习`,shortLabel:`单元`,icon:ne},{route:`review`,label:`今日复习`,shortLabel:`复习`,icon:ze},{route:`monster`,label:`打怪闯关`,shortLabel:`打怪`,icon:Ke},{route:`profile`,label:`我的`,shortLabel:`我的`,icon:$e}],lt=[ct[0],ct[1],{route:`total`,label:`总词库`,icon:ke},ct[2],{route:`quiz`,label:`测试中心`,icon:de},ct[3],{route:`checkin`,label:`打卡签到`,icon:ie},{route:`shop`,label:`兑换商店`,icon:We},{route:`statistics`,label:`学习统计`,icon:oe},{route:`achievements`,label:`成就徽章`,icon:w},{route:`settings`,label:`设置`,icon:He},{route:`account`,label:`账号同步`,icon:he}];function ut(e,t){return e===t||t===`units`&&(e===`unitDetail`||e===`study`||e===`recall`)||t===`quiz`&&e===`quiz`}function dt({current:e,onNavigate:t}){return(0,E.jsxs)(`aside`,{className:`fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-slate-200 bg-[#f8fbff]/95 p-4 backdrop-blur lg:block`,children:[(0,E.jsxs)(`button`,{type:`button`,onClick:()=>t(`dashboard`),className:`mb-6 flex items-center gap-3 rounded-lg p-2 text-left transition hover:bg-white`,children:[(0,E.jsx)(`span`,{className:`grid h-11 w-11 place-items-center rounded-lg bg-ink text-paper`,children:(0,E.jsx)(te,{size:22,"aria-hidden":`true`})}),(0,E.jsxs)(`span`,{children:[(0,E.jsx)(`span`,{className:`block text-lg font-semibold leading-none text-ink`,children:`Reword`}),(0,E.jsx)(`span`,{className:`text-xs text-slate-500`,children:`2027考研英语记忆系统`})]})]}),(0,E.jsx)(`nav`,{className:`space-y-1.5`,children:lt.map(n=>{let r=n.icon;return(0,E.jsxs)(`button`,{type:`button`,onClick:()=>t(n.route),className:`flex min-h-11 w-full items-center gap-3 rounded-lg border px-3 text-sm font-medium transition ${ut(e,n.route)?`border-indigo-200 bg-white text-indigo-600 shadow-sm`:`border-transparent text-slate-600 hover:bg-white hover:text-ink`}`,children:[(0,E.jsx)(r,{size:18,"aria-hidden":`true`}),(0,E.jsx)(`span`,{children:n.label})]},n.route)})})]})}function ft({current:e,onNavigate:t}){return(0,E.jsx)(`nav`,{className:`fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-[#f8fbff]/95 px-2 pb-[max(env(safe-area-inset-bottom),8px)] pt-2 shadow-[0_-8px_20px_rgba(25,33,44,0.06)] backdrop-blur md:hidden`,children:(0,E.jsx)(`div`,{className:`mx-auto grid max-w-xl grid-cols-5 gap-1`,children:ct.map(n=>{let r=n.icon;return(0,E.jsxs)(`button`,{type:`button`,onClick:()=>t(n.route),className:`grid min-h-12 place-items-center rounded-lg border text-xs transition ${ut(e,n.route)?`border-indigo-200 bg-white text-indigo-600`:`border-transparent text-slate-500 hover:bg-white`}`,title:n.shortLabel||n.label,children:[(0,E.jsx)(r,{size:18,"aria-hidden":`true`}),(0,E.jsx)(`span`,{children:n.shortLabel||n.label})]},n.route)})})})}function pt(e){return e<768?`mobile`:e<1024?`tablet`:`desktop`}function mt(e,t){return e>=t?`landscape`:`portrait`}function ht(){if(typeof window>`u`)return{width:1024,height:768,device:`desktop`,orientation:`landscape`};let e=window.innerWidth,t=window.innerHeight;return{width:e,height:t,device:pt(e),orientation:mt(e,t)}}function gt(){let[e,t]=(0,y.useState)(()=>ht());return(0,y.useEffect)(()=>{let e=()=>t(ht());return e(),window.addEventListener(`resize`,e),window.addEventListener(`orientationchange`,e),()=>{window.removeEventListener(`resize`,e),window.removeEventListener(`orientationchange`,e)}},[]),{...e,isMobile:e.device===`mobile`,isTablet:e.device===`tablet`,isDesktop:e.device===`desktop`}}function _t({children:e,className:t=``}){let{isMobile:n,isTablet:r}=gt();return(0,E.jsx)(`main`,{className:`${n?`w-full px-4 pb-28 pt-4`:r?`mx-auto max-w-5xl px-6 pb-12 pt-5`:`mx-auto max-w-7xl px-8 pb-12 pt-6`} ${t}`.trim(),children:e})}function vt({current:e,onNavigate:t}){return(0,E.jsxs)(`aside`,{className:`fixed inset-y-0 left-0 z-30 hidden w-20 border-r border-slate-200 bg-[#f8fbff]/95 px-2 py-4 backdrop-blur md:block lg:hidden`,children:[(0,E.jsx)(`button`,{type:`button`,onClick:()=>t(`dashboard`),className:`mx-auto mb-6 grid h-11 w-11 place-items-center rounded-lg bg-ink text-paper`,children:(0,E.jsx)(te,{size:21,"aria-hidden":`true`})}),(0,E.jsx)(`nav`,{className:`space-y-2`,children:ct.map(n=>{let r=n.icon;return(0,E.jsxs)(`button`,{type:`button`,onClick:()=>t(n.route),className:`grid min-h-14 w-full place-items-center rounded-lg border text-[11px] transition ${ut(e,n.route)?`border-indigo-200 bg-white text-indigo-600 shadow-sm`:`border-transparent text-slate-500 hover:bg-white`}`,title:n.label,children:[(0,E.jsx)(r,{size:19,"aria-hidden":`true`}),(0,E.jsx)(`span`,{children:n.shortLabel||n.label})]},n.route)})})]})}function yt({current:e,onNavigate:t,user:n=null,profile:r=null,children:i}){return(0,E.jsxs)(`div`,{className:`min-h-screen bg-app text-ink`,children:[(0,E.jsx)(dt,{current:e,onNavigate:t}),(0,E.jsx)(vt,{current:e,onNavigate:t}),(0,E.jsx)(`header`,{className:`sticky top-0 z-30 border-b border-slate-200 bg-[#f8fbff]/95 backdrop-blur md:hidden`,children:(0,E.jsxs)(`div`,{className:`mx-auto flex items-center justify-between px-4 py-3`,children:[(0,E.jsxs)(`button`,{type:`button`,onClick:()=>t(`dashboard`),className:`flex items-center gap-3 text-left`,children:[(0,E.jsx)(`span`,{className:`grid h-9 w-9 place-items-center rounded-lg border border-ink/15 bg-ink text-paper`,children:(0,E.jsx)(te,{size:20,"aria-hidden":`true`})}),(0,E.jsxs)(`span`,{children:[(0,E.jsx)(`span`,{className:`block text-lg font-semibold leading-none`,children:`Reword`}),(0,E.jsx)(`span`,{className:`text-xs text-slate-500`,children:`2027考研英语红宝书`})]})]}),(0,E.jsx)(st,{user:n,profile:r,onLogin:()=>t(`login`),onAccount:()=>t(`account`)})]})}),(0,E.jsx)(`div`,{className:`md:pl-20 lg:pl-64`,children:(0,E.jsx)(_t,{className:e===`study`||e===`recall`||e===`quiz`?`px-3 pb-0 pt-2 md:px-6 md:pb-12 md:pt-5 lg:px-8 lg:pt-6`:``,children:i})}),(0,E.jsx)(ft,{current:e,onNavigate:t})]})}function bt({reward:e}){return e?(0,E.jsxs)(`div`,{className:`rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800`,children:[(0,E.jsx)(`strong`,{children:e.title}),` +`,e.xp,` XP +`,e.coins,` 金币`]}):null}function xt(e){return e.includes(`application/json`)||e.includes(`+json`)}function St(e){return e.replace(/\s+/g,` `).trim().slice(0,120)}async function Ct(e,t){try{let n=await fetch(e,t),r=n.headers.get(`content-type`)||``;if(!n.ok)return{ok:!1,status:n.status,contentType:r,error:`请求失败：HTTP ${n.status}`};if(!xt(r)){let e=await n.text().catch(()=>``);return{ok:!1,status:n.status,contentType:r,error:`请求返回了 HTML 页面，可能是接口地址不存在、Release 未生成、GitHub Pages 返回 404，或 Supabase 配置错误。${e?`返回预览：${St(e)}`:``}`}}try{return{ok:!0,status:n.status,contentType:r,data:await n.json()}}catch{return{ok:!1,status:n.status,contentType:r,error:`JSON 解析失败，请检查接口返回内容。`}}}catch{return{ok:!1,error:`网络请求失败，请检查网络或稍后重试。`}}}var wt=`https://github.com/lihuaozou/reword/releases/download/latest-apk/reword-debug.apk`,Tt=`https://github.com/lihuaozou/reword/actions/workflows/build-android-apk.yml`,Et=`https://github.com/lihuaozou/reword/releases`,Dt=`https://api.github.com/repos/lihuaozou/reword/releases/tags/latest-apk`;function Ot({compact:e=!1}){let[t,n]=(0,y.useState)(`checking`),[r,i]=(0,y.useState)(``),[a,o]=(0,y.useState)(!1);(0,y.useEffect)(()=>{let e=!0;return Ct(Dt,{headers:{Accept:`application/vnd.github+json`}}).then(t=>{if(!e)return;if(!t.ok){n(t.status===404?`missing`:`unknown`),i(t.error||``);return}let r=t.data?.assets?.some(e=>e.name===`reword-debug.apk`);n(r?`available`:`missing`),i(``)}),()=>{e=!1}},[]);let s=t===`available`;return(0,E.jsxs)(`section`,{className:`rounded-lg border border-sky-100 bg-white shadow-soft ${e?`p-4`:`p-5`}`,children:[(0,E.jsxs)(`div`,{className:`flex items-start justify-between gap-4`,children:[(0,E.jsxs)(`div`,{className:`min-w-0`,children:[(0,E.jsxs)(`div`,{className:`flex items-center gap-2 text-sm font-semibold text-harbor`,children:[(0,E.jsx)(Ge,{size:18,"aria-hidden":`true`}),`Android 测试安装包`]}),(0,E.jsx)(`h2`,{className:`${e?`mt-1 text-lg`:`mt-2 text-xl`} font-semibold text-ink`,children:`下载 Reword APK`}),(0,E.jsx)(`p`,{className:`mt-2 text-sm leading-6 text-slate-600`,children:`这是 debug 测试版，可以直接安装到安卓手机。网页内容更新后不用重新装 APK，只有改图标、壳配置或原生能力时才需要重新打包。`})]}),(0,E.jsx)(`span`,{className:`hidden shrink-0 rounded-lg border border-sky-100 bg-[#f8fbff] px-3 py-2 text-xs font-semibold text-harbor sm:inline-flex`,children:`WebView`})]}),(0,E.jsxs)(`div`,{className:`mt-4 flex gap-2 rounded-lg px-3 py-2 text-xs leading-5 ${s?`border border-emerald-200 bg-emerald-50 text-emerald-700`:`border border-amber-200 bg-amber-50 text-amber-800`}`,children:[s?(0,E.jsx)(Le,{size:16,className:`mt-0.5 shrink-0`,"aria-hidden":`true`}):(0,E.jsx)(Ue,{size:16,className:`mt-0.5 shrink-0`,"aria-hidden":`true`}),(0,E.jsxs)(`span`,{children:[t===`available`?`APK Release 已生成，可以下载。`:t===`checking`?`正在检测 APK Release...`:t===`missing`?`APK 还没有成功发布。如果下载 404，请先运行 Build Android APK。`:`暂时无法检测 APK Release。下载链接仍可点击，请同时查看 Releases 或 Actions。`,r?(0,E.jsx)(`span`,{className:`block text-[11px] opacity-80`,children:r}):null]})]}),(0,E.jsxs)(`div`,{className:`mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4`,children:[(0,E.jsxs)(`a`,{href:wt,className:`btn-primary`,rel:`noreferrer`,children:[(0,E.jsx)(_e,{size:18,"aria-hidden":`true`}),`下载 APK`]}),(0,E.jsxs)(`a`,{href:Tt,target:`_blank`,rel:`noreferrer`,className:`btn-secondary`,children:[(0,E.jsx)(ve,{size:18,"aria-hidden":`true`}),`打开 Actions 构建`]}),(0,E.jsxs)(`a`,{href:Et,target:`_blank`,rel:`noreferrer`,className:`btn-secondary`,children:[(0,E.jsx)(Te,{size:18,"aria-hidden":`true`}),`查看 Releases`]}),(0,E.jsxs)(`button`,{type:`button`,onClick:()=>o(e=>!e),className:`btn-secondary`,children:[(0,E.jsx)(Ue,{size:18,"aria-hidden":`true`}),`查看安装说明`]})]}),(0,E.jsx)(`p`,{className:`mt-3 text-xs leading-5 text-slate-500`,children:"如果下载 404，真实原因通常是 GitHub Release `latest-apk` 尚未生成，或 Release assets 里没有 `reword-debug.apk`。请进入 GitHub Actions 手动运行 Build Android APK。"}),(0,E.jsxs)(`details`,{open:a,onToggle:e=>o(e.currentTarget.open),className:`mt-3 rounded-lg border border-sky-100 bg-[#f8fbff] px-3 py-2 text-sm text-slate-700`,children:[(0,E.jsx)(`summary`,{className:`cursor-pointer font-semibold text-ink`,children:`Android 安装说明`}),(0,E.jsxs)(`ol`,{className:`mt-3 list-decimal space-y-1.5 pl-5 text-xs leading-5 text-slate-600`,children:[(0,E.jsx)(`li`,{children:`点击“下载 APK”。`}),(0,E.jsx)(`li`,{children:`下载完成后点击 APK 文件。`}),(0,E.jsx)(`li`,{children:`如果系统提示禁止安装，请点击设置。`}),(0,E.jsx)(`li`,{children:`允许当前浏览器或文件管理器安装未知应用。`}),(0,E.jsx)(`li`,{children:`返回继续安装。`}),(0,E.jsx)(`li`,{children:`安装完成后，桌面会出现 Reword 图标。`}),(0,E.jsx)(`li`,{children:`打开后会加载在线最新版网页。`}),(0,E.jsx)(`li`,{children:`网页内容更新后，不需要重新安装 APK。`}),(0,E.jsx)(`li`,{children:`如果 APK 下载 404，请先运行 GitHub Actions 里的 Build Android APK。`})]})]})]})}function D(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function kt(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})}var At=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),jt=class extends Error{constructor(e,t=`FunctionsError`,n){super(e),this.name=t,this.context=n}toJSON(){return{name:this.name,message:this.message,context:this.context}}},Mt=class extends jt{constructor(e){super(`Failed to send a request to the Edge Function`,`FunctionsFetchError`,e)}},Nt=class extends jt{constructor(e){super(`Relay Error invoking the Edge Function`,`FunctionsRelayError`,e)}},Pt=class extends jt{constructor(e){super(`Edge Function returned a non-2xx status code`,`FunctionsHttpError`,e)}},Ft;(function(e){e.Any=`any`,e.ApNortheast1=`ap-northeast-1`,e.ApNortheast2=`ap-northeast-2`,e.ApSouth1=`ap-south-1`,e.ApSoutheast1=`ap-southeast-1`,e.ApSoutheast2=`ap-southeast-2`,e.CaCentral1=`ca-central-1`,e.EuCentral1=`eu-central-1`,e.EuWest1=`eu-west-1`,e.EuWest2=`eu-west-2`,e.EuWest3=`eu-west-3`,e.SaEast1=`sa-east-1`,e.UsEast1=`us-east-1`,e.UsWest1=`us-west-1`,e.UsWest2=`us-west-2`})(Ft||={});var It=class{constructor(e,{headers:t={},customFetch:n,region:r=Ft.Any}={}){this.url=e,this.headers=t,this.region=r,this.fetch=At(n)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e){return kt(this,arguments,void 0,function*(e,t={}){let n,r;try{let{headers:i,method:a,body:o,signal:s,timeout:c}=t,l={},{region:u}=t;u||=this.region;let d=new URL(`${this.url}/${e}`);u&&u!==`any`&&(l[`x-region`]=u,d.searchParams.set(`forceFunctionRegion`,u));let f;o&&(i&&!Object.prototype.hasOwnProperty.call(i,`Content-Type`)||!i)?typeof Blob<`u`&&o instanceof Blob||o instanceof ArrayBuffer?(l[`Content-Type`]=`application/octet-stream`,f=o):typeof o==`string`?(l[`Content-Type`]=`text/plain`,f=o):typeof FormData<`u`&&o instanceof FormData?f=o:(l[`Content-Type`]=`application/json`,f=JSON.stringify(o)):f=o&&typeof o!=`string`&&!(typeof Blob<`u`&&o instanceof Blob)&&!(o instanceof ArrayBuffer)&&!(typeof FormData<`u`&&o instanceof FormData)?JSON.stringify(o):o;let p=s;c&&(r=new AbortController,n=setTimeout(()=>r.abort(),c),s?(p=r.signal,s.addEventListener(`abort`,()=>r.abort())):p=r.signal);let m=yield this.fetch(d.toString(),{method:a||`POST`,headers:Object.assign(Object.assign(Object.assign({},l),this.headers),i),body:f,signal:p}).catch(e=>{throw new Mt(e)}),h=m.headers.get(`x-relay-error`);if(h&&h===`true`)throw new Nt(m);if(!m.ok)throw new Pt(m);let g=(m.headers.get(`Content-Type`)??`text/plain`).split(`;`)[0].trim(),_;return _=g===`application/json`?yield m.json():g===`application/octet-stream`||g===`application/pdf`?yield m.blob():g===`text/event-stream`?m:g===`multipart/form-data`?yield m.formData():yield m.text(),{data:_,error:null,response:m}}catch(e){return{data:null,error:e,response:e instanceof Pt||e instanceof Nt?e.context:void 0}}finally{n&&clearTimeout(n)}})}},Lt=3,Rt=e=>Math.min(1e3*2**e,3e4),zt=[520,503],Bt=[`GET`,`HEAD`,`OPTIONS`],Vt=class extends Error{constructor(e){super(e.message),this.name=`PostgrestError`,this.details=e.details,this.hint=e.hint,this.code=e.code}toJSON(){return{name:this.name,message:this.message,details:this.details,hint:this.hint,code:this.code}}};function Ht(e,t){return new Promise(n=>{if(t?.aborted){n();return}let r=setTimeout(()=>{t?.removeEventListener(`abort`,i),n()},e);function i(){clearTimeout(r),n()}t?.addEventListener(`abort`,i)})}function Ut(e,t,n,r){return!(!r||n>=Lt||!Bt.includes(e)||!zt.includes(t))}var Wt=class{constructor(e){this.shouldThrowOnError=!1,this.retryEnabled=!0,this.method=e.method,this.url=e.url,this.headers=new Headers(e.headers),this.schema=e.schema,this.body=e.body,this.shouldThrowOnError=e.shouldThrowOnError??!1,this.signal=e.signal,this.isMaybeSingle=e.isMaybeSingle??!1,this.shouldStripNulls=e.shouldStripNulls??!1,this.urlLengthLimit=e.urlLengthLimit??8e3,this.retryEnabled=e.retry??!0,e.fetch?this.fetch=e.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}stripNulls(){if(this.headers.get(`Accept`)===`text/csv`)throw Error(`stripNulls() cannot be used with csv()`);return this.shouldStripNulls=!0,this}setHeader(e,t){return this.headers=new Headers(this.headers),this.headers.set(e,t),this}retry(e){return this.retryEnabled=e,this}then(e,t){var n=this;if(this.schema===void 0||([`GET`,`HEAD`].includes(this.method)?this.headers.set(`Accept-Profile`,this.schema):this.headers.set(`Content-Profile`,this.schema)),this.method!==`GET`&&this.method!==`HEAD`&&this.headers.set(`Content-Type`,`application/json`),this.shouldStripNulls){let e=this.headers.get(`Accept`);e===`application/vnd.pgrst.object+json`?this.headers.set(`Accept`,`application/vnd.pgrst.object+json;nulls=stripped`):(!e||e===`application/json`)&&this.headers.set(`Accept`,`application/vnd.pgrst.array+json;nulls=stripped`)}let r=this.fetch,i=(async()=>{let e=0;for(;;){let t=new Headers(n.headers);e>0&&t.set(`X-Retry-Count`,String(e));let i;try{i=await r(n.url.toString(),{method:n.method,headers:t,body:JSON.stringify(n.body,(e,t)=>typeof t==`bigint`?t.toString():t),signal:n.signal})}catch(t){if(t?.name===`AbortError`||t?.code===`ABORT_ERR`||!Bt.includes(n.method))throw t;if(n.retryEnabled&&e<Lt){let t=Rt(e);e++,await Ht(t,n.signal);continue}throw t}if(Ut(n.method,i.status,e,n.retryEnabled)){let t=i.headers?.get(`Retry-After`)??null,r=t===null?Rt(e):Math.max(0,parseInt(t,10)||0)*1e3;await i.text(),e++,await Ht(r,n.signal);continue}return await n.processResponse(i)}})();return this.shouldThrowOnError||(i=i.catch(e=>{let t=``,n=``,r=``,i=e?.cause;if(i){let n=i?.message??``,r=i?.code??``;t=`${e?.name??`FetchError`}: ${e?.message}`,t+=`\n\nCaused by: ${i?.name??`Error`}: ${n}`,r&&(t+=` (${r})`),i?.stack&&(t+=`\n${i.stack}`)}else t=e?.stack??``;let a=this.url.toString().length;return e?.name===`AbortError`||e?.code===`ABORT_ERR`?(r=``,n=`Request was aborted (timeout or manual cancellation)`,a>this.urlLengthLimit&&(n+=`. Note: Your request URL is ${a} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)):(i?.name===`HeadersOverflowError`||i?.code===`UND_ERR_HEADERS_OVERFLOW`)&&(r=``,n=`HTTP headers exceeded server limits (typically 16KB)`,a>this.urlLengthLimit&&(n+=`. Your request URL is ${a} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),{success:!1,error:{message:`${e?.name??`FetchError`}: ${e?.message}`,details:t,hint:n,code:r},data:null,count:null,status:0,statusText:``}})),i.then(e,t)}async processResponse(e){var t=this;let n=null,r=null,i=null,a=e.status,o=e.statusText;if(e.ok){if(t.method!==`HEAD`){let n=await e.text();n===``||(r=t.headers.get(`Accept`)===`text/csv`||t.headers.get(`Accept`)&&t.headers.get(`Accept`)?.includes(`application/vnd.pgrst.plan+text`)?n:JSON.parse(n))}let s=t.headers.get(`Prefer`)?.match(/count=(exact|planned|estimated)/),c=e.headers.get(`content-range`)?.split(`/`);s&&c&&c.length>1&&(i=parseInt(c[1])),t.isMaybeSingle&&Array.isArray(r)&&(r.length>1?(n={code:`PGRST116`,details:`Results contain ${r.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:`JSON object requested, multiple (or no) rows returned`},r=null,i=null,a=406,o=`Not Acceptable`):r=r.length===1?r[0]:null)}else{let i=await e.text();try{n=JSON.parse(i),Array.isArray(n)&&e.status===404&&(r=[],n=null,a=200,o=`OK`)}catch{e.status===404&&i===``?(a=204,o=`No Content`):n={message:i}}if(n&&t.shouldThrowOnError)throw new Vt(n)}return{success:n===null,error:n,data:r,count:i,status:a,statusText:o}}returns(){return this}overrideTypes(){return this}},Gt=class extends Wt{select(e){let t=!1,n=(e??`*`).split(``).map(e=>/\s/.test(e)&&!t?``:(e===`"`&&(t=!t),e)).join(``);return this.url.searchParams.set(`select`,n),this.headers.append(`Prefer`,`return=representation`),this}order(e,{ascending:t=!0,nullsFirst:n,foreignTable:r,referencedTable:i=r}={}){let a=i?`${i}.order`:`order`,o=this.url.searchParams.get(a);return this.url.searchParams.set(a,`${o?`${o},`:``}${e}.${t?`asc`:`desc`}${n===void 0?``:n?`.nullsfirst`:`.nullslast`}`),this}limit(e,{foreignTable:t,referencedTable:n=t}={}){let r=n===void 0?`limit`:`${n}.limit`;return this.url.searchParams.set(r,`${e}`),this}range(e,t,{foreignTable:n,referencedTable:r=n}={}){let i=r===void 0?`offset`:`${r}.offset`,a=r===void 0?`limit`:`${r}.limit`;return this.url.searchParams.set(i,`${e}`),this.url.searchParams.set(a,`${t-e+1}`),this}abortSignal(e){return this.signal=e,this}single(){return this.headers.set(`Accept`,`application/vnd.pgrst.object+json`),this}maybeSingle(){return this.isMaybeSingle=!0,this}csv(){return this.headers.set(`Accept`,`text/csv`),this}geojson(){return this.headers.set(`Accept`,`application/geo+json`),this}explain({analyze:e=!1,verbose:t=!1,settings:n=!1,buffers:r=!1,wal:i=!1,format:a=`text`}={}){let o=[e?`analyze`:null,t?`verbose`:null,n?`settings`:null,r?`buffers`:null,i?`wal`:null].filter(Boolean).join(`|`),s=this.headers.get(`Accept`)??`application/json`;return this.headers.set(`Accept`,`application/vnd.pgrst.plan+${a}; for="${s}"; options=${o};`),this}rollback(){return this.headers.append(`Prefer`,`tx=rollback`),this}returns(){return this}maxAffected(e){return this.headers.append(`Prefer`,`handling=strict`),this.headers.append(`Prefer`,`max-affected=${e}`),this}},Kt=RegExp(`[,()]`),qt=class extends Gt{eq(e,t){return this.url.searchParams.append(e,`eq.${t}`),this}neq(e,t){return this.url.searchParams.append(e,`neq.${t}`),this}gt(e,t){return this.url.searchParams.append(e,`gt.${t}`),this}gte(e,t){return this.url.searchParams.append(e,`gte.${t}`),this}lt(e,t){return this.url.searchParams.append(e,`lt.${t}`),this}lte(e,t){return this.url.searchParams.append(e,`lte.${t}`),this}like(e,t){return this.url.searchParams.append(e,`like.${t}`),this}likeAllOf(e,t){return this.url.searchParams.append(e,`like(all).{${t.join(`,`)}}`),this}likeAnyOf(e,t){return this.url.searchParams.append(e,`like(any).{${t.join(`,`)}}`),this}ilike(e,t){return this.url.searchParams.append(e,`ilike.${t}`),this}ilikeAllOf(e,t){return this.url.searchParams.append(e,`ilike(all).{${t.join(`,`)}}`),this}ilikeAnyOf(e,t){return this.url.searchParams.append(e,`ilike(any).{${t.join(`,`)}}`),this}regexMatch(e,t){return this.url.searchParams.append(e,`match.${t}`),this}regexIMatch(e,t){return this.url.searchParams.append(e,`imatch.${t}`),this}is(e,t){return this.url.searchParams.append(e,`is.${t}`),this}isDistinct(e,t){return this.url.searchParams.append(e,`isdistinct.${t}`),this}in(e,t){let n=Array.from(new Set(t)).map(e=>typeof e==`string`&&Kt.test(e)?`"${e}"`:`${e}`).join(`,`);return this.url.searchParams.append(e,`in.(${n})`),this}notIn(e,t){let n=Array.from(new Set(t)).map(e=>typeof e==`string`&&Kt.test(e)?`"${e}"`:`${e}`).join(`,`);return this.url.searchParams.append(e,`not.in.(${n})`),this}contains(e,t){return typeof t==`string`?this.url.searchParams.append(e,`cs.${t}`):Array.isArray(t)?this.url.searchParams.append(e,`cs.{${t.join(`,`)}}`):this.url.searchParams.append(e,`cs.${JSON.stringify(t)}`),this}containedBy(e,t){return typeof t==`string`?this.url.searchParams.append(e,`cd.${t}`):Array.isArray(t)?this.url.searchParams.append(e,`cd.{${t.join(`,`)}}`):this.url.searchParams.append(e,`cd.${JSON.stringify(t)}`),this}rangeGt(e,t){return this.url.searchParams.append(e,`sr.${t}`),this}rangeGte(e,t){return this.url.searchParams.append(e,`nxl.${t}`),this}rangeLt(e,t){return this.url.searchParams.append(e,`sl.${t}`),this}rangeLte(e,t){return this.url.searchParams.append(e,`nxr.${t}`),this}rangeAdjacent(e,t){return this.url.searchParams.append(e,`adj.${t}`),this}overlaps(e,t){return typeof t==`string`?this.url.searchParams.append(e,`ov.${t}`):this.url.searchParams.append(e,`ov.{${t.join(`,`)}}`),this}textSearch(e,t,{config:n,type:r}={}){let i=``;r===`plain`?i=`pl`:r===`phrase`?i=`ph`:r===`websearch`&&(i=`w`);let a=n===void 0?``:`(${n})`;return this.url.searchParams.append(e,`${i}fts${a}.${t}`),this}match(e){return Object.entries(e).filter(([e,t])=>t!==void 0).forEach(([e,t])=>{this.url.searchParams.append(e,`eq.${t}`)}),this}not(e,t,n){return this.url.searchParams.append(e,`not.${t}.${n}`),this}or(e,{foreignTable:t,referencedTable:n=t}={}){let r=n?`${n}.or`:`or`;return this.url.searchParams.append(r,`(${e})`),this}filter(e,t,n){return this.url.searchParams.append(e,`${t}.${n}`),this}},Jt=class{constructor(e,{headers:t={},schema:n,fetch:r,urlLengthLimit:i=8e3,retry:a}){this.url=e,this.headers=new Headers(t),this.schema=n,this.fetch=r,this.urlLengthLimit=i,this.retry=a}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(e,t){let{head:n=!1,count:r}=t??{},i=n?`HEAD`:`GET`,a=!1,o=(e??`*`).split(``).map(e=>/\s/.test(e)&&!a?``:(e===`"`&&(a=!a),e)).join(``),{url:s,headers:c}=this.cloneRequestState();return s.searchParams.set(`select`,o),r&&c.append(`Prefer`,`count=${r}`),new qt({method:i,url:s,headers:c,schema:this.schema,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}insert(e,{count:t,defaultToNull:n=!0}={}){let{url:r,headers:i}=this.cloneRequestState();if(t&&i.append(`Prefer`,`count=${t}`),n||i.append(`Prefer`,`missing=default`),Array.isArray(e)){let t=e.reduce((e,t)=>e.concat(Object.keys(t)),[]);if(t.length>0){let e=[...new Set(t)].map(e=>`"${e}"`);r.searchParams.set(`columns`,e.join(`,`))}}return new qt({method:`POST`,url:r,headers:i,schema:this.schema,body:e,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}upsert(e,{onConflict:t,ignoreDuplicates:n=!1,count:r,defaultToNull:i=!0}={}){let{url:a,headers:o}=this.cloneRequestState();if(o.append(`Prefer`,`resolution=${n?`ignore`:`merge`}-duplicates`),t!==void 0&&a.searchParams.set(`on_conflict`,t),r&&o.append(`Prefer`,`count=${r}`),i||o.append(`Prefer`,`missing=default`),Array.isArray(e)){let t=e.reduce((e,t)=>e.concat(Object.keys(t)),[]);if(t.length>0){let e=[...new Set(t)].map(e=>`"${e}"`);a.searchParams.set(`columns`,e.join(`,`))}}return new qt({method:`POST`,url:a,headers:o,schema:this.schema,body:e,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}update(e,{count:t}={}){let{url:n,headers:r}=this.cloneRequestState();return t&&r.append(`Prefer`,`count=${t}`),new qt({method:`PATCH`,url:n,headers:r,schema:this.schema,body:e,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}delete({count:e}={}){let{url:t,headers:n}=this.cloneRequestState();return e&&n.append(`Prefer`,`count=${e}`),new qt({method:`DELETE`,url:t,headers:n,schema:this.schema,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};function Yt(e){"@babel/helpers - typeof";return Yt=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Yt(e)}function Xt(e,t){if(Yt(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(Yt(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Zt(e){var t=Xt(e,`string`);return Yt(t)==`symbol`?t:t+``}function Qt(e,t,n){return(t=Zt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?$t(Object(n),!0).forEach(function(t){Qt(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$t(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var en=class e{constructor(e,{headers:t={},schema:n,fetch:r,timeout:i,urlLengthLimit:a=8e3,retry:o}={}){this.url=e,this.headers=new Headers(t),this.schemaName=n,this.urlLengthLimit=a;let s=r??globalThis.fetch;i!==void 0&&i>0?this.fetch=(e,t)=>{let n=new AbortController,r=setTimeout(()=>n.abort(),i),a=t?.signal;if(a){if(a.aborted)return clearTimeout(r),s(e,t);let i=()=>{clearTimeout(r),n.abort()};return a.addEventListener(`abort`,i,{once:!0}),s(e,O(O({},t),{},{signal:n.signal})).finally(()=>{clearTimeout(r),a.removeEventListener(`abort`,i)})}return s(e,O(O({},t),{},{signal:n.signal})).finally(()=>clearTimeout(r))}:this.fetch=s,this.retry=o}from(e){if(!e||typeof e!=`string`||e.trim()===``)throw Error(`Invalid relation name: relation must be a non-empty string.`);return new Jt(new URL(`${this.url}/${e}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}schema(t){return new e(this.url,{headers:this.headers,schema:t,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}rpc(e,t={},{head:n=!1,get:r=!1,count:i}={}){let a,o=new URL(`${this.url}/rpc/${e}`),s,c=e=>typeof e==`object`&&!!e&&(!Array.isArray(e)||e.some(c)),l=n&&Object.values(t).some(c);l?(a=`POST`,s=t):n||r?(a=n?`HEAD`:`GET`,Object.entries(t).filter(([e,t])=>t!==void 0).map(([e,t])=>[e,Array.isArray(t)?`{${t.join(`,`)}}`:`${t}`]).forEach(([e,t])=>{o.searchParams.append(e,t)})):(a=`POST`,s=t);let u=new Headers(this.headers);return l?u.set(`Prefer`,i?`count=${i},return=minimal`:`return=minimal`):i&&u.set(`Prefer`,`count=${i}`),new qt({method:a,url:o,headers:u,schema:this.schemaName,body:s,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}},tn=class{constructor(){}static detectEnvironment(){if(typeof WebSocket<`u`)return{type:`native`,wsConstructor:WebSocket};let e=globalThis;if(typeof globalThis<`u`&&e.WebSocket!==void 0)return{type:`native`,wsConstructor:e.WebSocket};let t=typeof global<`u`?global:void 0;if(t&&t.WebSocket!==void 0)return{type:`native`,wsConstructor:t.WebSocket};if(typeof globalThis<`u`&&e.WebSocketPair!==void 0&&globalThis.WebSocket===void 0)return{type:`cloudflare`,error:`Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.`,workaround:`Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime.`};if(typeof globalThis<`u`&&e.EdgeRuntime||typeof navigator<`u`&&navigator.userAgent?.includes(`Vercel-Edge`))return{type:`unsupported`,error:`Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.`,workaround:`Use serverless functions or a different deployment target for WebSocket functionality.`};let n=globalThis.process;if(n){let e=n.versions;if(e&&e.node){let t=e.node,n=parseInt(t.replace(/^v/,``).split(`.`)[0]);return n>=22?globalThis.WebSocket===void 0?{type:`unsupported`,error:`Node.js ${n} detected but native WebSocket not found.`,workaround:`Provide a WebSocket implementation via the transport option.`}:{type:`native`,wsConstructor:globalThis.WebSocket}:{type:`unsupported`,error:`Node.js ${n} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}}return{type:`unsupported`,error:`Unknown JavaScript runtime without WebSocket support.`,workaround:`Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation.`}}static getWebSocketConstructor(){let e=this.detectEnvironment();if(e.wsConstructor)return e.wsConstructor;let t=e.error||`WebSocket not supported in this environment.`;throw e.workaround&&(t+=`\n\nSuggested solution: ${e.workaround}`),Error(t)}static isWebSocketSupported(){try{let e=this.detectEnvironment();return e.type===`native`||e.type===`ws`}catch{return!1}}},nn=`realtime-js/2.106.2`,rn=`1.0.0`,an=`2.0.0`,on=an,sn=1e4,cn={closed:`closed`,errored:`errored`,joined:`joined`,joining:`joining`,leaving:`leaving`},ln={close:`phx_close`,error:`phx_error`,join:`phx_join`,reply:`phx_reply`,leave:`phx_leave`,access_token:`access_token`},un={connecting:`connecting`,open:`open`,closing:`closing`,closed:`closed`},dn=class{constructor(e){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT=`broadcast`,this.allowedMetadataKeys=[],this.allowedMetadataKeys=e??[]}encode(e,t){if(e.event===this.BROADCAST_EVENT&&!(e.payload instanceof ArrayBuffer)&&typeof e.payload.event==`string`)return t(this._binaryEncodeUserBroadcastPush(e));let n=[e.join_ref,e.ref,e.topic,e.event,e.payload];return t(JSON.stringify(n))}_binaryEncodeUserBroadcastPush(e){return this._isArrayBuffer(e.payload?.payload)?this._encodeBinaryUserBroadcastPush(e):this._encodeJsonUserBroadcastPush(e)}_encodeBinaryUserBroadcastPush(e){let t=e.payload?.payload??new ArrayBuffer(0);return this._encodeUserBroadcastPush(e,this.BINARY_ENCODING,t)}_encodeJsonUserBroadcastPush(e){let t=e.payload?.payload??{},n=new TextEncoder().encode(JSON.stringify(t)).buffer;return this._encodeUserBroadcastPush(e,this.JSON_ENCODING,n)}_encodeUserBroadcastPush(e,t,n){let r=e.topic,i=e.ref??``,a=e.join_ref??``,o=e.payload.event,s=this.allowedMetadataKeys?this._pick(e.payload,this.allowedMetadataKeys):{},c=Object.keys(s).length===0?``:JSON.stringify(s);if(a.length>255)throw Error(`joinRef length ${a.length} exceeds maximum of 255`);if(i.length>255)throw Error(`ref length ${i.length} exceeds maximum of 255`);if(r.length>255)throw Error(`topic length ${r.length} exceeds maximum of 255`);if(o.length>255)throw Error(`userEvent length ${o.length} exceeds maximum of 255`);if(c.length>255)throw Error(`metadata length ${c.length} exceeds maximum of 255`);let l=this.USER_BROADCAST_PUSH_META_LENGTH+a.length+i.length+r.length+o.length+c.length,u=new ArrayBuffer(this.HEADER_LENGTH+l),d=new DataView(u),f=0;d.setUint8(f++,this.KINDS.userBroadcastPush),d.setUint8(f++,a.length),d.setUint8(f++,i.length),d.setUint8(f++,r.length),d.setUint8(f++,o.length),d.setUint8(f++,c.length),d.setUint8(f++,t),Array.from(a,e=>d.setUint8(f++,e.charCodeAt(0))),Array.from(i,e=>d.setUint8(f++,e.charCodeAt(0))),Array.from(r,e=>d.setUint8(f++,e.charCodeAt(0))),Array.from(o,e=>d.setUint8(f++,e.charCodeAt(0))),Array.from(c,e=>d.setUint8(f++,e.charCodeAt(0)));var p=new Uint8Array(u.byteLength+n.byteLength);return p.set(new Uint8Array(u),0),p.set(new Uint8Array(n),u.byteLength),p.buffer}decode(e,t){if(this._isArrayBuffer(e))return t(this._binaryDecode(e));if(typeof e==`string`){let[n,r,i,a,o]=JSON.parse(e);return t({join_ref:n,ref:r,topic:i,event:a,payload:o})}return t({})}_binaryDecode(e){let t=new DataView(e),n=t.getUint8(0),r=new TextDecoder;switch(n){case this.KINDS.userBroadcast:return this._decodeUserBroadcast(e,t,r)}}_decodeUserBroadcast(e,t,n){let r=t.getUint8(1),i=t.getUint8(2),a=t.getUint8(3),o=t.getUint8(4),s=this.HEADER_LENGTH+4,c=n.decode(e.slice(s,s+r));s+=r;let l=n.decode(e.slice(s,s+i));s+=i;let u=n.decode(e.slice(s,s+a));s+=a;let d=e.slice(s,e.byteLength),f=o===this.JSON_ENCODING?JSON.parse(n.decode(d)):d,p={type:this.BROADCAST_EVENT,event:l,payload:f};return a>0&&(p.meta=JSON.parse(u)),{join_ref:null,ref:null,topic:c,event:this.BROADCAST_EVENT,payload:p}}_isArrayBuffer(e){return e instanceof ArrayBuffer||e?.constructor?.name===`ArrayBuffer`}_pick(e,t){return!e||typeof e!=`object`?{}:Object.fromEntries(Object.entries(e).filter(([e])=>t.includes(e)))}},k;(function(e){e.abstime=`abstime`,e.bool=`bool`,e.date=`date`,e.daterange=`daterange`,e.float4=`float4`,e.float8=`float8`,e.int2=`int2`,e.int4=`int4`,e.int4range=`int4range`,e.int8=`int8`,e.int8range=`int8range`,e.json=`json`,e.jsonb=`jsonb`,e.money=`money`,e.numeric=`numeric`,e.oid=`oid`,e.reltime=`reltime`,e.text=`text`,e.time=`time`,e.timestamp=`timestamp`,e.timestamptz=`timestamptz`,e.timetz=`timetz`,e.tsrange=`tsrange`,e.tstzrange=`tstzrange`})(k||={});var fn=(e,t,n={})=>{let r=n.skipTypes??[];return t?Object.keys(t).reduce((n,i)=>(n[i]=pn(i,e,t,r),n),{}):{}},pn=(e,t,n,r)=>{let i=t.find(t=>t.name===e)?.type,a=n[e];return i&&!r.includes(i)?mn(i,a):hn(a)},mn=(e,t)=>{if(e.charAt(0)===`_`)return yn(t,e.slice(1,e.length));switch(e){case k.bool:return gn(t);case k.float4:case k.float8:case k.int2:case k.int4:case k.int8:case k.numeric:case k.oid:return _n(t);case k.json:case k.jsonb:return vn(t);case k.timestamp:return bn(t);case k.abstime:case k.date:case k.daterange:case k.int4range:case k.int8range:case k.money:case k.reltime:case k.text:case k.time:case k.timestamptz:case k.timetz:case k.tsrange:case k.tstzrange:return hn(t);default:return hn(t)}},hn=e=>e,gn=e=>{switch(e){case`t`:return!0;case`f`:return!1;default:return e}},_n=e=>{if(typeof e==`string`){let t=parseFloat(e);if(!Number.isNaN(t))return t}return e},vn=e=>{if(typeof e==`string`)try{return JSON.parse(e)}catch{return e}return e},yn=(e,t)=>{if(typeof e!=`string`)return e;let n=e.length-1,r=e[n];if(e[0]===`{`&&r===`}`){let r,i=e.slice(1,n);try{r=JSON.parse(`[`+i+`]`)}catch{r=i?i.split(`,`):[]}return r.map(e=>mn(t,e))}return e},bn=e=>typeof e==`string`?e.replace(` `,`T`):e,xn=e=>{let t=new URL(e);return t.protocol=t.protocol.replace(/^ws/i,`http`),t.pathname=t.pathname.replace(/\/+$/,``).replace(/\/socket\/websocket$/i,``).replace(/\/socket$/i,``).replace(/\/websocket$/i,``),t.pathname===``||t.pathname===`/`?t.pathname=`/api/broadcast`:t.pathname+=`/api/broadcast`,t.href},Sn=e=>typeof e==`function`?e:function(){return e},Cn=typeof self<`u`?self:null,wn=typeof window<`u`?window:null,Tn=Cn||wn||globalThis,En=`2.0.0`,Dn=1e4,On=1e3,kn={connecting:0,open:1,closing:2,closed:3},An={closed:`closed`,errored:`errored`,joined:`joined`,joining:`joining`,leaving:`leaving`},jn={close:`phx_close`,error:`phx_error`,join:`phx_join`,reply:`phx_reply`,leave:`phx_leave`},Mn={longpoll:`longpoll`,websocket:`websocket`},Nn={complete:4},Pn=`base64url.bearer.phx.`,Fn=class{constructor(e,t,n,r){this.channel=e,this.event=t,this.payload=n||function(){return{}},this.receivedResp=null,this.timeout=r,this.timeoutTimer=null,this.recHooks=[],this.sent=!1,this.ref=void 0}resend(e){this.timeout=e,this.reset(),this.send()}send(){this.hasReceived(`timeout`)||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}receive(e,t){return this.hasReceived(e)&&t(this.receivedResp.response),this.recHooks.push({status:e,callback:t}),this}reset(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}destroy(){this.cancelRefEvent(),this.cancelTimeout()}matchReceive({status:e,response:t,_ref:n}){this.recHooks.filter(t=>t.status===e).forEach(e=>e.callback(t))}cancelRefEvent(){this.refEvent&&this.channel.off(this.refEvent)}cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}startTimeout(){this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,e=>{this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp=e,this.matchReceive(e)}),this.timeoutTimer=setTimeout(()=>{this.trigger(`timeout`,{})},this.timeout)}hasReceived(e){return this.receivedResp&&this.receivedResp.status===e}trigger(e,t){this.channel.trigger(this.refEvent,{status:e,response:t})}},In=class{constructor(e,t){this.callback=e,this.timerCalc=t,this.timer=void 0,this.tries=0}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries+=1,this.callback()},this.timerCalc(this.tries+1))}},Ln=class{constructor(e,t,n){this.state=An.closed,this.topic=e,this.params=Sn(t||{}),this.socket=n,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new Fn(this,jn.join,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new In(()=>{this.socket.isConnected()&&this.rejoin()},this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())),this.stateChangeRefs.push(this.socket.onOpen(()=>{this.rejoinTimer.reset(),this.isErrored()&&this.rejoin()})),this.joinPush.receive(`ok`,()=>{this.state=An.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(e=>e.send()),this.pushBuffer=[]}),this.joinPush.receive(`error`,e=>{this.state=An.errored,this.socket.hasLogger()&&this.socket.log(`channel`,`error ${this.topic}`,e),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.onClose(()=>{this.rejoinTimer.reset(),this.socket.hasLogger()&&this.socket.log(`channel`,`close ${this.topic}`),this.state=An.closed,this.socket.remove(this)}),this.onError(e=>{this.socket.hasLogger()&&this.socket.log(`channel`,`error ${this.topic}`,e),this.isJoining()&&this.joinPush.reset(),this.state=An.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.joinPush.receive(`timeout`,()=>{this.socket.hasLogger()&&this.socket.log(`channel`,`timeout ${this.topic}`,this.joinPush.timeout),new Fn(this,jn.leave,Sn({}),this.timeout).send(),this.state=An.errored,this.joinPush.reset(),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.on(jn.reply,(e,t)=>{this.trigger(this.replyEventName(t),e)})}join(e=this.timeout){if(this.joinedOnce)throw Error(`tried to join multiple times. 'join' can only be called a single time per channel instance`);return this.timeout=e,this.joinedOnce=!0,this.rejoin(),this.joinPush}teardown(){this.pushBuffer.forEach(e=>e.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=An.closed,this.bindings=[]}onClose(e){this.on(jn.close,e)}onError(e){return this.on(jn.error,t=>e(t))}on(e,t){let n=this.bindingRef++;return this.bindings.push({event:e,ref:n,callback:t}),n}off(e,t){this.bindings=this.bindings.filter(n=>!(n.event===e&&(t===void 0||t===n.ref)))}canPush(){return this.socket.isConnected()&&this.isJoined()}push(e,t,n=this.timeout){if(t||={},!this.joinedOnce)throw Error(`tried to push '${e}' to '${this.topic}' before joining. Use channel.join() before pushing events`);let r=new Fn(this,e,function(){return t},n);return this.canPush()?r.send():(r.startTimeout(),this.pushBuffer.push(r)),r}leave(e=this.timeout){this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=An.leaving;let t=()=>{this.socket.hasLogger()&&this.socket.log(`channel`,`leave ${this.topic}`),this.trigger(jn.close,`leave`)},n=new Fn(this,jn.leave,Sn({}),e);return n.receive(`ok`,()=>t()).receive(`timeout`,()=>t()),n.send(),this.canPush()||n.trigger(`ok`,{}),n}onMessage(e,t,n){return t}filterBindings(e,t,n){return!0}isMember(e,t,n,r){return this.topic===e?r&&r!==this.joinRef()?(this.socket.hasLogger()&&this.socket.log(`channel`,`dropping outdated message`,{topic:e,event:t,payload:n,joinRef:r}),!1):!0:!1}joinRef(){return this.joinPush.ref}rejoin(e=this.timeout){this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=An.joining,this.joinPush.resend(e))}trigger(e,t,n,r){let i=this.onMessage(e,t,n,r);if(t&&!i)throw Error(`channel onMessage callbacks must return the payload, modified or unmodified`);let a=this.bindings.filter(r=>r.event===e&&this.filterBindings(r,t,n));for(let e=0;e<a.length;e++)a[e].callback(i,n,r||this.joinRef())}replyEventName(e){return`chan_reply_${e}`}isClosed(){return this.state===An.closed}isErrored(){return this.state===An.errored}isJoined(){return this.state===An.joined}isJoining(){return this.state===An.joining}isLeaving(){return this.state===An.leaving}},Rn=class{static request(e,t,n,r,i,a,o){if(Tn.XDomainRequest){let n=new Tn.XDomainRequest;return this.xdomainRequest(n,e,t,r,i,a,o)}else if(Tn.XMLHttpRequest){let s=new Tn.XMLHttpRequest;return this.xhrRequest(s,e,t,n,r,i,a,o)}else if(Tn.fetch&&Tn.AbortController)return this.fetchRequest(e,t,n,r,i,a,o);else throw Error(`No suitable XMLHttpRequest implementation found`)}static fetchRequest(e,t,n,r,i,a,o){let s={method:e,headers:n,body:r},c=null;return i&&(c=new AbortController,setTimeout(()=>c.abort(),i),s.signal=c.signal),Tn.fetch(t,s).then(e=>e.text()).then(e=>this.parseJSON(e)).then(e=>o&&o(e)).catch(e=>{e.name===`AbortError`&&a?a():o&&o(null)}),c}static xdomainRequest(e,t,n,r,i,a,o){return e.timeout=i,e.open(t,n),e.onload=()=>{let t=this.parseJSON(e.responseText);o&&o(t)},a&&(e.ontimeout=a),e.onprogress=()=>{},e.send(r),e}static xhrRequest(e,t,n,r,i,a,o,s){e.open(t,n,!0),e.timeout=a;for(let[t,n]of Object.entries(r))e.setRequestHeader(t,n);return e.onerror=()=>s&&s(null),e.onreadystatechange=()=>{e.readyState===Nn.complete&&s&&s(this.parseJSON(e.responseText))},o&&(e.ontimeout=o),e.send(i),e}static parseJSON(e){if(!e||e===``)return null;try{return JSON.parse(e)}catch{return console&&console.log(`failed to parse JSON response`,e),null}}static serialize(e,t){let n=[];for(var r in e){if(!Object.prototype.hasOwnProperty.call(e,r))continue;let i=t?`${t}[${r}]`:r,a=e[r];typeof a==`object`?n.push(this.serialize(a,i)):n.push(encodeURIComponent(i)+`=`+encodeURIComponent(a))}return n.join(`&`)}static appendParams(e,t){return Object.keys(t).length===0?e:`${e}${e.match(/\?/)?`&`:`?`}${this.serialize(t)}`}},zn=e=>{let t=``,n=new Uint8Array(e),r=n.byteLength;for(let e=0;e<r;e++)t+=String.fromCharCode(n[e]);return btoa(t)},Bn=class{constructor(e,t){t&&t.length===2&&t[1].startsWith(Pn)&&(this.authToken=atob(t[1].slice(Pn.length))),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.reqs=new Set,this.awaitingBatchAck=!1,this.currentBatch=null,this.currentBatchTimer=null,this.batchBuffer=[],this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(e),this.readyState=kn.connecting,setTimeout(()=>this.poll(),0)}normalizeEndpoint(e){return e.replace(`ws://`,`http://`).replace(`wss://`,`https://`).replace(RegExp(`(.*)/`+Mn.websocket),`$1/`+Mn.longpoll)}endpointURL(){return Rn.appendParams(this.pollEndpoint,{token:this.token})}closeAndRetry(e,t,n){this.close(e,t,n),this.readyState=kn.connecting}ontimeout(){this.onerror(`timeout`),this.closeAndRetry(1005,`timeout`,!1)}isActive(){return this.readyState===kn.open||this.readyState===kn.connecting}poll(){let e={Accept:`application/json`};this.authToken&&(e[`X-Phoenix-AuthToken`]=this.authToken),this.ajax(`GET`,e,null,()=>this.ontimeout(),e=>{if(e){var{status:t,token:n,messages:r}=e;if(t===410&&this.token!==null){this.onerror(410),this.closeAndRetry(3410,`session_gone`,!1);return}this.token=n}else t=0;switch(t){case 200:r.forEach(e=>{setTimeout(()=>this.onmessage({data:e}),0)}),this.poll();break;case 204:this.poll();break;case 410:this.readyState=kn.open,this.onopen({}),this.poll();break;case 403:this.onerror(403),this.close(1008,`forbidden`,!1);break;case 0:case 500:this.onerror(500),this.closeAndRetry(1011,`internal server error`,500);break;default:throw Error(`unhandled poll status ${t}`)}})}send(e){typeof e!=`string`&&(e=zn(e)),this.currentBatch?this.currentBatch.push(e):this.awaitingBatchAck?this.batchBuffer.push(e):(this.currentBatch=[e],this.currentBatchTimer=setTimeout(()=>{this.batchSend(this.currentBatch),this.currentBatch=null},0))}batchSend(e){this.awaitingBatchAck=!0,this.ajax(`POST`,{"Content-Type":`application/x-ndjson`},e.join(`
`),()=>this.onerror(`timeout`),e=>{this.awaitingBatchAck=!1,!e||e.status!==200?(this.onerror(e&&e.status),this.closeAndRetry(1011,`internal server error`,!1)):this.batchBuffer.length>0&&(this.batchSend(this.batchBuffer),this.batchBuffer=[])})}close(e,t,n){for(let e of this.reqs)e.abort();this.readyState=kn.closed;let r=Object.assign({code:1e3,reason:void 0,wasClean:!0},{code:e,reason:t,wasClean:n});this.batchBuffer=[],clearTimeout(this.currentBatchTimer),this.currentBatchTimer=null,typeof CloseEvent<`u`?this.onclose(new CloseEvent(`close`,r)):this.onclose(r)}ajax(e,t,n,r,i){let a;a=Rn.request(e,this.endpointURL(),t,n,this.timeout,()=>{this.reqs.delete(a),r()},e=>{this.reqs.delete(a),this.isActive()&&i(e)}),this.reqs.add(a)}},Vn=class e{constructor(t,n={}){let r=n.events||{state:`presence_state`,diff:`presence_diff`};this.state={},this.pendingDiffs=[],this.channel=t,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(r.state,t=>{let{onJoin:n,onLeave:r,onSync:i}=this.caller;this.joinRef=this.channel.joinRef(),this.state=e.syncState(this.state,t,n,r),this.pendingDiffs.forEach(t=>{this.state=e.syncDiff(this.state,t,n,r)}),this.pendingDiffs=[],i()}),this.channel.on(r.diff,t=>{let{onJoin:n,onLeave:r,onSync:i}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(t):(this.state=e.syncDiff(this.state,t,n,r),i())})}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}list(t){return e.list(this.state,t)}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}static syncState(e,t,n,r){let i=this.clone(e),a={},o={};return this.map(i,(e,n)=>{t[e]||(o[e]=n)}),this.map(t,(e,t)=>{let n=i[e];if(n){let r=t.metas.map(e=>e.phx_ref),i=n.metas.map(e=>e.phx_ref),s=t.metas.filter(e=>i.indexOf(e.phx_ref)<0),c=n.metas.filter(e=>r.indexOf(e.phx_ref)<0);s.length>0&&(a[e]=t,a[e].metas=s),c.length>0&&(o[e]=this.clone(n),o[e].metas=c)}else a[e]=t}),this.syncDiff(i,{joins:a,leaves:o},n,r)}static syncDiff(e,t,n,r){let{joins:i,leaves:a}=this.clone(t);return n||=function(){},r||=function(){},this.map(i,(t,r)=>{let i=e[t];if(e[t]=this.clone(r),i){let n=e[t].metas.map(e=>e.phx_ref),r=i.metas.filter(e=>n.indexOf(e.phx_ref)<0);e[t].metas.unshift(...r)}n(t,i,r)}),this.map(a,(t,n)=>{let i=e[t];if(!i)return;let a=n.metas.map(e=>e.phx_ref);i.metas=i.metas.filter(e=>a.indexOf(e.phx_ref)<0),r(t,i,n),i.metas.length===0&&delete e[t]}),e}static list(e,t){return t||=function(e,t){return t},this.map(e,(e,n)=>t(e,n))}static map(e,t){return Object.getOwnPropertyNames(e).map(n=>t(n,e[n]))}static clone(e){return JSON.parse(JSON.stringify(e))}},Hn={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode(e,t){if(e.payload.constructor===ArrayBuffer)return t(this.binaryEncode(e));{let n=[e.join_ref,e.ref,e.topic,e.event,e.payload];return t(JSON.stringify(n))}},decode(e,t){if(e.constructor===ArrayBuffer)return t(this.binaryDecode(e));{let[n,r,i,a,o]=JSON.parse(e);return t({join_ref:n,ref:r,topic:i,event:a,payload:o})}},binaryEncode(e){let{join_ref:t,ref:n,event:r,topic:i,payload:a}=e,o=this.META_LENGTH+t.length+n.length+i.length+r.length,s=new ArrayBuffer(this.HEADER_LENGTH+o),c=new DataView(s),l=0;c.setUint8(l++,this.KINDS.push),c.setUint8(l++,t.length),c.setUint8(l++,n.length),c.setUint8(l++,i.length),c.setUint8(l++,r.length),Array.from(t,e=>c.setUint8(l++,e.charCodeAt(0))),Array.from(n,e=>c.setUint8(l++,e.charCodeAt(0))),Array.from(i,e=>c.setUint8(l++,e.charCodeAt(0))),Array.from(r,e=>c.setUint8(l++,e.charCodeAt(0)));var u=new Uint8Array(s.byteLength+a.byteLength);return u.set(new Uint8Array(s),0),u.set(new Uint8Array(a),s.byteLength),u.buffer},binaryDecode(e){let t=new DataView(e),n=t.getUint8(0),r=new TextDecoder;switch(n){case this.KINDS.push:return this.decodePush(e,t,r);case this.KINDS.reply:return this.decodeReply(e,t,r);case this.KINDS.broadcast:return this.decodeBroadcast(e,t,r)}},decodePush(e,t,n){let r=t.getUint8(1),i=t.getUint8(2),a=t.getUint8(3),o=this.HEADER_LENGTH+this.META_LENGTH-1,s=n.decode(e.slice(o,o+r));o+=r;let c=n.decode(e.slice(o,o+i));o+=i;let l=n.decode(e.slice(o,o+a));return o+=a,{join_ref:s,ref:null,topic:c,event:l,payload:e.slice(o,e.byteLength)}},decodeReply(e,t,n){let r=t.getUint8(1),i=t.getUint8(2),a=t.getUint8(3),o=t.getUint8(4),s=this.HEADER_LENGTH+this.META_LENGTH,c=n.decode(e.slice(s,s+r));s+=r;let l=n.decode(e.slice(s,s+i));s+=i;let u=n.decode(e.slice(s,s+a));s+=a;let d=n.decode(e.slice(s,s+o));s+=o;let f={status:d,response:e.slice(s,e.byteLength)};return{join_ref:c,ref:l,topic:u,event:jn.reply,payload:f}},decodeBroadcast(e,t,n){let r=t.getUint8(1),i=t.getUint8(2),a=this.HEADER_LENGTH+2,o=n.decode(e.slice(a,a+r));a+=r;let s=n.decode(e.slice(a,a+i));return a+=i,{join_ref:null,ref:null,topic:o,event:s,payload:e.slice(a,e.byteLength)}}},Un=class{constructor(e,t={}){this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.fallbackRef=null,this.timeout=t.timeout||Dn,this.transport=t.transport||Tn.WebSocket||Bn,this.conn=void 0,this.primaryPassedHealthCheck=!1,this.longPollFallbackMs=t.longPollFallbackMs,this.fallbackTimer=null;let n=null;try{n=Tn&&Tn.sessionStorage}catch{}this.sessionStore=t.sessionStorage||n,this.establishedConnections=0,this.defaultEncoder=Hn.encode.bind(Hn),this.defaultDecoder=Hn.decode.bind(Hn),this.closeWasClean=!0,this.disconnecting=!1,this.binaryType=t.binaryType||`arraybuffer`,this.connectClock=1,this.pageHidden=!1,this.encode=void 0,this.decode=void 0,this.transport===Bn?(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder):(this.encode=t.encode||this.defaultEncoder,this.decode=t.decode||this.defaultDecoder);let r=null;wn&&wn.addEventListener&&(wn.addEventListener(`pagehide`,e=>{this.conn&&(this.disconnect(),r=this.connectClock)}),wn.addEventListener(`pageshow`,e=>{r===this.connectClock&&(r=null,this.connect())}),wn.addEventListener(`visibilitychange`,()=>{document.visibilityState===`hidden`?this.pageHidden=!0:(this.pageHidden=!1,!this.isConnected()&&!this.closeWasClean&&this.teardown(()=>this.connect()))})),this.heartbeatIntervalMs=t.heartbeatIntervalMs||3e4,this.autoSendHeartbeat=t.autoSendHeartbeat??!0,this.heartbeatCallback=t.heartbeatCallback??(()=>{}),this.rejoinAfterMs=e=>t.rejoinAfterMs?t.rejoinAfterMs(e):[1e3,2e3,5e3][e-1]||1e4,this.reconnectAfterMs=e=>t.reconnectAfterMs?t.reconnectAfterMs(e):[10,50,100,150,200,250,500,1e3,2e3][e-1]||5e3,this.logger=t.logger||null,!this.logger&&t.debug&&(this.logger=(e,t,n)=>{console.log(`${e}: ${t}`,n)}),this.longpollerTimeout=t.longpollerTimeout||2e4,this.params=Sn(t.params||{}),this.endPoint=`${e}/${Mn.websocket}`,this.vsn=t.vsn||En,this.heartbeatTimeoutTimer=null,this.heartbeatTimer=null,this.heartbeatSentAt=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new In(()=>{if(this.pageHidden){this.log(`Not reconnecting as page is hidden!`),this.teardown();return}this.teardown(async()=>{t.beforeReconnect&&await t.beforeReconnect(),this.connect()})},this.reconnectAfterMs),this.authToken=t.authToken}getLongPollTransport(){return Bn}replaceTransport(e){this.connectClock++,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.conn&&=(this.conn.close(),null),this.transport=e}protocol(){return location.protocol.match(/^https/)?`wss`:`ws`}endPointURL(){let e=Rn.appendParams(Rn.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return e.charAt(0)===`/`?e.charAt(1)===`/`?`${this.protocol()}:${e}`:`${this.protocol()}://${location.host}${e}`:e}disconnect(e,t,n){this.connectClock++,this.disconnecting=!0,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.teardown(()=>{this.disconnecting=!1,e&&e()},t,n)}connect(e){e&&(console&&console.log(`passing params to connect is deprecated. Instead pass :params to the Socket constructor`),this.params=Sn(e)),!(this.conn&&!this.disconnecting)&&(this.longPollFallbackMs&&this.transport!==Bn?this.connectWithFallback(Bn,this.longPollFallbackMs):this.transportConnect())}log(e,t,n){this.logger&&this.logger(e,t,n)}hasLogger(){return this.logger!==null}onOpen(e){let t=this.makeRef();return this.stateChangeCallbacks.open.push([t,e]),t}onClose(e){let t=this.makeRef();return this.stateChangeCallbacks.close.push([t,e]),t}onError(e){let t=this.makeRef();return this.stateChangeCallbacks.error.push([t,e]),t}onMessage(e){let t=this.makeRef();return this.stateChangeCallbacks.message.push([t,e]),t}onHeartbeat(e){this.heartbeatCallback=e}ping(e){if(!this.isConnected())return!1;let t=this.makeRef(),n=Date.now();this.push({topic:`phoenix`,event:`heartbeat`,payload:{},ref:t});let r=this.onMessage(i=>{i.ref===t&&(this.off([r]),e(Date.now()-n))});return!0}transportName(e){switch(e){case Bn:return`LongPoll`;default:return e.name}}transportConnect(){this.connectClock++,this.closeWasClean=!1;let e;this.authToken&&(e=[`phoenix`,`${Pn}${btoa(this.authToken).replace(/=/g,``)}`]),this.conn=new this.transport(this.endPointURL(),e),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=()=>this.onConnOpen(),this.conn.onerror=e=>this.onConnError(e),this.conn.onmessage=e=>this.onConnMessage(e),this.conn.onclose=e=>this.onConnClose(e)}getSession(e){return this.sessionStore&&this.sessionStore.getItem(e)}storeSession(e,t){this.sessionStore&&this.sessionStore.setItem(e,t)}connectWithFallback(e,t=2500){clearTimeout(this.fallbackTimer);let n=!1,r=!0,i,a=this.transportName(e),o=t=>{this.log(`transport`,`falling back to ${a}...`,t),this.off([void 0,i]),r=!1,this.replaceTransport(e),this.transportConnect()};if(this.getSession(`phx:fallback:${a}`))return o(`memorized`);this.fallbackTimer=setTimeout(o,t),i=this.onError(e=>{this.log(`transport`,`error`,e),r&&!n&&(clearTimeout(this.fallbackTimer),o(e))}),this.fallbackRef&&this.off([this.fallbackRef]),this.fallbackRef=this.onOpen(()=>{if(n=!0,!r){let t=this.transportName(e);return this.primaryPassedHealthCheck||this.storeSession(`phx:fallback:${t}`,`true`),this.log(`transport`,`established ${t} fallback`)}clearTimeout(this.fallbackTimer),this.fallbackTimer=setTimeout(o,t),this.ping(e=>{this.log(`transport`,`connected to primary after`,e),this.primaryPassedHealthCheck=!0,clearTimeout(this.fallbackTimer)})}),this.transportConnect()}clearHeartbeats(){clearTimeout(this.heartbeatTimer),clearTimeout(this.heartbeatTimeoutTimer)}onConnOpen(){this.hasLogger()&&this.log(`transport`,`connected to ${this.endPointURL()}`),this.closeWasClean=!1,this.disconnecting=!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.autoSendHeartbeat&&this.resetHeartbeat(),this.triggerStateCallbacks(`open`)}heartbeatTimeout(){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.hasLogger()&&this.log(`transport`,`heartbeat timeout. Attempting to re-establish connection`);try{this.heartbeatCallback(`timeout`)}catch(e){this.log(`error`,`error in heartbeat callback`,e)}this.triggerChanError(Error(`heartbeat timeout`)),this.closeWasClean=!1,this.teardown(()=>this.reconnectTimer.scheduleTimeout(),On,`heartbeat timeout`)}}resetHeartbeat(){this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,this.clearHeartbeats(),this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}teardown(e,t,n){if(!this.conn)return e&&e();let r=this.conn;this.waitForBufferDone(r,()=>{t?r.close(t,n||``):r.close(),this.waitForSocketClosed(r,()=>{this.conn===r&&(this.conn.onopen=function(){},this.conn.onerror=function(){},this.conn.onmessage=function(){},this.conn.onclose=function(){},this.conn=null),e&&e()})})}waitForBufferDone(e,t,n=1){if(n===5||!e.bufferedAmount){t();return}setTimeout(()=>{this.waitForBufferDone(e,t,n+1)},150*n)}waitForSocketClosed(e,t,n=1){if(n===5||e.readyState===kn.closed){t();return}setTimeout(()=>{this.waitForSocketClosed(e,t,n+1)},150*n)}onConnClose(e){this.conn&&(this.conn.onclose=()=>{}),this.hasLogger()&&this.log(`transport`,`close`,e),this.triggerChanError(e),this.clearHeartbeats(),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.triggerStateCallbacks(`close`,e)}onConnError(e){this.hasLogger()&&this.log(`transport`,`error`,e);let t=this.transport,n=this.establishedConnections;this.triggerStateCallbacks(`error`,e,t,n),(t===this.transport||n>0)&&this.triggerChanError(e)}triggerChanError(e){this.channels.forEach(t=>{t.isErrored()||t.isLeaving()||t.isClosed()||t.trigger(jn.error,e)})}connectionState(){switch(this.conn&&this.conn.readyState){case kn.connecting:return`connecting`;case kn.open:return`open`;case kn.closing:return`closing`;default:return`closed`}}isConnected(){return this.connectionState()===`open`}remove(e){this.off(e.stateChangeRefs),this.channels=this.channels.filter(t=>t!==e)}off(e){for(let t in this.stateChangeCallbacks)this.stateChangeCallbacks[t]=this.stateChangeCallbacks[t].filter(([t])=>e.indexOf(t)===-1)}channel(e,t={}){let n=new Ln(e,t,this);return this.channels.push(n),n}push(e){if(this.hasLogger()){let{topic:t,event:n,payload:r,ref:i,join_ref:a}=e;this.log(`push`,`${t} ${n} (${a}, ${i})`,r)}this.isConnected()?this.encode(e,e=>this.conn.send(e)):this.sendBuffer.push(()=>this.encode(e,e=>this.conn.send(e)))}makeRef(){let e=this.ref+1;return e===this.ref?this.ref=0:this.ref=e,this.ref.toString()}sendHeartbeat(){if(!this.isConnected()){try{this.heartbeatCallback(`disconnected`)}catch(e){this.log(`error`,`error in heartbeat callback`,e)}return}if(this.pendingHeartbeatRef){this.heartbeatTimeout();return}this.pendingHeartbeatRef=this.makeRef(),this.heartbeatSentAt=Date.now(),this.push({topic:`phoenix`,event:`heartbeat`,payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback(`sent`)}catch(e){this.log(`error`,`error in heartbeat callback`,e)}this.heartbeatTimeoutTimer=setTimeout(()=>this.heartbeatTimeout(),this.heartbeatIntervalMs)}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(e=>e()),this.sendBuffer=[])}onConnMessage(e){this.decode(e.data,e=>{let{topic:t,event:n,payload:r,ref:i,join_ref:a}=e;if(i&&i===this.pendingHeartbeatRef){let e=this.heartbeatSentAt?Date.now()-this.heartbeatSentAt:void 0;this.clearHeartbeats();try{this.heartbeatCallback(r.status===`ok`?`ok`:`error`,e)}catch(e){this.log(`error`,`error in heartbeat callback`,e)}this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.autoSendHeartbeat&&(this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}this.hasLogger()&&this.log(`receive`,`${r.status||``} ${t} ${n} ${i&&`(`+i+`)`||``}`.trim(),r);for(let e=0;e<this.channels.length;e++){let o=this.channels[e];o.isMember(t,n,r,a)&&o.trigger(n,r,i,a)}this.triggerStateCallbacks(`message`,e)})}triggerStateCallbacks(e,...t){try{this.stateChangeCallbacks[e].forEach(([n,r])=>{try{r(...t)}catch(t){this.log(`error`,`error in ${e} callback`,t)}})}catch(t){this.log(`error`,`error triggering ${e} callbacks`,t)}}leaveOpenTopic(e){let t=this.channels.find(t=>t.topic===e&&(t.isJoined()||t.isJoining()));t&&(this.hasLogger()&&this.log(`transport`,`leaving duplicate topic "${e}"`),t.leave())}},Wn=class e{constructor(t,n){let r=qn(n);this.presence=new Vn(t.getChannel(),r),this.presence.onJoin((n,r,i)=>{let a=e.onJoinPayload(n,r,i);t.getChannel().trigger(`presence`,a)}),this.presence.onLeave((n,r,i)=>{let a=e.onLeavePayload(n,r,i);t.getChannel().trigger(`presence`,a)}),this.presence.onSync(()=>{t.getChannel().trigger(`presence`,{event:`sync`})})}get state(){return e.transformState(this.presence.state)}static transformState(e){return e=Kn(e),Object.getOwnPropertyNames(e).reduce((t,n)=>{let r=e[n];return t[n]=Gn(r),t},{})}static onJoinPayload(e,t,n){return{event:`join`,key:e,currentPresences:Jn(t),newPresences:Gn(n)}}static onLeavePayload(e,t,n){return{event:`leave`,key:e,currentPresences:Jn(t),leftPresences:Gn(n)}}};function Gn(e){return e.metas.map(e=>(e.presence_ref=e.phx_ref,delete e.phx_ref,delete e.phx_ref_prev,e))}function Kn(e){return JSON.parse(JSON.stringify(e))}function qn(e){return e?.events&&{events:e.events}}function Jn(e){return e?.metas?Gn(e):[]}var Yn;(function(e){e.SYNC=`sync`,e.JOIN=`join`,e.LEAVE=`leave`})(Yn||={});var Xn=class{get state(){return this.presenceAdapter.state}constructor(e,t){this.channel=e,this.presenceAdapter=new Wn(this.channel.channelAdapter,t)}};function Zn(e){if(e instanceof Error)return e;if(typeof e==`string`)return Error(e);if(e&&typeof e==`object`){let t=e;if(typeof t.code==`number`){let n=typeof t.reason==`string`&&t.reason?` (${t.reason})`:``;return Error(`socket closed: ${t.code}${n}`,{cause:e})}return Error(`channel error: transport failure`,{cause:e})}return Error(`channel error: connection lost`)}var Qn=class{constructor(e,t,n){let r=$n(n);this.channel=e.getSocket().channel(t,r),this.socket=e}get state(){return this.channel.state}set state(e){this.channel.state=e}get joinedOnce(){return this.channel.joinedOnce}get joinPush(){return this.channel.joinPush}get rejoinTimer(){return this.channel.rejoinTimer}on(e,t){return this.channel.on(e,t)}off(e,t){this.channel.off(e,t)}subscribe(e){return this.channel.join(e)}unsubscribe(e){return this.channel.leave(e)}teardown(){this.channel.teardown()}onClose(e){this.channel.onClose(e)}onError(e){return this.channel.onError(e)}push(e,t,n){let r;try{r=this.channel.push(e,t,n)}catch{throw Error(`tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`)}if(this.channel.pushBuffer.length>100){let e=this.channel.pushBuffer.shift();e.cancelTimeout(),this.socket.log(`channel`,`discarded push due to buffer overflow: ${e.event}`,e.payload())}return r}updateJoinPayload(e){let t=this.channel.joinPush.payload();this.channel.joinPush.payload=()=>Object.assign(Object.assign({},t),e)}canPush(){return this.socket.isConnected()&&this.state===cn.joined}isJoined(){return this.state===cn.joined}isJoining(){return this.state===cn.joining}isClosed(){return this.state===cn.closed}isLeaving(){return this.state===cn.leaving}updateFilterBindings(e){this.channel.filterBindings=e}updatePayloadTransform(e){this.channel.onMessage=e}getChannel(){return this.channel}};function $n(e){return{config:Object.assign({broadcast:{ack:!1,self:!1},presence:{key:``,enabled:!1},private:!1},e.config)}}var er;(function(e){e.ALL=`*`,e.INSERT=`INSERT`,e.UPDATE=`UPDATE`,e.DELETE=`DELETE`})(er||={});var tr;(function(e){e.BROADCAST=`broadcast`,e.PRESENCE=`presence`,e.POSTGRES_CHANGES=`postgres_changes`,e.SYSTEM=`system`})(tr||={});var nr;(function(e){e.SUBSCRIBED=`SUBSCRIBED`,e.TIMED_OUT=`TIMED_OUT`,e.CLOSED=`CLOSED`,e.CHANNEL_ERROR=`CHANNEL_ERROR`})(nr||={});var rr=class e{get state(){return this.channelAdapter.state}set state(e){this.channelAdapter.state=e}get joinedOnce(){return this.channelAdapter.joinedOnce}get timeout(){return this.socket.timeout}get joinPush(){return this.channelAdapter.joinPush}get rejoinTimer(){return this.channelAdapter.rejoinTimer}constructor(e,t={config:{}},n){if(this.topic=e,this.params=t,this.socket=n,this.bindings={},this.subTopic=e.replace(/^realtime:/i,``),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:``,enabled:!1},private:!1},t.config),this.channelAdapter=new Qn(this.socket.socketAdapter,e,this.params),this.presence=new Xn(this),this._onClose(()=>{this.socket._remove(this)}),this._updateFilterTransform(),this.broadcastEndpointURL=xn(this.socket.socketAdapter.endPointURL()),this.private=this.params.config.private||!1,!this.private&&this.params.config?.broadcast?.replay)throw Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`)}subscribe(e,t=this.timeout){if(this.socket.isConnected()||this.socket.connect(),this.channelAdapter.isClosed()){let{config:{broadcast:n,presence:r,private:i}}=this.params,a=this.bindings.postgres_changes?.map(e=>e.filter)??[],o=!!this.bindings[tr.PRESENCE]&&this.bindings[tr.PRESENCE].length>0||this.params.config.presence?.enabled===!0,s={},c={broadcast:n,presence:Object.assign(Object.assign({},r),{enabled:o}),postgres_changes:a,private:i};this.socket.accessTokenValue&&(s.access_token=this.socket.accessTokenValue),this._onError(t=>{e?.(nr.CHANNEL_ERROR,Zn(t))}),this._onClose(()=>e?.(nr.CLOSED)),this.updateJoinPayload(Object.assign({config:c},s)),this._updateFilterMessage(),this.channelAdapter.subscribe(t).receive(`ok`,async({postgres_changes:t})=>{if(this.socket._isManualToken()||this.socket.setAuth(),t===void 0){e?.(nr.SUBSCRIBED);return}this._updatePostgresBindings(t,e)}).receive(`error`,t=>{this.state=cn.errored;let n=Object.values(t).join(`, `)||`error`;e?.(nr.CHANNEL_ERROR,Error(n,{cause:t}))}).receive(`timeout`,()=>{e?.(nr.TIMED_OUT)})}return this}_updatePostgresBindings(t,n){let r=this.bindings.postgres_changes,i=r?.length??0,a=[];for(let o=0;o<i;o++){let i=r[o],{filter:{event:s,schema:c,table:l,filter:u}}=i,d=t&&t[o];if(d&&d.event===s&&e.isFilterValueEqual(d.schema,c)&&e.isFilterValueEqual(d.table,l)&&e.isFilterValueEqual(d.filter,u))a.push(Object.assign(Object.assign({},i),{id:d.id}));else{this.unsubscribe(),this.state=cn.errored,n?.(nr.CHANNEL_ERROR,Error(`mismatch between server and client bindings for postgres changes`));return}}this.bindings.postgres_changes=a,this.state!=cn.errored&&n&&n(nr.SUBSCRIBED)}presenceState(){return this.presence.state}async track(e,t={}){return await this.send({type:`presence`,event:`track`,payload:e},t.timeout||this.timeout)}async untrack(e={}){return await this.send({type:`presence`,event:`untrack`},e)}on(e,t,n){let r=this.channelAdapter.isJoined()||this.channelAdapter.isJoining(),i=e===tr.PRESENCE||e===tr.POSTGRES_CHANGES;if(r&&i)throw this.socket.log(`channel`,`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`),Error(`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);return this._on(e,t,n)}async httpSend(e,t,n={}){if(t==null)return Promise.reject(Error(`Payload is required for httpSend()`));let r={apikey:this.socket.apiKey?this.socket.apiKey:``,"Content-Type":`application/json`};this.socket.accessTokenValue&&(r.Authorization=`Bearer ${this.socket.accessTokenValue}`);let i={method:`POST`,headers:r,body:JSON.stringify({messages:[{topic:this.subTopic,event:e,payload:t,private:this.private}]})},a=await this._fetchWithTimeout(this.broadcastEndpointURL,i,n.timeout??this.timeout);if(a.status===202)return{success:!0};let o=a.statusText;try{let e=await a.json();o=e.error||e.message||o}catch{}return Promise.reject(Error(o))}async send(e,t={}){if(!this.channelAdapter.canPush()&&e.type===`broadcast`){console.warn(`Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.`);let{event:n,payload:r}=e,i={apikey:this.socket.apiKey?this.socket.apiKey:``,"Content-Type":`application/json`};this.socket.accessTokenValue&&(i.Authorization=`Bearer ${this.socket.accessTokenValue}`);let a={method:`POST`,headers:i,body:JSON.stringify({messages:[{topic:this.subTopic,event:n,payload:r,private:this.private}]})};try{let e=await this._fetchWithTimeout(this.broadcastEndpointURL,a,t.timeout??this.timeout);return await e.body?.cancel(),e.ok?`ok`:`error`}catch(e){return e instanceof Error&&e.name===`AbortError`?`timed out`:`error`}}else return new Promise(n=>{let r=this.channelAdapter.push(e.type,e,t.timeout||this.timeout);e.type===`broadcast`&&!this.params?.config?.broadcast?.ack&&n(`ok`),r.receive(`ok`,()=>n(`ok`)),r.receive(`error`,()=>n(`error`)),r.receive(`timeout`,()=>n(`timed out`))})}updateJoinPayload(e){this.channelAdapter.updateJoinPayload(e)}async unsubscribe(e=this.timeout){return new Promise(t=>{this.channelAdapter.unsubscribe(e).receive(`ok`,()=>t(`ok`)).receive(`timeout`,()=>t(`timed out`)).receive(`error`,()=>t(`error`))})}teardown(){this.channelAdapter.teardown()}async _fetchWithTimeout(e,t,n){let r=new AbortController,i=setTimeout(()=>r.abort(),n),a=await this.socket.fetch(e,Object.assign(Object.assign({},t),{signal:r.signal}));return clearTimeout(i),a}_on(e,t,n){let r=e.toLocaleLowerCase(),i={type:r,filter:t,callback:n,ref:this.channelAdapter.on(e,n)};return this.bindings[r]?this.bindings[r].push(i):this.bindings[r]=[i],this._updateFilterMessage(),this}_onClose(e){this.channelAdapter.onClose(e)}_onError(e){this.channelAdapter.onError(e)}_updateFilterMessage(){this.channelAdapter.updateFilterBindings((e,t,n)=>{let r=e.event.toLocaleLowerCase();if(this._notThisChannelEvent(r,n))return!1;let i=this.bindings[r]?.find(t=>t.ref===e.ref);if(!i)return!0;if([`broadcast`,`presence`,`postgres_changes`].includes(r))if(`id`in i){let e=i.id,n=i.filter?.event;return e&&t.ids?.includes(e)&&(n===`*`||n?.toLocaleLowerCase()===t.data?.type.toLocaleLowerCase())}else{let e=(i?.filter?.event)?.toLocaleLowerCase();return e===`*`||e===(t?.event)?.toLocaleLowerCase()}else return i.type.toLocaleLowerCase()===r})}_notThisChannelEvent(e,t){let{close:n,error:r,leave:i,join:a}=ln;return t&&[n,r,i,a].includes(e)&&t!==this.joinPush.ref}_updateFilterTransform(){this.channelAdapter.updatePayloadTransform((e,t,n)=>{if(typeof t==`object`&&`ids`in t){let e=t.data,{schema:n,table:r,commit_timestamp:i,type:a,errors:o}=e;return Object.assign(Object.assign({},{schema:n,table:r,commit_timestamp:i,eventType:a,new:{},old:{},errors:o}),this._getPayloadRecords(e))}return t})}copyBindings(e){if(this.joinedOnce)throw Error(`cannot copy bindings into joined channel`);for(let t in e.bindings)for(let n of e.bindings[t])this._on(n.type,n.filter,n.callback)}static isFilterValueEqual(e,t){return(e??void 0)===(t??void 0)}_getPayloadRecords(e){let t={new:{},old:{}};return(e.type===`INSERT`||e.type===`UPDATE`)&&(t.new=fn(e.columns,e.record)),(e.type===`UPDATE`||e.type===`DELETE`)&&(t.old=fn(e.columns,e.old_record)),t}},ir=class{constructor(e,t){this.socket=new Un(e,t)}get timeout(){return this.socket.timeout}get endPoint(){return this.socket.endPoint}get transport(){return this.socket.transport}get heartbeatIntervalMs(){return this.socket.heartbeatIntervalMs}get heartbeatCallback(){return this.socket.heartbeatCallback}set heartbeatCallback(e){this.socket.heartbeatCallback=e}get heartbeatTimer(){return this.socket.heartbeatTimer}get pendingHeartbeatRef(){return this.socket.pendingHeartbeatRef}get reconnectTimer(){return this.socket.reconnectTimer}get vsn(){return this.socket.vsn}get encode(){return this.socket.encode}get decode(){return this.socket.decode}get reconnectAfterMs(){return this.socket.reconnectAfterMs}get sendBuffer(){return this.socket.sendBuffer}get stateChangeCallbacks(){return this.socket.stateChangeCallbacks}connect(){this.socket.connect()}disconnect(e,t,n,r=1e4){return new Promise(i=>{setTimeout(()=>i(`timeout`),r),this.socket.disconnect(()=>{e(),i(`ok`)},t,n)})}push(e){this.socket.push(e)}log(e,t,n){this.socket.log(e,t,n)}makeRef(){return this.socket.makeRef()}onOpen(e){this.socket.onOpen(e)}onClose(e){this.socket.onClose(e)}onError(e){this.socket.onError(e)}onMessage(e){this.socket.onMessage(e)}isConnected(){return this.socket.isConnected()}isConnecting(){return this.socket.connectionState()==un.connecting}isDisconnecting(){return this.socket.connectionState()==un.closing}connectionState(){return this.socket.connectionState()}endPointURL(){return this.socket.endPointURL()}sendHeartbeat(){this.socket.sendHeartbeat()}getSocket(){return this.socket}},ar={HEARTBEAT_INTERVAL:25e3,RECONNECT_DELAY:10,HEARTBEAT_TIMEOUT_FALLBACK:100},or=[1e3,2e3,5e3,1e4],sr=1e4;function cr(){let e=new Map;return{get length(){return e.size},clear(){e.clear()},getItem(t){return e.has(t)?e.get(t):null},key(t){return Array.from(e.keys())[t]??null},removeItem(t){e.delete(t)},setItem(t,n){e.set(t,String(n))}}}function lr(){try{if(typeof globalThis<`u`&&globalThis.sessionStorage)return globalThis.sessionStorage}catch{}return cr()}var ur=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`,dr=class{get endPoint(){return this.socketAdapter.endPoint}get timeout(){return this.socketAdapter.timeout}get transport(){return this.socketAdapter.transport}get heartbeatCallback(){return this.socketAdapter.heartbeatCallback}get heartbeatIntervalMs(){return this.socketAdapter.heartbeatIntervalMs}get heartbeatTimer(){return this.worker?this._workerHeartbeatTimer:this.socketAdapter.heartbeatTimer}get pendingHeartbeatRef(){return this.worker?this._pendingWorkerHeartbeatRef:this.socketAdapter.pendingHeartbeatRef}get reconnectTimer(){return this.socketAdapter.reconnectTimer}get vsn(){return this.socketAdapter.vsn}get encode(){return this.socketAdapter.encode}get decode(){return this.socketAdapter.decode}get reconnectAfterMs(){return this.socketAdapter.reconnectAfterMs}get sendBuffer(){return this.socketAdapter.sendBuffer}get stateChangeCallbacks(){return this.socketAdapter.stateChangeCallbacks}constructor(e,t){if(this.channels=[],this.accessTokenValue=null,this.accessToken=null,this.apiKey=null,this.httpEndpoint=``,this.headers={},this.params={},this.ref=0,this.serializer=new dn,this._manuallySetToken=!1,this._authPromise=null,this._workerHeartbeatTimer=void 0,this._pendingWorkerHeartbeatRef=null,this._pendingDisconnectTimer=null,this._disconnectOnEmptyChannelsAfterMs=0,this._resolveFetch=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),!t?.params?.apikey)throw Error(`API key is required to connect to Realtime`);this.apiKey=t.params.apikey;let n=this._initializeOptions(t);this.socketAdapter=new ir(e,n),this.httpEndpoint=xn(e),this.fetch=this._resolveFetch(t?.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.isConnected())){this.accessToken&&!this._authPromise&&this._setAuthSafely(`connect`),this._setupConnectionHandlers();try{this.socketAdapter.connect()}catch(e){let t=e.message;throw t.includes(`Node.js`)?Error(`${t}\n\nTo use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):Error(`WebSocket not available: ${t}`)}this._handleNodeJsRaceCondition()}}endpointURL(){return this.socketAdapter.endPointURL()}async disconnect(e,t){return this._cancelPendingDisconnect(),this.isDisconnecting()?`ok`:await this.socketAdapter.disconnect(()=>{clearInterval(this._workerHeartbeatTimer),this._terminateWorker()},e,t)}getChannels(){return this.channels}async removeChannel(e){let t=await e.unsubscribe();return t===`ok`&&e.teardown(),t}async removeAllChannels(){let e=this.channels.map(async e=>{let t=await e.unsubscribe();return e.teardown(),t}),t=await Promise.all(e);return await this.disconnect(),t}log(e,t,n){this.socketAdapter.log(e,t,n)}connectionState(){return this.socketAdapter.connectionState()||un.closed}isConnected(){return this.socketAdapter.isConnected()}isConnecting(){return this.socketAdapter.isConnecting()}isDisconnecting(){return this.socketAdapter.isDisconnecting()}channel(e,t={config:{}}){let n=`realtime:${e}`,r=this.getChannels().find(e=>e.topic===n);if(r)return r;{let n=new rr(`realtime:${e}`,t,this);return this._cancelPendingDisconnect(),this.channels.push(n),n}}push(e){this.socketAdapter.push(e)}async setAuth(e=null){this._authPromise=this._performAuth(e);try{await this._authPromise}finally{this._authPromise=null}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){this.socketAdapter.sendHeartbeat()}onHeartbeat(e){this.socketAdapter.heartbeatCallback=this._wrapHeartbeatCallback(e)}_makeRef(){return this.socketAdapter.makeRef()}_remove(e){this.channels=this.channels.filter(t=>t.topic!==e.topic),this.channels.length===0&&(this.log(`transport`,`no channels remaining, scheduling disconnect`),this._schedulePendingDisconnect())}_schedulePendingDisconnect(){if(this._cancelPendingDisconnect(),this._disconnectOnEmptyChannelsAfterMs===0){this.log(`transport`,`disconnecting immediately - no channels`),this.disconnect();return}this._pendingDisconnectTimer=setTimeout(()=>{this._pendingDisconnectTimer=null,this.channels.length===0&&(this.log(`transport`,`deferred disconnect fired - no channels, disconnecting`),this.disconnect())},this._disconnectOnEmptyChannelsAfterMs),this.log(`transport`,`deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`)}_cancelPendingDisconnect(){this._pendingDisconnectTimer!==null&&(this.log(`transport`,`pending disconnect cancelled - channel activity detected`),clearTimeout(this._pendingDisconnectTimer),this._pendingDisconnectTimer=null)}async _performAuth(e=null){let t,n=!1;if(e)t=e,n=!0;else if(this.accessToken)try{t=await this.accessToken()}catch(e){this.log(`error`,`Error fetching access token from callback`,e),t=this.accessTokenValue}else t=this.accessTokenValue;n?this._manuallySetToken=!0:this.accessToken&&(this._manuallySetToken=!1),this.accessTokenValue!=t&&(this.accessTokenValue=t,this.channels.forEach(e=>{let n={access_token:t,version:nn};t&&e.updateJoinPayload(n),e.joinedOnce&&e.channelAdapter.isJoined()&&e.channelAdapter.push(ln.access_token,{access_token:t})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(e=`general`){this._isManualToken()||this.setAuth().catch(t=>{this.log(`error`,`Error setting auth in ${e}`,t)})}_setupConnectionHandlers(){this.socketAdapter.onOpen(()=>{(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).catch(e=>{this.log(`error`,`error waiting for auth on connect`,e)}),this.worker&&!this.workerRef&&this._startWorkerHeartbeat()}),this.socketAdapter.onClose(()=>{this.worker&&this.workerRef&&this._terminateWorker()}),this.socketAdapter.onMessage(e=>{e.ref&&e.ref===this._pendingWorkerHeartbeatRef&&(this._pendingWorkerHeartbeatRef=null)})}_handleNodeJsRaceCondition(){this.socketAdapter.isConnected()&&this.socketAdapter.getSocket().onConnOpen()}_wrapHeartbeatCallback(e){return(t,n)=>{t==`sent`&&this._setAuthSafely(),e&&e(t,n)}}_startWorkerHeartbeat(){this.workerUrl?this.log(`worker`,`starting worker for from ${this.workerUrl}`):this.log(`worker`,`starting default worker`);let e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=e=>{this.log(`worker`,`worker error`,e.message),this._terminateWorker(),this.disconnect()},this.workerRef.onmessage=e=>{e.data.event===`keepAlive`&&this.sendHeartbeat()},this.workerRef.postMessage({event:`start`,interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&=(this.log(`worker`,`terminating worker`),this.workerRef.terminate(),void 0)}_workerObjectUrl(e){let t;if(e)t=e;else{let e=new Blob([ur],{type:`application/javascript`});t=URL.createObjectURL(e)}return t}_initializeOptions(e){this.worker=e?.worker??!1,this.accessToken=e?.accessToken??null;let t={};t.timeout=e?.timeout??sn,t.heartbeatIntervalMs=e?.heartbeatIntervalMs??ar.HEARTBEAT_INTERVAL,this._disconnectOnEmptyChannelsAfterMs=e?.disconnectOnEmptyChannelsAfterMs??2*(e?.heartbeatIntervalMs??ar.HEARTBEAT_INTERVAL),t.transport=e?.transport??tn.getWebSocketConstructor(),t.params=e?.params,t.logger=e?.logger,t.heartbeatCallback=this._wrapHeartbeatCallback(e?.heartbeatCallback),t.sessionStorage=e?.sessionStorage??lr(),t.reconnectAfterMs=e?.reconnectAfterMs??(e=>or[e-1]||sr);let n,r,i=e?.vsn??on;switch(i){case rn:n=(e,t)=>t(JSON.stringify(e)),r=(e,t)=>t(JSON.parse(e));break;case an:n=this.serializer.encode.bind(this.serializer),r=this.serializer.decode.bind(this.serializer);break;default:throw Error(`Unsupported serializer version: ${t.vsn}`)}if(t.vsn=i,t.encode=e?.encode??n,t.decode=e?.decode??r,t.beforeReconnect=this._reconnectAuth.bind(this),(e?.logLevel||e?.log_level)&&(this.logLevel=e.logLevel||e.log_level,t.params=Object.assign(Object.assign({},t.params),{log_level:this.logLevel})),this.worker){if(typeof window<`u`&&!window.Worker)throw Error(`Web Worker is not supported`);this.workerUrl=e?.workerUrl,t.autoSendHeartbeat=!this.worker}return t}async _reconnectAuth(){await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()}},fr=class extends Error{constructor(e,t){super(e),this.name=`IcebergError`,this.status=t.status,this.icebergType=t.icebergType,this.icebergCode=t.icebergCode,this.details=t.details,this.isCommitStateUnknown=t.icebergType===`CommitStateUnknownException`||[500,502,504].includes(t.status)&&t.icebergType?.includes(`CommitState`)===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function pr(e,t,n){let r=new URL(t,e);if(n)for(let[e,t]of Object.entries(n))t!==void 0&&r.searchParams.set(e,t);return r.toString()}async function mr(e){return!e||e.type===`none`?{}:e.type===`bearer`?{Authorization:`Bearer ${e.token}`}:e.type===`header`?{[e.name]:e.value}:e.type===`custom`?await e.getHeaders():{}}function hr(e){let t=e.fetchImpl??globalThis.fetch;return{async request({method:n,path:r,query:i,body:a,headers:o}){let s=pr(e.baseUrl,r,i),c=await mr(e.auth),l=await t(s,{method:n,headers:{...a?{"Content-Type":`application/json`}:{},...c,...o},body:a?JSON.stringify(a):void 0}),u=await l.text(),d=(l.headers.get(`content-type`)||``).includes(`application/json`),f=d&&u?JSON.parse(u):u;if(!l.ok){let e=d?f:void 0,t=e?.error;throw new fr(t?.message??`Request failed with status ${l.status}`,{status:l.status,icebergType:t?.type,icebergCode:t?.code,details:e})}return{status:l.status,headers:l.headers,data:f}}}}function gr(e){return e.join(``)}var _r=class{constructor(e,t=``){this.client=e,this.prefix=t}async listNamespaces(e){let t=e?{parent:gr(e.namespace)}:void 0;return(await this.client.request({method:`GET`,path:`${this.prefix}/namespaces`,query:t})).data.namespaces.map(e=>({namespace:e}))}async createNamespace(e,t){let n={namespace:e.namespace,properties:t?.properties};return(await this.client.request({method:`POST`,path:`${this.prefix}/namespaces`,body:n})).data}async dropNamespace(e){await this.client.request({method:`DELETE`,path:`${this.prefix}/namespaces/${gr(e.namespace)}`})}async loadNamespaceMetadata(e){return{properties:(await this.client.request({method:`GET`,path:`${this.prefix}/namespaces/${gr(e.namespace)}`})).data.properties}}async namespaceExists(e){try{return await this.client.request({method:`HEAD`,path:`${this.prefix}/namespaces/${gr(e.namespace)}`}),!0}catch(e){if(e instanceof fr&&e.status===404)return!1;throw e}}async createNamespaceIfNotExists(e,t){try{return await this.createNamespace(e,t)}catch(e){if(e instanceof fr&&e.status===409)return;throw e}}};function vr(e){return e.join(``)}var yr=class{constructor(e,t=``,n){this.client=e,this.prefix=t,this.accessDelegation=n}async listTables(e){return(await this.client.request({method:`GET`,path:`${this.prefix}/namespaces/${vr(e.namespace)}/tables`})).data.identifiers}async createTable(e,t){let n={};return this.accessDelegation&&(n[`X-Iceberg-Access-Delegation`]=this.accessDelegation),(await this.client.request({method:`POST`,path:`${this.prefix}/namespaces/${vr(e.namespace)}/tables`,body:t,headers:n})).data.metadata}async updateTable(e,t){let n=await this.client.request({method:`POST`,path:`${this.prefix}/namespaces/${vr(e.namespace)}/tables/${e.name}`,body:t});return{"metadata-location":n.data[`metadata-location`],metadata:n.data.metadata}}async dropTable(e,t){await this.client.request({method:`DELETE`,path:`${this.prefix}/namespaces/${vr(e.namespace)}/tables/${e.name}`,query:{purgeRequested:String(t?.purge??!1)}})}async loadTable(e){let t={};return this.accessDelegation&&(t[`X-Iceberg-Access-Delegation`]=this.accessDelegation),(await this.client.request({method:`GET`,path:`${this.prefix}/namespaces/${vr(e.namespace)}/tables/${e.name}`,headers:t})).data.metadata}async tableExists(e){let t={};this.accessDelegation&&(t[`X-Iceberg-Access-Delegation`]=this.accessDelegation);try{return await this.client.request({method:`HEAD`,path:`${this.prefix}/namespaces/${vr(e.namespace)}/tables/${e.name}`,headers:t}),!0}catch(e){if(e instanceof fr&&e.status===404)return!1;throw e}}async createTableIfNotExists(e,t){try{return await this.createTable(e,t)}catch(n){if(n instanceof fr&&n.status===409)return await this.loadTable({namespace:e.namespace,name:t.name});throw n}}},br=class{constructor(e){let t=`v1`;e.catalogName&&(t+=`/${e.catalogName}`);let n=e.baseUrl.endsWith(`/`)?e.baseUrl:`${e.baseUrl}/`;this.client=hr({baseUrl:n,auth:e.auth,fetchImpl:e.fetch}),this.accessDelegation=e.accessDelegation?.join(`,`),this.namespaceOps=new _r(this.client,t),this.tableOps=new yr(this.client,t,this.accessDelegation)}async listNamespaces(e){return this.namespaceOps.listNamespaces(e)}async createNamespace(e,t){return this.namespaceOps.createNamespace(e,t)}async dropNamespace(e){await this.namespaceOps.dropNamespace(e)}async loadNamespaceMetadata(e){return this.namespaceOps.loadNamespaceMetadata(e)}async listTables(e){return this.tableOps.listTables(e)}async createTable(e,t){return this.tableOps.createTable(e,t)}async updateTable(e,t){return this.tableOps.updateTable(e,t)}async dropTable(e,t){await this.tableOps.dropTable(e,t)}async loadTable(e){return this.tableOps.loadTable(e)}async namespaceExists(e){return this.namespaceOps.namespaceExists(e)}async tableExists(e){return this.tableOps.tableExists(e)}async createNamespaceIfNotExists(e,t){return this.namespaceOps.createNamespaceIfNotExists(e,t)}async createTableIfNotExists(e,t){return this.tableOps.createTableIfNotExists(e,t)}};function xr(e){"@babel/helpers - typeof";return xr=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},xr(e)}function Sr(e,t){if(xr(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(xr(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Cr(e){var t=Sr(e,`string`);return xr(t)==`symbol`?t:t+``}function wr(e,t,n){return(t=Cr(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Tr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Tr(Object(n),!0).forEach(function(t){wr(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Tr(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Er=class extends Error{constructor(e,t=`storage`,n,r){super(e),this.__isStorageError=!0,this.namespace=t,this.name=t===`vectors`?`StorageVectorsError`:`StorageError`,this.status=n,this.statusCode=r}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}};function Dr(e){return typeof e==`object`&&!!e&&`__isStorageError`in e}var Or=class extends Er{constructor(e,t,n,r=`storage`){super(e,r,t,n),this.name=r===`vectors`?`StorageVectorsApiError`:`StorageApiError`,this.status=t,this.statusCode=n}toJSON(){return A({},super.toJSON())}},kr=class extends Er{constructor(e,t,n=`storage`){super(e,n),this.name=n===`vectors`?`StorageVectorsUnknownError`:`StorageUnknownError`,this.originalError=t}};function Ar(e,t,n){let r=A({},e),i=t.toLowerCase();for(let e of Object.keys(r))e.toLowerCase()===i&&delete r[e];return r[i]=n,r}function jr(e){let t={};for(let[n,r]of Object.entries(e))t[n.toLowerCase()]=r;return t}var Mr=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),Nr=e=>{if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Pr=e=>{if(Array.isArray(e))return e.map(e=>Pr(e));if(typeof e==`function`||e!==Object(e))return e;let t={};return Object.entries(e).forEach(([e,n])=>{let r=e.replace(/([-_][a-z])/gi,e=>e.toUpperCase().replace(/[-_]/g,``));t[r]=Pr(n)}),t},Fr=e=>!e||typeof e!=`string`||e.length===0||e.length>100||e.trim()!==e||e.includes(`/`)||e.includes(`\\`)?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(e),Ir=e=>{if(typeof e==`object`&&e){let t=e;if(typeof t.msg==`string`)return t.msg;if(typeof t.message==`string`)return t.message;if(typeof t.error_description==`string`)return t.error_description;if(typeof t.error==`string`)return t.error;if(typeof t.error==`object`&&t.error!==null){let e=t.error;if(typeof e.message==`string`)return e.message}}return JSON.stringify(e)},Lr=async(e,t,n,r)=>{if(typeof e==`object`&&e&&`json`in e&&typeof e.json==`function`){let n=e,i=parseInt(String(n.status),10);Number.isFinite(i)||(i=500),n.json().then(e=>{let n=e?.statusCode||e?.code||i+``;t(new Or(Ir(e),i,n,r))}).catch(()=>{let e=i+``;t(new Or(n.statusText||`HTTP ${i} error`,i,e,r))})}else t(new kr(Ir(e),e,r))},Rr=(e,t,n,r)=>{let i={method:e,headers:t?.headers||{}};if(e===`GET`||e===`HEAD`||!r)return A(A({},i),n);if(Nr(r)){let e=t?.headers||{},n;for(let[t,r]of Object.entries(e))t.toLowerCase()===`content-type`&&(n=r);i.headers=Ar(e,`Content-Type`,n??`application/json`),i.body=JSON.stringify(r)}else i.body=r;return t?.duplex&&(i.duplex=t.duplex),A(A({},i),n)};async function zr(e,t,n,r,i,a,o){return new Promise((s,c)=>{e(n,Rr(t,r,i,a)).then(e=>{if(!e.ok)throw e;if(r?.noResolveJson)return e;if(o===`vectors`){let t=e.headers.get(`content-type`);if(e.headers.get(`content-length`)===`0`||e.status===204||!t||!t.includes(`application/json`))return{}}return e.json()}).then(e=>s(e)).catch(e=>Lr(e,c,r,o))})}function Br(e=`storage`){return{get:async(t,n,r,i)=>zr(t,`GET`,n,r,i,void 0,e),post:async(t,n,r,i,a)=>zr(t,`POST`,n,i,a,r,e),put:async(t,n,r,i,a)=>zr(t,`PUT`,n,i,a,r,e),head:async(t,n,r,i)=>zr(t,`HEAD`,n,A(A({},r),{},{noResolveJson:!0}),i,void 0,e),remove:async(t,n,r,i,a)=>zr(t,`DELETE`,n,i,a,r,e)}}var{get:Vr,post:Hr,put:Ur,head:Wr,remove:Gr}=Br(`storage`),Kr=Br(`vectors`),qr=class{constructor(e,t={},n,r=`storage`){this.shouldThrowOnError=!1,this.url=e,this.headers=jr(t),this.fetch=Mr(n),this.namespace=r}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(e,t){return this.headers=Ar(this.headers,e,t),this}async handleOperation(e){var t=this;try{return{data:await e(),error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(Dr(e))return{data:null,error:e};throw e}}},Jr=Symbol.toStringTag,Yr=class{constructor(e,t){this.downloadFn=e,this.shouldThrowOnError=t,this[Jr]=`StreamDownloadBuilder`,this.promise=null}then(e,t){return this.getPromise().then(e,t)}catch(e){return this.getPromise().catch(e)}finally(e){return this.getPromise().finally(e)}getPromise(){return this.promise||=this.execute(),this.promise}async execute(){var e=this;try{return{data:(await e.downloadFn()).body,error:null}}catch(t){if(e.shouldThrowOnError)throw t;if(Dr(t))return{data:null,error:t};throw t}}},Xr=Symbol.toStringTag,Zr=class{constructor(e,t){this.downloadFn=e,this.shouldThrowOnError=t,this[Xr]=`BlobDownloadBuilder`,this.promise=null}asStream(){return new Yr(this.downloadFn,this.shouldThrowOnError)}then(e,t){return this.getPromise().then(e,t)}catch(e){return this.getPromise().catch(e)}finally(e){return this.getPromise().finally(e)}getPromise(){return this.promise||=this.execute(),this.promise}async execute(){var e=this;try{return{data:await(await e.downloadFn()).blob(),error:null}}catch(t){if(e.shouldThrowOnError)throw t;if(Dr(t))return{data:null,error:t};throw t}}},Qr={limit:100,offset:0,sortBy:{column:`name`,order:`asc`}},$r={cacheControl:`3600`,contentType:`text/plain;charset=UTF-8`,upsert:!1},ei=class extends qr{constructor(e,t={},n,r){super(e,t,r,`storage`),this.bucketId=n}async uploadOrUpdate(e,t,n,r){var i=this;return i.handleOperation(async()=>{let a,o=A(A({},$r),r),s=A(A({},i.headers),e===`POST`&&{"x-upsert":String(o.upsert)}),c=o.metadata;if(typeof Blob<`u`&&n instanceof Blob?(a=new FormData,a.append(`cacheControl`,o.cacheControl),c&&a.append(`metadata`,i.encodeMetadata(c)),a.append(``,n)):typeof FormData<`u`&&n instanceof FormData?(a=n,a.has(`cacheControl`)||a.append(`cacheControl`,o.cacheControl),c&&!a.has(`metadata`)&&a.append(`metadata`,i.encodeMetadata(c))):(a=n,s[`cache-control`]=`max-age=${o.cacheControl}`,s[`content-type`]=o.contentType,c&&(s[`x-metadata`]=i.toBase64(i.encodeMetadata(c))),(typeof ReadableStream<`u`&&a instanceof ReadableStream||a&&typeof a==`object`&&`pipe`in a&&typeof a.pipe==`function`)&&!o.duplex&&(o.duplex=`half`)),r?.headers)for(let[e,t]of Object.entries(r.headers))s=Ar(s,e,t);let l=i._removeEmptyFolders(t),u=i._getFinalPath(l),d=await(e==`PUT`?Ur:Hr)(i.fetch,`${i.url}/object/${u}`,a,A({headers:s},o?.duplex?{duplex:o.duplex}:{}));return{path:l,id:d.Id,fullPath:d.Key}})}async upload(e,t,n){return this.uploadOrUpdate(`POST`,e,t,n)}async uploadToSignedUrl(e,t,n,r){var i=this;let a=i._removeEmptyFolders(e),o=i._getFinalPath(a),s=new URL(i.url+`/object/upload/sign/${o}`);return s.searchParams.set(`token`,t),i.handleOperation(async()=>{let e,t=A(A({},$r),r),o=A(A({},i.headers),{"x-upsert":String(t.upsert)}),c=t.metadata;if(typeof Blob<`u`&&n instanceof Blob?(e=new FormData,e.append(`cacheControl`,t.cacheControl),c&&e.append(`metadata`,i.encodeMetadata(c)),e.append(``,n)):typeof FormData<`u`&&n instanceof FormData?(e=n,e.has(`cacheControl`)||e.append(`cacheControl`,t.cacheControl),c&&!e.has(`metadata`)&&e.append(`metadata`,i.encodeMetadata(c))):(e=n,o[`cache-control`]=`max-age=${t.cacheControl}`,o[`content-type`]=t.contentType,c&&(o[`x-metadata`]=i.toBase64(i.encodeMetadata(c))),(typeof ReadableStream<`u`&&e instanceof ReadableStream||e&&typeof e==`object`&&`pipe`in e&&typeof e.pipe==`function`)&&!t.duplex&&(t.duplex=`half`)),r?.headers)for(let[e,t]of Object.entries(r.headers))o=Ar(o,e,t);return{path:a,fullPath:(await Ur(i.fetch,s.toString(),e,A({headers:o},t?.duplex?{duplex:t.duplex}:{}))).Key}})}async createSignedUploadUrl(e,t){var n=this;return n.handleOperation(async()=>{let r=n._getFinalPath(e),i=A({},n.headers);t?.upsert&&(i[`x-upsert`]=`true`);let a=await Hr(n.fetch,`${n.url}/object/upload/sign/${r}`,{},{headers:i}),o=new URL(n.url+a.url),s=o.searchParams.get(`token`);if(!s)throw new Er(`No token returned by API`);return{signedUrl:o.toString(),path:e,token:s}})}async update(e,t,n){return this.uploadOrUpdate(`PUT`,e,t,n)}async move(e,t,n){var r=this;return r.handleOperation(async()=>await Hr(r.fetch,`${r.url}/object/move`,{bucketId:r.bucketId,sourceKey:e,destinationKey:t,destinationBucket:n?.destinationBucket},{headers:r.headers}))}async copy(e,t,n){var r=this;return r.handleOperation(async()=>({path:(await Hr(r.fetch,`${r.url}/object/copy`,{bucketId:r.bucketId,sourceKey:e,destinationKey:t,destinationBucket:n?.destinationBucket},{headers:r.headers})).Key}))}async createSignedUrl(e,t,n){var r=this;return r.handleOperation(async()=>{let i=r._getFinalPath(e),a=typeof n?.transform==`object`&&n.transform!==null&&Object.keys(n.transform).length>0,o=await Hr(r.fetch,`${r.url}/object/sign/${i}`,A({expiresIn:t},a?{transform:n.transform}:{}),{headers:r.headers}),s=new URLSearchParams;n?.download&&s.set(`download`,n.download===!0?``:n.download),n?.cacheNonce!=null&&s.set(`cacheNonce`,String(n.cacheNonce));let c=s.toString();return{signedUrl:encodeURI(`${r.url}${o.signedURL}${c?`&${c}`:``}`)}})}async createSignedUrls(e,t,n){var r=this;return r.handleOperation(async()=>{let i=await Hr(r.fetch,`${r.url}/object/sign/${r.bucketId}`,{expiresIn:t,paths:e},{headers:r.headers}),a=new URLSearchParams;n?.download&&a.set(`download`,n.download===!0?``:n.download),n?.cacheNonce!=null&&a.set(`cacheNonce`,String(n.cacheNonce));let o=a.toString();return i.map(e=>A(A({},e),{},{signedUrl:e.signedURL?encodeURI(`${r.url}${e.signedURL}${o?`&${o}`:``}`):null}))})}download(e,t,n){let r=typeof t?.transform==`object`&&t.transform!==null&&Object.keys(t.transform).length>0?`render/image/authenticated`:`object`,i=new URLSearchParams;t?.transform&&this.applyTransformOptsToQuery(i,t.transform),t?.cacheNonce!=null&&i.set(`cacheNonce`,String(t.cacheNonce));let a=i.toString(),o=this._getFinalPath(e);return new Zr(()=>Vr(this.fetch,`${this.url}/${r}/${o}${a?`?${a}`:``}`,{headers:this.headers,noResolveJson:!0},n),this.shouldThrowOnError)}async info(e){var t=this;let n=t._getFinalPath(e);return t.handleOperation(async()=>Pr(await Vr(t.fetch,`${t.url}/object/info/${n}`,{headers:t.headers})))}async exists(e){var t=this;let n=t._getFinalPath(e);try{return await Wr(t.fetch,`${t.url}/object/${n}`,{headers:t.headers}),{data:!0,error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(Dr(e)){let t=e instanceof Or?e.status:e instanceof kr?e.originalError?.status:void 0;if(t!==void 0&&[400,404].includes(t))return{data:!1,error:e}}throw e}}getPublicUrl(e,t){let n=this._getFinalPath(e),r=new URLSearchParams;t?.download&&r.set(`download`,t.download===!0?``:t.download),t?.transform&&this.applyTransformOptsToQuery(r,t.transform),t?.cacheNonce!=null&&r.set(`cacheNonce`,String(t.cacheNonce));let i=r.toString(),a=typeof t?.transform==`object`&&t.transform!==null&&Object.keys(t.transform).length>0?`render/image`:`object`;return{data:{publicUrl:encodeURI(`${this.url}/${a}/public/${n}`)+(i?`?${i}`:``)}}}async remove(e){var t=this;return t.handleOperation(async()=>await Gr(t.fetch,`${t.url}/object/${t.bucketId}`,{prefixes:e},{headers:t.headers}))}async list(e,t,n){var r=this;return r.handleOperation(async()=>{let i=A(A(A({},Qr),t),{},{prefix:e||``});return await Hr(r.fetch,`${r.url}/object/list/${r.bucketId}`,i,{headers:r.headers},n)})}async listV2(e,t){var n=this;return n.handleOperation(async()=>{let r=A({},e);return await Hr(n.fetch,`${n.url}/object/list-v2/${n.bucketId}`,r,{headers:n.headers},t)})}encodeMetadata(e){return JSON.stringify(e)}toBase64(e){return typeof Buffer<`u`?Buffer.from(e).toString(`base64`):btoa(e)}_getFinalPath(e){return`${this.bucketId}/${e.replace(/^\/+/,``)}`}_removeEmptyFolders(e){return e.replace(/^\/|\/$/g,``).replace(/\/+/g,`/`)}applyTransformOptsToQuery(e,t){return t.width&&e.set(`width`,t.width.toString()),t.height&&e.set(`height`,t.height.toString()),t.resize&&e.set(`resize`,t.resize),t.format&&e.set(`format`,t.format),t.quality&&e.set(`quality`,t.quality.toString()),e}},ti={"X-Client-Info":`storage-js/2.106.2`},ni=class extends qr{constructor(e,t={},n,r){let i=new URL(e);r?.useNewHostname&&/supabase\.(co|in|red)$/.test(i.hostname)&&!i.hostname.includes(`storage.supabase.`)&&(i.hostname=i.hostname.replace(`supabase.`,`storage.supabase.`));let a=i.href.replace(/\/$/,``),o=A(A({},ti),t);super(a,o,n,`storage`)}async listBuckets(e){var t=this;return t.handleOperation(async()=>{let n=t.listBucketOptionsToQueryString(e);return await Vr(t.fetch,`${t.url}/bucket${n}`,{headers:t.headers})})}async getBucket(e){var t=this;return t.handleOperation(async()=>await Vr(t.fetch,`${t.url}/bucket/${e}`,{headers:t.headers}))}async createBucket(e,t={public:!1}){var n=this;return n.handleOperation(async()=>await Hr(n.fetch,`${n.url}/bucket`,{id:e,name:e,type:t.type,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes},{headers:n.headers}))}async updateBucket(e,t){var n=this;return n.handleOperation(async()=>await Ur(n.fetch,`${n.url}/bucket/${e}`,{id:e,name:e,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes},{headers:n.headers}))}async emptyBucket(e){var t=this;return t.handleOperation(async()=>await Hr(t.fetch,`${t.url}/bucket/${e}/empty`,{},{headers:t.headers}))}async deleteBucket(e){var t=this;return t.handleOperation(async()=>await Gr(t.fetch,`${t.url}/bucket/${e}`,{},{headers:t.headers}))}listBucketOptionsToQueryString(e){let t={};return e&&(`limit`in e&&(t.limit=String(e.limit)),`offset`in e&&(t.offset=String(e.offset)),e.search&&(t.search=e.search),e.sortColumn&&(t.sortColumn=e.sortColumn),e.sortOrder&&(t.sortOrder=e.sortOrder)),Object.keys(t).length>0?`?`+new URLSearchParams(t).toString():``}},ri=class extends qr{constructor(e,t={},n){let r=e.replace(/\/$/,``),i=A(A({},ti),t);super(r,i,n,`storage`)}async createBucket(e){var t=this;return t.handleOperation(async()=>await Hr(t.fetch,`${t.url}/bucket`,{name:e},{headers:t.headers}))}async listBuckets(e){var t=this;return t.handleOperation(async()=>{let n=new URLSearchParams;e?.limit!==void 0&&n.set(`limit`,e.limit.toString()),e?.offset!==void 0&&n.set(`offset`,e.offset.toString()),e?.sortColumn&&n.set(`sortColumn`,e.sortColumn),e?.sortOrder&&n.set(`sortOrder`,e.sortOrder),e?.search&&n.set(`search`,e.search);let r=n.toString(),i=r?`${t.url}/bucket?${r}`:`${t.url}/bucket`;return await Vr(t.fetch,i,{headers:t.headers})})}async deleteBucket(e){var t=this;return t.handleOperation(async()=>await Gr(t.fetch,`${t.url}/bucket/${e}`,{},{headers:t.headers}))}from(e){var t=this;if(!Fr(e))throw new Er(`Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.`);let n=new br({baseUrl:this.url,catalogName:e,auth:{type:`custom`,getHeaders:async()=>t.headers},fetch:this.fetch}),r=this.shouldThrowOnError;return new Proxy(n,{get(e,t){let n=e[t];return typeof n==`function`?async(...t)=>{try{return{data:await n.apply(e,t),error:null}}catch(e){if(r)throw e;return{data:null,error:e}}}:n}})}},ii=class extends qr{constructor(e,t={},n){let r=e.replace(/\/$/,``),i=A(A({},ti),{},{"Content-Type":`application/json`},t);super(r,i,n,`vectors`)}async createIndex(e){var t=this;return t.handleOperation(async()=>await Kr.post(t.fetch,`${t.url}/CreateIndex`,e,{headers:t.headers})||{})}async getIndex(e,t){var n=this;return n.handleOperation(async()=>await Kr.post(n.fetch,`${n.url}/GetIndex`,{vectorBucketName:e,indexName:t},{headers:n.headers}))}async listIndexes(e){var t=this;return t.handleOperation(async()=>await Kr.post(t.fetch,`${t.url}/ListIndexes`,e,{headers:t.headers}))}async deleteIndex(e,t){var n=this;return n.handleOperation(async()=>await Kr.post(n.fetch,`${n.url}/DeleteIndex`,{vectorBucketName:e,indexName:t},{headers:n.headers})||{})}},ai=class extends qr{constructor(e,t={},n){let r=e.replace(/\/$/,``),i=A(A({},ti),{},{"Content-Type":`application/json`},t);super(r,i,n,`vectors`)}async putVectors(e){var t=this;if(e.vectors.length<1||e.vectors.length>500)throw Error(`Vector batch size must be between 1 and 500 items`);return t.handleOperation(async()=>await Kr.post(t.fetch,`${t.url}/PutVectors`,e,{headers:t.headers})||{})}async getVectors(e){var t=this;return t.handleOperation(async()=>await Kr.post(t.fetch,`${t.url}/GetVectors`,e,{headers:t.headers}))}async listVectors(e){var t=this;if(e.segmentCount!==void 0){if(e.segmentCount<1||e.segmentCount>16)throw Error(`segmentCount must be between 1 and 16`);if(e.segmentIndex!==void 0&&(e.segmentIndex<0||e.segmentIndex>=e.segmentCount))throw Error(`segmentIndex must be between 0 and ${e.segmentCount-1}`)}return t.handleOperation(async()=>await Kr.post(t.fetch,`${t.url}/ListVectors`,e,{headers:t.headers}))}async queryVectors(e){var t=this;return t.handleOperation(async()=>await Kr.post(t.fetch,`${t.url}/QueryVectors`,e,{headers:t.headers}))}async deleteVectors(e){var t=this;if(e.keys.length<1||e.keys.length>500)throw Error(`Keys batch size must be between 1 and 500 items`);return t.handleOperation(async()=>await Kr.post(t.fetch,`${t.url}/DeleteVectors`,e,{headers:t.headers})||{})}},oi=class extends qr{constructor(e,t={},n){let r=e.replace(/\/$/,``),i=A(A({},ti),{},{"Content-Type":`application/json`},t);super(r,i,n,`vectors`)}async createBucket(e){var t=this;return t.handleOperation(async()=>await Kr.post(t.fetch,`${t.url}/CreateVectorBucket`,{vectorBucketName:e},{headers:t.headers})||{})}async getBucket(e){var t=this;return t.handleOperation(async()=>await Kr.post(t.fetch,`${t.url}/GetVectorBucket`,{vectorBucketName:e},{headers:t.headers}))}async listBuckets(e={}){var t=this;return t.handleOperation(async()=>await Kr.post(t.fetch,`${t.url}/ListVectorBuckets`,e,{headers:t.headers}))}async deleteBucket(e){var t=this;return t.handleOperation(async()=>await Kr.post(t.fetch,`${t.url}/DeleteVectorBucket`,{vectorBucketName:e},{headers:t.headers})||{})}},si=class extends oi{constructor(e,t={}){super(e,t.headers||{},t.fetch)}from(e){return new ci(this.url,this.headers,e,this.fetch)}async createBucket(e){var t=()=>super.createBucket,n=this;return t().call(n,e)}async getBucket(e){var t=()=>super.getBucket,n=this;return t().call(n,e)}async listBuckets(e={}){var t=()=>super.listBuckets,n=this;return t().call(n,e)}async deleteBucket(e){var t=()=>super.deleteBucket,n=this;return t().call(n,e)}},ci=class extends ii{constructor(e,t,n,r){super(e,t,r),this.vectorBucketName=n}async createIndex(e){var t=()=>super.createIndex,n=this;return t().call(n,A(A({},e),{},{vectorBucketName:n.vectorBucketName}))}async listIndexes(e={}){var t=()=>super.listIndexes,n=this;return t().call(n,A(A({},e),{},{vectorBucketName:n.vectorBucketName}))}async getIndex(e){var t=()=>super.getIndex,n=this;return t().call(n,n.vectorBucketName,e)}async deleteIndex(e){var t=()=>super.deleteIndex,n=this;return t().call(n,n.vectorBucketName,e)}index(e){return new li(this.url,this.headers,this.vectorBucketName,e,this.fetch)}},li=class extends ai{constructor(e,t,n,r,i){super(e,t,i),this.vectorBucketName=n,this.indexName=r}async putVectors(e){var t=()=>super.putVectors,n=this;return t().call(n,A(A({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async getVectors(e){var t=()=>super.getVectors,n=this;return t().call(n,A(A({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async listVectors(e={}){var t=()=>super.listVectors,n=this;return t().call(n,A(A({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async queryVectors(e){var t=()=>super.queryVectors,n=this;return t().call(n,A(A({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async deleteVectors(e){var t=()=>super.deleteVectors,n=this;return t().call(n,A(A({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}},ui=class extends ni{constructor(e,t={},n,r){super(e,t,n,r)}from(e){return new ei(this.url,this.headers,e,this.fetch)}get vectors(){return new si(this.url+`/vector`,{headers:this.headers,fetch:this.fetch})}get analytics(){return new ri(this.url+`/iceberg`,this.headers,this.fetch)}},di=`2.106.2`,fi=30*1e3,pi=3*fi,mi=`http://localhost:9999`,hi=`supabase.auth.token`,gi={"X-Client-Info":`gotrue-js/${di}`},_i=`X-Supabase-Api-Version`,j={"2024-01-01":{timestamp:Date.parse(`2024-01-01T00:00:00.0Z`),name:`2024-01-01`}},vi=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,yi=class extends Error{constructor(e,t,n){super(e),this.__isAuthError=!0,this.name=`AuthError`,this.status=t,this.code=n}toJSON(){return{name:this.name,message:this.message,status:this.status,code:this.code}}};function M(e){return typeof e==`object`&&!!e&&`__isAuthError`in e}var bi=class extends yi{constructor(e,t,n){super(e,t,n),this.name=`AuthApiError`,this.status=t,this.code=n}};function xi(e){return M(e)&&e.name===`AuthApiError`}var Si=class extends yi{constructor(e,t){super(e),this.name=`AuthUnknownError`,this.originalError=t}},Ci=class extends yi{constructor(e,t,n,r){super(e,n,r),this.name=t,this.status=n}},N=class extends Ci{constructor(){super(`Auth session missing!`,`AuthSessionMissingError`,400,void 0)}};function wi(e){return M(e)&&e.name===`AuthSessionMissingError`}var Ti=class extends Ci{constructor(){super(`Auth session or user missing`,`AuthInvalidTokenResponseError`,500,void 0)}},Ei=class extends Ci{constructor(e){super(e,`AuthInvalidCredentialsError`,400,void 0)}},Di=class extends Ci{constructor(e,t=null){super(e,`AuthImplicitGrantRedirectError`,500,void 0),this.details=null,this.details=t}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}};function Oi(e){return M(e)&&e.name===`AuthImplicitGrantRedirectError`}var ki=class extends Ci{constructor(e,t=null){super(e,`AuthPKCEGrantCodeExchangeError`,500,void 0),this.details=null,this.details=t}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}},Ai=class extends Ci{constructor(){super(`PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.`,`AuthPKCECodeVerifierMissingError`,400,`pkce_code_verifier_not_found`)}},ji=class extends Ci{constructor(e,t){super(e,`AuthRetryableFetchError`,t,void 0)}};function Mi(e){return M(e)&&e.name===`AuthRetryableFetchError`}var Ni=class extends Ci{constructor(e,t,n){super(e,`AuthWeakPasswordError`,t,`weak_password`),this.reasons=n}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{reasons:this.reasons})}},Pi=class extends Ci{constructor(e){super(e,`AuthInvalidJwtError`,400,`invalid_jwt`)}},Fi=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_`.split(``),Ii=` 	
\r=`.split(``),Li=(()=>{let e=Array(128);for(let t=0;t<e.length;t+=1)e[t]=-1;for(let t=0;t<Ii.length;t+=1)e[Ii[t].charCodeAt(0)]=-2;for(let t=0;t<Fi.length;t+=1)e[Fi[t].charCodeAt(0)]=t;return e})();function Ri(e,t,n){if(e!==null)for(t.queue=t.queue<<8|e,t.queuedBits+=8;t.queuedBits>=6;)n(Fi[t.queue>>t.queuedBits-6&63]),t.queuedBits-=6;else if(t.queuedBits>0)for(t.queue<<=6-t.queuedBits,t.queuedBits=6;t.queuedBits>=6;)n(Fi[t.queue>>t.queuedBits-6&63]),t.queuedBits-=6}function zi(e,t,n){let r=Li[e];if(r>-1)for(t.queue=t.queue<<6|r,t.queuedBits+=6;t.queuedBits>=8;)n(t.queue>>t.queuedBits-8&255),t.queuedBits-=8;else if(r===-2)return;else throw Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`)}function Bi(e){let t=[],n=e=>{t.push(String.fromCodePoint(e))},r={utf8seq:0,codepoint:0},i={queue:0,queuedBits:0},a=e=>{Ui(e,r,n)};for(let t=0;t<e.length;t+=1)zi(e.charCodeAt(t),i,a);return t.join(``)}function Vi(e,t){if(e<=127){t(e);return}else if(e<=2047){t(192|e>>6),t(128|e&63);return}else if(e<=65535){t(224|e>>12),t(128|e>>6&63),t(128|e&63);return}else if(e<=1114111){t(240|e>>18),t(128|e>>12&63),t(128|e>>6&63),t(128|e&63);return}throw Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`)}function Hi(e,t){for(let n=0;n<e.length;n+=1){let r=e.charCodeAt(n);if(r>55295&&r<=56319){let t=(r-55296)*1024&65535;r=(e.charCodeAt(n+1)-56320&65535|t)+65536,n+=1}Vi(r,t)}}function Ui(e,t,n){if(t.utf8seq===0){if(e<=127){n(e);return}for(let n=1;n<6;n+=1)if(!(e>>7-n&1)){t.utf8seq=n;break}if(t.utf8seq===2)t.codepoint=e&31;else if(t.utf8seq===3)t.codepoint=e&15;else if(t.utf8seq===4)t.codepoint=e&7;else throw Error(`Invalid UTF-8 sequence`);--t.utf8seq}else if(t.utf8seq>0){if(e<=127)throw Error(`Invalid UTF-8 sequence`);t.codepoint=t.codepoint<<6|e&63,--t.utf8seq,t.utf8seq===0&&n(t.codepoint)}}function Wi(e){let t=[],n={queue:0,queuedBits:0},r=e=>{t.push(e)};for(let t=0;t<e.length;t+=1)zi(e.charCodeAt(t),n,r);return new Uint8Array(t)}function Gi(e){let t=[];return Hi(e,e=>t.push(e)),new Uint8Array(t)}function Ki(e){let t=[],n={queue:0,queuedBits:0},r=e=>{t.push(e)};return e.forEach(e=>Ri(e,n,r)),Ri(null,n,r),t.join(``)}function qi(e){return Math.round(Date.now()/1e3)+e}function Ji(){return Symbol(`auth-callback`)}var P=()=>typeof window<`u`&&typeof document<`u`,Yi={tested:!1,writable:!1},Xi=()=>{if(!P())return!1;try{if(typeof globalThis.localStorage!=`object`)return!1}catch{return!1}if(Yi.tested)return Yi.writable;let e=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(e,e),globalThis.localStorage.removeItem(e),Yi.tested=!0,Yi.writable=!0}catch{Yi.tested=!0,Yi.writable=!1}return Yi.writable};function Zi(e){let t={},n=new URL(e);if(n.hash&&n.hash[0]===`#`)try{new URLSearchParams(n.hash.substring(1)).forEach((e,n)=>{t[n]=e})}catch{}return n.searchParams.forEach((e,n)=>{t[n]=e}),t}var Qi=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),$i=e=>typeof e==`object`&&!!e&&`status`in e&&`ok`in e&&`json`in e&&typeof e.json==`function`,F=async(e,t,n)=>{await e.setItem(t,JSON.stringify(n))},I=async(e,t)=>{let n=await e.getItem(t);if(!n)return null;try{return JSON.parse(n)}catch{return null}},L=async(e,t)=>{await e.removeItem(t)},ea=class e{constructor(){this.promise=new e.promiseConstructor((e,t)=>{this.resolve=e,this.reject=t})}};ea.promiseConstructor=Promise;function ta(e){let t=e.split(`.`);if(t.length!==3)throw new Pi(`Invalid JWT structure`);for(let e=0;e<t.length;e++)if(!vi.test(t[e]))throw new Pi(`JWT not in base64url format`);return{header:JSON.parse(Bi(t[0])),payload:JSON.parse(Bi(t[1])),signature:Wi(t[2]),raw:{header:t[0],payload:t[1]}}}async function na(e){return await new Promise(t=>{setTimeout(()=>t(null),e)})}function ra(e,t){return new Promise((n,r)=>{(async()=>{for(let i=0;i<1/0;i++)try{let r=await e(i);if(!t(i,null,r)){n(r);return}}catch(e){if(!t(i,e)){r(e);return}}})()})}function ia(e){return(`0`+e.toString(16)).substr(-2)}function aa(){let e=new Uint32Array(56);if(typeof crypto>`u`){let e=``;for(let t=0;t<56;t++)e+=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~`.charAt(Math.floor(Math.random()*66));return e}return crypto.getRandomValues(e),Array.from(e,ia).join(``)}async function oa(e){let t=new TextEncoder().encode(e),n=await crypto.subtle.digest(`SHA-256`,t),r=new Uint8Array(n);return Array.from(r).map(e=>String.fromCharCode(e)).join(``)}async function sa(e){if(!(typeof crypto<`u`&&crypto.subtle!==void 0&&typeof TextEncoder<`u`))return console.warn(`WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.`),e;let t=await oa(e);return btoa(t).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=+$/,``)}async function ca(e,t,n=!1){let r=aa(),i=r;n&&(i+=`/recovery`),await F(e,`${t}-code-verifier`,i);let a=await sa(r);return[a,r===a?`plain`:`s256`]}var la=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function ua(e){let t=e.headers.get(_i);if(!t||!t.match(la))return null;try{return new Date(`${t}T00:00:00.0Z`)}catch{return null}}function da(e){if(!e)throw Error(`Missing exp claim`);if(e<=Math.floor(Date.now()/1e3))throw Error(`JWT has expired`)}function fa(e){switch(e){case`RS256`:return{name:`RSASSA-PKCS1-v1_5`,hash:{name:`SHA-256`}};case`ES256`:return{name:`ECDSA`,namedCurve:`P-256`,hash:{name:`SHA-256`}};default:throw Error(`Invalid alg claim`)}}var pa=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function ma(e){if(!pa.test(e))throw Error(`@supabase/auth-js: Expected parameter to be UUID but is not`)}function ha(e){if(!e.passkey)throw Error("@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).")}function ga(){return new Proxy({},{get:(e,t)=>{if(t===`__isUserNotAvailableProxy`)return!0;if(typeof t==`symbol`){let e=t.toString();if(e===`Symbol(Symbol.toPrimitive)`||e===`Symbol(Symbol.toStringTag)`||e===`Symbol(util.inspect.custom)`)return}throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${t}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,t)=>{throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,t)=>{throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function _a(e,t){return new Proxy(e,{get:(e,n,r)=>{if(n===`__isInsecureUserWarningProxy`)return!0;if(typeof n==`symbol`){let t=n.toString();if(t===`Symbol(Symbol.toPrimitive)`||t===`Symbol(Symbol.toStringTag)`||t===`Symbol(util.inspect.custom)`||t===`Symbol(nodejs.util.inspect.custom)`)return Reflect.get(e,n,r)}return!t.value&&typeof n==`string`&&(console.warn(`Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.`),t.value=!0),Reflect.get(e,n,r)}})}function va(e){return JSON.parse(JSON.stringify(e))}var ya=e=>{if(typeof e==`object`&&e){let t=e;if(typeof t.msg==`string`)return t.msg;if(typeof t.message==`string`)return t.message;if(typeof t.error_description==`string`)return t.error_description;if(typeof t.error==`string`)return t.error}return JSON.stringify(e)},ba=[502,503,504,520,521,522,523,524,530];async function xa(e){if(!$i(e))throw new ji(ya(e),0);if(ba.includes(e.status))throw new ji(ya(e),e.status);let t;try{t=await e.json()}catch(e){throw new Si(ya(e),e)}let n,r=ua(e);if(r&&r.getTime()>=j[`2024-01-01`].timestamp&&typeof t==`object`&&t&&typeof t.code==`string`?n=t.code:typeof t==`object`&&t&&typeof t.error_code==`string`&&(n=t.error_code),!n){if(typeof t==`object`&&t&&typeof t.weak_password==`object`&&t.weak_password&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.reasons.reduce((e,t)=>e&&typeof t==`string`,!0))throw new Ni(ya(t),e.status,t.weak_password.reasons)}else if(n===`weak_password`)throw new Ni(ya(t),e.status,t.weak_password?.reasons||[]);else if(n===`session_not_found`)throw new N;throw new bi(ya(t),e.status||500,n)}var Sa=(e,t,n,r)=>{let i={method:e,headers:t?.headers||{}};return e===`GET`?i:(i.headers=Object.assign({"Content-Type":`application/json;charset=UTF-8`},t?.headers),i.body=JSON.stringify(r),Object.assign(Object.assign({},i),n))};async function R(e,t,n,r){let i=Object.assign({},r?.headers);i[`X-Supabase-Api-Version`]||(i[_i]=j[`2024-01-01`].name),r?.jwt&&(i.Authorization=`Bearer ${r.jwt}`);let a=r?.query??{};r?.redirectTo&&(a.redirect_to=r.redirectTo);let o=await Ca(e,t,n+(Object.keys(a).length?`?`+new URLSearchParams(a).toString():``),{headers:i,noResolveJson:r?.noResolveJson},{},r?.body);return r?.xform?r?.xform(o):{data:Object.assign({},o),error:null}}async function Ca(e,t,n,r,i,a){let o=Sa(t,r,i,a),s;try{s=await e(n,Object.assign({},o))}catch(e){throw console.error(e),new ji(ya(e),0)}if(s.ok||await xa(s),r?.noResolveJson)return s;try{return await s.json()}catch(e){await xa(e)}}function wa(e){let t=null;z(e)&&(t=Object.assign({},e),e.expires_at||(t.expires_at=qi(e.expires_in)));let n=e.user??(typeof e?.id==`string`?e:null);return{data:{session:t,user:n},error:null}}function Ta(e){let t=wa(e);return!t.error&&e.weak_password&&typeof e.weak_password==`object`&&Array.isArray(e.weak_password.reasons)&&e.weak_password.reasons.length&&e.weak_password.message&&typeof e.weak_password.message==`string`&&e.weak_password.reasons.reduce((e,t)=>e&&typeof t==`string`,!0)&&(t.data.weak_password=e.weak_password),t}function Ea(e){return{data:{user:e.user??e},error:null}}function Da(e){return{data:e,error:null}}function Oa(e){let{action_link:t,email_otp:n,hashed_token:r,redirect_to:i,verification_type:a}=e,o=D(e,[`action_link`,`email_otp`,`hashed_token`,`redirect_to`,`verification_type`]);return{data:{properties:{action_link:t,email_otp:n,hashed_token:r,redirect_to:i,verification_type:a},user:Object.assign({},o)},error:null}}function ka(e){return e}function z(e){return!!e.access_token&&!!e.refresh_token&&!!e.expires_in}var Aa=[`global`,`local`,`others`],ja=class{_encodePathSegment(e){if(e===`.`||e===`..`)throw new yi(`Invalid path segment`);return encodeURIComponent(e)}constructor({url:e=``,headers:t={},fetch:n,experimental:r}){this.url=e,this.headers=t,this.fetch=Qi(n),this.experimental=r??{},this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)},this.customProviders={listProviders:this._listCustomProviders.bind(this),createProvider:this._createCustomProvider.bind(this),getProvider:this._getCustomProvider.bind(this),updateProvider:this._updateCustomProvider.bind(this),deleteProvider:this._deleteCustomProvider.bind(this)},this.passkey={listPasskeys:this._adminListPasskeys.bind(this),deletePasskey:this._adminDeletePasskey.bind(this)}}async signOut(e,t=Aa[0]){if(Aa.indexOf(t)<0)throw Error(`@supabase/auth-js: Parameter scope must be one of ${Aa.join(`, `)}`);try{return await R(this.fetch,`POST`,`${this.url}/logout?scope=${t}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(e){if(M(e))return{data:null,error:e};throw e}}async inviteUserByEmail(e,t={}){try{return await R(this.fetch,`POST`,`${this.url}/invite`,{body:{email:e,data:t.data},headers:this.headers,redirectTo:t.redirectTo,xform:Ea})}catch(e){if(M(e))return{data:{user:null},error:e};throw e}}async generateLink(e){try{let{options:t}=e,n=D(e,[`options`]),r=Object.assign(Object.assign({},n),t);return`newEmail`in n&&(r.new_email=n?.newEmail,delete r.newEmail),await R(this.fetch,`POST`,`${this.url}/admin/generate_link`,{body:r,headers:this.headers,xform:Oa,redirectTo:t?.redirectTo})}catch(e){if(M(e))return{data:{properties:null,user:null},error:e};throw e}}async createUser(e){try{return await R(this.fetch,`POST`,`${this.url}/admin/users`,{body:e,headers:this.headers,xform:Ea})}catch(e){if(M(e))return{data:{user:null},error:e};throw e}}async listUsers(e){try{let t={nextPage:null,lastPage:0,total:0},n=await R(this.fetch,`GET`,`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(e?.page)?.toString()??``,per_page:(e?.perPage)?.toString()??``},xform:ka});if(n.error)throw n.error;let r=await n.json(),i=n.headers.get(`x-total-count`)??0,a=n.headers.get(`link`)?.split(`,`)??[];return a.length>0&&(a.forEach(e=>{let n=parseInt(e.split(`;`)[0].split(`=`)[1].substring(0,1)),r=JSON.parse(e.split(`;`)[1].split(`=`)[1]);t[`${r}Page`]=n}),t.total=parseInt(i)),{data:Object.assign(Object.assign({},r),t),error:null}}catch(e){if(M(e))return{data:{users:[]},error:e};throw e}}async getUserById(e){ma(e);try{return await R(this.fetch,`GET`,`${this.url}/admin/users/${e}`,{headers:this.headers,xform:Ea})}catch(e){if(M(e))return{data:{user:null},error:e};throw e}}async updateUserById(e,t){ma(e);try{return await R(this.fetch,`PUT`,`${this.url}/admin/users/${e}`,{body:t,headers:this.headers,xform:Ea})}catch(e){if(M(e))return{data:{user:null},error:e};throw e}}async deleteUser(e,t=!1){ma(e);try{return await R(this.fetch,`DELETE`,`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:t},xform:Ea})}catch(e){if(M(e))return{data:{user:null},error:e};throw e}}async _listFactors(e){ma(e.userId);try{let{data:t,error:n}=await R(this.fetch,`GET`,`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:e=>({data:{factors:e},error:null})});return{data:t,error:n}}catch(e){if(M(e))return{data:null,error:e};throw e}}async _deleteFactor(e){ma(e.userId),ma(e.id);try{return{data:await R(this.fetch,`DELETE`,`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(e){if(M(e))return{data:null,error:e};throw e}}async _listOAuthClients(e){try{let t={nextPage:null,lastPage:0,total:0},n=await R(this.fetch,`GET`,`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(e?.page)?.toString()??``,per_page:(e?.perPage)?.toString()??``},xform:ka});if(n.error)throw n.error;let r=await n.json(),i=n.headers.get(`x-total-count`)??0,a=n.headers.get(`link`)?.split(`,`)??[];return a.length>0&&(a.forEach(e=>{let n=parseInt(e.split(`;`)[0].split(`=`)[1].substring(0,1)),r=JSON.parse(e.split(`;`)[1].split(`=`)[1]);t[`${r}Page`]=n}),t.total=parseInt(i)),{data:Object.assign(Object.assign({},r),t),error:null}}catch(e){if(M(e))return{data:{clients:[]},error:e};throw e}}async _createOAuthClient(e){try{return await R(this.fetch,`POST`,`${this.url}/admin/oauth/clients`,{body:e,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(M(e))return{data:null,error:e};throw e}}async _getOAuthClient(e){try{let t=this._encodePathSegment(e);return await R(this.fetch,`GET`,`${this.url}/admin/oauth/clients/${t}`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(M(e))return{data:null,error:e};throw e}}async _updateOAuthClient(e,t){try{let n=this._encodePathSegment(e);return await R(this.fetch,`PUT`,`${this.url}/admin/oauth/clients/${n}`,{body:t,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(M(e))return{data:null,error:e};throw e}}async _deleteOAuthClient(e){try{let t=this._encodePathSegment(e);return await R(this.fetch,`DELETE`,`${this.url}/admin/oauth/clients/${t}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(e){if(M(e))return{data:null,error:e};throw e}}async _regenerateOAuthClientSecret(e){try{let t=this._encodePathSegment(e);return await R(this.fetch,`POST`,`${this.url}/admin/oauth/clients/${t}/regenerate_secret`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(M(e))return{data:null,error:e};throw e}}async _listCustomProviders(e){try{let t={};return e?.type&&(t.type=e.type),await R(this.fetch,`GET`,`${this.url}/admin/custom-providers`,{headers:this.headers,query:t,xform:e=>({data:{providers:e?.providers??[]},error:null})})}catch(e){if(M(e))return{data:{providers:[]},error:e};throw e}}async _createCustomProvider(e){try{return await R(this.fetch,`POST`,`${this.url}/admin/custom-providers`,{body:e,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(M(e))return{data:null,error:e};throw e}}async _getCustomProvider(e){try{let t=this._encodePathSegment(e);return await R(this.fetch,`GET`,`${this.url}/admin/custom-providers/${t}`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(M(e))return{data:null,error:e};throw e}}async _updateCustomProvider(e,t){try{let n=this._encodePathSegment(e);return await R(this.fetch,`PUT`,`${this.url}/admin/custom-providers/${n}`,{body:t,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(M(e))return{data:null,error:e};throw e}}async _deleteCustomProvider(e){try{let t=this._encodePathSegment(e);return await R(this.fetch,`DELETE`,`${this.url}/admin/custom-providers/${t}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(e){if(M(e))return{data:null,error:e};throw e}}async _adminListPasskeys(e){ha(this.experimental),ma(e.userId);try{return await R(this.fetch,`GET`,`${this.url}/admin/users/${e.userId}/passkeys`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(M(e))return{data:null,error:e};throw e}}async _adminDeletePasskey(e){ha(this.experimental),ma(e.userId),ma(e.passkeyId);try{return await R(this.fetch,`DELETE`,`${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(e){if(M(e))return{data:null,error:e};throw e}}};function Ma(e={}){return{getItem:t=>e[t]||null,setItem:(t,n)=>{e[t]=n},removeItem:t=>{delete e[t]}}}var Na={debug:!!(globalThis&&Xi()&&globalThis.localStorage&&globalThis.localStorage.getItem(`supabase.gotrue-js.locks.debug`)===`true`)},Pa=class extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}},Fa=class extends Pa{};async function Ia(e,t,n){Na.debug&&console.log(`@supabase/gotrue-js: navigatorLock: acquire lock`,e,t);let r=new globalThis.AbortController,i;t>0&&(i=setTimeout(()=>{r.abort(),Na.debug&&console.log(`@supabase/gotrue-js: navigatorLock acquire timed out`,e)},t)),await Promise.resolve();try{return await globalThis.navigator.locks.request(e,t===0?{mode:`exclusive`,ifAvailable:!0}:{mode:`exclusive`,signal:r.signal},async r=>{if(r){clearTimeout(i),Na.debug&&console.log(`@supabase/gotrue-js: navigatorLock: acquired`,e,r.name);try{return await n()}finally{Na.debug&&console.log(`@supabase/gotrue-js: navigatorLock: released`,e,r.name)}}else if(t===0)throw Na.debug&&console.log(`@supabase/gotrue-js: navigatorLock: not immediately available`,e),new Fa(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);else{if(Na.debug)try{let e=await globalThis.navigator.locks.query();console.log(`@supabase/gotrue-js: Navigator LockManager state`,JSON.stringify(e,null,`  `))}catch(e){console.warn(`@supabase/gotrue-js: Error when querying Navigator LockManager state`,e)}return console.warn(`@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request`),clearTimeout(i),await n()}})}catch(a){if(t>0&&clearTimeout(i),typeof a==`object`&&a&&`name`in a&&a.name===`AbortError`&&t>0){if(r.signal.aborted)return Na.debug&&console.log(`@supabase/gotrue-js: navigatorLock: acquire timeout, recovering by stealing lock`,e),console.warn(`@supabase/gotrue-js: Lock "${e}" was not released within ${t}ms. This may indicate an orphaned lock from a component unmount (e.g., React Strict Mode). Forcefully acquiring the lock to recover.`),await Promise.resolve().then(()=>globalThis.navigator.locks.request(e,{mode:`exclusive`,steal:!0},async t=>{if(t){Na.debug&&console.log(`@supabase/gotrue-js: navigatorLock: recovered (stolen)`,e,t.name);try{return await n()}finally{Na.debug&&console.log(`@supabase/gotrue-js: navigatorLock: released (stolen)`,e,t.name)}}else return console.warn(`@supabase/gotrue-js: Navigator LockManager returned null lock even with steal: true`),await n()}));throw Na.debug&&console.log(`@supabase/gotrue-js: navigatorLock: lock was stolen by another request`,e),new Fa(`Lock "${e}" was released because another request stole it`)}throw a}}function La(){if(typeof globalThis!=`object`)try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<`u`&&(self.globalThis=self)}}function Ra(e){if(!/^0x[a-fA-F0-9]{40}$/.test(e))throw Error(`@supabase/auth-js: Address "${e}" is invalid.`);return e.toLowerCase()}function za(e){return parseInt(e,16)}function Ba(e){let t=new TextEncoder().encode(e);return`0x`+Array.from(t,e=>e.toString(16).padStart(2,`0`)).join(``)}function Va(e){let{chainId:t,domain:n,expirationTime:r,issuedAt:i=new Date,nonce:a,notBefore:o,requestId:s,resources:c,scheme:l,uri:u,version:d}=e;if(!Number.isInteger(t))throw Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${t}`);if(!n)throw Error(`@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.`);if(a&&a.length<8)throw Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`);if(!u)throw Error(`@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.`);if(d!==`1`)throw Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${d}`);if(e.statement?.includes(`
`))throw Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${e.statement}`);let f=Ra(e.address),p=`${l?`${l}://${n}`:n} wants you to sign in with your Ethereum account:\n${f}\n\n${e.statement?`${e.statement}\n`:``}`,m=`URI: ${u}\nVersion: ${d}\nChain ID: ${t}${a?`\nNonce: ${a}`:``}\nIssued At: ${i.toISOString()}`;if(r&&(m+=`\nExpiration Time: ${r.toISOString()}`),o&&(m+=`\nNot Before: ${o.toISOString()}`),s&&(m+=`\nRequest ID: ${s}`),c){let e=`
Resources:`;for(let t of c){if(!t||typeof t!=`string`)throw Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${t}`);e+=`\n- ${t}`}m+=e}return`${p}\n${m}`}var B=class extends Error{constructor({message:e,code:t,cause:n,name:r}){super(e,{cause:n}),this.__isWebAuthnError=!0,this.name=r??(n instanceof Error?n.name:void 0)??`Unknown Error`,this.code=t}toJSON(){return{name:this.name,message:this.message,code:this.code}}},Ha=class extends B{constructor(e,t){super({code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:t,message:e}),this.name=`WebAuthnUnknownError`,this.originalError=t}};function Ua({error:e,options:t}){let{publicKey:n}=t;if(!n)throw Error(`options was missing required publicKey property`);if(e.name===`AbortError`){if(t.signal instanceof AbortSignal)return new B({message:`Registration ceremony was sent an abort signal`,code:`ERROR_CEREMONY_ABORTED`,cause:e})}else if(e.name===`ConstraintError`){if(n.authenticatorSelection?.requireResidentKey===!0)return new B({message:`Discoverable credentials were required but no available authenticator supported it`,code:`ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT`,cause:e});if(t.mediation===`conditional`&&n.authenticatorSelection?.userVerification===`required`)return new B({message:`User verification was required during automatic registration but it could not be performed`,code:`ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE`,cause:e});if(n.authenticatorSelection?.userVerification===`required`)return new B({message:`User verification was required but no available authenticator supported it`,code:`ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT`,cause:e})}else if(e.name===`InvalidStateError`)return new B({message:`The authenticator was previously registered`,code:`ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED`,cause:e});else if(e.name===`NotAllowedError`)return new B({message:e.message,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e});else if(e.name===`NotSupportedError`)return n.pubKeyCredParams.filter(e=>e.type===`public-key`).length===0?new B({message:`No entry in pubKeyCredParams was of type "public-key"`,code:`ERROR_MALFORMED_PUBKEYCREDPARAMS`,cause:e}):new B({message:`No available authenticator supported any of the specified pubKeyCredParams algorithms`,code:`ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG`,cause:e});else if(e.name===`SecurityError`){let t=window.location.hostname;if(!Xa(t))return new B({message:`${window.location.hostname} is an invalid domain`,code:`ERROR_INVALID_DOMAIN`,cause:e});if(n.rp.id!==t)return new B({message:`The RP ID "${n.rp.id}" is invalid for this domain`,code:`ERROR_INVALID_RP_ID`,cause:e})}else if(e.name===`TypeError`){if(n.user.id.byteLength<1||n.user.id.byteLength>64)return new B({message:`User ID was not between 1 and 64 characters`,code:`ERROR_INVALID_USER_ID_LENGTH`,cause:e})}else if(e.name===`UnknownError`)return new B({message:`The authenticator was unable to process the specified options, or could not create a new credential`,code:`ERROR_AUTHENTICATOR_GENERAL_ERROR`,cause:e});return new B({message:`a Non-Webauthn related error has occurred`,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e})}function Wa({error:e,options:t}){let{publicKey:n}=t;if(!n)throw Error(`options was missing required publicKey property`);if(e.name===`AbortError`){if(t.signal instanceof AbortSignal)return new B({message:`Authentication ceremony was sent an abort signal`,code:`ERROR_CEREMONY_ABORTED`,cause:e})}else if(e.name===`NotAllowedError`)return new B({message:e.message,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e});else if(e.name===`SecurityError`){let t=window.location.hostname;if(!Xa(t))return new B({message:`${window.location.hostname} is an invalid domain`,code:`ERROR_INVALID_DOMAIN`,cause:e});if(n.rpId!==t)return new B({message:`The RP ID "${n.rpId}" is invalid for this domain`,code:`ERROR_INVALID_RP_ID`,cause:e})}else if(e.name===`UnknownError`)return new B({message:`The authenticator was unable to process the specified options, or could not create a new assertion signature`,code:`ERROR_AUTHENTICATOR_GENERAL_ERROR`,cause:e});return new B({message:`a Non-Webauthn related error has occurred`,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e})}var Ga=new class{createNewAbortSignal(){if(this.controller){let e=Error(`Cancelling existing WebAuthn API call for new one`);e.name=`AbortError`,this.controller.abort(e)}let e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){let e=Error(`Manually cancelling existing WebAuthn API call`);e.name=`AbortError`,this.controller.abort(e),this.controller=void 0}}};function Ka(e){if(!e)throw Error(`Credential creation options are required`);if(typeof PublicKeyCredential<`u`&&`parseCreationOptionsFromJSON`in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON==`function`)return PublicKeyCredential.parseCreationOptionsFromJSON(e);let{challenge:t,user:n,excludeCredentials:r}=e,i=D(e,[`challenge`,`user`,`excludeCredentials`]),a=Wi(t).buffer,o=Object.assign(Object.assign({},n),{id:Wi(n.id).buffer}),s=Object.assign(Object.assign({},i),{challenge:a,user:o});if(r&&r.length>0){s.excludeCredentials=Array(r.length);for(let e=0;e<r.length;e++){let t=r[e];s.excludeCredentials[e]=Object.assign(Object.assign({},t),{id:Wi(t.id).buffer,type:t.type||`public-key`,transports:t.transports})}}return s}function qa(e){if(!e)throw Error(`Credential request options are required`);if(typeof PublicKeyCredential<`u`&&`parseRequestOptionsFromJSON`in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON==`function`)return PublicKeyCredential.parseRequestOptionsFromJSON(e);let{challenge:t,allowCredentials:n}=e,r=D(e,[`challenge`,`allowCredentials`]),i=Wi(t).buffer,a=Object.assign(Object.assign({},r),{challenge:i});if(n&&n.length>0){a.allowCredentials=Array(n.length);for(let e=0;e<n.length;e++){let t=n[e];a.allowCredentials[e]=Object.assign(Object.assign({},t),{id:Wi(t.id).buffer,type:t.type||`public-key`,transports:t.transports})}}return a}function Ja(e){if(`toJSON`in e&&typeof e.toJSON==`function`)return e.toJSON();let t=e;return{id:e.id,rawId:e.id,response:{attestationObject:Ki(new Uint8Array(e.response.attestationObject)),clientDataJSON:Ki(new Uint8Array(e.response.clientDataJSON))},type:`public-key`,clientExtensionResults:e.getClientExtensionResults(),authenticatorAttachment:t.authenticatorAttachment??void 0}}function Ya(e){if(`toJSON`in e&&typeof e.toJSON==`function`)return e.toJSON();let t=e,n=e.getClientExtensionResults(),r=e.response;return{id:e.id,rawId:e.id,response:{authenticatorData:Ki(new Uint8Array(r.authenticatorData)),clientDataJSON:Ki(new Uint8Array(r.clientDataJSON)),signature:Ki(new Uint8Array(r.signature)),userHandle:r.userHandle?Ki(new Uint8Array(r.userHandle)):void 0},type:`public-key`,clientExtensionResults:n,authenticatorAttachment:t.authenticatorAttachment??void 0}}function Xa(e){return e===`localhost`||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e)}function Za(){return!!(P()&&`PublicKeyCredential`in window&&window.PublicKeyCredential&&`credentials`in navigator&&typeof(navigator==null?void 0:navigator.credentials)?.create==`function`&&typeof(navigator==null?void 0:navigator.credentials)?.get==`function`)}async function Qa(e){try{let t=await navigator.credentials.create(e);return t?t instanceof PublicKeyCredential?{data:t,error:null}:{data:null,error:new Ha(`Browser returned unexpected credential type`,t)}:{data:null,error:new Ha(`Empty credential response`,t)}}catch(t){return{data:null,error:Ua({error:t,options:e})}}}async function $a(e){try{let t=await navigator.credentials.get(e);return t?t instanceof PublicKeyCredential?{data:t,error:null}:{data:null,error:new Ha(`Browser returned unexpected credential type`,t)}:{data:null,error:new Ha(`Empty credential response`,t)}}catch(t){return{data:null,error:Wa({error:t,options:e})}}}var eo={hints:[`security-key`],authenticatorSelection:{authenticatorAttachment:`cross-platform`,requireResidentKey:!1,userVerification:`preferred`,residentKey:`discouraged`},attestation:`direct`},to={userVerification:`preferred`,hints:[`security-key`],attestation:`direct`};function no(...e){let t=e=>typeof e==`object`&&!!e&&!Array.isArray(e),n=e=>e instanceof ArrayBuffer||ArrayBuffer.isView(e),r={};for(let i of e)if(i)for(let e in i){let a=i[e];if(a!==void 0)if(Array.isArray(a))r[e]=a;else if(n(a))r[e]=a;else if(t(a)){let n=r[e];t(n)?r[e]=no(n,a):r[e]=no(a)}else r[e]=a}return r}function ro(e,t){return no(eo,e,t||{})}function io(e,t){return no(to,e,t||{})}var ao=class{constructor(e){this.client=e,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(e){return this.client.mfa.enroll(Object.assign(Object.assign({},e),{factorType:`webauthn`}))}async _challenge({factorId:e,webauthn:t,friendlyName:n,signal:r},i){try{let{data:a,error:o}=await this.client.mfa.challenge({factorId:e,webauthn:t});if(!a)return{data:null,error:o};let s=r??Ga.createNewAbortSignal();if(a.webauthn.type===`create`){let{user:e}=a.webauthn.credential_options.publicKey;if(!e.name){let t=n;if(t)e.name=`${e.id}:${t}`;else{let t=(await this.client.getUser()).data.user,n=t?.user_metadata?.name||t?.email||t?.id||`User`;e.name=`${e.id}:${n}`}}e.displayName||=e.name}switch(a.webauthn.type){case`create`:{let{data:t,error:n}=await Qa({publicKey:ro(a.webauthn.credential_options.publicKey,i?.create),signal:s});return t?{data:{factorId:e,challengeId:a.id,webauthn:{type:a.webauthn.type,credential_response:t}},error:null}:{data:null,error:n}}case`request`:{let t=io(a.webauthn.credential_options.publicKey,i?.request),{data:n,error:r}=await $a(Object.assign(Object.assign({},a.webauthn.credential_options),{publicKey:t,signal:s}));return n?{data:{factorId:e,challengeId:a.id,webauthn:{type:a.webauthn.type,credential_response:n}},error:null}:{data:null,error:r}}}}catch(e){return M(e)?{data:null,error:e}:{data:null,error:new Si(`Unexpected error in challenge`,e)}}}async _verify({challengeId:e,factorId:t,webauthn:n}){return this.client.mfa.verify({factorId:t,challengeId:e,webauthn:n})}async _authenticate({factorId:e,webauthn:{rpId:t=typeof window<`u`?window.location.hostname:void 0,rpOrigins:n=typeof window<`u`?[window.location.origin]:void 0,signal:r}={}},i){if(!t)return{data:null,error:new yi(`rpId is required for WebAuthn authentication`)};try{if(!Za())return{data:null,error:new Si(`Browser does not support WebAuthn`,null)};let{data:a,error:o}=await this.challenge({factorId:e,webauthn:{rpId:t,rpOrigins:n},signal:r},{request:i});if(!a)return{data:null,error:o};let{webauthn:s}=a;return this._verify({factorId:e,challengeId:a.challengeId,webauthn:{type:s.type,rpId:t,rpOrigins:n,credential_response:s.credential_response}})}catch(e){return M(e)?{data:null,error:e}:{data:null,error:new Si(`Unexpected error in authenticate`,e)}}}async _register({friendlyName:e,webauthn:{rpId:t=typeof window<`u`?window.location.hostname:void 0,rpOrigins:n=typeof window<`u`?[window.location.origin]:void 0,signal:r}={}},i){if(!t)return{data:null,error:new yi(`rpId is required for WebAuthn registration`)};try{if(!Za())return{data:null,error:new Si(`Browser does not support WebAuthn`,null)};let{data:a,error:o}=await this._enroll({friendlyName:e});if(!a)return await this.client.mfa.listFactors().then(t=>t.data?.all.find(t=>t.factor_type===`webauthn`&&t.friendly_name===e&&t.status!==`unverified`)).then(e=>e?this.client.mfa.unenroll({factorId:e?.id}):void 0),{data:null,error:o};let{data:s,error:c}=await this._challenge({factorId:a.id,friendlyName:a.friendly_name,webauthn:{rpId:t,rpOrigins:n},signal:r},{create:i});return s?this._verify({factorId:a.id,challengeId:s.challengeId,webauthn:{rpId:t,rpOrigins:n,type:s.webauthn.type,credential_response:s.webauthn.credential_response}}):{data:null,error:c}}catch(e){return M(e)?{data:null,error:e}:{data:null,error:new Si(`Unexpected error in register`,e)}}}};La();var oo={url:mi,storageKey:hi,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:gi,flowType:`implicit`,debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:5e3,skipAutoInitialize:!1,experimental:{}};async function so(e,t,n){return await n()}var co={},lo=class e{get jwks(){return co[this.storageKey]?.jwks??{keys:[]}}set jwks(e){co[this.storageKey]=Object.assign(Object.assign({},co[this.storageKey]),{jwks:e})}get jwks_cached_at(){return co[this.storageKey]?.cachedAt??-(2**53-1)}set jwks_cached_at(e){co[this.storageKey]=Object.assign(Object.assign({},co[this.storageKey]),{cachedAt:e})}constructor(t){var n;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;let r=Object.assign(Object.assign({},oo),t);if(this.storageKey=r.storageKey,this.instanceID=e.nextInstanceID[this.storageKey]??0,e.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!r.debug,typeof r.debug==`function`&&(this.logger=r.debug),this.instanceID>0&&P()){let e=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(e),this.logDebugMessages&&console.trace(e)}if(this.persistSession=r.persistSession,this.autoRefreshToken=r.autoRefreshToken,this.experimental=r.experimental??{},this.admin=new ja({url:r.url,headers:r.headers,fetch:r.fetch,experimental:this.experimental}),this.url=r.url,this.headers=r.headers,this.fetch=Qi(r.fetch),this.lock=r.lock||so,this.detectSessionInUrl=r.detectSessionInUrl,this.flowType=r.flowType,this.hasCustomAuthorizationHeader=r.hasCustomAuthorizationHeader,this.throwOnError=r.throwOnError,this.lockAcquireTimeout=r.lockAcquireTimeout,r.lock?this.lock=r.lock:this.persistSession&&P()&&(globalThis==null?void 0:globalThis.navigator)?.locks?this.lock=Ia:this.lock=so,this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=-(2**53-1)),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new ao(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.passkey={startRegistration:this._startPasskeyRegistration.bind(this),verifyRegistration:this._verifyPasskeyRegistration.bind(this),startAuthentication:this._startPasskeyAuthentication.bind(this),verifyAuthentication:this._verifyPasskeyAuthentication.bind(this),list:this._listPasskeys.bind(this),update:this._updatePasskey.bind(this),delete:this._deletePasskey.bind(this)},this.persistSession?(r.storage?this.storage=r.storage:Xi()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=Ma(this.memoryStorage)),r.userStorage&&(this.userStorage=r.userStorage)):(this.memoryStorage={},this.storage=Ma(this.memoryStorage)),P()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(e){console.error(`Failed to create a new BroadcastChannel, multi-tab state changes will not be available`,e)}(n=this.broadcastChannel)==null||n.addEventListener(`message`,async e=>{this._debug(`received broadcast notification from other tab or client`,e);try{await this._notifyAllSubscribers(e.data.event,e.data.session,!1)}catch(e){this._debug(`#broadcastChannel`,`error`,e)}})}r.skipAutoInitialize||this.initialize().catch(e=>{this._debug(`#initialize()`,`error`,e)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(e){if(this.throwOnError&&e&&e.error)throw e.error;return e}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${di}) ${new Date().toISOString()}`}_debug(...e){return this.logDebugMessages&&this.logger(this._logPrefix(),...e),this}async initialize(){return this.initializePromise||=(async()=>await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()))(),await this.initializePromise}async _initialize(){try{let e={},t=`none`;if(P()&&(e=Zi(window.location.href),this._isImplicitGrantCallback(e)?t=`implicit`:await this._isPKCECallback(e)&&(t=`pkce`)),P()&&this.detectSessionInUrl&&t!==`none`){let{data:n,error:r}=await this._getSessionFromURL(e,t);if(r){if(this._debug(`#_initialize()`,`error detecting session from URL`,r),Oi(r)){let e=r.details?.code;if(e===`identity_already_exists`||e===`identity_not_found`||e===`single_identity_not_deletable`)return{error:r}}return{error:r}}let{session:i,redirectType:a}=n;return this._debug(`#_initialize()`,`detected session in URL`,i,`redirect type`,a),await this._saveSession(i),setTimeout(async()=>{a===`recovery`?await this._notifyAllSubscribers(`PASSWORD_RECOVERY`,i):await this._notifyAllSubscribers(`SIGNED_IN`,i)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(e){return M(e)?this._returnResult({error:e}):this._returnResult({error:new Si(`Unexpected error during initialization`,e)})}finally{await this._handleVisibilityChange(),this._debug(`#_initialize()`,`end`)}}async signInAnonymously(e){try{let{data:t,error:n}=await R(this.fetch,`POST`,`${this.url}/signup`,{headers:this.headers,body:{data:e?.options?.data??{},gotrue_meta_security:{captcha_token:e?.options?.captchaToken}},xform:wa});if(n||!t)return this._returnResult({data:{user:null,session:null},error:n});let r=t.session,i=t.user;return t.session&&(await this._saveSession(t.session),await this._notifyAllSubscribers(`SIGNED_IN`,r)),this._returnResult({data:{user:i,session:r},error:null})}catch(e){if(M(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signUp(e){try{let t;if(`email`in e){let{email:n,password:r,options:i}=e,a=null,o=null;this.flowType===`pkce`&&([a,o]=await ca(this.storage,this.storageKey)),t=await R(this.fetch,`POST`,`${this.url}/signup`,{headers:this.headers,redirectTo:i?.emailRedirectTo,body:{email:n,password:r,data:i?.data??{},gotrue_meta_security:{captcha_token:i?.captchaToken},code_challenge:a,code_challenge_method:o},xform:wa})}else if(`phone`in e){let{phone:n,password:r,options:i}=e;t=await R(this.fetch,`POST`,`${this.url}/signup`,{headers:this.headers,body:{phone:n,password:r,data:i?.data??{},channel:i?.channel??`sms`,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:wa})}else throw new Ei(`You must provide either an email or phone number and a password`);let{data:n,error:r}=t;if(r||!n)return await L(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:r});let i=n.session,a=n.user;return n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers(`SIGNED_IN`,i)),this._returnResult({data:{user:a,session:i},error:null})}catch(e){if(await L(this.storage,`${this.storageKey}-code-verifier`),M(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithPassword(e){try{let t;if(`email`in e){let{email:n,password:r,options:i}=e;t=await R(this.fetch,`POST`,`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:n,password:r,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:Ta})}else if(`phone`in e){let{phone:n,password:r,options:i}=e;t=await R(this.fetch,`POST`,`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:n,password:r,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:Ta})}else throw new Ei(`You must provide either an email or phone number and a password`);let{data:n,error:r}=t;if(r)return this._returnResult({data:{user:null,session:null},error:r});if(!n||!n.session||!n.user){let e=new Ti;return this._returnResult({data:{user:null,session:null},error:e})}return n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers(`SIGNED_IN`,n.session)),this._returnResult({data:Object.assign({user:n.user,session:n.session},n.weak_password?{weakPassword:n.weak_password}:null),error:r})}catch(e){if(M(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithOAuth(e){return await this._handleProviderSignIn(e.provider,{redirectTo:e.options?.redirectTo,scopes:e.options?.scopes,queryParams:e.options?.queryParams,skipBrowserRedirect:e.options?.skipBrowserRedirect})}async exchangeCodeForSession(e){return await this.initializePromise,this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(e))}async signInWithWeb3(e){let{chain:t}=e;switch(t){case`ethereum`:return await this.signInWithEthereum(e);case`solana`:return await this.signInWithSolana(e);default:throw Error(`@supabase/auth-js: Unsupported chain "${t}"`)}}async signInWithEthereum(e){let t,n;if(`message`in e)t=e.message,n=e.signature;else{let{chain:r,wallet:i,statement:a,options:o}=e,s;if(!P()){if(typeof i!=`object`||!o?.url)throw Error(`@supabase/auth-js: Both wallet and url must be specified in non-browser environments.`);s=i}else if(typeof i==`object`)s=i;else{let e=window;if(`ethereum`in e&&typeof e.ethereum==`object`&&`request`in e.ethereum&&typeof e.ethereum.request==`function`)s=e.ethereum;else throw Error(`@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.`)}let c=new URL(o?.url??window.location.href),l=await s.request({method:`eth_requestAccounts`}).then(e=>e).catch(()=>{throw Error(`@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid`)});if(!l||l.length===0)throw Error(`@supabase/auth-js: No accounts available. Please ensure the wallet is connected.`);let u=Ra(l[0]),d=o?.signInWithEthereum?.chainId;d||=za(await s.request({method:`eth_chainId`})),t=Va({domain:c.host,address:u,statement:a,uri:c.href,version:`1`,chainId:d,nonce:o?.signInWithEthereum?.nonce,issuedAt:o?.signInWithEthereum?.issuedAt??new Date,expirationTime:o?.signInWithEthereum?.expirationTime,notBefore:o?.signInWithEthereum?.notBefore,requestId:o?.signInWithEthereum?.requestId,resources:o?.signInWithEthereum?.resources}),n=await s.request({method:`personal_sign`,params:[Ba(t),u]})}try{let{data:r,error:i}=await R(this.fetch,`POST`,`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:`ethereum`,message:t,signature:n},e.options?.captchaToken?{gotrue_meta_security:{captcha_token:e.options?.captchaToken}}:null),xform:wa});if(i)throw i;if(!r||!r.session||!r.user){let e=new Ti;return this._returnResult({data:{user:null,session:null},error:e})}return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers(`SIGNED_IN`,r.session)),this._returnResult({data:Object.assign({},r),error:i})}catch(e){if(M(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithSolana(e){let t,n;if(`message`in e)t=e.message,n=e.signature;else{let{chain:r,wallet:i,statement:a,options:o}=e,s;if(!P()){if(typeof i!=`object`||!o?.url)throw Error(`@supabase/auth-js: Both wallet and url must be specified in non-browser environments.`);s=i}else if(typeof i==`object`)s=i;else{let e=window;if(`solana`in e&&typeof e.solana==`object`&&(`signIn`in e.solana&&typeof e.solana.signIn==`function`||`signMessage`in e.solana&&typeof e.solana.signMessage==`function`))s=e.solana;else throw Error(`@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.`)}let c=new URL(o?.url??window.location.href);if(`signIn`in s&&s.signIn){let e=await s.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},o?.signInWithSolana),{version:`1`,domain:c.host,uri:c.href}),a?{statement:a}:null)),r;if(Array.isArray(e)&&e[0]&&typeof e[0]==`object`)r=e[0];else if(e&&typeof e==`object`&&`signedMessage`in e&&`signature`in e)r=e;else throw Error(`@supabase/auth-js: Wallet method signIn() returned unrecognized value`);if(`signedMessage`in r&&`signature`in r&&(typeof r.signedMessage==`string`||r.signedMessage instanceof Uint8Array)&&r.signature instanceof Uint8Array)t=typeof r.signedMessage==`string`?r.signedMessage:new TextDecoder().decode(r.signedMessage),n=r.signature;else throw Error(`@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields`)}else{if(!(`signMessage`in s)||typeof s.signMessage!=`function`||!(`publicKey`in s)||typeof s!=`object`||!s.publicKey||!(`toBase58`in s.publicKey)||typeof s.publicKey.toBase58!=`function`)throw Error(`@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API`);t=[`${c.host} wants you to sign in with your Solana account:`,s.publicKey.toBase58(),...a?[``,a,``]:[``],`Version: 1`,`URI: ${c.href}`,`Issued At: ${o?.signInWithSolana?.issuedAt??new Date().toISOString()}`,...o?.signInWithSolana?.notBefore?[`Not Before: ${o.signInWithSolana.notBefore}`]:[],...o?.signInWithSolana?.expirationTime?[`Expiration Time: ${o.signInWithSolana.expirationTime}`]:[],...o?.signInWithSolana?.chainId?[`Chain ID: ${o.signInWithSolana.chainId}`]:[],...o?.signInWithSolana?.nonce?[`Nonce: ${o.signInWithSolana.nonce}`]:[],...o?.signInWithSolana?.requestId?[`Request ID: ${o.signInWithSolana.requestId}`]:[],...o?.signInWithSolana?.resources?.length?[`Resources`,...o.signInWithSolana.resources.map(e=>`- ${e}`)]:[]].join(`
`);let e=await s.signMessage(new TextEncoder().encode(t),`utf8`);if(!e||!(e instanceof Uint8Array))throw Error(`@supabase/auth-js: Wallet signMessage() API returned an recognized value`);n=e}}try{let{data:r,error:i}=await R(this.fetch,`POST`,`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:`solana`,message:t,signature:Ki(n)},e.options?.captchaToken?{gotrue_meta_security:{captcha_token:e.options?.captchaToken}}:null),xform:wa});if(i)throw i;if(!r||!r.session||!r.user){let e=new Ti;return this._returnResult({data:{user:null,session:null},error:e})}return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers(`SIGNED_IN`,r.session)),this._returnResult({data:Object.assign({},r),error:i})}catch(e){if(M(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async _exchangeCodeForSession(e){let[t,n]=(await I(this.storage,`${this.storageKey}-code-verifier`)??``).split(`/`);try{if(!t&&this.flowType===`pkce`)throw new Ai;let{data:r,error:i}=await R(this.fetch,`POST`,`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:t},xform:wa});if(await L(this.storage,`${this.storageKey}-code-verifier`),i)throw i;if(!r||!r.session||!r.user){let e=new Ti;return this._returnResult({data:{user:null,session:null,redirectType:null},error:e})}return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers(n===`recovery`?`PASSWORD_RECOVERY`:`SIGNED_IN`,r.session)),this._returnResult({data:Object.assign(Object.assign({},r),{redirectType:n??null}),error:i})}catch(e){if(await L(this.storage,`${this.storageKey}-code-verifier`),M(e))return this._returnResult({data:{user:null,session:null,redirectType:null},error:e});throw e}}async signInWithIdToken(e){try{let{options:t,provider:n,token:r,access_token:i,nonce:a}=e,{data:o,error:s}=await R(this.fetch,`POST`,`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:n,id_token:r,access_token:i,nonce:a,gotrue_meta_security:{captcha_token:t?.captchaToken}},xform:wa});if(s)return this._returnResult({data:{user:null,session:null},error:s});if(!o||!o.session||!o.user){let e=new Ti;return this._returnResult({data:{user:null,session:null},error:e})}return o.session&&(await this._saveSession(o.session),await this._notifyAllSubscribers(`SIGNED_IN`,o.session)),this._returnResult({data:o,error:s})}catch(e){if(M(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithOtp(e){try{if(`email`in e){let{email:t,options:n}=e,r=null,i=null;this.flowType===`pkce`&&([r,i]=await ca(this.storage,this.storageKey));let{error:a}=await R(this.fetch,`POST`,`${this.url}/otp`,{headers:this.headers,body:{email:t,data:n?.data??{},create_user:n?.shouldCreateUser??!0,gotrue_meta_security:{captcha_token:n?.captchaToken},code_challenge:r,code_challenge_method:i},redirectTo:n?.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:a})}if(`phone`in e){let{phone:t,options:n}=e,{data:r,error:i}=await R(this.fetch,`POST`,`${this.url}/otp`,{headers:this.headers,body:{phone:t,data:n?.data??{},create_user:n?.shouldCreateUser??!0,gotrue_meta_security:{captcha_token:n?.captchaToken},channel:n?.channel??`sms`}});return this._returnResult({data:{user:null,session:null,messageId:r?.message_id},error:i})}throw new Ei(`You must provide either an email or phone number.`)}catch(e){if(await L(this.storage,`${this.storageKey}-code-verifier`),M(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async verifyOtp(e){try{let t,n;`options`in e&&(t=e.options?.redirectTo,n=e.options?.captchaToken);let{data:r,error:i}=await R(this.fetch,`POST`,`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:n}}),redirectTo:t,xform:wa});if(i)throw i;if(!r)throw Error(`An error occurred on token verification.`);let a=r.session,o=r.user;return a?.access_token&&(await this._saveSession(a),await this._notifyAllSubscribers(e.type==`recovery`?`PASSWORD_RECOVERY`:`SIGNED_IN`,a)),this._returnResult({data:{user:o,session:a},error:null})}catch(e){if(M(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithSSO(e){try{let t=null,n=null;this.flowType===`pkce`&&([t,n]=await ca(this.storage,this.storageKey));let r=await R(this.fetch,`POST`,`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},`providerId`in e?{provider_id:e.providerId}:null),`domain`in e?{domain:e.domain}:null),{redirect_to:e.options?.redirectTo??void 0}),e?.options?.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:t,code_challenge_method:n}),headers:this.headers,xform:Da});return r.data?.url&&P()&&!e.options?.skipBrowserRedirect&&window.location.assign(r.data.url),this._returnResult(r)}catch(e){if(await L(this.storage,`${this.storageKey}-code-verifier`),M(e))return this._returnResult({data:null,error:e});throw e}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;if(n)throw n;if(!t)throw new N;let{error:r}=await R(this.fetch,`GET`,`${this.url}/reauthenticate`,{headers:this.headers,jwt:t.access_token});return this._returnResult({data:{user:null,session:null},error:r})})}catch(e){if(M(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async resend(e){try{let t=`${this.url}/resend`;if(`email`in e){let{email:n,type:r,options:i}=e,{error:a}=await R(this.fetch,`POST`,t,{headers:this.headers,body:{email:n,type:r,gotrue_meta_security:{captcha_token:i?.captchaToken}},redirectTo:i?.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:a})}else if(`phone`in e){let{phone:n,type:r,options:i}=e,{data:a,error:o}=await R(this.fetch,`POST`,t,{headers:this.headers,body:{phone:n,type:r,gotrue_meta_security:{captcha_token:i?.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:a?.message_id},error:o})}throw new Ei(`You must provide either an email or phone number and a type`)}catch(e){if(M(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async getSession(){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async e=>e))}async _acquireLock(e,t){this._debug(`#_acquireLock`,`begin`,e);try{if(this.lockAcquired){let e=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),n=(async()=>(await e,await t()))();return this.pendingInLock.push((async()=>{try{await n}catch{}})()),n}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug(`#_acquireLock`,`lock acquired for storage key`,this.storageKey);try{this.lockAcquired=!0;let e=t();for(this.pendingInLock.push((async()=>{try{await e}catch{}})()),await e;this.pendingInLock.length;){let e=[...this.pendingInLock];await Promise.all(e),this.pendingInLock.splice(0,e.length)}return await e}finally{this._debug(`#_acquireLock`,`lock released for storage key`,this.storageKey),this.lockAcquired=!1}})}finally{this._debug(`#_acquireLock`,`end`)}}async _useSession(e){this._debug(`#_useSession`,`begin`);try{return await e(await this.__loadSession())}finally{this._debug(`#_useSession`,`end`)}}async __loadSession(){this._debug(`#__loadSession()`,`begin`),this.lockAcquired||this._debug(`#__loadSession()`,`used outside of an acquired lock!`,Error().stack);try{let e=null,t=await I(this.storage,this.storageKey);if(this._debug(`#getSession()`,`session from storage`,t),t!==null&&(this._isValidSession(t)?e=t:(this._debug(`#getSession()`,`session from storage is not valid`),await this._removeSession())),!e)return{data:{session:null},error:null};let n=e.expires_at?e.expires_at*1e3-Date.now()<pi:!1;if(this._debug(`#__loadSession()`,`session has${n?``:` not`} expired`,`expires_at`,e.expires_at),!n){if(this.userStorage){let t=await I(this.userStorage,this.storageKey+`-user`);t?.user?e.user=t.user:e.user=ga()}if(this.storage.isServer&&e.user&&!e.user.__isUserNotAvailableProxy){let t={value:this.suppressGetSessionWarning};e.user=_a(e.user,t),t.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:e},error:null}}let{data:r,error:i}=await this._callRefreshToken(e.refresh_token);return i?this._returnResult({data:{session:null},error:i}):this._returnResult({data:{session:r},error:null})}finally{this._debug(`#__loadSession()`,`end`)}}async getUser(e){if(e)return await this._getUser(e);await this.initializePromise;let t=await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser());return t.data.user&&(this.suppressGetSessionWarning=!0),t}async _getUser(e){try{return e?await R(this.fetch,`GET`,`${this.url}/user`,{headers:this.headers,jwt:e,xform:Ea}):await this._useSession(async e=>{let{data:t,error:n}=e;if(n)throw n;return!t.session?.access_token&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new N}:await R(this.fetch,`GET`,`${this.url}/user`,{headers:this.headers,jwt:t.session?.access_token??void 0,xform:Ea})})}catch(e){if(M(e))return wi(e)&&(await this._removeSession(),await L(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({data:{user:null},error:e});throw e}}async updateUser(e,t={}){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(e,t))}async _updateUser(e,t={}){try{return await this._useSession(async n=>{let{data:r,error:i}=n;if(i)throw i;if(!r.session)throw new N;let a=r.session,o=null,s=null;this.flowType===`pkce`&&e.email!=null&&([o,s]=await ca(this.storage,this.storageKey));let{data:c,error:l}=await R(this.fetch,`PUT`,`${this.url}/user`,{headers:this.headers,redirectTo:t?.emailRedirectTo,body:Object.assign(Object.assign({},e),{code_challenge:o,code_challenge_method:s}),jwt:a.access_token,xform:Ea});if(l)throw l;return a.user=c.user,await this._saveSession(a),await this._notifyAllSubscribers(`USER_UPDATED`,a),this._returnResult({data:{user:a.user},error:null})})}catch(e){if(await L(this.storage,`${this.storageKey}-code-verifier`),M(e))return this._returnResult({data:{user:null},error:e});throw e}}async setSession(e){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(e))}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new N;let t=Date.now()/1e3,n=t,r=!0,i=null,{payload:a}=ta(e.access_token);if(a.exp&&(n=a.exp,r=n<=t),r){let{data:t,error:n}=await this._callRefreshToken(e.refresh_token);if(n)return this._returnResult({data:{user:null,session:null},error:n});if(!t)return{data:{user:null,session:null},error:null};i=t}else{let{data:r,error:a}=await this._getUser(e.access_token);if(a)return this._returnResult({data:{user:null,session:null},error:a});i={access_token:e.access_token,refresh_token:e.refresh_token,user:r.user,token_type:`bearer`,expires_in:n-t,expires_at:n},await this._saveSession(i),await this._notifyAllSubscribers(`SIGNED_IN`,i)}return this._returnResult({data:{user:i.user,session:i},error:null})}catch(e){if(M(e))return this._returnResult({data:{session:null,user:null},error:e});throw e}}async refreshSession(e){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(e))}async _refreshSession(e){try{return await this._useSession(async t=>{if(!e){let{data:n,error:r}=t;if(r)throw r;e=n.session??void 0}if(!e?.refresh_token)throw new N;let{data:n,error:r}=await this._callRefreshToken(e.refresh_token);return r?this._returnResult({data:{user:null,session:null},error:r}):n?this._returnResult({data:{user:n.user,session:n},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(e){if(M(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async _getSessionFromURL(e,t){try{if(!P())throw new Di(`No browser detected.`);if(e.error||e.error_description||e.error_code)throw new Di(e.error_description||`Error in URL with unspecified error_description`,{error:e.error||`unspecified_error`,code:e.error_code||`unspecified_code`});switch(t){case`implicit`:if(this.flowType===`pkce`)throw new ki(`Not a valid PKCE flow url.`);break;case`pkce`:if(this.flowType===`implicit`)throw new Di(`Not a valid implicit grant flow url.`);break;default:}if(t===`pkce`){if(this._debug(`#_initialize()`,`begin`,`is PKCE flow`,!0),!e.code)throw new ki(`No code detected.`);let{data:t,error:n}=await this._exchangeCodeForSession(e.code);if(n)throw n;let r=new URL(window.location.href);return r.searchParams.delete(`code`),window.history.replaceState(window.history.state,``,r.toString()),{data:{session:t.session,redirectType:t.redirectType??null},error:null}}let{provider_token:n,provider_refresh_token:r,access_token:i,refresh_token:a,expires_in:o,expires_at:s,token_type:c}=e;if(!i||!o||!a||!c)throw new Di(`No session defined in URL`);let l=Math.round(Date.now()/1e3),u=parseInt(o),d=l+u;s&&(d=parseInt(s));let f=d-l;f*1e3<=3e4&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${f}s, should have been closer to ${u}s`);let p=d-u;l-p>=120?console.warn(`@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale`,p,d,l):l-p<0&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew`,p,d,l);let{data:m,error:h}=await this._getUser(i);if(h)throw h;let g={provider_token:n,provider_refresh_token:r,access_token:i,expires_in:u,expires_at:d,refresh_token:a,token_type:c,user:m.user};return window.location.hash=``,this._debug(`#_getSessionFromURL()`,`clearing window.location.hash`),this._returnResult({data:{session:g,redirectType:e.type},error:null})}catch(e){if(M(e))return this._returnResult({data:{session:null,redirectType:null},error:e});throw e}}_isImplicitGrantCallback(e){return typeof this.detectSessionInUrl==`function`?this.detectSessionInUrl(new URL(window.location.href),e):!!(e.access_token||e.error_description)}async _isPKCECallback(e){let t=await I(this.storage,`${this.storageKey}-code-verifier`);return!!(e.code&&t)}async signOut(e={scope:`global`}){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(e))}async _signOut({scope:e}={scope:`global`}){return await this._useSession(async t=>{let{data:n,error:r}=t;if(r&&!wi(r))return this._returnResult({error:r});let i=n.session?.access_token;if(i){let{error:t}=await this.admin.signOut(i,e);if(t&&!(xi(t)&&(t.status===404||t.status===401||t.status===403)||wi(t)))return this._returnResult({error:t})}return e!==`others`&&(await this._removeSession(),await L(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({error:null})})}onAuthStateChange(e){let t=Ji(),n={id:t,callback:e,unsubscribe:()=>{this._debug(`#unsubscribe()`,`state change callback with id removed`,t),this.stateChangeEmitters.delete(t)}};return this._debug(`#onAuthStateChange()`,`registered callback with id`,t),this.stateChangeEmitters.set(t,n),(async()=>{await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(t)})})(),{data:{subscription:n}}}async _emitInitialSession(e){return await this._useSession(async t=>{try{let{data:{session:n},error:r}=t;if(r)throw r;await this.stateChangeEmitters.get(e)?.callback(`INITIAL_SESSION`,n),this._debug(`INITIAL_SESSION`,`callback id`,e,`session`,n)}catch(t){await this.stateChangeEmitters.get(e)?.callback(`INITIAL_SESSION`,null),this._debug(`INITIAL_SESSION`,`callback id`,e,`error`,t),wi(t)?console.warn(t):console.error(t)}})}async resetPasswordForEmail(e,t={}){let n=null,r=null;this.flowType===`pkce`&&([n,r]=await ca(this.storage,this.storageKey,!0));try{return await R(this.fetch,`POST`,`${this.url}/recover`,{body:{email:e,code_challenge:n,code_challenge_method:r,gotrue_meta_security:{captcha_token:t.captchaToken}},headers:this.headers,redirectTo:t.redirectTo})}catch(e){if(await L(this.storage,`${this.storageKey}-code-verifier`),M(e))return this._returnResult({data:null,error:e});throw e}}async getUserIdentities(){try{let{data:e,error:t}=await this.getUser();if(t)throw t;return this._returnResult({data:{identities:e.user.identities??[]},error:null})}catch(e){if(M(e))return this._returnResult({data:null,error:e});throw e}}async linkIdentity(e){return`token`in e?this.linkIdentityIdToken(e):this.linkIdentityOAuth(e)}async linkIdentityOAuth(e){try{let{data:t,error:n}=await this._useSession(async t=>{let{data:n,error:r}=t;if(r)throw r;let i=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:e.options?.redirectTo,scopes:e.options?.scopes,queryParams:e.options?.queryParams,skipBrowserRedirect:!0});return await R(this.fetch,`GET`,i,{headers:this.headers,jwt:n.session?.access_token??void 0})});if(n)throw n;return P()&&!e.options?.skipBrowserRedirect&&window.location.assign(t?.url),this._returnResult({data:{provider:e.provider,url:t?.url},error:null})}catch(t){if(M(t))return this._returnResult({data:{provider:e.provider,url:null},error:t});throw t}}async linkIdentityIdToken(e){return await this._useSession(async t=>{try{let{error:n,data:{session:r}}=t;if(n)throw n;let{options:i,provider:a,token:o,access_token:s,nonce:c}=e,{data:l,error:u}=await R(this.fetch,`POST`,`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:r?.access_token??void 0,body:{provider:a,id_token:o,access_token:s,nonce:c,link_identity:!0,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:wa});return u?this._returnResult({data:{user:null,session:null},error:u}):!l||!l.session||!l.user?this._returnResult({data:{user:null,session:null},error:new Ti}):(l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers(`USER_UPDATED`,l.session)),this._returnResult({data:l,error:u}))}catch(e){if(await L(this.storage,`${this.storageKey}-code-verifier`),M(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}})}async unlinkIdentity(e){try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)throw r;return await R(this.fetch,`DELETE`,`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:n.session?.access_token??void 0})})}catch(e){if(M(e))return this._returnResult({data:null,error:e});throw e}}async _refreshAccessToken(e){let t=`#_refreshAccessToken(${e.substring(0,5)}...)`;this._debug(t,`begin`);try{let n=Date.now();return await ra(async n=>(n>0&&await na(200*2**(n-1)),this._debug(t,`refreshing attempt`,n),await R(this.fetch,`POST`,`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:wa})),(e,t)=>{let r=200*2**e;return t&&Mi(t)&&Date.now()+r-n<3e4})}catch(e){if(this._debug(t,`error`,e),M(e))return this._returnResult({data:{session:null,user:null},error:e});throw e}finally{this._debug(t,`end`)}}_isValidSession(e){return typeof e==`object`&&!!e&&`access_token`in e&&`refresh_token`in e&&`expires_at`in e}async _handleProviderSignIn(e,t){let n=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:t.redirectTo,scopes:t.scopes,queryParams:t.queryParams});return this._debug(`#_handleProviderSignIn()`,`provider`,e,`options`,t,`url`,n),P()&&!t.skipBrowserRedirect&&window.location.assign(n),{data:{provider:e,url:n},error:null}}async _recoverAndRefresh(){let e=`#_recoverAndRefresh()`;this._debug(e,`begin`);try{let t=await I(this.storage,this.storageKey);if(t&&this.userStorage){let e=await I(this.userStorage,this.storageKey+`-user`);!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!e&&(e={user:t.user},await F(this.userStorage,this.storageKey+`-user`,e)),t.user=e?.user??ga()}else if(t&&!t.user&&!t.user){let e=await I(this.storage,this.storageKey+`-user`);e&&e?.user?(t.user=e.user,await L(this.storage,this.storageKey+`-user`),await F(this.storage,this.storageKey,t)):t.user=ga()}if(this._debug(e,`session from storage`,t),!this._isValidSession(t)){this._debug(e,`session is not valid`),t!==null&&await this._removeSession();return}let n=(t.expires_at??1/0)*1e3-Date.now()<pi;if(this._debug(e,`session has${n?``:` not`} expired with margin of ${pi}s`),n){if(this.autoRefreshToken&&t.refresh_token){let{error:n}=await this._callRefreshToken(t.refresh_token);n&&(console.error(n),Mi(n)||(this._debug(e,`refresh failed with a non-retryable error, removing the session`,n),await this._removeSession()))}}else if(t.user&&t.user.__isUserNotAvailableProxy===!0)try{let{data:n,error:r}=await this._getUser(t.access_token);!r&&n?.user?(t.user=n.user,await this._saveSession(t),await this._notifyAllSubscribers(`SIGNED_IN`,t)):this._debug(e,`could not get user data, skipping SIGNED_IN notification`)}catch(t){console.error(`Error getting user data:`,t),this._debug(e,`error getting user data, skipping SIGNED_IN notification`,t)}else await this._notifyAllSubscribers(`SIGNED_IN`,t)}catch(t){this._debug(e,`error`,t),console.error(t);return}finally{this._debug(e,`end`)}}async _callRefreshToken(e){var t,n;if(!e)throw new N;if(this.refreshingDeferred)return this.refreshingDeferred.promise;let r=`#_callRefreshToken(${e.substring(0,5)}...)`;this._debug(r,`begin`);try{this.refreshingDeferred=new ea;let{data:t,error:n}=await this._refreshAccessToken(e);if(n)throw n;if(!t.session)throw new N;await this._saveSession(t.session),await this._notifyAllSubscribers(`TOKEN_REFRESHED`,t.session);let r={data:t.session,error:null};return this.refreshingDeferred.resolve(r),r}catch(e){if(this._debug(r,`error`,e),M(e)){let n={data:null,error:e};return Mi(e)||await this._removeSession(),(t=this.refreshingDeferred)==null||t.resolve(n),n}throw(n=this.refreshingDeferred)==null||n.reject(e),e}finally{this.refreshingDeferred=null,this._debug(r,`end`)}}async _notifyAllSubscribers(e,t,n=!0){let r=`#_notifyAllSubscribers(${e})`;this._debug(r,`begin`,t,`broadcast = ${n}`);try{this.broadcastChannel&&n&&this.broadcastChannel.postMessage({event:e,session:t});let r=[],i=Array.from(this.stateChangeEmitters.values()).map(async n=>{try{await n.callback(e,t)}catch(e){r.push(e)}});if(await Promise.all(i),r.length>0){for(let e=0;e<r.length;e+=1)console.error(r[e]);throw r[0]}}finally{this._debug(r,`end`)}}async _saveSession(e){this._debug(`#_saveSession()`,e),this.suppressGetSessionWarning=!0,await L(this.storage,`${this.storageKey}-code-verifier`);let t=Object.assign({},e),n=t.user&&t.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!n&&t.user&&await F(this.userStorage,this.storageKey+`-user`,{user:t.user});let e=Object.assign({},t);delete e.user;let r=va(e);await F(this.storage,this.storageKey,r)}else{let e=va(t);await F(this.storage,this.storageKey,e)}}async _removeSession(){this._debug(`#_removeSession()`),this.suppressGetSessionWarning=!1,await L(this.storage,this.storageKey),await L(this.storage,this.storageKey+`-code-verifier`),await L(this.storage,this.storageKey+`-user`),this.userStorage&&await L(this.userStorage,this.storageKey+`-user`),await this._notifyAllSubscribers(`SIGNED_OUT`,null)}_removeVisibilityChangedCallback(){this._debug(`#_removeVisibilityChangedCallback()`);let e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&P()&&window!=null&&window.removeEventListener&&window.removeEventListener(`visibilitychange`,e)}catch(e){console.error(`removing visibilitychange callback failed`,e)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug(`#_startAutoRefresh()`);let e=setInterval(()=>this._autoRefreshTokenTick(),fi);this.autoRefreshTicker=e,e&&typeof e==`object`&&typeof e.unref==`function`?e.unref():typeof Deno<`u`&&typeof Deno.unrefTimer==`function`&&Deno.unrefTimer(e);let t=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=t,t&&typeof t==`object`&&typeof t.unref==`function`?t.unref():typeof Deno<`u`&&typeof Deno.unrefTimer==`function`&&Deno.unrefTimer(t)}async _stopAutoRefresh(){this._debug(`#_stopAutoRefresh()`);let e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e);let t=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,t&&clearTimeout(t)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug(`#_autoRefreshTokenTick()`,`begin`);try{await this._acquireLock(0,async()=>{try{let e=Date.now();try{return await this._useSession(async t=>{let{data:{session:n}}=t;if(!n||!n.refresh_token||!n.expires_at){this._debug(`#_autoRefreshTokenTick()`,`no session`);return}let r=Math.floor((n.expires_at*1e3-e)/fi);this._debug(`#_autoRefreshTokenTick()`,`access token expires in ${r} ticks, a tick lasts ${fi}ms, refresh threshold is 3 ticks`),r<=3&&await this._callRefreshToken(n.refresh_token)})}catch(e){console.error(`Auto refresh tick failed with error. This is likely a transient error.`,e)}}finally{this._debug(`#_autoRefreshTokenTick()`,`end`)}})}catch(e){if(e instanceof Pa)this._debug(`auto refresh token tick lock not available`);else throw e}}async _handleVisibilityChange(){if(this._debug(`#_handleVisibilityChange()`),!P()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(e){this._debug(`#visibilityChangedCallback`,`error`,e)}},window==null||window.addEventListener(`visibilitychange`,this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error(`_handleVisibilityChange`,e)}}async _onVisibilityChanged(e){let t=`#_onVisibilityChanged(${e})`;this._debug(t,`visibilityState`,document.visibilityState),document.visibilityState===`visible`?(this.autoRefreshToken&&this._startAutoRefresh(),e||(await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!==`visible`){this._debug(t,`acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting`);return}await this._recoverAndRefresh()}))):document.visibilityState===`hidden`&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,t,n){let r=[`provider=${encodeURIComponent(t)}`];if(n?.redirectTo&&r.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),n?.scopes&&r.push(`scopes=${encodeURIComponent(n.scopes)}`),this.flowType===`pkce`){let[e,t]=await ca(this.storage,this.storageKey),n=new URLSearchParams({code_challenge:`${encodeURIComponent(e)}`,code_challenge_method:`${encodeURIComponent(t)}`});r.push(n.toString())}if(n?.queryParams){let e=new URLSearchParams(n.queryParams);r.push(e.toString())}return n?.skipBrowserRedirect&&r.push(`skip_http_redirect=${n.skipBrowserRedirect}`),`${e}?${r.join(`&`)}`}async _unenroll(e){try{return await this._useSession(async t=>{let{data:n,error:r}=t;return r?this._returnResult({data:null,error:r}):await R(this.fetch,`DELETE`,`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:n?.session?.access_token})})}catch(e){if(M(e))return this._returnResult({data:null,error:e});throw e}}async _enroll(e){try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)return this._returnResult({data:null,error:r});let i=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType===`phone`?{phone:e.phone}:e.factorType===`totp`?{issuer:e.issuer}:{}),{data:a,error:o}=await R(this.fetch,`POST`,`${this.url}/factors`,{body:i,headers:this.headers,jwt:n?.session?.access_token});return o?this._returnResult({data:null,error:o}):(e.factorType===`totp`&&a.type===`totp`&&a?.totp?.qr_code&&(a.totp.qr_code=`data:image/svg+xml;utf-8,${a.totp.qr_code}`),this._returnResult({data:a,error:null}))})}catch(e){if(M(e))return this._returnResult({data:null,error:e});throw e}}async _verify(e){return this._acquireLock(this.lockAcquireTimeout,async()=>{try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)return this._returnResult({data:null,error:r});let i=Object.assign({challenge_id:e.challengeId},`webauthn`in e?{webauthn:Object.assign(Object.assign({},e.webauthn),{credential_response:e.webauthn.type===`create`?Ja(e.webauthn.credential_response):Ya(e.webauthn.credential_response)})}:{code:e.code}),{data:a,error:o}=await R(this.fetch,`POST`,`${this.url}/factors/${e.factorId}/verify`,{body:i,headers:this.headers,jwt:n?.session?.access_token});return o?this._returnResult({data:null,error:o}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+a.expires_in},a)),await this._notifyAllSubscribers(`MFA_CHALLENGE_VERIFIED`,a),this._returnResult({data:a,error:o}))})}catch(e){if(M(e))return this._returnResult({data:null,error:e});throw e}})}async _challenge(e){return this._acquireLock(this.lockAcquireTimeout,async()=>{try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)return this._returnResult({data:null,error:r});let i=await R(this.fetch,`POST`,`${this.url}/factors/${e.factorId}/challenge`,{body:e,headers:this.headers,jwt:n?.session?.access_token});if(i.error)return i;let{data:a}=i;if(a.type!==`webauthn`)return{data:a,error:null};switch(a.webauthn.type){case`create`:return{data:Object.assign(Object.assign({},a),{webauthn:Object.assign(Object.assign({},a.webauthn),{credential_options:Object.assign(Object.assign({},a.webauthn.credential_options),{publicKey:Ka(a.webauthn.credential_options.publicKey)})})}),error:null};case`request`:return{data:Object.assign(Object.assign({},a),{webauthn:Object.assign(Object.assign({},a.webauthn),{credential_options:Object.assign(Object.assign({},a.webauthn.credential_options),{publicKey:qa(a.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(e){if(M(e))return this._returnResult({data:null,error:e});throw e}})}async _challengeAndVerify(e){let{data:t,error:n}=await this._challenge({factorId:e.factorId});return n?this._returnResult({data:null,error:n}):await this._verify({factorId:e.factorId,challengeId:t.id,code:e.code})}async _listFactors(){let{data:{user:e},error:t}=await this.getUser();if(t)return{data:null,error:t};let n={all:[],phone:[],totp:[],webauthn:[]};for(let t of e?.factors??[])n.all.push(t),t.status===`verified`&&n[t.factor_type].push(t);return{data:n,error:null}}async _getAuthenticatorAssuranceLevel(e){if(e)try{let{payload:t}=ta(e),n=null;t.aal&&(n=t.aal);let r=n,{data:{user:i},error:a}=await this.getUser(e);if(a)return this._returnResult({data:null,error:a});((i?.factors)?.filter(e=>e.status===`verified`)??[]).length>0&&(r=`aal2`);let o=t.amr||[];return{data:{currentLevel:n,nextLevel:r,currentAuthenticationMethods:o},error:null}}catch(e){if(M(e))return this._returnResult({data:null,error:e});throw e}let{data:{session:t},error:n}=await this.getSession();if(n)return this._returnResult({data:null,error:n});if(!t)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};let{payload:r}=ta(t.access_token),i=null;r.aal&&(i=r.aal);let a=i;(t.user.factors?.filter(e=>e.status===`verified`)??[]).length>0&&(a=`aal2`);let o=r.amr||[];return{data:{currentLevel:i,nextLevel:a,currentAuthenticationMethods:o},error:null}}async _getAuthorizationDetails(e){try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;return r?this._returnResult({data:null,error:r}):n?await R(this.fetch,`GET`,`${this.url}/oauth/authorizations/${e}`,{headers:this.headers,jwt:n.access_token,xform:e=>({data:e,error:null})}):this._returnResult({data:null,error:new N})})}catch(e){if(M(e))return this._returnResult({data:null,error:e});throw e}}async _approveAuthorization(e,t){try{return await this._useSession(async n=>{let{data:{session:r},error:i}=n;if(i)return this._returnResult({data:null,error:i});if(!r)return this._returnResult({data:null,error:new N});let a=await R(this.fetch,`POST`,`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:r.access_token,body:{action:`approve`},xform:e=>({data:e,error:null})});return a.data&&a.data.redirect_url&&P()&&!t?.skipBrowserRedirect&&window.location.assign(a.data.redirect_url),a})}catch(e){if(M(e))return this._returnResult({data:null,error:e});throw e}}async _denyAuthorization(e,t){try{return await this._useSession(async n=>{let{data:{session:r},error:i}=n;if(i)return this._returnResult({data:null,error:i});if(!r)return this._returnResult({data:null,error:new N});let a=await R(this.fetch,`POST`,`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:r.access_token,body:{action:`deny`},xform:e=>({data:e,error:null})});return a.data&&a.data.redirect_url&&P()&&!t?.skipBrowserRedirect&&window.location.assign(a.data.redirect_url),a})}catch(e){if(M(e))return this._returnResult({data:null,error:e});throw e}}async _listOAuthGrants(){try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;return n?this._returnResult({data:null,error:n}):t?await R(this.fetch,`GET`,`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:t.access_token,xform:e=>({data:e,error:null})}):this._returnResult({data:null,error:new N})})}catch(e){if(M(e))return this._returnResult({data:null,error:e});throw e}}async _revokeOAuthGrant(e){try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;return r?this._returnResult({data:null,error:r}):n?(await R(this.fetch,`DELETE`,`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:n.access_token,query:{client_id:e.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new N})})}catch(e){if(M(e))return this._returnResult({data:null,error:e});throw e}}async fetchJwk(e,t={keys:[]}){let n=t.keys.find(t=>t.kid===e);if(n)return n;let r=Date.now();if(n=this.jwks.keys.find(t=>t.kid===e),n&&this.jwks_cached_at+6e5>r)return n;let{data:i,error:a}=await R(this.fetch,`GET`,`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(a)throw a;return!i.keys||i.keys.length===0||(this.jwks=i,this.jwks_cached_at=r,n=i.keys.find(t=>t.kid===e),!n)?null:n}async getClaims(e,t={}){try{let n=e;if(!n){let{data:e,error:t}=await this.getSession();if(t||!e.session)return this._returnResult({data:null,error:t});n=e.session.access_token}let{header:r,payload:i,signature:a,raw:{header:o,payload:s}}=ta(n);t?.allowExpired||da(i.exp);let c=!r.alg||r.alg.startsWith(`HS`)||!r.kid||!(`crypto`in globalThis&&`subtle`in globalThis.crypto)?null:await this.fetchJwk(r.kid,t?.keys?{keys:t.keys}:t?.jwks);if(!c){let{error:e}=await this.getUser(n);if(e)throw e;return{data:{claims:i,header:r,signature:a},error:null}}let l=fa(r.alg),u=await crypto.subtle.importKey(`jwk`,c,l,!0,[`verify`]);if(!await crypto.subtle.verify(l,u,a,Gi(`${o}.${s}`)))throw new Pi(`Invalid JWT signature`);return{data:{claims:i,header:r,signature:a},error:null}}catch(e){if(M(e))return this._returnResult({data:null,error:e});throw e}}async signInWithPasskey(e){ha(this.experimental);try{if(!Za())return this._returnResult({data:null,error:new Si(`Browser does not support WebAuthn`,null)});let{data:t,error:n}=await this._startPasskeyAuthentication({options:{captchaToken:e?.options?.captchaToken}});if(n||!t)return this._returnResult({data:null,error:n});let{data:r,error:i}=await $a({publicKey:qa(t.options),signal:e?.options?.signal??Ga.createNewAbortSignal()});if(i||!r)return this._returnResult({data:null,error:i??new Si(`WebAuthn ceremony failed`,null)});let a=Ya(r);return this._verifyPasskeyAuthentication({challengeId:t.challenge_id,credential:a})}catch(e){if(M(e))return this._returnResult({data:null,error:e});throw e}}async registerPasskey(e){ha(this.experimental);try{if(!Za())return this._returnResult({data:null,error:new Si(`Browser does not support WebAuthn`,null)});let{data:t,error:n}=await this._startPasskeyRegistration();if(n||!t)return this._returnResult({data:null,error:n});let{data:r,error:i}=await Qa({publicKey:Ka(t.options),signal:e?.options?.signal??Ga.createNewAbortSignal()});if(i||!r)return this._returnResult({data:null,error:i??new Si(`WebAuthn ceremony failed`,null)});let a=Ja(r);return this._verifyPasskeyRegistration({challengeId:t.challenge_id,credential:a})}catch(e){if(M(e))return this._returnResult({data:null,error:e});throw e}}async _startPasskeyRegistration(){ha(this.experimental);try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;if(n)return this._returnResult({data:null,error:n});if(!t)return this._returnResult({data:null,error:new N});let{data:r,error:i}=await R(this.fetch,`POST`,`${this.url}/passkeys/registration/options`,{headers:this.headers,jwt:t.access_token,body:{}});return i?this._returnResult({data:null,error:i}):this._returnResult({data:r,error:null})})}catch(e){if(M(e))return this._returnResult({data:null,error:e});throw e}}async _verifyPasskeyRegistration(e){ha(this.experimental);try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!n)return this._returnResult({data:null,error:new N});let{data:i,error:a}=await R(this.fetch,`POST`,`${this.url}/passkeys/registration/verify`,{headers:this.headers,jwt:n.access_token,body:{challenge_id:e.challengeId,credential:e.credential}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:i,error:null})})}catch(e){if(M(e))return this._returnResult({data:null,error:e});throw e}}async _startPasskeyAuthentication(e){ha(this.experimental);try{let{data:t,error:n}=await R(this.fetch,`POST`,`${this.url}/passkeys/authentication/options`,{headers:this.headers,body:{gotrue_meta_security:{captcha_token:e?.options?.captchaToken}}});return n?this._returnResult({data:null,error:n}):this._returnResult({data:t,error:null})}catch(e){if(M(e))return this._returnResult({data:null,error:e});throw e}}async _verifyPasskeyAuthentication(e){ha(this.experimental);try{let{data:t,error:n}=await R(this.fetch,`POST`,`${this.url}/passkeys/authentication/verify`,{headers:this.headers,body:{challenge_id:e.challengeId,credential:e.credential},xform:wa});return n?this._returnResult({data:null,error:n}):(t.session&&(await this._saveSession(t.session),await this._notifyAllSubscribers(`SIGNED_IN`,t.session)),this._returnResult({data:t,error:null}))}catch(e){if(M(e))return this._returnResult({data:null,error:e});throw e}}async _listPasskeys(){ha(this.experimental);try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;if(n)return this._returnResult({data:null,error:n});if(!t)return this._returnResult({data:null,error:new N});let{data:r,error:i}=await R(this.fetch,`GET`,`${this.url}/passkeys`,{headers:this.headers,jwt:t.access_token,xform:e=>({data:e,error:null})});return i?this._returnResult({data:null,error:i}):this._returnResult({data:r,error:null})})}catch(e){if(M(e))return this._returnResult({data:null,error:e});throw e}}async _updatePasskey(e){ha(this.experimental);try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!n)return this._returnResult({data:null,error:new N});let{data:i,error:a}=await R(this.fetch,`PATCH`,`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:n.access_token,body:{friendly_name:e.friendlyName}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:i,error:null})})}catch(e){if(M(e))return this._returnResult({data:null,error:e});throw e}}async _deletePasskey(e){ha(this.experimental);try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!n)return this._returnResult({data:null,error:new N});let{error:i}=await R(this.fetch,`DELETE`,`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:n.access_token,noResolveJson:!0});return i?this._returnResult({data:null,error:i}):this._returnResult({data:null,error:null})})}catch(e){if(M(e))return this._returnResult({data:null,error:e});throw e}}};lo.nextInstanceID={};var uo=lo,fo=`modulepreload`,po=function(e){return`/reword/`+e},mo={},ho=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=po(t,n),t in mo)return;mo[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:fo,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},go=`2.106.2`,_o=``;_o=typeof Deno<`u`?`deno`:typeof document<`u`?`web`:typeof navigator<`u`&&navigator.product===`ReactNative`?`react-native`:`node`;var vo={headers:{"X-Client-Info":`supabase-js-${_o}/${go}`}},yo={schema:`public`},bo={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:`implicit`},xo={},So={enabled:!1,respectSamplingDecision:!0};function Co(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})}var V=null,wo=`@opentelemetry/api`;function To(){return V===null&&(V=ho(()=>import(wo),[]).catch(()=>null)),V}function Eo(){return Co(this,void 0,void 0,function*(){try{let e=yield To();if(!e||!e.propagation||!e.context)return null;let t={};e.propagation.inject(e.context.active(),t);let n=t.traceparent;return n?{traceparent:n,tracestate:t.tracestate,baggage:t.baggage}:null}catch{return null}})}function Do(e){if(!e||typeof e!=`string`)return null;let t=e.split(`-`);if(t.length!==4)return null;let[n,r,i,a]=t;if(n.length!==2||r.length!==32||i.length!==16||a.length!==2)return null;let o=/^[0-9a-f]+$/i;return!o.test(n)||!o.test(r)||!o.test(i)||!o.test(a)||r===`00000000000000000000000000000000`||i===`0000000000000000`?null:{version:n,traceId:r,parentId:i,traceFlags:a,isSampled:(parseInt(a,16)&1)==1}}function Oo(e,t){if(!e||!t||t.length===0)return!1;let n;if(e instanceof URL)n=e;else try{n=new URL(e)}catch{return!1}for(let e of t)try{if(typeof e==`string`){if(ko(n.hostname,e))return!0}else if(e instanceof RegExp){if(e.test(n.hostname))return!0}else if(typeof e==`function`&&e(n))return!0}catch{continue}return!1}function ko(e,t){if(t===e)return!0;if(t.startsWith(`*.`)){let n=t.slice(2);if(e.endsWith(n)&&(e===n||e.endsWith(`.`+n)))return!0}return!1}function H(e){let t=[];try{let n=new URL(e);t.push(n.hostname)}catch{}return t.push(`*.supabase.co`,`*.supabase.in`),t.push(`localhost`,`127.0.0.1`,`[::1]`),t}function U(e){"@babel/helpers - typeof";return U=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},U(e)}function Ao(e,t){if(U(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(U(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function jo(e){var t=Ao(e,`string`);return U(t)==`symbol`?t:t+``}function Mo(e,t,n){return(t=jo(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function No(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?No(Object(n),!0).forEach(function(t){Mo(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):No(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Po=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),Fo=()=>Headers,Io=(e,t,n,r,i)=>{let a=Po(r),o=Fo(),s=i?.enabled===!0,c=i?.respectSamplingDecision!==!1,l=s?H(t):null;return async(t,r)=>{let i=await n()??e,s=new o(r?.headers);if(s.has(`apikey`)||s.set(`apikey`,e),s.has(`Authorization`)||s.set(`Authorization`,`Bearer ${i}`),l){let e=await Lo(t,l,c);e&&(e.traceparent&&!s.has(`traceparent`)&&s.set(`traceparent`,e.traceparent),e.tracestate&&!s.has(`tracestate`)&&s.set(`tracestate`,e.tracestate),e.baggage&&!s.has(`baggage`)&&s.set(`baggage`,e.baggage))}return a(t,W(W({},r),{},{headers:s}))}};async function Lo(e,t,n){if(!Oo(typeof e==`string`||e instanceof URL?e:e.url,t))return null;let r=await Eo();if(!r||!r.traceparent)return null;if(n){let e=Do(r.traceparent);if(e&&!e.isSampled)return null}return r}function Ro(e){return typeof e==`boolean`?{enabled:e}:e}function zo(e){return e.endsWith(`/`)?e:e+`/`}function Bo(e,t){let{db:n,auth:r,realtime:i,global:a}=e,{db:o,auth:s,realtime:c,global:l}=t,u=Ro(e.tracePropagation),d=Ro(t.tracePropagation),f={db:W(W({},o),n),auth:W(W({},s),r),realtime:W(W({},c),i),storage:{},global:W(W(W({},l),a),{},{headers:W(W({},l?.headers??{}),a?.headers??{})}),tracePropagation:{enabled:u?.enabled??d?.enabled??!1,respectSamplingDecision:u?.respectSamplingDecision??d?.respectSamplingDecision??!0},accessToken:async()=>``};return e.accessToken?f.accessToken=e.accessToken:delete f.accessToken,f}function Vo(e){let t=e?.trim();if(!t)throw Error(`supabaseUrl is required.`);if(!t.match(/^https?:\/\//i))throw Error(`Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.`);try{return new URL(zo(t))}catch{throw Error(`Invalid supabaseUrl: Provided URL is malformed.`)}}var Ho=class extends uo{constructor(e){super(e)}},Uo=class{constructor(e,t,n){this.supabaseUrl=e,this.supabaseKey=t;let r=Vo(e);if(!t)throw Error(`supabaseKey is required.`);this.realtimeUrl=new URL(`realtime/v1`,r),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace(`http`,`ws`),this.authUrl=new URL(`auth/v1`,r),this.storageUrl=new URL(`storage/v1`,r),this.functionsUrl=new URL(`functions/v1`,r);let i=`sb-${r.hostname.split(`.`)[0]}-auth-token`,a={db:yo,realtime:xo,auth:W(W({},bo),{},{storageKey:i}),global:vo,tracePropagation:So},o=Bo(n??{},a);this.settings=o,this.storageKey=o.auth.storageKey??``,this.headers=o.global.headers??{},o.accessToken?(this.accessToken=o.accessToken,this.auth=new Proxy({},{get:(e,t)=>{throw Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(t)} is not possible`)}})):this.auth=this._initSupabaseAuthClient(o.auth??{},this.headers,o.global.fetch),this.fetch=Io(t,e,this._getAccessToken.bind(this),o.global.fetch,o.tracePropagation),this.realtime=this._initRealtimeClient(W({headers:this.headers,accessToken:this._getAccessToken.bind(this),fetch:this.fetch},o.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(e=>this.realtime.setAuth(e)).catch(e=>console.warn(`Failed to set initial Realtime auth token:`,e)),this.rest=new en(new URL(`rest/v1`,r).href,{headers:this.headers,schema:o.db.schema,fetch:this.fetch,timeout:o.db.timeout,urlLengthLimit:o.db.urlLengthLimit}),this.storage=new ui(this.storageUrl.href,this.headers,this.fetch,n?.storage),o.accessToken||this._listenForAuthEvents()}get functions(){return new It(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(e){return this.rest.from(e)}schema(e){return this.rest.schema(e)}rpc(e,t={},n={head:!1,get:!1,count:void 0}){return this.rest.rpc(e,t,n)}channel(e,t={config:{}}){return this.realtime.channel(e,t)}getChannels(){return this.realtime.getChannels()}removeChannel(e){return this.realtime.removeChannel(e)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getAccessToken(){var e=this;if(e.accessToken)return await e.accessToken();let{data:t}=await e.auth.getSession();return t.session?.access_token??e.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:e,persistSession:t,detectSessionInUrl:n,storage:r,userStorage:i,storageKey:a,flowType:o,lock:s,debug:c,throwOnError:l,experimental:u,lockAcquireTimeout:d,skipAutoInitialize:f},p,m){let h={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new Ho({url:this.authUrl.href,headers:W(W({},h),p),storageKey:a,autoRefreshToken:e,persistSession:t,detectSessionInUrl:n,storage:r,userStorage:i,flowType:o,lock:s,debug:c,throwOnError:l,experimental:u,fetch:m,lockAcquireTimeout:d,skipAutoInitialize:f,hasCustomAuthorizationHeader:Object.keys(this.headers).some(e=>e.toLowerCase()===`authorization`)})}_initRealtimeClient(e){return new dr(this.realtimeUrl.href,W(W({},e),{},{params:W(W({},{apikey:this.supabaseKey}),e?.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((e,t)=>{this._handleTokenChanged(e,`CLIENT`,t?.access_token)})}_handleTokenChanged(e,t,n){(e===`TOKEN_REFRESHED`||e===`SIGNED_IN`)&&this.changedAccessToken!==n?(this.changedAccessToken=n,this.realtime.setAuth(n)):e===`SIGNED_OUT`&&(this.realtime.setAuth(),t==`STORAGE`&&this.auth.signOut(),this.changedAccessToken=void 0)}},Wo=(e,t,n)=>new Uo(e,t,n);function Go(){if(typeof window<`u`)return!1;let e=globalThis.process;if(!e)return!1;let t=e.version;if(t==null)return!1;let n=t.match(/^v(\d+)\./);return n?parseInt(n[1],10)<=18:!1}Go()&&console.warn(`⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217`);var Ko=new Set([``,`your_supabase_url`,`your_supabase_anon_key`,`https://your-project.supabase.co`,`your-anon-key`]),qo=``,Jo=``;function Yo(e){return!Ko.has(e.replace(/\/$/,``))}function Xo(e){if(!Yo(e))return!1;try{let t=new URL(e);return!(t.protocol!==`https:`||t.hostname.endsWith(`github.io`))}catch{return!1}}var Zo=Xo(qo),Qo=Yo(Jo),$o={urlPresent:Zo,anonKeyPresent:Qo,clientEnabled:Zo&&Qo,missingKeys:[...Zo?[]:[`VITE_SUPABASE_URL`],...Qo?[]:[`VITE_SUPABASE_ANON_KEY`]]},G=$o.clientEnabled;$o.clientEnabled;var es=G?Wo(qo,Jo,{auth:{autoRefreshToken:!0,detectSessionInUrl:!0,persistSession:!0,storageKey:`reword-supabase-auth`}}):null;function ts(){return`当前为本地模式，学习数据仅保存在本设备。`}function ns(){return`线上包没有读取到 Supabase 环境变量。请在 GitHub Secrets 中配置 VITE_SUPABASE_URL 和 VITE_SUPABASE_ANON_KEY，然后重新运行 Deploy GitHub Pages。`}function rs(){return`${ns()}本地学习数据仍会保存在当前设备。`}function is(){if(!es)throw Error(rs());return es}var as=`https://github.com/lihuaozou/reword/blob/main/docs/DO_THIS_FIRST_SUPABASE.md`;function os(e){return e?new Date(e).toLocaleString(`zh-CN`,{month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`}):`未同步`}function ss({ok:e,text:t}){return(0,E.jsx)(`span`,{className:`inline-flex min-h-7 items-center rounded-md border px-2 text-xs font-semibold ${e?`border-emerald-200 bg-emerald-50 text-emerald-700`:`border-amber-200 bg-amber-50 text-amber-700`}`,children:t})}function cs({icon:e,label:t,children:n}){return(0,E.jsxs)(`div`,{className:`flex items-center justify-between gap-3 rounded-lg border border-sky-100 bg-[#f8fbff] px-3 py-2`,children:[(0,E.jsxs)(`div`,{className:`flex min-w-0 items-center gap-2 text-sm font-semibold text-slate-700`,children:[(0,E.jsx)(e,{size:16,className:`shrink-0 text-harbor`,"aria-hidden":`true`}),(0,E.jsx)(`span`,{className:`truncate`,children:t})]}),(0,E.jsx)(`div`,{className:`shrink-0`,children:n})]})}function ls(e){return e===`syncing`?`同步中`:e===`success`?`已同步`:e===`offline`?`离线`:e===`error`?`同步失败`:e===`disabled`?`未启用`:`待登录`}function us({online:e,loggedIn:t,syncState:n,syncMessage:r,lastSyncAt:i,pendingCount:a=0,compact:o=!1}){let s=$o.clientEnabled,c=s?t?n===`error`?`云同步请求失败，请检查 Supabase 表结构、RLS 策略和当前登录状态。`:`已登录，云同步可用。`:`云同步已配置，请注册或登录账号。`:ns();return(0,E.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white shadow-soft ${o?`p-4`:`p-5`}`,children:[(0,E.jsxs)(`div`,{className:`flex flex-wrap items-start justify-between gap-3`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsxs)(`div`,{className:`flex items-center gap-2 text-sm font-semibold text-harbor`,children:[s?(0,E.jsx)(ce,{size:18,"aria-hidden":`true`}):(0,E.jsx)(T,{size:18,"aria-hidden":`true`}),`云同步配置`]}),(0,E.jsx)(`h2`,{className:`${o?`mt-1 text-lg`:`mt-2 text-xl`} font-semibold text-ink`,children:s?`云同步已配置`:`本地模式`})]}),(0,E.jsx)(ss,{ok:s,text:s?`可登录`:`未配置`})]}),(0,E.jsx)(`p`,{className:`mt-3 text-sm leading-6 text-slate-600`,children:c}),s?null:(0,E.jsx)(`div`,{className:`mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs leading-5 text-amber-800`,children:`线上仍显示 URL/key 缺失时，通常只有两个原因：GitHub Secrets 没配置，或配置后没有重新运行 Deploy GitHub Pages。注册和登录会在 Supabase 配好后自动启用。`}),(0,E.jsxs)(`a`,{href:as,target:`_blank`,rel:`noreferrer`,className:`mt-3 inline-flex min-h-9 items-center gap-2 rounded-lg border border-sky-200 bg-[#f8fbff] px-3 text-xs font-semibold text-harbor transition hover:border-harbor hover:bg-white`,children:[(0,E.jsx)(ve,{size:15,"aria-hidden":`true`}),`Supabase 配置步骤`]}),(0,E.jsxs)(`div`,{className:`mt-4 grid gap-2 ${o?``:`sm:grid-cols-2`}`,children:[(0,E.jsx)(cs,{icon:ge,label:`Supabase URL`,children:(0,E.jsx)(ss,{ok:$o.urlPresent,text:$o.urlPresent?`已读取`:`缺失`})}),(0,E.jsx)(cs,{icon:De,label:`Supabase anon key`,children:(0,E.jsx)(ss,{ok:$o.anonKeyPresent,text:$o.anonKeyPresent?`已读取`:`缺失`})}),(0,E.jsx)(cs,{icon:nt,label:`客户端`,children:(0,E.jsx)(ss,{ok:s&&e,text:s?e?`在线`:`离线`:`未启用`})}),(0,E.jsx)(cs,{icon:Ne,label:`登录状态`,children:(0,E.jsx)(ss,{ok:t,text:t?`已登录`:`未登录`})}),(0,E.jsx)(cs,{icon:Be,label:`同步状态`,children:(0,E.jsx)(`span`,{className:`max-w-[180px] truncate text-right text-xs font-semibold text-slate-600`,title:r,children:ls(n)})}),(0,E.jsx)(cs,{icon:Be,label:`最近同步`,children:(0,E.jsx)(`span`,{className:`text-xs font-semibold text-slate-600`,children:a?`待同步 ${a}`:os(i)})})]})]})}function ds(e){return e?new Date(e).toLocaleString(`zh-CN`,{month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`}):`未同步`}function fs(e,t,n,r){return e?t?n===`syncing`?`同步中`:n===`success`?`已同步`:n===`error`?`同步失败`:r.includes(`登录`)?`云同步已配置`:`已连接 Supabase`:`离线模式`:`本地模式`}function ps({configured:e,online:t,state:n,message:r,lastSyncAt:i,pendingCount:a=0}){return(0,E.jsxs)(`span`,{className:`inline-flex max-w-full min-h-8 items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-semibold leading-snug ${!e||!t||n===`error`?`border-amber-200 bg-amber-50 text-amber-700`:n===`success`?`border-emerald-200 bg-emerald-50 text-emerald-700`:`border-sky-200 bg-sky-50 text-harbor`}`,title:r,children:[(0,E.jsx)(e?t?n===`syncing`?Me:n===`success`?ce:he:tt:T,{size:14,className:`shrink-0 ${n===`syncing`?`animate-spin`:``}`,"aria-hidden":`true`}),(0,E.jsx)(`span`,{className:`min-w-0`,children:fs(e,t,n,r)}),a?(0,E.jsxs)(`span`,{className:`shrink-0`,children:[`待同步 `,a]}):null,(0,E.jsx)(`span`,{className:`hidden shrink-0 text-slate-500 sm:inline`,children:ds(i)})]})}function ms({configured:e,online:t,user:n,profile:r,state:i,message:a,lastSyncAt:o,pendingCount:s,onLogin:c,onRegister:l,onSync:u,onLogout:d,onExport:f,onImport:p}){return(0,E.jsxs)(`div`,{className:`space-y-5`,children:[(0,E.jsx)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:(0,E.jsxs)(`div`,{className:`flex flex-wrap items-start justify-between gap-4`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Account`}),(0,E.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`账号与云同步`}),(0,E.jsx)(`p`,{className:`mt-2 text-sm leading-6 text-slate-500`,children:`游客模式仍可本地使用；登录后可以跨设备同步学习进度。`})]}),(0,E.jsx)(ps,{configured:e,online:t,state:i,message:a,lastSyncAt:o,pendingCount:s})]})}),(0,E.jsxs)(`div`,{className:`grid gap-5 lg:grid-cols-[1.05fr_0.95fr]`,children:[(0,E.jsx)(us,{online:t,loggedIn:!!n,syncState:i,syncMessage:a,lastSyncAt:o,pendingCount:s}),(0,E.jsx)(Ot,{})]}),n?(0,E.jsxs)(`section`,{className:`grid gap-4 lg:grid-cols-[0.9fr_1.1fr]`,children:[(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,E.jsx)(`h2`,{className:`text-lg font-semibold text-ink`,children:`登录状态`}),(0,E.jsxs)(`div`,{className:`mt-4 space-y-3 text-sm`,children:[(0,E.jsxs)(`div`,{className:`flex justify-between gap-3 rounded-lg border border-sky-100 bg-[#f8fbff] px-3 py-2`,children:[(0,E.jsx)(`span`,{className:`text-slate-500`,children:`用户名`}),(0,E.jsx)(`span`,{className:`font-semibold text-ink`,children:r?.username||`未设置`})]}),(0,E.jsxs)(`div`,{className:`flex justify-between gap-3 rounded-lg border border-sky-100 bg-[#f8fbff] px-3 py-2`,children:[(0,E.jsx)(`span`,{className:`text-slate-500`,children:`邮箱`}),(0,E.jsx)(`span`,{className:`max-w-[220px] truncate font-semibold text-ink`,children:n.email})]}),(0,E.jsxs)(`div`,{className:`flex justify-between gap-3 rounded-lg border border-sky-100 bg-[#f8fbff] px-3 py-2`,children:[(0,E.jsx)(`span`,{className:`text-slate-500`,children:`上次同步`}),(0,E.jsx)(`span`,{className:`font-semibold text-ink`,children:o?new Date(o).toLocaleString(`zh-CN`):`未同步`})]})]}),(0,E.jsxs)(`button`,{type:`button`,onClick:d,className:`btn-danger mt-5 w-full`,children:[(0,E.jsx)(Pe,{size:18,"aria-hidden":`true`}),`退出登录`]})]}),(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,E.jsx)(`h2`,{className:`text-lg font-semibold text-ink`,children:`同步操作`}),(0,E.jsxs)(`div`,{className:`mt-5 grid gap-3 sm:grid-cols-3`,children:[(0,E.jsxs)(`button`,{type:`button`,onClick:()=>u(`upload`),disabled:!e||!t,className:`btn-secondary disabled:opacity-45`,children:[(0,E.jsx)(me,{size:18,"aria-hidden":`true`}),`上传本地`]}),(0,E.jsxs)(`button`,{type:`button`,onClick:()=>u(`download`),disabled:!e||!t,className:`btn-secondary disabled:opacity-45`,children:[(0,E.jsx)(pe,{size:18,"aria-hidden":`true`}),`下载云端`]}),(0,E.jsxs)(`button`,{type:`button`,onClick:()=>u(`merge`),disabled:!e||!t,className:`btn-primary disabled:opacity-45`,children:[(0,E.jsx)(we,{size:18,"aria-hidden":`true`}),`合并`]})]}),(0,E.jsxs)(`div`,{className:`mt-5 grid gap-3 sm:grid-cols-2`,children:[(0,E.jsxs)(`button`,{type:`button`,onClick:f,className:`btn-secondary`,children:[(0,E.jsx)(_e,{size:18,"aria-hidden":`true`}),`导出本地数据`]}),(0,E.jsxs)(`label`,{className:`btn-secondary cursor-pointer`,children:[(0,E.jsx)(Ze,{size:18,"aria-hidden":`true`}),`导入本地数据`,(0,E.jsx)(`input`,{type:`file`,accept:`application/json,.json`,className:`sr-only`,onChange:e=>{let t=e.target.files?.[0];t&&(t.text().then(p),e.target.value=``)}})]})]})]})]}):(0,E.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,E.jsx)(`h2`,{className:`text-lg font-semibold text-ink`,children:`当前是游客模式`}),(0,E.jsx)(`p`,{className:`mt-2 text-sm leading-6 text-slate-500`,children:`学习数据已保存在本地。Supabase 配置完成后，可以注册或登录账号，再选择上传本地、下载云端或合并两边数据。`}),(0,E.jsxs)(`div`,{className:`mt-5 flex flex-wrap gap-3`,children:[(0,E.jsx)(`button`,{type:`button`,onClick:c,disabled:!e,className:`btn-primary disabled:opacity-45`,children:`登录账号`}),(0,E.jsx)(`button`,{type:`button`,onClick:l,disabled:!e,className:`btn-secondary disabled:opacity-45`,children:`注册账号`})]}),e?null:(0,E.jsx)(`p`,{className:`mt-3 text-xs leading-5 text-amber-700`,children:`当前线上包未读取到 Supabase 配置，所以登录/注册暂时不可用。`})]})]})}function hs({achievement:e,stats:t}){return(0,E.jsxs)(`div`,{className:`rounded-lg border p-4 ${t.checkedAchievementIds.includes(e.id)?`border-spruce/30 bg-spruce/10`:`border-slate-200 bg-white`}`,children:[(0,E.jsx)(`div`,{className:`font-semibold text-ink`,children:e.title}),(0,E.jsx)(`div`,{className:`mt-1 text-sm text-slate-500`,children:e.description}),(0,E.jsxs)(`div`,{className:`mt-3 text-xs font-semibold text-harbor`,children:[`XP `,e.rewardXp,` / 金币 `,e.rewardCoins]})]})}function gs(e=new Date){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}function _s(e,t){let n=new Date(e);return n.setDate(n.getDate()+t),n}function vs(e,t=new Date){return e?e===gs(_s(t,-1)):!1}function ys(e,t=new Date){return!!(e&&e===gs(t))}function bs(e){let t=Math.floor(e/60),n=Math.floor(t/60),r=t%60;return n<=0?`${t}分钟`:`${n}小时${r?`${r}分钟`:``}`}function xs(e,t=new Date){return Array.from({length:e},(n,r)=>gs(_s(t,r-e+1)))}function Ss(e,t=new Date){let n=new Date(`${e}T00:00:00`),r=new Date(t),i=r.getDay()||7;r.setDate(r.getDate()-i+1),r.setHours(0,0,0,0);let a=_s(r,7);return n>=r&&n<a}function Cs(e,t=new Date){let n=new Date(`${e}T00:00:00`);return n.getFullYear()===t.getFullYear()&&n.getMonth()===t.getMonth()}var ws={xp:300,coins:120,monsterPoints:300};function Ts(e){return Math.floor(Math.sqrt(e/100))+1}function Es(e){return e<=3?`入门背词者`:e<=6?`稳定学习者`:e<=10?`复习执行者`:e<=15?`考研单词斗士`:e<=20?`长期主义者`:`红宝书征服者`}function Ds(e){return e*e*100}function Os(e,t){if(!t)return e;let n=new Date().toISOString();return e.find(e=>e.itemId===t)?e.map(e=>e.itemId===t?{...e,count:e.count+1}:e):[...e,{itemId:t,count:1,obtainedAt:n}]}function ks(e,t){let n=gs(),r=e.dailyRewardCaps[n]||{xp:0,coins:0,monsterPoints:0},i=t.xp||0,a=t.coins||0,o=t.monsterPoints||0,s=t.bypassDailyCap?i:Math.max(0,Math.min(i,ws.xp-r.xp)),c=t.bypassDailyCap?a:Math.max(0,Math.min(a,ws.coins-r.coins)),l=t.bypassDailyCap?o:Math.max(0,Math.min(o,ws.monsterPoints-r.monsterPoints)),u={id:`reward-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:t.type,title:t.title,description:t.description,xp:s,coins:c,createdAt:new Date().toISOString()},d=e.totalXp+s;return{...e,totalXp:d,level:Ts(d),coins:e.coins+c,diamonds:e.diamonds+(t.diamonds||0),monsterPoints:e.monsterPoints+l,inventory:Os(e.inventory,t.itemId),rewardHistory:[u,...e.rewardHistory].slice(0,200),dailyRewardCaps:{...e.dailyRewardCaps,[n]:{xp:r.xp+(t.bypassDailyCap?0:s),coins:r.coins+(t.bypassDailyCap?0:c),monsterPoints:r.monsterPoints+(t.bypassDailyCap?0:l)}}}}var As=`reword-progress-v1`,js=`reword-user-stats-v1`;function Ms(e){return{wordId:e,learned:!1,stage:0,knownCount:0,fuzzyCount:0,forgottenCount:0,correctCount:0,wrongCount:0,reviewHistory:[]}}function Ns(e,t,n=new Date){return{...e,reviewHistory:[...e.reviewHistory,{action:t,at:n.toISOString(),stage:e.stage}].slice(-200)}}function Ps(){return typeof window<`u`&&`localStorage`in window}function Fs(){if(!Ps())return{};let e=window.localStorage.getItem(As);if(!e)return{};try{let t=JSON.parse(e);return t&&typeof t==`object`?t:{}}catch{return{}}}function Is(e){Ps()&&window.localStorage.setItem(As,JSON.stringify(e))}function Ls(){Ps()&&(window.localStorage.removeItem(As),window.localStorage.removeItem(js))}function Rs(){return JSON.stringify({progress:Fs(),userStats:Hs()},null,2)}function zs(e){let t=JSON.parse(e);if(!t||typeof t!=`object`)throw Error(`进度文件格式不正确`);let n=t,r=n.progress||t;return Is(r),n.userStats&&Us(Vs(n.userStats)),r}function Bs(){return{totalStudyDays:0,currentStreak:0,longestStreak:0,signInStreak:0,lastSignInDate:null,lastCheckInDate:null,totalStudyMinutes:0,totalWordsLearned:0,totalWordsReviewed:0,totalQuizCount:0,totalCorrectCount:0,totalWrongCount:0,totalXp:0,level:1,coins:0,diamonds:0,monsterPoints:0,defeatedMonsters:0,unlockedItems:[`theme-default`,`avatar-default`],equippedTheme:`theme-default`,equippedAvatar:`avatar-default`,checkedAchievementIds:[],defeatedWordIds:[],defeatedBossIds:[],dailyRewardCaps:{},checkInHistory:[],studySessions:[],rewardHistory:[],inventory:[],audioSettings:{autoPlayOnStudy:!1,autoPlayOnRecall:!1,defaultAccent:`us`,speechRate:.9,repeatCount:1},soundSettings:{enabled:!0,volume:.25}}}function Vs(e){let t=Bs();return{...t,...e,audioSettings:{...t.audioSettings,...e.audioSettings},soundSettings:{...t.soundSettings,...e.soundSettings},dailyRewardCaps:e.dailyRewardCaps||{},checkInHistory:e.checkInHistory||[],studySessions:e.studySessions||[],rewardHistory:e.rewardHistory||[],inventory:e.inventory||[],unlockedItems:e.unlockedItems||t.unlockedItems,checkedAchievementIds:e.checkedAchievementIds||[],defeatedWordIds:e.defeatedWordIds||[],defeatedBossIds:e.defeatedBossIds||[],level:Math.floor(Math.sqrt((e.totalXp||0)/100))+1}}function Hs(){if(!Ps())return Bs();let e=window.localStorage.getItem(js);if(!e)return Bs();try{return Vs(JSON.parse(e))}catch{return Bs()}}function Us(e){Ps()&&window.localStorage.setItem(js,JSON.stringify({...e,level:Math.floor(Math.sqrt(e.totalXp/100))+1}))}var Ws=[{stage:1,label:`5分钟`,ms:300*1e3},{stage:2,label:`30分钟`,ms:1800*1e3},{stage:3,label:`12小时`,ms:720*60*1e3},{stage:4,label:`1天`,ms:1440*60*1e3},{stage:5,label:`2天`,ms:2880*60*1e3},{stage:6,label:`4天`,ms:5760*60*1e3},{stage:7,label:`7天`,ms:10080*60*1e3},{stage:8,label:`15天`,ms:360*60*60*1e3}];function Gs(e){return Ws.find(t=>t.stage===e)||Ws[0]}function Ks(e,t){return{...e,learned:!0,firstLearnedAt:e.firstLearnedAt||t.toISOString(),lastReviewedAt:t.toISOString()}}function qs(e,t=new Date){let n=Gs(Math.max(1,Math.min(e,8)));return new Date(t.getTime()+n.ms).toISOString()}function Js(e,t=new Date){let n=Math.max(1,e.stage);return Ns({...Ks(e,t),stage:n,nextReviewAt:qs(n,t)},`learned`,t)}function Ys(e,t=new Date){let n=Math.min(8,e.stage+1);return Ns({...Ks(e,t),stage:n,knownCount:e.knownCount+1,nextReviewAt:qs(n,t)},`known`,t)}function Xs(e,t=new Date){return Ns({...Ks(e,t),fuzzyCount:e.fuzzyCount+1,nextReviewAt:new Date(t.getTime()+1800*1e3).toISOString()},`fuzzy`,t)}function Zs(e,t=new Date){return Ns({...Ks(e,t),stage:0,forgottenCount:e.forgottenCount+1,nextReviewAt:qs(1,t)},`forgotten`,t)}function Qs(e,t=new Date){return!e?.learned||!e.nextReviewAt?!1:new Date(e.nextReviewAt).getTime()<=t.getTime()}function $s(e){return!!(e&&e.stage>=8&&e.correctCount>=2)}function ec(e,t,n=new Date){return e.filter(e=>Qs(t[e.id],n)).sort((e,n)=>new Date(t[e.id]?.nextReviewAt||0).getTime()-new Date(t[n.id]?.nextReviewAt||0).getTime())}function tc(e,t){return e.filter(e=>$s(t[e.id]))}function nc(e,t){return e.filter(e=>{let n=t[e.id];return!!(n&&n.fuzzyCount>0&&!$s(n))})}function rc(e,t){return e.filter(e=>(t[e.id]?.wrongCount||0)>0)}function ic(e,t=new Date){if(!e)return!1;let n=new Date(e);return n.getFullYear()===t.getFullYear()&&n.getMonth()===t.getMonth()&&n.getDate()===t.getDate()}function ac(e,t=new Date){let n=new Set;Object.values(e).forEach(e=>{e.reviewHistory.forEach(e=>n.add(e.at.slice(0,10))),e.firstLearnedAt&&n.add(e.firstLearnedAt.slice(0,10))});let r=0,i=new Date(t);for(;n.has(i.toISOString().slice(0,10));)r+=1,i.setDate(i.getDate()-1);return r}function oc(e,t,n=new Date){let r=ec(e,t,n),i=tc(e,t),a=nc(e,t),o=rc(e,t),s=e.filter(e=>t[e.id]?.learned),c=s.filter(e=>ic(t[e.id]?.firstLearnedAt,n)),l=e.filter(e=>(t[e.id]?.forgottenCount||0)>0).length;return{dueCount:r.length,todayNewCount:c.length,totalCount:e.length,learnedCount:s.length,masteredCount:i.length,weakCount:a.length,wrongCount:o.length,forgottenCount:l,streak:ac(t,n),progressPercent:e.length?Math.round(i.length/e.length*100):0}}var sc=[{id:`first-word`,title:`第一次学习`,description:`完成第一个单词`,rewardXp:20,rewardCoins:8},{id:`first-correct`,title:`初战告捷`,description:`第一次测试答对`,rewardXp:20,rewardCoins:8},{id:`unit1-20`,title:`Unit1 入门`,description:`Unit1 学习 20 个单词`,rewardXp:40,rewardCoins:15},{id:`hundred-mastered`,title:`百词斩`,description:`掌握 100 个单词`,rewardXp:120,rewardCoins:50,rewardDiamonds:1},{id:`seven-checkin`,title:`七日坚持`,description:`连续打卡 7 天`,rewardXp:90,rewardCoins:30},{id:`thirty-checkin`,title:`长期主义者`,description:`连续打卡 30 天`,rewardXp:220,rewardCoins:80,rewardDiamonds:2}];function cc(e,t,n){let r=t.filter(e=>n[e.id]?.learned).length,i=Object.values(n).reduce((e,t)=>e+t.correctCount,0),a=t.filter(e=>e.unitId===`unit1`&&n[e.id]?.learned).length,o=t.filter(e=>$s(n[e.id])).length,s={"first-word":r>=1,"first-correct":i>=1,"unit1-20":a>=20,"hundred-mastered":o>=100,"seven-checkin":e.currentStreak>=7||e.longestStreak>=7,"thirty-checkin":e.currentStreak>=30||e.longestStreak>=30};return sc.filter(e=>s[e.id])}function lc(e,t,n){let r=e;return cc(e,t,n).forEach(e=>{r.checkedAchievementIds.includes(e.id)||(r=ks({...r,checkedAchievementIds:[...r.checkedAchievementIds,e.id]},{type:`achievement`,title:e.title,description:e.description,xp:e.rewardXp,coins:e.rewardCoins,diamonds:e.rewardDiamonds,itemId:`badge-${e.id}`,bypassDailyCap:!0}))}),r}function uc({stats:e,words:t,progressMap:n}){let r=new Set(cc(e,t,n).map(e=>e.id));return(0,E.jsxs)(`div`,{className:`space-y-5`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Achievements`}),(0,E.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`成就徽章`})]}),(0,E.jsx)(`div`,{className:`grid gap-4 md:grid-cols-2 lg:grid-cols-3`,children:sc.map(t=>(0,E.jsx)(`div`,{className:!r.has(t.id)&&!e.checkedAchievementIds.includes(t.id)?`opacity-60`:``,children:(0,E.jsx)(hs,{achievement:t,stats:e})},t.id))})]})}function dc(e,t,n,r=new Date){let i=gs(r),a=e.filter(e=>t[e.id]?.firstLearnedAt?.slice(0,10)===i).length,o=e.filter(e=>t[e.id]?.lastReviewedAt?.slice(0,10)===i&&t[e.id]?.learned).length,s=n.studySessions.filter(e=>e.date===i).reduce((e,t)=>e+t.durationSeconds,0),c=n.studySessions.filter(e=>e.date===i&&e.mode===`quiz`&&e.wordCount>=20).reduce((e,t)=>e+t.wordCount,0),l=e.filter(e=>Qs(t[e.id],r)).length;return{newWords:a,reviewedWords:o,studyMinutes:Math.floor(s/60),testCount:c,dueLeft:l}}function fc(e,t,n,r=new Date){let i=dc(e,t,n,r);return[{id:`new-words`,title:`学习 10 个新单词`,current:i.newWords,target:10,reward:`XP 30 / 金币 12`},{id:`review`,title:`完成 20 个复习`,current:i.reviewedWords,target:20,reward:`XP 40 / 金币 16`},{id:`quiz`,title:`完成一次 20 题测试`,current:i.testCount,target:20,reward:`XP 35 / 金币 10`},{id:`time`,title:`学习满 15 分钟`,current:i.studyMinutes,target:15,reward:`XP 20 / 金币 10`}]}function pc(e,t,n,r=new Date){return ys(n.lastCheckInDate,r)?!1:fc(e,t,n,r).some(e=>e.current>=e.target)}function mc(e,t=new Date){let n=gs(t);if(ys(e.lastSignInDate,t))return e;let r=vs(e.lastSignInDate,t)?e.signInStreak+1:1,i=2,a;return r%30==0?(i+=80,a=`theme-morning`):r%14==0?(i+=30,a=`tool-review-boost`):r%7==0?(i+=15,a=`tool-focus-card`):r%3==0&&(i+=5),ks({...e,signInStreak:r,lastSignInDate:n},{type:`signin`,title:`每日签到`,description:`连续签到 ${r} 天`,xp:5,coins:i,itemId:a,bypassDailyCap:!0})}function hc(e,t=new Date){let n=gs(t);if(ys(e.lastCheckInDate,t))return e;let r=vs(e.lastCheckInDate,t)?e.currentStreak+1:1,i=20,a=50,o=0,s;return[7,14,30,100].includes(r)&&(o+=1),r===3&&(i+=10),r===7&&(i+=30,s=`badge-seven-days`),r===14&&(a+=80,s=`tool-review-boost`),r===30&&(a+=200,i+=80,s=`avatar-thirty-days`),r===100&&(a+=800,i+=300,s=`badge-longterm`),ks({...e,currentStreak:r,longestStreak:Math.max(e.longestStreak,r),totalStudyDays:e.checkInHistory.some(e=>e.date===n)?e.totalStudyDays:e.totalStudyDays+1,lastCheckInDate:n,checkInHistory:[{date:n,checkedAt:t.toISOString(),streakDay:r,rewardCoins:i,rewardXp:a,rewardItem:s},...e.checkInHistory].slice(0,365)},{type:`checkin`,title:`完成今日打卡`,description:`连续打卡 ${r} 天`,xp:a,coins:i,diamonds:o,itemId:s,bypassDailyCap:!0})}function gc(e,t=new Date){let n=new Date(t.getFullYear(),t.getMonth(),1),r=new Date(t.getFullYear(),t.getMonth()+1,0),i=new Set(e.checkInHistory.map(e=>e.date));return Array.from({length:r.getDate()},(e,r)=>{let a=gs(_s(n,r));return{date:a,day:r+1,checked:i.has(a),today:a===gs(t)}})}function _c({stats:e}){return(0,E.jsx)(`div`,{className:`grid grid-cols-7 gap-2`,children:gc(e).map(e=>(0,E.jsx)(`div`,{className:`grid h-10 place-items-center rounded-lg border text-sm ${e.checked?`border-spruce/30 bg-spruce/10 font-semibold text-spruce`:e.today?`border-harbor bg-white text-harbor`:`border-slate-200 bg-[#f8fbff] text-slate-500`}`,children:e.day},e.date))})}function K({value:e,max:t=100,label:n}){let r=t===0?0:Math.min(100,Math.round(e/t*100));return(0,E.jsxs)(`div`,{className:`space-y-2`,children:[n?(0,E.jsxs)(`div`,{className:`flex items-center justify-between text-xs text-slate-500`,children:[(0,E.jsx)(`span`,{children:n}),(0,E.jsxs)(`span`,{children:[r,`%`]})]}):null,(0,E.jsx)(`div`,{className:`h-2 overflow-hidden rounded-full bg-slate-200`,children:(0,E.jsx)(`div`,{className:`h-full rounded-full bg-harbor transition-all duration-500`,style:{width:`${r}%`}})})]})}function vc({words:e,progressMap:t,stats:n,onSignIn:r,onCheckIn:i}){let a=fc(e,t,n),o=gs(),s=n.lastSignInDate===o,c=n.lastCheckInDate===o,l=pc(e,t,n);return(0,E.jsxs)(`div`,{className:`space-y-5`,children:[(0,E.jsx)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:(0,E.jsxs)(`div`,{className:`flex flex-wrap items-start justify-between gap-4`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Check In`}),(0,E.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`打卡中心`}),(0,E.jsx)(`p`,{className:`mt-2 text-sm text-slate-500`,children:`签到是轻量奖励，打卡需要完成学习目标。`})]}),(0,E.jsxs)(`div`,{className:`flex gap-3`,children:[(0,E.jsxs)(`button`,{type:`button`,onClick:r,disabled:s,"data-sound":`none`,className:`btn-secondary disabled:opacity-40`,children:[(0,E.jsx)(Ce,{size:18,"aria-hidden":`true`}),s?`今日已签到`:`每日签到`]}),(0,E.jsxs)(`button`,{type:`button`,onClick:i,disabled:!l||c,"data-sound":`none`,className:`btn-primary disabled:opacity-40`,children:[(0,E.jsx)(ce,{size:18,"aria-hidden":`true`}),c?`今日已打卡`:l?`完成今日打卡`:`未达成打卡条件`]})]})]})}),(0,E.jsxs)(`section`,{className:`grid gap-4 lg:grid-cols-[1fr_0.8fr]`,children:[(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,E.jsx)(`h2`,{className:`font-semibold text-ink`,children:`今日任务`}),(0,E.jsx)(`div`,{className:`mt-4 space-y-4`,children:a.map(e=>(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-[#f8fbff] p-4`,children:[(0,E.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,E.jsx)(`div`,{className:`font-semibold text-ink`,children:e.title}),(0,E.jsxs)(`div`,{className:`text-sm text-slate-500`,children:[Math.min(e.current,e.target),` / `,e.target]})]}),(0,E.jsx)(`div`,{className:`mt-3`,children:(0,E.jsx)(K,{value:e.current,max:e.target,label:e.reward})})]},e.id))})]}),(0,E.jsxs)(`div`,{className:`space-y-4`,children:[(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,E.jsx)(`h2`,{className:`font-semibold text-ink`,children:`连续记录`}),(0,E.jsxs)(`div`,{className:`mt-4 grid grid-cols-2 gap-3 text-center`,children:[(0,E.jsxs)(`div`,{className:`rounded-lg bg-[#f8fbff] p-4`,children:[(0,E.jsx)(`div`,{className:`text-2xl font-semibold text-harbor`,children:n.currentStreak}),(0,E.jsx)(`div`,{className:`text-sm text-slate-500`,children:`连续打卡`})]}),(0,E.jsxs)(`div`,{className:`rounded-lg bg-[#f8fbff] p-4`,children:[(0,E.jsx)(`div`,{className:`text-2xl font-semibold text-harbor`,children:n.longestStreak}),(0,E.jsx)(`div`,{className:`text-sm text-slate-500`,children:`最长连续`})]})]})]}),(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,E.jsx)(`h2`,{className:`mb-4 font-semibold text-ink`,children:`本月打卡`}),(0,E.jsx)(_c,{stats:n})]})]})]})]})}function yc({stats:e}){return(0,E.jsxs)(`div`,{className:`flex flex-wrap gap-2 text-sm`,children:[(0,E.jsxs)(`span`,{className:`rounded-lg border border-amber-200 bg-amber-50 px-3 py-1.5 font-semibold text-amber-700`,children:[`金币 `,e.coins]}),(0,E.jsxs)(`span`,{className:`inline-flex items-center gap-1 rounded-lg border border-sky-200 bg-sky-50 px-3 py-1.5 font-semibold text-sky-700`,children:[(0,E.jsx)(Se,{size:15,"aria-hidden":`true`}),`钻石 `,e.diamonds]}),(0,E.jsxs)(`span`,{className:`inline-flex items-center gap-1 rounded-lg border border-violet-200 bg-violet-50 px-3 py-1.5 font-semibold text-violet-700`,children:[(0,E.jsx)(Ke,{size:15,"aria-hidden":`true`}),`打怪 `,e.monsterPoints]})]})}function bc({stats:e}){let t=(e.level-1)*(e.level-1)*100,n=Ds(e.level),r=e.totalXp-t,i=Math.max(1,n-t);return(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-soft`,children:[(0,E.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`text-sm text-slate-500`,children:`当前等级`}),(0,E.jsxs)(`div`,{className:`text-2xl font-semibold text-ink`,children:[`Lv.`,e.level]})]}),(0,E.jsx)(`div`,{className:`text-right text-sm font-semibold text-harbor`,children:Es(e.level)})]}),(0,E.jsx)(`div`,{className:`mt-4`,children:(0,E.jsx)(K,{value:r,max:i,label:`XP ${e.totalXp}，距离下一级 ${Math.max(0,n-e.totalXp)}`})})]})}function xc(){return(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,E.jsx)(`div`,{className:`mb-4 flex items-end justify-between gap-4`,children:(0,E.jsx)(`div`,{children:(0,E.jsx)(`h2`,{className:`text-lg font-semibold text-ink`,children:`艾宾浩斯复习时间轴`})})}),(0,E.jsx)(`div`,{className:`grid gap-3 sm:grid-cols-2 lg:grid-cols-4`,children:Ws.map(e=>(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-[#f8fbff] p-3`,children:[(0,E.jsxs)(`div`,{className:`text-xs text-slate-500`,children:[`Stage `,e.stage]}),(0,E.jsx)(`div`,{className:`mt-1 font-semibold text-harbor`,children:e.label})]},e.stage))})]})}var Sc={current:`bg-harbor/10 text-harbor`,spruce:`bg-spruce/10 text-spruce`,copper:`bg-copper/10 text-copper`,slate:`bg-slate-200 text-slate-700`};function Cc({label:e,value:t,tone:n=`current`,icon:r}){return(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-3 shadow-soft`,children:[(0,E.jsx)(`div`,{className:`mb-3 grid h-8 w-8 place-items-center rounded-md ${Sc[n]}`,children:(0,E.jsx)(r,{size:18,"aria-hidden":`true`})}),(0,E.jsx)(`div`,{className:`text-2xl font-semibold leading-none text-ink`,children:t}),(0,E.jsx)(`div`,{className:`mt-1 text-sm text-slate-500`,children:e})]})}var wc=new Date(`2026-12-19T14:00:00+08:00`),Tc=[`坚持就是胜利，重复就是答案。`,`今天多记一轮，考场少慌一分。`,`背词不是拼爆发，是把每天的重复做稳。`,`看似慢的复习，最后会变成最快的提分。`];function Ec(e=new Date){let t=Math.max(0,wc.getTime()-e.getTime()),n=Math.floor(t/36e5);return{days:Math.floor(t/864e5),hours:n%24,minutes:Math.floor(t/6e4)%60,expired:t===0}}function Dc(e=new Date){return Tc[Math.floor(e.getTime()/864e5)%Tc.length]}function Oc(e,t,n=0){let r=new Date;return{id:`session-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,date:gs(r),startedAt:r.toISOString(),endedAt:r.toISOString(),durationSeconds:0,mode:e,unitId:t,wordCount:n}}function kc(e,t){if(t.durationSeconds<30)return e;let n=Math.floor(t.durationSeconds/60);return{...e,totalStudyMinutes:e.totalStudyMinutes+n,studySessions:[t,...e.studySessions].slice(0,500)}}function q(e){let t=gs(),n=Ac(e.studySessions.filter(e=>e.date===t)),r=Ac(e.studySessions.filter(e=>Ss(e.date))),i=Ac(e.studySessions.filter(e=>Cs(e.date))),a=e.totalStudyMinutes*60,o=new Set(e.studySessions.map(e=>e.date)).size||1,s=Math.max(0,...e.studySessions.map(e=>e.durationSeconds)),c=e.studySessions.reduce((e,t)=>(e[t.mode]=(e[t.mode]||0)+t.durationSeconds,e),{});return{todaySeconds:n,weekSeconds:r,monthSeconds:i,totalSeconds:a,averageSeconds:Math.floor(a/o),longestSeconds:s,modeTotals:c}}function Ac(e){return e.reduce((e,t)=>e+t.durationSeconds,0)}function jc(e,t){return xs(t).map(t=>({date:t,seconds:Ac(e.studySessions.filter(e=>e.date===t))}))}function Mc(e,t){let n=e.reduce((e,n)=>{let r=e[n.unitName]||{total:0,mastered:0};return r.total+=1,$s(t[n.id])&&(r.mastered+=1),e[n.unitName]=r,e},{});return Object.entries(n).map(([e,t])=>({unitName:e,...t,percent:t.total?Math.round(t.mastered/t.total*100):0})).sort((e,t)=>t.percent-e.percent)}function Nc(e){if(!e)return`未安排`;let t=new Date(e);return Number.isNaN(t.getTime())?`未安排`:new Intl.DateTimeFormat(`zh-CN`,{month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`}).format(t)}function Pc(e){return!e?.learned&&!e?.firstLearnedAt?`未学习`:$s(e)?`已掌握`:Qs(e)?`待复习`:e.fuzzyCount>0?`需巩固`:`学习中`}function Fc(e,t){return{learned:e.filter(e=>t[e.id]?.learned||t[e.id]?.firstLearnedAt).length,mastered:e.filter(e=>$s(t[e.id])).length,due:e.filter(e=>Qs(t[e.id])).length}}function Ic({units:e,words:t,progressMap:n,stats:r,onSignIn:i,onContinueStudy:a,onNavigateReview:o,onNavigateWrongQuiz:s,onNavigateUnits:c,onNavigateCheckIn:l,onNavigateMonster:u,onNavigateShop:d,onNavigateStatistics:f,onNavigateLogin:p,onNavigateAccount:m,syncStatus:h}){let g=oc(t,n),_=q(r),v=fc(t,n,r),y=ec(t,n).slice(0,6),b=gs(),x=r.lastSignInDate===b,S=r.lastCheckInDate===b,C=pc(t,n,r),w=r.rewardHistory.slice(0,3),te=Ec(),ne=Dc();return(0,E.jsxs)(`div`,{className:`space-y-5`,children:[(0,E.jsxs)(`section`,{className:`hero-panel relative overflow-hidden`,children:[(0,E.jsx)(`div`,{className:`pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(90deg,rgba(111,185,219,0.28),rgba(255,255,255,0))]`}),(0,E.jsxs)(`div`,{className:`relative max-w-2xl`,children:[(0,E.jsx)(`div`,{className:`mb-3 text-xs font-semibold uppercase text-copper`,children:`Seaside Study Desk`}),(0,E.jsx)(`h1`,{className:`font-display text-3xl font-semibold leading-tight text-ink md:text-4xl`,children:`考研英语倒计时`}),(0,E.jsxs)(`div`,{className:`mt-3 flex flex-wrap items-end gap-3`,children:[(0,E.jsx)(`div`,{className:`font-display text-6xl font-semibold leading-none text-harbor md:text-7xl`,children:te.days}),(0,E.jsxs)(`div`,{className:`pb-2`,children:[(0,E.jsxs)(`div`,{className:`text-lg font-semibold text-ink`,children:[`天 `,te.hours,`小时 `,te.minutes,`分钟`]}),(0,E.jsxs)(`div`,{className:`text-sm text-slate-500`,children:[`预估英语考试：`,wc.getFullYear(),`-12-19 14:00`]})]})]}),(0,E.jsx)(`div`,{className:`mt-4 rounded-lg border border-sky-100 bg-white/80 p-3 text-sm font-semibold leading-6 text-slate-700`,children:ne}),(0,E.jsxs)(`div`,{className:`mt-4 grid gap-3 text-sm text-slate-600 sm:grid-cols-3`,children:[(0,E.jsxs)(`div`,{className:`rounded-lg border border-sky-100 bg-white/90 px-3 py-2`,children:[(0,E.jsx)(`span`,{className:`block text-xs text-slate-400`,children:`必备单元`}),(0,E.jsx)(`span`,{className:`font-semibold text-ink`,children:e.length})]}),(0,E.jsxs)(`div`,{className:`rounded-lg border border-sky-100 bg-white/90 px-3 py-2`,children:[(0,E.jsx)(`span`,{className:`block text-xs text-slate-400`,children:`词量`}),(0,E.jsx)(`span`,{className:`font-semibold text-ink`,children:t.length})]}),(0,E.jsxs)(`button`,{type:`button`,onClick:f,className:`rounded-lg border border-sky-100 bg-white/90 px-3 py-2 text-left transition hover:border-harbor hover:text-harbor`,children:[(0,E.jsx)(`span`,{className:`block text-xs text-slate-400`,children:`今日时长`}),(0,E.jsx)(`span`,{className:`font-semibold text-ink`,children:bs(_.todaySeconds)})]})]}),(0,E.jsxs)(`div`,{className:`mt-4 flex flex-wrap items-center gap-2`,children:[(0,E.jsx)(ps,{configured:h.configured,online:h.online,state:h.state,message:h.message,lastSyncAt:h.lastSyncAt,pendingCount:h.pendingCount}),(0,E.jsxs)(`button`,{type:`button`,onClick:h.isLoggedIn?m:p,className:`btn-secondary min-h-8 px-3 py-1.5 text-xs`,children:[(0,E.jsx)(Ne,{size:15,"aria-hidden":`true`}),h.isLoggedIn?`账号同步`:`登录同步`]})]}),(0,E.jsxs)(`div`,{className:`mt-5 flex flex-wrap gap-3`,children:[(0,E.jsxs)(`button`,{type:`button`,onClick:a,className:`btn-primary`,children:[(0,E.jsx)(le,{size:18,"aria-hidden":`true`}),`继续学习`]}),(0,E.jsxs)(`button`,{type:`button`,onClick:o,className:`btn-secondary`,children:[(0,E.jsx)(ae,{size:18,"aria-hidden":`true`}),`开始今日复习`]}),(0,E.jsxs)(`button`,{type:`button`,onClick:s,className:`btn-secondary`,children:[(0,E.jsx)(Ae,{size:18,"aria-hidden":`true`}),`错题强化`]}),(0,E.jsxs)(`button`,{type:`button`,onClick:c,className:`btn-secondary`,children:[(0,E.jsx)(ke,{size:18,"aria-hidden":`true`}),`进入单元`]})]})]}),(0,E.jsxs)(`div`,{className:`hero-meter relative`,children:[(0,E.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`text-sm text-slate-500`,children:`掌握进度`}),(0,E.jsxs)(`div`,{className:`mt-2 text-5xl font-semibold text-harbor`,children:[g.progressPercent,`%`]})]}),(0,E.jsx)(yc,{stats:r})]}),(0,E.jsx)(`div`,{className:`mt-4`,children:(0,E.jsx)(K,{value:g.masteredCount,max:g.totalCount,label:`${g.masteredCount}/${g.totalCount}`})}),(0,E.jsxs)(`div`,{className:`mt-4 grid grid-cols-2 gap-2 text-sm`,children:[(0,E.jsxs)(`button`,{type:`button`,onClick:i,disabled:x,"data-sound":`none`,className:`btn-secondary min-h-10 disabled:opacity-45`,children:[(0,E.jsx)(Ce,{size:17,"aria-hidden":`true`}),x?`已签到`:`签到`]}),(0,E.jsxs)(`button`,{type:`button`,onClick:l,className:S||C?`btn-primary min-h-10`:`btn-secondary min-h-10`,children:[(0,E.jsx)(qe,{size:17,"aria-hidden":`true`}),S?`已打卡`:C?`去打卡`:`看任务`]})]})]})]}),(0,E.jsx)(Ot,{compact:!0}),(0,E.jsxs)(`section`,{className:`grid gap-4 lg:grid-cols-[1fr_0.9fr]`,children:[(0,E.jsx)(bc,{stats:r}),(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-soft`,children:[(0,E.jsxs)(`div`,{className:`mb-3 flex items-center justify-between gap-3`,children:[(0,E.jsx)(`h2`,{className:`font-semibold text-ink`,children:`今日打卡条件`}),(0,E.jsx)(`button`,{type:`button`,onClick:l,className:`text-sm font-semibold text-harbor`,children:`打卡中心`})]}),(0,E.jsx)(`div`,{className:`grid gap-3 sm:grid-cols-2`,children:v.map(e=>(0,E.jsxs)(`div`,{className:`rounded-lg border border-sky-100 bg-[#f8fbff] p-3`,children:[(0,E.jsxs)(`div`,{className:`mb-2 flex items-center justify-between gap-3 text-sm`,children:[(0,E.jsx)(`span`,{className:`font-semibold text-ink`,children:e.title}),(0,E.jsxs)(`span`,{className:`text-slate-500`,children:[Math.min(e.current,e.target),`/`,e.target]})]}),(0,E.jsx)(K,{value:e.current,max:e.target,label:e.reward})]},e.id))})]})]}),(0,E.jsxs)(`section`,{className:`grid gap-4 sm:grid-cols-2 lg:grid-cols-4`,children:[(0,E.jsx)(Cc,{label:`今日应复习`,value:g.dueCount,icon:ae,tone:`current`}),(0,E.jsx)(Cc,{label:`今日新学`,value:g.todayNewCount,icon:ee,tone:`spruce`}),(0,E.jsx)(Cc,{label:`连续打卡`,value:r.currentStreak,icon:be,tone:`copper`}),(0,E.jsx)(Cc,{label:`今日学习`,value:bs(_.todaySeconds),icon:oe,tone:`slate`}),(0,E.jsx)(Cc,{label:`已掌握`,value:g.masteredCount,icon:qe,tone:`spruce`}),(0,E.jsx)(Cc,{label:`不熟词`,value:g.weakCount,icon:Xe,tone:`copper`}),(0,E.jsx)(Cc,{label:`遗忘词`,value:g.forgottenCount,icon:xe,tone:`slate`}),(0,E.jsx)(Cc,{label:`错题词`,value:g.wrongCount,icon:Ae,tone:`current`})]}),(0,E.jsxs)(`div`,{className:`grid gap-5 lg:grid-cols-[1.15fr_0.85fr]`,children:[(0,E.jsx)(xc,{}),(0,E.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,E.jsxs)(`div`,{className:`mb-4 flex items-center justify-between gap-4`,children:[(0,E.jsx)(`h2`,{className:`text-lg font-semibold text-ink`,children:`最近需要复习`}),(0,E.jsx)(`button`,{type:`button`,onClick:o,className:`text-sm font-semibold text-harbor`,children:`全部查看`})]}),(0,E.jsx)(`div`,{className:`space-y-3`,children:y.length?y.map(e=>(0,E.jsxs)(`div`,{className:`flex items-center justify-between gap-3 rounded-lg border border-sky-100 bg-[#f8fbff] p-3`,children:[(0,E.jsxs)(`div`,{className:`min-w-0`,children:[(0,E.jsx)(`div`,{className:`truncate font-semibold text-ink`,children:e.word}),(0,E.jsx)(`div`,{className:`text-xs text-slate-500`,children:e.unitName})]}),(0,E.jsx)(`div`,{className:`shrink-0 text-xs text-copper`,children:Nc(n[e.id]?.nextReviewAt)})]},e.id)):(0,E.jsx)(`p`,{className:`rounded-lg border border-sky-100 bg-[#f8fbff] p-4 text-sm leading-6 text-slate-500`,children:`现在没有到期词，可以进入单元继续初学。`})})]})]}),(0,E.jsxs)(`section`,{className:`grid gap-4 lg:grid-cols-[0.9fr_1.1fr]`,children:[(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,E.jsxs)(`div`,{className:`mb-4 flex items-center justify-between gap-3`,children:[(0,E.jsx)(`h2`,{className:`font-semibold text-ink`,children:`快捷入口`}),(0,E.jsxs)(`button`,{type:`button`,onClick:d,className:`inline-flex items-center gap-1 text-sm font-semibold text-harbor`,children:[(0,E.jsx)(We,{size:16,"aria-hidden":`true`}),`商店`]})]}),(0,E.jsxs)(`div`,{className:`grid gap-3 sm:grid-cols-2`,children:[(0,E.jsxs)(`button`,{type:`button`,onClick:u,className:`mode-card`,children:[(0,E.jsx)(Ke,{size:20,"aria-hidden":`true`}),(0,E.jsx)(`span`,{children:`单词打怪`})]}),(0,E.jsxs)(`button`,{type:`button`,onClick:f,className:`mode-card`,children:[(0,E.jsx)(oe,{size:20,"aria-hidden":`true`}),(0,E.jsx)(`span`,{children:`学习统计`})]})]})]}),(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,E.jsx)(`h2`,{className:`font-semibold text-ink`,children:`最新奖励`}),(0,E.jsx)(`div`,{className:`mt-4 space-y-3`,children:w.length?w.map(e=>(0,E.jsxs)(`div`,{className:`flex items-center justify-between gap-3 rounded-lg border border-sky-100 bg-[#f8fbff] p-3`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`font-semibold text-ink`,children:e.title}),(0,E.jsx)(`div`,{className:`text-xs text-slate-500`,children:e.description})]}),(0,E.jsxs)(`div`,{className:`shrink-0 text-sm font-semibold text-harbor`,children:[`+`,e.xp,` XP`]})]},e.id)):(0,E.jsx)(`p`,{className:`rounded-lg border border-sky-100 bg-[#f8fbff] p-4 text-sm text-slate-500`,children:`还没有奖励记录，先签到或学一个新词。`})})]})]})]})}function Lc({loading:e=!1,disabled:t=!1,disabledReason:n,onSubmit:r,onForgotPassword:i}){let[a,o]=(0,y.useState)(``),[s,c]=(0,y.useState)(``),[l,u]=(0,y.useState)(null),d=e||t;return(0,E.jsxs)(`form`,{onSubmit:async e=>{if(e.preventDefault(),u(null),t){u(n||`当前暂不可用。`);return}await r(a.trim(),s)},className:`space-y-4`,children:[(0,E.jsxs)(`label`,{className:`block`,children:[(0,E.jsx)(`span`,{className:`text-sm font-semibold text-slate-700`,children:`邮箱`}),(0,E.jsx)(`input`,{type:`email`,value:a,onChange:e=>o(e.target.value),required:!0,disabled:d,autoComplete:`email`,className:`mt-2 h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400`,placeholder:`name@example.com`})]}),(0,E.jsxs)(`label`,{className:`block`,children:[(0,E.jsx)(`span`,{className:`text-sm font-semibold text-slate-700`,children:`密码`}),(0,E.jsx)(`input`,{type:`password`,value:s,onChange:e=>c(e.target.value),required:!0,disabled:d,autoComplete:`current-password`,className:`mt-2 h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400`,placeholder:`输入密码`})]}),l?(0,E.jsx)(`div`,{className:`rounded-lg border border-sky-100 bg-sky-50 px-3 py-2 text-sm text-harbor`,children:l}):null,(0,E.jsxs)(`button`,{type:`submit`,disabled:d,className:`btn-primary w-full disabled:opacity-50`,children:[(0,E.jsx)(Ne,{size:18,"aria-hidden":`true`}),`登录`]}),(0,E.jsxs)(`button`,{type:`button`,onClick:async()=>{if(u(null),t){u(n||`当前暂不可用。`);return}if(!a.trim()){u(`先填写邮箱，再发送重置邮件。`);return}await i(a.trim()),u(`如果邮箱存在，重置邮件会发送到你的邮箱。`)},disabled:d,className:`btn-secondary w-full disabled:opacity-50`,children:[(0,E.jsx)(Ve,{size:18,"aria-hidden":`true`}),`忘记密码`]}),n?(0,E.jsx)(`div`,{className:`rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs leading-5 text-amber-800`,children:n}):null,(0,E.jsxs)(`div`,{className:`flex items-center justify-center gap-2 text-xs text-slate-500`,children:[(0,E.jsx)(Fe,{size:14,"aria-hidden":`true`}),`密码由 Supabase Auth 处理，本地不会保存明文密码。`]})]})}var Rc=/^[\p{Script=Han}A-Za-z0-9_]{2,20}$/u;function zc(e){return e?{id:e.id,userId:e.user_id,username:e.username,displayName:e.display_name,avatarUrl:e.avatar_url,createdAt:e.created_at,updatedAt:e.updated_at}:null}function Bc(e,t){let n=e.trim().replace(/\s+/g,`_`).replace(/[^\p{Script=Han}A-Za-z0-9_]/gu,`_`).replace(/_+/g,`_`).replace(/^_+|_+$/g,``).slice(0,20);return Rc.test(n)?n:t}function Vc(e){let t=e.trim();if(!Rc.test(t))throw Error(`用户名需为 2-20 位，只能包含中文、字母、数字或下划线。`);return t}function Hc(e){let t=e instanceof Error?e.message:String(e||``),n=t.toLowerCase();return n.includes(`html`)||n.includes(`unexpected token`)||n.includes(`<html`)?Error(`请求返回了 HTML 页面，可能是 Supabase 地址填错、GitHub Pages 返回 404，或线上包没有正确注入环境变量。`):n.includes(`is_username_available`)||n.includes(`function`)||n.includes(`schema cache`)?Error(`Supabase 表结构未更新，请在 SQL Editor 重新执行最新的 supabase/schema.sql。`):n.includes(`profiles_username`)||n.includes(`duplicate`)||n.includes(`unique`)?Error(`用户名已被占用，请换一个。`):n.includes(`database error saving new user`)?Error(`创建账号时写入资料失败，可能是用户名已被占用，或 Supabase schema 尚未更新。请换一个用户名，或重新执行最新 schema.sql。`):n.includes(`already registered`)||n.includes(`already been registered`)?Error(`该邮箱已注册，请直接登录。`):n.includes(`invalid login credentials`)?Error(`邮箱或密码不正确。`):n.includes(`email not confirmed`)?Error(`邮箱还没有完成验证，请先到邮箱点击验证链接。`):n.includes(`row-level security`)?Error(`Supabase RLS 策略阻止了本次操作，请确认已执行最新 schema.sql。`):Error(t||`账号请求失败，请稍后重试。`)}function Uc(){if(!G)throw Error(`当前线上包未读取到 Supabase 配置，请先配置 GitHub Secrets 并重新部署。你仍可使用游客模式背单词。`)}async function Wc(e){let t=await is().rpc(`is_username_available`,{candidate:e});if(t.error)throw Hc(t.error);if(t.data===!1)throw Error(`用户名已被占用，请换一个。`)}async function Gc(){if(!es)return{session:null,user:null};let{data:e,error:t}=await es.auth.getSession();if(t)throw t;return{session:e.session,user:e.session?.user||null}}async function J(e){Uc();let{data:t,error:n}=await is().from(`profiles`).select(`*`).eq(`user_id`,e).maybeSingle();if(n)throw n;return zc(t)}async function Y(e,t){Uc();let n=is(),r=`user_${e.id.slice(0,8)}`,i=e.user_metadata?.username||e.email?.split(`@`)[0]||r,a=t?Vc(t):Bc(i,r),{data:o,error:s}=await n.from(`profiles`).upsert({user_id:e.id,username:a,display_name:e.user_metadata?.display_name||a,updated_at:new Date().toISOString()},{onConflict:`user_id`}).select(`*`).single();if(s)throw s;return zc(o)}async function X({username:e,email:t,password:n}){try{Uc();let r=is(),i=Vc(e);await Wc(i);let{data:a,error:o}=await r.auth.signUp({email:t.trim(),password:n,options:{data:{username:i,display_name:i}}});if(o)throw Hc(o);if(a.user)try{await Y(a.user,i)}catch(e){if(a.session)throw Hc(e)}return a}catch(e){throw Hc(e)}}async function Kc({email:e,password:t}){try{Uc();let{data:n,error:r}=await is().auth.signInWithPassword({email:e.trim(),password:t});if(r)throw Hc(r);return n.user&&await Y(n.user),n}catch(e){throw Hc(e)}}async function qc(){Uc();let{error:e}=await is().auth.signOut();if(e)throw e}async function Jc(e){try{Uc();let{error:t}=await is().auth.resetPasswordForEmail(e.trim(),{redirectTo:`${window.location.origin}/reword/`});if(t)throw Hc(t)}catch(e){throw Hc(e)}}function Yc({configured:e,loading:t,error:n,onLogin:r,onSuccess:i,onRegister:a,onGuest:o}){let[s,c]=(0,y.useState)(null),l=e?void 0:`当前线上包未读取到 Supabase 配置，请先配置 GitHub Secrets 并重新部署。你仍可使用游客模式背单词。`;return(0,E.jsxs)(`div`,{className:`mx-auto grid min-h-[calc(100dvh-160px)] max-w-5xl items-center gap-5 lg:grid-cols-[1fr_420px]`,children:[(0,E.jsxs)(`section`,{className:`rounded-lg border border-sky-100 bg-white/90 p-5 shadow-soft`,children:[(0,E.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Cloud Account`}),(0,E.jsx)(`h1`,{className:`mt-2 text-3xl font-semibold text-ink`,children:`2027 考研英语记忆系统`}),(0,E.jsx)(`p`,{className:`mt-3 text-sm leading-6 text-slate-600`,children:`登录后可在手机、平板、电脑同步学习进度。未登录时仍可继续游客模式，数据会保存在本地。`}),(0,E.jsx)(`div`,{className:`mt-5 grid gap-3 sm:grid-cols-3`,children:[`本地先保存`,`登录后同步`,`换设备恢复`].map(e=>(0,E.jsx)(`div`,{className:`rounded-lg border border-sky-100 bg-[#f8fbff] px-3 py-3 text-sm font-semibold text-harbor`,children:e},e))})]}),(0,E.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,E.jsxs)(`div`,{className:`mb-5 flex items-center justify-between gap-3`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`h2`,{className:`text-xl font-semibold text-ink`,children:`账号登录`}),(0,E.jsx)(`p`,{className:`mt-1 text-sm text-slate-500`,children:`邮箱 + 密码登录`})]}),(0,E.jsx)(`button`,{type:`button`,onClick:o,className:`icon-btn`,title:`返回游客模式`,children:(0,E.jsx)(S,{size:18,"aria-hidden":`true`})})]}),e?null:(0,E.jsx)(`div`,{className:`mb-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-800`,children:l}),n?(0,E.jsx)(`div`,{className:`mb-4 rounded-lg border border-rose-100 bg-rose-50 px-3 py-2 text-sm text-rose-700`,children:n}):null,s?(0,E.jsx)(`div`,{className:`mb-4 rounded-lg border border-emerald-100 bg-emerald-50 px-3 py-2 text-sm text-emerald-700`,children:s}):null,(0,E.jsx)(Lc,{loading:t,disabled:!e,disabledReason:l,onSubmit:async(t,n)=>{if(!e){c(l||`当前暂不可用。`);return}await r(t,n),i()},onForgotPassword:async e=>{await Jc(e),c(`重置邮件已发送，请检查邮箱。`)}}),(0,E.jsxs)(`div`,{className:`mt-4 grid gap-3 sm:grid-cols-2`,children:[(0,E.jsxs)(`button`,{type:`button`,onClick:a,disabled:!e,className:`btn-secondary disabled:opacity-45`,children:[(0,E.jsx)(Qe,{size:18,"aria-hidden":`true`}),`注册账号`]}),(0,E.jsx)(`button`,{type:`button`,onClick:o,className:`btn-secondary`,children:`游客模式`})]})]})]})}function Xc(e,t){let n=t[e.id];if($s(n))return 0;if(!n)return 100;let r=n.knownCount*25+n.correctCount*20+n.fuzzyCount*10,i=n.forgottenCount*10+n.wrongCount*5;return Math.max(5,Math.min(100,100-r+i))}function Zc(e,t,n){let r=e.filter(e=>$s(t[e.id])).length;return{defeatedWords:r,activeMonsters:e.length-r,defeatedBosses:n.defeatedBossIds.length,monsterPoints:n.monsterPoints}}function Qc(e,t,n){let r=e.words.filter(e=>t[e.id]?.learned).length,i=e.words.length?Math.round(r/e.words.length*100):0,a=ec(e.words,t).length,o=n.defeatedBossIds.includes(e.id),s=i>=80&&a===0;return{id:e.id,name:`${e.name} Boss`,subtitle:`${$c(e.order)}·Unit${e.order}`,learnedPercent:i,dueLeft:a,defeated:o,eligible:s,hp:o?0:s?100:Math.max(20,100-i)}}function $c(e){let t=[`遗忘兽`,`拖延兽`,`混淆兽`,`倦怠兽`,`焦虑兽`,`懒散兽`,`粗心兽`,`瓶颈兽`];return t[(e-1)%t.length]}function el({unit:e,progressMap:t,stats:n,onChallenge:r}){let i=Qc(e,t,n);return(0,E.jsxs)(`div`,{className:`rounded-lg border border-violet-200 bg-white p-4 shadow-soft`,children:[(0,E.jsxs)(`div`,{className:`flex items-start justify-between gap-3`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`font-semibold text-ink`,children:i.subtitle}),(0,E.jsxs)(`div`,{className:`mt-1 text-sm text-slate-500`,children:[`学习 `,i.learnedPercent,`% / 到期 `,i.dueLeft]})]}),(0,E.jsx)(`button`,{type:`button`,onClick:()=>r(e.id),disabled:!i.eligible||i.defeated,"data-sound":`none`,className:`btn-secondary min-h-9 px-3 py-1.5 disabled:opacity-40`,children:i.defeated?`已击败`:`挑战`})]}),(0,E.jsx)(`div`,{className:`mt-3`,children:(0,E.jsx)(K,{value:100-i.hp,max:100,label:i.eligible?`可挑战`:`解锁进度`})})]})}function tl({word:e,progressMap:t}){let n=Xc(e,t);return(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-soft`,children:[(0,E.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`font-semibold text-ink`,children:e.word}),(0,E.jsx)(`div`,{className:`text-sm text-slate-500`,children:e.unitName})]}),(0,E.jsxs)(`div`,{className:`text-sm font-semibold text-violet-700`,children:[`HP `,n]})]}),(0,E.jsx)(`div`,{className:`mt-3`,children:(0,E.jsx)(K,{value:100-n,max:100,label:n<=0?`已击败`:`攻击进度`})})]})}function nl({words:e,units:t,progressMap:n,stats:r,onChallengeBoss:i}){let a=Zc(e,n,r),o=e.filter(e=>!r.defeatedWordIds.includes(e.id)).slice(0,6);return(0,E.jsxs)(`div`,{className:`space-y-5`,children:[(0,E.jsxs)(`section`,{className:`rounded-lg border border-violet-200 bg-white p-5 shadow-soft`,children:[(0,E.jsxs)(`div`,{className:`flex flex-wrap items-end justify-between gap-4`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`text-xs font-semibold uppercase text-violet-700`,children:`Monster`}),(0,E.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`单词打怪`}),(0,E.jsx)(`p`,{className:`mt-2 text-sm text-slate-500`,children:`记住、复习、答对都会攻击单词怪物。`})]}),(0,E.jsx)(yc,{stats:r})]}),(0,E.jsxs)(`div`,{className:`mt-5 grid gap-3 sm:grid-cols-3`,children:[(0,E.jsxs)(`div`,{className:`rounded-lg bg-violet-50 p-4 text-center`,children:[(0,E.jsx)(`div`,{className:`text-2xl font-semibold`,children:a.monsterPoints}),(0,E.jsx)(`div`,{className:`text-sm text-slate-500`,children:`打怪积分`})]}),(0,E.jsxs)(`div`,{className:`rounded-lg bg-violet-50 p-4 text-center`,children:[(0,E.jsx)(`div`,{className:`text-2xl font-semibold`,children:a.defeatedWords}),(0,E.jsx)(`div`,{className:`text-sm text-slate-500`,children:`击败小怪`})]}),(0,E.jsxs)(`div`,{className:`rounded-lg bg-violet-50 p-4 text-center`,children:[(0,E.jsx)(`div`,{className:`text-2xl font-semibold`,children:a.defeatedBosses}),(0,E.jsx)(`div`,{className:`text-sm text-slate-500`,children:`击败 Boss`})]})]})]}),(0,E.jsx)(`section`,{className:`grid gap-4 lg:grid-cols-2`,children:t.map(e=>(0,E.jsx)(el,{unit:e,progressMap:n,stats:r,onChallenge:i},e.id))}),(0,E.jsx)(`section`,{className:`grid gap-4 lg:grid-cols-2`,children:o.map(e=>(0,E.jsx)(tl,{word:e,progressMap:n},e.id))})]})}function rl({words:e,progressMap:t,stats:n,onNavigateCheckIn:r,onNavigateRewards:i,onNavigateShop:a,onNavigateStatistics:o,onNavigateAchievements:s,onNavigateSettings:c,onNavigateAccount:l,syncStatus:u,onExport:d,onImport:f,onClearCache:p,onReset:m}){let h=oc(e,t),g=q(n);return(0,E.jsxs)(`div`,{className:`space-y-5`,children:[(0,E.jsx)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:(0,E.jsxs)(`div`,{className:`flex flex-wrap items-start justify-between gap-4`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Profile`}),(0,E.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`我的学习账户`}),(0,E.jsx)(`p`,{className:`mt-2 text-sm text-slate-500`,children:`进度、奖励、设置都在这里统一管理。`})]}),(0,E.jsxs)(`div`,{className:`flex flex-col items-start gap-2 sm:items-end`,children:[(0,E.jsx)(yc,{stats:n}),(0,E.jsx)(ps,{configured:u.configured,online:u.online,state:u.state,message:u.message,lastSyncAt:u.lastSyncAt,pendingCount:u.pendingCount})]})]})}),(0,E.jsx)(Ot,{compact:!0}),(0,E.jsxs)(`section`,{className:`grid gap-4 lg:grid-cols-[0.95fr_1.05fr]`,children:[(0,E.jsx)(bc,{stats:n}),(0,E.jsxs)(`div`,{className:`grid gap-4 sm:grid-cols-2`,children:[(0,E.jsx)(Cc,{label:`总学习时长`,value:bs(g.totalSeconds),icon:oe,tone:`current`}),(0,E.jsx)(Cc,{label:`连续打卡`,value:n.currentStreak,icon:ie,tone:`copper`}),(0,E.jsx)(Cc,{label:`已学词数`,value:h.learnedCount,icon:Ze,tone:`spruce`}),(0,E.jsx)(Cc,{label:`掌握词数`,value:h.masteredCount,icon:w,tone:`slate`})]})]}),(0,E.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,E.jsx)(`h2`,{className:`text-lg font-semibold text-ink`,children:`功能入口`}),(0,E.jsxs)(`div`,{className:`mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3`,children:[(0,E.jsxs)(`button`,{type:`button`,onClick:r,className:`mode-card`,children:[(0,E.jsx)(ie,{size:20,"aria-hidden":`true`}),(0,E.jsx)(`span`,{children:`打卡中心`})]}),(0,E.jsxs)(`button`,{type:`button`,onClick:i,className:`mode-card`,children:[(0,E.jsx)(Ce,{size:20,"aria-hidden":`true`}),(0,E.jsx)(`span`,{children:`奖励记录`})]}),(0,E.jsxs)(`button`,{type:`button`,onClick:a,className:`mode-card`,children:[(0,E.jsx)(We,{size:20,"aria-hidden":`true`}),(0,E.jsx)(`span`,{children:`兑换商店`})]}),(0,E.jsxs)(`button`,{type:`button`,onClick:o,className:`mode-card`,children:[(0,E.jsx)(oe,{size:20,"aria-hidden":`true`}),(0,E.jsx)(`span`,{children:`学习统计`})]}),(0,E.jsxs)(`button`,{type:`button`,onClick:s,className:`mode-card`,children:[(0,E.jsx)(w,{size:20,"aria-hidden":`true`}),(0,E.jsx)(`span`,{children:`成就徽章`})]}),(0,E.jsxs)(`button`,{type:`button`,onClick:c,className:`mode-card`,children:[(0,E.jsx)(He,{size:20,"aria-hidden":`true`}),(0,E.jsx)(`span`,{children:`设置`})]}),(0,E.jsxs)(`button`,{type:`button`,onClick:l,className:`mode-card`,children:[(0,E.jsx)(he,{size:20,"aria-hidden":`true`}),(0,E.jsx)(`span`,{children:`账号同步`})]})]})]}),(0,E.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,E.jsx)(`h2`,{className:`text-lg font-semibold text-ink`,children:`进度管理`}),(0,E.jsxs)(`div`,{className:`mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4`,children:[(0,E.jsxs)(`button`,{type:`button`,onClick:d,className:`btn-secondary`,children:[(0,E.jsx)(_e,{size:18,"aria-hidden":`true`}),`导出进度`]}),(0,E.jsxs)(`label`,{className:`btn-secondary cursor-pointer`,children:[(0,E.jsx)(Ze,{size:18,"aria-hidden":`true`}),`导入进度`,(0,E.jsx)(`input`,{type:`file`,accept:`application/json,.json`,className:`sr-only`,onChange:e=>{let t=e.target.files?.[0];t&&(t.text().then(f),e.target.value=``)}})]}),(0,E.jsxs)(`button`,{type:`button`,onClick:p,className:`btn-secondary`,children:[(0,E.jsx)(ze,{size:18,"aria-hidden":`true`}),`清理缓存`]}),(0,E.jsxs)(`button`,{type:`button`,onClick:m,className:`btn-danger`,children:[(0,E.jsx)(Ve,{size:18,"aria-hidden":`true`}),`清空进度`]})]})]})]})}var il=null,al=null,ol=new Set,sl=new Set,cl=new Map,ll={autoPlayOnStudy:!1,autoPlayOnRecall:!1,defaultAccent:`us`,speechRate:.9,repeatCount:1};function ul(e){return e.toLowerCase().replace(/[^a-z-]/g,``)}function dl(){if(!(`speechSynthesis`in window))return Promise.resolve([]);let e=window.speechSynthesis.getVoices();return e.length?Promise.resolve(e):al||(al=new Promise(e=>{let t=()=>{window.speechSynthesis.removeEventListener(`voiceschanged`,t),e(window.speechSynthesis.getVoices())};window.speechSynthesis.addEventListener(`voiceschanged`,t,{once:!0}),window.setTimeout(t,900)}),al)}function fl(e){return e===`us`?`en-US`:`en-GB`}function pl(e){return e.toLowerCase().replace(`_`,`-`)}function ml(e,t){let n=fl(t).toLowerCase(),r=pl(e.lang),i=e.name.toLowerCase(),a=0;if(r===n)a+=120;else if(r.startsWith(`${n}-`))a+=105;else if(r.startsWith(`en-`))a+=55;else return-1;e.default&&(a+=22),e.localService&&(a+=8);let o=(t===`us`?[`google us english`,`samantha`,`ava`,`allison`,`joelle`,`microsoft aria`,`microsoft jenny`,`zira`,`english united states`]:[`google uk english female`,`serena`,`daniel`,`martha`,`arthur`,`microsoft sonia`,`microsoft libby`,`microsoft ryan`,`english united kingdom`]).findIndex(e=>i.includes(e));return o>=0&&(a+=70-o*4),i.includes(`google`)&&(a+=26),i.includes(`microsoft`)&&(a+=20),i.includes(`apple`)&&(a+=12),/(natural|neural|premium|enhanced)/.test(i)&&(a+=30),/(female|woman)/.test(i)&&(a+=6),/(compact|novelty|whisper|bells|boing|bubbles|cellos|organ|trinoids|zarvox|bad news|good news|bahh|jester|superstar)/.test(i)&&(a-=90),a}function hl(e){return typeof window<`u`&&window.matchMedia?.(`(pointer: coarse)`).matches&&e===1?.92:e}function gl(){if(typeof window>`u`||typeof navigator>`u`)return!1;let e=window.matchMedia?.(`(pointer: coarse)`).matches,t=navigator.userAgent.toLowerCase(),n=/chrome|crios|edg|samsungbrowser/.test(t)&&!/firefox/.test(t);return!!(e&&n&&`speechSynthesis`in window)}function _l(e,t){let n=ul(e);if(!n)return[];let r=t===`us`?`us`:`gb`;return[`https://ssl.gstatic.com/dictionary/static/sounds/20200429/${n}--_${r}_1.mp3`,`https://ssl.gstatic.com/dictionary/static/sounds/oxford/${n}--_${r}_1.mp3`]}function vl(e){return e?e.startsWith(`//`)?`https:${e}`:e:``}function yl(e,t){let n=e.toLowerCase();return t===`us`?/[-_]us(?:[-_.]|$)|american|united-states/.test(n):/[-_](?:uk|gb)(?:[-_.]|$)|british|united-kingdom/.test(n)}function bl(e,t){let n=ul(e),r=`${t}:${n}`;if(!n)return Promise.resolve([]);let i=cl.get(r);if(i)return i;let a=Ct(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(n)}`).then(e=>{if(!e.ok||!Array.isArray(e.data))return[];let n=e.data.flatMap(e=>e.phonetics||[]).map(e=>vl(e.audio||``)).filter(Boolean),r=Array.from(new Set(n)),i=r.filter(e=>yl(e,t)),a=r.filter(e=>!yl(e,t));return[...i,...a]}).catch(()=>[]);return cl.set(r,a),a}function xl(e){return new Promise((t,n)=>{let r=new Audio(e);il=r,r.preload=`auto`,r.onended=()=>t(),r.onerror=()=>n(Error(`audio missing`)),r.play().catch(n)})}function Sl(){il&&=(il.pause(),il.currentTime=0,null),`speechSynthesis`in window&&window.speechSynthesis.cancel()}function Cl(e,t){let n=`/reword/audio/${t}/${ul(e)}.mp3`,r=`${t}:${ul(e)}`;return ol.has(r)?Promise.reject(Error(`local audio missing`)):xl(n).catch(e=>{throw ol.add(r),e})}async function wl(e,t){let n=[..._l(e,t),...await bl(e,t)];for(let e of n)if(!(!e||sl.has(e)))try{await xl(e);return}catch{sl.add(e)}throw Error(`dictionary audio missing`)}function Tl(e){if(!(`speechSynthesis`in window))return;let t=window.speechSynthesis.getVoices().map(t=>({voice:t,score:ml(t,e)})).filter(({score:e})=>e>0).sort((e,t)=>t.score-e.score);return t[0]?.score>=120?t[0].voice:void 0}async function El(e,t,n={}){return await dl(),new Promise((r,i)=>{if(!(`speechSynthesis`in window)){i(Error(`当前浏览器不支持朗读，请添加音频文件。`));return}let a={...ll,...n},o=fl(t),s=0,c=()=>{let n=new SpeechSynthesisUtterance(e);n.lang=o,n.rate=hl(a.speechRate),n.pitch=1,n.volume=1;let l=Tl(t);l&&(n.voice=l),n.onend=()=>{s+=1,s<a.repeatCount?c():r()},n.onerror=e=>{if(e.error===`interrupted`||e.error===`canceled`){r();return}i(Error(`当前浏览器朗读失败，请检查系统语音或浏览器权限。`))},window.speechSynthesis.speak(n)};c()})}async function Dl(e,t,n={}){if(Sl(),gl())try{await El(e.replace(/-/g,` `),t,n);return}catch{}try{await Cl(e,t);return}catch{}try{await wl(e,t)}catch{await El(e.replace(/-/g,` `),t,n)}}function Z({word:e,accent:t,settings:n,compact:r=!1}){let[i,a]=(0,y.useState)(!1);return(0,E.jsxs)(`button`,{type:`button`,onClick:async()=>{a(!0);try{await Dl(e,t,n)}catch(e){window.alert(e instanceof Error?e.message:`当前浏览器不支持朗读，请添加音频文件。`)}finally{a(!1)}},className:`inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white font-semibold text-harbor transition hover:border-harbor ${r?`h-8 px-2.5 text-xs`:`px-2.5 py-1.5 text-sm`}`,children:[(0,E.jsx)(et,{size:r?13:15,"aria-hidden":`true`}),t.toUpperCase(),i?`...`:``]})}function Ol({title:e,body:t,actionLabel:n,onAction:r}){return(0,E.jsxs)(`div`,{className:`rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center shadow-soft`,children:[(0,E.jsx)(`div`,{className:`mx-auto mb-4 grid h-12 w-12 place-items-center rounded-lg border border-harbor/15 bg-[#f8fbff] text-harbor`,children:(0,E.jsx)(Ee,{size:22,"aria-hidden":`true`})}),(0,E.jsx)(`h3`,{className:`font-semibold text-ink`,children:e}),t?(0,E.jsx)(`p`,{className:`mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500`,children:t}):null,n&&r?(0,E.jsx)(`button`,{type:`button`,onClick:r,className:`btn-primary mt-5`,children:n}):null]})}function kl({word:e,progress:t,compact:n=!1,mobileCompact:r=!1,audioSettings:i}){let a=!!(t?.learned||t?.firstLearnedAt),o=a?`border-emerald-200 bg-emerald-50 text-emerald-700`:`border-rose-200 bg-rose-50 text-rose-700`,s=a?`已学习`:`未学习`;return r?(0,E.jsxs)(`article`,{className:`overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft`,children:[(0,E.jsxs)(`div`,{className:`border-b border-slate-200 bg-[#f8fbff] p-3`,children:[(0,E.jsxs)(`div`,{className:`mb-2 flex items-center justify-between gap-2`,children:[(0,E.jsx)(`span`,{className:`truncate rounded-md border border-harbor/15 bg-white px-2 py-0.5 text-[11px] font-medium text-harbor`,children:e.unitName}),(0,E.jsxs)(`div`,{className:`flex shrink-0 items-center gap-1.5`,children:[(0,E.jsx)(`span`,{className:`rounded-md border px-1.5 py-0.5 text-[11px] font-semibold ${o}`,children:s}),(0,E.jsxs)(`span`,{className:`text-[11px] text-slate-500`,children:[`#`,e.order]})]})]}),(0,E.jsxs)(`div`,{className:`space-y-2`,children:[(0,E.jsx)(`h1`,{className:`break-words font-semibold leading-[1.06] text-ink ${e.word.length>18?`text-[27px]`:e.word.length>12?`text-[31px]`:`text-[36px]`}`,children:e.word}),(0,E.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,E.jsx)(`p`,{className:`min-w-0 break-words text-sm font-medium text-slate-500`,children:e.phonetic}),(0,E.jsxs)(`div`,{className:`flex shrink-0 gap-1.5`,children:[(0,E.jsx)(Z,{word:e.word,accent:`us`,settings:i,compact:!0}),(0,E.jsx)(Z,{word:e.word,accent:`uk`,settings:i,compact:!0})]})]})]})]}),(0,E.jsxs)(`div`,{className:`p-3`,children:[e.image?(0,E.jsx)(`div`,{className:`mb-2 grid h-20 place-items-center overflow-hidden rounded-lg border border-sky-100 bg-word-placeholder`,children:(0,E.jsx)(`img`,{src:e.image,alt:``,className:`h-full w-full object-contain`,loading:`lazy`})}):null,(0,E.jsx)(`div`,{className:`space-y-2`,children:e.definitions.map((t,n)=>(0,E.jsxs)(`div`,{className:`flex items-start gap-2.5 rounded-lg border border-sky-100 bg-[#f8fbff] p-2.5`,children:[(0,E.jsx)(`span`,{className:`shrink-0 rounded-md bg-white px-2.5 py-1 text-[13px] font-semibold text-harbor`,children:t.pos||`释义`}),(0,E.jsx)(`p`,{className:`min-w-0 break-words text-[16px] font-semibold leading-snug text-slate-950`,children:t.meaning})]},`${e.id}-compact-def-${n}`))}),(0,E.jsxs)(`div`,{className:`mt-2 flex flex-wrap gap-1.5 text-[11px] text-slate-600`,children:[(0,E.jsxs)(`span`,{className:`rounded-md border border-slate-200 bg-white px-2 py-1`,children:[`S`,t?.stage||0]}),(0,E.jsx)(`span`,{className:`rounded-md border px-2 py-1 font-semibold ${o}`,children:Pc(t)}),(0,E.jsx)(`span`,{className:`rounded-md border border-slate-200 bg-white px-2 py-1`,children:Nc(t?.nextReviewAt)})]})]})]}):(0,E.jsxs)(`article`,{className:`overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft`,children:[n?null:(0,E.jsxs)(`div`,{className:`border-b border-slate-200 bg-[#f8fbff] p-5 md:p-6`,children:[(0,E.jsxs)(`div`,{className:`mb-5 flex items-center justify-between gap-3`,children:[(0,E.jsx)(`span`,{className:`rounded-md border border-harbor/15 bg-white px-2.5 py-1 text-xs font-medium text-harbor`,children:e.unitName}),(0,E.jsxs)(`div`,{className:`flex shrink-0 items-center gap-2`,children:[(0,E.jsx)(`span`,{className:`rounded-md border px-2.5 py-1 text-xs font-semibold ${o}`,children:s}),(0,E.jsxs)(`span`,{className:`text-xs text-slate-500`,children:[`#`,e.order]})]})]}),(0,E.jsxs)(`div`,{className:`flex flex-wrap items-end justify-between gap-4`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`h1`,{className:`break-words text-5xl font-semibold leading-tight text-ink md:text-6xl`,children:e.word}),(0,E.jsx)(`p`,{className:`mt-3 text-xl font-medium text-slate-600 md:text-2xl`,children:e.phonetic})]}),(0,E.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,E.jsx)(Z,{word:e.word,accent:`us`,settings:i}),(0,E.jsx)(Z,{word:e.word,accent:`uk`,settings:i})]})]})]}),(0,E.jsxs)(`div`,{className:n?`p-4`:`p-5 md:p-6`,children:[n?(0,E.jsxs)(`div`,{className:`mb-3 flex items-start justify-between gap-3`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`h3`,{className:`break-words text-2xl font-semibold text-ink`,children:e.word}),(0,E.jsx)(`p`,{className:`text-base font-medium text-slate-600`,children:e.phonetic}),(0,E.jsxs)(`div`,{className:`mt-2 flex gap-2`,children:[(0,E.jsx)(Z,{word:e.word,accent:`us`,settings:i}),(0,E.jsx)(Z,{word:e.word,accent:`uk`,settings:i})]})]}),(0,E.jsxs)(`div`,{className:`flex shrink-0 flex-col items-end gap-1`,children:[(0,E.jsx)(`span`,{className:`rounded-md border px-2.5 py-1 text-xs font-semibold ${o}`,children:s}),(0,E.jsxs)(`span`,{className:`rounded-md border border-harbor/15 bg-[#f8fbff] px-2.5 py-1 text-xs text-harbor`,children:[`#`,e.order]})]})]}):null,(0,E.jsx)(`div`,{className:`space-y-3`,children:e.definitions.map((t,n)=>(0,E.jsxs)(`div`,{className:`flex gap-3 rounded-lg border border-slate-200 bg-[#f8fbff] p-4`,children:[(0,E.jsx)(`span`,{className:`shrink-0 rounded-md border border-harbor/15 bg-white px-3 py-1.5 text-base font-semibold text-harbor`,children:t.pos||`释义`}),(0,E.jsx)(`p`,{className:`min-w-0 text-xl font-semibold leading-9 text-slate-950 md:text-2xl md:leading-10`,children:t.meaning})]},`${e.id}-def-${n}`))}),(0,E.jsxs)(`div`,{className:`mt-4 grid gap-3 text-sm sm:grid-cols-3`,children:[(0,E.jsxs)(`div`,{className:`flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-600`,children:[(0,E.jsx)(Oe,{size:16,"aria-hidden":`true`}),`Stage `,t?.stage||0]}),(0,E.jsxs)(`div`,{className:`flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-600`,children:[(0,E.jsx)(fe,{size:16,"aria-hidden":`true`}),Nc(t?.nextReviewAt)]}),(0,E.jsxs)(`div`,{className:`flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-600`,children:[(0,E.jsx)(ce,{size:16,"aria-hidden":`true`}),Pc(t)]})]})]})]})}function Al(e){if(!(e instanceof HTMLElement))return!1;let t=e.tagName.toLowerCase();return t===`input`||t===`textarea`||t===`select`||e.isContentEditable}function jl(e,t=!0){let{isDesktop:n}=gt();(0,y.useEffect)(()=>{if(!t||!n)return;let r=t=>{if(Al(t.target))return;let n=(e,n=!0)=>{e&&(n&&t.preventDefault(),e())};t.code===`Space`?n(e.onSpace):t.key===`ArrowRight`?n(e.onArrowRight):t.key===`ArrowLeft`?n(e.onArrowLeft):t.key===`1`?n(e.onOne):t.key===`2`?n(e.onTwo):t.key===`3`?n(e.onThree):t.key===`Enter`?n(e.onEnter):t.key===`Escape`&&n(e.onEscape,!1)};return window.addEventListener(`keydown`,r),()=>window.removeEventListener(`keydown`,r)},[t,e,n])}function Ml(e){return e.definitions.map(e=>`${e.pos} ${e.meaning}`.trim()).join(`；`)}function Nl(e){return[...e].sort(()=>Math.random()-.5)}function Pl(e,t=e){return e.map(e=>{let n=Ml(e),r=Nl(t.filter(t=>t.id!==e.id)).map(Ml).filter(e=>e&&e!==n).slice(0,3);return{id:`quiz-${e.id}-${Date.now()}`,word:e,answer:n,options:Nl([n,...r])}})}function Fl({title:e,words:t,allWords:n,progressMap:r,audioSettings:i,onAnswer:a}){let[o,s]=(0,y.useState)(0),[c,l]=(0,y.useState)(t),[u,d]=(0,y.useState)(0),[f,p]=(0,y.useState)(),[m,h]=(0,y.useState)({correct:0,wrong:0}),[g,_]=(0,y.useState)([]),v=(0,y.useMemo)(()=>Pl(c,n),[c,n,o]),b=v[u],x=u>=v.length,S=!!f,C=f===b?.answer,w=m.correct+m.wrong,ee=w?Math.round(m.correct/w*100):0,{isMobile:te}=gt();(0,y.useEffect)(()=>{l(t),d(0),p(void 0),h({correct:0,wrong:0}),_([])},[t]);let ne=(e=t)=>{l([...e]),s(e=>e+1),d(0),p(void 0),h({correct:0,wrong:0}),_([])},re=e=>{if(!b||S)return;let t=e===b.answer;p(e),h(e=>({correct:e.correct+ +!!t,wrong:e.wrong+ +!t})),t||_(e=>[...e,b.word]),a(b.word.id,t)},ie=()=>{S&&(p(void 0),d(e=>e+1))};return jl({onSpace:()=>b&&Dl(b.word.word,i.defaultAccent,i),onEnter:ie}),v.length?x?(0,E.jsxs)(`div`,{className:`space-y-5`,children:[(0,E.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-6 text-center shadow-soft`,children:[(0,E.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Result`}),(0,E.jsx)(`h1`,{className:`mt-2 text-3xl font-semibold text-ink`,children:`本次测试完成`}),(0,E.jsxs)(`div`,{className:`mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4`,children:[(0,E.jsx)(Il,{title:`总题数`,value:w}),(0,E.jsx)(Il,{title:`正确`,value:m.correct,tone:`text-emerald-600`}),(0,E.jsx)(Il,{title:`错误`,value:m.wrong,tone:`text-rose-600`}),(0,E.jsx)(Il,{title:`正确率`,value:`${ee}%`,tone:`text-indigo-600`})]}),(0,E.jsxs)(`div`,{className:`mt-6 flex flex-wrap justify-center gap-3`,children:[(0,E.jsxs)(`button`,{type:`button`,onClick:()=>ne(),className:`btn-secondary`,children:[(0,E.jsx)(Ve,{size:18,"aria-hidden":`true`}),`重新测试`]}),g.length?(0,E.jsxs)(`button`,{type:`button`,onClick:()=>ne(g),className:`btn-primary`,children:[(0,E.jsx)(Ve,{size:18,"aria-hidden":`true`}),`重新测试错题`]}):null]})]}),g.length?(0,E.jsx)(`div`,{className:`grid gap-3 md:grid-cols-2`,children:g.map(e=>(0,E.jsx)(kl,{word:e,progress:r[e.id],compact:!0,audioSettings:i},e.id))}):null]}):te?(0,E.jsxs)(`div`,{className:`min-h-[calc(100dvh-136px)] space-y-2 pb-20`,children:[(0,E.jsxs)(`div`,{className:`flex h-8 items-center justify-between gap-3`,children:[(0,E.jsxs)(`div`,{className:`min-w-0`,children:[(0,E.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Quiz`}),(0,E.jsx)(`h1`,{className:`truncate text-base font-semibold text-ink`,children:e})]}),(0,E.jsxs)(`div`,{className:`shrink-0 text-right text-xs text-slate-500`,children:[u+1,`/`,v.length,` · `,ee,`%`]})]}),(0,E.jsx)(`div`,{className:`h-1.5 overflow-hidden rounded-full bg-slate-200`,children:(0,E.jsx)(`div`,{className:`h-full rounded-full bg-harbor`,style:{width:`${Math.min(100,(u+1)/v.length*100)}%`}})}),(0,E.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-3 shadow-soft`,children:[(0,E.jsxs)(`div`,{className:`pb-3 pt-2 text-center`,children:[(0,E.jsx)(`div`,{className:`break-words font-semibold leading-tight text-ink ${b.word.word.length>12?`text-2xl`:`text-[32px]`}`,children:b.word.word}),(0,E.jsx)(`div`,{className:`mt-1 text-xs text-slate-500`,children:b.word.phonetic}),(0,E.jsxs)(`div`,{className:`mt-2 flex justify-center gap-2`,children:[(0,E.jsx)(Z,{word:b.word.word,accent:`us`,settings:i,compact:!0}),(0,E.jsx)(Z,{word:b.word.word,accent:`uk`,settings:i,compact:!0})]})]}),(0,E.jsx)(`div`,{className:`grid gap-2`,children:b.options.map(e=>{let t=e===b.answer,n=f===e;return(0,E.jsxs)(`button`,{type:`button`,"data-sound":`none`,onClick:()=>re(e),className:`flex min-h-12 items-center justify-between gap-2 rounded-lg border px-3 py-2 text-left text-[13px] font-semibold leading-snug transition ${S&&t?`border-emerald-500 bg-emerald-50 text-emerald-700`:S&&n?`border-rose-500 bg-rose-50 text-rose-700`:`border-slate-200 bg-[#f8fbff] text-slate-900 active:border-indigo-400`}`,children:[(0,E.jsx)(`span`,{className:`mobile-option-clamp min-w-0`,children:e}),S&&t?(0,E.jsx)(ce,{size:17,"aria-hidden":`true`}):null,S&&n&&!t?(0,E.jsx)(ue,{size:17,"aria-hidden":`true`}):null]},e)})}),S?(0,E.jsx)(`div`,{className:`mt-2 rounded-lg px-3 py-2 text-[13px] font-semibold leading-snug ${C?`bg-emerald-50 text-emerald-700`:`bg-rose-50 text-rose-700`}`,children:C?`回答正确，阶段会向前推进。`:`回答错误：${b.answer}`}):null,(0,E.jsx)(`button`,{type:`button`,onClick:ie,disabled:!S,className:`btn-primary mt-2 h-11 min-h-0 w-full disabled:opacity-40`,children:`下一题`})]})]}):(0,E.jsxs)(`div`,{className:`space-y-5`,children:[(0,E.jsxs)(`div`,{className:`flex flex-wrap items-end justify-between gap-4`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Quiz`}),(0,E.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:e})]}),(0,E.jsxs)(`div`,{className:`text-sm text-slate-500`,children:[u+1,` / `,v.length]})]}),(0,E.jsxs)(`div`,{className:`grid gap-5 lg:grid-cols-[minmax(0,1fr)_280px]`,children:[(0,E.jsxs)(`section`,{className:`min-w-0 space-y-5`,children:[(0,E.jsx)(K,{value:u+1,max:v.length,label:`测试进度`}),(0,E.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,E.jsxs)(`div`,{className:`py-8 text-center`,children:[(0,E.jsx)(`div`,{className:`break-words text-5xl font-semibold text-ink`,children:b.word.word}),(0,E.jsx)(`div`,{className:`mt-3 text-xl text-slate-500`,children:b.word.phonetic}),(0,E.jsxs)(`div`,{className:`mt-4 flex justify-center gap-2`,children:[(0,E.jsx)(Z,{word:b.word.word,accent:`us`,settings:i}),(0,E.jsx)(Z,{word:b.word.word,accent:`uk`,settings:i})]})]}),(0,E.jsx)(`div`,{className:`grid gap-3 md:grid-cols-2 xl:grid-cols-4`,children:b.options.map(e=>{let t=e===b.answer,n=f===e;return(0,E.jsxs)(`button`,{type:`button`,"data-sound":`none`,onClick:()=>re(e),className:`quiz-option ${S&&t?`border-emerald-500 bg-emerald-50 text-emerald-700`:S&&n?`border-rose-500 bg-rose-50 text-rose-700`:`border-slate-200 bg-[#f8fbff] text-slate-900 hover:border-indigo-400`}`,children:[(0,E.jsx)(`span`,{children:e}),S&&t?(0,E.jsx)(ce,{size:18,"aria-hidden":`true`}):null,S&&n&&!t?(0,E.jsx)(ue,{size:18,"aria-hidden":`true`}):null]},e)})}),S?(0,E.jsxs)(`div`,{className:`mt-4 rounded-lg p-4 text-sm ${C?`bg-emerald-50 text-emerald-700`:`bg-rose-50 text-rose-700`}`,children:[C?`回答正确，阶段会向前推进。`:`回答错误，正确答案是：${b.answer}`,(0,E.jsxs)(`div`,{className:`mt-3 flex gap-2`,children:[(0,E.jsx)(Z,{word:b.word.word,accent:`us`,settings:i}),(0,E.jsx)(Z,{word:b.word.word,accent:`uk`,settings:i})]})]}):null,(0,E.jsx)(`div`,{className:`mt-5 flex justify-end`,children:(0,E.jsx)(`button`,{type:`button`,onClick:ie,disabled:!S,className:`btn-primary disabled:opacity-40`,children:`下一题`})})]})]}),(0,E.jsxs)(`aside`,{className:`hidden space-y-4 lg:block`,children:[(0,E.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-soft`,children:[(0,E.jsx)(`h2`,{className:`font-semibold text-ink`,children:`测试面板`}),(0,E.jsxs)(`div`,{className:`mt-4 grid gap-3 text-sm`,children:[(0,E.jsx)(Il,{title:`正确率`,value:`${ee}%`,tone:`text-indigo-600`}),(0,E.jsx)(Il,{title:`正确`,value:m.correct,tone:`text-emerald-600`}),(0,E.jsx)(Il,{title:`错题`,value:m.wrong,tone:`text-rose-600`})]})]}),(0,E.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-4 text-sm shadow-soft`,children:[(0,E.jsx)(`h2`,{className:`font-semibold text-ink`,children:`快捷键`}),(0,E.jsxs)(`div`,{className:`mt-3 grid gap-2 text-slate-500`,children:[(0,E.jsx)(`span`,{children:`Enter 下一题`}),(0,E.jsx)(`span`,{children:`Space 可播放当前词`})]})]})]})]})]}):(0,E.jsx)(Ol,{title:`当前范围没有可测试的单词`,body:`先导入或选择一个包含单词的单元。`})}function Il({title:e,value:t,tone:n=`text-ink`}){return(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-[#f8fbff] p-4`,children:[(0,E.jsx)(`div`,{className:`text-2xl font-semibold ${n}`,children:t}),(0,E.jsx)(`div`,{className:`text-sm text-slate-500`,children:e})]})}function Ll({open:e,onClose:t,word:n,phonetic:r,definitions:i,bottomOffset:a=`calc(128px + env(safe-area-inset-bottom))`}){return e?(0,E.jsxs)(`div`,{className:`fixed inset-x-3 z-50 rounded-lg border border-slate-200 bg-white p-3 shadow-lifted md:hidden`,style:{bottom:a,maxHeight:`42dvh`},role:`dialog`,"aria-modal":`false`,"aria-label":`${n} 完整释义`,children:[(0,E.jsxs)(`div`,{className:`mb-2 flex items-start justify-between gap-3`,children:[(0,E.jsxs)(`div`,{className:`min-w-0`,children:[(0,E.jsx)(`div`,{className:`truncate text-lg font-semibold leading-tight text-ink`,children:n}),r?(0,E.jsx)(`div`,{className:`text-xs text-slate-500`,children:r}):null]}),(0,E.jsx)(`button`,{type:`button`,onClick:t,className:`icon-btn h-8 w-8`,"aria-label":`关闭释义`,children:(0,E.jsx)(rt,{size:15,"aria-hidden":`true`})})]}),(0,E.jsx)(`div`,{className:`max-h-[calc(42dvh-64px)] space-y-2 overflow-y-auto pr-1`,children:i.map((e,t)=>(0,E.jsxs)(`div`,{className:`flex gap-2 rounded-lg border border-sky-100 bg-[#f8fbff] p-2`,children:[(0,E.jsx)(`span`,{className:`shrink-0 rounded-md bg-white px-2 py-1 text-[12px] font-semibold text-harbor`,children:e.pos||`释义`}),(0,E.jsx)(`p`,{className:`min-w-0 text-[13px] font-semibold leading-snug text-slate-950`,children:e.meaning})]},`${n}-sheet-${t}`))})]}):null}function Rl({value:e,items:t,onChange:n}){return(0,E.jsx)(`div`,{className:`inline-grid grid-flow-col rounded-lg border border-slate-200 bg-[#f8fbff] p-1`,children:t.map(t=>(0,E.jsx)(`button`,{type:`button`,onClick:()=>n(t.value),className:`rounded-md px-3 py-2 text-sm transition ${e===t.value?`bg-white text-ink shadow-sm`:`text-slate-500 hover:text-ink`}`,children:t.label},t.value))})}function zl({title:e,words:t,progressMap:n,audioSettings:r,initialDueOnly:i=!1,onGrade:a,onBackToStudy:o}){let[s,c]=(0,y.useState)(i?`due`:`all`),[l,u]=(0,y.useState)(0),[d,f]=(0,y.useState)(!1),p=(0,y.useMemo)(()=>s===`due`?ec(t,n):t,[s,t,n]),m=p[Math.min(l,Math.max(0,p.length-1))],h=m?n[m.id]:void 0,g=Math.max(0,l-10),_=p.slice(g,Math.min(p.length,g+24)),{isMobile:v}=gt();(0,y.useEffect)(()=>{!m||!r.autoPlayOnRecall||Dl(m.word,r.defaultAccent,r).catch(()=>void 0)},[m,r]);let b=e=>{m&&(a(m.id,e),f(!1),u(e=>{let t=s===`due`?e:e+1;return Math.min(t,Math.max(0,p.length-1))}))};return jl({onSpace:()=>m&&Dl(m.word,r.defaultAccent,r),onOne:()=>b(`known`),onTwo:()=>b(`fuzzy`),onThree:()=>b(`forgotten`),onEnter:()=>f(e=>!e)}),p.length?v?(0,E.jsxs)(`div`,{className:`min-h-[calc(100dvh-136px)] space-y-3 pb-28`,children:[(0,E.jsxs)(`div`,{className:`flex items-start justify-between gap-3`,children:[(0,E.jsxs)(`div`,{className:`min-w-0`,children:[(0,E.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Recall`}),(0,E.jsx)(`h1`,{className:`truncate text-lg font-semibold text-ink`,children:e})]}),(0,E.jsxs)(`div`,{className:`shrink-0 text-right text-xs text-slate-500`,children:[Math.min(l+1,p.length),` / `,p.length]})]}),(0,E.jsx)(Rl,{value:s,items:[{value:`due`,label:`到期词`},{value:`all`,label:`全部词`}],onChange:e=>{c(e),u(0),f(!1)}}),(0,E.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-soft`,children:[(0,E.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500`,children:[(0,E.jsxs)(`span`,{children:[`S`,h?.stage||0,` · `,Pc(h)]}),(0,E.jsx)(`span`,{children:Nc(h?.nextReviewAt)})]}),(0,E.jsxs)(`div`,{className:`py-7 text-center`,children:[(0,E.jsx)(`div`,{className:`break-words font-semibold leading-tight text-ink ${m.word.length>12?`text-3xl`:`text-[34px]`}`,children:m.word}),(0,E.jsx)(`div`,{className:`mt-2 text-sm text-slate-500`,children:m.phonetic}),(0,E.jsxs)(`div`,{className:`mt-3 flex justify-center gap-2`,children:[(0,E.jsx)(Z,{word:m.word,accent:`us`,settings:r,compact:!0}),(0,E.jsx)(Z,{word:m.word,accent:`uk`,settings:r,compact:!0})]})]}),(0,E.jsxs)(`button`,{type:`button`,onClick:()=>f(!0),className:`btn-secondary h-11 min-h-0 w-full`,children:[(0,E.jsx)(ye,{size:17,"aria-hidden":`true`}),`查看释义`]})]}),(0,E.jsx)(Ll,{open:d,onClose:()=>f(!1),word:m.word,phonetic:m.phonetic,definitions:m.definitions,bottomOffset:`calc(132px + env(safe-area-inset-bottom))`}),(0,E.jsxs)(`div`,{className:`fixed inset-x-3 z-40 grid grid-cols-3 gap-2`,style:{bottom:`calc(72px + env(safe-area-inset-bottom))`},children:[(0,E.jsxs)(`button`,{type:`button`,"data-sound":`none`,onClick:()=>b(`known`),className:`inline-flex h-11 items-center justify-center gap-1 rounded-lg bg-emerald-600 px-2 text-xs font-semibold text-white shadow-sm active:translate-y-px`,children:[(0,E.jsx)(Ye,{size:15,"aria-hidden":`true`}),`记住`]}),(0,E.jsxs)(`button`,{type:`button`,"data-sound":`none`,onClick:()=>b(`fuzzy`),className:`inline-flex h-11 items-center justify-center gap-1 rounded-lg border border-amber-300 bg-amber-50 px-2 text-xs font-semibold text-amber-700 shadow-sm active:translate-y-px`,children:[(0,E.jsx)(Ve,{size:15,"aria-hidden":`true`}),`不太熟`]}),(0,E.jsxs)(`button`,{type:`button`,"data-sound":`none`,onClick:()=>b(`forgotten`),className:`inline-flex h-11 items-center justify-center gap-1 rounded-lg border border-rose-300 bg-rose-50 px-2 text-xs font-semibold text-rose-700 shadow-sm active:translate-y-px`,children:[(0,E.jsx)(Je,{size:15,"aria-hidden":`true`}),`不记住`]})]})]}):(0,E.jsxs)(`div`,{className:`space-y-5`,children:[(0,E.jsxs)(`div`,{className:`flex flex-wrap items-end justify-between gap-4`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Recall`}),(0,E.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:e})]}),(0,E.jsx)(Rl,{value:s,items:[{value:`due`,label:`到期词`},{value:`all`,label:`全部词`}],onChange:e=>{c(e),u(0),f(!1)}})]}),(0,E.jsxs)(`div`,{className:`grid gap-5 md:grid-cols-[250px_1fr] lg:grid-cols-[250px_minmax(0,1fr)_280px]`,children:[(0,E.jsxs)(`aside`,{className:`hidden rounded-lg border border-slate-200 bg-white p-3 shadow-soft md:block`,children:[(0,E.jsxs)(`div`,{className:`mb-3 flex items-center justify-between px-1 text-sm`,children:[(0,E.jsx)(`span`,{className:`font-semibold text-ink`,children:`复习队列`}),(0,E.jsx)(`span`,{className:`text-slate-500`,children:p.length})]}),(0,E.jsx)(`div`,{className:`max-h-[68vh] space-y-1 overflow-y-auto pr-1`,children:_.map((e,t)=>{let r=g+t;return(0,E.jsxs)(`button`,{type:`button`,onClick:()=>{u(r),f(!1)},className:`flex min-h-11 w-full items-center justify-between gap-3 rounded-lg px-3 text-left text-sm transition ${r===l?`bg-indigo-50 text-indigo-700`:`text-slate-600 hover:bg-[#f8fbff] hover:text-ink`}`,children:[(0,E.jsx)(`span`,{className:`min-w-0 truncate font-semibold`,children:e.word}),(0,E.jsxs)(`span`,{className:`shrink-0 text-xs`,children:[`S`,n[e.id]?.stage||0]})]},e.id)})})]}),(0,E.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,E.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500`,children:[(0,E.jsxs)(`span`,{children:[Math.min(l+1,p.length),` / `,p.length]}),(0,E.jsxs)(`span`,{children:[Qs(h)?`已到期`:`未到期`,`，Stage `,h?.stage||0,`，下次 `,Nc(h?.nextReviewAt)]})]}),(0,E.jsxs)(`div`,{className:`py-10 text-center`,children:[(0,E.jsx)(`div`,{className:`break-words text-5xl font-semibold text-ink`,children:m.word}),(0,E.jsx)(`div`,{className:`mt-3 text-xl text-slate-500`,children:m.phonetic}),(0,E.jsxs)(`div`,{className:`mt-4 flex justify-center gap-2`,children:[(0,E.jsx)(Z,{word:m.word,accent:`us`,settings:r}),(0,E.jsx)(Z,{word:m.word,accent:`uk`,settings:r})]})]}),d?(0,E.jsx)(kl,{word:m,progress:h,compact:!0,audioSettings:r}):null,(0,E.jsxs)(`div`,{className:`mt-5 grid gap-3 sm:grid-cols-4`,children:[(0,E.jsxs)(`button`,{type:`button`,onClick:()=>f(e=>!e),className:`btn-secondary`,children:[(0,E.jsx)(ye,{size:18,"aria-hidden":`true`}),`查看释义`]}),(0,E.jsxs)(`button`,{type:`button`,"data-sound":`none`,onClick:()=>b(`known`),className:`btn-primary`,children:[(0,E.jsx)(Ye,{size:18,"aria-hidden":`true`}),`记住`]}),(0,E.jsxs)(`button`,{type:`button`,"data-sound":`none`,onClick:()=>b(`fuzzy`),className:`btn-secondary`,children:[(0,E.jsx)(Ve,{size:18,"aria-hidden":`true`}),`不太熟`]}),(0,E.jsxs)(`button`,{type:`button`,"data-sound":`none`,onClick:()=>b(`forgotten`),className:`btn-danger`,children:[(0,E.jsx)(Je,{size:18,"aria-hidden":`true`}),`不记住`]})]})]}),(0,E.jsxs)(`aside`,{className:`hidden space-y-4 lg:block`,children:[(0,E.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-soft`,children:[(0,E.jsx)(`h2`,{className:`font-semibold text-ink`,children:`复习反馈`}),(0,E.jsxs)(`div`,{className:`mt-4 space-y-3 text-sm`,children:[(0,E.jsxs)(`div`,{className:`rounded-lg bg-[#f8fbff] p-3`,children:[(0,E.jsx)(`span`,{className:`block text-slate-500`,children:`当前状态`}),(0,E.jsx)(`span`,{className:`mt-1 block font-semibold text-ink`,children:Pc(h)})]}),(0,E.jsxs)(`div`,{className:`rounded-lg bg-[#f8fbff] p-3`,children:[(0,E.jsx)(`span`,{className:`block text-slate-500`,children:`打怪伤害`}),(0,E.jsx)(`span`,{className:`mt-1 block font-semibold text-indigo-600`,children:`记住 +3，不熟 +1`})]})]})]}),(0,E.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-4 text-sm shadow-soft`,children:[(0,E.jsx)(`h2`,{className:`font-semibold text-ink`,children:`快捷键`}),(0,E.jsxs)(`div`,{className:`mt-3 grid gap-2 text-slate-500`,children:[(0,E.jsx)(`span`,{children:`Space 播放发音`}),(0,E.jsx)(`span`,{children:`1 记住`}),(0,E.jsx)(`span`,{children:`2 不太熟`}),(0,E.jsx)(`span`,{children:`3 不记住`}),(0,E.jsx)(`span`,{children:`Enter 查看释义`})]})]})]})]})]}):(0,E.jsx)(Ol,{title:s===`due`?`当前没有到期词`:`当前范围没有词`,body:`可以切换到全部练习，或者先进入记忆模式完成初学。`,actionLabel:o?`去记忆模式`:void 0,onAction:o})}var Q=/^[\p{Script=Han}A-Za-z0-9_]{2,20}$/u;function Bl(e){let t=e.trim();return t?Q.test(t)?null:`用户名需为 2-20 位，只能包含中文、字母、数字或下划线。`:`请输入用户名。`}function Vl(e){let t=e.trim();return t?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)?null:`请输入正确的邮箱地址。`:`请输入邮箱。`}function Hl({loading:e=!1,disabled:t=!1,disabledReason:n,onSubmit:r}){let[i,a]=(0,y.useState)(``),[o,s]=(0,y.useState)(``),[c,l]=(0,y.useState)(``),[u,d]=(0,y.useState)(``),[f,p]=(0,y.useState)(null),m=e||t;return(0,E.jsxs)(`form`,{onSubmit:async e=>{if(e.preventDefault(),p(null),t){p(n||`当前暂不可用。`);return}let a=Bl(i);if(a){p(a);return}let s=Vl(o);if(s){p(s);return}if(c.length<6){p(`密码至少 6 位。`);return}if(c!==u){p(`两次输入的密码不一致。`);return}await r(i.trim(),o.trim(),c)},className:`space-y-4`,children:[(0,E.jsxs)(`label`,{className:`block`,children:[(0,E.jsx)(`span`,{className:`text-sm font-semibold text-slate-700`,children:`用户名`}),(0,E.jsx)(`input`,{type:`text`,value:i,onChange:e=>a(e.target.value),required:!0,minLength:2,maxLength:20,disabled:m,autoComplete:`username`,className:`mt-2 h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400`,placeholder:`例如 kaoyan2027`})]}),(0,E.jsxs)(`label`,{className:`block`,children:[(0,E.jsx)(`span`,{className:`text-sm font-semibold text-slate-700`,children:`邮箱`}),(0,E.jsx)(`input`,{type:`email`,value:o,onChange:e=>s(e.target.value),required:!0,disabled:m,autoComplete:`email`,className:`mt-2 h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400`,placeholder:`name@example.com`})]}),(0,E.jsxs)(`div`,{className:`grid gap-4 sm:grid-cols-2`,children:[(0,E.jsxs)(`label`,{className:`block`,children:[(0,E.jsx)(`span`,{className:`text-sm font-semibold text-slate-700`,children:`密码`}),(0,E.jsx)(`input`,{type:`password`,value:c,onChange:e=>l(e.target.value),required:!0,disabled:m,autoComplete:`new-password`,className:`mt-2 h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400`,placeholder:`至少 6 位`})]}),(0,E.jsxs)(`label`,{className:`block`,children:[(0,E.jsx)(`span`,{className:`text-sm font-semibold text-slate-700`,children:`确认密码`}),(0,E.jsx)(`input`,{type:`password`,value:u,onChange:e=>d(e.target.value),required:!0,disabled:m,autoComplete:`new-password`,className:`mt-2 h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400`,placeholder:`再次输入`})]})]}),f?(0,E.jsx)(`div`,{className:`rounded-lg border border-rose-100 bg-rose-50 px-3 py-2 text-sm text-rose-700`,children:f}):null,n?(0,E.jsx)(`div`,{className:`rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs leading-5 text-amber-800`,children:n}):null,(0,E.jsxs)(`button`,{type:`submit`,disabled:m,className:`btn-primary w-full disabled:opacity-50`,children:[(0,E.jsx)(Qe,{size:18,"aria-hidden":`true`}),`注册账号`]})]})}function Ul({configured:e,loading:t,error:n,onRegister:r,onSuccess:i,onLogin:a}){let[o,s]=(0,y.useState)(null),c=e?void 0:`当前线上包未读取到 Supabase 配置，请先配置 GitHub Secrets 并重新部署。你仍可使用游客模式背单词。`;return(0,E.jsx)(`div`,{className:`mx-auto max-w-xl`,children:(0,E.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,E.jsxs)(`div`,{className:`mb-5 flex items-center justify-between gap-3`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Register`}),(0,E.jsx)(`h1`,{className:`mt-1 text-2xl font-semibold text-ink`,children:`创建学习账号`})]}),(0,E.jsx)(`button`,{type:`button`,onClick:a,className:`icon-btn`,title:`返回登录`,children:(0,E.jsx)(S,{size:18,"aria-hidden":`true`})})]}),e?null:(0,E.jsx)(`div`,{className:`mb-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-800`,children:c}),n?(0,E.jsx)(`div`,{className:`mb-4 rounded-lg border border-rose-100 bg-rose-50 px-3 py-2 text-sm text-rose-700`,children:n}):null,o?(0,E.jsx)(`div`,{className:`mb-4 rounded-lg border border-emerald-100 bg-emerald-50 px-3 py-2 text-sm text-emerald-700`,children:o}):null,(0,E.jsx)(Hl,{loading:t,disabled:!e,disabledReason:c,onSubmit:async(t,n,a)=>{if(!e){s(c||`当前暂不可用。`);return}if((await r(t,n,a)).session){s(`注册成功，已登录。`),i();return}s(`注册成功，请先到邮箱完成验证，然后回到登录页登录。`)}}),(0,E.jsxs)(`button`,{type:`button`,onClick:a,className:`btn-secondary mt-4 w-full`,children:[(0,E.jsx)(Ne,{size:18,"aria-hidden":`true`}),`返回登录`]})]})})}function Wl({words:e,progressMap:t,audioSettings:n,onStartReview:r,onOpenUnits:i}){let a=ec(e,t);return(0,E.jsxs)(`div`,{className:`space-y-5`,children:[(0,E.jsx)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:(0,E.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-4`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Review`}),(0,E.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`复习中心`})]}),(0,E.jsxs)(`button`,{type:`button`,onClick:r,disabled:!a.length,className:`btn-primary disabled:opacity-40`,children:[(0,E.jsx)(re,{size:18,"aria-hidden":`true`}),`一键开始`]})]})}),a.length?(0,E.jsx)(`div`,{className:`grid gap-3 lg:grid-cols-2`,children:a.map(e=>(0,E.jsx)(kl,{word:e,progress:t[e.id],compact:!0,audioSettings:n},e.id))}):(0,E.jsx)(Ol,{title:`今天暂时没有到期复习`,body:`可以先从单元里加入今日学习，初学后的单词会自动进入复习周期。`,actionLabel:`去单元`,onAction:i})]})}function Gl({stats:e}){return(0,E.jsxs)(`div`,{className:`space-y-5`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Rewards`}),(0,E.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`奖励记录`})]}),(0,E.jsx)(`div`,{className:`space-y-3`,children:e.rewardHistory.length?e.rewardHistory.map(e=>(0,E.jsx)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-soft`,children:(0,E.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`font-semibold text-ink`,children:e.title}),(0,E.jsx)(`div`,{className:`mt-1 text-sm text-slate-500`,children:e.description})]}),(0,E.jsxs)(`div`,{className:`text-sm font-semibold text-harbor`,children:[`+`,e.xp,` XP / +`,e.coins,` 金币`]})]})},e.id)):(0,E.jsx)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-8 text-center text-slate-500`,children:`暂无奖励记录`})})]})}var Kl={enabled:!0,volume:.25},ql=null,Jl=0;function Yl(){if(typeof window>`u`)return null;let e=window.AudioContext||window.webkitAudioContext;return e?(ql||=new e,ql):null}function Xl(e){return{...Kl,...e}}function Zl(e){let t=Xl(e);if(!t.enabled||t.volume<=0)return!1;let n=performance.now();return n-Jl<80?!1:(Jl=n,t)}function Ql(e,t){let n=Zl(t);if(n)try{let t=Yl();if(!t)return;t.state===`suspended`&&t.resume().catch(()=>void 0);let r=t.currentTime,i=t.createGain();i.connect(t.destination),i.gain.setValueAtTime(1e-4,r);let a=n.volume*.16,o={click:[[420,.045]],toggle:[[520,.05],[660,.06]],success:[[520,.055],[720,.075]],error:[[260,.08],[190,.09]],reward:[[520,.06],[700,.07],[920,.09]]},s=r;o[e].forEach(([n,r],o)=>{let c=t.createOscillator();c.type=e===`error`?`triangle`:`sine`,c.frequency.setValueAtTime(n,s),c.connect(i),c.start(s),c.stop(s+r),o===0&&i.gain.exponentialRampToValueAtTime(a,s+.012),s+=r+.018}),i.gain.exponentialRampToValueAtTime(1e-4,s+.04),window.setTimeout(()=>i.disconnect(),Math.max(120,(s-r)*1e3+120))}catch{}}function $l(e,t){Ql(e,t)}function eu(e){Ql(`click`,e)}function tu(e){Ql(`success`,e)}function nu(e){Ql(`error`,e)}function ru(e){Ql(`reward`,e)}function iu(e){Ql(`toggle`,e)}var au=[{label:`0%`,value:0},{label:`25%`,value:.25},{label:`50%`,value:.5},{label:`75%`,value:.75},{label:`100%`,value:1}];function ou({stats:e,onUpdateAudio:t,onUpdateSound:n,syncStatus:r}){let i=e.audioSettings,a=e.soundSettings,o=e=>t({...i,...e}),s=e=>n({...a,...e});return(0,E.jsxs)(`div`,{className:`space-y-5`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Settings`}),(0,E.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`设置`})]}),(0,E.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,E.jsx)(`h2`,{className:`font-semibold text-ink`,children:`发音设置`}),(0,E.jsxs)(`div`,{className:`mt-4 grid gap-4 md:grid-cols-2`,children:[(0,E.jsxs)(`label`,{className:`flex items-center justify-between rounded-lg bg-[#f8fbff] p-3`,children:[(0,E.jsx)(`span`,{children:`记忆页自动播放`}),(0,E.jsx)(`input`,{type:`checkbox`,checked:i.autoPlayOnStudy,onChange:e=>o({autoPlayOnStudy:e.target.checked})})]}),(0,E.jsxs)(`label`,{className:`flex items-center justify-between rounded-lg bg-[#f8fbff] p-3`,children:[(0,E.jsx)(`span`,{children:`理解页自动播放`}),(0,E.jsx)(`input`,{type:`checkbox`,checked:i.autoPlayOnRecall,onChange:e=>o({autoPlayOnRecall:e.target.checked})})]}),(0,E.jsxs)(`label`,{className:`rounded-lg bg-[#f8fbff] p-3`,children:[(0,E.jsx)(`span`,{className:`mb-2 block`,children:`默认口音`}),(0,E.jsxs)(`select`,{value:i.defaultAccent,onChange:e=>o({defaultAccent:e.target.value}),className:`w-full rounded-md border border-slate-200 bg-white p-2`,children:[(0,E.jsx)(`option`,{value:`us`,children:`美式`}),(0,E.jsx)(`option`,{value:`uk`,children:`英式`})]})]}),(0,E.jsxs)(`label`,{className:`rounded-lg bg-[#f8fbff] p-3`,children:[(0,E.jsx)(`span`,{className:`mb-2 block`,children:`朗读速度`}),(0,E.jsxs)(`select`,{value:i.speechRate,onChange:e=>o({speechRate:Number(e.target.value)}),className:`w-full rounded-md border border-slate-200 bg-white p-2`,children:[(0,E.jsx)(`option`,{value:.8,children:`0.8`}),(0,E.jsx)(`option`,{value:.9,children:`0.9 推荐`}),(0,E.jsx)(`option`,{value:1,children:`1.0`}),(0,E.jsx)(`option`,{value:1.1,children:`1.1`})]})]}),(0,E.jsxs)(`label`,{className:`rounded-lg bg-[#f8fbff] p-3`,children:[(0,E.jsx)(`span`,{className:`mb-2 block`,children:`朗读次数`}),(0,E.jsxs)(`select`,{value:i.repeatCount,onChange:e=>o({repeatCount:Number(e.target.value)}),className:`w-full rounded-md border border-slate-200 bg-white p-2`,children:[(0,E.jsx)(`option`,{value:1,children:`1 次`}),(0,E.jsx)(`option`,{value:2,children:`2 次`})]})]})]})]}),(0,E.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,E.jsxs)(`div`,{className:`flex items-start justify-between gap-4`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsxs)(`div`,{className:`flex items-center gap-2 font-semibold text-ink`,children:[(0,E.jsx)(et,{size:18,"aria-hidden":`true`}),`按钮音效`]}),(0,E.jsx)(`p`,{className:`mt-2 text-sm leading-6 text-slate-500`,children:`点击、答对、答错、打卡和奖励会有轻提示音。`})]}),(0,E.jsxs)(`label`,{className:`inline-flex cursor-pointer items-center gap-2 rounded-lg border border-sky-100 bg-[#f8fbff] px-3 py-2 text-sm font-semibold text-harbor`,children:[(0,E.jsx)(`input`,{type:`checkbox`,checked:a.enabled,onChange:e=>s({enabled:e.target.checked})}),`开启`]})]}),(0,E.jsxs)(`div`,{className:`mt-4 grid gap-4 md:grid-cols-[1fr_auto]`,children:[(0,E.jsxs)(`label`,{className:`rounded-lg bg-[#f8fbff] p-3`,children:[(0,E.jsx)(`span`,{className:`mb-2 block text-sm font-semibold text-slate-700`,children:`音量`}),(0,E.jsx)(`select`,{value:a.volume,onChange:e=>s({volume:Number(e.target.value)}),className:`w-full rounded-md border border-slate-200 bg-white p-2`,children:au.map(e=>(0,E.jsx)(`option`,{value:e.value,children:e.label},e.label))})]}),(0,E.jsxs)(`button`,{type:`button`,"data-sound":`none`,onClick:()=>iu(a),className:`btn-secondary self-end`,children:[(0,E.jsx)(et,{size:18,"aria-hidden":`true`}),`试听`]})]})]}),(0,E.jsxs)(`div`,{className:`grid gap-5 lg:grid-cols-[1.05fr_0.95fr]`,children:[(0,E.jsx)(us,{online:r.online,loggedIn:r.isLoggedIn,syncState:r.state,syncMessage:r.message,lastSyncAt:r.lastSyncAt,pendingCount:r.pendingCount}),(0,E.jsx)(Ot,{})]})]})}var su=[{id:`theme-default`,name:`默认浅蓝主题`,description:`清爽的浅蓝学习桌面`,type:`theme`,priceCoins:0,icon:`蓝`,rarity:`common`},{id:`theme-dark`,name:`深色专注主题`,description:`适合夜间学习的深色主题`,type:`theme`,priceCoins:120,icon:`夜`,rarity:`rare`},{id:`theme-morning`,name:`晨读白色主题`,description:`适合早起背词的明亮主题`,type:`theme`,priceCoins:90,icon:`晨`,rarity:`common`},{id:`avatar-unit1`,name:`Unit1 完成头像框`,description:`Unit1 学习者头像框`,type:`avatar`,priceCoins:80,icon:`U1`,rarity:`common`},{id:`avatar-thirty-days`,name:`30 天坚持头像框`,description:`长期主义者的头像框`,type:`avatar`,priceCoins:220,priceDiamonds:1,icon:`30`,rarity:`epic`},{id:`tool-focus-card`,name:`专注卡`,description:`开启一次 25 分钟专注学习`,type:`tool`,priceCoins:30,icon:`专`,rarity:`common`},{id:`tool-review-boost`,name:`复习加速卡`,description:`把不熟词加入今日重点复习`,type:`tool`,priceCoins:45,icon:`复`,rarity:`rare`},{id:`tool-wrong-clean`,name:`错题清理卡`,description:`开启一次错题专项测试`,type:`tool`,priceCoins:50,icon:`错`,rarity:`rare`},{id:`tool-makeup`,name:`补签卡`,description:`预留功能，后续可用于补签`,type:`tool`,priceCoins:120,icon:`补`,rarity:`epic`},{id:`tool-double-monster`,name:`双倍积分卡`,description:`15 分钟内打怪积分翻倍`,type:`tool`,priceCoins:100,icon:`双`,rarity:`epic`},{id:`badge-seven-days`,name:`7 天坚持徽章`,description:`连续打卡 7 天纪念徽章`,type:`badge`,priceCoins:160,icon:`7`,rarity:`rare`}];function cu(e,t){return e.unlockedItems.includes(t.id)||e.inventory.some(e=>e.itemId===t.id)}function lu(e,t){let n=t.type===`tool`;if(!n&&e.unlockedItems.includes(t.id)||e.coins<t.priceCoins||e.diamonds<(t.priceDiamonds||0))return e;let r=n?e.unlockedItems:[...e.unlockedItems,t.id];return ks({...e,coins:e.coins-t.priceCoins,diamonds:e.diamonds-(t.priceDiamonds||0),unlockedItems:r},{type:`exchange`,title:`兑换 ${t.name}`,description:t.description,itemId:n?t.id:void 0,bypassDailyCap:!0})}function uu({item:e,stats:t,onExchange:n}){let r=cu(t,e),i=t.coins>=e.priceCoins&&t.diamonds>=(e.priceDiamonds||0);return(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-soft`,children:[(0,E.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,E.jsx)(`div`,{className:`grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#f8fbff] font-semibold text-harbor`,children:e.icon}),(0,E.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,E.jsx)(`div`,{className:`font-semibold text-ink`,children:e.name}),(0,E.jsx)(`div`,{className:`mt-1 text-sm leading-6 text-slate-500`,children:e.description}),(0,E.jsxs)(`div`,{className:`mt-2 text-xs text-slate-500`,children:[e.rarity,` / `,e.type]})]})]}),(0,E.jsx)(`button`,{type:`button`,onClick:()=>n(e),disabled:(!i||r)&&e.type!==`tool`,"data-sound":`none`,className:`btn-primary mt-4 w-full disabled:opacity-40`,children:r&&e.type!==`tool`?`已拥有`:`兑换 ${e.priceCoins} 金币${e.priceDiamonds?` + ${e.priceDiamonds} 钻石`:``}`})]})}function du({stats:e,onExchange:t}){return(0,E.jsxs)(`div`,{className:`space-y-5`,children:[(0,E.jsxs)(`div`,{className:`flex flex-wrap items-end justify-between gap-4`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Shop`}),(0,E.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`兑换商店`})]}),(0,E.jsx)(yc,{stats:e})]}),(0,E.jsx)(`div`,{className:`grid gap-4 md:grid-cols-2 lg:grid-cols-3`,children:su.map(n=>(0,E.jsx)(uu,{item:n,stats:e,onExchange:t},n.id))})]})}function fu({data:e,type:t=`bar`}){let n=Math.max(60,...e.map(e=>e.seconds));return(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-soft`,children:[(0,E.jsx)(`div`,{className:`mb-4 font-semibold text-ink`,children:t===`bar`?`最近 7 天学习时长`:`最近 30 天学习趋势`}),(0,E.jsx)(`div`,{className:`flex h-36 items-end gap-1`,children:e.map(e=>(0,E.jsxs)(`div`,{className:`flex flex-1 flex-col items-center gap-2`,children:[(0,E.jsx)(`div`,{className:`w-full rounded-t bg-harbor`,style:{height:`${Math.max(4,e.seconds/n*120)}px`},title:bs(e.seconds)}),(0,E.jsx)(`div`,{className:`text-[10px] text-slate-400`,children:e.date.slice(5)})]},e.date))})]})}function pu({stats:e,words:t,progressMap:n}){let r=q(e),i=Mc(t,n).slice(0,6);return(0,E.jsxs)(`div`,{className:`space-y-5`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Statistics`}),(0,E.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`学习统计`})]}),(0,E.jsxs)(`div`,{className:`grid gap-4 sm:grid-cols-2 lg:grid-cols-4`,children:[(0,E.jsx)(mu,{title:`今日`,value:bs(r.todaySeconds)}),(0,E.jsx)(mu,{title:`本周`,value:bs(r.weekSeconds)}),(0,E.jsx)(mu,{title:`本月`,value:bs(r.monthSeconds)}),(0,E.jsx)(mu,{title:`总学习`,value:bs(r.totalSeconds)})]}),(0,E.jsxs)(`div`,{className:`grid gap-4 lg:grid-cols-2`,children:[(0,E.jsx)(fu,{data:jc(e,7)}),(0,E.jsx)(fu,{data:jc(e,30),type:`line`})]}),(0,E.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,E.jsx)(`h2`,{className:`font-semibold text-ink`,children:`单元完成排行榜`}),(0,E.jsx)(`div`,{className:`mt-4 space-y-3`,children:i.map(e=>(0,E.jsxs)(`div`,{className:`flex items-center justify-between rounded-lg bg-[#f8fbff] p-3`,children:[(0,E.jsx)(`span`,{children:e.unitName}),(0,E.jsxs)(`span`,{className:`font-semibold text-harbor`,children:[e.percent,`%`]})]},e.unitName))})]})]})}function mu({title:e,value:t}){return(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-soft`,children:[(0,E.jsx)(`div`,{className:`text-sm text-slate-500`,children:e}),(0,E.jsx)(`div`,{className:`mt-2 text-2xl font-semibold text-ink`,children:t})]})}function hu({unit:e,words:t,progressMap:n,audioSettings:r,onLearn:i}){let[a,o]=(0,y.useState)(0),s=t[a],c=(0,y.useMemo)(()=>t.filter(e=>n[e.id]?.learned||n[e.id]?.firstLearnedAt).length,[t,n]),{isDesktop:l,isMobile:u}=gt(),d=s?n[s.id]:void 0,f=!!(d?.learned||d?.firstLearnedAt),p=f?`已学习`:`未学习`,m=Math.max(0,a-12),h=t.slice(m,Math.min(t.length,m+28));(0,y.useEffect)(()=>{!s||!r.autoPlayOnStudy||Dl(s.word,r.defaultAccent,r).catch(()=>void 0)},[s,r]);let g=e=>{o(n=>Math.min(t.length-1,Math.max(0,n+e)))},_=()=>{s&&i(s.id)};return jl({onSpace:()=>s&&Dl(s.word,r.defaultAccent,r),onArrowLeft:()=>g(-1),onArrowRight:()=>g(1),onEnter:_}),s?u?(0,E.jsxs)(`div`,{className:`min-h-[calc(100dvh-136px)] space-y-2 pb-24`,children:[(0,E.jsxs)(`div`,{className:`flex h-9 items-center justify-between gap-3`,children:[(0,E.jsxs)(`div`,{className:`min-w-0`,children:[(0,E.jsx)(`div`,{className:`truncate text-sm font-semibold text-ink`,children:e?.name||`总记忆`}),(0,E.jsxs)(`div`,{className:`text-[11px] text-slate-500`,children:[`已初学 `,c,` 词`]})]}),(0,E.jsxs)(`div`,{className:`shrink-0 rounded-md border border-sky-100 bg-white px-2 py-1 text-xs font-semibold text-harbor`,children:[a+1,`/`,t.length]})]}),(0,E.jsx)(`div`,{className:`h-1.5 overflow-hidden rounded-full bg-slate-200`,children:(0,E.jsx)(`div`,{className:`h-full rounded-full bg-harbor`,style:{width:`${Math.min(100,(a+1)/t.length*100)}%`}})}),(0,E.jsx)(kl,{word:s,progress:d,audioSettings:r,mobileCompact:!0}),(0,E.jsxs)(`div`,{className:`fixed inset-x-3 z-40 grid grid-cols-3 gap-2`,style:{bottom:`calc(72px + env(safe-area-inset-bottom))`},children:[(0,E.jsxs)(`button`,{type:`button`,onClick:()=>g(-1),disabled:a===0,className:`btn-secondary h-11 min-h-0 px-2 text-xs disabled:opacity-40`,children:[(0,E.jsx)(S,{size:16,"aria-hidden":`true`}),`上一个`]}),(0,E.jsxs)(`button`,{type:`button`,onClick:_,"data-sound":`none`,"aria-label":`标记当前单词已学`,className:`inline-flex h-11 min-h-0 items-center justify-center gap-1.5 rounded-lg border px-2 text-xs font-semibold shadow-sm transition active:translate-y-px ${f?`border-emerald-700 bg-emerald-600 text-white hover:bg-emerald-700`:`border-rose-700 bg-rose-600 text-white hover:bg-rose-700`}`,children:[f?(0,E.jsx)(se,{size:16,"aria-hidden":`true`}):(0,E.jsx)(Re,{size:16,"aria-hidden":`true`}),p]}),(0,E.jsxs)(`button`,{type:`button`,onClick:()=>g(1),disabled:a===t.length-1,className:`btn-secondary h-11 min-h-0 px-2 text-xs disabled:opacity-40`,children:[`下一个`,(0,E.jsx)(C,{size:16,"aria-hidden":`true`})]})]})]}):(0,E.jsxs)(`div`,{className:`space-y-5`,children:[(0,E.jsxs)(`div`,{className:`flex flex-wrap items-end justify-between gap-4`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Study`}),(0,E.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:e?.name||`总记忆功能`})]}),(0,E.jsxs)(`div`,{className:`text-sm text-slate-500`,children:[a+1,` / `,t.length]})]}),(0,E.jsx)(K,{value:a+1,max:t.length,label:`浏览进度，已初学 ${c} 词`}),(0,E.jsxs)(`div`,{className:`grid gap-5 md:grid-cols-[260px_1fr] lg:grid-cols-[260px_minmax(0,1fr)_280px]`,children:[(0,E.jsxs)(`aside`,{className:`hidden rounded-lg border border-slate-200 bg-white p-3 shadow-soft md:block`,children:[(0,E.jsxs)(`div`,{className:`mb-3 flex items-center justify-between gap-2 px-1 text-sm`,children:[(0,E.jsx)(`span`,{className:`font-semibold text-ink`,children:`单词目录`}),(0,E.jsxs)(`span`,{className:`text-slate-500`,children:[a+1,`/`,t.length]})]}),(0,E.jsx)(`div`,{className:`max-h-[68vh] space-y-1 overflow-y-auto pr-1`,children:h.map((e,t)=>{let r=m+t,i=r===a,s=!!(n[e.id]?.learned||n[e.id]?.firstLearnedAt);return(0,E.jsxs)(`button`,{type:`button`,onClick:()=>o(r),className:`flex min-h-11 w-full items-center justify-between gap-3 rounded-lg px-3 text-left text-sm transition ${i?`bg-indigo-50 text-indigo-700`:`text-slate-600 hover:bg-[#f8fbff] hover:text-ink`}`,children:[(0,E.jsx)(`span`,{className:`min-w-0 truncate font-semibold`,children:e.word}),(0,E.jsxs)(`span`,{className:`flex shrink-0 items-center gap-1.5 text-xs`,children:[(0,E.jsx)(`span`,{className:s?`rounded-md bg-emerald-50 px-1.5 py-0.5 font-semibold text-emerald-700`:`rounded-md bg-rose-50 px-1.5 py-0.5 font-semibold text-rose-700`,children:s?`已学习`:`未学习`}),(0,E.jsxs)(`span`,{children:[`#`,e.order]})]})]},e.id)})})]}),(0,E.jsx)(`section`,{className:`min-w-0`,children:(0,E.jsx)(kl,{word:s,progress:d,audioSettings:r})}),(0,E.jsxs)(`aside`,{className:`hidden space-y-4 lg:block`,children:[(0,E.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-soft`,children:[(0,E.jsx)(`h2`,{className:`font-semibold text-ink`,children:`当前记忆状态`}),(0,E.jsxs)(`div`,{className:`mt-4 space-y-3 text-sm`,children:[(0,E.jsxs)(`div`,{className:`flex justify-between rounded-lg bg-[#f8fbff] p-3`,children:[(0,E.jsx)(`span`,{className:`text-slate-500`,children:`Stage`}),(0,E.jsx)(`span`,{className:`font-semibold text-ink`,children:d?.stage||0})]}),(0,E.jsxs)(`div`,{className:`flex justify-between rounded-lg bg-[#f8fbff] p-3`,children:[(0,E.jsx)(`span`,{className:`text-slate-500`,children:`状态`}),(0,E.jsx)(`span`,{className:`font-semibold text-ink`,children:Pc(d)})]}),(0,E.jsxs)(`div`,{className:`rounded-lg bg-[#f8fbff] p-3`,children:[(0,E.jsx)(`span`,{className:`block text-slate-500`,children:`下次复习`}),(0,E.jsx)(`span`,{className:`mt-1 block font-semibold text-ink`,children:Nc(d?.nextReviewAt)})]})]})]}),l?(0,E.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-4 text-sm shadow-soft`,children:[(0,E.jsx)(`h2`,{className:`font-semibold text-ink`,children:`快捷键`}),(0,E.jsxs)(`div`,{className:`mt-3 grid gap-2 text-slate-500`,children:[(0,E.jsx)(`span`,{children:`Space 播放发音`}),(0,E.jsx)(`span`,{children:`← / → 切换单词`}),(0,E.jsx)(`span`,{children:`Enter 标记已学`})]})]}):null]})]}),(0,E.jsxs)(`div`,{className:`sticky bottom-20 z-20 grid gap-3 rounded-lg border border-slate-200 bg-[#f8fbff]/95 p-2 shadow-soft backdrop-blur sm:grid-cols-3 md:static md:border-0 md:bg-transparent md:p-0 md:shadow-none`,children:[(0,E.jsxs)(`button`,{type:`button`,onClick:()=>g(-1),disabled:a===0,className:`btn-secondary disabled:opacity-40`,children:[(0,E.jsx)(S,{size:18,"aria-hidden":`true`}),`上一个`]}),(0,E.jsxs)(`button`,{type:`button`,onClick:_,"data-sound":`none`,className:`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold shadow-sm transition active:translate-y-px ${f?`border border-emerald-700 bg-emerald-600 text-white hover:bg-emerald-700`:`border border-rose-700 bg-rose-600 text-white hover:bg-rose-700`}`,children:[f?(0,E.jsx)(se,{size:18,"aria-hidden":`true`}):(0,E.jsx)(Re,{size:18,"aria-hidden":`true`}),p]}),(0,E.jsxs)(`button`,{type:`button`,onClick:()=>g(1),disabled:a===t.length-1,className:`btn-secondary disabled:opacity-40`,children:[(0,E.jsx)(C,{size:18,"aria-hidden":`true`}),`下一个`]})]})]}):null}function gu({configured:e,online:t,user:n,state:r,message:i,lastSyncAt:a,pendingCount:o,onSync:s,onSkip:c,onLogin:l}){return(0,E.jsxs)(`div`,{className:`mx-auto max-w-3xl space-y-5`,children:[(0,E.jsx)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:(0,E.jsxs)(`div`,{className:`flex flex-wrap items-start justify-between gap-4`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Cloud Sync`}),(0,E.jsx)(`h1`,{className:`mt-1 text-2xl font-semibold text-ink`,children:`同步学习进度`}),(0,E.jsx)(`p`,{className:`mt-2 text-sm leading-6 text-slate-500`,children:`首次登录时请选择本地数据和云端数据的处理方式。之后学习动作会自动同步。`})]}),(0,E.jsx)(ps,{configured:e,online:t,state:r,message:i,lastSyncAt:a,pendingCount:o})]})}),!e||!n?(0,E.jsxs)(`section`,{className:`rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-800`,children:[e?`请先登录账号再同步。`:`云同步未配置，本地模式可用。配置 Supabase 后即可同步。`,(0,E.jsxs)(`div`,{className:`mt-4 flex flex-wrap gap-3`,children:[(0,E.jsx)(`button`,{type:`button`,onClick:l,className:`btn-primary`,children:`去登录`}),(0,E.jsx)(`button`,{type:`button`,onClick:c,className:`btn-secondary`,children:`返回首页`})]})]}):(0,E.jsxs)(`section`,{className:`grid gap-4 md:grid-cols-3`,children:[(0,E.jsxs)(`button`,{type:`button`,onClick:()=>s(`upload`),className:`rounded-lg border border-sky-100 bg-white p-5 text-left shadow-soft transition hover:border-indigo-200 hover:bg-indigo-50`,children:[(0,E.jsx)(me,{className:`text-harbor`,size:24,"aria-hidden":`true`}),(0,E.jsx)(`h2`,{className:`mt-4 text-lg font-semibold text-ink`,children:`上传本地`}),(0,E.jsx)(`p`,{className:`mt-2 text-sm leading-6 text-slate-500`,children:`把当前设备的学习进度保存到云端。适合第一次创建账号。`})]}),(0,E.jsxs)(`button`,{type:`button`,onClick:()=>s(`download`),className:`rounded-lg border border-sky-100 bg-white p-5 text-left shadow-soft transition hover:border-indigo-200 hover:bg-indigo-50`,children:[(0,E.jsx)(pe,{className:`text-harbor`,size:24,"aria-hidden":`true`}),(0,E.jsx)(`h2`,{className:`mt-4 text-lg font-semibold text-ink`,children:`下载云端`}),(0,E.jsx)(`p`,{className:`mt-2 text-sm leading-6 text-slate-500`,children:`用云端进度覆盖本地。适合换设备恢复。`})]}),(0,E.jsxs)(`button`,{type:`button`,onClick:()=>s(`merge`),className:`rounded-lg border border-sky-100 bg-white p-5 text-left shadow-soft transition hover:border-indigo-200 hover:bg-indigo-50`,children:[(0,E.jsx)(we,{className:`text-harbor`,size:24,"aria-hidden":`true`}),(0,E.jsx)(`h2`,{className:`mt-4 text-lg font-semibold text-ink`,children:`合并数据`}),(0,E.jsx)(`p`,{className:`mt-2 text-sm leading-6 text-slate-500`,children:`本地和云端都有数据时推荐使用。单词进度保留较新的记录。`})]})]}),(0,E.jsxs)(`button`,{type:`button`,onClick:c,className:`btn-secondary`,children:[(0,E.jsx)(rt,{size:18,"aria-hidden":`true`}),`稍后处理`]})]})}function _u({words:e,progressMap:t,audioSettings:n,onStudy:r,onRecall:i,onQuiz:a}){let[o,s]=(0,y.useState)(`all`),c=(0,y.useMemo)(()=>o===`unlearned`?e.filter(e=>!t[e.id]?.learned):o===`due`?ec(e,t):o===`weak`?nc(e,t):o===`wrong`?rc(e,t):o===`mastered`?tc(e,t):e,[o,e,t]);return(0,E.jsxs)(`div`,{className:`space-y-5`,children:[(0,E.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,E.jsxs)(`div`,{className:`flex flex-wrap items-end justify-between gap-4`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Library`}),(0,E.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`总词库`}),(0,E.jsxs)(`p`,{className:`mt-2 text-sm text-slate-500`,children:[`共 `,e.length,` 词`]})]}),(0,E.jsx)(Rl,{value:o,items:[{value:`all`,label:`全部`},{value:`unlearned`,label:`未学`},{value:`due`,label:`应复习`},{value:`weak`,label:`不熟`},{value:`wrong`,label:`错题`},{value:`mastered`,label:`掌握`}],onChange:s})]}),(0,E.jsxs)(`div`,{className:`mt-5 grid gap-3 sm:grid-cols-3`,children:[(0,E.jsxs)(`button`,{type:`button`,onClick:r,className:`mode-card`,children:[(0,E.jsx)(Ie,{size:20,"aria-hidden":`true`}),(0,E.jsx)(`span`,{children:`总记忆`})]}),(0,E.jsxs)(`button`,{type:`button`,onClick:i,className:`mode-card`,children:[(0,E.jsx)(re,{size:20,"aria-hidden":`true`}),(0,E.jsx)(`span`,{children:`总理解`})]}),(0,E.jsxs)(`button`,{type:`button`,onClick:a,className:`mode-card`,children:[(0,E.jsx)(de,{size:20,"aria-hidden":`true`}),(0,E.jsx)(`span`,{children:`总测试`})]})]})]}),(0,E.jsxs)(`div`,{className:`flex items-center gap-2 text-sm text-slate-500`,children:[(0,E.jsx)(je,{size:16,"aria-hidden":`true`}),`当前显示 `,c.length,` 词`]}),(0,E.jsx)(`div`,{className:`grid gap-3 lg:grid-cols-2`,children:c.map(e=>(0,E.jsx)(kl,{word:e,progress:t[e.id],compact:!0,audioSettings:n},e.id))})]})}function vu({unit:e,progressMap:t,onStudy:n,onRecall:r,onQuiz:i}){let a=Fc(e.words,t);return(0,E.jsxs)(`div`,{className:`space-y-5`,children:[(0,E.jsx)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:(0,E.jsxs)(`div`,{className:`grid gap-5 lg:grid-cols-[1fr_320px]`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`mb-3 text-xs font-semibold uppercase text-copper`,children:`Unit`}),(0,E.jsx)(`h1`,{className:`text-3xl font-semibold text-ink`,children:e.name}),(0,E.jsxs)(`p`,{className:`mt-2 text-sm text-slate-500`,children:[`共 `,e.words.length,` 词`,e.expectedCount?`，原文标注 ${e.expectedCount} 词`:``]}),(0,E.jsxs)(`div`,{className:`mt-6 grid gap-3 sm:grid-cols-3`,children:[(0,E.jsxs)(`button`,{type:`button`,onClick:n,className:`mode-card`,children:[(0,E.jsx)(te,{size:20,"aria-hidden":`true`}),(0,E.jsx)(`span`,{children:`记忆`})]}),(0,E.jsxs)(`button`,{type:`button`,onClick:r,className:`mode-card`,children:[(0,E.jsx)(re,{size:20,"aria-hidden":`true`}),(0,E.jsx)(`span`,{children:`理解`})]}),(0,E.jsxs)(`button`,{type:`button`,onClick:i,className:`mode-card`,children:[(0,E.jsx)(de,{size:20,"aria-hidden":`true`}),(0,E.jsx)(`span`,{children:`测试`})]})]})]}),(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-[#f8fbff] p-4`,children:[(0,E.jsxs)(`div`,{className:`mb-4 flex items-center gap-2 font-semibold text-ink`,children:[(0,E.jsx)(Oe,{size:18,"aria-hidden":`true`}),`单元进度`]}),(0,E.jsxs)(`div`,{className:`grid grid-cols-3 gap-2 text-center text-sm`,children:[(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-3`,children:[(0,E.jsx)(`div`,{className:`font-semibold`,children:a.learned}),(0,E.jsx)(`div`,{className:`text-xs text-slate-500`,children:`学习`})]}),(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-3`,children:[(0,E.jsx)(`div`,{className:`font-semibold`,children:a.mastered}),(0,E.jsx)(`div`,{className:`text-xs text-slate-500`,children:`掌握`})]}),(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-3`,children:[(0,E.jsx)(`div`,{className:`font-semibold`,children:a.due}),(0,E.jsx)(`div`,{className:`text-xs text-slate-500`,children:`到期`})]})]}),(0,E.jsx)(`div`,{className:`mt-4`,children:(0,E.jsx)(K,{value:a.mastered,max:e.words.length,label:`掌握进度`})})]})]})}),(0,E.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-soft`,children:[(0,E.jsxs)(`div`,{className:`mb-3 flex items-center justify-between gap-3`,children:[(0,E.jsx)(`h2`,{className:`font-semibold text-ink`,children:`单元词表`}),(0,E.jsxs)(`span`,{className:`text-xs font-semibold text-slate-500`,children:[a.learned,`/`,e.words.length]})]}),(0,E.jsx)(`div`,{className:`grid gap-2 md:grid-cols-2 xl:grid-cols-3`,children:e.words.map(e=>{let n=t[e.id],r=!!(n?.learned||n?.firstLearnedAt);return(0,E.jsxs)(`div`,{className:`flex items-center justify-between gap-3 rounded-lg border border-sky-100 bg-[#f8fbff] px-3 py-2`,children:[(0,E.jsxs)(`div`,{className:`min-w-0`,children:[(0,E.jsx)(`div`,{className:`truncate text-sm font-semibold text-ink`,children:e.word}),(0,E.jsx)(`div`,{className:`truncate text-xs text-slate-500`,children:e.definitions[0]?.meaning||e.phonetic})]}),(0,E.jsx)(`span`,{className:r?`shrink-0 rounded-md border border-emerald-200 bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700`:`shrink-0 rounded-md border border-rose-200 bg-rose-50 px-2 py-1 text-xs font-semibold text-rose-700`,children:r?`已学习`:`未学习`})]},e.id)})})]})]})}var yu=[[`基础高频`,`后续基础词包会放在这里，适合每天热身。`],[`词根词缀`,`用于把生词拆开记，减少死背压力。`],[`易混辨析`,`把拼写、词义相近的词集中复现。`]];function bu({units:e,progressMap:t,onOpenUnit:n}){let[r,i]=(0,y.useState)(`required`),a=(0,y.useMemo)(()=>e.filter(e=>e.order>=1&&e.order<=26).sort((e,t)=>e.order-t.order),[e]),o=a.reduce((e,t)=>e+t.words.length,0);return(0,E.jsxs)(`div`,{className:`space-y-5`,children:[(0,E.jsx)(`section`,{className:`rounded-lg border border-sky-100 bg-white p-5 shadow-soft`,children:(0,E.jsxs)(`div`,{className:`flex flex-wrap items-end justify-between gap-4`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Units`}),(0,E.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`单元板块`}),(0,E.jsx)(`p`,{className:`mt-2 text-sm leading-6 text-slate-500`,children:`先分成基础版和必备版。必备版已放入 Unit1-26，可以从任意单元继续学习、理解或测试。`})]}),(0,E.jsx)(Rl,{value:r,items:[{value:`basic`,label:`基础版`},{value:`required`,label:`必备版`}],onChange:i})]})}),r===`basic`?(0,E.jsx)(`section`,{className:`grid gap-4 md:grid-cols-3`,children:yu.map(([e,t])=>(0,E.jsxs)(`article`,{className:`rounded-lg border border-dashed border-sky-200 bg-white/85 p-5 shadow-soft`,children:[(0,E.jsx)(`div`,{className:`mb-4 grid h-10 w-10 place-items-center rounded-lg border border-harbor/15 bg-[#f8fbff] text-harbor`,children:(0,E.jsx)(Oe,{size:20,"aria-hidden":`true`})}),(0,E.jsx)(`h2`,{className:`text-xl font-semibold text-ink`,children:e}),(0,E.jsx)(`p`,{className:`mt-2 text-sm leading-6 text-slate-500`,children:t}),(0,E.jsx)(`div`,{className:`mt-5 rounded-lg border border-sky-100 bg-[#f8fbff] p-3 text-sm font-semibold text-harbor`,children:`不影响必备版进度`})]},e))}):(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(`section`,{className:`grid gap-4 sm:grid-cols-3`,children:[(0,E.jsxs)(`div`,{className:`rounded-lg border border-sky-100 bg-white p-4 shadow-soft`,children:[(0,E.jsx)(`div`,{className:`text-sm text-slate-500`,children:`必备单元`}),(0,E.jsx)(`div`,{className:`mt-1 text-2xl font-semibold text-ink`,children:a.length})]}),(0,E.jsxs)(`div`,{className:`rounded-lg border border-sky-100 bg-white p-4 shadow-soft`,children:[(0,E.jsx)(`div`,{className:`text-sm text-slate-500`,children:`总词量`}),(0,E.jsx)(`div`,{className:`mt-1 text-2xl font-semibold text-ink`,children:o})]}),(0,E.jsxs)(`div`,{className:`rounded-lg border border-sky-100 bg-white p-4 shadow-soft`,children:[(0,E.jsx)(`div`,{className:`text-sm text-slate-500`,children:`范围`}),(0,E.jsx)(`div`,{className:`mt-1 text-2xl font-semibold text-ink`,children:`Unit1-26`})]})]}),(0,E.jsx)(`div`,{className:`grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`,children:a.map(e=>{let r=Fc(e.words,t);return(0,E.jsxs)(`article`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,E.jsxs)(`div`,{className:`flex items-start justify-between gap-4`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`mb-3 grid h-10 w-10 place-items-center rounded-lg border border-harbor/15 bg-[#f8fbff] text-harbor`,children:(0,E.jsx)(ne,{size:20,"aria-hidden":`true`})}),(0,E.jsx)(`h2`,{className:`text-xl font-semibold text-ink`,children:e.name}),(0,E.jsxs)(`p`,{className:`mt-1 text-sm text-slate-500`,children:[`共 `,e.words.length,` 词`]})]}),(0,E.jsx)(`button`,{type:`button`,onClick:()=>n(e.id),className:`icon-btn`,title:`进入单元`,children:(0,E.jsx)(C,{size:18,"aria-hidden":`true`})})]}),(0,E.jsxs)(`div`,{className:`mt-5 grid grid-cols-3 gap-3 text-center`,children:[(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-[#f8fbff] p-3`,children:[(0,E.jsx)(`div`,{className:`font-semibold text-ink`,children:r.learned}),(0,E.jsx)(`div`,{className:`text-xs text-slate-500`,children:`已学习`})]}),(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-[#f8fbff] p-3`,children:[(0,E.jsx)(`div`,{className:`font-semibold text-ink`,children:r.mastered}),(0,E.jsx)(`div`,{className:`text-xs text-slate-500`,children:`已掌握`})]}),(0,E.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-[#f8fbff] p-3`,children:[(0,E.jsx)(`div`,{className:`font-semibold text-ink`,children:r.due}),(0,E.jsx)(`div`,{className:`text-xs text-slate-500`,children:`待复习`})]})]}),(0,E.jsx)(`div`,{className:`mt-5`,children:(0,E.jsx)(K,{value:r.mastered,max:e.words.length,label:`掌握进度`})}),e.words.length?null:(0,E.jsxs)(`div`,{className:`mt-4 flex items-center gap-2 rounded-lg border border-copper/20 bg-copper/5 p-3 text-sm text-copper`,children:[(0,E.jsx)(ce,{size:16,"aria-hidden":`true`}),`这个单元文件已放入，但还需要继续补充可解析单词。`]})]},e.id)})})]})]})}function xu(e,t,n=0,r){let i=(0,y.useRef)(null),a=(0,y.useRef)(0),o=(0,y.useRef)(null),[s,c]=(0,y.useState)(0);return(0,y.useEffect)(()=>{if(!e)return;i.current=Oc(e,t,n),a.current=Date.now(),c(0);let s=window.setInterval(()=>c(Math.floor((Date.now()-a.current)/1e3)),1e3),l=()=>{document.hidden?o.current=Date.now():o.current&&Date.now()-o.current>6e4&&(a.current+=Date.now()-o.current,o.current=null)};return document.addEventListener(`visibilitychange`,l),()=>{window.clearInterval(s),document.removeEventListener(`visibilitychange`,l);let e=i.current;!e||!r||(r({...e,endedAt:new Date().toISOString(),durationSeconds:Math.max(0,Math.floor((Date.now()-a.current)/1e3)),wordCount:n}),i.current=null)}},[e,r,t,n]),{seconds:s,minutes:Math.floor(s/60),active:!!(e&&i.current)}}function Su({mode:e,unitId:t,wordCount:n=0,onComplete:r}){let i=xu(e,t,n,r);return!e||!i.active?null:(0,E.jsxs)(`div`,{className:`fixed bottom-20 right-4 z-30 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-500 shadow-soft md:bottom-4`,children:[`本次 `,i.minutes,`分`,i.seconds%60,`秒`]})}var Cu=`# 2027考研英语红宝书\r
## 必考词Unit19 72词\r
\r
1.  **anxious** /ˈæŋkʃəs/\r
    adj. 焦虑的；让人担忧的；渴望的\r
\r
2.  **apart** /əˈpɑːt/\r
    adv. 相距；分离；成碎片；除外\r
\r
3.  **assassinate** /əˈsæsɪneɪt/\r
    vt. 暗杀，刺杀\r
\r
4.  **assault** /əˈsɔːlt/\r
    n. 攻击，袭击；攻坚；抨击\r
    vt. 袭击，殴打；使…感到难受\r
\r
5.  **assemble** /əˈsembl/\r
    vi. vt. (使)集合，(使)聚集\r
    vt. 组装，装配\r
\r
6.  **assembly** /əˈsembli/\r
    n. 立法机构，议会；集会；组装\r
\r
7.  **assert** /əˈsɜːt/\r
    vt. 断言；坚持(主张)；维护(权威)\r
\r
8.  **component** /kəmˈpəʊnənt/\r
    n. 成分，部件，组成部分\r
    adj. 组成的，构成的\r
\r
9.  **compose** /kəmˈpəʊz/\r
    vt. 组成；使平静\r
    vt. vi. 作(曲)，写(信、诗等)\r
\r
10. **composition** /ˌkɒmpəˈzɪʃn/\r
    n. 构成，成分；构图\r
    n. 作品；创作，作曲；作文\r
\r
11. **comprehend** /ˌkɒmprɪˈhend/\r
    vi. vt. 理解，领悟\r
\r
12. **comprehension** /ˌkɒmprɪˈhenʃn/\r
    n. 理解力；阅读(听力)理解测试\r
\r
13. **comprehensive** /ˌkɒmprɪˈhensɪv/\r
    adj. 全面的，综合性的；综合教育的\r
    n. (英国)综合中学\r
\r
14. **condemn** /kənˈdem/\r
    vt. 谴责；判处；使陷入\r
    vt. (因安全等原因而)封闭(建筑)\r
\r
15. **condense** /kənˈdens/\r
    vi. vt. (使)凝结；(使)浓缩，变浓稠\r
    vt. 压缩，精简(文章或讲话)\r
\r
16. **condition** /kənˈdɪʃn/\r
    n. 状态；健康状况；疾病；条件\r
    vt. 训练，使习惯于；影响；养护\r
\r
17. **conduct** /kənˈdʌkt/\r
    vt. 实施，执行；表现；传导；引导\r
    vi. vt. 指挥(歌唱或演奏)\r
    n. 行为，举止；实施办法\r
\r
18. **conductor** /kənˈdʌktə(r)/\r
    n. 指挥；列车长；售票员；导体\r
\r
19. **disable** /dɪsˈeɪbl/\r
    vt. 使伤残；使不能运转\r
\r
20. **disappear** /ˌdɪsəˈpɪə(r)/\r
    vi. 消失，不见；不复存在；失踪\r
\r
21. **disappoint** /ˌdɪsəˈpɔɪnt/\r
    vt. vi. (使)失望\r
    vt. 使…破灭\r
\r
22. **discipline** /ˈdɪsəplɪn/\r
    n. 纪律；训练方法；自制力；学科\r
    vt. 处罚；训导，管教；自我控制\r
\r
23. **disclose** /dɪsˈkləʊz/\r
    vt. 透露，披露；使显露\r
\r
24. **discover** /dɪˈskʌvə(r)/\r
    vt. 发现；找到；了解到；发掘\r
\r
25. **discovery** /dɪˈskʌvəri/\r
    n. 发现；被发现的事物(或人)\r
\r
26. **hoist** /hɔɪst/\r
    vt. 吊起，升起，提起\r
    n. 吊车，起重机\r
\r
27. **hold** /həʊld/\r
    vt. 拿着；保持；持有；举行；认为\r
    vt. 拥抱；容纳，包含；担任\r
    vt. vi. (打电话时)不挂断\r
    n. 拿，握；影响，控制；支撑点\r
\r
28. **holder** /ˈhəʊldə(r)/\r
    n. 持有人；支托物\r
\r
29. **household** /ˈhaʊshəʊld/\r
    n. 家庭，一家人\r
    adj. 家用的，家庭的；家喻户晓的\r
\r
30. **however** /haʊˈevə(r)/\r
    adv. 不管多么；无论如何；然而\r
\r
31. **huddle** /ˈhʌdl/\r
    vi. 挤在一起；缩成一团\r
    n. 拥挤的一群；杂乱的一堆\r
\r
32. **narrative** /ˈnærətɪv/\r
    n. 叙事；记叙，叙述\r
    adj. 记叙的，叙述的\r
\r
33. **narrow** /ˈnærəʊ/\r
    adj. 狭窄的；勉强的；狭义的\r
    vi. vt. 使变窄，缩小\r
\r
34. **nasty** /ˈnɑːsti/\r
    adj. 不友善的；糟糕的；严重的\r
    adj. 下流的；危险的\r
\r
35. **nation** /ˈneɪʃn/\r
    n. 国家；民族；(全体)国民\r
\r
36. **national** /ˈnæʃnəl/\r
    adj. 国家的，民族的；国有的\r
    n. 国民，公民\r
\r
37. **nationality** /ˌnæʃəˈnæləti/\r
    n. 国籍；民族，种族\r
\r
38. **native** /ˈneɪtɪv/\r
    adj. 出生地的，本地的；与生俱来的\r
    n. 出生于某地的人；本地人；土著\r
\r
39. **natural** /ˈnætʃrəl/\r
    adj. 自然的；正常的；天生的\r
    n. 有天赋的人\r
\r
40. **nature** /ˈneɪtʃə(r)/\r
    n. 自然；天性，性格；本质\r
\r
41. **overall** /ˌəʊvərˈɔːl/\r
    adj. 全面的，总体的\r
    adv. 全部的，总计；总体上\r
    n. 连身工作服\r
\r
42. **overcome** /ˌəʊvəˈkʌm/\r
    vt. 克服；击败；对…产生极大影响\r
\r
43. **overlap** /ˌəʊvəˈlæp/\r
    vt. vi. (与…)重叠；(时间等)有重合\r
    n. 重叠部分\r
\r
44. **portion** /ˈpɔːʃn/\r
    n. 部分；(饭菜的)一份\r
    vt. 把…分成多份\r
\r
45. **possibility** /ˌpɒsəˈbɪləti/\r
    n. 可能性；可能的事；机会\r
\r
46. **possible** /ˈpɒsəbl/\r
    adj. 可能的；可能存在的；合理的\r
\r
47. **potential** /pəˈtenʃl/\r
    adj. 潜在的，可能的\r
    n. 潜力；潜质；可能性；电势\r
\r
48. **pour** /pɔː(r)/\r
    vt. (使)倾倒，倒出；下大雨\r
    vi. (液体、烟等)涌流；不断涌向\r
`,wu=`# 2027考研英语红宝书\r
## 必考词Unit20 59词\r
\r
1.  **console** /kənˈsəʊl/\r
    vt. 安慰，抚慰，慰藉\r
    n. 控制台，仪表盘\r
\r
2.  **consist** /kənˈsɪst/\r
    vi. 由…组成；在于\r
\r
3.  **consistent** /kənˈsɪstənt/\r
    adj. 一贯的；与…一致的；连续的\r
\r
4.  **constant** /ˈkɒnstənt/\r
    adj. 经常的，不断的；恒定的\r
    n. 不变的事物，常数，常量\r
\r
5.  **constituent** /kənˈstɪtjuənt/\r
    n. 成分；选民\r
    adj. 构成的，组成的\r
\r
6.  **constitute** /ˈkɒnstɪtjuːt/\r
    v. link. 构成，组成；相当于，可算作\r
    vt. 设立，成立\r
\r
7.  **constitution** /ˌkɒnstɪˈtjuːʃn/\r
    n. 宪法，章程；体质；构成，成分\r
\r
8.  **constrain** /kənˈstreɪn/\r
    vt. 限制，约束；强迫，迫使\r
\r
9.  **construct** /kənˈstrʌkt/\r
    vt. 建造，修建；组成，构成；绘制\r
    n. 构想，概念，观念\r
\r
10. **distinct** /dɪˈstɪŋkt/\r
    adj. 截然不同的；清晰的；确实的\r
\r
11. **distinction** /dɪˈstɪŋkʃn/\r
    n. 差别，不同；卓越；特点；荣誉\r
\r
12. **distinguish** /dɪˈstɪŋɡwɪʃ/\r
    vi. vt. 区分，辨别，分清\r
    vt. 使有别于；辨别出；使表现突出\r
\r
13. **fruitful** /ˈfruːtfl/\r
    adj. 富有成效的；富饶的，多产的\r
\r
14. **frustrate** /frʌˈstreɪt/\r
    vt. 使灰心，使沮丧；阻止，挫败\r
\r
15. **fulfill** /fʊlˈfɪl/\r
    vt. 实现，达到；履行；使有成就感\r
\r
16. **function** /ˈfʌŋkʃn/\r
    n. 功能，职能；宴会；函数\r
    vi. 起作用，运转\r
\r
17. **fund** /fʌnd/\r
    n. 基金；专款；资金；大量\r
    vt. 资助；为…提供资金\r
\r
18. **fundamental** /ˌfʌndəˈmentl/\r
    adj. 根本的，最重要的；基础的\r
    n. 根本；基础\r
\r
19. **evidence** /ˈevɪdəns/\r
    n. 证据，证明\r
    vt. 证明，表明\r
\r
20. **evident** /ˈevɪdənt/\r
    adj. 明显的，显然的\r
\r
21. **evil** /ˈiːvl/\r
    adj. 邪恶的；道德败坏的；恶魔的\r
    n. 邪恶；弊端；坏处\r
\r
22. **environment** /ɪnˈvaɪrənmənt/\r
    n. 生活环境，周围状况；自然环境\r
\r
23. **enterprise** /ˈentəpraɪz/\r
    n. 企业；项目，规划；进取心\r
\r
24. **entertain** /ˌentəˈteɪn/\r
    vt. vi. 使快乐，使有兴趣，娱乐；款待\r
    vt. 怀有…想法(或感受)\r
\r
25. **entertainment** /ˌentəˈteɪnmənt/\r
    n. 娱乐节目，娱乐活动；招待\r
\r
26. **monopoly** /məˈnɒpəli/\r
    n. 垄断；垄断企业；大富翁(游戏)\r
\r
27. **monotonous** /məˈnɒtənəs/\r
    adj. 单调乏味的，毫无变化的\r
\r
28. **mood** /muːd/\r
    n. 情绪，心情；坏心情；气氛\r
\r
29. **transmission** /trænzˈmɪʃn/\r
    n. (数据的)传输；传播；节目播送\r
\r
30. **transmit** /trænzˈmɪt/\r
    vt. vi. 传送，发送(信号、信息等)\r
    vt. 传播(疾病)；传达(思想)；传导\r
\r
31. **transplant** /trænsˈplɑːnt/\r
    n. 移植；移植的器官\r
    vt. 移植；移栽；使迁移\r
\r
32. **transport** /trænsˈpɔːt/\r
    n. 交通运输系统；交通工具；运输\r
    vt. 运输；使…仿佛置身于\r
\r
33. **stock** /stɒk/\r
    n. 库存；储备物；股票；家畜\r
    vt. (商店)存货；贮存，贮备\r
    adj. 老一套的；(商店)库存的，常备的\r
\r
34. **store** /stɔː(r)/\r
    n. 商店；店铺；储备物\r
    vt. 贮藏；(在计算机里)存储\r
\r
35. **storage** /ˈstɔːrɪdʒ/\r
    n. 储藏，贮存；(计算机)存储\r
\r
36. **stride** /straɪd/\r
    vi. 大步走，阔步行走\r
    n. 大步；进展，进步；步伐\r
\r
37. **strike** /straɪk/\r
    vt. 打，击，撞；突然想到；给…印象\r
    vi. 罢工；行进；划(火柴)；敲，鸣\r
    n. 罢工；袭击；击，打；全中\r
\r
38. **striking** /ˈstraɪkɪŋ/\r
    adj. 显著的，惊人的；容貌出众的\r
\r
39. **string** /strɪŋ/\r
    n. 细绳，线；一串；一系列；弦\r
    vt. 悬挂，系；把…连在一起\r
    adj. 弦乐器的；线织的\r
\r
40. **structure** /ˈstrʌktʃə(r)/\r
    n. 结构，构造；建筑物；精心组织\r
    vt. 组织，安排\r
\r
41. **stun** /stʌn/\r
    vt. 使震惊；使昏迷；使印象深刻\r
\r
42. **primary** /ˈpraɪməri/\r
    adj. 首要的，主要的；最早的；小学的\r
    n. (美国的)初选\r
\r
43. **prime** /praɪm/\r
    adj. 首要的；最好的；典型的\r
    n. 盛年；鼎盛时期\r
    vt. 准备；事先指点\r
\r
44. **primitive** /ˈprɪmətɪv/\r
    adj. 原始的，落后的；原始本能的\r
    n. 原始派艺术家\r
\r
45. **principal** /ˈprɪnsəpl/\r
    adj. 主要的，最重要的\r
    n. 校长；本金；资本；主角\r
\r
46. **principle** /ˈprɪnsəpl/\r
    n. 原则；原理；定律\r
\r
47. **psychiatry** /saɪˈkaɪətri/\r
    n. 精神病学；精神病治疗\r
\r
48. **psychology** /saɪˈkɒlədʒi/\r
    n. 心理学；心理，心理特点\r
\r
49. **liability** /ˌlaɪəˈbɪləti/\r
    n. (法律上的)责任；累赘；债务\r
\r
50. **liable** /ˈlaɪəbl/\r
    adj. 可能做…的；有责任的；易遭受…的\r
\r
51. **liberal** /ˈlɪbərəl/\r
    adj. 开明的；(政治)自由的；通识的\r
    adj. 慷慨的；不完全准确的\r
    n. 支持变革的人；自由党成员\r
\r
52. **liberate** /ˈlɪbəreɪt/\r
    vt. 使自由，使解脱，解放\r
\r
53. **license** /ˈlaɪsns/\r
    n. 许可证，执照；放肆，放纵\r
    vt. 批准，许可\r
\r
54. **innocent** /ˈɪnəsnt/\r
    adj. 无罪的；无辜受害的；纯真的\r
    n. 无辜的人；天真的人\r
\r
55. **innovation** /ˌɪnəˈveɪʃn/\r
    n. 创新，革新；新事物，新方法\r
\r
56. **anguish** /ˈæŋɡwɪʃ/\r
    n. 极度痛苦\r
\r
57. **annoy** /əˈnɔɪ/\r
    vt. 使生气；使烦恼，烦扰\r
\r
58. **annual** /ˈænjuəl/\r
    adj. 一年一次的；年度的\r
    n. 年刊，年册；一年生植物\r
\r
59. **anchor** /ˈæŋkə(r)/\r
    n. 锚；主持人；顶梁柱\r
    vt. 抛锚；使停泊；主持(节目)\r
    adj. 固定的，稳定的\r
\r
`,Tu=`# 2027考研英语红宝书\r
## 必考词Unit21 65词\r
\r
1.  **pose** /pəʊz/\r
    vt. 造成(威胁、问题等)；提出\r
    vi. 摆姿势；佯装，假扮\r
    n. (为拍照等摆的)姿势\r
\r
2.  **position** /pəˈzɪʃn/\r
    n. 位置；姿态，姿势；处境，立场；地位；职位\r
    vt. 安放，放置\r
\r
3.  **positive** /ˈpɒzətɪv/\r
    adj. 积极的；有益的；表示赞同的；确信的；阳性的\r
    n. 优势，优点；阳性结果\r
\r
4.  **possess** /pəˈzes/\r
    vt. 拥有；具有，具备；支配\r
\r
5.  **possession** /pəˈzeʃn/\r
    n. 具有，拥有；个人财产；殖民地\r
\r
6.  **dilute** /daɪˈluːt/\r
    vt. 稀释，冲淡；削弱，降低\r
    adj. 稀释的，冲淡了的\r
\r
7.  **dim** /dɪm/\r
    adj. 昏暗的；模糊的；迟钝的；前景黯淡的\r
    vi. vt. (使)变昏暗；(使)变渺茫\r
\r
8.  **diminish** /dɪˈmɪnɪʃ/\r
    vi. vt. 减少，降低，减弱\r
    vt. 贬低，轻视\r
\r
9.  **amateur** /ˈæmətə(r)/\r
    n. 业余爱好者；外行\r
    adj. 非职业的，业余的\r
\r
10. **amaze** /əˈmeɪz/\r
    vt. 使惊奇，使大吃一惊\r
\r
11. **ambiguous** /æmˈbɪɡjuəs/\r
    adj. 模棱两可的，含糊不清的\r
\r
12. **ambition** /æmˈbɪʃn/\r
    n. 野心，抱负，理想\r
\r
13. **ambitious** /æmˈbɪʃəs/\r
    adj. 有野心的；规模宏大的，艰巨的\r
\r
14. **bubble** /ˈbʌbl/\r
    n. 气泡；肥皂泡；经济泡沫\r
    vi. 起泡，冒泡；(情绪等)涌动\r
\r
15. **budget** /ˈbʌdʒɪt/\r
    n. 预算；(政府的)预算案\r
    vi. vt. 把…计入预算；为…安排(时间)\r
    adj. 低价的，低廉的\r
\r
16. **build** /bɪld/\r
    vt. vi. 建筑，建造\r
    vt. 创建，开发\r
    vi. (感觉)逐渐增强\r
    n. 体格，体形，身材\r
\r
17. **business** /ˈbɪznəs/\r
    n. 商业，生意；商务；企业；职责\r
\r
18. **compress** /kəmˈpres/\r
    vt. vi. (使)压紧，压缩\r
    vt. 精简(文章等)\r
    n. (用以退烧、止痛的)敷布，压布\r
\r
19. **comprise** /kəmˈpraɪz/\r
    vt. 包括，由…组成；构成，组成\r
\r
20. **compromise** /ˈkɒmprəmaɪz/\r
    n. 妥协，让步；折中，折中办法\r
    vi. 妥协，让步，折中\r
    vt. 违背(原则)；达不到(标准)；危及，有损于\r
\r
21. **conceive** /kənˈsiːv/\r
    vt. 想象，想出，构想；怀孕\r
\r
22. **concentrate** /ˈkɒnsntreɪt/\r
    vi. vt. 全神贯注；(使)集中\r
    n. 浓缩液，浓缩物\r
\r
23. **concept** /ˈkɒnsept/\r
    n. 概念，想法\r
\r
24. **conception** /kənˈsepʃn/\r
    n. 构思；概念；受孕\r
\r
25. **concern** /kənˈsɜːn/\r
    n. 担心；关心；对…重要的事\r
    vt. 关于；使…担心；涉及，影响\r
\r
26. **concise** /kənˈsaɪs/\r
    adj. 简洁的，简明的\r
\r
27. **concrete** /ˈkɒŋkriːt/\r
    adj. 确实的，具体的；混凝土制的\r
    n. 混凝土\r
\r
28. **conclude** /kənˈkluːd/\r
    vt. 推断出，作出结论；达成(协议)\r
    vi. vt. (使)结束，终止\r
\r
29. **conclusion** /kənˈkluːʒn/\r
    n. 结论，推论；结束，结尾；签订\r
\r
30. **concurrent** /kənˈkʌrənt/\r
    adj. 并存的，同时发生的\r
\r
31. **confer** /kənˈfɜː(r)/\r
    vt. 授予，赋予\r
    vi. 商议，协商\r
\r
32. **conference** /ˈkɒnfərəns/\r
    n. 会议\r
\r
33. **confess** /kənˈfes/\r
    vi. vt. 供认，坦白；承认；忏悔\r
\r
34. **epic** /ˈepɪk/\r
    n. 史诗；史诗般的电影或书；壮举\r
    adj. 史诗般的；漫长艰难的；壮丽的\r
\r
35. **epidemic** /ˌepɪˈdemɪk/\r
    n. 流行病；泛滥，猖獗\r
    adj. 泛滥的，猖獗的\r
\r
36. **episode** /ˈepɪsəʊd/\r
    n. 一段经历，小插曲；一集\r
\r
37. **epoch** /ˈiːpɒk/\r
    n. 时代，纪元；(地质中的)世\r
\r
38. **indifferent** /ɪnˈdɪfrənt/\r
    adj. 不感兴趣的，冷淡的；一般的\r
\r
39. **indignant** /ɪnˈdɪɡnənt/\r
    adj. 愤慨的，愤怒的\r
\r
40. **indignation** /ˌɪndɪɡˈneɪʃn/\r
    n. 愤慨，愤怒，义愤\r
\r
41. **indispensable** /ˌɪndɪˈspensəbl/\r
    adj. 必不可少的，不可或缺的\r
\r
42. **individual** /ˌɪndɪˈvɪdʒuəl/\r
    adj. 单独的，个人的；独特的\r
    n. 个人；有个性的人\r
\r
43. **mess** /mes/\r
    n. 杂乱；麻烦，困境；不整洁的人\r
    vt. 使不整洁，弄乱\r
\r
44. **message** /ˈmesɪdʒ/\r
    n. 信息，消息，要旨\r
    vt. 给…发消息\r
\r
45. **messenger** /ˈmesɪndʒə(r)/\r
    n. 送信者，通信员\r
\r
46. **method** /ˈmeθəd/\r
    n. 方法，办法；条理\r
\r
47. **militant** /ˈmɪlɪtənt/\r
    adj. 好战的，激进的\r
    n. 好战分子，激进分子\r
\r
48. **military** /ˈmɪlətri/\r
    adj. 军事的，军队的，军用的\r
    n. 军队，军方，军人\r
\r
49. **mind** /maɪnd/\r
    n. 头脑；思维，心思；处境，立场\r
    vt. 当心，注意\r
\r
50. **redeem** /rɪˈdiːm/\r
    vt. 弥补，拯救；兑换，赎回；履行(诺言)\r
\r
51. **reduce** /rɪˈdjuːs/\r
    vt. 减少，缩小，降低\r
    vt. (使)蒸发，降低\r
    vi. 减轻体重，节食\r
\r
52. **reduction** /rɪˈdʌkʃn/\r
    n. 减少，缩小；脱氧\r
\r
53. **refer** /rɪˈfɜː(r)/\r
    vi. 提及；指，关于；参考，查阅\r
\r
54. **reference** /ˈrefrəns/\r
    n. 提到；参考；书目；推荐信\r
    vt. 查阅，参考\r
\r
55. **subject** /ˈsʌbdʒɪkt/\r
    n. 主题；学科；对象；主语；臣民\r
    adj. 易遭…的；取决于…的；受…支配\r
    vt. 使屈服，使顺从，使遭受\r
\r
56. **subjective** /səbˈdʒektɪv/\r
    adj. 主观的；主语的\r
\r
57. **spoil** /spɔɪl/\r
    vt. 破坏，毁掉；宠坏，溺爱；变质\r
    vi. (食物)变质\r
    n. 赃物，战利品\r
\r
58. **sponsor** /ˈspɒnsə(r)/\r
    n. 赞助商；资助者；倡议者；保证人\r
    vt. 赞助，资助；举办，倡议\r
\r
59. **spread** /spred/\r
    vt. 展开，摊开；伸开；使分散\r
    vt. 传播，散布；蔓延，扩散\r
    vi. 传播；散布；蔓延；扩展\r
    n. 传播；散布；广泛开展\r
\r
60. **spur** /spɜː(r)/\r
    n. 马刺；鞭策，激励；山嘴\r
    vt. 鞭策，激励，促进，加速\r
\r
61. **spy** /spaɪ/\r
    n. 间谍；密探\r
    vt. 突然看见，发现\r
    vi. 从事间谍活动，搜集情报\r
\r
62. **stability** /stəˈbɪləti/\r
    n. 稳定，稳固\r
\r
63. **stable** /ˈsteɪbl/\r
    adj. 稳定的，稳固的；(人)稳重的\r
    n. 马厩；养马场\r
    vt. 使(马)入厩\r
\r
64. **staff** /stɑːf/\r
    n. 全体职员；(学校)行政人员\r
    vt. 给…配备职员，任职于\r
\r
65. **stage** /steɪdʒ/\r
    n. 阶段；步骤；舞台\r
    vt. 上演，举办；组织，筹划\r
\r
`,Eu=`# 2027考研英语红宝书\r
## 必考词Unit22 73词\r
\r
1.  **twist** /twɪst/\r
    vt. vi. (使)弯曲变形；扭动，缠绕\r
    vi. 曲折，蜿蜒\r
    vt. 使弯曲；转动，旋转；扭伤；曲解\r
    n. 转动，旋转；转折；急转弯处\r
\r
2.  **trivial** /ˈtrɪviəl/\r
    adj. 琐碎的，微不足道的\r
\r
3.  **try** /traɪ/\r
    vi. vt. 试图，努力\r
    vt. 试，试用；审讯，审判\r
    n. 尝试，努力\r
\r
4.  **tumble** /ˈtʌmbl/\r
    vi. vt. (使)跌倒，滚落\r
    vi. 倒塌；暴跌；仓促移动；翻跟头\r
    n. 跌倒，暴跌；混乱的一堆\r
\r
5.  **turbulent** /ˈtɜːbjələnt/\r
    adj. 动荡的，混乱的；湍急的\r
\r
6.  **turn** /tɜːn/\r
    vi. vt. (使)旋转；转身；转弯；翻(页)；松开；折起\r
    vt. 把…翻过来；使成为；到达(年龄等)\r
    v. link. (使)变成，成为\r
    n. 旋转；(车)转弯；机会；转变\r
\r
7.  **turnover** /ˈtɜːnəʊvə(r)/\r
    n. 营业额；人员流动率；三角馅饼\r
\r
8.  **type** /taɪp/\r
    n. 类型，种类；某类人；印刷字体\r
    vt. 打(字)\r
    vt. 确定…的类型，把…分类\r
\r
9.  **typical** /ˈtɪpɪkl/\r
    adj. 典型的；一贯的；果不其然的\r
\r
10. **voluntary** /ˈvɒləntəri/\r
    adj. 自愿的；无偿的；志愿的\r
\r
11. **volunteer** /ˌvɒlənˈtɪə(r)/\r
    n. 志愿者；自告奋勇者\r
    vi. vt. 自愿做，自告奋勇\r
    vt. 主动建议，主动提出\r
    vi. 自愿参军，主动提出\r
\r
12. **vote** /vəʊt/\r
    vt. vi. 投票，表决，选举\r
    vt. 选出，推举；表明，公认；提议\r
    n. 选票；投票；投票权\r
\r
13. **vulgar** /ˈvʌlɡə(r)/\r
    adj. 粗俗的，俗气的；下流的\r
\r
14. **vulnerable** /ˈvʌlnərəbl/\r
    adj. 脆弱的，易受伤害的\r
\r
15. **author** /ˈɔːθə(r)/\r
    n. 作者，作家\r
    vt. 创作，写作，撰写\r
\r
16. **authority** /ɔːˈθɒrəti/\r
    n. 权威；权力；当权者；官方；授权\r
\r
17. **auxiliary** /ɔːɡˈzɪliəri/\r
    adj. 辅助的，备用的\r
    n. 助动词\r
\r
18. **avail** /əˈveɪl/\r
    vi. vt. 有帮助，有用；利用(机会等)\r
    n. 效用，帮助\r
\r
19. **available** /əˈveɪləbl/\r
    adj. 可获得的；可用的；有空的\r
\r
20. **critic** /ˈkrɪtɪk/\r
    n. 评论家，批评家；批评者\r
\r
21. **critical** /ˈkrɪtɪkl/\r
    adj. 批判的；关键的；危急的\r
\r
22. **criticism** /ˈkrɪtɪsɪzəm/\r
    n. 批评，指责；(对书等的)评论\r
\r
23. **criticize** /ˈkrɪtɪsaɪz/\r
    vi. vt. 批评，指责，批判\r
    vt. 评论，评价\r
\r
24. **crucial** /ˈkruːʃl/\r
    adj. 至关重要的，关键性的\r
\r
25. **culminate** /ˈkʌlmɪneɪt/\r
    vi. 以…告终，达到…的顶点\r
\r
26. **culprit** /ˈkʌlprɪt/\r
    n. 罪犯；肇事者；问题的起因\r
\r
27. **cultivate** /ˈkʌltɪveɪt/\r
    vt. 开垦，种植；建立(友谊)；培养\r
\r
28. **culture** /ˈkʌltʃə(r)/\r
    n. 文化\r
\r
29. **dual** /ˈdjuːəl/\r
    adj. 双的，双重的，两部分的\r
\r
30. **dubious** /ˈdjuːbiəs/\r
    adj. 怀疑的；可疑的；不光彩的\r
\r
31. **due** /djuː/\r
    adj. 由于；预期的；应给的；到期的\r
    n. 应有的权利，应得的东西\r
    adv. 正对着，正向\r
\r
32. **durable** /ˈdjʊərəbl/\r
    adj. 耐用的，持久的\r
\r
33. **duration** /djuˈreɪʃn/\r
    n. 持续时间，期间\r
\r
34. **duty** /ˈdjuːti/\r
    n. 责任，义务；职责；税\r
\r
35. **dynamic** /daɪˈnæmɪk/\r
    adj. 充满活力的；动态的\r
    n. 动态；力学，动力学\r
\r
36. **extinct** /ɪkˈstɪŋkt/\r
    adj. 已灭绝的，消失的；(火山)死的\r
\r
37. **extinguish** /ɪkˈstɪŋɡwɪʃ/\r
    vt. 熄灭，扑灭；毁灭，使破灭\r
\r
38. **introduce** /ˌɪntrəˈdjuːs/\r
    vt. 介绍，使初次了解；推行，引入\r
\r
39. **introduction** /ˌɪntrəˈdʌkʃn/\r
    n. 采用，引进；介绍；序言\r
\r
40. **invest** /ɪnˈvest/\r
    vi. vt. 投资；投入(时间等)；授(权)\r
\r
41. **investment** /ɪnˈvestmənt/\r
    n. 投资；(时间、精力的)投入\r
\r
42. **investigate** /ɪnˈvestɪɡeɪt/\r
    vi. vt. 调查，研究\r
\r
43. **mutual** /ˈmjuːtʃuəl/\r
    adj. 相互的，彼此的，共有的\r
\r
44. **mysterious** /mɪˈstɪəriəs/\r
    adj. 神秘的，故弄玄虚的\r
\r
45. **mystery** /ˈmɪstəri/\r
    n. 谜；神秘的人(或物)；神秘性\r
\r
46. **myth** /mɪθ/\r
    n. 神话；(很多人相信的)错误看法\r
\r
47. **noble** /ˈnəʊbl/\r
    adj. 高尚的；贵族的；壮观的\r
    n. 贵族\r
\r
48. **norm** /nɔːm/\r
    n. 常态，规范，准则；平均水平\r
\r
49. **normal** /ˈnɔːml/\r
    adj. 正常的，平常的；身心健康的\r
    n. 通常标准，常态\r
\r
50. **normalization** /ˌnɔːməlaɪˈzeɪʃn/\r
    n. 正常化\r
\r
51. **note** /nəʊt/\r
    n. 笔记；便条；注释；纸币；音符；感情色彩，调子\r
    vt. 注意；指出，特别提到\r
\r
52. **notion** /ˈnəʊʃn/\r
    n. 观念，理念，看法\r
\r
53. **public** /ˈpʌblɪk/\r
    adj. 大众的；公共的；政府的；公开的\r
    n. 公众，民众\r
\r
54. **publication** /ˌpʌblɪˈkeɪʃn/\r
    n. 出版；出版物；发表，公布\r
\r
55. **publicity** /pʌbˈlɪsəti/\r
    n. (媒体的)关注，报道；宣传\r
\r
56. **publish** /ˈpʌblɪʃ/\r
    vt. 出版，刊登；公布\r
    vt. vi. 发表(作品)\r
\r
57. **result** /rɪˈzʌlt/\r
    n. 结果；得分；成绩；成果\r
    vi. 由…引起；造成，导致\r
\r
58. **resultant** /rɪˈzʌltənt/\r
    adj. 作为结果的，因而发生的\r
\r
59. **resume** /rɪˈzjuːm/\r
    vt. 继续，重新开始；恢复(职位)；回到(座位)\r
    n. 简历；履历；摘要(概述)\r
\r
60. **reveal** /rɪˈviːl/\r
    vt. 揭示；揭露；展现，显露\r
\r
61. **revelation** /ˌrevəˈleɪʃn/\r
    n. 被揭示的真相；揭露；(上帝的)启示\r
\r
62. **revenge** /rɪˈvendʒ/\r
    n. 报复，报仇，雪耻\r
    vt. 报复，报仇\r
\r
63. **revenue** /ˈrevənjuː/\r
    n. 收入；财政收入，税收\r
\r
64. **supply** /səˈplaɪ/\r
    vt. 供应，供给，供给，供应；使满足\r
    vt. 使营养，供应\r
    n. 支持；资助；养活；支撑；证据；支持物；证据\r
\r
65. **support** /səˈpɔːt/\r
    vt. 支持；资助；养活；支撑；证实\r
    n. 支持；资助；支撑物；证据\r
\r
66. **suppose** /səˈpəʊz/\r
    vi. vt. 认为，猜想；(婉转表达)要不\r
    vt. 假定，假设\r
\r
67. **suppress** /səˈpres/\r
    vt. 镇压；压抑；封锁；隐瞒；抑制\r
\r
68. **supplement** /ˈsʌplɪmənt/\r
    n. 增补(物)，补充(物)；增刊\r
    adj. 增补的，补充的；备用的\r
\r
69. **supreme** /suːˈpriːm/\r
    adj. 至高无上的；(程度上)最大的\r
\r
70. **system** /ˈsɪstəm/\r
    n. 体系，制度；系统\r
\r
71. **systematic** /ˌsɪstəˈmætɪk/\r
    adj. 系统的，有条理的，有计划的\r
\r
72. **logic** /ˈlɒdʒɪk/\r
    n. 逻辑(思维)；逻辑学；逻辑系统\r
\r
73. **logical** /ˈlɒdʒɪkl/\r
    adj. 合乎逻辑的；合乎情理的\r
\r
`,Du=`# 2027考研英语红宝书\r
## 必考词Unit23 71词\r
\r
1.  **rescue** /ˈreskjuː/\r
    vt. 营救，救援\r
    n. 营救，营救活动\r
\r
2.  **research** /rɪˈsɜːtʃ/\r
    n. 研究，调查\r
    vi. vt. 研究，调查\r
\r
3.  **resent** /rɪˈzent/\r
    vt. 怨恨，憎恶\r
\r
4.  **refresh** /rɪˈfreʃ/\r
    vt. 使恢复活力；翻新；使记起\r
    vt. vi. 刷新(网页)\r
\r
5.  **refute** /rɪˈfjuːt/\r
    vt. 反驳，否认…的正确性\r
\r
6.  **region** /ˈriːdʒən/\r
    n. 地区，区域；行政区；身体部位\r
\r
7.  **regular** /ˈreɡjələr/\r
    adj. 有规律的；频繁的；通常的\r
    n. 常客，老主顾；含铅汽油\r
\r
8.  **regulate** /ˈreɡjuleɪt/\r
    vt. vi. (以规章)管理，约束\r
    vt. 调整，调节\r
\r
9.  **regulation** /ˌreɡjuˈleɪʃn/\r
    n. 规章，制度；调控，管理\r
    adj. 规定的，正规的\r
\r
10. **replace** /rɪˈpleɪs/\r
    vt. 替换；更换；把…放回原处\r
\r
11. **reply** /rɪˈplaɪ/\r
    vi. vt. 回复，答复\r
    vi. 作出回应\r
    n. 答复，回应\r
\r
12. **report** /rɪˈpɔːrt/\r
    vt. vi. 汇报，报告；报道，宣布\r
    vt. 据说，传闻；举报，告发\r
    vi. 报到\r
    n. 报道；报告；传闻；成绩报告单\r
\r
13. **reporter** /rɪˈpɔːrtər/\r
    n. 记者\r
\r
14. **reputation** /ˌrepjuˈteɪʃn/\r
    n. 名誉，名声\r
\r
15. **request** /rɪˈkwest/\r
    n. 请求，要求；点播的歌曲\r
    vt. 请求，要求\r
\r
16. **require** /rɪˈkwaɪər/\r
    vt. 需要；要求，规定\r
\r
17. **requirement** /rɪˈkwaɪərmənt/\r
    n. 需求，必需品；必要条件\r
\r
18. **assess** /əˈses/\r
    vt. 评估，估算\r
\r
19. **assimilate** /əˈsɪməleɪt/\r
    vt. 吸收，接受，学习\r
    vi. vt. (使)同化，融入\r
\r
20. **assist** /əˈsɪst/\r
    vi. vt. 帮助，协助\r
    vt. 促进，有助于\r
    n. 助攻\r
\r
21. **assistance** /əˈsɪstəns/\r
    n. 帮助，援助；支持\r
\r
22. **assistant** /əˈsɪstənt/\r
    n. 助手，助理；售货员\r
    adj. 助理的；副的\r
\r
23. **assume** /əˈsjuːm/\r
    vt. 假设；承担，取得；呈现出，假装\r
\r
24. **assumption** /əˈsʌmpʃn/\r
    n. 假设，臆断；(责任的)承担\r
\r
25. **contribute** /kənˈtrɪbjuːt/\r
    vt. vi. 捐赠，捐助；做贡献；撰稿\r
    vi. 促使，是导致…的原因之一\r
\r
26. **contribution** /ˌkɒntrɪˈbjuːʃn/\r
    n. 贡献；捐献；定期缴款；稿件\r
\r
27. **controversial** /ˌkɒntrəˈvɜːʃl/\r
    adj. 有争议的，引发争论的\r
\r
28. **controversy** /ˈkɒntrəvɜːrsi/\r
    n. 争论，争议\r
\r
29. **control** /kənˈtrəʊl/\r
    n. 控制，限制；开关\r
    vt. 控制，限制\r
\r
30. **convene** /kənˈviːn/\r
    vt. vi. 召集，召开，集合\r
\r
31. **convention** /kənˈvenʃn/\r
    n. 习俗，惯例；大会；公约，协定\r
\r
32. **converge** /kənˈvɜːdʒ/\r
    vi. 相交；聚集；趋同\r
\r
33. **convey** /kənˈveɪ/\r
    vt. 表达，传递，传达；运输，运送\r
\r
34. **domain** /dəʊˈmeɪn/\r
    n. 领域，范畴；领地；域\r
\r
35. **domestic** /dəˈmestɪk/\r
    adj. 国内的；家庭的；家养的\r
    n. 佣人；家庭纠纷\r
\r
36. **dominant** /ˈdɒmɪnənt/\r
    adj. 占支配(统治)地位的；显性的\r
\r
37. **dominate** /ˈdɒmɪneɪt/\r
    vt. vi. 主宰，统治，支配\r
    vt. 高耸，耸立\r
\r
38. **doom** /duːm/\r
    n. 厄运，死亡，毁灭\r
    vt. 使…注定遭受(不幸等)\r
\r
39. **double** /ˈdʌbl/\r
    adj. 两倍的，双重的；双人的\r
    n. 两倍，两倍量\r
    vt. 把…对折，使加倍\r
\r
40. **doubt** /daʊt/\r
    n. 怀疑，不确定\r
    vt. 怀疑；不信任，对…没有信心\r
\r
41. **probe** /prəʊb/\r
    vt. vi. 追问，探究，打探\r
    vt. (用细长工具)探查\r
    n. 详细调查；航天探测器；探针\r
\r
42. **procedure** /prəˈsiːdʒər/\r
    n. 步骤，程序；手术，治疗\r
\r
43. **proceed** /prəˈsiːd/\r
    vi. 继续做，接着做；行进，前往\r
\r
44. **proceeding** /prəˈsiːdɪŋ/\r
    n. 诉讼；一系列行动；(会议)记录\r
\r
45. **process** /ˈprəʊses/\r
    n. 过程，进程；工序\r
    vt. 加工，处理；审阅，审核\r
\r
46. **procession** /prəˈseʃn/\r
    n. 队伍，行列，游行；一连串\r
\r
47. **proclaim** /prəˈkleɪm/\r
    vt. 宣布，声明；表明，显示\r
\r
48. **produce** /prəˈdjuːs/\r
    vt. 生产，制作，出产；引起；制止\r
    n. (食品等)农产品\r
\r
49. **product** /ˈprɒdʌkt/\r
    n. 产品，制品；生成物；结果，积\r
\r
50. **production** /prəˈdʌkʃn/\r
    n. 生产，制造；产量；产生，分泌\r
\r
51. **productive** /prəˈdʌktɪv/\r
    adj. 多产的；生产的；有成效的\r
\r
52. **productivity** /ˌprɒdʌkˈtɪvəti/\r
    n. 生产力，生产率\r
\r
53. **profession** /prəˈfeʃn/\r
    n. 职业，业内人士；公开表明\r
\r
54. **professional** /prəˈfeʃənl/\r
    adj. 职业的，专业的\r
    n. 专业人士；职业运动员；内行\r
\r
55. **expand** /ɪkˈspænd/\r
    vi. vt. 扩充，扩大，扩展(业务)\r
    vi. 详谈，详述\r
\r
56. **expansion** /ɪkˈspænʃn/\r
    n. 扩张，扩充，扩大\r
\r
57. **expect** /ɪkˈspekt/\r
    vt. 预计，盼望；要求，期望\r
\r
58. **expectation** /ˌekspekˈteɪʃn/\r
    n. 预料，预期；期望，指望\r
\r
59. **experience** /ɪkˈspɪəriəns/\r
    vt. 经历，阅历，(体会)经历\r
    n. 经历，感受，体验\r
\r
60. **experiment** /ɪkˈsperɪmənt/\r
    n. 实验，试验，尝试，实践\r
    vi. (用…)做实验，进行试验，试用\r
\r
61. **expert** /ˈekspɜːt/\r
    n. 专家，行家\r
    adj. 熟练的，专家的，内行的\r
\r
62. **expertise** /ˌekspɜːˈtiːz/\r
    n. 专门技术，专门知识，专长\r
\r
63. **expire** /ɪkˈspaɪər/\r
    vi. (协议等)到期，失效；死亡\r
\r
64. **instinct** /ˈɪnstɪŋkt/\r
    n. 本能，天性；直觉\r
\r
65. **institute** /ˈɪnstɪtjuːt/\r
    n. 机构，协会，研究院，学院\r
    vt. 建立(体系等)；制定(规章等)\r
\r
66. **institution** /ˌɪnstɪˈtjuːʃn/\r
    n. 机构，收容机构；习俗，制度\r
\r
67. **insurance** /ɪnˈʃʊərəns/\r
    n. 保险(业)；保险费；预防措施\r
\r
68. **insure** /ɪnˈʃʊər/\r
    vt. 给…上保险；提供保险；确保\r
\r
69. **integral** /ˈɪntɪɡrəl/\r
    adj. 必不可少的；作为组成部分的\r
\r
70. **integrate** /ˈɪntɪɡreɪt/\r
    vi. vt. (使)合并；(使)融入群体\r
\r
71. **integrity** /ɪnˈteɡrəti/\r
    n. 正直，诚实；完整，完全\r
\r
`,Ou=`# 2027考研英语红宝书\r
## 必考词Unit24 61词\r
\r
1.  **curious** /ˈkjʊriəs/\r
    adj. 好奇的；稀奇古怪的，不寻常的\r
\r
2.  **curiosity** /ˌkjʊriˈɒsəti/\r
    n. 好奇心；奇物，珍品\r
\r
3.  **currency** /ˈkʌrənsi/\r
    n. 通货，货币；通用，流传\r
\r
4.  **current** /ˈkʌrənt/\r
    adj. 当前的，现在的，流行的\r
    n. 水流，气流；电流；思潮\r
\r
5.  **cut** /kʌt/\r
    vt. 切，割，剪；削减；删节\r
    vi. 可切割；停止拍片\r
    n. 伤口；开口；削减；理发；删节\r
\r
6.  **cumulative** /ˈkjuːmjələtɪv/\r
    adj. 累加的，积累的\r
\r
7.  **average** /ˈævərɪdʒ/\r
    adj. 平均的；(数量)中等的；普通的\r
    n. 平均水平；平均数，均值\r
    vt. 平均数是\r
    vt. vi. 计算出…的平均数\r
\r
8.  **avoid** /əˈvɔɪd/\r
    vt. 避免；回避；避免撞上\r
\r
9.  **awake** /əˈweɪk/\r
    adj. 醒着的，没睡着的\r
    vi. vt. (使)醒来；唤起(情感或记忆)\r
\r
10. **award** /əˈwɔːrd/\r
    n. 奖，奖品；(赔偿)裁定额\r
    vt. 授予，奖励\r
\r
11. **aware** /əˈwer/\r
    adj. 知道的；注意到的；有…意识的\r
\r
12. **awkward** /ˈɔːkwərd/\r
    adj. 尴尬的；难处理的；笨拙的\r
\r
13. **extravagant** /ɪkˈstrævəɡənt/\r
    adj. 奢侈的，铺张浪费的；离谱的\r
\r
14. **extreme** /ɪkˈstriːm/\r
    adj. 极度的；严重的；偏激的\r
    n. 极端，极度\r
\r
15. **invisible** /ɪnˈvɪzəbl/\r
    adj. 看不见的，隐形的\r
\r
16. **invoke** /ɪnˈvəʊk/\r
    vt. 援引(法律)；唤起；引用\r
\r
17. **involve** /ɪnˈvɑːlv/\r
    vt. 需要，包含；牵涉，涉及；使参与\r
\r
18. **issue** /ˈɪʃuː/\r
    n. 议题，问题；一期，期号\r
    vt. 宣布，发放，签发；出版，发行\r
\r
19. **item** /ˈaɪtəm/\r
    n. 一件(物品)；项目；一篇报道\r
\r
20. **overturn** /ˌəʊvərˈtɜːrn/\r
    vi. vt. (使)翻倒，打翻\r
    vt. 推翻(判决等)；颠覆(政府等)\r
\r
21. **overwhelm** /ˌəʊvərˈwelm/\r
    vt. 使不知所措；击败；压垮；淹没\r
\r
22. **purchase** /ˈpɜːrtʃəs/\r
    vt. 购买，采购\r
    n. 购买行为；所购之物；握紧\r
\r
23. **pursue** /pərˈsuː/\r
    vt. 追求，继续进行；追究；追赶\r
\r
24. **pursuit** /pərˈsuːt/\r
    n. 追求；追赶；爱好，消遣\r
\r
25. **puzzle** /ˈpʌzl/\r
    n. 谜，智力游戏，拼图；不解之谜\r
    vt. 迷惑，使困惑\r
\r
26. **reverse** /rɪˈvɜːrs/\r
    vt. 逆转，扭转；撤销，推翻；使反转\r
    vi. 倒车\r
    n. 相反的情况；背面；倒挡；损失\r
    adj. 相反的，反面的\r
\r
27. **review** /rɪˈvjuː/\r
    n. 评论；审查；回顾；复习\r
    vt. 写评论；审查；回顾；复习\r
\r
28. **revise** /rɪˈvaɪz/\r
    vt. 改变(想法)；修改，修订\r
    vi. vt. 复习\r
\r
29. **revive** /rɪˈvaɪv/\r
    vt. vi. (使)苏醒；(使)复活\r
    vt. 使…复兴；重新上演\r
\r
30. **reward** /rɪˈwɔːrd/\r
    n. 奖赏，回报；赏金\r
    vt. 奖励，酬谢\r
\r
31. **rich** /rɪtʃ/\r
    adj. 富裕的；丰富多彩的；肥沃的\r
    adj. 大量含有…的\r
\r
32. **rise** /raɪz/\r
    vi. 上升，提高；起床，起立；耸立\r
    n. 上升，提高；加薪；增强\r
\r
33. **risk** /rɪsk/\r
    n. 风险，危险；危险的事(或人)\r
    vt. 使…冒风险；冒…的风险\r
\r
34. **rival** /ˈraɪvl/\r
    n. 竞争者，对手\r
    vt. 能与…媲美\r
\r
35. **role** /rəʊl/\r
    n. 作用，职能；角色\r
\r
36. **roll** /rəʊl/\r
    vi. vt. 翻滚；原地打转；翻身；移动，滚动\r
    vt. 把…卷起来；使平坦；裹起来\r
    n. 卷，卷轴；一管；面包条；名单\r
\r
37. **root** /ruːt/\r
    n. 根；根茎；根源；起源\r
    vi. vt. (使)生根，起源\r
    vi. 翻找\r
\r
38. **route** /ruːt/\r
    n. 路线，路途；途径，渠道\r
    vt. 按某路线发送\r
\r
39. **routine** /ruːˈtiːn/\r
    n. 惯例，常规；(演出的)一套动作\r
    adj. 常规的，例行公事的；乏味的\r
\r
40. **row** /rəʊ/\r
    n. 一排，一行，一列；吵架，争议\r
    vi. vt. 划船\r
\r
41. **rule** /ruːl/\r
    n. 规则，建议；定律；统治；常规\r
    vt. vi. 控制，统治；裁定，判决\r
\r
42. **ruler** /ˈruːlər/\r
    n. 直尺，尺子；统治者\r
\r
43. **surname** /ˈsɜːrneɪm/\r
    n. 姓\r
\r
44. **surpass** /sərˈpæs/\r
    vt. 超过，胜过\r
\r
45. **surplus** /ˈsɜːrpləs/\r
    n. 过剩，过剩量；盈余；顺差\r
    adj. 过剩的，剩余的\r
\r
46. **surprise** /sərˈpraɪz/\r
    n. 意想不到的事情；惊奇\r
    vt. 使惊奇；使感到意外\r
\r
47. **survey** /ˈsɜːrveɪ/\r
    n. 调查，勘测；概述\r
    vt. 做调查；审视；勘测；概述\r
\r
48. **surveillance** /sɜːrˈveɪləns/\r
    n. (对嫌疑人或犯罪场所的)监视\r
\r
49. **survival** /sərˈvaɪvl/\r
    n. 幸存，生存；残存物\r
\r
50. **survive** /sərˈvaɪv/\r
    vi. vt. 幸存；艰难渡过\r
    vi. 继续维持生活；保存下来\r
    vt. 比…活得久\r
\r
51. **susceptible** /səˈseptəbl/\r
    adj. 易受影响的；易患病的；敏感的\r
\r
52. **suspend** /səˈspend/\r
    vt. 暂停，中止；使停职或停学\r
    vt. 延缓；悬，吊；悬浮\r
\r
53. **suspect** /səˈspekt/\r
    vt. 怀疑，猜想\r
    adj. 怀疑的，可疑的\r
\r
54. **suspicion** /səˈspɪʃn/\r
    n. 怀疑；嫌；猜疑；猜想，预感\r
\r
55. **suspicious** /səˈspɪʃəs/\r
    adj. 觉得可疑的；可疑的\r
\r
56. **sustain** /səˈsteɪn/\r
    vt. 保持，维持；遭受；支撑；认可\r
\r
57. **swarm** /swɔːrm/\r
    n. 一大群(昆虫或人)\r
    vi. 成群移动；涌向，蜂拥\r
\r
58. **swear** /swer/\r
    vi. 咒骂，诅咒；说脏话\r
    vt. 发誓；肯定地说；使起誓\r
    vi. vt. 发誓，郑重承诺\r
\r
59. **swell** /swel/\r
    vi. (使)变得更响；(使)充满(激情)；变大\r
    vt. (使)增加，扩大\r
    n. 海浪的涌动；隆起；增加\r
    adj. 很愉快的；质量好的\r
\r
60. **swing** /swɪŋ/\r
    vi. vt. (使)摆动；(使)转弯；朝…打去\r
    vi. vt. (使)改变(意见等)\r
    vt. (不正当地)搞到，办成\r
    n. 摆动；改变；秋千；挥杆动作\r
\r
61. **switch** /swɪtʃ/\r
    n. (电路的)开关；骤变，突变\r
    vt. vi. (使)改变；转变，突变；调换\r
    vt. 交换；对调\r
\r
`,ku=`# 2027考研英语红宝书\r
## 必考词Unit25 67词\r
\r
1.  **project** /ˈprɑːdʒekt/\r
    n. 项目，方案，专题研究；住宅区\r
    vt. 规划；预测；投射；展现；投掷\r
    vi. 突出，伸出\r
\r
2.  **profit** /ˈprɑːfɪt/\r
    n. 利润，收益；益处，好处\r
    vi. vt. 得益(于)，对…有益\r
\r
3.  **profitable** /ˈprɑːfɪtəbl/\r
    adj. 盈利的，有利润的；有益的\r
\r
4.  **profound** /prəˈfaʊnd/\r
    adj. 深远的；知识渊博的；玄奥的\r
\r
5.  **program** /ˈproʊɡræm/\r
    n. 计划，程序；节目，课程\r
    vt. vi. 编写程序\r
    vt. 使…有倾向；预设\r
\r
6.  **progressive** /prəˈɡresɪv/\r
    adj. 进步的；逐步发生的；进行式的\r
    n. 进步人士，开明人士\r
\r
7.  **prohibit** /prəˈhɪbɪt/\r
    vt. 禁止；使不可能\r
\r
8.  **prolong** /prəˈlɔːŋ/\r
    vt. 延长，拖延\r
\r
9.  **prominent** /ˈprɑːmɪnənt/\r
    adj. 杰出的，重要的；显眼的\r
\r
10. **promise** /ˈprɑːmɪs/\r
    vt. vi. 承诺，保证\r
    vt. 使很可能，预示\r
    n. 诺言；前途，潜质；迹象\r
\r
11. **promising** /ˈprɑːmɪsɪŋ/\r
    adj. 大有希望的，很有前途的\r
\r
12. **promote** /prəˈmoʊt/\r
    vt. 促进；推销；晋升；提倡\r
\r
13. **prompt** /prɑːmpt/\r
    vt. 促使；引起，激起；提示\r
    adj. 迅速的，立即的；准时的\r
    n. 提示符\r
    adv. 准时地\r
\r
14. **proof** /pruːf/\r
    n. 证据；证实；求证；校样\r
    adj. 能防范的，抗…的\r
    suff. 防…的，抗…的\r
    vt. 校对\r
\r
15. **reservation** /ˌrezərˈveɪʃn/\r
    n. 预订，预约；保留意见；保留地\r
\r
16. **reserve** /rɪˈzɜːrv/\r
    vt. 预订，预约；预留；保留(权利)\r
    n. 储备(量)；自然保护区；内向\r
\r
17. **resist** /rɪˈzɪst/\r
    vt. vi. 按捺，克制；抵抗，抵制；抵御\r
    vt. 经得起，抗(伤害)\r
\r
18. **resistance** /rɪˈzɪstəns/\r
    n. 抵制；反抗；抵抗力，阻力\r
\r
19. **resistant** /rɪˈzɪstənt/\r
    adj. 有抵抗力的；反对的，抵制的\r
    suff. 抗…的，耐…的\r
\r
20. **resilient** /rɪˈzɪliənt/\r
    adj. 坚韧的；有适应力的；有弹性的\r
\r
21. **resort** /rɪˈzɔːrt/\r
    n. 度假胜地；采用的方法\r
    vi. 诉诸，求助\r
\r
22. **resource** /ˈriːsɔːrs/\r
    n. 资源，物力；资料；机敏\r
    vt. 向…提供资金(或设备)\r
\r
23. **respect** /rɪˈspekt/\r
    n. 尊敬，尊重；方面\r
    vt. 尊敬，尊重；遵守\r
\r
24. **respective** /rɪˈspektɪv/\r
    adj. 分别的，各自的\r
\r
25. **respond** /rɪˈspɑːnd/\r
    vi. vt. 回复，回答\r
    vi. 作出反应；有良好反应\r
\r
26. **response** /rɪˈspɑːns/\r
    n. 回答，答复；反应，回应\r
\r
27. **responsibility** /rɪˌspɑːnsəˈbɪləti/\r
    n. 责任\r
\r
28. **responsible** /rɪˈspɑːnsəbl/\r
    adj. 负责的；应担责的；作为原因的\r
\r
29. **succeed** /səkˈsiːd/\r
    vi. 成功\r
    vi. vt. 接替，继任，继承；随后出现\r
\r
30. **success** /səkˈses/\r
    n. 成功，胜利；成功的人(或事物)\r
\r
31. **successful** /səkˈsesfl/\r
    adj. 成功的，有成效的；有成就的\r
\r
32. **succession** /səkˈseʃn/\r
    n. 一连串；继承，继承权\r
\r
33. **successive** /səkˈsesɪv/\r
    adj. 连续的，接连的，相继的\r
\r
34. **successor** /səkˈsesər/\r
    n. 接任者，继承者\r
\r
35. **suck** /sʌk/\r
    vt. 吮，吸，抽(空气等)；把…卷入\r
    vi. 含在嘴里吮\r
    vi. 糟糕透顶，很差\r
\r
36. **sue** /suː/\r
    vt. vi. 控告，起诉\r
    vi. (尤指在法庭上)提出请求\r
\r
37. **suffer** /ˈsʌfər/\r
    vi. vt. 遭受，蒙受，受苦\r
    vi. 变差，变糟\r
\r
38. **suffice** /səˈfaɪs/\r
    vi. 足够，充足\r
\r
39. **sufficient** /səˈfɪʃnt/\r
    adj. 充足的，足够的\r
\r
40. **suggest** /səˈdʒest/\r
    vt. 建议，提议，推荐；表明，暗示\r
\r
41. **suggestion** /səˈdʒestʃən/\r
    n. 建议，提议；迹象；微量；暗示\r
\r
42. **suicide** /ˈsuːɪsaɪd/\r
    n. 自杀，自杀性行为，自杀者\r
\r
43. **suit** /suːt/\r
    n. 西服，套装；诉讼，起诉\r
    vt. 适合，相配，合身\r
\r
44. **suitable** /ˈsuːtəbl/\r
    adj. 合适的，适宜的\r
\r
45. **super** /ˈsuːpər/\r
    adj. 极好的，很棒的\r
    adv. 超级，格外\r
    pref. 超级\r
    n. (大楼的)看管人\r
\r
46. **superb** /suːˈpɜːrb/\r
    adj. 极好的，卓越的\r
\r
47. **superficial** /ˌsuːpərˈfɪʃl/\r
    adj. 肤浅的；表面的；表皮的\r
\r
48. **superfluous** /suːˈpɜːrfluəs/\r
    adj. 过剩的，过多的，多余的\r
\r
49. **superior** /suːˈpɪriər/\r
    adj. 更好的；级别更高的；高傲的\r
    n. 上级，上司\r
\r
50. **superiority** /suːˌpɪriˈɔːrəti/\r
    n. 优越，优势；优越感，骄傲自大\r
\r
51. **supervise** /ˈsuːpərvaɪz/\r
    vt. vi. 监督，管理，指导，主管\r
\r
52. **trigger** /ˈtrɪɡər/\r
    n. 扳机；触发器；起因，诱因\r
    vt. 引起；触发\r
\r
53. **triumph** /ˈtraɪʌmf/\r
    n. 成功，胜利；胜利的喜悦；典范\r
    vi. 成功，获胜\r
\r
54. **assure** /əˈʃʊr/\r
    vt. 向…保证；弄清楚；确保\r
\r
55. **assurance** /əˈʃʊrəns/\r
    n. 担保，保证；把握；(人寿)保险\r
\r
56. **astonish** /əˈstɑːnɪʃ/\r
    vt. 使吃惊，使惊讶\r
\r
57. **atmosphere** /ˈætməsfɪr/\r
    n. 气氛；大气层；空气；情调\r
\r
58. **council** /ˈkaʊnsl/\r
    n. 地方议会；委员会\r
\r
59. **counsel** /ˈkaʊnsl/\r
    n. 忠告，建议；辩护律师\r
    vt. 建议，劝告；提供专业咨询\r
\r
60. **drama** /ˈdrɑːmə/\r
    n. 戏，剧；戏剧艺术；戏剧性事件\r
\r
61. **dramatic** /drəˈmætɪk/\r
    adj. 戏剧的；激动人心的；戏剧性的\r
\r
62. **exploit** /ɪkˈsplɔɪt/\r
    vt. 剥削；利用；开采\r
    vi. 英勇的行为\r
\r
63. **explore** /ɪkˈsplɔːr/\r
    vt. vi. 探索，探测\r
    vt. 探究，探讨\r
\r
64. **intellectual** /ˌɪntəˈlektʃuəl/\r
    adj. 智力的；脑力的；有才智的\r
    n. 知识分子\r
\r
65. **intelligence** /ɪnˈtelɪdʒəns/\r
    n. 智力，理解力；情报，情报机构\r
\r
66. **intelligent** /ɪnˈtelɪdʒənt/\r
    adj. 聪明的；有智力的；智能的\r
\r
67. **intelligible** /ɪnˈtelɪdʒəbl/\r
    adj. 可理解的，明白易懂的\r
\r
`,Au=`# 2027考研英语红宝书\r
## 必考词Unit26 66词\r
\r
1.  **polish** /ˈpɑːlɪʃ/\r
    vt. vi. 擦光，抛光\r
    vt. 改善，润色\r
    n. 抛光剂，亮光剂；抛光，擦亮\r
\r
2.  **point** /pɔɪnt/\r
    n. 观点；重点；特点；时刻；得分；地点；尖端；意图，用处\r
    vt. vi. 指向，瞄准\r
    vi. 对着，朝向\r
\r
3.  **propel** /prəˈpel/\r
    vt. 推动，激励；推进，推\r
\r
4.  **proper** /ˈprɑːpər/\r
    adj. 恰当的；像样的；得体的\r
\r
5.  **property** /ˈprɑːpərti/\r
    n. 财产，所有物；房地产；特性\r
\r
6.  **proportion** /prəˈpɔːrʃn/\r
    n. 部分，份额；比例；匀称；规模\r
\r
7.  **proposal** /prəˈpoʊzl/\r
    n. 提议，提案；求婚\r
\r
8.  **propose** /prəˈpoʊz/\r
    vt. 提议；打算；提出(某观点等)\r
    vi. vt. 求婚\r
\r
9.  **proposition** /ˌprɑːpəˈzɪʃn/\r
    n. 提议；主张；待处理的问题\r
\r
10. **prospect** /ˈprɑːspekt/\r
    n. 可能性；展望；前景，前途\r
    vi. 勘探，探矿\r
\r
11. **prospective** /prəˈspektɪv/\r
    adj. 潜在的；可能发生的，预期的\r
\r
12. **protocol** /ˈproʊtəkɔːl/\r
    n. 礼节，礼仪；协议；治疗方案\r
\r
13. **proximate** /ˈprɑːksɪmət/\r
    adj. (原因)直接的；最接近的\r
\r
14. **restore** /rɪˈstɔːr/\r
    vt. 恢复；修复，使复原；归还\r
\r
15. **restrain** /rɪˈstreɪn/\r
    vt. 制止，阻止；克制，抑制\r
\r
16. **restraint** /rɪˈstreɪnt/\r
    n. 克制，抑制；限制；安全装置\r
\r
17. **restrict** /rɪˈstrɪkt/\r
    vt. 限制，约束\r
\r
18. **attach** /əˈtætʃ/\r
    vt. 附上，系上，贴上；认为…具有\r
    vi. vt. (使)与…有关联\r
\r
19. **attack** /əˈtæk/\r
    n. 攻击，袭击；抨击；(疾病)发作\r
    vi. vt. 攻击，袭击\r
    vt. 抨击；破坏，侵蚀；解决(问题)\r
    vi. (在足球等比赛中)进攻\r
\r
20. **attain** /əˈteɪn/\r
    vt. 获得，赢得；达到\r
\r
21. **attempt** /əˈtempt/\r
    vt. 尝试，试图\r
    n. 尝试，试图；谋杀企图\r
\r
22. **attend** /əˈtend/\r
    vi. vt. 出席，参加\r
    vt. 去(学校等)；陪同；伴随\r
    vi. 注意，专心；照顾\r
\r
23. **attention** /əˈtenʃn/\r
    n. 注意，关注；照料；殷勤；立正\r
    int. 注意，立正\r
\r
24. **attitude** /ˈætɪtuːd/\r
    n. 态度，看法；我行我素的作风\r
\r
25. **attribute** /əˈtrɪbjuːt/\r
    vt. 把…归因于；认为是…所作\r
    n. 特性，属性\r
\r
26. **court** /kɔːrt/\r
    n. 法庭；出庭人员；球场；宫廷\r
    vt. 讨好；试图获得；招致；求爱\r
    vi. (男女)恋爱\r
\r
27. **courtesy** /ˈkɜːrtəsi/\r
    n. 谦恭有礼的举止，礼貌\r
    adj. 可免费使用的\r
\r
28. **cover** /ˈkʌvər/\r
    vt. 遮盖；覆盖；包括；够付；报道\r
    vi. 遮掩，敷衍\r
    n. 覆盖物，封面，封皮\r
\r
29. **create** /kriˈeɪt/\r
    vt. 创造，创作，创建；授予，册封\r
\r
30. **creative** /kriˈeɪtɪv/\r
    adj. 创造性的，有创造力的\r
    n. 创意人员，创作者\r
\r
31. **credit** /ˈkredɪt/\r
    n. 信贷；赞扬；信誉；学分；结余\r
    vt. 把钱存入(账户)；把…归功于\r
\r
32. **crisis** /ˈkraɪsɪs/\r
    n. 危机；病危期；危急关头\r
\r
33. **drive** /draɪv/\r
    vi. vt. 开车，驾驶\r
    vt. 驾车送(人)；驱动；迫使；驱赶\r
    n. 驱车旅行；车道；本能需求；(为达到某目的的)努力，运动\r
\r
34. **drug** /drʌɡ/\r
    n. 毒品；药物\r
    vt. 给…服麻醉剂\r
\r
35. **export** /ɪkˈspɔːrt/\r
    vt. vi. 出口，输出\r
    n. 出口，输出；出口商品\r
\r
36. **expose** /ɪkˈspoʊz/\r
    vt. 显露；揭露；使遭受；使体验\r
\r
37. **exposure** /ɪkˈspoʊʒər/\r
    n. 暴露；揭露；接触；曝光\r
\r
38. **express** /ɪkˈspres/\r
    vt. 表达，表现；显而易见；代表\r
    adj. 快速的，快递的；明确的\r
    n. 特快列车；快递服务\r
\r
39. **expression** /ɪkˈspreʃn/\r
    n. 表达；表情，神情；措词，说法\r
\r
40. **extend** /ɪkˈstend/\r
    vt. 延长；扩大；舒展；提供\r
    vi. 延伸，延续；适用于；使达到\r
\r
41. **extension** /ɪkˈstenʃn/\r
    n. 扩大；延伸；扩建部分；延期；电话分机\r
\r
42. **extensive** /ɪkˈstensɪv/\r
    adj. 广阔的；大量的；广泛的\r
\r
43. **extent** /ɪkˈstent/\r
    n. 程度，地步；范围，面积\r
\r
44. **human** /ˈhjuːmən/\r
    n. 人，人类\r
    adj. 人的，人类的；有人情味的\r
\r
45. **humanity** /hjuːˈmænəti/\r
    n. 人类；人性，人道；人文学科\r
\r
46. **humble** /ˈhʌmbl/\r
    adj. 谦逊的；卑微的；不起眼的\r
    vt. 使感到卑微；低声下气\r
\r
47. **intend** /ɪnˈtend/\r
    vi. vt. 计划，打算，想要\r
    vt. 意指，意思是\r
\r
48. **intention** /ɪnˈtenʃn/\r
    n. 意图，打算\r
\r
49. **intense** /ɪnˈtens/\r
    adj. 强烈的；紧张激烈的；热切的\r
\r
50. **intensity** /ɪnˈtensəti/\r
    n. 强烈，剧烈；(光、声等的)强度\r
\r
51. **intensive** /ɪnˈtensɪv/\r
    adj. 密集的，强化的；(农业)集约的\r
\r
52. **interact** /ˌɪntərˈækt/\r
    vi. 互动，交流；相互作用\r
\r
53. **intercourse** /ˈɪntərkɔːrs/\r
    n. 性交；交流，交往，交际\r
\r
54. **interest** /ˈɪntrəst/\r
    n. 兴趣，趣味；爱好；利息；利益\r
    vt. 使感兴趣，使关注\r
\r
55. **interior** /ɪnˈtɪriər/\r
    adj. 内部的；内地的；内政的\r
    n. 内部；内地；内陆；内政\r
\r
56. **internal** /ɪnˈtɜːrnl/\r
    adj. 国内的；内部的；体内的\r
\r
57. **international** /ˌɪntərˈnæʃnəl/\r
    adj. 国际的\r
    n. 国际体育比赛\r
\r
58. **interpret** /ɪnˈtɜːrprɪt/\r
    vt. 解释，说明；把…理解为\r
    vi. vt. 口译\r
\r
59. **lose** /luːz/\r
    vt. 丢失，丧失；被夺去；使不理\r
    vt. 输掉；输掉比赛；(使)失去\r
    vt. 输掉(比赛等)；(使)失去\r
\r
60. **loss** /lɔːs/\r
    n. 丧失，损失；亏损；逝世；失利\r
\r
61. **low** /loʊ/\r
    adj. 低的；低声的；低劣的\r
    adv. 低，低于通常水平；低声地\r
    n. 低点；低水平；低谷\r
\r
62. **lower** /ˈloʊər/\r
    adj. 下面的，下方的；在底部的\r
    vt. 把…放低，使下降；降低\r
    vi. 减少，变小；降低\r
    vi. (天空或云)变昏暗\r
\r
63. **lucrative** /ˈluːkrətɪv/\r
    adj. 获利多的，赚钱的\r
\r
64. **nerve** /nɜːrv/\r
    n. 神经；紧张，焦虑；勇气，厚颜\r
\r
65. **nervous** /ˈnɜːrvəs/\r
    adj. 紧张的；易紧张的；神经系统的\r
\r
66. **nevertheless** /ˌnevərðəˈles/\r
    adv. 然而，尽管如此\r
\r
`,ju=`# 2027考研英语红宝书\r
## 必考词Unit1 68词\r
\r
1.  **radiate** /ˈreɪdieɪt/\r
    vi. 散发，流露；发出(光、辐射等)\r
    vi. 呈辐射状发散(或伸展)\r
\r
2.  **radiant** /ˈreɪdiənt/\r
    adj. 容光焕发的，灿烂的；辐射的\r
\r
3.  **radical** /ˈrædɪkl/\r
    adj. 根本的，彻底的；激进的\r
    n. 激进分子；游离基\r
\r
4.  **object** /ˈɒbdʒekt/\r
    n. 物体，物品；目标；对象；宾语\r
    vi. 不同意，反对\r
    vt. 提出…作为反对的理由\r
\r
5.  **objective** /əbˈdʒektɪv/\r
    n. 目标，目的\r
    adj. 客观的，不带个人感情的\r
\r
6.  **objection** /əbˈdʒekʃn/\r
    n. 反对，异议；反对的理由\r
\r
7.  **obligation** /ˌɒblɪˈɡeɪʃn/\r
    n. 义务，责任\r
\r
8.  **oblige** /əˈblaɪdʒ/\r
    vt. (因法律或义务)强迫，迫使\r
    vt. 帮忙，效劳\r
\r
9.  **obscure** /əbˈskjʊə(r)/\r
    adj. 鲜为人知的；难以理解的\r
    vt. 掩盖，使模糊，使隐晦\r
\r
10. **observation** /ˌɒbzəˈveɪʃn/\r
    n. 观察，观测；评论，评述\r
\r
11. **observe** /əbˈzɜːv/\r
    vt. vi. 观察，注视\r
    vt. 注意到；遵守；庆祝；评论\r
\r
12. **obsession** /əbˈseʃn/\r
    n. 痴迷，着魔\r
\r
13. **obsolete** /ˈɒbsəliːt/\r
    adj. 淘汰的，废弃的，过时的\r
\r
14. **obtain** /əbˈteɪn/\r
    vt. 获得，实现\r
    vi. 存在，流行\r
\r
15. **obvious** /ˈɒbviəs/\r
    adj. 明显的，显然的；无新意的\r
\r
16. **ideal** /aɪˈdiːəl/\r
    adj. 理想的，最佳的\r
    n. 理想；理想典范，完美典型\r
\r
17. **ideology** /ˌaɪdiˈɒlədʒi/\r
    n. 思想体系，意识形态\r
\r
18. **identical** /aɪˈdentɪkl/\r
    adj. 完全相同的，同样的\r
\r
19. **identification** /aɪˌdentɪfɪˈkeɪʃn/\r
    n. 确认，识别；身份证明；确定\r
\r
20. **identify** /aɪˈdentɪfaɪ/\r
    vt. 认出，确认，识别；发现，查明\r
    vi. 显示身份\r
\r
21. **identity** /aɪˈdentəti/\r
    n. 身份，本体；特性，个性；相同\r
\r
22. **journal** /ˈdʒɜːnl/\r
    n. 期刊，杂志；报纸；日志，日记\r
\r
23. **journalist** /ˈdʒɜːnəlɪst/\r
    n. 记者，新闻工作者\r
\r
24. **journey** /ˈdʒɜːni/\r
    n. 旅行，旅程\r
    vi. (长途)旅行\r
\r
25. **judge** /dʒʌdʒ/\r
    n. 法官；裁判员，鉴定人\r
    vi. vt. 判断，担任裁判，评价，指责\r
    vt. 估计，猜测；审理，判决\r
\r
26. **judgement** /ˈdʒʌdʒmənt/\r
    n. 看法，评价；判断力；判决\r
\r
27. **judicial** /dʒuˈdɪʃl/\r
    adj. 审判的，司法的，法庭的\r
\r
28. **jury** /ˈdʒʊəri/\r
    n. 陪审团；裁判委员会\r
\r
29. **jurisdiction** /ˌdʒʊərɪsˈdɪkʃn/\r
    n. 司法权，管辖权；管辖区域\r
\r
30. **justice** /ˈdʒʌstɪs/\r
    n. 公平，正义；法官；司法制度\r
\r
31. **justify** /ˈdʒʌstɪfaɪ/\r
    vt. 证明…有理；为…辩解\r
\r
32. **label** /ˈleɪbl/\r
    n. 标签，标牌；(不恰当的)称谓\r
    vt. 给…贴标签；(不公地)把…称为\r
\r
33. **lag** /læɡ/\r
    vi. 落后，滞后，缓慢移动\r
    n. (两个事件)相隔的时间\r
\r
34. **largely** /ˈlɑːdʒli/\r
    adv. 在很大程度上，主要地，大半地\r
\r
35. **lateral** /ˈlætərəl/\r
    adj. 侧面的，横向的，侧向的\r
\r
36. **latter** /ˈlætə(r)/\r
    adj. 后者的；后期的\r
\r
37. **law** /lɔː/\r
    n. 法律，法规；法学；警方；法则\r
\r
38. **lawsuit** /ˈlɔːsuːt/\r
    n. 诉讼，官司\r
\r
39. **magnitude** /ˈmæɡnɪtjuːd/\r
    n. 巨大，重要性；星等，震级\r
\r
40. **magnify** /ˈmæɡnɪfaɪ/\r
    vt. 放大；使(问题等)加重，夸大\r
\r
41. **magnificent** /mæɡˈnɪfɪsnt/\r
    adj. 宏伟的，令人印象深刻的\r
\r
42. **maintain** /meɪnˈteɪn/\r
    vt. 维持；维修，保养；坚称；供养\r
\r
43. **maintenance** /ˈmeɪntənəns/\r
    n. 维护，养护；维持；赡养费\r
\r
44. **major** /ˈmeɪdʒə(r)/\r
    adj. 主要的，重要的，大的；大调的\r
    n. 少校；专业；…专业的学生\r
    vi. 主修\r
\r
45. **majority** /məˈdʒɒrəti/\r
    n. 大部分，大多数；多数票\r
\r
46. **make** /meɪk/\r
    vt. 做，出产；引发，使得；强迫\r
    vi. 成为；合计\r
    n. 牌子，品牌\r
\r
47. **theme** /θiːm/\r
    n. 主题，主旋律；主题音乐\r
    adj. 有特定主题的\r
\r
48. **theory** /ˈθɪəri/\r
    n. 理论，学说；理论基础；观点\r
\r
49. **theoretical** /ˌθɪəˈretɪkl/\r
    adj. 理论的，理论上的；假设性的\r
\r
50. **therapy** /ˈθerəpi/\r
    n. 疗法，治疗；心理治疗\r
\r
51. **qualification** /ˌkwɒlɪfɪˈkeɪʃn/\r
    n. 资格证，学历；资历；合格；资格\r
\r
52. **qualify** /ˈkwɒlɪfaɪ/\r
    vt. 使合格，使具备资格\r
    vi. 取得资格(或学历)，合格\r
    vi. vt. (使)有资格，(使)有权；配得上\r
\r
53. **quality** /ˈkwɒləti/\r
    n. 质量，品质；优质；品德，特性\r
    adj. 优质的，高质量的\r
\r
54. **qualitative** /ˈkwɒlɪtətɪv/\r
    adj. 质量的，定性的，性质的\r
\r
55. **safeguard** /ˈseɪfɡɑːd/\r
    vt. 保护，保障；捍卫\r
    n. 安全设施，保护措施\r
\r
56. **safety** /ˈseɪfti/\r
    n. 安全；安全场所；保险栓\r
\r
57. **savage** /ˈsævɪdʒ/\r
    adj. 凶恶的；猛烈抨击的；野蛮的\r
    n. 野蛮人；残暴的人\r
    vt. 凶猛地攻击；激烈抨击\r
\r
58. **save** /seɪv/\r
    vt. 救，救助；收集；保留；避免\r
    vi. vt. 储蓄，节省，保存\r
    prep. conj. 除了\r
\r
59. **saving** /ˈseɪvɪŋ/\r
    n. 存款；节省下来的钱(或物)\r
    vt. 拯救，节约\r
\r
60. **scale** /skeɪl/\r
    n. 规模，等级；刻度；秤；鳞片\r
    n. 比例尺；音阶\r
    vt. 攀登；去鳞；改变…的大小\r
\r
61. **scene** /siːn/\r
    n. 现场；场面；景色；圈子\r
\r
62. **scenery** /ˈsiːnəri/\r
    n. 风景，景色；舞台布景\r
\r
63. **pace** /peɪs/\r
    n. (移动)速度；步伐；节奏；一步\r
    vi. 踱步；缓慢地走来走去\r
    vt. 调整自己的工作节奏\r
\r
64. **panel** /ˈpænl/\r
    n. 专门小组；镶板；仪表盘\r
    n. (车身的)金属板条\r
    vt. (用镶板)将…镶嵌\r
\r
65. **panorama** /ˌpænəˈrɑːmə/\r
    n. 全景，全景图；全貌，概述\r
\r
66. **prove** /pruːv/\r
    vt. 证明，证实；展现出\r
    link. 证明是，被发现是\r
    vi. 发酵\r
\r
67. **provide** /prəˈvaɪd/\r
    vt. 提供；规定\r
\r
68. **provided** /prəˈvaɪdɪd/\r
    conj. 如果，只要，在…条件下`,Mu=`# 2027考研英语红宝书\r
## 必考词Unit10 77词\r
\r
1.  **choke** /tʃəʊk/\r
    vi. vt. (使)窒息，噎住；使哽咽\r
    vt. 掐死，勒死；阻塞，塞满\r
    vi. (因紧张而)失败，发挥失常\r
    n. 窒息，哽咽声\r
\r
2.  **chop** /tʃɒp/\r
    vt. 切碎，砍，劈；(大幅度地)削减\r
    n. 猪(或羊等)排，砍，劈；掌劈\r
\r
3.  **circumstance** /ˈsɜːkəmstæns/\r
    n. 情况，情形；生活状况；客观环境\r
\r
4.  **cite** /saɪt/\r
    vt. 引用(例子)；引述；传讯\r
\r
5.  **claim** /kleɪm/\r
    vt. 声称；要求拥有，认领；获得，夺去(生命)\r
    vi. 索要，索取\r
    n. 声称；所有权；要求，索赔\r
\r
6.  **clear** /klɪə(r)/\r
    adj. 清楚的，明显的；无疑的\r
    vt. 清理，清除，移走；使人离开\r
    vi. 变晴朗，变清澈；散去，消失\r
    vi. vt. 兑现(支票)；获利，净赚\r
\r
7.  **border** /ˈbɔːdə(r)/\r
    n. 边界，国界；镶边，狭长花坛\r
    vt. 与…接壤；沿…的边\r
\r
8.  **bore** /bɔː(r)/\r
    vt. 使厌烦\r
    vi. vt. 钻(孔)，挖(洞)\r
    vi. 盯着看\r
    n. 无趣的人，无聊的事；孔，口径\r
\r
9.  **born** /bɔːn/\r
    vi. 出生，出世；出现，形成\r
    adj. 天生的\r
\r
10. **bother** /ˈbɒðə(r)/\r
    vt. 使…烦恼，打扰\r
    vi. vt. 费心，费力，麻烦\r
    n. 麻烦，困难；令人烦恼的情况\r
\r
11. **acquire** /əˈkwaɪə(r)/\r
    vt. 获得(技能、习惯等)；购得，得到\r
\r
12. **acquisition** /ˌækwɪˈzɪʃn/\r
    n. 获得，习得；收购(物)；购得物\r
\r
13. **act** /ækt/\r
    n. 行为；法案；装样子；一幕\r
    vi. 行动；表现得；假装；充当\r
    vt. vi. 扮演\r
\r
14. **action** /ˈækʃn/\r
    n. 行动，措施；行为，诉讼；战斗\r
\r
15. **activate** /ˈæktɪveɪt/\r
    vt. 激活，启动\r
\r
16. **active** /ˈæktɪv/\r
    adj. 活跃的；积极的；有效的\r
\r
17. **activity** /ækˈtɪvəti/\r
    n. 活动；活跃\r
\r
18. **actual** /ˈæktʃuəl/\r
    adj. 真实的，实际的\r
\r
19. **acute** /əˈkjuːt/\r
    adj. 严重的，剧烈的；(疾病)急性的\r
    adj. (感官)灵敏的，敏锐的；锐角的\r
\r
20. **despise** /dɪˈspaɪz/\r
    vt. 鄙视，蔑视\r
\r
21. **despite** /dɪˈspaɪt/\r
    prep. 尽管，虽然\r
\r
22. **energetic** /ˌenəˈdʒetɪk/\r
    adj. (人)充满活力的；(活动)剧烈的\r
\r
23. **energy** /ˈenədʒi/\r
    n. 力气，活力；能源；精力；能量\r
\r
24. **enforce** /ɪnˈfɔːs/\r
    vt. 强制执行；迫使\r
\r
25. **engage** /ɪnˈɡeɪdʒ/\r
    vi. vt. (使)从事，参加；与…交战\r
    vi. 吸引；聘用\r
    vi. 与…建立密切关系\r
\r
26. **engagement** /ɪnˈɡeɪdʒmənt/\r
    n. 订婚；约定；交战；参加，卷入\r
\r
27. **fold** /fəʊld/\r
    vi. vt. 折叠，对折；包，裹\r
    vi. 倒闭，停演\r
    n. 褶，褶层，褶痕；羊圈\r
    n. 由…部分组成的；倍\r
\r
28. **folk** /fəʊk/\r
    n. 人们；各位；家属；民间音乐\r
    adj. 民间的，民俗的；流传民间的\r
\r
29. **follow** /ˈfɒləʊ/\r
    vi. vt. 跟随；在…后发生；理解，明白\r
    vt. 沿着，遵循，听从；追随，关注\r
\r
30. **following** /ˈfɒləʊɪŋ/\r
    adj. (时间上)接着的；下述的\r
    n. 拥护者，追随者；下述，下列\r
    prep. 在…之后，由于\r
\r
31. **force** /fɔːs/\r
    n. 武力；力；影响大的事物；部队\r
    vt. 强迫，迫使；强行移动；使发生\r
\r
32. **fore** /fɔː(r)/\r
    adj. 在前部的，在头部的\r
    adv. 向(或在)船头；向(或在)机头\r
\r
33. **forecast** /ˈfɔːkɑːst/\r
    n. 预测，预报\r
    vt. 预测，预报\r
\r
34. **foresee** /fɔːˈsiː/\r
    vt. 预见，预知，预料\r
\r
35. **forge** /fɔːdʒ/\r
    vt. 缔造，建立；伪造；锻造，制作\r
    vi. 稳步前进\r
    n. 铁匠铺；锻造炉；锻造车间\r
\r
36. **grim** /ɡrɪm/\r
    adj. 严肃的；令人沮丧的；阴森的\r
\r
37. **grasp** /ɡrɑːsp/\r
    vt. 抓紧，理解；理解(抓住)机会\r
    n. 紧抓，控制；理解\r
\r
38. **grip** /ɡrɪp/\r
    n. 紧握，紧抓；掌控，控制；理解\r
    vi. 紧握，紧抓\r
    vt. 使感兴趣；对…具有强烈影响\r
\r
39. **gross** /ɡrəʊs/\r
    adj. 总的，严重的；令人恶心的\r
    adv. 总共，全部的\r
    vt. (税前)总收入为\r
    n. (影片的)总收入\r
\r
40. **ground** /ɡraʊnd/\r
    n. 地，土地；开阔地；领域；根据\r
    vt. 使(飞机)阻止…起飞\r
    adj. (食物)磨细的，剁碎的\r
\r
41. **group** /ɡruːp/\r
    n. 组，群；集团；乐队；组合\r
    vt. vi. (使)成群，(使)成组\r
    vt. 把…分组\r
\r
42. **guarantee** /ˌɡærənˈtiː/\r
    vt. 担保，确保；提供保修\r
    n. 保证；保修单；保证金\r
\r
43. **guard** /ɡɑːd/\r
    n. 卫兵，看守；警戒，保卫；后卫\r
    vt. 守卫，保卫；看守；提防\r
\r
44. **include** /ɪnˈkluːd/\r
    vt. 包括；使成为…的一部分\r
\r
45. **inclusive** /ɪnˈkluːsɪv/\r
    adj. 费用全包的；包括的，包容性强的\r
\r
46. **income** /ˈɪnkʌm/\r
    n. 收入，所得，收益\r
\r
47. **incorporate** /ɪnˈkɔːpəreɪt/\r
    vt. 把…并入，包含；使组成公司\r
\r
48. **increase** /ɪnˈkriːs/\r
    vi. vt. 增加，增多，增长\r
    n. 增加，增多，增长\r
\r
49. **increasingly** /ɪnˈkriːsɪŋli/\r
    adv. 越来越多地\r
\r
50. **incredible** /ɪnˈkredəbl/\r
    adj. 极好的；极大的；难以置信的\r
\r
51. **incur** /ɪnˈkɜː(r)/\r
    vt. 招致，引起，蒙受\r
\r
52. **link** /lɪŋk/\r
    n. 联系；纽带；链接；交通路线\r
    vt. 把…连接起来，使…相关联\r
\r
53. **list** /lɪst/\r
    n. 名单，清单\r
    vi. (按某次序)把…列表；列举\r
    vi. vt. (被)列入销售清单，列入价目表\r
    vi. (船)向一侧倾斜\r
\r
54. **literally** /ˈlɪtərəli/\r
    adv. 字面上地；确实地；简直\r
\r
55. **literary** /ˈlɪtərəri/\r
    adj. 文学的；从事写作的\r
\r
56. **literature** /ˈlɪtrətʃə(r)/\r
    n. 文学(作品)；文献；资料\r
\r
57. **memo** /ˈmeməʊ/\r
    n. 备忘录，公务便条\r
\r
58. **memorial** /məˈmɔːriəl/\r
    n. 纪念碑；(追念逝者的)纪念物\r
    adj. (对逝者)纪念的\r
\r
59. **memory** /ˈmeməri/\r
    n. 记忆力；回忆；内存\r
\r
60. **mental** /ˈmentl/\r
    adj. 精神上的；智力的；疯狂的\r
\r
61. **mention** /ˈmenʃn/\r
    vt. 提及，说起\r
    n. 提及，说起\r
\r
62. **mentor** /ˈmentɔː(r)/\r
    n. 导师，指导者\r
    vt. 指导，辅导\r
\r
63. **other** /ˈʌðə(r)/\r
    adj. pron. 其他的，另外的；相反\r
    adj. 别的，其他的\r
\r
64. **otherwise** /ˈʌðəwaɪz/\r
    adv. 否则；除此以外；以其他方式\r
    adj. 不同的\r
\r
65. **outcome** /ˈaʊtkʌm/\r
    n. 结果，后果\r
\r
66. **sign** /saɪn/\r
    n. 迹象，征兆；标牌，标志；手势\r
    vt. vi. 签(名)，签字；和…签约\r
\r
67. **signature** /ˈsɪɡnətʃə(r)/\r
    n. 签名，署名；签署；鲜明特征\r
\r
68. **signal** /ˈsɪɡnəl/\r
    n. 信号；标志；信号灯\r
    vi. vt. 发信号；示意；表示\r
    vt. 标志，预示；表明，显示\r
\r
69. **significance** /sɪɡˈnɪfɪkəns/\r
    n. 重要性，意义；意思，含义\r
\r
70. **significant** /sɪɡˈnɪfɪkənt/\r
    adj. 重要的，数量大的；意味深长的\r
\r
71. **signify** /ˈsɪɡnɪfaɪ/\r
    vt. 表示，意味着；表达，表明\r
    vi. 具有重要性，要紧\r
\r
72. **similar** /ˈsɪmələ(r)/\r
    adj. 相像的，类似的\r
\r
73. **simple** /ˈsɪmpl/\r
    adj. 简单的；简朴的；普通的\r
    adj. (人)单纯，笨的；普通的\r
\r
74. **simplicity** /sɪmˈplɪsəti/\r
    n. 简单；容易；质朴；朴素\r
\r
75. **simplify** /ˈsɪmplɪfaɪ/\r
    vt. 简化，使简洁\r
\r
76. **simply** /ˈsɪmpli/\r
    adv. 仅仅，简直；简单地；简朴\r
\r
77. **shock** /ʃɒk/\r
    vi. (因紧张而)失败，发挥失常\r
    vt. 使震惊，使愤慨\r
    n. 震惊；愤慨\r
\r
\r
`,Nu=`# 2027考研英语红宝书\r
## 必考词Unit11 77词\r
\r
1.  **addict** /ˈædɪkt/\r
    n. 瘾君子；对…入迷的人\r
\r
2.  **add** /æd/\r
    vt. 增加，相加\r
    vt. 补充说，继续说；添加(特色)\r
\r
3.  **addition** /əˈdɪʃn/\r
    n. 增添；添加物；加法；增建部分\r
\r
4.  **additional** /əˈdɪʃənl/\r
    adj. 附加的，额外的\r
\r
5.  **address** /əˈdres/\r
    n. 地址；网址；演讲；称呼(方式)\r
    vt. 寄往；对…讲话；称呼；处理\r
\r
6.  **adequate** /ˈædɪkwət/\r
    adj. 足够的，满足要求的\r
\r
7.  **adjust** /əˈdʒʌst/\r
    vt. 调整，调节；整理(衣着)\r
    vi. vt. (使)适应\r
\r
8.  **administration** /ədˌmɪnɪˈstreɪʃn/\r
    n. 管理，行政；政府，管理部门\r
\r
9.  **admire** /ədˈmaɪə(r)/\r
    vt. 钦佩，仰慕；欣赏，观赏\r
\r
10. **admission** /ədˈmɪʃn/\r
    n. 准许加入；承认，招认；门票钱\r
\r
11. **admit** /ədˈmɪt/\r
    vi. vt. 承认\r
    vt. 准许…进入；准许…加入；收治\r
\r
12. **adapt** /əˈdæpt/\r
    vi. 适应\r
    vt. 改造(以适应新情况)；改编\r
\r
13. **adopt** /əˈdɒpt/\r
    vt. 采纳，采用；正式通过\r
    vi. vt. 收养，领养\r
\r
14. **adult** /ˈædʌlt/\r
    n. 成年人；成年动物\r
    adj. 成年的，成熟的；成人的\r
\r
15. **brace** /breɪs/\r
    n. 支架；牙箍；背带\r
    vt. 防备，做准备；顶住，抵住\r
\r
16. **brain** /breɪn/\r
    n. 大脑；智力；非常聪明的人\r
\r
17. **branch** /brɑːntʃ/\r
    n. 树枝；分部；分支机构；分支\r
    vi. (路或河)分岔\r
\r
18. **brand** /brænd/\r
    n. 品牌；一种，一类；烙印\r
    vt. 加污名于；(给牲畜)打烙印\r
\r
19. **toss** /tɒs/\r
    vt. 扔，掷，抛；甩(以示愤怒)\r
    vi. vt. (使)摇摆，颠簸；掷硬币决定\r
    n. 掷硬币决定；猛仰头；投掷\r
\r
20. **total** /ˈtəʊtl/\r
    adj. 全部的，总计的，完全的\r
    n. 总数，合计\r
    vt. 总计为，计算…的总和\r
\r
21. **touch** /tʌtʃ/\r
    vt. 触摸，移动；使感动，影响\r
    vi. 接触，触及\r
    n. 触觉，触摸；润色；手法；少许\r
\r
22. **tough** /tʌf/\r
    adj. 艰难的；严厉的，强硬的\r
    adj. 坚强的；剽悍的；结实的\r
    n. 暴徒，恶棍\r
    v. 坚持，挺过\r
\r
23. **treat** /triːt/\r
    vt. 对待；治疗；处理；款待\r
    n. 款待\r
\r
24. **treaty** /ˈtriːti/\r
    n. 条约，协定\r
\r
25. **trend** /trend/\r
    n. 趋势，倾向\r
\r
26. **vice** /vaɪs/\r
    n. 恶习；(黄赌毒等)罪行；老虎钳\r
    prep. 副的，次的\r
\r
27. **vicious** /ˈvɪʃəs/\r
    adj. 残暴的，凶猛的\r
    adj. 恶毒的；恶性的，严重的\r
\r
28. **victim** /ˈvɪktɪm/\r
    n. 受害者；患者；祭品\r
\r
29. **click** /klɪk/\r
    vi. vt. 发出咔嗒声；点击\r
    vi. 恍然大悟；(与某人)合得来\r
    n. 咔嗒声；点击\r
\r
30. **client** /ˈklaɪənt/\r
    n. 客户，顾客；当事人，委托人\r
\r
31. **cling** /klɪŋ/\r
    vi. 紧紧抓住；粘住；依恋；坚持\r
\r
32. **close** /kləʊz/\r
    vt. vi. 关闭，不开放；停止；(使)结束\r
    vt. 合上，合拢；(使)缩小，接近\r
    adj. 接近的；可能的；亲密的\r
    adv. 接近，靠近，紧挨着\r
\r
33. **closet** /ˈklɒzɪt/\r
    n. 贮藏室，壁橱；衣柜\r
    adj. 隐藏(身份等)的\r
    vt. 把…关在房间里\r
\r
34. **code** /kəʊd/\r
    n. 密码，代码；行为准则，法规\r
    vt. 给…编号；编程，编码\r
\r
35. **personal** /ˈpɜːsənl/\r
    adj. 个人的，私人的；亲自的\r
\r
36. **personality** /ˌpɜːsəˈnæləti/\r
    n. 性格；魅力，气质；名人；特色\r
\r
37. **personnel** /ˌpɜːsəˈnel/\r
    n. 人员，员工；人事部门\r
\r
38. **form** /fɔːm/\r
    n. 类型；形式；表格；形状，体能\r
    vi. vt. (使)出现，(使)形成，建立\r
    vt. (使)成形，组成；塑造(性格)\r
\r
39. **formal** /ˈfɔːml/\r
    adj. 正式的，正规的\r
\r
40. **format** /ˈfɔːmæt/\r
    n. 版式，格式；样式\r
    vt. 格式化；安排版式\r
\r
41. **formation** /fɔːˈmeɪʃn/\r
    n. 形成，产生；组成物；编队\r
\r
42. **former** /ˈfɔːmə(r)/\r
    adj. 以前的，前者的\r
\r
43. **formidable** /ˈfɔːmɪdəbl/\r
    adj. 令人敬畏的，难对付的\r
\r
44. **formula** /ˈfɔːmjələ/\r
    n. 公式；分子式；方案；配方\r
\r
45. **formulate** /ˈfɔːmjuleɪt/\r
    vt. 规划，策划；构想；确切表达\r
\r
46. **fortunate** /ˈfɔːtʃənət/\r
    adj. 幸运的\r
\r
47. **fortune** /ˈfɔːtʃuːn/\r
    n. 运气，时运；命运；巨款\r
\r
48. **guide** /ɡaɪd/\r
    n. 指南；导游；有指导意义的事物\r
    vt. 给…领路；指导，影响\r
\r
49. **guidance** /ˈɡaɪdns/\r
    n. 指导，引导；制导，导航\r
\r
50. **guideline** /ˈɡaɪdlaɪn/\r
    n. 指导方针，准则；参考\r
\r
51. **guild** /ɡɪld/\r
    n. (同一工作、兴趣或目标的)协会\r
\r
52. **guilt** /ɡɪlt/\r
    n. 内疚；悔恨；犯罪，罪行\r
\r
53. **guilty** /ˈɡɪlti/\r
    adj. 内疚的；有罪的；有过失的\r
\r
54. **recognition** /ˌrekəɡˈnɪʃn/\r
    n. 认出，识别；承认，认可；赞赏\r
\r
55. **recognize** /ˈrekəɡnaɪz/\r
    vt. 认出；承认；公认；表彰\r
\r
56. **recommend** /ˌrekəˈmend/\r
    vt. 推荐；建议；使受欢迎\r
\r
57. **recover** /rɪˈkʌvə(r)/\r
    vi. 恢复，复原；康复，痊愈\r
    vt. 恢复(知觉等)；全额收回；找回\r
\r
58. **recovery** /rɪˈkʌvəri/\r
    n. 康复，痊愈；恢复，复苏；收回\r
\r
59. **recruit** /rɪˈkruːt/\r
    vt. 招收，招聘，征召\r
    n. 新兵；新成员\r
\r
60. **sell** /sel/\r
    vi. vt. 卖，出售\r
    vt. 推销；自荐\r
    n. 销售品\r
\r
61. **send** /send/\r
    vt. 寄，发送；传达；派遣；使得\r
\r
62. **senior** /ˈsiːniə(r)/\r
    adj. 级别高的；成人的，老年的\r
    adj. 中学的；毕业年级的\r
    n. 年长者；毕业班学生\r
\r
63. **smart** /smɑːt/\r
    adj. 聪明的；衣冠楚楚的，光鲜的\r
    adj. 智能的\r
    vi. 感到剧痛；因批评等难过\r
\r
64. **smell** /smel/\r
    vi. 有…气味；散发着臭气\r
    vt. 闻到；嗅；觉察出\r
    n. 气味；嗅觉；臭味；嗅\r
\r
65. **soak** /səʊk/\r
    vt. vi. 浸泡，湿透\r
    vt. 使湿透；把…浸湿；享受\r
    n. 浸泡；湿透；泡澡\r
\r
66. **soar** /sɔː(r)/\r
    vi. 升空；猛增；翱翔；耸立；高涨\r
\r
67. **sociable** /ˈsəʊʃəbl/\r
    adj. 喜欢交际的，合群的\r
\r
68. **social** /ˈsəʊʃl/\r
    adj. 社会的；社交的；群居的\r
\r
69. **socialism** /ˈsəʊʃəlɪzəm/\r
    n. 社会主义\r
\r
70. **society** /səˈsaɪəti/\r
    n. 社会；社团；上流社会；交往\r
\r
71. **sociology** /ˌsəʊsiˈɒlədʒi/\r
    n. 社会学\r
\r
72. **soluble** /ˈsɒljəbl/\r
    adj. 可溶解的；(问题)可解决的\r
\r
73. **solution** /səˈluːʃn/\r
    n. 解决办法；谜底；答案；溶液\r
\r
74. **solve** /sɒlv/\r
    vt. 解决；解答\r
\r
75. **detach** /dɪˈtætʃ/\r
    vt. 拆卸；分开；脱离；拆卸；收\r
\r
76. **detail** /ˈdiːteɪl/\r
    n. 细节，详情；资料信息；小分队\r
    vt. 详细列举；详述；派遣\r
\r
77. **detain** /dɪˈteɪn/\r
    vt. 拘留，扣押；耽搁\r
\r
`,Pu=`# 2027考研英语红宝书\r
## 必考词Unit12 76词\r
\r
1.  **shadow** /ˈʃædəʊ/\r
    n. 阴影；阴暗处；少许\r
    vt. 跟踪，盯梢；跟随…实地学习\r
    adj. 影子内阁的\r
\r
2.  **shade** /ʃeɪd/\r
    n. 阴凉处；灯罩；色度；细微差别\r
    vt. 给…遮挡光线；加灯罩；画阴影\r
\r
3.  **sort** /sɔːt/\r
    n. 种类，类别；分类，排序\r
    vt. 分类，整理；妥善处理\r
\r
4.  **soul** /səʊl/\r
    n. 灵魂；精神，精髓；某种人\r
\r
5.  **sound** /saʊnd/\r
    n. 声音，声响\r
    vi. 听起来；鸣警报\r
    adj. 合理的，正确的；完好的，健康的\r
    adj. 透彻的，全面的；酣畅的\r
\r
6.  **sour** /ˈsaʊə(r)/\r
    adj. 酸的，馊的；(人)阴郁的\r
    vi. vt. (关系、态度)变坏；变味；变馊\r
\r
7.  **source** /sɔːs/\r
    n. 来源，出处；消息来源；根源\r
    vt. (从…)获得\r
\r
8.  **advance** /ədˈvɑːns/\r
    n. 前进；进步，发展；预付款；上涨\r
    vi. 前进；进步，发展\r
    vt. 促进；预付；提议；提前\r
    adj. 预先的，事先的；先行的\r
\r
9.  **advanced** /ədˈvɑːnst/\r
    adj. 先进的；(课程)高级的；晚期的\r
\r
10. **advantage** /ədˈvɑːntɪdʒ/\r
    n. 优点，有利条件，优势\r
    vt. 使处于有利地位\r
\r
11. **advice** /ədˈvaɪs/\r
    n. 建议，忠告\r
\r
12. **advise** /ədˈvaɪz/\r
    vi. 建议，忠告；提供专业咨询\r
    vt. 正式通知\r
\r
13. **advisable** /ədˈvaɪzəbl/\r
    adj. 明智的，可取的\r
\r
14. **advocate** /ˈædvəkeɪt/\r
    vt. 提倡，主张\r
    n. 拥护者，提倡者；辩护律师\r
\r
15. **aesthetic** /iːsˈθetɪk/\r
    adj. 美学的，审美的\r
    n. 美学，审美学；美感\r
\r
16. **affair** /əˈfeə(r)/\r
    n. 事务；私事，事情；暧昧关系\r
\r
17. **affect** /əˈfekt/\r
    vt. 影响；(疾病)侵袭；打动；假装\r
\r
18. **affection** /əˈfekʃn/\r
    n. 喜爱，钟爱；爱情，爱慕\r
\r
19. **affiliate** /əˈfɪlieɪt/\r
    vi. vt. (使)隶属于，(使)紧密联系\r
    n. 分支机构，附属组织，分公司\r
\r
20. **affirm** /əˈfɜːm/\r
    vt. 证实，确认；断言，申明\r
\r
21. **afford** /əˈfɔːd/\r
    vt. 买得起；承担得起；提供，给予\r
\r
22. **breach** /briːtʃ/\r
    n. 违背，破坏；(关系)中断；缺口\r
    vt. 违反，违背；在…上打开缺口\r
\r
23. **break** /breɪk/\r
    vi. vt. (使)破，裂，碎；弄坏；暂停\r
    vi. 违反；打破(纪录)；弄破；中断\r
    vi. 逃脱；开始；(风暴)发作；透露\r
    n. 休息，间歇；间断，终止，中断\r
\r
24. **breakdown** /ˈbreɪkdaʊn/\r
    n. 故障；破裂；精神崩溃；明细\r
\r
25. **breed** /briːd/\r
    vi. (动物)繁殖\r
    vt. 饲养，培育；导致，酿成\r
    n. 品种；(人或物的)类型\r
\r
26. **brevity** /ˈbrevəti/\r
    n. 简洁，短暂\r
\r
27. **coincide** /ˌkəʊɪnˈsaɪd/\r
    vi. 同时发生；(想法等)相同；重叠\r
\r
28. **collapse** /kəˈlæps/\r
    vi. 倒塌，昏倒；崩溃；暴跌\r
    vi. vt. 折叠，可折叠；(肺或血管)萎陷\r
    n. 崩溃；倒塌；暴跌\r
\r
29. **colleague** /ˈkɒliːɡ/\r
    n. 同事，同僚\r
\r
30. **collect** /kəˈlekt/\r
    vt. 收集，收藏；领取，收走；收账\r
    vi. vt. 聚积，积累；募捐，募集；赢得\r
    vi. 聚集，集合，汇集\r
    adj. (电话)由受话人付费的\r
\r
31. **collection** /kəˈlekʃn/\r
    n. 收藏品；一群，取走；收集\r
    n. 系列时装；作品集\r
\r
32. **collective** /kəˈlektɪv/\r
    adj. 集体的，共同的\r
    n. 集体企业，合作农场\r
\r
33. **collide** /kəˈlaɪd/\r
    vi. 碰撞，相撞；相冲突，相抵触\r
\r
34. **column** /ˈkɒləm/\r
    n. 柱，柱状物；列；栏；专栏\r
\r
35. **combat** /ˈkɒmbæt/\r
    n. 战斗，搏斗\r
    vt. 与…作斗争，打击，战斗\r
\r
36. **combine** /kəmˈbaɪn/\r
    vi. vt. (使)结合，组合，合并，协力\r
    vt. 兼备，使融合；同时做\r
    n. 联合收割机；集团，联合企业\r
\r
37. **command** /kəˈmɑːnd/\r
    n. 命令，指挥；管辖，掌握，精通\r
    vt. 命令；应得，博得；掌握，掌管\r
    vt. vi. 指挥，统率\r
\r
38. **commend** /kəˈmend/\r
    vt. 赞扬；推荐；把…托付给\r
\r
39. **comment** /ˈkɒment/\r
    n. 评论，意见\r
    vi. vt. 作出评论，发表意见\r
\r
40. **commerce** /ˈkɒmɜːs/\r
    n. 商业，贸易\r
\r
41. **commercial** /kəˈmɜːʃl/\r
    adj. 商业的，营利的；商业化的\r
    n. (电视或电台)广告\r
\r
42. **commission** /kəˈmɪʃn/\r
    n. 委员会；佣金；手续费；委托\r
    vt. 正式委托；任命；为…建纪念碑\r
\r
43. **commit** /kəˈmɪt/\r
    vt. 犯(错或罪)；承诺；花费\r
    vi. 忠于，全心全意投入\r
\r
44. **committee** /kəˈmɪti/\r
    n. 委员会\r
\r
45. **commodity** /kəˈmɒdəti/\r
    n. 商品，货物；有用的东西\r
\r
46. **common** /ˈkɒmən/\r
    adj. 常见的，普通的；共有的\r
\r
47. **communicate** /kəˈmjuːnɪkeɪt/\r
    vi. 交流，沟通；表达；传达\r
    vt. 交流，沟通；表达；传达\r
\r
48. **communication** /kəˌmjuːnɪˈkeɪʃn/\r
    n. 交流，沟通；通信，信息\r
\r
49. **communism** /ˈkɒmjunɪzəm/\r
    n. 共产主义\r
\r
50. **community** /kəˈmjuːnəti/\r
    n. 社区，群体；群落\r
\r
51. **detect** /dɪˈtekt/\r
    vt. 发现，察觉；测出\r
\r
52. **deter** /dɪˈtɜː(r)/\r
    vt. vi. 威慑，制止，阻止\r
\r
53. **deteriorate** /dɪˈtɪəriəreɪt/\r
    vi. 恶化，变坏，衰退\r
\r
54. **determine** /dɪˈtɜːmɪn/\r
    vt. 确定，查明；决定\r
    vt. vi. 决意，下决心\r
\r
55. **develop** /dɪˈveləp/\r
    vi. vt. (使)发展，成长；患(病)；加强\r
    vt. 开发，研制；修建；阐明；冲洗\r
\r
56. **device** /dɪˈvaɪs/\r
    n. 仪器，设备；手段，花招；炸弹\r
\r
57. **devise** /dɪˈvaɪz/\r
    vt. 想出，发明，设计\r
\r
58. **ensure** /ɪnˈʃʊə(r)/\r
    vt. 确保\r
\r
59. **entail** /ɪnˈteɪl/\r
    vt. 牵涉，涉及，需要\r
\r
60. **indeed** /ɪnˈdiːd/\r
    adv. 确实，的确；真正地；其实\r
\r
61. **independence** /ˌɪndɪˈpendəns/\r
    n. (国家的)独立；(人的)自立\r
\r
62. **independent** /ˌɪndɪˈpendənt/\r
    adj. 独立的；自立的；自主的\r
\r
63. **index** /ˈɪndeks/\r
    n. 索引；指数；标志，指标\r
    vt. 为…编索引\r
\r
64. **mere** /mɪə(r)/\r
    adj. 仅仅，只不过；极小的，单单\r
    n. 小湖，池塘\r
\r
65. **merely** /ˈmɪəli/\r
    adv. 只不过，仅仅\r
\r
66. **plausible** /ˈplɔːzəbl/\r
    adj. (说法)貌似合理的，花言巧语的\r
\r
67. **plea** /pliː/\r
    n. 恳求；抗辩；(犯罪的)借口\r
\r
68. **plead** /pliːd/\r
    vi. vt. 恳求，请求；认罪，申辩\r
    vt. 陈述案情；以…为借口\r
\r
69. **plot** /plɒt/\r
    n. 故事情节；阴谋；小块土地\r
    vi. vt. 密谋，暗中策划\r
    vt. 绘制\r
\r
70. **policy** /ˈpɒləsi/\r
    n. 政策，保险单；(处事)原则\r
\r
71. **polite** /pəˈlaɪt/\r
    adj. 有礼貌的；客气的\r
\r
72. **political** /pəˈlɪtɪkl/\r
    adj. 政治的；政党的；关心政治的\r
\r
73. **politician** /ˌpɒləˈtɪʃn/\r
    n. 从政者，政治家；投机钻营者\r
\r
74. **politics** /ˈpɒlətɪks/\r
    n. 政治；政治学；政见，政治\r
\r
75. **poll** /pəʊl/\r
    vt. 民意调查；投票；投票站\r
    vt. 获得(票数)\r
    vi. 投票\r
\r
76. **ponder** /ˈpɒndə(r)/\r
    vi. vt. 沉思，考虑\r
\r
`,Fu=`# 2027考研英语红宝书\r
## 必考词Unit13 77词\r
\r
1.  **beam** /biːm/\r
    n. 光束，光线；横梁；平衡木\r
    vi. vt. 眉开眼笑；照耀\r
    vt. 发射(信号)\r
\r
2.  **become** /bɪˈkʌm/\r
    v. link. 成为，变得\r
    vt. 适合，与…相称\r
\r
3.  **deprive** /dɪˈpraɪv/\r
    vt. 剥夺，使不能享有\r
\r
4.  **derive** /dɪˈraɪv/\r
    vi. 起源于，来自\r
    vt. 从…中获得\r
\r
5.  **describe** /dɪˈskraɪb/\r
    vt. 描述，描写；形成…形状\r
\r
6.  **description** /dɪˈskrɪpʃn/\r
    n. 描述，叙述；种类，类型\r
\r
7.  **deserve** /dɪˈzɜːv/\r
    vt. 值得，应得，应受\r
\r
8.  **design** /dɪˈzaɪn/\r
    n. 设计；设计方案；花纹；意图\r
    vt. 设计\r
\r
9.  **designate** /ˈdezɪɡneɪt/\r
    vt. 指定，选定；指派，任命；表示\r
    adj. 尚未就职的\r
\r
10. **desirable** /dɪˈzaɪərəbl/\r
    adj. 理想的，值得拥有的；性感的\r
\r
11. **desire** /dɪˈzaɪə(r)/\r
    n. 渴望，欲望\r
    vt. 渴望，期望\r
\r
12. **flaw** /flɔː/\r
    n. 瑕疵，缺点；错误；性格缺陷\r
\r
13. **flexible** /ˈfleksəbl/\r
    adj. 灵活的，可变通的；可弯曲的\r
\r
14. **fling** /flɪŋ/\r
    vt. 扔，掷；猛动(身体)\r
    n. 一时的放纵；短暂的风流韵事\r
\r
15. **flourish** /ˈflʌrɪʃ/\r
    vi. 繁荣，兴旺；茁壮成长\r
    vt. (为引起注意)挥舞，挥动\r
    n. 夸张动作；华丽辞藻\r
\r
16. **grow** /ɡrəʊ/\r
    vi. 成长；增加，扩大；逐渐开始\r
    vi. vt. 种植，生长；(使)留长\r
    vt. 使扩大，使扩展\r
    v. link. 逐渐变得，逐渐成为\r
\r
17. **grown-up** /ɡrəʊn ʌp/\r
    n. 成年人，大人\r
    adj. 成年的，成人的；有成人特点的\r
\r
18. **growth** /ɡrəʊθ/\r
    n. 成长，生长；增加，增长，增强\r
\r
19. **hinder** /ˈhɪndə(r)/\r
    vt. 阻碍，妨碍，阻止\r
\r
20. **hint** /hɪnt/\r
    n. 暗示，提示；迹象；少许；建议\r
    vt. vi. 暗示，提示\r
\r
21. **hitherto** /ˌhɪðəˈtuː/\r
    adv. 迄今，到(某时)为止\r
\r
22. **impact** /ˈɪmpækt/\r
    n. 影响；撞击，碰撞\r
    vi. vt. 影响；撞击，碰撞\r
\r
23. **impair** /ɪmˈpeə(r)/\r
    vt. 削弱，损伤\r
\r
24. **impart** /ɪmˈpɑːt/\r
    vt. 传达，传授；赋予…特定品质\r
\r
25. **implement** /ˈɪmplɪment/\r
    vt. 履行，实施，贯彻\r
    n. 工具，器具，用具\r
\r
26. **implication** /ˌɪmplɪˈkeɪʃn/\r
    n. 可能的影响；暗示，含意；牵连\r
\r
27. **implicit** /ɪmˈplɪsɪt/\r
    adj. 含蓄的，不言明的；内含的\r
    adj. 绝对的\r
\r
28. **imply** /ɪmˈplaɪ/\r
    vt. 暗示，暗指；意味着，表明\r
\r
29. **import** /ˈɪmpɔːt/\r
    vt. 进口，引进；导入，输入\r
    n. 进口(货)，舶来品；重要性，意义\r
\r
30. **importance** /ɪmˈpɔːtns/\r
    n. 重要性\r
\r
31. **important** /ɪmˈpɔːtnt/\r
    adj. 重要的，重大的；有影响力的\r
\r
32. **impose** /ɪmˈpəʊz/\r
    vt. 强制实行；将…强加于；使承受\r
    vi. 给…添麻烦\r
\r
33. **impress** /ɪmˈpres/\r
    vt. vi. 使印象深刻，使钦佩\r
    vt. 使…谨记\r
\r
34. **impression** /ɪmˈpreʃn/\r
    n. 印象；印象画；滑稽模仿；假象\r
\r
35. **impressive** /ɪmˈpresɪv/\r
    adj. 使人印象深刻的，令人敬佩的\r
\r
36. **improve** /ɪmˈpruːv/\r
    vi. vt. 改进，改善，提高\r
\r
37. **impulse** /ˈɪmpʌls/\r
    n. 冲动；脉冲；推动力\r
\r
38. **limit** /ˈlɪmɪt/\r
    n. 限制，限度，极限；界限，范围\r
    vt. 限制；限定；限量\r
\r
39. **limitation** /ˌlɪmɪˈteɪʃn/\r
    n. 限制，制约；限制规则；局限\r
\r
40. **limited** /ˈlɪmɪtɪd/\r
    adj. 有限的，限量的\r
\r
41. **origin** /ˈɒrɪdʒɪn/\r
    n. 源头，起因；出身\r
\r
42. **original** /əˈrɪdʒənl/\r
    adj. 起初的；原创的；原作的\r
    n. 原件，原文\r
\r
43. **originate** /əˈrɪdʒɪneɪt/\r
    vi. 起源，发源\r
    vt. 创始，发起\r
\r
44. **petition** /pəˈtɪʃn/\r
    n. 请愿书；申诉书\r
    vi. vt. 请愿，(向法庭)申请，祈祷\r
\r
45. **phase** /feɪz/\r
    n. 阶段，时期；(月亮的)盈亏\r
    vt. 分阶段进行，逐步做\r
\r
46. **phenomenon** /fəˈnɒmɪnən/\r
    n. 现象；非凡的人或事\r
\r
47. **philosopher** /fəˈlɒsəfə(r)/\r
    n. 哲学家\r
\r
48. **philosophy** /fəˈlɒsəfi/\r
    n. 哲学；哲学体系；信条\r
\r
49. **phrase** /freɪz/\r
    n. 短语，词组；成语，习语，乐段\r
    vt. (以某种方式)表达\r
\r
50. **physical** /ˈfɪzɪkl/\r
    adj. 身体的；物质的；物理学的\r
    n. 体检\r
\r
51. **physician** /fɪˈzɪʃn/\r
    n. (内科)医生\r
\r
52. **pierce** /pɪəs/\r
    vt. vi. 刺入；(光、声等)穿透，突破\r
\r
53. **corporate** /ˈkɔːpərət/\r
    adj. 公司的；全体的；团体的\r
\r
54. **corporation** /ˌkɔːpəˈreɪʃn/\r
    n. 大公司，大企业\r
\r
55. **reason** /ˈriːzn/\r
    n. 原因；正当理由；理智；道理\r
    vt. 思考，理解推断\r
\r
56. **reasonable** /ˈriːznəbl/\r
    adj. 合理的，理智的，讲道理的\r
    adj. (价钱)公道的，还行的\r
\r
57. **recent** /ˈriːsnt/\r
    adj. 近来的，最新的\r
\r
58. **serve** /sɜːv/\r
    vi. vt. 服务；提供，端上；担任，发球\r
    vt. 对…有用；供应；服刑\r
    vi. 可用作，产生…效果\r
\r
59. **servant** /ˈsɜːvənt/\r
    n. 仆人；政府雇员；受制于…的人\r
\r
60. **service** /ˈsɜːvɪs/\r
    n. 服务\r
    vt. 维护，保养；提供服务\r
\r
61. **set** /set/\r
    vt. 使处于；设置；开创；布置\r
    n. 一套，一副；电视机；布景；集\r
    adj. 处于…的；固定的；很可能的\r
\r
62. **setback** /ˈsetbæk/\r
    n. 挫折，阻碍\r
\r
63. **setting** /ˈsetɪŋ/\r
    n. 环境，背景；设置，档\r
\r
64. **settle** /ˈsetl/\r
    vi. vt. 解决，和解；定居；(使)平静\r
    vt. 确定，决定；把…放好\r
    vi. 降落，停留\r
\r
65. **settlement** /ˈsetlmənt/\r
    n. 协议，和解；偿付；定居点\r
\r
66. **several** /ˈsevrəl/\r
    adj. 各自的，分别的\r
    det. 几个，数个，一些\r
\r
67. **severe** /sɪˈvɪə(r)/\r
    adj. 严重的；严厉的；严峻的\r
\r
68. **shape** /ʃeɪp/\r
    n. 形状；身材；影子；状况\r
    vt. 使成…形状；塑造；影响…发展\r
\r
69. **share** /ʃeə(r)/\r
    vt. 分享，分担\r
    vt. 分配，分摊\r
    n. (分得或承担的)一份；股份\r
\r
70. **sharp** /ʃɑːp/\r
    adj. 锋利的；急剧的；清晰的\r
    adj. 敏锐的，尖刻的；剧烈的\r
    adv. …点整\r
    n. 升半音；锐利的东西\r
\r
71. **shelter** /ˈʃeltə(r)/\r
    n. 住处；庇护；避难处，收容所\r
    vt. 保护，掩蔽\r
    vi. 躲避\r
\r
72. **sophisticated** /səˈfɪstɪkeɪtɪd/\r
    adj. 见多识广的；老练的\r
    adj. 精密的，复杂的\r
\r
73. **sovereign** /ˈsɒvrɪn/\r
    n. 君主，元首；金镑\r
    adj. (国家)有主权的；至高无上的\r
\r
74. **sow** /səʊ/\r
    vt. vi. 播种，种；灌输；散布，煽动\r
    n. 母猪\r
\r
75. **toll** /təʊl/\r
    n. 伤亡人数；严重后果；通行费\r
    vi. (尤指)鸣(丧钟)\r
\r
76. **tone** /təʊn/\r
    n. 语气；音色；风格；色调\r
    vt. 使更健壮，使更结实\r
\r
77. **topic** /ˈtɒpɪk/\r
    n. 话题，主题，议题\r
\r
`,Iu=`# 2027考研英语红宝书\r
## 必考词Unit14 72词\r
\r
1.  **perform** /pəˈfɔːm/\r
    vt. vi. 演出，表演\r
    vt. 执行，履行\r
    vi. 表现，运行\r
\r
2.  **performance** /pəˈfɔːməns/\r
    n. 表演，演出；表现，性能；执行\r
\r
3.  **period** /ˈpɪəriəd/\r
    n. 一段时间，阶段；经期；句号\r
    adv. (用于句末)到此为止\r
\r
4.  **periodical** /ˌpɪəriˈɒdɪkl/\r
    n. (尤指学术)期刊\r
    adj. 周期性的，定期的\r
\r
5.  **perish** /ˈperɪʃ/\r
    vi. 死亡；湮灭，毁灭\r
    vi. vt. (使橡胶等)老化\r
\r
6.  **perpetual** /pəˈpetʃuəl/\r
    adj. 不间断的，长久的；没完没了的\r
\r
7.  **perplex** /pəˈpleks/\r
    vt. 使困惑，使茫然\r
\r
8.  **perspective** /pəˈspektɪv/\r
    n. 视角，观点，判断力；透视法\r
\r
9.  **pessimistic** /ˌpesɪˈmɪstɪk/\r
    adj. 悲观的\r
\r
10. **optimistic** /ˌɒptɪˈmɪstɪk/\r
    adj. 乐观的\r
\r
11. **optimum** /ˈɒptɪməm/\r
    adj. 最佳的，最适宜的\r
    n. 最佳条件，最佳水平\r
\r
12. **option** /ˈɒpʃn/\r
    n. 选择(权)；选修课；选项；期权\r
    vt. 购买(或出售)…的选择权\r
\r
13. **optional** /ˈɒpʃənl/\r
    adj. 可选择的，非强制的\r
\r
14. **organ** /ˈɔːɡən/\r
    n. 器官；管风琴；机构，机关\r
\r
15. **organic** /ɔːˈɡænɪk/\r
    adj. 有机的；器官的；演进的\r
\r
16. **organism** /ˈɔːɡənɪzəm/\r
    n. 生物，有机体；有机体系\r
\r
17. **organization** /ˌɔːɡənaɪˈzeɪʃn/\r
    n. 组织，机构；安排；结构；条理\r
\r
18. **organize** /ˈɔːɡənaɪz/\r
    vt. 组织，筹备；整理，使有条理\r
    vt. vi. 成立(联盟、党派等)\r
\r
19. **enhance** /ɪnˈhɑːns/\r
    vt. 提高，增加，改进，改善\r
\r
20. **enlarge** /ɪnˈlɑːdʒ/\r
    vt. vi. (使)增大，扩大\r
    vt. 放大\r
\r
21. **enlighten** /ɪnˈlaɪtn/\r
    vt. 启发，开导，教化\r
\r
22. **rake** /reɪk/\r
    n. 耙子，耙状工具\r
    vt. 耙平，梳理\r
    vi. 搜寻；搜索\r
\r
23. **rare** /reə(r)/\r
    adj. 少见的；珍稀的；(肉类)半熟的\r
\r
24. **rarely** /ˈreəli/\r
    adv. 难得地，少见地\r
\r
25. **rate** /reɪt/\r
    n. 比率，率；速度；费用\r
    vt. vi. 评估，评价\r
    vt. 划分等级\r
\r
26. **ratio** /ˈreɪʃiəʊ/\r
    n. 比，比率，比例\r
\r
27. **rational** /ˈræʃnəl/\r
    adj. 合理的，理性的；(人)理智的\r
\r
28. **reach** /riːtʃ/\r
    vt. 到达；增加到；实现；联系到\r
    vi. vt. 伸手；够得着；足够达到\r
    n. 手臂展开的长度；影响范围\r
\r
29. **react** /riˈækt/\r
    vi. (作出)反应；过敏；起化学反应\r
\r
30. **realistic** /ˌriːəˈlɪstɪk/\r
    adj. 现实的；能实现的；逼真的\r
\r
31. **reality** /riˈæləti/\r
    n. 现实；现实的东西；真人秀\r
\r
32. **realize** /ˈriːəlaɪz/\r
    vt. vi. 意识到\r
    vt. 实现；(担心的事)发生；挣得\r
\r
33. **select** /sɪˈlekt/\r
    vt. 选择，挑选\r
    adj. 精选的；高级的\r
\r
34. **selection** /sɪˈlekʃn/\r
    n. 挑选；入选者；可供选择的范围\r
\r
35. **sense** /sens/\r
    n. 感官；感觉；理解力；意思\r
    vt. 意识到，觉察出\r
\r
36. **sensation** /senˈseɪʃn/\r
    n. 知觉；感觉能力；直觉；轰动\r
\r
37. **sensible** /ˈsensəbl/\r
    adj. 明智的；实用的；意识到…的\r
\r
38. **sensitive** /ˈsensətɪv/\r
    adj. 体贴的；敏感的；灵敏的\r
\r
39. **separate** /ˈseprət/\r
    adj. 单独的，分开的；不同的\r
    vt. vi. (使)分开，区分\r
    vt. 隔开，阻隔\r
    vi. 分居\r
\r
40. **sequence** /ˈsiːkwəns/\r
    n. 一系列，一连串；顺序，次序\r
    vt. 按顺序排列；测定…的序列\r
\r
41. **serial** /ˈsɪəriəl/\r
    n. (电视或广播)连续剧，连载故事\r
    adj. (尤指犯罪)连续的；顺序排列的\r
\r
42. **series** /ˈsɪəriːz/\r
    n. 一系列；系列节目；系列比赛\r
\r
43. **serious** /ˈsɪəriəs/\r
    adj. 严重的；严肃的；大量的\r
\r
44. **toast** /təʊst/\r
    n. 烤面包片；吐司；干杯，祝酒\r
    vt. 为…举杯敬酒\r
    vt. vi. 烤(尤指面包)，把…烤得焦\r
\r
45. **together** /təˈɡeðə(r)/\r
    adv. 一起，同时；结合起来；在一起\r
\r
46. **token** /ˈtəʊkən/\r
    n. 代币；筹码；标志，代金券\r
    adj. 象征性的\r
\r
47. **tolerance** /ˈtɒlərəns/\r
    n. 宽容，容忍；忍耐力；公差\r
\r
48. **tolerant** /ˈtɒlərənt/\r
    adj. 宽容的，容忍的；能耐…的\r
\r
49. **tolerate** /ˈtɒləreɪt/\r
    vt. 容许，忍耐；对…有耐受性\r
\r
50. **accumulate** /əˈkjuːmjuleɪt/\r
    vt. 积累，积聚\r
    vi. 累积，逐渐增加\r
\r
51. **accuracy** /ˈækjərəsi/\r
    n. 准确性，精确性\r
\r
52. **accurate** /ˈækjərət/\r
    adj. 准确的，精确的\r
\r
53. **accuse** /əˈkjuːz/\r
    vt. 指责，指控；控告\r
\r
54. **achieve** /əˈtʃiːv/\r
    vt. 达到，获得，完成\r
    vi. 成功\r
\r
55. **acknowledge** /əkˈnɒlɪdʒ/\r
    vt. 承认；认可；感谢\r
    vt. 告知收到(信件或信息等)\r
\r
56. **cheer** /tʃɪə(r)/\r
    n. 欢呼声；欢乐的气氛\r
    vi. vt. 欢呼，加油\r
    vt. 鼓励，鼓舞；(使)振奋起来\r
\r
57. **chemical** /ˈkemɪkl/\r
    adj. 化学的，与化学有关的\r
    n. 化学品，化学制品\r
\r
58. **cherish** /ˈtʃerɪʃ/\r
    vt. 珍爱，珍惜；怀有(希望等)\r
\r
59. **chip** /tʃɪp/\r
    n. 薯条，薯片；芯片；缺口，碎屑\r
    vt. 打破，弄缺；打(或踢)高球\r
    vt. 削下，凿下\r
\r
60. **choice** /tʃɔɪs/\r
    n. 选择，挑选；选择权；入选者\r
    adj. 精选的，上等的\r
\r
61. **choose** /tʃuːz/\r
    vt. vi. 选择，挑选\r
\r
62. **board** /bɔːd/\r
    n. 木板，板；董事会；膳食\r
    vi. vt. 上(船、飞机等)\r
    vt. 让乘客上(船或飞机)；在校寄宿\r
\r
63. **boast** /bəʊst/\r
    vi. vt. 自吹自擂，自夸\r
    vt. 有(值得自豪的事物)\r
    n. 自吹自擂，自夸\r
\r
64. **bonus** /ˈbəʊnəs/\r
    n. 奖金，红利；额外的好处\r
\r
65. **boom** /buːm/\r
    n. 繁荣，激增；风靡的时期；轰鸣\r
    vi. 轰鸣，轰响；繁荣；迅速发展\r
    vt. vi. 以低沉有力的声音说话\r
\r
66. **boost** /buːst/\r
    vt. 使增长，推动；偷窃\r
    n. 激励；增加；向上一推\r
\r
67. **verbal** /ˈvɜːbl/\r
    adj. 口头的；言辞的；动词的\r
\r
68. **verdict** /ˈvɜːdɪkt/\r
    n. 裁决，裁定；意见，决定\r
\r
69. **verify** /ˈverɪfaɪ/\r
    vt. 证明，核实，查证\r
\r
70. **verse** /vɜːs/\r
    n. 诗；诗节；(《圣经》等中的)节\r
\r
71. **version** /ˈvɜːʃn/\r
    n. 版本；描述，说法\r
\r
72. **vessel** /ˈvesl/\r
    n. 舰，轮船；容器，器皿；血管\r
\r
`,Lu=`# 2027考研英语红宝书\r
## 必考词Unit15 77词\r
\r
1.  **holy** /ˈhəʊli/\r
    adj. 与上帝有关的，神圣的；虔诚的\r
\r
2.  **honour** /ˈɒnə(r)/\r
    n. 荣幸；荣誉；荣誉称号；道义\r
    vt. 尊敬(某人)；表彰；信守(承诺)\r
\r
3.  **honourable** /ˈɒnərəbl/\r
    adj. 值得尊敬的；正直的；体面的\r
\r
4.  **horizon** /həˈraɪzn/\r
    n. 地平线；范围，眼界，见识\r
\r
5.  **horizontal** /ˌhɒrɪˈzɒntl/\r
    adj. 水平的，横的\r
    n. 水平位置，水平线，水平面\r
\r
6.  **ingenious** /ɪnˈdʒiːniəs/\r
    adj. 精巧的，巧妙的；善于创造的\r
\r
7.  **ingredient** /ɪnˈɡriːdiənt/\r
    n. 配料，成分，因素\r
\r
8.  **initial** /ɪˈnɪʃl/\r
    adj. 开始的，最初的\r
    n. (名字的)首字母\r
    vt. 用姓名的首字母签名于\r
\r
9.  **initiate** /ɪˈnɪʃieɪt/\r
    vt. 开始，发起；使初步了解；接纳\r
    n. 新入会的人\r
\r
10. **initiative** /ɪˈnɪʃətɪv/\r
    n. 主动性；倡议，新方案；主动权\r
\r
11. **local** /ˈləʊkl/\r
    adj. 当地的，本地的；(身体)局部的\r
    n. 本地人\r
\r
12. **locality** /ləʊˈkæləti/\r
    n. 地区，区域\r
\r
13. **locate** /ləʊˈkeɪt/\r
    vt. 确定…的位置；使位于\r
    vi. (公司)落户于\r
\r
14. **location** /ləʊˈkeɪʃn/\r
    n. 地点，位置；外景拍摄地；定位\r
\r
15. **neglect** /nɪˈɡlekt/\r
    vt. 疏忽，忽略；未做(某事)\r
    n. 疏忽，(被)忽略\r
\r
16. **negligible** /ˈneɡlɪdʒəbl/\r
    adj. 微不足道的，不值一提的\r
\r
17. **prescribe** /prɪˈskraɪb/\r
    vt. 开(药、处方)；规定\r
\r
18. **prescription** /prɪˈskrɪpʃn/\r
    n. 处方；处方药；对策\r
\r
19. **presence** /ˈprezns/\r
    n. 在场，出席；存在，出现；仪态\r
\r
20. **present** /ˈpreznt/\r
    adj. 当前的；在场的；存在的\r
    n. 礼物；目前，现在；现在时\r
    vt. 授予；提交；展现；使经历\r
\r
21. **presently** /ˈprezntli/\r
    adv. 目前，现在；马上，随即\r
\r
22. **preserve** /prɪˈzɜːv/\r
    vt. 维护，保护；保持；保存(食物)\r
    n. 专门领域；蜜饯，果酱；保护区\r
\r
23. **preside** /prɪˈzaɪd/\r
    vi. 主持，负责(会议等)\r
\r
24. **press** /pres/\r
    n. 报刊；新闻界；印刷机；出版社\r
    vt. vi. 压，按\r
    vt. 把…按入；敦促；把…压平\r
    vi. 拥挤着移动\r
\r
25. **pressure** /ˈpreʃə(r)/\r
    n. 压力；挤压；液压，气压\r
    vt. 对…施压，逼迫\r
\r
26. **prestige** /preˈstiːʒ/\r
    n. 威信，声望\r
    adj. 令人敬仰的，受尊重的；名贵的\r
\r
27. **presumably** /prɪˈzjuːməbli/\r
    adv. 很可能，据推测\r
\r
28. **presume** /prɪˈzjuːm/\r
    vi. vt. 推测，猜测\r
    vt. (尤指法庭上)推定，假定；假设\r
    vi. 妄行，越权行事\r
\r
29. **prevent** /prɪˈvent/\r
    vt. 防止，预防，阻止\r
\r
30. **previous** /ˈpriːviəs/\r
    adj. 先前的；(时间或顺序上)稍前的\r
\r
31. **prey** /preɪ/\r
    n. 猎物；受害者\r
    vi. 捕食；坑骗\r
\r
32. **reliable** /rɪˈlaɪəbl/\r
    adj. 可信赖的，可靠的\r
\r
33. **reliance** /rɪˈlaɪəns/\r
    n. 依赖，依靠\r
\r
34. **religion** /rɪˈlɪdʒən/\r
    n. 宗教信仰，宗教\r
\r
35. **religious** /rɪˈlɪdʒəs/\r
    adj. 宗教的；虔诚的，笃信宗教的\r
\r
36. **rely** /rɪˈlaɪ/\r
    vi. 依靠；信任\r
\r
37. **straight** /streɪt/\r
    adv. 笔直地；直接，正，直，坦率地\r
    adj. 直的；连续的；准的；坦率的\r
    n. 直道\r
\r
38. **straightforward** /ˌstreɪtˈfɔːwəd/\r
    adj. 简单易懂的；坦率的，率直的\r
\r
39. **strain** /streɪn/\r
    n. 压力，劳损，拉伤；品种\r
    vt. 拉伤，扭伤，劳损；过度使用\r
    vt. 尽力，使劲，拉紧\r
    vt. 用力推(或拉)\r
\r
40. **strategy** /ˈstrætədʒi/\r
    n. 战略，策略；战略学\r
\r
41. **strength** /streŋθ/\r
    n. 力量，实力，优势；强度\r
\r
42. **strengthen** /ˈstreŋθn/\r
    vi. vt. 加强，加固\r
\r
43. **strenuous** /ˈstrenjuəs/\r
    adj. 费力的，繁重的；竭尽全力的\r
\r
44. **transaction** /trænˈzækʃn/\r
    n. 交易，业务；(业务)办理\r
\r
45. **transfer** /trænsˈfɜː(r)/\r
    vi. vt. 转移，调动；移交，转学，换乘\r
    vt. 转账；转让；传染\r
    n. 转移，调动；转会，换乘\r
\r
46. **transform** /trænsˈfɔːm/\r
    vt. 转换，改变，改造\r
\r
47. **transient** /ˈtrænziənt/\r
    adj. 短暂的，流动的，临时的\r
    n. 暂住者，流浪者\r
\r
48. **translation** /trænsˈleɪʃn/\r
    n. 翻译，译文\r
\r
49. **architect** /ˈɑːkɪtekt/\r
    n. 建筑师；发起者，创立者\r
\r
50. **architecture** /ˈɑːkɪtektʃə(r)/\r
    n. 建筑学；建筑风格；结构\r
\r
51. **archive** /ˈɑːkaɪv/\r
    n. 档案，档案馆\r
    vt. 把(文档等)存档\r
\r
52. **area** /ˈeəriə/\r
    n. 区域，地区；面积，部位，领域\r
\r
53. **arena** /əˈriːnə/\r
    n. 竞技场，剧场；活动场地\r
\r
54. **argue** /ˈɑːɡjuː/\r
    vi. vt. 争论，争吵；\r
    vt. 论证，主张；证明，表明\r
\r
55. **argument** /ˈɑːɡjumənt/\r
    n. 争论，论据，理由；争议，异议\r
\r
56. **arise** /əˈraɪz/\r
    vi. 发生，出现；由…引起；起身\r
\r
57. **arouse** /əˈraʊz/\r
    vt. 引起，激起，激发；唤醒\r
\r
58. **array** /əˈreɪ/\r
    n. 一大批；数列，一整套(设备)\r
    vt. 有序的部署；给…盛装打扮\r
\r
59. **visible** /ˈvɪzəbl/\r
    adj. 可见的，明显的\r
\r
60. **vision** /ˈvɪʒn/\r
    n. 视力，视野；设想，幻象，远见\r
\r
61. **visual** /ˈvɪʒuəl/\r
    adj. 视觉的，视力的，可见的\r
    n. 视觉材料\r
\r
62. **vital** /ˈvaɪtl/\r
    adj. 极其重要的；维持生命所必需的；充满活力的，生机勃勃的\r
\r
63. **vivid** /ˈvɪvɪd/\r
    adj. 生动的，清晰的，鲜艳的\r
\r
64. **void** /vɔɪd/\r
    n. (空白)空虚感；缺乏；空；空间\r
    adj. (合同)无效的，缺乏…的；空的\r
    vt. 使…作废，排泄\r
\r
65. **volume** /ˈvɒljuːm/\r
    n. 体积，容积；量；音量；卷，册\r
\r
66. **consequence** /ˈkɒnsɪkwəns/\r
    n. 结果，后果；重要性，价值\r
\r
67. **consequently** /ˈkɒnsɪkwəntli/\r
    adv. 结果，因此，所以\r
\r
68. **conservation** /ˌkɒnsəˈveɪʃn/\r
    n. 保护，节约；保存\r
\r
69. **conservative** /kənˈsɜːvətɪv/\r
    adj. 保守的，守旧的\r
    n. 保守党员；保守的人\r
\r
70. **consider** /kənˈsɪdə(r)/\r
    vt. 考虑，斟酌\r
    vt. 认为，体谅，端详\r
\r
71. **considerable** /kənˈsɪdərəbl/\r
    adj. 相当多的，相当大的\r
\r
72. **considerate** /kənˈsɪdərət/\r
    adj. 体贴的，考虑周到的；主动的\r
\r
73. **consume** /kənˈsjuːm/\r
    vt. 消耗，耗费；吃，喝；使充满\r
\r
74. **consumption** /kənˈsʌmpʃn/\r
    n. 消耗(量)；食用(量)；消费\r
\r
75. **dispute** /dɪˈspjuːt/\r
    n. 争论，争端\r
    vt. 对…表示异议；对…表示质疑\r
    vt. 就…争论；就…争执\r
    vi. 争论\r
\r
76. **dissolve** /dɪˈzɒlv/\r
    vi. vt. (使)溶解；消除；(使)消散\r
    vt. 解除，终止，解散\r
    adj. 禁不住的，未来的；(液体)局部的\r
\r
77. **exchange** /ɪksˈtʃeɪndʒ/\r
    n. 交换，交流，交谈；兑换；互换\r
    vt. 交换，交流，兑换，交易\r
\r
78. **exclude** /ɪkˈskluːd/\r
    vt. 将…排除在外；不包括；排除\r
\r
79. **exclusive** /ɪkˈskluːsɪv/\r
    adj. 独占的；高档的；排外的\r
    adj. 不包括…的\r
    n. 独家新闻；特约报道\r
\r
`,Ru=`# 2027考研英语红宝书\r
## 必考词Unit16 75词\r
\r
1.  **confine** /kənˈfaɪn/\r
    vt. 限制，使…局限于；监禁，关押\r
\r
2.  **confirm** /kənˈfɜːm/\r
    vt. 证实，证明；确认(安排)；批准\r
\r
3.  **conflict** /ˈkɒnflɪkt/\r
    n. 冲突，争执，矛盾\r
    vi. 相互矛盾，冲突\r
\r
4.  **confidence** /ˈkɒnfɪdəns/\r
    n. 信心，信任；自信；把握；秘密\r
\r
5.  **confident** /ˈkɒnfɪdənt/\r
    adj. 自信的；有把握的，确信的\r
\r
6.  **confidential** /ˌkɒnfɪˈdenʃl/\r
    adj. 机密的；(讲话)悄悄的\r
\r
7.  **configuration** /kənˌfɪɡəˈreɪʃn/\r
    n. 布局，构造，配置\r
\r
8.  **trail** /treɪl/\r
    n. 痕迹，踪迹；(乡间)小路，路线\r
    vt. vi. (被)拖，拉；落后，失利\r
    vi. (尤指跟在他人后面)疲惫地走\r
    vt. 跟踪，追踪\r
\r
9.  **train** /treɪn/\r
    n. 火车，列车；队列；一系列\r
    vt. vi. (接受)训练，(被)培训\r
    vt. 教育，培养…的能力\r
\r
10. **training** /ˈtreɪnɪŋ/\r
    n. 培训，训练；体育训练，锻炼\r
\r
11. **trait** /treɪt/\r
    n. 特性，特质\r
\r
12. **view** /vjuː/\r
    n. 看法；(思维)方法；视野；景色\r
    vt. 视为，看待；看，观看\r
\r
13. **viewpoint** /ˈvjuːpɔɪnt/\r
    n. 观点，看法；视角，角度\r
\r
14. **violence** /ˈvaɪələns/\r
    n. 暴力，暴行；激烈，热烈\r
\r
15. **violent** /ˈvaɪələnt/\r
    adj. 暴力的；(情感)强烈的；剧烈的\r
\r
16. **virtual** /ˈvɜːtʃuəl/\r
    adj. 几乎…的，实际上的；虚拟的\r
\r
17. **virtue** /ˈvɜːtʃuː/\r
    n. 美德；优点，长处\r
\r
18. **apparent** /əˈpærənt/\r
    adj. 显然的；表面上的，貌似的\r
\r
19. **appeal** /əˈpiːl/\r
    vi. 吸引；呼吁，恳求；上诉，打动\r
    n. 上诉；吸引力，魅力；呼吁\r
\r
20. **appear** /əˈpɪə(r)/\r
    vi. 出现；起源，问世；演出；出庭\r
    v. link. 似乎，好像\r
\r
21. **appearance** /əˈpɪərəns/\r
    n. 外观；公开露面；出现，问世\r
\r
22. **appliance** /əˈplaɪəns/\r
    n. (家用)电器，装置\r
\r
23. **applicable** /əˈplɪkəbl/\r
    adj. 适合的，适用的\r
\r
24. **application** /ˌæplɪˈkeɪʃn/\r
    n. 申请(书)；运用；应用程序\r
\r
25. **appoint** /əˈpɔɪnt/\r
    vt. 任命，指派；约定(时间、地点)\r
\r
26. **appointment** /əˈpɔɪntmənt/\r
    n. 约定，预约；任命，指派；职位\r
\r
27. **apply** /əˈplaɪ/\r
    vi. vt. 申请；(对…)适用\r
    vt. 应用，运用；涂抹，按，踩\r
\r
28. **appreciate** /əˈpriːʃieɪt/\r
    vt. 欣赏，感激；理解，体会到\r
    vi. 升值，增值\r
\r
29. **discriminate** /dɪˈskrɪmɪneɪt/\r
    vi. 歧视，区别对待\r
    vi. vt. 区分，辨别\r
\r
30. **discuss** /dɪˈskʌs/\r
    vt. 讨论，谈论；论述，阐述\r
\r
31. **disease** /dɪˈziːz/\r
    n. 疾病；弊病，恶习\r
\r
32. **escape** /ɪˈskeɪp/\r
    vi. 逃跑；幸免于难；泄漏\r
    vi. vt. 逃脱，摆脱\r
    vt. 避免；被忘掉，被忽视\r
    n. 逃跑；解脱；渗出(量)\r
\r
33. **especially** /ɪˈspeʃəli/\r
    adv. 特别，尤其；特地；非常\r
\r
34. **essay** /ˈeseɪ/\r
    n. 文章，论文；随笔，小品文\r
    vt. 企图，尝试\r
\r
35. **essence** /ˈesns/\r
    n. 本质，精髓；精油，香精\r
\r
36. **essential** /ɪˈsenʃl/\r
    adj. 必不可少的；基本的，本质的\r
    n. 必需品；要素，要点\r
\r
37. **establish** /ɪˈstæblɪʃ/\r
    vt. 建立，创立；使被认可；证实\r
\r
38. **estimate** /ˈestɪmeɪt/\r
    vt. 估计，估算，估价\r
    n. 估计，估算，估价\r
\r
39. **ethic** /ˈeθɪk/\r
    n. 伦理；道德体系；伦理学\r
\r
40. **ethnic** /ˈeθnɪk/\r
    adj. 种族的，民族的；有民族特色的\r
    n. 少数民族的人\r
\r
41. **evaluate** /ɪˈvæljueɪt/\r
    vt. 评价，评估\r
\r
42. **industrial** /ɪnˈdʌstriəl/\r
    adj. 工业的；工业发达的\r
    adj. 工业制造的；工业用的\r
\r
43. **industrialize** /ɪnˈdʌstriəlaɪz/\r
    vt. vi. 工业化\r
\r
44. **industry** /ˈɪndəstri/\r
    n. 工业；行业，产业；勤奋\r
\r
45. **inevitable** /ɪnˈevɪtəbl/\r
    adj. 不可避免的，必然发生的\r
\r
46. **miserable** /ˈmɪzrəbl/\r
    adj. 痛苦的，令人难受的；不友善的\r
\r
47. **misery** /ˈmɪzəri/\r
    n. 痛苦；穷困；不幸的事\r
\r
48. **mislead** /ˌmɪsˈliːd/\r
    vt. 误导，将…引入歧途\r
\r
49. **mix** /mɪks/\r
    vt. vi. (使)混合，掺和，融合\r
    vi. 交往，相处，交际\r
    n. 混合；配料，混录，混音\r
\r
50. **mixture** /ˈmɪkstʃə(r)/\r
    n. 混合，混合体；混合物，混合料\r
\r
51. **necessary** /ˈnesəseri/\r
    adj. 必需的，必要的；必然的\r
\r
52. **necessitate** /nəˈsesɪteɪt/\r
    vt. 使成为必需\r
\r
53. **necessity** /nəˈsesəti/\r
    n. 必要；必需品；不可避免的情况\r
\r
54. **negative** /ˈneɡətɪv/\r
    adj. 有害的；消极的；否定的\r
    adj. 否定的，阴性的\r
    n. 否定词；否定；底片\r
    vt. 否定，拒绝\r
\r
55. **negotiate** /nɪˈɡəʊʃieɪt/\r
    vi. 谈判，洽谈\r
    vt. 商定，达成(协议)；顺利通过\r
\r
56. **outer** /ˈaʊtə(r)/\r
    adj. 在外的，外面的；远离中心的\r
\r
57. **outlet** /ˈaʊtlet/\r
    n. 出口，发泄途径；经销店；折扣店\r
    n. 媒体公司；插座，排放口\r
\r
58. **outline** /ˈaʊtlaɪn/\r
    n. 概要，梗概，轮廓，外形\r
    vt. 概述，概括；勾勒\r
\r
59. **outlook** /ˈaʊtlʊk/\r
    n. 世界观，观点；前景；景色\r
\r
60. **output** /ˈaʊtpʊt/\r
    n. 产量；输出量；输出功率\r
    vt. 输出\r
\r
61. **poverty** /ˈpɒvəti/\r
    n. 贫穷，贫困；缺乏，短缺\r
\r
62. **power** /ˈpaʊə(r)/\r
    n. 政权；影响力；能力；权力\r
    n. 动力；(力量或能量)；电力供应\r
    vt. 驱动(机器或车辆)\r
    vi. vt. (使)迅猛移动\r
\r
63. **practical** /ˈpræktɪkl/\r
    adj. (实际的)切实可行的；务实的\r
    adj. (东西)实用的\r
    n. 实习课，实践课\r
\r
64. **practice** /ˈpræktɪs/\r
    n. 练习，训练；实践；惯例，常规\r
    vi. 练习，训练\r
    vt. 践行，信奉；从事(医律等职业)\r
\r
65. **practitioner** /prækˈtɪʃənə(r)/\r
    n. 从业人员；实践者\r
\r
66. **preach** /priːtʃ/\r
    vi. 讲道，布道，宣传，鼓吹\r
    vt. 宣讲，布道；宣传，鼓吹\r
\r
67. **precede** /prɪˈsiːd/\r
    vt. vi. 先于…(发生或存在)\r
    vt. 走在…之前\r
\r
68. **precaution** /prɪˈkɔːʃn/\r
    n. 预防措施，防备\r
\r
69. **precedent** /ˈpresɪdənt/\r
    n. 可援引的例子，先例，惯例\r
\r
70. **preceding** /prɪˈsiːdɪŋ/\r
    adj. 前面的，在先的\r
\r
71. **precious** /ˈpreʃəs/\r
    adj. 珍贵的，珍稀的；被珍惜的\r
    adv. (强调)太少，非常\r
\r
72. **precise** /prɪˈsaɪs/\r
    adj. 精确的，确切的；一丝不苟的\r
\r
73. **precision** /prɪˈsɪʒn/\r
    n. 精确，精密\r
    adj. 精确的，精密的\r
\r
74. **stress** /stres/\r
    n. 压力；重音；强调\r
    vt. 强调，重读\r
    vt. (使)焦虑不安\r
\r
75. **stretch** /stretʃ/\r
    vt. vi. 拉长，撑大；伸展，伸出\r
    vt. (织物)有弹性；体育训练，延续\r
    vt. 消耗，消耗；使竭尽所能，滥用\r
    n. 片段；一段时间；伸展；弹性\r
\r
`,zu=`# 2027考研英语红宝书\r
## 必考词Unit17 61词\r
\r
1.  **remote** /rɪˈməʊt/\r
    adj. 偏远的，遥远的，久远的\r
    adj. 微乎其微的；远程的；冷淡的\r
    n. 遥控器\r
\r
2.  **remove** /rɪˈmuːv/\r
    vt. 移走；去除；脱掉；免除(职位)\r
    n. 距离，差距\r
\r
3.  **removal** /rɪˈmuːvl/\r
    n. 移走，拿走；消除；免职；搬迁\r
\r
4.  **remain** /rɪˈmeɪn/\r
    v. link. 保持，仍是\r
    vi. 余下；尚待…；留下，逗留\r
\r
5.  **remainder** /rɪˈmeɪndə(r)/\r
    n. 剩余部分，剩余物；余数\r
\r
6.  **remains** /rɪˈmeɪnz/\r
    n. 残余，剩余物，遗迹；遗体\r
\r
7.  **remedy** /ˈremədi/\r
    n. 解决方法；药品，疗法\r
    vt. 纠正，补救\r
\r
8.  **remember** /rɪˈmembə(r)/\r
    vt. vi. 记得，想起\r
    vt. 记住(去做某事)；纪念\r
\r
9.  **remind** /rɪˈmaɪnd/\r
    vt. 提醒；使想起\r
\r
10. **render** /ˈrendə(r)/\r
    vt. 使变得；给予，提供；表达；翻译\r
\r
11. **contemporary** /kənˈtemprəri/\r
    adj. 当代的，现代的；同时代的\r
    n. 同时期的人，同时代的人\r
\r
12. **contempt** /kənˈtempt/\r
    n. 鄙视，蔑视；藐视法庭\r
\r
13. **content** /ˈkɒntent/\r
    n. 内容；目录；所含之物；含量\r
    adj. 满足的，满意的；愿意的\r
    vt. 使满意，使满足\r
\r
14. **contend** /kənˈtend/\r
    vt. 声称，主张\r
    vi. 竞争，争夺；处理，对付\r
\r
15. **contest** /ˈkɒntest/\r
    n. 比赛，竞赛；争夺，竞争\r
    vt. 争辩，提出异议；争取赢得\r
\r
16. **context** /ˈkɒntekst/\r
    n. 背景，环境；上下文，语境\r
\r
17. **contract** /ˈkɒntrækt/\r
    n. 合同，合约，契约\r
    vi. vt. (使)缩小，收缩；签合同\r
    vt. 患上(疾病)\r
\r
18. **contradict** /ˌkɒntrəˈdɪkt/\r
    vt. 反驳，否认；相矛盾\r
\r
19. **contrary** /ˈkɒntrəri/\r
    adj. 相对立的，相反的\r
\r
20. **contrast** /ˈkɒntrɑːst/\r
    n. 差异，差别；截然不同的事物\r
    vt. 对照，对比\r
    vi. 截然不同，有明显差异\r
\r
21. **diverse** /daɪˈvɜːs/\r
    adj. 多样的，形形色色的\r
\r
22. **diversion** /daɪˈvɜːʃn/\r
    n. 转向，转移；令人分心的事物\r
    n. 消遣，娱乐\r
\r
23. **divert** /daɪˈvɜːt/\r
    vt. 使转向；使分心；改变用途\r
\r
24. **divide** /dɪˈvaɪd/\r
    vi. vt. (使)分开，分成；除以，除\r
    vt. 分配；使分离；使产生分歧\r
    vi. (道路)分岔\r
    n. 不同，分歧；分水岭\r
\r
25. **dividend** /ˈdɪvɪdend/\r
    n. 红利，股息；被除数\r
\r
26. **division** /dɪˈvɪʒn/\r
    n. 分开，分配；分歧；除法；部门\r
\r
27. **document** /ˈdɒkjumənt/\r
    n. 文件，文档，文献\r
    vt. 记录，记载；用文献证明\r
\r
28. **documentary** /ˌdɒkjuˈmentri/\r
    n. 纪录片，纪实节目\r
    adj. 记录的，纪实的；文献的\r
\r
29. **execute** /ˈeksɪkjuːt/\r
    vt. 将…处死；执行；创作；使生效\r
\r
30. **executive** /ɪɡˈzekjətɪv/\r
    n. 经理，主管；行政部门\r
    adj. 执行的，行政的；高级的\r
\r
31. **exemplify** /ɪɡˈzemplɪfaɪ/\r
    vt. 是…的典范；举例说明\r
\r
32. **exert** /ɪɡˈzɜːt/\r
    vt. 施加，运用，行使；努力，竭力\r
\r
33. **exhaust** /ɪɡˈzɔːst/\r
    vt. 使…精疲力竭；耗尽；详尽探讨\r
    n. (发动机排出的)废气；排气管\r
\r
34. **exist** /ɪɡˈzɪst/\r
    vi. 存在；生存\r
\r
35. **existence** /ɪɡˈzɪstəns/\r
    n. 现实存在；生存，生活\r
\r
36. **exotic** /ɪɡˈzɒtɪk/\r
    adj. 异国风情的，外来的\r
\r
37. **moral** /ˈmɒrəl/\r
    adj. 道德的，出于道义的；有道德的\r
    n. 品行，道德；寓意\r
\r
38. **morality** /məˈræləti/\r
    n. 道德观，道德；道德性，正当性\r
\r
39. **moreover** /mɔːrˈəʊvə(r)/\r
    adv. 而且，此外\r
\r
40. **mostly** /ˈməʊstli/\r
    adv. 几乎全部地；主要地，通常\r
\r
41. **prior** /ˈpraɪə(r)/\r
    adj. 先前的；优先的；在…前面的\r
    n. 犯罪前科\r
\r
42. **priority** /praɪˈɒrəti/\r
    n. 当务之急；优先权；优先通行权\r
\r
43. **privacy** /ˈprɪvəsi/\r
    n. 隐私；独处，清静\r
\r
44. **private** /ˈpraɪvət/\r
    adj. 私人的；私下的；私营的\r
    n. 二等兵，列兵；私处\r
\r
45. **privilege** /ˈprɪvəlɪdʒ/\r
    n. 特权；荣幸；权势\r
    vt. 给予…特权；给予…优待\r
\r
46. **prudent** /ˈpruːdnt/\r
    adj. 谨慎的，慎重的；精明的\r
\r
47. **submit** /səbˈmɪt/\r
    vt. 提交，递呈；主张\r
    vi. vt. 顺从，屈服；被迫接受\r
\r
48. **subordinate** /səˈbɔːdɪnət/\r
    adj. 下级的，从属的；次要的\r
    n. 下级，下属\r
    vt. 把…置于次要地位\r
\r
49. **subscribe** /səbˈskraɪb/\r
    vi. 订阅，订购；定期赞助；同意\r
    vi. 申请，报名\r
\r
50. **subsequent** /ˈsʌbsɪkwənt/\r
    adj. 随后的，后来的\r
\r
51. **substance** /ˈsʌbstəns/\r
    n. 物质；根据；主旨；重要性\r
\r
52. **substantial** /səbˈstænʃl/\r
    adj. 大量的，重大的；实质性的\r
    adj. 大而坚固的\r
\r
53. **substitute** /ˈsʌbstɪtjuːt/\r
    n. 代替者，代替物；替补运动员\r
    vi. vt. 替换，取代\r
\r
54. **subtle** /ˈsʌtl/\r
    adj. 细微的，微妙的；含蓄的；巧妙的\r
\r
55. **associate** /əˈsəʊsieɪt/\r
    vt. 联想，联系\r
    vi. 与…为伍；混在一起\r
    adj. (等级或头衔)准的，副的\r
\r
56. **association** /əˌsəʊsiˈeɪʃn/\r
    n. 协会，社团；联系，关联；联想\r
\r
57. **amend** /əˈmend/\r
    vt. 修订(法律、文件等)\r
\r
58. **among** /əˈmʌŋ/\r
    prep. 在…中；在一群人或物之中\r
\r
59. **amount** /əˈmaʊnt/\r
    n. 数量，金额\r
    vi. 共计；等同于；发展成\r
\r
60. **ample** /ˈæmpl/\r
    adj. 大量的，足够的；丰满的\r
\r
61. **amuse** /əˈmjuːz/\r
    vt. 逗笑，逗乐；给…提供娱乐\r
\r
`,Bu=`# 2027考研英语红宝书\r
## 必考词Unit18 71词\r
\r
1.  **stick** /stɪk/\r
    vt. vi. 刺入，插入；粘住\r
    vt. 随手放置\r
    vi. 卡住；被接受\r
    n. 枝条，条状物，棍\r
\r
2.  **stimulate** /ˈstɪmjuleɪt/\r
    vt. 刺激；激发，激励；使活跃\r
\r
3.  **stir** /stɜː(r)/\r
    vt. vi. 搅动，搅拌；(使)微动\r
    vt. 引起，造成，激起\r
    vi. (情绪等)开始出现\r
    n. 激动，愤怒；搅动，搅拌\r
\r
4.  **stipulate** /ˈstɪpjuleɪt/\r
    vt. 规定，约定，明确要求\r
\r
5.  **infer** /ɪnˈfɜː(r)/\r
    vt. 推断，推论；暗示\r
\r
6.  **inference** /ˈɪnfərəns/\r
    n. 推论，推断的结果；推理，推断\r
\r
7.  **inferior** /ɪnˈfɪəriə(r)/\r
    adj. 较差的，较次的；级别低的\r
    n. 下级，下属\r
\r
8.  **influence** /ˈɪnfluəns/\r
    n. 影响(力)；有影响的人(或事物)\r
    vt. 影响，对…起作用\r
\r
9.  **influential** /ˌɪnfluˈenʃl/\r
    adj. 有影响力的，有权势的\r
    n. 有影响力的人\r
\r
10. **inform** /ɪnˈfɔːm/\r
    vt. 通知，告知；了解；影响\r
\r
11. **information** /ˌɪnfəˈmeɪʃn/\r
    n. 信息，情报；电话号码查询台\r
\r
12. **approach** /əˈprəʊtʃ/\r
    vi. vt. 接近，靠近\r
    vt. 接洽，要求；处理，对付\r
    n. 方法，态度；接近，靠近；路径\r
\r
13. **appropriate** /əˈprəʊpriət/\r
    adj. 适当的，恰当的\r
    vt. 盗用，挪用；拨出(款项)\r
\r
14. **approval** /əˈpruːvl/\r
    n. 赞成，同意；批准，许可\r
\r
15. **approve** /əˈpruːv/\r
    vi. 同意，赞成，赞许\r
    vt. 批准，通过；认证\r
\r
16. **apt** /æpt/\r
    adj. 有…倾向的；恰当的；聪明的\r
\r
17. **conform** /kənˈfɔːm/\r
    vi. 遵守；顺应大流；相一致\r
\r
18. **confront** /kənˈfrʌnt/\r
    vt. 直面，正视；使面对；对峙；对质\r
\r
19. **confuse** /kənˈfjuːz/\r
    vt. 使困惑；将…混淆；使复杂化\r
\r
20. **confusion** /kənˈfjuːʒn/\r
    n. 困惑；混淆；窘迫；混乱的局面\r
\r
21. **congress** /ˈkɒŋɡres/\r
    n. 代表大会；国会\r
\r
22. **connect** /kəˈnekt/\r
    vt. vi. (使)连接，(使)联结\r
    vt. 把…联系起来；为…接通电话\r
    vi. 衔接；与某人建立关系；击中\r
\r
23. **connection** /kəˈnekʃn/\r
    n. 联系，关联；联结，连接；人脉\r
\r
24. **conscious** /ˈkɒnʃəs/\r
    adj. 意识到的；清醒的；有意的\r
    adj. 注重…的，有…意识的\r
\r
25. **continual** /kənˈtɪnjuəl/\r
    adj. 不停的，无间断的；频繁的\r
\r
26. **continue** /kənˈtɪnjuː/\r
    vi. vt. 继续\r
\r
27. **continuous** /kənˈtɪnjuəs/\r
    adj. 持续的，连续的；进行式的\r
\r
28. **dismiss** /dɪsˈmɪs/\r
    vt. 不予考虑；解雇，开除；消除\r
    vt. 解散，让(某人)离开；驳回\r
\r
29. **disorder** /dɪsˈɔːdə(r)/\r
    n. 失调，紊乱，疾病；混乱；动乱\r
\r
30. **disperse** /dɪˈspɜːs/\r
    vi. vt. (使)扩散，(使)散开\r
\r
31. **displace** /dɪsˈpleɪs/\r
    vt. 取代；迫使…离开家园；移走\r
\r
32. **display** /dɪˈspleɪ/\r
    vt. 陈列，展示；显示，表现\r
    n. 陈列，表演；显示，表现，显示器\r
    vi. (为求偶而)炫耀\r
\r
33. **distribute** /dɪˈstrɪbjuːt/\r
    vt. 分发，分配；分销；使分布\r
\r
34. **distort** /dɪˈstɔːt/\r
    vt. 使变形，使扭曲；歪曲，曲解\r
\r
35. **distract** /dɪˈstrækt/\r
    vt. 分散(注意力)，使分心\r
\r
36. **evolution** /ˌiːvəˈluːʃn/\r
    n. 进化；演变，发展\r
\r
37. **evolve** /iˈvɒlv/\r
    vi. vt. 进化；逐步发展\r
\r
38. **exaggerate** /ɪɡˈzædʒəreɪt/\r
    vi. vt. 夸张，夸大\r
\r
39. **examine** /ɪɡˈzæmɪn/\r
    vt. 仔细研究；仔细检查；测验\r
\r
40. **mock** /mɒk/\r
    vt. vi. 嘲笑，(通过模仿)取笑\r
    vt. 不尊重，轻慢\r
    adj. 假装的，模拟的\r
    n. (英国)模拟考试\r
\r
41. **mode** /məʊd/\r
    n. 方式，风格，模式，状态\r
\r
42. **model** /ˈmɒdl/\r
    n. 模型；模特儿；样式，范例\r
    vi. 做模特儿\r
    vt. 将…做成模型；模仿\r
\r
43. **moderate** /ˈmɒdərət/\r
    adj. 中等的；温和的；有节制的\r
    vt. vi. 缓和，使适中，调节，主持\r
    n. 持温和观点者\r
\r
44. **modern** /ˈmɒdn/\r
    adj. 现代的，新式的\r
\r
45. **modernization** /ˌmɒdənəˈzeɪʃn/\r
    n. 现代化\r
\r
46. **modest** /ˈmɒdɪst/\r
    adj. 谦虚的；不太大的；端庄的\r
\r
47. **modify** /ˈmɒdɪfaɪ/\r
    vt. 修改，改进，调整；(语法)修饰\r
\r
48. **predecessor** /ˈpriːdisesə(r)/\r
    n. 前任，前辈；…的前身\r
\r
49. **predict** /prɪˈdɪkt/\r
    vt. 预言，预测，预告\r
\r
50. **preface** /ˈprefəs/\r
    n. (书的)序言，前言，绪论\r
    vt. 以…为开端；以…作为开场白\r
\r
51. **preferable** /ˈprefrəbl/\r
    adj. 更好的，更可取的，更合适的\r
\r
52. **preference** /ˈprefrəns/\r
    n. 偏好，优惠，优待\r
\r
53. **prejudice** /ˈpredʒudɪs/\r
    n. 偏见，成见\r
    vt. 使有偏见；损害，危害\r
\r
54. **preliminary** /prɪˈlɪmɪnəri/\r
    adj. 初步的，预备的，开始的\r
    n. 初步行动，准备工作\r
\r
55. **premier** /ˈpremiə(r)/\r
    adj. 首要的，最好的\r
    n. 总理，首相\r
\r
56. **premise** /ˈpremɪs/\r
    n. 前提；房屋及土地，经营场所\r
\r
57. **premium** /ˈpriːmiəm/\r
    n. 保险费；额外费用\r
    adj. 优质的，高端的\r
\r
58. **preparation** /ˌprepəˈreɪʃn/\r
    n. 准备，准备工作；制剂\r
\r
59. **reflect** /rɪˈflekt/\r
    vt. 映出(影像)；反射；反映，显示\r
    vi. vt. 认真思考\r
\r
60. **reflection** /rɪˈflekʃn/\r
    n. 映像，反射；反映；深思\r
\r
61. **reform** /rɪˈfɔːm/\r
    vt. 变革，改革，革新\r
    vi. vt. (使)改过自新\r
\r
62. **reject** /rɪˈdʒekt/\r
    vt. 拒绝接受；不录用；抛弃；排斥\r
    n. 次品，不合格者\r
\r
63. **rejoice** /rɪˈdʒɔɪs/\r
    vi. vt. 非常高兴，深感欣喜\r
\r
64. **relate** /rɪˈleɪt/\r
    vt. vi. 联系，(使)有关联\r
    vt. 叙述，讲述；理解，有共鸣\r
\r
65. **relation** /rɪˈleɪʃn/\r
    n. 关系，交往；联系；亲戚\r
\r
66. **relationship** /rɪˈleɪʃn/\r
    n. 关系，联系；恋爱关系\r
\r
67. **relative** /ˈrelətɪv/\r
    n. 亲戚，亲属\r
    adj. 相对的；与…相比；关于…的\r
\r
68. **relativity** /ˌreləˈtɪvəti/\r
    n. 相对论；相对性\r
\r
69. **relevant** /ˈreləvənt/\r
    adj. 有关的，切题的；有价值的\r
\r
70. **overlook** /ˌəʊvəˈlʊk/\r
    vt. 忽略，忽视；不计较；俯视\r
\r
71. **overseas** /ˌəʊvəˈsiːz/\r
    adv. 在国外，在海外\r
    adj. 国外的，海外的\r
\r
`,Vu=`# 2027考研英语红宝书\r
## 必考词Unit2 65词\r
\r
1.  **mediate** /ˈmiːdieɪt/\r
    vi. 调停，调解，斡旋\r
    vt. 找到解决方法；调节，影响\r
\r
2.  **meditation** /ˌmedɪˈteɪʃn/\r
    n. 冥想，默想；沉思，感想\r
\r
3.  **medium** /ˈmiːdiəm/\r
    adj. 中等的，中号的\r
    n. 传播媒介；手段，工具；培养基，媒质\r
\r
4.  **media** /ˈmiːdiə/\r
    n. 媒体，传播媒介\r
\r
5.  **elaborate** /ɪˈlæbərət/\r
    adj. 复杂的，详尽的，精心制作的\r
    vi. vt. 详尽说明，详细阐述\r
\r
6.  **elegant** /ˈelɪɡənt/\r
    adj. 优雅的，雅致的；简洁巧妙的\r
\r
7.  **element** /ˈelɪmənt/\r
    n. 要素，基本部分；元素；少量\r
\r
8.  **elementary** /ˌelɪˈmentri/\r
    adj. 基本的；初级的；小学的\r
\r
9.  **eliminate** /ɪˈlɪmɪneɪt/\r
    vt. 消除，清除；淘汰；消灭，干掉\r
\r
10. **abolish** /əˈbɒlɪʃ/\r
    vt. 废止，取消\r
\r
11. **absence** /ˈæbsəns/\r
    n. 缺席，缺勤；不存在，缺乏\r
\r
12. **absent** /ˈæbsənt/\r
    adj. 缺席的；缺少的；心不在焉的\r
    vt. 缺席，不在场\r
    prep. 没有\r
\r
13. **abroad** /əˈbrɔːd/\r
    adv. 在国外，去国外；广为流传地\r
\r
14. **absolute** /ˈæbsəluːt/\r
    adj. 绝对的；无疑的；不受约束的\r
    n. 绝对真理\r
\r
15. **absorb** /əbˈzɔːb/\r
    vt. 吸收，理解，掌握；吞并；缓冲\r
    vt. 吸引(注意力)；承受，承担\r
\r
16. **abstract** /ˈæbstrækt/\r
    adj. 抽象的；抽象派的\r
    n. 摘要，梗概；抽象派艺术作品\r
    vt. 提取，抽取；写…的摘要\r
\r
17. **ban** /bæn/\r
    n. 禁止，禁令\r
    vt. 禁止，取缔；禁止(某人)做某事\r
\r
18. **bar** /bɑː(r)/\r
    n. 酒吧；吧台；小馆；棒；律师界\r
    vt. 闩上(门或窗)；阻挡，禁止\r
    prep. 除…之外\r
\r
19. **bare** /beə(r)/\r
    adj. 赤裸的；荒芜的；基本的；空的\r
    vt. 使暴露\r
\r
20. **barely** /ˈbeəli/\r
    adv. 勉强才能；几乎不；仅仅；刚刚\r
\r
21. **bargain** /ˈbɑːɡən/\r
    n. 便宜货；协议，协定\r
    vi. 讨价还价，洽谈，谈条件\r
\r
22. **capable** /ˈkeɪpəbl/\r
    adj. 能做…的；能力强的，能干的\r
\r
23. **capacity** /kəˈpæsəti/\r
    n. 容量；能力；职责；生产量\r
\r
24. **capital** /ˈkæpɪtl/\r
    n. 首都；资本，资金；大写字母\r
    adj. 死刑的；大写的\r
\r
25. **captive** /ˈkæptɪv/\r
    adj. 被关押的；非自愿的\r
    n. 俘虏，囚徒\r
\r
26. **capture** /ˈkæptʃə(r)/\r
    vt. 抓住，俘虏，捕捉；攻占，夺取\r
    n. 捕获，攻占，夺取\r
\r
27. **career** /kəˈrɪə(r)/\r
    n. 职业，事业；职业生涯\r
    vi. (失控地)猛冲，疾驶\r
\r
28. **careful** /ˈkeəfl/\r
    adj. 小心谨慎的；细心的，周密的\r
\r
29. **case** /keɪs/\r
    n. 情况，事例；案件；论据；箱，盒\r
\r
30. **cast** /kɑːst/\r
    vt. 扔，抛；向…投以；投射；选角\r
    vt. 投(票)；浇铸\r
    vi. vt. 投(钓线)，抛(钓钩)\r
    n. 全体演员；铸造品；石膏绷带\r
\r
31. **casual** /ˈkæʒuəl/\r
    adj. 随意的；非正式的；临时的\r
    n. 便装，便鞋；临时工\r
\r
32. **casualty** /ˈkæʒuəlti/\r
    n. 伤亡人员；受害者；急诊室\r
\r
33. **catch** /kætʃ/\r
    vt. 接住，抓住；逮捕；赶上；得病\r
    vi. 被绊住；烧着\r
    n. 接(球等)；总捕获量；扣件\r
\r
34. **category** /ˈkætəɡəri/\r
    n. 种类，类别\r
\r
35. **cater** /ˈkeɪtə(r)/\r
    vi. 提供饮食，承办酒席\r
    vi. 满足，迎合\r
\r
36. **cause** /kɔːz/\r
    n. 原因，理由；事业；诉讼案\r
    vt. 导致，使发生\r
\r
37. **caution** /ˈkɔːʃn/\r
    n. 小心，谨慎；警告，告诫\r
    vi. vt. 警告，告诫，提醒\r
\r
38. **cautious** /ˈkɔːʃəs/\r
    adj. 谨慎的，慎重的，小心的\r
\r
39. **cease** /siːs/\r
    vi. vt. (使)停止\r
\r
40. **celebrate** /ˈselɪbreɪt/\r
    vi. vt. 祝贺，庆祝\r
    vt. 主持(宗教仪式)；颂扬，赞美\r
\r
41. **celebrity** /səˈlebrəti/\r
    n. 名人，明星；名声，名气\r
\r
42. **ceremony** /ˈserəməni/\r
    n. 仪式，典礼；礼数，客套\r
\r
43. **certain** /ˈsɜːtn/\r
    adj. 必然的；确信的；某个，一点\r
    pron. 某些\r
\r
44. **certainty** /ˈsɜːtnti/\r
    n. 确实，确定性；必然的事\r
\r
45. **certificate** /səˈtɪfɪkət/\r
    n. 证明，证书；结业证书\r
\r
46. **certify** /ˈsɜːtɪfaɪ/\r
    vt. 证明，证实；授予专业合格证书\r
\r
47. **decline** /dɪˈklaɪn/\r
    vi. 下降，减少；衰退，恶化\r
    vi. vt. 婉拒，谢绝\r
\r
48. **decrease** /dɪˈkriːs/\r
    vi. vt. 减少，降低\r
    n. 减少，降低\r
\r
49. **decree** /dɪˈkriː/\r
    n. 法令，政令；判决，裁定\r
    vt. vi. 判决；颁布\r
\r
50. **deem** /diːm/\r
    vt. 认为，视为，相信\r
\r
51. **dedicate** /ˈdedɪkeɪt/\r
    vt. 献身，致力于；将(书等)献给\r
\r
52. **deduce** /dɪˈdjuːs/\r
    vt. 推断，推理，演绎\r
\r
53. **deduct** /dɪˈdʌkt/\r
    vt. (从总量中)扣除，减去\r
\r
54. **fashion** /ˈfæʃn/\r
    n. 时尚，流行款式；时装业；方式\r
    vt. 制作，塑造\r
\r
55. **fashionable** /ˈfæʃnəbl/\r
    adj. 流行的，时尚的；有钱人光顾的\r
\r
56. **favour** /ˈfeɪvə(r)/\r
    n. 帮助，恩惠；赞同，支持；偏爱\r
    vt. 更喜欢；偏爱；有利于\r
\r
57. **favourable** /ˈfeɪvərəbl/\r
    adj. 赞成的；讨人喜欢的；有利的\r
\r
58. **favourite** /ˈfeɪvərɪt/\r
    adj. 最喜欢的，最喜爱的\r
    n. 最喜欢的人或物；受宠的人\r
\r
59. **sit** /sɪt/\r
    vi. 坐，坐着；被放在；担任\r
    vt. 使坐，使就座\r
    vi. 参加考试\r
\r
60. **site** /saɪt/\r
    n. 场所，地点；工地；网站\r
    vt. 使坐落于，为…选址\r
\r
61. **situate** /ˈsɪtʃueɪt/\r
    vt. 使坐落于，使位于；将…置于\r
\r
62. **situation** /ˌsɪtʃuˈeɪʃn/\r
    n. 情况，形势；位置，环境；工作\r
\r
63. **skeleton** /ˈskelɪtn/\r
    n. 骨骼；(建筑等的)框架；梗概\r
\r
64. **skeptical** /ˈskeptɪkl/\r
    adj. 表示怀疑的，持怀疑态度的\r
    vi. 好说，好说；详细阐述\r
\r
65. **sketch** /sketʃ/\r
    n. 素描，草图；简报，概述；小品\r
    vt. vi. 画素描，画速写\r
    vt. 概述，简述\r
`,Hu=`# 2027考研英语红宝书\r
## 必考词Unit3 83词\r
\r
1.  **embrace** /ɪmˈbreɪs/\r
    vt. 拥抱；接受；信奉；包含\r
    vi. 欣然接受，包括\r
\r
2.  **embed** /ɪmˈbed/\r
    vt. 使…嵌入；派遣(战地记者)\r
\r
3.  **embody** /ɪmˈbɒdi/\r
    vt. 使具体化，体现；收录，包括\r
\r
4.  **embryo** /ˈembriəʊ/\r
    n. 胚胎\r
\r
5.  **elicit** /iˈlɪsɪt/\r
    vt. 引出，诱出，套出\r
\r
6.  **elite** /eɪˈliːt/\r
    n. 精英，上层人士\r
    adj. 精英的，精锐的\r
\r
7.  **elsewhere** /ˌelsˈweə(r)/\r
    adv. 在别处，去别处\r
\r
8.  **thirst** /θɜːst/\r
    n. 口渴；渴求\r
    vi. 渴求\r
\r
9.  **thorough** /ˈθʌrə/\r
    adj. 全面的，彻底的；(人)仔细的\r
\r
10. **though** /ðəʊ/\r
    conj. 尽管，虽然\r
    conj. adv. 可是，然而\r
\r
11. **thought** /θɔːt/\r
    n. 想法，主意；心思；思考；关心\r
\r
12. **thoughtful** /ˈθɔːtfl/\r
    adj. 沉思的；体贴的；深思熟虑的\r
\r
13. **threat** /θret/\r
    n. 威胁；坏事发生的可能\r
\r
14. **threaten** /ˈθretn/\r
    vt. 威胁；危害到\r
    vi. vt. (坏事)可能发生，可能引发\r
\r
15. **update** /ˌʌpˈdeɪt/\r
    vt. 更新，升级；提供最新消息\r
    n. 更新，升级；最新消息\r
\r
16. **upgrade** /ˌʌpˈɡreɪd/\r
    vt. 升级，提拔\r
    n. 改善，升级\r
\r
17. **uphold** /ʌpˈhəʊld/\r
    vt. 支持，维护；维持(原判)\r
\r
18. **upset** /ʌpˈset/\r
    adj. 难过的，心烦的；肠胃不适的\r
    vt. 使烦恼；打乱；使(肠胃)不适\r
    n. 意外结果，冷门；肠胃病，苦恼\r
\r
19. **up-to-date** /ˌʌp tə ˈdeɪt/\r
    adj. 新式的，掌握最新信息的\r
\r
20. **ventilate** /ˈventɪleɪt/\r
    vt. 使…通风；公开表达，公开讨论\r
\r
21. **venture** /ˈventʃə(r)/\r
    n. (有风险的)投资活动，企业\r
    vi. 冒险去某地\r
    vt. 试探地说(或做)\r
\r
22. **widespread** /ˈwaɪdspred/\r
    adj. 普遍的，广泛的\r
\r
23. **win** /wɪn/\r
    vi. 赢，获胜\r
    vt. 赢得，获得\r
    n. 赢，胜利\r
\r
24. **wit** /wɪt/\r
    n. 机智风趣(的人)；头脑；明智\r
\r
25. **withdraw** /wɪðˈdrɔː/\r
    vi. (使)撤回，撤离；(使)退出\r
    vt. 收回，撤销；取(款)；停止供应\r
    vi. 不与人交往\r
\r
26. **witness** /ˈwɪtnəs/\r
    n. 目击者；(出庭的)证人；见证人\r
    vi. 目击，目睹；见证；签署\r
\r
27. **inaugurate** /ɪˈnɔːɡjəreɪt/\r
    vt. 使正式就任；为…举行落成仪式\r
    vt. 开创\r
\r
28. **incentive** /ɪnˈsentɪv/\r
    n. 激励，动机，刺激\r
\r
29. **incidence** /ˈɪnsɪdəns/\r
    n. 发生(率)\r
\r
30. **incident** /ˈɪnsɪdənt/\r
    n. 事件；(两国间的)冲突\r
\r
31. **incidentally** /ˌɪnsɪˈdentli/\r
    adv. 顺便提一下；偶然地，附带地\r
\r
32. **incline** /ɪnˈklaɪn/\r
    vi. vt. (使)倾向；(使)倾斜\r
    vt. 点(头)\r
    n. 斜坡，斜面\r
\r
33. **academic** /ˌækəˈdemɪk/\r
    adj. 学术的；纯理论的\r
    n. 学者，大学教师\r
\r
34. **academy** /əˈkædəmi/\r
    n. 学院；私立学校；学会，研究院\r
\r
35. **accelerate** /əkˈseləreɪt/\r
    vi. vt. (使)加快\r
    vi. (车辆等)加速\r
\r
36. **accept** /əkˈsept/\r
    vi. 接受，同意\r
    vt. 认可，承担，容忍，接纳\r
\r
37. **acceptance** /əkˈseptəns/\r
    n. 接受；认可，赞同；接纳\r
\r
38. **access** /ˈækses/\r
    n. 进入(权)，通道；使用权\r
    vt. 访问，存取；进入\r
\r
39. **accessory** /əkˈsesəri/\r
    n. 附件，附属品；配饰；帮凶\r
\r
40. **begin** /bɪˈɡɪn/\r
    vi. vt. 开始\r
\r
41. **beginning** /bɪˈɡɪnɪŋ/\r
    n. 开头，开始部分；起源，初期\r
\r
42. **behalf** /bɪˈhɑːf/\r
    n. 代表(某人)；为了…的利益\r
\r
43. **behave** /bɪˈheɪv/\r
    vi. 表现；产生自然反应，发生作用\r
    vi. 表现得体，有礼貌\r
\r
44. **behaviour** /bɪˈheɪvjə(r)/\r
    n. 行为，举止；表现方式\r
\r
45. **belief** /bɪˈliːf/\r
    n. 信念；信任；信仰\r
\r
46. **believe** /bɪˈliːv/\r
    vi. 相信\r
    vt. 认为\r
    vi. 有宗教信仰\r
\r
47. **belong** /bɪˈlɒŋ/\r
    vi. 属于；应在(某处)；能适应\r
\r
48. **beneficial** /ˌbenɪˈfɪʃl/\r
    adj. 有益的，有利的\r
\r
49. **benefit** /ˈbenɪfɪt/\r
    n. 好处；救济金；福利；慈善活动\r
    vt. vi. 使受益，得益于\r
\r
50. **benevolent** /bəˈnevələnt/\r
    adj. 仁慈的，慈爱的\r
\r
51. **benign** /bɪˈnaɪn/\r
    adj. 和善的；良性的；无害的；宜人的\r
\r
52. **challenge** /ˈtʃælɪndʒ/\r
    n. 挑战；艰巨任务；质疑\r
    vt. 质疑；向…发出挑战\r
\r
53. **chance** /tʃɑːns/\r
    n. 机会；可能性；风险；偶然\r
    vt. 冒险，拿…冒风险\r
    vi. 偶然发生，碰巧\r
\r
54. **change** /tʃeɪndʒ/\r
    vi. vt. (使)变化，换衣服；换乘\r
    vt. 使不同；转换；替代；零钱\r
    n. 改变，变化；替代；零钱\r
\r
55. **channel** /ˈtʃænl/\r
    n. 频道；途径；渠道；海峡；水道\r
    vt. 为…输送(资金等)；输送，传送\r
\r
56. **character** /ˈkærəktə(r)/\r
    n. 性格；角色；特点；字符；名誉\r
\r
57. **characterise** /ˈkærəktəraɪz/\r
    vt. 是…的特征；描绘，描述；刻画\r
\r
58. **characteristic** /ˌkærəktəˈrɪstɪk/\r
    n. 特色，特点\r
    adj. 典型的，独特的，特有的\r
\r
59. **defend** /dɪˈfend/\r
    vi. vt. 防御，保卫；防守；为被告辩护\r
    vt. 为…辩护；卫冕\r
\r
60. **define** /dɪˈfaɪn/\r
    vt. 给…下定义；阐明；限定\r
\r
61. **definite** /ˈdefɪnət/\r
    adj. 确定的；清楚的；肯定的\r
    n. 确定的事(或人)\r
\r
62. **definition** /ˌdefɪˈnɪʃn/\r
    n. 定义，释义；清晰，分明\r
\r
63. **defy** /dɪˈfaɪ/\r
    vt. 违抗，违反；难以(描述、解释等)\r
\r
64. **degree** /dɪˈɡriː/\r
    n. 度；程度；学位\r
\r
65. **delay** /dɪˈleɪ/\r
    n. 延误；耽搁的时间；延期，延迟\r
    vi. vt. 推迟，使延期\r
    vt. 使延误，使耽搁\r
\r
66. **deliberate** /dɪˈlɪbərət/\r
    adj. 故意的；(动作)从容的\r
    vi. vt. 慎重考虑\r
\r
67. **delicate** /ˈdelɪkət/\r
    adj. 微妙的；易受损的；精美的\r
    adj. (仪器等)精密的；柔弱的\r
\r
68. **deliver** /dɪˈlɪvə(r)/\r
    vt. 递送，传送；履行；兑现\r
    vt. 发表(讲话)；交与；接生；分娩\r
\r
69. **delivery** /dɪˈlɪvəri/\r
    n. 递送(之物)；分娩；发言方式\r
\r
70. **fiction** /ˈfɪkʃn/\r
    n. 小说；虚构之事，幻想\r
\r
71. **field** /fiːld/\r
    n. 田，地；领域；运动场；实地\r
    vt. 使参加竞选；处理，应付\r
\r
72. **fierce** /fɪəs/\r
    adj. 凶猛的；激烈的；(天气)猛烈的\r
\r
73. **fight** /faɪt/\r
    vi. vt. 战斗；打架；斗争；努力争\r
    vi. 争取；奋力抵抗\r
    n. 打架；战斗；竞赛；争吵\r
\r
74. **figure** /ˈfɪɡə(r)/\r
    n. 数字；算术；人物；人影；身材\r
    n. 塑像；(书中的)图表\r
    vt. 认为，以为；计算\r
    vi. 弄懂，弄清楚\r
\r
75. **finance** /ˈfaɪnæns/\r
    n. 财政，金融；资金；财务状况\r
    vt. 给…提供资金，资助\r
\r
76. **financial** /faɪˈnænʃl/\r
    adj. 财政的，金融的；财务的\r
\r
77. **finding** /ˈfaɪndɪŋ/\r
    n. 研究结果；发现；判决\r
\r
78. **finite** /ˈfaɪnaɪt/\r
    adj. 有限的，有限的\r
\r
79. **firm** /fɜːm/\r
    n. 公司；商行；事务所\r
    adj. 坚硬的；牢固的；坚定的\r
    vi. 使强壮，使变坚固\r
    vi. 回升，稳步上涨\r
\r
80. **first** /fɜːst/\r
    det. ord. 第一；最重要的，首要\r
    adv. 首先，第一；首次，第一次\r
    n. 第一个人(或事)；空前的成就\r
\r
81. **fit** /fɪt/\r
    vi. vt. 适合，合身；容纳；符合\r
    vt. 安装；使适应；使(装备)\r
    adj. 健康的；健康的；适合的\r
\r
82. **global** /ˈɡləʊbl/\r
    adj. 全球的；全面的，整体的\r
\r
83. **globe** /ɡləʊb/\r
    n. 地球；世界；地球仪；球状物\r
`,Uu=`# 2027考研英语红宝书\r
## 必考词Unit4 68词\r
\r
1.  **abandon** /əˈbændən/\r
    vt. 放弃，抛弃；沉湎于\r
    放任，放纵\r
\r
2.  **abide** /əˈbaɪd/\r
    vi. 遵守，遵从；逗留，居住\r
    vt. 忍受，忍耐\r
\r
3.  **ability** /əˈbɪləti/\r
    n. 能力；才能，本领\r
\r
4.  **able** /ˈeɪbl/\r
    adj. 能做…的；有才干的\r
\r
5.  **abnormal** /æbˈnɔːml/\r
    adj. 不正常的，反常的\r
\r
6.  **background** /ˈbækɡraʊnd/\r
    n. 背景；后景；背景音；底色\r
\r
7.  **balance** /ˈbæləns/\r
    n. 平衡，均衡；余额；债务余款\r
    vi. vt. (使)保持平衡；相抵，抵消\r
    vt. 使均衡；权衡；结平(账目)\r
\r
8.  **base** /beɪs/\r
    n. 底部；基础，根据；基地；\r
    垒；碱\r
    vt. 以…为基地；以…为基础\r
    adj. 卑鄙的，无耻的\r
\r
9.  **basement** /ˈbeɪsmənt/\r
    n. 地下室\r
\r
10. **basic** /ˈbeɪsɪk/\r
    adj. 基本的，最简单的，最重要的\r
\r
11. **basis** /ˈbeɪsɪs/\r
    n. 基础，要素；方式；根据，依\r
    据\r
\r
12. **calculate** /ˈkælkjuleɪt/\r
    vt. 计算，核算；预测，推测\r
\r
13. **call** /kɔːl/\r
    vt. 把…称为，认为…是；打电话\r
    叫\r
    vi. vt. 大声呼叫；召唤；给…打电\r
    话\r
    n. 通话；叫喊；短暂拜访；呼吁\r
\r
14. **calm** /kɑːm/\r
    adj. 平静的；风平浪静的；无风的\r
    vt. 使平静，使镇静\r
    n. 平静，宁静；冷静\r
\r
15. **campaign** /kæmˈpeɪn/\r
    n. (社会、政治)运动，活动；战\r
    役\r
    vt. 发起运动，开展活动\r
\r
16. **candidate** /ˈkændɪdət/\r
    n. 候选人，申请人；考生\r
\r
17. **data** /ˈdeɪtə/\r
    n. 资料，数据\r
\r
18. **database** /ˈdeɪtəbeɪs/\r
    n. 数据库\r
\r
19. **date** /deɪt/\r
    n. 日期；时候；约会(对象)；海\r
    枣\r
    vt. 写上日期；确定年代\r
    vt. vi. 与(某人)谈恋爱\r
\r
20. **dazzle** /ˈdæzl/\r
    vt. vi. (强光)使目眩，使眼花\r
    vt. 使倾倒，使惊叹\r
    n. 令人赞叹的东西(或品质)\r
\r
21. **deal** /diːl/\r
    n. 大量，很多；交易，协议；待\r
    遇\r
    vi. 处理，对付；与…做生意，涉\r
    及\r
    vi. vt. 发牌；非法买卖毒品，贩毒\r
\r
22. **dealer** /ˈdiːlə(r)/\r
    n. 商人；毒品贩子；发牌人\r
\r
23. **debate** /dɪˈbeɪt/\r
    n. 辩论，讨论，争论\r
    vi. vt. 辩论，讨论，争论；考虑，\r
    盘算\r
\r
24. **decade** /ˈdekeɪd/\r
    n. 十年\r
\r
25. **decide** /dɪˈsaɪd/\r
    vi. vt. 决定；裁定\r
    vt. 使…下定决心\r
\r
26. **decision** /dɪˈsɪʒn/\r
    n. 决定；决断力；作出决定\r
\r
27. **decisive** /dɪˈsaɪsɪv/\r
    adj. 决定性的，关键的；果断的\r
\r
28. **decorate** /ˈdekəreɪt/\r
    vt. 装饰；装修；授予…勋章\r
\r
29. **economic** /ˌiːkəˈnɒmɪk/\r
    adj. 经济的；有利可图的\r
\r
30. **economical** /ˌiːkəˈnɒmɪkl/\r
    adj. 经济的，省钱的，节约的\r
\r
31. **economics** /ˌiːkəˈnɒmɪks/\r
    n. 经济学；经济状况\r
\r
32. **economy** /ɪˈkɒnəmi/\r
    n. 经济；经济体；节约\r
\r
33. **educate** /ˈedʒukeɪt/\r
    vt. 教育；教导，培养\r
\r
34. **education** /ˌedʒuˈkeɪʃn/\r
    n. 教育；培训；教育学\r
\r
35. **effect** /ɪˈfekt/\r
    n. 影响，结果；特效，效果；财\r
    产\r
    vt. 引起，使发生\r
\r
36. **effective** /ɪˈfektɪv/\r
    adj. 有效的，生效的；实际的\r
\r
37. **efficient** /ɪˈfɪʃnt/\r
    adj. 效率高的\r
\r
38. **efficiency** /ɪˈfɪʃnsi/\r
    n. 效率，效能\r
\r
39. **effort** /ˈefət/\r
    n. 努力，力气；特别行动\r
\r
40. **fabric** /ˈfæbrɪk/\r
    n. 织物，布料；结构，构造\r
\r
41. **fabricate** /ˈfæbrɪkeɪt/\r
    vt. 捏造，编造；制造，生产\r
\r
42. **face** /feɪs/\r
    n. 脸；面部表情；表面；钟面\r
    vt. vi. 面对，面向\r
    vt. 面临；正视；对付\r
\r
43. **facet** /ˈfæsɪt/\r
    n. 部分，方面；(宝石的)小平面\r
\r
44. **factor** /ˈfæktə(r)/\r
    n. 因素，要素；因子，因数；倍\r
    数\r
    vt. 把…因素包括进去\r
\r
45. **fade** /feɪd/\r
    vi. vt. (使)褪色，(使)变暗淡\r
    vi. 逐渐消失\r
\r
46. **fail** /feɪl/\r
    vi. vt. 失败；不及格；衰退；倒闭\r
    vi. 未做；出故障；衰退；倒闭\r
    vt. 使失望；有负于；不及格\r
\r
47. **failure** /ˈfeɪljə(r)/\r
    n. 失败；失败者；未做；故障\r
\r
48. **fair** /feə(r)/\r
    adj. 公平的；相当大的；不错的\r
    adj. 浅色的；晴朗的；美丽的\r
    n. 展销会；露天游乐场；集市\r
    adv. 按照规则，公平合理地\r
\r
49. **fairly** /ˈfeəli/\r
    adv. 相当地；公正地；简直\r
\r
50. **fall** /fɔːl/\r
    vi. 落下；跌倒；下跌；沦陷；发\r
    生；落下；减少；沦陷；瀑布；秋\r
    季\r
    n. 下落；减少；沦陷；瀑布；秋\r
    季\r
\r
51. **fan** /fæn/\r
    n. 粉丝，狂热爱好者；风扇；扇\r
    子\r
    vt. 扇(风)；煽起，激起\r
\r
52. **fancy** /ˈfænsi/\r
    adj. 花哨的；精致的；奢华的\r
    vt. 想要，想做；爱慕；自伤；认\r
    为\r
    vi. vt. 真没想到，竟然\r
    n. 想象；想要，爱好\r
\r
53. **fascinate** /ˈfæsɪneɪt/\r
    vt. vi. 使着迷，迷住\r
\r
54. **gain** /ɡeɪn/\r
    vt. 获得，赢得；增加，到达\r
    vt. 增加；好处，利润\r
\r
55. **gamble** /ˈɡæmbl/\r
    vi. vt. 赌博；冒险；以…为赌注\r
    n. 冒险；赌博\r
\r
56. **gap** /ɡæp/\r
    n. 缝隙；(时间)间隔；差距，漏\r
    洞\r
\r
57. **gene** /dʒiːn/\r
    n. 基因\r
\r
58. **general** /ˈdʒenrəl/\r
    adj. 普遍的，总的；通常的；大概\r
    的\r
    adj. 总的；首席的，总管的\r
    n. 将军\r
\r
59. **generalize** /ˈdʒenrəlaɪz/\r
    vt. 概括，归纳\r
\r
60. **habit** /ˈhæbɪt/\r
    n. 习惯；(对毒品、烟酒的)瘾\r
\r
61. **habitat** /ˈhæbɪtæt/\r
    n. 栖息地，生长地\r
\r
62. **hamper** /ˈhæmpə(r)/\r
    vt. 妨碍，阻碍\r
    n. 食品盒；脏衣篓\r
\r
63. **handicap** /ˈhændikæp/\r
    n. 生理缺陷，残疾；障碍，阻碍\r
    vt. 妨碍，阻碍\r
\r
64. **shield** /ʃiːld/\r
    n. 盾牌；掩护物；护罩；盾形奖\r
    vt. 保护，掩护\r
\r
65. **shift** /ʃɪft/\r
    vi. vt. 转移，挪动；换(挡)\r
    vi. (情况等)改变\r
    vt. 改变(观点、态度等)；推卸(责\r
    任)\r
    n. 改变，转变；轮班(职工)\r
\r
66. **shoulder** /ˈʃəʊldə(r)/\r
    n. 肩膀；衣肩；山肩；路肩\r
    vt. 承担；负担；背，扛\r
\r
67. **show** /ʃəʊ/\r
    vt. 出示；表明；教，演示；带领\r
    vi. 显现，露出；露出；展览，上映\r
    n. 演出；电视节目；展览会；假\r
    象\r
\r
68. **shower** /ˈʃaʊə(r)/\r
    n. 浴室；淋浴器；淋浴；阵雨\r
    vt. (大量)地给\r
\r
`,Wu=`# 2027考研英语红宝书\r
## 必考词Unit5 84词\r
\r
1.  **glamour** /ˈɡlæmə(r)/\r
    n. 魅力，吸引力\r
\r
2.  **generate** /ˈdʒenəreɪt/\r
    vt. 产生，引起；发电，产生(能量)\r
\r
3.  **generation** /ˌdʒenəˈreɪʃn/\r
    n. 一代；产生\r
\r
4.  **generator** /ˈdʒenəreɪtə(r)/\r
    n. 发电机；发生器，生成器\r
\r
5.  **generous** /ˈdʒenərəs/\r
    adj. 慷慨的；大量的；宽宏大量的\r
\r
6.  **genius** /ˈdʒiːniəs/\r
    n. 天才人物；天才，天赋；本领\r
\r
7.  **gift** /ɡɪft/\r
    n. 礼物；天赋，才能\r
    vt. 赠送\r
\r
8.  **genre** /ˈʒɒ̃rə/\r
    n. (文学、艺术作品的)类型，体裁\r
\r
9.  **giant** /ˈdʒaɪənt/\r
    adj. 巨大的，伟大的\r
    n. 巨人，巨兽；大公司；伟人\r
\r
10. **gigantic** /dʒaɪˈɡæntɪk/\r
    adj. 巨大的，庞大的\r
\r
11. **give** /ɡɪv/\r
    vt. 给；提供；支付；举办；使产生\r
    vi. vt. 赠送；捐赠\r
\r
12. **happen** /ˈhæpən/\r
    vi. 发生，出现\r
    vi. link. 碰巧，恰好\r
\r
13. **harm** /hɑːm/\r
    n. 伤害，损害\r
    vt. 伤害，损害\r
\r
14. **harmony** /ˈhɑːməni/\r
    n. 融洽，和睦；和声；和谐，协调\r
\r
15. **harsh** /hɑːʃ/\r
    adj. 严厉的；恶劣的；刺耳的\r
\r
16. **ignorance** /ˈɪɡnərəns/\r
    n. 无知，愚昧\r
\r
17. **ignorant** /ˈɪɡnərənt/\r
    adj. 无知的，愚昧的，不知情的\r
\r
18. **ignore** /ɪɡˈnɔː(r)/\r
    vt. 不理，忽视\r
\r
19. **ill** /ɪl/\r
    adj. 患病的，不适的；坏的，有害的\r
    adv. 恶劣地；差劲地\r
    n. 问题，弊端；疾病\r
\r
20. **illness** /ˈɪlnəs/\r
    n. 病，疾病，患病期\r
\r
21. **illusion** /ɪˈluːʒn/\r
    n. 错觉，幻想，错误观念；假象\r
\r
22. **illustrate** /ˈɪləstreɪt/\r
    vt. 说明，阐明；给…加插图；表明\r
\r
23. **illustration** /ˌɪləˈstreɪʃn/\r
    n. 插图，例证；实例，说明，图解\r
\r
24. **image** /ˈɪmɪdʒ/\r
    n. 图像；画像；形象；印象\r
\r
25. **imagine** /ɪˈmædʒɪn/\r
    vi. 想象，猜想，猜测\r
    vt. 胡思乱想，误以为\r
\r
26. **imaginary** /ɪˈmædʒɪnəri/\r
    adj. 想象中的，虚构的\r
\r
27. **imagination** /ɪˌmædʒɪˈneɪʃn/\r
    n. 想象力；想象，幻想；创造力\r
\r
28. **imaginative** /ɪˈmædʒɪnətɪv/\r
    adj. 有想象力的，有独创性的\r
\r
29. **imitate** /ˈɪmɪteɪt/\r
    vt. (为逗乐)模仿，仿效，模拟\r
\r
30. **imitation** /ˌɪmɪˈteɪʃn/\r
    n. 模仿，效仿；仿制品；滑稽模仿\r
\r
31. **lead** /liːd/\r
    vi. vt. 带路；领导；通往；处于首位\r
    vi. 导致，造成(后果)\r
    vt. 使得出(观点)；过(某种生活)\r
    n. 铅；领先地位；超前量；范例\r
\r
32. **leadership** /ˈliːdəʃɪp/\r
    n. 领导地位；领导才能；领导层\r
\r
33. **leading** /ˈliːdɪŋ/\r
    adj. 最重要的，最好的；领先的\r
\r
34. **legal** /ˈliːɡl/\r
    adj. 法律的，法律方面的；合法的\r
\r
35. **legislation** /ˌledʒɪsˈleɪʃn/\r
    n. 法律，法规；立法\r
\r
36. **legitimate** /lɪˈdʒɪtɪmət/\r
    adj. 合法的；正当的；婚生的\r
    vt. 使合法化，使合理化\r
\r
37. **leisure** /ˈleʒə(r)/\r
    n. 闲暇，空闲\r
\r
38. **level** /ˈlevl/\r
    n. 水平；级别；水平高度；楼层\r
    adj. 平的；等高的；地位相同的；平坦的\r
    vt. 使平坦；摧毁，夷平；瞄准\r
    vi. vt. 使相等，使平等\r
\r
39. **lever** /ˈliːvə(r)/\r
    n. 操纵杆；杠杆，撬棒；施压手段\r
    vt. 撬起，撬动\r
\r
40. **levy** /ˈlevi/\r
    n. 征收额；(尤指)税款\r
    vt. 征收，征(税)\r
\r
41. **manage** /ˈmænɪdʒ/\r
    vi. vt. 经营，管理；成功做到\r
    vi. 勉强维持生活\r
    vt. 合理使用(资源)\r
\r
42. **management** /ˈmænɪdʒmənt/\r
    n. 管理；管理层\r
\r
43. **mandate** /ˈmændeɪt/\r
    n. 授权；授权令；命令；任期\r
    vt. 强制执行；授权\r
\r
44. **manifest** /ˈmænɪfest/\r
    vt. 显现，表明\r
    adj. 明显的\r
    n. 载货单；旅客名单\r
\r
45. **manipulate** /məˈnɪpjuleɪt/\r
    vt. (暗中)操纵；(熟练地)操作\r
\r
46. **manner** /ˈmænə(r)/\r
    n. 方式；态度，举止；礼貌，礼仪\r
\r
47. **margin** /ˈmɑːdʒɪn/\r
    n. 页边空白处；差额；利润；余地\r
\r
48. **marginal** /ˈmɑːdʒɪnl/\r
    adj. 微不足道的；页边的；边缘的\r
\r
49. **mass** /mæs/\r
    n. 团，块；大量；群众；质量\r
    adj. 大量的，大批的\r
    vi. vt. 集结，聚集\r
\r
50. **massive** /ˈmæsɪv/\r
    adj. 大而重的；巨大的；严重的\r
\r
51. **massacre** /ˈmæsəkə(r)/\r
    n. 大屠杀\r
    vt. 大屠杀\r
\r
52. **occupation** /ˌɒkjuˈpeɪʃn/\r
    n. 职业；占领；居住，占用；消遣\r
\r
53. **occupy** /ˈɒkjupaɪ/\r
    vt. 占用，占领；使忙于；担任\r
\r
54. **occur** /əˈkɜː(r)/\r
    vi. (意外地)发生；存在，出现\r
\r
55. **occurrence** /əˈkʌrəns/\r
    n. 发生的事，事件；发生，存在\r
\r
56. **offend** /əˈfend/\r
    vt. 冒犯，得罪\r
    vi. 令人不适\r
    vi. 违反(法规、原则等)；犯罪\r
\r
57. **offer** /ˈɒfə(r)/\r
    vt. 主动提出，自愿给予\r
    vt. 提供，供应\r
    n. 提议；出价，报价；特价\r
\r
58. **offset** /ˈɒfset/\r
    vt. 抵消，弥补\r
\r
59. **offspring** /ˈɒfsprɪŋ/\r
    n. 子女，后代；幼崽，幼苗\r
\r
60. **paragraph** /ˈpærəɡrɑːf/\r
    n. 段落，节\r
\r
61. **paralyse** /ˈpærəlaɪz/\r
    vt. 使瘫痪；使不能正常运作\r
\r
62. **parallel** /ˈpærəlel/\r
    adj. 平行的；相似的；同时发生的\r
    n. 很相似的人(情况等)；相似之处\r
    vi. 与…相似；与…同时发生\r
\r
63. **part** /pɑːt/\r
    n. 部分；成员；零件；区域；角色\r
    vi. 离开，分别\r
    vt. 分离，分开\r
    adv. 在一定程度上，部分地\r
\r
64. **partial** /ˈpɑːʃl/\r
    adj. 部分的；偏袒的，钟爱的\r
\r
65. **participant** /pɑːˈtɪsɪpənt/\r
    n. 参与者，参加者\r
\r
66. **participate** /pɑːˈtɪsɪpeɪt/\r
    vi. 参与，参加\r
\r
67. **particle** /ˈpɑːtɪkl/\r
    n. 微粒，粒子；小品词\r
\r
68. **particular** /pəˈtɪkjələ(r)/\r
    adj. 特定的；格外的；挑剔的\r
    n. 细节，详情\r
\r
69. **partly** /ˈpɑːtli/\r
    adv. 部分地，在某种程度上\r
\r
70. **partner** /ˈpɑːtnə(r)/\r
    n. 伙伴；配偶；搭档；合伙人\r
    vt. 做搭档\r
\r
71. **passion** /ˈpæʃn/\r
    n. 热情，激情；热恋；热衷的爱好\r
\r
72. **passive** /ˈpæsɪv/\r
    adj. 被动的，消极的；被动语态的\r
    n. 被动语态，被动式\r
\r
73. **quick** /kwɪk/\r
    adj. 快的，敏捷的；立竿见影的\r
\r
74. **quit** /kwɪt/\r
    vi. vt. 放弃(工作)；停止；退出；\r
    n. 离开，离开\r
\r
75. **quest** /kwest/\r
    n. 探索，寻求，追求\r
    vi. 探索，寻求\r
\r
76. **questionnaire** /ˌkwestʃəˈneə(r)/\r
    n. 调查问卷，调查表\r
\r
77. **quote** /kwəʊt/\r
    vt. 引用，引述；报价，估价\r
    n. 引文，引语；报价，估价；引号\r
\r
78. **span** /spæn/\r
    n. 持续时间；范围；跨度；宽度\r
    vt. 持续，贯穿；包括，涵盖；横跨\r
\r
79. **spare** /speə(r)/\r
    adj. 闲置的；备用的；空闲的\r
    vt. 留出；免去；放过；吝惜\r
    n. 备用品；备胎；零件，备件\r
\r
80. **schedule** /ˈʃedjuːl/\r
    n. 日程表；时刻表；节目表\r
    vt. 为…安排时间\r
\r
81. **scheme** /skiːm/\r
    n. 计划，方案；阴谋，诡计\r
    vi. vt. 密谋，秘密策划\r
\r
82. **science** /ˈsaɪəns/\r
    n. 科学；理科；学科\r
\r
83. **scientific** /ˌsaɪənˈtɪfɪk/\r
    adj. 科学的；细致严谨的\r
\r
84. **scientist** /ˈsaɪəntɪst/\r
    n. 科学家\r
\r
`,Gu=`# 2027考研英语红宝书\r
## 必考词Unit6 71词\r
\r
1.  **patch** /pætʃ/\r
    n. 小块，斑点；补丁；小块地；眼罩\r
    vt. 打补丁\r
\r
2.  **patent** /ˈpeɪtnt/\r
    n. 专利权\r
    adj. 专利的；明显的\r
    vt. 得到…的专利权\r
\r
3.  **pattern** /ˈpætn/\r
    n. 模式，方式；图案；典范，样板\r
    vt. 使形成(某行为模式)\r
\r
4.  **pay** /peɪ/\r
    vt. vi. 付费，付酬；受益，划算\r
    vt. 交纳，偿还\r
    vi. 付出代价；盈利，创收\r
    n. 工资，薪水\r
\r
5.  **payment** /ˈpeɪmənt/\r
    n. 付款；付款额；报答，报应\r
\r
6.  **peculiar** /pɪˈkjuːliə(r)/\r
    adj. 古怪的；特有的\r
\r
7.  **peer** /pɪə(r)/\r
    n. 同龄人，同辈\r
    vi. 端详，费力地看\r
\r
8.  **per** /pə(r)/\r
    prep. 每，每一\r
\r
9.  **perceive** /pəˈsiːv/\r
    vt. 看待，视为；注意到，察觉\r
\r
10. **percentage** /pəˈsentɪdʒ/\r
    n. 百分比，百分率；提成，股息\r
\r
11. **perfect** /ˈpɜːfɪkt/\r
    adj. 完美的，完全的\r
    vt. 使完善，使完美\r
\r
12. **rail** /reɪl/\r
    n. 铁路；铁轨；栏杆，扶手\r
    vi. vt. 怒斥，责骂\r
\r
13. **railway** /ˈreɪlweɪ/\r
    n. 铁路，铁路系统\r
\r
14. **raise** /reɪz/\r
    vt. 举起；提高；筹募；提及；抚养\r
    vt. 引起；饲养\r
    n. 加薪，工资增长\r
\r
15. **rally** /ˈræli/\r
    n. 公众集会；拉力赛；止跌回升\r
    vi. vt. 召集，集合\r
    vi. 复原，恢复健康；止跌回升\r
\r
16. **random** /ˈrændəm/\r
    adj. 随机的；不认识的；出人意料的\r
\r
17. **range** /reɪndʒ/\r
    n. 一系列；范围；射程；山脉\r
    vi. (在一定的范围内)变化；包括\r
    vt. (按一定顺序)排列\r
    vi. 徘徊，漫步\r
\r
18. **rank** /ræŋk/\r
    n. 级别，地位；军衔；成员，行列\r
    vt. vi. 把…分等级，属于某等级\r
    adj. 难闻的；恶臭的；糟糕的\r
\r
19. **master** /ˈmɑːstə(r)/\r
    n. 主人；大师；硕士学位；男教师\r
    vt. 精通，掌握；控制\r
    adj. 熟练的；最重要的\r
\r
20. **masterpiece** /ˈmɑːstəpiːs/\r
    n. 杰作，代表作\r
\r
21. **mate** /meɪt/\r
    n. 朋友，伙伴；老兄；同伴，伴侣\r
    vi. (动物)交配\r
\r
22. **material** /məˈtɪəriəl/\r
    n. 材料；布料；素材\r
    adj. 物质的\r
\r
23. **mathematical** /ˌmæθəˈmætɪkl/\r
    adj. 数学的\r
\r
24. **mature** /məˈtʃʊə(r)/\r
    adj. 成熟的\r
    vi. 成熟，到期\r
\r
25. **maximum** /ˈmæksɪməm/\r
    adj. 最大数量的，最高限度的\r
    n. 最大量，最高程度，最大限度\r
\r
26. **mean** /miːn/\r
    vt. 意思是；打算；对某人重要\r
    adj. 小气的，刻薄的；平均的\r
    n. 平均数\r
\r
27. **meaning** /ˈmiːnɪŋ/\r
    n. 意思；意义\r
\r
28. **means** /miːnz/\r
    n. 方法，途径；财富，钱财\r
\r
29. **meantime** /ˈmiːntaɪm/\r
    adv. 在此期间，与此同时\r
    n. (在此)期间，其间\r
\r
30. **meanwhile** /ˈmiːnwaɪl/\r
    adv. 在此期间，与此同时\r
\r
31. **measure** /ˈmeʒə(r)/\r
    vt. 测量，估量；判定\r
    vt. link. (尺寸、数量)量度为\r
    n. 措施，方法；度量单位；提案\r
\r
32. **opening** /ˈəʊpnɪŋ/\r
    n. 开幕式；缺口；空缺；开放\r
    adj. 开篇的，开头的\r
\r
33. **opera** /ˈɒprə/\r
    n. 歌剧；歌剧院\r
\r
34. **operate** /ˈɒpəreɪt/\r
    vt. 操作，使运行\r
    vi. 运转，工作；动手术；经营\r
    vi. vt. (被)使用，(使)运转\r
\r
35. **operation** /ˌɒpəˈreɪʃn/\r
    n. 手术；运转，操作；行动；业务\r
\r
36. **operational** /ˌɒpəˈreɪʃənl/\r
    adj. 可运转的；运营的；军事行动的\r
\r
37. **operator** /ˈɒpəreɪtə(r)/\r
    n. 操作员，技工；接线员；经营者\r
\r
38. **opinion** /əˈpɪnjən/\r
    n. 看法，观点；舆论；专家意见\r
\r
39. **opportunity** /ˌɒpəˈtjuːnəti/\r
    n. 机会，时机\r
\r
40. **opponent** /əˈpəʊnənt/\r
    n. 对手，竞争者；反对者\r
\r
41. **oppose** /əˈpəʊz/\r
    vt. 反对，阻挠\r
\r
42. **opposite** /ˈɒpəzɪt/\r
    adj. 对面的，另一边的；相反的\r
    n. 对立的人(或物)\r
    prep. 在与…相对；与…合演\r
    adv. 在对面\r
\r
43. **oppress** /əˈpres/\r
    vt. 压迫，欺压；压抑，使烦恼\r
\r
44. **scope** /skəʊp/\r
    n. 范围；余地；机会；…镜\r
    vt. 查清，探明\r
\r
45. **score** /skɔː(r)/\r
    n. 得分，分数；乐谱；二十；大量\r
    vt. vi. 得分；获胜；刻下痕迹\r
    vt. 评分，分值是\r
\r
46. **scorn** /skɔːn/\r
    n. 轻蔑，鄙视\r
    vt. 轻蔑，鄙视\r
\r
47. **secure** /sɪˈkjʊə(r)/\r
    adj. 安全的，牢靠的；安心的\r
    vt. 获得；确保；固定；保卫\r
\r
48. **security** /sɪˈkjʊərəti/\r
    n. 安全，保障；安保措施；保安部门\r
    n. 抵押品；证券\r
\r
49. **see** /siː/\r
    vt. vi. 看见；明白，弄清；考虑\r
    vt. 观看；参见；看望；交往；认为\r
\r
50. **seek** /siːk/\r
    vt. vi. 寻找；寻求，谋求\r
    vt. (向人)请求，寻求\r
\r
51. **seem** /siːm/\r
    v. link. 似乎，看来\r
\r
52. **seemingly** /ˈsiːmɪŋli/\r
    adv. 貌似，看似\r
\r
53. **thrift** /θrɪft/\r
    n. 节约，节俭；海石竹\r
\r
54. **thrill** /θrɪl/\r
    n. 亢奋感，激动；一阵强烈的感\r
    vt. 使非常兴奋\r
\r
55. **thrive** /θraɪv/\r
    vi. 兴旺，繁荣；欣欣向荣\r
\r
56. **through** /θruː/\r
    prep. 穿过；自始至终；直至；凭借\r
    adv. 通过；从头到尾；直达的\r
    adj. 直达的；完成的，结束的\r
\r
57. **throughout** /θruːˈaʊt/\r
    prep. 遍及；自始至终，从头到尾\r
    adv. 自始至终，从头到尾\r
\r
58. **tip** /tɪp/\r
    n. 建议，窍门；小费；尖端，密报\r
    vi. vt. (使)倾斜，倾侧；给小费\r
    vt. 倾倒，倒出；轻触；预言…获胜\r
\r
59. **title** /ˈtaɪtl/\r
    n. 标题，名称；称号；头衔；职称\r
    vt. 加标题，命名\r
\r
60. **urban** /ˈɜːbən/\r
    adj. 城市的，城镇的；都市音乐的\r
\r
61. **urge** /ɜːdʒ/\r
    vt. 敦促；强烈要求；驱赶，鞭策\r
    n. 冲动，强烈的欲望\r
\r
62. **urgent** /ˈɜːdʒənt/\r
    adj. 紧迫的，紧急的；急切的\r
\r
63. **utilize** /ˈjuːtəlaɪz/\r
    vt. 利用，使用\r
\r
64. **utter** /ˈʌtə(r)/\r
    adj. 完全的，彻底的\r
    vt. 发出(声音)，说\r
\r
65. **wonder** /ˈwʌndə(r)/\r
    vt. vi. 想知道；感到诧异\r
    vt. (礼貌地提问或请人做事时说)\r
    n. 奇迹，奇观；惊讶，惊奇\r
\r
66. **worship** /ˈwɜːʃɪp/\r
    vt. (对神的)信奉，崇拜；阁下\r
    n. 敬奉，景仰\r
    vi. 做礼拜\r
\r
67. **worth** /wɜːθ/\r
    adj. 价值…的；值得…的\r
    n. 价值；财产；价值，意义\r
\r
68. **worthwhile** /ˌwɜːθˈwaɪl/\r
    adj. 有价值的，值得的\r
\r
69. **worthy** /ˈwɜːði/\r
    adj. 值得(或应得)…的；值得尊敬的\r
    adj. 受人尊敬的，名士的\r
\r
70. **write** /raɪt/\r
    vt. vi. 写字；写作，作曲；写信\r
\r
71. **writer** /ˈraɪtə(r)/\r
    n. 作家，作者；写的人\r
`,Ku=`# 2027考研英语红宝书必考词Unit 7（80词）提取结果\r
（已逐字核对，保留原图片所有内容，包括排版导致的重复）\r
\r
---\r
\r
tow /təʊ/\r
vi. 牵引，拖，拉(车或船)\r
n. (车或船的)牵引，拖，拉\r
\r
towards /tɔːrdz/\r
prep. 向；趋于；将近；对于；用于\r
\r
take /teɪk/\r
vt. 拿；带去；做；接受；乘坐\r
vi. 花费\r
n. 镜头；收入额；看法，意见\r
\r
talent /ˈtælənt/\r
n. 天资，天赋；有才能的人\r
\r
target /ˈtɑːrɡɪt/\r
n. 目标，指标；攻击对象；靶子\r
vt. 把…作为攻击目标；面向，针对\r
\r
taste /teɪst/\r
n. 味道；味觉；品味；一口；爱好\r
vi. 有…味道\r
vt. 尝出(味道)；尝，品；吃，喝\r
\r
technical /ˈteknɪkl/\r
adj. 技术的；技巧的；专业的\r
\r
technician /tekˈnɪʃn/\r
n. 技术员，技师\r
\r
technique /tekˈniːk/\r
n. 技巧，工艺；技艺，技能\r
\r
technology /tekˈnɒlədʒi/\r
n. 科技，技术\r
\r
teenager /ˈtiːneɪdʒər/\r
n. (13到19岁的)青少年\r
\r
temper /ˈtempər/\r
n. 脾气；怒气；心情\r
vt. 使缓和；使(金属)回火\r
\r
temperature /ˈtemprətʃər/\r
n. 温度，气温；体温\r
\r
temporal /ˈtempərəl/\r
adj. 时间的；世俗的；太阳穴的\r
\r
temporary /ˈtempərəri/\r
adj. 暂时的，临时的\r
\r
tempt /tempt/\r
vt. 引诱，怂恿\r
\r
temptation /tempˈteɪʃn/\r
n. 引诱，诱惑；诱惑人的事物\r
\r
tend /tend/\r
vi. 往往会；倾向于\r
vt. vi. 照顾，照料\r
vi. 管理，打点(商店、酒吧等)\r
\r
tendency /ˈtendənsi/\r
n. 倾向；趋势\r
\r
tentative /ˈtentətɪv/\r
adj. 暂定的，不确定的；犹豫不定的\r
\r
term /tɜːrm/\r
n. 术语；学期；期限\r
n. 条款；措辞；关系\r
vt. 把…称为\r
\r
terminal /ˈtɜːrmɪnl/\r
n. 终点站；航站楼；终端\r
adj. (疾病)晚期的；末端的\r
\r
terminate /ˈtɜːrmɪneɪt/\r
vt. (使)结束，(使)终止\r
vi. 到达终点\r
\r
testify /ˈtestɪfaɪ/\r
vi. vt. (出庭)作证，证实，证明\r
\r
trace /treɪs/\r
vt. 追踪；追溯\r
n. 痕迹，踪迹；微量，少许；追踪\r
\r
track /træk/\r
n. 小径；踪迹；轨道；跑道；路线\r
n. 站台；田径；歌曲；音轨\r
vt. 跟踪，追踪；留下足迹\r
\r
tradition /trəˈdɪʃn/\r
n. 传统\r
\r
ultimate /ˈʌltɪmət/\r
adj. 最终的，终极的；极度的；根本的\r
n. 极致，极限；最高典范\r
\r
underestimate /ˌʌndərˈestɪmeɪt/\r
vt. 低估，轻视\r
n. 低估，轻视\r
\r
undergo /ˌʌndərˈɡoʊ/\r
vt. 经历，经受，遭受\r
\r
underlie /ˌʌndərˈlaɪ/\r
vt. 构成…的基础，作为…的原因\r
\r
underlying /ˌʌndərˈlaɪɪŋ/\r
adj. 深层的，潜在的；表面以下的\r
\r
underline /ˌʌndərˈlaɪn/\r
vt. 在…下画线；强调，突出\r
\r
understand /ˌʌndərˈstænd/\r
vt. vi. 理解，懂得；认识到；体谅\r
vt. 得知，获悉\r
\r
understanding /ˌʌndərˈstændɪŋ/\r
n. 了解；协议；理解，看法\r
adj. 善解人意的，体谅人的\r
\r
undertake /ˌʌndərˈteɪk/\r
vt. 承担，着手做；承诺，保证\r
\r
uneasy /ʌnˈiːzi/\r
adj. 不安的，不自在的；不稳定的\r
\r
unemployment /ˌʌnɪmˈplɔɪmənt/\r
n. 失业人数；失业状态；失业救济\r
\r
unexpected /ˌʌnɪkˈspektɪd/\r
adj. 出乎意料的，意想不到的\r
\r
unify /ˈjuːnɪfaɪ/\r
vt. vi. 使统一，使成一体\r
\r
union /ˈjuːniən/\r
n. 工会；协会；联盟，联合\r
\r
unique /juˈniːk/\r
adj. 独一无二的，独特的，特有的\r
\r
universal /ˌjuːnɪˈvɜːrsl/\r
adj. 普遍的，全体的；共同的\r
n. 普遍看法，普遍特征\r
\r
universe /ˈjuːnɪvɜːrs/\r
n. 宇宙；领域，范围\r
\r
unlike /ˌʌnˈlaɪk/\r
prep. 与…不同，不像；非…的特征\r
adj. 不同的，不相似的\r
\r
unlikely /ʌnˈlaɪkli/\r
adj. 不太可能的\r
adj. 不合适的，不可信的\r
\r
unusual /ʌnˈjuːʒuəl/\r
adj. 不寻常的；特别的\r
\r
vague /veɪɡ/\r
adj. 模糊的，含糊的，笼统的\r
\r
vain /veɪn/\r
adj. 徒劳的；自负的，虚荣的\r
\r
valid /ˈvælɪd/\r
adj. (法律上)有效的；正当合理的\r
\r
valuable /ˈvæljuəbl/\r
adj. 有价值的，珍贵的；值钱的\r
\r
value /ˈvæljuː/\r
n. 价值；划算程度；用处；价值观\r
vt. 重视，给…估价\r
\r
vanish /ˈvænɪʃ/\r
vi. 突然消失，消亡，灭绝\r
\r
variable /ˈveriəbl/\r
adj. 多变的，可变的\r
n. 变量；可变因素\r
\r
variance /ˈveriəns/\r
n. 变化幅度，差额\r
\r
variation /ˌveriˈeɪʃn/\r
n. 变化，差异；变体，变种；变奏\r
\r
variety /vəˈraɪəti/\r
n. 各种各样，多样化；种类，品种\r
\r
various /ˈveriəs/\r
adj. 各种各样的，不同的\r
\r
vary /ˈveri/\r
vi. 不同，有差异；(根据情况)变化\r
vt. 改变，使多样化\r
\r
vast /vɑːst/\r
adj. 巨大的，广阔的\r
\r
wage /weɪdʒ/\r
n. 工资，工钱\r
vt. 发动，进行(运动或战争)\r
\r
wander /ˈwɑːndər/\r
vi. 闲逛，游荡；走失，走神\r
n. 闲逛，游荡\r
\r
want /wɑːnt/\r
vt. 想，想要；需要；缺少，缺乏\r
n. 需要的东西；缺少；贫穷\r
\r
way /weɪ/\r
n. 方法；方向；作风；路；方向\r
adv. 很远；非常\r
\r
weak /wiːk/\r
adj. 弱的；不牢固的；淡的\r
\r
wear /wer/\r
vt. 穿；戴；留(头发)；流露\r
vi. 磨损，消耗\r
n. 衣着；磨损；用坏\r
\r
weary /ˈwɪri/\r
adj. 疲劳的，厌倦的；使人疲劳的\r
vi. 使疲劳；使感到厌倦\r
vi. 变得不耐烦，感到厌倦\r
\r
weigh /weɪ/\r
vi. 有…重，重量是\r
vt. 称重量；量体重；考虑，权衡\r
\r
weight /weɪt/\r
n. 重量，体重；重物；重担；杠铃\r
vt. 在…上加重量\r
\r
weird /wɪrd/\r
adj. 古怪的，奇异的\r
\r
welfare /ˈwelfer/\r
n. 幸福；社会福利；社会保障金\r
\r
whirl /wɜːrl/\r
vi. (使)旋转，(使)打转\r
vi. 眩晕；回旋；接连不断的活动\r
n. 旋转；回旋；接连不断的活动\r
\r
whisper /ˈwɪspər/\r
vi. 耳语，小声说\r
vi. (私下)说；秘密告诉\r
n. 耳语(声)；轻柔的声音；传闻\r
\r
yield /jiːld/\r
vi. 屈服；产生；放弃；让出\r
vt. 出产；让出；(投资)收益\r
n. 产量；产出；(投资的)收益\r
\r
youth /juːθ/\r
n. 青年时期，年轻；青春，朝气\r
n. 青年\r
\r
zigzag /ˈzɪɡzæɡ/\r
n. 锯齿形线条；之字形\r
adj. 之字形的，锯齿形的，曲折的\r
\r
zone /zoʊn/\r
n. 地带；区域\r
n. (13到19岁的)青少年\r
n. (13到19岁的)青少年\r
vi. 使逐步成功；飙升，猛涨\r
n. 变焦镜头；车辆疾行的声音\r
\r
key /kiː/\r
n. 钥匙；关键；键；答案\r
vt. 用键盘输入\r
adj. 主要的，关键的\r
\r
knit /nɪt/\r
vt. 编织；针织；(使)紧密结合\r
n. 编织的衣服，针织衫\r
\r
`,qu=`# 必考词Unit8 69词\r
1. **brisk** /brɪsk/\r
adj. 轻快的，麻利的；凉爽的\r
adj. 兴隆的\r
\r
2. **brief** /briːf/\r
adj. 短暂的；简洁的\r
n. 任务简介，案情摘要，辩护状\r
vt. 向（某人）介绍情况\r
\r
3. **browse** /braʊz/\r
vi. vt. (在商店)随便看看，浏览，翻阅\r
vi. (动物)吃草\r
n. 随便看看\r
\r
4. **aggravate** /ˈæɡrəveɪt/\r
vt. 加重，使恶化；激怒，使恼火\r
\r
5. **aggregate** /ˈæɡrɪɡət/\r
n. 总数，集合体；骨料\r
adj. 总数的，合计的\r
vt. 总计达到，使聚集\r
\r
6. **aggressive** /əˈɡresɪv/\r
adj. 好斗的，有侵略性的；进取的\r
\r
7. **agitate** /ˈædʒɪteɪt/\r
vi. 鼓动，煽动\r
vt. 激怒，使不安；搅动，摇动\r
\r
8. **agreeable** /əˈɡriːəbl/\r
adj. 令人愉快的，乐意的；可接受的\r
\r
9. **aid** /eɪd/\r
n. 援助，救援物资；辅助（设备）\r
vi. vt. 帮助，援助\r
\r
10. **aim** /eɪm/\r
n. 目的，目标；瞄准\r
vi. vt. 力求达到；瞄准\r
vt. 旨在；针对\r
\r
11. **alarm** /əˈlɑːm/\r
n. 警报器；警报；闹钟；惊恐\r
vt. 使惊恐，使忧虑；给…装警报器\r
\r
12. **alien** /ˈeɪliən/\r
n. 外星生物；外国人，侨民\r
adj. 陌生的；外国的；与…不相容的\r
adj. 外星的\r
\r
13. **alienate** /ˈeɪliəneɪt/\r
vt. 使疏远，使不友好；使格格不入\r
\r
14. **allocate** /ˈæləkeɪt/\r
vt. 分配，划拨\r
\r
15. **allow** /əˈlaʊ/\r
vt. 允许，听任；使可能；留出\r
\r
16. **alter** /ˈɔːltər/\r
vi. vt. (使)变化，(使)改变\r
vt. 改（衣服使其更合身）\r
\r
17. **alternate** /ˈɔːltərnət/\r
adj. 交替的；每隔…的；可替代的\r
vi. vt. (使)轮流，(使)交替\r
n. 替补者\r
\r
18. **alternative** /ɔːlˈtɜːnətɪv/\r
adj. 可替代的，其他的；非传统的\r
n. 可供选择的事物\r
\r
19. **comparable** /ˈkɒmpərəbl/\r
adj. 有可比性的，类似的\r
\r
20. **comparative** /kəmˈpærətɪv/\r
adj. 比较的，相对的；比较级的\r
n. (形容词或副词的)比较级\r
\r
21. **compare** /kəmˈpeər/\r
vt. 比较，对比；将…比作\r
vi. (与…)相比\r
\r
22. **comparison** /kəmˈpærɪsn/\r
n. 比较，对比\r
\r
23. **compel** /kəmˈpel/\r
vt. 强迫，逼迫\r
\r
24. **compensate** /ˈkɒmpenseɪt/\r
vi. 弥补，补偿\r
vt. 给…赔偿\r
\r
25. **compete** /kəmˈpiːt/\r
vi. 竞争，对抗；参加比赛\r
\r
26. **competition** /ˌkɒmpəˈtɪʃn/\r
n. 竞争；比赛；竞争对手\r
\r
27. **competitive** /kəmˈpetətɪv/\r
adj. 竞争的；有竞争力的；好胜的\r
\r
28. **competent** /ˈkɒmpɪtənt/\r
adj. 能胜任的；还行的；有法定权的\r
\r
29. **compile** /kəmˈpaɪl/\r
vt. 汇编，编纂；编译\r
\r
30. **complain** /kəmˈpleɪn/\r
vi. vt. 抱怨，投诉，发牢骚\r
\r
31. **complaint** /kəmˈpleɪnt/\r
n. 抱怨，投诉；使人不满的事；疾病\r
\r
32. **complement** /ˈkɒmplɪment/\r
vt. 补充，补足，使完美\r
n. 补充物，补足物；足额；补语\r
\r
33. **complete** /kəmˈpliːt/\r
adj. 完全的，全部的；完成的；包括\r
vt. 完成，结束；填（表格）；使完整\r
\r
34. **complex** /ˈkɒmpleks/\r
adj. 复杂的，难懂的\r
n. 综合建筑群；复合体；情结\r
\r
35. **complicate** /ˈkɒmplɪkeɪt/\r
vt. 使难以理解，使复杂化\r
\r
36. **complicated** /ˈkɒmplɪkeɪtɪd/\r
adj. 复杂的，难懂的\r
\r
37. **comply** /kəmˈplaɪ/\r
vi. 服从，遵守\r
\r
38. **compliment** /ˈkɒmplɪment/\r
n. 称赞，赞美的话；致意，致敬\r
vt. 称赞，赞美\r
\r
39. **differ** /ˈdɪfər/\r
vi. 相异，不同；持不同看法\r
\r
40. **difference** /ˈdɪfrəns/\r
n. 差异；差额；分歧\r
\r
41. **diffuse** /dɪˈfjuːz/\r
vt. vi. 扩散，渗透；传播，散布\r
adj. 扩散的，分散的；冗长的\r
\r
42. **emphasis** /ˈemfəsɪs/\r
n. 重视，重点，强调；重读\r
\r
43. **emphasize** /ˈemfəsaɪz/\r
vt. 强调，重视；重读；使突出\r
\r
44. **employ** /ɪmˈplɔɪ/\r
vt. 雇用，雇佣；使用，运用\r
\r
45. **employee** /ɪmˈplɔɪiː/\r
n. 雇员\r
\r
46. **employer** /ɪmˈplɔɪər/\r
n. 雇主\r
\r
47. **employment** /ɪmˈplɔɪmənt/\r
n. 在职；就业（机会）；雇用；使用\r
\r
48. **enable** /ɪˈneɪbl/\r
vt. 使能够，使可能\r
\r
49. **encounter** /ɪnˈkaʊntər/\r
vt. 遭遇；偶遇\r
n. 偶遇；冲突，经历\r
\r
50. **encourage** /ɪnˈkʌrɪdʒ/\r
vt. 鼓励；劝告，怂恿；促进，刺激\r
\r
51. **end** /end/\r
n. 结局，结尾，末端，结束，目标\r
vi. vt. 结束，终止\r
\r
52. **endeavour** /ɪnˈdevər/\r
vi. 努力，尝试\r
n. 努力，尝试\r
\r
53. **endorse** /ɪnˈdɔːs/\r
vt. 公开支持，为…代言；签名\r
\r
54. **indicate** /ˈɪndɪkeɪt/\r
vt. 表明，暗示；指向，指示；代表\r
\r
55. **indication** /ˌɪndɪˈkeɪʃn/\r
n. 表明，迹象，象征\r
\r
56. **indicative** /ɪnˈdɪkətɪv/\r
adj. 表明的，表示的，暗示的\r
\r
57. **outrage** /ˈaʊtreɪdʒ/\r
n. 愤怒，愤慨；暴行\r
vt. 使震怒，激怒\r
\r
58. **outset** /ˈaʊtset/\r
n. 开始，起始\r
\r
59. **outside** /ˌaʊtˈsaɪd/\r
adv. 在外面；向外面\r
adj. 外部的；向外的；不属于…的\r
prep. 在…外；不属于；除了\r
n. 外部，外观\r
\r
60. **outward** /ˈaʊtwəd/\r
adj. 外表的，表面上的；向外的\r
adv. 向外，朝外\r
\r
61. **special** /ˈspeʃl/\r
adj. 特殊的，特别重要的；专门的\r
adj. 特别好的；格外的；特价的\r
\r
62. **specialist** /ˈspeʃəlɪst/\r
n. 专家；专科医生\r
adj. 专业的\r
\r
63. **specialize** /ˈspeʃəlaɪz/\r
vi. 专门从事，专门研究\r
vt. 使专门化\r
\r
64. **speciality** /ˌspeʃiˈæləti/\r
n. 专业，专长；特产，特色菜\r
\r
65. **species** /ˈspiːʃiːz/\r
n. 物种，种\r
\r
66. **specific** /spəˈsɪfɪk/\r
adj. 明确的，具体的；特定的，特有的\r
n. 细节，详情\r
\r
67. **specification** /ˌspesɪfɪˈkeɪʃn/\r
n. 规格，具体要求\r
\r
68. **specify** /ˈspesɪfaɪ/\r
vt. 具体指明，明确说明\r
\r
69. **speculate** /ˈspekjuleɪt/\r
vi. vt. 推测，猜想\r
vi. 做投机买卖\r
\r
`,Ju=`# 必考词Unit9 68词\r
1. **acclaim** /əˈkleɪm/\r
vt. 赞扬，公开称赞\r
n. 赞扬，公开称赞\r
\r
2. **accommodate** /əˈkɒmədeɪt/\r
vt. 容纳；为…提供住宿；迎合\r
vi. (调整以)适应\r
\r
3. **accommodation** /əˌkɒməˈdeɪʃn/\r
n. 住宿，住处；和解，调解\r
\r
4. **accompany** /əˈkʌmpəni/\r
vt. 陪伴，陪同；伴随；为…伴奏\r
\r
5. **accomplish** /əˈkʌmplɪʃ/\r
vt. 完成，达成\r
\r
6. **account** /əˈkaʊnt/\r
n. 账户；账目；叙述；解释，说明\r
vi. 认为是，视为\r
\r
7. **accountant** /əˈkaʊntənt/\r
n. 会计，会计师\r
\r
8. **bias** /ˈbaɪəs/\r
n. 偏见，偏袒；偏好\r
vt. 使有偏见，使偏心\r
\r
9. **bid** /bɪd/\r
vi. vt. 出价；叫牌\r
vi. 投标；努力争取\r
vt. 向…表示问候，向…告别；吩咐\r
n. 出价；投标；争取，尝试；叫牌\r
\r
10. **bill** /bɪl/\r
n. 账单；议案；钞票；节目单；喙\r
vt. 开账单；把…宣传为\r
\r
11. **billion** /ˈbɪljən/\r
num. 十亿；数以十亿计，大量\r
\r
12. **birth** /bɜːθ/\r
n. 出生，分娩；诞生，起源；出身\r
\r
13. **charge** /tʃɑːdʒ/\r
n. 费用；指控；指责；掌管；电荷\r
vt. vi. 要价，收费；猛冲，猛攻，冲锋\r
vt. 指控；记在账上；指责；充电\r
vi. 向…方向冲去\r
\r
14. **charm** /tʃɑːm/\r
n. 魅力，吸引力；小挂件；咒语\r
vt. 吸引，迷住\r
vt. 用魔法控制\r
\r
15. **chase** /tʃeɪs/\r
vt. vi. 追逐，追赶；追求，求爱\r
vt. 争取得到；催促\r
vi. 追逐，追赶；匆忙地走\r
n. 追逐，追赶；争取得到\r
\r
16. **demand** /dɪˈmɑːnd/\r
n. 要求；需求\r
vt. 要求；需要\r
\r
17. **democracy** /dɪˈmɒkrəsi/\r
n. 民主，民主制；民主国家\r
\r
18. **democratic** /ˌdeməˈkrætɪk/\r
adj. 民主的\r
\r
19. **demographic** /ˌdeməˈɡræfɪk/\r
adj. 人口(学)的\r
n. 人口统计数据；人群，群体\r
\r
20. **demonstrate** /ˈdemənstreɪt/\r
vt. 表明，证明；示范，演示；展露\r
vi. 示威，游行\r
\r
21. **denote** /dɪˈnəʊt/\r
vt. (符号等)代表，表示，意指\r
\r
22. **denial** /dɪˈnaɪəl/\r
n. 否认；拒绝，拒绝给予\r
\r
23. **deny** /dɪˈnaɪ/\r
vt. 否认；拒绝接受；拒绝给予\r
\r
24. **department** /dɪˈpɑːtmənt/\r
n. 部门，科，系\r
\r
25. **depend** /dɪˈpend/\r
vi. 取决于，依靠，信赖；确信\r
\r
26. **dependent** /dɪˈpendənt/\r
adj. 依赖的；有瘾的；取决于…的\r
n. 受抚养者\r
\r
27. **deposit** /dɪˈpɒzɪt/\r
n. 存款；订金，押金；沉积物\r
vt. 存入银行；放下，放置；使沉积\r
\r
28. **depress** /dɪˈpres/\r
vt. 使沮丧；降低(价格等)；按下\r
\r
29. **emerge** /ɪˈmɜːdʒ/\r
vi. 出现，浮现；开始为人所知\r
vi. vt. (事实)显露，暴露\r
vi. (从困境中)摆脱出来\r
\r
30. **emergency** /ɪˈmɜːdʒənsi/\r
n. 紧急事件，意外事件\r
\r
31. **eminent** /ˈemɪnənt/\r
adj. 杰出的，著名的\r
\r
32. **emotion** /ɪˈməʊʃn/\r
n. 情感，情绪\r
\r
33. **fear** /fɪər/\r
n. 害怕，惧怕，担忧\r
vt. 害怕，惧怕\r
vt. vi. 担心，担忧\r
vi. 恐怕\r
\r
34. **fearful** /ˈfɪəfl/\r
adj. 害怕的；可怕的；极坏的\r
\r
35. **feature** /ˈfiːtʃər/\r
n. 特征，特点；特写，专题；五官\r
vt. 以…为特色\r
vi. 起重要作用\r
\r
36. **federal** /ˈfedərəl/\r
adj. 联邦制的；联邦政府的\r
\r
37. **federation** /ˌfedəˈreɪʃn/\r
n. 联盟；联合会；联邦制国家\r
\r
38. **feed** /fiːd/\r
vt. 喂养，养活；施肥；灌输\r
vt. 将…塞进机器；满足；供给\r
vi. (婴儿或动物)进食\r
n. (婴儿或动物)一餐；饲料，肥料\r
\r
39. **feedback** /ˈfiːdbæk/\r
n. 反馈\r
\r
40. **feeling** /ˈfiːlɪŋ/\r
n. 情绪，感情；(身体)感觉；看法\r
\r
41. **fertile** /ˈfɜːtaɪl/\r
adj. 肥沃的；能生育的；主意多的\r
\r
42. **goal** /ɡəʊl/\r
n. 目标；进球得分；球门\r
\r
43. **goods** /ɡʊdz/\r
n. 商品，货物；私人财产\r
\r
44. **govern** /ˈɡʌvən/\r
vi. 统治，治理\r
vt. 支配，控制，影响\r
\r
45. **government** /ˈɡʌvənmənt/\r
n. 政府；政体；治理，统治\r
\r
46. **governor** /ˈɡʌvənər/\r
n. 州长，省长；总督，董事，主管\r
\r
47. **gradual** /ˈɡrædʒuəl/\r
adj. 逐渐的，逐步的；(斜坡)平缓的\r
\r
48. **graduate** /ˈɡrædʒuət/\r
vi. 毕业\r
vi. vt. 授予(某人)学位\r
vt. 逐渐发展\r
\r
49. **grand** /ɡrænd/\r
adj. 壮丽的，宏伟的；极好的\r
n. 一千英镑(或美元)；三角钢琴\r
\r
50. **grant** /ɡrɑːnt/\r
vt. 批准，准予，给予；承认\r
n. 拨款；补助金\r
\r
51. **heap** /hiːp/\r
n. (凌乱的)一堆；许多；破旧的车\r
vt. 堆放；对…大加赞扬(或批评)\r
\r
52. **heal** /hiːl/\r
vi. vt. 治愈；结束(冲突)，修复\r
vi. (关系)\r
\r
53. **health** /helθ/\r
n. 健康状况，健康；医疗保健\r
\r
54. **healthy** /ˈhelθi/\r
adj. 健康的；有益健康的；合情理的\r
\r
55. **hesitate** /ˈhezɪteɪt/\r
vi. 犹豫，迟疑\r
vi. (因有顾虑而)不愿意(做某事)\r
\r
56. **highlight** /ˈhaɪlaɪt/\r
vt. 强调，突出；用彩笔做标记\r
n. 最突出(精彩)的部分\r
\r
57. **highly** /ˈhaɪli/\r
adv. 非常；高水平地；赞许地\r
\r
58. **immediate** /ɪˈmiːdiət/\r
adj. 立即的，当前的；最接近的\r
adj. 直系的；直接的\r
\r
59. **immense** /ɪˈmens/\r
adj. 巨大的，极大的\r
\r
60. **immerse** /ɪˈmɜːs/\r
vt. 使浸没；(使)深陷于，沉浸\r
\r
61. **immigrant** /ˈɪmɪɡrənt/\r
n. (外来)移民；侨民\r
\r
62. **imminent** /ˈɪmɪnənt/\r
adj. 即将发生的，逼近的\r
\r
63. **immune** /ɪˈmjuːn/\r
adj. 免疫的；不受影响的；被豁免的\r
\r
64. **likely** /ˈlaɪkli/\r
adj. 可能的；合适的\r
adv. 大概，很可能\r
\r
65. **likelihood** /ˈlaɪklihʊd/\r
n. 可能性，可能的事\r
\r
66. **likewise** /ˈlaɪkwaɪz/\r
adv. 同样地，相似地；我也一样\r
\r
67. **self** /self/\r
n. 本来面目；自我，私心；自己\r
pron. 自己的；独自的；(对)自\r
\r
68. **selfish** /ˈselfɪʃ/\r
adj. 自私的\r
\r
`,Yu=/^\s*(\d+)\.\s+\*\*(.+?)\*\*\s+(\/.+\/)\s*$/,Xu=/^\s*([A-Za-z][A-Za-z'’.-]*(?:\s+[A-Za-z][A-Za-z'’.-]*)?)\s+(\/[^/]+\/)\s*$/,Zu=/^((?:[a-z]+\.)+(?:\s+[a-z]+\.)*)\s+(.+)$/i;function Qu(e,t){let n=e.match(/^#{1,3}\s+(.+)$/m)?.[1]?.trim(),r=n?.match(/(必考词)\s*Unit\s*(\d+)/i);return r?`${r[1]} Unit${r[2]}`:n?.replace(/\s*\d+\s*词\s*$/,``).trim()||t}function $u(e){let t=e.match(/^#{1,3}\s+.+?(\d+)\s*词/m)?.[1];return t?Number(t):void 0}function ed(e){return e.map(e=>e.trim()).filter(Boolean).map(e=>{let t=e.match(Zu);return t?{pos:t[1].trim(),meaning:t[2].trim()}:{pos:``,meaning:e}})}function td(e,t){let n=t.unitName||Qu(e,t.unitId),r=e.split(/\r?\n/),i=[],a,o=()=>{if(!a)return;let e=i.length+1;i.push({id:`${t.unitId}-${String(e).padStart(3,`0`)}`,unitId:t.unitId,unitName:n,order:e,word:a.word,phonetic:a.phonetic,definitions:ed(a.definitions)})};for(let e of r){let t=e.match(Yu);if(t){o(),a={order:Number(t[1]),word:t[2].trim(),phonetic:t[3].trim(),definitions:[]};continue}let n=e.match(Xu);if(n){o(),a={order:i.length+1,word:n[1].trim(),phonetic:n[2].trim(),definitions:[]};continue}a&&(!e.trim()||e.trim().startsWith(`#`)||a.definitions.push(e))}return o(),{id:t.unitId,name:n,order:t.order,expectedCount:$u(e),words:i,referenceImages:t.referenceImages}}var nd=Object.assign({"../../单词文本/分区/19.md":Cu,"../../单词文本/分区/20.md":wu,"../../单词文本/分区/21.md":Tu,"../../单词文本/分区/22.md":Eu,"../../单词文本/分区/23.md":Du,"../../单词文本/分区/24.md":Ou,"../../单词文本/分区/25.md":ku,"../../单词文本/分区/26.md":Au,"../../单词文本/分区/必修1.md":ju,"../../单词文本/分区/必修10.md":Mu,"../../单词文本/分区/必修11.md":Nu,"../../单词文本/分区/必修12.md":Pu,"../../单词文本/分区/必修13.md":Fu,"../../单词文本/分区/必修14.md":Iu,"../../单词文本/分区/必修15.md":Lu,"../../单词文本/分区/必修16.md":Ru,"../../单词文本/分区/必修17.md":zu,"../../单词文本/分区/必修18.md":Bu,"../../单词文本/分区/必修2.md":Vu,"../../单词文本/分区/必修3.md":Hu,"../../单词文本/分区/必修4.md":Uu,"../../单词文本/分区/必修5.md":Wu,"../../单词文本/分区/必修6 .md":Gu,"../../单词文本/分区/必修7.md":Ku,"../../单词文本/分区/必修8 .md":qu,"../../单词文本/分区/必修9.md":Ju}),rd={一:1,二:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9,十:10};function id(e){return(e.split(`/`).pop()||e).replace(/\.[^.]+$/,``)}function ad(e){let t=e.match(/\d+/)?.[0];if(t)return Number(t);let n=e.match(/[一二三四五六七八九十]+/)?.[0];if(n){if(n===`十`)return 10;if(n.startsWith(`十`))return 10+(rd[n[1]]||0);if(n.endsWith(`十`))return(rd[n[0]]||1)*10;if(n.includes(`十`)){let[e,t]=n.split(`十`);return(rd[e]||1)*10+(rd[t]||0)}return rd[n]}}function od(e,t){let n=t?.match(/Unit\s*(\d+)/i)?.[1];return n?Number(n):ad(id(e))||999}var sd=Object.entries(nd).map(([e,t])=>{let n=od(e,t);return td(t,{unitId:`unit${n}`,unitName:`必备词 Unit${n}`,order:n})}).sort((e,t)=>e.order-t.order);sd.find(e=>e.id===`unit1`)||sd[0],sd.find(e=>e.id===`unit2`);var cd=sd.flatMap(e=>e.words),ld=`当前线上包未读取到 Supabase 配置，请先配置 GitHub Secrets 并重新部署。你仍可使用游客模式背单词。`;function ud(){let[e,t]=(0,y.useState)(null),[n,r]=(0,y.useState)(null),[i,a]=(0,y.useState)(null),[o,s]=(0,y.useState)(G),[c,l]=(0,y.useState)(null),u=(0,y.useCallback)(async(e=n)=>{if(!e||!G)return a(null),null;let t=await J(e.id)||await Y(e);return a(t),t},[n]);return(0,y.useEffect)(()=>{if(!G||!es){s(!1);return}let e=!0;Gc().then(async({session:n,user:i})=>{e&&(t(n),r(i),i&&await u(i))}).catch(t=>{e&&l(t instanceof Error?t.message:`读取登录状态失败`)}).finally(()=>{e&&s(!1)});let{data:n}=es.auth.onAuthStateChange((e,n)=>{let i=n?.user||null;t(n),r(i),i?u(i).catch(()=>void 0):a(null)});return()=>{e=!1,n.subscription.unsubscribe()}},[u]),{configured:G,session:e,user:n,profile:i,loading:o,error:c,login:(0,y.useCallback)(async(e,n)=>{if(!G)throw l(ld),Error(ld);s(!0),l(null);try{let i=await Kc({email:e,password:n});return t(i.session),r(i.user),i.user&&await u(i.user),i}catch(e){throw l(e instanceof Error?e.message:`登录失败`),e}finally{s(!1)}},[u]),register:(0,y.useCallback)(async(e,n,i)=>{if(!G)throw l(ld),Error(ld);s(!0),l(null);try{let a=await X({username:e,email:n,password:i});return t(a.session),r(a.session?a.user:null),a.session&&a.user&&await u(a.user),a}catch(e){throw l(e instanceof Error?e.message:`注册失败`),e}finally{s(!1)}},[u]),logout:(0,y.useCallback)(async()=>{s(!0),l(null);try{await qc(),t(null),r(null),a(null)}catch(e){throw l(e instanceof Error?e.message:`退出登录失败`),e}finally{s(!1)}},[]),refreshProfile:u}}var dd=new Map(cd.map(e=>[e.id,e.unitId])),fd=new Set([`learned`,`known`,`fuzzy`,`forgotten`,`quiz-correct`,`quiz-wrong`,`monster-defeated`]);function pd(e){return e.lastReviewedAt||e.nextReviewAt||e.firstLearnedAt||new Date(0).toISOString()}function md(e){return fd.has(e)?e:`known`}function hd(e,t){return{user_id:e,word_id:t.wordId,unit_id:dd.get(t.wordId)||null,stage:t.stage,first_learned_at:t.firstLearnedAt||null,last_reviewed_at:t.lastReviewedAt||null,next_review_at:t.nextReviewAt||null,known_count:t.knownCount,fuzzy_count:t.fuzzyCount,forgotten_count:t.forgottenCount,correct_count:t.correctCount,wrong_count:t.wrongCount,monster_hp:null,is_mastered:$s(t),raw_progress:t,updated_at:pd(t)}}function gd(e,t){return Object.values(t).flatMap(t=>t.reviewHistory.map(n=>({user_id:e,word_id:t.wordId,unit_id:dd.get(t.wordId)||null,action:n.action,old_stage:n.stage,new_stage:t.stage,created_at:n.at})))}function _d(e){let t=e.raw_progress&&typeof e.raw_progress==`object`?e.raw_progress:{};return{...Ms(e.word_id),...t,wordId:e.word_id,learned:!!(t.learned??e.first_learned_at),stage:Number(e.stage||0),firstLearnedAt:e.first_learned_at||t.firstLearnedAt,lastReviewedAt:e.last_reviewed_at||t.lastReviewedAt,nextReviewAt:e.next_review_at||t.nextReviewAt,knownCount:Number(e.known_count||0),fuzzyCount:Number(e.fuzzy_count||0),forgottenCount:Number(e.forgotten_count||0),correctCount:Number(e.correct_count||0),wrongCount:Number(e.wrong_count||0),reviewHistory:Array.isArray(t.reviewHistory)?t.reviewHistory:[]}}async function vd(e,t,n){let r=is(),i=await r.from(e).delete().eq(`user_id`,t);if(i.error)throw i.error;if(!n.length)return;let a=await r.from(e).insert(n);if(a.error)throw a.error}async function yd(e,t){let n=is(),r=Object.values(t).map(t=>hd(e,t));if(r.length){let e=await n.from(`word_progress`).upsert(r,{onConflict:`user_id,word_id`});if(e.error)throw e.error}await vd(`review_history`,e,gd(e,t))}async function bd(e){let t=is(),n=await t.from(`word_progress`).select(`*`).eq(`user_id`,e);if(n.error)throw n.error;let r={};(n.data||[]).forEach(e=>{let t=_d(e);r[t.wordId]=t});let i=await t.from(`review_history`).select(`*`).eq(`user_id`,e).order(`created_at`,{ascending:!0});if(i.error)throw i.error;let a=new Map;return(i.data||[]).forEach(e=>{let t=a.get(e.word_id)||[];t.push({action:md(e.action),at:e.created_at,stage:Number(e.new_stage??e.old_stage??0)}),a.set(e.word_id,t)}),a.forEach((e,t)=>{r[t]={...r[t]||Ms(t),reviewHistory:e.slice(-200)}}),r}async function xd(e){let{count:t,error:n}=await is().from(`word_progress`).select(`id`,{count:`exact`,head:!0}).eq(`user_id`,e);if(n)throw n;return!!(t&&t>0)}function Sd(){return new Date().toISOString()}async function Cd(e,t,n){let r=is(),i=await r.from(e).delete().eq(`user_id`,t);if(i.error)throw i.error;if(!n.length)return;let a=await r.from(e).insert(n);if(a.error)throw a.error}function wd(e,t){return{user_id:e,total_study_days:t.totalStudyDays,current_streak:t.currentStreak,longest_streak:t.longestStreak,total_study_minutes:t.totalStudyMinutes,total_words_learned:t.totalWordsLearned,total_words_reviewed:t.totalWordsReviewed,total_quiz_count:t.totalQuizCount,total_correct_count:t.totalCorrectCount,total_wrong_count:t.totalWrongCount,total_xp:t.totalXp,level:t.level||Ts(t.totalXp),coins:t.coins,diamonds:t.diamonds,monster_points:t.monsterPoints,defeated_monsters:t.defeatedMonsters,raw_stats:t,updated_at:Sd()}}function Td(e,t){return{user_id:e,default_accent:t.audioSettings.defaultAccent,auto_play_on_study:t.audioSettings.autoPlayOnStudy,auto_play_on_recall:t.audioSettings.autoPlayOnRecall,speech_rate:t.audioSettings.speechRate,repeat_count:t.audioSettings.repeatCount,theme:t.equippedTheme,updated_at:Sd()}}function Ed(e,t){return t.map(t=>({user_id:e,mode:t.mode,unit_id:t.unitId||null,started_at:t.startedAt,ended_at:t.endedAt,duration_seconds:t.durationSeconds,word_count:t.wordCount,correct_count:t.correctCount??null,wrong_count:t.wrongCount??null,created_at:t.startedAt}))}function Dd(e,t){return t.map(t=>({user_id:e,date:t.date,type:`checkin`,streak_day:t.streakDay,reward_xp:t.rewardXp,reward_coins:t.rewardCoins,created_at:t.checkedAt}))}function Od(e,t){return t.map(t=>({user_id:e,type:t.type,title:t.title,description:t.description,xp:t.xp,coins:t.coins,diamonds:0,created_at:t.createdAt}))}function kd(e,t){return Array.from(new Set(t)).map(t=>({user_id:e,achievement_id:t,unlocked_at:Sd()}))}function Ad(e,t){return t.map(t=>({user_id:e,item_id:t.itemId,count:t.count,obtained_at:t.obtainedAt,updated_at:Sd()}))}function $(e,t=0){let n=Number(e);return Number.isFinite(n)?n:t}function jd(e){let t=e?.raw_stats&&typeof e.raw_stats==`object`?e.raw_stats:{};return Vs({...t,totalStudyDays:$(e?.total_study_days,t.totalStudyDays),currentStreak:$(e?.current_streak,t.currentStreak),longestStreak:$(e?.longest_streak,t.longestStreak),totalStudyMinutes:$(e?.total_study_minutes,t.totalStudyMinutes),totalWordsLearned:$(e?.total_words_learned,t.totalWordsLearned),totalWordsReviewed:$(e?.total_words_reviewed,t.totalWordsReviewed),totalQuizCount:$(e?.total_quiz_count,t.totalQuizCount),totalCorrectCount:$(e?.total_correct_count,t.totalCorrectCount),totalWrongCount:$(e?.total_wrong_count,t.totalWrongCount),totalXp:$(e?.total_xp,t.totalXp),level:$(e?.level,t.level||1),coins:$(e?.coins,t.coins),diamonds:$(e?.diamonds,t.diamonds),monsterPoints:$(e?.monster_points,t.monsterPoints),defeatedMonsters:$(e?.defeated_monsters,t.defeatedMonsters)})}function Md(e,t){return e?{autoPlayOnStudy:!!e.auto_play_on_study,autoPlayOnRecall:!!e.auto_play_on_recall,defaultAccent:e.default_accent===`uk`?`uk`:`us`,speechRate:[.8,.9,1,1.1].includes(Number(e.speech_rate))?Number(e.speech_rate):t.speechRate,repeatCount:Number(e.repeat_count)===2?2:1}:t}function Nd(e){return[`study`,`recall`,`quiz`,`review`,`total`].includes(e)}async function Pd(e,t){let n=is(),r=await n.from(`user_stats`).upsert(wd(e,t),{onConflict:`user_id`});if(r.error)throw r.error;let i=await n.from(`user_settings`).upsert(Td(e,t),{onConflict:`user_id`});if(i.error)throw i.error;await Cd(`study_sessions`,e,Ed(e,t.studySessions)),await Cd(`checkins`,e,Dd(e,t.checkInHistory)),await Cd(`rewards`,e,Od(e,t.rewardHistory)),await Cd(`achievements`,e,kd(e,t.checkedAchievementIds)),await Cd(`inventory`,e,Ad(e,t.inventory))}async function Fd(e){let t=is(),[n,r,i,a,o,s,c]=await Promise.all([t.from(`user_stats`).select(`*`).eq(`user_id`,e).maybeSingle(),t.from(`user_settings`).select(`*`).eq(`user_id`,e).maybeSingle(),t.from(`study_sessions`).select(`*`).eq(`user_id`,e).order(`started_at`,{ascending:!1}),t.from(`checkins`).select(`*`).eq(`user_id`,e).order(`date`,{ascending:!1}),t.from(`rewards`).select(`*`).eq(`user_id`,e).order(`created_at`,{ascending:!1}),t.from(`achievements`).select(`*`).eq(`user_id`,e),t.from(`inventory`).select(`*`).eq(`user_id`,e)]);[n,r,i,a,o,s,c].forEach(e=>{if(e.error)throw e.error});let l=n.data?jd(n.data):Bs(),u=(i.data||[]).map(e=>({id:e.id,date:String(e.started_at||e.created_at).slice(0,10),startedAt:e.started_at,endedAt:e.ended_at,durationSeconds:$(e.duration_seconds),mode:Nd(e.mode)?e.mode:`study`,unitId:e.unit_id||void 0,wordCount:$(e.word_count),correctCount:e.correct_count==null?void 0:$(e.correct_count),wrongCount:e.wrong_count==null?void 0:$(e.wrong_count)})),d=(a.data||[]).filter(e=>e.type===`checkin`).map(e=>({date:e.date,checkedAt:e.created_at,streakDay:$(e.streak_day,1),rewardXp:$(e.reward_xp),rewardCoins:$(e.reward_coins)})),f=(o.data||[]).map(e=>({id:e.id,type:e.type,title:e.title,description:e.description||``,xp:$(e.xp),coins:$(e.coins),createdAt:e.created_at})),p=(s.data||[]).map(e=>e.achievement_id).filter(Boolean),m=(c.data||[]).map(e=>({itemId:e.item_id,count:$(e.count,1),obtainedAt:e.obtained_at}));return Vs({...l,audioSettings:Md(r.data,l.audioSettings),equippedTheme:r.data?.theme||l.equippedTheme,studySessions:u,checkInHistory:d,rewardHistory:f,checkedAchievementIds:p,inventory:m})}async function Id(e){let{count:t,error:n}=await is().from(`user_stats`).select(`id`,{count:`exact`,head:!0}).eq(`user_id`,e);if(n)throw n;return!!(t&&t>0)}var Ld=`reword-pending-sync-v1`,Rd=`reword-sync-meta-v1`;function zd(){return typeof window<`u`&&`localStorage`in window}function Bd(e){return`${e}-${typeof crypto<`u`&&`randomUUID`in crypto?crypto.randomUUID():`${Date.now()}-${Math.random().toString(36).slice(2,8)}`}`}function Vd(e,t){if(!zd())return t;let n=window.localStorage.getItem(e);if(!n)return t;try{return JSON.parse(n)}catch{return t}}function Hd(e,t){zd()&&window.localStorage.setItem(e,JSON.stringify(t))}function Ud(){return Vd(Ld,[])}function Wd(e,t={}){let n=[...Ud(),{id:Bd(`sync`),type:e,payload:t,createdAt:new Date().toISOString(),retryCount:0}].slice(-100);return Hd(Ld,n),n}function Gd(){Hd(Ld,[])}function Kd(){return Vd(Rd,{})}function qd(e){Hd(Rd,e)}function Jd(){return{progress:Fs(),userStats:Hs(),exportedAt:new Date().toISOString(),schemaVersion:1}}function Yd(e){Is(e.progress),Us(e.userStats)}function Xd(e=Jd()){let t=e.userStats;return Object.keys(e.progress).length>0||t.totalWordsLearned>0||t.totalWordsReviewed>0||t.totalQuizCount>0||t.totalStudyMinutes>0||t.rewardHistory.length>0||t.studySessions.length>0||t.checkInHistory.length>0}async function Zd(e){let[t,n]=await Promise.all([xd(e),Id(e)]);return t||n}async function Qd(e,t=Jd()){await yd(e,t.progress),await Pd(e,t.userStats);let n={userId:e,lastSyncAt:new Date().toISOString(),lastMode:`upload`};return qd(n),Gd(),n}async function $d(e){let[t,n]=await Promise.all([bd(e),Fd(e)]);return{progress:t,userStats:n,exportedAt:new Date().toISOString(),schemaVersion:1}}function ef(e){if(!e)return 0;let t=e.reviewHistory.reduce((e,t)=>Math.max(e,new Date(t.at).getTime()),0);return Math.max(t,e.lastReviewedAt?new Date(e.lastReviewedAt).getTime():0,e.nextReviewAt?new Date(e.nextReviewAt).getTime():0,e.firstLearnedAt?new Date(e.firstLearnedAt).getTime():0)}function tf(e,t){let n=new Set([...Object.keys(e),...Object.keys(t)]),r={};return n.forEach(n=>{let i=e[n],a=t[n];if(!i){r[n]=a;return}if(!a){r[n]=i;return}let o=ef(i)>=ef(a)?i:a,s=[...i.reviewHistory,...a.reviewHistory].sort((e,t)=>new Date(e.at).getTime()-new Date(t.at).getTime()).filter((e,t,n)=>t===0||`${e.action}-${e.at}-${e.stage}`!=`${n[t-1].action}-${n[t-1].at}-${n[t-1].stage}`).slice(-200);r[n]={...o,reviewHistory:s}}),r}function nf(e,t){let n=new Map;return e.forEach(e=>{n.set(t(e),e)}),Array.from(n.values())}function rf(...e){let t=e.filter(e=>!!e).sort();return t.length?t[t.length-1]:null}function af(e,t){let n={...t.dailyRewardCaps};return Object.entries(e.dailyRewardCaps).forEach(([e,t])=>{let r=n[e]||{xp:0,coins:0,monsterPoints:0};n[e]={xp:Math.max(r.xp,t.xp),coins:Math.max(r.coins,t.coins),monsterPoints:Math.max(r.monsterPoints,t.monsterPoints)}}),{...e,totalStudyDays:Math.max(e.totalStudyDays,t.totalStudyDays),currentStreak:Math.max(e.currentStreak,t.currentStreak),longestStreak:Math.max(e.longestStreak,t.longestStreak),signInStreak:Math.max(e.signInStreak,t.signInStreak),lastSignInDate:rf(e.lastSignInDate,t.lastSignInDate),lastCheckInDate:rf(e.lastCheckInDate,t.lastCheckInDate),totalStudyMinutes:Math.max(e.totalStudyMinutes,t.totalStudyMinutes),totalWordsLearned:Math.max(e.totalWordsLearned,t.totalWordsLearned),totalWordsReviewed:Math.max(e.totalWordsReviewed,t.totalWordsReviewed),totalQuizCount:Math.max(e.totalQuizCount,t.totalQuizCount),totalCorrectCount:Math.max(e.totalCorrectCount,t.totalCorrectCount),totalWrongCount:Math.max(e.totalWrongCount,t.totalWrongCount),totalXp:Math.max(e.totalXp,t.totalXp),level:Math.max(e.level,t.level),coins:Math.max(e.coins,t.coins),diamonds:Math.max(e.diamonds,t.diamonds),monsterPoints:Math.max(e.monsterPoints,t.monsterPoints),defeatedMonsters:Math.max(e.defeatedMonsters,t.defeatedMonsters),unlockedItems:Array.from(new Set([...e.unlockedItems,...t.unlockedItems])),checkedAchievementIds:Array.from(new Set([...e.checkedAchievementIds,...t.checkedAchievementIds])),defeatedWordIds:Array.from(new Set([...e.defeatedWordIds,...t.defeatedWordIds])),defeatedBossIds:Array.from(new Set([...e.defeatedBossIds,...t.defeatedBossIds])),dailyRewardCaps:n,checkInHistory:nf([...e.checkInHistory,...t.checkInHistory],e=>e.date).sort((e,t)=>t.date.localeCompare(e.date)).slice(0,365),studySessions:nf([...e.studySessions,...t.studySessions],e=>`${e.startedAt}-${e.mode}-${e.unitId||``}`).slice(0,500),rewardHistory:nf([...e.rewardHistory,...t.rewardHistory],e=>`${e.createdAt}-${e.title}`).sort((e,t)=>t.createdAt.localeCompare(e.createdAt)).slice(0,200),inventory:nf([...e.inventory,...t.inventory],e=>e.itemId).map(n=>{let r=e.inventory.find(e=>e.itemId===n.itemId),i=t.inventory.find(e=>e.itemId===n.itemId);return{...n,count:(r?.count||0)+(i?.count||0),obtainedAt:[r?.obtainedAt,i?.obtainedAt].filter(Boolean).sort()[0]||n.obtainedAt}}),audioSettings:t.audioSettings,soundSettings:t.soundSettings||e.soundSettings,equippedTheme:t.equippedTheme||e.equippedTheme,equippedAvatar:t.equippedAvatar||e.equippedAvatar}}function of(e,t){return{progress:tf(e.progress,t.progress),userStats:af(e.userStats,t.userStats),exportedAt:new Date().toISOString(),schemaVersion:1}}async function sf(e,t,n=Jd()){try{if(t===`upload`)return await Qd(e,n),n;let r=await $d(e);if(t===`download`)return Yd(r),qd({userId:e,lastSyncAt:new Date().toISOString(),lastMode:`download`}),Gd(),r;let i=of(n,r);return Yd(i),await Qd(e,i),qd({userId:e,lastSyncAt:new Date().toISOString(),lastMode:`merge`}),i}catch(e){throw qd({...Kd(),lastError:e instanceof Error?e.message:`同步失败`}),e}}function cf(){let[e,t]=(0,y.useState)(()=>typeof navigator>`u`?!0:navigator.onLine);return(0,y.useEffect)(()=>{let e=()=>t(!0),n=()=>t(!1);return window.addEventListener(`online`,e),window.addEventListener(`offline`,n),()=>{window.removeEventListener(`online`,e),window.removeEventListener(`offline`,n)}},[]),{online:e}}var lf=ts();function uf({userId:e,progressMap:t,userStats:n,onApplySnapshot:r}){let{online:i}=cf(),a=(0,y.useRef)(Jd()),o=(0,y.useRef)(),s=(0,y.useRef)(),c=Kd(),[l,u]=(0,y.useState)(()=>({configured:G,online:i,state:G?`idle`:`disabled`,message:G?`登录后可同步`:lf,lastSyncAt:c.lastSyncAt,pendingCount:Ud().length,needsFirstSyncChoice:!1}));(0,y.useEffect)(()=>{a.current={progress:t,userStats:n,exportedAt:new Date().toISOString(),schemaVersion:1}},[t,n]);let d=(0,y.useCallback)((e={})=>{let t=Kd();u(n=>({...n,configured:G,online:i,lastSyncAt:t.lastSyncAt,pendingCount:Ud().length,...e}))},[i]),f=(0,y.useCallback)(async t=>{if(!G)return d({state:`disabled`,message:lf}),null;if(!e)return d({state:`idle`,message:`登录后可同步`}),null;if(!i)return Wd(`manual`,{mode:t}),d({state:`offline`,message:`离线中，已加入待同步队列`}),null;d({state:`syncing`,message:`同步中`});try{let n=await sf(e,t,a.current);return r(n),d({state:`success`,message:t===`upload`?`已上传本地进度`:t===`download`?`已恢复云端进度`:`已合并本地和云端进度`,needsFirstSyncChoice:!1}),n}catch(e){throw d({state:`error`,message:e instanceof Error?e.message:`同步失败`}),e}},[i,r,d,e]),p=(0,y.useCallback)((t,n={})=>{if(!G){d({state:`disabled`,message:lf});return}if(!e){d({state:`idle`,message:`游客本地模式`});return}if(!i){Wd(t,n),d({state:`offline`,message:`离线中，已先保存到本地`});return}window.clearTimeout(o.current),o.current=window.setTimeout(()=>{f(`upload`).catch(()=>void 0)},900)},[i,d,f,e]);return(0,y.useEffect)(()=>{d({state:G?i?l.state===`offline`?`idle`:l.state:`offline`:`disabled`,message:G?i?l.message:`离线模式`:lf})},[i]),(0,y.useEffect)(()=>{!G||!e||!i||Ud().length&&f(`upload`).catch(()=>void 0)},[i,f,e]),(0,y.useEffect)(()=>{if(!G||!e||s.current===e)return;s.current=e;let t=Kd();if(t.userId===e&&t.lastSyncAt){d({state:`success`,message:`已连接云同步`,needsFirstSyncChoice:!1});return}let n=!0;return Zd(e).then(async e=>{if(!n)return;let t=Xd(a.current);t&&e?d({state:`idle`,message:`请选择首次同步方式`,needsFirstSyncChoice:!0}):t&&!e?await f(`upload`):!t&&e?await f(`download`):d({state:`success`,message:`已连接云同步`,needsFirstSyncChoice:!1})}).catch(e=>{n&&d({state:`error`,message:e instanceof Error?e.message:`读取云端数据失败`})}),()=>{n=!1}},[d,f,e]),(0,y.useEffect)(()=>()=>window.clearTimeout(o.current),[]),{...l,syncNow:f,queueLocalChange:p,refreshStatus:d}}var df=new Set([`click`,`success`,`error`,`reward`,`toggle`]);function ff(e){(0,y.useEffect)(()=>{let t=t=>{let n=(t.target instanceof Element?t.target:null)?.closest(`button, a`);if(!n||n.getAttribute(`aria-disabled`)===`true`||`disabled`in n&&n.disabled)return;let r=n.dataset.sound;if(r!==`none`){if(r&&df.has(r)){$l(r,e);return}eu(e)}};return document.addEventListener(`pointerdown`,t,{capture:!0}),()=>document.removeEventListener(`pointerdown`,t,{capture:!0})},[e.enabled,e.volume])}function pf(e){let t=new Blob([e],{type:`application/json`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`reword-progress-${new Date().toISOString().slice(0,10)}.json`,r.click(),URL.revokeObjectURL(n)}function mf(e,t,n=6e4){return e.lastReviewedAt?t.getTime()-new Date(e.lastReviewedAt).getTime()<n:!1}function hf(e,t){return t.rewardHistory[0]&&t.rewardHistory[0]?.id!==e.rewardHistory[0]?.id}function gf(){let[e,t]=(0,y.useState)({name:`dashboard`}),[n,r]=(0,y.useState)(()=>Fs()),[i,a]=(0,y.useState)(()=>Hs()),[o,s]=(0,y.useState)(),[c,l]=(0,y.useState)(!1),u=ud();ff(i.soundSettings);let d=(0,y.useCallback)(e=>{r(e.progress),a(e.userStats)},[]),f=uf({userId:u.user?.id,progressMap:n,userStats:i,onApplySnapshot:d}),p=(0,y.useMemo)(()=>sd.find(t=>t.id===e.unitId)||sd[0],[e.unitId]),m=(0,y.useMemo)(()=>{if(e.name===`quiz`&&e.quizMode===`wrong`){let e=rc(cd,n);return e.length?e:cd}return e.unitId?p.words:cd},[n,e.name,e.quizMode,e.unitId,p.words]);(0,y.useEffect)(()=>{u.user&&f.needsFirstSyncChoice&&e.name!==`sync`&&t({name:`sync`})},[u.user,f.needsFirstSyncChoice,e.name]),(0,y.useEffect)(()=>{(e.name===`study`||e.name===`recall`||e.name===`quiz`)&&window.scrollTo({top:0})},[e.name,e.unitId]),(0,y.useEffect)(()=>{if(!o)return;let e=window.setTimeout(()=>s(void 0),2600);return()=>window.clearTimeout(e)},[o]),(0,y.useEffect)(()=>{let e=()=>l(!0);return window.addEventListener(`reword:update-ready`,e),()=>window.removeEventListener(`reword:update-ready`,e)},[]);let h=async()=>{let e=await navigator.serviceWorker?.getRegistration();if(e?.waiting){e.waiting.postMessage({type:`SKIP_WAITING`});return}window.location.reload()},g=async()=>{if(window.confirm(`只清理 PWA 缓存和旧版本文件，不会删除学习进度。继续吗？`)){if(`caches`in window){let e=await caches.keys();await Promise.all(e.filter(e=>e.startsWith(`reword-cache-`)).map(e=>caches.delete(e)))}if(`serviceWorker`in navigator){let e=await navigator.serviceWorker.getRegistrations();await Promise.all(e.map(e=>e.unregister()))}window.location.reload()}},_=(e,t,r=n)=>{let i=lc(t,cd,r);return Us(i),f.queueLocalChange(`stats`,{source:`stats-update`}),hf(e,i)&&s(i.rewardHistory[0]),i},v=(e,t=n)=>{a(n=>_(n,e(n),t))},b=(e,t,n)=>{r(r=>{let i=r[e]||Ms(e),o=t(i),s={...r,[e]:o};return Is(s),f.queueLocalChange(`progress`,{wordId:e}),n&&a(e=>_(e,n(e,i,o,s),s)),s})},x=e=>{n[e]?.learned||n[e]?.firstLearnedAt?eu(i.soundSettings):tu(i.soundSettings),b(e,e=>Js(e),(e,t)=>t.learned||t.firstLearnedAt?e:ks({...e,totalWordsLearned:e.totalWordsLearned+1},{type:`study`,title:`新词入库`,description:`完成 1 个新单词初学`,xp:2,coins:1,monsterPoints:1}))},S=(e,t)=>{let n=new Date;t===`known`?tu(i.soundSettings):t===`fuzzy`?iu(i.soundSettings):nu(i.soundSettings),b(e,e=>t===`known`?Ys(e,n):t===`fuzzy`?Xs(e,n):Zs(e,n),(r,i,a)=>{if(mf(i,n))return r;let o={...r,totalWordsReviewed:r.totalWordsReviewed+1};return t===`known`?o=ks(o,{type:`review`,title:`复习命中`,description:`理解模式记住 1 个单词`,xp:4,coins:2,monsterPoints:3}):t===`fuzzy`&&(o=ks(o,{type:`review`,title:`复习推进`,description:`标记 1 个不熟词，进入加固周期`,xp:1,monsterPoints:1})),t===`known`&&$s(a)&&!o.defeatedWordIds.includes(e)&&(o=ks({...o,defeatedWordIds:[...o.defeatedWordIds,e],defeatedMonsters:o.defeatedMonsters+1},{type:`monster`,title:`击败单词小怪`,description:`一个单词进入掌握状态`,xp:10,coins:5,monsterPoints:10})),o})},C=(e,t)=>{let n=new Date;t?tu(i.soundSettings):nu(i.soundSettings),b(e,e=>t?Ns(Ys({...e,correctCount:e.correctCount+1},n),`quiz-correct`,n):Ns(Zs({...e,wrongCount:e.wrongCount+1},n),`quiz-wrong`,n),(r,i,a)=>{let o=mf(i,n),s={...r,totalQuizCount:r.totalQuizCount+1,totalCorrectCount:r.totalCorrectCount+ +!!t,totalWrongCount:r.totalWrongCount+ +!t};return!o&&t&&(s=ks(s,{type:`quiz`,title:`测试答对`,description:`测验中答对 1 题`,xp:3,coins:1,monsterPoints:2})),t&&$s(a)&&!s.defeatedWordIds.includes(e)&&(s=ks({...s,defeatedWordIds:[...s.defeatedWordIds,e],defeatedMonsters:s.defeatedMonsters+1},{type:`monster`,title:`击败单词小怪`,description:`测试命中让单词进入掌握状态`,xp:10,coins:5,monsterPoints:10})),s})},w=e=>{try{r(zs(e)),a(Hs()),f.queueLocalChange(`manual`,{source:`import`})}catch(e){window.alert(e instanceof Error?e.message:`导入失败`)}},ee=()=>{window.confirm(`确定清空所有学习进度、金币和打卡记录吗？`)&&(Ls(),r({}),a(Hs()),f.queueLocalChange(`manual`,{source:`reset`}))},te=(0,y.useCallback)(e=>{a(t=>{let n=q(t).todaySeconds,r=kc(t,e);if(r===t)return t;let i=q(r).todaySeconds;[{minutes:15,xp:20,coins:8,monsterPoints:8},{minutes:30,xp:35,coins:12,monsterPoints:12},{minutes:60,xp:80,coins:25,monsterPoints:25}].forEach(e=>{n<e.minutes*60&&i>=e.minutes*60&&(r=ks(r,{type:`study`,title:`专注 ${e.minutes} 分钟`,description:`今日学习时长达标`,xp:e.xp,coins:e.coins,monsterPoints:e.monsterPoints}))});let a=lc(r,cd,Fs());return Us(a),f.queueLocalChange(`session`,{sessionId:e.id}),hf(t,a)&&s(a.rewardHistory[0]),a})},[f.queueLocalChange]),ne=()=>{ru(i.soundSettings),v(e=>mc(e))},re=()=>{if(!pc(cd,n,i)){nu(i.soundSettings),window.alert(`今日任务还没达成，先学几个新词、复习或完成一次测试。`);return}ru(i.soundSettings),v(e=>hc(e))},ie=e=>{lu(i,e)===i?nu(i.soundSettings):ru(i.soundSettings),a(t=>{let n=lu(t,e);return n===t?(window.alert(`金币/钻石不足，或已经拥有这个物品。`),t):_(t,n)})},ae=e=>{let t=sd.find(t=>t.id===e);if(!t)return;let r=Qc(t,n,i);if(!r.eligible||r.defeated){nu(i.soundSettings),window.alert(`Boss 还不能挑战：需要本单元学习达到 80%，并且没有到期复习。`);return}ru(i.soundSettings),v(t=>ks({...t,defeatedBossIds:[...t.defeatedBossIds,e],defeatedMonsters:t.defeatedMonsters+1},{type:`monster`,title:`击败 ${r.name}`,description:`完成一个单元 Boss 挑战`,xp:100,coins:50,diamonds:1,monsterPoints:60,bypassDailyCap:!0}))},oe=e=>{v(t=>({...t,audioSettings:e}))},se=e=>{v(t=>({...t,soundSettings:e}))},ce=()=>{t({name:`study`,unitId:(sd.find(e=>e.words.some(e=>!n[e.id]?.learned&&!n[e.id]?.firstLearnedAt))||sd[0]).id})},le=e=>t({name:e}),ue=e.name===`study`||e.name===`quiz`||e.name===`total`?e.name:e.name===`recall`?e.dueOnly?`review`:`recall`:void 0;return(0,E.jsxs)(yt,{current:e.name,onNavigate:le,user:u.user,profile:u.profile,children:[o?(0,E.jsx)(`div`,{className:`fixed left-1/2 top-20 z-50 w-[min(92vw,360px)] -translate-x-1/2`,children:(0,E.jsx)(bt,{reward:o})}):null,c?(0,E.jsxs)(`div`,{className:`fixed inset-x-3 top-16 z-50 mx-auto flex max-w-md items-center justify-between gap-3 rounded-lg border border-indigo-200 bg-white px-3 py-2 text-sm shadow-soft md:top-4`,children:[(0,E.jsx)(`span`,{className:`font-semibold text-ink`,children:`发现新版本`}),(0,E.jsxs)(`div`,{className:`flex shrink-0 gap-2`,children:[(0,E.jsx)(`button`,{type:`button`,onClick:()=>l(!1),className:`rounded-md border border-slate-200 px-2 py-1 text-xs font-semibold text-slate-500`,children:`稍后`}),(0,E.jsx)(`button`,{type:`button`,onClick:g,className:`rounded-md border border-sky-200 px-2 py-1 text-xs font-semibold text-harbor`,children:`清缓存`}),(0,E.jsx)(`button`,{type:`button`,onClick:h,className:`rounded-md bg-harbor px-2 py-1 text-xs font-semibold text-white`,children:`刷新`})]})]}):null,e.name===`login`?(0,E.jsx)(Yc,{configured:u.configured,loading:u.loading,error:u.error,onLogin:async(e,t)=>{await u.login(e,t)},onSuccess:()=>t({name:`sync`}),onRegister:()=>t({name:`register`}),onGuest:()=>t({name:`dashboard`})}):e.name===`register`?(0,E.jsx)(Ul,{configured:u.configured,loading:u.loading,error:u.error,onRegister:async(e,t,n)=>await u.register(e,t,n),onSuccess:()=>t({name:u.user?`sync`:`login`}),onLogin:()=>t({name:`login`})}):e.name===`sync`?(0,E.jsx)(gu,{configured:f.configured,online:f.online,user:u.user,state:f.state,message:f.message,lastSyncAt:f.lastSyncAt,pendingCount:f.pendingCount,onSync:async e=>{await f.syncNow(e),t({name:`account`})},onSkip:()=>t({name:`dashboard`}),onLogin:()=>t({name:`login`})}):e.name===`account`?(0,E.jsx)(ms,{configured:f.configured,online:f.online,user:u.user,profile:u.profile,state:f.state,message:f.message,lastSyncAt:f.lastSyncAt,pendingCount:f.pendingCount,onLogin:()=>t({name:`login`}),onRegister:()=>t({name:`register`}),onSync:f.syncNow,onLogout:async()=>{await u.logout(),t({name:`dashboard`})},onExport:()=>pf(Rs()),onImport:w}):e.name===`dashboard`?(0,E.jsx)(Ic,{units:sd,words:cd,progressMap:n,stats:i,onSignIn:ne,onContinueStudy:ce,onNavigateReview:()=>t({name:`review`}),onNavigateWrongQuiz:()=>t({name:`quiz`,quizMode:`wrong`}),onNavigateUnits:()=>t({name:`units`}),onNavigateCheckIn:()=>t({name:`checkin`}),onNavigateMonster:()=>t({name:`monster`}),onNavigateShop:()=>t({name:`shop`}),onNavigateStatistics:()=>t({name:`statistics`}),onNavigateLogin:()=>t({name:`login`}),onNavigateAccount:()=>t({name:`account`}),syncStatus:{configured:f.configured,online:f.online,state:f.state,message:u.user?f.message:f.configured?`游客本地模式`:f.message,lastSyncAt:f.lastSyncAt,pendingCount:f.pendingCount,isLoggedIn:!!u.user}}):e.name===`units`?(0,E.jsx)(bu,{units:sd,progressMap:n,onOpenUnit:e=>t({name:`unitDetail`,unitId:e})}):e.name===`unitDetail`?(0,E.jsx)(vu,{unit:p,progressMap:n,onStudy:()=>t({name:`study`,unitId:p.id}),onRecall:()=>t({name:`recall`,unitId:p.id}),onQuiz:()=>t({name:`quiz`,unitId:p.id})}):e.name===`study`?(0,E.jsx)(hu,{unit:e.unitId?p:void 0,words:m,progressMap:n,audioSettings:i.audioSettings,onLearn:x}):e.name===`recall`?(0,E.jsx)(zl,{title:e.unitId?`${p.name} 理解功能`:`总理解功能`,words:m,progressMap:n,audioSettings:i.audioSettings,initialDueOnly:e.dueOnly,onGrade:S,onBackToStudy:()=>t({name:`study`,unitId:e.unitId})}):e.name===`quiz`?(0,E.jsx)(Fl,{title:e.quizMode===`wrong`?`错题强化测试`:e.unitId?`${p.name} 测试功能`:`总测试功能`,words:m,allWords:cd,progressMap:n,audioSettings:i.audioSettings,onAnswer:C}):e.name===`total`?(0,E.jsx)(_u,{words:cd,progressMap:n,audioSettings:i.audioSettings,onStudy:()=>t({name:`study`}),onRecall:()=>t({name:`recall`}),onQuiz:()=>t({name:`quiz`})}):e.name===`review`?(0,E.jsx)(Wl,{words:cd,progressMap:n,audioSettings:i.audioSettings,onStartReview:()=>t({name:`recall`,dueOnly:!0}),onOpenUnits:()=>t({name:`units`})}):e.name===`checkin`?(0,E.jsx)(vc,{words:cd,progressMap:n,stats:i,onSignIn:ne,onCheckIn:re}):e.name===`rewards`?(0,E.jsx)(Gl,{stats:i}):e.name===`shop`?(0,E.jsx)(du,{stats:i,onExchange:ie}):e.name===`monster`?(0,E.jsx)(nl,{words:cd,units:sd,progressMap:n,stats:i,onChallengeBoss:ae}):e.name===`statistics`?(0,E.jsx)(pu,{stats:i,words:cd,progressMap:n}):e.name===`achievements`?(0,E.jsx)(uc,{stats:i,words:cd,progressMap:n}):e.name===`settings`?(0,E.jsx)(ou,{stats:i,onUpdateAudio:oe,onUpdateSound:se,syncStatus:{online:f.online,state:f.state,message:f.message,lastSyncAt:f.lastSyncAt,pendingCount:f.pendingCount,isLoggedIn:!!u.user}}):(0,E.jsx)(rl,{words:cd,progressMap:n,stats:i,onNavigateCheckIn:()=>t({name:`checkin`}),onNavigateRewards:()=>t({name:`rewards`}),onNavigateShop:()=>t({name:`shop`}),onNavigateStatistics:()=>t({name:`statistics`}),onNavigateAchievements:()=>t({name:`achievements`}),onNavigateSettings:()=>t({name:`settings`}),onNavigateAccount:()=>t({name:`account`}),syncStatus:{configured:f.configured,online:f.online,state:f.state,message:u.user?f.message:f.configured?`游客本地模式`:f.message,lastSyncAt:f.lastSyncAt,pendingCount:f.pendingCount},onExport:()=>pf(Rs()),onImport:w,onClearCache:g,onReset:ee}),(0,E.jsx)(Su,{mode:ue,unitId:e.unitId,wordCount:m.length,onComplete:te})]})}ot.createRoot(document.getElementById(`root`)).render((0,E.jsx)(y.StrictMode,{children:(0,E.jsx)(gf,{})})),`serviceWorker`in navigator&&window.addEventListener(`load`,()=>{let e=!1,t=()=>window.dispatchEvent(new CustomEvent(`reword:update-ready`));navigator.serviceWorker.addEventListener(`controllerchange`,()=>{e||(e=!0,window.location.reload())}),navigator.serviceWorker.register(`/reword/sw.js`).then(e=>{e.update(),e.waiting&&t(),e.addEventListener(`updatefound`,()=>{let n=e.installing;n?.addEventListener(`statechange`,()=>{n.state===`installed`&&navigator.serviceWorker.controller&&t()})})}).catch(()=>void 0)});