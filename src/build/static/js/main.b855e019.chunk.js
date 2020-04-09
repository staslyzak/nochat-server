(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[1],{105:function(e,t,n){"use strict";n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return g})),n.d(t,"c",(function(){return v}));var r=n(15),a=n(29),c=n.n(a),i=n(50),o=n(16),u=n(0),s=n.n(u),l=n(26),d=n(37),f=n(36),b=n(168),m=n(60),p=n(69),h=function(){var e=Object(l.c)(d.b),t=Object(l.c)(d.c),n=Object(l.a)(d.e),r=Object(l.b)(f.j),a=Object(o.a)(r,1)[0],u=Object(l.b)(f.i),s=Object(o.a)(u,1)[0],b=Object(l.b)(f.d),h=Object(o.a)(b,1)[0],g=Object(l.b)(f.g,{onCompleted:function(){var e=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:return e.next=4,m.a.dispatch(Object(p.b)());case 4:return e.next=6,O.resetStore();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}),v=Object(o.a)(g,2),y=v[0],O=v[1].client;return{queries:{user:e,directs:t},lazyQueries:{searchUsers:n},mutations:{logout:y,connect:a,disconnect:s,deleteDirect:h}}},g=function(e){var t=e.userId,n=Object(l.c)(d.b),r=Object(l.c)(d.a,{variables:{userId:t}}),a=Object(l.b)(f.a),c=Object(o.a)(a,1)[0],i=Object(l.b)(f.b),u=Object(o.a)(i,1)[0],s=Object(l.b)(f.e),b=Object(o.a)(s,1)[0],m=Object(l.b)(f.h),p=Object(o.a)(m,1)[0],h=Object(l.b)(f.k);return{queries:{currentUser:n,currentDirect:r},lazyQueries:{},mutations:{createDirect:c,createMessage:u,deleteMessage:b,readMessage:p,userTyping:Object(o.a)(h,1)[0]}}},v=function(e,t){var n=e.chatId,a=e.userId,u=e.username,l=s.a.useState({timer:null,typing:!1}),d=Object(o.a)(l,2),f=d[0],m=d[1],p=s.a.useState(""),h=Object(o.a)(p,2),g={user:h[0],setUser:h[1]},v=Object(b.a)(function(){var e=Object(i.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(Object(r.a)({},f,{typing:!1})),e.next=3,t(n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),1500),y=Object(o.a)(v,1)[0];return[g,function(){var e=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m(Object(r.a)({},f,{typing:!0})),f.typing){e.next=4;break}return e.next=4,t({chatId:n,userId:a,username:u});case 4:y({chatId:n,userId:a,username:""});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()]}},108:function(e,t,n){"use strict";var r=n(54),a=n(0),c=n.n(a),i=n(196),o=Object(i.a)((function(e){return{Typing:{display:"inline-flex",justifyContent:"space-between",alignItems:"center",color:e.palette.text.secondary,"& span":{width:5,height:5,marginRight:4,background:e.palette.text.secondary,borderRadius:"50%","&:nth-child(1)":{animation:"$animation 1s ease-in-out infinite 0s"},"&:nth-child(2)":{animation:"$animation 1s ease-in-out infinite 0.2s"},"&:nth-child(3)":{animation:"$animation 1s ease-in-out infinite 0.4s"}}},Typing_secondary:{color:e.palette.secondary[200],"& span":{background:e.palette.secondary[200]}},"@keyframes animation":{"0%, 100%":{transform:"scale(1)",opacity:1},"50%":{transform:"scale(.8)",opacity:.5}}}})),u=n(95),s=n.n(u);t.a=function(e){var t=o();return c.a.createElement("span",{className:s()(t.Typing,Object(r.a)({},t.Typing_secondary,"secondary"===e.variant))},c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null),"typing")}},109:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(198),i=n(196),o=Object(i.a)((function(e){return{MainBlock:{position:"relative",width:"100%",height:"100vh",overflow:"hidden",background:e.palette.background.paper,borderRight:"1px solid ".concat(e.palette.divider)},MainBlock_header:{},MainBlock_content:{height:"100%",maxHeight:"calc(100% - 64px)",overflowY:"scroll",position:"relative","&::-webkit-scrollbar":{display:"none"},borderTop:"1px solid ".concat(e.palette.divider)}}}));t.a=a.a.memo((function(e){var t=e.header,n=e.children,r=e.show,i=void 0===r||r,u=o();return a.a.createElement("div",{className:u.MainBlock},i&&a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,{className:u.MainBlock_header},t),a.a.createElement("div",{className:u.MainBlock_content},n)))}))},131:function(e,t,n){e.exports=n(164)},164:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(10),i=n(25),o=n(15),u=n(49),s=n(124),l=n(114),d=n(19),f=n(123),b=n(115),m=n(3),p=n(60),h=n(69),g=new s.a({uri:"http://localhost:8081/graphql"}),v=new l.a({uri:"ws://localhost:8081/graphql",options:{reconnect:!0,connectionParams:function(){return{headers:{"x-token":localStorage.getItem("token"),"x-refresh-token":localStorage.getItem("refreshToken")}}}}}),y=new d.a((function(e,t){return t(e).map((function(t){var n=e.getContext().response.headers,r=n.get("x-token"),a=n.get("x-refresh-token");return r&&a&&(localStorage.setItem("token",r),localStorage.setItem("refreshToken",a)),t}))})),O=new d.a((function(e,t){return e.setContext((function(e){var t=e.headers;return{headers:Object(o.a)({},t,{"x-token":localStorage.getItem("token"),"x-refresh-token":localStorage.getItem("refreshToken")})}})),t(e)})),j=Object(b.a)((function(e){var t=e.graphQLErrors,n=e.networkError;t&&t.forEach((function(e){var t=e.message,n=e.locations,r=e.path,a=e.extensions;console.log("[GraphQL error]: \n          Message: ".concat(t,", \n          Location: ").concat(n,", \n          Path: ").concat(r)),"UNAUTHENTICATED"===a.code&&(console.log(a.code,"UNAUTHENTICATED"===a.code),p.a.dispatch(Object(h.b)()))})),n&&console.log("[Network error]: ".concat(n))})).concat(y.concat(O.concat(g))),I=Object(d.d)((function(e){var t=e.query,n=Object(m.l)(t);return"OperationDefinition"===n.kind&&"subscription"===n.operation}),v,j),k=new u.a({link:I,cache:new f.a}),E=n(212),w=n(122),x=n(80),T=n(81),M=n(90),S=window.matchMedia("(prefers-color-scheme: dark)").matches,D=Object(w.a)({palette:{type:S?"dark":"light",primary:x.a,secondary:T.a},props:{sidebar:280,sidebarMin:150,classes:{ellipsis:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}},lighten:M.lighten,darken:M.darken}),$=n(71),N=n(48),_=n(39),C=n(211),U=n(119),L=n.n(U),A=n(44),z=n(210),q=n(196),B=n(54),Q=n(29),G=n.n(Q),R=n(106),W=n(50),H=n(16),P=n(37),F=n(52),Y=n(40),J=n(208),K=n(215),V=n(209),X=n(168),Z=Object(q.a)((function(e){return{Sidebar:{position:"relative",width:"100%",maxWidth:e.props.sidebar,minWidth:e.props.sidebarMin},Sidebar_header:{display:"flex",alignItems:"center",justifyContent:"space-between"},Sidebar_menuButton:{marginRight:e.spacing(1)},Sidebar_searchbar:{background:"dark"===e.palette.type?e.lighten(e.palette.background.default,.235):e.darken(e.palette.background.default,.057),padding:"0 ".concat(e.spacing(1),"px"),fontSize:e.typography.body2.fontSize,minHeight:32,borderRadius:e.shape.borderRadius}}})),ee=n(109),te=n(202),ne=n(203),re=n(167),ae=n(204),ce=n(83),ie=n(214),oe=n(57),ue=n(201),se=Object(q.a)((function(e){return{MenuDrawer:{position:"absolute",width:"95%",height:"100%",zIndex:e.zIndex.tooltip,background:e.palette.background.paper,borderRight:"1px solid ".concat(e.palette.divider)},MenuDrawer_listItem:{"& p":{width:"100%",marginLeft:e.spacing(2)},"&:last-child p":{color:e.palette.error.dark,fontSize:e.typography.body1.fontSize,fontWeight:e.typography.fontWeightBold,marginLeft:0}},MenuDrawer_backdrop:{width:"100%",zIndex:1300,maxWidth:960,left:"auto",right:"auto"}}})),le=[{title:"Settings",link:"/settings",action:function(e){return e.onToggle},icon:a.a.createElement(ue.a,null)},{title:"Log Out",action:function(e){return e.onLogout}}],de=a.a.memo((function(e){var t=e.open,n=e.user,r=e.onLogout,c=Object(A.a)(e,["open","user","onLogout"]),i=se();return a.a.createElement(a.a.Fragment,null,a.a.createElement(te.a,{in:t,direction:"right"},a.a.createElement("div",{className:i.MenuDrawer},a.a.createElement(ne.a,null,a.a.createElement(re.a,null,a.a.createElement(oe.a,{src:n.avatar,alt:n.username,online:n.online})),a.a.createElement(re.a,null,a.a.createElement(ae.a,{primary:n.username,secondary:n.email}))),a.a.createElement(ne.a,null,le.map((function(e){var t=e.title,n=e.link,u=e.action,s=e.icon;return a.a.createElement(re.a,{key:t,button:!0,to:n,className:i.MenuDrawer_listItem,component:n?_.b:"div",onClick:u?u(Object(o.a)({},c,{onLogout:r})):void 0},s,a.a.createElement(ce.a,{variant:"body2",align:s?"left":"center"},t))}))))),a.a.createElement(ie.a,{open:t,onClick:c.onToggle,className:i.MenuDrawer_backdrop}))})),fe=n(205),be=Object(q.a)((function(e){return{UserItem_primary:Object(o.a)({},e.props.classes.ellipsis),UserItem_secondary:Object(o.a)({},e.props.classes.ellipsis,{color:e.palette.secondary[200]})}})),me=function(e){var t=be();return a.a.createElement(re.a,Object.assign({},e,{dense:!0,button:!0,to:e.link,component:_.b}),a.a.createElement(fe.a,null,a.a.createElement(oe.a,{src:e.user.avatar,alt:e.user.username,online:e.user.online})),a.a.createElement(ae.a,{primary:e.user.username,primaryTypographyProps:{component:"div",className:t.UserItem_primary},secondary:"@".concat(e.user.username),secondaryTypographyProps:{variant:"caption",component:"div",className:t.UserItem_secondary}}))},pe=n(200),he=Object(q.a)((function(e){return{ChatItem_badge_root:{height:15},ChatItem_badge_badge:{position:"relative",transform:"none",height:"inherit"},ChatItem_primary:{display:"flex"},ChatItem_secondary:{display:"flex",alignItems:"center"},ChatItem_primaryText:Object(o.a)({width:"100%"},e.props.classes.ellipsis),ChatItem_secondaryText:Object(o.a)({width:"100%",marginRight:e.spacing(1)},e.props.classes.ellipsis)}})),ge=n(108),ve=function(e){var t=e.link,n=e.date,r=e.avatar,c=e.online,i=e.unread,o=e.typing,u=void 0!==o&&o,s=e.selected,l=e.primary,d=e.secondary,f=e.onContextMenu,b=Object(A.a)(e,["link","date","avatar","online","unread","typing","selected","primary","secondary","onContextMenu"]),m=he();return a.a.createElement(re.a,Object.assign({dense:!0,button:!0,to:t,component:_.b,selected:s,onContextMenu:f},b),a.a.createElement(fe.a,null,a.a.createElement(oe.a,{src:r,alt:l,online:c})),a.a.createElement(ae.a,{primary:a.a.createElement(a.a.Fragment,null,a.a.createElement(ce.a,{variant:"body2",className:m.ChatItem_primaryText},l),a.a.createElement(ce.a,{variant:"caption",color:"textSecondary"},Object(Y.a)(n))),primaryTypographyProps:{className:m.ChatItem_primary,component:"div"},secondary:a.a.createElement(a.a.Fragment,null,a.a.createElement(ce.a,{variant:"caption",className:m.ChatItem_secondaryText},u?a.a.createElement(ge.a,null):d),a.a.createElement(pe.a,{max:50,classes:{badge:m.ChatItem_badge_badge,root:m.ChatItem_badge_root},badgeContent:i,color:"secondary"})),secondaryTypographyProps:{className:m.ChatItem_secondary,component:"div"}}))},ye=n(176),Oe=n(206),je=function(e){var t,n=e.anchorEl,r=e.onClose,c=e.onDelete;return a.a.createElement(ye.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},open:Boolean(n),onClose:r},a.a.createElement(Oe.a,{dense:!0,onClick:(t=c,function(){t(),r()})},"Delete chat"))},Ie=function(e){a.a.useEffect((function(){var t=e.subscribeToUserTyping(e.direct.id);return function(){return t()}}),[]),a.a.useEffect((function(){var t=e.subscribeToDeleteMessage(e.direct.id);return function(){return t()}}),[]),a.a.useEffect((function(){var t=e.subscribeToNewMessage(e.direct.id);return function(){return t()}}),[]);var t=a.a.useState(null),n=Object(H.a)(t,2),r=n[0],c=n[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(ve,{link:e.link,typing:e.typing,selected:e.selected,avatar:e.user.avatar,online:e.user.online,unread:e.direct.unread,primary:e.user.username,secondary:e.direct.lastMessage.text,date:e.direct.lastMessage.createdAt,onContextMenu:function(e){e.preventDefault(),c(e.currentTarget)}}),a.a.createElement(je,{anchorEl:r,onClose:function(){return c(null)},onDelete:function(){e.onDelete(e.direct.id)}}))},ke=n(207),Ee=Object(q.a)((function(e){return{StyledList:{},StyledList_subheader:{background:"dark"===e.palette.type?e.lighten(e.palette.background.default,.235):e.darken(e.palette.background.default,.057),lineHeight:"32px",fontSize:e.typography.body2.fontSize}}})),we=function(e){var t=Ee();return a.a.createElement(ne.a,Object.assign({},e,{subheader:e.subheader?a.a.createElement(ke.a,{component:"div",className:t.StyledList_subheader},e.subheader):null}))},xe=function(e){var t=Z(),n=a.a.useState(!1),r=Object(H.a)(n,2),c=r[0],i=r[1],o=a.a.useState(""),u=Object(H.a)(o,2),s=u[0],l=u[1];a.a.useEffect((function(){l("")}),[e.chatId]),a.a.useEffect((function(){var t=e.subscribeToNewDirect();return function(){return t()}}),[]),a.a.useEffect((function(){var t=e.subscribeToDeleteDirect();return function(){return t()}}),[]),a.a.useEffect((function(){var t=e.subscribeToOnlineUsers();return function(){return t()}}),[]),a.a.useEffect((function(){e.onConnect(),window.addEventListener("beforeunload",(function(t){return t.preventDefault(),e.onDisconnect()}))}),[]);var d=Object(X.a)((function(t){return e.onSearch(t)}),200),f=Object(H.a)(d,1)[0],b=function(){return i(!c)};return a.a.createElement("div",{className:t.Sidebar},a.a.createElement(de,{open:c,user:e.currentUser,onLogout:e.onLogout,onToggle:b}),a.a.createElement(ee.a,{header:a.a.createElement("div",{className:t.Sidebar_header},a.a.createElement(J.a,{edge:"start",color:"inherit",className:t.Sidebar_menuButton,onClick:b},a.a.createElement(V.a,null)),a.a.createElement(K.a,{size:"small",value:s,placeholder:"Search",className:t.Sidebar_searchbar,onChange:function(e){l(e.target.value),f(e.target.value)}}))},s.length?function(e){return e?a.a.createElement(we,{subheader:"Global search"},e.map((function(e){return a.a.createElement(me,{key:e.id,user:e,link:"/?p=".concat(e.id),onClick:function(){return l("")}})}))):null}(e.users):e.directs.map((function(t){return a.a.createElement(Ie,{key:t.id,direct:t,user:t.user,typing:e.typings[t.id]===t.user.username?e.typings[t.id]:"",link:"/?p=".concat(t.user.id),selected:t.user.id===e.chatId,onDelete:e.onDeleteDirect,subscribeToUserTyping:e.subscribeToUserTyping,subscribeToNewMessage:e.subscribeToNewMessage,subscribeToDeleteMessage:e.subscribeToDeleteMessage})}))))},Te=n(213),Me=n(105),Se=a.a.memo((function(e){var t=Object(Me.b)(),n=t.queries,r=n.user,c=n.directs,i=Object(H.a)(t.lazyQueries.searchUsers,2),u=i[0],s=i[1],l=t.mutations,d=l.logout,f=l.connect,b=l.disconnect,m=l.deleteDirect,p=Object(Y.b)(e.location).p,h=a.a.useState({}),g=Object(H.a)(h,2),v=g[0],y=g[1];return a.a.createElement(xe,{chatId:p,typings:v,directs:Object(Te.a)(c,"data.directs",[]).sort(Y.c),users:Object(Te.a)(s,"data.users"),currentUser:Object(Te.a)(r,"data.currentUser",{}),directslength:Object(Te.a)(c,"data.directs.length"),onLogout:d,onConnect:f,onSearch:function(e){return u({variables:{username:e}})},onDisconnect:b,onDeleteDirect:function(e){m({variables:{id:e}})},subscribeToNewDirect:function(){return c.subscribeToMore({document:F.c,updateQuery:function(e,t){var n=t.subscriptionData;if(!n.data)return e;var r=n.data.newDirect;return{directs:e.directs.concat(r).sort(Y.c)}}})},subscribeToNewMessage:function(e){return c.subscribeToMore({document:F.d,variables:{chatId:e},updateQuery:function(t,n){var a=n.subscriptionData;if(!a.data)return t;var c=a.data.newMessage,i=Object(Te.a)(r,"data.currentUser"),u=c.userId!==i.id?1:0;return{directs:t.directs.map((function(t){return t.id===e&&(t=Object(o.a)({},t,{lastMessage:c,unread:t.unread+u})),t})).sort(Y.c)}}})},subscribeToDeleteDirect:function(){return c.subscribeToMore({document:F.a,updateQuery:function(){var e=Object(W.a)(G.a.mark((function e(t,n){var r,a,i;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((r=n.subscriptionData).data){e.next=3;break}return e.abrupt("return",t);case 3:return a=r.data.deleteDirect,i=t.directs.filter((function(e){return e.id!==a.id})),c.client.writeQuery({query:P.c,data:{directs:i}}),e.abrupt("return",{directs:i});case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()})},subscribeToDeleteMessage:function(e){return c.subscribeToMore({document:F.b,variables:{chatId:e},updateQuery:function(){var t=Object(W.a)(G.a.mark((function t(n,a){var i,u,s;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((i=a.subscriptionData).data){t.next=3;break}return t.abrupt("return",n);case 3:return u=Object(Te.a)(r,"data.currentUser"),s=i.data.deleteMessage,t.next=7,c.client.query({query:P.d,variables:{chatId:e},fetchPolicy:"no-cache"}).then((function(e){var t=e.data,r=Object(R.a)(n.directs).map((function(e){var n=s.userId!==u.id?1:0;return e.lastMessage.id===s.id&&(e=Object(o.a)({},e,{lastMessage:t.directLastMessage,unread:e.unread-n})),e}));return c.client.writeQuery({query:P.c,data:{directs:r}}),{directs:r}}));case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()})},subscribeToOnlineUsers:function(){return c.subscribeToMore({document:F.e})},subscribeToUserTyping:function(e){return c.subscribeToMore({document:F.f,variables:{chatId:e},updateQuery:function(t,n){var r=n.subscriptionData;if(!r.data)return t;var a=r.data.userTyping;return y(Object(o.a)({},v,Object(B.a)({},e,a))),t}})}})})),De=Object(q.a)((function(e){return{container:{display:"flex",overflow:"hidden",padding:0,maxHeight:"100vh"},contentShift:{width:"100%",minWidth:e.props.sidebarMin}}})),$e=Object(N.g)((function(e){var t=e.children,n=Object(A.a)(e,["children"]),r=De();return a.a.createElement(z.a,{maxWidth:"md",className:r.container},a.a.createElement(Se,n),a.a.createElement("div",{className:r.contentShift},t))})),Ne=function(e){return L()({loader:e,loading:function(e){return e.error&&console.error(e.error),null}})},_e=[{path:"/",exact:!1,component:Ne((function(){return n.e(4).then(n.bind(null,237))}))},{path:"/verify",exact:!0,component:Ne((function(){return n.e(0).then(n.bind(null,231))}))}],Ce=[{path:"/(|registration)",exact:!0,component:Ne((function(){return Promise.all([n.e(5),n.e(6)]).then(n.bind(null,232))}))},{path:"/verify",exact:!0,component:Ne((function(){return n.e(0).then(n.bind(null,231))}))},{path:"*",component:N.a}],Ue=Object($.b)((function(e){return{isAuthorized:e.auth.isAuthorized}}))((function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(C.a,null),a.a.createElement(_.a,null,e.isAuthorized?a.a.createElement($e,null,_e.map((function(e){return a.a.createElement(N.b,Object.assign({key:e.path},e))}))):a.a.createElement(N.d,null,Ce.map((function(e){return a.a.createElement(N.b,Object.assign({key:e.path},e))})))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(c.render)(a.a.createElement(i.a,{client:k},a.a.createElement($.a,{store:p.a},a.a.createElement(E.a,{theme:D},a.a.createElement(Ue,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},36:function(e,t,n){"use strict";n.d(t,"c",(function(){return v})),n.d(t,"f",(function(){return y})),n.d(t,"l",(function(){return O})),n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return I})),n.d(t,"e",(function(){return k})),n.d(t,"d",(function(){return E})),n.d(t,"h",(function(){return w})),n.d(t,"g",(function(){return x})),n.d(t,"j",(function(){return T})),n.d(t,"i",(function(){return M})),n.d(t,"k",(function(){return S}));var r=n(13),a=n(14),c=n.n(a);function i(){var e=Object(r.a)(["\n  mutation userTyping($chatId: Int!, $username: String) {\n    userTyping(chatId: $chatId, username: $username)\n  }\n"]);return i=function(){return e},e}function o(){var e=Object(r.a)(["\n  mutation disconnect {\n    disconnect {\n      id\n    }\n  }\n"]);return o=function(){return e},e}function u(){var e=Object(r.a)(["\n  mutation connect {\n    connect {\n      id\n    }\n  }\n"]);return u=function(){return e},e}function s(){var e=Object(r.a)(["\n  mutation logout {\n    logout\n  }\n"]);return s=function(){return e},e}function l(){var e=Object(r.a)(["\n  mutation readMessage($id: Int!) {\n    readMessage(id: $id)\n  }\n"]);return l=function(){return e},e}function d(){var e=Object(r.a)(["\n  mutation deleteDirect($id: Int!) {\n    deleteDirect(id: $id)\n  }\n"]);return d=function(){return e},e}function f(){var e=Object(r.a)(["\n  mutation deleteMessage($id: Int!) {\n    deleteMessage(id: $id)\n  }\n"]);return f=function(){return e},e}function b(){var e=Object(r.a)(["\n  mutation createMessage($chatId: Int, $text: String!) {\n    createMessage(chatId: $chatId, text: $text)\n  }\n"]);return b=function(){return e},e}function m(){var e=Object(r.a)(["\n  mutation createDirect($userId: Int!, $text: String) {\n    createDirect(userId: $userId, text: $text) {\n      id\n    }\n  }\n"]);return m=function(){return e},e}function p(){var e=Object(r.a)(["\n  mutation verifyUser($secret: String!) {\n    verifyUser(secret: $secret) {\n      token\n      refreshToken\n    }\n  }\n"]);return p=function(){return e},e}function h(){var e=Object(r.a)(["\n  mutation login($username: String!, $password: String!) {\n    login(username: $username, password: $password) {\n      token\n      refreshToken\n    }\n  }\n"]);return h=function(){return e},e}function g(){var e=Object(r.a)(["\n  mutation createUser($username: String!, $email: String!, $password: String!) {\n    createUser(username: $username, email: $email, password: $password)\n  }\n"]);return g=function(){return e},e}var v=c()(g()),y=c()(h()),O=c()(p()),j=c()(m()),I=c()(b()),k=c()(f()),E=c()(d()),w=c()(l()),x=c()(s()),T=c()(u()),M=c()(o()),S=c()(i())},37:function(e,t,n){"use strict";n.d(t,"e",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return b})),n.d(t,"a",(function(){return m})),n.d(t,"d",(function(){return p}));var r=n(13),a=n(14),c=n.n(a);function i(){var e=Object(r.a)(["\n  query directLastMessage($chatId: Int!) {\n    directLastMessage(chatId: $chatId) {\n      id\n      text\n      userId\n      createdAt\n    }\n  }\n"]);return i=function(){return e},e}function o(){var e=Object(r.a)(["\n  query currentDirect($userId: Int!) {\n    currentDirect(userId: $userId) {\n      direct {\n        id\n        messages {\n          id\n          text\n          userId\n          unread\n          createdAt\n        }\n      }\n      recipient {\n        id\n        email\n        avatar\n        online\n        username\n        lastSeen\n        createdAt\n      }\n    }\n  }\n"]);return o=function(){return e},e}function u(){var e=Object(r.a)(["\n  query directs {\n    directs {\n      id\n      user {\n        id\n        email\n        avatar\n        online\n        username\n        lastSeen\n        createdAt\n      }\n      lastMessage {\n        id\n        text\n        userId\n        createdAt\n      }\n      unread\n    }\n  }\n"]);return u=function(){return e},e}function s(){var e=Object(r.a)(["\n  query currentUser {\n    currentUser {\n      id\n      email\n      avatar\n      online\n      username\n      createdAt\n    }\n  }\n"]);return s=function(){return e},e}function l(){var e=Object(r.a)(["\n  query users($username: String) {\n    users(username: $username) {\n      id\n      email\n      avatar\n      online\n      username\n      lastSeen\n      createdAt\n    }\n  }\n"]);return l=function(){return e},e}var d=c()(l()),f=c()(s()),b=c()(u()),m=c()(o()),p=c()(i())},40:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return s}));n(16),n(15);var r=n(82),a=n.n(r),c=(n(0),n(91)),i=n.n(c),o=function(e){return a.a.parse(e.search,{arrayFormat:"comma",skipNull:!0,parseNumbers:!0})},u=function(e,t){return t.lastMessage.createdAt-e.lastMessage.createdAt},s=function(e,t){if(e){var n=i()(),r=i()(+e),a=n.diff(r,"days")>=5?"DD.MM.YY":"HH:mm";return t?t+r.format(a):r.format(a)}}},52:function(e,t,n){"use strict";n.d(t,"d",(function(){return f})),n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return p})),n.d(t,"e",(function(){return h})),n.d(t,"f",(function(){return g}));var r=n(13),a=n(14),c=n.n(a);function i(){var e=Object(r.a)(["\n  subscription userTyping($chatId: Int!) {\n    userTyping(chatId: $chatId)\n  }\n"]);return i=function(){return e},e}function o(){var e=Object(r.a)(["\n  subscription onlineUser {\n    onlineUser {\n      id\n      online\n      lastSeen\n    }\n  }\n"]);return o=function(){return e},e}function u(){var e=Object(r.a)(["\n  subscription newDirect {\n    newDirect {\n      id\n      user {\n        id\n        email\n        avatar\n        username\n        createdAt\n      }\n      lastMessage {\n        id\n        text\n        userId\n        unread\n        createdAt\n      }\n      messages {\n        id\n        text\n        userId\n        unread\n        createdAt\n      }\n      unread\n    }\n  }\n"]);return u=function(){return e},e}function s(){var e=Object(r.a)(["\n  subscription deleteDirect {\n    deleteDirect {\n      id\n    }\n  }\n"]);return s=function(){return e},e}function l(){var e=Object(r.a)(["\n  subscription deleteMessage($chatId: Int!) {\n    deleteMessage(chatId: $chatId) {\n      id\n      userId\n    }\n  }\n"]);return l=function(){return e},e}function d(){var e=Object(r.a)(["\n  subscription newMessage($chatId: Int!) {\n    newMessage(chatId: $chatId) {\n      id\n      text\n      userId\n      unread\n      createdAt\n    }\n  }\n"]);return d=function(){return e},e}var f=c()(d()),b=c()(l()),m=c()(s()),p=c()(u()),h=c()(o()),g=c()(i())},57:function(e,t,n){"use strict";var r=n(44),a=n(0),c=n.n(a),i=n(200),o=n(217),u=n(9),s=n(196),l=Object(s.a)((function(e){return{Avatar:{fontSize:e.typography.body1.fontSize,textTransform:"uppercase",color:e.palette.common.white}}})),d=Object(u.a)((function(e){return{badge:{backgroundColor:"#44b700",color:"#44b700",boxShadow:"0 0 0 2px ".concat(e.palette.background.paper),"&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"$ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}}))(i.a);t.a=function(e){var t=e.alt,n=void 0===t?"":t,a=e.src,i=Object(r.a)(e,["alt","src"]),u=l(),s=n.split(" ").slice(0,2).map((function(e){return e[0]})).join("");return c.a.createElement(d,{overlap:"circle",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",invisible:!i.online},c.a.createElement(o.a,{src:a,className:u.Avatar,style:{background:a}},s))}},60:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(43),a=n(110),c=n(15),i=n(61),o=n(65),u={isAuthorized:!!localStorage.getItem("token")},s=Object(r.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case i.a.auth.LOGIN:return o.a.set(r),Object(c.a)({},e,{isAuthorized:!0});case i.a.auth.LOGOUT:return o.a.remove(),Object(c.a)({},e,{isAuthorized:!1});default:return Object(c.a)({},e)}}}),l=Object(r.createStore)(s,{},Object(a.composeWithDevTools)(r.applyMiddleware.apply(void 0,[])))},61:function(e,t,n){"use strict";t.a={auth:{LOGIN:"LOGIN",LOGOUT:"LOGOUT"}}},65:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(61),a=function(e){return{type:r.a.auth.LOGIN,payload:e}},c=function(){return{type:r.a.auth.LOGOUT}},i={set:function(e){var t=e.token,n=e.refreshToken;localStorage.setItem("token",t),localStorage.setItem("refreshToken",n)},remove:function(){localStorage.removeItem("token"),localStorage.removeItem("refreshToken")}}},69:function(e,t,n){"use strict";var r=n(65);n.d(t,"a",(function(){return r.b})),n.d(t,"b",(function(){return r.c}))}},[[131,2,3]]]);
//# sourceMappingURL=main.b855e019.chunk.js.map