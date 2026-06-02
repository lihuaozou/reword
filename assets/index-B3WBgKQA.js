var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.provider`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.iterator;function p(e){return typeof e!=`object`||!e?null:(e=f&&e[f]||e[`@@iterator`],typeof e==`function`?e:null)}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function _(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`setState(...): takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function v(){}v.prototype=_.prototype;function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}var b=y.prototype=new v;b.constructor=y,h(b,_.prototype),b.isPureReactComponent=!0;var x=Array.isArray,S=Object.prototype.hasOwnProperty,C={current:null},ee={key:!0,ref:!0,__self:!0,__source:!0};function te(e,n,r){var i,a={},o=null,s=null;if(n!=null)for(i in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=``+n.key),n)S.call(n,i)&&!ee.hasOwnProperty(i)&&(a[i]=n[i]);var c=arguments.length-2;if(c===1)a.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)a[i]===void 0&&(a[i]=c[i]);return{$$typeof:t,type:e,key:o,ref:s,props:a,_owner:C.current}}function ne(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function re(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ie(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ae=/\/+/g;function oe(e,t){return typeof e==`object`&&e&&e.key!=null?ie(``+e.key):t.toString(36)}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0}}if(c)return c=e,o=o(c),e=a===``?`.`+oe(c,0):a,x(o)?(i=``,e!=null&&(i=e.replace(ae,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(re(o)&&(o=ne(o,i+(!o.key||c&&c.key===o.key?``:(``+o.key).replace(ae,`$&/`)+`/`)+e)),r.push(o)),1;if(c=0,a=a===``?`.`:a+`:`,x(e))for(var l=0;l<e.length;l++){s=e[l];var u=a+oe(s,l);c+=se(s,r,i,u,o)}else if(u=p(e),typeof u==`function`)for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=a+oe(s,l++),c+=se(s,r,i,u,o);else if(s===`object`)throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`);return c}function ce(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function le(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},de={transition:null},fe={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:de,ReactCurrentOwner:C};function pe(){throw Error(`act(...) is not supported in production builds of React.`)}e.Children={map:ce,forEach:function(e,t,n){ce(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ce(e,function(){t++}),t},toArray:function(e){return ce(e,function(e){return e})||[]},only:function(e){if(!re(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}},e.Component=_,e.Fragment=r,e.Profiler=a,e.PureComponent=y,e.StrictMode=i,e.Suspense=l,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,e.act=pe,e.cloneElement=function(e,n,r){if(e==null)throw Error(`React.cloneElement(...): The argument must be a React element, but you passed `+e+`.`);var i=h({},e.props),a=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=C.current),n.key!==void 0&&(a=``+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)S.call(n,l)&&!ee.hasOwnProperty(l)&&(i[l]=n[l]===void 0&&c!==void 0?c[l]:n[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:t,type:e.type,key:a,ref:o,props:i,_owner:s}},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:o,_context:e},e.Consumer=e},e.createElement=te,e.createFactory=function(e){var t=te.bind(null,e);return t.type=e,t},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=re,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:le}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=de.transition;de.transition={};try{e()}finally{de.transition=t}},e.unstable_act=pe,e.useCallback=function(e,t){return ue.current.useCallback(e,t)},e.useContext=function(e){return ue.current.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e){return ue.current.useDeferredValue(e)},e.useEffect=function(e,t){return ue.current.useEffect(e,t)},e.useId=function(){return ue.current.useId()},e.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)},e.useMemo=function(e,t){return ue.current.useMemo(e,t)},e.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)},e.useRef=function(e){return ue.current.useRef(e)},e.useState=function(e){return ue.current.useState(e)},e.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)},e.useTransition=function(){return ue.current.useTransition()},e.version=`18.3.1`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=typeof setTimeout==`function`?setTimeout:null,_=typeof clearTimeout==`function`?clearTimeout:null,v=typeof setImmediate<`u`?setImmediate:null;typeof navigator<`u`&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function b(e){if(h=!1,y(e),!m)if(n(c)!==null)m=!0,ce(x);else{var t=n(l);t!==null&&le(b,t.startTime-e)}}function x(t,i){m=!1,h&&(h=!1,_(ee),ee=-1),p=!0;var a=f;try{for(y(i),d=n(c);d!==null&&(!(d.expirationTime>i)||t&&!re());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=i);i=e.unstable_now(),typeof s==`function`?d.callback=s:d===n(c)&&r(c),y(i)}else r(c);d=n(c)}if(d!==null)var u=!0;else{var g=n(l);g!==null&&le(b,g.startTime-i),u=!1}return u}finally{d=null,f=a,p=!1}}var S=!1,C=null,ee=-1,te=5,ne=-1;function re(){return!(e.unstable_now()-ne<te)}function ie(){if(C!==null){var t=e.unstable_now();ne=t;var n=!0;try{n=C(!0,t)}finally{n?ae():(S=!1,C=null)}}else S=!1}var ae;if(typeof v==`function`)ae=function(){v(ie)};else if(typeof MessageChannel<`u`){var oe=new MessageChannel,se=oe.port2;oe.port1.onmessage=ie,ae=function(){se.postMessage(null)}}else ae=function(){g(ie,0)};function ce(e){C=e,S||(S=!0,ae())}function le(t,n){ee=g(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,ce(x))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):te=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(_(ee),ee=-1):h=!0,le(b,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ce(x))),r},e.unstable_shouldYield=re,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u(),n=f();function r(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}var i=new Set,a={};function o(e,t){s(e,t),s(e+`Capture`,t)}function s(e,t){for(a[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),l=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function h(e){return l.call(m,e)?!0:l.call(p,e)?!1:d.test(e)?m[e]=!0:(p[e]=!0,!1)}function g(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case`function`:case`symbol`:return!0;case`boolean`:return r?!1:n===null?(e=e.toLowerCase().slice(0,5),e!==`data-`&&e!==`aria-`):!n.acceptsBooleans;default:return!1}}function _(e,t,n,r){if(t==null||g(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function v(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var y={};`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach(function(e){y[e]=new v(e,0,!1,e,null,!1,!1)}),[[`acceptCharset`,`accept-charset`],[`className`,`class`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`]].forEach(function(e){var t=e[0];y[t]=new v(t,1,!1,e[1],null,!1,!1)}),[`contentEditable`,`draggable`,`spellCheck`,`value`].forEach(function(e){y[e]=new v(e,2,!1,e.toLowerCase(),null,!1,!1)}),[`autoReverse`,`externalResourcesRequired`,`focusable`,`preserveAlpha`].forEach(function(e){y[e]=new v(e,2,!1,e,null,!1,!1)}),`allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach(function(e){y[e]=new v(e,3,!1,e.toLowerCase(),null,!1,!1)}),[`checked`,`multiple`,`muted`,`selected`].forEach(function(e){y[e]=new v(e,3,!0,e,null,!1,!1)}),[`capture`,`download`].forEach(function(e){y[e]=new v(e,4,!1,e,null,!1,!1)}),[`cols`,`rows`,`size`,`span`].forEach(function(e){y[e]=new v(e,6,!1,e,null,!1,!1)}),[`rowSpan`,`start`].forEach(function(e){y[e]=new v(e,5,!1,e.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function x(e){return e[1].toUpperCase()}`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,null,!1,!1)}),`xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/1999/xlink`,!1,!1)}),[`xml:base`,`xml:lang`,`xml:space`].forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/XML/1998/namespace`,!1,!1)}),[`tabIndex`,`crossOrigin`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!1,!1)}),y.xlinkHref=new v(`xlinkHref`,1,!1,`xlink:href`,`http://www.w3.org/1999/xlink`,!0,!1),[`src`,`href`,`action`,`formAction`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!0,!0)});function S(e,t,n,r){var i=y.hasOwnProperty(t)?y[t]:null;(i===null?r||!(2<t.length)||t[0]!==`o`&&t[0]!==`O`||t[1]!==`n`&&t[1]!==`N`:i.type!==0)&&(_(t,n,i,r)&&(n=null),r||i===null?h(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,``+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:``:n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&!0===n?``:``+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var C=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ee=Symbol.for(`react.element`),te=Symbol.for(`react.portal`),ne=Symbol.for(`react.fragment`),re=Symbol.for(`react.strict_mode`),ie=Symbol.for(`react.profiler`),ae=Symbol.for(`react.provider`),oe=Symbol.for(`react.context`),se=Symbol.for(`react.forward_ref`),ce=Symbol.for(`react.suspense`),le=Symbol.for(`react.suspense_list`),ue=Symbol.for(`react.memo`),de=Symbol.for(`react.lazy`),fe=Symbol.for(`react.offscreen`),pe=Symbol.iterator;function me(e){return typeof e!=`object`||!e?null:(e=pe&&e[pe]||e[`@@iterator`],typeof e==`function`?e:null)}var w=Object.assign,he;function ge(e){if(he===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);he=t&&t[1]||``}return`
`+he+e}var _e=!1;function ve(e,t){if(!e||_e)return``;_e=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&typeof t.stack==`string`){for(var i=t.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var c=`
`+i[o].replace(` at new `,` at `);return e.displayName&&c.includes(`<anonymous>`)&&(c=c.replace(`<anonymous>`,e.displayName)),c}while(1<=o&&0<=s);break}}}finally{_e=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:``)?ge(e):``}function ye(e){switch(e.tag){case 5:return ge(e.type);case 16:return ge(`Lazy`);case 13:return ge(`Suspense`);case 19:return ge(`SuspenseList`);case 0:case 2:case 15:return e=ve(e.type,!1),e;case 11:return e=ve(e.type.render,!1),e;case 1:return e=ve(e.type,!0),e;default:return``}}function be(e){if(e==null)return null;if(typeof e==`function`)return e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case ne:return`Fragment`;case te:return`Portal`;case ie:return`Profiler`;case re:return`StrictMode`;case ce:return`Suspense`;case le:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case oe:return(e.displayName||`Context`)+`.Consumer`;case ae:return(e._context.displayName||`Context`)+`.Provider`;case se:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ue:return t=e.displayName||null,t===null?be(e.type)||`Memo`:t;case de:t=e._payload,e=e._init;try{return be(e(t))}catch{}}return null}function xe(e){var t=e.type;switch(e.tag){case 24:return`Cache`;case 9:return(t.displayName||`Context`)+`.Consumer`;case 10:return(t._context.displayName||`Context`)+`.Provider`;case 18:return`DehydratedFragment`;case 11:return e=t.render,e=e.displayName||e.name||``,t.displayName||(e===``?`ForwardRef`:`ForwardRef(`+e+`)`);case 7:return`Fragment`;case 5:return t;case 4:return`Portal`;case 3:return`Root`;case 6:return`Text`;case 16:return be(t);case 8:return t===re?`StrictMode`:`Mode`;case 22:return`Offscreen`;case 12:return`Profiler`;case 21:return`Scope`;case 13:return`Suspense`;case 19:return`SuspenseList`;case 25:return`TracingMarker`;case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t==`function`)return t.displayName||t.name||null;if(typeof t==`string`)return t}return null}function Se(e){switch(typeof e){case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Ce(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function we(e){var t=Ce(e)?`checked`:`value`,n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=``+e[t];if(!e.hasOwnProperty(t)&&n!==void 0&&typeof n.get==`function`&&typeof n.set==`function`){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Te(e){e._valueTracker||=we(e)}function Ee(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Ce(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function De(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Oe(e,t){var n=t.checked;return w({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ke(e,t){var n=t.defaultValue==null?``:t.defaultValue,r=t.checked==null?t.defaultChecked:t.checked;n=Se(t.value==null?n:t.value),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type===`checkbox`||t.type===`radio`?t.checked!=null:t.value!=null}}function Ae(e,t){t=t.checked,t!=null&&S(e,`checked`,t,!1)}function je(e,t){Ae(e,t);var n=Se(t.value),r=t.type;if(n!=null)r===`number`?(n===0&&e.value===``||e.value!=n)&&(e.value=``+n):e.value!==``+n&&(e.value=``+n);else if(r===`submit`||r===`reset`){e.removeAttribute(`value`);return}t.hasOwnProperty(`value`)?Ne(e,t.type,n):t.hasOwnProperty(`defaultValue`)&&Ne(e,t.type,Se(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Me(e,t,n){if(t.hasOwnProperty(`value`)||t.hasOwnProperty(`defaultValue`)){var r=t.type;if(!(r!==`submit`&&r!==`reset`||t.value!==void 0&&t.value!==null))return;t=``+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==``&&(e.name=``),e.defaultChecked=!!e._wrapperState.initialChecked,n!==``&&(e.name=n)}function Ne(e,t,n){(t!==`number`||De(e.ownerDocument)!==e)&&(n==null?e.defaultValue=``+e._wrapperState.initialValue:e.defaultValue!==``+n&&(e.defaultValue=``+n))}var Pe=Array.isArray;function Fe(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Se(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ie(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return w({},t,{value:void 0,defaultValue:void 0,children:``+e._wrapperState.initialValue})}function Le(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(r(92));if(Pe(n)){if(1<n.length)throw Error(r(93));n=n[0]}t=n}t??=``,n=t}e._wrapperState={initialValue:Se(n)}}function Re(e,t){var n=Se(t.value),r=Se(t.defaultValue);n!=null&&(n=``+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=``+r)}function ze(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==``&&t!==null&&(e.value=t)}function Be(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`math`:return`http://www.w3.org/1998/Math/MathML`;default:return`http://www.w3.org/1999/xhtml`}}function Ve(e,t){return e==null||e===`http://www.w3.org/1999/xhtml`?Be(t):e===`http://www.w3.org/2000/svg`&&t===`foreignObject`?`http://www.w3.org/1999/xhtml`:e}var He,Ue=function(e){return typeof MSApp<`u`&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==`http://www.w3.org/2000/svg`||`innerHTML`in e)e.innerHTML=t;else{for(He||=document.createElement(`div`),He.innerHTML=`<svg>`+t.valueOf().toString()+`</svg>`,t=He.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function We(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ge={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ke=[`Webkit`,`ms`,`Moz`,`O`];Object.keys(Ge).forEach(function(e){Ke.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ge[t]=Ge[e]})});function qe(e,t,n){return t==null||typeof t==`boolean`||t===``?``:n||typeof t!=`number`||t===0||Ge.hasOwnProperty(e)&&Ge[e]?(``+t).trim():t+`px`}function Je(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=n.indexOf(`--`)===0,i=qe(n,t[n],r);n===`float`&&(n=`cssFloat`),r?e.setProperty(n,i):e[n]=i}}var Ye=w({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xe(e,t){if(t){if(Ye[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!=`object`||!(`__html`in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!=`object`)throw Error(r(62))}}function Ze(e,t){if(e.indexOf(`-`)===-1)return typeof t.is==`string`;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Qe=null;function $e(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var et=null,tt=null,nt=null;function rt(e){if(e=Yi(e)){if(typeof et!=`function`)throw Error(r(280));var t=e.stateNode;t&&(t=Xi(t),et(e.stateNode,e.type,t))}}function it(e){tt?nt?nt.push(e):nt=[e]:tt=e}function at(){if(tt){var e=tt,t=nt;if(nt=tt=null,rt(e),t)for(e=0;e<t.length;e++)rt(t[e])}}function T(e,t){return e(t)}function ot(){}var st=!1;function ct(e,t,n){if(st)return e(t,n);st=!0;try{return T(e,t,n)}finally{st=!1,(tt!==null||nt!==null)&&(ot(),at())}}function lt(e,t){var n=e.stateNode;if(n===null)return null;var i=Xi(n);if(i===null)return null;n=i[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(i=!i.disabled)||(e=e.type,i=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!i;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(r(231,t,typeof n));return n}var ut=!1;if(c)try{var dt={};Object.defineProperty(dt,"passive",{get:function(){ut=!0}}),window.addEventListener(`test`,dt,dt),window.removeEventListener(`test`,dt,dt)}catch{ut=!1}function ft(e,t,n,r,i,a,o,s,c){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(e){this.onError(e)}}var pt=!1,mt=null,ht=!1,gt=null,_t={onError:function(e){pt=!0,mt=e}};function vt(e,t,n,r,i,a,o,s,c){pt=!1,mt=null,ft.apply(_t,arguments)}function yt(e,t,n,i,a,o,s,c,l){if(vt.apply(this,arguments),pt){if(pt){var u=mt;pt=!1,mt=null}else throw Error(r(198));ht||(ht=!0,gt=u)}}function bt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function xt(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function St(e){if(bt(e)!==e)throw Error(r(188))}function Ct(e){var t=e.alternate;if(!t){if(t=bt(e),t===null)throw Error(r(188));return t===e?e:null}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return St(a),e;if(o===i)return St(a),t;o=o.sibling}throw Error(r(188))}if(n.return!==i.return)n=a,i=o;else{for(var s=!1,c=a.child;c;){if(c===n){s=!0,n=a,i=o;break}if(c===i){s=!0,i=a,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,i=a;break}if(c===i){s=!0,i=o,n=a;break}c=c.sibling}if(!s)throw Error(r(189))}}if(n.alternate!==i)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:t}function wt(e){return e=Ct(e),e===null?null:Tt(e)}function Tt(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Tt(e);if(t!==null)return t;e=e.sibling}return null}var Et=n.unstable_scheduleCallback,Dt=n.unstable_cancelCallback,Ot=n.unstable_shouldYield,kt=n.unstable_requestPaint,E=n.unstable_now,At=n.unstable_getCurrentPriorityLevel,jt=n.unstable_ImmediatePriority,Mt=n.unstable_UserBlockingPriority,Nt=n.unstable_NormalPriority,Pt=n.unstable_LowPriority,Ft=n.unstable_IdlePriority,It=null,Lt=null;function Rt(e){if(Lt&&typeof Lt.onCommitFiberRoot==`function`)try{Lt.onCommitFiberRoot(It,e,void 0,(e.current.flags&128)==128)}catch{}}var zt=Math.clz32?Math.clz32:Ht,Bt=Math.log,Vt=Math.LN2;function Ht(e){return e>>>=0,e===0?32:31-(Bt(e)/Vt|0)|0}var Ut=64,Wt=4194304;function Gt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Kt(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s===0?(a&=o,a!==0&&(r=Gt(a))):r=Gt(s)}else o=n&~i,o===0?a!==0&&(r=Gt(a)):r=Gt(o);if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===16&&a&4194240))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-zt(t),i=1<<n,r|=e[n],t&=~i;return r}function qt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jt(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-zt(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=qt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}}function Yt(e){return e=e.pendingLanes&-1073741825,e===0?e&1073741824?1073741824:0:e}function Xt(){var e=Ut;return Ut<<=1,!(Ut&4194240)&&(Ut=64),e}function Zt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qt(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-zt(t),e[t]=n}function $t(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-zt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function en(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-zt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var D=0;function tn(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var nn,rn,an,O,on,sn=!1,cn=[],ln=null,un=null,dn=null,fn=new Map,pn=new Map,mn=[],hn=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(` `);function gn(e,t){switch(e){case`focusin`:case`focusout`:ln=null;break;case`dragenter`:case`dragleave`:un=null;break;case`mouseover`:case`mouseout`:dn=null;break;case`pointerover`:case`pointerout`:fn.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:pn.delete(t.pointerId)}}function _n(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Yi(t),t!==null&&rn(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function vn(e,t,n,r,i){switch(t){case`focusin`:return ln=_n(ln,e,t,n,r,i),!0;case`dragenter`:return un=_n(un,e,t,n,r,i),!0;case`mouseover`:return dn=_n(dn,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return fn.set(a,_n(fn.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,pn.set(a,_n(pn.get(a)||null,e,t,n,r,i)),!0}return!1}function yn(e){var t=Ji(e.target);if(t!==null){var n=bt(t);if(n!==null){if(t=n.tag,t===13){if(t=xt(n),t!==null){e.blockedOn=t,on(e.priority,function(){an(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=jn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Qe=r,n.target.dispatchEvent(r),Qe=null}else return t=Yi(n),t!==null&&rn(t),e.blockedOn=n,!1;t.shift()}return!0}function xn(e,t,n){bn(e)&&n.delete(t)}function Sn(){sn=!1,ln!==null&&bn(ln)&&(ln=null),un!==null&&bn(un)&&(un=null),dn!==null&&bn(dn)&&(dn=null),fn.forEach(xn),pn.forEach(xn)}function Cn(e,t){e.blockedOn===t&&(e.blockedOn=null,sn||(sn=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Sn)))}function wn(e){function t(t){return Cn(t,e)}if(0<cn.length){Cn(cn[0],e);for(var n=1;n<cn.length;n++){var r=cn[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ln!==null&&Cn(ln,e),un!==null&&Cn(un,e),dn!==null&&Cn(dn,e),fn.forEach(t),pn.forEach(t),n=0;n<mn.length;n++)r=mn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<mn.length&&(n=mn[0],n.blockedOn===null);)yn(n),n.blockedOn===null&&mn.shift()}var Tn=C.ReactCurrentBatchConfig,En=!0;function Dn(e,t,n,r){var i=D,a=Tn.transition;Tn.transition=null;try{D=1,kn(e,t,n,r)}finally{D=i,Tn.transition=a}}function On(e,t,n,r){var i=D,a=Tn.transition;Tn.transition=null;try{D=4,kn(e,t,n,r)}finally{D=i,Tn.transition=a}}function kn(e,t,n,r){if(En){var i=jn(e,t,n,r);if(i===null)xi(e,t,r,An,n),gn(e,r);else if(vn(i,e,t,n,r))r.stopPropagation();else if(gn(e,r),t&4&&-1<hn.indexOf(e)){for(;i!==null;){var a=Yi(i);if(a!==null&&nn(a),a=jn(e,t,n,r),a===null&&xi(e,t,r,An,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else xi(e,t,r,null,n)}}var An=null;function jn(e,t,n,r){if(An=null,e=$e(r),e=Ji(e),e!==null)if(t=bt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=xt(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return An=e,null}function Mn(e){switch(e){case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 1;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`toggle`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 4;case`message`:switch(At()){case jt:return 1;case Mt:return 4;case Nt:case Pt:return 16;case Ft:return 536870912;default:return 16}default:return 16}}var Nn=null,Pn=null,Fn=null;function In(){if(Fn)return Fn;var e,t=Pn,n=t.length,r,i=`value`in Nn?Nn.value:Nn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Fn=i.slice(e,1<r?1-r:void 0)}function Ln(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Rn(){return!0}function zn(){return!1}function Bn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Rn:zn,this.isPropagationStopped=zn,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Rn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Rn)},persist:function(){},isPersistent:Rn}),t}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hn=Bn(Vn),Un=w({},Vn,{view:0,detail:0}),Wn=Bn(Un),Gn,Kn,qn,Jn=w({},Un,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ar,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==qn&&(qn&&e.type===`mousemove`?(Gn=e.screenX-qn.screenX,Kn=e.screenY-qn.screenY):Kn=Gn=0,qn=e),Gn)},movementY:function(e){return`movementY`in e?e.movementY:Kn}}),Yn=Bn(Jn),Xn=Bn(w({},Jn,{dataTransfer:0})),Zn=Bn(w({},Un,{relatedTarget:0})),Qn=Bn(w({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0})),$n=Bn(w({},Vn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),er=Bn(w({},Vn,{data:0})),tr={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},nr={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},rr={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function ir(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rr[e])?!!t[e]:!1}function ar(){return ir}var or=Bn(w({},Un,{key:function(e){if(e.key){var t=tr[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Ln(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?nr[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ar,charCode:function(e){return e.type===`keypress`?Ln(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Ln(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),sr=Bn(w({},Jn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),cr=Bn(w({},Un,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ar})),lr=Bn(w({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0})),ur=Bn(w({},Jn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),dr=[9,13,27,32],fr=c&&`CompositionEvent`in window,pr=null;c&&`documentMode`in document&&(pr=document.documentMode);var mr=c&&`TextEvent`in window&&!pr,hr=c&&(!fr||pr&&8<pr&&11>=pr),gr=` `,_r=!1;function vr(e,t){switch(e){case`keyup`:return dr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function yr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var k=!1;function br(e,t){switch(e){case`compositionend`:return yr(t);case`keypress`:return t.which===32?(_r=!0,gr):null;case`textInput`:return e=t.data,e===gr&&_r?null:e;default:return null}}function xr(e,t){if(k)return e===`compositionend`||!fr&&vr(e,t)?(e=In(),Fn=Pn=Nn=null,k=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return hr&&t.locale!==`ko`?null:t.data;default:return null}}var Sr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Sr[e.type]:t===`textarea`}function wr(e,t,n,r){it(r),t=Ci(t,`onChange`),0<t.length&&(n=new Hn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Tr=null,Er=null;function Dr(e){_i(e,0)}function Or(e){if(Ee(P(e)))return e}function kr(e,t){if(e===`change`)return t}var Ar=!1;if(c){var jr;if(c){var Mr=`oninput`in document;if(!Mr){var Nr=document.createElement(`div`);Nr.setAttribute(`oninput`,`return;`),Mr=typeof Nr.oninput==`function`}jr=Mr}else jr=!1;Ar=jr&&(!document.documentMode||9<document.documentMode)}function Pr(){Tr&&(Tr.detachEvent(`onpropertychange`,Fr),Er=Tr=null)}function Fr(e){if(e.propertyName===`value`&&Or(Er)){var t=[];wr(t,Er,e,$e(e)),ct(Dr,t)}}function Ir(e,t,n){e===`focusin`?(Pr(),Tr=t,Er=n,Tr.attachEvent(`onpropertychange`,Fr)):e===`focusout`&&Pr()}function Lr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Or(Er)}function Rr(e,t){if(e===`click`)return Or(t)}function zr(e,t){if(e===`input`||e===`change`)return Or(t)}function Br(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Vr=typeof Object.is==`function`?Object.is:Br;function Hr(e,t){if(Vr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!l.call(t,i)||!Vr(e[i],t[i]))return!1}return!0}function Ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wr(e,t){var n=Ur(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Ur(n)}}function Gr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Kr(){for(var e=window,t=De();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=De(e.document)}return t}function qr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}function Jr(e){var t=Kr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Gr(n.ownerDocument.documentElement,n)){if(r!==null&&qr(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),`selectionStart`in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Wr(n,a);var o=Wr(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus==`function`&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Yr=c&&`documentMode`in document&&11>=document.documentMode,Xr=null,Zr=null,Qr=null,$r=!1;function ei(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$r||Xr==null||Xr!==De(r)||(r=Xr,`selectionStart`in r&&qr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qr&&Hr(Qr,r)||(Qr=r,r=Ci(Zr,`onSelect`),0<r.length&&(t=new Hn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Xr)))}function ti(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var ni={animationend:ti(`Animation`,`AnimationEnd`),animationiteration:ti(`Animation`,`AnimationIteration`),animationstart:ti(`Animation`,`AnimationStart`),transitionend:ti(`Transition`,`TransitionEnd`)},ri={},ii={};c&&(ii=document.createElement(`div`).style,`AnimationEvent`in window||(delete ni.animationend.animation,delete ni.animationiteration.animation,delete ni.animationstart.animation),`TransitionEvent`in window||delete ni.transitionend.transition);function ai(e){if(ri[e])return ri[e];if(!ni[e])return e;var t=ni[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ii)return ri[e]=t[n];return e}var oi=ai(`animationend`),si=ai(`animationiteration`),ci=ai(`animationstart`),li=ai(`transitionend`),ui=new Map,di=`abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);function fi(e,t){ui.set(e,t),o(t,[e])}for(var pi=0;pi<di.length;pi++){var mi=di[pi];fi(mi.toLowerCase(),`on`+(mi[0].toUpperCase()+mi.slice(1)))}fi(oi,`onAnimationEnd`),fi(si,`onAnimationIteration`),fi(ci,`onAnimationStart`),fi(`dblclick`,`onDoubleClick`),fi(`focusin`,`onFocus`),fi(`focusout`,`onBlur`),fi(li,`onTransitionEnd`),s(`onMouseEnter`,[`mouseout`,`mouseover`]),s(`onMouseLeave`,[`mouseout`,`mouseover`]),s(`onPointerEnter`,[`pointerout`,`pointerover`]),s(`onPointerLeave`,[`pointerout`,`pointerover`]),o(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),o(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),o(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),o(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var A=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),hi=new Set(`cancel close invalid load scroll toggle`.split(` `).concat(A));function gi(e,t,n){var r=e.type||`unknown-event`;e.currentTarget=n,yt(r,t,void 0,e),e.currentTarget=null}function _i(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;gi(i,s,l),a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;gi(i,s,l),a=c}}}if(ht)throw e=gt,ht=!1,gt=null,e}function j(e,t){var n=t[Gi];n===void 0&&(n=t[Gi]=new Set);var r=e+`__bubble`;n.has(r)||(bi(t,e,2,!1),n.add(r))}function M(e,t,n){var r=0;t&&(r|=4),bi(n,e,r,t)}var vi=`_reactListening`+Math.random().toString(36).slice(2);function yi(e){if(!e[vi]){e[vi]=!0,i.forEach(function(t){t!==`selectionchange`&&(hi.has(t)||M(t,!1,e),M(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vi]||(t[vi]=!0,M(`selectionchange`,!1,t))}}function bi(e,t,n,r){switch(Mn(t)){case 1:var i=Dn;break;case 4:i=On;break;default:i=kn}n=i.bind(null,t,n,e),i=void 0,!ut||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function xi(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Ji(s),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue a}s=s.parentNode}}r=r.return}ct(function(){var r=a,i=$e(n),o=[];a:{var s=ui.get(e);if(s!==void 0){var c=Hn,l=e;switch(e){case`keypress`:if(Ln(n)===0)break a;case`keydown`:case`keyup`:c=or;break;case`focusin`:l=`focus`,c=Zn;break;case`focusout`:l=`blur`,c=Zn;break;case`beforeblur`:case`afterblur`:c=Zn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Yn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Xn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=cr;break;case oi:case si:case ci:c=Qn;break;case li:c=lr;break;case`scroll`:c=Wn;break;case`wheel`:c=ur;break;case`copy`:case`cut`:case`paste`:c=$n;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=sr}var u=(t&4)!=0,d=!u&&e===`scroll`,f=u?s===null?null:s+`Capture`:s;u=[];for(var p=r,m;p!==null;){m=p;var h=m.stateNode;if(m.tag===5&&h!==null&&(m=h,f!==null&&(h=lt(p,f),h!=null&&u.push(Si(p,h,m)))),d)break;p=p.return}0<u.length&&(s=new c(s,l,null,n,i),o.push({event:s,listeners:u}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==Qe&&(l=n.relatedTarget||n.fromElement)&&(Ji(l)||l[Wi]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Ji(l):null,l!==null&&(d=bt(l),l!==d||l.tag!==5&&l.tag!==6)&&(l=null)):(c=null,l=r),c!==l)){if(u=Yn,h=`onMouseLeave`,f=`onMouseEnter`,p=`mouse`,(e===`pointerout`||e===`pointerover`)&&(u=sr,h=`onPointerLeave`,f=`onPointerEnter`,p=`pointer`),d=c==null?s:P(c),m=l==null?s:P(l),s=new u(h,p+`leave`,c,n,i),s.target=d,s.relatedTarget=m,h=null,Ji(i)===r&&(u=new u(f,p+`enter`,l,n,i),u.target=m,u.relatedTarget=d,h=u),d=h,c&&l)b:{for(u=c,f=l,p=0,m=u;m;m=wi(m))p++;for(m=0,h=f;h;h=wi(h))m++;for(;0<p-m;)u=wi(u),p--;for(;0<m-p;)f=wi(f),m--;for(;p--;){if(u===f||f!==null&&u===f.alternate)break b;u=wi(u),f=wi(f)}u=null}else u=null;c!==null&&Ti(o,s,c,u,!1),l!==null&&d!==null&&Ti(o,d,l,u,!0)}}a:{if(s=r?P(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var g=kr;else if(Cr(s))if(Ar)g=zr;else{g=Lr;var _=Ir}else (c=s.nodeName)&&c.toLowerCase()===`input`&&(s.type===`checkbox`||s.type===`radio`)&&(g=Rr);if(g&&=g(e,r)){wr(o,g,n,i);break a}_&&_(e,s,r),e===`focusout`&&(_=s._wrapperState)&&_.controlled&&s.type===`number`&&Ne(s,`number`,s.value)}switch(_=r?P(r):window,e){case`focusin`:(Cr(_)||_.contentEditable===`true`)&&(Xr=_,Zr=r,Qr=null);break;case`focusout`:Qr=Zr=Xr=null;break;case`mousedown`:$r=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:$r=!1,ei(o,n,i);break;case`selectionchange`:if(Yr)break;case`keydown`:case`keyup`:ei(o,n,i)}var v;if(fr)b:{switch(e){case`compositionstart`:var y=`onCompositionStart`;break b;case`compositionend`:y=`onCompositionEnd`;break b;case`compositionupdate`:y=`onCompositionUpdate`;break b}y=void 0}else k?vr(e,n)&&(y=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(y=`onCompositionStart`);y&&(hr&&n.locale!==`ko`&&(k||y!==`onCompositionStart`?y===`onCompositionEnd`&&k&&(v=In()):(Nn=i,Pn=`value`in Nn?Nn.value:Nn.textContent,k=!0)),_=Ci(r,y),0<_.length&&(y=new er(y,e,null,n,i),o.push({event:y,listeners:_}),v?y.data=v:(v=yr(n),v!==null&&(y.data=v)))),(v=mr?br(e,n):xr(e,n))&&(r=Ci(r,`onBeforeInput`),0<r.length&&(i=new er(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:i,listeners:r}),i.data=v))}_i(o,t)})}function Si(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ci(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=lt(e,n),a!=null&&r.unshift(Si(e,a,i)),a=lt(e,t),a!=null&&r.push(Si(e,a,i))),e=e.return}return r}function wi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ti(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&l!==null&&(s=l,i?(c=lt(n,a),c!=null&&o.unshift(Si(n,c,s))):i||(c=lt(n,a),c!=null&&o.push(Si(n,c,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ei=/\r\n?/g,Di=/\u0000|\uFFFD/g;function Oi(e){return(typeof e==`string`?e:``+e).replace(Ei,`
`).replace(Di,``)}function ki(e,t,n){if(t=Oi(t),Oi(e)!==t&&n)throw Error(r(425))}function Ai(){}var ji=null,Mi=null;function Ni(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pi=typeof setTimeout==`function`?setTimeout:void 0,Fi=typeof clearTimeout==`function`?clearTimeout:void 0,Ii=typeof Promise==`function`?Promise:void 0,Li=typeof queueMicrotask==`function`?queueMicrotask:Ii===void 0?Pi:function(e){return Ii.resolve(null).then(e).catch(Ri)};function Ri(e){setTimeout(function(){throw e})}function zi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`){if(r===0){e.removeChild(i),wn(t);return}r--}else n!==`$`&&n!==`$?`&&n!==`$!`||r++;n=i}while(n);wn(t)}function Bi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`)break;if(t===`/$`)return null}}return e}function Vi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`){if(t===0)return e;t--}else n===`/$`&&t++}e=e.previousSibling}return null}var Hi=Math.random().toString(36).slice(2),N=`__reactFiber$`+Hi,Ui=`__reactProps$`+Hi,Wi=`__reactContainer$`+Hi,Gi=`__reactEvents$`+Hi,Ki=`__reactListeners$`+Hi,qi=`__reactHandles$`+Hi;function Ji(e){var t=e[N];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Wi]||n[N]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Vi(e);e!==null;){if(n=e[N])return n;e=Vi(e)}return t}e=n,n=e.parentNode}return null}function Yi(e){return e=e[N]||e[Wi],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function P(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function Xi(e){return e[Ui]||null}var Zi=[],Qi=-1;function $i(e){return{current:e}}function F(e){0>Qi||(e.current=Zi[Qi],Zi[Qi]=null,Qi--)}function I(e,t){Qi++,Zi[Qi]=e.current,e.current=t}var ea={},ta=$i(ea),L=$i(!1),na=ea;function ra(e,t){var n=e.type.contextTypes;if(!n)return ea;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ia(e){return e=e.childContextTypes,e!=null}function aa(){F(L),F(ta)}function oa(e,t,n){if(ta.current!==ea)throw Error(r(168));I(ta,t),I(L,n)}function sa(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!=`function`)return n;for(var a in i=i.getChildContext(),i)if(!(a in t))throw Error(r(108,xe(e)||`Unknown`,a));return w({},n,i)}function ca(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ea,na=ta.current,I(ta,e),I(L,L.current),!0}function la(e,t,n){var i=e.stateNode;if(!i)throw Error(r(169));n?(e=sa(e,t,na),i.__reactInternalMemoizedMergedChildContext=e,F(L),F(ta),I(ta,e)):F(L),I(L,n)}var ua=null,da=!1,fa=!1;function pa(e){ua===null?ua=[e]:ua.push(e)}function ma(e){da=!0,pa(e)}function ha(){if(!fa&&ua!==null){fa=!0;var e=0,t=D;try{var n=ua;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ua=null,da=!1}catch(t){throw ua!==null&&(ua=ua.slice(e+1)),Et(jt,ha),t}finally{D=t,fa=!1}}return null}var R=[],ga=0,_a=null,va=0,z=[],ya=0,ba=null,xa=1,Sa=``;function Ca(e,t){R[ga++]=va,R[ga++]=_a,_a=e,va=t}function wa(e,t,n){z[ya++]=xa,z[ya++]=Sa,z[ya++]=ba,ba=e;var r=xa;e=Sa;var i=32-zt(r)-1;r&=~(1<<i),n+=1;var a=32-zt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,xa=1<<32-zt(t)+i|n<<i|r,Sa=a+e}else xa=1<<a|n<<i|r,Sa=e}function Ta(e){e.return!==null&&(Ca(e,1),wa(e,1,0))}function Ea(e){for(;e===_a;)_a=R[--ga],R[ga]=null,va=R[--ga],R[ga]=null;for(;e===ba;)ba=z[--ya],z[ya]=null,Sa=z[--ya],z[ya]=null,xa=z[--ya],z[ya]=null}var Da=null,Oa=null,B=!1,ka=null;function Aa(e,t){var n=ql(5,null,null,0);n.elementType=`DELETED`,n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ja(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t===null?!1:(e.stateNode=t,Da=e,Oa=Bi(t.firstChild),!0);case 6:return t=e.pendingProps===``||t.nodeType!==3?null:t,t===null?!1:(e.stateNode=t,Da=e,Oa=null,!0);case 13:return t=t.nodeType===8?t:null,t===null?!1:(n=ba===null?null:{id:xa,overflow:Sa},e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ql(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Da=e,Oa=null,!0);default:return!1}}function Ma(e){return(e.mode&1)!=0&&(e.flags&128)==0}function Na(e){if(B){var t=Oa;if(t){var n=t;if(!ja(e,t)){if(Ma(e))throw Error(r(418));t=Bi(n.nextSibling);var i=Da;t&&ja(e,t)?Aa(i,n):(e.flags=e.flags&-4097|2,B=!1,Da=e)}}else{if(Ma(e))throw Error(r(418));e.flags=e.flags&-4097|2,B=!1,Da=e}}}function V(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Da=e}function Pa(e){if(e!==Da)return!1;if(!B)return V(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!==`head`&&t!==`body`&&!Ni(e.type,e.memoizedProps)),t&&=Oa){if(Ma(e))throw Fa(),Error(r(418));for(;t;)Aa(e,t),t=Bi(t.nextSibling)}if(V(e),e.tag===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(r(317));a:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`){if(t===0){Oa=Bi(e.nextSibling);break a}t--}else n!==`$`&&n!==`$!`&&n!==`$?`||t++}e=e.nextSibling}Oa=null}}else Oa=Da?Bi(e.stateNode.nextSibling):null;return!0}function Fa(){for(var e=Oa;e;)e=Bi(e.nextSibling)}function Ia(){Oa=Da=null,B=!1}function La(e){ka===null?ka=[e]:ka.push(e)}var Ra=C.ReactCurrentBatchConfig;function za(e,t,n){if(e=n.ref,e!==null&&typeof e!=`function`&&typeof e!=`object`){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(r(309));var i=n.stateNode}if(!i)throw Error(r(147,e));var a=i,o=``+e;return t!==null&&t.ref!==null&&typeof t.ref==`function`&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;e===null?delete t[o]:t[o]=e},t._stringRef=o,t)}if(typeof e!=`string`)throw Error(r(284));if(!n._owner)throw Error(r(290,e))}return e}function Ba(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e))}function Va(e){var t=e._init;return t(e._payload)}function Ha(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function i(e,t){for(e=new Map;t!==null;)t.key===null?e.set(t.index,t):e.set(t.key,t),t=t.sibling;return e}function a(e,t){return e=Xl(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=2,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=2),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=eu(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===ne?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===de&&Va(i)===t.type)?(r=a(t,n.props),r.ref=za(e,t,n),r.return=e,r):(r=Zl(n.type,n.key,n.props,null,e.mode,r),r.ref=za(e,t,n),r.return=e,r)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=tu(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Ql(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`)return t=eu(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case ee:return n=Zl(t.type,t.key,t.props,null,e.mode,n),n.ref=za(e,null,t),n.return=e,n;case te:return t=tu(t,e.mode,n),t.return=e,t;case de:var r=t._init;return f(e,r(t._payload),n)}if(Pe(t)||me(t))return t=Ql(t,e.mode,n,null),t.return=e,t;Ba(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case ee:return n.key===i?l(e,t,n,r):null;case te:return n.key===i?u(e,t,n,r):null;case de:return i=n._init,p(e,t,i(n._payload),r)}if(Pe(n)||me(n))return i===null?d(e,t,n,r,null):null;Ba(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case ee:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case te:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case de:var a=r._init;return m(e,t,n,a(r._payload),i)}if(Pe(r)||me(r))return e=e.get(n)||null,d(t,e,r,i,null);Ba(t,r)}return null}function h(r,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(r,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(r,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(r,d),B&&Ca(r,h),l;if(d===null){for(;h<s.length;h++)d=f(r,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return B&&Ca(r,h),l}for(d=i(r,d);h<s.length;h++)g=m(d,r,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(r,e)}),B&&Ca(r,h),l}function g(a,s,c,l){var u=me(c);if(typeof u!=`function`)throw Error(r(150));if(c=u.call(c),c==null)throw Error(r(151));for(var d=u=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),B&&Ca(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return B&&Ca(a,g),u}for(h=i(a,h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),B&&Ca(a,g),u}function _(e,r,i,o){if(typeof i==`object`&&i&&i.type===ne&&i.key===null&&(i=i.props.children),typeof i==`object`&&i){switch(i.$$typeof){case ee:a:{for(var c=i.key,l=r;l!==null;){if(l.key===c){if(c=i.type,c===ne){if(l.tag===7){n(e,l.sibling),r=a(l,i.props.children),r.return=e,e=r;break a}}else if(l.elementType===c||typeof c==`object`&&c&&c.$$typeof===de&&Va(c)===l.type){n(e,l.sibling),r=a(l,i.props),r.ref=za(e,l,i),r.return=e,e=r;break a}n(e,l);break}else t(e,l);l=l.sibling}i.type===ne?(r=Ql(i.props.children,e.mode,o,i.key),r.return=e,e=r):(o=Zl(i.type,i.key,i.props,null,e.mode,o),o.ref=za(e,r,i),o.return=e,e=o)}return s(e);case te:a:{for(l=i.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===i.containerInfo&&r.stateNode.implementation===i.implementation){n(e,r.sibling),r=a(r,i.children||[]),r.return=e,e=r;break a}else{n(e,r);break}else t(e,r);r=r.sibling}r=tu(i,e.mode,o),r.return=e,e=r}return s(e);case de:return l=i._init,_(e,r,l(i._payload),o)}if(Pe(i))return h(e,r,i,o);if(me(i))return g(e,r,i,o);Ba(e,i)}return typeof i==`string`&&i!==``||typeof i==`number`?(i=``+i,r!==null&&r.tag===6?(n(e,r.sibling),r=a(r,i),r.return=e,e=r):(n(e,r),r=eu(i,e.mode,o),r.return=e,e=r),s(e)):n(e,r)}return _}var Ua=Ha(!0),Wa=Ha(!1),Ga=$i(null),Ka=null,qa=null,Ja=null;function Ya(){Ja=qa=Ka=null}function Xa(e){var t=Ga.current;F(Ga),e._currentValue=t}function Za(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Qa(e,t){Ka=e,Ja=qa=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(zs=!0),e.firstContext=null)}function $a(e){var t=e._currentValue;if(Ja!==e)if(e={context:e,memoizedValue:t,next:null},qa===null){if(Ka===null)throw Error(r(308));qa=e,Ka.dependencies={lanes:0,firstContext:e}}else qa=qa.next=e;return t}var eo=null;function to(e){eo===null?eo=[e]:eo.push(e)}function no(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,to(t)):(n.next=i.next,i.next=n),t.interleaved=n,ro(e,r)}function ro(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var io=!1;function ao(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function oo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function so(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function co(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ro(e,n)}return i=r.interleaved,i===null?(t.next=t,to(r)):(t.next=i.next,i.next=t),r.interleaved=t,ro(e,n)}function lo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194240)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,en(e,n)}}function uo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function fo(e,t,n,r){var i=e.updateQueue;io=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane,p=s.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});a:{var m=e,h=s;switch(f=t,p=n,h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(p,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(p,d,f):m,f==null)break a;d=w({},d,f);break a;case 2:io=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Qc|=o,e.lanes=o,e.memoizedState=d}}function po(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(a!==null){if(i.callback=null,i=n,typeof a!=`function`)throw Error(r(191,a));a.call(i)}}}var mo={},ho=$i(mo),go=$i(mo),_o=$i(mo);function vo(e){if(e===mo)throw Error(r(174));return e}function yo(e,t){switch(I(_o,t),I(go,e),I(ho,mo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ve(null,``);break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ve(t,e)}F(ho),I(ho,t)}function bo(){F(ho),F(go),F(_o)}function xo(e){vo(_o.current);var t=vo(ho.current),n=Ve(t,e.type);t!==n&&(I(go,e),I(ho,n))}function So(e){go.current===e&&(F(ho),F(go))}var H=$i(0);function Co(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===`$?`||n.data===`$!`))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wo=[];function To(){for(var e=0;e<wo.length;e++)wo[e]._workInProgressVersionPrimary=null;wo.length=0}var Eo=C.ReactCurrentDispatcher,Do=C.ReactCurrentBatchConfig,U=0,W=null,Oo=null,ko=null,Ao=!1,jo=!1,Mo=0,No=0;function Po(){throw Error(r(321))}function Fo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Vr(e[n],t[n]))return!1;return!0}function Io(e,t,n,i,a,o){if(U=o,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Eo.current=e===null||e.memoizedState===null?ys:bs,e=n(i,a),jo){o=0;do{if(jo=!1,Mo=0,25<=o)throw Error(r(301));o+=1,ko=Oo=null,t.updateQueue=null,Eo.current=xs,e=n(i,a)}while(jo)}if(Eo.current=vs,t=Oo!==null&&Oo.next!==null,U=0,ko=Oo=W=null,Ao=!1,t)throw Error(r(300));return e}function Lo(){var e=Mo!==0;return Mo=0,e}function Ro(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ko===null?W.memoizedState=ko=e:ko=ko.next=e,ko}function zo(){if(Oo===null){var e=W.alternate;e=e===null?null:e.memoizedState}else e=Oo.next;var t=ko===null?W.memoizedState:ko.next;if(t!==null)ko=t,Oo=e;else{if(e===null)throw Error(r(310));Oo=e,e={memoizedState:Oo.memoizedState,baseState:Oo.baseState,baseQueue:Oo.baseQueue,queue:Oo.queue,next:null},ko===null?W.memoizedState=ko=e:ko=ko.next=e}return ko}function Bo(e,t){return typeof t==`function`?t(e):t}function Vo(e){var t=zo(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=Oo,a=i.baseQueue,o=n.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}i.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,i=i.baseState;var c=s=null,l=null,u=o;do{var d=u.lane;if((U&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(c=l=f,s=i):l=l.next=f,W.lanes|=d,Qc|=d}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=c,Vr(i,t.memoizedState)||(zs=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=l,n.lastRenderedState=i}if(e=n.interleaved,e!==null){a=e;do o=a.lane,W.lanes|=o,Qc|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ho(e){var t=zo(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Vr(o,t.memoizedState)||(zs=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function Uo(){}function Wo(e,t){var n=W,i=zo(),a=t(),o=!Vr(i.memoizedState,a);if(o&&(i.memoizedState=a,zs=!0),i=i.queue,ns(qo.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||ko!==null&&ko.memoizedState.tag&1){if(n.flags|=2048,Zo(9,Ko.bind(null,n,i,a,t),void 0,null),qc===null)throw Error(r(349));U&30||Go(n,t,a)}return a}function Go(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ko(e,t,n,r){t.value=n,t.getSnapshot=r,Jo(t)&&Yo(e)}function qo(e,t,n){return n(function(){Jo(t)&&Yo(e)})}function Jo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Vr(e,n)}catch{return!0}}function Yo(e){var t=ro(e,1);t!==null&&_l(t,e,1,-1)}function Xo(e){var t=Ro();return typeof e==`function`&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:e},t.queue=e,e=e.dispatch=ms.bind(null,W,e),[t.memoizedState,e]}function Zo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Qo(){return zo().memoizedState}function $o(e,t,n,r){var i=Ro();W.flags|=e,i.memoizedState=Zo(1|t,n,void 0,r===void 0?null:r)}function es(e,t,n,r){var i=zo();r=r===void 0?null:r;var a=void 0;if(Oo!==null){var o=Oo.memoizedState;if(a=o.destroy,r!==null&&Fo(r,o.deps)){i.memoizedState=Zo(t,n,a,r);return}}W.flags|=e,i.memoizedState=Zo(1|t,n,a,r)}function ts(e,t){return $o(8390656,8,e,t)}function ns(e,t){return es(2048,8,e,t)}function rs(e,t){return es(4,2,e,t)}function is(e,t){return es(4,4,e,t)}function as(e,t){if(typeof t==`function`)return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function os(e,t,n){return n=n==null?null:n.concat([e]),es(4,4,as.bind(null,t,e),n)}function ss(){}function cs(e,t){var n=zo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ls(e,t){var n=zo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function us(e,t,n){return U&21?(Vr(n,t)||(n=Xt(),W.lanes|=n,Qc|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,zs=!0),e.memoizedState=n)}function ds(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=Do.transition;Do.transition={};try{e(!1),t()}finally{D=n,Do.transition=r}}function fs(){return zo().memoizedState}function ps(e,t,n){var r=gl(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},hs(e))gs(t,n);else if(n=no(e,t,n,r),n!==null){var i=hl();_l(n,e,r,i),_s(n,t,r)}}function ms(e,t,n){var r=gl(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(hs(e))gs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Vr(s,o)){var c=t.interleaved;c===null?(i.next=i,to(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}n=no(e,t,i,r),n!==null&&(i=hl(),_l(n,e,r,i),_s(n,t,r))}}function hs(e){var t=e.alternate;return e===W||t!==null&&t===W}function gs(e,t){jo=Ao=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _s(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,en(e,n)}}var vs={readContext:$a,useCallback:Po,useContext:Po,useEffect:Po,useImperativeHandle:Po,useInsertionEffect:Po,useLayoutEffect:Po,useMemo:Po,useReducer:Po,useRef:Po,useState:Po,useDebugValue:Po,useDeferredValue:Po,useTransition:Po,useMutableSource:Po,useSyncExternalStore:Po,useId:Po,unstable_isNewReconciler:!1},ys={readContext:$a,useCallback:function(e,t){return Ro().memoizedState=[e,t===void 0?null:t],e},useContext:$a,useEffect:ts,useImperativeHandle:function(e,t,n){return n=n==null?null:n.concat([e]),$o(4194308,4,as.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $o(4194308,4,e,t)},useInsertionEffect:function(e,t){return $o(4,2,e,t)},useMemo:function(e,t){var n=Ro();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ro();return t=n===void 0?t:n(t),r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ps.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=Ro();return e={current:e},t.memoizedState=e},useState:Xo,useDebugValue:ss,useDeferredValue:function(e){return Ro().memoizedState=e},useTransition:function(){var e=Xo(!1),t=e[0];return e=ds.bind(null,e[1]),Ro().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=W,a=Ro();if(B){if(n===void 0)throw Error(r(407));n=n()}else{if(n=t(),qc===null)throw Error(r(349));U&30||Go(i,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ts(qo.bind(null,i,o,e),[e]),i.flags|=2048,Zo(9,Ko.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=Ro(),t=qc.identifierPrefix;if(B){var n=Sa,r=xa;n=(r&~(1<<32-zt(r)-1)).toString(32)+n,t=`:`+t+`R`+n,n=Mo++,0<n&&(t+=`H`+n.toString(32)),t+=`:`}else n=No++,t=`:`+t+`r`+n.toString(32)+`:`;return e.memoizedState=t},unstable_isNewReconciler:!1},bs={readContext:$a,useCallback:cs,useContext:$a,useEffect:ns,useImperativeHandle:os,useInsertionEffect:rs,useLayoutEffect:is,useMemo:ls,useReducer:Vo,useRef:Qo,useState:function(){return Vo(Bo)},useDebugValue:ss,useDeferredValue:function(e){return us(zo(),Oo.memoizedState,e)},useTransition:function(){return[Vo(Bo)[0],zo().memoizedState]},useMutableSource:Uo,useSyncExternalStore:Wo,useId:fs,unstable_isNewReconciler:!1},xs={readContext:$a,useCallback:cs,useContext:$a,useEffect:ns,useImperativeHandle:os,useInsertionEffect:rs,useLayoutEffect:is,useMemo:ls,useReducer:Ho,useRef:Qo,useState:function(){return Ho(Bo)},useDebugValue:ss,useDeferredValue:function(e){var t=zo();return Oo===null?t.memoizedState=e:us(t,Oo.memoizedState,e)},useTransition:function(){return[Ho(Bo)[0],zo().memoizedState]},useMutableSource:Uo,useSyncExternalStore:Wo,useId:fs,unstable_isNewReconciler:!1};function Ss(e,t){if(e&&e.defaultProps){for(var n in t=w({},t),e=e.defaultProps,e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Cs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:w({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ws={isMounted:function(e){return(e=e._reactInternals)?bt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=hl(),i=gl(e),a=so(r,i);a.payload=t,n!=null&&(a.callback=n),t=co(e,a,i),t!==null&&(_l(t,e,i,r),lo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=hl(),i=gl(e),a=so(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=co(e,a,i),t!==null&&(_l(t,e,i,r),lo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=hl(),r=gl(e),i=so(n,r);i.tag=2,t!=null&&(i.callback=t),t=co(e,i,r),t!==null&&(_l(t,e,r,n),lo(t,e,r))}};function Ts(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Hr(n,r)||!Hr(i,a):!0}function Es(e,t,n){var r=!1,i=ea,a=t.contextType;return typeof a==`object`&&a?a=$a(a):(i=ia(t)?na:ta.current,r=t.contextTypes,a=(r=r!=null)?ra(e,i):ea),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ws,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Ds(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ws.enqueueReplaceState(t,t.state,null)}function Os(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ao(e);var a=t.contextType;typeof a==`object`&&a?i.context=$a(a):(a=ia(t)?na:ta.current,i.context=ra(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a==`function`&&(Cs(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps==`function`||typeof i.getSnapshotBeforeUpdate==`function`||typeof i.UNSAFE_componentWillMount!=`function`&&typeof i.componentWillMount!=`function`||(t=i.state,typeof i.componentWillMount==`function`&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount==`function`&&i.UNSAFE_componentWillMount(),t!==i.state&&ws.enqueueReplaceState(i,i.state,null),fo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount==`function`&&(e.flags|=4194308)}function ks(e,t){try{var n=``,r=t;do n+=ye(r),r=r.return;while(r);var i=n}catch(e){i=`
Error generating stack: `+e.message+`
`+e.stack}return{value:e,source:t,stack:i,digest:null}}function As(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function js(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var Ms=typeof WeakMap==`function`?WeakMap:Map;function Ns(e,t,n){n=so(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ol||(ol=!0,sl=r),js(e,t)},n}function Ps(e,t,n){n=so(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r==`function`){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){js(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch==`function`&&(n.callback=function(){js(e,t),typeof r!=`function`&&(cl===null?cl=new Set([this]):cl.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n===null?``:n})}),n}function Fs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ms;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Bl.bind(null,e,t,n),t.then(e,e))}function Is(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t===null?!0:t.dehydrated!==null),t)return e;e=e.return}while(e!==null);return null}function Ls(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=so(-1,1),t.tag=2,co(n,t,1))),n.lanes|=1),e)}var Rs=C.ReactCurrentOwner,zs=!1;function Bs(e,t,n,r){t.child=e===null?Wa(t,null,n,r):Ua(t,e.child,n,r)}function Vs(e,t,n,r,i){n=n.render;var a=t.ref;return Qa(t,i),r=Io(e,t,n,r,a,i),n=Lo(),e!==null&&!zs?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,sc(e,t,i)):(B&&n&&Ta(t),t.flags|=1,Bs(e,t,r,i),t.child)}function Hs(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Jl(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Us(e,t,a,r,i)):(e=Zl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var o=a.memoizedProps;if(n=n.compare,n=n===null?Hr:n,n(o,r)&&e.ref===t.ref)return sc(e,t,i)}return t.flags|=1,e=Xl(a,r),e.ref=t.ref,e.return=t,t.child=e}function Us(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Hr(a,r)&&e.ref===t.ref)if(zs=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(zs=!0);else return t.lanes=e.lanes,sc(e,t,i)}return Ks(e,t,n,r,i)}function Ws(e,t,n){var r=t.pendingProps,i=r.children,a=e===null?null:e.memoizedState;if(r.mode===`hidden`)if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(Yc,Jc),Jc|=n;else{if(!(n&1073741824))return e=a===null?n:a.baseLanes|n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,I(Yc,Jc),Jc|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a===null?n:a.baseLanes,I(Yc,Jc),Jc|=r}else a===null?r=n:(r=a.baseLanes|n,t.memoizedState=null),I(Yc,Jc),Jc|=r;return Bs(e,t,i,n),t.child}function Gs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ks(e,t,n,r,i){var a=ia(n)?na:ta.current;return a=ra(t,a),Qa(t,i),n=Io(e,t,n,r,a,i),r=Lo(),e!==null&&!zs?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,sc(e,t,i)):(B&&r&&Ta(t),t.flags|=1,Bs(e,t,n,i),t.child)}function qs(e,t,n,r,i){if(ia(n)){var a=!0;ca(t)}else a=!1;if(Qa(t,i),t.stateNode===null)oc(e,t),Es(t,n,r),Os(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,l=n.contextType;typeof l==`object`&&l?l=$a(l):(l=ia(n)?na:ta.current,l=ra(t,l));var u=n.getDerivedStateFromProps,d=typeof u==`function`||typeof o.getSnapshotBeforeUpdate==`function`;d||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==r||c!==l)&&Ds(t,o,r,l),io=!1;var f=t.memoizedState;o.state=f,fo(t,r,o,i),c=t.memoizedState,s!==r||f!==c||L.current||io?(typeof u==`function`&&(Cs(t,n,u,r),c=t.memoizedState),(s=io||Ts(t,n,s,r,f,c,l))?(d||typeof o.UNSAFE_componentWillMount!=`function`&&typeof o.componentWillMount!=`function`||(typeof o.componentWillMount==`function`&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==`function`&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount==`function`&&(t.flags|=4194308)):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=l,r=s):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,oo(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:Ss(t.type,s),o.props=l,d=t.pendingProps,f=o.context,c=n.contextType,typeof c==`object`&&c?c=$a(c):(c=ia(n)?na:ta.current,c=ra(t,c));var p=n.getDerivedStateFromProps;(u=typeof p==`function`||typeof o.getSnapshotBeforeUpdate==`function`)||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==d||f!==c)&&Ds(t,o,r,c),io=!1,f=t.memoizedState,o.state=f,fo(t,r,o,i);var m=t.memoizedState;s!==d||f!==m||L.current||io?(typeof p==`function`&&(Cs(t,n,p,r),m=t.memoizedState),(l=io||Ts(t,n,l,r,f,m,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!=`function`&&typeof o.componentWillUpdate!=`function`||(typeof o.componentWillUpdate==`function`&&o.componentWillUpdate(r,m,c),typeof o.UNSAFE_componentWillUpdate==`function`&&o.UNSAFE_componentWillUpdate(r,m,c)),typeof o.componentDidUpdate==`function`&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=c,r=l):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Js(e,t,n,r,a,i)}function Js(e,t,n,r,i,a){Gs(e,t);var o=(t.flags&128)!=0;if(!r&&!o)return i&&la(t,n,!1),sc(e,t,a);r=t.stateNode,Rs.current=t;var s=o&&typeof n.getDerivedStateFromError!=`function`?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Ua(t,e.child,null,a),t.child=Ua(t,null,s,a)):Bs(e,t,s,a),t.memoizedState=r.state,i&&la(t,n,!0),t.child}function Ys(e){var t=e.stateNode;t.pendingContext?oa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&oa(e,t.context,!1),yo(e,t.containerInfo)}function Xs(e,t,n,r,i){return Ia(),La(i),t.flags|=256,Bs(e,t,n,r),t.child}var Zs={dehydrated:null,treeContext:null,retryLane:0};function Qs(e){return{baseLanes:e,cachePool:null,transitions:null}}function $s(e,t,n){var r=t.pendingProps,i=H.current,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!=0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),I(H,i&1),e===null)return Na(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data===`$!`?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:`hidden`,children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=$l(o,r,0,null),e=Ql(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Qs(n),t.memoizedState=Zs,e):ec(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return nc(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var c={mode:`hidden`,children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Xl(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s===null?(a=Ql(a,o,n,null),a.flags|=2):a=Xl(s,a),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Qs(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Zs,r}return a=e.child,e=a.sibling,r=Xl(a,{mode:`visible`,children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ec(e,t){return t=$l({mode:`visible`,children:t},e.mode,0,null),t.return=e,e.child=t}function tc(e,t,n,r){return r!==null&&La(r),Ua(t,e.child,null,n),e=ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nc(e,t,n,i,a,o,s){if(n)return t.flags&256?(t.flags&=-257,i=As(Error(r(422))),tc(e,t,s,i)):t.memoizedState===null?(o=i.fallback,a=t.mode,i=$l({mode:`visible`,children:i.children},a,0,null),o=Ql(o,a,s,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&Ua(t,e.child,null,s),t.child.memoizedState=Qs(s),t.memoizedState=Zs,o):(t.child=e.child,t.flags|=128,null);if(!(t.mode&1))return tc(e,t,s,null);if(a.data===`$!`){if(i=a.nextSibling&&a.nextSibling.dataset,i)var c=i.dgst;return i=c,o=Error(r(419)),i=As(o,i,void 0),tc(e,t,s,i)}if(c=(s&e.childLanes)!==0,zs||c){if(i=qc,i!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(i.suspendedLanes|s))===0?a:0,a!==0&&a!==o.retryLane&&(o.retryLane=a,ro(e,a),_l(i,e,a,-1))}return Al(),i=As(Error(r(421))),tc(e,t,s,i)}return a.data===`$?`?(t.flags|=128,t.child=e.child,t=Hl.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,Oa=Bi(a.nextSibling),Da=t,B=!0,ka=null,e!==null&&(z[ya++]=xa,z[ya++]=Sa,z[ya++]=ba,xa=e.id,Sa=e.overflow,ba=t),t=ec(t,i.children),t.flags|=4096,t)}function rc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Za(e.return,t,n)}function ic(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function ac(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Bs(e,t,r.children,n),r=H.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rc(e,n,t);else if(e.tag===19)rc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(I(H,r),!(t.mode&1))t.memoizedState=null;else switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Co(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ic(t,!1,i,n,a);break;case`backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Co(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ic(t,!0,n,null,a);break;case`together`:ic(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function oc(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function sc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Qc|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,n=Xl(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Xl(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function cc(e,t,n){switch(t.tag){case 3:Ys(t),Ia();break;case 5:xo(t);break;case 1:ia(t.type)&&ca(t);break;case 4:yo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;I(Ga,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(I(H,H.current&1),e=sc(e,t,n),e===null?null:e.sibling):$s(e,t,n):(I(H,H.current&1),t.flags|=128,null);I(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ac(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),I(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,Ws(e,t,n)}return sc(e,t,n)}var lc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},uc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,vo(ho.current);var o=null;switch(n){case`input`:i=Oe(e,i),r=Oe(e,r),o=[];break;case`select`:i=w({},i,{value:void 0}),r=w({},r,{value:void 0}),o=[];break;case`textarea`:i=Ie(e,i),r=Ie(e,r),o=[];break;default:typeof i.onClick!=`function`&&typeof r.onClick==`function`&&(e.onclick=Ai)}Xe(n,r);var s;for(u in n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u===`style`){var c=i[u];for(s in c)c.hasOwnProperty(s)&&(n||={},n[s]=``)}else u!==`dangerouslySetInnerHTML`&&u!==`children`&&u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&u!==`autoFocus`&&(a.hasOwnProperty(u)?o||=[]:(o||=[]).push(u,null));for(u in r){var l=r[u];if(c=i?.[u],r.hasOwnProperty(u)&&l!==c&&(l!=null||c!=null))if(u===`style`)if(c){for(s in c)!c.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||={},n[s]=``);for(s in l)l.hasOwnProperty(s)&&c[s]!==l[s]&&(n||={},n[s]=l[s])}else n||(o||=[],o.push(u,n)),n=l;else u===`dangerouslySetInnerHTML`?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(o||=[]).push(u,l)):u===`children`?typeof l!=`string`&&typeof l!=`number`||(o||=[]).push(u,``+l):u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&(a.hasOwnProperty(u)?(l!=null&&u===`onScroll`&&j(`scroll`,e),o||c===l||(o=[])):(o||=[]).push(u,l))}n&&(o||=[]).push(`style`,n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},dc=function(e,t,n,r){n!==r&&(t.flags|=4)};function fc(e,t){if(!B)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function G(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function pc(e,t,n){var i=t.pendingProps;switch(Ea(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return G(t),null;case 1:return ia(t.type)&&aa(),G(t),null;case 3:return i=t.stateNode,bo(),F(L),F(ta),To(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Pa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ka!==null&&(bl(ka),ka=null))),G(t),null;case 5:So(t);var o=vo(_o.current);if(n=t.type,e!==null&&t.stateNode!=null)uc(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(r(166));return G(t),null}if(e=vo(ho.current),Pa(t)){i=t.stateNode,n=t.type;var s=t.memoizedProps;switch(i[N]=t,i[Ui]=s,e=(t.mode&1)!=0,n){case`dialog`:j(`cancel`,i),j(`close`,i);break;case`iframe`:case`object`:case`embed`:j(`load`,i);break;case`video`:case`audio`:for(o=0;o<A.length;o++)j(A[o],i);break;case`source`:j(`error`,i);break;case`img`:case`image`:case`link`:j(`error`,i),j(`load`,i);break;case`details`:j(`toggle`,i);break;case`input`:ke(i,s),j(`invalid`,i);break;case`select`:i._wrapperState={wasMultiple:!!s.multiple},j(`invalid`,i);break;case`textarea`:Le(i,s),j(`invalid`,i)}for(var c in Xe(n,s),o=null,s)if(s.hasOwnProperty(c)){var l=s[c];c===`children`?typeof l==`string`?i.textContent!==l&&(!0!==s.suppressHydrationWarning&&ki(i.textContent,l,e),o=[`children`,l]):typeof l==`number`&&i.textContent!==``+l&&(!0!==s.suppressHydrationWarning&&ki(i.textContent,l,e),o=[`children`,``+l]):a.hasOwnProperty(c)&&l!=null&&c===`onScroll`&&j(`scroll`,i)}switch(n){case`input`:Te(i),Me(i,s,!0);break;case`textarea`:Te(i),ze(i);break;case`select`:case`option`:break;default:typeof s.onClick==`function`&&(i.onclick=Ai)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{c=o.nodeType===9?o:o.ownerDocument,e===`http://www.w3.org/1999/xhtml`&&(e=Be(n)),e===`http://www.w3.org/1999/xhtml`?n===`script`?(e=c.createElement(`div`),e.innerHTML=`<script><\/script>`,e=e.removeChild(e.firstChild)):typeof i.is==`string`?e=c.createElement(n,{is:i.is}):(e=c.createElement(n),n===`select`&&(c=e,i.multiple?c.multiple=!0:i.size&&(c.size=i.size))):e=c.createElementNS(e,n),e[N]=t,e[Ui]=i,lc(e,t,!1,!1),t.stateNode=e;a:{switch(c=Ze(n,i),n){case`dialog`:j(`cancel`,e),j(`close`,e),o=i;break;case`iframe`:case`object`:case`embed`:j(`load`,e),o=i;break;case`video`:case`audio`:for(o=0;o<A.length;o++)j(A[o],e);o=i;break;case`source`:j(`error`,e),o=i;break;case`img`:case`image`:case`link`:j(`error`,e),j(`load`,e),o=i;break;case`details`:j(`toggle`,e),o=i;break;case`input`:ke(e,i),o=Oe(e,i),j(`invalid`,e);break;case`option`:o=i;break;case`select`:e._wrapperState={wasMultiple:!!i.multiple},o=w({},i,{value:void 0}),j(`invalid`,e);break;case`textarea`:Le(e,i),o=Ie(e,i),j(`invalid`,e);break;default:o=i}for(s in Xe(n,o),l=o,l)if(l.hasOwnProperty(s)){var u=l[s];s===`style`?Je(e,u):s===`dangerouslySetInnerHTML`?(u=u?u.__html:void 0,u!=null&&Ue(e,u)):s===`children`?typeof u==`string`?(n!==`textarea`||u!==``)&&We(e,u):typeof u==`number`&&We(e,``+u):s!==`suppressContentEditableWarning`&&s!==`suppressHydrationWarning`&&s!==`autoFocus`&&(a.hasOwnProperty(s)?u!=null&&s===`onScroll`&&j(`scroll`,e):u!=null&&S(e,s,u,c))}switch(n){case`input`:Te(e),Me(e,i,!1);break;case`textarea`:Te(e),ze(e);break;case`option`:i.value!=null&&e.setAttribute(`value`,``+Se(i.value));break;case`select`:e.multiple=!!i.multiple,s=i.value,s==null?i.defaultValue!=null&&Fe(e,!!i.multiple,i.defaultValue,!0):Fe(e,!!i.multiple,s,!1);break;default:typeof o.onClick==`function`&&(e.onclick=Ai)}switch(n){case`button`:case`input`:case`select`:case`textarea`:i=!!i.autoFocus;break a;case`img`:i=!0;break a;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return G(t),null;case 6:if(e&&t.stateNode!=null)dc(e,t,e.memoizedProps,i);else{if(typeof i!=`string`&&t.stateNode===null)throw Error(r(166));if(n=vo(_o.current),vo(ho.current),Pa(t)){if(i=t.stateNode,n=t.memoizedProps,i[N]=t,(s=i.nodeValue!==n)&&(e=Da,e!==null))switch(e.tag){case 3:ki(i.nodeValue,n,(e.mode&1)!=0);break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&ki(i.nodeValue,n,(e.mode&1)!=0)}s&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[N]=t,t.stateNode=i}return G(t),null;case 13:if(F(H),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&Oa!==null&&t.mode&1&&!(t.flags&128))Fa(),Ia(),t.flags|=98560,s=!1;else if(s=Pa(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(r(318));if(s=t.memoizedState,s=s===null?null:s.dehydrated,!s)throw Error(r(317));s[N]=t}else Ia(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;G(t),s=!1}else ka!==null&&(bl(ka),ka=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?Xc===0&&(Xc=3):Al())),t.updateQueue!==null&&(t.flags|=4),G(t),null);case 4:return bo(),e===null&&yi(t.stateNode.containerInfo),G(t),null;case 10:return Xa(t.type._context),G(t),null;case 17:return ia(t.type)&&aa(),G(t),null;case 19:if(F(H),s=t.memoizedState,s===null)return G(t),null;if(i=(t.flags&128)!=0,c=s.rendering,c===null)if(i)fc(s,!1);else{if(Xc!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(c=Co(e),c!==null){for(t.flags|=128,fc(s,!1),i=c.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)s=n,e=i,s.flags&=14680066,c=s.alternate,c===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=c.childLanes,s.lanes=c.lanes,s.child=c.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=c.memoizedProps,s.memoizedState=c.memoizedState,s.updateQueue=c.updateQueue,s.type=c.type,e=c.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return I(H,H.current&1|2),t.child}e=e.sibling}s.tail!==null&&E()>il&&(t.flags|=128,i=!0,fc(s,!1),t.lanes=4194304)}else{if(!i)if(e=Co(c),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fc(s,!0),s.tail===null&&s.tailMode===`hidden`&&!c.alternate&&!B)return G(t),null}else 2*E()-s.renderingStartTime>il&&n!==1073741824&&(t.flags|=128,i=!0,fc(s,!1),t.lanes=4194304);s.isBackwards?(c.sibling=t.child,t.child=c):(n=s.last,n===null?t.child=c:n.sibling=c,s.last=c)}return s.tail===null?(G(t),null):(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=E(),t.sibling=null,n=H.current,I(H,i?n&1|2:n&1),t);case 22:case 23:return El(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?Jc&1073741824&&(G(t),t.subtreeFlags&6&&(t.flags|=8192)):G(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}function mc(e,t){switch(Ea(t),t.tag){case 1:return ia(t.type)&&aa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return bo(),F(L),F(ta),To(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return So(t),null;case 13:if(F(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Ia()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F(H),null;case 4:return bo(),null;case 10:return Xa(t.type._context),null;case 22:case 23:return El(),null;case 24:return null;default:return null}}var hc=!1,gc=!1,_c=typeof WeakSet==`function`?WeakSet:Set,K=null;function vc(e,t){var n=e.ref;if(n!==null)if(typeof n==`function`)try{n(null)}catch(n){Q(e,t,n)}else n.current=null}function yc(e,t,n){try{n()}catch(n){Q(e,t,n)}}var bc=!1;function xc(e,t){if(ji=En,e=Kr(),qr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Mi={focusedElem:e,selectionRange:n},En=!1,K=t;K!==null;)if(t=K,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,K=e;else for(;K!==null;){t=K;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var g=h.memoizedProps,_=h.memoizedState,v=t.stateNode;v.__reactInternalSnapshotBeforeUpdate=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:Ss(t.type,g),_)}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent=``:y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(e){Q(t,t.return,e)}if(e=t.sibling,e!==null){e.return=t.return,K=e;break}K=t.return}return h=bc,bc=!1,h}function Sc(e,t,n){var r=t.updateQueue;if(r=r===null?null:r.lastEffect,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&yc(t,n,a)}i=i.next}while(i!==r)}}function Cc(e,t){if(t=t.updateQueue,t=t===null?null:t.lastEffect,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function wc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t==`function`?t(e):t.current=e}}function Tc(e){var t=e.alternate;t!==null&&(e.alternate=null,Tc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[N],delete t[Ui],delete t[Gi],delete t[Ki],delete t[qi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ec(e){return e.tag===5||e.tag===3||e.tag===4}function Dc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Ec(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ai));else if(r!==4&&(e=e.child,e!==null))for(Oc(e,t,n),e=e.sibling;e!==null;)Oc(e,t,n),e=e.sibling}function kc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(kc(e,t,n),e=e.sibling;e!==null;)kc(e,t,n),e=e.sibling}var Ac=null,jc=!1;function Mc(e,t,n){for(n=n.child;n!==null;)Nc(e,t,n),n=n.sibling}function Nc(e,t,n){if(Lt&&typeof Lt.onCommitFiberUnmount==`function`)try{Lt.onCommitFiberUnmount(It,n)}catch{}switch(n.tag){case 5:gc||vc(n,t);case 6:var r=Ac,i=jc;Ac=null,Mc(e,t,n),Ac=r,jc=i,Ac!==null&&(jc?(e=Ac,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ac.removeChild(n.stateNode));break;case 18:Ac!==null&&(jc?(e=Ac,n=n.stateNode,e.nodeType===8?zi(e.parentNode,n):e.nodeType===1&&zi(e,n),wn(e)):zi(Ac,n.stateNode));break;case 4:r=Ac,i=jc,Ac=n.stateNode.containerInfo,jc=!0,Mc(e,t,n),Ac=r,jc=i;break;case 0:case 11:case 14:case 15:if(!gc&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&yc(n,t,o),i=i.next}while(i!==r)}Mc(e,t,n);break;case 1:if(!gc&&(vc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){Q(n,t,e)}Mc(e,t,n);break;case 21:Mc(e,t,n);break;case 22:n.mode&1?(gc=(r=gc)||n.memoizedState!==null,Mc(e,t,n),gc=r):Mc(e,t,n);break;default:Mc(e,t,n)}}function Pc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new _c),t.forEach(function(t){var r=Ul.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function Fc(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];try{var o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 5:Ac=c.stateNode,jc=!1;break a;case 3:Ac=c.stateNode.containerInfo,jc=!0;break a;case 4:Ac=c.stateNode.containerInfo,jc=!0;break a}c=c.return}if(Ac===null)throw Error(r(160));Nc(o,s,a),Ac=null,jc=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(e){Q(a,t,e)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ic(t,e),t=t.sibling}function Ic(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Fc(t,e),Lc(e),i&4){try{Sc(3,e,e.return),Cc(3,e)}catch(t){Q(e,e.return,t)}try{Sc(5,e,e.return)}catch(t){Q(e,e.return,t)}}break;case 1:Fc(t,e),Lc(e),i&512&&n!==null&&vc(n,n.return);break;case 5:if(Fc(t,e),Lc(e),i&512&&n!==null&&vc(n,n.return),e.flags&32){var a=e.stateNode;try{We(a,``)}catch(t){Q(e,e.return,t)}}if(i&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,s=n===null?o:n.memoizedProps,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c===`input`&&o.type===`radio`&&o.name!=null&&Ae(a,o),Ze(c,s);var u=Ze(c,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d===`style`?Je(a,f):d===`dangerouslySetInnerHTML`?Ue(a,f):d===`children`?We(a,f):S(a,d,f,u)}switch(c){case`input`:je(a,o);break;case`textarea`:Re(a,o);break;case`select`:var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m==null?p!==!!o.multiple&&(o.defaultValue==null?Fe(a,!!o.multiple,o.multiple?[]:``,!1):Fe(a,!!o.multiple,o.defaultValue,!0)):Fe(a,!!o.multiple,m,!1)}a[Ui]=o}catch(t){Q(e,e.return,t)}}break;case 6:if(Fc(t,e),Lc(e),i&4){if(e.stateNode===null)throw Error(r(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(t){Q(e,e.return,t)}}break;case 3:if(Fc(t,e),Lc(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{wn(t.containerInfo)}catch(t){Q(e,e.return,t)}break;case 4:Fc(t,e),Lc(e);break;case 13:Fc(t,e),Lc(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(rl=E())),i&4&&Pc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(gc=(u=gc)||d,Fc(t,e),gc=u):Fc(t,e),Lc(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(K=e,d=e.child;d!==null;){for(f=K=d;K!==null;){switch(p=K,m=p.child,p.tag){case 0:case 11:case 14:case 15:Sc(4,p,p.return);break;case 1:vc(p,p.return);var h=p.stateNode;if(typeof h.componentWillUnmount==`function`){i=p,n=p.return;try{t=i,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(e){Q(i,n,e)}}break;case 5:vc(p,p.return);break;case 22:if(p.memoizedState!==null){Vc(f);continue}}m===null?Vc(f):(m.return=p,K=m)}d=d.sibling}a:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{a=f.stateNode,u?(o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`):(c=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty(`display`)?l.display:null,c.style.display=qe(`display`,s))}catch(t){Q(e,e.return,t)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?``:f.memoizedProps}catch(t){Q(e,e.return,t)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break a;for(;f.sibling===null;){if(f.return===null||f.return===e)break a;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Fc(t,e),Lc(e),i&4&&Pc(e);break;case 21:break;default:Fc(t,e),Lc(e)}}function Lc(e){var t=e.flags;if(t&2){try{a:{for(var n=e.return;n!==null;){if(Ec(n)){var i=n;break a}n=n.return}throw Error(r(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(We(a,``),i.flags&=-33),kc(e,Dc(e),a);break;case 3:case 4:var o=i.stateNode.containerInfo;Oc(e,Dc(e),o);break;default:throw Error(r(161))}}catch(t){Q(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Rc(e,t,n){K=e,zc(e,t,n)}function zc(e,t,n){for(var r=(e.mode&1)!=0;K!==null;){var i=K,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||hc;if(!o){var s=i.alternate,c=s!==null&&s.memoizedState!==null||gc;s=hc;var l=gc;if(hc=o,(gc=c)&&!l)for(K=i;K!==null;)o=K,c=o.child,o.tag===22&&o.memoizedState!==null||c===null?Hc(i):(c.return=o,K=c);for(;a!==null;)K=a,zc(a,t,n),a=a.sibling;K=i,hc=s,gc=l}Bc(e,t,n)}else i.subtreeFlags&8772&&a!==null?(a.return=i,K=a):Bc(e,t,n)}}function Bc(e){for(;K!==null;){var t=K;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:gc||Cc(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!gc)if(n===null)i.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Ss(t.type,n.memoizedProps);i.componentDidUpdate(a,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&po(t,o,i);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}po(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var l=t.memoizedProps;switch(t.type){case`button`:case`input`:case`select`:case`textarea`:l.autoFocus&&n.focus();break;case`img`:l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&wn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}gc||t.flags&512&&wc(t)}catch(e){Q(t,t.return,e)}}if(t===e){K=null;break}if(n=t.sibling,n!==null){n.return=t.return,K=n;break}K=t.return}}function Vc(e){for(;K!==null;){var t=K;if(t===e){K=null;break}var n=t.sibling;if(n!==null){n.return=t.return,K=n;break}K=t.return}}function Hc(e){for(;K!==null;){var t=K;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Cc(4,t)}catch(e){Q(t,n,e)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount==`function`){var i=t.return;try{r.componentDidMount()}catch(e){Q(t,i,e)}}var a=t.return;try{wc(t)}catch(e){Q(t,a,e)}break;case 5:var o=t.return;try{wc(t)}catch(e){Q(t,o,e)}}}catch(e){Q(t,t.return,e)}if(t===e){K=null;break}var s=t.sibling;if(s!==null){s.return=t.return,K=s;break}K=t.return}}var Uc=Math.ceil,Wc=C.ReactCurrentDispatcher,Gc=C.ReactCurrentOwner,Kc=C.ReactCurrentBatchConfig,q=0,qc=null,J=null,Y=0,Jc=0,Yc=$i(0),Xc=0,Zc=null,Qc=0,$c=0,el=0,tl=null,nl=null,rl=0,il=1/0,al=null,ol=!1,sl=null,cl=null,ll=!1,X=null,ul=0,dl=0,fl=null,pl=-1,ml=0;function hl(){return q&6?E():pl===-1?pl=E():pl}function gl(e){return e.mode&1?q&2&&Y!==0?Y&-Y:Ra.transition===null?(e=D,e===0?(e=window.event,e=e===void 0?16:Mn(e.type),e):e):(ml===0&&(ml=Xt()),ml):1}function _l(e,t,n,i){if(50<dl)throw dl=0,fl=null,Error(r(185));Qt(e,n,i),(!(q&2)||e!==qc)&&(e===qc&&(!(q&2)&&($c|=n),Xc===4&&Sl(e,Y)),Z(e,i),n===1&&q===0&&!(t.mode&1)&&(il=E()+500,da&&ha()))}function Z(e,t){var n=e.callbackNode;Jt(e,t);var r=Kt(e,e===qc?Y:0);if(r===0)n!==null&&Dt(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Dt(n),t===1)e.tag===0?ma(Cl.bind(null,e)):pa(Cl.bind(null,e)),Li(function(){!(q&6)&&ha()}),n=null;else{switch(tn(r)){case 1:n=jt;break;case 4:n=Mt;break;case 16:n=Nt;break;case 536870912:n=Ft;break;default:n=Nt}n=Gl(n,vl.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function vl(e,t){if(pl=-1,ml=0,q&6)throw Error(r(327));var n=e.callbackNode;if(Rl()&&e.callbackNode!==n)return null;var i=Kt(e,e===qc?Y:0);if(i===0)return null;if(i&30||(i&e.expiredLanes)!==0||t)t=jl(e,i);else{t=i;var a=q;q|=2;var o=kl();(qc!==e||Y!==t)&&(al=null,il=E()+500,Dl(e,t));do try{Nl();break}catch(t){Ol(e,t)}while(1);Ya(),Wc.current=o,q=a,J===null?(qc=null,Y=0,t=Xc):t=0}if(t!==0){if(t===2&&(a=Yt(e),a!==0&&(i=a,t=yl(e,a))),t===1)throw n=Zc,Dl(e,0),Sl(e,i),Z(e,E()),n;if(t===6)Sl(e,i);else{if(a=e.current.alternate,!(i&30)&&!xl(a)&&(t=jl(e,i),t===2&&(o=Yt(e),o!==0&&(i=o,t=yl(e,o))),t===1))throw n=Zc,Dl(e,0),Sl(e,i),Z(e,E()),n;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(r(345));case 2:Il(e,nl,al);break;case 3:if(Sl(e,i),(i&130023424)===i&&(t=rl+500-E(),10<t)){if(Kt(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){hl(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Pi(Il.bind(null,e,nl,al),t);break}Il(e,nl,al);break;case 4:if(Sl(e,i),(i&4194240)===i)break;for(t=e.eventTimes,a=-1;0<i;){var s=31-zt(i);o=1<<s,s=t[s],s>a&&(a=s),i&=~o}if(i=a,i=E()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Uc(i/1960))-i,10<i){e.timeoutHandle=Pi(Il.bind(null,e,nl,al),i);break}Il(e,nl,al);break;case 5:Il(e,nl,al);break;default:throw Error(r(329))}}}return Z(e,E()),e.callbackNode===n?vl.bind(null,e):null}function yl(e,t){var n=tl;return e.current.memoizedState.isDehydrated&&(Dl(e,t).flags|=256),e=jl(e,t),e!==2&&(t=nl,nl=n,t!==null&&bl(t)),e}function bl(e){nl===null?nl=e:nl.push.apply(nl,e)}function xl(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Vr(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Sl(e,t){for(t&=~el,t&=~$c,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-zt(t),r=1<<n;e[n]=-1,t&=~r}}function Cl(e){if(q&6)throw Error(r(327));Rl();var t=Kt(e,0);if(!(t&1))return Z(e,E()),null;var n=jl(e,t);if(e.tag!==0&&n===2){var i=Yt(e);i!==0&&(t=i,n=yl(e,i))}if(n===1)throw n=Zc,Dl(e,0),Sl(e,t),Z(e,E()),n;if(n===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Il(e,nl,al),Z(e,E()),null}function wl(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(il=E()+500,da&&ha())}}function Tl(e){X!==null&&X.tag===0&&!(q&6)&&Rl();var t=q;q|=1;var n=Kc.transition,r=D;try{if(Kc.transition=null,D=1,e)return e()}finally{D=r,Kc.transition=n,q=t,!(q&6)&&ha()}}function El(){Jc=Yc.current,F(Yc)}function Dl(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Fi(n)),J!==null)for(n=J.return;n!==null;){var r=n;switch(Ea(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&aa();break;case 3:bo(),F(L),F(ta),To();break;case 5:So(r);break;case 4:bo();break;case 13:F(H);break;case 19:F(H);break;case 10:Xa(r.type._context);break;case 22:case 23:El()}n=n.return}if(qc=e,J=e=Xl(e.current,null),Y=Jc=t,Xc=0,Zc=null,el=$c=Qc=0,nl=tl=null,eo!==null){for(t=0;t<eo.length;t++)if(n=eo[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}eo=null}return e}function Ol(e,t){do{var n=J;try{if(Ya(),Eo.current=vs,Ao){for(var i=W.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}Ao=!1}if(U=0,ko=Oo=W=null,jo=!1,Mo=0,Gc.current=null,n===null||n.return===null){Xc=1,Zc=t,J=null;break}a:{var o=e,s=n.return,c=n,l=t;if(t=Y,c.flags|=32768,typeof l==`object`&&l&&typeof l.then==`function`){var u=l,d=c,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Is(s);if(m!==null){m.flags&=-257,Ls(m,s,c,o,t),m.mode&1&&Fs(o,u,t),t=m,l=u;var h=t.updateQueue;if(h===null){var g=new Set;g.add(l),t.updateQueue=g}else h.add(l);break a}else{if(!(t&1)){Fs(o,u,t),Al();break a}l=Error(r(426))}}else if(B&&c.mode&1){var _=Is(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Ls(_,s,c,o,t),La(ks(l,c));break a}}o=l=ks(l,c),Xc!==4&&(Xc=2),tl===null?tl=[o]:tl.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=Ns(o,l,t);uo(o,v);break a;case 1:c=l;var y=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError==`function`||b!==null&&typeof b.componentDidCatch==`function`&&(cl===null||!cl.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Ps(o,c,t);uo(o,x);break a}}o=o.return}while(o!==null)}Fl(n)}catch(e){t=e,J===n&&n!==null&&(J=n=n.return);continue}break}while(1)}function kl(){var e=Wc.current;return Wc.current=vs,e===null?vs:e}function Al(){(Xc===0||Xc===3||Xc===2)&&(Xc=4),qc===null||!(Qc&268435455)&&!($c&268435455)||Sl(qc,Y)}function jl(e,t){var n=q;q|=2;var i=kl();(qc!==e||Y!==t)&&(al=null,Dl(e,t));do try{Ml();break}catch(t){Ol(e,t)}while(1);if(Ya(),q=n,Wc.current=i,J!==null)throw Error(r(261));return qc=null,Y=0,Xc}function Ml(){for(;J!==null;)Pl(J)}function Nl(){for(;J!==null&&!Ot();)Pl(J)}function Pl(e){var t=Wl(e.alternate,e,Jc);e.memoizedProps=e.pendingProps,t===null?Fl(e):J=t,Gc.current=null}function Fl(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=mc(n,t),n!==null){n.flags&=32767,J=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Xc=6,J=null;return}}else if(n=pc(n,t,Jc),n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Xc===0&&(Xc=5)}function Il(e,t,n){var r=D,i=Kc.transition;try{Kc.transition=null,D=1,Ll(e,t,n,r)}finally{Kc.transition=i,D=r}return null}function Ll(e,t,n,i){do Rl();while(X!==null);if(q&6)throw Error(r(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if($t(e,o),e===qc&&(J=qc=null,Y=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ll||(ll=!0,Gl(Nt,function(){return Rl(),null})),o=(n.flags&15990)!=0,n.subtreeFlags&15990||o){o=Kc.transition,Kc.transition=null;var s=D;D=1;var c=q;q|=4,Gc.current=null,xc(e,n),Ic(n,e),Jr(Mi),En=!!ji,Mi=ji=null,e.current=n,Rc(n,e,a),kt(),q=c,D=s,Kc.transition=o}else e.current=n;if(ll&&(ll=!1,X=e,ul=a),o=e.pendingLanes,o===0&&(cl=null),Rt(n.stateNode,i),Z(e,E()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],i(a.value,{componentStack:a.stack,digest:a.digest});if(ol)throw ol=!1,e=sl,sl=null,e;return ul&1&&e.tag!==0&&Rl(),o=e.pendingLanes,o&1?e===fl?dl++:(dl=0,fl=e):dl=0,ha(),null}function Rl(){if(X!==null){var e=tn(ul),t=Kc.transition,n=D;try{if(Kc.transition=null,D=16>e?16:e,X===null)var i=!1;else{if(e=X,X=null,ul=0,q&6)throw Error(r(331));var a=q;for(q|=4,K=e.current;K!==null;){var o=K,s=o.child;if(K.flags&16){var c=o.deletions;if(c!==null){for(var l=0;l<c.length;l++){var u=c[l];for(K=u;K!==null;){var d=K;switch(d.tag){case 0:case 11:case 15:Sc(8,d,o)}var f=d.child;if(f!==null)f.return=d,K=f;else for(;K!==null;){d=K;var p=d.sibling,m=d.return;if(Tc(d),d===u){K=null;break}if(p!==null){p.return=m,K=p;break}K=m}}}var h=o.alternate;if(h!==null){var g=h.child;if(g!==null){h.child=null;do{var _=g.sibling;g.sibling=null,g=_}while(g!==null)}}K=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,K=s;else b:for(;K!==null;){if(o=K,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Sc(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,K=v;break b}K=o.return}}var y=e.current;for(K=y;K!==null;){s=K;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,K=b;else b:for(s=y;K!==null;){if(c=K,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Cc(9,c)}}catch(e){Q(c,c.return,e)}if(c===s){K=null;break b}var x=c.sibling;if(x!==null){x.return=c.return,K=x;break b}K=c.return}}if(q=a,ha(),Lt&&typeof Lt.onPostCommitFiberRoot==`function`)try{Lt.onPostCommitFiberRoot(It,e)}catch{}i=!0}return i}finally{D=n,Kc.transition=t}}return!1}function zl(e,t,n){t=ks(n,t),t=Ns(e,t,1),e=co(e,t,1),t=hl(),e!==null&&(Qt(e,1,t),Z(e,t))}function Q(e,t,n){if(e.tag===3)zl(e,e,n);else for(;t!==null;){if(t.tag===3){zl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(cl===null||!cl.has(r))){e=ks(n,e),e=Ps(t,e,1),t=co(t,e,1),e=hl(),t!==null&&(Qt(t,1,e),Z(t,e));break}}t=t.return}}function Bl(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=hl(),e.pingedLanes|=e.suspendedLanes&n,qc===e&&(Y&n)===n&&(Xc===4||Xc===3&&(Y&130023424)===Y&&500>E()-rl?Dl(e,0):el|=n),Z(e,t)}function Vl(e,t){t===0&&(e.mode&1?(t=Wt,Wt<<=1,!(Wt&130023424)&&(Wt=4194304)):t=1);var n=hl();e=ro(e,t),e!==null&&(Qt(e,t,n),Z(e,n))}function Hl(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vl(e,n)}function Ul(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(r(314))}i!==null&&i.delete(t),Vl(e,n)}var Wl=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||L.current)zs=!0;else{if((e.lanes&n)===0&&!(t.flags&128))return zs=!1,cc(e,t,n);zs=!!(e.flags&131072)}else zs=!1,B&&t.flags&1048576&&wa(t,va,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;oc(e,t),e=t.pendingProps;var a=ra(t,ta.current);Qa(t,n),a=Io(null,t,i,e,a,n);var o=Lo();return t.flags|=1,typeof a==`object`&&a&&typeof a.render==`function`&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ia(i)?(o=!0,ca(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ao(t),a.updater=ws,t.stateNode=a,a._reactInternals=t,Os(t,i,e,n),t=Js(null,t,i,!0,o,n)):(t.tag=0,B&&o&&Ta(t),Bs(null,t,a,n),t=t.child),t;case 16:i=t.elementType;a:{switch(oc(e,t),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=Yl(i),e=Ss(i,e),a){case 0:t=Ks(null,t,i,e,n);break a;case 1:t=qs(null,t,i,e,n);break a;case 11:t=Vs(null,t,i,e,n);break a;case 14:t=Hs(null,t,i,Ss(i.type,e),n);break a}throw Error(r(306,i,``))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:Ss(i,a),Ks(e,t,i,a,n);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:Ss(i,a),qs(e,t,i,a,n);case 3:a:{if(Ys(t),e===null)throw Error(r(387));i=t.pendingProps,o=t.memoizedState,a=o.element,oo(e,t),fo(t,i,null,n);var s=t.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=ks(Error(r(423)),t),t=Xs(e,t,i,n,a);break a}else if(i!==a){a=ks(Error(r(424)),t),t=Xs(e,t,i,n,a);break a}else for(Oa=Bi(t.stateNode.containerInfo.firstChild),Da=t,B=!0,ka=null,n=Wa(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ia(),i===a){t=sc(e,t,n);break a}Bs(e,t,i,n)}t=t.child}return t;case 5:return xo(t),e===null&&Na(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,s=a.children,Ni(i,a)?s=null:o!==null&&Ni(i,o)&&(t.flags|=32),Gs(e,t),Bs(e,t,s,n),t.child;case 6:return e===null&&Na(t),null;case 13:return $s(e,t,n);case 4:return yo(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Ua(t,null,i,n):Bs(e,t,i,n),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:Ss(i,a),Vs(e,t,i,a,n);case 7:return Bs(e,t,t.pendingProps,n),t.child;case 8:return Bs(e,t,t.pendingProps.children,n),t.child;case 12:return Bs(e,t,t.pendingProps.children,n),t.child;case 10:a:{if(i=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,I(Ga,i._currentValue),i._currentValue=s,o!==null)if(Vr(o.value,s)){if(o.children===a.children&&!L.current){t=sc(e,t,n);break a}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){s=o.child;for(var l=c.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=so(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Za(o.return,n,t),c.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(r(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Za(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Bs(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,Qa(t,n),a=$a(a),i=i(a),t.flags|=1,Bs(e,t,i,n),t.child;case 14:return i=t.type,a=Ss(i,t.pendingProps),a=Ss(i.type,a),Hs(e,t,i,a,n);case 15:return Us(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:Ss(i,a),oc(e,t),t.tag=1,ia(i)?(e=!0,ca(t)):e=!1,Qa(t,n),Es(t,i,a),Os(t,i,a,n),Js(null,t,i,!0,e,n);case 19:return ac(e,t,n);case 22:return Ws(e,t,n)}throw Error(r(156,t.tag))};function Gl(e,t){return Et(e,t)}function Kl(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ql(e,t,n,r){return new Kl(e,t,n,r)}function Jl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yl(e){if(typeof e==`function`)return+!!Jl(e);if(e!=null){if(e=e.$$typeof,e===se)return 11;if(e===ue)return 14}return 2}function Xl(e,t){var n=e.alternate;return n===null?(n=ql(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Zl(e,t,n,i,a,o){var s=2;if(i=e,typeof e==`function`)Jl(e)&&(s=1);else if(typeof e==`string`)s=5;else a:switch(e){case ne:return Ql(n.children,a,o,t);case re:s=8,a|=8;break;case ie:return e=ql(12,n,t,a|2),e.elementType=ie,e.lanes=o,e;case ce:return e=ql(13,n,t,a),e.elementType=ce,e.lanes=o,e;case le:return e=ql(19,n,t,a),e.elementType=le,e.lanes=o,e;case fe:return $l(n,a,o,t);default:if(typeof e==`object`&&e)switch(e.$$typeof){case ae:s=10;break a;case oe:s=9;break a;case se:s=11;break a;case ue:s=14;break a;case de:s=16,i=null;break a}throw Error(r(130,e==null?e:typeof e,``))}return t=ql(s,n,t,a),t.elementType=e,t.type=i,t.lanes=o,t}function Ql(e,t,n,r){return e=ql(7,e,r,t),e.lanes=n,e}function $l(e,t,n,r){return e=ql(22,e,r,t),e.elementType=fe,e.lanes=n,e.stateNode={isHidden:!1},e}function eu(e,t,n){return e=ql(6,e,null,t),e.lanes=n,e}function tu(e,t,n){return t=ql(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function nu(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zt(0),this.expirationTimes=Zt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ru(e,t,n,r,i,a,o,s,c){return e=new nu(e,t,n,s,c),t===1?(t=1,!0===a&&(t|=8)):t=0,a=ql(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ao(a),e}function iu(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:te,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}function au(e){if(!e)return ea;e=e._reactInternals;a:{if(bt(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break a;case 1:if(ia(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break a}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var n=e.type;if(ia(n))return sa(e,n,t)}return t}function ou(e,t,n,r,i,a,o,s,c){return e=ru(n,r,!0,e,i,a,o,s,c),e.context=au(null),n=e.current,r=hl(),i=gl(n),a=so(r,i),a.callback=t??null,co(n,a,i),e.current.lanes=i,Qt(e,i,r),Z(e,r),e}function su(e,t,n,r){var i=t.current,a=hl(),o=gl(i);return n=au(n),t.context===null?t.context=n:t.pendingContext=n,t=so(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=co(i,t,o),e!==null&&(_l(e,i,o,a),lo(e,i,o)),o}function cu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function lu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function uu(e,t){lu(e,t),(e=e.alternate)&&lu(e,t)}function du(){return null}var fu=typeof reportError==`function`?reportError:function(e){console.error(e)};function pu(e){this._internalRoot=e}mu.prototype.render=pu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));su(e,t,null,null)},mu.prototype.unmount=pu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tl(function(){su(null,e,null,null)}),t[Wi]=null}};function mu(e){this._internalRoot=e}mu.prototype.unstable_scheduleHydration=function(e){if(e){var t=O();e={blockedOn:null,target:e,priority:t};for(var n=0;n<mn.length&&t!==0&&t<mn[n].priority;n++);mn.splice(n,0,e),n===0&&yn(e)}};function hu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==` react-mount-point-unstable `))}function _u(){}function vu(e,t,n,r,i){if(i){if(typeof r==`function`){var a=r;r=function(){var e=cu(o);a.call(e)}}var o=ou(t,r,e,0,null,!1,!1,``,_u);return e._reactRootContainer=o,e[Wi]=o.current,yi(e.nodeType===8?e.parentNode:e),Tl(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r==`function`){var s=r;r=function(){var e=cu(c);s.call(e)}}var c=ru(e,0,!1,null,null,!1,!1,``,_u);return e._reactRootContainer=c,e[Wi]=c.current,yi(e.nodeType===8?e.parentNode:e),Tl(function(){su(t,c,n,r)}),c}function yu(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i==`function`){var s=i;i=function(){var e=cu(o);s.call(e)}}su(t,o,e,i)}else o=vu(n,t,e,i,r);return cu(o)}nn=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Gt(t.pendingLanes);n!==0&&(en(t,n|1),Z(t,E()),!(q&6)&&(il=E()+500,ha()))}break;case 13:Tl(function(){var t=ro(e,1);t!==null&&_l(t,e,1,hl())}),uu(e,1)}},rn=function(e){if(e.tag===13){var t=ro(e,134217728);t!==null&&_l(t,e,134217728,hl()),uu(e,134217728)}},an=function(e){if(e.tag===13){var t=gl(e),n=ro(e,t);n!==null&&_l(n,e,t,hl()),uu(e,t)}},O=function(){return D},on=function(e,t){var n=D;try{return D=e,t()}finally{D=n}},et=function(e,t,n){switch(t){case`input`:if(je(e,n),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name=`+JSON.stringify(``+t)+`][type="radio"]`),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=Xi(i);if(!a)throw Error(r(90));Ee(i),je(i,a)}}}break;case`textarea`:Re(e,n);break;case`select`:t=n.value,t!=null&&Fe(e,!!n.multiple,t,!1)}},T=wl,ot=Tl;var bu={usingClientEntryPoint:!1,Events:[Yi,P,Xi,it,at,wl]},xu={findFiberByHostInstance:Ji,bundleType:0,version:`18.3.1`,rendererPackageName:`react-dom`},Su={bundleType:xu.bundleType,version:xu.version,rendererPackageName:xu.rendererPackageName,rendererConfig:xu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wt(e),e===null?null:e.stateNode},findFiberByHostInstance:xu.findFiberByHostInstance||du,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:`18.3.1-next-f1338f8080-20240426`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Cu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cu.isDisabled&&Cu.supportsFiber)try{It=Cu.inject(Su),Lt=Cu}catch{}}e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bu,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hu(t))throw Error(r(200));return iu(e,t,null,n)},e.createRoot=function(e,t){if(!hu(e))throw Error(r(299));var n=!1,i=``,a=fu;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=ru(e,1,!1,null,null,n,!1,i,a),e[Wi]=t.current,yi(e.nodeType===8?e.parentNode:e),new pu(t)},e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(r(188)):(e=Object.keys(e).join(`,`),Error(r(268,e)));return e=wt(t),e=e===null?null:e.stateNode,e},e.flushSync=function(e){return Tl(e)},e.hydrate=function(e,t,n){if(!gu(t))throw Error(r(200));return yu(null,e,t,!0,n)},e.hydrateRoot=function(e,t,n){if(!hu(e))throw Error(r(405));var i=n!=null&&n.hydratedSources||null,a=!1,o=``,s=fu;if(n!=null&&(!0===n.unstable_strictMode&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=ou(t,null,e,1,n??null,a,!1,o,s),e[Wi]=t.current,yi(e),i)for(e=0;e<i.length;e++)n=i[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new mu(t)},e.render=function(e,t,n){if(!gu(t))throw Error(r(200));return yu(null,e,t,!1,n)},e.unmountComponentAtNode=function(e){if(!gu(e))throw Error(r(40));return e._reactRootContainer?(Tl(function(){yu(null,null,e,!1,function(){e._reactRootContainer=null,e[Wi]=null})}),!0):!1},e.unstable_batchedUpdates=wl,e.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!gu(n))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return yu(e,t,n,!1,i)},e.version=`18.3.1-next-f1338f8080-20240426`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=m();e.createRoot=t.createRoot,e.hydrateRoot=t.hydrateRoot})),g=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),_=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),v={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},y=c(u()),b=(0,y.forwardRef)(({color:e=`currentColor`,size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>(0,y.createElement)(`svg`,{ref:c,...v,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:_(`lucide`,i),...s},[...o.map(([e,t])=>(0,y.createElement)(e,t)),...Array.isArray(a)?a:[a]])),x=(e,t)=>{let n=(0,y.forwardRef)(({className:n,...r},i)=>(0,y.createElement)(b,{ref:i,iconNode:t,className:_(`lucide-${g(e)}`,n),...r}));return n.displayName=`${e}`,n},S=x(`ArrowLeft`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),C=x(`ArrowRight`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),ee=x(`Award`,[[`path`,{d:`m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526`,key:`1yiouv`}],[`circle`,{cx:`12`,cy:`8`,r:`6`,key:`1vp47v`}]]),te=x(`BookCheck`,[[`path`,{d:`M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20`,key:`k3hazp`}],[`path`,{d:`m9 9.5 2 2 4-4`,key:`1dth82`}]]),ne=x(`BookMarked`,[[`path`,{d:`M10 2v8l3-3 3 3V2`,key:`sqw3rj`}],[`path`,{d:`M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20`,key:`k3hazp`}]]),re=x(`BookOpen`,[[`path`,{d:`M12 7v14`,key:`1akyts`}],[`path`,{d:`M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`,key:`ruj8y`}]]),ie=x(`Brain`,[[`path`,{d:`M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z`,key:`l5xja`}],[`path`,{d:`M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z`,key:`ep3f8r`}],[`path`,{d:`M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4`,key:`1p4c4q`}],[`path`,{d:`M17.599 6.5a3 3 0 0 0 .399-1.375`,key:`tmeiqw`}],[`path`,{d:`M6.003 5.125A3 3 0 0 0 6.401 6.5`,key:`105sqy`}],[`path`,{d:`M3.477 10.896a4 4 0 0 1 .585-.396`,key:`ql3yin`}],[`path`,{d:`M19.938 10.5a4 4 0 0 1 .585.396`,key:`1qfode`}],[`path`,{d:`M6 18a4 4 0 0 1-1.967-.516`,key:`2e4loj`}],[`path`,{d:`M19.967 17.484A4 4 0 0 1 18 18`,key:`159ez6`}]]),ae=x(`CalendarCheck2`,[[`path`,{d:`M8 2v4`,key:`1cmpym`}],[`path`,{d:`M16 2v4`,key:`4m81vk`}],[`path`,{d:`M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8`,key:`bce9hv`}],[`path`,{d:`M3 10h18`,key:`8toen8`}],[`path`,{d:`m16 20 2 2 4-4`,key:`13tcca`}]]),oe=x(`CalendarClock`,[[`path`,{d:`M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5`,key:`1osxxc`}],[`path`,{d:`M16 2v4`,key:`4m81vk`}],[`path`,{d:`M8 2v4`,key:`1cmpym`}],[`path`,{d:`M3 10h5`,key:`r794hk`}],[`path`,{d:`M17.5 17.5 16 16.3V14`,key:`akvzfd`}],[`circle`,{cx:`16`,cy:`16`,r:`6`,key:`qoo3c4`}]]),se=x(`ChartColumn`,[[`path`,{d:`M3 3v16a2 2 0 0 0 2 2h16`,key:`c24i48`}],[`path`,{d:`M18 17V9`,key:`2bz60n`}],[`path`,{d:`M13 17V5`,key:`1frdt8`}],[`path`,{d:`M8 17v-3`,key:`17ska0`}]]),ce=x(`Check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),le=x(`CircleCheck`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),ue=x(`CircleX`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m15 9-6 6`,key:`1uzhvr`}],[`path`,{d:`m9 9 6 6`,key:`z0biqf`}]]),de=x(`ClipboardCheck`,[[`rect`,{width:`8`,height:`4`,x:`8`,y:`2`,rx:`1`,ry:`1`,key:`tgr4d6`}],[`path`,{d:`M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2`,key:`116196`}],[`path`,{d:`m9 14 2 2 4-4`,key:`df797q`}]]),fe=x(`Clock3`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`polyline`,{points:`12 6 12 12 16.5 12`,key:`1aq6pp`}]]),pe=x(`CloudDownload`,[[`path`,{d:`M12 13v8l-4-4`,key:`1f5nwf`}],[`path`,{d:`m12 21 4-4`,key:`1lfcce`}],[`path`,{d:`M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284`,key:`ui1hmy`}]]),me=x(`CloudOff`,[[`path`,{d:`m2 2 20 20`,key:`1ooewy`}],[`path`,{d:`M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193`,key:`yfwify`}],[`path`,{d:`M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07`,key:`jlfiyv`}]]),w=x(`CloudUpload`,[[`path`,{d:`M12 13v8`,key:`1l5pq0`}],[`path`,{d:`M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242`,key:`1pljnt`}],[`path`,{d:`m8 17 4-4 4 4`,key:`1quai1`}]]),he=x(`Cloud`,[[`path`,{d:`M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z`,key:`p7xjir`}]]),ge=x(`Database`,[[`ellipse`,{cx:`12`,cy:`5`,rx:`9`,ry:`3`,key:`msslwz`}],[`path`,{d:`M3 5V19A9 3 0 0 0 21 19V5`,key:`1wlel7`}],[`path`,{d:`M3 12A9 3 0 0 0 21 12`,key:`mv7ke4`}]]),_e=x(`Download`,[[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`polyline`,{points:`7 10 12 15 17 10`,key:`2ggqvy`}],[`line`,{x1:`12`,x2:`12`,y1:`15`,y2:`3`,key:`1vk2je`}]]),ve=x(`ExternalLink`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`M10 14 21 3`,key:`gplh6r`}],[`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,key:`a6xqqp`}]]),ye=x(`Eye`,[[`path`,{d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,key:`1nclc0`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),be=x(`Flame`,[[`path`,{d:`M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z`,key:`96xj49`}]]),xe=x(`Gauge`,[[`path`,{d:`m12 14 4-4`,key:`9kzdfg`}],[`path`,{d:`M3.34 19a10 10 0 1 1 17.32 0`,key:`19p75a`}]]),Se=x(`Gem`,[[`path`,{d:`M6 3h12l4 6-10 13L2 9Z`,key:`1pcd5k`}],[`path`,{d:`M11 3 8 9l4 13 4-13-3-6`,key:`1fcu3u`}],[`path`,{d:`M2 9h20`,key:`16fsjt`}]]),Ce=x(`Gift`,[[`rect`,{x:`3`,y:`8`,width:`18`,height:`4`,rx:`1`,key:`bkv52`}],[`path`,{d:`M12 8v13`,key:`1c76mn`}],[`path`,{d:`M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7`,key:`6wjy6b`}],[`path`,{d:`M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5`,key:`1ihvrl`}]]),we=x(`GitMerge`,[[`circle`,{cx:`18`,cy:`18`,r:`3`,key:`1xkwt0`}],[`circle`,{cx:`6`,cy:`6`,r:`3`,key:`1lh9wr`}],[`path`,{d:`M6 21V9a9 9 0 0 0 9 9`,key:`7kw0sc`}]]),Te=x(`Inbox`,[[`polyline`,{points:`22 12 16 12 14 15 10 15 8 12 2 12`,key:`o97t9d`}],[`path`,{d:`M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z`,key:`oot6mr`}]]),Ee=x(`KeyRound`,[[`path`,{d:`M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z`,key:`1s6t7t`}],[`circle`,{cx:`16.5`,cy:`7.5`,r:`.5`,fill:`currentColor`,key:`w0ekpg`}]]),De=x(`Layers`,[[`path`,{d:`M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z`,key:`zw3jo`}],[`path`,{d:`M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12`,key:`1wduqc`}],[`path`,{d:`M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17`,key:`kqbvx6`}]]),Oe=x(`LibraryBig`,[[`rect`,{width:`8`,height:`18`,x:`3`,y:`3`,rx:`1`,key:`oynpb5`}],[`path`,{d:`M7 3v18`,key:`bbkbws`}],[`path`,{d:`M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z`,key:`1qboyk`}]]),ke=x(`ListChecks`,[[`path`,{d:`m3 17 2 2 4-4`,key:`1jhpwq`}],[`path`,{d:`m3 7 2 2 4-4`,key:`1obspn`}],[`path`,{d:`M13 6h8`,key:`15sg57`}],[`path`,{d:`M13 12h8`,key:`h98zly`}],[`path`,{d:`M13 18h8`,key:`oe0vm4`}]]),Ae=x(`ListFilter`,[[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M7 12h10`,key:`b7w52i`}],[`path`,{d:`M10 18h4`,key:`1ulq68`}]]),je=x(`LoaderCircle`,[[`path`,{d:`M21 12a9 9 0 1 1-6.219-8.56`,key:`13zald`}]]),Me=x(`LogIn`,[[`path`,{d:`M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4`,key:`u53s6r`}],[`polyline`,{points:`10 17 15 12 10 7`,key:`1ail0h`}],[`line`,{x1:`15`,x2:`3`,y1:`12`,y2:`12`,key:`v6grx8`}]]),Ne=x(`LogOut`,[[`path`,{d:`M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4`,key:`1uf3rs`}],[`polyline`,{points:`16 17 21 12 16 7`,key:`1gabdz`}],[`line`,{x1:`21`,x2:`9`,y1:`12`,y2:`12`,key:`1uyos4`}]]),Pe=x(`Mail`,[[`rect`,{width:`20`,height:`16`,x:`2`,y:`4`,rx:`2`,key:`18n3k1`}],[`path`,{d:`m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7`,key:`1ocrg3`}]]),Fe=x(`NotebookTabs`,[[`path`,{d:`M2 6h4`,key:`aawbzj`}],[`path`,{d:`M2 10h4`,key:`l0bgd4`}],[`path`,{d:`M2 14h4`,key:`1gsvsf`}],[`path`,{d:`M2 18h4`,key:`1bu2t1`}],[`rect`,{width:`16`,height:`20`,x:`4`,y:`2`,rx:`2`,key:`1nb95v`}],[`path`,{d:`M15 2v20`,key:`dcj49h`}],[`path`,{d:`M15 7h5`,key:`1xj5lc`}],[`path`,{d:`M15 12h5`,key:`w5shd9`}],[`path`,{d:`M15 17h5`,key:`1qaofu`}]]),Ie=x(`Plus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]),Le=x(`RefreshCcw`,[[`path`,{d:`M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`14sxne`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}],[`path`,{d:`M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16`,key:`1hlbsb`}],[`path`,{d:`M16 16h5v5`,key:`ccwih5`}]]),Re=x(`RefreshCw`,[[`path`,{d:`M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8`,key:`v9h5vc`}],[`path`,{d:`M21 3v5h-5`,key:`1q7to0`}],[`path`,{d:`M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16`,key:`3uifl3`}],[`path`,{d:`M8 16H3v5`,key:`1cv678`}]]),ze=x(`Repeat2`,[[`path`,{d:`m2 9 3-3 3 3`,key:`1ltn5i`}],[`path`,{d:`M13 18H7a2 2 0 0 1-2-2V6`,key:`1r6tfw`}],[`path`,{d:`m22 15-3 3-3-3`,key:`4rnwn2`}],[`path`,{d:`M11 6h6a2 2 0 0 1 2 2v10`,key:`2f72bc`}]]),Be=x(`RotateCcw`,[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`1357e3`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}]]),Ve=x(`Settings`,[[`path`,{d:`M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z`,key:`1qme2f`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),He=x(`ShieldAlert`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`M12 8v4`,key:`1got3b`}],[`path`,{d:`M12 16h.01`,key:`1drbdi`}]]),Ue=x(`ShoppingBag`,[[`path`,{d:`M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z`,key:`hou9p0`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M16 10a4 4 0 0 1-8 0`,key:`1ltviw`}]]),We=x(`Smartphone`,[[`rect`,{width:`14`,height:`20`,x:`5`,y:`2`,rx:`2`,ry:`2`,key:`1yt0o3`}],[`path`,{d:`M12 18h.01`,key:`mhygvu`}]]),Ge=x(`Swords`,[[`polyline`,{points:`14.5 17.5 3 6 3 3 6 3 17.5 14.5`,key:`1hfsw2`}],[`line`,{x1:`13`,x2:`19`,y1:`19`,y2:`13`,key:`1vrmhu`}],[`line`,{x1:`16`,x2:`20`,y1:`16`,y2:`20`,key:`1bron3`}],[`line`,{x1:`19`,x2:`21`,y1:`21`,y2:`19`,key:`13pww6`}],[`polyline`,{points:`14.5 6.5 18 3 21 3 21 6 17.5 9.5`,key:`hbey2j`}],[`line`,{x1:`5`,x2:`9`,y1:`14`,y2:`18`,key:`1hf58s`}],[`line`,{x1:`7`,x2:`4`,y1:`17`,y2:`20`,key:`pidxm4`}],[`line`,{x1:`3`,x2:`5`,y1:`19`,y2:`21`,key:`1pehsh`}]]),Ke=x(`Target`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`circle`,{cx:`12`,cy:`12`,r:`6`,key:`1vlfrh`}],[`circle`,{cx:`12`,cy:`12`,r:`2`,key:`1c9p78`}]]),qe=x(`ThumbsDown`,[[`path`,{d:`M17 14V2`,key:`8ymqnk`}],[`path`,{d:`M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z`,key:`m61m77`}]]),Je=x(`ThumbsUp`,[[`path`,{d:`M7 10v12`,key:`1qc93n`}],[`path`,{d:`M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z`,key:`emmmcr`}]]),Ye=x(`TrendingUp`,[[`polyline`,{points:`22 7 13.5 15.5 8.5 10.5 2 17`,key:`126l90`}],[`polyline`,{points:`16 7 22 7 22 13`,key:`kwv8wd`}]]),Xe=x(`Upload`,[[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`polyline`,{points:`17 8 12 3 7 8`,key:`t8dd8p`}],[`line`,{x1:`12`,x2:`12`,y1:`3`,y2:`15`,key:`widbto`}]]),Ze=x(`UserPlus`,[[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}],[`line`,{x1:`19`,x2:`19`,y1:`8`,y2:`14`,key:`1bvyxn`}],[`line`,{x1:`22`,x2:`16`,y1:`11`,y2:`11`,key:`1shjgl`}]]),Qe=x(`UserRound`,[[`circle`,{cx:`12`,cy:`8`,r:`5`,key:`1hypcn`}],[`path`,{d:`M20 21a8 8 0 0 0-16 0`,key:`rfgkzh`}]]),$e=x(`Volume2`,[[`path`,{d:`M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`,key:`uqj9uw`}],[`path`,{d:`M16 9a5 5 0 0 1 0 6`,key:`1q6k2b`}],[`path`,{d:`M19.364 18.364a9 9 0 0 0 0-12.728`,key:`ijwkga`}]]),et=x(`WifiOff`,[[`path`,{d:`M12 20h.01`,key:`zekei9`}],[`path`,{d:`M8.5 16.429a5 5 0 0 1 7 0`,key:`1bycff`}],[`path`,{d:`M5 12.859a10 10 0 0 1 5.17-2.69`,key:`1dl1wf`}],[`path`,{d:`M19 12.859a10 10 0 0 0-2.007-1.523`,key:`4k23kn`}],[`path`,{d:`M2 8.82a15 15 0 0 1 4.177-2.643`,key:`1grhjp`}],[`path`,{d:`M22 8.82a15 15 0 0 0-11.288-3.764`,key:`z3jwby`}],[`path`,{d:`m2 2 20 20`,key:`1ooewy`}]]),tt=x(`Wifi`,[[`path`,{d:`M12 20h.01`,key:`zekei9`}],[`path`,{d:`M2 8.82a15 15 0 0 1 20 0`,key:`dnpr2z`}],[`path`,{d:`M5 12.859a10 10 0 0 1 14 0`,key:`1x1e6c`}],[`path`,{d:`M8.5 16.429a5 5 0 0 1 7 0`,key:`1bycff`}]]),nt=x(`X`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),rt=o((e=>{var t=u(),n=Symbol.for(`react.element`),r=Symbol.for(`react.fragment`),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var s,c={},l=null,u=null;for(s in r!==void 0&&(l=``+r),t.key!==void 0&&(l=``+t.key),t.ref!==void 0&&(u=t.ref),t)i.call(t,s)&&!o.hasOwnProperty(s)&&(c[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)c[s]===void 0&&(c[s]=t[s]);return{$$typeof:n,type:e,key:l,ref:u,props:c,_owner:a.current}}e.Fragment=r,e.jsx=s,e.jsxs=s})),it=o(((e,t)=>{t.exports=rt()})),at=c(h(),1),T=it();function ot({user:e,profile:t,onLogin:n,onAccount:r}){return e?(0,T.jsxs)(`button`,{type:`button`,onClick:r,className:`inline-flex h-9 items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 text-xs font-semibold text-emerald-700 transition hover:border-emerald-400`,children:[(0,T.jsx)(Qe,{size:15,"aria-hidden":`true`}),(0,T.jsx)(`span`,{className:`max-w-[96px] truncate`,children:t?.displayName||t?.username||e.email}),(0,T.jsx)(he,{size:14,"aria-hidden":`true`})]}):(0,T.jsxs)(`button`,{type:`button`,onClick:n,className:`inline-flex h-9 items-center gap-2 rounded-lg border border-sky-200 bg-white px-3 text-xs font-semibold text-harbor transition hover:border-harbor`,children:[(0,T.jsx)(Me,{size:15,"aria-hidden":`true`}),`登录同步`]})}var st=[{route:`dashboard`,label:`首页 Dashboard`,shortLabel:`首页`,icon:se},{route:`units`,label:`单元学习`,shortLabel:`单元`,icon:re},{route:`review`,label:`今日复习`,shortLabel:`复习`,icon:Le},{route:`monster`,label:`打怪闯关`,shortLabel:`打怪`,icon:Ge},{route:`profile`,label:`我的`,shortLabel:`我的`,icon:Qe}],ct=[st[0],st[1],{route:`total`,label:`总词库`,icon:Oe},st[2],{route:`quiz`,label:`测试中心`,icon:de},st[3],{route:`checkin`,label:`打卡签到`,icon:ae},{route:`shop`,label:`兑换商店`,icon:Ue},{route:`statistics`,label:`学习统计`,icon:se},{route:`achievements`,label:`成就徽章`,icon:ee},{route:`settings`,label:`设置`,icon:Ve},{route:`account`,label:`账号同步`,icon:he}];function lt(e,t){return e===t||t===`units`&&(e===`unitDetail`||e===`study`||e===`recall`)||t===`quiz`&&e===`quiz`}function ut({current:e,onNavigate:t}){return(0,T.jsxs)(`aside`,{className:`fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-slate-200 bg-[#f8fbff]/95 p-4 backdrop-blur lg:block`,children:[(0,T.jsxs)(`button`,{type:`button`,onClick:()=>t(`dashboard`),className:`mb-6 flex items-center gap-3 rounded-lg p-2 text-left transition hover:bg-white`,children:[(0,T.jsx)(`span`,{className:`grid h-11 w-11 place-items-center rounded-lg bg-ink text-paper`,children:(0,T.jsx)(ne,{size:22,"aria-hidden":`true`})}),(0,T.jsxs)(`span`,{children:[(0,T.jsx)(`span`,{className:`block text-lg font-semibold leading-none text-ink`,children:`Reword`}),(0,T.jsx)(`span`,{className:`text-xs text-slate-500`,children:`2027考研英语记忆系统`})]})]}),(0,T.jsx)(`nav`,{className:`space-y-1.5`,children:ct.map(n=>{let r=n.icon;return(0,T.jsxs)(`button`,{type:`button`,onClick:()=>t(n.route),className:`flex min-h-11 w-full items-center gap-3 rounded-lg border px-3 text-sm font-medium transition ${lt(e,n.route)?`border-indigo-200 bg-white text-indigo-600 shadow-sm`:`border-transparent text-slate-600 hover:bg-white hover:text-ink`}`,children:[(0,T.jsx)(r,{size:18,"aria-hidden":`true`}),(0,T.jsx)(`span`,{children:n.label})]},n.route)})})]})}function dt({current:e,onNavigate:t}){return(0,T.jsx)(`nav`,{className:`fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-[#f8fbff]/95 px-2 pb-[max(env(safe-area-inset-bottom),8px)] pt-2 shadow-[0_-8px_20px_rgba(25,33,44,0.06)] backdrop-blur md:hidden`,children:(0,T.jsx)(`div`,{className:`mx-auto grid max-w-xl grid-cols-5 gap-1`,children:st.map(n=>{let r=n.icon;return(0,T.jsxs)(`button`,{type:`button`,onClick:()=>t(n.route),className:`grid min-h-12 place-items-center rounded-lg border text-xs transition ${lt(e,n.route)?`border-indigo-200 bg-white text-indigo-600`:`border-transparent text-slate-500 hover:bg-white`}`,title:n.shortLabel||n.label,children:[(0,T.jsx)(r,{size:18,"aria-hidden":`true`}),(0,T.jsx)(`span`,{children:n.shortLabel||n.label})]},n.route)})})})}function ft(e){return e<768?`mobile`:e<1024?`tablet`:`desktop`}function pt(e,t){return e>=t?`landscape`:`portrait`}function mt(){if(typeof window>`u`)return{width:1024,height:768,device:`desktop`,orientation:`landscape`};let e=window.innerWidth,t=window.innerHeight;return{width:e,height:t,device:ft(e),orientation:pt(e,t)}}function ht(){let[e,t]=(0,y.useState)(()=>mt());return(0,y.useEffect)(()=>{let e=()=>t(mt());return e(),window.addEventListener(`resize`,e),window.addEventListener(`orientationchange`,e),()=>{window.removeEventListener(`resize`,e),window.removeEventListener(`orientationchange`,e)}},[]),{...e,isMobile:e.device===`mobile`,isTablet:e.device===`tablet`,isDesktop:e.device===`desktop`}}function gt({children:e,className:t=``}){let{isMobile:n,isTablet:r}=ht();return(0,T.jsx)(`main`,{className:`${n?`w-full px-4 pb-28 pt-4`:r?`mx-auto max-w-5xl px-6 pb-12 pt-5`:`mx-auto max-w-7xl px-8 pb-12 pt-6`} ${t}`.trim(),children:e})}function _t({current:e,onNavigate:t}){return(0,T.jsxs)(`aside`,{className:`fixed inset-y-0 left-0 z-30 hidden w-20 border-r border-slate-200 bg-[#f8fbff]/95 px-2 py-4 backdrop-blur md:block lg:hidden`,children:[(0,T.jsx)(`button`,{type:`button`,onClick:()=>t(`dashboard`),className:`mx-auto mb-6 grid h-11 w-11 place-items-center rounded-lg bg-ink text-paper`,children:(0,T.jsx)(ne,{size:21,"aria-hidden":`true`})}),(0,T.jsx)(`nav`,{className:`space-y-2`,children:st.map(n=>{let r=n.icon;return(0,T.jsxs)(`button`,{type:`button`,onClick:()=>t(n.route),className:`grid min-h-14 w-full place-items-center rounded-lg border text-[11px] transition ${lt(e,n.route)?`border-indigo-200 bg-white text-indigo-600 shadow-sm`:`border-transparent text-slate-500 hover:bg-white`}`,title:n.label,children:[(0,T.jsx)(r,{size:19,"aria-hidden":`true`}),(0,T.jsx)(`span`,{children:n.shortLabel||n.label})]},n.route)})})]})}function vt({current:e,onNavigate:t,user:n=null,profile:r=null,children:i}){return(0,T.jsxs)(`div`,{className:`min-h-screen bg-app text-ink`,children:[(0,T.jsx)(ut,{current:e,onNavigate:t}),(0,T.jsx)(_t,{current:e,onNavigate:t}),(0,T.jsx)(`header`,{className:`sticky top-0 z-30 border-b border-slate-200 bg-[#f8fbff]/95 backdrop-blur md:hidden`,children:(0,T.jsxs)(`div`,{className:`mx-auto flex items-center justify-between px-4 py-3`,children:[(0,T.jsxs)(`button`,{type:`button`,onClick:()=>t(`dashboard`),className:`flex items-center gap-3 text-left`,children:[(0,T.jsx)(`span`,{className:`grid h-9 w-9 place-items-center rounded-lg border border-ink/15 bg-ink text-paper`,children:(0,T.jsx)(ne,{size:20,"aria-hidden":`true`})}),(0,T.jsxs)(`span`,{children:[(0,T.jsx)(`span`,{className:`block text-lg font-semibold leading-none`,children:`Reword`}),(0,T.jsx)(`span`,{className:`text-xs text-slate-500`,children:`2027考研英语红宝书`})]})]}),(0,T.jsx)(ot,{user:n,profile:r,onLogin:()=>t(`login`),onAccount:()=>t(`account`)})]})}),(0,T.jsx)(`div`,{className:`md:pl-20 lg:pl-64`,children:(0,T.jsx)(gt,{className:e===`study`||e===`recall`||e===`quiz`?`px-3 pb-0 pt-2 md:px-6 md:pb-12 md:pt-5 lg:px-8 lg:pt-6`:``,children:i})}),(0,T.jsx)(dt,{current:e,onNavigate:t})]})}function yt({reward:e}){return e?(0,T.jsxs)(`div`,{className:`rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800`,children:[(0,T.jsx)(`strong`,{children:e.title}),` +`,e.xp,` XP +`,e.coins,` 金币`]}):null}var bt=`https://github.com/lihuaozou/reword/releases/download/latest-apk/reword-debug.apk`,xt=`https://github.com/lihuaozou/reword/actions/workflows/build-android-apk.yml`;function St({compact:e=!1}){return(0,T.jsxs)(`section`,{className:`rounded-lg border border-sky-100 bg-white shadow-soft ${e?`p-4`:`p-5`}`,children:[(0,T.jsxs)(`div`,{className:`flex items-start justify-between gap-4`,children:[(0,T.jsxs)(`div`,{className:`min-w-0`,children:[(0,T.jsxs)(`div`,{className:`flex items-center gap-2 text-sm font-semibold text-harbor`,children:[(0,T.jsx)(We,{size:18,"aria-hidden":`true`}),`Android 测试安装包`]}),(0,T.jsx)(`h2`,{className:`${e?`mt-1 text-lg`:`mt-2 text-xl`} font-semibold text-ink`,children:`下载 Reword APK`}),(0,T.jsx)(`p`,{className:`mt-2 text-sm leading-6 text-slate-600`,children:`这是 debug 测试版，可直接安装到安卓手机。首次安装时，系统可能要求允许当前来源安装未知应用。`})]}),(0,T.jsx)(`span`,{className:`hidden shrink-0 rounded-lg border border-sky-100 bg-[#f8fbff] px-3 py-2 text-xs font-semibold text-harbor sm:inline-flex`,children:`WebView`})]}),(0,T.jsxs)(`div`,{className:`mt-4 flex flex-wrap gap-3`,children:[(0,T.jsxs)(`a`,{href:bt,className:`btn-primary`,rel:`noreferrer`,children:[(0,T.jsx)(_e,{size:18,"aria-hidden":`true`}),`下载 APK`]}),(0,T.jsxs)(`a`,{href:xt,target:`_blank`,rel:`noreferrer`,className:`btn-secondary`,children:[(0,T.jsx)(ve,{size:18,"aria-hidden":`true`}),`运行构建`]})]}),(0,T.jsxs)(`div`,{className:`mt-4 flex gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs leading-5 text-amber-800`,children:[(0,T.jsx)(He,{size:16,className:`mt-0.5 shrink-0`,"aria-hidden":`true`}),(0,T.jsx)(`span`,{children:"如果下载提示不存在，说明 GitHub Release `latest-apk` 还没生成。先打开 GitHub Actions，手动运行 Build Android APK，成功后这里会下载 `reword-debug.apk`。"})]}),(0,T.jsxs)(`details`,{className:`mt-3 rounded-lg border border-sky-100 bg-[#f8fbff] px-3 py-2 text-sm text-slate-700`,children:[(0,T.jsx)(`summary`,{className:`cursor-pointer font-semibold text-ink`,children:`安装说明`}),(0,T.jsxs)(`ol`,{className:`mt-3 list-decimal space-y-1.5 pl-5 text-xs leading-5 text-slate-600`,children:[(0,T.jsx)(`li`,{children:`点击下载 APK。`}),(0,T.jsx)(`li`,{children:`下载后点击安装。`}),(0,T.jsx)(`li`,{children:`如果提示禁止安装未知应用，进入系统设置。`}),(0,T.jsx)(`li`,{children:`允许当前浏览器或文件管理器安装未知应用。`}),(0,T.jsx)(`li`,{children:`返回继续安装。`}),(0,T.jsx)(`li`,{children:`桌面出现考研单词图标后打开 App。`}),(0,T.jsx)(`li`,{children:`App 会加载在线最新版网页，普通页面更新不需要重新安装 APK。`})]})]})]})}function Ct(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function wt(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})}var Tt=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),Et=class extends Error{constructor(e,t=`FunctionsError`,n){super(e),this.name=t,this.context=n}toJSON(){return{name:this.name,message:this.message,context:this.context}}},Dt=class extends Et{constructor(e){super(`Failed to send a request to the Edge Function`,`FunctionsFetchError`,e)}},Ot=class extends Et{constructor(e){super(`Relay Error invoking the Edge Function`,`FunctionsRelayError`,e)}},kt=class extends Et{constructor(e){super(`Edge Function returned a non-2xx status code`,`FunctionsHttpError`,e)}},E;(function(e){e.Any=`any`,e.ApNortheast1=`ap-northeast-1`,e.ApNortheast2=`ap-northeast-2`,e.ApSouth1=`ap-south-1`,e.ApSoutheast1=`ap-southeast-1`,e.ApSoutheast2=`ap-southeast-2`,e.CaCentral1=`ca-central-1`,e.EuCentral1=`eu-central-1`,e.EuWest1=`eu-west-1`,e.EuWest2=`eu-west-2`,e.EuWest3=`eu-west-3`,e.SaEast1=`sa-east-1`,e.UsEast1=`us-east-1`,e.UsWest1=`us-west-1`,e.UsWest2=`us-west-2`})(E||={});var At=class{constructor(e,{headers:t={},customFetch:n,region:r=E.Any}={}){this.url=e,this.headers=t,this.region=r,this.fetch=Tt(n)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e){return wt(this,arguments,void 0,function*(e,t={}){let n,r;try{let{headers:i,method:a,body:o,signal:s,timeout:c}=t,l={},{region:u}=t;u||=this.region;let d=new URL(`${this.url}/${e}`);u&&u!==`any`&&(l[`x-region`]=u,d.searchParams.set(`forceFunctionRegion`,u));let f;o&&(i&&!Object.prototype.hasOwnProperty.call(i,`Content-Type`)||!i)?typeof Blob<`u`&&o instanceof Blob||o instanceof ArrayBuffer?(l[`Content-Type`]=`application/octet-stream`,f=o):typeof o==`string`?(l[`Content-Type`]=`text/plain`,f=o):typeof FormData<`u`&&o instanceof FormData?f=o:(l[`Content-Type`]=`application/json`,f=JSON.stringify(o)):f=o&&typeof o!=`string`&&!(typeof Blob<`u`&&o instanceof Blob)&&!(o instanceof ArrayBuffer)&&!(typeof FormData<`u`&&o instanceof FormData)?JSON.stringify(o):o;let p=s;c&&(r=new AbortController,n=setTimeout(()=>r.abort(),c),s?(p=r.signal,s.addEventListener(`abort`,()=>r.abort())):p=r.signal);let m=yield this.fetch(d.toString(),{method:a||`POST`,headers:Object.assign(Object.assign(Object.assign({},l),this.headers),i),body:f,signal:p}).catch(e=>{throw new Dt(e)}),h=m.headers.get(`x-relay-error`);if(h&&h===`true`)throw new Ot(m);if(!m.ok)throw new kt(m);let g=(m.headers.get(`Content-Type`)??`text/plain`).split(`;`)[0].trim(),_;return _=g===`application/json`?yield m.json():g===`application/octet-stream`||g===`application/pdf`?yield m.blob():g===`text/event-stream`?m:g===`multipart/form-data`?yield m.formData():yield m.text(),{data:_,error:null,response:m}}catch(e){return{data:null,error:e,response:e instanceof kt||e instanceof Ot?e.context:void 0}}finally{n&&clearTimeout(n)}})}},jt=3,Mt=e=>Math.min(1e3*2**e,3e4),Nt=[520,503],Pt=[`GET`,`HEAD`,`OPTIONS`],Ft=class extends Error{constructor(e){super(e.message),this.name=`PostgrestError`,this.details=e.details,this.hint=e.hint,this.code=e.code}toJSON(){return{name:this.name,message:this.message,details:this.details,hint:this.hint,code:this.code}}};function It(e,t){return new Promise(n=>{if(t?.aborted){n();return}let r=setTimeout(()=>{t?.removeEventListener(`abort`,i),n()},e);function i(){clearTimeout(r),n()}t?.addEventListener(`abort`,i)})}function Lt(e,t,n,r){return!(!r||n>=jt||!Pt.includes(e)||!Nt.includes(t))}var Rt=class{constructor(e){this.shouldThrowOnError=!1,this.retryEnabled=!0,this.method=e.method,this.url=e.url,this.headers=new Headers(e.headers),this.schema=e.schema,this.body=e.body,this.shouldThrowOnError=e.shouldThrowOnError??!1,this.signal=e.signal,this.isMaybeSingle=e.isMaybeSingle??!1,this.shouldStripNulls=e.shouldStripNulls??!1,this.urlLengthLimit=e.urlLengthLimit??8e3,this.retryEnabled=e.retry??!0,e.fetch?this.fetch=e.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}stripNulls(){if(this.headers.get(`Accept`)===`text/csv`)throw Error(`stripNulls() cannot be used with csv()`);return this.shouldStripNulls=!0,this}setHeader(e,t){return this.headers=new Headers(this.headers),this.headers.set(e,t),this}retry(e){return this.retryEnabled=e,this}then(e,t){var n=this;if(this.schema===void 0||([`GET`,`HEAD`].includes(this.method)?this.headers.set(`Accept-Profile`,this.schema):this.headers.set(`Content-Profile`,this.schema)),this.method!==`GET`&&this.method!==`HEAD`&&this.headers.set(`Content-Type`,`application/json`),this.shouldStripNulls){let e=this.headers.get(`Accept`);e===`application/vnd.pgrst.object+json`?this.headers.set(`Accept`,`application/vnd.pgrst.object+json;nulls=stripped`):(!e||e===`application/json`)&&this.headers.set(`Accept`,`application/vnd.pgrst.array+json;nulls=stripped`)}let r=this.fetch,i=(async()=>{let e=0;for(;;){let t=new Headers(n.headers);e>0&&t.set(`X-Retry-Count`,String(e));let i;try{i=await r(n.url.toString(),{method:n.method,headers:t,body:JSON.stringify(n.body,(e,t)=>typeof t==`bigint`?t.toString():t),signal:n.signal})}catch(t){if(t?.name===`AbortError`||t?.code===`ABORT_ERR`||!Pt.includes(n.method))throw t;if(n.retryEnabled&&e<jt){let t=Mt(e);e++,await It(t,n.signal);continue}throw t}if(Lt(n.method,i.status,e,n.retryEnabled)){let t=i.headers?.get(`Retry-After`)??null,r=t===null?Mt(e):Math.max(0,parseInt(t,10)||0)*1e3;await i.text(),e++,await It(r,n.signal);continue}return await n.processResponse(i)}})();return this.shouldThrowOnError||(i=i.catch(e=>{let t=``,n=``,r=``,i=e?.cause;if(i){let n=i?.message??``,r=i?.code??``;t=`${e?.name??`FetchError`}: ${e?.message}`,t+=`\n\nCaused by: ${i?.name??`Error`}: ${n}`,r&&(t+=` (${r})`),i?.stack&&(t+=`\n${i.stack}`)}else t=e?.stack??``;let a=this.url.toString().length;return e?.name===`AbortError`||e?.code===`ABORT_ERR`?(r=``,n=`Request was aborted (timeout or manual cancellation)`,a>this.urlLengthLimit&&(n+=`. Note: Your request URL is ${a} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)):(i?.name===`HeadersOverflowError`||i?.code===`UND_ERR_HEADERS_OVERFLOW`)&&(r=``,n=`HTTP headers exceeded server limits (typically 16KB)`,a>this.urlLengthLimit&&(n+=`. Your request URL is ${a} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),{success:!1,error:{message:`${e?.name??`FetchError`}: ${e?.message}`,details:t,hint:n,code:r},data:null,count:null,status:0,statusText:``}})),i.then(e,t)}async processResponse(e){var t=this;let n=null,r=null,i=null,a=e.status,o=e.statusText;if(e.ok){if(t.method!==`HEAD`){let n=await e.text();n===``||(r=t.headers.get(`Accept`)===`text/csv`||t.headers.get(`Accept`)&&t.headers.get(`Accept`)?.includes(`application/vnd.pgrst.plan+text`)?n:JSON.parse(n))}let s=t.headers.get(`Prefer`)?.match(/count=(exact|planned|estimated)/),c=e.headers.get(`content-range`)?.split(`/`);s&&c&&c.length>1&&(i=parseInt(c[1])),t.isMaybeSingle&&Array.isArray(r)&&(r.length>1?(n={code:`PGRST116`,details:`Results contain ${r.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:`JSON object requested, multiple (or no) rows returned`},r=null,i=null,a=406,o=`Not Acceptable`):r=r.length===1?r[0]:null)}else{let i=await e.text();try{n=JSON.parse(i),Array.isArray(n)&&e.status===404&&(r=[],n=null,a=200,o=`OK`)}catch{e.status===404&&i===``?(a=204,o=`No Content`):n={message:i}}if(n&&t.shouldThrowOnError)throw new Ft(n)}return{success:n===null,error:n,data:r,count:i,status:a,statusText:o}}returns(){return this}overrideTypes(){return this}},zt=class extends Rt{select(e){let t=!1,n=(e??`*`).split(``).map(e=>/\s/.test(e)&&!t?``:(e===`"`&&(t=!t),e)).join(``);return this.url.searchParams.set(`select`,n),this.headers.append(`Prefer`,`return=representation`),this}order(e,{ascending:t=!0,nullsFirst:n,foreignTable:r,referencedTable:i=r}={}){let a=i?`${i}.order`:`order`,o=this.url.searchParams.get(a);return this.url.searchParams.set(a,`${o?`${o},`:``}${e}.${t?`asc`:`desc`}${n===void 0?``:n?`.nullsfirst`:`.nullslast`}`),this}limit(e,{foreignTable:t,referencedTable:n=t}={}){let r=n===void 0?`limit`:`${n}.limit`;return this.url.searchParams.set(r,`${e}`),this}range(e,t,{foreignTable:n,referencedTable:r=n}={}){let i=r===void 0?`offset`:`${r}.offset`,a=r===void 0?`limit`:`${r}.limit`;return this.url.searchParams.set(i,`${e}`),this.url.searchParams.set(a,`${t-e+1}`),this}abortSignal(e){return this.signal=e,this}single(){return this.headers.set(`Accept`,`application/vnd.pgrst.object+json`),this}maybeSingle(){return this.isMaybeSingle=!0,this}csv(){return this.headers.set(`Accept`,`text/csv`),this}geojson(){return this.headers.set(`Accept`,`application/geo+json`),this}explain({analyze:e=!1,verbose:t=!1,settings:n=!1,buffers:r=!1,wal:i=!1,format:a=`text`}={}){let o=[e?`analyze`:null,t?`verbose`:null,n?`settings`:null,r?`buffers`:null,i?`wal`:null].filter(Boolean).join(`|`),s=this.headers.get(`Accept`)??`application/json`;return this.headers.set(`Accept`,`application/vnd.pgrst.plan+${a}; for="${s}"; options=${o};`),this}rollback(){return this.headers.append(`Prefer`,`tx=rollback`),this}returns(){return this}maxAffected(e){return this.headers.append(`Prefer`,`handling=strict`),this.headers.append(`Prefer`,`max-affected=${e}`),this}},Bt=RegExp(`[,()]`),Vt=class extends zt{eq(e,t){return this.url.searchParams.append(e,`eq.${t}`),this}neq(e,t){return this.url.searchParams.append(e,`neq.${t}`),this}gt(e,t){return this.url.searchParams.append(e,`gt.${t}`),this}gte(e,t){return this.url.searchParams.append(e,`gte.${t}`),this}lt(e,t){return this.url.searchParams.append(e,`lt.${t}`),this}lte(e,t){return this.url.searchParams.append(e,`lte.${t}`),this}like(e,t){return this.url.searchParams.append(e,`like.${t}`),this}likeAllOf(e,t){return this.url.searchParams.append(e,`like(all).{${t.join(`,`)}}`),this}likeAnyOf(e,t){return this.url.searchParams.append(e,`like(any).{${t.join(`,`)}}`),this}ilike(e,t){return this.url.searchParams.append(e,`ilike.${t}`),this}ilikeAllOf(e,t){return this.url.searchParams.append(e,`ilike(all).{${t.join(`,`)}}`),this}ilikeAnyOf(e,t){return this.url.searchParams.append(e,`ilike(any).{${t.join(`,`)}}`),this}regexMatch(e,t){return this.url.searchParams.append(e,`match.${t}`),this}regexIMatch(e,t){return this.url.searchParams.append(e,`imatch.${t}`),this}is(e,t){return this.url.searchParams.append(e,`is.${t}`),this}isDistinct(e,t){return this.url.searchParams.append(e,`isdistinct.${t}`),this}in(e,t){let n=Array.from(new Set(t)).map(e=>typeof e==`string`&&Bt.test(e)?`"${e}"`:`${e}`).join(`,`);return this.url.searchParams.append(e,`in.(${n})`),this}notIn(e,t){let n=Array.from(new Set(t)).map(e=>typeof e==`string`&&Bt.test(e)?`"${e}"`:`${e}`).join(`,`);return this.url.searchParams.append(e,`not.in.(${n})`),this}contains(e,t){return typeof t==`string`?this.url.searchParams.append(e,`cs.${t}`):Array.isArray(t)?this.url.searchParams.append(e,`cs.{${t.join(`,`)}}`):this.url.searchParams.append(e,`cs.${JSON.stringify(t)}`),this}containedBy(e,t){return typeof t==`string`?this.url.searchParams.append(e,`cd.${t}`):Array.isArray(t)?this.url.searchParams.append(e,`cd.{${t.join(`,`)}}`):this.url.searchParams.append(e,`cd.${JSON.stringify(t)}`),this}rangeGt(e,t){return this.url.searchParams.append(e,`sr.${t}`),this}rangeGte(e,t){return this.url.searchParams.append(e,`nxl.${t}`),this}rangeLt(e,t){return this.url.searchParams.append(e,`sl.${t}`),this}rangeLte(e,t){return this.url.searchParams.append(e,`nxr.${t}`),this}rangeAdjacent(e,t){return this.url.searchParams.append(e,`adj.${t}`),this}overlaps(e,t){return typeof t==`string`?this.url.searchParams.append(e,`ov.${t}`):this.url.searchParams.append(e,`ov.{${t.join(`,`)}}`),this}textSearch(e,t,{config:n,type:r}={}){let i=``;r===`plain`?i=`pl`:r===`phrase`?i=`ph`:r===`websearch`&&(i=`w`);let a=n===void 0?``:`(${n})`;return this.url.searchParams.append(e,`${i}fts${a}.${t}`),this}match(e){return Object.entries(e).filter(([e,t])=>t!==void 0).forEach(([e,t])=>{this.url.searchParams.append(e,`eq.${t}`)}),this}not(e,t,n){return this.url.searchParams.append(e,`not.${t}.${n}`),this}or(e,{foreignTable:t,referencedTable:n=t}={}){let r=n?`${n}.or`:`or`;return this.url.searchParams.append(r,`(${e})`),this}filter(e,t,n){return this.url.searchParams.append(e,`${t}.${n}`),this}},Ht=class{constructor(e,{headers:t={},schema:n,fetch:r,urlLengthLimit:i=8e3,retry:a}){this.url=e,this.headers=new Headers(t),this.schema=n,this.fetch=r,this.urlLengthLimit=i,this.retry=a}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(e,t){let{head:n=!1,count:r}=t??{},i=n?`HEAD`:`GET`,a=!1,o=(e??`*`).split(``).map(e=>/\s/.test(e)&&!a?``:(e===`"`&&(a=!a),e)).join(``),{url:s,headers:c}=this.cloneRequestState();return s.searchParams.set(`select`,o),r&&c.append(`Prefer`,`count=${r}`),new Vt({method:i,url:s,headers:c,schema:this.schema,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}insert(e,{count:t,defaultToNull:n=!0}={}){let{url:r,headers:i}=this.cloneRequestState();if(t&&i.append(`Prefer`,`count=${t}`),n||i.append(`Prefer`,`missing=default`),Array.isArray(e)){let t=e.reduce((e,t)=>e.concat(Object.keys(t)),[]);if(t.length>0){let e=[...new Set(t)].map(e=>`"${e}"`);r.searchParams.set(`columns`,e.join(`,`))}}return new Vt({method:`POST`,url:r,headers:i,schema:this.schema,body:e,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}upsert(e,{onConflict:t,ignoreDuplicates:n=!1,count:r,defaultToNull:i=!0}={}){let{url:a,headers:o}=this.cloneRequestState();if(o.append(`Prefer`,`resolution=${n?`ignore`:`merge`}-duplicates`),t!==void 0&&a.searchParams.set(`on_conflict`,t),r&&o.append(`Prefer`,`count=${r}`),i||o.append(`Prefer`,`missing=default`),Array.isArray(e)){let t=e.reduce((e,t)=>e.concat(Object.keys(t)),[]);if(t.length>0){let e=[...new Set(t)].map(e=>`"${e}"`);a.searchParams.set(`columns`,e.join(`,`))}}return new Vt({method:`POST`,url:a,headers:o,schema:this.schema,body:e,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}update(e,{count:t}={}){let{url:n,headers:r}=this.cloneRequestState();return t&&r.append(`Prefer`,`count=${t}`),new Vt({method:`PATCH`,url:n,headers:r,schema:this.schema,body:e,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}delete({count:e}={}){let{url:t,headers:n}=this.cloneRequestState();return e&&n.append(`Prefer`,`count=${e}`),new Vt({method:`DELETE`,url:t,headers:n,schema:this.schema,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};function Ut(e){"@babel/helpers - typeof";return Ut=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Ut(e)}function Wt(e,t){if(Ut(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(Ut(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Gt(e){var t=Wt(e,`string`);return Ut(t)==`symbol`?t:t+``}function Kt(e,t,n){return(t=Gt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Jt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?qt(Object(n),!0).forEach(function(t){Kt(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qt(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Yt=class e{constructor(e,{headers:t={},schema:n,fetch:r,timeout:i,urlLengthLimit:a=8e3,retry:o}={}){this.url=e,this.headers=new Headers(t),this.schemaName=n,this.urlLengthLimit=a;let s=r??globalThis.fetch;i!==void 0&&i>0?this.fetch=(e,t)=>{let n=new AbortController,r=setTimeout(()=>n.abort(),i),a=t?.signal;if(a){if(a.aborted)return clearTimeout(r),s(e,t);let i=()=>{clearTimeout(r),n.abort()};return a.addEventListener(`abort`,i,{once:!0}),s(e,Jt(Jt({},t),{},{signal:n.signal})).finally(()=>{clearTimeout(r),a.removeEventListener(`abort`,i)})}return s(e,Jt(Jt({},t),{},{signal:n.signal})).finally(()=>clearTimeout(r))}:this.fetch=s,this.retry=o}from(e){if(!e||typeof e!=`string`||e.trim()===``)throw Error(`Invalid relation name: relation must be a non-empty string.`);return new Ht(new URL(`${this.url}/${e}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}schema(t){return new e(this.url,{headers:this.headers,schema:t,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}rpc(e,t={},{head:n=!1,get:r=!1,count:i}={}){let a,o=new URL(`${this.url}/rpc/${e}`),s,c=e=>typeof e==`object`&&!!e&&(!Array.isArray(e)||e.some(c)),l=n&&Object.values(t).some(c);l?(a=`POST`,s=t):n||r?(a=n?`HEAD`:`GET`,Object.entries(t).filter(([e,t])=>t!==void 0).map(([e,t])=>[e,Array.isArray(t)?`{${t.join(`,`)}}`:`${t}`]).forEach(([e,t])=>{o.searchParams.append(e,t)})):(a=`POST`,s=t);let u=new Headers(this.headers);return l?u.set(`Prefer`,i?`count=${i},return=minimal`:`return=minimal`):i&&u.set(`Prefer`,`count=${i}`),new Vt({method:a,url:o,headers:u,schema:this.schemaName,body:s,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}},Xt=class{constructor(){}static detectEnvironment(){if(typeof WebSocket<`u`)return{type:`native`,wsConstructor:WebSocket};let e=globalThis;if(typeof globalThis<`u`&&e.WebSocket!==void 0)return{type:`native`,wsConstructor:e.WebSocket};let t=typeof global<`u`?global:void 0;if(t&&t.WebSocket!==void 0)return{type:`native`,wsConstructor:t.WebSocket};if(typeof globalThis<`u`&&e.WebSocketPair!==void 0&&globalThis.WebSocket===void 0)return{type:`cloudflare`,error:`Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.`,workaround:`Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime.`};if(typeof globalThis<`u`&&e.EdgeRuntime||typeof navigator<`u`&&navigator.userAgent?.includes(`Vercel-Edge`))return{type:`unsupported`,error:`Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.`,workaround:`Use serverless functions or a different deployment target for WebSocket functionality.`};let n=globalThis.process;if(n){let e=n.versions;if(e&&e.node){let t=e.node,n=parseInt(t.replace(/^v/,``).split(`.`)[0]);return n>=22?globalThis.WebSocket===void 0?{type:`unsupported`,error:`Node.js ${n} detected but native WebSocket not found.`,workaround:`Provide a WebSocket implementation via the transport option.`}:{type:`native`,wsConstructor:globalThis.WebSocket}:{type:`unsupported`,error:`Node.js ${n} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}}return{type:`unsupported`,error:`Unknown JavaScript runtime without WebSocket support.`,workaround:`Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation.`}}static getWebSocketConstructor(){let e=this.detectEnvironment();if(e.wsConstructor)return e.wsConstructor;let t=e.error||`WebSocket not supported in this environment.`;throw e.workaround&&(t+=`\n\nSuggested solution: ${e.workaround}`),Error(t)}static isWebSocketSupported(){try{let e=this.detectEnvironment();return e.type===`native`||e.type===`ws`}catch{return!1}}},Zt=`realtime-js/2.106.2`,Qt=`1.0.0`,$t=`2.0.0`,en=$t,D=1e4,tn={closed:`closed`,errored:`errored`,joined:`joined`,joining:`joining`,leaving:`leaving`},nn={close:`phx_close`,error:`phx_error`,join:`phx_join`,reply:`phx_reply`,leave:`phx_leave`,access_token:`access_token`},rn={connecting:`connecting`,open:`open`,closing:`closing`,closed:`closed`},an=class{constructor(e){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT=`broadcast`,this.allowedMetadataKeys=[],this.allowedMetadataKeys=e??[]}encode(e,t){if(e.event===this.BROADCAST_EVENT&&!(e.payload instanceof ArrayBuffer)&&typeof e.payload.event==`string`)return t(this._binaryEncodeUserBroadcastPush(e));let n=[e.join_ref,e.ref,e.topic,e.event,e.payload];return t(JSON.stringify(n))}_binaryEncodeUserBroadcastPush(e){return this._isArrayBuffer(e.payload?.payload)?this._encodeBinaryUserBroadcastPush(e):this._encodeJsonUserBroadcastPush(e)}_encodeBinaryUserBroadcastPush(e){let t=e.payload?.payload??new ArrayBuffer(0);return this._encodeUserBroadcastPush(e,this.BINARY_ENCODING,t)}_encodeJsonUserBroadcastPush(e){let t=e.payload?.payload??{},n=new TextEncoder().encode(JSON.stringify(t)).buffer;return this._encodeUserBroadcastPush(e,this.JSON_ENCODING,n)}_encodeUserBroadcastPush(e,t,n){let r=e.topic,i=e.ref??``,a=e.join_ref??``,o=e.payload.event,s=this.allowedMetadataKeys?this._pick(e.payload,this.allowedMetadataKeys):{},c=Object.keys(s).length===0?``:JSON.stringify(s);if(a.length>255)throw Error(`joinRef length ${a.length} exceeds maximum of 255`);if(i.length>255)throw Error(`ref length ${i.length} exceeds maximum of 255`);if(r.length>255)throw Error(`topic length ${r.length} exceeds maximum of 255`);if(o.length>255)throw Error(`userEvent length ${o.length} exceeds maximum of 255`);if(c.length>255)throw Error(`metadata length ${c.length} exceeds maximum of 255`);let l=this.USER_BROADCAST_PUSH_META_LENGTH+a.length+i.length+r.length+o.length+c.length,u=new ArrayBuffer(this.HEADER_LENGTH+l),d=new DataView(u),f=0;d.setUint8(f++,this.KINDS.userBroadcastPush),d.setUint8(f++,a.length),d.setUint8(f++,i.length),d.setUint8(f++,r.length),d.setUint8(f++,o.length),d.setUint8(f++,c.length),d.setUint8(f++,t),Array.from(a,e=>d.setUint8(f++,e.charCodeAt(0))),Array.from(i,e=>d.setUint8(f++,e.charCodeAt(0))),Array.from(r,e=>d.setUint8(f++,e.charCodeAt(0))),Array.from(o,e=>d.setUint8(f++,e.charCodeAt(0))),Array.from(c,e=>d.setUint8(f++,e.charCodeAt(0)));var p=new Uint8Array(u.byteLength+n.byteLength);return p.set(new Uint8Array(u),0),p.set(new Uint8Array(n),u.byteLength),p.buffer}decode(e,t){if(this._isArrayBuffer(e))return t(this._binaryDecode(e));if(typeof e==`string`){let[n,r,i,a,o]=JSON.parse(e);return t({join_ref:n,ref:r,topic:i,event:a,payload:o})}return t({})}_binaryDecode(e){let t=new DataView(e),n=t.getUint8(0),r=new TextDecoder;switch(n){case this.KINDS.userBroadcast:return this._decodeUserBroadcast(e,t,r)}}_decodeUserBroadcast(e,t,n){let r=t.getUint8(1),i=t.getUint8(2),a=t.getUint8(3),o=t.getUint8(4),s=this.HEADER_LENGTH+4,c=n.decode(e.slice(s,s+r));s+=r;let l=n.decode(e.slice(s,s+i));s+=i;let u=n.decode(e.slice(s,s+a));s+=a;let d=e.slice(s,e.byteLength),f=o===this.JSON_ENCODING?JSON.parse(n.decode(d)):d,p={type:this.BROADCAST_EVENT,event:l,payload:f};return a>0&&(p.meta=JSON.parse(u)),{join_ref:null,ref:null,topic:c,event:this.BROADCAST_EVENT,payload:p}}_isArrayBuffer(e){return e instanceof ArrayBuffer||e?.constructor?.name===`ArrayBuffer`}_pick(e,t){return!e||typeof e!=`object`?{}:Object.fromEntries(Object.entries(e).filter(([e])=>t.includes(e)))}},O;(function(e){e.abstime=`abstime`,e.bool=`bool`,e.date=`date`,e.daterange=`daterange`,e.float4=`float4`,e.float8=`float8`,e.int2=`int2`,e.int4=`int4`,e.int4range=`int4range`,e.int8=`int8`,e.int8range=`int8range`,e.json=`json`,e.jsonb=`jsonb`,e.money=`money`,e.numeric=`numeric`,e.oid=`oid`,e.reltime=`reltime`,e.text=`text`,e.time=`time`,e.timestamp=`timestamp`,e.timestamptz=`timestamptz`,e.timetz=`timetz`,e.tsrange=`tsrange`,e.tstzrange=`tstzrange`})(O||={});var on=(e,t,n={})=>{let r=n.skipTypes??[];return t?Object.keys(t).reduce((n,i)=>(n[i]=sn(i,e,t,r),n),{}):{}},sn=(e,t,n,r)=>{let i=t.find(t=>t.name===e)?.type,a=n[e];return i&&!r.includes(i)?cn(i,a):ln(a)},cn=(e,t)=>{if(e.charAt(0)===`_`)return pn(t,e.slice(1,e.length));switch(e){case O.bool:return un(t);case O.float4:case O.float8:case O.int2:case O.int4:case O.int8:case O.numeric:case O.oid:return dn(t);case O.json:case O.jsonb:return fn(t);case O.timestamp:return mn(t);case O.abstime:case O.date:case O.daterange:case O.int4range:case O.int8range:case O.money:case O.reltime:case O.text:case O.time:case O.timestamptz:case O.timetz:case O.tsrange:case O.tstzrange:return ln(t);default:return ln(t)}},ln=e=>e,un=e=>{switch(e){case`t`:return!0;case`f`:return!1;default:return e}},dn=e=>{if(typeof e==`string`){let t=parseFloat(e);if(!Number.isNaN(t))return t}return e},fn=e=>{if(typeof e==`string`)try{return JSON.parse(e)}catch{return e}return e},pn=(e,t)=>{if(typeof e!=`string`)return e;let n=e.length-1,r=e[n];if(e[0]===`{`&&r===`}`){let r,i=e.slice(1,n);try{r=JSON.parse(`[`+i+`]`)}catch{r=i?i.split(`,`):[]}return r.map(e=>cn(t,e))}return e},mn=e=>typeof e==`string`?e.replace(` `,`T`):e,hn=e=>{let t=new URL(e);return t.protocol=t.protocol.replace(/^ws/i,`http`),t.pathname=t.pathname.replace(/\/+$/,``).replace(/\/socket\/websocket$/i,``).replace(/\/socket$/i,``).replace(/\/websocket$/i,``),t.pathname===``||t.pathname===`/`?t.pathname=`/api/broadcast`:t.pathname+=`/api/broadcast`,t.href},gn=e=>typeof e==`function`?e:function(){return e},_n=typeof self<`u`?self:null,vn=typeof window<`u`?window:null,yn=_n||vn||globalThis,bn=`2.0.0`,xn=1e4,Sn=1e3,Cn={connecting:0,open:1,closing:2,closed:3},wn={closed:`closed`,errored:`errored`,joined:`joined`,joining:`joining`,leaving:`leaving`},Tn={close:`phx_close`,error:`phx_error`,join:`phx_join`,reply:`phx_reply`,leave:`phx_leave`},En={longpoll:`longpoll`,websocket:`websocket`},Dn={complete:4},On=`base64url.bearer.phx.`,kn=class{constructor(e,t,n,r){this.channel=e,this.event=t,this.payload=n||function(){return{}},this.receivedResp=null,this.timeout=r,this.timeoutTimer=null,this.recHooks=[],this.sent=!1,this.ref=void 0}resend(e){this.timeout=e,this.reset(),this.send()}send(){this.hasReceived(`timeout`)||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}receive(e,t){return this.hasReceived(e)&&t(this.receivedResp.response),this.recHooks.push({status:e,callback:t}),this}reset(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}destroy(){this.cancelRefEvent(),this.cancelTimeout()}matchReceive({status:e,response:t,_ref:n}){this.recHooks.filter(t=>t.status===e).forEach(e=>e.callback(t))}cancelRefEvent(){this.refEvent&&this.channel.off(this.refEvent)}cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}startTimeout(){this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,e=>{this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp=e,this.matchReceive(e)}),this.timeoutTimer=setTimeout(()=>{this.trigger(`timeout`,{})},this.timeout)}hasReceived(e){return this.receivedResp&&this.receivedResp.status===e}trigger(e,t){this.channel.trigger(this.refEvent,{status:e,response:t})}},An=class{constructor(e,t){this.callback=e,this.timerCalc=t,this.timer=void 0,this.tries=0}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries+=1,this.callback()},this.timerCalc(this.tries+1))}},jn=class{constructor(e,t,n){this.state=wn.closed,this.topic=e,this.params=gn(t||{}),this.socket=n,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new kn(this,Tn.join,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new An(()=>{this.socket.isConnected()&&this.rejoin()},this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())),this.stateChangeRefs.push(this.socket.onOpen(()=>{this.rejoinTimer.reset(),this.isErrored()&&this.rejoin()})),this.joinPush.receive(`ok`,()=>{this.state=wn.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(e=>e.send()),this.pushBuffer=[]}),this.joinPush.receive(`error`,e=>{this.state=wn.errored,this.socket.hasLogger()&&this.socket.log(`channel`,`error ${this.topic}`,e),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.onClose(()=>{this.rejoinTimer.reset(),this.socket.hasLogger()&&this.socket.log(`channel`,`close ${this.topic}`),this.state=wn.closed,this.socket.remove(this)}),this.onError(e=>{this.socket.hasLogger()&&this.socket.log(`channel`,`error ${this.topic}`,e),this.isJoining()&&this.joinPush.reset(),this.state=wn.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.joinPush.receive(`timeout`,()=>{this.socket.hasLogger()&&this.socket.log(`channel`,`timeout ${this.topic}`,this.joinPush.timeout),new kn(this,Tn.leave,gn({}),this.timeout).send(),this.state=wn.errored,this.joinPush.reset(),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.on(Tn.reply,(e,t)=>{this.trigger(this.replyEventName(t),e)})}join(e=this.timeout){if(this.joinedOnce)throw Error(`tried to join multiple times. 'join' can only be called a single time per channel instance`);return this.timeout=e,this.joinedOnce=!0,this.rejoin(),this.joinPush}teardown(){this.pushBuffer.forEach(e=>e.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=wn.closed,this.bindings=[]}onClose(e){this.on(Tn.close,e)}onError(e){return this.on(Tn.error,t=>e(t))}on(e,t){let n=this.bindingRef++;return this.bindings.push({event:e,ref:n,callback:t}),n}off(e,t){this.bindings=this.bindings.filter(n=>!(n.event===e&&(t===void 0||t===n.ref)))}canPush(){return this.socket.isConnected()&&this.isJoined()}push(e,t,n=this.timeout){if(t||={},!this.joinedOnce)throw Error(`tried to push '${e}' to '${this.topic}' before joining. Use channel.join() before pushing events`);let r=new kn(this,e,function(){return t},n);return this.canPush()?r.send():(r.startTimeout(),this.pushBuffer.push(r)),r}leave(e=this.timeout){this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=wn.leaving;let t=()=>{this.socket.hasLogger()&&this.socket.log(`channel`,`leave ${this.topic}`),this.trigger(Tn.close,`leave`)},n=new kn(this,Tn.leave,gn({}),e);return n.receive(`ok`,()=>t()).receive(`timeout`,()=>t()),n.send(),this.canPush()||n.trigger(`ok`,{}),n}onMessage(e,t,n){return t}filterBindings(e,t,n){return!0}isMember(e,t,n,r){return this.topic===e?r&&r!==this.joinRef()?(this.socket.hasLogger()&&this.socket.log(`channel`,`dropping outdated message`,{topic:e,event:t,payload:n,joinRef:r}),!1):!0:!1}joinRef(){return this.joinPush.ref}rejoin(e=this.timeout){this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=wn.joining,this.joinPush.resend(e))}trigger(e,t,n,r){let i=this.onMessage(e,t,n,r);if(t&&!i)throw Error(`channel onMessage callbacks must return the payload, modified or unmodified`);let a=this.bindings.filter(r=>r.event===e&&this.filterBindings(r,t,n));for(let e=0;e<a.length;e++)a[e].callback(i,n,r||this.joinRef())}replyEventName(e){return`chan_reply_${e}`}isClosed(){return this.state===wn.closed}isErrored(){return this.state===wn.errored}isJoined(){return this.state===wn.joined}isJoining(){return this.state===wn.joining}isLeaving(){return this.state===wn.leaving}},Mn=class{static request(e,t,n,r,i,a,o){if(yn.XDomainRequest){let n=new yn.XDomainRequest;return this.xdomainRequest(n,e,t,r,i,a,o)}else if(yn.XMLHttpRequest){let s=new yn.XMLHttpRequest;return this.xhrRequest(s,e,t,n,r,i,a,o)}else if(yn.fetch&&yn.AbortController)return this.fetchRequest(e,t,n,r,i,a,o);else throw Error(`No suitable XMLHttpRequest implementation found`)}static fetchRequest(e,t,n,r,i,a,o){let s={method:e,headers:n,body:r},c=null;return i&&(c=new AbortController,setTimeout(()=>c.abort(),i),s.signal=c.signal),yn.fetch(t,s).then(e=>e.text()).then(e=>this.parseJSON(e)).then(e=>o&&o(e)).catch(e=>{e.name===`AbortError`&&a?a():o&&o(null)}),c}static xdomainRequest(e,t,n,r,i,a,o){return e.timeout=i,e.open(t,n),e.onload=()=>{let t=this.parseJSON(e.responseText);o&&o(t)},a&&(e.ontimeout=a),e.onprogress=()=>{},e.send(r),e}static xhrRequest(e,t,n,r,i,a,o,s){e.open(t,n,!0),e.timeout=a;for(let[t,n]of Object.entries(r))e.setRequestHeader(t,n);return e.onerror=()=>s&&s(null),e.onreadystatechange=()=>{e.readyState===Dn.complete&&s&&s(this.parseJSON(e.responseText))},o&&(e.ontimeout=o),e.send(i),e}static parseJSON(e){if(!e||e===``)return null;try{return JSON.parse(e)}catch{return console&&console.log(`failed to parse JSON response`,e),null}}static serialize(e,t){let n=[];for(var r in e){if(!Object.prototype.hasOwnProperty.call(e,r))continue;let i=t?`${t}[${r}]`:r,a=e[r];typeof a==`object`?n.push(this.serialize(a,i)):n.push(encodeURIComponent(i)+`=`+encodeURIComponent(a))}return n.join(`&`)}static appendParams(e,t){return Object.keys(t).length===0?e:`${e}${e.match(/\?/)?`&`:`?`}${this.serialize(t)}`}},Nn=e=>{let t=``,n=new Uint8Array(e),r=n.byteLength;for(let e=0;e<r;e++)t+=String.fromCharCode(n[e]);return btoa(t)},Pn=class{constructor(e,t){t&&t.length===2&&t[1].startsWith(On)&&(this.authToken=atob(t[1].slice(On.length))),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.reqs=new Set,this.awaitingBatchAck=!1,this.currentBatch=null,this.currentBatchTimer=null,this.batchBuffer=[],this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(e),this.readyState=Cn.connecting,setTimeout(()=>this.poll(),0)}normalizeEndpoint(e){return e.replace(`ws://`,`http://`).replace(`wss://`,`https://`).replace(RegExp(`(.*)/`+En.websocket),`$1/`+En.longpoll)}endpointURL(){return Mn.appendParams(this.pollEndpoint,{token:this.token})}closeAndRetry(e,t,n){this.close(e,t,n),this.readyState=Cn.connecting}ontimeout(){this.onerror(`timeout`),this.closeAndRetry(1005,`timeout`,!1)}isActive(){return this.readyState===Cn.open||this.readyState===Cn.connecting}poll(){let e={Accept:`application/json`};this.authToken&&(e[`X-Phoenix-AuthToken`]=this.authToken),this.ajax(`GET`,e,null,()=>this.ontimeout(),e=>{if(e){var{status:t,token:n,messages:r}=e;if(t===410&&this.token!==null){this.onerror(410),this.closeAndRetry(3410,`session_gone`,!1);return}this.token=n}else t=0;switch(t){case 200:r.forEach(e=>{setTimeout(()=>this.onmessage({data:e}),0)}),this.poll();break;case 204:this.poll();break;case 410:this.readyState=Cn.open,this.onopen({}),this.poll();break;case 403:this.onerror(403),this.close(1008,`forbidden`,!1);break;case 0:case 500:this.onerror(500),this.closeAndRetry(1011,`internal server error`,500);break;default:throw Error(`unhandled poll status ${t}`)}})}send(e){typeof e!=`string`&&(e=Nn(e)),this.currentBatch?this.currentBatch.push(e):this.awaitingBatchAck?this.batchBuffer.push(e):(this.currentBatch=[e],this.currentBatchTimer=setTimeout(()=>{this.batchSend(this.currentBatch),this.currentBatch=null},0))}batchSend(e){this.awaitingBatchAck=!0,this.ajax(`POST`,{"Content-Type":`application/x-ndjson`},e.join(`
`),()=>this.onerror(`timeout`),e=>{this.awaitingBatchAck=!1,!e||e.status!==200?(this.onerror(e&&e.status),this.closeAndRetry(1011,`internal server error`,!1)):this.batchBuffer.length>0&&(this.batchSend(this.batchBuffer),this.batchBuffer=[])})}close(e,t,n){for(let e of this.reqs)e.abort();this.readyState=Cn.closed;let r=Object.assign({code:1e3,reason:void 0,wasClean:!0},{code:e,reason:t,wasClean:n});this.batchBuffer=[],clearTimeout(this.currentBatchTimer),this.currentBatchTimer=null,typeof CloseEvent<`u`?this.onclose(new CloseEvent(`close`,r)):this.onclose(r)}ajax(e,t,n,r,i){let a;a=Mn.request(e,this.endpointURL(),t,n,this.timeout,()=>{this.reqs.delete(a),r()},e=>{this.reqs.delete(a),this.isActive()&&i(e)}),this.reqs.add(a)}},Fn=class e{constructor(t,n={}){let r=n.events||{state:`presence_state`,diff:`presence_diff`};this.state={},this.pendingDiffs=[],this.channel=t,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(r.state,t=>{let{onJoin:n,onLeave:r,onSync:i}=this.caller;this.joinRef=this.channel.joinRef(),this.state=e.syncState(this.state,t,n,r),this.pendingDiffs.forEach(t=>{this.state=e.syncDiff(this.state,t,n,r)}),this.pendingDiffs=[],i()}),this.channel.on(r.diff,t=>{let{onJoin:n,onLeave:r,onSync:i}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(t):(this.state=e.syncDiff(this.state,t,n,r),i())})}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}list(t){return e.list(this.state,t)}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}static syncState(e,t,n,r){let i=this.clone(e),a={},o={};return this.map(i,(e,n)=>{t[e]||(o[e]=n)}),this.map(t,(e,t)=>{let n=i[e];if(n){let r=t.metas.map(e=>e.phx_ref),i=n.metas.map(e=>e.phx_ref),s=t.metas.filter(e=>i.indexOf(e.phx_ref)<0),c=n.metas.filter(e=>r.indexOf(e.phx_ref)<0);s.length>0&&(a[e]=t,a[e].metas=s),c.length>0&&(o[e]=this.clone(n),o[e].metas=c)}else a[e]=t}),this.syncDiff(i,{joins:a,leaves:o},n,r)}static syncDiff(e,t,n,r){let{joins:i,leaves:a}=this.clone(t);return n||=function(){},r||=function(){},this.map(i,(t,r)=>{let i=e[t];if(e[t]=this.clone(r),i){let n=e[t].metas.map(e=>e.phx_ref),r=i.metas.filter(e=>n.indexOf(e.phx_ref)<0);e[t].metas.unshift(...r)}n(t,i,r)}),this.map(a,(t,n)=>{let i=e[t];if(!i)return;let a=n.metas.map(e=>e.phx_ref);i.metas=i.metas.filter(e=>a.indexOf(e.phx_ref)<0),r(t,i,n),i.metas.length===0&&delete e[t]}),e}static list(e,t){return t||=function(e,t){return t},this.map(e,(e,n)=>t(e,n))}static map(e,t){return Object.getOwnPropertyNames(e).map(n=>t(n,e[n]))}static clone(e){return JSON.parse(JSON.stringify(e))}},In={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode(e,t){if(e.payload.constructor===ArrayBuffer)return t(this.binaryEncode(e));{let n=[e.join_ref,e.ref,e.topic,e.event,e.payload];return t(JSON.stringify(n))}},decode(e,t){if(e.constructor===ArrayBuffer)return t(this.binaryDecode(e));{let[n,r,i,a,o]=JSON.parse(e);return t({join_ref:n,ref:r,topic:i,event:a,payload:o})}},binaryEncode(e){let{join_ref:t,ref:n,event:r,topic:i,payload:a}=e,o=this.META_LENGTH+t.length+n.length+i.length+r.length,s=new ArrayBuffer(this.HEADER_LENGTH+o),c=new DataView(s),l=0;c.setUint8(l++,this.KINDS.push),c.setUint8(l++,t.length),c.setUint8(l++,n.length),c.setUint8(l++,i.length),c.setUint8(l++,r.length),Array.from(t,e=>c.setUint8(l++,e.charCodeAt(0))),Array.from(n,e=>c.setUint8(l++,e.charCodeAt(0))),Array.from(i,e=>c.setUint8(l++,e.charCodeAt(0))),Array.from(r,e=>c.setUint8(l++,e.charCodeAt(0)));var u=new Uint8Array(s.byteLength+a.byteLength);return u.set(new Uint8Array(s),0),u.set(new Uint8Array(a),s.byteLength),u.buffer},binaryDecode(e){let t=new DataView(e),n=t.getUint8(0),r=new TextDecoder;switch(n){case this.KINDS.push:return this.decodePush(e,t,r);case this.KINDS.reply:return this.decodeReply(e,t,r);case this.KINDS.broadcast:return this.decodeBroadcast(e,t,r)}},decodePush(e,t,n){let r=t.getUint8(1),i=t.getUint8(2),a=t.getUint8(3),o=this.HEADER_LENGTH+this.META_LENGTH-1,s=n.decode(e.slice(o,o+r));o+=r;let c=n.decode(e.slice(o,o+i));o+=i;let l=n.decode(e.slice(o,o+a));return o+=a,{join_ref:s,ref:null,topic:c,event:l,payload:e.slice(o,e.byteLength)}},decodeReply(e,t,n){let r=t.getUint8(1),i=t.getUint8(2),a=t.getUint8(3),o=t.getUint8(4),s=this.HEADER_LENGTH+this.META_LENGTH,c=n.decode(e.slice(s,s+r));s+=r;let l=n.decode(e.slice(s,s+i));s+=i;let u=n.decode(e.slice(s,s+a));s+=a;let d=n.decode(e.slice(s,s+o));s+=o;let f={status:d,response:e.slice(s,e.byteLength)};return{join_ref:c,ref:l,topic:u,event:Tn.reply,payload:f}},decodeBroadcast(e,t,n){let r=t.getUint8(1),i=t.getUint8(2),a=this.HEADER_LENGTH+2,o=n.decode(e.slice(a,a+r));a+=r;let s=n.decode(e.slice(a,a+i));return a+=i,{join_ref:null,ref:null,topic:o,event:s,payload:e.slice(a,e.byteLength)}}},Ln=class{constructor(e,t={}){this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.fallbackRef=null,this.timeout=t.timeout||xn,this.transport=t.transport||yn.WebSocket||Pn,this.conn=void 0,this.primaryPassedHealthCheck=!1,this.longPollFallbackMs=t.longPollFallbackMs,this.fallbackTimer=null;let n=null;try{n=yn&&yn.sessionStorage}catch{}this.sessionStore=t.sessionStorage||n,this.establishedConnections=0,this.defaultEncoder=In.encode.bind(In),this.defaultDecoder=In.decode.bind(In),this.closeWasClean=!0,this.disconnecting=!1,this.binaryType=t.binaryType||`arraybuffer`,this.connectClock=1,this.pageHidden=!1,this.encode=void 0,this.decode=void 0,this.transport===Pn?(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder):(this.encode=t.encode||this.defaultEncoder,this.decode=t.decode||this.defaultDecoder);let r=null;vn&&vn.addEventListener&&(vn.addEventListener(`pagehide`,e=>{this.conn&&(this.disconnect(),r=this.connectClock)}),vn.addEventListener(`pageshow`,e=>{r===this.connectClock&&(r=null,this.connect())}),vn.addEventListener(`visibilitychange`,()=>{document.visibilityState===`hidden`?this.pageHidden=!0:(this.pageHidden=!1,!this.isConnected()&&!this.closeWasClean&&this.teardown(()=>this.connect()))})),this.heartbeatIntervalMs=t.heartbeatIntervalMs||3e4,this.autoSendHeartbeat=t.autoSendHeartbeat??!0,this.heartbeatCallback=t.heartbeatCallback??(()=>{}),this.rejoinAfterMs=e=>t.rejoinAfterMs?t.rejoinAfterMs(e):[1e3,2e3,5e3][e-1]||1e4,this.reconnectAfterMs=e=>t.reconnectAfterMs?t.reconnectAfterMs(e):[10,50,100,150,200,250,500,1e3,2e3][e-1]||5e3,this.logger=t.logger||null,!this.logger&&t.debug&&(this.logger=(e,t,n)=>{console.log(`${e}: ${t}`,n)}),this.longpollerTimeout=t.longpollerTimeout||2e4,this.params=gn(t.params||{}),this.endPoint=`${e}/${En.websocket}`,this.vsn=t.vsn||bn,this.heartbeatTimeoutTimer=null,this.heartbeatTimer=null,this.heartbeatSentAt=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new An(()=>{if(this.pageHidden){this.log(`Not reconnecting as page is hidden!`),this.teardown();return}this.teardown(async()=>{t.beforeReconnect&&await t.beforeReconnect(),this.connect()})},this.reconnectAfterMs),this.authToken=t.authToken}getLongPollTransport(){return Pn}replaceTransport(e){this.connectClock++,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.conn&&=(this.conn.close(),null),this.transport=e}protocol(){return location.protocol.match(/^https/)?`wss`:`ws`}endPointURL(){let e=Mn.appendParams(Mn.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return e.charAt(0)===`/`?e.charAt(1)===`/`?`${this.protocol()}:${e}`:`${this.protocol()}://${location.host}${e}`:e}disconnect(e,t,n){this.connectClock++,this.disconnecting=!0,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.teardown(()=>{this.disconnecting=!1,e&&e()},t,n)}connect(e){e&&(console&&console.log(`passing params to connect is deprecated. Instead pass :params to the Socket constructor`),this.params=gn(e)),!(this.conn&&!this.disconnecting)&&(this.longPollFallbackMs&&this.transport!==Pn?this.connectWithFallback(Pn,this.longPollFallbackMs):this.transportConnect())}log(e,t,n){this.logger&&this.logger(e,t,n)}hasLogger(){return this.logger!==null}onOpen(e){let t=this.makeRef();return this.stateChangeCallbacks.open.push([t,e]),t}onClose(e){let t=this.makeRef();return this.stateChangeCallbacks.close.push([t,e]),t}onError(e){let t=this.makeRef();return this.stateChangeCallbacks.error.push([t,e]),t}onMessage(e){let t=this.makeRef();return this.stateChangeCallbacks.message.push([t,e]),t}onHeartbeat(e){this.heartbeatCallback=e}ping(e){if(!this.isConnected())return!1;let t=this.makeRef(),n=Date.now();this.push({topic:`phoenix`,event:`heartbeat`,payload:{},ref:t});let r=this.onMessage(i=>{i.ref===t&&(this.off([r]),e(Date.now()-n))});return!0}transportName(e){switch(e){case Pn:return`LongPoll`;default:return e.name}}transportConnect(){this.connectClock++,this.closeWasClean=!1;let e;this.authToken&&(e=[`phoenix`,`${On}${btoa(this.authToken).replace(/=/g,``)}`]),this.conn=new this.transport(this.endPointURL(),e),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=()=>this.onConnOpen(),this.conn.onerror=e=>this.onConnError(e),this.conn.onmessage=e=>this.onConnMessage(e),this.conn.onclose=e=>this.onConnClose(e)}getSession(e){return this.sessionStore&&this.sessionStore.getItem(e)}storeSession(e,t){this.sessionStore&&this.sessionStore.setItem(e,t)}connectWithFallback(e,t=2500){clearTimeout(this.fallbackTimer);let n=!1,r=!0,i,a=this.transportName(e),o=t=>{this.log(`transport`,`falling back to ${a}...`,t),this.off([void 0,i]),r=!1,this.replaceTransport(e),this.transportConnect()};if(this.getSession(`phx:fallback:${a}`))return o(`memorized`);this.fallbackTimer=setTimeout(o,t),i=this.onError(e=>{this.log(`transport`,`error`,e),r&&!n&&(clearTimeout(this.fallbackTimer),o(e))}),this.fallbackRef&&this.off([this.fallbackRef]),this.fallbackRef=this.onOpen(()=>{if(n=!0,!r){let t=this.transportName(e);return this.primaryPassedHealthCheck||this.storeSession(`phx:fallback:${t}`,`true`),this.log(`transport`,`established ${t} fallback`)}clearTimeout(this.fallbackTimer),this.fallbackTimer=setTimeout(o,t),this.ping(e=>{this.log(`transport`,`connected to primary after`,e),this.primaryPassedHealthCheck=!0,clearTimeout(this.fallbackTimer)})}),this.transportConnect()}clearHeartbeats(){clearTimeout(this.heartbeatTimer),clearTimeout(this.heartbeatTimeoutTimer)}onConnOpen(){this.hasLogger()&&this.log(`transport`,`connected to ${this.endPointURL()}`),this.closeWasClean=!1,this.disconnecting=!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.autoSendHeartbeat&&this.resetHeartbeat(),this.triggerStateCallbacks(`open`)}heartbeatTimeout(){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.hasLogger()&&this.log(`transport`,`heartbeat timeout. Attempting to re-establish connection`);try{this.heartbeatCallback(`timeout`)}catch(e){this.log(`error`,`error in heartbeat callback`,e)}this.triggerChanError(Error(`heartbeat timeout`)),this.closeWasClean=!1,this.teardown(()=>this.reconnectTimer.scheduleTimeout(),Sn,`heartbeat timeout`)}}resetHeartbeat(){this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,this.clearHeartbeats(),this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}teardown(e,t,n){if(!this.conn)return e&&e();let r=this.conn;this.waitForBufferDone(r,()=>{t?r.close(t,n||``):r.close(),this.waitForSocketClosed(r,()=>{this.conn===r&&(this.conn.onopen=function(){},this.conn.onerror=function(){},this.conn.onmessage=function(){},this.conn.onclose=function(){},this.conn=null),e&&e()})})}waitForBufferDone(e,t,n=1){if(n===5||!e.bufferedAmount){t();return}setTimeout(()=>{this.waitForBufferDone(e,t,n+1)},150*n)}waitForSocketClosed(e,t,n=1){if(n===5||e.readyState===Cn.closed){t();return}setTimeout(()=>{this.waitForSocketClosed(e,t,n+1)},150*n)}onConnClose(e){this.conn&&(this.conn.onclose=()=>{}),this.hasLogger()&&this.log(`transport`,`close`,e),this.triggerChanError(e),this.clearHeartbeats(),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.triggerStateCallbacks(`close`,e)}onConnError(e){this.hasLogger()&&this.log(`transport`,`error`,e);let t=this.transport,n=this.establishedConnections;this.triggerStateCallbacks(`error`,e,t,n),(t===this.transport||n>0)&&this.triggerChanError(e)}triggerChanError(e){this.channels.forEach(t=>{t.isErrored()||t.isLeaving()||t.isClosed()||t.trigger(Tn.error,e)})}connectionState(){switch(this.conn&&this.conn.readyState){case Cn.connecting:return`connecting`;case Cn.open:return`open`;case Cn.closing:return`closing`;default:return`closed`}}isConnected(){return this.connectionState()===`open`}remove(e){this.off(e.stateChangeRefs),this.channels=this.channels.filter(t=>t!==e)}off(e){for(let t in this.stateChangeCallbacks)this.stateChangeCallbacks[t]=this.stateChangeCallbacks[t].filter(([t])=>e.indexOf(t)===-1)}channel(e,t={}){let n=new jn(e,t,this);return this.channels.push(n),n}push(e){if(this.hasLogger()){let{topic:t,event:n,payload:r,ref:i,join_ref:a}=e;this.log(`push`,`${t} ${n} (${a}, ${i})`,r)}this.isConnected()?this.encode(e,e=>this.conn.send(e)):this.sendBuffer.push(()=>this.encode(e,e=>this.conn.send(e)))}makeRef(){let e=this.ref+1;return e===this.ref?this.ref=0:this.ref=e,this.ref.toString()}sendHeartbeat(){if(!this.isConnected()){try{this.heartbeatCallback(`disconnected`)}catch(e){this.log(`error`,`error in heartbeat callback`,e)}return}if(this.pendingHeartbeatRef){this.heartbeatTimeout();return}this.pendingHeartbeatRef=this.makeRef(),this.heartbeatSentAt=Date.now(),this.push({topic:`phoenix`,event:`heartbeat`,payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback(`sent`)}catch(e){this.log(`error`,`error in heartbeat callback`,e)}this.heartbeatTimeoutTimer=setTimeout(()=>this.heartbeatTimeout(),this.heartbeatIntervalMs)}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(e=>e()),this.sendBuffer=[])}onConnMessage(e){this.decode(e.data,e=>{let{topic:t,event:n,payload:r,ref:i,join_ref:a}=e;if(i&&i===this.pendingHeartbeatRef){let e=this.heartbeatSentAt?Date.now()-this.heartbeatSentAt:void 0;this.clearHeartbeats();try{this.heartbeatCallback(r.status===`ok`?`ok`:`error`,e)}catch(e){this.log(`error`,`error in heartbeat callback`,e)}this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.autoSendHeartbeat&&(this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}this.hasLogger()&&this.log(`receive`,`${r.status||``} ${t} ${n} ${i&&`(`+i+`)`||``}`.trim(),r);for(let e=0;e<this.channels.length;e++){let o=this.channels[e];o.isMember(t,n,r,a)&&o.trigger(n,r,i,a)}this.triggerStateCallbacks(`message`,e)})}triggerStateCallbacks(e,...t){try{this.stateChangeCallbacks[e].forEach(([n,r])=>{try{r(...t)}catch(t){this.log(`error`,`error in ${e} callback`,t)}})}catch(t){this.log(`error`,`error triggering ${e} callbacks`,t)}}leaveOpenTopic(e){let t=this.channels.find(t=>t.topic===e&&(t.isJoined()||t.isJoining()));t&&(this.hasLogger()&&this.log(`transport`,`leaving duplicate topic "${e}"`),t.leave())}},Rn=class e{constructor(t,n){let r=Vn(n);this.presence=new Fn(t.getChannel(),r),this.presence.onJoin((n,r,i)=>{let a=e.onJoinPayload(n,r,i);t.getChannel().trigger(`presence`,a)}),this.presence.onLeave((n,r,i)=>{let a=e.onLeavePayload(n,r,i);t.getChannel().trigger(`presence`,a)}),this.presence.onSync(()=>{t.getChannel().trigger(`presence`,{event:`sync`})})}get state(){return e.transformState(this.presence.state)}static transformState(e){return e=Bn(e),Object.getOwnPropertyNames(e).reduce((t,n)=>{let r=e[n];return t[n]=zn(r),t},{})}static onJoinPayload(e,t,n){return{event:`join`,key:e,currentPresences:Hn(t),newPresences:zn(n)}}static onLeavePayload(e,t,n){return{event:`leave`,key:e,currentPresences:Hn(t),leftPresences:zn(n)}}};function zn(e){return e.metas.map(e=>(e.presence_ref=e.phx_ref,delete e.phx_ref,delete e.phx_ref_prev,e))}function Bn(e){return JSON.parse(JSON.stringify(e))}function Vn(e){return e?.events&&{events:e.events}}function Hn(e){return e?.metas?zn(e):[]}var Un;(function(e){e.SYNC=`sync`,e.JOIN=`join`,e.LEAVE=`leave`})(Un||={});var Wn=class{get state(){return this.presenceAdapter.state}constructor(e,t){this.channel=e,this.presenceAdapter=new Rn(this.channel.channelAdapter,t)}};function Gn(e){if(e instanceof Error)return e;if(typeof e==`string`)return Error(e);if(e&&typeof e==`object`){let t=e;if(typeof t.code==`number`){let n=typeof t.reason==`string`&&t.reason?` (${t.reason})`:``;return Error(`socket closed: ${t.code}${n}`,{cause:e})}return Error(`channel error: transport failure`,{cause:e})}return Error(`channel error: connection lost`)}var Kn=class{constructor(e,t,n){let r=qn(n);this.channel=e.getSocket().channel(t,r),this.socket=e}get state(){return this.channel.state}set state(e){this.channel.state=e}get joinedOnce(){return this.channel.joinedOnce}get joinPush(){return this.channel.joinPush}get rejoinTimer(){return this.channel.rejoinTimer}on(e,t){return this.channel.on(e,t)}off(e,t){this.channel.off(e,t)}subscribe(e){return this.channel.join(e)}unsubscribe(e){return this.channel.leave(e)}teardown(){this.channel.teardown()}onClose(e){this.channel.onClose(e)}onError(e){return this.channel.onError(e)}push(e,t,n){let r;try{r=this.channel.push(e,t,n)}catch{throw Error(`tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`)}if(this.channel.pushBuffer.length>100){let e=this.channel.pushBuffer.shift();e.cancelTimeout(),this.socket.log(`channel`,`discarded push due to buffer overflow: ${e.event}`,e.payload())}return r}updateJoinPayload(e){let t=this.channel.joinPush.payload();this.channel.joinPush.payload=()=>Object.assign(Object.assign({},t),e)}canPush(){return this.socket.isConnected()&&this.state===tn.joined}isJoined(){return this.state===tn.joined}isJoining(){return this.state===tn.joining}isClosed(){return this.state===tn.closed}isLeaving(){return this.state===tn.leaving}updateFilterBindings(e){this.channel.filterBindings=e}updatePayloadTransform(e){this.channel.onMessage=e}getChannel(){return this.channel}};function qn(e){return{config:Object.assign({broadcast:{ack:!1,self:!1},presence:{key:``,enabled:!1},private:!1},e.config)}}var Jn;(function(e){e.ALL=`*`,e.INSERT=`INSERT`,e.UPDATE=`UPDATE`,e.DELETE=`DELETE`})(Jn||={});var Yn;(function(e){e.BROADCAST=`broadcast`,e.PRESENCE=`presence`,e.POSTGRES_CHANGES=`postgres_changes`,e.SYSTEM=`system`})(Yn||={});var Xn;(function(e){e.SUBSCRIBED=`SUBSCRIBED`,e.TIMED_OUT=`TIMED_OUT`,e.CLOSED=`CLOSED`,e.CHANNEL_ERROR=`CHANNEL_ERROR`})(Xn||={});var Zn=class e{get state(){return this.channelAdapter.state}set state(e){this.channelAdapter.state=e}get joinedOnce(){return this.channelAdapter.joinedOnce}get timeout(){return this.socket.timeout}get joinPush(){return this.channelAdapter.joinPush}get rejoinTimer(){return this.channelAdapter.rejoinTimer}constructor(e,t={config:{}},n){if(this.topic=e,this.params=t,this.socket=n,this.bindings={},this.subTopic=e.replace(/^realtime:/i,``),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:``,enabled:!1},private:!1},t.config),this.channelAdapter=new Kn(this.socket.socketAdapter,e,this.params),this.presence=new Wn(this),this._onClose(()=>{this.socket._remove(this)}),this._updateFilterTransform(),this.broadcastEndpointURL=hn(this.socket.socketAdapter.endPointURL()),this.private=this.params.config.private||!1,!this.private&&this.params.config?.broadcast?.replay)throw Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`)}subscribe(e,t=this.timeout){if(this.socket.isConnected()||this.socket.connect(),this.channelAdapter.isClosed()){let{config:{broadcast:n,presence:r,private:i}}=this.params,a=this.bindings.postgres_changes?.map(e=>e.filter)??[],o=!!this.bindings[Yn.PRESENCE]&&this.bindings[Yn.PRESENCE].length>0||this.params.config.presence?.enabled===!0,s={},c={broadcast:n,presence:Object.assign(Object.assign({},r),{enabled:o}),postgres_changes:a,private:i};this.socket.accessTokenValue&&(s.access_token=this.socket.accessTokenValue),this._onError(t=>{e?.(Xn.CHANNEL_ERROR,Gn(t))}),this._onClose(()=>e?.(Xn.CLOSED)),this.updateJoinPayload(Object.assign({config:c},s)),this._updateFilterMessage(),this.channelAdapter.subscribe(t).receive(`ok`,async({postgres_changes:t})=>{if(this.socket._isManualToken()||this.socket.setAuth(),t===void 0){e?.(Xn.SUBSCRIBED);return}this._updatePostgresBindings(t,e)}).receive(`error`,t=>{this.state=tn.errored;let n=Object.values(t).join(`, `)||`error`;e?.(Xn.CHANNEL_ERROR,Error(n,{cause:t}))}).receive(`timeout`,()=>{e?.(Xn.TIMED_OUT)})}return this}_updatePostgresBindings(t,n){let r=this.bindings.postgres_changes,i=r?.length??0,a=[];for(let o=0;o<i;o++){let i=r[o],{filter:{event:s,schema:c,table:l,filter:u}}=i,d=t&&t[o];if(d&&d.event===s&&e.isFilterValueEqual(d.schema,c)&&e.isFilterValueEqual(d.table,l)&&e.isFilterValueEqual(d.filter,u))a.push(Object.assign(Object.assign({},i),{id:d.id}));else{this.unsubscribe(),this.state=tn.errored,n?.(Xn.CHANNEL_ERROR,Error(`mismatch between server and client bindings for postgres changes`));return}}this.bindings.postgres_changes=a,this.state!=tn.errored&&n&&n(Xn.SUBSCRIBED)}presenceState(){return this.presence.state}async track(e,t={}){return await this.send({type:`presence`,event:`track`,payload:e},t.timeout||this.timeout)}async untrack(e={}){return await this.send({type:`presence`,event:`untrack`},e)}on(e,t,n){let r=this.channelAdapter.isJoined()||this.channelAdapter.isJoining(),i=e===Yn.PRESENCE||e===Yn.POSTGRES_CHANGES;if(r&&i)throw this.socket.log(`channel`,`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`),Error(`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);return this._on(e,t,n)}async httpSend(e,t,n={}){if(t==null)return Promise.reject(Error(`Payload is required for httpSend()`));let r={apikey:this.socket.apiKey?this.socket.apiKey:``,"Content-Type":`application/json`};this.socket.accessTokenValue&&(r.Authorization=`Bearer ${this.socket.accessTokenValue}`);let i={method:`POST`,headers:r,body:JSON.stringify({messages:[{topic:this.subTopic,event:e,payload:t,private:this.private}]})},a=await this._fetchWithTimeout(this.broadcastEndpointURL,i,n.timeout??this.timeout);if(a.status===202)return{success:!0};let o=a.statusText;try{let e=await a.json();o=e.error||e.message||o}catch{}return Promise.reject(Error(o))}async send(e,t={}){if(!this.channelAdapter.canPush()&&e.type===`broadcast`){console.warn(`Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.`);let{event:n,payload:r}=e,i={apikey:this.socket.apiKey?this.socket.apiKey:``,"Content-Type":`application/json`};this.socket.accessTokenValue&&(i.Authorization=`Bearer ${this.socket.accessTokenValue}`);let a={method:`POST`,headers:i,body:JSON.stringify({messages:[{topic:this.subTopic,event:n,payload:r,private:this.private}]})};try{let e=await this._fetchWithTimeout(this.broadcastEndpointURL,a,t.timeout??this.timeout);return await e.body?.cancel(),e.ok?`ok`:`error`}catch(e){return e instanceof Error&&e.name===`AbortError`?`timed out`:`error`}}else return new Promise(n=>{let r=this.channelAdapter.push(e.type,e,t.timeout||this.timeout);e.type===`broadcast`&&!this.params?.config?.broadcast?.ack&&n(`ok`),r.receive(`ok`,()=>n(`ok`)),r.receive(`error`,()=>n(`error`)),r.receive(`timeout`,()=>n(`timed out`))})}updateJoinPayload(e){this.channelAdapter.updateJoinPayload(e)}async unsubscribe(e=this.timeout){return new Promise(t=>{this.channelAdapter.unsubscribe(e).receive(`ok`,()=>t(`ok`)).receive(`timeout`,()=>t(`timed out`)).receive(`error`,()=>t(`error`))})}teardown(){this.channelAdapter.teardown()}async _fetchWithTimeout(e,t,n){let r=new AbortController,i=setTimeout(()=>r.abort(),n),a=await this.socket.fetch(e,Object.assign(Object.assign({},t),{signal:r.signal}));return clearTimeout(i),a}_on(e,t,n){let r=e.toLocaleLowerCase(),i={type:r,filter:t,callback:n,ref:this.channelAdapter.on(e,n)};return this.bindings[r]?this.bindings[r].push(i):this.bindings[r]=[i],this._updateFilterMessage(),this}_onClose(e){this.channelAdapter.onClose(e)}_onError(e){this.channelAdapter.onError(e)}_updateFilterMessage(){this.channelAdapter.updateFilterBindings((e,t,n)=>{let r=e.event.toLocaleLowerCase();if(this._notThisChannelEvent(r,n))return!1;let i=this.bindings[r]?.find(t=>t.ref===e.ref);if(!i)return!0;if([`broadcast`,`presence`,`postgres_changes`].includes(r))if(`id`in i){let e=i.id,n=i.filter?.event;return e&&t.ids?.includes(e)&&(n===`*`||n?.toLocaleLowerCase()===t.data?.type.toLocaleLowerCase())}else{let e=(i?.filter?.event)?.toLocaleLowerCase();return e===`*`||e===(t?.event)?.toLocaleLowerCase()}else return i.type.toLocaleLowerCase()===r})}_notThisChannelEvent(e,t){let{close:n,error:r,leave:i,join:a}=nn;return t&&[n,r,i,a].includes(e)&&t!==this.joinPush.ref}_updateFilterTransform(){this.channelAdapter.updatePayloadTransform((e,t,n)=>{if(typeof t==`object`&&`ids`in t){let e=t.data,{schema:n,table:r,commit_timestamp:i,type:a,errors:o}=e;return Object.assign(Object.assign({},{schema:n,table:r,commit_timestamp:i,eventType:a,new:{},old:{},errors:o}),this._getPayloadRecords(e))}return t})}copyBindings(e){if(this.joinedOnce)throw Error(`cannot copy bindings into joined channel`);for(let t in e.bindings)for(let n of e.bindings[t])this._on(n.type,n.filter,n.callback)}static isFilterValueEqual(e,t){return(e??void 0)===(t??void 0)}_getPayloadRecords(e){let t={new:{},old:{}};return(e.type===`INSERT`||e.type===`UPDATE`)&&(t.new=on(e.columns,e.record)),(e.type===`UPDATE`||e.type===`DELETE`)&&(t.old=on(e.columns,e.old_record)),t}},Qn=class{constructor(e,t){this.socket=new Ln(e,t)}get timeout(){return this.socket.timeout}get endPoint(){return this.socket.endPoint}get transport(){return this.socket.transport}get heartbeatIntervalMs(){return this.socket.heartbeatIntervalMs}get heartbeatCallback(){return this.socket.heartbeatCallback}set heartbeatCallback(e){this.socket.heartbeatCallback=e}get heartbeatTimer(){return this.socket.heartbeatTimer}get pendingHeartbeatRef(){return this.socket.pendingHeartbeatRef}get reconnectTimer(){return this.socket.reconnectTimer}get vsn(){return this.socket.vsn}get encode(){return this.socket.encode}get decode(){return this.socket.decode}get reconnectAfterMs(){return this.socket.reconnectAfterMs}get sendBuffer(){return this.socket.sendBuffer}get stateChangeCallbacks(){return this.socket.stateChangeCallbacks}connect(){this.socket.connect()}disconnect(e,t,n,r=1e4){return new Promise(i=>{setTimeout(()=>i(`timeout`),r),this.socket.disconnect(()=>{e(),i(`ok`)},t,n)})}push(e){this.socket.push(e)}log(e,t,n){this.socket.log(e,t,n)}makeRef(){return this.socket.makeRef()}onOpen(e){this.socket.onOpen(e)}onClose(e){this.socket.onClose(e)}onError(e){this.socket.onError(e)}onMessage(e){this.socket.onMessage(e)}isConnected(){return this.socket.isConnected()}isConnecting(){return this.socket.connectionState()==rn.connecting}isDisconnecting(){return this.socket.connectionState()==rn.closing}connectionState(){return this.socket.connectionState()}endPointURL(){return this.socket.endPointURL()}sendHeartbeat(){this.socket.sendHeartbeat()}getSocket(){return this.socket}},$n={HEARTBEAT_INTERVAL:25e3,RECONNECT_DELAY:10,HEARTBEAT_TIMEOUT_FALLBACK:100},er=[1e3,2e3,5e3,1e4],tr=1e4;function nr(){let e=new Map;return{get length(){return e.size},clear(){e.clear()},getItem(t){return e.has(t)?e.get(t):null},key(t){return Array.from(e.keys())[t]??null},removeItem(t){e.delete(t)},setItem(t,n){e.set(t,String(n))}}}function rr(){try{if(typeof globalThis<`u`&&globalThis.sessionStorage)return globalThis.sessionStorage}catch{}return nr()}var ir=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`,ar=class{get endPoint(){return this.socketAdapter.endPoint}get timeout(){return this.socketAdapter.timeout}get transport(){return this.socketAdapter.transport}get heartbeatCallback(){return this.socketAdapter.heartbeatCallback}get heartbeatIntervalMs(){return this.socketAdapter.heartbeatIntervalMs}get heartbeatTimer(){return this.worker?this._workerHeartbeatTimer:this.socketAdapter.heartbeatTimer}get pendingHeartbeatRef(){return this.worker?this._pendingWorkerHeartbeatRef:this.socketAdapter.pendingHeartbeatRef}get reconnectTimer(){return this.socketAdapter.reconnectTimer}get vsn(){return this.socketAdapter.vsn}get encode(){return this.socketAdapter.encode}get decode(){return this.socketAdapter.decode}get reconnectAfterMs(){return this.socketAdapter.reconnectAfterMs}get sendBuffer(){return this.socketAdapter.sendBuffer}get stateChangeCallbacks(){return this.socketAdapter.stateChangeCallbacks}constructor(e,t){if(this.channels=[],this.accessTokenValue=null,this.accessToken=null,this.apiKey=null,this.httpEndpoint=``,this.headers={},this.params={},this.ref=0,this.serializer=new an,this._manuallySetToken=!1,this._authPromise=null,this._workerHeartbeatTimer=void 0,this._pendingWorkerHeartbeatRef=null,this._pendingDisconnectTimer=null,this._disconnectOnEmptyChannelsAfterMs=0,this._resolveFetch=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),!t?.params?.apikey)throw Error(`API key is required to connect to Realtime`);this.apiKey=t.params.apikey;let n=this._initializeOptions(t);this.socketAdapter=new Qn(e,n),this.httpEndpoint=hn(e),this.fetch=this._resolveFetch(t?.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.isConnected())){this.accessToken&&!this._authPromise&&this._setAuthSafely(`connect`),this._setupConnectionHandlers();try{this.socketAdapter.connect()}catch(e){let t=e.message;throw t.includes(`Node.js`)?Error(`${t}\n\nTo use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):Error(`WebSocket not available: ${t}`)}this._handleNodeJsRaceCondition()}}endpointURL(){return this.socketAdapter.endPointURL()}async disconnect(e,t){return this._cancelPendingDisconnect(),this.isDisconnecting()?`ok`:await this.socketAdapter.disconnect(()=>{clearInterval(this._workerHeartbeatTimer),this._terminateWorker()},e,t)}getChannels(){return this.channels}async removeChannel(e){let t=await e.unsubscribe();return t===`ok`&&e.teardown(),t}async removeAllChannels(){let e=this.channels.map(async e=>{let t=await e.unsubscribe();return e.teardown(),t}),t=await Promise.all(e);return await this.disconnect(),t}log(e,t,n){this.socketAdapter.log(e,t,n)}connectionState(){return this.socketAdapter.connectionState()||rn.closed}isConnected(){return this.socketAdapter.isConnected()}isConnecting(){return this.socketAdapter.isConnecting()}isDisconnecting(){return this.socketAdapter.isDisconnecting()}channel(e,t={config:{}}){let n=`realtime:${e}`,r=this.getChannels().find(e=>e.topic===n);if(r)return r;{let n=new Zn(`realtime:${e}`,t,this);return this._cancelPendingDisconnect(),this.channels.push(n),n}}push(e){this.socketAdapter.push(e)}async setAuth(e=null){this._authPromise=this._performAuth(e);try{await this._authPromise}finally{this._authPromise=null}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){this.socketAdapter.sendHeartbeat()}onHeartbeat(e){this.socketAdapter.heartbeatCallback=this._wrapHeartbeatCallback(e)}_makeRef(){return this.socketAdapter.makeRef()}_remove(e){this.channels=this.channels.filter(t=>t.topic!==e.topic),this.channels.length===0&&(this.log(`transport`,`no channels remaining, scheduling disconnect`),this._schedulePendingDisconnect())}_schedulePendingDisconnect(){if(this._cancelPendingDisconnect(),this._disconnectOnEmptyChannelsAfterMs===0){this.log(`transport`,`disconnecting immediately - no channels`),this.disconnect();return}this._pendingDisconnectTimer=setTimeout(()=>{this._pendingDisconnectTimer=null,this.channels.length===0&&(this.log(`transport`,`deferred disconnect fired - no channels, disconnecting`),this.disconnect())},this._disconnectOnEmptyChannelsAfterMs),this.log(`transport`,`deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`)}_cancelPendingDisconnect(){this._pendingDisconnectTimer!==null&&(this.log(`transport`,`pending disconnect cancelled - channel activity detected`),clearTimeout(this._pendingDisconnectTimer),this._pendingDisconnectTimer=null)}async _performAuth(e=null){let t,n=!1;if(e)t=e,n=!0;else if(this.accessToken)try{t=await this.accessToken()}catch(e){this.log(`error`,`Error fetching access token from callback`,e),t=this.accessTokenValue}else t=this.accessTokenValue;n?this._manuallySetToken=!0:this.accessToken&&(this._manuallySetToken=!1),this.accessTokenValue!=t&&(this.accessTokenValue=t,this.channels.forEach(e=>{let n={access_token:t,version:Zt};t&&e.updateJoinPayload(n),e.joinedOnce&&e.channelAdapter.isJoined()&&e.channelAdapter.push(nn.access_token,{access_token:t})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(e=`general`){this._isManualToken()||this.setAuth().catch(t=>{this.log(`error`,`Error setting auth in ${e}`,t)})}_setupConnectionHandlers(){this.socketAdapter.onOpen(()=>{(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).catch(e=>{this.log(`error`,`error waiting for auth on connect`,e)}),this.worker&&!this.workerRef&&this._startWorkerHeartbeat()}),this.socketAdapter.onClose(()=>{this.worker&&this.workerRef&&this._terminateWorker()}),this.socketAdapter.onMessage(e=>{e.ref&&e.ref===this._pendingWorkerHeartbeatRef&&(this._pendingWorkerHeartbeatRef=null)})}_handleNodeJsRaceCondition(){this.socketAdapter.isConnected()&&this.socketAdapter.getSocket().onConnOpen()}_wrapHeartbeatCallback(e){return(t,n)=>{t==`sent`&&this._setAuthSafely(),e&&e(t,n)}}_startWorkerHeartbeat(){this.workerUrl?this.log(`worker`,`starting worker for from ${this.workerUrl}`):this.log(`worker`,`starting default worker`);let e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=e=>{this.log(`worker`,`worker error`,e.message),this._terminateWorker(),this.disconnect()},this.workerRef.onmessage=e=>{e.data.event===`keepAlive`&&this.sendHeartbeat()},this.workerRef.postMessage({event:`start`,interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&=(this.log(`worker`,`terminating worker`),this.workerRef.terminate(),void 0)}_workerObjectUrl(e){let t;if(e)t=e;else{let e=new Blob([ir],{type:`application/javascript`});t=URL.createObjectURL(e)}return t}_initializeOptions(e){this.worker=e?.worker??!1,this.accessToken=e?.accessToken??null;let t={};t.timeout=e?.timeout??D,t.heartbeatIntervalMs=e?.heartbeatIntervalMs??$n.HEARTBEAT_INTERVAL,this._disconnectOnEmptyChannelsAfterMs=e?.disconnectOnEmptyChannelsAfterMs??2*(e?.heartbeatIntervalMs??$n.HEARTBEAT_INTERVAL),t.transport=e?.transport??Xt.getWebSocketConstructor(),t.params=e?.params,t.logger=e?.logger,t.heartbeatCallback=this._wrapHeartbeatCallback(e?.heartbeatCallback),t.sessionStorage=e?.sessionStorage??rr(),t.reconnectAfterMs=e?.reconnectAfterMs??(e=>er[e-1]||tr);let n,r,i=e?.vsn??en;switch(i){case Qt:n=(e,t)=>t(JSON.stringify(e)),r=(e,t)=>t(JSON.parse(e));break;case $t:n=this.serializer.encode.bind(this.serializer),r=this.serializer.decode.bind(this.serializer);break;default:throw Error(`Unsupported serializer version: ${t.vsn}`)}if(t.vsn=i,t.encode=e?.encode??n,t.decode=e?.decode??r,t.beforeReconnect=this._reconnectAuth.bind(this),(e?.logLevel||e?.log_level)&&(this.logLevel=e.logLevel||e.log_level,t.params=Object.assign(Object.assign({},t.params),{log_level:this.logLevel})),this.worker){if(typeof window<`u`&&!window.Worker)throw Error(`Web Worker is not supported`);this.workerUrl=e?.workerUrl,t.autoSendHeartbeat=!this.worker}return t}async _reconnectAuth(){await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()}},or=class extends Error{constructor(e,t){super(e),this.name=`IcebergError`,this.status=t.status,this.icebergType=t.icebergType,this.icebergCode=t.icebergCode,this.details=t.details,this.isCommitStateUnknown=t.icebergType===`CommitStateUnknownException`||[500,502,504].includes(t.status)&&t.icebergType?.includes(`CommitState`)===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function sr(e,t,n){let r=new URL(t,e);if(n)for(let[e,t]of Object.entries(n))t!==void 0&&r.searchParams.set(e,t);return r.toString()}async function cr(e){return!e||e.type===`none`?{}:e.type===`bearer`?{Authorization:`Bearer ${e.token}`}:e.type===`header`?{[e.name]:e.value}:e.type===`custom`?await e.getHeaders():{}}function lr(e){let t=e.fetchImpl??globalThis.fetch;return{async request({method:n,path:r,query:i,body:a,headers:o}){let s=sr(e.baseUrl,r,i),c=await cr(e.auth),l=await t(s,{method:n,headers:{...a?{"Content-Type":`application/json`}:{},...c,...o},body:a?JSON.stringify(a):void 0}),u=await l.text(),d=(l.headers.get(`content-type`)||``).includes(`application/json`),f=d&&u?JSON.parse(u):u;if(!l.ok){let e=d?f:void 0,t=e?.error;throw new or(t?.message??`Request failed with status ${l.status}`,{status:l.status,icebergType:t?.type,icebergCode:t?.code,details:e})}return{status:l.status,headers:l.headers,data:f}}}}function ur(e){return e.join(``)}var dr=class{constructor(e,t=``){this.client=e,this.prefix=t}async listNamespaces(e){let t=e?{parent:ur(e.namespace)}:void 0;return(await this.client.request({method:`GET`,path:`${this.prefix}/namespaces`,query:t})).data.namespaces.map(e=>({namespace:e}))}async createNamespace(e,t){let n={namespace:e.namespace,properties:t?.properties};return(await this.client.request({method:`POST`,path:`${this.prefix}/namespaces`,body:n})).data}async dropNamespace(e){await this.client.request({method:`DELETE`,path:`${this.prefix}/namespaces/${ur(e.namespace)}`})}async loadNamespaceMetadata(e){return{properties:(await this.client.request({method:`GET`,path:`${this.prefix}/namespaces/${ur(e.namespace)}`})).data.properties}}async namespaceExists(e){try{return await this.client.request({method:`HEAD`,path:`${this.prefix}/namespaces/${ur(e.namespace)}`}),!0}catch(e){if(e instanceof or&&e.status===404)return!1;throw e}}async createNamespaceIfNotExists(e,t){try{return await this.createNamespace(e,t)}catch(e){if(e instanceof or&&e.status===409)return;throw e}}};function fr(e){return e.join(``)}var pr=class{constructor(e,t=``,n){this.client=e,this.prefix=t,this.accessDelegation=n}async listTables(e){return(await this.client.request({method:`GET`,path:`${this.prefix}/namespaces/${fr(e.namespace)}/tables`})).data.identifiers}async createTable(e,t){let n={};return this.accessDelegation&&(n[`X-Iceberg-Access-Delegation`]=this.accessDelegation),(await this.client.request({method:`POST`,path:`${this.prefix}/namespaces/${fr(e.namespace)}/tables`,body:t,headers:n})).data.metadata}async updateTable(e,t){let n=await this.client.request({method:`POST`,path:`${this.prefix}/namespaces/${fr(e.namespace)}/tables/${e.name}`,body:t});return{"metadata-location":n.data[`metadata-location`],metadata:n.data.metadata}}async dropTable(e,t){await this.client.request({method:`DELETE`,path:`${this.prefix}/namespaces/${fr(e.namespace)}/tables/${e.name}`,query:{purgeRequested:String(t?.purge??!1)}})}async loadTable(e){let t={};return this.accessDelegation&&(t[`X-Iceberg-Access-Delegation`]=this.accessDelegation),(await this.client.request({method:`GET`,path:`${this.prefix}/namespaces/${fr(e.namespace)}/tables/${e.name}`,headers:t})).data.metadata}async tableExists(e){let t={};this.accessDelegation&&(t[`X-Iceberg-Access-Delegation`]=this.accessDelegation);try{return await this.client.request({method:`HEAD`,path:`${this.prefix}/namespaces/${fr(e.namespace)}/tables/${e.name}`,headers:t}),!0}catch(e){if(e instanceof or&&e.status===404)return!1;throw e}}async createTableIfNotExists(e,t){try{return await this.createTable(e,t)}catch(n){if(n instanceof or&&n.status===409)return await this.loadTable({namespace:e.namespace,name:t.name});throw n}}},mr=class{constructor(e){let t=`v1`;e.catalogName&&(t+=`/${e.catalogName}`);let n=e.baseUrl.endsWith(`/`)?e.baseUrl:`${e.baseUrl}/`;this.client=lr({baseUrl:n,auth:e.auth,fetchImpl:e.fetch}),this.accessDelegation=e.accessDelegation?.join(`,`),this.namespaceOps=new dr(this.client,t),this.tableOps=new pr(this.client,t,this.accessDelegation)}async listNamespaces(e){return this.namespaceOps.listNamespaces(e)}async createNamespace(e,t){return this.namespaceOps.createNamespace(e,t)}async dropNamespace(e){await this.namespaceOps.dropNamespace(e)}async loadNamespaceMetadata(e){return this.namespaceOps.loadNamespaceMetadata(e)}async listTables(e){return this.tableOps.listTables(e)}async createTable(e,t){return this.tableOps.createTable(e,t)}async updateTable(e,t){return this.tableOps.updateTable(e,t)}async dropTable(e,t){await this.tableOps.dropTable(e,t)}async loadTable(e){return this.tableOps.loadTable(e)}async namespaceExists(e){return this.namespaceOps.namespaceExists(e)}async tableExists(e){return this.tableOps.tableExists(e)}async createNamespaceIfNotExists(e,t){return this.namespaceOps.createNamespaceIfNotExists(e,t)}async createTableIfNotExists(e,t){return this.tableOps.createTableIfNotExists(e,t)}};function hr(e){"@babel/helpers - typeof";return hr=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},hr(e)}function gr(e,t){if(hr(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(hr(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function _r(e){var t=gr(e,`string`);return hr(t)==`symbol`?t:t+``}function vr(e,t,n){return(t=_r(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function yr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?yr(Object(n),!0).forEach(function(t){vr(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yr(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var br=class extends Error{constructor(e,t=`storage`,n,r){super(e),this.__isStorageError=!0,this.namespace=t,this.name=t===`vectors`?`StorageVectorsError`:`StorageError`,this.status=n,this.statusCode=r}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}};function xr(e){return typeof e==`object`&&!!e&&`__isStorageError`in e}var Sr=class extends br{constructor(e,t,n,r=`storage`){super(e,r,t,n),this.name=r===`vectors`?`StorageVectorsApiError`:`StorageApiError`,this.status=t,this.statusCode=n}toJSON(){return k({},super.toJSON())}},Cr=class extends br{constructor(e,t,n=`storage`){super(e,n),this.name=n===`vectors`?`StorageVectorsUnknownError`:`StorageUnknownError`,this.originalError=t}};function wr(e,t,n){let r=k({},e),i=t.toLowerCase();for(let e of Object.keys(r))e.toLowerCase()===i&&delete r[e];return r[i]=n,r}function Tr(e){let t={};for(let[n,r]of Object.entries(e))t[n.toLowerCase()]=r;return t}var Er=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),Dr=e=>{if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Or=e=>{if(Array.isArray(e))return e.map(e=>Or(e));if(typeof e==`function`||e!==Object(e))return e;let t={};return Object.entries(e).forEach(([e,n])=>{let r=e.replace(/([-_][a-z])/gi,e=>e.toUpperCase().replace(/[-_]/g,``));t[r]=Or(n)}),t},kr=e=>!e||typeof e!=`string`||e.length===0||e.length>100||e.trim()!==e||e.includes(`/`)||e.includes(`\\`)?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(e),Ar=e=>{if(typeof e==`object`&&e){let t=e;if(typeof t.msg==`string`)return t.msg;if(typeof t.message==`string`)return t.message;if(typeof t.error_description==`string`)return t.error_description;if(typeof t.error==`string`)return t.error;if(typeof t.error==`object`&&t.error!==null){let e=t.error;if(typeof e.message==`string`)return e.message}}return JSON.stringify(e)},jr=async(e,t,n,r)=>{if(typeof e==`object`&&e&&`json`in e&&typeof e.json==`function`){let n=e,i=parseInt(String(n.status),10);Number.isFinite(i)||(i=500),n.json().then(e=>{let n=e?.statusCode||e?.code||i+``;t(new Sr(Ar(e),i,n,r))}).catch(()=>{let e=i+``;t(new Sr(n.statusText||`HTTP ${i} error`,i,e,r))})}else t(new Cr(Ar(e),e,r))},Mr=(e,t,n,r)=>{let i={method:e,headers:t?.headers||{}};if(e===`GET`||e===`HEAD`||!r)return k(k({},i),n);if(Dr(r)){let e=t?.headers||{},n;for(let[t,r]of Object.entries(e))t.toLowerCase()===`content-type`&&(n=r);i.headers=wr(e,`Content-Type`,n??`application/json`),i.body=JSON.stringify(r)}else i.body=r;return t?.duplex&&(i.duplex=t.duplex),k(k({},i),n)};async function Nr(e,t,n,r,i,a,o){return new Promise((s,c)=>{e(n,Mr(t,r,i,a)).then(e=>{if(!e.ok)throw e;if(r?.noResolveJson)return e;if(o===`vectors`){let t=e.headers.get(`content-type`);if(e.headers.get(`content-length`)===`0`||e.status===204||!t||!t.includes(`application/json`))return{}}return e.json()}).then(e=>s(e)).catch(e=>jr(e,c,r,o))})}function Pr(e=`storage`){return{get:async(t,n,r,i)=>Nr(t,`GET`,n,r,i,void 0,e),post:async(t,n,r,i,a)=>Nr(t,`POST`,n,i,a,r,e),put:async(t,n,r,i,a)=>Nr(t,`PUT`,n,i,a,r,e),head:async(t,n,r,i)=>Nr(t,`HEAD`,n,k(k({},r),{},{noResolveJson:!0}),i,void 0,e),remove:async(t,n,r,i,a)=>Nr(t,`DELETE`,n,i,a,r,e)}}var{get:Fr,post:Ir,put:Lr,head:Rr,remove:zr}=Pr(`storage`),Br=Pr(`vectors`),Vr=class{constructor(e,t={},n,r=`storage`){this.shouldThrowOnError=!1,this.url=e,this.headers=Tr(t),this.fetch=Er(n),this.namespace=r}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(e,t){return this.headers=wr(this.headers,e,t),this}async handleOperation(e){var t=this;try{return{data:await e(),error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(xr(e))return{data:null,error:e};throw e}}},Hr=Symbol.toStringTag,Ur=class{constructor(e,t){this.downloadFn=e,this.shouldThrowOnError=t,this[Hr]=`StreamDownloadBuilder`,this.promise=null}then(e,t){return this.getPromise().then(e,t)}catch(e){return this.getPromise().catch(e)}finally(e){return this.getPromise().finally(e)}getPromise(){return this.promise||=this.execute(),this.promise}async execute(){var e=this;try{return{data:(await e.downloadFn()).body,error:null}}catch(t){if(e.shouldThrowOnError)throw t;if(xr(t))return{data:null,error:t};throw t}}},Wr=Symbol.toStringTag,Gr=class{constructor(e,t){this.downloadFn=e,this.shouldThrowOnError=t,this[Wr]=`BlobDownloadBuilder`,this.promise=null}asStream(){return new Ur(this.downloadFn,this.shouldThrowOnError)}then(e,t){return this.getPromise().then(e,t)}catch(e){return this.getPromise().catch(e)}finally(e){return this.getPromise().finally(e)}getPromise(){return this.promise||=this.execute(),this.promise}async execute(){var e=this;try{return{data:await(await e.downloadFn()).blob(),error:null}}catch(t){if(e.shouldThrowOnError)throw t;if(xr(t))return{data:null,error:t};throw t}}},Kr={limit:100,offset:0,sortBy:{column:`name`,order:`asc`}},qr={cacheControl:`3600`,contentType:`text/plain;charset=UTF-8`,upsert:!1},Jr=class extends Vr{constructor(e,t={},n,r){super(e,t,r,`storage`),this.bucketId=n}async uploadOrUpdate(e,t,n,r){var i=this;return i.handleOperation(async()=>{let a,o=k(k({},qr),r),s=k(k({},i.headers),e===`POST`&&{"x-upsert":String(o.upsert)}),c=o.metadata;if(typeof Blob<`u`&&n instanceof Blob?(a=new FormData,a.append(`cacheControl`,o.cacheControl),c&&a.append(`metadata`,i.encodeMetadata(c)),a.append(``,n)):typeof FormData<`u`&&n instanceof FormData?(a=n,a.has(`cacheControl`)||a.append(`cacheControl`,o.cacheControl),c&&!a.has(`metadata`)&&a.append(`metadata`,i.encodeMetadata(c))):(a=n,s[`cache-control`]=`max-age=${o.cacheControl}`,s[`content-type`]=o.contentType,c&&(s[`x-metadata`]=i.toBase64(i.encodeMetadata(c))),(typeof ReadableStream<`u`&&a instanceof ReadableStream||a&&typeof a==`object`&&`pipe`in a&&typeof a.pipe==`function`)&&!o.duplex&&(o.duplex=`half`)),r?.headers)for(let[e,t]of Object.entries(r.headers))s=wr(s,e,t);let l=i._removeEmptyFolders(t),u=i._getFinalPath(l),d=await(e==`PUT`?Lr:Ir)(i.fetch,`${i.url}/object/${u}`,a,k({headers:s},o?.duplex?{duplex:o.duplex}:{}));return{path:l,id:d.Id,fullPath:d.Key}})}async upload(e,t,n){return this.uploadOrUpdate(`POST`,e,t,n)}async uploadToSignedUrl(e,t,n,r){var i=this;let a=i._removeEmptyFolders(e),o=i._getFinalPath(a),s=new URL(i.url+`/object/upload/sign/${o}`);return s.searchParams.set(`token`,t),i.handleOperation(async()=>{let e,t=k(k({},qr),r),o=k(k({},i.headers),{"x-upsert":String(t.upsert)}),c=t.metadata;if(typeof Blob<`u`&&n instanceof Blob?(e=new FormData,e.append(`cacheControl`,t.cacheControl),c&&e.append(`metadata`,i.encodeMetadata(c)),e.append(``,n)):typeof FormData<`u`&&n instanceof FormData?(e=n,e.has(`cacheControl`)||e.append(`cacheControl`,t.cacheControl),c&&!e.has(`metadata`)&&e.append(`metadata`,i.encodeMetadata(c))):(e=n,o[`cache-control`]=`max-age=${t.cacheControl}`,o[`content-type`]=t.contentType,c&&(o[`x-metadata`]=i.toBase64(i.encodeMetadata(c))),(typeof ReadableStream<`u`&&e instanceof ReadableStream||e&&typeof e==`object`&&`pipe`in e&&typeof e.pipe==`function`)&&!t.duplex&&(t.duplex=`half`)),r?.headers)for(let[e,t]of Object.entries(r.headers))o=wr(o,e,t);return{path:a,fullPath:(await Lr(i.fetch,s.toString(),e,k({headers:o},t?.duplex?{duplex:t.duplex}:{}))).Key}})}async createSignedUploadUrl(e,t){var n=this;return n.handleOperation(async()=>{let r=n._getFinalPath(e),i=k({},n.headers);t?.upsert&&(i[`x-upsert`]=`true`);let a=await Ir(n.fetch,`${n.url}/object/upload/sign/${r}`,{},{headers:i}),o=new URL(n.url+a.url),s=o.searchParams.get(`token`);if(!s)throw new br(`No token returned by API`);return{signedUrl:o.toString(),path:e,token:s}})}async update(e,t,n){return this.uploadOrUpdate(`PUT`,e,t,n)}async move(e,t,n){var r=this;return r.handleOperation(async()=>await Ir(r.fetch,`${r.url}/object/move`,{bucketId:r.bucketId,sourceKey:e,destinationKey:t,destinationBucket:n?.destinationBucket},{headers:r.headers}))}async copy(e,t,n){var r=this;return r.handleOperation(async()=>({path:(await Ir(r.fetch,`${r.url}/object/copy`,{bucketId:r.bucketId,sourceKey:e,destinationKey:t,destinationBucket:n?.destinationBucket},{headers:r.headers})).Key}))}async createSignedUrl(e,t,n){var r=this;return r.handleOperation(async()=>{let i=r._getFinalPath(e),a=typeof n?.transform==`object`&&n.transform!==null&&Object.keys(n.transform).length>0,o=await Ir(r.fetch,`${r.url}/object/sign/${i}`,k({expiresIn:t},a?{transform:n.transform}:{}),{headers:r.headers}),s=new URLSearchParams;n?.download&&s.set(`download`,n.download===!0?``:n.download),n?.cacheNonce!=null&&s.set(`cacheNonce`,String(n.cacheNonce));let c=s.toString();return{signedUrl:encodeURI(`${r.url}${o.signedURL}${c?`&${c}`:``}`)}})}async createSignedUrls(e,t,n){var r=this;return r.handleOperation(async()=>{let i=await Ir(r.fetch,`${r.url}/object/sign/${r.bucketId}`,{expiresIn:t,paths:e},{headers:r.headers}),a=new URLSearchParams;n?.download&&a.set(`download`,n.download===!0?``:n.download),n?.cacheNonce!=null&&a.set(`cacheNonce`,String(n.cacheNonce));let o=a.toString();return i.map(e=>k(k({},e),{},{signedUrl:e.signedURL?encodeURI(`${r.url}${e.signedURL}${o?`&${o}`:``}`):null}))})}download(e,t,n){let r=typeof t?.transform==`object`&&t.transform!==null&&Object.keys(t.transform).length>0?`render/image/authenticated`:`object`,i=new URLSearchParams;t?.transform&&this.applyTransformOptsToQuery(i,t.transform),t?.cacheNonce!=null&&i.set(`cacheNonce`,String(t.cacheNonce));let a=i.toString(),o=this._getFinalPath(e);return new Gr(()=>Fr(this.fetch,`${this.url}/${r}/${o}${a?`?${a}`:``}`,{headers:this.headers,noResolveJson:!0},n),this.shouldThrowOnError)}async info(e){var t=this;let n=t._getFinalPath(e);return t.handleOperation(async()=>Or(await Fr(t.fetch,`${t.url}/object/info/${n}`,{headers:t.headers})))}async exists(e){var t=this;let n=t._getFinalPath(e);try{return await Rr(t.fetch,`${t.url}/object/${n}`,{headers:t.headers}),{data:!0,error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(xr(e)){let t=e instanceof Sr?e.status:e instanceof Cr?e.originalError?.status:void 0;if(t!==void 0&&[400,404].includes(t))return{data:!1,error:e}}throw e}}getPublicUrl(e,t){let n=this._getFinalPath(e),r=new URLSearchParams;t?.download&&r.set(`download`,t.download===!0?``:t.download),t?.transform&&this.applyTransformOptsToQuery(r,t.transform),t?.cacheNonce!=null&&r.set(`cacheNonce`,String(t.cacheNonce));let i=r.toString(),a=typeof t?.transform==`object`&&t.transform!==null&&Object.keys(t.transform).length>0?`render/image`:`object`;return{data:{publicUrl:encodeURI(`${this.url}/${a}/public/${n}`)+(i?`?${i}`:``)}}}async remove(e){var t=this;return t.handleOperation(async()=>await zr(t.fetch,`${t.url}/object/${t.bucketId}`,{prefixes:e},{headers:t.headers}))}async list(e,t,n){var r=this;return r.handleOperation(async()=>{let i=k(k(k({},Kr),t),{},{prefix:e||``});return await Ir(r.fetch,`${r.url}/object/list/${r.bucketId}`,i,{headers:r.headers},n)})}async listV2(e,t){var n=this;return n.handleOperation(async()=>{let r=k({},e);return await Ir(n.fetch,`${n.url}/object/list-v2/${n.bucketId}`,r,{headers:n.headers},t)})}encodeMetadata(e){return JSON.stringify(e)}toBase64(e){return typeof Buffer<`u`?Buffer.from(e).toString(`base64`):btoa(e)}_getFinalPath(e){return`${this.bucketId}/${e.replace(/^\/+/,``)}`}_removeEmptyFolders(e){return e.replace(/^\/|\/$/g,``).replace(/\/+/g,`/`)}applyTransformOptsToQuery(e,t){return t.width&&e.set(`width`,t.width.toString()),t.height&&e.set(`height`,t.height.toString()),t.resize&&e.set(`resize`,t.resize),t.format&&e.set(`format`,t.format),t.quality&&e.set(`quality`,t.quality.toString()),e}},Yr={"X-Client-Info":`storage-js/2.106.2`},Xr=class extends Vr{constructor(e,t={},n,r){let i=new URL(e);r?.useNewHostname&&/supabase\.(co|in|red)$/.test(i.hostname)&&!i.hostname.includes(`storage.supabase.`)&&(i.hostname=i.hostname.replace(`supabase.`,`storage.supabase.`));let a=i.href.replace(/\/$/,``),o=k(k({},Yr),t);super(a,o,n,`storage`)}async listBuckets(e){var t=this;return t.handleOperation(async()=>{let n=t.listBucketOptionsToQueryString(e);return await Fr(t.fetch,`${t.url}/bucket${n}`,{headers:t.headers})})}async getBucket(e){var t=this;return t.handleOperation(async()=>await Fr(t.fetch,`${t.url}/bucket/${e}`,{headers:t.headers}))}async createBucket(e,t={public:!1}){var n=this;return n.handleOperation(async()=>await Ir(n.fetch,`${n.url}/bucket`,{id:e,name:e,type:t.type,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes},{headers:n.headers}))}async updateBucket(e,t){var n=this;return n.handleOperation(async()=>await Lr(n.fetch,`${n.url}/bucket/${e}`,{id:e,name:e,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes},{headers:n.headers}))}async emptyBucket(e){var t=this;return t.handleOperation(async()=>await Ir(t.fetch,`${t.url}/bucket/${e}/empty`,{},{headers:t.headers}))}async deleteBucket(e){var t=this;return t.handleOperation(async()=>await zr(t.fetch,`${t.url}/bucket/${e}`,{},{headers:t.headers}))}listBucketOptionsToQueryString(e){let t={};return e&&(`limit`in e&&(t.limit=String(e.limit)),`offset`in e&&(t.offset=String(e.offset)),e.search&&(t.search=e.search),e.sortColumn&&(t.sortColumn=e.sortColumn),e.sortOrder&&(t.sortOrder=e.sortOrder)),Object.keys(t).length>0?`?`+new URLSearchParams(t).toString():``}},Zr=class extends Vr{constructor(e,t={},n){let r=e.replace(/\/$/,``),i=k(k({},Yr),t);super(r,i,n,`storage`)}async createBucket(e){var t=this;return t.handleOperation(async()=>await Ir(t.fetch,`${t.url}/bucket`,{name:e},{headers:t.headers}))}async listBuckets(e){var t=this;return t.handleOperation(async()=>{let n=new URLSearchParams;e?.limit!==void 0&&n.set(`limit`,e.limit.toString()),e?.offset!==void 0&&n.set(`offset`,e.offset.toString()),e?.sortColumn&&n.set(`sortColumn`,e.sortColumn),e?.sortOrder&&n.set(`sortOrder`,e.sortOrder),e?.search&&n.set(`search`,e.search);let r=n.toString(),i=r?`${t.url}/bucket?${r}`:`${t.url}/bucket`;return await Fr(t.fetch,i,{headers:t.headers})})}async deleteBucket(e){var t=this;return t.handleOperation(async()=>await zr(t.fetch,`${t.url}/bucket/${e}`,{},{headers:t.headers}))}from(e){var t=this;if(!kr(e))throw new br(`Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.`);let n=new mr({baseUrl:this.url,catalogName:e,auth:{type:`custom`,getHeaders:async()=>t.headers},fetch:this.fetch}),r=this.shouldThrowOnError;return new Proxy(n,{get(e,t){let n=e[t];return typeof n==`function`?async(...t)=>{try{return{data:await n.apply(e,t),error:null}}catch(e){if(r)throw e;return{data:null,error:e}}}:n}})}},Qr=class extends Vr{constructor(e,t={},n){let r=e.replace(/\/$/,``),i=k(k({},Yr),{},{"Content-Type":`application/json`},t);super(r,i,n,`vectors`)}async createIndex(e){var t=this;return t.handleOperation(async()=>await Br.post(t.fetch,`${t.url}/CreateIndex`,e,{headers:t.headers})||{})}async getIndex(e,t){var n=this;return n.handleOperation(async()=>await Br.post(n.fetch,`${n.url}/GetIndex`,{vectorBucketName:e,indexName:t},{headers:n.headers}))}async listIndexes(e){var t=this;return t.handleOperation(async()=>await Br.post(t.fetch,`${t.url}/ListIndexes`,e,{headers:t.headers}))}async deleteIndex(e,t){var n=this;return n.handleOperation(async()=>await Br.post(n.fetch,`${n.url}/DeleteIndex`,{vectorBucketName:e,indexName:t},{headers:n.headers})||{})}},$r=class extends Vr{constructor(e,t={},n){let r=e.replace(/\/$/,``),i=k(k({},Yr),{},{"Content-Type":`application/json`},t);super(r,i,n,`vectors`)}async putVectors(e){var t=this;if(e.vectors.length<1||e.vectors.length>500)throw Error(`Vector batch size must be between 1 and 500 items`);return t.handleOperation(async()=>await Br.post(t.fetch,`${t.url}/PutVectors`,e,{headers:t.headers})||{})}async getVectors(e){var t=this;return t.handleOperation(async()=>await Br.post(t.fetch,`${t.url}/GetVectors`,e,{headers:t.headers}))}async listVectors(e){var t=this;if(e.segmentCount!==void 0){if(e.segmentCount<1||e.segmentCount>16)throw Error(`segmentCount must be between 1 and 16`);if(e.segmentIndex!==void 0&&(e.segmentIndex<0||e.segmentIndex>=e.segmentCount))throw Error(`segmentIndex must be between 0 and ${e.segmentCount-1}`)}return t.handleOperation(async()=>await Br.post(t.fetch,`${t.url}/ListVectors`,e,{headers:t.headers}))}async queryVectors(e){var t=this;return t.handleOperation(async()=>await Br.post(t.fetch,`${t.url}/QueryVectors`,e,{headers:t.headers}))}async deleteVectors(e){var t=this;if(e.keys.length<1||e.keys.length>500)throw Error(`Keys batch size must be between 1 and 500 items`);return t.handleOperation(async()=>await Br.post(t.fetch,`${t.url}/DeleteVectors`,e,{headers:t.headers})||{})}},ei=class extends Vr{constructor(e,t={},n){let r=e.replace(/\/$/,``),i=k(k({},Yr),{},{"Content-Type":`application/json`},t);super(r,i,n,`vectors`)}async createBucket(e){var t=this;return t.handleOperation(async()=>await Br.post(t.fetch,`${t.url}/CreateVectorBucket`,{vectorBucketName:e},{headers:t.headers})||{})}async getBucket(e){var t=this;return t.handleOperation(async()=>await Br.post(t.fetch,`${t.url}/GetVectorBucket`,{vectorBucketName:e},{headers:t.headers}))}async listBuckets(e={}){var t=this;return t.handleOperation(async()=>await Br.post(t.fetch,`${t.url}/ListVectorBuckets`,e,{headers:t.headers}))}async deleteBucket(e){var t=this;return t.handleOperation(async()=>await Br.post(t.fetch,`${t.url}/DeleteVectorBucket`,{vectorBucketName:e},{headers:t.headers})||{})}},ti=class extends ei{constructor(e,t={}){super(e,t.headers||{},t.fetch)}from(e){return new ni(this.url,this.headers,e,this.fetch)}async createBucket(e){var t=()=>super.createBucket,n=this;return t().call(n,e)}async getBucket(e){var t=()=>super.getBucket,n=this;return t().call(n,e)}async listBuckets(e={}){var t=()=>super.listBuckets,n=this;return t().call(n,e)}async deleteBucket(e){var t=()=>super.deleteBucket,n=this;return t().call(n,e)}},ni=class extends Qr{constructor(e,t,n,r){super(e,t,r),this.vectorBucketName=n}async createIndex(e){var t=()=>super.createIndex,n=this;return t().call(n,k(k({},e),{},{vectorBucketName:n.vectorBucketName}))}async listIndexes(e={}){var t=()=>super.listIndexes,n=this;return t().call(n,k(k({},e),{},{vectorBucketName:n.vectorBucketName}))}async getIndex(e){var t=()=>super.getIndex,n=this;return t().call(n,n.vectorBucketName,e)}async deleteIndex(e){var t=()=>super.deleteIndex,n=this;return t().call(n,n.vectorBucketName,e)}index(e){return new ri(this.url,this.headers,this.vectorBucketName,e,this.fetch)}},ri=class extends $r{constructor(e,t,n,r,i){super(e,t,i),this.vectorBucketName=n,this.indexName=r}async putVectors(e){var t=()=>super.putVectors,n=this;return t().call(n,k(k({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async getVectors(e){var t=()=>super.getVectors,n=this;return t().call(n,k(k({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async listVectors(e={}){var t=()=>super.listVectors,n=this;return t().call(n,k(k({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async queryVectors(e){var t=()=>super.queryVectors,n=this;return t().call(n,k(k({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async deleteVectors(e){var t=()=>super.deleteVectors,n=this;return t().call(n,k(k({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}},ii=class extends Xr{constructor(e,t={},n,r){super(e,t,n,r)}from(e){return new Jr(this.url,this.headers,e,this.fetch)}get vectors(){return new ti(this.url+`/vector`,{headers:this.headers,fetch:this.fetch})}get analytics(){return new Zr(this.url+`/iceberg`,this.headers,this.fetch)}},ai=`2.106.2`,oi=30*1e3,si=3*oi,ci=`http://localhost:9999`,li=`supabase.auth.token`,ui={"X-Client-Info":`gotrue-js/${ai}`},di=`X-Supabase-Api-Version`,fi={"2024-01-01":{timestamp:Date.parse(`2024-01-01T00:00:00.0Z`),name:`2024-01-01`}},pi=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,mi=class extends Error{constructor(e,t,n){super(e),this.__isAuthError=!0,this.name=`AuthError`,this.status=t,this.code=n}toJSON(){return{name:this.name,message:this.message,status:this.status,code:this.code}}};function A(e){return typeof e==`object`&&!!e&&`__isAuthError`in e}var hi=class extends mi{constructor(e,t,n){super(e,t,n),this.name=`AuthApiError`,this.status=t,this.code=n}};function gi(e){return A(e)&&e.name===`AuthApiError`}var _i=class extends mi{constructor(e,t){super(e),this.name=`AuthUnknownError`,this.originalError=t}},j=class extends mi{constructor(e,t,n,r){super(e,n,r),this.name=t,this.status=n}},M=class extends j{constructor(){super(`Auth session missing!`,`AuthSessionMissingError`,400,void 0)}};function vi(e){return A(e)&&e.name===`AuthSessionMissingError`}var yi=class extends j{constructor(){super(`Auth session or user missing`,`AuthInvalidTokenResponseError`,500,void 0)}},bi=class extends j{constructor(e){super(e,`AuthInvalidCredentialsError`,400,void 0)}},xi=class extends j{constructor(e,t=null){super(e,`AuthImplicitGrantRedirectError`,500,void 0),this.details=null,this.details=t}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}};function Si(e){return A(e)&&e.name===`AuthImplicitGrantRedirectError`}var Ci=class extends j{constructor(e,t=null){super(e,`AuthPKCEGrantCodeExchangeError`,500,void 0),this.details=null,this.details=t}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}},wi=class extends j{constructor(){super(`PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.`,`AuthPKCECodeVerifierMissingError`,400,`pkce_code_verifier_not_found`)}},Ti=class extends j{constructor(e,t){super(e,`AuthRetryableFetchError`,t,void 0)}};function Ei(e){return A(e)&&e.name===`AuthRetryableFetchError`}var Di=class extends j{constructor(e,t,n){super(e,`AuthWeakPasswordError`,t,`weak_password`),this.reasons=n}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{reasons:this.reasons})}},Oi=class extends j{constructor(e){super(e,`AuthInvalidJwtError`,400,`invalid_jwt`)}},ki=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_`.split(``),Ai=` 	
\r=`.split(``),ji=(()=>{let e=Array(128);for(let t=0;t<e.length;t+=1)e[t]=-1;for(let t=0;t<Ai.length;t+=1)e[Ai[t].charCodeAt(0)]=-2;for(let t=0;t<ki.length;t+=1)e[ki[t].charCodeAt(0)]=t;return e})();function Mi(e,t,n){if(e!==null)for(t.queue=t.queue<<8|e,t.queuedBits+=8;t.queuedBits>=6;)n(ki[t.queue>>t.queuedBits-6&63]),t.queuedBits-=6;else if(t.queuedBits>0)for(t.queue<<=6-t.queuedBits,t.queuedBits=6;t.queuedBits>=6;)n(ki[t.queue>>t.queuedBits-6&63]),t.queuedBits-=6}function Ni(e,t,n){let r=ji[e];if(r>-1)for(t.queue=t.queue<<6|r,t.queuedBits+=6;t.queuedBits>=8;)n(t.queue>>t.queuedBits-8&255),t.queuedBits-=8;else if(r===-2)return;else throw Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`)}function Pi(e){let t=[],n=e=>{t.push(String.fromCodePoint(e))},r={utf8seq:0,codepoint:0},i={queue:0,queuedBits:0},a=e=>{Li(e,r,n)};for(let t=0;t<e.length;t+=1)Ni(e.charCodeAt(t),i,a);return t.join(``)}function Fi(e,t){if(e<=127){t(e);return}else if(e<=2047){t(192|e>>6),t(128|e&63);return}else if(e<=65535){t(224|e>>12),t(128|e>>6&63),t(128|e&63);return}else if(e<=1114111){t(240|e>>18),t(128|e>>12&63),t(128|e>>6&63),t(128|e&63);return}throw Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`)}function Ii(e,t){for(let n=0;n<e.length;n+=1){let r=e.charCodeAt(n);if(r>55295&&r<=56319){let t=(r-55296)*1024&65535;r=(e.charCodeAt(n+1)-56320&65535|t)+65536,n+=1}Fi(r,t)}}function Li(e,t,n){if(t.utf8seq===0){if(e<=127){n(e);return}for(let n=1;n<6;n+=1)if(!(e>>7-n&1)){t.utf8seq=n;break}if(t.utf8seq===2)t.codepoint=e&31;else if(t.utf8seq===3)t.codepoint=e&15;else if(t.utf8seq===4)t.codepoint=e&7;else throw Error(`Invalid UTF-8 sequence`);--t.utf8seq}else if(t.utf8seq>0){if(e<=127)throw Error(`Invalid UTF-8 sequence`);t.codepoint=t.codepoint<<6|e&63,--t.utf8seq,t.utf8seq===0&&n(t.codepoint)}}function Ri(e){let t=[],n={queue:0,queuedBits:0},r=e=>{t.push(e)};for(let t=0;t<e.length;t+=1)Ni(e.charCodeAt(t),n,r);return new Uint8Array(t)}function zi(e){let t=[];return Ii(e,e=>t.push(e)),new Uint8Array(t)}function Bi(e){let t=[],n={queue:0,queuedBits:0},r=e=>{t.push(e)};return e.forEach(e=>Mi(e,n,r)),Mi(null,n,r),t.join(``)}function Vi(e){return Math.round(Date.now()/1e3)+e}function Hi(){return Symbol(`auth-callback`)}var N=()=>typeof window<`u`&&typeof document<`u`,Ui={tested:!1,writable:!1},Wi=()=>{if(!N())return!1;try{if(typeof globalThis.localStorage!=`object`)return!1}catch{return!1}if(Ui.tested)return Ui.writable;let e=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(e,e),globalThis.localStorage.removeItem(e),Ui.tested=!0,Ui.writable=!0}catch{Ui.tested=!0,Ui.writable=!1}return Ui.writable};function Gi(e){let t={},n=new URL(e);if(n.hash&&n.hash[0]===`#`)try{new URLSearchParams(n.hash.substring(1)).forEach((e,n)=>{t[n]=e})}catch{}return n.searchParams.forEach((e,n)=>{t[n]=e}),t}var Ki=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),qi=e=>typeof e==`object`&&!!e&&`status`in e&&`ok`in e&&`json`in e&&typeof e.json==`function`,Ji=async(e,t,n)=>{await e.setItem(t,JSON.stringify(n))},Yi=async(e,t)=>{let n=await e.getItem(t);if(!n)return null;try{return JSON.parse(n)}catch{return null}},P=async(e,t)=>{await e.removeItem(t)},Xi=class e{constructor(){this.promise=new e.promiseConstructor((e,t)=>{this.resolve=e,this.reject=t})}};Xi.promiseConstructor=Promise;function Zi(e){let t=e.split(`.`);if(t.length!==3)throw new Oi(`Invalid JWT structure`);for(let e=0;e<t.length;e++)if(!pi.test(t[e]))throw new Oi(`JWT not in base64url format`);return{header:JSON.parse(Pi(t[0])),payload:JSON.parse(Pi(t[1])),signature:Ri(t[2]),raw:{header:t[0],payload:t[1]}}}async function Qi(e){return await new Promise(t=>{setTimeout(()=>t(null),e)})}function $i(e,t){return new Promise((n,r)=>{(async()=>{for(let i=0;i<1/0;i++)try{let r=await e(i);if(!t(i,null,r)){n(r);return}}catch(e){if(!t(i,e)){r(e);return}}})()})}function F(e){return(`0`+e.toString(16)).substr(-2)}function I(){let e=new Uint32Array(56);if(typeof crypto>`u`){let e=``;for(let t=0;t<56;t++)e+=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~`.charAt(Math.floor(Math.random()*66));return e}return crypto.getRandomValues(e),Array.from(e,F).join(``)}async function ea(e){let t=new TextEncoder().encode(e),n=await crypto.subtle.digest(`SHA-256`,t),r=new Uint8Array(n);return Array.from(r).map(e=>String.fromCharCode(e)).join(``)}async function ta(e){if(!(typeof crypto<`u`&&crypto.subtle!==void 0&&typeof TextEncoder<`u`))return console.warn(`WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.`),e;let t=await ea(e);return btoa(t).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=+$/,``)}async function L(e,t,n=!1){let r=I(),i=r;n&&(i+=`/recovery`),await Ji(e,`${t}-code-verifier`,i);let a=await ta(r);return[a,r===a?`plain`:`s256`]}var na=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function ra(e){let t=e.headers.get(di);if(!t||!t.match(na))return null;try{return new Date(`${t}T00:00:00.0Z`)}catch{return null}}function ia(e){if(!e)throw Error(`Missing exp claim`);if(e<=Math.floor(Date.now()/1e3))throw Error(`JWT has expired`)}function aa(e){switch(e){case`RS256`:return{name:`RSASSA-PKCS1-v1_5`,hash:{name:`SHA-256`}};case`ES256`:return{name:`ECDSA`,namedCurve:`P-256`,hash:{name:`SHA-256`}};default:throw Error(`Invalid alg claim`)}}var oa=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function sa(e){if(!oa.test(e))throw Error(`@supabase/auth-js: Expected parameter to be UUID but is not`)}function ca(e){if(!e.passkey)throw Error("@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).")}function la(){return new Proxy({},{get:(e,t)=>{if(t===`__isUserNotAvailableProxy`)return!0;if(typeof t==`symbol`){let e=t.toString();if(e===`Symbol(Symbol.toPrimitive)`||e===`Symbol(Symbol.toStringTag)`||e===`Symbol(util.inspect.custom)`)return}throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${t}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,t)=>{throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,t)=>{throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function ua(e,t){return new Proxy(e,{get:(e,n,r)=>{if(n===`__isInsecureUserWarningProxy`)return!0;if(typeof n==`symbol`){let t=n.toString();if(t===`Symbol(Symbol.toPrimitive)`||t===`Symbol(Symbol.toStringTag)`||t===`Symbol(util.inspect.custom)`||t===`Symbol(nodejs.util.inspect.custom)`)return Reflect.get(e,n,r)}return!t.value&&typeof n==`string`&&(console.warn(`Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.`),t.value=!0),Reflect.get(e,n,r)}})}function da(e){return JSON.parse(JSON.stringify(e))}var fa=e=>{if(typeof e==`object`&&e){let t=e;if(typeof t.msg==`string`)return t.msg;if(typeof t.message==`string`)return t.message;if(typeof t.error_description==`string`)return t.error_description;if(typeof t.error==`string`)return t.error}return JSON.stringify(e)},pa=[502,503,504,520,521,522,523,524,530];async function ma(e){if(!qi(e))throw new Ti(fa(e),0);if(pa.includes(e.status))throw new Ti(fa(e),e.status);let t;try{t=await e.json()}catch(e){throw new _i(fa(e),e)}let n,r=ra(e);if(r&&r.getTime()>=fi[`2024-01-01`].timestamp&&typeof t==`object`&&t&&typeof t.code==`string`?n=t.code:typeof t==`object`&&t&&typeof t.error_code==`string`&&(n=t.error_code),!n){if(typeof t==`object`&&t&&typeof t.weak_password==`object`&&t.weak_password&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.reasons.reduce((e,t)=>e&&typeof t==`string`,!0))throw new Di(fa(t),e.status,t.weak_password.reasons)}else if(n===`weak_password`)throw new Di(fa(t),e.status,t.weak_password?.reasons||[]);else if(n===`session_not_found`)throw new M;throw new hi(fa(t),e.status||500,n)}var ha=(e,t,n,r)=>{let i={method:e,headers:t?.headers||{}};return e===`GET`?i:(i.headers=Object.assign({"Content-Type":`application/json;charset=UTF-8`},t?.headers),i.body=JSON.stringify(r),Object.assign(Object.assign({},i),n))};async function R(e,t,n,r){let i=Object.assign({},r?.headers);i[`X-Supabase-Api-Version`]||(i[di]=fi[`2024-01-01`].name),r?.jwt&&(i.Authorization=`Bearer ${r.jwt}`);let a=r?.query??{};r?.redirectTo&&(a.redirect_to=r.redirectTo);let o=await ga(e,t,n+(Object.keys(a).length?`?`+new URLSearchParams(a).toString():``),{headers:i,noResolveJson:r?.noResolveJson},{},r?.body);return r?.xform?r?.xform(o):{data:Object.assign({},o),error:null}}async function ga(e,t,n,r,i,a){let o=ha(t,r,i,a),s;try{s=await e(n,Object.assign({},o))}catch(e){throw console.error(e),new Ti(fa(e),0)}if(s.ok||await ma(s),r?.noResolveJson)return s;try{return await s.json()}catch(e){await ma(e)}}function _a(e){let t=null;Sa(e)&&(t=Object.assign({},e),e.expires_at||(t.expires_at=Vi(e.expires_in)));let n=e.user??(typeof e?.id==`string`?e:null);return{data:{session:t,user:n},error:null}}function va(e){let t=_a(e);return!t.error&&e.weak_password&&typeof e.weak_password==`object`&&Array.isArray(e.weak_password.reasons)&&e.weak_password.reasons.length&&e.weak_password.message&&typeof e.weak_password.message==`string`&&e.weak_password.reasons.reduce((e,t)=>e&&typeof t==`string`,!0)&&(t.data.weak_password=e.weak_password),t}function z(e){return{data:{user:e.user??e},error:null}}function ya(e){return{data:e,error:null}}function ba(e){let{action_link:t,email_otp:n,hashed_token:r,redirect_to:i,verification_type:a}=e,o=Ct(e,[`action_link`,`email_otp`,`hashed_token`,`redirect_to`,`verification_type`]);return{data:{properties:{action_link:t,email_otp:n,hashed_token:r,redirect_to:i,verification_type:a},user:Object.assign({},o)},error:null}}function xa(e){return e}function Sa(e){return!!e.access_token&&!!e.refresh_token&&!!e.expires_in}var Ca=[`global`,`local`,`others`],wa=class{_encodePathSegment(e){if(e===`.`||e===`..`)throw new mi(`Invalid path segment`);return encodeURIComponent(e)}constructor({url:e=``,headers:t={},fetch:n,experimental:r}){this.url=e,this.headers=t,this.fetch=Ki(n),this.experimental=r??{},this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)},this.customProviders={listProviders:this._listCustomProviders.bind(this),createProvider:this._createCustomProvider.bind(this),getProvider:this._getCustomProvider.bind(this),updateProvider:this._updateCustomProvider.bind(this),deleteProvider:this._deleteCustomProvider.bind(this)},this.passkey={listPasskeys:this._adminListPasskeys.bind(this),deletePasskey:this._adminDeletePasskey.bind(this)}}async signOut(e,t=Ca[0]){if(Ca.indexOf(t)<0)throw Error(`@supabase/auth-js: Parameter scope must be one of ${Ca.join(`, `)}`);try{return await R(this.fetch,`POST`,`${this.url}/logout?scope=${t}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(e){if(A(e))return{data:null,error:e};throw e}}async inviteUserByEmail(e,t={}){try{return await R(this.fetch,`POST`,`${this.url}/invite`,{body:{email:e,data:t.data},headers:this.headers,redirectTo:t.redirectTo,xform:z})}catch(e){if(A(e))return{data:{user:null},error:e};throw e}}async generateLink(e){try{let{options:t}=e,n=Ct(e,[`options`]),r=Object.assign(Object.assign({},n),t);return`newEmail`in n&&(r.new_email=n?.newEmail,delete r.newEmail),await R(this.fetch,`POST`,`${this.url}/admin/generate_link`,{body:r,headers:this.headers,xform:ba,redirectTo:t?.redirectTo})}catch(e){if(A(e))return{data:{properties:null,user:null},error:e};throw e}}async createUser(e){try{return await R(this.fetch,`POST`,`${this.url}/admin/users`,{body:e,headers:this.headers,xform:z})}catch(e){if(A(e))return{data:{user:null},error:e};throw e}}async listUsers(e){try{let t={nextPage:null,lastPage:0,total:0},n=await R(this.fetch,`GET`,`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(e?.page)?.toString()??``,per_page:(e?.perPage)?.toString()??``},xform:xa});if(n.error)throw n.error;let r=await n.json(),i=n.headers.get(`x-total-count`)??0,a=n.headers.get(`link`)?.split(`,`)??[];return a.length>0&&(a.forEach(e=>{let n=parseInt(e.split(`;`)[0].split(`=`)[1].substring(0,1)),r=JSON.parse(e.split(`;`)[1].split(`=`)[1]);t[`${r}Page`]=n}),t.total=parseInt(i)),{data:Object.assign(Object.assign({},r),t),error:null}}catch(e){if(A(e))return{data:{users:[]},error:e};throw e}}async getUserById(e){sa(e);try{return await R(this.fetch,`GET`,`${this.url}/admin/users/${e}`,{headers:this.headers,xform:z})}catch(e){if(A(e))return{data:{user:null},error:e};throw e}}async updateUserById(e,t){sa(e);try{return await R(this.fetch,`PUT`,`${this.url}/admin/users/${e}`,{body:t,headers:this.headers,xform:z})}catch(e){if(A(e))return{data:{user:null},error:e};throw e}}async deleteUser(e,t=!1){sa(e);try{return await R(this.fetch,`DELETE`,`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:t},xform:z})}catch(e){if(A(e))return{data:{user:null},error:e};throw e}}async _listFactors(e){sa(e.userId);try{let{data:t,error:n}=await R(this.fetch,`GET`,`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:e=>({data:{factors:e},error:null})});return{data:t,error:n}}catch(e){if(A(e))return{data:null,error:e};throw e}}async _deleteFactor(e){sa(e.userId),sa(e.id);try{return{data:await R(this.fetch,`DELETE`,`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(e){if(A(e))return{data:null,error:e};throw e}}async _listOAuthClients(e){try{let t={nextPage:null,lastPage:0,total:0},n=await R(this.fetch,`GET`,`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(e?.page)?.toString()??``,per_page:(e?.perPage)?.toString()??``},xform:xa});if(n.error)throw n.error;let r=await n.json(),i=n.headers.get(`x-total-count`)??0,a=n.headers.get(`link`)?.split(`,`)??[];return a.length>0&&(a.forEach(e=>{let n=parseInt(e.split(`;`)[0].split(`=`)[1].substring(0,1)),r=JSON.parse(e.split(`;`)[1].split(`=`)[1]);t[`${r}Page`]=n}),t.total=parseInt(i)),{data:Object.assign(Object.assign({},r),t),error:null}}catch(e){if(A(e))return{data:{clients:[]},error:e};throw e}}async _createOAuthClient(e){try{return await R(this.fetch,`POST`,`${this.url}/admin/oauth/clients`,{body:e,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(A(e))return{data:null,error:e};throw e}}async _getOAuthClient(e){try{let t=this._encodePathSegment(e);return await R(this.fetch,`GET`,`${this.url}/admin/oauth/clients/${t}`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(A(e))return{data:null,error:e};throw e}}async _updateOAuthClient(e,t){try{let n=this._encodePathSegment(e);return await R(this.fetch,`PUT`,`${this.url}/admin/oauth/clients/${n}`,{body:t,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(A(e))return{data:null,error:e};throw e}}async _deleteOAuthClient(e){try{let t=this._encodePathSegment(e);return await R(this.fetch,`DELETE`,`${this.url}/admin/oauth/clients/${t}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(e){if(A(e))return{data:null,error:e};throw e}}async _regenerateOAuthClientSecret(e){try{let t=this._encodePathSegment(e);return await R(this.fetch,`POST`,`${this.url}/admin/oauth/clients/${t}/regenerate_secret`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(A(e))return{data:null,error:e};throw e}}async _listCustomProviders(e){try{let t={};return e?.type&&(t.type=e.type),await R(this.fetch,`GET`,`${this.url}/admin/custom-providers`,{headers:this.headers,query:t,xform:e=>({data:{providers:e?.providers??[]},error:null})})}catch(e){if(A(e))return{data:{providers:[]},error:e};throw e}}async _createCustomProvider(e){try{return await R(this.fetch,`POST`,`${this.url}/admin/custom-providers`,{body:e,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(A(e))return{data:null,error:e};throw e}}async _getCustomProvider(e){try{let t=this._encodePathSegment(e);return await R(this.fetch,`GET`,`${this.url}/admin/custom-providers/${t}`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(A(e))return{data:null,error:e};throw e}}async _updateCustomProvider(e,t){try{let n=this._encodePathSegment(e);return await R(this.fetch,`PUT`,`${this.url}/admin/custom-providers/${n}`,{body:t,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(A(e))return{data:null,error:e};throw e}}async _deleteCustomProvider(e){try{let t=this._encodePathSegment(e);return await R(this.fetch,`DELETE`,`${this.url}/admin/custom-providers/${t}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(e){if(A(e))return{data:null,error:e};throw e}}async _adminListPasskeys(e){ca(this.experimental),sa(e.userId);try{return await R(this.fetch,`GET`,`${this.url}/admin/users/${e.userId}/passkeys`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(A(e))return{data:null,error:e};throw e}}async _adminDeletePasskey(e){ca(this.experimental),sa(e.userId),sa(e.passkeyId);try{return await R(this.fetch,`DELETE`,`${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(e){if(A(e))return{data:null,error:e};throw e}}};function Ta(e={}){return{getItem:t=>e[t]||null,setItem:(t,n)=>{e[t]=n},removeItem:t=>{delete e[t]}}}var Ea={debug:!!(globalThis&&Wi()&&globalThis.localStorage&&globalThis.localStorage.getItem(`supabase.gotrue-js.locks.debug`)===`true`)},Da=class extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}},Oa=class extends Da{};async function B(e,t,n){Ea.debug&&console.log(`@supabase/gotrue-js: navigatorLock: acquire lock`,e,t);let r=new globalThis.AbortController,i;t>0&&(i=setTimeout(()=>{r.abort(),Ea.debug&&console.log(`@supabase/gotrue-js: navigatorLock acquire timed out`,e)},t)),await Promise.resolve();try{return await globalThis.navigator.locks.request(e,t===0?{mode:`exclusive`,ifAvailable:!0}:{mode:`exclusive`,signal:r.signal},async r=>{if(r){clearTimeout(i),Ea.debug&&console.log(`@supabase/gotrue-js: navigatorLock: acquired`,e,r.name);try{return await n()}finally{Ea.debug&&console.log(`@supabase/gotrue-js: navigatorLock: released`,e,r.name)}}else if(t===0)throw Ea.debug&&console.log(`@supabase/gotrue-js: navigatorLock: not immediately available`,e),new Oa(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);else{if(Ea.debug)try{let e=await globalThis.navigator.locks.query();console.log(`@supabase/gotrue-js: Navigator LockManager state`,JSON.stringify(e,null,`  `))}catch(e){console.warn(`@supabase/gotrue-js: Error when querying Navigator LockManager state`,e)}return console.warn(`@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request`),clearTimeout(i),await n()}})}catch(a){if(t>0&&clearTimeout(i),typeof a==`object`&&a&&`name`in a&&a.name===`AbortError`&&t>0){if(r.signal.aborted)return Ea.debug&&console.log(`@supabase/gotrue-js: navigatorLock: acquire timeout, recovering by stealing lock`,e),console.warn(`@supabase/gotrue-js: Lock "${e}" was not released within ${t}ms. This may indicate an orphaned lock from a component unmount (e.g., React Strict Mode). Forcefully acquiring the lock to recover.`),await Promise.resolve().then(()=>globalThis.navigator.locks.request(e,{mode:`exclusive`,steal:!0},async t=>{if(t){Ea.debug&&console.log(`@supabase/gotrue-js: navigatorLock: recovered (stolen)`,e,t.name);try{return await n()}finally{Ea.debug&&console.log(`@supabase/gotrue-js: navigatorLock: released (stolen)`,e,t.name)}}else return console.warn(`@supabase/gotrue-js: Navigator LockManager returned null lock even with steal: true`),await n()}));throw Ea.debug&&console.log(`@supabase/gotrue-js: navigatorLock: lock was stolen by another request`,e),new Oa(`Lock "${e}" was released because another request stole it`)}throw a}}function ka(){if(typeof globalThis!=`object`)try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<`u`&&(self.globalThis=self)}}function Aa(e){if(!/^0x[a-fA-F0-9]{40}$/.test(e))throw Error(`@supabase/auth-js: Address "${e}" is invalid.`);return e.toLowerCase()}function ja(e){return parseInt(e,16)}function Ma(e){let t=new TextEncoder().encode(e);return`0x`+Array.from(t,e=>e.toString(16).padStart(2,`0`)).join(``)}function Na(e){let{chainId:t,domain:n,expirationTime:r,issuedAt:i=new Date,nonce:a,notBefore:o,requestId:s,resources:c,scheme:l,uri:u,version:d}=e;if(!Number.isInteger(t))throw Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${t}`);if(!n)throw Error(`@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.`);if(a&&a.length<8)throw Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`);if(!u)throw Error(`@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.`);if(d!==`1`)throw Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${d}`);if(e.statement?.includes(`
`))throw Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${e.statement}`);let f=Aa(e.address),p=`${l?`${l}://${n}`:n} wants you to sign in with your Ethereum account:\n${f}\n\n${e.statement?`${e.statement}\n`:``}`,m=`URI: ${u}\nVersion: ${d}\nChain ID: ${t}${a?`\nNonce: ${a}`:``}\nIssued At: ${i.toISOString()}`;if(r&&(m+=`\nExpiration Time: ${r.toISOString()}`),o&&(m+=`\nNot Before: ${o.toISOString()}`),s&&(m+=`\nRequest ID: ${s}`),c){let e=`
Resources:`;for(let t of c){if(!t||typeof t!=`string`)throw Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${t}`);e+=`\n- ${t}`}m+=e}return`${p}\n${m}`}var V=class extends Error{constructor({message:e,code:t,cause:n,name:r}){super(e,{cause:n}),this.__isWebAuthnError=!0,this.name=r??(n instanceof Error?n.name:void 0)??`Unknown Error`,this.code=t}toJSON(){return{name:this.name,message:this.message,code:this.code}}},Pa=class extends V{constructor(e,t){super({code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:t,message:e}),this.name=`WebAuthnUnknownError`,this.originalError=t}};function Fa({error:e,options:t}){let{publicKey:n}=t;if(!n)throw Error(`options was missing required publicKey property`);if(e.name===`AbortError`){if(t.signal instanceof AbortSignal)return new V({message:`Registration ceremony was sent an abort signal`,code:`ERROR_CEREMONY_ABORTED`,cause:e})}else if(e.name===`ConstraintError`){if(n.authenticatorSelection?.requireResidentKey===!0)return new V({message:`Discoverable credentials were required but no available authenticator supported it`,code:`ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT`,cause:e});if(t.mediation===`conditional`&&n.authenticatorSelection?.userVerification===`required`)return new V({message:`User verification was required during automatic registration but it could not be performed`,code:`ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE`,cause:e});if(n.authenticatorSelection?.userVerification===`required`)return new V({message:`User verification was required but no available authenticator supported it`,code:`ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT`,cause:e})}else if(e.name===`InvalidStateError`)return new V({message:`The authenticator was previously registered`,code:`ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED`,cause:e});else if(e.name===`NotAllowedError`)return new V({message:e.message,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e});else if(e.name===`NotSupportedError`)return n.pubKeyCredParams.filter(e=>e.type===`public-key`).length===0?new V({message:`No entry in pubKeyCredParams was of type "public-key"`,code:`ERROR_MALFORMED_PUBKEYCREDPARAMS`,cause:e}):new V({message:`No available authenticator supported any of the specified pubKeyCredParams algorithms`,code:`ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG`,cause:e});else if(e.name===`SecurityError`){let t=window.location.hostname;if(!Ha(t))return new V({message:`${window.location.hostname} is an invalid domain`,code:`ERROR_INVALID_DOMAIN`,cause:e});if(n.rp.id!==t)return new V({message:`The RP ID "${n.rp.id}" is invalid for this domain`,code:`ERROR_INVALID_RP_ID`,cause:e})}else if(e.name===`TypeError`){if(n.user.id.byteLength<1||n.user.id.byteLength>64)return new V({message:`User ID was not between 1 and 64 characters`,code:`ERROR_INVALID_USER_ID_LENGTH`,cause:e})}else if(e.name===`UnknownError`)return new V({message:`The authenticator was unable to process the specified options, or could not create a new credential`,code:`ERROR_AUTHENTICATOR_GENERAL_ERROR`,cause:e});return new V({message:`a Non-Webauthn related error has occurred`,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e})}function Ia({error:e,options:t}){let{publicKey:n}=t;if(!n)throw Error(`options was missing required publicKey property`);if(e.name===`AbortError`){if(t.signal instanceof AbortSignal)return new V({message:`Authentication ceremony was sent an abort signal`,code:`ERROR_CEREMONY_ABORTED`,cause:e})}else if(e.name===`NotAllowedError`)return new V({message:e.message,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e});else if(e.name===`SecurityError`){let t=window.location.hostname;if(!Ha(t))return new V({message:`${window.location.hostname} is an invalid domain`,code:`ERROR_INVALID_DOMAIN`,cause:e});if(n.rpId!==t)return new V({message:`The RP ID "${n.rpId}" is invalid for this domain`,code:`ERROR_INVALID_RP_ID`,cause:e})}else if(e.name===`UnknownError`)return new V({message:`The authenticator was unable to process the specified options, or could not create a new assertion signature`,code:`ERROR_AUTHENTICATOR_GENERAL_ERROR`,cause:e});return new V({message:`a Non-Webauthn related error has occurred`,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e})}var La=new class{createNewAbortSignal(){if(this.controller){let e=Error(`Cancelling existing WebAuthn API call for new one`);e.name=`AbortError`,this.controller.abort(e)}let e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){let e=Error(`Manually cancelling existing WebAuthn API call`);e.name=`AbortError`,this.controller.abort(e),this.controller=void 0}}};function Ra(e){if(!e)throw Error(`Credential creation options are required`);if(typeof PublicKeyCredential<`u`&&`parseCreationOptionsFromJSON`in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON==`function`)return PublicKeyCredential.parseCreationOptionsFromJSON(e);let{challenge:t,user:n,excludeCredentials:r}=e,i=Ct(e,[`challenge`,`user`,`excludeCredentials`]),a=Ri(t).buffer,o=Object.assign(Object.assign({},n),{id:Ri(n.id).buffer}),s=Object.assign(Object.assign({},i),{challenge:a,user:o});if(r&&r.length>0){s.excludeCredentials=Array(r.length);for(let e=0;e<r.length;e++){let t=r[e];s.excludeCredentials[e]=Object.assign(Object.assign({},t),{id:Ri(t.id).buffer,type:t.type||`public-key`,transports:t.transports})}}return s}function za(e){if(!e)throw Error(`Credential request options are required`);if(typeof PublicKeyCredential<`u`&&`parseRequestOptionsFromJSON`in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON==`function`)return PublicKeyCredential.parseRequestOptionsFromJSON(e);let{challenge:t,allowCredentials:n}=e,r=Ct(e,[`challenge`,`allowCredentials`]),i=Ri(t).buffer,a=Object.assign(Object.assign({},r),{challenge:i});if(n&&n.length>0){a.allowCredentials=Array(n.length);for(let e=0;e<n.length;e++){let t=n[e];a.allowCredentials[e]=Object.assign(Object.assign({},t),{id:Ri(t.id).buffer,type:t.type||`public-key`,transports:t.transports})}}return a}function Ba(e){if(`toJSON`in e&&typeof e.toJSON==`function`)return e.toJSON();let t=e;return{id:e.id,rawId:e.id,response:{attestationObject:Bi(new Uint8Array(e.response.attestationObject)),clientDataJSON:Bi(new Uint8Array(e.response.clientDataJSON))},type:`public-key`,clientExtensionResults:e.getClientExtensionResults(),authenticatorAttachment:t.authenticatorAttachment??void 0}}function Va(e){if(`toJSON`in e&&typeof e.toJSON==`function`)return e.toJSON();let t=e,n=e.getClientExtensionResults(),r=e.response;return{id:e.id,rawId:e.id,response:{authenticatorData:Bi(new Uint8Array(r.authenticatorData)),clientDataJSON:Bi(new Uint8Array(r.clientDataJSON)),signature:Bi(new Uint8Array(r.signature)),userHandle:r.userHandle?Bi(new Uint8Array(r.userHandle)):void 0},type:`public-key`,clientExtensionResults:n,authenticatorAttachment:t.authenticatorAttachment??void 0}}function Ha(e){return e===`localhost`||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e)}function Ua(){return!!(N()&&`PublicKeyCredential`in window&&window.PublicKeyCredential&&`credentials`in navigator&&typeof(navigator==null?void 0:navigator.credentials)?.create==`function`&&typeof(navigator==null?void 0:navigator.credentials)?.get==`function`)}async function Wa(e){try{let t=await navigator.credentials.create(e);return t?t instanceof PublicKeyCredential?{data:t,error:null}:{data:null,error:new Pa(`Browser returned unexpected credential type`,t)}:{data:null,error:new Pa(`Empty credential response`,t)}}catch(t){return{data:null,error:Fa({error:t,options:e})}}}async function Ga(e){try{let t=await navigator.credentials.get(e);return t?t instanceof PublicKeyCredential?{data:t,error:null}:{data:null,error:new Pa(`Browser returned unexpected credential type`,t)}:{data:null,error:new Pa(`Empty credential response`,t)}}catch(t){return{data:null,error:Ia({error:t,options:e})}}}var Ka={hints:[`security-key`],authenticatorSelection:{authenticatorAttachment:`cross-platform`,requireResidentKey:!1,userVerification:`preferred`,residentKey:`discouraged`},attestation:`direct`},qa={userVerification:`preferred`,hints:[`security-key`],attestation:`direct`};function Ja(...e){let t=e=>typeof e==`object`&&!!e&&!Array.isArray(e),n=e=>e instanceof ArrayBuffer||ArrayBuffer.isView(e),r={};for(let i of e)if(i)for(let e in i){let a=i[e];if(a!==void 0)if(Array.isArray(a))r[e]=a;else if(n(a))r[e]=a;else if(t(a)){let n=r[e];t(n)?r[e]=Ja(n,a):r[e]=Ja(a)}else r[e]=a}return r}function Ya(e,t){return Ja(Ka,e,t||{})}function Xa(e,t){return Ja(qa,e,t||{})}var Za=class{constructor(e){this.client=e,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(e){return this.client.mfa.enroll(Object.assign(Object.assign({},e),{factorType:`webauthn`}))}async _challenge({factorId:e,webauthn:t,friendlyName:n,signal:r},i){try{let{data:a,error:o}=await this.client.mfa.challenge({factorId:e,webauthn:t});if(!a)return{data:null,error:o};let s=r??La.createNewAbortSignal();if(a.webauthn.type===`create`){let{user:e}=a.webauthn.credential_options.publicKey;if(!e.name){let t=n;if(t)e.name=`${e.id}:${t}`;else{let t=(await this.client.getUser()).data.user,n=t?.user_metadata?.name||t?.email||t?.id||`User`;e.name=`${e.id}:${n}`}}e.displayName||=e.name}switch(a.webauthn.type){case`create`:{let{data:t,error:n}=await Wa({publicKey:Ya(a.webauthn.credential_options.publicKey,i?.create),signal:s});return t?{data:{factorId:e,challengeId:a.id,webauthn:{type:a.webauthn.type,credential_response:t}},error:null}:{data:null,error:n}}case`request`:{let t=Xa(a.webauthn.credential_options.publicKey,i?.request),{data:n,error:r}=await Ga(Object.assign(Object.assign({},a.webauthn.credential_options),{publicKey:t,signal:s}));return n?{data:{factorId:e,challengeId:a.id,webauthn:{type:a.webauthn.type,credential_response:n}},error:null}:{data:null,error:r}}}}catch(e){return A(e)?{data:null,error:e}:{data:null,error:new _i(`Unexpected error in challenge`,e)}}}async _verify({challengeId:e,factorId:t,webauthn:n}){return this.client.mfa.verify({factorId:t,challengeId:e,webauthn:n})}async _authenticate({factorId:e,webauthn:{rpId:t=typeof window<`u`?window.location.hostname:void 0,rpOrigins:n=typeof window<`u`?[window.location.origin]:void 0,signal:r}={}},i){if(!t)return{data:null,error:new mi(`rpId is required for WebAuthn authentication`)};try{if(!Ua())return{data:null,error:new _i(`Browser does not support WebAuthn`,null)};let{data:a,error:o}=await this.challenge({factorId:e,webauthn:{rpId:t,rpOrigins:n},signal:r},{request:i});if(!a)return{data:null,error:o};let{webauthn:s}=a;return this._verify({factorId:e,challengeId:a.challengeId,webauthn:{type:s.type,rpId:t,rpOrigins:n,credential_response:s.credential_response}})}catch(e){return A(e)?{data:null,error:e}:{data:null,error:new _i(`Unexpected error in authenticate`,e)}}}async _register({friendlyName:e,webauthn:{rpId:t=typeof window<`u`?window.location.hostname:void 0,rpOrigins:n=typeof window<`u`?[window.location.origin]:void 0,signal:r}={}},i){if(!t)return{data:null,error:new mi(`rpId is required for WebAuthn registration`)};try{if(!Ua())return{data:null,error:new _i(`Browser does not support WebAuthn`,null)};let{data:a,error:o}=await this._enroll({friendlyName:e});if(!a)return await this.client.mfa.listFactors().then(t=>t.data?.all.find(t=>t.factor_type===`webauthn`&&t.friendly_name===e&&t.status!==`unverified`)).then(e=>e?this.client.mfa.unenroll({factorId:e?.id}):void 0),{data:null,error:o};let{data:s,error:c}=await this._challenge({factorId:a.id,friendlyName:a.friendly_name,webauthn:{rpId:t,rpOrigins:n},signal:r},{create:i});return s?this._verify({factorId:a.id,challengeId:s.challengeId,webauthn:{rpId:t,rpOrigins:n,type:s.webauthn.type,credential_response:s.webauthn.credential_response}}):{data:null,error:c}}catch(e){return A(e)?{data:null,error:e}:{data:null,error:new _i(`Unexpected error in register`,e)}}}};ka();var Qa={url:ci,storageKey:li,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:ui,flowType:`implicit`,debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:5e3,skipAutoInitialize:!1,experimental:{}};async function $a(e,t,n){return await n()}var eo={},to=class e{get jwks(){return eo[this.storageKey]?.jwks??{keys:[]}}set jwks(e){eo[this.storageKey]=Object.assign(Object.assign({},eo[this.storageKey]),{jwks:e})}get jwks_cached_at(){return eo[this.storageKey]?.cachedAt??-(2**53-1)}set jwks_cached_at(e){eo[this.storageKey]=Object.assign(Object.assign({},eo[this.storageKey]),{cachedAt:e})}constructor(t){var n;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;let r=Object.assign(Object.assign({},Qa),t);if(this.storageKey=r.storageKey,this.instanceID=e.nextInstanceID[this.storageKey]??0,e.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!r.debug,typeof r.debug==`function`&&(this.logger=r.debug),this.instanceID>0&&N()){let e=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(e),this.logDebugMessages&&console.trace(e)}if(this.persistSession=r.persistSession,this.autoRefreshToken=r.autoRefreshToken,this.experimental=r.experimental??{},this.admin=new wa({url:r.url,headers:r.headers,fetch:r.fetch,experimental:this.experimental}),this.url=r.url,this.headers=r.headers,this.fetch=Ki(r.fetch),this.lock=r.lock||$a,this.detectSessionInUrl=r.detectSessionInUrl,this.flowType=r.flowType,this.hasCustomAuthorizationHeader=r.hasCustomAuthorizationHeader,this.throwOnError=r.throwOnError,this.lockAcquireTimeout=r.lockAcquireTimeout,r.lock?this.lock=r.lock:this.persistSession&&N()&&(globalThis==null?void 0:globalThis.navigator)?.locks?this.lock=B:this.lock=$a,this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=-(2**53-1)),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new Za(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.passkey={startRegistration:this._startPasskeyRegistration.bind(this),verifyRegistration:this._verifyPasskeyRegistration.bind(this),startAuthentication:this._startPasskeyAuthentication.bind(this),verifyAuthentication:this._verifyPasskeyAuthentication.bind(this),list:this._listPasskeys.bind(this),update:this._updatePasskey.bind(this),delete:this._deletePasskey.bind(this)},this.persistSession?(r.storage?this.storage=r.storage:Wi()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=Ta(this.memoryStorage)),r.userStorage&&(this.userStorage=r.userStorage)):(this.memoryStorage={},this.storage=Ta(this.memoryStorage)),N()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(e){console.error(`Failed to create a new BroadcastChannel, multi-tab state changes will not be available`,e)}(n=this.broadcastChannel)==null||n.addEventListener(`message`,async e=>{this._debug(`received broadcast notification from other tab or client`,e);try{await this._notifyAllSubscribers(e.data.event,e.data.session,!1)}catch(e){this._debug(`#broadcastChannel`,`error`,e)}})}r.skipAutoInitialize||this.initialize().catch(e=>{this._debug(`#initialize()`,`error`,e)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(e){if(this.throwOnError&&e&&e.error)throw e.error;return e}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${ai}) ${new Date().toISOString()}`}_debug(...e){return this.logDebugMessages&&this.logger(this._logPrefix(),...e),this}async initialize(){return this.initializePromise||=(async()=>await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()))(),await this.initializePromise}async _initialize(){try{let e={},t=`none`;if(N()&&(e=Gi(window.location.href),this._isImplicitGrantCallback(e)?t=`implicit`:await this._isPKCECallback(e)&&(t=`pkce`)),N()&&this.detectSessionInUrl&&t!==`none`){let{data:n,error:r}=await this._getSessionFromURL(e,t);if(r){if(this._debug(`#_initialize()`,`error detecting session from URL`,r),Si(r)){let e=r.details?.code;if(e===`identity_already_exists`||e===`identity_not_found`||e===`single_identity_not_deletable`)return{error:r}}return{error:r}}let{session:i,redirectType:a}=n;return this._debug(`#_initialize()`,`detected session in URL`,i,`redirect type`,a),await this._saveSession(i),setTimeout(async()=>{a===`recovery`?await this._notifyAllSubscribers(`PASSWORD_RECOVERY`,i):await this._notifyAllSubscribers(`SIGNED_IN`,i)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(e){return A(e)?this._returnResult({error:e}):this._returnResult({error:new _i(`Unexpected error during initialization`,e)})}finally{await this._handleVisibilityChange(),this._debug(`#_initialize()`,`end`)}}async signInAnonymously(e){try{let{data:t,error:n}=await R(this.fetch,`POST`,`${this.url}/signup`,{headers:this.headers,body:{data:e?.options?.data??{},gotrue_meta_security:{captcha_token:e?.options?.captchaToken}},xform:_a});if(n||!t)return this._returnResult({data:{user:null,session:null},error:n});let r=t.session,i=t.user;return t.session&&(await this._saveSession(t.session),await this._notifyAllSubscribers(`SIGNED_IN`,r)),this._returnResult({data:{user:i,session:r},error:null})}catch(e){if(A(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signUp(e){try{let t;if(`email`in e){let{email:n,password:r,options:i}=e,a=null,o=null;this.flowType===`pkce`&&([a,o]=await L(this.storage,this.storageKey)),t=await R(this.fetch,`POST`,`${this.url}/signup`,{headers:this.headers,redirectTo:i?.emailRedirectTo,body:{email:n,password:r,data:i?.data??{},gotrue_meta_security:{captcha_token:i?.captchaToken},code_challenge:a,code_challenge_method:o},xform:_a})}else if(`phone`in e){let{phone:n,password:r,options:i}=e;t=await R(this.fetch,`POST`,`${this.url}/signup`,{headers:this.headers,body:{phone:n,password:r,data:i?.data??{},channel:i?.channel??`sms`,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:_a})}else throw new bi(`You must provide either an email or phone number and a password`);let{data:n,error:r}=t;if(r||!n)return await P(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:r});let i=n.session,a=n.user;return n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers(`SIGNED_IN`,i)),this._returnResult({data:{user:a,session:i},error:null})}catch(e){if(await P(this.storage,`${this.storageKey}-code-verifier`),A(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithPassword(e){try{let t;if(`email`in e){let{email:n,password:r,options:i}=e;t=await R(this.fetch,`POST`,`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:n,password:r,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:va})}else if(`phone`in e){let{phone:n,password:r,options:i}=e;t=await R(this.fetch,`POST`,`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:n,password:r,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:va})}else throw new bi(`You must provide either an email or phone number and a password`);let{data:n,error:r}=t;if(r)return this._returnResult({data:{user:null,session:null},error:r});if(!n||!n.session||!n.user){let e=new yi;return this._returnResult({data:{user:null,session:null},error:e})}return n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers(`SIGNED_IN`,n.session)),this._returnResult({data:Object.assign({user:n.user,session:n.session},n.weak_password?{weakPassword:n.weak_password}:null),error:r})}catch(e){if(A(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithOAuth(e){return await this._handleProviderSignIn(e.provider,{redirectTo:e.options?.redirectTo,scopes:e.options?.scopes,queryParams:e.options?.queryParams,skipBrowserRedirect:e.options?.skipBrowserRedirect})}async exchangeCodeForSession(e){return await this.initializePromise,this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(e))}async signInWithWeb3(e){let{chain:t}=e;switch(t){case`ethereum`:return await this.signInWithEthereum(e);case`solana`:return await this.signInWithSolana(e);default:throw Error(`@supabase/auth-js: Unsupported chain "${t}"`)}}async signInWithEthereum(e){let t,n;if(`message`in e)t=e.message,n=e.signature;else{let{chain:r,wallet:i,statement:a,options:o}=e,s;if(!N()){if(typeof i!=`object`||!o?.url)throw Error(`@supabase/auth-js: Both wallet and url must be specified in non-browser environments.`);s=i}else if(typeof i==`object`)s=i;else{let e=window;if(`ethereum`in e&&typeof e.ethereum==`object`&&`request`in e.ethereum&&typeof e.ethereum.request==`function`)s=e.ethereum;else throw Error(`@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.`)}let c=new URL(o?.url??window.location.href),l=await s.request({method:`eth_requestAccounts`}).then(e=>e).catch(()=>{throw Error(`@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid`)});if(!l||l.length===0)throw Error(`@supabase/auth-js: No accounts available. Please ensure the wallet is connected.`);let u=Aa(l[0]),d=o?.signInWithEthereum?.chainId;d||=ja(await s.request({method:`eth_chainId`})),t=Na({domain:c.host,address:u,statement:a,uri:c.href,version:`1`,chainId:d,nonce:o?.signInWithEthereum?.nonce,issuedAt:o?.signInWithEthereum?.issuedAt??new Date,expirationTime:o?.signInWithEthereum?.expirationTime,notBefore:o?.signInWithEthereum?.notBefore,requestId:o?.signInWithEthereum?.requestId,resources:o?.signInWithEthereum?.resources}),n=await s.request({method:`personal_sign`,params:[Ma(t),u]})}try{let{data:r,error:i}=await R(this.fetch,`POST`,`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:`ethereum`,message:t,signature:n},e.options?.captchaToken?{gotrue_meta_security:{captcha_token:e.options?.captchaToken}}:null),xform:_a});if(i)throw i;if(!r||!r.session||!r.user){let e=new yi;return this._returnResult({data:{user:null,session:null},error:e})}return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers(`SIGNED_IN`,r.session)),this._returnResult({data:Object.assign({},r),error:i})}catch(e){if(A(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithSolana(e){let t,n;if(`message`in e)t=e.message,n=e.signature;else{let{chain:r,wallet:i,statement:a,options:o}=e,s;if(!N()){if(typeof i!=`object`||!o?.url)throw Error(`@supabase/auth-js: Both wallet and url must be specified in non-browser environments.`);s=i}else if(typeof i==`object`)s=i;else{let e=window;if(`solana`in e&&typeof e.solana==`object`&&(`signIn`in e.solana&&typeof e.solana.signIn==`function`||`signMessage`in e.solana&&typeof e.solana.signMessage==`function`))s=e.solana;else throw Error(`@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.`)}let c=new URL(o?.url??window.location.href);if(`signIn`in s&&s.signIn){let e=await s.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},o?.signInWithSolana),{version:`1`,domain:c.host,uri:c.href}),a?{statement:a}:null)),r;if(Array.isArray(e)&&e[0]&&typeof e[0]==`object`)r=e[0];else if(e&&typeof e==`object`&&`signedMessage`in e&&`signature`in e)r=e;else throw Error(`@supabase/auth-js: Wallet method signIn() returned unrecognized value`);if(`signedMessage`in r&&`signature`in r&&(typeof r.signedMessage==`string`||r.signedMessage instanceof Uint8Array)&&r.signature instanceof Uint8Array)t=typeof r.signedMessage==`string`?r.signedMessage:new TextDecoder().decode(r.signedMessage),n=r.signature;else throw Error(`@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields`)}else{if(!(`signMessage`in s)||typeof s.signMessage!=`function`||!(`publicKey`in s)||typeof s!=`object`||!s.publicKey||!(`toBase58`in s.publicKey)||typeof s.publicKey.toBase58!=`function`)throw Error(`@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API`);t=[`${c.host} wants you to sign in with your Solana account:`,s.publicKey.toBase58(),...a?[``,a,``]:[``],`Version: 1`,`URI: ${c.href}`,`Issued At: ${o?.signInWithSolana?.issuedAt??new Date().toISOString()}`,...o?.signInWithSolana?.notBefore?[`Not Before: ${o.signInWithSolana.notBefore}`]:[],...o?.signInWithSolana?.expirationTime?[`Expiration Time: ${o.signInWithSolana.expirationTime}`]:[],...o?.signInWithSolana?.chainId?[`Chain ID: ${o.signInWithSolana.chainId}`]:[],...o?.signInWithSolana?.nonce?[`Nonce: ${o.signInWithSolana.nonce}`]:[],...o?.signInWithSolana?.requestId?[`Request ID: ${o.signInWithSolana.requestId}`]:[],...o?.signInWithSolana?.resources?.length?[`Resources`,...o.signInWithSolana.resources.map(e=>`- ${e}`)]:[]].join(`
`);let e=await s.signMessage(new TextEncoder().encode(t),`utf8`);if(!e||!(e instanceof Uint8Array))throw Error(`@supabase/auth-js: Wallet signMessage() API returned an recognized value`);n=e}}try{let{data:r,error:i}=await R(this.fetch,`POST`,`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:`solana`,message:t,signature:Bi(n)},e.options?.captchaToken?{gotrue_meta_security:{captcha_token:e.options?.captchaToken}}:null),xform:_a});if(i)throw i;if(!r||!r.session||!r.user){let e=new yi;return this._returnResult({data:{user:null,session:null},error:e})}return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers(`SIGNED_IN`,r.session)),this._returnResult({data:Object.assign({},r),error:i})}catch(e){if(A(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async _exchangeCodeForSession(e){let[t,n]=(await Yi(this.storage,`${this.storageKey}-code-verifier`)??``).split(`/`);try{if(!t&&this.flowType===`pkce`)throw new wi;let{data:r,error:i}=await R(this.fetch,`POST`,`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:t},xform:_a});if(await P(this.storage,`${this.storageKey}-code-verifier`),i)throw i;if(!r||!r.session||!r.user){let e=new yi;return this._returnResult({data:{user:null,session:null,redirectType:null},error:e})}return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers(n===`recovery`?`PASSWORD_RECOVERY`:`SIGNED_IN`,r.session)),this._returnResult({data:Object.assign(Object.assign({},r),{redirectType:n??null}),error:i})}catch(e){if(await P(this.storage,`${this.storageKey}-code-verifier`),A(e))return this._returnResult({data:{user:null,session:null,redirectType:null},error:e});throw e}}async signInWithIdToken(e){try{let{options:t,provider:n,token:r,access_token:i,nonce:a}=e,{data:o,error:s}=await R(this.fetch,`POST`,`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:n,id_token:r,access_token:i,nonce:a,gotrue_meta_security:{captcha_token:t?.captchaToken}},xform:_a});if(s)return this._returnResult({data:{user:null,session:null},error:s});if(!o||!o.session||!o.user){let e=new yi;return this._returnResult({data:{user:null,session:null},error:e})}return o.session&&(await this._saveSession(o.session),await this._notifyAllSubscribers(`SIGNED_IN`,o.session)),this._returnResult({data:o,error:s})}catch(e){if(A(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithOtp(e){try{if(`email`in e){let{email:t,options:n}=e,r=null,i=null;this.flowType===`pkce`&&([r,i]=await L(this.storage,this.storageKey));let{error:a}=await R(this.fetch,`POST`,`${this.url}/otp`,{headers:this.headers,body:{email:t,data:n?.data??{},create_user:n?.shouldCreateUser??!0,gotrue_meta_security:{captcha_token:n?.captchaToken},code_challenge:r,code_challenge_method:i},redirectTo:n?.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:a})}if(`phone`in e){let{phone:t,options:n}=e,{data:r,error:i}=await R(this.fetch,`POST`,`${this.url}/otp`,{headers:this.headers,body:{phone:t,data:n?.data??{},create_user:n?.shouldCreateUser??!0,gotrue_meta_security:{captcha_token:n?.captchaToken},channel:n?.channel??`sms`}});return this._returnResult({data:{user:null,session:null,messageId:r?.message_id},error:i})}throw new bi(`You must provide either an email or phone number.`)}catch(e){if(await P(this.storage,`${this.storageKey}-code-verifier`),A(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async verifyOtp(e){try{let t,n;`options`in e&&(t=e.options?.redirectTo,n=e.options?.captchaToken);let{data:r,error:i}=await R(this.fetch,`POST`,`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:n}}),redirectTo:t,xform:_a});if(i)throw i;if(!r)throw Error(`An error occurred on token verification.`);let a=r.session,o=r.user;return a?.access_token&&(await this._saveSession(a),await this._notifyAllSubscribers(e.type==`recovery`?`PASSWORD_RECOVERY`:`SIGNED_IN`,a)),this._returnResult({data:{user:o,session:a},error:null})}catch(e){if(A(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithSSO(e){try{let t=null,n=null;this.flowType===`pkce`&&([t,n]=await L(this.storage,this.storageKey));let r=await R(this.fetch,`POST`,`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},`providerId`in e?{provider_id:e.providerId}:null),`domain`in e?{domain:e.domain}:null),{redirect_to:e.options?.redirectTo??void 0}),e?.options?.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:t,code_challenge_method:n}),headers:this.headers,xform:ya});return r.data?.url&&N()&&!e.options?.skipBrowserRedirect&&window.location.assign(r.data.url),this._returnResult(r)}catch(e){if(await P(this.storage,`${this.storageKey}-code-verifier`),A(e))return this._returnResult({data:null,error:e});throw e}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;if(n)throw n;if(!t)throw new M;let{error:r}=await R(this.fetch,`GET`,`${this.url}/reauthenticate`,{headers:this.headers,jwt:t.access_token});return this._returnResult({data:{user:null,session:null},error:r})})}catch(e){if(A(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async resend(e){try{let t=`${this.url}/resend`;if(`email`in e){let{email:n,type:r,options:i}=e,{error:a}=await R(this.fetch,`POST`,t,{headers:this.headers,body:{email:n,type:r,gotrue_meta_security:{captcha_token:i?.captchaToken}},redirectTo:i?.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:a})}else if(`phone`in e){let{phone:n,type:r,options:i}=e,{data:a,error:o}=await R(this.fetch,`POST`,t,{headers:this.headers,body:{phone:n,type:r,gotrue_meta_security:{captcha_token:i?.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:a?.message_id},error:o})}throw new bi(`You must provide either an email or phone number and a type`)}catch(e){if(A(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async getSession(){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async e=>e))}async _acquireLock(e,t){this._debug(`#_acquireLock`,`begin`,e);try{if(this.lockAcquired){let e=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),n=(async()=>(await e,await t()))();return this.pendingInLock.push((async()=>{try{await n}catch{}})()),n}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug(`#_acquireLock`,`lock acquired for storage key`,this.storageKey);try{this.lockAcquired=!0;let e=t();for(this.pendingInLock.push((async()=>{try{await e}catch{}})()),await e;this.pendingInLock.length;){let e=[...this.pendingInLock];await Promise.all(e),this.pendingInLock.splice(0,e.length)}return await e}finally{this._debug(`#_acquireLock`,`lock released for storage key`,this.storageKey),this.lockAcquired=!1}})}finally{this._debug(`#_acquireLock`,`end`)}}async _useSession(e){this._debug(`#_useSession`,`begin`);try{return await e(await this.__loadSession())}finally{this._debug(`#_useSession`,`end`)}}async __loadSession(){this._debug(`#__loadSession()`,`begin`),this.lockAcquired||this._debug(`#__loadSession()`,`used outside of an acquired lock!`,Error().stack);try{let e=null,t=await Yi(this.storage,this.storageKey);if(this._debug(`#getSession()`,`session from storage`,t),t!==null&&(this._isValidSession(t)?e=t:(this._debug(`#getSession()`,`session from storage is not valid`),await this._removeSession())),!e)return{data:{session:null},error:null};let n=e.expires_at?e.expires_at*1e3-Date.now()<si:!1;if(this._debug(`#__loadSession()`,`session has${n?``:` not`} expired`,`expires_at`,e.expires_at),!n){if(this.userStorage){let t=await Yi(this.userStorage,this.storageKey+`-user`);t?.user?e.user=t.user:e.user=la()}if(this.storage.isServer&&e.user&&!e.user.__isUserNotAvailableProxy){let t={value:this.suppressGetSessionWarning};e.user=ua(e.user,t),t.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:e},error:null}}let{data:r,error:i}=await this._callRefreshToken(e.refresh_token);return i?this._returnResult({data:{session:null},error:i}):this._returnResult({data:{session:r},error:null})}finally{this._debug(`#__loadSession()`,`end`)}}async getUser(e){if(e)return await this._getUser(e);await this.initializePromise;let t=await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser());return t.data.user&&(this.suppressGetSessionWarning=!0),t}async _getUser(e){try{return e?await R(this.fetch,`GET`,`${this.url}/user`,{headers:this.headers,jwt:e,xform:z}):await this._useSession(async e=>{let{data:t,error:n}=e;if(n)throw n;return!t.session?.access_token&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new M}:await R(this.fetch,`GET`,`${this.url}/user`,{headers:this.headers,jwt:t.session?.access_token??void 0,xform:z})})}catch(e){if(A(e))return vi(e)&&(await this._removeSession(),await P(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({data:{user:null},error:e});throw e}}async updateUser(e,t={}){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(e,t))}async _updateUser(e,t={}){try{return await this._useSession(async n=>{let{data:r,error:i}=n;if(i)throw i;if(!r.session)throw new M;let a=r.session,o=null,s=null;this.flowType===`pkce`&&e.email!=null&&([o,s]=await L(this.storage,this.storageKey));let{data:c,error:l}=await R(this.fetch,`PUT`,`${this.url}/user`,{headers:this.headers,redirectTo:t?.emailRedirectTo,body:Object.assign(Object.assign({},e),{code_challenge:o,code_challenge_method:s}),jwt:a.access_token,xform:z});if(l)throw l;return a.user=c.user,await this._saveSession(a),await this._notifyAllSubscribers(`USER_UPDATED`,a),this._returnResult({data:{user:a.user},error:null})})}catch(e){if(await P(this.storage,`${this.storageKey}-code-verifier`),A(e))return this._returnResult({data:{user:null},error:e});throw e}}async setSession(e){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(e))}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new M;let t=Date.now()/1e3,n=t,r=!0,i=null,{payload:a}=Zi(e.access_token);if(a.exp&&(n=a.exp,r=n<=t),r){let{data:t,error:n}=await this._callRefreshToken(e.refresh_token);if(n)return this._returnResult({data:{user:null,session:null},error:n});if(!t)return{data:{user:null,session:null},error:null};i=t}else{let{data:r,error:a}=await this._getUser(e.access_token);if(a)return this._returnResult({data:{user:null,session:null},error:a});i={access_token:e.access_token,refresh_token:e.refresh_token,user:r.user,token_type:`bearer`,expires_in:n-t,expires_at:n},await this._saveSession(i),await this._notifyAllSubscribers(`SIGNED_IN`,i)}return this._returnResult({data:{user:i.user,session:i},error:null})}catch(e){if(A(e))return this._returnResult({data:{session:null,user:null},error:e});throw e}}async refreshSession(e){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(e))}async _refreshSession(e){try{return await this._useSession(async t=>{if(!e){let{data:n,error:r}=t;if(r)throw r;e=n.session??void 0}if(!e?.refresh_token)throw new M;let{data:n,error:r}=await this._callRefreshToken(e.refresh_token);return r?this._returnResult({data:{user:null,session:null},error:r}):n?this._returnResult({data:{user:n.user,session:n},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(e){if(A(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async _getSessionFromURL(e,t){try{if(!N())throw new xi(`No browser detected.`);if(e.error||e.error_description||e.error_code)throw new xi(e.error_description||`Error in URL with unspecified error_description`,{error:e.error||`unspecified_error`,code:e.error_code||`unspecified_code`});switch(t){case`implicit`:if(this.flowType===`pkce`)throw new Ci(`Not a valid PKCE flow url.`);break;case`pkce`:if(this.flowType===`implicit`)throw new xi(`Not a valid implicit grant flow url.`);break;default:}if(t===`pkce`){if(this._debug(`#_initialize()`,`begin`,`is PKCE flow`,!0),!e.code)throw new Ci(`No code detected.`);let{data:t,error:n}=await this._exchangeCodeForSession(e.code);if(n)throw n;let r=new URL(window.location.href);return r.searchParams.delete(`code`),window.history.replaceState(window.history.state,``,r.toString()),{data:{session:t.session,redirectType:t.redirectType??null},error:null}}let{provider_token:n,provider_refresh_token:r,access_token:i,refresh_token:a,expires_in:o,expires_at:s,token_type:c}=e;if(!i||!o||!a||!c)throw new xi(`No session defined in URL`);let l=Math.round(Date.now()/1e3),u=parseInt(o),d=l+u;s&&(d=parseInt(s));let f=d-l;f*1e3<=3e4&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${f}s, should have been closer to ${u}s`);let p=d-u;l-p>=120?console.warn(`@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale`,p,d,l):l-p<0&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew`,p,d,l);let{data:m,error:h}=await this._getUser(i);if(h)throw h;let g={provider_token:n,provider_refresh_token:r,access_token:i,expires_in:u,expires_at:d,refresh_token:a,token_type:c,user:m.user};return window.location.hash=``,this._debug(`#_getSessionFromURL()`,`clearing window.location.hash`),this._returnResult({data:{session:g,redirectType:e.type},error:null})}catch(e){if(A(e))return this._returnResult({data:{session:null,redirectType:null},error:e});throw e}}_isImplicitGrantCallback(e){return typeof this.detectSessionInUrl==`function`?this.detectSessionInUrl(new URL(window.location.href),e):!!(e.access_token||e.error_description)}async _isPKCECallback(e){let t=await Yi(this.storage,`${this.storageKey}-code-verifier`);return!!(e.code&&t)}async signOut(e={scope:`global`}){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(e))}async _signOut({scope:e}={scope:`global`}){return await this._useSession(async t=>{let{data:n,error:r}=t;if(r&&!vi(r))return this._returnResult({error:r});let i=n.session?.access_token;if(i){let{error:t}=await this.admin.signOut(i,e);if(t&&!(gi(t)&&(t.status===404||t.status===401||t.status===403)||vi(t)))return this._returnResult({error:t})}return e!==`others`&&(await this._removeSession(),await P(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({error:null})})}onAuthStateChange(e){let t=Hi(),n={id:t,callback:e,unsubscribe:()=>{this._debug(`#unsubscribe()`,`state change callback with id removed`,t),this.stateChangeEmitters.delete(t)}};return this._debug(`#onAuthStateChange()`,`registered callback with id`,t),this.stateChangeEmitters.set(t,n),(async()=>{await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(t)})})(),{data:{subscription:n}}}async _emitInitialSession(e){return await this._useSession(async t=>{try{let{data:{session:n},error:r}=t;if(r)throw r;await this.stateChangeEmitters.get(e)?.callback(`INITIAL_SESSION`,n),this._debug(`INITIAL_SESSION`,`callback id`,e,`session`,n)}catch(t){await this.stateChangeEmitters.get(e)?.callback(`INITIAL_SESSION`,null),this._debug(`INITIAL_SESSION`,`callback id`,e,`error`,t),vi(t)?console.warn(t):console.error(t)}})}async resetPasswordForEmail(e,t={}){let n=null,r=null;this.flowType===`pkce`&&([n,r]=await L(this.storage,this.storageKey,!0));try{return await R(this.fetch,`POST`,`${this.url}/recover`,{body:{email:e,code_challenge:n,code_challenge_method:r,gotrue_meta_security:{captcha_token:t.captchaToken}},headers:this.headers,redirectTo:t.redirectTo})}catch(e){if(await P(this.storage,`${this.storageKey}-code-verifier`),A(e))return this._returnResult({data:null,error:e});throw e}}async getUserIdentities(){try{let{data:e,error:t}=await this.getUser();if(t)throw t;return this._returnResult({data:{identities:e.user.identities??[]},error:null})}catch(e){if(A(e))return this._returnResult({data:null,error:e});throw e}}async linkIdentity(e){return`token`in e?this.linkIdentityIdToken(e):this.linkIdentityOAuth(e)}async linkIdentityOAuth(e){try{let{data:t,error:n}=await this._useSession(async t=>{let{data:n,error:r}=t;if(r)throw r;let i=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:e.options?.redirectTo,scopes:e.options?.scopes,queryParams:e.options?.queryParams,skipBrowserRedirect:!0});return await R(this.fetch,`GET`,i,{headers:this.headers,jwt:n.session?.access_token??void 0})});if(n)throw n;return N()&&!e.options?.skipBrowserRedirect&&window.location.assign(t?.url),this._returnResult({data:{provider:e.provider,url:t?.url},error:null})}catch(t){if(A(t))return this._returnResult({data:{provider:e.provider,url:null},error:t});throw t}}async linkIdentityIdToken(e){return await this._useSession(async t=>{try{let{error:n,data:{session:r}}=t;if(n)throw n;let{options:i,provider:a,token:o,access_token:s,nonce:c}=e,{data:l,error:u}=await R(this.fetch,`POST`,`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:r?.access_token??void 0,body:{provider:a,id_token:o,access_token:s,nonce:c,link_identity:!0,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:_a});return u?this._returnResult({data:{user:null,session:null},error:u}):!l||!l.session||!l.user?this._returnResult({data:{user:null,session:null},error:new yi}):(l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers(`USER_UPDATED`,l.session)),this._returnResult({data:l,error:u}))}catch(e){if(await P(this.storage,`${this.storageKey}-code-verifier`),A(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}})}async unlinkIdentity(e){try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)throw r;return await R(this.fetch,`DELETE`,`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:n.session?.access_token??void 0})})}catch(e){if(A(e))return this._returnResult({data:null,error:e});throw e}}async _refreshAccessToken(e){let t=`#_refreshAccessToken(${e.substring(0,5)}...)`;this._debug(t,`begin`);try{let n=Date.now();return await $i(async n=>(n>0&&await Qi(200*2**(n-1)),this._debug(t,`refreshing attempt`,n),await R(this.fetch,`POST`,`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:_a})),(e,t)=>{let r=200*2**e;return t&&Ei(t)&&Date.now()+r-n<3e4})}catch(e){if(this._debug(t,`error`,e),A(e))return this._returnResult({data:{session:null,user:null},error:e});throw e}finally{this._debug(t,`end`)}}_isValidSession(e){return typeof e==`object`&&!!e&&`access_token`in e&&`refresh_token`in e&&`expires_at`in e}async _handleProviderSignIn(e,t){let n=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:t.redirectTo,scopes:t.scopes,queryParams:t.queryParams});return this._debug(`#_handleProviderSignIn()`,`provider`,e,`options`,t,`url`,n),N()&&!t.skipBrowserRedirect&&window.location.assign(n),{data:{provider:e,url:n},error:null}}async _recoverAndRefresh(){let e=`#_recoverAndRefresh()`;this._debug(e,`begin`);try{let t=await Yi(this.storage,this.storageKey);if(t&&this.userStorage){let e=await Yi(this.userStorage,this.storageKey+`-user`);!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!e&&(e={user:t.user},await Ji(this.userStorage,this.storageKey+`-user`,e)),t.user=e?.user??la()}else if(t&&!t.user&&!t.user){let e=await Yi(this.storage,this.storageKey+`-user`);e&&e?.user?(t.user=e.user,await P(this.storage,this.storageKey+`-user`),await Ji(this.storage,this.storageKey,t)):t.user=la()}if(this._debug(e,`session from storage`,t),!this._isValidSession(t)){this._debug(e,`session is not valid`),t!==null&&await this._removeSession();return}let n=(t.expires_at??1/0)*1e3-Date.now()<si;if(this._debug(e,`session has${n?``:` not`} expired with margin of ${si}s`),n){if(this.autoRefreshToken&&t.refresh_token){let{error:n}=await this._callRefreshToken(t.refresh_token);n&&(console.error(n),Ei(n)||(this._debug(e,`refresh failed with a non-retryable error, removing the session`,n),await this._removeSession()))}}else if(t.user&&t.user.__isUserNotAvailableProxy===!0)try{let{data:n,error:r}=await this._getUser(t.access_token);!r&&n?.user?(t.user=n.user,await this._saveSession(t),await this._notifyAllSubscribers(`SIGNED_IN`,t)):this._debug(e,`could not get user data, skipping SIGNED_IN notification`)}catch(t){console.error(`Error getting user data:`,t),this._debug(e,`error getting user data, skipping SIGNED_IN notification`,t)}else await this._notifyAllSubscribers(`SIGNED_IN`,t)}catch(t){this._debug(e,`error`,t),console.error(t);return}finally{this._debug(e,`end`)}}async _callRefreshToken(e){var t,n;if(!e)throw new M;if(this.refreshingDeferred)return this.refreshingDeferred.promise;let r=`#_callRefreshToken(${e.substring(0,5)}...)`;this._debug(r,`begin`);try{this.refreshingDeferred=new Xi;let{data:t,error:n}=await this._refreshAccessToken(e);if(n)throw n;if(!t.session)throw new M;await this._saveSession(t.session),await this._notifyAllSubscribers(`TOKEN_REFRESHED`,t.session);let r={data:t.session,error:null};return this.refreshingDeferred.resolve(r),r}catch(e){if(this._debug(r,`error`,e),A(e)){let n={data:null,error:e};return Ei(e)||await this._removeSession(),(t=this.refreshingDeferred)==null||t.resolve(n),n}throw(n=this.refreshingDeferred)==null||n.reject(e),e}finally{this.refreshingDeferred=null,this._debug(r,`end`)}}async _notifyAllSubscribers(e,t,n=!0){let r=`#_notifyAllSubscribers(${e})`;this._debug(r,`begin`,t,`broadcast = ${n}`);try{this.broadcastChannel&&n&&this.broadcastChannel.postMessage({event:e,session:t});let r=[],i=Array.from(this.stateChangeEmitters.values()).map(async n=>{try{await n.callback(e,t)}catch(e){r.push(e)}});if(await Promise.all(i),r.length>0){for(let e=0;e<r.length;e+=1)console.error(r[e]);throw r[0]}}finally{this._debug(r,`end`)}}async _saveSession(e){this._debug(`#_saveSession()`,e),this.suppressGetSessionWarning=!0,await P(this.storage,`${this.storageKey}-code-verifier`);let t=Object.assign({},e),n=t.user&&t.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!n&&t.user&&await Ji(this.userStorage,this.storageKey+`-user`,{user:t.user});let e=Object.assign({},t);delete e.user;let r=da(e);await Ji(this.storage,this.storageKey,r)}else{let e=da(t);await Ji(this.storage,this.storageKey,e)}}async _removeSession(){this._debug(`#_removeSession()`),this.suppressGetSessionWarning=!1,await P(this.storage,this.storageKey),await P(this.storage,this.storageKey+`-code-verifier`),await P(this.storage,this.storageKey+`-user`),this.userStorage&&await P(this.userStorage,this.storageKey+`-user`),await this._notifyAllSubscribers(`SIGNED_OUT`,null)}_removeVisibilityChangedCallback(){this._debug(`#_removeVisibilityChangedCallback()`);let e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&N()&&window!=null&&window.removeEventListener&&window.removeEventListener(`visibilitychange`,e)}catch(e){console.error(`removing visibilitychange callback failed`,e)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug(`#_startAutoRefresh()`);let e=setInterval(()=>this._autoRefreshTokenTick(),oi);this.autoRefreshTicker=e,e&&typeof e==`object`&&typeof e.unref==`function`?e.unref():typeof Deno<`u`&&typeof Deno.unrefTimer==`function`&&Deno.unrefTimer(e);let t=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=t,t&&typeof t==`object`&&typeof t.unref==`function`?t.unref():typeof Deno<`u`&&typeof Deno.unrefTimer==`function`&&Deno.unrefTimer(t)}async _stopAutoRefresh(){this._debug(`#_stopAutoRefresh()`);let e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e);let t=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,t&&clearTimeout(t)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug(`#_autoRefreshTokenTick()`,`begin`);try{await this._acquireLock(0,async()=>{try{let e=Date.now();try{return await this._useSession(async t=>{let{data:{session:n}}=t;if(!n||!n.refresh_token||!n.expires_at){this._debug(`#_autoRefreshTokenTick()`,`no session`);return}let r=Math.floor((n.expires_at*1e3-e)/oi);this._debug(`#_autoRefreshTokenTick()`,`access token expires in ${r} ticks, a tick lasts ${oi}ms, refresh threshold is 3 ticks`),r<=3&&await this._callRefreshToken(n.refresh_token)})}catch(e){console.error(`Auto refresh tick failed with error. This is likely a transient error.`,e)}}finally{this._debug(`#_autoRefreshTokenTick()`,`end`)}})}catch(e){if(e instanceof Da)this._debug(`auto refresh token tick lock not available`);else throw e}}async _handleVisibilityChange(){if(this._debug(`#_handleVisibilityChange()`),!N()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(e){this._debug(`#visibilityChangedCallback`,`error`,e)}},window==null||window.addEventListener(`visibilitychange`,this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error(`_handleVisibilityChange`,e)}}async _onVisibilityChanged(e){let t=`#_onVisibilityChanged(${e})`;this._debug(t,`visibilityState`,document.visibilityState),document.visibilityState===`visible`?(this.autoRefreshToken&&this._startAutoRefresh(),e||(await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!==`visible`){this._debug(t,`acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting`);return}await this._recoverAndRefresh()}))):document.visibilityState===`hidden`&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,t,n){let r=[`provider=${encodeURIComponent(t)}`];if(n?.redirectTo&&r.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),n?.scopes&&r.push(`scopes=${encodeURIComponent(n.scopes)}`),this.flowType===`pkce`){let[e,t]=await L(this.storage,this.storageKey),n=new URLSearchParams({code_challenge:`${encodeURIComponent(e)}`,code_challenge_method:`${encodeURIComponent(t)}`});r.push(n.toString())}if(n?.queryParams){let e=new URLSearchParams(n.queryParams);r.push(e.toString())}return n?.skipBrowserRedirect&&r.push(`skip_http_redirect=${n.skipBrowserRedirect}`),`${e}?${r.join(`&`)}`}async _unenroll(e){try{return await this._useSession(async t=>{let{data:n,error:r}=t;return r?this._returnResult({data:null,error:r}):await R(this.fetch,`DELETE`,`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:n?.session?.access_token})})}catch(e){if(A(e))return this._returnResult({data:null,error:e});throw e}}async _enroll(e){try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)return this._returnResult({data:null,error:r});let i=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType===`phone`?{phone:e.phone}:e.factorType===`totp`?{issuer:e.issuer}:{}),{data:a,error:o}=await R(this.fetch,`POST`,`${this.url}/factors`,{body:i,headers:this.headers,jwt:n?.session?.access_token});return o?this._returnResult({data:null,error:o}):(e.factorType===`totp`&&a.type===`totp`&&a?.totp?.qr_code&&(a.totp.qr_code=`data:image/svg+xml;utf-8,${a.totp.qr_code}`),this._returnResult({data:a,error:null}))})}catch(e){if(A(e))return this._returnResult({data:null,error:e});throw e}}async _verify(e){return this._acquireLock(this.lockAcquireTimeout,async()=>{try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)return this._returnResult({data:null,error:r});let i=Object.assign({challenge_id:e.challengeId},`webauthn`in e?{webauthn:Object.assign(Object.assign({},e.webauthn),{credential_response:e.webauthn.type===`create`?Ba(e.webauthn.credential_response):Va(e.webauthn.credential_response)})}:{code:e.code}),{data:a,error:o}=await R(this.fetch,`POST`,`${this.url}/factors/${e.factorId}/verify`,{body:i,headers:this.headers,jwt:n?.session?.access_token});return o?this._returnResult({data:null,error:o}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+a.expires_in},a)),await this._notifyAllSubscribers(`MFA_CHALLENGE_VERIFIED`,a),this._returnResult({data:a,error:o}))})}catch(e){if(A(e))return this._returnResult({data:null,error:e});throw e}})}async _challenge(e){return this._acquireLock(this.lockAcquireTimeout,async()=>{try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)return this._returnResult({data:null,error:r});let i=await R(this.fetch,`POST`,`${this.url}/factors/${e.factorId}/challenge`,{body:e,headers:this.headers,jwt:n?.session?.access_token});if(i.error)return i;let{data:a}=i;if(a.type!==`webauthn`)return{data:a,error:null};switch(a.webauthn.type){case`create`:return{data:Object.assign(Object.assign({},a),{webauthn:Object.assign(Object.assign({},a.webauthn),{credential_options:Object.assign(Object.assign({},a.webauthn.credential_options),{publicKey:Ra(a.webauthn.credential_options.publicKey)})})}),error:null};case`request`:return{data:Object.assign(Object.assign({},a),{webauthn:Object.assign(Object.assign({},a.webauthn),{credential_options:Object.assign(Object.assign({},a.webauthn.credential_options),{publicKey:za(a.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(e){if(A(e))return this._returnResult({data:null,error:e});throw e}})}async _challengeAndVerify(e){let{data:t,error:n}=await this._challenge({factorId:e.factorId});return n?this._returnResult({data:null,error:n}):await this._verify({factorId:e.factorId,challengeId:t.id,code:e.code})}async _listFactors(){let{data:{user:e},error:t}=await this.getUser();if(t)return{data:null,error:t};let n={all:[],phone:[],totp:[],webauthn:[]};for(let t of e?.factors??[])n.all.push(t),t.status===`verified`&&n[t.factor_type].push(t);return{data:n,error:null}}async _getAuthenticatorAssuranceLevel(e){if(e)try{let{payload:t}=Zi(e),n=null;t.aal&&(n=t.aal);let r=n,{data:{user:i},error:a}=await this.getUser(e);if(a)return this._returnResult({data:null,error:a});((i?.factors)?.filter(e=>e.status===`verified`)??[]).length>0&&(r=`aal2`);let o=t.amr||[];return{data:{currentLevel:n,nextLevel:r,currentAuthenticationMethods:o},error:null}}catch(e){if(A(e))return this._returnResult({data:null,error:e});throw e}let{data:{session:t},error:n}=await this.getSession();if(n)return this._returnResult({data:null,error:n});if(!t)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};let{payload:r}=Zi(t.access_token),i=null;r.aal&&(i=r.aal);let a=i;(t.user.factors?.filter(e=>e.status===`verified`)??[]).length>0&&(a=`aal2`);let o=r.amr||[];return{data:{currentLevel:i,nextLevel:a,currentAuthenticationMethods:o},error:null}}async _getAuthorizationDetails(e){try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;return r?this._returnResult({data:null,error:r}):n?await R(this.fetch,`GET`,`${this.url}/oauth/authorizations/${e}`,{headers:this.headers,jwt:n.access_token,xform:e=>({data:e,error:null})}):this._returnResult({data:null,error:new M})})}catch(e){if(A(e))return this._returnResult({data:null,error:e});throw e}}async _approveAuthorization(e,t){try{return await this._useSession(async n=>{let{data:{session:r},error:i}=n;if(i)return this._returnResult({data:null,error:i});if(!r)return this._returnResult({data:null,error:new M});let a=await R(this.fetch,`POST`,`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:r.access_token,body:{action:`approve`},xform:e=>({data:e,error:null})});return a.data&&a.data.redirect_url&&N()&&!t?.skipBrowserRedirect&&window.location.assign(a.data.redirect_url),a})}catch(e){if(A(e))return this._returnResult({data:null,error:e});throw e}}async _denyAuthorization(e,t){try{return await this._useSession(async n=>{let{data:{session:r},error:i}=n;if(i)return this._returnResult({data:null,error:i});if(!r)return this._returnResult({data:null,error:new M});let a=await R(this.fetch,`POST`,`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:r.access_token,body:{action:`deny`},xform:e=>({data:e,error:null})});return a.data&&a.data.redirect_url&&N()&&!t?.skipBrowserRedirect&&window.location.assign(a.data.redirect_url),a})}catch(e){if(A(e))return this._returnResult({data:null,error:e});throw e}}async _listOAuthGrants(){try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;return n?this._returnResult({data:null,error:n}):t?await R(this.fetch,`GET`,`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:t.access_token,xform:e=>({data:e,error:null})}):this._returnResult({data:null,error:new M})})}catch(e){if(A(e))return this._returnResult({data:null,error:e});throw e}}async _revokeOAuthGrant(e){try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;return r?this._returnResult({data:null,error:r}):n?(await R(this.fetch,`DELETE`,`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:n.access_token,query:{client_id:e.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new M})})}catch(e){if(A(e))return this._returnResult({data:null,error:e});throw e}}async fetchJwk(e,t={keys:[]}){let n=t.keys.find(t=>t.kid===e);if(n)return n;let r=Date.now();if(n=this.jwks.keys.find(t=>t.kid===e),n&&this.jwks_cached_at+6e5>r)return n;let{data:i,error:a}=await R(this.fetch,`GET`,`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(a)throw a;return!i.keys||i.keys.length===0||(this.jwks=i,this.jwks_cached_at=r,n=i.keys.find(t=>t.kid===e),!n)?null:n}async getClaims(e,t={}){try{let n=e;if(!n){let{data:e,error:t}=await this.getSession();if(t||!e.session)return this._returnResult({data:null,error:t});n=e.session.access_token}let{header:r,payload:i,signature:a,raw:{header:o,payload:s}}=Zi(n);t?.allowExpired||ia(i.exp);let c=!r.alg||r.alg.startsWith(`HS`)||!r.kid||!(`crypto`in globalThis&&`subtle`in globalThis.crypto)?null:await this.fetchJwk(r.kid,t?.keys?{keys:t.keys}:t?.jwks);if(!c){let{error:e}=await this.getUser(n);if(e)throw e;return{data:{claims:i,header:r,signature:a},error:null}}let l=aa(r.alg),u=await crypto.subtle.importKey(`jwk`,c,l,!0,[`verify`]);if(!await crypto.subtle.verify(l,u,a,zi(`${o}.${s}`)))throw new Oi(`Invalid JWT signature`);return{data:{claims:i,header:r,signature:a},error:null}}catch(e){if(A(e))return this._returnResult({data:null,error:e});throw e}}async signInWithPasskey(e){ca(this.experimental);try{if(!Ua())return this._returnResult({data:null,error:new _i(`Browser does not support WebAuthn`,null)});let{data:t,error:n}=await this._startPasskeyAuthentication({options:{captchaToken:e?.options?.captchaToken}});if(n||!t)return this._returnResult({data:null,error:n});let{data:r,error:i}=await Ga({publicKey:za(t.options),signal:e?.options?.signal??La.createNewAbortSignal()});if(i||!r)return this._returnResult({data:null,error:i??new _i(`WebAuthn ceremony failed`,null)});let a=Va(r);return this._verifyPasskeyAuthentication({challengeId:t.challenge_id,credential:a})}catch(e){if(A(e))return this._returnResult({data:null,error:e});throw e}}async registerPasskey(e){ca(this.experimental);try{if(!Ua())return this._returnResult({data:null,error:new _i(`Browser does not support WebAuthn`,null)});let{data:t,error:n}=await this._startPasskeyRegistration();if(n||!t)return this._returnResult({data:null,error:n});let{data:r,error:i}=await Wa({publicKey:Ra(t.options),signal:e?.options?.signal??La.createNewAbortSignal()});if(i||!r)return this._returnResult({data:null,error:i??new _i(`WebAuthn ceremony failed`,null)});let a=Ba(r);return this._verifyPasskeyRegistration({challengeId:t.challenge_id,credential:a})}catch(e){if(A(e))return this._returnResult({data:null,error:e});throw e}}async _startPasskeyRegistration(){ca(this.experimental);try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;if(n)return this._returnResult({data:null,error:n});if(!t)return this._returnResult({data:null,error:new M});let{data:r,error:i}=await R(this.fetch,`POST`,`${this.url}/passkeys/registration/options`,{headers:this.headers,jwt:t.access_token,body:{}});return i?this._returnResult({data:null,error:i}):this._returnResult({data:r,error:null})})}catch(e){if(A(e))return this._returnResult({data:null,error:e});throw e}}async _verifyPasskeyRegistration(e){ca(this.experimental);try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!n)return this._returnResult({data:null,error:new M});let{data:i,error:a}=await R(this.fetch,`POST`,`${this.url}/passkeys/registration/verify`,{headers:this.headers,jwt:n.access_token,body:{challenge_id:e.challengeId,credential:e.credential}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:i,error:null})})}catch(e){if(A(e))return this._returnResult({data:null,error:e});throw e}}async _startPasskeyAuthentication(e){ca(this.experimental);try{let{data:t,error:n}=await R(this.fetch,`POST`,`${this.url}/passkeys/authentication/options`,{headers:this.headers,body:{gotrue_meta_security:{captcha_token:e?.options?.captchaToken}}});return n?this._returnResult({data:null,error:n}):this._returnResult({data:t,error:null})}catch(e){if(A(e))return this._returnResult({data:null,error:e});throw e}}async _verifyPasskeyAuthentication(e){ca(this.experimental);try{let{data:t,error:n}=await R(this.fetch,`POST`,`${this.url}/passkeys/authentication/verify`,{headers:this.headers,body:{challenge_id:e.challengeId,credential:e.credential},xform:_a});return n?this._returnResult({data:null,error:n}):(t.session&&(await this._saveSession(t.session),await this._notifyAllSubscribers(`SIGNED_IN`,t.session)),this._returnResult({data:t,error:null}))}catch(e){if(A(e))return this._returnResult({data:null,error:e});throw e}}async _listPasskeys(){ca(this.experimental);try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;if(n)return this._returnResult({data:null,error:n});if(!t)return this._returnResult({data:null,error:new M});let{data:r,error:i}=await R(this.fetch,`GET`,`${this.url}/passkeys`,{headers:this.headers,jwt:t.access_token,xform:e=>({data:e,error:null})});return i?this._returnResult({data:null,error:i}):this._returnResult({data:r,error:null})})}catch(e){if(A(e))return this._returnResult({data:null,error:e});throw e}}async _updatePasskey(e){ca(this.experimental);try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!n)return this._returnResult({data:null,error:new M});let{data:i,error:a}=await R(this.fetch,`PATCH`,`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:n.access_token,body:{friendly_name:e.friendlyName}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:i,error:null})})}catch(e){if(A(e))return this._returnResult({data:null,error:e});throw e}}async _deletePasskey(e){ca(this.experimental);try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!n)return this._returnResult({data:null,error:new M});let{error:i}=await R(this.fetch,`DELETE`,`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:n.access_token,noResolveJson:!0});return i?this._returnResult({data:null,error:i}):this._returnResult({data:null,error:null})})}catch(e){if(A(e))return this._returnResult({data:null,error:e});throw e}}};to.nextInstanceID={};var no=to,ro=`modulepreload`,io=function(e){return`/reword/`+e},ao={},oo=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=io(t,n),t in ao)return;ao[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:ro,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},so=`2.106.2`,co=``;co=typeof Deno<`u`?`deno`:typeof document<`u`?`web`:typeof navigator<`u`&&navigator.product===`ReactNative`?`react-native`:`node`;var lo={headers:{"X-Client-Info":`supabase-js-${co}/${so}`}},uo={schema:`public`},fo={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:`implicit`},po={},mo={enabled:!1,respectSamplingDecision:!0};function ho(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})}var go=null,_o=`@opentelemetry/api`;function vo(){return go===null&&(go=oo(()=>import(_o),[]).catch(()=>null)),go}function yo(){return ho(this,void 0,void 0,function*(){try{let e=yield vo();if(!e||!e.propagation||!e.context)return null;let t={};e.propagation.inject(e.context.active(),t);let n=t.traceparent;return n?{traceparent:n,tracestate:t.tracestate,baggage:t.baggage}:null}catch{return null}})}function bo(e){if(!e||typeof e!=`string`)return null;let t=e.split(`-`);if(t.length!==4)return null;let[n,r,i,a]=t;if(n.length!==2||r.length!==32||i.length!==16||a.length!==2)return null;let o=/^[0-9a-f]+$/i;return!o.test(n)||!o.test(r)||!o.test(i)||!o.test(a)||r===`00000000000000000000000000000000`||i===`0000000000000000`?null:{version:n,traceId:r,parentId:i,traceFlags:a,isSampled:(parseInt(a,16)&1)==1}}function xo(e,t){if(!e||!t||t.length===0)return!1;let n;if(e instanceof URL)n=e;else try{n=new URL(e)}catch{return!1}for(let e of t)try{if(typeof e==`string`){if(So(n.hostname,e))return!0}else if(e instanceof RegExp){if(e.test(n.hostname))return!0}else if(typeof e==`function`&&e(n))return!0}catch{continue}return!1}function So(e,t){if(t===e)return!0;if(t.startsWith(`*.`)){let n=t.slice(2);if(e.endsWith(n)&&(e===n||e.endsWith(`.`+n)))return!0}return!1}function H(e){let t=[];try{let n=new URL(e);t.push(n.hostname)}catch{}return t.push(`*.supabase.co`,`*.supabase.in`),t.push(`localhost`,`127.0.0.1`,`[::1]`),t}function Co(e){"@babel/helpers - typeof";return Co=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Co(e)}function wo(e,t){if(Co(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(Co(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function To(e){var t=wo(e,`string`);return Co(t)==`symbol`?t:t+``}function Eo(e,t,n){return(t=To(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Do(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Do(Object(n),!0).forEach(function(t){Eo(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Do(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var W=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),Oo=()=>Headers,ko=(e,t,n,r,i)=>{let a=W(r),o=Oo(),s=i?.enabled===!0,c=i?.respectSamplingDecision!==!1,l=s?H(t):null;return async(t,r)=>{let i=await n()??e,s=new o(r?.headers);if(s.has(`apikey`)||s.set(`apikey`,e),s.has(`Authorization`)||s.set(`Authorization`,`Bearer ${i}`),l){let e=await Ao(t,l,c);e&&(e.traceparent&&!s.has(`traceparent`)&&s.set(`traceparent`,e.traceparent),e.tracestate&&!s.has(`tracestate`)&&s.set(`tracestate`,e.tracestate),e.baggage&&!s.has(`baggage`)&&s.set(`baggage`,e.baggage))}return a(t,U(U({},r),{},{headers:s}))}};async function Ao(e,t,n){if(!xo(typeof e==`string`||e instanceof URL?e:e.url,t))return null;let r=await yo();if(!r||!r.traceparent)return null;if(n){let e=bo(r.traceparent);if(e&&!e.isSampled)return null}return r}function jo(e){return typeof e==`boolean`?{enabled:e}:e}function Mo(e){return e.endsWith(`/`)?e:e+`/`}function No(e,t){let{db:n,auth:r,realtime:i,global:a}=e,{db:o,auth:s,realtime:c,global:l}=t,u=jo(e.tracePropagation),d=jo(t.tracePropagation),f={db:U(U({},o),n),auth:U(U({},s),r),realtime:U(U({},c),i),storage:{},global:U(U(U({},l),a),{},{headers:U(U({},l?.headers??{}),a?.headers??{})}),tracePropagation:{enabled:u?.enabled??d?.enabled??!1,respectSamplingDecision:u?.respectSamplingDecision??d?.respectSamplingDecision??!0},accessToken:async()=>``};return e.accessToken?f.accessToken=e.accessToken:delete f.accessToken,f}function Po(e){let t=e?.trim();if(!t)throw Error(`supabaseUrl is required.`);if(!t.match(/^https?:\/\//i))throw Error(`Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.`);try{return new URL(Mo(t))}catch{throw Error(`Invalid supabaseUrl: Provided URL is malformed.`)}}var Fo=class extends no{constructor(e){super(e)}},Io=class{constructor(e,t,n){this.supabaseUrl=e,this.supabaseKey=t;let r=Po(e);if(!t)throw Error(`supabaseKey is required.`);this.realtimeUrl=new URL(`realtime/v1`,r),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace(`http`,`ws`),this.authUrl=new URL(`auth/v1`,r),this.storageUrl=new URL(`storage/v1`,r),this.functionsUrl=new URL(`functions/v1`,r);let i=`sb-${r.hostname.split(`.`)[0]}-auth-token`,a={db:uo,realtime:po,auth:U(U({},fo),{},{storageKey:i}),global:lo,tracePropagation:mo},o=No(n??{},a);this.settings=o,this.storageKey=o.auth.storageKey??``,this.headers=o.global.headers??{},o.accessToken?(this.accessToken=o.accessToken,this.auth=new Proxy({},{get:(e,t)=>{throw Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(t)} is not possible`)}})):this.auth=this._initSupabaseAuthClient(o.auth??{},this.headers,o.global.fetch),this.fetch=ko(t,e,this._getAccessToken.bind(this),o.global.fetch,o.tracePropagation),this.realtime=this._initRealtimeClient(U({headers:this.headers,accessToken:this._getAccessToken.bind(this),fetch:this.fetch},o.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(e=>this.realtime.setAuth(e)).catch(e=>console.warn(`Failed to set initial Realtime auth token:`,e)),this.rest=new Yt(new URL(`rest/v1`,r).href,{headers:this.headers,schema:o.db.schema,fetch:this.fetch,timeout:o.db.timeout,urlLengthLimit:o.db.urlLengthLimit}),this.storage=new ii(this.storageUrl.href,this.headers,this.fetch,n?.storage),o.accessToken||this._listenForAuthEvents()}get functions(){return new At(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(e){return this.rest.from(e)}schema(e){return this.rest.schema(e)}rpc(e,t={},n={head:!1,get:!1,count:void 0}){return this.rest.rpc(e,t,n)}channel(e,t={config:{}}){return this.realtime.channel(e,t)}getChannels(){return this.realtime.getChannels()}removeChannel(e){return this.realtime.removeChannel(e)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getAccessToken(){var e=this;if(e.accessToken)return await e.accessToken();let{data:t}=await e.auth.getSession();return t.session?.access_token??e.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:e,persistSession:t,detectSessionInUrl:n,storage:r,userStorage:i,storageKey:a,flowType:o,lock:s,debug:c,throwOnError:l,experimental:u,lockAcquireTimeout:d,skipAutoInitialize:f},p,m){let h={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new Fo({url:this.authUrl.href,headers:U(U({},h),p),storageKey:a,autoRefreshToken:e,persistSession:t,detectSessionInUrl:n,storage:r,userStorage:i,flowType:o,lock:s,debug:c,throwOnError:l,experimental:u,fetch:m,lockAcquireTimeout:d,skipAutoInitialize:f,hasCustomAuthorizationHeader:Object.keys(this.headers).some(e=>e.toLowerCase()===`authorization`)})}_initRealtimeClient(e){return new ar(this.realtimeUrl.href,U(U({},e),{},{params:U(U({},{apikey:this.supabaseKey}),e?.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((e,t)=>{this._handleTokenChanged(e,`CLIENT`,t?.access_token)})}_handleTokenChanged(e,t,n){(e===`TOKEN_REFRESHED`||e===`SIGNED_IN`)&&this.changedAccessToken!==n?(this.changedAccessToken=n,this.realtime.setAuth(n)):e===`SIGNED_OUT`&&(this.realtime.setAuth(),t==`STORAGE`&&this.auth.signOut(),this.changedAccessToken=void 0)}},Lo=(e,t,n)=>new Io(e,t,n);function Ro(){if(typeof window<`u`)return!1;let e=globalThis.process;if(!e)return!1;let t=e.version;if(t==null)return!1;let n=t.match(/^v(\d+)\./);return n?parseInt(n[1],10)<=18:!1}Ro()&&console.warn(`⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217`);var zo=new Set([``,`your_supabase_url`,`your_supabase_anon_key`,`https://your-project.supabase.co`,`your-anon-key`]),Bo=``,Vo=``;function Ho(e){return!zo.has(e.replace(/\/$/,``))}var Uo=Ho(Bo),Wo=Ho(Vo),Go={urlPresent:Uo,anonKeyPresent:Wo,clientEnabled:Uo&&Wo,missingKeys:[...Uo?[]:[`VITE_SUPABASE_URL`],...Wo?[]:[`VITE_SUPABASE_ANON_KEY`]]},Ko=Go.clientEnabled;Go.clientEnabled;var qo=Ko?Lo(Bo,Vo,{auth:{autoRefreshToken:!0,detectSessionInUrl:!0,persistSession:!0,storageKey:`reword-supabase-auth`}}):null;function Jo(){return`云同步未接通：当前线上包没有读取到 ${Go.missingKeys.join(` / `)||`Supabase 环境变量`}。请在 GitHub 仓库 Secrets 配置 Supabase，并重新运行 Deploy GitHub Pages。本地学习数据仍会保存在当前设备。`}function Yo(){if(!qo)throw Error(Jo());return qo}function Xo(e){return e?new Date(e).toLocaleString(`zh-CN`,{month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`}):`未同步`}function Zo({ok:e,text:t}){return(0,T.jsx)(`span`,{className:`inline-flex min-h-7 items-center rounded-md border px-2 text-xs font-semibold ${e?`border-emerald-200 bg-emerald-50 text-emerald-700`:`border-amber-200 bg-amber-50 text-amber-700`}`,children:t})}function Qo({icon:e,label:t,children:n}){return(0,T.jsxs)(`div`,{className:`flex items-center justify-between gap-3 rounded-lg border border-sky-100 bg-[#f8fbff] px-3 py-2`,children:[(0,T.jsxs)(`div`,{className:`flex min-w-0 items-center gap-2 text-sm font-semibold text-slate-700`,children:[(0,T.jsx)(e,{size:16,className:`shrink-0 text-harbor`,"aria-hidden":`true`}),(0,T.jsx)(`span`,{className:`truncate`,children:t})]}),(0,T.jsx)(`div`,{className:`shrink-0`,children:n})]})}function $o(e){return e===`syncing`?`同步中`:e===`success`?`成功`:e===`offline`?`离线`:e===`error`?`失败`:e===`disabled`?`未启用`:`待同步`}function es({online:e,loggedIn:t,syncState:n,syncMessage:r,lastSyncAt:i,pendingCount:a=0,compact:o=!1}){let s=Go.clientEnabled;return(0,T.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white shadow-soft ${o?`p-4`:`p-5`}`,children:[(0,T.jsxs)(`div`,{className:`flex flex-wrap items-start justify-between gap-3`,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsxs)(`div`,{className:`flex items-center gap-2 text-sm font-semibold text-harbor`,children:[s?(0,T.jsx)(le,{size:18,"aria-hidden":`true`}):(0,T.jsx)(me,{size:18,"aria-hidden":`true`}),`云同步配置`]}),(0,T.jsx)(`h2`,{className:`${o?`mt-1 text-lg`:`mt-2 text-xl`} font-semibold text-ink`,children:s?`Supabase 已启用`:`Supabase 未接通`})]}),(0,T.jsx)(Zo,{ok:s,text:s?`可登录`:`本地模式`})]}),(0,T.jsx)(`p`,{className:`mt-3 text-sm leading-6 text-slate-600`,children:s?t?`已登录，云同步可用。若同步失败，请检查 Supabase 表结构和 RLS。`:`Supabase 已配置。登录或注册后即可把本地学习进度同步到云端。`:`云同步未接通：当前线上包没有读取到 Supabase URL 或 anon key。请在 GitHub 仓库 Secrets 配置后重新运行 Deploy GitHub Pages。本地学习数据仍会保存在当前设备。`}),(0,T.jsxs)(`div`,{className:`mt-4 grid gap-2 ${o?``:`sm:grid-cols-2`}`,children:[(0,T.jsx)(Qo,{icon:ge,label:`Supabase URL`,children:(0,T.jsx)(Zo,{ok:Go.urlPresent,text:Go.urlPresent?`已读取`:`缺失`})}),(0,T.jsx)(Qo,{icon:Ee,label:`Supabase anon key`,children:(0,T.jsx)(Zo,{ok:Go.anonKeyPresent,text:Go.anonKeyPresent?`已读取`:`缺失`})}),(0,T.jsx)(Qo,{icon:tt,label:`客户端`,children:(0,T.jsx)(Zo,{ok:s&&e,text:s?e?`在线`:`离线`:`未启用`})}),(0,T.jsx)(Qo,{icon:Me,label:`登录状态`,children:(0,T.jsx)(Zo,{ok:t,text:t?`已登录`:`未登录`})}),(0,T.jsx)(Qo,{icon:Re,label:`同步状态`,children:(0,T.jsxs)(`span`,{className:`max-w-[180px] truncate text-right text-xs font-semibold text-slate-600`,children:[$o(n),` · `,r]})}),(0,T.jsx)(Qo,{icon:Re,label:`最近同步`,children:(0,T.jsx)(`span`,{className:`text-xs font-semibold text-slate-600`,children:a?`待同步 ${a}`:Xo(i)})})]})]})}function ts(e){return e?new Date(e).toLocaleString(`zh-CN`,{month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`}):`未同步`}function ns({configured:e,online:t,state:n,message:r,lastSyncAt:i,pendingCount:a=0}){return(0,T.jsxs)(`span`,{className:`inline-flex max-w-full min-h-8 items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-semibold leading-snug ${!e||!t||n===`error`?`border-amber-200 bg-amber-50 text-amber-700`:n===`success`?`border-emerald-200 bg-emerald-50 text-emerald-700`:`border-sky-200 bg-sky-50 text-harbor`}`,children:[(0,T.jsx)(e?t?n===`syncing`?je:n===`success`?le:he:et:me,{size:14,className:`shrink-0 ${n===`syncing`?`animate-spin`:``}`,"aria-hidden":`true`}),(0,T.jsx)(`span`,{className:`min-w-0`,children:r}),a?(0,T.jsxs)(`span`,{className:`shrink-0`,children:[`待同步 `,a]}):null,(0,T.jsx)(`span`,{className:`hidden shrink-0 text-slate-500 sm:inline`,children:ts(i)})]})}function rs({configured:e,online:t,user:n,profile:r,state:i,message:a,lastSyncAt:o,pendingCount:s,onLogin:c,onRegister:l,onSync:u,onLogout:d,onExport:f,onImport:p}){return(0,T.jsxs)(`div`,{className:`space-y-5`,children:[(0,T.jsx)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:(0,T.jsxs)(`div`,{className:`flex flex-wrap items-start justify-between gap-4`,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Account`}),(0,T.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`账号与云同步`}),(0,T.jsx)(`p`,{className:`mt-2 text-sm leading-6 text-slate-500`,children:`游客模式仍可本地使用；登录后可以跨设备同步学习进度。`})]}),(0,T.jsx)(ns,{configured:e,online:t,state:i,message:a,lastSyncAt:o,pendingCount:s})]})}),(0,T.jsxs)(`div`,{className:`grid gap-5 lg:grid-cols-[1.05fr_0.95fr]`,children:[(0,T.jsx)(es,{online:t,loggedIn:!!n,syncState:i,syncMessage:a,lastSyncAt:o,pendingCount:s}),(0,T.jsx)(St,{})]}),n?(0,T.jsxs)(`section`,{className:`grid gap-4 lg:grid-cols-[0.9fr_1.1fr]`,children:[(0,T.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,T.jsx)(`h2`,{className:`text-lg font-semibold text-ink`,children:`登录状态`}),(0,T.jsxs)(`div`,{className:`mt-4 space-y-3 text-sm`,children:[(0,T.jsxs)(`div`,{className:`flex justify-between gap-3 rounded-lg border border-sky-100 bg-[#f8fbff] px-3 py-2`,children:[(0,T.jsx)(`span`,{className:`text-slate-500`,children:`用户名`}),(0,T.jsx)(`span`,{className:`font-semibold text-ink`,children:r?.username||`未设置`})]}),(0,T.jsxs)(`div`,{className:`flex justify-between gap-3 rounded-lg border border-sky-100 bg-[#f8fbff] px-3 py-2`,children:[(0,T.jsx)(`span`,{className:`text-slate-500`,children:`邮箱`}),(0,T.jsx)(`span`,{className:`max-w-[220px] truncate font-semibold text-ink`,children:n.email})]}),(0,T.jsxs)(`div`,{className:`flex justify-between gap-3 rounded-lg border border-sky-100 bg-[#f8fbff] px-3 py-2`,children:[(0,T.jsx)(`span`,{className:`text-slate-500`,children:`上次同步`}),(0,T.jsx)(`span`,{className:`font-semibold text-ink`,children:o?new Date(o).toLocaleString(`zh-CN`):`未同步`})]})]}),(0,T.jsxs)(`button`,{type:`button`,onClick:d,className:`btn-danger mt-5 w-full`,children:[(0,T.jsx)(Ne,{size:18,"aria-hidden":`true`}),`退出登录`]})]}),(0,T.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,T.jsx)(`h2`,{className:`text-lg font-semibold text-ink`,children:`同步操作`}),(0,T.jsxs)(`div`,{className:`mt-5 grid gap-3 sm:grid-cols-3`,children:[(0,T.jsxs)(`button`,{type:`button`,onClick:()=>u(`upload`),disabled:!e||!t,className:`btn-secondary disabled:opacity-45`,children:[(0,T.jsx)(w,{size:18,"aria-hidden":`true`}),`上传本地`]}),(0,T.jsxs)(`button`,{type:`button`,onClick:()=>u(`download`),disabled:!e||!t,className:`btn-secondary disabled:opacity-45`,children:[(0,T.jsx)(pe,{size:18,"aria-hidden":`true`}),`下载云端`]}),(0,T.jsxs)(`button`,{type:`button`,onClick:()=>u(`merge`),disabled:!e||!t,className:`btn-primary disabled:opacity-45`,children:[(0,T.jsx)(we,{size:18,"aria-hidden":`true`}),`合并`]})]}),(0,T.jsxs)(`div`,{className:`mt-5 grid gap-3 sm:grid-cols-2`,children:[(0,T.jsxs)(`button`,{type:`button`,onClick:f,className:`btn-secondary`,children:[(0,T.jsx)(_e,{size:18,"aria-hidden":`true`}),`导出本地数据`]}),(0,T.jsxs)(`label`,{className:`btn-secondary cursor-pointer`,children:[(0,T.jsx)(Xe,{size:18,"aria-hidden":`true`}),`导入本地数据`,(0,T.jsx)(`input`,{type:`file`,accept:`application/json,.json`,className:`sr-only`,onChange:e=>{let t=e.target.files?.[0];t&&(t.text().then(p),e.target.value=``)}})]})]})]})]}):(0,T.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,T.jsx)(`h2`,{className:`text-lg font-semibold text-ink`,children:`当前是游客模式`}),(0,T.jsx)(`p`,{className:`mt-2 text-sm leading-6 text-slate-500`,children:`学习数据已保存在本地。Supabase 配置完成后，可以注册或登录账号，再选择上传本地、下载云端或合并两边数据。`}),(0,T.jsxs)(`div`,{className:`mt-5 flex flex-wrap gap-3`,children:[(0,T.jsx)(`button`,{type:`button`,onClick:c,disabled:!e,className:`btn-primary disabled:opacity-45`,children:`登录账号`}),(0,T.jsx)(`button`,{type:`button`,onClick:l,disabled:!e,className:`btn-secondary disabled:opacity-45`,children:`注册账号`})]}),e?null:(0,T.jsx)(`p`,{className:`mt-3 text-xs leading-5 text-amber-700`,children:`当前线上包未读取到 Supabase 配置，所以登录/注册暂时不可用。`})]})]})}function is({achievement:e,stats:t}){return(0,T.jsxs)(`div`,{className:`rounded-lg border p-4 ${t.checkedAchievementIds.includes(e.id)?`border-spruce/30 bg-spruce/10`:`border-slate-200 bg-white`}`,children:[(0,T.jsx)(`div`,{className:`font-semibold text-ink`,children:e.title}),(0,T.jsx)(`div`,{className:`mt-1 text-sm text-slate-500`,children:e.description}),(0,T.jsxs)(`div`,{className:`mt-3 text-xs font-semibold text-harbor`,children:[`XP `,e.rewardXp,` / 金币 `,e.rewardCoins]})]})}function as(e=new Date){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}function os(e,t){let n=new Date(e);return n.setDate(n.getDate()+t),n}function ss(e,t=new Date){return e?e===as(os(t,-1)):!1}function cs(e,t=new Date){return!!(e&&e===as(t))}function ls(e){let t=Math.floor(e/60),n=Math.floor(t/60),r=t%60;return n<=0?`${t}分钟`:`${n}小时${r?`${r}分钟`:``}`}function us(e,t=new Date){return Array.from({length:e},(n,r)=>as(os(t,r-e+1)))}function ds(e,t=new Date){let n=new Date(`${e}T00:00:00`),r=new Date(t),i=r.getDay()||7;r.setDate(r.getDate()-i+1),r.setHours(0,0,0,0);let a=os(r,7);return n>=r&&n<a}function fs(e,t=new Date){let n=new Date(`${e}T00:00:00`);return n.getFullYear()===t.getFullYear()&&n.getMonth()===t.getMonth()}var ps={xp:300,coins:120,monsterPoints:300};function ms(e){return Math.floor(Math.sqrt(e/100))+1}function hs(e){return e<=3?`入门背词者`:e<=6?`稳定学习者`:e<=10?`复习执行者`:e<=15?`考研单词斗士`:e<=20?`长期主义者`:`红宝书征服者`}function gs(e){return e*e*100}function _s(e,t){if(!t)return e;let n=new Date().toISOString();return e.find(e=>e.itemId===t)?e.map(e=>e.itemId===t?{...e,count:e.count+1}:e):[...e,{itemId:t,count:1,obtainedAt:n}]}function vs(e,t){let n=as(),r=e.dailyRewardCaps[n]||{xp:0,coins:0,monsterPoints:0},i=t.xp||0,a=t.coins||0,o=t.monsterPoints||0,s=t.bypassDailyCap?i:Math.max(0,Math.min(i,ps.xp-r.xp)),c=t.bypassDailyCap?a:Math.max(0,Math.min(a,ps.coins-r.coins)),l=t.bypassDailyCap?o:Math.max(0,Math.min(o,ps.monsterPoints-r.monsterPoints)),u={id:`reward-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:t.type,title:t.title,description:t.description,xp:s,coins:c,createdAt:new Date().toISOString()},d=e.totalXp+s;return{...e,totalXp:d,level:ms(d),coins:e.coins+c,diamonds:e.diamonds+(t.diamonds||0),monsterPoints:e.monsterPoints+l,inventory:_s(e.inventory,t.itemId),rewardHistory:[u,...e.rewardHistory].slice(0,200),dailyRewardCaps:{...e.dailyRewardCaps,[n]:{xp:r.xp+(t.bypassDailyCap?0:s),coins:r.coins+(t.bypassDailyCap?0:c),monsterPoints:r.monsterPoints+(t.bypassDailyCap?0:l)}}}}var ys=`reword-progress-v1`,bs=`reword-user-stats-v1`;function xs(e){return{wordId:e,learned:!1,stage:0,knownCount:0,fuzzyCount:0,forgottenCount:0,correctCount:0,wrongCount:0,reviewHistory:[]}}function Ss(e,t,n=new Date){return{...e,reviewHistory:[...e.reviewHistory,{action:t,at:n.toISOString(),stage:e.stage}].slice(-200)}}function Cs(){return typeof window<`u`&&`localStorage`in window}function ws(){if(!Cs())return{};let e=window.localStorage.getItem(ys);if(!e)return{};try{let t=JSON.parse(e);return t&&typeof t==`object`?t:{}}catch{return{}}}function Ts(e){Cs()&&window.localStorage.setItem(ys,JSON.stringify(e))}function Es(){Cs()&&(window.localStorage.removeItem(ys),window.localStorage.removeItem(bs))}function Ds(){return JSON.stringify({progress:ws(),userStats:js()},null,2)}function Os(e){let t=JSON.parse(e);if(!t||typeof t!=`object`)throw Error(`进度文件格式不正确`);let n=t,r=n.progress||t;return Ts(r),n.userStats&&Ms(As(n.userStats)),r}function ks(){return{totalStudyDays:0,currentStreak:0,longestStreak:0,signInStreak:0,lastSignInDate:null,lastCheckInDate:null,totalStudyMinutes:0,totalWordsLearned:0,totalWordsReviewed:0,totalQuizCount:0,totalCorrectCount:0,totalWrongCount:0,totalXp:0,level:1,coins:0,diamonds:0,monsterPoints:0,defeatedMonsters:0,unlockedItems:[`theme-default`,`avatar-default`],equippedTheme:`theme-default`,equippedAvatar:`avatar-default`,checkedAchievementIds:[],defeatedWordIds:[],defeatedBossIds:[],dailyRewardCaps:{},checkInHistory:[],studySessions:[],rewardHistory:[],inventory:[],audioSettings:{autoPlayOnStudy:!1,autoPlayOnRecall:!1,defaultAccent:`us`,speechRate:.9,repeatCount:1}}}function As(e){let t=ks();return{...t,...e,audioSettings:{...t.audioSettings,...e.audioSettings},dailyRewardCaps:e.dailyRewardCaps||{},checkInHistory:e.checkInHistory||[],studySessions:e.studySessions||[],rewardHistory:e.rewardHistory||[],inventory:e.inventory||[],unlockedItems:e.unlockedItems||t.unlockedItems,checkedAchievementIds:e.checkedAchievementIds||[],defeatedWordIds:e.defeatedWordIds||[],defeatedBossIds:e.defeatedBossIds||[],level:Math.floor(Math.sqrt((e.totalXp||0)/100))+1}}function js(){if(!Cs())return ks();let e=window.localStorage.getItem(bs);if(!e)return ks();try{return As(JSON.parse(e))}catch{return ks()}}function Ms(e){Cs()&&window.localStorage.setItem(bs,JSON.stringify({...e,level:Math.floor(Math.sqrt(e.totalXp/100))+1}))}var Ns=[{stage:1,label:`5分钟`,ms:300*1e3},{stage:2,label:`30分钟`,ms:1800*1e3},{stage:3,label:`12小时`,ms:720*60*1e3},{stage:4,label:`1天`,ms:1440*60*1e3},{stage:5,label:`2天`,ms:2880*60*1e3},{stage:6,label:`4天`,ms:5760*60*1e3},{stage:7,label:`7天`,ms:10080*60*1e3},{stage:8,label:`15天`,ms:360*60*60*1e3}];function Ps(e){return Ns.find(t=>t.stage===e)||Ns[0]}function Fs(e,t){return{...e,learned:!0,firstLearnedAt:e.firstLearnedAt||t.toISOString(),lastReviewedAt:t.toISOString()}}function Is(e,t=new Date){let n=Ps(Math.max(1,Math.min(e,8)));return new Date(t.getTime()+n.ms).toISOString()}function Ls(e,t=new Date){return Ss({...Fs(e,t),nextReviewAt:Is(1,t)},`learned`,t)}function Rs(e,t=new Date){let n=Math.min(8,e.stage+1);return Ss({...Fs(e,t),stage:n,knownCount:e.knownCount+1,nextReviewAt:Is(n,t)},`known`,t)}function zs(e,t=new Date){return Ss({...Fs(e,t),fuzzyCount:e.fuzzyCount+1,nextReviewAt:new Date(t.getTime()+1800*1e3).toISOString()},`fuzzy`,t)}function Bs(e,t=new Date){return Ss({...Fs(e,t),stage:0,forgottenCount:e.forgottenCount+1,nextReviewAt:Is(1,t)},`forgotten`,t)}function Vs(e,t=new Date){return!e?.learned||!e.nextReviewAt?!1:new Date(e.nextReviewAt).getTime()<=t.getTime()}function Hs(e){return!!(e&&e.stage>=8&&e.correctCount>=2)}function Us(e,t,n=new Date){return e.filter(e=>Vs(t[e.id],n)).sort((e,n)=>new Date(t[e.id]?.nextReviewAt||0).getTime()-new Date(t[n.id]?.nextReviewAt||0).getTime())}function Ws(e,t){return e.filter(e=>Hs(t[e.id]))}function Gs(e,t){return e.filter(e=>{let n=t[e.id];return!!(n&&n.fuzzyCount>0&&!Hs(n))})}function Ks(e,t){return e.filter(e=>(t[e.id]?.wrongCount||0)>0)}function qs(e,t=new Date){if(!e)return!1;let n=new Date(e);return n.getFullYear()===t.getFullYear()&&n.getMonth()===t.getMonth()&&n.getDate()===t.getDate()}function Js(e,t=new Date){let n=new Set;Object.values(e).forEach(e=>{e.reviewHistory.forEach(e=>n.add(e.at.slice(0,10))),e.firstLearnedAt&&n.add(e.firstLearnedAt.slice(0,10))});let r=0,i=new Date(t);for(;n.has(i.toISOString().slice(0,10));)r+=1,i.setDate(i.getDate()-1);return r}function Ys(e,t,n=new Date){let r=Us(e,t,n),i=Ws(e,t),a=Gs(e,t),o=Ks(e,t),s=e.filter(e=>t[e.id]?.learned),c=s.filter(e=>qs(t[e.id]?.firstLearnedAt,n)),l=e.filter(e=>(t[e.id]?.forgottenCount||0)>0).length;return{dueCount:r.length,todayNewCount:c.length,totalCount:e.length,learnedCount:s.length,masteredCount:i.length,weakCount:a.length,wrongCount:o.length,forgottenCount:l,streak:Js(t,n),progressPercent:e.length?Math.round(i.length/e.length*100):0}}var Xs=[{id:`first-word`,title:`第一次学习`,description:`完成第一个单词`,rewardXp:20,rewardCoins:8},{id:`first-correct`,title:`初战告捷`,description:`第一次测试答对`,rewardXp:20,rewardCoins:8},{id:`unit1-20`,title:`Unit1 入门`,description:`Unit1 学习 20 个单词`,rewardXp:40,rewardCoins:15},{id:`hundred-mastered`,title:`百词斩`,description:`掌握 100 个单词`,rewardXp:120,rewardCoins:50,rewardDiamonds:1},{id:`seven-checkin`,title:`七日坚持`,description:`连续打卡 7 天`,rewardXp:90,rewardCoins:30},{id:`thirty-checkin`,title:`长期主义者`,description:`连续打卡 30 天`,rewardXp:220,rewardCoins:80,rewardDiamonds:2}];function Zs(e,t,n){let r=t.filter(e=>n[e.id]?.learned).length,i=Object.values(n).reduce((e,t)=>e+t.correctCount,0),a=t.filter(e=>e.unitId===`unit1`&&n[e.id]?.learned).length,o=t.filter(e=>Hs(n[e.id])).length,s={"first-word":r>=1,"first-correct":i>=1,"unit1-20":a>=20,"hundred-mastered":o>=100,"seven-checkin":e.currentStreak>=7||e.longestStreak>=7,"thirty-checkin":e.currentStreak>=30||e.longestStreak>=30};return Xs.filter(e=>s[e.id])}function Qs(e,t,n){let r=e;return Zs(e,t,n).forEach(e=>{r.checkedAchievementIds.includes(e.id)||(r=vs({...r,checkedAchievementIds:[...r.checkedAchievementIds,e.id]},{type:`achievement`,title:e.title,description:e.description,xp:e.rewardXp,coins:e.rewardCoins,diamonds:e.rewardDiamonds,itemId:`badge-${e.id}`,bypassDailyCap:!0}))}),r}function $s({stats:e,words:t,progressMap:n}){let r=new Set(Zs(e,t,n).map(e=>e.id));return(0,T.jsxs)(`div`,{className:`space-y-5`,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Achievements`}),(0,T.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`成就徽章`})]}),(0,T.jsx)(`div`,{className:`grid gap-4 md:grid-cols-2 lg:grid-cols-3`,children:Xs.map(t=>(0,T.jsx)(`div`,{className:!r.has(t.id)&&!e.checkedAchievementIds.includes(t.id)?`opacity-60`:``,children:(0,T.jsx)(is,{achievement:t,stats:e})},t.id))})]})}function ec(e,t,n,r=new Date){let i=as(r),a=e.filter(e=>t[e.id]?.firstLearnedAt?.slice(0,10)===i).length,o=e.filter(e=>t[e.id]?.lastReviewedAt?.slice(0,10)===i&&t[e.id]?.learned).length,s=n.studySessions.filter(e=>e.date===i).reduce((e,t)=>e+t.durationSeconds,0),c=n.studySessions.filter(e=>e.date===i&&e.mode===`quiz`&&e.wordCount>=20).reduce((e,t)=>e+t.wordCount,0),l=e.filter(e=>Vs(t[e.id],r)).length;return{newWords:a,reviewedWords:o,studyMinutes:Math.floor(s/60),testCount:c,dueLeft:l}}function tc(e,t,n,r=new Date){let i=ec(e,t,n,r);return[{id:`new-words`,title:`学习 10 个新单词`,current:i.newWords,target:10,reward:`XP 30 / 金币 12`},{id:`review`,title:`完成 20 个复习`,current:i.reviewedWords,target:20,reward:`XP 40 / 金币 16`},{id:`quiz`,title:`完成一次 20 题测试`,current:i.testCount,target:20,reward:`XP 35 / 金币 10`},{id:`time`,title:`学习满 15 分钟`,current:i.studyMinutes,target:15,reward:`XP 20 / 金币 10`}]}function nc(e,t,n,r=new Date){return cs(n.lastCheckInDate,r)?!1:tc(e,t,n,r).some(e=>e.current>=e.target)}function rc(e,t=new Date){let n=as(t);if(cs(e.lastSignInDate,t))return e;let r=ss(e.lastSignInDate,t)?e.signInStreak+1:1,i=2,a;return r%30==0?(i+=80,a=`theme-morning`):r%14==0?(i+=30,a=`tool-review-boost`):r%7==0?(i+=15,a=`tool-focus-card`):r%3==0&&(i+=5),vs({...e,signInStreak:r,lastSignInDate:n},{type:`signin`,title:`每日签到`,description:`连续签到 ${r} 天`,xp:5,coins:i,itemId:a,bypassDailyCap:!0})}function ic(e,t=new Date){let n=as(t);if(cs(e.lastCheckInDate,t))return e;let r=ss(e.lastCheckInDate,t)?e.currentStreak+1:1,i=20,a=50,o=0,s;return[7,14,30,100].includes(r)&&(o+=1),r===3&&(i+=10),r===7&&(i+=30,s=`badge-seven-days`),r===14&&(a+=80,s=`tool-review-boost`),r===30&&(a+=200,i+=80,s=`avatar-thirty-days`),r===100&&(a+=800,i+=300,s=`badge-longterm`),vs({...e,currentStreak:r,longestStreak:Math.max(e.longestStreak,r),totalStudyDays:e.checkInHistory.some(e=>e.date===n)?e.totalStudyDays:e.totalStudyDays+1,lastCheckInDate:n,checkInHistory:[{date:n,checkedAt:t.toISOString(),streakDay:r,rewardCoins:i,rewardXp:a,rewardItem:s},...e.checkInHistory].slice(0,365)},{type:`checkin`,title:`完成今日打卡`,description:`连续打卡 ${r} 天`,xp:a,coins:i,diamonds:o,itemId:s,bypassDailyCap:!0})}function ac(e,t=new Date){let n=new Date(t.getFullYear(),t.getMonth(),1),r=new Date(t.getFullYear(),t.getMonth()+1,0),i=new Set(e.checkInHistory.map(e=>e.date));return Array.from({length:r.getDate()},(e,r)=>{let a=as(os(n,r));return{date:a,day:r+1,checked:i.has(a),today:a===as(t)}})}function oc({stats:e}){return(0,T.jsx)(`div`,{className:`grid grid-cols-7 gap-2`,children:ac(e).map(e=>(0,T.jsx)(`div`,{className:`grid h-10 place-items-center rounded-lg border text-sm ${e.checked?`border-spruce/30 bg-spruce/10 font-semibold text-spruce`:e.today?`border-harbor bg-white text-harbor`:`border-slate-200 bg-[#f8fbff] text-slate-500`}`,children:e.day},e.date))})}function sc({value:e,max:t=100,label:n}){let r=t===0?0:Math.min(100,Math.round(e/t*100));return(0,T.jsxs)(`div`,{className:`space-y-2`,children:[n?(0,T.jsxs)(`div`,{className:`flex items-center justify-between text-xs text-slate-500`,children:[(0,T.jsx)(`span`,{children:n}),(0,T.jsxs)(`span`,{children:[r,`%`]})]}):null,(0,T.jsx)(`div`,{className:`h-2 overflow-hidden rounded-full bg-slate-200`,children:(0,T.jsx)(`div`,{className:`h-full rounded-full bg-harbor transition-all duration-500`,style:{width:`${r}%`}})})]})}function cc({words:e,progressMap:t,stats:n,onSignIn:r,onCheckIn:i}){let a=tc(e,t,n),o=as(),s=n.lastSignInDate===o,c=n.lastCheckInDate===o,l=nc(e,t,n);return(0,T.jsxs)(`div`,{className:`space-y-5`,children:[(0,T.jsx)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:(0,T.jsxs)(`div`,{className:`flex flex-wrap items-start justify-between gap-4`,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Check In`}),(0,T.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`打卡中心`}),(0,T.jsx)(`p`,{className:`mt-2 text-sm text-slate-500`,children:`签到是轻量奖励，打卡需要完成学习目标。`})]}),(0,T.jsxs)(`div`,{className:`flex gap-3`,children:[(0,T.jsxs)(`button`,{type:`button`,onClick:r,disabled:s,className:`btn-secondary disabled:opacity-40`,children:[(0,T.jsx)(Ce,{size:18,"aria-hidden":`true`}),s?`今日已签到`:`每日签到`]}),(0,T.jsxs)(`button`,{type:`button`,onClick:i,disabled:!l||c,className:`btn-primary disabled:opacity-40`,children:[(0,T.jsx)(le,{size:18,"aria-hidden":`true`}),c?`今日已打卡`:l?`完成今日打卡`:`未达成打卡条件`]})]})]})}),(0,T.jsxs)(`section`,{className:`grid gap-4 lg:grid-cols-[1fr_0.8fr]`,children:[(0,T.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,T.jsx)(`h2`,{className:`font-semibold text-ink`,children:`今日任务`}),(0,T.jsx)(`div`,{className:`mt-4 space-y-4`,children:a.map(e=>(0,T.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-[#f8fbff] p-4`,children:[(0,T.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,T.jsx)(`div`,{className:`font-semibold text-ink`,children:e.title}),(0,T.jsxs)(`div`,{className:`text-sm text-slate-500`,children:[Math.min(e.current,e.target),` / `,e.target]})]}),(0,T.jsx)(`div`,{className:`mt-3`,children:(0,T.jsx)(sc,{value:e.current,max:e.target,label:e.reward})})]},e.id))})]}),(0,T.jsxs)(`div`,{className:`space-y-4`,children:[(0,T.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,T.jsx)(`h2`,{className:`font-semibold text-ink`,children:`连续记录`}),(0,T.jsxs)(`div`,{className:`mt-4 grid grid-cols-2 gap-3 text-center`,children:[(0,T.jsxs)(`div`,{className:`rounded-lg bg-[#f8fbff] p-4`,children:[(0,T.jsx)(`div`,{className:`text-2xl font-semibold text-harbor`,children:n.currentStreak}),(0,T.jsx)(`div`,{className:`text-sm text-slate-500`,children:`连续打卡`})]}),(0,T.jsxs)(`div`,{className:`rounded-lg bg-[#f8fbff] p-4`,children:[(0,T.jsx)(`div`,{className:`text-2xl font-semibold text-harbor`,children:n.longestStreak}),(0,T.jsx)(`div`,{className:`text-sm text-slate-500`,children:`最长连续`})]})]})]}),(0,T.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,T.jsx)(`h2`,{className:`mb-4 font-semibold text-ink`,children:`本月打卡`}),(0,T.jsx)(oc,{stats:n})]})]})]})]})}function lc({stats:e}){return(0,T.jsxs)(`div`,{className:`flex flex-wrap gap-2 text-sm`,children:[(0,T.jsxs)(`span`,{className:`rounded-lg border border-amber-200 bg-amber-50 px-3 py-1.5 font-semibold text-amber-700`,children:[`金币 `,e.coins]}),(0,T.jsxs)(`span`,{className:`inline-flex items-center gap-1 rounded-lg border border-sky-200 bg-sky-50 px-3 py-1.5 font-semibold text-sky-700`,children:[(0,T.jsx)(Se,{size:15,"aria-hidden":`true`}),`钻石 `,e.diamonds]}),(0,T.jsxs)(`span`,{className:`inline-flex items-center gap-1 rounded-lg border border-violet-200 bg-violet-50 px-3 py-1.5 font-semibold text-violet-700`,children:[(0,T.jsx)(Ge,{size:15,"aria-hidden":`true`}),`打怪 `,e.monsterPoints]})]})}function uc({stats:e}){let t=(e.level-1)*(e.level-1)*100,n=gs(e.level),r=e.totalXp-t,i=Math.max(1,n-t);return(0,T.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-soft`,children:[(0,T.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`div`,{className:`text-sm text-slate-500`,children:`当前等级`}),(0,T.jsxs)(`div`,{className:`text-2xl font-semibold text-ink`,children:[`Lv.`,e.level]})]}),(0,T.jsx)(`div`,{className:`text-right text-sm font-semibold text-harbor`,children:hs(e.level)})]}),(0,T.jsx)(`div`,{className:`mt-4`,children:(0,T.jsx)(sc,{value:r,max:i,label:`XP ${e.totalXp}，距离下一级 ${Math.max(0,n-e.totalXp)}`})})]})}function dc(){return(0,T.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,T.jsx)(`div`,{className:`mb-4 flex items-end justify-between gap-4`,children:(0,T.jsx)(`div`,{children:(0,T.jsx)(`h2`,{className:`text-lg font-semibold text-ink`,children:`艾宾浩斯复习时间轴`})})}),(0,T.jsx)(`div`,{className:`grid gap-3 sm:grid-cols-2 lg:grid-cols-4`,children:Ns.map(e=>(0,T.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-[#f8fbff] p-3`,children:[(0,T.jsxs)(`div`,{className:`text-xs text-slate-500`,children:[`Stage `,e.stage]}),(0,T.jsx)(`div`,{className:`mt-1 font-semibold text-harbor`,children:e.label})]},e.stage))})]})}var fc={current:`bg-harbor/10 text-harbor`,spruce:`bg-spruce/10 text-spruce`,copper:`bg-copper/10 text-copper`,slate:`bg-slate-200 text-slate-700`};function G({label:e,value:t,tone:n=`current`,icon:r}){return(0,T.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-3 shadow-soft`,children:[(0,T.jsx)(`div`,{className:`mb-3 grid h-8 w-8 place-items-center rounded-md ${fc[n]}`,children:(0,T.jsx)(r,{size:18,"aria-hidden":`true`})}),(0,T.jsx)(`div`,{className:`text-2xl font-semibold leading-none text-ink`,children:t}),(0,T.jsx)(`div`,{className:`mt-1 text-sm text-slate-500`,children:e})]})}var pc=new Date(`2026-12-19T14:00:00+08:00`),mc=[`坚持就是胜利，重复就是答案。`,`今天多记一轮，考场少慌一分。`,`背词不是拼爆发，是把每天的重复做稳。`,`看似慢的复习，最后会变成最快的提分。`];function hc(e=new Date){let t=Math.max(0,pc.getTime()-e.getTime()),n=Math.floor(t/36e5);return{days:Math.floor(t/864e5),hours:n%24,minutes:Math.floor(t/6e4)%60,expired:t===0}}function gc(e=new Date){return mc[Math.floor(e.getTime()/864e5)%mc.length]}function _c(e,t,n=0){let r=new Date;return{id:`session-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,date:as(r),startedAt:r.toISOString(),endedAt:r.toISOString(),durationSeconds:0,mode:e,unitId:t,wordCount:n}}function K(e,t){if(t.durationSeconds<30)return e;let n=Math.floor(t.durationSeconds/60);return{...e,totalStudyMinutes:e.totalStudyMinutes+n,studySessions:[t,...e.studySessions].slice(0,500)}}function vc(e){let t=as(),n=yc(e.studySessions.filter(e=>e.date===t)),r=yc(e.studySessions.filter(e=>ds(e.date))),i=yc(e.studySessions.filter(e=>fs(e.date))),a=e.totalStudyMinutes*60,o=new Set(e.studySessions.map(e=>e.date)).size||1,s=Math.max(0,...e.studySessions.map(e=>e.durationSeconds)),c=e.studySessions.reduce((e,t)=>(e[t.mode]=(e[t.mode]||0)+t.durationSeconds,e),{});return{todaySeconds:n,weekSeconds:r,monthSeconds:i,totalSeconds:a,averageSeconds:Math.floor(a/o),longestSeconds:s,modeTotals:c}}function yc(e){return e.reduce((e,t)=>e+t.durationSeconds,0)}function bc(e,t){return us(t).map(t=>({date:t,seconds:yc(e.studySessions.filter(e=>e.date===t))}))}function xc(e,t){let n=e.reduce((e,n)=>{let r=e[n.unitName]||{total:0,mastered:0};return r.total+=1,Hs(t[n.id])&&(r.mastered+=1),e[n.unitName]=r,e},{});return Object.entries(n).map(([e,t])=>({unitName:e,...t,percent:t.total?Math.round(t.mastered/t.total*100):0})).sort((e,t)=>t.percent-e.percent)}function Sc(e){if(!e)return`未安排`;let t=new Date(e);return Number.isNaN(t.getTime())?`未安排`:new Intl.DateTimeFormat(`zh-CN`,{month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`}).format(t)}function Cc(e){return e?.learned?Hs(e)?`已掌握`:Vs(e)?`待复习`:e.fuzzyCount>0?`需巩固`:`学习中`:`未学习`}function wc(e,t){return{learned:e.filter(e=>t[e.id]?.learned).length,mastered:e.filter(e=>Hs(t[e.id])).length,due:e.filter(e=>Vs(t[e.id])).length}}function Tc({units:e,words:t,progressMap:n,stats:r,onSignIn:i,onNavigateReview:a,onNavigateUnits:o,onNavigateCheckIn:s,onNavigateMonster:c,onNavigateShop:l,onNavigateStatistics:u,onNavigateLogin:d,onNavigateAccount:f,syncStatus:p}){let m=Ys(t,n),h=vc(r),g=tc(t,n,r),_=Us(t,n).slice(0,6),v=as(),y=r.lastSignInDate===v,b=r.lastCheckInDate===v,x=nc(t,n,r),S=r.rewardHistory.slice(0,3),C=hc(),ee=gc();return(0,T.jsxs)(`div`,{className:`space-y-5`,children:[(0,T.jsxs)(`section`,{className:`hero-panel relative overflow-hidden`,children:[(0,T.jsx)(`div`,{className:`pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(90deg,rgba(111,185,219,0.28),rgba(255,255,255,0))]`}),(0,T.jsxs)(`div`,{className:`relative max-w-2xl`,children:[(0,T.jsx)(`div`,{className:`mb-3 text-xs font-semibold uppercase text-copper`,children:`Seaside Study Desk`}),(0,T.jsx)(`h1`,{className:`font-display text-3xl font-semibold leading-tight text-ink md:text-4xl`,children:`考研英语倒计时`}),(0,T.jsxs)(`div`,{className:`mt-3 flex flex-wrap items-end gap-3`,children:[(0,T.jsx)(`div`,{className:`font-display text-6xl font-semibold leading-none text-harbor md:text-7xl`,children:C.days}),(0,T.jsxs)(`div`,{className:`pb-2`,children:[(0,T.jsxs)(`div`,{className:`text-lg font-semibold text-ink`,children:[`天 `,C.hours,`小时 `,C.minutes,`分钟`]}),(0,T.jsxs)(`div`,{className:`text-sm text-slate-500`,children:[`预估英语考试：`,pc.getFullYear(),`-12-19 14:00`]})]})]}),(0,T.jsx)(`div`,{className:`mt-4 rounded-lg border border-sky-100 bg-white/80 p-3 text-sm font-semibold leading-6 text-slate-700`,children:ee}),(0,T.jsxs)(`div`,{className:`mt-4 grid gap-3 text-sm text-slate-600 sm:grid-cols-3`,children:[(0,T.jsxs)(`div`,{className:`rounded-lg border border-sky-100 bg-white/90 px-3 py-2`,children:[(0,T.jsx)(`span`,{className:`block text-xs text-slate-400`,children:`必备单元`}),(0,T.jsx)(`span`,{className:`font-semibold text-ink`,children:e.length})]}),(0,T.jsxs)(`div`,{className:`rounded-lg border border-sky-100 bg-white/90 px-3 py-2`,children:[(0,T.jsx)(`span`,{className:`block text-xs text-slate-400`,children:`词量`}),(0,T.jsx)(`span`,{className:`font-semibold text-ink`,children:t.length})]}),(0,T.jsxs)(`button`,{type:`button`,onClick:u,className:`rounded-lg border border-sky-100 bg-white/90 px-3 py-2 text-left transition hover:border-harbor hover:text-harbor`,children:[(0,T.jsx)(`span`,{className:`block text-xs text-slate-400`,children:`今日时长`}),(0,T.jsx)(`span`,{className:`font-semibold text-ink`,children:ls(h.todaySeconds)})]})]}),(0,T.jsxs)(`div`,{className:`mt-4 flex flex-wrap items-center gap-2`,children:[(0,T.jsx)(ns,{configured:p.configured,online:p.online,state:p.state,message:p.message,lastSyncAt:p.lastSyncAt,pendingCount:p.pendingCount}),(0,T.jsxs)(`button`,{type:`button`,onClick:p.isLoggedIn?f:d,className:`btn-secondary min-h-8 px-3 py-1.5 text-xs`,children:[(0,T.jsx)(Me,{size:15,"aria-hidden":`true`}),p.isLoggedIn?`账号同步`:`登录同步`]})]}),(0,T.jsxs)(`div`,{className:`mt-5 flex flex-wrap gap-3`,children:[(0,T.jsxs)(`button`,{type:`button`,onClick:a,className:`btn-primary`,children:[(0,T.jsx)(oe,{size:18,"aria-hidden":`true`}),`开始今日复习`]}),(0,T.jsxs)(`button`,{type:`button`,onClick:o,className:`btn-secondary`,children:[(0,T.jsx)(Oe,{size:18,"aria-hidden":`true`}),`进入单元`]}),(0,T.jsxs)(`button`,{type:`button`,onClick:c,className:`btn-secondary`,children:[(0,T.jsx)(Ge,{size:18,"aria-hidden":`true`}),`打怪进度`]})]})]}),(0,T.jsxs)(`div`,{className:`hero-meter relative`,children:[(0,T.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`div`,{className:`text-sm text-slate-500`,children:`掌握进度`}),(0,T.jsxs)(`div`,{className:`mt-2 text-5xl font-semibold text-harbor`,children:[m.progressPercent,`%`]})]}),(0,T.jsx)(lc,{stats:r})]}),(0,T.jsx)(`div`,{className:`mt-4`,children:(0,T.jsx)(sc,{value:m.masteredCount,max:m.totalCount,label:`${m.masteredCount}/${m.totalCount}`})}),(0,T.jsxs)(`div`,{className:`mt-4 grid grid-cols-2 gap-2 text-sm`,children:[(0,T.jsxs)(`button`,{type:`button`,onClick:i,disabled:y,className:`btn-secondary min-h-10 disabled:opacity-45`,children:[(0,T.jsx)(Ce,{size:17,"aria-hidden":`true`}),y?`已签到`:`签到`]}),(0,T.jsxs)(`button`,{type:`button`,onClick:s,className:b||x?`btn-primary min-h-10`:`btn-secondary min-h-10`,children:[(0,T.jsx)(Ke,{size:17,"aria-hidden":`true`}),b?`已打卡`:x?`去打卡`:`看任务`]})]})]})]}),(0,T.jsx)(St,{compact:!0}),(0,T.jsxs)(`section`,{className:`grid gap-4 lg:grid-cols-[1fr_0.9fr]`,children:[(0,T.jsx)(uc,{stats:r}),(0,T.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-soft`,children:[(0,T.jsxs)(`div`,{className:`mb-3 flex items-center justify-between gap-3`,children:[(0,T.jsx)(`h2`,{className:`font-semibold text-ink`,children:`今日打卡条件`}),(0,T.jsx)(`button`,{type:`button`,onClick:s,className:`text-sm font-semibold text-harbor`,children:`打卡中心`})]}),(0,T.jsx)(`div`,{className:`grid gap-3 sm:grid-cols-2`,children:g.map(e=>(0,T.jsxs)(`div`,{className:`rounded-lg border border-sky-100 bg-[#f8fbff] p-3`,children:[(0,T.jsxs)(`div`,{className:`mb-2 flex items-center justify-between gap-3 text-sm`,children:[(0,T.jsx)(`span`,{className:`font-semibold text-ink`,children:e.title}),(0,T.jsxs)(`span`,{className:`text-slate-500`,children:[Math.min(e.current,e.target),`/`,e.target]})]}),(0,T.jsx)(sc,{value:e.current,max:e.target,label:e.reward})]},e.id))})]})]}),(0,T.jsxs)(`section`,{className:`rounded-lg border border-sky-100 bg-white p-5 shadow-soft`,children:[(0,T.jsxs)(`div`,{className:`flex flex-wrap items-start justify-between gap-4`,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsxs)(`div`,{className:`flex items-center gap-2 text-sm font-semibold text-harbor`,children:[(0,T.jsx)(ze,{size:18,"aria-hidden":`true`}),`重复记忆节奏`]}),(0,T.jsx)(`h2`,{className:`mt-2 text-xl font-semibold text-ink`,children:`新学一次，复习多轮，测试收口`})]}),(0,T.jsx)(`button`,{type:`button`,onClick:a,className:`btn-secondary`,children:`进入复习`})]}),(0,T.jsx)(`div`,{className:`mt-4 grid gap-3 md:grid-cols-4`,children:[[`初学`,`先把释义看清，加入今日学习`],[`5分钟`,`马上复现一次，挡住第一波遗忘`],[`间隔复习`,`按 Stage 自动推到 30 分钟、12 小时、1 天`],[`测试`,`用选择题把熟悉变成稳定掌握`]].map(([e,t])=>(0,T.jsxs)(`div`,{className:`rounded-lg border border-sky-100 bg-[#f8fbff] p-4`,children:[(0,T.jsx)(`div`,{className:`text-base font-semibold text-ink`,children:e}),(0,T.jsx)(`div`,{className:`mt-2 text-sm leading-6 text-slate-500`,children:t})]},e))})]}),(0,T.jsxs)(`section`,{className:`grid gap-4 sm:grid-cols-2 lg:grid-cols-4`,children:[(0,T.jsx)(G,{label:`今日应复习`,value:m.dueCount,icon:oe,tone:`current`}),(0,T.jsx)(G,{label:`今日新学`,value:m.todayNewCount,icon:te,tone:`spruce`}),(0,T.jsx)(G,{label:`连续打卡`,value:r.currentStreak,icon:be,tone:`copper`}),(0,T.jsx)(G,{label:`今日学习`,value:ls(h.todaySeconds),icon:se,tone:`slate`}),(0,T.jsx)(G,{label:`已掌握`,value:m.masteredCount,icon:Ke,tone:`spruce`}),(0,T.jsx)(G,{label:`不熟词`,value:m.weakCount,icon:Ye,tone:`copper`}),(0,T.jsx)(G,{label:`遗忘词`,value:m.forgottenCount,icon:xe,tone:`slate`}),(0,T.jsx)(G,{label:`错题词`,value:m.wrongCount,icon:ke,tone:`current`})]}),(0,T.jsxs)(`div`,{className:`grid gap-5 lg:grid-cols-[1.15fr_0.85fr]`,children:[(0,T.jsx)(dc,{}),(0,T.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,T.jsxs)(`div`,{className:`mb-4 flex items-center justify-between gap-4`,children:[(0,T.jsx)(`h2`,{className:`text-lg font-semibold text-ink`,children:`最近需要复习`}),(0,T.jsx)(`button`,{type:`button`,onClick:a,className:`text-sm font-semibold text-harbor`,children:`全部查看`})]}),(0,T.jsx)(`div`,{className:`space-y-3`,children:_.length?_.map(e=>(0,T.jsxs)(`div`,{className:`flex items-center justify-between gap-3 rounded-lg border border-sky-100 bg-[#f8fbff] p-3`,children:[(0,T.jsxs)(`div`,{className:`min-w-0`,children:[(0,T.jsx)(`div`,{className:`truncate font-semibold text-ink`,children:e.word}),(0,T.jsx)(`div`,{className:`text-xs text-slate-500`,children:e.unitName})]}),(0,T.jsx)(`div`,{className:`shrink-0 text-xs text-copper`,children:Sc(n[e.id]?.nextReviewAt)})]},e.id)):(0,T.jsx)(`p`,{className:`rounded-lg border border-sky-100 bg-[#f8fbff] p-4 text-sm leading-6 text-slate-500`,children:`现在没有到期词，可以进入单元继续初学。`})})]})]}),(0,T.jsxs)(`section`,{className:`grid gap-4 lg:grid-cols-[0.9fr_1.1fr]`,children:[(0,T.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,T.jsxs)(`div`,{className:`mb-4 flex items-center justify-between gap-3`,children:[(0,T.jsx)(`h2`,{className:`font-semibold text-ink`,children:`快捷入口`}),(0,T.jsxs)(`button`,{type:`button`,onClick:l,className:`inline-flex items-center gap-1 text-sm font-semibold text-harbor`,children:[(0,T.jsx)(Ue,{size:16,"aria-hidden":`true`}),`商店`]})]}),(0,T.jsxs)(`div`,{className:`grid gap-3 sm:grid-cols-2`,children:[(0,T.jsxs)(`button`,{type:`button`,onClick:c,className:`mode-card`,children:[(0,T.jsx)(Ge,{size:20,"aria-hidden":`true`}),(0,T.jsx)(`span`,{children:`单词打怪`})]}),(0,T.jsxs)(`button`,{type:`button`,onClick:u,className:`mode-card`,children:[(0,T.jsx)(se,{size:20,"aria-hidden":`true`}),(0,T.jsx)(`span`,{children:`学习统计`})]})]})]}),(0,T.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,T.jsx)(`h2`,{className:`font-semibold text-ink`,children:`最新奖励`}),(0,T.jsx)(`div`,{className:`mt-4 space-y-3`,children:S.length?S.map(e=>(0,T.jsxs)(`div`,{className:`flex items-center justify-between gap-3 rounded-lg border border-sky-100 bg-[#f8fbff] p-3`,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`div`,{className:`font-semibold text-ink`,children:e.title}),(0,T.jsx)(`div`,{className:`text-xs text-slate-500`,children:e.description})]}),(0,T.jsxs)(`div`,{className:`shrink-0 text-sm font-semibold text-harbor`,children:[`+`,e.xp,` XP`]})]},e.id)):(0,T.jsx)(`p`,{className:`rounded-lg border border-sky-100 bg-[#f8fbff] p-4 text-sm text-slate-500`,children:`还没有奖励记录，先签到或学一个新词。`})})]})]})]})}function Ec({loading:e=!1,onSubmit:t,onForgotPassword:n}){let[r,i]=(0,y.useState)(``),[a,o]=(0,y.useState)(``),[s,c]=(0,y.useState)(null);return(0,T.jsxs)(`form`,{onSubmit:async e=>{e.preventDefault(),c(null),await t(r.trim(),a)},className:`space-y-4`,children:[(0,T.jsxs)(`label`,{className:`block`,children:[(0,T.jsx)(`span`,{className:`text-sm font-semibold text-slate-700`,children:`邮箱`}),(0,T.jsx)(`input`,{type:`email`,value:r,onChange:e=>i(e.target.value),required:!0,autoComplete:`email`,className:`mt-2 h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100`,placeholder:`name@example.com`})]}),(0,T.jsxs)(`label`,{className:`block`,children:[(0,T.jsx)(`span`,{className:`text-sm font-semibold text-slate-700`,children:`密码`}),(0,T.jsx)(`input`,{type:`password`,value:a,onChange:e=>o(e.target.value),required:!0,autoComplete:`current-password`,className:`mt-2 h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100`,placeholder:`输入密码`})]}),s?(0,T.jsx)(`div`,{className:`rounded-lg border border-sky-100 bg-sky-50 px-3 py-2 text-sm text-harbor`,children:s}):null,(0,T.jsxs)(`button`,{type:`submit`,disabled:e,className:`btn-primary w-full disabled:opacity-50`,children:[(0,T.jsx)(Me,{size:18,"aria-hidden":`true`}),`登录`]}),(0,T.jsxs)(`button`,{type:`button`,onClick:async()=>{if(!r.trim()){c(`先填写邮箱，再发送重置邮件。`);return}await n(r.trim()),c(`如果邮箱存在，重置邮件会发送到你的邮箱。`)},disabled:e,className:`btn-secondary w-full disabled:opacity-50`,children:[(0,T.jsx)(Be,{size:18,"aria-hidden":`true`}),`忘记密码`]}),(0,T.jsxs)(`div`,{className:`flex items-center justify-center gap-2 text-xs text-slate-500`,children:[(0,T.jsx)(Pe,{size:14,"aria-hidden":`true`}),`密码由 Supabase Auth 处理，本地不会保存明文密码。`]})]})}function Dc(e){return e?{id:e.id,userId:e.user_id,username:e.username,displayName:e.display_name,avatarUrl:e.avatar_url,createdAt:e.created_at,updatedAt:e.updated_at}:null}async function Oc(){if(!qo)return{session:null,user:null};let{data:e,error:t}=await qo.auth.getSession();if(t)throw t;return{session:e.session,user:e.session?.user||null}}async function kc(e){let{data:t,error:n}=await Yo().from(`profiles`).select(`*`).eq(`user_id`,e).maybeSingle();if(n)throw n;return Dc(t)}async function Ac(e,t){let n=Yo(),r=e.email?.split(`@`)[0]||`user_${e.id.slice(0,8)}`,i=(t||e.user_metadata?.username||r).trim(),{data:a,error:o}=await n.from(`profiles`).upsert({user_id:e.id,username:i,display_name:e.user_metadata?.display_name||i,updated_at:new Date().toISOString()},{onConflict:`user_id`}).select(`*`).single();if(o)throw o;return Dc(a)}async function jc({username:e,email:t,password:n}){let{data:r,error:i}=await Yo().auth.signUp({email:t,password:n,options:{data:{username:e,display_name:e}}});if(i)throw i;return r.user&&r.session&&await Ac(r.user,e),r}async function Mc({email:e,password:t}){let{data:n,error:r}=await Yo().auth.signInWithPassword({email:e,password:t});if(r)throw r;return n.user&&await Ac(n.user),n}async function Nc(){let{error:e}=await Yo().auth.signOut();if(e)throw e}async function Pc(e){let{error:t}=await Yo().auth.resetPasswordForEmail(e,{redirectTo:`${window.location.origin}/reword/`});if(t)throw t}function Fc({configured:e,loading:t,error:n,onLogin:r,onSuccess:i,onRegister:a,onGuest:o}){let[s,c]=(0,y.useState)(null);return(0,T.jsxs)(`div`,{className:`mx-auto grid min-h-[calc(100dvh-160px)] max-w-5xl items-center gap-5 lg:grid-cols-[1fr_420px]`,children:[(0,T.jsxs)(`section`,{className:`rounded-lg border border-sky-100 bg-white/90 p-5 shadow-soft`,children:[(0,T.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Cloud Account`}),(0,T.jsx)(`h1`,{className:`mt-2 text-3xl font-semibold text-ink`,children:`2027 考研英语记忆系统`}),(0,T.jsx)(`p`,{className:`mt-3 text-sm leading-6 text-slate-600`,children:`登录后可在手机、平板、电脑同步学习进度。未登录时仍可继续游客模式，数据会保存在本地。`}),(0,T.jsx)(`div`,{className:`mt-5 grid gap-3 sm:grid-cols-3`,children:[`本地先保存`,`登录后同步`,`换设备恢复`].map(e=>(0,T.jsx)(`div`,{className:`rounded-lg border border-sky-100 bg-[#f8fbff] px-3 py-3 text-sm font-semibold text-harbor`,children:e},e))})]}),(0,T.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,T.jsxs)(`div`,{className:`mb-5 flex items-center justify-between gap-3`,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`h2`,{className:`text-xl font-semibold text-ink`,children:`账号登录`}),(0,T.jsx)(`p`,{className:`mt-1 text-sm text-slate-500`,children:`邮箱 + 密码登录`})]}),(0,T.jsx)(`button`,{type:`button`,onClick:o,className:`icon-btn`,title:`返回游客模式`,children:(0,T.jsx)(S,{size:18,"aria-hidden":`true`})})]}),e?null:(0,T.jsx)(`div`,{className:`mb-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-800`,children:Jo()}),n?(0,T.jsx)(`div`,{className:`mb-4 rounded-lg border border-rose-100 bg-rose-50 px-3 py-2 text-sm text-rose-700`,children:n}):null,s?(0,T.jsx)(`div`,{className:`mb-4 rounded-lg border border-emerald-100 bg-emerald-50 px-3 py-2 text-sm text-emerald-700`,children:s}):null,(0,T.jsx)(Ec,{loading:t||!e,onSubmit:async(e,t)=>{await r(e,t),i()},onForgotPassword:async e=>{await Pc(e),c(`重置邮件已发送，请检查邮箱。`)}}),(0,T.jsxs)(`div`,{className:`mt-4 grid gap-3 sm:grid-cols-2`,children:[(0,T.jsxs)(`button`,{type:`button`,onClick:a,disabled:!e,className:`btn-secondary disabled:opacity-45`,children:[(0,T.jsx)(Ze,{size:18,"aria-hidden":`true`}),`注册账号`]}),(0,T.jsx)(`button`,{type:`button`,onClick:o,className:`btn-secondary`,children:`游客模式`})]})]})]})}function Ic(e,t){let n=t[e.id];if(Hs(n))return 0;if(!n)return 100;let r=n.knownCount*25+n.correctCount*20+n.fuzzyCount*10,i=n.forgottenCount*10+n.wrongCount*5;return Math.max(5,Math.min(100,100-r+i))}function Lc(e,t,n){let r=e.filter(e=>Hs(t[e.id])).length;return{defeatedWords:r,activeMonsters:e.length-r,defeatedBosses:n.defeatedBossIds.length,monsterPoints:n.monsterPoints}}function Rc(e,t,n){let r=e.words.filter(e=>t[e.id]?.learned).length,i=e.words.length?Math.round(r/e.words.length*100):0,a=Us(e.words,t).length,o=n.defeatedBossIds.includes(e.id),s=i>=80&&a===0;return{id:e.id,name:`${e.name} Boss`,subtitle:`${zc(e.order)}·Unit${e.order}`,learnedPercent:i,dueLeft:a,defeated:o,eligible:s,hp:o?0:s?100:Math.max(20,100-i)}}function zc(e){let t=[`遗忘兽`,`拖延兽`,`混淆兽`,`倦怠兽`,`焦虑兽`,`懒散兽`,`粗心兽`,`瓶颈兽`];return t[(e-1)%t.length]}function Bc({unit:e,progressMap:t,stats:n,onChallenge:r}){let i=Rc(e,t,n);return(0,T.jsxs)(`div`,{className:`rounded-lg border border-violet-200 bg-white p-4 shadow-soft`,children:[(0,T.jsxs)(`div`,{className:`flex items-start justify-between gap-3`,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`div`,{className:`font-semibold text-ink`,children:i.subtitle}),(0,T.jsxs)(`div`,{className:`mt-1 text-sm text-slate-500`,children:[`学习 `,i.learnedPercent,`% / 到期 `,i.dueLeft]})]}),(0,T.jsx)(`button`,{type:`button`,onClick:()=>r(e.id),disabled:!i.eligible||i.defeated,className:`btn-secondary min-h-9 px-3 py-1.5 disabled:opacity-40`,children:i.defeated?`已击败`:`挑战`})]}),(0,T.jsx)(`div`,{className:`mt-3`,children:(0,T.jsx)(sc,{value:100-i.hp,max:100,label:i.eligible?`可挑战`:`解锁进度`})})]})}function Vc({word:e,progressMap:t}){let n=Ic(e,t);return(0,T.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-soft`,children:[(0,T.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`div`,{className:`font-semibold text-ink`,children:e.word}),(0,T.jsx)(`div`,{className:`text-sm text-slate-500`,children:e.unitName})]}),(0,T.jsxs)(`div`,{className:`text-sm font-semibold text-violet-700`,children:[`HP `,n]})]}),(0,T.jsx)(`div`,{className:`mt-3`,children:(0,T.jsx)(sc,{value:100-n,max:100,label:n<=0?`已击败`:`攻击进度`})})]})}function Hc({words:e,units:t,progressMap:n,stats:r,onChallengeBoss:i}){let a=Lc(e,n,r),o=e.filter(e=>!r.defeatedWordIds.includes(e.id)).slice(0,6);return(0,T.jsxs)(`div`,{className:`space-y-5`,children:[(0,T.jsxs)(`section`,{className:`rounded-lg border border-violet-200 bg-white p-5 shadow-soft`,children:[(0,T.jsxs)(`div`,{className:`flex flex-wrap items-end justify-between gap-4`,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`div`,{className:`text-xs font-semibold uppercase text-violet-700`,children:`Monster`}),(0,T.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`单词打怪`}),(0,T.jsx)(`p`,{className:`mt-2 text-sm text-slate-500`,children:`记住、复习、答对都会攻击单词怪物。`})]}),(0,T.jsx)(lc,{stats:r})]}),(0,T.jsxs)(`div`,{className:`mt-5 grid gap-3 sm:grid-cols-3`,children:[(0,T.jsxs)(`div`,{className:`rounded-lg bg-violet-50 p-4 text-center`,children:[(0,T.jsx)(`div`,{className:`text-2xl font-semibold`,children:a.monsterPoints}),(0,T.jsx)(`div`,{className:`text-sm text-slate-500`,children:`打怪积分`})]}),(0,T.jsxs)(`div`,{className:`rounded-lg bg-violet-50 p-4 text-center`,children:[(0,T.jsx)(`div`,{className:`text-2xl font-semibold`,children:a.defeatedWords}),(0,T.jsx)(`div`,{className:`text-sm text-slate-500`,children:`击败小怪`})]}),(0,T.jsxs)(`div`,{className:`rounded-lg bg-violet-50 p-4 text-center`,children:[(0,T.jsx)(`div`,{className:`text-2xl font-semibold`,children:a.defeatedBosses}),(0,T.jsx)(`div`,{className:`text-sm text-slate-500`,children:`击败 Boss`})]})]})]}),(0,T.jsx)(`section`,{className:`grid gap-4 lg:grid-cols-2`,children:t.map(e=>(0,T.jsx)(Bc,{unit:e,progressMap:n,stats:r,onChallenge:i},e.id))}),(0,T.jsx)(`section`,{className:`grid gap-4 lg:grid-cols-2`,children:o.map(e=>(0,T.jsx)(Vc,{word:e,progressMap:n},e.id))})]})}function Uc({words:e,progressMap:t,stats:n,onNavigateCheckIn:r,onNavigateRewards:i,onNavigateShop:a,onNavigateStatistics:o,onNavigateAchievements:s,onNavigateSettings:c,onNavigateAccount:l,syncStatus:u,onExport:d,onImport:f,onClearCache:p,onReset:m}){let h=Ys(e,t),g=vc(n);return(0,T.jsxs)(`div`,{className:`space-y-5`,children:[(0,T.jsx)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:(0,T.jsxs)(`div`,{className:`flex flex-wrap items-start justify-between gap-4`,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Profile`}),(0,T.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`我的学习账户`}),(0,T.jsx)(`p`,{className:`mt-2 text-sm text-slate-500`,children:`进度、奖励、设置都在这里统一管理。`})]}),(0,T.jsxs)(`div`,{className:`flex flex-col items-start gap-2 sm:items-end`,children:[(0,T.jsx)(lc,{stats:n}),(0,T.jsx)(ns,{configured:u.configured,online:u.online,state:u.state,message:u.message,lastSyncAt:u.lastSyncAt,pendingCount:u.pendingCount})]})]})}),(0,T.jsx)(St,{compact:!0}),(0,T.jsxs)(`section`,{className:`grid gap-4 lg:grid-cols-[0.95fr_1.05fr]`,children:[(0,T.jsx)(uc,{stats:n}),(0,T.jsxs)(`div`,{className:`grid gap-4 sm:grid-cols-2`,children:[(0,T.jsx)(G,{label:`总学习时长`,value:ls(g.totalSeconds),icon:se,tone:`current`}),(0,T.jsx)(G,{label:`连续打卡`,value:n.currentStreak,icon:ae,tone:`copper`}),(0,T.jsx)(G,{label:`已学词数`,value:h.learnedCount,icon:Xe,tone:`spruce`}),(0,T.jsx)(G,{label:`掌握词数`,value:h.masteredCount,icon:ee,tone:`slate`})]})]}),(0,T.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,T.jsx)(`h2`,{className:`text-lg font-semibold text-ink`,children:`功能入口`}),(0,T.jsxs)(`div`,{className:`mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3`,children:[(0,T.jsxs)(`button`,{type:`button`,onClick:r,className:`mode-card`,children:[(0,T.jsx)(ae,{size:20,"aria-hidden":`true`}),(0,T.jsx)(`span`,{children:`打卡中心`})]}),(0,T.jsxs)(`button`,{type:`button`,onClick:i,className:`mode-card`,children:[(0,T.jsx)(Ce,{size:20,"aria-hidden":`true`}),(0,T.jsx)(`span`,{children:`奖励记录`})]}),(0,T.jsxs)(`button`,{type:`button`,onClick:a,className:`mode-card`,children:[(0,T.jsx)(Ue,{size:20,"aria-hidden":`true`}),(0,T.jsx)(`span`,{children:`兑换商店`})]}),(0,T.jsxs)(`button`,{type:`button`,onClick:o,className:`mode-card`,children:[(0,T.jsx)(se,{size:20,"aria-hidden":`true`}),(0,T.jsx)(`span`,{children:`学习统计`})]}),(0,T.jsxs)(`button`,{type:`button`,onClick:s,className:`mode-card`,children:[(0,T.jsx)(ee,{size:20,"aria-hidden":`true`}),(0,T.jsx)(`span`,{children:`成就徽章`})]}),(0,T.jsxs)(`button`,{type:`button`,onClick:c,className:`mode-card`,children:[(0,T.jsx)(Ve,{size:20,"aria-hidden":`true`}),(0,T.jsx)(`span`,{children:`设置`})]}),(0,T.jsxs)(`button`,{type:`button`,onClick:l,className:`mode-card`,children:[(0,T.jsx)(he,{size:20,"aria-hidden":`true`}),(0,T.jsx)(`span`,{children:`账号同步`})]})]})]}),(0,T.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,T.jsx)(`h2`,{className:`text-lg font-semibold text-ink`,children:`进度管理`}),(0,T.jsxs)(`div`,{className:`mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4`,children:[(0,T.jsxs)(`button`,{type:`button`,onClick:d,className:`btn-secondary`,children:[(0,T.jsx)(_e,{size:18,"aria-hidden":`true`}),`导出进度`]}),(0,T.jsxs)(`label`,{className:`btn-secondary cursor-pointer`,children:[(0,T.jsx)(Xe,{size:18,"aria-hidden":`true`}),`导入进度`,(0,T.jsx)(`input`,{type:`file`,accept:`application/json,.json`,className:`sr-only`,onChange:e=>{let t=e.target.files?.[0];t&&(t.text().then(f),e.target.value=``)}})]}),(0,T.jsxs)(`button`,{type:`button`,onClick:p,className:`btn-secondary`,children:[(0,T.jsx)(Le,{size:18,"aria-hidden":`true`}),`清理缓存`]}),(0,T.jsxs)(`button`,{type:`button`,onClick:m,className:`btn-danger`,children:[(0,T.jsx)(Be,{size:18,"aria-hidden":`true`}),`清空进度`]})]})]})]})}var Wc=null,Gc=null,Kc=new Set,q=new Set,qc=new Map,J={autoPlayOnStudy:!1,autoPlayOnRecall:!1,defaultAccent:`us`,speechRate:.9,repeatCount:1};function Y(e){return e.toLowerCase().replace(/[^a-z-]/g,``)}function Jc(){if(!(`speechSynthesis`in window))return Promise.resolve([]);let e=window.speechSynthesis.getVoices();return e.length?Promise.resolve(e):Gc||(Gc=new Promise(e=>{let t=()=>{window.speechSynthesis.removeEventListener(`voiceschanged`,t),e(window.speechSynthesis.getVoices())};window.speechSynthesis.addEventListener(`voiceschanged`,t,{once:!0}),window.setTimeout(t,900)}),Gc)}function Yc(e){return e===`us`?`en-US`:`en-GB`}function Xc(e){return e.toLowerCase().replace(`_`,`-`)}function Zc(e,t){let n=Yc(t).toLowerCase(),r=Xc(e.lang),i=e.name.toLowerCase(),a=0;if(r===n)a+=120;else if(r.startsWith(`${n}-`))a+=105;else if(r.startsWith(`en-`))a+=55;else return-1;e.default&&(a+=22),e.localService&&(a+=8);let o=(t===`us`?[`google us english`,`samantha`,`ava`,`allison`,`joelle`,`microsoft aria`,`microsoft jenny`,`zira`,`english united states`]:[`google uk english female`,`serena`,`daniel`,`martha`,`arthur`,`microsoft sonia`,`microsoft libby`,`microsoft ryan`,`english united kingdom`]).findIndex(e=>i.includes(e));return o>=0&&(a+=70-o*4),i.includes(`google`)&&(a+=26),i.includes(`microsoft`)&&(a+=20),i.includes(`apple`)&&(a+=12),/(natural|neural|premium|enhanced)/.test(i)&&(a+=30),/(female|woman)/.test(i)&&(a+=6),/(compact|novelty|whisper|bells|boing|bubbles|cellos|organ|trinoids|zarvox|bad news|good news|bahh|jester|superstar)/.test(i)&&(a-=90),a}function Qc(e){return typeof window<`u`&&window.matchMedia?.(`(pointer: coarse)`).matches&&e===1?.92:e}function $c(e,t){let n=Y(e);if(!n)return[];let r=t===`us`?`us`:`gb`;return[`https://ssl.gstatic.com/dictionary/static/sounds/20200429/${n}--_${r}_1.mp3`,`https://ssl.gstatic.com/dictionary/static/sounds/oxford/${n}--_${r}_1.mp3`]}function el(e){return e?e.startsWith(`//`)?`https:${e}`:e:``}function tl(e,t){let n=e.toLowerCase();return t===`us`?/[-_]us(?:[-_.]|$)|american|united-states/.test(n):/[-_](?:uk|gb)(?:[-_.]|$)|british|united-kingdom/.test(n)}function nl(e,t){let n=Y(e),r=`${t}:${n}`;if(!n)return Promise.resolve([]);let i=qc.get(r);if(i)return i;let a=fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(n)}`).then(async e=>{if(!e.ok)return[];let n=(await e.json()).flatMap(e=>e.phonetics||[]).map(e=>el(e.audio||``)).filter(Boolean),r=Array.from(new Set(n)),i=r.filter(e=>tl(e,t)),a=r.filter(e=>!tl(e,t));return[...i,...a]}).catch(()=>[]);return qc.set(r,a),a}function rl(e){return new Promise((t,n)=>{let r=new Audio(e);Wc=r,r.preload=`auto`,r.onended=()=>t(),r.onerror=()=>n(Error(`audio missing`)),r.play().catch(n)})}function il(){Wc&&=(Wc.pause(),Wc.currentTime=0,null),`speechSynthesis`in window&&window.speechSynthesis.cancel()}function al(e,t){let n=`/reword/audio/${t}/${Y(e)}.mp3`,r=`${t}:${Y(e)}`;return Kc.has(r)?Promise.reject(Error(`local audio missing`)):rl(n).catch(e=>{throw Kc.add(r),e})}async function ol(e,t){let n=[...$c(e,t),...await nl(e,t)];for(let e of n)if(!(!e||q.has(e)))try{await rl(e);return}catch{q.add(e)}throw Error(`dictionary audio missing`)}function sl(e){if(!(`speechSynthesis`in window))return;let t=window.speechSynthesis.getVoices().map(t=>({voice:t,score:Zc(t,e)})).filter(({score:e})=>e>0).sort((e,t)=>t.score-e.score);return t[0]?.score>=120?t[0].voice:void 0}async function cl(e,t,n={}){return await Jc(),new Promise((r,i)=>{if(!(`speechSynthesis`in window)){i(Error(`当前浏览器不支持朗读，请添加音频文件。`));return}let a={...J,...n},o=Yc(t),s=0,c=()=>{let n=new SpeechSynthesisUtterance(e);n.lang=o,n.rate=Qc(a.speechRate),n.pitch=1,n.volume=1;let l=sl(t);l&&(n.voice=l),n.onend=()=>{s+=1,s<a.repeatCount?c():r()},n.onerror=e=>{if(e.error===`interrupted`||e.error===`canceled`){r();return}i(Error(`当前浏览器朗读失败，请检查系统语音或浏览器权限。`))},window.speechSynthesis.speak(n)};c()})}async function ll(e,t,n={}){il();try{await al(e,t);return}catch{}try{await ol(e,t)}catch{await cl(e.replace(/-/g,` `),t,n)}}function X({word:e,accent:t,settings:n,compact:r=!1}){let[i,a]=(0,y.useState)(!1);return(0,T.jsxs)(`button`,{type:`button`,onClick:async()=>{a(!0);try{await ll(e,t,n)}catch(e){window.alert(e instanceof Error?e.message:`当前浏览器不支持朗读，请添加音频文件。`)}finally{a(!1)}},className:`inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white font-semibold text-harbor transition hover:border-harbor ${r?`h-8 px-2.5 text-xs`:`px-2.5 py-1.5 text-sm`}`,children:[(0,T.jsx)($e,{size:r?13:15,"aria-hidden":`true`}),t.toUpperCase(),i?`...`:``]})}function ul({title:e,body:t,actionLabel:n,onAction:r}){return(0,T.jsxs)(`div`,{className:`rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center shadow-soft`,children:[(0,T.jsx)(`div`,{className:`mx-auto mb-4 grid h-12 w-12 place-items-center rounded-lg border border-harbor/15 bg-[#f8fbff] text-harbor`,children:(0,T.jsx)(Te,{size:22,"aria-hidden":`true`})}),(0,T.jsx)(`h3`,{className:`font-semibold text-ink`,children:e}),t?(0,T.jsx)(`p`,{className:`mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500`,children:t}):null,n&&r?(0,T.jsx)(`button`,{type:`button`,onClick:r,className:`btn-primary mt-5`,children:n}):null]})}function dl({word:e,progress:t,compact:n=!1,mobileCompact:r=!1,audioSettings:i}){return r?(0,T.jsxs)(`article`,{className:`overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft`,children:[(0,T.jsxs)(`div`,{className:`border-b border-slate-200 bg-[#f8fbff] p-3`,children:[(0,T.jsxs)(`div`,{className:`mb-2 flex items-center justify-between gap-2`,children:[(0,T.jsx)(`span`,{className:`truncate rounded-md border border-harbor/15 bg-white px-2 py-0.5 text-[11px] font-medium text-harbor`,children:e.unitName}),(0,T.jsxs)(`span`,{className:`text-[11px] text-slate-500`,children:[`#`,e.order]})]}),(0,T.jsxs)(`div`,{className:`space-y-2`,children:[(0,T.jsx)(`h1`,{className:`break-words font-semibold leading-[1.06] text-ink ${e.word.length>18?`text-[27px]`:e.word.length>12?`text-[31px]`:`text-[36px]`}`,children:e.word}),(0,T.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,T.jsx)(`p`,{className:`min-w-0 break-words text-sm font-medium text-slate-500`,children:e.phonetic}),(0,T.jsxs)(`div`,{className:`flex shrink-0 gap-1.5`,children:[(0,T.jsx)(X,{word:e.word,accent:`us`,settings:i,compact:!0}),(0,T.jsx)(X,{word:e.word,accent:`uk`,settings:i,compact:!0})]})]})]})]}),(0,T.jsxs)(`div`,{className:`p-3`,children:[e.image?(0,T.jsx)(`div`,{className:`mb-2 grid h-20 place-items-center overflow-hidden rounded-lg border border-sky-100 bg-word-placeholder`,children:(0,T.jsx)(`img`,{src:e.image,alt:``,className:`h-full w-full object-contain`,loading:`lazy`})}):null,(0,T.jsx)(`div`,{className:`space-y-2`,children:e.definitions.map((t,n)=>(0,T.jsxs)(`div`,{className:`flex items-start gap-2.5 rounded-lg border border-sky-100 bg-[#f8fbff] p-2.5`,children:[(0,T.jsx)(`span`,{className:`shrink-0 rounded-md bg-white px-2.5 py-1 text-[13px] font-semibold text-harbor`,children:t.pos||`释义`}),(0,T.jsx)(`p`,{className:`min-w-0 break-words text-[16px] font-semibold leading-snug text-slate-950`,children:t.meaning})]},`${e.id}-compact-def-${n}`))}),(0,T.jsxs)(`div`,{className:`mt-2 flex flex-wrap gap-1.5 text-[11px] text-slate-600`,children:[(0,T.jsxs)(`span`,{className:`rounded-md border border-slate-200 bg-white px-2 py-1`,children:[`S`,t?.stage||0]}),(0,T.jsx)(`span`,{className:`rounded-md border border-slate-200 bg-white px-2 py-1`,children:Cc(t)}),(0,T.jsx)(`span`,{className:`rounded-md border border-slate-200 bg-white px-2 py-1`,children:Sc(t?.nextReviewAt)})]})]})]}):(0,T.jsxs)(`article`,{className:`overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft`,children:[n?null:(0,T.jsxs)(`div`,{className:`border-b border-slate-200 bg-[#f8fbff] p-5 md:p-6`,children:[(0,T.jsxs)(`div`,{className:`mb-5 flex items-center justify-between gap-3`,children:[(0,T.jsx)(`span`,{className:`rounded-md border border-harbor/15 bg-white px-2.5 py-1 text-xs font-medium text-harbor`,children:e.unitName}),(0,T.jsxs)(`span`,{className:`text-xs text-slate-500`,children:[`#`,e.order]})]}),(0,T.jsxs)(`div`,{className:`flex flex-wrap items-end justify-between gap-4`,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`h1`,{className:`break-words text-5xl font-semibold leading-tight text-ink md:text-6xl`,children:e.word}),(0,T.jsx)(`p`,{className:`mt-3 text-xl font-medium text-slate-600 md:text-2xl`,children:e.phonetic})]}),(0,T.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,T.jsx)(X,{word:e.word,accent:`us`,settings:i}),(0,T.jsx)(X,{word:e.word,accent:`uk`,settings:i})]})]})]}),(0,T.jsxs)(`div`,{className:n?`p-4`:`p-5 md:p-6`,children:[n?(0,T.jsxs)(`div`,{className:`mb-3 flex items-start justify-between gap-3`,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`h3`,{className:`break-words text-2xl font-semibold text-ink`,children:e.word}),(0,T.jsx)(`p`,{className:`text-base font-medium text-slate-600`,children:e.phonetic}),(0,T.jsxs)(`div`,{className:`mt-2 flex gap-2`,children:[(0,T.jsx)(X,{word:e.word,accent:`us`,settings:i}),(0,T.jsx)(X,{word:e.word,accent:`uk`,settings:i})]})]}),(0,T.jsxs)(`span`,{className:`rounded-md border border-harbor/15 bg-[#f8fbff] px-2.5 py-1 text-xs text-harbor`,children:[`#`,e.order]})]}):null,(0,T.jsx)(`div`,{className:`space-y-3`,children:e.definitions.map((t,n)=>(0,T.jsxs)(`div`,{className:`flex gap-3 rounded-lg border border-slate-200 bg-[#f8fbff] p-4`,children:[(0,T.jsx)(`span`,{className:`shrink-0 rounded-md border border-harbor/15 bg-white px-3 py-1.5 text-base font-semibold text-harbor`,children:t.pos||`释义`}),(0,T.jsx)(`p`,{className:`min-w-0 text-xl font-semibold leading-9 text-slate-950 md:text-2xl md:leading-10`,children:t.meaning})]},`${e.id}-def-${n}`))}),(0,T.jsxs)(`div`,{className:`mt-4 grid gap-3 text-sm sm:grid-cols-3`,children:[(0,T.jsxs)(`div`,{className:`flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-600`,children:[(0,T.jsx)(De,{size:16,"aria-hidden":`true`}),`Stage `,t?.stage||0]}),(0,T.jsxs)(`div`,{className:`flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-600`,children:[(0,T.jsx)(fe,{size:16,"aria-hidden":`true`}),Sc(t?.nextReviewAt)]}),(0,T.jsxs)(`div`,{className:`flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-600`,children:[(0,T.jsx)(le,{size:16,"aria-hidden":`true`}),Cc(t)]})]})]})]})}function fl(e){if(!(e instanceof HTMLElement))return!1;let t=e.tagName.toLowerCase();return t===`input`||t===`textarea`||t===`select`||e.isContentEditable}function pl(e,t=!0){let{isDesktop:n}=ht();(0,y.useEffect)(()=>{if(!t||!n)return;let r=t=>{if(fl(t.target))return;let n=(e,n=!0)=>{e&&(n&&t.preventDefault(),e())};t.code===`Space`?n(e.onSpace):t.key===`ArrowRight`?n(e.onArrowRight):t.key===`ArrowLeft`?n(e.onArrowLeft):t.key===`1`?n(e.onOne):t.key===`2`?n(e.onTwo):t.key===`3`?n(e.onThree):t.key===`Enter`?n(e.onEnter):t.key===`Escape`&&n(e.onEscape,!1)};return window.addEventListener(`keydown`,r),()=>window.removeEventListener(`keydown`,r)},[t,e,n])}function ml(e){return e.definitions.map(e=>`${e.pos} ${e.meaning}`.trim()).join(`；`)}function hl(e){return[...e].sort(()=>Math.random()-.5)}function gl(e,t=e){return e.map(e=>{let n=ml(e),r=hl(t.filter(t=>t.id!==e.id)).map(ml).filter(e=>e&&e!==n).slice(0,3);return{id:`quiz-${e.id}-${Date.now()}`,word:e,answer:n,options:hl([n,...r])}})}function _l({title:e,words:t,allWords:n,progressMap:r,audioSettings:i,onAnswer:a}){let[o,s]=(0,y.useState)(0),[c,l]=(0,y.useState)(t),[u,d]=(0,y.useState)(0),[f,p]=(0,y.useState)(),[m,h]=(0,y.useState)({correct:0,wrong:0}),[g,_]=(0,y.useState)([]),v=(0,y.useMemo)(()=>gl(c,n),[c,n,o]),b=v[u],x=u>=v.length,S=!!f,C=f===b?.answer,ee=m.correct+m.wrong,te=ee?Math.round(m.correct/ee*100):0,{isMobile:ne}=ht();(0,y.useEffect)(()=>{l(t),d(0),p(void 0),h({correct:0,wrong:0}),_([])},[t]);let re=(e=t)=>{l([...e]),s(e=>e+1),d(0),p(void 0),h({correct:0,wrong:0}),_([])},ie=e=>{if(!b||S)return;let t=e===b.answer;p(e),h(e=>({correct:e.correct+ +!!t,wrong:e.wrong+ +!t})),t||_(e=>[...e,b.word]),a(b.word.id,t)},ae=()=>{S&&(p(void 0),d(e=>e+1))};return pl({onSpace:()=>b&&ll(b.word.word,i.defaultAccent,i),onEnter:ae}),v.length?x?(0,T.jsxs)(`div`,{className:`space-y-5`,children:[(0,T.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-6 text-center shadow-soft`,children:[(0,T.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Result`}),(0,T.jsx)(`h1`,{className:`mt-2 text-3xl font-semibold text-ink`,children:`本次测试完成`}),(0,T.jsxs)(`div`,{className:`mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4`,children:[(0,T.jsx)(Z,{title:`总题数`,value:ee}),(0,T.jsx)(Z,{title:`正确`,value:m.correct,tone:`text-emerald-600`}),(0,T.jsx)(Z,{title:`错误`,value:m.wrong,tone:`text-rose-600`}),(0,T.jsx)(Z,{title:`正确率`,value:`${te}%`,tone:`text-indigo-600`})]}),(0,T.jsxs)(`div`,{className:`mt-6 flex flex-wrap justify-center gap-3`,children:[(0,T.jsxs)(`button`,{type:`button`,onClick:()=>re(),className:`btn-secondary`,children:[(0,T.jsx)(Be,{size:18,"aria-hidden":`true`}),`重新测试`]}),g.length?(0,T.jsxs)(`button`,{type:`button`,onClick:()=>re(g),className:`btn-primary`,children:[(0,T.jsx)(Be,{size:18,"aria-hidden":`true`}),`重新测试错题`]}):null]})]}),g.length?(0,T.jsx)(`div`,{className:`grid gap-3 md:grid-cols-2`,children:g.map(e=>(0,T.jsx)(dl,{word:e,progress:r[e.id],compact:!0,audioSettings:i},e.id))}):null]}):ne?(0,T.jsxs)(`div`,{className:`min-h-[calc(100dvh-136px)] space-y-2 pb-20`,children:[(0,T.jsxs)(`div`,{className:`flex h-8 items-center justify-between gap-3`,children:[(0,T.jsxs)(`div`,{className:`min-w-0`,children:[(0,T.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Quiz`}),(0,T.jsx)(`h1`,{className:`truncate text-base font-semibold text-ink`,children:e})]}),(0,T.jsxs)(`div`,{className:`shrink-0 text-right text-xs text-slate-500`,children:[u+1,`/`,v.length,` · `,te,`%`]})]}),(0,T.jsx)(`div`,{className:`h-1.5 overflow-hidden rounded-full bg-slate-200`,children:(0,T.jsx)(`div`,{className:`h-full rounded-full bg-harbor`,style:{width:`${Math.min(100,(u+1)/v.length*100)}%`}})}),(0,T.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-3 shadow-soft`,children:[(0,T.jsxs)(`div`,{className:`pb-3 pt-2 text-center`,children:[(0,T.jsx)(`div`,{className:`break-words font-semibold leading-tight text-ink ${b.word.word.length>12?`text-2xl`:`text-[32px]`}`,children:b.word.word}),(0,T.jsx)(`div`,{className:`mt-1 text-xs text-slate-500`,children:b.word.phonetic}),(0,T.jsxs)(`div`,{className:`mt-2 flex justify-center gap-2`,children:[(0,T.jsx)(X,{word:b.word.word,accent:`us`,settings:i,compact:!0}),(0,T.jsx)(X,{word:b.word.word,accent:`uk`,settings:i,compact:!0})]})]}),(0,T.jsx)(`div`,{className:`grid gap-2`,children:b.options.map(e=>{let t=e===b.answer,n=f===e;return(0,T.jsxs)(`button`,{type:`button`,onClick:()=>ie(e),className:`flex min-h-12 items-center justify-between gap-2 rounded-lg border px-3 py-2 text-left text-[13px] font-semibold leading-snug transition ${S&&t?`border-emerald-500 bg-emerald-50 text-emerald-700`:S&&n?`border-rose-500 bg-rose-50 text-rose-700`:`border-slate-200 bg-[#f8fbff] text-slate-900 active:border-indigo-400`}`,children:[(0,T.jsx)(`span`,{className:`mobile-option-clamp min-w-0`,children:e}),S&&t?(0,T.jsx)(le,{size:17,"aria-hidden":`true`}):null,S&&n&&!t?(0,T.jsx)(ue,{size:17,"aria-hidden":`true`}):null]},e)})}),S?(0,T.jsx)(`div`,{className:`mt-2 rounded-lg px-3 py-2 text-[13px] font-semibold leading-snug ${C?`bg-emerald-50 text-emerald-700`:`bg-rose-50 text-rose-700`}`,children:C?`回答正确，阶段会向前推进。`:`回答错误：${b.answer}`}):null,(0,T.jsx)(`button`,{type:`button`,onClick:ae,disabled:!S,className:`btn-primary mt-2 h-11 min-h-0 w-full disabled:opacity-40`,children:`下一题`})]})]}):(0,T.jsxs)(`div`,{className:`space-y-5`,children:[(0,T.jsxs)(`div`,{className:`flex flex-wrap items-end justify-between gap-4`,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Quiz`}),(0,T.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:e})]}),(0,T.jsxs)(`div`,{className:`text-sm text-slate-500`,children:[u+1,` / `,v.length]})]}),(0,T.jsxs)(`div`,{className:`grid gap-5 lg:grid-cols-[minmax(0,1fr)_280px]`,children:[(0,T.jsxs)(`section`,{className:`min-w-0 space-y-5`,children:[(0,T.jsx)(sc,{value:u+1,max:v.length,label:`测试进度`}),(0,T.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,T.jsxs)(`div`,{className:`py-8 text-center`,children:[(0,T.jsx)(`div`,{className:`break-words text-5xl font-semibold text-ink`,children:b.word.word}),(0,T.jsx)(`div`,{className:`mt-3 text-xl text-slate-500`,children:b.word.phonetic}),(0,T.jsxs)(`div`,{className:`mt-4 flex justify-center gap-2`,children:[(0,T.jsx)(X,{word:b.word.word,accent:`us`,settings:i}),(0,T.jsx)(X,{word:b.word.word,accent:`uk`,settings:i})]})]}),(0,T.jsx)(`div`,{className:`grid gap-3 md:grid-cols-2 xl:grid-cols-4`,children:b.options.map(e=>{let t=e===b.answer,n=f===e;return(0,T.jsxs)(`button`,{type:`button`,onClick:()=>ie(e),className:`quiz-option ${S&&t?`border-emerald-500 bg-emerald-50 text-emerald-700`:S&&n?`border-rose-500 bg-rose-50 text-rose-700`:`border-slate-200 bg-[#f8fbff] text-slate-900 hover:border-indigo-400`}`,children:[(0,T.jsx)(`span`,{children:e}),S&&t?(0,T.jsx)(le,{size:18,"aria-hidden":`true`}):null,S&&n&&!t?(0,T.jsx)(ue,{size:18,"aria-hidden":`true`}):null]},e)})}),S?(0,T.jsxs)(`div`,{className:`mt-4 rounded-lg p-4 text-sm ${C?`bg-emerald-50 text-emerald-700`:`bg-rose-50 text-rose-700`}`,children:[C?`回答正确，阶段会向前推进。`:`回答错误，正确答案是：${b.answer}`,(0,T.jsxs)(`div`,{className:`mt-3 flex gap-2`,children:[(0,T.jsx)(X,{word:b.word.word,accent:`us`,settings:i}),(0,T.jsx)(X,{word:b.word.word,accent:`uk`,settings:i})]})]}):null,(0,T.jsx)(`div`,{className:`mt-5 flex justify-end`,children:(0,T.jsx)(`button`,{type:`button`,onClick:ae,disabled:!S,className:`btn-primary disabled:opacity-40`,children:`下一题`})})]})]}),(0,T.jsxs)(`aside`,{className:`hidden space-y-4 lg:block`,children:[(0,T.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-soft`,children:[(0,T.jsx)(`h2`,{className:`font-semibold text-ink`,children:`测试面板`}),(0,T.jsxs)(`div`,{className:`mt-4 grid gap-3 text-sm`,children:[(0,T.jsx)(Z,{title:`正确率`,value:`${te}%`,tone:`text-indigo-600`}),(0,T.jsx)(Z,{title:`正确`,value:m.correct,tone:`text-emerald-600`}),(0,T.jsx)(Z,{title:`错题`,value:m.wrong,tone:`text-rose-600`})]})]}),(0,T.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-4 text-sm shadow-soft`,children:[(0,T.jsx)(`h2`,{className:`font-semibold text-ink`,children:`快捷键`}),(0,T.jsxs)(`div`,{className:`mt-3 grid gap-2 text-slate-500`,children:[(0,T.jsx)(`span`,{children:`Enter 下一题`}),(0,T.jsx)(`span`,{children:`Space 可播放当前词`})]})]})]})]})]}):(0,T.jsx)(ul,{title:`当前范围没有可测试的单词`,body:`先导入或选择一个包含单词的单元。`})}function Z({title:e,value:t,tone:n=`text-ink`}){return(0,T.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-[#f8fbff] p-4`,children:[(0,T.jsx)(`div`,{className:`text-2xl font-semibold ${n}`,children:t}),(0,T.jsx)(`div`,{className:`text-sm text-slate-500`,children:e})]})}function vl({open:e,onClose:t,word:n,phonetic:r,definitions:i,bottomOffset:a=`calc(128px + env(safe-area-inset-bottom))`}){return e?(0,T.jsxs)(`div`,{className:`fixed inset-x-3 z-50 rounded-lg border border-slate-200 bg-white p-3 shadow-lifted md:hidden`,style:{bottom:a,maxHeight:`42dvh`},role:`dialog`,"aria-modal":`false`,"aria-label":`${n} 完整释义`,children:[(0,T.jsxs)(`div`,{className:`mb-2 flex items-start justify-between gap-3`,children:[(0,T.jsxs)(`div`,{className:`min-w-0`,children:[(0,T.jsx)(`div`,{className:`truncate text-lg font-semibold leading-tight text-ink`,children:n}),r?(0,T.jsx)(`div`,{className:`text-xs text-slate-500`,children:r}):null]}),(0,T.jsx)(`button`,{type:`button`,onClick:t,className:`icon-btn h-8 w-8`,"aria-label":`关闭释义`,children:(0,T.jsx)(nt,{size:15,"aria-hidden":`true`})})]}),(0,T.jsx)(`div`,{className:`max-h-[calc(42dvh-64px)] space-y-2 overflow-y-auto pr-1`,children:i.map((e,t)=>(0,T.jsxs)(`div`,{className:`flex gap-2 rounded-lg border border-sky-100 bg-[#f8fbff] p-2`,children:[(0,T.jsx)(`span`,{className:`shrink-0 rounded-md bg-white px-2 py-1 text-[12px] font-semibold text-harbor`,children:e.pos||`释义`}),(0,T.jsx)(`p`,{className:`min-w-0 text-[13px] font-semibold leading-snug text-slate-950`,children:e.meaning})]},`${n}-sheet-${t}`))})]}):null}function yl({value:e,items:t,onChange:n}){return(0,T.jsx)(`div`,{className:`inline-grid grid-flow-col rounded-lg border border-slate-200 bg-[#f8fbff] p-1`,children:t.map(t=>(0,T.jsx)(`button`,{type:`button`,onClick:()=>n(t.value),className:`rounded-md px-3 py-2 text-sm transition ${e===t.value?`bg-white text-ink shadow-sm`:`text-slate-500 hover:text-ink`}`,children:t.label},t.value))})}function bl({title:e,words:t,progressMap:n,audioSettings:r,initialDueOnly:i=!1,onGrade:a,onBackToStudy:o}){let[s,c]=(0,y.useState)(i?`due`:`all`),[l,u]=(0,y.useState)(0),[d,f]=(0,y.useState)(!1),p=(0,y.useMemo)(()=>s===`due`?Us(t,n):t,[s,t,n]),m=p[Math.min(l,Math.max(0,p.length-1))],h=m?n[m.id]:void 0,g=Math.max(0,l-10),_=p.slice(g,Math.min(p.length,g+24)),{isMobile:v}=ht();(0,y.useEffect)(()=>{!m||!r.autoPlayOnRecall||ll(m.word,r.defaultAccent,r).catch(()=>void 0)},[m,r]);let b=e=>{m&&(a(m.id,e),f(!1),u(e=>{let t=s===`due`?e:e+1;return Math.min(t,Math.max(0,p.length-1))}))};return pl({onSpace:()=>m&&ll(m.word,r.defaultAccent,r),onOne:()=>b(`known`),onTwo:()=>b(`fuzzy`),onThree:()=>b(`forgotten`),onEnter:()=>f(e=>!e)}),p.length?v?(0,T.jsxs)(`div`,{className:`min-h-[calc(100dvh-136px)] space-y-3 pb-28`,children:[(0,T.jsxs)(`div`,{className:`flex items-start justify-between gap-3`,children:[(0,T.jsxs)(`div`,{className:`min-w-0`,children:[(0,T.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Recall`}),(0,T.jsx)(`h1`,{className:`truncate text-lg font-semibold text-ink`,children:e})]}),(0,T.jsxs)(`div`,{className:`shrink-0 text-right text-xs text-slate-500`,children:[Math.min(l+1,p.length),` / `,p.length]})]}),(0,T.jsx)(yl,{value:s,items:[{value:`due`,label:`到期词`},{value:`all`,label:`全部词`}],onChange:e=>{c(e),u(0),f(!1)}}),(0,T.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-soft`,children:[(0,T.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500`,children:[(0,T.jsxs)(`span`,{children:[`S`,h?.stage||0,` · `,Cc(h)]}),(0,T.jsx)(`span`,{children:Sc(h?.nextReviewAt)})]}),(0,T.jsxs)(`div`,{className:`py-7 text-center`,children:[(0,T.jsx)(`div`,{className:`break-words font-semibold leading-tight text-ink ${m.word.length>12?`text-3xl`:`text-[34px]`}`,children:m.word}),(0,T.jsx)(`div`,{className:`mt-2 text-sm text-slate-500`,children:m.phonetic}),(0,T.jsxs)(`div`,{className:`mt-3 flex justify-center gap-2`,children:[(0,T.jsx)(X,{word:m.word,accent:`us`,settings:r,compact:!0}),(0,T.jsx)(X,{word:m.word,accent:`uk`,settings:r,compact:!0})]})]}),(0,T.jsxs)(`button`,{type:`button`,onClick:()=>f(!0),className:`btn-secondary h-11 min-h-0 w-full`,children:[(0,T.jsx)(ye,{size:17,"aria-hidden":`true`}),`查看释义`]})]}),(0,T.jsx)(vl,{open:d,onClose:()=>f(!1),word:m.word,phonetic:m.phonetic,definitions:m.definitions,bottomOffset:`calc(132px + env(safe-area-inset-bottom))`}),(0,T.jsxs)(`div`,{className:`fixed inset-x-3 z-40 grid grid-cols-3 gap-2`,style:{bottom:`calc(72px + env(safe-area-inset-bottom))`},children:[(0,T.jsxs)(`button`,{type:`button`,onClick:()=>b(`known`),className:`inline-flex h-11 items-center justify-center gap-1 rounded-lg bg-emerald-600 px-2 text-xs font-semibold text-white shadow-sm active:translate-y-px`,children:[(0,T.jsx)(Je,{size:15,"aria-hidden":`true`}),`记住`]}),(0,T.jsxs)(`button`,{type:`button`,onClick:()=>b(`fuzzy`),className:`inline-flex h-11 items-center justify-center gap-1 rounded-lg border border-amber-300 bg-amber-50 px-2 text-xs font-semibold text-amber-700 shadow-sm active:translate-y-px`,children:[(0,T.jsx)(Be,{size:15,"aria-hidden":`true`}),`不太熟`]}),(0,T.jsxs)(`button`,{type:`button`,onClick:()=>b(`forgotten`),className:`inline-flex h-11 items-center justify-center gap-1 rounded-lg border border-rose-300 bg-rose-50 px-2 text-xs font-semibold text-rose-700 shadow-sm active:translate-y-px`,children:[(0,T.jsx)(qe,{size:15,"aria-hidden":`true`}),`不记住`]})]})]}):(0,T.jsxs)(`div`,{className:`space-y-5`,children:[(0,T.jsxs)(`div`,{className:`flex flex-wrap items-end justify-between gap-4`,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Recall`}),(0,T.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:e})]}),(0,T.jsx)(yl,{value:s,items:[{value:`due`,label:`到期词`},{value:`all`,label:`全部词`}],onChange:e=>{c(e),u(0),f(!1)}})]}),(0,T.jsxs)(`div`,{className:`grid gap-5 md:grid-cols-[250px_1fr] lg:grid-cols-[250px_minmax(0,1fr)_280px]`,children:[(0,T.jsxs)(`aside`,{className:`hidden rounded-lg border border-slate-200 bg-white p-3 shadow-soft md:block`,children:[(0,T.jsxs)(`div`,{className:`mb-3 flex items-center justify-between px-1 text-sm`,children:[(0,T.jsx)(`span`,{className:`font-semibold text-ink`,children:`复习队列`}),(0,T.jsx)(`span`,{className:`text-slate-500`,children:p.length})]}),(0,T.jsx)(`div`,{className:`max-h-[68vh] space-y-1 overflow-y-auto pr-1`,children:_.map((e,t)=>{let r=g+t;return(0,T.jsxs)(`button`,{type:`button`,onClick:()=>{u(r),f(!1)},className:`flex min-h-11 w-full items-center justify-between gap-3 rounded-lg px-3 text-left text-sm transition ${r===l?`bg-indigo-50 text-indigo-700`:`text-slate-600 hover:bg-[#f8fbff] hover:text-ink`}`,children:[(0,T.jsx)(`span`,{className:`min-w-0 truncate font-semibold`,children:e.word}),(0,T.jsxs)(`span`,{className:`shrink-0 text-xs`,children:[`S`,n[e.id]?.stage||0]})]},e.id)})})]}),(0,T.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,T.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500`,children:[(0,T.jsxs)(`span`,{children:[Math.min(l+1,p.length),` / `,p.length]}),(0,T.jsxs)(`span`,{children:[Vs(h)?`已到期`:`未到期`,`，Stage `,h?.stage||0,`，下次 `,Sc(h?.nextReviewAt)]})]}),(0,T.jsxs)(`div`,{className:`py-10 text-center`,children:[(0,T.jsx)(`div`,{className:`break-words text-5xl font-semibold text-ink`,children:m.word}),(0,T.jsx)(`div`,{className:`mt-3 text-xl text-slate-500`,children:m.phonetic}),(0,T.jsxs)(`div`,{className:`mt-4 flex justify-center gap-2`,children:[(0,T.jsx)(X,{word:m.word,accent:`us`,settings:r}),(0,T.jsx)(X,{word:m.word,accent:`uk`,settings:r})]})]}),d?(0,T.jsx)(dl,{word:m,progress:h,compact:!0,audioSettings:r}):null,(0,T.jsxs)(`div`,{className:`mt-5 grid gap-3 sm:grid-cols-4`,children:[(0,T.jsxs)(`button`,{type:`button`,onClick:()=>f(e=>!e),className:`btn-secondary`,children:[(0,T.jsx)(ye,{size:18,"aria-hidden":`true`}),`查看释义`]}),(0,T.jsxs)(`button`,{type:`button`,onClick:()=>b(`known`),className:`btn-primary`,children:[(0,T.jsx)(Je,{size:18,"aria-hidden":`true`}),`记住`]}),(0,T.jsxs)(`button`,{type:`button`,onClick:()=>b(`fuzzy`),className:`btn-secondary`,children:[(0,T.jsx)(Be,{size:18,"aria-hidden":`true`}),`不太熟`]}),(0,T.jsxs)(`button`,{type:`button`,onClick:()=>b(`forgotten`),className:`btn-danger`,children:[(0,T.jsx)(qe,{size:18,"aria-hidden":`true`}),`不记住`]})]})]}),(0,T.jsxs)(`aside`,{className:`hidden space-y-4 lg:block`,children:[(0,T.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-soft`,children:[(0,T.jsx)(`h2`,{className:`font-semibold text-ink`,children:`复习反馈`}),(0,T.jsxs)(`div`,{className:`mt-4 space-y-3 text-sm`,children:[(0,T.jsxs)(`div`,{className:`rounded-lg bg-[#f8fbff] p-3`,children:[(0,T.jsx)(`span`,{className:`block text-slate-500`,children:`当前状态`}),(0,T.jsx)(`span`,{className:`mt-1 block font-semibold text-ink`,children:Cc(h)})]}),(0,T.jsxs)(`div`,{className:`rounded-lg bg-[#f8fbff] p-3`,children:[(0,T.jsx)(`span`,{className:`block text-slate-500`,children:`打怪伤害`}),(0,T.jsx)(`span`,{className:`mt-1 block font-semibold text-indigo-600`,children:`记住 +3，不熟 +1`})]})]})]}),(0,T.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-4 text-sm shadow-soft`,children:[(0,T.jsx)(`h2`,{className:`font-semibold text-ink`,children:`快捷键`}),(0,T.jsxs)(`div`,{className:`mt-3 grid gap-2 text-slate-500`,children:[(0,T.jsx)(`span`,{children:`Space 播放发音`}),(0,T.jsx)(`span`,{children:`1 记住`}),(0,T.jsx)(`span`,{children:`2 不太熟`}),(0,T.jsx)(`span`,{children:`3 不记住`}),(0,T.jsx)(`span`,{children:`Enter 查看释义`})]})]})]})]})]}):(0,T.jsx)(ul,{title:s===`due`?`当前没有到期词`:`当前范围没有词`,body:`可以切换到全部练习，或者先进入记忆模式完成初学。`,actionLabel:o?`去记忆模式`:void 0,onAction:o})}function xl({loading:e=!1,onSubmit:t}){let[n,r]=(0,y.useState)(``),[i,a]=(0,y.useState)(``),[o,s]=(0,y.useState)(``),[c,l]=(0,y.useState)(``),[u,d]=(0,y.useState)(null);return(0,T.jsxs)(`form`,{onSubmit:async e=>{if(e.preventDefault(),d(null),o.length<6){d(`密码至少 6 位。`);return}if(o!==c){d(`两次输入的密码不一致。`);return}await t(n.trim(),i.trim(),o)},className:`space-y-4`,children:[(0,T.jsxs)(`label`,{className:`block`,children:[(0,T.jsx)(`span`,{className:`text-sm font-semibold text-slate-700`,children:`用户名`}),(0,T.jsx)(`input`,{type:`text`,value:n,onChange:e=>r(e.target.value),required:!0,minLength:2,className:`mt-2 h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100`,placeholder:`例如 kaoyan2027`})]}),(0,T.jsxs)(`label`,{className:`block`,children:[(0,T.jsx)(`span`,{className:`text-sm font-semibold text-slate-700`,children:`邮箱`}),(0,T.jsx)(`input`,{type:`email`,value:i,onChange:e=>a(e.target.value),required:!0,autoComplete:`email`,className:`mt-2 h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100`,placeholder:`name@example.com`})]}),(0,T.jsxs)(`div`,{className:`grid gap-4 sm:grid-cols-2`,children:[(0,T.jsxs)(`label`,{className:`block`,children:[(0,T.jsx)(`span`,{className:`text-sm font-semibold text-slate-700`,children:`密码`}),(0,T.jsx)(`input`,{type:`password`,value:o,onChange:e=>s(e.target.value),required:!0,autoComplete:`new-password`,className:`mt-2 h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100`,placeholder:`至少 6 位`})]}),(0,T.jsxs)(`label`,{className:`block`,children:[(0,T.jsx)(`span`,{className:`text-sm font-semibold text-slate-700`,children:`确认密码`}),(0,T.jsx)(`input`,{type:`password`,value:c,onChange:e=>l(e.target.value),required:!0,autoComplete:`new-password`,className:`mt-2 h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100`,placeholder:`再次输入`})]})]}),u?(0,T.jsx)(`div`,{className:`rounded-lg border border-rose-100 bg-rose-50 px-3 py-2 text-sm text-rose-700`,children:u}):null,(0,T.jsxs)(`button`,{type:`submit`,disabled:e,className:`btn-primary w-full disabled:opacity-50`,children:[(0,T.jsx)(Ze,{size:18,"aria-hidden":`true`}),`注册账号`]})]})}function Sl({configured:e,loading:t,error:n,onRegister:r,onSuccess:i,onLogin:a}){let[o,s]=(0,y.useState)(null);return(0,T.jsx)(`div`,{className:`mx-auto max-w-xl`,children:(0,T.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,T.jsxs)(`div`,{className:`mb-5 flex items-center justify-between gap-3`,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Register`}),(0,T.jsx)(`h1`,{className:`mt-1 text-2xl font-semibold text-ink`,children:`创建学习账号`})]}),(0,T.jsx)(`button`,{type:`button`,onClick:a,className:`icon-btn`,title:`返回登录`,children:(0,T.jsx)(S,{size:18,"aria-hidden":`true`})})]}),e?null:(0,T.jsx)(`div`,{className:`mb-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-800`,children:Jo()}),n?(0,T.jsx)(`div`,{className:`mb-4 rounded-lg border border-rose-100 bg-rose-50 px-3 py-2 text-sm text-rose-700`,children:n}):null,o?(0,T.jsx)(`div`,{className:`mb-4 rounded-lg border border-emerald-100 bg-emerald-50 px-3 py-2 text-sm text-emerald-700`,children:o}):null,(0,T.jsx)(xl,{loading:t||!e,onSubmit:async(e,t,n)=>{await r(e,t,n),s(`注册成功。如果 Supabase 开启了邮箱验证，请先到邮箱完成验证。`),i()}}),(0,T.jsxs)(`button`,{type:`button`,onClick:a,className:`btn-secondary mt-4 w-full`,children:[(0,T.jsx)(Me,{size:18,"aria-hidden":`true`}),`返回登录`]})]})})}function Cl({words:e,progressMap:t,audioSettings:n,onStartReview:r,onOpenUnits:i}){let a=Us(e,t);return(0,T.jsxs)(`div`,{className:`space-y-5`,children:[(0,T.jsx)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:(0,T.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-4`,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Review`}),(0,T.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`复习中心`})]}),(0,T.jsxs)(`button`,{type:`button`,onClick:r,disabled:!a.length,className:`btn-primary disabled:opacity-40`,children:[(0,T.jsx)(ie,{size:18,"aria-hidden":`true`}),`一键开始`]})]})}),a.length?(0,T.jsx)(`div`,{className:`grid gap-3 lg:grid-cols-2`,children:a.map(e=>(0,T.jsx)(dl,{word:e,progress:t[e.id],compact:!0,audioSettings:n},e.id))}):(0,T.jsx)(ul,{title:`今天暂时没有到期复习`,body:`可以先从单元里加入今日学习，初学后的单词会自动进入复习周期。`,actionLabel:`去单元`,onAction:i})]})}function wl({stats:e}){return(0,T.jsxs)(`div`,{className:`space-y-5`,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Rewards`}),(0,T.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`奖励记录`})]}),(0,T.jsx)(`div`,{className:`space-y-3`,children:e.rewardHistory.length?e.rewardHistory.map(e=>(0,T.jsx)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-soft`,children:(0,T.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`div`,{className:`font-semibold text-ink`,children:e.title}),(0,T.jsx)(`div`,{className:`mt-1 text-sm text-slate-500`,children:e.description})]}),(0,T.jsxs)(`div`,{className:`text-sm font-semibold text-harbor`,children:[`+`,e.xp,` XP / +`,e.coins,` 金币`]})]})},e.id)):(0,T.jsx)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-8 text-center text-slate-500`,children:`暂无奖励记录`})})]})}function Tl({stats:e,onUpdateAudio:t,syncStatus:n}){let r=e.audioSettings,i=e=>t({...r,...e});return(0,T.jsxs)(`div`,{className:`space-y-5`,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Settings`}),(0,T.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`设置`})]}),(0,T.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,T.jsx)(`h2`,{className:`font-semibold text-ink`,children:`发音设置`}),(0,T.jsxs)(`div`,{className:`mt-4 grid gap-4 md:grid-cols-2`,children:[(0,T.jsxs)(`label`,{className:`flex items-center justify-between rounded-lg bg-[#f8fbff] p-3`,children:[(0,T.jsx)(`span`,{children:`记忆页自动播放`}),(0,T.jsx)(`input`,{type:`checkbox`,checked:r.autoPlayOnStudy,onChange:e=>i({autoPlayOnStudy:e.target.checked})})]}),(0,T.jsxs)(`label`,{className:`flex items-center justify-between rounded-lg bg-[#f8fbff] p-3`,children:[(0,T.jsx)(`span`,{children:`理解页自动播放`}),(0,T.jsx)(`input`,{type:`checkbox`,checked:r.autoPlayOnRecall,onChange:e=>i({autoPlayOnRecall:e.target.checked})})]}),(0,T.jsxs)(`label`,{className:`rounded-lg bg-[#f8fbff] p-3`,children:[(0,T.jsx)(`span`,{className:`mb-2 block`,children:`默认口音`}),(0,T.jsxs)(`select`,{value:r.defaultAccent,onChange:e=>i({defaultAccent:e.target.value}),className:`w-full rounded-md border border-slate-200 bg-white p-2`,children:[(0,T.jsx)(`option`,{value:`us`,children:`美式`}),(0,T.jsx)(`option`,{value:`uk`,children:`英式`})]})]}),(0,T.jsxs)(`label`,{className:`rounded-lg bg-[#f8fbff] p-3`,children:[(0,T.jsx)(`span`,{className:`mb-2 block`,children:`朗读速度`}),(0,T.jsxs)(`select`,{value:r.speechRate,onChange:e=>i({speechRate:Number(e.target.value)}),className:`w-full rounded-md border border-slate-200 bg-white p-2`,children:[(0,T.jsx)(`option`,{value:.8,children:`0.8`}),(0,T.jsx)(`option`,{value:.9,children:`0.9 推荐`}),(0,T.jsx)(`option`,{value:1,children:`1.0`}),(0,T.jsx)(`option`,{value:1.1,children:`1.1`})]})]}),(0,T.jsxs)(`label`,{className:`rounded-lg bg-[#f8fbff] p-3`,children:[(0,T.jsx)(`span`,{className:`mb-2 block`,children:`朗读次数`}),(0,T.jsxs)(`select`,{value:r.repeatCount,onChange:e=>i({repeatCount:Number(e.target.value)}),className:`w-full rounded-md border border-slate-200 bg-white p-2`,children:[(0,T.jsx)(`option`,{value:1,children:`1 次`}),(0,T.jsx)(`option`,{value:2,children:`2 次`})]})]})]})]}),(0,T.jsxs)(`div`,{className:`grid gap-5 lg:grid-cols-[1.05fr_0.95fr]`,children:[(0,T.jsx)(es,{online:n.online,loggedIn:n.isLoggedIn,syncState:n.state,syncMessage:n.message,lastSyncAt:n.lastSyncAt,pendingCount:n.pendingCount}),(0,T.jsx)(St,{})]})]})}var El=[{id:`theme-default`,name:`默认浅蓝主题`,description:`清爽的浅蓝学习桌面`,type:`theme`,priceCoins:0,icon:`蓝`,rarity:`common`},{id:`theme-dark`,name:`深色专注主题`,description:`适合夜间学习的深色主题`,type:`theme`,priceCoins:120,icon:`夜`,rarity:`rare`},{id:`theme-morning`,name:`晨读白色主题`,description:`适合早起背词的明亮主题`,type:`theme`,priceCoins:90,icon:`晨`,rarity:`common`},{id:`avatar-unit1`,name:`Unit1 完成头像框`,description:`Unit1 学习者头像框`,type:`avatar`,priceCoins:80,icon:`U1`,rarity:`common`},{id:`avatar-thirty-days`,name:`30 天坚持头像框`,description:`长期主义者的头像框`,type:`avatar`,priceCoins:220,priceDiamonds:1,icon:`30`,rarity:`epic`},{id:`tool-focus-card`,name:`专注卡`,description:`开启一次 25 分钟专注学习`,type:`tool`,priceCoins:30,icon:`专`,rarity:`common`},{id:`tool-review-boost`,name:`复习加速卡`,description:`把不熟词加入今日重点复习`,type:`tool`,priceCoins:45,icon:`复`,rarity:`rare`},{id:`tool-wrong-clean`,name:`错题清理卡`,description:`开启一次错题专项测试`,type:`tool`,priceCoins:50,icon:`错`,rarity:`rare`},{id:`tool-makeup`,name:`补签卡`,description:`预留功能，后续可用于补签`,type:`tool`,priceCoins:120,icon:`补`,rarity:`epic`},{id:`tool-double-monster`,name:`双倍积分卡`,description:`15 分钟内打怪积分翻倍`,type:`tool`,priceCoins:100,icon:`双`,rarity:`epic`},{id:`badge-seven-days`,name:`7 天坚持徽章`,description:`连续打卡 7 天纪念徽章`,type:`badge`,priceCoins:160,icon:`7`,rarity:`rare`}];function Dl(e,t){return e.unlockedItems.includes(t.id)||e.inventory.some(e=>e.itemId===t.id)}function Ol(e,t){let n=t.type===`tool`;if(!n&&e.unlockedItems.includes(t.id)||e.coins<t.priceCoins||e.diamonds<(t.priceDiamonds||0))return e;let r=n?e.unlockedItems:[...e.unlockedItems,t.id];return vs({...e,coins:e.coins-t.priceCoins,diamonds:e.diamonds-(t.priceDiamonds||0),unlockedItems:r},{type:`exchange`,title:`兑换 ${t.name}`,description:t.description,itemId:n?t.id:void 0,bypassDailyCap:!0})}function kl({item:e,stats:t,onExchange:n}){let r=Dl(t,e),i=t.coins>=e.priceCoins&&t.diamonds>=(e.priceDiamonds||0);return(0,T.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-soft`,children:[(0,T.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,T.jsx)(`div`,{className:`grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#f8fbff] font-semibold text-harbor`,children:e.icon}),(0,T.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,T.jsx)(`div`,{className:`font-semibold text-ink`,children:e.name}),(0,T.jsx)(`div`,{className:`mt-1 text-sm leading-6 text-slate-500`,children:e.description}),(0,T.jsxs)(`div`,{className:`mt-2 text-xs text-slate-500`,children:[e.rarity,` / `,e.type]})]})]}),(0,T.jsx)(`button`,{type:`button`,onClick:()=>n(e),disabled:(!i||r)&&e.type!==`tool`,className:`btn-primary mt-4 w-full disabled:opacity-40`,children:r&&e.type!==`tool`?`已拥有`:`兑换 ${e.priceCoins} 金币${e.priceDiamonds?` + ${e.priceDiamonds} 钻石`:``}`})]})}function Al({stats:e,onExchange:t}){return(0,T.jsxs)(`div`,{className:`space-y-5`,children:[(0,T.jsxs)(`div`,{className:`flex flex-wrap items-end justify-between gap-4`,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Shop`}),(0,T.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`兑换商店`})]}),(0,T.jsx)(lc,{stats:e})]}),(0,T.jsx)(`div`,{className:`grid gap-4 md:grid-cols-2 lg:grid-cols-3`,children:El.map(n=>(0,T.jsx)(kl,{item:n,stats:e,onExchange:t},n.id))})]})}function jl({data:e,type:t=`bar`}){let n=Math.max(60,...e.map(e=>e.seconds));return(0,T.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-soft`,children:[(0,T.jsx)(`div`,{className:`mb-4 font-semibold text-ink`,children:t===`bar`?`最近 7 天学习时长`:`最近 30 天学习趋势`}),(0,T.jsx)(`div`,{className:`flex h-36 items-end gap-1`,children:e.map(e=>(0,T.jsxs)(`div`,{className:`flex flex-1 flex-col items-center gap-2`,children:[(0,T.jsx)(`div`,{className:`w-full rounded-t bg-harbor`,style:{height:`${Math.max(4,e.seconds/n*120)}px`},title:ls(e.seconds)}),(0,T.jsx)(`div`,{className:`text-[10px] text-slate-400`,children:e.date.slice(5)})]},e.date))})]})}function Ml({stats:e,words:t,progressMap:n}){let r=vc(e),i=xc(t,n).slice(0,6);return(0,T.jsxs)(`div`,{className:`space-y-5`,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Statistics`}),(0,T.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`学习统计`})]}),(0,T.jsxs)(`div`,{className:`grid gap-4 sm:grid-cols-2 lg:grid-cols-4`,children:[(0,T.jsx)(Nl,{title:`今日`,value:ls(r.todaySeconds)}),(0,T.jsx)(Nl,{title:`本周`,value:ls(r.weekSeconds)}),(0,T.jsx)(Nl,{title:`本月`,value:ls(r.monthSeconds)}),(0,T.jsx)(Nl,{title:`总学习`,value:ls(r.totalSeconds)})]}),(0,T.jsxs)(`div`,{className:`grid gap-4 lg:grid-cols-2`,children:[(0,T.jsx)(jl,{data:bc(e,7)}),(0,T.jsx)(jl,{data:bc(e,30),type:`line`})]}),(0,T.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,T.jsx)(`h2`,{className:`font-semibold text-ink`,children:`单元完成排行榜`}),(0,T.jsx)(`div`,{className:`mt-4 space-y-3`,children:i.map(e=>(0,T.jsxs)(`div`,{className:`flex items-center justify-between rounded-lg bg-[#f8fbff] p-3`,children:[(0,T.jsx)(`span`,{children:e.unitName}),(0,T.jsxs)(`span`,{className:`font-semibold text-harbor`,children:[e.percent,`%`]})]},e.unitName))})]})]})}function Nl({title:e,value:t}){return(0,T.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-soft`,children:[(0,T.jsx)(`div`,{className:`text-sm text-slate-500`,children:e}),(0,T.jsx)(`div`,{className:`mt-2 text-2xl font-semibold text-ink`,children:t})]})}function Pl({unit:e,words:t,progressMap:n,audioSettings:r,onLearn:i}){let[a,o]=(0,y.useState)(0),s=t[a],c=(0,y.useMemo)(()=>t.filter(e=>n[e.id]?.learned).length,[t,n]),{isDesktop:l,isMobile:u}=ht(),d=s?n[s.id]:void 0,f=Math.max(0,a-12),p=t.slice(f,Math.min(t.length,f+28));(0,y.useEffect)(()=>{!s||!r.autoPlayOnStudy||ll(s.word,r.defaultAccent,r).catch(()=>void 0)},[s,r]);let m=e=>{o(n=>Math.min(t.length-1,Math.max(0,n+e)))};return pl({onSpace:()=>s&&ll(s.word,r.defaultAccent,r),onArrowLeft:()=>m(-1),onArrowRight:()=>m(1),onEnter:()=>s&&i(s.id)}),s?u?(0,T.jsxs)(`div`,{className:`min-h-[calc(100dvh-136px)] space-y-2 pb-24`,children:[(0,T.jsxs)(`div`,{className:`flex h-9 items-center justify-between gap-3`,children:[(0,T.jsxs)(`div`,{className:`min-w-0`,children:[(0,T.jsx)(`div`,{className:`truncate text-sm font-semibold text-ink`,children:e?.name||`总记忆`}),(0,T.jsxs)(`div`,{className:`text-[11px] text-slate-500`,children:[`已初学 `,c,` 词`]})]}),(0,T.jsxs)(`div`,{className:`shrink-0 rounded-md border border-sky-100 bg-white px-2 py-1 text-xs font-semibold text-harbor`,children:[a+1,`/`,t.length]})]}),(0,T.jsx)(`div`,{className:`h-1.5 overflow-hidden rounded-full bg-slate-200`,children:(0,T.jsx)(`div`,{className:`h-full rounded-full bg-harbor`,style:{width:`${Math.min(100,(a+1)/t.length*100)}%`}})}),(0,T.jsx)(dl,{word:s,progress:d,audioSettings:r,mobileCompact:!0}),(0,T.jsxs)(`div`,{className:`fixed inset-x-3 z-40 grid grid-cols-3 gap-2`,style:{bottom:`calc(72px + env(safe-area-inset-bottom))`},children:[(0,T.jsxs)(`button`,{type:`button`,onClick:()=>m(-1),disabled:a===0,className:`btn-secondary h-11 min-h-0 px-2 text-xs disabled:opacity-40`,children:[(0,T.jsx)(S,{size:16,"aria-hidden":`true`}),`上一个`]}),(0,T.jsxs)(`button`,{type:`button`,onClick:()=>i(s.id),"aria-label":`标记当前单词已学`,className:`inline-flex h-11 min-h-0 items-center justify-center gap-1.5 rounded-lg border border-emerald-700 bg-emerald-600 px-2 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-700 active:translate-y-px`,children:[(0,T.jsx)(ce,{size:16,"aria-hidden":`true`}),`已学`]}),(0,T.jsxs)(`button`,{type:`button`,onClick:()=>m(1),disabled:a===t.length-1,className:`btn-secondary h-11 min-h-0 px-2 text-xs disabled:opacity-40`,children:[`下一个`,(0,T.jsx)(C,{size:16,"aria-hidden":`true`})]})]})]}):(0,T.jsxs)(`div`,{className:`space-y-5`,children:[(0,T.jsxs)(`div`,{className:`flex flex-wrap items-end justify-between gap-4`,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Study`}),(0,T.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:e?.name||`总记忆功能`})]}),(0,T.jsxs)(`div`,{className:`text-sm text-slate-500`,children:[a+1,` / `,t.length]})]}),(0,T.jsx)(sc,{value:a+1,max:t.length,label:`浏览进度，已初学 ${c} 词`}),(0,T.jsxs)(`div`,{className:`grid gap-5 md:grid-cols-[260px_1fr] lg:grid-cols-[260px_minmax(0,1fr)_280px]`,children:[(0,T.jsxs)(`aside`,{className:`hidden rounded-lg border border-slate-200 bg-white p-3 shadow-soft md:block`,children:[(0,T.jsxs)(`div`,{className:`mb-3 flex items-center justify-between gap-2 px-1 text-sm`,children:[(0,T.jsx)(`span`,{className:`font-semibold text-ink`,children:`单词目录`}),(0,T.jsxs)(`span`,{className:`text-slate-500`,children:[a+1,`/`,t.length]})]}),(0,T.jsx)(`div`,{className:`max-h-[68vh] space-y-1 overflow-y-auto pr-1`,children:p.map((e,t)=>{let n=f+t;return(0,T.jsxs)(`button`,{type:`button`,onClick:()=>o(n),className:`flex min-h-11 w-full items-center justify-between gap-3 rounded-lg px-3 text-left text-sm transition ${n===a?`bg-indigo-50 text-indigo-700`:`text-slate-600 hover:bg-[#f8fbff] hover:text-ink`}`,children:[(0,T.jsx)(`span`,{className:`min-w-0 truncate font-semibold`,children:e.word}),(0,T.jsxs)(`span`,{className:`shrink-0 text-xs`,children:[`#`,e.order]})]},e.id)})})]}),(0,T.jsx)(`section`,{className:`min-w-0`,children:(0,T.jsx)(dl,{word:s,progress:d,audioSettings:r})}),(0,T.jsxs)(`aside`,{className:`hidden space-y-4 lg:block`,children:[(0,T.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-soft`,children:[(0,T.jsx)(`h2`,{className:`font-semibold text-ink`,children:`当前记忆状态`}),(0,T.jsxs)(`div`,{className:`mt-4 space-y-3 text-sm`,children:[(0,T.jsxs)(`div`,{className:`flex justify-between rounded-lg bg-[#f8fbff] p-3`,children:[(0,T.jsx)(`span`,{className:`text-slate-500`,children:`Stage`}),(0,T.jsx)(`span`,{className:`font-semibold text-ink`,children:d?.stage||0})]}),(0,T.jsxs)(`div`,{className:`flex justify-between rounded-lg bg-[#f8fbff] p-3`,children:[(0,T.jsx)(`span`,{className:`text-slate-500`,children:`状态`}),(0,T.jsx)(`span`,{className:`font-semibold text-ink`,children:Cc(d)})]}),(0,T.jsxs)(`div`,{className:`rounded-lg bg-[#f8fbff] p-3`,children:[(0,T.jsx)(`span`,{className:`block text-slate-500`,children:`下次复习`}),(0,T.jsx)(`span`,{className:`mt-1 block font-semibold text-ink`,children:Sc(d?.nextReviewAt)})]})]})]}),l?(0,T.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-4 text-sm shadow-soft`,children:[(0,T.jsx)(`h2`,{className:`font-semibold text-ink`,children:`快捷键`}),(0,T.jsxs)(`div`,{className:`mt-3 grid gap-2 text-slate-500`,children:[(0,T.jsx)(`span`,{children:`Space 播放发音`}),(0,T.jsx)(`span`,{children:`← / → 切换单词`}),(0,T.jsx)(`span`,{children:`Enter 标记已学`})]})]}):null]})]}),(0,T.jsxs)(`div`,{className:`sticky bottom-20 z-20 grid gap-3 rounded-lg border border-slate-200 bg-[#f8fbff]/95 p-2 shadow-soft backdrop-blur sm:grid-cols-4 md:static md:border-0 md:bg-transparent md:p-0 md:shadow-none`,children:[(0,T.jsxs)(`button`,{type:`button`,onClick:()=>m(-1),disabled:a===0,className:`btn-secondary disabled:opacity-40`,children:[(0,T.jsx)(S,{size:18,"aria-hidden":`true`}),`上一个`]}),(0,T.jsxs)(`button`,{type:`button`,onClick:()=>i(s.id),className:`btn-secondary sm:col-span-2`,children:[(0,T.jsx)(Ie,{size:18,"aria-hidden":`true`}),`加入今日学习`]}),(0,T.jsxs)(`button`,{type:`button`,onClick:()=>i(s.id),className:`btn-primary`,children:[(0,T.jsx)(ce,{size:18,"aria-hidden":`true`}),`标记已初学`]}),(0,T.jsxs)(`button`,{type:`button`,onClick:()=>m(1),disabled:a===t.length-1,className:`btn-secondary sm:col-start-4 disabled:opacity-40`,children:[(0,T.jsx)(C,{size:18,"aria-hidden":`true`}),`下一个`]})]})]}):null}function Fl({configured:e,online:t,user:n,state:r,message:i,lastSyncAt:a,pendingCount:o,onSync:s,onSkip:c,onLogin:l}){return(0,T.jsxs)(`div`,{className:`mx-auto max-w-3xl space-y-5`,children:[(0,T.jsx)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:(0,T.jsxs)(`div`,{className:`flex flex-wrap items-start justify-between gap-4`,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Cloud Sync`}),(0,T.jsx)(`h1`,{className:`mt-1 text-2xl font-semibold text-ink`,children:`同步学习进度`}),(0,T.jsx)(`p`,{className:`mt-2 text-sm leading-6 text-slate-500`,children:`首次登录时请选择本地数据和云端数据的处理方式。之后学习动作会自动同步。`})]}),(0,T.jsx)(ns,{configured:e,online:t,state:r,message:i,lastSyncAt:a,pendingCount:o})]})}),!e||!n?(0,T.jsxs)(`section`,{className:`rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-800`,children:[e?`请先登录账号再同步。`:`云同步未配置，本地模式可用。配置 Supabase 后即可同步。`,(0,T.jsxs)(`div`,{className:`mt-4 flex flex-wrap gap-3`,children:[(0,T.jsx)(`button`,{type:`button`,onClick:l,className:`btn-primary`,children:`去登录`}),(0,T.jsx)(`button`,{type:`button`,onClick:c,className:`btn-secondary`,children:`返回首页`})]})]}):(0,T.jsxs)(`section`,{className:`grid gap-4 md:grid-cols-3`,children:[(0,T.jsxs)(`button`,{type:`button`,onClick:()=>s(`upload`),className:`rounded-lg border border-sky-100 bg-white p-5 text-left shadow-soft transition hover:border-indigo-200 hover:bg-indigo-50`,children:[(0,T.jsx)(w,{className:`text-harbor`,size:24,"aria-hidden":`true`}),(0,T.jsx)(`h2`,{className:`mt-4 text-lg font-semibold text-ink`,children:`上传本地`}),(0,T.jsx)(`p`,{className:`mt-2 text-sm leading-6 text-slate-500`,children:`把当前设备的学习进度保存到云端。适合第一次创建账号。`})]}),(0,T.jsxs)(`button`,{type:`button`,onClick:()=>s(`download`),className:`rounded-lg border border-sky-100 bg-white p-5 text-left shadow-soft transition hover:border-indigo-200 hover:bg-indigo-50`,children:[(0,T.jsx)(pe,{className:`text-harbor`,size:24,"aria-hidden":`true`}),(0,T.jsx)(`h2`,{className:`mt-4 text-lg font-semibold text-ink`,children:`下载云端`}),(0,T.jsx)(`p`,{className:`mt-2 text-sm leading-6 text-slate-500`,children:`用云端进度覆盖本地。适合换设备恢复。`})]}),(0,T.jsxs)(`button`,{type:`button`,onClick:()=>s(`merge`),className:`rounded-lg border border-sky-100 bg-white p-5 text-left shadow-soft transition hover:border-indigo-200 hover:bg-indigo-50`,children:[(0,T.jsx)(we,{className:`text-harbor`,size:24,"aria-hidden":`true`}),(0,T.jsx)(`h2`,{className:`mt-4 text-lg font-semibold text-ink`,children:`合并数据`}),(0,T.jsx)(`p`,{className:`mt-2 text-sm leading-6 text-slate-500`,children:`本地和云端都有数据时推荐使用。单词进度保留较新的记录。`})]})]}),(0,T.jsxs)(`button`,{type:`button`,onClick:c,className:`btn-secondary`,children:[(0,T.jsx)(nt,{size:18,"aria-hidden":`true`}),`稍后处理`]})]})}function Il({words:e,progressMap:t,audioSettings:n,onStudy:r,onRecall:i,onQuiz:a}){let[o,s]=(0,y.useState)(`all`),c=(0,y.useMemo)(()=>o===`unlearned`?e.filter(e=>!t[e.id]?.learned):o===`due`?Us(e,t):o===`weak`?Gs(e,t):o===`wrong`?Ks(e,t):o===`mastered`?Ws(e,t):e,[o,e,t]);return(0,T.jsxs)(`div`,{className:`space-y-5`,children:[(0,T.jsxs)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,T.jsxs)(`div`,{className:`flex flex-wrap items-end justify-between gap-4`,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Library`}),(0,T.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`总词库`}),(0,T.jsxs)(`p`,{className:`mt-2 text-sm text-slate-500`,children:[`共 `,e.length,` 词`]})]}),(0,T.jsx)(yl,{value:o,items:[{value:`all`,label:`全部`},{value:`unlearned`,label:`未学`},{value:`due`,label:`应复习`},{value:`weak`,label:`不熟`},{value:`wrong`,label:`错题`},{value:`mastered`,label:`掌握`}],onChange:s})]}),(0,T.jsxs)(`div`,{className:`mt-5 grid gap-3 sm:grid-cols-3`,children:[(0,T.jsxs)(`button`,{type:`button`,onClick:r,className:`mode-card`,children:[(0,T.jsx)(Fe,{size:20,"aria-hidden":`true`}),(0,T.jsx)(`span`,{children:`总记忆`})]}),(0,T.jsxs)(`button`,{type:`button`,onClick:i,className:`mode-card`,children:[(0,T.jsx)(ie,{size:20,"aria-hidden":`true`}),(0,T.jsx)(`span`,{children:`总理解`})]}),(0,T.jsxs)(`button`,{type:`button`,onClick:a,className:`mode-card`,children:[(0,T.jsx)(de,{size:20,"aria-hidden":`true`}),(0,T.jsx)(`span`,{children:`总测试`})]})]})]}),(0,T.jsxs)(`div`,{className:`flex items-center gap-2 text-sm text-slate-500`,children:[(0,T.jsx)(Ae,{size:16,"aria-hidden":`true`}),`当前显示 `,c.length,` 词`]}),(0,T.jsx)(`div`,{className:`grid gap-3 lg:grid-cols-2`,children:c.map(e=>(0,T.jsx)(dl,{word:e,progress:t[e.id],compact:!0,audioSettings:n},e.id))})]})}function Ll({unit:e,progressMap:t,onStudy:n,onRecall:r,onQuiz:i}){let a=wc(e.words,t);return(0,T.jsx)(`div`,{className:`space-y-5`,children:(0,T.jsx)(`section`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:(0,T.jsxs)(`div`,{className:`grid gap-5 lg:grid-cols-[1fr_320px]`,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`div`,{className:`mb-3 text-xs font-semibold uppercase text-copper`,children:`Unit`}),(0,T.jsx)(`h1`,{className:`text-3xl font-semibold text-ink`,children:e.name}),(0,T.jsxs)(`p`,{className:`mt-2 text-sm text-slate-500`,children:[`共 `,e.words.length,` 词`,e.expectedCount?`，原文标注 ${e.expectedCount} 词`:``]}),(0,T.jsxs)(`div`,{className:`mt-6 grid gap-3 sm:grid-cols-3`,children:[(0,T.jsxs)(`button`,{type:`button`,onClick:n,className:`mode-card`,children:[(0,T.jsx)(ne,{size:20,"aria-hidden":`true`}),(0,T.jsx)(`span`,{children:`记忆`})]}),(0,T.jsxs)(`button`,{type:`button`,onClick:r,className:`mode-card`,children:[(0,T.jsx)(ie,{size:20,"aria-hidden":`true`}),(0,T.jsx)(`span`,{children:`理解`})]}),(0,T.jsxs)(`button`,{type:`button`,onClick:i,className:`mode-card`,children:[(0,T.jsx)(de,{size:20,"aria-hidden":`true`}),(0,T.jsx)(`span`,{children:`测试`})]})]})]}),(0,T.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-[#f8fbff] p-4`,children:[(0,T.jsxs)(`div`,{className:`mb-4 flex items-center gap-2 font-semibold text-ink`,children:[(0,T.jsx)(De,{size:18,"aria-hidden":`true`}),`单元进度`]}),(0,T.jsxs)(`div`,{className:`grid grid-cols-3 gap-2 text-center text-sm`,children:[(0,T.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-3`,children:[(0,T.jsx)(`div`,{className:`font-semibold`,children:a.learned}),(0,T.jsx)(`div`,{className:`text-xs text-slate-500`,children:`学习`})]}),(0,T.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-3`,children:[(0,T.jsx)(`div`,{className:`font-semibold`,children:a.mastered}),(0,T.jsx)(`div`,{className:`text-xs text-slate-500`,children:`掌握`})]}),(0,T.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-white p-3`,children:[(0,T.jsx)(`div`,{className:`font-semibold`,children:a.due}),(0,T.jsx)(`div`,{className:`text-xs text-slate-500`,children:`到期`})]})]}),(0,T.jsx)(`div`,{className:`mt-4`,children:(0,T.jsx)(sc,{value:a.mastered,max:e.words.length,label:`掌握进度`})})]})]})})})}var Rl=[[`基础高频`,`后续基础词包会放在这里，适合每天热身。`],[`词根词缀`,`用于把生词拆开记，减少死背压力。`],[`易混辨析`,`把拼写、词义相近的词集中复现。`]];function zl({units:e,progressMap:t,onOpenUnit:n}){let[r,i]=(0,y.useState)(`required`),a=(0,y.useMemo)(()=>e.filter(e=>e.order>=1&&e.order<=26).sort((e,t)=>e.order-t.order),[e]),o=a.reduce((e,t)=>e+t.words.length,0);return(0,T.jsxs)(`div`,{className:`space-y-5`,children:[(0,T.jsx)(`section`,{className:`rounded-lg border border-sky-100 bg-white p-5 shadow-soft`,children:(0,T.jsxs)(`div`,{className:`flex flex-wrap items-end justify-between gap-4`,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`div`,{className:`text-xs font-semibold uppercase text-copper`,children:`Units`}),(0,T.jsx)(`h1`,{className:`mt-1 text-3xl font-semibold text-ink`,children:`单元板块`}),(0,T.jsx)(`p`,{className:`mt-2 text-sm leading-6 text-slate-500`,children:`先分成基础版和必备版。必备版已放入 Unit1-26，按重复记忆节奏推进。`})]}),(0,T.jsx)(yl,{value:r,items:[{value:`basic`,label:`基础版`},{value:`required`,label:`必备版`}],onChange:i})]})}),r===`basic`?(0,T.jsx)(`section`,{className:`grid gap-4 md:grid-cols-3`,children:Rl.map(([e,t])=>(0,T.jsxs)(`article`,{className:`rounded-lg border border-dashed border-sky-200 bg-white/85 p-5 shadow-soft`,children:[(0,T.jsx)(`div`,{className:`mb-4 grid h-10 w-10 place-items-center rounded-lg border border-harbor/15 bg-[#f8fbff] text-harbor`,children:(0,T.jsx)(De,{size:20,"aria-hidden":`true`})}),(0,T.jsx)(`h2`,{className:`text-xl font-semibold text-ink`,children:e}),(0,T.jsx)(`p`,{className:`mt-2 text-sm leading-6 text-slate-500`,children:t}),(0,T.jsx)(`div`,{className:`mt-5 rounded-lg border border-sky-100 bg-[#f8fbff] p-3 text-sm font-semibold text-harbor`,children:`不影响必备版进度`})]},e))}):(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(`section`,{className:`grid gap-4 sm:grid-cols-3`,children:[(0,T.jsxs)(`div`,{className:`rounded-lg border border-sky-100 bg-white p-4 shadow-soft`,children:[(0,T.jsx)(`div`,{className:`text-sm text-slate-500`,children:`必备单元`}),(0,T.jsx)(`div`,{className:`mt-1 text-2xl font-semibold text-ink`,children:a.length})]}),(0,T.jsxs)(`div`,{className:`rounded-lg border border-sky-100 bg-white p-4 shadow-soft`,children:[(0,T.jsx)(`div`,{className:`text-sm text-slate-500`,children:`总词量`}),(0,T.jsx)(`div`,{className:`mt-1 text-2xl font-semibold text-ink`,children:o})]}),(0,T.jsxs)(`div`,{className:`rounded-lg border border-sky-100 bg-white p-4 shadow-soft`,children:[(0,T.jsx)(`div`,{className:`text-sm text-slate-500`,children:`范围`}),(0,T.jsx)(`div`,{className:`mt-1 text-2xl font-semibold text-ink`,children:`Unit1-26`})]})]}),(0,T.jsx)(`div`,{className:`grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`,children:a.map(e=>{let r=wc(e.words,t);return(0,T.jsxs)(`article`,{className:`rounded-lg border border-slate-200 bg-white p-5 shadow-soft`,children:[(0,T.jsxs)(`div`,{className:`flex items-start justify-between gap-4`,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`div`,{className:`mb-3 grid h-10 w-10 place-items-center rounded-lg border border-harbor/15 bg-[#f8fbff] text-harbor`,children:(0,T.jsx)(re,{size:20,"aria-hidden":`true`})}),(0,T.jsx)(`h2`,{className:`text-xl font-semibold text-ink`,children:e.name}),(0,T.jsxs)(`p`,{className:`mt-1 text-sm text-slate-500`,children:[`共 `,e.words.length,` 词`]})]}),(0,T.jsx)(`button`,{type:`button`,onClick:()=>n(e.id),className:`icon-btn`,title:`进入单元`,children:(0,T.jsx)(C,{size:18,"aria-hidden":`true`})})]}),(0,T.jsxs)(`div`,{className:`mt-5 grid grid-cols-3 gap-3 text-center`,children:[(0,T.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-[#f8fbff] p-3`,children:[(0,T.jsx)(`div`,{className:`font-semibold text-ink`,children:r.learned}),(0,T.jsx)(`div`,{className:`text-xs text-slate-500`,children:`已学习`})]}),(0,T.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-[#f8fbff] p-3`,children:[(0,T.jsx)(`div`,{className:`font-semibold text-ink`,children:r.mastered}),(0,T.jsx)(`div`,{className:`text-xs text-slate-500`,children:`已掌握`})]}),(0,T.jsxs)(`div`,{className:`rounded-lg border border-slate-200 bg-[#f8fbff] p-3`,children:[(0,T.jsx)(`div`,{className:`font-semibold text-ink`,children:r.due}),(0,T.jsx)(`div`,{className:`text-xs text-slate-500`,children:`待复习`})]})]}),(0,T.jsx)(`div`,{className:`mt-5`,children:(0,T.jsx)(sc,{value:r.mastered,max:e.words.length,label:`掌握进度`})}),e.words.length?null:(0,T.jsxs)(`div`,{className:`mt-4 flex items-center gap-2 rounded-lg border border-copper/20 bg-copper/5 p-3 text-sm text-copper`,children:[(0,T.jsx)(le,{size:16,"aria-hidden":`true`}),`这个单元文件已放入，但还需要继续补充可解析单词。`]})]},e.id)})})]})]})}function Q(e,t,n=0,r){let i=(0,y.useRef)(null),a=(0,y.useRef)(0),o=(0,y.useRef)(null),[s,c]=(0,y.useState)(0);return(0,y.useEffect)(()=>{if(!e)return;i.current=_c(e,t,n),a.current=Date.now(),c(0);let s=window.setInterval(()=>c(Math.floor((Date.now()-a.current)/1e3)),1e3),l=()=>{document.hidden?o.current=Date.now():o.current&&Date.now()-o.current>6e4&&(a.current+=Date.now()-o.current,o.current=null)};return document.addEventListener(`visibilitychange`,l),()=>{window.clearInterval(s),document.removeEventListener(`visibilitychange`,l);let e=i.current;!e||!r||(r({...e,endedAt:new Date().toISOString(),durationSeconds:Math.max(0,Math.floor((Date.now()-a.current)/1e3)),wordCount:n}),i.current=null)}},[e,r,t,n]),{seconds:s,minutes:Math.floor(s/60),active:!!(e&&i.current)}}function Bl({mode:e,unitId:t,wordCount:n=0,onComplete:r}){let i=Q(e,t,n,r);return!e||!i.active?null:(0,T.jsxs)(`div`,{className:`fixed bottom-20 right-4 z-30 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-500 shadow-soft md:bottom-4`,children:[`本次 `,i.minutes,`分`,i.seconds%60,`秒`]})}var Vl=`# 2027考研英语红宝书
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
`,Hl=`# 2027考研英语红宝书
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

`,Ul=`# 2027考研英语红宝书
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

`,Wl=`# 2027考研英语红宝书
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

`,Gl=`# 2027考研英语红宝书
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

`,Kl=`# 2027考研英语红宝书
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

`,ql=`# 2027考研英语红宝书
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

`,Jl=`# 2027考研英语红宝书
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

`,Yl=`# 2027考研英语红宝书
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
    conj. 如果，只要，在…条件下`,Xl=`# 2027考研英语红宝书
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


`,Zl=`# 2027考研英语红宝书
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

`,Ql=`# 2027考研英语红宝书
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

`,$l=`# 2027考研英语红宝书
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

`,eu=`# 2027考研英语红宝书
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

`,tu=`# 2027考研英语红宝书
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

`,nu=`# 2027考研英语红宝书
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

`,ru=`# 2027考研英语红宝书
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

`,iu=`# 2027考研英语红宝书
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

`,au=`# 2027考研英语红宝书
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
`,ou=`# 2027考研英语红宝书
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
`,su=`# 2027考研英语红宝书
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

`,cu=`# 2027考研英语红宝书
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

`,lu=`# 2027考研英语红宝书
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
`,uu=`# 2027考研英语红宝书必考词Unit 7（80词）提取结果
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

`,du=`# 必考词Unit8 69词
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

`,fu=`# 必考词Unit9 68词
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

`,pu=/^\s*(\d+)\.\s+\*\*(.+?)\*\*\s+(\/.+\/)\s*$/,mu=/^\s*([A-Za-z][A-Za-z'’.-]*(?:\s+[A-Za-z][A-Za-z'’.-]*)?)\s+(\/[^/]+\/)\s*$/,hu=/^((?:[a-z]+\.)+(?:\s+[a-z]+\.)*)\s+(.+)$/i;function gu(e,t){let n=e.match(/^#{1,3}\s+(.+)$/m)?.[1]?.trim(),r=n?.match(/(必考词)\s*Unit\s*(\d+)/i);return r?`${r[1]} Unit${r[2]}`:n?.replace(/\s*\d+\s*词\s*$/,``).trim()||t}function _u(e){let t=e.match(/^#{1,3}\s+.+?(\d+)\s*词/m)?.[1];return t?Number(t):void 0}function vu(e){return e.map(e=>e.trim()).filter(Boolean).map(e=>{let t=e.match(hu);return t?{pos:t[1].trim(),meaning:t[2].trim()}:{pos:``,meaning:e}})}function yu(e,t){let n=t.unitName||gu(e,t.unitId),r=e.split(/\r?\n/),i=[],a,o=()=>{if(!a)return;let e=i.length+1;i.push({id:`${t.unitId}-${String(e).padStart(3,`0`)}`,unitId:t.unitId,unitName:n,order:e,word:a.word,phonetic:a.phonetic,definitions:vu(a.definitions)})};for(let e of r){let t=e.match(pu);if(t){o(),a={order:Number(t[1]),word:t[2].trim(),phonetic:t[3].trim(),definitions:[]};continue}let n=e.match(mu);if(n){o(),a={order:i.length+1,word:n[1].trim(),phonetic:n[2].trim(),definitions:[]};continue}a&&(!e.trim()||e.trim().startsWith(`#`)||a.definitions.push(e))}return o(),{id:t.unitId,name:n,order:t.order,expectedCount:_u(e),words:i,referenceImages:t.referenceImages}}var bu=Object.assign({"../../单词文本/分区/19.md":Vl,"../../单词文本/分区/20.md":Hl,"../../单词文本/分区/21.md":Ul,"../../单词文本/分区/22.md":Wl,"../../单词文本/分区/23.md":Gl,"../../单词文本/分区/24.md":Kl,"../../单词文本/分区/25.md":ql,"../../单词文本/分区/26.md":Jl,"../../单词文本/分区/必修1.md":Yl,"../../单词文本/分区/必修10.md":Xl,"../../单词文本/分区/必修11.md":Zl,"../../单词文本/分区/必修12.md":Ql,"../../单词文本/分区/必修13.md":$l,"../../单词文本/分区/必修14.md":eu,"../../单词文本/分区/必修15.md":tu,"../../单词文本/分区/必修16.md":nu,"../../单词文本/分区/必修17.md":ru,"../../单词文本/分区/必修18.md":iu,"../../单词文本/分区/必修2.md":au,"../../单词文本/分区/必修3.md":ou,"../../单词文本/分区/必修4.md":su,"../../单词文本/分区/必修5.md":cu,"../../单词文本/分区/必修6 .md":lu,"../../单词文本/分区/必修7.md":uu,"../../单词文本/分区/必修8 .md":du,"../../单词文本/分区/必修9.md":fu}),xu={一:1,二:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9,十:10};function Su(e){return(e.split(`/`).pop()||e).replace(/\.[^.]+$/,``)}function Cu(e){let t=e.match(/\d+/)?.[0];if(t)return Number(t);let n=e.match(/[一二三四五六七八九十]+/)?.[0];if(n){if(n===`十`)return 10;if(n.startsWith(`十`))return 10+(xu[n[1]]||0);if(n.endsWith(`十`))return(xu[n[0]]||1)*10;if(n.includes(`十`)){let[e,t]=n.split(`十`);return(xu[e]||1)*10+(xu[t]||0)}return xu[n]}}function wu(e,t){let n=t?.match(/Unit\s*(\d+)/i)?.[1];return n?Number(n):Cu(Su(e))||999}var Tu=Object.entries(bu).map(([e,t])=>{let n=wu(e,t);return yu(t,{unitId:`unit${n}`,unitName:`必备词 Unit${n}`,order:n})}).sort((e,t)=>e.order-t.order);Tu.find(e=>e.id===`unit1`)||Tu[0],Tu.find(e=>e.id===`unit2`);var Eu=Tu.flatMap(e=>e.words);function Du(){let[e,t]=(0,y.useState)(null),[n,r]=(0,y.useState)(null),[i,a]=(0,y.useState)(null),[o,s]=(0,y.useState)(Ko),[c,l]=(0,y.useState)(null),u=(0,y.useCallback)(async(e=n)=>{if(!e||!Ko)return a(null),null;let t=await kc(e.id)||await Ac(e);return a(t),t},[n]);return(0,y.useEffect)(()=>{if(!Ko||!qo){s(!1);return}let e=!0;Oc().then(async({session:n,user:i})=>{e&&(t(n),r(i),i&&await u(i))}).catch(t=>{e&&l(t instanceof Error?t.message:`读取登录状态失败`)}).finally(()=>{e&&s(!1)});let{data:n}=qo.auth.onAuthStateChange((e,n)=>{let i=n?.user||null;t(n),r(i),i?u(i).catch(()=>void 0):a(null)});return()=>{e=!1,n.subscription.unsubscribe()}},[u]),{configured:Ko,session:e,user:n,profile:i,loading:o,error:c,login:(0,y.useCallback)(async(e,n)=>{s(!0),l(null);try{let i=await Mc({email:e,password:n});return t(i.session),r(i.user),i.user&&await u(i.user),i}catch(e){throw l(e instanceof Error?e.message:`登录失败`),e}finally{s(!1)}},[u]),register:(0,y.useCallback)(async(e,n,i)=>{s(!0),l(null);try{let a=await jc({username:e,email:n,password:i});return t(a.session),r(a.user),a.user&&await u(a.user),a}catch(e){throw l(e instanceof Error?e.message:`注册失败`),e}finally{s(!1)}},[u]),logout:(0,y.useCallback)(async()=>{s(!0),l(null);try{await Nc(),t(null),r(null),a(null)}catch(e){throw l(e instanceof Error?e.message:`退出登录失败`),e}finally{s(!1)}},[]),refreshProfile:u}}var Ou=new Map(Eu.map(e=>[e.id,e.unitId])),ku=new Set([`learned`,`known`,`fuzzy`,`forgotten`,`quiz-correct`,`quiz-wrong`,`monster-defeated`]);function Au(e){return e.lastReviewedAt||e.nextReviewAt||e.firstLearnedAt||new Date(0).toISOString()}function ju(e){return ku.has(e)?e:`known`}function Mu(e,t){return{user_id:e,word_id:t.wordId,unit_id:Ou.get(t.wordId)||null,stage:t.stage,first_learned_at:t.firstLearnedAt||null,last_reviewed_at:t.lastReviewedAt||null,next_review_at:t.nextReviewAt||null,known_count:t.knownCount,fuzzy_count:t.fuzzyCount,forgotten_count:t.forgottenCount,correct_count:t.correctCount,wrong_count:t.wrongCount,monster_hp:null,is_mastered:Hs(t),raw_progress:t,updated_at:Au(t)}}function Nu(e,t){return Object.values(t).flatMap(t=>t.reviewHistory.map(n=>({user_id:e,word_id:t.wordId,unit_id:Ou.get(t.wordId)||null,action:n.action,old_stage:n.stage,new_stage:t.stage,created_at:n.at})))}function Pu(e){let t=e.raw_progress&&typeof e.raw_progress==`object`?e.raw_progress:{};return{...xs(e.word_id),...t,wordId:e.word_id,learned:!!(t.learned??e.first_learned_at),stage:Number(e.stage||0),firstLearnedAt:e.first_learned_at||t.firstLearnedAt,lastReviewedAt:e.last_reviewed_at||t.lastReviewedAt,nextReviewAt:e.next_review_at||t.nextReviewAt,knownCount:Number(e.known_count||0),fuzzyCount:Number(e.fuzzy_count||0),forgottenCount:Number(e.forgotten_count||0),correctCount:Number(e.correct_count||0),wrongCount:Number(e.wrong_count||0),reviewHistory:Array.isArray(t.reviewHistory)?t.reviewHistory:[]}}async function Fu(e,t,n){let r=Yo(),i=await r.from(e).delete().eq(`user_id`,t);if(i.error)throw i.error;if(!n.length)return;let a=await r.from(e).insert(n);if(a.error)throw a.error}async function Iu(e,t){let n=Yo(),r=Object.values(t).map(t=>Mu(e,t));if(r.length){let e=await n.from(`word_progress`).upsert(r,{onConflict:`user_id,word_id`});if(e.error)throw e.error}await Fu(`review_history`,e,Nu(e,t))}async function Lu(e){let t=Yo(),n=await t.from(`word_progress`).select(`*`).eq(`user_id`,e);if(n.error)throw n.error;let r={};(n.data||[]).forEach(e=>{let t=Pu(e);r[t.wordId]=t});let i=await t.from(`review_history`).select(`*`).eq(`user_id`,e).order(`created_at`,{ascending:!0});if(i.error)throw i.error;let a=new Map;return(i.data||[]).forEach(e=>{let t=a.get(e.word_id)||[];t.push({action:ju(e.action),at:e.created_at,stage:Number(e.new_stage??e.old_stage??0)}),a.set(e.word_id,t)}),a.forEach((e,t)=>{r[t]={...r[t]||xs(t),reviewHistory:e.slice(-200)}}),r}async function Ru(e){let{count:t,error:n}=await Yo().from(`word_progress`).select(`id`,{count:`exact`,head:!0}).eq(`user_id`,e);if(n)throw n;return!!(t&&t>0)}function zu(){return new Date().toISOString()}async function Bu(e,t,n){let r=Yo(),i=await r.from(e).delete().eq(`user_id`,t);if(i.error)throw i.error;if(!n.length)return;let a=await r.from(e).insert(n);if(a.error)throw a.error}function Vu(e,t){return{user_id:e,total_study_days:t.totalStudyDays,current_streak:t.currentStreak,longest_streak:t.longestStreak,total_study_minutes:t.totalStudyMinutes,total_words_learned:t.totalWordsLearned,total_words_reviewed:t.totalWordsReviewed,total_quiz_count:t.totalQuizCount,total_correct_count:t.totalCorrectCount,total_wrong_count:t.totalWrongCount,total_xp:t.totalXp,level:t.level||ms(t.totalXp),coins:t.coins,diamonds:t.diamonds,monster_points:t.monsterPoints,defeated_monsters:t.defeatedMonsters,raw_stats:t,updated_at:zu()}}function Hu(e,t){return{user_id:e,default_accent:t.audioSettings.defaultAccent,auto_play_on_study:t.audioSettings.autoPlayOnStudy,auto_play_on_recall:t.audioSettings.autoPlayOnRecall,speech_rate:t.audioSettings.speechRate,repeat_count:t.audioSettings.repeatCount,theme:t.equippedTheme,updated_at:zu()}}function Uu(e,t){return t.map(t=>({user_id:e,mode:t.mode,unit_id:t.unitId||null,started_at:t.startedAt,ended_at:t.endedAt,duration_seconds:t.durationSeconds,word_count:t.wordCount,correct_count:t.correctCount??null,wrong_count:t.wrongCount??null,created_at:t.startedAt}))}function Wu(e,t){return t.map(t=>({user_id:e,date:t.date,type:`checkin`,streak_day:t.streakDay,reward_xp:t.rewardXp,reward_coins:t.rewardCoins,created_at:t.checkedAt}))}function Gu(e,t){return t.map(t=>({user_id:e,type:t.type,title:t.title,description:t.description,xp:t.xp,coins:t.coins,diamonds:0,created_at:t.createdAt}))}function Ku(e,t){return Array.from(new Set(t)).map(t=>({user_id:e,achievement_id:t,unlocked_at:zu()}))}function qu(e,t){return t.map(t=>({user_id:e,item_id:t.itemId,count:t.count,obtained_at:t.obtainedAt,updated_at:zu()}))}function $(e,t=0){let n=Number(e);return Number.isFinite(n)?n:t}function Ju(e){let t=e?.raw_stats&&typeof e.raw_stats==`object`?e.raw_stats:{};return As({...t,totalStudyDays:$(e?.total_study_days,t.totalStudyDays),currentStreak:$(e?.current_streak,t.currentStreak),longestStreak:$(e?.longest_streak,t.longestStreak),totalStudyMinutes:$(e?.total_study_minutes,t.totalStudyMinutes),totalWordsLearned:$(e?.total_words_learned,t.totalWordsLearned),totalWordsReviewed:$(e?.total_words_reviewed,t.totalWordsReviewed),totalQuizCount:$(e?.total_quiz_count,t.totalQuizCount),totalCorrectCount:$(e?.total_correct_count,t.totalCorrectCount),totalWrongCount:$(e?.total_wrong_count,t.totalWrongCount),totalXp:$(e?.total_xp,t.totalXp),level:$(e?.level,t.level||1),coins:$(e?.coins,t.coins),diamonds:$(e?.diamonds,t.diamonds),monsterPoints:$(e?.monster_points,t.monsterPoints),defeatedMonsters:$(e?.defeated_monsters,t.defeatedMonsters)})}function Yu(e,t){return e?{autoPlayOnStudy:!!e.auto_play_on_study,autoPlayOnRecall:!!e.auto_play_on_recall,defaultAccent:e.default_accent===`uk`?`uk`:`us`,speechRate:[.8,.9,1,1.1].includes(Number(e.speech_rate))?Number(e.speech_rate):t.speechRate,repeatCount:Number(e.repeat_count)===2?2:1}:t}function Xu(e){return[`study`,`recall`,`quiz`,`review`,`total`].includes(e)}async function Zu(e,t){let n=Yo(),r=await n.from(`user_stats`).upsert(Vu(e,t),{onConflict:`user_id`});if(r.error)throw r.error;let i=await n.from(`user_settings`).upsert(Hu(e,t),{onConflict:`user_id`});if(i.error)throw i.error;await Bu(`study_sessions`,e,Uu(e,t.studySessions)),await Bu(`checkins`,e,Wu(e,t.checkInHistory)),await Bu(`rewards`,e,Gu(e,t.rewardHistory)),await Bu(`achievements`,e,Ku(e,t.checkedAchievementIds)),await Bu(`inventory`,e,qu(e,t.inventory))}async function Qu(e){let t=Yo(),[n,r,i,a,o,s,c]=await Promise.all([t.from(`user_stats`).select(`*`).eq(`user_id`,e).maybeSingle(),t.from(`user_settings`).select(`*`).eq(`user_id`,e).maybeSingle(),t.from(`study_sessions`).select(`*`).eq(`user_id`,e).order(`started_at`,{ascending:!1}),t.from(`checkins`).select(`*`).eq(`user_id`,e).order(`date`,{ascending:!1}),t.from(`rewards`).select(`*`).eq(`user_id`,e).order(`created_at`,{ascending:!1}),t.from(`achievements`).select(`*`).eq(`user_id`,e),t.from(`inventory`).select(`*`).eq(`user_id`,e)]);[n,r,i,a,o,s,c].forEach(e=>{if(e.error)throw e.error});let l=n.data?Ju(n.data):ks(),u=(i.data||[]).map(e=>({id:e.id,date:String(e.started_at||e.created_at).slice(0,10),startedAt:e.started_at,endedAt:e.ended_at,durationSeconds:$(e.duration_seconds),mode:Xu(e.mode)?e.mode:`study`,unitId:e.unit_id||void 0,wordCount:$(e.word_count),correctCount:e.correct_count==null?void 0:$(e.correct_count),wrongCount:e.wrong_count==null?void 0:$(e.wrong_count)})),d=(a.data||[]).filter(e=>e.type===`checkin`).map(e=>({date:e.date,checkedAt:e.created_at,streakDay:$(e.streak_day,1),rewardXp:$(e.reward_xp),rewardCoins:$(e.reward_coins)})),f=(o.data||[]).map(e=>({id:e.id,type:e.type,title:e.title,description:e.description||``,xp:$(e.xp),coins:$(e.coins),createdAt:e.created_at})),p=(s.data||[]).map(e=>e.achievement_id).filter(Boolean),m=(c.data||[]).map(e=>({itemId:e.item_id,count:$(e.count,1),obtainedAt:e.obtained_at}));return As({...l,audioSettings:Yu(r.data,l.audioSettings),equippedTheme:r.data?.theme||l.equippedTheme,studySessions:u,checkInHistory:d,rewardHistory:f,checkedAchievementIds:p,inventory:m})}async function $u(e){let{count:t,error:n}=await Yo().from(`user_stats`).select(`id`,{count:`exact`,head:!0}).eq(`user_id`,e);if(n)throw n;return!!(t&&t>0)}var ed=`reword-pending-sync-v1`,td=`reword-sync-meta-v1`;function nd(){return typeof window<`u`&&`localStorage`in window}function rd(e){return`${e}-${typeof crypto<`u`&&`randomUUID`in crypto?crypto.randomUUID():`${Date.now()}-${Math.random().toString(36).slice(2,8)}`}`}function id(e,t){if(!nd())return t;let n=window.localStorage.getItem(e);if(!n)return t;try{return JSON.parse(n)}catch{return t}}function ad(e,t){nd()&&window.localStorage.setItem(e,JSON.stringify(t))}function od(){return id(ed,[])}function sd(e,t={}){let n=[...od(),{id:rd(`sync`),type:e,payload:t,createdAt:new Date().toISOString(),retryCount:0}].slice(-100);return ad(ed,n),n}function cd(){ad(ed,[])}function ld(){return id(td,{})}function ud(e){ad(td,e)}function dd(){return{progress:ws(),userStats:js(),exportedAt:new Date().toISOString(),schemaVersion:1}}function fd(e){Ts(e.progress),Ms(e.userStats)}function pd(e=dd()){let t=e.userStats;return Object.keys(e.progress).length>0||t.totalWordsLearned>0||t.totalWordsReviewed>0||t.totalQuizCount>0||t.totalStudyMinutes>0||t.rewardHistory.length>0||t.studySessions.length>0||t.checkInHistory.length>0}async function md(e){let[t,n]=await Promise.all([Ru(e),$u(e)]);return t||n}async function hd(e,t=dd()){await Iu(e,t.progress),await Zu(e,t.userStats);let n={userId:e,lastSyncAt:new Date().toISOString(),lastMode:`upload`};return ud(n),cd(),n}async function gd(e){let[t,n]=await Promise.all([Lu(e),Qu(e)]);return{progress:t,userStats:n,exportedAt:new Date().toISOString(),schemaVersion:1}}function _d(e){if(!e)return 0;let t=e.reviewHistory.reduce((e,t)=>Math.max(e,new Date(t.at).getTime()),0);return Math.max(t,e.lastReviewedAt?new Date(e.lastReviewedAt).getTime():0,e.nextReviewAt?new Date(e.nextReviewAt).getTime():0,e.firstLearnedAt?new Date(e.firstLearnedAt).getTime():0)}function vd(e,t){let n=new Set([...Object.keys(e),...Object.keys(t)]),r={};return n.forEach(n=>{let i=e[n],a=t[n];if(!i){r[n]=a;return}if(!a){r[n]=i;return}let o=_d(i)>=_d(a)?i:a,s=[...i.reviewHistory,...a.reviewHistory].sort((e,t)=>new Date(e.at).getTime()-new Date(t.at).getTime()).filter((e,t,n)=>t===0||`${e.action}-${e.at}-${e.stage}`!=`${n[t-1].action}-${n[t-1].at}-${n[t-1].stage}`).slice(-200);r[n]={...o,reviewHistory:s}}),r}function yd(e,t){let n=new Map;return e.forEach(e=>{n.set(t(e),e)}),Array.from(n.values())}function bd(...e){let t=e.filter(e=>!!e).sort();return t.length?t[t.length-1]:null}function xd(e,t){let n={...t.dailyRewardCaps};return Object.entries(e.dailyRewardCaps).forEach(([e,t])=>{let r=n[e]||{xp:0,coins:0,monsterPoints:0};n[e]={xp:Math.max(r.xp,t.xp),coins:Math.max(r.coins,t.coins),monsterPoints:Math.max(r.monsterPoints,t.monsterPoints)}}),{...e,totalStudyDays:Math.max(e.totalStudyDays,t.totalStudyDays),currentStreak:Math.max(e.currentStreak,t.currentStreak),longestStreak:Math.max(e.longestStreak,t.longestStreak),signInStreak:Math.max(e.signInStreak,t.signInStreak),lastSignInDate:bd(e.lastSignInDate,t.lastSignInDate),lastCheckInDate:bd(e.lastCheckInDate,t.lastCheckInDate),totalStudyMinutes:Math.max(e.totalStudyMinutes,t.totalStudyMinutes),totalWordsLearned:Math.max(e.totalWordsLearned,t.totalWordsLearned),totalWordsReviewed:Math.max(e.totalWordsReviewed,t.totalWordsReviewed),totalQuizCount:Math.max(e.totalQuizCount,t.totalQuizCount),totalCorrectCount:Math.max(e.totalCorrectCount,t.totalCorrectCount),totalWrongCount:Math.max(e.totalWrongCount,t.totalWrongCount),totalXp:Math.max(e.totalXp,t.totalXp),level:Math.max(e.level,t.level),coins:Math.max(e.coins,t.coins),diamonds:Math.max(e.diamonds,t.diamonds),monsterPoints:Math.max(e.monsterPoints,t.monsterPoints),defeatedMonsters:Math.max(e.defeatedMonsters,t.defeatedMonsters),unlockedItems:Array.from(new Set([...e.unlockedItems,...t.unlockedItems])),checkedAchievementIds:Array.from(new Set([...e.checkedAchievementIds,...t.checkedAchievementIds])),defeatedWordIds:Array.from(new Set([...e.defeatedWordIds,...t.defeatedWordIds])),defeatedBossIds:Array.from(new Set([...e.defeatedBossIds,...t.defeatedBossIds])),dailyRewardCaps:n,checkInHistory:yd([...e.checkInHistory,...t.checkInHistory],e=>e.date).sort((e,t)=>t.date.localeCompare(e.date)).slice(0,365),studySessions:yd([...e.studySessions,...t.studySessions],e=>`${e.startedAt}-${e.mode}-${e.unitId||``}`).slice(0,500),rewardHistory:yd([...e.rewardHistory,...t.rewardHistory],e=>`${e.createdAt}-${e.title}`).sort((e,t)=>t.createdAt.localeCompare(e.createdAt)).slice(0,200),inventory:yd([...e.inventory,...t.inventory],e=>e.itemId).map(n=>{let r=e.inventory.find(e=>e.itemId===n.itemId),i=t.inventory.find(e=>e.itemId===n.itemId);return{...n,count:(r?.count||0)+(i?.count||0),obtainedAt:[r?.obtainedAt,i?.obtainedAt].filter(Boolean).sort()[0]||n.obtainedAt}}),audioSettings:t.audioSettings,equippedTheme:t.equippedTheme||e.equippedTheme,equippedAvatar:t.equippedAvatar||e.equippedAvatar}}function Sd(e,t){return{progress:vd(e.progress,t.progress),userStats:xd(e.userStats,t.userStats),exportedAt:new Date().toISOString(),schemaVersion:1}}async function Cd(e,t,n=dd()){try{if(t===`upload`)return await hd(e,n),n;let r=await gd(e);if(t===`download`)return fd(r),ud({userId:e,lastSyncAt:new Date().toISOString(),lastMode:`download`}),cd(),r;let i=Sd(n,r);return fd(i),await hd(e,i),ud({userId:e,lastSyncAt:new Date().toISOString(),lastMode:`merge`}),i}catch(e){throw ud({...ld(),lastError:e instanceof Error?e.message:`同步失败`}),e}}function wd(){let[e,t]=(0,y.useState)(()=>typeof navigator>`u`?!0:navigator.onLine);return(0,y.useEffect)(()=>{let e=()=>t(!0),n=()=>t(!1);return window.addEventListener(`online`,e),window.addEventListener(`offline`,n),()=>{window.removeEventListener(`online`,e),window.removeEventListener(`offline`,n)}},[]),{online:e}}var Td=Jo();function Ed({userId:e,progressMap:t,userStats:n,onApplySnapshot:r}){let{online:i}=wd(),a=(0,y.useRef)(dd()),o=(0,y.useRef)(),s=(0,y.useRef)(),c=ld(),[l,u]=(0,y.useState)(()=>({configured:Ko,online:i,state:Ko?`idle`:`disabled`,message:Ko?`本地模式`:Td,lastSyncAt:c.lastSyncAt,pendingCount:od().length,needsFirstSyncChoice:!1}));(0,y.useEffect)(()=>{a.current={progress:t,userStats:n,exportedAt:new Date().toISOString(),schemaVersion:1}},[t,n]);let d=(0,y.useCallback)((e={})=>{let t=ld();u(n=>({...n,configured:Ko,online:i,lastSyncAt:t.lastSyncAt,pendingCount:od().length,...e}))},[i]),f=(0,y.useCallback)(async t=>{if(!Ko)return d({state:`disabled`,message:Td}),null;if(!e)return d({state:`idle`,message:`登录后可同步`}),null;if(!i)return sd(`manual`,{mode:t}),d({state:`offline`,message:`离线中，已加入待同步队列`}),null;d({state:`syncing`,message:`正在同步...`});try{let n=await Cd(e,t,a.current);return r(n),d({state:`success`,message:t===`upload`?`已上传本地进度`:t===`download`?`已恢复云端进度`:`已合并本地和云端进度`,needsFirstSyncChoice:!1}),n}catch(e){throw d({state:`error`,message:e instanceof Error?e.message:`同步失败`}),e}},[i,r,d,e]),p=(0,y.useCallback)((t,n={})=>{if(!Ko){d({state:`disabled`,message:Td});return}if(!e){d({state:`idle`,message:`游客本地模式`});return}if(!i){sd(t,n),d({state:`offline`,message:`离线中，已先保存到本地`});return}window.clearTimeout(o.current),o.current=window.setTimeout(()=>{f(`upload`).catch(()=>void 0)},900)},[i,d,f,e]);return(0,y.useEffect)(()=>{d({state:Ko?i?l.state===`offline`?`idle`:l.state:`offline`:`disabled`,message:Ko?i?l.message:`离线模式`:Td})},[i]),(0,y.useEffect)(()=>{!Ko||!e||!i||od().length&&f(`upload`).catch(()=>void 0)},[i,f,e]),(0,y.useEffect)(()=>{if(!Ko||!e||s.current===e)return;s.current=e;let t=ld();if(t.userId===e&&t.lastSyncAt){d({state:`success`,message:`已连接云同步`,needsFirstSyncChoice:!1});return}let n=!0;return md(e).then(async e=>{if(!n)return;let t=pd(a.current);t&&e?d({state:`idle`,message:`请选择首次同步方式`,needsFirstSyncChoice:!0}):t&&!e?await f(`upload`):!t&&e?await f(`download`):d({state:`success`,message:`已连接云同步`,needsFirstSyncChoice:!1})}).catch(e=>{n&&d({state:`error`,message:e instanceof Error?e.message:`读取云端数据失败`})}),()=>{n=!1}},[d,f,e]),(0,y.useEffect)(()=>()=>window.clearTimeout(o.current),[]),{...l,syncNow:f,queueLocalChange:p,refreshStatus:d}}function Dd(e){let t=new Blob([e],{type:`application/json`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`reword-progress-${new Date().toISOString().slice(0,10)}.json`,r.click(),URL.revokeObjectURL(n)}function Od(e,t,n=6e4){return e.lastReviewedAt?t.getTime()-new Date(e.lastReviewedAt).getTime()<n:!1}function kd(e,t){return t.rewardHistory[0]&&t.rewardHistory[0]?.id!==e.rewardHistory[0]?.id}function Ad(){let[e,t]=(0,y.useState)({name:`dashboard`}),[n,r]=(0,y.useState)(()=>ws()),[i,a]=(0,y.useState)(()=>js()),[o,s]=(0,y.useState)(),[c,l]=(0,y.useState)(!1),u=Du(),d=(0,y.useCallback)(e=>{r(e.progress),a(e.userStats)},[]),f=Ed({userId:u.user?.id,progressMap:n,userStats:i,onApplySnapshot:d}),p=(0,y.useMemo)(()=>Tu.find(t=>t.id===e.unitId)||Tu[0],[e.unitId]),m=e.unitId?p.words:Eu;(0,y.useEffect)(()=>{u.user&&f.needsFirstSyncChoice&&e.name!==`sync`&&t({name:`sync`})},[u.user,f.needsFirstSyncChoice,e.name]),(0,y.useEffect)(()=>{(e.name===`study`||e.name===`recall`||e.name===`quiz`)&&window.scrollTo({top:0})},[e.name,e.unitId]),(0,y.useEffect)(()=>{if(!o)return;let e=window.setTimeout(()=>s(void 0),2600);return()=>window.clearTimeout(e)},[o]),(0,y.useEffect)(()=>{let e=()=>l(!0);return window.addEventListener(`reword:update-ready`,e),()=>window.removeEventListener(`reword:update-ready`,e)},[]);let h=async()=>{let e=await navigator.serviceWorker?.getRegistration();if(e?.waiting){e.waiting.postMessage({type:`SKIP_WAITING`});return}window.location.reload()},g=async()=>{if(window.confirm(`只清理 PWA 缓存和旧版本文件，不会删除学习进度。继续吗？`)){if(`caches`in window){let e=await caches.keys();await Promise.all(e.filter(e=>e.startsWith(`reword-cache-`)).map(e=>caches.delete(e)))}if(`serviceWorker`in navigator){let e=await navigator.serviceWorker.getRegistrations();await Promise.all(e.map(e=>e.unregister()))}window.location.reload()}},_=(e,t,r=n)=>{let i=Qs(t,Eu,r);return Ms(i),f.queueLocalChange(`stats`,{source:`stats-update`}),kd(e,i)&&s(i.rewardHistory[0]),i},v=(e,t=n)=>{a(n=>_(n,e(n),t))},b=(e,t,n)=>{r(r=>{let i=r[e]||xs(e),o=t(i),s={...r,[e]:o};return Ts(s),f.queueLocalChange(`progress`,{wordId:e}),n&&a(e=>_(e,n(e,i,o,s),s)),s})},x=e=>{b(e,e=>Ls(e),(e,t)=>t.learned?e:vs({...e,totalWordsLearned:e.totalWordsLearned+1},{type:`study`,title:`新词入库`,description:`完成 1 个新单词初学`,xp:2,coins:1,monsterPoints:1}))},S=(e,t)=>{let n=new Date;b(e,e=>t===`known`?Rs(e,n):t===`fuzzy`?zs(e,n):Bs(e,n),(r,i,a)=>{if(Od(i,n))return r;let o={...r,totalWordsReviewed:r.totalWordsReviewed+1};return t===`known`?o=vs(o,{type:`review`,title:`复习命中`,description:`理解模式记住 1 个单词`,xp:4,coins:2,monsterPoints:3}):t===`fuzzy`&&(o=vs(o,{type:`review`,title:`复习推进`,description:`标记 1 个不熟词，进入加固周期`,xp:1,monsterPoints:1})),t===`known`&&Hs(a)&&!o.defeatedWordIds.includes(e)&&(o=vs({...o,defeatedWordIds:[...o.defeatedWordIds,e],defeatedMonsters:o.defeatedMonsters+1},{type:`monster`,title:`击败单词小怪`,description:`一个单词进入掌握状态`,xp:10,coins:5,monsterPoints:10})),o})},C=(e,t)=>{let n=new Date;b(e,e=>t?Ss(Rs({...e,correctCount:e.correctCount+1},n),`quiz-correct`,n):Ss(Bs({...e,wrongCount:e.wrongCount+1},n),`quiz-wrong`,n),(r,i,a)=>{let o=Od(i,n),s={...r,totalQuizCount:r.totalQuizCount+1,totalCorrectCount:r.totalCorrectCount+ +!!t,totalWrongCount:r.totalWrongCount+ +!t};return!o&&t&&(s=vs(s,{type:`quiz`,title:`测试答对`,description:`测验中答对 1 题`,xp:3,coins:1,monsterPoints:2})),t&&Hs(a)&&!s.defeatedWordIds.includes(e)&&(s=vs({...s,defeatedWordIds:[...s.defeatedWordIds,e],defeatedMonsters:s.defeatedMonsters+1},{type:`monster`,title:`击败单词小怪`,description:`测试命中让单词进入掌握状态`,xp:10,coins:5,monsterPoints:10})),s})},ee=e=>{try{r(Os(e)),a(js()),f.queueLocalChange(`manual`,{source:`import`})}catch(e){window.alert(e instanceof Error?e.message:`导入失败`)}},te=()=>{window.confirm(`确定清空所有学习进度、金币和打卡记录吗？`)&&(Es(),r({}),a(js()),f.queueLocalChange(`manual`,{source:`reset`}))},ne=(0,y.useCallback)(e=>{a(t=>{let n=vc(t).todaySeconds,r=K(t,e);if(r===t)return t;let i=vc(r).todaySeconds;[{minutes:15,xp:20,coins:8,monsterPoints:8},{minutes:30,xp:35,coins:12,monsterPoints:12},{minutes:60,xp:80,coins:25,monsterPoints:25}].forEach(e=>{n<e.minutes*60&&i>=e.minutes*60&&(r=vs(r,{type:`study`,title:`专注 ${e.minutes} 分钟`,description:`今日学习时长达标`,xp:e.xp,coins:e.coins,monsterPoints:e.monsterPoints}))});let a=Qs(r,Eu,ws());return Ms(a),f.queueLocalChange(`session`,{sessionId:e.id}),kd(t,a)&&s(a.rewardHistory[0]),a})},[f.queueLocalChange]),re=()=>{v(e=>rc(e))},ie=()=>{if(!nc(Eu,n,i)){window.alert(`今日任务还没达成，先学几个新词、复习或完成一次测试。`);return}v(e=>ic(e))},ae=e=>{a(t=>{let n=Ol(t,e);return n===t?(window.alert(`金币/钻石不足，或已经拥有这个物品。`),t):_(t,n)})},oe=e=>{let t=Tu.find(t=>t.id===e);t&&v(r=>{let i=Rc(t,n,r);return!i.eligible||i.defeated?(window.alert(`Boss 还不能挑战：需要本单元学习达到 80%，并且没有到期复习。`),r):vs({...r,defeatedBossIds:[...r.defeatedBossIds,e],defeatedMonsters:r.defeatedMonsters+1},{type:`monster`,title:`击败 ${i.name}`,description:`完成一个单元 Boss 挑战`,xp:100,coins:50,diamonds:1,monsterPoints:60,bypassDailyCap:!0})})},se=e=>{v(t=>({...t,audioSettings:e}))},ce=e=>t({name:e}),le=e.name===`study`||e.name===`quiz`||e.name===`total`?e.name:e.name===`recall`?e.dueOnly?`review`:`recall`:void 0;return(0,T.jsxs)(vt,{current:e.name,onNavigate:ce,user:u.user,profile:u.profile,children:[o?(0,T.jsx)(`div`,{className:`fixed left-1/2 top-20 z-50 w-[min(92vw,360px)] -translate-x-1/2`,children:(0,T.jsx)(yt,{reward:o})}):null,c?(0,T.jsxs)(`div`,{className:`fixed inset-x-3 top-16 z-50 mx-auto flex max-w-md items-center justify-between gap-3 rounded-lg border border-indigo-200 bg-white px-3 py-2 text-sm shadow-soft md:top-4`,children:[(0,T.jsx)(`span`,{className:`font-semibold text-ink`,children:`发现新版本`}),(0,T.jsxs)(`div`,{className:`flex shrink-0 gap-2`,children:[(0,T.jsx)(`button`,{type:`button`,onClick:()=>l(!1),className:`rounded-md border border-slate-200 px-2 py-1 text-xs font-semibold text-slate-500`,children:`稍后`}),(0,T.jsx)(`button`,{type:`button`,onClick:g,className:`rounded-md border border-sky-200 px-2 py-1 text-xs font-semibold text-harbor`,children:`清缓存`}),(0,T.jsx)(`button`,{type:`button`,onClick:h,className:`rounded-md bg-harbor px-2 py-1 text-xs font-semibold text-white`,children:`刷新`})]})]}):null,e.name===`login`?(0,T.jsx)(Fc,{configured:u.configured,loading:u.loading,error:u.error,onLogin:async(e,t)=>{await u.login(e,t)},onSuccess:()=>t({name:`sync`}),onRegister:()=>t({name:`register`}),onGuest:()=>t({name:`dashboard`})}):e.name===`register`?(0,T.jsx)(Sl,{configured:u.configured,loading:u.loading,error:u.error,onRegister:async(e,t,n)=>{await u.register(e,t,n)},onSuccess:()=>t({name:u.user?`sync`:`login`}),onLogin:()=>t({name:`login`})}):e.name===`sync`?(0,T.jsx)(Fl,{configured:f.configured,online:f.online,user:u.user,state:f.state,message:f.message,lastSyncAt:f.lastSyncAt,pendingCount:f.pendingCount,onSync:async e=>{await f.syncNow(e),t({name:`account`})},onSkip:()=>t({name:`dashboard`}),onLogin:()=>t({name:`login`})}):e.name===`account`?(0,T.jsx)(rs,{configured:f.configured,online:f.online,user:u.user,profile:u.profile,state:f.state,message:f.message,lastSyncAt:f.lastSyncAt,pendingCount:f.pendingCount,onLogin:()=>t({name:`login`}),onRegister:()=>t({name:`register`}),onSync:f.syncNow,onLogout:async()=>{await u.logout(),t({name:`dashboard`})},onExport:()=>Dd(Ds()),onImport:ee}):e.name===`dashboard`?(0,T.jsx)(Tc,{units:Tu,words:Eu,progressMap:n,stats:i,onSignIn:re,onNavigateReview:()=>t({name:`review`}),onNavigateUnits:()=>t({name:`units`}),onNavigateCheckIn:()=>t({name:`checkin`}),onNavigateMonster:()=>t({name:`monster`}),onNavigateShop:()=>t({name:`shop`}),onNavigateStatistics:()=>t({name:`statistics`}),onNavigateLogin:()=>t({name:`login`}),onNavigateAccount:()=>t({name:`account`}),syncStatus:{configured:f.configured,online:f.online,state:f.state,message:u.user?f.message:f.configured?`游客本地模式`:f.message,lastSyncAt:f.lastSyncAt,pendingCount:f.pendingCount,isLoggedIn:!!u.user}}):e.name===`units`?(0,T.jsx)(zl,{units:Tu,progressMap:n,onOpenUnit:e=>t({name:`unitDetail`,unitId:e})}):e.name===`unitDetail`?(0,T.jsx)(Ll,{unit:p,progressMap:n,onStudy:()=>t({name:`study`,unitId:p.id}),onRecall:()=>t({name:`recall`,unitId:p.id}),onQuiz:()=>t({name:`quiz`,unitId:p.id})}):e.name===`study`?(0,T.jsx)(Pl,{unit:e.unitId?p:void 0,words:m,progressMap:n,audioSettings:i.audioSettings,onLearn:x}):e.name===`recall`?(0,T.jsx)(bl,{title:e.unitId?`${p.name} 理解功能`:`总理解功能`,words:m,progressMap:n,audioSettings:i.audioSettings,initialDueOnly:e.dueOnly,onGrade:S,onBackToStudy:()=>t({name:`study`,unitId:e.unitId})}):e.name===`quiz`?(0,T.jsx)(_l,{title:e.unitId?`${p.name} 测试功能`:`总测试功能`,words:m,allWords:Eu,progressMap:n,audioSettings:i.audioSettings,onAnswer:C}):e.name===`total`?(0,T.jsx)(Il,{words:Eu,progressMap:n,audioSettings:i.audioSettings,onStudy:()=>t({name:`study`}),onRecall:()=>t({name:`recall`}),onQuiz:()=>t({name:`quiz`})}):e.name===`review`?(0,T.jsx)(Cl,{words:Eu,progressMap:n,audioSettings:i.audioSettings,onStartReview:()=>t({name:`recall`,dueOnly:!0}),onOpenUnits:()=>t({name:`units`})}):e.name===`checkin`?(0,T.jsx)(cc,{words:Eu,progressMap:n,stats:i,onSignIn:re,onCheckIn:ie}):e.name===`rewards`?(0,T.jsx)(wl,{stats:i}):e.name===`shop`?(0,T.jsx)(Al,{stats:i,onExchange:ae}):e.name===`monster`?(0,T.jsx)(Hc,{words:Eu,units:Tu,progressMap:n,stats:i,onChallengeBoss:oe}):e.name===`statistics`?(0,T.jsx)(Ml,{stats:i,words:Eu,progressMap:n}):e.name===`achievements`?(0,T.jsx)($s,{stats:i,words:Eu,progressMap:n}):e.name===`settings`?(0,T.jsx)(Tl,{stats:i,onUpdateAudio:se,syncStatus:{online:f.online,state:f.state,message:f.message,lastSyncAt:f.lastSyncAt,pendingCount:f.pendingCount,isLoggedIn:!!u.user}}):(0,T.jsx)(Uc,{words:Eu,progressMap:n,stats:i,onNavigateCheckIn:()=>t({name:`checkin`}),onNavigateRewards:()=>t({name:`rewards`}),onNavigateShop:()=>t({name:`shop`}),onNavigateStatistics:()=>t({name:`statistics`}),onNavigateAchievements:()=>t({name:`achievements`}),onNavigateSettings:()=>t({name:`settings`}),onNavigateAccount:()=>t({name:`account`}),syncStatus:{configured:f.configured,online:f.online,state:f.state,message:u.user?f.message:f.configured?`游客本地模式`:f.message,lastSyncAt:f.lastSyncAt,pendingCount:f.pendingCount},onExport:()=>Dd(Ds()),onImport:ee,onClearCache:g,onReset:te}),(0,T.jsx)(Bl,{mode:le,unitId:e.unitId,wordCount:m.length,onComplete:ne})]})}at.createRoot(document.getElementById(`root`)).render((0,T.jsx)(y.StrictMode,{children:(0,T.jsx)(Ad,{})})),`serviceWorker`in navigator&&window.addEventListener(`load`,()=>{let e=!1,t=()=>window.dispatchEvent(new CustomEvent(`reword:update-ready`));navigator.serviceWorker.addEventListener(`controllerchange`,()=>{e||(e=!0,window.location.reload())}),navigator.serviceWorker.register(`/reword/sw.js`).then(e=>{e.update(),e.waiting&&t(),e.addEventListener(`updatefound`,()=>{let n=e.installing;n?.addEventListener(`statechange`,()=>{n.state===`installed`&&navigator.serviceWorker.controller&&t()})})}).catch(()=>void 0)});