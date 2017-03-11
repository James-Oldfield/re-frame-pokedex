// Compiled by ClojureScript 1.9.229 {}
goog.provide('pokedex.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('day8.re_frame.http_fx');
goog.require('pokedex.db');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return pokedex.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-search-term","update-search-term",-1725569553),(function (db,p__28817){
var vec__28818 = p__28817;
var _ = cljs.core.nth.call(null,vec__28818,(0),null);
var new_search_term = cljs.core.nth.call(null,vec__28818,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"search-term","search-term",356193544),new_search_term);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"pokedex-open?","pokedex-open?",747099195),(-1));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"get-pokemon","get-pokemon",928515149),(function (p__28821,p__28822){
var map__28823 = p__28821;
var map__28823__$1 = ((((!((map__28823 == null)))?((((map__28823.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28823.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28823):map__28823);
var db = cljs.core.get.call(null,map__28823__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28824 = p__28822;
var _ = cljs.core.nth.call(null,vec__28824,(0),null);
var url = cljs.core.nth.call(null,vec__28824,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"pokedex-loading?","pokedex-loading?",-2079323908),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),url,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle-pokemon-success","handle-pokemon-success",-915062653)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle-pokemon-error","handle-pokemon-error",-102521063)], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"handle-pokemon-success","handle-pokemon-success",-915062653),(function (db,p__28828){
var vec__28829 = p__28828;
var _ = cljs.core.nth.call(null,vec__28829,(0),null);
var response = cljs.core.nth.call(null,vec__28829,(1),null);
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(response);
var index = (new cljs.core.Keyword(null,"entry_number","entry_number",1787661537).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,new cljs.core.Keyword(null,"pokedex_numbers","pokedex_numbers",723091347).cljs$core$IFn$_invoke$arity$1(response))) - (1));
var description = new cljs.core.Keyword(null,"flavor_text","flavor_text",-1554143621).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,new cljs.core.Keyword(null,"flavor_text_entries","flavor_text_entries",-826674966).cljs$core$IFn$_invoke$arity$1(response),(1)));
var _db = cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pokedex","pokedex",1628589120),index,new cljs.core.Keyword(null,"pokemon_species","pokemon_species",-1795714329),new cljs.core.Keyword(null,"description","description",-1428560544)], null),description);
return cljs.core.assoc.call(null,_db,new cljs.core.Keyword(null,"pokedex-loading?","pokedex-loading?",-2079323908),false,new cljs.core.Keyword(null,"pokedex-failed?","pokedex-failed?",-1718382153),false,new cljs.core.Keyword(null,"pokedex-open?","pokedex-open?",747099195),index);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"handle-pokemon-error","handle-pokemon-error",-102521063),(function (db,p__28832){
var vec__28833 = p__28832;
var _ = cljs.core.nth.call(null,vec__28833,(0),null);
var response = cljs.core.nth.call(null,vec__28833,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"pokedex-loading?","pokedex-loading?",-2079323908),false,new cljs.core.Keyword(null,"pokedex-loading-failed?","pokedex-loading-failed?",158701449),true);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"get-pokedex","get-pokedex",-499579896),(function (p__28836,_){
var map__28837 = p__28836;
var map__28837__$1 = ((((!((map__28837 == null)))?((((map__28837.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28837.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28837):map__28837);
var db = cljs.core.get.call(null,map__28837__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"pokedex-loading?","pokedex-loading?",-2079323908),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://pokeapi.co/api/v2/pokedex/2/",new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle-pokedex-success","handle-pokedex-success",-754246832)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle-pokedex-error","handle-pokedex-error",1066716699)], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"handle-pokedex-success","handle-pokedex-success",-754246832),(function (db,p__28839){
var vec__28840 = p__28839;
var _ = cljs.core.nth.call(null,vec__28840,(0),null);
var response = cljs.core.nth.call(null,vec__28840,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"pokedex-loading?","pokedex-loading?",-2079323908),false,new cljs.core.Keyword(null,"pokedex-failed?","pokedex-failed?",-1718382153),false,new cljs.core.Keyword(null,"pokedex","pokedex",1628589120),new cljs.core.Keyword(null,"pokemon_entries","pokemon_entries",577306361).cljs$core$IFn$_invoke$arity$1(response));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"handle-pokedex-error","handle-pokedex-error",1066716699),(function (db,p__28843){
var vec__28844 = p__28843;
var _ = cljs.core.nth.call(null,vec__28844,(0),null);
var response = cljs.core.nth.call(null,vec__28844,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"pokedex-loading?","pokedex-loading?",-2079323908),false,new cljs.core.Keyword(null,"pokedex-loading-failed?","pokedex-loading-failed?",158701449),true);
}));

//# sourceMappingURL=events.js.map?rel=1489243587828