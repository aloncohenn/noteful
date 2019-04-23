(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{199:function(e,t,a){},201:function(e,t,a){},203:function(e,t,a){},205:function(e,t,a){},207:function(e,t,a){},209:function(e,t,a){},211:function(e,t,a){},213:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(74),l=a.n(r),c=a(18),i=a(19),s=a(217),d=(a(83),a(85),a(5)),u=a(6),m=a(8),f=a(7),h=a(9),v=a(214),N=a(94),p=a(3),E=o.a.createContext({notes:[],folders:[],deleteNote:function(){},addFolder:function(){}}),b=a(216),g=a(77),y=a(26);a(89);function j(e){e.tag,e.className,e.childrenm;var t=Object(y.a)(e,["tag","className","childrenm"]);return o.a.createElement(e.tag,Object(g.a)({className:["NavCircleButton",e.className].join(" ")},t),e.children)}j.defaultProps={tag:"a"};var k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.find(function(e){return e.id===t})},_=(a(91),function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(E.Consumer,null,function(e){return o.a.createElement("div",{className:"NoteListNav"},o.a.createElement("ul",{className:"NoteListNav__list"},e.folders.map(function(t){return o.a.createElement("li",{key:t.id},o.a.createElement(b.a,{className:"NoteListNav__folder-link",to:"/folder/".concat(t.id)},o.a.createElement("span",{className:"NoteListNav__num-notes"},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.filter(function(e){return e.folderId===t}).length}(e.notes,t.id)),t.name))})),o.a.createElement("div",{className:"NoteListNav__button-wrapper"},o.a.createElement(j,{tag:N.a,to:"/add-folder",type:"button",className:"NoteListNav__add-folder-button"},o.a.createElement(p.a,{icon:"plus"}),o.a.createElement("br",null),"Folder")))})}}]),t}(o.a.Component));a(95);function O(e){return o.a.createElement("div",{className:"NotePageNav"},o.a.createElement(j,{tag:"button",role:"link",onClick:function(){return e.history.goBack()},className:"NotePageNav__back-button"},o.a.createElement(p.a,{icon:"chevron-left"}),o.a.createElement("br",null),"Back"),e.folder&&o.a.createElement("h3",{className:"NotePageNav__folder-name"},e.folder.name))}O.defaultProps={history:{goBack:function(){}}};var C=a(76);a(199);function F(e){return o.a.createElement("div",{className:"Note"},o.a.createElement(E.Consumer,null,function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{className:"Note__title"},o.a.createElement(N.a,{to:"/note/".concat(e.id)},e.name)),o.a.createElement("button",{className:"Note__delete",type:"button",onClick:function(a){return t.deleteNote(e.id)}},o.a.createElement(p.a,{icon:"trash-alt"})," ","remove"),o.a.createElement("div",{className:"Note__dates"},o.a.createElement("div",{className:"Note__dates-modified"},"Modified"," ",o.a.createElement("span",{className:"Date"},Object(C.format)(e.modified,"Do MMM YYYY")))))}))}a(201);function S(e){return o.a.createElement("section",{className:"NoteListMain"},o.a.createElement("ul",null,e.notes.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(F,{id:e.id,name:e.name,modified:e.modified}))})),o.a.createElement("div",{className:"NoteListMain__button-container"},o.a.createElement(j,{tag:N.a,to:"/add-note",type:"button",className:"NoteListMain__add-note-button"},o.a.createElement(p.a,{icon:"plus"}),o.a.createElement("br",null),"Note")))}S.defaultProps={notes:[]};a(203);function x(e){return o.a.createElement("section",{className:"NotePageMain"},o.a.createElement(F,{id:e.note.id,name:e.note.name,modified:e.note.modified}),o.a.createElement("div",{className:"NotePageMain__content"},e.note.content.split(/\n \r|\n/).map(function(e,t){return o.a.createElement("p",{key:t},e)})))}x.defaultProps={note:{content:""}};a(205);function M(e){var t=e.className,a=Object(y.a)(e,["className"]);return o.a.createElement("form",Object.assign({className:["Noteful-form",t].join(" "),action:"#"},a))}var V=function(e){return e.hasError?o.a.createElement("div",{className:"error"},e.message):o.a.createElement(o.a.Fragment,null)},A=(a(207),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={folderName:"",folderNameValid:!1,validationMessages:null},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleSubmit",value:function(e,t){e.preventDefault(),console.log("handle submit ran"),this.context.addFolder(t)}},{key:"validateFolderName",value:function(e){var t=this.state.validationMessages,a=!1;0!==this.context.folders.filter(function(t){return e===t.name}).length&&(t="Folder name already exists",a=!0),0===e.length&&(t="Folder must have a name",a=!0),this.setState({validationMessages:t,folderNameValid:!a},this.formValid(e))}},{key:"formValid",value:function(e){this.state.folderNameValid&&this.setState({folderName:e})}},{key:"updateFolderName",value:function(e){var t=this;this.setState({name:e},function(){return t.validateFolderName(e)})}},{key:"render",value:function(){var e=this;return o.a.createElement("section",{className:"AddFolder"},o.a.createElement("h2",null,"Create a folder"),o.a.createElement(M,{onSubmit:function(t,a){return e.handleSubmit(t,e.state.folderName)}},o.a.createElement("div",{className:"field"},o.a.createElement("label",{htmlFor:"folder-name-input"},"Name"),o.a.createElement("input",{type:"text",id:"folder-name-input",onChange:function(t){return e.updateFolderName(t.target.value)}}),o.a.createElement(V,{hasError:!this.state.folderNameValid,message:this.state.validationMessages})),o.a.createElement("div",{className:"buttons"},o.a.createElement("button",{type:"submit",disabled:!this.state.folderNameValid},"Add folder"))))}}]),t}(n.Component));A.contextType=E;a(209);var I=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(m.a)(this,Object(f.a)(t).call(this,e))).state={noteName:"",noteValid:!1,noteContent:"",contentValid:!1,noteFolder:"b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",validationErrors:{noteName:"",noteContent:""}},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleSubmit",value:function(e,t,a,n){e.preventDefault(),console.log("handle submit ran"),this.context.addNote(e,t,a,n)}},{key:"validateName",value:function(e){var t=!1;0===e.length&&(t=!0),this.setState({noteValid:!t})}},{key:"validateContent",value:function(e){var t=!1;0===e.length&&(t=!0),this.setState({contentValid:!t})}},{key:"formValid",value:function(e){this.state.folderNameValid&&this.setState({folderName:e})}},{key:"updateName",value:function(e){var t=this;this.setState({noteName:e},function(){return t.validateName(e)})}},{key:"updateContent",value:function(e){var t=this;this.setState({noteContent:e},function(){return t.validateContent(e)})}},{key:"updateFolder",value:function(e){this.setState({noteFolder:e})}},{key:"render",value:function(){var e=this;return o.a.createElement("section",{className:"AddNote"},o.a.createElement("h2",null,"Create a note"),o.a.createElement(M,{onSubmit:function(t,a,n,o){return e.handleSubmit(t,e.state.noteName,e.state.noteContent,e.state.noteFolder)}},o.a.createElement("div",{className:"field"},o.a.createElement("label",{htmlFor:"note-name-input"},"Name"),o.a.createElement("input",{type:"text",id:"note-name-input",onChange:function(t){return e.updateName(t.target.value)}})),o.a.createElement("div",{className:"field"},o.a.createElement("label",{htmlFor:"note-content-input"},"Content"),o.a.createElement("textarea",{id:"note-content-input",onChange:function(t){return e.updateContent(t.target.value)}})),o.a.createElement("div",{className:"field"},o.a.createElement("label",{htmlFor:"note-folder-select"},"Folder"),o.a.createElement("select",{id:"note-folder-select",onChange:function(t){return e.updateFolder(t.target.value)}},this.context.folders.map(function(e){return o.a.createElement("option",{key:e.id,value:e.id},e.name)}))),o.a.createElement("div",{className:"buttons"},o.a.createElement("button",{type:"submit"},"Add note"))))}}]),t}(n.Component);I.contextType=E,I.defaultProps={folders:[]};a(211);var P=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={notes:[],folders:[]},a.handleDeleteNote=function(e){var t=a.state.notes.filter(function(t){return t.id!==e});a.setState({notes:t})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:9090/folders").then(function(e){return e.json()}).then(function(t){return e.setState({folders:t})}).catch(function(e){return console.log(e)}),fetch("http://localhost:9090/notes").then(function(e){return e.json()}).then(function(t){return e.setState({notes:t})}).catch(function(e){return console.log(e)})}},{key:"postFolderName",value:function(e){fetch("http://localhost:9090/folders",{method:"post",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({name:e})}).then(function(e){return e.json()}).then(function(e){return console.log(e)})}},{key:"addNote",value:function(e,t,a,n){console.log("noteName",t);fetch("http://localhost:9090/notes",{method:"post",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({name:t,content:a,folderId:n})}).then(function(e){return e.json()}).then(function(e){return console.log(e)})}},{key:"renderNavRoutes",value:function(){var e=this.state,t=e.notes,a=e.folders;return o.a.createElement(o.a.Fragment,null,["/","/folder/:folderId"].map(function(e){return o.a.createElement(v.a,{exact:!0,key:e,path:e,component:_})}),o.a.createElement(v.a,{path:"/note/:noteId",render:function(e){var n=e.match.params.noteId,r=k(t,n)||{},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.find(function(e){return e.id===t})}(a,r.folderId);return o.a.createElement(O,Object.assign({},e,{folder:l}))}}),o.a.createElement(v.a,{path:"/add-folder",component:O}),o.a.createElement(v.a,{path:"/add-note",component:O}))}},{key:"renderMainRoutes",value:function(){var e=this.state.notes;return o.a.createElement(o.a.Fragment,null,["/","/folder/:folderId"].map(function(t){return o.a.createElement(v.a,{exact:!0,key:t,path:t,render:function(t){var a=t.match.params.folderId,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t?e.filter(function(e){return e.folderId===t}):e}(e,a);return o.a.createElement(S,Object.assign({},t,{notes:n}))}})}),o.a.createElement(v.a,{path:"/note/:noteId",render:function(t){var a=t.match.params.noteId,n=k(e,a);return o.a.createElement(x,Object.assign({},t,{note:n}))}}),o.a.createElement(v.a,{path:"/add-folder",component:A}),o.a.createElement(v.a,{path:"/add-note",component:I}))}},{key:"render",value:function(){var e={folders:this.state.folders,notes:this.state.notes,deleteNote:this.handleDeleteNote,addFolder:this.postFolderName,addNote:this.addNote};return o.a.createElement(E.Provider,{value:e},o.a.createElement("div",{className:"App"},o.a.createElement("nav",{className:"App__nav"},this.renderNavRoutes()),o.a.createElement("header",{className:"App__header"},o.a.createElement("h1",null,o.a.createElement(N.a,{to:"/"},"Noteful")," ",o.a.createElement(p.a,{icon:"check-double"}))),o.a.createElement("main",{className:"App__main"},this.renderMainRoutes())))}}]),t}(n.Component);c.b.add(i.c,i.b,i.d,i.a),l.a.render(o.a.createElement(s.a,null,o.a.createElement(P,null)),document.getElementById("root"))},78:function(e,t,a){e.exports=a(213)},85:function(e,t,a){},89:function(e,t,a){},91:function(e,t,a){},95:function(e,t,a){}},[[78,2,1]]]);
//# sourceMappingURL=main.732f8e43.chunk.js.map