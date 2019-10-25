// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/engine/webgl/WGLPainter","require exports ../../../../core/tsSupport/assignHelper dojo/has ../../../../core/libs/gl-matrix/mat4 ./enums ./GeometryUtils ./MaterialManager ./Utils ./brushes/WGLBrushInfo ./brushes/WGLBrushStencil ./brushes/WGLGeometryBrushFill ./brushes/WGLGeometryBrushLabel ./brushes/WGLGeometryBrushLine ./brushes/WGLGeometryBrushMarker ./brushes/WGLGeometryBrushText ./painter/WGLHighlightPainter ./../../../webgl/FramebufferObject".split(" "),
function(m,n,t,u,g,e,v,w,p,x,y,z,A,B,C,D,E,F){Object.defineProperty(n,"__esModule",{value:!0});m=function(){function c(){this._initialized=!1}c.prototype.registerPass=function(a,d){this._initialize();for(var b=0;b<d.length;b++)this._passMap.set(d[b],a);return this};c.prototype.getPaintPassTs=function(a){this._initialize();return this._passMap.has(a)?[this._passMap.get(a)]:[]};c.prototype._initialize=function(){this._initialized||(this._passMap=new Map,this._initialized=!0)};return c}();n.WGLPainterOptions=
m;var q=new Uint8Array(4*p.C_HITTEST_SEARCH_SIZE*p.C_HITTEST_SEARCH_SIZE),G=new Uint32Array(q.buffer);m=function(){function c(){this._hlPainter=new E;this._extrudeMatrix=new Float32Array(16);this._extrudeNoRotationMatrix=new Float32Array(16);this._extrudeRotateVector=new Float32Array([0,0,1]);this._extrudeScaleVector=new Float32Array([1,1,1]);this._state={rotation:0,width:0,height:0};this._cachedRotation=this._cachedHeight=this._cachedWidth=0;this.materialManager=new w}c.allGeometryPhases=function(){return[e.WGLDrawPhase.FILL,
e.WGLDrawPhase.LINE,e.WGLDrawPhase.MARKER,e.WGLDrawPhase.TEXT]};c.toWGLDrawPhases=function(a){for(var d=[],b,c=0;c<e.WGLDrawPhase.NUM_DRAW_PHASES;c++)b=1<<c,b&a&&d.push(b);return d};Object.defineProperty(c.prototype,"extrudeMatrix",{get:function(){return this._extrudeMatrix},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"extrudeNoRotationMatrix",{get:function(){return this._extrudeNoRotationMatrix},enumerable:!0,configurable:!0});c.prototype.dispose=function(){this.materialManager.dispose();
this.textureManager=null;this._hlPainter&&(this._hlPainter.dispose(),this._hlPainter=null);this._hittestFBO&&(this._hittestFBO.dispose(),this._hittestFBO=null);this._passes&&(this._passes.forEach(function(a){return a.dispose()}),this._passes.clear());this._brushes&&(this._brushes.forEach(function(a){return a.forEach(function(a){return a.dispose()})}),this._brushes.clear())};c.prototype.initialize=function(a){this.materialManager.initialize(a)};c.prototype.update=function(a,d){this._state=a;if(this._state.width!==
this._cachedWidth||this._state.height!==this._cachedHeight||this._state.rotation!==this._cachedRotation)this._extrudeScaleVector[0]=2/a.width,this._extrudeScaleVector[1]=-2/a.height,g.identity(this._extrudeMatrix),g.rotate(this._extrudeMatrix,this._extrudeMatrix,-a.rotation*v.C_DEG_TO_RAD,this._extrudeRotateVector),g.scale(this._extrudeMatrix,this._extrudeMatrix,this._extrudeScaleVector),g.transpose(this._extrudeMatrix,this._extrudeMatrix),g.identity(this._extrudeNoRotationMatrix),g.scale(this._extrudeNoRotationMatrix,
this._extrudeNoRotationMatrix,this._extrudeScaleVector),g.transpose(this._extrudeNoRotationMatrix,this._extrudeNoRotationMatrix),this._cachedWidth=this._state.width,this._cachedHeight=this._state.height,this._cachedRotation=this._state.rotation};c.prototype.getBrushes=function(a){if(!this._brushes){var d=new z.default,b=new C.default,c=new B.default,h=new D.default,f=new A.default,H=new x.default,g=new y.default;this._brushes=new Map;this._brushes.set(e.WGLDrawPhase.FILL,[d]);this._brushes.set(e.WGLDrawPhase.MARKER,
[b]);this._brushes.set(e.WGLDrawPhase.LINE,[c]);this._brushes.set(e.WGLDrawPhase.TEXT,[h]);this._brushes.set(e.WGLDrawPhase.LABEL,[f]);this._brushes.set(e.WGLDrawPhase.LABEL_ALPHA,[f]);this._brushes.set(e.WGLDrawPhase.HITTEST,[d,b,c,h]);this._brushes.set(e.WGLDrawPhase.HIGHLIGHT,[d,b,c,h]);this._brushes.set(e.WGLDrawPhase.CLIP,[g]);this._brushes.set(e.WGLDrawPhase.DEBUG,[H])}if(!this._brushes.has(a))throw Error("WGLPainter: Tried to get brush for unknown phase: "+a);return this._brushes.get(a)};c.prototype.bindTextureManager=
function(a){this.textureManager=a};c.prototype.draw=function(a,d,b,c){b[0]===e.WGLDrawPhase.LABEL_ALPHA&&b[0]===e.WGLDrawPhase.LABEL||this._drawClippingRects(a,d);var h=a.context;h.setBlendingEnabled(!0);h.setStencilWriteMask(0);h.setBlendFunctionSeparate(1,771,1,771);this._drawPhases(a,d,b,c);this._debugTiles(a,d)};c.prototype.setHighlightOptions=function(a){this._hlPainter.setHighlightOptions(a)};c.prototype.highlight=function(a,d){var b=a.context,c=b.getViewport();this._hlPainter.setup(b,c.width,
c.height);this._hlPainter.startMaskDraw(b);this._drawClippingRects(a,d);b.setBlendingEnabled(!0);b.setStencilWriteMask(0);b.setBlendFunctionSeparate(1,771,1,771);this._drawPhases(a,d,[e.WGLDrawPhase.HIGHLIGHT]);this._hlPainter.draw(b)};c.prototype.hitTest=function(a,d){var b=p.C_HITTEST_SEARCH_SIZE,c=[0,0],h=[0,0],f=a.state;f.toMap(c,[0,0]);f.toMap(h,[b,b]);if(0===d.filter(function(a){return!(c[0]>a.bounds[2]||h[0]<a.bounds[0]||c[1]<a.bounds[1]||h[1]>a.bounds[3])}).length)return[];f=a.context;this._hittestFBO||
(this._hittestFBO=F.create(f,{colorTarget:0,depthStencilTarget:3,width:b,height:b}));var g=f.getViewport(),l=f.getBoundFramebufferObject();f.bindFramebuffer(this._hittestFBO);f.setViewport(0,0,b,b);this._drawClippingRects(a,d);var k=f.gl;f.setClearColor(1,1,1,1);f.clear(k.COLOR_BUFFER_BIT);f.setBlendingEnabled(!1);f.setStencilWriteMask(0);this._drawPhases(a,d,[e.WGLDrawPhase.HITTEST]);f.setBlendingEnabled(!0);this._hittestFBO.readPixels(0,0,b,b,6408,5121,q);a=b*b;d=new Set;for(b=0;b<a;b++)k=G[b],
4294967295!==k&&d.add(k);f.bindFramebuffer(l);f.setViewport(g.x,g.y,g.width,g.height);var r=[];d.forEach(function(a){r.push(a)});return r};c.prototype._getPaintPass=function(a){this._passes||(this._passes=new Map);if(!this._passes.has(a))try{this._passes.set(a,new a)}catch(d){throw Error("Tried to instantiate WGLPaintPass with unknown constructor: "+a+",\n"+d);}return this._passes.get(a)};c.prototype._getPaintPasses=function(a,c){var b=this;return c.getPaintPassTs(a).map(function(a){return b._getPaintPass(a)})};
c.prototype._drawPhases=function(a,c,b,e){a.context.setStencilTestEnabled(!0);for(var d=0;d<b.length;d++){var f=b[d],g=e?this._getPaintPasses(f,e):[],f=t({},a,{drawPhase:f});g.forEach(function(b){return b.preRender(a,a.rendererInfo)});for(var l=0,k=c;l<k.length;l++)k[l].doRender(f);g.reverse().forEach(function(b){return b.postRender(a,a.rendererInfo)})}a.context.setStencilTestEnabled(!1)};c.prototype._debugTiles=function(a,c){u("esri-feature-tiles-debug")&&this._drawPhases(a,c,[e.WGLDrawPhase.DEBUG])};
c.prototype._drawClippingRects=function(a,c){if(0!==c.length){var b=a.context;b.setDepthWriteEnabled(!1);b.setDepthTestEnabled(!1);b.setStencilTestEnabled(!0);b.setBlendingEnabled(!1);b.setColorMask(!1,!1,!1,!1);b.setStencilOp(7680,7680,7681);b.setClearStencil(0);b.clear(b.gl.STENCIL_BUFFER_BIT);b.setStencilWriteMask(255);for(var b=0,d=c.length;b<c.length;b++,d--){var g=c[b];g.attached&&(g.stencilRef=d)}this._drawPhases(a,c,[e.WGLDrawPhase.CLIP]);a.context.setColorMask(!0,!0,!0,!0)}};return c}();
n.default=m});