var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.checkStringArgs=function(g,l,p){if(null==g)throw new TypeError("The 'this' value for String.prototype."+p+" must not be null or undefined");if(l instanceof RegExp)throw new TypeError("First argument to String.prototype."+p+" must not be a regular expression");return g+""};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;
$jscomp.FORCE_POLYFILL_PROMISE=!1;$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(g,l,p){if(g==Array.prototype||g==Object.prototype)return g;g[l]=p.value;return g};
$jscomp.getGlobal=function(g){g=["object"==typeof globalThis&&globalThis,g,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var l=0;l<g.length;++l){var p=g[l];if(p&&p.Math==Math)return p}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};
$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(g,l){var p=$jscomp.propertyToPolyfillSymbol[l];if(null==p)return g[l];p=g[p];return void 0!==p?p:g[l]};$jscomp.polyfill=function(g,l,p,E){l&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(g,l,p,E):$jscomp.polyfillUnisolated(g,l,p,E))};
$jscomp.polyfillUnisolated=function(g,l,p,E){p=$jscomp.global;g=g.split(".");for(E=0;E<g.length-1;E++){var L=g[E];if(!(L in p))return;p=p[L]}g=g[g.length-1];E=p[g];l=l(E);l!=E&&null!=l&&$jscomp.defineProperty(p,g,{configurable:!0,writable:!0,value:l})};
$jscomp.polyfillIsolated=function(g,l,p,E){var L=g.split(".");g=1===L.length;E=L[0];E=!g&&E in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var da=0;da<L.length-1;da++){var Z=L[da];if(!(Z in E))return;E=E[Z]}L=L[L.length-1];p=$jscomp.IS_SYMBOL_NATIVE&&"es6"===p?E[L]:null;l=l(p);null!=l&&(g?$jscomp.defineProperty($jscomp.polyfills,L,{configurable:!0,writable:!0,value:l}):l!==p&&($jscomp.propertyToPolyfillSymbol[L]=$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(L):$jscomp.POLYFILL_PREFIX+
L,L=$jscomp.propertyToPolyfillSymbol[L],$jscomp.defineProperty(E,L,{configurable:!0,writable:!0,value:l})))};$jscomp.polyfill("String.prototype.startsWith",function(g){return g?g:function(l,p){var E=$jscomp.checkStringArgs(this,l,"startsWith");l+="";var L=E.length,da=l.length;p=Math.max(0,Math.min(p|0,E.length));for(var Z=0;Z<da&&p<L;)if(E[p++]!=l[Z++])return!1;return Z>=da}},"es6","es3");var svManager={getInstance:function(){var g=window.$telnet;return g&&g.running&&g.running()?g:null}};
function connvertServer(g){var l={};l.id=g.id;l.server=g.id;l.displayName=g.displayName||g.id;if(g=g.vnc)for(var p in g)l[p]=g[p];return l}
svGlobal.TELNET=function(g,l,p){function E(a){h.loadbalanceToken||(I.randomAppId&&(a=hi5.tool.uuid()),h.loadbalanceToken=I.loadbalanceTokenName?I.loadbalanceTokenName+"="+a:"")}function L(a,b){var d=[],c=null,e=new hi5.graphic.Rectangle(0,0,0,0),y="Uint8ClampedArray"in window;this.width=a;this.height=b;var f=!1,G=this;this.pause=function(m){f=m};this.release=function(){d=c=G=null};this.isPaused=function(){return f};this.setContext=function(m){m!=c&&(c||!m||m.createImageData(1,1).data.buffer||(y=!1),
c=m)};this.getContext=function(){return c};this.resize=function(m,r){for(var u=0;u<r;u++)d[u]=new Uint32Array(m);G.width=a=m;G.height=b=r};G.resize(a,b);this.getBuffer=function(){return d};this.setRGB=function(m,r,u){d[r][m]=u|4278190080};this.getRGB=function(m,r){return d[r][m]};this.setRGBs=function(m,r,u,x,H,B,J){u=m+u;x=r+x;for(var C=d,F,O=r;O<x;O++,B+=J){var ea=B;F=C[O];for(r=m;r<u;r++)F[r]=H[ea++]}};this.moveArea=function(m,r,u,x,H,B){if(0<B){H=m+H;B=r+B;var J=d,C;for(C=x-1;0<=C;C--){var F=
J[B+C];var O=J[r+C];for(x=0;x<u;x++)F[H+x]=O[m+x]}}else if(0>B)for(H=m+H,B=r+B,J=d,F=0;F<x;F++){O=J[B+F];var ea=J[r+F];for(C=0;C<u;C++)O[H+C]=ea[m+C]}else if(0<H)for(H=m+H,B=r+B,J=d,--u;0<=u;u--)for(F=H+u,O=m+u,C=0;C<x;C++)J[B+C][F]=J[r+C][O];else for(H=m+H,B=r+B,J=d,C=0;C<u;C++)for(O=H+C,ea=m+C,F=0;F<x;F++)J[B+F][O]=J[r+F][ea]};this.getRGBs=function(m,r,u,x){var H=_Uint32Array(u*x);H[0]=0;var B=d;u=m+u;x=r+x;for(var J=0,C=r;C<x;C++)for(r=m;r<u;r++)H[J++]=B[C][r];return H};this.repaint=function(m,
r,u,x){if(c){0>m&&(u+=m,m=0);0>r&&(x+=r,r=0);m+u>a&&(u=a-m);r+x>b&&(x=b-r);var H=c.createImageData(u,x),B=H.data;u=m+u;x=r+x;var J=0,C=d;if(y){B=new Uint32Array(B.buffer);for(var F,O=r;O<x;O++)for(F=m;F<u;F++)B[J++]=C[O][F]}else for(O=r;O<x;O++)for(F=m;F<u;F++){var ea=C[O][F];var wa=J<<2;B[wa]=ea&255;B[wa+1]=ea>>8&255;B[wa+2]=ea>>16&255;B[wa+3]=255;J++}c.putImageData(H,m,r)}};this.postPaint=function(m,r,u,x){0<e.width?e.union(m,r,u,x):(e.x=m,e.y=r,e.width=u,e.height=x)};this.commitPaint=function(){0<
e.width&&(this.repaint(e.x,e.y,e.width,e.height),e.width=0)};this.fillRect=function(m,r,u,x,H){var B=d;u=m+u;x=r+x;for(var J=r;J<x;J++)for(r=m;r<u;r++)B[J][r]=H}}function da(a,b){aa?aa.resize(a,b):aa=new L(a,b);return aa}function Z(){var a=g.indexOf("://"),b=g.substring(a+3);a=b.indexOf("/");0<a&&(b=b.substring(0,a));return location.protocol+"//"+b}function fb(a){return xa?hi5.browser.httpGet(Z()+"/CLIP?s="+xa+"&t="+(new Date).getTime(),!1):""}function ya(a){return"on"==a||"true"==a||1==a}function Ra(){return q.displayName||
q.server||q.symlink||q.id||"undefined"}function Sa(a,b,d){this.need=a;this.handler=b;this.repeat=d||1}function gb(){if(!Q){Ta();if(Da)w=Da;else{var a=hi5.tool.replaceQuery(g,"pwd","x");hi5.browser.binaryWS()&&(a+="&binary=on");var b=window.opener;if(b){var d=null;try{d=b.__sparkUser}catch(c){}d&&(b=d.account,d=d.session,b&&(a+="&account="+b),d&&(a+="&session="+d))}a=h.modifyURL(a+("&pasteCap="+(hi5.browser.isChrome&&hi5.browser.isDesktop?3:0)));(d=hi5.browser.cookie.get("__SV_TOKEN_A"))&&(a+="&__SV_TOKEN_A="+
encodeURIComponent(d));w=new WebSocket(a,"telnet");w.binaryType="arraybuffer"}W.ws=w;svGlobal.logger.info(g);w.onopen=hb;void 0!=q.recording&&"on"==q.recording&&ib(q);w.onmessage=function(c){c=c.data;if("string"!=typeof c){var e=new Uint8Array(c);null!=ba&&ba.add(new RecordingObj(e,0,c.byteLength));qa.set(e,0,c.byteLength);qa.handle()}else{var y=parseInt(c.substring(0,2),16);e=c.substring(2);switch(y){case 15:JSON.parse(e);if(h){if(h.onready)h.onready();if(h.onloggedin)h.onloggedin()}break;case 26:c=
JSON.parse(e);if(c.name){svGlobal.logger.info("msg="+e);if(h.onerror)h.onerror(c);e=__svi18n.errorCode["S"+c.name]||"";e+=c.message||c.msg;h.showMessage(e)}else 0<svGlobal.log&&console.erro("No error code for message:"+e);break;case 27:0!=I.drawLicense&&(K.drawLicense(e),Ea(q.fontSize));break;case 56:c=JSON.parse(e);xa=c.session;E(c.appId);c.server||(c.server=Ra());if(e=hi5.$("joinSelect"))e.value=c.joinMode;if(e=hi5.$("requestControl"))e.disabled=c.hasControl;e=jb("jointelnet.html")+"?id="+c.numericId;
e=h.modifyURL(e);var f=c.webAddress;f&&0<f.length&&(y=f.indexOf("://"),f=f.substring(y+3),y=f.indexOf("/"),0<y&&(f=f.substring(0,y)),f.toLowerCase()!=location.host.toLowerCase()&&(e+="&gateway="+f));c.joinLink=e;h.sessionInfo.appInfo=c;c.ver&&c.ver!=svGlobal.version&&svGlobal.logger.warn("Client:"+svGlobal.version+" server:"+c.ver);if(h.onsessionstart)h.onsessionstart(h.sessionInfo);break;case 59:c=hi5.Base64.dec(e,0);Fa=c[3]<<24|c[2]<<16|c[1]<<8|c[0];Fa&64&&h.showMessage(__svi18n.info.recording);
K.setFeature(Fa);break;case 61:c=JSON.parse(e);switch(c.type){case 0:q.fontSize=parseInt(c.fontSize);l=c.width;p=c.height;Ta();K.setAutoScale(!0);za(l+N,p+N);c.server&&(h.server=c.server,e=Ra(),h.setTitle&&(document.title=e));Ua=c.length;if(h.onopened)h.onopened(c);break;case 1:c=c.duration;if(h.onprogress)h.onprogress(c,Ua);break;case 2:2==c.status?Q=!0:(e=0==c.status,aa.pause(e),c.warn&&h.showMessage(e?__svi18n.info.sessionPaused:__svi18n.info.sessionResumed))}break;case 62:kb(e);break;default:svGlobal.logger.warn("@TODO:"+
c+"\n")}}};w.onclose=Aa;w.onerror=lb;za(l+N,p+N)}}function ib(a){ba=new RecordingManager;ba.setHeader({name:"rec",width:a.width,height:a.height,color:a.fontSize,namesuffix:".telnetv",filetag:"TELV",duration:0})}function mb(a,b){var d=0,c=!1;this.width=a;this.interval=b;var e=0;this.start=function(){c||(c=!0,d=setInterval(function(){if(K&&Q){var y=K.getThumbnail(a);y&&y.length!=e&&(w.send("8E7"+y),e=y.length)}},b))};this.stop=function(){clearInterval(d)}}function nb(a,b){!Y||Y.width==a&&Y.interval==
b||(Y.stop(),Y=null);Y||(Y=new mb(a,b));Y.start()}function kb(a){var b=parseInt(a.substring(0,1),16),d=a.substring(1);a=!1;var c=h.sessionInfo.appInfo;switch(b){case 1:var e=JSON.parse(d);h.onsessionjoin&&(a=h.onsessionjoin(e));if(a)break;h.showMessage(__svi18n.info.joinsession.applyArgs([e.numericId,e.__ip,e.name]));break;case 2:e=JSON.parse(d);h.onsessionexit&&(a=h.onsessionexit(e));if(a)break;h.showMessage(__svi18n.info.exitsession.applyArgs([e.numericId,e.__ip,e.name]));break;case 3:e=JSON.parse(d);
c.joinMode!=e.mode&&(c.joinMode=e.mode,b=hi5.$("joinSelect"))&&(b.value=e.mode);if(c.hasControl)break;K.setReadOnly(!1);if(b=hi5.$("requestControl"))b.disabled=!0;h.ongivecontrol&&(a=h.ongivecontrol());if(a)break;h.showMessage(__svi18n.info.givecontrol);break;case 4:K.setReadOnly(!0);c.hasControl=!1;if(b=hi5.$("requestControl"))b.disabled=!1;h.ontakebackcontrol&&(a=h.ontakebackcontrol());if(a)break;h.showMessage(__svi18n.info.nocontrol);break;case 5:e=JSON.parse(d);h.onrequirecontrol&&(a=h.onrequirecontrol(e));
if(a)break;a=__svi18n.info.title.applyArgs([e.name,e.numericId,e.__ip]);h.showMessage({title:a,msg:__svi18n.info.recontrol,cbYes:function(){h.giveControl(e.numericId);this.destroy()},cbNo:function(){h.refuseControl(e.numericId);this.destroy()}});break;case 6:K.setTouchRemoting(!0);break;case 7:e=JSON.parse(d);e.cols&&e.rows&&(a=A*e.cols+2*N,b=n*e.rows+2*N,aa=da(a,b),za(a,b));break;case 8:e=JSON.parse(d);if(h.onrequestcredential&&h.onrequestcredential(e))break;K.requestCredential(e);break;case 9:e=
JSON.parse(d);0<e.interval&&0<e.width?nb(e.width,e.interval):Y&&(Y.stop(),Y=null);break;case 11:e=JSON.parse(d),h.onrequirejoin&&(a=h.onrequirejoin(e)),a||(a=__svi18n.info.title.applyArgs([e.name,e.numericId,e.__ip]),h.showMessage({title:a,msg:__svi18n.info.reqjoin,cbYes:function(){h.allowJoin(e.numericId,!0);this.destroy()},cbNo:function(){h.allowJoin(e.numericId,!1);this.destroy()}}))}}function jb(a){var b=I.page&&I.page.join||"";if(b.startsWith("http://")||b.startsWith("https://"))return b;if(b.startsWith("/"))return location.origin+
b;var d=location.href,c=d.lastIndexOf("/");if(b)return d.substring(0,c+1)+b;b=Z();d.toLowerCase().startsWith(b.toLowerCase())&&(b=d.substring(0,c));return b+"/"+a}function hb(a){svGlobal.logger.info("opened...");Q=!0;w.send("87"+navigator.userAgent);if(h.onopen)h.onopen()}function lb(a){svGlobal.logger.warn(a)}function Aa(a){svGlobal.logger.warn("closed ...");fa&&(fa.style.display="none");Ga=Q=!1;if(h&&h.onclose)h.onclose();try{null!=ba&&(ba.exit(),ba=null),K&&K.close(),ka&&ka.visible()&&(ka.dismiss(),
ka=null)}catch(b){}qa&&(qa.release(),qa=null);ha=k=null;w&&(w.onopen=null,w.onmessage=null,w.onclose=null,w=w.onerror=null);h=K=W=null;window&&window.$telnet&&(window.$telnet=null);null!=ba&&(ba.exit(),ba=null)}function Ea(a,b){b||(b=X);k.font=a+"px "+b;A=k.measureText("X").width;oa=parseInt(p/n);S=parseInt(l/A);Ha(parseInt(p/n))}function Ha(a,b){b&&(ia=b);a&&(ca=a,Ba=(ca-1)*n+D);Va=1==ia&&ca==Math.floor(p/n)}function za(a,b){var d=a-N,c=b-N,e=Math.floor(c/n),y=Math.floor(d/A),f=null;Q&&(f=k.getImageData(0,
0,Math.min(y*A+N,S*A+N),Math.min(e*n+N,oa*n+N)));l=d;p=c;K.setSize(a,b);Ea(q.fontSize);Ia();f&&k.putImageData(f,0,0);oa=e;S=y;Ha(Math.floor(p/n))}function Ta(){fa||(Ia(),v=z,t=D,10>q.fontSize&&(q.fontSize=10),12>=q.fontSize?(n=q.fontSize+6,va=2):13<=q.fontSize&&18>q.fontSize?(n=q.fontSize+8,va=2):19<=q.fontSize&&25>q.fontSize?(n=q.fontSize+12,va=3):25<=q.fontSize&&(n=q.fontSize+16,va=4),Ea(q.fontSize),fa=document.getElementById("cursorID"),fa.style.display="block",fa.style.width=A+"px",fa.style.height=
n+"px",Ga=!0)}function Ia(){k.fillStyle=R;k.fillRect(0,0,ha.width,ha.height);k.fillStyle=T}function Wa(a,b){var d=b.getPosition(),c="",e=b.getEnd(),y=b.getData();switch(a>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:c+=String.fromCharCode(a);break;case 12:case 13:if(d<e)c+=String.fromCharCode((a&31)<<6|y[d++]&63);else return b.needMore=!0,c;break;case 14:if(1<e-d)c+=String.fromCharCode((a&15)<<12|(y[d++]&63)<<6|(y[d++]&63)<<0);else return b.needMore=!0,c}b.setPosition(d);return c}function Xa(a,
b){if(0!=M||Ja[a])""!=ja&&Ka(ja),ob(a);else if(La){var d=U[a]||"";ja=""!=d?ja+d:ja+Wa(a,b)}else ja+=Wa(a,b)}function Ma(a){for(;;){var b=a.getByte();if(255==b&&(b=a.getByte(),240==b))break}}function ra(a,b,d){w.send("D5"+a+"\t"+b+"\t"+(1==d?1:0));251==a?Na(b):252==a?Na(b):253==a?Oa(b):254==a&&Oa(b)}function Na(a){return 39>=a&&0<=a&&pb[a-0]}function Oa(a){return 39>=a&&0<=a&&qb[a-0]}function ob(a){switch(a){case 0:case 24:return M=0,!1;case 26:return M=0,!1;case 5:return!1;case 7:return!1;case 8:return v-=
A,v<z&&(v=z),P(),!1;case 9:var b=(v-z)/A/8;b=parseInt(1*b)+1;v=8*b*A+z;v>=S*A&&(v=z,t+=n,sa("\n"));P();return!1;case 13:return v=z,t>D+(ca-1)*n&&(t=D+(ca-1)*n),P(),!1;case 10:case 11:case 12:return Ya(),!1;case 15:return!1;case 14:return!1;case 17:case 19:return!1;case 27:return la="",M=27,!1;default:if(128<=a&&159>=a)return!1}switch(M){case 0:return!0;case 27:if("\\"==a)return!1;if(32<=a&&47>=a)return la+=String.fromCharCode(a),!1;if(32<=a&&126>=a||160<=a){null==la&&(la="");switch(a){case 48:"("==
la&&(La=!0);break;case 65:t-=n;P();break;case 66:"("==la&&(La=!1);break;case "C":v+=A;P();break;case 68:""==la&&Za(1);P();break;case 72:v=z;t+=n;break;case 77:""==la&&$a(1);break;case "P":M=0;M=144;break;case "Y":M=161;break;case "c":M=0;break;case 91:ma="";M=0;M=155;break;case 93:M=0;M=157;break;case "^":M=0,M=158}27==M&&(M=0);return!1}return!0;case 155:if(48<=a&&63>=a||32<=a&&47>=a)return ma+=String.fromCharCode(a),!1;if(32<=a&&126>=a||160<=a){b=null;null==ma&&(ma="");""!=ma&&(b=ma.split(";"));
switch(a){case 65:a=null!=b&&1<=b.length?parseInt(b[0]):1;t-=a*n;t<D&&(t=D);P();break;case 66:a=null!=b&&1<=b.length?parseInt(b[0]):1;var d=t;t+=a*n;a=(t-d)/n;sa("\n",0==a?1:a);P();break;case 67:b=null!=b&&1<=b.length?parseInt(b[0]):1;v+=b*A;P();break;case 68:b=null!=b&&1<=b.length?parseInt(b[0]):1;v-=b*A;v<z&&(v=z);P();break;case 69:a=null!=b&&1<=b.length?parseInt(b[0]):1;d=t;t+=a*n;a=(t-d)/n;sa("\n",0==a?1:a);v=z;P();break;case 70:a=null!=b&&1<=b.length?parseInt(b[0]):1;t-=a*n;t<D&&(t=D);v=z;P();
break;case 72:case 102:null!=b?(1<=b.length&&(a=parseInt(b[0]),d=t,t=D+(a-1)*n,a=(t-d)/n,sa("\n",0==a?1:a)),2<=b.length&&(b=parseInt(b[1])-1,v=z+b*A)):""==ma&&(v=z,t=D);break;case 73:b=1<=b.length?parseInt(b[0]):1;v=z+8*b*A;break;case 74:null!=b&&1<=b.length?(b=parseInt(b[0]),1==b?(k.fillStyle=R,k.fillRect(z,D,S*A,t-chart_height-D),k.fillRect(z,t,t-z,chart_height),k.fillStyle=T):2==b&&(Ia(),v=z,t=D)):(k.fillStyle=R,k.fillRect(v,t,S*A-v+z,oa*n-t+D),k.fillStyle=T);break;case 75:null!=b&&1<=b.length?
(b=parseInt(b[0]),1==b?Pa(z,v):2==b&&Pa(z,l+N),P()):Pa(v,l+N);break;case 76:null!=b&&1<=b.length&&(a=parseInt(b[0]),$a(a),P());break;case 77:null!=b&&1<=b.length&&(a=parseInt(b[0]),Za(a),P());break;case 80:b=null!=b&&1<=b.length?parseInt(b[0]):1;b=k.getImageData(v+b*A,t,l+N-v-b*A,n);k.fillStyle=R;k.fillRect(v,t,l+N-v,n);k.putImageData(b,v,t);k.fillStyle=T;P();break;case 88:b=null!=b&&1<=b.length?parseInt(b[0]):1;k.fillStyle=R;k.fillRect(v,t,b*A,n);k.fillStyle=T;break;case 109:if(null==b||0==b.length)k.font=
"normal "+q.fontSize+"px "+X,T=q.fgColor||V[7],R=q.bgColor||V[0];else{a=b.length;for(var c=0;c<a;c++)switch(d=1*b[c],d){case 0:k.font="normal "+q.fontSize+"px "+X;R=V[0];T=V[7];break;case 1:k.font="bold "+q.fontSize+"px "+X;break;case 4:break;case 5:k.font="italic "+q.fontSize+"px "+X;break;case 7:k.font="normal "+q.fontSize+"px "+X;R=V[7];T=V[0];break;case 22:k.font="normal "+q.fontSize+"px "+X;R=V[0];T=V[7];break;case 24:break;case 25:k.font="italic "+q.fontSize+"px "+X;break;case 27:k.font="normal "+
q.fontSize+"px "+X;R=V[7];T=V[0];break;default:30<=b[c]&&39>=b[c]?T=V[b[c]-30+1]:40<=b[c]&&49>=b[c]&&(R=V[b[c]-40+1])}}break;case 114:null!=b&&2<=b.length&&(a=parseInt(b[0]),b=parseInt(b[1]),Ha(b,a))}M=0;return!1}return!0;case 144:case 157:case 158:case 159:return 48<=a&&63>=a||32<=a&&47>=a?!1:32<=a&&126>=a||160<=a?(M=160,!1):!0;case 160:return 32<=a&&126>=a||160<=a?!1:!0;case 161:return M=162,!1;case 162:return M=0,!1;default:return M=0,!1}}function Pa(a,b){k.fillStyle=R;k.fillRect(a,t,b-a,n);k.fillStyle=
T}function $a(a){var b=k.getImageData(z,D+(ia-1)*n,S*A,(ca-ia-a+1)*n);k.fillStyle=R;k.fillRect(z,D+(ia-1)*n,S*A,n*a);k.putImageData(b,z,D+(ia+a-1)*n);k.fillStyle=T}function Za(a){var b=k.getImageData(z,(ia+a-1)*n+D,S*A,(ca-ia-a+1)*n);k.fillStyle=R;k.fillRect(z,(ca-a)*n+D,S*A,a*n);k.putImageData(b,z,(ia-1)*n+D);k.fillStyle=T}function Ya(){t+=n;sa("\n");P();ab()}function ab(){v>=S*A&&(v=z,t+=n);if(t>Ba){for(;t>Ba;)t-=n;P();if(Va){var a=ha.height-(D+n);k.drawImage(ha,0,D+n,ha.width,a,0,D,ha.width,a);
k.fillStyle=R;k.fillRect(0,Ba,ha.width,n)}else a=k.getImageData(z,D+n,S*A,(ca-1)*n),k.fillStyle=R,k.fillRect(z,D,S*A,ca*n),k.putImageData(a,z,D);k.fillStyle=T}}function Ka(a){var b=a.length,d=((v-z)/A|0)+b-S;0<d?(b-=d,bb(a.substring(0,b),b),ab(),Ka(a.substring(b))):(bb(a,b),"--More--"==a.trim()&&Ya())}function bb(a,b){t+n>p&&(t=(oa-1)*n+D);k.fillStyle=R;k.fillRect(v,t,A*b,n);k.fillStyle=T;k.fillText(a,v,t+n-3*va);v+=k.measureText(a).width;sa(a);P();ja=""}function P(){fa.style.top=t+"px";fa.style.left=
v+"px"}function rb(a){if(Q)return(a=a.getData("text/plain"))?(a=a.replace(/\r\n/g,"\n"),ta(a),!0):!1}function sb(){ka&&ua&&!ka.visible()&&(ua.value=pa,ka.show(),K&&K.setIgnorePaste(!1),setTimeout(function(){ua.scrollTop=ua.scrollHeight;ua.disabled=!1},10))}function sa(a,b){if(ka){if(b)for(var d=0;d<b;d++)pa+=a;else pa+=a;1E5<pa.length&&(pa=pa.substring(4E4))}}function ta(a){if(a){var b=a.length+1,d=new Uint8Array(b);d[0]=147;for(var c=1;c<b;c++)d[c]=a.charCodeAt(c-1);w.send(d.buffer)}}sessionStorage&&
sessionStorage.clear();var ua=document.getElementById("copytextarea"),ka=ua?new hi5.Lightbox(document.getElementById("copydialog")):null,pa="";this.displayMsg=!0;this.reconnectTimes=0;this.setTitle=this.openLink=!0;this.mode=0;var Da="object"==typeof g?g:null,cb="object"==typeof g||0<g.indexOf("/PLAY?");cb?(this.mode=1,Da&&(g=""),g+="&touchpad=on"):0<g.indexOf("/JOIN?")&&(this.mode=2,this.reconnectOnResize=!1);hi5.appcfg||(hi5.appcfg={img:{},toolbar:{fadable:!0},displayMsg:!0});var I=hi5.appcfg;this.sessionInfo=
{major:0,minor:0,width:0,height:0,bpp:0,bigEndian:!0,trueColor:!0};var xa="",K=null,Q=!1,Ga=!1,Fa=0,N=5,ba=null;window.$telnet=this;I.copyDialog=!0;for(var U=[],na=0;127>na;na++)U[na]=String.fromCharCode(na);U[106]="+";U[107]="+";U[108]="+";U[109]="+";U[110]="+";U[113]="_";U[116]="+";U[117]="+";U[118]="+";U[119]="+";U[120]="|";(function(){for(var a={128:199,129:252,130:233,131:226,132:228,133:224,134:229,135:231,136:234,137:235,138:232,139:239,140:238,141:236,142:196,143:197,144:201,145:230,146:198,
147:244,148:246,149:242,150:251,151:249,152:255,153:214,154:220,155:162,156:163,157:165,158:8359,159:402,160:225,161:237,162:243,163:250,164:241,165:209,166:170,167:186,168:191,169:8976,170:172,171:189,172:188,173:161,174:171,175:187,176:9617,177:9618,178:9619,179:9474,180:9508,181:9569,182:9570,183:9558,184:9557,185:9571,186:9553,187:9559,188:9565,189:9564,190:9563,191:9488,192:9492,193:9524,194:9516,195:9500,196:9472,197:9532,198:9566,199:9567,200:9562,201:9556,202:9577,203:9574,204:9568,205:9552,
206:9580,207:9575,208:9576,209:9572,210:9573,211:9561,212:9560,213:9554,214:9555,215:9579,216:9578,217:9496,218:9484,219:9608,220:9604,221:9612,222:9616,223:9600,224:945,225:223,226:915,227:960,228:931,229:963,230:181,231:964,232:934,233:920,234:937,235:948,236:8734,237:966,238:949,239:8745,240:8801,241:177,242:8805,243:8804,244:8992,245:8993,246:247,247:8776,248:176,249:8729,250:183,251:8730,252:8319,253:178,254:9632,255:160},b=128;256>b;b++)U[b]=String.fromCharCode(a[b])})();var qb=[!0,!0,!1,!0,
!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],pb=[!0,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1],Ja=Array(256),db=[0,5,7,8,9,10,11,12,13,14,15,17,19,24,26,27,127,132,133,136,141,142,143,144,146,155,156,157,158,159];for(na=0;256>na;na++)Ja[na]=!1;for(var Qa=0;Qa<db.length;Qa++)Ja[db[Qa]]=!0;var qa=new function(a){var b=0,d=0,c=new Uint8Array(a),e=this,y=new Sa(0,
null,0);this.needMore=!1;this.release=function(){e=c=y=null};this.getHandler=function(){return y};this.getData=function(){return c};this.getPosition=function(){return b};this.setPosition=function(f){b=f};this.getEnd=function(){return d};this.set=function(f,G,m){c=f;b=G;d=m};this.handle=function(){y.handler(e,y)};this.setHandler=function(f){f&&1>f.need&&svGlobal.logger.warn("need < 1");(y=f)&&d-b>=f.need&&f.handler(e,f)};this.getByte=function(){return c[b++]};this.peekByte=function(){return c[b]};
this.getBE32=function(){return c[b++]<<24|c[b++]<<16|c[b++]<<8|c[b++]};this.getBE16=function(){return c[b++]<<8|c[b++]};this.skip=function(f){b+=f};this.skipBack=function(f){b-=f};this.getBytes=function(f,G){if(G)for(var m=0;m<f;m++)G[m]=c[b++];else return G=b,b+=f,c.subarray(G,b)};this.copyToByteArray=function(f,G,m,r){hi5.Arrays.arraycopy(c,m,f,G,r)}}(4194304);this.setLinks=function(a){};this.running=function(){return Q};this.getHistory=function(){return pa};this.mapCmdToCtrl=!0;var h=this,w=null,
q=hi5.tool.queryToObj(g.substring(g.indexOf("?")+1));l||(l=window.innerWidth);l-=N;q.width=l;g+="&width="+l;p||(p=window.innerHeight);p-=N;q.height=p;g+="&height="+p;q.fontSize?q.fontSize=parseInt(q.fontSize,10):(q.fontSize=13,g+="&fontSize=13");this.server=q.server;this.port=q.port?parseInt(q.port,10):23;this.loadbalanceToken="";I.loadbalanceTokenName&&q[I.loadbalanceTokenName]&&E(q[I.loadbalanceTokenName]);this.modifyURL=function(a){h.loadbalanceToken&&(a+="&"+h.loadbalanceToken);return a};var V=
"black red green yellow blue magenta cyan white gray violet".split(" "),aa=da(l,p),k=aa.getContext(),ha,W=new function(){this.ws=null;this.setJoinMode=h.setJoinMode;this.requestControl=h.requestControl;this.writeKeyComb=h.writeKeyComb;this.localLockFlags=0;this.checkLockFlags=!0;this.getAppMode=function(){return h.mode};this.send=function(b){"891"!=b&&Q&&this.ws.send(b)};this.sendInput=function(b){h.writeRawInput(b);if(h.onactivity)h.onactivity(b)};var a=null;this.getAppInfo=function(){return h.sessionInfo.appInfo};
this.onresize=function(b){if(b=b.target.svSurface){b=b.getFreeSpace();var d=b.width,c=b.height;hi5.browser.isTouch||hi5.browser.isOpera||!Q||(a&&(clearTimeout(a),a=null),a=setTimeout(function(){za(d,c);w.send("D9"+S+"\t"+oa)},200))}};this.onorientationchange=function(b){};this.getClipData=fb;this.onfocus=function(b){};this.fileCallback=[];this.getShareFiles=function(b,d){loggedin&&(this.ws.send("3A5"+b),this.fileCallback.push(d))};this.notifyFiles=function(b){for(var d=this.fileCallback,c=0,e=d.length;c<
e;c++)d[c](b)};this.getFile=function(b){window.open(h.getFileUrl(b))};this.removeFile=function(b){uploadMgr&&uploadMgr.fileService.remove(b)};this.getFileLink=function(b){return Z()+"/DOWNLOAD?s="+xa+"&f="+b};this.getGateway=function(){return g};this.reconnect=function(b,d,c){};this.sendKeyboardSyncFlags=function(b){return Q?(this.remoteLockFlags=this.localLockFlags=b,!0):!1}};void 0!=I.displayMsg?this.displayMsg=I.displayMsg:I.displayMsg=this.displayMsg;void 0!=I.reconnectTimes&&(this.reconnectTimes=
I.reconnectTimes);void 0!=I.openLink&&(this.openLink=I.openLink);void 0!=I.setTitle&&(this.setTitle=I.setTitle);"boolean"==typeof I.useWSS&&(g=(I.useWSS?"wss":"ws")+g.substring(g.indexOf("://")));this.getURL=function(){return g};this.setJoinMode=function(a){Q&&w.send("8E1"+a)};this.refuseControl=function(a){Q&&w.send("8E3"+a)};this.giveControl=function(a){Q&&w.send("8E4"+a)};this.requestControl=function(){Q&&w.send("8E2")};this.play=function(){w.send("F3")};this.pause=function(){w.send("F2")};this.scan=
function(a){w.send("F4"+(a?"1":"0"))};this.seek=function(a){K&&Q&&(w.send("F4"+(a?"1":"0")+"\t"+(a/K.getScale().x|0)),aa.pause(!0))};this.allowJoin=function(a,b){w.send("8EA"+a+"\t"+(b?1:0))};var Y=null,Ua=0;this.run=function(){gb()};this.hide=function(){K&&("block"==document.getElementById("cursorID").style.display&&(document.getElementById("cursorID").style.display="none"),K.hide())};this.showMessage=function(a,b){h.displayMsg&&a&&(K?K.showMessage(a,b):("string"==typeof a&&(a={msg:a,timeout:b||
0}),hi5.notifications.notify(a)))};this.close=function(){if(w&&Q)try{w.send("85"),w.close()}catch(a){}else Aa()};hi5.browser.isChromeApp?chrome.runtime.onSuspend.addListener(Aa):window.addEventListener("unload",Aa,!1);var eb=!1,fa=null,z=N=5,D=5,v=0,t=0,X=q.fontFamily||q.fontName||"Courier New";0<X.indexOf(" ")&&(X='"'+X+'"');var T=q.fgColor||V[7],R=q.bgColor||V[0],M=0,ma="",la="",A=0,n=18,va=0,ja="",La=!1,oa=0,S=0,ia=1,ca=24,Ba=0,Va=!0,tb=new Sa(1024,function(a){var b=!0;for(a.needMore=!1;b;){var d=
a.getByte();if(0>d)break;if(255==d)a:{var c=a,e=c.getByte();switch(e){case 255:Xa(e,c);break;case 254:case 253:case 252:case 251:d=c.getByte();c=e;253!=c||Na(d)?251!=c||Oa(d)?254==c?ra(252,d,!1):252==c?ra(254,d,!1):253==c?(ra(251,d,!1),31==d?w.send("D9"+S+"\t"+oa):12==d&&w.send("D7")):251==c&&ra(253,d,!1):ra(254,d,!0):ra(252,d,!0);break;case 250:d=c.getByte();switch(d){case 24:d=c.getByte();Ma(c);if(1!=d)break;w.send("DA");break;case 32:d=c.getByte();Ma(c);if(1!=d)break;w.send("DC");break;default:Ma(c)}break;
default:break a}eb||(eb=!0,w.send("D0"))}else Xa(d,a);a.getPosition()>=a.getEnd()&&(""!=ja&&Ka(ja),b=!1)}});qa.setHandler(tb);this.addSurface=function(a){K=a;cb&&a.setPlayerMode();aa.setContext(K.context);k=aa.getContext();ha=k.canvas;a.setAutoScale(0<h.mode);a.setSize(l+N,p+N);a.setController(W);a.setFastCopy(ya(q.fastCopy));a.setTouchpad(ya(q.touchpad));a.setClipboard(ya(q.mapClipboard));var b=void 0!=q.cmdToCtrl?ya(q.cmdToCtrl):void 0!=I.cmdToCtrl?I.cmdToCtrl:h.mapCmdToCtrl;a.run(99997,!1,!0,b);
a.onclipdata=rb};this.writeText=ta;this.writeScancode=function(a,b){ta(Ca.process(a,b,0))};var ub={" ":57,space:57,pageup:201,pagedown:209,end:207,home:199,left:203,up:200,right:205,down:208,printscreen:183,insert:210,del:211,"delete":211,altgr:184,windows:219,windowsright:220,context:221,esc:1,backspace:14,tab:15,enter:28,meta:29,command:29,ctrl:29,shift:42,alt:56,capslock:58,f1:59,f2:60,f3:61,f4:62,f5:63,f6:64,f7:65,f8:66,f9:67,f10:68,f11:87,f12:88,numlock:69,scrolllock:70,add:78};this.writeKeyComb=
function(a){a=a.split("+");var b=a.length;if(0!=b)for(var d=null,c=0;c<b;c++){var e=a[c];""==e&&""==d&&(e="Add");if(""!=e){d=e;var y=ub[d.toLowerCase()];y?h.writeScancode(!0,y):console.log("Invalid key:"+d)}d=e}};this.writeRawInput=function(a){if(Ga){var b=parseInt(a.substring(0,2),16);a=a.substring(2).split("\t");switch(b){case 128:2==a[2]&&sb();return;case 129:return;case 130:return;case 131:return;case 132:b=parseInt(a[1]);a=0==a[0];ta(Ca.process(a,b,0));return;case 139:b=parseInt(a[1]);a=0==a[0];
ta(Ca.process(a,b,1));return;case 134:ta(Ca.process(!0,a[0],3));return}svGlobal.logger.warn("Unknowncode: "+a[1]+" type:"+b)}};var Ca=new function(a,b,d){var c=!1,e=!1,y=!1;this.process=function(f,G,m){if(3==m)return G;if(0==m){switch(G){case 29:case 157:return c=f,"";case 56:case 184:return e=f,"";case 42:case 54:return y=f,""}if(f){switch(G){case 28:f="\r\n";break;case 200:f="\u001b[A";break;case 208:f="\u001b[B";break;case 205:f="\u001b[C";break;case 203:f="\u001b[D";break;case 59:f="\u001bOP";
break;case 60:f="\u001bOQ";break;case 61:f="\u001bOR";break;case 62:f="\u001bOS";break;case 63:f="\u001b[15~";break;case 64:f="\u001b[17~";break;case 65:f="\u001b[18~";break;case 66:f="\u001b[19~";break;case 67:f="\u001b[20~";break;case 68:f="\u001b[21~";break;case 87:f="\u001b[23~";break;case 88:f="\u001b[24~";break;case 15:f="\t";break;case 209:f="\u001b[6~";break;case 201:f="\u001b[5~";break;case 199:f="\u001b[H";break;case 207:f="\u001b[F";break;case 14:f=y?"\b":"\u007f";break;case 211:f="\u001b[3~";
break;case 197:f="\u00ff\u00f3";break;case 210:f="\u001b[2~";break;case 1:f="\u001b";break;case 55:f="*";break;case 71:f=W.localLockFlags&2?"7":"\u001b[H";break;case 72:f=W.localLockFlags&2?"8":"\u001b[A";break;case 73:f=W.localLockFlags&2?"9":"\u001b[5~";break;case 74:f="-";break;case 75:f=W.localLockFlags&2?"4":"\u001b[D";break;case 76:f="5";break;case 77:f=W.localLockFlags&2?"6":"\u001b[C";break;case 78:f="+";break;case 79:f=W.localLockFlags&2?"1":"\u001b[F";break;case 80:f=W.localLockFlags&2?
"2":"\u001b[B";break;case 81:f=W.localLockFlags&2?"3":"\u001b[6~";break;case 82:f=W.localLockFlags&2?"0":"\u001b[2~";break;case 83:f=W.localLockFlags&2?".":"\u001b[3~";break;case 156:f="\r\n";break;case 181:f="/";break;default:return console.log("Invalid code:"+G),""}e&&(f="\u001b"+f);return f}return""}if(1==m&&c){if(64<G&&91>G)return String.fromCharCode(G-64);switch(G){case 54:return"\u001e";case 219:return"\u001b";case 220:return"\u001c";case 221:return"\u001d";case 32:return"\x00";case 192:return"\u001e";
case 191:return"\u001f";default:return console.log("Invalid key code:"+G),""}}if(e)return"\u001b"+String.fromCharCode(G).toLowerCase()}}};