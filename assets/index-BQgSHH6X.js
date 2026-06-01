var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.provider`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.iterator;function p(e){return typeof e!=`object`||!e?null:(e=f&&e[f]||e[`@@iterator`],typeof e==`function`?e:null)}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function _(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`setState(...): takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function v(){}v.prototype=_.prototype;function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}var b=y.prototype=new v;b.constructor=y,h(b,_.prototype),b.isPureReactComponent=!0;var x=Array.isArray,S=Object.prototype.hasOwnProperty,C={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function ee(e,n,r){var i,a={},o=null,s=null;if(n!=null)for(i in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=``+n.key),n)S.call(n,i)&&!w.hasOwnProperty(i)&&(a[i]=n[i]);var c=arguments.length-2;if(c===1)a.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)a[i]===void 0&&(a[i]=c[i]);return{$$typeof:t,type:e,key:o,ref:s,props:a,_owner:C.current}}function te(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ne(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function oe(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0}}if(c)return c=e,o=o(c),e=a===``?`.`+ae(c,0):a,x(o)?(i=``,e!=null&&(i=e.replace(ie,`$&/`)+`/`),oe(o,r,i,``,function(e){return e})):o!=null&&(ne(o)&&(o=te(o,i+(!o.key||c&&c.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+e)),r.push(o)),1;if(c=0,a=a===``?`.`:a+`:`,x(e))for(var l=0;l<e.length;l++){s=e[l];var u=a+ae(s,l);c+=oe(s,r,i,u,o)}else if(u=p(e),typeof u==`function`)for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=a+ae(s,l++),c+=oe(s,r,i,u,o);else if(s===`object`)throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`);return c}function se(e,t,n){if(e==null)return e;var r=[],i=0;return oe(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ce(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var T={current:null},le={transition:null},ue={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:le,ReactCurrentOwner:C};function de(){throw Error(`act(...) is not supported in production builds of React.`)}e.Children={map:se,forEach:function(e,t,n){se(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return se(e,function(){t++}),t},toArray:function(e){return se(e,function(e){return e})||[]},only:function(e){if(!ne(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}},e.Component=_,e.Fragment=r,e.Profiler=a,e.PureComponent=y,e.StrictMode=i,e.Suspense=l,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,e.act=de,e.cloneElement=function(e,n,r){if(e==null)throw Error(`React.cloneElement(...): The argument must be a React element, but you passed `+e+`.`);var i=h({},e.props),a=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=C.current),n.key!==void 0&&(a=``+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)S.call(n,l)&&!w.hasOwnProperty(l)&&(i[l]=n[l]===void 0&&c!==void 0?c[l]:n[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:t,type:e.type,key:a,ref:o,props:i,_owner:s}},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:o,_context:e},e.Consumer=e},e.createElement=ee,e.createFactory=function(e){var t=ee.bind(null,e);return t.type=e,t},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ne,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ce}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=le.transition;le.transition={};try{e()}finally{le.transition=t}},e.unstable_act=de,e.useCallback=function(e,t){return T.current.useCallback(e,t)},e.useContext=function(e){return T.current.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e){return T.current.useDeferredValue(e)},e.useEffect=function(e,t){return T.current.useEffect(e,t)},e.useId=function(){return T.current.useId()},e.useImperativeHandle=function(e,t,n){return T.current.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},e.useMemo=function(e,t){return T.current.useMemo(e,t)},e.useReducer=function(e,t,n){return T.current.useReducer(e,t,n)},e.useRef=function(e){return T.current.useRef(e)},e.useState=function(e){return T.current.useState(e)},e.useSyncExternalStore=function(e,t,n){return T.current.useSyncExternalStore(e,t,n)},e.useTransition=function(){return T.current.useTransition()},e.version=`18.3.1`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=typeof setTimeout==`function`?setTimeout:null,_=typeof clearTimeout==`function`?clearTimeout:null,v=typeof setImmediate<`u`?setImmediate:null;typeof navigator<`u`&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function b(e){if(h=!1,y(e),!m)if(n(c)!==null)m=!0,se(x);else{var t=n(l);t!==null&&ce(b,t.startTime-e)}}function x(t,i){m=!1,h&&(h=!1,_(w),w=-1),p=!0;var a=f;try{for(y(i),d=n(c);d!==null&&(!(d.expirationTime>i)||t&&!ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=i);i=e.unstable_now(),typeof s==`function`?d.callback=s:d===n(c)&&r(c),y(i)}else r(c);d=n(c)}if(d!==null)var u=!0;else{var g=n(l);g!==null&&ce(b,g.startTime-i),u=!1}return u}finally{d=null,f=a,p=!1}}var S=!1,C=null,w=-1,ee=5,te=-1;function ne(){return!(e.unstable_now()-te<ee)}function re(){if(C!==null){var t=e.unstable_now();te=t;var n=!0;try{n=C(!0,t)}finally{n?ie():(S=!1,C=null)}}else S=!1}var ie;if(typeof v==`function`)ie=function(){v(re)};else if(typeof MessageChannel<`u`){var ae=new MessageChannel,oe=ae.port2;ae.port1.onmessage=re,ie=function(){oe.postMessage(null)}}else ie=function(){g(re,0)};function se(e){C=e,S||(S=!0,ie())}function ce(t,n){w=g(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,se(x))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):ee=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(_(w),w=-1):h=!0,ce(b,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,se(x))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u(),n=f();function r(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}var i=new Set,a={};function o(e,t){s(e,t),s(e+`Capture`,t)}function s(e,t){for(a[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),l=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function h(e){return l.call(m,e)?!0:l.call(p,e)?!1:d.test(e)?m[e]=!0:(p[e]=!0,!1)}function g(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case`function`:case`symbol`:return!0;case`boolean`:return r?!1:n===null?(e=e.toLowerCase().slice(0,5),e!==`data-`&&e!==`aria-`):!n.acceptsBooleans;default:return!1}}function _(e,t,n,r){if(t==null||g(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function v(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var y={};`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach(function(e){y[e]=new v(e,0,!1,e,null,!1,!1)}),[[`acceptCharset`,`accept-charset`],[`className`,`class`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`]].forEach(function(e){var t=e[0];y[t]=new v(t,1,!1,e[1],null,!1,!1)}),[`contentEditable`,`draggable`,`spellCheck`,`value`].forEach(function(e){y[e]=new v(e,2,!1,e.toLowerCase(),null,!1,!1)}),[`autoReverse`,`externalResourcesRequired`,`focusable`,`preserveAlpha`].forEach(function(e){y[e]=new v(e,2,!1,e,null,!1,!1)}),`allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach(function(e){y[e]=new v(e,3,!1,e.toLowerCase(),null,!1,!1)}),[`checked`,`multiple`,`muted`,`selected`].forEach(function(e){y[e]=new v(e,3,!0,e,null,!1,!1)}),[`capture`,`download`].forEach(function(e){y[e]=new v(e,4,!1,e,null,!1,!1)}),[`cols`,`rows`,`size`,`span`].forEach(function(e){y[e]=new v(e,6,!1,e,null,!1,!1)}),[`rowSpan`,`start`].forEach(function(e){y[e]=new v(e,5,!1,e.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function x(e){return e[1].toUpperCase()}`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,null,!1,!1)}),`xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/1999/xlink`,!1,!1)}),[`xml:base`,`xml:lang`,`xml:space`].forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/XML/1998/namespace`,!1,!1)}),[`tabIndex`,`crossOrigin`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!1,!1)}),y.xlinkHref=new v(`xlinkHref`,1,!1,`xlink:href`,`http://www.w3.org/1999/xlink`,!0,!1),[`src`,`href`,`action`,`formAction`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!0,!0)});function S(e,t,n,r){var i=y.hasOwnProperty(t)?y[t]:null;(i===null?r||!(2<t.length)||t[0]!==`o`&&t[0]!==`O`||t[1]!==`n`&&t[1]!==`N`:i.type!==0)&&(_(t,n,i,r)&&(n=null),r||i===null?h(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,``+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:``:n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&!0===n?``:``+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var C=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for(`react.element`),ee=Symbol.for(`react.portal`),te=Symbol.for(`react.fragment`),ne=Symbol.for(`react.strict_mode`),re=Symbol.for(`react.profiler`),ie=Symbol.for(`react.provider`),ae=Symbol.for(`react.context`),oe=Symbol.for(`react.forward_ref`),se=Symbol.for(`react.suspense`),ce=Symbol.for(`react.suspense_list`),T=Symbol.for(`react.memo`),le=Symbol.for(`react.lazy`),ue=Symbol.for(`react.offscreen`),de=Symbol.iterator;function fe(e){return typeof e!=`object`||!e?null:(e=de&&e[de]||e[`@@iterator`],typeof e==`function`?e:null)}var E=Object.assign,pe;function me(e){if(pe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);pe=t&&t[1]||``}return`
`+pe+e}var he=!1;function ge(e,t){if(!e||he)return``;he=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&typeof t.stack==`string`){for(var i=t.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var c=`
`+i[o].replace(` at new `,` at `);return e.displayName&&c.includes(`<anonymous>`)&&(c=c.replace(`<anonymous>`,e.displayName)),c}while(1<=o&&0<=s);break}}}finally{he=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:``)?me(e):``}function _e(e){switch(e.tag){case 5:return me(e.type);case 16:return me(`Lazy`);case 13:return me(`Suspense`);case 19:return me(`SuspenseList`);case 0:case 2:case 15:return e=ge(e.type,!1),e;case 11:return e=ge(e.type.render,!1),e;case 1:return e=ge(e.type,!0),e;default:return``}}function ve(e){if(e==null)return null;if(typeof e==`function`)return e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case te:return`Fragment`;case ee:return`Portal`;case re:return`Profiler`;case ne:return`StrictMode`;case se:return`Suspense`;case ce:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case ae:return(e.displayName||`Context`)+`.Consumer`;case ie:return(e._context.displayName||`Context`)+`.Provider`;case oe:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case T:return t=e.displayName||null,t===null?ve(e.type)||`Memo`:t;case le:t=e._payload,e=e._init;try{return ve(e(t))}catch{}}return null}function ye(e){var t=e.type;switch(e.tag){case 24:return`Cache`;case 9:return(t.displayName||`Context`)+`.Consumer`;case 10:return(t._context.displayName||`Context`)+`.Provider`;case 18:return`DehydratedFragment`;case 11:return e=t.render,e=e.displayName||e.name||``,t.displayName||(e===``?`ForwardRef`:`ForwardRef(`+e+`)`);case 7:return`Fragment`;case 5:return t;case 4:return`Portal`;case 3:return`Root`;case 6:return`Text`;case 16:return ve(t);case 8:return t===ne?`StrictMode`:`Mode`;case 22:return`Offscreen`;case 12:return`Profiler`;case 21:return`Scope`;case 13:return`Suspense`;case 19:return`SuspenseList`;case 25:return`TracingMarker`;case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t==`function`)return t.displayName||t.name||null;if(typeof t==`string`)return t}return null}function be(e){switch(typeof e){case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function xe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Se(e){var t=xe(e)?`checked`:`value`,n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=``+e[t];if(!e.hasOwnProperty(t)&&n!==void 0&&typeof n.get==`function`&&typeof n.set==`function`){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ce(e){e._valueTracker||=Se(e)}function we(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=xe(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Te(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Ee(e,t){var n=t.checked;return E({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function De(e,t){var n=t.defaultValue==null?``:t.defaultValue,r=t.checked==null?t.defaultChecked:t.checked;n=be(t.value==null?n:t.value),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type===`checkbox`||t.type===`radio`?t.checked!=null:t.value!=null}}function Oe(e,t){t=t.checked,t!=null&&S(e,`checked`,t,!1)}function ke(e,t){Oe(e,t);var n=be(t.value),r=t.type;if(n!=null)r===`number`?(n===0&&e.value===``||e.value!=n)&&(e.value=``+n):e.value!==``+n&&(e.value=``+n);else if(r===`submit`||r===`reset`){e.removeAttribute(`value`);return}t.hasOwnProperty(`value`)?je(e,t.type,n):t.hasOwnProperty(`defaultValue`)&&je(e,t.type,be(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ae(e,t,n){if(t.hasOwnProperty(`value`)||t.hasOwnProperty(`defaultValue`)){var r=t.type;if(!(r!==`submit`&&r!==`reset`||t.value!==void 0&&t.value!==null))return;t=``+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==``&&(e.name=``),e.defaultChecked=!!e._wrapperState.initialChecked,n!==``&&(e.name=n)}function je(e,t,n){(t!==`number`||Te(e.ownerDocument)!==e)&&(n==null?e.defaultValue=``+e._wrapperState.initialValue:e.defaultValue!==``+n&&(e.defaultValue=``+n))}var Me=Array.isArray;function Ne(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+be(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Pe(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return E({},t,{value:void 0,defaultValue:void 0,children:``+e._wrapperState.initialValue})}function Fe(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(r(92));if(Me(n)){if(1<n.length)throw Error(r(93));n=n[0]}t=n}t??=``,n=t}e._wrapperState={initialValue:be(n)}}function Ie(e,t){var n=be(t.value),r=be(t.defaultValue);n!=null&&(n=``+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=``+r)}function Le(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==``&&t!==null&&(e.value=t)}function Re(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`math`:return`http://www.w3.org/1998/Math/MathML`;default:return`http://www.w3.org/1999/xhtml`}}function ze(e,t){return e==null||e===`http://www.w3.org/1999/xhtml`?Re(t):e===`http://www.w3.org/2000/svg`&&t===`foreignObject`?`http://www.w3.org/1999/xhtml`:e}var Be,Ve=function(e){return typeof MSApp<`u`&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==`http://www.w3.org/2000/svg`||`innerHTML`in e)e.innerHTML=t;else{for(Be||=document.createElement(`div`),Be.innerHTML=`<svg>`+t.valueOf().toString()+`</svg>`,t=Be.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function D(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var He={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ue=[`Webkit`,`ms`,`Moz`,`O`];Object.keys(He).forEach(function(e){Ue.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),He[t]=He[e]})});function We(e,t,n){return t==null||typeof t==`boolean`||t===``?``:n||typeof t!=`number`||t===0||He.hasOwnProperty(e)&&He[e]?(``+t).trim():t+`px`}function Ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=n.indexOf(`--`)===0,i=We(n,t[n],r);n===`float`&&(n=`cssFloat`),r?e.setProperty(n,i):e[n]=i}}var Ke=E({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qe(e,t){if(t){if(Ke[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!=`object`||!(`__html`in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!=`object`)throw Error(r(62))}}function Je(e,t){if(e.indexOf(`-`)===-1)return typeof t.is==`string`;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Ye=null;function Xe(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ze=null,Qe=null,O=null;function $e(e){if(e=qi(e)){if(typeof Ze!=`function`)throw Error(r(280));var t=e.stateNode;t&&(t=Yi(t),Ze(e.stateNode,e.type,t))}}function et(e){Qe?O?O.push(e):O=[e]:Qe=e}function tt(){if(Qe){var e=Qe,t=O;if(O=Qe=null,$e(e),t)for(e=0;e<t.length;e++)$e(t[e])}}function nt(e,t){return e(t)}function rt(){}var it=!1;function at(e,t,n){if(it)return e(t,n);it=!0;try{return nt(e,t,n)}finally{it=!1,(Qe!==null||O!==null)&&(rt(),tt())}}function ot(e,t){var n=e.stateNode;if(n===null)return null;var i=Yi(n);if(i===null)return null;n=i[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(i=!i.disabled)||(e=e.type,i=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!i;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(r(231,t,typeof n));return n}var st=!1;if(c)try{var ct={};Object.defineProperty(ct,"passive",{get:function(){st=!0}}),window.addEventListener(`test`,ct,ct),window.removeEventListener(`test`,ct,ct)}catch{st=!1}function lt(e,t,n,r,i,a,o,s,c){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(e){this.onError(e)}}var ut=!1,k=null,dt=!1,ft=null,pt={onError:function(e){ut=!0,k=e}};function mt(e,t,n,r,i,a,o,s,c){ut=!1,k=null,lt.apply(pt,arguments)}function ht(e,t,n,i,a,o,s,c,l){if(mt.apply(this,arguments),ut){if(ut){var u=k;ut=!1,k=null}else throw Error(r(198));dt||(dt=!0,ft=u)}}function gt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _t(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function vt(e){if(gt(e)!==e)throw Error(r(188))}function yt(e){var t=e.alternate;if(!t){if(t=gt(e),t===null)throw Error(r(188));return t===e?e:null}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return vt(a),e;if(o===i)return vt(a),t;o=o.sibling}throw Error(r(188))}if(n.return!==i.return)n=a,i=o;else{for(var s=!1,c=a.child;c;){if(c===n){s=!0,n=a,i=o;break}if(c===i){s=!0,i=a,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,i=a;break}if(c===i){s=!0,i=o,n=a;break}c=c.sibling}if(!s)throw Error(r(189))}}if(n.alternate!==i)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:t}function bt(e){return e=yt(e),e===null?null:xt(e)}function xt(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=xt(e);if(t!==null)return t;e=e.sibling}return null}var St=n.unstable_scheduleCallback,Ct=n.unstable_cancelCallback,wt=n.unstable_shouldYield,Tt=n.unstable_requestPaint,A=n.unstable_now,Et=n.unstable_getCurrentPriorityLevel,Dt=n.unstable_ImmediatePriority,Ot=n.unstable_UserBlockingPriority,kt=n.unstable_NormalPriority,At=n.unstable_LowPriority,jt=n.unstable_IdlePriority,Mt=null,j=null;function Nt(e){if(j&&typeof j.onCommitFiberRoot==`function`)try{j.onCommitFiberRoot(Mt,e,void 0,(e.current.flags&128)==128)}catch{}}var Pt=Math.clz32?Math.clz32:Lt,Ft=Math.log,It=Math.LN2;function Lt(e){return e>>>=0,e===0?32:31-(Ft(e)/It|0)|0}var Rt=64,zt=4194304;function Bt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Vt(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s===0?(a&=o,a!==0&&(r=Bt(a))):r=Bt(s)}else o=n&~i,o===0?a!==0&&(r=Bt(a)):r=Bt(o);if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===16&&a&4194240))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Pt(t),i=1<<n,r|=e[n],t&=~i;return r}function Ht(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ut(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Pt(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Ht(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}}function Wt(e){return e=e.pendingLanes&-1073741825,e===0?e&1073741824?1073741824:0:e}function Gt(){var e=Rt;return Rt<<=1,!(Rt&4194240)&&(Rt=64),e}function Kt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qt(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Pt(t),e[t]=n}function Jt(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Pt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Yt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Pt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var M=0;function Xt(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Zt,Qt,$t,en,tn,nn=!1,rn=[],an=null,on=null,sn=null,cn=new Map,ln=new Map,un=[],dn=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(` `);function fn(e,t){switch(e){case`focusin`:case`focusout`:an=null;break;case`dragenter`:case`dragleave`:on=null;break;case`mouseover`:case`mouseout`:sn=null;break;case`pointerover`:case`pointerout`:cn.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:ln.delete(t.pointerId)}}function pn(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=qi(t),t!==null&&Qt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function mn(e,t,n,r,i){switch(t){case`focusin`:return an=pn(an,e,t,n,r,i),!0;case`dragenter`:return on=pn(on,e,t,n,r,i),!0;case`mouseover`:return sn=pn(sn,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return cn.set(a,pn(cn.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,ln.set(a,pn(ln.get(a)||null,e,t,n,r,i)),!0}return!1}function hn(e){var t=Ki(e.target);if(t!==null){var n=gt(t);if(n!==null){if(t=n.tag,t===13){if(t=_t(n),t!==null){e.blockedOn=t,tn(e.priority,function(){$t(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Dn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ye=r,n.target.dispatchEvent(r),Ye=null}else return t=qi(n),t!==null&&Qt(t),e.blockedOn=n,!1;t.shift()}return!0}function _n(e,t,n){gn(e)&&n.delete(t)}function vn(){nn=!1,an!==null&&gn(an)&&(an=null),on!==null&&gn(on)&&(on=null),sn!==null&&gn(sn)&&(sn=null),cn.forEach(_n),ln.forEach(_n)}function yn(e,t){e.blockedOn===t&&(e.blockedOn=null,nn||(nn=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,vn)))}function bn(e){function t(t){return yn(t,e)}if(0<rn.length){yn(rn[0],e);for(var n=1;n<rn.length;n++){var r=rn[n];r.blockedOn===e&&(r.blockedOn=null)}}for(an!==null&&yn(an,e),on!==null&&yn(on,e),sn!==null&&yn(sn,e),cn.forEach(t),ln.forEach(t),n=0;n<un.length;n++)r=un[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<un.length&&(n=un[0],n.blockedOn===null);)hn(n),n.blockedOn===null&&un.shift()}var xn=C.ReactCurrentBatchConfig,Sn=!0;function Cn(e,t,n,r){var i=M,a=xn.transition;xn.transition=null;try{M=1,Tn(e,t,n,r)}finally{M=i,xn.transition=a}}function wn(e,t,n,r){var i=M,a=xn.transition;xn.transition=null;try{M=4,Tn(e,t,n,r)}finally{M=i,xn.transition=a}}function Tn(e,t,n,r){if(Sn){var i=Dn(e,t,n,r);if(i===null)vi(e,t,r,En,n),fn(e,r);else if(mn(i,e,t,n,r))r.stopPropagation();else if(fn(e,r),t&4&&-1<dn.indexOf(e)){for(;i!==null;){var a=qi(i);if(a!==null&&Zt(a),a=Dn(e,t,n,r),a===null&&vi(e,t,r,En,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else vi(e,t,r,null,n)}}var En=null;function Dn(e,t,n,r){if(En=null,e=Xe(r),e=Ki(e),e!==null)if(t=gt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_t(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return En=e,null}function On(e){switch(e){case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 1;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`toggle`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 4;case`message`:switch(Et()){case Dt:return 1;case Ot:return 4;case kt:case At:return 16;case jt:return 536870912;default:return 16}default:return 16}}var kn=null,An=null,jn=null;function Mn(){if(jn)return jn;var e,t=An,n=t.length,r,i=`value`in kn?kn.value:kn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return jn=i.slice(e,1<r?1-r:void 0)}function Nn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Pn(){return!0}function Fn(){return!1}function N(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Pn:Fn,this.isPropagationStopped=Fn,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Pn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Pn)},persist:function(){},isPersistent:Pn}),t}var In={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ln=N(In),Rn=E({},In,{view:0,detail:0}),zn=N(Rn),Bn,Vn,Hn,Un=E({},Rn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:er,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Hn&&(Hn&&e.type===`mousemove`?(Bn=e.screenX-Hn.screenX,Vn=e.screenY-Hn.screenY):Vn=Bn=0,Hn=e),Bn)},movementY:function(e){return`movementY`in e?e.movementY:Vn}}),Wn=N(Un),Gn=N(E({},Un,{dataTransfer:0})),Kn=N(E({},Rn,{relatedTarget:0})),qn=N(E({},In,{animationName:0,elapsedTime:0,pseudoElement:0})),Jn=N(E({},In,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Yn=N(E({},In,{data:0})),Xn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Zn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Qn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function $n(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qn[e])?!!t[e]:!1}function er(){return $n}var tr=N(E({},Rn,{key:function(e){if(e.key){var t=Xn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Nn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Zn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:er,charCode:function(e){return e.type===`keypress`?Nn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Nn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),nr=N(E({},Un,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),rr=N(E({},Rn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:er})),ir=N(E({},In,{propertyName:0,elapsedTime:0,pseudoElement:0})),ar=N(E({},Un,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),or=[9,13,27,32],sr=c&&`CompositionEvent`in window,cr=null;c&&`documentMode`in document&&(cr=document.documentMode);var lr=c&&`TextEvent`in window&&!cr,ur=c&&(!sr||cr&&8<cr&&11>=cr),dr=` `,fr=!1;function pr(e,t){switch(e){case`keyup`:return or.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function mr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var hr=!1;function gr(e,t){switch(e){case`compositionend`:return mr(t);case`keypress`:return t.which===32?(fr=!0,dr):null;case`textInput`:return e=t.data,e===dr&&fr?null:e;default:return null}}function _r(e,t){if(hr)return e===`compositionend`||!sr&&pr(e,t)?(e=Mn(),jn=An=kn=null,hr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ur&&t.locale!==`ko`?null:t.data;default:return null}}var vr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!vr[e.type]:t===`textarea`}function br(e,t,n,r){et(r),t=bi(t,`onChange`),0<t.length&&(n=new Ln(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var xr=null,Sr=null;function Cr(e){pi(e,0)}function wr(e){if(we(Ji(e)))return e}function Tr(e,t){if(e===`change`)return t}var Er=!1;if(c){var Dr;if(c){var Or=`oninput`in document;if(!Or){var kr=document.createElement(`div`);kr.setAttribute(`oninput`,`return;`),Or=typeof kr.oninput==`function`}Dr=Or}else Dr=!1;Er=Dr&&(!document.documentMode||9<document.documentMode)}function Ar(){xr&&(xr.detachEvent(`onpropertychange`,jr),Sr=xr=null)}function jr(e){if(e.propertyName===`value`&&wr(Sr)){var t=[];br(t,Sr,e,Xe(e)),at(Cr,t)}}function Mr(e,t,n){e===`focusin`?(Ar(),xr=t,Sr=n,xr.attachEvent(`onpropertychange`,jr)):e===`focusout`&&Ar()}function Nr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return wr(Sr)}function Pr(e,t){if(e===`click`)return wr(t)}function Fr(e,t){if(e===`input`||e===`change`)return wr(t)}function Ir(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Lr=typeof Object.is==`function`?Object.is:Ir;function Rr(e,t){if(Lr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!l.call(t,i)||!Lr(e[i],t[i]))return!1}return!0}function zr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Br(e,t){var n=zr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=zr(n)}}function Vr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hr(){for(var e=window,t=Te();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Te(e.document)}return t}function Ur(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}function Wr(e){var t=Hr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Vr(n.ownerDocument.documentElement,n)){if(r!==null&&Ur(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),`selectionStart`in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Br(n,a);var o=Br(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus==`function`&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gr=c&&`documentMode`in document&&11>=document.documentMode,Kr=null,qr=null,Jr=null,Yr=!1;function Xr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yr||Kr==null||Kr!==Te(r)||(r=Kr,`selectionStart`in r&&Ur(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jr&&Rr(Jr,r)||(Jr=r,r=bi(qr,`onSelect`),0<r.length&&(t=new Ln(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Kr)))}function P(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Zr={animationend:P(`Animation`,`AnimationEnd`),animationiteration:P(`Animation`,`AnimationIteration`),animationstart:P(`Animation`,`AnimationStart`),transitionend:P(`Transition`,`TransitionEnd`)},Qr={},$r={};c&&($r=document.createElement(`div`).style,`AnimationEvent`in window||(delete Zr.animationend.animation,delete Zr.animationiteration.animation,delete Zr.animationstart.animation),`TransitionEvent`in window||delete Zr.transitionend.transition);function ei(e){if(Qr[e])return Qr[e];if(!Zr[e])return e;var t=Zr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $r)return Qr[e]=t[n];return e}var ti=ei(`animationend`),ni=ei(`animationiteration`),ri=ei(`animationstart`),ii=ei(`transitionend`),ai=new Map,oi=`abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);function si(e,t){ai.set(e,t),o(t,[e])}for(var ci=0;ci<oi.length;ci++){var li=oi[ci];si(li.toLowerCase(),`on`+(li[0].toUpperCase()+li.slice(1)))}si(ti,`onAnimationEnd`),si(ni,`onAnimationIteration`),si(ri,`onAnimationStart`),si(`dblclick`,`onDoubleClick`),si(`focusin`,`onFocus`),si(`focusout`,`onBlur`),si(ii,`onTransitionEnd`),s(`onMouseEnter`,[`mouseout`,`mouseover`]),s(`onMouseLeave`,[`mouseout`,`mouseover`]),s(`onPointerEnter`,[`pointerout`,`pointerover`]),s(`onPointerLeave`,[`pointerout`,`pointerover`]),o(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),o(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),o(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),o(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var ui=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),di=new Set(`cancel close invalid load scroll toggle`.split(` `).concat(ui));function fi(e,t,n){var r=e.type||`unknown-event`;e.currentTarget=n,ht(r,t,void 0,e),e.currentTarget=null}function pi(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;fi(i,s,l),a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;fi(i,s,l),a=c}}}if(dt)throw e=ft,dt=!1,ft=null,e}function F(e,t){var n=t[Ui];n===void 0&&(n=t[Ui]=new Set);var r=e+`__bubble`;n.has(r)||(_i(t,e,2,!1),n.add(r))}function mi(e,t,n){var r=0;t&&(r|=4),_i(n,e,r,t)}var hi=`_reactListening`+Math.random().toString(36).slice(2);function gi(e){if(!e[hi]){e[hi]=!0,i.forEach(function(t){t!==`selectionchange`&&(di.has(t)||mi(t,!1,e),mi(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[hi]||(t[hi]=!0,mi(`selectionchange`,!1,t))}}function _i(e,t,n,r){switch(On(t)){case 1:var i=Cn;break;case 4:i=wn;break;default:i=Tn}n=i.bind(null,t,n,e),i=void 0,!st||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function vi(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Ki(s),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue a}s=s.parentNode}}r=r.return}at(function(){var r=a,i=Xe(n),o=[];a:{var s=ai.get(e);if(s!==void 0){var c=Ln,l=e;switch(e){case`keypress`:if(Nn(n)===0)break a;case`keydown`:case`keyup`:c=tr;break;case`focusin`:l=`focus`,c=Kn;break;case`focusout`:l=`blur`,c=Kn;break;case`beforeblur`:case`afterblur`:c=Kn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Wn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Gn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=rr;break;case ti:case ni:case ri:c=qn;break;case ii:c=ir;break;case`scroll`:c=zn;break;case`wheel`:c=ar;break;case`copy`:case`cut`:case`paste`:c=Jn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=nr}var u=(t&4)!=0,d=!u&&e===`scroll`,f=u?s===null?null:s+`Capture`:s;u=[];for(var p=r,m;p!==null;){m=p;var h=m.stateNode;if(m.tag===5&&h!==null&&(m=h,f!==null&&(h=ot(p,f),h!=null&&u.push(yi(p,h,m)))),d)break;p=p.return}0<u.length&&(s=new c(s,l,null,n,i),o.push({event:s,listeners:u}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==Ye&&(l=n.relatedTarget||n.fromElement)&&(Ki(l)||l[Hi]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Ki(l):null,l!==null&&(d=gt(l),l!==d||l.tag!==5&&l.tag!==6)&&(l=null)):(c=null,l=r),c!==l)){if(u=Wn,h=`onMouseLeave`,f=`onMouseEnter`,p=`mouse`,(e===`pointerout`||e===`pointerover`)&&(u=nr,h=`onPointerLeave`,f=`onPointerEnter`,p=`pointer`),d=c==null?s:Ji(c),m=l==null?s:Ji(l),s=new u(h,p+`leave`,c,n,i),s.target=d,s.relatedTarget=m,h=null,Ki(i)===r&&(u=new u(f,p+`enter`,l,n,i),u.target=m,u.relatedTarget=d,h=u),d=h,c&&l)b:{for(u=c,f=l,p=0,m=u;m;m=xi(m))p++;for(m=0,h=f;h;h=xi(h))m++;for(;0<p-m;)u=xi(u),p--;for(;0<m-p;)f=xi(f),m--;for(;p--;){if(u===f||f!==null&&u===f.alternate)break b;u=xi(u),f=xi(f)}u=null}else u=null;c!==null&&Si(o,s,c,u,!1),l!==null&&d!==null&&Si(o,d,l,u,!0)}}a:{if(s=r?Ji(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var g=Tr;else if(yr(s))if(Er)g=Fr;else{g=Nr;var _=Mr}else (c=s.nodeName)&&c.toLowerCase()===`input`&&(s.type===`checkbox`||s.type===`radio`)&&(g=Pr);if(g&&=g(e,r)){br(o,g,n,i);break a}_&&_(e,s,r),e===`focusout`&&(_=s._wrapperState)&&_.controlled&&s.type===`number`&&je(s,`number`,s.value)}switch(_=r?Ji(r):window,e){case`focusin`:(yr(_)||_.contentEditable===`true`)&&(Kr=_,qr=r,Jr=null);break;case`focusout`:Jr=qr=Kr=null;break;case`mousedown`:Yr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Yr=!1,Xr(o,n,i);break;case`selectionchange`:if(Gr)break;case`keydown`:case`keyup`:Xr(o,n,i)}var v;if(sr)b:{switch(e){case`compositionstart`:var y=`onCompositionStart`;break b;case`compositionend`:y=`onCompositionEnd`;break b;case`compositionupdate`:y=`onCompositionUpdate`;break b}y=void 0}else hr?pr(e,n)&&(y=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(y=`onCompositionStart`);y&&(ur&&n.locale!==`ko`&&(hr||y!==`onCompositionStart`?y===`onCompositionEnd`&&hr&&(v=Mn()):(kn=i,An=`value`in kn?kn.value:kn.textContent,hr=!0)),_=bi(r,y),0<_.length&&(y=new Yn(y,e,null,n,i),o.push({event:y,listeners:_}),v?y.data=v:(v=mr(n),v!==null&&(y.data=v)))),(v=lr?gr(e,n):_r(e,n))&&(r=bi(r,`onBeforeInput`),0<r.length&&(i=new Yn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:i,listeners:r}),i.data=v))}pi(o,t)})}function yi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function bi(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=ot(e,n),a!=null&&r.unshift(yi(e,a,i)),a=ot(e,t),a!=null&&r.push(yi(e,a,i))),e=e.return}return r}function xi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Si(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&l!==null&&(s=l,i?(c=ot(n,a),c!=null&&o.unshift(yi(n,c,s))):i||(c=ot(n,a),c!=null&&o.push(yi(n,c,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ci=/\r\n?/g,wi=/\u0000|\uFFFD/g;function Ti(e){return(typeof e==`string`?e:``+e).replace(Ci,`
`).replace(wi,``)}function Ei(e,t,n){if(t=Ti(t),Ti(e)!==t&&n)throw Error(r(425))}function Di(){}var Oi=null,ki=null;function Ai(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ji=typeof setTimeout==`function`?setTimeout:void 0,Mi=typeof clearTimeout==`function`?clearTimeout:void 0,Ni=typeof Promise==`function`?Promise:void 0,Pi=typeof queueMicrotask==`function`?queueMicrotask:Ni===void 0?ji:function(e){return Ni.resolve(null).then(e).catch(Fi)};function Fi(e){setTimeout(function(){throw e})}function Ii(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`){if(r===0){e.removeChild(i),bn(t);return}r--}else n!==`$`&&n!==`$?`&&n!==`$!`||r++;n=i}while(n);bn(t)}function Li(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`)break;if(t===`/$`)return null}}return e}function Ri(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`){if(t===0)return e;t--}else n===`/$`&&t++}e=e.previousSibling}return null}var zi=Math.random().toString(36).slice(2),Bi=`__reactFiber$`+zi,Vi=`__reactProps$`+zi,Hi=`__reactContainer$`+zi,Ui=`__reactEvents$`+zi,Wi=`__reactListeners$`+zi,Gi=`__reactHandles$`+zi;function Ki(e){var t=e[Bi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Hi]||n[Bi]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ri(e);e!==null;){if(n=e[Bi])return n;e=Ri(e)}return t}e=n,n=e.parentNode}return null}function qi(e){return e=e[Bi]||e[Hi],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ji(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function Yi(e){return e[Vi]||null}var Xi=[],Zi=-1;function Qi(e){return{current:e}}function I(e){0>Zi||(e.current=Xi[Zi],Xi[Zi]=null,Zi--)}function L(e,t){Zi++,Xi[Zi]=e.current,e.current=t}var $i={},R=Qi($i),ea=Qi(!1),ta=$i;function na(e,t){var n=e.type.contextTypes;if(!n)return $i;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ra(e){return e=e.childContextTypes,e!=null}function ia(){I(ea),I(R)}function aa(e,t,n){if(R.current!==$i)throw Error(r(168));L(R,t),L(ea,n)}function oa(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!=`function`)return n;for(var a in i=i.getChildContext(),i)if(!(a in t))throw Error(r(108,ye(e)||`Unknown`,a));return E({},n,i)}function sa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$i,ta=R.current,L(R,e),L(ea,ea.current),!0}function ca(e,t,n){var i=e.stateNode;if(!i)throw Error(r(169));n?(e=oa(e,t,ta),i.__reactInternalMemoizedMergedChildContext=e,I(ea),I(R),L(R,e)):I(ea),L(ea,n)}var la=null,ua=!1,da=!1;function fa(e){la===null?la=[e]:la.push(e)}function pa(e){ua=!0,fa(e)}function ma(){if(!da&&la!==null){da=!0;var e=0,t=M;try{var n=la;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}la=null,ua=!1}catch(t){throw la!==null&&(la=la.slice(e+1)),St(Dt,ma),t}finally{M=t,da=!1}}return null}var ha=[],ga=0,_a=null,va=0,ya=[],ba=0,xa=null,Sa=1,Ca=``;function wa(e,t){ha[ga++]=va,ha[ga++]=_a,_a=e,va=t}function Ta(e,t,n){ya[ba++]=Sa,ya[ba++]=Ca,ya[ba++]=xa,xa=e;var r=Sa;e=Ca;var i=32-Pt(r)-1;r&=~(1<<i),n+=1;var a=32-Pt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Sa=1<<32-Pt(t)+i|n<<i|r,Ca=a+e}else Sa=1<<a|n<<i|r,Ca=e}function Ea(e){e.return!==null&&(wa(e,1),Ta(e,1,0))}function Da(e){for(;e===_a;)_a=ha[--ga],ha[ga]=null,va=ha[--ga],ha[ga]=null;for(;e===xa;)xa=ya[--ba],ya[ba]=null,Ca=ya[--ba],ya[ba]=null,Sa=ya[--ba],ya[ba]=null}var Oa=null,ka=null,z=!1,Aa=null;function ja(e,t){var n=Kl(5,null,null,0);n.elementType=`DELETED`,n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ma(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t===null?!1:(e.stateNode=t,Oa=e,ka=Li(t.firstChild),!0);case 6:return t=e.pendingProps===``||t.nodeType!==3?null:t,t===null?!1:(e.stateNode=t,Oa=e,ka=null,!0);case 13:return t=t.nodeType===8?t:null,t===null?!1:(n=xa===null?null:{id:Sa,overflow:Ca},e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Kl(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Oa=e,ka=null,!0);default:return!1}}function Na(e){return(e.mode&1)!=0&&(e.flags&128)==0}function Pa(e){if(z){var t=ka;if(t){var n=t;if(!Ma(e,t)){if(Na(e))throw Error(r(418));t=Li(n.nextSibling);var i=Oa;t&&Ma(e,t)?ja(i,n):(e.flags=e.flags&-4097|2,z=!1,Oa=e)}}else{if(Na(e))throw Error(r(418));e.flags=e.flags&-4097|2,z=!1,Oa=e}}}function Fa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Oa=e}function Ia(e){if(e!==Oa)return!1;if(!z)return Fa(e),z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!==`head`&&t!==`body`&&!Ai(e.type,e.memoizedProps)),t&&=ka){if(Na(e))throw La(),Error(r(418));for(;t;)ja(e,t),t=Li(t.nextSibling)}if(Fa(e),e.tag===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(r(317));a:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`){if(t===0){ka=Li(e.nextSibling);break a}t--}else n!==`$`&&n!==`$!`&&n!==`$?`||t++}e=e.nextSibling}ka=null}}else ka=Oa?Li(e.stateNode.nextSibling):null;return!0}function La(){for(var e=ka;e;)e=Li(e.nextSibling)}function Ra(){ka=Oa=null,z=!1}function za(e){Aa===null?Aa=[e]:Aa.push(e)}var Ba=C.ReactCurrentBatchConfig;function Va(e,t,n){if(e=n.ref,e!==null&&typeof e!=`function`&&typeof e!=`object`){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(r(309));var i=n.stateNode}if(!i)throw Error(r(147,e));var a=i,o=``+e;return t!==null&&t.ref!==null&&typeof t.ref==`function`&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;e===null?delete t[o]:t[o]=e},t._stringRef=o,t)}if(typeof e!=`string`)throw Error(r(284));if(!n._owner)throw Error(r(290,e))}return e}function Ha(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e))}function Ua(e){var t=e._init;return t(e._payload)}function Wa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function i(e,t){for(e=new Map;t!==null;)t.key===null?e.set(t.index,t):e.set(t.key,t),t=t.sibling;return e}function a(e,t){return e=Yl(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=2,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=2),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=$l(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===te?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===le&&Ua(i)===t.type)?(r=a(t,n.props),r.ref=Va(e,t,n),r.return=e,r):(r=Xl(n.type,n.key,n.props,null,e.mode,r),r.ref=Va(e,t,n),r.return=e,r)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=eu(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Zl(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`)return t=$l(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case w:return n=Xl(t.type,t.key,t.props,null,e.mode,n),n.ref=Va(e,null,t),n.return=e,n;case ee:return t=eu(t,e.mode,n),t.return=e,t;case le:var r=t._init;return f(e,r(t._payload),n)}if(Me(t)||fe(t))return t=Zl(t,e.mode,n,null),t.return=e,t;Ha(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case w:return n.key===i?l(e,t,n,r):null;case ee:return n.key===i?u(e,t,n,r):null;case le:return i=n._init,p(e,t,i(n._payload),r)}if(Me(n)||fe(n))return i===null?d(e,t,n,r,null):null;Ha(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case w:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case ee:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case le:var a=r._init;return m(e,t,n,a(r._payload),i)}if(Me(r)||fe(r))return e=e.get(n)||null,d(t,e,r,i,null);Ha(t,r)}return null}function h(r,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(r,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(r,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(r,d),z&&wa(r,h),l;if(d===null){for(;h<s.length;h++)d=f(r,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return z&&wa(r,h),l}for(d=i(r,d);h<s.length;h++)g=m(d,r,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(r,e)}),z&&wa(r,h),l}function g(a,s,c,l){var u=fe(c);if(typeof u!=`function`)throw Error(r(150));if(c=u.call(c),c==null)throw Error(r(151));for(var d=u=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),z&&wa(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return z&&wa(a,g),u}for(h=i(a,h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),z&&wa(a,g),u}function _(e,r,i,o){if(typeof i==`object`&&i&&i.type===te&&i.key===null&&(i=i.props.children),typeof i==`object`&&i){switch(i.$$typeof){case w:a:{for(var c=i.key,l=r;l!==null;){if(l.key===c){if(c=i.type,c===te){if(l.tag===7){n(e,l.sibling),r=a(l,i.props.children),r.return=e,e=r;break a}}else if(l.elementType===c||typeof c==`object`&&c&&c.$$typeof===le&&Ua(c)===l.type){n(e,l.sibling),r=a(l,i.props),r.ref=Va(e,l,i),r.return=e,e=r;break a}n(e,l);break}else t(e,l);l=l.sibling}i.type===te?(r=Zl(i.props.children,e.mode,o,i.key),r.return=e,e=r):(o=Xl(i.type,i.key,i.props,null,e.mode,o),o.ref=Va(e,r,i),o.return=e,e=o)}return s(e);case ee:a:{for(l=i.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===i.containerInfo&&r.stateNode.implementation===i.implementation){n(e,r.sibling),r=a(r,i.children||[]),r.return=e,e=r;break a}else{n(e,r);break}else t(e,r);r=r.sibling}r=eu(i,e.mode,o),r.return=e,e=r}return s(e);case le:return l=i._init,_(e,r,l(i._payload),o)}if(Me(i))return h(e,r,i,o);if(fe(i))return g(e,r,i,o);Ha(e,i)}return typeof i==`string`&&i!==``||typeof i==`number`?(i=``+i,r!==null&&r.tag===6?(n(e,r.sibling),r=a(r,i),r.return=e,e=r):(n(e,r),r=$l(i,e.mode,o),r.return=e,e=r),s(e)):n(e,r)}return _}var Ga=Wa(!0),Ka=Wa(!1),qa=Qi(null),Ja=null,Ya=null,Xa=null;function Za(){Xa=Ya=Ja=null}function Qa(e){var t=qa.current;I(qa),e._currentValue=t}function $a(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function eo(e,t){Ja=e,Xa=Ya=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(zs=!0),e.firstContext=null)}function to(e){var t=e._currentValue;if(Xa!==e)if(e={context:e,memoizedValue:t,next:null},Ya===null){if(Ja===null)throw Error(r(308));Ya=e,Ja.dependencies={lanes:0,firstContext:e}}else Ya=Ya.next=e;return t}var no=null;function ro(e){no===null?no=[e]:no.push(e)}function io(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ro(t)):(n.next=i.next,i.next=n),t.interleaved=n,ao(e,r)}function ao(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var oo=!1;function so(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function co(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function lo(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function uo(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ao(e,n)}return i=r.interleaved,i===null?(t.next=t,ro(r)):(t.next=i.next,i.next=t),r.interleaved=t,ao(e,n)}function fo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194240)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yt(e,n)}}function po(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function mo(e,t,n,r){var i=e.updateQueue;oo=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane,p=s.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});a:{var m=e,h=s;switch(f=t,p=n,h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(p,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(p,d,f):m,f==null)break a;d=E({},d,f);break a;case 2:oo=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Yc|=o,e.lanes=o,e.memoizedState=d}}function ho(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(a!==null){if(i.callback=null,i=n,typeof a!=`function`)throw Error(r(191,a));a.call(i)}}}var go={},_o=Qi(go),vo=Qi(go),yo=Qi(go);function bo(e){if(e===go)throw Error(r(174));return e}function xo(e,t){switch(L(yo,t),L(vo,e),L(_o,go),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ze(null,``);break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ze(t,e)}I(_o),L(_o,t)}function So(){I(_o),I(vo),I(yo)}function Co(e){bo(yo.current);var t=bo(_o.current),n=ze(t,e.type);t!==n&&(L(vo,e),L(_o,n))}function wo(e){vo.current===e&&(I(_o),I(vo))}var B=Qi(0);function To(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===`$?`||n.data===`$!`))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Eo=[];function Do(){for(var e=0;e<Eo.length;e++)Eo[e]._workInProgressVersionPrimary=null;Eo.length=0}var Oo=C.ReactCurrentDispatcher,ko=C.ReactCurrentBatchConfig,Ao=0,V=null,H=null,U=null,jo=!1,Mo=!1,No=0,Po=0;function W(){throw Error(r(321))}function Fo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Lr(e[n],t[n]))return!1;return!0}function Io(e,t,n,i,a,o){if(Ao=o,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Oo.current=e===null||e.memoizedState===null?ys:bs,e=n(i,a),Mo){o=0;do{if(Mo=!1,No=0,25<=o)throw Error(r(301));o+=1,U=H=null,t.updateQueue=null,Oo.current=xs,e=n(i,a)}while(Mo)}if(Oo.current=vs,t=H!==null&&H.next!==null,Ao=0,U=H=V=null,jo=!1,t)throw Error(r(300));return e}function Lo(){var e=No!==0;return No=0,e}function Ro(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return U===null?V.memoizedState=U=e:U=U.next=e,U}function zo(){if(H===null){var e=V.alternate;e=e===null?null:e.memoizedState}else e=H.next;var t=U===null?V.memoizedState:U.next;if(t!==null)U=t,H=e;else{if(e===null)throw Error(r(310));H=e,e={memoizedState:H.memoizedState,baseState:H.baseState,baseQueue:H.baseQueue,queue:H.queue,next:null},U===null?V.memoizedState=U=e:U=U.next=e}return U}function Bo(e,t){return typeof t==`function`?t(e):t}function Vo(e){var t=zo(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=H,a=i.baseQueue,o=n.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}i.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,i=i.baseState;var c=s=null,l=null,u=o;do{var d=u.lane;if((Ao&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(c=l=f,s=i):l=l.next=f,V.lanes|=d,Yc|=d}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=c,Lr(i,t.memoizedState)||(zs=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=l,n.lastRenderedState=i}if(e=n.interleaved,e!==null){a=e;do o=a.lane,V.lanes|=o,Yc|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ho(e){var t=zo(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Lr(o,t.memoizedState)||(zs=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function Uo(){}function Wo(e,t){var n=V,i=zo(),a=t(),o=!Lr(i.memoizedState,a);if(o&&(i.memoizedState=a,zs=!0),i=i.queue,ns(qo.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||U!==null&&U.memoizedState.tag&1){if(n.flags|=2048,Zo(9,Ko.bind(null,n,i,a,t),void 0,null),Y===null)throw Error(r(349));Ao&30||Go(n,t,a)}return a}function Go(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ko(e,t,n,r){t.value=n,t.getSnapshot=r,Jo(t)&&Yo(e)}function qo(e,t,n){return n(function(){Jo(t)&&Yo(e)})}function Jo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Lr(e,n)}catch{return!0}}function Yo(e){var t=ao(e,1);t!==null&&hl(t,e,1,-1)}function Xo(e){var t=Ro();return typeof e==`function`&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:e},t.queue=e,e=e.dispatch=ms.bind(null,V,e),[t.memoizedState,e]}function Zo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Qo(){return zo().memoizedState}function $o(e,t,n,r){var i=Ro();V.flags|=e,i.memoizedState=Zo(1|t,n,void 0,r===void 0?null:r)}function es(e,t,n,r){var i=zo();r=r===void 0?null:r;var a=void 0;if(H!==null){var o=H.memoizedState;if(a=o.destroy,r!==null&&Fo(r,o.deps)){i.memoizedState=Zo(t,n,a,r);return}}V.flags|=e,i.memoizedState=Zo(1|t,n,a,r)}function ts(e,t){return $o(8390656,8,e,t)}function ns(e,t){return es(2048,8,e,t)}function rs(e,t){return es(4,2,e,t)}function is(e,t){return es(4,4,e,t)}function as(e,t){if(typeof t==`function`)return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function os(e,t,n){return n=n==null?null:n.concat([e]),es(4,4,as.bind(null,t,e),n)}function ss(){}function cs(e,t){var n=zo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ls(e,t){var n=zo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function us(e,t,n){return Ao&21?(Lr(n,t)||(n=Gt(),V.lanes|=n,Yc|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,zs=!0),e.memoizedState=n)}function ds(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=ko.transition;ko.transition={};try{e(!1),t()}finally{M=n,ko.transition=r}}function fs(){return zo().memoizedState}function ps(e,t,n){var r=ml(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},hs(e))gs(t,n);else if(n=io(e,t,n,r),n!==null){var i=pl();hl(n,e,r,i),_s(n,t,r)}}function ms(e,t,n){var r=ml(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(hs(e))gs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Lr(s,o)){var c=t.interleaved;c===null?(i.next=i,ro(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}n=io(e,t,i,r),n!==null&&(i=pl(),hl(n,e,r,i),_s(n,t,r))}}function hs(e){var t=e.alternate;return e===V||t!==null&&t===V}function gs(e,t){Mo=jo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _s(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yt(e,n)}}var vs={readContext:to,useCallback:W,useContext:W,useEffect:W,useImperativeHandle:W,useInsertionEffect:W,useLayoutEffect:W,useMemo:W,useReducer:W,useRef:W,useState:W,useDebugValue:W,useDeferredValue:W,useTransition:W,useMutableSource:W,useSyncExternalStore:W,useId:W,unstable_isNewReconciler:!1},ys={readContext:to,useCallback:function(e,t){return Ro().memoizedState=[e,t===void 0?null:t],e},useContext:to,useEffect:ts,useImperativeHandle:function(e,t,n){return n=n==null?null:n.concat([e]),$o(4194308,4,as.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $o(4194308,4,e,t)},useInsertionEffect:function(e,t){return $o(4,2,e,t)},useMemo:function(e,t){var n=Ro();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ro();return t=n===void 0?t:n(t),r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ps.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=Ro();return e={current:e},t.memoizedState=e},useState:Xo,useDebugValue:ss,useDeferredValue:function(e){return Ro().memoizedState=e},useTransition:function(){var e=Xo(!1),t=e[0];return e=ds.bind(null,e[1]),Ro().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=V,a=Ro();if(z){if(n===void 0)throw Error(r(407));n=n()}else{if(n=t(),Y===null)throw Error(r(349));Ao&30||Go(i,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ts(qo.bind(null,i,o,e),[e]),i.flags|=2048,Zo(9,Ko.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=Ro(),t=Y.identifierPrefix;if(z){var n=Ca,r=Sa;n=(r&~(1<<32-Pt(r)-1)).toString(32)+n,t=`:`+t+`R`+n,n=No++,0<n&&(t+=`H`+n.toString(32)),t+=`:`}else n=Po++,t=`:`+t+`r`+n.toString(32)+`:`;return e.memoizedState=t},unstable_isNewReconciler:!1},bs={readContext:to,useCallback:cs,useContext:to,useEffect:ns,useImperativeHandle:os,useInsertionEffect:rs,useLayoutEffect:is,useMemo:ls,useReducer:Vo,useRef:Qo,useState:function(){return Vo(Bo)},useDebugValue:ss,useDeferredValue:function(e){return us(zo(),H.memoizedState,e)},useTransition:function(){return[Vo(Bo)[0],zo().memoizedState]},useMutableSource:Uo,useSyncExternalStore:Wo,useId:fs,unstable_isNewReconciler:!1},xs={readContext:to,useCallback:cs,useContext:to,useEffect:ns,useImperativeHandle:os,useInsertionEffect:rs,useLayoutEffect:is,useMemo:ls,useReducer:Ho,useRef:Qo,useState:function(){return Ho(Bo)},useDebugValue:ss,useDeferredValue:function(e){var t=zo();return H===null?t.memoizedState=e:us(t,H.memoizedState,e)},useTransition:function(){return[Ho(Bo)[0],zo().memoizedState]},useMutableSource:Uo,useSyncExternalStore:Wo,useId:fs,unstable_isNewReconciler:!1};function Ss(e,t){if(e&&e.defaultProps){for(var n in t=E({},t),e=e.defaultProps,e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Cs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:E({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ws={isMounted:function(e){return(e=e._reactInternals)?gt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pl(),i=ml(e),a=lo(r,i);a.payload=t,n!=null&&(a.callback=n),t=uo(e,a,i),t!==null&&(hl(t,e,i,r),fo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pl(),i=ml(e),a=lo(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=uo(e,a,i),t!==null&&(hl(t,e,i,r),fo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pl(),r=ml(e),i=lo(n,r);i.tag=2,t!=null&&(i.callback=t),t=uo(e,i,r),t!==null&&(hl(t,e,r,n),fo(t,e,r))}};function Ts(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Rr(n,r)||!Rr(i,a):!0}function Es(e,t,n){var r=!1,i=$i,a=t.contextType;return typeof a==`object`&&a?a=to(a):(i=ra(t)?ta:R.current,r=t.contextTypes,a=(r=r!=null)?na(e,i):$i),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ws,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Ds(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ws.enqueueReplaceState(t,t.state,null)}function Os(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},so(e);var a=t.contextType;typeof a==`object`&&a?i.context=to(a):(a=ra(t)?ta:R.current,i.context=na(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a==`function`&&(Cs(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps==`function`||typeof i.getSnapshotBeforeUpdate==`function`||typeof i.UNSAFE_componentWillMount!=`function`&&typeof i.componentWillMount!=`function`||(t=i.state,typeof i.componentWillMount==`function`&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount==`function`&&i.UNSAFE_componentWillMount(),t!==i.state&&ws.enqueueReplaceState(i,i.state,null),mo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount==`function`&&(e.flags|=4194308)}function ks(e,t){try{var n=``,r=t;do n+=_e(r),r=r.return;while(r);var i=n}catch(e){i=`
Error generating stack: `+e.message+`
`+e.stack}return{value:e,source:t,stack:i,digest:null}}function As(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function js(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var Ms=typeof WeakMap==`function`?WeakMap:Map;function Ns(e,t,n){n=lo(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){rl||(rl=!0,il=r),js(e,t)},n}function Ps(e,t,n){n=lo(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r==`function`){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){js(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch==`function`&&(n.callback=function(){js(e,t),typeof r!=`function`&&(al===null?al=new Set([this]):al.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n===null?``:n})}),n}function Fs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ms;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=zl.bind(null,e,t,n),t.then(e,e))}function Is(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t===null?!0:t.dehydrated!==null),t)return e;e=e.return}while(e!==null);return null}function Ls(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=lo(-1,1),t.tag=2,uo(n,t,1))),n.lanes|=1),e)}var Rs=C.ReactCurrentOwner,zs=!1;function Bs(e,t,n,r){t.child=e===null?Ka(t,null,n,r):Ga(t,e.child,n,r)}function Vs(e,t,n,r,i){n=n.render;var a=t.ref;return eo(t,i),r=Io(e,t,n,r,a,i),n=Lo(),e!==null&&!zs?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,sc(e,t,i)):(z&&n&&Ea(t),t.flags|=1,Bs(e,t,r,i),t.child)}function Hs(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ql(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Us(e,t,a,r,i)):(e=Xl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var o=a.memoizedProps;if(n=n.compare,n=n===null?Rr:n,n(o,r)&&e.ref===t.ref)return sc(e,t,i)}return t.flags|=1,e=Yl(a,r),e.ref=t.ref,e.return=t,t.child=e}function Us(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Rr(a,r)&&e.ref===t.ref)if(zs=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(zs=!0);else return t.lanes=e.lanes,sc(e,t,i)}return Ks(e,t,n,r,i)}function Ws(e,t,n){var r=t.pendingProps,i=r.children,a=e===null?null:e.memoizedState;if(r.mode===`hidden`)if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},L(qc,Kc),Kc|=n;else{if(!(n&1073741824))return e=a===null?n:a.baseLanes|n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,L(qc,Kc),Kc|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a===null?n:a.baseLanes,L(qc,Kc),Kc|=r}else a===null?r=n:(r=a.baseLanes|n,t.memoizedState=null),L(qc,Kc),Kc|=r;return Bs(e,t,i,n),t.child}function Gs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ks(e,t,n,r,i){var a=ra(n)?ta:R.current;return a=na(t,a),eo(t,i),n=Io(e,t,n,r,a,i),r=Lo(),e!==null&&!zs?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,sc(e,t,i)):(z&&r&&Ea(t),t.flags|=1,Bs(e,t,n,i),t.child)}function qs(e,t,n,r,i){if(ra(n)){var a=!0;sa(t)}else a=!1;if(eo(t,i),t.stateNode===null)oc(e,t),Es(t,n,r),Os(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,l=n.contextType;typeof l==`object`&&l?l=to(l):(l=ra(n)?ta:R.current,l=na(t,l));var u=n.getDerivedStateFromProps,d=typeof u==`function`||typeof o.getSnapshotBeforeUpdate==`function`;d||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==r||c!==l)&&Ds(t,o,r,l),oo=!1;var f=t.memoizedState;o.state=f,mo(t,r,o,i),c=t.memoizedState,s!==r||f!==c||ea.current||oo?(typeof u==`function`&&(Cs(t,n,u,r),c=t.memoizedState),(s=oo||Ts(t,n,s,r,f,c,l))?(d||typeof o.UNSAFE_componentWillMount!=`function`&&typeof o.componentWillMount!=`function`||(typeof o.componentWillMount==`function`&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==`function`&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount==`function`&&(t.flags|=4194308)):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=l,r=s):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,co(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:Ss(t.type,s),o.props=l,d=t.pendingProps,f=o.context,c=n.contextType,typeof c==`object`&&c?c=to(c):(c=ra(n)?ta:R.current,c=na(t,c));var p=n.getDerivedStateFromProps;(u=typeof p==`function`||typeof o.getSnapshotBeforeUpdate==`function`)||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==d||f!==c)&&Ds(t,o,r,c),oo=!1,f=t.memoizedState,o.state=f,mo(t,r,o,i);var m=t.memoizedState;s!==d||f!==m||ea.current||oo?(typeof p==`function`&&(Cs(t,n,p,r),m=t.memoizedState),(l=oo||Ts(t,n,l,r,f,m,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!=`function`&&typeof o.componentWillUpdate!=`function`||(typeof o.componentWillUpdate==`function`&&o.componentWillUpdate(r,m,c),typeof o.UNSAFE_componentWillUpdate==`function`&&o.UNSAFE_componentWillUpdate(r,m,c)),typeof o.componentDidUpdate==`function`&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=c,r=l):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Js(e,t,n,r,a,i)}function Js(e,t,n,r,i,a){Gs(e,t);var o=(t.flags&128)!=0;if(!r&&!o)return i&&ca(t,n,!1),sc(e,t,a);r=t.stateNode,Rs.current=t;var s=o&&typeof n.getDerivedStateFromError!=`function`?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Ga(t,e.child,null,a),t.child=Ga(t,null,s,a)):Bs(e,t,s,a),t.memoizedState=r.state,i&&ca(t,n,!0),t.child}function Ys(e){var t=e.stateNode;t.pendingContext?aa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&aa(e,t.context,!1),xo(e,t.containerInfo)}function Xs(e,t,n,r,i){return Ra(),za(i),t.flags|=256,Bs(e,t,n,r),t.child}var Zs={dehydrated:null,treeContext:null,retryLane:0};function Qs(e){return{baseLanes:e,cachePool:null,transitions:null}}function $s(e,t,n){var r=t.pendingProps,i=B.current,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!=0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),L(B,i&1),e===null)return Pa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data===`$!`?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:`hidden`,children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Ql(o,r,0,null),e=Zl(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Qs(n),t.memoizedState=Zs,e):ec(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return nc(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var c={mode:`hidden`,children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Yl(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s===null?(a=Zl(a,o,n,null),a.flags|=2):a=Yl(s,a),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Qs(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Zs,r}return a=e.child,e=a.sibling,r=Yl(a,{mode:`visible`,children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ec(e,t){return t=Ql({mode:`visible`,children:t},e.mode,0,null),t.return=e,e.child=t}function tc(e,t,n,r){return r!==null&&za(r),Ga(t,e.child,null,n),e=ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nc(e,t,n,i,a,o,s){if(n)return t.flags&256?(t.flags&=-257,i=As(Error(r(422))),tc(e,t,s,i)):t.memoizedState===null?(o=i.fallback,a=t.mode,i=Ql({mode:`visible`,children:i.children},a,0,null),o=Zl(o,a,s,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&Ga(t,e.child,null,s),t.child.memoizedState=Qs(s),t.memoizedState=Zs,o):(t.child=e.child,t.flags|=128,null);if(!(t.mode&1))return tc(e,t,s,null);if(a.data===`$!`){if(i=a.nextSibling&&a.nextSibling.dataset,i)var c=i.dgst;return i=c,o=Error(r(419)),i=As(o,i,void 0),tc(e,t,s,i)}if(c=(s&e.childLanes)!==0,zs||c){if(i=Y,i!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(i.suspendedLanes|s))===0?a:0,a!==0&&a!==o.retryLane&&(o.retryLane=a,ao(e,a),hl(i,e,a,-1))}return kl(),i=As(Error(r(421))),tc(e,t,s,i)}return a.data===`$?`?(t.flags|=128,t.child=e.child,t=Vl.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,ka=Li(a.nextSibling),Oa=t,z=!0,Aa=null,e!==null&&(ya[ba++]=Sa,ya[ba++]=Ca,ya[ba++]=xa,Sa=e.id,Ca=e.overflow,xa=t),t=ec(t,i.children),t.flags|=4096,t)}function rc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$a(e.return,t,n)}function ic(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function ac(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Bs(e,t,r.children,n),r=B.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rc(e,n,t);else if(e.tag===19)rc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(L(B,r),!(t.mode&1))t.memoizedState=null;else switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&To(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ic(t,!1,i,n,a);break;case`backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&To(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ic(t,!0,n,null,a);break;case`together`:ic(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function oc(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function sc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Yc|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,n=Yl(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yl(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function cc(e,t,n){switch(t.tag){case 3:Ys(t),Ra();break;case 5:Co(t);break;case 1:ra(t.type)&&sa(t);break;case 4:xo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;L(qa,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(L(B,B.current&1),e=sc(e,t,n),e===null?null:e.sibling):$s(e,t,n):(L(B,B.current&1),t.flags|=128,null);L(B,B.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ac(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),L(B,B.current),r)break;return null;case 22:case 23:return t.lanes=0,Ws(e,t,n)}return sc(e,t,n)}var lc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},uc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,bo(_o.current);var o=null;switch(n){case`input`:i=Ee(e,i),r=Ee(e,r),o=[];break;case`select`:i=E({},i,{value:void 0}),r=E({},r,{value:void 0}),o=[];break;case`textarea`:i=Pe(e,i),r=Pe(e,r),o=[];break;default:typeof i.onClick!=`function`&&typeof r.onClick==`function`&&(e.onclick=Di)}qe(n,r);var s;for(u in n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u===`style`){var c=i[u];for(s in c)c.hasOwnProperty(s)&&(n||={},n[s]=``)}else u!==`dangerouslySetInnerHTML`&&u!==`children`&&u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&u!==`autoFocus`&&(a.hasOwnProperty(u)?o||=[]:(o||=[]).push(u,null));for(u in r){var l=r[u];if(c=i?.[u],r.hasOwnProperty(u)&&l!==c&&(l!=null||c!=null))if(u===`style`)if(c){for(s in c)!c.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||={},n[s]=``);for(s in l)l.hasOwnProperty(s)&&c[s]!==l[s]&&(n||={},n[s]=l[s])}else n||(o||=[],o.push(u,n)),n=l;else u===`dangerouslySetInnerHTML`?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(o||=[]).push(u,l)):u===`children`?typeof l!=`string`&&typeof l!=`number`||(o||=[]).push(u,``+l):u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&(a.hasOwnProperty(u)?(l!=null&&u===`onScroll`&&F(`scroll`,e),o||c===l||(o=[])):(o||=[]).push(u,l))}n&&(o||=[]).push(`style`,n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},dc=function(e,t,n,r){n!==r&&(t.flags|=4)};function fc(e,t){if(!z)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function G(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function pc(e,t,n){var i=t.pendingProps;switch(Da(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return G(t),null;case 1:return ra(t.type)&&ia(),G(t),null;case 3:return i=t.stateNode,So(),I(ea),I(R),Do(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Ia(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Aa!==null&&(yl(Aa),Aa=null))),G(t),null;case 5:wo(t);var o=bo(yo.current);if(n=t.type,e!==null&&t.stateNode!=null)uc(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(r(166));return G(t),null}if(e=bo(_o.current),Ia(t)){i=t.stateNode,n=t.type;var s=t.memoizedProps;switch(i[Bi]=t,i[Vi]=s,e=(t.mode&1)!=0,n){case`dialog`:F(`cancel`,i),F(`close`,i);break;case`iframe`:case`object`:case`embed`:F(`load`,i);break;case`video`:case`audio`:for(o=0;o<ui.length;o++)F(ui[o],i);break;case`source`:F(`error`,i);break;case`img`:case`image`:case`link`:F(`error`,i),F(`load`,i);break;case`details`:F(`toggle`,i);break;case`input`:De(i,s),F(`invalid`,i);break;case`select`:i._wrapperState={wasMultiple:!!s.multiple},F(`invalid`,i);break;case`textarea`:Fe(i,s),F(`invalid`,i)}for(var c in qe(n,s),o=null,s)if(s.hasOwnProperty(c)){var l=s[c];c===`children`?typeof l==`string`?i.textContent!==l&&(!0!==s.suppressHydrationWarning&&Ei(i.textContent,l,e),o=[`children`,l]):typeof l==`number`&&i.textContent!==``+l&&(!0!==s.suppressHydrationWarning&&Ei(i.textContent,l,e),o=[`children`,``+l]):a.hasOwnProperty(c)&&l!=null&&c===`onScroll`&&F(`scroll`,i)}switch(n){case`input`:Ce(i),Ae(i,s,!0);break;case`textarea`:Ce(i),Le(i);break;case`select`:case`option`:break;default:typeof s.onClick==`function`&&(i.onclick=Di)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{c=o.nodeType===9?o:o.ownerDocument,e===`http://www.w3.org/1999/xhtml`&&(e=Re(n)),e===`http://www.w3.org/1999/xhtml`?n===`script`?(e=c.createElement(`div`),e.innerHTML=`<script><\/script>`,e=e.removeChild(e.firstChild)):typeof i.is==`string`?e=c.createElement(n,{is:i.is}):(e=c.createElement(n),n===`select`&&(c=e,i.multiple?c.multiple=!0:i.size&&(c.size=i.size))):e=c.createElementNS(e,n),e[Bi]=t,e[Vi]=i,lc(e,t,!1,!1),t.stateNode=e;a:{switch(c=Je(n,i),n){case`dialog`:F(`cancel`,e),F(`close`,e),o=i;break;case`iframe`:case`object`:case`embed`:F(`load`,e),o=i;break;case`video`:case`audio`:for(o=0;o<ui.length;o++)F(ui[o],e);o=i;break;case`source`:F(`error`,e),o=i;break;case`img`:case`image`:case`link`:F(`error`,e),F(`load`,e),o=i;break;case`details`:F(`toggle`,e),o=i;break;case`input`:De(e,i),o=Ee(e,i),F(`invalid`,e);break;case`option`:o=i;break;case`select`:e._wrapperState={wasMultiple:!!i.multiple},o=E({},i,{value:void 0}),F(`invalid`,e);break;case`textarea`:Fe(e,i),o=Pe(e,i),F(`invalid`,e);break;default:o=i}for(s in qe(n,o),l=o,l)if(l.hasOwnProperty(s)){var u=l[s];s===`style`?Ge(e,u):s===`dangerouslySetInnerHTML`?(u=u?u.__html:void 0,u!=null&&Ve(e,u)):s===`children`?typeof u==`string`?(n!==`textarea`||u!==``)&&D(e,u):typeof u==`number`&&D(e,``+u):s!==`suppressContentEditableWarning`&&s!==`suppressHydrationWarning`&&s!==`autoFocus`&&(a.hasOwnProperty(s)?u!=null&&s===`onScroll`&&F(`scroll`,e):u!=null&&S(e,s,u,c))}switch(n){case`input`:Ce(e),Ae(e,i,!1);break;case`textarea`:Ce(e),Le(e);break;case`option`:i.value!=null&&e.setAttribute(`value`,``+be(i.value));break;case`select`:e.multiple=!!i.multiple,s=i.value,s==null?i.defaultValue!=null&&Ne(e,!!i.multiple,i.defaultValue,!0):Ne(e,!!i.multiple,s,!1);break;default:typeof o.onClick==`function`&&(e.onclick=Di)}switch(n){case`button`:case`input`:case`select`:case`textarea`:i=!!i.autoFocus;break a;case`img`:i=!0;break a;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return G(t),null;case 6:if(e&&t.stateNode!=null)dc(e,t,e.memoizedProps,i);else{if(typeof i!=`string`&&t.stateNode===null)throw Error(r(166));if(n=bo(yo.current),bo(_o.current),Ia(t)){if(i=t.stateNode,n=t.memoizedProps,i[Bi]=t,(s=i.nodeValue!==n)&&(e=Oa,e!==null))switch(e.tag){case 3:Ei(i.nodeValue,n,(e.mode&1)!=0);break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Ei(i.nodeValue,n,(e.mode&1)!=0)}s&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Bi]=t,t.stateNode=i}return G(t),null;case 13:if(I(B),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(z&&ka!==null&&t.mode&1&&!(t.flags&128))La(),Ra(),t.flags|=98560,s=!1;else if(s=Ia(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(r(318));if(s=t.memoizedState,s=s===null?null:s.dehydrated,!s)throw Error(r(317));s[Bi]=t}else Ra(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;G(t),s=!1}else Aa!==null&&(yl(Aa),Aa=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||B.current&1?Q===0&&(Q=3):kl())),t.updateQueue!==null&&(t.flags|=4),G(t),null);case 4:return So(),e===null&&gi(t.stateNode.containerInfo),G(t),null;case 10:return Qa(t.type._context),G(t),null;case 17:return ra(t.type)&&ia(),G(t),null;case 19:if(I(B),s=t.memoizedState,s===null)return G(t),null;if(i=(t.flags&128)!=0,c=s.rendering,c===null)if(i)fc(s,!1);else{if(Q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(c=To(e),c!==null){for(t.flags|=128,fc(s,!1),i=c.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)s=n,e=i,s.flags&=14680066,c=s.alternate,c===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=c.childLanes,s.lanes=c.lanes,s.child=c.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=c.memoizedProps,s.memoizedState=c.memoizedState,s.updateQueue=c.updateQueue,s.type=c.type,e=c.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return L(B,B.current&1|2),t.child}e=e.sibling}s.tail!==null&&A()>tl&&(t.flags|=128,i=!0,fc(s,!1),t.lanes=4194304)}else{if(!i)if(e=To(c),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fc(s,!0),s.tail===null&&s.tailMode===`hidden`&&!c.alternate&&!z)return G(t),null}else 2*A()-s.renderingStartTime>tl&&n!==1073741824&&(t.flags|=128,i=!0,fc(s,!1),t.lanes=4194304);s.isBackwards?(c.sibling=t.child,t.child=c):(n=s.last,n===null?t.child=c:n.sibling=c,s.last=c)}return s.tail===null?(G(t),null):(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=A(),t.sibling=null,n=B.current,L(B,i?n&1|2:n&1),t);case 22:case 23:return Tl(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?Kc&1073741824&&(G(t),t.subtreeFlags&6&&(t.flags|=8192)):G(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}function mc(e,t){switch(Da(t),t.tag){case 1:return ra(t.type)&&ia(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return So(),I(ea),I(R),Do(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return wo(t),null;case 13:if(I(B),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Ra()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return I(B),null;case 4:return So(),null;case 10:return Qa(t.type._context),null;case 22:case 23:return Tl(),null;case 24:return null;default:return null}}var hc=!1,gc=!1,_c=typeof WeakSet==`function`?WeakSet:Set,K=null;function vc(e,t){var n=e.ref;if(n!==null)if(typeof n==`function`)try{n(null)}catch(n){$(e,t,n)}else n.current=null}function yc(e,t,n){try{n()}catch(n){$(e,t,n)}}var bc=!1;function xc(e,t){if(Oi=Sn,e=Hr(),Ur(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(ki={focusedElem:e,selectionRange:n},Sn=!1,K=t;K!==null;)if(t=K,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,K=e;else for(;K!==null;){t=K;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var g=h.memoizedProps,_=h.memoizedState,v=t.stateNode;v.__reactInternalSnapshotBeforeUpdate=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:Ss(t.type,g),_)}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent=``:y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(e){$(t,t.return,e)}if(e=t.sibling,e!==null){e.return=t.return,K=e;break}K=t.return}return h=bc,bc=!1,h}function Sc(e,t,n){var r=t.updateQueue;if(r=r===null?null:r.lastEffect,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&yc(t,n,a)}i=i.next}while(i!==r)}}function Cc(e,t){if(t=t.updateQueue,t=t===null?null:t.lastEffect,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function wc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t==`function`?t(e):t.current=e}}function Tc(e){var t=e.alternate;t!==null&&(e.alternate=null,Tc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Bi],delete t[Vi],delete t[Ui],delete t[Wi],delete t[Gi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ec(e){return e.tag===5||e.tag===3||e.tag===4}function Dc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Ec(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Di));else if(r!==4&&(e=e.child,e!==null))for(Oc(e,t,n),e=e.sibling;e!==null;)Oc(e,t,n),e=e.sibling}function kc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(kc(e,t,n),e=e.sibling;e!==null;)kc(e,t,n),e=e.sibling}var q=null,Ac=!1;function jc(e,t,n){for(n=n.child;n!==null;)Mc(e,t,n),n=n.sibling}function Mc(e,t,n){if(j&&typeof j.onCommitFiberUnmount==`function`)try{j.onCommitFiberUnmount(Mt,n)}catch{}switch(n.tag){case 5:gc||vc(n,t);case 6:var r=q,i=Ac;q=null,jc(e,t,n),q=r,Ac=i,q!==null&&(Ac?(e=q,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):q.removeChild(n.stateNode));break;case 18:q!==null&&(Ac?(e=q,n=n.stateNode,e.nodeType===8?Ii(e.parentNode,n):e.nodeType===1&&Ii(e,n),bn(e)):Ii(q,n.stateNode));break;case 4:r=q,i=Ac,q=n.stateNode.containerInfo,Ac=!0,jc(e,t,n),q=r,Ac=i;break;case 0:case 11:case 14:case 15:if(!gc&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&yc(n,t,o),i=i.next}while(i!==r)}jc(e,t,n);break;case 1:if(!gc&&(vc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){$(n,t,e)}jc(e,t,n);break;case 21:jc(e,t,n);break;case 22:n.mode&1?(gc=(r=gc)||n.memoizedState!==null,jc(e,t,n),gc=r):jc(e,t,n);break;default:jc(e,t,n)}}function Nc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new _c),t.forEach(function(t){var r=Hl.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function Pc(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];try{var o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 5:q=c.stateNode,Ac=!1;break a;case 3:q=c.stateNode.containerInfo,Ac=!0;break a;case 4:q=c.stateNode.containerInfo,Ac=!0;break a}c=c.return}if(q===null)throw Error(r(160));Mc(o,s,a),q=null,Ac=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(e){$(a,t,e)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Fc(t,e),t=t.sibling}function Fc(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pc(t,e),Ic(e),i&4){try{Sc(3,e,e.return),Cc(3,e)}catch(t){$(e,e.return,t)}try{Sc(5,e,e.return)}catch(t){$(e,e.return,t)}}break;case 1:Pc(t,e),Ic(e),i&512&&n!==null&&vc(n,n.return);break;case 5:if(Pc(t,e),Ic(e),i&512&&n!==null&&vc(n,n.return),e.flags&32){var a=e.stateNode;try{D(a,``)}catch(t){$(e,e.return,t)}}if(i&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,s=n===null?o:n.memoizedProps,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c===`input`&&o.type===`radio`&&o.name!=null&&Oe(a,o),Je(c,s);var u=Je(c,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d===`style`?Ge(a,f):d===`dangerouslySetInnerHTML`?Ve(a,f):d===`children`?D(a,f):S(a,d,f,u)}switch(c){case`input`:ke(a,o);break;case`textarea`:Ie(a,o);break;case`select`:var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m==null?p!==!!o.multiple&&(o.defaultValue==null?Ne(a,!!o.multiple,o.multiple?[]:``,!1):Ne(a,!!o.multiple,o.defaultValue,!0)):Ne(a,!!o.multiple,m,!1)}a[Vi]=o}catch(t){$(e,e.return,t)}}break;case 6:if(Pc(t,e),Ic(e),i&4){if(e.stateNode===null)throw Error(r(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(t){$(e,e.return,t)}}break;case 3:if(Pc(t,e),Ic(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{bn(t.containerInfo)}catch(t){$(e,e.return,t)}break;case 4:Pc(t,e),Ic(e);break;case 13:Pc(t,e),Ic(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(el=A())),i&4&&Nc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(gc=(u=gc)||d,Pc(t,e),gc=u):Pc(t,e),Ic(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(K=e,d=e.child;d!==null;){for(f=K=d;K!==null;){switch(p=K,m=p.child,p.tag){case 0:case 11:case 14:case 15:Sc(4,p,p.return);break;case 1:vc(p,p.return);var h=p.stateNode;if(typeof h.componentWillUnmount==`function`){i=p,n=p.return;try{t=i,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(e){$(i,n,e)}}break;case 5:vc(p,p.return);break;case 22:if(p.memoizedState!==null){Bc(f);continue}}m===null?Bc(f):(m.return=p,K=m)}d=d.sibling}a:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{a=f.stateNode,u?(o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`):(c=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty(`display`)?l.display:null,c.style.display=We(`display`,s))}catch(t){$(e,e.return,t)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?``:f.memoizedProps}catch(t){$(e,e.return,t)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break a;for(;f.sibling===null;){if(f.return===null||f.return===e)break a;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Pc(t,e),Ic(e),i&4&&Nc(e);break;case 21:break;default:Pc(t,e),Ic(e)}}function Ic(e){var t=e.flags;if(t&2){try{a:{for(var n=e.return;n!==null;){if(Ec(n)){var i=n;break a}n=n.return}throw Error(r(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(D(a,``),i.flags&=-33),kc(e,Dc(e),a);break;case 3:case 4:var o=i.stateNode.containerInfo;Oc(e,Dc(e),o);break;default:throw Error(r(161))}}catch(t){$(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Lc(e,t,n){K=e,Rc(e,t,n)}function Rc(e,t,n){for(var r=(e.mode&1)!=0;K!==null;){var i=K,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||hc;if(!o){var s=i.alternate,c=s!==null&&s.memoizedState!==null||gc;s=hc;var l=gc;if(hc=o,(gc=c)&&!l)for(K=i;K!==null;)o=K,c=o.child,o.tag===22&&o.memoizedState!==null||c===null?Vc(i):(c.return=o,K=c);for(;a!==null;)K=a,Rc(a,t,n),a=a.sibling;K=i,hc=s,gc=l}zc(e,t,n)}else i.subtreeFlags&8772&&a!==null?(a.return=i,K=a):zc(e,t,n)}}function zc(e){for(;K!==null;){var t=K;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:gc||Cc(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!gc)if(n===null)i.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Ss(t.type,n.memoizedProps);i.componentDidUpdate(a,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ho(t,o,i);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ho(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var l=t.memoizedProps;switch(t.type){case`button`:case`input`:case`select`:case`textarea`:l.autoFocus&&n.focus();break;case`img`:l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&bn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}gc||t.flags&512&&wc(t)}catch(e){$(t,t.return,e)}}if(t===e){K=null;break}if(n=t.sibling,n!==null){n.return=t.return,K=n;break}K=t.return}}function Bc(e){for(;K!==null;){var t=K;if(t===e){K=null;break}var n=t.sibling;if(n!==null){n.return=t.return,K=n;break}K=t.return}}function Vc(e){for(;K!==null;){var t=K;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Cc(4,t)}catch(e){$(t,n,e)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount==`function`){var i=t.return;try{r.componentDidMount()}catch(e){$(t,i,e)}}var a=t.return;try{wc(t)}catch(e){$(t,a,e)}break;case 5:var o=t.return;try{wc(t)}catch(e){$(t,o,e)}}}catch(e){$(t,t.return,e)}if(t===e){K=null;break}var s=t.sibling;if(s!==null){s.return=t.return,K=s;break}K=t.return}}var Hc=Math.ceil,Uc=C.ReactCurrentDispatcher,Wc=C.ReactCurrentOwner,Gc=C.ReactCurrentBatchConfig,J=0,Y=null,X=null,Z=0,Kc=0,qc=Qi(0),Q=0,Jc=null,Yc=0,Xc=0,Zc=0,Qc=null,$c=null,el=0,tl=1/0,nl=null,rl=!1,il=null,al=null,ol=!1,sl=null,cl=0,ll=0,ul=null,dl=-1,fl=0;function pl(){return J&6?A():dl===-1?dl=A():dl}function ml(e){return e.mode&1?J&2&&Z!==0?Z&-Z:Ba.transition===null?(e=M,e===0?(e=window.event,e=e===void 0?16:On(e.type),e):e):(fl===0&&(fl=Gt()),fl):1}function hl(e,t,n,i){if(50<ll)throw ll=0,ul=null,Error(r(185));qt(e,n,i),(!(J&2)||e!==Y)&&(e===Y&&(!(J&2)&&(Xc|=n),Q===4&&xl(e,Z)),gl(e,i),n===1&&J===0&&!(t.mode&1)&&(tl=A()+500,ua&&ma()))}function gl(e,t){var n=e.callbackNode;Ut(e,t);var r=Vt(e,e===Y?Z:0);if(r===0)n!==null&&Ct(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ct(n),t===1)e.tag===0?pa(Sl.bind(null,e)):fa(Sl.bind(null,e)),Pi(function(){!(J&6)&&ma()}),n=null;else{switch(Xt(r)){case 1:n=Dt;break;case 4:n=Ot;break;case 16:n=kt;break;case 536870912:n=jt;break;default:n=kt}n=Wl(n,_l.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function _l(e,t){if(dl=-1,fl=0,J&6)throw Error(r(327));var n=e.callbackNode;if(Ll()&&e.callbackNode!==n)return null;var i=Vt(e,e===Y?Z:0);if(i===0)return null;if(i&30||(i&e.expiredLanes)!==0||t)t=Al(e,i);else{t=i;var a=J;J|=2;var o=Ol();(Y!==e||Z!==t)&&(nl=null,tl=A()+500,El(e,t));do try{Ml();break}catch(t){Dl(e,t)}while(1);Za(),Uc.current=o,J=a,X===null?(Y=null,Z=0,t=Q):t=0}if(t!==0){if(t===2&&(a=Wt(e),a!==0&&(i=a,t=vl(e,a))),t===1)throw n=Jc,El(e,0),xl(e,i),gl(e,A()),n;if(t===6)xl(e,i);else{if(a=e.current.alternate,!(i&30)&&!bl(a)&&(t=Al(e,i),t===2&&(o=Wt(e),o!==0&&(i=o,t=vl(e,o))),t===1))throw n=Jc,El(e,0),xl(e,i),gl(e,A()),n;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(r(345));case 2:Fl(e,$c,nl);break;case 3:if(xl(e,i),(i&130023424)===i&&(t=el+500-A(),10<t)){if(Vt(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){pl(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ji(Fl.bind(null,e,$c,nl),t);break}Fl(e,$c,nl);break;case 4:if(xl(e,i),(i&4194240)===i)break;for(t=e.eventTimes,a=-1;0<i;){var s=31-Pt(i);o=1<<s,s=t[s],s>a&&(a=s),i&=~o}if(i=a,i=A()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Hc(i/1960))-i,10<i){e.timeoutHandle=ji(Fl.bind(null,e,$c,nl),i);break}Fl(e,$c,nl);break;case 5:Fl(e,$c,nl);break;default:throw Error(r(329))}}}return gl(e,A()),e.callbackNode===n?_l.bind(null,e):null}function vl(e,t){var n=Qc;return e.current.memoizedState.isDehydrated&&(El(e,t).flags|=256),e=Al(e,t),e!==2&&(t=$c,$c=n,t!==null&&yl(t)),e}function yl(e){$c===null?$c=e:$c.push.apply($c,e)}function bl(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Lr(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xl(e,t){for(t&=~Zc,t&=~Xc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Pt(t),r=1<<n;e[n]=-1,t&=~r}}function Sl(e){if(J&6)throw Error(r(327));Ll();var t=Vt(e,0);if(!(t&1))return gl(e,A()),null;var n=Al(e,t);if(e.tag!==0&&n===2){var i=Wt(e);i!==0&&(t=i,n=vl(e,i))}if(n===1)throw n=Jc,El(e,0),xl(e,t),gl(e,A()),n;if(n===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fl(e,$c,nl),gl(e,A()),null}function Cl(e,t){var n=J;J|=1;try{return e(t)}finally{J=n,J===0&&(tl=A()+500,ua&&ma())}}function wl(e){sl!==null&&sl.tag===0&&!(J&6)&&Ll();var t=J;J|=1;var n=Gc.transition,r=M;try{if(Gc.transition=null,M=1,e)return e()}finally{M=r,Gc.transition=n,J=t,!(J&6)&&ma()}}function Tl(){Kc=qc.current,I(qc)}function El(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Mi(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(Da(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ia();break;case 3:So(),I(ea),I(R),Do();break;case 5:wo(r);break;case 4:So();break;case 13:I(B);break;case 19:I(B);break;case 10:Qa(r.type._context);break;case 22:case 23:Tl()}n=n.return}if(Y=e,X=e=Yl(e.current,null),Z=Kc=t,Q=0,Jc=null,Zc=Xc=Yc=0,$c=Qc=null,no!==null){for(t=0;t<no.length;t++)if(n=no[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}no=null}return e}function Dl(e,t){do{var n=X;try{if(Za(),Oo.current=vs,jo){for(var i=V.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}jo=!1}if(Ao=0,U=H=V=null,Mo=!1,No=0,Wc.current=null,n===null||n.return===null){Q=1,Jc=t,X=null;break}a:{var o=e,s=n.return,c=n,l=t;if(t=Z,c.flags|=32768,typeof l==`object`&&l&&typeof l.then==`function`){var u=l,d=c,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Is(s);if(m!==null){m.flags&=-257,Ls(m,s,c,o,t),m.mode&1&&Fs(o,u,t),t=m,l=u;var h=t.updateQueue;if(h===null){var g=new Set;g.add(l),t.updateQueue=g}else h.add(l);break a}else{if(!(t&1)){Fs(o,u,t),kl();break a}l=Error(r(426))}}else if(z&&c.mode&1){var _=Is(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Ls(_,s,c,o,t),za(ks(l,c));break a}}o=l=ks(l,c),Q!==4&&(Q=2),Qc===null?Qc=[o]:Qc.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=Ns(o,l,t);po(o,v);break a;case 1:c=l;var y=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError==`function`||b!==null&&typeof b.componentDidCatch==`function`&&(al===null||!al.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Ps(o,c,t);po(o,x);break a}}o=o.return}while(o!==null)}Pl(n)}catch(e){t=e,X===n&&n!==null&&(X=n=n.return);continue}break}while(1)}function Ol(){var e=Uc.current;return Uc.current=vs,e===null?vs:e}function kl(){(Q===0||Q===3||Q===2)&&(Q=4),Y===null||!(Yc&268435455)&&!(Xc&268435455)||xl(Y,Z)}function Al(e,t){var n=J;J|=2;var i=Ol();(Y!==e||Z!==t)&&(nl=null,El(e,t));do try{jl();break}catch(t){Dl(e,t)}while(1);if(Za(),J=n,Uc.current=i,X!==null)throw Error(r(261));return Y=null,Z=0,Q}function jl(){for(;X!==null;)Nl(X)}function Ml(){for(;X!==null&&!wt();)Nl(X)}function Nl(e){var t=Ul(e.alternate,e,Kc);e.memoizedProps=e.pendingProps,t===null?Pl(e):X=t,Wc.current=null}function Pl(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=mc(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Q=6,X=null;return}}else if(n=pc(n,t,Kc),n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);Q===0&&(Q=5)}function Fl(e,t,n){var r=M,i=Gc.transition;try{Gc.transition=null,M=1,Il(e,t,n,r)}finally{Gc.transition=i,M=r}return null}function Il(e,t,n,i){do Ll();while(sl!==null);if(J&6)throw Error(r(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Jt(e,o),e===Y&&(X=Y=null,Z=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ol||(ol=!0,Wl(kt,function(){return Ll(),null})),o=(n.flags&15990)!=0,n.subtreeFlags&15990||o){o=Gc.transition,Gc.transition=null;var s=M;M=1;var c=J;J|=4,Wc.current=null,xc(e,n),Fc(n,e),Wr(ki),Sn=!!Oi,ki=Oi=null,e.current=n,Lc(n,e,a),Tt(),J=c,M=s,Gc.transition=o}else e.current=n;if(ol&&(ol=!1,sl=e,cl=a),o=e.pendingLanes,o===0&&(al=null),Nt(n.stateNode,i),gl(e,A()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],i(a.value,{componentStack:a.stack,digest:a.digest});if(rl)throw rl=!1,e=il,il=null,e;return cl&1&&e.tag!==0&&Ll(),o=e.pendingLanes,o&1?e===ul?ll++:(ll=0,ul=e):ll=0,ma(),null}function Ll(){if(sl!==null){var e=Xt(cl),t=Gc.transition,n=M;try{if(Gc.transition=null,M=16>e?16:e,sl===null)var i=!1;else{if(e=sl,sl=null,cl=0,J&6)throw Error(r(331));var a=J;for(J|=4,K=e.current;K!==null;){var o=K,s=o.child;if(K.flags&16){var c=o.deletions;if(c!==null){for(var l=0;l<c.length;l++){var u=c[l];for(K=u;K!==null;){var d=K;switch(d.tag){case 0:case 11:case 15:Sc(8,d,o)}var f=d.child;if(f!==null)f.return=d,K=f;else for(;K!==null;){d=K;var p=d.sibling,m=d.return;if(Tc(d),d===u){K=null;break}if(p!==null){p.return=m,K=p;break}K=m}}}var h=o.alternate;if(h!==null){var g=h.child;if(g!==null){h.child=null;do{var _=g.sibling;g.sibling=null,g=_}while(g!==null)}}K=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,K=s;else b:for(;K!==null;){if(o=K,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Sc(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,K=v;break b}K=o.return}}var y=e.current;for(K=y;K!==null;){s=K;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,K=b;else b:for(s=y;K!==null;){if(c=K,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Cc(9,c)}}catch(e){$(c,c.return,e)}if(c===s){K=null;break b}var x=c.sibling;if(x!==null){x.return=c.return,K=x;break b}K=c.return}}if(J=a,ma(),j&&typeof j.onPostCommitFiberRoot==`function`)try{j.onPostCommitFiberRoot(Mt,e)}catch{}i=!0}return i}finally{M=n,Gc.transition=t}}return!1}function Rl(e,t,n){t=ks(n,t),t=Ns(e,t,1),e=uo(e,t,1),t=pl(),e!==null&&(qt(e,1,t),gl(e,t))}function $(e,t,n){if(e.tag===3)Rl(e,e,n);else for(;t!==null;){if(t.tag===3){Rl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(al===null||!al.has(r))){e=ks(n,e),e=Ps(t,e,1),t=uo(t,e,1),e=pl(),t!==null&&(qt(t,1,e),gl(t,e));break}}t=t.return}}function zl(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pl(),e.pingedLanes|=e.suspendedLanes&n,Y===e&&(Z&n)===n&&(Q===4||Q===3&&(Z&130023424)===Z&&500>A()-el?El(e,0):Zc|=n),gl(e,t)}function Bl(e,t){t===0&&(e.mode&1?(t=zt,zt<<=1,!(zt&130023424)&&(zt=4194304)):t=1);var n=pl();e=ao(e,t),e!==null&&(qt(e,t,n),gl(e,n))}function Vl(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Bl(e,n)}function Hl(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(r(314))}i!==null&&i.delete(t),Bl(e,n)}var Ul=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ea.current)zs=!0;else{if((e.lanes&n)===0&&!(t.flags&128))return zs=!1,cc(e,t,n);zs=!!(e.flags&131072)}else zs=!1,z&&t.flags&1048576&&Ta(t,va,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;oc(e,t),e=t.pendingProps;var a=na(t,R.current);eo(t,n),a=Io(null,t,i,e,a,n);var o=Lo();return t.flags|=1,typeof a==`object`&&a&&typeof a.render==`function`&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ra(i)?(o=!0,sa(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,so(t),a.updater=ws,t.stateNode=a,a._reactInternals=t,Os(t,i,e,n),t=Js(null,t,i,!0,o,n)):(t.tag=0,z&&o&&Ea(t),Bs(null,t,a,n),t=t.child),t;case 16:i=t.elementType;a:{switch(oc(e,t),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=Jl(i),e=Ss(i,e),a){case 0:t=Ks(null,t,i,e,n);break a;case 1:t=qs(null,t,i,e,n);break a;case 11:t=Vs(null,t,i,e,n);break a;case 14:t=Hs(null,t,i,Ss(i.type,e),n);break a}throw Error(r(306,i,``))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:Ss(i,a),Ks(e,t,i,a,n);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:Ss(i,a),qs(e,t,i,a,n);case 3:a:{if(Ys(t),e===null)throw Error(r(387));i=t.pendingProps,o=t.memoizedState,a=o.element,co(e,t),mo(t,i,null,n);var s=t.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=ks(Error(r(423)),t),t=Xs(e,t,i,n,a);break a}else if(i!==a){a=ks(Error(r(424)),t),t=Xs(e,t,i,n,a);break a}else for(ka=Li(t.stateNode.containerInfo.firstChild),Oa=t,z=!0,Aa=null,n=Ka(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ra(),i===a){t=sc(e,t,n);break a}Bs(e,t,i,n)}t=t.child}return t;case 5:return Co(t),e===null&&Pa(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,s=a.children,Ai(i,a)?s=null:o!==null&&Ai(i,o)&&(t.flags|=32),Gs(e,t),Bs(e,t,s,n),t.child;case 6:return e===null&&Pa(t),null;case 13:return $s(e,t,n);case 4:return xo(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Ga(t,null,i,n):Bs(e,t,i,n),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:Ss(i,a),Vs(e,t,i,a,n);case 7:return Bs(e,t,t.pendingProps,n),t.child;case 8:return Bs(e,t,t.pendingProps.children,n),t.child;case 12:return Bs(e,t,t.pendingProps.children,n),t.child;case 10:a:{if(i=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,L(qa,i._currentValue),i._currentValue=s,o!==null)if(Lr(o.value,s)){if(o.children===a.children&&!ea.current){t=sc(e,t,n);break a}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){s=o.child;for(var l=c.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=lo(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),$a(o.return,n,t),c.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(r(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),$a(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Bs(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,eo(t,n),a=to(a),i=i(a),t.flags|=1,Bs(e,t,i,n),t.child;case 14:return i=t.type,a=Ss(i,t.pendingProps),a=Ss(i.type,a),Hs(e,t,i,a,n);case 15:return Us(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:Ss(i,a),oc(e,t),t.tag=1,ra(i)?(e=!0,sa(t)):e=!1,eo(t,n),Es(t,i,a),Os(t,i,a,n),Js(null,t,i,!0,e,n);case 19:return ac(e,t,n);case 22:return Ws(e,t,n)}throw Error(r(156,t.tag))};function Wl(e,t){return St(e,t)}function Gl(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kl(e,t,n,r){return new Gl(e,t,n,r)}function ql(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jl(e){if(typeof e==`function`)return+!!ql(e);if(e!=null){if(e=e.$$typeof,e===oe)return 11;if(e===T)return 14}return 2}function Yl(e,t){var n=e.alternate;return n===null?(n=Kl(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xl(e,t,n,i,a,o){var s=2;if(i=e,typeof e==`function`)ql(e)&&(s=1);else if(typeof e==`string`)s=5;else a:switch(e){case te:return Zl(n.children,a,o,t);case ne:s=8,a|=8;break;case re:return e=Kl(12,n,t,a|2),e.elementType=re,e.lanes=o,e;case se:return e=Kl(13,n,t,a),e.elementType=se,e.lanes=o,e;case ce:return e=Kl(19,n,t,a),e.elementType=ce,e.lanes=o,e;case ue:return Ql(n,a,o,t);default:if(typeof e==`object`&&e)switch(e.$$typeof){case ie:s=10;break a;case ae:s=9;break a;case oe:s=11;break a;case T:s=14;break a;case le:s=16,i=null;break a}throw Error(r(130,e==null?e:typeof e,``))}return t=Kl(s,n,t,a),t.elementType=e,t.type=i,t.lanes=o,t}function Zl(e,t,n,r){return e=Kl(7,e,r,t),e.lanes=n,e}function Ql(e,t,n,r){return e=Kl(22,e,r,t),e.elementType=ue,e.lanes=n,e.stateNode={isHidden:!1},e}function $l(e,t,n){return e=Kl(6,e,null,t),e.lanes=n,e}function eu(e,t,n){return t=Kl(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function tu(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kt(0),this.expirationTimes=Kt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function nu(e,t,n,r,i,a,o,s,c){return e=new tu(e,t,n,s,c),t===1?(t=1,!0===a&&(t|=8)):t=0,a=Kl(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},so(a),e}function ru(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ee,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}function iu(e){if(!e)return $i;e=e._reactInternals;a:{if(gt(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break a;case 1:if(ra(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break a}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var n=e.type;if(ra(n))return oa(e,n,t)}return t}function au(e,t,n,r,i,a,o,s,c){return e=nu(n,r,!0,e,i,a,o,s,c),e.context=iu(null),n=e.current,r=pl(),i=ml(n),a=lo(r,i),a.callback=t??null,uo(n,a,i),e.current.lanes=i,qt(e,i,r),gl(e,r),e}function ou(e,t,n,r){var i=t.current,a=pl(),o=ml(i);return n=iu(n),t.context===null?t.context=n:t.pendingContext=n,t=lo(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=uo(i,t,o),e!==null&&(hl(e,i,o,a),fo(e,i,o)),o}function su(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function lu(e,t){cu(e,t),(e=e.alternate)&&cu(e,t)}function uu(){return null}var du=typeof reportError==`function`?reportError:function(e){console.error(e)};function fu(e){this._internalRoot=e}pu.prototype.render=fu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));ou(e,t,null,null)},pu.prototype.unmount=fu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wl(function(){ou(null,e,null,null)}),t[Hi]=null}};function pu(e){this._internalRoot=e}pu.prototype.unstable_scheduleHydration=function(e){if(e){var t=en();e={blockedOn:null,target:e,priority:t};for(var n=0;n<un.length&&t!==0&&t<un[n].priority;n++);un.splice(n,0,e),n===0&&hn(e)}};function mu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==` react-mount-point-unstable `))}function gu(){}function _u(e,t,n,r,i){if(i){if(typeof r==`function`){var a=r;r=function(){var e=su(o);a.call(e)}}var o=au(t,r,e,0,null,!1,!1,``,gu);return e._reactRootContainer=o,e[Hi]=o.current,gi(e.nodeType===8?e.parentNode:e),wl(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r==`function`){var s=r;r=function(){var e=su(c);s.call(e)}}var c=nu(e,0,!1,null,null,!1,!1,``,gu);return e._reactRootContainer=c,e[Hi]=c.current,gi(e.nodeType===8?e.parentNode:e),wl(function(){ou(t,c,n,r)}),c}function vu(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i==`function`){var s=i;i=function(){var e=su(o);s.call(e)}}ou(t,o,e,i)}else o=_u(n,t,e,i,r);return su(o)}Zt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Bt(t.pendingLanes);n!==0&&(Yt(t,n|1),gl(t,A()),!(J&6)&&(tl=A()+500,ma()))}break;case 13:wl(function(){var t=ao(e,1);t!==null&&hl(t,e,1,pl())}),lu(e,1)}},Qt=function(e){if(e.tag===13){var t=ao(e,134217728);t!==null&&hl(t,e,134217728,pl()),lu(e,134217728)}},$t=function(e){if(e.tag===13){var t=ml(e),n=ao(e,t);n!==null&&hl(n,e,t,pl()),lu(e,t)}},en=function(){return M},tn=function(e,t){var n=M;try{return M=e,t()}finally{M=n}},Ze=function(e,t,n){switch(t){case`input`:if(ke(e,n),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name=`+JSON.stringify(``+t)+`][type="radio"]`),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=Yi(i);if(!a)throw Error(r(90));we(i),ke(i,a)}}}break;case`textarea`:Ie(e,n);break;case`select`:t=n.value,t!=null&&Ne(e,!!n.multiple,t,!1)}},nt=Cl,rt=wl;var yu={usingClientEntryPoint:!1,Events:[qi,Ji,Yi,et,tt,Cl]},bu={findFiberByHostInstance:Ki,bundleType:0,version:`18.3.1`,rendererPackageName:`react-dom`},xu={bundleType:bu.bundleType,version:bu.version,rendererPackageName:bu.rendererPackageName,rendererConfig:bu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=bt(e),e===null?null:e.stateNode},findFiberByHostInstance:bu.findFiberByHostInstance||uu,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:`18.3.1-next-f1338f8080-20240426`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Su.isDisabled&&Su.supportsFiber)try{Mt=Su.inject(xu),j=Su}catch{}}e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yu,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mu(t))throw Error(r(200));return ru(e,t,null,n)},e.createRoot=function(e,t){if(!mu(e))throw Error(r(299));var n=!1,i=``,a=du;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=nu(e,1,!1,null,null,n,!1,i,a),e[Hi]=t.current,gi(e.nodeType===8?e.parentNode:e),new fu(t)},e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(r(188)):(e=Object.keys(e).join(`,`),Error(r(268,e)));return e=bt(t),e=e===null?null:e.stateNode,e},e.flushSync=function(e){return wl(e)},e.hydrate=function(e,t,n){if(!hu(t))throw Error(r(200));return vu(null,e,t,!0,n)},e.hydrateRoot=function(e,t,n){if(!mu(e))throw Error(r(405));var i=n!=null&&n.hydratedSources||null,a=!1,o=``,s=du;if(n!=null&&(!0===n.unstable_strictMode&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=au(t,null,e,1,n??null,a,!1,o,s),e[Hi]=t.current,gi(e),i)for(e=0;e<i.length;e++)n=i[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new pu(t)},e.render=function(e,t,n){if(!hu(t))throw Error(r(200));return vu(null,e,t,!1,n)},e.unmountComponentAtNode=function(e){if(!hu(e))throw Error(r(40));return e._reactRootContainer?(wl(function(){vu(null,null,e,!1,function(){e._reactRootContainer=null,e[Hi]=null})}),!0):!1},e.unstable_batchedUpdates=Cl,e.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!hu(n))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return vu(e,t,n,!1,i)},e.version=`18.3.1-next-f1338f8080-20240426`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=m();e.createRoot=t.createRoot,e.hydrateRoot=t.hydrateRoot})),g=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),_=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),v={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},y=c(u()),b=(0,y.forwardRef)(({color:e=`currentColor`,size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>(0,y.createElement)(`svg`,{ref:c,...v,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:_(`lucide`,i),...s},[...o.map(([e,t])=>(0,y.createElement)(e,t)),...Array.isArray(a)?a:[a]])),x=(e,t)=>{let n=(0,y.forwardRef)(({className:n,...r},i)=>(0,y.createElement)(b,{ref:i,iconNode:t,className:_(`lucide-${g(e)}`,n),...r}));return n.displayName=`${e}`,n},S=x(`ArrowLeft`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),C=x(`ArrowRight`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),w=x(`Award`,[[`path`,{d:`m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526`,key:`1yiouv`}],[`circle`,{cx:`12`,cy:`8`,r:`6`,key:`1vp47v`}]]),ee=x(`BookCheck`,[[`path`,{d:`M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20`,key:`k3hazp`}],[`path`,{d:`m9 9.5 2 2 4-4`,key:`1dth82`}]]),te=x(`BookMarked`,[[`path`,{d:`M10 2v8l3-3 3 3V2`,key:`sqw3rj`}],[`path`,{d:`M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20`,key:`k3hazp`}]]),ne=x(`BookOpen`,[[`path`,{d:`M12 7v14`,key:`1akyts`}],[`path`,{d:`M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`,key:`ruj8y`}]]),re=x(`Brain`,[[`path`,{d:`M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z`,key:`l5xja`}],[`path`,{d:`M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z`,key:`ep3f8r`}],[`path`,{d:`M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4`,key:`1p4c4q`}],[`path`,{d:`M17.599 6.5a3 3 0 0 0 .399-1.375`,key:`tmeiqw`}],[`path`,{d:`M6.003 5.125A3 3 0 0 0 6.401 6.5`,key:`105sqy`}],[`path`,{d:`M3.477 10.896a4 4 0 0 1 .585-.396`,key:`ql3yin`}],[`path`,{d:`M19.938 10.5a4 4 0 0 1 .585.396`,key:`1qfode`}],[`path`,{d:`M6 18a4 4 0 0 1-1.967-.516`,key:`2e4loj`}],[`path`,{d:`M19.967 17.484A4 4 0 0 1 18 18`,key:`159ez6`}]]),ie=x(`CalendarCheck2`,[[`path`,{d:`M8 2v4`,key:`1cmpym`}],[`path`,{d:`M16 2v4`,key:`4m81vk`}],[`path`,{d:`M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8`,key:`bce9hv`}],[`path`,{d:`M3 10h18`,key:`8toen8`}],[`path`,{d:`m16 20 2 2 4-4`,key:`13tcca`}]]),ae=x(`CalendarClock`,[[`path`,{d:`M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5`,key:`1osxxc`}],[`path`,{d:`M16 2v4`,key:`4m81vk`}],[`path`,{d:`M8 2v4`,key:`1cmpym`}],[`path`,{d:`M3 10h5`,key:`r794hk`}],[`path`,{d:`M17.5 17.5 16 16.3V14`,key:`akvzfd`}],[`circle`,{cx:`16`,cy:`16`,r:`6`,key:`qoo3c4`}]]),oe=x(`ChartColumn`,[[`path`,{d:`M3 3v16a2 2 0 0 0 2 2h16`,key:`c24i48`}],[`path`,{d:`M18 17V9`,key:`2bz60n`}],[`path`,{d:`M13 17V5`,key:`1frdt8`}],[`path`,{d:`M8 17v-3`,key:`17ska0`}]]),se=x(`Check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),ce=x(`CircleCheck`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),T=x(`CircleX`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m15 9-6 6`,key:`1uzhvr`}],[`path`,{d:`m9 9 6 6`,key:`z0biqf`}]]),le=x(`ClipboardCheck`,[[`rect`,{width:`8`,height:`4`,x:`8`,y:`2`,rx:`1`,ry:`1`,key:`tgr4d6`}],[`path`,{d:`M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2`,key:`116196`}],[`path`,{d:`m9 14 2 2 4-4`,key:`df797q`}]]),ue=x(`Clock3`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`polyline`,{points:`12 6 12 12 16.5 12`,key:`1aq6pp`}]]),de=x(`Download`,[[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`polyline`,{points:`7 10 12 15 17 10`,key:`2ggqvy`}],[`line`,{x1:`12`,x2:`12`,y1:`15`,y2:`3`,key:`1vk2je`}]]),fe=x(`Eye`,[[`path`,{d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,key:`1nclc0`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),E=x(`Flame`,[[`path`,{d:`M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z`,key:`96xj49`}]]),pe=x(`Gauge`,[[`path`,{d:`m12 14 4-4`,key:`9kzdfg`}],[`path`,{d:`M3.34 19a10 10 0 1 1 17.32 0`,key:`19p75a`}]]),me=x(`Gem`,[[`path`,{d:`M6 3h12l4 6-10 13L2 9Z`,key:`1pcd5k`}],[`path`,{d:`M11 3 8 9l4 13 4-13-3-6`,key:`1fcu3u`}],[`path`,{d:`M2 9h20`,key:`16fsjt`}]]),he=x(`Gift`,[[`rect`,{x:`3`,y:`8`,width:`18`,height:`4`,rx:`1`,key:`bkv52`}],[`path`,{d:`M12 8v13`,key:`1c76mn`}],[`path`,{d:`M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7`,key:`6wjy6b`}],[`path`,{d:`M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5`,key:`1ihvrl`}]]),ge=x(`Inbox`,[[`polyline`,{points:`22 12 16 12 14 15 10 15 8 12 2 12`,key:`o97t9d`}],[`path`,{d:`M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z`,key:`oot6mr`}]]),_e=x(`Layers`,[[`path`,{d:`M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z`,key:`zw3jo`}],[`path`,{d:`M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12`,key:`1wduqc`}],[`path`,{d:`M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17`,key:`kqbvx6`}]]),ve=x(`LibraryBig`,[[`rect`,{width:`8`,height:`18`,x:`3`,y:`3`,rx:`1`,key:`oynpb5`}],[`path`,{d:`M7 3v18`,key:`bbkbws`}],[`path`,{d:`M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z`,key:`1qboyk`}]]),ye=x(`ListChecks`,[[`path`,{d:`m3 17 2 2 4-4`,key:`1jhpwq`}],[`path`,{d:`m3 7 2 2 4-4`,key:`1obspn`}],[`path`,{d:`M13 6h8`,key:`15sg57`}],[`path`,{d:`M13 12h8`,key:`h98zly`}],[`path`,{d:`M13 18h8`,key:`oe0vm4`}]]),be=x(`ListFilter`,[[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M7 12h10`,key:`b7w52i`}],[`path`,{d:`M10 18h4`,key:`1ulq68`}]]),xe=x(`NotebookTabs`,[[`path`,{d:`M2 6h4`,key:`aawbzj`}],[`path`,{d:`M2 10h4`,key:`l0bgd4`}],[`path`,{d:`M2 14h4`,key:`1gsvsf`}],[`path`,{d:`M2 18h4`,key:`1bu2t1`}],[`rect`,{width:`16`,height:`20`,x:`4`,y:`2`,rx:`2`,key:`1nb95v`}],[`path`,{d:`M15 2v20`,key:`dcj49h`}],[`path`,{d:`M15 7h5`,key:`1xj5lc`}],[`path`,{d:`M15 12h5`,key:`w5shd9`}],[`path`,{d:`M15 17h5`,key:`1qaofu`}]]),Se=x(`Plus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]),Ce=x(`RefreshCcw`,[[`path`,{d:`M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`14sxne`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}],[`path`,{d:`M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16`,key:`1hlbsb`}],[`path`,{d:`M16 16h5v5`,key:`ccwih5`}]]),we=x(`Repeat2`,[[`path`,{d:`m2 9 3-3 3 3`,key:`1ltn5i`}],[`path`,{d:`M13 18H7a2 2 0 0 1-2-2V6`,key:`1r6tfw`}],[`path`,{d:`m22 15-3 3-3-3`,key:`4rnwn2`}],[`path`,{d:`M11 6h6a2 2 0 0 1 2 2v10`,key:`2f72bc`}]]),Te=x(`RotateCcw`,[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`1357e3`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}]]),Ee=x(`Settings`,[[`path`,{d:`M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z`,key:`1qme2f`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),De=x(`ShoppingBag`,[[`path`,{d:`M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z`,key:`hou9p0`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M16 10a4 4 0 0 1-8 0`,key:`1ltviw`}]]),Oe=x(`Swords`,[[`polyline`,{points:`14.5 17.5 3 6 3 3 6 3 17.5 14.5`,key:`1hfsw2`}],[`line`,{x1:`13`,x2:`19`,y1:`19`,y2:`13`,key:`1vrmhu`}],[`line`,{x1:`16`,x2:`20`,y1:`16`,y2:`20`,key:`1bron3`}],[`line`,{x1:`19`,x2:`21`,y1:`21`,y2:`19`,key:`13pww6`}],[`polyline`,{points:`14.5 6.5 18 3 21 3 21 6 17.5 9.5`,key:`hbey2j`}],[`line`,{x1:`5`,x2:`9`,y1:`14`,y2:`18`,key:`1hf58s`}],[`line`,{x1:`7`,x2:`4`,y1:`17`,y2:`20`,key:`pidxm4`}],[`line`,{x1:`3`,x2:`5`,y1:`19`,y2:`21`,key:`1pehsh`}]]),ke=x(`Target`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`circle`,{cx:`12`,cy:`12`,r:`6`,key:`1vlfrh`}],[`circle`,{cx:`12`,cy:`12`,r:`2`,key:`1c9p78`}]]),Ae=x(`ThumbsDown`,[[`path`,{d:`M17 14V2`,key:`8ymqnk`}],[`path`,{d:`M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z`,key:`m61m77`}]]),je=x(`ThumbsUp`,[[`path`,{d:`M7 10v12`,key:`1qc93n`}],[`path`,{d:`M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z`,key:`emmmcr`}]]),Me=x(`TrendingUp`,[[`polyline`,{points:`22 7 13.5 15.5 8.5 10.5 2 17`,key:`126l90`}],[`polyline`,{points:`16 7 22 7 22 13`,key:`kwv8wd`}]]),Ne=x(`Upload`,[[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`polyline`,{points:`17 8 12 3 7 8`,key:`t8dd8p`}],[`line`,{x1:`12`,x2:`12`,y1:`3`,y2:`15`,key:`widbto`}]]),Pe=x(`UserRound`,[[`circle`,{cx:`12`,cy:`8`,r:`5`,key:`1hypcn`}],[`path`,{d:`M20 21a8 8 0 0 0-16 0`,key:`rfgkzh`}]]),Fe=x(`Volume2`,[[`path`,{d:`M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`,key:`uqj9uw`}],[`path`,{d:`M16 9a5 5 0 0 1 0 6`,key:`1q6k2b`}],[`path`,{d:`M19.364 18.364a9 9 0 0 0 0-12.728`,key:`ijwkga`}]]),Ie=x(`X`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),Le=c(h(),1),Re=[{route:`dashboard`,label:`首页 Dashboard`,shortLabel:`首页`,icon:oe},{route:`units`,label:`单元学习`,shortLabel:`单元`,icon:ne},{route:`review`,label:`今日复习`,shortLabel:`复习`,icon:Ce},{route:`monster`,label:`打怪闯关`,shortLabel:`打怪`,icon:Oe},{route:`profile`,label:`我的`,shortLabel:`我的`,icon:Pe}],ze=[Re[0],Re[1],{route:`total`,label:`总词库`,icon:ve},Re[2],{route:`quiz`,label:`测试中心`,icon:le},Re[3],{route:`checkin`,label:`打卡签到`,icon:ie},{route:`shop`,label:`兑换商店`,icon:De},{route:`statistics`,label:`学习统计`,icon:oe},{route:`achievements`,label:`成就徽章`,icon:w},{route:`settings`,label:`设置`,icon:Ee}];function Be(e,t){return e===t||t===`units`&&(e===`unitDetail`||e===`study`||e===`recall`)||t===`quiz`&&e===`quiz`}var Ve=o((e=>{var t=u(),n=Symbol.for(`react.element`),r=Symbol.for(`react.fragment`),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var s,c={},l=null,u=null;for(s in r!==void 0&&(l=``+r),t.key!==void 0&&(l=``+t.key),t.ref!==void 0&&(u=t.ref),t)i.call(t,s)&&!o.hasOwnProperty(s)&&(c[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)c[s]===void 0&&(c[s]=t[s]);return{$$typeof:n,type:e,key:l,ref:u,props:c,_owner:a.current}}e.Fragment=r,e.jsx=s,e.jsxs=s})),D=o(((e,t)=>{t.exports=Ve()}))();function He({current:e,onNavigate:t}){return(0,D.jsxs)(`aside`,{className:`fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-slate-200 bg-[#f8fbff]/95 p-4 backdrop-blur lg:block`,children:[(0,D.jsxs)(`button`,{type:`button`,onClick:()=>t(`dashboard`),className:`mb-6 flex items-center gap-3 rounded-lg p-2 text-left transition hover:bg-white`,children:[(0,D.jsx)(`span`,{className:`grid h-11 w-11 place-items-center rounded-lg bg-ink text-paper`,children:(0,D.jsx)(te,{size:22,"aria-hidden":`true`})}),(0,D.jsxs)(`span`,{children:[(0,D.jsx)(`span`,{className:`block text-lg font-semibold leading-none text-ink`,children:`Reword`}),(0,D.jsx)(`span`,{className:`text-xs text-slate-500`,children:`2027考研英语记忆系统`})]})]}),(0,D.jsx)(`nav`,{className:`space-y-1.5`,children:ze.map(n=>{let r=n.icon;return(0,D.jsxs)(`button`,{type:`button`,onClick:()=>t(n.route),className:`flex min-h-11 w-full items-center gap-3 rounded-lg border px-3 text-sm font-medium transition ${Be(e,n.route)?`border-indigo-200 bg-white text-indigo-600 shadow-sm`:`border-transparent text-slate-600 hover:bg-white hover:text-ink`}`,children:[(0,D.jsx)(r,{size:18,"aria-hidden":`true`}),(0,D.jsx)(`span`,{children:n.label})]},n.route)})})]})}function Ue({current:e,onNavigate:t}){return(0,D.jsx)(`nav`,{className:`fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-[#f8fbff]/95 px-2 pb-[max(env(safe-area-inset-bottom),8px)] pt-2 shadow-[0_-8px_20px_rgba(25,33,44,0.06)] backdrop-blur md:hidden`,children:(0,D.jsx)(`div`,{className:`mx-auto grid max-w-xl grid-cols-5 gap-1`,children:Re.map(n=>{let r=n.icon;return(0,D.jsxs)(`button`,{type:`button`,onClick:()=>t(n.route),className:`grid min-h-12 place-items-center rounded-lg border text-xs transition ${Be(e,n.route)?`border-indigo-200 bg-white text-indigo-600`:`border-transparent text-slate-500 hover:bg-white`}`,title:n.shortLabel||n.label,children:[(0,D.jsx)(r,{size:18,"aria-hidden":`true`}),(0,D.jsx)(`span`,{children:n.shortLabel||n.label})]},n.route)})})})}function We(e){return e<768?`mobile`:e<1024?`tablet`:`desktop`}function Ge(e,t){return e>=t?`landscape`:`portrait`}function Ke(){if(typeof window>`u`)return{width:1024,height:768,device:`desktop`,orientation:`landscape`};let e=window.innerWidth,t=window.innerHeight;return{width:e,height:t,device:We(e),orientation:Ge(e,t)}}function qe(){let[e,t]=(0,y.useState)(()=>Ke());return(0,y.useEffect)(()=>{let e=()=>t(Ke());return e(),window.addEventListener(`resize`,e),window.addEventListener(`orientationchange`,e),()=>{window.removeEventListener(`resize`,e),window.removeEventListener(`orientationchange`,e)}},[]),{...e,isMobile:e.device===`mobile`,isTablet:e.device===`tablet`,isDesktop:e.device===`desktop`}}function Je({children:e,className:t=``}){let{isMobile:n,isTablet:r}=qe();return(0,D.jsx)(`main`,{className:`${n?`w-full px-4 pb-28 pt-4`:r?`mx-auto max-w-5xl px-6 pb-12 pt-5`:`mx-auto max-w-7xl px-8 pb-12 pt-6`} ${t}`.trim(),children:e})}function Ye({current:e,onNavigate:t}){return(0,D.jsxs)(`aside`,{className:`fixed inset-y-0 left-0 z-30 hidden w-20 border-r border-slate-200 bg-[#f8fbff]/95 px-2 py-4 backdrop-blur md:block lg:hidden`,children:[(0,D.jsx)(`button`,{type:`button`,onClick:()=>t(`dashboard`),className:`mx-auto mb-6 grid h-11 w-11 place-items-center rounded-lg bg-ink text-paper`,children:(0,D.jsx)(te,{size:21,"aria-hidden":`true`})}),(0,D.jsx)(`nav`,{className:`space-y-2`,children:Re.map(n=>{let r=n.icon;return(0,D.jsxs)(`button`,{type:`button`,onClick:()=>t(n.route),className:`grid min-h-14 w-full place-items-center rounded-lg border text-[11px] transition ${Be(e,n.route)?`border-indigo-200 bg-white text-indigo-600 shadow-sm`:`border-transparent text-slate-500 hover:bg-white`}`,title:n.label,children:[(0,D.jsx)(r,{size:19,"aria-hidden":`true`}),(0,D.jsx)(`span`,{children:n.shortLabel||n.label})]},n.route)})})]})}function Xe({current:e,onNavigate:t,children:n}){return(0,D.jsxs)(`div`,{className:`min-h-screen bg-app text-ink`,children:[(0,D.jsx)(He,{current:e,onNavigate:t}),(0,D.jsx)(Ye,{current:e,onNavigate:t}),(0,D.jsx)(`header`,{className:`sticky top-0 z-30 border-b border-slate-200 bg-[#f8fbff]/95 backdrop-blur md:hidden`,children:(0,D.jsx)(`div`,{className:`mx-auto flex items-center justify-between px-4 py-3`,children:(0,D.jsxs)(`button`,{type:`button`,onClick:()=>t(`dashboard`),className:`flex items-center gap-3 text-left`,children:[(0,D.jsx)(`span`,{className:`grid h-9 w-9 place-items-center rounded-lg border border-ink/15 bg-ink text-paper`,children:(0,D.jsx)(te,{size:20,"aria-hidden":`true`})}),(0,D.jsxs)(`span`,{children:[(0,D.jsx)(`span`,{className:`block text-lg font-semibold leading-none`,children:`Reword`}),(0,D.jsx)(`span`,{className:`text-xs text-slate-500`,children:`2027考研英语红宝书`})]})]})})}),(0,D.jsx)(`div`,{className:`md:pl-20 lg:pl-64`,children:(0,D.jsx)(Je,{className:e===`study`||e===`recall`||e===`quiz`?`px-3 pb-0 pt-2 md:px-6 md:pb-12 md:pt-5 lg:px-8 lg:pt-6`:``,children:n})}),(0,D.jsx)(Ue,{current:e,onNavigate:t})]})}function Ze({reward:e}){return e?(0,D.jsxs)(`div`,{className:`rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800`,children:[(0,D.jsx)(`strong`,{children:e.title}),` +`,e.xp,` XP +`,e.coins,` 金币`]}):null}function Qe({achievement:e,stats:t}){return(0,D.jsxs)(`div`,{className:`rounded-lg border p-4 ${t.checkedAchievementIds.includes(e.id)?`border-spruce/30 bg-spruce/10`:`border-slate-200 bg-white`}`,children:[(0,D.jsx)(`div`,{className:`font-semibold text-ink`,children:e.title}),(0,D.jsx)(`div`,{className:`mt-1 text-sm text-slate-500`,children:e.description}),(0,D.jsxs)(`div`,{className:`mt-3 text-xs font-semibold text-harbor`,children:[`XP `,e.rewardXp,` / 金币 `,e.rewardCoins]})]})}function O(e=new Date){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}function $e(e,t){let n=new Date(e);return n.setDate(n.getDate()+t),n}function et(e,t=new Date){return e?e===O($e(t,-1)):!1}function tt(e,t=new Date){return!!(e&&e===O(t))}function nt(e){let t=Math.floor(e/60),n=Math.floor(t/60),r=t%60;return n<=0?`${t}分钟`:`${n}小时${r?`${r}分钟`:``}`}function rt(e,t=new Date){return Array.from({length:e},(n,r)=>O($e(t,r-e+1)))}function it(e,t=new Date){let n=new Date(`${e}T00:00:00`),r=new Date(t),i=r.getDay()||7;r.setDate(r.getDate()-i+1),r.setHours(0,0,0,0);let a=$e(r,7);return n>=r&&n<a}function at(e,t=new Date){let n=new Date(`${e}T00:00:00`);return n.getFullYear()===t.getFullYear()&&n.getMonth()===t.getMonth()}var ot={xp:300,coins:120,monsterPoints:300};function st(e){return Math.floor(Math.sqrt(e/100))+1}function ct(e){return e<=3?`入门背词者`:e<=6?`稳定学习者`:e<=10?`复习执行者`:e<=15?`考研单词斗士`:e<=20?`长期主义者`:`红宝书征服者`}function lt(e){return e*e*100}function ut(e,t){if(!t)return e;let n=new Date().toISOString();return e.find(e=>e.itemId===t)?e.map(e=>e.itemId===t?{...e,count:e.count+1}:e):[...e,{itemId:t,count:1,obtainedAt:n}]}function k(e,t){let n=O(),r=e.dailyRewardCaps[n]||{xp:0,coins:0,monsterPoints:0},i=t.xp||0,a=t.coins||0,o=t.monsterPoints||0,s=t.bypassDailyCap?i:Math.max(0,Math.min(i,ot.xp-r.xp)),c=t.bypassDailyCap?a:Math.max(0,Math.min(a,ot.coins-r.coins)),l=t.bypassDailyCap?o:Math.max(0,Math.min(o,ot.monsterPoints-r.monsterPoints)),u={id:`reward-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:t.type,title:t.title,description:t.description,xp:s,coins:c,createdAt:new Date().toISOString()},d=e.totalXp+s;return{...e,totalXp:d,level:st(d),coins:e.coins+c,diamonds:e.diamonds+(t.diamonds||0),monsterPoints:e.monsterPoints+l,inventory:ut(e.inventory,t.itemId),rewardHistory:[u,...e.rewardHistory].slice(0,200),dailyRewardCaps:{...e.dailyRewardCaps,[n]:{xp:r.xp+(t.bypassDailyCap?0:s),coins:r.coins+(t.bypassDailyCap?0:c),monsterPoints:r.monsterPoints+(t.bypassDailyCap?0:l)}}}}var dt=`reword-progress-v1`,ft=`reword-user-stats-v1`;function pt(e){return{wordId:e,learned:!1,stage:0,knownCount:0,fuzzyCount:0,forgottenCount:0,correctCount:0,wrongCount:0,reviewHistory:[]}}function mt(e,t,n=new Date){return{...e,reviewHistory:[...e.reviewHistory,{action:t,at:n.toISOString(),stage:e.stage}].slice(-200)}}function ht(){return typeof window<`u`&&`localStorage`in window}function gt(){if(!ht())return{};let e=window.localStorage.getItem(dt);if(!e)return{};try{let t=JSON.parse(e);return t&&typeof t==`object`?t:{}}catch{return{}}}function _t(e){ht()&&window.localStorage.setItem(dt,JSON.stringify(e))}function vt(){ht()&&(window.localStorage.removeItem(dt),window.localStorage.removeItem(ft))}function yt(){return JSON.stringify({progress:gt(),userStats:Ct()},null,2)}function bt(e){let t=JSON.parse(e);if(!t||typeof t!=`object`)throw Error(`进度文件格式不正确`);let n=t,r=n.progress||t;return _t(r),n.userStats&&wt(St(n.userStats)),r}function xt(){return{totalStudyDays:0,currentStreak:0,longestStreak:0,signInStreak:0,lastSignInDate:null,lastCheckInDate:null,totalStudyMinutes:0,totalWordsLearned:0,totalWordsReviewed:0,totalQuizCount:0,totalCorrectCount:0,totalWrongCount:0,totalXp:0,level:1,coins:0,diamonds:0,monsterPoints:0,defeatedMonsters:0,unlockedItems:[`theme-default`,`avatar-default`],equippedTheme:`theme-default`,equippedAvatar:`avatar-default`,checkedAchievementIds:[],defeatedWordIds:[],defeatedBossIds:[],dailyRewardCaps:{},checkInHistory:[],studySessions:[],rewardHistory:[],inventory:[],audioSettings:{autoPlayOnStudy:!1,autoPlayOnRecall:!1,defaultAccent:`us`,speechRate:1,repeatCount:1}}}function St(e){let t=xt();return{...t,...e,audioSettings:{...t.audioSettings,...e.audioSettings},dailyRewardCaps:e.dailyRewardCaps||{},checkInHistory:e.checkInHistory||[],studySessions:e.studySessions||[],rewardHistory:e.rewardHistory||[],inventory:e.inventory||[],unlockedItems:e.unlockedItems||t.unlockedItems,checkedAchievementIds:e.checkedAchievementIds||[],defeatedWordIds:e.defeatedWordIds||[],defeatedBossIds:e.defeatedBossIds||[],level:Math.floor(Math.sqrt((e.totalXp||0)/100))+1}}function Ct(){if(!ht())return xt();let e=window.localStorage.getItem(ft);if(!e)return xt();try{return St(JSON.parse(e))}catch{return xt()}}function wt(e){ht()&&window.localStorage.setItem(ft,JSON.stringify({...e,level:Math.floor(Math.sqrt(e.totalXp/100))+1}))}var Tt=[{stage:1,label:`5分钟`,ms:300*1e3},{stage:2,label:`30分钟`,ms:1800*1e3},{stage:3,label:`12小时`,ms:720*60*1e3},{stage:4,label:`1天`,ms:1440*60*1e3},{stage:5,label:`2天`,ms:2880*60*1e3},{stage:6,label:`4天`,ms:5760*60*1e3},{stage:7,label:`7天`,ms:10080*60*1e3},{stage:8,label:`15天`,ms:360*60*60*1e3}];function A(e){return Tt.find(t=>t.stage===e)||Tt[0]}function Et(e,t){return{...e,learned:!0,firstLearnedAt:e.firstLearnedAt||t.toISOString(),lastReviewedAt:t.toISOString()}}function Dt(e,t=new Date){let n=A(Math.max(1,Math.min(e,8)));return new Date(t.getTime()+n.ms).toISOString()}function Ot(e,t=new Date){return mt({...Et(e,t),nextReviewAt:Dt(1,t)},`learned`,t)}function kt(e,t=new Date){let n=Math.min(8,e.stage+1);return mt({...Et(e,t),stage:n,knownCount:e.knownCount+1,nextReviewAt:Dt(n,t)},`known`,t)}function At(e,t=new Date){return mt({...Et(e,t),fuzzyCount:e.fuzzyCount+1,nextReviewAt:new Date(t.getTime()+1800*1e3).toISOString()},`fuzzy`,t)}function jt(e,t=new Date){return mt({...Et(e,t),stage:0,forgottenCount:e.forgottenCount+1,nextReviewAt:Dt(1,t)},`forgotten`,t)}function Mt(e,t=new Date){return!e?.learned||!e.nextReviewAt?!1:new Date(e.nextReviewAt).getTime()<=t.getTime()}function j(e){return!!(e&&e.stage>=8&&e.correctCount>=2)}function Nt(e,t,n=new Date){return e.filter(e=>Mt(t[e.id],n)).sort((e,n)=>new Date(t[e.id]?.nextReviewAt||0).getTime()-new Date(t[n.id]?.nextReviewAt||0).getTime())}function Pt(e,t){return e.filter(e=>j(t[e.id]))}function Ft(e,t){return e.filter(e=>{let n=t[e.id];return!!(n&&n.fuzzyCount>0&&!j(n))})}function It(e,t){return e.filter(e=>(t[e.id]?.wrongCount||0)>0)}function Lt(e,t=new Date){if(!e)return!1;let n=new Date(e);return n.getFullYear()===t.getFullYear()&&n.getMonth()===t.getMonth()&&n.getDate()===t.getDate()}function Rt(e,t=new Date){let n=new Set;Object.values(e).forEach(e=>{e.reviewHistory.forEach(e=>n.add(e.at.slice(0,10))),e.firstLearnedAt&&n.add(e.firstLearnedAt.slice(0,10))});let r=0,i=new Date(t);for(;n.has(i.toISOString().slice(0,10));)r+=1,i.setDate(i.getDate()-1);return r}function zt(e,t,n=new Date){let r=Nt(e,t,n),i=Pt(e,t),a=Ft(e,t),o=It(e,t),s=e.filter(e=>t[e.id]?.learned),c=s.filter(e=>Lt(t[e.id]?.firstLearnedAt,n)),l=e.filter(e=>(t[e.id]?.forgottenCount||0)>0).length;return{dueCount:r.length,todayNewCount:c.length,totalCount:e.length,learnedCount:s.length,masteredCount:i.length,weakCount:a.length,wrongCount:o.length,forgottenCount:l,streak:Rt(t,n),progressPercent:e.length?Math.round(i.length/e.length*100):0}}var Bt=[{id:`first-word`,title:`第一次学习`,description:`完成第一个单词`,rewardXp:20,rewardCoins:8},{id:`first-correct`,title:`初战告捷`,description:`第一次测试答对`,rewardXp:20,rewardCoins:8},{id:`unit1-20`,title:`Unit1 入门`,description:`Unit1 学习 20 个单词`,rewardXp:40,rewardCoins:15},{id:`hundred-mastered`,title:`百词斩`,description:`掌握 100 个单词`,rewardXp:120,rewardCoins:50,rewardDiamonds:1},{id:`seven-checkin`,title:`七日坚持`,description:`连续打卡 7 天`,rewardXp:90,rewardCoins:30},{id:`thirty-checkin`,title:`长期主义者`,description:`连续打卡 30 天`,rewardXp:220,rewardCoins:80,rewardDiamonds:2}];function Vt(e,t,n){let r=t.filter(e=>n[e.id]?.learned).length,i=Object.values(n).reduce((e,t)=>e+t.correctCount,0),a=t.filter(e=>e.unitId===`unit1`&&n[e.id]?.learned).length,o=t.filter(e=>j(n[e.id])).length,s={"first-word":r>=1,"first-correct":i>=1,"unit1-20":a>=20,"hundred-mastered":o>=100,"seven-checkin":e.currentStreak>=7||e.longestStreak>=7,"thirty-checkin":e.currentStreak>=30||e.longestStreak>=30};return Bt.filter(e=>s[e.id])}function Ht(e,t,n){let r=e;return Vt(e,t,n).forEach(e=>{r.checkedAchievementIds.includes(e.id)||(r=k({...r,checkedAchievementIds:[...r.checkedAchievementIds,e.id]},{type:`achievement`,title:e.title,description:e.description,xp:e.rewardXp,coins:e.rewardCoins,diamonds:e.rewardDiamonds,itemId:`badge-${e.id}`,bypassDailyCap:!0}))}),r}function Ut({stats:e,words:t,progressMap:n}){let r=new Set(Vt(e,t,n).map(e=>e.id));return(0,D.jsxs)(`div`,{className:`space-y-5`,children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Achievements`}),(0,D.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`成就徽章`})]}),(0,D.jsx)(`div`,{className:`grid gap-4 md:grid-cols-2 lg:grid-cols-3`,children:Bt.map(t=>(0,D.jsx)(`div`,{className:!r.has(t.id)&&!e.checkedAchievementIds.includes(t.id)?`opacity-60`:``,children:(0,D.jsx)(Qe,{achievement:t,stats:e})},t.id))})]})}function Wt(e,t,n,r=new Date){let i=O(r),a=e.filter(e=>t[e.id]?.firstLearnedAt?.slice(0,10)===i).length,o=e.filter(e=>t[e.id]?.lastReviewedAt?.slice(0,10)===i&&t[e.id]?.learned).length,s=n.studySessions.filter(e=>e.date===i).reduce((e,t)=>e+t.durationSeconds,0),c=n.studySessions.filter(e=>e.date===i&&e.mode===`quiz`&&e.wordCount>=20).reduce((e,t)=>e+t.wordCount,0),l=e.filter(e=>Mt(t[e.id],r)).length;return{newWords:a,reviewedWords:o,studyMinutes:Math.floor(s/60),testCount:c,dueLeft:l}}function Gt(e,t,n,r=new Date){let i=Wt(e,t,n,r);return[{id:`new-words`,title:`学习 10 个新单词`,current:i.newWords,target:10,reward:`XP 30 / 金币 12`},{id:`review`,title:`完成 20 个复习`,current:i.reviewedWords,target:20,reward:`XP 40 / 金币 16`},{id:`quiz`,title:`完成一次 20 题测试`,current:i.testCount,target:20,reward:`XP 35 / 金币 10`},{id:`time`,title:`学习满 15 分钟`,current:i.studyMinutes,target:15,reward:`XP 20 / 金币 10`}]}function Kt(e,t,n,r=new Date){return tt(n.lastCheckInDate,r)?!1:Gt(e,t,n,r).some(e=>e.current>=e.target)}function qt(e,t=new Date){let n=O(t);if(tt(e.lastSignInDate,t))return e;let r=et(e.lastSignInDate,t)?e.signInStreak+1:1,i=2,a;return r%30==0?(i+=80,a=`theme-morning`):r%14==0?(i+=30,a=`tool-review-boost`):r%7==0?(i+=15,a=`tool-focus-card`):r%3==0&&(i+=5),k({...e,signInStreak:r,lastSignInDate:n},{type:`signin`,title:`每日签到`,description:`连续签到 ${r} 天`,xp:5,coins:i,itemId:a,bypassDailyCap:!0})}function Jt(e,t=new Date){let n=O(t);if(tt(e.lastCheckInDate,t))return e;let r=et(e.lastCheckInDate,t)?e.currentStreak+1:1,i=20,a=50,o=0,s;return[7,14,30,100].includes(r)&&(o+=1),r===3&&(i+=10),r===7&&(i+=30,s=`badge-seven-days`),r===14&&(a+=80,s=`tool-review-boost`),r===30&&(a+=200,i+=80,s=`avatar-thirty-days`),r===100&&(a+=800,i+=300,s=`badge-longterm`),k({...e,currentStreak:r,longestStreak:Math.max(e.longestStreak,r),totalStudyDays:e.checkInHistory.some(e=>e.date===n)?e.totalStudyDays:e.totalStudyDays+1,lastCheckInDate:n,checkInHistory:[{date:n,checkedAt:t.toISOString(),streakDay:r,rewardCoins:i,rewardXp:a,rewardItem:s},...e.checkInHistory].slice(0,365)},{type:`checkin`,title:`完成今日打卡`,description:`连续打卡 ${r} 天`,xp:a,coins:i,diamonds:o,itemId:s,bypassDailyCap:!0})}function Yt(e,t=new Date){let n=new Date(t.getFullYear(),t.getMonth(),1),r=new Date(t.getFullYear(),t.getMonth()+1,0),i=new Set(e.checkInHistory.map(e=>e.date));return Array.from({length:r.getDate()},(e,r)=>{let a=O($e(n,r));return{date:a,day:r+1,checked:i.has(a),today:a===O(t)}})}function M({stats:e}){return(0,D.jsx)(`div`,{className:`grid grid-cols-7 gap-2`,children:Yt(e).map(e=>(0,D.jsx)(`div`,{className:`grid h-10 place-items-center rounded-lg border text-sm ${e.checked?`border-spruce/30 bg-spruce/10 font-semibold text-spruce`:e.today?`border-harbor bg-white text-harbor`:`border-slate-200 bg-[#f8fbff] text-slate-500`}`,children:e.day},e.date))})}function Xt({value:e,max:t=100,label:n}){let r=t===0?0:Math.min(100,Math.round(e/t*100));return(0,D.jsxs)(`div`,{className:`space-y-2`,children:[n?(0,D.jsxs)(`div`,{className:`flex items-center justify-between text-xs text-slate-500`,children:[(0,D.jsx)(`span`,{children:n}),(0,D.jsxs)(`span`,{children:[r,`%`]})]}):null,(0,D.jsx)(`div`,{className:`h-2 overflow-hidden rounded-full bg-slate-200`,children:(0,D.jsx)(`div`,{className:`h-full rounded-full bg-harbor transition-all duration-500`,style:{width:`${r}%`}})})]})}function Zt({words:e,progressMap:t,stats:n,onSignIn:r,onCheckIn:i}){let a=Gt(e,t,n),o=O(),s=n.lastSignInDate===o,c=n.lastCheckInDate===o,l=Kt(e,t,n);return(0,D.jsxs)(`div`,{className:`space-y-5`,children:[(0,D.jsx)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:(0,D.jsxs)(`div`,{className:`flex flex-wrap items-start justify-between gap-4`,children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Check In`}),(0,D.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`打卡中心`}),(0,D.jsx)(`p`,{className:`mt-2 text-sm text-slate-500`,children:`签到是轻量奖励，打卡需要完成学习目标。`})]}),(0,D.jsxs)(`div`,{className:`flex gap-3`,children:[(0,D.jsxs)(`button`,{type:`button`,onClick:r,disabled:s,className:`btn-secondary disabled:opacity-40`,children:[(0,D.jsx)(he,{size:18,"aria-hidden":`true`}),s?`今日已签到`:`每日签到`]}),(0,D.jsxs)(`button`,{type:`button`,onClick:i,disabled:!l||c,className:`btn-primary disabled:opacity-40`,children:[(0,D.jsx)(ce,{size:18,"aria-hidden":`true`}),c?`今日已打卡`:l?`完成今日打卡`:`未达成打卡条件`]})]})]})}),(0,D.jsxs)(`section`,{className:`grid gap-4 lg:grid-cols-[1fr_0.8fr]`,children:[(0,D.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,D.jsx)(`h2`,{className:`font-semibold text-ink`,children:`今日任务`}),(0,D.jsx)(`div`,{className:`mt-4 space-y-4`,children:a.map(e=>(0,D.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-[#f8fbff] p-4`,children:[(0,D.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,D.jsx)(`div`,{className:`font-semibold text-ink`,children:e.title}),(0,D.jsxs)(`div`,{className:`text-sm text-slate-500`,children:[Math.min(e.current,e.target),` / `,e.target]})]}),(0,D.jsx)(`div`,{className:`mt-3`,children:(0,D.jsx)(Xt,{value:e.current,max:e.target,label:e.reward})})]},e.id))})]}),(0,D.jsxs)(`div`,{className:`space-y-4`,children:[(0,D.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,D.jsx)(`h2`,{className:`font-semibold text-ink`,children:`连续记录`}),(0,D.jsxs)(`div`,{className:`mt-4 grid grid-cols-2 gap-3 text-center`,children:[(0,D.jsxs)(`div`,{className:`rounded-lg bg-[#f8fbff] p-4`,children:[(0,D.jsx)(`div`,{className:`text-2xl font-semibold text-harbor`,children:n.currentStreak}),(0,D.jsx)(`div`,{className:`text-sm text-slate-500`,children:`连续打卡`})]}),(0,D.jsxs)(`div`,{className:`rounded-lg bg-[#f8fbff] p-4`,children:[(0,D.jsx)(`div`,{className:`text-2xl font-semibold text-harbor`,children:n.longestStreak}),(0,D.jsx)(`div`,{className:`text-sm text-slate-500`,children:`最长连续`})]})]})]}),(0,D.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,D.jsx)(`h2`,{className:`mb-4 font-semibold text-ink`,children:`本月打卡`}),(0,D.jsx)(M,{stats:n})]})]})]})]})}function Qt({stats:e}){return(0,D.jsxs)(`div`,{className:`flex flex-wrap gap-2 text-sm`,children:[(0,D.jsxs)(`span`,{className:`rounded-lg border border-amber-200 bg-amber-50 px-3 py-1.5 font-semibold text-amber-700`,children:[`金币 `,e.coins]}),(0,D.jsxs)(`span`,{className:`inline-flex items-center gap-1 rounded-lg border border-sky-200 bg-sky-50 px-3 py-1.5 font-semibold text-sky-700`,children:[(0,D.jsx)(me,{size:15,"aria-hidden":`true`}),`钻石 `,e.diamonds]}),(0,D.jsxs)(`span`,{className:`inline-flex items-center gap-1 rounded-lg border border-violet-200 bg-violet-50 px-3 py-1.5 font-semibold text-violet-700`,children:[(0,D.jsx)(Oe,{size:15,"aria-hidden":`true`}),`打怪 `,e.monsterPoints]})]})}function $t({stats:e}){let t=(e.level-1)*(e.level-1)*100,n=lt(e.level),r=e.totalXp-t,i=Math.max(1,n-t);return(0,D.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-soft`,children:[(0,D.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`div`,{className:`text-sm text-slate-500`,children:`当前等级`}),(0,D.jsxs)(`div`,{className:`text-2xl font-semibold text-ink`,children:[`Lv.`,e.level]})]}),(0,D.jsx)(`div`,{className:`text-right text-sm font-semibold text-harbor`,children:ct(e.level)})]}),(0,D.jsx)(`div`,{className:`mt-4`,children:(0,D.jsx)(Xt,{value:r,max:i,label:`XP ${e.totalXp}，距离下一级 ${Math.max(0,n-e.totalXp)}`})})]})}function en(){return(0,D.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,D.jsx)(`div`,{className:`mb-4 flex items-end justify-between gap-4`,children:(0,D.jsx)(`div`,{children:(0,D.jsx)(`h2`,{className:`text-lg font-semibold text-ink`,children:`艾宾浩斯复习时间轴`})})}),(0,D.jsx)(`div`,{className:`grid gap-3 sm:grid-cols-2 lg:grid-cols-4`,children:Tt.map(e=>(0,D.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-[#f8fbff] p-3`,children:[(0,D.jsxs)(`div`,{className:`text-xs text-slate-500`,children:[`Stage `,e.stage]}),(0,D.jsx)(`div`,{className:`mt-1 font-semibold text-harbor`,children:e.label})]},e.stage))})]})}var tn={current:`bg-harbor/10 text-harbor`,spruce:`bg-spruce/10 text-spruce`,copper:`bg-copper/10 text-copper`,slate:`bg-slate-200 text-slate-700`};function nn({label:e,value:t,tone:n=`current`,icon:r}){return(0,D.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-3 shadow-soft`,children:[(0,D.jsx)(`div`,{className:`mb-3 grid h-8 w-8 place-items-center rounded-md ${tn[n]}`,children:(0,D.jsx)(r,{size:18,"aria-hidden":`true`})}),(0,D.jsx)(`div`,{className:`text-2xl font-semibold leading-none text-ink`,children:t}),(0,D.jsx)(`div`,{className:`mt-1 text-sm text-slate-500`,children:e})]})}var rn=new Date(`2026-12-19T14:00:00+08:00`),an=[`坚持就是胜利，重复就是答案。`,`今天多记一轮，考场少慌一分。`,`背词不是拼爆发，是把每天的重复做稳。`,`看似慢的复习，最后会变成最快的提分。`];function on(e=new Date){let t=Math.max(0,rn.getTime()-e.getTime()),n=Math.floor(t/36e5);return{days:Math.floor(t/864e5),hours:n%24,minutes:Math.floor(t/6e4)%60,expired:t===0}}function sn(e=new Date){return an[Math.floor(e.getTime()/864e5)%an.length]}function cn(e,t,n=0){let r=new Date;return{id:`session-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,date:O(r),startedAt:r.toISOString(),endedAt:r.toISOString(),durationSeconds:0,mode:e,unitId:t,wordCount:n}}function ln(e,t){if(t.durationSeconds<30)return e;let n=Math.floor(t.durationSeconds/60);return{...e,totalStudyMinutes:e.totalStudyMinutes+n,studySessions:[t,...e.studySessions].slice(0,500)}}function un(e){let t=O(),n=dn(e.studySessions.filter(e=>e.date===t)),r=dn(e.studySessions.filter(e=>it(e.date))),i=dn(e.studySessions.filter(e=>at(e.date))),a=e.totalStudyMinutes*60,o=new Set(e.studySessions.map(e=>e.date)).size||1,s=Math.max(0,...e.studySessions.map(e=>e.durationSeconds)),c=e.studySessions.reduce((e,t)=>(e[t.mode]=(e[t.mode]||0)+t.durationSeconds,e),{});return{todaySeconds:n,weekSeconds:r,monthSeconds:i,totalSeconds:a,averageSeconds:Math.floor(a/o),longestSeconds:s,modeTotals:c}}function dn(e){return e.reduce((e,t)=>e+t.durationSeconds,0)}function fn(e,t){return rt(t).map(t=>({date:t,seconds:dn(e.studySessions.filter(e=>e.date===t))}))}function pn(e,t){let n=e.reduce((e,n)=>{let r=e[n.unitName]||{total:0,mastered:0};return r.total+=1,j(t[n.id])&&(r.mastered+=1),e[n.unitName]=r,e},{});return Object.entries(n).map(([e,t])=>({unitName:e,...t,percent:t.total?Math.round(t.mastered/t.total*100):0})).sort((e,t)=>t.percent-e.percent)}function mn(e){if(!e)return`未安排`;let t=new Date(e);return Number.isNaN(t.getTime())?`未安排`:new Intl.DateTimeFormat(`zh-CN`,{month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`}).format(t)}function hn(e){return e?.learned?j(e)?`已掌握`:Mt(e)?`待复习`:e.fuzzyCount>0?`需巩固`:`学习中`:`未学习`}function gn(e,t){return{learned:e.filter(e=>t[e.id]?.learned).length,mastered:e.filter(e=>j(t[e.id])).length,due:e.filter(e=>Mt(t[e.id])).length}}function _n({units:e,words:t,progressMap:n,stats:r,onSignIn:i,onNavigateReview:a,onNavigateUnits:o,onNavigateCheckIn:s,onNavigateMonster:c,onNavigateShop:l,onNavigateStatistics:u}){let d=zt(t,n),f=un(r),p=Gt(t,n,r),m=Nt(t,n).slice(0,6),h=O(),g=r.lastSignInDate===h,_=r.lastCheckInDate===h,v=Kt(t,n,r),y=r.rewardHistory.slice(0,3),b=on(),x=sn();return(0,D.jsxs)(`div`,{className:`space-y-5`,children:[(0,D.jsxs)(`section`,{className:`hero-panel relative overflow-hidden`,children:[(0,D.jsx)(`div`,{className:`pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(90deg,rgba(111,185,219,0.28),rgba(255,255,255,0))]`}),(0,D.jsxs)(`div`,{className:`relative max-w-2xl`,children:[(0,D.jsx)(`div`,{className:`mb-3 text-xs font-semibold uppercase text-copper`,children:`Seaside Study Desk`}),(0,D.jsx)(`h1`,{className:`font-display text-3xl font-semibold leading-tight text-ink md:text-4xl`,children:`考研英语倒计时`}),(0,D.jsxs)(`div`,{className:`mt-3 flex flex-wrap items-end gap-3`,children:[(0,D.jsx)(`div`,{className:`font-display text-6xl font-semibold leading-none text-harbor md:text-7xl`,children:b.days}),(0,D.jsxs)(`div`,{className:`pb-2`,children:[(0,D.jsxs)(`div`,{className:`text-lg font-semibold text-ink`,children:[`天 `,b.hours,`小时 `,b.minutes,`分钟`]}),(0,D.jsxs)(`div`,{className:`text-sm text-slate-500`,children:[`预估英语考试：`,rn.getFullYear(),`-12-19 14:00`]})]})]}),(0,D.jsx)(`div`,{className:`mt-4 rounded-lg border border-sky-100 bg-white/80 p-3 text-sm font-semibold leading-6 text-slate-700`,children:x}),(0,D.jsxs)(`div`,{className:`mt-4 grid gap-3 text-sm text-slate-600 sm:grid-cols-3`,children:[(0,D.jsxs)(`div`,{className:`rounded-lg border border-sky-100 bg-white/90 px-3 py-2`,children:[(0,D.jsx)(`span`,{className:`block text-xs text-slate-400`,children:`必备单元`}),(0,D.jsx)(`span`,{className:`font-semibold text-ink`,children:e.length})]}),(0,D.jsxs)(`div`,{className:`rounded-lg border border-sky-100 bg-white/90 px-3 py-2`,children:[(0,D.jsx)(`span`,{className:`block text-xs text-slate-400`,children:`词量`}),(0,D.jsx)(`span`,{className:`font-semibold text-ink`,children:t.length})]}),(0,D.jsxs)(`button`,{type:`button`,onClick:u,className:`rounded-lg border border-sky-100 bg-white/90 px-3 py-2 text-left transition hover:border-harbor hover:text-harbor`,children:[(0,D.jsx)(`span`,{className:`block text-xs text-slate-400`,children:`今日时长`}),(0,D.jsx)(`span`,{className:`font-semibold text-ink`,children:nt(f.todaySeconds)})]})]}),(0,D.jsxs)(`div`,{className:`mt-5 flex flex-wrap gap-3`,children:[(0,D.jsxs)(`button`,{type:`button`,onClick:a,className:`btn-primary`,children:[(0,D.jsx)(ae,{size:18,"aria-hidden":`true`}),`开始今日复习`]}),(0,D.jsxs)(`button`,{type:`button`,onClick:o,className:`btn-secondary`,children:[(0,D.jsx)(ve,{size:18,"aria-hidden":`true`}),`进入单元`]}),(0,D.jsxs)(`button`,{type:`button`,onClick:c,className:`btn-secondary`,children:[(0,D.jsx)(Oe,{size:18,"aria-hidden":`true`}),`打怪进度`]})]})]}),(0,D.jsxs)(`div`,{className:`hero-meter relative`,children:[(0,D.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`div`,{className:`text-sm text-slate-500`,children:`掌握进度`}),(0,D.jsxs)(`div`,{className:`mt-2 text-5xl font-semibold text-harbor`,children:[d.progressPercent,`%`]})]}),(0,D.jsx)(Qt,{stats:r})]}),(0,D.jsx)(`div`,{className:`mt-4`,children:(0,D.jsx)(Xt,{value:d.masteredCount,max:d.totalCount,label:`${d.masteredCount}/${d.totalCount}`})}),(0,D.jsxs)(`div`,{className:`mt-4 grid grid-cols-2 gap-2 text-sm`,children:[(0,D.jsxs)(`button`,{type:`button`,onClick:i,disabled:g,className:`btn-secondary min-h-10 disabled:opacity-45`,children:[(0,D.jsx)(he,{size:17,"aria-hidden":`true`}),g?`已签到`:`签到`]}),(0,D.jsxs)(`button`,{type:`button`,onClick:s,className:_||v?`btn-primary min-h-10`:`btn-secondary min-h-10`,children:[(0,D.jsx)(ke,{size:17,"aria-hidden":`true`}),_?`已打卡`:v?`去打卡`:`看任务`]})]})]})]}),(0,D.jsxs)(`section`,{className:`grid gap-4 lg:grid-cols-[1fr_0.9fr]`,children:[(0,D.jsx)($t,{stats:r}),(0,D.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-soft`,children:[(0,D.jsxs)(`div`,{className:`mb-3 flex items-center justify-between gap-3`,children:[(0,D.jsx)(`h2`,{className:`font-semibold text-ink`,children:`今日打卡条件`}),(0,D.jsx)(`button`,{type:`button`,onClick:s,className:`text-sm font-semibold text-harbor`,children:`打卡中心`})]}),(0,D.jsx)(`div`,{className:`grid gap-3 sm:grid-cols-2`,children:p.map(e=>(0,D.jsxs)(`div`,{className:`rounded-lg border border-sky-100 bg-[#f8fbff] p-3`,children:[(0,D.jsxs)(`div`,{className:`mb-2 flex items-center justify-between gap-3 text-sm`,children:[(0,D.jsx)(`span`,{className:`font-semibold text-ink`,children:e.title}),(0,D.jsxs)(`span`,{className:`text-slate-500`,children:[Math.min(e.current,e.target),`/`,e.target]})]}),(0,D.jsx)(Xt,{value:e.current,max:e.target,label:e.reward})]},e.id))})]})]}),(0,D.jsxs)(`section`,{className:`rounded-lg border border-sky-100 bg-white p-5 shadow-soft`,children:[(0,D.jsxs)(`div`,{className:`flex flex-wrap items-start justify-between gap-4`,children:[(0,D.jsxs)(`div`,{children:[(0,D.jsxs)(`div`,{className:`flex items-center gap-2 text-sm font-semibold text-harbor`,children:[(0,D.jsx)(we,{size:18,"aria-hidden":`true`}),`重复记忆节奏`]}),(0,D.jsx)(`h2`,{className:`mt-2 text-xl font-semibold text-ink`,children:`新学一次，复习多轮，测试收口`})]}),(0,D.jsx)(`button`,{type:`button`,onClick:a,className:`btn-secondary`,children:`进入复习`})]}),(0,D.jsx)(`div`,{className:`mt-4 grid gap-3 md:grid-cols-4`,children:[[`初学`,`先把释义看清，加入今日学习`],[`5分钟`,`马上复现一次，挡住第一波遗忘`],[`间隔复习`,`按 Stage 自动推到 30 分钟、12 小时、1 天`],[`测试`,`用选择题把熟悉变成稳定掌握`]].map(([e,t])=>(0,D.jsxs)(`div`,{className:`rounded-lg border border-sky-100 bg-[#f8fbff] p-4`,children:[(0,D.jsx)(`div`,{className:`text-base font-semibold text-ink`,children:e}),(0,D.jsx)(`div`,{className:`mt-2 text-sm leading-6 text-slate-500`,children:t})]},e))})]}),(0,D.jsxs)(`section`,{className:`grid gap-4 sm:grid-cols-2 lg:grid-cols-4`,children:[(0,D.jsx)(nn,{label:`今日应复习`,value:d.dueCount,icon:ae,tone:`current`}),(0,D.jsx)(nn,{label:`今日新学`,value:d.todayNewCount,icon:ee,tone:`spruce`}),(0,D.jsx)(nn,{label:`连续打卡`,value:r.currentStreak,icon:E,tone:`copper`}),(0,D.jsx)(nn,{label:`今日学习`,value:nt(f.todaySeconds),icon:oe,tone:`slate`}),(0,D.jsx)(nn,{label:`已掌握`,value:d.masteredCount,icon:ke,tone:`spruce`}),(0,D.jsx)(nn,{label:`不熟词`,value:d.weakCount,icon:Me,tone:`copper`}),(0,D.jsx)(nn,{label:`遗忘词`,value:d.forgottenCount,icon:pe,tone:`slate`}),(0,D.jsx)(nn,{label:`错题词`,value:d.wrongCount,icon:ye,tone:`current`})]}),(0,D.jsxs)(`div`,{className:`grid gap-5 lg:grid-cols-[1.15fr_0.85fr]`,children:[(0,D.jsx)(en,{}),(0,D.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,D.jsxs)(`div`,{className:`mb-4 flex items-center justify-between gap-4`,children:[(0,D.jsx)(`h2`,{className:`text-lg font-semibold text-ink`,children:`最近需要复习`}),(0,D.jsx)(`button`,{type:`button`,onClick:a,className:`text-sm font-semibold text-harbor`,children:`全部查看`})]}),(0,D.jsx)(`div`,{className:`space-y-3`,children:m.length?m.map(e=>(0,D.jsxs)(`div`,{className:`flex items-center justify-between gap-3 rounded-lg border border-sky-100 bg-[#f8fbff] p-3`,children:[(0,D.jsxs)(`div`,{className:`min-w-0`,children:[(0,D.jsx)(`div`,{className:`truncate font-semibold text-ink`,children:e.word}),(0,D.jsx)(`div`,{className:`text-xs text-slate-500`,children:e.unitName})]}),(0,D.jsx)(`div`,{className:`shrink-0 text-xs text-copper`,children:mn(n[e.id]?.nextReviewAt)})]},e.id)):(0,D.jsx)(`p`,{className:`rounded-lg border border-sky-100 bg-[#f8fbff] p-4 text-sm leading-6 text-slate-500`,children:`现在没有到期词，可以进入单元继续初学。`})})]})]}),(0,D.jsxs)(`section`,{className:`grid gap-4 lg:grid-cols-[0.9fr_1.1fr]`,children:[(0,D.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,D.jsxs)(`div`,{className:`mb-4 flex items-center justify-between gap-3`,children:[(0,D.jsx)(`h2`,{className:`font-semibold text-ink`,children:`快捷入口`}),(0,D.jsxs)(`button`,{type:`button`,onClick:l,className:`inline-flex items-center gap-1 text-sm font-semibold text-harbor`,children:[(0,D.jsx)(De,{size:16,"aria-hidden":`true`}),`商店`]})]}),(0,D.jsxs)(`div`,{className:`grid gap-3 sm:grid-cols-2`,children:[(0,D.jsxs)(`button`,{type:`button`,onClick:c,className:`mode-card`,children:[(0,D.jsx)(Oe,{size:20,"aria-hidden":`true`}),(0,D.jsx)(`span`,{children:`单词打怪`})]}),(0,D.jsxs)(`button`,{type:`button`,onClick:u,className:`mode-card`,children:[(0,D.jsx)(oe,{size:20,"aria-hidden":`true`}),(0,D.jsx)(`span`,{children:`学习统计`})]})]})]}),(0,D.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,D.jsx)(`h2`,{className:`font-semibold text-ink`,children:`最新奖励`}),(0,D.jsx)(`div`,{className:`mt-4 space-y-3`,children:y.length?y.map(e=>(0,D.jsxs)(`div`,{className:`flex items-center justify-between gap-3 rounded-lg border border-sky-100 bg-[#f8fbff] p-3`,children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`div`,{className:`font-semibold text-ink`,children:e.title}),(0,D.jsx)(`div`,{className:`text-xs text-slate-500`,children:e.description})]}),(0,D.jsxs)(`div`,{className:`shrink-0 text-sm font-semibold text-harbor`,children:[`+`,e.xp,` XP`]})]},e.id)):(0,D.jsx)(`p`,{className:`rounded-lg border border-sky-100 bg-[#f8fbff] p-4 text-sm text-slate-500`,children:`还没有奖励记录，先签到或学一个新词。`})})]})]})]})}function vn(e,t){let n=t[e.id];if(j(n))return 0;if(!n)return 100;let r=n.knownCount*25+n.correctCount*20+n.fuzzyCount*10,i=n.forgottenCount*10+n.wrongCount*5;return Math.max(5,Math.min(100,100-r+i))}function yn(e,t,n){let r=e.filter(e=>j(t[e.id])).length;return{defeatedWords:r,activeMonsters:e.length-r,defeatedBosses:n.defeatedBossIds.length,monsterPoints:n.monsterPoints}}function bn(e,t,n){let r=e.words.filter(e=>t[e.id]?.learned).length,i=e.words.length?Math.round(r/e.words.length*100):0,a=Nt(e.words,t).length,o=n.defeatedBossIds.includes(e.id),s=i>=80&&a===0;return{id:e.id,name:`${e.name} Boss`,subtitle:`${xn(e.order)}·Unit${e.order}`,learnedPercent:i,dueLeft:a,defeated:o,eligible:s,hp:o?0:s?100:Math.max(20,100-i)}}function xn(e){let t=[`遗忘兽`,`拖延兽`,`混淆兽`,`倦怠兽`,`焦虑兽`,`懒散兽`,`粗心兽`,`瓶颈兽`];return t[(e-1)%t.length]}function Sn({unit:e,progressMap:t,stats:n,onChallenge:r}){let i=bn(e,t,n);return(0,D.jsxs)(`div`,{className:`rounded-lg border border-violet-200 bg-white p-4 shadow-soft`,children:[(0,D.jsxs)(`div`,{className:`flex items-start justify-between gap-3`,children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`div`,{className:`font-semibold text-ink`,children:i.subtitle}),(0,D.jsxs)(`div`,{className:`mt-1 text-sm text-slate-500`,children:[`学习 `,i.learnedPercent,`% / 到期 `,i.dueLeft]})]}),(0,D.jsx)(`button`,{type:`button`,onClick:()=>r(e.id),disabled:!i.eligible||i.defeated,className:`btn-secondary min-h-9 px-3 py-1.5 disabled:opacity-40`,children:i.defeated?`已击败`:`挑战`})]}),(0,D.jsx)(`div`,{className:`mt-3`,children:(0,D.jsx)(Xt,{value:100-i.hp,max:100,label:i.eligible?`可挑战`:`解锁进度`})})]})}function Cn({word:e,progressMap:t}){let n=vn(e,t);return(0,D.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-soft`,children:[(0,D.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`div`,{className:`font-semibold text-ink`,children:e.word}),(0,D.jsx)(`div`,{className:`text-sm text-slate-500`,children:e.unitName})]}),(0,D.jsxs)(`div`,{className:`text-sm font-semibold text-violet-700`,children:[`HP `,n]})]}),(0,D.jsx)(`div`,{className:`mt-3`,children:(0,D.jsx)(Xt,{value:100-n,max:100,label:n<=0?`已击败`:`攻击进度`})})]})}function wn({words:e,units:t,progressMap:n,stats:r,onChallengeBoss:i}){let a=yn(e,n,r),o=e.filter(e=>!r.defeatedWordIds.includes(e.id)).slice(0,6);return(0,D.jsxs)(`div`,{className:`space-y-5`,children:[(0,D.jsxs)(`section`,{className:`rounded-lg border border-violet-200 bg-white p-5 shadow-soft`,children:[(0,D.jsxs)(`div`,{className:`flex flex-wrap items-end justify-between gap-4`,children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`div`,{className:`text-xs font-semibold uppercase text-violet-700`,children:`Monster`}),(0,D.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`单词打怪`}),(0,D.jsx)(`p`,{className:`mt-2 text-sm text-slate-500`,children:`记住、复习、答对都会攻击单词怪物。`})]}),(0,D.jsx)(Qt,{stats:r})]}),(0,D.jsxs)(`div`,{className:`mt-5 grid gap-3 sm:grid-cols-3`,children:[(0,D.jsxs)(`div`,{className:`rounded-lg bg-violet-50 p-4 text-center`,children:[(0,D.jsx)(`div`,{className:`text-2xl font-semibold`,children:a.monsterPoints}),(0,D.jsx)(`div`,{className:`text-sm text-slate-500`,children:`打怪积分`})]}),(0,D.jsxs)(`div`,{className:`rounded-lg bg-violet-50 p-4 text-center`,children:[(0,D.jsx)(`div`,{className:`text-2xl font-semibold`,children:a.defeatedWords}),(0,D.jsx)(`div`,{className:`text-sm text-slate-500`,children:`击败小怪`})]}),(0,D.jsxs)(`div`,{className:`rounded-lg bg-violet-50 p-4 text-center`,children:[(0,D.jsx)(`div`,{className:`text-2xl font-semibold`,children:a.defeatedBosses}),(0,D.jsx)(`div`,{className:`text-sm text-slate-500`,children:`击败 Boss`})]})]})]}),(0,D.jsx)(`section`,{className:`grid gap-4 lg:grid-cols-2`,children:t.map(e=>(0,D.jsx)(Sn,{unit:e,progressMap:n,stats:r,onChallenge:i},e.id))}),(0,D.jsx)(`section`,{className:`grid gap-4 lg:grid-cols-2`,children:o.map(e=>(0,D.jsx)(Cn,{word:e,progressMap:n},e.id))})]})}function Tn({words:e,progressMap:t,stats:n,onNavigateCheckIn:r,onNavigateRewards:i,onNavigateShop:a,onNavigateStatistics:o,onNavigateAchievements:s,onNavigateSettings:c,onExport:l,onImport:u,onReset:d}){let f=zt(e,t),p=un(n);return(0,D.jsxs)(`div`,{className:`space-y-5`,children:[(0,D.jsx)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:(0,D.jsxs)(`div`,{className:`flex flex-wrap items-start justify-between gap-4`,children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Profile`}),(0,D.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`我的学习账户`}),(0,D.jsx)(`p`,{className:`mt-2 text-sm text-slate-500`,children:`进度、奖励、设置都在这里统一管理。`})]}),(0,D.jsx)(Qt,{stats:n})]})}),(0,D.jsxs)(`section`,{className:`grid gap-4 lg:grid-cols-[0.95fr_1.05fr]`,children:[(0,D.jsx)($t,{stats:n}),(0,D.jsxs)(`div`,{className:`grid gap-4 sm:grid-cols-2`,children:[(0,D.jsx)(nn,{label:`总学习时长`,value:nt(p.totalSeconds),icon:oe,tone:`current`}),(0,D.jsx)(nn,{label:`连续打卡`,value:n.currentStreak,icon:ie,tone:`copper`}),(0,D.jsx)(nn,{label:`已学词数`,value:f.learnedCount,icon:Ne,tone:`spruce`}),(0,D.jsx)(nn,{label:`掌握词数`,value:f.masteredCount,icon:w,tone:`slate`})]})]}),(0,D.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,D.jsx)(`h2`,{className:`text-lg font-semibold text-ink`,children:`功能入口`}),(0,D.jsxs)(`div`,{className:`mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3`,children:[(0,D.jsxs)(`button`,{type:`button`,onClick:r,className:`mode-card`,children:[(0,D.jsx)(ie,{size:20,"aria-hidden":`true`}),(0,D.jsx)(`span`,{children:`打卡中心`})]}),(0,D.jsxs)(`button`,{type:`button`,onClick:i,className:`mode-card`,children:[(0,D.jsx)(he,{size:20,"aria-hidden":`true`}),(0,D.jsx)(`span`,{children:`奖励记录`})]}),(0,D.jsxs)(`button`,{type:`button`,onClick:a,className:`mode-card`,children:[(0,D.jsx)(De,{size:20,"aria-hidden":`true`}),(0,D.jsx)(`span`,{children:`兑换商店`})]}),(0,D.jsxs)(`button`,{type:`button`,onClick:o,className:`mode-card`,children:[(0,D.jsx)(oe,{size:20,"aria-hidden":`true`}),(0,D.jsx)(`span`,{children:`学习统计`})]}),(0,D.jsxs)(`button`,{type:`button`,onClick:s,className:`mode-card`,children:[(0,D.jsx)(w,{size:20,"aria-hidden":`true`}),(0,D.jsx)(`span`,{children:`成就徽章`})]}),(0,D.jsxs)(`button`,{type:`button`,onClick:c,className:`mode-card`,children:[(0,D.jsx)(Ee,{size:20,"aria-hidden":`true`}),(0,D.jsx)(`span`,{children:`设置`})]})]})]}),(0,D.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,D.jsx)(`h2`,{className:`text-lg font-semibold text-ink`,children:`进度管理`}),(0,D.jsxs)(`div`,{className:`mt-5 grid gap-3 sm:grid-cols-3`,children:[(0,D.jsxs)(`button`,{type:`button`,onClick:l,className:`btn-secondary`,children:[(0,D.jsx)(de,{size:18,"aria-hidden":`true`}),`导出进度`]}),(0,D.jsxs)(`label`,{className:`btn-secondary cursor-pointer`,children:[(0,D.jsx)(Ne,{size:18,"aria-hidden":`true`}),`导入进度`,(0,D.jsx)(`input`,{type:`file`,accept:`application/json,.json`,className:`sr-only`,onChange:e=>{let t=e.target.files?.[0];t&&(t.text().then(u),e.target.value=``)}})]}),(0,D.jsxs)(`button`,{type:`button`,onClick:d,className:`btn-danger`,children:[(0,D.jsx)(Te,{size:18,"aria-hidden":`true`}),`清空进度`]})]})]})]})}var En=null,Dn=null,On={autoPlayOnStudy:!1,autoPlayOnRecall:!1,defaultAccent:`us`,speechRate:1,repeatCount:1};function kn(e){return e.toLowerCase().replace(/[^a-z-]/g,``)}function An(){if(!(`speechSynthesis`in window))return Promise.resolve([]);let e=window.speechSynthesis.getVoices();return e.length?Promise.resolve(e):Dn||(Dn=new Promise(e=>{let t=()=>{window.speechSynthesis.onvoiceschanged=null,e(window.speechSynthesis.getVoices())};window.speechSynthesis.onvoiceschanged=t,window.setTimeout(t,900)}),Dn)}function jn(){En&&=(En.pause(),En.currentTime=0,null),`speechSynthesis`in window&&window.speechSynthesis.cancel()}function Mn(e,t){return new Promise((n,r)=>{let i=new Audio(`/reword/audio/${t}/${kn(e)}.mp3`);En=i,i.onended=()=>n(),i.onerror=()=>r(Error(`local audio missing`)),i.play().catch(r)})}function Nn(e){if(!(`speechSynthesis`in window))return;let t=e===`us`?`en-US`:`en-GB`,n=window.speechSynthesis.getVoices();return n.find(e=>e.lang===t)||n.find(e=>e.lang.toLowerCase().startsWith(t.toLowerCase()))}async function Pn(e,t,n={}){return await An(),new Promise((r,i)=>{if(!(`speechSynthesis`in window)){i(Error(`当前浏览器不支持朗读，请添加音频文件。`));return}let a={...On,...n},o=t===`us`?`en-US`:`en-GB`,s=0,c=()=>{let n=new SpeechSynthesisUtterance(e);n.lang=o,n.rate=a.speechRate;let l=Nn(t);l&&(n.voice=l),n.onend=()=>{s+=1,s<a.repeatCount?c():r()},n.onerror=e=>{if(e.error===`interrupted`||e.error===`canceled`){r();return}i(Error(`当前浏览器朗读失败，请检查系统语音或浏览器权限。`))},window.speechSynthesis.speak(n)};c()})}async function Fn(e,t,n={}){jn();try{await Mn(e,t)}catch{await Pn(e.replace(/-/g,` `),t,n)}}function N({word:e,accent:t,settings:n,compact:r=!1}){let[i,a]=(0,y.useState)(!1);return(0,D.jsxs)(`button`,{type:`button`,onClick:async()=>{a(!0);try{await Fn(e,t,n)}catch(e){window.alert(e instanceof Error?e.message:`当前浏览器不支持朗读，请添加音频文件。`)}finally{a(!1)}},className:`inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white font-semibold text-harbor transition hover:border-harbor ${r?`h-8 px-2.5 text-xs`:`px-2.5 py-1.5 text-sm`}`,children:[(0,D.jsx)(Fe,{size:r?13:15,"aria-hidden":`true`}),t.toUpperCase(),i?`...`:``]})}function In({title:e,body:t,actionLabel:n,onAction:r}){return(0,D.jsxs)(`div`,{className:`rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center shadow-soft`,children:[(0,D.jsx)(`div`,{className:`mx-auto mb-4 grid h-12 w-12 place-items-center rounded-lg border border-harbor/15 bg-[#f8fbff] text-harbor`,children:(0,D.jsx)(ge,{size:22,"aria-hidden":`true`})}),(0,D.jsx)(`h3`,{className:`font-semibold text-ink`,children:e}),t?(0,D.jsx)(`p`,{className:`mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500`,children:t}):null,n&&r?(0,D.jsx)(`button`,{type:`button`,onClick:r,className:`btn-primary mt-5`,children:n}):null]})}function Ln({open:e,onClose:t,word:n,phonetic:r,definitions:i,bottomOffset:a=`calc(128px + env(safe-area-inset-bottom))`}){return e?(0,D.jsxs)(`div`,{className:`fixed inset-x-3 z-50 rounded-lg border border-slate-200 bg-white p-3 shadow-lifted md:hidden`,style:{bottom:a,maxHeight:`42dvh`},role:`dialog`,"aria-modal":`false`,"aria-label":`${n} 完整释义`,children:[(0,D.jsxs)(`div`,{className:`mb-2 flex items-start justify-between gap-3`,children:[(0,D.jsxs)(`div`,{className:`min-w-0`,children:[(0,D.jsx)(`div`,{className:`truncate text-lg font-semibold leading-tight text-ink`,children:n}),r?(0,D.jsx)(`div`,{className:`text-xs text-slate-500`,children:r}):null]}),(0,D.jsx)(`button`,{type:`button`,onClick:t,className:`icon-btn h-8 w-8`,"aria-label":`关闭释义`,children:(0,D.jsx)(Ie,{size:15,"aria-hidden":`true`})})]}),(0,D.jsx)(`div`,{className:`max-h-[calc(42dvh-64px)] space-y-2 overflow-y-auto pr-1`,children:i.map((e,t)=>(0,D.jsxs)(`div`,{className:`flex gap-2 rounded-lg border border-sky-100 bg-[#f8fbff] p-2`,children:[(0,D.jsx)(`span`,{className:`shrink-0 rounded-md bg-white px-2 py-1 text-[12px] font-semibold text-harbor`,children:e.pos||`释义`}),(0,D.jsx)(`p`,{className:`min-w-0 text-[13px] font-semibold leading-snug text-slate-950`,children:e.meaning})]},`${n}-sheet-${t}`))})]}):null}function Rn({word:e,progress:t,compact:n=!1,mobileCompact:r=!1,audioSettings:i}){let[a,o]=(0,y.useState)(!1),s=(0,y.useMemo)(()=>r?e.definitions.slice(0,2):e.definitions,[r,e.definitions]);return r?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(`article`,{className:`overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft`,children:[(0,D.jsxs)(`div`,{className:`border-b border-slate-200 bg-[#f8fbff] p-3`,children:[(0,D.jsxs)(`div`,{className:`mb-2 flex items-center justify-between gap-2`,children:[(0,D.jsx)(`span`,{className:`truncate rounded-md border border-harbor/15 bg-white px-2 py-0.5 text-[11px] font-medium text-harbor`,children:e.unitName}),(0,D.jsxs)(`span`,{className:`text-[11px] text-slate-500`,children:[`#`,e.order]})]}),(0,D.jsxs)(`div`,{className:`flex items-end justify-between gap-3`,children:[(0,D.jsxs)(`div`,{className:`min-w-0`,children:[(0,D.jsx)(`h1`,{className:`truncate font-semibold leading-tight text-ink ${e.word.length>12?`text-2xl`:`text-3xl`}`,children:e.word}),(0,D.jsx)(`p`,{className:`mt-1 text-xs font-medium text-slate-500`,children:e.phonetic})]}),(0,D.jsxs)(`div`,{className:`flex shrink-0 gap-1.5`,children:[(0,D.jsx)(N,{word:e.word,accent:`us`,settings:i,compact:!0}),(0,D.jsx)(N,{word:e.word,accent:`uk`,settings:i,compact:!0})]})]})]}),(0,D.jsxs)(`div`,{className:`p-3`,children:[e.image?(0,D.jsx)(`div`,{className:`mb-2 grid h-20 place-items-center overflow-hidden rounded-lg border border-sky-100 bg-word-placeholder`,children:(0,D.jsx)(`img`,{src:e.image,alt:``,className:`h-full w-full object-contain`,loading:`lazy`})}):null,(0,D.jsx)(`div`,{className:`space-y-2`,children:s.map((t,n)=>(0,D.jsxs)(`div`,{className:`flex gap-2.5 rounded-lg border border-sky-100 bg-[#f8fbff] p-2.5`,children:[(0,D.jsx)(`span`,{className:`shrink-0 rounded-md bg-white px-2.5 py-1 text-[13px] font-semibold text-harbor`,children:t.pos||`释义`}),(0,D.jsx)(`p`,{className:`mobile-def-clamp min-w-0 text-[16px] font-semibold leading-snug text-slate-950`,children:t.meaning})]},`${e.id}-compact-def-${n}`))}),e.definitions.length>2||e.definitions.some(e=>e.meaning.length>28)?(0,D.jsx)(`button`,{type:`button`,onClick:()=>o(!0),className:`mt-2 text-xs font-semibold text-harbor`,children:`展开完整释义`}):null,(0,D.jsxs)(`div`,{className:`mt-2 flex flex-wrap gap-1.5 text-[11px] text-slate-600`,children:[(0,D.jsxs)(`span`,{className:`rounded-md border border-slate-200 bg-white px-2 py-1`,children:[`S`,t?.stage||0]}),(0,D.jsx)(`span`,{className:`rounded-md border border-slate-200 bg-white px-2 py-1`,children:hn(t)}),(0,D.jsx)(`span`,{className:`rounded-md border border-slate-200 bg-white px-2 py-1`,children:mn(t?.nextReviewAt)})]})]})]}),(0,D.jsx)(Ln,{open:a,onClose:()=>o(!1),word:e.word,phonetic:e.phonetic,definitions:e.definitions})]}):(0,D.jsxs)(`article`,{className:`overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft`,children:[n?null:(0,D.jsxs)(`div`,{className:`border-b border-slate-200 bg-[#f8fbff] p-5 md:p-6`,children:[(0,D.jsxs)(`div`,{className:`mb-5 flex items-center justify-between gap-3`,children:[(0,D.jsx)(`span`,{className:`rounded-md border border-harbor/15 bg-white px-2.5 py-1 text-xs font-medium text-harbor`,children:e.unitName}),(0,D.jsxs)(`span`,{className:`text-xs text-slate-500`,children:[`#`,e.order]})]}),(0,D.jsxs)(`div`,{className:`flex flex-wrap items-end justify-between gap-4`,children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`h1`,{className:`break-words text-5xl font-semibold leading-tight text-ink md:text-6xl`,children:e.word}),(0,D.jsx)(`p`,{className:`mt-3 text-xl font-medium text-slate-600 md:text-2xl`,children:e.phonetic})]}),(0,D.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,D.jsx)(N,{word:e.word,accent:`us`,settings:i}),(0,D.jsx)(N,{word:e.word,accent:`uk`,settings:i})]})]})]}),(0,D.jsxs)(`div`,{className:n?`p-4`:`p-5 md:p-6`,children:[n?(0,D.jsxs)(`div`,{className:`mb-3 flex items-start justify-between gap-3`,children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`h3`,{className:`break-words text-2xl font-semibold text-ink`,children:e.word}),(0,D.jsx)(`p`,{className:`text-base font-medium text-slate-600`,children:e.phonetic}),(0,D.jsxs)(`div`,{className:`mt-2 flex gap-2`,children:[(0,D.jsx)(N,{word:e.word,accent:`us`,settings:i}),(0,D.jsx)(N,{word:e.word,accent:`uk`,settings:i})]})]}),(0,D.jsxs)(`span`,{className:`rounded-md border border-harbor/15 bg-[#f8fbff] px-2.5 py-1 text-xs text-harbor`,children:[`#`,e.order]})]}):null,(0,D.jsx)(`div`,{className:`space-y-3`,children:e.definitions.map((t,n)=>(0,D.jsxs)(`div`,{className:`flex gap-3 rounded-lg border border-slate-200 bg-[#f8fbff] p-4`,children:[(0,D.jsx)(`span`,{className:`shrink-0 rounded-md border border-harbor/15 bg-white px-3 py-1.5 text-base font-semibold text-harbor`,children:t.pos||`释义`}),(0,D.jsx)(`p`,{className:`min-w-0 text-xl font-semibold leading-9 text-slate-950 md:text-2xl md:leading-10`,children:t.meaning})]},`${e.id}-def-${n}`))}),(0,D.jsxs)(`div`,{className:`mt-4 grid gap-3 text-sm sm:grid-cols-3`,children:[(0,D.jsxs)(`div`,{className:`flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-600`,children:[(0,D.jsx)(_e,{size:16,"aria-hidden":`true`}),`Stage `,t?.stage||0]}),(0,D.jsxs)(`div`,{className:`flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-600`,children:[(0,D.jsx)(ue,{size:16,"aria-hidden":`true`}),mn(t?.nextReviewAt)]}),(0,D.jsxs)(`div`,{className:`flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-600`,children:[(0,D.jsx)(ce,{size:16,"aria-hidden":`true`}),hn(t)]})]})]})]})}function zn(e){if(!(e instanceof HTMLElement))return!1;let t=e.tagName.toLowerCase();return t===`input`||t===`textarea`||t===`select`||e.isContentEditable}function Bn(e,t=!0){let{isDesktop:n}=qe();(0,y.useEffect)(()=>{if(!t||!n)return;let r=t=>{if(zn(t.target))return;let n=(e,n=!0)=>{e&&(n&&t.preventDefault(),e())};t.code===`Space`?n(e.onSpace):t.key===`ArrowRight`?n(e.onArrowRight):t.key===`ArrowLeft`?n(e.onArrowLeft):t.key===`1`?n(e.onOne):t.key===`2`?n(e.onTwo):t.key===`3`?n(e.onThree):t.key===`Enter`?n(e.onEnter):t.key===`Escape`&&n(e.onEscape,!1)};return window.addEventListener(`keydown`,r),()=>window.removeEventListener(`keydown`,r)},[t,e,n])}function Vn(e){return e.definitions.map(e=>`${e.pos} ${e.meaning}`.trim()).join(`；`)}function Hn(e){return[...e].sort(()=>Math.random()-.5)}function Un(e,t=e){return e.map(e=>{let n=Vn(e),r=Hn(t.filter(t=>t.id!==e.id)).map(Vn).filter(e=>e&&e!==n).slice(0,3);return{id:`quiz-${e.id}-${Date.now()}`,word:e,answer:n,options:Hn([n,...r])}})}function Wn({title:e,words:t,allWords:n,progressMap:r,audioSettings:i,onAnswer:a}){let[o,s]=(0,y.useState)(0),[c,l]=(0,y.useState)(t),[u,d]=(0,y.useState)(0),[f,p]=(0,y.useState)(),[m,h]=(0,y.useState)({correct:0,wrong:0}),[g,_]=(0,y.useState)([]),v=(0,y.useMemo)(()=>Un(c,n),[c,n,o]),b=v[u],x=u>=v.length,S=!!f,C=f===b?.answer,w=m.correct+m.wrong,ee=w?Math.round(m.correct/w*100):0,{isMobile:te}=qe();(0,y.useEffect)(()=>{l(t),d(0),p(void 0),h({correct:0,wrong:0}),_([])},[t]);let ne=(e=t)=>{l([...e]),s(e=>e+1),d(0),p(void 0),h({correct:0,wrong:0}),_([])},re=e=>{if(!b||S)return;let t=e===b.answer;p(e),h(e=>({correct:e.correct+ +!!t,wrong:e.wrong+ +!t})),t||_(e=>[...e,b.word]),a(b.word.id,t)},ie=()=>{S&&(p(void 0),d(e=>e+1))};return Bn({onSpace:()=>b&&Fn(b.word.word,i.defaultAccent,i),onEnter:ie}),v.length?x?(0,D.jsxs)(`div`,{className:`space-y-5`,children:[(0,D.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-6 text-center shadow-soft`,children:[(0,D.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Result`}),(0,D.jsx)(`h1`,{className:`mt-2 text-3xl font-semibold text-ink`,children:`本次测试完成`}),(0,D.jsxs)(`div`,{className:`mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4`,children:[(0,D.jsx)(Gn,{title:`总题数`,value:w}),(0,D.jsx)(Gn,{title:`正确`,value:m.correct,tone:`text-emerald-600`}),(0,D.jsx)(Gn,{title:`错误`,value:m.wrong,tone:`text-rose-600`}),(0,D.jsx)(Gn,{title:`正确率`,value:`${ee}%`,tone:`text-indigo-600`})]}),(0,D.jsxs)(`div`,{className:`mt-6 flex flex-wrap justify-center gap-3`,children:[(0,D.jsxs)(`button`,{type:`button`,onClick:()=>ne(),className:`btn-secondary`,children:[(0,D.jsx)(Te,{size:18,"aria-hidden":`true`}),`重新测试`]}),g.length?(0,D.jsxs)(`button`,{type:`button`,onClick:()=>ne(g),className:`btn-primary`,children:[(0,D.jsx)(Te,{size:18,"aria-hidden":`true`}),`重新测试错题`]}):null]})]}),g.length?(0,D.jsx)(`div`,{className:`grid gap-3 md:grid-cols-2`,children:g.map(e=>(0,D.jsx)(Rn,{word:e,progress:r[e.id],compact:!0,audioSettings:i},e.id))}):null]}):te?(0,D.jsxs)(`div`,{className:`min-h-[calc(100dvh-136px)] space-y-2 pb-20`,children:[(0,D.jsxs)(`div`,{className:`flex h-8 items-center justify-between gap-3`,children:[(0,D.jsxs)(`div`,{className:`min-w-0`,children:[(0,D.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Quiz`}),(0,D.jsx)(`h1`,{className:`truncate text-base font-semibold text-ink`,children:e})]}),(0,D.jsxs)(`div`,{className:`shrink-0 text-right text-xs text-slate-500`,children:[u+1,`/`,v.length,` · `,ee,`%`]})]}),(0,D.jsx)(`div`,{className:`h-1.5 overflow-hidden rounded-full bg-slate-200`,children:(0,D.jsx)(`div`,{className:`h-full rounded-full bg-harbor`,style:{width:`${Math.min(100,(u+1)/v.length*100)}%`}})}),(0,D.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-3 shadow-soft`,children:[(0,D.jsxs)(`div`,{className:`pb-3 pt-2 text-center`,children:[(0,D.jsx)(`div`,{className:`break-words font-semibold leading-tight text-ink ${b.word.word.length>12?`text-2xl`:`text-[32px]`}`,children:b.word.word}),(0,D.jsx)(`div`,{className:`mt-1 text-xs text-slate-500`,children:b.word.phonetic}),(0,D.jsxs)(`div`,{className:`mt-2 flex justify-center gap-2`,children:[(0,D.jsx)(N,{word:b.word.word,accent:`us`,settings:i,compact:!0}),(0,D.jsx)(N,{word:b.word.word,accent:`uk`,settings:i,compact:!0})]})]}),(0,D.jsx)(`div`,{className:`grid gap-2`,children:b.options.map(e=>{let t=e===b.answer,n=f===e;return(0,D.jsxs)(`button`,{type:`button`,onClick:()=>re(e),className:`flex min-h-12 items-center justify-between gap-2 rounded-lg border px-3 py-2 text-left text-[13px] font-semibold leading-snug transition ${S&&t?`border-emerald-500 bg-emerald-50 text-emerald-700`:S&&n?`border-rose-500 bg-rose-50 text-rose-700`:`border-slate-200 bg-[#f8fbff] text-slate-900 active:border-indigo-400`}`,children:[(0,D.jsx)(`span`,{className:`mobile-option-clamp min-w-0`,children:e}),S&&t?(0,D.jsx)(ce,{size:17,"aria-hidden":`true`}):null,S&&n&&!t?(0,D.jsx)(T,{size:17,"aria-hidden":`true`}):null]},e)})}),S?(0,D.jsx)(`div`,{className:`mt-2 rounded-lg px-3 py-2 text-[13px] font-semibold leading-snug ${C?`bg-emerald-50 text-emerald-700`:`bg-rose-50 text-rose-700`}`,children:C?`回答正确，阶段会向前推进。`:`回答错误：${b.answer}`}):null,(0,D.jsx)(`button`,{type:`button`,onClick:ie,disabled:!S,className:`btn-primary mt-2 h-11 min-h-0 w-full disabled:opacity-40`,children:`下一题`})]})]}):(0,D.jsxs)(`div`,{className:`space-y-5`,children:[(0,D.jsxs)(`div`,{className:`flex flex-wrap items-end justify-between gap-4`,children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Quiz`}),(0,D.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:e})]}),(0,D.jsxs)(`div`,{className:`text-sm text-slate-500`,children:[u+1,` / `,v.length]})]}),(0,D.jsxs)(`div`,{className:`grid gap-5 lg:grid-cols-[minmax(0,1fr)_280px]`,children:[(0,D.jsxs)(`section`,{className:`min-w-0 space-y-5`,children:[(0,D.jsx)(Xt,{value:u+1,max:v.length,label:`测试进度`}),(0,D.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,D.jsxs)(`div`,{className:`py-8 text-center`,children:[(0,D.jsx)(`div`,{className:`break-words text-5xl font-semibold text-ink`,children:b.word.word}),(0,D.jsx)(`div`,{className:`mt-3 text-xl text-slate-500`,children:b.word.phonetic}),(0,D.jsxs)(`div`,{className:`mt-4 flex justify-center gap-2`,children:[(0,D.jsx)(N,{word:b.word.word,accent:`us`,settings:i}),(0,D.jsx)(N,{word:b.word.word,accent:`uk`,settings:i})]})]}),(0,D.jsx)(`div`,{className:`grid gap-3 md:grid-cols-2 xl:grid-cols-4`,children:b.options.map(e=>{let t=e===b.answer,n=f===e;return(0,D.jsxs)(`button`,{type:`button`,onClick:()=>re(e),className:`quiz-option ${S&&t?`border-emerald-500 bg-emerald-50 text-emerald-700`:S&&n?`border-rose-500 bg-rose-50 text-rose-700`:`border-slate-200 bg-[#f8fbff] text-slate-900 hover:border-indigo-400`}`,children:[(0,D.jsx)(`span`,{children:e}),S&&t?(0,D.jsx)(ce,{size:18,"aria-hidden":`true`}):null,S&&n&&!t?(0,D.jsx)(T,{size:18,"aria-hidden":`true`}):null]},e)})}),S?(0,D.jsxs)(`div`,{className:`mt-4 rounded-lg p-4 text-sm ${C?`bg-emerald-50 text-emerald-700`:`bg-rose-50 text-rose-700`}`,children:[C?`回答正确，阶段会向前推进。`:`回答错误，正确答案是：${b.answer}`,(0,D.jsxs)(`div`,{className:`mt-3 flex gap-2`,children:[(0,D.jsx)(N,{word:b.word.word,accent:`us`,settings:i}),(0,D.jsx)(N,{word:b.word.word,accent:`uk`,settings:i})]})]}):null,(0,D.jsx)(`div`,{className:`mt-5 flex justify-end`,children:(0,D.jsx)(`button`,{type:`button`,onClick:ie,disabled:!S,className:`btn-primary disabled:opacity-40`,children:`下一题`})})]})]}),(0,D.jsxs)(`aside`,{className:`hidden space-y-4 lg:block`,children:[(0,D.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-soft`,children:[(0,D.jsx)(`h2`,{className:`font-semibold text-ink`,children:`测试面板`}),(0,D.jsxs)(`div`,{className:`mt-4 grid gap-3 text-sm`,children:[(0,D.jsx)(Gn,{title:`正确率`,value:`${ee}%`,tone:`text-indigo-600`}),(0,D.jsx)(Gn,{title:`正确`,value:m.correct,tone:`text-emerald-600`}),(0,D.jsx)(Gn,{title:`错题`,value:m.wrong,tone:`text-rose-600`})]})]}),(0,D.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-4 text-sm shadow-soft`,children:[(0,D.jsx)(`h2`,{className:`font-semibold text-ink`,children:`快捷键`}),(0,D.jsxs)(`div`,{className:`mt-3 grid gap-2 text-slate-500`,children:[(0,D.jsx)(`span`,{children:`Enter 下一题`}),(0,D.jsx)(`span`,{children:`Space 可播放当前词`})]})]})]})]})]}):(0,D.jsx)(In,{title:`当前范围没有可测试的单词`,body:`先导入或选择一个包含单词的单元。`})}function Gn({title:e,value:t,tone:n=`text-ink`}){return(0,D.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-[#f8fbff] p-4`,children:[(0,D.jsx)(`div`,{className:`text-2xl font-semibold ${n}`,children:t}),(0,D.jsx)(`div`,{className:`text-sm text-slate-500`,children:e})]})}function Kn({value:e,items:t,onChange:n}){return(0,D.jsx)(`div`,{className:`inline-grid grid-flow-col rounded-lg border border-slate-200 bg-[#f8fbff] p-1`,children:t.map(t=>(0,D.jsx)(`button`,{type:`button`,onClick:()=>n(t.value),className:`rounded-md px-3 py-2 text-sm transition ${e===t.value?`bg-white text-ink shadow-sm`:`text-slate-500 hover:text-ink`}`,children:t.label},t.value))})}function qn({title:e,words:t,progressMap:n,audioSettings:r,initialDueOnly:i=!1,onGrade:a,onBackToStudy:o}){let[s,c]=(0,y.useState)(i?`due`:`all`),[l,u]=(0,y.useState)(0),[d,f]=(0,y.useState)(!1),p=(0,y.useMemo)(()=>s===`due`?Nt(t,n):t,[s,t,n]),m=p[Math.min(l,Math.max(0,p.length-1))],h=m?n[m.id]:void 0,g=Math.max(0,l-10),_=p.slice(g,Math.min(p.length,g+24)),{isMobile:v}=qe();(0,y.useEffect)(()=>{!m||!r.autoPlayOnRecall||Fn(m.word,r.defaultAccent,r).catch(()=>void 0)},[m,r]);let b=e=>{m&&(a(m.id,e),f(!1),u(e=>{let t=s===`due`?e:e+1;return Math.min(t,Math.max(0,p.length-1))}))};return Bn({onSpace:()=>m&&Fn(m.word,r.defaultAccent,r),onOne:()=>b(`known`),onTwo:()=>b(`fuzzy`),onThree:()=>b(`forgotten`),onEnter:()=>f(e=>!e)}),p.length?v?(0,D.jsxs)(`div`,{className:`min-h-[calc(100dvh-136px)] space-y-3 pb-28`,children:[(0,D.jsxs)(`div`,{className:`flex items-start justify-between gap-3`,children:[(0,D.jsxs)(`div`,{className:`min-w-0`,children:[(0,D.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Recall`}),(0,D.jsx)(`h1`,{className:`truncate text-lg font-semibold text-ink`,children:e})]}),(0,D.jsxs)(`div`,{className:`shrink-0 text-right text-xs text-slate-500`,children:[Math.min(l+1,p.length),` / `,p.length]})]}),(0,D.jsx)(Kn,{value:s,items:[{value:`due`,label:`到期词`},{value:`all`,label:`全部词`}],onChange:e=>{c(e),u(0),f(!1)}}),(0,D.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-soft`,children:[(0,D.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500`,children:[(0,D.jsxs)(`span`,{children:[`S`,h?.stage||0,` · `,hn(h)]}),(0,D.jsx)(`span`,{children:mn(h?.nextReviewAt)})]}),(0,D.jsxs)(`div`,{className:`py-7 text-center`,children:[(0,D.jsx)(`div`,{className:`break-words font-semibold leading-tight text-ink ${m.word.length>12?`text-3xl`:`text-[34px]`}`,children:m.word}),(0,D.jsx)(`div`,{className:`mt-2 text-sm text-slate-500`,children:m.phonetic}),(0,D.jsxs)(`div`,{className:`mt-3 flex justify-center gap-2`,children:[(0,D.jsx)(N,{word:m.word,accent:`us`,settings:r,compact:!0}),(0,D.jsx)(N,{word:m.word,accent:`uk`,settings:r,compact:!0})]})]}),(0,D.jsxs)(`button`,{type:`button`,onClick:()=>f(!0),className:`btn-secondary h-11 min-h-0 w-full`,children:[(0,D.jsx)(fe,{size:17,"aria-hidden":`true`}),`查看释义`]})]}),(0,D.jsx)(Ln,{open:d,onClose:()=>f(!1),word:m.word,phonetic:m.phonetic,definitions:m.definitions,bottomOffset:`calc(132px + env(safe-area-inset-bottom))`}),(0,D.jsxs)(`div`,{className:`fixed inset-x-3 z-40 grid grid-cols-3 gap-2`,style:{bottom:`calc(72px + env(safe-area-inset-bottom))`},children:[(0,D.jsxs)(`button`,{type:`button`,onClick:()=>b(`known`),className:`inline-flex h-11 items-center justify-center gap-1 rounded-lg bg-emerald-600 px-2 text-xs font-semibold text-white shadow-sm active:translate-y-px`,children:[(0,D.jsx)(je,{size:15,"aria-hidden":`true`}),`记住`]}),(0,D.jsxs)(`button`,{type:`button`,onClick:()=>b(`fuzzy`),className:`inline-flex h-11 items-center justify-center gap-1 rounded-lg border border-amber-300 bg-amber-50 px-2 text-xs font-semibold text-amber-700 shadow-sm active:translate-y-px`,children:[(0,D.jsx)(Te,{size:15,"aria-hidden":`true`}),`不太熟`]}),(0,D.jsxs)(`button`,{type:`button`,onClick:()=>b(`forgotten`),className:`inline-flex h-11 items-center justify-center gap-1 rounded-lg border border-rose-300 bg-rose-50 px-2 text-xs font-semibold text-rose-700 shadow-sm active:translate-y-px`,children:[(0,D.jsx)(Ae,{size:15,"aria-hidden":`true`}),`不记住`]})]})]}):(0,D.jsxs)(`div`,{className:`space-y-5`,children:[(0,D.jsxs)(`div`,{className:`flex flex-wrap items-end justify-between gap-4`,children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Recall`}),(0,D.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:e})]}),(0,D.jsx)(Kn,{value:s,items:[{value:`due`,label:`到期词`},{value:`all`,label:`全部词`}],onChange:e=>{c(e),u(0),f(!1)}})]}),(0,D.jsxs)(`div`,{className:`grid gap-5 md:grid-cols-[250px_1fr] lg:grid-cols-[250px_minmax(0,1fr)_280px]`,children:[(0,D.jsxs)(`aside`,{className:`hidden rounded-lg border border-slate-200 bg-white p-3 shadow-soft md:block`,children:[(0,D.jsxs)(`div`,{className:`mb-3 flex items-center justify-between px-1 text-sm`,children:[(0,D.jsx)(`span`,{className:`font-semibold text-ink`,children:`复习队列`}),(0,D.jsx)(`span`,{className:`text-slate-500`,children:p.length})]}),(0,D.jsx)(`div`,{className:`max-h-[68vh] space-y-1 overflow-y-auto pr-1`,children:_.map((e,t)=>{let r=g+t;return(0,D.jsxs)(`button`,{type:`button`,onClick:()=>{u(r),f(!1)},className:`flex min-h-11 w-full items-center justify-between gap-3 rounded-lg px-3 text-left text-sm transition ${r===l?`bg-indigo-50 text-indigo-700`:`text-slate-600 hover:bg-[#f8fbff] hover:text-ink`}`,children:[(0,D.jsx)(`span`,{className:`min-w-0 truncate font-semibold`,children:e.word}),(0,D.jsxs)(`span`,{className:`shrink-0 text-xs`,children:[`S`,n[e.id]?.stage||0]})]},e.id)})})]}),(0,D.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,D.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500`,children:[(0,D.jsxs)(`span`,{children:[Math.min(l+1,p.length),` / `,p.length]}),(0,D.jsxs)(`span`,{children:[Mt(h)?`已到期`:`未到期`,`，Stage `,h?.stage||0,`，下次 `,mn(h?.nextReviewAt)]})]}),(0,D.jsxs)(`div`,{className:`py-10 text-center`,children:[(0,D.jsx)(`div`,{className:`break-words text-5xl font-semibold text-ink`,children:m.word}),(0,D.jsx)(`div`,{className:`mt-3 text-xl text-slate-500`,children:m.phonetic}),(0,D.jsxs)(`div`,{className:`mt-4 flex justify-center gap-2`,children:[(0,D.jsx)(N,{word:m.word,accent:`us`,settings:r}),(0,D.jsx)(N,{word:m.word,accent:`uk`,settings:r})]})]}),d?(0,D.jsx)(Rn,{word:m,progress:h,compact:!0,audioSettings:r}):null,(0,D.jsxs)(`div`,{className:`mt-5 grid gap-3 sm:grid-cols-4`,children:[(0,D.jsxs)(`button`,{type:`button`,onClick:()=>f(e=>!e),className:`btn-secondary`,children:[(0,D.jsx)(fe,{size:18,"aria-hidden":`true`}),`查看释义`]}),(0,D.jsxs)(`button`,{type:`button`,onClick:()=>b(`known`),className:`btn-primary`,children:[(0,D.jsx)(je,{size:18,"aria-hidden":`true`}),`记住`]}),(0,D.jsxs)(`button`,{type:`button`,onClick:()=>b(`fuzzy`),className:`btn-secondary`,children:[(0,D.jsx)(Te,{size:18,"aria-hidden":`true`}),`不太熟`]}),(0,D.jsxs)(`button`,{type:`button`,onClick:()=>b(`forgotten`),className:`btn-danger`,children:[(0,D.jsx)(Ae,{size:18,"aria-hidden":`true`}),`不记住`]})]})]}),(0,D.jsxs)(`aside`,{className:`hidden space-y-4 lg:block`,children:[(0,D.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-soft`,children:[(0,D.jsx)(`h2`,{className:`font-semibold text-ink`,children:`复习反馈`}),(0,D.jsxs)(`div`,{className:`mt-4 space-y-3 text-sm`,children:[(0,D.jsxs)(`div`,{className:`rounded-lg bg-[#f8fbff] p-3`,children:[(0,D.jsx)(`span`,{className:`block text-slate-500`,children:`当前状态`}),(0,D.jsx)(`span`,{className:`mt-1 block font-semibold text-ink`,children:hn(h)})]}),(0,D.jsxs)(`div`,{className:`rounded-lg bg-[#f8fbff] p-3`,children:[(0,D.jsx)(`span`,{className:`block text-slate-500`,children:`打怪伤害`}),(0,D.jsx)(`span`,{className:`mt-1 block font-semibold text-indigo-600`,children:`记住 +3，不熟 +1`})]})]})]}),(0,D.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-4 text-sm shadow-soft`,children:[(0,D.jsx)(`h2`,{className:`font-semibold text-ink`,children:`快捷键`}),(0,D.jsxs)(`div`,{className:`mt-3 grid gap-2 text-slate-500`,children:[(0,D.jsx)(`span`,{children:`Space 播放发音`}),(0,D.jsx)(`span`,{children:`1 记住`}),(0,D.jsx)(`span`,{children:`2 不太熟`}),(0,D.jsx)(`span`,{children:`3 不记住`}),(0,D.jsx)(`span`,{children:`Enter 查看释义`})]})]})]})]})]}):(0,D.jsx)(In,{title:s===`due`?`当前没有到期词`:`当前范围没有词`,body:`可以切换到全部练习，或者先进入记忆模式完成初学。`,actionLabel:o?`去记忆模式`:void 0,onAction:o})}function Jn({words:e,progressMap:t,audioSettings:n,onStartReview:r,onOpenUnits:i}){let a=Nt(e,t);return(0,D.jsxs)(`div`,{className:`space-y-5`,children:[(0,D.jsx)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:(0,D.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-4`,children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Review`}),(0,D.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`复习中心`})]}),(0,D.jsxs)(`button`,{type:`button`,onClick:r,disabled:!a.length,className:`btn-primary disabled:opacity-40`,children:[(0,D.jsx)(re,{size:18,"aria-hidden":`true`}),`一键开始`]})]})}),a.length?(0,D.jsx)(`div`,{className:`grid gap-3 lg:grid-cols-2`,children:a.map(e=>(0,D.jsx)(Rn,{word:e,progress:t[e.id],compact:!0,audioSettings:n},e.id))}):(0,D.jsx)(In,{title:`今天暂时没有到期复习`,body:`可以先从单元里加入今日学习，初学后的单词会自动进入复习周期。`,actionLabel:`去单元`,onAction:i})]})}function Yn({stats:e}){return(0,D.jsxs)(`div`,{className:`space-y-5`,children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Rewards`}),(0,D.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`奖励记录`})]}),(0,D.jsx)(`div`,{className:`space-y-3`,children:e.rewardHistory.length?e.rewardHistory.map(e=>(0,D.jsx)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-soft`,children:(0,D.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`div`,{className:`font-semibold text-ink`,children:e.title}),(0,D.jsx)(`div`,{className:`mt-1 text-sm text-slate-500`,children:e.description})]}),(0,D.jsxs)(`div`,{className:`text-sm font-semibold text-harbor`,children:[`+`,e.xp,` XP / +`,e.coins,` 金币`]})]})},e.id)):(0,D.jsx)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-8 text-center text-slate-500`,children:`暂无奖励记录`})})]})}function Xn({stats:e,onUpdateAudio:t}){let n=e.audioSettings,r=e=>t({...n,...e});return(0,D.jsxs)(`div`,{className:`space-y-5`,children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Settings`}),(0,D.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`设置`})]}),(0,D.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,D.jsx)(`h2`,{className:`font-semibold text-ink`,children:`发音设置`}),(0,D.jsxs)(`div`,{className:`mt-4 grid gap-4 md:grid-cols-2`,children:[(0,D.jsxs)(`label`,{className:`flex items-center justify-between rounded-lg bg-[#f8fbff] p-3`,children:[(0,D.jsx)(`span`,{children:`记忆页自动播放`}),(0,D.jsx)(`input`,{type:`checkbox`,checked:n.autoPlayOnStudy,onChange:e=>r({autoPlayOnStudy:e.target.checked})})]}),(0,D.jsxs)(`label`,{className:`flex items-center justify-between rounded-lg bg-[#f8fbff] p-3`,children:[(0,D.jsx)(`span`,{children:`理解页自动播放`}),(0,D.jsx)(`input`,{type:`checkbox`,checked:n.autoPlayOnRecall,onChange:e=>r({autoPlayOnRecall:e.target.checked})})]}),(0,D.jsxs)(`label`,{className:`rounded-lg bg-[#f8fbff] p-3`,children:[(0,D.jsx)(`span`,{className:`mb-2 block`,children:`默认口音`}),(0,D.jsxs)(`select`,{value:n.defaultAccent,onChange:e=>r({defaultAccent:e.target.value}),className:`w-full rounded-md border border-slate-200 bg-white p-2`,children:[(0,D.jsx)(`option`,{value:`us`,children:`美式`}),(0,D.jsx)(`option`,{value:`uk`,children:`英式`})]})]}),(0,D.jsxs)(`label`,{className:`rounded-lg bg-[#f8fbff] p-3`,children:[(0,D.jsx)(`span`,{className:`mb-2 block`,children:`朗读速度`}),(0,D.jsxs)(`select`,{value:n.speechRate,onChange:e=>r({speechRate:Number(e.target.value)}),className:`w-full rounded-md border border-slate-200 bg-white p-2`,children:[(0,D.jsx)(`option`,{value:.8,children:`0.8`}),(0,D.jsx)(`option`,{value:1,children:`1.0`}),(0,D.jsx)(`option`,{value:1.1,children:`1.1`})]})]}),(0,D.jsxs)(`label`,{className:`rounded-lg bg-[#f8fbff] p-3`,children:[(0,D.jsx)(`span`,{className:`mb-2 block`,children:`朗读次数`}),(0,D.jsxs)(`select`,{value:n.repeatCount,onChange:e=>r({repeatCount:Number(e.target.value)}),className:`w-full rounded-md border border-slate-200 bg-white p-2`,children:[(0,D.jsx)(`option`,{value:1,children:`1 次`}),(0,D.jsx)(`option`,{value:2,children:`2 次`})]})]})]})]})]})}var Zn=[{id:`theme-default`,name:`默认浅蓝主题`,description:`清爽的浅蓝学习桌面`,type:`theme`,priceCoins:0,icon:`蓝`,rarity:`common`},{id:`theme-dark`,name:`深色专注主题`,description:`适合夜间学习的深色主题`,type:`theme`,priceCoins:120,icon:`夜`,rarity:`rare`},{id:`theme-morning`,name:`晨读白色主题`,description:`适合早起背词的明亮主题`,type:`theme`,priceCoins:90,icon:`晨`,rarity:`common`},{id:`avatar-unit1`,name:`Unit1 完成头像框`,description:`Unit1 学习者头像框`,type:`avatar`,priceCoins:80,icon:`U1`,rarity:`common`},{id:`avatar-thirty-days`,name:`30 天坚持头像框`,description:`长期主义者的头像框`,type:`avatar`,priceCoins:220,priceDiamonds:1,icon:`30`,rarity:`epic`},{id:`tool-focus-card`,name:`专注卡`,description:`开启一次 25 分钟专注学习`,type:`tool`,priceCoins:30,icon:`专`,rarity:`common`},{id:`tool-review-boost`,name:`复习加速卡`,description:`把不熟词加入今日重点复习`,type:`tool`,priceCoins:45,icon:`复`,rarity:`rare`},{id:`tool-wrong-clean`,name:`错题清理卡`,description:`开启一次错题专项测试`,type:`tool`,priceCoins:50,icon:`错`,rarity:`rare`},{id:`tool-makeup`,name:`补签卡`,description:`预留功能，后续可用于补签`,type:`tool`,priceCoins:120,icon:`补`,rarity:`epic`},{id:`tool-double-monster`,name:`双倍积分卡`,description:`15 分钟内打怪积分翻倍`,type:`tool`,priceCoins:100,icon:`双`,rarity:`epic`},{id:`badge-seven-days`,name:`7 天坚持徽章`,description:`连续打卡 7 天纪念徽章`,type:`badge`,priceCoins:160,icon:`7`,rarity:`rare`}];function Qn(e,t){return e.unlockedItems.includes(t.id)||e.inventory.some(e=>e.itemId===t.id)}function $n(e,t){let n=t.type===`tool`;if(!n&&e.unlockedItems.includes(t.id)||e.coins<t.priceCoins||e.diamonds<(t.priceDiamonds||0))return e;let r=n?e.unlockedItems:[...e.unlockedItems,t.id];return k({...e,coins:e.coins-t.priceCoins,diamonds:e.diamonds-(t.priceDiamonds||0),unlockedItems:r},{type:`exchange`,title:`兑换 ${t.name}`,description:t.description,itemId:n?t.id:void 0,bypassDailyCap:!0})}function er({item:e,stats:t,onExchange:n}){let r=Qn(t,e),i=t.coins>=e.priceCoins&&t.diamonds>=(e.priceDiamonds||0);return(0,D.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-soft`,children:[(0,D.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,D.jsx)(`div`,{className:`grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#f8fbff] font-semibold text-harbor`,children:e.icon}),(0,D.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,D.jsx)(`div`,{className:`font-semibold text-ink`,children:e.name}),(0,D.jsx)(`div`,{className:`mt-1 text-sm leading-6 text-slate-500`,children:e.description}),(0,D.jsxs)(`div`,{className:`mt-2 text-xs text-slate-500`,children:[e.rarity,` / `,e.type]})]})]}),(0,D.jsx)(`button`,{type:`button`,onClick:()=>n(e),disabled:(!i||r)&&e.type!==`tool`,className:`btn-primary mt-4 w-full disabled:opacity-40`,children:r&&e.type!==`tool`?`已拥有`:`兑换 ${e.priceCoins} 金币${e.priceDiamonds?` + ${e.priceDiamonds} 钻石`:``}`})]})}function tr({stats:e,onExchange:t}){return(0,D.jsxs)(`div`,{className:`space-y-5`,children:[(0,D.jsxs)(`div`,{className:`flex flex-wrap items-end justify-between gap-4`,children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Shop`}),(0,D.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`兑换商店`})]}),(0,D.jsx)(Qt,{stats:e})]}),(0,D.jsx)(`div`,{className:`grid gap-4 md:grid-cols-2 lg:grid-cols-3`,children:Zn.map(n=>(0,D.jsx)(er,{item:n,stats:e,onExchange:t},n.id))})]})}function nr({data:e,type:t=`bar`}){let n=Math.max(60,...e.map(e=>e.seconds));return(0,D.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-soft`,children:[(0,D.jsx)(`div`,{className:`mb-4 font-semibold text-ink`,children:t===`bar`?`最近 7 天学习时长`:`最近 30 天学习趋势`}),(0,D.jsx)(`div`,{className:`flex h-36 items-end gap-1`,children:e.map(e=>(0,D.jsxs)(`div`,{className:`flex flex-1 flex-col items-center gap-2`,children:[(0,D.jsx)(`div`,{className:`w-full rounded-t bg-harbor`,style:{height:`${Math.max(4,e.seconds/n*120)}px`},title:nt(e.seconds)}),(0,D.jsx)(`div`,{className:`text-[10px] text-slate-400`,children:e.date.slice(5)})]},e.date))})]})}function rr({stats:e,words:t,progressMap:n}){let r=un(e),i=pn(t,n).slice(0,6);return(0,D.jsxs)(`div`,{className:`space-y-5`,children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Statistics`}),(0,D.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`学习统计`})]}),(0,D.jsxs)(`div`,{className:`grid gap-4 sm:grid-cols-2 lg:grid-cols-4`,children:[(0,D.jsx)(ir,{title:`今日`,value:nt(r.todaySeconds)}),(0,D.jsx)(ir,{title:`本周`,value:nt(r.weekSeconds)}),(0,D.jsx)(ir,{title:`本月`,value:nt(r.monthSeconds)}),(0,D.jsx)(ir,{title:`总学习`,value:nt(r.totalSeconds)})]}),(0,D.jsxs)(`div`,{className:`grid gap-4 lg:grid-cols-2`,children:[(0,D.jsx)(nr,{data:fn(e,7)}),(0,D.jsx)(nr,{data:fn(e,30),type:`line`})]}),(0,D.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,D.jsx)(`h2`,{className:`font-semibold text-ink`,children:`单元完成排行榜`}),(0,D.jsx)(`div`,{className:`mt-4 space-y-3`,children:i.map(e=>(0,D.jsxs)(`div`,{className:`flex items-center justify-between rounded-lg bg-[#f8fbff] p-3`,children:[(0,D.jsx)(`span`,{children:e.unitName}),(0,D.jsxs)(`span`,{className:`font-semibold text-harbor`,children:[e.percent,`%`]})]},e.unitName))})]})]})}function ir({title:e,value:t}){return(0,D.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-soft`,children:[(0,D.jsx)(`div`,{className:`text-sm text-slate-500`,children:e}),(0,D.jsx)(`div`,{className:`mt-2 text-2xl font-semibold text-ink`,children:t})]})}function ar({unit:e,words:t,progressMap:n,audioSettings:r,onLearn:i}){let[a,o]=(0,y.useState)(0),s=t[a],c=(0,y.useMemo)(()=>t.filter(e=>n[e.id]?.learned).length,[t,n]),{isDesktop:l,isMobile:u}=qe(),d=s?n[s.id]:void 0,f=Math.max(0,a-12),p=t.slice(f,Math.min(t.length,f+28));(0,y.useEffect)(()=>{!s||!r.autoPlayOnStudy||Fn(s.word,r.defaultAccent,r).catch(()=>void 0)},[s,r]);let m=e=>{o(n=>Math.min(t.length-1,Math.max(0,n+e)))};return Bn({onSpace:()=>s&&Fn(s.word,r.defaultAccent,r),onArrowLeft:()=>m(-1),onArrowRight:()=>m(1),onEnter:()=>s&&i(s.id)}),s?u?(0,D.jsxs)(`div`,{className:`min-h-[calc(100dvh-136px)] space-y-2 pb-24`,children:[(0,D.jsxs)(`div`,{className:`flex h-9 items-center justify-between gap-3`,children:[(0,D.jsxs)(`div`,{className:`min-w-0`,children:[(0,D.jsx)(`div`,{className:`truncate text-sm font-semibold text-ink`,children:e?.name||`总记忆`}),(0,D.jsxs)(`div`,{className:`text-[11px] text-slate-500`,children:[`已初学 `,c,` 词`]})]}),(0,D.jsxs)(`div`,{className:`shrink-0 rounded-md border border-sky-100 bg-white px-2 py-1 text-xs font-semibold text-harbor`,children:[a+1,`/`,t.length]})]}),(0,D.jsx)(`div`,{className:`h-1.5 overflow-hidden rounded-full bg-slate-200`,children:(0,D.jsx)(`div`,{className:`h-full rounded-full bg-harbor`,style:{width:`${Math.min(100,(a+1)/t.length*100)}%`}})}),(0,D.jsx)(Rn,{word:s,progress:d,audioSettings:r,mobileCompact:!0}),(0,D.jsxs)(`div`,{className:`fixed inset-x-3 z-40 grid grid-cols-3 gap-2`,style:{bottom:`calc(72px + env(safe-area-inset-bottom))`},children:[(0,D.jsxs)(`button`,{type:`button`,onClick:()=>m(-1),disabled:a===0,className:`btn-secondary h-11 min-h-0 px-2 text-xs disabled:opacity-40`,children:[(0,D.jsx)(S,{size:16,"aria-hidden":`true`}),`上一个`]}),(0,D.jsxs)(`button`,{type:`button`,onClick:()=>i(s.id),className:`btn-primary h-11 min-h-0 px-2 text-xs`,children:[(0,D.jsx)(se,{size:16,"aria-hidden":`true`}),`已学`]}),(0,D.jsxs)(`button`,{type:`button`,onClick:()=>m(1),disabled:a===t.length-1,className:`btn-secondary h-11 min-h-0 px-2 text-xs disabled:opacity-40`,children:[`下一个`,(0,D.jsx)(C,{size:16,"aria-hidden":`true`})]})]})]}):(0,D.jsxs)(`div`,{className:`space-y-5`,children:[(0,D.jsxs)(`div`,{className:`flex flex-wrap items-end justify-between gap-4`,children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Study`}),(0,D.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:e?.name||`总记忆功能`})]}),(0,D.jsxs)(`div`,{className:`text-sm text-slate-500`,children:[a+1,` / `,t.length]})]}),(0,D.jsx)(Xt,{value:a+1,max:t.length,label:`浏览进度，已初学 ${c} 词`}),(0,D.jsxs)(`div`,{className:`grid gap-5 md:grid-cols-[260px_1fr] lg:grid-cols-[260px_minmax(0,1fr)_280px]`,children:[(0,D.jsxs)(`aside`,{className:`hidden rounded-lg border border-slate-200 bg-white p-3 shadow-soft md:block`,children:[(0,D.jsxs)(`div`,{className:`mb-3 flex items-center justify-between gap-2 px-1 text-sm`,children:[(0,D.jsx)(`span`,{className:`font-semibold text-ink`,children:`单词目录`}),(0,D.jsxs)(`span`,{className:`text-slate-500`,children:[a+1,`/`,t.length]})]}),(0,D.jsx)(`div`,{className:`max-h-[68vh] space-y-1 overflow-y-auto pr-1`,children:p.map((e,t)=>{let n=f+t;return(0,D.jsxs)(`button`,{type:`button`,onClick:()=>o(n),className:`flex min-h-11 w-full items-center justify-between gap-3 rounded-lg px-3 text-left text-sm transition ${n===a?`bg-indigo-50 text-indigo-700`:`text-slate-600 hover:bg-[#f8fbff] hover:text-ink`}`,children:[(0,D.jsx)(`span`,{className:`min-w-0 truncate font-semibold`,children:e.word}),(0,D.jsxs)(`span`,{className:`shrink-0 text-xs`,children:[`#`,e.order]})]},e.id)})})]}),(0,D.jsx)(`section`,{className:`min-w-0`,children:(0,D.jsx)(Rn,{word:s,progress:d,audioSettings:r})}),(0,D.jsxs)(`aside`,{className:`hidden space-y-4 lg:block`,children:[(0,D.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-soft`,children:[(0,D.jsx)(`h2`,{className:`font-semibold text-ink`,children:`当前记忆状态`}),(0,D.jsxs)(`div`,{className:`mt-4 space-y-3 text-sm`,children:[(0,D.jsxs)(`div`,{className:`flex justify-between rounded-lg bg-[#f8fbff] p-3`,children:[(0,D.jsx)(`span`,{className:`text-slate-500`,children:`Stage`}),(0,D.jsx)(`span`,{className:`font-semibold text-ink`,children:d?.stage||0})]}),(0,D.jsxs)(`div`,{className:`flex justify-between rounded-lg bg-[#f8fbff] p-3`,children:[(0,D.jsx)(`span`,{className:`text-slate-500`,children:`状态`}),(0,D.jsx)(`span`,{className:`font-semibold text-ink`,children:hn(d)})]}),(0,D.jsxs)(`div`,{className:`rounded-lg bg-[#f8fbff] p-3`,children:[(0,D.jsx)(`span`,{className:`block text-slate-500`,children:`下次复习`}),(0,D.jsx)(`span`,{className:`mt-1 block font-semibold text-ink`,children:mn(d?.nextReviewAt)})]})]})]}),l?(0,D.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-4 text-sm shadow-soft`,children:[(0,D.jsx)(`h2`,{className:`font-semibold text-ink`,children:`快捷键`}),(0,D.jsxs)(`div`,{className:`mt-3 grid gap-2 text-slate-500`,children:[(0,D.jsx)(`span`,{children:`Space 播放发音`}),(0,D.jsx)(`span`,{children:`← / → 切换单词`}),(0,D.jsx)(`span`,{children:`Enter 标记已学`})]})]}):null]})]}),(0,D.jsxs)(`div`,{className:`sticky bottom-20 z-20 grid gap-3 rounded-lg border border-slate-200 bg-[#f8fbff]/95 p-2 shadow-soft backdrop-blur sm:grid-cols-4 md:static md:border-0 md:bg-transparent md:p-0 md:shadow-none`,children:[(0,D.jsxs)(`button`,{type:`button`,onClick:()=>m(-1),disabled:a===0,className:`btn-secondary disabled:opacity-40`,children:[(0,D.jsx)(S,{size:18,"aria-hidden":`true`}),`上一个`]}),(0,D.jsxs)(`button`,{type:`button`,onClick:()=>i(s.id),className:`btn-secondary sm:col-span-2`,children:[(0,D.jsx)(Se,{size:18,"aria-hidden":`true`}),`加入今日学习`]}),(0,D.jsxs)(`button`,{type:`button`,onClick:()=>i(s.id),className:`btn-primary`,children:[(0,D.jsx)(se,{size:18,"aria-hidden":`true`}),`标记已初学`]}),(0,D.jsxs)(`button`,{type:`button`,onClick:()=>m(1),disabled:a===t.length-1,className:`btn-secondary sm:col-start-4 disabled:opacity-40`,children:[(0,D.jsx)(C,{size:18,"aria-hidden":`true`}),`下一个`]})]})]}):null}function or({words:e,progressMap:t,audioSettings:n,onStudy:r,onRecall:i,onQuiz:a}){let[o,s]=(0,y.useState)(`all`),c=(0,y.useMemo)(()=>o===`unlearned`?e.filter(e=>!t[e.id]?.learned):o===`due`?Nt(e,t):o===`weak`?Ft(e,t):o===`wrong`?It(e,t):o===`mastered`?Pt(e,t):e,[o,e,t]);return(0,D.jsxs)(`div`,{className:`space-y-5`,children:[(0,D.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,D.jsxs)(`div`,{className:`flex flex-wrap items-end justify-between gap-4`,children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Library`}),(0,D.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`总词库`}),(0,D.jsxs)(`p`,{className:`mt-2 text-sm text-slate-500`,children:[`共 `,e.length,` 词`]})]}),(0,D.jsx)(Kn,{value:o,items:[{value:`all`,label:`全部`},{value:`unlearned`,label:`未学`},{value:`due`,label:`应复习`},{value:`weak`,label:`不熟`},{value:`wrong`,label:`错题`},{value:`mastered`,label:`掌握`}],onChange:s})]}),(0,D.jsxs)(`div`,{className:`mt-5 grid gap-3 sm:grid-cols-3`,children:[(0,D.jsxs)(`button`,{type:`button`,onClick:r,className:`mode-card`,children:[(0,D.jsx)(xe,{size:20,"aria-hidden":`true`}),(0,D.jsx)(`span`,{children:`总记忆`})]}),(0,D.jsxs)(`button`,{type:`button`,onClick:i,className:`mode-card`,children:[(0,D.jsx)(re,{size:20,"aria-hidden":`true`}),(0,D.jsx)(`span`,{children:`总理解`})]}),(0,D.jsxs)(`button`,{type:`button`,onClick:a,className:`mode-card`,children:[(0,D.jsx)(le,{size:20,"aria-hidden":`true`}),(0,D.jsx)(`span`,{children:`总测试`})]})]})]}),(0,D.jsxs)(`div`,{className:`flex items-center gap-2 text-sm text-slate-500`,children:[(0,D.jsx)(be,{size:16,"aria-hidden":`true`}),`当前显示 `,c.length,` 词`]}),(0,D.jsx)(`div`,{className:`grid gap-3 lg:grid-cols-2`,children:c.map(e=>(0,D.jsx)(Rn,{word:e,progress:t[e.id],compact:!0,audioSettings:n},e.id))})]})}function sr({unit:e,progressMap:t,onStudy:n,onRecall:r,onQuiz:i}){let a=gn(e.words,t);return(0,D.jsx)(`div`,{className:`space-y-5`,children:(0,D.jsx)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:(0,D.jsxs)(`div`,{className:`grid gap-5 lg:grid-cols-[1fr_320px]`,children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`div`,{className:`mb-3 text-xs font-semibold uppercase text-copper`,children:`Unit`}),(0,D.jsx)(`h1`,{className:`text-3xl font-semibold text-ink`,children:e.name}),(0,D.jsxs)(`p`,{className:`mt-2 text-sm text-slate-500`,children:[`共 `,e.words.length,` 词`,e.expectedCount?`，原文标注 ${e.expectedCount} 词`:``]}),(0,D.jsxs)(`div`,{className:`mt-6 grid gap-3 sm:grid-cols-3`,children:[(0,D.jsxs)(`button`,{type:`button`,onClick:n,className:`mode-card`,children:[(0,D.jsx)(te,{size:20,"aria-hidden":`true`}),(0,D.jsx)(`span`,{children:`记忆`})]}),(0,D.jsxs)(`button`,{type:`button`,onClick:r,className:`mode-card`,children:[(0,D.jsx)(re,{size:20,"aria-hidden":`true`}),(0,D.jsx)(`span`,{children:`理解`})]}),(0,D.jsxs)(`button`,{type:`button`,onClick:i,className:`mode-card`,children:[(0,D.jsx)(le,{size:20,"aria-hidden":`true`}),(0,D.jsx)(`span`,{children:`测试`})]})]})]}),(0,D.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-[#f8fbff] p-4`,children:[(0,D.jsxs)(`div`,{className:`mb-4 flex items-center gap-2 font-semibold text-ink`,children:[(0,D.jsx)(_e,{size:18,"aria-hidden":`true`}),`单元进度`]}),(0,D.jsxs)(`div`,{className:`grid grid-cols-3 gap-2 text-center text-sm`,children:[(0,D.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-3`,children:[(0,D.jsx)(`div`,{className:`font-semibold`,children:a.learned}),(0,D.jsx)(`div`,{className:`text-xs text-slate-500`,children:`学习`})]}),(0,D.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-3`,children:[(0,D.jsx)(`div`,{className:`font-semibold`,children:a.mastered}),(0,D.jsx)(`div`,{className:`text-xs text-slate-500`,children:`掌握`})]}),(0,D.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-3`,children:[(0,D.jsx)(`div`,{className:`font-semibold`,children:a.due}),(0,D.jsx)(`div`,{className:`text-xs text-slate-500`,children:`到期`})]})]}),(0,D.jsx)(`div`,{className:`mt-4`,children:(0,D.jsx)(Xt,{value:a.mastered,max:e.words.length,label:`掌握进度`})})]})]})})})}var cr=[[`基础高频`,`后续基础词包会放在这里，适合每天热身。`],[`词根词缀`,`用于把生词拆开记，减少死背压力。`],[`易混辨析`,`把拼写、词义相近的词集中复现。`]];function lr({units:e,progressMap:t,onOpenUnit:n}){let[r,i]=(0,y.useState)(`required`),a=(0,y.useMemo)(()=>e.filter(e=>e.order>=1&&e.order<=26).sort((e,t)=>e.order-t.order),[e]),o=a.reduce((e,t)=>e+t.words.length,0);return(0,D.jsxs)(`div`,{className:`space-y-5`,children:[(0,D.jsx)(`section`,{className:`rounded-lg border border-sky-100 bg-white p-5 shadow-soft`,children:(0,D.jsxs)(`div`,{className:`flex flex-wrap items-end justify-between gap-4`,children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Units`}),(0,D.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`单元板块`}),(0,D.jsx)(`p`,{className:`mt-2 text-sm leading-6 text-slate-500`,children:`先分成基础版和必备版。必备版已放入 Unit1-26，按重复记忆节奏推进。`})]}),(0,D.jsx)(Kn,{value:r,items:[{value:`basic`,label:`基础版`},{value:`required`,label:`必备版`}],onChange:i})]})}),r===`basic`?(0,D.jsx)(`section`,{className:`grid gap-4 md:grid-cols-3`,children:cr.map(([e,t])=>(0,D.jsxs)(`article`,{className:`rounded-lg border border-dashed border-sky-200 bg-white/85 p-5 shadow-soft`,children:[(0,D.jsx)(`div`,{className:`mb-4 grid h-10 w-10 place-items-center rounded-lg border border-harbor/15 bg-[#f8fbff] text-harbor`,children:(0,D.jsx)(_e,{size:20,"aria-hidden":`true`})}),(0,D.jsx)(`h2`,{className:`text-xl font-semibold text-ink`,children:e}),(0,D.jsx)(`p`,{className:`mt-2 text-sm leading-6 text-slate-500`,children:t}),(0,D.jsx)(`div`,{className:`mt-5 rounded-lg border border-sky-100 bg-[#f8fbff] p-3 text-sm font-semibold text-harbor`,children:`不影响必备版进度`})]},e))}):(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(`section`,{className:`grid gap-4 sm:grid-cols-3`,children:[(0,D.jsxs)(`div`,{className:`rounded-lg border border-sky-100 bg-white p-4 shadow-soft`,children:[(0,D.jsx)(`div`,{className:`text-sm text-slate-500`,children:`必备单元`}),(0,D.jsx)(`div`,{className:`mt-1 text-2xl font-semibold text-ink`,children:a.length})]}),(0,D.jsxs)(`div`,{className:`rounded-lg border border-sky-100 bg-white p-4 shadow-soft`,children:[(0,D.jsx)(`div`,{className:`text-sm text-slate-500`,children:`总词量`}),(0,D.jsx)(`div`,{className:`mt-1 text-2xl font-semibold text-ink`,children:o})]}),(0,D.jsxs)(`div`,{className:`rounded-lg border border-sky-100 bg-white p-4 shadow-soft`,children:[(0,D.jsx)(`div`,{className:`text-sm text-slate-500`,children:`范围`}),(0,D.jsx)(`div`,{className:`mt-1 text-2xl font-semibold text-ink`,children:`Unit1-26`})]})]}),(0,D.jsx)(`div`,{className:`grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`,children:a.map(e=>{let r=gn(e.words,t);return(0,D.jsxs)(`article`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,D.jsxs)(`div`,{className:`flex items-start justify-between gap-4`,children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`div`,{className:`mb-3 grid h-10 w-10 place-items-center rounded-lg border border-harbor/15 bg-[#f8fbff] text-harbor`,children:(0,D.jsx)(ne,{size:20,"aria-hidden":`true`})}),(0,D.jsx)(`h2`,{className:`text-xl font-semibold text-ink`,children:e.name}),(0,D.jsxs)(`p`,{className:`mt-1 text-sm text-slate-500`,children:[`共 `,e.words.length,` 词`]})]}),(0,D.jsx)(`button`,{type:`button`,onClick:()=>n(e.id),className:`icon-btn`,title:`进入单元`,children:(0,D.jsx)(C,{size:18,"aria-hidden":`true`})})]}),(0,D.jsxs)(`div`,{className:`mt-5 grid grid-cols-3 gap-3 text-center`,children:[(0,D.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-[#f8fbff] p-3`,children:[(0,D.jsx)(`div`,{className:`font-semibold text-ink`,children:r.learned}),(0,D.jsx)(`div`,{className:`text-xs text-slate-500`,children:`已学习`})]}),(0,D.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-[#f8fbff] p-3`,children:[(0,D.jsx)(`div`,{className:`font-semibold text-ink`,children:r.mastered}),(0,D.jsx)(`div`,{className:`text-xs text-slate-500`,children:`已掌握`})]}),(0,D.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-[#f8fbff] p-3`,children:[(0,D.jsx)(`div`,{className:`font-semibold text-ink`,children:r.due}),(0,D.jsx)(`div`,{className:`text-xs text-slate-500`,children:`待复习`})]})]}),(0,D.jsx)(`div`,{className:`mt-5`,children:(0,D.jsx)(Xt,{value:r.mastered,max:e.words.length,label:`掌握进度`})}),e.words.length?null:(0,D.jsxs)(`div`,{className:`mt-4 flex items-center gap-2 rounded-lg border border-copper/20 bg-copper/5 p-3 text-sm text-copper`,children:[(0,D.jsx)(ce,{size:16,"aria-hidden":`true`}),`这个单元文件已放入，但还需要继续补充可解析单词。`]})]},e.id)})})]})]})}function ur(e,t,n=0,r){let i=(0,y.useRef)(null),a=(0,y.useRef)(0),o=(0,y.useRef)(null),[s,c]=(0,y.useState)(0);return(0,y.useEffect)(()=>{if(!e)return;i.current=cn(e,t,n),a.current=Date.now(),c(0);let s=window.setInterval(()=>c(Math.floor((Date.now()-a.current)/1e3)),1e3),l=()=>{document.hidden?o.current=Date.now():o.current&&Date.now()-o.current>6e4&&(a.current+=Date.now()-o.current,o.current=null)};return document.addEventListener(`visibilitychange`,l),()=>{window.clearInterval(s),document.removeEventListener(`visibilitychange`,l);let e=i.current;!e||!r||(r({...e,endedAt:new Date().toISOString(),durationSeconds:Math.max(0,Math.floor((Date.now()-a.current)/1e3)),wordCount:n}),i.current=null)}},[e,r,t,n]),{seconds:s,minutes:Math.floor(s/60),active:!!(e&&i.current)}}function dr({mode:e,unitId:t,wordCount:n=0,onComplete:r}){let i=ur(e,t,n,r);return!e||!i.active?null:(0,D.jsxs)(`div`,{className:`fixed bottom-20 right-4 z-30 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-500 shadow-soft md:bottom-4`,children:[`本次 `,i.minutes,`分`,i.seconds%60,`秒`]})}var fr=`# 2027考研英语红宝书
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
`,pr=`# 2027考研英语红宝书
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

`,mr=`# 2027考研英语红宝书
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

`,hr=`# 2027考研英语红宝书
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

`,gr=`# 2027考研英语红宝书
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

`,_r=`# 2027考研英语红宝书
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

`,vr=`# 2027考研英语红宝书
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

`,yr=`# 2027考研英语红宝书
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

`,br=`# 2027考研英语红宝书
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
    conj. 如果，只要，在…条件下`,xr=`# 2027考研英语红宝书
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


`,Sr=`# 2027考研英语红宝书
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

`,Cr=`# 2027考研英语红宝书
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

`,wr=`# 2027考研英语红宝书
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

`,Tr=`# 2027考研英语红宝书
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

`,Er=`# 2027考研英语红宝书
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

`,Dr=`# 2027考研英语红宝书
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

`,Or=`# 2027考研英语红宝书
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

`,kr=`# 2027考研英语红宝书
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

`,Ar=`# 2027考研英语红宝书
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
`,jr=`# 2027考研英语红宝书
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
`,Mr=`# 2027考研英语红宝书
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

`,Nr=`# 2027考研英语红宝书
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

`,Pr=`# 2027考研英语红宝书
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
`,Fr=`# 2027考研英语红宝书必考词Unit 7（80词）提取结果
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

`,Ir=`# 必考词Unit8 69词
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

`,Lr=`# 必考词Unit9 68词
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

`,Rr=/^\s*(\d+)\.\s+\*\*(.+?)\*\*\s+(\/.+\/)\s*$/,zr=/^\s*([A-Za-z][A-Za-z'’.-]*(?:\s+[A-Za-z][A-Za-z'’.-]*)?)\s+(\/[^/]+\/)\s*$/,Br=/^((?:[a-z]+\.)+(?:\s+[a-z]+\.)*)\s+(.+)$/i;function Vr(e,t){let n=e.match(/^#{1,3}\s+(.+)$/m)?.[1]?.trim(),r=n?.match(/(必考词)\s*Unit\s*(\d+)/i);return r?`${r[1]} Unit${r[2]}`:n?.replace(/\s*\d+\s*词\s*$/,``).trim()||t}function Hr(e){let t=e.match(/^#{1,3}\s+.+?(\d+)\s*词/m)?.[1];return t?Number(t):void 0}function Ur(e){return e.map(e=>e.trim()).filter(Boolean).map(e=>{let t=e.match(Br);return t?{pos:t[1].trim(),meaning:t[2].trim()}:{pos:``,meaning:e}})}function Wr(e,t){let n=t.unitName||Vr(e,t.unitId),r=e.split(/\r?\n/),i=[],a,o=()=>{if(!a)return;let e=i.length+1;i.push({id:`${t.unitId}-${String(e).padStart(3,`0`)}`,unitId:t.unitId,unitName:n,order:e,word:a.word,phonetic:a.phonetic,definitions:Ur(a.definitions)})};for(let e of r){let t=e.match(Rr);if(t){o(),a={order:Number(t[1]),word:t[2].trim(),phonetic:t[3].trim(),definitions:[]};continue}let n=e.match(zr);if(n){o(),a={order:i.length+1,word:n[1].trim(),phonetic:n[2].trim(),definitions:[]};continue}a&&(!e.trim()||e.trim().startsWith(`#`)||a.definitions.push(e))}return o(),{id:t.unitId,name:n,order:t.order,expectedCount:Hr(e),words:i,referenceImages:t.referenceImages}}var Gr=Object.assign({"../../单词文本/分区/19.md":fr,"../../单词文本/分区/20.md":pr,"../../单词文本/分区/21.md":mr,"../../单词文本/分区/22.md":hr,"../../单词文本/分区/23.md":gr,"../../单词文本/分区/24.md":_r,"../../单词文本/分区/25.md":vr,"../../单词文本/分区/26.md":yr,"../../单词文本/分区/必修1.md":br,"../../单词文本/分区/必修10.md":xr,"../../单词文本/分区/必修11.md":Sr,"../../单词文本/分区/必修12.md":Cr,"../../单词文本/分区/必修13.md":wr,"../../单词文本/分区/必修14.md":Tr,"../../单词文本/分区/必修15.md":Er,"../../单词文本/分区/必修16.md":Dr,"../../单词文本/分区/必修17.md":Or,"../../单词文本/分区/必修18.md":kr,"../../单词文本/分区/必修2.md":Ar,"../../单词文本/分区/必修3.md":jr,"../../单词文本/分区/必修4.md":Mr,"../../单词文本/分区/必修5.md":Nr,"../../单词文本/分区/必修6 .md":Pr,"../../单词文本/分区/必修7.md":Fr,"../../单词文本/分区/必修8 .md":Ir,"../../单词文本/分区/必修9.md":Lr}),Kr={一:1,二:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9,十:10};function qr(e){return(e.split(`/`).pop()||e).replace(/\.[^.]+$/,``)}function Jr(e){let t=e.match(/\d+/)?.[0];if(t)return Number(t);let n=e.match(/[一二三四五六七八九十]+/)?.[0];if(n){if(n===`十`)return 10;if(n.startsWith(`十`))return 10+(Kr[n[1]]||0);if(n.endsWith(`十`))return(Kr[n[0]]||1)*10;if(n.includes(`十`)){let[e,t]=n.split(`十`);return(Kr[e]||1)*10+(Kr[t]||0)}return Kr[n]}}function Yr(e,t){let n=t?.match(/Unit\s*(\d+)/i)?.[1];return n?Number(n):Jr(qr(e))||999}var Xr=Object.entries(Gr).map(([e,t])=>{let n=Yr(e,t);return Wr(t,{unitId:`unit${n}`,unitName:`必备词 Unit${n}`,order:n})}).sort((e,t)=>e.order-t.order);Xr.find(e=>e.id===`unit1`)||Xr[0],Xr.find(e=>e.id===`unit2`);var P=Xr.flatMap(e=>e.words);function Zr(e){let t=new Blob([e],{type:`application/json`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`reword-progress-${new Date().toISOString().slice(0,10)}.json`,r.click(),URL.revokeObjectURL(n)}function Qr(e,t,n=6e4){return e.lastReviewedAt?t.getTime()-new Date(e.lastReviewedAt).getTime()<n:!1}function $r(e,t){return t.rewardHistory[0]&&t.rewardHistory[0]?.id!==e.rewardHistory[0]?.id}function ei(){let[e,t]=(0,y.useState)({name:`dashboard`}),[n,r]=(0,y.useState)(()=>gt()),[i,a]=(0,y.useState)(()=>Ct()),[o,s]=(0,y.useState)(),c=(0,y.useMemo)(()=>Xr.find(t=>t.id===e.unitId)||Xr[0],[e.unitId]),l=e.unitId?c.words:P;(0,y.useEffect)(()=>{(e.name===`study`||e.name===`recall`||e.name===`quiz`)&&window.scrollTo({top:0})},[e.name,e.unitId]),(0,y.useEffect)(()=>{if(!o)return;let e=window.setTimeout(()=>s(void 0),2600);return()=>window.clearTimeout(e)},[o]);let u=(e,t,r=n)=>{let i=Ht(t,P,r);return wt(i),$r(e,i)&&s(i.rewardHistory[0]),i},d=(e,t=n)=>{a(n=>u(n,e(n),t))},f=(e,t,n)=>{r(r=>{let i=r[e]||pt(e),o=t(i),s={...r,[e]:o};return _t(s),n&&a(e=>u(e,n(e,i,o,s),s)),s})},p=e=>{f(e,e=>Ot(e),(e,t)=>t.learned?e:k({...e,totalWordsLearned:e.totalWordsLearned+1},{type:`study`,title:`新词入库`,description:`完成 1 个新单词初学`,xp:2,coins:1,monsterPoints:1}))},m=(e,t)=>{let n=new Date;f(e,e=>t===`known`?kt(e,n):t===`fuzzy`?At(e,n):jt(e,n),(r,i,a)=>{if(Qr(i,n))return r;let o={...r,totalWordsReviewed:r.totalWordsReviewed+1};return t===`known`?o=k(o,{type:`review`,title:`复习命中`,description:`理解模式记住 1 个单词`,xp:4,coins:2,monsterPoints:3}):t===`fuzzy`&&(o=k(o,{type:`review`,title:`复习推进`,description:`标记 1 个不熟词，进入加固周期`,xp:1,monsterPoints:1})),t===`known`&&j(a)&&!o.defeatedWordIds.includes(e)&&(o=k({...o,defeatedWordIds:[...o.defeatedWordIds,e],defeatedMonsters:o.defeatedMonsters+1},{type:`monster`,title:`击败单词小怪`,description:`一个单词进入掌握状态`,xp:10,coins:5,monsterPoints:10})),o})},h=(e,t)=>{let n=new Date;f(e,e=>t?mt(kt({...e,correctCount:e.correctCount+1},n),`quiz-correct`,n):mt(jt({...e,wrongCount:e.wrongCount+1},n),`quiz-wrong`,n),(r,i,a)=>{let o=Qr(i,n),s={...r,totalQuizCount:r.totalQuizCount+1,totalCorrectCount:r.totalCorrectCount+ +!!t,totalWrongCount:r.totalWrongCount+ +!t};return!o&&t&&(s=k(s,{type:`quiz`,title:`测试答对`,description:`测验中答对 1 题`,xp:3,coins:1,monsterPoints:2})),t&&j(a)&&!s.defeatedWordIds.includes(e)&&(s=k({...s,defeatedWordIds:[...s.defeatedWordIds,e],defeatedMonsters:s.defeatedMonsters+1},{type:`monster`,title:`击败单词小怪`,description:`测试命中让单词进入掌握状态`,xp:10,coins:5,monsterPoints:10})),s})},g=e=>{try{r(bt(e)),a(Ct())}catch(e){window.alert(e instanceof Error?e.message:`导入失败`)}},_=()=>{window.confirm(`确定清空所有学习进度、金币和打卡记录吗？`)&&(vt(),r({}),a(Ct()))},v=(0,y.useCallback)(e=>{a(t=>{let n=un(t).todaySeconds,r=ln(t,e);if(r===t)return t;let i=un(r).todaySeconds;[{minutes:15,xp:20,coins:8,monsterPoints:8},{minutes:30,xp:35,coins:12,monsterPoints:12},{minutes:60,xp:80,coins:25,monsterPoints:25}].forEach(e=>{n<e.minutes*60&&i>=e.minutes*60&&(r=k(r,{type:`study`,title:`专注 ${e.minutes} 分钟`,description:`今日学习时长达标`,xp:e.xp,coins:e.coins,monsterPoints:e.monsterPoints}))});let a=Ht(r,P,gt());return wt(a),$r(t,a)&&s(a.rewardHistory[0]),a})},[]),b=()=>{d(e=>qt(e))},x=()=>{if(!Kt(P,n,i)){window.alert(`今日任务还没达成，先学几个新词、复习或完成一次测试。`);return}d(e=>Jt(e))},S=e=>{a(t=>{let n=$n(t,e);return n===t?(window.alert(`金币/钻石不足，或已经拥有这个物品。`),t):u(t,n)})},C=e=>{let t=Xr.find(t=>t.id===e);t&&d(r=>{let i=bn(t,n,r);return!i.eligible||i.defeated?(window.alert(`Boss 还不能挑战：需要本单元学习达到 80%，并且没有到期复习。`),r):k({...r,defeatedBossIds:[...r.defeatedBossIds,e],defeatedMonsters:r.defeatedMonsters+1},{type:`monster`,title:`击败 ${i.name}`,description:`完成一个单元 Boss 挑战`,xp:100,coins:50,diamonds:1,monsterPoints:60,bypassDailyCap:!0})})},w=e=>{d(t=>({...t,audioSettings:e}))},ee=e=>t({name:e}),te=e.name===`study`||e.name===`quiz`||e.name===`total`?e.name:e.name===`recall`?e.dueOnly?`review`:`recall`:void 0;return(0,D.jsxs)(Xe,{current:e.name,onNavigate:ee,children:[o?(0,D.jsx)(`div`,{className:`fixed left-1/2 top-20 z-50 w-[min(92vw,360px)] -translate-x-1/2`,children:(0,D.jsx)(Ze,{reward:o})}):null,e.name===`dashboard`?(0,D.jsx)(_n,{units:Xr,words:P,progressMap:n,stats:i,onSignIn:b,onNavigateReview:()=>t({name:`review`}),onNavigateUnits:()=>t({name:`units`}),onNavigateCheckIn:()=>t({name:`checkin`}),onNavigateMonster:()=>t({name:`monster`}),onNavigateShop:()=>t({name:`shop`}),onNavigateStatistics:()=>t({name:`statistics`})}):e.name===`units`?(0,D.jsx)(lr,{units:Xr,progressMap:n,onOpenUnit:e=>t({name:`unitDetail`,unitId:e})}):e.name===`unitDetail`?(0,D.jsx)(sr,{unit:c,progressMap:n,onStudy:()=>t({name:`study`,unitId:c.id}),onRecall:()=>t({name:`recall`,unitId:c.id}),onQuiz:()=>t({name:`quiz`,unitId:c.id})}):e.name===`study`?(0,D.jsx)(ar,{unit:e.unitId?c:void 0,words:l,progressMap:n,audioSettings:i.audioSettings,onLearn:p}):e.name===`recall`?(0,D.jsx)(qn,{title:e.unitId?`${c.name} 理解功能`:`总理解功能`,words:l,progressMap:n,audioSettings:i.audioSettings,initialDueOnly:e.dueOnly,onGrade:m,onBackToStudy:()=>t({name:`study`,unitId:e.unitId})}):e.name===`quiz`?(0,D.jsx)(Wn,{title:e.unitId?`${c.name} 测试功能`:`总测试功能`,words:l,allWords:P,progressMap:n,audioSettings:i.audioSettings,onAnswer:h}):e.name===`total`?(0,D.jsx)(or,{words:P,progressMap:n,audioSettings:i.audioSettings,onStudy:()=>t({name:`study`}),onRecall:()=>t({name:`recall`}),onQuiz:()=>t({name:`quiz`})}):e.name===`review`?(0,D.jsx)(Jn,{words:P,progressMap:n,audioSettings:i.audioSettings,onStartReview:()=>t({name:`recall`,dueOnly:!0}),onOpenUnits:()=>t({name:`units`})}):e.name===`checkin`?(0,D.jsx)(Zt,{words:P,progressMap:n,stats:i,onSignIn:b,onCheckIn:x}):e.name===`rewards`?(0,D.jsx)(Yn,{stats:i}):e.name===`shop`?(0,D.jsx)(tr,{stats:i,onExchange:S}):e.name===`monster`?(0,D.jsx)(wn,{words:P,units:Xr,progressMap:n,stats:i,onChallengeBoss:C}):e.name===`statistics`?(0,D.jsx)(rr,{stats:i,words:P,progressMap:n}):e.name===`achievements`?(0,D.jsx)(Ut,{stats:i,words:P,progressMap:n}):e.name===`settings`?(0,D.jsx)(Xn,{stats:i,onUpdateAudio:w}):(0,D.jsx)(Tn,{words:P,progressMap:n,stats:i,onNavigateCheckIn:()=>t({name:`checkin`}),onNavigateRewards:()=>t({name:`rewards`}),onNavigateShop:()=>t({name:`shop`}),onNavigateStatistics:()=>t({name:`statistics`}),onNavigateAchievements:()=>t({name:`achievements`}),onNavigateSettings:()=>t({name:`settings`}),onExport:()=>Zr(yt()),onImport:g,onReset:_}),(0,D.jsx)(dr,{mode:te,unitId:e.unitId,wordCount:l.length,onComplete:v})]})}Le.createRoot(document.getElementById(`root`)).render((0,D.jsx)(y.StrictMode,{children:(0,D.jsx)(ei,{})})),`serviceWorker`in navigator&&window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`/reword/sw.js`).catch(()=>void 0)});