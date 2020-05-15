(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[7],{226:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),i=a(30),o=a.n(i),s=a(45),l=a(70),u=a(75),d=a(20),p=a(71),m=a(159),b=a(213),f=a(214),h=a(215),g=a(208),v=a(230),y=a(33),O=a(149),j=Object(O.a)((function(e){return{Avatar:{fontSize:e.typography.body1.fontSize,textTransform:"uppercase",color:e.palette.common.white},Avatar_small:{width:30,height:30}}})),E=a(162),w=a.n(E),x=Object(y.a)((function(e){return{badge:{backgroundColor:"#44b700",color:"#44b700",boxShadow:"0 0 0 2px ".concat(e.palette.background.paper),"&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"$ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}}))(g.a),k=function(e){var t=e.alt,a=void 0===t?"":t,n=e.src,c=void 0===n?"":n,i=e.online,o=Object(p.a)(e,["alt","src","online"]),s=j(),u=/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/.test(c);return r.a.createElement(x,{overlap:"circle",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",invisible:!i},r.a.createElement(v.a,{src:u?c:void 0,className:w()(s.Avatar,Object(l.a)({},s["Avatar_".concat(o.size)],o.size)),style:u?{}:{background:c}},a.split(" ").map((function(e){return Object(m.a)(e,1)[0]})).join("")))},C=Object(O.a)((function(e){return{ChatWindow:{height:"100%",maxHeight:"calc(100% - 64px)"},ChatWindow_content:{height:"100%",overflow:"auto",padding:"".concat(e.spacing(3),"px"),"&::-webkit-scrollbar":{width:5,background:"transparent","&-thumb":{background:e.palette.action.selected,borderRadius:3*e.shape.borderRadius,display:"none"}},"&:hover::-webkit-scrollbar-thumb":{display:"block"}},ChatWindow_empty:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},ChatWindow_input_wrapper:{minHeight:64,display:"flex",alignItems:"center",width:"100%","& .MuiInputBase-root":{fontSize:e.typography.body2.fontSize},paddingLeft:e.spacing(2)},ChatWindow_input:{height:"100%",minHeight:48,"& .MuiInputBase-inputMultiline":{"&::-webkit-scrollbar":{display:"none"}}}}})),_=function(e){e.current&&(e.current.scrollTop=e.current.scrollHeight)},M=Object(n.forwardRef)((function(e,t){var a=e.messages,c=e.onLoadMore,i=e.renderMessages,l=C();Object(n.useEffect)((function(){!function(){var e=t.current,n=e.scrollTop,r=e.scrollHeight,c=e.offsetHeight;(a.length<=20||n+c+300>r)&&_(t)}()}),[a]);var u=function(){var e=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.current.scrollTop<200)){e.next=3;break}return e.next=3,c();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:l.ChatWindow},r.a.createElement("div",{ref:t,onScroll:u,className:l.ChatWindow_content},i(a)))})),I=r.a.memo(M),S=a(229),D=a(210),T=a(187),N=a.n(T),z=a(27),W=a(69),R=a(209),A=r.a.memo((function(e){var t=e.chatId,a=e.username,c=Object(p.a)(e,["chatId","username"]),i=Object(z.h)(),o=C(),s=Object(n.useRef)(),l=Object(n.useState)(""),u=Object(m.a)(l,2),d=u[0],b=u[1],f=Object(n.useState)(!1),h=Object(m.a)(f,2),g=h[0],v=h[1],y=Object(W.v)(),O=Object(m.a)(y,1)[0],j=Object(R.a)((function(){O({variables:{chatId:t,username:""}}).then((function(){return v(!1)}))}),500),E=Object(m.a)(j,1)[0];Object(n.useEffect)((function(){s.current&&s.current.focus(),b("")}),[i]);var w=function(){d.trim().length&&c.onSubmit(d),b("")};return r.a.createElement("div",{className:o.ChatWindow_input_wrapper},r.a.createElement(S.a,{fullWidth:!0,multiline:!0,ref:s,rowsMax:12,value:d,onKeyUp:function(){t&&E()},onKeyDown:function(){!g&&t&&(v(!0),O({variables:{chatId:t,username:a}}))},onChange:function(e){b(e.target.value)},onKeyPress:function(e){"Enter"!==e.key||e.shiftKey||(e.preventDefault(),w())},placeholder:"Write a message...",className:o.ChatWindow_input}),r.a.createElement(D.a,{onClick:function(){s.current&&s.current.focus(),w()},disabled:!d.trim().length},r.a.createElement(N.a,null)))})),L=a(231),H=Object(O.a)((function(e){return{StyledChip:{alignSelf:"center",background:e.palette.action.hover,"& .MuiChip-label":{}}}})),Q=function(e){var t=H();return r.a.createElement(L.a,Object.assign({className:t.StyledChip,size:"small"},e))},U=a(151),P=a(190),B=a(212),Z=function(e){var t=e.anchorEl,a=e.onClose,n=e.onDelete,c=e.onCopy,i=function(e){return function(){e(),a()}};return r.a.createElement(P.a,{anchorEl:t,open:Boolean(t),onClose:a},r.a.createElement(B.a,{dense:!0,onClick:i(n)},"Delete Message"),r.a.createElement(B.a,{dense:!0,onClick:i(c)},"Copy Text"))},F=Object(O.a)((function(e){return{Message:{display:"flex",position:"relative",maxWidth:"70%",padding:"".concat(e.spacing(1),"px ").concat(e.spacing(1.5),"px ").concat(e.spacing(.5),"px"),borderRadius:3*e.shape.borderRadius,"&:before":{position:"absolute",bottom:-1,width:15,height:20,content:"''"},"& p":{alignSelf:"flex-end",wordWrap:"break-word",overflowWrap:"break-word",paddingBottom:e.spacing(2),minWidth:20},"& span":{alignSelf:"flex-end",opacity:.54}},Message_content:{display:"flex",margin:"".concat(e.spacing(1),"px 0")},Message_content_receiver:{justifyContent:"flex-start"},Message_content_sender:{justifyContent:"flex-end"},Message_receiver:{background:"dark"===e.palette.type?e.lighten(e.palette.background.default,.235):e.darken(e.palette.background.default,.057),"&:before":{left:-10,transform:"rotate(-15deg)",borderBottom:"15px solid ".concat("dark"===e.palette.type?e.lighten(e.palette.background.default,.235):e.darken(e.palette.background.default,.057)),borderLeft:"15px solid transparent"}},Message_sender:{background:e.palette.secondary.main,color:e.palette.getContrastText(e.palette.secondary.main),"&:before":{right:-10,transform:"rotate(15deg)",borderBottom:"15px solid ".concat(e.palette.secondary.main),borderRight:"15px solid transparent"}}}})),q=function(e){var t,a,i=e.text,o=e.date,s=e.isOwner,u=e.menuProps,d=F(),p=Object(n.useState)(null),b=Object(m.a)(p,2),f=b[0],h=b[1];return r.a.createElement("div",{className:w()(d.Message_content,(t={},Object(l.a)(t,d.Message_content_sender,s),Object(l.a)(t,d.Message_content_receiver,!s),t))},r.a.createElement("div",{onContextMenu:function(e){e.preventDefault(),h(e.currentTarget)},className:w()(d.Message,(a={},Object(l.a)(a,d.Message_sender,s),Object(l.a)(a,d.Message_receiver,!s),a))},r.a.createElement(U.a,{variant:"body2"},i),r.a.createElement(U.a,{variant:"caption"},Object(c.d)(o))),r.a.createElement(Z,Object.assign({anchorEl:f,onClose:function(){return h(null)}},u,{onCopy:function(){navigator.clipboard.writeText(i)}})))},K=a(82),$=Object(O.a)((function(e){return{Typing:{display:"inline-flex",justifyContent:"space-between",alignItems:"center",color:e.palette.text.secondary,"& span":{width:5,height:5,marginRight:4,background:e.palette.text.secondary,borderRadius:"50%","&:nth-child(1)":{animation:"$animation 1s ease-in-out infinite 0s"},"&:nth-child(2)":{animation:"$animation 1s ease-in-out infinite 0.2s"},"&:nth-child(3)":{animation:"$animation 1s ease-in-out infinite 0.4s"}}},Typing_secondary:{color:e.palette.secondary[200],"& span":{background:e.palette.secondary[200]}},"@keyframes animation":{"0%, 100%":{transform:"scale(1)",opacity:1},"50%":{transform:"scale(.8)",opacity:.5}}}})),J=function(e){var t=e.variant,a=$();return r.a.createElement("span",{className:w()(a.Typing,Object(l.a)({},a.Typing_secondary,"secondary"===t))},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),"typing")},Y=Object(O.a)((function(e){return{DirectChat:{position:"relative",width:"100%",height:"100%",overflow:"hidden"},DirectChat_header:{minHeight:64,paddingLeft:e.spacing(1),paddingRight:e.spacing(1),display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid ".concat(e.palette.divider)},DirectChat_header_status:{color:e.palette.secondary[200]},DirectChat_content:{height:"100%",maxHeight:"calc(100% - 64px)",overflowY:"scroll",position:"relative","&::-webkit-scrollbar":{display:"none"}},DirectChat_messageWrapper:{display:"flex",flexDirection:"column"}}})),G=a(29),V=r.a.memo((function(e){var t=e.chatId,a=e.recipient,i=e.messages,d=e.onCreateMessage,p=e.onDeleteMessage,m=e.onLoadMoreMessages,g=Object(G.f)((function(e){var a=e.typingUsers,n=e.user;return{user:n,isTyping:a[t]===n.username?"":a[t]}})),v=g.isTyping,y=g.user,O=Y(),j=r.a.useRef(),E=Object(c.i)(Object(u.a)(i).reverse()),x=function(){var e=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t).then((function(){_(j)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=Object(n.useCallback)((function(e){return e.length?Object(u.a)(e).reverse().map((function(e,t){var a=Object(c.b)(e.createdAt,"days"),n=t===E[a]&&r.a.createElement(Q,{label:Object(c.h)(e.createdAt)});return r.a.createElement("div",{key:e.id,className:O.DirectChat_messageWrapper},n,r.a.createElement(q,{text:e.text,date:e.createdAt,isOwner:e.userId===y.id,menuProps:{onDelete:p(e.id)}}))})):r.a.createElement(K.a,null)}),[t,i,p]);return r.a.createElement("div",{className:O.DirectChat},r.a.createElement("div",{className:O.DirectChat_header},r.a.createElement(b.a,{dense:!0},r.a.createElement(f.a,{primary:a.username,primaryTypographyProps:{component:"div"},secondary:v?r.a.createElement(J,{variant:"secondary"}):a.online?"online":"last seen at ".concat(Object(c.d)(a.lastSeen)),secondaryTypographyProps:{variant:"caption",className:w()(Object(l.a)({},O.DirectChat_header_status,a.online))}}),r.a.createElement(k,{src:a.avatar,alt:a.username,online:a.online}))),r.a.createElement("div",{className:O.DirectChat_content},r.a.createElement(I,{ref:j,messages:i,onLoadMore:m,renderMessages:C}),r.a.createElement(h.a,null),r.a.createElement(A,{chatId:t,username:y.username,onSubmit:x})))})),X=a(38),ee=function(e){var t,a,i,b,f,h,g,v=e.userId,y=Object(X.b)(),O=Object(n.useState)({limit:20,hasMore:!0}),j=Object(m.a)(O,2),E=j[0],w=j[1],x=Object(W.p)({onError:c.c,skip:!v,variables:{userId:v}}),k=x.client,C=Object(p.a)(x,["client"]),_=Object(W.j)({onError:c.c}),M=Object(m.a)(_,1)[0],I=Object(W.m)({onError:c.c}),S=Object(m.a)(I,1)[0],D=Object(W.k)({onError:c.c}),T=Object(m.a)(D,1)[0],N=Object(W.n)({onError:c.c}),z=Object(m.a)(N,1)[0],R=Object(W.t)({onError:c.c}),A=Object(m.a)(R,1)[0],L=Object(W.v)(),H=Object(m.a)(L,1)[0],Q=null!==(t=null===C||void 0===C||null===(a=C.data)||void 0===a?void 0:a.recipient)&&void 0!==t?t:{},U=null!==(i=null===C||void 0===C||null===(b=C.data)||void 0===b||null===(f=b.direct)||void 0===f?void 0:f.id)&&void 0!==i?i:null,P=Object(W.q)({onError:c.c,skip:!U,variables:{chatId:U},notifyOnNetworkStatusChange:!0}),B=null!==(h=null===(g=P.data)||void 0===g?void 0:g.messages)&&void 0!==h?h:[];Object(n.useEffect)((function(){w((function(e){return Object(d.a)({},e,{hasMore:!0})}))}),[v]);Object(n.useEffect)((function(){var e=function(){return P.subscribeToMore({document:W.f,variables:{chatIds:[U]},updateQuery:function(e,t){var a=t.subscriptionData;if(!a.data)return e;var n=e.messages.filter((function(e){return a.data.messageDeleted.ids!==e.id}));return k.writeQuery({query:W.d,data:{messages:n}}),{messages:n}}})},t=function(){return P.subscribeToMore({document:W.e,variables:{chatIds:[U]},updateQuery:function(e,t){var a=t.subscriptionData;return a.data?{messages:[a.data.messageCreated].concat(Object(u.a)(e.messages))}:e}})}(),a=e();return function(){t(),a()}}),[P.subscribeToMore,U]),Object(n.useEffect)((function(){var e=function(){return C.subscribeToMore({document:W.b,updateQuery:function(e,t){var a=t.subscriptionData;return a.data&&a.data.direct.id===U?Object(d.a)({},e,{direct:null}):e}})},t=function(){return C.subscribeToMore({document:W.a,updateQuery:function(e,t){var a=t.subscriptionData;return a.data?Object(d.a)({},e,{direct:a.data.direct}):e}})}(),a=e();return function(){t(),a()}}),[C,U]),Object(n.useEffect)((function(){return U?C.subscribeToMore({document:W.i,variables:{chatId:U},updateQuery:function(e,t){var a=t.subscriptionData;return a.data&&y(Object(G.a)(Object(l.a)({},U,a.data.typingUser))),e}}):function(){}}),[C,U]);var Z=function(){var e=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(U){e.next=6;break}return e.next=3,M({variables:{text:t,userId:Q.id}});case 3:return e.abrupt("return",e.sent);case 6:return e.next=8,T({variables:{text:t,chatId:U}}).then((function(){return H({variables:{chatId:U,username:""}})}));case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(V,{chatId:U,recipient:Q,messages:B,onCreateMessage:Z,onDeleteMessage:function(e){return Object(s.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(1!==(null===B||void 0===B?void 0:B.length)){t.next=5;break}return t.next=3,S({variables:{id:U}});case 3:t.next=7;break;case 5:return t.next=7,z({variables:{id:e}});case 7:case"end":return t.stop()}}),t)})))},onReadMessage:function(e){return A({variables:{id:e}})},onLoadMoreMessages:function(){B.length&&E.hasMore&&U&&!P.loading&&P.fetchMore({variables:{chatId:U,offset:B.length},updateQuery:function(e,t){var a=t.fetchMoreResult;return a?(a.messages.length<E.limit&&w((function(e){return Object(d.a)({},e,{hasMore:!1})})),{messages:[].concat(Object(u.a)(e.messages),Object(u.a)(a.messages))}):e}})}})},te=a(221),ae=Object(O.a)((function(e){return{Sidebar:{position:"relative",width:"100%",maxWidth:e.props.sidebar,minWidth:e.props.sidebarMin},Sidebar_main:{position:"relative",width:"100%",height:"100%",overflow:"hidden",background:"dark"===e.palette.type?e.palette.action.selected:e.palette.action.hover,borderRight:"1px solid ".concat(e.palette.divider)},Sidebar_header:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"".concat(e.spacing(.5),"px ").concat(e.spacing(3),"px"),minHeight:64},Sidebar_searchbar:{background:e.palette.action.selected,padding:"0 ".concat(e.spacing(1),"px"),fontSize:e.typography.body2.fontSize,minHeight:32,marginLeft:e.spacing(1),borderRadius:e.shape.borderRadius},Sidebar_content:{height:"100%",maxHeight:"calc(100% - 64px)",overflowY:"scroll",position:"relative","&::-webkit-scrollbar":{display:"none"}}}})),ne=a(216),re=a(72),ce=Object(O.a)((function(e){return{UserItem_primary:Object(d.a)({},e.props.classes.ellipsis),UserItem_secondary:Object(d.a)({},e.props.classes.ellipsis,{color:e.palette.secondary[200]})}})),ie=function(e){var t=e.link,a=e.user,n=Object(p.a)(e,["link","user"]),c=ce();return r.a.createElement(b.a,Object.assign({},n,{dense:!0,button:!0,to:t,component:re.b}),r.a.createElement(ne.a,null,r.a.createElement(k,{src:a.avatar,alt:a.username,online:a.online})),r.a.createElement(f.a,{primary:a.username,primaryTypographyProps:{component:"div",className:c.UserItem_primary},secondary:"@".concat(a.username),secondaryTypographyProps:{variant:"caption",component:"div",className:c.UserItem_secondary}}))},oe=Object(O.a)((function(e){return{ChatItem_badge_root:{height:15},ChatItem_badge_badge:{position:"relative",transform:"none",height:"inherit"},ChatItem_primary:{display:"flex"},ChatItem_secondary:{display:"flex",alignItems:"center",height:20},ChatItem_primaryText:Object(d.a)({width:"100%"},e.props.classes.ellipsis),ChatItem_secondaryText:Object(d.a)({width:"100%",marginRight:e.spacing(1)},e.props.classes.ellipsis)}})),se=function(e){var t=e.link,a=e.date,n=e.avatar,i=e.online,o=e.unread,s=e.typing,l=void 0!==s&&s,u=e.primary,d=e.secondary,m=Object(p.a)(e,["link","date","avatar","online","unread","typing","primary","secondary"]),h=oe();return r.a.createElement(b.a,Object.assign({dense:!0,button:!0,to:t,component:re.b,disableRipple:!0},m),r.a.createElement(ne.a,null,r.a.createElement(k,{src:n,alt:u,online:i})),r.a.createElement(f.a,{primary:r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,{variant:"body2",className:h.ChatItem_primaryText},u),r.a.createElement(U.a,{variant:"caption",color:"textSecondary"},Object(c.d)(a))),primaryTypographyProps:{className:h.ChatItem_primary,component:"div"},secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,{variant:"caption",className:h.ChatItem_secondaryText},l?r.a.createElement(J,null):d),r.a.createElement(g.a,{max:50,classes:{badge:h.ChatItem_badge_badge,root:h.ChatItem_badge_root},badgeContent:o,color:"secondary"})),secondaryTypographyProps:{className:h.ChatItem_secondary,component:"div"}}))},le=function(e){var t,a=e.anchorEl,n=e.onClose,c=e.onDelete;return r.a.createElement(P.a,{anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},open:Boolean(a),onClose:n},r.a.createElement(B.a,{dense:!0,onClick:(t=c,function(){t(),n()})},"Delete chat"))},ue=function(e){var t=e.direct,a=e.typingUser,i=(e.onDelete,e.subscribtion),o=Object(p.a)(e,["direct","typingUser","onDelete","subscribtion"]),s=Object(W.m)({onError:c.c}),l=Object(m.a)(s,1)[0],u=Object(n.useState)(null),d=Object(m.a)(u,2),b=d[0],f=d[1];Object(n.useEffect)((function(){var e=i(t.id);return function(){return e(t.id)}}),[t.id,i]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(se,Object.assign({typing:a===t.user.username?a:"",unread:t.unread,avatar:t.user.avatar,online:t.user.online,primary:t.user.username,secondary:t.lastMessage.text,link:"/me?p=".concat(t.user.id),date:t.lastMessage.createdAt,onContextMenu:function(e){e.preventDefault(),f(e.currentTarget)}},o)),r.a.createElement(le,{anchorEl:b,onClose:function(){return f(null)},onDelete:function(){l({variables:{id:t.id}})}}))},de=a(211),pe=a(217),me=Object(O.a)((function(e){return{StyledList:{},StyledList_subheader:{background:e.palette.action.selected,lineHeight:"32px",fontSize:e.typography.body2.fontSize}}})),be=function(e){var t=e.subheader,a=e.visible,n=void 0===a||a,c=Object(p.a)(e,["subheader","visible"]),i=me();return n?r.a.createElement(de.a,Object.assign({},c,{subheader:t&&r.a.createElement(pe.a,{component:"div",className:i.StyledList_subheader},t)})):null},fe=a(218),he=function(e){return r.a.createElement(D.a,Object.assign({edge:"start",color:"inherit"},e),r.a.createElement(fe.a,null))},ge=a(220),ve=a(232),ye=a(219),Oe=Object(O.a)((function(e){return{MenuDrawer:{position:"absolute",top:0,left:0,width:"calc(100% - 16px)",height:"100%",zIndex:e.zIndex.tooltip,backgroundImage:"linear-gradient(90deg, ".concat(e.palette.background.default,", ").concat(e.palette.background.paper,")"),borderRight:"1px solid ".concat(e.palette.divider)},MenuDrawer_listItem:{"& p":{width:"100%",marginLeft:e.spacing(2)},"&:last-child p":{color:e.palette.error.dark,marginLeft:0}},MenuDrawer_backdrop:{left:"auto",right:"auto",width:"100%",maxWidth:960,zIndex:1300,marginLeft:-24}}})),je=(ye.a,function(e){var t=e.user,a=e.open,n=e.onClose,c=e.onLogout,i=Oe();return r.a.createElement(r.a.Fragment,null,r.a.createElement(ge.a,{in:a,direction:"right",unmountOnExit:!0,mountOnEnter:!0},r.a.createElement("div",{className:i.MenuDrawer},r.a.createElement(de.a,null,r.a.createElement(b.a,null,r.a.createElement(k,{src:t.avatar,alt:t.username,online:t.online})),r.a.createElement(b.a,null,r.a.createElement(f.a,{primary:t.username,secondary:t.email}))),r.a.createElement(de.a,null,r.a.createElement(b.a,{button:!0,className:i.MenuDrawer_listItem,component:"div",onClick:c},r.a.createElement(U.a,{variant:"body2",align:"center"},"Log Out"))))),r.a.createElement(ve.a,{open:a,onClick:n,className:i.MenuDrawer_backdrop}))}),Ee=function(e){var t=e.user,a=void 0===t?{}:t,n=e.open,i=e.onToggle,o=Object(z.g)(),s=Object(W.s)(),l=Object(m.a)(s,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(he,{onClick:i}),r.a.createElement(je,{user:a,open:n,onClose:i,onLogout:function(){return l().then((function(){return Object(c.f)(o)})).then(i)}}))},we=function(e){var t=e.self,a=e.chatId,c=e.chats,i=e.users,o=e.onSearch,s=e.directSubscription,l=ae(),u=Object(G.e)(),d=Object(n.useState)(""),p=Object(m.a)(d,2),b=p[0],f=p[1],h=Object(G.f)((function(e){return e})),g=h.menuIsOpen,v=h.typingUsers,y=c.sort((function(e,t){return t.lastMessage.createdAt-e.lastMessage.createdAt})).filter((function(e){return e.user.username.startsWith(b)})),O=y.map((function(e){return e.user.id})),j=function(){return f("")};return r.a.createElement("div",{className:l.Sidebar},r.a.createElement("div",{className:l.Sidebar_main},r.a.createElement("div",{className:l.Sidebar_header},r.a.createElement(Ee,{open:g,user:t,onToggle:function(){return u(Object(G.c)())}}),r.a.createElement(S.a,{fullWidth:!0,size:"small",value:b,placeholder:"Search",onChange:function(e){var t=e.target;f(t.value),o(t.value)},className:l.Sidebar_searchbar})),r.a.createElement("div",{className:l.Sidebar_content},r.a.createElement(be,{disablePadding:!0,visible:c.length},y.map((function(e){return r.a.createElement(ue,{key:e.id,direct:e,subscribtion:s,typingUser:v[e.id],selected:!b&&e.user.id===a,onClick:j})}))),r.a.createElement(be,{subheader:"Global search",visible:b,disablePadding:!0},i.map((function(e){return!O.includes(e.id)&&r.a.createElement(ie,{key:e.id,user:e,link:"/me?p=".concat(e.id),onClick:j})}))))))},xe=function(){var e,t,a;Object(W.l)({onCompleted:function(e){return u(Object(G.b)(e.self))}});var i=Object(z.h)(),u=Object(G.e)(),p=Object(G.f)((function(e){return e.user})),b=Object(W.o)(),f=b.data,h=b.subscribeToMore,g=b.client,v=Object(W.w)(),y=Object(m.a)(v,2),O=y[0],j=y[1].data,E=Object(c.g)(i).p;Object(n.useEffect)((function(){var e,t=(null!==(e=null===f||void 0===f?void 0:f.directs)&&void 0!==e?e:[]).map((function(e){return e.id})),a=function(e){return h({document:W.e,variables:{chatIds:e},updateQuery:function(e,t){var a=t.subscriptionData;if(!a.data)return e;var n=a.data.messageCreated,r=n.userId!==p.id?1:0;return{directs:e.directs.map((function(e){return e.id===n.chatId?Object(d.a)({},e,{lastMessage:n,unread:e.unread+r}):e}))}}})},n=function(){return h({document:W.a,updateQuery:function(e,t){var a=t.subscriptionData;return a.data?{directs:e.directs.concat(a.data.direct)}:e}})},r=function(){return h({document:W.b,updateQuery:function(){var e=Object(s.a)(o.a.mark((function e(t,a){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((n=a.subscriptionData).data){e.next=3;break}return e.abrupt("return",t);case 3:return r=t.directs.filter((function(e){return e.id!==n.data.direct.id})),g.writeQuery({query:W.c,data:{directs:r}}),e.abrupt("return",{directs:r});case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()})},c=function(){return h({document:W.g})},i=function(){return h({document:W.f,variables:{chatIds:t},updateQuery:function(){var e=Object(s.a)(o.a.mark((function e(t,a){var n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((n=a.subscriptionData).data){e.next=3;break}return e.abrupt("return",t);case 3:return r=n.data.messageDeleted,c=t.directs.map((function(e){return e.id===r.chat.id||r.ids===e.lastMessage.id?r.chat:e})),g.writeQuery({query:W.c,data:{directs:c}}),e.abrupt("return",{directs:c});case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()})}(t),l=a(t),u=n(),m=r(),b=c();return function(){i(),l(),u(),m(),b()}}),[(null!==(e=null===f||void 0===f?void 0:f.directs)&&void 0!==e?e:[]).length],h);var w=Object(R.a)((function(e){O({variables:{username:e}})}),300),x=Object(m.a)(w,1)[0];return r.a.createElement(we,{chatId:E,chats:null!==(t=null===f||void 0===f?void 0:f.directs)&&void 0!==t?t:[],users:null!==(a=null===j||void 0===j?void 0:j.users)&&void 0!==a?a:[],self:p,onSearch:x,directSubscription:function(e){return h({document:W.i,variables:{chatId:e},updateQuery:function(t,a){var n=a.subscriptionData;return n.data?(u(Object(G.a)(Object(l.a)({},e,n.data.typingUser))),t):t}})}})},ke=Object(O.a)((function(e){return{container:{display:"flex",overflow:"hidden",padding:0,minHeight:"100vh",maxHeight:"100vh"},contentShift:{width:"100%",background:e.palette.background.paper,minWidth:e.props.sidebarMin}}})),Ce=function(e){var t=ke();return r.a.createElement(te.a,{maxWidth:"md",className:t.container},r.a.createElement(xe,null),r.a.createElement("div",{className:t.contentShift},e.children))};t.default=function(e){var t=e.location,a=Object(c.g)(t).p;return r.a.createElement(Ce,null,a?r.a.createElement(ee,{userId:a}):null)}}}]);