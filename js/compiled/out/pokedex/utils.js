// Compiled by ClojureScript 1.9.229 {}
goog.provide('pokedex.utils');
goog.require('cljs.core');
goog.require('clojure.string');
pokedex.utils.create_class = (function pokedex$utils$create_class(var_args){
var args28059 = [];
var len__26218__auto___28062 = arguments.length;
var i__26219__auto___28063 = (0);
while(true){
if((i__26219__auto___28063 < len__26218__auto___28062)){
args28059.push((arguments[i__26219__auto___28063]));

var G__28064 = (i__26219__auto___28063 + (1));
i__26219__auto___28063 = G__28064;
continue;
} else {
}
break;
}

var G__28061 = args28059.length;
switch (G__28061) {
case 2:
return pokedex.utils.create_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return pokedex.utils.create_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28059.length)].join('')));

}
});

pokedex.utils.create_class.cljs$core$IFn$_invoke$arity$2 = (function (coll,just_value_flag){
return clojure.string.join.call(null," ",coll);
});

pokedex.utils.create_class.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),pokedex.utils.create_class.call(null,coll,true)], null);
});

pokedex.utils.create_class.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=utils.js.map?rel=1489243585673