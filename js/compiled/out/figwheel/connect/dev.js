// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('pokedex.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__38020__delegate = function (x){
if(cljs.core.truth_(pokedex.core.mount_root)){
return cljs.core.apply.call(null,pokedex.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'pokedex.core/mount-root' is missing");
}
};
var G__38020 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__38021__i = 0, G__38021__a = new Array(arguments.length -  0);
while (G__38021__i < G__38021__a.length) {G__38021__a[G__38021__i] = arguments[G__38021__i + 0]; ++G__38021__i;}
  x = new cljs.core.IndexedSeq(G__38021__a,0);
} 
return G__38020__delegate.call(this,x);};
G__38020.cljs$lang$maxFixedArity = 0;
G__38020.cljs$lang$applyTo = (function (arglist__38022){
var x = cljs.core.seq(arglist__38022);
return G__38020__delegate(x);
});
G__38020.cljs$core$IFn$_invoke$arity$variadic = G__38020__delegate;
return G__38020;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=dev.js.map?rel=1489243602596