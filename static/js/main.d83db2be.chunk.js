(this.webpackJsonpkajkam=this.webpackJsonpkajkam||[]).push([[0],{62:function(e,t,n){e.exports=n(77)},72:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(19),i=n.n(o),c=n(11),l=n(20),d=n(21),s=n(23),u=n(22),p=n(9),b=n(2),f=n(27),h=n(94),m=n(92),E=n(96),v=n(93),g=n(28),x=n(3),D=n(56);function j(){var e=Object(b.a)(["\n  margin-left: 8px;\n  cursor: pointer;\n"]);return j=function(){return e},e}function O(){var e=Object(b.a)(["\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  margin-left: 8px;\n"]);return O=function(){return e},e}function y(){var e=Object(b.a)(["\n  resize: none;\n  width: 100%;\n  overflow: hidden;\n  outline: none;\n  border: none;\n"]);return y=function(){return e},e}function I(){var e=Object(b.a)(["\n  min-height: 85px;\n  padding: 6px 8px 2px;\n"]);return I=function(){return e},e}function w(){var e=Object(b.a)(["\n  width: 284px;\n  margin-bottom: 8px;\n"]);return w=function(){return e},e}var T=x.a.div(w()),A=Object(x.a)(E.a)(I()),k=Object(x.a)(D.a)(y()),C=x.a.div(O()),_=Object(x.a)(m.a)(j()),S=r.a.memo((function(e){var t=e.list,n=e.text,a=void 0===n?"":n,o=e.onChange,i=e.closeForm,c=e.children,l=t?"Enter list title...":"Enter a title for this card...";return r.a.createElement(T,null,r.a.createElement(A,null,r.a.createElement(k,{placeholder:l,autoFocus:!0,onFocus:function(e){e.target.select()},onBlur:i,value:a,onChange:function(e){return o(e)}})),r.a.createElement(C,null,c,r.a.createElement(_,{onMouseDown:i},"close")))})),R=n(31),L=n.n(R),B=function(e){return{type:H.SET_CURRENT_BOARD,payload:{boardID:e}}},N=function(e){return function(t,n){t({type:H.ADD_LIST,payload:{listTitle:e,boardID:n().currentBoard.boardID,listID:L()()}})}},P=function(e,t,n,a,r,o){return function(i,c){i({type:H.DRAG_HAPPENED,payload:{droppableIdStart:e,droppableIdEnd:t,droppableIndexStart:n,droppableIndexEnd:a,draggableId:r,type:o,boardID:c().currentBoard.boardID}})}},F=function(e,t){return{type:H.ADD_CARD,payload:{text:t,listID:e,cardID:L()()}}},H={ADD_CARD:"ADD_CARD",ADD_LIST:"ADD_LIST",DRAG_HAPPENED:"DRAG_HAPPENED",EDIT_CARD:"EDIT_CARD",DELETE_CARD:"DELETE_CARD",EDIT_LIST_TITLE:"EDIT_LIST_TITLE",DELETE_LIST:"DELETE_LIST",ADD_BOARD:"ADD_BOARD",DELETE_BOARD:"DELETE_BOARD",SET_CURRENT_BOARD:"SET_CURRENT_BOARD"},z=n(95);function M(){var e=Object(b.a)(["\n  && {\n    color: white;\n    background: #5aac44;\n  }\n"]);return M=function(){return e},e}var G=Object(x.a)(z.a)(M()),J=function(e){var t=e.text,n=e.onClick;return r.a.createElement(G,{variant:"contained",onMouseDown:n},t)};function K(){var e=Object(b.a)(["\n  position: absolute;\n  display: none;\n  right: 5px;\n  bottom: 5px;\n  opacity: 0.5;\n  ",":hover & {\n    display: block;\n    cursor: pointer;\n  }\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return K=function(){return e},e}function U(){var e=Object(b.a)(["\n  position: absolute;\n  display: none;\n  right: 5px;\n  top: 5px;\n  opacity: 0.5;\n  ",":hover & {\n    display: block;\n    cursor: pointer;\n  }\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return U=function(){return e},e}function W(){var e=Object(b.a)(["\n  margin: 0 0 8px 0;\n  position: relative;\n  max-width: 100%;\n  word-wrap: break-word;\n"]);return W=function(){return e},e}var q=x.a.div(W()),V=Object(x.a)(m.a)(U(),q),X=Object(x.a)(m.a)(K(),q),Y=r.a.memo((function(e){var t=e.text,n=e.id,o=e.listID,i=e.index,c=e.dispatch,l=Object(a.useState)(!1),d=Object(f.a)(l,2),s=d[0],u=d[1],p=Object(a.useState)(t),b=Object(f.a)(p,2),m=b[0],x=b[1],D=function(e){c(function(e,t){return{type:H.DELETE_CARD,payload:{cardID:e,listID:t}}}(n,o))};return s?r.a.createElement(S,{text:m,setText:x,closeForm:function(e){u(!1),x(t)},onChange:function(e){x(e.target.value)}},r.a.createElement(J,{text:"Save",onClick:function(e){e.preventDefault(),c(function(e,t,n){return{type:H.EDIT_CARD,payload:{cardID:e,listID:t,newText:n}}}(n,o,m)),u(!1)}})):r.a.createElement(g.b,{draggableId:String(n),index:i},(function(e){return r.a.createElement(q,Object.assign({ref:e.innerRef},e.draggableProps,e.dragHandleProps,{onDoubleClick:function(){return u(!0)}}),r.a.createElement(E.a,null,r.a.createElement(V,{fontSize:"small",onMouseDown:function(){return u(!0)}},"edit"),r.a.createElement(X,{fontSize:"small",onMouseDown:D},"delete"),r.a.createElement(v.a,null,r.a.createElement(h.a,null,t))))}))})),$=Object(c.b)()(Y);function Q(){var e=Object(b.a)(["\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    border-radius: 3px;\n    height: 36px;\n    width: 270px;\n    margin-left: 8px;\n    margin-right: 8px;\n    padding-left: 10px;\n    padding-right: 10px;\n    opacity: ",";\n    color: ",";\n    background-color: ",";\n  "]);return Q=function(){return e},e}var Z=function(e){var t=e.list,n=e.onClick,a=t?"Add another list":"Add another card",o=t?1:.5,i=t?"white":"inherit",c=t?"rgba(0,0,0,.15)":"inherit",l=x.a.div(Q(),o,i,c);return r.a.createElement(l,{onClick:n},r.a.createElement(m.a,null,"add"),r.a.createElement("span",{style:{flexShrink:0}}," ",a))};function ee(){var e=Object(b.a)(["\n  border-radius: 3px;\n  width: 300px;\n  height: 100%;\n  margin-right: 8px;\n"]);return ee=function(){return e},e}var te=x.a.div(ee()),ne=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={formOpen:!1,text:""},e.openForm=function(){e.setState({formOpen:!0})},e.closeForm=function(t){e.setState({formOpen:!1,text:""})},e.handleListInputChange=function(t){t.target.value.length<=20&&e.setState({text:t.target.value})},e.handleCardInputChange=function(t){t.target.value.length<=150&&e.setState({text:t.target.value})},e.handleAddList=function(){var t=e.props.dispatch,n=e.state.text;n&&(e.setState({text:""}),t(N(n)))},e.handleAddCard=function(){var t=e.props,n=t.dispatch,a=t.listID,r=e.state.text;r&&(e.setState({text:""}),n(F(a,r)))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.text,n=e.formOpen,a=this.props.list;return a?n?r.a.createElement(te,null,r.a.createElement(S,{text:t,onChange:this.handleListInputChange,closeForm:this.closeForm},r.a.createElement(J,{text:"Add List",onClick:this.handleAddList}))):r.a.createElement(te,null,r.a.createElement(Z,{list:a,onClick:this.openForm})):n?r.a.createElement(S,{text:t,onChange:this.handleCardInputChange,closeForm:this.closeForm},r.a.createElement(J,{text:"Add Card",onClick:this.handleAddCard})):r.a.createElement(Z,{list:a,onClick:this.openForm})}}]),n}(a.Component),ae=Object(c.b)()(ne);function re(){var e=Object(b.a)(["\n  display: none;\n  opacity: 0.5;\n  ",":hover & {\n    display: block;\n    cursor: pointer;\n  }\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return re=function(){return e},e}function oe(){var e=Object(b.a)(["\n  transition: background 0.3s ease-in;\n  ",":hover & {\n    background: #ccc;\n  }\n"]);return oe=function(){return e},e}function ie(){var e=Object(b.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n"]);return ie=function(){return e},e}function ce(){var e=Object(b.a)(["\n  width: 100%;\n  border: none;\n  outline-color: blue;\n  border-radius: 3px;\n  margin-bottom: 3px;\n  padding: 5px;\n"]);return ce=function(){return e},e}function le(){var e=Object(b.a)(["\n  background-color: #dfe3e6;\n  border-radius: 3px;\n  width: 300px;\n  height: 100%;\n  padding: 8px;\n  margin-right: 8px;\n"]);return le=function(){return e},e}var de=x.a.div(le()),se=x.a.input(ce()),ue=x.a.div(ie()),pe=x.a.h4(oe(),ue),be=Object(x.a)(m.a)(re(),ue),fe=r.a.memo((function(e){var t=e.title,n=e.cards,o=e.listID,i=e.index,c=e.dispatch,l=Object(a.useState)(!1),d=Object(f.a)(l,2),s=d[0],u=d[1],p=Object(a.useState)(t),b=Object(f.a)(p,2),h=b[0],m=b[1],E=function(e){e.target.select()},v=function(e){e.preventDefault(),e.target.value.length<=20&&m(e.target.value)},x=function(e){u(!1),c(function(e,t){return{type:H.EDIT_LIST_TITLE,payload:{listID:e,newListTitle:t}}}(o,h))},D=function(){c(function(e){return function(t,n){return t({type:H.DELETE_LIST,payload:{listID:e,boardID:n().currentBoard.boardID}})}}(o))};return r.a.createElement(g.b,{draggableId:String(o),index:i},(function(e){return r.a.createElement(de,Object.assign({},e.draggableProps,{ref:e.innerRef},e.dragHandleProps),r.a.createElement(g.c,{droppableId:String(o),type:"card"},(function(e){return r.a.createElement("div",null,r.a.createElement("div",null,s?r.a.createElement(se,{type:"text",value:h,onChange:v,autoFocus:!0,onFocus:E,onBlur:x}):r.a.createElement(ue,{onClick:function(){return u(!0)}},r.a.createElement(pe,null,h),r.a.createElement(be,{onClick:D},"delete"))),r.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef}),n.map((function(e,t){return r.a.createElement($,{key:e.cardID,index:t,text:e.text,id:e.cardID,listID:o})})),e.placeholder,r.a.createElement(ae,{listID:o})))})))}))})),he=Object(c.b)()(fe);function me(){var e=Object(b.a)(["\n  width: 100%;\n  font-size: 40px;\n  color: white;\n  font-weight: bold;\n  font-family: Arial, Helvetica, sans-serif;\n  margin-top: 55px;\n  margin-bottom: 20px;\n"]);return me=function(){return e},e}function Ee(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return Ee=function(){return e},e}var ve=x.a.div(Ee()),ge=x.a.h3(me()),xe=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onDragEnd=function(t){var n=t.destination,a=t.source,r=t.draggableId,o=t.type;n&&e.props.dispatch(P(a.droppableId,n.droppableId,a.index,n.index,r,o))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.boardID;this.props.dispatch(B(e))}},{key:"render",value:function(){var e=this.props,t=e.lists,n=e.cards,a=e.match,o=e.boards[a.params.boardID];if(!o)return r.a.createElement("h1",{style:{textAlign:"center"}},"Board not found!");var i=o.lists;return r.a.createElement(g.a,{onDragEnd:this.onDragEnd},r.a.createElement(ge,null,o.boardTitle),r.a.createElement(g.c,{droppableId:"all-lists",direction:"horizontal",type:"list"},(function(e){return r.a.createElement(ve,Object.assign({},e.droppableProps,{ref:e.innerRef}),i.map((function(e,a){var o=t[e];if(o){var i=o.cards.map((function(e){return n[e]}));return r.a.createElement(he,{key:o.listID,listID:o.listID,title:o.listTitle,cards:i,index:a})}})),e.placeholder,r.a.createElement(ae,{list:!0}))})))}}]),n}(a.Component),De=Object(c.b)((function(e){return{boards:e.boards,currentBoard:e.currentBoard,lists:e.lists,cards:e.cards}}))(xe);n(48);function je(){var e=Object(b.a)(["\n  width: 70px;\n  height: 50px;\n  background-color: #2e7196;\n  color: white;\n  font-size: 17px;\n  padding: 10px;\n  box-sizing: border-box;\n  border-radius: 10px;\n  border: none;\n  outline-color: blue;\n  box-shadow: 0 2px 4px grey;\n  align-self: center;\n  margin: 10px;\n"]);return je=function(){return e},e}function Oe(){var e=Object(b.a)(["\n  width: 300px;\n  height: 50px;\n  font-size: 20px;\n  padding: 10px;\n  box-sizing: border-box;\n  border-radius: 3px;\n  border: none;\n  outline-color: blue;\n  box-shadow: 0 2px 4px grey;\n  align-self: center;\n"]);return Oe=function(){return e},e}function ye(){var e=Object(b.a)(["\n  font-size: 48px;\n  color: white;\n  font-weight: bold;\n  font-family: Arial, Helvetica, sans-serif;\n  padding: 10px;\n  margin-top: 10px;\n"]);return ye=function(){return e},e}function Ie(){var e=Object(b.a)(["\n  display: block;\n  color: white;\n  opacity: 0.3;\n  ",":hover & {\n    display: block;\n    cursor: pointer;\n  }\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return Ie=function(){return e},e}function we(){var e=Object(b.a)(["\n  color: white;\n  text-decoration: none;\n  opacity: 1;\n  ",":hover & {\n    display: block;\n    cursor: pointer;\n    opacity: 1;\n    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6,\n      0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6;\n  }\n"]);return we=function(){return e},e}function Te(){var e=Object(b.a)(["\n  height: 100px;\n  width: 200px;\n  background: #175160;\n  padding: 10px;\n  margin: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  border-radius: 5px;\n  box-shadow: 0 2px 4px black;\n"]);return Te=function(){return e},e}function Ae(){var e=Object(b.a)(["\n  flex: 1;\n  height: 50%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n"]);return Ae=function(){return e},e}function ke(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-sizing: border-box;\n"]);return ke=function(){return e},e}var Ce=x.a.div(ke()),_e=x.a.div(Ae()),Se=x.a.div(Te()),Re=x.a.h4(we(),Se),Le=Object(x.a)(m.a)(Ie(),Se),Be=x.a.h3(ye()),Ne=x.a.input(Oe()),Pe=x.a.button(je()),Fe=Object(c.b)((function(e){return{boards:e.boards}}))((function(e){var t=e.boards,n=e.dispatch;e.match;n(B(null));var o=Object(a.useState)(""),i=Object(f.a)(o,2),c=i[0],l=i[1],d=function(e){e.target.value.length<12&&l(e.target.value)},s=function(e){var t;e.preventDefault(),n((t=c,{type:H.ADD_BOARD,payload:{boardTitle:t,boardID:L()()}})),l("")},u=function(e,t){n(function(e){return{type:H.DELETE_BOARD,payload:{boardID:e}}}(t))};return r.a.createElement(Ce,null,r.a.createElement(Be,null,"Boards"),r.a.createElement(_e,null,Object.entries(t).map((function(e){var t=Object(f.a)(e,2),n=t[0],a=t[1];return r.a.createElement(Se,null,r.a.createElement("a",{href:"#/boards/".concat(n),style:{width:"100%",height:"100%",display:"flex",textDecoration:"none",textAlign:"center",justifyContent:"center",alignItems:"center"}},r.a.createElement(Re,null,a.boardTitle)),r.a.createElement("div",{className:"col-1"},r.a.createElement(Le,{style:{zIndex:"10"},onClick:function(e){return u(0,n)}},"delete")))}))),r.a.createElement("form",{onSubmit:s,style:{textAlign:"center"}},r.a.createElement(Be,null,"Create new Board"),r.a.createElement(Ne,{onChange:d,value:c,placeholder:"Enter title and Hit enter",type:"text"}),r.a.createElement(Pe,{type:"button submit"},"Create")))})),He=(n(72),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"fixed-top navbar-dark bg-dark"},r.a.createElement("div",{className:"row my-3"},r.a.createElement("div",{className:"col-4 text-left"},r.a.createElement("a",{className:"text-white",style:{padding:"5px"},href:"#"},"Home")),r.a.createElement("div",{className:"col-4 text-center"},r.a.createElement("a",{className:"text-white gh1",style:{backgroundColor:"black",boxShadow:"0px 0px 5px #fff",textDecoration:"none",borderRadius:"8px",padding:"2px"},href:"#"},"K A J K A M")),r.a.createElement("div",{className:"col-4 text-right"},r.a.createElement("a",{className:"text-white",style:{padding:"5px"},href:"#/about"},"About"))))}}]),n}(a.Component)),ze=Object(c.b)((function(e){return{boards:e.boards,currentBoard:e.currentBoard}}))(He),Me=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{style:{color:"white"}},"About Me"),r.a.createElement("p",{style:{color:"white"}},"I am Md Shahriar Hossain Sajib. Currently, working as a C/C++ Software Engineer in Samsung R&D Institute. I work in Tizen mobile application projects for Samsung Galaxy Watches."),r.a.createElement("p",{style:{color:"white"}},"To make this time of quarantine productive, I decided to learn web frameworks and make projects. I targeted ReactJS and NodeJS for this. This project \"K A J K A M\" is based on React and Redux, deployed on Github Pages. There is no backend, the data is stored in the user's browser's local storage. So if the local storage is cleared (for example by clearing cookies), the data will be gone."),r.a.createElement("p",{style:{color:"white"}},'To do this project, I took a lot help from the internet. I saw many tutorial videos. One of them was a series on cloning Trello app by a channel called "SelfDevTV". I followed the videos and also the many commits of the git repository.'),r.a.createElement("p",{style:{color:"white"}},"There are no copyrights related to this project and you can use any of the source materials. Link of github repo is"," ",r.a.createElement("a",{href:"https://github.com/sajib21/kajkam"},"here"),"."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h1",{style:{color:"white"}},"Contacts"),r.a.createElement("p",{style:{color:"white"}},"LinkedIn:"," ",r.a.createElement("a",{href:"https://www.linkedin.com/in/sajibcsedu/"},"https://www.linkedin.com/in/sajibcsedu/")),r.a.createElement("p",{style:{color:"white"}},"GitHub:"," ",r.a.createElement("a",{href:"https://github.com/sajib21"},"https://github.com/sajib21")),r.a.createElement("p",{style:{color:"white"}},"Email: ",r.a.createElement("a",{href:"shariarsajib@gmail.com"},"shariarsajib@gmail.com")))}}]),n}(a.Component),Ge=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{style:{minHeight:"100vh",minWidth:"100%",overflowY:"auto",overflowX:"auto",background:"linear-gradient(45deg, #dfd819, #0da5f1)",padding:"15px"}},r.a.createElement(ze,null),r.a.createElement("div",{style:{marginTop:"60px"}},r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/boards/:boardID",component:De}),r.a.createElement(p.b,{path:"/about",component:Me}),r.a.createElement(p.b,{path:"/home",component:Fe}),r.a.createElement(p.a,{from:"/",to:"/home"}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Je=n(13),Ke=n(57),Ue=n(38),We=n(12),qe=n(5),Ve={"board-00":{id:"board-00",lists:["list-00"],boardTitle:"dev board"}},Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H.ADD_BOARD:var n=t.payload,a=n.boardTitle,r=n.boardID,o={boardID:r,boardTitle:a,lists:[]};return Object(qe.a)(Object(qe.a)({},e),{},Object(We.a)({},r,o));case H.DELETE_BOARD:var i=t.payload.boardID,c=Object(qe.a)({},e);return delete c[i],c;case H.ADD_LIST:var l=t.payload,d=l.boardID,s=l.listID,u=e[d];return u.lists.push(s),Object(qe.a)(Object(qe.a)({},e),{},Object(We.a)({},d,u));case H.DELETE_LIST:var p=t.payload,b=p.boardID,f=p.listID,h=e[b],m=h.lists.filter((function(e){return e!=f}));return h.lists=m,Object(qe.a)(Object(qe.a)({},e),{},Object(We.a)({},b,h));case H.DRAG_HAPPENED:var E=t.payload,v=E.boardID,g=E.type,x=E.droppableIndexStart,D=E.droppableIndexEnd;if("list"!==g)return e;var j=e[v],O=j.lists,y=O.splice(x,1);return O.splice.apply(O,[D,0].concat(Object(Ue.a)(y))),j.lists=O,Object(qe.a)(Object(qe.a)({},e),{},Object(We.a)({},v,j));default:return e}},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H.SET_CURRENT_BOARD:return t.payload;default:return e}},$e={"list-00":{listID:"list-00",cards:["card-00"],listTitle:"myList",boardID:"board-00"}},Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H.ADD_LIST:var n=t.payload,a=n.listTitle,r=n.listID,o=n.boardID,i={listTitle:a,listID:r,cards:[],boardID:o};return Object(qe.a)(Object(qe.a)({},e),{},Object(We.a)({},r,i));case H.EDIT_LIST_TITLE:var c=t.payload,l=c.listID,d=c.newListTitle,s=e[l];return s.title=d,Object(qe.a)(Object(qe.a)({},e),{},Object(We.a)({},l,s));case H.DELETE_LIST:var u=t.payload,p=u.listID,b=(u.boardID,e);return delete b[p],b;case H.ADD_CARD:var f=t.payload,h=f.listID,m=f.cardID,E=e[h];return E.cards.push(m),Object(qe.a)(Object(qe.a)({},e),{},Object(We.a)({},h,E));case H.DELETE_CARD:var v=t.payload,g=v.cardID,x=v.listID,D=e[x],j=D.cards.filter((function(e){return e!==g}));return D.cards=j,Object(qe.a)(Object(qe.a)({},e),{},Object(We.a)({},x,D));case H.DRAG_HAPPENED:var O=t.payload,y=O.droppableIdStart,I=O.droppableIdEnd,w=O.droppableIndexStart,T=O.droppableIndexEnd,A=(O.draggableId,O.type);if("list"===A)return e;if(y===I){var k,C=e[y],_=C.cards.splice(w,1);return(k=C.cards).splice.apply(k,[T,0].concat(Object(Ue.a)(_))),Object(qe.a)(Object(qe.a)({},e),{},Object(We.a)({},y,C))}var S,R,L=e[y],B=L.cards.splice(w,1),N=e[I];return(S=N.cards).splice.apply(S,[T,0].concat(Object(Ue.a)(B))),Object(qe.a)(Object(qe.a)({},e),{},(R={},Object(We.a)(R,y,L),Object(We.a)(R,I,N),R));default:return e}},Ze={"card-00":{text:"Dev Card",id:"card-00",listID:"list-00"}},et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H.ADD_CARD:var n=t.payload,a=n.text,r=n.listID,o=n.cardID,i={text:a,cardID:o,listID:r};return Object(qe.a)(Object(qe.a)({},e),{},Object(We.a)({},o,i));case H.EDIT_CARD:var c=t.payload,l=c.cardID,d=c.newText,s=e[l];return s.text=d,Object(qe.a)(Object(qe.a)({},e),{},Object(We.a)({},l,s));case H.DELETE_CARD:var u=t.payload.cardID,p=e;return delete p[u],p;default:return e}},tt=Object(Je.c)({boards:Xe,currentBoard:Ye,lists:Qe,cards:et}),nt=n(44),at=n(58),rt={key:"kajkamkey",storage:n.n(at).a},ot=Object(nt.a)(rt,tt),it=(n(76),n(59)),ct=n.n(it),lt=n(60),dt=n(34),st=function(){var e=Object(Je.e)(ot,Object(Je.a)(Ke.a));return{store:e,persistor:Object(nt.b)(e)}}(),ut=st.persistor,pt=st.store;i.a.render(r.a.createElement(c.a,{store:pt},r.a.createElement(lt.a,{loading:null,persistor:ut},r.a.createElement(dt.a,null,r.a.createElement(Ge,null)))),document.getElementById("root")),ct()(document).bind("DOMNodeRemoved",(function(e){console.log("Removed: ",e.target.title.nodeName)})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.d83db2be.chunk.js.map