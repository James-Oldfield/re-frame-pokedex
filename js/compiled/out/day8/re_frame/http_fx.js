// Compiled by ClojureScript 1.9.229 {}
goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__28781){
var vec__28785 = p__28781;
var success_QMARK_ = cljs.core.nth.call(null,vec__28785,(0),null);
var response = cljs.core.nth.call(null,vec__28785,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return on_success.call(null,response);
} else {
var details = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response);
return on_failure.call(null,details);
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__28790){
var map__28793 = p__28790;
var map__28793__$1 = ((((!((map__28793 == null)))?((((map__28793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28793):map__28793);
var request = map__28793__$1;
var on_success = cljs.core.get.call(null,map__28793__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.call(null,map__28793__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"api","api",-899839580),api,new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.call(null,day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__28793,map__28793__$1,request,on_success,on_failure){
return (function (p1__28788_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_success,p1__28788_SHARP_));
});})(api,map__28793,map__28793__$1,request,on_success,on_failure))
,((function (api,map__28793,map__28793__$1,request,on_success,on_failure){
return (function (p1__28789_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_failure,p1__28789_SHARP_));
});})(api,map__28793,map__28793__$1,request,on_success,on_failure))
,api)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),(function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_.call(null,request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__28799 = cljs.core.seq.call(null,seq_request_maps);
var chunk__28800 = null;
var count__28801 = (0);
var i__28802 = (0);
while(true){
if((i__28802 < count__28801)){
var request__$1 = cljs.core._nth.call(null,chunk__28800,i__28802);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));

var G__28803 = seq__28799;
var G__28804 = chunk__28800;
var G__28805 = count__28801;
var G__28806 = (i__28802 + (1));
seq__28799 = G__28803;
chunk__28800 = G__28804;
count__28801 = G__28805;
i__28802 = G__28806;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28799);
if(temp__4657__auto__){
var seq__28799__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28799__$1)){
var c__25954__auto__ = cljs.core.chunk_first.call(null,seq__28799__$1);
var G__28807 = cljs.core.chunk_rest.call(null,seq__28799__$1);
var G__28808 = c__25954__auto__;
var G__28809 = cljs.core.count.call(null,c__25954__auto__);
var G__28810 = (0);
seq__28799 = G__28807;
chunk__28800 = G__28808;
count__28801 = G__28809;
i__28802 = G__28810;
continue;
} else {
var request__$1 = cljs.core.first.call(null,seq__28799__$1);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));

var G__28811 = cljs.core.next.call(null,seq__28799__$1);
var G__28812 = null;
var G__28813 = (0);
var G__28814 = (0);
seq__28799 = G__28811;
chunk__28800 = G__28812;
count__28801 = G__28813;
i__28802 = G__28814;
continue;
}
} else {
return null;
}
}
break;
}
}));

//# sourceMappingURL=http_fx.js.map?rel=1489243587772