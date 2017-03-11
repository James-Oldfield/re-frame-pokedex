// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.9";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args37181 = [];
var len__26218__auto___37184 = arguments.length;
var i__26219__auto___37185 = (0);
while(true){
if((i__26219__auto___37185 < len__26218__auto___37184)){
args37181.push((arguments[i__26219__auto___37185]));

var G__37186 = (i__26219__auto___37185 + (1));
i__26219__auto___37185 = G__37186;
continue;
} else {
}
break;
}

var G__37183 = args37181.length;
switch (G__37183) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37181.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__26225__auto__ = [];
var len__26218__auto___37189 = arguments.length;
var i__26219__auto___37190 = (0);
while(true){
if((i__26219__auto___37190 < len__26218__auto___37189)){
args__26225__auto__.push((arguments[i__26219__auto___37190]));

var G__37191 = (i__26219__auto___37190 + (1));
i__26219__auto___37190 = G__37191;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37188){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37188));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__26225__auto__ = [];
var len__26218__auto___37193 = arguments.length;
var i__26219__auto___37194 = (0);
while(true){
if((i__26219__auto___37194 < len__26218__auto___37193)){
args__26225__auto__.push((arguments[i__26219__auto___37194]));

var G__37195 = (i__26219__auto___37194 + (1));
i__26219__auto___37194 = G__37195;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37192){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37192));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37196){
var map__37199 = p__37196;
var map__37199__$1 = ((((!((map__37199 == null)))?((((map__37199.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37199.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37199):map__37199);
var message = cljs.core.get.call(null,map__37199__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37199__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25143__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25143__auto__)){
return or__25143__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25131__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25131__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25131__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__29843__auto___37361 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29843__auto___37361,ch){
return (function (){
var f__29844__auto__ = (function (){var switch__29731__auto__ = ((function (c__29843__auto___37361,ch){
return (function (state_37330){
var state_val_37331 = (state_37330[(1)]);
if((state_val_37331 === (7))){
var inst_37326 = (state_37330[(2)]);
var state_37330__$1 = state_37330;
var statearr_37332_37362 = state_37330__$1;
(statearr_37332_37362[(2)] = inst_37326);

(statearr_37332_37362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37331 === (1))){
var state_37330__$1 = state_37330;
var statearr_37333_37363 = state_37330__$1;
(statearr_37333_37363[(2)] = null);

(statearr_37333_37363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37331 === (4))){
var inst_37283 = (state_37330[(7)]);
var inst_37283__$1 = (state_37330[(2)]);
var state_37330__$1 = (function (){var statearr_37334 = state_37330;
(statearr_37334[(7)] = inst_37283__$1);

return statearr_37334;
})();
if(cljs.core.truth_(inst_37283__$1)){
var statearr_37335_37364 = state_37330__$1;
(statearr_37335_37364[(1)] = (5));

} else {
var statearr_37336_37365 = state_37330__$1;
(statearr_37336_37365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37331 === (15))){
var inst_37290 = (state_37330[(8)]);
var inst_37305 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37290);
var inst_37306 = cljs.core.first.call(null,inst_37305);
var inst_37307 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37306);
var inst_37308 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_37307)].join('');
var inst_37309 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37308);
var state_37330__$1 = state_37330;
var statearr_37337_37366 = state_37330__$1;
(statearr_37337_37366[(2)] = inst_37309);

(statearr_37337_37366[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37331 === (13))){
var inst_37314 = (state_37330[(2)]);
var state_37330__$1 = state_37330;
var statearr_37338_37367 = state_37330__$1;
(statearr_37338_37367[(2)] = inst_37314);

(statearr_37338_37367[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37331 === (6))){
var state_37330__$1 = state_37330;
var statearr_37339_37368 = state_37330__$1;
(statearr_37339_37368[(2)] = null);

(statearr_37339_37368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37331 === (17))){
var inst_37312 = (state_37330[(2)]);
var state_37330__$1 = state_37330;
var statearr_37340_37369 = state_37330__$1;
(statearr_37340_37369[(2)] = inst_37312);

(statearr_37340_37369[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37331 === (3))){
var inst_37328 = (state_37330[(2)]);
var state_37330__$1 = state_37330;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37330__$1,inst_37328);
} else {
if((state_val_37331 === (12))){
var inst_37289 = (state_37330[(9)]);
var inst_37303 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37289,opts);
var state_37330__$1 = state_37330;
if(cljs.core.truth_(inst_37303)){
var statearr_37341_37370 = state_37330__$1;
(statearr_37341_37370[(1)] = (15));

} else {
var statearr_37342_37371 = state_37330__$1;
(statearr_37342_37371[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37331 === (2))){
var state_37330__$1 = state_37330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37330__$1,(4),ch);
} else {
if((state_val_37331 === (11))){
var inst_37290 = (state_37330[(8)]);
var inst_37295 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37296 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37290);
var inst_37297 = cljs.core.async.timeout.call(null,(1000));
var inst_37298 = [inst_37296,inst_37297];
var inst_37299 = (new cljs.core.PersistentVector(null,2,(5),inst_37295,inst_37298,null));
var state_37330__$1 = state_37330;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37330__$1,(14),inst_37299);
} else {
if((state_val_37331 === (9))){
var inst_37290 = (state_37330[(8)]);
var inst_37316 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37317 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37290);
var inst_37318 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37317);
var inst_37319 = [cljs.core.str("Not loading: "),cljs.core.str(inst_37318)].join('');
var inst_37320 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37319);
var state_37330__$1 = (function (){var statearr_37343 = state_37330;
(statearr_37343[(10)] = inst_37316);

return statearr_37343;
})();
var statearr_37344_37372 = state_37330__$1;
(statearr_37344_37372[(2)] = inst_37320);

(statearr_37344_37372[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37331 === (5))){
var inst_37283 = (state_37330[(7)]);
var inst_37285 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37286 = (new cljs.core.PersistentArrayMap(null,2,inst_37285,null));
var inst_37287 = (new cljs.core.PersistentHashSet(null,inst_37286,null));
var inst_37288 = figwheel.client.focus_msgs.call(null,inst_37287,inst_37283);
var inst_37289 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37288);
var inst_37290 = cljs.core.first.call(null,inst_37288);
var inst_37291 = figwheel.client.autoload_QMARK_.call(null);
var state_37330__$1 = (function (){var statearr_37345 = state_37330;
(statearr_37345[(8)] = inst_37290);

(statearr_37345[(9)] = inst_37289);

return statearr_37345;
})();
if(cljs.core.truth_(inst_37291)){
var statearr_37346_37373 = state_37330__$1;
(statearr_37346_37373[(1)] = (8));

} else {
var statearr_37347_37374 = state_37330__$1;
(statearr_37347_37374[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37331 === (14))){
var inst_37301 = (state_37330[(2)]);
var state_37330__$1 = state_37330;
var statearr_37348_37375 = state_37330__$1;
(statearr_37348_37375[(2)] = inst_37301);

(statearr_37348_37375[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37331 === (16))){
var state_37330__$1 = state_37330;
var statearr_37349_37376 = state_37330__$1;
(statearr_37349_37376[(2)] = null);

(statearr_37349_37376[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37331 === (10))){
var inst_37322 = (state_37330[(2)]);
var state_37330__$1 = (function (){var statearr_37350 = state_37330;
(statearr_37350[(11)] = inst_37322);

return statearr_37350;
})();
var statearr_37351_37377 = state_37330__$1;
(statearr_37351_37377[(2)] = null);

(statearr_37351_37377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37331 === (8))){
var inst_37289 = (state_37330[(9)]);
var inst_37293 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37289,opts);
var state_37330__$1 = state_37330;
if(cljs.core.truth_(inst_37293)){
var statearr_37352_37378 = state_37330__$1;
(statearr_37352_37378[(1)] = (11));

} else {
var statearr_37353_37379 = state_37330__$1;
(statearr_37353_37379[(1)] = (12));

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
});})(c__29843__auto___37361,ch))
;
return ((function (switch__29731__auto__,c__29843__auto___37361,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29732__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29732__auto____0 = (function (){
var statearr_37357 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37357[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29732__auto__);

(statearr_37357[(1)] = (1));

return statearr_37357;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29732__auto____1 = (function (state_37330){
while(true){
var ret_value__29733__auto__ = (function (){try{while(true){
var result__29734__auto__ = switch__29731__auto__.call(null,state_37330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29734__auto__;
}
break;
}
}catch (e37358){if((e37358 instanceof Object)){
var ex__29735__auto__ = e37358;
var statearr_37359_37380 = state_37330;
(statearr_37359_37380[(5)] = ex__29735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37381 = state_37330;
state_37330 = G__37381;
continue;
} else {
return ret_value__29733__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29732__auto__ = function(state_37330){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29732__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29732__auto____1.call(this,state_37330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29732__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29732__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29732__auto__;
})()
;})(switch__29731__auto__,c__29843__auto___37361,ch))
})();
var state__29845__auto__ = (function (){var statearr_37360 = f__29844__auto__.call(null);
(statearr_37360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29843__auto___37361);

return statearr_37360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29845__auto__);
});})(c__29843__auto___37361,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37382_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37382_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37385 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37385){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37384){if((e37384 instanceof Error)){
var e = e37384;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37385], null));
} else {
var e = e37384;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37385))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37386){
var map__37395 = p__37386;
var map__37395__$1 = ((((!((map__37395 == null)))?((((map__37395.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37395.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37395):map__37395);
var opts = map__37395__$1;
var build_id = cljs.core.get.call(null,map__37395__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37395,map__37395__$1,opts,build_id){
return (function (p__37397){
var vec__37398 = p__37397;
var seq__37399 = cljs.core.seq.call(null,vec__37398);
var first__37400 = cljs.core.first.call(null,seq__37399);
var seq__37399__$1 = cljs.core.next.call(null,seq__37399);
var map__37401 = first__37400;
var map__37401__$1 = ((((!((map__37401 == null)))?((((map__37401.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37401.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37401):map__37401);
var msg = map__37401__$1;
var msg_name = cljs.core.get.call(null,map__37401__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37399__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37398,seq__37399,first__37400,seq__37399__$1,map__37401,map__37401__$1,msg,msg_name,_,map__37395,map__37395__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37398,seq__37399,first__37400,seq__37399__$1,map__37401,map__37401__$1,msg,msg_name,_,map__37395,map__37395__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37395,map__37395__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37409){
var vec__37410 = p__37409;
var seq__37411 = cljs.core.seq.call(null,vec__37410);
var first__37412 = cljs.core.first.call(null,seq__37411);
var seq__37411__$1 = cljs.core.next.call(null,seq__37411);
var map__37413 = first__37412;
var map__37413__$1 = ((((!((map__37413 == null)))?((((map__37413.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37413.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37413):map__37413);
var msg = map__37413__$1;
var msg_name = cljs.core.get.call(null,map__37413__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37411__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37415){
var map__37427 = p__37415;
var map__37427__$1 = ((((!((map__37427 == null)))?((((map__37427.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37427.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37427):map__37427);
var on_compile_warning = cljs.core.get.call(null,map__37427__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37427__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37427,map__37427__$1,on_compile_warning,on_compile_fail){
return (function (p__37429){
var vec__37430 = p__37429;
var seq__37431 = cljs.core.seq.call(null,vec__37430);
var first__37432 = cljs.core.first.call(null,seq__37431);
var seq__37431__$1 = cljs.core.next.call(null,seq__37431);
var map__37433 = first__37432;
var map__37433__$1 = ((((!((map__37433 == null)))?((((map__37433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37433):map__37433);
var msg = map__37433__$1;
var msg_name = cljs.core.get.call(null,map__37433__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37431__$1;
var pred__37435 = cljs.core._EQ_;
var expr__37436 = msg_name;
if(cljs.core.truth_(pred__37435.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37436))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37435.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37436))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37427,map__37427__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__29843__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29843__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29844__auto__ = (function (){var switch__29731__auto__ = ((function (c__29843__auto__,msg_hist,msg_names,msg){
return (function (state_37664){
var state_val_37665 = (state_37664[(1)]);
if((state_val_37665 === (7))){
var inst_37584 = (state_37664[(2)]);
var state_37664__$1 = state_37664;
if(cljs.core.truth_(inst_37584)){
var statearr_37666_37716 = state_37664__$1;
(statearr_37666_37716[(1)] = (8));

} else {
var statearr_37667_37717 = state_37664__$1;
(statearr_37667_37717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37665 === (20))){
var inst_37658 = (state_37664[(2)]);
var state_37664__$1 = state_37664;
var statearr_37668_37718 = state_37664__$1;
(statearr_37668_37718[(2)] = inst_37658);

(statearr_37668_37718[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37665 === (27))){
var inst_37654 = (state_37664[(2)]);
var state_37664__$1 = state_37664;
var statearr_37669_37719 = state_37664__$1;
(statearr_37669_37719[(2)] = inst_37654);

(statearr_37669_37719[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37665 === (1))){
var inst_37577 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37664__$1 = state_37664;
if(cljs.core.truth_(inst_37577)){
var statearr_37670_37720 = state_37664__$1;
(statearr_37670_37720[(1)] = (2));

} else {
var statearr_37671_37721 = state_37664__$1;
(statearr_37671_37721[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37665 === (24))){
var inst_37656 = (state_37664[(2)]);
var state_37664__$1 = state_37664;
var statearr_37672_37722 = state_37664__$1;
(statearr_37672_37722[(2)] = inst_37656);

(statearr_37672_37722[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37665 === (4))){
var inst_37662 = (state_37664[(2)]);
var state_37664__$1 = state_37664;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37664__$1,inst_37662);
} else {
if((state_val_37665 === (15))){
var inst_37660 = (state_37664[(2)]);
var state_37664__$1 = state_37664;
var statearr_37673_37723 = state_37664__$1;
(statearr_37673_37723[(2)] = inst_37660);

(statearr_37673_37723[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37665 === (21))){
var inst_37613 = (state_37664[(2)]);
var inst_37614 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37615 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37614);
var state_37664__$1 = (function (){var statearr_37674 = state_37664;
(statearr_37674[(7)] = inst_37613);

return statearr_37674;
})();
var statearr_37675_37724 = state_37664__$1;
(statearr_37675_37724[(2)] = inst_37615);

(statearr_37675_37724[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37665 === (31))){
var inst_37643 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37664__$1 = state_37664;
if(cljs.core.truth_(inst_37643)){
var statearr_37676_37725 = state_37664__$1;
(statearr_37676_37725[(1)] = (34));

} else {
var statearr_37677_37726 = state_37664__$1;
(statearr_37677_37726[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37665 === (32))){
var inst_37652 = (state_37664[(2)]);
var state_37664__$1 = state_37664;
var statearr_37678_37727 = state_37664__$1;
(statearr_37678_37727[(2)] = inst_37652);

(statearr_37678_37727[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37665 === (33))){
var inst_37639 = (state_37664[(2)]);
var inst_37640 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37641 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37640);
var state_37664__$1 = (function (){var statearr_37679 = state_37664;
(statearr_37679[(8)] = inst_37639);

return statearr_37679;
})();
var statearr_37680_37728 = state_37664__$1;
(statearr_37680_37728[(2)] = inst_37641);

(statearr_37680_37728[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37665 === (13))){
var inst_37598 = figwheel.client.heads_up.clear.call(null);
var state_37664__$1 = state_37664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37664__$1,(16),inst_37598);
} else {
if((state_val_37665 === (22))){
var inst_37619 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37620 = figwheel.client.heads_up.append_warning_message.call(null,inst_37619);
var state_37664__$1 = state_37664;
var statearr_37681_37729 = state_37664__$1;
(statearr_37681_37729[(2)] = inst_37620);

(statearr_37681_37729[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37665 === (36))){
var inst_37650 = (state_37664[(2)]);
var state_37664__$1 = state_37664;
var statearr_37682_37730 = state_37664__$1;
(statearr_37682_37730[(2)] = inst_37650);

(statearr_37682_37730[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37665 === (29))){
var inst_37630 = (state_37664[(2)]);
var inst_37631 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37632 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37631);
var state_37664__$1 = (function (){var statearr_37683 = state_37664;
(statearr_37683[(9)] = inst_37630);

return statearr_37683;
})();
var statearr_37684_37731 = state_37664__$1;
(statearr_37684_37731[(2)] = inst_37632);

(statearr_37684_37731[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37665 === (6))){
var inst_37579 = (state_37664[(10)]);
var state_37664__$1 = state_37664;
var statearr_37685_37732 = state_37664__$1;
(statearr_37685_37732[(2)] = inst_37579);

(statearr_37685_37732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37665 === (28))){
var inst_37626 = (state_37664[(2)]);
var inst_37627 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37628 = figwheel.client.heads_up.display_warning.call(null,inst_37627);
var state_37664__$1 = (function (){var statearr_37686 = state_37664;
(statearr_37686[(11)] = inst_37626);

return statearr_37686;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37664__$1,(29),inst_37628);
} else {
if((state_val_37665 === (25))){
var inst_37624 = figwheel.client.heads_up.clear.call(null);
var state_37664__$1 = state_37664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37664__$1,(28),inst_37624);
} else {
if((state_val_37665 === (34))){
var inst_37645 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37664__$1 = state_37664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37664__$1,(37),inst_37645);
} else {
if((state_val_37665 === (17))){
var inst_37604 = (state_37664[(2)]);
var inst_37605 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37606 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37605);
var state_37664__$1 = (function (){var statearr_37687 = state_37664;
(statearr_37687[(12)] = inst_37604);

return statearr_37687;
})();
var statearr_37688_37733 = state_37664__$1;
(statearr_37688_37733[(2)] = inst_37606);

(statearr_37688_37733[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37665 === (3))){
var inst_37596 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37664__$1 = state_37664;
if(cljs.core.truth_(inst_37596)){
var statearr_37689_37734 = state_37664__$1;
(statearr_37689_37734[(1)] = (13));

} else {
var statearr_37690_37735 = state_37664__$1;
(statearr_37690_37735[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37665 === (12))){
var inst_37592 = (state_37664[(2)]);
var state_37664__$1 = state_37664;
var statearr_37691_37736 = state_37664__$1;
(statearr_37691_37736[(2)] = inst_37592);

(statearr_37691_37736[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37665 === (2))){
var inst_37579 = (state_37664[(10)]);
var inst_37579__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37664__$1 = (function (){var statearr_37692 = state_37664;
(statearr_37692[(10)] = inst_37579__$1);

return statearr_37692;
})();
if(cljs.core.truth_(inst_37579__$1)){
var statearr_37693_37737 = state_37664__$1;
(statearr_37693_37737[(1)] = (5));

} else {
var statearr_37694_37738 = state_37664__$1;
(statearr_37694_37738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37665 === (23))){
var inst_37622 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37664__$1 = state_37664;
if(cljs.core.truth_(inst_37622)){
var statearr_37695_37739 = state_37664__$1;
(statearr_37695_37739[(1)] = (25));

} else {
var statearr_37696_37740 = state_37664__$1;
(statearr_37696_37740[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37665 === (35))){
var state_37664__$1 = state_37664;
var statearr_37697_37741 = state_37664__$1;
(statearr_37697_37741[(2)] = null);

(statearr_37697_37741[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37665 === (19))){
var inst_37617 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37664__$1 = state_37664;
if(cljs.core.truth_(inst_37617)){
var statearr_37698_37742 = state_37664__$1;
(statearr_37698_37742[(1)] = (22));

} else {
var statearr_37699_37743 = state_37664__$1;
(statearr_37699_37743[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37665 === (11))){
var inst_37588 = (state_37664[(2)]);
var state_37664__$1 = state_37664;
var statearr_37700_37744 = state_37664__$1;
(statearr_37700_37744[(2)] = inst_37588);

(statearr_37700_37744[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37665 === (9))){
var inst_37590 = figwheel.client.heads_up.clear.call(null);
var state_37664__$1 = state_37664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37664__$1,(12),inst_37590);
} else {
if((state_val_37665 === (5))){
var inst_37581 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37664__$1 = state_37664;
var statearr_37701_37745 = state_37664__$1;
(statearr_37701_37745[(2)] = inst_37581);

(statearr_37701_37745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37665 === (14))){
var inst_37608 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37664__$1 = state_37664;
if(cljs.core.truth_(inst_37608)){
var statearr_37702_37746 = state_37664__$1;
(statearr_37702_37746[(1)] = (18));

} else {
var statearr_37703_37747 = state_37664__$1;
(statearr_37703_37747[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37665 === (26))){
var inst_37634 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37664__$1 = state_37664;
if(cljs.core.truth_(inst_37634)){
var statearr_37704_37748 = state_37664__$1;
(statearr_37704_37748[(1)] = (30));

} else {
var statearr_37705_37749 = state_37664__$1;
(statearr_37705_37749[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37665 === (16))){
var inst_37600 = (state_37664[(2)]);
var inst_37601 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37602 = figwheel.client.heads_up.display_exception.call(null,inst_37601);
var state_37664__$1 = (function (){var statearr_37706 = state_37664;
(statearr_37706[(13)] = inst_37600);

return statearr_37706;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37664__$1,(17),inst_37602);
} else {
if((state_val_37665 === (30))){
var inst_37636 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37637 = figwheel.client.heads_up.display_warning.call(null,inst_37636);
var state_37664__$1 = state_37664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37664__$1,(33),inst_37637);
} else {
if((state_val_37665 === (10))){
var inst_37594 = (state_37664[(2)]);
var state_37664__$1 = state_37664;
var statearr_37707_37750 = state_37664__$1;
(statearr_37707_37750[(2)] = inst_37594);

(statearr_37707_37750[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37665 === (18))){
var inst_37610 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37611 = figwheel.client.heads_up.display_exception.call(null,inst_37610);
var state_37664__$1 = state_37664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37664__$1,(21),inst_37611);
} else {
if((state_val_37665 === (37))){
var inst_37647 = (state_37664[(2)]);
var state_37664__$1 = state_37664;
var statearr_37708_37751 = state_37664__$1;
(statearr_37708_37751[(2)] = inst_37647);

(statearr_37708_37751[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37665 === (8))){
var inst_37586 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37664__$1 = state_37664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37664__$1,(11),inst_37586);
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
});})(c__29843__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29731__auto__,c__29843__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29732__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29732__auto____0 = (function (){
var statearr_37712 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37712[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29732__auto__);

(statearr_37712[(1)] = (1));

return statearr_37712;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29732__auto____1 = (function (state_37664){
while(true){
var ret_value__29733__auto__ = (function (){try{while(true){
var result__29734__auto__ = switch__29731__auto__.call(null,state_37664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29734__auto__;
}
break;
}
}catch (e37713){if((e37713 instanceof Object)){
var ex__29735__auto__ = e37713;
var statearr_37714_37752 = state_37664;
(statearr_37714_37752[(5)] = ex__29735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37753 = state_37664;
state_37664 = G__37753;
continue;
} else {
return ret_value__29733__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29732__auto__ = function(state_37664){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29732__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29732__auto____1.call(this,state_37664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29732__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29732__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29732__auto__;
})()
;})(switch__29731__auto__,c__29843__auto__,msg_hist,msg_names,msg))
})();
var state__29845__auto__ = (function (){var statearr_37715 = f__29844__auto__.call(null);
(statearr_37715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29843__auto__);

return statearr_37715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29845__auto__);
});})(c__29843__auto__,msg_hist,msg_names,msg))
);

return c__29843__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29843__auto___37816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29843__auto___37816,ch){
return (function (){
var f__29844__auto__ = (function (){var switch__29731__auto__ = ((function (c__29843__auto___37816,ch){
return (function (state_37799){
var state_val_37800 = (state_37799[(1)]);
if((state_val_37800 === (1))){
var state_37799__$1 = state_37799;
var statearr_37801_37817 = state_37799__$1;
(statearr_37801_37817[(2)] = null);

(statearr_37801_37817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37800 === (2))){
var state_37799__$1 = state_37799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37799__$1,(4),ch);
} else {
if((state_val_37800 === (3))){
var inst_37797 = (state_37799[(2)]);
var state_37799__$1 = state_37799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37799__$1,inst_37797);
} else {
if((state_val_37800 === (4))){
var inst_37787 = (state_37799[(7)]);
var inst_37787__$1 = (state_37799[(2)]);
var state_37799__$1 = (function (){var statearr_37802 = state_37799;
(statearr_37802[(7)] = inst_37787__$1);

return statearr_37802;
})();
if(cljs.core.truth_(inst_37787__$1)){
var statearr_37803_37818 = state_37799__$1;
(statearr_37803_37818[(1)] = (5));

} else {
var statearr_37804_37819 = state_37799__$1;
(statearr_37804_37819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37800 === (5))){
var inst_37787 = (state_37799[(7)]);
var inst_37789 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37787);
var state_37799__$1 = state_37799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37799__$1,(8),inst_37789);
} else {
if((state_val_37800 === (6))){
var state_37799__$1 = state_37799;
var statearr_37805_37820 = state_37799__$1;
(statearr_37805_37820[(2)] = null);

(statearr_37805_37820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37800 === (7))){
var inst_37795 = (state_37799[(2)]);
var state_37799__$1 = state_37799;
var statearr_37806_37821 = state_37799__$1;
(statearr_37806_37821[(2)] = inst_37795);

(statearr_37806_37821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37800 === (8))){
var inst_37791 = (state_37799[(2)]);
var state_37799__$1 = (function (){var statearr_37807 = state_37799;
(statearr_37807[(8)] = inst_37791);

return statearr_37807;
})();
var statearr_37808_37822 = state_37799__$1;
(statearr_37808_37822[(2)] = null);

(statearr_37808_37822[(1)] = (2));


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
});})(c__29843__auto___37816,ch))
;
return ((function (switch__29731__auto__,c__29843__auto___37816,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29732__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29732__auto____0 = (function (){
var statearr_37812 = [null,null,null,null,null,null,null,null,null];
(statearr_37812[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29732__auto__);

(statearr_37812[(1)] = (1));

return statearr_37812;
});
var figwheel$client$heads_up_plugin_$_state_machine__29732__auto____1 = (function (state_37799){
while(true){
var ret_value__29733__auto__ = (function (){try{while(true){
var result__29734__auto__ = switch__29731__auto__.call(null,state_37799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29734__auto__;
}
break;
}
}catch (e37813){if((e37813 instanceof Object)){
var ex__29735__auto__ = e37813;
var statearr_37814_37823 = state_37799;
(statearr_37814_37823[(5)] = ex__29735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37824 = state_37799;
state_37799 = G__37824;
continue;
} else {
return ret_value__29733__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29732__auto__ = function(state_37799){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29732__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29732__auto____1.call(this,state_37799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29732__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29732__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29732__auto__;
})()
;})(switch__29731__auto__,c__29843__auto___37816,ch))
})();
var state__29845__auto__ = (function (){var statearr_37815 = f__29844__auto__.call(null);
(statearr_37815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29843__auto___37816);

return statearr_37815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29845__auto__);
});})(c__29843__auto___37816,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29843__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29843__auto__){
return (function (){
var f__29844__auto__ = (function (){var switch__29731__auto__ = ((function (c__29843__auto__){
return (function (state_37845){
var state_val_37846 = (state_37845[(1)]);
if((state_val_37846 === (1))){
var inst_37840 = cljs.core.async.timeout.call(null,(3000));
var state_37845__$1 = state_37845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37845__$1,(2),inst_37840);
} else {
if((state_val_37846 === (2))){
var inst_37842 = (state_37845[(2)]);
var inst_37843 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37845__$1 = (function (){var statearr_37847 = state_37845;
(statearr_37847[(7)] = inst_37842);

return statearr_37847;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37845__$1,inst_37843);
} else {
return null;
}
}
});})(c__29843__auto__))
;
return ((function (switch__29731__auto__,c__29843__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29732__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29732__auto____0 = (function (){
var statearr_37851 = [null,null,null,null,null,null,null,null];
(statearr_37851[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29732__auto__);

(statearr_37851[(1)] = (1));

return statearr_37851;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29732__auto____1 = (function (state_37845){
while(true){
var ret_value__29733__auto__ = (function (){try{while(true){
var result__29734__auto__ = switch__29731__auto__.call(null,state_37845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29734__auto__;
}
break;
}
}catch (e37852){if((e37852 instanceof Object)){
var ex__29735__auto__ = e37852;
var statearr_37853_37855 = state_37845;
(statearr_37853_37855[(5)] = ex__29735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37856 = state_37845;
state_37845 = G__37856;
continue;
} else {
return ret_value__29733__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29732__auto__ = function(state_37845){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29732__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29732__auto____1.call(this,state_37845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29732__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29732__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29732__auto__;
})()
;})(switch__29731__auto__,c__29843__auto__))
})();
var state__29845__auto__ = (function (){var statearr_37854 = f__29844__auto__.call(null);
(statearr_37854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29843__auto__);

return statearr_37854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29845__auto__);
});})(c__29843__auto__))
);

return c__29843__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29843__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29843__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__29844__auto__ = (function (){var switch__29731__auto__ = ((function (c__29843__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37879){
var state_val_37880 = (state_37879[(1)]);
if((state_val_37880 === (1))){
var inst_37873 = cljs.core.async.timeout.call(null,(2000));
var state_37879__$1 = state_37879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37879__$1,(2),inst_37873);
} else {
if((state_val_37880 === (2))){
var inst_37875 = (state_37879[(2)]);
var inst_37876 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_37877 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37876);
var state_37879__$1 = (function (){var statearr_37881 = state_37879;
(statearr_37881[(7)] = inst_37875);

return statearr_37881;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37879__$1,inst_37877);
} else {
return null;
}
}
});})(c__29843__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__29731__auto__,c__29843__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29732__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29732__auto____0 = (function (){
var statearr_37885 = [null,null,null,null,null,null,null,null];
(statearr_37885[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29732__auto__);

(statearr_37885[(1)] = (1));

return statearr_37885;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29732__auto____1 = (function (state_37879){
while(true){
var ret_value__29733__auto__ = (function (){try{while(true){
var result__29734__auto__ = switch__29731__auto__.call(null,state_37879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29734__auto__;
}
break;
}
}catch (e37886){if((e37886 instanceof Object)){
var ex__29735__auto__ = e37886;
var statearr_37887_37889 = state_37879;
(statearr_37887_37889[(5)] = ex__29735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37890 = state_37879;
state_37879 = G__37890;
continue;
} else {
return ret_value__29733__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29732__auto__ = function(state_37879){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29732__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29732__auto____1.call(this,state_37879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29732__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29732__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29732__auto__;
})()
;})(switch__29731__auto__,c__29843__auto__,figwheel_version,temp__4657__auto__))
})();
var state__29845__auto__ = (function (){var statearr_37888 = f__29844__auto__.call(null);
(statearr_37888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29843__auto__);

return statearr_37888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29845__auto__);
});})(c__29843__auto__,figwheel_version,temp__4657__auto__))
);

return c__29843__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37891){
var map__37895 = p__37891;
var map__37895__$1 = ((((!((map__37895 == null)))?((((map__37895.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37895.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37895):map__37895);
var file = cljs.core.get.call(null,map__37895__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37895__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37895__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37897 = "";
var G__37897__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__37897),cljs.core.str("file "),cljs.core.str(file)].join(''):G__37897);
var G__37897__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__37897__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__37897__$1);
if(cljs.core.truth_((function (){var and__25131__auto__ = line;
if(cljs.core.truth_(and__25131__auto__)){
return column;
} else {
return and__25131__auto__;
}
})())){
return [cljs.core.str(G__37897__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__37897__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37898){
var map__37905 = p__37898;
var map__37905__$1 = ((((!((map__37905 == null)))?((((map__37905.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37905.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37905):map__37905);
var ed = map__37905__$1;
var formatted_exception = cljs.core.get.call(null,map__37905__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37905__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37905__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37907_37911 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37908_37912 = null;
var count__37909_37913 = (0);
var i__37910_37914 = (0);
while(true){
if((i__37910_37914 < count__37909_37913)){
var msg_37915 = cljs.core._nth.call(null,chunk__37908_37912,i__37910_37914);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37915);

var G__37916 = seq__37907_37911;
var G__37917 = chunk__37908_37912;
var G__37918 = count__37909_37913;
var G__37919 = (i__37910_37914 + (1));
seq__37907_37911 = G__37916;
chunk__37908_37912 = G__37917;
count__37909_37913 = G__37918;
i__37910_37914 = G__37919;
continue;
} else {
var temp__4657__auto___37920 = cljs.core.seq.call(null,seq__37907_37911);
if(temp__4657__auto___37920){
var seq__37907_37921__$1 = temp__4657__auto___37920;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37907_37921__$1)){
var c__25954__auto___37922 = cljs.core.chunk_first.call(null,seq__37907_37921__$1);
var G__37923 = cljs.core.chunk_rest.call(null,seq__37907_37921__$1);
var G__37924 = c__25954__auto___37922;
var G__37925 = cljs.core.count.call(null,c__25954__auto___37922);
var G__37926 = (0);
seq__37907_37911 = G__37923;
chunk__37908_37912 = G__37924;
count__37909_37913 = G__37925;
i__37910_37914 = G__37926;
continue;
} else {
var msg_37927 = cljs.core.first.call(null,seq__37907_37921__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37927);

var G__37928 = cljs.core.next.call(null,seq__37907_37921__$1);
var G__37929 = null;
var G__37930 = (0);
var G__37931 = (0);
seq__37907_37911 = G__37928;
chunk__37908_37912 = G__37929;
count__37909_37913 = G__37930;
i__37910_37914 = G__37931;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37932){
var map__37935 = p__37932;
var map__37935__$1 = ((((!((map__37935 == null)))?((((map__37935.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37935.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37935):map__37935);
var w = map__37935__$1;
var message = cljs.core.get.call(null,map__37935__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__25131__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25131__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25131__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37947 = cljs.core.seq.call(null,plugins);
var chunk__37948 = null;
var count__37949 = (0);
var i__37950 = (0);
while(true){
if((i__37950 < count__37949)){
var vec__37951 = cljs.core._nth.call(null,chunk__37948,i__37950);
var k = cljs.core.nth.call(null,vec__37951,(0),null);
var plugin = cljs.core.nth.call(null,vec__37951,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37957 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37947,chunk__37948,count__37949,i__37950,pl_37957,vec__37951,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37957.call(null,msg_hist);
});})(seq__37947,chunk__37948,count__37949,i__37950,pl_37957,vec__37951,k,plugin))
);
} else {
}

var G__37958 = seq__37947;
var G__37959 = chunk__37948;
var G__37960 = count__37949;
var G__37961 = (i__37950 + (1));
seq__37947 = G__37958;
chunk__37948 = G__37959;
count__37949 = G__37960;
i__37950 = G__37961;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37947);
if(temp__4657__auto__){
var seq__37947__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37947__$1)){
var c__25954__auto__ = cljs.core.chunk_first.call(null,seq__37947__$1);
var G__37962 = cljs.core.chunk_rest.call(null,seq__37947__$1);
var G__37963 = c__25954__auto__;
var G__37964 = cljs.core.count.call(null,c__25954__auto__);
var G__37965 = (0);
seq__37947 = G__37962;
chunk__37948 = G__37963;
count__37949 = G__37964;
i__37950 = G__37965;
continue;
} else {
var vec__37954 = cljs.core.first.call(null,seq__37947__$1);
var k = cljs.core.nth.call(null,vec__37954,(0),null);
var plugin = cljs.core.nth.call(null,vec__37954,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37966 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37947,chunk__37948,count__37949,i__37950,pl_37966,vec__37954,k,plugin,seq__37947__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37966.call(null,msg_hist);
});})(seq__37947,chunk__37948,count__37949,i__37950,pl_37966,vec__37954,k,plugin,seq__37947__$1,temp__4657__auto__))
);
} else {
}

var G__37967 = cljs.core.next.call(null,seq__37947__$1);
var G__37968 = null;
var G__37969 = (0);
var G__37970 = (0);
seq__37947 = G__37967;
chunk__37948 = G__37968;
count__37949 = G__37969;
i__37950 = G__37970;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args37971 = [];
var len__26218__auto___37978 = arguments.length;
var i__26219__auto___37979 = (0);
while(true){
if((i__26219__auto___37979 < len__26218__auto___37978)){
args37971.push((arguments[i__26219__auto___37979]));

var G__37980 = (i__26219__auto___37979 + (1));
i__26219__auto___37979 = G__37980;
continue;
} else {
}
break;
}

var G__37973 = args37971.length;
switch (G__37973) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37971.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37974_37982 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37975_37983 = null;
var count__37976_37984 = (0);
var i__37977_37985 = (0);
while(true){
if((i__37977_37985 < count__37976_37984)){
var msg_37986 = cljs.core._nth.call(null,chunk__37975_37983,i__37977_37985);
figwheel.client.socket.handle_incoming_message.call(null,msg_37986);

var G__37987 = seq__37974_37982;
var G__37988 = chunk__37975_37983;
var G__37989 = count__37976_37984;
var G__37990 = (i__37977_37985 + (1));
seq__37974_37982 = G__37987;
chunk__37975_37983 = G__37988;
count__37976_37984 = G__37989;
i__37977_37985 = G__37990;
continue;
} else {
var temp__4657__auto___37991 = cljs.core.seq.call(null,seq__37974_37982);
if(temp__4657__auto___37991){
var seq__37974_37992__$1 = temp__4657__auto___37991;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37974_37992__$1)){
var c__25954__auto___37993 = cljs.core.chunk_first.call(null,seq__37974_37992__$1);
var G__37994 = cljs.core.chunk_rest.call(null,seq__37974_37992__$1);
var G__37995 = c__25954__auto___37993;
var G__37996 = cljs.core.count.call(null,c__25954__auto___37993);
var G__37997 = (0);
seq__37974_37982 = G__37994;
chunk__37975_37983 = G__37995;
count__37976_37984 = G__37996;
i__37977_37985 = G__37997;
continue;
} else {
var msg_37998 = cljs.core.first.call(null,seq__37974_37992__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37998);

var G__37999 = cljs.core.next.call(null,seq__37974_37992__$1);
var G__38000 = null;
var G__38001 = (0);
var G__38002 = (0);
seq__37974_37982 = G__37999;
chunk__37975_37983 = G__38000;
count__37976_37984 = G__38001;
i__37977_37985 = G__38002;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__26225__auto__ = [];
var len__26218__auto___38007 = arguments.length;
var i__26219__auto___38008 = (0);
while(true){
if((i__26219__auto___38008 < len__26218__auto___38007)){
args__26225__auto__.push((arguments[i__26219__auto___38008]));

var G__38009 = (i__26219__auto___38008 + (1));
i__26219__auto___38008 = G__38009;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((0) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26226__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38004){
var map__38005 = p__38004;
var map__38005__$1 = ((((!((map__38005 == null)))?((((map__38005.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38005.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38005):map__38005);
var opts = map__38005__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38003){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38003));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38011){if((e38011 instanceof Error)){
var e = e38011;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38011;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__38015){
var map__38016 = p__38015;
var map__38016__$1 = ((((!((map__38016 == null)))?((((map__38016.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38016.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38016):map__38016);
var msg_name = cljs.core.get.call(null,map__38016__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1489243602507