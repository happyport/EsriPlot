// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/map/layers/std/DefaultSymbolRenderer",["dojo/_base/Color","esri/symbols/SimpleFillSymbol","esri/symbols/SimpleLineSymbol","esri/renderers/UniqueValueRenderer"],function(a,b,c,d){return{_defaultStdSymbol:null,_defaultStdSymbolHighlighted:null,getDefaultStdSymbol:function(){this._defaultStdSymbol||(this._defaultStdSymbol=new b(b.STYLE_SOLID,new c(c.STYLE_SOLID,new a([105,134,68,1]),2),new a([105,134,68,.1])));return this._defaultStdSymbol},
getDefaultStdSymbolHighlighted:function(){this._defaultStdSymbolHighlighted||(this._defaultStdSymbolHighlighted=new b(b.STYLE_SOLID,new c(c.STYLE_SOLID,new a([0,255,255,1]),2),new a([0,200,0,.1])));return this._defaultStdSymbolHighlighted},getDefaultStdRenderer:function(){return new d(this.getDefaultStdSymbol(),"StdGeographyLevel")}}});