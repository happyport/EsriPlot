// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/fgdc/idinfo/templates/keywords.html":"\x3cdiv data-dojo-attach-point\x3d\"containerNode\"\x3e\r\n\r\n  \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/Element\"\r\n    data-dojo-props\x3d\"target:'keywords',label:'${i18nFgdc.idinfo.keywords.caption}'\"\x3e\r\n\r\n    \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/Tabs\"\x3e\r\n    \r\n      \x3c!-- theme --\x3e\r\n      \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/Element\"\r\n        data-dojo-props\x3d\"target:'theme',minOccurs:1,maxOccurs:'unbounded',\r\n          label:'${i18nFgdc.idinfo.keywords.theme}'\"\x3e\r\n        \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/Element\"\r\n          data-dojo-props\x3d\"target:'themekt',value:'None',\r\n            label:'${i18nFgdc.idinfo.keywords.thesaursus}'\"\x3e\r\n          \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/InputText\"\x3e\r\n            \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/tools/ClickableValueTool\"\r\n              data-dojo-props\x3d\"value:'None',label:'${i18nFgdc.alternates.none}'\"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/fgdc/IsoTopicTool\"\r\n              data-dojo-props\x3d\"label:'${i18nFgdc.idinfo.keywords.themektIsoTopicCategory}'\"\x3e\x3c/div\x3e    \r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/Element\"\r\n          data-dojo-props\x3d\"target:'themekey',maxOccurs:'unbounded',\r\n            label:'${i18nFgdc.idinfo.keywords.delimited}'\"\x3e\r\n          \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/InputDelimitedTextArea\"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n\r\n      \x3c!-- place --\x3e\r\n      \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/Element\"\r\n        data-dojo-props\x3d\"target:'place',minOccurs:0,maxOccurs:'unbounded',\r\n          label:'${i18nFgdc.idinfo.keywords.place}'\"\x3e\r\n        \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/Element\"\r\n          data-dojo-props\x3d\"target:'placekt',value:'None',\r\n            label:'${i18nFgdc.idinfo.keywords.thesaursus}'\"\x3e\r\n          \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/InputText\"\x3e\r\n            \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/tools/ClickableValueTool\"\r\n              data-dojo-props\x3d\"value:'None',label:'${i18nFgdc.alternates.none}'\"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/tools/ClickableValueTool\"\r\n              data-dojo-props\x3d\"value:'Geographic Names Information System',\r\n                label:'${i18nFgdc.idinfo.keywords.placektGnis}'\"\x3e\x3c/div\x3e          \r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/Element\"\r\n          data-dojo-props\x3d\"target:'placekey',maxOccurs:'unbounded',\r\n            label:'${i18nFgdc.idinfo.keywords.delimited}'\"\x3e\r\n          \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/InputDelimitedTextArea\"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n\r\n      \x3c!-- stratum --\x3e\r\n      \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/Element\"\r\n        data-dojo-props\x3d\"target:'stratum',minOccurs:0,maxOccurs:'unbounded',\r\n          label:'${i18nFgdc.idinfo.keywords.stratum}'\"\x3e\r\n        \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/Element\"\r\n          data-dojo-props\x3d\"target:'stratkt',value:'None',\r\n            label:'${i18nFgdc.idinfo.keywords.thesaursus}'\"\x3e\r\n          \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/InputText\"\x3e\r\n            \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/tools/ClickableValueTool\"\r\n              data-dojo-props\x3d\"value:'None',label:'${i18nFgdc.alternates.none}'\"\x3e\x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/Element\"\r\n          data-dojo-props\x3d\"target:'stratkey',maxOccurs:'unbounded',\r\n            label:'${i18nFgdc.idinfo.keywords.delimited}'\"\x3e\r\n          \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/InputDelimitedTextArea\"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n\r\n      \x3c!-- temporal --\x3e\r\n      \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/Element\"\r\n        data-dojo-props\x3d\"target:'temporal',minOccurs:0,maxOccurs:'unbounded',\r\n          label:'${i18nFgdc.idinfo.keywords.temporal}'\"\x3e\r\n        \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/Element\"\r\n          data-dojo-props\x3d\"target:'tempkt',value:'None',\r\n            label:'${i18nFgdc.idinfo.keywords.thesaursus}'\"\x3e\r\n          \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/InputText\"\x3e\r\n            \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/tools/ClickableValueTool\"\r\n              data-dojo-props\x3d\"value:'None',label:'${i18nFgdc.alternates.none}'\"\x3e\x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/Element\"\r\n          data-dojo-props\x3d\"target:'tempkey',maxOccurs:'unbounded',\r\n            label:'${i18nFgdc.idinfo.keywords.delimited}'\"\x3e\r\n          \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/InputDelimitedTextArea\"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n\r\n    \x3c/div\x3e\r\n\r\n  \x3c/div\x3e\r\n\r\n\x3c/div\x3e"}});
define("esri/dijit/metadata/types/fgdc/idinfo/keywords","dojo/_base/declare dojo/_base/lang dojo/has ../../../base/Descriptor ../../../form/Element ../../../form/InputDelimitedTextArea ../../../form/InputText ../../../form/Tabs ../../../form/tools/ClickableValueTool ../../../form/fgdc/IsoTopicTool dojo/text!./templates/keywords.html ../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,l,m,n,e,f){a=a(d,{templateString:e});c("extend-esri")&&b.setObject("dijit.metadata.types.fgdc.idinfo.keywords",
a,f);return a});