// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/htmlToSvg/supportClasses/text/SiblingsUtil",[],function(){return{hideNextSiblings:function(a){var b=[];for(a=a.nextSibling;a;)b.push({style:a.style,display:a.style.display}),a.style.display="none",a=a.nextSibling;return b},showNextSiblings:function(a){a&&a.forEach(function(a){a.style.display=a.display||""})}}});