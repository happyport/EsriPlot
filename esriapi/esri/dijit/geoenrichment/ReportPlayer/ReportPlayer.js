// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/geoenrichment/ReportPlayer/templates/ReportPlayer.html":'\x3cdiv class\x3d"esriGEReportPlayer esriGENonSelectable"\x3e\r\n\r\n    \x3cdiv data-dojo-attach-point\x3d"printBackgroundView" class\x3d"esriGEAbsoluteStretched"\x3e\x3c/div\x3e\r\n\r\n    \x3cdiv data-dojo-attach-point\x3d"normalViewDiv"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"playerToolbarDiv"\x3e\x3c/div\x3e\r\n\r\n        \x3cdiv data-dojo-attach-point\x3d"printableDivContainer" class\x3d"reportPalyer_printableDivContainer"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"printableDiv" class\x3d"reportPalyer_printableDiv"\x3e\r\n                \x3cdiv data-dojo-attach-point\x3d"reportContainerDiv"\x3e\x3c/div\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n\r\n        \x3cdiv class\x3d"reportPlayer_sidePageNavigator" data-dojo-attach-point\x3d"sidePageNavigator"\x3e\r\n            \x3cdiv class\x3d"reportPlayer_paginationArrowUp" data-dojo-attach-point\x3d"prevPageButton"\x3e\x3c/div\x3e\r\n            \x3cdiv class\x3d"reportPlayer_paginationArrowDown" data-dojo-attach-point\x3d"nextPageButton"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n\r\n        \x3cdiv data-dojo-attach-point\x3d"playerAfterToolbarDiv" class\x3d"reportPlayer_playerAfterToolbarDiv"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv data-dojo-attach-point\x3d"errorViewDiv" class\x3d"esriGEReportPlayerErrorMessage"\x3e\r\n        ${nls.cantPlayReportError}\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/geoenrichment/ReportPlayer/ReportPlayer","dojo/_base/declare dojo/_base/lang esri/dijit/geoenrichment/promise/all esri/dijit/geoenrichment/Deferred esri/dijit/geoenrichment/when dojo/on dojo/keys dojo/dom-class dijit/_WidgetBase dijit/_TemplatedMixin ./config ./playerSupports/_CommandSupport ./playerSupports/_LogoSupport ./playerSupports/_MapSupport ./playerSupports/_PageNavigationSupport ./playerSupports/_PrintSupport ./playerSupports/_ReportContainersSwitcher ./playerSupports/_SmartLayoutSupport ./playerSupports/_ZoomSupport ./playerSupports/_WaitingSupport ./supportClasses/PlayerConfigurator ./supportClasses/PlayerToFullScreenAnimator ./toolbar/PlayerToolbar ./ReportPlayerViewModel ./PlayerResizeModes ./PlayerThemes ./PlayerViewModes ./ReportPlayerState ./DataProviderGE esri/dijit/geoenrichment/utils/DelayUtil esri/dijit/geoenrichment/utils/DeviceUtil esri/dijit/geoenrichment/utils/DomUtil esri/dijit/geoenrichment/utils/InvokeUtil esri/dijit/geoenrichment/utils/async/AsyncQueue dojo/text!./templates/ReportPlayer.html dojo/i18n!esri/nls/jsapi ./_devConfig".split(" "),
function(w,g,x,r,d,t,y,h,z,A,B,C,D,E,F,G,H,I,J,K,k,u,L,M,n,N,l,p,O,q,P,f,Q,R,S,m,T){m=m.geoenrichment.dijit.ReportPlayer.ReportPlayer;return w([z,A,C,D,E,G,H,I,J,F,K],{templateString:S,nls:m,dataProvider:null,exportCommands:null,config:null,theme:void 0,viewMode:void 0,enableDataDrilling:void 0,showDataDrillingInsidePanel:void 0,showToolbarInPopup:void 0,showAreaTitle:void 0,scaleSlidesToFitWindow:void 0,showCloseButton:!1,showToFullScreenAnimation:!1,allowAutoOrientation:!0,mobileLandscapeViewMode:void 0,
canAddMoreAreas:!1,resizeMode:void 0,printConfig:{subtitle:m.preparedByEsri,printDialogClass:"esri/dijit/geoenrichment/ReportPlayer/printing/PageOptionsDialog/PageOptionsDialog"},showProgressBar:!0,defaultZoomBehavior:void 0,nlsMap:null,isDataDrillingPlayer:!1,isPlayerOnServer:!1,_viewModel:null,_reportData:null,_analysisAreaIndex:0,_originalAreaViewMode:null,_showAllAreasSideBySide:!1,playerToolbar:null,postCreate:function(){this.config=g.mixin(B,this.config);this._viewModel=new (this._getViewModelClass());
this._setUpDataProvider();k.configurePlayer(this);this._initToolbar();this._initContainerSwither();this._initSmartLayout();this._initCommands();this._initPageNavigationControls();this._initZoomControls();this._applyTheme();this._showError(!1);this._initProgressController();P.isMobileDevice()&&(h.add(this.domNode,"esriGEReportPlayerMobile"),this._setUpMobileOrientationHandling())},_setUpDataProvider:function(){this.dataProvider=this.dataProvider||new O;this.exportCommands&&this.exportCommands.forEach(function(a){this.dataProvider.registerCommand(a)},
this)},_orientationDfd:null,_setUpMobileOrientationHandling:function(){var a=this;this.allowAutoOrientation&&this.own(t(window,"orientationchange",function(){a._orientationDfd&&a._orientationDfd.resolve("cancel");var b=a._orientationDfd=new r;a._showWaiting(b.promise);b.promise.then(function(c){"cancel"!==c&&(a._setViewMode(a.viewMode),a.refresh())});d(a.getRenderPromise(),function(){q.delay(500).then(b.resolve,b.resolve)})}))},_getViewModelClass:function(){return M},_setViewMode:function(a){this.viewMode=
a;this.defaultZoomBehavior=null;k.configurePlayer(this);this._refreshZoomControls()},_initToolbar:function(){var a=this;this.playerToolbar=(new L({player:this,popupButtonDiv:this.playerAfterToolbarDiv,showToolbarInPopup:this.showToolbarInPopup,showAreaTitle:this.showAreaTitle,stretchToolbarNode:!this.showToolbarInPopup&&(this.resizeMode===n.FIT_WINDOW?document.body:this.domNode),showCloseButton:this.showCloseButton,canAddMoreAreas:this.canAddMoreAreas,onShowAnalysisAreaAt:function(b){a.showAnalysisAreaAt(b)},
onCompareAreasSideBySide:function(){a._showAllAnalysisAreasSideBySide()},onShowPageAt:function(b){a.showPageAt(b)},isScrollShown:function(){var b=a.getCurrentReportContainer();return b&&b.isScrollShown&&b.isScrollShown()},onClose:function(){a._onClose()},onAddMoreAreas:function(){a.onAddMoreAreas()},onRemoveAreas:function(b){a.onAreasPreRemoved(b);b.forEach(function(a){a.hidden=!0});if(a.viewMode===l.PANELS_IN_STACK_ALL)if(2>a.getAnalysisAreas().filter(function(a){return!a.hidden}).length)a._setAllAreasVisible(!1);
else{var c={};b.forEach(function(a){c[a.index]=!1});a.getCurrentReportContainer().setAreasVisibilityState(c,{append:!0});a._updateAreaSelect()}else a.getCurrentAnalysisArea().hidden?a.refresh():a._updateAreaSelect();a.onAreasRemoved(b)}})).placeAt(this.playerToolbarDiv);this.own(this.playerToolbar);this.showCloseButton&&this.own(t(window,"keyup",function(b){a.getWaitingPromise()||p.isViewingDataDrillingZoom||b.keyCode===y.ESCAPE&&a._onClose()}));f.hide(this.playerToolbarDiv)},_applyTheme:function(){h.remove(this.domNode,
"playerThemeDark playerThemeLight");h.add(this.domNode,this.theme===N.DARK?"playerThemeDark":"playerThemeLight");this.playerToolbar.setTheme(this.theme)},playReport:function(a,b){return this._showWaiting(this._callAfterRendering("_doPlayReport",[a,b]))},_doPlayReport:function(a,b){this.playerToolbar.closePopup();var c=this;this._showError(!1);this._progressController&&this._progressController.reset();this.showToFullScreenAnimation&&this.resizeMode===n.FIT_WINDOW&&u.animateTo(this);this.dataProvider._onCreateReportStarted=
function(){c._viewModel.preInitialize()};this._viewModel.reset();return d(this.dataProvider.getReportData(a,{progressCallback:function(a){c._progressController&&c._progressController.setLoadDataProgress(a)}}),function(a){if(c.viewMode===l.PANELS_IN_STACK_ALL){var e=c.viewMode;1<a.analysisAreas.length&&!a.isMultiFeature?c._originalAreaViewMode||(c._showAllAreasSideBySide=!0,c._originalAreaViewMode=k.getDefaultViewMode(c)):(c._showAllAreasSideBySide=!1,e=c._originalAreaViewMode||k.getDefaultViewMode(c));
c._setViewMode(e)}return c.setReportData(a,b)},function(a){c._showError(a)})},refresh:function(a){return this._reportData&&d(this.setReportData(this._reportData,{waitUntilAllContentIsReady:!(!a||!a.waitUntilAllContentIsReady)}),function(){this.showPageAt(0);return this.resize()}.bind(this))},_isDataBeingSetFlag:!1,_notifyShownPendingFlag:!1,setReportData:function(a,b){return this._showWaiting(this._callAfterRendering("_doSetReportData",[a,b]))},_doSetReportData:function(a,b){var c=this;b=b||{};this._reportData=
a;f.show(this.playerToolbarDiv);if(a){this._isDataBeingSetFlag=!0;p.isAnimationSuspended=!0;this.onSetReportDataStart();var e=new r;this._viewModel.setAnimationAllowed(!b.disableAnimation);this._configureViewModel(a);q.delay(0).then(function(){if(1===a.analysisAreas.length||a.isMultiFeature)c._destroyAllContainers(),c._resetMapBuilder(),c._applyReportData({analysisAreaIndex:0,rerenderContent:!0}).then(e.resolve,e.reject);else{var v=function(){for(;0<=d&&a.analysisAreas[d].hidden;)d--;0>d?e.resolve():
c._applyReportData({analysisAreaIndex:d--,rerenderContent:!1}).then(function(){setTimeout(v,0)},e.reject)};!1!==b._resetLoadedContents&&(c._destroyAllContainers(),c._resetMapBuilder());var d=a.analysisAreas.length-1;v()}});this._progressController&&this._progressController.setNumAreas(a.analysisAreas.length);this._progressController&&this._progressController.setLoadDataProgress(1);return e.promise.then(function(){return c._progressController&&c._progressController.finalize()}).otherwise(function(a){c._showError(a)}).always(function(){var a=
c.getCurrentReportContainer();if(a&&a.domNode)return q.delay(300).then(function(){c._isDataBeingSetFlag=!1;c._notifyShownPendingFlag=!f.isNodeInLayout(c.domNode);p.isAnimationSuspended=!1;c.onSetReportDataEnd();c._emitPendingResizedEvent();c._progressController&&c._progressController.reset();if(b.waitUntilAllContentIsReady)return c.getRenderPromise()})})}this._showError(!0)},showAnalysisAreaAt:function(a){return this._callAfterRendering("_doShowAnalysisAreaAt",[a])},_doShowAnalysisAreaAt:function(a){var b=
this;return d(this._setAllAreasVisible(!1),function(){if(b._analysisAreaIndex!==a&&b.getAnalysisAreas()[a]&&!b.getAnalysisAreas()[a].hidden)return b._applyReportData({analysisAreaIndex:a,rerenderContent:!1})})},_showAllAnalysisAreasSideBySide:function(){return this._callAfterRendering("_doShowAllAnalysisAreasSideBySide")},_doShowAllAnalysisAreasSideBySide:function(){return this._setAllAreasVisible(!0)},_setAllAreasVisible:function(a){if(this._showAllAreasSideBySide!==a)return a?(this._showAllAreasSideBySide=
!0,this._originalAreaViewMode=this.viewMode===l.PANELS_IN_STACK_ALL?k.getDefaultViewMode(this):this.viewMode,this._setViewMode(l.PANELS_IN_STACK_ALL)):(this._showAllAreasSideBySide=!1,this._setViewMode(this._originalAreaViewMode),this._originalAreaViewMode=null),this.refresh()},_applyReportData:function(a){var b=this;a=a||{};var c=this._reportData&&this._reportData.isMultiFeature?0:a.analysisAreaIndex||0,e=!1!==a.rerenderContent;this._analysisAreaIndex=c;this._showError(!this._reportData);if(this._reportData)return d(this._viewModel.initialize(this._reportData.isClassic,
this.viewMode),function(){return b._setReportContainer(e)?b._doApplyTemplateJson({analysisAreaIndex:c}):b._updateAreaSelect()})},_doApplyTemplateJson:function(a){var b=this,c=this.getCurrentReportContainer(),e=c.fromJson(g.clone(this._reportData.templateJson),{waitUntilAllContentIsReady:!0,progressCallback:function(c){b._progressController&&b._progressController.setProgressForAreaAt(c,a.analysisAreaIndex)},analysisAreaIndex:a.analysisAreaIndex}),f=c.getPagePromise?c.getPagePromise():e,c=c.getContentPromise?
c.getContentPromise():e;this._registerContainerLoadPromise(c||f);this._updateAreaSelect();return d(f,function(){b._setCurrentContainerLoaded();b.showPageAt(b._currentPageIndex);return b.resize()})},_updateAreaSelect:function(){this.playerToolbar.updateAreaSelect({analysisAreas:this._reportData.analysisAreas,combinedAreasInfo:this._reportData.combinedAreasInfo,currentAreaIndex:this._showAllAreasSideBySide?"all":this.getCurrentAnalysisAreaIndex(),isMultiFeature:this._reportData.isMultiFeature})},getReportData:function(){return this._reportData},
getReportTitle:function(){return this._reportData&&this._reportData.reportTitle||""},getCurrentAnalysisAreaIndex:function(){return this._analysisAreaIndex},getCurrentAnalysisArea:function(){return this._reportData&&this._reportData.analysisAreas[this._analysisAreaIndex]},getAnalysisAreas:function(){return this._reportData&&this._reportData.analysisAreas},reportDataToJson:function(a){return this._showWaiting(this.dataProvider.reportDataToJson(this.getReportData(),a))},reportDataFromJson:function(a,
b){var c=this;this._showError(!1);return this._showWaiting(d(this.dataProvider.reportDataFromJson(a),function(a){return c.setReportData(a,b)}))},_configureViewModel:function(a){var b=this;this._viewModel.setTheme(this._reportData.templateJson.theme);this._viewModel.enableDataDrilling=this.enableDataDrilling;this._viewModel.showDataDrillingInsidePanel=this.showDataDrillingInsidePanel;this._viewModel.setDynamicReportInfo({fieldData:this._reportData.fieldData,analysisAreas:this._reportData.analysisAreas,
combinedAreasInfo:this._reportData.combinedAreasInfo,infographicOptions:this._reportData.infographicOptions,attachmentsStore:this._reportData.attachmentsStore,createMapFunc:g.hitch(this,this._createMap),reportType:this._reportData.reportType,reportObject:this._reportData.reportObject,isClassic:this._reportData.isClassic,isMultiFeature:this._reportData.isMultiFeature,isFixedDataMode:!this._reportData.config.geoenrichmentUrl,geClient:this._reportData.geClient,templateVariableProvider:this._reportData.templateVariableProvider,
countryID:this._reportData.config.countryID,hierarchy:this._reportData.config.hierarchy});this._viewModel.getDynamicImageFunc=g.hitch(this,this._getReportLogo);this._viewModel.enrichFieldData=function(a){return b.dataProvider.enrichFieldData(a,g.mixin({analysisAreas:b._reportData.analysisAreas,fieldData:b._reportData.fieldData},b._reportData.config))}},notifyShown:function(){!this._isDataBeingSetFlag&&this._notifyShownPendingFlag&&(this.getCurrentReportContainer()&&this.getCurrentReportContainer().notifyShown(),
this._notifyShownPendingFlag=!1)},_isErrorShown:!1,_showError:function(a){T.emulateErrors.playerError&&(a=!0);f[a?"hide":"show"](this.printableDivContainer);f[a?"show":"hide"](this.errorViewDiv);h[a?"add":"remove"](this.domNode,"esriGEReportPlayerError");this._isErrorShown=!!a;a&&f.hide(this.sidePageNavigator);this.playerToolbar.setErrorShown(!!a);a&&(this._progressController&&this._progressController.reset(),console.log(a),this.onError(a))},isErrorShown:function(){return this._isErrorShown},setPrintMode:function(a){h[a?
"add":"remove"](this.domNode,"esriGEReportPlayerInPrinting")},resize:function(a,b){this._resize({width:a,height:b});this._updatePageNavigator();this._updateZoomControls();this.playerToolbar.update()},_pendingResizeEvent:null,_emitResizedEvent:function(a){this._pendingResizeEvent={isPaginating:!!a};this._isDataBeingSetFlag||this._emitPendingResizedEvent()},_emitPendingResizedEvent:function(){this._pendingResizeEvent&&(this.onResized(this._pendingResizeEvent.isPaginating),this._pendingResizeEvent=null)},
_onClose:function(){var a;this.showToFullScreenAnimation&&this.resizeMode===n.FIT_WINDOW&&(a=u.animateFrom(this));d(a,function(){this.onClose()}.bind(this))},getVisualState:function(){return{type:"reportPlayer",viewMode:this.viewMode,reportContainers:this.getAllReportContainers().map(function(a){return a.getVisualState&&a.getVisualState()})}},setVisualState:function(a){return this._callAfterRendering("_doSetVisualState",[a])},_doSetVisualState:function(a){var b=a&&this.getAllReportContainers().map(function(c,
b){return c.setVisualState&&c.setVisualState(a.reportContainers[b])});return x(b)},_renderQueue:null,getRenderPromise:function(){return this._renderQueue&&this._renderQueue.getPromise()},_registerContainerLoadPromise:function(a){this._renderQueue=this._renderQueue||new R;this._renderQueue.add(a);this.playerToolbar.setContentLoadPromise(this.getRenderPromise())},_safeFuncCaller:null,_callAfterRendering:function(a,b){var c=this;this._safeFuncCaller=this._safeFuncCaller||{};this._safeFuncCaller[a]=function(){return c[a].apply(c,
b)};return d(this.getRenderPromise(),function(){return Q.invoke(c._safeFuncCaller,a)})},onSetReportDataStart:function(){},onSetReportDataEnd:function(){},onResized:function(a){},onClose:function(){},onError:function(a){},onAddMoreAreas:function(){},onAreasPreRemoved:function(a){},onAreasRemoved:function(a){}})});