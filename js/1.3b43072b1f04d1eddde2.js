webpackJsonp([1,2],{135:function(t,e,n){"use strict";function a(t){n(191)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(193),o=n(198),i=n(46),s=a,c=i(r.a,o.a,!1,s,null,null);e.default=c.exports},139:function(t,e,n){"use strict";function a(t){n(714)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(716),o=n(717),i=n(46),s=a,c=i(r.a,o.a,!1,s,null,null);e.default=c.exports},191:function(t,e,n){var a=n(192);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(134)("3d291e62",a,!0)},192:function(t,e,n){e=t.exports=n(133)(void 0),e.push([t.i,"",""])},193:function(t,e,n){"use strict";var a=n(194),r=n.n(a),o=n(15),i=n(49);e.a={props:["i18n"],components:{Locales:i.a,QBtn:o.e,QIcon:o.i,QPopover:o.r,QTooltip:o.C},data:function(){return{}},computed:{languages:function(){var t={};return r()(i.a).forEach(function(e){t[e]={name:i.a[e].name,flag:i.a[e].flag}}),t}},methods:{updateLanguage:function(t){localStorage.lang=t,this.i18n.locale=t}}}},194:function(t,e,n){t.exports={default:n(195),__esModule:!0}},195:function(t,e,n){n(196),t.exports=n(4).Object.keys},196:function(t,e,n){var a=n(47),r=n(48);n(197)("keys",function(){return function(t){return r(a(t))}})},197:function(t,e,n){var a=n(9),r=n(4),o=n(25);t.exports=function(t,e){var n=(r.Object||{})[t]||Object[t],i={};i[t]=e(n),a(a.S+a.F*o(function(){n(1)}),"Object",i)}},198:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-btn",{staticClass:"fixed-bottom-right",staticStyle:{margin:"16px"},attrs:{color:"primary"}},[n("q-icon",{attrs:{name:"translate"}}),t._v(" "),n("q-popover",{ref:"languagePopover",attrs:{anchor:"top left"}},t._l(t.languages,function(e,a){return n("q-btn",{key:a,attrs:{small:"",disabled:a===t.$i18n.locale},on:{click:function(e){t.updateLanguage(a),t.$refs.languagePopover.close()}}},[n("q-icon",{class:e.flag}),t._v(" "),n("q-tooltip",[t._v("\n        "+t._s(e.name)+"\n      ")])],1)}))],1)},r=[],o={render:a,staticRenderFns:r};e.a=o},714:function(t,e,n){var a=n(715);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(134)("3498d8ac",a,!0)},715:function(t,e,n){e=t.exports=n(133)(void 0),e.push([t.i,".vue-typer .custom.char.typed{color:#fff}",""])},716:function(t,e,n){"use strict";var a=n(15),r=n(135);e.a={directives:{Ripple:a.D},components:{LanguageChanger:r.default,QInput:a.j,QBtn:a.e,QIcon:a.i,QCheckbox:a.g,QPopover:a.r,QTooltip:a.C},data:function(){return{agreement:!0,user:{username:"",password:""}}},computed:{features:function(){return this.$t("index.features")}},methods:{start:function(){var t=this,e={username:this.user.username};e.token=1,this.$store.dispatch("updateUserInfo",e).then(function(){t.$router.push({path:"/"})})},updateLanguage:function(t){localStorage.lang=t,this.$i18n.locale=t},openLoginDialog:function(){var t=this;a.b.create({title:this.$t("index.signin"),form:{username:{type:"text",label:this.$t("common.username"),min:3},password:{type:"password",label:this.$t("common.password"),min:6}},buttons:[this.$t("common.cancel"),{label:this.$t("common.confirm"),handler:function(e){delete e.password,e.token=1,t.$store.dispatch("updateUserInfo",e).then(function(){t.$router.push({path:"/"})})}}]})}},mounted:function(){function t(t){return Math.floor(255*Math.random()+t)}function e(t,e,n){return"rgba("+t+","+e+","+n+", 0.8)"}function n(t,e,n,a){return(t*e+n*a)/(e+a)}function a(t,a){var r=t.color,o=a.color,i=n(r.r,t.radius,o.r,a.radius),s=n(r.g,t.radius,o.g,a.radius),c=n(r.b,t.radius,o.b,a.radius);return e(Math.floor(i),Math.floor(s),Math.floor(c))}function r(n){n=n||0,this.r=t(n),this.g=t(n),this.b=t(n),this.style=e(this.r,this.g,this.b)}function o(){this.x=Math.random()*l.width,this.y=Math.random()*l.height,this.vx=Math.random()-.5,this.vy=Math.random()-.5,this.radius=2*Math.random(),this.color=new r}function i(){for(var t=0;t<h.nb;t++){var e=h.array[t];e.y<0||e.y>l.height?(e.vx=e.vx,e.vy=-e.vy):(e.x<0||e.x>l.width)&&(e.vx=-e.vx,e.vy=e.vy),e.x+=e.vx,e.y+=e.vy}}function s(){for(var t=0;t<h.nb;t++)for(var e=0;e<h.nb;e++){var n=h.array[t],r=h.array[e];n.x-r.x<h.distance&&n.y-r.y<h.distance&&n.x-r.x>-h.distance&&n.y-r.y>-h.distance&&n.x-f.x<h.d_radius&&n.y-f.y<h.d_radius&&n.x-f.x>-h.d_radius&&n.y-f.y>-h.d_radius&&(d.beginPath(),d.strokeStyle=a(n,r),d.moveTo(n.x,n.y),d.lineTo(r.x,r.y),d.stroke(),d.closePath())}}function c(){for(var t=0;t<h.nb;t++){h.array[t].draw()}}function u(){d.clearRect(0,0,l.width,l.height),i(),s(),c(),requestAnimationFrame(u)}var l=document.querySelector("canvas"),d=l.getContext("2d");l.width=window.innerWidth,l.height=window.innerHeight,d.lineWidth=.3,d.strokeStyle=new r(150).style;var f={x:l.width-100,y:l.height-60},h={nb:100,distance:80,d_radius:150,array:[]};o.prototype={draw:function(){d.beginPath(),d.fillStyle=this.color.style,d.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),d.fill()}},document.getElementById("q-app").addEventListener("mousemove",function(t){f.x=t.pageX,f.y=t.pageY}),document.getElementById("q-app").addEventListener("mouseleave",function(t){f.x=l.width/2,f.y=l.height/2}),function(){for(var t=0;t<h.nb;t++)h.array.push(new o)}(),requestAnimationFrame(u)}}},717:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-padding bg-dark text-white fullscreen row items-center justify-center"},[n("canvas",{staticClass:"absolute",staticStyle:{"z-index":"0"},attrs:{id:"canvas"}}),t._v(" "),n("div",{staticClass:"col-12 text-center",staticStyle:{"z-index":"1"}},[n("h1",{staticClass:"text-bold"},[t._v(t._s(t.$t("index.welcome")))]),t._v(" "),n("h3",{staticClass:"no-margin"},[t._v(t._s(t.$t("index.play")))]),t._v(" "),n("h2",{staticClass:"no-margin"},[n("vue-typer",{attrs:{text:t.features,repeat:1/0,shuffle:!1,"initial-action":"typing","pre-type-delay":70,"type-delay":100,"pre-erase-delay":3e3,"erase-delay":100,"erase-style":"backspace","erase-on-complete":!1,"caret-animation":"smooth"}})],1),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-xl-4 offset-xl-4 col-lg-6 offset-lg-3 col-md-8 offset-md-2"},[n("q-input",{attrs:{placeholder:t.$t("index.enterUsername"),dark:!0,after:[{icon:"arrow_forward",content:!0,handler:this.start}]},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.start(e)}},model:{value:t.user.username,callback:function(e){t.$set(t.user,"username","string"==typeof e?e.trim():e)},expression:"user.username"}})],1)]),t._v(" "),n("q-checkbox",{model:{value:t.agreement,callback:function(e){t.agreement=e},expression:"agreement"}},[n("i18n",{staticClass:"no-margin",attrs:{path:"index.agreement",tag:"p"}},[n("a",{attrs:{place:"termsAndConditions",href:"#"}},[t._v(t._s(t.$t("index.termsAndConditions")))])])],1),t._v(" "),n("i18n",{attrs:{path:"index.accountLogin",tag:"p"}},[n("a",{attrs:{place:"login"},on:{click:t.openLoginDialog}},[t._v(t._s(t.$t("index.login")))])])],1),t._v(" "),n("language-changer",{attrs:{i18n:this.$i18n}})],1)},r=[],o={render:a,staticRenderFns:r};e.a=o}});