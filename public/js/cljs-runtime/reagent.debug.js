goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__21085__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__21085 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21086__i = 0, G__21086__a = new Array(arguments.length -  0);
while (G__21086__i < G__21086__a.length) {G__21086__a[G__21086__i] = arguments[G__21086__i + 0]; ++G__21086__i;}
  args = new cljs.core.IndexedSeq(G__21086__a,0,null);
} 
return G__21085__delegate.call(this,args);};
G__21085.cljs$lang$maxFixedArity = 0;
G__21085.cljs$lang$applyTo = (function (arglist__21087){
var args = cljs.core.seq(arglist__21087);
return G__21085__delegate(args);
});
G__21085.cljs$core$IFn$_invoke$arity$variadic = G__21085__delegate;
return G__21085;
})()
);

(o.error = (function() { 
var G__21088__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__21088 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21089__i = 0, G__21089__a = new Array(arguments.length -  0);
while (G__21089__i < G__21089__a.length) {G__21089__a[G__21089__i] = arguments[G__21089__i + 0]; ++G__21089__i;}
  args = new cljs.core.IndexedSeq(G__21089__a,0,null);
} 
return G__21088__delegate.call(this,args);};
G__21088.cljs$lang$maxFixedArity = 0;
G__21088.cljs$lang$applyTo = (function (arglist__21090){
var args = cljs.core.seq(arglist__21090);
return G__21088__delegate(args);
});
G__21088.cljs$core$IFn$_invoke$arity$variadic = G__21088__delegate;
return G__21088;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
