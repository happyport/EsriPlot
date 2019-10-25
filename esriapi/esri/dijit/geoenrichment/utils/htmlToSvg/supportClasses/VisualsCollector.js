// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/htmlToSvg/supportClasses/VisualsCollector","dojo/_base/Color ./dom-style ./TransformUtil ./VisibilityChecker ./text/TextMeasurer ./text/TextStyleBuilder".split(" "),function(h,b,t,u,v,l){var w={SPAN:1,A:1,B:1,I:1,U:1,FONT:1};return{getNodeVisuals:function(a,e){if(!u.checkNode(a))return null;var g=b.cacheComputedStyle(a),k=e?e.style.opacity:1,f=e&&e.isLink,x=e&&e.isB,y=e&&e.isI,z=e&&e.isU,A=b.get(a,"width"),B=b.get(a,"height"),C=b.toPixelValue(a,b.get(a,"fontSize")),
D=b.get(a,"textAlign"),E=b.get(a,"letterSpacing"),F=b.get(a,"wordSpacing"),G=b.get(a,"lineHeight"),m=t.measureNode(a,e),n=b.get(a,"position"),p=w[a.nodeName],q=new h(b.get(a,"color")),d={node:a,parentVs:e,box:m.box,style:{cw:A,ch:B,boxSizing:b.get(a,"boxSizing"),_paddings:null,getPaddings:function(){if(this._paddings)return this._paddings;b.setComputedStyleCache(a,g);var c={l:b.get(a,"paddingLeft"),r:b.get(a,"paddingRight"),t:b.get(a,"paddingTop"),b:b.get(a,"paddingBottom")};c.ew=c.l+c.r;c.eh=c.t+
c.b;c.bw=this.cw+c.l+c.r;c.bh=this.ch+c.t+c.b;b.clearCache(a);return this._paddings=c},_border:null,getBorder:function(){function c(c,e){var r=new h(b.get(a,"border"+e+"Color"));d[c]={color:r.toHex(),opacity:r.a*k,width:b.get(a,"border"+e+"Width"),style:b.get(a,"border"+e+"Style")}}if(this._border)return this._border;b.setComputedStyleCache(a,g);var d={radius:b.toPixelValue(a,b.get(a,"borderBottomLeftRadius"))};c("l","Left");c("r","Right");c("t","Top");c("b","Bottom");d.ew=d.l.width+d.r.width;d.eh=
d.t.width+d.b.width;b.clearCache(a);return this._border=d},_background:null,getBackground:function(){if(this._background)return this._background;b.setComputedStyleCache(a,g);var c=new h(b.get(a,"backgroundColor")),d=b.get(a,"backgroundRepeat"),e=b.get(a,"backgroundSize"),c={color:c.toHex(),opacity:c.a*k,image:b.get(a,"backgroundImage"),size:e,positionX:b.get(a,"backgroundPositionX"),positionY:b.get(a,"backgroundPositionY"),repeatX:"cover"!==e&&("repeat"===d||"repeat-x"===d),repeatY:"cover"!==e&&("repeat"===
d||"repeat-y"===d)};c.sizePx=b.toPixelValue(document.body,c.size);c.positionXPx=b.toPixelValue(document.body,c.positionX);c.positionYPx=b.toPixelValue(document.body,c.positionY);b.clearCache(a);return this._background=c},color:q.toHex(),colorOpacity:q.a,lineHeight:G,fontSize:C,textAlign:D,letterSpacing:E,wordSpacing:F,vAlign:b.get(a,"verticalAlign"),getTextStyle:function(c,e){if(c)return b.get(a,c);c=l.buildTextStyleString(a,d,g);if(e)for(var f in e)c=c.replace(new RegExp("(^|;)"+f+":.*?(;|$)"),"$1"+
f+":"+e[f]+"$2");return c},getTextStyleObject:function(){return l.buildTextStyleObject(a,d,g)},transform:m.transform,parentHasTransform:!(!e||!e.style.transform),opacity:b.get(a,"opacity")*k,overflow:b.get(a,"overflow"),spanFlowStartOffset:0,spanFlowEndOffset:0,display:b.get(a,"display"),isRelAbs:"relative"===n||"absolute"===n},isSpanLike:p,isLink:"A"===a.nodeName||f,isB:"B"===a.nodeName||"H"===a.nodeName.charAt(0)||x,isI:"I"===a.nodeName||y,isU:"U"===a.nodeName||z};"border-box"===d.style.boxSizing&&
(d.style.cw-=d.style.getBorder().ew+d.style.getPaddings().ew,d.style.ch-=d.style.getBorder().eh+d.style.getPaddings().eh,d.style._paddings=null);p&&(f=v.getSpanFlowOffsets(a,d),d.style.spanFlowStartOffset=f.start,d.style.spanFlowEndOffset=f.end);d.isLink&&(d.href=a.href||e.href,d.target=a.target||e.target);b.clearCache(a);return d}}});