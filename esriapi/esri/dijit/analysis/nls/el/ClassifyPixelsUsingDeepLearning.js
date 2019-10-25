// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/el/ClassifyPixelsUsingDeepLearning",{toolDefine:"\u03a4\u03b1\u03be\u03b9\u03bd\u03cc\u03bc\u03b7\u03c3\u03b7 Pixel \u039c\u03ad\u03c3\u03c9 \u0392\u03b1\u03b8\u03b9\u03ac\u03c2 \u039c\u03ac\u03b8\u03b7\u03c3\u03b7\u03c2",outputLayerName:"${layername}_classified",modelLabel:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03bc\u03bf\u03bd\u03c4\u03ad\u03bb\u03bf\u03c5 \u03b2\u03b1\u03b8\u03b9\u03ac\u03c2 \u03bc\u03ac\u03b8\u03b7\u03c3\u03b7\u03c2 \u03c0\u03bf\u03c5 \u03b8\u03b1 \u03c7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03b5\u03af\u03c4\u03b1\u03b9 \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03c4\u03b1\u03be\u03b9\u03bd\u03cc\u03bc\u03b7\u03c3\u03b7 pixel",
modelArgsLabel:"\u039a\u03b1\u03b8\u03bf\u03c1\u03b9\u03c3\u03bc\u03cc\u03c2 \u03bf\u03c1\u03b9\u03c3\u03bc\u03ac\u03c4\u03c9\u03bd \u03bc\u03bf\u03bd\u03c4\u03ad\u03bb\u03bf\u03c5 \u03b2\u03b1\u03b8\u03b9\u03ac\u03c2 \u03bc\u03ac\u03b8\u03b7\u03c3\u03b7\u03c2",nameLabel:"\u038c\u03bd\u03bf\u03bc\u03b1",valueLabel:"\u03a4\u03b9\u03bc\u03ae",queryModelArgsMsg:"\u0395\u03be\u03ad\u03c4\u03b1\u03c3\u03b7 \u03bf\u03c1\u03b9\u03c3\u03bc\u03ac\u03c4\u03c9\u03bd \u03bc\u03bf\u03bd\u03c4\u03ad\u03bb\u03bf\u03c5...",
analysisLayerLabel:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03b5\u03b9\u03ba\u03cc\u03bd\u03b1\u03c2 \u03c0\u03bf\u03c5 \u03b8\u03b1 \u03c7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03b5\u03af\u03c4\u03b1\u03b9 \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03c4\u03b1\u03be\u03b9\u03bd\u03cc\u03bc\u03b7\u03c3\u03b7 pixel",itemDescription:"Image service \u03b1\u03bd\u03ac\u03bb\u03c5\u03c3\u03b7\u03c2 \u03c0\u03bf\u03c5 \u03b8\u03b1 \u03b4\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03b5\u03af\u03c4\u03b1\u03b9 \u03b1\u03c0\u03cc \u03c4\u03bf \u03b5\u03c1\u03b3\u03b1\u03bb\u03b5\u03af\u03bf \u00ab\u03a4\u03b1\u03be\u03b9\u03bd\u03cc\u03bc\u03b7\u03c3\u03b7 Pixel \u039c\u03ad\u03c3\u03c9 \u0392\u03b1\u03b8\u03b9\u03ac\u03c2 \u039c\u03ac\u03b8\u03b7\u03c3\u03b7\u03c2\u00bb",
itemTags:"\u0391\u03c0\u03bf\u03c4\u03ad\u03bb\u03b5\u03c3\u03bc\u03b1 \u03b1\u03bd\u03ac\u03bb\u03c5\u03c3\u03b7\u03c2 raster, \u03a4\u03b1\u03be\u03b9\u03bd\u03cc\u03bc\u03b7\u03c3\u03b7 Pixel \u039c\u03ad\u03c3\u03c9 \u0392\u03b1\u03b8\u03b9\u03ac\u03c2 \u039c\u03ac\u03b8\u03b7\u03c3\u03b7\u03c2, ${layername}",itemSnippet:"Image service \u03b1\u03bd\u03ac\u03bb\u03c5\u03c3\u03b7\u03c2 \u03c0\u03bf\u03c5 \u03b8\u03b1 \u03b4\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03b5\u03af\u03c4\u03b1\u03b9 \u03b1\u03c0\u03cc \u03c4\u03bf \u03b5\u03c1\u03b3\u03b1\u03bb\u03b5\u03af\u03bf \u00ab\u03a4\u03b1\u03be\u03b9\u03bd\u03cc\u03bc\u03b7\u03c3\u03b7 Pixel \u039c\u03ad\u03c3\u03c9 \u0392\u03b1\u03b8\u03b9\u03ac\u03c2 \u039c\u03ac\u03b8\u03b7\u03c3\u03b7\u03c2\u00bb"});