// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.
//>>built
define("esri/tasks/datareviewer/BatchValidationTask","dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/Deferred dojo/has ./_DRSBaseTask ./BatchValidationJob ./BatchValidationJobInfo ../../request ../../kernel".split(" "),function(p,q,h,l,u,v,r,w,m,x){p=p(v,{declaredClass:"esri.tasks.datareviewer.BatchValidationTask",constructor:function(c){this.onGetJobIdsComplete=h.hitch(this,this.onGetJobIdsComplete);this.onScheduleJobComplete=h.hitch(this,this.onScheduleJobComplete);this.onEditJobComplete=
h.hitch(this,this.onEditJobComplete);this.onDeleteJobComplete=h.hitch(this,this.onDeleteJobComplete);this.onEnableJobComplete=h.hitch(this,this.onEnableJobComplete);this.onDisableJobComplete=h.hitch(this,this.onDisableJobComplete);this.onGetJobDetailsComplete=h.hitch(this,this.onGetJobDetailsComplete);this.onGetJobExecutionDetailsComplete=h.hitch(this,this.onGetJobExecutionDetailsComplete);this.onCancelJobExecutionComplete=h.hitch(this,this.onCancelJobExecutionComplete);this.onExecuteJobComplete=
h.hitch(this,this.onExecuteJobComplete);this.onGetScheduledJobsListComplete=h.hitch(this,this.onGetScheduledJobsListComplete);this.onGetAdhocJobsListComplete=h.hitch(this,this.onGetAdhocJobsListComplete)},getJobIds:function(){var c=this._successHandler,g=this._errorHandler,e=this._appendQueryParams,f=this._url+"/BatchValidation",f=e(f),a=new l;m({callbackParamName:"callback",url:f,content:{f:"json"}}).then(h.hitch(this,function(b,d){if(void 0!==b.error)d=Error(),d.message=b.error.message,d.code=b.error.code,
g(d,a);else try{if(void 0===b.scheduledJobs||void 0===b.adhocJobs)g(null,a);else{var n={scheduledJobs:[],adhocJobs:[]};q.forEach(b.scheduledJobs,function(b,d){n.scheduledJobs.push(b.id)});q.forEach(b.adhocJobs,function(b,d){n.adhocJobs.push(b.id)});c(n,"onGetJobIdsComplete",a)}}catch(k){g(k,a)}}),function(b,d){g(b,a)});return a},scheduleJob:function(c){var g=this._successHandler,e=this._errorHandler,f=this._appendQueryParams,a=this._url+"/BatchValidation/scheduleNewJob",a=f(a),b=new l;m({callbackParamName:"callback",
url:a,content:c.toJSONScheduleParameters()}).then(h.hitch(this,function(d,a){if(void 0!==d.error)a=Error(),a.message=d.error.message,a.code=d.error.code,e(a,b);else try{void 0===d.scheduledJobId?e(null,b):g({jobId:d.scheduledJobId},"onScheduleJobComplete",b)}catch(k){e(k,b)}}),function(d,a){e(d,b)});return b},editJob:function(c,g){var e=this._successHandler,f=this._errorHandler,a=this._appendQueryParams;c=this._url+"/BatchValidation/scheduledJobs/"+c+"/editJob";c=a(c);var b=new l;m({callbackParamName:"callback",
url:c,content:g.toJSONEditParameters()}).then(h.hitch(this,function(d,a){if(void 0!==d.error)a=Error(),a.message=d.error.message,a.code=d.error.code,f(a,b);else try{void 0!==d.edited&&"false"===d.edited?f(null,b):void 0!==d.edited?e({edited:d.edited},"onEditJobComplete",b):f(null,b)}catch(k){f(k,b)}}),function(d,a){f(d,b)});return b},deleteJob:function(c){var g=this._successHandler,e=this._errorHandler,f=this._appendQueryParams;c=this._url+"/BatchValidation/scheduledJobs/"+c+"/deleteJob";c=f(c);var a=
new l;m({callbackParamName:"callback",url:c,content:{f:"json"}}).then(h.hitch(this,function(b,d){if(void 0!==b.error)d=Error(),d.message=b.error.message,d.code=b.error.code,e(d,a);else try{void 0!==b.deleted?g({deleted:b.deleted},"onDeleteJobComplete",a):e(null,a)}catch(n){e(n,a)}}),function(b,d){e(b,a)});return a},enableJob:function(c){var g=this._successHandler,e=this._errorHandler,f=this._appendQueryParams;c=this._url+"/BatchValidation/scheduledJobs/"+c+"/enableJob";c=f(c);var a=new l;m({callbackParamName:"callback",
url:c,content:{f:"json"}}).then(h.hitch(this,function(b,d){if(void 0!==b.error)d=Error(),d.message=b.error.message,d.code=b.error.code,e(d,a);else try{void 0!==b.enabled?g({enabled:b.enabled},"onEnableJobComplete",a):e(null,a)}catch(n){e(n,a)}}),function(b,d){e(b,a)});return a},disableJob:function(c){var g=this._successHandler,e=this._errorHandler,f=this._appendQueryParams;c=this._url+"/BatchValidation/scheduledJobs/"+c+"/disableJob";c=f(c);var a=new l;m({callbackParamName:"callback",url:c,content:{f:"json"}}).then(h.hitch(this,
function(b,d){if(void 0!==b.error)d=Error(),d.message=b.error.message,d.code=b.error.code,e(d,a);else try{void 0!==b.disabled?g({disabled:b.disabled},"onDisableJobComplete",a):e(null,a)}catch(n){e(n,a)}}),function(b,d){e(b,a)});return a},getJobDetails:function(c){var g=this._successHandler,e=this._errorHandler,f=this._appendQueryParams,a=this._url+"/BatchValidation/getJobDetails",a=f(a),b=new l;m({callbackParamName:"callback",url:a,content:{jobId:c,f:"json"}}).then(h.hitch(this,function(d,a){if(void 0!==
d.error)a=Error(),a.message=d.error.message,a.code=d.error.code,e(a,b);else try{var c=new r(d);g({jobDetails:c},"onGetJobDetailsComplete",b)}catch(t){e(t,b)}}),function(d,a){e(d,b)});return b},getJobExecutionDetails:function(c){var g=this._successHandler,e=this._errorHandler,f=this._appendQueryParams,a=this._url+"/BatchValidation/getJobExecutionDetails",a=f(a),b=new l;m({callbackParamName:"callback",url:a,content:{f:"json",jobId:c.toString()}}).then(h.hitch(this,function(d,a){if(void 0!==d.error)a=
Error(),a.message=d.error.message,a.code=d.error.code,e(a,b);else try{var c=new w(d);g({jobInfo:c},"onGetJobExecutionDetailsComplete",b)}catch(t){e(t,b)}}),function(a,c){e(a,b)});return b},cancelJobExecution:function(c){var g=this._successHandler,e=this._errorHandler,f=this._appendQueryParams,a=this._url+"/BatchValidation/cancelJob",a=f(a),b=new l;m({callbackParamName:"callback",url:a,content:{f:"json",jobId:c}}).then(h.hitch(this,function(a,c){if(void 0!==a.error)c=Error(),c.message=a.error.message,
c.code=a.error.code,e(c,b);else try{void 0!==a.canceled?g({canceled:a.canceled},"onCancelJobExecutionComplete",b):e(null,b)}catch(k){e(k,b)}}),function(a,c){e(a,b)});return b},executeJob:function(c){var g=this._successHandler,e=this._errorHandler,f=this._appendQueryParams,a=this._url+"/BatchValidation/executeJob",a=f(a),b=new l;m({callbackParamName:"callback",url:a,content:c.toJSONExecuteParameters()}).then(h.hitch(this,function(a,c){if(void 0!==a.error)c=Error(),c.message=a.error.message,c.code=
a.error.code,e(c,b);else try{void 0===a.adhocJobId?e(null,b):g({jobId:a.adhocJobId},"onExecuteJobComplete",b)}catch(k){e(k,b)}}),function(a,c){e(a,b)});return b},getScheduledJobsList:function(){var c=this._successHandler,g=this._errorHandler,e=this._appendQueryParams,f=this._url+"/BatchValidation/scheduledJobs",f=e(f),a=new l;m({callbackParamName:"callback",url:f,content:{f:"json"}}).then(h.hitch(this,function(b,d){if(void 0!==b.error)d=Error(),d.message=b.error.message,d.code=b.error.code,g(d,a);
else try{if(void 0===b.scheduledJobs)g(null,a);else{var e=[];q.forEach(b.scheduledJobs,function(a,b){null!==a&&void 0!==a&&e.push(new r(a))});c({scheduledJobs:e},"onGetScheduledJobsListComplete",a)}}catch(k){g(k,a)}}),function(b,c){g(b,a)});return a},getAdhocJobsList:function(){var c=this._successHandler,g=this._errorHandler,e=this._appendQueryParams,f=this._url+"/BatchValidation/adhocJobs",f=e(f),a=new l;m({callbackParamName:"callback",url:f,content:{f:"json"}}).then(h.hitch(this,function(b,d){if(void 0!==
b.error)d=Error(),d.message=b.error.message,d.code=b.error.code,g(d,a);else try{if(void 0===b.adhocJobs)g(null,a);else{var e=[];q.forEach(b.adhocJobs,function(a,b){null!==a&&void 0!==a&&e.push(new r(a))});c({adhocJobs:e},"onGetAdhocJobsListComplete",a)}}catch(k){g(k,a)}}),function(b,c){g(b,a)});return a},onGetJobIdsComplete:function(c){},onGetJobDetailsComplete:function(c){},onGetJobExecutionDetailsComplete:function(c){},onCancelJobExecutionComplete:function(c){},onExecuteJobComplete:function(c){},
onScheduleJobComplete:function(c){},onEditJobComplete:function(c){},onEnableJobComplete:function(c){},onDisableJobComplete:function(c){},onDeleteJobComplete:function(c){},onGetScheduledJobsListComplete:function(c){},onGetAdhocJobsListComplete:function(c){}});u("extend-esri")&&h.setObject("tasks.datareviewer.BatchValidationTask",p,x);return p});