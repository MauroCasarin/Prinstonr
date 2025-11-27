// Garden Gnome Software - Skin
// Pano2VR 6.1.13/18080
// Filename: PRINSTON.ggsk
// Generated 2025-11-27T12:14:24

function pano2vrSkin(player,base) {
	player.addVariable('vis_video_file', 2, false);
	player.addVariable('vis_video_youtube', 2, false);
	player.addVariable('menu_open', 2, false);
	player.addVariable('menu_touch', 2, false);
	player.addVariable('menu_cloner', 1, 0);
	player.addVariable('category_var', 0, "");
	player.addVariable('category_visible', 2, false);
	player.addVariable('node_visible', 2, false);
	player.addVariable('opt_thumbnail_menu_tooltip', 2, true);
	player.addVariable('vis_thumbnail_menu', 2, false);
	player.addVariable('vis_loader', 2, true);
	var me=this;
	var skin=this;
	var flag=false;
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._loading=document.createElement('div');
		el.ggId="loading";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._loading.onclick=function (e) {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		me._loading.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._loadingbg=document.createElement('div');
		el.ggId="loadingbg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 44px;';
		hs+='left : 11px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 189px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loadingbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbg.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingbg);
		el=me._loadingtext=document.createElement('div');
		els=me._loadingtext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="loadingtext";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._loadingtext.ggUpdateText=function() {
			var hs="CARGANDO... "+(player.getPercentLoaded()*100.0).toFixed(0)+"%";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loadingtext.ggUpdateText();
		player.addListener('downloadprogress', function() {
			me._loadingtext.ggUpdateText();
		});
		el.appendChild(els);
		me._loadingtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingtext.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingtext);
		el=me._loadingbar=document.createElement('div');
		el.ggId="loadingbar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #808080;';
		hs+='cursor : default;';
		hs+='height : 13px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 182px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		me._loadingbar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbar.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingbar);
		me.divSkin.appendChild(me._loading);
		el=me._bares=document.createElement('div');
		els=me._bares__img=document.createElement('img');
		els.className='ggskin ggskin_bares';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Bares";
		el.ggDx=149;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 9px;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 97px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._bares.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._bares.onclick=function (e) {
			player.openUrl("https:\/\/www.google.com\/maps\/d\/u\/4\/viewer?mid=1spI7rg4roiEF_Jd8fXHQ_51CgB-LK7qo&ll=-34.62212695628961%2C-58.563266613082476&z=9","_blank");
		}
		me._bares.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._bares);
		el=me._productos=document.createElement('div');
		els=me._productos__img=document.createElement('img');
		els.className='ggskin ggskin_productos';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Productos";
		el.ggDx=50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 9px;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 97px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._productos.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._productos.onclick=function (e) {
			player.openUrl("https:\/\/maurocasarin.github.io\/Prinstonr\/\/Nuesttros%20productos\/index.html","_self");
		}
		me._productos.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._productos);
		el=me._bebidas=document.createElement('div');
		els=me._bebidas__img=document.createElement('img');
		els.className='ggskin ggskin_bebidas';
		hs='data:image/png;base64,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'+
			'6A6VhFj0pwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Bebidas";
		el.ggDx=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 9px;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 97px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._bebidas.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._bebidas.onclick=function (e) {
			player.openUrl("https:\/\/maurocasarin.github.io\/Prinstonr\/","_self");
		}
		me._bebidas.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._bebidas);
		el=me._menu=document.createElement('div');
		els=me._menu__img=document.createElement('img');
		els.className='ggskin ggskin_menu';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Menu";
		el.ggDx=-149;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 9px;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 97px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu.onclick=function (e) {
			player.openUrl("https:\/\/maurocasarin.github.io\/Prinstonr\/\/Menu\/index.html","_self");
		}
		me._menu.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._menu);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('imagesready', function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		});
		player.addListener('beforechangenode', function() {
			if (
				(
					((player.getVariableValue('vis_loader') == true))
				)
			) {
				me._loading.style[domTransition]='none';
				me._loading.style.visibility=(Number(me._loading.style.opacity)>0||!me._loading.style.opacity)?'inherit':'hidden';
				me._loading.ggVisible=true;
			}
		});
		player.addListener('tilesrequested', function() {
			player.setVariableValue('vis_loader', false);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('@font-face { font-family: "morganiteblackcustom"; /* El ".." sube un nivel en la estructura de carpetas */ src: url(../fonts/morganite-black.woff2) format("woff2"), url(../fonts/morganite-black.woff) format("woff"); font-weight: normal; font-style: normal; }'));
	document.head.appendChild(style);
	me.skinTimerEvent();
};