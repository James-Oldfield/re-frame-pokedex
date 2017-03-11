// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.async.Deferred');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__25143__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25143__auto__){
return or__25143__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__25143__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25143__auto__)){
return or__25143__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34425_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34425_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__34430 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34431 = null;
var count__34432 = (0);
var i__34433 = (0);
while(true){
if((i__34433 < count__34432)){
var n = cljs.core._nth.call(null,chunk__34431,i__34433);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34434 = seq__34430;
var G__34435 = chunk__34431;
var G__34436 = count__34432;
var G__34437 = (i__34433 + (1));
seq__34430 = G__34434;
chunk__34431 = G__34435;
count__34432 = G__34436;
i__34433 = G__34437;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34430);
if(temp__4657__auto__){
var seq__34430__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34430__$1)){
var c__25954__auto__ = cljs.core.chunk_first.call(null,seq__34430__$1);
var G__34438 = cljs.core.chunk_rest.call(null,seq__34430__$1);
var G__34439 = c__25954__auto__;
var G__34440 = cljs.core.count.call(null,c__25954__auto__);
var G__34441 = (0);
seq__34430 = G__34438;
chunk__34431 = G__34439;
count__34432 = G__34440;
i__34433 = G__34441;
continue;
} else {
var n = cljs.core.first.call(null,seq__34430__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34442 = cljs.core.next.call(null,seq__34430__$1);
var G__34443 = null;
var G__34444 = (0);
var G__34445 = (0);
seq__34430 = G__34442;
chunk__34431 = G__34443;
count__34432 = G__34444;
i__34433 = G__34445;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__34496_34507 = cljs.core.seq.call(null,deps);
var chunk__34497_34508 = null;
var count__34498_34509 = (0);
var i__34499_34510 = (0);
while(true){
if((i__34499_34510 < count__34498_34509)){
var dep_34511 = cljs.core._nth.call(null,chunk__34497_34508,i__34499_34510);
topo_sort_helper_STAR_.call(null,dep_34511,(depth + (1)),state);

var G__34512 = seq__34496_34507;
var G__34513 = chunk__34497_34508;
var G__34514 = count__34498_34509;
var G__34515 = (i__34499_34510 + (1));
seq__34496_34507 = G__34512;
chunk__34497_34508 = G__34513;
count__34498_34509 = G__34514;
i__34499_34510 = G__34515;
continue;
} else {
var temp__4657__auto___34516 = cljs.core.seq.call(null,seq__34496_34507);
if(temp__4657__auto___34516){
var seq__34496_34517__$1 = temp__4657__auto___34516;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34496_34517__$1)){
var c__25954__auto___34518 = cljs.core.chunk_first.call(null,seq__34496_34517__$1);
var G__34519 = cljs.core.chunk_rest.call(null,seq__34496_34517__$1);
var G__34520 = c__25954__auto___34518;
var G__34521 = cljs.core.count.call(null,c__25954__auto___34518);
var G__34522 = (0);
seq__34496_34507 = G__34519;
chunk__34497_34508 = G__34520;
count__34498_34509 = G__34521;
i__34499_34510 = G__34522;
continue;
} else {
var dep_34523 = cljs.core.first.call(null,seq__34496_34517__$1);
topo_sort_helper_STAR_.call(null,dep_34523,(depth + (1)),state);

var G__34524 = cljs.core.next.call(null,seq__34496_34517__$1);
var G__34525 = null;
var G__34526 = (0);
var G__34527 = (0);
seq__34496_34507 = G__34524;
chunk__34497_34508 = G__34525;
count__34498_34509 = G__34526;
i__34499_34510 = G__34527;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34500){
var vec__34504 = p__34500;
var seq__34505 = cljs.core.seq.call(null,vec__34504);
var first__34506 = cljs.core.first.call(null,seq__34505);
var seq__34505__$1 = cljs.core.next.call(null,seq__34505);
var x = first__34506;
var xs = seq__34505__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34504,seq__34505,first__34506,seq__34505__$1,x,xs,get_deps__$1){
return (function (p1__34446_SHARP_){
return clojure.set.difference.call(null,p1__34446_SHARP_,x);
});})(vec__34504,seq__34505,first__34506,seq__34505__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__34540 = cljs.core.seq.call(null,provides);
var chunk__34541 = null;
var count__34542 = (0);
var i__34543 = (0);
while(true){
if((i__34543 < count__34542)){
var prov = cljs.core._nth.call(null,chunk__34541,i__34543);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34544_34552 = cljs.core.seq.call(null,requires);
var chunk__34545_34553 = null;
var count__34546_34554 = (0);
var i__34547_34555 = (0);
while(true){
if((i__34547_34555 < count__34546_34554)){
var req_34556 = cljs.core._nth.call(null,chunk__34545_34553,i__34547_34555);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34556,prov);

var G__34557 = seq__34544_34552;
var G__34558 = chunk__34545_34553;
var G__34559 = count__34546_34554;
var G__34560 = (i__34547_34555 + (1));
seq__34544_34552 = G__34557;
chunk__34545_34553 = G__34558;
count__34546_34554 = G__34559;
i__34547_34555 = G__34560;
continue;
} else {
var temp__4657__auto___34561 = cljs.core.seq.call(null,seq__34544_34552);
if(temp__4657__auto___34561){
var seq__34544_34562__$1 = temp__4657__auto___34561;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34544_34562__$1)){
var c__25954__auto___34563 = cljs.core.chunk_first.call(null,seq__34544_34562__$1);
var G__34564 = cljs.core.chunk_rest.call(null,seq__34544_34562__$1);
var G__34565 = c__25954__auto___34563;
var G__34566 = cljs.core.count.call(null,c__25954__auto___34563);
var G__34567 = (0);
seq__34544_34552 = G__34564;
chunk__34545_34553 = G__34565;
count__34546_34554 = G__34566;
i__34547_34555 = G__34567;
continue;
} else {
var req_34568 = cljs.core.first.call(null,seq__34544_34562__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34568,prov);

var G__34569 = cljs.core.next.call(null,seq__34544_34562__$1);
var G__34570 = null;
var G__34571 = (0);
var G__34572 = (0);
seq__34544_34552 = G__34569;
chunk__34545_34553 = G__34570;
count__34546_34554 = G__34571;
i__34547_34555 = G__34572;
continue;
}
} else {
}
}
break;
}

var G__34573 = seq__34540;
var G__34574 = chunk__34541;
var G__34575 = count__34542;
var G__34576 = (i__34543 + (1));
seq__34540 = G__34573;
chunk__34541 = G__34574;
count__34542 = G__34575;
i__34543 = G__34576;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34540);
if(temp__4657__auto__){
var seq__34540__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34540__$1)){
var c__25954__auto__ = cljs.core.chunk_first.call(null,seq__34540__$1);
var G__34577 = cljs.core.chunk_rest.call(null,seq__34540__$1);
var G__34578 = c__25954__auto__;
var G__34579 = cljs.core.count.call(null,c__25954__auto__);
var G__34580 = (0);
seq__34540 = G__34577;
chunk__34541 = G__34578;
count__34542 = G__34579;
i__34543 = G__34580;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34540__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34548_34581 = cljs.core.seq.call(null,requires);
var chunk__34549_34582 = null;
var count__34550_34583 = (0);
var i__34551_34584 = (0);
while(true){
if((i__34551_34584 < count__34550_34583)){
var req_34585 = cljs.core._nth.call(null,chunk__34549_34582,i__34551_34584);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34585,prov);

var G__34586 = seq__34548_34581;
var G__34587 = chunk__34549_34582;
var G__34588 = count__34550_34583;
var G__34589 = (i__34551_34584 + (1));
seq__34548_34581 = G__34586;
chunk__34549_34582 = G__34587;
count__34550_34583 = G__34588;
i__34551_34584 = G__34589;
continue;
} else {
var temp__4657__auto___34590__$1 = cljs.core.seq.call(null,seq__34548_34581);
if(temp__4657__auto___34590__$1){
var seq__34548_34591__$1 = temp__4657__auto___34590__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34548_34591__$1)){
var c__25954__auto___34592 = cljs.core.chunk_first.call(null,seq__34548_34591__$1);
var G__34593 = cljs.core.chunk_rest.call(null,seq__34548_34591__$1);
var G__34594 = c__25954__auto___34592;
var G__34595 = cljs.core.count.call(null,c__25954__auto___34592);
var G__34596 = (0);
seq__34548_34581 = G__34593;
chunk__34549_34582 = G__34594;
count__34550_34583 = G__34595;
i__34551_34584 = G__34596;
continue;
} else {
var req_34597 = cljs.core.first.call(null,seq__34548_34591__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34597,prov);

var G__34598 = cljs.core.next.call(null,seq__34548_34591__$1);
var G__34599 = null;
var G__34600 = (0);
var G__34601 = (0);
seq__34548_34581 = G__34598;
chunk__34549_34582 = G__34599;
count__34550_34583 = G__34600;
i__34551_34584 = G__34601;
continue;
}
} else {
}
}
break;
}

var G__34602 = cljs.core.next.call(null,seq__34540__$1);
var G__34603 = null;
var G__34604 = (0);
var G__34605 = (0);
seq__34540 = G__34602;
chunk__34541 = G__34603;
count__34542 = G__34604;
i__34543 = G__34605;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__34610_34614 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34611_34615 = null;
var count__34612_34616 = (0);
var i__34613_34617 = (0);
while(true){
if((i__34613_34617 < count__34612_34616)){
var ns_34618 = cljs.core._nth.call(null,chunk__34611_34615,i__34613_34617);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34618);

var G__34619 = seq__34610_34614;
var G__34620 = chunk__34611_34615;
var G__34621 = count__34612_34616;
var G__34622 = (i__34613_34617 + (1));
seq__34610_34614 = G__34619;
chunk__34611_34615 = G__34620;
count__34612_34616 = G__34621;
i__34613_34617 = G__34622;
continue;
} else {
var temp__4657__auto___34623 = cljs.core.seq.call(null,seq__34610_34614);
if(temp__4657__auto___34623){
var seq__34610_34624__$1 = temp__4657__auto___34623;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34610_34624__$1)){
var c__25954__auto___34625 = cljs.core.chunk_first.call(null,seq__34610_34624__$1);
var G__34626 = cljs.core.chunk_rest.call(null,seq__34610_34624__$1);
var G__34627 = c__25954__auto___34625;
var G__34628 = cljs.core.count.call(null,c__25954__auto___34625);
var G__34629 = (0);
seq__34610_34614 = G__34626;
chunk__34611_34615 = G__34627;
count__34612_34616 = G__34628;
i__34613_34617 = G__34629;
continue;
} else {
var ns_34630 = cljs.core.first.call(null,seq__34610_34624__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34630);

var G__34631 = cljs.core.next.call(null,seq__34610_34624__$1);
var G__34632 = null;
var G__34633 = (0);
var G__34634 = (0);
seq__34610_34614 = G__34631;
chunk__34611_34615 = G__34632;
count__34612_34616 = G__34633;
i__34613_34617 = G__34634;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__25143__auto__ = goog.require__;
if(cljs.core.truth_(or__25143__auto__)){
return or__25143__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__34635__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34635 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34636__i = 0, G__34636__a = new Array(arguments.length -  0);
while (G__34636__i < G__34636__a.length) {G__34636__a[G__34636__i] = arguments[G__34636__i + 0]; ++G__34636__i;}
  args = new cljs.core.IndexedSeq(G__34636__a,0);
} 
return G__34635__delegate.call(this,args);};
G__34635.cljs$lang$maxFixedArity = 0;
G__34635.cljs$lang$applyTo = (function (arglist__34637){
var args = cljs.core.seq(arglist__34637);
return G__34635__delegate(args);
});
G__34635.cljs$core$IFn$_invoke$arity$variadic = G__34635__delegate;
return G__34635;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34638 = cljs.core._EQ_;
var expr__34639 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34638.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34639))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__34638,expr__34639){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__34638,expr__34639))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__34638,expr__34639){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34641){if((e34641 instanceof Error)){
var e = e34641;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34641;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__34638,expr__34639))
} else {
if(cljs.core.truth_(pred__34638.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34639))){
return ((function (pred__34638,expr__34639){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__34638,expr__34639){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__34638,expr__34639))
);

return deferred.addErrback(((function (deferred,pred__34638,expr__34639){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__34638,expr__34639))
);
});
;})(pred__34638,expr__34639))
} else {
if(cljs.core.truth_(pred__34638.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34639))){
return ((function (pred__34638,expr__34639){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34642){if((e34642 instanceof Error)){
var e = e34642;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34642;

}
}})());
});
;})(pred__34638,expr__34639))
} else {
return ((function (pred__34638,expr__34639){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34638,expr__34639))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34643,callback){
var map__34646 = p__34643;
var map__34646__$1 = ((((!((map__34646 == null)))?((((map__34646.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34646.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34646):map__34646);
var file_msg = map__34646__$1;
var request_url = cljs.core.get.call(null,map__34646__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34646,map__34646__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34646,map__34646__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__29843__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29843__auto__){
return (function (){
var f__29844__auto__ = (function (){var switch__29731__auto__ = ((function (c__29843__auto__){
return (function (state_34670){
var state_val_34671 = (state_34670[(1)]);
if((state_val_34671 === (7))){
var inst_34666 = (state_34670[(2)]);
var state_34670__$1 = state_34670;
var statearr_34672_34692 = state_34670__$1;
(statearr_34672_34692[(2)] = inst_34666);

(statearr_34672_34692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34671 === (1))){
var state_34670__$1 = state_34670;
var statearr_34673_34693 = state_34670__$1;
(statearr_34673_34693[(2)] = null);

(statearr_34673_34693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34671 === (4))){
var inst_34650 = (state_34670[(7)]);
var inst_34650__$1 = (state_34670[(2)]);
var state_34670__$1 = (function (){var statearr_34674 = state_34670;
(statearr_34674[(7)] = inst_34650__$1);

return statearr_34674;
})();
if(cljs.core.truth_(inst_34650__$1)){
var statearr_34675_34694 = state_34670__$1;
(statearr_34675_34694[(1)] = (5));

} else {
var statearr_34676_34695 = state_34670__$1;
(statearr_34676_34695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34671 === (6))){
var state_34670__$1 = state_34670;
var statearr_34677_34696 = state_34670__$1;
(statearr_34677_34696[(2)] = null);

(statearr_34677_34696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34671 === (3))){
var inst_34668 = (state_34670[(2)]);
var state_34670__$1 = state_34670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34670__$1,inst_34668);
} else {
if((state_val_34671 === (2))){
var state_34670__$1 = state_34670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34670__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34671 === (11))){
var inst_34662 = (state_34670[(2)]);
var state_34670__$1 = (function (){var statearr_34678 = state_34670;
(statearr_34678[(8)] = inst_34662);

return statearr_34678;
})();
var statearr_34679_34697 = state_34670__$1;
(statearr_34679_34697[(2)] = null);

(statearr_34679_34697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34671 === (9))){
var inst_34654 = (state_34670[(9)]);
var inst_34656 = (state_34670[(10)]);
var inst_34658 = inst_34656.call(null,inst_34654);
var state_34670__$1 = state_34670;
var statearr_34680_34698 = state_34670__$1;
(statearr_34680_34698[(2)] = inst_34658);

(statearr_34680_34698[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34671 === (5))){
var inst_34650 = (state_34670[(7)]);
var inst_34652 = figwheel.client.file_reloading.blocking_load.call(null,inst_34650);
var state_34670__$1 = state_34670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34670__$1,(8),inst_34652);
} else {
if((state_val_34671 === (10))){
var inst_34654 = (state_34670[(9)]);
var inst_34660 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34654);
var state_34670__$1 = state_34670;
var statearr_34681_34699 = state_34670__$1;
(statearr_34681_34699[(2)] = inst_34660);

(statearr_34681_34699[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34671 === (8))){
var inst_34650 = (state_34670[(7)]);
var inst_34656 = (state_34670[(10)]);
var inst_34654 = (state_34670[(2)]);
var inst_34655 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34656__$1 = cljs.core.get.call(null,inst_34655,inst_34650);
var state_34670__$1 = (function (){var statearr_34682 = state_34670;
(statearr_34682[(9)] = inst_34654);

(statearr_34682[(10)] = inst_34656__$1);

return statearr_34682;
})();
if(cljs.core.truth_(inst_34656__$1)){
var statearr_34683_34700 = state_34670__$1;
(statearr_34683_34700[(1)] = (9));

} else {
var statearr_34684_34701 = state_34670__$1;
(statearr_34684_34701[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29843__auto__))
;
return ((function (switch__29731__auto__,c__29843__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29732__auto__ = null;
var figwheel$client$file_reloading$state_machine__29732__auto____0 = (function (){
var statearr_34688 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34688[(0)] = figwheel$client$file_reloading$state_machine__29732__auto__);

(statearr_34688[(1)] = (1));

return statearr_34688;
});
var figwheel$client$file_reloading$state_machine__29732__auto____1 = (function (state_34670){
while(true){
var ret_value__29733__auto__ = (function (){try{while(true){
var result__29734__auto__ = switch__29731__auto__.call(null,state_34670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29734__auto__;
}
break;
}
}catch (e34689){if((e34689 instanceof Object)){
var ex__29735__auto__ = e34689;
var statearr_34690_34702 = state_34670;
(statearr_34690_34702[(5)] = ex__29735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34703 = state_34670;
state_34670 = G__34703;
continue;
} else {
return ret_value__29733__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29732__auto__ = function(state_34670){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29732__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29732__auto____1.call(this,state_34670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29732__auto____0;
figwheel$client$file_reloading$state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29732__auto____1;
return figwheel$client$file_reloading$state_machine__29732__auto__;
})()
;})(switch__29731__auto__,c__29843__auto__))
})();
var state__29845__auto__ = (function (){var statearr_34691 = f__29844__auto__.call(null);
(statearr_34691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29843__auto__);

return statearr_34691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29845__auto__);
});})(c__29843__auto__))
);

return c__29843__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34704,callback){
var map__34707 = p__34704;
var map__34707__$1 = ((((!((map__34707 == null)))?((((map__34707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34707):map__34707);
var file_msg = map__34707__$1;
var namespace = cljs.core.get.call(null,map__34707__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34707,map__34707__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34707,map__34707__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34709){
var map__34712 = p__34709;
var map__34712__$1 = ((((!((map__34712 == null)))?((((map__34712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34712):map__34712);
var file_msg = map__34712__$1;
var namespace = cljs.core.get.call(null,map__34712__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34714){
var map__34717 = p__34714;
var map__34717__$1 = ((((!((map__34717 == null)))?((((map__34717.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34717.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34717):map__34717);
var file_msg = map__34717__$1;
var namespace = cljs.core.get.call(null,map__34717__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25131__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__25131__auto__){
var or__25143__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25143__auto__)){
return or__25143__auto__;
} else {
var or__25143__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25143__auto____$1)){
return or__25143__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25131__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34719,callback){
var map__34722 = p__34719;
var map__34722__$1 = ((((!((map__34722 == null)))?((((map__34722.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34722.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34722):map__34722);
var file_msg = map__34722__$1;
var request_url = cljs.core.get.call(null,map__34722__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34722__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__29843__auto___34826 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29843__auto___34826,out){
return (function (){
var f__29844__auto__ = (function (){var switch__29731__auto__ = ((function (c__29843__auto___34826,out){
return (function (state_34808){
var state_val_34809 = (state_34808[(1)]);
if((state_val_34809 === (1))){
var inst_34782 = cljs.core.seq.call(null,files);
var inst_34783 = cljs.core.first.call(null,inst_34782);
var inst_34784 = cljs.core.next.call(null,inst_34782);
var inst_34785 = files;
var state_34808__$1 = (function (){var statearr_34810 = state_34808;
(statearr_34810[(7)] = inst_34784);

(statearr_34810[(8)] = inst_34785);

(statearr_34810[(9)] = inst_34783);

return statearr_34810;
})();
var statearr_34811_34827 = state_34808__$1;
(statearr_34811_34827[(2)] = null);

(statearr_34811_34827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (2))){
var inst_34791 = (state_34808[(10)]);
var inst_34785 = (state_34808[(8)]);
var inst_34790 = cljs.core.seq.call(null,inst_34785);
var inst_34791__$1 = cljs.core.first.call(null,inst_34790);
var inst_34792 = cljs.core.next.call(null,inst_34790);
var inst_34793 = (inst_34791__$1 == null);
var inst_34794 = cljs.core.not.call(null,inst_34793);
var state_34808__$1 = (function (){var statearr_34812 = state_34808;
(statearr_34812[(11)] = inst_34792);

(statearr_34812[(10)] = inst_34791__$1);

return statearr_34812;
})();
if(inst_34794){
var statearr_34813_34828 = state_34808__$1;
(statearr_34813_34828[(1)] = (4));

} else {
var statearr_34814_34829 = state_34808__$1;
(statearr_34814_34829[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (3))){
var inst_34806 = (state_34808[(2)]);
var state_34808__$1 = state_34808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34808__$1,inst_34806);
} else {
if((state_val_34809 === (4))){
var inst_34791 = (state_34808[(10)]);
var inst_34796 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34791);
var state_34808__$1 = state_34808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34808__$1,(7),inst_34796);
} else {
if((state_val_34809 === (5))){
var inst_34802 = cljs.core.async.close_BANG_.call(null,out);
var state_34808__$1 = state_34808;
var statearr_34815_34830 = state_34808__$1;
(statearr_34815_34830[(2)] = inst_34802);

(statearr_34815_34830[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (6))){
var inst_34804 = (state_34808[(2)]);
var state_34808__$1 = state_34808;
var statearr_34816_34831 = state_34808__$1;
(statearr_34816_34831[(2)] = inst_34804);

(statearr_34816_34831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (7))){
var inst_34792 = (state_34808[(11)]);
var inst_34798 = (state_34808[(2)]);
var inst_34799 = cljs.core.async.put_BANG_.call(null,out,inst_34798);
var inst_34785 = inst_34792;
var state_34808__$1 = (function (){var statearr_34817 = state_34808;
(statearr_34817[(12)] = inst_34799);

(statearr_34817[(8)] = inst_34785);

return statearr_34817;
})();
var statearr_34818_34832 = state_34808__$1;
(statearr_34818_34832[(2)] = null);

(statearr_34818_34832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__29843__auto___34826,out))
;
return ((function (switch__29731__auto__,c__29843__auto___34826,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29732__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29732__auto____0 = (function (){
var statearr_34822 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34822[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29732__auto__);

(statearr_34822[(1)] = (1));

return statearr_34822;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29732__auto____1 = (function (state_34808){
while(true){
var ret_value__29733__auto__ = (function (){try{while(true){
var result__29734__auto__ = switch__29731__auto__.call(null,state_34808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29734__auto__;
}
break;
}
}catch (e34823){if((e34823 instanceof Object)){
var ex__29735__auto__ = e34823;
var statearr_34824_34833 = state_34808;
(statearr_34824_34833[(5)] = ex__29735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34834 = state_34808;
state_34808 = G__34834;
continue;
} else {
return ret_value__29733__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29732__auto__ = function(state_34808){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29732__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29732__auto____1.call(this,state_34808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29732__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29732__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29732__auto__;
})()
;})(switch__29731__auto__,c__29843__auto___34826,out))
})();
var state__29845__auto__ = (function (){var statearr_34825 = f__29844__auto__.call(null);
(statearr_34825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29843__auto___34826);

return statearr_34825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29845__auto__);
});})(c__29843__auto___34826,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34835,opts){
var map__34839 = p__34835;
var map__34839__$1 = ((((!((map__34839 == null)))?((((map__34839.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34839.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34839):map__34839);
var eval_body__$1 = cljs.core.get.call(null,map__34839__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34839__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25131__auto__ = eval_body__$1;
if(cljs.core.truth_(and__25131__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__25131__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e34841){var e = e34841;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__34842_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34842_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__34851){
var vec__34852 = p__34851;
var k = cljs.core.nth.call(null,vec__34852,(0),null);
var v = cljs.core.nth.call(null,vec__34852,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34855){
var vec__34856 = p__34855;
var k = cljs.core.nth.call(null,vec__34856,(0),null);
var v = cljs.core.nth.call(null,vec__34856,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34862,p__34863){
var map__35110 = p__34862;
var map__35110__$1 = ((((!((map__35110 == null)))?((((map__35110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35110):map__35110);
var opts = map__35110__$1;
var before_jsload = cljs.core.get.call(null,map__35110__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35110__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35110__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35111 = p__34863;
var map__35111__$1 = ((((!((map__35111 == null)))?((((map__35111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35111):map__35111);
var msg = map__35111__$1;
var files = cljs.core.get.call(null,map__35111__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35111__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35111__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29843__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29843__auto__,map__35110,map__35110__$1,opts,before_jsload,on_jsload,reload_dependents,map__35111,map__35111__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29844__auto__ = (function (){var switch__29731__auto__ = ((function (c__29843__auto__,map__35110,map__35110__$1,opts,before_jsload,on_jsload,reload_dependents,map__35111,map__35111__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35264){
var state_val_35265 = (state_35264[(1)]);
if((state_val_35265 === (7))){
var inst_35126 = (state_35264[(7)]);
var inst_35127 = (state_35264[(8)]);
var inst_35125 = (state_35264[(9)]);
var inst_35128 = (state_35264[(10)]);
var inst_35133 = cljs.core._nth.call(null,inst_35126,inst_35128);
var inst_35134 = figwheel.client.file_reloading.eval_body.call(null,inst_35133,opts);
var inst_35135 = (inst_35128 + (1));
var tmp35266 = inst_35126;
var tmp35267 = inst_35127;
var tmp35268 = inst_35125;
var inst_35125__$1 = tmp35268;
var inst_35126__$1 = tmp35266;
var inst_35127__$1 = tmp35267;
var inst_35128__$1 = inst_35135;
var state_35264__$1 = (function (){var statearr_35269 = state_35264;
(statearr_35269[(11)] = inst_35134);

(statearr_35269[(7)] = inst_35126__$1);

(statearr_35269[(8)] = inst_35127__$1);

(statearr_35269[(9)] = inst_35125__$1);

(statearr_35269[(10)] = inst_35128__$1);

return statearr_35269;
})();
var statearr_35270_35356 = state_35264__$1;
(statearr_35270_35356[(2)] = null);

(statearr_35270_35356[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (20))){
var inst_35168 = (state_35264[(12)]);
var inst_35176 = figwheel.client.file_reloading.sort_files.call(null,inst_35168);
var state_35264__$1 = state_35264;
var statearr_35271_35357 = state_35264__$1;
(statearr_35271_35357[(2)] = inst_35176);

(statearr_35271_35357[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (27))){
var state_35264__$1 = state_35264;
var statearr_35272_35358 = state_35264__$1;
(statearr_35272_35358[(2)] = null);

(statearr_35272_35358[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (1))){
var inst_35117 = (state_35264[(13)]);
var inst_35114 = before_jsload.call(null,files);
var inst_35115 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35116 = (function (){return ((function (inst_35117,inst_35114,inst_35115,state_val_35265,c__29843__auto__,map__35110,map__35110__$1,opts,before_jsload,on_jsload,reload_dependents,map__35111,map__35111__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34859_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34859_SHARP_);
});
;})(inst_35117,inst_35114,inst_35115,state_val_35265,c__29843__auto__,map__35110,map__35110__$1,opts,before_jsload,on_jsload,reload_dependents,map__35111,map__35111__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35117__$1 = cljs.core.filter.call(null,inst_35116,files);
var inst_35118 = cljs.core.not_empty.call(null,inst_35117__$1);
var state_35264__$1 = (function (){var statearr_35273 = state_35264;
(statearr_35273[(14)] = inst_35115);

(statearr_35273[(13)] = inst_35117__$1);

(statearr_35273[(15)] = inst_35114);

return statearr_35273;
})();
if(cljs.core.truth_(inst_35118)){
var statearr_35274_35359 = state_35264__$1;
(statearr_35274_35359[(1)] = (2));

} else {
var statearr_35275_35360 = state_35264__$1;
(statearr_35275_35360[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (24))){
var state_35264__$1 = state_35264;
var statearr_35276_35361 = state_35264__$1;
(statearr_35276_35361[(2)] = null);

(statearr_35276_35361[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (39))){
var inst_35218 = (state_35264[(16)]);
var state_35264__$1 = state_35264;
var statearr_35277_35362 = state_35264__$1;
(statearr_35277_35362[(2)] = inst_35218);

(statearr_35277_35362[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (46))){
var inst_35259 = (state_35264[(2)]);
var state_35264__$1 = state_35264;
var statearr_35278_35363 = state_35264__$1;
(statearr_35278_35363[(2)] = inst_35259);

(statearr_35278_35363[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (4))){
var inst_35162 = (state_35264[(2)]);
var inst_35163 = cljs.core.List.EMPTY;
var inst_35164 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35163);
var inst_35165 = (function (){return ((function (inst_35162,inst_35163,inst_35164,state_val_35265,c__29843__auto__,map__35110,map__35110__$1,opts,before_jsload,on_jsload,reload_dependents,map__35111,map__35111__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34860_SHARP_){
var and__25131__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34860_SHARP_);
if(cljs.core.truth_(and__25131__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34860_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__34860_SHARP_)));
} else {
return and__25131__auto__;
}
});
;})(inst_35162,inst_35163,inst_35164,state_val_35265,c__29843__auto__,map__35110,map__35110__$1,opts,before_jsload,on_jsload,reload_dependents,map__35111,map__35111__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35166 = cljs.core.filter.call(null,inst_35165,files);
var inst_35167 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35168 = cljs.core.concat.call(null,inst_35166,inst_35167);
var state_35264__$1 = (function (){var statearr_35279 = state_35264;
(statearr_35279[(17)] = inst_35162);

(statearr_35279[(18)] = inst_35164);

(statearr_35279[(12)] = inst_35168);

return statearr_35279;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35280_35364 = state_35264__$1;
(statearr_35280_35364[(1)] = (16));

} else {
var statearr_35281_35365 = state_35264__$1;
(statearr_35281_35365[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (15))){
var inst_35152 = (state_35264[(2)]);
var state_35264__$1 = state_35264;
var statearr_35282_35366 = state_35264__$1;
(statearr_35282_35366[(2)] = inst_35152);

(statearr_35282_35366[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (21))){
var inst_35178 = (state_35264[(19)]);
var inst_35178__$1 = (state_35264[(2)]);
var inst_35179 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35178__$1);
var state_35264__$1 = (function (){var statearr_35283 = state_35264;
(statearr_35283[(19)] = inst_35178__$1);

return statearr_35283;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35264__$1,(22),inst_35179);
} else {
if((state_val_35265 === (31))){
var inst_35262 = (state_35264[(2)]);
var state_35264__$1 = state_35264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35264__$1,inst_35262);
} else {
if((state_val_35265 === (32))){
var inst_35218 = (state_35264[(16)]);
var inst_35223 = inst_35218.cljs$lang$protocol_mask$partition0$;
var inst_35224 = (inst_35223 & (64));
var inst_35225 = inst_35218.cljs$core$ISeq$;
var inst_35226 = (inst_35224) || (inst_35225);
var state_35264__$1 = state_35264;
if(cljs.core.truth_(inst_35226)){
var statearr_35284_35367 = state_35264__$1;
(statearr_35284_35367[(1)] = (35));

} else {
var statearr_35285_35368 = state_35264__$1;
(statearr_35285_35368[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (40))){
var inst_35239 = (state_35264[(20)]);
var inst_35238 = (state_35264[(2)]);
var inst_35239__$1 = cljs.core.get.call(null,inst_35238,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35240 = cljs.core.get.call(null,inst_35238,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35241 = cljs.core.not_empty.call(null,inst_35239__$1);
var state_35264__$1 = (function (){var statearr_35286 = state_35264;
(statearr_35286[(20)] = inst_35239__$1);

(statearr_35286[(21)] = inst_35240);

return statearr_35286;
})();
if(cljs.core.truth_(inst_35241)){
var statearr_35287_35369 = state_35264__$1;
(statearr_35287_35369[(1)] = (41));

} else {
var statearr_35288_35370 = state_35264__$1;
(statearr_35288_35370[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (33))){
var state_35264__$1 = state_35264;
var statearr_35289_35371 = state_35264__$1;
(statearr_35289_35371[(2)] = false);

(statearr_35289_35371[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (13))){
var inst_35138 = (state_35264[(22)]);
var inst_35142 = cljs.core.chunk_first.call(null,inst_35138);
var inst_35143 = cljs.core.chunk_rest.call(null,inst_35138);
var inst_35144 = cljs.core.count.call(null,inst_35142);
var inst_35125 = inst_35143;
var inst_35126 = inst_35142;
var inst_35127 = inst_35144;
var inst_35128 = (0);
var state_35264__$1 = (function (){var statearr_35290 = state_35264;
(statearr_35290[(7)] = inst_35126);

(statearr_35290[(8)] = inst_35127);

(statearr_35290[(9)] = inst_35125);

(statearr_35290[(10)] = inst_35128);

return statearr_35290;
})();
var statearr_35291_35372 = state_35264__$1;
(statearr_35291_35372[(2)] = null);

(statearr_35291_35372[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (22))){
var inst_35186 = (state_35264[(23)]);
var inst_35181 = (state_35264[(24)]);
var inst_35182 = (state_35264[(25)]);
var inst_35178 = (state_35264[(19)]);
var inst_35181__$1 = (state_35264[(2)]);
var inst_35182__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35181__$1);
var inst_35183 = (function (){var all_files = inst_35178;
var res_SINGLEQUOTE_ = inst_35181__$1;
var res = inst_35182__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35186,inst_35181,inst_35182,inst_35178,inst_35181__$1,inst_35182__$1,state_val_35265,c__29843__auto__,map__35110,map__35110__$1,opts,before_jsload,on_jsload,reload_dependents,map__35111,map__35111__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34861_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34861_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35186,inst_35181,inst_35182,inst_35178,inst_35181__$1,inst_35182__$1,state_val_35265,c__29843__auto__,map__35110,map__35110__$1,opts,before_jsload,on_jsload,reload_dependents,map__35111,map__35111__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35184 = cljs.core.filter.call(null,inst_35183,inst_35181__$1);
var inst_35185 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35186__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35185);
var inst_35187 = cljs.core.not_empty.call(null,inst_35186__$1);
var state_35264__$1 = (function (){var statearr_35292 = state_35264;
(statearr_35292[(23)] = inst_35186__$1);

(statearr_35292[(24)] = inst_35181__$1);

(statearr_35292[(25)] = inst_35182__$1);

(statearr_35292[(26)] = inst_35184);

return statearr_35292;
})();
if(cljs.core.truth_(inst_35187)){
var statearr_35293_35373 = state_35264__$1;
(statearr_35293_35373[(1)] = (23));

} else {
var statearr_35294_35374 = state_35264__$1;
(statearr_35294_35374[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (36))){
var state_35264__$1 = state_35264;
var statearr_35295_35375 = state_35264__$1;
(statearr_35295_35375[(2)] = false);

(statearr_35295_35375[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (41))){
var inst_35239 = (state_35264[(20)]);
var inst_35243 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35244 = cljs.core.map.call(null,inst_35243,inst_35239);
var inst_35245 = cljs.core.pr_str.call(null,inst_35244);
var inst_35246 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_35245)].join('');
var inst_35247 = figwheel.client.utils.log.call(null,inst_35246);
var state_35264__$1 = state_35264;
var statearr_35296_35376 = state_35264__$1;
(statearr_35296_35376[(2)] = inst_35247);

(statearr_35296_35376[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (43))){
var inst_35240 = (state_35264[(21)]);
var inst_35250 = (state_35264[(2)]);
var inst_35251 = cljs.core.not_empty.call(null,inst_35240);
var state_35264__$1 = (function (){var statearr_35297 = state_35264;
(statearr_35297[(27)] = inst_35250);

return statearr_35297;
})();
if(cljs.core.truth_(inst_35251)){
var statearr_35298_35377 = state_35264__$1;
(statearr_35298_35377[(1)] = (44));

} else {
var statearr_35299_35378 = state_35264__$1;
(statearr_35299_35378[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (29))){
var inst_35186 = (state_35264[(23)]);
var inst_35181 = (state_35264[(24)]);
var inst_35218 = (state_35264[(16)]);
var inst_35182 = (state_35264[(25)]);
var inst_35178 = (state_35264[(19)]);
var inst_35184 = (state_35264[(26)]);
var inst_35214 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35217 = (function (){var all_files = inst_35178;
var res_SINGLEQUOTE_ = inst_35181;
var res = inst_35182;
var files_not_loaded = inst_35184;
var dependencies_that_loaded = inst_35186;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35186,inst_35181,inst_35218,inst_35182,inst_35178,inst_35184,inst_35214,state_val_35265,c__29843__auto__,map__35110,map__35110__$1,opts,before_jsload,on_jsload,reload_dependents,map__35111,map__35111__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35216){
var map__35300 = p__35216;
var map__35300__$1 = ((((!((map__35300 == null)))?((((map__35300.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35300.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35300):map__35300);
var namespace = cljs.core.get.call(null,map__35300__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35186,inst_35181,inst_35218,inst_35182,inst_35178,inst_35184,inst_35214,state_val_35265,c__29843__auto__,map__35110,map__35110__$1,opts,before_jsload,on_jsload,reload_dependents,map__35111,map__35111__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35218__$1 = cljs.core.group_by.call(null,inst_35217,inst_35184);
var inst_35220 = (inst_35218__$1 == null);
var inst_35221 = cljs.core.not.call(null,inst_35220);
var state_35264__$1 = (function (){var statearr_35302 = state_35264;
(statearr_35302[(16)] = inst_35218__$1);

(statearr_35302[(28)] = inst_35214);

return statearr_35302;
})();
if(inst_35221){
var statearr_35303_35379 = state_35264__$1;
(statearr_35303_35379[(1)] = (32));

} else {
var statearr_35304_35380 = state_35264__$1;
(statearr_35304_35380[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (44))){
var inst_35240 = (state_35264[(21)]);
var inst_35253 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35240);
var inst_35254 = cljs.core.pr_str.call(null,inst_35253);
var inst_35255 = [cljs.core.str("not required: "),cljs.core.str(inst_35254)].join('');
var inst_35256 = figwheel.client.utils.log.call(null,inst_35255);
var state_35264__$1 = state_35264;
var statearr_35305_35381 = state_35264__$1;
(statearr_35305_35381[(2)] = inst_35256);

(statearr_35305_35381[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (6))){
var inst_35159 = (state_35264[(2)]);
var state_35264__$1 = state_35264;
var statearr_35306_35382 = state_35264__$1;
(statearr_35306_35382[(2)] = inst_35159);

(statearr_35306_35382[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (28))){
var inst_35184 = (state_35264[(26)]);
var inst_35211 = (state_35264[(2)]);
var inst_35212 = cljs.core.not_empty.call(null,inst_35184);
var state_35264__$1 = (function (){var statearr_35307 = state_35264;
(statearr_35307[(29)] = inst_35211);

return statearr_35307;
})();
if(cljs.core.truth_(inst_35212)){
var statearr_35308_35383 = state_35264__$1;
(statearr_35308_35383[(1)] = (29));

} else {
var statearr_35309_35384 = state_35264__$1;
(statearr_35309_35384[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (25))){
var inst_35182 = (state_35264[(25)]);
var inst_35198 = (state_35264[(2)]);
var inst_35199 = cljs.core.not_empty.call(null,inst_35182);
var state_35264__$1 = (function (){var statearr_35310 = state_35264;
(statearr_35310[(30)] = inst_35198);

return statearr_35310;
})();
if(cljs.core.truth_(inst_35199)){
var statearr_35311_35385 = state_35264__$1;
(statearr_35311_35385[(1)] = (26));

} else {
var statearr_35312_35386 = state_35264__$1;
(statearr_35312_35386[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (34))){
var inst_35233 = (state_35264[(2)]);
var state_35264__$1 = state_35264;
if(cljs.core.truth_(inst_35233)){
var statearr_35313_35387 = state_35264__$1;
(statearr_35313_35387[(1)] = (38));

} else {
var statearr_35314_35388 = state_35264__$1;
(statearr_35314_35388[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (17))){
var state_35264__$1 = state_35264;
var statearr_35315_35389 = state_35264__$1;
(statearr_35315_35389[(2)] = recompile_dependents);

(statearr_35315_35389[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (3))){
var state_35264__$1 = state_35264;
var statearr_35316_35390 = state_35264__$1;
(statearr_35316_35390[(2)] = null);

(statearr_35316_35390[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (12))){
var inst_35155 = (state_35264[(2)]);
var state_35264__$1 = state_35264;
var statearr_35317_35391 = state_35264__$1;
(statearr_35317_35391[(2)] = inst_35155);

(statearr_35317_35391[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (2))){
var inst_35117 = (state_35264[(13)]);
var inst_35124 = cljs.core.seq.call(null,inst_35117);
var inst_35125 = inst_35124;
var inst_35126 = null;
var inst_35127 = (0);
var inst_35128 = (0);
var state_35264__$1 = (function (){var statearr_35318 = state_35264;
(statearr_35318[(7)] = inst_35126);

(statearr_35318[(8)] = inst_35127);

(statearr_35318[(9)] = inst_35125);

(statearr_35318[(10)] = inst_35128);

return statearr_35318;
})();
var statearr_35319_35392 = state_35264__$1;
(statearr_35319_35392[(2)] = null);

(statearr_35319_35392[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (23))){
var inst_35186 = (state_35264[(23)]);
var inst_35181 = (state_35264[(24)]);
var inst_35182 = (state_35264[(25)]);
var inst_35178 = (state_35264[(19)]);
var inst_35184 = (state_35264[(26)]);
var inst_35189 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35191 = (function (){var all_files = inst_35178;
var res_SINGLEQUOTE_ = inst_35181;
var res = inst_35182;
var files_not_loaded = inst_35184;
var dependencies_that_loaded = inst_35186;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35186,inst_35181,inst_35182,inst_35178,inst_35184,inst_35189,state_val_35265,c__29843__auto__,map__35110,map__35110__$1,opts,before_jsload,on_jsload,reload_dependents,map__35111,map__35111__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35190){
var map__35320 = p__35190;
var map__35320__$1 = ((((!((map__35320 == null)))?((((map__35320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35320):map__35320);
var request_url = cljs.core.get.call(null,map__35320__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35186,inst_35181,inst_35182,inst_35178,inst_35184,inst_35189,state_val_35265,c__29843__auto__,map__35110,map__35110__$1,opts,before_jsload,on_jsload,reload_dependents,map__35111,map__35111__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35192 = cljs.core.reverse.call(null,inst_35186);
var inst_35193 = cljs.core.map.call(null,inst_35191,inst_35192);
var inst_35194 = cljs.core.pr_str.call(null,inst_35193);
var inst_35195 = figwheel.client.utils.log.call(null,inst_35194);
var state_35264__$1 = (function (){var statearr_35322 = state_35264;
(statearr_35322[(31)] = inst_35189);

return statearr_35322;
})();
var statearr_35323_35393 = state_35264__$1;
(statearr_35323_35393[(2)] = inst_35195);

(statearr_35323_35393[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (35))){
var state_35264__$1 = state_35264;
var statearr_35324_35394 = state_35264__$1;
(statearr_35324_35394[(2)] = true);

(statearr_35324_35394[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (19))){
var inst_35168 = (state_35264[(12)]);
var inst_35174 = figwheel.client.file_reloading.expand_files.call(null,inst_35168);
var state_35264__$1 = state_35264;
var statearr_35325_35395 = state_35264__$1;
(statearr_35325_35395[(2)] = inst_35174);

(statearr_35325_35395[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (11))){
var state_35264__$1 = state_35264;
var statearr_35326_35396 = state_35264__$1;
(statearr_35326_35396[(2)] = null);

(statearr_35326_35396[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (9))){
var inst_35157 = (state_35264[(2)]);
var state_35264__$1 = state_35264;
var statearr_35327_35397 = state_35264__$1;
(statearr_35327_35397[(2)] = inst_35157);

(statearr_35327_35397[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (5))){
var inst_35127 = (state_35264[(8)]);
var inst_35128 = (state_35264[(10)]);
var inst_35130 = (inst_35128 < inst_35127);
var inst_35131 = inst_35130;
var state_35264__$1 = state_35264;
if(cljs.core.truth_(inst_35131)){
var statearr_35328_35398 = state_35264__$1;
(statearr_35328_35398[(1)] = (7));

} else {
var statearr_35329_35399 = state_35264__$1;
(statearr_35329_35399[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (14))){
var inst_35138 = (state_35264[(22)]);
var inst_35147 = cljs.core.first.call(null,inst_35138);
var inst_35148 = figwheel.client.file_reloading.eval_body.call(null,inst_35147,opts);
var inst_35149 = cljs.core.next.call(null,inst_35138);
var inst_35125 = inst_35149;
var inst_35126 = null;
var inst_35127 = (0);
var inst_35128 = (0);
var state_35264__$1 = (function (){var statearr_35330 = state_35264;
(statearr_35330[(7)] = inst_35126);

(statearr_35330[(8)] = inst_35127);

(statearr_35330[(32)] = inst_35148);

(statearr_35330[(9)] = inst_35125);

(statearr_35330[(10)] = inst_35128);

return statearr_35330;
})();
var statearr_35331_35400 = state_35264__$1;
(statearr_35331_35400[(2)] = null);

(statearr_35331_35400[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (45))){
var state_35264__$1 = state_35264;
var statearr_35332_35401 = state_35264__$1;
(statearr_35332_35401[(2)] = null);

(statearr_35332_35401[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (26))){
var inst_35186 = (state_35264[(23)]);
var inst_35181 = (state_35264[(24)]);
var inst_35182 = (state_35264[(25)]);
var inst_35178 = (state_35264[(19)]);
var inst_35184 = (state_35264[(26)]);
var inst_35201 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35203 = (function (){var all_files = inst_35178;
var res_SINGLEQUOTE_ = inst_35181;
var res = inst_35182;
var files_not_loaded = inst_35184;
var dependencies_that_loaded = inst_35186;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35186,inst_35181,inst_35182,inst_35178,inst_35184,inst_35201,state_val_35265,c__29843__auto__,map__35110,map__35110__$1,opts,before_jsload,on_jsload,reload_dependents,map__35111,map__35111__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35202){
var map__35333 = p__35202;
var map__35333__$1 = ((((!((map__35333 == null)))?((((map__35333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35333):map__35333);
var namespace = cljs.core.get.call(null,map__35333__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35333__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35186,inst_35181,inst_35182,inst_35178,inst_35184,inst_35201,state_val_35265,c__29843__auto__,map__35110,map__35110__$1,opts,before_jsload,on_jsload,reload_dependents,map__35111,map__35111__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35204 = cljs.core.map.call(null,inst_35203,inst_35182);
var inst_35205 = cljs.core.pr_str.call(null,inst_35204);
var inst_35206 = figwheel.client.utils.log.call(null,inst_35205);
var inst_35207 = (function (){var all_files = inst_35178;
var res_SINGLEQUOTE_ = inst_35181;
var res = inst_35182;
var files_not_loaded = inst_35184;
var dependencies_that_loaded = inst_35186;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35186,inst_35181,inst_35182,inst_35178,inst_35184,inst_35201,inst_35203,inst_35204,inst_35205,inst_35206,state_val_35265,c__29843__auto__,map__35110,map__35110__$1,opts,before_jsload,on_jsload,reload_dependents,map__35111,map__35111__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35186,inst_35181,inst_35182,inst_35178,inst_35184,inst_35201,inst_35203,inst_35204,inst_35205,inst_35206,state_val_35265,c__29843__auto__,map__35110,map__35110__$1,opts,before_jsload,on_jsload,reload_dependents,map__35111,map__35111__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35208 = setTimeout(inst_35207,(10));
var state_35264__$1 = (function (){var statearr_35335 = state_35264;
(statearr_35335[(33)] = inst_35201);

(statearr_35335[(34)] = inst_35206);

return statearr_35335;
})();
var statearr_35336_35402 = state_35264__$1;
(statearr_35336_35402[(2)] = inst_35208);

(statearr_35336_35402[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (16))){
var state_35264__$1 = state_35264;
var statearr_35337_35403 = state_35264__$1;
(statearr_35337_35403[(2)] = reload_dependents);

(statearr_35337_35403[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (38))){
var inst_35218 = (state_35264[(16)]);
var inst_35235 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35218);
var state_35264__$1 = state_35264;
var statearr_35338_35404 = state_35264__$1;
(statearr_35338_35404[(2)] = inst_35235);

(statearr_35338_35404[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (30))){
var state_35264__$1 = state_35264;
var statearr_35339_35405 = state_35264__$1;
(statearr_35339_35405[(2)] = null);

(statearr_35339_35405[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (10))){
var inst_35138 = (state_35264[(22)]);
var inst_35140 = cljs.core.chunked_seq_QMARK_.call(null,inst_35138);
var state_35264__$1 = state_35264;
if(inst_35140){
var statearr_35340_35406 = state_35264__$1;
(statearr_35340_35406[(1)] = (13));

} else {
var statearr_35341_35407 = state_35264__$1;
(statearr_35341_35407[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (18))){
var inst_35172 = (state_35264[(2)]);
var state_35264__$1 = state_35264;
if(cljs.core.truth_(inst_35172)){
var statearr_35342_35408 = state_35264__$1;
(statearr_35342_35408[(1)] = (19));

} else {
var statearr_35343_35409 = state_35264__$1;
(statearr_35343_35409[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (42))){
var state_35264__$1 = state_35264;
var statearr_35344_35410 = state_35264__$1;
(statearr_35344_35410[(2)] = null);

(statearr_35344_35410[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (37))){
var inst_35230 = (state_35264[(2)]);
var state_35264__$1 = state_35264;
var statearr_35345_35411 = state_35264__$1;
(statearr_35345_35411[(2)] = inst_35230);

(statearr_35345_35411[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (8))){
var inst_35138 = (state_35264[(22)]);
var inst_35125 = (state_35264[(9)]);
var inst_35138__$1 = cljs.core.seq.call(null,inst_35125);
var state_35264__$1 = (function (){var statearr_35346 = state_35264;
(statearr_35346[(22)] = inst_35138__$1);

return statearr_35346;
})();
if(inst_35138__$1){
var statearr_35347_35412 = state_35264__$1;
(statearr_35347_35412[(1)] = (10));

} else {
var statearr_35348_35413 = state_35264__$1;
(statearr_35348_35413[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29843__auto__,map__35110,map__35110__$1,opts,before_jsload,on_jsload,reload_dependents,map__35111,map__35111__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29731__auto__,c__29843__auto__,map__35110,map__35110__$1,opts,before_jsload,on_jsload,reload_dependents,map__35111,map__35111__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29732__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29732__auto____0 = (function (){
var statearr_35352 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35352[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29732__auto__);

(statearr_35352[(1)] = (1));

return statearr_35352;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29732__auto____1 = (function (state_35264){
while(true){
var ret_value__29733__auto__ = (function (){try{while(true){
var result__29734__auto__ = switch__29731__auto__.call(null,state_35264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29734__auto__;
}
break;
}
}catch (e35353){if((e35353 instanceof Object)){
var ex__29735__auto__ = e35353;
var statearr_35354_35414 = state_35264;
(statearr_35354_35414[(5)] = ex__29735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35415 = state_35264;
state_35264 = G__35415;
continue;
} else {
return ret_value__29733__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29732__auto__ = function(state_35264){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29732__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29732__auto____1.call(this,state_35264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29732__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29732__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29732__auto__;
})()
;})(switch__29731__auto__,c__29843__auto__,map__35110,map__35110__$1,opts,before_jsload,on_jsload,reload_dependents,map__35111,map__35111__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29845__auto__ = (function (){var statearr_35355 = f__29844__auto__.call(null);
(statearr_35355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29843__auto__);

return statearr_35355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29845__auto__);
});})(c__29843__auto__,map__35110,map__35110__$1,opts,before_jsload,on_jsload,reload_dependents,map__35111,map__35111__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29843__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35418,link){
var map__35421 = p__35418;
var map__35421__$1 = ((((!((map__35421 == null)))?((((map__35421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35421):map__35421);
var file = cljs.core.get.call(null,map__35421__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35421,map__35421__$1,file){
return (function (p1__35416_SHARP_,p2__35417_SHARP_){
if(cljs.core._EQ_.call(null,p1__35416_SHARP_,p2__35417_SHARP_)){
return p1__35416_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35421,map__35421__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35427){
var map__35428 = p__35427;
var map__35428__$1 = ((((!((map__35428 == null)))?((((map__35428.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35428.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35428):map__35428);
var match_length = cljs.core.get.call(null,map__35428__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35428__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35423_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35423_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35430_SHARP_,p2__35431_SHARP_){
return cljs.core.assoc.call(null,p1__35430_SHARP_,cljs.core.get.call(null,p2__35431_SHARP_,key),p2__35431_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_35432 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35432);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35432);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35433,p__35434){
var map__35439 = p__35433;
var map__35439__$1 = ((((!((map__35439 == null)))?((((map__35439.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35439.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35439):map__35439);
var on_cssload = cljs.core.get.call(null,map__35439__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35440 = p__35434;
var map__35440__$1 = ((((!((map__35440 == null)))?((((map__35440.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35440.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35440):map__35440);
var files_msg = map__35440__$1;
var files = cljs.core.get.call(null,map__35440__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1489243598004