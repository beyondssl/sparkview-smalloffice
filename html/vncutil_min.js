function DesCipher(u){function B(a,f,b){var c,k=Array(56),g=Array(56),h=Array(32);for(c=0;56>c;++c){var d=p[c];var l=d&7;k[c]=0!=(a[d>>>3]&C[l])?1:0}for(a=0;16>a;++a){l=f?a<<1:15-a<<1;var m=l+1;for(c=h[l]=h[m]=0;28>c;++c)d=c+w[a],g[c]=28>d?k[d]:k[d-28];for(c=28;56>c;++c)d=c+w[a],g[c]=56>d?k[d]:k[d-28];for(c=0;24>c;++c)0!=g[x[c]]&&(h[l]|=D[c]),0!=g[x[c+24]]&&(h[m]|=D[c])}for(l=d=k=0;16>k;++k)f=h[d++],c=h[d++],b[l]=(f&16515072)<<6,b[l]|=(f&4032)<<10,b[l]|=(c&16515072)>>>10,b[l]|=(c&4032)>>>6,++l,b[l]=
(f&258048)<<12,b[l]|=(f&63)<<16,b[l]|=(c&258048)>>>4,b[l]|=c&63,++l}function E(a,f,b){var c,k=0;var g=a[0];var h=a[1];var d=(g>>>4^h)&252645135;h^=d;g^=d<<4;d=(g>>>16^h)&65535;h^=d;g^=d<<16;d=(h>>>2^g)&858993459;g^=d;h^=d<<2;d=(h>>>8^g)&16711935;g^=d;h^=d<<8;h=h<<1|h>>>31&1;d=(g^h)&2863311530;g^=d;h^=d;g=g<<1|g>>>31&1;for(c=0;8>c;++c)d=h<<28|h>>>4,d^=b[k++],a=H[d&63],a|=I[d>>>8&63],a|=F[d>>>16&63],a|=y[d>>>24&63],d=h^b[k++],a|=J[d&63],a|=K[d>>>8&63],a|=G[d>>>16&63],a|=z[d>>>24&63],g^=a,d=g<<28|g>>>
4,d^=b[k++],a=H[d&63],a|=I[d>>>8&63],a|=F[d>>>16&63],a|=y[d>>>24&63],d=g^b[k++],a|=J[d&63],a|=K[d>>>8&63],a|=G[d>>>16&63],a|=z[d>>>24&63],h^=a;h=h<<31|h>>>1;d=(g^h)&2863311530;g^=d;h^=d;g=g<<31|g>>>1;d=(g>>>8^h)&16711935;h^=d;g^=d<<8;d=(g>>>2^h)&858993459;h^=d;g^=d<<2;d=(h>>>16^g)&65535;g^=d;h^=d<<16;d=(h>>>4^g)&252645135;f[0]=h^d<<4;f[1]=g^d}function A(a,f,b,c,k){for(var g=0;g<k;++g)b[c+g]=(a[f+4*g]&255)<<24|(a[f+4*g+1]&255)<<16|(a[f+4*g+2]&255)<<8|a[f+4*g+3]&255}function r(a,f,b,c,k){for(var g=
0;g<k;++g)b[c+4*g]=a[f+g]>>>24&255,b[c+4*g+1]=a[f+g]>>>16&255,b[c+4*g+2]=a[f+g]>>>8&255,b[c+4*g+3]=a[f+g]&255}var C=[1,2,4,8,16,32,64,128],D=[8388608,4194304,2097152,1048576,524288,262144,131072,65536,32768,16384,8192,4096,2048,1024,512,256,128,64,32,16,8,4,2,1],p=[56,48,40,32,24,16,8,0,57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,60,52,44,36,28,20,12,4,27,19,11,3],w=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],x=[13,16,10,23,0,4,2,27,14,5,
20,9,22,18,11,3,25,7,15,6,26,19,12,1,40,51,30,36,46,54,29,39,50,44,32,47,43,48,38,55,33,52,45,41,49,35,28,31],y=[16843776,0,65536,16843780,16842756,66564,4,65536,1024,16843776,16843780,1024,16778244,16842756,16777216,4,1028,16778240,16778240,66560,66560,16842752,16842752,16778244,65540,16777220,16777220,65540,0,1028,66564,16777216,65536,16843780,4,16842752,16843776,16777216,16777216,1024,16842756,65536,66560,16777220,1024,4,16778244,66564,16843780,65540,16842752,16778244,16777220,1028,66564,16843776,
1028,16778240,16778240,0,65540,66560,0,16842756],z=[2148565024,2147516416,32768,1081376,1048576,32,2148532256,2147516448,2147483680,2148565024,2148564992,2147483648,2147516416,1048576,32,2148532256,1081344,1048608,2147516448,0,2147483648,32768,1081376,2148532224,1048608,2147483680,0,1081344,32800,2148564992,2148532224,32800,0,1081376,2148532256,1048576,2147516448,2148532224,2148564992,32768,2148532224,2147516416,32,2148565024,1081376,32,32768,2147483648,32800,2148564992,1048576,2147483680,1048608,
2147516448,2147483680,1048608,1081344,0,2147516416,32800,2147483648,2148532256,2148565024,1081344],F=[520,134349312,0,134348808,134218240,0,131592,134218240,131080,134217736,134217736,131072,134349320,131080,134348800,520,134217728,8,134349312,512,131584,134348800,134348808,131592,134218248,131584,131072,134218248,8,134349320,512,134217728,134349312,134217728,131080,520,131072,134349312,134218240,0,512,131080,134349320,134218240,134217736,512,0,134348808,134218248,131072,134217728,134349320,8,131592,
131584,134217736,134348800,134218248,520,134348800,131592,8,134348808,131584],G=[8396801,8321,8321,128,8396928,8388737,8388609,8193,0,8396800,8396800,8396929,129,0,8388736,8388609,1,8192,8388608,8396801,128,8388608,8193,8320,8388737,1,8320,8388736,8192,8396928,8396929,129,8388736,8388609,8396800,8396929,129,0,0,8396800,8320,8388736,8388737,1,8396801,8321,8321,128,8396929,129,1,8192,8388609,8193,8396928,8388737,8193,8320,8388608,8396801,128,8388608,8192,8396928],I=[256,34078976,34078720,1107296512,
524288,256,1073741824,34078720,1074266368,524288,33554688,1074266368,1107296512,1107820544,524544,1073741824,33554432,1074266112,1074266112,0,1073742080,1107820800,1107820800,33554688,1107820544,1073742080,0,1107296256,34078976,33554432,1107296256,524544,524288,1107296512,256,33554432,1073741824,34078720,1107296512,1074266368,33554688,1073741824,1107820544,34078976,1074266368,256,33554432,1107820544,1107820800,524544,1107296256,1107820800,34078720,0,1074266112,1107296256,524544,33554688,1073742080,
524288,0,1074266112,34078976,1073742080],K=[536870928,541065216,16384,541081616,541065216,16,541081616,4194304,536887296,4210704,4194304,536870928,4194320,536887296,536870912,16400,0,4194320,536887312,16384,4210688,536887312,16,541065232,541065232,0,4210704,541081600,16400,4210688,541081600,536870912,536887296,16,541065232,4210688,541081616,4194304,16400,536870928,4194304,536887296,536870912,16400,536870928,541081616,4210688,541065216,4210704,541081600,0,541065232,16,16384,541065216,4210704,16384,
4194320,536887312,0,541081600,536870912,4194320,536887312],H=[2097152,69206018,67110914,0,2048,67110914,2099202,69208064,69208066,2097152,0,67108866,2,67108864,69206018,2050,67110912,2099202,2097154,67110912,67108866,69206016,69208064,2097154,69206016,2048,2050,69208066,2099200,2,67108864,2099200,67108864,2099200,2097152,67110914,67110914,69206018,69206018,2,2097154,67108864,67110912,2097152,69208064,2050,2099202,69208064,2050,67108866,69208066,69206016,2099200,0,2,69208066,0,2099202,69206016,2048,
67108866,67110912,2048,2097154],J=[268439616,4096,262144,268701760,268435456,268439616,64,268435456,262208,268697600,268701760,266240,268701696,266304,4096,64,268697600,268435520,268439552,4160,266240,262208,268697664,268701696,4160,0,0,268697664,268435520,268439552,266304,262144,266304,262144,268701696,4096,64,268697664,4096,266304,268439552,64,268435520,268697600,268697664,268435456,262144,268439616,0,268701760,262208,268435520,268697600,268439552,268439616,0,268701760,266240,266240,4160,4160,262208,
268435456,268701696],q=Array(32);q[0]=0;var t=Array(32);t[0]=0;this.setKey=function(a){B(a,!0,q);B(a,!1,t)};this.setKey(u);var e=[0,0];this.encrypt=function(a,f,b,c){A(a,f,e,0,2);E(e,e,q);r(e,0,b,c,2)};this.decrypt=function(a,f,b,c){A(a,f,e,0,2);E(e,e,t);r(e,0,b,c,2)}}
function TINF(){function u(){this.table=Array(16);this.table[0]=0;this.trans=Array(288);this.trans[0]=0}function B(){this.source="";this.bitcount=this.tag=this.sourceIndex=0;this.dest=Array(4096);this.destIndex=this.dest[0]=0;this.history=[0];this.history.length=0;this.ltree=new u;this.dtree=new u;this.status=0}function E(e,a,f,b){var c;for(c=0;c<f;++c)e[c]=0;for(c=0;c<30-f;++c)e[c+f]=Math.floor(c/f);f=b;for(c=0;30>c;++c)a[c]=f,f+=1<<e[c]}function A(e,a,f,b){var c=K,k,g=e.table,h=e.trans;for(e=0;16>
e;++e)g[e]=0;for(e=0;e<b;++e)g[a[f+e]]++;for(e=k=g[0]=0;16>e;++e)c[e]=k,k+=g[e];for(e=0;e<b;++e)a[f+e]&&(h[c[a[f+e]]++]=e)}function r(e,a,f){if(!a)return f;for(var b;24>e.bitcount;)e.tag|=e.source[e.sourceIndex++]<<e.bitcount,e.bitcount+=8;b=e.tag&65535>>16-a;e.tag>>=a;e.bitcount-=a;return b+f}function C(e,a){for(;16>e.bitcount;)e.tag|=e.source[e.sourceIndex++]<<e.bitcount,e.bitcount+=8;var f=0,b=0,c=0;do b=2*b+((e.tag&1<<c)>>c),++c,f+=a.table[c],b-=a.table[c];while(0<=b);e.tag>>=c;e.bitcount-=c;
return a.trans[f+b]}function D(e,a,f){for(var b=e.dest,c=e.destIndex,k=e.history;;){var g=C(e,a);if(256==g)break;if(256>g)b[c++]=g,k.push(g);else{var h;g-=257;g=r(e,y[g],z[g]);var d=C(e,f);for(h=d=k.length-r(e,F[d],G[d]);h<d+g;++h)b[c++]=k[h],k.push(e.history[h])}}e.destIndex=c;return p.OK}this.OK=0;this.DATA_ERROR=-3;var p=this,w=new u,x=new u,y=Array(30),z=Array(30),F=Array(30),G=Array(30),I=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],K=Array(16),H=new u,J=Array(320),q=new B,t=0;this.reset=
function(){q=new B;t=0};this.release=function(){p=q=null};this.init=function(e){var a,f=w.table,b=w.trans,c=x.table,k=x.trans;for(a=0;7>a;++a)f[a]=0;f[7]=24;f[8]=152;f[9]=112;for(a=0;24>a;++a)b[a]=256+a;for(a=0;144>a;++a)b[24+a]=a;for(a=0;8>a;++a)b[168+a]=280+a;for(a=0;112>a;++a)b[176+a]=144+a;for(a=0;5>a;++a)c[a]=0;c[5]=32;for(a=0;32>a;++a)k[a]=a;E(y,z,4,3);E(F,G,2,1);y[28]=0;z[28]=258;this.reset();e&&(t=e)};this.getHistory=function(){return q.history};this.setHistory=function(e){q.history=e};this.uncompress=
function(e,a){var f=q;f.source=e;f.sourceIndex=a;f.bitcount=0;f.destIndex=0;t||(t=r(f,16,0));e=0;do{var b=f;b.bitcount--||(b.tag=b.source[b.sourceIndex++]&255,b.bitcount=7);a=b.tag&1;b.tag>>=1;switch(r(f,2,0)){case 0:b=f;var c=b.source,k=b.history,g=b.dest,h=b.destIndex;7<b.bitcount&&(b.sourceIndex-=Math.floor(b.bitcount/8),b.bitcount=0,b.tag=0);var d=c[b.sourceIndex+1];d=256*d+c[b.sourceIndex];var l=c[b.sourceIndex+3];l=256*l+c[b.sourceIndex+2];if(d!=(~l&65535))b=p.DATA_ERROR;else{b.sourceIndex+=
4;for(l=d;l;--l)k.push(c[b.sourceIndex]),g[h++]=c[b.sourceIndex++];b.bitcount=0;b.destIndex=h;b=p.OK}break;case 1:b=D(f,w,x);break;case 2:var m;k=f;g=f.ltree;h=f.dtree;l=H;d=J;var v=r,M=C;c=v(k,5,257);b=v(k,5,1);var n=v(k,4,4);for(m=0;19>m;++m)d[m]=0;for(m=0;m<n;++m){var L=v(k,3,0);d[I[m]]=L}A(l,d,0,19);for(m=0;m<c+b;)switch(n=M(k,l),n){case 16:L=d[m-1];for(n=v(k,2,3);n;--n)d[m++]=L;break;case 17:for(n=v(k,3,3);n;--n)d[m++]=0;break;case 18:for(n=v(k,7,11);n;--n)d[m++]=0;break;default:d[m++]=n}A(g,
d,0,c);A(h,d,c,b);b=D(f,f.ltree,f.dtree);break;default:return f.status=p.DATA_ERROR,f}if(b!=p.OK)return f.status=p.DATA_ERROR,f;e++}while(!a&&f.sourceIndex<f.source.length);f.history=f.history.slice(-32768);f.status=p.OK;return f}};