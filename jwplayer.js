if(typeof jwplayer=="undefined"){jwplayer=function(a){if(jwplayer.api){return jwplayer.api.selectPlayer(a)}};jwplayer.version="6.0.2605";jwplayer.vid=document.createElement("video");jwplayer.audio=document.createElement("audio");jwplayer.source=document.createElement("source");(function(d){var j=document,g=window,b=navigator,h="undefined",f="string",c="object";var k=d.utils=function(){};k.exists=function(l){switch(typeof(l)){case f:return(l.length>0);break;case c:return(l!==null);case h:return false}return true};k.styleDimension=function(l){return l+(l.toString().indexOf("%")>0?"":"px")};k.getAbsolutePath=function(r,q){if(!k.exists(q)){q=j.location.href}if(!k.exists(r)){return undefined}if(a(r)){return r}var s=q.substring(0,q.indexOf("://")+3);var p=q.substring(s.length,q.indexOf("/",s.length+1));var m;if(r.indexOf("/")===0){m=r.split("/")}else{var n=q.split("?")[0];n=n.substring(s.length+p.length+1,n.lastIndexOf("/"));m=n.split("/").concat(r.split("/"))}var l=[];for(var o=0;o<m.length;o++){if(!m[o]||!k.exists(m[o])||m[o]=="."){continue}else{if(m[o]==".."){l.pop()}else{l.push(m[o])}}}return s+p+"/"+l.join("/")};function a(m){if(!k.exists(m)){return}var n=m.indexOf("://");var l=m.indexOf("?");return(n>0&&(l<0||(l>n)))}k.extend=function(){var l=k.extend["arguments"];if(l.length>1){for(var n=1;n<l.length;n++){for(var m in l[n]){try{if(k.exists(l[n][m])){l[0][m]=l[n][m]}}catch(o){}}}return l[0]}return null};k.log=function(m,l){if(typeof console!=h&&typeof console.log!=h){if(l){console.log(m,l)}else{console.log(m)}}};var e=k.userAgentMatch=function(m){var l=b.userAgent.toLowerCase();return(l.match(m)!==null)};k.isIE=function(){return e(/msie/i)};k.isMobile=function(){return k.isIOS()||k.isAndroid()};k.isAndroid=function(){return e(/android/i)};k.isIOS=function(){return e(/iP(hone|ad|od)/i)};k.isIPod=function(){return e(/iP(hone|od)/i)};k.isIPad=function(){return e(/iPad/i)};k.saveCookie=function(l,m){j.cookie="jwplayer."+l+"="+m+"; path=/"};k.getCookies=function(){var o={};var n=j.cookie.split("; ");for(var m=0;m<n.length;m++){var l=n[m].split("=");if(l[0].indexOf("jwplayer.")==0){o[l[0].substring(9,l[0].length)]=l[1]}}return o};k.typeOf=function(m){var l=typeof m;if(l==="object"){if(!m){return"null"}return(m instanceof Array)?"array":l}else{return l}};k.translateEventResponse=function(n,l){var p=k.extend({},l);if(n==d.events.JWPLAYER_FULLSCREEN&&!p.fullscreen){p.fullscreen=p.message=="true"?true:false;delete p.message}else{if(typeof p.data==c){p=k.extend(p,p.data);delete p.data}else{if(typeof p.metadata==c){k.deepReplaceKeyName(p.metadata,["__dot__","__spc__","__dsh__"],["."," ","-"])}}}var m=["position","duration","offset"];for(var o in m){if(p[m[o]]){p[m[o]]=Math.round(p[m[o]]*1000)/1000}}return p};k.flashVersion=function(){var l=b.plugins,m;if(l!=h){m=l["Shockwave Flash"];if(m){return parseInt(m.description.replace(/\D+(\d+)\..*/,"$1"))}}if(typeof g.ActiveXObject!=h){try{m=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if(m){return parseInt(m.GetVariable("$version").split(" ")[1].split(",")[0])}}catch(n){}}return 0};k.getScriptPath=function(n){var l=j.getElementsByTagName("script");for(var m=0;m<l.length;m++){var o=l[m].src;if(o&&o.indexOf(n)>=0){return o.substr(0,o.indexOf(n))}}return""};k.deepReplaceKeyName=function(s,n,l){switch(d.utils.typeOf(s)){case"array":for(var p=0;p<s.length;p++){s[p]=d.utils.deepReplaceKeyName(s[p],n,l)}break;case c:for(var o in s){var r,q;if(n instanceof Array&&l instanceof Array){if(n.length!=l.length){continue}else{r=n;q=l}}else{r=[n];q=[l]}var m=o;for(var p=0;p<r.length;p++){m=m.replace(new RegExp(n[p],"g"),l[p])}s[m]=d.utils.deepReplaceKeyName(s[o],n,l);if(o!=m){delete s[o]}}break}return s};var i=k.pluginPathType={ABSOLUTE:0,RELATIVE:1,CDN:2};k.getPluginPathType=function(m){if(typeof m!=f){return}m=m.split("?")[0];var n=m.indexOf("://");if(n>0){return i.ABSOLUTE}var l=m.indexOf("/");var o=k.extension(m);if(n<0&&l<0&&(!o||!isNaN(o))){return i.CDN}return i.RELATIVE};k.getPluginName=function(l){return l.replace(/^.*\/([^-]*)-?.*\.(swf|js)$/,"$1")};k.getPluginVersion=function(l){return l.replace(/[^-]*-?([^\.]*).*$/,"$1")};k.isYouTube=function(l){return(l.indexOf("youtube.com")>-1||l.indexOf("youtu.be")>-1)};k.isRtmp=function(l,m){return(l.indexOf("rtmp")==0||m=="rtmp")};k.foreach=function(n,m){for(var l in n){if(n.hasOwnProperty(l)){m(l)}}}})(jwplayer);(function(n){var d="video/",i="audio/",g="image",j="mp4",c="webm",b="aac",k="mp3",l="vorbis",m={mp4:d+j,vorbis:i+"ogg",webm:d+c,aac:i+j,mp3:i+k,hls:"application/vnd.apple.mpegurl"},h={mp4:m[j],f4v:m[j],m4v:m[j],mov:m[j],m4a:m[b],f4a:m[b],aac:m[b],mp3:m[k],ogg:m[l],oga:m[l],webm:m[c],m3u8:m.hls,},d="video",f={flv:d,f4v:d,mov:d,m4a:d,m4v:d,mp4:d,aac:d,mp3:"sound",smil:"rtmp",m3u8:"hls"};var a=n.extensionmap={};for(var e in h){a[e]={html5:h[e]}}for(e in f){if(!a[e]){a[e]={}}a[e].flash=f[e]}a.types=m;a.mimeType=function(p){for(var o in m){if(m[o]==p){return o}}};a.extType=function(o){return a.mimeType(h[o])}})(jwplayer.utils);(function(b){var a=b.loaderstatus={NEW:0,LOADING:1,ERROR:2,COMPLETE:3},c=document;b.scriptloader=function(e){var f=a.NEW,h=jwplayer.events,d=new h.eventdispatcher();b.extend(this,d);this.load=function(){var k=b.scriptloader.loaders[e];if(k&&(k.getStatus()==a.NEW||k.getStatus()==a.LOADING)){k.addEventListener(h.ERROR,g);k.addEventListener(h.COMPLETE,i);return}b.scriptloader.loaders[e]=this;if(f==a.NEW){f=a.LOADING;var j=c.createElement("script");j.onload=i;j.onerror=g;j.onreadystatechange=function(){if(j.readyState=="loaded"||j.readyState=="complete"){i()}};c.getElementsByTagName("head")[0].appendChild(j);j.src=e}};function g(j){f=a.ERROR;d.sendEvent(h.ERROR)}function i(j){f=a.COMPLETE;d.sendEvent(h.COMPLETE)}this.getStatus=function(){return f}};b.scriptloader.loaders={}})(jwplayer.utils);(function(a){a.trim=function(b){return b.replace(/^\s*/,"").replace(/\s*$/,"")};a.pad=function(c,d,b){if(!b){b="0"}while(c.length<d){c=b+c}return c};a.seconds=function(d){d=d.replace(",",".");var b=d.split(":");var c=0;if(d.substr(-1)=="s"){c=Number(d.substr(0,d.length-1))}else{if(d.substr(-1)=="m"){c=Number(d.substr(0,d.length-1))*60}else{if(d.substr(-1)=="h"){c=Number(d.substr(0,d.length-1))*3600}else{if(b.length>1){c=Number(b[b.length-1]);c+=Number(b[b.length-2])*60;if(b.length==3){c+=Number(b[b.length-3])*3600}}else{c=Number(d)}}}}return c};a.xmlAttribute=function(b,c){for(var d=0;d<b.attributes.length;d++){if(b.attributes[d].name&&b.attributes[d].name.toLowerCase()==c.toLowerCase()){return b.attributes[d].value.toString()}}return""};a.jsonToString=function(f){var h=h||{};if(h&&h.stringify){return h.stringify(f)}var c=typeof(f);if(c!="object"||f===null){if(c=="string"){f='"'+f.replace(/"/g,'\\"')+'"'}else{return String(f)}}else{var g=[],b=(f&&f.constructor==Array);for(var d in f){var e=f[d];switch(typeof(e)){case"string":e='"'+e.replace(/"/g,'\\"')+'"';break;case"object":if(a.exists(e)){e=a.jsonToString(e)}break}if(b){if(typeof(e)!="function"){g.push(String(e))}}else{if(typeof(e)!="function"){g.push('"'+d+'":'+String(e))}}}if(b){return"["+String(g)+"]"}else{return"{"+String(g)+"}"}}};a.extension=function(b){if(!b||b.substr(0,4)=="rtmp"){return""}b=b.substring(b.lastIndexOf("/")+1,b.length).split("?")[0].split("#")[0];if(b.lastIndexOf(".")>-1){return b.substr(b.lastIndexOf(".")+1,b.length).toLowerCase()}};a.stringToColor=function(b){b=b.replace(/(#|0x)?([0-9A-F]{3,6})$/gi,"$2");if(b.length==3){b=b.charAt(0)+b.charAt(0)+b.charAt(1)+b.charAt(1)+b.charAt(2)+b.charAt(2)}return parseInt(b,16)}})(jwplayer.utils);(function(a){a.events={COMPLETE:"COMPLETE",ERROR:"ERROR",API_READY:"jwplayerAPIReady",JWPLAYER_READY:"jwplayerReady",JWPLAYER_FULLSCREEN:"jwplayerFullscreen",JWPLAYER_RESIZE:"jwplayerResize",JWPLAYER_ERROR:"jwplayerError",JWPLAYER_MEDIA_BEFOREPLAY:"jwplayerMediaBeforePlay",JWPLAYER_MEDIA_BEFORECOMPLETE:"jwplayerMediaBeforeComplete",JWPLAYER_COMPONENT_SHOW:"jwplayerComponentShow",JWPLAYER_COMPONENT_HIDE:"jwplayerComponentHide",JWPLAYER_MEDIA_BUFFER:"jwplayerMediaBuffer",JWPLAYER_MEDIA_BUFFER_FULL:"jwplayerMediaBufferFull",JWPLAYER_MEDIA_ERROR:"jwplayerMediaError",JWPLAYER_MEDIA_LOADED:"jwplayerMediaLoaded",JWPLAYER_MEDIA_COMPLETE:"jwplayerMediaComplete",JWPLAYER_MEDIA_SEEK:"jwplayerMediaSeek",JWPLAYER_MEDIA_TIME:"jwplayerMediaTime",JWPLAYER_MEDIA_VOLUME:"jwplayerMediaVolume",JWPLAYER_MEDIA_META:"jwplayerMediaMeta",JWPLAYER_MEDIA_MUTE:"jwplayerMediaMute",JWPLAYER_MEDIA_LEVELS:"jwplayerMediaLevels",JWPLAYER_MEDIA_LEVEL_CHANGED:"jwplayerMediaLevelChanged",JWPLAYER_CAPTIONS_CHANGED:"jwplayerCaptionsChanged",JWPLAYER_CAPTIONS_LIST:"jwplayerCaptionsList",JWPLAYER_PLAYER_STATE:"jwplayerPlayerState",state:{BUFFERING:"BUFFERING",IDLE:"IDLE",PAUSED:"PAUSED",PLAYING:"PLAYING"},JWPLAYER_PLAYLIST_LOADED:"jwplayerPlaylistLoaded",JWPLAYER_PLAYLIST_ITEM:"jwplayerPlaylistItem",JWPLAYER_PLAYLIST_COMPLETE:"jwplayerPlaylistComplete",JWPLAYER_DISPLAY_CLICK:"jwplayerViewClick",JWPLAYER_CONTROLS:"jwplayerViewControls",JWPLAYER_INSTREAM_CLICK:"jwplayerInstreamClicked",JWPLAYER_INSTREAM_DESTROYED:"jwplayerInstreamDestroyed"}})(jwplayer);(function(a){var b=jwplayer.utils;a.eventdispatcher=function(h,c){var e=h,g=c,f,d;this.resetEventListeners=function(){f={};d=[]};this.resetEventListeners();this.addEventListener=function(i,l,k){try{if(!b.exists(f[i])){f[i]=[]}if(b.typeOf(l)=="string"){l=(new Function("return "+l))()}f[i].push({listener:l,count:k})}catch(j){b.log("error",j)}return false};this.removeEventListener=function(j,l){if(!f[j]){return}try{for(var i=0;i<f[j].length;i++){if(f[j][i].listener.toString()==l.toString()){f[j].splice(i,1);break}}}catch(k){b.log("error",k)}return false};this.addGlobalListener=function(k,j){try{if(b.typeOf(k)=="string"){k=(new Function("return "+k))()}d.push({listener:k,count:j})}catch(i){b.log("error",i)}return false};this.removeGlobalListener=function(k){if(!k){return}try{for(var i=0;i<d.length;i++){if(d[i].listener.toString()==k.toString()){d.splice(i,1);break}}}catch(j){b.log("error",j)}return false};this.sendEvent=function(k,m){if(!b.exists(m)){m={}}b.extend(m,{id:e,version:jwplayer.version,type:k});if(g){b.log(k,m)}if(b.typeOf(f[k])!="undefined"){for(var j=0;j<f[k].length;j++){try{f[k][j].listener(m)}catch(l){b.log("There was an error while handling a listener: "+l.toString(),f[k][j].listener)}if(f[k][j]){if(f[k][j].count===1){delete f[k][j]}else{if(f[k][j].count>0){f[k][j].count=f[k][j].count-1}}}}}var i;for(i=0;i<d.length;i++){try{d[i].listener(m)}catch(l){b.log("There was an error while handling a listener: "+l.toString(),d[i].listener)}if(d[i]){if(d[i].count===1){delete d[i]}else{if(d[i].count>0){d[i].count=d[i].count-1}}}}}}})(jwplayer.events);(function(a){var c={};var b={};a.plugins=function(){};a.plugins.loadPlugins=function(e,d){b[e]=new a.plugins.pluginloader(new a.plugins.model(c),d);return b[e]};a.plugins.registerPlugin=function(h,g,f,e){var d=a.utils.getPluginName(h);if(!c[d]){c[d]=new a.plugins.plugin(h)}c[d].registerPlugin(h,g,f,e)}})(jwplayer);(function(a){a.plugins.model=function(b){this.addPlugin=function(c){var d=a.utils.getPluginName(c);if(!b[d]){b[d]=new a.plugins.plugin(c)}return b[d]};this.getPlugins=function(){return b}}})(jwplayer);(function(b){var a=jwplayer.utils,c=jwplayer.events,d="undefined";b.pluginmodes={FLASH:0,JAVASCRIPT:1,HYBRID:2};b.plugin=function(e){var l=a.loaderstatus.NEW,m,k,f,n;var g=new c.eventdispatcher();a.extend(this,g);function h(){switch(a.getPluginPathType(e)){case a.pluginPathType.ABSOLUTE:return e;case a.pluginPathType.RELATIVE:return a.getAbsolutePath(e,window.location.href)}}function j(o){n=setTimeout(function(){l=a.loaderstatus.COMPLETE;g.sendEvent(c.COMPLETE)},1000)}function i(o){l=a.loaderstatus.ERROR;g.sendEvent(c.ERROR)}this.load=function(){if(l==a.loaderstatus.NEW){if(e.lastIndexOf(".swf")>0){m=e;l=a.loaderstatus.COMPLETE;g.sendEvent(c.COMPLETE);return}else{if(a.getPluginPathType(e)==a.pluginPathType.CDN){l=a.loaderstatus.COMPLETE;g.sendEvent(c.COMPLETE);return}}l=a.loaderstatus.LOADING;var o=new a.scriptloader(h());o.addEventListener(c.COMPLETE,j);o.addEventListener(c.ERROR,i);o.load()}};this.registerPlugin=function(r,q,p,o){if(n){clearTimeout(n);n=undefined}f=q;if(p&&o){m=o;k=p}else{if(typeof p=="string"){m=p}else{if(typeof p=="function"){k=p}else{if(!p&&!o){m=r}}}}l=a.loaderstatus.COMPLETE;g.sendEvent(c.COMPLETE)};this.getStatus=function(){return l};this.getPluginName=function(){return a.getPluginName(e)};this.getFlashPath=function(){if(m){switch(a.getPluginPathType(m)){case a.pluginPathType.ABSOLUTE:return m;case a.pluginPathType.RELATIVE:if(e.lastIndexOf(".swf")>0){return a.getAbsolutePath(m,window.location.href)}return a.getAbsolutePath(m,h())}}return null};this.getJS=function(){return k};this.getTarget=function(){return f};this.getPluginmode=function(){if(typeof m!=d&&typeof k!=d){return b.pluginmodes.HYBRID}else{if(typeof m!=d){return b.pluginmodes.FLASH}else{if(typeof k!=d){return b.pluginmodes.JAVASCRIPT}}}};this.getNewInstance=function(p,o,q){return new k(p,o,q)};this.getURL=function(){return e}}})(jwplayer.plugins);(function(b){var a=b.utils,c=b.events;b.plugins.pluginloader=function(i,h){var n=a.loaderstatus.NEW,g=false,d=false,k=false,l,e=new c.eventdispatcher();a.extend(this,e);function f(){if(k){e.sendEvent(c.ERROR,{message:l})}else{if(!d){d=true;n=a.loaderstatus.COMPLETE;e.sendEvent(c.COMPLETE)}}}function m(){if(!d&&!k){var q=0,p=i.getPlugins();for(var r in p){var t=p[r],s=t.getTarget(),o=p[r].getStatus();if(o==a.loaderstatus.LOADING||o==a.loaderstatus.NEW){q++}else{if(!s||parseFloat(s)>parseFloat(b.version)){k=true;l="Incompatible player version";f()}}}if(q==0){f()}}}this.setupPlugins=function(v,r,x){var q={length:0,plugins:{}},t={length:0,plugins:{}},s=i.getPlugins();for(var u in s){var y=s[u],w=y.getPluginName(),z=y.getFlashPath(),A=y.getJS(),o=y.getURL();if(z){q.plugins[z]=a.extend({},r.plugins[o]);q.plugins[z].pluginmode=y.getPluginmode();q.length++}if(A&&r.plugins&&r.plugins[o]){var p=document.createElement("div");p.id=v.id+"_"+w;p.style.position="absolute";p.style.zIndex=t.length+10;t.plugins[w]=y.getNewInstance(v,a.extend({},r.plugins[o]),p);t.length++;v.onReady(x(t.plugins[w],p,true));v.onResize(x(t.plugins[w],p))}}v.plugins=t.plugins;return q};this.load=function(){if(a.exists(h)&&a.typeOf(h)!="object"){m();return}n=a.loaderstatus.LOADING;g=true;for(var p in h){if(a.exists(p)){var q=i.addPlugin(p);q.addEventListener(c.COMPLETE,m);q.addEventListener(c.ERROR,j)}}var o=i.getPlugins();for(p in o){o[p].load()}g=false;m()};var j=this.pluginFailed=function(o){if(!k){k=true;l="File not found";f()}};this.getStatus=function(){return n}}})(jwplayer);(function(a){a.playlist=function(c){var d=[];if(a.utils.typeOf(c)=="array"){for(var b=0;b<c.length;b++){d.push(new a.playlist.item(c[b]))}}else{d.push(new a.playlist.item(c))}return d}})(jwplayer);(function(b){var a=b.item=function(d){var c=jwplayer.utils.extend({},a.defaults,d);if(c.sources.length==0){c.sources=[new b.source(c)]}for(var e=0;e<c.sources.length;e++){c.sources[e]=new b.source(c.sources[e])}return c};a.defaults={description:"",image:"",mediaid:"",title:"",tags:"",duration:-1,sources:[]}})(jwplayer.playlist);(function(d){var b=undefined,a=jwplayer.utils,c={file:b,label:b,bitrate:b,width:b,height:b,type:b};d.source=function(f){var e=a.extend({},c);for(var g in c){if(a.exists(f[g])){e[g]=f[g];delete f[g]}}if(e.type&&e.type.indexOf("/")>0){e.type=a.extensionmap.mimeType(e.type)}return e}})(jwplayer.playlist);(function(b){var a=b.utils,c=b.events;var d=b.embed=function(o){var l=new d.config(o.config),h,j="Error loading player: ",g=b.plugins.loadPlugins(o.id,l.plugins);l.id=o.id;h=document.getElementById(o.id);function i(r,q){for(var p in q){if(typeof r[p]=="function"){(r[p]).call(r,q[p])}}}function e(){if(a.typeOf(l.playlist)=="array"&&l.playlist.length<2){if(l.playlist.length==0||!l.playlist[0].sources||l.playlist[0].sources.length==0){m();return}}if(g.getStatus()==a.loaderstatus.COMPLETE){for(var r=0;r<l.modes.length;r++){if(l.modes[r].type&&d[l.modes[r].type]){var s=l.modes[r].config;var p=a.extend({},s?d.config.addConfig(l,s):l);var q=new d[l.modes[r].type](h,l.modes[r],p,g,o);if(q.supportsConfig()){q.addEventListener(c.ERROR,f);q.embed();i(o,p.events);return o}}}if(l.fallback){a.log("No suitable players found and fallback enabled");new d.download(h,l,m)}else{a.log("No suitable players found and fallback disabled")}}}function f(p){n(h,j+p.message)}function k(p){n(h,"Could not load plugins: "+p.message)}function m(){n(h,j+"No media sources found")}function n(p,r){if(!l.fallback){return}var q=p.style;q.backgroundColor="#000";q.color="#FFF";q.width=a.styleDimension(l.width);q.height=a.styleDimension(l.height);q.display="table";var t=document.createElement("p"),s=t.style;s.verticalAlign="middle";s.textAlign="center";s.display="table-cell";s.font="15px/20px Arial, Helvetica, sans-serif";t.innerHTML=r.replace(":",":<br>");p.innerHTML="";p.appendChild(t)}b.embed.errorScreen=n;g.addEventListener(c.COMPLETE,e);g.addEventListener(c.ERROR,k);g.load();return o}})(jwplayer);(function(d){var a=d.utils,h=d.embed,b=d.playlist.item,f=undefined;var c=h.config=function(j){function m(q,p,o){for(var n=0;n<q.length;n++){var r=q[n].type;if(!q[n].src){q[n].src=o[r]?o[r]:p+"jwplayer."+r+(r=="flash"?".swf":".js")}}}var l={fallback:true,height:270,primary:"html5",width:480,base:f},i={html5:{type:"html5"},flash:{type:"flash"}},k=a.extend(l,j);if(!k.base){k.base=a.getScriptPath("jwplayer.js")}if(!k.modes){k.modes=(k.primary=="flash")?[i.flash,i.html5]:[i.html5,i.flash]}if(k.listbar){k.playlistsize=k.listbar.size;k.playlistposition=k.listbar.position}m(k.modes,k.base,{html5:k.html5player,flash:k.flashplayer});e(k);return k};c.addConfig=function(i,j){e(j);return a.extend(i,j)};function e(l){if(!l.playlist){var n={};for(var k in b.defaults){g(l,n,k)}if(!n.sources){if(l.levels){n.sources=l.levels;delete l.levels}else{var j={};g(l,j,"file");g(l,j,"type");n.sources=j.file?[j]:[]}}l.playlist=[n]}else{for(var m=0;m<l.playlist.length;m++){l.playlist[m]=new b(l.playlist[m])}}}function g(k,i,j){if(a.exists(k[j])){i[j]=k[j];delete k[j]}}})(jwplayer);(function(e){var g=e.embed,j=e.utils,i=document,h="pointer",c="none",a="block",f="100%",d="relative",b="absolute";g.download=function(n,y,l){var q=j.extend({},y),u,o=q.width?q.width:480,r=q.height?q.height:320,z,s,k=y.logo?y.logo:{prefix:"http://l.longtailvideo.com/download/",file:"logo.png",margin:10};function x(){var E,F,D,G,C=q.playlist,I,B;if(C&&C.length){I=C[0];B=I.sources;for(G=0;G<B.length;G++){var A=B[G],H=A.type?A.type:j.extensionmap.extType(j.extension(A.file));if(A.file){if(("mp4,flv,webm,aac,mp3,vorbis").split(",").indexOf(H)>-1){E=A.file;F=I.image;continue}else{if(j.isYouTube(A.file)){D=A.file}}}}}else{return}if(E){z=E;s=F;if(k.prefix){k.prefix+=e.version.split(/\W/).splice(0,2).join("/")+"/"}t();p()}else{if(D){m(D)}else{l()}}}function t(){if(n){u=v("a","display",n);v("div","icon",u);v("div","logo",u);if(z){u.setAttribute("href",j.getAbsolutePath(z))}}}function w(A,C){var D=i.querySelectorAll(A);for(var B=0;B<D.length;B++){for(var E in C){D[B].style[E]=C[E]}}}function p(){var A="#"+n.id+" .jwdownload";w(A+"display",{width:j.styleDimension(Math.max(300,o)),height:j.styleDimension(Math.max(200,r)),background:"black center no-repeat "+(s?"url("+s+")":""),backgroundSize:"contain",position:d,border:c,display:a});w(A+"display div",{position:b,width:f,height:f});w(A+"logo",{top:k.margin+"px",right:k.margin+"px",background:"top right no-repeat url("+k.prefix+k.file+")"});w(A+"icon",{background:"center no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAgNJREFUeNrs28lqwkAYB/CZqNVDDj2r6FN41QeIy8Fe+gj6BL275Q08u9FbT8ZdwVfotSBYEPUkxFOoks4EKiJdaDuTjMn3wWBO0V/+sySR8SNSqVRKIR8qaXHkzlqS9jCfzzWcTCYp9hF5o+59sVjsiRzcegSckFzcjT+ruN80TeSlAjCAAXzdJSGPFXRpAAMYwACGZQkSdhG4WCzehMNhqV6vG6vVSrirKVEw66YoSqDb7cqlUilE8JjHd/y1MQefVzqdDmiaJpfLZWHgXMHn8F6vJ1cqlVAkEsGuAn83J4gAd2RZymQygX6/L1erVQt+9ZPWb+CDwcCC2zXGJaewl/DhcHhK3DVj+KfKZrMWvFarcYNLomAv4aPRSFZVlTlcSPA5fDweW/BoNIqFnKV53JvncjkLns/n/cLdS+92O7RYLLgsKfv9/t8XlDn4eDyiw+HA9Jyz2eyt0+kY2+3WFC5hluej0Ha7zQQq9PPwdDq1Et1sNsx/nFBgCqWJ8oAK1aUptNVqcYWewE4nahfU0YQnk4ntUEfGMIU2m01HoLaCKbTRaDgKtaVLk9tBYaBcE/6Artdr4RZ5TB6/dC+9iIe/WgAMYADDpAUJAxjAAAYwgGFZgoS/AtNNTF7Z2bL0BYPBV3Jw5xFwwWcYxgtBP5OkE8i9G7aWGOOCruvauwADALMLMEbKf4SdAAAAAElFTkSuQmCC)"})}function v(A,D,C){var B=i.createElement(A);if(D){B.className="jwdownload"+D}if(C){C.appendChild(B)}return B}function m(A){var B=v("embed","",n);B.src="http://www.youtube.com/v/"+(/v[=\/](\w*)|\/(\w+)$|^(\w+)$/i).exec(A).slice(1).join("");B.type="application/x-shockwave-flash";B.width=o;B.height=r}x()}})(jwplayer);(function(c){var b=c.utils,d=c.events,a={};var e=c.embed.flash=function(l,m,q,k,o){var h=new c.events.eventdispatcher(),i=b.flashVersion();b.extend(this,h);function r(t,s,u){var v=document.createElement("param");v.setAttribute("name",s);v.setAttribute("value",u);t.appendChild(v)}function p(t,u,s){return function(v){try{if(s){document.getElementById(o.id+"_wrapper").appendChild(u)}var x=document.getElementById(o.id).getPluginConfig("display");if(typeof t.resize=="function"){t.resize(x.width,x.height)}u.style.left=x.x;u.style.top=x.h}catch(w){}}}function j(u){if(!u){return{}}var w={};for(var t in u){var s=u[t];for(var v in s){w[t+"."+v]=s[v]}}return w}function g(v){if(!v){return{}}var y={},x=[];for(var s in v){var u=b.getPluginName(s);var t=v[s];x.push(s);for(var w in t){y[u+"."+w]=t[w]}}y.plugins=x.join(",");return y}function n(u){var s={};for(var t in u){if(typeof(u[t])=="object"){s[t]="[[JSON]]"+b.jsonToString(u[t])}else{s[t]=u[t]}}return s}this.embed=function(){q.id=o.id;if(i<10){h.sendEvent(d.ERROR,{message:"Flash version must be 10.0 or greater"});return false}var D;var x=b.extend({},q);if(l.id+"_wrapper"==l.parentNode.id){D=document.getElementById(l.id+"_wrapper")}else{D=document.createElement("div");D.id=l.id+"_wrapper";D.style.position="relative";D.style.width=b.styleDimension(x.width);D.style.height=b.styleDimension(x.height);l.parentNode.replaceChild(D,l);D.appendChild(l)}var t=k.setupPlugins(o,x,p);if(t.length>0){b.extend(x,g(t.plugins))}else{delete x.plugins}if(typeof x["dock.position"]!="undefined"){if(x["dock.position"].toString().toLowerCase()=="false"){x.dock=x["dock.position"];delete x["dock.position"]}}var C=b.getCookies();for(var u in C){if(typeof(x[u])=="undefined"){x[u]=C[u]}}var E="#000000",A,v=x.wmode?x.wmode:(x.height&&x.height<=40?"transparent":"opaque"),w=["height","width","modes","events","primary","base","fallback"];for(var z=0;z<w.length;z++){delete x[w[z]]}var s=window.location.pathname.split("/");s.splice(-1);s=s.join("/");x.base=s+"/";a[l.id]=n(x);if(b.isIE()){var B='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" bgcolor="'+E+'" width="100%" height="100%" id="'+l.id+'" name="'+l.id+'" tabindex=0"">';B+='<param name="movie" value="'+m.src+'">';B+='<param name="allowfullscreen" value="true">';B+='<param name="allowscriptaccess" value="always">';B+='<param name="seamlesstabbing" value="true">';B+='<param name="wmode" value="'+v+'">';B+="</object>";l.outerHTML=B;A=document.getElementById(l.id)}else{var y=document.createElement("object");y.setAttribute("type","application/x-shockwave-flash");y.setAttribute("data",m.src);y.setAttribute("width","100%");y.setAttribute("height","100%");y.setAttribute("bgcolor","#000000");y.setAttribute("id",l.id);y.setAttribute("name",l.id);y.setAttribute("tabindex",0);r(y,"allowfullscreen","true");r(y,"allowscriptaccess","always");r(y,"seamlesstabbing","true");r(y,"wmode",v);l.parentNode.replaceChild(y,l);A=y}o.container=A;o.setPlayer(A,"flash")};this.supportsConfig=function(){if(i){if(q){try{var u=q.playlist[0],s=u.sources;if(typeof s=="undefined"){return true}else{for(var t=0;t<s.length;t++){if(s[t].file&&f(s[t].file,s[t].type)){return true}}}}catch(v){return false}}else{return true}}return false};function f(s,t){if(b.isYouTube(s)){return true}if(b.isRtmp(s,t)){return true}if(t=="hls"){return true}var u=b.extensionmap[t?t:b.extension(s)];if(!u){return false}return !!(u.flash)}};e.getVars=function(f){return a[f]}})(jwplayer);(function(c){var a=c.utils,b=a.extensionmap,d=c.events;c.embed.html5=function(g,h,o,f,k){var j=this,e=new d.eventdispatcher();a.extend(j,e);function l(q,r,p){return function(s){try{var t=document.querySelector("#"+g.id+" .jwmain");if(p){t.appendChild(r)}if(typeof q.resize=="function"){q.resize(t.clientWidth,t.clientHeight)}r.left=t.style.left;r.top=t.style.top}catch(u){}}}j.embed=function(){if(c.html5){f.setupPlugins(k,o,l);g.innerHTML="";var p=c.utils.extend({},o);if(p.skin&&p.skin.toLowerCase().indexOf(".zip")>0){p.skin=p.skin.replace(/\.zip/i,".xml")}var q=new c.html5.player(p);k.container=document.getElementById(k.id);k.setPlayer(q,"html5")}else{var r=new a.scriptloader(h.src);r.addEventListener(d.ERROR,i);r.addEventListener(d.COMPLETE,j.embed);r.load()}};function i(p){j.sendEvent(p.type,{message:"HTML5 player not found"})}j.supportsConfig=function(){if(!!c.vid.canPlayType){try{if(a.typeOf(o.playlist)=="string"){return true}else{var p=o.playlist[0].sources;for(var r=0;r<p.length;r++){var q=p[r].file,s=p[r].type;if(n(q,s)){return true}}}}catch(t){return false}}return false};function n(p,q){if(navigator.userAgent.match(/BlackBerry/i)!==null){return false}if(a.isRtmp(p,q)){return false}var r=b[q?q:a.extension(p)];if(!r){return false}if(r.flash&&!r.html5){return false}return m(r.html5)}function m(p){var q=c.vid;if(!p){return true}try{if(q.canPlayType(p)){return true}else{if(p=="audio/mp3"&&navigator.userAgent.match(/safari/i)){return q.canPlayType("audio/mpeg")}else{return false}}}catch(r){return false}}}})(jwplayer);(function(d){var c=[],a=d.utils,e=d.events,b=e.state;var f=d.api=function(s){var w=this,g={},k={},z={},n=[],h=undefined,C=false,o=[],x=undefined,r={},m={};w.container=s;w.id=s.id;w.getBuffer=function(){return v("jwGetBuffer")};w.getContainer=function(){return w.container};w.addButton=function(G,E,F,J){try{m[J]=F;var I="jwplayer('"+w.id+"').callback('"+J+"')";v("jwDockAddButton",G,E,I,J)}catch(H){a.log("Could not add dock button"+H.message)}};w.removeButton=function(E){v("jwDockRemoveButton",E)},w.callback=function(E){if(m[E]){m[E]()}};w.getDuration=function(){return v("jwGetDuration")};w.getFullscreen=function(){return v("jwGetFullscreen")};w.getStretching=function(){return v("jwGetStretching")};w.getHeight=function(){return v("jwGetHeight")};w.getLockState=function(){return v("jwGetLockState")};w.getMeta=function(){return w.getItemMeta()};w.getMute=function(){return v("jwGetMute")};w.getPlaylist=function(){var F=v("jwGetPlaylist");if(w.renderingMode=="flash"){a.deepReplaceKeyName(F,["__dot__","__spc__","__dsh__"],["."," ","-"])}for(var E=0;E<F.length;E++){if(!a.exists(F[E].index)){F[E].index=E}}return F};w.getPlaylistItem=function(E){if(!a.exists(E)){E=w.getCurrentItem()}return w.getPlaylist()[E]};w.getPosition=function(){return v("jwGetPosition")};w.getRenderingMode=function(){return w.renderingMode};w.getState=function(){return v("jwGetState")};w.getVolume=function(){return v("jwGetVolume")};w.getWidth=function(){return v("jwGetWidth")};w.setFullscreen=function(E){if(!a.exists(E)){v("jwSetFullscreen",!v("jwGetFullscreen"))}else{v("jwSetFullscreen",E)}return w};w.setStretching=function(E){v("jwSetStretching",E);return w};w.setMute=function(E){if(!a.exists(E)){v("jwSetMute",!v("jwGetMute"))}else{v("jwSetMute",E)}return w};w.lock=function(){return w};w.unlock=function(){return w};w.load=function(E){v("jwLoad",E);return w};w.playlistItem=function(E){v("jwPlaylistItem",parseInt(E));return w};w.playlistPrev=function(){v("jwPlaylistPrev");return w};w.playlistNext=function(){v("jwPlaylistNext");return w};w.resize=function(F,E){if(w.renderingMode=="html5"){h.jwResize(F,E)}else{var G=document.getElementById(w.id+"_wrapper");if(G){G.style.width=a.styleDimension(F);G.style.height=a.styleDimension(E)}}return w};w.play=function(E){if(typeof E=="undefined"){E=w.getState();if(E==b.PLAYING||E==b.BUFFERING){v("jwPause")}else{v("jwPlay")}}else{v("jwPlay",E)}return w};w.pause=function(E){if(typeof E=="undefined"){E=w.getState();if(E==b.PLAYING||E==b.BUFFERING){v("jwPause")}else{v("jwPlay")}}else{v("jwPause",E)}return w};w.stop=function(){v("jwStop");return w};w.seek=function(E){v("jwSeek",E);return w};w.setVolume=function(E){v("jwSetVolume",E);return w};w.loadInstream=function(F,E){x=new f.instream(this,h,F,E);return x};w.getQualityLevels=function(){return v("jwGetQualityLevels")};w.getCurrentQuality=function(){return v("jwGetCurrentQuality")};w.setCurrentQuality=function(E){v("jwSetCurrentQuality",E)};w.getCaptionsList=function(){return v("jwGetCaptionsList")};w.getCurrentCaptions=function(){return v("jwGetCurrentCaptions")};w.setCurrentCaptions=function(E){v("jwSetCurrentCaptions",E)};w.getControls=function(){return v("jwGetControls")};w.getSafeRegion=function(){return v("jwGetSafeRegion")};w.setControls=function(E){v("jwSetControls",E)};var q={onBufferChange:e.JWPLAYER_MEDIA_BUFFER,onBufferFull:e.JWPLAYER_MEDIA_BUFFER_FULL,onError:e.JWPLAYER_ERROR,onFullscreen:e.JWPLAYER_FULLSCREEN,onMeta:e.JWPLAYER_MEDIA_META,onMute:e.JWPLAYER_MEDIA_MUTE,onPlaylist:e.JWPLAYER_PLAYLIST_LOADED,onPlaylistItem:e.JWPLAYER_PLAYLIST_ITEM,onPlaylistComplete:e.JWPLAYER_PLAYLIST_COMPLETE,onReady:e.API_READY,onResize:e.JWPLAYER_RESIZE,onComplete:e.JWPLAYER_MEDIA_COMPLETE,onSeek:e.JWPLAYER_MEDIA_SEEK,onTime:e.JWPLAYER_MEDIA_TIME,onVolume:e.JWPLAYER_MEDIA_VOLUME,onBeforePlay:e.JWPLAYER_MEDIA_BEFOREPLAY,onBeforeComplete:e.JWPLAYER_MEDIA_BEFORECOMPLETE,onDisplayClick:e.JWPLAYER_DISPLAY_CLICK,onControls:e.JWPLAYER_CONTROLS,onQualityLevels:e.JWPLAYER_MEDIA_LEVELS,onQualityChange:e.JWPLAYER_MEDIA_LEVEL_CHANGED,onCaptionsList:e.JWPLAYER_CAPTIONS_LIST,onCaptionsChange:e.JWPLAYER_CAPTIONS_CHANGED};a.foreach(q,function(E){w[E]=B(q[E],y)});var u={onBuffer:b.BUFFERING,onPause:b.PAUSED,onPlay:b.PLAYING,onIdle:b.IDLE};a.foreach(u,function(E){w[E]=B(u[E],p)});function B(E,F){return function(G){return F(E,G)}}w.remove=function(){if(!C){throw"Cannot call remove() before player is ready";return}l(this)};function l(E){o=[];f.destroyPlayer(E.id)}w.setup=function(E){if(d.embed){l(w);if(a.clearCss){a.clearCss("#"+w.id)}var F=d(w.id);F.config=E;return new d.embed(F)}return w};w.registerPlugin=function(H,G,F,E){d.plugins.registerPlugin(H,G,F,E)};w.setPlayer=function(E,F){h=E;w.renderingMode=F};w.detachMedia=function(){if(w.renderingMode=="html5"){return v("jwDetachMedia")}};w.attachMedia=function(){if(w.renderingMode=="html5"){return v("jwAttachMedia")}};function p(E,F){if(!k[E]){k[E]=[];y(e.JWPLAYER_PLAYER_STATE,D(E))}k[E].push(F);return w}function D(E){return function(G){var F=G.newstate,I=G.oldstate;if(F==E){var H=k[F];if(H){for(var J=0;J<H.length;J++){if(typeof H[J]=="function"){H[J].call(this,{oldstate:I,newstate:F})}}}}}}function A(E,F,G){if(!z[E]){z[E]={}}if(!z[E][F]){z[E][F]=[];y(F,j(E,F))}z[E][F].push(G);return w}function j(E,F){return function(H){if(E==H.component){var G=z[E][F];if(G){for(var I=0;I<G.length;I++){if(typeof G[I]=="function"){G[I].call(this,H)}}}}}}function i(E,F){try{E.jwAddEventListener(F,'function(dat) { jwplayer("'+w.id+'").dispatchEvent("'+F+'", dat); }')}catch(G){a.log("Could not add internal listener")}}function y(E,F){if(!g[E]){g[E]=[];if(h&&C){i(h,E)}}g[E].push(F);return w}w.dispatchEvent=function(G){if(g[G]){var F=a.translateEventResponse(G,arguments[1]);for(var E=0;E<g[G].length;E++){if(typeof g[G][E]=="function"){g[G][E].call(this,F)}}}};w.dispatchInstreamEvent=function(E){if(x){x.dispatchEvent(E,arguments)}};function v(){if(C){var G=arguments[0],E=[];for(var F=1;F<arguments.length;F++){E.push(arguments[F])}if(typeof h!="undefined"&&typeof h[G]=="function"){switch(E.length){case 4:return(h[G])(E[0],E[1],E[2],E[3]);case 3:return(h[G])(E[0],E[1],E[2]);case 2:return(h[G])(E[0],E[1]);case 1:return(h[G])(E[0]);default:return(h[G])()}}return null}else{o.push(arguments)}}w.playerReady=function(E){C=true;if(!h){w.setPlayer(document.getElementById(E.id))}w.container=document.getElementById(w.id);a.foreach(g,function(F){i(h,F)});y(e.JWPLAYER_PLAYLIST_ITEM,function(F){r={}});y(e.JWPLAYER_MEDIA_META,function(F){a.extend(r,F.metadata)});w.dispatchEvent(e.API_READY);while(o.length>0){v.apply(this,o.shift())}};w.getItemMeta=function(){return r};w.getCurrentItem=function(){return v("jwGetPlaylistIndex")};function t(G,I,H){var E=[];if(!I){I=0}if(!H){H=G.length-1}for(var F=I;F<=H;F++){E.push(G[F])}return E}return w};f.selectPlayer=function(h){var g;if(!a.exists(h)){h=0}if(h.nodeType){g=h}else{if(typeof h=="string"){g=document.getElementById(h)}}if(g){var i=f.playerById(g.id);if(i){return i}else{return f.addPlayer(new f(g))}}else{if(typeof h=="number"){return c[h]}}return null};f.playerById=function(h){for(var g=0;g<c.length;g++){if(c[g].id==h){return c[g]}}return null};f.addPlayer=function(g){for(var h=0;h<c.length;h++){if(c[h]==g){return g}}c.push(g);return g};f.destroyPlayer=function(i){var h=-1;for(var k=0;k<c.length;k++){if(c[k].id==i){h=k;continue}}if(h>=0){var l=c[h].id,g=document.getElementById(l+"_wrapper");if(g){var j=document.createElement("div");j.id=l;g.parentNode.replaceChild(j,g)}c.splice(h,1)}return null};d.playerReady=function(h){var g=d.api.playerById(h.id);if(g){g.playerReady(h)}else{d.api.selectPlayer(h.id).playerReady(h)}}})(jwplayer);(function(b){var c=b.events,a=c.state;b.api.instream=function(e,k,o,r){var j=e,d=k,i=o,l=r,g={},q={};function h(){j.callInternal("jwLoadInstream",o,r)}function n(s,t){d.jwInstreamAddEventListener(t,'function(dat) { jwplayer("'+j.id+'").dispatchInstreamEvent("'+t+'", dat); }')}function f(s,t){if(!g[s]){g[s]=[];n(d,s)}g[s].push(t);return this}function p(s,t){if(!q[s]){q[s]=[];f(c.JWPLAYER_PLAYER_STATE,m(s))}q[s].push(t);return this}function m(s){return function(u){var t=u.newstate,w=u.oldstate;if(t==s){var v=q[t];if(v){for(var x=0;x<v.length;x++){if(typeof v[x]=="function"){v[x].call(this,{oldstate:w,newstate:t,type:u.type})}}}}}}this.dispatchEvent=function(v,u){if(g[v]){var t=_utils.translateEventResponse(v,u[1]);for(var s=0;s<g[v].length;s++){if(typeof g[v][s]=="function"){g[v][s].call(this,t)}}}};this.onError=function(s){return f(c.JWPLAYER_ERROR,s)};this.onFullscreen=function(s){return f(c.JWPLAYER_FULLSCREEN,s)};this.onMeta=function(s){return f(c.JWPLAYER_MEDIA_META,s)};this.onMute=function(s){return f(c.JWPLAYER_MEDIA_MUTE,s)};this.onComplete=function(s){return f(c.JWPLAYER_MEDIA_COMPLETE,s)};this.onSeek=function(s){return f(c.JWPLAYER_MEDIA_SEEK,s)};this.onTime=function(s){return f(c.JWPLAYER_MEDIA_TIME,s)};this.onVolume=function(s){return f(c.JWPLAYER_MEDIA_VOLUME,s)};this.onBuffer=function(s){return p(a.BUFFERING,s)};this.onPause=function(s){return p(a.PAUSED,s)};this.onPlay=function(s){return p(a.PLAYING,s)};this.onIdle=function(s){return p(a.IDLE,s)};this.onInstreamClick=function(s){return f(c.JWPLAYER_INSTREAM_CLICK,s)};this.onInstreamDestroyed=function(s){return f(c.JWPLAYER_INSTREAM_DESTROYED,s)};this.play=function(s){d.jwInstreamPlay(s)};this.pause=function(s){d.jwInstreamPause(s)};this.seek=function(s){d.jwInstreamSeek(s)};this.destroy=function(){d.jwInstreamDestroy()};this.getState=function(){return d.jwInstreamGetState()};this.getDuration=function(){return d.jwInstreamGetDuration()};this.getPosition=function(){return d.jwInstreamGetPosition()};h()}})(jwplayer)};