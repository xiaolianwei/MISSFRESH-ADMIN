(function(e){function t(t){for(var a,r,c=t[0],i=t[1],u=t[2],l=0,d=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},s={app:0},o=[];function c(e){return i.p+"js/"+({chunk:"chunk"}[e]||e)+"."+{chunk:"1a52940c"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={chunk:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({chunk:"chunk"}[e]||e)+"."+{chunk:"8e0b959c"}[e]+".css",s=i.p+a,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===s))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===a||l===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],f.parentNode.removeChild(f),n(o)},f.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){r[e]=0})));var a=s[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=s[e]=[t,n]}));t.push(a[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}s[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0b0f":function(e,t,n){},"23be":function(e,t,n){},3936:function(e,t,n){"use strict";n("ae07")},4360:function(e,t,n){"use strict";var a=n("2b0e"),r=n("2f62");a["a"].use(r["a"]),t["a"]=new r["a"].Store({state:{collapsed:!1,userInfo:{appkey:"",email:"",role:"",username:""},cateAddForm:{}},mutations:{changeCollapsed:function(e){e.collapsed=!e.collapsed},initUserInfo:function(e,t){e.userInfo=t},initCateAddForm:function(e,t){e.cateAddForm.addRef=t}},actions:{},modules:{}})},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("2819"),s=n.n(r),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},c=[],i={name:"app"},u=i,l=n("2877"),d=Object(l["a"])(u,o,c,!1,null,null,null),f=d.exports,m=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-wrap"},[n("div",{staticClass:"main-app",class:{unfold:e.collapsed}},[n("main-header"),n("router-view")],1),n("div",{staticClass:"menu-list",class:{unfold:e.collapsed}},[n("menu-list",{key:e.key})],1)])},b=[],j=n("5530"),h=n("2f62"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("a-button",{staticStyle:{"margin-bottom":"16px"},attrs:{type:"primary"},on:{click:e.toggleCollapsed}},[n("a-icon",{attrs:{type:e.collapsed?"menu-unfold":"menu-fold"}})],1),n("a-breadcrumb",[n("a-breadcrumb-item",[e._v(" "+e._s("home"==e.$route.meta.parentTitle?"首页":"商品")+" ")]),n("a-breadcrumb-item",[n("router-link",{attrs:{to:{name:e.$route.name}}},[e._v(e._s(e.$route.meta.title))])],1)],1),n("ul",{staticClass:"user-info"},[n("li",[e._v("欢迎"+e._s(e.userInfo.username)+" "),n("a-icon",{attrs:{type:"down"}})],1),n("li",{on:{click:e.logout}},[e._v("退出")])])],1)},v=[],y=n("a27e"),k=n("a78e"),w=n.n(k);function _(e){return w.a.set("userInfo",JSON.stringify(e)),!0}function O(){var e=w.a.get("userInfo");return!!e&&JSON.parse(e)}function x(){w.a.remove("userInfo")}window.getCookie=O;var C=n("4360"),z={login:function(e){return y["a"].post("/passport/login",e)},logout:function(){x(),C["a"].commit("initUserInfo",{appkey:"",email:"",role:"",username:""})}},$={data:function(){return{}},computed:Object(j["a"])({},Object(h["b"])(["collapsed","userInfo"])),methods:{toggleCollapsed:function(){this.$store.commit("changeCollapsed")},logout:function(){z.logout(),this.$router.push("/login")}}},E=$,F=Object(l["a"])(E,g,v,!1,null,null,null),P=F.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-menu",{attrs:{"default-selected-keys":[e.$route.name],"default-open-keys":[e.$route.meta.parentTitle],mode:"inline",theme:"dark","inline-collapsed":e.collapsed}},[n("a-sub-menu",{key:"home"},[n("span",{attrs:{slot:"title"},slot:"title"},[n("a-icon",{attrs:{type:"home"}}),n("span",[e._v("首页")])],1),n("a-menu-item",{key:"Index"},[n("router-link",{attrs:{to:{name:"Index"}}},[n("a-icon",{attrs:{type:"pie-chart"}}),e._v("统计")],1)],1)],1),n("a-sub-menu",{key:"goods"},[n("span",{attrs:{slot:"title"},slot:"title"},[n("a-icon",{attrs:{type:"shopping"}}),n("span",[e._v("商品")])],1),n("a-menu-item",{key:"ProductList"},[n("router-link",{attrs:{to:{name:"ProductList"}}},[n("a-icon",{attrs:{type:"unordered-list"}}),e._v(" 商品列表")],1)],1),n("a-menu-item",{key:"ProductAdd"},[n("router-link",{attrs:{to:{name:"ProductAdd"}}},[n("a-icon",{attrs:{type:"file-add"}}),e._v(" 添加商品")],1)],1),e.isShowManage?n("a-menu-item",{key:"Category"},[n("router-link",{attrs:{to:{name:"Category"}}},[n("a-icon",{attrs:{type:"setting"}}),e._v(" 商品类目管理")],1)],1):e._e()],1)],1)},T=[],S={data:function(){return{}},watch:{$route:function(){console.log(this.$route)}},computed:Object(j["a"])(Object(j["a"])({},Object(h["b"])(["collapsed","userInfo"])),{},{isShowManage:function(){return!0}})},A=S,L=Object(l["a"])(A,I,T,!1,null,null,null),M=L.exports,N={components:{MainHeader:P,MenuList:M},data:function(){return{key:(new Date).getTime()}},watch:{$route:function(){this.key=(new Date).getTime()}},computed:Object(j["a"])({},Object(h["b"])(["collapsed"]))},U=N,q=(n("6b1f"),Object(l["a"])(U,p,b,!1,null,null,null)),D=q.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("a-form-model",e._b({ref:"loginFrom",staticClass:"login-from",attrs:{model:e.loginFrom,rules:e.rules}},"a-form-model",e.layout,!1),[n("a-form-model-item",{attrs:{"has-feedback":"",required:"",label:"邮箱",prop:"email"}},[n("a-input",{attrs:{placeholder:"Email"},model:{value:e.loginFrom.email,callback:function(t){e.$set(e.loginFrom,"email",t)},expression:"loginFrom.email"}})],1),n("a-form-model-item",{attrs:{"has-feedback":"",required:"",label:"密码",prop:"password"}},[n("a-input",{attrs:{type:"password",autocomplete:"off",placeholder:"Password"},model:{value:e.loginFrom.password,callback:function(t){e.$set(e.loginFrom,"password",t)},expression:"loginFrom.password"}})],1),n("a-form-model-item",{attrs:{"wrapper-col":{span:14,offset:4}}},[n("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("loginFrom")}}},[e._v(" 登录 ")]),n("a-button",{staticStyle:{"margin-left":"10px"},on:{click:function(t){return e.resetForm("loginFrom")}}},[n("a",{attrs:{href:"https://mallapi.duyiedu.com/login/#/register",target:"_blank"}},[e._v("注册")])])],1)],1)],1)},J=[],B={data:function(){var e=/^[\w-]+@[\w-.]+.com$/,t=function(t,n,a){return n?(e.test(n)&&a(),a(new Error("邮箱格式不正确"))):a(new Error("邮箱不能为空"))},n=function(e,t,n){return""===t?n(new Error("密码不能为空")):n()};return{loginFrom:{email:"",password:""},rules:{password:[{validator:n,trigger:"blur"}],email:[{validator:t,trigger:"blur"}]},layout:{labelCol:{span:4},wrapperCol:{span:14}}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){return!!e&&(z.login(t.loginFrom).then((function(e){t.$store.commit("initUserInfo",e),_(e),t.$router.push({name:"Home"})})).catch((function(e){t.$message.error(e)})),!0)}))},resetForm:function(e){this.$refs[e].resetFields()}}},R=B,K=(n("3936"),Object(l["a"])(R,H,J,!1,null,null,null)),G=K.exports;a["a"].use(m["a"]);var Q=[{path:"/",name:"Home",component:D,redirect:{name:"Index"},children:[{path:"index",name:"Index",meta:{title:"统计",parentTitle:"home"},component:function(){return n.e("chunk").then(n.bind(null,"726d"))}},{path:"category",name:"Category",meta:{title:"商品类目",parentTitle:"goods"},component:function(){return n.e("chunk").then(n.bind(null,"06a1"))}},{path:"productAdd",name:"ProductAdd",meta:{title:"添加商品",parentTitle:"goods"},component:function(){return n.e("chunk").then(n.bind(null,"02aa"))}},{path:"productEdit/:id",name:"ProductEdit",meta:{title:"编辑商品",parentTitle:"goods"},component:function(){return n.e("chunk").then(n.bind(null,"02aa"))}},{path:"productList",name:"ProductList",meta:{title:"商品列表",parentTitle:"goods"},component:function(){return n.e("chunk").then(n.bind(null,"59f0"))}}]},{path:"/login",name:"Login",component:G}],V=new m["a"]({routes:Q});V.beforeEach((function(e,t,n){var a=O();"/login"!==e.path?C["a"].state.userInfo.username?n():a?(C["a"].commit("initUserInfo",a),n()):n("/login"):n()}));var W=V,X=n("f23d");n("0b0f");a["a"].use(X["a"]);n("23be");a["a"].use(s.a),a["a"].config.productionTip=!1,new a["a"]({router:W,store:C["a"],render:function(e){return e(f)}}).$mount("#app")},"6b1f":function(e,t,n){"use strict";n("9e59")},"9e59":function(e,t,n){},a27e:function(e,t,n){"use strict";var a=n("5530"),r=(n("caad"),n("2532"),n("d3b7"),n("bc3a")),s=n.n(r),o=n("4360"),c=s.a.create({baseURL:" https://mallapi.duyiedu.com/"});c.interceptors.request.use((function(e){var t=e;return e.url.includes("passport")||(t.params=Object(a["a"])(Object(a["a"])({},t.params),{},{appkey:o["a"].state.userInfo.appkey})),t}),(function(e){return Promise.reject(e)})),c.interceptors.response.use((function(e){return"fail"===e.data.status?Promise.reject(e.data.msg):e.data.data})),t["a"]=c},ae07:function(e,t,n){}});
//# sourceMappingURL=app.0e5556eb.js.map