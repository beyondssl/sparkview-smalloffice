var wsRdp=null;
function websocketData(a){a=a.data;switch(a.type){case 0:switch(a.cmd){case 0:initialize(a.data);break;case 1:setBpp(a.data);break;case 2:setResolution(a.data);break;case 3:restoreVar();break;case 4:wsRdp&&wsRdp.close();setTimeout(function(){close()},50);break;case 5:wsRdp.setAudioFormat(a.data);break;case 6:wsRdp.onSlowPath=a.start?wsRdp.onFastPath=function(){_dataReceived.id=1;self.postMessage(_dataReceived)}:wsRdp.onFastPath=null;break;case 7:historyCallback();break;default:console.log("invalid cmd:"+a.cmd),
console.log(a)}break;case 5:wsRdp.writeRawInput(a.data);break;case 6:localFilePlayer.onmessage(a);break;default:console.log("Invalid msg type: "+a.type),console.log(a)}}function FilePlayerProxy(){this.onmessage=function(){};this.onclose=function(){};this.onopen=function(){};this.close=function(){}}var localFilePlayer=new FilePlayerProxy,historyCallback=null;self.addEventListener("message",websocketData,!1);
var _cursorMov={type:1,event:6,x:0,y:0},_cursor={type:9,cache_idx:0,rawData:null,none:!1,hotX:0,hotY:0,width:0,height:0,xorSize:0,andSize:0,result:"",distance:0,bpp:0,system:""},_msgData={type:10,data:null},_altSecData={type:11,data:null,size:0},_dataReceived={type:1,event:8,id:0};
function initialize(a){var m=a.libPath,q=!1!==a.libMin?"_min.js":".js";importScripts(m+"hi5core"+q);importScripts(m+"rdpcore"+q);wsRdp=a.addr?new RdpGeneral(a.addr,a.width,a.height,a.server_bpp,new DisplayBufferWrapper,!0,a.wsPost):new RdpGeneral(localFilePlayer,a.width,a.height,a.server_bpp,new DisplayBufferWrapper,!0,!1);wsRdp.onopen=function(){self.postMessage({type:1,event:0})};wsRdp.onclose=function(e){self.postMessage({type:1,event:1,expected:e})};wsRdp.onerror=function(e){self.postMessage({type:1,
event:2,code:e})};wsRdp.oninfo=function(e){self.postMessage({type:1,event:3,code:e})};wsRdp.onloggedin=function(e){self.postMessage({type:1,event:4})};wsRdp.onHistoryReceived=function(){_dataReceived.id=0;self.postMessage(_dataReceived)};wsRdp.onReqHistory=function(){_dataReceived.id=3;self.postMessage(_dataReceived)};wsRdp.onresolutionchange=function(e,g){self.postMessage({type:1,event:5,w:e,h:g})};wsRdp.onLockKeyState=function(e){self.postMessage({type:1,event:10,state:e})};wsRdp.onMoveCursor=function(e,
g){_cursorMov.x=e;_cursorMov.y=g;self.postMessage(_cursorMov)};wsRdp.onCloseSurface=function(e,g){self.postMessage({type:1,event:6})};wsRdp.onColorChange=function(e){self.postMessage({type:1,event:9,color:e})};wsRdp.onAltSecWindows=function(e,g){_altSecData.data=e.getBytes(g);_altSecData.size=g;self.postMessage(_altSecData,[_altSecData.data.buffer])};wsRdp.onmessage=function(e){_msgData.data=e.data;"string"!=typeof _msgData.data?self.postMessage(_msgData,[_msgData.data]):self.postMessage(_msgData)};
wsRdp.run()}function setResolution(a){wsRdp&&wsRdp.setResolution(a.w,a.h)}function setBpp(a){wsRdp&&wsRdp.setColor(a)}function restoreVar(){wsRdp&&wsRdp.resetStatus()}
function DisplayBufferWrapper(){var a={type:2,x:0,y:0,w:0,h:0,pixel:null,offset:0,scansize:0},m={type:3,srcx:0,srcy:0,cx:0,cy:0,dx:0,dy:0},q={type:5,l:0,t:0,w:0,h:0,color:0},e={type:6,x1:0,y1:0,x2:0,y2:0,color:0},g={type:7,opcode:0,dstwidth:0,x:0,y:0,cx:0,cy:0,src:0,srcwidth:0,srcx:0,srcy:0},f={type:12,font:0,flags:0,mixmode:0,foregroundColor:0,backgroundColor:0,clipLeft:0,clipTop:0,clipcx:0,clipcy:0,boxLeft:0,boxTop:0,boxcx:0,boxcy:0,x:0,y:0,length:0,text:null,_left:0,_top:0,_right:0,_bottom:0},
n={type:13,cacheID:0,cacheIDX:0,x:0,y:0,cx:0,cy:0,srcx:0,srcy:0,opcode:0},l={type:14,x:0,y:0,cx:0,cy:0,offset:0},y={type:16,font:0,character:0,glyph:null},r={type:17,idx:0,cursor:null},u={type:20,order:0,data:null,off:0},v={type:21,id:0,idx:0,bitmap:null};this.setRGBs=function(c,b,d,k,h,p,t){a.x=c;a.y=b;a.w=d;a.h=k;a.pixel=h;a.offset=p;a.scansize=t;self.postMessage(a,[h.buffer])};this.moveArea=function(c,b,d,k,h,p){m.srcx=c;m.srcy=b;m.cx=d;m.cy=k;m.dx=h;m.dy=p;self.postMessage(m)};this.fillRect=function(c,
b,d,k,h){q.l=c;q.t=b;q.w=d;q.h=k;q.color=h;self.postMessage(q)};this.drawLine=function(c,b,d,k,h){e.x1=c;e.y1=b;e.x2=d;e.y2=k;e.color=h;self.postMessage(e)};this.bitBlt=function(c,b,d,k,h,p,t,w,x,z){g.opcode=c;g.dstwidth=b;g.x=d;g.y=k;g.cx=h;g.cy=p;g.src=t;g.srcwidth=w;g.srcx=x;g.srcy=z;self.postMessage(g)};this.drawLineExt=function(c,b,d,k,h,p){};this.drawText=function(c,b,d,k,h,p,t,w,x,z,A,B,C,D,E,F,G,H,I,J,K){f.font=c;f.flags=b;f.mixmode=d;f.foregroundColor=k;f.backgroundColor=h;f.clipLeft=p;f.clipTop=
t;f.clipcx=w;f.clipcy=x;f.boxLeft=z;f.boxTop=A;f.boxcx=B;f.boxcy=C;f.x=D;f.y=E;f.length=F;f.text=G;f._left=H;f._top=I;f._right=J;f._bottom=K;self.postMessage(f)};this.drawBitmap=function(c,b,d,k,h,p,t,w,x){n.cacheID=c;n.cacheIDX=b;n.x=d;n.y=k;n.cx=h;n.cy=p;n.srcx=t;n.srcy=w;n.opcode=x;self.postMessage(n)};this.saveDesktop=function(c,b,d,k,h){l.type=14;l.x=c;l.y=b;l.cx=d;l.cy=k;l.offset=h;self.postMessage(l)};this.restoreDesktop=function(c,b,d,k,h){l.type=15;l.x=c;l.y=b;l.cx=d;l.cy=k;l.offset=h;self.postMessage(l)};
this.putFont=function(c,b,d){y.font=c;y.character=b;y.glyph=d;self.postMessage(y,[d.fontData.buffer])};this.putCursor=function(c,b){r.type=17;r.idx=c;r.cursor=b;b.rawData?self.postMessage(r,[b.rawData.buffer]):self.postMessage(r)};this.setCursor=function(c){r.type=18;r.idx=c;r.cursor=null;self.postMessage(r)};this.getHistory=function(c,b){historyCallback=b;self.postMessage({type:19})};this.setHistory=function(c,b){u.order=c;u.data=b.getData();u.off=b.getPosition();self.postMessage(u,[u.data.buffer])};
this.putBitmap=function(c,b,d){v.id=c;v.idx=b;v.bitmap=d;d.raw?self.postMessage(v,[d.data.buffer,d.raw.buffer]):self.postMessage(v,[d.data.buffer])}};