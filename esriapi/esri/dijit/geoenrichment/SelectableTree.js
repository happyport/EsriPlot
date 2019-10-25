// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/SelectableTree","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Evented ./when dojo/store/util/QueryResults dojo/store/util/SimpleQueryEngine dstore/QueryResults".split(" "),function(n,k,f,p,l,m,q,r){var h=function(a,b){this.storage=a;this.data=b};h.prototype={storage:null,data:null,filter:function(a){return this.storage._filter(this.data,a)},sort:function(a,b){return this.storage._sort(this.data,a,b)},fetch:function(){return this.storage._fetchRange(this.data)},
fetchRange:function(a){return this.storage._fetchRange(this.data,a)},mayHaveChildren:function(a){return this.storage.mayHaveChildren(a)},getChildren:function(a){return this.storage.getChildren(a,{returnCollection:!0})}};return n(p,{idProperty:"id",bindingProperty:null,autoIdentify:!0,queryEngine:q,isDstoreTree:!1,root:null,data:null,_hash:null,_autoId:null,storage:null,constructor:function(a,b){k.mixin(this,b);this.storage=this;this.root={children:a||[]};k.mixin(this._provideBinding(this.root),{deepness:-1,
selectCount:0,leafCount:0});this._hash={};this.idProperty&&this.autoIdentify&&(this._autoId=1);this._initializeNode(this.root,0);this.data=this.root.children},_provideBinding:function(a){var b=this._getBinding(a);b||(a[this.bindingProperty]=b={});return b},_getBinding:function(a){return this.bindingProperty?a[this.bindingProperty]:a},_initializeNode:function(a,b){var c=this._provideBinding(a);c.selected=!!c.selected;a.children?(c.selectCount=0,c.leafCount=0,f.forEach(a.children,function(d){this._registerNode(d);
var e=this._provideBinding(d);e.parent=a;e.deepness=b;this._initializeNode(d,b+1);c.selectCount+=e.selectCount;c.leafCount+=e.leafCount},this),c.selectCount)?c.selectCount===c.leafCount&&(c.selected=!0):c.selected=!1:("number"!==typeof c.leafCount&&(c.leafCount=1),c.selectCount=c.selected?c.leafCount:0)},isOwned:function(a,b){return b||a!==this.root?this.get(this.getIdentity(a))===a:!0},_registerNode:function(a){this._autoId&&void 0===a[this.idProperty]&&(a[this.idProperty]=this._autoId++);this.idProperty&&
(this._hash[a[this.idProperty]]=a)},_unregisterNode:function(a){this.isOwned(a,!0)&&delete this._hash[a[this.idProperty]]},clear:function(){this.root.children.length&&(f.forEach(this.root.children,function(a){this._unbindNode(a)},this),this.data=this.root.children=[])},destroy:function(){this.clear()},_unbindNode:function(a){a.children&&f.forEach(a.children,function(a){delete this._getBinding(a).parent;this._unbindNode(a)},this);this._unregisterNode(a);var b=this._getBinding(a);b.parent&&(this._incrementCounts(b.parent,
-b.selectCount,-b.leafCount),delete b.parent);b!==a&&delete a[this.bindingProperty]},removeNodes:function(a,b){f.forEach(a&&a.slice(),function(a){if(this.isOwned(a,!0)){var b=this._getBinding(a).parent,c=f.indexOf(b.children,a);0<=c&&b.children.splice(c,1);this._unbindNode(a)}},this);!b&&this.emit("updated")},addNodes:function(a,b,c){if(!b)b=this.root;else if(!this.isOwned(b)||!b.children)return!1;var d=this._getBinding(b).deepness+1,e=0,g=0;f.forEach(a,function(a){if(!this.isOwned(a)){b.children.push(a);
this._registerNode(a);var c=this._provideBinding(a);c.parent=b;c.deepness=d;this._initializeNode(a,d+1);e+=c.selectCount;g+=c.leafCount}},this);this._incrementCounts(b,e,g);!c&&this.emit("updated");return!0},select:function(a,b){return this.changeSelect(a,!0,b)},deselect:function(a){this.changeSelect(a,!1)},changeSelect:function(a,b,c){c=c||this.root.leafCount;var d=a&&this._getBinding(a);if(d){b=!!b;var e=(b?d.leafCount:0)-d.selectCount,g=0>e||this.root.selectCount+e<=c;if(!a.children)return g&&
(d.selected=b,e&&this._incrementCounts(a,e)),g;g&&(d.selected=b);f.forEach(a.children,function(a){this.changeSelect(a,b,c)},this);return g}},_incrementCounts:function(a,b,c){a=this._getBinding(a);a.selectCount+=b;c&&(a.leafCount+=c);a.selectCount?a.selectCount==a.leafCount&&(a.selected=!0):a.selected=!1;a.parent&&this._incrementCounts(a.parent,b,c)},getSelectionState:function(a){if(!this.isOwned(a))return!1;a=this._getBinding(a);return a.selectCount&&a.selectCount!=a.leafCount?"mixed":a.selected=
!!a.selectCount},getSelectedNodes:function(a){return this.getDescendingNodes(this.root,!0,a)},getDescendingNodes:function(a,b,c){if(!this.isOwned(a))return[];var d=[];this._collectNodes(a.children,d,b,c);return d},_collectNodes:function(a,b,c,d){f.forEach(a,function(a){var e=this._getBinding(a),f=null===c||void 0===c?e.leafCount:c?e.selectCount:e.leafCount-e.selectCount;f&&(!a.children||!d&&f==e.leafCount?b.push(a):this._collectNodes(a.children,b,c,d))},this)},inspectChildren:function(a,b,c,d){d&&
(b=k.hitch(d,b));a=a||this.root;(a=a.children)&&c&&(a=a.slice(),a.sort(c));return f.every(a,function(a){var d=b(a);return null===d?!1:!1!==d&&a.children?this.inspectChildren(a,b,c):!0},this)},updateExpandedNodes:function(a,b){for(var c in this._hash)this.updateExpand(this._hash[c],!!a[c]);this._updateOddEven(null,b)},updateExpand:function(a,b,c,d){if(a){var e=!1;a.children&&(a=this._getBinding(a),a.expanded!==b&&(e=!0,a.expanded=b));b={};e&&c&&this._updateOddEven(b,d);return b}},_updateOddEven:function(a,
b){var c=1;this.inspectChildren(null,function(b){!1!==b.visible&&(c=1-c);var d=this._getBinding(b);a&&d.isOdd!==c&&(a[this.getIdentity(b)]=c);d.isOdd=c;return!(!b.children||!d.expanded)},b,this)},isOdd:function(a){return(a=this._getBinding(a))&&a.isOdd},get:function(a){return this._hash[a]},getIdentity:function(a){return this.idProperty?a[this.idProperty]:null},query:function(a,b){return m(this._query(this.data,a,b))},_query:function(a,b,c){return this.queryEngine(b,c)(a)},filter:function(a){return this._filter(this._data,
a)},_filter:function(a,b){a=this._query(a,b);return new h(this.storage,a)},sort:function(a,b){return this._sort(this.data,a,b)},_sort:function(a,b,c){if("function"===typeof b)a=a.slice(),a.sort(d);else{var d;d=Array.isArray(b)?b.map(function(a){return{attribute:a.property,descending:a.descending}}):[{attribute:b,descending:c}];a=this._query(a,{},{sort:d})}return new h(this.storage,a)},mayHaveChildren:function(a){return!!a.children},getChildren:function(a,b){var c=this.isOwned(a,!0)?a.children:null;
a=this.isDstoreTree||b&&b.returnCollection;b=this.queryEngine({},a?null:b)(c||[]);return a?new h(this.storage,b):m(b)},fetch:function(){return this._fetchRange(this.data)},fetchRange:function(a){return this._fetchRange(this.data,a)},_fetchRange:function(a,b){return r(l(b?a.slice(b.start,b.end):a.slice()),{totalLength:l(a.length)})}})});