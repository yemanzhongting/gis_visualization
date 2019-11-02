//>>built
require({cache:{"url:dojox/layout/resources/GridContainer.html":'\x3cdiv id\x3d"${id}" class\x3d"gridContainer" dojoAttachPoint\x3d"containerNode" tabIndex\x3d"0" dojoAttachEvent\x3d"onkeypress:_selectFocus"\x3e\n\t\x3cdiv dojoAttachPoint\x3d"gridContainerDiv"\x3e\n\t\t\x3ctable class\x3d"gridContainerTable" dojoAttachPoint\x3d"gridContainerTable" cellspacing\x3d"0" cellpadding\x3d"0"\x3e\n\t\t\t\x3ctbody\x3e\n\t\t\t\t\x3ctr dojoAttachPoint\x3d"gridNode" \x3e\n\t\t\t\t\t\n\t\t\t\t\x3c/tr\x3e\n\t\t\t\x3c/tbody\x3e\n\t\t\x3c/table\x3e\n\t\x3c/div\x3e\n\x3c/div\x3e'}});
define("dojox/layout/GridContainerLite","dojo/_base/kernel dojo/text!./resources/GridContainer.html dojo/_base/declare dojo/query dojo/_base/sniff dojo/dom-class dojo/dom-style dojo/dom-geometry dojo/dom-construct dojo/dom-attr dojo/_base/array dojo/_base/lang dojo/_base/event dojo/keys dojo/topic dijit/registry dijit/focus dijit/_base/focus dijit/_WidgetBase dijit/_TemplatedMixin dijit/layout/_LayoutWidget dojo/_base/NodeList dojox/mdnd/AreaManager dojox/mdnd/DropIndicator dojox/mdnd/dropMode/OverDropMode dojox/mdnd/AutoScroll".split(" "),
function(t,A,B,y,m,C,w,l,x,u,p,s,v,k,z,q,r,D,E,F,G,H){t=B("dojox.layout.GridContainerLite",[G,F],{autoRefresh:!0,templateString:A,dragHandleClass:"dojoxDragHandle",nbZones:1,doLayout:!0,isAutoOrganized:!0,acceptTypes:[],colWidths:"",constructor:function(a,b){this.acceptTypes=(a||{}).acceptTypes||["text"];this._disabled=!0},postCreate:function(){this.inherited(arguments);this._grid=[];this._createCells();this.subscribe("/dojox/mdnd/drop","resizeChildAfterDrop");this.subscribe("/dojox/mdnd/drag/start",
"resizeChildAfterDragStart");this._dragManager=dojox.mdnd.areaManager();this._dragManager.autoRefresh=this.autoRefresh;this._dragManager.dragHandleClass=this.dragHandleClass;this.doLayout?this._border={h:m("ie")?l.getBorderExtents(this.gridContainerTable).h:0,w:6==m("ie")?1:0}:(w.set(this.domNode,"overflowY","hidden"),w.set(this.gridContainerTable,"height","auto"))},startup:function(){this._started||(this.isAutoOrganized?this._organizeChildren():this._organizeChildrenManually(),p.forEach(this.getChildren(),
function(a){a.startup()}),this._isShown()&&this.enableDnd(),this.inherited(arguments))},resizeChildAfterDrop:function(a,b,c){return this._disabled?!1:q.getEnclosingWidget(b.node)==this?(b=q.byNode(a),b.resize&&s.isFunction(b.resize)&&b.resize(),b.set("column",a.parentNode.cellIndex),this.doLayout&&(a=this._contentBox.h,l.getContentBox(this.gridContainerDiv).h>=a&&w.set(this.gridContainerTable,"height",a-this._border.h+"px")),!0):!1},resizeChildAfterDragStart:function(a,b,c){return this._disabled?
!1:q.getEnclosingWidget(b.node)==this?(this._draggedNode=a,this.doLayout&&l.setMarginBox(this.gridContainerTable,{h:l.getContentBox(this.gridContainerDiv).h-this._border.h}),!0):!1},getChildren:function(){var a=new H;p.forEach(this._grid,function(b){y("\x3e [widgetId]",b.node).map(q.byNode).forEach(function(b){a.push(b)})});return a},_isShown:function(){if("open"in this)return this.open;var a=this.domNode;return"none"!=a.style.display&&"hidden"!=a.style.visibility&&!C.contains(a,"dijitHidden")},layout:function(){if(this.doLayout){var a=
this._contentBox;l.setMarginBox(this.gridContainerTable,{h:a.h-this._border.h});l.setContentSize(this.domNode,{w:a.w-this._border.w})}p.forEach(this.getChildren(),function(a){a.resize&&s.isFunction(a.resize)&&a.resize()})},onShow:function(){this._disabled&&this.enableDnd()},onHide:function(){this._disabled||this.disableDnd()},_createCells:function(){0===this.nbZones&&(this.nbZones=1);for(var a=this.acceptTypes.join(","),b=0,c=this._computeColWidth();b<this.nbZones;)this._grid.push({node:x.create("td",
{"class":"gridContainerZone",accept:a,id:this.id+"_dz"+b,style:{width:c[b]+"%"}},this.gridNode)}),b++},_getZonesAttr:function(){return y(".gridContainerZone",this.containerNode)},enableDnd:function(){var a=this._dragManager;p.forEach(this._grid,function(b){a.registerByNode(b.node)});a._dropMode.updateAreas(a._areaList);this._disabled=!1},disableDnd:function(){var a=this._dragManager;p.forEach(this._grid,function(b){a.unregister(b.node)});a._dropMode.updateAreas(a._areaList);this._disabled=!0},_organizeChildren:function(){for(var a=
dojox.layout.GridContainerLite.superclass.getChildren.call(this),b=this.nbZones,c=Math.floor(a.length/b),d=a.length%b,g=0,h=0;h<b;h++){for(var e=0;e<c;e++)this._insertChild(a[g],h),g++;if(0<d){try{this._insertChild(a[g],h),g++}catch(f){console.error("Unable to insert child in GridContainer",f)}d--}else if(0===c)break}},_organizeChildrenManually:function(){for(var a=dojox.layout.GridContainerLite.superclass.getChildren.call(this),b=a.length,c,d=0;d<b;d++){c=a[d];try{this._insertChild(c,c.column-1)}catch(g){console.error("Unable to insert child in GridContainer",
g)}}},_insertChild:function(a,b,c){var d=this._grid[b].node,g=d.childNodes.length;if("undefined"===typeof c||c>g)c=g;this._disabled?(x.place(a.domNode,d,c),u.set(a.domNode,"tabIndex","0")):a.dragRestriction?(x.place(a.domNode,d,c),u.set(a.domNode,"tabIndex","0")):this._dragManager.addDragItem(d,a.domNode,c,!0);a.set("column",b);return a},removeChild:function(a){this._disabled?this.inherited(arguments):this._dragManager.removeDragItem(a.domNode.parentNode,a.domNode)},addService:function(a,b,c){kernel.deprecated("addService is deprecated.",
"Please use  instead.","Future");this.addChild(a,b,c)},addChild:function(a,b,c){a.domNode.id=a.id;dojox.layout.GridContainerLite.superclass.addChild.call(this,a,0);if(0>b||void 0===b)b=0;0>=c&&(c=0);try{return this._insertChild(a,b,c)}catch(d){console.error("Unable to insert child in GridContainer",d)}return null},_setColWidthsAttr:function(a){this.colWidths=s.isString(a)?a.split(","):s.isArray(a)?a:[a];this._started&&this._updateColumnsWidth()},_updateColumnsWidth:function(a){a=this._grid.length;
for(var b=this._computeColWidth(),c=0;c<a;c++)this._grid[c].node.style.width=b[c]+"%"},_computeColWidth:function(){var a=this.colWidths||[],b=[],c,d=0,g;for(g=0;g<this.nbZones;g++)b.length<a.length?(d+=1*a[g],b.push(a[g])):(c||(c=(100-d)/(this.nbZones-g),0>c&&(c=100/this.nbZones)),b.push(c),d+=1*c);if(100<d){a=100/d;for(g=0;g<b.length;g++)b[g]*=a}return b},_selectFocus:function(a){if(!this._disabled){var b=a.keyCode,c=null,d=D.getFocus().node,g=this._dragManager,h,e,f;if(d==this.containerNode)switch(d=
this.gridNode.childNodes,b){case k.DOWN_ARROW:case k.RIGHT_ARROW:h=!1;for(e=0;e<d.length;e++){b=d[e].childNodes;for(f=0;f<b.length;f++)if(c=b[f],null!==c&&"none"!=c.style.display){r.focus(c);v.stop(a);h=!0;break}if(h)break}break;case k.UP_ARROW:case k.LEFT_ARROW:d=this.gridNode.childNodes;h=!1;for(e=d.length-1;0<=e;e--){b=d[e].childNodes;for(f=b.length;0<=f;f--)if(c=b[f],null!==c&&"none"!=c.style.display){r.focus(c);v.stop(a);h=!0;break}if(h)break}}else if(d.parentNode.parentNode==this.gridNode){var n=
b==k.UP_ARROW||b==k.LEFT_ARROW?"lastChild":"firstChild";f=b==k.UP_ARROW||b==k.LEFT_ARROW?"previousSibling":"nextSibling";switch(b){case k.UP_ARROW:case k.DOWN_ARROW:v.stop(a);h=!1;for(var l=d;!h;){b=l.parentNode.childNodes;for(e=c=0;e<b.length&&!("none"!=b[e].style.display&&c++,1<c);e++);if(1==c)return;c=null===l[f]?l.parentNode[n]:l[f];"none"===c.style.display?l=c:h=!0}if(a.shiftKey){a=d.parentNode;for(e=0;e<this.gridNode.childNodes.length&&a!=this.gridNode.childNodes[e];e++);b=this.gridNode.childNodes[e].childNodes;
for(f=0;f<b.length&&c!=b[f];f++);(m("mozilla")||m("webkit"))&&e--;c=q.byNode(d);c.dragRestriction?z.publish("/dojox/layout/gridContainer/moveRestriction",this):(g.removeDragItem(a,d),this.addChild(c,e,f),u.set(d,"tabIndex","0"),r.focus(d))}else r.focus(c);break;case k.RIGHT_ARROW:case k.LEFT_ARROW:if(v.stop(a),a.shiftKey){a=0;if(null===d.parentNode[f])m("ie")&&b==k.LEFT_ARROW&&(a=this.gridNode.childNodes.length-1);else if(3==d.parentNode[f].nodeType)a=this.gridNode.childNodes.length-2;else{for(e=
0;e<this.gridNode.childNodes.length&&d.parentNode[f]!=this.gridNode.childNodes[e];e++)a++;(m("mozilla")||m("webkit"))&&a--}c=q.byNode(d);n=d.getAttribute("dndtype");n=null===n?c&&c.dndType?c.dndType.split(/\s*,\s*/):["text"]:n.split(/\s*,\s*/);h=!1;for(e=0;e<this.acceptTypes.length;e++)for(f=0;f<n.length;f++)if(n[f]==this.acceptTypes[e]){h=!0;break}if(h&&!c.dragRestriction){e=d.parentNode;f=0;if(k.LEFT_ARROW==b){b=a;if(m("mozilla")||m("webkit"))b=a+1;f=this.gridNode.childNodes[b].childNodes.length}d=
g.removeDragItem(e,d);this.addChild(c,a,f);u.set(d,"tabIndex","0");r.focus(d)}else z.publish("/dojox/layout/gridContainer/moveRestriction",this)}else{for(d=d.parentNode;null===c;)if(d=null!==d[f]&&3!==d[f].nodeType?d[f]:"previousSibling"===f?d.parentNode.childNodes[d.parentNode.childNodes.length-1]:d.parentNode.childNodes[m("ie")?0:1],(c=d[n])&&"none"==c.style.display){b=c.parentNode.childNodes;g=null;if("previousSibling"==f)for(e=b.length-1;0<=e;e--){if("none"!=b[e].style.display){g=b[e];break}}else for(e=
0;e<b.length;e++)if("none"!=b[e].style.display){g=b[e];break}g?c=g:(d=c,d=d.parentNode,c=null)}r.focus(c)}}}}},destroy:function(){var a=this._dragManager;p.forEach(this._grid,function(b){a.unregister(b.node)});this.inherited(arguments)}});t.ChildWidgetProperties={column:"1",dragRestriction:!1};s.extend(E,t.ChildWidgetProperties);return t});