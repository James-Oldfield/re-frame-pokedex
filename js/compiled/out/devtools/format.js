// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.format');
goog.require('cljs.core');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__25806__auto__ = (((value == null))?null:value);
var m__25807__auto__ = (devtools.format._header[goog.typeOf(x__25806__auto__)]);
if(!((m__25807__auto__ == null))){
return m__25807__auto__.call(null,value);
} else {
var m__25807__auto____$1 = (devtools.format._header["_"]);
if(!((m__25807__auto____$1 == null))){
return m__25807__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__25806__auto__ = (((value == null))?null:value);
var m__25807__auto__ = (devtools.format._has_body[goog.typeOf(x__25806__auto__)]);
if(!((m__25807__auto__ == null))){
return m__25807__auto__.call(null,value);
} else {
var m__25807__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__25807__auto____$1 == null))){
return m__25807__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__25806__auto__ = (((value == null))?null:value);
var m__25807__auto__ = (devtools.format._body[goog.typeOf(x__25806__auto__)]);
if(!((m__25807__auto__ == null))){
return m__25807__auto__.call(null,value);
} else {
var m__25807__auto____$1 = (devtools.format._body["_"]);
if(!((m__25807__auto____$1 == null))){
return m__25807__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__38121__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38121__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38121__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38121__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38120__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38120__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__38121__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38121__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38121__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38121__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38120__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38120__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__38121__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38121__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38121__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38121__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38120__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38120__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__38121__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38121__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38121__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38121__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38120__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38120__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__38121__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38121__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38121__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38121__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38120__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38120__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__38121__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38121__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38121__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38121__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38120__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38120__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__38121__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38121__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38121__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38121__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38120__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38120__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__26225__auto__ = [];
var len__26218__auto___38142 = arguments.length;
var i__26219__auto___38143 = (0);
while(true){
if((i__26219__auto___38143 < len__26218__auto___38142)){
args__26225__auto__.push((arguments[i__26219__auto___38143]));

var G__38144 = (i__26219__auto___38143 + (1));
i__26219__auto___38143 = G__38144;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq38141){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38141));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__26225__auto__ = [];
var len__26218__auto___38146 = arguments.length;
var i__26219__auto___38147 = (0);
while(true){
if((i__26219__auto___38147 < len__26218__auto___38146)){
args__26225__auto__.push((arguments[i__26219__auto___38147]));

var G__38148 = (i__26219__auto___38147 + (1));
i__26219__auto___38147 = G__38148;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq38145){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38145));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__26225__auto__ = [];
var len__26218__auto___38150 = arguments.length;
var i__26219__auto___38151 = (0);
while(true){
if((i__26219__auto___38151 < len__26218__auto___38150)){
args__26225__auto__.push((arguments[i__26219__auto___38151]));

var G__38152 = (i__26219__auto___38151 + (1));
i__26219__auto___38151 = G__38152;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq38149){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38149));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__26225__auto__ = [];
var len__26218__auto___38154 = arguments.length;
var i__26219__auto___38155 = (0);
while(true){
if((i__26219__auto___38155 < len__26218__auto___38154)){
args__26225__auto__.push((arguments[i__26219__auto___38155]));

var G__38156 = (i__26219__auto___38155 + (1));
i__26219__auto___38155 = G__38156;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq38153){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38153));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__26225__auto__ = [];
var len__26218__auto___38158 = arguments.length;
var i__26219__auto___38159 = (0);
while(true){
if((i__26219__auto___38159 < len__26218__auto___38158)){
args__26225__auto__.push((arguments[i__26219__auto___38159]));

var G__38160 = (i__26219__auto___38159 + (1));
i__26219__auto___38159 = G__38160;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq38157){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38157));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__26225__auto__ = [];
var len__26218__auto___38162 = arguments.length;
var i__26219__auto___38163 = (0);
while(true){
if((i__26219__auto___38163 < len__26218__auto___38162)){
args__26225__auto__.push((arguments[i__26219__auto___38163]));

var G__38164 = (i__26219__auto___38163 + (1));
i__26219__auto___38163 = G__38164;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq38161){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38161));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__26225__auto__ = [];
var len__26218__auto___38166 = arguments.length;
var i__26219__auto___38167 = (0);
while(true){
if((i__26219__auto___38167 < len__26218__auto___38166)){
args__26225__auto__.push((arguments[i__26219__auto___38167]));

var G__38168 = (i__26219__auto___38167 + (1));
i__26219__auto___38167 = G__38168;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq38165){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38165));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__26225__auto__ = [];
var len__26218__auto___38176 = arguments.length;
var i__26219__auto___38177 = (0);
while(true){
if((i__26219__auto___38177 < len__26218__auto___38176)){
args__26225__auto__.push((arguments[i__26219__auto___38177]));

var G__38178 = (i__26219__auto___38177 + (1));
i__26219__auto___38177 = G__38178;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((1) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26226__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__38172){
var vec__38173 = p__38172;
var state_override = cljs.core.nth.call(null,vec__38173,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__38173,state_override){
return (function (p1__38169_SHARP_){
return cljs.core.merge.call(null,p1__38169_SHARP_,state_override);
});})(vec__38173,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq38170){
var G__38171 = cljs.core.first.call(null,seq38170);
var seq38170__$1 = cljs.core.next.call(null,seq38170);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__38171,seq38170__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__26225__auto__ = [];
var len__26218__auto___38180 = arguments.length;
var i__26219__auto___38181 = (0);
while(true){
if((i__26219__auto___38181 < len__26218__auto___38180)){
args__26225__auto__.push((arguments[i__26219__auto___38181]));

var G__38182 = (i__26219__auto___38181 + (1));
i__26219__auto___38181 = G__38182;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq38179){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38179));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__26225__auto__ = [];
var len__26218__auto___38185 = arguments.length;
var i__26219__auto___38186 = (0);
while(true){
if((i__26219__auto___38186 < len__26218__auto___38185)){
args__26225__auto__.push((arguments[i__26219__auto___38186]));

var G__38187 = (i__26219__auto___38186 + (1));
i__26219__auto___38186 = G__38187;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((1) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26226__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq38183){
var G__38184 = cljs.core.first.call(null,seq38183);
var seq38183__$1 = cljs.core.next.call(null,seq38183);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__38184,seq38183__$1);
});


//# sourceMappingURL=format.js.map?rel=1489243603821