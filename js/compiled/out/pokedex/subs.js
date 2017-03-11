// Compiled by ClojureScript 1.9.229 {}
goog.provide('pokedex.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('clojure.string');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"name","name",1843675177),(function (db){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"search-term","search-term",356193544),(function (db){
return new cljs.core.Keyword(null,"search-term","search-term",356193544).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"pokemon","pokemon",1065917705),(function (db){
return new cljs.core.Keyword(null,"pokedex","pokedex",1628589120).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"pokedex-loading?","pokedex-loading?",-2079323908),(function (db){
return new cljs.core.Keyword(null,"pokedex-loading?","pokedex-loading?",-2079323908).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"pokedex-open?","pokedex-open?",747099195),(function (db){
return new cljs.core.Keyword(null,"pokedex-open?","pokedex-open?",747099195).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"active-pokemon","active-pokemon",893243827),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pokemon","pokemon",1065917705)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pokedex-open?","pokedex-open?",747099195)], null),(function (p__28048,_){
var vec__28049 = p__28048;
var pokemon = cljs.core.nth.call(null,vec__28049,(0),null);
var pokedex_open_QMARK_ = cljs.core.nth.call(null,vec__28049,(1),null);
if((pokedex_open_QMARK_ > (-1))){
return cljs.core.nth.call(null,pokemon,pokedex_open_QMARK_);
} else {
return false;
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"matching-pokemon","matching-pokemon",1863005176),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pokemon","pokemon",1065917705)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-term","search-term",356193544)], null),(function (p__28053,_){
var vec__28054 = p__28053;
var pokemon = cljs.core.nth.call(null,vec__28054,(0),null);
var search_term = cljs.core.nth.call(null,vec__28054,(1),null);
return cljs.core.filter.call(null,((function (vec__28054,pokemon,search_term){
return (function (p1__28052_SHARP_){
return clojure.string.includes_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pokemon_species","pokemon_species",-1795714329).cljs$core$IFn$_invoke$arity$1(p1__28052_SHARP_)),search_term);
});})(vec__28054,pokemon,search_term))
,pokemon);
}));

//# sourceMappingURL=subs.js.map?rel=1489243585648