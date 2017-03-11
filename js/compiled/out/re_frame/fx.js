// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__27478 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__27479 = null;
var count__27480 = (0);
var i__27481 = (0);
while(true){
if((i__27481 < count__27480)){
var vec__27482 = cljs.core._nth.call(null,chunk__27479,i__27481);
var effect_k = cljs.core.nth.call(null,vec__27482,(0),null);
var value = cljs.core.nth.call(null,vec__27482,(1),null);
var temp__4655__auto___27488 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___27488)){
var effect_fn_27489 = temp__4655__auto___27488;
effect_fn_27489.call(null,value);
} else {
}

var G__27490 = seq__27478;
var G__27491 = chunk__27479;
var G__27492 = count__27480;
var G__27493 = (i__27481 + (1));
seq__27478 = G__27490;
chunk__27479 = G__27491;
count__27480 = G__27492;
i__27481 = G__27493;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27478);
if(temp__4657__auto__){
var seq__27478__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27478__$1)){
var c__25954__auto__ = cljs.core.chunk_first.call(null,seq__27478__$1);
var G__27494 = cljs.core.chunk_rest.call(null,seq__27478__$1);
var G__27495 = c__25954__auto__;
var G__27496 = cljs.core.count.call(null,c__25954__auto__);
var G__27497 = (0);
seq__27478 = G__27494;
chunk__27479 = G__27495;
count__27480 = G__27496;
i__27481 = G__27497;
continue;
} else {
var vec__27485 = cljs.core.first.call(null,seq__27478__$1);
var effect_k = cljs.core.nth.call(null,vec__27485,(0),null);
var value = cljs.core.nth.call(null,vec__27485,(1),null);
var temp__4655__auto___27498 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___27498)){
var effect_fn_27499 = temp__4655__auto___27498;
effect_fn_27499.call(null,value);
} else {
}

var G__27500 = cljs.core.next.call(null,seq__27478__$1);
var G__27501 = null;
var G__27502 = (0);
var G__27503 = (0);
seq__27478 = G__27500;
chunk__27479 = G__27501;
count__27480 = G__27502;
i__27481 = G__27503;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__27504 = cljs.core.seq.call(null,value);
var chunk__27505 = null;
var count__27506 = (0);
var i__27507 = (0);
while(true){
if((i__27507 < count__27506)){
var map__27508 = cljs.core._nth.call(null,chunk__27505,i__27507);
var map__27508__$1 = ((((!((map__27508 == null)))?((((map__27508.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27508.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27508):map__27508);
var effect = map__27508__$1;
var ms = cljs.core.get.call(null,map__27508__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__27508__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__27504,chunk__27505,count__27506,i__27507,map__27508,map__27508__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__27504,chunk__27505,count__27506,i__27507,map__27508,map__27508__$1,effect,ms,dispatch))
,ms);
}

var G__27512 = seq__27504;
var G__27513 = chunk__27505;
var G__27514 = count__27506;
var G__27515 = (i__27507 + (1));
seq__27504 = G__27512;
chunk__27505 = G__27513;
count__27506 = G__27514;
i__27507 = G__27515;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27504);
if(temp__4657__auto__){
var seq__27504__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27504__$1)){
var c__25954__auto__ = cljs.core.chunk_first.call(null,seq__27504__$1);
var G__27516 = cljs.core.chunk_rest.call(null,seq__27504__$1);
var G__27517 = c__25954__auto__;
var G__27518 = cljs.core.count.call(null,c__25954__auto__);
var G__27519 = (0);
seq__27504 = G__27516;
chunk__27505 = G__27517;
count__27506 = G__27518;
i__27507 = G__27519;
continue;
} else {
var map__27510 = cljs.core.first.call(null,seq__27504__$1);
var map__27510__$1 = ((((!((map__27510 == null)))?((((map__27510.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27510.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27510):map__27510);
var effect = map__27510__$1;
var ms = cljs.core.get.call(null,map__27510__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__27510__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__27504,chunk__27505,count__27506,i__27507,map__27510,map__27510__$1,effect,ms,dispatch,seq__27504__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__27504,chunk__27505,count__27506,i__27507,map__27510,map__27510__$1,effect,ms,dispatch,seq__27504__$1,temp__4657__auto__))
,ms);
}

var G__27520 = cljs.core.next.call(null,seq__27504__$1);
var G__27521 = null;
var G__27522 = (0);
var G__27523 = (0);
seq__27504 = G__27520;
chunk__27505 = G__27521;
count__27506 = G__27522;
i__27507 = G__27523;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
}

var seq__27524 = cljs.core.seq.call(null,value);
var chunk__27525 = null;
var count__27526 = (0);
var i__27527 = (0);
while(true){
if((i__27527 < count__27526)){
var event = cljs.core._nth.call(null,chunk__27525,i__27527);
re_frame.router.dispatch.call(null,event);

var G__27528 = seq__27524;
var G__27529 = chunk__27525;
var G__27530 = count__27526;
var G__27531 = (i__27527 + (1));
seq__27524 = G__27528;
chunk__27525 = G__27529;
count__27526 = G__27530;
i__27527 = G__27531;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27524);
if(temp__4657__auto__){
var seq__27524__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27524__$1)){
var c__25954__auto__ = cljs.core.chunk_first.call(null,seq__27524__$1);
var G__27532 = cljs.core.chunk_rest.call(null,seq__27524__$1);
var G__27533 = c__25954__auto__;
var G__27534 = cljs.core.count.call(null,c__25954__auto__);
var G__27535 = (0);
seq__27524 = G__27532;
chunk__27525 = G__27533;
count__27526 = G__27534;
i__27527 = G__27535;
continue;
} else {
var event = cljs.core.first.call(null,seq__27524__$1);
re_frame.router.dispatch.call(null,event);

var G__27536 = cljs.core.next.call(null,seq__27524__$1);
var G__27537 = null;
var G__27538 = (0);
var G__27539 = (0);
seq__27524 = G__27536;
chunk__27525 = G__27537;
count__27526 = G__27538;
i__27527 = G__27539;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__27540 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__27541 = null;
var count__27542 = (0);
var i__27543 = (0);
while(true){
if((i__27543 < count__27542)){
var event = cljs.core._nth.call(null,chunk__27541,i__27543);
clear_event.call(null,event);

var G__27544 = seq__27540;
var G__27545 = chunk__27541;
var G__27546 = count__27542;
var G__27547 = (i__27543 + (1));
seq__27540 = G__27544;
chunk__27541 = G__27545;
count__27542 = G__27546;
i__27543 = G__27547;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27540);
if(temp__4657__auto__){
var seq__27540__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27540__$1)){
var c__25954__auto__ = cljs.core.chunk_first.call(null,seq__27540__$1);
var G__27548 = cljs.core.chunk_rest.call(null,seq__27540__$1);
var G__27549 = c__25954__auto__;
var G__27550 = cljs.core.count.call(null,c__25954__auto__);
var G__27551 = (0);
seq__27540 = G__27548;
chunk__27541 = G__27549;
count__27542 = G__27550;
i__27543 = G__27551;
continue;
} else {
var event = cljs.core.first.call(null,seq__27540__$1);
clear_event.call(null,event);

var G__27552 = cljs.core.next.call(null,seq__27540__$1);
var G__27553 = null;
var G__27554 = (0);
var G__27555 = (0);
seq__27540 = G__27552;
chunk__27541 = G__27553;
count__27542 = G__27554;
i__27543 = G__27555;
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
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map?rel=1489243584716