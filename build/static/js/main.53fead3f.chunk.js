(this["webpackJsonpuser-directory"]=this["webpackJsonpuser-directory"]||[]).push([[0],{19:function(e,t,a){e.exports=a(47)},24:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),o=a.n(l),c=(a(24),a(13)),s=a(14),m=a(2),i=a(18),u=a(17),h=a(15),d=a.n(h).a.get("https://randomuser.me/api/?results=60&nat=us"),p=a(16),E=a.n(p);a(43);var f=function(e){var t=e.employees,a=e.searchTerm,n=e.sortHandler;return r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Image"),r.a.createElement("th",{scope:"col",onClick:function(){n("first")}},"Name"),r.a.createElement("th",{scope:"col"},"Date of Birth"),r.a.createElement("th",{scope:"col"},"Email"),r.a.createElement("th",{scope:"col"},"Phone Number"))),r.a.createElement("tbody",null,t.filter((function(e){return e.name.last.toLowerCase().startsWith(a.toLowerCase())||e.name.first.toLowerCase().startsWith(a.toLowerCase())})).map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,r.a.createElement("center",null,r.a.createElement("img",{src:e.picture.thumbnail}))),r.a.createElement("td",null,e.name.first," ",e.name.last),r.a.createElement("td",null,E()(e.dob.date).format("L")),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.cell))}))))};a(44);var v=function(e){var t=e.searchTerm,a=e.handleInputChange;return r.a.createElement("div",{className:"search"},r.a.createElement("input",{onChange:a,value:t,name:"search","aria-label":"Search",type:"text",placeholder:"Search"}))};a(45);var y=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"jumbotron jumbotron-fluid",id:"jumbo"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"header"},"Employee Directory"),r.a.createElement("p",{className:"lead"},"Use the search box to narrow your results."))))},b=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleInputChange=function(t){e.setState({searchTerm:t.target.value})},e.state={employees:[],searchTerm:"",sorted:!1},e.sortHandler=e.sortHandler.bind(Object(m.a)(e)),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.then((function(t){e.setState({employees:t.data.results})}))}},{key:"sortHandler",value:function(e){var t;this.state.sorted?(t=this.state.employees.sort((function(t,a){return t.name[e].localeCompare(a.name[e])})),this.setState({employees:t,sorted:!1})):(t=this.state.employees.sort((function(t,a){return a.name[e].localeCompare(t.name[e])})),this.setState({employees:t,sorted:!0}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement("div",{className:"container-fluid",id:"contain"},r.a.createElement(v,{searchTerm:this.state.searchTerm,handleInputChange:this.handleInputChange}),r.a.createElement("br",null),r.a.createElement(f,{employees:this.state.employees,sortHandler:this.sortHandler,searchTerm:this.state.searchTerm})))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(46);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.53fead3f.chunk.js.map