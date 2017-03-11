// Compiled by ClojureScript 1.9.229 {}
goog.provide('pokedex.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('pokedex.views');
goog.require('pokedex.subs');
goog.require('pokedex.config');
goog.require('pokedex.events');
goog.require('re_frame.core');
pokedex.core.dev_setup = (function pokedex$core$dev_setup(){
if(cljs.core.truth_(pokedex.config.debug_QMARK_)){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
pokedex.core.mount_root = (function pokedex$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pokedex.views.main_panel], null),document.getElementById("app"));
});
pokedex.core.init = (function pokedex$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-pokedex","get-pokedex",-499579896)], null));

pokedex.core.dev_setup.call(null);

return pokedex.core.mount_root.call(null);
});
goog.exportSymbol('pokedex.core.init', pokedex.core.init);

//# sourceMappingURL=core.js.map?rel=1489243587880