(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a(61)},37:function(e,t,a){},56:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(28),l=a.n(r),c=a(7),i=a(6),s=a(29),u=a(11),m=a(12),h=a(14),d=a(13),E=a(15);a(37);var p=function(e){return o.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")};var f=function(e){var t=e.children;return o.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},t)},b=a(10),v=a.n(b);Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_GOOGLE_BOOKS_API;console.log(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_GOOGLE_BOOKS_API);var k={getBooks:function(){return v.a.get("/api/books")},getBook:function(e){return v.a.get("/api/books/"+e)},deleteBook:function(e){return v.a.delete("/api/books/"+e)},saveBook:function(e){return v.a.post("/api/books",e)}};function g(e){var t=e.fluid,a=e.children;return o.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function O(e){var t=e.fluid,a=e.children;return o.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function y(e){var t=e.size,a=e.children;return o.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}a(56);function B(e){var t=e.children;return o.a.createElement("div",{className:"list-overflow-container"},o.a.createElement("ul",{className:"list-group"},t))}function N(e){var t=e.children;return o.a.createElement("li",{className:"list-group-item"},t)}function j(e){return o.a.createElement("div",{className:"form-group"},o.a.createElement("input",Object.assign({className:"form-control"},e)))}function C(e){return o.a.createElement("div",{className:"form-group"},o.a.createElement("textarea",Object.assign({className:"form-control",rows:"20"},e)))}function _(e){return o.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var w=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],title:"",author:"",synopsis:""},a.loadBooks=function(){k.getBooks().then(function(e){return a.setState({books:e.data,title:"",author:"",synopsis:""})}).catch(function(e){return console.log(e)})},a.deleteBook=function(e){k.deleteBook(e).then(function(e){return a.loadBooks()}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target,n=t.name,o=t.value;a.setState(Object(s.a)({},n,o))},a.handleFormSubmit=function(e){e.preventDefault(),a.state.title&&a.state.author&&k.saveBook({title:a.state.title,author:a.state.author,synopsis:a.state.synopsis}).then(function(e){return a.loadBooks()}).catch(function(e){return console.log(e)})},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return o.a.createElement(g,{fluid:!0},o.a.createElement(O,null,o.a.createElement(y,{size:"md-6"},o.a.createElement(f,null,o.a.createElement("h1",null,"What Books Should I Read?")),o.a.createElement("form",null,o.a.createElement(j,{value:this.state.title,onChange:this.handleInputChange,name:"title",placeholder:"Title (required)"}),o.a.createElement(j,{value:this.state.author,onChange:this.handleInputChange,name:"author",placeholder:"Author (required)"}),o.a.createElement(C,{value:this.state.synopsis,onChange:this.handleInputChange,name:"synopsis",placeholder:"Synopsis (Optional)"}),o.a.createElement(_,{disabled:!(this.state.author&&this.state.title),onClick:this.handleFormSubmit},"Submit Book"))),o.a.createElement(y,{size:"md-6 sm-12"},o.a.createElement(f,null,o.a.createElement("h1",null,"Books On My List")),this.state.books.length?o.a.createElement(B,null,this.state.books.map(function(t){return o.a.createElement(N,{key:t._id},o.a.createElement(c.b,{to:"/books/"+t._id},o.a.createElement("strong",null,t.title," by ",t.author)),o.a.createElement(p,{onClick:function(){return e.deleteBook(t._id)}}))})):o.a.createElement("h3",null,"No Results to Display"))))}}]),t}(n.Component),A=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={book:{}},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;k.getBook(this.props.match.params.id).then(function(t){return e.setState({book:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return o.a.createElement(g,{fluid:!0},o.a.createElement(O,null,o.a.createElement(y,{size:"md-12"},o.a.createElement(f,null,o.a.createElement("h1",null,this.state.book.title," by ",this.state.book.author)))),o.a.createElement(O,null,o.a.createElement(y,{size:"md-10 md-offset-1"},o.a.createElement("article",null,o.a.createElement("h1",null,"Synopsis"),o.a.createElement("p",null,this.state.book.synopsis)))),o.a.createElement(O,null,o.a.createElement(y,{size:"md-2"},o.a.createElement(c.b,{to:"/"},"\u2190 Back to Authors"))))}}]),t}(n.Component);var I=function(){return o.a.createElement(g,{fluid:!0},o.a.createElement(O,null,o.a.createElement(y,{size:"md-12"},o.a.createElement(f,null,o.a.createElement("h1",null,"404 Page Not Found"),o.a.createElement("h1",null,o.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};var S=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},o.a.createElement("a",{className:"navbar-brand",href:"/"},"React Reading List"))};var P=function(){return o.a.createElement(c.a,null,o.a.createElement("div",null,o.a.createElement(S,null),o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:"/",component:w}),o.a.createElement(i.a,{exact:!0,path:"/books",component:w}),o.a.createElement(i.a,{exact:!0,path:"/books/:id",component:A}),o.a.createElement(i.a,{component:I}))))};l.a.render(o.a.createElement(P,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.81bffd3d.chunk.js.map