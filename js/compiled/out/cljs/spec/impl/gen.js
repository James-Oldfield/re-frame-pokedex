// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__25749__auto__,writer__25750__auto__,opt__25751__auto__){
return cljs.core._write.call(null,writer__25750__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35496 = arguments.length;
var i__26219__auto___35497 = (0);
while(true){
if((i__26219__auto___35497 < len__26218__auto___35496)){
args__26225__auto__.push((arguments[i__26219__auto___35497]));

var G__35498 = (i__26219__auto___35497 + (1));
i__26219__auto___35497 = G__35498;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq35495){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35495));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35500 = arguments.length;
var i__26219__auto___35501 = (0);
while(true){
if((i__26219__auto___35501 < len__26218__auto___35500)){
args__26225__auto__.push((arguments[i__26219__auto___35501]));

var G__35502 = (i__26219__auto___35501 + (1));
i__26219__auto___35501 = G__35502;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq35499){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35499));
});

var g_QMARK__35503 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_35504 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__35503){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__35503))
,null));
var mkg_35505 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__35503,g_35504){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__35503,g_35504))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__35503,g_35504,mkg_35505){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__35503).call(null,x);
});})(g_QMARK__35503,g_35504,mkg_35505))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__35503,g_35504,mkg_35505){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_35505).call(null,gfn);
});})(g_QMARK__35503,g_35504,mkg_35505))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__35503,g_35504,mkg_35505){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_35504).call(null,generator);
});})(g_QMARK__35503,g_35504,mkg_35505))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__35467__auto___35524 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__35467__auto___35524){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35525 = arguments.length;
var i__26219__auto___35526 = (0);
while(true){
if((i__26219__auto___35526 < len__26218__auto___35525)){
args__26225__auto__.push((arguments[i__26219__auto___35526]));

var G__35527 = (i__26219__auto___35526 + (1));
i__26219__auto___35526 = G__35527;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});})(g__35467__auto___35524))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35467__auto___35524){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35467__auto___35524),args);
});})(g__35467__auto___35524))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__35467__auto___35524){
return (function (seq35506){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35506));
});})(g__35467__auto___35524))
;


var g__35467__auto___35528 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__35467__auto___35528){
return (function cljs$spec$impl$gen$list(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35529 = arguments.length;
var i__26219__auto___35530 = (0);
while(true){
if((i__26219__auto___35530 < len__26218__auto___35529)){
args__26225__auto__.push((arguments[i__26219__auto___35530]));

var G__35531 = (i__26219__auto___35530 + (1));
i__26219__auto___35530 = G__35531;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});})(g__35467__auto___35528))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35467__auto___35528){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35467__auto___35528),args);
});})(g__35467__auto___35528))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__35467__auto___35528){
return (function (seq35507){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35507));
});})(g__35467__auto___35528))
;


var g__35467__auto___35532 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__35467__auto___35532){
return (function cljs$spec$impl$gen$map(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35533 = arguments.length;
var i__26219__auto___35534 = (0);
while(true){
if((i__26219__auto___35534 < len__26218__auto___35533)){
args__26225__auto__.push((arguments[i__26219__auto___35534]));

var G__35535 = (i__26219__auto___35534 + (1));
i__26219__auto___35534 = G__35535;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});})(g__35467__auto___35532))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35467__auto___35532){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35467__auto___35532),args);
});})(g__35467__auto___35532))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__35467__auto___35532){
return (function (seq35508){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35508));
});})(g__35467__auto___35532))
;


var g__35467__auto___35536 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__35467__auto___35536){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35537 = arguments.length;
var i__26219__auto___35538 = (0);
while(true){
if((i__26219__auto___35538 < len__26218__auto___35537)){
args__26225__auto__.push((arguments[i__26219__auto___35538]));

var G__35539 = (i__26219__auto___35538 + (1));
i__26219__auto___35538 = G__35539;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});})(g__35467__auto___35536))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35467__auto___35536){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35467__auto___35536),args);
});})(g__35467__auto___35536))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__35467__auto___35536){
return (function (seq35509){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35509));
});})(g__35467__auto___35536))
;


var g__35467__auto___35540 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__35467__auto___35540){
return (function cljs$spec$impl$gen$set(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35541 = arguments.length;
var i__26219__auto___35542 = (0);
while(true){
if((i__26219__auto___35542 < len__26218__auto___35541)){
args__26225__auto__.push((arguments[i__26219__auto___35542]));

var G__35543 = (i__26219__auto___35542 + (1));
i__26219__auto___35542 = G__35543;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});})(g__35467__auto___35540))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35467__auto___35540){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35467__auto___35540),args);
});})(g__35467__auto___35540))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__35467__auto___35540){
return (function (seq35510){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35510));
});})(g__35467__auto___35540))
;


var g__35467__auto___35544 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__35467__auto___35544){
return (function cljs$spec$impl$gen$vector(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35545 = arguments.length;
var i__26219__auto___35546 = (0);
while(true){
if((i__26219__auto___35546 < len__26218__auto___35545)){
args__26225__auto__.push((arguments[i__26219__auto___35546]));

var G__35547 = (i__26219__auto___35546 + (1));
i__26219__auto___35546 = G__35547;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});})(g__35467__auto___35544))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35467__auto___35544){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35467__auto___35544),args);
});})(g__35467__auto___35544))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__35467__auto___35544){
return (function (seq35511){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35511));
});})(g__35467__auto___35544))
;


var g__35467__auto___35548 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__35467__auto___35548){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35549 = arguments.length;
var i__26219__auto___35550 = (0);
while(true){
if((i__26219__auto___35550 < len__26218__auto___35549)){
args__26225__auto__.push((arguments[i__26219__auto___35550]));

var G__35551 = (i__26219__auto___35550 + (1));
i__26219__auto___35550 = G__35551;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});})(g__35467__auto___35548))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35467__auto___35548){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35467__auto___35548),args);
});})(g__35467__auto___35548))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__35467__auto___35548){
return (function (seq35512){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35512));
});})(g__35467__auto___35548))
;


var g__35467__auto___35552 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__35467__auto___35552){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35553 = arguments.length;
var i__26219__auto___35554 = (0);
while(true){
if((i__26219__auto___35554 < len__26218__auto___35553)){
args__26225__auto__.push((arguments[i__26219__auto___35554]));

var G__35555 = (i__26219__auto___35554 + (1));
i__26219__auto___35554 = G__35555;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});})(g__35467__auto___35552))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35467__auto___35552){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35467__auto___35552),args);
});})(g__35467__auto___35552))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__35467__auto___35552){
return (function (seq35513){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35513));
});})(g__35467__auto___35552))
;


var g__35467__auto___35556 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__35467__auto___35556){
return (function cljs$spec$impl$gen$elements(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35557 = arguments.length;
var i__26219__auto___35558 = (0);
while(true){
if((i__26219__auto___35558 < len__26218__auto___35557)){
args__26225__auto__.push((arguments[i__26219__auto___35558]));

var G__35559 = (i__26219__auto___35558 + (1));
i__26219__auto___35558 = G__35559;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});})(g__35467__auto___35556))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35467__auto___35556){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35467__auto___35556),args);
});})(g__35467__auto___35556))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__35467__auto___35556){
return (function (seq35514){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35514));
});})(g__35467__auto___35556))
;


var g__35467__auto___35560 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__35467__auto___35560){
return (function cljs$spec$impl$gen$bind(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35561 = arguments.length;
var i__26219__auto___35562 = (0);
while(true){
if((i__26219__auto___35562 < len__26218__auto___35561)){
args__26225__auto__.push((arguments[i__26219__auto___35562]));

var G__35563 = (i__26219__auto___35562 + (1));
i__26219__auto___35562 = G__35563;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});})(g__35467__auto___35560))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35467__auto___35560){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35467__auto___35560),args);
});})(g__35467__auto___35560))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__35467__auto___35560){
return (function (seq35515){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35515));
});})(g__35467__auto___35560))
;


var g__35467__auto___35564 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__35467__auto___35564){
return (function cljs$spec$impl$gen$choose(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35565 = arguments.length;
var i__26219__auto___35566 = (0);
while(true){
if((i__26219__auto___35566 < len__26218__auto___35565)){
args__26225__auto__.push((arguments[i__26219__auto___35566]));

var G__35567 = (i__26219__auto___35566 + (1));
i__26219__auto___35566 = G__35567;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});})(g__35467__auto___35564))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35467__auto___35564){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35467__auto___35564),args);
});})(g__35467__auto___35564))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__35467__auto___35564){
return (function (seq35516){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35516));
});})(g__35467__auto___35564))
;


var g__35467__auto___35568 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__35467__auto___35568){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35569 = arguments.length;
var i__26219__auto___35570 = (0);
while(true){
if((i__26219__auto___35570 < len__26218__auto___35569)){
args__26225__auto__.push((arguments[i__26219__auto___35570]));

var G__35571 = (i__26219__auto___35570 + (1));
i__26219__auto___35570 = G__35571;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});})(g__35467__auto___35568))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35467__auto___35568){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35467__auto___35568),args);
});})(g__35467__auto___35568))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__35467__auto___35568){
return (function (seq35517){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35517));
});})(g__35467__auto___35568))
;


var g__35467__auto___35572 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__35467__auto___35572){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35573 = arguments.length;
var i__26219__auto___35574 = (0);
while(true){
if((i__26219__auto___35574 < len__26218__auto___35573)){
args__26225__auto__.push((arguments[i__26219__auto___35574]));

var G__35575 = (i__26219__auto___35574 + (1));
i__26219__auto___35574 = G__35575;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});})(g__35467__auto___35572))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35467__auto___35572){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35467__auto___35572),args);
});})(g__35467__auto___35572))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__35467__auto___35572){
return (function (seq35518){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35518));
});})(g__35467__auto___35572))
;


var g__35467__auto___35576 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__35467__auto___35576){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35577 = arguments.length;
var i__26219__auto___35578 = (0);
while(true){
if((i__26219__auto___35578 < len__26218__auto___35577)){
args__26225__auto__.push((arguments[i__26219__auto___35578]));

var G__35579 = (i__26219__auto___35578 + (1));
i__26219__auto___35578 = G__35579;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});})(g__35467__auto___35576))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35467__auto___35576){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35467__auto___35576),args);
});})(g__35467__auto___35576))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__35467__auto___35576){
return (function (seq35519){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35519));
});})(g__35467__auto___35576))
;


var g__35467__auto___35580 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__35467__auto___35580){
return (function cljs$spec$impl$gen$sample(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35581 = arguments.length;
var i__26219__auto___35582 = (0);
while(true){
if((i__26219__auto___35582 < len__26218__auto___35581)){
args__26225__auto__.push((arguments[i__26219__auto___35582]));

var G__35583 = (i__26219__auto___35582 + (1));
i__26219__auto___35582 = G__35583;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});})(g__35467__auto___35580))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35467__auto___35580){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35467__auto___35580),args);
});})(g__35467__auto___35580))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__35467__auto___35580){
return (function (seq35520){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35520));
});})(g__35467__auto___35580))
;


var g__35467__auto___35584 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__35467__auto___35584){
return (function cljs$spec$impl$gen$return(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35585 = arguments.length;
var i__26219__auto___35586 = (0);
while(true){
if((i__26219__auto___35586 < len__26218__auto___35585)){
args__26225__auto__.push((arguments[i__26219__auto___35586]));

var G__35587 = (i__26219__auto___35586 + (1));
i__26219__auto___35586 = G__35587;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});})(g__35467__auto___35584))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35467__auto___35584){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35467__auto___35584),args);
});})(g__35467__auto___35584))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__35467__auto___35584){
return (function (seq35521){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35521));
});})(g__35467__auto___35584))
;


var g__35467__auto___35588 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__35467__auto___35588){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35589 = arguments.length;
var i__26219__auto___35590 = (0);
while(true){
if((i__26219__auto___35590 < len__26218__auto___35589)){
args__26225__auto__.push((arguments[i__26219__auto___35590]));

var G__35591 = (i__26219__auto___35590 + (1));
i__26219__auto___35590 = G__35591;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});})(g__35467__auto___35588))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35467__auto___35588){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35467__auto___35588),args);
});})(g__35467__auto___35588))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__35467__auto___35588){
return (function (seq35522){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35522));
});})(g__35467__auto___35588))
;


var g__35467__auto___35592 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__35467__auto___35592){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35593 = arguments.length;
var i__26219__auto___35594 = (0);
while(true){
if((i__26219__auto___35594 < len__26218__auto___35593)){
args__26225__auto__.push((arguments[i__26219__auto___35594]));

var G__35595 = (i__26219__auto___35594 + (1));
i__26219__auto___35594 = G__35595;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});})(g__35467__auto___35592))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35467__auto___35592){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35467__auto___35592),args);
});})(g__35467__auto___35592))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__35467__auto___35592){
return (function (seq35523){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35523));
});})(g__35467__auto___35592))
;

var g__35480__auto___35617 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__35480__auto___35617){
return (function cljs$spec$impl$gen$any(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35618 = arguments.length;
var i__26219__auto___35619 = (0);
while(true){
if((i__26219__auto___35619 < len__26218__auto___35618)){
args__26225__auto__.push((arguments[i__26219__auto___35619]));

var G__35620 = (i__26219__auto___35619 + (1));
i__26219__auto___35619 = G__35620;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});})(g__35480__auto___35617))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35480__auto___35617){
return (function (args){
return cljs.core.deref.call(null,g__35480__auto___35617);
});})(g__35480__auto___35617))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__35480__auto___35617){
return (function (seq35596){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35596));
});})(g__35480__auto___35617))
;


var g__35480__auto___35621 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__35480__auto___35621){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35622 = arguments.length;
var i__26219__auto___35623 = (0);
while(true){
if((i__26219__auto___35623 < len__26218__auto___35622)){
args__26225__auto__.push((arguments[i__26219__auto___35623]));

var G__35624 = (i__26219__auto___35623 + (1));
i__26219__auto___35623 = G__35624;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});})(g__35480__auto___35621))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35480__auto___35621){
return (function (args){
return cljs.core.deref.call(null,g__35480__auto___35621);
});})(g__35480__auto___35621))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__35480__auto___35621){
return (function (seq35597){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35597));
});})(g__35480__auto___35621))
;


var g__35480__auto___35625 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__35480__auto___35625){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35626 = arguments.length;
var i__26219__auto___35627 = (0);
while(true){
if((i__26219__auto___35627 < len__26218__auto___35626)){
args__26225__auto__.push((arguments[i__26219__auto___35627]));

var G__35628 = (i__26219__auto___35627 + (1));
i__26219__auto___35627 = G__35628;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});})(g__35480__auto___35625))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35480__auto___35625){
return (function (args){
return cljs.core.deref.call(null,g__35480__auto___35625);
});})(g__35480__auto___35625))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__35480__auto___35625){
return (function (seq35598){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35598));
});})(g__35480__auto___35625))
;


var g__35480__auto___35629 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__35480__auto___35629){
return (function cljs$spec$impl$gen$char(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35630 = arguments.length;
var i__26219__auto___35631 = (0);
while(true){
if((i__26219__auto___35631 < len__26218__auto___35630)){
args__26225__auto__.push((arguments[i__26219__auto___35631]));

var G__35632 = (i__26219__auto___35631 + (1));
i__26219__auto___35631 = G__35632;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});})(g__35480__auto___35629))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35480__auto___35629){
return (function (args){
return cljs.core.deref.call(null,g__35480__auto___35629);
});})(g__35480__auto___35629))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__35480__auto___35629){
return (function (seq35599){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35599));
});})(g__35480__auto___35629))
;


var g__35480__auto___35633 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__35480__auto___35633){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35634 = arguments.length;
var i__26219__auto___35635 = (0);
while(true){
if((i__26219__auto___35635 < len__26218__auto___35634)){
args__26225__auto__.push((arguments[i__26219__auto___35635]));

var G__35636 = (i__26219__auto___35635 + (1));
i__26219__auto___35635 = G__35636;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});})(g__35480__auto___35633))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35480__auto___35633){
return (function (args){
return cljs.core.deref.call(null,g__35480__auto___35633);
});})(g__35480__auto___35633))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__35480__auto___35633){
return (function (seq35600){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35600));
});})(g__35480__auto___35633))
;


var g__35480__auto___35637 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__35480__auto___35637){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35638 = arguments.length;
var i__26219__auto___35639 = (0);
while(true){
if((i__26219__auto___35639 < len__26218__auto___35638)){
args__26225__auto__.push((arguments[i__26219__auto___35639]));

var G__35640 = (i__26219__auto___35639 + (1));
i__26219__auto___35639 = G__35640;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});})(g__35480__auto___35637))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35480__auto___35637){
return (function (args){
return cljs.core.deref.call(null,g__35480__auto___35637);
});})(g__35480__auto___35637))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__35480__auto___35637){
return (function (seq35601){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35601));
});})(g__35480__auto___35637))
;


var g__35480__auto___35641 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__35480__auto___35641){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35642 = arguments.length;
var i__26219__auto___35643 = (0);
while(true){
if((i__26219__auto___35643 < len__26218__auto___35642)){
args__26225__auto__.push((arguments[i__26219__auto___35643]));

var G__35644 = (i__26219__auto___35643 + (1));
i__26219__auto___35643 = G__35644;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});})(g__35480__auto___35641))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35480__auto___35641){
return (function (args){
return cljs.core.deref.call(null,g__35480__auto___35641);
});})(g__35480__auto___35641))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__35480__auto___35641){
return (function (seq35602){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35602));
});})(g__35480__auto___35641))
;


var g__35480__auto___35645 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__35480__auto___35645){
return (function cljs$spec$impl$gen$double(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35646 = arguments.length;
var i__26219__auto___35647 = (0);
while(true){
if((i__26219__auto___35647 < len__26218__auto___35646)){
args__26225__auto__.push((arguments[i__26219__auto___35647]));

var G__35648 = (i__26219__auto___35647 + (1));
i__26219__auto___35647 = G__35648;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});})(g__35480__auto___35645))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35480__auto___35645){
return (function (args){
return cljs.core.deref.call(null,g__35480__auto___35645);
});})(g__35480__auto___35645))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__35480__auto___35645){
return (function (seq35603){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35603));
});})(g__35480__auto___35645))
;


var g__35480__auto___35649 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__35480__auto___35649){
return (function cljs$spec$impl$gen$int(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35650 = arguments.length;
var i__26219__auto___35651 = (0);
while(true){
if((i__26219__auto___35651 < len__26218__auto___35650)){
args__26225__auto__.push((arguments[i__26219__auto___35651]));

var G__35652 = (i__26219__auto___35651 + (1));
i__26219__auto___35651 = G__35652;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});})(g__35480__auto___35649))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35480__auto___35649){
return (function (args){
return cljs.core.deref.call(null,g__35480__auto___35649);
});})(g__35480__auto___35649))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__35480__auto___35649){
return (function (seq35604){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35604));
});})(g__35480__auto___35649))
;


var g__35480__auto___35653 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__35480__auto___35653){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35654 = arguments.length;
var i__26219__auto___35655 = (0);
while(true){
if((i__26219__auto___35655 < len__26218__auto___35654)){
args__26225__auto__.push((arguments[i__26219__auto___35655]));

var G__35656 = (i__26219__auto___35655 + (1));
i__26219__auto___35655 = G__35656;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});})(g__35480__auto___35653))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35480__auto___35653){
return (function (args){
return cljs.core.deref.call(null,g__35480__auto___35653);
});})(g__35480__auto___35653))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__35480__auto___35653){
return (function (seq35605){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35605));
});})(g__35480__auto___35653))
;


var g__35480__auto___35657 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__35480__auto___35657){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35658 = arguments.length;
var i__26219__auto___35659 = (0);
while(true){
if((i__26219__auto___35659 < len__26218__auto___35658)){
args__26225__auto__.push((arguments[i__26219__auto___35659]));

var G__35660 = (i__26219__auto___35659 + (1));
i__26219__auto___35659 = G__35660;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});})(g__35480__auto___35657))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35480__auto___35657){
return (function (args){
return cljs.core.deref.call(null,g__35480__auto___35657);
});})(g__35480__auto___35657))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__35480__auto___35657){
return (function (seq35606){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35606));
});})(g__35480__auto___35657))
;


var g__35480__auto___35661 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__35480__auto___35661){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35662 = arguments.length;
var i__26219__auto___35663 = (0);
while(true){
if((i__26219__auto___35663 < len__26218__auto___35662)){
args__26225__auto__.push((arguments[i__26219__auto___35663]));

var G__35664 = (i__26219__auto___35663 + (1));
i__26219__auto___35663 = G__35664;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});})(g__35480__auto___35661))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35480__auto___35661){
return (function (args){
return cljs.core.deref.call(null,g__35480__auto___35661);
});})(g__35480__auto___35661))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__35480__auto___35661){
return (function (seq35607){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35607));
});})(g__35480__auto___35661))
;


var g__35480__auto___35665 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__35480__auto___35665){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35666 = arguments.length;
var i__26219__auto___35667 = (0);
while(true){
if((i__26219__auto___35667 < len__26218__auto___35666)){
args__26225__auto__.push((arguments[i__26219__auto___35667]));

var G__35668 = (i__26219__auto___35667 + (1));
i__26219__auto___35667 = G__35668;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});})(g__35480__auto___35665))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35480__auto___35665){
return (function (args){
return cljs.core.deref.call(null,g__35480__auto___35665);
});})(g__35480__auto___35665))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__35480__auto___35665){
return (function (seq35608){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35608));
});})(g__35480__auto___35665))
;


var g__35480__auto___35669 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__35480__auto___35669){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35670 = arguments.length;
var i__26219__auto___35671 = (0);
while(true){
if((i__26219__auto___35671 < len__26218__auto___35670)){
args__26225__auto__.push((arguments[i__26219__auto___35671]));

var G__35672 = (i__26219__auto___35671 + (1));
i__26219__auto___35671 = G__35672;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});})(g__35480__auto___35669))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35480__auto___35669){
return (function (args){
return cljs.core.deref.call(null,g__35480__auto___35669);
});})(g__35480__auto___35669))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__35480__auto___35669){
return (function (seq35609){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35609));
});})(g__35480__auto___35669))
;


var g__35480__auto___35673 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__35480__auto___35673){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35674 = arguments.length;
var i__26219__auto___35675 = (0);
while(true){
if((i__26219__auto___35675 < len__26218__auto___35674)){
args__26225__auto__.push((arguments[i__26219__auto___35675]));

var G__35676 = (i__26219__auto___35675 + (1));
i__26219__auto___35675 = G__35676;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});})(g__35480__auto___35673))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35480__auto___35673){
return (function (args){
return cljs.core.deref.call(null,g__35480__auto___35673);
});})(g__35480__auto___35673))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__35480__auto___35673){
return (function (seq35610){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35610));
});})(g__35480__auto___35673))
;


var g__35480__auto___35677 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__35480__auto___35677){
return (function cljs$spec$impl$gen$string(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35678 = arguments.length;
var i__26219__auto___35679 = (0);
while(true){
if((i__26219__auto___35679 < len__26218__auto___35678)){
args__26225__auto__.push((arguments[i__26219__auto___35679]));

var G__35680 = (i__26219__auto___35679 + (1));
i__26219__auto___35679 = G__35680;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});})(g__35480__auto___35677))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35480__auto___35677){
return (function (args){
return cljs.core.deref.call(null,g__35480__auto___35677);
});})(g__35480__auto___35677))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__35480__auto___35677){
return (function (seq35611){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35611));
});})(g__35480__auto___35677))
;


var g__35480__auto___35681 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__35480__auto___35681){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35682 = arguments.length;
var i__26219__auto___35683 = (0);
while(true){
if((i__26219__auto___35683 < len__26218__auto___35682)){
args__26225__auto__.push((arguments[i__26219__auto___35683]));

var G__35684 = (i__26219__auto___35683 + (1));
i__26219__auto___35683 = G__35684;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});})(g__35480__auto___35681))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35480__auto___35681){
return (function (args){
return cljs.core.deref.call(null,g__35480__auto___35681);
});})(g__35480__auto___35681))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__35480__auto___35681){
return (function (seq35612){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35612));
});})(g__35480__auto___35681))
;


var g__35480__auto___35685 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__35480__auto___35685){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35686 = arguments.length;
var i__26219__auto___35687 = (0);
while(true){
if((i__26219__auto___35687 < len__26218__auto___35686)){
args__26225__auto__.push((arguments[i__26219__auto___35687]));

var G__35688 = (i__26219__auto___35687 + (1));
i__26219__auto___35687 = G__35688;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});})(g__35480__auto___35685))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35480__auto___35685){
return (function (args){
return cljs.core.deref.call(null,g__35480__auto___35685);
});})(g__35480__auto___35685))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__35480__auto___35685){
return (function (seq35613){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35613));
});})(g__35480__auto___35685))
;


var g__35480__auto___35689 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__35480__auto___35689){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35690 = arguments.length;
var i__26219__auto___35691 = (0);
while(true){
if((i__26219__auto___35691 < len__26218__auto___35690)){
args__26225__auto__.push((arguments[i__26219__auto___35691]));

var G__35692 = (i__26219__auto___35691 + (1));
i__26219__auto___35691 = G__35692;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});})(g__35480__auto___35689))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35480__auto___35689){
return (function (args){
return cljs.core.deref.call(null,g__35480__auto___35689);
});})(g__35480__auto___35689))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__35480__auto___35689){
return (function (seq35614){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35614));
});})(g__35480__auto___35689))
;


var g__35480__auto___35693 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__35480__auto___35693){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35694 = arguments.length;
var i__26219__auto___35695 = (0);
while(true){
if((i__26219__auto___35695 < len__26218__auto___35694)){
args__26225__auto__.push((arguments[i__26219__auto___35695]));

var G__35696 = (i__26219__auto___35695 + (1));
i__26219__auto___35695 = G__35696;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});})(g__35480__auto___35693))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35480__auto___35693){
return (function (args){
return cljs.core.deref.call(null,g__35480__auto___35693);
});})(g__35480__auto___35693))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__35480__auto___35693){
return (function (seq35615){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35615));
});})(g__35480__auto___35693))
;


var g__35480__auto___35697 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__35480__auto___35697){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35698 = arguments.length;
var i__26219__auto___35699 = (0);
while(true){
if((i__26219__auto___35699 < len__26218__auto___35698)){
args__26225__auto__.push((arguments[i__26219__auto___35699]));

var G__35700 = (i__26219__auto___35699 + (1));
i__26219__auto___35699 = G__35700;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});})(g__35480__auto___35697))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35480__auto___35697){
return (function (args){
return cljs.core.deref.call(null,g__35480__auto___35697);
});})(g__35480__auto___35697))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__35480__auto___35697){
return (function (seq35616){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35616));
});})(g__35480__auto___35697))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__26225__auto__ = [];
var len__26218__auto___35703 = arguments.length;
var i__26219__auto___35704 = (0);
while(true){
if((i__26219__auto___35704 < len__26218__auto___35703)){
args__26225__auto__.push((arguments[i__26219__auto___35704]));

var G__35705 = (i__26219__auto___35704 + (1));
i__26219__auto___35704 = G__35705;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__35701_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__35701_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq35702){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35702));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__35706_SHARP_){
return (new Date(p1__35706_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1489243598780