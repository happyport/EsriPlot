// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/iso/gmi/acquisitionInformation/templates/MI_Platform.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/AbstractObject" data-dojo-props\x3d"target:\'gmi:MI_Platform\',minOccurs:0"\x3e\r\n  \r\n    \x3c!-- \r\n      http://www.isotc211.org/2005/gmi/acquisitionInformation.xsd\r\n      \x3cxs:sequence\x3e\r\n        \x3cxs:element name\x3d"citation" type\x3d"gmd:CI_Citation_PropertyType" minOccurs\x3d"0" maxOccurs\x3d"unbounded"/\x3e\r\n        \x3cxs:element name\x3d"identifier" type\x3d"gmd:MD_Identifier_PropertyType"/\x3e\r\n        \x3cxs:element name\x3d"description" type\x3d"gco:CharacterString_PropertyType"/\x3e\r\n        \x3cxs:element name\x3d"sponsor" type\x3d"gmd:CI_ResponsibleParty_PropertyType" minOccurs\x3d"0" maxOccurs\x3d"unbounded"/\x3e\r\n        \x3cxs:element name\x3d"instrument" type\x3d"gmi:MI_Instrument_PropertyType" maxOccurs\x3d"unbounded"/\x3e\r\n      \x3c/xs:sequence\x3e\r\n     --\x3e\r\n     \r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Tabs"\x3e\r\n    \r\n      \x3c!-- identification section --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n          data-dojo-props\x3d"showHeader:false,label:\'${i18nIso.MI_Platform.sections.identification}\'"\x3e\r\n          \r\n        \x3c!-- citation --\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n          data-dojo-props\x3d"target:\'gmi:citation\',minOccurs:0,maxOccurs:\'unbounded\',\r\n            label:\'${i18nIso.MI_Platform.citation}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/citation/SimpleCI_Citation"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\r\n            data-dojo-props\x3d"target:\'xlink:href\',label:\'${i18nIso.ObjectReference.xlinkref}\'"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \r\n        \x3c!-- identifier --\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n          data-dojo-props\x3d"target:\'gmi:identifier\',label:\'${i18nIso.MI_Platform.identifier}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/identification/SimpleMD_Identifier"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \r\n        \x3c!-- description --\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n          data-dojo-props\x3d"target:\'gmi:description\',label:\'${i18nIso.MI_Platform.description}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement" data-dojo-props\x3d"target:\'gco:CharacterString\'"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputTextArea"\x3e\x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \r\n      \x3c/div\x3e\r\n      \r\n      \x3c!-- sponsor section --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n        data-dojo-props\x3d"showHeader:false,label:\'${i18nIso.MI_Platform.sections.sponsor}\'"\x3e\r\n        \r\n        \x3c!-- sponsor --\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n          data-dojo-props\x3d"target:\'gmi:sponsor\',minOccurs:0,maxOccurs:\'unbounded\',\r\n            label:\'${i18nIso.MI_Platform.sponsor}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/citation/CI_ResponsibleParty"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e  \r\n      \r\n       \x3c!-- instruments section --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n        data-dojo-props\x3d"showHeader:false,label:\'${i18nIso.MI_Platform.sections.instruments}\'"\x3e\r\n        \r\n        \x3c!-- instrument (allow a reference to the MI_Instrument) --\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n          data-dojo-props\x3d"target:\'gmi:instrument\',maxOccurs:\'unbounded\',\r\n            label:\'${i18nIso.MI_Platform.instrument}\'"\x3e\r\n          \x3c!-- \x3cdiv data-dojo-type\x3d"gxe/types/iso/gmi/acquisitionInformation/MI_Instrument"\x3e\x3c/div\x3e --\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute" data-dojo-props\x3d"target:\'xlink:href\',minOccurs:1,\r\n            label:\'${i18nIso.MI_Platform.instrumentReference}\'"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e  \r\n       \r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/iso/gmi/acquisitionInformation/MI_Platform","dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/Attribute ../../../../form/Element ../../../../form/InputTextArea ../../../../form/Section ../../../../form/Tabs ../../../../form/iso/AbstractObject ../../../../form/iso/GcoElement ../../../../form/iso/ObjectReference ../../gmd/citation/SimpleCI_Citation ../../gmd/identification/SimpleMD_Identifier ../../gmd/citation/CI_ResponsibleParty dojo/text!./templates/MI_Platform.html ../../../../../../kernel".split(" "),
function(a,b,c,d,g,h,k,l,m,n,p,q,r,t,u,e,f){a=a(d,{templateString:e});c("extend-esri")&&b.setObject("dijit.metadata.types.iso.gmi.acquisitionInformation.MI_Platform",a,f);return a});