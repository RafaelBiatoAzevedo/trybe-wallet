(this["webpackJsonpsd-0x-project-trybewallet"]=this["webpackJsonpsd-0x-project-trybewallet"]||[]).push([[0],{22:function(e,t,n){e.exports=n.p+"static/media/walletIcon.24f91bcd.png"},34:function(e,t,n){e.exports=n(49)},39:function(e,t,n){},44:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(20),l=n.n(i),c=n(17),u=(n(39),n(13));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=n(14),o=n(32),d=n(33),p=n(1),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return{type:"EDITION",id:e,status:t}},h={email:""},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;return"LOGIN"===t.type?{email:t.value}:e},v=n(24),b={statusEdition:!1,idEdition:"",currencies:[],expenses:[]},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENCIES":return Object(p.a)(Object(p.a)({},e),{},{currencies:t.currencies});case"SAVE":return Object(p.a)(Object(p.a)({},e),{},{expenses:[].concat(Object(v.a)(e.expenses),[t.value])});case"DEL":return Object(p.a)(Object(p.a)({},e),{},{expenses:Object(v.a)(e.expenses.filter((function(e){return e.id!==t.value})))});case"EDITION":return Object(p.a)(Object(p.a)({},e),{},{statusEdition:t.status,idEdition:t.id});case"EDIT":return Object(p.a)(Object(p.a)({},e),{},{expenses:Object(v.a)(e.expenses.map((function(e){return e.id===t.id?t.value:e})))});default:return e}},y=Object(s.combineReducers)({user:E,wallet:f}),j=Object(s.createStore)(y,Object(o.composeWithDevTools)(Object(s.applyMiddleware)(d.a))),O=n(3),g=n(16),x=n(7),w=n(8),k=n(11),C=n(10),I=n(9),N=(n(44),[{email:"rafaelazevedo321@gmail.com",password:"62178177"},{email:"larissabiato@gmail.com",password:"12345678"}]),S=n(22),T=n.n(S),D=function(e){Object(C.a)(n,e);var t=Object(I.a)(n);function n(e){var a;return Object(x.a)(this,n),(a=t.call(this,e)).validEmail=a.validEmail.bind(Object(k.a)(a)),a.validPassword=a.validPassword.bind(Object(k.a)(a)),a.updateState=a.updateState.bind(Object(k.a)(a)),a.updateStatus=a.updateStatus.bind(Object(k.a)(a)),a.state={email:"",password:"",status:!0},a}return Object(w.a)(n,[{key:"componentDidUpdate",value:function(){var e=this.state,t=e.email,n=e.password;if(e.status){if(this.validEmail(t)&&this.validPassword(n))return this.updateStatus(!1)}else if(!this.validEmail(t)||!this.validPassword(n))return this.updateStatus(!0)}},{key:"updateStatus",value:function(e){this.setState((function(t){return Object(p.a)(Object(p.a)({},t),{},{status:e})}))}},{key:"validEmail",value:function(e){var t="",n="";return e.includes("@")&&e.includes(".com")&&(t=e.slice(0,e.indexOf("@")),n=e.slice(e.indexOf("@")+1)),t.length>=1&&n.length>=5}},{key:"validPassword",value:function(e){return e.length>=6}},{key:"updateState",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(g.a)({},n,a))}))}},{key:"handleClickGo",value:function(e){var t,n=this.state,a=n.email,r=n.password,i=this.props.saveMail;"enter"===e?N.some((function(e){return e.email===a&&e.password===r}))?i(a):alert("Email or Password invalid !"):(t={email:a,password:r},N.push(t),i(a))}},{key:"forgotPassword",value:function(){var e=this.state.email;this.validEmail(e)?alert("Password sent for ".concat(e)):alert("Insert email valid")}},{key:"renderBtns",value:function(){var e=this,t=this.state.status;return r.a.createElement("div",{className:"container-btns-login"},r.a.createElement(c.b,{to:"/wallet"},r.a.createElement("button",{className:"btn-enter",disabled:t,onClick:function(){return e.handleClickGo("enter")},type:"button"},"Enter")),r.a.createElement(c.b,{to:"/wallet"},r.a.createElement("button",{type:"button",className:"btn-enter",disabled:t,onClick:function(){return e.handleClickGo("register")}},"Register")))}},{key:"renderLogin",value:function(){var e=this;return r.a.createElement("div",{className:"container-center"},r.a.createElement("div",{className:"container-login"},r.a.createElement("h1",null,"$ Login $"),r.a.createElement("input",{name:"email",type:"text","data-testid":"email-input",placeholder:"Email",onChange:this.updateState}),r.a.createElement("input",{name:"password",type:"password","data-testid":"password-input",placeholder:"Password",onChange:this.updateState}),this.renderBtns(),r.a.createElement("button",{type:"button",onClick:function(){return e.forgotPassword()},className:"btn-forgot"},"Forgot password ?")))}},{key:"renderHeader",value:function(){return r.a.createElement("div",{className:"container-headerLogin"},r.a.createElement("img",{className:"img-walletIcon",src:T.a,alt:"walletIcon"}),r.a.createElement("h1",null,"Exchange Wallet"))}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderHeader(),this.renderLogin())}}]),n}(r.a.Component),R=Object(u.b)(null,(function(e){return{saveMail:function(t){return e({type:"LOGIN",value:t})}}}))(D),F=n(18),L=n.n(F),P=n(23),B=function(){var e=Object(P.a)(L.a.mark((function e(){var t,n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://economia.awesomeapi.com.br/json/all");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(e){Object(C.a)(n,e);var t=Object(I.a)(n);function n(e){var a;return Object(x.a)(this,n),(a=t.call(this,e)).updateState=a.updateState.bind(Object(k.a)(a)),a.updateCurrencies=a.updateCurrencies.bind(Object(k.a)(a)),a.handleButton=a.handleButton.bind(Object(k.a)(a)),a.updateEdit=a.updateEdit.bind(Object(k.a)(a)),a.IN_STATE={value:"",description:"",currency:"",method:"",tag:""},a.state={editingState:!1,expenses:{value:"",description:"",currency:"",method:"",tag:""}},a}return Object(w.a)(n,[{key:"componentDidMount",value:function(){this.updateCurrencies()}},{key:"updateCurrencies",value:function(){var e=Object(P.a)(L.a.mark((function e(){var t,n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.setCurrencies,e.next=3,B();case 3:delete(n=e.sent).USDT,t(Object.keys(n).reduce((function(e,t){return e.push(t),e}),[]));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateState",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState((function(e){return Object(p.a)(Object(p.a)({},e),{},{expenses:Object(p.a)(Object(p.a)({},e.expenses),{},Object(g.a)({},n,a))})}))}},{key:"updateEdit",value:function(){var e=this.props,t=e.listExpenses,n=e.idEdition,a=Object(p.a)({},t.find((function(e){return e.id===n})));this.setState((function(e){return Object(p.a)(Object(p.a)({},e),{},{editingState:!0,expenses:a})}))}},{key:"handleButton",value:function(){var e=this,t=this.state.expenses,n=t.value,a=t.currency;if(""===n||""===a)alert("VALUE or CURRENCY not insert. Check !!!");else{var r=this.props,i=r.saveData,l=r.nextId;i(Object(p.a)({id:l},t)),this.setState((function(t){return Object(p.a)(Object(p.a)({},t),{},{expenses:e.IN_STATE})}))}}},{key:"handleButtonEdit",value:function(){var e=this,t=this.state.expenses,n=t.value,a=t.currency,r=this.props,i=r.saveDataEdited,l=r.edition,c=r.idEdition;""===n||""===a?alert("VALUE or CURRENCY not insert. Check !!!"):(i(c,t),l(!1),this.setState((function(t){return Object(p.a)(Object(p.a)({},t),{},{editingState:!1,expenses:e.IN_STATE})})))}},{key:"renderValueInput",value:function(){var e=this.state.expenses.value;return r.a.createElement("label",{htmlFor:"valueInput"},"Value ",r.a.createElement("input",{value:e,id:"valueInput",type:"number","data-testid":"value-input",name:"value",onChange:this.updateState}))}},{key:"renderCurrencyInput",value:function(){var e=this.state.expenses.currency,t=this.props.currencies;return r.a.createElement("label",{htmlFor:"currencyInput"},"Currency ",r.a.createElement("select",{value:e,id:"currencyInput","data-testid":"currency-input",name:"currency",onChange:this.updateState},r.a.createElement("option",null," "),t.map((function(e){return r.a.createElement("option",{"data-testid":e,key:e,value:e},e)}))))}},{key:"renderMethodInput",value:function(){var e=this.state.expenses.method;return r.a.createElement("label",{htmlFor:"methodInput"},"Method Payment ",r.a.createElement("select",{value:e,id:"methodInput","data-testid":"method-input",name:"method",onChange:this.updateState},r.a.createElement("option",null," "),r.a.createElement("option",{value:"Money"},"Money"),r.a.createElement("option",{value:"Credit card"},"Credit card"),r.a.createElement("option",{value:"Debit card"},"Debit card")))}},{key:"renderTagInput",value:function(){var e=this.state.expenses.tag;return r.a.createElement("label",{htmlFor:"tagInput"},"Tag ",r.a.createElement("select",{value:e,id:"tagInput","data-testid":"tag-input",name:"tag",onChange:this.updateState},r.a.createElement("option",null," "),r.a.createElement("option",{value:"Food"},"Food"),r.a.createElement("option",{value:"Leisure"},"Leisure"),r.a.createElement("option",{value:"Work"},"Work"),r.a.createElement("option",{value:"Transport"},"Transport"),r.a.createElement("option",{value:"Health"},"Health")))}},{key:"renderDescriptionInput",value:function(){var e=this.state.expenses.description;return r.a.createElement("label",{htmlFor:"descriptionInput"},"Description ",r.a.createElement("input",{value:e,id:"descriptionInput",type:"text","data-testid":"description-input",name:"description",onChange:this.updateState}))}},{key:"renderForm",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{className:"form-wallet"},this.renderValueInput(),this.renderCurrencyInput(),this.renderMethodInput(),this.renderTagInput(),this.renderDescriptionInput(),r.a.createElement("button",{className:"btn-form",onClick:this.handleButton,type:"button"},"Add Expense")))}},{key:"renderEdit",value:function(){var e=this,t=this.props.statusEdition,n=this.state.editingState;return t&&!n&&this.updateEdit(),r.a.createElement("div",null,r.a.createElement("form",{className:"form-edit"},this.renderValueInput(),this.renderCurrencyInput(),this.renderMethodInput(),this.renderTagInput(),this.renderDescriptionInput(),r.a.createElement("button",{className:"btn-form",type:"button",onClick:function(){return e.handleButtonEdit()}},"Editar despesa")))}},{key:"render",value:function(){return this.props.statusEdition?this.renderEdit():this.renderForm()}}]),n}(r.a.Component),V=Object(u.b)((function(e){return{nextId:e.wallet.expenses.reduce((function(e,t){return t.id+1}),0),listExpenses:e.wallet.expenses,statusEdition:e.wallet.statusEdition,idEdition:e.wallet.idEdition,currencies:e.wallet.currencies}}),(function(e){return{saveData:function(t){return e((n=t,function(e){fetch("https://economia.awesomeapi.com.br/json/all").then((function(e){return e.json()})).then((function(t){e({type:"SAVE",value:Object(p.a)(Object(p.a)({},n),{},{exchangeRates:Object(p.a)({},t)})})}))}));var n},saveDataEdited:function(t,n){return e(function(e,t){return{type:"EDIT",id:e,value:t}}(t,n))},edition:function(t,n){return e(m(t,n))},setCurrencies:function(t){return e({type:"SET_CURRENCIES",currencies:t})}}}))(M),A=function(e){Object(C.a)(n,e);var t=Object(I.a)(n);function n(){return Object(x.a)(this,n),t.apply(this,arguments)}return Object(w.a)(n,[{key:"sunTotal",value:function(){return this.props.listExpenses.reduce((function(e,t){return e+Number(t.value)*Number(t.exchangeRates[t.currency].ask)}),0).toFixed(2)}},{key:"render",value:function(){var e=this.props.email;return""===e?r.a.createElement(O.a,{to:"/trybe-wallet"}):r.a.createElement("div",{className:"header-wallet"},r.a.createElement("div",{className:"container-walletIcon"},r.a.createElement("img",{className:"img-walletIcon",src:T.a,alt:"walletIcon"}),r.a.createElement("h1",null,"Exchange Wallet")),r.a.createElement("div",{className:"div-email-total"},r.a.createElement("p",{"data-testid":"email-field"},e),r.a.createElement("div",{className:"div-total"},r.a.createElement("p",{className:"element-total"},"Expense total R$"),r.a.createElement("p",{className:"element-total total","data-testid":"total-field"},this.sunTotal()),r.a.createElement("p",{className:"element-total","data-testid":"header-currency-field"},"BRL"))))}}]),n}(r.a.Component),U=Object(u.b)((function(e){return{email:e.user.email,listExpenses:e.wallet.expenses}}),null)(A),W=function(e){Object(C.a)(n,e);var t=Object(I.a)(n);function n(){return Object(x.a)(this,n),t.apply(this,arguments)}return Object(w.a)(n,[{key:"renderTitleTable",value:function(){return r.a.createElement("tr",{className:"tr-title"},r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Tag"),r.a.createElement("th",null,"Method payment"),r.a.createElement("th",null,"Value"),r.a.createElement("th",null,"Currency"),r.a.createElement("th",null,"Exchange"),r.a.createElement("th",null,"Converted value"),r.a.createElement("th",null,"Conversion"),r.a.createElement("th",null,"Edit/Delete"))}},{key:"renderExpense",value:function(e){var t=e.description,n=e.tag,a=e.method,i=e.value,l=e.currency,c=e.exchangeRates,u=e.id,s=this.props,o=s.del,d=s.edit;return r.a.createElement("tr",{className:"tr-expense",key:u},r.a.createElement("td",null,t),r.a.createElement("td",null,n),r.a.createElement("td",null,a),r.a.createElement("td",null,Number(i).toFixed(2)),r.a.createElement("td",null,c[l].name),r.a.createElement("td",null,Number(c[l].ask).toFixed(2)),r.a.createElement("td",null,Number(i*c[l].ask).toFixed(2)),r.a.createElement("td",null,"Real"),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return d(u,!0)},className:"btn-edit",type:"button","data-testid":"edit-btn"},"E"),r.a.createElement("button",{onClick:function(){return o(u)},className:"btn-del",type:"button","data-testid":"delete-btn"},"X")))}},{key:"renderLinesTable",value:function(){var e=this;return this.props.listExpenses.map((function(t){return e.renderExpense(t)}))}},{key:"render",value:function(){return r.a.createElement("table",{className:"container-table"},this.renderTitleTable(),this.renderLinesTable())}}]),n}(r.a.Component),G=Object(u.b)((function(e){return{listExpenses:e.wallet.expenses}}),(function(e){return{del:function(t){return e({type:"DEL",value:t})},edit:function(t,n){return e(m(t,n))}}}))(W),_=(n(47),function(e){Object(C.a)(n,e);var t=Object(I.a)(n);function n(){return Object(x.a)(this,n),t.apply(this,arguments)}return Object(w.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(U,null),r.a.createElement(V,null),r.a.createElement(G,null))}}]),n}(r.a.Component)),H=function(e){Object(C.a)(n,e);var t=Object(I.a)(n);function n(){return Object(x.a)(this,n),t.apply(this,arguments)}return Object(w.a)(n,[{key:"render",value:function(){return r.a.createElement("h1",null,"No Page Found")}}]),n}(r.a.Component);n(48);var $=function(){return r.a.createElement(O.d,null,r.a.createElement(O.b,{exact:!0,path:"/",component:R}),r.a.createElement(O.b,{exact:!0,path:"/trybe-wallet",component:R}),r.a.createElement(O.b,{exact:!0,path:"/wallet",component:_}),r.a.createElement(O.b,{path:"*",component:H}))};l.a.render(r.a.createElement(c.a,null,r.a.createElement(u.a,{store:j},r.a.createElement($,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.71f23374.chunk.js.map