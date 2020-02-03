(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,function(e,a,t){},,,function(e,a,t){e.exports=t(36)},,,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(6),c=t.n(r),s=t(8),o=t(4),i=t(17),m=t(5),u="SAVE_RESTAURANTS",d="SET_LOAD_RESTAURANTS_ERROR",_="START_LOADING",E="STOP_LOADING",g={restaurantsListData:null,isLoading:!1,error:null},p=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,f=[i.a],v=Object(o.d)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case u:return Object(m.a)({},e,{error:null,restaurantsListData:a.payload});case d:var t=a.payload;return Object(m.a)({},e,{error:t,restaurantsListData:null});case _:return Object(m.a)({},e,{isLoading:!0});case E:return Object(m.a)({},e,{isLoading:!1});default:return e}},p(o.a.apply(void 0,f))),h=(t(15),t(28),function(e){var a=e.imageUrl,t=e.title,n=e.categories,r=e.etaRange;return l.a.createElement("div",{className:"restaurant-card"},l.a.createElement("img",{src:a,alt:t,className:"restaurant-card__img"}),l.a.createElement("h2",{className:"restaurant-card__title"},t),l.a.createElement("div",{className:"restaurant-card__categories"},n.join(" \u2022 ")),l.a.createElement("div",{className:"restaurant-card__eta"},r))});h.defaultProps={categories:[],etaRange:""};t(29),t(30);var N=function(){return l.a.createElement("div",{className:"loader-container"},l.a.createElement("div",{className:"lds-default"},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null)))},b=(t(31),function(e){var a=e.message;return l.a.createElement("div",{className:"error"},l.a.createElement("p",{className:"error__text"},a),l.a.createElement("a",{href:"/",className:"error__link"},"Go Home"))});b.defaultProps={message:"Sorry, something went wrong"};var k=function(e){var a=e.restaurantsData,t=e.loadRestaurants,r=e.error,c=e.isLoading;return Object(n.useEffect)(function(){t()},[]),c?l.a.createElement(N,null):r?l.a.createElement(b,{message:r}):l.a.createElement("div",{className:"restaurant-list"},a.map(function(e){var a=e.uuid,t=e.title,n=e.heroImageUrl,r=e.categories,c=e.etaRange;return l.a.createElement(h,{key:a,uuid:a,title:t,imageUrl:n,categories:r,etaRange:c?c.text:"20 - 30 min"})}))};k.defaultProps={restaurantsData:[],error:null,isLoading:!1};var O=t(9),y=function(e){return e},S=Object(O.a)(y,function(e){var a=e.restaurantsListData;if(!a)return[];var t=a.feedItems,n=a.storesMap;return t.map(function(e){var a=e.uuid;return n[a]})}),j=Object(O.a)(y,function(e){return e.error}),w=Object(O.a)(y,function(e){return e.isLoading}),U={loadRestaurants:function(){return function(e){e({type:_}),fetch("https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants").then(function(e){return e.json()}).then(function(a){var t=a.data;e(function(e){return{type:u,payload:e}}(t))}).catch(function(a){return e(function(e){return{type:d,payload:e}}(a.message))}).finally(function(){return e({type:E})})}}},R=Object(s.b)(function(e){return{restaurantsData:S(e),error:j(e),isLoading:w(e)}},U)(k),A=t(2),L=t(7),T=t(13),C=t.n(T),D=(t(32),function(e){var a=e.iconUrl,t=e.value,r=e.onChange,c=e.type,s=e.placeholder,o=e.name,i=e.className,m=e.isSmall,u=e.label,d=Object(n.createRef)(),_=Object(n.useState)(!1),E=Object(A.a)(_,2),g=E[0],p=E[1],f=C()("control__input-wrapper",Object(L.a)({"control__input-wrapper--focused":g},i,!!i)),v=C()("control__input",{"control__input--small":m,"control__input--time":"time"===c});return l.a.createElement("label",{className:"control"},u&&l.a.createElement("p",{className:"control__label"},u),l.a.createElement("div",{className:f},!!a&&l.a.createElement("img",{src:a,alt:s,className:"control__icon"}),l.a.createElement("input",{ref:d,type:c,value:t,onChange:r,onFocus:function(){p(!0)},onBlur:function(){p(!1)},name:o,placeholder:s,className:v})))});D.defaultProps={iconUrl:"",type:"text",placeholder:"",className:"",label:"",isSmall:!0};t(33);var P=function(){var e=Object(n.useState)(""),a=Object(A.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(""),s=Object(A.a)(c,2),o=s[0],i=s[1],m=Object(n.useState)(""),u=Object(A.a)(m,2),d=u[0],_=u[1],E=Object(n.useState)(!1),g=Object(A.a)(E,2),p=g[0],f=g[1],v=Object(n.useState)(!1),h=Object(A.a)(v,2),N=h[0],b=h[1],k={address:r,time:i,search:_},O=function(e){var a=e.target;k[a.name](a.value)};return l.a.createElement("header",{className:"header"},l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"header__inner"},l.a.createElement("img",{src:"./images/logo.svg",alt:"Uber Eats",className:"header__logo"}),l.a.createElement("div",{className:"header__delivery-info"},l.a.createElement(D,{name:"address",value:t,onChange:O,placeholder:"Address",iconUrl:"./images/place.svg"}),l.a.createElement(D,{name:"time",value:o,onChange:O,placeholder:"Time",type:"time"})),l.a.createElement("div",{className:"header__search"},l.a.createElement(D,{name:"search",type:"search",value:d,onChange:O,placeholder:"Search",iconUrl:"./images/search.svg"})),l.a.createElement("div",{className:"header__toggle-buttons"},l.a.createElement("button",{type:"button",onClick:function(){b(!0),f(!1)},className:"header__toggle-btn"},l.a.createElement("img",{src:"./images/place.svg",alt:"place icon"})),l.a.createElement("button",{type:"button",onClick:function(){f(!0),b(!1)},className:"header__toggle-btn"},l.a.createElement("img",{src:"./images/search.svg",alt:"search icon"}))),l.a.createElement("a",{className:"header__link",href:"/sign-in"},"Sign in")),(p||N)&&l.a.createElement("div",{className:"header__mobile-controls mobile-controls"},p&&l.a.createElement(D,{label:"Find",name:"search",value:d,onChange:O,placeholder:"Search",iconUrl:"./images/search.svg",isSmall:!1}),N&&l.a.createElement(l.a.Fragment,null,l.a.createElement(D,{label:"Where",name:"address",value:t,onChange:O,placeholder:"Address",iconUrl:"./images/place.svg",isSmall:!1}),l.a.createElement(D,{label:"To",name:"time",value:o,onChange:O,placeholder:"Time",type:"time",isSmall:!1})),l.a.createElement("button",{type:"button",onClick:function(){f(!1),b(!1)},className:"mobile-controls__close"},l.a.createElement("img",{src:"./images/close.svg",alt:"search icon"})))))},I=(t(34),t(35),function(e){var a=e.name,t=e.value,n=e.onSelect,r=e.options,c=e.iconUrl;return l.a.createElement("div",{className:"select"},l.a.createElement("select",{name:a,value:t,onSelect:n,className:"select__input"},r.map(function(e){var a=e.value,n=e.label;return l.a.createElement("option",{value:a,selected:t===a},n)})),!!c&&l.a.createElement("img",{className:"select__icon",src:c,alt:"select icon"}),l.a.createElement("img",{className:"select__arrow",src:"./images/arrow-down.svg",alt:"arrow down"}))});I.defaultProps={options:[],iconUrl:"",onSelect:function(){}};var G=function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"footer__top-part"},l.a.createElement("div",{className:"footer__main"},l.a.createElement("div",{className:"footer__logo-container"},l.a.createElement("img",{className:"footer__logo",src:"./images/logo-white.svg",alt:"Uber Eats"}),l.a.createElement(I,{name:"language",options:[{value:"en",label:"English"},{value:"ua",label:"Ukrainian"}],value:"en",iconUrl:"./images/world.svg"})),l.a.createElement("div",{className:"footer__mobile-apps"},l.a.createElement("a",{className:"footer__mobile-apps",href:"https://www.apple.com/ios/app-store/"},l.a.createElement("img",{src:"./images/app-store.png",alt:"App Store",className:"footer__mobile-app"})),l.a.createElement("a",{className:"footer__mobile-apps",href:"https://play.google.com/store"},l.a.createElement("img",{src:"./images/google-play.png",alt:"Google Play",className:"footer__mobile-app"})))),l.a.createElement("div",{className:"footer__top-links links"},l.a.createElement("a",{href:"#/",className:"links__link links__link--intended"},"About Uber Eats"),l.a.createElement("a",{href:"#/",className:"links__link"},"Read our blog"),l.a.createElement("a",{href:"#/",className:"links__link"},"Sign up to deliver"),l.a.createElement("a",{href:"#/",className:"links__link"},"Add your restaurant")),l.a.createElement("div",{className:"footer__top-links links"},l.a.createElement("a",{href:"#/",className:"links__link links__link--intended"},"Get help"),l.a.createElement("a",{href:"#/",className:"links__link"},"Read FAQs"),l.a.createElement("a",{href:"#/",className:"links__link"},"View all cities"))),l.a.createElement("div",{className:"footer__bottom-part"},l.a.createElement("p",{className:"footer__copyright"},"\xa9 2019 Uber Technologies Inc."),l.a.createElement("div",{className:"footer__misc"},l.a.createElement("div",{className:"footer__bottom-links links"},l.a.createElement("a",{href:"#/",className:"links__link"},"Privacy policy"),l.a.createElement("a",{href:"#/",className:"links__link"},"Terms of  use"),l.a.createElement("a",{href:"#/",className:"links__link"},"Pricing")),l.a.createElement("div",{className:"footer__social social"},l.a.createElement("a",{href:"#/",className:"social__link"},l.a.createElement("img",{src:"./images/fb.svg",alt:"facebook"})),l.a.createElement("a",{href:"#/",className:"social__link"},l.a.createElement("img",{src:"./images/tw.svg",alt:"twitter"})),l.a.createElement("a",{href:"#/",className:"social__link"},l.a.createElement("img",{src:"./images/ig.svg",alt:"instagram"})))))))},x=function(){return l.a.createElement(s.a,{store:v},l.a.createElement(P,null),l.a.createElement("main",{className:"page"},l.a.createElement("div",{className:"content"},l.a.createElement(R,null))),l.a.createElement(G,null))};c.a.render(l.a.createElement(x,null),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.c3a70753.chunk.js.map