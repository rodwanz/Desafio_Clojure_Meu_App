goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21409 = arguments.length;
var i__5727__auto___21410 = (0);
while(true){
if((i__5727__auto___21410 < len__5726__auto___21409)){
args__5732__auto__.push((arguments[i__5727__auto___21410]));

var G__21411 = (i__5727__auto___21410 + (1));
i__5727__auto___21410 = G__21411;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20967){
var G__20968 = cljs.core.first(seq20967);
var seq20967__$1 = cljs.core.next(seq20967);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20968,seq20967__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20969 = cljs.core.seq(sources);
var chunk__20970 = null;
var count__20971 = (0);
var i__20972 = (0);
while(true){
if((i__20972 < count__20971)){
var map__20990 = chunk__20970.cljs$core$IIndexed$_nth$arity$2(null,i__20972);
var map__20990__$1 = cljs.core.__destructure_map(map__20990);
var src = map__20990__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20990__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20990__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20990__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20990__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20993){var e_21412 = e20993;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21412);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21412.message)].join('')));
}

var G__21413 = seq__20969;
var G__21414 = chunk__20970;
var G__21415 = count__20971;
var G__21416 = (i__20972 + (1));
seq__20969 = G__21413;
chunk__20970 = G__21414;
count__20971 = G__21415;
i__20972 = G__21416;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20969);
if(temp__5804__auto__){
var seq__20969__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20969__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20969__$1);
var G__21418 = cljs.core.chunk_rest(seq__20969__$1);
var G__21419 = c__5525__auto__;
var G__21420 = cljs.core.count(c__5525__auto__);
var G__21421 = (0);
seq__20969 = G__21418;
chunk__20970 = G__21419;
count__20971 = G__21420;
i__20972 = G__21421;
continue;
} else {
var map__20995 = cljs.core.first(seq__20969__$1);
var map__20995__$1 = cljs.core.__destructure_map(map__20995);
var src = map__20995__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20995__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20995__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20995__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20995__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21000){var e_21424 = e21000;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21424);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21424.message)].join('')));
}

var G__21426 = cljs.core.next(seq__20969__$1);
var G__21427 = null;
var G__21428 = (0);
var G__21429 = (0);
seq__20969 = G__21426;
chunk__20970 = G__21427;
count__20971 = G__21428;
i__20972 = G__21429;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__21014 = cljs.core.seq(js_requires);
var chunk__21015 = null;
var count__21016 = (0);
var i__21017 = (0);
while(true){
if((i__21017 < count__21016)){
var js_ns = chunk__21015.cljs$core$IIndexed$_nth$arity$2(null,i__21017);
var require_str_21430 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21430);


var G__21432 = seq__21014;
var G__21433 = chunk__21015;
var G__21434 = count__21016;
var G__21435 = (i__21017 + (1));
seq__21014 = G__21432;
chunk__21015 = G__21433;
count__21016 = G__21434;
i__21017 = G__21435;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21014);
if(temp__5804__auto__){
var seq__21014__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21014__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21014__$1);
var G__21436 = cljs.core.chunk_rest(seq__21014__$1);
var G__21437 = c__5525__auto__;
var G__21438 = cljs.core.count(c__5525__auto__);
var G__21439 = (0);
seq__21014 = G__21436;
chunk__21015 = G__21437;
count__21016 = G__21438;
i__21017 = G__21439;
continue;
} else {
var js_ns = cljs.core.first(seq__21014__$1);
var require_str_21442 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21442);


var G__21443 = cljs.core.next(seq__21014__$1);
var G__21444 = null;
var G__21445 = (0);
var G__21446 = (0);
seq__21014 = G__21443;
chunk__21015 = G__21444;
count__21016 = G__21445;
i__21017 = G__21446;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21021){
var map__21022 = p__21021;
var map__21022__$1 = cljs.core.__destructure_map(map__21022);
var msg = map__21022__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21022__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21022__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21025(s__21026){
return (new cljs.core.LazySeq(null,(function (){
var s__21026__$1 = s__21026;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21026__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__21032 = cljs.core.first(xs__6360__auto__);
var map__21032__$1 = cljs.core.__destructure_map(map__21032);
var src = map__21032__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21032__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21032__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__21026__$1,map__21032,map__21032__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21022,map__21022__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21025_$_iter__21027(s__21028){
return (new cljs.core.LazySeq(null,((function (s__21026__$1,map__21032,map__21032__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21022,map__21022__$1,msg,info,reload_info){
return (function (){
var s__21028__$1 = s__21028;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__21028__$1);
if(temp__5804__auto____$1){
var s__21028__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21028__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__21028__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__21030 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__21029 = (0);
while(true){
if((i__21029 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__21029);
cljs.core.chunk_append(b__21030,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21448 = (i__21029 + (1));
i__21029 = G__21448;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21030),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21025_$_iter__21027(cljs.core.chunk_rest(s__21028__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21030),null);
}
} else {
var warning = cljs.core.first(s__21028__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21025_$_iter__21027(cljs.core.rest(s__21028__$2)));
}
} else {
return null;
}
break;
}
});})(s__21026__$1,map__21032,map__21032__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21022,map__21022__$1,msg,info,reload_info))
,null,null));
});})(s__21026__$1,map__21032,map__21032__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21022,map__21022__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21025(cljs.core.rest(s__21026__$1)));
} else {
var G__21450 = cljs.core.rest(s__21026__$1);
s__21026__$1 = G__21450;
continue;
}
} else {
var G__21451 = cljs.core.rest(s__21026__$1);
s__21026__$1 = G__21451;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__21091_21456 = cljs.core.seq(warnings);
var chunk__21092_21457 = null;
var count__21093_21458 = (0);
var i__21094_21459 = (0);
while(true){
if((i__21094_21459 < count__21093_21458)){
var map__21097_21460 = chunk__21092_21457.cljs$core$IIndexed$_nth$arity$2(null,i__21094_21459);
var map__21097_21461__$1 = cljs.core.__destructure_map(map__21097_21460);
var w_21462 = map__21097_21461__$1;
var msg_21463__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21097_21461__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21097_21461__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21097_21461__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21097_21461__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21466)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21464),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21465),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21463__$1)].join(''));


var G__21467 = seq__21091_21456;
var G__21468 = chunk__21092_21457;
var G__21469 = count__21093_21458;
var G__21470 = (i__21094_21459 + (1));
seq__21091_21456 = G__21467;
chunk__21092_21457 = G__21468;
count__21093_21458 = G__21469;
i__21094_21459 = G__21470;
continue;
} else {
var temp__5804__auto___21471 = cljs.core.seq(seq__21091_21456);
if(temp__5804__auto___21471){
var seq__21091_21472__$1 = temp__5804__auto___21471;
if(cljs.core.chunked_seq_QMARK_(seq__21091_21472__$1)){
var c__5525__auto___21473 = cljs.core.chunk_first(seq__21091_21472__$1);
var G__21474 = cljs.core.chunk_rest(seq__21091_21472__$1);
var G__21475 = c__5525__auto___21473;
var G__21476 = cljs.core.count(c__5525__auto___21473);
var G__21477 = (0);
seq__21091_21456 = G__21474;
chunk__21092_21457 = G__21475;
count__21093_21458 = G__21476;
i__21094_21459 = G__21477;
continue;
} else {
var map__21098_21478 = cljs.core.first(seq__21091_21472__$1);
var map__21098_21479__$1 = cljs.core.__destructure_map(map__21098_21478);
var w_21480 = map__21098_21479__$1;
var msg_21481__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21098_21479__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21098_21479__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21483 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21098_21479__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21484 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21098_21479__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21484)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21482),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21483),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21481__$1)].join(''));


var G__21507 = cljs.core.next(seq__21091_21472__$1);
var G__21508 = null;
var G__21509 = (0);
var G__21510 = (0);
seq__21091_21456 = G__21507;
chunk__21092_21457 = G__21508;
count__21093_21458 = G__21509;
i__21094_21459 = G__21510;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21020_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21020_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21100 = node_uri;
G__21100.setQuery(null);

G__21100.setPath(new$);

return G__21100;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21101){
var map__21102 = p__21101;
var map__21102__$1 = cljs.core.__destructure_map(map__21102);
var msg = map__21102__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21102__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21102__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21103 = cljs.core.seq(updates);
var chunk__21105 = null;
var count__21106 = (0);
var i__21107 = (0);
while(true){
if((i__21107 < count__21106)){
var path = chunk__21105.cljs$core$IIndexed$_nth$arity$2(null,i__21107);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21236_21516 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21240_21517 = null;
var count__21241_21518 = (0);
var i__21242_21519 = (0);
while(true){
if((i__21242_21519 < count__21241_21518)){
var node_21520 = chunk__21240_21517.cljs$core$IIndexed$_nth$arity$2(null,i__21242_21519);
if(cljs.core.not(node_21520.shadow$old)){
var path_match_21521 = shadow.cljs.devtools.client.browser.match_paths(node_21520.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21521)){
var new_link_21522 = (function (){var G__21279 = node_21520.cloneNode(true);
G__21279.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21521),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21279;
})();
(node_21520.shadow$old = true);

(new_link_21522.onload = ((function (seq__21236_21516,chunk__21240_21517,count__21241_21518,i__21242_21519,seq__21103,chunk__21105,count__21106,i__21107,new_link_21522,path_match_21521,node_21520,path,map__21102,map__21102__$1,msg,updates,reload_info){
return (function (e){
var seq__21280_21523 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21282_21524 = null;
var count__21283_21525 = (0);
var i__21284_21526 = (0);
while(true){
if((i__21284_21526 < count__21283_21525)){
var map__21288_21527 = chunk__21282_21524.cljs$core$IIndexed$_nth$arity$2(null,i__21284_21526);
var map__21288_21528__$1 = cljs.core.__destructure_map(map__21288_21527);
var task_21529 = map__21288_21528__$1;
var fn_str_21530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21288_21528__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21288_21528__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21533 = goog.getObjectByName(fn_str_21530,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21531)].join(''));

(fn_obj_21533.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21533.cljs$core$IFn$_invoke$arity$2(path,new_link_21522) : fn_obj_21533.call(null,path,new_link_21522));


var G__21535 = seq__21280_21523;
var G__21536 = chunk__21282_21524;
var G__21537 = count__21283_21525;
var G__21538 = (i__21284_21526 + (1));
seq__21280_21523 = G__21535;
chunk__21282_21524 = G__21536;
count__21283_21525 = G__21537;
i__21284_21526 = G__21538;
continue;
} else {
var temp__5804__auto___21539 = cljs.core.seq(seq__21280_21523);
if(temp__5804__auto___21539){
var seq__21280_21540__$1 = temp__5804__auto___21539;
if(cljs.core.chunked_seq_QMARK_(seq__21280_21540__$1)){
var c__5525__auto___21541 = cljs.core.chunk_first(seq__21280_21540__$1);
var G__21542 = cljs.core.chunk_rest(seq__21280_21540__$1);
var G__21543 = c__5525__auto___21541;
var G__21544 = cljs.core.count(c__5525__auto___21541);
var G__21545 = (0);
seq__21280_21523 = G__21542;
chunk__21282_21524 = G__21543;
count__21283_21525 = G__21544;
i__21284_21526 = G__21545;
continue;
} else {
var map__21289_21546 = cljs.core.first(seq__21280_21540__$1);
var map__21289_21547__$1 = cljs.core.__destructure_map(map__21289_21546);
var task_21548 = map__21289_21547__$1;
var fn_str_21549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21289_21547__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21550 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21289_21547__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21551 = goog.getObjectByName(fn_str_21549,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21550)].join(''));

(fn_obj_21551.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21551.cljs$core$IFn$_invoke$arity$2(path,new_link_21522) : fn_obj_21551.call(null,path,new_link_21522));


var G__21552 = cljs.core.next(seq__21280_21540__$1);
var G__21553 = null;
var G__21554 = (0);
var G__21555 = (0);
seq__21280_21523 = G__21552;
chunk__21282_21524 = G__21553;
count__21283_21525 = G__21554;
i__21284_21526 = G__21555;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21520);
});})(seq__21236_21516,chunk__21240_21517,count__21241_21518,i__21242_21519,seq__21103,chunk__21105,count__21106,i__21107,new_link_21522,path_match_21521,node_21520,path,map__21102,map__21102__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21521], 0));

goog.dom.insertSiblingAfter(new_link_21522,node_21520);


var G__21556 = seq__21236_21516;
var G__21557 = chunk__21240_21517;
var G__21558 = count__21241_21518;
var G__21559 = (i__21242_21519 + (1));
seq__21236_21516 = G__21556;
chunk__21240_21517 = G__21557;
count__21241_21518 = G__21558;
i__21242_21519 = G__21559;
continue;
} else {
var G__21560 = seq__21236_21516;
var G__21561 = chunk__21240_21517;
var G__21562 = count__21241_21518;
var G__21563 = (i__21242_21519 + (1));
seq__21236_21516 = G__21560;
chunk__21240_21517 = G__21561;
count__21241_21518 = G__21562;
i__21242_21519 = G__21563;
continue;
}
} else {
var G__21564 = seq__21236_21516;
var G__21565 = chunk__21240_21517;
var G__21566 = count__21241_21518;
var G__21567 = (i__21242_21519 + (1));
seq__21236_21516 = G__21564;
chunk__21240_21517 = G__21565;
count__21241_21518 = G__21566;
i__21242_21519 = G__21567;
continue;
}
} else {
var temp__5804__auto___21568 = cljs.core.seq(seq__21236_21516);
if(temp__5804__auto___21568){
var seq__21236_21569__$1 = temp__5804__auto___21568;
if(cljs.core.chunked_seq_QMARK_(seq__21236_21569__$1)){
var c__5525__auto___21570 = cljs.core.chunk_first(seq__21236_21569__$1);
var G__21571 = cljs.core.chunk_rest(seq__21236_21569__$1);
var G__21572 = c__5525__auto___21570;
var G__21573 = cljs.core.count(c__5525__auto___21570);
var G__21574 = (0);
seq__21236_21516 = G__21571;
chunk__21240_21517 = G__21572;
count__21241_21518 = G__21573;
i__21242_21519 = G__21574;
continue;
} else {
var node_21575 = cljs.core.first(seq__21236_21569__$1);
if(cljs.core.not(node_21575.shadow$old)){
var path_match_21576 = shadow.cljs.devtools.client.browser.match_paths(node_21575.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21576)){
var new_link_21578 = (function (){var G__21290 = node_21575.cloneNode(true);
G__21290.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21576),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21290;
})();
(node_21575.shadow$old = true);

(new_link_21578.onload = ((function (seq__21236_21516,chunk__21240_21517,count__21241_21518,i__21242_21519,seq__21103,chunk__21105,count__21106,i__21107,new_link_21578,path_match_21576,node_21575,seq__21236_21569__$1,temp__5804__auto___21568,path,map__21102,map__21102__$1,msg,updates,reload_info){
return (function (e){
var seq__21291_21580 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21293_21581 = null;
var count__21294_21582 = (0);
var i__21295_21583 = (0);
while(true){
if((i__21295_21583 < count__21294_21582)){
var map__21299_21586 = chunk__21293_21581.cljs$core$IIndexed$_nth$arity$2(null,i__21295_21583);
var map__21299_21587__$1 = cljs.core.__destructure_map(map__21299_21586);
var task_21588 = map__21299_21587__$1;
var fn_str_21589 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21299_21587__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21590 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21299_21587__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21591 = goog.getObjectByName(fn_str_21589,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21590)].join(''));

(fn_obj_21591.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21591.cljs$core$IFn$_invoke$arity$2(path,new_link_21578) : fn_obj_21591.call(null,path,new_link_21578));


var G__21592 = seq__21291_21580;
var G__21593 = chunk__21293_21581;
var G__21594 = count__21294_21582;
var G__21595 = (i__21295_21583 + (1));
seq__21291_21580 = G__21592;
chunk__21293_21581 = G__21593;
count__21294_21582 = G__21594;
i__21295_21583 = G__21595;
continue;
} else {
var temp__5804__auto___21596__$1 = cljs.core.seq(seq__21291_21580);
if(temp__5804__auto___21596__$1){
var seq__21291_21597__$1 = temp__5804__auto___21596__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21291_21597__$1)){
var c__5525__auto___21598 = cljs.core.chunk_first(seq__21291_21597__$1);
var G__21599 = cljs.core.chunk_rest(seq__21291_21597__$1);
var G__21600 = c__5525__auto___21598;
var G__21601 = cljs.core.count(c__5525__auto___21598);
var G__21602 = (0);
seq__21291_21580 = G__21599;
chunk__21293_21581 = G__21600;
count__21294_21582 = G__21601;
i__21295_21583 = G__21602;
continue;
} else {
var map__21300_21603 = cljs.core.first(seq__21291_21597__$1);
var map__21300_21604__$1 = cljs.core.__destructure_map(map__21300_21603);
var task_21605 = map__21300_21604__$1;
var fn_str_21606 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21300_21604__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21300_21604__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21608 = goog.getObjectByName(fn_str_21606,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21607)].join(''));

(fn_obj_21608.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21608.cljs$core$IFn$_invoke$arity$2(path,new_link_21578) : fn_obj_21608.call(null,path,new_link_21578));


var G__21609 = cljs.core.next(seq__21291_21597__$1);
var G__21610 = null;
var G__21611 = (0);
var G__21612 = (0);
seq__21291_21580 = G__21609;
chunk__21293_21581 = G__21610;
count__21294_21582 = G__21611;
i__21295_21583 = G__21612;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21575);
});})(seq__21236_21516,chunk__21240_21517,count__21241_21518,i__21242_21519,seq__21103,chunk__21105,count__21106,i__21107,new_link_21578,path_match_21576,node_21575,seq__21236_21569__$1,temp__5804__auto___21568,path,map__21102,map__21102__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21576], 0));

goog.dom.insertSiblingAfter(new_link_21578,node_21575);


var G__21613 = cljs.core.next(seq__21236_21569__$1);
var G__21614 = null;
var G__21615 = (0);
var G__21616 = (0);
seq__21236_21516 = G__21613;
chunk__21240_21517 = G__21614;
count__21241_21518 = G__21615;
i__21242_21519 = G__21616;
continue;
} else {
var G__21617 = cljs.core.next(seq__21236_21569__$1);
var G__21618 = null;
var G__21619 = (0);
var G__21620 = (0);
seq__21236_21516 = G__21617;
chunk__21240_21517 = G__21618;
count__21241_21518 = G__21619;
i__21242_21519 = G__21620;
continue;
}
} else {
var G__21621 = cljs.core.next(seq__21236_21569__$1);
var G__21622 = null;
var G__21623 = (0);
var G__21624 = (0);
seq__21236_21516 = G__21621;
chunk__21240_21517 = G__21622;
count__21241_21518 = G__21623;
i__21242_21519 = G__21624;
continue;
}
}
} else {
}
}
break;
}


var G__21625 = seq__21103;
var G__21626 = chunk__21105;
var G__21627 = count__21106;
var G__21628 = (i__21107 + (1));
seq__21103 = G__21625;
chunk__21105 = G__21626;
count__21106 = G__21627;
i__21107 = G__21628;
continue;
} else {
var G__21629 = seq__21103;
var G__21630 = chunk__21105;
var G__21631 = count__21106;
var G__21632 = (i__21107 + (1));
seq__21103 = G__21629;
chunk__21105 = G__21630;
count__21106 = G__21631;
i__21107 = G__21632;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21103);
if(temp__5804__auto__){
var seq__21103__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21103__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21103__$1);
var G__21633 = cljs.core.chunk_rest(seq__21103__$1);
var G__21634 = c__5525__auto__;
var G__21635 = cljs.core.count(c__5525__auto__);
var G__21636 = (0);
seq__21103 = G__21633;
chunk__21105 = G__21634;
count__21106 = G__21635;
i__21107 = G__21636;
continue;
} else {
var path = cljs.core.first(seq__21103__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21311_21637 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21315_21638 = null;
var count__21316_21639 = (0);
var i__21317_21640 = (0);
while(true){
if((i__21317_21640 < count__21316_21639)){
var node_21641 = chunk__21315_21638.cljs$core$IIndexed$_nth$arity$2(null,i__21317_21640);
if(cljs.core.not(node_21641.shadow$old)){
var path_match_21642 = shadow.cljs.devtools.client.browser.match_paths(node_21641.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21642)){
var new_link_21643 = (function (){var G__21349 = node_21641.cloneNode(true);
G__21349.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21642),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21349;
})();
(node_21641.shadow$old = true);

(new_link_21643.onload = ((function (seq__21311_21637,chunk__21315_21638,count__21316_21639,i__21317_21640,seq__21103,chunk__21105,count__21106,i__21107,new_link_21643,path_match_21642,node_21641,path,seq__21103__$1,temp__5804__auto__,map__21102,map__21102__$1,msg,updates,reload_info){
return (function (e){
var seq__21350_21644 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21352_21645 = null;
var count__21353_21646 = (0);
var i__21354_21647 = (0);
while(true){
if((i__21354_21647 < count__21353_21646)){
var map__21358_21648 = chunk__21352_21645.cljs$core$IIndexed$_nth$arity$2(null,i__21354_21647);
var map__21358_21649__$1 = cljs.core.__destructure_map(map__21358_21648);
var task_21650 = map__21358_21649__$1;
var fn_str_21651 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21358_21649__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21358_21649__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21653 = goog.getObjectByName(fn_str_21651,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21652)].join(''));

(fn_obj_21653.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21653.cljs$core$IFn$_invoke$arity$2(path,new_link_21643) : fn_obj_21653.call(null,path,new_link_21643));


var G__21654 = seq__21350_21644;
var G__21655 = chunk__21352_21645;
var G__21656 = count__21353_21646;
var G__21657 = (i__21354_21647 + (1));
seq__21350_21644 = G__21654;
chunk__21352_21645 = G__21655;
count__21353_21646 = G__21656;
i__21354_21647 = G__21657;
continue;
} else {
var temp__5804__auto___21658__$1 = cljs.core.seq(seq__21350_21644);
if(temp__5804__auto___21658__$1){
var seq__21350_21659__$1 = temp__5804__auto___21658__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21350_21659__$1)){
var c__5525__auto___21660 = cljs.core.chunk_first(seq__21350_21659__$1);
var G__21661 = cljs.core.chunk_rest(seq__21350_21659__$1);
var G__21662 = c__5525__auto___21660;
var G__21663 = cljs.core.count(c__5525__auto___21660);
var G__21664 = (0);
seq__21350_21644 = G__21661;
chunk__21352_21645 = G__21662;
count__21353_21646 = G__21663;
i__21354_21647 = G__21664;
continue;
} else {
var map__21359_21665 = cljs.core.first(seq__21350_21659__$1);
var map__21359_21666__$1 = cljs.core.__destructure_map(map__21359_21665);
var task_21667 = map__21359_21666__$1;
var fn_str_21668 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21359_21666__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21669 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21359_21666__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21670 = goog.getObjectByName(fn_str_21668,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21669)].join(''));

(fn_obj_21670.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21670.cljs$core$IFn$_invoke$arity$2(path,new_link_21643) : fn_obj_21670.call(null,path,new_link_21643));


var G__21671 = cljs.core.next(seq__21350_21659__$1);
var G__21672 = null;
var G__21673 = (0);
var G__21674 = (0);
seq__21350_21644 = G__21671;
chunk__21352_21645 = G__21672;
count__21353_21646 = G__21673;
i__21354_21647 = G__21674;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21641);
});})(seq__21311_21637,chunk__21315_21638,count__21316_21639,i__21317_21640,seq__21103,chunk__21105,count__21106,i__21107,new_link_21643,path_match_21642,node_21641,path,seq__21103__$1,temp__5804__auto__,map__21102,map__21102__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21642], 0));

goog.dom.insertSiblingAfter(new_link_21643,node_21641);


var G__21675 = seq__21311_21637;
var G__21676 = chunk__21315_21638;
var G__21677 = count__21316_21639;
var G__21678 = (i__21317_21640 + (1));
seq__21311_21637 = G__21675;
chunk__21315_21638 = G__21676;
count__21316_21639 = G__21677;
i__21317_21640 = G__21678;
continue;
} else {
var G__21679 = seq__21311_21637;
var G__21680 = chunk__21315_21638;
var G__21681 = count__21316_21639;
var G__21682 = (i__21317_21640 + (1));
seq__21311_21637 = G__21679;
chunk__21315_21638 = G__21680;
count__21316_21639 = G__21681;
i__21317_21640 = G__21682;
continue;
}
} else {
var G__21683 = seq__21311_21637;
var G__21684 = chunk__21315_21638;
var G__21685 = count__21316_21639;
var G__21686 = (i__21317_21640 + (1));
seq__21311_21637 = G__21683;
chunk__21315_21638 = G__21684;
count__21316_21639 = G__21685;
i__21317_21640 = G__21686;
continue;
}
} else {
var temp__5804__auto___21687__$1 = cljs.core.seq(seq__21311_21637);
if(temp__5804__auto___21687__$1){
var seq__21311_21688__$1 = temp__5804__auto___21687__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21311_21688__$1)){
var c__5525__auto___21689 = cljs.core.chunk_first(seq__21311_21688__$1);
var G__21690 = cljs.core.chunk_rest(seq__21311_21688__$1);
var G__21691 = c__5525__auto___21689;
var G__21692 = cljs.core.count(c__5525__auto___21689);
var G__21693 = (0);
seq__21311_21637 = G__21690;
chunk__21315_21638 = G__21691;
count__21316_21639 = G__21692;
i__21317_21640 = G__21693;
continue;
} else {
var node_21694 = cljs.core.first(seq__21311_21688__$1);
if(cljs.core.not(node_21694.shadow$old)){
var path_match_21695 = shadow.cljs.devtools.client.browser.match_paths(node_21694.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21695)){
var new_link_21696 = (function (){var G__21360 = node_21694.cloneNode(true);
G__21360.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21695),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21360;
})();
(node_21694.shadow$old = true);

(new_link_21696.onload = ((function (seq__21311_21637,chunk__21315_21638,count__21316_21639,i__21317_21640,seq__21103,chunk__21105,count__21106,i__21107,new_link_21696,path_match_21695,node_21694,seq__21311_21688__$1,temp__5804__auto___21687__$1,path,seq__21103__$1,temp__5804__auto__,map__21102,map__21102__$1,msg,updates,reload_info){
return (function (e){
var seq__21361_21697 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21363_21698 = null;
var count__21364_21699 = (0);
var i__21365_21700 = (0);
while(true){
if((i__21365_21700 < count__21364_21699)){
var map__21369_21701 = chunk__21363_21698.cljs$core$IIndexed$_nth$arity$2(null,i__21365_21700);
var map__21369_21702__$1 = cljs.core.__destructure_map(map__21369_21701);
var task_21703 = map__21369_21702__$1;
var fn_str_21704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21369_21702__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21369_21702__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21706 = goog.getObjectByName(fn_str_21704,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21705)].join(''));

(fn_obj_21706.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21706.cljs$core$IFn$_invoke$arity$2(path,new_link_21696) : fn_obj_21706.call(null,path,new_link_21696));


var G__21707 = seq__21361_21697;
var G__21708 = chunk__21363_21698;
var G__21709 = count__21364_21699;
var G__21710 = (i__21365_21700 + (1));
seq__21361_21697 = G__21707;
chunk__21363_21698 = G__21708;
count__21364_21699 = G__21709;
i__21365_21700 = G__21710;
continue;
} else {
var temp__5804__auto___21711__$2 = cljs.core.seq(seq__21361_21697);
if(temp__5804__auto___21711__$2){
var seq__21361_21712__$1 = temp__5804__auto___21711__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21361_21712__$1)){
var c__5525__auto___21713 = cljs.core.chunk_first(seq__21361_21712__$1);
var G__21714 = cljs.core.chunk_rest(seq__21361_21712__$1);
var G__21715 = c__5525__auto___21713;
var G__21716 = cljs.core.count(c__5525__auto___21713);
var G__21717 = (0);
seq__21361_21697 = G__21714;
chunk__21363_21698 = G__21715;
count__21364_21699 = G__21716;
i__21365_21700 = G__21717;
continue;
} else {
var map__21370_21720 = cljs.core.first(seq__21361_21712__$1);
var map__21370_21721__$1 = cljs.core.__destructure_map(map__21370_21720);
var task_21722 = map__21370_21721__$1;
var fn_str_21723 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21370_21721__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21724 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21370_21721__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21725 = goog.getObjectByName(fn_str_21723,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21724)].join(''));

(fn_obj_21725.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21725.cljs$core$IFn$_invoke$arity$2(path,new_link_21696) : fn_obj_21725.call(null,path,new_link_21696));


var G__21726 = cljs.core.next(seq__21361_21712__$1);
var G__21727 = null;
var G__21728 = (0);
var G__21729 = (0);
seq__21361_21697 = G__21726;
chunk__21363_21698 = G__21727;
count__21364_21699 = G__21728;
i__21365_21700 = G__21729;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21694);
});})(seq__21311_21637,chunk__21315_21638,count__21316_21639,i__21317_21640,seq__21103,chunk__21105,count__21106,i__21107,new_link_21696,path_match_21695,node_21694,seq__21311_21688__$1,temp__5804__auto___21687__$1,path,seq__21103__$1,temp__5804__auto__,map__21102,map__21102__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21695], 0));

goog.dom.insertSiblingAfter(new_link_21696,node_21694);


var G__21730 = cljs.core.next(seq__21311_21688__$1);
var G__21731 = null;
var G__21732 = (0);
var G__21733 = (0);
seq__21311_21637 = G__21730;
chunk__21315_21638 = G__21731;
count__21316_21639 = G__21732;
i__21317_21640 = G__21733;
continue;
} else {
var G__21734 = cljs.core.next(seq__21311_21688__$1);
var G__21735 = null;
var G__21736 = (0);
var G__21737 = (0);
seq__21311_21637 = G__21734;
chunk__21315_21638 = G__21735;
count__21316_21639 = G__21736;
i__21317_21640 = G__21737;
continue;
}
} else {
var G__21738 = cljs.core.next(seq__21311_21688__$1);
var G__21739 = null;
var G__21740 = (0);
var G__21741 = (0);
seq__21311_21637 = G__21738;
chunk__21315_21638 = G__21739;
count__21316_21639 = G__21740;
i__21317_21640 = G__21741;
continue;
}
}
} else {
}
}
break;
}


var G__21742 = cljs.core.next(seq__21103__$1);
var G__21743 = null;
var G__21744 = (0);
var G__21745 = (0);
seq__21103 = G__21742;
chunk__21105 = G__21743;
count__21106 = G__21744;
i__21107 = G__21745;
continue;
} else {
var G__21746 = cljs.core.next(seq__21103__$1);
var G__21747 = null;
var G__21748 = (0);
var G__21749 = (0);
seq__21103 = G__21746;
chunk__21105 = G__21747;
count__21106 = G__21748;
i__21107 = G__21749;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__21374 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21374) : success.call(null,G__21374));
}catch (e21373){var e = e21373;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__21375,success,fail){
var map__21376 = p__21375;
var map__21376__$1 = cljs.core.__destructure_map(map__21376);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21376__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__21380 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21380) : success.call(null,G__21380));
}catch (e21379){var e = e21379;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21381,done,error){
var map__21382 = p__21381;
var map__21382__$1 = cljs.core.__destructure_map(map__21382);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21382__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21383,done,error){
var map__21384 = p__21383;
var map__21384__$1 = cljs.core.__destructure_map(map__21384);
var msg = map__21384__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21384__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21384__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21384__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21385){
var map__21386 = p__21385;
var map__21386__$1 = cljs.core.__destructure_map(map__21386);
var src = map__21386__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21386__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21387 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21387) : done.call(null,G__21387));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21388){
var map__21389 = p__21388;
var map__21389__$1 = cljs.core.__destructure_map(map__21389);
var msg__$1 = map__21389__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21389__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21390){var ex = e21390;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21391){
var map__21392 = p__21391;
var map__21392__$1 = cljs.core.__destructure_map(map__21392);
var env = map__21392__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21392__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21393){
var map__21406 = p__21393;
var map__21406__$1 = cljs.core.__destructure_map(map__21406);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21406__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21406__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21407){
var map__21408 = p__21407;
var map__21408__$1 = cljs.core.__destructure_map(map__21408);
var svc = map__21408__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21408__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
