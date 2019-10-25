// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/sections/dynamicSettings/table/_TableSettingsBuilder",["dojo/_base/lang","dojo/aspect","esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ElementUsageTypes","dojo/i18n!esri/nls/jsapi"],function(f,g,h,k,l){return{provideTableSettings:function(a){if(!a.isMultiDataSection()||a.elementUsageType!==k.PAGE_PANEL_SECTION)return null;var b=a.getTables()[0];return h(b.getFilterRanges(),function(d){if(!d||!d.length)return null;
var e;if(b.presetFilter){e=f.mixin({},b.presetFilter);var c=d.filter(function(a){return a.columnIndex===b.presetFilter.columnIndex})[0];c?e.fieldName=c.fieldName:e=null}var c=b.getChartViewOptions(),a={viewSettings:c&&{chartViewOptions:c},filter:{filter:e,filterRanges:d,getNumElementsTotal:function(){return b.getNumElementsTotal()},getNumElementsShown:function(){return b.getNumElementsShown()},onContentUpdated:function(){}}};g.after(b,"onRendered",function(){a.filter.onContentUpdated()});return a})}}});