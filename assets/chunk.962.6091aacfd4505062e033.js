"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[962],{847:(e,t,n)=>{n.r(t),n.d(t,{Breadcrumbs:()=>tr,BrowserClient:()=>un,BrowserProfilingIntegration:()=>$c,BrowserTracing:()=>rc,Dedupe:()=>ar,Feedback:()=>Ba,FunctionToString:()=>Te,GlobalHandlers:()=>Pn,HttpContext:()=>or,Hub:()=>F,InboundFilters:()=>Oe,Integrations:()=>Bc,LinkedErrors:()=>rr,ModuleMetadata:()=>je,Replay:()=>ya,SDK_VERSION:()=>$,Scope:()=>L,TryCatch:()=>zn,WINDOW:()=>Wt,addBreadcrumb:()=>te,addEventProcessor:()=>et,addGlobalEventProcessor:()=>h,addIntegration:()=>ke,addTracingExtensions:()=>kt,captureEvent:()=>Q,captureException:()=>X,captureMessage:()=>Z,captureUserFeedback:()=>_r,chromeStackLineParser:()=>Sn,close:()=>de,configureScope:()=>ee,continueTrace:()=>Rt,createTransport:()=>Nt,createUserFeedbackEnvelope:()=>ln,defaultIntegrations:()=>pr,defaultRequestInstrumentationOptions:()=>Xa,defaultStackLineParsers:()=>Mn,defaultStackParser:()=>An,eventFromException:()=>rn,eventFromMessage:()=>sn,exceptionFromError:()=>Zt,extractTraceparentData:()=>st,flush:()=>ue,forceLoad:()=>fr,geckoStackLineParser:()=>En,getActiveSpan:()=>It,getActiveTransaction:()=>rt,getClient:()=>he,getCurrentHub:()=>H,getCurrentScope:()=>me,getHubFromCarrier:()=>q,init:()=>hr,instrumentOutgoingRequests:()=>Za,lastEventId:()=>pe,makeBrowserOfflineTransport:()=>pc,makeFetchTransport:()=>hn,makeMain:()=>j,makeMultiplexedTransport:()=>Bt,makeXHRTransport:()=>fn,metrics:()=>zt,onLoad:()=>gr,onProfilingStartRouteTransaction:()=>Dc,opera10StackLineParser:()=>In,opera11StackLineParser:()=>On,setContext:()=>ne,setExtra:()=>se,setExtras:()=>re,setMeasurement:()=>qt,setTag:()=>ie,setTags:()=>oe,setUser:()=>ae,showReportDialog:()=>mr,spanStatusfromHttpCode:()=>lt,startInactiveSpan:()=>Ct,startSpan:()=>xt,startSpanManual:()=>Tt,startTransaction:()=>le,trace:()=>Et,winjsStackLineParser:()=>Tn,withScope:()=>ce,wrap:()=>yr})
var r={}
n.r(r),n.d(r,{FunctionToString:()=>Te,InboundFilters:()=>Oe,LinkedErrors:()=>Ne})
var s={}
n.r(s),n.d(s,{Breadcrumbs:()=>tr,Dedupe:()=>ar,GlobalHandlers:()=>Pn,HttpContext:()=>or,LinkedErrors:()=>rr,TryCatch:()=>zn})
var o=n(927),i=n(438),a=n(190)
const c="undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__
var l=n(956),u=n(612),d=n(146)
function p(){return(0,l.Y)("globalEventProcessors",(()=>[]))}function h(e){p().push(e)}function m(e,t,n,r=0){return new u.cW(((s,o)=>{const i=e[r]
if(null===t||"function"!=typeof i)s(t)
else{const l=i({...t},n)
c&&i.id&&null===l&&a.kg.log(`Event processor "${i.id}" dropped event`),(0,d.J8)(l)?l.then((t=>m(e,t,n,r+1).then(s))).then(null,o):m(e,l,n,r+1).then(s).then(null,o)}}))}const f="production"
var g=n(505)
function y(e){const t=(0,g.ph)(),n={sid:(0,i.DM)(),init:!0,timestamp:t,started:t,duration:0,status:"ok",errors:0,ignoreDuration:!1,toJSON:()=>function(e){return(0,o.Jr)({sid:`${e.sid}`,init:e.init,started:new Date(1e3*e.started).toISOString(),timestamp:new Date(1e3*e.timestamp).toISOString(),status:e.status,errors:e.errors,did:"number"==typeof e.did||"string"==typeof e.did?`${e.did}`:void 0,duration:e.duration,abnormal_mechanism:e.abnormal_mechanism,attrs:{release:e.release,environment:e.environment,ip_address:e.ipAddress,user_agent:e.userAgent}})}(n)}
return e&&_(n,e),n}function _(e,t={}){if(t.user&&(!e.ipAddress&&t.user.ip_address&&(e.ipAddress=t.user.ip_address),e.did||t.did||(e.did=t.user.id||t.user.email||t.user.username)),e.timestamp=t.timestamp||(0,g.ph)(),t.abnormal_mechanism&&(e.abnormal_mechanism=t.abnormal_mechanism),t.ignoreDuration&&(e.ignoreDuration=t.ignoreDuration),t.sid&&(e.sid=32===t.sid.length?t.sid:(0,i.DM)()),void 0!==t.init&&(e.init=t.init),!e.did&&t.did&&(e.did=`${t.did}`),"number"==typeof t.started&&(e.started=t.started),e.ignoreDuration)e.duration=void 0
else if("number"==typeof t.duration)e.duration=t.duration
else{const t=e.timestamp-e.started
e.duration=t>=0?t:0}t.release&&(e.release=t.release),t.environment&&(e.environment=t.environment),!e.ipAddress&&t.ipAddress&&(e.ipAddress=t.ipAddress),!e.userAgent&&t.userAgent&&(e.userAgent=t.userAgent),"number"==typeof t.errors&&(e.errors=t.errors),t.status&&(e.status=t.status)}function v(e,t){let n={}
t?n={status:t}:"ok"===e.status&&(n={status:"exited"}),_(e,n)}var b=n(976)
const S=1
function k(e){const{spanId:t,traceId:n}=e.spanContext(),{data:r,op:s,parent_span_id:i,status:a,tags:c,origin:l}=T(e)
return(0,o.Jr)({data:r,op:s,parent_span_id:i,span_id:t,status:a,tags:c,trace_id:n,origin:l})}function w(e){const{traceId:t,spanId:n}=e.spanContext(),r=C(e)
return(0,b.$p)(t,n,r)}function E(e){return"number"==typeof e?x(e):Array.isArray(e)?e[0]+e[1]/1e9:e instanceof Date?x(e.getTime()):(0,g.ph)()}function x(e){return e>9999999999?e/1e3:e}function T(e){return function(e){return"function"==typeof e.getSpanJSON}(e)?e.getSpanJSON():"function"==typeof e.toJSON?e.toJSON():{}}function C(e){const{traceFlags:t}=e.spanContext()
return Boolean(t&S)}function I(e,t,n){const r=t.getOptions(),{publicKey:s}=t.getDsn()||{},{segment:i}=n&&n.getUser()||{},a=(0,o.Jr)({environment:r.environment||f,release:r.release,user_segment:i,public_key:s,trace_id:e})
return t.emit&&t.emit("createDsc",a),a}function R(e){const t=he()
if(!t)return{}
const n=I(T(e).trace_id||"",t,me()),r=e.transaction
if(!r)return n
const s=r&&r._frozenDynamicSamplingContext
if(s)return s
const{sampleRate:o,source:i}=r.metadata
null!=o&&(n.sample_rate=`${o}`)
const a=T(r)
return i&&"url"!==i&&(n.transaction=a.description),n.sampled=String(C(r)),t.emit&&t.emit("createDsc",n),n}function O(e,t){const{fingerprint:n,span:r,breadcrumbs:s,sdkProcessingMetadata:o,propagationContext:a}=t
!function(e,t){const{extra:n,tags:r,user:s,contexts:o,level:i,transactionName:a}=t
n&&Object.keys(n).length&&(e.extra={...n,...e.extra}),r&&Object.keys(r).length&&(e.tags={...r,...e.tags}),s&&Object.keys(s).length&&(e.user={...s,...e.user}),o&&Object.keys(o).length&&(e.contexts={...o,...e.contexts}),i&&(e.level=i),a&&(e.transaction=a)}(e,t),r&&function(e,t){e.contexts={trace:k(t),...e.contexts}
const n=t.transaction
if(n){e.sdkProcessingMetadata={dynamicSamplingContext:R(t),...e.sdkProcessingMetadata}
const r=T(n).description
r&&(e.tags={transaction:r,...e.tags})}}(e,r),function(e,t){e.fingerprint=e.fingerprint?(0,i.lE)(e.fingerprint):[],t&&(e.fingerprint=e.fingerprint.concat(t)),e.fingerprint&&!e.fingerprint.length&&delete e.fingerprint}(e,n),function(e,t){const n=[...e.breadcrumbs||[],...t]
e.breadcrumbs=n.length?n:void 0}(e,s),function(e,t,n){e.sdkProcessingMetadata={...e.sdkProcessingMetadata,...t,propagationContext:n}}(e,o,a)}function M(e,t){const{extra:n,tags:r,user:s,contexts:o,level:i,sdkProcessingMetadata:a,breadcrumbs:c,fingerprint:l,eventProcessors:u,attachments:d,propagationContext:p,transactionName:h,span:m}=t
A(e,"extra",n),A(e,"tags",r),A(e,"user",s),A(e,"contexts",o),A(e,"sdkProcessingMetadata",a),i&&(e.level=i),h&&(e.transactionName=h),m&&(e.span=m),c.length&&(e.breadcrumbs=[...e.breadcrumbs,...c]),l.length&&(e.fingerprint=[...e.fingerprint,...l]),u.length&&(e.eventProcessors=[...e.eventProcessors,...u]),d.length&&(e.attachments=[...e.attachments,...d]),e.propagationContext={...e.propagationContext,...p}}function A(e,t,n){n&&Object.keys(n).length&&(e[t]={...e[t],...n})}let D
class L{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={},this._propagationContext=N()}static clone(e){return e?e.clone():new L}clone(){const e=new L
return e._breadcrumbs=[...this._breadcrumbs],e._tags={...this._tags},e._extra={...this._extra},e._contexts={...this._contexts},e._user=this._user,e._level=this._level,e._span=this._span,e._session=this._session,e._transactionName=this._transactionName,e._fingerprint=this._fingerprint,e._eventProcessors=[...this._eventProcessors],e._requestSession=this._requestSession,e._attachments=[...this._attachments],e._sdkProcessingMetadata={...this._sdkProcessingMetadata},e._propagationContext={...this._propagationContext},e._client=this._client,e}setClient(e){this._client=e}getClient(){return this._client}addScopeListener(e){this._scopeListeners.push(e)}addEventProcessor(e){return this._eventProcessors.push(e),this}setUser(e){return this._user=e||{},this._session&&_(this._session,{user:e}),this._notifyScopeListeners(),this}getUser(){return this._user}getRequestSession(){return this._requestSession}setRequestSession(e){return this._requestSession=e,this}setTags(e){return this._tags={...this._tags,...e},this._notifyScopeListeners(),this}setTag(e,t){return this._tags={...this._tags,[e]:t},this._notifyScopeListeners(),this}setExtras(e){return this._extra={...this._extra,...e},this._notifyScopeListeners(),this}setExtra(e,t){return this._extra={...this._extra,[e]:t},this._notifyScopeListeners(),this}setFingerprint(e){return this._fingerprint=e,this._notifyScopeListeners(),this}setLevel(e){return this._level=e,this._notifyScopeListeners(),this}setTransactionName(e){return this._transactionName=e,this._notifyScopeListeners(),this}setContext(e,t){return null===t?delete this._contexts[e]:this._contexts[e]=t,this._notifyScopeListeners(),this}setSpan(e){return this._span=e,this._notifyScopeListeners(),this}getSpan(){return this._span}getTransaction(){const e=this._span
return e&&e.transaction}setSession(e){return e?this._session=e:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(e){if(!e)return this
if("function"==typeof e){const t=e(this)
return t instanceof L?t:this}return e instanceof L?(this._tags={...this._tags,...e._tags},this._extra={...this._extra,...e._extra},this._contexts={...this._contexts,...e._contexts},e._user&&Object.keys(e._user).length&&(this._user=e._user),e._level&&(this._level=e._level),e._fingerprint&&(this._fingerprint=e._fingerprint),e._requestSession&&(this._requestSession=e._requestSession),e._propagationContext&&(this._propagationContext=e._propagationContext)):(0,d.PO)(e)&&(this._tags={...this._tags,...e.tags},this._extra={...this._extra,...e.extra},this._contexts={...this._contexts,...e.contexts},e.user&&(this._user=e.user),e.level&&(this._level=e.level),e.fingerprint&&(this._fingerprint=e.fingerprint),e.requestSession&&(this._requestSession=e.requestSession),e.propagationContext&&(this._propagationContext=e.propagationContext)),this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._requestSession=void 0,this._span=void 0,this._session=void 0,this._notifyScopeListeners(),this._attachments=[],this._propagationContext=N(),this}addBreadcrumb(e,t){const n="number"==typeof t?t:100
if(n<=0)return this
const r={timestamp:(0,g.yW)(),...e},s=this._breadcrumbs
return s.push(r),this._breadcrumbs=s.length>n?s.slice(-n):s,this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(e){return this._attachments.push(e),this}getAttachments(){return this.getScopeData().attachments}clearAttachments(){return this._attachments=[],this}getScopeData(){const{_breadcrumbs:e,_attachments:t,_contexts:n,_tags:r,_extra:s,_user:o,_level:i,_fingerprint:a,_eventProcessors:c,_propagationContext:l,_sdkProcessingMetadata:u,_transactionName:d,_span:p}=this
return{breadcrumbs:e,attachments:t,contexts:n,tags:r,extra:s,user:o,level:i,fingerprint:a||[],eventProcessors:c,propagationContext:l,sdkProcessingMetadata:u,transactionName:d,span:p}}applyToEvent(e,t={},n=[]){return O(e,this.getScopeData()),m([...n,...p(),...this._eventProcessors],e,t)}setSDKProcessingMetadata(e){return this._sdkProcessingMetadata={...this._sdkProcessingMetadata,...e},this}setPropagationContext(e){return this._propagationContext=e,this}getPropagationContext(){return this._propagationContext}captureException(e,t){const n=t&&t.event_id?t.event_id:(0,i.DM)()
if(!this._client)return a.kg.warn("No client configured on scope - will not capture exception!"),n
const r=new Error("Sentry syntheticException")
return this._client.captureException(e,{originalException:e,syntheticException:r,...t,event_id:n},this),n}captureMessage(e,t,n){const r=n&&n.event_id?n.event_id:(0,i.DM)()
if(!this._client)return a.kg.warn("No client configured on scope - will not capture message!"),r
const s=new Error(e)
return this._client.captureMessage(e,t,{originalException:e,syntheticException:s,...n,event_id:r},this),r}captureEvent(e,t){const n=t&&t.event_id?t.event_id:(0,i.DM)()
return this._client?(this._client.captureEvent(e,{...t,event_id:n},this),n):(a.kg.warn("No client configured on scope - will not capture event!"),n)}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach((e=>{e(this)})),this._notifyingListeners=!1)}}function N(){return{traceId:(0,i.DM)(),spanId:(0,i.DM)().substring(16)}}const $="7.93.0",P=parseFloat($),B=100
class F{constructor(e,t,n,r=P){let s,o
this._version=r,t?s=t:(s=new L,s.setClient(e)),n?o=n:(o=new L,o.setClient(e)),this._stack=[{scope:s}],e&&this.bindClient(e),this._isolationScope=o}isOlderThan(e){return this._version<e}bindClient(e){const t=this.getStackTop()
t.client=e,t.scope.setClient(e),e&&e.setupIntegrations&&e.setupIntegrations()}pushScope(){const e=this.getScope().clone()
return this.getStack().push({client:this.getClient(),scope:e}),e}popScope(){return!(this.getStack().length<=1||!this.getStack().pop())}withScope(e){const t=this.pushScope()
let n
try{n=e(t)}catch(e){throw this.popScope(),e}return(0,d.J8)(n)?n.then((e=>(this.popScope(),e)),(e=>{throw this.popScope(),e})):(this.popScope(),n)}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getIsolationScope(){return this._isolationScope}getStack(){return this._stack}getStackTop(){return this._stack[this._stack.length-1]}captureException(e,t){const n=this._lastEventId=t&&t.event_id?t.event_id:(0,i.DM)(),r=new Error("Sentry syntheticException")
return this.getScope().captureException(e,{originalException:e,syntheticException:r,...t,event_id:n}),n}captureMessage(e,t,n){const r=this._lastEventId=n&&n.event_id?n.event_id:(0,i.DM)(),s=new Error(e)
return this.getScope().captureMessage(e,t,{originalException:e,syntheticException:s,...n,event_id:r}),r}captureEvent(e,t){const n=t&&t.event_id?t.event_id:(0,i.DM)()
return e.type||(this._lastEventId=n),this.getScope().captureEvent(e,{...t,event_id:n}),n}lastEventId(){return this._lastEventId}addBreadcrumb(e,t){const{scope:n,client:r}=this.getStackTop()
if(!r)return
const{beforeBreadcrumb:s=null,maxBreadcrumbs:o=B}=r.getOptions&&r.getOptions()||{}
if(o<=0)return
const i={timestamp:(0,g.yW)(),...e},c=s?(0,a.Cf)((()=>s(i,t))):i
null!==c&&(r.emit&&r.emit("beforeAddBreadcrumb",c,t),n.addBreadcrumb(c,o))}setUser(e){this.getScope().setUser(e)}setTags(e){this.getScope().setTags(e)}setExtras(e){this.getScope().setExtras(e)}setTag(e,t){this.getScope().setTag(e,t)}setExtra(e,t){this.getScope().setExtra(e,t)}setContext(e,t){this.getScope().setContext(e,t)}configureScope(e){const{scope:t,client:n}=this.getStackTop()
n&&e(t)}run(e){const t=j(this)
try{e(this)}finally{j(t)}}getIntegration(e){const t=this.getClient()
if(!t)return null
try{return t.getIntegration(e)}catch(t){return c&&a.kg.warn(`Cannot retrieve integration ${e.id} from the current Hub`),null}}startTransaction(e,t){const n=this._callExtensionMethod("startTransaction",e,t)
return c&&!n&&(this.getClient()?a.kg.warn("Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':\nSentry.addTracingExtensions();\nSentry.init({...});\n"):a.kg.warn("Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'")),n}traceHeaders(){return this._callExtensionMethod("traceHeaders")}captureSession(e=!1){if(e)return this.endSession()
this._sendSessionUpdate()}endSession(){const e=this.getStackTop().scope,t=e.getSession()
t&&v(t),this._sendSessionUpdate(),e.setSession()}startSession(e){const{scope:t,client:n}=this.getStackTop(),{release:r,environment:s=f}=n&&n.getOptions()||{},{userAgent:o}=l.GLOBAL_OBJ.navigator||{},i=y({release:r,environment:s,user:t.getUser(),...o&&{userAgent:o},...e}),a=t.getSession&&t.getSession()
return a&&"ok"===a.status&&_(a,{status:"exited"}),this.endSession(),t.setSession(i),i}shouldSendDefaultPii(){const e=this.getClient(),t=e&&e.getOptions()
return Boolean(t&&t.sendDefaultPii)}_sendSessionUpdate(){const{scope:e,client:t}=this.getStackTop(),n=e.getSession()
n&&t&&t.captureSession&&t.captureSession(n)}_withClient(e){const{scope:t,client:n}=this.getStackTop()
n&&e(n,t)}_callExtensionMethod(e,...t){const n=U().__SENTRY__
if(n&&n.extensions&&"function"==typeof n.extensions[e])return n.extensions[e].apply(this,t)
c&&a.kg.warn(`Extension method ${e} couldn't be found, doing nothing.`)}}function U(){return l.GLOBAL_OBJ.__SENTRY__=l.GLOBAL_OBJ.__SENTRY__||{extensions:{},hub:void 0},l.GLOBAL_OBJ}function j(e){const t=U(),n=q(t)
return W(t,e),n}function H(){const e=U()
if(e.__SENTRY__&&e.__SENTRY__.acs){const t=e.__SENTRY__.acs.getCurrentHub()
if(t)return t}return function(e=U()){return!!((t=e)&&t.__SENTRY__&&t.__SENTRY__.hub)&&!q(e).isOlderThan(P)||W(e,new F),q(e)
var t}(e)}function z(){return H().getIsolationScope()}function q(e){return(0,l.Y)("hub",(()=>new F),e)}function W(e,t){return!!e&&((e.__SENTRY__=e.__SENTRY__||{}).hub=t,!0)}var G=n(399),J=n(206)
function K(e,t,n,r,s,o){const{normalizeDepth:a=3,normalizeMaxBreadth:c=1e3}=e,u={...t,event_id:t.event_id||n.event_id||(0,i.DM)(),timestamp:t.timestamp||(0,g.yW)()},d=n.integrations||e.integrations.map((e=>e.name))
!function(e,t){const{environment:n,release:r,dist:s,maxValueLength:o=250}=t
"environment"in e||(e.environment="environment"in t?n:f),void 0===e.release&&void 0!==r&&(e.release=r),void 0===e.dist&&void 0!==s&&(e.dist=s),e.message&&(e.message=(0,G.$G)(e.message,o))
const i=e.exception&&e.exception.values&&e.exception.values[0]
i&&i.value&&(i.value=(0,G.$G)(i.value,o))
const a=e.request
a&&a.url&&(a.url=(0,G.$G)(a.url,o))}(u,e),function(e,t){t.length>0&&(e.sdk=e.sdk||{},e.sdk.integrations=[...e.sdk.integrations||[],...t])}(u,d),void 0===t.type&&function(e,t){const n=l.GLOBAL_OBJ._sentryDebugIds
if(!n)return
let r
const s=V.get(t)
s?r=s:(r=new Map,V.set(t,r))
const o=Object.keys(n).reduce(((e,s)=>{let o
const i=r.get(s)
i?o=i:(o=t(s),r.set(s,o))
for(let t=o.length-1;t>=0;t--){const r=o[t]
if(r.filename){e[r.filename]=n[s]
break}}return e}),{})
try{e.exception.values.forEach((e=>{e.stacktrace.frames.forEach((e=>{e.filename&&(e.debug_id=o[e.filename])}))}))}catch(e){}}(u,e.stackParser)
const h=function(e,t){if(!t)return e
const n=e?e.clone():new L
return n.update(t),n}(r,n.captureContext)
n.mechanism&&(0,i.EG)(u,n.mechanism)
const y=s&&s.getEventProcessors?s.getEventProcessors():[],_=(D||(D=new L),D).getScopeData()
o&&M(_,o.getScopeData()),h&&M(_,h.getScopeData())
const v=[...n.attachments||[],..._.attachments]
return v.length&&(n.attachments=v),O(u,_),m([...y,...p(),..._.eventProcessors],u,n).then((e=>(e&&function(e){const t={}
try{e.exception.values.forEach((e=>{e.stacktrace.frames.forEach((e=>{e.debug_id&&(e.abs_path?t[e.abs_path]=e.debug_id:e.filename&&(t[e.filename]=e.debug_id),delete e.debug_id)}))}))}catch(e){}if(0===Object.keys(t).length)return
e.debug_meta=e.debug_meta||{},e.debug_meta.images=e.debug_meta.images||[]
const n=e.debug_meta.images
Object.keys(t).forEach((e=>{n.push({type:"sourcemap",code_file:e,debug_id:t[e]})}))}(e),"number"==typeof a&&a>0?function(e,t,n){if(!e)return null
const r={...e,...e.breadcrumbs&&{breadcrumbs:e.breadcrumbs.map((e=>({...e,...e.data&&{data:(0,J.Fv)(e.data,t,n)}})))},...e.user&&{user:(0,J.Fv)(e.user,t,n)},...e.contexts&&{contexts:(0,J.Fv)(e.contexts,t,n)},...e.extra&&{extra:(0,J.Fv)(e.extra,t,n)}}
return e.contexts&&e.contexts.trace&&r.contexts&&(r.contexts.trace=e.contexts.trace,e.contexts.trace.data&&(r.contexts.trace.data=(0,J.Fv)(e.contexts.trace.data,t,n))),e.spans&&(r.spans=e.spans.map((e=>{const r=T(e).data
return r&&(e.data=(0,J.Fv)(r,t,n)),e}))),r}(e,a,c):e)))}const V=new WeakMap,Y=["user","level","extra","contexts","tags","fingerprint","requestSession","propagationContext"]
function X(e,t){return H().captureException(e,function(e){if(e)return function(e){return e instanceof L||"function"==typeof e}(e)||function(e){return Object.keys(e).some((e=>Y.includes(e)))}(e)?{captureContext:e}:e}(t))}function Z(e,t){const n="string"==typeof t?t:void 0,r="string"!=typeof t?{captureContext:t}:void 0
return H().captureMessage(e,n,r)}function Q(e,t){return H().captureEvent(e,t)}function ee(e){H().configureScope(e)}function te(e,t){H().addBreadcrumb(e,t)}function ne(e,t){H().setContext(e,t)}function re(e){H().setExtras(e)}function se(e,t){H().setExtra(e,t)}function oe(e){H().setTags(e)}function ie(e,t){H().setTag(e,t)}function ae(e){H().setUser(e)}function ce(...e){if(2===e.length){const[t,n]=e
if(!t)return H().withScope(n)
const r=H()
return r.withScope((()=>(r.getStackTop().scope=t,n(t))))}return H().withScope(e[0])}function le(e,t){return H().startTransaction({...e},t)}async function ue(e){const t=he()
return t?t.flush(e):(c&&a.kg.warn("Cannot flush events. No client defined."),Promise.resolve(!1))}async function de(e){const t=he()
return t?t.close(e):(c&&a.kg.warn("Cannot flush events and disable SDK. No client defined."),Promise.resolve(!1))}function pe(){return H().lastEventId()}function he(){return H().getClient()}function me(){return H().getScope()}function fe(e){const t=he(),n=z(),r=me(),{release:s,environment:o=f}=t&&t.getOptions()||{},{userAgent:i}=l.GLOBAL_OBJ.navigator||{},a=y({release:s,environment:o,user:n.getUser(),...i&&{userAgent:i},...e}),c=n.getSession()
return c&&"ok"===c.status&&_(c,{status:"exited"}),ge(),n.setSession(a),r.setSession(a),a}function ge(){const e=z(),t=me(),n=e.getSession()
n&&v(n),ye(),e.setSession(),t.setSession()}function ye(){const e=z(),t=me(),n=he(),r=t.getSession()||e.getSession()
r&&n&&n.captureSession&&n.captureSession(r)}function _e(e=!1){e?ge():ye()}const ve=[]
function be(e){const t=e.defaultIntegrations||[],n=e.integrations
let r
t.forEach((e=>{e.isDefaultInstance=!0})),r=Array.isArray(n)?[...t,...n]:"function"==typeof n?(0,i.lE)(n(t)):t
const s=function(e){const t={}
return e.forEach((e=>{const{name:n}=e,r=t[n]
r&&!r.isDefaultInstance&&e.isDefaultInstance||(t[n]=e)})),Object.keys(t).map((e=>t[e]))}(r),o=function(e,t){for(let n=0;n<e.length;n++)if(1==("Debug"===e[n].name))return n
return-1}(s)
if(-1!==o){const[e]=s.splice(o,1)
s.push(e)}return s}function Se(e,t,n){if(n[t.name])c&&a.kg.log(`Integration skipped because it was already installed: ${t.name}`)
else{if(n[t.name]=t,-1===ve.indexOf(t.name)&&(t.setupOnce(h,H),ve.push(t.name)),t.setup&&"function"==typeof t.setup&&t.setup(e),e.on&&"function"==typeof t.preprocessEvent){const n=t.preprocessEvent.bind(t)
e.on("preprocessEvent",((t,r)=>n(t,r,e)))}if(e.addEventProcessor&&"function"==typeof t.processEvent){const n=t.processEvent.bind(t),r=Object.assign(((t,r)=>n(t,r,e)),{id:t.name})
e.addEventProcessor(r)}c&&a.kg.log(`Integration installed: ${t.name}`)}}function ke(e){const t=he()
t&&t.addIntegration?t.addIntegration(e):c&&a.kg.warn(`Cannot add integration "${e.name}" because no SDK Client is available.`)}function we(e,t){return Object.assign((function(...e){return{setupOnce:()=>{},...t(...e)}}),{id:e})}let Ee
const xe="FunctionToString",Te=we(xe,(()=>({name:xe,setupOnce(){Ee=Function.prototype.toString
try{Function.prototype.toString=function(...e){const t=(0,o.HK)(this)||this
return Ee.apply(t,e)}}catch(e){}}}))),Ce=[/^Script error\.?$/,/^Javascript error: Script error\.? on line 0$/],Ie=[/^.*\/healthcheck$/,/^.*\/healthy$/,/^.*\/live$/,/^.*\/ready$/,/^.*\/heartbeat$/,/^.*\/health$/,/^.*\/healthz$/],Re="InboundFilters",Oe=we(Re,(e=>({name:Re,processEvent(t,n,r){const s=r.getOptions(),o=function(e={},t={}){return{allowUrls:[...e.allowUrls||[],...t.allowUrls||[]],denyUrls:[...e.denyUrls||[],...t.denyUrls||[]],ignoreErrors:[...e.ignoreErrors||[],...t.ignoreErrors||[],...e.disableErrorDefaults?[]:Ce],ignoreTransactions:[...e.ignoreTransactions||[],...t.ignoreTransactions||[],...e.disableTransactionDefaults?[]:Ie],ignoreInternal:void 0===e.ignoreInternal||e.ignoreInternal}}(e,s)
return function(e,t){return t.ignoreInternal&&function(e){try{return"SentryError"===e.exception.values[0].type}catch(e){}return!1}(e)?(c&&a.kg.warn(`Event dropped due to being internal Sentry Error.\nEvent: ${(0,i.jH)(e)}`),!0):function(e,t){return!(e.type||!t||!t.length)&&function(e){const t=[]
let n
e.message&&t.push(e.message)
try{n=e.exception.values[e.exception.values.length-1]}catch(e){}return n&&n.value&&(t.push(n.value),n.type&&t.push(`${n.type}: ${n.value}`)),c&&0===t.length&&a.kg.error(`Could not extract message for event ${(0,i.jH)(e)}`),t}(e).some((e=>(0,G.U0)(e,t)))}(e,t.ignoreErrors)?(c&&a.kg.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${(0,i.jH)(e)}`),!0):function(e,t){if("transaction"!==e.type||!t||!t.length)return!1
const n=e.transaction
return!!n&&(0,G.U0)(n,t)}(e,t.ignoreTransactions)?(c&&a.kg.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${(0,i.jH)(e)}`),!0):function(e,t){if(!t||!t.length)return!1
const n=Me(e)
return!!n&&(0,G.U0)(n,t)}(e,t.denyUrls)?(c&&a.kg.warn(`Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${(0,i.jH)(e)}.\nUrl: ${Me(e)}`),!0):!function(e,t){if(!t||!t.length)return!0
const n=Me(e)
return!n||(0,G.U0)(n,t)}(e,t.allowUrls)&&(c&&a.kg.warn(`Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${(0,i.jH)(e)}.\nUrl: ${Me(e)}`),!0)}(t,o)?null:t}})))
function Me(e){try{let t
try{t=e.exception.values[0].stacktrace.frames}catch(e){}return t?function(e=[]){for(let t=e.length-1;t>=0;t--){const n=e[t]
if(n&&"<anonymous>"!==n.filename&&"[native code]"!==n.filename)return n.filename||null}return null}(t):null}catch(t){return c&&a.kg.error(`Cannot extract url for event ${(0,i.jH)(e)}`),null}}var Ae=n(394),De=n(545)
const Le="LinkedErrors",Ne=we(Le,((e={})=>{const t=e.limit||5,n=e.key||"cause"
return{name:Le,preprocessEvent(e,r,s){const o=s.getOptions();(0,Ae.Z)(De.GJ,o.stackParser,o.maxValueLength,n,t,e,r)}}}))
var $e=n(269)
const Pe=new Map,Be=new Set
function Fe(e,t){return function(e){if(l.GLOBAL_OBJ._sentryModuleMetadata)for(const t of Object.keys(l.GLOBAL_OBJ._sentryModuleMetadata)){const n=l.GLOBAL_OBJ._sentryModuleMetadata[t]
if(Be.has(t))continue
Be.add(t)
const r=e(t)
for(const e of r.reverse())if(e.filename){Pe.set(e.filename,n)
break}}}(e),Pe.get(t)}const Ue="ModuleMetadata",je=we(Ue,(()=>({name:Ue,setup(e){"function"==typeof e.on&&e.on("beforeEnvelope",(e=>{(0,$e.gv)(e,((e,t)=>{if("event"===t){const t=Array.isArray(e)?e[1]:void 0
t&&(function(e){try{e.exception.values.forEach((e=>{if(e.stacktrace)for(const t of e.stacktrace.frames||[])delete t.module_metadata}))}catch(e){}}(t),e[1]=t)}}))}))},processEvent:(e,t,n)=>(function(e,t){try{t.exception.values.forEach((t=>{if(t.stacktrace)for(const n of t.stacktrace.frames||[]){if(!n.filename)continue
const t=Fe(e,n.filename)
t&&(n.module_metadata=t)}}))}catch(e){}}(n.getOptions().stackParser,e),e)})))
var He=n(84),ze=n(913)
const qe="7"
function We(e){const t=e.protocol?`${e.protocol}:`:"",n=e.port?`:${e.port}`:""
return`${t}//${e.host}${n}${e.path?`/${e.path}`:""}/api/`}function Ge(e,t={}){const n="string"==typeof t?t:t.tunnel,r="string"!=typeof t&&t._metadata?t._metadata.sdk:void 0
return n||`${function(e){return`${We(e)}${e.projectId}/envelope/`}(e)}?${function(e,t){return(0,o._j)({sentry_key:e.publicKey,sentry_version:qe,...t&&{sentry_client:`${t.name}/${t.version}`}})}(e,r)}`}function Je(e,t,n,r){const s=(0,$e.HY)(n),o=e.type&&"replay_event"!==e.type?e.type:"event"
!function(e,t){t&&(e.sdk=e.sdk||{},e.sdk.name=e.sdk.name||t.name,e.sdk.version=e.sdk.version||t.version,e.sdk.integrations=[...e.sdk.integrations||[],...t.integrations||[]],e.sdk.packages=[...e.sdk.packages||[],...t.packages||[]])}(e,n&&n.sdk)
const i=(0,$e.Cd)(e,s,r,t)
delete e.sdkProcessingMetadata
const a=[{type:o},e]
return(0,$e.Jd)(i,[a])}const Ke=/[^a-zA-Z0-9_/.-]+/g,Ve=/[^\w\d_:/@.{}[\]$-]+/g,Ye="Not capturing exception because it's already been captured."
class Xe{constructor(e){if(this._options=e,this._integrations={},this._integrationsInitialized=!1,this._numProcessing=0,this._outcomes={},this._hooks={},this._eventProcessors=[],e.dsn?this._dsn=(0,He.vK)(e.dsn):c&&a.kg.warn("No DSN provided, client will not send events."),this._dsn){const t=Ge(this._dsn,e)
this._transport=e.transport({recordDroppedEvent:this.recordDroppedEvent.bind(this),...e.transportOptions,url:t})}}captureException(e,t,n){if((0,i.YO)(e))return void(c&&a.kg.log(Ye))
let r=t&&t.event_id
return this._process(this.eventFromException(e,t).then((e=>this._captureEvent(e,t,n))).then((e=>{r=e}))),r}captureMessage(e,t,n,r){let s=n&&n.event_id
const o=(0,d.Le)(e)?e:String(e),i=(0,d.pt)(e)?this.eventFromMessage(o,t,n):this.eventFromException(e,n)
return this._process(i.then((e=>this._captureEvent(e,n,r))).then((e=>{s=e}))),s}captureEvent(e,t,n){if(t&&t.originalException&&(0,i.YO)(t.originalException))return void(c&&a.kg.log(Ye))
let r=t&&t.event_id
return this._process(this._captureEvent(e,t,n).then((e=>{r=e}))),r}captureSession(e){"string"!=typeof e.release?c&&a.kg.warn("Discarded session because of missing or non-string release"):(this.sendSession(e),_(e,{init:!1}))}getDsn(){return this._dsn}getOptions(){return this._options}getSdkMetadata(){return this._options._metadata}getTransport(){return this._transport}flush(e){const t=this._transport
return t?(this.metricsAggregator&&this.metricsAggregator.flush(),this._isClientDoneProcessing(e).then((n=>t.flush(e).then((e=>n&&e))))):(0,u.WD)(!0)}close(e){return this.flush(e).then((e=>(this.getOptions().enabled=!1,this.metricsAggregator&&this.metricsAggregator.close(),e)))}getEventProcessors(){return this._eventProcessors}addEventProcessor(e){this._eventProcessors.push(e)}setupIntegrations(e){(e&&!this._integrationsInitialized||this._isEnabled()&&!this._integrationsInitialized)&&(this._integrations=function(e,t){const n={}
return t.forEach((t=>{t&&Se(e,t,n)})),n}(this,this._options.integrations),this._integrationsInitialized=!0)}getIntegrationById(e){return this._integrations[e]}getIntegration(e){try{return this._integrations[e.id]||null}catch(t){return c&&a.kg.warn(`Cannot retrieve integration ${e.id} from the current Client`),null}}addIntegration(e){Se(this,e,this._integrations)}sendEvent(e,t={}){this.emit("beforeSendEvent",e,t)
let n=Je(e,this._dsn,this._options._metadata,this._options.tunnel)
for(const s of t.attachments||[])n=(0,$e.BO)(n,(0,$e.zQ)(s,this._options.transportOptions&&this._options.transportOptions.textEncoder))
const r=this._sendEnvelope(n)
r&&r.then((t=>this.emit("afterSendEvent",e,t)),null)}sendSession(e){const t=function(e,t,n,r){const s=(0,$e.HY)(n),o={sent_at:(new Date).toISOString(),...s&&{sdk:s},...!!r&&t&&{dsn:(0,He.RA)(t)}},i="aggregates"in e?[{type:"sessions"},e]:[{type:"session"},e.toJSON()]
return(0,$e.Jd)(o,[i])}(e,this._dsn,this._options._metadata,this._options.tunnel)
this._sendEnvelope(t)}recordDroppedEvent(e,t,n){if(this._options.sendClientReports){const n=`${e}:${t}`
c&&a.kg.log(`Adding outcome: "${n}"`),this._outcomes[n]=this._outcomes[n]+1||1}}captureAggregateMetrics(e){c&&a.kg.log(`Flushing aggregated metrics, number of metrics: ${e.length}`)
const t=function(e,t,n,r){const s={sent_at:(new Date).toISOString()}
n&&n.sdk&&(s.sdk={name:n.sdk.name,version:n.sdk.version}),r&&t&&(s.dsn=(0,He.RA)(t))
const o=function(e){const t=function(e){let t=""
for(const n of e){const e=Object.entries(n.tags),r=e.length>0?`|#${e.map((([e,t])=>`${e}:${t}`)).join(",")}`:""
t+=`${n.name}@${n.unit}:${n.metric}|${n.metricType}${r}|T${n.timestamp}\n`}return t}(e)
return[{type:"statsd",length:t.length},t]}(e)
return(0,$e.Jd)(s,[o])}(e,this._dsn,this._options._metadata,this._options.tunnel)
this._sendEnvelope(t)}on(e,t){this._hooks[e]||(this._hooks[e]=[]),this._hooks[e].push(t)}emit(e,...t){this._hooks[e]&&this._hooks[e].forEach((e=>e(...t)))}_updateSessionFromEvent(e,t){let n=!1,r=!1
const s=t.exception&&t.exception.values
if(s){r=!0
for(const e of s){const t=e.mechanism
if(t&&!1===t.handled){n=!0
break}}}const o="ok"===e.status;(o&&0===e.errors||o&&n)&&(_(e,{...n&&{status:"crashed"},errors:e.errors||Number(r||n)}),this.captureSession(e))}_isClientDoneProcessing(e){return new u.cW((t=>{let n=0
const r=setInterval((()=>{0==this._numProcessing?(clearInterval(r),t(!0)):(n+=1,e&&n>=e&&(clearInterval(r),t(!1)))}),1)}))}_isEnabled(){return!1!==this.getOptions().enabled&&void 0!==this._transport}_prepareEvent(e,t,n,r=z()){const s=this.getOptions(),o=Object.keys(this._integrations)
return!t.integrations&&o.length>0&&(t.integrations=o),this.emit("preprocessEvent",e,t),K(s,e,t,n,this,r).then((e=>{if(null===e)return e
const{propagationContext:t}=e.sdkProcessingMetadata||{}
if((!e.contexts||!e.contexts.trace)&&t){const{traceId:r,spanId:s,parentSpanId:o,dsc:i}=t
e.contexts={trace:{trace_id:r,span_id:s,parent_span_id:o},...e.contexts}
const a=i||I(r,this,n)
e.sdkProcessingMetadata={dynamicSamplingContext:a,...e.sdkProcessingMetadata}}return e}))}_captureEvent(e,t={},n){return this._processEvent(e,t,n).then((e=>e.event_id),(e=>{if(c){const t=e
"log"===t.logLevel?a.kg.log(t.message):a.kg.warn(t)}}))}_processEvent(e,t,n){const r=this.getOptions(),{sampleRate:s}=r,o=Qe(e),i=Ze(e),a=e.type||"error",c=`before send for type \`${a}\``
if(i&&"number"==typeof s&&Math.random()>s)return this.recordDroppedEvent("sample_rate","error",e),(0,u.$2)(new ze.b(`Discarding event because it's not included in the random sample (sampling rate = ${s})`,"log"))
const l="replay_event"===a?"replay":a
return this._prepareEvent(e,t,n).then((n=>{if(null===n)throw this.recordDroppedEvent("event_processor",l,e),new ze.b("An event processor returned `null`, will not send event.","log")
if(t.data&&!0===t.data.__sentry__)return n
const s=function(e,t,n){const{beforeSend:r,beforeSendTransaction:s}=e
return Ze(t)&&r?r(t,n):Qe(t)&&s?s(t,n):t}(r,n,t)
return function(e,t){const n=`${t} must return \`null\` or a valid event.`
if((0,d.J8)(e))return e.then((e=>{if(!(0,d.PO)(e)&&null!==e)throw new ze.b(n)
return e}),(e=>{throw new ze.b(`${t} rejected with ${e}`)}))
if(!(0,d.PO)(e)&&null!==e)throw new ze.b(n)
return e}(s,c)})).then((r=>{if(null===r)throw this.recordDroppedEvent("before_send",l,e),new ze.b(`${c} returned \`null\`, will not send event.`,"log")
const s=n&&n.getSession()
!o&&s&&this._updateSessionFromEvent(s,r)
const i=r.transaction_info
if(o&&i&&r.transaction!==e.transaction){const e="custom"
r.transaction_info={...i,source:e}}return this.sendEvent(r,t),r})).then(null,(e=>{if(e instanceof ze.b)throw e
throw this.captureException(e,{data:{__sentry__:!0},originalException:e}),new ze.b(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${e}`)}))}_process(e){this._numProcessing++,e.then((e=>(this._numProcessing--,e)),(e=>(this._numProcessing--,e)))}_sendEnvelope(e){if(this.emit("beforeEnvelope",e),this._isEnabled()&&this._transport)return this._transport.send(e).then(null,(e=>{c&&a.kg.error("Error while sending event:",e)}))
c&&a.kg.error("Transport disabled")}_clearOutcomes(){const e=this._outcomes
return this._outcomes={},Object.keys(e).map((t=>{const[n,r]=t.split(":")
return{reason:n,category:r,quantity:e[t]}}))}}function Ze(e){return void 0===e.type}function Qe(e){return"transaction"===e.type}function et(e){const t=he()
t&&t.addEventProcessor&&t.addEventProcessor(e)}var tt=n(309),nt=n(222)
function rt(e){return(e||H()).getScope().getTransaction()}const st=b.qG
let ot=!1
function it(){const e=rt()
if(e){const t="internal_error"
c&&a.kg.log(`[Tracing] Transaction: ${t} -> Global error occured`),e.setStatus(t)}}it.tag="sentry_tracingErrorCallback"
class at{constructor(e=1e3){this._maxlen=e,this.spans=[]}add(e){this.spans.length>this._maxlen?e.spanRecorder=void 0:this.spans.push(e)}}class ct{constructor(e={}){this._traceId=e.traceId||(0,i.DM)(),this._spanId=e.spanId||(0,i.DM)().substring(16),this.startTimestamp=e.startTimestamp||(0,g.ph)(),this.tags=e.tags?{...e.tags}:{},this.data=e.data?{...e.data}:{},this._attributes=e.attributes?{...e.attributes}:{},this.instrumenter=e.instrumenter||"sentry",this.origin=e.origin||"manual",this._name=e.name||e.description,e.parentSpanId&&(this.parentSpanId=e.parentSpanId),"sampled"in e&&(this._sampled=e.sampled),e.op&&(this.op=e.op),e.status&&(this.status=e.status),e.endTimestamp&&(this.endTimestamp=e.endTimestamp)}get name(){return this._name||""}set name(e){this.updateName(e)}get description(){return this._name}set description(e){this._name=e}get traceId(){return this._traceId}set traceId(e){this._traceId=e}get spanId(){return this._spanId}set spanId(e){this._spanId=e}get sampled(){return this._sampled}set sampled(e){this._sampled=e}get attributes(){return this._attributes}set attributes(e){this._attributes=e}spanContext(){const{_spanId:e,_traceId:t,_sampled:n}=this
return{spanId:e,traceId:t,traceFlags:n?S:0}}startChild(e){const t=new ct({...e,parentSpanId:this._spanId,sampled:this._sampled,traceId:this._traceId})
if(t.spanRecorder=this.spanRecorder,t.spanRecorder&&t.spanRecorder.add(t),t.transaction=this.transaction,c&&t.transaction){const n=`[Tracing] Starting '${e&&e.op||"< unknown op >"}' span on transaction '${T(t).description||"< unknown name >"}' (${t.transaction.spanContext().spanId}).`
a.kg.log(n),this._logMessage=n}return t}setTag(e,t){return this.tags={...this.tags,[e]:t},this}setData(e,t){return this.data={...this.data,[e]:t},this}setAttribute(e,t){void 0===t?delete this._attributes[e]:this._attributes[e]=t}setAttributes(e){Object.keys(e).forEach((t=>this.setAttribute(t,e[t])))}setStatus(e){return this.status=e,this}setHttpStatus(e){this.setTag("http.status_code",String(e)),this.setData("http.response.status_code",e)
const t=lt(e)
return"unknown_error"!==t&&this.setStatus(t),this}setName(e){this.updateName(e)}updateName(e){return this._name=e,this}isSuccess(){return"ok"===this.status}finish(e){return this.end(e)}end(e){if(c&&this.transaction&&this.transaction.spanContext().spanId!==this._spanId){const e=this._logMessage
e&&a.kg.log(e.replace("Starting","Finishing"))}this.endTimestamp=E(e)}toTraceparent(){return w(this)}toContext(){return(0,o.Jr)({data:this._getData(),description:this._name,endTimestamp:this.endTimestamp,op:this.op,parentSpanId:this.parentSpanId,sampled:this._sampled,spanId:this._spanId,startTimestamp:this.startTimestamp,status:this.status,tags:this.tags,traceId:this._traceId})}updateWithContext(e){return this.data=e.data||{},this._name=e.name||e.description,this.endTimestamp=e.endTimestamp,this.op=e.op,this.parentSpanId=e.parentSpanId,this._sampled=e.sampled,this._spanId=e.spanId||this._spanId,this.startTimestamp=e.startTimestamp||this.startTimestamp,this.status=e.status,this.tags=e.tags||{},this._traceId=e.traceId||this._traceId,this}getTraceContext(){return k(this)}getSpanJSON(){return(0,o.Jr)({data:this._getData(),description:this._name,op:this.op,parent_span_id:this.parentSpanId,span_id:this._spanId,start_timestamp:this.startTimestamp,status:this.status,tags:Object.keys(this.tags).length>0?this.tags:void 0,timestamp:this.endTimestamp,trace_id:this._traceId,origin:this.origin})}isRecording(){return!this.endTimestamp&&!!this._sampled}toJSON(){return this.getSpanJSON()}_getData(){const{data:e,_attributes:t}=this,n=Object.keys(e).length>0,r=Object.keys(t).length>0
if(n||r)return n&&r?{...e,...t}:n?e:t}}function lt(e){if(e<400&&e>=100)return"ok"
if(e>=400&&e<500)switch(e){case 401:return"unauthenticated"
case 403:return"permission_denied"
case 404:return"not_found"
case 409:return"already_exists"
case 413:return"failed_precondition"
case 429:return"resource_exhausted"
default:return"invalid_argument"}if(e>=500&&e<600)switch(e){case 501:return"unimplemented"
case 503:return"unavailable"
case 504:return"deadline_exceeded"
default:return"internal_error"}return"unknown_error"}const ut="sentry.source",dt="sentry.sample_rate"
class pt extends ct{constructor(e,t){super(e),this._measurements={},this._contexts={},this._hub=t||H(),this._name=e.name||"",this._metadata={...e.metadata},this._trimEnd=e.trimEnd,this.transaction=this
const n=this._metadata.dynamicSamplingContext
n&&(this._frozenDynamicSamplingContext={...n})}get name(){return this._name}set name(e){this.setName(e)}get metadata(){return{source:"custom",spanMetadata:{},...this._metadata,...this._attributes[ut]&&{source:this._attributes[ut]},...this._attributes[dt]&&{sampleRate:this._attributes[dt]}}}set metadata(e){this._metadata=e}setName(e,t="custom"){this._name=e,this.setAttribute(ut,t)}updateName(e){return this._name=e,this}initSpanRecorder(e=1e3){this.spanRecorder||(this.spanRecorder=new at(e)),this.spanRecorder.add(this)}setContext(e,t){null===t?delete this._contexts[e]:this._contexts[e]=t}setMeasurement(e,t,n=""){this._measurements[e]={value:t,unit:n}}setMetadata(e){this._metadata={...this._metadata,...e}}end(e){const t=E(e),n=this._finishTransaction(t)
if(n)return this._hub.captureEvent(n)}toContext(){const e=super.toContext()
return(0,o.Jr)({...e,name:this._name,trimEnd:this._trimEnd})}updateWithContext(e){return super.updateWithContext(e),this._name=e.name||"",this._trimEnd=e.trimEnd,this}getDynamicSamplingContext(){return R(this)}setHub(e){this._hub=e}_finishTransaction(e){if(void 0!==this.endTimestamp)return
this._name||(c&&a.kg.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),this._name="<unlabeled transaction>"),super.end(e)
const t=this._hub.getClient()
if(t&&t.emit&&t.emit("finishTransaction",this),!0!==this._sampled)return c&&a.kg.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."),void(t&&t.recordDroppedEvent("sample_rate","transaction"))
const n=this.spanRecorder?this.spanRecorder.spans.filter((e=>e!==this&&e.endTimestamp)):[]
this._trimEnd&&n.length>0&&(this.endTimestamp=n.reduce(((e,t)=>e.endTimestamp&&t.endTimestamp?e.endTimestamp>t.endTimestamp?e:t:e)).endTimestamp)
const{metadata:r}=this,{source:s}=r,o={contexts:{...this._contexts,trace:k(this)},spans:n,start_timestamp:this.startTimestamp,tags:this.tags,timestamp:this.endTimestamp,transaction:this._name,type:"transaction",sdkProcessingMetadata:{...r,dynamicSamplingContext:R(this)},...s&&{transaction_info:{source:s}}}
return Object.keys(this._measurements).length>0&&(c&&a.kg.log("[Measurements] Adding measurements to transaction",JSON.stringify(this._measurements,void 0,2)),o.measurements=this._measurements),c&&a.kg.log(`[Tracing] Finishing ${this.op} transaction: ${this._name}.`),o}}const ht={idleTimeout:1e3,finalTimeout:3e4,heartbeatInterval:5e3},mt=["heartbeatFailed","idleTimeout","documentHidden","finalTimeout","externalFinish","cancelled"]
class ft extends at{constructor(e,t,n,r){super(r),this._pushActivity=e,this._popActivity=t,this.transactionSpanId=n}add(e){if(e.spanContext().spanId!==this.transactionSpanId){const t=e.end
e.end=(...n)=>(this._popActivity(e.spanContext().spanId),t.apply(e,n)),void 0===e.endTimestamp&&this._pushActivity(e.spanContext().spanId)}super.add(e)}}class gt extends pt{constructor(e,t,n=ht.idleTimeout,r=ht.finalTimeout,s=ht.heartbeatInterval,o=!1){super(e,t),this._idleHub=t,this._idleTimeout=n,this._finalTimeout=r,this._heartbeatInterval=s,this._onScope=o,this.activities={},this._heartbeatCounter=0,this._finished=!1,this._idleTimeoutCanceledPermanently=!1,this._beforeFinishCallbacks=[],this._finishReason=mt[4],o&&(c&&a.kg.log(`Setting idle transaction on scope. Span ID: ${this.spanContext().spanId}`),t.getScope().setSpan(this)),this._restartIdleTimeout(),setTimeout((()=>{this._finished||(this.setStatus("deadline_exceeded"),this._finishReason=mt[3],this.end())}),this._finalTimeout)}end(e){const t=E(e)
if(this._finished=!0,this.activities={},"ui.action.click"===this.op&&this.setAttribute("finishReason",this._finishReason),this.spanRecorder){c&&a.kg.log("[Tracing] finishing IdleTransaction",new Date(1e3*t).toISOString(),this.op)
for(const e of this._beforeFinishCallbacks)e(this,t)
this.spanRecorder.spans=this.spanRecorder.spans.filter((e=>{if(e.spanContext().spanId===this.spanContext().spanId)return!0
e.endTimestamp||(e.endTimestamp=t,e.setStatus("cancelled"),c&&a.kg.log("[Tracing] cancelling span since transaction ended early",JSON.stringify(e,void 0,2)))
const n=e.startTimestamp<t,r=(this._finalTimeout+this._idleTimeout)/1e3,s=e.endTimestamp-this.startTimestamp<r
if(c){const t=JSON.stringify(e,void 0,2)
n?s||a.kg.log("[Tracing] discarding Span since it finished after Transaction final timeout",t):a.kg.log("[Tracing] discarding Span since it happened after Transaction was finished",t)}return n&&s})),c&&a.kg.log("[Tracing] flushing IdleTransaction")}else c&&a.kg.log("[Tracing] No active IdleTransaction")
if(this._onScope){const e=this._idleHub.getScope()
e.getTransaction()===this&&e.setSpan(void 0)}return super.end(e)}registerBeforeFinishCallback(e){this._beforeFinishCallbacks.push(e)}initSpanRecorder(e){if(!this.spanRecorder){const t=e=>{this._finished||this._pushActivity(e)},n=e=>{this._finished||this._popActivity(e)}
this.spanRecorder=new ft(t,n,this.spanContext().spanId,e),c&&a.kg.log("Starting heartbeat"),this._pingHeartbeat()}this.spanRecorder.add(this)}cancelIdleTimeout(e,{restartOnChildSpanChange:t}={restartOnChildSpanChange:!0}){this._idleTimeoutCanceledPermanently=!1===t,this._idleTimeoutID&&(clearTimeout(this._idleTimeoutID),this._idleTimeoutID=void 0,0===Object.keys(this.activities).length&&this._idleTimeoutCanceledPermanently&&(this._finishReason=mt[5],this.end(e)))}setFinishReason(e){this._finishReason=e}_restartIdleTimeout(e){this.cancelIdleTimeout(),this._idleTimeoutID=setTimeout((()=>{this._finished||0!==Object.keys(this.activities).length||(this._finishReason=mt[1],this.end(e))}),this._idleTimeout)}_pushActivity(e){this.cancelIdleTimeout(void 0,{restartOnChildSpanChange:!this._idleTimeoutCanceledPermanently}),c&&a.kg.log(`[Tracing] pushActivity: ${e}`),this.activities[e]=!0,c&&a.kg.log("[Tracing] new activities count",Object.keys(this.activities).length)}_popActivity(e){if(this.activities[e]&&(c&&a.kg.log(`[Tracing] popActivity ${e}`),delete this.activities[e],c&&a.kg.log("[Tracing] new activities count",Object.keys(this.activities).length)),0===Object.keys(this.activities).length){const e=(0,g.ph)()
this._idleTimeoutCanceledPermanently?(this._finishReason=mt[5],this.end(e)):this._restartIdleTimeout(e+this._idleTimeout/1e3)}}_beat(){if(this._finished)return
const e=Object.keys(this.activities).join("")
e===this._prevHeartbeatString?this._heartbeatCounter++:this._heartbeatCounter=1,this._prevHeartbeatString=e,this._heartbeatCounter>=3?(c&&a.kg.log("[Tracing] Transaction finished because of no change for 3 heart beats"),this.setStatus("deadline_exceeded"),this._finishReason=mt[0],this.end()):this._pingHeartbeat()}_pingHeartbeat(){c&&a.kg.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`),setTimeout((()=>{this._beat()}),this._heartbeatInterval)}}function yt(e){if("boolean"==typeof __SENTRY_TRACING__&&!__SENTRY_TRACING__)return!1
const t=he(),n=e||t&&t.getOptions()
return!!n&&(n.enableTracing||"tracesSampleRate"in n||"tracesSampler"in n)}function _t(e,t,n){if(!yt(t))return e.sampled=!1,e
if(void 0!==e.sampled)return e.setAttribute(dt,Number(e.sampled)),e
let r
return"function"==typeof t.tracesSampler?(r=t.tracesSampler(n),e.setAttribute(dt,Number(r))):void 0!==n.parentSampled?r=n.parentSampled:void 0!==t.tracesSampleRate?(r=t.tracesSampleRate,e.setAttribute(dt,Number(r))):(r=1,e.setAttribute(dt,r)),s=r,((0,d.i2)(s)||"number"!=typeof s&&"boolean"!=typeof s?(c&&a.kg.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(s)} of type ${JSON.stringify(typeof s)}.`),0):!(s<0||s>1)||(c&&a.kg.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${s}.`),0))?r?(e.sampled=Math.random()<r,e.sampled?(c&&a.kg.log(`[Tracing] starting ${e.op} transaction - ${T(e).description}`),e):(c&&a.kg.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(r)})`),e)):(c&&a.kg.log("[Tracing] Discarding transaction because "+("function"==typeof t.tracesSampler?"tracesSampler returned 0 or false":"a negative sampling decision was inherited or tracesSampleRate is set to 0")),e.sampled=!1,e):(c&&a.kg.warn("[Tracing] Discarding transaction because of invalid sample rate."),e.sampled=!1,e)
var s}function vt(){const e=this.getScope().getSpan()
return e?{"sentry-trace":w(e)}:{}}function bt(e,t){const n=this.getClient(),r=n&&n.getOptions()||{},s=r.instrumenter||"sentry",o=e.instrumenter||"sentry"
s!==o&&(c&&a.kg.error(`A transaction was started with instrumenter=\`${o}\`, but the SDK is configured with the \`${s}\` instrumenter.\nThe transaction will not be sampled. Please use the ${s} instrumentation to start transactions.`),e.sampled=!1)
let i=new pt(e,this)
return i=_t(i,r,{parentSampled:e.parentSampled,transactionContext:e,...t}),i.isRecording()&&i.initSpanRecorder(r._experiments&&r._experiments.maxSpans),n&&n.emit&&n.emit("startTransaction",i),i}function St(e,t,n,r,s,o,i){const a=e.getClient(),c=a&&a.getOptions()||{}
let l=new gt(t,e,n,r,i,s)
return l=_t(l,c,{parentSampled:t.parentSampled,transactionContext:t,...o}),l.isRecording()&&l.initSpanRecorder(c._experiments&&c._experiments.maxSpans),a&&a.emit&&a.emit("startTransaction",l),l}function kt(){const e=U()
e.__SENTRY__&&(e.__SENTRY__.extensions=e.__SENTRY__.extensions||{},e.__SENTRY__.extensions.startTransaction||(e.__SENTRY__.extensions.startTransaction=bt),e.__SENTRY__.extensions.traceHeaders||(e.__SENTRY__.extensions.traceHeaders=vt),ot||(ot=!0,(0,tt.V)(it),(0,nt.h)(it)))}function wt(e,t,n=(()=>{})){let r
try{r=e()}catch(e){throw t(e),n(),e}return function(e,t,n){return(0,d.J8)(e)?e.then((e=>(n(),e)),(e=>{throw t(e),n(),e})):(n(),e)}(r,t,n)}function Et(e,t,n=(()=>{}),r=(()=>{})){const s=H(),o=me(),i=o.getSpan(),a=Mt(e),c=Ot(s,i,a)
return o.setSpan(c),wt((()=>t(c)),(e=>{c&&c.setStatus("internal_error"),n(e,c)}),(()=>{c&&c.end(),o.setSpan(i),r()}))}function xt(e,t){const n=Mt(e)
return ce(e.scope,(e=>{const r=Ot(H(),e.getSpan(),n)
return e.setSpan(r),wt((()=>t(r)),(()=>{!r||r.status&&"ok"!==r.status||r.setStatus("internal_error")}),(()=>r&&r.end()))}))}function Tt(e,t){const n=Mt(e)
return ce(e.scope,(e=>{const r=Ot(H(),e.getSpan(),n)
function s(){r&&r.end()}return e.setSpan(r),wt((()=>t(r,s)),(()=>{!r||r.endTimestamp||r.status&&"ok"!==r.status||r.setStatus("internal_error")}))}))}function Ct(e){if(!yt())return
const t=Mt(e),n=H(),r=e.scope?e.scope.getSpan():It()
return r?r.startChild(t):n.startTransaction(t)}function It(){return me().getSpan()}function Rt({sentryTrace:e,baggage:t},n){const r=me(),{traceparentData:s,dynamicSamplingContext:i,propagationContext:l}=(0,b.KA)(e,t)
r.setPropagationContext(l),c&&s&&a.kg.log(`[Tracing] Continuing trace ${s.traceId}.`)
const u={...s,metadata:(0,o.Jr)({dynamicSamplingContext:s&&!i?{}:i})}
return n?n(u):u}function Ot(e,t,n){if(yt())return t?t.startChild(n):e.startTransaction(n)}function Mt(e){if(e.startTime){const t={...e}
return t.startTimestamp=E(e.startTime),delete t.startTime,t}return e}var At=n(473),Dt=n(732)
const Lt=30
function Nt(e,t,n=(0,At.x)(e.bufferSize||Lt)){let r={}
function s(s){const o=[]
if((0,$e.gv)(s,((t,n)=>{const s=(0,$e.mL)(n)
if((0,Dt.Q)(r,s)){const r=$t(t,n)
e.recordDroppedEvent("ratelimit_backoff",s,r)}else o.push(t)})),0===o.length)return(0,u.WD)()
const i=(0,$e.Jd)(s[0],o),l=t=>{(0,$e.gv)(i,((n,r)=>{const s=$t(n,r)
e.recordDroppedEvent(t,(0,$e.mL)(r),s)}))}
return n.add((()=>t({body:(0,$e.V$)(i,e.textEncoder)}).then((e=>(void 0!==e.statusCode&&(e.statusCode<200||e.statusCode>=300)&&c&&a.kg.warn(`Sentry responded with status code ${e.statusCode} to sent event.`),r=(0,Dt.WG)(r,e),e)),(e=>{throw l("network_error"),e})))).then((e=>e),(e=>{if(e instanceof ze.b)return c&&a.kg.error("Skipped sending event because buffer is full."),l("queue_overflow"),(0,u.WD)()
throw e}))}return s.__sentry__baseTransport__=!0,{send:s,flush:e=>n.drain(e)}}function $t(e,t){if("event"===t||"transaction"===t)return Array.isArray(e)?e[1]:void 0}function Pt(e,t){let n
return(0,$e.gv)(e,((e,r)=>(t.includes(r)&&(n=Array.isArray(e)?e[1]:void 0),!!n))),n}function Bt(e,t){return n=>{const r=e(n),s={}
function o(t,r){const o=r?`${t}:${r}`:t
if(!s[o]){const i=(0,He.U4)(t)
if(!i)return
const a=Ge(i)
s[o]=r?function(e,t){return n=>{const r=e(n)
return{send:async e=>{const n=Pt(e,["event","transaction","profile","replay_event"])
return n&&(n.release=t),r.send(e)},flush:e=>r.flush(e)}}}(e,r)({...n,url:a}):e({...n,url:a})}return s[o]}return{send:async function(e){const n=t({envelope:e,getEvent:function(t){const n=t&&t.length?t:["event"]
return Pt(e,n)}}).map((e=>"string"==typeof e?o(e,void 0):o(e.dsn,e.release))).filter((e=>!!e))
return 0===n.length&&n.push(r),(await Promise.all(n.map((t=>t.send(e)))))[0]},flush:async function(e){const t=[...Object.keys(s).map((e=>s[e])),r]
return(await Promise.all(t.map((t=>t.flush(e))))).every((e=>e))}}}}const Ft={c:class{constructor(e){this._value=e}get weight(){return 1}add(e){this._value+=e}toString(){return`${this._value}`}},g:class{constructor(e){this._last=e,this._min=e,this._max=e,this._sum=e,this._count=1}get weight(){return 5}add(e){this._last=e,e<this._min&&(this._min=e),e>this._max&&(this._max=e),this._sum+=e,this._count++}toString(){return`${this._last}:${this._min}:${this._max}:${this._sum}:${this._count}`}},d:class{constructor(e){this._value=[e]}get weight(){return this._value.length}add(e){this._value.push(e)}toString(){return this._value.join(":")}},s:class{constructor(e){this.first=e,this._value=new Set([e])}get weight(){return this._value.size}add(e){this._value.add(e)}toString(){return Array.from(this._value).map((e=>"string"==typeof e?function(e){let t=0
for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t&=t
return t>>>0}(e):e)).join(":")}}}
class Ut{constructor(e){this._client=e,this._buckets=new Map,this._interval=setInterval((()=>this.flush()),5e3)}add(e,t,n,r="none",s={},i=(0,g.ph)()){const a=Math.floor(i),c=t.replace(Ke,"_"),l=function(e){const t={}
for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n.replace(Ke,"_")]=String(e[n]).replace(Ve,"_"))
return t}(s),u=function(e,t,n,r){return`${e}${t}${n}${Object.entries((0,o.Jr)(r)).sort(((e,t)=>e[0].localeCompare(t[0])))}`}(e,c,r,l),d=this._buckets.get(u)
d?(d.metric.add(n),d.timestamp<a&&(d.timestamp=a)):this._buckets.set(u,{metric:new Ft[e](n),timestamp:a,metricType:e,name:c,unit:r,tags:l})}flush(){if(0!==this._buckets.size){if(this._client.captureAggregateMetrics){const e=Array.from(this._buckets).map((([,e])=>e))
this._client.captureAggregateMetrics(e)}this._buckets.clear()}}close(){clearInterval(this._interval),this.flush()}}const jt="MetricsAggregator"
function Ht(e,t,n,r={}){const s=he(),o=me()
if(s){if(!s.metricsAggregator)return void(c&&a.kg.warn("No metrics aggregator enabled. Please add the MetricsAggregator integration to use metrics APIs"))
const{unit:i,tags:l,timestamp:u}=r,{release:d,environment:p}=s.getOptions(),h=o.getTransaction(),m={}
d&&(m.release=d),p&&(m.environment=p),h&&(m.transaction=T(h).description||""),c&&a.kg.log(`Adding value of ${n} to ${e} metric ${t}`),s.metricsAggregator.add(e,t,n,i,{...m,...l},u)}}const zt={increment:function(e,t=1,n){Ht("c",e,t,n)},distribution:function(e,t,n){Ht("d",e,t,n)},set:function(e,t,n){Ht("s",e,t,n)},gauge:function(e,t,n){Ht("g",e,t,n)},MetricsAggregator:we(jt,(()=>({name:jt,setup(e){e.metricsAggregator=new Ut(e)}})))}
function qt(e,t,n){const r=rt()
r&&r.setMeasurement(e,t,n)}const Wt=l.GLOBAL_OBJ
let Gt=0
function Jt(){return Gt>0}function Kt(e,t={},n){if("function"!=typeof e)return e
try{const t=e.__sentry_wrapped__
if(t)return t
if((0,o.HK)(e))return e}catch(t){return e}const r=function(){const r=Array.prototype.slice.call(arguments)
try{n&&"function"==typeof n&&n.apply(this,arguments)
const s=r.map((e=>Kt(e,t)))
return e.apply(this,s)}catch(e){throw Gt++,setTimeout((()=>{Gt--})),ce((s=>{s.addEventProcessor((e=>(t.mechanism&&((0,i.Db)(e,void 0,void 0),(0,i.EG)(e,t.mechanism)),e.extra={...e.extra,arguments:r},e))),X(e)})),e}}
try{for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t])}catch(e){}(0,o.$Q)(r,e),(0,o.xp)(e,"__sentry_wrapped__",r)
try{Object.getOwnPropertyDescriptor(r,"name").configurable&&Object.defineProperty(r,"name",{get:()=>e.name})}catch(e){}return r}var Vt=n(326),Yt=n(977)
const Xt="undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__
function Zt(e,t){const n=en(e,t),r={type:t&&t.name,value:nn(t)}
return n.length&&(r.stacktrace={frames:n}),void 0===r.type&&""===r.value&&(r.value="Unrecoverable error caught"),r}function Qt(e,t){return{exception:{values:[Zt(e,t)]}}}function en(e,t){const n=t.stacktrace||t.stack||"",r=function(e){if(e){if("number"==typeof e.framesToPop)return e.framesToPop
if(tn.test(e.message))return 1}return 0}(t)
try{return e(n,r)}catch(e){}return[]}const tn=/Minified React error #\d+;/i
function nn(e){const t=e&&e.message
return t?t.error&&"string"==typeof t.error.message?t.error.message:t:"No error message"}function rn(e,t,n,r){const s=on(e,t,n&&n.syntheticException||void 0,r)
return(0,i.EG)(s),s.level="error",n&&n.event_id&&(s.event_id=n.event_id),(0,u.WD)(s)}function sn(e,t,n="info",r,s){const o=an(e,t,r&&r.syntheticException||void 0,s)
return o.level=n,r&&r.event_id&&(o.event_id=r.event_id),(0,u.WD)(o)}function on(e,t,n,r,s){let o
if((0,d.VW)(t)&&t.error)return Qt(e,t.error)
if((0,d.TX)(t)||(0,d.fm)(t)){const s=t
if("stack"in t)o=Qt(e,t)
else{const t=s.name||((0,d.TX)(s)?"DOMError":"DOMException"),a=s.message?`${t}: ${s.message}`:t
o=an(e,a,n,r),(0,i.Db)(o,a)}return"code"in s&&(o.tags={...o.tags,"DOMException.code":`${s.code}`}),o}return(0,d.VZ)(t)?Qt(e,t):(0,d.PO)(t)||(0,d.cO)(t)?(o=function(e,t,n,r){const s=he(),o=s&&s.getOptions().normalizeDepth,i={exception:{values:[{type:(0,d.cO)(t)?t.constructor.name:r?"UnhandledRejection":"Error",value:cn(t,{isUnhandledRejection:r})}]},extra:{__serialized__:(0,J.Qy)(t,o)}}
if(n){const t=en(e,n)
t.length&&(i.exception.values[0].stacktrace={frames:t})}return i}(e,t,n,s),(0,i.EG)(o,{synthetic:!0}),o):(o=an(e,t,n,r),(0,i.Db)(o,`${t}`,void 0),(0,i.EG)(o,{synthetic:!0}),o)}function an(e,t,n,r){const s={}
if(r&&n){const r=en(e,n)
r.length&&(s.exception={values:[{value:t,stacktrace:{frames:r}}]})}if((0,d.Le)(t)){const{__sentry_template_string__:e,__sentry_template_values__:n}=t
return s.logentry={message:e,params:n},s}return s.message=t,s}function cn(e,{isUnhandledRejection:t}){const n=(0,o.zf)(e),r=t?"promise rejection":"exception"
return(0,d.VW)(e)?`Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\``:(0,d.cO)(e)?`Event \`${function(e){try{const t=Object.getPrototypeOf(e)
return t?t.constructor.name:void 0}catch(e){}}(e)}\` (type=${e.type}) captured as ${r}`:`Object captured as ${r} with keys: ${n}`}function ln(e,{metadata:t,tunnel:n,dsn:r}){const s={event_id:e.event_id,sent_at:(new Date).toISOString(),...t&&t.sdk&&{sdk:{name:t.sdk.name,version:t.sdk.version}},...!!n&&!!r&&{dsn:(0,He.RA)(r)}},o=function(e){return[{type:"user_report"},e]}(e)
return(0,$e.Jd)(s,[o])}class un extends Xe{constructor(e){const t=Wt.SENTRY_SDK_SOURCE||(0,Vt.S)()
e._metadata=e._metadata||{},e._metadata.sdk=e._metadata.sdk||{name:"sentry.javascript.browser",packages:[{name:`${t}:@sentry/browser`,version:$}],version:$},super(e),e.sendClientReports&&Wt.document&&Wt.document.addEventListener("visibilitychange",(()=>{"hidden"===Wt.document.visibilityState&&this._flushOutcomes()}))}eventFromException(e,t){return rn(this._options.stackParser,e,t,this._options.attachStacktrace)}eventFromMessage(e,t="info",n){return sn(this._options.stackParser,e,t,n,this._options.attachStacktrace)}captureUserFeedback(e){if(!this._isEnabled())return void(Xt&&a.kg.warn("SDK not enabled, will not capture user feedback."))
const t=ln(e,{metadata:this.getSdkMetadata(),dsn:this.getDsn(),tunnel:this.getOptions().tunnel})
this._sendEnvelope(t)}_prepareEvent(e,t,n){return e.platform=e.platform||"javascript",super._prepareEvent(e,t,n)}_flushOutcomes(){const e=this._clearOutcomes()
if(0===e.length)return void(Xt&&a.kg.log("No outcomes to send"))
if(!this._dsn)return void(Xt&&a.kg.log("No dsn provided, will not send outcomes"))
Xt&&a.kg.log("Sending outcomes:",e)
const t=(0,Yt.y)(e,this._options.tunnel&&(0,He.RA)(this._dsn))
this._sendEnvelope(t)}}var dn=n(651)
let pn
function hn(e,t=function(){if(pn)return pn
if((0,dn.Du)(Wt.fetch))return pn=Wt.fetch.bind(Wt)
const e=Wt.document
let t=Wt.fetch
if(e&&"function"==typeof e.createElement)try{const n=e.createElement("iframe")
n.hidden=!0,e.head.appendChild(n)
const r=n.contentWindow
r&&r.fetch&&(t=r.fetch),e.head.removeChild(n)}catch(e){Xt&&a.kg.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",e)}return pn=t.bind(Wt)}()){let n=0,r=0
return Nt(e,(function(s){const o=s.body.length
n+=o,r++
const i={body:s.body,method:"POST",referrerPolicy:"origin",headers:e.headers,keepalive:n<=6e4&&r<15,...e.fetchOptions}
try{return t(e.url,i).then((e=>(n-=o,r--,{statusCode:e.status,headers:{"x-sentry-rate-limits":e.headers.get("X-Sentry-Rate-Limits"),"retry-after":e.headers.get("Retry-After")}})))}catch(e){return pn=void 0,n-=o,r--,(0,u.$2)(e)}}))}const mn=4
function fn(e){return Nt(e,(function(t){return new u.cW(((n,r)=>{const s=new XMLHttpRequest
s.onerror=r,s.onreadystatechange=()=>{s.readyState===mn&&n({statusCode:s.status,headers:{"x-sentry-rate-limits":s.getResponseHeader("X-Sentry-Rate-Limits"),"retry-after":s.getResponseHeader("Retry-After")}})},s.open("POST",e.url)
for(const t in e.headers)Object.prototype.hasOwnProperty.call(e.headers,t)&&s.setRequestHeader(t,e.headers[t])
s.send(t.body)}))}))}var gn=n(879)
const yn="?"
function _n(e,t,n,r){const s={filename:e,function:t,in_app:!0}
return void 0!==n&&(s.lineno=n),void 0!==r&&(s.colno=r),s}const vn=/^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,bn=/\((\S*)(?::(\d+))(?::(\d+))\)/,Sn=[30,e=>{const t=vn.exec(e)
if(t){if(t[2]&&0===t[2].indexOf("eval")){const e=bn.exec(t[2])
e&&(t[2]=e[1],t[3]=e[2],t[4]=e[3])}const[e,n]=Dn(t[1]||yn,t[2])
return _n(n,e,t[3]?+t[3]:void 0,t[4]?+t[4]:void 0)}}],kn=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,wn=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,En=[50,e=>{const t=kn.exec(e)
if(t){if(t[3]&&t[3].indexOf(" > eval")>-1){const e=wn.exec(t[3])
e&&(t[1]=t[1]||"eval",t[3]=e[1],t[4]=e[2],t[5]="")}let e=t[3],n=t[1]||yn
return[n,e]=Dn(n,e),_n(e,n,t[4]?+t[4]:void 0,t[5]?+t[5]:void 0)}}],xn=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,Tn=[40,e=>{const t=xn.exec(e)
return t?_n(t[2],t[1]||yn,+t[3],t[4]?+t[4]:void 0):void 0}],Cn=/ line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,In=[10,e=>{const t=Cn.exec(e)
return t?_n(t[2],t[3]||yn,+t[1]):void 0}],Rn=/ line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,On=[20,e=>{const t=Rn.exec(e)
return t?_n(t[5],t[3]||t[4]||yn,+t[1],+t[2]):void 0}],Mn=[Sn,En,Tn],An=(0,gn.pE)(...Mn),Dn=(e,t)=>{const n=-1!==e.indexOf("safari-extension"),r=-1!==e.indexOf("safari-web-extension")
return n||r?[-1!==e.indexOf("@")?e.split("@")[0]:yn,n?`safari-extension:${t}`:`safari-web-extension:${t}`]:[e,t]}
var Ln=n(41),Nn=n(809)
const $n="GlobalHandlers",Pn=we($n,((e={})=>{const t={onerror:!0,onunhandledrejection:!0,...e}
return{name:$n,setupOnce(){Error.stackTraceLimit=50},setup(e){t.onerror&&(function(e){(0,tt.V)((t=>{const{stackParser:n,attachStacktrace:r}=Un()
if(he()!==e||Jt())return
const{msg:s,url:o,line:i,column:a,error:c}=t,l=void 0===c&&(0,d.HD)(s)?function(e,t,n,r){let s=(0,d.VW)(e)?e.message:e,o="Error"
const i=s.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i)
return i&&(o=i[1],s=i[2]),Bn({exception:{values:[{type:o,value:s}]}},t,n,r)}(s,o,i,a):Bn(on(n,c||s,void 0,r,!1),o,i,a)
l.level="error",Q(l,{originalException:c,mechanism:{handled:!1,type:"onerror"}})}))}(e),Fn("onerror")),t.onunhandledrejection&&(function(e){(0,nt.h)((t=>{const{stackParser:n,attachStacktrace:r}=Un()
if(he()!==e||Jt())return
const s=function(e){if((0,d.pt)(e))return e
const t=e
try{if("reason"in t)return t.reason
if("detail"in t&&"reason"in t.detail)return t.detail.reason}catch(e){}return e}(t),o=(0,d.pt)(s)?{exception:{values:[{type:"UnhandledRejection",value:`Non-Error promise rejection captured with value: ${String(s)}`}]}}:on(n,s,void 0,r,!0)
o.level="error",Q(o,{originalException:s,mechanism:{handled:!1,type:"onunhandledrejection"}})}))}(e),Fn("onunhandledrejection"))}}}))
function Bn(e,t,n,r){const s=e.exception=e.exception||{},o=s.values=s.values||[],i=o[0]=o[0]||{},a=i.stacktrace=i.stacktrace||{},c=a.frames=a.frames||[],l=isNaN(parseInt(r,10))?void 0:r,u=isNaN(parseInt(n,10))?void 0:n,p=(0,d.HD)(t)&&t.length>0?t:(0,Nn.l4)()
return 0===c.length&&c.push({colno:l,filename:p,function:"?",in_app:!0,lineno:u}),e}function Fn(e){Xt&&a.kg.log(`Global Handler attached: ${e}`)}function Un(){const e=he()
return e&&e.getOptions()||{stackParser:()=>[],attachStacktrace:!1}}const jn=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","BroadcastChannel","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","SharedWorker","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],Hn="TryCatch",zn=we(Hn,((e={})=>{const t={XMLHttpRequest:!0,eventTarget:!0,requestAnimationFrame:!0,setInterval:!0,setTimeout:!0,...e}
return{name:Hn,setupOnce(){t.setTimeout&&(0,o.hl)(Wt,"setTimeout",qn),t.setInterval&&(0,o.hl)(Wt,"setInterval",qn),t.requestAnimationFrame&&(0,o.hl)(Wt,"requestAnimationFrame",Wn),t.XMLHttpRequest&&"XMLHttpRequest"in Wt&&(0,o.hl)(XMLHttpRequest.prototype,"send",Gn)
const e=t.eventTarget
e&&(Array.isArray(e)?e:jn).forEach(Jn)}}}))
function qn(e){return function(...t){const n=t[0]
return t[0]=Kt(n,{mechanism:{data:{function:(0,gn.$P)(e)},handled:!1,type:"instrument"}}),e.apply(this,t)}}function Wn(e){return function(t){return e.apply(this,[Kt(t,{mechanism:{data:{function:"requestAnimationFrame",handler:(0,gn.$P)(e)},handled:!1,type:"instrument"}})])}}function Gn(e){return function(...t){const n=this
return["onload","onerror","onprogress","onreadystatechange"].forEach((e=>{e in n&&"function"==typeof n[e]&&(0,o.hl)(n,e,(function(t){const n={mechanism:{data:{function:e,handler:(0,gn.$P)(t)},handled:!1,type:"instrument"}},r=(0,o.HK)(t)
return r&&(n.mechanism.data.handler=(0,gn.$P)(r)),Kt(t,n)}))})),e.apply(this,t)}}function Jn(e){const t=Wt,n=t[e]&&t[e].prototype
n&&n.hasOwnProperty&&n.hasOwnProperty("addEventListener")&&((0,o.hl)(n,"addEventListener",(function(t){return function(n,r,s){try{"function"==typeof r.handleEvent&&(r.handleEvent=Kt(r.handleEvent,{mechanism:{data:{function:"handleEvent",handler:(0,gn.$P)(r),target:e},handled:!1,type:"instrument"}}))}catch(e){}return t.apply(this,[n,Kt(r,{mechanism:{data:{function:"addEventListener",handler:(0,gn.$P)(r),target:e},handled:!1,type:"instrument"}}),s])}})),(0,o.hl)(n,"removeEventListener",(function(e){return function(t,n,r){const s=n
try{const n=s&&s.__sentry_wrapped__
n&&e.call(this,t,n,r)}catch(e){}return e.call(this,t,s,r)}})))}var Kn=n(952),Vn=n(105),Yn=n(702),Xn=n(36),Zn=n(635),Qn=n(315)
const er="Breadcrumbs",tr=we(er,((e={})=>{const t={console:!0,dom:!0,fetch:!0,history:!0,sentry:!0,xhr:!0,...e}
return{name:er,setup(e){t.console&&(0,Kn.e)(function(e){return function(t){if(he()!==e)return
const n={category:"console",data:{arguments:t.args,logger:"console"},level:(0,Zn.VT)(t.level),message:(0,G.nK)(t.args," ")}
if("assert"===t.level){if(!1!==t.args[0])return
n.message=`Assertion failed: ${(0,G.nK)(t.args.slice(1)," ")||"console.assert"}`,n.data.arguments=t.args.slice(1)}te(n,{input:t.args,level:t.level})}}(e)),t.dom&&(0,Vn.O)(function(e,t){return function(n){if(he()!==e)return
let r,s,o="object"==typeof t?t.serializeAttribute:void 0,i="object"==typeof t&&"number"==typeof t.maxStringLength?t.maxStringLength:void 0
i&&i>1024&&(Xt&&a.kg.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${i} was configured. Sentry will use 1024 instead.`),i=1024),"string"==typeof o&&(o=[o])
try{const e=n.event,t=function(e){return!!e&&!!e.target}(e)?e.target:e
r=(0,Nn.Rt)(t,{keyAttrs:o,maxStringLength:i}),s=(0,Nn.iY)(t)}catch(e){r="<unknown>"}if(0===r.length)return
const c={category:`ui.${n.name}`,message:r}
s&&(c.data={"ui.component_name":s}),te(c,{event:n.event,name:n.name,global:n.global})}}(e,t.dom)),t.xhr&&(0,Yn.UK)(function(e){return function(t){if(he()!==e)return
const{startTimestamp:n,endTimestamp:r}=t,s=t.xhr[Yn.xU]
if(!n||!r||!s)return
const{method:o,url:i,status_code:a,body:c}=s
te({category:"xhr",data:{method:o,url:i,status_code:a},type:"http"},{xhr:t.xhr,input:c,startTimestamp:n,endTimestamp:r})}}(e)),t.fetch&&(0,Xn.U)(function(e){return function(t){if(he()!==e)return
const{startTimestamp:n,endTimestamp:r}=t
if(r&&(!t.fetchData.url.match(/sentry_key/)||"POST"!==t.fetchData.method))if(t.error)te({category:"fetch",data:t.fetchData,level:"error",type:"http"},{data:t.error,input:t.args,startTimestamp:n,endTimestamp:r})
else{const e=t.response
te({category:"fetch",data:{...t.fetchData,status_code:e&&e.status},type:"http"},{input:t.args,response:e,startTimestamp:n,endTimestamp:r})}}}(e)),t.history&&(0,Ln.a)(function(e){return function(t){if(he()!==e)return
let n=t.from,r=t.to
const s=(0,Qn.en)(Wt.location.href)
let o=n?(0,Qn.en)(n):void 0
const i=(0,Qn.en)(r)
o&&o.path||(o=s),s.protocol===i.protocol&&s.host===i.host&&(r=i.relative),s.protocol===o.protocol&&s.host===o.host&&(n=o.relative),te({category:"navigation",data:{from:n,to:r}})}}(e)),t.sentry&&e.on&&e.on("beforeSendEvent",function(e){return function(t){he()===e&&te({category:"sentry."+("transaction"===t.type?"transaction":"event"),event_id:t.event_id,level:t.level,message:(0,i.jH)(t)},{event:t})}}(e))}}})),nr="LinkedErrors",rr=we(nr,((e={})=>{const t=e.limit||5,n=e.key||"cause"
return{name:nr,preprocessEvent(e,r,s){const o=s.getOptions();(0,Ae.Z)(Zt,o.stackParser,o.maxValueLength,n,t,e,r)}}})),sr="HttpContext",or=we(sr,(()=>({name:sr,preprocessEvent(e){if(!Wt.navigator&&!Wt.location&&!Wt.document)return
const t=e.request&&e.request.url||Wt.location&&Wt.location.href,{referrer:n}=Wt.document||{},{userAgent:r}=Wt.navigator||{},s={...e.request&&e.request.headers,...n&&{Referer:n},...r&&{"User-Agent":r}},o={...e.request,...t&&{url:t},headers:s}
e.request=o}}))),ir="Dedupe",ar=we(ir,(()=>{let e
return{name:ir,processEvent(t){if(t.type)return t
try{if(function(e,t){return!(!t||!function(e,t){const n=e.message,r=t.message
return!(!n&&!r||n&&!r||!n&&r||n!==r||!lr(e,t)||!cr(e,t))}(e,t)&&!function(e,t){const n=ur(t),r=ur(e)
return!!(n&&r&&n.type===r.type&&n.value===r.value&&lr(e,t)&&cr(e,t))}(e,t))}(t,e))return Xt&&a.kg.warn("Event dropped due to being a duplicate of previously captured event."),null}catch(e){}return e=t}}}))
function cr(e,t){let n=dr(e),r=dr(t)
if(!n&&!r)return!0
if(n&&!r||!n&&r)return!1
if(r.length!==n.length)return!1
for(let s=0;s<r.length;s++){const e=r[s],t=n[s]
if(e.filename!==t.filename||e.lineno!==t.lineno||e.colno!==t.colno||e.function!==t.function)return!1}return!0}function lr(e,t){let n=e.fingerprint,r=t.fingerprint
if(!n&&!r)return!0
if(n&&!r||!n&&r)return!1
try{return!(n.join("")!==r.join(""))}catch(e){return!1}}function ur(e){return e.exception&&e.exception.values&&e.exception.values[0]}function dr(e){const t=e.exception
if(t)try{return t.values[0].stacktrace.frames}catch(e){return}}const pr=[new Oe,new Te,new zn,new tr,new Pn,new rr,new ar,new or]
function hr(e={}){void 0===e.defaultIntegrations&&(e.defaultIntegrations=pr),void 0===e.release&&("string"==typeof __SENTRY_RELEASE__&&(e.release=__SENTRY_RELEASE__),Wt.SENTRY_RELEASE&&Wt.SENTRY_RELEASE.id&&(e.release=Wt.SENTRY_RELEASE.id)),void 0===e.autoSessionTracking&&(e.autoSessionTracking=!0),void 0===e.sendClientReports&&(e.sendClientReports=!0)
const t={...e,stackParser:(0,gn.Sq)(e.stackParser||An),integrations:be(e),transport:e.transport||((0,dn.Ak)()?hn:fn)}
!function(e,t){!0===t.debug&&(c?a.kg.enable():(0,a.Cf)((()=>{console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")})))
const n=H()
n.getScope().update(t.initialScope)
const r=new e(t)
n.bindClient(r)}(un,t),e.autoSessionTracking&&(void 0!==Wt.document?(fe({ignoreDuration:!0}),_e(),(0,Ln.a)((({from:e,to:t})=>{void 0!==e&&e!==t&&(fe({ignoreDuration:!0}),_e())}))):Xt&&a.kg.warn("Session tracking in non-browser environment with @sentry/browser is not supported."))}const mr=(e={},t=H())=>{if(!Wt.document)return void(Xt&&a.kg.error("Global document not defined in showReportDialog call"))
const{client:n,scope:r}=t.getStackTop(),s=e.dsn||n&&n.getDsn()
if(!s)return void(Xt&&a.kg.error("DSN not configured for showReportDialog call"))
r&&(e.user={...r.getUser(),...e.user}),e.eventId||(e.eventId=t.lastEventId())
const o=Wt.document.createElement("script")
o.async=!0,o.crossOrigin="anonymous",o.src=function(e,t){const n=(0,He.vK)(e)
if(!n)return""
const r=`${We(n)}embed/error-page/`
let s=`dsn=${(0,He.RA)(n)}`
for(const o in t)if("dsn"!==o&&"onClose"!==o)if("user"===o){const e=t.user
if(!e)continue
e.name&&(s+=`&name=${encodeURIComponent(e.name)}`),e.email&&(s+=`&email=${encodeURIComponent(e.email)}`)}else s+=`&${encodeURIComponent(o)}=${encodeURIComponent(t[o])}`
return`${r}?${s}`}(s,e),e.onLoad&&(o.onload=e.onLoad)
const{onClose:i}=e
if(i){const e=t=>{if("__sentry_reportdialog_closed__"===t.data)try{i()}finally{Wt.removeEventListener("message",e)}}
Wt.addEventListener("message",e)}const c=Wt.document.head||Wt.document.body
c?c.appendChild(o):Xt&&a.kg.error("Not injecting report dialog. No injection point found in HTML")}
function fr(){}function gr(e){e()}function yr(e){return Kt(e)()}function _r(e){const t=he()
t&&t.captureUserFeedback(e)}var vr=n(15),br=n(694)
function Sr(e){return"/"===e[e.length-1]?e.slice(0,-1):e}var kr=n(479)
const wr="undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__,Er=(e,t,n)=>{let r,s
return o=>{t.value>=0&&(o||n)&&(s=t.value-(r||0),(s||void 0===r)&&(r=t.value,t.delta=s,e(t)))}},xr=l.GLOBAL_OBJ,Tr=()=>xr.__WEB_VITALS_POLYFILL__?xr.performance&&(performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]||(()=>{const e=xr.performance.timing,t=xr.performance.navigation.type,n={entryType:"navigation",startTime:0,type:2==t?"back_forward":1===t?"reload":"navigate"}
for(const r in e)"navigationStart"!==r&&"toJSON"!==r&&(n[r]=Math.max(e[r]-e.navigationStart,0))
return n})()):xr.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0],Cr=()=>{const e=Tr()
return e&&e.activationStart||0},Ir=(e,t)=>{const n=Tr()
let r="navigate"
return n&&(r=xr.document.prerendering||Cr()>0?"prerender":n.type.replace(/_/g,"-")),{name:e,value:void 0===t?-1:t,rating:"good",delta:0,entries:[],id:`v3-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,navigationType:r}},Rr=(e,t,n)=>{try{if(PerformanceObserver.supportedEntryTypes.includes(e)){const r=new PerformanceObserver((e=>{t(e.getEntries())}))
return r.observe(Object.assign({type:e,buffered:!0},n||{})),r}}catch(e){}},Or=(e,t)=>{const n=r=>{"pagehide"!==r.type&&"hidden"!==xr.document.visibilityState||(e(r),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))}
addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},Mr=e=>{const t=Ir("CLS",0)
let n,r=0,s=[]
const o=e=>{e.forEach((e=>{if(!e.hadRecentInput){const o=s[0],i=s[s.length-1]
r&&0!==s.length&&e.startTime-i.startTime<1e3&&e.startTime-o.startTime<5e3?(r+=e.value,s.push(e)):(r=e.value,s=[e]),r>t.value&&(t.value=r,t.entries=s,n&&n())}}))},i=Rr("layout-shift",o)
if(i){n=Er(e,t)
const r=()=>{o(i.takeRecords()),n(!0)}
return Or(r),r}}
let Ar=-1
const Dr=()=>(Ar<0&&(Ar="hidden"!==xr.document.visibilityState||xr.document.prerendering?1/0:0,Or((({timeStamp:e})=>{Ar=e}),!0)),{get firstHiddenTime(){return Ar}}),Lr=e=>{const t=Dr(),n=Ir("FID")
let r
const s=e=>{e.startTime<t.firstHiddenTime&&(n.value=e.processingStart-e.startTime,n.entries.push(e),r(!0))},o=e=>{e.forEach(s)},i=Rr("first-input",o)
r=Er(e,n),i&&Or((()=>{o(i.takeRecords()),i.disconnect()}),!0)},Nr={},$r=e=>{const t=Dr(),n=Ir("LCP")
let r
const s=e=>{const s=e[e.length-1]
if(s){const e=Math.max(s.startTime-Cr(),0)
e<t.firstHiddenTime&&(n.value=e,n.entries=[s],r())}},o=Rr("largest-contentful-paint",s)
if(o){r=Er(e,n)
const t=()=>{Nr[n.id]||(s(o.takeRecords()),o.disconnect(),Nr[n.id]=!0,r(!0))}
return["keydown","click"].forEach((e=>{addEventListener(e,t,{once:!0,capture:!0})})),Or(t,!0),t}},Pr={},Br={}
let Fr,Ur,jr
function Hr(e){return Kr("lcp",e,Jr,jr)}function zr(e,t){return Vr(e,t),Br[e]||(function(e){const t={}
"event"===e&&(t.durationThreshold=0),Rr(e,(t=>{qr(e,{entries:t})}),t)}(e),Br[e]=!0),Yr(e,t)}function qr(e,t){const n=Pr[e]
if(n&&n.length)for(const r of n)try{r(t)}catch(t){wr&&a.kg.error(`Error while triggering instrumentation handler.\nType: ${e}\nName: ${(0,gn.$P)(r)}\nError:`,t)}}function Wr(){Mr((e=>{qr("cls",{metric:e}),Fr=e}))}function Gr(){Lr((e=>{qr("fid",{metric:e}),Ur=e}))}function Jr(){$r((e=>{qr("lcp",{metric:e}),jr=e}))}function Kr(e,t,n,r){return Vr(e,t),Br[e]||(n(),Br[e]=!0),r&&t({metric:r}),Yr(e,t)}function Vr(e,t){Pr[e]=Pr[e]||[],Pr[e].push(t)}function Yr(e,t){return()=>{const n=Pr[e]
if(!n)return
const r=n.indexOf(t);-1!==r&&n.splice(r,1)}}const Xr=l.GLOBAL_OBJ,Zr="sentryReplaySession",Qr="Unable to send Replay",es=15e4,ts=5e3,ns=2e7,rs={low:{sampling:{canvas:1},dataURLOptions:{type:"image/webp",quality:.25}},medium:{sampling:{canvas:2},dataURLOptions:{type:"image/webp",quality:.4}},high:{sampling:{canvas:4},dataURLOptions:{type:"image/webp",quality:.5}}}
function ss(e){let t,n=e[0],r=1
for(;r<e.length;){const s=e[r],o=e[r+1]
if(r+=2,("optionalAccess"===s||"optionalCall"===s)&&null==n)return
"access"===s||"optionalAccess"===s?(t=n,n=o(n)):"call"!==s&&"optionalCall"!==s||(n=o(((...e)=>n.call(t,...e))),t=void 0)}return n}var os
function is(e){const t=ss([e,"optionalAccess",e=>e.host])
return Boolean(ss([t,"optionalAccess",e=>e.shadowRoot])===e)}function as(e){return"[object ShadowRoot]"===Object.prototype.toString.call(e)}function cs(e){try{const n=e.rules||e.cssRules
return n?((t=Array.from(n,ls).join("")).includes(" background-clip: text;")&&!t.includes(" -webkit-background-clip: text;")&&(t=t.replace(" background-clip: text;"," -webkit-background-clip: text; background-clip: text;")),t):null}catch(e){return null}var t}function ls(e){let t
if(function(e){return"styleSheet"in e}(e))try{t=cs(e.styleSheet)||function(e){const{cssText:t}=e
if(t.split('"').length<3)return t
const n=["@import",`url(${JSON.stringify(e.href)})`]
return""===e.layerName?n.push("layer"):e.layerName&&n.push(`layer(${e.layerName})`),e.supportsText&&n.push(`supports(${e.supportsText})`),e.media.length&&n.push(e.media.mediaText),n.join(" ")+";"}(e)}catch(e){}else if(function(e){return"selectorText"in e}(e)&&e.selectorText.includes(":"))return e.cssText.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm,"$1\\$2")
return t||e.cssText}!function(e){e[e.Document=0]="Document",e[e.DocumentType=1]="DocumentType",e[e.Element=2]="Element",e[e.Text=3]="Text",e[e.CDATA=4]="CDATA",e[e.Comment=5]="Comment"}(os||(os={}))
class us{constructor(){this.idNodeMap=new Map,this.nodeMetaMap=new WeakMap}getId(e){return e&&null!=(t=ss([this,"access",e=>e.getMeta,"call",t=>t(e),"optionalAccess",e=>e.id]))?t:-1
var t}getNode(e){return this.idNodeMap.get(e)||null}getIds(){return Array.from(this.idNodeMap.keys())}getMeta(e){return this.nodeMetaMap.get(e)||null}removeNodeFromMap(e){const t=this.getId(e)
this.idNodeMap.delete(t),e.childNodes&&e.childNodes.forEach((e=>this.removeNodeFromMap(e)))}has(e){return this.idNodeMap.has(e)}hasNode(e){return this.nodeMetaMap.has(e)}add(e,t){const n=t.id
this.idNodeMap.set(n,e),this.nodeMetaMap.set(e,t)}replace(e,t){const n=this.getNode(e)
if(n){const e=this.nodeMetaMap.get(n)
e&&this.nodeMetaMap.set(t,e)}this.idNodeMap.set(e,t)}reset(){this.idNodeMap=new Map,this.nodeMetaMap=new WeakMap}}function ds({maskInputOptions:e,tagName:t,type:n}){return"OPTION"===t&&(t="SELECT"),Boolean(e[t.toLowerCase()]||n&&e[n]||"password"===n||"INPUT"===t&&!n&&e.text)}function ps({isMasked:e,element:t,value:n,maskInputFn:r}){let s=n||""
return e?(r&&(s=r(s,t)),"*".repeat(s.length)):s}function hs(e){return e.toLowerCase()}function ms(e){return e.toUpperCase()}const fs="__rrweb_original__"
function gs(e){const t=e.type
return e.hasAttribute("data-rr-is-password")?"password":t?hs(t):null}function ys(e,t,n){return"INPUT"!==t||"radio"!==n&&"checkbox"!==n?e.value:e.getAttribute("value")||""}let _s=1
const vs=new RegExp("[^a-z0-9-_:]"),bs=-2
function Ss(){return _s++}let ks,ws
const Es=/url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,xs=/^(?:[a-z+]+:)?\/\//i,Ts=/^www\..*/i,Cs=/^(data:)([^,]*),(.*)/i
function Is(e,t){return(e||"").replace(Es,((e,n,r,s,o,i)=>{const a=r||o||i,c=n||s||""
if(!a)return e
if(xs.test(a)||Ts.test(a))return`url(${c}${a}${c})`
if(Cs.test(a))return`url(${c}${a}${c})`
if("/"===a[0])return`url(${c}${function(e){let t=""
return t=e.indexOf("//")>-1?e.split("/").slice(0,3).join("/"):e.split("/")[0],t=t.split("?")[0],t}(t)+a}${c})`
const l=t.split("/"),u=a.split("/")
l.pop()
for(const t of u)"."!==t&&(".."===t?l.pop():l.push(t))
return`url(${c}${l.join("/")}${c})`}))}const Rs=/^[^ \t\n\r\u000c]+/,Os=/^[, \t\n\r\u000c]+/
function Ms(e,t){if(!t||""===t.trim())return t
const n=e.createElement("a")
return n.href=t,n.href}function As(){const e=document.createElement("a")
return e.href="",e.href}function Ds(e,t,n,r,s,o){return r?"src"===n||"href"===n&&("use"!==t||"#"!==r[0])||"xlink:href"===n&&"#"!==r[0]?Ms(e,r):"background"!==n||"table"!==t&&"td"!==t&&"th"!==t?"srcset"===n?function(e,t){if(""===t.trim())return t
let n=0
function r(e){let r
const s=e.exec(t.substring(n))
return s?(r=s[0],n+=r.length,r):""}const s=[]
for(;r(Os),!(n>=t.length);){let o=r(Rs)
if(","===o.slice(-1))o=Ms(e,o.substring(0,o.length-1)),s.push(o)
else{let r=""
o=Ms(e,o)
let i=!1
for(;;){const e=t.charAt(n)
if(""===e){s.push((o+r).trim())
break}if(i)")"===e&&(i=!1)
else{if(","===e){n+=1,s.push((o+r).trim())
break}"("===e&&(i=!0)}r+=e,n+=1}}}return s.join(", ")}(e,r):"style"===n?Is(r,As()):"object"===t&&"data"===n?Ms(e,r):"function"==typeof o?o(n,r,s):r:Ms(e,r):r}function Ls(e,t,n){return("video"===e||"audio"===e)&&"autoplay"===t}function Ns(e,t,n=1/0,r=0){return e?e.nodeType!==e.ELEMENT_NODE||r>n?-1:t(e)?r:Ns(e.parentNode,t,n,r+1):-1}function $s(e,t){return n=>{const r=n
if(null===r)return!1
if(e)if("string"==typeof e){if(r.matches(`.${e}`))return!0}else if(function(e,t){for(let n=e.classList.length;n--;){const r=e.classList[n]
if(t.test(r))return!0}return!1}(r,e))return!0
return!(!t||!r.matches(t))}}function Ps(e,t,n,r,s,o){try{const i=e.nodeType===e.ELEMENT_NODE?e:e.parentElement
if(null===i)return!1
let a=-1,c=-1
if(o){if(c=Ns(i,$s(r,s)),c<0)return!0
a=Ns(i,$s(t,n),c>=0?c:1/0)}else{if(a=Ns(i,$s(t,n)),a<0)return!1
c=Ns(i,$s(r,s),a>=0?a:1/0)}return a>=0?!(c>=0)||a<=c:!(c>=0||!o)}catch(e){}return!!o}function Bs(e){return null==e?"":e.toLowerCase()}function Fs(e,t){const{doc:n,mirror:r,blockClass:s,blockSelector:o,unblockSelector:i,maskAllText:a,maskTextClass:c,unmaskTextClass:l,maskTextSelector:u,unmaskTextSelector:d,skipChild:p=!1,inlineStylesheet:h=!0,maskInputOptions:m={},maskAttributeFn:f,maskTextFn:g,maskInputFn:y,slimDOMOptions:_,dataURLOptions:v={},inlineImages:b=!1,recordCanvas:S=!1,onSerialize:k,onIframeLoad:w,iframeLoadTimeout:E=5e3,onStylesheetLoad:x,stylesheetLoadTimeout:T=5e3,keepIframeSrcFn:C=(()=>!1),newlyAddedElement:I=!1}=t
let{preserveWhiteSpace:R=!0}=t
const O=function(e,t){const{doc:n,mirror:r,blockClass:s,blockSelector:o,unblockSelector:i,maskAllText:a,maskAttributeFn:c,maskTextClass:l,unmaskTextClass:u,maskTextSelector:d,unmaskTextSelector:p,inlineStylesheet:h,maskInputOptions:m={},maskTextFn:f,maskInputFn:g,dataURLOptions:y={},inlineImages:_,recordCanvas:v,keepIframeSrcFn:b,newlyAddedElement:S=!1}=t,k=function(e,t){if(!t.hasNode(e))return
const n=t.getId(e)
return 1===n?void 0:n}(n,r)
switch(e.nodeType){case e.DOCUMENT_NODE:return"CSS1Compat"!==e.compatMode?{type:os.Document,childNodes:[],compatMode:e.compatMode}:{type:os.Document,childNodes:[]}
case e.DOCUMENT_TYPE_NODE:return{type:os.DocumentType,name:e.name,publicId:e.publicId,systemId:e.systemId,rootId:k}
case e.ELEMENT_NODE:return function(e,t){const{doc:n,blockClass:r,blockSelector:s,unblockSelector:o,inlineStylesheet:i,maskInputOptions:a={},maskAttributeFn:c,maskInputFn:l,dataURLOptions:u={},inlineImages:d,recordCanvas:p,keepIframeSrcFn:h,newlyAddedElement:m=!1,rootId:f,maskAllText:g,maskTextClass:y,unmaskTextClass:_,maskTextSelector:v,unmaskTextSelector:b}=t,S=function(e,t,n,r){try{if(r&&e.matches(r))return!1
if("string"==typeof t){if(e.classList.contains(t))return!0}else for(let n=e.classList.length;n--;){const r=e.classList[n]
if(t.test(r))return!0}if(n)return e.matches(n)}catch(e){}return!1}(e,r,s,o),k=function(e){if(e instanceof HTMLFormElement)return"form"
const t=hs(e.tagName)
return vs.test(t)?"div":t}(e)
let w={}
const E=e.attributes.length
for(let C=0;C<E;C++){const t=e.attributes[C]
Ls(k,t.name,t.value)||(w[t.name]=Ds(n,k,hs(t.name),t.value,e,c))}if("link"===k&&i){const t=Array.from(n.styleSheets).find((t=>t.href===e.href))
let r=null
t&&(r=cs(t)),r&&(delete w.rel,delete w.href,w._cssText=Is(r,t.href))}if("style"===k&&e.sheet&&!(e.innerText||e.textContent||"").trim().length){const t=cs(e.sheet)
t&&(w._cssText=Is(t,As()))}if("input"===k||"textarea"===k||"select"===k||"option"===k){const t=e,n=gs(t),r=ys(t,ms(k),n),s=t.checked
if("submit"!==n&&"button"!==n&&r){const e=Ps(t,y,v,_,b,ds({type:n,tagName:ms(k),maskInputOptions:a}))
w.value=ps({isMasked:e,element:t,value:r,maskInputFn:l})}s&&(w.checked=s)}if("option"===k&&(e.selected&&!a.select?w.selected=!0:delete w.selected),"canvas"===k&&p)if("2d"===e.__context)(function(e){const t=e.getContext("2d")
if(!t)return!0
for(let n=0;n<e.width;n+=50)for(let r=0;r<e.height;r+=50){const s=t.getImageData,o=fs in s?s[fs]:s
if(new Uint32Array(o.call(t,n,r,Math.min(50,e.width-n),Math.min(50,e.height-r)).data.buffer).some((e=>0!==e)))return!1}return!0})(e)||(w.rr_dataURL=e.toDataURL(u.type,u.quality))
else if(!("__context"in e)){const t=e.toDataURL(u.type,u.quality),n=document.createElement("canvas")
n.width=e.width,n.height=e.height,t!==n.toDataURL(u.type,u.quality)&&(w.rr_dataURL=t)}if("img"===k&&d){ks||(ks=n.createElement("canvas"),ws=ks.getContext("2d"))
const t=e,r=t.crossOrigin
t.crossOrigin="anonymous"
const s=()=>{t.removeEventListener("load",s)
try{ks.width=t.naturalWidth,ks.height=t.naturalHeight,ws.drawImage(t,0,0),w.rr_dataURL=ks.toDataURL(u.type,u.quality)}catch(e){console.warn(`Cannot inline img src=${t.currentSrc}! Error: ${e}`)}r?w.crossOrigin=r:t.removeAttribute("crossorigin")}
t.complete&&0!==t.naturalWidth?s():t.addEventListener("load",s)}if("audio"!==k&&"video"!==k||(w.rr_mediaState=e.paused?"paused":"played",w.rr_mediaCurrentTime=e.currentTime),m||(e.scrollLeft&&(w.rr_scrollLeft=e.scrollLeft),e.scrollTop&&(w.rr_scrollTop=e.scrollTop)),S){const{width:t,height:n}=e.getBoundingClientRect()
w={class:w.class,rr_width:`${t}px`,rr_height:`${n}px`}}let x
"iframe"!==k||h(w.src)||(e.contentDocument||(w.rr_src=w.src),delete w.src)
try{customElements.get(k)&&(x=!0)}catch(e){}return{type:os.Element,tagName:k,attributes:w,childNodes:[],isSVG:(T=e,Boolean("svg"===T.tagName||T.ownerSVGElement)||void 0),needBlock:S,rootId:f,isCustom:x}
var T}(e,{doc:n,blockClass:s,blockSelector:o,unblockSelector:i,inlineStylesheet:h,maskAttributeFn:c,maskInputOptions:m,maskInputFn:g,dataURLOptions:y,inlineImages:_,recordCanvas:v,keepIframeSrcFn:b,newlyAddedElement:S,rootId:k,maskAllText:a,maskTextClass:l,unmaskTextClass:u,maskTextSelector:d,unmaskTextSelector:p})
case e.TEXT_NODE:return function(e,t){const{maskAllText:n,maskTextClass:r,unmaskTextClass:s,maskTextSelector:o,unmaskTextSelector:i,maskTextFn:a,maskInputOptions:c,maskInputFn:l,rootId:u}=t,d=e.parentNode&&e.parentNode.tagName
let p=e.textContent
const h="STYLE"===d||void 0,m="SCRIPT"===d||void 0,f="TEXTAREA"===d||void 0
if(h&&p){try{e.nextSibling||e.previousSibling||ss([e,"access",e=>e.parentNode,"access",e=>e.sheet,"optionalAccess",e=>e.cssRules])&&(p=cs(e.parentNode.sheet))}catch(t){console.warn(`Cannot get CSS styles from text's parentNode. Error: ${t}`,e)}p=Is(p,As())}m&&(p="SCRIPT_PLACEHOLDER")
const g=Ps(e,r,o,s,i,n)
return h||m||f||!p||!g||(p=a?a(p):p.replace(/[\S]/g,"*")),f&&p&&(c.textarea||g)&&(p=l?l(p,e.parentNode):p.replace(/[\S]/g,"*")),"OPTION"===d&&p&&(p=ps({isMasked:Ps(e,r,o,s,i,ds({type:null,tagName:d,maskInputOptions:c})),element:e,value:p,maskInputFn:l})),{type:os.Text,textContent:p||"",isStyle:h,rootId:u}}(e,{maskAllText:a,maskTextClass:l,unmaskTextClass:u,maskTextSelector:d,unmaskTextSelector:p,maskTextFn:f,maskInputOptions:m,maskInputFn:g,rootId:k})
case e.CDATA_SECTION_NODE:return{type:os.CDATA,textContent:"",rootId:k}
case e.COMMENT_NODE:return{type:os.Comment,textContent:e.textContent||"",rootId:k}
default:return!1}}(e,{doc:n,mirror:r,blockClass:s,blockSelector:o,maskAllText:a,unblockSelector:i,maskTextClass:c,unmaskTextClass:l,maskTextSelector:u,unmaskTextSelector:d,inlineStylesheet:h,maskInputOptions:m,maskAttributeFn:f,maskTextFn:g,maskInputFn:y,dataURLOptions:v,inlineImages:b,recordCanvas:S,keepIframeSrcFn:C,newlyAddedElement:I})
if(!O)return console.warn(e,"not serialized"),null
let M
M=r.hasNode(e)?r.getId(e):!function(e,t){if(t.comment&&e.type===os.Comment)return!0
if(e.type===os.Element){if(t.script&&("script"===e.tagName||"link"===e.tagName&&("preload"===e.attributes.rel||"modulepreload"===e.attributes.rel)&&"script"===e.attributes.as||"link"===e.tagName&&"prefetch"===e.attributes.rel&&"string"==typeof e.attributes.href&&e.attributes.href.endsWith(".js")))return!0
if(t.headFavicon&&("link"===e.tagName&&"shortcut icon"===e.attributes.rel||"meta"===e.tagName&&(Bs(e.attributes.name).match(/^msapplication-tile(image|color)$/)||"application-name"===Bs(e.attributes.name)||"icon"===Bs(e.attributes.rel)||"apple-touch-icon"===Bs(e.attributes.rel)||"shortcut icon"===Bs(e.attributes.rel))))return!0
if("meta"===e.tagName){if(t.headMetaDescKeywords&&Bs(e.attributes.name).match(/^description|keywords$/))return!0
if(t.headMetaSocial&&(Bs(e.attributes.property).match(/^(og|twitter|fb):/)||Bs(e.attributes.name).match(/^(og|twitter):/)||"pinterest"===Bs(e.attributes.name)))return!0
if(t.headMetaRobots&&("robots"===Bs(e.attributes.name)||"googlebot"===Bs(e.attributes.name)||"bingbot"===Bs(e.attributes.name)))return!0
if(t.headMetaHttpEquiv&&void 0!==e.attributes["http-equiv"])return!0
if(t.headMetaAuthorship&&("author"===Bs(e.attributes.name)||"generator"===Bs(e.attributes.name)||"framework"===Bs(e.attributes.name)||"publisher"===Bs(e.attributes.name)||"progid"===Bs(e.attributes.name)||Bs(e.attributes.property).match(/^article:/)||Bs(e.attributes.property).match(/^product:/)))return!0
if(t.headMetaVerification&&("google-site-verification"===Bs(e.attributes.name)||"yandex-verification"===Bs(e.attributes.name)||"csrf-token"===Bs(e.attributes.name)||"p:domain_verify"===Bs(e.attributes.name)||"verify-v1"===Bs(e.attributes.name)||"verification"===Bs(e.attributes.name)||"shopify-checkout-api-token"===Bs(e.attributes.name)))return!0}}return!1}(O,_)&&(R||O.type!==os.Text||O.isStyle||O.textContent.replace(/^\s+|\s+$/gm,"").length)?Ss():bs
const A=Object.assign(O,{id:M})
if(r.add(e,A),M===bs)return null
k&&k(e)
let D=!p
if(A.type===os.Element){D=D&&!A.needBlock,delete A.needBlock
const t=e.shadowRoot
t&&as(t)&&(A.isShadowHost=!0)}if((A.type===os.Document||A.type===os.Element)&&D){_.headWhitespace&&A.type===os.Element&&"head"===A.tagName&&(R=!1)
const t={doc:n,mirror:r,blockClass:s,blockSelector:o,maskAllText:a,unblockSelector:i,maskTextClass:c,unmaskTextClass:l,maskTextSelector:u,unmaskTextSelector:d,skipChild:p,inlineStylesheet:h,maskInputOptions:m,maskAttributeFn:f,maskTextFn:g,maskInputFn:y,slimDOMOptions:_,dataURLOptions:v,inlineImages:b,recordCanvas:S,preserveWhiteSpace:R,onSerialize:k,onIframeLoad:w,iframeLoadTimeout:E,onStylesheetLoad:x,stylesheetLoadTimeout:T,keepIframeSrcFn:C}
for(const n of Array.from(e.childNodes)){const e=Fs(n,t)
e&&A.childNodes.push(e)}if(function(e){return e.nodeType===e.ELEMENT_NODE}(e)&&e.shadowRoot)for(const n of Array.from(e.shadowRoot.childNodes)){const r=Fs(n,t)
r&&(as(e.shadowRoot)&&(r.isShadow=!0),A.childNodes.push(r))}}return e.parentNode&&is(e.parentNode)&&as(e.parentNode)&&(A.isShadow=!0),A.type===os.Element&&"iframe"===A.tagName&&function(e,t,n){const r=e.contentWindow
if(!r)return
let s,o=!1
try{s=r.document.readyState}catch(e){return}if("complete"!==s){const r=setTimeout((()=>{o||(t(),o=!0)}),n)
return void e.addEventListener("load",(()=>{clearTimeout(r),o=!0,t()}))}const i="about:blank"
if(r.location.href!==i||e.src===i||""===e.src)return setTimeout(t,0),e.addEventListener("load",t)
e.addEventListener("load",t)}(e,(()=>{const t=e.contentDocument
if(t&&w){const n=Fs(t,{doc:t,mirror:r,blockClass:s,blockSelector:o,unblockSelector:i,maskAllText:a,maskTextClass:c,unmaskTextClass:l,maskTextSelector:u,unmaskTextSelector:d,skipChild:!1,inlineStylesheet:h,maskInputOptions:m,maskAttributeFn:f,maskTextFn:g,maskInputFn:y,slimDOMOptions:_,dataURLOptions:v,inlineImages:b,recordCanvas:S,preserveWhiteSpace:R,onSerialize:k,onIframeLoad:w,iframeLoadTimeout:E,onStylesheetLoad:x,stylesheetLoadTimeout:T,keepIframeSrcFn:C})
n&&w(e,n)}}),E),A.type===os.Element&&"link"===A.tagName&&"stylesheet"===A.attributes.rel&&function(e,t,n){let r,s=!1
try{r=e.sheet}catch(e){return}if(r)return
const o=setTimeout((()=>{s||(t(),s=!0)}),n)
e.addEventListener("load",(()=>{clearTimeout(o),s=!0,t()}))}(e,(()=>{if(x){const t=Fs(e,{doc:n,mirror:r,blockClass:s,blockSelector:o,unblockSelector:i,maskAllText:a,maskTextClass:c,unmaskTextClass:l,maskTextSelector:u,unmaskTextSelector:d,skipChild:!1,inlineStylesheet:h,maskInputOptions:m,maskAttributeFn:f,maskTextFn:g,maskInputFn:y,slimDOMOptions:_,dataURLOptions:v,inlineImages:b,recordCanvas:S,preserveWhiteSpace:R,onSerialize:k,onIframeLoad:w,iframeLoadTimeout:E,onStylesheetLoad:x,stylesheetLoadTimeout:T,keepIframeSrcFn:C})
t&&x(e,t)}}),T),A}function Us(e){let t,n=e[0],r=1
for(;r<e.length;){const s=e[r],o=e[r+1]
if(r+=2,("optionalAccess"===s||"optionalCall"===s)&&null==n)return
"access"===s||"optionalAccess"===s?(t=n,n=o(n)):"call"!==s&&"optionalCall"!==s||(n=o(((...e)=>n.call(t,...e))),t=void 0)}return n}function js(e,t,n=document){const r={capture:!0,passive:!0}
return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}const Hs="Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording."
let zs={map:{},getId:()=>(console.error(Hs),-1),getNode:()=>(console.error(Hs),null),removeNodeFromMap(){console.error(Hs)},has:()=>(console.error(Hs),!1),reset(){console.error(Hs)}}
function qs(e,t,n={}){let r=null,s=0
return function(...o){const i=Date.now()
s||!1!==n.leading||(s=i)
const a=t-(i-s),c=this
a<=0||a>t?(r&&(clearTimeout(r),r=null),s=i,e.apply(c,o)):r||!1===n.trailing||(r=setTimeout((()=>{s=!1===n.leading?0:Date.now(),r=null,e.apply(c,o)}),a))}}function Ws(e,t,n,r,s=window){const o=s.Object.getOwnPropertyDescriptor(e,t)
return s.Object.defineProperty(e,t,r?n:{set(e){setTimeout((()=>{n.set.call(this,e)}),0),o&&o.set&&o.set.call(this,e)}}),()=>Ws(e,t,o||{},!0)}function Gs(e,t,n){try{if(!(t in e))return()=>{}
const r=e[t],s=n(r)
return"function"==typeof s&&(s.prototype=s.prototype||{},Object.defineProperties(s,{__rrweb_original__:{enumerable:!1,value:r}})),e[t]=s,()=>{e[t]=r}}catch(e){return()=>{}}}"undefined"!=typeof window&&window.Proxy&&window.Reflect&&(zs=new Proxy(zs,{get:(e,t,n)=>("map"===t&&console.error(Hs),Reflect.get(e,t,n))}))
let Js,Ks=Date.now
function Vs(e){const t=e.document
return{left:t.scrollingElement?t.scrollingElement.scrollLeft:void 0!==e.pageXOffset?e.pageXOffset:Us([t,"optionalAccess",e=>e.documentElement,"access",e=>e.scrollLeft])||Us([t,"optionalAccess",e=>e.body,"optionalAccess",e=>e.parentElement,"optionalAccess",e=>e.scrollLeft])||Us([t,"optionalAccess",e=>e.body,"optionalAccess",e=>e.scrollLeft])||0,top:t.scrollingElement?t.scrollingElement.scrollTop:void 0!==e.pageYOffset?e.pageYOffset:Us([t,"optionalAccess",e=>e.documentElement,"access",e=>e.scrollTop])||Us([t,"optionalAccess",e=>e.body,"optionalAccess",e=>e.parentElement,"optionalAccess",e=>e.scrollTop])||Us([t,"optionalAccess",e=>e.body,"optionalAccess",e=>e.scrollTop])||0}}function Ys(){return window.innerHeight||document.documentElement&&document.documentElement.clientHeight||document.body&&document.body.clientHeight}function Xs(){return window.innerWidth||document.documentElement&&document.documentElement.clientWidth||document.body&&document.body.clientWidth}function Zs(e,t,n,r,s){if(!e)return!1
const o=e.nodeType===e.ELEMENT_NODE?e:e.parentElement
if(!o)return!1
const i=$s(t,n)
if(!s){const e=r&&o.matches(r)
return i(o)&&!e}const a=Ns(o,i)
let c=-1
return!(a<0)&&(r&&(c=Ns(o,$s(null,r))),a>-1&&c<0||a<c)}function Qs(e,t){return t.getId(e)===bs}function eo(e,t){if(is(e))return!1
const n=t.getId(e)
return!t.has(n)||(!e.parentNode||e.parentNode.nodeType!==e.DOCUMENT_NODE)&&(!e.parentNode||eo(e.parentNode,t))}function to(e){return Boolean(e.changedTouches)}function no(e,t){return Boolean("IFRAME"===e.nodeName&&t.getMeta(e))}function ro(e,t){return Boolean("LINK"===e.nodeName&&e.nodeType===e.ELEMENT_NODE&&e.getAttribute&&"stylesheet"===e.getAttribute("rel")&&t.getMeta(e))}function so(e){return Boolean(Us([e,"optionalAccess",e=>e.shadowRoot]))}/[1-9][0-9]{12}/.test(Date.now().toString())||(Ks=()=>(new Date).getTime())
class oo{constructor(){this.id=1,this.styleIDMap=new WeakMap,this.idStyleMap=new Map}getId(e){return(0,vr.h)(this.styleIDMap.get(e),(()=>-1))}has(e){return this.styleIDMap.has(e)}add(e,t){if(this.has(e))return this.getId(e)
let n
return n=void 0===t?this.id++:t,this.styleIDMap.set(e,n),this.idStyleMap.set(n,e),n}getStyle(e){return this.idStyleMap.get(e)||null}reset(){this.styleIDMap=new WeakMap,this.idStyleMap=new Map,this.id=1}generateId(){return this.id++}}function io(e){let t=null
return Us([e,"access",e=>e.getRootNode,"optionalCall",e=>e(),"optionalAccess",e=>e.nodeType])===Node.DOCUMENT_FRAGMENT_NODE&&e.getRootNode().host&&(t=e.getRootNode().host),t}function ao(e){const t=e.ownerDocument
return!!t&&(t.contains(e)||function(e){const t=e.ownerDocument
if(!t)return!1
const n=function(e){let t,n=e
for(;t=io(n);)n=t
return n}(e)
return t.contains(n)}(e))}var co=(e=>(e[e.DomContentLoaded=0]="DomContentLoaded",e[e.Load=1]="Load",e[e.FullSnapshot=2]="FullSnapshot",e[e.IncrementalSnapshot=3]="IncrementalSnapshot",e[e.Meta=4]="Meta",e[e.Custom=5]="Custom",e[e.Plugin=6]="Plugin",e))(co||{}),lo=(e=>(e[e.Mutation=0]="Mutation",e[e.MouseMove=1]="MouseMove",e[e.MouseInteraction=2]="MouseInteraction",e[e.Scroll=3]="Scroll",e[e.ViewportResize=4]="ViewportResize",e[e.Input=5]="Input",e[e.TouchMove=6]="TouchMove",e[e.MediaInteraction=7]="MediaInteraction",e[e.StyleSheetRule=8]="StyleSheetRule",e[e.CanvasMutation=9]="CanvasMutation",e[e.Font=10]="Font",e[e.Log=11]="Log",e[e.Drag=12]="Drag",e[e.StyleDeclaration=13]="StyleDeclaration",e[e.Selection=14]="Selection",e[e.AdoptedStyleSheet=15]="AdoptedStyleSheet",e[e.CustomElement=16]="CustomElement",e))(lo||{}),uo=(e=>(e[e.MouseUp=0]="MouseUp",e[e.MouseDown=1]="MouseDown",e[e.Click=2]="Click",e[e.ContextMenu=3]="ContextMenu",e[e.DblClick=4]="DblClick",e[e.Focus=5]="Focus",e[e.Blur=6]="Blur",e[e.TouchStart=7]="TouchStart",e[e.TouchMove_Departed=8]="TouchMove_Departed",e[e.TouchEnd=9]="TouchEnd",e[e.TouchCancel=10]="TouchCancel",e))(uo||{}),po=(e=>(e[e.Mouse=0]="Mouse",e[e.Pen=1]="Pen",e[e.Touch=2]="Touch",e))(po||{})
function ho(e){let t,n=e[0],r=1
for(;r<e.length;){const s=e[r],o=e[r+1]
if(r+=2,("optionalAccess"===s||"optionalCall"===s)&&null==n)return
"access"===s||"optionalAccess"===s?(t=n,n=o(n)):"call"!==s&&"optionalCall"!==s||(n=o(((...e)=>n.call(t,...e))),t=void 0)}return n}function mo(e){return"__ln"in e}class fo{constructor(){this.length=0,this.head=null,this.tail=null}get(e){if(e>=this.length)throw new Error("Position outside of list range")
let t=this.head
for(let n=0;n<e;n++)t=ho([t,"optionalAccess",e=>e.next])||null
return t}addNode(e){const t={value:e,previous:null,next:null}
if(e.__ln=t,e.previousSibling&&mo(e.previousSibling)){const n=e.previousSibling.__ln.next
t.next=n,t.previous=e.previousSibling.__ln,e.previousSibling.__ln.next=t,n&&(n.previous=t)}else if(e.nextSibling&&mo(e.nextSibling)&&e.nextSibling.__ln.previous){const n=e.nextSibling.__ln.previous
t.previous=n,t.next=e.nextSibling.__ln,e.nextSibling.__ln.previous=t,n&&(n.next=t)}else this.head&&(this.head.previous=t),t.next=this.head,this.head=t
null===t.next&&(this.tail=t),this.length++}removeNode(e){const t=e.__ln
this.head&&(t.previous?(t.previous.next=t.next,t.next?t.next.previous=t.previous:this.tail=t.previous):(this.head=t.next,this.head?this.head.previous=null:this.tail=null),e.__ln&&delete e.__ln,this.length--)}}const go=(e,t)=>`${e}@${t}`
class yo{constructor(){this.frozen=!1,this.locked=!1,this.texts=[],this.attributes=[],this.removes=[],this.mapRemoves=[],this.movedMap={},this.addedSet=new Set,this.movedSet=new Set,this.droppedSet=new Set,this.processMutations=e=>{e.forEach(this.processMutation),this.emit()},this.emit=()=>{if(this.frozen||this.locked)return
const e=[],t=new Set,n=new fo,r=e=>{let t=e,n=bs
for(;n===bs;)t=t&&t.nextSibling,n=t&&this.mirror.getId(t)
return n},s=s=>{if(!s.parentNode||!ao(s))return
const o=is(s.parentNode)?this.mirror.getId(io(s)):this.mirror.getId(s.parentNode),i=r(s)
if(-1===o||-1===i)return n.addNode(s)
const a=Fs(s,{doc:this.doc,mirror:this.mirror,blockClass:this.blockClass,blockSelector:this.blockSelector,maskAllText:this.maskAllText,unblockSelector:this.unblockSelector,maskTextClass:this.maskTextClass,unmaskTextClass:this.unmaskTextClass,maskTextSelector:this.maskTextSelector,unmaskTextSelector:this.unmaskTextSelector,skipChild:!0,newlyAddedElement:!0,inlineStylesheet:this.inlineStylesheet,maskInputOptions:this.maskInputOptions,maskAttributeFn:this.maskAttributeFn,maskTextFn:this.maskTextFn,maskInputFn:this.maskInputFn,slimDOMOptions:this.slimDOMOptions,dataURLOptions:this.dataURLOptions,recordCanvas:this.recordCanvas,inlineImages:this.inlineImages,onSerialize:e=>{no(e,this.mirror)&&this.iframeManager.addIframe(e),ro(e,this.mirror)&&this.stylesheetManager.trackLinkElement(e),so(s)&&this.shadowDomManager.addShadowRoot(s.shadowRoot,this.doc)},onIframeLoad:(e,t)=>{this.iframeManager.attachIframe(e,t),this.shadowDomManager.observeAttachShadow(e)},onStylesheetLoad:(e,t)=>{this.stylesheetManager.attachLinkElement(e,t)}})
a&&(e.push({parentId:o,nextId:i,node:a}),t.add(a.id))}
for(;this.mapRemoves.length;)this.mirror.removeNodeFromMap(this.mapRemoves.shift())
for(const a of this.movedSet)vo(this.removes,a,this.mirror)&&!this.movedSet.has(a.parentNode)||s(a)
for(const a of this.addedSet)So(this.droppedSet,a)||vo(this.removes,a,this.mirror)?So(this.movedSet,a)?s(a):this.droppedSet.add(a):s(a)
let o=null
for(;n.length;){let e=null
if(o){const t=this.mirror.getId(o.value.parentNode),n=r(o.value);-1!==t&&-1!==n&&(e=o)}if(!e){let t=n.tail
for(;t;){const n=t
if(t=t.previous,n){const t=this.mirror.getId(n.value.parentNode)
if(-1===r(n.value))continue
if(-1!==t){e=n
break}{const t=n.value
if(t.parentNode&&t.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE){const r=t.parentNode.host
if(-1!==this.mirror.getId(r)){e=n
break}}}}}}if(!e){for(;n.head;)n.removeNode(n.head.value)
break}o=e.previous,n.removeNode(e.value),s(e.value)}const i={texts:this.texts.map((e=>({id:this.mirror.getId(e.node),value:e.value}))).filter((e=>!t.has(e.id))).filter((e=>this.mirror.has(e.id))),attributes:this.attributes.map((e=>{const{attributes:t}=e
if("string"==typeof t.style){const n=JSON.stringify(e.styleDiff),r=JSON.stringify(e._unchangedStyles)
n.length<t.style.length&&(n+r).split("var(").length===t.style.split("var(").length&&(t.style=e.styleDiff)}return{id:this.mirror.getId(e.node),attributes:t}})).filter((e=>!t.has(e.id))).filter((e=>this.mirror.has(e.id))),removes:this.removes,adds:e};(i.texts.length||i.attributes.length||i.removes.length||i.adds.length)&&(this.texts=[],this.attributes=[],this.removes=[],this.addedSet=new Set,this.movedSet=new Set,this.droppedSet=new Set,this.movedMap={},this.mutationCb(i))},this.processMutation=e=>{if(Qs(e.target,this.mirror))return
let t
try{t=document.implementation.createHTMLDocument()}catch(e){t=this.doc}switch(e.type){case"characterData":{const t=e.target.textContent
Zs(e.target,this.blockClass,this.blockSelector,this.unblockSelector,!1)||t===e.oldValue||this.texts.push({value:Ps(e.target,this.maskTextClass,this.maskTextSelector,this.unmaskTextClass,this.unmaskTextSelector,this.maskAllText)&&t?this.maskTextFn?this.maskTextFn(t):t.replace(/[\S]/g,"*"):t,node:e.target})
break}case"attributes":{const n=e.target
let r=e.attributeName,s=e.target.getAttribute(r)
if("value"===r){const t=gs(n),r=n.tagName
s=ys(n,r,t)
const o=ds({maskInputOptions:this.maskInputOptions,tagName:r,type:t})
s=ps({isMasked:Ps(e.target,this.maskTextClass,this.maskTextSelector,this.unmaskTextClass,this.unmaskTextSelector,o),element:n,value:s,maskInputFn:this.maskInputFn})}if(Zs(e.target,this.blockClass,this.blockSelector,this.unblockSelector,!1)||s===e.oldValue)return
let o=this.attributes.find((t=>t.node===e.target))
if("IFRAME"===n.tagName&&"src"===r&&!this.keepIframeSrcFn(s)){if(n.contentDocument)return
r="rr_src"}if(o||(o={node:e.target,attributes:{},styleDiff:{},_unchangedStyles:{}},this.attributes.push(o)),"type"===r&&"INPUT"===n.tagName&&"password"===(e.oldValue||"").toLowerCase()&&n.setAttribute("data-rr-is-password","true"),!Ls(n.tagName,r)&&(o.attributes[r]=Ds(this.doc,hs(n.tagName),hs(r),s,n,this.maskAttributeFn),"style"===r)){const r=t.createElement("span")
e.oldValue&&r.setAttribute("style",e.oldValue)
for(const e of Array.from(n.style)){const t=n.style.getPropertyValue(e),s=n.style.getPropertyPriority(e)
t!==r.style.getPropertyValue(e)||s!==r.style.getPropertyPriority(e)?o.styleDiff[e]=""===s?t:[t,s]:o._unchangedStyles[e]=[t,s]}for(const e of Array.from(r.style))""===n.style.getPropertyValue(e)&&(o.styleDiff[e]=!1)}break}case"childList":if(Zs(e.target,this.blockClass,this.blockSelector,this.unblockSelector,!0))return
e.addedNodes.forEach((t=>this.genAdds(t,e.target))),e.removedNodes.forEach((t=>{const n=this.mirror.getId(t),r=is(e.target)?this.mirror.getId(e.target.host):this.mirror.getId(e.target)
Zs(e.target,this.blockClass,this.blockSelector,this.unblockSelector,!1)||Qs(t,this.mirror)||!function(e,t){return-1!==t.getId(e)}(t,this.mirror)||(this.addedSet.has(t)?(_o(this.addedSet,t),this.droppedSet.add(t)):this.addedSet.has(e.target)&&-1===n||eo(e.target,this.mirror)||(this.movedSet.has(t)&&this.movedMap[go(n,r)]?_o(this.movedSet,t):this.removes.push({parentId:r,id:n,isShadow:!(!is(e.target)||!as(e.target))||void 0})),this.mapRemoves.push(t))}))}},this.genAdds=(e,t)=>{if(!this.processedNodeManager.inOtherBuffer(e,this)&&!this.addedSet.has(e)&&!this.movedSet.has(e)){if(this.mirror.hasNode(e)){if(Qs(e,this.mirror))return
this.movedSet.add(e)
let n=null
t&&this.mirror.hasNode(t)&&(n=this.mirror.getId(t)),n&&-1!==n&&(this.movedMap[go(this.mirror.getId(e),n)]=!0)}else this.addedSet.add(e),this.droppedSet.delete(e)
Zs(e,this.blockClass,this.blockSelector,this.unblockSelector,!1)||(e.childNodes.forEach((e=>this.genAdds(e))),so(e)&&e.shadowRoot.childNodes.forEach((t=>{this.processedNodeManager.add(t,this),this.genAdds(t,e)})))}}}init(e){["mutationCb","blockClass","blockSelector","unblockSelector","maskAllText","maskTextClass","unmaskTextClass","maskTextSelector","unmaskTextSelector","inlineStylesheet","maskInputOptions","maskAttributeFn","maskTextFn","maskInputFn","keepIframeSrcFn","recordCanvas","inlineImages","slimDOMOptions","dataURLOptions","doc","mirror","iframeManager","stylesheetManager","shadowDomManager","canvasManager","processedNodeManager"].forEach((t=>{this[t]=e[t]}))}freeze(){this.frozen=!0,this.canvasManager.freeze()}unfreeze(){this.frozen=!1,this.canvasManager.unfreeze(),this.emit()}isFrozen(){return this.frozen}lock(){this.locked=!0,this.canvasManager.lock()}unlock(){this.locked=!1,this.canvasManager.unlock(),this.emit()}reset(){this.shadowDomManager.reset(),this.canvasManager.reset()}}function _o(e,t){e.delete(t),t.childNodes.forEach((t=>_o(e,t)))}function vo(e,t,n){return 0!==e.length&&bo(e,t,n)}function bo(e,t,n){const{parentNode:r}=t
if(!r)return!1
const s=n.getId(r)
return!!e.some((e=>e.id===s))||bo(e,r,n)}function So(e,t){return 0!==e.size&&ko(e,t)}function ko(e,t){const{parentNode:n}=t
return!!n&&(!!e.has(n)||ko(e,n))}let wo
const Eo=e=>wo?(...t)=>{try{return e(...t)}catch(e){if(wo&&!0===wo(e))return()=>{}
throw e}}:e
function xo(e){let t,n=e[0],r=1
for(;r<e.length;){const s=e[r],o=e[r+1]
if(r+=2,("optionalAccess"===s||"optionalCall"===s)&&null==n)return
"access"===s||"optionalAccess"===s?(t=n,n=o(n)):"call"!==s&&"optionalCall"!==s||(n=o(((...e)=>n.call(t,...e))),t=void 0)}return n}const To=[]
function Co(e){try{if("composedPath"in e){const t=e.composedPath()
if(t.length)return t[0]}else if("path"in e&&e.path.length)return e.path[0]}catch(e){}return e&&e.target}function Io(e,t){const n=new yo
To.push(n),n.init(e)
let r=window.MutationObserver||window.__rrMutationObserver
const s=xo([window,"optionalAccess",e=>e.Zone,"optionalAccess",e=>e.__symbol__,"optionalCall",e=>e("MutationObserver")])
s&&window[s]&&(r=window[s])
const o=new r(Eo((t=>{e.onMutation&&!1===e.onMutation(t)||n.processMutations.bind(n)(t)})))
return o.observe(t,{attributes:!0,attributeOldValue:!0,characterData:!0,characterDataOldValue:!0,childList:!0,subtree:!0}),o}function Ro({scrollCb:e,doc:t,mirror:n,blockClass:r,blockSelector:s,unblockSelector:o,sampling:i}){return js("scroll",Eo(qs(Eo((i=>{const a=Co(i)
if(!a||Zs(a,r,s,o,!0))return
const c=n.getId(a)
if(a===t&&t.defaultView){const n=Vs(t.defaultView)
e({id:c,x:n.left,y:n.top})}else e({id:c,x:a.scrollLeft,y:a.scrollTop})})),i.scroll||100)),t)}const Oo=["INPUT","TEXTAREA","SELECT"],Mo=new WeakMap
function Ao({inputCb:e,doc:t,mirror:n,blockClass:r,blockSelector:s,unblockSelector:o,ignoreClass:i,ignoreSelector:a,maskInputOptions:c,maskInputFn:l,sampling:u,userTriggeredOnInput:d,maskTextClass:p,unmaskTextClass:h,maskTextSelector:m,unmaskTextSelector:f}){function g(e){let n=Co(e)
const u=e.isTrusted,g=n&&ms(n.tagName)
if("OPTION"===g&&(n=n.parentElement),!n||!g||Oo.indexOf(g)<0||Zs(n,r,s,o,!0))return
const _=n
if(_.classList.contains(i)||a&&_.matches(a))return
const v=gs(n)
let b=ys(_,g,v),S=!1
const k=ds({maskInputOptions:c,tagName:g,type:v}),w=Ps(n,p,m,h,f,k)
"radio"!==v&&"checkbox"!==v||(S=n.checked),b=ps({isMasked:w,element:n,value:b,maskInputFn:l}),y(n,d?{text:b,isChecked:S,userTriggered:u}:{text:b,isChecked:S})
const E=n.name
"radio"===v&&E&&S&&t.querySelectorAll(`input[type="radio"][name="${E}"]`).forEach((e=>{if(e!==n){const t=ps({isMasked:w,element:e,value:ys(e,g,v),maskInputFn:l})
y(e,d?{text:t,isChecked:!S,userTriggered:!1}:{text:t,isChecked:!S})}}))}function y(t,r){const s=Mo.get(t)
if(!s||s.text!==r.text||s.isChecked!==r.isChecked){Mo.set(t,r)
const s=n.getId(t)
Eo(e)({...r,id:s})}}const _=("last"===u.input?["change"]:["input","change"]).map((e=>js(e,Eo(g),t))),v=t.defaultView
if(!v)return()=>{_.forEach((e=>e()))}
const b=v.Object.getOwnPropertyDescriptor(v.HTMLInputElement.prototype,"value"),S=[[v.HTMLInputElement.prototype,"value"],[v.HTMLInputElement.prototype,"checked"],[v.HTMLSelectElement.prototype,"value"],[v.HTMLTextAreaElement.prototype,"value"],[v.HTMLSelectElement.prototype,"selectedIndex"],[v.HTMLOptionElement.prototype,"selected"]]
return b&&b.set&&_.push(...S.map((e=>Ws(e[0],e[1],{set(){Eo(g)({target:this,isTrusted:!1})}},!1,v)))),Eo((()=>{_.forEach((e=>e()))}))}function Do(e){return function(e,t){if(Po("CSSGroupingRule")&&e.parentRule instanceof CSSGroupingRule||Po("CSSMediaRule")&&e.parentRule instanceof CSSMediaRule||Po("CSSSupportsRule")&&e.parentRule instanceof CSSSupportsRule||Po("CSSConditionRule")&&e.parentRule instanceof CSSConditionRule){const n=Array.from(e.parentRule.cssRules).indexOf(e)
t.unshift(n)}else if(e.parentStyleSheet){const n=Array.from(e.parentStyleSheet.cssRules).indexOf(e)
t.unshift(n)}return t}(e,[])}function Lo(e,t,n){let r,s
return e?(e.ownerNode?r=t.getId(e.ownerNode):s=n.getId(e),{styleId:s,id:r}):{}}function No({mirror:e,stylesheetManager:t},n){let r=null
r="#document"===n.nodeName?e.getId(n):e.getId(n.host)
const s="#document"===n.nodeName?xo([n,"access",e=>e.defaultView,"optionalAccess",e=>e.Document]):xo([n,"access",e=>e.ownerDocument,"optionalAccess",e=>e.defaultView,"optionalAccess",e=>e.ShadowRoot]),o=xo([s,"optionalAccess",e=>e.prototype])?Object.getOwnPropertyDescriptor(xo([s,"optionalAccess",e=>e.prototype]),"adoptedStyleSheets"):void 0
return null!==r&&-1!==r&&s&&o?(Object.defineProperty(n,"adoptedStyleSheets",{configurable:o.configurable,enumerable:o.enumerable,get(){return xo([o,"access",e=>e.get,"optionalAccess",e=>e.call,"call",e=>e(this)])},set(e){const n=xo([o,"access",e=>e.set,"optionalAccess",e=>e.call,"call",t=>t(this,e)])
if(null!==r&&-1!==r)try{t.adoptStyleSheets(e,r)}catch(e){}return n}}),Eo((()=>{Object.defineProperty(n,"adoptedStyleSheets",{configurable:o.configurable,enumerable:o.enumerable,get:o.get,set:o.set})}))):()=>{}}function $o(e,t={}){const n=e.doc.defaultView
if(!n)return()=>{}
const r=Io(e,e.doc),s=function({mousemoveCb:e,sampling:t,doc:n,mirror:r}){if(!1===t.mousemove)return()=>{}
const s="number"==typeof t.mousemove?t.mousemove:50,o="number"==typeof t.mousemoveCallback?t.mousemoveCallback:500
let i,a=[]
const c=qs(Eo((t=>{const n=Date.now()-i
e(a.map((e=>(e.timeOffset-=n,e))),t),a=[],i=null})),o),l=Eo(qs(Eo((e=>{const t=Co(e),{clientX:n,clientY:s}=to(e)?e.changedTouches[0]:e
i||(i=Ks()),a.push({x:n,y:s,id:r.getId(t),timeOffset:Ks()-i}),c("undefined"!=typeof DragEvent&&e instanceof DragEvent?lo.Drag:e instanceof MouseEvent?lo.MouseMove:lo.TouchMove)})),s,{trailing:!1})),u=[js("mousemove",l,n),js("touchmove",l,n),js("drag",l,n)]
return Eo((()=>{u.forEach((e=>e()))}))}(e),o=function({mouseInteractionCb:e,doc:t,mirror:n,blockClass:r,blockSelector:s,unblockSelector:o,sampling:i}){if(!1===i.mouseInteraction)return()=>{}
const a=!0===i.mouseInteraction||void 0===i.mouseInteraction?{}:i.mouseInteraction,c=[]
let l=null
return Object.keys(uo).filter((e=>Number.isNaN(Number(e))&&!e.endsWith("_Departed")&&!1!==a[e])).forEach((i=>{let a=hs(i)
const u=(t=>i=>{const a=Co(i)
if(Zs(a,r,s,o,!0))return
let c=null,u=t
if("pointerType"in i){switch(i.pointerType){case"mouse":c=po.Mouse
break
case"touch":c=po.Touch
break
case"pen":c=po.Pen}c===po.Touch?uo[t]===uo.MouseDown?u="TouchStart":uo[t]===uo.MouseUp&&(u="TouchEnd"):po.Pen}else to(i)&&(c=po.Touch)
null!==c?(l=c,(u.startsWith("Touch")&&c===po.Touch||u.startsWith("Mouse")&&c===po.Mouse)&&(c=null)):uo[t]===uo.Click&&(c=l,l=null)
const d=to(i)?i.changedTouches[0]:i
if(!d)return
const p=n.getId(a),{clientX:h,clientY:m}=d
Eo(e)({type:uo[u],id:p,x:h,y:m,...null!==c&&{pointerType:c}})})(i)
if(window.PointerEvent)switch(uo[i]){case uo.MouseDown:case uo.MouseUp:a=a.replace("mouse","pointer")
break
case uo.TouchStart:case uo.TouchEnd:return}c.push(js(a,u,t))})),Eo((()=>{c.forEach((e=>e()))}))}(e),i=Ro(e),a=function({viewportResizeCb:e},{win:t}){let n=-1,r=-1
return js("resize",Eo(qs(Eo((()=>{const t=Ys(),s=Xs()
n===t&&r===s||(e({width:Number(s),height:Number(t)}),n=t,r=s)})),200)),t)}(e,{win:n}),c=Ao(e),l=function({mediaInteractionCb:e,blockClass:t,blockSelector:n,unblockSelector:r,mirror:s,sampling:o,doc:i}){const a=Eo((i=>qs(Eo((o=>{const a=Co(o)
if(!a||Zs(a,t,n,r,!0))return
const{currentTime:c,volume:l,muted:u,playbackRate:d}=a
e({type:i,id:s.getId(a),currentTime:c,volume:l,muted:u,playbackRate:d})})),o.media||500))),c=[js("play",a(0),i),js("pause",a(1),i),js("seeked",a(2),i),js("volumechange",a(3),i),js("ratechange",a(4),i)]
return Eo((()=>{c.forEach((e=>e()))}))}(e),u=function({styleSheetRuleCb:e,mirror:t,stylesheetManager:n},{win:r}){if(!r.CSSStyleSheet||!r.CSSStyleSheet.prototype)return()=>{}
const s=r.CSSStyleSheet.prototype.insertRule
r.CSSStyleSheet.prototype.insertRule=new Proxy(s,{apply:Eo(((r,s,o)=>{const[i,a]=o,{id:c,styleId:l}=Lo(s,t,n.styleMirror)
return(c&&-1!==c||l&&-1!==l)&&e({id:c,styleId:l,adds:[{rule:i,index:a}]}),r.apply(s,o)}))})
const o=r.CSSStyleSheet.prototype.deleteRule
let i,a
r.CSSStyleSheet.prototype.deleteRule=new Proxy(o,{apply:Eo(((r,s,o)=>{const[i]=o,{id:a,styleId:c}=Lo(s,t,n.styleMirror)
return(a&&-1!==a||c&&-1!==c)&&e({id:a,styleId:c,removes:[{index:i}]}),r.apply(s,o)}))}),r.CSSStyleSheet.prototype.replace&&(i=r.CSSStyleSheet.prototype.replace,r.CSSStyleSheet.prototype.replace=new Proxy(i,{apply:Eo(((r,s,o)=>{const[i]=o,{id:a,styleId:c}=Lo(s,t,n.styleMirror)
return(a&&-1!==a||c&&-1!==c)&&e({id:a,styleId:c,replace:i}),r.apply(s,o)}))})),r.CSSStyleSheet.prototype.replaceSync&&(a=r.CSSStyleSheet.prototype.replaceSync,r.CSSStyleSheet.prototype.replaceSync=new Proxy(a,{apply:Eo(((r,s,o)=>{const[i]=o,{id:a,styleId:c}=Lo(s,t,n.styleMirror)
return(a&&-1!==a||c&&-1!==c)&&e({id:a,styleId:c,replaceSync:i}),r.apply(s,o)}))}))
const c={}
Bo("CSSGroupingRule")?c.CSSGroupingRule=r.CSSGroupingRule:(Bo("CSSMediaRule")&&(c.CSSMediaRule=r.CSSMediaRule),Bo("CSSConditionRule")&&(c.CSSConditionRule=r.CSSConditionRule),Bo("CSSSupportsRule")&&(c.CSSSupportsRule=r.CSSSupportsRule))
const l={}
return Object.entries(c).forEach((([r,s])=>{l[r]={insertRule:s.prototype.insertRule,deleteRule:s.prototype.deleteRule},s.prototype.insertRule=new Proxy(l[r].insertRule,{apply:Eo(((r,s,o)=>{const[i,a]=o,{id:c,styleId:l}=Lo(s.parentStyleSheet,t,n.styleMirror)
return(c&&-1!==c||l&&-1!==l)&&e({id:c,styleId:l,adds:[{rule:i,index:[...Do(s),a||0]}]}),r.apply(s,o)}))}),s.prototype.deleteRule=new Proxy(l[r].deleteRule,{apply:Eo(((r,s,o)=>{const[i]=o,{id:a,styleId:c}=Lo(s.parentStyleSheet,t,n.styleMirror)
return(a&&-1!==a||c&&-1!==c)&&e({id:a,styleId:c,removes:[{index:[...Do(s),i]}]}),r.apply(s,o)}))})})),Eo((()=>{r.CSSStyleSheet.prototype.insertRule=s,r.CSSStyleSheet.prototype.deleteRule=o,i&&(r.CSSStyleSheet.prototype.replace=i),a&&(r.CSSStyleSheet.prototype.replaceSync=a),Object.entries(c).forEach((([e,t])=>{t.prototype.insertRule=l[e].insertRule,t.prototype.deleteRule=l[e].deleteRule}))}))}(e,{win:n}),d=No(e,e.doc),p=function({styleDeclarationCb:e,mirror:t,ignoreCSSAttributes:n,stylesheetManager:r},{win:s}){const o=s.CSSStyleDeclaration.prototype.setProperty
s.CSSStyleDeclaration.prototype.setProperty=new Proxy(o,{apply:Eo(((s,i,a)=>{const[c,l,u]=a
if(n.has(c))return o.apply(i,[c,l,u])
const{id:d,styleId:p}=Lo(xo([i,"access",e=>e.parentRule,"optionalAccess",e=>e.parentStyleSheet]),t,r.styleMirror)
return(d&&-1!==d||p&&-1!==p)&&e({id:d,styleId:p,set:{property:c,value:l,priority:u},index:Do(i.parentRule)}),s.apply(i,a)}))})
const i=s.CSSStyleDeclaration.prototype.removeProperty
return s.CSSStyleDeclaration.prototype.removeProperty=new Proxy(i,{apply:Eo(((s,o,a)=>{const[c]=a
if(n.has(c))return i.apply(o,[c])
const{id:l,styleId:u}=Lo(xo([o,"access",e=>e.parentRule,"optionalAccess",e=>e.parentStyleSheet]),t,r.styleMirror)
return(l&&-1!==l||u&&-1!==u)&&e({id:l,styleId:u,remove:{property:c},index:Do(o.parentRule)}),s.apply(o,a)}))}),Eo((()=>{s.CSSStyleDeclaration.prototype.setProperty=o,s.CSSStyleDeclaration.prototype.removeProperty=i}))}(e,{win:n}),h=e.collectFonts?function({fontCb:e,doc:t}){const n=t.defaultView
if(!n)return()=>{}
const r=[],s=new WeakMap,o=n.FontFace
n.FontFace=function(e,t,n){const r=new o(e,t,n)
return s.set(r,{family:e,buffer:"string"!=typeof t,descriptors:n,fontSource:"string"==typeof t?t:JSON.stringify(Array.from(new Uint8Array(t)))}),r}
const i=Gs(t.fonts,"add",(function(t){return function(n){return setTimeout(Eo((()=>{const t=s.get(n)
t&&(e(t),s.delete(n))})),0),t.apply(this,[n])}}))
return r.push((()=>{n.FontFace=o})),r.push(i),Eo((()=>{r.forEach((e=>e()))}))}(e):()=>{},m=function(e){const{doc:t,mirror:n,blockClass:r,blockSelector:s,unblockSelector:o,selectionCb:i}=e
let a=!0
const c=Eo((()=>{const e=t.getSelection()
if(!e||a&&xo([e,"optionalAccess",e=>e.isCollapsed]))return
a=e.isCollapsed||!1
const c=[],l=e.rangeCount||0
for(let t=0;t<l;t++){const i=e.getRangeAt(t),{startContainer:a,startOffset:l,endContainer:u,endOffset:d}=i
Zs(a,r,s,o,!0)||Zs(u,r,s,o,!0)||c.push({start:n.getId(a),startOffset:l,end:n.getId(u),endOffset:d})}i({ranges:c})}))
return c(),js("selectionchange",c)}(e),f=function({doc:e,customElementCb:t}){const n=e.defaultView
return n&&n.customElements?Gs(n.customElements,"define",(function(e){return function(n,r,s){try{t({define:{name:n}})}catch(e){}return e.apply(this,[n,r,s])}})):()=>{}}(e),g=[]
for(const y of e.plugins)g.push(y.observer(y.callback,n,y.options))
return Eo((()=>{To.forEach((e=>e.reset())),r.disconnect(),s(),o(),i(),a(),c(),l(),u(),d(),p(),h(),m(),f(),g.forEach((e=>e()))}))}function Po(e){return void 0!==window[e]}function Bo(e){return Boolean(void 0!==window[e]&&window[e].prototype&&"insertRule"in window[e].prototype&&"deleteRule"in window[e].prototype)}class Fo{constructor(e){this.generateIdFn=e,this.iframeIdToRemoteIdMap=new WeakMap,this.iframeRemoteIdToIdMap=new WeakMap}getId(e,t,n,r){const s=n||this.getIdToRemoteIdMap(e),o=r||this.getRemoteIdToIdMap(e)
let i=s.get(t)
return i||(i=this.generateIdFn(),s.set(t,i),o.set(i,t)),i}getIds(e,t){const n=this.getIdToRemoteIdMap(e),r=this.getRemoteIdToIdMap(e)
return t.map((t=>this.getId(e,t,n,r)))}getRemoteId(e,t,n){const r=n||this.getRemoteIdToIdMap(e)
return"number"!=typeof t?t:r.get(t)||-1}getRemoteIds(e,t){const n=this.getRemoteIdToIdMap(e)
return t.map((t=>this.getRemoteId(e,t,n)))}reset(e){if(!e)return this.iframeIdToRemoteIdMap=new WeakMap,void(this.iframeRemoteIdToIdMap=new WeakMap)
this.iframeIdToRemoteIdMap.delete(e),this.iframeRemoteIdToIdMap.delete(e)}getIdToRemoteIdMap(e){let t=this.iframeIdToRemoteIdMap.get(e)
return t||(t=new Map,this.iframeIdToRemoteIdMap.set(e,t)),t}getRemoteIdToIdMap(e){let t=this.iframeRemoteIdToIdMap.get(e)
return t||(t=new Map,this.iframeRemoteIdToIdMap.set(e,t)),t}}function Uo(e){let t,n=e[0],r=1
for(;r<e.length;){const s=e[r],o=e[r+1]
if(r+=2,("optionalAccess"===s||"optionalCall"===s)&&null==n)return
"access"===s||"optionalAccess"===s?(t=n,n=o(n)):"call"!==s&&"optionalCall"!==s||(n=o(((...e)=>n.call(t,...e))),t=void 0)}return n}class jo{constructor(){this.crossOriginIframeMirror=new Fo(Ss),this.crossOriginIframeRootIdMap=new WeakMap}addIframe(){}addLoadListener(){}attachIframe(){}}class Ho{constructor(e){this.iframes=new WeakMap,this.crossOriginIframeMap=new WeakMap,this.crossOriginIframeMirror=new Fo(Ss),this.crossOriginIframeRootIdMap=new WeakMap,this.mutationCb=e.mutationCb,this.wrappedEmit=e.wrappedEmit,this.stylesheetManager=e.stylesheetManager,this.recordCrossOriginIframes=e.recordCrossOriginIframes,this.crossOriginIframeStyleMirror=new Fo(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)),this.mirror=e.mirror,this.recordCrossOriginIframes&&window.addEventListener("message",this.handleMessage.bind(this))}addIframe(e){this.iframes.set(e,!0),e.contentWindow&&this.crossOriginIframeMap.set(e.contentWindow,e)}addLoadListener(e){this.loadListener=e}attachIframe(e,t){this.mutationCb({adds:[{parentId:this.mirror.getId(e),nextId:null,node:t}],removes:[],texts:[],attributes:[],isAttachIframe:!0}),Uo([this,"access",e=>e.loadListener,"optionalCall",t=>t(e)]),e.contentDocument&&e.contentDocument.adoptedStyleSheets&&e.contentDocument.adoptedStyleSheets.length>0&&this.stylesheetManager.adoptStyleSheets(e.contentDocument.adoptedStyleSheets,this.mirror.getId(e.contentDocument))}handleMessage(e){const t=e
if("rrweb"!==t.data.type||t.origin!==t.data.origin)return
if(!e.source)return
const n=this.crossOriginIframeMap.get(e.source)
if(!n)return
const r=this.transformCrossOriginEvent(n,t.data.event)
r&&this.wrappedEmit(r,t.data.isCheckout)}transformCrossOriginEvent(e,t){switch(t.type){case co.FullSnapshot:{this.crossOriginIframeMirror.reset(e),this.crossOriginIframeStyleMirror.reset(e),this.replaceIdOnNode(t.data.node,e)
const n=t.data.node.id
return this.crossOriginIframeRootIdMap.set(e,n),this.patchRootIdOnNode(t.data.node,n),{timestamp:t.timestamp,type:co.IncrementalSnapshot,data:{source:lo.Mutation,adds:[{parentId:this.mirror.getId(e),nextId:null,node:t.data.node}],removes:[],texts:[],attributes:[],isAttachIframe:!0}}}case co.Meta:case co.Load:case co.DomContentLoaded:return!1
case co.Plugin:return t
case co.Custom:return this.replaceIds(t.data.payload,e,["id","parentId","previousId","nextId"]),t
case co.IncrementalSnapshot:switch(t.data.source){case lo.Mutation:return t.data.adds.forEach((t=>{this.replaceIds(t,e,["parentId","nextId","previousId"]),this.replaceIdOnNode(t.node,e)
const n=this.crossOriginIframeRootIdMap.get(e)
n&&this.patchRootIdOnNode(t.node,n)})),t.data.removes.forEach((t=>{this.replaceIds(t,e,["parentId","id"])})),t.data.attributes.forEach((t=>{this.replaceIds(t,e,["id"])})),t.data.texts.forEach((t=>{this.replaceIds(t,e,["id"])})),t
case lo.Drag:case lo.TouchMove:case lo.MouseMove:return t.data.positions.forEach((t=>{this.replaceIds(t,e,["id"])})),t
case lo.ViewportResize:return!1
case lo.MediaInteraction:case lo.MouseInteraction:case lo.Scroll:case lo.CanvasMutation:case lo.Input:return this.replaceIds(t.data,e,["id"]),t
case lo.StyleSheetRule:case lo.StyleDeclaration:return this.replaceIds(t.data,e,["id"]),this.replaceStyleIds(t.data,e,["styleId"]),t
case lo.Font:return t
case lo.Selection:return t.data.ranges.forEach((t=>{this.replaceIds(t,e,["start","end"])})),t
case lo.AdoptedStyleSheet:return this.replaceIds(t.data,e,["id"]),this.replaceStyleIds(t.data,e,["styleIds"]),Uo([t,"access",e=>e.data,"access",e=>e.styles,"optionalAccess",e=>e.forEach,"call",t=>t((t=>{this.replaceStyleIds(t,e,["styleId"])}))]),t}}return!1}replace(e,t,n,r){for(const s of r)(Array.isArray(t[s])||"number"==typeof t[s])&&(Array.isArray(t[s])?t[s]=e.getIds(n,t[s]):t[s]=e.getId(n,t[s]))
return t}replaceIds(e,t,n){return this.replace(this.crossOriginIframeMirror,e,t,n)}replaceStyleIds(e,t,n){return this.replace(this.crossOriginIframeStyleMirror,e,t,n)}replaceIdOnNode(e,t){this.replaceIds(e,t,["id","rootId"]),"childNodes"in e&&e.childNodes.forEach((e=>{this.replaceIdOnNode(e,t)}))}patchRootIdOnNode(e,t){e.type===os.Document||e.rootId||(e.rootId=t),"childNodes"in e&&e.childNodes.forEach((e=>{this.patchRootIdOnNode(e,t)}))}}class zo{init(){}addShadowRoot(){}observeAttachShadow(){}reset(){}}class qo{constructor(e){this.shadowDoms=new WeakSet,this.restoreHandlers=[],this.mutationCb=e.mutationCb,this.scrollCb=e.scrollCb,this.bypassOptions=e.bypassOptions,this.mirror=e.mirror,this.init()}init(){this.reset(),this.patchAttachShadow(Element,document)}addShadowRoot(e,t){if(!as(e))return
if(this.shadowDoms.has(e))return
this.shadowDoms.add(e)
const n=Io({...this.bypassOptions,doc:t,mutationCb:this.mutationCb,mirror:this.mirror,shadowDomManager:this},e)
this.restoreHandlers.push((()=>n.disconnect())),this.restoreHandlers.push(Ro({...this.bypassOptions,scrollCb:this.scrollCb,doc:e,mirror:this.mirror})),setTimeout((()=>{e.adoptedStyleSheets&&e.adoptedStyleSheets.length>0&&this.bypassOptions.stylesheetManager.adoptStyleSheets(e.adoptedStyleSheets,this.mirror.getId(e.host)),this.restoreHandlers.push(No({mirror:this.mirror,stylesheetManager:this.bypassOptions.stylesheetManager},e))}),0)}observeAttachShadow(e){e.contentWindow&&e.contentDocument&&this.patchAttachShadow(e.contentWindow.Element,e.contentDocument)}patchAttachShadow(e,t){const n=this
this.restoreHandlers.push(Gs(e.prototype,"attachShadow",(function(e){return function(r){const s=e.call(this,r)
return this.shadowRoot&&ao(this)&&n.addShadowRoot(this.shadowRoot,t),s}})))}reset(){this.restoreHandlers.forEach((e=>{try{e()}catch(e){}})),this.restoreHandlers=[],this.shadowDoms=new WeakSet}}class Wo{reset(){}freeze(){}unfreeze(){}lock(){}unlock(){}}class Go{constructor(e){this.trackedLinkElements=new WeakSet,this.styleMirror=new oo,this.mutationCb=e.mutationCb,this.adoptedStyleSheetCb=e.adoptedStyleSheetCb}attachLinkElement(e,t){"_cssText"in t.attributes&&this.mutationCb({adds:[],removes:[],texts:[],attributes:[{id:t.id,attributes:t.attributes}]}),this.trackLinkElement(e)}trackLinkElement(e){this.trackedLinkElements.has(e)||(this.trackedLinkElements.add(e),this.trackStylesheetInLinkElement(e))}adoptStyleSheets(e,t){if(0===e.length)return
const n={id:t,styleIds:[]},r=[]
for(const s of e){let e
this.styleMirror.has(s)?e=this.styleMirror.getId(s):(e=this.styleMirror.add(s),r.push({styleId:e,rules:Array.from(s.rules||CSSRule,((e,t)=>({rule:ls(e),index:t})))})),n.styleIds.push(e)}r.length>0&&(n.styles=r),this.adoptedStyleSheetCb(n)}reset(){this.styleMirror.reset(),this.trackedLinkElements=new WeakSet}trackStylesheetInLinkElement(e){}}class Jo{constructor(){this.nodeMap=new WeakMap,this.loop=!0,this.periodicallyClear()}periodicallyClear(){!function(...e){(function(){if(Js)return Js
const e=window.document
let t=window.requestAnimationFrame
if(e&&"function"==typeof e.createElement)try{const n=e.createElement("iframe")
n.hidden=!0,e.head.appendChild(n)
const r=n.contentWindow
r&&r.requestAnimationFrame&&(t=r.requestAnimationFrame),e.head.removeChild(n)}catch(e){}return Js=t.bind(window)})()(...e)}((()=>{this.clear(),this.loop&&this.periodicallyClear()}))}inOtherBuffer(e,t){const n=this.nodeMap.get(e)
return n&&Array.from(n).some((e=>e!==t))}add(e,t){this.nodeMap.set(e,(this.nodeMap.get(e)||new Set).add(t))}clear(){this.nodeMap=new WeakMap}destroy(){this.loop=!1}}function Ko(e){const t=e
return t.timestamp=Ks(),t}let Vo,Yo
const Xo=new us
function Zo(e={}){const{emit:t,checkoutEveryNms:n,checkoutEveryNth:r,blockClass:s="rr-block",blockSelector:o=null,unblockSelector:i=null,ignoreClass:a="rr-ignore",ignoreSelector:c=null,maskAllText:l=!1,maskTextClass:u="rr-mask",unmaskTextClass:d=null,maskTextSelector:p=null,unmaskTextSelector:h=null,inlineStylesheet:m=!0,maskAllInputs:f,maskInputOptions:g,slimDOMOptions:y,maskAttributeFn:_,maskInputFn:v,maskTextFn:b,packFn:S,sampling:k={},dataURLOptions:w={},mousemoveWait:E,recordCanvas:x=!1,recordCrossOriginIframes:T=!1,recordAfter:C=("DOMContentLoaded"===e.recordAfter?e.recordAfter:"load"),userTriggeredOnInput:I=!1,collectFonts:R=!1,inlineImages:O=!1,plugins:M,keepIframeSrcFn:A=(()=>!1),ignoreCSSAttributes:D=new Set([]),errorHandler:L,onMutation:N,getCanvasManager:$}=e;(function(e){wo=e})(L)
const P=!T||window.parent===window
let B=!1
if(!P)try{window.parent.document&&(B=!1)}catch(e){B=!0}if(P&&!t)throw new Error("emit function is required")
void 0!==E&&void 0===k.mousemove&&(k.mousemove=E),Xo.reset()
const F=!0===f?{color:!0,date:!0,"datetime-local":!0,email:!0,month:!0,number:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0,textarea:!0,select:!0,radio:!0,checkbox:!0}:void 0!==g?g:{},U=!0===y||"all"===y?{script:!0,comment:!0,headFavicon:!0,headWhitespace:!0,headMetaSocial:!0,headMetaRobots:!0,headMetaHttpEquiv:!0,headMetaVerification:!0,headMetaAuthorship:"all"===y,headMetaDescKeywords:"all"===y}:y||{}
let j
!function(e=window){"NodeList"in e&&!e.NodeList.prototype.forEach&&(e.NodeList.prototype.forEach=Array.prototype.forEach),"DOMTokenList"in e&&!e.DOMTokenList.prototype.forEach&&(e.DOMTokenList.prototype.forEach=Array.prototype.forEach),Node.prototype.contains||(Node.prototype.contains=(...e)=>{let t=e[0]
if(!(0 in e))throw new TypeError("1 argument is required")
do{if(this===t)return!0}while(t=t&&t.parentNode)
return!1})}()
let H=0
const z=e=>{for(const t of M||[])t.eventProcessor&&(e=t.eventProcessor(e))
return S&&!B&&(e=S(e)),e},q=(e,s)=>{if(!(0,br.x)([To,"access",e=>e[0],"optionalAccess",e=>e.isFrozen,"call",e=>e()])||e.type===co.FullSnapshot||e.type===co.IncrementalSnapshot&&e.data.source===lo.Mutation||To.forEach((e=>e.unfreeze())),P)(0,br.x)([t,"optionalCall",t=>t(z(e),s)])
else if(B){const t={type:"rrweb",event:z(e),origin:window.location.origin,isCheckout:s}
window.parent.postMessage(t,"*")}if(e.type===co.FullSnapshot)j=e,H=0
else if(e.type===co.IncrementalSnapshot){if(e.data.source===lo.Mutation&&e.data.isAttachIframe)return
H++
const t=r&&H>=r,s=n&&e.timestamp-j.timestamp>n;(t||s)&&Q(!0)}}
Vo=q
const W=e=>{q(Ko({type:co.IncrementalSnapshot,data:{source:lo.Mutation,...e}}))},G=e=>q(Ko({type:co.IncrementalSnapshot,data:{source:lo.Scroll,...e}})),J=e=>q(Ko({type:co.IncrementalSnapshot,data:{source:lo.CanvasMutation,...e}})),K=new Go({mutationCb:W,adoptedStyleSheetCb:e=>q(Ko({type:co.IncrementalSnapshot,data:{source:lo.AdoptedStyleSheet,...e}}))}),V="boolean"==typeof __RRWEB_EXCLUDE_IFRAME__&&__RRWEB_EXCLUDE_IFRAME__?new jo:new Ho({mirror:Xo,mutationCb:W,stylesheetManager:K,recordCrossOriginIframes:T,wrappedEmit:q})
for(const ee of M||[])ee.getMirror&&ee.getMirror({nodeMirror:Xo,crossOriginIframeMirror:V.crossOriginIframeMirror,crossOriginIframeStyleMirror:V.crossOriginIframeStyleMirror})
const Y=new Jo,X=function(e,t){return e?e({...t,mirror:Xo,win:window,mutationCb:e=>{return t=Ko({type:co.IncrementalSnapshot,data:{source:lo.CanvasMutation,...e}}),void(Vo&&Vo(t))
var t}}):new Wo}($,{recordCanvas:x,blockClass:s,blockSelector:o,unblockSelector:i,sampling:k.canvas,dataURLOptions:w}),Z="boolean"==typeof __RRWEB_EXCLUDE_SHADOW_DOM__&&__RRWEB_EXCLUDE_SHADOW_DOM__?new zo:new qo({mutationCb:W,scrollCb:G,bypassOptions:{onMutation:N,blockClass:s,blockSelector:o,unblockSelector:i,maskAllText:l,maskTextClass:u,unmaskTextClass:d,maskTextSelector:p,unmaskTextSelector:h,inlineStylesheet:m,maskInputOptions:F,dataURLOptions:w,maskAttributeFn:_,maskTextFn:b,maskInputFn:v,recordCanvas:x,inlineImages:O,sampling:k,slimDOMOptions:U,iframeManager:V,stylesheetManager:K,canvasManager:X,keepIframeSrcFn:A,processedNodeManager:Y},mirror:Xo}),Q=(e=!1)=>{q(Ko({type:co.Meta,data:{href:window.location.href,width:Xs(),height:Ys()}}),e),K.reset(),Z.init(),To.forEach((e=>e.lock()))
const t=function(e,t){const{mirror:n=new us,blockClass:r="rr-block",blockSelector:s=null,unblockSelector:o=null,maskAllText:i=!1,maskTextClass:a="rr-mask",unmaskTextClass:c=null,maskTextSelector:l=null,unmaskTextSelector:u=null,inlineStylesheet:d=!0,inlineImages:p=!1,recordCanvas:h=!1,maskAllInputs:m=!1,maskAttributeFn:f,maskTextFn:g,maskInputFn:y,slimDOM:_=!1,dataURLOptions:v,preserveWhiteSpace:b,onSerialize:S,onIframeLoad:k,iframeLoadTimeout:w,onStylesheetLoad:E,stylesheetLoadTimeout:x,keepIframeSrcFn:T=(()=>!1)}=t||{}
return Fs(e,{doc:e,mirror:n,blockClass:r,blockSelector:s,unblockSelector:o,maskAllText:i,maskTextClass:a,unmaskTextClass:c,maskTextSelector:l,unmaskTextSelector:u,skipChild:!1,inlineStylesheet:d,maskInputOptions:!0===m?{color:!0,date:!0,"datetime-local":!0,email:!0,month:!0,number:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0,textarea:!0,select:!0}:!1===m?{}:m,maskAttributeFn:f,maskTextFn:g,maskInputFn:y,slimDOMOptions:!0===_||"all"===_?{script:!0,comment:!0,headFavicon:!0,headWhitespace:!0,headMetaDescKeywords:"all"===_,headMetaSocial:!0,headMetaRobots:!0,headMetaHttpEquiv:!0,headMetaAuthorship:!0,headMetaVerification:!0}:!1===_?{}:_,dataURLOptions:v,inlineImages:p,recordCanvas:h,preserveWhiteSpace:b,onSerialize:S,onIframeLoad:k,iframeLoadTimeout:w,onStylesheetLoad:E,stylesheetLoadTimeout:x,keepIframeSrcFn:T,newlyAddedElement:!1})}(document,{mirror:Xo,blockClass:s,blockSelector:o,unblockSelector:i,maskAllText:l,maskTextClass:u,unmaskTextClass:d,maskTextSelector:p,unmaskTextSelector:h,inlineStylesheet:m,maskAllInputs:F,maskAttributeFn:_,maskInputFn:v,maskTextFn:b,slimDOM:U,dataURLOptions:w,recordCanvas:x,inlineImages:O,onSerialize:e=>{no(e,Xo)&&V.addIframe(e),ro(e,Xo)&&K.trackLinkElement(e),so(e)&&Z.addShadowRoot(e.shadowRoot,document)},onIframeLoad:(e,t)=>{V.attachIframe(e,t),Z.observeAttachShadow(e)},onStylesheetLoad:(e,t)=>{K.attachLinkElement(e,t)},keepIframeSrcFn:A})
if(!t)return console.warn("Failed to snapshot the document")
q(Ko({type:co.FullSnapshot,data:{node:t,initialOffset:Vs(window)}})),To.forEach((e=>e.unlock())),document.adoptedStyleSheets&&document.adoptedStyleSheets.length>0&&K.adoptStyleSheets(document.adoptedStyleSheets,Xo.getId(document))}
Yo=Q
try{const e=[],t=e=>Eo($o)({onMutation:N,mutationCb:W,mousemoveCb:(e,t)=>q(Ko({type:co.IncrementalSnapshot,data:{source:t,positions:e}})),mouseInteractionCb:e=>q(Ko({type:co.IncrementalSnapshot,data:{source:lo.MouseInteraction,...e}})),scrollCb:G,viewportResizeCb:e=>q(Ko({type:co.IncrementalSnapshot,data:{source:lo.ViewportResize,...e}})),inputCb:e=>q(Ko({type:co.IncrementalSnapshot,data:{source:lo.Input,...e}})),mediaInteractionCb:e=>q(Ko({type:co.IncrementalSnapshot,data:{source:lo.MediaInteraction,...e}})),styleSheetRuleCb:e=>q(Ko({type:co.IncrementalSnapshot,data:{source:lo.StyleSheetRule,...e}})),styleDeclarationCb:e=>q(Ko({type:co.IncrementalSnapshot,data:{source:lo.StyleDeclaration,...e}})),canvasMutationCb:J,fontCb:e=>q(Ko({type:co.IncrementalSnapshot,data:{source:lo.Font,...e}})),selectionCb:e=>{q(Ko({type:co.IncrementalSnapshot,data:{source:lo.Selection,...e}}))},customElementCb:e=>{q(Ko({type:co.IncrementalSnapshot,data:{source:lo.CustomElement,...e}}))},blockClass:s,ignoreClass:a,ignoreSelector:c,maskAllText:l,maskTextClass:u,unmaskTextClass:d,maskTextSelector:p,unmaskTextSelector:h,maskInputOptions:F,inlineStylesheet:m,sampling:k,recordCanvas:x,inlineImages:O,userTriggeredOnInput:I,collectFonts:R,doc:e,maskAttributeFn:_,maskInputFn:v,maskTextFn:b,keepIframeSrcFn:A,blockSelector:o,unblockSelector:i,slimDOMOptions:U,dataURLOptions:w,mirror:Xo,iframeManager:V,stylesheetManager:K,shadowDomManager:Z,processedNodeManager:Y,canvasManager:X,ignoreCSSAttributes:D,plugins:(0,br.x)([M,"optionalAccess",e=>e.filter,"call",e=>e((e=>e.observer)),"optionalAccess",e=>e.map,"call",e=>e((e=>({observer:e.observer,options:e.options,callback:t=>q(Ko({type:co.Plugin,data:{plugin:e.name,payload:t}}))})))])||[]},{})
V.addLoadListener((n=>{try{e.push(t(n.contentDocument))}catch(e){console.warn(e)}}))
const n=()=>{Q(),e.push(t(document))}
return"interactive"===document.readyState||"complete"===document.readyState?n():(e.push(js("DOMContentLoaded",(()=>{q(Ko({type:co.DomContentLoaded,data:{}})),"DOMContentLoaded"===C&&n()}))),e.push(js("load",(()=>{q(Ko({type:co.Load,data:{}})),"load"===C&&n()}),window))),()=>{e.forEach((e=>e())),Y.destroy(),Yo=void 0,wo=void 0}}catch(e){console.warn(e)}}Zo.mirror=Xo,Zo.takeFullSnapshot=function(e){if(!Yo)throw new Error("please take full snapshot after start recording")
Yo(e)}
function Qo(e){return e>9999999999?e:1e3*e}function ei(e){return e>9999999999?e/1e3:e}function ti(e,t){"sentry.transaction"!==t.category&&(["ui.click","ui.input"].includes(t.category)?e.triggerUserActivity():e.checkAndHandleExpiredSession(),e.addUpdate((()=>(e.throttledAddEvent({type:co.Custom,timestamp:1e3*(t.timestamp||0),data:{tag:"breadcrumb",payload:(0,J.Fv)(t,10,1e3)}}),"console"===t.category))))}const ni="button,a"
function ri(e){return e.closest(ni)||e}function si(e){const t=oi(e)
return t&&t instanceof Element?ri(t):t}function oi(e){return function(e){return"object"==typeof e&&!!e&&"target"in e}(e)?e.target:e}let ii
class ai{constructor(e,t,n=ti){this._lastMutation=0,this._lastScroll=0,this._clicks=[],this._timeout=t.timeout/1e3,this._threshold=t.threshold/1e3,this._scollTimeout=t.scrollTimeout/1e3,this._replay=e,this._ignoreSelector=t.ignoreSelector,this._addBreadcrumbEvent=n}addListeners(){const e=(t=()=>{this._lastMutation=li()},ii||(ii=[],(0,o.hl)(Xr,"open",(function(e){return function(...t){if(ii)try{ii.forEach((e=>e()))}catch(e){}return e.apply(Xr,t)}}))),ii.push(t),()=>{const e=ii?ii.indexOf(t):-1
e>-1&&ii.splice(e,1)})
var t
this._teardown=()=>{e(),this._clicks=[],this._lastMutation=0,this._lastScroll=0}}removeListeners(){this._teardown&&this._teardown(),this._checkClickTimeout&&clearTimeout(this._checkClickTimeout)}handleClick(e,t){if(function(e,t){return!ci.includes(e.tagName)||"INPUT"===e.tagName&&!["submit","button"].includes(e.getAttribute("type")||"")||!("A"!==e.tagName||!(e.hasAttribute("download")||e.hasAttribute("target")&&"_self"!==e.getAttribute("target")))||!(!t||!e.matches(t))}(t,this._ignoreSelector)||!function(e){return!(!e.data||"number"!=typeof e.data.nodeId||!e.timestamp)}(e))return
const n={timestamp:ei(e.timestamp),clickBreadcrumb:e,clickCount:0,node:t}
this._clicks.some((e=>e.node===n.node&&Math.abs(e.timestamp-n.timestamp)<1))||(this._clicks.push(n),1===this._clicks.length&&this._scheduleCheckClicks())}registerMutation(e=Date.now()){this._lastMutation=ei(e)}registerScroll(e=Date.now()){this._lastScroll=ei(e)}registerClick(e){const t=ri(e)
this._handleMultiClick(t)}_handleMultiClick(e){this._getClicks(e).forEach((e=>{e.clickCount++}))}_getClicks(e){return this._clicks.filter((t=>t.node===e))}_checkClicks(){const e=[],t=li()
this._clicks.forEach((n=>{!n.mutationAfter&&this._lastMutation&&(n.mutationAfter=n.timestamp<=this._lastMutation?this._lastMutation-n.timestamp:void 0),!n.scrollAfter&&this._lastScroll&&(n.scrollAfter=n.timestamp<=this._lastScroll?this._lastScroll-n.timestamp:void 0),n.timestamp+this._timeout<=t&&e.push(n)}))
for(const n of e){const e=this._clicks.indexOf(n)
e>-1&&(this._generateBreadcrumbs(n),this._clicks.splice(e,1))}this._clicks.length&&this._scheduleCheckClicks()}_generateBreadcrumbs(e){const t=this._replay,n=e.scrollAfter&&e.scrollAfter<=this._scollTimeout,r=e.mutationAfter&&e.mutationAfter<=this._threshold,s=!n&&!r,{clickCount:o,clickBreadcrumb:i}=e
if(s){const n=1e3*Math.min(e.mutationAfter||this._timeout,this._timeout),r=n<1e3*this._timeout?"mutation":"timeout",s={type:"default",message:i.message,timestamp:i.timestamp,category:"ui.slowClickDetected",data:{...i.data,url:Xr.location.href,route:t.getCurrentRoute(),timeAfterClickMs:n,endReason:r,clickCount:o||1}}
this._addBreadcrumbEvent(t,s)}else if(o>1){const e={type:"default",message:i.message,timestamp:i.timestamp,category:"ui.multiClick",data:{...i.data,url:Xr.location.href,route:t.getCurrentRoute(),clickCount:o,metric:!0}}
this._addBreadcrumbEvent(t,e)}}_scheduleCheckClicks(){this._checkClickTimeout&&clearTimeout(this._checkClickTimeout),this._checkClickTimeout=setTimeout((()=>this._checkClicks()),1e3)}}const ci=["A","BUTTON","INPUT"]
function li(){return Date.now()/1e3}function ui(e){return{timestamp:Date.now()/1e3,type:"default",...e}}var di
!function(e){e[e.Document=0]="Document",e[e.DocumentType=1]="DocumentType",e[e.Element=2]="Element",e[e.Text=3]="Text",e[e.CDATA=4]="CDATA",e[e.Comment=5]="Comment"}(di||(di={}))
const pi=new Set(["id","class","aria-label","role","name","alt","title","data-test-id","data-testid","disabled","aria-disabled","data-sentry-component"])
function hi(e){const t={}
for(const n in e)if(pi.has(n)){let r=n
"data-testid"!==n&&"data-test-id"!==n||(r="testId"),t[r]=e[n]}return t}function mi(e,t){const n=Zo.mirror.getId(e),r=n&&Zo.mirror.getNode(n),s=r&&Zo.mirror.getMeta(r),o=s&&function(e){return e.type===di.Element}(s)?s:null
return{message:t,data:o?{nodeId:n,node:{id:n,tagName:o.tagName,textContent:Array.from(o.childNodes).map((e=>e.type===di.Text&&e.textContent)).filter(Boolean).map((e=>e.trim())).join(""),attributes:hi(o.attributes)}}:{}}}const fi={resource:function(e){const{entryType:t,initiatorType:n,name:r,responseEnd:s,startTime:o,decodedBodySize:i,encodedBodySize:a,responseStatus:c,transferSize:l}=e
return["fetch","xmlhttprequest"].includes(n)?null:{type:`${t}.${n}`,start:yi(o),end:yi(s),name:r,data:{size:l,statusCode:c,decodedBodySize:i,encodedBodySize:a}}},paint:function(e){const{duration:t,entryType:n,name:r,startTime:s}=e,o=yi(s)
return{type:n,name:r,start:o,end:o+t,data:void 0}},navigation:function(e){const{entryType:t,name:n,decodedBodySize:r,duration:s,domComplete:o,encodedBodySize:i,domContentLoadedEventStart:a,domContentLoadedEventEnd:c,domInteractive:l,loadEventStart:u,loadEventEnd:d,redirectCount:p,startTime:h,transferSize:m,type:f}=e
return 0===s?null:{type:`${t}.${f}`,start:yi(h),end:yi(o),name:n,data:{size:m,decodedBodySize:r,encodedBodySize:i,duration:s,domInteractive:l,domContentLoadedEventStart:a,domContentLoadedEventEnd:c,loadEventStart:u,loadEventEnd:d,domComplete:o,redirectCount:p}}}}
function gi(e){return fi[e.entryType]?fi[e.entryType](e):null}function yi(e){return((g.Z1||Xr.performance.timeOrigin)+e)/1e3}const _i="undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__
function vi(e,t){_i&&(a.kg.info(e),t&&Si(e))}function bi(e,t){_i&&(a.kg.info(e),t&&setTimeout((()=>{Si(e)}),0))}function Si(e){te({category:"console",data:{logger:"replay"},level:"info",message:e},{level:"info"})}class ki extends Error{constructor(){super("Event buffer exceeded maximum size of 20000000.")}}class wi{constructor(){this.events=[],this._totalSize=0,this.hasCheckout=!1}get hasEvents(){return this.events.length>0}get type(){return"sync"}destroy(){this.events=[]}async addEvent(e){const t=JSON.stringify(e).length
if(this._totalSize+=t,this._totalSize>ns)throw new ki
this.events.push(e)}finish(){return new Promise((e=>{const t=this.events
this.clear(),e(JSON.stringify(t))}))}clear(){this.events=[],this._totalSize=0,this.hasCheckout=!1}getEarliestTimestamp(){const e=this.events.map((e=>e.timestamp)).sort()[0]
return e?Qo(e):null}}class Ei{constructor(e){this._worker=e,this._id=0}ensureReady(){return this._ensureReadyPromise||(this._ensureReadyPromise=new Promise(((e,t)=>{this._worker.addEventListener("message",(({data:n})=>{n.success?e():t()}),{once:!0}),this._worker.addEventListener("error",(e=>{t(e)}),{once:!0})}))),this._ensureReadyPromise}destroy(){vi("[Replay] Destroying compression worker"),this._worker.terminate()}postMessage(e,t){const n=this._getAndIncrementId()
return new Promise(((r,s)=>{const o=({data:t})=>{const i=t
if(i.method===e&&i.id===n){if(this._worker.removeEventListener("message",o),!i.success)return _i&&a.kg.error("[Replay]",i.response),void s(new Error("Error in compression worker"))
r(i.response)}}
this._worker.addEventListener("message",o),this._worker.postMessage({id:n,method:e,arg:t})}))}_getAndIncrementId(){return this._id++}}class xi{constructor(e){this._worker=new Ei(e),this._earliestTimestamp=null,this._totalSize=0,this.hasCheckout=!1}get hasEvents(){return!!this._earliestTimestamp}get type(){return"worker"}ensureReady(){return this._worker.ensureReady()}destroy(){this._worker.destroy()}addEvent(e){const t=Qo(e.timestamp);(!this._earliestTimestamp||t<this._earliestTimestamp)&&(this._earliestTimestamp=t)
const n=JSON.stringify(e)
return this._totalSize+=n.length,this._totalSize>ns?Promise.reject(new ki):this._sendEventToWorker(n)}finish(){return this._finishRequest()}clear(){this._earliestTimestamp=null,this._totalSize=0,this.hasCheckout=!1,this._worker.postMessage("clear").then(null,(e=>{_i&&a.kg.warn('[Replay] Sending "clear" message to worker failed',e)}))}getEarliestTimestamp(){return this._earliestTimestamp}_sendEventToWorker(e){return this._worker.postMessage("addEvent",e)}async _finishRequest(){const e=await this._worker.postMessage("finish")
return this._earliestTimestamp=null,this._totalSize=0,e}}class Ti{constructor(e){this._fallback=new wi,this._compression=new xi(e),this._used=this._fallback,this._ensureWorkerIsLoadedPromise=this._ensureWorkerIsLoaded()}get type(){return this._used.type}get hasEvents(){return this._used.hasEvents}get hasCheckout(){return this._used.hasCheckout}set hasCheckout(e){this._used.hasCheckout=e}destroy(){this._fallback.destroy(),this._compression.destroy()}clear(){return this._used.clear()}getEarliestTimestamp(){return this._used.getEarliestTimestamp()}addEvent(e){return this._used.addEvent(e)}async finish(){return await this.ensureWorkerIsLoaded(),this._used.finish()}ensureWorkerIsLoaded(){return this._ensureWorkerIsLoadedPromise}async _ensureWorkerIsLoaded(){try{await this._compression.ensureReady()}catch(e){return void vi("[Replay] Failed to load the compression worker, falling back to simple buffer")}await this._switchToCompressionWorker()}async _switchToCompressionWorker(){const{events:e,hasCheckout:t}=this._fallback,n=[]
for(const r of e)n.push(this._compression.addEvent(r))
this._compression.hasCheckout=t,this._used=this._compression
try{await Promise.all(n)}catch(e){_i&&a.kg.warn("[Replay] Failed to add events when switching buffers.",e)}}}function Ci(){try{return"sessionStorage"in Xr&&!!Xr.sessionStorage}catch(e){return!1}}function Ii(e){return void 0!==e&&Math.random()<e}function Ri(e){const t=Date.now()
return{id:e.id||(0,i.DM)(),started:e.started||t,lastActivity:e.lastActivity||t,segmentId:e.segmentId||0,sampled:e.sampled,previousSessionId:e.previousSessionId}}function Oi(e){if(Ci())try{Xr.sessionStorage.setItem(Zr,JSON.stringify(e))}catch(e){}}function Mi({sessionSampleRate:e,allowBuffering:t,stickySession:n=!1},{previousSessionId:r}={}){const s=function(e,t){return Ii(e)?"session":!!t&&"buffer"}(e,t),o=Ri({sampled:s,previousSessionId:r})
return n&&Oi(o),o}function Ai(e,t,n=+new Date){return null===e||void 0===t||t<0||0!==t&&e+t<=n}function Di(e,{maxReplayDuration:t,sessionIdleExpire:n,targetTime:r=Date.now()}){return Ai(e.started,t,r)||Ai(e.lastActivity,n,r)}function Li(e,{sessionIdleExpire:t,maxReplayDuration:n}){return!!Di(e,{sessionIdleExpire:t,maxReplayDuration:n})&&("buffer"!==e.sampled||0!==e.segmentId)}function Ni({traceInternals:e,sessionIdleExpire:t,maxReplayDuration:n,previousSessionId:r},s){const o=s.stickySession&&function(e){if(!Ci())return null
try{const t=Xr.sessionStorage.getItem(Zr)
if(!t)return null
const n=JSON.parse(t)
return bi("[Replay] Loading existing session",e),Ri(n)}catch(e){return null}}(e)
return o?Li(o,{sessionIdleExpire:t,maxReplayDuration:n})?(bi("[Replay] Session in sessionStorage is expired, creating new one..."),Mi(s,{previousSessionId:o.id})):o:(bi("[Replay] Creating new session",e),Mi(s,{previousSessionId:r}))}function $i(e,t,n){return!!Bi(e,t)&&(Pi(e,t,n),!0)}async function Pi(e,t,n){if(!e.eventBuffer)return null
try{n&&"buffer"===e.recordingMode&&e.eventBuffer.clear(),n&&(e.eventBuffer.hasCheckout=!0)
const r=function(e,t){try{if("function"==typeof t&&function(e){return e.type===co.Custom}(e))return t(e)}catch(e){return _i&&a.kg.error("[Replay] An error occured in the `beforeAddRecordingEvent` callback, skipping the event...",e),null}return e}(t,e.getOptions().beforeAddRecordingEvent)
if(!r)return
return await e.eventBuffer.addEvent(r)}catch(t){const n=t&&t instanceof ki?"addEventSizeExceeded":"addEvent"
_i&&a.kg.error(t),await e.stop({reason:n})
const r=he()
r&&r.recordDroppedEvent("internal_sdk_error","replay")}}function Bi(e,t){if(!e.eventBuffer||e.isPaused()||!e.isEnabled())return!1
const n=Qo(t.timestamp)
return!(n+e.timeouts.sessionIdlePause<Date.now()||n>e.getContext().initialTimestamp+e.getOptions().maxReplayDuration&&(vi(`[Replay] Skipping event with timestamp ${n} because it is after maxReplayDuration`,e.getOptions()._experiments.traceInternals),1))}function Fi(e){return!e.type}function Ui(e){return"transaction"===e.type}function ji(e){return"feedback"===e.type}function Hi(e){const t=function(){const e=he()
if(!e)return!1
const t=e.getTransport()
return t&&t.send.__sentry__baseTransport__||!1}()
return(n,r)=>{if(!e.isEnabled()||!Fi(n)&&!Ui(n))return
const s=r&&r.statusCode
t&&(!s||s<200||s>=300)||(Ui(n)?function(e,t){const n=e.getContext()
t.contexts&&t.contexts.trace&&t.contexts.trace.trace_id&&n.traceIds.size<100&&n.traceIds.add(t.contexts.trace.trace_id)}(e,n):function(e,t){const n=e.getContext()
if(t.event_id&&n.errorIds.size<100&&n.errorIds.add(t.event_id),"buffer"!==e.recordingMode||!t.tags||!t.tags.replayId)return
const{beforeErrorSampling:r}=e.getOptions();("function"!=typeof r||r(t))&&setTimeout((()=>{e.sendBufferedReplayOrFlush()}))}(e,n))}}function zi(e,t){return t.map((({type:t,start:n,end:r,name:s,data:o})=>{const i=e.throttledAddEvent({type:co.Custom,timestamp:n,data:{tag:"performanceSpan",payload:{op:t,description:s,startTimestamp:n,endTimestamp:r,data:o}}})
return"string"==typeof i?Promise.resolve(null):i}))}function qi(e,t){e.isEnabled()&&null!==t&&(function(e,t){return(!_i||!e.getOptions()._experiments.traceInternals)&&function(e,t){const n=t&&function(e){return void 0!==e.getClient}(t)?t.getClient():t,r=n&&n.getDsn(),s=n&&n.getOptions().tunnel
return function(e,t){return!!t&&e.includes(t.host)}(e,r)||function(e,t){return!!t&&Sr(e)===Sr(t)}(e,s)}(t,he())}(e,t.name)||e.addUpdate((()=>(zi(e,[t]),!0))))}function Wi(e,t){if(e)try{if("string"==typeof e)return t.encode(e).length
if(e instanceof URLSearchParams)return t.encode(e.toString()).length
if(e instanceof FormData){const n=Qi(e)
return t.encode(n).length}if(e instanceof Blob)return e.size
if(e instanceof ArrayBuffer)return e.byteLength}catch(e){}}function Gi(e){if(!e)return
const t=parseInt(e,10)
return isNaN(t)?void 0:t}function Ji(e){try{if("string"==typeof e)return[e]
if(e instanceof URLSearchParams)return[e.toString()]
if(e instanceof FormData)return[Qi(e)]
if(!e)return[void 0]}catch(t){return _i&&a.kg.warn("[Replay] Failed to serialize body",e),[void 0,"BODY_PARSE_ERROR"]}return _i&&a.kg.info("[Replay] Skipping network body because of body type",e),[void 0,"UNPARSEABLE_BODY_TYPE"]}function Ki(e,t){if(!e)return{headers:{},size:void 0,_meta:{warnings:[t]}}
const n={...e._meta},r=n.warnings||[]
return n.warnings=[...r,t],e._meta=n,e}function Vi(e,t){if(!t)return null
const{startTimestamp:n,endTimestamp:r,url:s,method:i,statusCode:a,request:c,response:l}=t
return{type:e,start:n/1e3,end:r/1e3,name:s,data:(0,o.Jr)({method:i,statusCode:a,request:c,response:l})}}function Yi(e){return{headers:{},size:e,_meta:{warnings:["URL_SKIPPED"]}}}function Xi(e,t,n){if(!t&&0===Object.keys(e).length)return
if(!t)return{headers:e}
if(!n)return{headers:e,size:t}
const r={headers:e,size:t},{body:s,warnings:o}=function(e){if(!e||"string"!=typeof e)return{body:e}
const t=e.length>es,n=function(e){const t=e[0],n=e[e.length-1]
return"["===t&&"]"===n||"{"===t&&"}"===n}(e)
if(t){const t=e.slice(0,es)
return n?{body:t,warnings:["MAYBE_JSON_TRUNCATED"]}:{body:`${t}…`,warnings:["TEXT_TRUNCATED"]}}if(n)try{return{body:JSON.parse(e)}}catch(e){}return{body:e}}(n)
return r.body=s,o&&o.length>0&&(r._meta={warnings:o}),r}function Zi(e,t){return Object.keys(e).reduce(((n,r)=>{const s=r.toLowerCase()
return t.includes(s)&&e[r]&&(n[s]=e[r]),n}),{})}function Qi(e){return new URLSearchParams(e).toString()}function ea(e,t){const n=function(e,t=Xr.document.baseURI){if(e.startsWith("http://")||e.startsWith("https://")||e.startsWith(Xr.location.origin))return e
const n=new URL(e,t)
if(n.origin!==new URL(t).origin)return e
const r=n.href
return!e.endsWith("/")&&r.endsWith("/")?r.slice(0,-1):r}(e)
return(0,G.U0)(n,t)}function ta(e=[]){if(2===e.length&&"object"==typeof e[1])return e[1].body}function na(e,t){const n={}
return t.forEach((t=>{e.get(t)&&(n[t]=e.get(t))})),n}function ra(e,t){if(!e)return{}
const n=e.headers
return n?n instanceof Headers?na(n,t):Array.isArray(n)?{}:Zi(n,t):{}}let sa=null
function oa(e){return!(!e||!e.on)}function ia(e){const{jsHeapSizeLimit:t,totalJSHeapSize:n,usedJSHeapSize:r}=e,s=Date.now()/1e3
return{type:"memory",name:"memory",start:s,end:s,data:{memory:{jsHeapSizeLimit:t,totalJSHeapSize:n,usedJSHeapSize:r}}}}function aa(e){let t=!1
return(n,r)=>{if(!e.checkAndHandleExpiredSession())return void(_i&&a.kg.warn("[Replay] Received replay event after session expired."))
const s=r||!t
t=!0,e.clickDetector&&function(e,t){try{if(!function(e){return 3===e.type}(t))return
const{source:n}=t.data
if(n===lo.Mutation&&e.registerMutation(t.timestamp),n===lo.Scroll&&e.registerScroll(t.timestamp),function(e){return e.data.source===lo.MouseInteraction}(t)){const{type:n,id:r}=t.data,s=Zo.mirror.getNode(r)
s instanceof HTMLElement&&n===uo.Click&&e.registerClick(s)}}catch(e){}}(e.clickDetector,n),e.addUpdate((()=>{if("buffer"===e.recordingMode&&s&&e.setInitialState(),!$i(e,n,s))return!0
if(!s)return!1
if(function(e,t){t&&e.session&&0===e.session.segmentId&&$i(e,function(e){const t=e.getOptions()
return{type:co.Custom,timestamp:Date.now(),data:{tag:"options",payload:{sessionSampleRate:t.sessionSampleRate,errorSampleRate:t.errorSampleRate,useCompressionOption:t.useCompression,blockAllMedia:t.blockAllMedia,maskAllText:t.maskAllText,maskAllInputs:t.maskAllInputs,useCompression:!!e.eventBuffer&&"worker"===e.eventBuffer.type,networkDetailHasUrls:t.networkDetailAllowUrls.length>0,networkCaptureBodies:t.networkCaptureBodies,networkRequestHasHeaders:t.networkRequestHeaders.length>0,networkResponseHasHeaders:t.networkResponseHeaders.length>0}}}}(e),!1)}(e,s),e.session&&e.session.previousSessionId)return!0
if("buffer"===e.recordingMode&&e.session&&e.eventBuffer){const t=e.eventBuffer.getEarliestTimestamp()
t&&(vi(`[Replay] Updating session start time to earliest event in buffer to ${new Date(t)}`,e.getOptions()._experiments.traceInternals),e.session.started=t,e.getOptions().stickySession&&Oi(e.session))}return"session"===e.recordingMode&&e.flush(),!0}))}}class ca extends Error{constructor(e){super(`Transport returned status code ${e}`)}}class la extends Error{constructor(e){super("Rate limit hit"),this.rateLimits=e}}async function ua(e,t={count:0,interval:5e3}){const{recordingData:n,options:r}=e
if(n.length)try{return await async function({recordingData:e,replayId:t,segmentId:n,eventContext:r,timestamp:s,session:o}){const i=function({recordingData:e,headers:t}){let n
const r=`${JSON.stringify(t)}\n`
if("string"==typeof e)n=`${r}${e}`
else{const t=(new TextEncoder).encode(r)
n=new Uint8Array(t.length+e.length),n.set(t),n.set(e,t.length)}return n}({recordingData:e,headers:{segment_id:n}}),{urls:a,errorIds:c,traceIds:l,initialTimestamp:u}=r,d=he(),p=me(),h=d&&d.getTransport(),m=d&&d.getDsn()
if(!(d&&h&&m&&o.sampled))return
const f={type:"replay_event",replay_start_timestamp:u/1e3,timestamp:s/1e3,error_ids:c,trace_ids:l,urls:a,replay_id:t,segment_id:n,replay_type:o.sampled},g=await async function({client:e,scope:t,replayId:n,event:r}){const s={event_id:n,integrations:"object"!=typeof e._integrations||null===e._integrations||Array.isArray(e._integrations)?void 0:Object.keys(e._integrations)}
e.emit&&e.emit("preprocessEvent",r,s)
const o=await K(e.getOptions(),r,s,t,e,z())
if(!o)return null
o.platform=o.platform||"javascript"
const i=e.getSdkMetadata&&e.getSdkMetadata(),{name:a,version:c}=i&&i.sdk||{}
return o.sdk={...o.sdk,name:a||"sentry.javascript.unknown",version:c||"0.0.0"},o}({scope:p,client:d,replayId:t,event:f})
if(!g)return d.recordDroppedEvent("event_processor","replay",f),void vi("An event processor returned `null`, will not send event.")
delete g.sdkProcessingMetadata
const y=function(e,t,n,r){return(0,$e.Jd)((0,$e.Cd)(e,(0,$e.HY)(e),r,n),[[{type:"replay_event"},e],[{type:"replay_recording",length:"string"==typeof t?(new TextEncoder).encode(t).length:t.length},t]])}(g,i,m,d.getOptions().tunnel)
let _
try{_=await h.send(y)}catch(e){const t=new Error(Qr)
try{t.cause=e}catch(e){}throw t}if(!_)return _
if("number"==typeof _.statusCode&&(_.statusCode<200||_.statusCode>=300))throw new ca(_.statusCode)
const v=(0,Dt.WG)({},_)
if((0,Dt.Q)(v,"replay"))throw new la(v)
return _}(e),!0}catch(n){if(n instanceof ca||n instanceof la)throw n
if(ne("Replays",{_retryCount:t.count}),_i&&r._experiments&&r._experiments.captureExceptions&&X(n),t.count>=3){const t=new Error(`${Qr} - max retries exceeded`)
try{t.cause=n}catch(e){}throw t}return t.interval*=++t.count,new Promise(((n,r)=>{setTimeout((async()=>{try{await ua(e,t),n(!0)}catch(e){r(e)}}),t.interval)}))}}const da="__THROTTLED"
class pa{constructor({options:e,recordingOptions:t}){pa.prototype.__init.call(this),pa.prototype.__init2.call(this),pa.prototype.__init3.call(this),pa.prototype.__init4.call(this),pa.prototype.__init5.call(this),pa.prototype.__init6.call(this),this.eventBuffer=null,this.performanceEntries=[],this.replayPerformanceEntries=[],this.recordingMode="session",this.timeouts={sessionIdlePause:3e5,sessionIdleExpire:9e5},this._lastActivity=Date.now(),this._isEnabled=!1,this._isPaused=!1,this._hasInitializedCoreListeners=!1,this._context={errorIds:new Set,traceIds:new Set,urls:[],initialTimestamp:Date.now(),initialUrl:""},this._recordingOptions=t,this._options=e,this._debouncedFlush=function(e,t,n){let r,s,o
const i=n&&n.maxWait?Math.max(n.maxWait,t):0
function a(){return c(),r=e(),r}function c(){void 0!==s&&clearTimeout(s),void 0!==o&&clearTimeout(o),s=o=void 0}function l(){return s&&clearTimeout(s),s=setTimeout(a,t),i&&void 0===o&&(o=setTimeout(a,i)),r}return l.cancel=c,l.flush=function(){return void 0!==s||void 0!==o?a():r},l}((()=>this._flush()),this._options.flushMinDelay,{maxWait:this._options.flushMaxDelay}),this._throttledAddEvent=function(e,t,n){const r=new Map
let s=!1
return(...t)=>{const n=Math.floor(Date.now()/1e3)
if((e=>{const t=e-5
r.forEach(((e,n)=>{n<t&&r.delete(n)}))})(n),[...r.values()].reduce(((e,t)=>e+t),0)>=300){const e=s
return s=!0,e?"__SKIPPED":da}s=!1
const o=r.get(n)||0
return r.set(n,o+1),e(...t)}}(((e,t)=>function(e,t,n){return Bi(e,t)?Pi(e,t,n):Promise.resolve(null)}(this,e,t)))
const{slowClickTimeout:n,slowClickIgnoreSelectors:r}=this.getOptions(),s=n?{threshold:Math.min(3e3,n),timeout:n,scrollTimeout:300,ignoreSelector:r?r.join(","):""}:void 0
s&&(this.clickDetector=new ai(this,s))}getContext(){return this._context}isEnabled(){return this._isEnabled}isPaused(){return this._isPaused}getOptions(){return this._options}initializeSampling(e){const{errorSampleRate:t,sessionSampleRate:n}=this._options
t<=0&&n<=0||(this._initializeSessionForSampling(e),this.session?!1!==this.session.sampled&&(this.recordingMode="buffer"===this.session.sampled&&0===this.session.segmentId?"buffer":"session",bi(`[Replay] Starting replay in ${this.recordingMode} mode`,this._options._experiments.traceInternals),this._initializeRecording()):this._handleException(new Error("Unable to initialize and create session")))}start(){if(this._isEnabled&&"session"===this.recordingMode)throw new Error("Replay recording is already in progress")
if(this._isEnabled&&"buffer"===this.recordingMode)throw new Error("Replay buffering is in progress, call `flush()` to save the replay")
bi("[Replay] Starting replay in session mode",this._options._experiments.traceInternals)
const e=Ni({maxReplayDuration:this._options.maxReplayDuration,sessionIdleExpire:this.timeouts.sessionIdleExpire,traceInternals:this._options._experiments.traceInternals},{stickySession:this._options.stickySession,sessionSampleRate:1,allowBuffering:!1})
this.session=e,this._initializeRecording()}startBuffering(){if(this._isEnabled)throw new Error("Replay recording is already in progress")
bi("[Replay] Starting replay in buffer mode",this._options._experiments.traceInternals)
const e=Ni({sessionIdleExpire:this.timeouts.sessionIdleExpire,maxReplayDuration:this._options.maxReplayDuration,traceInternals:this._options._experiments.traceInternals},{stickySession:this._options.stickySession,sessionSampleRate:0,allowBuffering:!0})
this.session=e,this.recordingMode="buffer",this._initializeRecording()}startRecording(){try{const e=this._options._experiments.canvas
this._stopRecording=Zo({...this._recordingOptions,..."buffer"===this.recordingMode&&{checkoutEveryNms:6e4},emit:aa(this),onMutation:this._onMutationHandler,...e&&e.manager&&{recordCanvas:!0,getCanvasManager:e.manager,...rs[e.quality||"medium"]||rs.medium}})}catch(e){this._handleException(e)}}stopRecording(){try{return this._stopRecording&&(this._stopRecording(),this._stopRecording=void 0),!0}catch(e){return this._handleException(e),!1}}async stop({forceFlush:e=!1,reason:t}={}){if(this._isEnabled){this._isEnabled=!1
try{vi("[Replay] Stopping Replay"+(t?` triggered by ${t}`:""),this._options._experiments.traceInternals),this._removeListeners(),this.stopRecording(),this._debouncedFlush.cancel(),e&&await this._flush({force:!0}),this.eventBuffer&&this.eventBuffer.destroy(),this.eventBuffer=null,this,function(){if(Ci())try{Xr.sessionStorage.removeItem(Zr)}catch(e){}}(),this.session=void 0}catch(e){this._handleException(e)}}}pause(){this._isPaused||(this._isPaused=!0,this.stopRecording(),vi("[Replay] Pausing replay",this._options._experiments.traceInternals))}resume(){this._isPaused&&this._checkSession()&&(this._isPaused=!1,this.startRecording(),vi("[Replay] Resuming replay",this._options._experiments.traceInternals))}async sendBufferedReplayOrFlush({continueRecording:e=!0}={}){if("session"===this.recordingMode)return this.flushImmediate()
const t=Date.now()
vi("[Replay] Converting buffer to session",this._options._experiments.traceInternals),await this.flushImmediate()
const n=this.stopRecording()
e&&n&&"session"!==this.recordingMode&&(this.recordingMode="session",this.session&&(this._updateUserActivity(t),this._updateSessionActivity(t),this._maybeSaveSession()),this.startRecording())}addUpdate(e){const t=e()
"buffer"!==this.recordingMode&&!0!==t&&this._debouncedFlush()}triggerUserActivity(){if(this._updateUserActivity(),this._stopRecording)this.checkAndHandleExpiredSession(),this._updateSessionActivity()
else{if(!this._checkSession())return
this.resume()}}updateUserActivity(){this._updateUserActivity(),this._updateSessionActivity()}conditionalFlush(){return"buffer"===this.recordingMode?Promise.resolve():this.flushImmediate()}flush(){return this._debouncedFlush()}flushImmediate(){return this._debouncedFlush(),this._debouncedFlush.flush()}cancelFlush(){this._debouncedFlush.cancel()}getSessionId(){return this.session&&this.session.id}checkAndHandleExpiredSession(){if(!(this._lastActivity&&Ai(this._lastActivity,this.timeouts.sessionIdlePause)&&this.session&&"session"===this.session.sampled))return!!this._checkSession()
this.pause()}setInitialState(){const e=`${Xr.location.pathname}${Xr.location.hash}${Xr.location.search}`,t=`${Xr.location.origin}${e}`
this.performanceEntries=[],this.replayPerformanceEntries=[],this._clearContext(),this._context.initialUrl=t,this._context.initialTimestamp=Date.now(),this._context.urls.push(t)}throttledAddEvent(e,t){const n=this._throttledAddEvent(e,t)
if(n===da){const e=ui({category:"replay.throttled"})
this.addUpdate((()=>!$i(this,{type:5,timestamp:e.timestamp||0,data:{tag:"breadcrumb",payload:e,metric:!0}})))}return n}getCurrentRoute(){const e=this.lastTransaction||me().getTransaction(),t=(e&&T(e).data||{})[ut]
if(e&&t&&["route","custom"].includes(t))return T(e).description}_initializeRecording(){this.setInitialState(),this._updateSessionActivity(),this.eventBuffer=function({useCompression:e,workerUrl:t}){if(e&&window.Worker){const e=function(e){try{const t=e||("undefined"!=typeof __SENTRY_EXCLUDE_REPLAY_WORKER__&&__SENTRY_EXCLUDE_REPLAY_WORKER__?"":function(){const e=new Blob(['var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(t,e){for(var i=new n(31),a=0;a<31;++a)i[a]=e+=1<<t[a-1];var s=new r(i[30]);for(a=1;a<30;++a)for(var o=i[a];o<i[a+1];++o)s[o]=o-i[a]<<5|a;return{b:i,r:s}},o=s(e,2),f=o.b,h=o.r;f[28]=258,h[258]=28;for(var l=s(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,a=0,s=new n(r);a<i;++a)t[a]&&++s[t[a]-1];var o,f=new n(r);for(a=1;a<r;++a)f[a]=f[a-1]+s[a-1]<<1;if(e){o=new n(1<<r);var h=15-r;for(a=0;a<i;++a)if(t[a])for(var l=a<<4|t[a],c=r-t[a],v=f[t[a]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>h]=l}else for(o=new n(i),a=0;a<i;++a)t[a]&&(o[a]=u[f[t[a]-1]++]>>15-t[a]);return o},g=new t(288);for(c=0;c<144;++c)g[c]=8;for(c=144;c<256;++c)g[c]=9;for(c=256;c<280;++c)g[c]=7;for(c=280;c<288;++c)g[c]=8;var w=new t(32);for(c=0;c<32;++c)w[c]=5;var p=d(g,9,0),y=d(w,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==r||r<0)&&(r=0),(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},A=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},_=function(r,e){for(var i=[],a=0;a<r.length;++a)r[a]&&i.push({s:a,f:r[a]});var s=i.length,o=i.slice();if(!s)return{t:F,l:0};if(1==s){var f=new t(i[0].s+1);return f[i[0].s]=1,{t:f,l:1}}i.sort((function(t,n){return t.f-n.f})),i.push({s:-1,f:25001});var h=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:h.f+l.f,l:h,r:l};c!=s-1;)h=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:h.f+l.f,l:h,r:l};var d=o[0].s;for(a=1;a<s;++a)o[a].s>d&&(d=o[a].s);var g=new n(d+1),w=x(i[c-1],g,0);if(w>e){a=0;var p=0,y=w-e,m=1<<y;for(o.sort((function(t,n){return g[n.s]-g[t.s]||t.f-n.f}));a<s;++a){var b=o[a].s;if(!(g[b]>e))break;p+=m-(1<<w-g[b]),g[b]=e}for(p>>=y;p>0;){var M=o[a].s;g[M]<e?p-=1<<e-g[M]++-1:++a}for(;a>=0&&p;--a){var E=o[a].s;g[E]==e&&(--g[E],++p)}w=e}return{t:new t(g),l:w}},x=function(t,n,r){return-1==t.s?Math.max(x(t.l,n,r+1),x(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,a=t[0],s=1,o=function(t){e[i++]=t},f=1;f<=r;++f)if(t[f]==a&&f!=r)++s;else{if(!a&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(a),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(a);s=1,a=t[f]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var a=0;a<e;++a)t[i+a+4]=r[a];return 8*(i+4+e)},C=function(t,r,s,o,f,h,l,u,c,v,m){z(r,m++,s),++f[256];for(var b=_(f,15),M=b.t,E=b.l,x=_(h,15),C=x.t,U=x.l,F=D(M),I=F.c,S=F.n,L=D(C),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=_(q,7),H=G.t,J=G.l,K=19;K>4&&!H[a[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(f,g)+T(h,w)+l,X=T(f,M)+T(h,C)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(C,U,0),R=C;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[a[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=p,P=g,Q=y,R=w;for(B=0;B<u;++B){var rt=o[B];if(rt>255){A(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;A(r,m,Q[et]),m+=R[et],et>3&&(A(r,m,rt>>5&8191),m+=i[et])}else A(r,m,N[rt]),m+=P[rt]}return A(r,m,N[256]),m+P[256]},U=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,a=0|r.length,s=0;s!=a;){for(var o=Math.min(s+2655,a);s<o;++s)i+=e+=r[s];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},L=function(a,s,o,f,u){if(!u&&(u={l:1},s.dictionary)){var c=s.dictionary.subarray(-32768),v=new t(c.length+a.length);v.set(c),v.set(a,c.length),a=v,u.w=c.length}return function(a,s,o,f,u,c){var v=c.z||a.length,d=new t(f+v+5*(1+Math.ceil(v/7e3))+u),g=d.subarray(f,d.length-u),w=c.l,p=7&(c.r||0);if(s){p&&(g[0]=c.r>>3);for(var y=U[s-1],M=y>>13,E=8191&y,z=(1<<o)-1,A=c.p||new n(32768),_=c.h||new n(z+1),x=Math.ceil(o/3),D=2*x,T=function(t){return(a[t]^a[t+1]<<x^a[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=_[H];if(A[J]=K,_[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!w)){p=C(a,g,0,F,I,S,O,q,G,j-G,p),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(a[j+Q]==a[j+Q-W]){for(var $=0;$<Z&&a[j+$]==a[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-A[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=A[J])&32767}if(R){F[q++]=268435456|h[Q]<<18|l[R];var it=31&h[Q],at=31&l[R];O+=e[it]+i[at],++I[257+it],++S[at],B=j+Q,++L}else F[q++]=a[j],++I[a[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=a[j],++I[a[j]];p=C(a,g,w,F,I,S,O,q,G,j-G,p),w||(c.r=7&p|g[p/8|0]<<3,p-=7,c.h=_,c.p=A,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+w;j+=65535){var st=j+65535;st>=v&&(g[p/8|0]=w,st=v),p=k(g,p+1,a.subarray(j,st))}c.i=v}return b(d,0,f+m(p)+u)}(a,null==s.level?6:s.level,null==s.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(a.length)))):12+s.mem,o,f,u)},O=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},j=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(L(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var a=this.b.length-this.s.z;a&&(this.b.set(n.subarray(0,a),this.s.z),this.s.z=this.b.length,this.p(this.b,!1)),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(a),32768),this.s.z=n.length-a+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n}();function q(t,n){n||(n={});var r=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}}(),e=t.length;r.p(t);var i,a=L(t,n,10+((i=n).filename?i.filename.length+1:0),8),s=a.length;return function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&O(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}}(a,n),O(a,s-8,r.d()),O(a,s-4,e),a}var B=function(){function t(t,n){this.c=S(),this.v=1,j.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),j.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=L(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=S();i.p(n.dictionary),O(t,2,i.d())}}(r,this.o),this.v=0),n&&O(r,r.length-4,this.c.d()),this.ondata(r,n)},t}(),G="undefined"!=typeof TextEncoder&&new TextEncoder,H="undefined"!=typeof TextDecoder&&new TextDecoder;try{H.decode(F,{stream:!0})}catch(t){}var J=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(K(t),this.d=n||!1)},t}();function K(n,r){if(r){for(var e=new t(n.length),i=0;i<n.length;++i)e[i]=n.charCodeAt(i);return e}if(G)return G.encode(n);var a=n.length,s=new t(n.length+(n.length>>1)),o=0,f=function(t){s[o++]=t};for(i=0;i<a;++i){if(o+5>s.length){var h=new t(o+8+(a-i<<1));h.set(s),s=h}var l=n.charCodeAt(i);l<128||r?f(l):l<2048?(f(192|l>>6),f(128|63&l)):l>55295&&l<57344?(f(240|(l=65536+(1047552&l)|1023&n.charCodeAt(++i))>>18),f(128|l>>12&63),f(128|l>>6&63),f(128|63&l)):(f(224|l>>12),f(128|l>>6&63),f(128|63&l))}return b(s,0,o)}const N=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(let r=0,e=t.length;r<e;r++)n+=t[r].length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new B,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new J(((t,n)=>{this.deflate.push(t,n)})),this.stream.push("[")}},P={clear:()=>{N.clear()},addEvent:t=>N.addEvent(t),finish:()=>N.finish(),compress:t=>function(t){return q(K(t))}(t)};addEventListener("message",(function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in P&&"function"==typeof P[n])try{const t=P[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});'])
return URL.createObjectURL(e)}())
if(!t)return
vi("[Replay] Using compression worker"+(e?` from ${e}`:""))
const n=new Worker(t)
return new Ti(n)}catch(e){vi("[Replay] Failed to create compression worker")}}(t)
if(e)return e}return vi("[Replay] Using simple buffer"),new wi}({useCompression:this._options.useCompression,workerUrl:this._options.workerUrl}),this._removeListeners(),this._addListeners(),this._isEnabled=!0,this._isPaused=!1,this.startRecording()}_handleException(e){_i&&a.kg.error("[Replay]",e),_i&&this._options._experiments&&this._options._experiments.captureExceptions&&X(e)}_initializeSessionForSampling(e){const t=this._options.errorSampleRate>0,n=Ni({sessionIdleExpire:this.timeouts.sessionIdleExpire,maxReplayDuration:this._options.maxReplayDuration,traceInternals:this._options._experiments.traceInternals,previousSessionId:e},{stickySession:this._options.stickySession,sessionSampleRate:this._options.sessionSampleRate,allowBuffering:t})
this.session=n}_checkSession(){if(!this.session)return!1
const e=this.session
return!Li(e,{sessionIdleExpire:this.timeouts.sessionIdleExpire,maxReplayDuration:this._options.maxReplayDuration})||(this._refreshSession(e),!1)}async _refreshSession(e){this._isEnabled&&(await this.stop({reason:"refresh session"}),this.initializeSampling(e.id))}_addListeners(){try{Xr.document.addEventListener("visibilitychange",this._handleVisibilityChange),Xr.addEventListener("blur",this._handleWindowBlur),Xr.addEventListener("focus",this._handleWindowFocus),Xr.addEventListener("keydown",this._handleKeyboardEvent),this.clickDetector&&this.clickDetector.addListeners(),this._hasInitializedCoreListeners||(function(e){const t=me(),n=he()
t.addScopeListener((e=>t=>{if(!e.isEnabled())return
const n=function(e){const t=e.getLastBreadcrumb&&e.getLastBreadcrumb()
return sa!==t&&t?(sa=t,!t.category||["fetch","xhr","sentry.event","sentry.transaction"].includes(t.category)||t.category.startsWith("ui.")?null:"console"===t.category?function(e){const t=e.data&&e.data.arguments
if(!Array.isArray(t)||0===t.length)return ui(e)
let n=!1
const r=t.map((e=>{if(!e)return e
if("string"==typeof e)return e.length>ts?(n=!0,`${e.slice(0,ts)}…`):e
if("object"==typeof e)try{const t=(0,J.Fv)(e,7)
return JSON.stringify(t).length>ts?(n=!0,`${JSON.stringify(t,null,2).slice(0,ts)}…`):t}catch(e){}return e}))
return ui({...e,data:{...e.data,arguments:r,...n?{_meta:{warnings:["CONSOLE_ARG_TRUNCATED"]}}:{}}})}(t):ui(t)):null}(t)
n&&ti(e,n)})(e)),(0,Vn.O)((e=>t=>{if(!e.isEnabled())return
const n=function(e){const{target:t,message:n}=function(e){const t="click"===e.name
let n,r=null
try{r=t?si(e.event):oi(e.event),n=(0,Nn.Rt)(r,{maxStringLength:200})||"<unknown>"}catch(e){n="<unknown>"}return{target:r,message:n}}(e)
return ui({category:`ui.${e.name}`,...mi(t,n)})}(t)
if(!n)return
const r="click"===t.name,s=r?t.event:void 0
var o,i,a
!(r&&e.clickDetector&&s&&s.target)||s.altKey||s.metaKey||s.ctrlKey||s.shiftKey||(o=e.clickDetector,i=n,a=si(t.event),o.handleClick(i,a)),ti(e,n)})(e)),(0,Ln.a)(function(e){return t=>{if(!e.isEnabled())return
const n=function(e){const{from:t,to:n}=e,r=Date.now()/1e3
return{type:"navigation.push",start:r,end:r,name:n,data:{previous:t}}}(t)
null!==n&&(e.getContext().urls.push(n.name),e.triggerUserActivity(),e.addUpdate((()=>(zi(e,[n]),!1))))}}(e)),function(e){const t=he()
try{const n=new TextEncoder,{networkDetailAllowUrls:r,networkDetailDenyUrls:s,networkCaptureBodies:o,networkRequestHeaders:i,networkResponseHeaders:c}=e.getOptions(),l={replay:e,textEncoder:n,networkDetailAllowUrls:r,networkDetailDenyUrls:s,networkCaptureBodies:o,networkRequestHeaders:i,networkResponseHeaders:c}
t&&t.on?t.on("beforeAddBreadcrumb",((e,t)=>function(e,t,n){if(t.data)try{(function(e){return"xhr"===e.category})(t)&&function(e){return e&&e.xhr}(n)&&(function(e,t,n){const{xhr:r,input:s}=t
if(!r)return
const o=Wi(s,n.textEncoder),i=r.getResponseHeader("content-length")?Gi(r.getResponseHeader("content-length")):function(e,t,n){try{return Wi("json"===t&&e&&"object"==typeof e?JSON.stringify(e):e,n)}catch(e){return}}(r.response,r.responseType,n.textEncoder)
void 0!==o&&(e.data.request_body_size=o),void 0!==i&&(e.data.response_body_size=i)}(t,n,e),async function(e,t,n){try{const r=function(e,t,n){const r=Date.now(),{startTimestamp:s=r,endTimestamp:o=r,input:i,xhr:c}=t,{url:l,method:u,status_code:d=0,request_body_size:p,response_body_size:h}=e.data
if(!l)return null
if(!c||!ea(l,n.networkDetailAllowUrls)||ea(l,n.networkDetailDenyUrls))return{startTimestamp:s,endTimestamp:o,url:l,method:u,statusCode:d,request:Yi(p),response:Yi(h)}
const m=c[Yn.xU],f=m?Zi(m.request_headers,n.networkRequestHeaders):{},g=Zi(function(e){const t=e.getAllResponseHeaders()
return t?t.split("\r\n").reduce(((e,t)=>{const[n,r]=t.split(": ")
return e[n.toLowerCase()]=r,e}),{}):{}}(c),n.networkResponseHeaders),[y,_]=n.networkCaptureBodies?Ji(i):[void 0],[v,b]=n.networkCaptureBodies?function(e){const t=[]
try{return[e.responseText]}catch(e){t.push(e)}try{return function(e,t){try{if("string"==typeof e)return[e]
if(e instanceof Document)return[e.body.outerHTML]
if("json"===t&&e&&"object"==typeof e)return[JSON.stringify(e)]
if(!e)return[void 0]}catch(t){return _i&&a.kg.warn("[Replay] Failed to serialize body",e),[void 0,"BODY_PARSE_ERROR"]}return _i&&a.kg.info("[Replay] Skipping network body because of body type",e),[void 0,"UNPARSEABLE_BODY_TYPE"]}(e.response,e.responseType)}catch(e){t.push(e)}return _i&&a.kg.warn("[Replay] Failed to get xhr response body",...t),[void 0]}(c):[void 0],S=Xi(f,p,y),k=Xi(g,h,v)
return{startTimestamp:s,endTimestamp:o,url:l,method:u,statusCode:d,request:_?Ki(S,_):S,response:b?Ki(k,b):k}}(e,t,n),s=Vi("resource.xhr",r)
qi(n.replay,s)}catch(e){_i&&a.kg.error("[Replay] Failed to capture xhr breadcrumb",e)}}(t,n,e)),function(e){return"fetch"===e.category}(t)&&function(e){return e&&e.response}(n)&&(function(e,t,n){const{input:r,response:s}=t,o=Wi(r?ta(r):void 0,n.textEncoder),i=s?Gi(s.headers.get("content-length")):void 0
void 0!==o&&(e.data.request_body_size=o),void 0!==i&&(e.data.response_body_size=i)}(t,n,e),async function(e,t,n){try{const r=await async function(e,t,n){const r=Date.now(),{startTimestamp:s=r,endTimestamp:o=r}=t,{url:i,method:c,status_code:l=0,request_body_size:u,response_body_size:d}=e.data,p=ea(i,n.networkDetailAllowUrls)&&!ea(i,n.networkDetailDenyUrls),h=p?function({networkCaptureBodies:e,networkRequestHeaders:t},n,r){const s=n?(i=t,1===(o=n).length&&"string"!=typeof o[0]?ra(o[0],i):2===o.length?ra(o[1],i):{}):{}
var o,i
if(!e)return Xi(s,r,void 0)
const a=ta(n),[c,l]=Ji(a),u=Xi(s,r,c)
return l?Ki(u,l):u}(n,t.input,u):Yi(u),m=await async function(e,{networkCaptureBodies:t,textEncoder:n,networkResponseHeaders:r},s,o){if(!e&&void 0!==o)return Yi(o)
const i=s?na(s.headers,r):{}
if(!s||!t&&void 0!==o)return Xi(i,o,void 0)
const[c,l]=await async function(e){const t=function(e){try{return e.clone()}catch(e){_i&&a.kg.warn("[Replay] Failed to clone response body",e)}}(e)
if(!t)return[void 0,"BODY_PARSE_ERROR"]
try{const e=await function(e){return new Promise(((t,n)=>{const r=setTimeout((()=>n(new Error("Timeout while trying to read response body"))),500);(async function(e){return await e.text()})(e).then((e=>t(e)),(e=>n(e))).finally((()=>clearTimeout(r)))}))}(t)
return[e]}catch(e){return _i&&a.kg.warn("[Replay] Failed to get text body from response",e),[void 0,"BODY_PARSE_ERROR"]}}(s),u=function(e,{networkCaptureBodies:t,textEncoder:n,responseBodySize:r,captureDetails:s,headers:o}){try{const i=e&&e.length&&void 0===r?Wi(e,n):r
return s?Xi(o,i,t?e:void 0):Yi(i)}catch(e){return _i&&a.kg.warn("[Replay] Failed to serialize response body",e),Xi(o,r,void 0)}}(c,{networkCaptureBodies:t,textEncoder:n,responseBodySize:o,captureDetails:e,headers:i})
return l?Ki(u,l):u}(p,n,t.response,d)
return{startTimestamp:s,endTimestamp:o,url:i,method:c,statusCode:l,request:h,response:m}}(e,t,n),s=Vi("resource.fetch",r)
qi(n.replay,s)}catch(e){_i&&a.kg.error("[Replay] Failed to capture fetch breadcrumb",e)}}(t,n,e))}catch(e){_i&&a.kg.warn("Error when enriching network breadcrumb")}}(l,e,t))):((0,Xn.U)(function(e){return t=>{if(!e.isEnabled())return
const n=function(e){const{startTimestamp:t,endTimestamp:n,fetchData:r,response:s}=e
if(!n)return null
const{method:o,url:i}=r
return{type:"resource.fetch",start:t/1e3,end:n/1e3,name:i,data:{method:o,statusCode:s?s.status:void 0}}}(t)
qi(e,n)}}(e)),(0,Yn.UK)(function(e){return t=>{if(!e.isEnabled())return
const n=function(e){const{startTimestamp:t,endTimestamp:n,xhr:r}=e,s=r[Yn.xU]
if(!t||!n||!s)return null
const{method:o,url:i,status_code:a}=s
return void 0===i?null:{type:"resource.xhr",name:i,start:t/1e3,end:n/1e3,data:{method:o,statusCode:a}}}(t)
qi(e,n)}}(e)))}catch(e){}}(e)
const r=function(e,t=!1){const n=t?Hi(e):void 0
return Object.assign(((t,r)=>{if(!e.isEnabled())return t
if(function(e){return"replay_event"===e.type}(t))return delete t.breadcrumbs,t
if(!Fi(t)&&!Ui(t)&&!ji(t))return t
if(!e.checkAndHandleExpiredSession())return t
if(ji(t))return e.flush(),t.contexts.feedback.replay_id=e.getSessionId(),function(e,t){e.triggerUserActivity(),e.addUpdate((()=>!t.timestamp||(e.throttledAddEvent({type:co.Custom,timestamp:1e3*t.timestamp,data:{timestamp:t.timestamp,tag:"breadcrumb",payload:{category:"sentry.feedback",data:{feedbackId:t.event_id}}}}),!1)))}(e,t),t
if(function(e,t){return!(e.type||!e.exception||!e.exception.values||!e.exception.values.length||!t.originalException||!t.originalException.__rrweb__)}(t,r)&&!e.getOptions()._experiments.captureExceptions)return _i&&a.kg.log("[Replay] Ignoring error from rrweb internals",t),null
const s=function(e,t){return"buffer"===e.recordingMode&&t.message!==Qr&&!(!t.exception||t.type)&&Ii(e.getOptions().errorSampleRate)}(e,t)
return(s||"session"===e.recordingMode)&&(t.tags={...t.tags,replayId:e.getSessionId()}),n&&n(t,{statusCode:200}),t}),{id:"Replay"})}(e,!oa(n))
n&&n.addEventProcessor?n.addEventProcessor(r):et(r),oa(n)&&(n.on("beforeSendEvent",function(e){return t=>{e.isEnabled()&&Fi(t)&&function(e,t){const n=t.exception&&t.exception.values&&t.exception.values[0].value
"string"==typeof n&&(n.match(/reactjs\.org\/docs\/error-decoder\.html\?invariant=(418|419|422|423|425)/)||n.match(/(does not match server-rendered HTML|Hydration failed because)/i))&&ti(e,ui({category:"replay.hydrate-error"}))}(e,t)}}(e)),n.on("afterSendEvent",Hi(e)),n.on("createDsc",(t=>{const n=e.getSessionId()
n&&e.isEnabled()&&"session"===e.recordingMode&&e.checkAndHandleExpiredSession()&&(t.replay_id=n)})),n.on("startTransaction",(t=>{e.lastTransaction=t})),n.on("finishTransaction",(t=>{e.lastTransaction=t})),n.on("beforeSendFeedback",((t,n)=>{const r=e.getSessionId()
n&&n.includeReplay&&e.isEnabled()&&r&&(e.flush(),t.contexts&&t.contexts.feedback&&(t.contexts.feedback.replay_id=r))})))}(this),this._hasInitializedCoreListeners=!0)}catch(e){this._handleException(e)}this._performanceCleanupCallback=function(e){function t(t){e.performanceEntries.includes(t)||e.performanceEntries.push(t)}function n({entries:e}){e.forEach(t)}const r=[]
return["navigation","paint","resource"].forEach((e=>{r.push(zr(e,n))})),r.push(Hr((({metric:t})=>{e.replayPerformanceEntries.push(function(e){const t=e.entries,n=t[t.length-1],r=n?n.element:void 0,s=e.value,o=yi(s)
return{type:"largest-contentful-paint",name:"largest-contentful-paint",start:o,end:o,data:{value:s,size:s,nodeId:r?Zo.mirror.getId(r):void 0}}}(t))}))),()=>{r.forEach((e=>e()))}}(this)}_removeListeners(){try{Xr.document.removeEventListener("visibilitychange",this._handleVisibilityChange),Xr.removeEventListener("blur",this._handleWindowBlur),Xr.removeEventListener("focus",this._handleWindowFocus),Xr.removeEventListener("keydown",this._handleKeyboardEvent),this.clickDetector&&this.clickDetector.removeListeners(),this._performanceCleanupCallback&&this._performanceCleanupCallback()}catch(e){this._handleException(e)}}__init(){this._handleVisibilityChange=()=>{"visible"===Xr.document.visibilityState?this._doChangeToForegroundTasks():this._doChangeToBackgroundTasks()}}__init2(){this._handleWindowBlur=()=>{const e=ui({category:"ui.blur"})
this._doChangeToBackgroundTasks(e)}}__init3(){this._handleWindowFocus=()=>{const e=ui({category:"ui.focus"})
this._doChangeToForegroundTasks(e)}}__init4(){this._handleKeyboardEvent=e=>{!function(e,t){if(!e.isEnabled())return
e.updateUserActivity()
const n=function(e){const{metaKey:t,shiftKey:n,ctrlKey:r,altKey:s,key:o,target:i}=e
if(!i||function(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||e.isContentEditable}(i)||!o)return null
const a=t||r||s,c=1===o.length
if(!a&&c)return null
const l=(0,Nn.Rt)(i,{maxStringLength:200})||"<unknown>"
return ui({category:"ui.keyDown",message:l,data:{...mi(i,l).data,metaKey:t,shiftKey:n,ctrlKey:r,altKey:s,key:o}})}(t)
n&&ti(e,n)}(this,e)}}_doChangeToBackgroundTasks(e){this.session&&(Di(this.session,{maxReplayDuration:this._options.maxReplayDuration,sessionIdleExpire:this.timeouts.sessionIdleExpire})||(e&&this._createCustomBreadcrumb(e),this.conditionalFlush()))}_doChangeToForegroundTasks(e){this.session&&(this.checkAndHandleExpiredSession()?e&&this._createCustomBreadcrumb(e):vi("[Replay] Document has become active, but session has expired"))}_updateUserActivity(e=Date.now()){this._lastActivity=e}_updateSessionActivity(e=Date.now()){this.session&&(this.session.lastActivity=e,this._maybeSaveSession())}_createCustomBreadcrumb(e){this.addUpdate((()=>{this.throttledAddEvent({type:co.Custom,timestamp:e.timestamp||0,data:{tag:"breadcrumb",payload:e}})}))}_addPerformanceEntries(){const e=(t=this.performanceEntries,t.map(gi).filter(Boolean)).concat(this.replayPerformanceEntries)
var t
return this.performanceEntries=[],this.replayPerformanceEntries=[],Promise.all(zi(this,e))}_clearContext(){this._context.errorIds.clear(),this._context.traceIds.clear(),this._context.urls=[]}_updateInitialTimestampFromEventBuffer(){const{session:e,eventBuffer:t}=this
if(!e||!t)return
if(e.segmentId)return
const n=t.getEarliestTimestamp()
n&&n<this._context.initialTimestamp&&(this._context.initialTimestamp=n)}_popEventContext(){const e={initialTimestamp:this._context.initialTimestamp,initialUrl:this._context.initialUrl,errorIds:Array.from(this._context.errorIds),traceIds:Array.from(this._context.traceIds),urls:this._context.urls}
return this._clearContext(),e}async _runFlush(){const e=this.getSessionId()
if(this.session&&this.eventBuffer&&e){if(await this._addPerformanceEntries(),this.eventBuffer&&this.eventBuffer.hasEvents&&(await async function(e){try{return Promise.all(zi(e,[ia(Xr.performance.memory)]))}catch(e){return[]}}(this),this.eventBuffer&&e===this.getSessionId()))try{this._updateInitialTimestampFromEventBuffer()
const t=Date.now()
if(t-this._context.initialTimestamp>this._options.maxReplayDuration+3e4)throw new Error("Session is too long, not sending replay")
const n=this._popEventContext(),r=this.session.segmentId++
this._maybeSaveSession()
const s=await this.eventBuffer.finish()
await ua({replayId:e,recordingData:s,segmentId:r,eventContext:n,session:this.session,options:this.getOptions(),timestamp:t})}catch(e){this._handleException(e),this.stop({reason:"sendReplay"})
const t=he()
t&&t.recordDroppedEvent("send_error","replay")}}else _i&&a.kg.error("[Replay] No session or eventBuffer found to flush.")}__init5(){this._flush=async({force:e=!1}={})=>{if(!this._isEnabled&&!e)return
if(!this.checkAndHandleExpiredSession())return void(_i&&a.kg.error("[Replay] Attempting to finish replay event after session expired."))
if(!this.session)return
const t=this.session.started,n=Date.now()-t
this._debouncedFlush.cancel()
const r=n<this._options.minReplayDuration,s=n>this._options.maxReplayDuration+5e3
if(r||s)return vi(`[Replay] Session duration (${Math.floor(n/1e3)}s) is too ${r?"short":"long"}, not sending replay.`,this._options._experiments.traceInternals),void(r&&this._debouncedFlush())
const o=this.eventBuffer
if(o&&0===this.session.segmentId&&!o.hasCheckout&&vi("[Replay] Flushing initial segment without checkout.",this._options._experiments.traceInternals),!this._flushLock)return this._flushLock=this._runFlush(),await this._flushLock,void(this._flushLock=void 0)
try{await this._flushLock}catch(e){_i&&a.kg.error(e)}finally{this._debouncedFlush()}}}_maybeSaveSession(){this.session&&this._options.stickySession&&Oi(this.session)}__init6(){this._onMutationHandler=e=>{const t=e.length,n=this._options.mutationLimit,r=n&&t>n
if(t>this._options.mutationBreadcrumbLimit||r){const e=ui({category:"replay.mutations",data:{count:t,limit:r}})
this._createCustomBreadcrumb(e)}return!r||(this.stop({reason:"mutationLimit",forceFlush:"session"===this.recordingMode}),!1)}}}function ha(e,t,n,r){const s=[...e,..."string"==typeof r?r.split(","):[],...t]
return void 0!==n&&("string"==typeof n&&s.push(`.${n}`),(0,a.Cf)((()=>{console.warn("[Replay] You are using a deprecated configuration item for privacy. Read the documentation on how to use the new privacy configuration.")}))),s.join(",")}const ma='img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',fa=["content-length","content-type","accept"]
let ga=!1
class ya{static __initStatic(){this.id="Replay"}constructor({flushMinDelay:e=5e3,flushMaxDelay:t=5500,minReplayDuration:n=4999,maxReplayDuration:r=36e5,stickySession:s=!0,useCompression:o=!0,workerUrl:i,_experiments:a={},sessionSampleRate:c,errorSampleRate:l,maskAllText:u=!0,maskAllInputs:d=!0,blockAllMedia:p=!0,mutationBreadcrumbLimit:h=750,mutationLimit:m=1e4,slowClickTimeout:f=7e3,slowClickIgnoreSelectors:g=[],networkDetailAllowUrls:y=[],networkDetailDenyUrls:_=[],networkCaptureBodies:v=!0,networkRequestHeaders:b=[],networkResponseHeaders:S=[],mask:k=[],maskAttributes:w=["title","placeholder"],unmask:E=[],block:x=[],unblock:T=[],ignore:C=[],maskFn:I,beforeAddRecordingEvent:R,beforeErrorSampling:O,blockClass:M,blockSelector:A,maskInputOptions:D,maskTextClass:L,maskTextSelector:N,ignoreClass:$}={}){this.name=ya.id
const P=function({mask:e,unmask:t,block:n,unblock:r,ignore:s,blockClass:o,blockSelector:i,maskTextClass:a,maskTextSelector:c,ignoreClass:l}){const u={maskTextSelector:ha(e,[".sentry-mask","[data-sentry-mask]"],a,c),unmaskTextSelector:ha(t,[".sentry-unmask","[data-sentry-unmask]"]),blockSelector:ha(n,[".sentry-block","[data-sentry-block]",'base[href="/"]'],o,i),unblockSelector:ha(r,[".sentry-unblock","[data-sentry-unblock]"]),ignoreSelector:ha(s,[".sentry-ignore","[data-sentry-ignore]",'input[type="file"]'],l)}
return o instanceof RegExp&&(u.blockClass=o),a instanceof RegExp&&(u.maskTextClass=a),u}({mask:k,unmask:E,block:x,unblock:T,ignore:C,blockClass:M,blockSelector:A,maskTextClass:L,maskTextSelector:N,ignoreClass:$})
if(this._recordingOptions={maskAllInputs:d,maskAllText:u,maskInputOptions:{...D||{},password:!0},maskTextFn:I,maskInputFn:I,maskAttributeFn:(e,t,n)=>function({el:e,key:t,maskAttributes:n,maskAllText:r,privacyOptions:s,value:o}){return r?s.unmaskTextSelector&&e.matches(s.unmaskTextSelector)?o:n.includes(t)||"value"===t&&"INPUT"===e.tagName&&["submit","button"].includes(e.getAttribute("type")||"")?o.replace(/[\S]/g,"*"):o:o}({maskAttributes:w,maskAllText:u,privacyOptions:P,key:e,value:t,el:n}),...P,slimDOMOptions:"all",inlineStylesheet:!0,inlineImages:!1,collectFonts:!0,errorHandler:e=>{try{e.__rrweb__=!0}catch(e){}}},this._initialOptions={flushMinDelay:e,flushMaxDelay:t,minReplayDuration:Math.min(n,15e3),maxReplayDuration:Math.min(r,36e5),stickySession:s,sessionSampleRate:c,errorSampleRate:l,useCompression:o,workerUrl:i,blockAllMedia:p,maskAllInputs:d,maskAllText:u,mutationBreadcrumbLimit:h,mutationLimit:m,slowClickTimeout:f,slowClickIgnoreSelectors:g,networkDetailAllowUrls:y,networkDetailDenyUrls:_,networkCaptureBodies:v,networkRequestHeaders:_a(b),networkResponseHeaders:_a(S),beforeAddRecordingEvent:R,beforeErrorSampling:O,_experiments:a},"number"==typeof c&&(console.warn(`[Replay] You are passing \`sessionSampleRate\` to the Replay integration.\nThis option is deprecated and will be removed soon.\nInstead, configure \`replaysSessionSampleRate\` directly in the SDK init options, e.g.:\nSentry.init({ replaysSessionSampleRate: ${c} })`),this._initialOptions.sessionSampleRate=c),"number"==typeof l&&(console.warn(`[Replay] You are passing \`errorSampleRate\` to the Replay integration.\nThis option is deprecated and will be removed soon.\nInstead, configure \`replaysOnErrorSampleRate\` directly in the SDK init options, e.g.:\nSentry.init({ replaysOnErrorSampleRate: ${l} })`),this._initialOptions.errorSampleRate=l),this._initialOptions.blockAllMedia&&(this._recordingOptions.blockSelector=this._recordingOptions.blockSelector?`${this._recordingOptions.blockSelector},${ma}`:ma),this._isInitialized&&(0,kr.j)())throw new Error("Multiple Sentry Session Replay instances are not supported")
this._isInitialized=!0}get _isInitialized(){return ga}set _isInitialized(e){ga=e}setupOnce(){(0,kr.j)()&&(this._setup(),setTimeout((()=>this._initialize())))}start(){this._replay&&this._replay.start()}startBuffering(){this._replay&&this._replay.startBuffering()}stop(){return this._replay?this._replay.stop({forceFlush:"session"===this._replay.recordingMode}):Promise.resolve()}flush(e){return this._replay&&this._replay.isEnabled()?this._replay.sendBufferedReplayOrFlush(e):Promise.resolve()}getReplayId(){if(this._replay&&this._replay.isEnabled())return this._replay.getSessionId()}_initialize(){this._replay&&this._replay.initializeSampling()}_setup(){const e=function(e){const t=he(),n=t&&t.getOptions(),r={sessionSampleRate:0,errorSampleRate:0,...(0,o.Jr)(e)}
return n?(null==e.sessionSampleRate&&null==e.errorSampleRate&&null==n.replaysSessionSampleRate&&null==n.replaysOnErrorSampleRate&&(0,a.Cf)((()=>{console.warn("Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.")})),"number"==typeof n.replaysSessionSampleRate&&(r.sessionSampleRate=n.replaysSessionSampleRate),"number"==typeof n.replaysOnErrorSampleRate&&(r.errorSampleRate=n.replaysOnErrorSampleRate),r):((0,a.Cf)((()=>{console.warn("SDK client is not available.")})),r)}(this._initialOptions)
this._replay=new pa({options:e,recordingOptions:this._recordingOptions})}}function _a(e){return[...fa,...e.map((e=>e.toLowerCase()))]}ya.__initStatic()
const va=l.GLOBAL_OBJ,ba="#ffffff",Sa="inherit",ka="rgba(108, 95, 199, 1)",wa={fontFamily:"'Helvetica Neue', Arial, sans-serif",fontSize:"14px",background:ba,backgroundHover:"#f6f6f7",foreground:"#2b2233",border:"1.5px solid rgba(41, 35, 47, 0.13)",boxShadow:"0px 4px 24px 0px rgba(43, 34, 51, 0.12)",success:"#268d75",error:"#df3338",submitBackground:"rgba(88, 74, 192, 1)",submitBackgroundHover:ka,submitBorder:ka,submitOutlineFocus:"#29232f",submitForeground:ba,submitForegroundHover:ba,cancelBackground:"transparent",cancelBackgroundHover:"var(--background-hover)",cancelBorder:"var(--border)",cancelOutlineFocus:"var(--input-outline-focus)",cancelForeground:"var(--foreground)",cancelForegroundHover:"var(--foreground)",inputBackground:Sa,inputForeground:Sa,inputBorder:"var(--border)",inputOutlineFocus:ka},Ea=wa,xa={...wa,background:"#29232f",backgroundHover:"#352f3b",foreground:"#ebe6ef",border:"1.5px solid rgba(235, 230, 239, 0.15)",success:"#2da98c",error:"#f55459"},Ta="widget",Ca="api",Ia="undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__
function Ra(e,t){return{...e,...t,themeDark:{...e.themeDark,...t.themeDark},themeLight:{...e.themeLight,...t.themeLight}}}function Oa(e){return`\n  --background: ${e.background};\n  --background-hover: ${e.backgroundHover};\n  --foreground: ${e.foreground};\n  --error: ${e.error};\n  --success: ${e.success};\n  --border: ${e.border};\n  --box-shadow: ${e.boxShadow};\n\n  --submit-background: ${e.submitBackground};\n  --submit-background-hover: ${e.submitBackgroundHover};\n  --submit-border: ${e.submitBorder};\n  --submit-outline-focus: ${e.submitOutlineFocus};\n  --submit-foreground: ${e.submitForeground};\n  --submit-foreground-hover: ${e.submitForegroundHover};\n\n  --cancel-background: ${e.cancelBackground};\n  --cancel-background-hover: ${e.cancelBackgroundHover};\n  --cancel-border: ${e.cancelBorder};\n  --cancel-outline-focus: ${e.cancelOutlineFocus};\n  --cancel-foreground: ${e.cancelForeground};\n  --cancel-foreground-hover: ${e.cancelForegroundHover};\n\n  --input-background: ${e.inputBackground};\n  --input-foreground: ${e.inputForeground};\n  --input-border: ${e.inputBorder};\n  --input-outline-focus: ${e.inputOutlineFocus};\n  `}function Ma(e,t){return Object.entries(t).forEach((([t,n])=>{e.setAttributeNS(null,t,n)})),e}function Aa(e,t,...n){const r=va.document.createElement(e)
t&&Object.entries(t).forEach((([e,t])=>{"className"===e&&"string"==typeof t?r.setAttribute("class",t):"boolean"==typeof t&&t?r.setAttribute(e,""):"string"==typeof t?r.setAttribute(e,t):e.startsWith("on")&&"function"==typeof t&&r.addEventListener(e.substring(2).toLowerCase(),t)}))
for(const s of n)Da(r,s)
return r}function Da(e,t){const n=va.document
if(null!=t)if(Array.isArray(t))for(const r of t)Da(e,r)
else!1===t||("string"==typeof t?e.appendChild(n.createTextNode(t)):t instanceof Node?e.appendChild(t):e.appendChild(n.createTextNode(String(t))))}function La(e,t){const n=e.get(t)
return"string"==typeof n?n.trim():""}const Na="http://www.w3.org/2000/svg"
function $a({shadow:e,options:{shouldCreateActor:t=!0,...n},attachTo:r}){let s,o,i=!1
async function c(t){if(!o)return
const r=[]
n.isNameRequired&&!t.name&&r.push(n.nameLabel),n.isEmailRequired&&!t.email&&r.push(n.emailLabel),t.message||r.push(n.messageLabel),r.length>0?o.showError(`Please enter in the following required fields: ${r.join(", ")}`):await async function(e,t,n){if(e){e.hideError()
try{const e=await function({name:e,email:t,message:n,source:r=Ca,url:s=(0,Nn.l4)()},o={}){if(!n)throw new Error("Unable to submit feedback with empty message")
return async function({feedback:{message:e,email:t,name:n,source:r,url:s}},{includeReplay:o=!0}={}){const i=he(),a=i&&i.getTransport(),c=i&&i.getDsn()
if(!i||!a||!c)return
const l={contexts:{feedback:{contact_email:t,name:n,message:e,url:s,source:r}},type:"feedback"}
return ce((async e=>{e.clearBreadcrumbs(),[Ca,Ta].includes(String(r))&&e.setLevel("info")
const t=await async function({client:e,scope:t,event:n}){const r={}
e.emit&&e.emit("preprocessEvent",n,r)
const s=await K(e.getOptions(),n,r,t,e,z())
return null===s?(e.recordDroppedEvent("event_processor","feedback",n),null):(s.platform=s.platform||"javascript",s)}({scope:e,client:i,event:l})
if(!t)return
i.emit&&i.emit("beforeSendFeedback",t,{includeReplay:Boolean(o)})
const n=Je(t,c,i.getOptions()._metadata,i.getOptions().tunnel)
let s
try{s=await a.send(n)}catch(e){const t=new Error("Unable to send Feedback")
try{t.cause=e}catch(e){}throw t}if(s){if("number"==typeof s.statusCode&&(s.statusCode<200||s.statusCode>=300))throw new Error("Unable to send Feedback")
return s}}))}({feedback:{name:e,email:t,message:n,url:s,source:r}},o)}({...t,source:Ta},n)
return e}catch(t){Ia&&a.kg.error(t),e&&e.showError("There was a problem submitting feedback, please wait and try again.")}}}(o,t)?(h(),function(){if(e)try{const t=function({message:e,onRemove:t}){function n(){r&&(r.remove(),t&&t())}const r=Aa("div",{className:"success-message",onClick:n},function(){const e=e=>va.document.createElementNS("http://www.w3.org/2000/svg",e),t=Ma(e("svg"),{class:"success-icon",width:"16",height:"17",viewBox:"0 0 16 17",fill:"none"}),n=Ma(e("g"),{clipPath:"url(#clip0_57_156)"}),r=Ma(e("path"),{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.55544 15.1518C4.87103 16.0308 6.41775 16.5 8 16.5C10.1217 16.5 12.1566 15.6571 13.6569 14.1569C15.1571 12.6566 16 10.6217 16 8.5C16 6.91775 15.5308 5.37103 14.6518 4.05544C13.7727 2.73985 12.5233 1.71447 11.0615 1.10897C9.59966 0.503466 7.99113 0.34504 6.43928 0.653721C4.88743 0.962403 3.46197 1.72433 2.34315 2.84315C1.22433 3.96197 0.462403 5.38743 0.153721 6.93928C-0.15496 8.49113 0.00346625 10.0997 0.608967 11.5615C1.21447 13.0233 2.23985 14.2727 3.55544 15.1518ZM4.40546 3.1204C5.46945 2.40946 6.72036 2.03 8 2.03C9.71595 2.03 11.3616 2.71166 12.575 3.92502C13.7883 5.13838 14.47 6.78405 14.47 8.5C14.47 9.77965 14.0905 11.0306 13.3796 12.0945C12.6687 13.1585 11.6582 13.9878 10.476 14.4775C9.29373 14.9672 7.99283 15.0953 6.73777 14.8457C5.48271 14.596 4.32987 13.9798 3.42502 13.075C2.52018 12.1701 1.90397 11.0173 1.65432 9.76224C1.40468 8.50718 1.5328 7.20628 2.0225 6.02404C2.5122 4.8418 3.34148 3.83133 4.40546 3.1204Z"}),s=Ma(e("path"),{d:"M6.68775 12.4297C6.78586 12.4745 6.89218 12.4984 7 12.5C7.11275 12.4955 7.22315 12.4664 7.32337 12.4145C7.4236 12.3627 7.51121 12.2894 7.58 12.2L12 5.63999C12.0848 5.47724 12.1071 5.28902 12.0625 5.11098C12.0178 4.93294 11.9095 4.77744 11.7579 4.67392C11.6064 4.57041 11.4221 4.52608 11.24 4.54931C11.0579 4.57254 10.8907 4.66173 10.77 4.79999L6.88 10.57L5.13 8.56999C5.06508 8.49566 4.98613 8.43488 4.89768 8.39111C4.80922 8.34735 4.713 8.32148 4.61453 8.31498C4.51605 8.30847 4.41727 8.32147 4.32382 8.35322C4.23038 8.38497 4.14413 8.43484 4.07 8.49999C3.92511 8.63217 3.83692 8.81523 3.82387 9.01092C3.81083 9.2066 3.87393 9.39976 4 9.54999L6.43 12.24C6.50187 12.3204 6.58964 12.385 6.68775 12.4297Z"})
t.appendChild(n).append(s,r)
const o=e("defs"),i=Ma(e("clipPath"),{id:"clip0_57_156"}),a=Ma(e("rect"),{width:"16",height:"16",fill:"white",transform:"translate(0 0.5)"})
return i.appendChild(a),o.appendChild(i),t.appendChild(o).appendChild(i).appendChild(a),{get el(){return t}}}().el,e)
return{el:r,remove:n}}({message:n.successMessageText,onRemove:()=>{r&&clearTimeout(r),l()}})
if(!t.el)throw new Error("Unable to show success message")
e.appendChild(t.el)
const r=setTimeout((()=>{t&&t.remove()}),5e3)}catch(e){a.kg.error(e)}}(),n.onSubmitSuccess&&n.onSubmitSuccess()):n.onSubmitError&&n.onSubmitError()}function l(){s&&s.show()}function u(){s&&s.hide()}function d(){try{if(o)return o.open(),i=!0,void(n.onFormOpen&&n.onFormOpen())
const t=n.useSentryUser,r=me(),s=r&&r.getUser()
if(o=function({formTitle:e,showBranding:t,showName:n,showEmail:r,isNameRequired:s,isEmailRequired:o,colorScheme:i,defaultName:a,defaultEmail:c,onClosed:l,onCancel:u,onSubmit:d,...p}){let h=null
function m(){h&&(h.open=!1)}const{el:f,showError:g,hideError:y}=function({nameLabel:e,namePlaceholder:t,emailLabel:n,emailPlaceholder:r,messageLabel:s,messagePlaceholder:o,cancelButtonLabel:i,submitButtonLabel:a,showName:c,showEmail:l,isNameRequired:u,isEmailRequired:d,defaultName:p,defaultEmail:h,onCancel:m,onSubmit:f}){const{el:g}=function({label:e}){return{el:Aa("button",{type:"submit",className:"btn btn--primary","aria-label":e},e)}}({label:a}),y=Aa("div",{className:"form__error-container form__error-container--hidden","aria-hidden":"true"}),_=Aa("input",{id:"name",type:c?"text":"hidden","aria-hidden":c?"false":"true",name:"name",required:u,className:"form__input",placeholder:t,value:p}),v=Aa("input",{id:"email",type:l?"text":"hidden","aria-hidden":l?"false":"true",name:"email",required:d,className:"form__input",placeholder:r,value:h}),b=Aa("textarea",{id:"message",autoFocus:"true",rows:"5",name:"message",required:!0,className:"form__input form__input--textarea",placeholder:o}),S=Aa("button",{type:"button",className:"btn btn--default","aria-label":i,onClick:e=>{m&&m(e)}},i),k=Aa("form",{className:"form",onSubmit:function(e){if(e.preventDefault(),e.target instanceof HTMLFormElement)try{if(f){const t=new FormData(e.target),n={name:La(t,"name"),email:La(t,"email"),message:La(t,"message")}
f(n)}}catch(e){}}},[y,c&&Aa("label",{htmlFor:"name",className:"form__label"},[Aa("span",{className:"form__label__text"},e,u&&Aa("span",{className:"form__label__text--required"}," (required)")),_]),!c&&_,l&&Aa("label",{htmlFor:"email",className:"form__label"},[Aa("span",{className:"form__label__text"},n,d&&Aa("span",{className:"form__label__text--required"}," (required)")),v]),!l&&v,Aa("label",{htmlFor:"message",className:"form__label"},[Aa("span",{className:"form__label__text"},s,Aa("span",{className:"form__label__text--required"}," (required)")),b]),Aa("div",{className:"btn-group"},[g,S])])
return{get el(){return k},showError:function(e){y.textContent=e,y.classList.remove("form__error-container--hidden"),y.setAttribute("aria-hidden","false")},hideError:function(){y.textContent="",y.classList.add("form__error-container--hidden"),y.setAttribute("aria-hidden","true")}}}({showEmail:r,showName:n,isEmailRequired:o,isNameRequired:s,defaultName:a,defaultEmail:c,onSubmit:d,onCancel:u,...p})
return h=Aa("dialog",{className:"dialog",open:!0,onClick:function(){m(),l&&l()}},Aa("div",{className:"dialog__content",onClick:e=>{e.stopPropagation()}},Aa("h2",{className:"dialog__header"},e,t&&Aa("a",{className:"brand-link",target:"_blank",href:"https://sentry.io/welcome/",title:"Powered by Sentry",rel:"noopener noreferrer"},function({colorScheme:e}){const t=e=>va.document.createElementNS(Na,e),n=Ma(t("svg"),{class:"sentry-logo",width:"32",height:"30",viewBox:"0 0 72 66",fill:"none"}),r=Ma(t("path"),{transform:"translate(11, 11)",d:"M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z"})
n.append(r)
const s=t("defs"),o=t("style")
return"system"===e&&(o.textContent="\n    @media (prefers-color-scheme: dark) {\n      path: {\n        fill: '#fff';\n      }\n    }\n    "),o.textContent=`\n    path {\n      fill: ${"dark"===e?"#fff":"#362d59"};\n    }`,s.append(o),n.append(s),{get el(){return n}}}({colorScheme:i}).el)),f)),{get el(){return h},showError:g,hideError:y,open:function(){h&&(h.open=!0)},close:m,checkIsOpen:function(){return h&&!0===h.open||!1}}}({colorScheme:n.colorScheme,showBranding:n.showBranding,showName:n.showName||n.isNameRequired,showEmail:n.showEmail||n.isEmailRequired,isNameRequired:n.isNameRequired,isEmailRequired:n.isEmailRequired,formTitle:n.formTitle,cancelButtonLabel:n.cancelButtonLabel,submitButtonLabel:n.submitButtonLabel,emailLabel:n.emailLabel,emailPlaceholder:n.emailPlaceholder,messageLabel:n.messageLabel,messagePlaceholder:n.messagePlaceholder,nameLabel:n.nameLabel,namePlaceholder:n.namePlaceholder,defaultName:t&&s&&s[t.name]||"",defaultEmail:t&&s&&s[t.email]||"",onClosed:()=>{l(),i=!1,n.onFormClose&&n.onFormClose()},onCancel:()=>{p(),l()},onSubmit:c}),!o.el)throw new Error("Unable to open Feedback dialog")
e.appendChild(o.el),u(),n.onFormOpen&&n.onFormOpen()}catch(e){a.kg.error(e)}}function p(){o&&(o.close(),i=!1,n.onFormClose&&n.onFormClose())}function h(){if(o){p()
const e=o.el
e&&e.remove(),o=void 0}}function m(){i||d(),u()}return r?r.addEventListener("click",m):t&&(s=function({buttonLabel:e,onClick:t}){const n=Aa("button",{type:"button",className:"widget__actor","aria-label":e,"aria-hidden":"false"},function(){const e=e=>va.document.createElementNS("http://www.w3.org/2000/svg",e),t=Ma(e("svg"),{class:"feedback-icon",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none"}),n=Ma(e("g"),{clipPath:"url(#clip0_57_80)"}),r=Ma(e("path"),{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M15.6622 15H12.3997C12.2129 14.9959 12.031 14.9396 11.8747 14.8375L8.04965 12.2H7.49956V19.1C7.4875 19.3348 7.3888 19.5568 7.22256 19.723C7.05632 19.8892 6.83435 19.9879 6.59956 20H2.04956C1.80193 19.9968 1.56535 19.8969 1.39023 19.7218C1.21511 19.5467 1.1153 19.3101 1.11206 19.0625V12.2H0.949652C0.824431 12.2017 0.700142 12.1783 0.584123 12.1311C0.468104 12.084 0.362708 12.014 0.274155 11.9255C0.185602 11.8369 0.115689 11.7315 0.0685419 11.6155C0.0213952 11.4995 -0.00202913 11.3752 -0.00034808 11.25V3.75C-0.00900498 3.62067 0.0092504 3.49095 0.0532651 3.36904C0.0972798 3.24712 0.166097 3.13566 0.255372 3.04168C0.344646 2.94771 0.452437 2.87327 0.571937 2.82307C0.691437 2.77286 0.82005 2.74798 0.949652 2.75H8.04965L11.8747 0.1625C12.031 0.0603649 12.2129 0.00407221 12.3997 0H15.6622C15.9098 0.00323746 16.1464 0.103049 16.3215 0.278167C16.4966 0.453286 16.5964 0.689866 16.5997 0.9375V3.25269C17.3969 3.42959 18.1345 3.83026 18.7211 4.41679C19.5322 5.22788 19.9878 6.32796 19.9878 7.47502C19.9878 8.62209 19.5322 9.72217 18.7211 10.5333C18.1345 11.1198 17.3969 11.5205 16.5997 11.6974V14.0125C16.6047 14.1393 16.5842 14.2659 16.5395 14.3847C16.4948 14.5035 16.4268 14.6121 16.3394 14.7042C16.252 14.7962 16.147 14.8698 16.0307 14.9206C15.9144 14.9714 15.7891 14.9984 15.6622 15ZM1.89695 10.325H1.88715V4.625H8.33715C8.52423 4.62301 8.70666 4.56654 8.86215 4.4625L12.6872 1.875H14.7247V13.125H12.6872L8.86215 10.4875C8.70666 10.3835 8.52423 10.327 8.33715 10.325H2.20217C2.15205 10.3167 2.10102 10.3125 2.04956 10.3125C1.9981 10.3125 1.94708 10.3167 1.89695 10.325ZM2.98706 12.2V18.1625H5.66206V12.2H2.98706ZM16.5997 9.93612V5.01393C16.6536 5.02355 16.7072 5.03495 16.7605 5.04814C17.1202 5.13709 17.4556 5.30487 17.7425 5.53934C18.0293 5.77381 18.2605 6.06912 18.4192 6.40389C18.578 6.73866 18.6603 7.10452 18.6603 7.47502C18.6603 7.84552 18.578 8.21139 18.4192 8.54616C18.2605 8.88093 18.0293 9.17624 17.7425 9.41071C17.4556 9.64518 17.1202 9.81296 16.7605 9.90191C16.7072 9.91509 16.6536 9.9265 16.5997 9.93612Z"})
t.appendChild(n).appendChild(r)
const s=e("defs"),o=Ma(e("clipPath"),{id:"clip0_57_80"}),i=Ma(e("rect"),{width:"20",height:"20",fill:"white"})
return o.appendChild(i),s.appendChild(o),t.appendChild(s).appendChild(o).appendChild(i),{get el(){return t}}}().el,e?Aa("span",{className:"widget__actor__text"},e):null)
return n.addEventListener("click",(function(e){t&&t(e)})),{get el(){return n},show:()=>{n.classList.remove("widget__actor--hidden"),n.setAttribute("aria-hidden","false")},hide:()=>{n.classList.add("widget__actor--hidden"),n.setAttribute("aria-hidden","true")}}}({buttonLabel:n.buttonLabel,onClick:m}),s.el&&e.appendChild(s.el)),{get actor(){return s},get dialog(){return o},showActor:l,hideActor:u,removeActor:function(){s&&s.el&&s.el.remove()},openDialog:d,closeDialog:p,removeDialog:h}}const Pa=va.document
class Ba{static __initStatic(){this.id="Feedback"}constructor({id:e="sentry-feedback",showBranding:t=!0,autoInject:n=!0,showEmail:r=!0,showName:s=!0,useSentryUser:o={email:"email",name:"username"},isEmailRequired:i=!1,isNameRequired:a=!1,themeDark:c,themeLight:l,colorScheme:u="system",buttonLabel:d="Report a Bug",cancelButtonLabel:p="Cancel",submitButtonLabel:h="Send Bug Report",formTitle:m="Report a Bug",emailPlaceholder:f="your.email@example.org",emailLabel:g="Email",messagePlaceholder:y="What's the bug? What did you expect?",messageLabel:_="Description",namePlaceholder:v="Your Name",nameLabel:b="Name",successMessageText:S="Thank you for your report!",onFormClose:k,onFormOpen:w,onSubmitError:E,onSubmitSuccess:x}={}){this.name=Ba.id,this._host=null,this._shadow=null,this._widget=null,this._widgets=new Set,this._hasInsertedActorStyles=!1,this.options={id:e,showBranding:t,autoInject:n,isEmailRequired:i,isNameRequired:a,showEmail:r,showName:s,useSentryUser:o,colorScheme:u,themeDark:{...xa,...c},themeLight:{...Ea,...l},buttonLabel:d,cancelButtonLabel:p,submitButtonLabel:h,formTitle:m,emailLabel:g,emailPlaceholder:f,messageLabel:_,messagePlaceholder:y,nameLabel:b,namePlaceholder:v,successMessageText:S,onFormClose:k,onFormOpen:w,onSubmitError:E,onSubmitSuccess:x}}setupOnce(){if((0,kr.j)())try{this._cleanupWidgetIfExists()
const{autoInject:e}=this.options
if(!e)return
this._createWidget(this.options)}catch(e){Ia&&a.kg.error(e)}}openDialog(){this._widget||this._createWidget({...this.options,shouldCreateActor:!1}),this._widget&&this._widget.openDialog()}closeDialog(){this._widget&&this._widget.closeDialog()}attachTo(e,t){try{const n=Ra(this.options,t||{})
return this._ensureShadowHost(n,(({shadow:t})=>{const r="string"==typeof e?Pa.querySelector(e):"function"==typeof e.addEventListener?e:null
if(!r)return Ia&&a.kg.error("[Feedback] Unable to attach to target element"),null
const s=$a({shadow:t,options:n,attachTo:r})
return this._widgets.add(s),this._widget||(this._widget=s),s}))}catch(e){return Ia&&a.kg.error(e),null}}createWidget(e){try{return this._createWidget(Ra(this.options,e||{}))}catch(e){return Ia&&a.kg.error(e),null}}removeWidget(e){if(!e)return!1
try{if(this._widgets.has(e))return e.removeActor(),e.removeDialog(),this._widgets.delete(e),this._widget===e&&(this._widget=null),!0}catch(e){Ia&&a.kg.error(e)}return!1}getWidget(){return this._widget}remove(){this._host&&this._host.remove(),this._initialize()}_initialize(){this._host=null,this._shadow=null,this._widget=null,this._widgets=new Set,this._hasInsertedActorStyles=!1}_cleanupWidgetIfExists(){this._host&&this.remove()
const e=Pa.querySelector(`#${this.options.id}`)
e&&e.remove()}_createWidget(e){return this._ensureShadowHost(e,(({shadow:t})=>{const n=$a({shadow:t,options:e})
return!this._hasInsertedActorStyles&&n.actor&&(t.appendChild(function(e){const t=e.createElement("style")
return t.textContent="\n.widget__actor {\n  line-height: 25px;\n\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  border-radius: 12px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 12px 16px;\n  text-decoration: none;\n  z-index: 9000;\n\n  color: var(--foreground);\n  background-color: var(--background);\n  border: var(--border);\n  box-shadow: var(--box-shadow);\n  opacity: 1;\n  transition: opacity 0.1s ease-in-out;\n}\n\n.widget__actor:hover {\n  background-color: var(--background-hover);\n}\n\n.widget__actor svg {\n  width: 16px;\n  height: 16px;\n}\n\n.widget__actor--hidden {\n  opacity: 0;\n  pointer-events: none;\n  visibility: hidden;\n}\n\n.widget__actor__text {\n}\n\n.feedback-icon path {\n  fill: var(--foreground);\n}\n",t}(Pa)),this._hasInsertedActorStyles=!0),this._widgets.add(n),this._widget||(this._widget=n),n}))}_ensureShadowHost(e,t){let n=!1
if(!this._shadow||!this._host){const{id:t,colorScheme:r,themeLight:s,themeDark:o}=e,{shadow:i,host:c}=function({id:e,colorScheme:t,themeDark:n,themeLight:r}){try{const s=va.document,o=s.createElement("div")
o.id=e
const i=o.attachShadow({mode:"open"})
return i.appendChild(function(e,t,n){const r=e.createElement("style")
return r.textContent=`\n:host {\n  --bottom: 1rem;\n  --right: 1rem;\n  --top: auto;\n  --left: auto;\n  --z-index: 100000;\n  --font-family: ${n.light.fontFamily};\n  --font-size: ${n.light.fontSize};\n\n  position: fixed;\n  left: var(--left);\n  right: var(--right);\n  bottom: var(--bottom);\n  top: var(--top);\n  z-index: var(--z-index);\n\n  font-family: var(--font-family);\n  font-size: var(--font-size);\n\n  ${Oa("dark"===t?n.dark:n.light)}\n}\n\n${"system"===t?`\n@media (prefers-color-scheme: dark) {\n  :host {\n    ${Oa(n.dark)}\n  }\n}`:""}\n}`,r}(s,t,{dark:n,light:r})),i.appendChild(function(e){const t=e.createElement("style")
return t.textContent="\n.dialog {\n  line-height: 25px;\n  background-color: rgba(0, 0, 0, 0.05);\n  border: none;\n  position: fixed;\n  inset: 0;\n  z-index: 10000;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 1;\n  transition: opacity 0.2s ease-in-out;\n}\n\n.dialog:not([open]) {\n  opacity: 0;\n  pointer-events: none;\n  visibility: hidden;\n}\n.dialog:not([open]) .dialog__content {\n  transform: translate(0, -16px) scale(0.98);\n}\n\n.dialog__content {\n  position: fixed;\n  left: var(--left);\n  right: var(--right);\n  bottom: var(--bottom);\n  top: var(--top);\n\n  border: var(--border);\n  border-radius: 20px;\n  background-color: var(--background);\n  color: var(--foreground);\n\n  width: 320px;\n  max-width: 100%;\n  max-height: calc(100% - 2rem);\n  display: flex;\n  flex-direction: column;\n  box-shadow: var(--box-shadow);\n  transition: transform 0.2s ease-in-out;\n  transform: translate(0, 0) scale(1);\n}\n\n.dialog__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 20px;\n  font-weight: 600;\n  padding: 24px 24px 0 24px;\n  margin: 0;\n  margin-bottom: 16px;\n}\n\n.brand-link {\n  display: inline-flex;\n}\n\n.error {\n  color: var(--error);\n  margin-bottom: 16px;\n}\n\n.form {\n  display: grid;\n  overflow: auto;\n  flex-direction: column;\n  gap: 16px;\n  padding: 0 24px 24px;\n}\n\n.form__error-container {\n  color: var(--error);\n}\n\n.form__error-container--hidden {\n  display: none;\n}\n\n.form__label {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin: 0px;\n}\n\n.form__label__text {\n  display: grid;\n  gap: 4px;\n  align-items: center;\n  grid-auto-flow: column;\n  grid-auto-columns: max-content;\n}\n\n.form__label__text--required {\n  font-size: 0.85em;\n}\n\n.form__input {\n  font-family: inherit;\n  line-height: inherit;\n  background-color: var(--input-background);\n  box-sizing: border-box;\n  border: var(--input-border);\n  border-radius: 6px;\n  color: var(--input-foreground);\n  font-size: 14px;\n  font-weight: 500;\n  padding: 6px 12px;\n}\n\n.form__input:focus-visible {\n  outline: 1px auto var(--input-outline-focus);\n}\n\n.form__input--textarea {\n  font-family: inherit;\n  resize: vertical;\n}\n\n.btn-group {\n  display: grid;\n  gap: 8px;\n  margin-top: 8px;\n}\n\n.btn {\n  line-height: inherit;\n  border: var(--cancel-border);\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 6px 16px;\n}\n.btn[disabled] {\n  opacity: 0.6;\n  pointer-events: none;\n}\n\n.btn--primary {\n  background-color: var(--submit-background);\n  border-color: var(--submit-border);\n  color: var(--submit-foreground);\n}\n.btn--primary:hover {\n  background-color: var(--submit-background-hover);\n  color: var(--submit-foreground-hover);\n}\n.btn--primary:focus-visible {\n  outline: 1px auto var(--submit-outline-focus);\n}\n\n.btn--default {\n  background-color: var(--cancel-background);\n  color: var(--cancel-foreground);\n  font-weight: 500;\n}\n.btn--default:hover {\n  background-color: var(--cancel-background-hover);\n  color: var(--cancel-foreground-hover);\n}\n.btn--default:focus-visible {\n  outline: 1px auto var(--cancel-outline-focus);\n}\n\n.success-message {\n  background-color: var(--background);\n  border: var(--border);\n  border-radius: 12px;\n  box-shadow: var(--box-shadow);\n  font-weight: 600;\n  color: var(--success);\n  padding: 12px 24px;\n  line-height: 25px;\n  display: grid;\n  align-items: center;\n  grid-auto-flow: column;\n  gap: 6px;\n  cursor: default;\n}\n\n.success-icon path {\n  fill: var(--success);\n}\n",t}(s)),{shadow:i,host:o}}catch(e){throw a.kg.warn("[Feedback] Browser does not support shadow DOM API"),new Error("Browser does not support shadow DOM API.")}}({id:t,colorScheme:r,themeLight:s,themeDark:o})
this._shadow=i,this._host=c,n=!0}this._host.dataset.sentryFeedbackColorscheme=e.colorScheme
const r=t({shadow:this._shadow,host:this._host})
return n&&Pa.body.appendChild(this._host),r}}function Fa(e){return"number"==typeof e&&isFinite(e)}function Ua(e,{startTimestamp:t,...n}){return t&&e.startTimestamp>t&&(e.startTimestamp=t),e.startChild({startTimestamp:t,...n})}Ba.__initStatic()
function ja(e){return e/1e3}function Ha(){return xr&&xr.addEventListener&&xr.performance}let za,qa,Wa=0,Ga={}
function Ja(e,t,n,r,s,o){const i=o?t[o]:t[`${n}End`],a=t[`${n}Start`]
a&&i&&Ua(e,{op:"browser",origin:"auto.browser.browser.metrics",description:s||n,startTimestamp:r+ja(a),endTimestamp:r+ja(i)})}function Ka(e,t,n,r){const s=t[n]
null!=s&&s<2147483647&&(e[r]=s)}var Va=n(393)
const Ya=["localhost",/^\/(?!\/)/],Xa={traceFetch:!0,traceXHR:!0,enableHTTPTimings:!0,tracingOrigins:Ya,tracePropagationTargets:Ya}
function Za(e){const{traceFetch:t,traceXHR:n,tracePropagationTargets:r,tracingOrigins:s,shouldCreateSpanForRequest:o,enableHTTPTimings:i}={traceFetch:Xa.traceFetch,traceXHR:Xa.traceXHR,...e},a="function"==typeof o?o:e=>!0,c=e=>function(e,t){return(0,G.U0)(e,t||Ya)}(e,r||s),l={}
t&&(0,Xn.U)((e=>{const t=function(e,t,n,r,s="auto.http.browser"){if(!yt()||!e.fetchData)return
const o=t(e.fetchData.url)
if(e.endTimestamp&&o){const t=e.fetchData.__span
if(!t)return
const n=r[t]
if(n){if(e.response){n.setHttpStatus(e.response.status)
const t=e.response&&e.response.headers&&e.response.headers.get("content-length")
if(t){const e=parseInt(t)
e>0&&n.setAttribute("http.response_content_length",e)}}else e.error&&n.setStatus("internal_error")
n.end(),delete r[t]}return}const i=me(),a=he(),c=It(),{method:l,url:u}=e.fetchData,p=o&&c?c.startChild({data:{url:u,type:"fetch","http.method":l},description:`${l} ${u}`,op:"http.client",origin:s}):void 0
if(p&&(e.fetchData.__span=p.spanContext().spanId,r[p.spanContext().spanId]=p),n(e.fetchData.url)&&a){const t=e.args[0]
e.args[1]=e.args[1]||{}
const n=e.args[1]
n.headers=function(e,t,n,r,s){const o=s||n.getSpan(),i=o&&o.transaction,{traceId:a,sampled:c,dsc:l}=n.getPropagationContext(),u=o?w(o):(0,b.$p)(a,void 0,c),p=i?R(i):l||I(a,t,n),h=(0,Va.IQ)(p),m="undefined"!=typeof Request&&(0,d.V9)(e,Request)?e.headers:r.headers
if(m){if("undefined"!=typeof Headers&&(0,d.V9)(m,Headers)){const e=new Headers(m)
return e.append("sentry-trace",u),h&&e.append(Va.bU,h),e}if(Array.isArray(m)){const e=[...m,["sentry-trace",u]]
return h&&e.push([Va.bU,h]),e}{const e="baggage"in m?m.baggage:void 0,t=[]
return Array.isArray(e)?t.push(...e):e&&t.push(e),h&&t.push(h),{...m,"sentry-trace":u,baggage:t.length>0?t.join(","):void 0}}}return{"sentry-trace":u,baggage:h}}(t,a,i,n,p)}return p}(e,a,c,l)
i&&t&&Qa(t)})),n&&(0,Yn.UK)((e=>{const t=function(e,t,n,r){const s=e.xhr,o=s&&s[Yn.xU]
if(!yt()||!s||s.__sentry_own_request__||!o)return
const i=t(o.url)
if(e.endTimestamp&&i){const e=s.__sentry_xhr_span_id__
if(!e)return
const t=r[e]
return void(t&&void 0!==o.status_code&&(t.setHttpStatus(o.status_code),t.end(),delete r[e]))}const a=me(),c=It(),l=i&&c?c.startChild({data:{type:"xhr","http.method":o.method,url:o.url},description:`${o.method} ${o.url}`,op:"http.client",origin:"auto.http.browser"}):void 0
if(l&&(s.__sentry_xhr_span_id__=l.spanContext().spanId,r[s.__sentry_xhr_span_id__]=l),s.setRequestHeader&&n(o.url))if(l){const e=l&&l.transaction,t=e&&R(e),n=(0,Va.IQ)(t)
tc(s,w(l),n)}else{const e=he(),{traceId:t,sampled:n,dsc:r}=a.getPropagationContext(),o=(0,b.$p)(t,void 0,n),i=r||(e?I(t,e,a):void 0)
tc(s,o,(0,Va.IQ)(i))}return l}(e,a,c,l)
i&&t&&Qa(t)}))}function Qa(e){const{url:t}=T(e).data||{}
if(!t||"string"!=typeof t)return
const n=zr("resource",(({entries:r})=>{r.forEach((r=>{(function(e){return"resource"===e.entryType&&"initiatorType"in e&&"string"==typeof e.nextHopProtocol&&("fetch"===e.initiatorType||"xmlhttprequest"===e.initiatorType)})(r)&&r.name.endsWith(t)&&(function(e){const{name:t,version:n}=function(e){let t="unknown",n="unknown",r=""
for(const s of e){if("/"===s){[t,n]=e.split("/")
break}if(!isNaN(Number(s))){t="h"===r?"http":r,n=e.split(r)[1]
break}r+=s}return r===e&&(t=r),{name:t,version:n}}(e.nextHopProtocol),r=[]
return r.push(["network.protocol.version",n],["network.protocol.name",t]),g.Z1?[...r,["http.request.redirect_start",ec(e.redirectStart)],["http.request.fetch_start",ec(e.fetchStart)],["http.request.domain_lookup_start",ec(e.domainLookupStart)],["http.request.domain_lookup_end",ec(e.domainLookupEnd)],["http.request.connect_start",ec(e.connectStart)],["http.request.secure_connection_start",ec(e.secureConnectionStart)],["http.request.connection_end",ec(e.connectEnd)],["http.request.request_start",ec(e.requestStart)],["http.request.response_start",ec(e.responseStart)],["http.request.response_end",ec(e.responseEnd)]]:r}(r).forEach((t=>e.setAttribute(...t))),setTimeout(n))}))}))}function ec(e=0){return((g.Z1||performance.timeOrigin)+e)/1e3}function tc(e,t,n){try{e.setRequestHeader("sentry-trace",t),n&&e.setRequestHeader(Va.bU,n)}catch(e){}}const nc={...ht,markBackgroundTransactions:!0,routingInstrumentation:function(e,t=!0,n=!0){if(!xr||!xr.location)return void(wr&&a.kg.warn("Could not initialize routing instrumentation due to invalid location"))
let r,s=xr.location.href
t&&(r=e({name:xr.location.pathname,startTimestamp:g.Z1?g.Z1/1e3:void 0,op:"pageload",origin:"auto.pageload.browser",metadata:{source:"url"}})),n&&(0,Ln.a)((({to:t,from:n})=>{void 0===n&&s&&-1!==s.indexOf(t)?s=void 0:n!==t&&(s=void 0,r&&(wr&&a.kg.log(`[Tracing] Finishing current transaction with op: ${r.op}`),r.end()),r=e({name:xr.location.pathname,op:"navigation",origin:"auto.navigation.browser",metadata:{source:"url"}}))}))},startTransactionOnLocationChange:!0,startTransactionOnPageLoad:!0,enableLongTask:!0,_experiments:{},...Xa}
class rc{constructor(e){this.name="BrowserTracing",this._hasSetTracePropagationTargets=!1,kt(),wr&&(this._hasSetTracePropagationTargets=!(!e||!e.tracePropagationTargets&&!e.tracingOrigins)),this.options={...nc,...e},void 0!==this.options._experiments.enableLongTask&&(this.options.enableLongTask=this.options._experiments.enableLongTask),e&&!e.tracePropagationTargets&&e.tracingOrigins&&(this.options.tracePropagationTargets=e.tracingOrigins),this._collectWebVitals=function(){const e=Ha()
if(e&&g.Z1){e.mark&&xr.performance.mark("sentry-tracing-init")
const t=Kr("fid",(({metric:e})=>{const t=e.entries.pop()
if(!t)return
const n=ja(g.Z1),r=ja(t.startTime)
wr&&a.kg.log("[Measurements] Adding FID"),Ga.fid={value:e.value,unit:"millisecond"},Ga["mark.fid"]={value:n+r,unit:"second"}}),Gr,Ur),n=Kr("cls",(({metric:e})=>{const t=e.entries.pop()
t&&(wr&&a.kg.log("[Measurements] Adding CLS"),Ga.cls={value:e.value,unit:""},qa=t)}),Wr,Fr),r=Hr((({metric:e})=>{const t=e.entries.pop()
t&&(wr&&a.kg.log("[Measurements] Adding LCP"),Ga.lcp={value:e.value,unit:"millisecond"},za=t)}))
return()=>{t(),n(),r()}}return()=>{}}(),this.options.enableLongTask&&zr("longtask",(({entries:e})=>{for(const t of e){const e=rt()
if(!e)return
const n=ja(g.Z1+t.startTime),r=ja(t.duration)
e.startChild({description:"Main UI thread blocked",op:"ui.long-task",origin:"auto.ui.browser.metrics",startTimestamp:n,endTimestamp:n+r})}})),this.options._experiments.enableInteractions&&zr("event",(({entries:e})=>{for(const t of e){const e=rt()
if(!e)return
if("click"===t.name){const n=ja(g.Z1+t.startTime),r=ja(t.duration),s={description:(0,Nn.Rt)(t.target),op:`ui.interaction.${t.name}`,origin:"auto.ui.browser.metrics",startTimestamp:n,endTimestamp:n+r},o=(0,Nn.iY)(t.target)
o&&(s.attributes={"ui.component_name":o}),e.startChild(s)}}}))}setupOnce(e,t){this._getCurrentHub=t
const n=t().getClient(),r=n&&n.getOptions(),{routingInstrumentation:s,startTransactionOnLocationChange:o,startTransactionOnPageLoad:i,markBackgroundTransactions:c,traceFetch:l,traceXHR:u,shouldCreateSpanForRequest:d,enableHTTPTimings:p,_experiments:h}=this.options,m=r&&r.tracePropagationTargets,f=m||this.options.tracePropagationTargets
wr&&this._hasSetTracePropagationTargets&&m&&a.kg.warn("[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used."),s((e=>{const n=this._createRouteTransaction(e)
return this.options._experiments.onStartRouteTransaction&&this.options._experiments.onStartRouteTransaction(n,e,t),n}),i,o),c&&(xr&&xr.document?xr.document.addEventListener("visibilitychange",(()=>{const e=rt()
if(xr.document.hidden&&e){const t="cancelled"
wr&&a.kg.log(`[Tracing] Transaction: ${t} -> since tab moved to the background, op: ${e.op}`),e.status||e.setStatus(t),e.setTag("visibilitychange","document.hidden"),e.end()}})):wr&&a.kg.warn("[Tracing] Could not set up background tab detection due to lack of global document")),h.enableInteractions&&this._registerInteractionListener(),Za({traceFetch:l,traceXHR:u,tracePropagationTargets:f,shouldCreateSpanForRequest:d,enableHTTPTimings:p})}_createRouteTransaction(e){if(!this._getCurrentHub)return void(wr&&a.kg.warn(`[Tracing] Did not create ${e.op} transaction because _getCurrentHub is invalid.`))
const t=this._getCurrentHub(),{beforeNavigate:n,idleTimeout:r,finalTimeout:s,heartbeatInterval:o}=this.options,i="pageload"===e.op,c=i?sc("sentry-trace"):"",l=i?sc("baggage"):"",{traceparentData:u,dynamicSamplingContext:d,propagationContext:p}=(0,b.KA)(c,l),h={...e,...u,metadata:{...e.metadata,dynamicSamplingContext:u&&!d?{}:d},trimEnd:!0},m="function"==typeof n?n(h):h,f=void 0===m?{...h,sampled:!1}:m
f.metadata=f.name!==h.name?{...f.metadata,source:"custom"}:f.metadata,this._latestRouteName=f.name
const y=e.data&&e.data[ut],_=f.metadata&&f.metadata.source
this._latestRouteSource=y||_,!1===f.sampled&&wr&&a.kg.log(`[Tracing] Will not send ${f.op} transaction because of beforeNavigate.`),wr&&a.kg.log(`[Tracing] Starting ${f.op} transaction on scope`)
const{location:v}=xr,S=St(t,f,r,s,!0,{location:v},o),k=t.getScope()
return i&&u?k.setPropagationContext(p):k.setPropagationContext({traceId:S.spanContext().traceId,spanId:S.spanContext().spanId,parentSpanId:S.parentSpanId,sampled:C(S)}),S.registerBeforeFinishCallback((e=>{this._collectWebVitals(),function(e){const t=Ha()
if(!t||!xr.performance.getEntries||!g.Z1)return
wr&&a.kg.log("[Tracing] Adding & adjusting spans using Performance API")
const n=ja(g.Z1),r=t.getEntries()
let s,o
if(r.slice(Wa).forEach((t=>{const r=ja(t.startTime),i=ja(t.duration)
if(!("navigation"===e.op&&n+r<e.startTimestamp))switch(t.entryType){case"navigation":!function(e,t,n){["unloadEvent","redirect","domContentLoadedEvent","loadEvent","connect"].forEach((r=>{Ja(e,t,r,n)})),Ja(e,t,"secureConnection",n,"TLS/SSL","connectEnd"),Ja(e,t,"fetch",n,"cache","domainLookupStart"),Ja(e,t,"domainLookup",n,"DNS"),function(e,t,n){Ua(e,{op:"browser",origin:"auto.browser.browser.metrics",description:"request",startTimestamp:n+ja(t.requestStart),endTimestamp:n+ja(t.responseEnd)}),Ua(e,{op:"browser",origin:"auto.browser.browser.metrics",description:"response",startTimestamp:n+ja(t.responseStart),endTimestamp:n+ja(t.responseEnd)})}(e,t,n)}(e,t,n),s=n+ja(t.responseStart),o=n+ja(t.requestStart)
break
case"mark":case"paint":case"measure":{!function(e,t,n,r,s){const o=s+n,i=o+r
Ua(e,{description:t.name,endTimestamp:i,op:t.entryType,origin:"auto.resource.browser.metrics",startTimestamp:o})}(e,t,r,i,n)
const s=Dr(),o=t.startTime<s.firstHiddenTime
"first-paint"===t.name&&o&&(wr&&a.kg.log("[Measurements] Adding FP"),Ga.fp={value:t.startTime,unit:"millisecond"}),"first-contentful-paint"===t.name&&o&&(wr&&a.kg.log("[Measurements] Adding FCP"),Ga.fcp={value:t.startTime,unit:"millisecond"})
break}case"resource":{const s=t.name.replace(xr.location.origin,"")
!function(e,t,n,r,s,o){if("xmlhttprequest"===t.initiatorType||"fetch"===t.initiatorType)return
const i={}
Ka(i,t,"transferSize","http.response_transfer_size"),Ka(i,t,"encodedBodySize","http.response_content_length"),Ka(i,t,"decodedBodySize","http.decoded_response_content_length"),"renderBlockingStatus"in t&&(i["resource.render_blocking_status"]=t.renderBlockingStatus)
const a=o+r
Ua(e,{description:n,endTimestamp:a+s,op:t.initiatorType?`resource.${t.initiatorType}`:"resource.other",origin:"auto.resource.browser.metrics",startTimestamp:a,data:i})}(e,t,s,r,i,n)
break}}})),Wa=Math.max(r.length-1,0),function(e){const t=xr.navigator
if(!t)return
const n=t.connection
n&&(n.effectiveType&&e.setTag("effectiveConnectionType",n.effectiveType),n.type&&e.setTag("connectionType",n.type),Fa(n.rtt)&&(Ga["connection.rtt"]={value:n.rtt,unit:"millisecond"})),Fa(t.deviceMemory)&&e.setTag("deviceMemory",`${t.deviceMemory} GB`),Fa(t.hardwareConcurrency)&&e.setTag("hardwareConcurrency",String(t.hardwareConcurrency))}(e),"pageload"===e.op){"number"==typeof s&&(wr&&a.kg.log("[Measurements] Adding TTFB"),Ga.ttfb={value:1e3*(s-e.startTimestamp),unit:"millisecond"},"number"==typeof o&&o<=s&&(Ga["ttfb.requestTime"]={value:1e3*(s-o),unit:"millisecond"})),["fcp","fp","lcp"].forEach((t=>{if(!Ga[t]||n>=e.startTimestamp)return
const r=Ga[t].value,s=n+ja(r),o=Math.abs(1e3*(s-e.startTimestamp)),i=o-r
wr&&a.kg.log(`[Measurements] Normalized ${t} from ${r} to ${o} (${i})`),Ga[t].value=o}))
const t=Ga["mark.fid"]
t&&Ga.fid&&(Ua(e,{description:"first input delay",endTimestamp:t.value+ja(Ga.fid.value),op:"ui.action",origin:"auto.ui.browser.metrics",startTimestamp:t.value}),delete Ga["mark.fid"]),"fcp"in Ga||delete Ga.cls,Object.keys(Ga).forEach((t=>{e.setMeasurement(t,Ga[t].value,Ga[t].unit)})),function(e){za&&(wr&&a.kg.log("[Measurements] Adding LCP Data"),za.element&&e.setTag("lcp.element",(0,Nn.Rt)(za.element)),za.id&&e.setTag("lcp.id",za.id),za.url&&e.setTag("lcp.url",za.url.trim().slice(0,200)),e.setTag("lcp.size",za.size)),qa&&qa.sources&&(wr&&a.kg.log("[Measurements] Adding CLS Data"),qa.sources.forEach(((t,n)=>e.setTag(`cls.source.${n+1}`,(0,Nn.Rt)(t.node)))))}(e)}za=void 0,qa=void 0,Ga={}}(e)})),S}_registerInteractionListener(){let e
const t=()=>{const{idleTimeout:t,finalTimeout:n,heartbeatInterval:r}=this.options,s="ui.action.click",o=rt()
if(o&&o.op&&["navigation","pageload"].includes(o.op))return void(wr&&a.kg.warn(`[Tracing] Did not create ${s} transaction because a pageload or navigation transaction is in progress.`))
if(e&&(e.setFinishReason("interactionInterrupted"),e.end(),e=void 0),!this._getCurrentHub)return void(wr&&a.kg.warn(`[Tracing] Did not create ${s} transaction because _getCurrentHub is invalid.`))
if(!this._latestRouteName)return void(wr&&a.kg.warn(`[Tracing] Did not create ${s} transaction because _latestRouteName is missing.`))
const i=this._getCurrentHub(),{location:c}=xr,l={name:this._latestRouteName,op:s,trimEnd:!0,data:{[ut]:this._latestRouteSource||"url"}}
e=St(i,l,t,n,!0,{location:c},r)};["click"].forEach((e=>{addEventListener(e,t,{once:!1,capture:!0})}))}}function sc(e){const t=(0,Nn.qT)(`meta[name=${e}]`)
return t?t.getAttribute("content"):void 0}const oc=100,ic=5e3,ac=36e5
function cc(e,t){c&&a.kg.info(`[Offline]: ${e}`,t)}function lc(e){return new Promise(((t,n)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>n(e.error)}))}function uc(e){return lc(e.getAllKeys())}function dc(e){let t
function n(){return null==t&&(t=function(e,t){const n=indexedDB.open(e)
n.onupgradeneeded=()=>n.result.createObjectStore(t)
const r=lc(n)
return e=>r.then((n=>e(n.transaction(t,"readwrite").objectStore(t))))}(e.dbName||"sentry-offline",e.storeName||"queue")),t}return{insert:async t=>{try{const r=await(0,$e.V$)(t,e.textEncoder)
await function(e,t,n){return e((e=>uc(e).then((r=>{if(!(r.length>=n))return e.put(t,Math.max(...r,0)+1),lc(e.transaction)}))))}(n(),r,e.maxQueueSize||30)}catch(e){}},pop:async()=>{try{const t=await function(e){return e((e=>uc(e).then((t=>{if(0!==t.length)return lc(e.get(t[0])).then((n=>(e.delete(t[0]),lc(e.transaction).then((()=>n)))))}))))}(n())
if(t)return(0,$e.f4)(t,e.textEncoder||new TextEncoder,e.textDecoder||new TextDecoder)}catch(e){}}}}function pc(e){return function(e){return t=>e({...t,createStore:dc})}(function(e){return t=>{const n=e(t),r=t.createStore?t.createStore(t):void 0
let s,o=ic
function i(e){r&&(s&&clearTimeout(s),s=setTimeout((async()=>{s=void 0
const e=await r.pop()
e&&(cc("Attempting to send previously queued event"),c(e).catch((e=>{cc("Failed to retry sending",e)})))}),e),"number"!=typeof s&&s.unref&&s.unref())}function a(){s||(i(o),o=Math.min(2*o,ac))}async function c(e){try{const t=await n.send(e)
let r=oc
if(t)if(t.headers&&t.headers["retry-after"])r=(0,Dt.JY)(t.headers["retry-after"])
else if((t.statusCode||0)>=400)return t
return i(r),o=ic,t}catch(n){if(r&&await function(e,n,r){return!(0,$e.R)(e,["replay_event","replay_recording","client_report"])&&(!t.shouldStore||t.shouldStore(e,n,r))}(e,n,o))return await r.insert(e),a(),cc("Error sending. Event queued",n),{}
throw n}}return t.flushAtStartup&&a(),{send:c,flush:e=>n.flush(e)}}}(e))}const hc=1e6,mc=String(0),fc="main"
let gc="",yc="",_c="",vc=Wt.navigator&&Wt.navigator.userAgent||"",bc=""
const Sc=Wt.navigator&&Wt.navigator.language||Wt.navigator&&Wt.navigator.languages&&Wt.navigator.languages[0]||"",kc=Wt.navigator&&Wt.navigator.userAgentData
var wc
function Ec(e){return"pageload"===e.op}"object"==typeof(wc=kc)&&null!==wc&&"getHighEntropyValues"in wc&&kc.getHighEntropyValues(["architecture","model","platform","platformVersion","fullVersionList"]).then((e=>{if(gc=e.platform||"",_c=e.architecture||"",bc=e.model||"",yc=e.platformVersion||"",e.fullVersionList&&e.fullVersionList.length>0){const t=e.fullVersionList[e.fullVersionList.length-1]
vc=`${t.brand} ${t.version}`}})).catch((e=>{}))
const xc=new WeakMap
function Tc(e){const t=l.GLOBAL_OBJ._sentryDebugIds
if(!t)return[]
const n=he(),r=n&&n.getOptions(),s=r&&r.stackParser
if(!s)return[]
let o
const i=xc.get(s)
i?o=i:(o=new Map,xc.set(s,o))
const a=Object.keys(t).reduce(((e,n)=>{let r
const i=o.get(n)
i?r=i:(r=s(n),o.set(n,r))
for(let s=r.length-1;s>=0;s--){const o=r[s],i=o&&o.filename
if(o&&i){e[i]=t[n]
break}}return e}),{}),c=[]
for(const l of e)l&&a[l]&&c.push({type:"sourcemap",code_file:l,debug_id:a[l]})
return c}let Cc=!1
const Ic=3e4
function Rc(e){if(Cc)return Xt&&a.kg.log("[Profiling] Profiling has been disabled for the duration of the current user session."),!1
if(!e.isRecording())return Xt&&a.kg.log("[Profiling] Discarding profile because transaction was not sampled."),!1
const t=he(),n=t&&t.getOptions()
if(!n)return Xt&&a.kg.log("[Profiling] Profiling disabled, no options found."),!1
const r=n.profilesSampleRate
return("number"!=typeof(s=r)&&"boolean"!=typeof s||"number"==typeof s&&isNaN(s)?(Xt&&a.kg.warn(`[Profiling] Invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(s)} of type ${JSON.stringify(typeof s)}.`),0):!0===s||!1===s||!(s<0||s>1)||(Xt&&a.kg.warn(`[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got ${s}.`),0))?r?!!(!0===r||Math.random()<r)||(Xt&&a.kg.log(`[Profiling] Discarding profile because it's not included in the random sample (sampling rate = ${Number(r)})`),!1):(Xt&&a.kg.log("[Profiling] Discarding profile because a negative sampling decision was inherited or profileSampleRate is set to 0"),!1):(Xt&&a.kg.warn("[Profiling] Discarding profile because of invalid sample rate."),!1)
var s}function Oc(e,t,n,r){return function(e){return e.samples.length<2?(Xt&&a.kg.log("[Profiling] Discarding profile because it contains less than 2 samples"),!1):!!e.frames.length||(Xt&&a.kg.log("[Profiling] Discarding profile because it contains no frames"),!1)}(n)?function(e,t,n,r){if("transaction"!==r.type)throw new TypeError("Profiling events may only be attached to transactions, this should never occur.")
if(null==n)throw new TypeError(`Cannot construct profiling event envelope without a valid profile. Got ${n} instead.`)
const s=function(e){const t=e&&e.contexts&&e.contexts.trace&&e.contexts.trace.trace_id
return"string"==typeof t&&32!==t.length&&Xt&&a.kg.log(`[Profiling] Invalid traceId: ${t} on profiled event`),"string"!=typeof t?"":t}(r),o=function(e){return!("thread_metadata"in e)}(u=n)?function(e){let t,n=0
const r={samples:[],stacks:[],frames:[],thread_metadata:{[mc]:{name:fc}}}
if(!e.samples.length)return r
const s=e.samples[0].timestamp,o="number"==typeof performance.timeOrigin?performance.timeOrigin:g.Z1||0,i=o-(g.Z1||o)
for(let a=0;a<e.samples.length;a++){const o=e.samples[a]
if(void 0===o.stackId){void 0===t&&(t=n,r.stacks[t]=[],n++),r.samples[a]={elapsed_since_start_ns:((o.timestamp+i-s)*hc).toFixed(0),stack_id:t,thread_id:mc}
continue}let c=e.stacks[o.stackId]
const l=[]
for(;c;){l.push(c.frameId)
const t=e.frames[c.frameId]
void 0===r.frames[c.frameId]&&(r.frames[c.frameId]={function:t.name,abs_path:"number"==typeof t.resourceId?e.resources[t.resourceId]:void 0,lineno:t.line,colno:t.column}),c=void 0===c.parentId?void 0:e.stacks[c.parentId]}const u={elapsed_since_start_ns:((o.timestamp+i-s)*hc).toFixed(0),stack_id:n,thread_id:mc}
r.stacks[n]=l,r.samples[a]=u,n++}return r}(u):u,c=t||("number"==typeof r.start_timestamp?1e3*r.start_timestamp:Date.now()),l="number"==typeof r.timestamp?1e3*r.timestamp:Date.now()
var u
return{event_id:e,timestamp:new Date(c).toISOString(),platform:"javascript",version:"1",release:r.release||"",environment:r.environment||f,runtime:{name:"javascript",version:Wt.navigator.userAgent},os:{name:gc,version:yc,build_number:vc},device:{locale:Sc,model:bc,manufacturer:vc,architecture:_c,is_emulator:!1},debug_meta:{images:Tc(n.resources)},profile:o,transactions:[{name:r.transaction||"",id:r.event_id||(0,i.DM)(),trace_id:s,active_thread_id:mc,relative_start_ns:"0",relative_end_ns:(1e6*(l-c)).toFixed(0)}]}}(e,t,n,r):null}const Mc=new Map
function Ac(e){const t=Mc.get(e)
return t&&Mc.delete(e),t}function Dc(e){return e?Rc(e)?Lc(e):e:(Xt&&a.kg.log("[Profiling] Transaction is undefined, skipping profiling"),e)}function Lc(e){let t
Ec(e)&&(t=1e3*(0,g.ph)())
const n=function(){const e=Wt.Profiler
if("function"!=typeof e)return void(Xt&&a.kg.log("[Profiling] Profiling is not supported by this browser, Profiler interface missing on window object."))
const t=Math.floor(Ic/10)
try{return new e({sampleInterval:10,maxBufferSize:t})}catch(e){Xt&&(a.kg.log("[Profiling] Failed to initialize the Profiling constructor, this is likely due to a missing 'Document-Policy': 'js-profiling' header."),a.kg.log("[Profiling] Disabling profiling for current user session.")),Cc=!0}}()
if(!n)return e
Xt&&a.kg.log(`[Profiling] started profiling transaction: ${T(e).description}`)
const r=(0,i.DM)()
async function s(){return e&&n?n.stop().then((t=>(o&&(Wt.clearTimeout(o),o=void 0),Xt&&a.kg.log(`[Profiling] stopped profiling of transaction: ${T(e).description}`),t?(function(e,t){if(Mc.set(e,t),Mc.size>30){const e=Mc.keys().next().value
Mc.delete(e)}}(r,t),null):(Xt&&a.kg.log(`[Profiling] profiler returned null profile for: ${T(e).description}`,"this may indicate an overlapping transaction or a call to stopProfiling with a profile title that was never started"),null)))).catch((e=>(Xt&&a.kg.log("[Profiling] error while stopping profiler:",e),null))):null}let o=Wt.setTimeout((()=>{Xt&&a.kg.log("[Profiling] max profile duration elapsed, stopping profiling for:",T(e).description),s()}),Ic)
const c=e.end.bind(e)
return e.end=function(){return e?(s().then((()=>{e.setContext("profile",{profile_id:r,start_timestamp:t}),c()}),(()=>{c()})),e):c()},e}const Nc="BrowserProfiling",$c=we(Nc,(()=>({name:Nc,setup(e){const t=me().getTransaction()
t&&Ec(t)&&Rc(t)&&Lc(t),"function"==typeof e.on?(e.on("startTransaction",(e=>{Rc(e)&&Lc(e)})),e.on("beforeEnvelope",(e=>{if(!Mc.size)return
const t=function(e){const t=[]
return(0,$e.gv)(e,((e,n)=>{if("transaction"===n)for(let r=1;r<e.length;r++){const n=e[r]
n&&n.contexts&&n.contexts.profile&&n.contexts.profile.profile_id&&t.push(e[r])}})),t}(e)
if(!t.length)return
const n=[]
for(const r of t){const e=r&&r.contexts,t=e&&e.profile&&e.profile.profile_id,s=e&&e.profile&&e.profile.start_timestamp
if("string"!=typeof t){Xt&&a.kg.log("[Profiling] cannot find profile for a transaction without a profile context")
continue}if(!t){Xt&&a.kg.log("[Profiling] cannot find profile for a transaction without a profile context")
continue}e&&e.profile&&delete e.profile
const o=Ac(t)
if(!o){Xt&&a.kg.log(`[Profiling] Could not retrieve profile for transaction: ${t}`)
continue}const i=Oc(t,s,o,r)
i&&n.push(i)}!function(e,t){if(!t.length)return e
for(const n of t)e[1].push([{type:"profile"},n])}(e,n)}))):a.kg.warn("[Profiling] Client does not support hooks, profiling will be disabled")}})))
let Pc={}
Wt.Sentry&&Wt.Sentry.Integrations&&(Pc=Wt.Sentry.Integrations)
const Bc={...Pc,...r,...s}},394:(e,t,n)=>{n.d(t,{Z:()=>o})
var r=n(146),s=n(399)
function o(e,t,n=250,o,a,c,l){if(!(c.exception&&c.exception.values&&l&&(0,r.V9)(l.originalException,Error)))return
const u=c.exception.values.length>0?c.exception.values[c.exception.values.length-1]:void 0
var d,p
u&&(c.exception.values=(d=i(e,t,a,l.originalException,o,c.exception.values,u,0),p=n,d.map((e=>(e.value&&(e.value=(0,s.$G)(e.value,p)),e)))))}function i(e,t,n,s,o,l,u,d){if(l.length>=n+1)return l
let p=[...l]
if((0,r.V9)(s[o],Error)){a(u,d)
const r=e(t,s[o]),l=p.length
c(r,o,l,d),p=i(e,t,n,s[o],o,[r,...p],r,l)}return Array.isArray(s.errors)&&s.errors.forEach(((s,l)=>{if((0,r.V9)(s,Error)){a(u,d)
const r=e(t,s),h=p.length
c(r,`errors[${l}]`,h,d),p=i(e,t,n,s,o,[r,...p],r,h)}})),p}function a(e,t){e.mechanism=e.mechanism||{type:"generic",handled:!0},e.mechanism={...e.mechanism,is_exception_group:!0,exception_id:t}}function c(e,t,n,r){e.mechanism=e.mechanism||{type:"generic",handled:!0},e.mechanism={...e.mechanism,type:"chained",source:t,exception_id:n,parent_id:r}}},393:(e,t,n)=>{n.d(t,{EN:()=>u,IQ:()=>d,_3:()=>l,bU:()=>i,jm:()=>c,lq:()=>a})
var r=n(689),s=n(146),o=n(190)
const i="baggage",a="sentry-",c=/^sentry-/,l=8192
function u(e){if(!(0,s.HD)(e)&&!Array.isArray(e))return
let t={}
if(Array.isArray(e))t=e.reduce(((e,t)=>{const n=p(t)
for(const r of Object.keys(n))e[r]=n[r]
return e}),{})
else{if(!e)return
t=p(e)}const n=Object.entries(t).reduce(((e,[t,n])=>(t.match(c)&&(e[t.slice(a.length)]=n),e)),{})
return Object.keys(n).length>0?n:void 0}function d(e){if(e)return function(e){if(0!==Object.keys(e).length)return Object.entries(e).reduce(((e,[t,n],s)=>{const i=`${encodeURIComponent(t)}=${encodeURIComponent(n)}`,a=0===s?i:`${e},${i}`
return a.length>l?(r.X&&o.kg.warn(`Not adding key: ${t} with val: ${n} to baggage header due to exceeding baggage size limits.`),e):a}),"")}(Object.entries(e).reduce(((e,[t,n])=>(n&&(e[`${a}${t}`]=n),e)),{}))}function p(e){return e.split(",").map((e=>e.split("=").map((e=>decodeURIComponent(e.trim()))))).reduce(((e,[t,n])=>(e[t]=n,e)),{})}},809:(e,t,n)=>{n.d(t,{Rt:()=>i,iY:()=>u,l4:()=>c,qT:()=>l})
var r=n(146)
const s=(0,n(956).R)(),o=80
function i(e,t={}){if(!e)return"<unknown>"
try{let n=e
const r=5,s=[]
let i=0,c=0
const l=" > ",u=l.length
let d
const p=Array.isArray(t)?t:t.keyAttrs,h=!Array.isArray(t)&&t.maxStringLength||o
for(;n&&i++<r&&(d=a(n,p),!("html"===d||i>1&&c+s.length*u+d.length>=h));)s.push(d),c+=d.length,n=n.parentNode
return s.reverse().join(l)}catch(e){return"<unknown>"}}function a(e,t){const n=e,o=[]
let i,a,c,l,u
if(!n||!n.tagName)return""
if(s.HTMLElement&&n instanceof HTMLElement&&n.dataset&&n.dataset.sentryComponent)return n.dataset.sentryComponent
o.push(n.tagName.toLowerCase())
const d=t&&t.length?t.filter((e=>n.getAttribute(e))).map((e=>[e,n.getAttribute(e)])):null
if(d&&d.length)d.forEach((e=>{o.push(`[${e[0]}="${e[1]}"]`)}))
else if(n.id&&o.push(`#${n.id}`),i=n.className,i&&(0,r.HD)(i))for(a=i.split(/\s+/),u=0;u<a.length;u++)o.push(`.${a[u]}`)
const p=["aria-label","type","name","title","alt"]
for(u=0;u<p.length;u++)c=p[u],l=n.getAttribute(c),l&&o.push(`[${c}="${l}"]`)
return o.join("")}function c(){try{return s.document.location.href}catch(e){return""}}function l(e){return s.document&&s.document.querySelector?s.document.querySelector(e):null}function u(e){if(!s.HTMLElement)return null
let t=e
for(let n=0;n<5;n++){if(!t)return null
if(t instanceof HTMLElement&&t.dataset.sentryComponent)return t.dataset.sentryComponent
t=t.parentNode}return null}},15:(e,t,n)=>{function r(e,t){return null!=e?e:t()}n.d(t,{h:()=>r})},694:(e,t,n)=>{function r(e){let t,n=e[0],r=1
for(;r<e.length;){const s=e[r],o=e[r+1]
if(r+=2,("optionalAccess"===s||"optionalCall"===s)&&null==n)return
"access"===s||"optionalAccess"===s?(t=n,n=o(n)):"call"!==s&&"optionalCall"!==s||(n=o(((...e)=>n.call(t,...e))),t=void 0)}return n}n.d(t,{x:()=>r})},977:(e,t,n)=>{n.d(t,{y:()=>o})
var r=n(269),s=n(505)
function o(e,t,n){const o=[{type:"client_report"},{timestamp:n||(0,s.yW)(),discarded_events:e}]
return(0,r.Jd)(t?{dsn:t}:{},[o])}},689:(e,t,n)=>{n.d(t,{X:()=>r})
const r="undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__},84:(e,t,n)=>{n.d(t,{RA:()=>i,U4:()=>a,vK:()=>l})
var r=n(689),s=n(190)
const o=/^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/
function i(e,t=!1){const{host:n,path:r,pass:s,port:o,projectId:i,protocol:a,publicKey:c}=e
return`${a}://${c}${t&&s?`:${s}`:""}@${n}${o?`:${o}`:""}/${r?`${r}/`:r}${i}`}function a(e){const t=o.exec(e)
if(!t)return void(0,s.Cf)((()=>{console.error(`Invalid Sentry Dsn: ${e}`)}))
const[n,r,i="",a,l="",u]=t.slice(1)
let d="",p=u
const h=p.split("/")
if(h.length>1&&(d=h.slice(0,-1).join("/"),p=h.pop()),p){const e=p.match(/^\d+/)
e&&(p=e[0])}return c({host:a,pass:i,path:d,projectId:p,port:l,protocol:n,publicKey:r})}function c(e){return{protocol:e.protocol,publicKey:e.publicKey||"",pass:e.pass||"",host:e.host,port:e.port||"",path:e.path||"",projectId:e.projectId}}function l(e){const t="string"==typeof e?a(e):c(e)
if(t&&function(e){if(!r.X)return!0
const{port:t,projectId:n,protocol:o}=e
return!(["protocol","publicKey","host","projectId"].find((t=>!e[t]&&(s.kg.error(`Invalid Sentry Dsn: ${t} missing`),!0)))||(n.match(/^\d+$/)?function(e){return"http"===e||"https"===e}(o)?t&&isNaN(parseInt(t,10))&&(s.kg.error(`Invalid Sentry Dsn: Invalid port ${t}`),1):(s.kg.error(`Invalid Sentry Dsn: Invalid protocol ${o}`),1):(s.kg.error(`Invalid Sentry Dsn: Invalid projectId ${n}`),1)))}(t))return t}},326:(e,t,n)=>{function r(){return"undefined"!=typeof __SENTRY_BROWSER_BUNDLE__&&!!__SENTRY_BROWSER_BUNDLE__}function s(){return"npm"}n.d(t,{S:()=>s,n:()=>r})},269:(e,t,n)=>{n.d(t,{BO:()=>a,Cd:()=>y,HY:()=>g,Jd:()=>i,R:()=>l,V$:()=>d,f4:()=>p,gv:()=>c,mL:()=>f,zQ:()=>h})
var r=n(84),s=n(206),o=n(927)
function i(e,t=[]){return[e,t]}function a(e,t){const[n,r]=e
return[n,[...r,t]]}function c(e,t){const n=e[1]
for(const r of n)if(t(r,r[0].type))return!0
return!1}function l(e,t){return c(e,((e,n)=>t.includes(n)))}function u(e,t){return(t||new TextEncoder).encode(e)}function d(e,t){const[n,r]=e
let o=JSON.stringify(n)
function i(e){"string"==typeof o?o="string"==typeof e?o+e:[u(o,t),e]:o.push("string"==typeof e?u(e,t):e)}for(const a of r){const[e,n]=a
if(i(`\n${JSON.stringify(e)}\n`),"string"==typeof n||n instanceof Uint8Array)i(n)
else{let e
try{e=JSON.stringify(n)}catch(t){e=JSON.stringify((0,s.Fv)(n))}i(e)}}return"string"==typeof o?o:function(e){const t=e.reduce(((e,t)=>e+t.length),0),n=new Uint8Array(t)
let r=0
for(const s of e)n.set(s,r),r+=s.length
return n}(o)}function p(e,t,n){let r="string"==typeof e?t.encode(e):e
function s(e){const t=r.subarray(0,e)
return r=r.subarray(e+1),t}function o(){let e=r.indexOf(10)
return e<0&&(e=r.length),JSON.parse(n.decode(s(e)))}const i=o(),a=[]
for(;r.length;){const e=o(),t="number"==typeof e.length?e.length:void 0
a.push([e,t?s(t):o()])}return[i,a]}function h(e,t){const n="string"==typeof e.data?u(e.data,t):e.data
return[(0,o.Jr)({type:"attachment",length:n.length,filename:e.filename,content_type:e.contentType,attachment_type:e.attachmentType}),n]}const m={session:"session",sessions:"session",attachment:"attachment",transaction:"transaction",event:"error",client_report:"internal",user_report:"default",profile:"profile",replay_event:"replay",replay_recording:"replay",check_in:"monitor",feedback:"feedback",statsd:"unknown"}
function f(e){return m[e]}function g(e){if(!e||!e.sdk)return
const{name:t,version:n}=e.sdk
return{name:t,version:n}}function y(e,t,n,s){const i=e.sdkProcessingMetadata&&e.sdkProcessingMetadata.dynamicSamplingContext
return{event_id:e.event_id,sent_at:(new Date).toISOString(),...t&&{sdk:t},...!!n&&s&&{dsn:(0,r.RA)(s)},...i&&{trace:(0,o.Jr)({...i})}}}},913:(e,t,n)=>{n.d(t,{b:()=>r})
class r extends Error{constructor(e,t="warn"){super(e),this.message=e,this.name=new.target.prototype.constructor.name,Object.setPrototypeOf(this,new.target.prototype),this.logLevel=t}}},545:(e,t,n)=>{n.d(t,{GJ:()=>c,ME:()=>l,aB:()=>u,g:()=>a})
var r=n(146),s=n(438),o=n(206),i=n(927)
function a(e,t){return e(t.stack||"",1)}function c(e,t){const n={type:t.name||t.constructor.name,value:t.message},r=a(e,t)
return r.length&&(n.stacktrace={frames:r}),n}function l(e,t,n,a){const l="function"==typeof e?e().getClient():e
let u=n
const d=a&&a.data&&a.data.mechanism||{handled:!0,type:"generic"}
let p
if(!(0,r.VZ)(n)){if((0,r.PO)(n)){const e=l&&l.getOptions().normalizeDepth
p={__serialized__:(0,o.Qy)(n,e)}
const t=function(e){if("name"in e&&"string"==typeof e.name){let t=`'${e.name}' captured as exception`
return"message"in e&&"string"==typeof e.message&&(t+=` with message '${e.message}'`),t}return"message"in e&&"string"==typeof e.message?e.message:`Object captured as exception with keys: ${(0,i.zf)(e)}`}(n)
u=a&&a.syntheticException||new Error(t),u.message=t}else u=a&&a.syntheticException||new Error(n),u.message=n
d.synthetic=!0}const h={exception:{values:[c(t,u)]}}
return p&&(h.extra=p),(0,s.Db)(h,void 0,void 0),(0,s.EG)(h,d),{...h,event_id:a&&a.event_id}}function u(e,t,n="info",s,o){const i={event_id:s&&s.event_id,level:n}
if(o&&s&&s.syntheticException){const n=a(e,s.syntheticException)
n.length&&(i.exception={values:[{value:t,stacktrace:{frames:n}}]})}if((0,r.Le)(t)){const{__sentry_template_string__:e,__sentry_template_values__:n}=t
return i.logentry={message:e,params:n},i}return i.message=t,i}},662:(e,t,n)=>{n.r(t),n.d(t,{BAGGAGE_HEADER_NAME:()=>oe.bU,CONSOLE_LEVELS:()=>l.RU,DEFAULT_RETRY_AFTER:()=>se.B1,DEFAULT_USER_INCLUDES:()=>U,GLOBAL_OBJ:()=>a.GLOBAL_OBJ,LRUMap:()=>fe,MAX_BAGGAGE_STRING_LENGTH:()=>oe._3,SENTRY_BAGGAGE_KEY_PREFIX:()=>oe.lq,SENTRY_BAGGAGE_KEY_PREFIX_REGEX:()=>oe.jm,SENTRY_XHR_DATA_KEY:()=>g.xU,SentryError:()=>i.b,SyncPromise:()=>Z.cW,TRACEPARENT_REGEXP:()=>ee.Ke,_asyncNullishCoalesce:()=>ye,_asyncOptionalChain:()=>_e,_asyncOptionalChainDelete:()=>ve,_browserPerformanceTimeOriginMode:()=>Q.mL,_nullishCoalesce:()=>ge.h,_optionalChain:()=>be.x,_optionalChainDelete:()=>Se,addClickKeypressInstrumentationHandler:()=>d.O,addConsoleInstrumentationHandler:()=>u.e,addContextToFrame:()=>S.go,addExceptionMechanism:()=>S.EG,addExceptionTypeValue:()=>S.Db,addFetchInstrumentationHandler:()=>p.U,addGlobalErrorInstrumentationHandler:()=>h.V,addGlobalUnhandledRejectionInstrumentationHandler:()=>m.h,addHistoryInstrumentationHandler:()=>f.a,addInstrumentationHandler:()=>y,addItemToEnvelope:()=>ne.BO,addNonEnumerableProperty:()=>E.xp,addOrUpdateIntegration:()=>ae,addRequestDataToEvent:()=>q,addRequestDataToTransaction:()=>j,addXhrInstrumentationHandler:()=>g.UK,applyAggregateErrorsToEvent:()=>r.Z,arrayify:()=>S.lE,baggageHeaderToDynamicSamplingContext:()=>oe.EN,basename:()=>N,browserPerformanceTimeOrigin:()=>Q.Z1,callFrameToStackFrame:()=>me,checkOrSetAlreadyCaught:()=>S.YO,consoleSandbox:()=>l.Cf,convertToPlainObject:()=>E.Sh,createAttachmentEnvelopeItem:()=>ne.zQ,createClientReportEnvelope:()=>re.y,createEnvelope:()=>ne.Jd,createEventEnvelopeHeaders:()=>ne.Cd,createStackParser:()=>V.pE,dateTimestampInSeconds:()=>Q.yW,dirname:()=>L,disabledUntil:()=>se.ns,dropUndefinedKeys:()=>E.Jr,dsnFromString:()=>o.U4,dsnToString:()=>o.RA,dynamicRequire:()=>k.l$,dynamicSamplingContextToSentryBaggageHeader:()=>oe.IQ,envelopeContainsItemType:()=>ne.R,envelopeItemTypeToDataCategory:()=>ne.mL,escapeStringForRegex:()=>we,eventFromMessage:()=>ue.aB,eventFromUnknownInput:()=>ue.ME,exceptionFromError:()=>ue.GJ,extractExceptionKeysForMessage:()=>E.zf,extractPathForTransaction:()=>H,extractRequestData:()=>z,extractTraceparentData:()=>ee.qG,filenameIsInApp:()=>pe.h,fill:()=>E.hl,forEachEnvelopeItem:()=>ne.gv,generateSentryTraceHeader:()=>ee.$p,getComponentName:()=>s.iY,getDomElement:()=>s.qT,getEventDescription:()=>S.jH,getFunctionName:()=>V.$P,getGlobalObject:()=>a.R,getGlobalSingleton:()=>a.Y,getLocationHref:()=>s.l4,getNumberOfUrlSegments:()=>P.$A,getOriginalFunction:()=>E.HK,getSDKSource:()=>te.S,getSanitizedUrlString:()=>P.tF,getSdkMetadataForEnvelopeHeader:()=>ne.HY,htmlTreeAsString:()=>s.Rt,isAbsolute:()=>A,isBrowser:()=>v.j,isBrowserBundle:()=>te.n,isDOMError:()=>_.TX,isDOMException:()=>_.fm,isElement:()=>_.kK,isError:()=>_.VZ,isErrorEvent:()=>_.VW,isEvent:()=>_.cO,isInstanceOf:()=>_.V9,isMatchingPattern:()=>Y.zC,isNaN:()=>_.i2,isNativeFetch:()=>X.Du,isNodeEnv:()=>k.KV,isParameterizedString:()=>_.Le,isPlainObject:()=>_.PO,isPrimitive:()=>_.pt,isRateLimited:()=>se.Q,isRegExp:()=>_.Kj,isString:()=>_.HD,isSyntheticEvent:()=>_.Cy,isThenable:()=>_.J8,isVueViewModel:()=>_.y1,join:()=>D,loadModule:()=>k.$y,logger:()=>l.kg,makeDsn:()=>o.vK,makeFifoCache:()=>le,makePromiseBuffer:()=>$.x,markFunctionWrapped:()=>E.$Q,memoBuilder:()=>b.i,nodeStackLineParser:()=>V.Ep,normalize:()=>w.Fv,normalizePath:()=>M,normalizeToSize:()=>w.Qy,normalizeUrlToBase:()=>w.C8,objectify:()=>E.mz,originalConsoleMethods:()=>l.LD,parameterize:()=>de,parseEnvelope:()=>ne.f4,parseRetryAfterHeader:()=>se.JY,parseSemver:()=>S.J4,parseStackFrames:()=>ue.g,parseUrl:()=>P.en,rejectedSyncPromise:()=>Z.$2,relative:()=>O,resetInstrumentationHandlers:()=>ke.t4,resolve:()=>I,resolvedSyncPromise:()=>Z.WD,safeJoin:()=>Y.nK,serializeEnvelope:()=>ne.V$,severityFromString:()=>K.En,severityLevelFromString:()=>K.VT,snipLine:()=>Y.JM,stackParserFromStackParserOptions:()=>V.Sq,stringMatchesSomePattern:()=>Y.U0,stripSentryFramesAndReverse:()=>V.UV,stripUrlQueryAndFragment:()=>P.rt,supportsDOMError:()=>X.zO,supportsDOMException:()=>X.fL,supportsErrorEvent:()=>X.S$,supportsFetch:()=>X.Ak,supportsHistory:()=>Ee.B,supportsNativeFetch:()=>X.t$,supportsReferrerPolicy:()=>X.hv,supportsReportingObserver:()=>X.zb,timestampInSeconds:()=>Q.ph,timestampWithMs:()=>Q._I,tracingContextFromHeaders:()=>ee.KA,truncate:()=>Y.$G,updateRateLimits:()=>se.WG,urlEncode:()=>E._j,uuid4:()=>S.DM,validSeverityLevels:()=>K.Tx,walk:()=>w._p,watchdogTimer:()=>he,winterCGHeadersToDict:()=>G,winterCGRequestToRequestData:()=>J})
var r=n(394),s=n(809),o=n(84),i=n(913),a=n(956),c=n(689),l=n(190),u=n(952),d=n(105),p=n(36),h=n(309),m=n(222),f=n(41),g=n(702)
function y(e,t){switch(e){case"console":return(0,u.e)(t)
case"dom":return(0,d.O)(t)
case"xhr":return(0,g.UK)(t)
case"fetch":return(0,p.U)(t)
case"history":return(0,f.a)(t)
case"error":return(0,h.V)(t)
case"unhandledrejection":return(0,m.h)(t)
default:c.X&&l.kg.warn("unknown instrumentation type:",e)}}var _=n(146),v=n(479),b=n(832),S=n(438),k=n(29),w=n(206),E=n(927)
function x(e,t){let n=0
for(let r=e.length-1;r>=0;r--){const t=e[r]
"."===t?e.splice(r,1):".."===t?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..")
return e}const T=/^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/
function C(e){const t=e.length>1024?`<truncated>${e.slice(-1024)}`:e,n=T.exec(t)
return n?n.slice(1):[]}function I(...e){let t="",n=!1
for(let r=e.length-1;r>=-1&&!n;r--){const s=r>=0?e[r]:"/"
s&&(t=`${s}/${t}`,n="/"===s.charAt(0))}return t=x(t.split("/").filter((e=>!!e)),!n).join("/"),(n?"/":"")+t||"."}function R(e){let t=0
for(;t<e.length&&""===e[t];t++);let n=e.length-1
for(;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}function O(e,t){e=I(e).slice(1),t=I(t).slice(1)
const n=R(e.split("/")),r=R(t.split("/")),s=Math.min(n.length,r.length)
let o=s
for(let a=0;a<s;a++)if(n[a]!==r[a]){o=a
break}let i=[]
for(let a=o;a<n.length;a++)i.push("..")
return i=i.concat(r.slice(o)),i.join("/")}function M(e){const t=A(e),n="/"===e.slice(-1)
let r=x(e.split("/").filter((e=>!!e)),!t).join("/")
return r||t||(r="."),r&&n&&(r+="/"),(t?"/":"")+r}function A(e){return"/"===e.charAt(0)}function D(...e){return M(e.join("/"))}function L(e){const t=C(e),n=t[0]
let r=t[1]
return n||r?(r&&(r=r.slice(0,r.length-1)),n+r):"."}function N(e,t){let n=C(e)[2]
return t&&n.slice(-1*t.length)===t&&(n=n.slice(0,n.length-t.length)),n}var $=n(473),P=n(315)
const B={ip:!1,request:!0,transaction:!0,user:!0},F=["cookies","data","headers","method","query_string","url"],U=["id","username","email"]
function j(e,t,n){if(e){if(!e.metadata.source||"url"===e.metadata.source){const[n,r]=H(t,{path:!0,method:!0})
e.updateName(n),e.setMetadata({source:r})}e.setAttribute("url",t.originalUrl||t.url),t.baseUrl&&e.setAttribute("baseUrl",t.baseUrl),e.setData("query",W(t,n))}}function H(e,t={}){const n=e.method&&e.method.toUpperCase()
let r="",s="url"
t.customRoute||e.route?(r=t.customRoute||`${e.baseUrl||""}${e.route&&e.route.path}`,s="route"):(e.originalUrl||e.url)&&(r=(0,P.rt)(e.originalUrl||e.url||""))
let o=""
return t.method&&n&&(o+=n),t.method&&t.path&&(o+=" "),t.path&&r&&(o+=r),[o,s]}function z(e,t){const{include:n=F,deps:r}=t||{},s={},o=e.headers||{},i=e.method,a=o.host||e.hostname||e.host||"<no host>",c="https"===e.protocol||e.socket&&e.socket.encrypted?"https":"http",l=e.originalUrl||e.url||"",u=l.startsWith(c)?l:`${c}://${a}${l}`
return n.forEach((t=>{switch(t){case"headers":s.headers=o,n.includes("cookies")||delete s.headers.cookie
break
case"method":s.method=i
break
case"url":s.url=u
break
case"cookies":s.cookies=e.cookies||o.cookie&&function(e){const t={}
let n=0
for(;n<e.length;){const r=e.indexOf("=",n)
if(-1===r)break
let s=e.indexOf(";",n)
if(-1===s)s=e.length
else if(s<r){n=e.lastIndexOf(";",r-1)+1
continue}const o=e.slice(n,r).trim()
if(void 0===t[o]){let n=e.slice(r+1,s).trim()
34===n.charCodeAt(0)&&(n=n.slice(1,-1))
try{t[o]=-1!==n.indexOf("%")?decodeURIComponent(n):n}catch(e){t[o]=n}}n=s+1}return t}(o.cookie)||{}
break
case"query_string":s.query_string=W(e,r)
break
case"data":if("GET"===i||"HEAD"===i)break
void 0!==e.body&&(s.data=(0,_.HD)(e.body)?e.body:JSON.stringify((0,w.Fv)(e.body)))
break
default:({}).hasOwnProperty.call(e,t)&&(s[t]=e[t])}})),s}function q(e,t,n){const r={...B,...n&&n.include}
if(r.request){const s=Array.isArray(r.request)?z(t,{include:r.request,deps:n&&n.deps}):z(t,{deps:n&&n.deps})
e.request={...e.request,...s}}if(r.user){const n=t.user&&(0,_.PO)(t.user)?function(e,t){const n={}
return(Array.isArray(t)?t:U).forEach((t=>{e&&t in e&&(n[t]=e[t])})),n}(t.user,r.user):{}
Object.keys(n).length&&(e.user={...e.user,...n})}if(r.ip){const n=t.ip||t.socket&&t.socket.remoteAddress
n&&(e.user={...e.user,ip_address:n})}return r.transaction&&!e.transaction&&(e.transaction=function(e,t){switch(t){case"path":return H(e,{path:!0})[0]
case"handler":return e.route&&e.route.stack&&e.route.stack[0]&&e.route.stack[0].name||"<anonymous>"
default:return H(e,{path:!0,method:!0,customRoute:e._reconstructedRoute?e._reconstructedRoute:void 0})[0]}}(t,r.transaction)),e}function W(e,t){let n=e.originalUrl||e.url||""
if(n){n.startsWith("/")&&(n=`http://dogs.are.great${n}`)
try{return e.query||"undefined"!=typeof URL&&new URL(n).search.slice(1)||t&&t.url&&t.url.parse(n).query||void 0}catch(e){return}}}function G(e){const t={}
try{e.forEach(((e,n)=>{"string"==typeof e&&(t[n]=e)}))}catch(e){c.X&&l.kg.warn("Sentry failed extracting headers from a request object. If you see this, please file an issue.")}return t}function J(e){const t=G(e.headers)
return{method:e.method,url:e.url,headers:t}}var K=n(635),V=n(879),Y=n(399),X=n(651),Z=n(612),Q=n(505),ee=n(976),te=n(326),ne=n(269),re=n(977),se=n(732),oe=n(393)
function ie(e,t,n){const r=t.match(/([a-z_]+)\.(.*)/i)
null===r?e[t]=n:ie(e[r[1]],r[2],n)}function ae(e,t,n={}){return Array.isArray(t)?ce(e,t,n):function(e,t,n){return r=>{const s=t(r)
return e.allowExclusionByUser&&!s.find((t=>t.name===e.name))?s:ce(e,s,n)}}(e,t,n)}function ce(e,t,n){const r=t.find((t=>t.name===e.name))
if(r){for(const[e,t]of Object.entries(n))ie(r,e,t)
return t}return[...t,e]}function le(e){let t=[],n={}
return{add(r,s){for(;t.length>=e;){const e=t.shift()
void 0!==e&&delete n[e]}n[r]&&this.delete(r),t.push(r),n[r]=s},clear(){n={},t=[]},get:e=>n[e],size:()=>t.length,delete(e){if(!n[e])return!1
delete n[e]
for(let n=0;n<t.length;n++)if(t[n]===e){t.splice(n,1)
break}return!0}}}var ue=n(545)
function de(e,...t){const n=new String(String.raw(e,...t))
return n.__sentry_template_string__=e.join("\0").replace(/%/g,"%%").replace(/\0/g,"%s"),n.__sentry_template_values__=t,n}var pe=n(351)
function he(e,t,n,r){const s=e()
let o=!1,i=!0
return setInterval((()=>{const e=s.getTimeMs()
!1===o&&e>t+n&&(o=!0,i&&r()),e<t+n&&(o=!1)}),20),{poll:()=>{s.reset()},enabled:e=>{i=e}}}function me(e,t,n){const r=t?t.replace(/^file:\/\//,""):void 0,s=e.location.columnNumber?e.location.columnNumber+1:void 0,o=e.location.lineNumber?e.location.lineNumber+1:void 0
return(0,E.Jr)({filename:r,module:n(r),function:e.functionName||"?",colno:s,lineno:o,in_app:r?(0,pe.h)(r):void 0})}class fe{constructor(e){this._maxSize=e,this._cache=new Map}get size(){return this._cache.size}get(e){const t=this._cache.get(e)
if(void 0!==t)return this._cache.delete(e),this._cache.set(e,t),t}set(e,t){this._cache.size>=this._maxSize&&this._cache.delete(this._cache.keys().next().value),this._cache.set(e,t)}remove(e){const t=this._cache.get(e)
return t&&this._cache.delete(e),t}clear(){this._cache.clear()}keys(){return Array.from(this._cache.keys())}values(){const e=[]
return this._cache.forEach((t=>e.push(t))),e}}var ge=n(15)
async function ye(e,t){return(0,ge.h)(e,t)}async function _e(e){let t,n=e[0],r=1
for(;r<e.length;){const s=e[r],o=e[r+1]
if(r+=2,("optionalAccess"===s||"optionalCall"===s)&&null==n)return
"access"===s||"optionalAccess"===s?(t=n,n=await o(n)):"call"!==s&&"optionalCall"!==s||(n=await o(((...e)=>n.call(t,...e))),t=void 0)}return n}async function ve(e){const t=await _e(e)
return null==t||t}var be=n(694)
function Se(e){const t=(0,be.x)(e)
return null==t||t}var ke=n(776)
function we(e){return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}var Ee=n(678)},776:(e,t,n)=>{n.d(t,{D2:()=>u,Hj:()=>c,rK:()=>d,t4:()=>l})
var r=n(689),s=n(190),o=n(879)
const i={},a={}
function c(e,t){i[e]=i[e]||[],i[e].push(t)}function l(){Object.keys(i).forEach((e=>{i[e]=void 0}))}function u(e,t){a[e]||(t(),a[e]=!0)}function d(e,t){const n=e&&i[e]
if(n)for(const i of n)try{i(t)}catch(t){r.X&&s.kg.error(`Error while triggering instrumentation handler.\nType: ${e}\nName: ${(0,o.$P)(i)}\nError:`,t)}}},952:(e,t,n)=>{n.d(t,{e:()=>a})
var r=n(190),s=n(927),o=n(956),i=n(776)
function a(e){const t="console";(0,i.Hj)(t,e),(0,i.D2)(t,c)}function c(){"console"in o.GLOBAL_OBJ&&r.RU.forEach((function(e){e in o.GLOBAL_OBJ.console&&(0,s.hl)(o.GLOBAL_OBJ.console,e,(function(t){return r.LD[e]=t,function(...t){const n={args:t,level:e};(0,i.rK)("console",n)
const s=r.LD[e]
s&&s.apply(o.GLOBAL_OBJ.console,t)}}))}))}},105:(e,t,n)=>{n.d(t,{O:()=>p})
var r=n(438),s=n(927),o=n(956),i=n(776)
const a=o.GLOBAL_OBJ,c=1e3
let l,u,d
function p(e){(0,i.Hj)("dom",e),(0,i.D2)("dom",h)}function h(){if(!a.document)return
const e=i.rK.bind(null,"dom"),t=m(e,!0)
a.document.addEventListener("click",t,!1),a.document.addEventListener("keypress",t,!1),["EventTarget","Node"].forEach((t=>{const n=a[t]&&a[t].prototype
n&&n.hasOwnProperty&&n.hasOwnProperty("addEventListener")&&((0,s.hl)(n,"addEventListener",(function(t){return function(n,r,s){if("click"===n||"keypress"==n)try{const r=this,o=r.__sentry_instrumentation_handlers__=r.__sentry_instrumentation_handlers__||{},i=o[n]=o[n]||{refCount:0}
if(!i.handler){const r=m(e)
i.handler=r,t.call(this,n,r,s)}i.refCount++}catch(e){}return t.call(this,n,r,s)}})),(0,s.hl)(n,"removeEventListener",(function(e){return function(t,n,r){if("click"===t||"keypress"==t)try{const n=this,s=n.__sentry_instrumentation_handlers__||{},o=s[t]
o&&(o.refCount--,o.refCount<=0&&(e.call(this,t,o.handler,r),o.handler=void 0,delete s[t]),0===Object.keys(s).length&&delete n.__sentry_instrumentation_handlers__)}catch(e){}return e.call(this,t,n,r)}})))}))}function m(e,t=!1){return n=>{if(!n||n._sentryCaptured)return
const o=function(e){try{return e.target}catch(e){return null}}(n)
if(function(e,t){return"keypress"===e&&(!t||!t.tagName||"INPUT"!==t.tagName&&"TEXTAREA"!==t.tagName&&!t.isContentEditable)}(n.type,o))return;(0,s.xp)(n,"_sentryCaptured",!0),o&&!o._sentryId&&(0,s.xp)(o,"_sentryId",(0,r.DM)())
const i="keypress"===n.type?"input":n.type;(function(e){if(e.type!==u)return!1
try{if(!e.target||e.target._sentryId!==d)return!1}catch(e){}return!0})(n)||(e({event:n,name:i,global:t}),u=n.type,d=o?o._sentryId:void 0),clearTimeout(l),l=a.setTimeout((()=>{d=void 0,u=void 0}),c)}}},36:(e,t,n)=>{n.d(t,{U:()=>a})
var r=n(927),s=n(651),o=n(956),i=n(776)
function a(e){const t="fetch";(0,i.Hj)(t,e),(0,i.D2)(t,c)}function c(){(0,s.t$)()&&(0,r.hl)(o.GLOBAL_OBJ,"fetch",(function(e){return function(...t){const{method:n,url:r}=function(e){if(0===e.length)return{method:"GET",url:""}
if(2===e.length){const[t,n]=e
return{url:u(t),method:l(n,"method")?String(n.method).toUpperCase():"GET"}}const t=e[0]
return{url:u(t),method:l(t,"method")?String(t.method).toUpperCase():"GET"}}(t),s={args:t,fetchData:{method:n,url:r},startTimestamp:Date.now()}
return(0,i.rK)("fetch",{...s}),e.apply(o.GLOBAL_OBJ,t).then((e=>{const t={...s,endTimestamp:Date.now(),response:e}
return(0,i.rK)("fetch",t),e}),(e=>{const t={...s,endTimestamp:Date.now(),error:e}
throw(0,i.rK)("fetch",t),e}))}}))}function l(e,t){return!!e&&"object"==typeof e&&!!e[t]}function u(e){return"string"==typeof e?e:e?l(e,"url")?e.url:e.toString?e.toString():"":""}},309:(e,t,n)=>{n.d(t,{V:()=>i})
var r=n(956),s=n(776)
let o=null
function i(e){const t="error";(0,s.Hj)(t,e),(0,s.D2)(t,a)}function a(){o=r.GLOBAL_OBJ.onerror,r.GLOBAL_OBJ.onerror=function(e,t,n,r,i){const a={column:r,error:i,line:n,msg:e,url:t}
return(0,s.rK)("error",a),!(!o||o.__SENTRY_LOADER__)&&o.apply(this,arguments)},r.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__=!0}},222:(e,t,n)=>{n.d(t,{h:()=>i})
var r=n(956),s=n(776)
let o=null
function i(e){const t="unhandledrejection";(0,s.Hj)(t,e),(0,s.D2)(t,a)}function a(){o=r.GLOBAL_OBJ.onunhandledrejection,r.GLOBAL_OBJ.onunhandledrejection=function(e){const t=e
return(0,s.rK)("unhandledrejection",t),!(o&&!o.__SENTRY_LOADER__)||o.apply(this,arguments)},r.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__=!0}},41:(e,t,n)=>{n.d(t,{a:()=>l})
var r=n(927),s=n(956),o=n(678),i=n(776)
const a=s.GLOBAL_OBJ
let c
function l(e){const t="history";(0,i.Hj)(t,e),(0,i.D2)(t,u)}function u(){if(!(0,o.B)())return
const e=a.onpopstate
function t(e){return function(...t){const n=t.length>2?t[2]:void 0
if(n){const e=c,t=String(n)
c=t
const r={from:e,to:t};(0,i.rK)("history",r)}return e.apply(this,t)}}a.onpopstate=function(...t){const n=a.location.href,r=c
c=n
const s={from:r,to:n}
if((0,i.rK)("history",s),e)try{return e.apply(this,t)}catch(e){}},(0,r.hl)(a.history,"pushState",t),(0,r.hl)(a.history,"replaceState",t)}},702:(e,t,n)=>{n.d(t,{UK:()=>l,xU:()=>c})
var r=n(146),s=n(927),o=n(956),i=n(776)
const a=o.GLOBAL_OBJ,c="__sentry_xhr_v3__"
function l(e){(0,i.Hj)("xhr",e),(0,i.D2)("xhr",u)}function u(){if(!a.XMLHttpRequest)return
const e=XMLHttpRequest.prototype;(0,s.hl)(e,"open",(function(e){return function(...t){const n=Date.now(),o=(0,r.HD)(t[0])?t[0].toUpperCase():void 0,a=function(e){if((0,r.HD)(e))return e
try{return e.toString()}catch(e){}}(t[1])
if(!o||!a)return e.apply(this,t)
this[c]={method:o,url:a,request_headers:{}},"POST"===o&&a.match(/sentry_key/)&&(this.__sentry_own_request__=!0)
const l=()=>{const e=this[c]
if(e&&4===this.readyState){try{e.status_code=this.status}catch(e){}const t={args:[o,a],endTimestamp:Date.now(),startTimestamp:n,xhr:this};(0,i.rK)("xhr",t)}}
return"onreadystatechange"in this&&"function"==typeof this.onreadystatechange?(0,s.hl)(this,"onreadystatechange",(function(e){return function(...t){return l(),e.apply(this,t)}})):this.addEventListener("readystatechange",l),(0,s.hl)(this,"setRequestHeader",(function(e){return function(...t){const[n,s]=t,o=this[c]
return o&&(0,r.HD)(n)&&(0,r.HD)(s)&&(o.request_headers[n.toLowerCase()]=s),e.apply(this,t)}})),e.apply(this,t)}})),(0,s.hl)(e,"send",(function(e){return function(...t){const n=this[c]
if(!n)return e.apply(this,t)
void 0!==t[0]&&(n.body=t[0])
const r={args:[n.method,n.url],startTimestamp:Date.now(),xhr:this}
return(0,i.rK)("xhr",r),e.apply(this,t)}}))}},146:(e,t,n)=>{n.d(t,{Cy:()=>y,HD:()=>l,J8:()=>g,Kj:()=>f,Le:()=>u,PO:()=>p,TX:()=>a,V9:()=>v,VW:()=>i,VZ:()=>s,cO:()=>h,fm:()=>c,i2:()=>_,kK:()=>m,pt:()=>d,y1:()=>b})
const r=Object.prototype.toString
function s(e){switch(r.call(e)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0
default:return v(e,Error)}}function o(e,t){return r.call(e)===`[object ${t}]`}function i(e){return o(e,"ErrorEvent")}function a(e){return o(e,"DOMError")}function c(e){return o(e,"DOMException")}function l(e){return o(e,"String")}function u(e){return"object"==typeof e&&null!==e&&"__sentry_template_string__"in e&&"__sentry_template_values__"in e}function d(e){return null===e||u(e)||"object"!=typeof e&&"function"!=typeof e}function p(e){return o(e,"Object")}function h(e){return"undefined"!=typeof Event&&v(e,Event)}function m(e){return"undefined"!=typeof Element&&v(e,Element)}function f(e){return o(e,"RegExp")}function g(e){return Boolean(e&&e.then&&"function"==typeof e.then)}function y(e){return p(e)&&"nativeEvent"in e&&"preventDefault"in e&&"stopPropagation"in e}function _(e){return"number"==typeof e&&e!=e}function v(e,t){try{return e instanceof t}catch(e){return!1}}function b(e){return!("object"!=typeof e||null===e||!e.__isVue&&!e._isVue)}},479:(e,t,n)=>{n.d(t,{j:()=>o})
var r=n(29),s=n(956)
function o(){return"undefined"!=typeof window&&(!(0,r.KV)()||void 0!==s.GLOBAL_OBJ.process&&"renderer"===s.GLOBAL_OBJ.process.type)}},190:(e,t,n)=>{n.d(t,{Cf:()=>a,LD:()=>i,RU:()=>o,kg:()=>c})
var r=n(689),s=n(956)
const o=["debug","info","warn","error","log","assert","trace"],i={}
function a(e){if(!("console"in s.GLOBAL_OBJ))return e()
const t=s.GLOBAL_OBJ.console,n={},r=Object.keys(i)
r.forEach((e=>{const r=i[e]
n[e]=t[e],t[e]=r}))
try{return e()}finally{r.forEach((e=>{t[e]=n[e]}))}}const c=function(){let e=!1
const t={enable:()=>{e=!0},disable:()=>{e=!1},isEnabled:()=>e}
return r.X?o.forEach((n=>{t[n]=(...t)=>{e&&a((()=>{s.GLOBAL_OBJ.console[n](`Sentry Logger [${n}]:`,...t)}))}})):o.forEach((e=>{t[e]=()=>{}})),t}()},832:(e,t,n)=>{function r(){const e="function"==typeof WeakSet,t=e?new WeakSet:[]
return[function(n){if(e)return!!t.has(n)||(t.add(n),!1)
for(let e=0;e<t.length;e++)if(t[e]===n)return!0
return t.push(n),!1},function(n){if(e)t.delete(n)
else for(let e=0;e<t.length;e++)if(t[e]===n){t.splice(e,1)
break}}]}n.d(t,{i:()=>r})},438:(e,t,n)=>{n.d(t,{DM:()=>i,Db:()=>l,EG:()=>u,J4:()=>p,YO:()=>m,go:()=>h,jH:()=>c,lE:()=>f})
var r=n(927),s=n(399),o=n(956)
function i(){const e=o.GLOBAL_OBJ,t=e.crypto||e.msCrypto
let n=()=>16*Math.random()
try{if(t&&t.randomUUID)return t.randomUUID().replace(/-/g,"")
t&&t.getRandomValues&&(n=()=>{const e=new Uint8Array(1)
return t.getRandomValues(e),e[0]})}catch(e){}return([1e7]+1e3+4e3+8e3+1e11).replace(/[018]/g,(e=>(e^(15&n())>>e/4).toString(16)))}function a(e){return e.exception&&e.exception.values?e.exception.values[0]:void 0}function c(e){const{message:t,event_id:n}=e
if(t)return t
const r=a(e)
return r?r.type&&r.value?`${r.type}: ${r.value}`:r.type||r.value||n||"<unknown>":n||"<unknown>"}function l(e,t,n){const r=e.exception=e.exception||{},s=r.values=r.values||[],o=s[0]=s[0]||{}
o.value||(o.value=t||""),o.type||(o.type=n||"Error")}function u(e,t){const n=a(e)
if(!n)return
const r=n.mechanism
if(n.mechanism={type:"generic",handled:!0,...r,...t},t&&"data"in t){const e={...r&&r.data,...t.data}
n.mechanism.data=e}}const d=/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/
function p(e){const t=e.match(d)||[],n=parseInt(t[1],10),r=parseInt(t[2],10),s=parseInt(t[3],10)
return{buildmetadata:t[5],major:isNaN(n)?void 0:n,minor:isNaN(r)?void 0:r,patch:isNaN(s)?void 0:s,prerelease:t[4]}}function h(e,t,n=5){if(void 0===t.lineno)return
const r=e.length,o=Math.max(Math.min(r-1,t.lineno-1),0)
t.pre_context=e.slice(Math.max(0,o-n),o).map((e=>(0,s.JM)(e,0))),t.context_line=(0,s.JM)(e[Math.min(r-1,o)],t.colno||0),t.post_context=e.slice(Math.min(o+1,r),o+1+n).map((e=>(0,s.JM)(e,0)))}function m(e){if(e&&e.__sentry_captured__)return!0
try{(0,r.xp)(e,"__sentry_captured__",!0)}catch(e){}return!1}function f(e){return Array.isArray(e)?e:[e]}},351:(e,t,n)=>{function r(e,t=!1){return!(t||e&&!e.startsWith("/")&&!e.includes(":\\")&&!e.startsWith(".")&&!e.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//)||void 0===e||e.includes("node_modules/"))}function s(e){const t=/^\s*[-]{4,}$/,n=/at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/
return s=>{const o=s.match(n)
if(o){let t,n,s,i,a
if(o[1]){s=o[1]
let e=s.lastIndexOf(".")
if("."===s[e-1]&&e--,e>0){t=s.slice(0,e),n=s.slice(e+1)
const r=t.indexOf(".Module")
r>0&&(s=s.slice(r+1),t=t.slice(0,r))}i=void 0}n&&(i=t,a=n),"<anonymous>"===n&&(a=void 0,s=void 0),void 0===s&&(a=a||"<anonymous>",s=i?`${i}.${a}`:a)
let c=o[2]&&o[2].startsWith("file://")?o[2].slice(7):o[2]
const l="native"===o[5]
return c||!o[5]||l||(c=o[5]),{filename:c,module:e?e(c):void 0,function:s,lineno:parseInt(o[3],10)||void 0,colno:parseInt(o[4],10)||void 0,in_app:r(c,l)}}if(s.match(t))return{filename:s}}}n.d(t,{d:()=>s,h:()=>r})},29:(e,t,n)=>{n.d(t,{$y:()=>i,KV:()=>s,l$:()=>o})
var r=n(326)
function s(){return!(0,r.n)()&&"[object process]"===Object.prototype.toString.call("undefined"!=typeof process?process:0)}function o(e,t){return e.require(t)}function i(t){let n
try{n=o(e,t)}catch(e){}try{const{cwd:r}=o(e,"process")
n=o(e,`${r()}/node_modules/${t}`)}catch(e){}return n}e=n.hmd(e)},206:(e,t,n)=>{n.d(t,{C8:()=>u,Fv:()=>a,Qy:()=>c,_p:()=>l})
var r=n(146),s=n(832),o=n(927),i=n(879)
function a(e,t=100,n=1/0){try{return l("",e,t,n)}catch(e){return{ERROR:`**non-serializable** (${e})`}}}function c(e,t=3,n=102400){const r=a(e,t)
return s=r,function(e){return~-encodeURI(e).split(/%..|./).length}(JSON.stringify(s))>n?c(e,t-1,n):r
var s}function l(e,t,n=1/0,a=1/0,c=(0,s.i)()){const[u,d]=c
if(null==t||["number","boolean","string"].includes(typeof t)&&!(0,r.i2)(t))return t
const p=function(e,t){try{if("domain"===e&&t&&"object"==typeof t&&t._events)return"[Domain]"
if("domainEmitter"===e)return"[DomainEmitter]"
if("undefined"!=typeof global&&t===global)return"[Global]"
if("undefined"!=typeof window&&t===window)return"[Window]"
if("undefined"!=typeof document&&t===document)return"[Document]"
if((0,r.y1)(t))return"[VueViewModel]"
if((0,r.Cy)(t))return"[SyntheticEvent]"
if("number"==typeof t&&t!=t)return"[NaN]"
if("function"==typeof t)return`[Function: ${(0,i.$P)(t)}]`
if("symbol"==typeof t)return`[${String(t)}]`
if("bigint"==typeof t)return`[BigInt: ${String(t)}]`
const n=function(e){const t=Object.getPrototypeOf(e)
return t?t.constructor.name:"null prototype"}(t)
return/^HTML(\w*)Element$/.test(n)?`[HTMLElement: ${n}]`:`[object ${n}]`}catch(e){return`**non-serializable** (${e})`}}(e,t)
if(!p.startsWith("[object "))return p
if(t.__sentry_skip_normalization__)return t
const h="number"==typeof t.__sentry_override_normalization_depth__?t.__sentry_override_normalization_depth__:n
if(0===h)return p.replace("object ","")
if(u(t))return"[Circular ~]"
const m=t
if(m&&"function"==typeof m.toJSON)try{return l("",m.toJSON(),h-1,a,c)}catch(e){}const f=Array.isArray(t)?[]:{}
let g=0
const y=(0,o.Sh)(t)
for(const r in y){if(!Object.prototype.hasOwnProperty.call(y,r))continue
if(g>=a){f[r]="[MaxProperties ~]"
break}const e=y[r]
f[r]=l(r,e,h-1,a,c),g++}return d(t),f}function u(e,t){const n=t.replace(/\\/g,"/").replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")
let r=e
try{r=decodeURI(e)}catch(e){}return r.replace(/\\/g,"/").replace(/webpack:\/?/g,"").replace(new RegExp(`(file://)?/*${n}/*`,"ig"),"app:///")}},927:(e,t,n)=>{n.d(t,{$Q:()=>u,HK:()=>d,Jr:()=>y,Sh:()=>h,_j:()=>p,hl:()=>c,mz:()=>v,xp:()=>l,zf:()=>g})
var r=n(809),s=n(689),o=n(146),i=n(190),a=n(399)
function c(e,t,n){if(!(t in e))return
const r=e[t],s=n(r)
"function"==typeof s&&u(s,r),e[t]=s}function l(e,t,n){try{Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0})}catch(n){s.X&&i.kg.log(`Failed to add non-enumerable property "${t}" to object`,e)}}function u(e,t){try{const n=t.prototype||{}
e.prototype=t.prototype=n,l(e,"__sentry_original__",t)}catch(e){}}function d(e){return e.__sentry_original__}function p(e){return Object.keys(e).map((t=>`${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`)).join("&")}function h(e){if((0,o.VZ)(e))return{message:e.message,name:e.name,stack:e.stack,...f(e)}
if((0,o.cO)(e)){const t={type:e.type,target:m(e.target),currentTarget:m(e.currentTarget),...f(e)}
return"undefined"!=typeof CustomEvent&&(0,o.V9)(e,CustomEvent)&&(t.detail=e.detail),t}return e}function m(e){try{return(0,o.kK)(e)?(0,r.Rt)(e):Object.prototype.toString.call(e)}catch(e){return"<unknown>"}}function f(e){if("object"==typeof e&&null!==e){const t={}
for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
return t}return{}}function g(e,t=40){const n=Object.keys(h(e))
if(n.sort(),!n.length)return"[object has no keys]"
if(n[0].length>=t)return(0,a.$G)(n[0],t)
for(let r=n.length;r>0;r--){const e=n.slice(0,r).join(", ")
if(!(e.length>t))return r===n.length?e:(0,a.$G)(e,t)}return""}function y(e){return _(e,new Map)}function _(e,t){if((0,o.PO)(e)){const n=t.get(e)
if(void 0!==n)return n
const r={}
t.set(e,r)
for(const s of Object.keys(e))void 0!==e[s]&&(r[s]=_(e[s],t))
return r}if(Array.isArray(e)){const n=t.get(e)
if(void 0!==n)return n
const r=[]
return t.set(e,r),e.forEach((e=>{r.push(_(e,t))})),r}return e}function v(e){let t
switch(!0){case null==e:t=new String(e)
break
case"symbol"==typeof e||"bigint"==typeof e:t=Object(e)
break
case(0,o.pt)(e):t=new e.constructor(e)
break
default:t=e}return t}},473:(e,t,n)=>{n.d(t,{x:()=>o})
var r=n(913),s=n(612)
function o(e){const t=[]
function n(e){return t.splice(t.indexOf(e),1)[0]}return{$:t,add:function(o){if(!(void 0===e||t.length<e))return(0,s.$2)(new r.b("Not adding Promise because buffer limit was reached."))
const i=o()
return-1===t.indexOf(i)&&t.push(i),i.then((()=>n(i))).then(null,(()=>n(i).then(null,(()=>{})))),i},drain:function(e){return new s.cW(((n,r)=>{let o=t.length
if(!o)return n(!0)
const i=setTimeout((()=>{e&&e>0&&n(!1)}),e)
t.forEach((e=>{(0,s.WD)(e).then((()=>{--o||(clearTimeout(i),n(!0))}),r)}))}))}}}},732:(e,t,n)=>{n.d(t,{B1:()=>r,JY:()=>s,Q:()=>i,WG:()=>a,ns:()=>o})
const r=6e4
function s(e,t=Date.now()){const n=parseInt(`${e}`,10)
if(!isNaN(n))return 1e3*n
const s=Date.parse(`${e}`)
return isNaN(s)?r:s-t}function o(e,t){return e[t]||e.all||0}function i(e,t,n=Date.now()){return o(e,t)>n}function a(e,{statusCode:t,headers:n},r=Date.now()){const o={...e},i=n&&n["x-sentry-rate-limits"],a=n&&n["retry-after"]
if(i)for(const s of i.trim().split(",")){const[e,t]=s.split(":",2),n=parseInt(e,10),i=1e3*(isNaN(n)?60:n)
if(t)for(const s of t.split(";"))o[s]=r+i
else o.all=r+i}else a?o.all=r+s(a,r):429===t&&(o.all=r+6e4)
return o}},635:(e,t,n)=>{n.d(t,{En:()=>s,Tx:()=>r,VT:()=>o})
const r=["fatal","error","warning","log","info","debug"]
function s(e){return o(e)}function o(e){return"warn"===e?"warning":r.includes(e)?e:"log"}},879:(e,t,n)=>{n.d(t,{$P:()=>d,Ep:()=>p,Sq:()=>c,UV:()=>l,pE:()=>a})
var r=n(351)
const s=50,o=/\(error: (.*)\)/,i=/captureMessage|captureException/
function a(...e){const t=e.sort(((e,t)=>e[0]-t[0])).map((e=>e[1]))
return(e,n=0)=>{const r=[],i=e.split("\n")
for(let a=n;a<i.length;a++){const e=i[a]
if(e.length>1024)continue
const n=o.test(e)?e.replace(o,"$1"):e
if(!n.match(/\S*Error: /)){for(const e of t){const t=e(n)
if(t){r.push(t)
break}}if(r.length>=s)break}}return l(r)}}function c(e){return Array.isArray(e)?a(...e):e}function l(e){if(!e.length)return[]
const t=Array.from(e)
return/sentryWrapped/.test(t[t.length-1].function||"")&&t.pop(),t.reverse(),i.test(t[t.length-1].function||"")&&(t.pop(),i.test(t[t.length-1].function||"")&&t.pop()),t.slice(0,s).map((e=>({...e,filename:e.filename||t[t.length-1].filename,function:e.function||"?"})))}const u="<anonymous>"
function d(e){try{return e&&"function"==typeof e&&e.name||u}catch(e){return u}}function p(e){return[90,(0,r.d)(e)]}},399:(e,t,n)=>{n.d(t,{$G:()=>s,JM:()=>o,U0:()=>c,nK:()=>i,zC:()=>a})
var r=n(146)
function s(e,t=0){return"string"!=typeof e||0===t||e.length<=t?e:`${e.slice(0,t)}...`}function o(e,t){let n=e
const r=n.length
if(r<=150)return n
t>r&&(t=r)
let s=Math.max(t-60,0)
s<5&&(s=0)
let o=Math.min(s+140,r)
return o>r-5&&(o=r),o===r&&(s=Math.max(o-140,0)),n=n.slice(s,o),s>0&&(n=`'{snip} ${n}`),o<r&&(n+=" {snip}"),n}function i(e,t){if(!Array.isArray(e))return""
const n=[]
for(let s=0;s<e.length;s++){const t=e[s]
try{(0,r.y1)(t)?n.push("[VueViewModel]"):n.push(String(t))}catch(e){n.push("[value cannot be serialized]")}}return n.join(t)}function a(e,t,n=!1){return!!(0,r.HD)(e)&&((0,r.Kj)(t)?t.test(e):!!(0,r.HD)(t)&&(n?e===t:e.includes(t)))}function c(e,t=[],n=!1){return t.some((t=>a(e,t,n)))}},651:(e,t,n)=>{n.d(t,{Ak:()=>l,Du:()=>u,S$:()=>i,fL:()=>c,hv:()=>h,t$:()=>d,zO:()=>a,zb:()=>p})
var r=n(689),s=n(190)
const o=(0,n(956).R)()
function i(){try{return new ErrorEvent(""),!0}catch(e){return!1}}function a(){try{return new DOMError(""),!0}catch(e){return!1}}function c(){try{return new DOMException(""),!0}catch(e){return!1}}function l(){if(!("fetch"in o))return!1
try{return new Headers,new Request("http://www.example.com"),new Response,!0}catch(e){return!1}}function u(e){return e&&/^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())}function d(){if("string"==typeof EdgeRuntime)return!0
if(!l())return!1
if(u(o.fetch))return!0
let e=!1
const t=o.document
if(t&&"function"==typeof t.createElement)try{const n=t.createElement("iframe")
n.hidden=!0,t.head.appendChild(n),n.contentWindow&&n.contentWindow.fetch&&(e=u(n.contentWindow.fetch)),t.head.removeChild(n)}catch(e){r.X&&s.kg.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",e)}return e}function p(){return"ReportingObserver"in o}function h(){if(!l())return!1
try{return new Request("_",{referrerPolicy:"origin"}),!0}catch(e){return!1}}},612:(e,t,n)=>{n.d(t,{$2:()=>i,WD:()=>o,cW:()=>a})
var r,s=n(146)
function o(e){return new a((t=>{t(e)}))}function i(e){return new a(((t,n)=>{n(e)}))}!function(e){e[e.PENDING=0]="PENDING",e[e.RESOLVED=1]="RESOLVED",e[e.REJECTED=2]="REJECTED"}(r||(r={}))
class a{constructor(e){a.prototype.__init.call(this),a.prototype.__init2.call(this),a.prototype.__init3.call(this),a.prototype.__init4.call(this),this._state=r.PENDING,this._handlers=[]
try{e(this._resolve,this._reject)}catch(e){this._reject(e)}}then(e,t){return new a(((n,r)=>{this._handlers.push([!1,t=>{if(e)try{n(e(t))}catch(e){r(e)}else n(t)},e=>{if(t)try{n(t(e))}catch(e){r(e)}else r(e)}]),this._executeHandlers()}))}catch(e){return this.then((e=>e),e)}finally(e){return new a(((t,n)=>{let r,s
return this.then((t=>{s=!1,r=t,e&&e()}),(t=>{s=!0,r=t,e&&e()})).then((()=>{s?n(r):t(r)}))}))}__init(){this._resolve=e=>{this._setResult(r.RESOLVED,e)}}__init2(){this._reject=e=>{this._setResult(r.REJECTED,e)}}__init3(){this._setResult=(e,t)=>{this._state===r.PENDING&&((0,s.J8)(t)?t.then(this._resolve,this._reject):(this._state=e,this._value=t,this._executeHandlers()))}}__init4(){this._executeHandlers=()=>{if(this._state===r.PENDING)return
const e=this._handlers.slice()
this._handlers=[],e.forEach((e=>{e[0]||(this._state===r.RESOLVED&&e[1](this._value),this._state===r.REJECTED&&e[2](this._value),e[0]=!0)}))}}}},505:(e,t,n)=>{n.d(t,{Z1:()=>l,_I:()=>a,mL:()=>c,ph:()=>i,yW:()=>o})
var r=n(956)
const s=1e3
function o(){return Date.now()/s}const i=function(){const{performance:e}=r.GLOBAL_OBJ
if(!e||!e.now)return o
const t=Date.now()-e.now(),n=null==e.timeOrigin?t:e.timeOrigin
return()=>(n+e.now())/s}(),a=i
let c
const l=(()=>{const{performance:e}=r.GLOBAL_OBJ
if(!e||!e.now)return void(c="none")
const t=36e5,n=e.now(),s=Date.now(),o=e.timeOrigin?Math.abs(e.timeOrigin+n-s):t,i=o<t,a=e.timing&&e.timing.navigationStart,l="number"==typeof a?Math.abs(a+n-s):t
return i||l<t?o<=l?(c="timeOrigin",e.timeOrigin):(c="navigationStart",a):(c="dateNow",s)})()},976:(e,t,n)=>{n.d(t,{$p:()=>c,KA:()=>a,Ke:()=>o,qG:()=>i})
var r=n(393),s=n(438)
const o=new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$")
function i(e){if(!e)return
const t=e.match(o)
if(!t)return
let n
return"1"===t[3]?n=!0:"0"===t[3]&&(n=!1),{traceId:t[1],parentSampled:n,parentSpanId:t[2]}}function a(e,t){const n=i(e),o=(0,r.EN)(t),{traceId:a,parentSpanId:c,parentSampled:l}=n||{},u={traceId:a||(0,s.DM)(),spanId:(0,s.DM)().substring(16),sampled:l}
return c&&(u.parentSpanId=c),o&&(u.dsc=o),{traceparentData:n,dynamicSamplingContext:o,propagationContext:u}}function c(e=(0,s.DM)(),t=(0,s.DM)().substring(16),n){let r=""
return void 0!==n&&(r=n?"-1":"-0"),`${e}-${t}${r}`}},315:(e,t,n)=>{function r(e){if(!e)return{}
const t=e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/)
if(!t)return{}
const n=t[6]||"",r=t[8]||""
return{host:t[4],path:t[5],protocol:t[2],search:n,hash:r,relative:t[5]+n+r}}function s(e){return e.split(/[\?#]/,1)[0]}function o(e){return e.split(/\\?\//).filter((e=>e.length>0&&","!==e)).length}function i(e){const{protocol:t,host:n,path:r}=e
return`${t?`${t}://`:""}${n&&n.replace(/^.*@/,"[filtered]:[filtered]@").replace(/(:80)$/,"").replace(/(:443)$/,"")||""}${r}`}n.d(t,{$A:()=>o,en:()=>r,rt:()=>s,tF:()=>i})},678:(e,t,n)=>{n.d(t,{B:()=>s})
const r=(0,n(956).R)()
function s(){const e=r.chrome,t=e&&e.app&&e.app.runtime,n="history"in r&&!!r.history.pushState&&!!r.history.replaceState
return!t&&n}},956:(e,t,n)=>{function r(e){return e&&e.Math==Math?e:void 0}n.d(t,{GLOBAL_OBJ:()=>s,R:()=>o,Y:()=>i})
const s="object"==typeof globalThis&&r(globalThis)||"object"==typeof window&&r(window)||"object"==typeof self&&r(self)||"object"==typeof global&&r(global)||function(){return this}()||{}
function o(){return s}function i(e,t,n){const r=n||s,o=r.__SENTRY__=r.__SENTRY__||{}
return o[e]||(o[e]=t())}}}])
