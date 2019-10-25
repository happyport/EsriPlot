// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/conversion/portalToEditorUtils/metadata/MetadataParser","esri/dijit/geoenrichment/promise/all esri/dijit/geoenrichment/utils/JsonXmlConverter ./DataCollectionsCalculatorsParser ./LocatorCalculatorsParser ./map/MapCalculatorsParser ./TradeAreaCalculatorsParser".split(" "),function(e,f,g,h,k,l){return{parseMetadataXML:function(d,c,a){a.log&&a.log(d.data);var b=f.parseXml(d.data);if(b&&b.tags)return e([l.parseTradeAreaCalculators(b,a),g.parseDataCollectionsCalculators(b,
c,a),h.parseLocatorCalculators(b,c,a)]).then(function(){return k.parseMapCalculators(b,c,a)})}}});