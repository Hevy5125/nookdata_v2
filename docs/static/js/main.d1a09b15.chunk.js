(this.webpackJsonpnookdata_js=this.webpackJsonpnookdata_js||[]).push([[0],{122:function(e,t,n){},123:function(e,t,n){"use strict";n.r(t);var r=n(15),a=n(164),i=n(165),c=n(0),o=n.n(c),s=n(10),l=n.n(s),d=n(145),u=n(8),b=n(59),j=n(156),f=n(157),p=n(158),h=n(159),m=n(160),O=n(91),g=n.n(O),x=n(92),v=n.n(x),y=n(90),w=n.n(y),k=n(22),S=n(147),T=n(149),C=n(150),A=n(151),M=n(152),N=n(168),L=n(2),D={branch:"master",tags:[],commit:{shortHash:"91943ee",hash:"91943ee29ebfceb748c489248591758633ccaa0b",date:"2021-05-12T16:29:11+01:00",message:"Actually fix nav drawer opening"}};function W(e){var t=Object(d.a)("core").t,n=Object(k.a)();return Object(L.jsxs)(S.a,{open:e.open,onClose:function(){return e.setOpen(!1)},children:[Object(L.jsx)(T.a,{children:t("core:info.title")}),Object(L.jsx)(C.a,{children:Object(L.jsxs)(N.a,{i18nKey:"core:info.description",t:t,children:["You are currently viewing NookData revision",Object(L.jsx)("span",{style:{color:n.palette.primary.main},children:{gitRevision:D.commit.shortHash}})]})}),Object(L.jsx)(A.a,{children:Object(L.jsx)(M.a,{onClick:function(){return e.setOpen(!1)},children:t("core:button.dismiss")})})]})}var P=n(153),_=n(154),I=n(155);function B(e){var t=Object(d.a)("core").t;return Object(L.jsxs)(S.a,{"aria-labelledby":"lang-dialogue-title",open:e.open,PaperProps:{style:{width:250}},children:[Object(L.jsx)(T.a,{style:{textAlign:"center"},id:"lang-dialogue-title",children:t("core:lang.choose")}),Object(L.jsxs)(P.a,{children:[Object(L.jsx)(_.a,{style:{textAlign:"center"},button:!0,onClick:function(){return e.setLang("en")},children:Object(L.jsx)(I.a,{primary:t("core:lang.en")})}),Object(L.jsx)(_.a,{style:{textAlign:"center"},button:!0,onClick:function(){return e.setLang("fr")},children:Object(L.jsx)(I.a,{primary:t("core:lang.fr")})})]})]})}var H=function(e){var t=Object(d.a)("core"),n=(t.t,t.i18n),a=o.a.useState(!1),i=Object(r.a)(a,2),c=i[0],s=i[1],l=o.a.useState(!1),u=Object(r.a)(l,2),b=u[0],O=u[1];return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(j.a,{position:"fixed",children:Object(L.jsxs)(f.a,{children:[Object(L.jsx)(p.a,{edge:"start",color:"inherit","aria-label":"menu",style:{marginRight:16},onClick:function(){return e.setDrawerOpen(!e.drawerOpen)},children:Object(L.jsx)(w.a,{})}),Object(L.jsx)("div",{style:{flexGrow:1},children:e.title}),Object(L.jsx)(p.a,{color:"inherit",onClick:function(){return O(!0)},children:Object(L.jsx)(h.a,{})}),Object(L.jsx)(p.a,{color:"inherit",onClick:function(){return s(!0)},children:Object(L.jsx)(m.a,{})}),"light"==e.theme?Object(L.jsx)(p.a,{color:"inherit",onClick:function(){window.localStorage.theme="dark",e.setTheme("dark")},children:Object(L.jsx)(g.a,{})}):Object(L.jsx)(p.a,{color:"inherit",onClick:function(){window.localStorage.theme="light",e.setTheme("light")},children:Object(L.jsx)(v.a,{})})]})}),Object(L.jsx)(f.a,{}),Object(L.jsx)(B,{open:c,setLang:function(e){n.changeLanguage(e),s(!1)}}),Object(L.jsx)(W,{open:b,setOpen:O})]})},E=n(162),U=n(46),F=n(161),R={"/critterpedia":{title:"core:pages.critterpedia",icon:Object(L.jsx)(F.a,{})}},z=2;function G(e){var t=Object(k.a)(),n=Object(E.a)(t.breakpoints.up("lg")),a=o.a.useState(!1),i=Object(r.a)(a,2),c=i[0],s=i[1];z&&(n&&s(!0),z--);var l=Object(d.a)("core").t;return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(H,{setTheme:e.setTheme,setDrawerOpen:s,theme:e.theme,drawerOpen:c,title:Object(L.jsxs)(U.a,{variant:"h6",children:[Object(L.jsx)("div",{style:{color:t.palette.winter.main,display:"inline"},children:l("title.a")}),Object(L.jsx)("div",{style:{color:t.palette.summer.main,display:"inline"},children:l("title.b")})]})}),Object(L.jsx)(X,{open:c,setOpen:s,children:Object(L.jsx)(P.a,{children:Object.entries(R).map((function(e){var t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(L.jsx)(V,{to:n,icon:a.icon,primary:l(a.title)})}))})}),Object(L.jsx)(J,{active:c,children:e.children})]})}function J(e){var t=Object(k.a)(),n=Object(E.a)(t.breakpoints.up("sm"));return Object(L.jsx)("div",{style:{paddingLeft:240*+e.active*+n,transition:"padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms"},children:e.children})}var Y=n(65),K=n(163);function V(e){var t=e.icon,n=e.primary,r=e.to,a=e.exact,i=o.a.useMemo((function(){return o.a.forwardRef((function(e,t){return Object(L.jsx)(b.b,Object(Y.a)(Object(Y.a)({to:r,ref:t},e),{},{activeClassName:"Mui-selected",exact:a}))}))}),[r]);return Object(L.jsxs)(_.a,{button:!0,component:i,children:[t?Object(L.jsx)(K.a,{children:t}):null,Object(L.jsx)(I.a,{primary:n})]})}function $(){return Object(L.jsxs)("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"loader",children:[Object(L.jsx)("source",{src:"assets/shared/loading.gif.webm",type:"video/webm"}),Object(L.jsx)("source",{src:"assets/shared/loading.gif.mp4",type:"video/mp4"})]})}var q=n(167),Q=n(169);var X=function(e){var t=Object(k.a)(),n=void 0!==window?function(){return window.document.body}:void 0;return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(q.a,{smUp:!0,children:Object(L.jsx)(Q.a,{variant:"temporary",container:n,anchor:"rtl"===t.direction?"right":"left",open:e.open,onClose:function(){return e.setOpen(!1)},children:e.children})}),Object(L.jsx)(q.a,{xsDown:!0,children:Object(L.jsxs)(Q.a,{variant:"persistent",anchor:"rtl"===t.direction?"right":"left",open:e.open,children:[Object(L.jsx)(f.a,{}),e.children]})})]})};function Z(e){var t=Object(d.a)(["service","core"]).t;return Object(L.jsxs)(S.a,{open:e.open,onClose:function(){return e.setOpen(!1)},children:[Object(L.jsx)(T.a,{children:t("service:available_update.title")}),Object(L.jsx)(C.a,{children:t("service:available_update.content")}),Object(L.jsx)(A.a,{children:Object(L.jsx)(M.a,{variant:"text",onClick:function(){return e.setOpen(!1)},children:t("core:button.dismiss")})})]})}function ee(e){var t=Object(d.a)(["service","core"]).t;return Object(L.jsxs)(S.a,{open:e.open,onClose:function(){return e.setOpen(!1)},children:[Object(L.jsx)(T.a,{children:t("service:available_offline.title")}),Object(L.jsx)(C.a,{children:t("service:available_offline.content")}),Object(L.jsx)(A.a,{children:Object(L.jsx)(M.a,{variant:"text",onClick:function(){return e.setOpen(!1)},children:t("core:button.dismiss")})})]})}var te=n(73),ne=n(97),re=n(93),ae=n(94),ie=n(33);ne.a.use(ae.a).use(re.a).use(ie.e).init({backend:{loadPath:"/nookdata_v2/assets/i18n/{{lng}}/{{ns}}.json"},fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1},supportedLngs:["en","fr"],ns:"core",defaultNS:"core"});n(122);var ce=n(39),oe=Object(c.lazy)((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,217))})),se=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function le(e){if("serviceWorker"in navigator){if(new URL("/nookdata_v2",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/nookdata_v2","/service-worker.js");se?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):de(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):de(t,e)}))}}function de(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ue=n(96),be={MuiTextField:{variant:"filled"},MuiSelect:{variant:"filled"},MuiFormControl:{variant:"filled"},MuiDialogTitle:{style:{textAlign:"center"}}},je=(n(76),Object(ue.a)({palette:{type:"dark",opacity:.3,elevations:{0:{main:"#1e1e1e"},1:{main:"#292929"},2:{main:"#2e2e2e"},3:{main:"#303030"},4:{main:"#323232"},6:{main:"#373737"},8:{main:"#393939"},12:{main:"#3e3e3e"},16:{main:"#404040"},24:{main:"#424242"}},modelled:{main:"gold",transparent:"rgba(255, 215, 0, 0.3)"},winter:{main:"#3c84c6",transparent:"rgba(60, 132, 198, 0.3)",contrastText:"rgba(0,0,0,87%)"},spring:{main:"#38761c",transparent:"rgba(56, 118, 28, 0.3)",contrastText:"rgba(0,0,0,87%)"},summer:{main:"#e69038",transparent:"rgba(230, 144, 56, 0.3)",contrastText:"rgba(0,0,0,87%)"},autumn:{main:"#b45f04",transparent:"rgba(180, 95, 4, 0.3)",contrastText:"rgba(0,0,0,87%)"},primary:{main:"#bb86fc",dark:"#3700b3",contrastText:"rgba(0,0,0,87%)",transparent:"rgba(187, 134, 252, 0.3)"},secondary:{main:"#03dac6",dark:"#03dac6",contrastText:"rgba(0,0,0,87%)"},error:{main:"#cf6679",transparent:"rgba(207, 102, 121, 0.3)"},background:{paper:"#1e1e1e",default:"#121212"},text:{primary:"rgba(255,255,255,87%)",secondary:"rgba(255,255,255,60%)",hint:"rgba(255,255,255,60%)",disabled:"rgba(255,255,255,38%)"}},zIndex:{appBar:1250},props:be}));je.overrides={MuiAppBar:{colorPrimary:{backgroundColor:je.palette.background.paper,color:je.palette.primary.main},colorSecondary:{backgroundColor:je.palette.background.paper,color:je.palette.secondary.main},colorDefault:{backgroundColor:je.palette.background.paper,color:je.palette.text.primary}},MuiDrawer:{paper:{width:240}},MuiCard:{root:{borderWidth:1,borderColor:"rgba(255, 255, 255, 8%)",borderStyle:"solid"}},MuiCardHeader:{root:{paddingBottom:0,textAlign:"center"}},MuiListItemIcon:{root:{color:je.palette.text.secondary}}};var fe=je,pe=Object(ue.a)({palette:{type:"light",opacity:.6,elevations:{0:{main:"#ffffff"},1:{main:"#ffffff"},2:{main:"#ffffff"},3:{main:"#ffffff"},4:{main:"#ffffff"},6:{main:"#ffffff"},8:{main:"#ffffff"},12:{main:"#ffffff"},16:{main:"#ffffff"},24:{main:"#ffffff"}},modelled:{main:"#fbc02d",transparent:"rgba(251, 192, 45, 0.5)"},winter:{main:"#3c84c6",transparent:"rgba(60, 132, 198, 0.6)",contrastText:"rgba(0,0,0,87%)"},spring:{main:"#38761c",transparent:"rgba(56, 118, 28, 0.6)",contrastText:"rgba(0,0,0,87%)"},summer:{main:"#e69038",transparent:"rgba(230, 144, 56, 0.6)",contrastText:"rgba(0,0,0,87%)"},autumn:{main:"#b45f04",transparent:"rgba(180, 95, 4, 0.6)",contrastText:"rgba(0,0,0,87%)"},primary:{main:"#6200ee",dark:"#3700b3",contrastText:"rgba(255,255,255,87%)",transparent:"rgba(98, 0, 238, 0.5)"},secondary:{main:"#03dac6",dark:"#018786",contrastText:"rgba(0,0,0,87%)"},error:{main:"#b00020",transparent:"rgba(176, 0, 32, 0.5)"},background:{paper:"#ffffff",default:"#eeeeee"},text:{primary:"rgba(0,0,0,87%)",secondary:"rgba(0,0,0,60%)",hint:"rgba(0,0,0,60%)",disabled:"rgba(0,0,0,38%)"}},zIndex:{appBar:1250},props:be});pe.overrides={MuiDrawer:{paper:{width:240}},MuiCard:{root:{borderWidth:1,borderColor:"transparent",borderStyle:"solid"}},MuiCardHeader:{root:{paddingBottom:0,textAlign:"center"}}};var he={light:pe,dark:fe};var me=void 0,Oe=new Date;function ge(){Object(d.a)("core").t;var e=window.localStorage.theme||"dark",t=o.a.useState(e),n=Object(r.a)(t,2),s=n[0],l=n[1];var b=window.localStorage.playerName||"PLAYER",j=o.a.useState(b),f=Object(r.a)(j,2),p=f[0];f[1];var h=window.localStorage.islandName||"ISLAND",m=o.a.useState(h),O=Object(r.a)(m,2),g=O[0];O[1];var x=window.localStorage.hemisphere||"north",v=o.a.useState(x),y=Object(r.a)(v,2),w=y[0];y[1];var k=Object(ce.e)(window.localStorage.timeOffset,0),S=o.a.useState(k),T=Object(r.a)(S,2),C=T[0];T[1];var A=Object(ce.a)(window.localStorage.useSystemTime,!0),M=o.a.useState(A),N=Object(r.a)(M,2),D=N[0];N[1];var W=Object(ce.a)(window.localStorage.useTwelveHourTime,!1),P=o.a.useState(W),_=Object(r.a)(P,2),I=_[0];_[1];var B={theme:s,hemisphere:w,islandName:g,playerName:p,timeOffset:C,useSystemTime:D,useTwelveHourTime:I},H=o.a.useState(Oe),E=Object(r.a)(H,2),U=E[0],F=E[1];me&&window.clearInterval(me),me=window.setInterval((function(){return F(new Date)}),500);var R=o.a.useMemo((function(){return function(e){return he[e]}(s)}),[s]),z=o.a.useState(!1),J=Object(r.a)(z,2),Y=J[0],K=J[1],V=o.a.useState(!1),q=Object(r.a)(V,2),Q=q[0],X=q[1];return le({onUpdate:function(e){return K(!0)},onSuccess:function(e){return X(!0)}}),Object(L.jsx)(a.a,{theme:R,children:Object(L.jsxs)(te.a,{time:U,settings:B,children:[Object(L.jsx)(i.a,{}),Object(L.jsx)(G,{theme:s,setTheme:function(e){document.body.classList.add("no-transition"),setTimeout((function(){return l(e)}),10),setTimeout((function(){return document.body.classList.remove("no-transition")}),20)},children:Object(L.jsx)(c.Suspense,{fallback:Object(L.jsx)($,{}),children:Object(L.jsxs)(u.d,{children:[Object(L.jsx)(u.b,{path:"/critterpedia/:type/:index",render:function(e){var t=e.match,n=t.params.type,r=Object(ce.e)(t.params.index,-1);return"bug"!==n&&"fish"!==n||r<0||r>79?Object(L.jsx)(u.a,{to:"/critterpedia"}):Object(L.jsx)(oe,{load:{type:n,index:r}})}}),Object(L.jsx)(u.b,{path:"/critterpedia",exact:!0,children:Object(L.jsx)(oe,{})}),Object(L.jsx)(u.b,{path:"/critterpedia",children:Object(L.jsx)(u.a,{to:"/critterpedia"})}),Object(L.jsx)(u.b,{path:"/loading",children:Object(L.jsx)($,{})})]})})}),Object(L.jsx)(ee,{open:Q,setOpen:X}),Object(L.jsx)(Z,{open:Y,setOpen:K})]})})}l.a.render(Object(L.jsx)(c.Suspense,{fallback:Object(L.jsx)($,{}),children:Object(L.jsx)(b.a,{basename:ce.d,children:Object(L.jsx)(ge,{})})}),document.getElementById("root"))},39:function(e,t,n){"use strict";var r;function a(e){var t,n=null!==(t=r)&&void 0!==t?t:((r=document.createElement("div")).style.position="absolute",r.style.top="-9999px",r.style.left="-9999px",document.body.appendChild(r),r);return n.innerText=e,n.clientWidth}n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return s}));var i="/nookdata_v2";function c(e,t){var n=e?+e:t;return isNaN(n)?t:n}function o(e,t){switch(e){case"true":return!0;case"false":return!1;default:return t}}function s(e){return Array.from(Array(e).keys())}},73:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r),i={time:new Date,settings:{theme:"dark",hemisphere:"north",islandName:"Gloverboia",playerName:"Starwort",timeOffset:0,useSystemTime:!0,useTwelveHourTime:!0}},c=a.a.createContext(i);function o(e){var t=e.time,n=e.settings,r=e.children,i={time:t,settings:n};return a.a.createElement(c.Provider,{value:i},r)}function s(){return Object(r.useContext)(c)}},76:function(e,t,n){"use strict";String.prototype.capitalise=function(){return this.charAt(0).toUpperCase()+this.slice(1)},Array.prototype.rotated=function(e){return e%=this.length,this.slice(e,this.length).concat(this.slice(0,e))},Array.prototype.rotate=function(e){for(e%=this.length;this.length&&e<0;)e+=this.length;return this.push.apply(this,this.splice(0,e)),this}}},[[123,1,2]]]);
//# sourceMappingURL=main.d1a09b15.chunk.js.map