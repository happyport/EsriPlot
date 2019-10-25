//>>built
define("dojox/sql/_crypto",["dojo","dijit","dojox"],function(l,A,q){l.provide("dojox.sql._crypto");l.mixin(q.sql._crypto,{_POOL_SIZE:100,encrypt:function(a,g,h){this._initWorkerPool();a={plaintext:a,password:g};a=l.toJson(a);a="encr:"+String(a);this._assignWork(a,h)},decrypt:function(a,g,h){this._initWorkerPool();a={ciphertext:a,password:g};a=l.toJson(a);a="decr:"+String(a);this._assignWork(a,h)},_initWorkerPool:function(){if(!this._manager)try{this._manager=google.gears.factory.create("beta.workerpool",
"1.0");this._unemployed=[];this._employed={};this._handleMessage=[];var a=this;this._manager.onmessage=function(h,g){var k=a._employed["_"+g];a._employed["_"+g]=void 0;a._unemployed.push("_"+g);a._handleMessage.length&&(g=a._handleMessage.shift(),a._assignWork(g.msg,g.callback));k(h)};for(var g="function _workerInit(){gearsWorkerPool.onmessage \x3d "+String(this._workerHandler)+";} _workerInit();",h=0;h<this._POOL_SIZE;h++)this._unemployed.push("_"+this._manager.createWorker(g))}catch(k){throw k.message||
k;}},_assignWork:function(a,g){if(!this._handleMessage.length&&this._unemployed.length){var h=this._unemployed.shift().substring(1);this._employed["_"+h]=g;this._manager.sendMessage(a,parseInt(h,10))}else this._handleMessage={msg:a,callback:g}},_workerHandler:function(a,g){function h(c,m){for(var b=m.length/4-1,e=[[],[],[],[]],d=0;16>d;d++)e[d%4][Math.floor(d/4)]=c[d];e=r(e,m,0,4);for(d=1;d<b;d++){e=k(e,4);e=l(e,4);for(c=0;4>c;c++){for(var f=Array(4),a=Array(4),g=0;4>g;g++)f[g]=e[g][c],a[g]=e[g][c]&
128?e[g][c]<<1^283:e[g][c]<<1;e[0][c]=a[0]^f[1]^a[1]^f[2]^f[3];e[1][c]=f[0]^a[1]^f[2]^a[2]^f[3];e[2][c]=f[0]^f[1]^a[2]^f[3]^a[3];e[3][c]=f[0]^a[0]^f[1]^f[2]^a[3]}e=r(e,m,d,4)}e=k(e,4);e=l(e,4);e=r(e,m,b,4);m=Array(16);for(d=0;16>d;d++)m[d]=e[d%4][Math.floor(d/4)];return m}function k(c,a){for(var b=0;4>b;b++)for(var e=0;e<a;e++)c[b][e]=t[c[b][e]];return c}function l(c,a){for(var b=Array(4),e=1;4>e;e++){for(var d=0;4>d;d++)b[d]=c[e][(d+e)%a];for(d=0;4>d;d++)c[e][d]=b[d]}return c}function r(c,a,b,e){for(var d=
0;4>d;d++)for(var f=0;f<e;f++)c[d][f]^=a[4*b+f][d];return c}function p(c){for(var a=c.length/4,b=a+6,e=Array(4*(b+1)),d=Array(4),f=0;f<a;f++)e[f]=[c[4*f],c[4*f+1],c[4*f+2],c[4*f+3]];for(f=a;f<4*(b+1);f++){e[f]=Array(4);for(c=0;4>c;c++)d[c]=e[f-1][c];if(0==f%a){d[4]=d[0];for(c=0;4>c;c++)d[c]=d[c+1];d=u(d);for(c=0;4>c;c++)d[c]^=x[f/a][c]}else 6<a&&4==f%a&&(d=u(d));for(c=0;4>c;c++)e[f][c]=e[f-a][c]^d[c]}return e}function u(c){for(var a=0;4>a;a++)c[a]=t[c[a]];return c}function q(c,a,b){if(128!=b&&192!=
b&&256!=b)return"";var e=b/8,d=Array(e);for(b=0;b<e;b++)d[b]=a.charCodeAt(b)&255;d=h(d,p(d));d=d.concat(d.slice(0,e-16));a=Array(16);e=(new Date).getTime();for(b=0;4>b;b++)a[b]=e>>>8*b&255;for(b=0;4>b;b++)a[b+4]=e/4294967296>>>8*b&255;for(var d=p(d),f=Math.ceil(c.length/16),e=Array(f),g=0;g<f;g++){for(b=0;4>b;b++)a[15-b]=g>>>8*b&255;for(b=0;4>b;b++)a[15-b-4]=g/4294967296>>>8*b;var m=h(a,d),l=g<f-1?16:(c.length-1)%16+1,k="";for(b=0;b<l;b++)var n=c.charCodeAt(16*g+b)^m[b],k=k+String.fromCharCode(n);
e[g]=v(k)}c="";for(b=0;8>b;b++)c+=String.fromCharCode(a[b]);c=v(c);return c+"-"+e.join("-")}function y(a,g,b){if(128!=b&&192!=b&&256!=b)return"";var c=b/8,d=Array(c);for(b=0;b<c;b++)d[b]=g.charCodeAt(b)&255;b=p(d);b=h(d,b);b=b.concat(b.slice(0,c-16));c=p(b);a=a.split("-");g=Array(16);d=w(a[0]);for(b=0;8>b;b++)g[b]=d.charCodeAt(b);for(var d=Array(a.length-1),f=1;f<a.length;f++){for(b=0;4>b;b++)g[15-b]=f-1>>>8*b&255;for(b=0;4>b;b++)g[15-b-4]=f/4294967296-1>>>8*b&255;var m=h(g,c);a[f]=w(a[f]);var k=
"";for(b=0;b<a[f].length;b++)var l=a[f].charCodeAt(b)^m[b],k=k+String.fromCharCode(l);d[f-1]=k}return d.join("")}function v(a){return a.replace(/[\0\t\n\v\f\r\xa0!-]/g,function(a){return"!"+a.charCodeAt(0)+"!"})}function w(a){return a.replace(/!\d\d?\d?!/g,function(a){return String.fromCharCode(a.slice(1,-1))})}var t=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,
199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,
186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x=[[0,0,0,0],[1,0,0,0],[2,0,0,0],[4,0,0,0],[8,0,0,0],[16,0,0,0],[32,0,0,0],[64,0,0,0],[128,0,0,0],[27,0,0,0],[54,0,0,0]],n=a.substr(0,4);a=a.substr(5);if("encr"==n)a=eval("("+a+")"),n=a.password,a=q(a.plaintext,n,256),gearsWorkerPool.sendMessage(String(a),g);else if("decr"==
n){a=eval("("+a+")");var z=a.ciphertext,n=a.password;a=y(z,n,256);gearsWorkerPool.sendMessage(String(a),g)}}})});