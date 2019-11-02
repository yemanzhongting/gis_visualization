/*
 COPYRIGHT 2009 ESRI

 TRADE SECRETS: ESRI PROPRIETARY AND CONFIDENTIAL
 Unpublished material - all rights reserved under the
 Copyright Laws of the United States and applicable international
 laws, treaties, and conventions.

 For additional information, contact:
 Environmental Systems Research Institute, Inc.
 Attn: Contracts and Legal Services Department
 380 New York Street
 Redlands, California, 92373
 USA

 email: contracts@esri.com
 */
//>>built
define("esri/process/Processor","esri/sniff esri/kernel dojo/_base/declare dojo/Deferred dojo/_base/lang dojo/_base/array dojo/Evented esri/workers/RequestClient esri/layers/GraphicsLayer".split(" "),function(g,n,h,p,b,c,k,l,f){return h([k],{declaredClass:"esri.process.Processor",layers:null,results:null,passFeatures:!0,drawFeatures:!0,requireWorkerSupport:!0,fetchWithWorker:!1,workerCallback:null,workerClient:null,_started:null,_handlers:null,constructor:function(a){a=a||{};b.mixin(this,a);!g("esri-workers")&&
(!1!==this.requireWorkerSupport||!1!==a.requireWorkerSupport)?(console.log("Browser doesn't support workers \x26 worker support is required for this processor"),this.addLayer=this.setMap=this.start=this.runProcess=function(){},this._disabled=!0):(this._handlers={},this._notifyProcessStart=b.hitch(this,this._notifyProcessStart),this._sendFeaturesFromTask=b.hitch(this,this._sendFeaturesFromTask),this._sendFeaturesFromLayer=b.hitch(this,this._sendFeaturesFromLayer),!1!==a.autostart&&this.start())},addLayer:function(a,
m){var d=a._task,c=this._handlers[a.id]=[],e="complete";!1===this.drawFeatures&&(a._params.drawMode=!1);this.fetchWithWorker?(this.workerClient||(this.workerClient=l.getClient(this.workerCallback)),d.requestOptions={workerOptions:{worker:this.workerClient}},this.passFeatures&&c.push(d.on(e,b.partial(this._notifyProcessStart,a)))):this.passFeatures?(e=this.drawFeatures?"graphic-draw":"graphic-add",c.push(a.on(e,b.partial(this._sendFeaturesFromLayer,a)))):c.push(d.on(e,b.partial(this._sendFeaturesFromTask,
a)));!0!==m&&a.graphics&&this.runProcess(a.graphics,a.id)},removeLayer:function(a){c.forEach(this._handlers[a.id],function(a){a.remove()});delete this._handlers[a.id]},setMap:function(a){if(this.map)if(a!=this.map)this.unsetMap();else return;var b=this;c.forEach(this.layers,b.removeLayer);c.forEach(a.graphicsLayerIds,function(d){b.addLayer(a.getLayer(d))});this._handlers.map=[a.on("layer-add",function(a){a=a.layer;a.isInstanceOf(f)&&b.addLayer(a)}),a.on("layer-remove",function(a){a=a.layer;a.isInstanceOf(f)&&
b.removeLayer(a)})];this.map=a},unsetMap:function(){this.map&&(c.forEach(this._handlers.map,function(a){a.remove()}),delete this._handlers.map,c.forEach(this.layers,this.removeLayer),this.map=null)},start:function(){this.map?this.setMap(this.map):this.layers&&(b.isArray(this.layers)||(this.layers=[this.layers]),c.forEach(this.layers,this.addLayer));this._started=!0;this.emit("start",{processor:this});console.log("processor started")},stop:function(){this._started=!1;for(var a in this._handlers)this._handlers.hasOwnProperty(a)&&
(this._handlers[a].remove(),delete this._handlers[a]);this.emit("stop",{processor:this});console.log("processor stopped")},runProcess:function(a,b){},_sendFeaturesFromTask:function(){},_sendFeaturesFromLayer:function(){},_notifyProcessStart:function(){}})});