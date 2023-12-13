var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.checkStringArgs=function(f,k,g){if(null==f)throw new TypeError("The 'this' value for String.prototype."+g+" must not be null or undefined");if(k instanceof RegExp)throw new TypeError("First argument to String.prototype."+g+" must not be a regular expression");return f+""};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;
$jscomp.FORCE_POLYFILL_PROMISE=!1;$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(f,k,g){if(f==Array.prototype||f==Object.prototype)return f;f[k]=g.value;return f};
$jscomp.getGlobal=function(f){f=["object"==typeof globalThis&&globalThis,f,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var k=0;k<f.length;++k){var g=f[k];if(g&&g.Math==Math)return g}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};
$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(f,k){var g=$jscomp.propertyToPolyfillSymbol[k];if(null==g)return f[k];g=f[g];return void 0!==g?g:f[k]};$jscomp.polyfill=function(f,k,g,d){k&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(f,k,g,d):$jscomp.polyfillUnisolated(f,k,g,d))};
$jscomp.polyfillUnisolated=function(f,k,g,d){g=$jscomp.global;f=f.split(".");for(d=0;d<f.length-1;d++){var b=f[d];if(!(b in g))return;g=g[b]}f=f[f.length-1];d=g[f];k=k(d);k!=d&&null!=k&&$jscomp.defineProperty(g,f,{configurable:!0,writable:!0,value:k})};
$jscomp.polyfillIsolated=function(f,k,g,d){var b=f.split(".");f=1===b.length;d=b[0];d=!f&&d in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var a=0;a<b.length-1;a++){var e=b[a];if(!(e in d))return;d=d[e]}b=b[b.length-1];g=$jscomp.IS_SYMBOL_NATIVE&&"es6"===g?d[b]:null;k=k(g);null!=k&&(f?$jscomp.defineProperty($jscomp.polyfills,b,{configurable:!0,writable:!0,value:k}):k!==g&&($jscomp.propertyToPolyfillSymbol[b]=$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(b):$jscomp.POLYFILL_PREFIX+b,b=
$jscomp.propertyToPolyfillSymbol[b],$jscomp.defineProperty(d,b,{configurable:!0,writable:!0,value:k})))};$jscomp.polyfill("String.prototype.startsWith",function(f){return f?f:function(k,g){var d=$jscomp.checkStringArgs(this,k,"startsWith");k+="";var b=d.length,a=k.length;g=Math.max(0,Math.min(g|0,d.length));for(var e=0;e<a&&g<b;)if(d[g++]!=k[e++])return!1;return e>=a}},"es6","es3");
function showTwoFAQR(f,k){var g=hi5.$("twofainfo");if(g){var d=hi5.$("barcodeDiv"),b=hi5.$("enableTwoFA"),a=hi5.$("disableTwoFA");k?(hi5.$("imgBarcode").src="data:image/png;base64,"+k,d.style.display="block",a.style.display="none",b.style.display="block"):(d.style.display="none",a.style.display="block",b.style.display="none");var e=new hi5.ui.Lightbox(g);e.show();hi5.$("faCode").focus();hi5.$("faCode").value="";b.onclick=a.onclick=function(m){var c=hi5.$("faCode").value;m=m.target==b?1:0;if(6!=c.length)hi5.notifications.notify(__svi18n.info.digit6||
"It must be a 6 digit number");else{var l=g.querySelector('input[name="pwd"]');f(c,m,l?l.value:"");e.dismiss()}}}}
svGlobal.auth=new function(){function f(a){hi5.tool.enableInput();if(a.error)svGlobal.gatewayError(a.name,a.message||a.msg);else{hi5.$("frmLogin").style.display="none";hi5.$("frmConn").style.display="block";var e=document.getElementById("pwdZone");e&&(e.style.display=a.isDomainUser?"none":"table-row-group");a.isDomainUser&&!a.twoFAEnabled&&(e=document.getElementById("settings"))&&(e.style.display="none");for(e=hi5.$("programs");e.hasChildNodes();)e.removeChild(e.firstChild);var m=a.servers;if(!a.accessNotInList){var c=
hi5.$("anyconn");c&&(c.style.display="none")}a.hash&&(document.cookie="__SV_TOKEN_S="+a.hash+"-"+encodeURIComponent(a.name));c=svGlobal.auth.getUserName(hi5.$("user").value);window.__sparkUser={session:a.session,account:c,gateway:hi5.$("gateway").value,servers:m,twoFA:a.twoFA,twoFAEnabled:a.twoFAEnabled,twoFAQR:a.twoFAQR};a=m.length;if(!(1>a)){c="";for(var l=0;l<a;l++){var q=m[l].server,n=m[l].id;q=m[l].displayName||n||q;var h=m[l].icon;h||(h="rdp32.png");var p=document.createElement("div");p.className=
"icon";var t=document.createElement("img");t.src=h;t.id=n;t.alt=n;t.title=q;t.style.cursor="pointer";t.onclick=k;p.appendChild(t);p.appendChild(document.createElement("br"));p.appendChild(document.createTextNode(q));e.appendChild(p);hi5.appcfg.startup&&n===hi5.appcfg.startup.server&&(c=n)}!c&&hi5.appcfg.startup&&(console.log("start up:"+hi5.appcfg.startup.server+" not found, use the first instead"),c=m[0].id);c&&g(c,!hi5.appcfg.startup.newWindow,!0)}}}function k(a){var e=a.target;e.onclick=null;setTimeout(function(){e.onclick=
k},300);g(e.id)}function g(a,e,m){var c=window.__sparkUser,l=c.servers,q=l.length;c.server=null;window.sparkGateway=c.gateway;for(var n=0;n<q;n++){var h=l[n];if(a==h.id){h.gateway=c.gateway;h.session=c.session;h.account=c.account;c.server=h;break}}if(c.server){console.log("connecting to:"+c.server.id);(a=hi5.$("touchpad"))&&a.checked&&(c.server.touchpad=!0);if(a=hi5.$("keyboard"))a=parseInt(a.options[a.selectedIndex].value),0<a&&(c.server.keyboard=a);if(svGlobal.auth.onconnect)svGlobal.auth.onconnect(c.server);
c.server.rdp&&c.server.rdp.remoteProgram&&(c.server.startProgram="app");a="width="+window.outerWidth+",height="+window.outerHeight;c.server.http&&window.open("/PXY/"+c.server.id+"/","_blank",a);l="app"==c.server.startProgram;void 0==e&&(e=l);if(e){var p=svManager.getInstance();if(l&&p&&p.running())p.startApp(c.server.exe||c.server.rdp.remoteProgram,c.server.args||c.server.rdp.remoteArgs,""),b&&b.visible()&&b.dismiss();else{var t=function(r){function w(){null==b&&(b=new hi5.ui.Lightbox(hi5.$("login")));
b.visible()?b.dismiss():b.show()}var v=r.toolbar.querySelector("#__sv_btn_home");v||(v=r.toolbar.addButton(hi5.appcfg.img.home||"home.png",w),v.id="__sv_btn_home")};p=new Rdp2(c.server);hi5.$("login").style.display="none";var u=new svGlobal.LocalInterface;u.onremoteappicon=function(r,w){if(u.toolbar&&r.isMainWin()&&32==w.getWidth()){var v="win"+r.id;if(!u.toolbar.querySelector("#"+v)){t(u);var x=u.toolbar.addButton(w.getDataURL(),function(){r.activate(1)});x.id=v;x.title=r.titleInfo;x.style.width=
"32px";x.style.height="32px";x.addEventListener("mouseover",function(){x.title=r.titleInfo},!1);setTimeout(function(){r.activate(1)},333)}}};u.onremoteappclose=function(r){u.toolbar&&(r=u.toolbar.querySelector("#win"+r.id))&&u.toolbar.removeChild(r)};p.addSurface(u);p.run();p.onclose=function(){if(m){window.__sparkUser=null;var r=hi5.$("frmLogin");r.elements.pwd.value="";r.style.display="block";hi5.$("frmConn").style.display="none"}else p.hide(),hi5.$("login").style.display="block"}}}else e=document.getElementById("multiMon"),
c.server.rdp?(c.server.rdp.multiMon=e&&e.checked?"on":"off",window.open("rdpdirect.html","_blank",a)):c.server.vnc?window.open("vnc.html","_blank",a):c.server.ssh?window.open("sshdirect.html","_blank",a):c.server.telnet&&window.open("telnet.html","_blank",a)}else hi5.notifications.notify("Not a valid server")}var d=this,b=null;this.getLoginURL=function(){return("https:"==location.protocol?"wss://":"ws://")+hi5.$("gateway").value+"/LOGIN?"};this.closeSession=function(a,e){console.log("close session "+
e+" on user "+a);window.__sparkUser&&(a||(a=window.__sparkUser.account),e||(e=window.__sparkUser.session));a&&e&&(a=svGlobal.auth.getLoginURL()+"action=close&user="+encodeURIComponent(a)+"&svSession="+e,(new WebSocket(a,"login")).onopen=function(m){console.log("Sign out");window.__sparkUser=null})};this.showLogDlg=function(){var a=window.__sparkUser.account,e=window.__sparkUser.session;window.__sparkUser=null;var m=hi5.$("frmLogin");m.elements.pwd.value="";m.style.display="block";hi5.$("frmConn").style.display=
"none";(m=svManager.getInstance())&&m.running()&&m.close();svGlobal.auth.closeSession(a,e)};this.getUserName=function(a){hi5.appcfg&&hi5.appcfg.domain&&(a.toLowerCase().startsWith(hi5.appcfg.domain.toLowerCase()+"\\")||(a=hi5.appcfg.domain+"\\"+a));return a};this.login=function(a){function e(l,q){window.__sparkUser=null;if(!d.beforelogin||!d.beforelogin(l)){hi5.tool.disableInput();var n=new WebSocket(l.substring(0,l.indexOf("?"))+"?_METHOD=post","login");n.onclose=function(h){m||(hi5.notifications.notify(__svi18n.errorCode.connection),
d.showLogDlg());hi5.tool.enableInput();d.afterlogin&&d.afterlogin(m);m=!1};n.onopen=function(h){m=!0};n.onmessage=function(h){var p=h.data,t=p.substring(0,2);if("00"==t)n.send("00"+l.substring(l.indexOf("?")+1));else if("01"==t)switch(hi5.tool.enableInput(),p.substring(2,3)){case "0":if(h=hi5.$("twofacode")){var u=new hi5.ui.Lightbox(h);u.show();var r=hi5.$("btnTwoFACode"),w=hi5.$("faAuthCode");w.focus();w.value="";r.onclick=function(){n.send("code:"+w.value);u.dismiss()};w.addEventListener("keyup",
function(v){if(13==v.keyCode||"Enter"==v.code)v.preventDefault(),r.click()})}break;case "1":h=p.substring(4),showTwoFAQR(function(v,x){n.send("code:"+v)},h)}else h=JSON.parse(h.data),0===h.type&&(h.message||h.name)?svGlobal.gatewayError(h.name,h.message||h.msg):(h.error||n.send("A1"+navigator.userAgent),q(h))}}}var m=!1,c=hi5.browser.cookie2Obj();c.svSession&&c.svEmail&&(a+="&svSession="+c.svSession+"&svEmail="+encodeURIComponent(c.svEmail));setTimeout(function(){e(a,f)},5);return!1}};
window.addEventListener("load",function(f){function k(){f.preventDefault();svGlobal.auth.beforesubmit&&svGlobal.auth.beforesubmit();var d=hi5.$("frmLogin").elements,b=svGlobal.auth.getUserName(d.user.value),a=d.pwd.value;b=svGlobal.auth.getLoginURL()+"user="+encodeURIComponent(b)+"&pwd="+encodeURIComponent(a);(a=d.sharedSecret)&&a.value&&(b+="&sharedSecret="+encodeURIComponent(a.value));d.pwd.value="";return svGlobal.auth.login(b)}function g(d,b,a){var e=svGlobal.auth.getLoginURL()+"action=code",
m=new WebSocket(e,"login");m.onmessage=function(c){c=JSON.parse(c.data);c.error?svGlobal.gatewayError(c.name,c.message||c.msg):hi5.notifications.notify(__svi18n.info.succeeded);m.close()};m.onopen=function(c){m.send("twof:"+d+"\t"+__sparkUser.account+"\t"+b+"\t"+__sparkUser.session+"\t"+a+"\t")}}(function(){hi5.$("user").focus();hi5.$("frmLogin").onsubmit=k;var d=hi5.$("anyconn");d&&(d.onclick=function(){var l="width="+window.outerWidth+",height="+window.outerHeight;window.open("rdp.html?gateway="+
hi5.$("gateway").value,"_blank",l)});if(d=document.querySelector('input[name="showlogin"]'))d.onclick=svGlobal.auth.showLogDlg;var b=hi5.browser.cookie2Obj(),a=-1!=document.cookie.indexOf("__SV_TOKEN_A"),e=hi5.tool.queryToObj();if(b.svEmail||b.user||a||e.autoLogin||e.user&&e.pwd){var m=hi5.$("frmLogin").elements;m.user.value=b.svEmail||b.user||e.user||"";m.pwd.value=(b.svSession?"fake":b.pwd)||e.pwd||"_";b.gateway&&(m.gateway.value=b.gateway);(m.user.value&&m.pwd.value||b.autoLogin||a||e.autoLogin)&&
setTimeout(k,30)}d=hi5.$("settings");var c=hi5.$("settingsDiv");d&&(d.onclick=function(){if(c){var l=document.getElementById("2fa_code_pwd");l&&(l.style.display=__sparkUser.twoFAEnabled?"table-row":"none");(new hi5.ui.Lightbox(c)).show();hi5.$("currPwd").focus();if(l=hi5.$("btnTwoFA"))l.onclick=function(){showTwoFAQR(g,window.__sparkUser.twoFAQR)},0==__sparkUser.twoFA&&l.parentNode.removeChild(l)}});if(d=hi5.$("frmSettings"))d.onsubmit=function(l){l.preventDefault();var q=l.target.elements;if(q.newPwd1.value!=
q.newPwd2.value)hi5.notifications.notify(__svi18n.errorCode.pwdmatch);else{l=svGlobal.auth.getLoginURL()+"_METHOD=post&action=put";var n=new WebSocket(l,"login");n.onmessage=function(h){if(0==h.data.indexOf("00")){h="00currPwd="+encodeURIComponent(q.currPwd.value)+"&newPwd="+encodeURIComponent(q.newPwd1.value);h+="&user="+encodeURIComponent(svGlobal.auth.getUserName(hi5.$("user").value));var p=d.elements.faCode;p&&(h+="&code="+p.value);n.send(h);hi5.$("frmSettings").reset()}else h=JSON.parse(h.data),
h.error&&svGlobal.gatewayError(h.name,h.message||h.msg)};c.dismiss&&c.dismiss();return!1}};b=hi5.$("gateway");(a=b.value)||(a=hi5.appcfg.defaultPort?window.location.hostname+":"+hi5.appcfg.defaultPort:window.location.host);0==a.length&&(a="localhost");b.value=a;b=hi5.$("touchpadmode");hi5.browser.isTouch&&(b.style.display="");(b=hi5.$("user"))&&!b.value&&hi5.appcfg&&hi5.appcfg.domain&&!hi5.appcfg.hiddenDomain&&(b.value=hi5.appcfg.domain+"\\");(function(){var l=!1,q="";try{document.createElement("canvas").getContext("2d"),
l=!0}catch(t){q="This browser does not support Canvas.\n\n"}var n=!("WebSocket"in window)&&!("MozWebSocket"in window),h=navigator.userAgent,p=-1!=h.indexOf("Firefox");n&&(q+="This browser doesn't support WebSocket.\n\n",p?q+="Please update to Firefox 6 or later.\n\n":-1!=h.indexOf("Opera")?q+="Please open 'opera:config#Enable WebSockets' (type it in the link field) make 'Enable WebSockets' selected and restart Opera.\n\n":-1!=h.indexOf("MSIE")&&(q+="Please install Google Chrome Frame.\n\n"));0<q.length&&
hi5.notifications.notify(q);return!n&&l})();(b=hi5.$("defPort"))&&hi5.appcfg.defaultPort&&(b.innerHTML=hi5.appcfg.defaultPort);(b=document.getElementById("frmConn"))&&(b=b.querySelector('select[name="keyboard"]'));b&&(a=svGlobal.Rdp.languageToKeyboard.detect())&&(b.value=a)})()},!1);window.addEventListener("beforeunload",function(){svGlobal.auth.closeSession()},!1);
