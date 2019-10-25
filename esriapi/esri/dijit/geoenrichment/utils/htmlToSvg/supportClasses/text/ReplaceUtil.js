// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/htmlToSvg/supportClasses/text/ReplaceUtil",[],function(){var c=/\x0A/g,b={collapseMultipleSpaces:function(a){return a.replace(/ {2,}/g," ")},removeReturns:function(a){return b.collapseMultipleSpaces(a.replace(c," "))}};return b});