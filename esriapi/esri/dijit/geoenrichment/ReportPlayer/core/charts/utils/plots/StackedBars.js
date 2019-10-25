// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/plots/StackedBars",["dojo/_base/declare","dojo/_base/lang","dojox/charting/plot2d/commonStacked","./ClusteredBars"],function(m,n,l,p){return m(p,{getSeriesStats:function(){var a=l.collectStats(this.series,n.hitch(this,"isNullValue")),c;a.hmin-=.5;a.hmax+=.5;c=a.hmin;a.hmin=a.vmin;a.vmin=c;c=a.hmax;a.hmax=a.vmax;a.vmax=c;return a},rearrangeValues:function(a,c,b){return l.rearrangeValues.call(this,a,c,b)},_drawBarBackground:function(a,
c,b,e,f,h,d,g){this.series.indexOf(d)===this.series.length-1&&this.inherited(arguments)},_getYShift:function(a,c){return 0},_getClusterSize:function(){return 1},_renderInside:function(a,c,b,e,f,h){var d=c[c.valueProp];if(!(a.box.h-3>b.height))if(a.box.w+2*this.opt.labelOffset>b.width)a.box.w<=(0<d?f.width-h.r-(b.x+b.width+this.opt.labelOffset):b.x-h.l-2*this.opt.labelOffset)&&this._renderOutside(a,c,b,e,f,h,void 0,!0);else{f=b.y+(b.height-a.box.h)/2;var g=0;c.stackValues.forEach(function(a,b){b<=
c.seriesIndex&&(g+=Math.abs(a||0))});var k=0<d?0:g;c.stackValues.forEach(function(a,b){a=a||0;0<a?b<c.seriesIndex&&(k+=Math.abs(a)):b<=c.seriesIndex&&(k-=Math.abs(a))});d=b.width*Math.abs(d)/g;b=b.x+b.width*k/g;switch(e.series.dataLabelsHorizontalAlign){case "left":e=b+this.opt.labelOffset;break;case "right":e=b+d-a.box.w-this.opt.labelOffset;break;default:e=b+d/2-a.box.w/2}a={x:e,y:f,w:a.box.w,h:a.box.h,text:a.getText()};this._labelBoxes.push(a)}},_getFixLabelsParams:function(){return{allowXShift:!0,
xGap:5,yTolerance:.5}}})});