(this["webpackJsonpchat-react"]=this["webpackJsonpchat-react"]||[]).push([[0],{101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){},115:function(e,t,n){},214:function(e,t,n){},215:function(e,t,n){},216:function(e,t,n){},217:function(e,t,n){},218:function(e,t,n){},219:function(e,t,n){},220:function(e,t,n){},221:function(e,t,n){},222:function(e,t,n){},223:function(e,t,n){},224:function(e,t,n){},226:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=n(42),c=n.n(s),i=n(21),o=n(35),l=(n(89),n(15)),u=n(10),d=n(7),j=n(5),m=n.n(j),b=n(11),f=n(3),h=n(6),O=function(e){return o.b.error(e,{position:"top-center",draggable:!1})},v=function(e){o.b.success(e,{position:"top-center",autoClose:2e3,hideProgressBar:!0,draggable:!1})},g=Object(h.c)(Object(b.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://109.194.37.212:93/api/auth");case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))),x=Object(h.f)({genders:[]}).on(g.done,(function(e,t){return t.result})),p=Object(h.c)(function(){var e=Object(b.a)(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("login",t.login),n.append("password",t.password),n.append("captcha",t.captcha),e.next=6,fetch("http://109.194.37.212:93/api/auth/login",{method:"POST",body:n});case 6:if((r=e.sent).ok){e.next=10;break}return e.next=10,r.text().then((function(e){throw Error(e)}));case 10:return e.abrupt("return",r.text());case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());p.done.watch((function(e){var t=e.result;localStorage.setItem("wsConnectKey",t.replace(/^"(.*)"$/,"$1")),E()})),p.fail.watch((function(e){var t=e.error;O(t.message)}));var N=Object(h.c)(function(){var e=Object(b.a)(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("login",t.login),n.append("password",t.password),n.append("password_confirm",t.passwordConfirm),n.append("name",t.name),n.append("gender_id",t.genderId),n.append("captcha",t.captcha),e.next=9,fetch("http://109.194.37.212:93/api/auth/register",{method:"POST",body:n});case 9:if((r=e.sent).ok){e.next=13;break}return e.next=13,r.text().then((function(e){throw Error(e)}));case 13:return e.abrupt("return",r.text());case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());N.done.watch((function(e){var t=e.result;v(t)})),N.fail.watch((function(e){var t=e.error;O(t.message)}));var _=Object(h.f)(!!localStorage.getItem("wsConnectKey")).on(p.done,(function(){return!0})),w=Object(h.f)(JSON.parse(localStorage.getItem("messages")||"[]")),y=Object(h.d)();w.on(y,(function(e,t){return e.push(Object(d.a)(Object(d.a)({},t),{},{id:Date.now()})),localStorage.setItem("messages",JSON.stringify(e)),Object(f.a)(e)}));var C=Object(h.d)(),S=(Object(h.d)(),Object(h.f)([]).on(C,(function(e,t){return t[t.length-1].you=!0,t}))),k=Object(h.f)(!0).on(C,(function(){return!1})),F=Object(h.c)(function(){var e=Object(b.a)(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("0",t.file),e.next=4,fetch("http://109.194.37.212:93/api/upload",{method:"POST",body:n});case 4:if((r=e.sent).ok){e.next=8;break}return e.next=8,r.text().then((function(e){throw Error(e)}));case 8:return e.abrupt("return",r.text());case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());F.done.watch((function(e){var t=e.params,n=e.result;t.func("http://109.194.37.212:93".concat(n)),v("file is ready to send")})),F.fail.watch((function(e){var t=e.error;O(t.message)}));var I,E=Object(h.d)(),B=Object(h.f)(_&&new WebSocket("ws://109.194.37.212:2346/?type=test&ws_id=".concat(localStorage.getItem("wsConnectKey")||""))).on(E,(function(){return new WebSocket("ws://109.194.37.212:2346/?type=test&ws_id=".concat(localStorage.getItem("wsConnectKey")||""))})),D=n(2),R=n.n(D),L=(n(91),n(0)),T=function(e){var t=e.className,n=void 0===t?"":t,r=R()("sk-fading-circle",n);return Object(L.jsxs)("div",{className:r,children:[Object(L.jsx)("div",{className:"sk-circle1 sk-circle"}),Object(L.jsx)("div",{className:"sk-circle2 sk-circle"}),Object(L.jsx)("div",{className:"sk-circle3 sk-circle"}),Object(L.jsx)("div",{className:"sk-circle4 sk-circle"}),Object(L.jsx)("div",{className:"sk-circle5 sk-circle"}),Object(L.jsx)("div",{className:"sk-circle6 sk-circle"}),Object(L.jsx)("div",{className:"sk-circle7 sk-circle"}),Object(L.jsx)("div",{className:"sk-circle8 sk-circle"}),Object(L.jsx)("div",{className:"sk-circle9 sk-circle"}),Object(L.jsx)("div",{className:"sk-circle10 sk-circle"}),Object(L.jsx)("div",{className:"sk-circle11 sk-circle"}),Object(L.jsx)("div",{className:"sk-circle12 sk-circle"})]})},J=(n(93),function(e){var t=e.className,n=void 0===t?"":t,r=e.children;switch(e.variant){case"1":return Object(L.jsx)("h1",{className:R()("title1",n),children:r});case"2":return Object(L.jsx)("h2",{className:R()("title2",n),children:r});case"3":return Object(L.jsx)("h3",{className:R()("title3",n),children:r});case"4":return Object(L.jsx)("h4",{className:R()("title4",n),children:r});case"5":return Object(L.jsx)("p",{className:R()("text1",n),children:r});default:return Object(L.jsx)("p",{className:R()("text2",n),children:r})}}),P=(n(94),n(20)),A=(n(95),function(e){var t=e.className,n=void 0===t?"":t,r=Object(P.a)(e,["className"]),a=R()("avatar",n);return Object(L.jsx)("img",Object(d.a)({className:a,alt:"avatar"},r))}),q=(n(96),n.p+"static/media/arrow.d3fd6ea1.svg"),U=function(e){var t=e.className,n=void 0===t?"":t,r=R()("arrowButton",n);return Object(L.jsx)(i.b,{className:r,to:"/chat",children:Object(L.jsx)("img",{src:q,alt:"arrow"})})},z=n.p+"static/media/maleIcon.b2f2a417.svg",G=n.p+"static/media/femaleIcon.dba0f28f.svg",H=function(e){var t=e.className,n=void 0===t?"":t,r=e.title,a=e.subtitle,s=e.gender,c=R()("activity",n);return Object(L.jsxs)("div",{className:c,children:[Object(L.jsx)(U,{}),Object(L.jsx)(A,{className:"activity__avatar",src:"male"===s?z:G}),Object(L.jsxs)("div",{children:[Object(L.jsx)(J,{className:"activity__title",variant:"3",children:r}),Object(L.jsx)(J,{className:"activity__subtitle",variant:"5",children:a})]})]})},K=(n(101),function(e){var t=e.className,n=void 0===t?"":t,r=R()("noCardSelected",n);return Object(L.jsx)("div",{className:r,children:Object(L.jsx)(J,{className:"noCardSelected__text",variant:"5",children:"Select a chat to stary messaging"})})}),$=(n(102),function(e){var t=e.className,n=void 0===t?"":t,r=e.id,a=e.gender,s=e.title,c=e.subtitle,o=e.user,l=Object(u.h)(),d=R()("card",n,{active:Number(l.id)===r});return Object(L.jsxs)(i.b,{className:d,to:"/chat/".concat(r),children:[Object(L.jsx)(A,{className:"card__avatar",src:"male"===a?z:G}),Object(L.jsxs)("div",{children:[Object(L.jsx)(J,{className:"card__title",variant:"4",children:s}),Object(L.jsxs)(J,{className:"card__text",variant:"6",children:[o&&Object(L.jsx)("span",{className:"card__text prev",children:"You: "}),Object(L.jsx)("span",{children:c})]})]})]})}),W=(n(103),n.p+"static/media/lackCardsIcon.2a176518.svg"),Y=(n(104),function(e){var t=e.className,n=void 0===t?"":t,r=R()("lackCardsIcon",n);return Object(L.jsx)("img",{className:r,src:W,alt:"lack cards"})}),M=function(e){var t=e.className,n=void 0===t?"":t,r=R()("lackCards",n);return Object(L.jsxs)("div",{className:r,children:[Object(L.jsx)(Y,{}),Object(L.jsx)(J,{className:"lackCards__text",variant:"5",children:"There is no other users yet"})]})},V=(n(105),function(e){var t=e.className,n=void 0===t?"":t,r=e.users,s=e.messages,c=e.isLoading,i=R()("cardList",n),o=r.filter((function(e){return!e.you}))[0]?r.filter((function(e){return!e.you})).map((function(e){var t,n=s.filter((function(t){var n,a;return t.from===(null===e||void 0===e?void 0:e.name)&&t.to===(null===(n=r.filter((function(e){return e.you}))[0])||void 0===n?void 0:n.name)||t.from===(null===(a=r.filter((function(e){return e.you}))[0])||void 0===a?void 0:a.name)&&t.to===(null===e||void 0===e?void 0:e.name)})),c=n[n.length-1];return Object(L.jsx)(a.a.Fragment,{children:Object(L.jsx)($,{gender:e.gender,title:e.name,subtitle:(null===c||void 0===c?void 0:c.text)?null===c||void 0===c?void 0:c.text:(null===c||void 0===c?void 0:c.file)&&"file",id:e.id,user:c&&(null===c||void 0===c?void 0:c.from)===(null===(t=r.filter((function(e){return e.you}))[0])||void 0===t?void 0:t.name)})},e.id)})):Object(L.jsx)(M,{});return Object(L.jsx)("div",{className:i,children:c?Object(L.jsx)(T,{className:"cardList__loader"}):o})}),Q=n.p+"static/media/logo.515e9ce4.svg",X=(n(106),function(e){var t=e.className,n=void 0===t?"":t,r=R()("logo",n);return Object(L.jsx)("img",{className:r,src:Q,alt:"logo"})}),Z=(n(107),n.p+"static/media/profileIcon.58ae8dd4.svg"),ee=function(e){var t=e.className,n=void 0===t?"":t,r=R()("profileIcon",n);return Object(L.jsx)("div",{className:r,children:Object(L.jsx)("img",{src:Z,alt:"profile"})})},te=(n(108),function(e){var t=e.className,n=void 0===t?"":t,r=R()("header",n);return Object(L.jsxs)("header",{className:r,children:[Object(L.jsx)(X,{className:"header__logo"}),Object(L.jsx)(ee,{className:"header__profileIcon"})]})}),ne=n.p+"static/media/fileIcon.aa0e056d.svg",re=(n(109),function(e){var t,n,r,a,s=e.className,c=void 0===s?"":s,i=e.message,o=Object(l.a)(S),u=R()("message",c,{message__right:i.from===(null===(t=o.filter((function(e){return e.you}))[0])||void 0===t?void 0:t.name)});return Object(L.jsx)("div",{className:u,children:Object(L.jsxs)("div",{className:"message__inner",children:[i.file&&Object(L.jsxs)("a",{className:"message__file",href:null===(n=i.file)||void 0===n?void 0:n.href,children:[Object(L.jsx)("img",{className:"message__image",src:ne,alt:""}),Object(L.jsxs)("div",{children:[Object(L.jsx)(J,{variant:"4",children:null===(r=i.file)||void 0===r?void 0:r.name}),Object(L.jsxs)(J,{variant:"6",children:[Number(null===(a=i.file)||void 0===a?void 0:a.size)/1e6,"MB"]})]})]}),i.text&&Object(L.jsx)(J,{className:"message__text",variant:"5",children:i.text})]})})}),ae=(n(110),function(e){var t=e.className,n=void 0===t?"":t,s=e.messages,c=R()("messageList",n);return Object(r.useEffect)((function(){var e=document.getElementById("1");null!==e&&(e.scrollTop=e.scrollHeight)})),Object(L.jsx)("div",{className:c,id:"1",children:Object(L.jsx)("div",{className:"messageList__inner",children:s.map((function(e){return Object(L.jsx)(a.a.Fragment,{children:Object(L.jsx)(re,{message:e})},e.id)}))})})}),se=n(4),ce=(n(111),n.p+"static/media/sendIcon.246f991e.svg"),ie=function(e){var t=e.className,n=void 0===t?"":t,r=R()("sendButton",n);return Object(L.jsx)("button",{className:r,type:"submit",children:Object(L.jsx)("img",{src:ce,alt:"send"})})},oe=(n(112),function(e){var t=e.className,n=void 0===t?"":t,r=e.onChange,a=R()("sendFile",n);return Object(L.jsx)(L.Fragment,{children:Object(L.jsx)("label",{className:a,htmlFor:"upload-file",children:Object(L.jsx)("input",{id:"upload-file",type:"file",onChange:function(e){try{var t=e.target.files[0],n=t.type;t.size>2097152?O("the file must be less than 2MB"):"video/mp4"===n||"video/ogg"===n||"video/webm"===n||"audio/mpeg"===n||"audio/ogg"===n||"image/jpeg"===n||"image/gif"===n||"image/png"===n||"image/svg+xml"===n?r(t):O("valid file permissions: mp4/ogg/webm/mpeg/jpg/gif/png/svg")}catch(a){O("could not read the file")}}})})})}),le=(n(113),function(e){var t=e.className,n=void 0===t?"":t,r=e.onChange,a=e.value,s=R()("sendInput",n);return Object(L.jsx)(L.Fragment,{children:Object(L.jsx)("input",{className:s,placeholder:"Sending messages works too...",autoComplete:"off",value:a,onChange:function(e){return r(e.target.value)}})})}),ue=(n(114),function(e){var t,n=e.className,a=void 0===n?"":n,s=e.currentUser,c=R()("sendForm",a),i=Object(l.a)(F.pending),o=Object(l.a)(B),u=Object(l.a)(S),j=Object(r.useState)({text:""}),m=Object(se.a)(j,2),b=m[0],f=m[1];return Object(L.jsx)(L.Fragment,{children:Object(L.jsx)("form",{className:c,onSubmit:function(e){e.preventDefault(),(b.text||b.file)&&(o.send('"'.concat(JSON.stringify(Object(d.a)(Object(d.a)({},b),{},{from:u.filter((function(e){return e.you}))[0].name,to:s.name})),'"')),f({text:""}))},children:i?Object(L.jsx)(T,{className:"sendForm__loader"}):Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(oe,{onChange:function(e){F({file:e,func:function(t){return f((function(n){return Object(d.a)(Object(d.a)({},n),{},{file:{name:e.name,size:e.size,href:t}})}))}})}}),null===(t=b.file)||void 0===t?void 0:t.name,Object(L.jsx)(le,{onChange:function(e){f((function(t){return Object(d.a)(Object(d.a)({},t),{},{text:e})}))},value:b.text}),Object(L.jsx)(ie,{})]})})})}),de=(n(115),function(e){var t=e.currentUser,n=e.users,r=e.messages,a=e.isLoading,s=R()("chat__inner",{show:t}),c=n.filter((function(e){return!e.you}))[0]&&t?Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(H,{title:t.name,subtitle:"online",gender:t.gender}),Object(L.jsx)(ae,{messages:r.filter((function(e){var r,a;return e.from===(null===t||void 0===t?void 0:t.name)&&e.to===(null===(r=n.filter((function(e){return e.you}))[0])||void 0===r?void 0:r.name)||e.from===(null===(a=n.filter((function(e){return e.you}))[0])||void 0===a?void 0:a.name)&&e.to===(null===t||void 0===t?void 0:t.name)}))}),Object(L.jsx)(ue,{currentUser:t})]}):n.filter((function(e){return!e.you}))[0]&&Object(L.jsx)(K,{});return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(te,{className:t&&"disable"}),Object(L.jsxs)("main",{className:"chat",children:[Object(L.jsx)(V,{className:t&&"disable",users:n,isLoading:a,messages:r}),Object(L.jsx)("div",{className:s,children:a?Object(L.jsx)(T,{}):c})]})]})}),je=function(){var e=Object(l.a)(B);Object(r.useEffect)((function(){e.onopen=function(){e.send(JSON.stringify({type:"users_list"}))},e.onmessage=function(e){console.log(e),!function(e){try{JSON.parse(e)}catch(t){return!1}return!0}(e.data)||"users_list"!==JSON.parse(e.data).type?y(JSON.parse(e.data.replace(/^"(.*)"$/,"$1"))):C(JSON.parse(e.data).data.map((function(e,t){return Object(d.a)(Object(d.a)({},e),{},{id:t+1})})))}}),[]);var t=Object(u.h)(),n=Object(l.a)(k),a=Object(l.a)(S),s=a.filter((function(e){return e.id===Number(t.id)}))[0],c=Object(l.a)(w);return Object(L.jsx)(de,{messages:c,users:a,currentUser:s,isLoading:n})},me=n(12),be=n(16),fe=n(44),he=(n(214),function(e){var t=e.className,n=void 0===t?"":t,r=e.children,a=e.variant,s=e.error,c=Object(P.a)(e,["className","children","variant","error"]),i=R()("button",n,{white:"white"===a});return Object(L.jsx)("button",Object(d.a)(Object(d.a)({className:i,disabled:!!(null===s||void 0===s?void 0:s.login)||!!(null===s||void 0===s?void 0:s.password)||!!(null===s||void 0===s?void 0:s.captcha),type:"white"===a?"button":"submit"},c),{},{children:r}))}),Oe=(n(215),n(216),function(e){var t=e.className,n=void 0===t?"":t,r=e.children,a=e.htmlFor,s=R()("label",n);return Object(L.jsx)("label",{className:s,htmlFor:a,children:r})}),ve=(n(217),function(e){var t=e.className,n=void 0===t?"":t,r=e.error,a=e.isDirty,s=Object(P.a)(e,["className","error","isDirty"]),c=R()("input",n,{isDirty:a,error:!!r});return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("input",Object(d.a)({className:c,autoComplete:"off"},s)),r&&Object(L.jsx)("p",{className:"input__errorText",children:r})]})}),ge=function(e){var t=e.className,n=void 0===t?"":t,r=e.label,a=e.error,s=Object(P.a)(e,["className","label","error"]),c=R()("field",n,{error:!!a});return Object(L.jsxs)("div",{className:c,children:[Object(L.jsx)(Oe,{className:"field__label",htmlFor:r,children:r}),Object(L.jsx)(ve,Object(d.a)({id:r,error:a},s))]})},xe=(n(218),n(219),function(e){var t=e.className,n=void 0===t?"":t,a=R()("authCaptcha",n),s=Object(r.useState)("http://109.194.37.212:93/api/auth/captcha"),c=Object(se.a)(s,2),i=c[0],o=c[1];return Object(L.jsxs)("div",{className:a,children:[Object(L.jsx)("img",{src:i,alt:""}),Object(L.jsx)("button",{type:"button","aria-label":"refresh captcha",className:"authCaptcha__refresh",onClick:function(){fetch("http://109.194.37.212:93/api/auth/captcha?t=".concat(Date.now()),{headers:{"Access-Control-Expose-Headers":"Set-Cookie","Access-control-Allow-Origin":"*","Access-control-Allow-Credentials":"true"}}).then((function(e){return o(e.url)}))}})]})}),pe=be.a().shape({login:be.c().min(5).max(50).required(),password:be.c().min(8).max(32).required(),captcha:be.c().length(5).required()}),Ne=function(e){var t=e.className,n=void 0===t?"":t,r=R()("loginForm",n),a=Object(me.e)({resolver:Object(fe.a)(pe),defaultValues:{login:"",password:"",captcha:""}}),s=a.handleSubmit,c=a.formState.errors,i=a.control,o=Object(u.g)();return Object(L.jsxs)("form",{className:r,onSubmit:s((function(e){p(e)})),children:[Object(L.jsx)(me.a,{control:i,name:"login",render:function(e){var t=e.field,n=t.onChange,r=t.onBlur,a=e.fieldState,s=a.error,c=a.isDirty;return Object(L.jsx)(ge,{className:"loginForm__field",label:"User name",placeholder:"Input user name",error:null===s||void 0===s?void 0:s.message,onChange:n,onBlur:r,isDirty:c})}}),Object(L.jsx)(me.a,{control:i,name:"password",render:function(e){var t=e.field,n=t.onChange,r=t.onBlur,a=e.fieldState,s=a.error,c=a.isDirty;return Object(L.jsx)(ge,{className:"loginForm__field",label:"Password",placeholder:"Input password",error:null===s||void 0===s?void 0:s.message,type:"password",onChange:n,onBlur:r,isDirty:c})}}),Object(L.jsxs)("div",{className:"loginForm__captcha",children:[Object(L.jsx)(me.a,{control:i,name:"captcha",render:function(e){var t=e.field,n=t.onChange,r=t.onBlur,a=e.fieldState,s=a.error,c=a.isDirty;return Object(L.jsx)(ge,{className:"loginForm__field",label:"Security code",placeholder:"Security code",error:null===s||void 0===s?void 0:s.message,onChange:n,onBlur:r,isDirty:c})}}),Object(L.jsx)(xe,{})]}),Object(L.jsxs)("div",{className:"loginForm__buttons",children:[Object(L.jsx)(he,{error:c,className:"loginForm__button",children:"Log In"}),Object(L.jsx)(he,{className:"loginForm__button",variant:"white",onClick:function(){return o.push("/registration")},children:"Registration"})]})]})},_e=(n(220),function(){return Object(L.jsxs)("main",{className:"login",children:[Object(L.jsxs)("div",{className:"login__inner",children:[Object(L.jsx)(X,{className:"login__logo"}),Object(L.jsxs)(J,{variant:"1",children:[Object(L.jsx)("span",{children:"Wellcome to "}),Object(L.jsx)("span",{className:"login__titleBlue",children:"Chatty"}),Object(L.jsx)("span",{className:"login__titleLightBlue",children:"!"})]}),Object(L.jsx)(J,{className:"login__subtitle",variant:"2",children:"Please, autorize yourself"}),Object(L.jsx)(Ne,{})]}),Object(L.jsx)("span",{className:"login__span"})]})}),we=function(){return Object(L.jsx)(_e,{})},ye=(n(221),n(222),n(223),n(224),function(e){var t=e.className,n=void 0===t?"":t,a=e.error,s=e.onChange,c=e.options,i=Object(P.a)(e,["className","error","onChange","options"]),o=Object(r.useRef)(null),l=Object(r.useState)(!1),u=Object(se.a)(l,2),j=u[0],f=u[1],h=Object(r.useState)({id:"",gender:""}),O=Object(se.a)(h,2),v=O[0],g=O[1],x=R()("select",n),p=R()("select__button",{open:j,selected:v.id.length>0,error:!!a}),N=R()("select__inner",{open:j}),_=function(){var e=Object(b.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g((function(){return t}));case 2:return e.next=4,f((function(){return!1}));case 4:null===o||void 0===o||null===(n=o.current)||void 0===n||n.dispatchEvent(new Event("input",{bubbles:!0}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)("div",{className:x,children:[Object(L.jsxs)("button",{className:p,type:"button",onClick:function(){return f((function(e){return!e}))},children:[v.id.length>0?v.gender:"Your gender",Object(L.jsx)("input",Object(d.a)({type:"hidden",value:v.id,onInput:s,ref:o},i))]}),j&&Object(L.jsx)("div",{className:N,children:c.map((function(e){return Object(L.jsx)("button",{className:"select__inner__button",type:"button",onClick:function(){return _(e)},children:e.gender},e.id)}))})]}),a&&Object(L.jsx)("p",{className:"select__errorText",children:a})]})}),Ce=function(e){var t=e.className,n=void 0===t?"":t,r=e.label,a=e.error,s=e.options,c=Object(P.a)(e,["className","label","error","options"]),i=R()("authSelect",n,{error:!!a});return Object(L.jsxs)("div",{className:i,children:[Object(L.jsx)(Oe,{className:"authSelect__label",htmlFor:r,children:r}),Object(L.jsx)(ye,Object(d.a)({options:s,id:r,error:a},c))]})},Se=be.a().shape({login:be.c().min(5).max(50),password:be.c().min(8).max(32),passwordConfirm:be.c().oneOf([be.b("password"),null],"Passwords must match"),name:be.c().max(50).required("This is a required field"),genderId:be.c().required("This is a required field"),captcha:be.c().length(5)}),ke=function(e){var t=e.className,n=void 0===t?"":t,a=R()("registrationForm",n),s=Object(l.a)(x),c=Object(me.e)({resolver:Object(fe.a)(Se),defaultValues:{login:"",password:"",passwordConfirm:"",name:"",genderId:"",captcha:""}}),i=c.handleSubmit,o=c.formState.errors,d=c.control,j=Object(u.g)();Object(r.useEffect)((function(){g()}),[]);return Object(L.jsxs)("form",{className:a,onSubmit:i((function(e){N(e)})),children:[Object(L.jsx)(me.a,{control:d,name:"login",render:function(e){var t=e.field,n=t.onChange,r=t.onBlur,a=e.fieldState,s=a.error,c=a.isDirty;return Object(L.jsx)(ge,{className:"registrationForm__field",label:"Create user name",placeholder:"Input user name",error:null===s||void 0===s?void 0:s.message,onChange:n,onBlur:r,isDirty:c})}}),Object(L.jsx)(me.a,{control:d,name:"password",render:function(e){var t=e.field,n=t.onChange,r=t.onBlur,a=e.fieldState,s=a.error,c=a.isDirty;return Object(L.jsx)(ge,{className:"registrationForm__field",label:"Create password",placeholder:"Create password",type:"password",error:null===s||void 0===s?void 0:s.message,onChange:n,onBlur:r,isDirty:c})}}),Object(L.jsx)(me.a,{control:d,name:"passwordConfirm",render:function(e){var t=e.field,n=t.onChange,r=t.onBlur,a=e.fieldState,s=a.error,c=a.isDirty;return Object(L.jsx)(ge,{className:"registrationForm__field",label:"Password confirmation",placeholder:"Password confirmation",type:"password",error:null===s||void 0===s?void 0:s.message,onChange:n,onBlur:r,isDirty:c})}}),Object(L.jsx)(me.a,{control:d,name:"name",render:function(e){var t=e.field,n=t.onChange,r=t.onBlur,a=e.fieldState,s=a.error,c=a.isDirty;return Object(L.jsx)(ge,{className:"registrationForm__field",label:"Nickname",placeholder:"Nickname",error:null===s||void 0===s?void 0:s.message,onChange:n,onBlur:r,isDirty:c})}}),Object(L.jsx)(me.a,{control:d,name:"genderId",render:function(e){var t=e.field,n=t.onChange,r=t.onBlur,a=e.fieldState.error;return Object(L.jsx)(Ce,{className:"registrationForm__field",label:"Your gender",error:null===a||void 0===a?void 0:a.message,onChange:n,onBlur:r,options:s.genders})}}),Object(L.jsxs)("div",{className:"registrationForm__captcha",children:[Object(L.jsx)(me.a,{control:d,name:"captcha",render:function(e){var t=e.field,n=t.onChange,r=t.onBlur,a=e.fieldState,s=a.error,c=a.isDirty;return Object(L.jsx)(ge,{className:"registrationForm__field",label:"Security code",placeholder:"Security code",error:null===s||void 0===s?void 0:s.message,onChange:n,onBlur:r,isDirty:c})}}),Object(L.jsx)(xe,{})]}),Object(L.jsxs)("div",{className:"registrationForm__buttons",children:[Object(L.jsx)(he,{error:o,className:"registrationForm__button",children:"Registration"}),Object(L.jsx)(he,{className:"registrationForm__button",variant:"white",onClick:function(){return j.push("/login")},children:"Log In"})]})]})},Fe=function(){return Object(L.jsxs)("main",{className:"registration",children:[Object(L.jsxs)("div",{className:"registration__inner",children:[Object(L.jsx)(X,{className:"registration__logo"}),Object(L.jsxs)(J,{variant:"1",children:[Object(L.jsx)("span",{children:"Sign Up to "}),Object(L.jsx)("span",{className:"registration__titleBlue",children:"Chatty"}),Object(L.jsx)("span",{className:"registration__titleLightBlue",children:"!"})]}),Object(L.jsx)(J,{className:"registration__subtitle",variant:"2",children:"Registration"}),Object(L.jsx)(ke,{})]}),Object(L.jsx)("span",{className:"registration__span"})]})},Ie=function(){return Object(L.jsx)(Fe,{})};!function(e){e.SCREEN_CHAT="/chat/:id?",e.SCREEN_LOGIN="/login",e.SCREEN_REGISTER="/registration"}(I||(I={}));var Ee=I,Be=function(){return Object(l.a)(_)?Object(L.jsxs)(u.d,{children:[Object(L.jsx)(u.b,{path:Ee.SCREEN_CHAT,exact:!0,children:Object(L.jsx)(je,{})}),Object(L.jsx)(u.a,{to:Ee.SCREEN_CHAT})]}):Object(L.jsxs)(u.d,{children:[Object(L.jsx)(u.b,{path:Ee.SCREEN_LOGIN,exact:!0,children:Object(L.jsx)(we,{})}),Object(L.jsx)(u.b,{path:Ee.SCREEN_REGISTER,exact:!0,children:Object(L.jsx)(Ie,{})}),Object(L.jsx)(u.a,{to:Ee.SCREEN_LOGIN})]})},De=(n(225),function(){return Object(L.jsxs)(i.a,{basename:"/",children:[Object(L.jsx)(Be,{}),Object(L.jsx)(o.a,{})]})});c.a.render(Object(L.jsx)(De,{}),document.getElementById("root"))},89:function(e,t,n){},91:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){}},[[226,1,2]]]);
//# sourceMappingURL=main.a3e48ad8.chunk.js.map