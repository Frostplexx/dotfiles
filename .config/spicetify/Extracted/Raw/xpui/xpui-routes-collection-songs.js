"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[8828],{31147:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Se});var n=r(81226),a=r(26017),l=(r(60905),r(98168),r(94238),r(63619),r(6990),r(60850),r(5280),r(83892),r(41679),r(81443),r(74457),r(6844),r(77458),r(69645),r(9981),r(36490),r(51168),r(93902),r(7410),r(50247),r(88190),r(4207),r(64334),r(9433),r(26308),r(84815),r(30758)),i=r(45976),o=r(61022),s=r(98789),c=r(29479),u=r(51519),f=r(59081),d=r(85107),g=r(27890),p=r(46317),m=r(48716),y=r(52786),h=r(60120),v=r(88212),j=r(96792),T=r(74319),k=r(89077),x=r(92373),b=(r(84008),r(50252),r(49956)),C=r(14794),F=r(39149),P=r(99665);function I(e,t,r){var n={uri:e};return(0,b.qq)(n,t),(0,C.Pz)(n,null==r?void 0:r.map((function(e){var t;return null!==(t=(0,F.HI)(e))&&void 0!==t?t:null})).filter(P.P)),n}var S=r(80380),w=r(97150),A=r(90997),D=r(82035),R=r(35960),E=r(59767),O=r(13147),L=r(55074),M=r(98111),N=r(71174),_=r(61272),U=r(89454),B=r(77666),$=r(86511),q=r(70003);r(85367),r(78003);var z=r(78104),V=r(42715),H="liked-songs-tags";function K(){return(0,V.x)("liked-songs-current-tag-filter",null)}var Q=r(1409),X=r(35138),Z=r(45462),W=r(73690),Y=r(77700),G=r(29729),J=r(17175),ee=r(87238),te=r(27672),re=r(530),ne=r(19919),ae=r(51995),le=r(48575),ie=(r(51945),r(39921),r(78028)),oe=r(1619),se=r(19008),ce=r(64299),ue=r(86070),fe=l.memo((function(e){var t=e.tracklistDomRef,r=(0,D.r)(ie.E,{}),n=r.spec,a=r.logger,i=(0,l.useCallback)((function(){a.logInteraction(n.filterFieldFactory().keyStrokeFilter())}),[a,n]),o=(0,l.useCallback)((function(){a.logInteraction(n.filterFieldFactory().hitClearFilter())}),[a,n]),s=(0,oe.w)().filter((function(e){var t=e.columnType;return h.gc.includes(t)})).map((function(e){return e.columnType}));return(0,ue.jsxs)("div",{className:m.A.searchBoxContainer,children:[(0,ue.jsx)(l.Suspense,{fallback:null,children:(0,ue.jsx)(se.S,{placeholder:f.Ru.get("playlist.search_in_playlist"),clearOnEscapeInElementRef:t,onFilter:i,onClear:o})}),(0,ue.jsx)(ce.d,{columns:s})]})})),de=r(97500),ge=r.n(de),pe=r(8738),me=r(43407);const ye="q_yjkS1y6URH4Xm7gZfw";var he=function(e){return{id:e.filter,getName:function(){return e.name},ubiId:e.name}},ve=(0,l.memo)((function(e){var t=e.spec,r=function(e){var t=e.nrTracks,r=(0,z.t)(),n=(0,L.jE)(),i=K(),o=(0,a.A)(i,2),s=o[0],c=o[1],u=(0,l.useState)([]),f=(0,a.A)(u,2),d=f[0],g=f[1],p=(0,M.I)({queryKey:[H],queryFn:function(){return null==r?void 0:r.getTracksFilterTags()},staleTime:0,gcTime:864e5,placeholderData:N.rX,refetchOnWindowFocus:!1}).data;(0,l.useLayoutEffect)((function(){if(!(null==p?void 0:p.find((function(e){return e.filter===s})))&&s){if(t>0&&null!=p&&p.length)return;c(null)}g(null!=p?p:[])}),[s,c,t,p]);var m=(0,l.useCallback)((function(e){e.data.list===U.Ir.TRACKS&&n.invalidateQueries({queryKey:[H]})}),[n]);(0,B.l)(U.UV.UPDATE,m);var y=(0,l.useMemo)((function(){return d.find((function(e){return e.filter===s}))}),[s,d]),h=(0,l.useCallback)((function(e){var t;c(null!==(t=null==e?void 0:e.filter)&&void 0!==t?t:null)}),[c]);return{tags:s||t?d:[],currentTag:y,setCurrentTag:h}}({nrTracks:e.nrTracks}),n=r.tags,i=r.currentTag,o=r.setCurrentTag,s=(0,me.s)(),c=(0,l.useCallback)((function(e,r,a){var l;if(!e)return l=t.clearButtonFactory().hitClearFilter(),void s.logInteraction(l);var i=n.find((function(t){return t.filter===e}));if(i){var c=t.filterChipFactory({identifier:i.name,position:a});r?(l=c.hitClearFilter(),o(null)):(l=c.hitFilter(),i&&o(i)),s.logInteraction(l)}}),[s,o,t,n]),u=i?[]:n.map(he),d=i?[he(i)]:[];return n.length?(0,ue.jsx)(te.S,{children:(0,ue.jsx)(pe.s,{availableFilters:u,selectedFilters:d,toggleFilterId:function(){},resetFilterIds:function(){return o(null)},onFilterClick:c,ariaLabel:f.Ru.get("web-player.liked-songs.liked-songs-filter-tags"),clearBtnAriaLabel:f.Ru.get("web-player.liked-songs.clear-filter"),className:ge()(ye),applyLightThemeControls:!0})}):null}));const je="ivuDaTbfBpBewwr39aDQ";var Te=l.memo((function(e){var t=e.metadata,r=e.onClickTogglePlay,n=e.isPlaying,a=e.spec,i=e.logger,o=e.backgroundColor,s=e.canSort,c=e.canFilter,u=t.uri,d=t.name,g=t.totalLength,p=(0,l.useRef)(null),m=(0,l.useMemo)((function(){return a.actionBarFactory()}),[a]),y=(0,l.useMemo)((function(){return m.shuffleButtonContainerFactory()}),[m]),h=(0,l.useMemo)((function(){return m.filtersFactory()}),[m]),v=g>0,j=g>0,T=s&&c,k=(0,le.X)(),x=(0,l.useCallback)((function(e,t){var r=m.downloadButtonFactory();t===G.NV.ADD?i.logInteraction(r.hitDownload({itemToDownload:u})):t===G.NV.REMOVE?i.logInteraction(r.hitRemoveDownload({itemToRemoveFromDownloads:u})):t===G.NV.NO_PERMISSION&&i.logInteraction(r.hitUiReveal())}),[m,i,u]),b=(0,re.j)(),C=(0,Q.NC)(ne.cLA);return(0,ue.jsxs)(ee.E,{backgroundColor:o,children:[(0,ue.jsxs)(te.S,{children:[j?(0,ue.jsx)(W.D,{onClick:r,isPlaying:n,size:b,uri:u,ariaPauseLabel:f.Ru.get("playlist.a11y.pause",d),ariaPlayLabel:f.Ru.get("playlist.a11y.play",d)}):null,k&&(0,ue.jsx)(A.r,{spec:y,children:(0,ue.jsx)(ae.Y,{entityName:d,contextUri:u,activationPlacement:"bottomEnd",size:b})}),(0,ue.jsx)(X.f,{uri:u,canDownload:v,isFollowing:!0,onFollow:function(){},size:b,onClick:x}),T?(0,ue.jsx)(A.r,{spec:m,children:(0,ue.jsx)(fe,{tracklistDomRef:p})}):(0,ue.jsx)("div",{className:je,children:(0,ue.jsx)(Z.u,{property:J.mA,renderNewExperience:function(){return(0,ue.jsx)(Y.g,{options:[],onSelect:function(){},selected:null,enableViewModeMenu:!0})}})})]}),C&&(0,ue.jsx)(ve,{spec:h,nrTracks:g})]})})),ke=r(21239),xe=r(96429);function be(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ce(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?be(Object(r),!0).forEach((function(t){(0,n.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):be(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Fe=[j.$.INDEX,j.$.TITLE_AND_ARTIST,j.$.ALBUM,j.$.ADDED_AT,j.$.DURATION],Pe=function(e){var t=e.data,r=e.canFilter,n=e.canSort,i=t.metadata,u=i.uri,b=i.name,C=i.totalLength,F=(0,l.useRef)(null),S=(0,x.z)("#5038a0"),O=K(),L=(0,a.A)(O,1)[0],M=(0,l.useContext)(y.g).filter,N=(0,l.useContext)(h.cL),_=N.sortState,U=N.setSortState,B=(0,D.r)(c.k,{data:{uri:u}}),$=B.spec,q=B.logger,z=l.useMemo((function(){return $.headerFactory()}),[$]),V=l.useMemo((function(){return $.tracklistFactory()}),[$]);(0,l.useEffect)((function(){null===_.column&&U({column:j.$.ADDED_AT,order:j.H.DESC})}),[_,U]);var H=(0,o.wQ)(),Q=(0,o.zy)(),X="POP"!==H?new URLSearchParams(Q.search).get("uri"):null,Z=(0,w.P)(I(u,(0,ke.c)(_),[M,L].filter(P.P)),{featureIdentifier:"your_library",referrerIdentifier:"your_library"}),W=Z.isPlaying,Y=Z.togglePlay,G=Z.usePlayContextItem,J=Z.isActive,ee=function(){var e=(0,E.$I)({isPlaying:W,isActive:J,spec:$.actionBarFactory().playButtonFactory(),logger:q,uri:u});Y({loggingParams:e})},te=(0,R.z1)(),re=(0,a.A)(te,1)[0],ne=(0,k.a)().isCompactMode,ae=function(e){var t=e.isCompactMode,r=void 0!==t&&t,n=[].concat(Fe);return r&&n.splice(n.indexOf(j.$.TITLE_AND_ARTIST),1,j.$.TITLE,j.$.ARTIST),n}({isCompactMode:ne});return(0,ue.jsx)(v.a,{columns:ae,children:(0,ue.jsxs)("section",{role:"presentation",className:m.A.playlist,"data-testid":"playlist-page",children:[(0,ue.jsx)(d.Q,{children:f.Ru.get("playlist.page-title",b)}),(0,ue.jsx)(T.x,{metadata:Ce(Ce({},t.metadata),{},{hasSpotifyTracks:!0}),totalItems:re,isPlaying:W,togglePlay:ee,backgroundColor:S,specLikedSongs:z}),(0,ue.jsx)(Te,{metadata:t.metadata,onClickTogglePlay:ee,isPlaying:W,spec:$,logger:q,backgroundColor:S,canSort:n,canFilter:r}),(0,ue.jsx)("div",{className:"contentSpacing",children:C>0?(0,ue.jsx)(l.Suspense,{fallback:(0,ue.jsx)(p.A,{hasError:!1,errorMessage:f.Ru.get("error.request-collection-tracks-failure")}),children:(0,ue.jsx)(A.r,{spec:V,children:(0,ue.jsx)(xe.b,{nrTracks:C,collectionUri:u,scrollToUri:X,usePlayContextItem:G,outerDomRef:F,spec:V,initialItems:t.contents.items,isCompactMode:ne,tagFilter:L})})}):(0,ue.jsx)(g.p,{message:f.Ru.get("collection.empty-page.songs-subtitle"),title:f.Ru.get("collection.empty-page.songs-title"),linkTo:"/search",linkTitle:f.Ru.get("collection.empty-page.songs-cta"),renderInline:!0,children:(0,ue.jsx)(s.v,{"aria-hidden":"true"})})})]})})},Ie=l.memo((function(e){var t=e.user,r=e.uri,n=(0,l.useContext)(y.g).filter,i=(0,l.useContext)(h.cL).sortState,o=K(),s=(0,a.A)(o,1)[0],c=function(e,t,r){var n=(0,l.useContext)(S.Z),a=(0,L.jE)(),i=(0,_.U0)((function(){return["useLikedSongs",e,r]}),[e,r]),o=(0,M.I)({queryKey:i(),queryFn:function(){return n.getTracks(r)},gcTime:18e5,placeholderData:N.rX,refetchOnWindowFocus:!1}).data,s=(0,l.useCallback)((function(){a.invalidateQueries({queryKey:i()})}),[a,i]);(0,B.l)(U.UV.UPDATE,s);var c=(0,q.$R)(t.id);return c&&o?{metadata:{uri:e,name:c.name,images:c.images,totalLength:null==o?void 0:o.totalLength,unfilteredTotalLength:o.unfilteredTotalLength,owner:(0,$.w)(t)},contents:o}:null}(r,t,{offset:0,limit:25,sort:(0,ke.c)(i),filters:[n,s].filter(P.P)}),u=(0,l.useContext)(S.Z).getCapabilities();return c?(0,ue.jsx)(Pe,{data:c,canFilter:u.canFilterTracksAndEpisodes&&c.metadata.unfilteredTotalLength>0,canSort:u.canSortTracksAndEpisodes&&c.metadata.unfilteredTotalLength>0}):(0,ue.jsx)(p.A,{hasError:!1,errorMessage:f.Ru.get("error.not_found.title.playlist"),loadOffline:u.canModifyOffline})}));const Se=function(){var e=(0,i.d4)(O.Ht).user;if(null===e)return null;var t=(0,u.fH)(e.id).toURI();return(0,ue.jsx)(h.sn,{uri:t,children:(0,ue.jsx)(y.s,{uri:t,children:(0,ue.jsx)(R.S1,{children:(0,ue.jsx)(Ie,{uri:t,user:e})})})})}}}]);
//# sourceMappingURL=xpui-routes-collection-songs.js.map