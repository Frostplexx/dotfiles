"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[42],{38125:(e,t,n)=>{n.d(t,{O:()=>p});var i=n(81226),r=n(54925),l=n(32303),o=n(39418),a=n(81260),s=n(51050),d=n(50358),c=n(86070),u=(0,i.A)((0,i.A)((0,i.A)({},o.E.MEDIUM,"titleMedium"),o.E.LARGE,"titleMedium"),o.E.XLARGE,"headlineMedium"),v=(0,i.A)((0,i.A)({},o.E.LARGE,"bodyMedium"),o.E.XLARGE,"bodyMediumBold"),b=(0,i.A)((0,i.A)({},o.E.LARGE,"bodySmall"),o.E.XLARGE,"bodySmall"),p=function(e){var t=e.title,n=e.subtitle,i=e.body,o=e.footnote,p=e.buttonText,h=e.callToActionClicked,m=(0,a.y)(),x=m&&u[m]||"titleSmall",f=m&&v[m]||"bodySmall",E=m&&b[m]||"marginal";return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.E,{as:"h1",variant:x,semanticColor:"textBase",className:d.A.title,children:t}),(0,c.jsx)(r.E,{as:"h2",variant:f,semanticColor:"textSubdued",className:d.A.subtitle,children:n}),i,h&&(0,c.jsx)(l.$,{className:d.A.button,colorSet:"invertedLight",onClick:h,"data-testid":s.OL,children:p}),o&&(0,c.jsx)(r.E,{as:"p",variant:E,semanticColor:"textSubdued",className:d.A.note,children:o})]})}},4355:(e,t,n)=>{n.d(t,{d:()=>A});var i=n(81226),r=(n(83892),n(97500)),l=n.n(r),o=n(59081),a=n(75633),s=n(85107),d=n(39418),c=n(81260),u=n(38125),v=n(51050);const b="gJmoZouW_m4rUBRFHmu7",p="r4j9hiYJ8q0SQpEsgvSh";var h=n(86070);const m=function(e){return(0,h.jsx)("div",{className:b,children:(0,h.jsx)("div",{className:p,children:(0,h.jsx)("svg",{width:e.iconSize,height:e.iconSize,fill:"currentColor",viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg",children:(0,h.jsx)("path",{d:"M33 31.998v-23h-2v23H8v2h23v23h2v-23h23v-2z"})})})})};var x=n(50358),f={name:"",username:"",image_url:null,hash:""},E=(0,i.A)((0,i.A)((0,i.A)({},d.E.MEDIUM,164),d.E.LARGE,164),d.E.XLARGE,270),g=function(e,t){return(0,h.jsx)(a.e,{label:o.Ru.get("web-player.blend.invite.button-title"),images:[],width:e,userIconSize:"xxlarge",customPlaceholder:(0,h.jsx)(m,{iconSize:t}),piled:!0})},A=function(e){var t,n,i,r,d=e.invitation,b=e.callToActionClicked,p=e.breakpointEltRef,m=!(null===(t=d.members)||void 0===t||!t.length),A=m&&(null===(n=d.members)||void 0===n?void 0:n[0])||d.recipient||f,j=m&&d.recipient||null,y=(0,c.y)(),w=y&&E[y]||128,O=Math.round(.475*w);return(0,h.jsxs)("div",{className:l()(x.A.container,x.A.TwoUsers),"data-testid":v.xg,ref:p,children:[(0,h.jsx)(s.Q,{children:o.Ru.get("blend.invite.page-title")}),(0,h.jsxs)("div",{className:x.A.facepile,children:[(0,h.jsx)(a.e,{label:A.name,images:[{url:null!==(i=A.image_url)&&void 0!==i?i:"",width:w,height:w}],width:w,userIconSize:"xxlarge"}),j?(0,h.jsx)(a.e,{label:j.name,images:[{url:null!==(r=j.image_url)&&void 0!==r?r:"",width:w,height:w}],width:w,userIconSize:"xxlarge",piled:!0}):g(w,O)]}),(0,h.jsx)(u.O,{title:d.title,subtitle:d.subtitle,footnote:d.footnote,buttonText:d.button_text,callToActionClicked:b})]})}},40556:(e,t,n)=>{n.d(t,{A:()=>i});n(98168);const i=function(){var e=window.location.href;return window.location.href="".concat("https://accounts.spotify.com/login","?continue=").concat(encodeURIComponent(e)),null}},51050:(e,t,n)=>{n.d(t,{OL:()=>a,VE:()=>i,ev:()=>l,rg:()=>o,xg:()=>r});var i="blend-deleted-container",r="blend-two-user-container",l="blend-multi-user-container",o="blend-full-container",a="blend-cta-button"},59192:(e,t,n)=>{n.d(t,{B6:()=>a,OE:()=>o,YW:()=>l,pd:()=>r});var i=n(26697),r=function(e){return e.PENDING_INVITATION="PENDING_INVITATION",e.READY_TO_JOIN_EMPTY_BLEND="READY_TO_JOIN_EMPTY_BLEND",e.READY_TO_JOIN_ALREADY_CREATED_BLEND="READY_TO_JOIN_ALREADY_CREATED_BLEND",e.MAX_MEMBERS="MAX_MEMBERS",e.ALREADY_JOINED="ALREADY_JOINED",e.DELETED="DELETED",e}({}),l=function(e,t){return e.build().withHost(i.t2).withPath("/v3/view-invitation/".concat(encodeURIComponent(t))).withEndpointIdentifier("v3/view-invitation/{invitationId}").withLocale(e.locale).send()},o=function(e,t){return e.build().withHost(i.t2).withMethod("PUT").withPath("/v2/join/".concat(encodeURIComponent(t))).withEndpointIdentifier("join/{invitationId}").send()},a=function(e){return e.build().withHost(i.t2).withMethod("POST").withPath("/v1/generate").withEndpointIdentifier("v1/generate").send()}},25078:(e,t,n)=>{n.d(t,{G:()=>o});var i=n(81226),r=n(39418),l=n(9593),o=function(){return(0,l.x)((0,i.A)((0,i.A)((0,i.A)((0,i.A)({},r.E.SMALL,536),r.E.MEDIUM,792),r.E.LARGE,1048),r.E.XLARGE,1688))}},31438:(e,t,n)=>{n.d(t,{y:()=>p});var i=n(95514),r=n(16247),l=n.n(r),o=(n(38858),n(62172),n(30758)),a=n(93240),s=n(45976),d=n(59081),c=n(64692),u=n(51736),v=n(13147),b=n(59192);function p(e,t){var n=(0,s.d4)(v.Ht).user,r=(0,a.dh)().enqueueSnackbar,p=(0,c.A9)(),h=(0,o.useCallback)((0,i.A)(l().mark((function e(){var t,i,r,o,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,b.B6)(p);case 2:if(o=e.sent,null===(t=o.body)||void 0===t?void 0:t.invite){e.next=6;break}throw new Error("unable to generate invite link");case 6:return a=null!=n&&n.display_name?d.Ru.get("blend.invite.body-with-name",n.display_name,null===(i=o.body)||void 0===i?void 0:i.invite):d.Ru.get("blend.invite.body-without-name",null===(r=o.body)||void 0===r?void 0:r.invite),e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)}))),[null==n?void 0:n.display_name,p]);return(0,i.A)(l().mark((function n(){var i;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,u.l)(h());case 3:r(d.Ru.get("feedback.link-copied")),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),r(d.Ru.get("error.generic"));case 9:e&&t&&(i=e.inviteButtonFactory().hitCopyToClipboard(),t.logInteraction(i));case 10:case"end":return n.stop()}}),n,null,[[0,6]])})))}},53804:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});n(60905),n(94238),n(63619),n(41679),n(81443),n(74457),n(6844),n(77458),n(69645),n(93902),n(7410),n(50247),n(88190);var i=n(81226),r=n(30758),l=n(45976),o=n(1283),a=n(59081),s=n(85107),d=n(13147),c=n(81260),u=n(82035),v=n(93433),b=n(39437),p=n(59192),h=n(25078),m=n(31438),x=n(4355),f=n(40556),E=n(86070);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,i.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j={page_type:p.pd.PENDING_INVITATION,get title(){return a.Ru.get("web-player.blend.group-invite.header")},get subtitle(){return a.Ru.get("web-player.blend.duo-invite.description")},get button_text(){return a.Ru.get("web-player.blend.invite.button-title")},footnote:null,members:[],recipient:null,members_title:null,playlist_uri:null};const y=function(){var e,t=(0,u.r)(o.f,{}),n=t.spec,i=t.logger,p=(0,m.y)(n,i),g=(0,h.G)(),y=g.ref,w=g.breakpoint,O=(0,l.d4)(d.Ht).user,_=null!=O&&O.uri?(0,v.v)(null==O?void 0:O.uri):"",R=function(e){return A(A({},j),{},{members:[e],footnote:a.Ru.get("web-player.blend.group-invite.warning")})}({name:(null==O?void 0:O.display_name)||"",username:_,image_url:(null===(e=(0,b.g)(null==O?void 0:O.images))||void 0===e?void 0:e.url)||null,hash:""});return O?(0,E.jsxs)(r.Suspense,{fallback:null,children:[(0,E.jsx)(s.Q,{children:a.Ru.get("web-player.blend.invite.page-title")}),(0,E.jsx)(c.o.Provider,{value:w,children:(0,E.jsx)(x.d,{invitation:R,callToActionClicked:p,breakpointEltRef:y})})]}):(0,E.jsx)(f.A,{})}},11714:(e,t,n)=>{n.r(t),n.d(t,{default:()=>te});var i=n(30758),r=n(45976),l=n(61022),o=n(13147),a=(n(60905),n(94238),n(63619),n(41679),n(81443),n(74457),n(6844),n(77458),n(69645),n(93902),n(7410),n(50247),n(88190),n(81226)),s=n(47891),d=n(1409),c=n(1283),u=n(51519),v=n(59081),b=n(19919),p=n(81260),h=n(67693),m=n(82035),x=n(76558),f=n(38125),E=n(51050),g=n(50358),A=n(86070),j=function(e){var t=e.invitation,n=e.callToActionClicked,i=e.breakpointEltRef;return(0,A.jsxs)("div",{className:g.A.container,"data-testid":E.rg,ref:i,children:[(0,A.jsx)(x.u,{size:"xxlarge"}),(0,A.jsx)(f.O,{title:t.title,subtitle:t.subtitle,buttonText:t.button_text,footnote:null,callToActionClicked:n})]})},y=n(85107),w=(n(84008),n(83892),n(50252),n(97500)),O=n.n(w),_=n(54925),R=n(75633),I=n(36092),N=n(71348),k=n(7104);const T="HKAYWYmxd5Ie8WSi0a4y",D="i52u_T3b50wraodIaORk",L="xakiNVMlUf6geF67FEgy",P="IRhTesoeIiwswlly0Dvg",C="LNJzE17iskXWmfKAzY4U",M="qzBr7X7cdLUhWdk0r8lL";var S=function(e){var t=e.uri,n=e.imageUrl,i=e.name;return(0,A.jsx)("li",{children:(0,A.jsx)(I.h,{menu:(0,A.jsx)(N.B,{uri:t}),children:(0,A.jsx)(k.N,{to:t,children:(0,A.jsxs)("div",{className:P,children:[(0,A.jsx)(R.e,{images:[{url:n,width:null,height:null}],label:i,width:32,userIconSize:"medium",className:C}),(0,A.jsx)(_.E,{variant:"bodySmallBold",className:"standalone-ellipsis-one-line",semanticColor:"textBase",children:i})]})})})})},Y=function(e){var t=e.members,n=e.headingText,i=e.className;return(0,A.jsxs)("div",{className:O()(T,i),children:[(0,A.jsx)("div",{children:(0,A.jsx)(_.E,{as:"h4",variant:"marginalBold",semanticColor:"textSubdued",className:D,children:n})}),(0,A.jsx)("ul",{className:L,children:t&&t.map((function(e){return(0,A.jsx)(S,{imageUrl:e.image_url||"",name:e.name,uri:(0,u.Qj)(e.username).toURI()},e.username)}))}),(0,A.jsx)("div",{className:M})]})},B=function(e){var t=e.invitation,n=e.callToActionClicked,i=e.breakpointEltRef,r=t.members||[],l=(0,A.jsx)("div",{className:g.A.userListContainer,"data-testid":E.ev,children:(0,A.jsx)(Y,{className:g.A.userList,headingText:t.members_title,members:r})});return(0,A.jsxs)("div",{className:g.A.container,ref:i,children:[(0,A.jsx)(y.Q,{children:v.Ru.get("blend.join.title")}),(0,A.jsx)(f.O,{title:t.title,subtitle:t.subtitle,footnote:t.footnote,body:l,buttonText:t.button_text,callToActionClicked:n})]})},U=n(4355),G=n(46317),z=n(59192),J=n(25078),V=n(31438),X=n(95514),W=n(16247),q=n.n(W),H=(n(38858),n(62172),n(64692)),F=n(65775);function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){(0,a.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z=function(e){var t,n,r,o=e.invitationId,a=(0,l.Zp)(),x=(0,d.NC)(b.CXJ),y=(0,h.Z)(z.YW,[o]),w=y.data,O=y.error,_=y.loading,R=(0,m.r)(c.f,{}),I=R.spec,N=R.logger,k=(0,V.y)(I,N),T=function(e,t,n){var i=(0,F.d)().enqueueSnackbar,r=(0,H.A9)(),o=(0,l.Zp)();return(0,X.A)(q().mark((function l(){var a,s,d;return q().wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,(0,z.OE)(r,e);case 3:if(a=l.sent,s=(0,u.o_)(null==a?void 0:a.body.playlist_uri).toURLPath(!0)){l.next=7;break}throw new Error("unable to join");case 7:o(s,{replace:!0}),l.next=13;break;case 10:l.prev=10,l.t0=l.catch(0),i(v.Ru.get("error.request-playlist-failure"));case 13:t&&n&&(d=t.joinButtonFactory().hitCreatePlaylist(),n.logInteraction(d));case 14:case"end":return l.stop()}}),l,null,[[0,10]])})))}(o,I,N),D=(0,J.G)(),L=D.ref,P=D.breakpoint;(0,i.useEffect)((function(){var e;if((null==w||null===(e=w.body)||void 0===e?void 0:e.page_type)===z.pd.ALREADY_JOINED){var t,n=null===(t=(0,u.o_)(null==w?void 0:w.body.playlist_uri))||void 0===t?void 0:t.toURLPath(!0);n&&a(n,{replace:!0})}}),[null==w||null===(t=w.body)||void 0===t?void 0:t.page_type,null==w||null===(n=w.body)||void 0===n?void 0:n.playlist_uri,a]);var C=null===w||!w.body;if(C||_||O)return(0,A.jsx)(G.A,{timeoutInMs:1e3,hasError:!!O||!_&&C,errorMessage:v.Ru.get("error.generic")});var M=(null==w||null===(r=w.body.members)||void 0===r?void 0:r.length)||0,S=x===b.YVK.TWO_USER;switch(null==w?void 0:w.body.page_type){case z.pd.DELETED:return(0,A.jsx)(p.o.Provider,{value:P,children:(0,A.jsxs)("div",{className:g.A.container,ref:L,"data-testid":E.VE,children:[(0,A.jsx)(s.x,{size:"xxlarge"}),(0,A.jsx)(f.O,{title:w.body.title,subtitle:w.body.subtitle,buttonText:w.body.button_text,footnote:w.body.footnote,callToActionClicked:k})]})});case z.pd.ALREADY_JOINED:return(0,A.jsx)(G.A,{hasError:!1,errorMessage:v.Ru.get("error.request-playlist-failure")});case z.pd.READY_TO_JOIN_EMPTY_BLEND:return(0,A.jsx)(p.o.Provider,{value:P,children:(0,A.jsx)(U.d,{invitation:w.body,breakpointEltRef:L,callToActionClicked:T})});case z.pd.READY_TO_JOIN_ALREADY_CREATED_BLEND:return S&&M>=2?(0,A.jsx)(p.o.Provider,{value:P,children:(0,A.jsx)(j,{invitation:Q(Q({},w.body),{},{title:v.Ru.get("blend.link-invialid.header"),subtitle:v.Ru.get("blend.link-invalid.subtitle"),button_text:v.Ru.get("blend.invite.button-title")}),callToActionClicked:k,breakpointEltRef:L})}):(0,A.jsx)(p.o.Provider,{value:P,children:(0,A.jsx)(B,{invitation:w.body,callToActionClicked:T,breakpointEltRef:L})});case z.pd.MAX_MEMBERS:return(0,A.jsx)(p.o.Provider,{value:P,children:(0,A.jsx)(j,{invitation:w.body,callToActionClicked:k,breakpointEltRef:L})});case z.pd.PENDING_INVITATION:return(0,A.jsx)(p.o.Provider,{value:P,children:(0,A.jsx)(U.d,{invitation:w.body,callToActionClicked:k,breakpointEltRef:L})});default:return(0,A.jsx)(G.A,{timeoutInMs:1e3,hasError:!0,errorMessage:v.Ru.get("error.generic")})}},$=n(40556),ee=function(e){var t=e.invitationId;return(0,r.d4)(o.Ht).user?(0,A.jsx)(i.Suspense,{fallback:null,children:(0,A.jsx)(Z,{invitationId:t})}):(0,A.jsx)($.A,{})};const te=(0,i.memo)((function(){var e=(0,l.g)().invitationId,t=void 0===e?"":e;return(0,A.jsx)(ee,{invitationId:t})}))},50358:(e,t,n)=>{n.d(t,{A:()=>i});const i={xs:"(min-width: 0px)",xsOnly:"(min-width: 0px) and (max-width: 767px)",sm:"(min-width: 768px)",smOnly:"(min-width: 768px) and (max-width: 1023px)",md:"(min-width: 1024px)",mdOnly:"(min-width: 1024px) and (max-width: 1279px)",lg:"(min-width: 1280px)",lgOnly:"(min-width: 1280px) and (max-width: 1919px)",xl:"(min-width: 1920px)",container:"yMoj4jXSudxZ6BkKxV2E",TwoUsers:"IDgUCqAbkRah6OFywv1q",subtitle:"qmKxO5qV4XmVYfpFpaDA",facepile:"nWMdWl40O8K7HQT8Tagc",title:"csRAeNipsu1camQTMiIU",button:"nxFBywAeAI8Zk2fav3Yj",userList:"lxPLQIPb1VSV3VL18Ke3",userListContainer:"BzMKhmywgyIt6IUjcTGW",note:"DSdKNusLgsMX_iicYCU2"}}}]);
//# sourceMappingURL=xpui-routes-blend.js.map