// Compiled by ClojureScript 1.9.229 {}
goog.provide('pokedex.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('pokedex.utils');
pokedex.views.search_input = (function pokedex$views$search_input(p__28069){
var map__28072 = p__28069;
var map__28072__$1 = ((((!((map__28072 == null)))?((((map__28072.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28072.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28072):map__28072);
var search_term = cljs.core.get.call(null,map__28072__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));
return ((function (map__28072,map__28072__$1,search_term){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),pokedex.utils.create_class.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["input-group",null], null), null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"search",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,search_term),new cljs.core.Keyword(null,"class","class",-2030961996),pokedex.utils.create_class.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["form-control",null], null), null),true),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"enter pokemon here...",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__28072,map__28072__$1,search_term){
return (function (p1__28068_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-search-term","update-search-term",-1725569553),p1__28068_SHARP_.target.value], null));
});})(map__28072,map__28072__$1,search_term))
], null)], null)], null);
});
;})(map__28072,map__28072__$1,search_term))
});
pokedex.views.matching_pokemon_item = (function pokedex$views$matching_pokemon_item(p__28074){
var map__28077 = p__28074;
var map__28077__$1 = ((((!((map__28077 == null)))?((((map__28077.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28077.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28077):map__28077);
var entry_number = cljs.core.get.call(null,map__28077__$1,new cljs.core.Keyword(null,"entry_number","entry_number",1787661537));
var pokemon_species = cljs.core.get.call(null,map__28077__$1,new cljs.core.Keyword(null,"pokemon_species","pokemon_species",-1795714329));
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(pokemon_species);
var url = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(pokemon_species);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),pokedex.utils.create_class.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["list-group-item",null,"list-group-item-action",null,"justify-content-between",null], null), null),true),new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (name,url,map__28077,map__28077__$1,entry_number,pokemon_species){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-pokemon","get-pokemon",928515149),url], null));
});})(name,url,map__28077,map__28077__$1,entry_number,pokemon_species))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),pokedex.utils.create_class.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["text-white",null,"badge-pill",null,"badge-default",null,"badge",null], null), null)),[cljs.core.str("#"),cljs.core.str(entry_number),cljs.core.str(" ")].join('')], null)], null);
});
pokedex.views.matching_pokemon_wrapper = (function pokedex$views$matching_pokemon_wrapper(p__28079){
var map__28082 = p__28079;
var map__28082__$1 = ((((!((map__28082 == null)))?((((map__28082.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28082.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28082):map__28082);
var matching_pokemon = cljs.core.get.call(null,map__28082__$1,new cljs.core.Keyword(null,"matching-pokemon","matching-pokemon",1863005176));
return ((function (map__28082,map__28082__$1,matching_pokemon){
return (function (){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,matching_pokemon))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"none found"], null);
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",-1445267512)], null),cljs.core.map.call(null,pokedex.views.matching_pokemon_item,cljs.core.deref.call(null,matching_pokemon)));
}
});
;})(map__28082,map__28082__$1,matching_pokemon))
});
pokedex.views.pokemon_modal = (function pokedex$views$pokemon_modal(p__28084){
var map__28087 = p__28084;
var map__28087__$1 = ((((!((map__28087 == null)))?((((map__28087.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28087.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28087):map__28087);
var name = cljs.core.get.call(null,map__28087__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__28087__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return ((function (map__28087,map__28087__$1,name,description){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),pokedex.utils.create_class.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["modal",null], null), null),true),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__28087,map__28087__$1,name,description){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985)], null));
});})(map__28087,map__28087__$1,name,description))
,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438)],["center","white","center","rgba(12, 12, 12, 0.75)","pointer","10%","center","flex","column"])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),description], null)], null);
});
;})(map__28087,map__28087__$1,name,description))
});
pokedex.views.main_panel = (function pokedex$views$main_panel(){
var search_term = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-term","search-term",356193544)], null));
var loading_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pokedex-loading?","pokedex-loading?",-2079323908)], null));
var active_pokemon = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-pokemon","active-pokemon",893243827)], null));
var matching_pokemon = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matching-pokemon","matching-pokemon",1863005176)], null));
return ((function (search_term,loading_QMARK_,active_pokemon,matching_pokemon){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),pokedex.utils.create_class.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["container",null], null), null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"re-frame pokedex"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pokedex.views.search_input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-term","search-term",356193544),search_term], null)], null),(cljs.core.truth_(cljs.core.deref.call(null,active_pokemon))?(function (){var map__28091 = new cljs.core.Keyword(null,"pokemon_species","pokemon_species",-1795714329).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_pokemon));
var map__28091__$1 = ((((!((map__28091 == null)))?((((map__28091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28091):map__28091);
var name = cljs.core.get.call(null,map__28091__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__28091__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pokedex.views.pokemon_modal,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"description","description",-1428560544),description], null)], null);
})():null),(cljs.core.truth_(cljs.core.deref.call(null,loading_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"pokemon loading..."], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pokedex.views.matching_pokemon_wrapper,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"matching-pokemon","matching-pokemon",1863005176),matching_pokemon], null)], null))], null);
});
;})(search_term,loading_QMARK_,active_pokemon,matching_pokemon))
});

//# sourceMappingURL=views.js.map?rel=1489243585741