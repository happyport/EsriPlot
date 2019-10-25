// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/conversion/portalToEditorUtils/parsers/Parsers",["esri/dijit/geoenrichment/Deferred","require"],function(d,e){var a={},b={},c;a.initialize=function(){if(c)return c.promise;c=new d;e("./DocumentParser ./ChartConverterPtoE ./InfographicConverterPtoE ./SectionParser ./FieldParser ./FilterParser ../../../supportClasses/templateJsonUtils/fieldInfo/utils".split(" "),function(a,d,e,f,g,h,k){b.document=a;b.chart=d;b.infographic=e;b.section=f;b.field=g;b.filter=
h;k.init().then(c.resolve)});return c.promise};a.getParser=function(a){return b[a]};return a});