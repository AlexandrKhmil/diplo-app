(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{20:function(e,t,a){e.exports={modalBackdrop:"styles_modalBackdrop__1CZNN",enter:"styles_enter__w9sIk",enterActive:"styles_enterActive__2B6B8",exit:"styles_exit__3KfGF",exitActive:"styles_exitActive__EvmdU"}},26:function(e,t,a){e.exports={img:"styles_img__26b6t",tableWrapper:"styles_tableWrapper__3fi6T"}},31:function(e,t,a){e.exports={img:"styles_img__GFlt6",item:"styles_item__13qb2"}},50:function(e,t,a){e.exports=a(78)},59:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),c=a(3),o=(a(59),a(15)),i=a(16),s=a(18),m=a(1),u=a(11),d=a.n(u),b=function(e){var t=e.msg,a=e.errors;return function(e){t&&e({type:"ERROR_MESSAGE",payload:t}),a&&a.forEach((function(t){e({type:"ERROR_MESSAGE",payload:t.msg})}))}},E=function(e,t){var a={headers:{"Content-Type":"application/json"}};return a.headers=Object(m.a)({},a.headers,{},e),{config:a,body:t=t&&JSON.stringify(t)}},p={modalLoginOpen:function(){return function(e){return e({type:"MODAL_LOGIN_OPEN"})}},modalRegisterOpen:function(){return function(e){return e({type:"MODAL_REGISTER_OPEN"})}},logout:function(){return function(e){return e({type:"ACCOUNT_LOGOUT"})}}},g=Object(c.b)((function(e){return{isAuth:e.account.isAuth,email:e.account.email}}),p)((function(e){var t=e.email,a=e.isAuth,n=e.modalLoginOpen,l=e.modalRegisterOpen,c=e.logout,i=r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",exact:!0,to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",exact:!0,to:"/about"},"About"))),s=r.a.createElement("ul",{className:"navbar-nav ml-auto align-items-center"},r.a.createElement("li",{className:"nav-item mr-3 text-light"},"Welcome ",t),r.a.createElement("li",{className:"nav-item"},r.a.createElement("button",{className:"nav-link btn btn-info",onClick:c},"Logout"))),m=r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("button",{className:"nav-link btn btn-link",onClick:n},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("button",{className:"nav-link btn btn-link",onClick:l},"Register")));return r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-primary"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbar"},i,a?s:m))))})),f=a(7),h=a(79),v=a(20),O=a.n(v),N=function(e){var t=e.status,a=e.title,l=e.children,c=e.footer,o=e.close,i=Object(n.createRef)();return r.a.createElement(h.a,{in:t,timeout:200,classNames:{enter:O.a.enter,enterActive:O.a.enterActive,exit:O.a.exit,exitActive:O.a.exitActive},unmountOnExit:!0},r.a.createElement("div",{className:O.a.modalBackdrop,ref:i,onClick:function(e){return e.target===i.current&&o()}},r.a.createElement("div",{className:"modal-dialog w-100"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},a&&r.a.createElement("h5",{className:"modal-title"},a),r.a.createElement("button",{onClick:o,className:"close","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},l),c&&r.a.createElement("div",{className:"modal-footer"},c)))))},L={modalLoginClose:function(){return function(e){return e({type:"MODAL_LOGIN_CLOSE"})}},login:function(e){var t=e.email,a=e.password;return function(e){e({type:"ACCOUNT_LOGIN_LOADING"});var n=E(null,{email:t,password:a}),r=n.body,l=n.config;d.a.post("/api/account/login",r,l).then((function(t){e({type:"ACCOUNT_LOGIN_SUCCESS",payload:t.data}),e({type:"MODAL_LOGIN_CLOSE"})})).catch((function(t){e({type:"ACCOUNT_LOGIN_FAIL"}),t.response&&b(t.response.data)(e)}))}}},y=Object(c.b)((function(e){return{status:e.modal.login,isLoading:e.account.isLoading}}),L)((function(e){var t=e.status,a=e.isLoading,l=e.modalLoginClose,c=e.login,o=Object(n.useState)(""),i=Object(f.a)(o,2),s=i[0],m=i[1],u=Object(n.useState)(""),d=Object(f.a)(u,2),b=d[0],E=d[1];return r.a.createElement(N,{status:t,close:l,title:"Login"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c({email:s,password:b})}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",className:"form-control",name:"email",onChange:function(e){return m(e.target.value)},value:s,disabled:a})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",name:"password",onChange:function(e){return E(e.target.value)},value:b,disabled:a})),r.a.createElement("div",{className:"form-group d-flex justify-content-end mb-0"},r.a.createElement("button",{className:"btn btn-primary d-flex  justify-content-between align-items-center",disabled:a},a&&r.a.createElement("span",{className:"spinner-border spinner-border-sm mr-2",role:"status","aria-hidden":"true"}),a?"Loading":"Enter"))))})),A=Object(c.b)((function(e){return{status:e.modal.register,isLoading:e.account.isLoading}}),(function(e){return{modalRegisterClose:function(){return function(e){return e({type:"MODAL_REGISTER_CLOSE"})}(e)},register:function(t){return function(e){var t=e.email,a=e.password;return function(e){e({type:"ACCOUNT_REGISTER_LOADING"});var n=E(null,{email:t,password:a}),r=n.body,l=n.config;d.a.post("/api/account/register",r,l).then((function(a){e({type:"ACCOUNT_REGISTER_SUCCESS",payload:Object(m.a)({},a.data,{email:t})}),e({type:"MODAL_REGISTER_CLOSE"})})).catch((function(t){e({type:"ACCOUNT_REGISTER_FAIL"}),t.response&&b(t.response.data)(e)}))}}(t)(e)},errorAlert:b,dispatch:e}}))((function(e){var t=e.status,a=e.isLoading,l=e.modalRegisterClose,c=e.register,o=e.errorAlert,i=e.dispatch,s=Object(n.useState)(""),m=Object(f.a)(s,2),u=m[0],d=m[1],b=Object(n.useState)(""),E=Object(f.a)(b,2),p=E[0],g=E[1],h=Object(n.useState)(""),v=Object(f.a)(h,2),O=v[0],L=v[1],y=p===O;return r.a.createElement(N,{status:t,close:l,title:"Register"},r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),p!==O){return o({msg:"\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442!"})(i)}c({email:u,password:p})}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",className:"form-control",name:"email",onChange:function(e){return d(e.target.value)},value:u,disabled:a})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",name:"password",onChange:function(e){return g(e.target.value)},value:p,disabled:a})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"passwordRepeat"},"Password Repeat"),r.a.createElement("input",{type:"password",className:"form-control ".concat(!y&&"is-invalid"),name:"passwordRepeat",onChange:function(e){return L(e.target.value)},value:O,disabled:a})),r.a.createElement("div",{className:"form-group d-flex justify-content-end mb-0"},r.a.createElement("button",{className:"btn btn-primary d-flex  justify-content-between align-items-center",type:"submit",disabled:a},a&&r.a.createElement("span",{className:"spinner-border spinner-border-sm mr-2",role:"status","aria-hidden":"true"}),a?"Loading":"Enter"))))})),_=Object(c.b)((function(e){return{error:e.error}}))(Object(s.d)()((function(e){var t=e.error,a=e.alert;return Object(n.useEffect)((function(){t.message&&a.error(t.message)}),[t,a]),r.a.createElement(r.a.Fragment,null)}))),C=function(e){var t=e.style,a=e.message,n=e.close;return r.a.createElement("div",{className:"alert alert-dismissible alert-warning",style:t},r.a.createElement("h4",{className:"alert-heading"},"\u041e\u0448\u0438\u0431\u043a\u0430!"),r.a.createElement("p",{className:"mb-0"},a),r.a.createElement("button",{type:"button",className:"close",onClick:n},"\xd7"))},j=a(31),S=a.n(j),w=function(e){var t=e.link,a=e.imgLink,n=e.title,l=e.description;return r.a.createElement("div",{className:"card card-body border-primary mb-3 align-items-start \n      ".concat(S.a.item)},r.a.createElement(o.b,{className:"d-flex w-100",to:t},r.a.createElement("img",{className:S.a.img,src:a,alt:"Algorithm Preview"})),r.a.createElement(o.b,{to:t,className:"mt-3"},r.a.createElement("h5",{className:"card-title"},n)),r.a.createElement("p",{className:"card-text"},l))},T=Object(c.b)((function(e){return{list:e.algorithm.list}}),(function(e){return{}}))((function(e){var t=e.list;return r.a.createElement("main",null,r.a.createElement("div",{className:"container mt-5"},r.a.createElement("h1",{className:"mb-4"},"List of algorithms"),r.a.createElement("div",{className:"row"},t&&Object.values(t).map((function(e){return r.a.createElement("div",{key:e.id,className:"col-sm-6"},r.a.createElement(w,{title:e.title,link:"algorithm/".concat(e.link),imgLink:e.imgurl,description:e.description}))})))))})),k=function(){return r.a.createElement("main",null,r.a.createElement("div",{className:"container card border-primary mt-5 pt-4 px-5 pb-2"},r.a.createElement("h1",{className:"mb-3"},"About"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))},I=a(19),G=a(26),D=a.n(G),U=a(25),x=Object(c.b)((function(e){return{data:e.data.data}}),{})((function(e){var t=e.data;if(0===Object.keys(t).length)return r.a.createElement(r.a.Fragment,null,"No data!");var a,n=function(e){var t=new Date(1e3*e),a=t.getDate(),n=t.getMonth()+1,r=t.getFullYear().toString();return"".concat(n,".").concat(a,".").concat(r.slice(-2))};a=[["day","Price","Open","Close","High"]].concat(Object(I.a)(Object.entries(t).map((function(e){return[n(e[0]),e[1].l,e[1].o,e[1].c,e[1].h]}))));return r.a.createElement(U.a,{width:"100%",height:350,chartType:"CandlestickChart",loader:r.a.createElement("div",null,"Loading Chart"),data:a,options:{legend:"none",bar:{groupWidth:"100%"},candlestick:{fallingColor:{strokeWidth:0,fill:"#a52714"},risingColor:{strokeWidth:0,fill:"#0f9d58"}}},rootProps:{"data-testid":"1"}})})),R=Object(c.b)((function(e){return{isLoading:e.data.isLoading}}),(function(e){return{loadData:function(t){return function(e){var t=e.resolution,a=e.start,n=e.end;return function(e){e({type:"DATA_LOADING"}),d.a.get("https://finnhub.io/api/v1/stock/candle?symbol=AAPL&resolution=".concat(t,"&from=").concat(a,"&to=").concat(n,"&token=bql6il7rh5ra8kpl6eg0")).then((function(t){e({type:"DATA_SUCCESS",payload:t})})).catch((function(t){console.log(t),e({type:"DATA_FAIL"}),b({msg:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u0434\u0433\u0440\u0443\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445!"})(e)}))}}(t)(e)},errorAlert:function(t){return b(t)(e)}}}))((function(e){var t=e.isLoading,a=e.loadData,l=e.errorAlert,c=Object(n.useState)("finnhub.io"),o=Object(f.a)(c,2),i=o[0],s=o[1],m=Object(n.useState)("AAPL"),u=Object(f.a)(m,2),d=u[0],b=u[1],E=Object(n.useState)("W"),p=Object(f.a)(E,2),g=p[0],h=p[1],v=Object(n.useState)(""),O=Object(f.a)(v,2),N=O[0],L=O[1],y=Object(n.useState)(""),A=Object(f.a)(y,2),_=A[0],C=A[1];return r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),!N||!_){return l({msg:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0434\u0430\u0442\u044b!"})}a({where:i,resolution:g,start:Date.parse(N)/1e3,end:Date.parse(_)/1e3})}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"where"},"Where"),r.a.createElement("input",{type:"text",className:"form-control",name:"where",onChange:function(e){return s(e.target.value)},value:i,disabled:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"which"},"Which"),r.a.createElement("input",{type:"text",className:"form-control",name:"which",onChange:function(e){return b(e.target.value)},value:d,disabled:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"resolution"},"Resolution"),r.a.createElement("input",{type:"text",className:"form-control",name:"resolution",onChange:function(e){return h(e.target.value)},value:g,disabled:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"start"},"From"),r.a.createElement("input",{type:"date",className:"form-control",name:"start",onChange:function(e){return L(e.target.value)},value:N,disabled:t})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"end"},"To"),r.a.createElement("input",{type:"date",className:"form-control",name:"end",onChange:function(e){return C(e.target.value)},value:_,disabled:t})),r.a.createElement("div",{className:"form-group d-flex mb-0"},r.a.createElement("button",{className:"btn btn-primary d-flex  justify-content-between align-items-center w-100",disabled:t},t&&r.a.createElement("span",{className:"spinner-border spinner-border-sm mr-2",role:"status","aria-hidden":"true"}),r.a.createElement("span",{className:"ml-auto"},t?"Loading":"Load Data"))))})),F=Object(c.b)((function(e){return{data:e.data.data}}),{})((function(e){var t=e.data;return r.a.createElement("table",{className:"table table-hover mb-0"},r.a.createElement("thead",{className:"sticky-top",style:{backgroundColor:"white"}},r.a.createElement("tr",null,r.a.createElement("th",{className:"border-top-0",scope:"col"},"Date"),r.a.createElement("th",{className:"border-top-0",scope:"col"},"Open"),r.a.createElement("th",{className:"border-top-0",scope:"col"},"Close"),r.a.createElement("th",{className:"border-top-0",scope:"col"},"High"),r.a.createElement("th",{className:"border-top-0",scope:"col"},"Low"))),r.a.createElement("tbody",null,Object.entries(t).map((function(e){return r.a.createElement("tr",{key:e[0].toString()},r.a.createElement("th",{scope:"row"},function(e){var t=new Date(1e3*e),a=t.getDate(),n=t.getMonth()+1,r=t.getFullYear();return"".concat(n,"/").concat(a,"/").concat(r)}(e[0])),r.a.createElement("td",null,e[1].o),r.a.createElement("td",null,e[1].c),r.a.createElement("td",null,e[1].h),r.a.createElement("td",null,e[1].l))}))))})),M=Object(c.b)((function(e){return{}}),{})((function(e){var t=e.data;return r.a.createElement(U.a,{width:"100%",height:"400px",chartType:"LineChart",loader:r.a.createElement("div",null,"Loading Chart"),data:t,options:{hAxis:{title:"Time"},vAxis:{title:"Price"}},rootProps:{"data-testid":"1"}})})),P=Object(c.b)((function(e,t){return{algorithm:e.algorithm.list&&Object.values(e.algorithm.list).find((function(e){return e.link===t.match.params.algorithmLink})),data:e.data.data}}),(function(e){return{execute:function(t){return function(e){var t=e.id,a=e.link,n=e.data,r=e.forward;return function(e){e({type:"ALGO_EXECUTE_LOADING",payload:t});var l=E({data:JSON.stringify({data:n,forward:r})}).config;d.a.get("/api/algorithm/".concat(a,"/execute"),l).then((function(a){return e({type:"ALGO_EXECUTE_SUCCESS",payload:{data:a.data,id:t}})})).catch((function(a){e({type:"ALGO_EXECUTE_FAIL",payload:t}),a.response?b(a.response.data)(e):b({msg:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f!"})(e)}))}}(t)(e)}}}))((function(e){var t=e.data,a=e.execute,l=e.algorithm,c=Object(n.useState)("1"),o=Object(f.a)(c,2),i=o[0],s=o[1];if(!l)return r.a.createElement(r.a.Fragment,null,"Error");var m=function(e){var t=new Date(1e3*e),a=t.getDate(),n=t.getMonth()+1,r=t.getFullYear().toString();return"".concat(n,".").concat(a,".").concat(r.slice(-2))},u=l.isExecuting,d=l.title,b=l.imgurl,E=l.description,p=l.result,g=l.id,h=l.link,v=p.data,O=[["time","Close","Predicted"]].concat(Object(I.a)(Object.entries(t).map((function(e){return[m(e[0]),e[1].c,parseInt(null)]}))));O[O.length-1][2]=O[O.length-1][1];var N=Object.keys(t),L=N[N.length-1];return O=v?[].concat(Object(I.a)(O),Object(I.a)(v.map((function(e,t){var a=new Date(1e3*L);a.setDate(a.getDate()+7*(t+1));var n=a.getDate(),r=a.getMonth()+1,l=a.getFullYear().toString();return["".concat(r,".").concat(n,".").concat(l.slice(-2)),parseInt(null),e]})))):O,r.a.createElement("main",null,r.a.createElement("div",{className:"container mt-5 mb-4"},d&&r.a.createElement("h1",{className:"mb-4"},d),r.a.createElement("div",{className:"card card-body border-primary container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 d-flex mb-3 mb-md-0"},r.a.createElement("img",{className:"".concat(D.a.img),src:b||"https://i.imgur.com/Bb2evGw.jpg",alt:"Algrithm"})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("p",{className:"mb-0"},E||"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442."))))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 mb-4"},r.a.createElement("div",{className:"card card-body border-primary"},r.a.createElement("h2",null,"Data Loading"),r.a.createElement(R,null))),r.a.createElement("div",{className:"col-md-6 mb-4"},r.a.createElement("div",{className:"card card-body border-primary"},r.a.createElement("h2",null,"Data Manager"),r.a.createElement("div",{className:D.a.tableWrapper},r.a.createElement(F,null)))),r.a.createElement("div",{className:"col-12 mb-4"},r.a.createElement("div",{className:"card card-body border-primary"},r.a.createElement("h2",null,"Chart for inputed data"),r.a.createElement(x,null))),r.a.createElement("div",{className:"col-md-6 mb-4"},r.a.createElement("div",{className:"card card-body border-primary"},r.a.createElement("h2",{className:"mb-3"},"Execute"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n=Object.values(t).map((function(e){return e.c}));a({id:g,link:h,data:n,forward:i})}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"forward"},"\u041d\u0430 \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u043f\u0435\u0440\u0435\u0434"),r.a.createElement("input",{type:"number",className:"form-control",name:"forward",value:i,onChange:function(e){return s(e.target.value)},min:"1"})),r.a.createElement("div",{className:"form-group d-flex mb-0"},r.a.createElement("button",{className:"btn btn-primary d-flex  justify-content-between align-items-center w-100",type:"submit",disabled:u},u&&r.a.createElement("span",{className:"spinner-border spinner-border-sm mr-2",role:"status","aria-hidden":"true"}),u?"Loading":"Run"))))),r.a.createElement("div",{className:"col-md-6 mb-4"},r.a.createElement("div",{className:"card card-body border-primary"},r.a.createElement("h2",{className:"card-title"},"Result"),r.a.createElement("div",{className:D.a.tableWrapper},r.a.createElement("table",{className:"table table-hover mb-0"},r.a.createElement("thead",{className:"sticky-top",style:{backgroundColor:"white"}},r.a.createElement("tr",null,r.a.createElement("th",{className:"border-top-0",scope:"col"},"#"),r.a.createElement("th",{className:"border-top-0",scope:"col"},"Close"))),r.a.createElement("tbody",null,p.data&&p.data.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("th",{scope:"row"},t+1),r.a.createElement("td",null,e))}))))))),r.a.createElement("div",{className:"col-12 mb-4"},r.a.createElement("div",{className:"card card-body border-primary"},r.a.createElement("h2",{className:"card-title"},"Chart Results"),r.a.createElement(M,{data:O}))))))})),W=Object(c.b)((function(e){return{token:e.account.token,isAuth:e.account.isAuth,isLoaded:e.algorithm.isLoaded,isLoading:e.algorithm.isLoading}}),(function(e){return{loadAlgoList:function(){return function(e){e({type:"ALGO_LIST_LOADING"}),d.a.get("/api/algorithm/list").then((function(t){return e({type:"ALGO_LIST_SUCCESS",payload:t.data})})).catch((function(t){e({type:"ALGO_LIST_FAIL"}),b(t.response.data)(e)}))}(e)},auth:function(t){return(a=t,function(e){e({type:"ACCOUNT_AUTH_LOADING"});var t=E({token:a}).config;d.a.get("/api/account/auth",t).then((function(t){return e({type:"ACCOUNT_AUTH_SUCCESS",payload:t.data})})).catch((function(t){e({type:"ACCOUNT_AUTH_FAUL"}),t.response&&b(t.response.data)(e)}))})(e);var a}}}))((function(e){var t=e.token,a=e.isAuth,l=e.isLoading,c=e.isLoaded,m=e.loadAlgoList,u=e.auth;Object(n.useEffect)((function(){t&&!a&&u(t)}),[t,u,a]),Object(n.useEffect)((function(){c||l||m()}));var d={position:s.b.TOP_CENTER,timeout:5e3,transition:s.c.FADE,containerStyle:{zIndex:1070}};return r.a.createElement(s.a,Object.assign({template:C},d),r.a.createElement(o.a,null,r.a.createElement(g,null),r.a.createElement(y,null),r.a.createElement(A,null),r.a.createElement(_,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:T}),r.a.createElement(i.a,{path:"/about",component:k}),r.a.createElement(i.a,{path:"/algorithm/:algorithmLink",component:P}))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=a(13),B=a(45),q=a(46),J={email:null,token:localStorage.getItem("token"),isLoading:!1,isAuth:!1},X={login:!1,register:!1},Y={message:null},z=a(14),K={list:{},isLoading:!1,isLoaded:!1},Z={list:{},isLoading:!1,data:JSON.parse(localStorage.getItem("data"))||{}},$=Object(H.combineReducers)({account:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"ACCOUNT_AUTH_LOADING":return Object(m.a)({},e,{isLoading:!0});case"ACCOUNT_AUTH_SUCCESS":return Object(m.a)({},e,{},n,{isLoading:!1,isAuth:!0});case"ACCOUNT_AUTH_FAUL":return Object(m.a)({},e,{},n,{isLoading:!1,isAuth:!1});case"ACCOUNT_LOGIN_LOADING":return Object(m.a)({},e,{isLoading:!0});case"ACCOUNT_LOGIN_SUCCESS":return localStorage.setItem("token",n.token),Object(m.a)({},e,{},n,{isLoading:!1,isAuth:!0});case"ACCOUNT_LOGIN_FAIL":return Object(m.a)({},e,{isLoading:!1,isAuth:!1});case"ACCOUNT_REGISTER_LOADING":return Object(m.a)({},e,{isLoading:!0});case"ACCOUNT_REGISTER_SUCCESS":return localStorage.setItem("token",n.token),Object(m.a)({},e,{},n,{isLoading:!1,isAuth:!1});case"ACCOUNT_REGISTER_FAIL":return Object(m.a)({},e,{isLoading:!1,isAuth:!1});case"ACCOUNT_LOGOUT":return localStorage.removeItem("token"),{email:null,token:null,isLoading:!1,isAuth:!1};default:return e}},modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0,a=t.type;switch(a){case"MODAL_LOGIN_OPEN":return Object(m.a)({},e,{login:!0});case"MODAL_LOGIN_CLOSE":return Object(m.a)({},e,{login:!1});case"MODAL_REGISTER_OPEN":return Object(m.a)({},e,{register:!0});case"MODAL_REGISTER_CLOSE":return Object(m.a)({},e,{register:!1});default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"ERROR_MESSAGE":return{message:n};default:return e}},algorithm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"ALGO_LIST_LOADING":return{isLoading:!0,isLoaded:!1};case"ALGO_LIST_SUCCESS":var r=n.map((function(e){return Object(m.a)({},e,{isExecuting:!1,result:{}})}));return Object(m.a)({},e,{list:Object(m.a)({},r),isLoading:!1,isLoaded:!0});case"ALGO_LIST_FAIL":return Object(m.a)({},e,{isLoading:!1,isLoaded:!0});case"ALGO_EXECUTE_LOADING":var l=Object.entries(e.list).find((function(e){return e[1].id===n}))[0];return Object(m.a)({},e,{list:Object(m.a)({},e.list,Object(z.a)({},l,Object(m.a)({},e.list[l],{isExecuting:!0})))});case"ALGO_EXECUTE_SUCCESS":var c=Object.entries(e.list).find((function(e){return e[1].id===n.id}))[0];return Object(m.a)({},e,{list:Object(m.a)({},e.list,Object(z.a)({},c,Object(m.a)({},e.list[c],{isExecuting:!1,result:n.data})))});case"ALGO_EXECUTE_FAIL":var o=Object.entries(e.list).find((function(e){return e[1].id===n}))[0];return Object(m.a)({},e,{list:Object(m.a)({},e.list,Object(z.a)({},o,Object(m.a)({},e.list[o],{isExecuting:!1})))});default:return e}},data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"DATA_LOADING":return Object(m.a)({},e,{isLoading:!0,data:{}});case"DATA_SUCCESS":for(var r={},l=0;l<n.data.t.length;l++)r=Object(m.a)({},r,Object(z.a)({},n.data.t[l],{c:n.data.c[l],h:n.data.h[l],l:n.data.l[l],o:n.data.o[l],v:n.data.v[l]}));return localStorage.setItem("data",JSON.stringify(r)),Object(m.a)({},e,{isLoading:!1,data:r,result:Object(m.a)({},n)});case"DATA_FAIL":return Object(m.a)({},e,{isLoading:!1});default:return e}}}),Q=[q.a],V=Object(H.createStore)($,{},Object(B.composeWithDevTools)(H.applyMiddleware.apply(void 0,Q)));Object(l.render)(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,{store:V},r.a.createElement(W,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.e5fea632.chunk.js.map