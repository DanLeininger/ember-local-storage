"use strict";define("dummy/adapters/application",["exports","ember-local-storage/adapters/adapter"],function(e,t){e["default"]=t["default"].extend({})}),define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,n,a,r){var l=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,l=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:n["default"]}),(0,a["default"])(l,r["default"].modulePrefix),e["default"]=l}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,n){var a=n["default"].APP.name,r=n["default"].APP.version;e["default"]=t["default"].extend({version:r,name:a})}),define("dummy/components/file-input",["exports","ember"],function(e,t){var n=t["default"].Component,a=t["default"].run.bind;e["default"]=n.extend({tagName:"input",attributeBindings:["type"],type:"file",didInsertElement:function(){this.$().on("change",a(this,"filesSelected"))},filesSelected:function(e){this.sendAction("importData",e)}})}),define("dummy/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/controllers/settings",["exports","ember","dummy/models/settings"],function(e,t,n){e["default"]=t["default"].Controller.extend({settings:n["default"].create(),actions:{hideWelcomeMessage:function(){this.set("settings.welcomeMessageSeen",!0)}}})}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){e["default"]={name:"App Version",initialize:(0,t["default"])(n["default"].APP.name,n["default"].APP.version)}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(n["default"].exportApplicationGlobal!==!1){var a,r=n["default"].exportApplicationGlobal;a="string"==typeof r?r:t["default"].String.classify(n["default"].modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("dummy/initializers/local-storage-adapter",["exports","ember-local-storage/initializers/local-storage-adapter"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("dummy/models/anonymous-likes",["exports","ember","ember-local-storage/local/array"],function(e,t,n){e["default"]=n["default"].extend({storageKey:"anonymous-likes",initialContent:t["default"].A()})}),define("dummy/models/book-publication",["exports","ember-data"],function(e,t){var n=t["default"].Model,a=t["default"].attr,r=t["default"].hasMany;e["default"]=n.extend({name:a("string"),user:r("user",{async:!0})})}),define("dummy/models/cache",["exports","ember-local-storage/session/object"],function(e,t){e["default"]=t["default"].extend({storageKey:"cache"})}),define("dummy/models/cat",["exports","dummy/models/pet"],function(e,t){e["default"]=t["default"].extend()}),define("dummy/models/comment",["exports","ember-data"],function(e,t){var n=t["default"].Model,a=t["default"].attr,r=t["default"].belongsTo;e["default"]=n.extend({name:a("string"),post:r("post",{async:!0,autoSave:!0})})}),define("dummy/models/config",["exports"],function(e){e["default"]={storageKey:"api-token",initialContent:{token:null}}}),define("dummy/models/dog",["exports","dummy/models/pet"],function(e,t){e["default"]=t["default"].extend()}),define("dummy/models/editor",["exports","dummy/models/user"],function(e,t){e["default"]=t["default"].extend()}),define("dummy/models/nested-object",["exports","ember-local-storage/local/object"],function(e,t){e["default"]=t["default"].extend({storageKey:"details",initialContent:{address:{first:null,second:null,anotherProp:null}}})}),define("dummy/models/pet",["exports","ember-data"],function(e,t){var n=t["default"].Model,a=t["default"].attr,r=t["default"].hasMany;e["default"]=n.extend({name:a("string"),users:r("user",{async:!0})})}),define("dummy/models/post",["exports","ember-data"],function(e,t){var n=t["default"].Model,a=t["default"].attr,r=t["default"].belongsTo,l=t["default"].hasMany;e["default"]=n.extend({name:a("string"),commentCount:a("number"),user:r("user",{async:!0,autoSave:!0}),comments:l("comment",{async:!0,dependent:"destroy"})})}),define("dummy/models/project",["exports","ember-data"],function(e,t){var n=t["default"].Model,a=t["default"].attr,r=t["default"].hasMany;e["default"]=n.extend({name:a("string"),users:r("user",{async:!0})})}),define("dummy/models/settings",["exports","ember-local-storage/local/object"],function(e,t){e["default"]=t["default"].extend({storageKey:"settings",initialContent:{welcomeMessageSeen:!1}})}),define("dummy/models/task",["exports","ember-data"],function(e,t){var n=t["default"].Model,a=t["default"].attr,r=t["default"].belongsTo,l=t["default"].hasMany;e["default"]=n.extend({name:a("string"),position:a("number"),parent:r("task",{async:!0,autoSave:!0,inverse:"children"}),children:l("task",{async:!0,autoSave:!0,inverse:"parent"})})}),define("dummy/models/user",["exports","ember-data"],function(e,t){var n=t["default"].Model,a=t["default"].attr,r=t["default"].hasMany;e["default"]=n.extend({name:a("string"),bookPublications:r("book-publications",{async:!0}),projects:r("project",{async:!0}),posts:r("post",{async:!0,dependent:"destroy"}),pets:r("pet",{async:!0,polymorphic:!0,dependent:"destroy"})})}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var a=t["default"].Router.extend({location:n["default"].locationType});a.map(function(){this.route("posts",function(){this.route("post",{path:":post_id",resetNamespace:!0})}),this.route("settings")}),e["default"]=a}),define("dummy/routes/post",["exports","ember"],function(e,t){var n=t["default"].Route;e["default"]=n.extend({model:function(e){return this.store.findRecord("post",e.post_id)},actions:{createComment:function(e){var t=this.store.createRecord("comment",{name:"Test comment",post:e});t.save()},deleteComment:function(e){e.destroyRecord()}}})}),define("dummy/routes/posts",["exports","ember"],function(e,t){var n=t["default"].Route;e["default"]=n.extend({model:function(){return this.store.findAll("post")},readFile:function(e){var n=new FileReader;return new t["default"].RSVP.Promise(function(t){n.onload=function(n){t({file:e.name,type:e.type,data:n.target.result,size:e.size})},n.readAsText(e)})},actions:{createPost:function(){var e=this.store.createRecord("user",{name:"User"}),t=this.store.createRecord("post",{name:"Test Post",user:e});t.save()},deletePost:function(e){e.destroyRecord(),this.transitionTo("posts")},importData:function(e){var t=this;this.readFile(e.target.files[0]).then(function(e){t.store.importData(e.data).then(function(){})})},exportData:function(){this.store.exportData(["posts","comments"],{download:!0,filename:"my-data.json"}).then(function(){})}}})}),define("dummy/serializers/application",["exports","ember-local-storage/serializers/serializer"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.11",loc:{source:null,start:{line:1,column:0},end:{line:4,column:0}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h2");e.setAttribute(n,"id","title");var a=e.createTextNode("Welcome to Ember");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,2,2,n),a},statements:[["content","outlet",["loc",[null,[3,0],[3,10]]]]],locals:[],templates:[]}}())}),define("dummy/templates/post",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@1.13.11",loc:{source:null,start:{line:7,column:0},end:{line:11,column:0}},moduleName:"dummy/templates/post.hbs"},arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode(" -\n  ");e.appendChild(t,n);var n=e.createElement("a"),a=e.createTextNode("Delete");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n  ");e.appendChild(t,n);var n=e.createElement("br");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[3]),r=new Array(2);return r[0]=e.createMorphAt(t,1,1,n),r[1]=e.createElementMorph(a),r},statements:[["content","comment.name",["loc",[null,[8,2],[8,18]]]],["element","action",["deleteComment",["get","comment",["loc",[null,[9,30],[9,37]]]]],[],["loc",[null,[9,5],[9,39]]]]],locals:["comment"],templates:[]}}();return{meta:{revision:"Ember@1.13.11",loc:{source:null,start:{line:1,column:0},end:{line:13,column:54}},moduleName:"dummy/templates/post.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("br");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createElement("br");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createElement("br");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createElement("br");e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("br");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createElement("br");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("a"),a=e.createTextNode("Create comment");return e.appendChild(n,a),e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[16]),r=new Array(5);return r[0]=e.createMorphAt(t,2,2,n),r[1]=e.createMorphAt(t,5,5,n),r[2]=e.createMorphAt(t,8,8,n),r[3]=e.createMorphAt(t,13,13,n),r[4]=e.createElementMorph(a),r},statements:[["content","model.id",["loc",[null,[2,0],[2,12]]]],["content","model.name",["loc",[null,[3,0],[3,14]]]],["content","model.comments.length",["loc",[null,[4,0],[4,25]]]],["block","each",[["get","model.comments",["loc",[null,[7,8],[7,22]]]]],[],0,null,["loc",[null,[7,0],[11,9]]]],["element","action",["createComment",["get","model",["loc",[null,[13,28],[13,33]]]]],[],["loc",[null,[13,3],[13,35]]]]],locals:[],templates:[e]}}())}),define("dummy/templates/posts",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){var e=function(){return{meta:{revision:"Ember@1.13.11",loc:{source:null,start:{line:6,column:2},end:{line:6,column:39}},moduleName:"dummy/templates/posts.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),a},statements:[["content","post.name",["loc",[null,[6,26],[6,39]]]]],locals:[],templates:[]}}();return{meta:{revision:"Ember@1.13.11",loc:{source:null,start:{line:5,column:0},end:{line:9,column:0}},moduleName:"dummy/templates/posts.hbs"},arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode(" -\n  ");e.appendChild(t,n);var n=e.createElement("a"),a=e.createTextNode("Delete");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n  ");e.appendChild(t,n);var n=e.createElement("br");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[3]),r=new Array(2);return r[0]=e.createMorphAt(t,1,1,n),r[1]=e.createElementMorph(a),r},statements:[["block","link-to",["post",["get","post",["loc",[null,[6,20],[6,24]]]]],[],0,null,["loc",[null,[6,2],[6,51]]]],["element","action",["deletePost",["get","post",["loc",[null,[7,27],[7,31]]]]],[],["loc",[null,[7,5],[7,33]]]]],locals:["post"],templates:[e]}}();return{meta:{revision:"Ember@1.13.11",loc:{source:null,start:{line:1,column:0},end:{line:17,column:10}},moduleName:"dummy/templates/posts.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("a"),a=e.createTextNode("Export");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("br");e.appendChild(t,n);var n=e.createElement("br");e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("br");e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("a"),a=e.createTextNode("Create post");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("br");e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[2]),r=e.childAt(t,[11]),l=new Array(5);return l[0]=e.createMorphAt(t,0,0,n),l[1]=e.createElementMorph(a),l[2]=e.createMorphAt(t,7,7,n),l[3]=e.createElementMorph(r),l[4]=e.createMorphAt(t,15,15,n),e.insertBoundary(t,0),e.insertBoundary(t,null),l},statements:[["inline","file-input",[],["importData","importData"],["loc",[null,[1,0],[1,38]]]],["element","action",["exportData"],[],["loc",[null,[2,3],[2,26]]]],["block","each",[["get","model",["loc",[null,[5,8],[5,13]]]]],[],0,null,["loc",[null,[5,0],[9,9]]]],["element","action",["createPost",["get","model",["loc",[null,[13,25],[13,30]]]]],[],["loc",[null,[13,3],[13,32]]]],["content","outlet",["loc",[null,[17,0],[17,10]]]]],locals:[],templates:[e]}}())}),define("dummy/templates/settings",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@1.13.11",loc:{source:null,start:{line:3,column:0},end:{line:6,column:0}},moduleName:"dummy/templates/settings.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  Welcome message.\n  ");e.appendChild(t,n);var n=e.createElement("button"),a=e.createTextNode("X");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[1]),r=new Array(1);return r[0]=e.createElementMorph(a),r},statements:[["element","action",["hideWelcomeMessage"],[],["loc",[null,[5,10],[5,41]]]]],locals:[],templates:[]}}();return{meta:{revision:"Ember@1.13.11",loc:{source:null,start:{line:1,column:0},end:{line:9,column:0}},moduleName:"dummy/templates/settings.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h2");e.setAttribute(n,"id","title");var a=e.createTextNode("Welcome to Ember.js");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(2);return a[0]=e.createMorphAt(t,2,2,n),a[1]=e.createMorphAt(t,4,4,n),a},statements:[["block","unless",[["get","settings.welcomeMessageSeen",["loc",[null,[3,10],[3,37]]]]],[],0,null,["loc",[null,[3,0],[6,11]]]],["content","outlet",["loc",[null,[8,0],[8,10]]]]],locals:[],templates:[e]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",a=e["default"].$('meta[name="'+n+'"]').attr("content"),r=JSON.parse(unescape(a));return{"default":r}}catch(l){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("dummy/app")["default"].create({name:"ember-local-storage",version:"0.1.3+0115b60e"});