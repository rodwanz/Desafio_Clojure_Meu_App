goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14922 = (function (f,blockable,meta14923){
this.f = f;
this.blockable = blockable;
this.meta14923 = meta14923;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14924,meta14923__$1){
var self__ = this;
var _14924__$1 = this;
return (new cljs.core.async.t_cljs$core$async14922(self__.f,self__.blockable,meta14923__$1));
}));

(cljs.core.async.t_cljs$core$async14922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14924){
var self__ = this;
var _14924__$1 = this;
return self__.meta14923;
}));

(cljs.core.async.t_cljs$core$async14922.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14922.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14922.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14922.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14922.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14923","meta14923",1661846608,null)], null);
}));

(cljs.core.async.t_cljs$core$async14922.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14922.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14922");

(cljs.core.async.t_cljs$core$async14922.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14922");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14922.
 */
cljs.core.async.__GT_t_cljs$core$async14922 = (function cljs$core$async$__GT_t_cljs$core$async14922(f,blockable,meta14923){
return (new cljs.core.async.t_cljs$core$async14922(f,blockable,meta14923));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14921 = arguments.length;
switch (G__14921) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14922(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14933 = arguments.length;
switch (G__14933) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14941 = arguments.length;
switch (G__14941) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14947 = arguments.length;
switch (G__14947) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_16880 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16880) : fn1.call(null,val_16880));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16880) : fn1.call(null,val_16880));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__15000 = arguments.length;
switch (G__15000) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___16882 = n;
var x_16883 = (0);
while(true){
if((x_16883 < n__5593__auto___16882)){
(a[x_16883] = x_16883);

var G__16884 = (x_16883 + (1));
x_16883 = G__16884;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15011 = (function (flag,meta15012){
this.flag = flag;
this.meta15012 = meta15012;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15013,meta15012__$1){
var self__ = this;
var _15013__$1 = this;
return (new cljs.core.async.t_cljs$core$async15011(self__.flag,meta15012__$1));
}));

(cljs.core.async.t_cljs$core$async15011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15013){
var self__ = this;
var _15013__$1 = this;
return self__.meta15012;
}));

(cljs.core.async.t_cljs$core$async15011.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15011.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15011.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15011.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15011.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15012","meta15012",-2095217357,null)], null);
}));

(cljs.core.async.t_cljs$core$async15011.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15011.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15011");

(cljs.core.async.t_cljs$core$async15011.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15011");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15011.
 */
cljs.core.async.__GT_t_cljs$core$async15011 = (function cljs$core$async$__GT_t_cljs$core$async15011(flag,meta15012){
return (new cljs.core.async.t_cljs$core$async15011(flag,meta15012));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async15011(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15015 = (function (flag,cb,meta15016){
this.flag = flag;
this.cb = cb;
this.meta15016 = meta15016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15017,meta15016__$1){
var self__ = this;
var _15017__$1 = this;
return (new cljs.core.async.t_cljs$core$async15015(self__.flag,self__.cb,meta15016__$1));
}));

(cljs.core.async.t_cljs$core$async15015.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15017){
var self__ = this;
var _15017__$1 = this;
return self__.meta15016;
}));

(cljs.core.async.t_cljs$core$async15015.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15015.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15015.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15015.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15015.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15016","meta15016",-1091181014,null)], null);
}));

(cljs.core.async.t_cljs$core$async15015.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15015.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15015");

(cljs.core.async.t_cljs$core$async15015.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15015");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15015.
 */
cljs.core.async.__GT_t_cljs$core$async15015 = (function cljs$core$async$__GT_t_cljs$core$async15015(flag,cb,meta15016){
return (new cljs.core.async.t_cljs$core$async15015(flag,cb,meta15016));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async15015(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15022_SHARP_){
var G__15027 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15022_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15027) : fret.call(null,G__15027));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15023_SHARP_){
var G__15028 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15023_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15028) : fret.call(null,G__15028));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16885 = (i + (1));
i = G__16885;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16886 = arguments.length;
var i__5727__auto___16887 = (0);
while(true){
if((i__5727__auto___16887 < len__5726__auto___16886)){
args__5732__auto__.push((arguments[i__5727__auto___16887]));

var G__16888 = (i__5727__auto___16887 + (1));
i__5727__auto___16887 = G__16888;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15068){
var map__15069 = p__15068;
var map__15069__$1 = cljs.core.__destructure_map(map__15069);
var opts = map__15069__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15041){
var G__15042 = cljs.core.first(seq15041);
var seq15041__$1 = cljs.core.next(seq15041);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15042,seq15041__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__15072 = arguments.length;
switch (G__15072) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14857__auto___16890 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14858__auto__ = (function (){var switch__14729__auto__ = (function (state_15097){
var state_val_15098 = (state_15097[(1)]);
if((state_val_15098 === (7))){
var inst_15093 = (state_15097[(2)]);
var state_15097__$1 = state_15097;
var statearr_15102_16891 = state_15097__$1;
(statearr_15102_16891[(2)] = inst_15093);

(statearr_15102_16891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15098 === (1))){
var state_15097__$1 = state_15097;
var statearr_15103_16892 = state_15097__$1;
(statearr_15103_16892[(2)] = null);

(statearr_15103_16892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15098 === (4))){
var inst_15076 = (state_15097[(7)]);
var inst_15076__$1 = (state_15097[(2)]);
var inst_15077 = (inst_15076__$1 == null);
var state_15097__$1 = (function (){var statearr_15104 = state_15097;
(statearr_15104[(7)] = inst_15076__$1);

return statearr_15104;
})();
if(cljs.core.truth_(inst_15077)){
var statearr_15105_16893 = state_15097__$1;
(statearr_15105_16893[(1)] = (5));

} else {
var statearr_15106_16894 = state_15097__$1;
(statearr_15106_16894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15098 === (13))){
var state_15097__$1 = state_15097;
var statearr_15107_16895 = state_15097__$1;
(statearr_15107_16895[(2)] = null);

(statearr_15107_16895[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15098 === (6))){
var inst_15076 = (state_15097[(7)]);
var state_15097__$1 = state_15097;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15097__$1,(11),to,inst_15076);
} else {
if((state_val_15098 === (3))){
var inst_15095 = (state_15097[(2)]);
var state_15097__$1 = state_15097;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15097__$1,inst_15095);
} else {
if((state_val_15098 === (12))){
var state_15097__$1 = state_15097;
var statearr_15108_16896 = state_15097__$1;
(statearr_15108_16896[(2)] = null);

(statearr_15108_16896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15098 === (2))){
var state_15097__$1 = state_15097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15097__$1,(4),from);
} else {
if((state_val_15098 === (11))){
var inst_15086 = (state_15097[(2)]);
var state_15097__$1 = state_15097;
if(cljs.core.truth_(inst_15086)){
var statearr_15110_16897 = state_15097__$1;
(statearr_15110_16897[(1)] = (12));

} else {
var statearr_15111_16898 = state_15097__$1;
(statearr_15111_16898[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15098 === (9))){
var state_15097__$1 = state_15097;
var statearr_15112_16899 = state_15097__$1;
(statearr_15112_16899[(2)] = null);

(statearr_15112_16899[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15098 === (5))){
var state_15097__$1 = state_15097;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15113_16900 = state_15097__$1;
(statearr_15113_16900[(1)] = (8));

} else {
var statearr_15115_16901 = state_15097__$1;
(statearr_15115_16901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15098 === (14))){
var inst_15091 = (state_15097[(2)]);
var state_15097__$1 = state_15097;
var statearr_15117_16902 = state_15097__$1;
(statearr_15117_16902[(2)] = inst_15091);

(statearr_15117_16902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15098 === (10))){
var inst_15083 = (state_15097[(2)]);
var state_15097__$1 = state_15097;
var statearr_15118_16903 = state_15097__$1;
(statearr_15118_16903[(2)] = inst_15083);

(statearr_15118_16903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15098 === (8))){
var inst_15080 = cljs.core.async.close_BANG_(to);
var state_15097__$1 = state_15097;
var statearr_15119_16904 = state_15097__$1;
(statearr_15119_16904[(2)] = inst_15080);

(statearr_15119_16904[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14730__auto__ = null;
var cljs$core$async$state_machine__14730__auto____0 = (function (){
var statearr_15120 = [null,null,null,null,null,null,null,null];
(statearr_15120[(0)] = cljs$core$async$state_machine__14730__auto__);

(statearr_15120[(1)] = (1));

return statearr_15120;
});
var cljs$core$async$state_machine__14730__auto____1 = (function (state_15097){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_15097);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e15122){var ex__14733__auto__ = e15122;
var statearr_15123_16905 = state_15097;
(statearr_15123_16905[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_15097[(4)]))){
var statearr_15124_16906 = state_15097;
(statearr_15124_16906[(1)] = cljs.core.first((state_15097[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16907 = state_15097;
state_15097 = G__16907;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$state_machine__14730__auto__ = function(state_15097){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14730__auto____1.call(this,state_15097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14730__auto____0;
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14730__auto____1;
return cljs$core$async$state_machine__14730__auto__;
})()
})();
var state__14859__auto__ = (function (){var statearr_15125 = f__14858__auto__();
(statearr_15125[(6)] = c__14857__auto___16890);

return statearr_15125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14859__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__15126){
var vec__15127 = p__15126;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15127,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15127,(1),null);
var job = vec__15127;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14857__auto___16908 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14858__auto__ = (function (){var switch__14729__auto__ = (function (state_15134){
var state_val_15135 = (state_15134[(1)]);
if((state_val_15135 === (1))){
var state_15134__$1 = state_15134;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15134__$1,(2),res,v);
} else {
if((state_val_15135 === (2))){
var inst_15131 = (state_15134[(2)]);
var inst_15132 = cljs.core.async.close_BANG_(res);
var state_15134__$1 = (function (){var statearr_15137 = state_15134;
(statearr_15137[(7)] = inst_15131);

return statearr_15137;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15134__$1,inst_15132);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____0 = (function (){
var statearr_15138 = [null,null,null,null,null,null,null,null];
(statearr_15138[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__);

(statearr_15138[(1)] = (1));

return statearr_15138;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____1 = (function (state_15134){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_15134);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e15139){var ex__14733__auto__ = e15139;
var statearr_15140_16909 = state_15134;
(statearr_15140_16909[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_15134[(4)]))){
var statearr_15141_16910 = state_15134;
(statearr_15141_16910[(1)] = cljs.core.first((state_15134[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16911 = state_15134;
state_15134 = G__16911;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__ = function(state_15134){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____1.call(this,state_15134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__;
})()
})();
var state__14859__auto__ = (function (){var statearr_15142 = f__14858__auto__();
(statearr_15142[(6)] = c__14857__auto___16908);

return statearr_15142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14859__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15143){
var vec__15144 = p__15143;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15144,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15144,(1),null);
var job = vec__15144;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___16912 = n;
var __16913 = (0);
while(true){
if((__16913 < n__5593__auto___16912)){
var G__15147_16914 = type;
var G__15147_16915__$1 = (((G__15147_16914 instanceof cljs.core.Keyword))?G__15147_16914.fqn:null);
switch (G__15147_16915__$1) {
case "compute":
var c__14857__auto___16917 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16913,c__14857__auto___16917,G__15147_16914,G__15147_16915__$1,n__5593__auto___16912,jobs,results,process__$1,async){
return (function (){
var f__14858__auto__ = (function (){var switch__14729__auto__ = ((function (__16913,c__14857__auto___16917,G__15147_16914,G__15147_16915__$1,n__5593__auto___16912,jobs,results,process__$1,async){
return (function (state_15160){
var state_val_15161 = (state_15160[(1)]);
if((state_val_15161 === (1))){
var state_15160__$1 = state_15160;
var statearr_15162_16918 = state_15160__$1;
(statearr_15162_16918[(2)] = null);

(statearr_15162_16918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (2))){
var state_15160__$1 = state_15160;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15160__$1,(4),jobs);
} else {
if((state_val_15161 === (3))){
var inst_15158 = (state_15160[(2)]);
var state_15160__$1 = state_15160;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15160__$1,inst_15158);
} else {
if((state_val_15161 === (4))){
var inst_15150 = (state_15160[(2)]);
var inst_15151 = process__$1(inst_15150);
var state_15160__$1 = state_15160;
if(cljs.core.truth_(inst_15151)){
var statearr_15163_16919 = state_15160__$1;
(statearr_15163_16919[(1)] = (5));

} else {
var statearr_15164_16920 = state_15160__$1;
(statearr_15164_16920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (5))){
var state_15160__$1 = state_15160;
var statearr_15165_16921 = state_15160__$1;
(statearr_15165_16921[(2)] = null);

(statearr_15165_16921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (6))){
var state_15160__$1 = state_15160;
var statearr_15170_16922 = state_15160__$1;
(statearr_15170_16922[(2)] = null);

(statearr_15170_16922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (7))){
var inst_15156 = (state_15160[(2)]);
var state_15160__$1 = state_15160;
var statearr_15175_16923 = state_15160__$1;
(statearr_15175_16923[(2)] = inst_15156);

(statearr_15175_16923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__16913,c__14857__auto___16917,G__15147_16914,G__15147_16915__$1,n__5593__auto___16912,jobs,results,process__$1,async))
;
return ((function (__16913,switch__14729__auto__,c__14857__auto___16917,G__15147_16914,G__15147_16915__$1,n__5593__auto___16912,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____0 = (function (){
var statearr_15180 = [null,null,null,null,null,null,null];
(statearr_15180[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__);

(statearr_15180[(1)] = (1));

return statearr_15180;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____1 = (function (state_15160){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_15160);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e15181){var ex__14733__auto__ = e15181;
var statearr_15182_16924 = state_15160;
(statearr_15182_16924[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_15160[(4)]))){
var statearr_15184_16925 = state_15160;
(statearr_15184_16925[(1)] = cljs.core.first((state_15160[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16926 = state_15160;
state_15160 = G__16926;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__ = function(state_15160){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____1.call(this,state_15160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__;
})()
;})(__16913,switch__14729__auto__,c__14857__auto___16917,G__15147_16914,G__15147_16915__$1,n__5593__auto___16912,jobs,results,process__$1,async))
})();
var state__14859__auto__ = (function (){var statearr_15186 = f__14858__auto__();
(statearr_15186[(6)] = c__14857__auto___16917);

return statearr_15186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14859__auto__);
});})(__16913,c__14857__auto___16917,G__15147_16914,G__15147_16915__$1,n__5593__auto___16912,jobs,results,process__$1,async))
);


break;
case "async":
var c__14857__auto___16927 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16913,c__14857__auto___16927,G__15147_16914,G__15147_16915__$1,n__5593__auto___16912,jobs,results,process__$1,async){
return (function (){
var f__14858__auto__ = (function (){var switch__14729__auto__ = ((function (__16913,c__14857__auto___16927,G__15147_16914,G__15147_16915__$1,n__5593__auto___16912,jobs,results,process__$1,async){
return (function (state_15199){
var state_val_15200 = (state_15199[(1)]);
if((state_val_15200 === (1))){
var state_15199__$1 = state_15199;
var statearr_15201_16928 = state_15199__$1;
(statearr_15201_16928[(2)] = null);

(statearr_15201_16928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15200 === (2))){
var state_15199__$1 = state_15199;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15199__$1,(4),jobs);
} else {
if((state_val_15200 === (3))){
var inst_15197 = (state_15199[(2)]);
var state_15199__$1 = state_15199;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15199__$1,inst_15197);
} else {
if((state_val_15200 === (4))){
var inst_15189 = (state_15199[(2)]);
var inst_15190 = async(inst_15189);
var state_15199__$1 = state_15199;
if(cljs.core.truth_(inst_15190)){
var statearr_15202_16929 = state_15199__$1;
(statearr_15202_16929[(1)] = (5));

} else {
var statearr_15203_16930 = state_15199__$1;
(statearr_15203_16930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15200 === (5))){
var state_15199__$1 = state_15199;
var statearr_15206_16931 = state_15199__$1;
(statearr_15206_16931[(2)] = null);

(statearr_15206_16931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15200 === (6))){
var state_15199__$1 = state_15199;
var statearr_15208_16932 = state_15199__$1;
(statearr_15208_16932[(2)] = null);

(statearr_15208_16932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15200 === (7))){
var inst_15195 = (state_15199[(2)]);
var state_15199__$1 = state_15199;
var statearr_15209_16933 = state_15199__$1;
(statearr_15209_16933[(2)] = inst_15195);

(statearr_15209_16933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__16913,c__14857__auto___16927,G__15147_16914,G__15147_16915__$1,n__5593__auto___16912,jobs,results,process__$1,async))
;
return ((function (__16913,switch__14729__auto__,c__14857__auto___16927,G__15147_16914,G__15147_16915__$1,n__5593__auto___16912,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____0 = (function (){
var statearr_15212 = [null,null,null,null,null,null,null];
(statearr_15212[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__);

(statearr_15212[(1)] = (1));

return statearr_15212;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____1 = (function (state_15199){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_15199);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e15219){var ex__14733__auto__ = e15219;
var statearr_15220_16934 = state_15199;
(statearr_15220_16934[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_15199[(4)]))){
var statearr_15221_16935 = state_15199;
(statearr_15221_16935[(1)] = cljs.core.first((state_15199[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16936 = state_15199;
state_15199 = G__16936;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__ = function(state_15199){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____1.call(this,state_15199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__;
})()
;})(__16913,switch__14729__auto__,c__14857__auto___16927,G__15147_16914,G__15147_16915__$1,n__5593__auto___16912,jobs,results,process__$1,async))
})();
var state__14859__auto__ = (function (){var statearr_15222 = f__14858__auto__();
(statearr_15222[(6)] = c__14857__auto___16927);

return statearr_15222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14859__auto__);
});})(__16913,c__14857__auto___16927,G__15147_16914,G__15147_16915__$1,n__5593__auto___16912,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15147_16915__$1)].join('')));

}

var G__16937 = (__16913 + (1));
__16913 = G__16937;
continue;
} else {
}
break;
}

var c__14857__auto___16939 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14858__auto__ = (function (){var switch__14729__auto__ = (function (state_15268){
var state_val_15269 = (state_15268[(1)]);
if((state_val_15269 === (7))){
var inst_15264 = (state_15268[(2)]);
var state_15268__$1 = state_15268;
var statearr_15270_16940 = state_15268__$1;
(statearr_15270_16940[(2)] = inst_15264);

(statearr_15270_16940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15269 === (1))){
var state_15268__$1 = state_15268;
var statearr_15271_16941 = state_15268__$1;
(statearr_15271_16941[(2)] = null);

(statearr_15271_16941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15269 === (4))){
var inst_15249 = (state_15268[(7)]);
var inst_15249__$1 = (state_15268[(2)]);
var inst_15250 = (inst_15249__$1 == null);
var state_15268__$1 = (function (){var statearr_15272 = state_15268;
(statearr_15272[(7)] = inst_15249__$1);

return statearr_15272;
})();
if(cljs.core.truth_(inst_15250)){
var statearr_15273_16942 = state_15268__$1;
(statearr_15273_16942[(1)] = (5));

} else {
var statearr_15274_16943 = state_15268__$1;
(statearr_15274_16943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15269 === (6))){
var inst_15249 = (state_15268[(7)]);
var inst_15254 = (state_15268[(8)]);
var inst_15254__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15255 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15256 = [inst_15249,inst_15254__$1];
var inst_15257 = (new cljs.core.PersistentVector(null,2,(5),inst_15255,inst_15256,null));
var state_15268__$1 = (function (){var statearr_15277 = state_15268;
(statearr_15277[(8)] = inst_15254__$1);

return statearr_15277;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15268__$1,(8),jobs,inst_15257);
} else {
if((state_val_15269 === (3))){
var inst_15266 = (state_15268[(2)]);
var state_15268__$1 = state_15268;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15268__$1,inst_15266);
} else {
if((state_val_15269 === (2))){
var state_15268__$1 = state_15268;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15268__$1,(4),from);
} else {
if((state_val_15269 === (9))){
var inst_15261 = (state_15268[(2)]);
var state_15268__$1 = (function (){var statearr_15278 = state_15268;
(statearr_15278[(9)] = inst_15261);

return statearr_15278;
})();
var statearr_15279_16945 = state_15268__$1;
(statearr_15279_16945[(2)] = null);

(statearr_15279_16945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15269 === (5))){
var inst_15252 = cljs.core.async.close_BANG_(jobs);
var state_15268__$1 = state_15268;
var statearr_15280_16946 = state_15268__$1;
(statearr_15280_16946[(2)] = inst_15252);

(statearr_15280_16946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15269 === (8))){
var inst_15254 = (state_15268[(8)]);
var inst_15259 = (state_15268[(2)]);
var state_15268__$1 = (function (){var statearr_15281 = state_15268;
(statearr_15281[(10)] = inst_15259);

return statearr_15281;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15268__$1,(9),results,inst_15254);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____0 = (function (){
var statearr_15282 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15282[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__);

(statearr_15282[(1)] = (1));

return statearr_15282;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____1 = (function (state_15268){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_15268);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e15283){var ex__14733__auto__ = e15283;
var statearr_15284_16948 = state_15268;
(statearr_15284_16948[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_15268[(4)]))){
var statearr_15287_16949 = state_15268;
(statearr_15287_16949[(1)] = cljs.core.first((state_15268[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16950 = state_15268;
state_15268 = G__16950;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__ = function(state_15268){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____1.call(this,state_15268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__;
})()
})();
var state__14859__auto__ = (function (){var statearr_15289 = f__14858__auto__();
(statearr_15289[(6)] = c__14857__auto___16939);

return statearr_15289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14859__auto__);
}));


var c__14857__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14858__auto__ = (function (){var switch__14729__auto__ = (function (state_15332){
var state_val_15333 = (state_15332[(1)]);
if((state_val_15333 === (7))){
var inst_15328 = (state_15332[(2)]);
var state_15332__$1 = state_15332;
var statearr_15334_16967 = state_15332__$1;
(statearr_15334_16967[(2)] = inst_15328);

(statearr_15334_16967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15333 === (20))){
var state_15332__$1 = state_15332;
var statearr_15335_16968 = state_15332__$1;
(statearr_15335_16968[(2)] = null);

(statearr_15335_16968[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15333 === (1))){
var state_15332__$1 = state_15332;
var statearr_15340_16969 = state_15332__$1;
(statearr_15340_16969[(2)] = null);

(statearr_15340_16969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15333 === (4))){
var inst_15295 = (state_15332[(7)]);
var inst_15295__$1 = (state_15332[(2)]);
var inst_15296 = (inst_15295__$1 == null);
var state_15332__$1 = (function (){var statearr_15349 = state_15332;
(statearr_15349[(7)] = inst_15295__$1);

return statearr_15349;
})();
if(cljs.core.truth_(inst_15296)){
var statearr_15350_16970 = state_15332__$1;
(statearr_15350_16970[(1)] = (5));

} else {
var statearr_15351_16971 = state_15332__$1;
(statearr_15351_16971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15333 === (15))){
var inst_15308 = (state_15332[(8)]);
var state_15332__$1 = state_15332;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15332__$1,(18),to,inst_15308);
} else {
if((state_val_15333 === (21))){
var inst_15323 = (state_15332[(2)]);
var state_15332__$1 = state_15332;
var statearr_15352_16972 = state_15332__$1;
(statearr_15352_16972[(2)] = inst_15323);

(statearr_15352_16972[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15333 === (13))){
var inst_15325 = (state_15332[(2)]);
var state_15332__$1 = (function (){var statearr_15353 = state_15332;
(statearr_15353[(9)] = inst_15325);

return statearr_15353;
})();
var statearr_15354_16973 = state_15332__$1;
(statearr_15354_16973[(2)] = null);

(statearr_15354_16973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15333 === (6))){
var inst_15295 = (state_15332[(7)]);
var state_15332__$1 = state_15332;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15332__$1,(11),inst_15295);
} else {
if((state_val_15333 === (17))){
var inst_15318 = (state_15332[(2)]);
var state_15332__$1 = state_15332;
if(cljs.core.truth_(inst_15318)){
var statearr_15355_16974 = state_15332__$1;
(statearr_15355_16974[(1)] = (19));

} else {
var statearr_15356_16975 = state_15332__$1;
(statearr_15356_16975[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15333 === (3))){
var inst_15330 = (state_15332[(2)]);
var state_15332__$1 = state_15332;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15332__$1,inst_15330);
} else {
if((state_val_15333 === (12))){
var inst_15305 = (state_15332[(10)]);
var state_15332__$1 = state_15332;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15332__$1,(14),inst_15305);
} else {
if((state_val_15333 === (2))){
var state_15332__$1 = state_15332;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15332__$1,(4),results);
} else {
if((state_val_15333 === (19))){
var state_15332__$1 = state_15332;
var statearr_15358_16976 = state_15332__$1;
(statearr_15358_16976[(2)] = null);

(statearr_15358_16976[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15333 === (11))){
var inst_15305 = (state_15332[(2)]);
var state_15332__$1 = (function (){var statearr_15359 = state_15332;
(statearr_15359[(10)] = inst_15305);

return statearr_15359;
})();
var statearr_15360_16977 = state_15332__$1;
(statearr_15360_16977[(2)] = null);

(statearr_15360_16977[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15333 === (9))){
var state_15332__$1 = state_15332;
var statearr_15361_16978 = state_15332__$1;
(statearr_15361_16978[(2)] = null);

(statearr_15361_16978[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15333 === (5))){
var state_15332__$1 = state_15332;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15366_16979 = state_15332__$1;
(statearr_15366_16979[(1)] = (8));

} else {
var statearr_15367_16980 = state_15332__$1;
(statearr_15367_16980[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15333 === (14))){
var inst_15312 = (state_15332[(11)]);
var inst_15308 = (state_15332[(8)]);
var inst_15308__$1 = (state_15332[(2)]);
var inst_15311 = (inst_15308__$1 == null);
var inst_15312__$1 = cljs.core.not(inst_15311);
var state_15332__$1 = (function (){var statearr_15371 = state_15332;
(statearr_15371[(11)] = inst_15312__$1);

(statearr_15371[(8)] = inst_15308__$1);

return statearr_15371;
})();
if(inst_15312__$1){
var statearr_15374_16981 = state_15332__$1;
(statearr_15374_16981[(1)] = (15));

} else {
var statearr_15376_16982 = state_15332__$1;
(statearr_15376_16982[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15333 === (16))){
var inst_15312 = (state_15332[(11)]);
var state_15332__$1 = state_15332;
var statearr_15377_16983 = state_15332__$1;
(statearr_15377_16983[(2)] = inst_15312);

(statearr_15377_16983[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15333 === (10))){
var inst_15302 = (state_15332[(2)]);
var state_15332__$1 = state_15332;
var statearr_15378_16984 = state_15332__$1;
(statearr_15378_16984[(2)] = inst_15302);

(statearr_15378_16984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15333 === (18))){
var inst_15315 = (state_15332[(2)]);
var state_15332__$1 = state_15332;
var statearr_15379_16985 = state_15332__$1;
(statearr_15379_16985[(2)] = inst_15315);

(statearr_15379_16985[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15333 === (8))){
var inst_15299 = cljs.core.async.close_BANG_(to);
var state_15332__$1 = state_15332;
var statearr_15381_16986 = state_15332__$1;
(statearr_15381_16986[(2)] = inst_15299);

(statearr_15381_16986[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____0 = (function (){
var statearr_15382 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15382[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__);

(statearr_15382[(1)] = (1));

return statearr_15382;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____1 = (function (state_15332){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_15332);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e15383){var ex__14733__auto__ = e15383;
var statearr_15384_16987 = state_15332;
(statearr_15384_16987[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_15332[(4)]))){
var statearr_15385_16988 = state_15332;
(statearr_15385_16988[(1)] = cljs.core.first((state_15332[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16989 = state_15332;
state_15332 = G__16989;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__ = function(state_15332){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____1.call(this,state_15332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14730__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14730__auto__;
})()
})();
var state__14859__auto__ = (function (){var statearr_15390 = f__14858__auto__();
(statearr_15390[(6)] = c__14857__auto__);

return statearr_15390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14859__auto__);
}));

return c__14857__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15400 = arguments.length;
switch (G__15400) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15403 = arguments.length;
switch (G__15403) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15416 = arguments.length;
switch (G__15416) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14857__auto___16993 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14858__auto__ = (function (){var switch__14729__auto__ = (function (state_15469){
var state_val_15470 = (state_15469[(1)]);
if((state_val_15470 === (7))){
var inst_15465 = (state_15469[(2)]);
var state_15469__$1 = state_15469;
var statearr_15471_16998 = state_15469__$1;
(statearr_15471_16998[(2)] = inst_15465);

(statearr_15471_16998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15470 === (1))){
var state_15469__$1 = state_15469;
var statearr_15472_16999 = state_15469__$1;
(statearr_15472_16999[(2)] = null);

(statearr_15472_16999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15470 === (4))){
var inst_15446 = (state_15469[(7)]);
var inst_15446__$1 = (state_15469[(2)]);
var inst_15447 = (inst_15446__$1 == null);
var state_15469__$1 = (function (){var statearr_15473 = state_15469;
(statearr_15473[(7)] = inst_15446__$1);

return statearr_15473;
})();
if(cljs.core.truth_(inst_15447)){
var statearr_15474_17000 = state_15469__$1;
(statearr_15474_17000[(1)] = (5));

} else {
var statearr_15475_17001 = state_15469__$1;
(statearr_15475_17001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15470 === (13))){
var state_15469__$1 = state_15469;
var statearr_15476_17002 = state_15469__$1;
(statearr_15476_17002[(2)] = null);

(statearr_15476_17002[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15470 === (6))){
var inst_15446 = (state_15469[(7)]);
var inst_15452 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15446) : p.call(null,inst_15446));
var state_15469__$1 = state_15469;
if(cljs.core.truth_(inst_15452)){
var statearr_15477_17003 = state_15469__$1;
(statearr_15477_17003[(1)] = (9));

} else {
var statearr_15478_17004 = state_15469__$1;
(statearr_15478_17004[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15470 === (3))){
var inst_15467 = (state_15469[(2)]);
var state_15469__$1 = state_15469;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15469__$1,inst_15467);
} else {
if((state_val_15470 === (12))){
var state_15469__$1 = state_15469;
var statearr_15479_17005 = state_15469__$1;
(statearr_15479_17005[(2)] = null);

(statearr_15479_17005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15470 === (2))){
var state_15469__$1 = state_15469;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15469__$1,(4),ch);
} else {
if((state_val_15470 === (11))){
var inst_15446 = (state_15469[(7)]);
var inst_15456 = (state_15469[(2)]);
var state_15469__$1 = state_15469;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15469__$1,(8),inst_15456,inst_15446);
} else {
if((state_val_15470 === (9))){
var state_15469__$1 = state_15469;
var statearr_15480_17006 = state_15469__$1;
(statearr_15480_17006[(2)] = tc);

(statearr_15480_17006[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15470 === (5))){
var inst_15449 = cljs.core.async.close_BANG_(tc);
var inst_15450 = cljs.core.async.close_BANG_(fc);
var state_15469__$1 = (function (){var statearr_15481 = state_15469;
(statearr_15481[(8)] = inst_15449);

return statearr_15481;
})();
var statearr_15482_17007 = state_15469__$1;
(statearr_15482_17007[(2)] = inst_15450);

(statearr_15482_17007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15470 === (14))){
var inst_15463 = (state_15469[(2)]);
var state_15469__$1 = state_15469;
var statearr_15483_17008 = state_15469__$1;
(statearr_15483_17008[(2)] = inst_15463);

(statearr_15483_17008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15470 === (10))){
var state_15469__$1 = state_15469;
var statearr_15484_17009 = state_15469__$1;
(statearr_15484_17009[(2)] = fc);

(statearr_15484_17009[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15470 === (8))){
var inst_15458 = (state_15469[(2)]);
var state_15469__$1 = state_15469;
if(cljs.core.truth_(inst_15458)){
var statearr_15485_17010 = state_15469__$1;
(statearr_15485_17010[(1)] = (12));

} else {
var statearr_15486_17011 = state_15469__$1;
(statearr_15486_17011[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14730__auto__ = null;
var cljs$core$async$state_machine__14730__auto____0 = (function (){
var statearr_15487 = [null,null,null,null,null,null,null,null,null];
(statearr_15487[(0)] = cljs$core$async$state_machine__14730__auto__);

(statearr_15487[(1)] = (1));

return statearr_15487;
});
var cljs$core$async$state_machine__14730__auto____1 = (function (state_15469){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_15469);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e15488){var ex__14733__auto__ = e15488;
var statearr_15489_17015 = state_15469;
(statearr_15489_17015[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_15469[(4)]))){
var statearr_15490_17016 = state_15469;
(statearr_15490_17016[(1)] = cljs.core.first((state_15469[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17017 = state_15469;
state_15469 = G__17017;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$state_machine__14730__auto__ = function(state_15469){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14730__auto____1.call(this,state_15469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14730__auto____0;
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14730__auto____1;
return cljs$core$async$state_machine__14730__auto__;
})()
})();
var state__14859__auto__ = (function (){var statearr_15491 = f__14858__auto__();
(statearr_15491[(6)] = c__14857__auto___16993);

return statearr_15491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14859__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14857__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14858__auto__ = (function (){var switch__14729__auto__ = (function (state_15513){
var state_val_15514 = (state_15513[(1)]);
if((state_val_15514 === (7))){
var inst_15509 = (state_15513[(2)]);
var state_15513__$1 = state_15513;
var statearr_15532_17018 = state_15513__$1;
(statearr_15532_17018[(2)] = inst_15509);

(statearr_15532_17018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15514 === (1))){
var inst_15492 = init;
var inst_15493 = inst_15492;
var state_15513__$1 = (function (){var statearr_15533 = state_15513;
(statearr_15533[(7)] = inst_15493);

return statearr_15533;
})();
var statearr_15534_17019 = state_15513__$1;
(statearr_15534_17019[(2)] = null);

(statearr_15534_17019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15514 === (4))){
var inst_15496 = (state_15513[(8)]);
var inst_15496__$1 = (state_15513[(2)]);
var inst_15497 = (inst_15496__$1 == null);
var state_15513__$1 = (function (){var statearr_15535 = state_15513;
(statearr_15535[(8)] = inst_15496__$1);

return statearr_15535;
})();
if(cljs.core.truth_(inst_15497)){
var statearr_15536_17020 = state_15513__$1;
(statearr_15536_17020[(1)] = (5));

} else {
var statearr_15537_17021 = state_15513__$1;
(statearr_15537_17021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15514 === (6))){
var inst_15500 = (state_15513[(9)]);
var inst_15496 = (state_15513[(8)]);
var inst_15493 = (state_15513[(7)]);
var inst_15500__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15493,inst_15496) : f.call(null,inst_15493,inst_15496));
var inst_15501 = cljs.core.reduced_QMARK_(inst_15500__$1);
var state_15513__$1 = (function (){var statearr_15538 = state_15513;
(statearr_15538[(9)] = inst_15500__$1);

return statearr_15538;
})();
if(inst_15501){
var statearr_15539_17022 = state_15513__$1;
(statearr_15539_17022[(1)] = (8));

} else {
var statearr_15540_17023 = state_15513__$1;
(statearr_15540_17023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15514 === (3))){
var inst_15511 = (state_15513[(2)]);
var state_15513__$1 = state_15513;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15513__$1,inst_15511);
} else {
if((state_val_15514 === (2))){
var state_15513__$1 = state_15513;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15513__$1,(4),ch);
} else {
if((state_val_15514 === (9))){
var inst_15500 = (state_15513[(9)]);
var inst_15493 = inst_15500;
var state_15513__$1 = (function (){var statearr_15575 = state_15513;
(statearr_15575[(7)] = inst_15493);

return statearr_15575;
})();
var statearr_15576_17024 = state_15513__$1;
(statearr_15576_17024[(2)] = null);

(statearr_15576_17024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15514 === (5))){
var inst_15493 = (state_15513[(7)]);
var state_15513__$1 = state_15513;
var statearr_15577_17042 = state_15513__$1;
(statearr_15577_17042[(2)] = inst_15493);

(statearr_15577_17042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15514 === (10))){
var inst_15507 = (state_15513[(2)]);
var state_15513__$1 = state_15513;
var statearr_15578_17043 = state_15513__$1;
(statearr_15578_17043[(2)] = inst_15507);

(statearr_15578_17043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15514 === (8))){
var inst_15500 = (state_15513[(9)]);
var inst_15503 = cljs.core.deref(inst_15500);
var state_15513__$1 = state_15513;
var statearr_15579_17044 = state_15513__$1;
(statearr_15579_17044[(2)] = inst_15503);

(statearr_15579_17044[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14730__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14730__auto____0 = (function (){
var statearr_15580 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15580[(0)] = cljs$core$async$reduce_$_state_machine__14730__auto__);

(statearr_15580[(1)] = (1));

return statearr_15580;
});
var cljs$core$async$reduce_$_state_machine__14730__auto____1 = (function (state_15513){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_15513);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e15581){var ex__14733__auto__ = e15581;
var statearr_15582_17045 = state_15513;
(statearr_15582_17045[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_15513[(4)]))){
var statearr_15583_17046 = state_15513;
(statearr_15583_17046[(1)] = cljs.core.first((state_15513[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17047 = state_15513;
state_15513 = G__17047;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14730__auto__ = function(state_15513){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14730__auto____1.call(this,state_15513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14730__auto____0;
cljs$core$async$reduce_$_state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14730__auto____1;
return cljs$core$async$reduce_$_state_machine__14730__auto__;
})()
})();
var state__14859__auto__ = (function (){var statearr_15584 = f__14858__auto__();
(statearr_15584[(6)] = c__14857__auto__);

return statearr_15584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14859__auto__);
}));

return c__14857__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14857__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14858__auto__ = (function (){var switch__14729__auto__ = (function (state_15590){
var state_val_15591 = (state_15590[(1)]);
if((state_val_15591 === (1))){
var inst_15585 = cljs.core.async.reduce(f__$1,init,ch);
var state_15590__$1 = state_15590;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15590__$1,(2),inst_15585);
} else {
if((state_val_15591 === (2))){
var inst_15587 = (state_15590[(2)]);
var inst_15588 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15587) : f__$1.call(null,inst_15587));
var state_15590__$1 = state_15590;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15590__$1,inst_15588);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14730__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14730__auto____0 = (function (){
var statearr_15592 = [null,null,null,null,null,null,null];
(statearr_15592[(0)] = cljs$core$async$transduce_$_state_machine__14730__auto__);

(statearr_15592[(1)] = (1));

return statearr_15592;
});
var cljs$core$async$transduce_$_state_machine__14730__auto____1 = (function (state_15590){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_15590);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e15593){var ex__14733__auto__ = e15593;
var statearr_15594_17048 = state_15590;
(statearr_15594_17048[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_15590[(4)]))){
var statearr_15595_17049 = state_15590;
(statearr_15595_17049[(1)] = cljs.core.first((state_15590[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17050 = state_15590;
state_15590 = G__17050;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14730__auto__ = function(state_15590){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14730__auto____1.call(this,state_15590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14730__auto____0;
cljs$core$async$transduce_$_state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14730__auto____1;
return cljs$core$async$transduce_$_state_machine__14730__auto__;
})()
})();
var state__14859__auto__ = (function (){var statearr_15596 = f__14858__auto__();
(statearr_15596[(6)] = c__14857__auto__);

return statearr_15596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14859__auto__);
}));

return c__14857__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15598 = arguments.length;
switch (G__15598) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14857__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14858__auto__ = (function (){var switch__14729__auto__ = (function (state_15651){
var state_val_15652 = (state_15651[(1)]);
if((state_val_15652 === (7))){
var inst_15633 = (state_15651[(2)]);
var state_15651__$1 = state_15651;
var statearr_15653_17052 = state_15651__$1;
(statearr_15653_17052[(2)] = inst_15633);

(statearr_15653_17052[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15652 === (1))){
var inst_15599 = cljs.core.seq(coll);
var inst_15600 = inst_15599;
var state_15651__$1 = (function (){var statearr_15654 = state_15651;
(statearr_15654[(7)] = inst_15600);

return statearr_15654;
})();
var statearr_15655_17053 = state_15651__$1;
(statearr_15655_17053[(2)] = null);

(statearr_15655_17053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15652 === (4))){
var inst_15600 = (state_15651[(7)]);
var inst_15631 = cljs.core.first(inst_15600);
var state_15651__$1 = state_15651;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15651__$1,(7),ch,inst_15631);
} else {
if((state_val_15652 === (13))){
var inst_15645 = (state_15651[(2)]);
var state_15651__$1 = state_15651;
var statearr_15656_17054 = state_15651__$1;
(statearr_15656_17054[(2)] = inst_15645);

(statearr_15656_17054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15652 === (6))){
var inst_15636 = (state_15651[(2)]);
var state_15651__$1 = state_15651;
if(cljs.core.truth_(inst_15636)){
var statearr_15657_17055 = state_15651__$1;
(statearr_15657_17055[(1)] = (8));

} else {
var statearr_15658_17056 = state_15651__$1;
(statearr_15658_17056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15652 === (3))){
var inst_15649 = (state_15651[(2)]);
var state_15651__$1 = state_15651;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15651__$1,inst_15649);
} else {
if((state_val_15652 === (12))){
var state_15651__$1 = state_15651;
var statearr_15659_17057 = state_15651__$1;
(statearr_15659_17057[(2)] = null);

(statearr_15659_17057[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15652 === (2))){
var inst_15600 = (state_15651[(7)]);
var state_15651__$1 = state_15651;
if(cljs.core.truth_(inst_15600)){
var statearr_15660_17058 = state_15651__$1;
(statearr_15660_17058[(1)] = (4));

} else {
var statearr_15661_17059 = state_15651__$1;
(statearr_15661_17059[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15652 === (11))){
var inst_15642 = cljs.core.async.close_BANG_(ch);
var state_15651__$1 = state_15651;
var statearr_15662_17060 = state_15651__$1;
(statearr_15662_17060[(2)] = inst_15642);

(statearr_15662_17060[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15652 === (9))){
var state_15651__$1 = state_15651;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15663_17061 = state_15651__$1;
(statearr_15663_17061[(1)] = (11));

} else {
var statearr_15664_17062 = state_15651__$1;
(statearr_15664_17062[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15652 === (5))){
var inst_15600 = (state_15651[(7)]);
var state_15651__$1 = state_15651;
var statearr_15665_17063 = state_15651__$1;
(statearr_15665_17063[(2)] = inst_15600);

(statearr_15665_17063[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15652 === (10))){
var inst_15647 = (state_15651[(2)]);
var state_15651__$1 = state_15651;
var statearr_15666_17064 = state_15651__$1;
(statearr_15666_17064[(2)] = inst_15647);

(statearr_15666_17064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15652 === (8))){
var inst_15600 = (state_15651[(7)]);
var inst_15638 = cljs.core.next(inst_15600);
var inst_15600__$1 = inst_15638;
var state_15651__$1 = (function (){var statearr_15667 = state_15651;
(statearr_15667[(7)] = inst_15600__$1);

return statearr_15667;
})();
var statearr_15668_17065 = state_15651__$1;
(statearr_15668_17065[(2)] = null);

(statearr_15668_17065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14730__auto__ = null;
var cljs$core$async$state_machine__14730__auto____0 = (function (){
var statearr_15670 = [null,null,null,null,null,null,null,null];
(statearr_15670[(0)] = cljs$core$async$state_machine__14730__auto__);

(statearr_15670[(1)] = (1));

return statearr_15670;
});
var cljs$core$async$state_machine__14730__auto____1 = (function (state_15651){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_15651);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e15671){var ex__14733__auto__ = e15671;
var statearr_15672_17066 = state_15651;
(statearr_15672_17066[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_15651[(4)]))){
var statearr_15673_17067 = state_15651;
(statearr_15673_17067[(1)] = cljs.core.first((state_15651[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17068 = state_15651;
state_15651 = G__17068;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$state_machine__14730__auto__ = function(state_15651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14730__auto____1.call(this,state_15651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14730__auto____0;
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14730__auto____1;
return cljs$core$async$state_machine__14730__auto__;
})()
})();
var state__14859__auto__ = (function (){var statearr_15674 = f__14858__auto__();
(statearr_15674[(6)] = c__14857__auto__);

return statearr_15674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14859__auto__);
}));

return c__14857__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15676 = arguments.length;
switch (G__15676) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_17070 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null,_));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_17070(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17071 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_17071(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17072 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_17072(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17073 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_17073(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15677 = (function (ch,cs,meta15678){
this.ch = ch;
this.cs = cs;
this.meta15678 = meta15678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15679,meta15678__$1){
var self__ = this;
var _15679__$1 = this;
return (new cljs.core.async.t_cljs$core$async15677(self__.ch,self__.cs,meta15678__$1));
}));

(cljs.core.async.t_cljs$core$async15677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15679){
var self__ = this;
var _15679__$1 = this;
return self__.meta15678;
}));

(cljs.core.async.t_cljs$core$async15677.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15677.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15677.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15677.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15677.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15677.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15677.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15678","meta15678",-133079570,null)], null);
}));

(cljs.core.async.t_cljs$core$async15677.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15677.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15677");

(cljs.core.async.t_cljs$core$async15677.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15677");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15677.
 */
cljs.core.async.__GT_t_cljs$core$async15677 = (function cljs$core$async$__GT_t_cljs$core$async15677(ch,cs,meta15678){
return (new cljs.core.async.t_cljs$core$async15677(ch,cs,meta15678));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15677(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14857__auto___17074 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14858__auto__ = (function (){var switch__14729__auto__ = (function (state_15857){
var state_val_15858 = (state_15857[(1)]);
if((state_val_15858 === (7))){
var inst_15853 = (state_15857[(2)]);
var state_15857__$1 = state_15857;
var statearr_15859_17075 = state_15857__$1;
(statearr_15859_17075[(2)] = inst_15853);

(statearr_15859_17075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15858 === (20))){
var inst_15758 = (state_15857[(7)]);
var inst_15770 = cljs.core.first(inst_15758);
var inst_15771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15770,(0),null);
var inst_15772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15770,(1),null);
var state_15857__$1 = (function (){var statearr_15860 = state_15857;
(statearr_15860[(8)] = inst_15771);

return statearr_15860;
})();
if(cljs.core.truth_(inst_15772)){
var statearr_15861_17076 = state_15857__$1;
(statearr_15861_17076[(1)] = (22));

} else {
var statearr_15862_17077 = state_15857__$1;
(statearr_15862_17077[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15858 === (27))){
var inst_15800 = (state_15857[(9)]);
var inst_15807 = (state_15857[(10)]);
var inst_15802 = (state_15857[(11)]);
var inst_15727 = (state_15857[(12)]);
var inst_15807__$1 = cljs.core._nth(inst_15800,inst_15802);
var inst_15808 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15807__$1,inst_15727,done);
var state_15857__$1 = (function (){var statearr_15863 = state_15857;
(statearr_15863[(10)] = inst_15807__$1);

return statearr_15863;
})();
if(cljs.core.truth_(inst_15808)){
var statearr_15864_17078 = state_15857__$1;
(statearr_15864_17078[(1)] = (30));

} else {
var statearr_15865_17079 = state_15857__$1;
(statearr_15865_17079[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15858 === (1))){
var state_15857__$1 = state_15857;
var statearr_15866_17080 = state_15857__$1;
(statearr_15866_17080[(2)] = null);

(statearr_15866_17080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15858 === (24))){
var inst_15758 = (state_15857[(7)]);
var inst_15777 = (state_15857[(2)]);
var inst_15778 = cljs.core.next(inst_15758);
var inst_15736 = inst_15778;
var inst_15737 = null;
var inst_15738 = (0);
var inst_15739 = (0);
var state_15857__$1 = (function (){var statearr_15867 = state_15857;
(statearr_15867[(13)] = inst_15777);

(statearr_15867[(14)] = inst_15739);

(statearr_15867[(15)] = inst_15736);

(statearr_15867[(16)] = inst_15737);

(statearr_15867[(17)] = inst_15738);

return statearr_15867;
})();
var statearr_15868_17081 = state_15857__$1;
(statearr_15868_17081[(2)] = null);

(statearr_15868_17081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15858 === (39))){
var state_15857__$1 = state_15857;
var statearr_15872_17082 = state_15857__$1;
(statearr_15872_17082[(2)] = null);

(statearr_15872_17082[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15858 === (4))){
var inst_15727 = (state_15857[(12)]);
var inst_15727__$1 = (state_15857[(2)]);
var inst_15728 = (inst_15727__$1 == null);
var state_15857__$1 = (function (){var statearr_15873 = state_15857;
(statearr_15873[(12)] = inst_15727__$1);

return statearr_15873;
})();
if(cljs.core.truth_(inst_15728)){
var statearr_15874_17083 = state_15857__$1;
(statearr_15874_17083[(1)] = (5));

} else {
var statearr_15875_17084 = state_15857__$1;
(statearr_15875_17084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15858 === (15))){
var inst_15739 = (state_15857[(14)]);
var inst_15736 = (state_15857[(15)]);
var inst_15737 = (state_15857[(16)]);
var inst_15738 = (state_15857[(17)]);
var inst_15754 = (state_15857[(2)]);
var inst_15755 = (inst_15739 + (1));
var tmp15869 = inst_15736;
var tmp15870 = inst_15737;
var tmp15871 = inst_15738;
var inst_15736__$1 = tmp15869;
var inst_15737__$1 = tmp15870;
var inst_15738__$1 = tmp15871;
var inst_15739__$1 = inst_15755;
var state_15857__$1 = (function (){var statearr_15876 = state_15857;
(statearr_15876[(14)] = inst_15739__$1);

(statearr_15876[(15)] = inst_15736__$1);

(statearr_15876[(18)] = inst_15754);

(statearr_15876[(16)] = inst_15737__$1);

(statearr_15876[(17)] = inst_15738__$1);

return statearr_15876;
})();
var statearr_15877_17085 = state_15857__$1;
(statearr_15877_17085[(2)] = null);

(statearr_15877_17085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15858 === (21))){
var inst_15781 = (state_15857[(2)]);
var state_15857__$1 = state_15857;
var statearr_15881_17086 = state_15857__$1;
(statearr_15881_17086[(2)] = inst_15781);

(statearr_15881_17086[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15858 === (31))){
var inst_15807 = (state_15857[(10)]);
var inst_15811 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15807);
var state_15857__$1 = state_15857;
var statearr_15882_17087 = state_15857__$1;
(statearr_15882_17087[(2)] = inst_15811);

(statearr_15882_17087[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15858 === (32))){
var inst_15799 = (state_15857[(19)]);
var inst_15800 = (state_15857[(9)]);
var inst_15802 = (state_15857[(11)]);
var inst_15801 = (state_15857[(20)]);
var inst_15813 = (state_15857[(2)]);
var inst_15814 = (inst_15802 + (1));
var tmp15878 = inst_15799;
var tmp15879 = inst_15800;
var tmp15880 = inst_15801;
var inst_15799__$1 = tmp15878;
var inst_15800__$1 = tmp15879;
var inst_15801__$1 = tmp15880;
var inst_15802__$1 = inst_15814;
var state_15857__$1 = (function (){var statearr_15883 = state_15857;
(statearr_15883[(19)] = inst_15799__$1);

(statearr_15883[(9)] = inst_15800__$1);

(statearr_15883[(21)] = inst_15813);

(statearr_15883[(11)] = inst_15802__$1);

(statearr_15883[(20)] = inst_15801__$1);

return statearr_15883;
})();
var statearr_15884_17088 = state_15857__$1;
(statearr_15884_17088[(2)] = null);

(statearr_15884_17088[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15858 === (40))){
var inst_15826 = (state_15857[(22)]);
var inst_15830 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15826);
var state_15857__$1 = state_15857;
var statearr_15885_17089 = state_15857__$1;
(statearr_15885_17089[(2)] = inst_15830);

(statearr_15885_17089[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15858 === (33))){
var inst_15817 = (state_15857[(23)]);
var inst_15819 = cljs.core.chunked_seq_QMARK_(inst_15817);
var state_15857__$1 = state_15857;
if(inst_15819){
var statearr_15886_17090 = state_15857__$1;
(statearr_15886_17090[(1)] = (36));

} else {
var statearr_15887_17091 = state_15857__$1;
(statearr_15887_17091[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15858 === (13))){
var inst_15748 = (state_15857[(24)]);
var inst_15751 = cljs.core.async.close_BANG_(inst_15748);
var state_15857__$1 = state_15857;
var statearr_15888_17092 = state_15857__$1;
(statearr_15888_17092[(2)] = inst_15751);

(statearr_15888_17092[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15858 === (22))){
var inst_15771 = (state_15857[(8)]);
var inst_15774 = cljs.core.async.close_BANG_(inst_15771);
var state_15857__$1 = state_15857;
var statearr_15889_17093 = state_15857__$1;
(statearr_15889_17093[(2)] = inst_15774);

(statearr_15889_17093[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15858 === (36))){
var inst_15817 = (state_15857[(23)]);
var inst_15821 = cljs.core.chunk_first(inst_15817);
var inst_15822 = cljs.core.chunk_rest(inst_15817);
var inst_15823 = cljs.core.count(inst_15821);
var inst_15799 = inst_15822;
var inst_15800 = inst_15821;
var inst_15801 = inst_15823;
var inst_15802 = (0);
var state_15857__$1 = (function (){var statearr_15890 = state_15857;
(statearr_15890[(19)] = inst_15799);

(statearr_15890[(9)] = inst_15800);

(statearr_15890[(11)] = inst_15802);

(statearr_15890[(20)] = inst_15801);

return statearr_15890;
})();
var statearr_15891_17094 = state_15857__$1;
(statearr_15891_17094[(2)] = null);

(statearr_15891_17094[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15858 === (41))){
var inst_15817 = (state_15857[(23)]);
var inst_15832 = (state_15857[(2)]);
var inst_15833 = cljs.core.next(inst_15817);
var inst_15799 = inst_15833;
var inst_15800 = null;
var inst_15801 = (0);
var inst_15802 = (0);
var state_15857__$1 = (function (){var statearr_15892 = state_15857;
(statearr_15892[(19)] = inst_15799);

(statearr_15892[(9)] = inst_15800);

(statearr_15892[(11)] = inst_15802);

(statearr_15892[(25)] = inst_15832);

(statearr_15892[(20)] = inst_15801);

return statearr_15892;
})();
var statearr_15893_17095 = state_15857__$1;
(statearr_15893_17095[(2)] = null);

(statearr_15893_17095[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15858 === (43))){
var state_15857__$1 = state_15857;
var statearr_15894_17096 = state_15857__$1;
(statearr_15894_17096[(2)] = null);

(statearr_15894_17096[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15858 === (29))){
var inst_15841 = (state_15857[(2)]);
var state_15857__$1 = state_15857;
var statearr_15895_17097 = state_15857__$1;
(statearr_15895_17097[(2)] = inst_15841);

(statearr_15895_17097[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15858 === (44))){
var inst_15850 = (state_15857[(2)]);
var state_15857__$1 = (function (){var statearr_15896 = state_15857;
(statearr_15896[(26)] = inst_15850);

return statearr_15896;
})();
var statearr_15897_17098 = state_15857__$1;
(statearr_15897_17098[(2)] = null);

(statearr_15897_17098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15858 === (6))){
var inst_15791 = (state_15857[(27)]);
var inst_15790 = cljs.core.deref(cs);
var inst_15791__$1 = cljs.core.keys(inst_15790);
var inst_15792 = cljs.core.count(inst_15791__$1);
var inst_15793 = cljs.core.reset_BANG_(dctr,inst_15792);
var inst_15798 = cljs.core.seq(inst_15791__$1);
var inst_15799 = inst_15798;
var inst_15800 = null;
var inst_15801 = (0);
var inst_15802 = (0);
var state_15857__$1 = (function (){var statearr_15920 = state_15857;
(statearr_15920[(19)] = inst_15799);

(statearr_15920[(9)] = inst_15800);

(statearr_15920[(27)] = inst_15791__$1);

(statearr_15920[(28)] = inst_15793);

(statearr_15920[(11)] = inst_15802);

(statearr_15920[(20)] = inst_15801);

return statearr_15920;
})();
var statearr_15921_17099 = state_15857__$1;
(statearr_15921_17099[(2)] = null);

(statearr_15921_17099[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15858 === (28))){
var inst_15799 = (state_15857[(19)]);
var inst_15817 = (state_15857[(23)]);
var inst_15817__$1 = cljs.core.seq(inst_15799);
var state_15857__$1 = (function (){var statearr_15922 = state_15857;
(statearr_15922[(23)] = inst_15817__$1);

return statearr_15922;
})();
if(inst_15817__$1){
var statearr_15923_17100 = state_15857__$1;
(statearr_15923_17100[(1)] = (33));

} else {
var statearr_15924_17101 = state_15857__$1;
(statearr_15924_17101[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15858 === (25))){
var inst_15802 = (state_15857[(11)]);
var inst_15801 = (state_15857[(20)]);
var inst_15804 = (inst_15802 < inst_15801);
var inst_15805 = inst_15804;
var state_15857__$1 = state_15857;
if(cljs.core.truth_(inst_15805)){
var statearr_15925_17102 = state_15857__$1;
(statearr_15925_17102[(1)] = (27));

} else {
var statearr_15926_17103 = state_15857__$1;
(statearr_15926_17103[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15858 === (34))){
var state_15857__$1 = state_15857;
var statearr_15927_17104 = state_15857__$1;
(statearr_15927_17104[(2)] = null);

(statearr_15927_17104[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15858 === (17))){
var state_15857__$1 = state_15857;
var statearr_15928_17105 = state_15857__$1;
(statearr_15928_17105[(2)] = null);

(statearr_15928_17105[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15858 === (3))){
var inst_15855 = (state_15857[(2)]);
var state_15857__$1 = state_15857;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15857__$1,inst_15855);
} else {
if((state_val_15858 === (12))){
var inst_15786 = (state_15857[(2)]);
var state_15857__$1 = state_15857;
var statearr_15929_17106 = state_15857__$1;
(statearr_15929_17106[(2)] = inst_15786);

(statearr_15929_17106[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15858 === (2))){
var state_15857__$1 = state_15857;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15857__$1,(4),ch);
} else {
if((state_val_15858 === (23))){
var state_15857__$1 = state_15857;
var statearr_15930_17107 = state_15857__$1;
(statearr_15930_17107[(2)] = null);

(statearr_15930_17107[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15858 === (35))){
var inst_15839 = (state_15857[(2)]);
var state_15857__$1 = state_15857;
var statearr_15931_17108 = state_15857__$1;
(statearr_15931_17108[(2)] = inst_15839);

(statearr_15931_17108[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15858 === (19))){
var inst_15758 = (state_15857[(7)]);
var inst_15762 = cljs.core.chunk_first(inst_15758);
var inst_15763 = cljs.core.chunk_rest(inst_15758);
var inst_15764 = cljs.core.count(inst_15762);
var inst_15736 = inst_15763;
var inst_15737 = inst_15762;
var inst_15738 = inst_15764;
var inst_15739 = (0);
var state_15857__$1 = (function (){var statearr_15932 = state_15857;
(statearr_15932[(14)] = inst_15739);

(statearr_15932[(15)] = inst_15736);

(statearr_15932[(16)] = inst_15737);

(statearr_15932[(17)] = inst_15738);

return statearr_15932;
})();
var statearr_15933_17109 = state_15857__$1;
(statearr_15933_17109[(2)] = null);

(statearr_15933_17109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15858 === (11))){
var inst_15736 = (state_15857[(15)]);
var inst_15758 = (state_15857[(7)]);
var inst_15758__$1 = cljs.core.seq(inst_15736);
var state_15857__$1 = (function (){var statearr_15934 = state_15857;
(statearr_15934[(7)] = inst_15758__$1);

return statearr_15934;
})();
if(inst_15758__$1){
var statearr_15935_17110 = state_15857__$1;
(statearr_15935_17110[(1)] = (16));

} else {
var statearr_15936_17111 = state_15857__$1;
(statearr_15936_17111[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15858 === (9))){
var inst_15788 = (state_15857[(2)]);
var state_15857__$1 = state_15857;
var statearr_15937_17112 = state_15857__$1;
(statearr_15937_17112[(2)] = inst_15788);

(statearr_15937_17112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15858 === (5))){
var inst_15734 = cljs.core.deref(cs);
var inst_15735 = cljs.core.seq(inst_15734);
var inst_15736 = inst_15735;
var inst_15737 = null;
var inst_15738 = (0);
var inst_15739 = (0);
var state_15857__$1 = (function (){var statearr_15938 = state_15857;
(statearr_15938[(14)] = inst_15739);

(statearr_15938[(15)] = inst_15736);

(statearr_15938[(16)] = inst_15737);

(statearr_15938[(17)] = inst_15738);

return statearr_15938;
})();
var statearr_15939_17113 = state_15857__$1;
(statearr_15939_17113[(2)] = null);

(statearr_15939_17113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15858 === (14))){
var state_15857__$1 = state_15857;
var statearr_15940_17114 = state_15857__$1;
(statearr_15940_17114[(2)] = null);

(statearr_15940_17114[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15858 === (45))){
var inst_15847 = (state_15857[(2)]);
var state_15857__$1 = state_15857;
var statearr_15941_17115 = state_15857__$1;
(statearr_15941_17115[(2)] = inst_15847);

(statearr_15941_17115[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15858 === (26))){
var inst_15791 = (state_15857[(27)]);
var inst_15843 = (state_15857[(2)]);
var inst_15844 = cljs.core.seq(inst_15791);
var state_15857__$1 = (function (){var statearr_15942 = state_15857;
(statearr_15942[(29)] = inst_15843);

return statearr_15942;
})();
if(inst_15844){
var statearr_15943_17122 = state_15857__$1;
(statearr_15943_17122[(1)] = (42));

} else {
var statearr_15944_17123 = state_15857__$1;
(statearr_15944_17123[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15858 === (16))){
var inst_15758 = (state_15857[(7)]);
var inst_15760 = cljs.core.chunked_seq_QMARK_(inst_15758);
var state_15857__$1 = state_15857;
if(inst_15760){
var statearr_15945_17124 = state_15857__$1;
(statearr_15945_17124[(1)] = (19));

} else {
var statearr_15946_17125 = state_15857__$1;
(statearr_15946_17125[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15858 === (38))){
var inst_15836 = (state_15857[(2)]);
var state_15857__$1 = state_15857;
var statearr_15947_17126 = state_15857__$1;
(statearr_15947_17126[(2)] = inst_15836);

(statearr_15947_17126[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15858 === (30))){
var state_15857__$1 = state_15857;
var statearr_15948_17127 = state_15857__$1;
(statearr_15948_17127[(2)] = null);

(statearr_15948_17127[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15858 === (10))){
var inst_15739 = (state_15857[(14)]);
var inst_15737 = (state_15857[(16)]);
var inst_15747 = cljs.core._nth(inst_15737,inst_15739);
var inst_15748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15747,(0),null);
var inst_15749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15747,(1),null);
var state_15857__$1 = (function (){var statearr_15949 = state_15857;
(statearr_15949[(24)] = inst_15748);

return statearr_15949;
})();
if(cljs.core.truth_(inst_15749)){
var statearr_15950_17128 = state_15857__$1;
(statearr_15950_17128[(1)] = (13));

} else {
var statearr_15951_17129 = state_15857__$1;
(statearr_15951_17129[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15858 === (18))){
var inst_15784 = (state_15857[(2)]);
var state_15857__$1 = state_15857;
var statearr_15952_17130 = state_15857__$1;
(statearr_15952_17130[(2)] = inst_15784);

(statearr_15952_17130[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15858 === (42))){
var state_15857__$1 = state_15857;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15857__$1,(45),dchan);
} else {
if((state_val_15858 === (37))){
var inst_15826 = (state_15857[(22)]);
var inst_15817 = (state_15857[(23)]);
var inst_15727 = (state_15857[(12)]);
var inst_15826__$1 = cljs.core.first(inst_15817);
var inst_15827 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15826__$1,inst_15727,done);
var state_15857__$1 = (function (){var statearr_15953 = state_15857;
(statearr_15953[(22)] = inst_15826__$1);

return statearr_15953;
})();
if(cljs.core.truth_(inst_15827)){
var statearr_15954_17131 = state_15857__$1;
(statearr_15954_17131[(1)] = (39));

} else {
var statearr_15955_17132 = state_15857__$1;
(statearr_15955_17132[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15858 === (8))){
var inst_15739 = (state_15857[(14)]);
var inst_15738 = (state_15857[(17)]);
var inst_15741 = (inst_15739 < inst_15738);
var inst_15742 = inst_15741;
var state_15857__$1 = state_15857;
if(cljs.core.truth_(inst_15742)){
var statearr_15956_17133 = state_15857__$1;
(statearr_15956_17133[(1)] = (10));

} else {
var statearr_15957_17134 = state_15857__$1;
(statearr_15957_17134[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__14730__auto__ = null;
var cljs$core$async$mult_$_state_machine__14730__auto____0 = (function (){
var statearr_15958 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15958[(0)] = cljs$core$async$mult_$_state_machine__14730__auto__);

(statearr_15958[(1)] = (1));

return statearr_15958;
});
var cljs$core$async$mult_$_state_machine__14730__auto____1 = (function (state_15857){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_15857);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e15959){var ex__14733__auto__ = e15959;
var statearr_15960_17138 = state_15857;
(statearr_15960_17138[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_15857[(4)]))){
var statearr_15961_17139 = state_15857;
(statearr_15961_17139[(1)] = cljs.core.first((state_15857[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17140 = state_15857;
state_15857 = G__17140;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14730__auto__ = function(state_15857){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14730__auto____1.call(this,state_15857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14730__auto____0;
cljs$core$async$mult_$_state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14730__auto____1;
return cljs$core$async$mult_$_state_machine__14730__auto__;
})()
})();
var state__14859__auto__ = (function (){var statearr_15962 = f__14858__auto__();
(statearr_15962[(6)] = c__14857__auto___17074);

return statearr_15962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14859__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15964 = arguments.length;
switch (G__15964) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_17142 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_17142(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_17144 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_17144(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_17148 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_17148(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_17149 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null,m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_17149(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_17150 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null,m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_17150(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17151 = arguments.length;
var i__5727__auto___17152 = (0);
while(true){
if((i__5727__auto___17152 < len__5726__auto___17151)){
args__5732__auto__.push((arguments[i__5727__auto___17152]));

var G__17153 = (i__5727__auto___17152 + (1));
i__5727__auto___17152 = G__17153;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16046){
var map__16047 = p__16046;
var map__16047__$1 = cljs.core.__destructure_map(map__16047);
var opts = map__16047__$1;
var statearr_16048_17154 = state;
(statearr_16048_17154[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16049_17155 = state;
(statearr_16049_17155[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16051_17156 = state;
(statearr_16051_17156[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16042){
var G__16043 = cljs.core.first(seq16042);
var seq16042__$1 = cljs.core.next(seq16042);
var G__16044 = cljs.core.first(seq16042__$1);
var seq16042__$2 = cljs.core.next(seq16042__$1);
var G__16045 = cljs.core.first(seq16042__$2);
var seq16042__$3 = cljs.core.next(seq16042__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16043,G__16044,G__16045,seq16042__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16058 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16059){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16059 = meta16059;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16060,meta16059__$1){
var self__ = this;
var _16060__$1 = this;
return (new cljs.core.async.t_cljs$core$async16058(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16059__$1));
}));

(cljs.core.async.t_cljs$core$async16058.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16060){
var self__ = this;
var _16060__$1 = this;
return self__.meta16059;
}));

(cljs.core.async.t_cljs$core$async16058.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16058.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16058.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16058.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16058.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16058.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16058.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16058.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16058.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16059","meta16059",1142276405,null)], null);
}));

(cljs.core.async.t_cljs$core$async16058.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16058.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16058");

(cljs.core.async.t_cljs$core$async16058.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16058");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16058.
 */
cljs.core.async.__GT_t_cljs$core$async16058 = (function cljs$core$async$__GT_t_cljs$core$async16058(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16059){
return (new cljs.core.async.t_cljs$core$async16058(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16059));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async16058(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14857__auto___17162 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14858__auto__ = (function (){var switch__14729__auto__ = (function (state_16131){
var state_val_16132 = (state_16131[(1)]);
if((state_val_16132 === (7))){
var inst_16091 = (state_16131[(2)]);
var state_16131__$1 = state_16131;
if(cljs.core.truth_(inst_16091)){
var statearr_16133_17163 = state_16131__$1;
(statearr_16133_17163[(1)] = (8));

} else {
var statearr_16134_17164 = state_16131__$1;
(statearr_16134_17164[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16132 === (20))){
var inst_16084 = (state_16131[(7)]);
var state_16131__$1 = state_16131;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16131__$1,(23),out,inst_16084);
} else {
if((state_val_16132 === (1))){
var inst_16067 = calc_state();
var inst_16068 = cljs.core.__destructure_map(inst_16067);
var inst_16069 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16068,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16070 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16068,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16071 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16068,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16072 = inst_16067;
var state_16131__$1 = (function (){var statearr_16135 = state_16131;
(statearr_16135[(8)] = inst_16072);

(statearr_16135[(9)] = inst_16071);

(statearr_16135[(10)] = inst_16070);

(statearr_16135[(11)] = inst_16069);

return statearr_16135;
})();
var statearr_16136_17165 = state_16131__$1;
(statearr_16136_17165[(2)] = null);

(statearr_16136_17165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16132 === (24))){
var inst_16075 = (state_16131[(12)]);
var inst_16072 = inst_16075;
var state_16131__$1 = (function (){var statearr_16137 = state_16131;
(statearr_16137[(8)] = inst_16072);

return statearr_16137;
})();
var statearr_16138_17166 = state_16131__$1;
(statearr_16138_17166[(2)] = null);

(statearr_16138_17166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16132 === (4))){
var inst_16086 = (state_16131[(13)]);
var inst_16084 = (state_16131[(7)]);
var inst_16083 = (state_16131[(2)]);
var inst_16084__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16083,(0),null);
var inst_16085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16083,(1),null);
var inst_16086__$1 = (inst_16084__$1 == null);
var state_16131__$1 = (function (){var statearr_16139 = state_16131;
(statearr_16139[(13)] = inst_16086__$1);

(statearr_16139[(7)] = inst_16084__$1);

(statearr_16139[(14)] = inst_16085);

return statearr_16139;
})();
if(cljs.core.truth_(inst_16086__$1)){
var statearr_16140_17167 = state_16131__$1;
(statearr_16140_17167[(1)] = (5));

} else {
var statearr_16141_17168 = state_16131__$1;
(statearr_16141_17168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16132 === (15))){
var inst_16076 = (state_16131[(15)]);
var inst_16105 = (state_16131[(16)]);
var inst_16105__$1 = cljs.core.empty_QMARK_(inst_16076);
var state_16131__$1 = (function (){var statearr_16142 = state_16131;
(statearr_16142[(16)] = inst_16105__$1);

return statearr_16142;
})();
if(inst_16105__$1){
var statearr_16143_17169 = state_16131__$1;
(statearr_16143_17169[(1)] = (17));

} else {
var statearr_16144_17170 = state_16131__$1;
(statearr_16144_17170[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16132 === (21))){
var inst_16075 = (state_16131[(12)]);
var inst_16072 = inst_16075;
var state_16131__$1 = (function (){var statearr_16145 = state_16131;
(statearr_16145[(8)] = inst_16072);

return statearr_16145;
})();
var statearr_16146_17171 = state_16131__$1;
(statearr_16146_17171[(2)] = null);

(statearr_16146_17171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16132 === (13))){
var inst_16098 = (state_16131[(2)]);
var inst_16099 = calc_state();
var inst_16072 = inst_16099;
var state_16131__$1 = (function (){var statearr_16147 = state_16131;
(statearr_16147[(8)] = inst_16072);

(statearr_16147[(17)] = inst_16098);

return statearr_16147;
})();
var statearr_16148_17172 = state_16131__$1;
(statearr_16148_17172[(2)] = null);

(statearr_16148_17172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16132 === (22))){
var inst_16125 = (state_16131[(2)]);
var state_16131__$1 = state_16131;
var statearr_16149_17173 = state_16131__$1;
(statearr_16149_17173[(2)] = inst_16125);

(statearr_16149_17173[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16132 === (6))){
var inst_16085 = (state_16131[(14)]);
var inst_16089 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16085,change);
var state_16131__$1 = state_16131;
var statearr_16150_17174 = state_16131__$1;
(statearr_16150_17174[(2)] = inst_16089);

(statearr_16150_17174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16132 === (25))){
var state_16131__$1 = state_16131;
var statearr_16151_17175 = state_16131__$1;
(statearr_16151_17175[(2)] = null);

(statearr_16151_17175[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16132 === (17))){
var inst_16077 = (state_16131[(18)]);
var inst_16085 = (state_16131[(14)]);
var inst_16107 = (inst_16077.cljs$core$IFn$_invoke$arity$1 ? inst_16077.cljs$core$IFn$_invoke$arity$1(inst_16085) : inst_16077.call(null,inst_16085));
var inst_16108 = cljs.core.not(inst_16107);
var state_16131__$1 = state_16131;
var statearr_16152_17176 = state_16131__$1;
(statearr_16152_17176[(2)] = inst_16108);

(statearr_16152_17176[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16132 === (3))){
var inst_16129 = (state_16131[(2)]);
var state_16131__$1 = state_16131;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16131__$1,inst_16129);
} else {
if((state_val_16132 === (12))){
var state_16131__$1 = state_16131;
var statearr_16153_17177 = state_16131__$1;
(statearr_16153_17177[(2)] = null);

(statearr_16153_17177[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16132 === (2))){
var inst_16072 = (state_16131[(8)]);
var inst_16075 = (state_16131[(12)]);
var inst_16075__$1 = cljs.core.__destructure_map(inst_16072);
var inst_16076 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16075__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16077 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16075__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16078 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16075__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16131__$1 = (function (){var statearr_16154 = state_16131;
(statearr_16154[(18)] = inst_16077);

(statearr_16154[(15)] = inst_16076);

(statearr_16154[(12)] = inst_16075__$1);

return statearr_16154;
})();
return cljs.core.async.ioc_alts_BANG_(state_16131__$1,(4),inst_16078);
} else {
if((state_val_16132 === (23))){
var inst_16116 = (state_16131[(2)]);
var state_16131__$1 = state_16131;
if(cljs.core.truth_(inst_16116)){
var statearr_16155_17178 = state_16131__$1;
(statearr_16155_17178[(1)] = (24));

} else {
var statearr_16156_17179 = state_16131__$1;
(statearr_16156_17179[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16132 === (19))){
var inst_16111 = (state_16131[(2)]);
var state_16131__$1 = state_16131;
var statearr_16157_17180 = state_16131__$1;
(statearr_16157_17180[(2)] = inst_16111);

(statearr_16157_17180[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16132 === (11))){
var inst_16085 = (state_16131[(14)]);
var inst_16095 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16085);
var state_16131__$1 = state_16131;
var statearr_16158_17181 = state_16131__$1;
(statearr_16158_17181[(2)] = inst_16095);

(statearr_16158_17181[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16132 === (9))){
var inst_16076 = (state_16131[(15)]);
var inst_16102 = (state_16131[(19)]);
var inst_16085 = (state_16131[(14)]);
var inst_16102__$1 = (inst_16076.cljs$core$IFn$_invoke$arity$1 ? inst_16076.cljs$core$IFn$_invoke$arity$1(inst_16085) : inst_16076.call(null,inst_16085));
var state_16131__$1 = (function (){var statearr_16159 = state_16131;
(statearr_16159[(19)] = inst_16102__$1);

return statearr_16159;
})();
if(cljs.core.truth_(inst_16102__$1)){
var statearr_16160_17182 = state_16131__$1;
(statearr_16160_17182[(1)] = (14));

} else {
var statearr_16161_17183 = state_16131__$1;
(statearr_16161_17183[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16132 === (5))){
var inst_16086 = (state_16131[(13)]);
var state_16131__$1 = state_16131;
var statearr_16162_17184 = state_16131__$1;
(statearr_16162_17184[(2)] = inst_16086);

(statearr_16162_17184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16132 === (14))){
var inst_16102 = (state_16131[(19)]);
var state_16131__$1 = state_16131;
var statearr_16163_17185 = state_16131__$1;
(statearr_16163_17185[(2)] = inst_16102);

(statearr_16163_17185[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16132 === (26))){
var inst_16121 = (state_16131[(2)]);
var state_16131__$1 = state_16131;
var statearr_16164_17186 = state_16131__$1;
(statearr_16164_17186[(2)] = inst_16121);

(statearr_16164_17186[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16132 === (16))){
var inst_16113 = (state_16131[(2)]);
var state_16131__$1 = state_16131;
if(cljs.core.truth_(inst_16113)){
var statearr_16165_17187 = state_16131__$1;
(statearr_16165_17187[(1)] = (20));

} else {
var statearr_16166_17188 = state_16131__$1;
(statearr_16166_17188[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16132 === (10))){
var inst_16127 = (state_16131[(2)]);
var state_16131__$1 = state_16131;
var statearr_16167_17189 = state_16131__$1;
(statearr_16167_17189[(2)] = inst_16127);

(statearr_16167_17189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16132 === (18))){
var inst_16105 = (state_16131[(16)]);
var state_16131__$1 = state_16131;
var statearr_16169_17190 = state_16131__$1;
(statearr_16169_17190[(2)] = inst_16105);

(statearr_16169_17190[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16132 === (8))){
var inst_16084 = (state_16131[(7)]);
var inst_16093 = (inst_16084 == null);
var state_16131__$1 = state_16131;
if(cljs.core.truth_(inst_16093)){
var statearr_16170_17191 = state_16131__$1;
(statearr_16170_17191[(1)] = (11));

} else {
var statearr_16171_17192 = state_16131__$1;
(statearr_16171_17192[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__14730__auto__ = null;
var cljs$core$async$mix_$_state_machine__14730__auto____0 = (function (){
var statearr_16172 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16172[(0)] = cljs$core$async$mix_$_state_machine__14730__auto__);

(statearr_16172[(1)] = (1));

return statearr_16172;
});
var cljs$core$async$mix_$_state_machine__14730__auto____1 = (function (state_16131){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_16131);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e16173){var ex__14733__auto__ = e16173;
var statearr_16175_17193 = state_16131;
(statearr_16175_17193[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_16131[(4)]))){
var statearr_16176_17194 = state_16131;
(statearr_16176_17194[(1)] = cljs.core.first((state_16131[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17195 = state_16131;
state_16131 = G__17195;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14730__auto__ = function(state_16131){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14730__auto____1.call(this,state_16131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14730__auto____0;
cljs$core$async$mix_$_state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14730__auto____1;
return cljs$core$async$mix_$_state_machine__14730__auto__;
})()
})();
var state__14859__auto__ = (function (){var statearr_16177 = f__14858__auto__();
(statearr_16177[(6)] = c__14857__auto___17162);

return statearr_16177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14859__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_17196 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_17196(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_17204 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null,p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_17204(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_17209 = (function() {
var G__17210 = null;
var G__17210__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null,p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__17210__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null,p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__17210 = function(p,v){
switch(arguments.length){
case 1:
return G__17210__1.call(this,p);
case 2:
return G__17210__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17210.cljs$core$IFn$_invoke$arity$1 = G__17210__1;
G__17210.cljs$core$IFn$_invoke$arity$2 = G__17210__2;
return G__17210;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16190 = arguments.length;
switch (G__16190) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17209(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17209(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16210 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16211){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16211 = meta16211;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16212,meta16211__$1){
var self__ = this;
var _16212__$1 = this;
return (new cljs.core.async.t_cljs$core$async16210(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16211__$1));
}));

(cljs.core.async.t_cljs$core$async16210.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16212){
var self__ = this;
var _16212__$1 = this;
return self__.meta16211;
}));

(cljs.core.async.t_cljs$core$async16210.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16210.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16210.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16210.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16210.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16210.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16210.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16210.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16211","meta16211",1532395786,null)], null);
}));

(cljs.core.async.t_cljs$core$async16210.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16210.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16210");

(cljs.core.async.t_cljs$core$async16210.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16210");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16210.
 */
cljs.core.async.__GT_t_cljs$core$async16210 = (function cljs$core$async$__GT_t_cljs$core$async16210(ch,topic_fn,buf_fn,mults,ensure_mult,meta16211){
return (new cljs.core.async.t_cljs$core$async16210(ch,topic_fn,buf_fn,mults,ensure_mult,meta16211));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16207 = arguments.length;
switch (G__16207) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16205_SHARP_){
if(cljs.core.truth_((p1__16205_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16205_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16205_SHARP_.call(null,topic)))){
return p1__16205_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16205_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16210(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14857__auto___17213 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14858__auto__ = (function (){var switch__14729__auto__ = (function (state_16287){
var state_val_16288 = (state_16287[(1)]);
if((state_val_16288 === (7))){
var inst_16283 = (state_16287[(2)]);
var state_16287__$1 = state_16287;
var statearr_16289_17214 = state_16287__$1;
(statearr_16289_17214[(2)] = inst_16283);

(statearr_16289_17214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (20))){
var state_16287__$1 = state_16287;
var statearr_16290_17215 = state_16287__$1;
(statearr_16290_17215[(2)] = null);

(statearr_16290_17215[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (1))){
var state_16287__$1 = state_16287;
var statearr_16291_17216 = state_16287__$1;
(statearr_16291_17216[(2)] = null);

(statearr_16291_17216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (24))){
var inst_16266 = (state_16287[(7)]);
var inst_16275 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16266);
var state_16287__$1 = state_16287;
var statearr_16292_17217 = state_16287__$1;
(statearr_16292_17217[(2)] = inst_16275);

(statearr_16292_17217[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (4))){
var inst_16218 = (state_16287[(8)]);
var inst_16218__$1 = (state_16287[(2)]);
var inst_16219 = (inst_16218__$1 == null);
var state_16287__$1 = (function (){var statearr_16293 = state_16287;
(statearr_16293[(8)] = inst_16218__$1);

return statearr_16293;
})();
if(cljs.core.truth_(inst_16219)){
var statearr_16294_17218 = state_16287__$1;
(statearr_16294_17218[(1)] = (5));

} else {
var statearr_16295_17219 = state_16287__$1;
(statearr_16295_17219[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (15))){
var inst_16260 = (state_16287[(2)]);
var state_16287__$1 = state_16287;
var statearr_16296_17220 = state_16287__$1;
(statearr_16296_17220[(2)] = inst_16260);

(statearr_16296_17220[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (21))){
var inst_16280 = (state_16287[(2)]);
var state_16287__$1 = (function (){var statearr_16297 = state_16287;
(statearr_16297[(9)] = inst_16280);

return statearr_16297;
})();
var statearr_16298_17221 = state_16287__$1;
(statearr_16298_17221[(2)] = null);

(statearr_16298_17221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (13))){
var inst_16242 = (state_16287[(10)]);
var inst_16244 = cljs.core.chunked_seq_QMARK_(inst_16242);
var state_16287__$1 = state_16287;
if(inst_16244){
var statearr_16299_17222 = state_16287__$1;
(statearr_16299_17222[(1)] = (16));

} else {
var statearr_16300_17223 = state_16287__$1;
(statearr_16300_17223[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (22))){
var inst_16272 = (state_16287[(2)]);
var state_16287__$1 = state_16287;
if(cljs.core.truth_(inst_16272)){
var statearr_16301_17224 = state_16287__$1;
(statearr_16301_17224[(1)] = (23));

} else {
var statearr_16302_17225 = state_16287__$1;
(statearr_16302_17225[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (6))){
var inst_16268 = (state_16287[(11)]);
var inst_16266 = (state_16287[(7)]);
var inst_16218 = (state_16287[(8)]);
var inst_16266__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16218) : topic_fn.call(null,inst_16218));
var inst_16267 = cljs.core.deref(mults);
var inst_16268__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16267,inst_16266__$1);
var state_16287__$1 = (function (){var statearr_16303 = state_16287;
(statearr_16303[(11)] = inst_16268__$1);

(statearr_16303[(7)] = inst_16266__$1);

return statearr_16303;
})();
if(cljs.core.truth_(inst_16268__$1)){
var statearr_16304_17226 = state_16287__$1;
(statearr_16304_17226[(1)] = (19));

} else {
var statearr_16305_17227 = state_16287__$1;
(statearr_16305_17227[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (25))){
var inst_16277 = (state_16287[(2)]);
var state_16287__$1 = state_16287;
var statearr_16306_17228 = state_16287__$1;
(statearr_16306_17228[(2)] = inst_16277);

(statearr_16306_17228[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (17))){
var inst_16242 = (state_16287[(10)]);
var inst_16251 = cljs.core.first(inst_16242);
var inst_16252 = cljs.core.async.muxch_STAR_(inst_16251);
var inst_16253 = cljs.core.async.close_BANG_(inst_16252);
var inst_16254 = cljs.core.next(inst_16242);
var inst_16228 = inst_16254;
var inst_16229 = null;
var inst_16230 = (0);
var inst_16231 = (0);
var state_16287__$1 = (function (){var statearr_16307 = state_16287;
(statearr_16307[(12)] = inst_16228);

(statearr_16307[(13)] = inst_16229);

(statearr_16307[(14)] = inst_16253);

(statearr_16307[(15)] = inst_16230);

(statearr_16307[(16)] = inst_16231);

return statearr_16307;
})();
var statearr_16308_17230 = state_16287__$1;
(statearr_16308_17230[(2)] = null);

(statearr_16308_17230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (3))){
var inst_16285 = (state_16287[(2)]);
var state_16287__$1 = state_16287;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16287__$1,inst_16285);
} else {
if((state_val_16288 === (12))){
var inst_16262 = (state_16287[(2)]);
var state_16287__$1 = state_16287;
var statearr_16309_17231 = state_16287__$1;
(statearr_16309_17231[(2)] = inst_16262);

(statearr_16309_17231[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (2))){
var state_16287__$1 = state_16287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16287__$1,(4),ch);
} else {
if((state_val_16288 === (23))){
var state_16287__$1 = state_16287;
var statearr_16310_17235 = state_16287__$1;
(statearr_16310_17235[(2)] = null);

(statearr_16310_17235[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (19))){
var inst_16268 = (state_16287[(11)]);
var inst_16218 = (state_16287[(8)]);
var inst_16270 = cljs.core.async.muxch_STAR_(inst_16268);
var state_16287__$1 = state_16287;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16287__$1,(22),inst_16270,inst_16218);
} else {
if((state_val_16288 === (11))){
var inst_16242 = (state_16287[(10)]);
var inst_16228 = (state_16287[(12)]);
var inst_16242__$1 = cljs.core.seq(inst_16228);
var state_16287__$1 = (function (){var statearr_16311 = state_16287;
(statearr_16311[(10)] = inst_16242__$1);

return statearr_16311;
})();
if(inst_16242__$1){
var statearr_16312_17236 = state_16287__$1;
(statearr_16312_17236[(1)] = (13));

} else {
var statearr_16313_17237 = state_16287__$1;
(statearr_16313_17237[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (9))){
var inst_16264 = (state_16287[(2)]);
var state_16287__$1 = state_16287;
var statearr_16314_17238 = state_16287__$1;
(statearr_16314_17238[(2)] = inst_16264);

(statearr_16314_17238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (5))){
var inst_16225 = cljs.core.deref(mults);
var inst_16226 = cljs.core.vals(inst_16225);
var inst_16227 = cljs.core.seq(inst_16226);
var inst_16228 = inst_16227;
var inst_16229 = null;
var inst_16230 = (0);
var inst_16231 = (0);
var state_16287__$1 = (function (){var statearr_16315 = state_16287;
(statearr_16315[(12)] = inst_16228);

(statearr_16315[(13)] = inst_16229);

(statearr_16315[(15)] = inst_16230);

(statearr_16315[(16)] = inst_16231);

return statearr_16315;
})();
var statearr_16316_17239 = state_16287__$1;
(statearr_16316_17239[(2)] = null);

(statearr_16316_17239[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (14))){
var state_16287__$1 = state_16287;
var statearr_16320_17240 = state_16287__$1;
(statearr_16320_17240[(2)] = null);

(statearr_16320_17240[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (16))){
var inst_16242 = (state_16287[(10)]);
var inst_16246 = cljs.core.chunk_first(inst_16242);
var inst_16247 = cljs.core.chunk_rest(inst_16242);
var inst_16248 = cljs.core.count(inst_16246);
var inst_16228 = inst_16247;
var inst_16229 = inst_16246;
var inst_16230 = inst_16248;
var inst_16231 = (0);
var state_16287__$1 = (function (){var statearr_16321 = state_16287;
(statearr_16321[(12)] = inst_16228);

(statearr_16321[(13)] = inst_16229);

(statearr_16321[(15)] = inst_16230);

(statearr_16321[(16)] = inst_16231);

return statearr_16321;
})();
var statearr_16322_17241 = state_16287__$1;
(statearr_16322_17241[(2)] = null);

(statearr_16322_17241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (10))){
var inst_16228 = (state_16287[(12)]);
var inst_16229 = (state_16287[(13)]);
var inst_16230 = (state_16287[(15)]);
var inst_16231 = (state_16287[(16)]);
var inst_16236 = cljs.core._nth(inst_16229,inst_16231);
var inst_16237 = cljs.core.async.muxch_STAR_(inst_16236);
var inst_16238 = cljs.core.async.close_BANG_(inst_16237);
var inst_16239 = (inst_16231 + (1));
var tmp16317 = inst_16228;
var tmp16318 = inst_16229;
var tmp16319 = inst_16230;
var inst_16228__$1 = tmp16317;
var inst_16229__$1 = tmp16318;
var inst_16230__$1 = tmp16319;
var inst_16231__$1 = inst_16239;
var state_16287__$1 = (function (){var statearr_16323 = state_16287;
(statearr_16323[(12)] = inst_16228__$1);

(statearr_16323[(13)] = inst_16229__$1);

(statearr_16323[(17)] = inst_16238);

(statearr_16323[(15)] = inst_16230__$1);

(statearr_16323[(16)] = inst_16231__$1);

return statearr_16323;
})();
var statearr_16324_17242 = state_16287__$1;
(statearr_16324_17242[(2)] = null);

(statearr_16324_17242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (18))){
var inst_16257 = (state_16287[(2)]);
var state_16287__$1 = state_16287;
var statearr_16325_17243 = state_16287__$1;
(statearr_16325_17243[(2)] = inst_16257);

(statearr_16325_17243[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (8))){
var inst_16230 = (state_16287[(15)]);
var inst_16231 = (state_16287[(16)]);
var inst_16233 = (inst_16231 < inst_16230);
var inst_16234 = inst_16233;
var state_16287__$1 = state_16287;
if(cljs.core.truth_(inst_16234)){
var statearr_16326_17244 = state_16287__$1;
(statearr_16326_17244[(1)] = (10));

} else {
var statearr_16327_17245 = state_16287__$1;
(statearr_16327_17245[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14730__auto__ = null;
var cljs$core$async$state_machine__14730__auto____0 = (function (){
var statearr_16328 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16328[(0)] = cljs$core$async$state_machine__14730__auto__);

(statearr_16328[(1)] = (1));

return statearr_16328;
});
var cljs$core$async$state_machine__14730__auto____1 = (function (state_16287){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_16287);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e16329){var ex__14733__auto__ = e16329;
var statearr_16330_17246 = state_16287;
(statearr_16330_17246[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_16287[(4)]))){
var statearr_16331_17247 = state_16287;
(statearr_16331_17247[(1)] = cljs.core.first((state_16287[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17249 = state_16287;
state_16287 = G__17249;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$state_machine__14730__auto__ = function(state_16287){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14730__auto____1.call(this,state_16287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14730__auto____0;
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14730__auto____1;
return cljs$core$async$state_machine__14730__auto__;
})()
})();
var state__14859__auto__ = (function (){var statearr_16332 = f__14858__auto__();
(statearr_16332[(6)] = c__14857__auto___17213);

return statearr_16332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14859__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16334 = arguments.length;
switch (G__16334) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16336 = arguments.length;
switch (G__16336) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16338 = arguments.length;
switch (G__16338) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14857__auto___17254 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14858__auto__ = (function (){var switch__14729__auto__ = (function (state_16381){
var state_val_16382 = (state_16381[(1)]);
if((state_val_16382 === (7))){
var state_16381__$1 = state_16381;
var statearr_16383_17255 = state_16381__$1;
(statearr_16383_17255[(2)] = null);

(statearr_16383_17255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16382 === (1))){
var state_16381__$1 = state_16381;
var statearr_16384_17256 = state_16381__$1;
(statearr_16384_17256[(2)] = null);

(statearr_16384_17256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16382 === (4))){
var inst_16342 = (state_16381[(7)]);
var inst_16341 = (state_16381[(8)]);
var inst_16344 = (inst_16342 < inst_16341);
var state_16381__$1 = state_16381;
if(cljs.core.truth_(inst_16344)){
var statearr_16385_17257 = state_16381__$1;
(statearr_16385_17257[(1)] = (6));

} else {
var statearr_16386_17258 = state_16381__$1;
(statearr_16386_17258[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16382 === (15))){
var inst_16367 = (state_16381[(9)]);
var inst_16372 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16367);
var state_16381__$1 = state_16381;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16381__$1,(17),out,inst_16372);
} else {
if((state_val_16382 === (13))){
var inst_16367 = (state_16381[(9)]);
var inst_16367__$1 = (state_16381[(2)]);
var inst_16368 = cljs.core.some(cljs.core.nil_QMARK_,inst_16367__$1);
var state_16381__$1 = (function (){var statearr_16387 = state_16381;
(statearr_16387[(9)] = inst_16367__$1);

return statearr_16387;
})();
if(cljs.core.truth_(inst_16368)){
var statearr_16388_17259 = state_16381__$1;
(statearr_16388_17259[(1)] = (14));

} else {
var statearr_16389_17260 = state_16381__$1;
(statearr_16389_17260[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16382 === (6))){
var state_16381__$1 = state_16381;
var statearr_16390_17261 = state_16381__$1;
(statearr_16390_17261[(2)] = null);

(statearr_16390_17261[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16382 === (17))){
var inst_16374 = (state_16381[(2)]);
var state_16381__$1 = (function (){var statearr_16392 = state_16381;
(statearr_16392[(10)] = inst_16374);

return statearr_16392;
})();
var statearr_16393_17262 = state_16381__$1;
(statearr_16393_17262[(2)] = null);

(statearr_16393_17262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16382 === (3))){
var inst_16379 = (state_16381[(2)]);
var state_16381__$1 = state_16381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16381__$1,inst_16379);
} else {
if((state_val_16382 === (12))){
var _ = (function (){var statearr_16394 = state_16381;
(statearr_16394[(4)] = cljs.core.rest((state_16381[(4)])));

return statearr_16394;
})();
var state_16381__$1 = state_16381;
var ex16391 = (state_16381__$1[(2)]);
var statearr_16395_17263 = state_16381__$1;
(statearr_16395_17263[(5)] = ex16391);


if((ex16391 instanceof Object)){
var statearr_16396_17264 = state_16381__$1;
(statearr_16396_17264[(1)] = (11));

(statearr_16396_17264[(5)] = null);

} else {
throw ex16391;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16382 === (2))){
var inst_16340 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16341 = cnt;
var inst_16342 = (0);
var state_16381__$1 = (function (){var statearr_16397 = state_16381;
(statearr_16397[(7)] = inst_16342);

(statearr_16397[(11)] = inst_16340);

(statearr_16397[(8)] = inst_16341);

return statearr_16397;
})();
var statearr_16398_17265 = state_16381__$1;
(statearr_16398_17265[(2)] = null);

(statearr_16398_17265[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16382 === (11))){
var inst_16346 = (state_16381[(2)]);
var inst_16347 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16381__$1 = (function (){var statearr_16399 = state_16381;
(statearr_16399[(12)] = inst_16346);

return statearr_16399;
})();
var statearr_16400_17266 = state_16381__$1;
(statearr_16400_17266[(2)] = inst_16347);

(statearr_16400_17266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16382 === (9))){
var inst_16342 = (state_16381[(7)]);
var _ = (function (){var statearr_16401 = state_16381;
(statearr_16401[(4)] = cljs.core.cons((12),(state_16381[(4)])));

return statearr_16401;
})();
var inst_16353 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16342) : chs__$1.call(null,inst_16342));
var inst_16354 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16342) : done.call(null,inst_16342));
var inst_16355 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16353,inst_16354);
var ___$1 = (function (){var statearr_16402 = state_16381;
(statearr_16402[(4)] = cljs.core.rest((state_16381[(4)])));

return statearr_16402;
})();
var state_16381__$1 = state_16381;
var statearr_16403_17267 = state_16381__$1;
(statearr_16403_17267[(2)] = inst_16355);

(statearr_16403_17267[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16382 === (5))){
var inst_16365 = (state_16381[(2)]);
var state_16381__$1 = (function (){var statearr_16404 = state_16381;
(statearr_16404[(13)] = inst_16365);

return statearr_16404;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16381__$1,(13),dchan);
} else {
if((state_val_16382 === (14))){
var inst_16370 = cljs.core.async.close_BANG_(out);
var state_16381__$1 = state_16381;
var statearr_16405_17268 = state_16381__$1;
(statearr_16405_17268[(2)] = inst_16370);

(statearr_16405_17268[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16382 === (16))){
var inst_16377 = (state_16381[(2)]);
var state_16381__$1 = state_16381;
var statearr_16406_17269 = state_16381__$1;
(statearr_16406_17269[(2)] = inst_16377);

(statearr_16406_17269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16382 === (10))){
var inst_16342 = (state_16381[(7)]);
var inst_16358 = (state_16381[(2)]);
var inst_16359 = (inst_16342 + (1));
var inst_16342__$1 = inst_16359;
var state_16381__$1 = (function (){var statearr_16407 = state_16381;
(statearr_16407[(7)] = inst_16342__$1);

(statearr_16407[(14)] = inst_16358);

return statearr_16407;
})();
var statearr_16408_17270 = state_16381__$1;
(statearr_16408_17270[(2)] = null);

(statearr_16408_17270[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16382 === (8))){
var inst_16363 = (state_16381[(2)]);
var state_16381__$1 = state_16381;
var statearr_16409_17271 = state_16381__$1;
(statearr_16409_17271[(2)] = inst_16363);

(statearr_16409_17271[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14730__auto__ = null;
var cljs$core$async$state_machine__14730__auto____0 = (function (){
var statearr_16410 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16410[(0)] = cljs$core$async$state_machine__14730__auto__);

(statearr_16410[(1)] = (1));

return statearr_16410;
});
var cljs$core$async$state_machine__14730__auto____1 = (function (state_16381){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_16381);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e16411){var ex__14733__auto__ = e16411;
var statearr_16412_17272 = state_16381;
(statearr_16412_17272[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_16381[(4)]))){
var statearr_16413_17273 = state_16381;
(statearr_16413_17273[(1)] = cljs.core.first((state_16381[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17274 = state_16381;
state_16381 = G__17274;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$state_machine__14730__auto__ = function(state_16381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14730__auto____1.call(this,state_16381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14730__auto____0;
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14730__auto____1;
return cljs$core$async$state_machine__14730__auto__;
})()
})();
var state__14859__auto__ = (function (){var statearr_16414 = f__14858__auto__();
(statearr_16414[(6)] = c__14857__auto___17254);

return statearr_16414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14859__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16417 = arguments.length;
switch (G__16417) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14857__auto___17276 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14858__auto__ = (function (){var switch__14729__auto__ = (function (state_16449){
var state_val_16450 = (state_16449[(1)]);
if((state_val_16450 === (7))){
var inst_16428 = (state_16449[(7)]);
var inst_16429 = (state_16449[(8)]);
var inst_16428__$1 = (state_16449[(2)]);
var inst_16429__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16428__$1,(0),null);
var inst_16430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16428__$1,(1),null);
var inst_16431 = (inst_16429__$1 == null);
var state_16449__$1 = (function (){var statearr_16451 = state_16449;
(statearr_16451[(9)] = inst_16430);

(statearr_16451[(7)] = inst_16428__$1);

(statearr_16451[(8)] = inst_16429__$1);

return statearr_16451;
})();
if(cljs.core.truth_(inst_16431)){
var statearr_16452_17277 = state_16449__$1;
(statearr_16452_17277[(1)] = (8));

} else {
var statearr_16453_17278 = state_16449__$1;
(statearr_16453_17278[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16450 === (1))){
var inst_16418 = cljs.core.vec(chs);
var inst_16419 = inst_16418;
var state_16449__$1 = (function (){var statearr_16454 = state_16449;
(statearr_16454[(10)] = inst_16419);

return statearr_16454;
})();
var statearr_16455_17279 = state_16449__$1;
(statearr_16455_17279[(2)] = null);

(statearr_16455_17279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16450 === (4))){
var inst_16419 = (state_16449[(10)]);
var state_16449__$1 = state_16449;
return cljs.core.async.ioc_alts_BANG_(state_16449__$1,(7),inst_16419);
} else {
if((state_val_16450 === (6))){
var inst_16445 = (state_16449[(2)]);
var state_16449__$1 = state_16449;
var statearr_16456_17280 = state_16449__$1;
(statearr_16456_17280[(2)] = inst_16445);

(statearr_16456_17280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16450 === (3))){
var inst_16447 = (state_16449[(2)]);
var state_16449__$1 = state_16449;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16449__$1,inst_16447);
} else {
if((state_val_16450 === (2))){
var inst_16419 = (state_16449[(10)]);
var inst_16421 = cljs.core.count(inst_16419);
var inst_16422 = (inst_16421 > (0));
var state_16449__$1 = state_16449;
if(cljs.core.truth_(inst_16422)){
var statearr_16458_17295 = state_16449__$1;
(statearr_16458_17295[(1)] = (4));

} else {
var statearr_16459_17296 = state_16449__$1;
(statearr_16459_17296[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16450 === (11))){
var inst_16419 = (state_16449[(10)]);
var inst_16438 = (state_16449[(2)]);
var tmp16457 = inst_16419;
var inst_16419__$1 = tmp16457;
var state_16449__$1 = (function (){var statearr_16460 = state_16449;
(statearr_16460[(11)] = inst_16438);

(statearr_16460[(10)] = inst_16419__$1);

return statearr_16460;
})();
var statearr_16461_17300 = state_16449__$1;
(statearr_16461_17300[(2)] = null);

(statearr_16461_17300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16450 === (9))){
var inst_16429 = (state_16449[(8)]);
var state_16449__$1 = state_16449;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16449__$1,(11),out,inst_16429);
} else {
if((state_val_16450 === (5))){
var inst_16443 = cljs.core.async.close_BANG_(out);
var state_16449__$1 = state_16449;
var statearr_16462_17301 = state_16449__$1;
(statearr_16462_17301[(2)] = inst_16443);

(statearr_16462_17301[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16450 === (10))){
var inst_16441 = (state_16449[(2)]);
var state_16449__$1 = state_16449;
var statearr_16463_17302 = state_16449__$1;
(statearr_16463_17302[(2)] = inst_16441);

(statearr_16463_17302[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16450 === (8))){
var inst_16430 = (state_16449[(9)]);
var inst_16428 = (state_16449[(7)]);
var inst_16429 = (state_16449[(8)]);
var inst_16419 = (state_16449[(10)]);
var inst_16433 = (function (){var cs = inst_16419;
var vec__16424 = inst_16428;
var v = inst_16429;
var c = inst_16430;
return (function (p1__16415_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16415_SHARP_);
});
})();
var inst_16434 = cljs.core.filterv(inst_16433,inst_16419);
var inst_16419__$1 = inst_16434;
var state_16449__$1 = (function (){var statearr_16464 = state_16449;
(statearr_16464[(10)] = inst_16419__$1);

return statearr_16464;
})();
var statearr_16465_17303 = state_16449__$1;
(statearr_16465_17303[(2)] = null);

(statearr_16465_17303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14730__auto__ = null;
var cljs$core$async$state_machine__14730__auto____0 = (function (){
var statearr_16466 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16466[(0)] = cljs$core$async$state_machine__14730__auto__);

(statearr_16466[(1)] = (1));

return statearr_16466;
});
var cljs$core$async$state_machine__14730__auto____1 = (function (state_16449){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_16449);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e16467){var ex__14733__auto__ = e16467;
var statearr_16468_17304 = state_16449;
(statearr_16468_17304[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_16449[(4)]))){
var statearr_16469_17305 = state_16449;
(statearr_16469_17305[(1)] = cljs.core.first((state_16449[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17309 = state_16449;
state_16449 = G__17309;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$state_machine__14730__auto__ = function(state_16449){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14730__auto____1.call(this,state_16449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14730__auto____0;
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14730__auto____1;
return cljs$core$async$state_machine__14730__auto__;
})()
})();
var state__14859__auto__ = (function (){var statearr_16470 = f__14858__auto__();
(statearr_16470[(6)] = c__14857__auto___17276);

return statearr_16470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14859__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16472 = arguments.length;
switch (G__16472) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14857__auto___17311 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14858__auto__ = (function (){var switch__14729__auto__ = (function (state_16496){
var state_val_16497 = (state_16496[(1)]);
if((state_val_16497 === (7))){
var inst_16478 = (state_16496[(7)]);
var inst_16478__$1 = (state_16496[(2)]);
var inst_16479 = (inst_16478__$1 == null);
var inst_16480 = cljs.core.not(inst_16479);
var state_16496__$1 = (function (){var statearr_16498 = state_16496;
(statearr_16498[(7)] = inst_16478__$1);

return statearr_16498;
})();
if(inst_16480){
var statearr_16499_17312 = state_16496__$1;
(statearr_16499_17312[(1)] = (8));

} else {
var statearr_16500_17313 = state_16496__$1;
(statearr_16500_17313[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16497 === (1))){
var inst_16473 = (0);
var state_16496__$1 = (function (){var statearr_16501 = state_16496;
(statearr_16501[(8)] = inst_16473);

return statearr_16501;
})();
var statearr_16502_17314 = state_16496__$1;
(statearr_16502_17314[(2)] = null);

(statearr_16502_17314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16497 === (4))){
var state_16496__$1 = state_16496;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16496__$1,(7),ch);
} else {
if((state_val_16497 === (6))){
var inst_16491 = (state_16496[(2)]);
var state_16496__$1 = state_16496;
var statearr_16503_17315 = state_16496__$1;
(statearr_16503_17315[(2)] = inst_16491);

(statearr_16503_17315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16497 === (3))){
var inst_16493 = (state_16496[(2)]);
var inst_16494 = cljs.core.async.close_BANG_(out);
var state_16496__$1 = (function (){var statearr_16504 = state_16496;
(statearr_16504[(9)] = inst_16493);

return statearr_16504;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16496__$1,inst_16494);
} else {
if((state_val_16497 === (2))){
var inst_16473 = (state_16496[(8)]);
var inst_16475 = (inst_16473 < n);
var state_16496__$1 = state_16496;
if(cljs.core.truth_(inst_16475)){
var statearr_16505_17316 = state_16496__$1;
(statearr_16505_17316[(1)] = (4));

} else {
var statearr_16506_17317 = state_16496__$1;
(statearr_16506_17317[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16497 === (11))){
var inst_16473 = (state_16496[(8)]);
var inst_16483 = (state_16496[(2)]);
var inst_16484 = (inst_16473 + (1));
var inst_16473__$1 = inst_16484;
var state_16496__$1 = (function (){var statearr_16507 = state_16496;
(statearr_16507[(8)] = inst_16473__$1);

(statearr_16507[(10)] = inst_16483);

return statearr_16507;
})();
var statearr_16508_17318 = state_16496__$1;
(statearr_16508_17318[(2)] = null);

(statearr_16508_17318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16497 === (9))){
var state_16496__$1 = state_16496;
var statearr_16509_17319 = state_16496__$1;
(statearr_16509_17319[(2)] = null);

(statearr_16509_17319[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16497 === (5))){
var state_16496__$1 = state_16496;
var statearr_16510_17320 = state_16496__$1;
(statearr_16510_17320[(2)] = null);

(statearr_16510_17320[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16497 === (10))){
var inst_16488 = (state_16496[(2)]);
var state_16496__$1 = state_16496;
var statearr_16511_17321 = state_16496__$1;
(statearr_16511_17321[(2)] = inst_16488);

(statearr_16511_17321[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16497 === (8))){
var inst_16478 = (state_16496[(7)]);
var state_16496__$1 = state_16496;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16496__$1,(11),out,inst_16478);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14730__auto__ = null;
var cljs$core$async$state_machine__14730__auto____0 = (function (){
var statearr_16512 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16512[(0)] = cljs$core$async$state_machine__14730__auto__);

(statearr_16512[(1)] = (1));

return statearr_16512;
});
var cljs$core$async$state_machine__14730__auto____1 = (function (state_16496){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_16496);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e16513){var ex__14733__auto__ = e16513;
var statearr_16514_17322 = state_16496;
(statearr_16514_17322[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_16496[(4)]))){
var statearr_16515_17323 = state_16496;
(statearr_16515_17323[(1)] = cljs.core.first((state_16496[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17324 = state_16496;
state_16496 = G__17324;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$state_machine__14730__auto__ = function(state_16496){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14730__auto____1.call(this,state_16496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14730__auto____0;
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14730__auto____1;
return cljs$core$async$state_machine__14730__auto__;
})()
})();
var state__14859__auto__ = (function (){var statearr_16516 = f__14858__auto__();
(statearr_16516[(6)] = c__14857__auto___17311);

return statearr_16516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14859__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16521 = (function (f,ch,meta16519,_,fn1,meta16522){
this.f = f;
this.ch = ch;
this.meta16519 = meta16519;
this._ = _;
this.fn1 = fn1;
this.meta16522 = meta16522;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16523,meta16522__$1){
var self__ = this;
var _16523__$1 = this;
return (new cljs.core.async.t_cljs$core$async16521(self__.f,self__.ch,self__.meta16519,self__._,self__.fn1,meta16522__$1));
}));

(cljs.core.async.t_cljs$core$async16521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16523){
var self__ = this;
var _16523__$1 = this;
return self__.meta16522;
}));

(cljs.core.async.t_cljs$core$async16521.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16521.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16521.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16521.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16517_SHARP_){
var G__16524 = (((p1__16517_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16517_SHARP_) : self__.f.call(null,p1__16517_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16524) : f1.call(null,G__16524));
});
}));

(cljs.core.async.t_cljs$core$async16521.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16519","meta16519",-2027792274,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16518","cljs.core.async/t_cljs$core$async16518",569786739,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16522","meta16522",-607944692,null)], null);
}));

(cljs.core.async.t_cljs$core$async16521.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16521.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16521");

(cljs.core.async.t_cljs$core$async16521.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16521");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16521.
 */
cljs.core.async.__GT_t_cljs$core$async16521 = (function cljs$core$async$__GT_t_cljs$core$async16521(f,ch,meta16519,_,fn1,meta16522){
return (new cljs.core.async.t_cljs$core$async16521(f,ch,meta16519,_,fn1,meta16522));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16518 = (function (f,ch,meta16519){
this.f = f;
this.ch = ch;
this.meta16519 = meta16519;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16520,meta16519__$1){
var self__ = this;
var _16520__$1 = this;
return (new cljs.core.async.t_cljs$core$async16518(self__.f,self__.ch,meta16519__$1));
}));

(cljs.core.async.t_cljs$core$async16518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16520){
var self__ = this;
var _16520__$1 = this;
return self__.meta16519;
}));

(cljs.core.async.t_cljs$core$async16518.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16518.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16518.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16518.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16518.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async16521(self__.f,self__.ch,self__.meta16519,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16525 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16525) : self__.f.call(null,G__16525));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16518.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16518.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16518.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16519","meta16519",-2027792274,null)], null);
}));

(cljs.core.async.t_cljs$core$async16518.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16518.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16518");

(cljs.core.async.t_cljs$core$async16518.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16518");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16518.
 */
cljs.core.async.__GT_t_cljs$core$async16518 = (function cljs$core$async$__GT_t_cljs$core$async16518(f,ch,meta16519){
return (new cljs.core.async.t_cljs$core$async16518(f,ch,meta16519));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16518(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16526 = (function (f,ch,meta16527){
this.f = f;
this.ch = ch;
this.meta16527 = meta16527;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16528,meta16527__$1){
var self__ = this;
var _16528__$1 = this;
return (new cljs.core.async.t_cljs$core$async16526(self__.f,self__.ch,meta16527__$1));
}));

(cljs.core.async.t_cljs$core$async16526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16528){
var self__ = this;
var _16528__$1 = this;
return self__.meta16527;
}));

(cljs.core.async.t_cljs$core$async16526.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16526.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16526.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16526.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16526.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16526.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16526.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16527","meta16527",1006441627,null)], null);
}));

(cljs.core.async.t_cljs$core$async16526.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16526.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16526");

(cljs.core.async.t_cljs$core$async16526.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16526");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16526.
 */
cljs.core.async.__GT_t_cljs$core$async16526 = (function cljs$core$async$__GT_t_cljs$core$async16526(f,ch,meta16527){
return (new cljs.core.async.t_cljs$core$async16526(f,ch,meta16527));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16526(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16529 = (function (p,ch,meta16530){
this.p = p;
this.ch = ch;
this.meta16530 = meta16530;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16531,meta16530__$1){
var self__ = this;
var _16531__$1 = this;
return (new cljs.core.async.t_cljs$core$async16529(self__.p,self__.ch,meta16530__$1));
}));

(cljs.core.async.t_cljs$core$async16529.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16531){
var self__ = this;
var _16531__$1 = this;
return self__.meta16530;
}));

(cljs.core.async.t_cljs$core$async16529.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16529.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16529.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16529.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16529.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16529.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16529.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16529.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16530","meta16530",531757452,null)], null);
}));

(cljs.core.async.t_cljs$core$async16529.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16529.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16529");

(cljs.core.async.t_cljs$core$async16529.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16529");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16529.
 */
cljs.core.async.__GT_t_cljs$core$async16529 = (function cljs$core$async$__GT_t_cljs$core$async16529(p,ch,meta16530){
return (new cljs.core.async.t_cljs$core$async16529(p,ch,meta16530));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async16529(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16533 = arguments.length;
switch (G__16533) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14857__auto___17326 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14858__auto__ = (function (){var switch__14729__auto__ = (function (state_16554){
var state_val_16555 = (state_16554[(1)]);
if((state_val_16555 === (7))){
var inst_16550 = (state_16554[(2)]);
var state_16554__$1 = state_16554;
var statearr_16556_17327 = state_16554__$1;
(statearr_16556_17327[(2)] = inst_16550);

(statearr_16556_17327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16555 === (1))){
var state_16554__$1 = state_16554;
var statearr_16557_17328 = state_16554__$1;
(statearr_16557_17328[(2)] = null);

(statearr_16557_17328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16555 === (4))){
var inst_16536 = (state_16554[(7)]);
var inst_16536__$1 = (state_16554[(2)]);
var inst_16537 = (inst_16536__$1 == null);
var state_16554__$1 = (function (){var statearr_16558 = state_16554;
(statearr_16558[(7)] = inst_16536__$1);

return statearr_16558;
})();
if(cljs.core.truth_(inst_16537)){
var statearr_16559_17329 = state_16554__$1;
(statearr_16559_17329[(1)] = (5));

} else {
var statearr_16560_17330 = state_16554__$1;
(statearr_16560_17330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16555 === (6))){
var inst_16536 = (state_16554[(7)]);
var inst_16541 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16536) : p.call(null,inst_16536));
var state_16554__$1 = state_16554;
if(cljs.core.truth_(inst_16541)){
var statearr_16561_17331 = state_16554__$1;
(statearr_16561_17331[(1)] = (8));

} else {
var statearr_16562_17332 = state_16554__$1;
(statearr_16562_17332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16555 === (3))){
var inst_16552 = (state_16554[(2)]);
var state_16554__$1 = state_16554;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16554__$1,inst_16552);
} else {
if((state_val_16555 === (2))){
var state_16554__$1 = state_16554;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16554__$1,(4),ch);
} else {
if((state_val_16555 === (11))){
var inst_16544 = (state_16554[(2)]);
var state_16554__$1 = state_16554;
var statearr_16563_17333 = state_16554__$1;
(statearr_16563_17333[(2)] = inst_16544);

(statearr_16563_17333[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16555 === (9))){
var state_16554__$1 = state_16554;
var statearr_16564_17334 = state_16554__$1;
(statearr_16564_17334[(2)] = null);

(statearr_16564_17334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16555 === (5))){
var inst_16539 = cljs.core.async.close_BANG_(out);
var state_16554__$1 = state_16554;
var statearr_16565_17335 = state_16554__$1;
(statearr_16565_17335[(2)] = inst_16539);

(statearr_16565_17335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16555 === (10))){
var inst_16547 = (state_16554[(2)]);
var state_16554__$1 = (function (){var statearr_16566 = state_16554;
(statearr_16566[(8)] = inst_16547);

return statearr_16566;
})();
var statearr_16567_17336 = state_16554__$1;
(statearr_16567_17336[(2)] = null);

(statearr_16567_17336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16555 === (8))){
var inst_16536 = (state_16554[(7)]);
var state_16554__$1 = state_16554;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16554__$1,(11),out,inst_16536);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14730__auto__ = null;
var cljs$core$async$state_machine__14730__auto____0 = (function (){
var statearr_16568 = [null,null,null,null,null,null,null,null,null];
(statearr_16568[(0)] = cljs$core$async$state_machine__14730__auto__);

(statearr_16568[(1)] = (1));

return statearr_16568;
});
var cljs$core$async$state_machine__14730__auto____1 = (function (state_16554){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_16554);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e16569){var ex__14733__auto__ = e16569;
var statearr_16570_17337 = state_16554;
(statearr_16570_17337[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_16554[(4)]))){
var statearr_16571_17338 = state_16554;
(statearr_16571_17338[(1)] = cljs.core.first((state_16554[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17339 = state_16554;
state_16554 = G__17339;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$state_machine__14730__auto__ = function(state_16554){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14730__auto____1.call(this,state_16554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14730__auto____0;
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14730__auto____1;
return cljs$core$async$state_machine__14730__auto__;
})()
})();
var state__14859__auto__ = (function (){var statearr_16572 = f__14858__auto__();
(statearr_16572[(6)] = c__14857__auto___17326);

return statearr_16572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14859__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16574 = arguments.length;
switch (G__16574) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14857__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14858__auto__ = (function (){var switch__14729__auto__ = (function (state_16636){
var state_val_16637 = (state_16636[(1)]);
if((state_val_16637 === (7))){
var inst_16632 = (state_16636[(2)]);
var state_16636__$1 = state_16636;
var statearr_16638_17341 = state_16636__$1;
(statearr_16638_17341[(2)] = inst_16632);

(statearr_16638_17341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16637 === (20))){
var inst_16602 = (state_16636[(7)]);
var inst_16613 = (state_16636[(2)]);
var inst_16614 = cljs.core.next(inst_16602);
var inst_16588 = inst_16614;
var inst_16589 = null;
var inst_16590 = (0);
var inst_16591 = (0);
var state_16636__$1 = (function (){var statearr_16639 = state_16636;
(statearr_16639[(8)] = inst_16613);

(statearr_16639[(9)] = inst_16590);

(statearr_16639[(10)] = inst_16589);

(statearr_16639[(11)] = inst_16591);

(statearr_16639[(12)] = inst_16588);

return statearr_16639;
})();
var statearr_16640_17342 = state_16636__$1;
(statearr_16640_17342[(2)] = null);

(statearr_16640_17342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16637 === (1))){
var state_16636__$1 = state_16636;
var statearr_16641_17343 = state_16636__$1;
(statearr_16641_17343[(2)] = null);

(statearr_16641_17343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16637 === (4))){
var inst_16577 = (state_16636[(13)]);
var inst_16577__$1 = (state_16636[(2)]);
var inst_16578 = (inst_16577__$1 == null);
var state_16636__$1 = (function (){var statearr_16642 = state_16636;
(statearr_16642[(13)] = inst_16577__$1);

return statearr_16642;
})();
if(cljs.core.truth_(inst_16578)){
var statearr_16643_17344 = state_16636__$1;
(statearr_16643_17344[(1)] = (5));

} else {
var statearr_16644_17345 = state_16636__$1;
(statearr_16644_17345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16637 === (15))){
var state_16636__$1 = state_16636;
var statearr_16648_17346 = state_16636__$1;
(statearr_16648_17346[(2)] = null);

(statearr_16648_17346[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16637 === (21))){
var state_16636__$1 = state_16636;
var statearr_16649_17347 = state_16636__$1;
(statearr_16649_17347[(2)] = null);

(statearr_16649_17347[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16637 === (13))){
var inst_16590 = (state_16636[(9)]);
var inst_16589 = (state_16636[(10)]);
var inst_16591 = (state_16636[(11)]);
var inst_16588 = (state_16636[(12)]);
var inst_16598 = (state_16636[(2)]);
var inst_16599 = (inst_16591 + (1));
var tmp16645 = inst_16590;
var tmp16646 = inst_16589;
var tmp16647 = inst_16588;
var inst_16588__$1 = tmp16647;
var inst_16589__$1 = tmp16646;
var inst_16590__$1 = tmp16645;
var inst_16591__$1 = inst_16599;
var state_16636__$1 = (function (){var statearr_16650 = state_16636;
(statearr_16650[(14)] = inst_16598);

(statearr_16650[(9)] = inst_16590__$1);

(statearr_16650[(10)] = inst_16589__$1);

(statearr_16650[(11)] = inst_16591__$1);

(statearr_16650[(12)] = inst_16588__$1);

return statearr_16650;
})();
var statearr_16651_17348 = state_16636__$1;
(statearr_16651_17348[(2)] = null);

(statearr_16651_17348[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16637 === (22))){
var state_16636__$1 = state_16636;
var statearr_16652_17349 = state_16636__$1;
(statearr_16652_17349[(2)] = null);

(statearr_16652_17349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16637 === (6))){
var inst_16577 = (state_16636[(13)]);
var inst_16586 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16577) : f.call(null,inst_16577));
var inst_16587 = cljs.core.seq(inst_16586);
var inst_16588 = inst_16587;
var inst_16589 = null;
var inst_16590 = (0);
var inst_16591 = (0);
var state_16636__$1 = (function (){var statearr_16653 = state_16636;
(statearr_16653[(9)] = inst_16590);

(statearr_16653[(10)] = inst_16589);

(statearr_16653[(11)] = inst_16591);

(statearr_16653[(12)] = inst_16588);

return statearr_16653;
})();
var statearr_16654_17350 = state_16636__$1;
(statearr_16654_17350[(2)] = null);

(statearr_16654_17350[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16637 === (17))){
var inst_16602 = (state_16636[(7)]);
var inst_16606 = cljs.core.chunk_first(inst_16602);
var inst_16607 = cljs.core.chunk_rest(inst_16602);
var inst_16608 = cljs.core.count(inst_16606);
var inst_16588 = inst_16607;
var inst_16589 = inst_16606;
var inst_16590 = inst_16608;
var inst_16591 = (0);
var state_16636__$1 = (function (){var statearr_16655 = state_16636;
(statearr_16655[(9)] = inst_16590);

(statearr_16655[(10)] = inst_16589);

(statearr_16655[(11)] = inst_16591);

(statearr_16655[(12)] = inst_16588);

return statearr_16655;
})();
var statearr_16656_17351 = state_16636__$1;
(statearr_16656_17351[(2)] = null);

(statearr_16656_17351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16637 === (3))){
var inst_16634 = (state_16636[(2)]);
var state_16636__$1 = state_16636;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16636__$1,inst_16634);
} else {
if((state_val_16637 === (12))){
var inst_16622 = (state_16636[(2)]);
var state_16636__$1 = state_16636;
var statearr_16657_17352 = state_16636__$1;
(statearr_16657_17352[(2)] = inst_16622);

(statearr_16657_17352[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16637 === (2))){
var state_16636__$1 = state_16636;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16636__$1,(4),in$);
} else {
if((state_val_16637 === (23))){
var inst_16630 = (state_16636[(2)]);
var state_16636__$1 = state_16636;
var statearr_16658_17353 = state_16636__$1;
(statearr_16658_17353[(2)] = inst_16630);

(statearr_16658_17353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16637 === (19))){
var inst_16617 = (state_16636[(2)]);
var state_16636__$1 = state_16636;
var statearr_16659_17354 = state_16636__$1;
(statearr_16659_17354[(2)] = inst_16617);

(statearr_16659_17354[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16637 === (11))){
var inst_16588 = (state_16636[(12)]);
var inst_16602 = (state_16636[(7)]);
var inst_16602__$1 = cljs.core.seq(inst_16588);
var state_16636__$1 = (function (){var statearr_16660 = state_16636;
(statearr_16660[(7)] = inst_16602__$1);

return statearr_16660;
})();
if(inst_16602__$1){
var statearr_16661_17355 = state_16636__$1;
(statearr_16661_17355[(1)] = (14));

} else {
var statearr_16662_17356 = state_16636__$1;
(statearr_16662_17356[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16637 === (9))){
var inst_16624 = (state_16636[(2)]);
var inst_16625 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16636__$1 = (function (){var statearr_16663 = state_16636;
(statearr_16663[(15)] = inst_16624);

return statearr_16663;
})();
if(cljs.core.truth_(inst_16625)){
var statearr_16664_17357 = state_16636__$1;
(statearr_16664_17357[(1)] = (21));

} else {
var statearr_16665_17358 = state_16636__$1;
(statearr_16665_17358[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16637 === (5))){
var inst_16580 = cljs.core.async.close_BANG_(out);
var state_16636__$1 = state_16636;
var statearr_16666_17359 = state_16636__$1;
(statearr_16666_17359[(2)] = inst_16580);

(statearr_16666_17359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16637 === (14))){
var inst_16602 = (state_16636[(7)]);
var inst_16604 = cljs.core.chunked_seq_QMARK_(inst_16602);
var state_16636__$1 = state_16636;
if(inst_16604){
var statearr_16667_17360 = state_16636__$1;
(statearr_16667_17360[(1)] = (17));

} else {
var statearr_16668_17361 = state_16636__$1;
(statearr_16668_17361[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16637 === (16))){
var inst_16620 = (state_16636[(2)]);
var state_16636__$1 = state_16636;
var statearr_16669_17362 = state_16636__$1;
(statearr_16669_17362[(2)] = inst_16620);

(statearr_16669_17362[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16637 === (10))){
var inst_16589 = (state_16636[(10)]);
var inst_16591 = (state_16636[(11)]);
var inst_16596 = cljs.core._nth(inst_16589,inst_16591);
var state_16636__$1 = state_16636;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16636__$1,(13),out,inst_16596);
} else {
if((state_val_16637 === (18))){
var inst_16602 = (state_16636[(7)]);
var inst_16611 = cljs.core.first(inst_16602);
var state_16636__$1 = state_16636;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16636__$1,(20),out,inst_16611);
} else {
if((state_val_16637 === (8))){
var inst_16590 = (state_16636[(9)]);
var inst_16591 = (state_16636[(11)]);
var inst_16593 = (inst_16591 < inst_16590);
var inst_16594 = inst_16593;
var state_16636__$1 = state_16636;
if(cljs.core.truth_(inst_16594)){
var statearr_16670_17363 = state_16636__$1;
(statearr_16670_17363[(1)] = (10));

} else {
var statearr_16671_17364 = state_16636__$1;
(statearr_16671_17364[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14730__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14730__auto____0 = (function (){
var statearr_16672 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16672[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14730__auto__);

(statearr_16672[(1)] = (1));

return statearr_16672;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14730__auto____1 = (function (state_16636){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_16636);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e16673){var ex__14733__auto__ = e16673;
var statearr_16674_17393 = state_16636;
(statearr_16674_17393[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_16636[(4)]))){
var statearr_16675_17394 = state_16636;
(statearr_16675_17394[(1)] = cljs.core.first((state_16636[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17395 = state_16636;
state_16636 = G__17395;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14730__auto__ = function(state_16636){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14730__auto____1.call(this,state_16636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14730__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14730__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14730__auto__;
})()
})();
var state__14859__auto__ = (function (){var statearr_16676 = f__14858__auto__();
(statearr_16676[(6)] = c__14857__auto__);

return statearr_16676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14859__auto__);
}));

return c__14857__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__16678 = arguments.length;
switch (G__16678) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__16680 = arguments.length;
switch (G__16680) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__16682 = arguments.length;
switch (G__16682) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14857__auto___17399 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14858__auto__ = (function (){var switch__14729__auto__ = (function (state_16706){
var state_val_16707 = (state_16706[(1)]);
if((state_val_16707 === (7))){
var inst_16701 = (state_16706[(2)]);
var state_16706__$1 = state_16706;
var statearr_16708_17400 = state_16706__$1;
(statearr_16708_17400[(2)] = inst_16701);

(statearr_16708_17400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16707 === (1))){
var inst_16683 = null;
var state_16706__$1 = (function (){var statearr_16709 = state_16706;
(statearr_16709[(7)] = inst_16683);

return statearr_16709;
})();
var statearr_16710_17401 = state_16706__$1;
(statearr_16710_17401[(2)] = null);

(statearr_16710_17401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16707 === (4))){
var inst_16686 = (state_16706[(8)]);
var inst_16686__$1 = (state_16706[(2)]);
var inst_16687 = (inst_16686__$1 == null);
var inst_16688 = cljs.core.not(inst_16687);
var state_16706__$1 = (function (){var statearr_16711 = state_16706;
(statearr_16711[(8)] = inst_16686__$1);

return statearr_16711;
})();
if(inst_16688){
var statearr_16712_17402 = state_16706__$1;
(statearr_16712_17402[(1)] = (5));

} else {
var statearr_16713_17403 = state_16706__$1;
(statearr_16713_17403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16707 === (6))){
var state_16706__$1 = state_16706;
var statearr_16714_17404 = state_16706__$1;
(statearr_16714_17404[(2)] = null);

(statearr_16714_17404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16707 === (3))){
var inst_16703 = (state_16706[(2)]);
var inst_16704 = cljs.core.async.close_BANG_(out);
var state_16706__$1 = (function (){var statearr_16715 = state_16706;
(statearr_16715[(9)] = inst_16703);

return statearr_16715;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16706__$1,inst_16704);
} else {
if((state_val_16707 === (2))){
var state_16706__$1 = state_16706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16706__$1,(4),ch);
} else {
if((state_val_16707 === (11))){
var inst_16686 = (state_16706[(8)]);
var inst_16695 = (state_16706[(2)]);
var inst_16683 = inst_16686;
var state_16706__$1 = (function (){var statearr_16716 = state_16706;
(statearr_16716[(7)] = inst_16683);

(statearr_16716[(10)] = inst_16695);

return statearr_16716;
})();
var statearr_16717_17405 = state_16706__$1;
(statearr_16717_17405[(2)] = null);

(statearr_16717_17405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16707 === (9))){
var inst_16686 = (state_16706[(8)]);
var state_16706__$1 = state_16706;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16706__$1,(11),out,inst_16686);
} else {
if((state_val_16707 === (5))){
var inst_16686 = (state_16706[(8)]);
var inst_16683 = (state_16706[(7)]);
var inst_16690 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16686,inst_16683);
var state_16706__$1 = state_16706;
if(inst_16690){
var statearr_16719_17406 = state_16706__$1;
(statearr_16719_17406[(1)] = (8));

} else {
var statearr_16720_17407 = state_16706__$1;
(statearr_16720_17407[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16707 === (10))){
var inst_16698 = (state_16706[(2)]);
var state_16706__$1 = state_16706;
var statearr_16721_17408 = state_16706__$1;
(statearr_16721_17408[(2)] = inst_16698);

(statearr_16721_17408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16707 === (8))){
var inst_16683 = (state_16706[(7)]);
var tmp16718 = inst_16683;
var inst_16683__$1 = tmp16718;
var state_16706__$1 = (function (){var statearr_16722 = state_16706;
(statearr_16722[(7)] = inst_16683__$1);

return statearr_16722;
})();
var statearr_16723_17409 = state_16706__$1;
(statearr_16723_17409[(2)] = null);

(statearr_16723_17409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14730__auto__ = null;
var cljs$core$async$state_machine__14730__auto____0 = (function (){
var statearr_16724 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16724[(0)] = cljs$core$async$state_machine__14730__auto__);

(statearr_16724[(1)] = (1));

return statearr_16724;
});
var cljs$core$async$state_machine__14730__auto____1 = (function (state_16706){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_16706);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e16725){var ex__14733__auto__ = e16725;
var statearr_16726_17410 = state_16706;
(statearr_16726_17410[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_16706[(4)]))){
var statearr_16727_17411 = state_16706;
(statearr_16727_17411[(1)] = cljs.core.first((state_16706[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17412 = state_16706;
state_16706 = G__17412;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$state_machine__14730__auto__ = function(state_16706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14730__auto____1.call(this,state_16706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14730__auto____0;
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14730__auto____1;
return cljs$core$async$state_machine__14730__auto__;
})()
})();
var state__14859__auto__ = (function (){var statearr_16728 = f__14858__auto__();
(statearr_16728[(6)] = c__14857__auto___17399);

return statearr_16728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14859__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__16730 = arguments.length;
switch (G__16730) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14857__auto___17414 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14858__auto__ = (function (){var switch__14729__auto__ = (function (state_16768){
var state_val_16769 = (state_16768[(1)]);
if((state_val_16769 === (7))){
var inst_16764 = (state_16768[(2)]);
var state_16768__$1 = state_16768;
var statearr_16770_17415 = state_16768__$1;
(statearr_16770_17415[(2)] = inst_16764);

(statearr_16770_17415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16769 === (1))){
var inst_16731 = (new Array(n));
var inst_16732 = inst_16731;
var inst_16733 = (0);
var state_16768__$1 = (function (){var statearr_16771 = state_16768;
(statearr_16771[(7)] = inst_16733);

(statearr_16771[(8)] = inst_16732);

return statearr_16771;
})();
var statearr_16772_17416 = state_16768__$1;
(statearr_16772_17416[(2)] = null);

(statearr_16772_17416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16769 === (4))){
var inst_16736 = (state_16768[(9)]);
var inst_16736__$1 = (state_16768[(2)]);
var inst_16737 = (inst_16736__$1 == null);
var inst_16738 = cljs.core.not(inst_16737);
var state_16768__$1 = (function (){var statearr_16773 = state_16768;
(statearr_16773[(9)] = inst_16736__$1);

return statearr_16773;
})();
if(inst_16738){
var statearr_16774_17417 = state_16768__$1;
(statearr_16774_17417[(1)] = (5));

} else {
var statearr_16775_17418 = state_16768__$1;
(statearr_16775_17418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16769 === (15))){
var inst_16758 = (state_16768[(2)]);
var state_16768__$1 = state_16768;
var statearr_16776_17419 = state_16768__$1;
(statearr_16776_17419[(2)] = inst_16758);

(statearr_16776_17419[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16769 === (13))){
var state_16768__$1 = state_16768;
var statearr_16777_17420 = state_16768__$1;
(statearr_16777_17420[(2)] = null);

(statearr_16777_17420[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16769 === (6))){
var inst_16733 = (state_16768[(7)]);
var inst_16754 = (inst_16733 > (0));
var state_16768__$1 = state_16768;
if(cljs.core.truth_(inst_16754)){
var statearr_16778_17421 = state_16768__$1;
(statearr_16778_17421[(1)] = (12));

} else {
var statearr_16779_17422 = state_16768__$1;
(statearr_16779_17422[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16769 === (3))){
var inst_16766 = (state_16768[(2)]);
var state_16768__$1 = state_16768;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16768__$1,inst_16766);
} else {
if((state_val_16769 === (12))){
var inst_16732 = (state_16768[(8)]);
var inst_16756 = cljs.core.vec(inst_16732);
var state_16768__$1 = state_16768;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16768__$1,(15),out,inst_16756);
} else {
if((state_val_16769 === (2))){
var state_16768__$1 = state_16768;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16768__$1,(4),ch);
} else {
if((state_val_16769 === (11))){
var inst_16748 = (state_16768[(2)]);
var inst_16749 = (new Array(n));
var inst_16732 = inst_16749;
var inst_16733 = (0);
var state_16768__$1 = (function (){var statearr_16780 = state_16768;
(statearr_16780[(7)] = inst_16733);

(statearr_16780[(10)] = inst_16748);

(statearr_16780[(8)] = inst_16732);

return statearr_16780;
})();
var statearr_16781_17423 = state_16768__$1;
(statearr_16781_17423[(2)] = null);

(statearr_16781_17423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16769 === (9))){
var inst_16732 = (state_16768[(8)]);
var inst_16746 = cljs.core.vec(inst_16732);
var state_16768__$1 = state_16768;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16768__$1,(11),out,inst_16746);
} else {
if((state_val_16769 === (5))){
var inst_16733 = (state_16768[(7)]);
var inst_16741 = (state_16768[(11)]);
var inst_16736 = (state_16768[(9)]);
var inst_16732 = (state_16768[(8)]);
var inst_16740 = (inst_16732[inst_16733] = inst_16736);
var inst_16741__$1 = (inst_16733 + (1));
var inst_16742 = (inst_16741__$1 < n);
var state_16768__$1 = (function (){var statearr_16782 = state_16768;
(statearr_16782[(11)] = inst_16741__$1);

(statearr_16782[(12)] = inst_16740);

return statearr_16782;
})();
if(cljs.core.truth_(inst_16742)){
var statearr_16783_17424 = state_16768__$1;
(statearr_16783_17424[(1)] = (8));

} else {
var statearr_16784_17425 = state_16768__$1;
(statearr_16784_17425[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16769 === (14))){
var inst_16761 = (state_16768[(2)]);
var inst_16762 = cljs.core.async.close_BANG_(out);
var state_16768__$1 = (function (){var statearr_16786 = state_16768;
(statearr_16786[(13)] = inst_16761);

return statearr_16786;
})();
var statearr_16787_17426 = state_16768__$1;
(statearr_16787_17426[(2)] = inst_16762);

(statearr_16787_17426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16769 === (10))){
var inst_16752 = (state_16768[(2)]);
var state_16768__$1 = state_16768;
var statearr_16788_17427 = state_16768__$1;
(statearr_16788_17427[(2)] = inst_16752);

(statearr_16788_17427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16769 === (8))){
var inst_16741 = (state_16768[(11)]);
var inst_16732 = (state_16768[(8)]);
var tmp16785 = inst_16732;
var inst_16732__$1 = tmp16785;
var inst_16733 = inst_16741;
var state_16768__$1 = (function (){var statearr_16789 = state_16768;
(statearr_16789[(7)] = inst_16733);

(statearr_16789[(8)] = inst_16732__$1);

return statearr_16789;
})();
var statearr_16790_17428 = state_16768__$1;
(statearr_16790_17428[(2)] = null);

(statearr_16790_17428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14730__auto__ = null;
var cljs$core$async$state_machine__14730__auto____0 = (function (){
var statearr_16791 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16791[(0)] = cljs$core$async$state_machine__14730__auto__);

(statearr_16791[(1)] = (1));

return statearr_16791;
});
var cljs$core$async$state_machine__14730__auto____1 = (function (state_16768){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_16768);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e16792){var ex__14733__auto__ = e16792;
var statearr_16793_17429 = state_16768;
(statearr_16793_17429[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_16768[(4)]))){
var statearr_16794_17430 = state_16768;
(statearr_16794_17430[(1)] = cljs.core.first((state_16768[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17431 = state_16768;
state_16768 = G__17431;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$state_machine__14730__auto__ = function(state_16768){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14730__auto____1.call(this,state_16768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14730__auto____0;
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14730__auto____1;
return cljs$core$async$state_machine__14730__auto__;
})()
})();
var state__14859__auto__ = (function (){var statearr_16795 = f__14858__auto__();
(statearr_16795[(6)] = c__14857__auto___17414);

return statearr_16795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14859__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__16797 = arguments.length;
switch (G__16797) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14857__auto___17433 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14858__auto__ = (function (){var switch__14729__auto__ = (function (state_16842){
var state_val_16843 = (state_16842[(1)]);
if((state_val_16843 === (7))){
var inst_16838 = (state_16842[(2)]);
var state_16842__$1 = state_16842;
var statearr_16844_17434 = state_16842__$1;
(statearr_16844_17434[(2)] = inst_16838);

(statearr_16844_17434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (1))){
var inst_16798 = [];
var inst_16799 = inst_16798;
var inst_16800 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16842__$1 = (function (){var statearr_16845 = state_16842;
(statearr_16845[(7)] = inst_16799);

(statearr_16845[(8)] = inst_16800);

return statearr_16845;
})();
var statearr_16846_17435 = state_16842__$1;
(statearr_16846_17435[(2)] = null);

(statearr_16846_17435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (4))){
var inst_16803 = (state_16842[(9)]);
var inst_16803__$1 = (state_16842[(2)]);
var inst_16804 = (inst_16803__$1 == null);
var inst_16805 = cljs.core.not(inst_16804);
var state_16842__$1 = (function (){var statearr_16847 = state_16842;
(statearr_16847[(9)] = inst_16803__$1);

return statearr_16847;
})();
if(inst_16805){
var statearr_16848_17436 = state_16842__$1;
(statearr_16848_17436[(1)] = (5));

} else {
var statearr_16849_17437 = state_16842__$1;
(statearr_16849_17437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (15))){
var inst_16799 = (state_16842[(7)]);
var inst_16830 = cljs.core.vec(inst_16799);
var state_16842__$1 = state_16842;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16842__$1,(18),out,inst_16830);
} else {
if((state_val_16843 === (13))){
var inst_16825 = (state_16842[(2)]);
var state_16842__$1 = state_16842;
var statearr_16850_17438 = state_16842__$1;
(statearr_16850_17438[(2)] = inst_16825);

(statearr_16850_17438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (6))){
var inst_16799 = (state_16842[(7)]);
var inst_16827 = inst_16799.length;
var inst_16828 = (inst_16827 > (0));
var state_16842__$1 = state_16842;
if(cljs.core.truth_(inst_16828)){
var statearr_16851_17439 = state_16842__$1;
(statearr_16851_17439[(1)] = (15));

} else {
var statearr_16852_17440 = state_16842__$1;
(statearr_16852_17440[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (17))){
var inst_16835 = (state_16842[(2)]);
var inst_16836 = cljs.core.async.close_BANG_(out);
var state_16842__$1 = (function (){var statearr_16853 = state_16842;
(statearr_16853[(10)] = inst_16835);

return statearr_16853;
})();
var statearr_16854_17441 = state_16842__$1;
(statearr_16854_17441[(2)] = inst_16836);

(statearr_16854_17441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (3))){
var inst_16840 = (state_16842[(2)]);
var state_16842__$1 = state_16842;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16842__$1,inst_16840);
} else {
if((state_val_16843 === (12))){
var inst_16799 = (state_16842[(7)]);
var inst_16818 = cljs.core.vec(inst_16799);
var state_16842__$1 = state_16842;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16842__$1,(14),out,inst_16818);
} else {
if((state_val_16843 === (2))){
var state_16842__$1 = state_16842;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16842__$1,(4),ch);
} else {
if((state_val_16843 === (11))){
var inst_16803 = (state_16842[(9)]);
var inst_16799 = (state_16842[(7)]);
var inst_16807 = (state_16842[(11)]);
var inst_16815 = inst_16799.push(inst_16803);
var tmp16855 = inst_16799;
var inst_16799__$1 = tmp16855;
var inst_16800 = inst_16807;
var state_16842__$1 = (function (){var statearr_16856 = state_16842;
(statearr_16856[(7)] = inst_16799__$1);

(statearr_16856[(8)] = inst_16800);

(statearr_16856[(12)] = inst_16815);

return statearr_16856;
})();
var statearr_16857_17442 = state_16842__$1;
(statearr_16857_17442[(2)] = null);

(statearr_16857_17442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (9))){
var inst_16800 = (state_16842[(8)]);
var inst_16811 = cljs.core.keyword_identical_QMARK_(inst_16800,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_16842__$1 = state_16842;
var statearr_16858_17443 = state_16842__$1;
(statearr_16858_17443[(2)] = inst_16811);

(statearr_16858_17443[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (5))){
var inst_16803 = (state_16842[(9)]);
var inst_16800 = (state_16842[(8)]);
var inst_16807 = (state_16842[(11)]);
var inst_16808 = (state_16842[(13)]);
var inst_16807__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16803) : f.call(null,inst_16803));
var inst_16808__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16807__$1,inst_16800);
var state_16842__$1 = (function (){var statearr_16859 = state_16842;
(statearr_16859[(11)] = inst_16807__$1);

(statearr_16859[(13)] = inst_16808__$1);

return statearr_16859;
})();
if(inst_16808__$1){
var statearr_16860_17444 = state_16842__$1;
(statearr_16860_17444[(1)] = (8));

} else {
var statearr_16861_17445 = state_16842__$1;
(statearr_16861_17445[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (14))){
var inst_16803 = (state_16842[(9)]);
var inst_16807 = (state_16842[(11)]);
var inst_16820 = (state_16842[(2)]);
var inst_16821 = [];
var inst_16822 = inst_16821.push(inst_16803);
var inst_16799 = inst_16821;
var inst_16800 = inst_16807;
var state_16842__$1 = (function (){var statearr_16862 = state_16842;
(statearr_16862[(7)] = inst_16799);

(statearr_16862[(8)] = inst_16800);

(statearr_16862[(14)] = inst_16822);

(statearr_16862[(15)] = inst_16820);

return statearr_16862;
})();
var statearr_16863_17446 = state_16842__$1;
(statearr_16863_17446[(2)] = null);

(statearr_16863_17446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (16))){
var state_16842__$1 = state_16842;
var statearr_16864_17447 = state_16842__$1;
(statearr_16864_17447[(2)] = null);

(statearr_16864_17447[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (10))){
var inst_16813 = (state_16842[(2)]);
var state_16842__$1 = state_16842;
if(cljs.core.truth_(inst_16813)){
var statearr_16865_17448 = state_16842__$1;
(statearr_16865_17448[(1)] = (11));

} else {
var statearr_16866_17449 = state_16842__$1;
(statearr_16866_17449[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (18))){
var inst_16832 = (state_16842[(2)]);
var state_16842__$1 = state_16842;
var statearr_16867_17450 = state_16842__$1;
(statearr_16867_17450[(2)] = inst_16832);

(statearr_16867_17450[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (8))){
var inst_16808 = (state_16842[(13)]);
var state_16842__$1 = state_16842;
var statearr_16868_17451 = state_16842__$1;
(statearr_16868_17451[(2)] = inst_16808);

(statearr_16868_17451[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14730__auto__ = null;
var cljs$core$async$state_machine__14730__auto____0 = (function (){
var statearr_16869 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16869[(0)] = cljs$core$async$state_machine__14730__auto__);

(statearr_16869[(1)] = (1));

return statearr_16869;
});
var cljs$core$async$state_machine__14730__auto____1 = (function (state_16842){
while(true){
var ret_value__14731__auto__ = (function (){try{while(true){
var result__14732__auto__ = switch__14729__auto__(state_16842);
if(cljs.core.keyword_identical_QMARK_(result__14732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14732__auto__;
}
break;
}
}catch (e16870){var ex__14733__auto__ = e16870;
var statearr_16871_17452 = state_16842;
(statearr_16871_17452[(2)] = ex__14733__auto__);


if(cljs.core.seq((state_16842[(4)]))){
var statearr_16872_17453 = state_16842;
(statearr_16872_17453[(1)] = cljs.core.first((state_16842[(4)])));

} else {
throw ex__14733__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17454 = state_16842;
state_16842 = G__17454;
continue;
} else {
return ret_value__14731__auto__;
}
break;
}
});
cljs$core$async$state_machine__14730__auto__ = function(state_16842){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14730__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14730__auto____1.call(this,state_16842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14730__auto____0;
cljs$core$async$state_machine__14730__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14730__auto____1;
return cljs$core$async$state_machine__14730__auto__;
})()
})();
var state__14859__auto__ = (function (){var statearr_16873 = f__14858__auto__();
(statearr_16873[(6)] = c__14857__auto___17433);

return statearr_16873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14859__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
