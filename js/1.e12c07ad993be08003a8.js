webpackJsonp([1],{32:function(t,e,n){"use strict";function a(t){n(42)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(44),i=n(45),s=n(3),o=a,c=s(r.a,i.a,!1,o,null,null);e.default=c.exports},42:function(t,e,n){var a=n(43);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(29)("ffd3b314",a,!0)},43:function(t,e,n){e=t.exports=n(28)(void 0),e.push([t.i,".vue-typer .custom.char.typed{color:#fff}",""])},44:function(t,e,n){"use strict";var a=n(2);e.a={directives:{Ripple:a.m},components:{QInput:a.d,QBtn:a.a,QIcon:a.c,QCheckbox:a.b},data:function(){return{agreement:!0,user:{username:"",password:""}}},computed:{features:function(){return this.$t("index.features")}},methods:{start:function(){console.log("ok")}},mounted:function(){function t(t){return Math.floor(255*Math.random()+t)}function e(t,e,n){return"rgba("+t+","+e+","+n+", 0.8)"}function n(t,e,n,a){return(t*e+n*a)/(e+a)}function a(t,a){var r=t.color,i=a.color,s=n(r.r,t.radius,i.r,a.radius),o=n(r.g,t.radius,i.g,a.radius),c=n(r.b,t.radius,i.b,a.radius);return e(Math.floor(s),Math.floor(o),Math.floor(c))}function r(n){n=n||0,this.r=t(n),this.g=t(n),this.b=t(n),this.style=e(this.r,this.g,this.b)}function i(){this.x=Math.random()*l.width,this.y=Math.random()*l.height,this.vx=Math.random()-.5,this.vy=Math.random()-.5,this.radius=2*Math.random(),this.color=new r}function s(){for(var t=0;t<f.nb;t++){var e=f.array[t];e.y<0||e.y>l.height?(e.vx=e.vx,e.vy=-e.vy):(e.x<0||e.x>l.width)&&(e.vx=-e.vx,e.vy=e.vy),e.x+=e.vx,e.y+=e.vy}}function o(){for(var t=0;t<f.nb;t++)for(var e=0;e<f.nb;e++){var n=f.array[t],r=f.array[e];n.x-r.x<f.distance&&n.y-r.y<f.distance&&n.x-r.x>-f.distance&&n.y-r.y>-f.distance&&n.x-h.x<f.d_radius&&n.y-h.y<f.d_radius&&n.x-h.x>-f.d_radius&&n.y-h.y>-f.d_radius&&(u.beginPath(),u.strokeStyle=a(n,r),u.moveTo(n.x,n.y),u.lineTo(r.x,r.y),u.stroke(),u.closePath())}}function c(){for(var t=0;t<f.nb;t++){f.array[t].draw()}}function d(){u.clearRect(0,0,l.width,l.height),s(),o(),c(),requestAnimationFrame(d)}var l=document.querySelector("canvas"),u=l.getContext("2d");l.width=window.innerWidth,l.height=window.innerHeight,u.lineWidth=.3,u.strokeStyle=new r(150).style;var h={x:l.width-100,y:l.height-60},f={nb:100,distance:80,d_radius:150,array:[]};i.prototype={draw:function(){u.beginPath(),u.fillStyle=this.color.style,u.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),u.fill()}},document.getElementById("q-app").addEventListener("mousemove",function(t){h.x=t.pageX,h.y=t.pageY}),document.getElementById("q-app").addEventListener("mouseleave",function(t){h.x=l.width/2,h.y=l.height/2}),function(){for(var t=0;t<f.nb;t++)f.array.push(new i)}(),requestAnimationFrame(d)}}},45:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-padding bg-dark text-white fullscreen row items-center justify-center"},[n("canvas",{staticClass:"absolute",staticStyle:{"z-index":"0"},attrs:{id:"canvas"}}),t._v(" "),n("div",{staticClass:"col-12 text-center",staticStyle:{"z-index":"1"}},[n("h1",{staticClass:"text-bold"},[t._v(t._s(t.$t("index.welcome")))]),t._v(" "),n("h3",{staticClass:"no-margin"},[t._v(t._s(t.$t("index.play")))]),t._v(" "),n("h2",{staticClass:"no-margin"},[n("vue-typer",{attrs:{text:t.features,repeat:1/0,shuffle:!1,"initial-action":"typing","pre-type-delay":70,"type-delay":100,"pre-erase-delay":3e3,"erase-delay":100,"erase-style":"backspace","erase-on-complete":!1,"caret-animation":"smooth"}})],1),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-xl-4 offset-xl-4 col-lg-6 offset-lg-3 col-md-8 offset-md-2"},[n("q-input",{attrs:{placeholder:t.$t("index.enterUsername"),dark:!0,after:[{icon:"arrow_forward",content:!0,handler:this.start}]},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.start(e)}},model:{value:t.user.username,callback:function(e){t.$set(t.user,"username","string"==typeof e?e.trim():e)},expression:"user.username"}})],1)]),t._v(" "),n("q-checkbox",{model:{value:t.agreement,callback:function(e){t.agreement=e},expression:"agreement"}},[n("i18n",{staticClass:"no-margin",attrs:{path:"index.agreement",tag:"p"}},[n("a",{attrs:{place:"termsAndConditions",href:"#"}},[t._v(t._s(t.$t("index.termsAndConditions")))])])],1),t._v(" "),n("i18n",{attrs:{path:"index.accountLogin",tag:"p"}},[n("a",{attrs:{place:"login",href:"#"},on:{click:function(e){t.loginFormVisible=!0}}},[t._v(t._s(t.$t("index.login")))])])],1)])},r=[],i={render:a,staticRenderFns:r};e.a=i}});