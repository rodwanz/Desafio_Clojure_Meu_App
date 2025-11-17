goog.provide('front_app.core');
if((typeof front_app !== 'undefined') && (typeof front_app.core !== 'undefined') && (typeof front_app.core.app_state !== 'undefined')){
} else {
front_app.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"author","author",2111686192),"",new cljs.core.Keyword(null,"book","book",-918152214),"",new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentVector.EMPTY], null));
}
front_app.core.add_item = (function front_app$core$add_item(){
var map__11920 = cljs.core.deref(front_app.core.app_state);
var map__11920__$1 = cljs.core.__destructure_map(map__11920);
var author = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11920__$1,new cljs.core.Keyword(null,"author","author",2111686192));
var book = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11920__$1,new cljs.core.Keyword(null,"book","book",-918152214));
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.not_empty(author);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not_empty(book);
} else {
return and__5000__auto__;
}
})())){
fetch("http://localhost:9999/posting-in-database",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(({"name": author, "book": book}))], null))).then((function (p1__11918_SHARP_){
return p1__11918_SHARP_.json;
})).then((function (response){
return console.log("Saved in backend:",response);
})).catch((function (p1__11919_SHARP_){
return console.error("Error:",p1__11919_SHARP_);
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(front_app.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"author","author",2111686192),"",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"book","book",-918152214),""], 0));
} else {
return null;
}
});
front_app.core.reset = (function front_app$core$reset(){
return cljs.core.reset_BANG_(front_app.core.app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"author","author",2111686192),"",new cljs.core.Keyword(null,"book","book",-918152214),"",new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentVector.EMPTY], null));
});
front_app.core.app = (function front_app$core$app(){
var map__11923 = cljs.core.deref(front_app.core.app_state);
var map__11923__$1 = cljs.core.__destructure_map(map__11923);
var author = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11923__$1,new cljs.core.Keyword(null,"author","author",2111686192));
var book = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11923__$1,new cljs.core.Keyword(null,"book","book",-918152214));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11923__$1,new cljs.core.Keyword(null,"items","items",1031954938));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Book Registration"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Author",new cljs.core.Keyword(null,"value","value",305978217),author,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__11921_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(front_app.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"author","author",2111686192),p1__11921_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Book",new cljs.core.Keyword(null,"value","value",305978217),book,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__11922_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(front_app.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"book","book",-918152214),p1__11922_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),front_app.core.add_item], null),"Add"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),front_app.core.reset,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#dc3545"], null)], null),"Reset"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5480__auto__ = (function front_app$core$app_$_iter__11924(s__11925){
return (new cljs.core.LazySeq(null,(function (){
var s__11925__$1 = s__11925;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__11925__$1);
if(temp__5804__auto__){
var s__11925__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11925__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__11925__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__11927 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__11926 = (0);
while(true){
if((i__11926 < size__5479__auto__)){
var map__11928 = cljs.core._nth(c__5478__auto__,i__11926);
var map__11928__$1 = cljs.core.__destructure_map(map__11928);
var author__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11928__$1,new cljs.core.Keyword(null,"author","author",2111686192));
var book__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11928__$1,new cljs.core.Keyword(null,"book","book",-918152214));
cljs.core.chunk_append(b__11927,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(author__$1)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(book__$1)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(author__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(book__$1)].join('')], null)));

var G__11930 = (i__11926 + (1));
i__11926 = G__11930;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11927),front_app$core$app_$_iter__11924(cljs.core.chunk_rest(s__11925__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11927),null);
}
} else {
var map__11929 = cljs.core.first(s__11925__$2);
var map__11929__$1 = cljs.core.__destructure_map(map__11929);
var author__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11929__$1,new cljs.core.Keyword(null,"author","author",2111686192));
var book__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11929__$1,new cljs.core.Keyword(null,"book","book",-918152214));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(author__$1)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(book__$1)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(author__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(book__$1)].join('')], null)),front_app$core$app_$_iter__11924(cljs.core.rest(s__11925__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(items);
})()], null)], null);
});
front_app.core.start = (function front_app$core$start(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [front_app.core.app], null),document.getElementById("app"));
});
front_app.core.init = (function front_app$core$init(){
return front_app.core.start();
});

//# sourceMappingURL=front_app.core.js.map
