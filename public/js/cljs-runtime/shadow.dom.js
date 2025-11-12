goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12336 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_12336(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12338 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_12338(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11906 = coll;
var G__11907 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11906,G__11907) : shadow.dom.lazy_native_coll_seq.call(null,G__11906,G__11907));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__11916 = arguments.length;
switch (G__11916) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__11918 = arguments.length;
switch (G__11918) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__11939 = arguments.length;
switch (G__11939) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__11942 = arguments.length;
switch (G__11942) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__11946 = arguments.length;
switch (G__11946) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__11950 = arguments.length;
switch (G__11950) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e11953){if((e11953 instanceof Object)){
var e = e11953;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11953;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__11968 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11969 = null;
var count__11970 = (0);
var i__11971 = (0);
while(true){
if((i__11971 < count__11970)){
var el = chunk__11969.cljs$core$IIndexed$_nth$arity$2(null,i__11971);
var handler_12359__$1 = ((function (seq__11968,chunk__11969,count__11970,i__11971,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11968,chunk__11969,count__11970,i__11971,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12359__$1);


var G__12363 = seq__11968;
var G__12364 = chunk__11969;
var G__12365 = count__11970;
var G__12366 = (i__11971 + (1));
seq__11968 = G__12363;
chunk__11969 = G__12364;
count__11970 = G__12365;
i__11971 = G__12366;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11968);
if(temp__5804__auto__){
var seq__11968__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11968__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11968__$1);
var G__12367 = cljs.core.chunk_rest(seq__11968__$1);
var G__12368 = c__5525__auto__;
var G__12369 = cljs.core.count(c__5525__auto__);
var G__12370 = (0);
seq__11968 = G__12367;
chunk__11969 = G__12368;
count__11970 = G__12369;
i__11971 = G__12370;
continue;
} else {
var el = cljs.core.first(seq__11968__$1);
var handler_12371__$1 = ((function (seq__11968,chunk__11969,count__11970,i__11971,el,seq__11968__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11968,chunk__11969,count__11970,i__11971,el,seq__11968__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12371__$1);


var G__12372 = cljs.core.next(seq__11968__$1);
var G__12373 = null;
var G__12374 = (0);
var G__12375 = (0);
seq__11968 = G__12372;
chunk__11969 = G__12373;
count__11970 = G__12374;
i__11971 = G__12375;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__11975 = arguments.length;
switch (G__11975) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__11978 = cljs.core.seq(events);
var chunk__11979 = null;
var count__11980 = (0);
var i__11981 = (0);
while(true){
if((i__11981 < count__11980)){
var vec__11991 = chunk__11979.cljs$core$IIndexed$_nth$arity$2(null,i__11981);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11991,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11991,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12381 = seq__11978;
var G__12382 = chunk__11979;
var G__12383 = count__11980;
var G__12384 = (i__11981 + (1));
seq__11978 = G__12381;
chunk__11979 = G__12382;
count__11980 = G__12383;
i__11981 = G__12384;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11978);
if(temp__5804__auto__){
var seq__11978__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11978__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11978__$1);
var G__12385 = cljs.core.chunk_rest(seq__11978__$1);
var G__12386 = c__5525__auto__;
var G__12387 = cljs.core.count(c__5525__auto__);
var G__12388 = (0);
seq__11978 = G__12385;
chunk__11979 = G__12386;
count__11980 = G__12387;
i__11981 = G__12388;
continue;
} else {
var vec__11996 = cljs.core.first(seq__11978__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11996,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11996,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12389 = cljs.core.next(seq__11978__$1);
var G__12390 = null;
var G__12391 = (0);
var G__12392 = (0);
seq__11978 = G__12389;
chunk__11979 = G__12390;
count__11980 = G__12391;
i__11981 = G__12392;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__11999 = cljs.core.seq(styles);
var chunk__12000 = null;
var count__12001 = (0);
var i__12002 = (0);
while(true){
if((i__12002 < count__12001)){
var vec__12009 = chunk__12000.cljs$core$IIndexed$_nth$arity$2(null,i__12002);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12009,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12009,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12393 = seq__11999;
var G__12394 = chunk__12000;
var G__12395 = count__12001;
var G__12396 = (i__12002 + (1));
seq__11999 = G__12393;
chunk__12000 = G__12394;
count__12001 = G__12395;
i__12002 = G__12396;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11999);
if(temp__5804__auto__){
var seq__11999__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11999__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11999__$1);
var G__12401 = cljs.core.chunk_rest(seq__11999__$1);
var G__12402 = c__5525__auto__;
var G__12403 = cljs.core.count(c__5525__auto__);
var G__12404 = (0);
seq__11999 = G__12401;
chunk__12000 = G__12402;
count__12001 = G__12403;
i__12002 = G__12404;
continue;
} else {
var vec__12012 = cljs.core.first(seq__11999__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12012,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12012,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12436 = cljs.core.next(seq__11999__$1);
var G__12437 = null;
var G__12438 = (0);
var G__12439 = (0);
seq__11999 = G__12436;
chunk__12000 = G__12437;
count__12001 = G__12438;
i__12002 = G__12439;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__12015_12441 = key;
var G__12015_12442__$1 = (((G__12015_12441 instanceof cljs.core.Keyword))?G__12015_12441.fqn:null);
switch (G__12015_12442__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_12444 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_12444,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_12444,"aria-");
}
})())){
el.setAttribute(ks_12444,value);
} else {
(el[ks_12444] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__12021){
var map__12022 = p__12021;
var map__12022__$1 = cljs.core.__destructure_map(map__12022);
var props = map__12022__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12022__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__12023 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12023,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12023,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12023,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__12026 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__12026,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__12026;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__12028 = arguments.length;
switch (G__12028) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__12029){
var vec__12030 = p__12029;
var seq__12031 = cljs.core.seq(vec__12030);
var first__12032 = cljs.core.first(seq__12031);
var seq__12031__$1 = cljs.core.next(seq__12031);
var nn = first__12032;
var first__12032__$1 = cljs.core.first(seq__12031__$1);
var seq__12031__$2 = cljs.core.next(seq__12031__$1);
var np = first__12032__$1;
var nc = seq__12031__$2;
var node = vec__12030;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12033 = nn;
var G__12034 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12033,G__12034) : create_fn.call(null,G__12033,G__12034));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12035 = nn;
var G__12036 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12035,G__12036) : create_fn.call(null,G__12035,G__12036));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__12037 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12037,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12037,(1),null);
var seq__12040_12458 = cljs.core.seq(node_children);
var chunk__12041_12459 = null;
var count__12042_12460 = (0);
var i__12043_12461 = (0);
while(true){
if((i__12043_12461 < count__12042_12460)){
var child_struct_12463 = chunk__12041_12459.cljs$core$IIndexed$_nth$arity$2(null,i__12043_12461);
var children_12464 = shadow.dom.dom_node(child_struct_12463);
if(cljs.core.seq_QMARK_(children_12464)){
var seq__12059_12465 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12464));
var chunk__12061_12466 = null;
var count__12062_12467 = (0);
var i__12063_12468 = (0);
while(true){
if((i__12063_12468 < count__12062_12467)){
var child_12472 = chunk__12061_12466.cljs$core$IIndexed$_nth$arity$2(null,i__12063_12468);
if(cljs.core.truth_(child_12472)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12472);


var G__12473 = seq__12059_12465;
var G__12474 = chunk__12061_12466;
var G__12475 = count__12062_12467;
var G__12476 = (i__12063_12468 + (1));
seq__12059_12465 = G__12473;
chunk__12061_12466 = G__12474;
count__12062_12467 = G__12475;
i__12063_12468 = G__12476;
continue;
} else {
var G__12477 = seq__12059_12465;
var G__12478 = chunk__12061_12466;
var G__12479 = count__12062_12467;
var G__12480 = (i__12063_12468 + (1));
seq__12059_12465 = G__12477;
chunk__12061_12466 = G__12478;
count__12062_12467 = G__12479;
i__12063_12468 = G__12480;
continue;
}
} else {
var temp__5804__auto___12481 = cljs.core.seq(seq__12059_12465);
if(temp__5804__auto___12481){
var seq__12059_12482__$1 = temp__5804__auto___12481;
if(cljs.core.chunked_seq_QMARK_(seq__12059_12482__$1)){
var c__5525__auto___12483 = cljs.core.chunk_first(seq__12059_12482__$1);
var G__12484 = cljs.core.chunk_rest(seq__12059_12482__$1);
var G__12485 = c__5525__auto___12483;
var G__12486 = cljs.core.count(c__5525__auto___12483);
var G__12487 = (0);
seq__12059_12465 = G__12484;
chunk__12061_12466 = G__12485;
count__12062_12467 = G__12486;
i__12063_12468 = G__12487;
continue;
} else {
var child_12488 = cljs.core.first(seq__12059_12482__$1);
if(cljs.core.truth_(child_12488)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12488);


var G__12489 = cljs.core.next(seq__12059_12482__$1);
var G__12490 = null;
var G__12491 = (0);
var G__12492 = (0);
seq__12059_12465 = G__12489;
chunk__12061_12466 = G__12490;
count__12062_12467 = G__12491;
i__12063_12468 = G__12492;
continue;
} else {
var G__12494 = cljs.core.next(seq__12059_12482__$1);
var G__12495 = null;
var G__12496 = (0);
var G__12497 = (0);
seq__12059_12465 = G__12494;
chunk__12061_12466 = G__12495;
count__12062_12467 = G__12496;
i__12063_12468 = G__12497;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12464);
}


var G__12498 = seq__12040_12458;
var G__12499 = chunk__12041_12459;
var G__12500 = count__12042_12460;
var G__12501 = (i__12043_12461 + (1));
seq__12040_12458 = G__12498;
chunk__12041_12459 = G__12499;
count__12042_12460 = G__12500;
i__12043_12461 = G__12501;
continue;
} else {
var temp__5804__auto___12504 = cljs.core.seq(seq__12040_12458);
if(temp__5804__auto___12504){
var seq__12040_12506__$1 = temp__5804__auto___12504;
if(cljs.core.chunked_seq_QMARK_(seq__12040_12506__$1)){
var c__5525__auto___12507 = cljs.core.chunk_first(seq__12040_12506__$1);
var G__12508 = cljs.core.chunk_rest(seq__12040_12506__$1);
var G__12509 = c__5525__auto___12507;
var G__12510 = cljs.core.count(c__5525__auto___12507);
var G__12511 = (0);
seq__12040_12458 = G__12508;
chunk__12041_12459 = G__12509;
count__12042_12460 = G__12510;
i__12043_12461 = G__12511;
continue;
} else {
var child_struct_12512 = cljs.core.first(seq__12040_12506__$1);
var children_12513 = shadow.dom.dom_node(child_struct_12512);
if(cljs.core.seq_QMARK_(children_12513)){
var seq__12067_12514 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12513));
var chunk__12069_12515 = null;
var count__12070_12516 = (0);
var i__12071_12517 = (0);
while(true){
if((i__12071_12517 < count__12070_12516)){
var child_12518 = chunk__12069_12515.cljs$core$IIndexed$_nth$arity$2(null,i__12071_12517);
if(cljs.core.truth_(child_12518)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12518);


var G__12519 = seq__12067_12514;
var G__12520 = chunk__12069_12515;
var G__12521 = count__12070_12516;
var G__12522 = (i__12071_12517 + (1));
seq__12067_12514 = G__12519;
chunk__12069_12515 = G__12520;
count__12070_12516 = G__12521;
i__12071_12517 = G__12522;
continue;
} else {
var G__12523 = seq__12067_12514;
var G__12524 = chunk__12069_12515;
var G__12525 = count__12070_12516;
var G__12526 = (i__12071_12517 + (1));
seq__12067_12514 = G__12523;
chunk__12069_12515 = G__12524;
count__12070_12516 = G__12525;
i__12071_12517 = G__12526;
continue;
}
} else {
var temp__5804__auto___12527__$1 = cljs.core.seq(seq__12067_12514);
if(temp__5804__auto___12527__$1){
var seq__12067_12528__$1 = temp__5804__auto___12527__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12067_12528__$1)){
var c__5525__auto___12529 = cljs.core.chunk_first(seq__12067_12528__$1);
var G__12530 = cljs.core.chunk_rest(seq__12067_12528__$1);
var G__12531 = c__5525__auto___12529;
var G__12532 = cljs.core.count(c__5525__auto___12529);
var G__12533 = (0);
seq__12067_12514 = G__12530;
chunk__12069_12515 = G__12531;
count__12070_12516 = G__12532;
i__12071_12517 = G__12533;
continue;
} else {
var child_12534 = cljs.core.first(seq__12067_12528__$1);
if(cljs.core.truth_(child_12534)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12534);


var G__12535 = cljs.core.next(seq__12067_12528__$1);
var G__12536 = null;
var G__12537 = (0);
var G__12538 = (0);
seq__12067_12514 = G__12535;
chunk__12069_12515 = G__12536;
count__12070_12516 = G__12537;
i__12071_12517 = G__12538;
continue;
} else {
var G__12539 = cljs.core.next(seq__12067_12528__$1);
var G__12540 = null;
var G__12541 = (0);
var G__12542 = (0);
seq__12067_12514 = G__12539;
chunk__12069_12515 = G__12540;
count__12070_12516 = G__12541;
i__12071_12517 = G__12542;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12513);
}


var G__12544 = cljs.core.next(seq__12040_12506__$1);
var G__12545 = null;
var G__12546 = (0);
var G__12547 = (0);
seq__12040_12458 = G__12544;
chunk__12041_12459 = G__12545;
count__12042_12460 = G__12546;
i__12043_12461 = G__12547;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__12077 = cljs.core.seq(node);
var chunk__12078 = null;
var count__12079 = (0);
var i__12080 = (0);
while(true){
if((i__12080 < count__12079)){
var n = chunk__12078.cljs$core$IIndexed$_nth$arity$2(null,i__12080);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12551 = seq__12077;
var G__12552 = chunk__12078;
var G__12553 = count__12079;
var G__12554 = (i__12080 + (1));
seq__12077 = G__12551;
chunk__12078 = G__12552;
count__12079 = G__12553;
i__12080 = G__12554;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12077);
if(temp__5804__auto__){
var seq__12077__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12077__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12077__$1);
var G__12555 = cljs.core.chunk_rest(seq__12077__$1);
var G__12556 = c__5525__auto__;
var G__12557 = cljs.core.count(c__5525__auto__);
var G__12558 = (0);
seq__12077 = G__12555;
chunk__12078 = G__12556;
count__12079 = G__12557;
i__12080 = G__12558;
continue;
} else {
var n = cljs.core.first(seq__12077__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12559 = cljs.core.next(seq__12077__$1);
var G__12560 = null;
var G__12561 = (0);
var G__12562 = (0);
seq__12077 = G__12559;
chunk__12078 = G__12560;
count__12079 = G__12561;
i__12080 = G__12562;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__12082 = arguments.length;
switch (G__12082) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__12084 = arguments.length;
switch (G__12084) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__12086 = arguments.length;
switch (G__12086) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12569 = arguments.length;
var i__5727__auto___12570 = (0);
while(true){
if((i__5727__auto___12570 < len__5726__auto___12569)){
args__5732__auto__.push((arguments[i__5727__auto___12570]));

var G__12571 = (i__5727__auto___12570 + (1));
i__5727__auto___12570 = G__12571;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__12088_12572 = cljs.core.seq(nodes);
var chunk__12089_12573 = null;
var count__12090_12574 = (0);
var i__12091_12575 = (0);
while(true){
if((i__12091_12575 < count__12090_12574)){
var node_12577 = chunk__12089_12573.cljs$core$IIndexed$_nth$arity$2(null,i__12091_12575);
fragment.appendChild(shadow.dom._to_dom(node_12577));


var G__12578 = seq__12088_12572;
var G__12579 = chunk__12089_12573;
var G__12580 = count__12090_12574;
var G__12581 = (i__12091_12575 + (1));
seq__12088_12572 = G__12578;
chunk__12089_12573 = G__12579;
count__12090_12574 = G__12580;
i__12091_12575 = G__12581;
continue;
} else {
var temp__5804__auto___12583 = cljs.core.seq(seq__12088_12572);
if(temp__5804__auto___12583){
var seq__12088_12584__$1 = temp__5804__auto___12583;
if(cljs.core.chunked_seq_QMARK_(seq__12088_12584__$1)){
var c__5525__auto___12585 = cljs.core.chunk_first(seq__12088_12584__$1);
var G__12586 = cljs.core.chunk_rest(seq__12088_12584__$1);
var G__12587 = c__5525__auto___12585;
var G__12588 = cljs.core.count(c__5525__auto___12585);
var G__12589 = (0);
seq__12088_12572 = G__12586;
chunk__12089_12573 = G__12587;
count__12090_12574 = G__12588;
i__12091_12575 = G__12589;
continue;
} else {
var node_12590 = cljs.core.first(seq__12088_12584__$1);
fragment.appendChild(shadow.dom._to_dom(node_12590));


var G__12591 = cljs.core.next(seq__12088_12584__$1);
var G__12592 = null;
var G__12593 = (0);
var G__12594 = (0);
seq__12088_12572 = G__12591;
chunk__12089_12573 = G__12592;
count__12090_12574 = G__12593;
i__12091_12575 = G__12594;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12087){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12087));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12096_12595 = cljs.core.seq(scripts);
var chunk__12097_12596 = null;
var count__12098_12597 = (0);
var i__12099_12598 = (0);
while(true){
if((i__12099_12598 < count__12098_12597)){
var vec__12109_12599 = chunk__12097_12596.cljs$core$IIndexed$_nth$arity$2(null,i__12099_12598);
var script_tag_12600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12109_12599,(0),null);
var script_body_12601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12109_12599,(1),null);
eval(script_body_12601);


var G__12603 = seq__12096_12595;
var G__12604 = chunk__12097_12596;
var G__12605 = count__12098_12597;
var G__12606 = (i__12099_12598 + (1));
seq__12096_12595 = G__12603;
chunk__12097_12596 = G__12604;
count__12098_12597 = G__12605;
i__12099_12598 = G__12606;
continue;
} else {
var temp__5804__auto___12608 = cljs.core.seq(seq__12096_12595);
if(temp__5804__auto___12608){
var seq__12096_12610__$1 = temp__5804__auto___12608;
if(cljs.core.chunked_seq_QMARK_(seq__12096_12610__$1)){
var c__5525__auto___12611 = cljs.core.chunk_first(seq__12096_12610__$1);
var G__12613 = cljs.core.chunk_rest(seq__12096_12610__$1);
var G__12614 = c__5525__auto___12611;
var G__12615 = cljs.core.count(c__5525__auto___12611);
var G__12616 = (0);
seq__12096_12595 = G__12613;
chunk__12097_12596 = G__12614;
count__12098_12597 = G__12615;
i__12099_12598 = G__12616;
continue;
} else {
var vec__12119_12617 = cljs.core.first(seq__12096_12610__$1);
var script_tag_12618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12119_12617,(0),null);
var script_body_12619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12119_12617,(1),null);
eval(script_body_12619);


var G__12620 = cljs.core.next(seq__12096_12610__$1);
var G__12621 = null;
var G__12622 = (0);
var G__12623 = (0);
seq__12096_12595 = G__12620;
chunk__12097_12596 = G__12621;
count__12098_12597 = G__12622;
i__12099_12598 = G__12623;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12122){
var vec__12123 = p__12122;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12123,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12123,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__12135 = arguments.length;
switch (G__12135) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__12145 = cljs.core.seq(style_keys);
var chunk__12146 = null;
var count__12147 = (0);
var i__12148 = (0);
while(true){
if((i__12148 < count__12147)){
var it = chunk__12146.cljs$core$IIndexed$_nth$arity$2(null,i__12148);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12755 = seq__12145;
var G__12756 = chunk__12146;
var G__12757 = count__12147;
var G__12758 = (i__12148 + (1));
seq__12145 = G__12755;
chunk__12146 = G__12756;
count__12147 = G__12757;
i__12148 = G__12758;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12145);
if(temp__5804__auto__){
var seq__12145__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12145__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12145__$1);
var G__12759 = cljs.core.chunk_rest(seq__12145__$1);
var G__12760 = c__5525__auto__;
var G__12761 = cljs.core.count(c__5525__auto__);
var G__12762 = (0);
seq__12145 = G__12759;
chunk__12146 = G__12760;
count__12147 = G__12761;
i__12148 = G__12762;
continue;
} else {
var it = cljs.core.first(seq__12145__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12766 = cljs.core.next(seq__12145__$1);
var G__12767 = null;
var G__12768 = (0);
var G__12769 = (0);
seq__12145 = G__12766;
chunk__12146 = G__12767;
count__12147 = G__12768;
i__12148 = G__12769;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12151,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12159 = k12151;
var G__12159__$1 = (((G__12159 instanceof cljs.core.Keyword))?G__12159.fqn:null);
switch (G__12159__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12151,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12160){
var vec__12161 = p__12160;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12161,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12161,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12150){
var self__ = this;
var G__12150__$1 = this;
return (new cljs.core.RecordIter((0),G__12150__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12152,other12153){
var self__ = this;
var this12152__$1 = this;
return (((!((other12153 == null)))) && ((((this12152__$1.constructor === other12153.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12152__$1.x,other12153.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12152__$1.y,other12153.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12152__$1.__extmap,other12153.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12151){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12172 = k12151;
var G__12172__$1 = (((G__12172 instanceof cljs.core.Keyword))?G__12172.fqn:null);
switch (G__12172__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12151);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12150){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12173 = cljs.core.keyword_identical_QMARK_;
var expr__12174 = k__5309__auto__;
if(cljs.core.truth_((pred__12173.cljs$core$IFn$_invoke$arity$2 ? pred__12173.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12174) : pred__12173.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__12174)))){
return (new shadow.dom.Coordinate(G__12150,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12173.cljs$core$IFn$_invoke$arity$2 ? pred__12173.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12174) : pred__12173.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__12174)))){
return (new shadow.dom.Coordinate(self__.x,G__12150,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12150),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12150){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12150,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12156){
var extmap__5342__auto__ = (function (){var G__12181 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12156,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12156)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12181);
} else {
return G__12181;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12156),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12156),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12187,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12194 = k12187;
var G__12194__$1 = (((G__12194 instanceof cljs.core.Keyword))?G__12194.fqn:null);
switch (G__12194__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12187,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12198){
var vec__12200 = p__12198;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12200,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12200,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12186){
var self__ = this;
var G__12186__$1 = this;
return (new cljs.core.RecordIter((0),G__12186__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12188,other12189){
var self__ = this;
var this12188__$1 = this;
return (((!((other12189 == null)))) && ((((this12188__$1.constructor === other12189.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12188__$1.w,other12189.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12188__$1.h,other12189.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12188__$1.__extmap,other12189.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12187){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12215 = k12187;
var G__12215__$1 = (((G__12215 instanceof cljs.core.Keyword))?G__12215.fqn:null);
switch (G__12215__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12187);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12186){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12216 = cljs.core.keyword_identical_QMARK_;
var expr__12217 = k__5309__auto__;
if(cljs.core.truth_((pred__12216.cljs$core$IFn$_invoke$arity$2 ? pred__12216.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12217) : pred__12216.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__12217)))){
return (new shadow.dom.Size(G__12186,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12216.cljs$core$IFn$_invoke$arity$2 ? pred__12216.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12217) : pred__12216.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__12217)))){
return (new shadow.dom.Size(self__.w,G__12186,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12186),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12186){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12186,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12190){
var extmap__5342__auto__ = (function (){var G__12219 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12190,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12190)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12219);
} else {
return G__12219;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12190),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12190),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__12776 = (i + (1));
var G__12777 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__12776;
ret = G__12777;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12227){
var vec__12228 = p__12227;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12228,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12228,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12232 = arguments.length;
switch (G__12232) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__12779 = ps;
var G__12780 = (i + (1));
el__$1 = G__12779;
i = G__12780;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__12240 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12240,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12240,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12240,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12243_12783 = cljs.core.seq(props);
var chunk__12244_12784 = null;
var count__12245_12785 = (0);
var i__12246_12786 = (0);
while(true){
if((i__12246_12786 < count__12245_12785)){
var vec__12257_12787 = chunk__12244_12784.cljs$core$IIndexed$_nth$arity$2(null,i__12246_12786);
var k_12788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12257_12787,(0),null);
var v_12789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12257_12787,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_12788);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12788),v_12789);


var G__12791 = seq__12243_12783;
var G__12792 = chunk__12244_12784;
var G__12793 = count__12245_12785;
var G__12794 = (i__12246_12786 + (1));
seq__12243_12783 = G__12791;
chunk__12244_12784 = G__12792;
count__12245_12785 = G__12793;
i__12246_12786 = G__12794;
continue;
} else {
var temp__5804__auto___12795 = cljs.core.seq(seq__12243_12783);
if(temp__5804__auto___12795){
var seq__12243_12796__$1 = temp__5804__auto___12795;
if(cljs.core.chunked_seq_QMARK_(seq__12243_12796__$1)){
var c__5525__auto___12797 = cljs.core.chunk_first(seq__12243_12796__$1);
var G__12798 = cljs.core.chunk_rest(seq__12243_12796__$1);
var G__12799 = c__5525__auto___12797;
var G__12800 = cljs.core.count(c__5525__auto___12797);
var G__12801 = (0);
seq__12243_12783 = G__12798;
chunk__12244_12784 = G__12799;
count__12245_12785 = G__12800;
i__12246_12786 = G__12801;
continue;
} else {
var vec__12266_12803 = cljs.core.first(seq__12243_12796__$1);
var k_12804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12266_12803,(0),null);
var v_12806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12266_12803,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_12804);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12804),v_12806);


var G__12808 = cljs.core.next(seq__12243_12796__$1);
var G__12809 = null;
var G__12810 = (0);
var G__12811 = (0);
seq__12243_12783 = G__12808;
chunk__12244_12784 = G__12809;
count__12245_12785 = G__12810;
i__12246_12786 = G__12811;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__12270 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12270,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12270,(1),null);
var seq__12273_12813 = cljs.core.seq(node_children);
var chunk__12275_12814 = null;
var count__12276_12815 = (0);
var i__12277_12816 = (0);
while(true){
if((i__12277_12816 < count__12276_12815)){
var child_struct_12821 = chunk__12275_12814.cljs$core$IIndexed$_nth$arity$2(null,i__12277_12816);
if((!((child_struct_12821 == null)))){
if(typeof child_struct_12821 === 'string'){
var text_12822 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_12822),child_struct_12821].join(''));
} else {
var children_12823 = shadow.dom.svg_node(child_struct_12821);
if(cljs.core.seq_QMARK_(children_12823)){
var seq__12297_12824 = cljs.core.seq(children_12823);
var chunk__12299_12825 = null;
var count__12300_12826 = (0);
var i__12301_12827 = (0);
while(true){
if((i__12301_12827 < count__12300_12826)){
var child_12828 = chunk__12299_12825.cljs$core$IIndexed$_nth$arity$2(null,i__12301_12827);
if(cljs.core.truth_(child_12828)){
node.appendChild(child_12828);


var G__12830 = seq__12297_12824;
var G__12831 = chunk__12299_12825;
var G__12832 = count__12300_12826;
var G__12833 = (i__12301_12827 + (1));
seq__12297_12824 = G__12830;
chunk__12299_12825 = G__12831;
count__12300_12826 = G__12832;
i__12301_12827 = G__12833;
continue;
} else {
var G__12834 = seq__12297_12824;
var G__12835 = chunk__12299_12825;
var G__12836 = count__12300_12826;
var G__12837 = (i__12301_12827 + (1));
seq__12297_12824 = G__12834;
chunk__12299_12825 = G__12835;
count__12300_12826 = G__12836;
i__12301_12827 = G__12837;
continue;
}
} else {
var temp__5804__auto___12839 = cljs.core.seq(seq__12297_12824);
if(temp__5804__auto___12839){
var seq__12297_12840__$1 = temp__5804__auto___12839;
if(cljs.core.chunked_seq_QMARK_(seq__12297_12840__$1)){
var c__5525__auto___12842 = cljs.core.chunk_first(seq__12297_12840__$1);
var G__12843 = cljs.core.chunk_rest(seq__12297_12840__$1);
var G__12844 = c__5525__auto___12842;
var G__12845 = cljs.core.count(c__5525__auto___12842);
var G__12846 = (0);
seq__12297_12824 = G__12843;
chunk__12299_12825 = G__12844;
count__12300_12826 = G__12845;
i__12301_12827 = G__12846;
continue;
} else {
var child_12847 = cljs.core.first(seq__12297_12840__$1);
if(cljs.core.truth_(child_12847)){
node.appendChild(child_12847);


var G__12848 = cljs.core.next(seq__12297_12840__$1);
var G__12849 = null;
var G__12850 = (0);
var G__12851 = (0);
seq__12297_12824 = G__12848;
chunk__12299_12825 = G__12849;
count__12300_12826 = G__12850;
i__12301_12827 = G__12851;
continue;
} else {
var G__12852 = cljs.core.next(seq__12297_12840__$1);
var G__12853 = null;
var G__12854 = (0);
var G__12855 = (0);
seq__12297_12824 = G__12852;
chunk__12299_12825 = G__12853;
count__12300_12826 = G__12854;
i__12301_12827 = G__12855;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_12823);
}
}


var G__12857 = seq__12273_12813;
var G__12858 = chunk__12275_12814;
var G__12859 = count__12276_12815;
var G__12860 = (i__12277_12816 + (1));
seq__12273_12813 = G__12857;
chunk__12275_12814 = G__12858;
count__12276_12815 = G__12859;
i__12277_12816 = G__12860;
continue;
} else {
var G__12861 = seq__12273_12813;
var G__12862 = chunk__12275_12814;
var G__12863 = count__12276_12815;
var G__12864 = (i__12277_12816 + (1));
seq__12273_12813 = G__12861;
chunk__12275_12814 = G__12862;
count__12276_12815 = G__12863;
i__12277_12816 = G__12864;
continue;
}
} else {
var temp__5804__auto___12865 = cljs.core.seq(seq__12273_12813);
if(temp__5804__auto___12865){
var seq__12273_12866__$1 = temp__5804__auto___12865;
if(cljs.core.chunked_seq_QMARK_(seq__12273_12866__$1)){
var c__5525__auto___12868 = cljs.core.chunk_first(seq__12273_12866__$1);
var G__12870 = cljs.core.chunk_rest(seq__12273_12866__$1);
var G__12871 = c__5525__auto___12868;
var G__12872 = cljs.core.count(c__5525__auto___12868);
var G__12873 = (0);
seq__12273_12813 = G__12870;
chunk__12275_12814 = G__12871;
count__12276_12815 = G__12872;
i__12277_12816 = G__12873;
continue;
} else {
var child_struct_12874 = cljs.core.first(seq__12273_12866__$1);
if((!((child_struct_12874 == null)))){
if(typeof child_struct_12874 === 'string'){
var text_12876 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_12876),child_struct_12874].join(''));
} else {
var children_12878 = shadow.dom.svg_node(child_struct_12874);
if(cljs.core.seq_QMARK_(children_12878)){
var seq__12303_12879 = cljs.core.seq(children_12878);
var chunk__12305_12880 = null;
var count__12306_12881 = (0);
var i__12307_12882 = (0);
while(true){
if((i__12307_12882 < count__12306_12881)){
var child_12883 = chunk__12305_12880.cljs$core$IIndexed$_nth$arity$2(null,i__12307_12882);
if(cljs.core.truth_(child_12883)){
node.appendChild(child_12883);


var G__12884 = seq__12303_12879;
var G__12885 = chunk__12305_12880;
var G__12886 = count__12306_12881;
var G__12887 = (i__12307_12882 + (1));
seq__12303_12879 = G__12884;
chunk__12305_12880 = G__12885;
count__12306_12881 = G__12886;
i__12307_12882 = G__12887;
continue;
} else {
var G__12888 = seq__12303_12879;
var G__12889 = chunk__12305_12880;
var G__12890 = count__12306_12881;
var G__12891 = (i__12307_12882 + (1));
seq__12303_12879 = G__12888;
chunk__12305_12880 = G__12889;
count__12306_12881 = G__12890;
i__12307_12882 = G__12891;
continue;
}
} else {
var temp__5804__auto___12892__$1 = cljs.core.seq(seq__12303_12879);
if(temp__5804__auto___12892__$1){
var seq__12303_12894__$1 = temp__5804__auto___12892__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12303_12894__$1)){
var c__5525__auto___12910 = cljs.core.chunk_first(seq__12303_12894__$1);
var G__12911 = cljs.core.chunk_rest(seq__12303_12894__$1);
var G__12912 = c__5525__auto___12910;
var G__12913 = cljs.core.count(c__5525__auto___12910);
var G__12914 = (0);
seq__12303_12879 = G__12911;
chunk__12305_12880 = G__12912;
count__12306_12881 = G__12913;
i__12307_12882 = G__12914;
continue;
} else {
var child_12915 = cljs.core.first(seq__12303_12894__$1);
if(cljs.core.truth_(child_12915)){
node.appendChild(child_12915);


var G__12916 = cljs.core.next(seq__12303_12894__$1);
var G__12917 = null;
var G__12918 = (0);
var G__12919 = (0);
seq__12303_12879 = G__12916;
chunk__12305_12880 = G__12917;
count__12306_12881 = G__12918;
i__12307_12882 = G__12919;
continue;
} else {
var G__12920 = cljs.core.next(seq__12303_12894__$1);
var G__12921 = null;
var G__12922 = (0);
var G__12923 = (0);
seq__12303_12879 = G__12920;
chunk__12305_12880 = G__12921;
count__12306_12881 = G__12922;
i__12307_12882 = G__12923;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_12878);
}
}


var G__12924 = cljs.core.next(seq__12273_12866__$1);
var G__12925 = null;
var G__12926 = (0);
var G__12927 = (0);
seq__12273_12813 = G__12924;
chunk__12275_12814 = G__12925;
count__12276_12815 = G__12926;
i__12277_12816 = G__12927;
continue;
} else {
var G__12928 = cljs.core.next(seq__12273_12866__$1);
var G__12929 = null;
var G__12930 = (0);
var G__12931 = (0);
seq__12273_12813 = G__12928;
chunk__12275_12814 = G__12929;
count__12276_12815 = G__12930;
i__12277_12816 = G__12931;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12932 = arguments.length;
var i__5727__auto___12933 = (0);
while(true){
if((i__5727__auto___12933 < len__5726__auto___12932)){
args__5732__auto__.push((arguments[i__5727__auto___12933]));

var G__12934 = (i__5727__auto___12933 + (1));
i__5727__auto___12933 = G__12934;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12329){
var G__12330 = cljs.core.first(seq12329);
var seq12329__$1 = cljs.core.next(seq12329);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12330,seq12329__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
