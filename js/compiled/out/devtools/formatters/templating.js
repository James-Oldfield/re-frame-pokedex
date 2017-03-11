// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x40550_40551 = value;
x40550_40551.devtools$protocols$IGroup$ = true;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$IGroup$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x40555_40556 = value;
x40555_40556.devtools$protocols$ITemplate$ = true;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ITemplate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x40560_40561 = value;
x40560_40561.devtools$protocols$ISurrogate$ = true;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ISurrogate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__25131__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__25131__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__25131__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__26225__auto__ = [];
var len__26218__auto___40569 = arguments.length;
var i__26219__auto___40570 = (0);
while(true){
if((i__26219__auto___40570 < len__26218__auto___40569)){
args__26225__auto__.push((arguments[i__26219__auto___40570]));

var G__40571 = (i__26219__auto___40570 + (1));
i__26219__auto___40570 = G__40571;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__40565_40572 = cljs.core.seq.call(null,items);
var chunk__40566_40573 = null;
var count__40567_40574 = (0);
var i__40568_40575 = (0);
while(true){
if((i__40568_40575 < count__40567_40574)){
var item_40576 = cljs.core._nth.call(null,chunk__40566_40573,i__40568_40575);
if(cljs.core.some_QMARK_.call(null,item_40576)){
if(cljs.core.coll_QMARK_.call(null,item_40576)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_40576)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_40576));
}
} else {
}

var G__40577 = seq__40565_40572;
var G__40578 = chunk__40566_40573;
var G__40579 = count__40567_40574;
var G__40580 = (i__40568_40575 + (1));
seq__40565_40572 = G__40577;
chunk__40566_40573 = G__40578;
count__40567_40574 = G__40579;
i__40568_40575 = G__40580;
continue;
} else {
var temp__4657__auto___40581 = cljs.core.seq.call(null,seq__40565_40572);
if(temp__4657__auto___40581){
var seq__40565_40582__$1 = temp__4657__auto___40581;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40565_40582__$1)){
var c__25954__auto___40583 = cljs.core.chunk_first.call(null,seq__40565_40582__$1);
var G__40584 = cljs.core.chunk_rest.call(null,seq__40565_40582__$1);
var G__40585 = c__25954__auto___40583;
var G__40586 = cljs.core.count.call(null,c__25954__auto___40583);
var G__40587 = (0);
seq__40565_40572 = G__40584;
chunk__40566_40573 = G__40585;
count__40567_40574 = G__40586;
i__40568_40575 = G__40587;
continue;
} else {
var item_40588 = cljs.core.first.call(null,seq__40565_40582__$1);
if(cljs.core.some_QMARK_.call(null,item_40588)){
if(cljs.core.coll_QMARK_.call(null,item_40588)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_40588)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_40588));
}
} else {
}

var G__40589 = cljs.core.next.call(null,seq__40565_40582__$1);
var G__40590 = null;
var G__40591 = (0);
var G__40592 = (0);
seq__40565_40572 = G__40589;
chunk__40566_40573 = G__40590;
count__40567_40574 = G__40591;
i__40568_40575 = G__40592;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq40564){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40564));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__26225__auto__ = [];
var len__26218__auto___40600 = arguments.length;
var i__26219__auto___40601 = (0);
while(true){
if((i__26219__auto___40601 < len__26218__auto___40600)){
args__26225__auto__.push((arguments[i__26219__auto___40601]));

var G__40602 = (i__26219__auto___40601 + (1));
i__26219__auto___40601 = G__40602;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((2) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26226__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__40596_40603 = cljs.core.seq.call(null,children);
var chunk__40597_40604 = null;
var count__40598_40605 = (0);
var i__40599_40606 = (0);
while(true){
if((i__40599_40606 < count__40598_40605)){
var child_40607 = cljs.core._nth.call(null,chunk__40597_40604,i__40599_40606);
if(cljs.core.some_QMARK_.call(null,child_40607)){
if(cljs.core.coll_QMARK_.call(null,child_40607)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_40607))));
} else {
var temp__4655__auto___40608 = devtools.formatters.helpers.pref.call(null,child_40607);
if(cljs.core.truth_(temp__4655__auto___40608)){
var child_value_40609 = temp__4655__auto___40608;
template.push(child_value_40609);
} else {
}
}
} else {
}

var G__40610 = seq__40596_40603;
var G__40611 = chunk__40597_40604;
var G__40612 = count__40598_40605;
var G__40613 = (i__40599_40606 + (1));
seq__40596_40603 = G__40610;
chunk__40597_40604 = G__40611;
count__40598_40605 = G__40612;
i__40599_40606 = G__40613;
continue;
} else {
var temp__4657__auto___40614 = cljs.core.seq.call(null,seq__40596_40603);
if(temp__4657__auto___40614){
var seq__40596_40615__$1 = temp__4657__auto___40614;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40596_40615__$1)){
var c__25954__auto___40616 = cljs.core.chunk_first.call(null,seq__40596_40615__$1);
var G__40617 = cljs.core.chunk_rest.call(null,seq__40596_40615__$1);
var G__40618 = c__25954__auto___40616;
var G__40619 = cljs.core.count.call(null,c__25954__auto___40616);
var G__40620 = (0);
seq__40596_40603 = G__40617;
chunk__40597_40604 = G__40618;
count__40598_40605 = G__40619;
i__40599_40606 = G__40620;
continue;
} else {
var child_40621 = cljs.core.first.call(null,seq__40596_40615__$1);
if(cljs.core.some_QMARK_.call(null,child_40621)){
if(cljs.core.coll_QMARK_.call(null,child_40621)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_40621))));
} else {
var temp__4655__auto___40622 = devtools.formatters.helpers.pref.call(null,child_40621);
if(cljs.core.truth_(temp__4655__auto___40622)){
var child_value_40623 = temp__4655__auto___40622;
template.push(child_value_40623);
} else {
}
}
} else {
}

var G__40624 = cljs.core.next.call(null,seq__40596_40615__$1);
var G__40625 = null;
var G__40626 = (0);
var G__40627 = (0);
seq__40596_40603 = G__40624;
chunk__40597_40604 = G__40625;
count__40598_40605 = G__40626;
i__40599_40606 = G__40627;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq40593){
var G__40594 = cljs.core.first.call(null,seq40593);
var seq40593__$1 = cljs.core.next.call(null,seq40593);
var G__40595 = cljs.core.first.call(null,seq40593__$1);
var seq40593__$2 = cljs.core.next.call(null,seq40593__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__40594,G__40595,seq40593__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__26225__auto__ = [];
var len__26218__auto___40630 = arguments.length;
var i__26219__auto___40631 = (0);
while(true){
if((i__26219__auto___40631 < len__26218__auto___40630)){
args__26225__auto__.push((arguments[i__26219__auto___40631]));

var G__40632 = (i__26219__auto___40631 + (1));
i__26219__auto___40631 = G__40632;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((1) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26226__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq40628){
var G__40629 = cljs.core.first.call(null,seq40628);
var seq40628__$1 = cljs.core.next.call(null,seq40628);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40629,seq40628__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__26225__auto__ = [];
var len__26218__auto___40635 = arguments.length;
var i__26219__auto___40636 = (0);
while(true){
if((i__26219__auto___40636 < len__26218__auto___40635)){
args__26225__auto__.push((arguments[i__26219__auto___40636]));

var G__40637 = (i__26219__auto___40636 + (1));
i__26219__auto___40636 = G__40637;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((1) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26226__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq40633){
var G__40634 = cljs.core.first.call(null,seq40633);
var seq40633__$1 = cljs.core.next.call(null,seq40633);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40634,seq40633__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args40638 = [];
var len__26218__auto___40643 = arguments.length;
var i__26219__auto___40644 = (0);
while(true){
if((i__26219__auto___40644 < len__26218__auto___40643)){
args40638.push((arguments[i__26219__auto___40644]));

var G__40645 = (i__26219__auto___40644 + (1));
i__26219__auto___40644 = G__40645;
continue;
} else {
}
break;
}

var G__40640 = args40638.length;
switch (G__40640) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40638.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj40642 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__25143__auto__ = start_index;
if(cljs.core.truth_(or__25143__auto__)){
return or__25143__auto__;
} else {
return (0);
}
})()};
return obj40642;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__26225__auto__ = [];
var len__26218__auto___40653 = arguments.length;
var i__26219__auto___40654 = (0);
while(true){
if((i__26219__auto___40654 < len__26218__auto___40653)){
args__26225__auto__.push((arguments[i__26219__auto___40654]));

var G__40655 = (i__26219__auto___40654 + (1));
i__26219__auto___40654 = G__40655;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((1) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26226__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__40649){
var vec__40650 = p__40649;
var state_override_fn = cljs.core.nth.call(null,vec__40650,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((cljs.core.some_QMARK_.call(null,state_override_fn))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq40647){
var G__40648 = cljs.core.first.call(null,seq40647);
var seq40647__$1 = cljs.core.next.call(null,seq40647);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__40648,seq40647__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__26129__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_40659_40662 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_40660_40663 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_40659_40662,_STAR_print_fn_STAR_40660_40663,sb__26129__auto__){
return (function (x__26130__auto__){
return sb__26129__auto__.append(x__26130__auto__);
});})(_STAR_print_newline_STAR_40659_40662,_STAR_print_fn_STAR_40660_40663,sb__26129__auto__))
;

try{var _STAR_print_level_STAR_40661_40664 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_40661_40664;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40660_40663;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_40659_40662;
}
return [cljs.core.str(sb__26129__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_40666 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_40666;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str("\n"),cljs.core.str("Render path: "),cljs.core.str(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str("\n"),cljs.core.str("Render stack:\n"),cljs.core.str(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__40668 = name;
switch (G__40668) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("no matching special tag name: '"),cljs.core.str(name),cljs.core.str("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__40673 = tag;
var html_tag = cljs.core.nth.call(null,vec__40673,(0),null);
var style = cljs.core.nth.call(null,vec__40673,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_40677 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("invalid json-ml markup at "),cljs.core.str(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_40677;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_40680 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_40681 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_40681;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_40680;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__40682 = initial_value;
var G__40683 = value.call(null);
initial_value = G__40682;
value = G__40683;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__40684 = initial_value;
var G__40685 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__40684;
value = G__40685;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__40686 = initial_value;
var G__40687 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__40686;
value = G__40687;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1489243612555