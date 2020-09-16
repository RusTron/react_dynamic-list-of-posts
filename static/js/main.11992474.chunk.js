(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(17)},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(3),o=n.n(r),s=n(1),u=n(4),l=n.n(u),m="https://mate-api.herokuapp.com",i=function(){return fetch("".concat(m,"/posts")).then((function(e){return e.json()}))},f=(n(12),function(e){var t=e.person,n=e.selectedPostId,r=e.postId,o=Object(a.useState)([]),u=Object(s.a)(o,2),l=u[0],m=u[1],f=Object(a.useState)(!0),d=Object(s.a)(f,2),p=d[0],b=d[1],E=t.id,h=t.name;Object(a.useEffect)((function(){h&&"All users"!==h?i().then((function(e){return m(e.data.filter((function(e){return e.userId===E})))})):i().then((function(e){return m(e.data)}))}),[h,E]);var _=function(e,t){n(e,t),b(t)};return c.a.createElement("div",{className:"PostsList"},c.a.createElement("h2",null,"Posts:"),c.a.createElement("ul",{className:"PostsList__list"},l.map((function(e){return c.a.createElement("li",{className:"PostsList__item",key:e.id},c.a.createElement("div",null,c.a.createElement("b",null,"[User #",e.userId,"]:"," "),e.title),c.a.createElement("button",{type:"button",className:"PostsList__button button",onClick:function(t){"Open"===t.target.innerText?_(e.id,!0):_(e.id,!1)}},p&&e.id===r?"Close":"Open"))}))))});f.defaultProps={person:l.a.shape({name:""}).isRequired,postId:null};n(13);var d=function(e){var t=e.postId,n=e.commentUpdate,r=Object(a.useState)(""),o=Object(s.a)(r,2),u=o[0],l=o[1],m=Object(a.useState)(""),i=Object(s.a)(m,2),f=i[0],d=i[1],p=Object(a.useState)(""),b=Object(s.a)(p,2),E=b[0],h=b[1];return c.a.createElement("form",{className:"NewCommentForm",onSubmit:function(e){e.preventDefault(),n(t,u,f,E),l(""),d(""),h("")}},c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",required:!0,value:u,onChange:function(e){return l(e.target.value)}})),c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",required:!0,value:f,onChange:function(e){return d(e.target.value)}})),c.a.createElement("div",{className:"form-field"},c.a.createElement("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",required:!0,value:E,onChange:function(e){return h(e.target.value)}})),c.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button"},"Add a comment"))},p=(n(14),function(e){var t=e.post,n=e.comments,r=e.deleteComment,o=e.loadComments,u=e.isChoosen,l=Object(a.useState)(!0),i=Object(s.a)(l,2),f=i[0],p=i[1],b=function(e,t,n,a){return function(e,t,n,a){var c="".concat(m,"/comments/"),r={method:"POST",body:JSON.stringify({postId:e,name:t,email:n,body:a})};return fetch(c,r).then((function(e){return e.json()}))}(e,t,n,a)};return c.a.createElement("div",{className:"PostDetails"},c.a.createElement("h2",null,"Post details:"),u&&t&&c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"PostDetails__post"},c.a.createElement("p",null,t.title)),c.a.createElement("section",{className:"PostDetails__comments"},c.a.createElement("button",{type:"button",className:"button",onClick:function(){return p(!f)}},f?"Hidden ".concat(n.length," ")+"comment".concat(1!==n.length?"s":""):"Hide ".concat(n.length," ")+"comment".concat(1!==n.length?"s":"")),!f&&c.a.createElement("ul",{className:"PostDetails__list"},n.map((function(e){return c.a.createElement("li",{className:"PostDetails__list-item",key:e.id},c.a.createElement("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){r(e.id)}},"X"),c.a.createElement("p",null,e.body))})))),c.a.createElement("section",null,c.a.createElement("div",{className:"PostDetails__form-wrapper"},c.a.createElement(d,{postId:t.id,commentUpdate:function(e,n,a,c){b(e,n,a,c).then((function(){return o(t.id)}))}})))))});p.defaultProps={post:null};var b=function(e){var t=e.select,n=e.name,r=Object(a.useState)([]),o=Object(s.a)(r,2),u=o[0],l=o[1];return Object(a.useEffect)((function(){fetch("".concat(m,"/users")).then((function(e){return e.json()})).then((function(e){return l(e.data.filter((function(e,t,n){return null!==e.address&&t===n.findIndex((function(t){return e.name===t.name}))})))}))}),[]),c.a.createElement("label",null,"Select a user: \xa0",c.a.createElement("select",{className:"App__user-selector",value:n,onChange:function(e){var n=e.target.value;if("All users"!==n){var a=u.filter((function(e){return e.name===n}))[0];t(a)}else t({name:"All users"})}},c.a.createElement("option",{value:"All users"},"All users"),u.map((function(e){return c.a.createElement("option",{value:e.name,key:e.id},e.name)}))))};b.defaultProps={name:""};n(15),n(16);var E=function(){var e=Object(a.useState)({}),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(),u=Object(s.a)(o,2),l=u[0],i=u[1],d=Object(a.useState)(null),E=Object(s.a)(d,2),h=E[0],_=E[1],v=Object(a.useState)(!1),j=Object(s.a)(v,2),N=j[0],O=j[1],C=Object(a.useState)([]),P=Object(s.a)(C,2),y=P[0],g=P[1],S=function(e){(function(e){return fetch("".concat(m,"/comments")).then((function(e){return e.json()})).then((function(t){return t.data.filter((function(t){return t.postId===e}))}))})(e).then((function(e){return g(e)}))};return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App__header"},c.a.createElement(b,{select:function(e){r(e)},name:n.name})),c.a.createElement("main",{className:"App__main"},c.a.createElement("div",{className:"App__sidebar"},c.a.createElement(f,{person:n,postId:l,selectedPostId:function(e,t){O(t),i(e),function(e){return fetch("".concat(m,"/posts/").concat(e)).then((function(e){return e.json()}))}(e).then((function(e){return _(e.data)})),S(e)}})),c.a.createElement("div",{className:"App__content"},c.a.createElement(p,{post:h,comments:y,deleteComment:function(e){return function(e){var t="".concat(m,"/comments/").concat(e);return fetch(t,{method:"DELETE"}).then((function(e){return e.json()}))}(e).then((function(){return S(l)}))},loadComments:S,isChoosen:N}))))};o.a.render(c.a.createElement(E,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.11992474.chunk.js.map