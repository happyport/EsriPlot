// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/reportContainerStack/supportClasses/BenchmarkController",["dojo/_base/declare","dojo/_base/lang","dijit/Destroyable"],function(b,c,d){return b(d,{_benchmarkIndex:0,_noTextLimit:!1,constructor:function(a){c.mixin(this,a)},getAreaIndex:function(){return this._benchmarkIndex},setAreaIndex:function(a){a!==this._benchmarkIndex&&(this._benchmarkIndex=a,this.onChanged())},setNoTextLimit:function(a){this._noTextLimit=a},hasNoTextLimit:function(){return this._noTextLimit},
onChanged:function(){}})});