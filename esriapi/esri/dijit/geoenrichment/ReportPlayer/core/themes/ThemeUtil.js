// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/themes/ThemeUtil",["dojo/_base/lang","esri/dijit/geoenrichment/utils/ColorUtil","esri/dijit/geoenrichment/utils/ObjectUtil"],function(r,c,u){function v(b){var d=c.isLightColor(b);return c.transform(b,{dv:d?-7:7}).toHex()}var w={getPanelTitleColor:function(b){var d=c.isLightColor(b);return c.transform(b,{dv:d?-50:50}).toHex()},getChartElementBackgroundColor:function(b){var d=c.isLightColor(b);return c.transform(b,{dv:d?-13:13}).toHex()}},q={getThemeColors:function(b){return[b.document.backgroundColor,
b.icon.backgroundColor,b.highlightedIcon.backgroundColor]},generateChartColors:function(b,d,a){a=a||{};var f=a.gradientFactor||1,k=[d,c.transform(d,{dv:-20*f}).toHex(),c.transform(d,{dv:-40*f}).toHex(),c.transform(d,{dv:-50*f}).toHex(),c.transform(d,{dv:-55*f}).toHex(),c.transform(d,{dv:-60*f}).toHex(),c.transform(d,{dv:-65*f}).toHex(),c.transform(d,{dv:-70*f}).toHex()];if(a.numLighterColors)for(var l=0;l<a.numLighterColors;l++)k.unshift(c.transform(d,{dv:20*f*(l+1),ds:-20*(l+1)}).toHex());b&&b!==
d&&k.unshift(b);var e={};return k.filter(function(a){return e[a]?!1:e[a]=!0})},applyThemeColorsToTheme:function(b){var d=b.theme,a=b.colors,f=b.preserveForegroundColor,k=b.chartColors,l=b.colors3series;b=b.preprocessGeneratedThemeFunc;var e=a[0],h=a[1],a=a[2],g=f&&d.chart&&d.chart.dataLabelsStyle&&d.chart.dataLabelsStyle.color||c.getContrastColor(e).toHex(),f=f&&d.document.color||("#FFFFFF"===e.toUpperCase()?"#4C4C4C":g),m=c.isLightColor(e),n=w.getChartElementBackgroundColor(e),p=w.getPanelTitleColor(e),
x=c.transform(e,{dv:m?-33:33}).toHex(),r={overrideStyles:{Default:{color:f,backgroundColor:"transparent"},TableHeader:{color:c.getContrastColor(h,void 0,void 0,200).toHex(),backgroundColor:h},AlternatingRow:{color:f,backgroundColor:c.transform(e,{dv:m?-7:7}).toHex()},ReportTitle:{color:a,backgroundColor:"transparent"},GreyText:{color:x,backgroundColor:"transparent"},BlueText:{color:"#56A5D8",backgroundColor:"transparent"}}},t={lineColor:g,gridLinesColor:g,gridStripesColor:v(e),gridStripesColorAlt:"transparent",
axisStyle:{color:g},titleStyle:{color:g}},y={lineColor:g,gridLinesColor:g,gridStripesColor:v(e),gridStripesColorAlt:"transparent",baseLineColor:g,axisStyle:{color:g},titleStyle:{color:g}},z=c.isLightColor(e),e={document:{color:f,backgroundColor:e,border:{color:x}},icon:{backgroundColor:h},highlightedIcon:{backgroundColor:a},table:r,chart:{backgroundColor:"transparent",outlineColor:void 0,titleStyle:{color:p},dataLabelsAltColor:g,dataLabelsStyle:{color:g},xAxis:t,yAxis:y,legendStyle:{color:g,backgroundColor:"transparent"},
minMaxLegend:{titleStyle:{color:g}},comparisonInfo:{lineColor:z?"#666666":"#BBBBBB"},icon:{backgroundColor:h},ring:{ringBackground:{backgroundColor:n}},gauge:{dataLabelStyle:{color:h},othersColor:n,arrowIndicator:{lineColor:p,backgroundColor:p}},waffle:{dataValueStyle:{color:h},dataLabelStyle:{color:h},othersColor:n},columnBarBackground:{backgroundColor:n}},infographic:{backgroundColor:"transparent",agePyramid:{theme:m?"light":"common",male:{backgroundColor:h},female:{backgroundColor:a}},staticInfographic:{backgroundColor:"transparent",
icon:{backgroundColor:h},highlightedIcon:{backgroundColor:a},iconBarBackground:{},titleLine:{color:c.transform(e,{dv:m?-40:40}).toHex()},titleStyle:{color:p},variableLabelStyle:{color:h},variableLabelStyleHighlighted:{color:a},variableLabelStyleContrast:{color:e},variableDescriptionStyle:{color:c.transform(e,{dv:m?-50:50}).toHex()}}}};b&&b(e);u.populateObject(d,e,!0);d.chart.colors=k&&k.length?k:q.generateChartColors(h,a);d.chart.colors3series=l},applyTextStyleToTheme:function(b,d){function a(a,b){var c=
r.mixin({},d);a&&delete c.color;b||delete c.fontSize;return c}d=q.filterTextStyles(d);var c={document:a(!1,!0),table:{overrideStyles:{Default:a(!1,!0),TableHeader:a(!1,!0),AlternatingRow:a(!1,!0),ReportTitle:a(!1,!0),GreyText:a(!1,!0),BlueText:a(!1,!0)}},chart:{titleStyle:a(),dataLabelsStyle:a(),xAxis:{axisStyle:a(),titleStyle:a()},yAxis:{axisStyle:a(),titleStyle:a()},legendStyle:a(),minMaxLegend:{titleStyle:a(),minVariableLabelStyle:a(!0),maxVariableLabelStyle:a(!0)},gauge:{dataLabelStyle:a()},waffle:{dataValueStyle:a(),
dataLabelStyle:a()}},infographic:{staticInfographic:{titleStyle:a(),variableLabelStyle:a(),variableLabelStyleHighlighted:a(),variableLabelStyleContrast:a(),variableDescriptionStyle:a()}}};u.populateObject(b,c,!0)}},t={fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,textDecoration:1,color:1};q.filterTextStyles=function(b){var d={},a;for(a in t){var c=b[a];void 0!==c&&(d[a]=c)}return d};return q});