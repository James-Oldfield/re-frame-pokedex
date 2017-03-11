// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36742){
var map__36767 = p__36742;
var map__36767__$1 = ((((!((map__36767 == null)))?((((map__36767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36767):map__36767);
var m = map__36767__$1;
var n = cljs.core.get.call(null,map__36767__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36767__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36769_36791 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36770_36792 = null;
var count__36771_36793 = (0);
var i__36772_36794 = (0);
while(true){
if((i__36772_36794 < count__36771_36793)){
var f_36795 = cljs.core._nth.call(null,chunk__36770_36792,i__36772_36794);
cljs.core.println.call(null,"  ",f_36795);

var G__36796 = seq__36769_36791;
var G__36797 = chunk__36770_36792;
var G__36798 = count__36771_36793;
var G__36799 = (i__36772_36794 + (1));
seq__36769_36791 = G__36796;
chunk__36770_36792 = G__36797;
count__36771_36793 = G__36798;
i__36772_36794 = G__36799;
continue;
} else {
var temp__4657__auto___36800 = cljs.core.seq.call(null,seq__36769_36791);
if(temp__4657__auto___36800){
var seq__36769_36801__$1 = temp__4657__auto___36800;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36769_36801__$1)){
var c__25954__auto___36802 = cljs.core.chunk_first.call(null,seq__36769_36801__$1);
var G__36803 = cljs.core.chunk_rest.call(null,seq__36769_36801__$1);
var G__36804 = c__25954__auto___36802;
var G__36805 = cljs.core.count.call(null,c__25954__auto___36802);
var G__36806 = (0);
seq__36769_36791 = G__36803;
chunk__36770_36792 = G__36804;
count__36771_36793 = G__36805;
i__36772_36794 = G__36806;
continue;
} else {
var f_36807 = cljs.core.first.call(null,seq__36769_36801__$1);
cljs.core.println.call(null,"  ",f_36807);

var G__36808 = cljs.core.next.call(null,seq__36769_36801__$1);
var G__36809 = null;
var G__36810 = (0);
var G__36811 = (0);
seq__36769_36791 = G__36808;
chunk__36770_36792 = G__36809;
count__36771_36793 = G__36810;
i__36772_36794 = G__36811;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36812 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25143__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25143__auto__)){
return or__25143__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36812);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36812)))?cljs.core.second.call(null,arglists_36812):arglists_36812));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36773_36813 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36774_36814 = null;
var count__36775_36815 = (0);
var i__36776_36816 = (0);
while(true){
if((i__36776_36816 < count__36775_36815)){
var vec__36777_36817 = cljs.core._nth.call(null,chunk__36774_36814,i__36776_36816);
var name_36818 = cljs.core.nth.call(null,vec__36777_36817,(0),null);
var map__36780_36819 = cljs.core.nth.call(null,vec__36777_36817,(1),null);
var map__36780_36820__$1 = ((((!((map__36780_36819 == null)))?((((map__36780_36819.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36780_36819.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36780_36819):map__36780_36819);
var doc_36821 = cljs.core.get.call(null,map__36780_36820__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36822 = cljs.core.get.call(null,map__36780_36820__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36818);

cljs.core.println.call(null," ",arglists_36822);

if(cljs.core.truth_(doc_36821)){
cljs.core.println.call(null," ",doc_36821);
} else {
}

var G__36823 = seq__36773_36813;
var G__36824 = chunk__36774_36814;
var G__36825 = count__36775_36815;
var G__36826 = (i__36776_36816 + (1));
seq__36773_36813 = G__36823;
chunk__36774_36814 = G__36824;
count__36775_36815 = G__36825;
i__36776_36816 = G__36826;
continue;
} else {
var temp__4657__auto___36827 = cljs.core.seq.call(null,seq__36773_36813);
if(temp__4657__auto___36827){
var seq__36773_36828__$1 = temp__4657__auto___36827;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36773_36828__$1)){
var c__25954__auto___36829 = cljs.core.chunk_first.call(null,seq__36773_36828__$1);
var G__36830 = cljs.core.chunk_rest.call(null,seq__36773_36828__$1);
var G__36831 = c__25954__auto___36829;
var G__36832 = cljs.core.count.call(null,c__25954__auto___36829);
var G__36833 = (0);
seq__36773_36813 = G__36830;
chunk__36774_36814 = G__36831;
count__36775_36815 = G__36832;
i__36776_36816 = G__36833;
continue;
} else {
var vec__36782_36834 = cljs.core.first.call(null,seq__36773_36828__$1);
var name_36835 = cljs.core.nth.call(null,vec__36782_36834,(0),null);
var map__36785_36836 = cljs.core.nth.call(null,vec__36782_36834,(1),null);
var map__36785_36837__$1 = ((((!((map__36785_36836 == null)))?((((map__36785_36836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36785_36836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36785_36836):map__36785_36836);
var doc_36838 = cljs.core.get.call(null,map__36785_36837__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36839 = cljs.core.get.call(null,map__36785_36837__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36835);

cljs.core.println.call(null," ",arglists_36839);

if(cljs.core.truth_(doc_36838)){
cljs.core.println.call(null," ",doc_36838);
} else {
}

var G__36840 = cljs.core.next.call(null,seq__36773_36828__$1);
var G__36841 = null;
var G__36842 = (0);
var G__36843 = (0);
seq__36773_36813 = G__36840;
chunk__36774_36814 = G__36841;
count__36775_36815 = G__36842;
i__36776_36816 = G__36843;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__36787 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36788 = null;
var count__36789 = (0);
var i__36790 = (0);
while(true){
if((i__36790 < count__36789)){
var role = cljs.core._nth.call(null,chunk__36788,i__36790);
var temp__4657__auto___36844__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36844__$1)){
var spec_36845 = temp__4657__auto___36844__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36845));
} else {
}

var G__36846 = seq__36787;
var G__36847 = chunk__36788;
var G__36848 = count__36789;
var G__36849 = (i__36790 + (1));
seq__36787 = G__36846;
chunk__36788 = G__36847;
count__36789 = G__36848;
i__36790 = G__36849;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36787);
if(temp__4657__auto____$1){
var seq__36787__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36787__$1)){
var c__25954__auto__ = cljs.core.chunk_first.call(null,seq__36787__$1);
var G__36850 = cljs.core.chunk_rest.call(null,seq__36787__$1);
var G__36851 = c__25954__auto__;
var G__36852 = cljs.core.count.call(null,c__25954__auto__);
var G__36853 = (0);
seq__36787 = G__36850;
chunk__36788 = G__36851;
count__36789 = G__36852;
i__36790 = G__36853;
continue;
} else {
var role = cljs.core.first.call(null,seq__36787__$1);
var temp__4657__auto___36854__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36854__$2)){
var spec_36855 = temp__4657__auto___36854__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36855));
} else {
}

var G__36856 = cljs.core.next.call(null,seq__36787__$1);
var G__36857 = null;
var G__36858 = (0);
var G__36859 = (0);
seq__36787 = G__36856;
chunk__36788 = G__36857;
count__36789 = G__36858;
i__36790 = G__36859;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1489243601243