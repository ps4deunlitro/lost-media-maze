function m(c,a,b,d){c.i.ea(c.W,a,b,d)}function r(c,a,b,d){c.i.m?m(c,a,b,d):c.i.Fb()._OnMessageFromDOM({type:"event",component:c.W,handler:a,dispatchOpts:d||null,data:b,responseId:null})}function t(c,a,b){c.i.h(c.W,a,b)}function u(c,a){for(const [b,d]of a)t(c,b,d)}window.pa=class{constructor(c,a){this.i=c;this.W=a}Na(){}};window.qc=class{constructor(){}};"use strict";function aa(c,a){t(c,"get-element",b=>{const d=v(c,b.elementId);return a(d,b)})}
function v(c,a){c=c.K.get(a);if(!c)throw Error(`no element with id ${a}`);return c.ha}
window.Pa=class extends self.pa{constructor(c,a){super(c,a);this.K=new Map;this.U=!0;u(this,[["create",()=>{throw Error("required override");}],["destroy",b=>{b=b.elementId;const d=v(this,b);this.U&&d.parentElement.removeChild(d);this.K.delete(b)}],["set-visible",b=>{if(this.U){var d=this.K.get(b.elementId),e=d.ha;d.ib?e.style.display=b.isVisible?"":"none":d.Yb=!!b.isVisible}}],["update-position",b=>{if(this.U){var d=this.K.get(b.elementId),e=d.ha,f=this.i;e.style.left=b.left+"px";e.style.top=b.top+
"px";e.style.width=b.width+"px";e.style.height=b.height+"px";var h=b.fontSize;null!==h&&(e.style.fontSize=h+"em");h=b.htmlIndex;d.bc=h;h=f.Qa(h);h!==d.C&&(e.remove(),f.da(h).appendChild(e),d.C=h,f.wa());b=b.htmlZIndex;b!==d.za&&(d.za=b,f.wa());d.ib||(d.ib=!0,d.Yb&&(e.style.display=""))}}],["update-state",b=>{v(this,b.elementId);throw Error("required override");}],["focus",b=>{const d=v(this,b.elementId);b.focus?d.focus():d.blur()}],["set-css-style",b=>{const d=v(this,b.elementId),e=b.prop;b=b.val;
e.startsWith("--")?d.style.setProperty(e,b):d.style[e]=b}],["set-attribute",b=>{v(this,b.elementId).setAttribute(b.name,b.val)}],["remove-attribute",b=>{v(this,b.elementId).removeAttribute(b.name)}]]);aa(this,b=>b)}};"use strict";const w=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent),x=/android/i.test(navigator.userAgent),ba=/safari/i.test(navigator.userAgent)&&!/(chrome|chromium|edg\/|OPR\/|nwjs)/i.test(navigator.userAgent);let y=0;
function z(c){const a=document.createElement("script");a.async=!1;a.type="module";return c.fc?new Promise(b=>{const d="c3_resolve_"+y;++y;self[d]=b;a.textContent=c.kc+`\n\nself["${d}"]();`;document.head.appendChild(a)}):new Promise((b,d)=>{a.onload=b;a.onerror=d;a.src=c;document.head.appendChild(a)})}
async function ca(){if(!navigator.userActivation||"undefined"===typeof OffscreenCanvas)return!1;try{let c=!1;const a=new Worker(URL.createObjectURL(new Blob(['\n\tself.addEventListener("message", () =>\n\t{\n\t\ttry {\n\t\t\tconst offscreenCanvas = new OffscreenCanvas(32, 32);\n\t\t\tconst gl = offscreenCanvas.getContext("webgl");\n\t\t\tself.postMessage(!!gl);\n\t\t}\n\t\tcatch (err)\n\t\t{\n\t\t\tconsole.warn("Feature detection worker error:", err);\n\t\t\tself.postMessage(false);\n\t\t}\n\t});'],{type:"text/javascript"})),
{get type(){c=!0}}),b=await new Promise(d=>{a.addEventListener("message",e=>{a.terminate();d(e.data)});a.postMessage("")});return c&&b}catch(c){return console.warn("Error feature detecting worker mode: ",c),!1}}let A=new Audio;
const da={"audio/webm; codecs=opus":!!A.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!A.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!A.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!A.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!A.canPlayType("audio/mp4"),"audio/mpeg":!!A.canPlayType("audio/mpeg")};A=null;async function ea(c){c=await B(c);return(new TextDecoder("utf-8")).decode(c)}
function B(c){return new Promise((a,b)=>{const d=new FileReader;d.onload=e=>a(e.target.result);d.onerror=e=>b(e);d.readAsArrayBuffer(c)})}const C=[];let D=0;window.RealFile=window.File;const E=[],F=new Map,G=new Map;let fa=0;const H=[];self.runOnStartup=function(c){if("function"!==typeof c)throw Error("runOnStartup called without a function");H.push(c)};const J=new Set(["cordova","playable-ad","instant-games"]);let K=!1;
window.ra=class c{constructor(a){this.m=a.mc;this.Z=null;this.l="";this.M=a.jc;this.ba={};this.Da=this.O=null;this.J=[];this.F=null;this.kb=!0;this.j=[];this.Ha=[];this.Ia=!1;this.mb=()=>this.Db();this.jb=!1;this.X=null;this.L=-1;this.ac=()=>this.Ob();this.$=new Set;this.Ka=null;this.nb=[];this.g=a.ob;this.Ba="file"===location.protocol.substr(0,4);if("playable-ad"===this.g||"instant-games"===this.g)this.m=!1;ba&&(this.m=!1);if("cordova"===this.g&&this.m&&x){const b=/Chrome\/(\d+)/i.exec(navigator.userAgent);
b&&90<=parseInt(b[1],10)||(this.m=!1)}this.H()?self.chrome.webview.addEventListener("message",b=>this.$a(b.data)):"macos-wkwebview"===this.g&&(self.C3WrapperOnMessage=b=>this.$a(b));this.ia=this.v=null;"html5"!==this.g||window.isSecureContext||console.warn("[Construct] Warning: the browser indicates this is not a secure context. Some features may be unavailable. Use secure (HTTPS) hosting to ensure all features are available.");this.h("canvas","update-size",b=>this.Sb(b));this.h("canvas","set-html-layer-count",
b=>this._OnSetHTMLLayerCount(b));this.h("canvas","cleanup-html-layers",()=>this.Jb());this.h("runtime","cordova-fetch-local-file",b=>this.Kb(b));this.h("runtime","create-job-worker",()=>this.Lb());this.h("runtime","send-wrapper-extension-message",b=>this.Rb(b));"cordova"===this.g?document.addEventListener("deviceready",()=>this.Ya(a)):this.Ya(a)}qb(){return this.j[0].canvas}Qa(a){return Math.min(a,this.j.length-1)}da(a){if(0>a||a>=this.j.length)throw new RangeError("invalid canvas layer");return this.j[a].ca}_GetHTMLWrapElement(a){return this.da(a)}ub(){return w&&
"cordova"===this.g}S(){const a=navigator.userAgent;return w&&J.has(this.g)||navigator.standalone||/crios\/|fxios\/|edgios\//i.test(a)}sb(){return x}Ra(){return x&&J.has(this.g)}Sa(){return"windows-webview2"===this.g||!!("preview"===this.g&&window.chrome&&window.chrome.webview&&window.chrome.webview.postMessage)}H(){return this.Sa()||"xbox-uwp-webview2"===this.g}async Ya(a){this.m&&!await ca()&&(this.m=!1);"macos-wkwebview"===this.g?this.T({type:"ready"}):this.H()&&(this.Vb(),this.nb=(await this.Ib()).registeredComponentIds);
if("playable-ad"===this.g){this.v=self.c3_base64files;this.ia={};await this.Ab();for(let d=0,e=a.P.length;d<e;++d){var b=a.P[d];this.ia.hasOwnProperty(b)?a.P[d]={fc:!0,kc:this.ia[b]}:this.v.hasOwnProperty(b)&&(a.P[d]=URL.createObjectURL(this.v[b]))}a.ma=[]}if("nwjs"===this.g&&self.nw&&self.nw.App.manifest["c3-steam-mode"]){let d=0;this.Ta(()=>{d++;document.documentElement.style.opacity=0===d%2?"1":"0.999"})}a.ic?this.l=a.ic:(b=location.origin,this.l=("null"===b?"file:///":b)+location.pathname,b=this.l.lastIndexOf("/"),
-1!==b&&(this.l=this.l.substr(0,b+1)));a.oc&&(this.ba=a.oc);b=new MessageChannel;this.Z=b.port1;this.Z.onmessage=d=>this._OnMessageFromRuntime(d.data);window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(d=>this.Nb(d));this.X=new self.vb(this);await ha(this.X);"object"===typeof window.StatusBar&&window.StatusBar.hide();if("object"===typeof window.AndroidFullScreen)try{await new Promise((d,e)=>{window.AndroidFullScreen.immersiveMode(d,e)})}catch(d){console.error("Failed to enter Android immersive mode: ",
d)}this.m?await this.Hb(a,b.port2):await this.Gb(a,b.port2)}ta(a){a=this.ba.hasOwnProperty(a)?this.ba[a]:a.endsWith("/workermain.js")&&this.ba.hasOwnProperty("workermain.js")?this.ba["workermain.js"]:"playable-ad"===this.g&&this.v.hasOwnProperty(a)?this.v[a]:a;a instanceof Blob&&(a=URL.createObjectURL(a));return a}async oa(a,b,d){if(a.startsWith("blob:"))return new Worker(a,d);if("cordova"===this.g&&this.Ba)return a=await this.na(d.ec?a:this.M+a),new Worker(URL.createObjectURL(new Blob([a],{type:"application/javascript"})),
d);a=new URL(a,b);if(location.origin!==a.origin){a=await fetch(a);if(!a.ok)throw Error("failed to fetch worker script");a=await a.blob();return new Worker(URL.createObjectURL(a),d)}return new Worker(a,d)}u(){return Math.max(window.innerWidth,1)}o(){return Math.max(window.innerHeight,1)}qa(){return this.H()||(new Set(["cordova","nwjs","macos-wkwebview"])).has(this.g)?"standalone":window.matchMedia("(display-mode: fullscreen)").matches?"fullscreen":window.matchMedia("(display-mode: standalone)").matches?
"standalone":window.matchMedia("(display-mode: minimal-ui)").matches?"minimal-ui":navigator.standalone?"standalone":"browser"}Xa(a){var b=this.l,d=location.href,e=this.u(),f=this.o(),h=this.qa(),g=window.devicePixelRatio,k=c.R(),l=a.tc,n=window.cr_previewImageBlobs||this.v,p=window.cr_previewProjectFileBlobs,q=window.cr_previewProjectFiles,ua=window.cr_swClientId||"";a=a.ob;var va=(new URLSearchParams(self.location.search)).has("debug"),I=this.X;return{runtimeBaseUrl:b,previewUrl:d,windowInnerWidth:e,
windowInnerHeight:f,cssDisplayMode:h,devicePixelRatio:g,isFullscreen:k,projectData:l,previewImageBlobs:n,previewProjectFileBlobs:p,previewProjectFileSWUrls:q,swClientId:ua,exportType:a,isDebug:va,ife:!!self.sc,jobScheduler:{inputPort:I.Aa,outputPort:I.Ga,maxNumWorkers:I.Zb},supportedAudioFormats:da,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.M+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.M+"opus.wasm.wasm",isFileProtocol:this.Ba,isiOSCordova:this.ub(),isiOSWebView:this.S(),
isWindowsWebView2:this.Sa(),isAnyWebView2Wrapper:this.H(),wrapperComponentIds:this.nb,isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async Hb(a,b){const d=this.ta(a.nc);"preview"===this.g?(this.O=new Worker("previewworker.js",{type:"module",name:"Runtime"}),await new Promise((l,n)=>{const p=q=>{this.O.removeEventListener("message",p);q.data&&"ok"===q.data.type?l():n()};this.O.addEventListener("message",p);this.O.postMessage({type:"construct-worker-init","import":(new URL(d,this.l)).toString()})})):
this.O=await this.oa(d,this.l,{type:"module",name:"Runtime",ec:!0});const e=document.createElement("canvas");e.style.display="none";const f=e.transferControlToOffscreen();document.body.appendChild(e);const h=document.createElement("div");h.className="c3htmlwrap";document.body.appendChild(h);this.j.push({canvas:e,ca:h});window.c3canvas=e;self.C3_InsertHTMLPlaceholders&&self.C3_InsertHTMLPlaceholders();let g=a.ma||[],k=a.P;g=await Promise.all(g.map(l=>this.I(l)));k=await Promise.all(k.map(l=>this.I(l)));
if("cordova"===this.g)for(let l=0,n=a.la.length;l<n;++l){const p=a.la[l],q=p[0];if(q===a.La||"scriptsInEvents.js"===q||q.endsWith("/scriptsInEvents.js"))p[1]=await this.I(q)}this.O.postMessage(Object.assign(this.Xa(a),{type:"init-runtime",isInWorker:!0,messagePort:b,canvas:f,workerDependencyScripts:g,engineScripts:k,projectScripts:a.la,mainProjectScript:a.La,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[b,f,...ia(this.X)]);this.J=E.map(l=>new l(this));this.Wa();L(e);M(h);ja(this.F);self.c3_callFunction=
(l,n)=>{var p=this.F;return p.i.wb(p.W,{name:l,params:n})};"preview"===this.g&&(self.goToLastErrorScript=()=>this.ea("runtime","go-to-last-error-script"))}async Gb(a,b){const d=document.createElement("canvas");d.style.display="none";document.body.appendChild(d);var e=document.createElement("div");e.className="c3htmlwrap";document.body.appendChild(e);this.j.push({canvas:d,ca:e});window.c3canvas=d;self.C3_InsertHTMLPlaceholders&&self.C3_InsertHTMLPlaceholders();this.J=E.map(g=>new g(this));this.Wa();
L(d);M(e);e=a.P.map(g=>"string"===typeof g?(new URL(g,this.l)).toString():g);if(Array.isArray(a.ma)){var f=[...a.ma].map(g=>g instanceof Blob?URL.createObjectURL(g):g);e.unshift(...f)}e=await Promise.all(e.map(g=>this.I(g)));await Promise.all(e.map(g=>z(g)));e=self.C3_ProjectScriptsStatus;f=a.La;const h=a.la;for(let [g,k]of h)if(k||(k=g),g===f)try{k=await this.I(k),await z(k),"preview"!==this.g||e[g]||this.ab(g,"main script did not run to completion")}catch(l){this.ab(g,l)}else if("scriptsInEvents.js"===
g||g.endsWith("/scriptsInEvents.js"))k=await this.I(k),await z(k);"preview"===this.g&&"object"!==typeof self.pc.rc?(this.ga(),console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")):(a=Object.assign(this.Xa(a),{isInWorker:!1,messagePort:b,canvas:d,runOnStartupFunctions:H}),ja(this.F),this.Za(),this.Da=self.C3_CreateRuntime(a),
await self.C3_InitRuntime(this.Da,a))}ab(a,b){this.ga();console.error(`[Preview] Failed to load project main script (${a}): `,b);alert(`Failed to load project main script (${a}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`)}Za(){this.ga()}ga(){const a=window.cr_previewLoadingElem;a&&(a.parentElement.removeChild(a),window.cr_previewLoadingElem=null)}async Lb(){const a=await ka(this.X);return{outputPort:a,transferables:[a]}}Sb(a){if(!this.jb){var b=
a.styleWidth+"px",d=a.styleHeight+"px",e=a.marginLeft+"px",f=a.marginTop+"px";for(const {canvas:h,ca:g}of this.j)h.style.width=b,h.style.height=d,h.style.marginLeft=e,h.style.marginTop=f,g.style.width=b,g.style.height=d,g.style.marginLeft=e,g.style.marginTop=f,this.kb&&(h.style.display="",g.style.display="");document.documentElement.style.setProperty("--construct-scale",a.displayScale);this.kb=!1}}_OnSetHTMLLayerCount(a){var b=a.count,d=a.immediate,e=a.styleWidth+"px",f=a.styleHeight+"px";const h=
a.marginLeft+"px",g=a.marginTop+"px";a=[];const k=[];if(b<this.j.length)for(;this.j.length>b;){const {canvas:l,ca:n}=this.j.pop();n.remove();this.m&&!d?this.Ha.push(l):l.remove()}else if(b>this.j.length)for(let l=0,n=b-this.j.length;l<n;++l)b=document.createElement("canvas"),b.classList.add("c3overlay"),this.m?(d=b.transferControlToOffscreen(),a.push(d),k.push(d)):a.push(b),document.body.appendChild(b),d=document.createElement("div"),d.classList.add("c3htmlwrap","c3overlay"),document.body.appendChild(d),
b.style.width=e,b.style.height=f,b.style.marginLeft=h,b.style.marginTop=g,d.style.width=e,d.style.height=f,d.style.marginLeft=h,d.style.marginTop=g,L(b),M(d),this.j.push({canvas:b,ca:d});for(const l of this.J)if(l instanceof window.Pa&&l.U)for(const n of l.K.values())e=l.i.Qa(n.bc),f=n.C,-1!==e&&-1!==f&&e!==f&&(f=n.ha,f.remove(),l.i.da(e).appendChild(f),n.C=e);this.wa();return{addedCanvases:a,transferables:k}}Jb(){for(const a of this.Ha)a.remove();this.Ha.length=0}wa(){this.Ia||(this.Ia=!0,this.Ta(this.mb))}Db(){this.Ub(this.mb);
this.Ia=!1;let a=[];for(var b of this.J)if(b instanceof window.Pa){var d=b.U?[...b.K.values()]:null;d&&a.push(...d)}a.sort((h,g)=>{const k=h.C,l=g.C;return k!==l?k-l:h.za-g.za});let e=d=b=0,f=a.length;for(;e<f;++e){const h=a[e];h.C!==b&&(this.Va(b,a.slice(d,e)),b=h.C,d=e)}d<e&&this.Va(b,a.slice(d,e))}Va(a,b){if(!(1>=b.length||a>=this.j.length)){b=b.map(k=>k.ha);var d=new Set(b);a=this.da(a);for(var e=Array.from(a.children).filter(k=>d.has(k)),f=0,h=Math.min(b.length,e.length);f<h&&b[f]===e[f];++f);
for(var g=f;g<h;++g)e[g].remove();for(g=f;g<h;++g)a.appendChild(b[g])}}Fb(){if(this.m)throw Error("not available in worker mode");return this.Da}ea(a,b,d,e){this.Z.postMessage({type:"event",component:a,handler:b,dispatchOpts:e||null,data:d,responseId:null},void 0)}wb(a,b){const d=fa++,e=new Promise((f,h)=>{G.set(d,{resolve:f,reject:h})});this.Z.postMessage({type:"event",component:a,handler:"js-invoke-function",dispatchOpts:null,data:b,responseId:d},void 0);return e}_OnMessageFromRuntime(a){const b=
a.type;if("event"===b)return this.Mb(a);if("result"===b)this.Pb(a);else if("runtime-ready"===b)this.Qb();else if("alert-error"===b)this.ga(),alert(a.message);else if("creating-runtime"===b)this.Za();else throw Error(`unknown message '${b}'`);}Mb(a){const b=a.component,d=a.handler,e=a.data,f=a.responseId;if(a=F.get(b))if(a=a.get(d)){var h=null;try{h=a(e)}catch(g){console.error(`Exception in '${b}' handler '${d}':`,g);null!==f&&this.fa(f,!1,""+g);return}if(null===f)return h;h&&h.then?h.then(g=>this.fa(f,
!0,g)).catch(g=>{console.error(`Rejection from '${b}' handler '${d}':`,g);this.fa(f,!1,""+g)}):this.fa(f,!0,h)}else console.warn(`[DOM] No handler '${d}' for component '${b}'`);else console.warn(`[DOM] No event handlers for component '${b}'`)}fa(a,b,d){let e;d&&d.transferables&&(e=d.transferables);this.Z.postMessage({type:"result",responseId:a,isOk:b,result:d},e)}Pb(a){const b=a.responseId,d=a.isOk;a=a.result;const e=G.get(b);d?e.resolve(a):e.reject(a);G.delete(b)}h(a,b,d){let e=F.get(a);e||(e=new Map,
F.set(a,e));if(e.has(b))throw Error(`[DOM] Component '${a}' already has handler '${b}'`);e.set(b,d)}static Ma(a){if(E.includes(a))throw Error("DOM handler already added");E.push(a)}Wa(){for(const a of this.J)if("runtime"===a.W){this.F=a;return}throw Error("cannot find runtime DOM handler");}Nb(a){this.ea("debugger","message",a)}Qb(){for(const a of this.J)a.Na()}static R(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||K)}static bb(a){K=!!a}Ta(a){this.$.add(a);
this.va()}Ub(a){this.$.delete(a);0===this.$.size&&this.Ua()}va(){-1===this.L&&0<this.$.size&&(this.L=requestAnimationFrame(this.ac))}Ua(){-1!==this.L&&(cancelAnimationFrame(this.L),this.L=-1)}Ob(){this.L=-1;for(const a of this.$)a();this.va()}ua(){this.F.ua()}xb(){this.jb=!0}rb(a){return/^(?:[a-z\-]+:)?\/\//.test(a)||"data:"===a.substr(0,5)||"blob:"===a.substr(0,5)}tb(a){return!this.rb(a)}async I(a){return"cordova"===this.g&&(a.startsWith("file:")||this.Ba&&this.tb(a))?(a.startsWith(this.l)&&(a=a.substr(this.l.length)),
a=await this.na(a),URL.createObjectURL(new Blob([a],{type:"application/javascript"}))):a}async Kb(a){const b=a.filename;switch(a.as){case "text":return await this.pb(b);case "buffer":return await this.na(b);default:throw Error("unsupported type");}}Oa(a){const b=window.cordova.file.applicationDirectory+"www/"+a;return new Promise((d,e)=>{window.resolveLocalFileSystemURL(b,f=>{f.file(d,e)},e)})}async pb(a){a=await this.Oa(a);return await ea(a)}sa(){if(C.length&&!(8<=D)){D++;var a=C.shift();this.Bb(a.filename,
a.lc,a.dc)}}na(a){return new Promise((b,d)=>{C.push({filename:a,lc:e=>{D--;this.sa();b(e)},dc:e=>{D--;this.sa();d(e)}});this.sa()})}async Bb(a,b,d){try{const e=await this.Oa(a),f=await B(e);b(f)}catch(e){d(e)}}$a(a){if("entered-fullscreen"===a)c.bb(!0),N(this.F);else if("exited-fullscreen"===a)c.bb(!1),N(this.F);else if("object"===typeof a){const b=a.type;"directory-handles"!==b&&("wrapper-init-response"===b?(this.Ka(a),this.Ka=null):"extension-message"===b?this.ea("runtime","wrapper-extension-message",
a):console.warn("Unknown wrapper message: ",a))}else console.warn("Unknown wrapper message: ",a)}Rb(a){this.T({type:"extension-message",componentId:a.componentId,messageId:a.messageId,params:a.params||[],asyncId:a.asyncId})}T(a){this.H()?window.chrome.webview.postMessage(JSON.stringify(a)):"macos-wkwebview"===this.g&&window.webkit.messageHandlers.C3Wrapper.postMessage(JSON.stringify(a))}Vb(){window.moveTo=(a,b)=>{this.T({type:"set-window-position",windowX:Math.ceil(a),windowY:Math.ceil(b)})};window.resizeTo=
(a,b)=>{this.T({type:"set-window-size",windowWidth:Math.ceil(a),windowHeight:Math.ceil(b)})}}Ib(){return this.H()?new Promise(a=>{this.Ka=a;this.T({type:"wrapper-init"})}):Promise.resolve()}async Ab(){const a=[];for(const [b,d]of Object.entries(this.v))a.push(this.zb(b,d));await Promise.all(a)}async zb(a,b){if("object"===typeof b)this.v[a]=new Blob([b.str],{type:b.type}),this.ia[a]=b.str;else{let d=await this.Eb(b);d||(d=this.Cb(b));this.v[a]=d}}async Eb(a){try{return await (await fetch(a)).blob()}catch(b){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",
b),null}}Cb(a){a=this.Tb(a);return this.yb(a.data,a.hc)}Tb(a){var b=a.indexOf(",");if(0>b)throw new URIError("expected comma in data: uri");var d=a.substring(b+1);b=a.substring(5,b).split(";");a=b[0]||"";const e=b[2];d="base64"===b[1]||"base64"===e?atob(d):decodeURIComponent(d);return{hc:a,data:d}}yb(a,b){var d=a.length;let e=d>>2,f=new Uint8Array(d),h=new Uint32Array(f.buffer,0,e),g,k;for(k=g=0;g<e;++g)h[g]=a.charCodeAt(k++)|a.charCodeAt(k++)<<8|a.charCodeAt(k++)<<16|a.charCodeAt(k++)<<24;for(d&=
3;d--;)f[k]=a.charCodeAt(k),++k;return new Blob([f],{type:b})}};"use strict";const O=self.ra,la=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),P={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},Q={dispatchUserScriptEvent:!0},R={dispatchRuntimeEvent:!0};function ma(c){return new Promise((a,b)=>{const d=document.createElement("link");d.onload=()=>a(d);d.onerror=e=>b(e);d.rel="stylesheet";d.href=c;document.head.appendChild(d)})}
function na(c){return new Promise((a,b)=>{const d=new Image;d.onload=()=>a(d);d.onerror=e=>b(e);d.src=c})}async function oa(c){c=URL.createObjectURL(c);try{return await na(c)}finally{URL.revokeObjectURL(c)}}function qa(c){do{if(c.parentNode&&c.hasAttribute("contenteditable"))return!0;c=c.parentNode}while(c);return!1}const sa=new Set(["input","textarea","datalist","select"]),ta=new Set(["canvas","body","html"]);
function S(c){c.target.tagName&&ta.has(c.target.tagName.toLowerCase())&&c.preventDefault()}function T(c){c.target.tagName&&c.target.classList.contains("c3htmlwrap")&&c.preventDefault()}function wa(c){(c.metaKey||c.ctrlKey)&&c.preventDefault()}
self.C3_GetSvgImageSize=async function(c){c=await oa(c);if(0<c.width&&0<c.height)return[c.width,c.height];c.style.position="absolute";c.style.left="0px";c.style.top="0px";c.style.visibility="hidden";document.body.appendChild(c);const a=c.getBoundingClientRect();document.body.removeChild(c);return[a.width,a.height]};self.C3_RasterSvgImageBlob=async function(c,a,b,d,e){c=await oa(c);const f=document.createElement("canvas");f.width=d;f.height=e;f.getContext("2d").drawImage(c,0,0,a,b);return f};
let U=!1;document.addEventListener("pause",()=>U=!0);document.addEventListener("resume",()=>U=!1);function L(c){c.addEventListener("selectstart",S);c.addEventListener("gesturehold",S);c.addEventListener("pointerdown",S)}function M(c){c.addEventListener("selectstart",T);c.addEventListener("gesturehold",T);c.addEventListener("touchstart",T)}function ja(c){c.gb=!0;c.Ca=c.i.u();c.Y=c.i.o()}
function N(c){if(!c.s){var a=O.R();a&&"any"!==c.Ja&&xa(c);m(c,"fullscreenchange",{isFullscreen:a,innerWidth:c.u(),innerHeight:c.o()})}}async function ya(c){await Promise.all(c.webfonts.map(async a=>{a=new FontFace(a.name,`url('${a.url}')`);document.fonts.add(a);await a.load()}))}
async function za(c){var a=c.imageBitmapOpts;c=await self.C3_RasterSvgImageBlob(c.blob,c.imageWidth,c.imageHeight,c.surfaceWidth,c.surfaceHeight);a=a?await createImageBitmap(c,a):await createImageBitmap(c);return{imageBitmap:a,transferables:[a]}}async function Aa(c){return await self.C3_GetSvgImageSize(c.blob)}function Ba(c){window.c3_postToMessagePort&&(c.from="runtime",window.c3_postToMessagePort(c))}
function Ca(c){self.setTimeout(()=>{c.fb=!0},1E3);"cordova"===c.i.g?(document.addEventListener("pause",()=>V(c,!0)),document.addEventListener("resume",()=>V(c,!1))):document.addEventListener("visibilitychange",()=>V(c,"hidden"===document.visibilityState));c.ja=!("hidden"!==document.visibilityState&&!U);return{isSuspended:c.ja}}
function Da(c){c.eb||(c.eb=!0,window.addEventListener("deviceorientation",a=>{c.s||m(c,"deviceorientation",{absolute:!!a.absolute,alpha:a.alpha||0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp,webkitCompassHeading:a.webkitCompassHeading,webkitCompassAccuracy:a.webkitCompassAccuracy},P)}),window.addEventListener("deviceorientationabsolute",a=>{c.s||m(c,"deviceorientationabsolute",{absolute:!!a.absolute,alpha:a.alpha||0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp},P)}))}
function Ea(c){c.cb||(c.cb=!0,window.addEventListener("devicemotion",a=>{if(!c.s){var b=null,d=a.acceleration;d&&(b={x:d.x||0,y:d.y||0,z:d.z||0});d=null;var e=a.accelerationIncludingGravity;e&&(d={x:e.x||0,y:e.y||0,z:e.z||0});e=null;var f=a.rotationRate;f&&(e={alpha:f.alpha||0,beta:f.beta||0,gamma:f.gamma||0});m(c,"devicemotion",{acceleration:b,accelerationIncludingGravity:d,rotationRate:e,interval:a.interval,timeStamp:a.timeStamp},P)}}))}async function Fa(c){await ma(c.url)}
function Ga(c,a){c.hb=a.message;-1===c.ya&&(c.ya=setTimeout(()=>{c.ya=-1;const b=document.getElementById("exportToVideoMessage");b&&(b.textContent=c.hb)},250))}function W(c,a){console.warn("[Construct] Fullscreen request failed: ",a);m(c,"fullscreenerror",{isFullscreen:O.R(),innerWidth:c.u(),innerHeight:c.o()})}
function V(c,a){c.ja!==a&&((c.ja=a)?c.i.Ua():c.i.va(),m(c,"visibilitychange",{hidden:a}),!a&&c.i.S()&&(c=()=>{document.scrollingElement.scrollTop=0;document.scrollingElement.scrollLeft=0},setTimeout(c,50),setTimeout(c,100),setTimeout(c,250),setTimeout(c,500)))}
function Ha(c,a,b){"Backspace"===b.key&&S(b);"nwjs"===c.i.g&&"u"===b.key&&(b.ctrlKey||b.metaKey)&&b.preventDefault();if(!c.s){var d=la.get(b.code)||b.code;r(c,a,{code:d,key:b.key,which:b.which,repeat:b.repeat,altKey:b.altKey,ctrlKey:b.ctrlKey,metaKey:b.metaKey,shiftKey:b.shiftKey,timeStamp:b.timeStamp},P)}}
function X(c,a,b,d){c.s||b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents||r(c,a,{button:b.button,buttons:b.buttons,clientX:b.clientX,clientY:b.clientY+c.B,pageX:b.pageX,pageY:b.pageY+c.B,movementX:b.movementX||0,movementY:b.movementY||0,timeStamp:b.timeStamp},d)}
function Y(c,a,b){if(!c.s){var d=0;"mouse"===b.pointerType&&(d=c.Fa);r(c,a,{pointerId:b.pointerId,pointerType:b.pointerType,button:b.button,buttons:b.buttons,lastButtons:d,clientX:b.clientX,clientY:b.clientY+c.B,pageX:b.pageX,pageY:b.pageY+c.B,movementX:b.movementX||0,movementY:b.movementY||0,width:b.width||0,height:b.height||0,pressure:b.pressure||0,tangentialPressure:b.tangentialPressure||0,tiltX:b.tiltX||0,tiltY:b.tiltY||0,twist:b.twist||0,timeStamp:b.timeStamp},P);"mouse"===b.pointerType&&(c.Fa=
b.buttons)}}function Z(c,a,b){document.body.style.position="";document.body.style.overflow="";document.body.style.transform="";c.B=0;if(0<b){var d=document.activeElement;d&&(d=d.getBoundingClientRect(),a=(d.top+d.bottom)/2-(a-b)/2,a>b&&(a=b),0>a&&(a=0),0<a&&(document.body.style.position="absolute",document.body.style.overflow="visible",document.body.style.transform=`translateY(${-a}px)`,c.B=a))}}
function Ia(c,a,b,d){const e=c.u(),f=c.o();c.N=-1;e!=a||f!=b?m(c,"window-resize",{innerWidth:e,innerHeight:f,devicePixelRatio:window.devicePixelRatio,isFullscreen:O.R(),cssDisplayMode:c.i.qa()}):10>d&&Ja(c,e,f,d+1)}function Ja(c,a,b,d){-1!==c.N&&clearTimeout(c.N);c.N=setTimeout(()=>Ia(c,a,b,d),48)}
function xa(c){c=c.Ja;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(c).catch(a=>console.warn("[Construct] Failed to lock orientation: ",a));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(c):screen.webkitLockOrientation?a=screen.webkitLockOrientation(c):screen.mozLockOrientation?a=screen.mozLockOrientation(c):screen.msLockOrientation&&(a=screen.msLockOrientation(c));a||console.warn("[Construct] Failed to lock orientation")}catch(a){console.warn("[Construct] Failed to lock orientation: ",
a)}}function Ka(c){return!c||c===document||c===window||c===document.body||"canvas"===c.tagName.toLowerCase()}
O.Ma(class extends self.pa{constructor(c){super(c,"runtime");this.gb=!1;this.N=-1;this.Ja="any";this.ja=this.cb=this.eb=!1;this.ka=document.createElement("div");this.ka.className="c3-screen-reader-text";this.ka.setAttribute("aria-live","polite");document.body.appendChild(this.ka);this.D=null;this.s=!1;this.hb="";this.ya=-1;this.fb=!1;this.Ca=c.u();this.Y=c.o();this.B=this.aa=0;c.h("runtime","invoke-download",b=>{const d=b.url;b=b.filename;const e=document.createElement("a"),f=document.body;e.textContent=
b;e.href=d;e.download=b;f.appendChild(e);e.click();f.removeChild(e)});c.h("runtime","load-webfonts",b=>ya(b));c.h("runtime","raster-svg-image",b=>za(b));c.h("runtime","get-svg-image-size",b=>Aa(b));c.h("runtime","set-target-orientation",b=>{this.Ja=b.targetOrientation});c.h("runtime","register-sw",()=>{window.C3_RegisterSW&&window.C3_RegisterSW()});c.h("runtime","post-to-debugger",b=>Ba(b));c.h("runtime","go-to-script",b=>Ba(b));c.h("runtime","before-start-ticking",()=>Ca(this));c.h("runtime","debug-highlight",
b=>{if(b.show){this.D||(this.D=document.createElement("div"),this.D.id="inspectOutline",document.body.appendChild(this.D));var d=this.D;d.style.display="";d.style.left=b.left-1+"px";d.style.top=b.top-1+"px";d.style.width=b.width+2+"px";d.style.height=b.height+2+"px";d.textContent=b.name}else this.D&&(this.D.style.display="none")});c.h("runtime","enable-device-orientation",()=>Da(this));c.h("runtime","enable-device-motion",()=>Ea(this));c.h("runtime","add-stylesheet",b=>Fa(b));c.h("runtime","script-create-worker",
b=>{const d=b.port2;(new Worker(b.url,b.opts)).postMessage({type:"construct-worker-init",port2:d},[d])});c.h("runtime","alert",b=>{alert(b.message)});c.h("runtime","screen-reader-text",b=>{var d=b.type;"create"===d?(d=document.createElement("p"),d.id="c3-sr-"+b.id,d.textContent=b.text,this.ka.appendChild(d)):"update"===d?(d=document.getElementById("c3-sr-"+b.id))?d.textContent=b.text:console.warn(`[Construct] Missing screen reader text with id ${b.id}`):"release"===d?(d=document.getElementById("c3-sr-"+
b.id))?d.remove():console.warn(`[Construct] Missing screen reader text with id ${b.id}`):console.warn(`[Construct] Unknown screen reader text update '${d}'`)});c.h("runtime","hide-cordova-splash",()=>{navigator.splashscreen&&navigator.splashscreen.hide&&navigator.splashscreen.hide()});c.h("runtime","set-exporting-to-video",b=>{this.s=!0;const d=document.createElement("h1");d.id="exportToVideoMessage";d.textContent=b.message;document.body.prepend(d);document.body.classList.add("exportingToVideo");
this.i.qb().style.display="";this.i.xb()});c.h("runtime","export-to-video-progress",b=>Ga(this,b));c.h("runtime","exported-to-video",b=>{window.cc({type:"exported-video",arrayBuffer:b.arrayBuffer,contentType:b.contentType,time:b.time})});c.h("runtime","exported-to-image-sequence",b=>{window.cc({type:"exported-image-sequence",blobArr:b.blobArr,time:b.time,gif:b.gif})});const a=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",b=>{const d=b.target;a.has(d.tagName.toLowerCase())||
qa(d)||b.preventDefault()});window.addEventListener("selectstart",S);window.addEventListener("gesturehold",S);window.addEventListener("touchstart",S,{passive:!1});window.addEventListener("pointerdown",S,{passive:!1});this.Fa=0;window.addEventListener("mousedown",b=>{1===b.button&&b.preventDefault()});window.addEventListener("mousewheel",wa,{passive:!1});window.addEventListener("wheel",wa,{passive:!1});window.addEventListener("resize",()=>{a:{if(!this.s&&this.gb){var b=this.u();var d=this.o();if(this.i.Ra()){if(this.fb){if(this.Ca===
b&&d<this.Y){this.aa=this.Y-d;Z(this,this.Y,this.aa);b=void 0;break a}0<this.aa&&(this.aa=0,Z(this,d,this.aa))}this.Ca=b;this.Y=d}m(this,"window-resize",{innerWidth:b,innerHeight:d,devicePixelRatio:window.devicePixelRatio,isFullscreen:O.R(),cssDisplayMode:this.i.qa()});this.i.S()&&(-1!==this.N&&clearTimeout(this.N),Ia(this,b,d,0))}b=void 0}return b});window.addEventListener("fullscreenchange",()=>N(this));window.addEventListener("webkitfullscreenchange",()=>N(this));window.addEventListener("mozfullscreenchange",
()=>N(this));window.addEventListener("fullscreenerror",b=>W(this,b));window.addEventListener("webkitfullscreenerror",b=>W(this,b));window.addEventListener("mozfullscreenerror",b=>W(this,b));if(c.S()){let b=Infinity;window.visualViewport.addEventListener("resize",()=>{const d=window.visualViewport.height;d>b&&(document.scrollingElement.scrollTop=0,document.scrollingElement.scrollLeft=0);b=d});document.documentElement.setAttribute("ioswebview","")}this.Ea=new Set;this.$b=new WeakSet;this.Xb=!1}Na(){window.addEventListener("focus",
()=>{m(this,"window-focus",null,R)});window.addEventListener("blur",()=>{try{var a=window.parent&&window.parent.document.hasFocus()}catch(b){a=!1}m(this,"window-blur",{parentHasFocus:a},R);this.Fa=0});window.addEventListener("focusin",a=>{a=a.target;(sa.has(a.tagName.toLowerCase())||qa(a))&&m(this,"keyboard-blur",null,R)});window.addEventListener("keydown",a=>Ha(this,"keydown",a));window.addEventListener("keyup",a=>Ha(this,"keyup",a));window.addEventListener("mousedown",a=>X(this,"mousedown",a,Q));
window.addEventListener("mousemove",a=>X(this,"mousemove",a,Q));window.addEventListener("mouseup",a=>X(this,"mouseup",a,Q));window.addEventListener("dblclick",a=>X(this,"dblclick",a,P));window.addEventListener("wheel",a=>{this.s||m(this,"wheel",{clientX:a.clientX,clientY:a.clientY+this.B,pageX:a.pageX,pageY:a.pageY+this.B,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},P)});window.addEventListener("pointerdown",a=>{window!==window.top&&window.focus();Ka(a.target)&&
document.activeElement&&!Ka(document.activeElement)&&document.activeElement.blur();Y(this,"pointerdown",a)});this.i.m&&"undefined"!==typeof window.onpointerrawupdate&&self===self.top?window.addEventListener("pointerrawupdate",a=>{Y(this,"pointermove",a)}):window.addEventListener("pointermove",a=>Y(this,"pointermove",a));window.addEventListener("pointerup",a=>Y(this,"pointerup",a));window.addEventListener("pointercancel",a=>Y(this,"pointercancel",a));const c=()=>this.ua();window.addEventListener("pointerup",
c,!0);window.addEventListener("touchend",c,!0);window.addEventListener("click",c,!0);window.addEventListener("keydown",c,!0);window.addEventListener("gamepadconnected",c,!0);this.i.sb()&&!this.i.Ra()&&navigator.virtualKeyboard&&(navigator.virtualKeyboard.overlaysContent=!0,navigator.virtualKeyboard.addEventListener("geometrychange",()=>{Z(this,this.o(),navigator.virtualKeyboard.boundingRect.height)}));this.i.S()&&(document.scrollingElement.scrollTop=0,document.scrollingElement.scrollLeft=0)}u(){return this.i.u()}o(){return this.i.o()}ua(){var c=
[...this.Ea];this.Ea.clear();if(!this.Xb)for(const a of c)(c=a.play())&&c.catch(()=>{this.$b.has(a)||this.Ea.add(a)})}});"use strict";async function ha(c){if(c.Wb)throw Error("already initialised");c.Wb=!0;var a=c.A.ta(("playable-ad"===c.A.g?c.A.M:"")+"dispatchworker.js");c.xa=await c.A.oa(a,c.V,{name:"DispatchWorker"});a=new MessageChannel;c.Aa=a.port1;c.xa.postMessage({type:"_init","in-port":a.port2},[a.port2]);c.Ga=await ka(c)}function ia(c){return[c.Aa,c.Ga]}
async function ka(c){const a=c.lb.length;var b=c.A.ta(("playable-ad"===c.A.g?c.A.M:"")+"jobworker.js");b=await c.A.oa(b,c.V,{name:"JobWorker"+a});const d=new MessageChannel,e=new MessageChannel;c.xa.postMessage({type:"_addJobWorker",port:d.port1},[d.port1]);b.postMessage({type:"init",number:a,"dispatch-port":d.port2,"output-port":e.port2},[d.port2,e.port2]);c.lb.push(b);return e.port1}
self.vb=class{constructor(c){this.A=c;this.V=c.l;this.V="preview"===c.g?this.V+"workers/":this.V+c.M;this.Zb=Math.min(navigator.hardwareConcurrency||2,16);this.xa=null;this.lb=[];this.Ga=this.Aa=null}};"use strict";window.C3_Is_Supported&&(window.c3_runtimeInterface=new self.ra({mc:!0,nc:"workermain.js",P:["scripts/c3runtime.js"],la:[],La:"",jc:"scripts/",ma:[],ob:"html5"}));"use strict";function La(c){return new Promise((a,b)=>{c.getInsetTop(a,b)})}
function Ma(c){return new Promise((a,b)=>{c.getInsetRight(a,b)})}function Na(c){return new Promise((a,b)=>{c.getInsetBottom(a,b)})}function Oa(c){return new Promise((a,b)=>{c.getInsetLeft(a,b)})}async function Qa(){const c=await Ra();return{screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,safeAreaInset:c,supportsWakeLock:!!navigator.wakeLock,isNwjs:"undefined"!==typeof nw}}
async function Sa(c){if(!c.G)try{c.G=await navigator.wakeLock.request("screen"),c.G.addEventListener("release",()=>{console.log("[Construct] Screen wake lock released");c.G=null;m(c,"wake-lock-released")}),console.log("[Construct] Screen wake lock acquired"),m(c,"wake-lock-acquired")}catch(a){console.warn("[Construct] Failed to acquire screen wake lock: ",a),m(c,"wake-lock-error")}}
async function Ta(c){const a=await Ra();m(c,"window-resize",{windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,safeAreaInset:a})}
async function Ra(){var c=self.AndroidNotch;if(c)try{return await Promise.all([La(c),Ma(c),Na(c),Oa(c)])}catch(b){return console.error("[Construct] Failed to get Android safe area inset: ",b),[0,0,0,0]}else{var a=document.body;c=a.style;c.setProperty("--temp-sai-top","env(safe-area-inset-top)");c.setProperty("--temp-sai-right","env(safe-area-inset-right)");c.setProperty("--temp-sai-bottom","env(safe-area-inset-bottom)");c.setProperty("--temp-sai-left","env(safe-area-inset-left)");a=getComputedStyle(a);
a=[a.getPropertyValue("--temp-sai-top"),a.getPropertyValue("--temp-sai-right"),a.getPropertyValue("--temp-sai-bottom"),a.getPropertyValue("--temp-sai-left")].map(b=>{b=parseInt(b,10);return isFinite(b)?b:0});c.removeProperty("--temp-sai-top");c.removeProperty("--temp-sai-right");c.removeProperty("--temp-sai-bottom");c.removeProperty("--temp-sai-left");return a}}
self.ra.Ma(class extends self.pa{constructor(c){super(c,"platform-info");u(this,[["get-initial-state",()=>Qa()],["request-wake-lock",()=>Sa(this)],["release-wake-lock",()=>{this.G&&(this.G.release(),this.G=null)}]]);window.addEventListener("resize",()=>Ta(this));this.G=null}});
