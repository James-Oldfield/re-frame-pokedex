// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args29888 = [];
var len__26218__auto___29894 = arguments.length;
var i__26219__auto___29895 = (0);
while(true){
if((i__26219__auto___29895 < len__26218__auto___29894)){
args29888.push((arguments[i__26219__auto___29895]));

var G__29896 = (i__26219__auto___29895 + (1));
i__26219__auto___29895 = G__29896;
continue;
} else {
}
break;
}

var G__29890 = args29888.length;
switch (G__29890) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29888.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async29891 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29891 = (function (f,blockable,meta29892){
this.f = f;
this.blockable = blockable;
this.meta29892 = meta29892;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29893,meta29892__$1){
var self__ = this;
var _29893__$1 = this;
return (new cljs.core.async.t_cljs$core$async29891(self__.f,self__.blockable,meta29892__$1));
});

cljs.core.async.t_cljs$core$async29891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29893){
var self__ = this;
var _29893__$1 = this;
return self__.meta29892;
});

cljs.core.async.t_cljs$core$async29891.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29891.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29891.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29891.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29891.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29892","meta29892",-365611961,null)], null);
});

cljs.core.async.t_cljs$core$async29891.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29891.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29891";

cljs.core.async.t_cljs$core$async29891.cljs$lang$ctorPrWriter = (function (this__25749__auto__,writer__25750__auto__,opt__25751__auto__){
return cljs.core._write.call(null,writer__25750__auto__,"cljs.core.async/t_cljs$core$async29891");
});

cljs.core.async.__GT_t_cljs$core$async29891 = (function cljs$core$async$__GT_t_cljs$core$async29891(f__$1,blockable__$1,meta29892){
return (new cljs.core.async.t_cljs$core$async29891(f__$1,blockable__$1,meta29892));
});

}

return (new cljs.core.async.t_cljs$core$async29891(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args29900 = [];
var len__26218__auto___29903 = arguments.length;
var i__26219__auto___29904 = (0);
while(true){
if((i__26219__auto___29904 < len__26218__auto___29903)){
args29900.push((arguments[i__26219__auto___29904]));

var G__29905 = (i__26219__auto___29904 + (1));
i__26219__auto___29904 = G__29905;
continue;
} else {
}
break;
}

var G__29902 = args29900.length;
switch (G__29902) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29900.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args29907 = [];
var len__26218__auto___29910 = arguments.length;
var i__26219__auto___29911 = (0);
while(true){
if((i__26219__auto___29911 < len__26218__auto___29910)){
args29907.push((arguments[i__26219__auto___29911]));

var G__29912 = (i__26219__auto___29911 + (1));
i__26219__auto___29911 = G__29912;
continue;
} else {
}
break;
}

var G__29909 = args29907.length;
switch (G__29909) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29907.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args29914 = [];
var len__26218__auto___29917 = arguments.length;
var i__26219__auto___29918 = (0);
while(true){
if((i__26219__auto___29918 < len__26218__auto___29917)){
args29914.push((arguments[i__26219__auto___29918]));

var G__29919 = (i__26219__auto___29918 + (1));
i__26219__auto___29918 = G__29919;
continue;
} else {
}
break;
}

var G__29916 = args29914.length;
switch (G__29916) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29914.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29921 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29921);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29921,ret){
return (function (){
return fn1.call(null,val_29921);
});})(val_29921,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args29922 = [];
var len__26218__auto___29925 = arguments.length;
var i__26219__auto___29926 = (0);
while(true){
if((i__26219__auto___29926 < len__26218__auto___29925)){
args29922.push((arguments[i__26219__auto___29926]));

var G__29927 = (i__26219__auto___29926 + (1));
i__26219__auto___29926 = G__29927;
continue;
} else {
}
break;
}

var G__29924 = args29922.length;
switch (G__29924) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29922.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__26058__auto___29929 = n;
var x_29930 = (0);
while(true){
if((x_29930 < n__26058__auto___29929)){
(a[x_29930] = (0));

var G__29931 = (x_29930 + (1));
x_29930 = G__29931;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__29932 = (i + (1));
i = G__29932;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async29936 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29936 = (function (alt_flag,flag,meta29937){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta29937 = meta29937;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29938,meta29937__$1){
var self__ = this;
var _29938__$1 = this;
return (new cljs.core.async.t_cljs$core$async29936(self__.alt_flag,self__.flag,meta29937__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29936.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29938){
var self__ = this;
var _29938__$1 = this;
return self__.meta29937;
});})(flag))
;

cljs.core.async.t_cljs$core$async29936.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29936.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29936.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29936.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29936.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29937","meta29937",112250215,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29936.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29936.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29936";

cljs.core.async.t_cljs$core$async29936.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25749__auto__,writer__25750__auto__,opt__25751__auto__){
return cljs.core._write.call(null,writer__25750__auto__,"cljs.core.async/t_cljs$core$async29936");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async29936 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29936(alt_flag__$1,flag__$1,meta29937){
return (new cljs.core.async.t_cljs$core$async29936(alt_flag__$1,flag__$1,meta29937));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29936(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async29942 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29942 = (function (alt_handler,flag,cb,meta29943){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta29943 = meta29943;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29944,meta29943__$1){
var self__ = this;
var _29944__$1 = this;
return (new cljs.core.async.t_cljs$core$async29942(self__.alt_handler,self__.flag,self__.cb,meta29943__$1));
});

cljs.core.async.t_cljs$core$async29942.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29944){
var self__ = this;
var _29944__$1 = this;
return self__.meta29943;
});

cljs.core.async.t_cljs$core$async29942.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29942.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29942.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29942.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29942.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29943","meta29943",1623627822,null)], null);
});

cljs.core.async.t_cljs$core$async29942.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29942.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29942";

cljs.core.async.t_cljs$core$async29942.cljs$lang$ctorPrWriter = (function (this__25749__auto__,writer__25750__auto__,opt__25751__auto__){
return cljs.core._write.call(null,writer__25750__auto__,"cljs.core.async/t_cljs$core$async29942");
});

cljs.core.async.__GT_t_cljs$core$async29942 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29942(alt_handler__$1,flag__$1,cb__$1,meta29943){
return (new cljs.core.async.t_cljs$core$async29942(alt_handler__$1,flag__$1,cb__$1,meta29943));
});

}

return (new cljs.core.async.t_cljs$core$async29942(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29945_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29945_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29946_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29946_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25143__auto__ = wport;
if(cljs.core.truth_(or__25143__auto__)){
return or__25143__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29947 = (i + (1));
i = G__29947;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25143__auto__ = ret;
if(cljs.core.truth_(or__25143__auto__)){
return or__25143__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__25131__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25131__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25131__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__26225__auto__ = [];
var len__26218__auto___29953 = arguments.length;
var i__26219__auto___29954 = (0);
while(true){
if((i__26219__auto___29954 < len__26218__auto___29953)){
args__26225__auto__.push((arguments[i__26219__auto___29954]));

var G__29955 = (i__26219__auto___29954 + (1));
i__26219__auto___29954 = G__29955;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((1) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26226__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29950){
var map__29951 = p__29950;
var map__29951__$1 = ((((!((map__29951 == null)))?((((map__29951.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29951.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29951):map__29951);
var opts = map__29951__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29948){
var G__29949 = cljs.core.first.call(null,seq29948);
var seq29948__$1 = cljs.core.next.call(null,seq29948);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29949,seq29948__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args29956 = [];
var len__26218__auto___30006 = arguments.length;
var i__26219__auto___30007 = (0);
while(true){
if((i__26219__auto___30007 < len__26218__auto___30006)){
args29956.push((arguments[i__26219__auto___30007]));

var G__30008 = (i__26219__auto___30007 + (1));
i__26219__auto___30007 = G__30008;
continue;
} else {
}
break;
}

var G__29958 = args29956.length;
switch (G__29958) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29956.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29843__auto___30010 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29843__auto___30010){
return (function (){
var f__29844__auto__ = (function (){var switch__29731__auto__ = ((function (c__29843__auto___30010){
return (function (state_29982){
var state_val_29983 = (state_29982[(1)]);
if((state_val_29983 === (7))){
var inst_29978 = (state_29982[(2)]);
var state_29982__$1 = state_29982;
var statearr_29984_30011 = state_29982__$1;
(statearr_29984_30011[(2)] = inst_29978);

(statearr_29984_30011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29983 === (1))){
var state_29982__$1 = state_29982;
var statearr_29985_30012 = state_29982__$1;
(statearr_29985_30012[(2)] = null);

(statearr_29985_30012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29983 === (4))){
var inst_29961 = (state_29982[(7)]);
var inst_29961__$1 = (state_29982[(2)]);
var inst_29962 = (inst_29961__$1 == null);
var state_29982__$1 = (function (){var statearr_29986 = state_29982;
(statearr_29986[(7)] = inst_29961__$1);

return statearr_29986;
})();
if(cljs.core.truth_(inst_29962)){
var statearr_29987_30013 = state_29982__$1;
(statearr_29987_30013[(1)] = (5));

} else {
var statearr_29988_30014 = state_29982__$1;
(statearr_29988_30014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29983 === (13))){
var state_29982__$1 = state_29982;
var statearr_29989_30015 = state_29982__$1;
(statearr_29989_30015[(2)] = null);

(statearr_29989_30015[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29983 === (6))){
var inst_29961 = (state_29982[(7)]);
var state_29982__$1 = state_29982;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29982__$1,(11),to,inst_29961);
} else {
if((state_val_29983 === (3))){
var inst_29980 = (state_29982[(2)]);
var state_29982__$1 = state_29982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29982__$1,inst_29980);
} else {
if((state_val_29983 === (12))){
var state_29982__$1 = state_29982;
var statearr_29990_30016 = state_29982__$1;
(statearr_29990_30016[(2)] = null);

(statearr_29990_30016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29983 === (2))){
var state_29982__$1 = state_29982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29982__$1,(4),from);
} else {
if((state_val_29983 === (11))){
var inst_29971 = (state_29982[(2)]);
var state_29982__$1 = state_29982;
if(cljs.core.truth_(inst_29971)){
var statearr_29991_30017 = state_29982__$1;
(statearr_29991_30017[(1)] = (12));

} else {
var statearr_29992_30018 = state_29982__$1;
(statearr_29992_30018[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29983 === (9))){
var state_29982__$1 = state_29982;
var statearr_29993_30019 = state_29982__$1;
(statearr_29993_30019[(2)] = null);

(statearr_29993_30019[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29983 === (5))){
var state_29982__$1 = state_29982;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29994_30020 = state_29982__$1;
(statearr_29994_30020[(1)] = (8));

} else {
var statearr_29995_30021 = state_29982__$1;
(statearr_29995_30021[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29983 === (14))){
var inst_29976 = (state_29982[(2)]);
var state_29982__$1 = state_29982;
var statearr_29996_30022 = state_29982__$1;
(statearr_29996_30022[(2)] = inst_29976);

(statearr_29996_30022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29983 === (10))){
var inst_29968 = (state_29982[(2)]);
var state_29982__$1 = state_29982;
var statearr_29997_30023 = state_29982__$1;
(statearr_29997_30023[(2)] = inst_29968);

(statearr_29997_30023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29983 === (8))){
var inst_29965 = cljs.core.async.close_BANG_.call(null,to);
var state_29982__$1 = state_29982;
var statearr_29998_30024 = state_29982__$1;
(statearr_29998_30024[(2)] = inst_29965);

(statearr_29998_30024[(1)] = (10));


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
});})(c__29843__auto___30010))
;
return ((function (switch__29731__auto__,c__29843__auto___30010){
return (function() {
var cljs$core$async$state_machine__29732__auto__ = null;
var cljs$core$async$state_machine__29732__auto____0 = (function (){
var statearr_30002 = [null,null,null,null,null,null,null,null];
(statearr_30002[(0)] = cljs$core$async$state_machine__29732__auto__);

(statearr_30002[(1)] = (1));

return statearr_30002;
});
var cljs$core$async$state_machine__29732__auto____1 = (function (state_29982){
while(true){
var ret_value__29733__auto__ = (function (){try{while(true){
var result__29734__auto__ = switch__29731__auto__.call(null,state_29982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29734__auto__;
}
break;
}
}catch (e30003){if((e30003 instanceof Object)){
var ex__29735__auto__ = e30003;
var statearr_30004_30025 = state_29982;
(statearr_30004_30025[(5)] = ex__29735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30026 = state_29982;
state_29982 = G__30026;
continue;
} else {
return ret_value__29733__auto__;
}
break;
}
});
cljs$core$async$state_machine__29732__auto__ = function(state_29982){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29732__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29732__auto____1.call(this,state_29982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29732__auto____0;
cljs$core$async$state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29732__auto____1;
return cljs$core$async$state_machine__29732__auto__;
})()
;})(switch__29731__auto__,c__29843__auto___30010))
})();
var state__29845__auto__ = (function (){var statearr_30005 = f__29844__auto__.call(null);
(statearr_30005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29843__auto___30010);

return statearr_30005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29845__auto__);
});})(c__29843__auto___30010))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__30214){
var vec__30215 = p__30214;
var v = cljs.core.nth.call(null,vec__30215,(0),null);
var p = cljs.core.nth.call(null,vec__30215,(1),null);
var job = vec__30215;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29843__auto___30401 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29843__auto___30401,res,vec__30215,v,p,job,jobs,results){
return (function (){
var f__29844__auto__ = (function (){var switch__29731__auto__ = ((function (c__29843__auto___30401,res,vec__30215,v,p,job,jobs,results){
return (function (state_30222){
var state_val_30223 = (state_30222[(1)]);
if((state_val_30223 === (1))){
var state_30222__$1 = state_30222;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30222__$1,(2),res,v);
} else {
if((state_val_30223 === (2))){
var inst_30219 = (state_30222[(2)]);
var inst_30220 = cljs.core.async.close_BANG_.call(null,res);
var state_30222__$1 = (function (){var statearr_30224 = state_30222;
(statearr_30224[(7)] = inst_30219);

return statearr_30224;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30222__$1,inst_30220);
} else {
return null;
}
}
});})(c__29843__auto___30401,res,vec__30215,v,p,job,jobs,results))
;
return ((function (switch__29731__auto__,c__29843__auto___30401,res,vec__30215,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29732__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29732__auto____0 = (function (){
var statearr_30228 = [null,null,null,null,null,null,null,null];
(statearr_30228[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29732__auto__);

(statearr_30228[(1)] = (1));

return statearr_30228;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29732__auto____1 = (function (state_30222){
while(true){
var ret_value__29733__auto__ = (function (){try{while(true){
var result__29734__auto__ = switch__29731__auto__.call(null,state_30222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29734__auto__;
}
break;
}
}catch (e30229){if((e30229 instanceof Object)){
var ex__29735__auto__ = e30229;
var statearr_30230_30402 = state_30222;
(statearr_30230_30402[(5)] = ex__29735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30403 = state_30222;
state_30222 = G__30403;
continue;
} else {
return ret_value__29733__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29732__auto__ = function(state_30222){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29732__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29732__auto____1.call(this,state_30222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29732__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29732__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29732__auto__;
})()
;})(switch__29731__auto__,c__29843__auto___30401,res,vec__30215,v,p,job,jobs,results))
})();
var state__29845__auto__ = (function (){var statearr_30231 = f__29844__auto__.call(null);
(statearr_30231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29843__auto___30401);

return statearr_30231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29845__auto__);
});})(c__29843__auto___30401,res,vec__30215,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30232){
var vec__30233 = p__30232;
var v = cljs.core.nth.call(null,vec__30233,(0),null);
var p = cljs.core.nth.call(null,vec__30233,(1),null);
var job = vec__30233;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__26058__auto___30404 = n;
var __30405 = (0);
while(true){
if((__30405 < n__26058__auto___30404)){
var G__30236_30406 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30236_30406) {
case "compute":
var c__29843__auto___30408 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30405,c__29843__auto___30408,G__30236_30406,n__26058__auto___30404,jobs,results,process,async){
return (function (){
var f__29844__auto__ = (function (){var switch__29731__auto__ = ((function (__30405,c__29843__auto___30408,G__30236_30406,n__26058__auto___30404,jobs,results,process,async){
return (function (state_30249){
var state_val_30250 = (state_30249[(1)]);
if((state_val_30250 === (1))){
var state_30249__$1 = state_30249;
var statearr_30251_30409 = state_30249__$1;
(statearr_30251_30409[(2)] = null);

(statearr_30251_30409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (2))){
var state_30249__$1 = state_30249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30249__$1,(4),jobs);
} else {
if((state_val_30250 === (3))){
var inst_30247 = (state_30249[(2)]);
var state_30249__$1 = state_30249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30249__$1,inst_30247);
} else {
if((state_val_30250 === (4))){
var inst_30239 = (state_30249[(2)]);
var inst_30240 = process.call(null,inst_30239);
var state_30249__$1 = state_30249;
if(cljs.core.truth_(inst_30240)){
var statearr_30252_30410 = state_30249__$1;
(statearr_30252_30410[(1)] = (5));

} else {
var statearr_30253_30411 = state_30249__$1;
(statearr_30253_30411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (5))){
var state_30249__$1 = state_30249;
var statearr_30254_30412 = state_30249__$1;
(statearr_30254_30412[(2)] = null);

(statearr_30254_30412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (6))){
var state_30249__$1 = state_30249;
var statearr_30255_30413 = state_30249__$1;
(statearr_30255_30413[(2)] = null);

(statearr_30255_30413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30250 === (7))){
var inst_30245 = (state_30249[(2)]);
var state_30249__$1 = state_30249;
var statearr_30256_30414 = state_30249__$1;
(statearr_30256_30414[(2)] = inst_30245);

(statearr_30256_30414[(1)] = (3));


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
});})(__30405,c__29843__auto___30408,G__30236_30406,n__26058__auto___30404,jobs,results,process,async))
;
return ((function (__30405,switch__29731__auto__,c__29843__auto___30408,G__30236_30406,n__26058__auto___30404,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29732__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29732__auto____0 = (function (){
var statearr_30260 = [null,null,null,null,null,null,null];
(statearr_30260[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29732__auto__);

(statearr_30260[(1)] = (1));

return statearr_30260;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29732__auto____1 = (function (state_30249){
while(true){
var ret_value__29733__auto__ = (function (){try{while(true){
var result__29734__auto__ = switch__29731__auto__.call(null,state_30249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29734__auto__;
}
break;
}
}catch (e30261){if((e30261 instanceof Object)){
var ex__29735__auto__ = e30261;
var statearr_30262_30415 = state_30249;
(statearr_30262_30415[(5)] = ex__29735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30416 = state_30249;
state_30249 = G__30416;
continue;
} else {
return ret_value__29733__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29732__auto__ = function(state_30249){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29732__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29732__auto____1.call(this,state_30249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29732__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29732__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29732__auto__;
})()
;})(__30405,switch__29731__auto__,c__29843__auto___30408,G__30236_30406,n__26058__auto___30404,jobs,results,process,async))
})();
var state__29845__auto__ = (function (){var statearr_30263 = f__29844__auto__.call(null);
(statearr_30263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29843__auto___30408);

return statearr_30263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29845__auto__);
});})(__30405,c__29843__auto___30408,G__30236_30406,n__26058__auto___30404,jobs,results,process,async))
);


break;
case "async":
var c__29843__auto___30417 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30405,c__29843__auto___30417,G__30236_30406,n__26058__auto___30404,jobs,results,process,async){
return (function (){
var f__29844__auto__ = (function (){var switch__29731__auto__ = ((function (__30405,c__29843__auto___30417,G__30236_30406,n__26058__auto___30404,jobs,results,process,async){
return (function (state_30276){
var state_val_30277 = (state_30276[(1)]);
if((state_val_30277 === (1))){
var state_30276__$1 = state_30276;
var statearr_30278_30418 = state_30276__$1;
(statearr_30278_30418[(2)] = null);

(statearr_30278_30418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30277 === (2))){
var state_30276__$1 = state_30276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30276__$1,(4),jobs);
} else {
if((state_val_30277 === (3))){
var inst_30274 = (state_30276[(2)]);
var state_30276__$1 = state_30276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30276__$1,inst_30274);
} else {
if((state_val_30277 === (4))){
var inst_30266 = (state_30276[(2)]);
var inst_30267 = async.call(null,inst_30266);
var state_30276__$1 = state_30276;
if(cljs.core.truth_(inst_30267)){
var statearr_30279_30419 = state_30276__$1;
(statearr_30279_30419[(1)] = (5));

} else {
var statearr_30280_30420 = state_30276__$1;
(statearr_30280_30420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30277 === (5))){
var state_30276__$1 = state_30276;
var statearr_30281_30421 = state_30276__$1;
(statearr_30281_30421[(2)] = null);

(statearr_30281_30421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30277 === (6))){
var state_30276__$1 = state_30276;
var statearr_30282_30422 = state_30276__$1;
(statearr_30282_30422[(2)] = null);

(statearr_30282_30422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30277 === (7))){
var inst_30272 = (state_30276[(2)]);
var state_30276__$1 = state_30276;
var statearr_30283_30423 = state_30276__$1;
(statearr_30283_30423[(2)] = inst_30272);

(statearr_30283_30423[(1)] = (3));


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
});})(__30405,c__29843__auto___30417,G__30236_30406,n__26058__auto___30404,jobs,results,process,async))
;
return ((function (__30405,switch__29731__auto__,c__29843__auto___30417,G__30236_30406,n__26058__auto___30404,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29732__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29732__auto____0 = (function (){
var statearr_30287 = [null,null,null,null,null,null,null];
(statearr_30287[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29732__auto__);

(statearr_30287[(1)] = (1));

return statearr_30287;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29732__auto____1 = (function (state_30276){
while(true){
var ret_value__29733__auto__ = (function (){try{while(true){
var result__29734__auto__ = switch__29731__auto__.call(null,state_30276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29734__auto__;
}
break;
}
}catch (e30288){if((e30288 instanceof Object)){
var ex__29735__auto__ = e30288;
var statearr_30289_30424 = state_30276;
(statearr_30289_30424[(5)] = ex__29735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30425 = state_30276;
state_30276 = G__30425;
continue;
} else {
return ret_value__29733__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29732__auto__ = function(state_30276){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29732__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29732__auto____1.call(this,state_30276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29732__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29732__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29732__auto__;
})()
;})(__30405,switch__29731__auto__,c__29843__auto___30417,G__30236_30406,n__26058__auto___30404,jobs,results,process,async))
})();
var state__29845__auto__ = (function (){var statearr_30290 = f__29844__auto__.call(null);
(statearr_30290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29843__auto___30417);

return statearr_30290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29845__auto__);
});})(__30405,c__29843__auto___30417,G__30236_30406,n__26058__auto___30404,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30426 = (__30405 + (1));
__30405 = G__30426;
continue;
} else {
}
break;
}

var c__29843__auto___30427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29843__auto___30427,jobs,results,process,async){
return (function (){
var f__29844__auto__ = (function (){var switch__29731__auto__ = ((function (c__29843__auto___30427,jobs,results,process,async){
return (function (state_30312){
var state_val_30313 = (state_30312[(1)]);
if((state_val_30313 === (1))){
var state_30312__$1 = state_30312;
var statearr_30314_30428 = state_30312__$1;
(statearr_30314_30428[(2)] = null);

(statearr_30314_30428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30313 === (2))){
var state_30312__$1 = state_30312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30312__$1,(4),from);
} else {
if((state_val_30313 === (3))){
var inst_30310 = (state_30312[(2)]);
var state_30312__$1 = state_30312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30312__$1,inst_30310);
} else {
if((state_val_30313 === (4))){
var inst_30293 = (state_30312[(7)]);
var inst_30293__$1 = (state_30312[(2)]);
var inst_30294 = (inst_30293__$1 == null);
var state_30312__$1 = (function (){var statearr_30315 = state_30312;
(statearr_30315[(7)] = inst_30293__$1);

return statearr_30315;
})();
if(cljs.core.truth_(inst_30294)){
var statearr_30316_30429 = state_30312__$1;
(statearr_30316_30429[(1)] = (5));

} else {
var statearr_30317_30430 = state_30312__$1;
(statearr_30317_30430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30313 === (5))){
var inst_30296 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30312__$1 = state_30312;
var statearr_30318_30431 = state_30312__$1;
(statearr_30318_30431[(2)] = inst_30296);

(statearr_30318_30431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30313 === (6))){
var inst_30293 = (state_30312[(7)]);
var inst_30298 = (state_30312[(8)]);
var inst_30298__$1 = cljs.core.async.chan.call(null,(1));
var inst_30299 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30300 = [inst_30293,inst_30298__$1];
var inst_30301 = (new cljs.core.PersistentVector(null,2,(5),inst_30299,inst_30300,null));
var state_30312__$1 = (function (){var statearr_30319 = state_30312;
(statearr_30319[(8)] = inst_30298__$1);

return statearr_30319;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30312__$1,(8),jobs,inst_30301);
} else {
if((state_val_30313 === (7))){
var inst_30308 = (state_30312[(2)]);
var state_30312__$1 = state_30312;
var statearr_30320_30432 = state_30312__$1;
(statearr_30320_30432[(2)] = inst_30308);

(statearr_30320_30432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30313 === (8))){
var inst_30298 = (state_30312[(8)]);
var inst_30303 = (state_30312[(2)]);
var state_30312__$1 = (function (){var statearr_30321 = state_30312;
(statearr_30321[(9)] = inst_30303);

return statearr_30321;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30312__$1,(9),results,inst_30298);
} else {
if((state_val_30313 === (9))){
var inst_30305 = (state_30312[(2)]);
var state_30312__$1 = (function (){var statearr_30322 = state_30312;
(statearr_30322[(10)] = inst_30305);

return statearr_30322;
})();
var statearr_30323_30433 = state_30312__$1;
(statearr_30323_30433[(2)] = null);

(statearr_30323_30433[(1)] = (2));


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
});})(c__29843__auto___30427,jobs,results,process,async))
;
return ((function (switch__29731__auto__,c__29843__auto___30427,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29732__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29732__auto____0 = (function (){
var statearr_30327 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30327[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29732__auto__);

(statearr_30327[(1)] = (1));

return statearr_30327;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29732__auto____1 = (function (state_30312){
while(true){
var ret_value__29733__auto__ = (function (){try{while(true){
var result__29734__auto__ = switch__29731__auto__.call(null,state_30312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29734__auto__;
}
break;
}
}catch (e30328){if((e30328 instanceof Object)){
var ex__29735__auto__ = e30328;
var statearr_30329_30434 = state_30312;
(statearr_30329_30434[(5)] = ex__29735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30435 = state_30312;
state_30312 = G__30435;
continue;
} else {
return ret_value__29733__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29732__auto__ = function(state_30312){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29732__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29732__auto____1.call(this,state_30312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29732__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29732__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29732__auto__;
})()
;})(switch__29731__auto__,c__29843__auto___30427,jobs,results,process,async))
})();
var state__29845__auto__ = (function (){var statearr_30330 = f__29844__auto__.call(null);
(statearr_30330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29843__auto___30427);

return statearr_30330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29845__auto__);
});})(c__29843__auto___30427,jobs,results,process,async))
);


var c__29843__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29843__auto__,jobs,results,process,async){
return (function (){
var f__29844__auto__ = (function (){var switch__29731__auto__ = ((function (c__29843__auto__,jobs,results,process,async){
return (function (state_30368){
var state_val_30369 = (state_30368[(1)]);
if((state_val_30369 === (7))){
var inst_30364 = (state_30368[(2)]);
var state_30368__$1 = state_30368;
var statearr_30370_30436 = state_30368__$1;
(statearr_30370_30436[(2)] = inst_30364);

(statearr_30370_30436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (20))){
var state_30368__$1 = state_30368;
var statearr_30371_30437 = state_30368__$1;
(statearr_30371_30437[(2)] = null);

(statearr_30371_30437[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (1))){
var state_30368__$1 = state_30368;
var statearr_30372_30438 = state_30368__$1;
(statearr_30372_30438[(2)] = null);

(statearr_30372_30438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (4))){
var inst_30333 = (state_30368[(7)]);
var inst_30333__$1 = (state_30368[(2)]);
var inst_30334 = (inst_30333__$1 == null);
var state_30368__$1 = (function (){var statearr_30373 = state_30368;
(statearr_30373[(7)] = inst_30333__$1);

return statearr_30373;
})();
if(cljs.core.truth_(inst_30334)){
var statearr_30374_30439 = state_30368__$1;
(statearr_30374_30439[(1)] = (5));

} else {
var statearr_30375_30440 = state_30368__$1;
(statearr_30375_30440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (15))){
var inst_30346 = (state_30368[(8)]);
var state_30368__$1 = state_30368;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30368__$1,(18),to,inst_30346);
} else {
if((state_val_30369 === (21))){
var inst_30359 = (state_30368[(2)]);
var state_30368__$1 = state_30368;
var statearr_30376_30441 = state_30368__$1;
(statearr_30376_30441[(2)] = inst_30359);

(statearr_30376_30441[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (13))){
var inst_30361 = (state_30368[(2)]);
var state_30368__$1 = (function (){var statearr_30377 = state_30368;
(statearr_30377[(9)] = inst_30361);

return statearr_30377;
})();
var statearr_30378_30442 = state_30368__$1;
(statearr_30378_30442[(2)] = null);

(statearr_30378_30442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (6))){
var inst_30333 = (state_30368[(7)]);
var state_30368__$1 = state_30368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30368__$1,(11),inst_30333);
} else {
if((state_val_30369 === (17))){
var inst_30354 = (state_30368[(2)]);
var state_30368__$1 = state_30368;
if(cljs.core.truth_(inst_30354)){
var statearr_30379_30443 = state_30368__$1;
(statearr_30379_30443[(1)] = (19));

} else {
var statearr_30380_30444 = state_30368__$1;
(statearr_30380_30444[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (3))){
var inst_30366 = (state_30368[(2)]);
var state_30368__$1 = state_30368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30368__$1,inst_30366);
} else {
if((state_val_30369 === (12))){
var inst_30343 = (state_30368[(10)]);
var state_30368__$1 = state_30368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30368__$1,(14),inst_30343);
} else {
if((state_val_30369 === (2))){
var state_30368__$1 = state_30368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30368__$1,(4),results);
} else {
if((state_val_30369 === (19))){
var state_30368__$1 = state_30368;
var statearr_30381_30445 = state_30368__$1;
(statearr_30381_30445[(2)] = null);

(statearr_30381_30445[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (11))){
var inst_30343 = (state_30368[(2)]);
var state_30368__$1 = (function (){var statearr_30382 = state_30368;
(statearr_30382[(10)] = inst_30343);

return statearr_30382;
})();
var statearr_30383_30446 = state_30368__$1;
(statearr_30383_30446[(2)] = null);

(statearr_30383_30446[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (9))){
var state_30368__$1 = state_30368;
var statearr_30384_30447 = state_30368__$1;
(statearr_30384_30447[(2)] = null);

(statearr_30384_30447[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (5))){
var state_30368__$1 = state_30368;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30385_30448 = state_30368__$1;
(statearr_30385_30448[(1)] = (8));

} else {
var statearr_30386_30449 = state_30368__$1;
(statearr_30386_30449[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (14))){
var inst_30348 = (state_30368[(11)]);
var inst_30346 = (state_30368[(8)]);
var inst_30346__$1 = (state_30368[(2)]);
var inst_30347 = (inst_30346__$1 == null);
var inst_30348__$1 = cljs.core.not.call(null,inst_30347);
var state_30368__$1 = (function (){var statearr_30387 = state_30368;
(statearr_30387[(11)] = inst_30348__$1);

(statearr_30387[(8)] = inst_30346__$1);

return statearr_30387;
})();
if(inst_30348__$1){
var statearr_30388_30450 = state_30368__$1;
(statearr_30388_30450[(1)] = (15));

} else {
var statearr_30389_30451 = state_30368__$1;
(statearr_30389_30451[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (16))){
var inst_30348 = (state_30368[(11)]);
var state_30368__$1 = state_30368;
var statearr_30390_30452 = state_30368__$1;
(statearr_30390_30452[(2)] = inst_30348);

(statearr_30390_30452[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (10))){
var inst_30340 = (state_30368[(2)]);
var state_30368__$1 = state_30368;
var statearr_30391_30453 = state_30368__$1;
(statearr_30391_30453[(2)] = inst_30340);

(statearr_30391_30453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (18))){
var inst_30351 = (state_30368[(2)]);
var state_30368__$1 = state_30368;
var statearr_30392_30454 = state_30368__$1;
(statearr_30392_30454[(2)] = inst_30351);

(statearr_30392_30454[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (8))){
var inst_30337 = cljs.core.async.close_BANG_.call(null,to);
var state_30368__$1 = state_30368;
var statearr_30393_30455 = state_30368__$1;
(statearr_30393_30455[(2)] = inst_30337);

(statearr_30393_30455[(1)] = (10));


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
});})(c__29843__auto__,jobs,results,process,async))
;
return ((function (switch__29731__auto__,c__29843__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29732__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29732__auto____0 = (function (){
var statearr_30397 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30397[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29732__auto__);

(statearr_30397[(1)] = (1));

return statearr_30397;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29732__auto____1 = (function (state_30368){
while(true){
var ret_value__29733__auto__ = (function (){try{while(true){
var result__29734__auto__ = switch__29731__auto__.call(null,state_30368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29734__auto__;
}
break;
}
}catch (e30398){if((e30398 instanceof Object)){
var ex__29735__auto__ = e30398;
var statearr_30399_30456 = state_30368;
(statearr_30399_30456[(5)] = ex__29735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30457 = state_30368;
state_30368 = G__30457;
continue;
} else {
return ret_value__29733__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29732__auto__ = function(state_30368){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29732__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29732__auto____1.call(this,state_30368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29732__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29732__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29732__auto__;
})()
;})(switch__29731__auto__,c__29843__auto__,jobs,results,process,async))
})();
var state__29845__auto__ = (function (){var statearr_30400 = f__29844__auto__.call(null);
(statearr_30400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29843__auto__);

return statearr_30400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29845__auto__);
});})(c__29843__auto__,jobs,results,process,async))
);

return c__29843__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args30458 = [];
var len__26218__auto___30461 = arguments.length;
var i__26219__auto___30462 = (0);
while(true){
if((i__26219__auto___30462 < len__26218__auto___30461)){
args30458.push((arguments[i__26219__auto___30462]));

var G__30463 = (i__26219__auto___30462 + (1));
i__26219__auto___30462 = G__30463;
continue;
} else {
}
break;
}

var G__30460 = args30458.length;
switch (G__30460) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30458.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args30465 = [];
var len__26218__auto___30468 = arguments.length;
var i__26219__auto___30469 = (0);
while(true){
if((i__26219__auto___30469 < len__26218__auto___30468)){
args30465.push((arguments[i__26219__auto___30469]));

var G__30470 = (i__26219__auto___30469 + (1));
i__26219__auto___30469 = G__30470;
continue;
} else {
}
break;
}

var G__30467 = args30465.length;
switch (G__30467) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30465.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args30472 = [];
var len__26218__auto___30525 = arguments.length;
var i__26219__auto___30526 = (0);
while(true){
if((i__26219__auto___30526 < len__26218__auto___30525)){
args30472.push((arguments[i__26219__auto___30526]));

var G__30527 = (i__26219__auto___30526 + (1));
i__26219__auto___30526 = G__30527;
continue;
} else {
}
break;
}

var G__30474 = args30472.length;
switch (G__30474) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30472.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29843__auto___30529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29843__auto___30529,tc,fc){
return (function (){
var f__29844__auto__ = (function (){var switch__29731__auto__ = ((function (c__29843__auto___30529,tc,fc){
return (function (state_30500){
var state_val_30501 = (state_30500[(1)]);
if((state_val_30501 === (7))){
var inst_30496 = (state_30500[(2)]);
var state_30500__$1 = state_30500;
var statearr_30502_30530 = state_30500__$1;
(statearr_30502_30530[(2)] = inst_30496);

(statearr_30502_30530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30501 === (1))){
var state_30500__$1 = state_30500;
var statearr_30503_30531 = state_30500__$1;
(statearr_30503_30531[(2)] = null);

(statearr_30503_30531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30501 === (4))){
var inst_30477 = (state_30500[(7)]);
var inst_30477__$1 = (state_30500[(2)]);
var inst_30478 = (inst_30477__$1 == null);
var state_30500__$1 = (function (){var statearr_30504 = state_30500;
(statearr_30504[(7)] = inst_30477__$1);

return statearr_30504;
})();
if(cljs.core.truth_(inst_30478)){
var statearr_30505_30532 = state_30500__$1;
(statearr_30505_30532[(1)] = (5));

} else {
var statearr_30506_30533 = state_30500__$1;
(statearr_30506_30533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30501 === (13))){
var state_30500__$1 = state_30500;
var statearr_30507_30534 = state_30500__$1;
(statearr_30507_30534[(2)] = null);

(statearr_30507_30534[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30501 === (6))){
var inst_30477 = (state_30500[(7)]);
var inst_30483 = p.call(null,inst_30477);
var state_30500__$1 = state_30500;
if(cljs.core.truth_(inst_30483)){
var statearr_30508_30535 = state_30500__$1;
(statearr_30508_30535[(1)] = (9));

} else {
var statearr_30509_30536 = state_30500__$1;
(statearr_30509_30536[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30501 === (3))){
var inst_30498 = (state_30500[(2)]);
var state_30500__$1 = state_30500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30500__$1,inst_30498);
} else {
if((state_val_30501 === (12))){
var state_30500__$1 = state_30500;
var statearr_30510_30537 = state_30500__$1;
(statearr_30510_30537[(2)] = null);

(statearr_30510_30537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30501 === (2))){
var state_30500__$1 = state_30500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30500__$1,(4),ch);
} else {
if((state_val_30501 === (11))){
var inst_30477 = (state_30500[(7)]);
var inst_30487 = (state_30500[(2)]);
var state_30500__$1 = state_30500;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30500__$1,(8),inst_30487,inst_30477);
} else {
if((state_val_30501 === (9))){
var state_30500__$1 = state_30500;
var statearr_30511_30538 = state_30500__$1;
(statearr_30511_30538[(2)] = tc);

(statearr_30511_30538[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30501 === (5))){
var inst_30480 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30481 = cljs.core.async.close_BANG_.call(null,fc);
var state_30500__$1 = (function (){var statearr_30512 = state_30500;
(statearr_30512[(8)] = inst_30480);

return statearr_30512;
})();
var statearr_30513_30539 = state_30500__$1;
(statearr_30513_30539[(2)] = inst_30481);

(statearr_30513_30539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30501 === (14))){
var inst_30494 = (state_30500[(2)]);
var state_30500__$1 = state_30500;
var statearr_30514_30540 = state_30500__$1;
(statearr_30514_30540[(2)] = inst_30494);

(statearr_30514_30540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30501 === (10))){
var state_30500__$1 = state_30500;
var statearr_30515_30541 = state_30500__$1;
(statearr_30515_30541[(2)] = fc);

(statearr_30515_30541[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30501 === (8))){
var inst_30489 = (state_30500[(2)]);
var state_30500__$1 = state_30500;
if(cljs.core.truth_(inst_30489)){
var statearr_30516_30542 = state_30500__$1;
(statearr_30516_30542[(1)] = (12));

} else {
var statearr_30517_30543 = state_30500__$1;
(statearr_30517_30543[(1)] = (13));

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
});})(c__29843__auto___30529,tc,fc))
;
return ((function (switch__29731__auto__,c__29843__auto___30529,tc,fc){
return (function() {
var cljs$core$async$state_machine__29732__auto__ = null;
var cljs$core$async$state_machine__29732__auto____0 = (function (){
var statearr_30521 = [null,null,null,null,null,null,null,null,null];
(statearr_30521[(0)] = cljs$core$async$state_machine__29732__auto__);

(statearr_30521[(1)] = (1));

return statearr_30521;
});
var cljs$core$async$state_machine__29732__auto____1 = (function (state_30500){
while(true){
var ret_value__29733__auto__ = (function (){try{while(true){
var result__29734__auto__ = switch__29731__auto__.call(null,state_30500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29734__auto__;
}
break;
}
}catch (e30522){if((e30522 instanceof Object)){
var ex__29735__auto__ = e30522;
var statearr_30523_30544 = state_30500;
(statearr_30523_30544[(5)] = ex__29735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30545 = state_30500;
state_30500 = G__30545;
continue;
} else {
return ret_value__29733__auto__;
}
break;
}
});
cljs$core$async$state_machine__29732__auto__ = function(state_30500){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29732__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29732__auto____1.call(this,state_30500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29732__auto____0;
cljs$core$async$state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29732__auto____1;
return cljs$core$async$state_machine__29732__auto__;
})()
;})(switch__29731__auto__,c__29843__auto___30529,tc,fc))
})();
var state__29845__auto__ = (function (){var statearr_30524 = f__29844__auto__.call(null);
(statearr_30524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29843__auto___30529);

return statearr_30524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29845__auto__);
});})(c__29843__auto___30529,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29843__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29843__auto__){
return (function (){
var f__29844__auto__ = (function (){var switch__29731__auto__ = ((function (c__29843__auto__){
return (function (state_30609){
var state_val_30610 = (state_30609[(1)]);
if((state_val_30610 === (7))){
var inst_30605 = (state_30609[(2)]);
var state_30609__$1 = state_30609;
var statearr_30611_30632 = state_30609__$1;
(statearr_30611_30632[(2)] = inst_30605);

(statearr_30611_30632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30610 === (1))){
var inst_30589 = init;
var state_30609__$1 = (function (){var statearr_30612 = state_30609;
(statearr_30612[(7)] = inst_30589);

return statearr_30612;
})();
var statearr_30613_30633 = state_30609__$1;
(statearr_30613_30633[(2)] = null);

(statearr_30613_30633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30610 === (4))){
var inst_30592 = (state_30609[(8)]);
var inst_30592__$1 = (state_30609[(2)]);
var inst_30593 = (inst_30592__$1 == null);
var state_30609__$1 = (function (){var statearr_30614 = state_30609;
(statearr_30614[(8)] = inst_30592__$1);

return statearr_30614;
})();
if(cljs.core.truth_(inst_30593)){
var statearr_30615_30634 = state_30609__$1;
(statearr_30615_30634[(1)] = (5));

} else {
var statearr_30616_30635 = state_30609__$1;
(statearr_30616_30635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30610 === (6))){
var inst_30596 = (state_30609[(9)]);
var inst_30592 = (state_30609[(8)]);
var inst_30589 = (state_30609[(7)]);
var inst_30596__$1 = f.call(null,inst_30589,inst_30592);
var inst_30597 = cljs.core.reduced_QMARK_.call(null,inst_30596__$1);
var state_30609__$1 = (function (){var statearr_30617 = state_30609;
(statearr_30617[(9)] = inst_30596__$1);

return statearr_30617;
})();
if(inst_30597){
var statearr_30618_30636 = state_30609__$1;
(statearr_30618_30636[(1)] = (8));

} else {
var statearr_30619_30637 = state_30609__$1;
(statearr_30619_30637[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30610 === (3))){
var inst_30607 = (state_30609[(2)]);
var state_30609__$1 = state_30609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30609__$1,inst_30607);
} else {
if((state_val_30610 === (2))){
var state_30609__$1 = state_30609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30609__$1,(4),ch);
} else {
if((state_val_30610 === (9))){
var inst_30596 = (state_30609[(9)]);
var inst_30589 = inst_30596;
var state_30609__$1 = (function (){var statearr_30620 = state_30609;
(statearr_30620[(7)] = inst_30589);

return statearr_30620;
})();
var statearr_30621_30638 = state_30609__$1;
(statearr_30621_30638[(2)] = null);

(statearr_30621_30638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30610 === (5))){
var inst_30589 = (state_30609[(7)]);
var state_30609__$1 = state_30609;
var statearr_30622_30639 = state_30609__$1;
(statearr_30622_30639[(2)] = inst_30589);

(statearr_30622_30639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30610 === (10))){
var inst_30603 = (state_30609[(2)]);
var state_30609__$1 = state_30609;
var statearr_30623_30640 = state_30609__$1;
(statearr_30623_30640[(2)] = inst_30603);

(statearr_30623_30640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30610 === (8))){
var inst_30596 = (state_30609[(9)]);
var inst_30599 = cljs.core.deref.call(null,inst_30596);
var state_30609__$1 = state_30609;
var statearr_30624_30641 = state_30609__$1;
(statearr_30624_30641[(2)] = inst_30599);

(statearr_30624_30641[(1)] = (10));


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
});})(c__29843__auto__))
;
return ((function (switch__29731__auto__,c__29843__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29732__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29732__auto____0 = (function (){
var statearr_30628 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30628[(0)] = cljs$core$async$reduce_$_state_machine__29732__auto__);

(statearr_30628[(1)] = (1));

return statearr_30628;
});
var cljs$core$async$reduce_$_state_machine__29732__auto____1 = (function (state_30609){
while(true){
var ret_value__29733__auto__ = (function (){try{while(true){
var result__29734__auto__ = switch__29731__auto__.call(null,state_30609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29734__auto__;
}
break;
}
}catch (e30629){if((e30629 instanceof Object)){
var ex__29735__auto__ = e30629;
var statearr_30630_30642 = state_30609;
(statearr_30630_30642[(5)] = ex__29735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30643 = state_30609;
state_30609 = G__30643;
continue;
} else {
return ret_value__29733__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29732__auto__ = function(state_30609){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29732__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29732__auto____1.call(this,state_30609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29732__auto____0;
cljs$core$async$reduce_$_state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29732__auto____1;
return cljs$core$async$reduce_$_state_machine__29732__auto__;
})()
;})(switch__29731__auto__,c__29843__auto__))
})();
var state__29845__auto__ = (function (){var statearr_30631 = f__29844__auto__.call(null);
(statearr_30631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29843__auto__);

return statearr_30631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29845__auto__);
});})(c__29843__auto__))
);

return c__29843__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args30644 = [];
var len__26218__auto___30696 = arguments.length;
var i__26219__auto___30697 = (0);
while(true){
if((i__26219__auto___30697 < len__26218__auto___30696)){
args30644.push((arguments[i__26219__auto___30697]));

var G__30698 = (i__26219__auto___30697 + (1));
i__26219__auto___30697 = G__30698;
continue;
} else {
}
break;
}

var G__30646 = args30644.length;
switch (G__30646) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30644.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29843__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29843__auto__){
return (function (){
var f__29844__auto__ = (function (){var switch__29731__auto__ = ((function (c__29843__auto__){
return (function (state_30671){
var state_val_30672 = (state_30671[(1)]);
if((state_val_30672 === (7))){
var inst_30653 = (state_30671[(2)]);
var state_30671__$1 = state_30671;
var statearr_30673_30700 = state_30671__$1;
(statearr_30673_30700[(2)] = inst_30653);

(statearr_30673_30700[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30672 === (1))){
var inst_30647 = cljs.core.seq.call(null,coll);
var inst_30648 = inst_30647;
var state_30671__$1 = (function (){var statearr_30674 = state_30671;
(statearr_30674[(7)] = inst_30648);

return statearr_30674;
})();
var statearr_30675_30701 = state_30671__$1;
(statearr_30675_30701[(2)] = null);

(statearr_30675_30701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30672 === (4))){
var inst_30648 = (state_30671[(7)]);
var inst_30651 = cljs.core.first.call(null,inst_30648);
var state_30671__$1 = state_30671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30671__$1,(7),ch,inst_30651);
} else {
if((state_val_30672 === (13))){
var inst_30665 = (state_30671[(2)]);
var state_30671__$1 = state_30671;
var statearr_30676_30702 = state_30671__$1;
(statearr_30676_30702[(2)] = inst_30665);

(statearr_30676_30702[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30672 === (6))){
var inst_30656 = (state_30671[(2)]);
var state_30671__$1 = state_30671;
if(cljs.core.truth_(inst_30656)){
var statearr_30677_30703 = state_30671__$1;
(statearr_30677_30703[(1)] = (8));

} else {
var statearr_30678_30704 = state_30671__$1;
(statearr_30678_30704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30672 === (3))){
var inst_30669 = (state_30671[(2)]);
var state_30671__$1 = state_30671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30671__$1,inst_30669);
} else {
if((state_val_30672 === (12))){
var state_30671__$1 = state_30671;
var statearr_30679_30705 = state_30671__$1;
(statearr_30679_30705[(2)] = null);

(statearr_30679_30705[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30672 === (2))){
var inst_30648 = (state_30671[(7)]);
var state_30671__$1 = state_30671;
if(cljs.core.truth_(inst_30648)){
var statearr_30680_30706 = state_30671__$1;
(statearr_30680_30706[(1)] = (4));

} else {
var statearr_30681_30707 = state_30671__$1;
(statearr_30681_30707[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30672 === (11))){
var inst_30662 = cljs.core.async.close_BANG_.call(null,ch);
var state_30671__$1 = state_30671;
var statearr_30682_30708 = state_30671__$1;
(statearr_30682_30708[(2)] = inst_30662);

(statearr_30682_30708[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30672 === (9))){
var state_30671__$1 = state_30671;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30683_30709 = state_30671__$1;
(statearr_30683_30709[(1)] = (11));

} else {
var statearr_30684_30710 = state_30671__$1;
(statearr_30684_30710[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30672 === (5))){
var inst_30648 = (state_30671[(7)]);
var state_30671__$1 = state_30671;
var statearr_30685_30711 = state_30671__$1;
(statearr_30685_30711[(2)] = inst_30648);

(statearr_30685_30711[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30672 === (10))){
var inst_30667 = (state_30671[(2)]);
var state_30671__$1 = state_30671;
var statearr_30686_30712 = state_30671__$1;
(statearr_30686_30712[(2)] = inst_30667);

(statearr_30686_30712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30672 === (8))){
var inst_30648 = (state_30671[(7)]);
var inst_30658 = cljs.core.next.call(null,inst_30648);
var inst_30648__$1 = inst_30658;
var state_30671__$1 = (function (){var statearr_30687 = state_30671;
(statearr_30687[(7)] = inst_30648__$1);

return statearr_30687;
})();
var statearr_30688_30713 = state_30671__$1;
(statearr_30688_30713[(2)] = null);

(statearr_30688_30713[(1)] = (2));


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
});})(c__29843__auto__))
;
return ((function (switch__29731__auto__,c__29843__auto__){
return (function() {
var cljs$core$async$state_machine__29732__auto__ = null;
var cljs$core$async$state_machine__29732__auto____0 = (function (){
var statearr_30692 = [null,null,null,null,null,null,null,null];
(statearr_30692[(0)] = cljs$core$async$state_machine__29732__auto__);

(statearr_30692[(1)] = (1));

return statearr_30692;
});
var cljs$core$async$state_machine__29732__auto____1 = (function (state_30671){
while(true){
var ret_value__29733__auto__ = (function (){try{while(true){
var result__29734__auto__ = switch__29731__auto__.call(null,state_30671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29734__auto__;
}
break;
}
}catch (e30693){if((e30693 instanceof Object)){
var ex__29735__auto__ = e30693;
var statearr_30694_30714 = state_30671;
(statearr_30694_30714[(5)] = ex__29735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30715 = state_30671;
state_30671 = G__30715;
continue;
} else {
return ret_value__29733__auto__;
}
break;
}
});
cljs$core$async$state_machine__29732__auto__ = function(state_30671){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29732__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29732__auto____1.call(this,state_30671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29732__auto____0;
cljs$core$async$state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29732__auto____1;
return cljs$core$async$state_machine__29732__auto__;
})()
;})(switch__29731__auto__,c__29843__auto__))
})();
var state__29845__auto__ = (function (){var statearr_30695 = f__29844__auto__.call(null);
(statearr_30695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29843__auto__);

return statearr_30695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29845__auto__);
});})(c__29843__auto__))
);

return c__29843__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25806__auto__ = (((_ == null))?null:_);
var m__25807__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25806__auto__)]);
if(!((m__25807__auto__ == null))){
return m__25807__auto__.call(null,_);
} else {
var m__25807__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25807__auto____$1 == null))){
return m__25807__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25806__auto__ = (((m == null))?null:m);
var m__25807__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25806__auto__)]);
if(!((m__25807__auto__ == null))){
return m__25807__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25807__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25807__auto____$1 == null))){
return m__25807__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25806__auto__ = (((m == null))?null:m);
var m__25807__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25806__auto__)]);
if(!((m__25807__auto__ == null))){
return m__25807__auto__.call(null,m,ch);
} else {
var m__25807__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25807__auto____$1 == null))){
return m__25807__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25806__auto__ = (((m == null))?null:m);
var m__25807__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25806__auto__)]);
if(!((m__25807__auto__ == null))){
return m__25807__auto__.call(null,m);
} else {
var m__25807__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25807__auto____$1 == null))){
return m__25807__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30941 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30941 = (function (mult,ch,cs,meta30942){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta30942 = meta30942;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30943,meta30942__$1){
var self__ = this;
var _30943__$1 = this;
return (new cljs.core.async.t_cljs$core$async30941(self__.mult,self__.ch,self__.cs,meta30942__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30941.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30943){
var self__ = this;
var _30943__$1 = this;
return self__.meta30942;
});})(cs))
;

cljs.core.async.t_cljs$core$async30941.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30941.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30941.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async30941.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30941.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30941.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30941.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30942","meta30942",348540256,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30941.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30941.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30941";

cljs.core.async.t_cljs$core$async30941.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25749__auto__,writer__25750__auto__,opt__25751__auto__){
return cljs.core._write.call(null,writer__25750__auto__,"cljs.core.async/t_cljs$core$async30941");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async30941 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30941(mult__$1,ch__$1,cs__$1,meta30942){
return (new cljs.core.async.t_cljs$core$async30941(mult__$1,ch__$1,cs__$1,meta30942));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30941(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__29843__auto___31166 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29843__auto___31166,cs,m,dchan,dctr,done){
return (function (){
var f__29844__auto__ = (function (){var switch__29731__auto__ = ((function (c__29843__auto___31166,cs,m,dchan,dctr,done){
return (function (state_31078){
var state_val_31079 = (state_31078[(1)]);
if((state_val_31079 === (7))){
var inst_31074 = (state_31078[(2)]);
var state_31078__$1 = state_31078;
var statearr_31080_31167 = state_31078__$1;
(statearr_31080_31167[(2)] = inst_31074);

(statearr_31080_31167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (20))){
var inst_30977 = (state_31078[(7)]);
var inst_30989 = cljs.core.first.call(null,inst_30977);
var inst_30990 = cljs.core.nth.call(null,inst_30989,(0),null);
var inst_30991 = cljs.core.nth.call(null,inst_30989,(1),null);
var state_31078__$1 = (function (){var statearr_31081 = state_31078;
(statearr_31081[(8)] = inst_30990);

return statearr_31081;
})();
if(cljs.core.truth_(inst_30991)){
var statearr_31082_31168 = state_31078__$1;
(statearr_31082_31168[(1)] = (22));

} else {
var statearr_31083_31169 = state_31078__$1;
(statearr_31083_31169[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (27))){
var inst_31021 = (state_31078[(9)]);
var inst_31026 = (state_31078[(10)]);
var inst_30946 = (state_31078[(11)]);
var inst_31019 = (state_31078[(12)]);
var inst_31026__$1 = cljs.core._nth.call(null,inst_31019,inst_31021);
var inst_31027 = cljs.core.async.put_BANG_.call(null,inst_31026__$1,inst_30946,done);
var state_31078__$1 = (function (){var statearr_31084 = state_31078;
(statearr_31084[(10)] = inst_31026__$1);

return statearr_31084;
})();
if(cljs.core.truth_(inst_31027)){
var statearr_31085_31170 = state_31078__$1;
(statearr_31085_31170[(1)] = (30));

} else {
var statearr_31086_31171 = state_31078__$1;
(statearr_31086_31171[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (1))){
var state_31078__$1 = state_31078;
var statearr_31087_31172 = state_31078__$1;
(statearr_31087_31172[(2)] = null);

(statearr_31087_31172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (24))){
var inst_30977 = (state_31078[(7)]);
var inst_30996 = (state_31078[(2)]);
var inst_30997 = cljs.core.next.call(null,inst_30977);
var inst_30955 = inst_30997;
var inst_30956 = null;
var inst_30957 = (0);
var inst_30958 = (0);
var state_31078__$1 = (function (){var statearr_31088 = state_31078;
(statearr_31088[(13)] = inst_30996);

(statearr_31088[(14)] = inst_30957);

(statearr_31088[(15)] = inst_30956);

(statearr_31088[(16)] = inst_30955);

(statearr_31088[(17)] = inst_30958);

return statearr_31088;
})();
var statearr_31089_31173 = state_31078__$1;
(statearr_31089_31173[(2)] = null);

(statearr_31089_31173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (39))){
var state_31078__$1 = state_31078;
var statearr_31093_31174 = state_31078__$1;
(statearr_31093_31174[(2)] = null);

(statearr_31093_31174[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (4))){
var inst_30946 = (state_31078[(11)]);
var inst_30946__$1 = (state_31078[(2)]);
var inst_30947 = (inst_30946__$1 == null);
var state_31078__$1 = (function (){var statearr_31094 = state_31078;
(statearr_31094[(11)] = inst_30946__$1);

return statearr_31094;
})();
if(cljs.core.truth_(inst_30947)){
var statearr_31095_31175 = state_31078__$1;
(statearr_31095_31175[(1)] = (5));

} else {
var statearr_31096_31176 = state_31078__$1;
(statearr_31096_31176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (15))){
var inst_30957 = (state_31078[(14)]);
var inst_30956 = (state_31078[(15)]);
var inst_30955 = (state_31078[(16)]);
var inst_30958 = (state_31078[(17)]);
var inst_30973 = (state_31078[(2)]);
var inst_30974 = (inst_30958 + (1));
var tmp31090 = inst_30957;
var tmp31091 = inst_30956;
var tmp31092 = inst_30955;
var inst_30955__$1 = tmp31092;
var inst_30956__$1 = tmp31091;
var inst_30957__$1 = tmp31090;
var inst_30958__$1 = inst_30974;
var state_31078__$1 = (function (){var statearr_31097 = state_31078;
(statearr_31097[(14)] = inst_30957__$1);

(statearr_31097[(15)] = inst_30956__$1);

(statearr_31097[(18)] = inst_30973);

(statearr_31097[(16)] = inst_30955__$1);

(statearr_31097[(17)] = inst_30958__$1);

return statearr_31097;
})();
var statearr_31098_31177 = state_31078__$1;
(statearr_31098_31177[(2)] = null);

(statearr_31098_31177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (21))){
var inst_31000 = (state_31078[(2)]);
var state_31078__$1 = state_31078;
var statearr_31102_31178 = state_31078__$1;
(statearr_31102_31178[(2)] = inst_31000);

(statearr_31102_31178[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (31))){
var inst_31026 = (state_31078[(10)]);
var inst_31030 = done.call(null,null);
var inst_31031 = cljs.core.async.untap_STAR_.call(null,m,inst_31026);
var state_31078__$1 = (function (){var statearr_31103 = state_31078;
(statearr_31103[(19)] = inst_31030);

return statearr_31103;
})();
var statearr_31104_31179 = state_31078__$1;
(statearr_31104_31179[(2)] = inst_31031);

(statearr_31104_31179[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (32))){
var inst_31018 = (state_31078[(20)]);
var inst_31021 = (state_31078[(9)]);
var inst_31020 = (state_31078[(21)]);
var inst_31019 = (state_31078[(12)]);
var inst_31033 = (state_31078[(2)]);
var inst_31034 = (inst_31021 + (1));
var tmp31099 = inst_31018;
var tmp31100 = inst_31020;
var tmp31101 = inst_31019;
var inst_31018__$1 = tmp31099;
var inst_31019__$1 = tmp31101;
var inst_31020__$1 = tmp31100;
var inst_31021__$1 = inst_31034;
var state_31078__$1 = (function (){var statearr_31105 = state_31078;
(statearr_31105[(22)] = inst_31033);

(statearr_31105[(20)] = inst_31018__$1);

(statearr_31105[(9)] = inst_31021__$1);

(statearr_31105[(21)] = inst_31020__$1);

(statearr_31105[(12)] = inst_31019__$1);

return statearr_31105;
})();
var statearr_31106_31180 = state_31078__$1;
(statearr_31106_31180[(2)] = null);

(statearr_31106_31180[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (40))){
var inst_31046 = (state_31078[(23)]);
var inst_31050 = done.call(null,null);
var inst_31051 = cljs.core.async.untap_STAR_.call(null,m,inst_31046);
var state_31078__$1 = (function (){var statearr_31107 = state_31078;
(statearr_31107[(24)] = inst_31050);

return statearr_31107;
})();
var statearr_31108_31181 = state_31078__$1;
(statearr_31108_31181[(2)] = inst_31051);

(statearr_31108_31181[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (33))){
var inst_31037 = (state_31078[(25)]);
var inst_31039 = cljs.core.chunked_seq_QMARK_.call(null,inst_31037);
var state_31078__$1 = state_31078;
if(inst_31039){
var statearr_31109_31182 = state_31078__$1;
(statearr_31109_31182[(1)] = (36));

} else {
var statearr_31110_31183 = state_31078__$1;
(statearr_31110_31183[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (13))){
var inst_30967 = (state_31078[(26)]);
var inst_30970 = cljs.core.async.close_BANG_.call(null,inst_30967);
var state_31078__$1 = state_31078;
var statearr_31111_31184 = state_31078__$1;
(statearr_31111_31184[(2)] = inst_30970);

(statearr_31111_31184[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (22))){
var inst_30990 = (state_31078[(8)]);
var inst_30993 = cljs.core.async.close_BANG_.call(null,inst_30990);
var state_31078__$1 = state_31078;
var statearr_31112_31185 = state_31078__$1;
(statearr_31112_31185[(2)] = inst_30993);

(statearr_31112_31185[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (36))){
var inst_31037 = (state_31078[(25)]);
var inst_31041 = cljs.core.chunk_first.call(null,inst_31037);
var inst_31042 = cljs.core.chunk_rest.call(null,inst_31037);
var inst_31043 = cljs.core.count.call(null,inst_31041);
var inst_31018 = inst_31042;
var inst_31019 = inst_31041;
var inst_31020 = inst_31043;
var inst_31021 = (0);
var state_31078__$1 = (function (){var statearr_31113 = state_31078;
(statearr_31113[(20)] = inst_31018);

(statearr_31113[(9)] = inst_31021);

(statearr_31113[(21)] = inst_31020);

(statearr_31113[(12)] = inst_31019);

return statearr_31113;
})();
var statearr_31114_31186 = state_31078__$1;
(statearr_31114_31186[(2)] = null);

(statearr_31114_31186[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (41))){
var inst_31037 = (state_31078[(25)]);
var inst_31053 = (state_31078[(2)]);
var inst_31054 = cljs.core.next.call(null,inst_31037);
var inst_31018 = inst_31054;
var inst_31019 = null;
var inst_31020 = (0);
var inst_31021 = (0);
var state_31078__$1 = (function (){var statearr_31115 = state_31078;
(statearr_31115[(20)] = inst_31018);

(statearr_31115[(27)] = inst_31053);

(statearr_31115[(9)] = inst_31021);

(statearr_31115[(21)] = inst_31020);

(statearr_31115[(12)] = inst_31019);

return statearr_31115;
})();
var statearr_31116_31187 = state_31078__$1;
(statearr_31116_31187[(2)] = null);

(statearr_31116_31187[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (43))){
var state_31078__$1 = state_31078;
var statearr_31117_31188 = state_31078__$1;
(statearr_31117_31188[(2)] = null);

(statearr_31117_31188[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (29))){
var inst_31062 = (state_31078[(2)]);
var state_31078__$1 = state_31078;
var statearr_31118_31189 = state_31078__$1;
(statearr_31118_31189[(2)] = inst_31062);

(statearr_31118_31189[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (44))){
var inst_31071 = (state_31078[(2)]);
var state_31078__$1 = (function (){var statearr_31119 = state_31078;
(statearr_31119[(28)] = inst_31071);

return statearr_31119;
})();
var statearr_31120_31190 = state_31078__$1;
(statearr_31120_31190[(2)] = null);

(statearr_31120_31190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (6))){
var inst_31010 = (state_31078[(29)]);
var inst_31009 = cljs.core.deref.call(null,cs);
var inst_31010__$1 = cljs.core.keys.call(null,inst_31009);
var inst_31011 = cljs.core.count.call(null,inst_31010__$1);
var inst_31012 = cljs.core.reset_BANG_.call(null,dctr,inst_31011);
var inst_31017 = cljs.core.seq.call(null,inst_31010__$1);
var inst_31018 = inst_31017;
var inst_31019 = null;
var inst_31020 = (0);
var inst_31021 = (0);
var state_31078__$1 = (function (){var statearr_31121 = state_31078;
(statearr_31121[(20)] = inst_31018);

(statearr_31121[(29)] = inst_31010__$1);

(statearr_31121[(9)] = inst_31021);

(statearr_31121[(21)] = inst_31020);

(statearr_31121[(30)] = inst_31012);

(statearr_31121[(12)] = inst_31019);

return statearr_31121;
})();
var statearr_31122_31191 = state_31078__$1;
(statearr_31122_31191[(2)] = null);

(statearr_31122_31191[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (28))){
var inst_31018 = (state_31078[(20)]);
var inst_31037 = (state_31078[(25)]);
var inst_31037__$1 = cljs.core.seq.call(null,inst_31018);
var state_31078__$1 = (function (){var statearr_31123 = state_31078;
(statearr_31123[(25)] = inst_31037__$1);

return statearr_31123;
})();
if(inst_31037__$1){
var statearr_31124_31192 = state_31078__$1;
(statearr_31124_31192[(1)] = (33));

} else {
var statearr_31125_31193 = state_31078__$1;
(statearr_31125_31193[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (25))){
var inst_31021 = (state_31078[(9)]);
var inst_31020 = (state_31078[(21)]);
var inst_31023 = (inst_31021 < inst_31020);
var inst_31024 = inst_31023;
var state_31078__$1 = state_31078;
if(cljs.core.truth_(inst_31024)){
var statearr_31126_31194 = state_31078__$1;
(statearr_31126_31194[(1)] = (27));

} else {
var statearr_31127_31195 = state_31078__$1;
(statearr_31127_31195[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (34))){
var state_31078__$1 = state_31078;
var statearr_31128_31196 = state_31078__$1;
(statearr_31128_31196[(2)] = null);

(statearr_31128_31196[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (17))){
var state_31078__$1 = state_31078;
var statearr_31129_31197 = state_31078__$1;
(statearr_31129_31197[(2)] = null);

(statearr_31129_31197[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (3))){
var inst_31076 = (state_31078[(2)]);
var state_31078__$1 = state_31078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31078__$1,inst_31076);
} else {
if((state_val_31079 === (12))){
var inst_31005 = (state_31078[(2)]);
var state_31078__$1 = state_31078;
var statearr_31130_31198 = state_31078__$1;
(statearr_31130_31198[(2)] = inst_31005);

(statearr_31130_31198[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (2))){
var state_31078__$1 = state_31078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31078__$1,(4),ch);
} else {
if((state_val_31079 === (23))){
var state_31078__$1 = state_31078;
var statearr_31131_31199 = state_31078__$1;
(statearr_31131_31199[(2)] = null);

(statearr_31131_31199[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (35))){
var inst_31060 = (state_31078[(2)]);
var state_31078__$1 = state_31078;
var statearr_31132_31200 = state_31078__$1;
(statearr_31132_31200[(2)] = inst_31060);

(statearr_31132_31200[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (19))){
var inst_30977 = (state_31078[(7)]);
var inst_30981 = cljs.core.chunk_first.call(null,inst_30977);
var inst_30982 = cljs.core.chunk_rest.call(null,inst_30977);
var inst_30983 = cljs.core.count.call(null,inst_30981);
var inst_30955 = inst_30982;
var inst_30956 = inst_30981;
var inst_30957 = inst_30983;
var inst_30958 = (0);
var state_31078__$1 = (function (){var statearr_31133 = state_31078;
(statearr_31133[(14)] = inst_30957);

(statearr_31133[(15)] = inst_30956);

(statearr_31133[(16)] = inst_30955);

(statearr_31133[(17)] = inst_30958);

return statearr_31133;
})();
var statearr_31134_31201 = state_31078__$1;
(statearr_31134_31201[(2)] = null);

(statearr_31134_31201[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (11))){
var inst_30977 = (state_31078[(7)]);
var inst_30955 = (state_31078[(16)]);
var inst_30977__$1 = cljs.core.seq.call(null,inst_30955);
var state_31078__$1 = (function (){var statearr_31135 = state_31078;
(statearr_31135[(7)] = inst_30977__$1);

return statearr_31135;
})();
if(inst_30977__$1){
var statearr_31136_31202 = state_31078__$1;
(statearr_31136_31202[(1)] = (16));

} else {
var statearr_31137_31203 = state_31078__$1;
(statearr_31137_31203[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (9))){
var inst_31007 = (state_31078[(2)]);
var state_31078__$1 = state_31078;
var statearr_31138_31204 = state_31078__$1;
(statearr_31138_31204[(2)] = inst_31007);

(statearr_31138_31204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (5))){
var inst_30953 = cljs.core.deref.call(null,cs);
var inst_30954 = cljs.core.seq.call(null,inst_30953);
var inst_30955 = inst_30954;
var inst_30956 = null;
var inst_30957 = (0);
var inst_30958 = (0);
var state_31078__$1 = (function (){var statearr_31139 = state_31078;
(statearr_31139[(14)] = inst_30957);

(statearr_31139[(15)] = inst_30956);

(statearr_31139[(16)] = inst_30955);

(statearr_31139[(17)] = inst_30958);

return statearr_31139;
})();
var statearr_31140_31205 = state_31078__$1;
(statearr_31140_31205[(2)] = null);

(statearr_31140_31205[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (14))){
var state_31078__$1 = state_31078;
var statearr_31141_31206 = state_31078__$1;
(statearr_31141_31206[(2)] = null);

(statearr_31141_31206[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (45))){
var inst_31068 = (state_31078[(2)]);
var state_31078__$1 = state_31078;
var statearr_31142_31207 = state_31078__$1;
(statearr_31142_31207[(2)] = inst_31068);

(statearr_31142_31207[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (26))){
var inst_31010 = (state_31078[(29)]);
var inst_31064 = (state_31078[(2)]);
var inst_31065 = cljs.core.seq.call(null,inst_31010);
var state_31078__$1 = (function (){var statearr_31143 = state_31078;
(statearr_31143[(31)] = inst_31064);

return statearr_31143;
})();
if(inst_31065){
var statearr_31144_31208 = state_31078__$1;
(statearr_31144_31208[(1)] = (42));

} else {
var statearr_31145_31209 = state_31078__$1;
(statearr_31145_31209[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (16))){
var inst_30977 = (state_31078[(7)]);
var inst_30979 = cljs.core.chunked_seq_QMARK_.call(null,inst_30977);
var state_31078__$1 = state_31078;
if(inst_30979){
var statearr_31146_31210 = state_31078__$1;
(statearr_31146_31210[(1)] = (19));

} else {
var statearr_31147_31211 = state_31078__$1;
(statearr_31147_31211[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (38))){
var inst_31057 = (state_31078[(2)]);
var state_31078__$1 = state_31078;
var statearr_31148_31212 = state_31078__$1;
(statearr_31148_31212[(2)] = inst_31057);

(statearr_31148_31212[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (30))){
var state_31078__$1 = state_31078;
var statearr_31149_31213 = state_31078__$1;
(statearr_31149_31213[(2)] = null);

(statearr_31149_31213[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (10))){
var inst_30956 = (state_31078[(15)]);
var inst_30958 = (state_31078[(17)]);
var inst_30966 = cljs.core._nth.call(null,inst_30956,inst_30958);
var inst_30967 = cljs.core.nth.call(null,inst_30966,(0),null);
var inst_30968 = cljs.core.nth.call(null,inst_30966,(1),null);
var state_31078__$1 = (function (){var statearr_31150 = state_31078;
(statearr_31150[(26)] = inst_30967);

return statearr_31150;
})();
if(cljs.core.truth_(inst_30968)){
var statearr_31151_31214 = state_31078__$1;
(statearr_31151_31214[(1)] = (13));

} else {
var statearr_31152_31215 = state_31078__$1;
(statearr_31152_31215[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (18))){
var inst_31003 = (state_31078[(2)]);
var state_31078__$1 = state_31078;
var statearr_31153_31216 = state_31078__$1;
(statearr_31153_31216[(2)] = inst_31003);

(statearr_31153_31216[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (42))){
var state_31078__$1 = state_31078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31078__$1,(45),dchan);
} else {
if((state_val_31079 === (37))){
var inst_31046 = (state_31078[(23)]);
var inst_31037 = (state_31078[(25)]);
var inst_30946 = (state_31078[(11)]);
var inst_31046__$1 = cljs.core.first.call(null,inst_31037);
var inst_31047 = cljs.core.async.put_BANG_.call(null,inst_31046__$1,inst_30946,done);
var state_31078__$1 = (function (){var statearr_31154 = state_31078;
(statearr_31154[(23)] = inst_31046__$1);

return statearr_31154;
})();
if(cljs.core.truth_(inst_31047)){
var statearr_31155_31217 = state_31078__$1;
(statearr_31155_31217[(1)] = (39));

} else {
var statearr_31156_31218 = state_31078__$1;
(statearr_31156_31218[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31079 === (8))){
var inst_30957 = (state_31078[(14)]);
var inst_30958 = (state_31078[(17)]);
var inst_30960 = (inst_30958 < inst_30957);
var inst_30961 = inst_30960;
var state_31078__$1 = state_31078;
if(cljs.core.truth_(inst_30961)){
var statearr_31157_31219 = state_31078__$1;
(statearr_31157_31219[(1)] = (10));

} else {
var statearr_31158_31220 = state_31078__$1;
(statearr_31158_31220[(1)] = (11));

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
});})(c__29843__auto___31166,cs,m,dchan,dctr,done))
;
return ((function (switch__29731__auto__,c__29843__auto___31166,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29732__auto__ = null;
var cljs$core$async$mult_$_state_machine__29732__auto____0 = (function (){
var statearr_31162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31162[(0)] = cljs$core$async$mult_$_state_machine__29732__auto__);

(statearr_31162[(1)] = (1));

return statearr_31162;
});
var cljs$core$async$mult_$_state_machine__29732__auto____1 = (function (state_31078){
while(true){
var ret_value__29733__auto__ = (function (){try{while(true){
var result__29734__auto__ = switch__29731__auto__.call(null,state_31078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29734__auto__;
}
break;
}
}catch (e31163){if((e31163 instanceof Object)){
var ex__29735__auto__ = e31163;
var statearr_31164_31221 = state_31078;
(statearr_31164_31221[(5)] = ex__29735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31222 = state_31078;
state_31078 = G__31222;
continue;
} else {
return ret_value__29733__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29732__auto__ = function(state_31078){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29732__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29732__auto____1.call(this,state_31078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29732__auto____0;
cljs$core$async$mult_$_state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29732__auto____1;
return cljs$core$async$mult_$_state_machine__29732__auto__;
})()
;})(switch__29731__auto__,c__29843__auto___31166,cs,m,dchan,dctr,done))
})();
var state__29845__auto__ = (function (){var statearr_31165 = f__29844__auto__.call(null);
(statearr_31165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29843__auto___31166);

return statearr_31165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29845__auto__);
});})(c__29843__auto___31166,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args31223 = [];
var len__26218__auto___31226 = arguments.length;
var i__26219__auto___31227 = (0);
while(true){
if((i__26219__auto___31227 < len__26218__auto___31226)){
args31223.push((arguments[i__26219__auto___31227]));

var G__31228 = (i__26219__auto___31227 + (1));
i__26219__auto___31227 = G__31228;
continue;
} else {
}
break;
}

var G__31225 = args31223.length;
switch (G__31225) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31223.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25806__auto__ = (((m == null))?null:m);
var m__25807__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25806__auto__)]);
if(!((m__25807__auto__ == null))){
return m__25807__auto__.call(null,m,ch);
} else {
var m__25807__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25807__auto____$1 == null))){
return m__25807__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25806__auto__ = (((m == null))?null:m);
var m__25807__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25806__auto__)]);
if(!((m__25807__auto__ == null))){
return m__25807__auto__.call(null,m,ch);
} else {
var m__25807__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25807__auto____$1 == null))){
return m__25807__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25806__auto__ = (((m == null))?null:m);
var m__25807__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25806__auto__)]);
if(!((m__25807__auto__ == null))){
return m__25807__auto__.call(null,m);
} else {
var m__25807__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25807__auto____$1 == null))){
return m__25807__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25806__auto__ = (((m == null))?null:m);
var m__25807__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25806__auto__)]);
if(!((m__25807__auto__ == null))){
return m__25807__auto__.call(null,m,state_map);
} else {
var m__25807__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25807__auto____$1 == null))){
return m__25807__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25806__auto__ = (((m == null))?null:m);
var m__25807__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25806__auto__)]);
if(!((m__25807__auto__ == null))){
return m__25807__auto__.call(null,m,mode);
} else {
var m__25807__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25807__auto____$1 == null))){
return m__25807__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__26225__auto__ = [];
var len__26218__auto___31240 = arguments.length;
var i__26219__auto___31241 = (0);
while(true){
if((i__26219__auto___31241 < len__26218__auto___31240)){
args__26225__auto__.push((arguments[i__26219__auto___31241]));

var G__31242 = (i__26219__auto___31241 + (1));
i__26219__auto___31241 = G__31242;
continue;
} else {
}
break;
}

var argseq__26226__auto__ = ((((3) < args__26225__auto__.length))?(new cljs.core.IndexedSeq(args__26225__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26226__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31234){
var map__31235 = p__31234;
var map__31235__$1 = ((((!((map__31235 == null)))?((((map__31235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31235):map__31235);
var opts = map__31235__$1;
var statearr_31237_31243 = state;
(statearr_31237_31243[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__31235,map__31235__$1,opts){
return (function (val){
var statearr_31238_31244 = state;
(statearr_31238_31244[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31235,map__31235__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_31239_31245 = state;
(statearr_31239_31245[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31230){
var G__31231 = cljs.core.first.call(null,seq31230);
var seq31230__$1 = cljs.core.next.call(null,seq31230);
var G__31232 = cljs.core.first.call(null,seq31230__$1);
var seq31230__$2 = cljs.core.next.call(null,seq31230__$1);
var G__31233 = cljs.core.first.call(null,seq31230__$2);
var seq31230__$3 = cljs.core.next.call(null,seq31230__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31231,G__31232,G__31233,seq31230__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31411 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31411 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31412){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31412 = meta31412;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31413,meta31412__$1){
var self__ = this;
var _31413__$1 = this;
return (new cljs.core.async.t_cljs$core$async31411(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31412__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31411.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31413){
var self__ = this;
var _31413__$1 = this;
return self__.meta31412;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31411.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31411.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31411.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async31411.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31411.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31411.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31411.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31411.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31411.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31412","meta31412",-1132381807,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31411.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31411.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31411";

cljs.core.async.t_cljs$core$async31411.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25749__auto__,writer__25750__auto__,opt__25751__auto__){
return cljs.core._write.call(null,writer__25750__auto__,"cljs.core.async/t_cljs$core$async31411");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31411 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31411(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31412){
return (new cljs.core.async.t_cljs$core$async31411(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31412));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31411(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29843__auto___31576 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29843__auto___31576,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29844__auto__ = (function (){var switch__29731__auto__ = ((function (c__29843__auto___31576,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31513){
var state_val_31514 = (state_31513[(1)]);
if((state_val_31514 === (7))){
var inst_31429 = (state_31513[(2)]);
var state_31513__$1 = state_31513;
var statearr_31515_31577 = state_31513__$1;
(statearr_31515_31577[(2)] = inst_31429);

(statearr_31515_31577[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (20))){
var inst_31441 = (state_31513[(7)]);
var state_31513__$1 = state_31513;
var statearr_31516_31578 = state_31513__$1;
(statearr_31516_31578[(2)] = inst_31441);

(statearr_31516_31578[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (27))){
var state_31513__$1 = state_31513;
var statearr_31517_31579 = state_31513__$1;
(statearr_31517_31579[(2)] = null);

(statearr_31517_31579[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (1))){
var inst_31417 = (state_31513[(8)]);
var inst_31417__$1 = calc_state.call(null);
var inst_31419 = (inst_31417__$1 == null);
var inst_31420 = cljs.core.not.call(null,inst_31419);
var state_31513__$1 = (function (){var statearr_31518 = state_31513;
(statearr_31518[(8)] = inst_31417__$1);

return statearr_31518;
})();
if(inst_31420){
var statearr_31519_31580 = state_31513__$1;
(statearr_31519_31580[(1)] = (2));

} else {
var statearr_31520_31581 = state_31513__$1;
(statearr_31520_31581[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (24))){
var inst_31464 = (state_31513[(9)]);
var inst_31473 = (state_31513[(10)]);
var inst_31487 = (state_31513[(11)]);
var inst_31487__$1 = inst_31464.call(null,inst_31473);
var state_31513__$1 = (function (){var statearr_31521 = state_31513;
(statearr_31521[(11)] = inst_31487__$1);

return statearr_31521;
})();
if(cljs.core.truth_(inst_31487__$1)){
var statearr_31522_31582 = state_31513__$1;
(statearr_31522_31582[(1)] = (29));

} else {
var statearr_31523_31583 = state_31513__$1;
(statearr_31523_31583[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (4))){
var inst_31432 = (state_31513[(2)]);
var state_31513__$1 = state_31513;
if(cljs.core.truth_(inst_31432)){
var statearr_31524_31584 = state_31513__$1;
(statearr_31524_31584[(1)] = (8));

} else {
var statearr_31525_31585 = state_31513__$1;
(statearr_31525_31585[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (15))){
var inst_31458 = (state_31513[(2)]);
var state_31513__$1 = state_31513;
if(cljs.core.truth_(inst_31458)){
var statearr_31526_31586 = state_31513__$1;
(statearr_31526_31586[(1)] = (19));

} else {
var statearr_31527_31587 = state_31513__$1;
(statearr_31527_31587[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (21))){
var inst_31463 = (state_31513[(12)]);
var inst_31463__$1 = (state_31513[(2)]);
var inst_31464 = cljs.core.get.call(null,inst_31463__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31465 = cljs.core.get.call(null,inst_31463__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31466 = cljs.core.get.call(null,inst_31463__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31513__$1 = (function (){var statearr_31528 = state_31513;
(statearr_31528[(9)] = inst_31464);

(statearr_31528[(12)] = inst_31463__$1);

(statearr_31528[(13)] = inst_31465);

return statearr_31528;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31513__$1,(22),inst_31466);
} else {
if((state_val_31514 === (31))){
var inst_31495 = (state_31513[(2)]);
var state_31513__$1 = state_31513;
if(cljs.core.truth_(inst_31495)){
var statearr_31529_31588 = state_31513__$1;
(statearr_31529_31588[(1)] = (32));

} else {
var statearr_31530_31589 = state_31513__$1;
(statearr_31530_31589[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (32))){
var inst_31472 = (state_31513[(14)]);
var state_31513__$1 = state_31513;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31513__$1,(35),out,inst_31472);
} else {
if((state_val_31514 === (33))){
var inst_31463 = (state_31513[(12)]);
var inst_31441 = inst_31463;
var state_31513__$1 = (function (){var statearr_31531 = state_31513;
(statearr_31531[(7)] = inst_31441);

return statearr_31531;
})();
var statearr_31532_31590 = state_31513__$1;
(statearr_31532_31590[(2)] = null);

(statearr_31532_31590[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (13))){
var inst_31441 = (state_31513[(7)]);
var inst_31448 = inst_31441.cljs$lang$protocol_mask$partition0$;
var inst_31449 = (inst_31448 & (64));
var inst_31450 = inst_31441.cljs$core$ISeq$;
var inst_31451 = (inst_31449) || (inst_31450);
var state_31513__$1 = state_31513;
if(cljs.core.truth_(inst_31451)){
var statearr_31533_31591 = state_31513__$1;
(statearr_31533_31591[(1)] = (16));

} else {
var statearr_31534_31592 = state_31513__$1;
(statearr_31534_31592[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (22))){
var inst_31473 = (state_31513[(10)]);
var inst_31472 = (state_31513[(14)]);
var inst_31471 = (state_31513[(2)]);
var inst_31472__$1 = cljs.core.nth.call(null,inst_31471,(0),null);
var inst_31473__$1 = cljs.core.nth.call(null,inst_31471,(1),null);
var inst_31474 = (inst_31472__$1 == null);
var inst_31475 = cljs.core._EQ_.call(null,inst_31473__$1,change);
var inst_31476 = (inst_31474) || (inst_31475);
var state_31513__$1 = (function (){var statearr_31535 = state_31513;
(statearr_31535[(10)] = inst_31473__$1);

(statearr_31535[(14)] = inst_31472__$1);

return statearr_31535;
})();
if(cljs.core.truth_(inst_31476)){
var statearr_31536_31593 = state_31513__$1;
(statearr_31536_31593[(1)] = (23));

} else {
var statearr_31537_31594 = state_31513__$1;
(statearr_31537_31594[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (36))){
var inst_31463 = (state_31513[(12)]);
var inst_31441 = inst_31463;
var state_31513__$1 = (function (){var statearr_31538 = state_31513;
(statearr_31538[(7)] = inst_31441);

return statearr_31538;
})();
var statearr_31539_31595 = state_31513__$1;
(statearr_31539_31595[(2)] = null);

(statearr_31539_31595[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (29))){
var inst_31487 = (state_31513[(11)]);
var state_31513__$1 = state_31513;
var statearr_31540_31596 = state_31513__$1;
(statearr_31540_31596[(2)] = inst_31487);

(statearr_31540_31596[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (6))){
var state_31513__$1 = state_31513;
var statearr_31541_31597 = state_31513__$1;
(statearr_31541_31597[(2)] = false);

(statearr_31541_31597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (28))){
var inst_31483 = (state_31513[(2)]);
var inst_31484 = calc_state.call(null);
var inst_31441 = inst_31484;
var state_31513__$1 = (function (){var statearr_31542 = state_31513;
(statearr_31542[(15)] = inst_31483);

(statearr_31542[(7)] = inst_31441);

return statearr_31542;
})();
var statearr_31543_31598 = state_31513__$1;
(statearr_31543_31598[(2)] = null);

(statearr_31543_31598[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (25))){
var inst_31509 = (state_31513[(2)]);
var state_31513__$1 = state_31513;
var statearr_31544_31599 = state_31513__$1;
(statearr_31544_31599[(2)] = inst_31509);

(statearr_31544_31599[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (34))){
var inst_31507 = (state_31513[(2)]);
var state_31513__$1 = state_31513;
var statearr_31545_31600 = state_31513__$1;
(statearr_31545_31600[(2)] = inst_31507);

(statearr_31545_31600[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (17))){
var state_31513__$1 = state_31513;
var statearr_31546_31601 = state_31513__$1;
(statearr_31546_31601[(2)] = false);

(statearr_31546_31601[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (3))){
var state_31513__$1 = state_31513;
var statearr_31547_31602 = state_31513__$1;
(statearr_31547_31602[(2)] = false);

(statearr_31547_31602[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (12))){
var inst_31511 = (state_31513[(2)]);
var state_31513__$1 = state_31513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31513__$1,inst_31511);
} else {
if((state_val_31514 === (2))){
var inst_31417 = (state_31513[(8)]);
var inst_31422 = inst_31417.cljs$lang$protocol_mask$partition0$;
var inst_31423 = (inst_31422 & (64));
var inst_31424 = inst_31417.cljs$core$ISeq$;
var inst_31425 = (inst_31423) || (inst_31424);
var state_31513__$1 = state_31513;
if(cljs.core.truth_(inst_31425)){
var statearr_31548_31603 = state_31513__$1;
(statearr_31548_31603[(1)] = (5));

} else {
var statearr_31549_31604 = state_31513__$1;
(statearr_31549_31604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (23))){
var inst_31472 = (state_31513[(14)]);
var inst_31478 = (inst_31472 == null);
var state_31513__$1 = state_31513;
if(cljs.core.truth_(inst_31478)){
var statearr_31550_31605 = state_31513__$1;
(statearr_31550_31605[(1)] = (26));

} else {
var statearr_31551_31606 = state_31513__$1;
(statearr_31551_31606[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (35))){
var inst_31498 = (state_31513[(2)]);
var state_31513__$1 = state_31513;
if(cljs.core.truth_(inst_31498)){
var statearr_31552_31607 = state_31513__$1;
(statearr_31552_31607[(1)] = (36));

} else {
var statearr_31553_31608 = state_31513__$1;
(statearr_31553_31608[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (19))){
var inst_31441 = (state_31513[(7)]);
var inst_31460 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31441);
var state_31513__$1 = state_31513;
var statearr_31554_31609 = state_31513__$1;
(statearr_31554_31609[(2)] = inst_31460);

(statearr_31554_31609[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (11))){
var inst_31441 = (state_31513[(7)]);
var inst_31445 = (inst_31441 == null);
var inst_31446 = cljs.core.not.call(null,inst_31445);
var state_31513__$1 = state_31513;
if(inst_31446){
var statearr_31555_31610 = state_31513__$1;
(statearr_31555_31610[(1)] = (13));

} else {
var statearr_31556_31611 = state_31513__$1;
(statearr_31556_31611[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (9))){
var inst_31417 = (state_31513[(8)]);
var state_31513__$1 = state_31513;
var statearr_31557_31612 = state_31513__$1;
(statearr_31557_31612[(2)] = inst_31417);

(statearr_31557_31612[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (5))){
var state_31513__$1 = state_31513;
var statearr_31558_31613 = state_31513__$1;
(statearr_31558_31613[(2)] = true);

(statearr_31558_31613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (14))){
var state_31513__$1 = state_31513;
var statearr_31559_31614 = state_31513__$1;
(statearr_31559_31614[(2)] = false);

(statearr_31559_31614[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (26))){
var inst_31473 = (state_31513[(10)]);
var inst_31480 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31473);
var state_31513__$1 = state_31513;
var statearr_31560_31615 = state_31513__$1;
(statearr_31560_31615[(2)] = inst_31480);

(statearr_31560_31615[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (16))){
var state_31513__$1 = state_31513;
var statearr_31561_31616 = state_31513__$1;
(statearr_31561_31616[(2)] = true);

(statearr_31561_31616[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (38))){
var inst_31503 = (state_31513[(2)]);
var state_31513__$1 = state_31513;
var statearr_31562_31617 = state_31513__$1;
(statearr_31562_31617[(2)] = inst_31503);

(statearr_31562_31617[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (30))){
var inst_31464 = (state_31513[(9)]);
var inst_31473 = (state_31513[(10)]);
var inst_31465 = (state_31513[(13)]);
var inst_31490 = cljs.core.empty_QMARK_.call(null,inst_31464);
var inst_31491 = inst_31465.call(null,inst_31473);
var inst_31492 = cljs.core.not.call(null,inst_31491);
var inst_31493 = (inst_31490) && (inst_31492);
var state_31513__$1 = state_31513;
var statearr_31563_31618 = state_31513__$1;
(statearr_31563_31618[(2)] = inst_31493);

(statearr_31563_31618[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (10))){
var inst_31417 = (state_31513[(8)]);
var inst_31437 = (state_31513[(2)]);
var inst_31438 = cljs.core.get.call(null,inst_31437,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31439 = cljs.core.get.call(null,inst_31437,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31440 = cljs.core.get.call(null,inst_31437,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31441 = inst_31417;
var state_31513__$1 = (function (){var statearr_31564 = state_31513;
(statearr_31564[(16)] = inst_31439);

(statearr_31564[(17)] = inst_31440);

(statearr_31564[(7)] = inst_31441);

(statearr_31564[(18)] = inst_31438);

return statearr_31564;
})();
var statearr_31565_31619 = state_31513__$1;
(statearr_31565_31619[(2)] = null);

(statearr_31565_31619[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (18))){
var inst_31455 = (state_31513[(2)]);
var state_31513__$1 = state_31513;
var statearr_31566_31620 = state_31513__$1;
(statearr_31566_31620[(2)] = inst_31455);

(statearr_31566_31620[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (37))){
var state_31513__$1 = state_31513;
var statearr_31567_31621 = state_31513__$1;
(statearr_31567_31621[(2)] = null);

(statearr_31567_31621[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (8))){
var inst_31417 = (state_31513[(8)]);
var inst_31434 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31417);
var state_31513__$1 = state_31513;
var statearr_31568_31622 = state_31513__$1;
(statearr_31568_31622[(2)] = inst_31434);

(statearr_31568_31622[(1)] = (10));


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
});})(c__29843__auto___31576,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29731__auto__,c__29843__auto___31576,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29732__auto__ = null;
var cljs$core$async$mix_$_state_machine__29732__auto____0 = (function (){
var statearr_31572 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31572[(0)] = cljs$core$async$mix_$_state_machine__29732__auto__);

(statearr_31572[(1)] = (1));

return statearr_31572;
});
var cljs$core$async$mix_$_state_machine__29732__auto____1 = (function (state_31513){
while(true){
var ret_value__29733__auto__ = (function (){try{while(true){
var result__29734__auto__ = switch__29731__auto__.call(null,state_31513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29734__auto__;
}
break;
}
}catch (e31573){if((e31573 instanceof Object)){
var ex__29735__auto__ = e31573;
var statearr_31574_31623 = state_31513;
(statearr_31574_31623[(5)] = ex__29735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31624 = state_31513;
state_31513 = G__31624;
continue;
} else {
return ret_value__29733__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29732__auto__ = function(state_31513){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29732__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29732__auto____1.call(this,state_31513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29732__auto____0;
cljs$core$async$mix_$_state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29732__auto____1;
return cljs$core$async$mix_$_state_machine__29732__auto__;
})()
;})(switch__29731__auto__,c__29843__auto___31576,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29845__auto__ = (function (){var statearr_31575 = f__29844__auto__.call(null);
(statearr_31575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29843__auto___31576);

return statearr_31575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29845__auto__);
});})(c__29843__auto___31576,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25806__auto__ = (((p == null))?null:p);
var m__25807__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25806__auto__)]);
if(!((m__25807__auto__ == null))){
return m__25807__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25807__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25807__auto____$1 == null))){
return m__25807__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25806__auto__ = (((p == null))?null:p);
var m__25807__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25806__auto__)]);
if(!((m__25807__auto__ == null))){
return m__25807__auto__.call(null,p,v,ch);
} else {
var m__25807__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25807__auto____$1 == null))){
return m__25807__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args31625 = [];
var len__26218__auto___31628 = arguments.length;
var i__26219__auto___31629 = (0);
while(true){
if((i__26219__auto___31629 < len__26218__auto___31628)){
args31625.push((arguments[i__26219__auto___31629]));

var G__31630 = (i__26219__auto___31629 + (1));
i__26219__auto___31629 = G__31630;
continue;
} else {
}
break;
}

var G__31627 = args31625.length;
switch (G__31627) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31625.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25806__auto__ = (((p == null))?null:p);
var m__25807__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25806__auto__)]);
if(!((m__25807__auto__ == null))){
return m__25807__auto__.call(null,p);
} else {
var m__25807__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25807__auto____$1 == null))){
return m__25807__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25806__auto__ = (((p == null))?null:p);
var m__25807__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25806__auto__)]);
if(!((m__25807__auto__ == null))){
return m__25807__auto__.call(null,p,v);
} else {
var m__25807__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25807__auto____$1 == null))){
return m__25807__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args31633 = [];
var len__26218__auto___31758 = arguments.length;
var i__26219__auto___31759 = (0);
while(true){
if((i__26219__auto___31759 < len__26218__auto___31758)){
args31633.push((arguments[i__26219__auto___31759]));

var G__31760 = (i__26219__auto___31759 + (1));
i__26219__auto___31759 = G__31760;
continue;
} else {
}
break;
}

var G__31635 = args31633.length;
switch (G__31635) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31633.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25143__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25143__auto__)){
return or__25143__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25143__auto__,mults){
return (function (p1__31632_SHARP_){
if(cljs.core.truth_(p1__31632_SHARP_.call(null,topic))){
return p1__31632_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31632_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25143__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31636 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31636 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31637){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31637 = meta31637;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31638,meta31637__$1){
var self__ = this;
var _31638__$1 = this;
return (new cljs.core.async.t_cljs$core$async31636(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31637__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31636.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31638){
var self__ = this;
var _31638__$1 = this;
return self__.meta31637;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31636.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31636.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31636.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async31636.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31636.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31636.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31636.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31636.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31637","meta31637",2039038491,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31636.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31636.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31636";

cljs.core.async.t_cljs$core$async31636.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25749__auto__,writer__25750__auto__,opt__25751__auto__){
return cljs.core._write.call(null,writer__25750__auto__,"cljs.core.async/t_cljs$core$async31636");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31636 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31636(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31637){
return (new cljs.core.async.t_cljs$core$async31636(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31637));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31636(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29843__auto___31762 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29843__auto___31762,mults,ensure_mult,p){
return (function (){
var f__29844__auto__ = (function (){var switch__29731__auto__ = ((function (c__29843__auto___31762,mults,ensure_mult,p){
return (function (state_31710){
var state_val_31711 = (state_31710[(1)]);
if((state_val_31711 === (7))){
var inst_31706 = (state_31710[(2)]);
var state_31710__$1 = state_31710;
var statearr_31712_31763 = state_31710__$1;
(statearr_31712_31763[(2)] = inst_31706);

(statearr_31712_31763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (20))){
var state_31710__$1 = state_31710;
var statearr_31713_31764 = state_31710__$1;
(statearr_31713_31764[(2)] = null);

(statearr_31713_31764[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (1))){
var state_31710__$1 = state_31710;
var statearr_31714_31765 = state_31710__$1;
(statearr_31714_31765[(2)] = null);

(statearr_31714_31765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (24))){
var inst_31689 = (state_31710[(7)]);
var inst_31698 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31689);
var state_31710__$1 = state_31710;
var statearr_31715_31766 = state_31710__$1;
(statearr_31715_31766[(2)] = inst_31698);

(statearr_31715_31766[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (4))){
var inst_31641 = (state_31710[(8)]);
var inst_31641__$1 = (state_31710[(2)]);
var inst_31642 = (inst_31641__$1 == null);
var state_31710__$1 = (function (){var statearr_31716 = state_31710;
(statearr_31716[(8)] = inst_31641__$1);

return statearr_31716;
})();
if(cljs.core.truth_(inst_31642)){
var statearr_31717_31767 = state_31710__$1;
(statearr_31717_31767[(1)] = (5));

} else {
var statearr_31718_31768 = state_31710__$1;
(statearr_31718_31768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (15))){
var inst_31683 = (state_31710[(2)]);
var state_31710__$1 = state_31710;
var statearr_31719_31769 = state_31710__$1;
(statearr_31719_31769[(2)] = inst_31683);

(statearr_31719_31769[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (21))){
var inst_31703 = (state_31710[(2)]);
var state_31710__$1 = (function (){var statearr_31720 = state_31710;
(statearr_31720[(9)] = inst_31703);

return statearr_31720;
})();
var statearr_31721_31770 = state_31710__$1;
(statearr_31721_31770[(2)] = null);

(statearr_31721_31770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (13))){
var inst_31665 = (state_31710[(10)]);
var inst_31667 = cljs.core.chunked_seq_QMARK_.call(null,inst_31665);
var state_31710__$1 = state_31710;
if(inst_31667){
var statearr_31722_31771 = state_31710__$1;
(statearr_31722_31771[(1)] = (16));

} else {
var statearr_31723_31772 = state_31710__$1;
(statearr_31723_31772[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (22))){
var inst_31695 = (state_31710[(2)]);
var state_31710__$1 = state_31710;
if(cljs.core.truth_(inst_31695)){
var statearr_31724_31773 = state_31710__$1;
(statearr_31724_31773[(1)] = (23));

} else {
var statearr_31725_31774 = state_31710__$1;
(statearr_31725_31774[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (6))){
var inst_31691 = (state_31710[(11)]);
var inst_31689 = (state_31710[(7)]);
var inst_31641 = (state_31710[(8)]);
var inst_31689__$1 = topic_fn.call(null,inst_31641);
var inst_31690 = cljs.core.deref.call(null,mults);
var inst_31691__$1 = cljs.core.get.call(null,inst_31690,inst_31689__$1);
var state_31710__$1 = (function (){var statearr_31726 = state_31710;
(statearr_31726[(11)] = inst_31691__$1);

(statearr_31726[(7)] = inst_31689__$1);

return statearr_31726;
})();
if(cljs.core.truth_(inst_31691__$1)){
var statearr_31727_31775 = state_31710__$1;
(statearr_31727_31775[(1)] = (19));

} else {
var statearr_31728_31776 = state_31710__$1;
(statearr_31728_31776[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (25))){
var inst_31700 = (state_31710[(2)]);
var state_31710__$1 = state_31710;
var statearr_31729_31777 = state_31710__$1;
(statearr_31729_31777[(2)] = inst_31700);

(statearr_31729_31777[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (17))){
var inst_31665 = (state_31710[(10)]);
var inst_31674 = cljs.core.first.call(null,inst_31665);
var inst_31675 = cljs.core.async.muxch_STAR_.call(null,inst_31674);
var inst_31676 = cljs.core.async.close_BANG_.call(null,inst_31675);
var inst_31677 = cljs.core.next.call(null,inst_31665);
var inst_31651 = inst_31677;
var inst_31652 = null;
var inst_31653 = (0);
var inst_31654 = (0);
var state_31710__$1 = (function (){var statearr_31730 = state_31710;
(statearr_31730[(12)] = inst_31652);

(statearr_31730[(13)] = inst_31654);

(statearr_31730[(14)] = inst_31676);

(statearr_31730[(15)] = inst_31651);

(statearr_31730[(16)] = inst_31653);

return statearr_31730;
})();
var statearr_31731_31778 = state_31710__$1;
(statearr_31731_31778[(2)] = null);

(statearr_31731_31778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (3))){
var inst_31708 = (state_31710[(2)]);
var state_31710__$1 = state_31710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31710__$1,inst_31708);
} else {
if((state_val_31711 === (12))){
var inst_31685 = (state_31710[(2)]);
var state_31710__$1 = state_31710;
var statearr_31732_31779 = state_31710__$1;
(statearr_31732_31779[(2)] = inst_31685);

(statearr_31732_31779[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (2))){
var state_31710__$1 = state_31710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31710__$1,(4),ch);
} else {
if((state_val_31711 === (23))){
var state_31710__$1 = state_31710;
var statearr_31733_31780 = state_31710__$1;
(statearr_31733_31780[(2)] = null);

(statearr_31733_31780[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (19))){
var inst_31691 = (state_31710[(11)]);
var inst_31641 = (state_31710[(8)]);
var inst_31693 = cljs.core.async.muxch_STAR_.call(null,inst_31691);
var state_31710__$1 = state_31710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31710__$1,(22),inst_31693,inst_31641);
} else {
if((state_val_31711 === (11))){
var inst_31665 = (state_31710[(10)]);
var inst_31651 = (state_31710[(15)]);
var inst_31665__$1 = cljs.core.seq.call(null,inst_31651);
var state_31710__$1 = (function (){var statearr_31734 = state_31710;
(statearr_31734[(10)] = inst_31665__$1);

return statearr_31734;
})();
if(inst_31665__$1){
var statearr_31735_31781 = state_31710__$1;
(statearr_31735_31781[(1)] = (13));

} else {
var statearr_31736_31782 = state_31710__$1;
(statearr_31736_31782[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (9))){
var inst_31687 = (state_31710[(2)]);
var state_31710__$1 = state_31710;
var statearr_31737_31783 = state_31710__$1;
(statearr_31737_31783[(2)] = inst_31687);

(statearr_31737_31783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (5))){
var inst_31648 = cljs.core.deref.call(null,mults);
var inst_31649 = cljs.core.vals.call(null,inst_31648);
var inst_31650 = cljs.core.seq.call(null,inst_31649);
var inst_31651 = inst_31650;
var inst_31652 = null;
var inst_31653 = (0);
var inst_31654 = (0);
var state_31710__$1 = (function (){var statearr_31738 = state_31710;
(statearr_31738[(12)] = inst_31652);

(statearr_31738[(13)] = inst_31654);

(statearr_31738[(15)] = inst_31651);

(statearr_31738[(16)] = inst_31653);

return statearr_31738;
})();
var statearr_31739_31784 = state_31710__$1;
(statearr_31739_31784[(2)] = null);

(statearr_31739_31784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (14))){
var state_31710__$1 = state_31710;
var statearr_31743_31785 = state_31710__$1;
(statearr_31743_31785[(2)] = null);

(statearr_31743_31785[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (16))){
var inst_31665 = (state_31710[(10)]);
var inst_31669 = cljs.core.chunk_first.call(null,inst_31665);
var inst_31670 = cljs.core.chunk_rest.call(null,inst_31665);
var inst_31671 = cljs.core.count.call(null,inst_31669);
var inst_31651 = inst_31670;
var inst_31652 = inst_31669;
var inst_31653 = inst_31671;
var inst_31654 = (0);
var state_31710__$1 = (function (){var statearr_31744 = state_31710;
(statearr_31744[(12)] = inst_31652);

(statearr_31744[(13)] = inst_31654);

(statearr_31744[(15)] = inst_31651);

(statearr_31744[(16)] = inst_31653);

return statearr_31744;
})();
var statearr_31745_31786 = state_31710__$1;
(statearr_31745_31786[(2)] = null);

(statearr_31745_31786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (10))){
var inst_31652 = (state_31710[(12)]);
var inst_31654 = (state_31710[(13)]);
var inst_31651 = (state_31710[(15)]);
var inst_31653 = (state_31710[(16)]);
var inst_31659 = cljs.core._nth.call(null,inst_31652,inst_31654);
var inst_31660 = cljs.core.async.muxch_STAR_.call(null,inst_31659);
var inst_31661 = cljs.core.async.close_BANG_.call(null,inst_31660);
var inst_31662 = (inst_31654 + (1));
var tmp31740 = inst_31652;
var tmp31741 = inst_31651;
var tmp31742 = inst_31653;
var inst_31651__$1 = tmp31741;
var inst_31652__$1 = tmp31740;
var inst_31653__$1 = tmp31742;
var inst_31654__$1 = inst_31662;
var state_31710__$1 = (function (){var statearr_31746 = state_31710;
(statearr_31746[(12)] = inst_31652__$1);

(statearr_31746[(13)] = inst_31654__$1);

(statearr_31746[(17)] = inst_31661);

(statearr_31746[(15)] = inst_31651__$1);

(statearr_31746[(16)] = inst_31653__$1);

return statearr_31746;
})();
var statearr_31747_31787 = state_31710__$1;
(statearr_31747_31787[(2)] = null);

(statearr_31747_31787[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (18))){
var inst_31680 = (state_31710[(2)]);
var state_31710__$1 = state_31710;
var statearr_31748_31788 = state_31710__$1;
(statearr_31748_31788[(2)] = inst_31680);

(statearr_31748_31788[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (8))){
var inst_31654 = (state_31710[(13)]);
var inst_31653 = (state_31710[(16)]);
var inst_31656 = (inst_31654 < inst_31653);
var inst_31657 = inst_31656;
var state_31710__$1 = state_31710;
if(cljs.core.truth_(inst_31657)){
var statearr_31749_31789 = state_31710__$1;
(statearr_31749_31789[(1)] = (10));

} else {
var statearr_31750_31790 = state_31710__$1;
(statearr_31750_31790[(1)] = (11));

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
});})(c__29843__auto___31762,mults,ensure_mult,p))
;
return ((function (switch__29731__auto__,c__29843__auto___31762,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29732__auto__ = null;
var cljs$core$async$state_machine__29732__auto____0 = (function (){
var statearr_31754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31754[(0)] = cljs$core$async$state_machine__29732__auto__);

(statearr_31754[(1)] = (1));

return statearr_31754;
});
var cljs$core$async$state_machine__29732__auto____1 = (function (state_31710){
while(true){
var ret_value__29733__auto__ = (function (){try{while(true){
var result__29734__auto__ = switch__29731__auto__.call(null,state_31710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29734__auto__;
}
break;
}
}catch (e31755){if((e31755 instanceof Object)){
var ex__29735__auto__ = e31755;
var statearr_31756_31791 = state_31710;
(statearr_31756_31791[(5)] = ex__29735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31792 = state_31710;
state_31710 = G__31792;
continue;
} else {
return ret_value__29733__auto__;
}
break;
}
});
cljs$core$async$state_machine__29732__auto__ = function(state_31710){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29732__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29732__auto____1.call(this,state_31710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29732__auto____0;
cljs$core$async$state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29732__auto____1;
return cljs$core$async$state_machine__29732__auto__;
})()
;})(switch__29731__auto__,c__29843__auto___31762,mults,ensure_mult,p))
})();
var state__29845__auto__ = (function (){var statearr_31757 = f__29844__auto__.call(null);
(statearr_31757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29843__auto___31762);

return statearr_31757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29845__auto__);
});})(c__29843__auto___31762,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args31793 = [];
var len__26218__auto___31796 = arguments.length;
var i__26219__auto___31797 = (0);
while(true){
if((i__26219__auto___31797 < len__26218__auto___31796)){
args31793.push((arguments[i__26219__auto___31797]));

var G__31798 = (i__26219__auto___31797 + (1));
i__26219__auto___31797 = G__31798;
continue;
} else {
}
break;
}

var G__31795 = args31793.length;
switch (G__31795) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31793.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args31800 = [];
var len__26218__auto___31803 = arguments.length;
var i__26219__auto___31804 = (0);
while(true){
if((i__26219__auto___31804 < len__26218__auto___31803)){
args31800.push((arguments[i__26219__auto___31804]));

var G__31805 = (i__26219__auto___31804 + (1));
i__26219__auto___31804 = G__31805;
continue;
} else {
}
break;
}

var G__31802 = args31800.length;
switch (G__31802) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31800.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args31807 = [];
var len__26218__auto___31878 = arguments.length;
var i__26219__auto___31879 = (0);
while(true){
if((i__26219__auto___31879 < len__26218__auto___31878)){
args31807.push((arguments[i__26219__auto___31879]));

var G__31880 = (i__26219__auto___31879 + (1));
i__26219__auto___31879 = G__31880;
continue;
} else {
}
break;
}

var G__31809 = args31807.length;
switch (G__31809) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31807.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__29843__auto___31882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29843__auto___31882,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29844__auto__ = (function (){var switch__29731__auto__ = ((function (c__29843__auto___31882,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31848){
var state_val_31849 = (state_31848[(1)]);
if((state_val_31849 === (7))){
var state_31848__$1 = state_31848;
var statearr_31850_31883 = state_31848__$1;
(statearr_31850_31883[(2)] = null);

(statearr_31850_31883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (1))){
var state_31848__$1 = state_31848;
var statearr_31851_31884 = state_31848__$1;
(statearr_31851_31884[(2)] = null);

(statearr_31851_31884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (4))){
var inst_31812 = (state_31848[(7)]);
var inst_31814 = (inst_31812 < cnt);
var state_31848__$1 = state_31848;
if(cljs.core.truth_(inst_31814)){
var statearr_31852_31885 = state_31848__$1;
(statearr_31852_31885[(1)] = (6));

} else {
var statearr_31853_31886 = state_31848__$1;
(statearr_31853_31886[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (15))){
var inst_31844 = (state_31848[(2)]);
var state_31848__$1 = state_31848;
var statearr_31854_31887 = state_31848__$1;
(statearr_31854_31887[(2)] = inst_31844);

(statearr_31854_31887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (13))){
var inst_31837 = cljs.core.async.close_BANG_.call(null,out);
var state_31848__$1 = state_31848;
var statearr_31855_31888 = state_31848__$1;
(statearr_31855_31888[(2)] = inst_31837);

(statearr_31855_31888[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (6))){
var state_31848__$1 = state_31848;
var statearr_31856_31889 = state_31848__$1;
(statearr_31856_31889[(2)] = null);

(statearr_31856_31889[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (3))){
var inst_31846 = (state_31848[(2)]);
var state_31848__$1 = state_31848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31848__$1,inst_31846);
} else {
if((state_val_31849 === (12))){
var inst_31834 = (state_31848[(8)]);
var inst_31834__$1 = (state_31848[(2)]);
var inst_31835 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31834__$1);
var state_31848__$1 = (function (){var statearr_31857 = state_31848;
(statearr_31857[(8)] = inst_31834__$1);

return statearr_31857;
})();
if(cljs.core.truth_(inst_31835)){
var statearr_31858_31890 = state_31848__$1;
(statearr_31858_31890[(1)] = (13));

} else {
var statearr_31859_31891 = state_31848__$1;
(statearr_31859_31891[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (2))){
var inst_31811 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31812 = (0);
var state_31848__$1 = (function (){var statearr_31860 = state_31848;
(statearr_31860[(9)] = inst_31811);

(statearr_31860[(7)] = inst_31812);

return statearr_31860;
})();
var statearr_31861_31892 = state_31848__$1;
(statearr_31861_31892[(2)] = null);

(statearr_31861_31892[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (11))){
var inst_31812 = (state_31848[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31848,(10),Object,null,(9));
var inst_31821 = chs__$1.call(null,inst_31812);
var inst_31822 = done.call(null,inst_31812);
var inst_31823 = cljs.core.async.take_BANG_.call(null,inst_31821,inst_31822);
var state_31848__$1 = state_31848;
var statearr_31862_31893 = state_31848__$1;
(statearr_31862_31893[(2)] = inst_31823);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31848__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (9))){
var inst_31812 = (state_31848[(7)]);
var inst_31825 = (state_31848[(2)]);
var inst_31826 = (inst_31812 + (1));
var inst_31812__$1 = inst_31826;
var state_31848__$1 = (function (){var statearr_31863 = state_31848;
(statearr_31863[(10)] = inst_31825);

(statearr_31863[(7)] = inst_31812__$1);

return statearr_31863;
})();
var statearr_31864_31894 = state_31848__$1;
(statearr_31864_31894[(2)] = null);

(statearr_31864_31894[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (5))){
var inst_31832 = (state_31848[(2)]);
var state_31848__$1 = (function (){var statearr_31865 = state_31848;
(statearr_31865[(11)] = inst_31832);

return statearr_31865;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31848__$1,(12),dchan);
} else {
if((state_val_31849 === (14))){
var inst_31834 = (state_31848[(8)]);
var inst_31839 = cljs.core.apply.call(null,f,inst_31834);
var state_31848__$1 = state_31848;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31848__$1,(16),out,inst_31839);
} else {
if((state_val_31849 === (16))){
var inst_31841 = (state_31848[(2)]);
var state_31848__$1 = (function (){var statearr_31866 = state_31848;
(statearr_31866[(12)] = inst_31841);

return statearr_31866;
})();
var statearr_31867_31895 = state_31848__$1;
(statearr_31867_31895[(2)] = null);

(statearr_31867_31895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (10))){
var inst_31816 = (state_31848[(2)]);
var inst_31817 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31848__$1 = (function (){var statearr_31868 = state_31848;
(statearr_31868[(13)] = inst_31816);

return statearr_31868;
})();
var statearr_31869_31896 = state_31848__$1;
(statearr_31869_31896[(2)] = inst_31817);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31848__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (8))){
var inst_31830 = (state_31848[(2)]);
var state_31848__$1 = state_31848;
var statearr_31870_31897 = state_31848__$1;
(statearr_31870_31897[(2)] = inst_31830);

(statearr_31870_31897[(1)] = (5));


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
});})(c__29843__auto___31882,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29731__auto__,c__29843__auto___31882,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29732__auto__ = null;
var cljs$core$async$state_machine__29732__auto____0 = (function (){
var statearr_31874 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31874[(0)] = cljs$core$async$state_machine__29732__auto__);

(statearr_31874[(1)] = (1));

return statearr_31874;
});
var cljs$core$async$state_machine__29732__auto____1 = (function (state_31848){
while(true){
var ret_value__29733__auto__ = (function (){try{while(true){
var result__29734__auto__ = switch__29731__auto__.call(null,state_31848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29734__auto__;
}
break;
}
}catch (e31875){if((e31875 instanceof Object)){
var ex__29735__auto__ = e31875;
var statearr_31876_31898 = state_31848;
(statearr_31876_31898[(5)] = ex__29735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31899 = state_31848;
state_31848 = G__31899;
continue;
} else {
return ret_value__29733__auto__;
}
break;
}
});
cljs$core$async$state_machine__29732__auto__ = function(state_31848){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29732__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29732__auto____1.call(this,state_31848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29732__auto____0;
cljs$core$async$state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29732__auto____1;
return cljs$core$async$state_machine__29732__auto__;
})()
;})(switch__29731__auto__,c__29843__auto___31882,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29845__auto__ = (function (){var statearr_31877 = f__29844__auto__.call(null);
(statearr_31877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29843__auto___31882);

return statearr_31877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29845__auto__);
});})(c__29843__auto___31882,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args31901 = [];
var len__26218__auto___31959 = arguments.length;
var i__26219__auto___31960 = (0);
while(true){
if((i__26219__auto___31960 < len__26218__auto___31959)){
args31901.push((arguments[i__26219__auto___31960]));

var G__31961 = (i__26219__auto___31960 + (1));
i__26219__auto___31960 = G__31961;
continue;
} else {
}
break;
}

var G__31903 = args31901.length;
switch (G__31903) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31901.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29843__auto___31963 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29843__auto___31963,out){
return (function (){
var f__29844__auto__ = (function (){var switch__29731__auto__ = ((function (c__29843__auto___31963,out){
return (function (state_31935){
var state_val_31936 = (state_31935[(1)]);
if((state_val_31936 === (7))){
var inst_31915 = (state_31935[(7)]);
var inst_31914 = (state_31935[(8)]);
var inst_31914__$1 = (state_31935[(2)]);
var inst_31915__$1 = cljs.core.nth.call(null,inst_31914__$1,(0),null);
var inst_31916 = cljs.core.nth.call(null,inst_31914__$1,(1),null);
var inst_31917 = (inst_31915__$1 == null);
var state_31935__$1 = (function (){var statearr_31937 = state_31935;
(statearr_31937[(9)] = inst_31916);

(statearr_31937[(7)] = inst_31915__$1);

(statearr_31937[(8)] = inst_31914__$1);

return statearr_31937;
})();
if(cljs.core.truth_(inst_31917)){
var statearr_31938_31964 = state_31935__$1;
(statearr_31938_31964[(1)] = (8));

} else {
var statearr_31939_31965 = state_31935__$1;
(statearr_31939_31965[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31936 === (1))){
var inst_31904 = cljs.core.vec.call(null,chs);
var inst_31905 = inst_31904;
var state_31935__$1 = (function (){var statearr_31940 = state_31935;
(statearr_31940[(10)] = inst_31905);

return statearr_31940;
})();
var statearr_31941_31966 = state_31935__$1;
(statearr_31941_31966[(2)] = null);

(statearr_31941_31966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31936 === (4))){
var inst_31905 = (state_31935[(10)]);
var state_31935__$1 = state_31935;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31935__$1,(7),inst_31905);
} else {
if((state_val_31936 === (6))){
var inst_31931 = (state_31935[(2)]);
var state_31935__$1 = state_31935;
var statearr_31942_31967 = state_31935__$1;
(statearr_31942_31967[(2)] = inst_31931);

(statearr_31942_31967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31936 === (3))){
var inst_31933 = (state_31935[(2)]);
var state_31935__$1 = state_31935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31935__$1,inst_31933);
} else {
if((state_val_31936 === (2))){
var inst_31905 = (state_31935[(10)]);
var inst_31907 = cljs.core.count.call(null,inst_31905);
var inst_31908 = (inst_31907 > (0));
var state_31935__$1 = state_31935;
if(cljs.core.truth_(inst_31908)){
var statearr_31944_31968 = state_31935__$1;
(statearr_31944_31968[(1)] = (4));

} else {
var statearr_31945_31969 = state_31935__$1;
(statearr_31945_31969[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31936 === (11))){
var inst_31905 = (state_31935[(10)]);
var inst_31924 = (state_31935[(2)]);
var tmp31943 = inst_31905;
var inst_31905__$1 = tmp31943;
var state_31935__$1 = (function (){var statearr_31946 = state_31935;
(statearr_31946[(10)] = inst_31905__$1);

(statearr_31946[(11)] = inst_31924);

return statearr_31946;
})();
var statearr_31947_31970 = state_31935__$1;
(statearr_31947_31970[(2)] = null);

(statearr_31947_31970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31936 === (9))){
var inst_31915 = (state_31935[(7)]);
var state_31935__$1 = state_31935;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31935__$1,(11),out,inst_31915);
} else {
if((state_val_31936 === (5))){
var inst_31929 = cljs.core.async.close_BANG_.call(null,out);
var state_31935__$1 = state_31935;
var statearr_31948_31971 = state_31935__$1;
(statearr_31948_31971[(2)] = inst_31929);

(statearr_31948_31971[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31936 === (10))){
var inst_31927 = (state_31935[(2)]);
var state_31935__$1 = state_31935;
var statearr_31949_31972 = state_31935__$1;
(statearr_31949_31972[(2)] = inst_31927);

(statearr_31949_31972[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31936 === (8))){
var inst_31916 = (state_31935[(9)]);
var inst_31905 = (state_31935[(10)]);
var inst_31915 = (state_31935[(7)]);
var inst_31914 = (state_31935[(8)]);
var inst_31919 = (function (){var cs = inst_31905;
var vec__31910 = inst_31914;
var v = inst_31915;
var c = inst_31916;
return ((function (cs,vec__31910,v,c,inst_31916,inst_31905,inst_31915,inst_31914,state_val_31936,c__29843__auto___31963,out){
return (function (p1__31900_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31900_SHARP_);
});
;})(cs,vec__31910,v,c,inst_31916,inst_31905,inst_31915,inst_31914,state_val_31936,c__29843__auto___31963,out))
})();
var inst_31920 = cljs.core.filterv.call(null,inst_31919,inst_31905);
var inst_31905__$1 = inst_31920;
var state_31935__$1 = (function (){var statearr_31950 = state_31935;
(statearr_31950[(10)] = inst_31905__$1);

return statearr_31950;
})();
var statearr_31951_31973 = state_31935__$1;
(statearr_31951_31973[(2)] = null);

(statearr_31951_31973[(1)] = (2));


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
});})(c__29843__auto___31963,out))
;
return ((function (switch__29731__auto__,c__29843__auto___31963,out){
return (function() {
var cljs$core$async$state_machine__29732__auto__ = null;
var cljs$core$async$state_machine__29732__auto____0 = (function (){
var statearr_31955 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31955[(0)] = cljs$core$async$state_machine__29732__auto__);

(statearr_31955[(1)] = (1));

return statearr_31955;
});
var cljs$core$async$state_machine__29732__auto____1 = (function (state_31935){
while(true){
var ret_value__29733__auto__ = (function (){try{while(true){
var result__29734__auto__ = switch__29731__auto__.call(null,state_31935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29734__auto__;
}
break;
}
}catch (e31956){if((e31956 instanceof Object)){
var ex__29735__auto__ = e31956;
var statearr_31957_31974 = state_31935;
(statearr_31957_31974[(5)] = ex__29735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31975 = state_31935;
state_31935 = G__31975;
continue;
} else {
return ret_value__29733__auto__;
}
break;
}
});
cljs$core$async$state_machine__29732__auto__ = function(state_31935){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29732__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29732__auto____1.call(this,state_31935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29732__auto____0;
cljs$core$async$state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29732__auto____1;
return cljs$core$async$state_machine__29732__auto__;
})()
;})(switch__29731__auto__,c__29843__auto___31963,out))
})();
var state__29845__auto__ = (function (){var statearr_31958 = f__29844__auto__.call(null);
(statearr_31958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29843__auto___31963);

return statearr_31958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29845__auto__);
});})(c__29843__auto___31963,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args31976 = [];
var len__26218__auto___32025 = arguments.length;
var i__26219__auto___32026 = (0);
while(true){
if((i__26219__auto___32026 < len__26218__auto___32025)){
args31976.push((arguments[i__26219__auto___32026]));

var G__32027 = (i__26219__auto___32026 + (1));
i__26219__auto___32026 = G__32027;
continue;
} else {
}
break;
}

var G__31978 = args31976.length;
switch (G__31978) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31976.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29843__auto___32029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29843__auto___32029,out){
return (function (){
var f__29844__auto__ = (function (){var switch__29731__auto__ = ((function (c__29843__auto___32029,out){
return (function (state_32002){
var state_val_32003 = (state_32002[(1)]);
if((state_val_32003 === (7))){
var inst_31984 = (state_32002[(7)]);
var inst_31984__$1 = (state_32002[(2)]);
var inst_31985 = (inst_31984__$1 == null);
var inst_31986 = cljs.core.not.call(null,inst_31985);
var state_32002__$1 = (function (){var statearr_32004 = state_32002;
(statearr_32004[(7)] = inst_31984__$1);

return statearr_32004;
})();
if(inst_31986){
var statearr_32005_32030 = state_32002__$1;
(statearr_32005_32030[(1)] = (8));

} else {
var statearr_32006_32031 = state_32002__$1;
(statearr_32006_32031[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32003 === (1))){
var inst_31979 = (0);
var state_32002__$1 = (function (){var statearr_32007 = state_32002;
(statearr_32007[(8)] = inst_31979);

return statearr_32007;
})();
var statearr_32008_32032 = state_32002__$1;
(statearr_32008_32032[(2)] = null);

(statearr_32008_32032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32003 === (4))){
var state_32002__$1 = state_32002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32002__$1,(7),ch);
} else {
if((state_val_32003 === (6))){
var inst_31997 = (state_32002[(2)]);
var state_32002__$1 = state_32002;
var statearr_32009_32033 = state_32002__$1;
(statearr_32009_32033[(2)] = inst_31997);

(statearr_32009_32033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32003 === (3))){
var inst_31999 = (state_32002[(2)]);
var inst_32000 = cljs.core.async.close_BANG_.call(null,out);
var state_32002__$1 = (function (){var statearr_32010 = state_32002;
(statearr_32010[(9)] = inst_31999);

return statearr_32010;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32002__$1,inst_32000);
} else {
if((state_val_32003 === (2))){
var inst_31979 = (state_32002[(8)]);
var inst_31981 = (inst_31979 < n);
var state_32002__$1 = state_32002;
if(cljs.core.truth_(inst_31981)){
var statearr_32011_32034 = state_32002__$1;
(statearr_32011_32034[(1)] = (4));

} else {
var statearr_32012_32035 = state_32002__$1;
(statearr_32012_32035[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32003 === (11))){
var inst_31979 = (state_32002[(8)]);
var inst_31989 = (state_32002[(2)]);
var inst_31990 = (inst_31979 + (1));
var inst_31979__$1 = inst_31990;
var state_32002__$1 = (function (){var statearr_32013 = state_32002;
(statearr_32013[(8)] = inst_31979__$1);

(statearr_32013[(10)] = inst_31989);

return statearr_32013;
})();
var statearr_32014_32036 = state_32002__$1;
(statearr_32014_32036[(2)] = null);

(statearr_32014_32036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32003 === (9))){
var state_32002__$1 = state_32002;
var statearr_32015_32037 = state_32002__$1;
(statearr_32015_32037[(2)] = null);

(statearr_32015_32037[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32003 === (5))){
var state_32002__$1 = state_32002;
var statearr_32016_32038 = state_32002__$1;
(statearr_32016_32038[(2)] = null);

(statearr_32016_32038[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32003 === (10))){
var inst_31994 = (state_32002[(2)]);
var state_32002__$1 = state_32002;
var statearr_32017_32039 = state_32002__$1;
(statearr_32017_32039[(2)] = inst_31994);

(statearr_32017_32039[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32003 === (8))){
var inst_31984 = (state_32002[(7)]);
var state_32002__$1 = state_32002;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32002__$1,(11),out,inst_31984);
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
});})(c__29843__auto___32029,out))
;
return ((function (switch__29731__auto__,c__29843__auto___32029,out){
return (function() {
var cljs$core$async$state_machine__29732__auto__ = null;
var cljs$core$async$state_machine__29732__auto____0 = (function (){
var statearr_32021 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32021[(0)] = cljs$core$async$state_machine__29732__auto__);

(statearr_32021[(1)] = (1));

return statearr_32021;
});
var cljs$core$async$state_machine__29732__auto____1 = (function (state_32002){
while(true){
var ret_value__29733__auto__ = (function (){try{while(true){
var result__29734__auto__ = switch__29731__auto__.call(null,state_32002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29734__auto__;
}
break;
}
}catch (e32022){if((e32022 instanceof Object)){
var ex__29735__auto__ = e32022;
var statearr_32023_32040 = state_32002;
(statearr_32023_32040[(5)] = ex__29735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32041 = state_32002;
state_32002 = G__32041;
continue;
} else {
return ret_value__29733__auto__;
}
break;
}
});
cljs$core$async$state_machine__29732__auto__ = function(state_32002){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29732__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29732__auto____1.call(this,state_32002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29732__auto____0;
cljs$core$async$state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29732__auto____1;
return cljs$core$async$state_machine__29732__auto__;
})()
;})(switch__29731__auto__,c__29843__auto___32029,out))
})();
var state__29845__auto__ = (function (){var statearr_32024 = f__29844__auto__.call(null);
(statearr_32024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29843__auto___32029);

return statearr_32024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29845__auto__);
});})(c__29843__auto___32029,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32049 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32049 = (function (map_LT_,f,ch,meta32050){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32050 = meta32050;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32051,meta32050__$1){
var self__ = this;
var _32051__$1 = this;
return (new cljs.core.async.t_cljs$core$async32049(self__.map_LT_,self__.f,self__.ch,meta32050__$1));
});

cljs.core.async.t_cljs$core$async32049.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32051){
var self__ = this;
var _32051__$1 = this;
return self__.meta32050;
});

cljs.core.async.t_cljs$core$async32049.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32049.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32049.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32049.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32049.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32052 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32052 = (function (map_LT_,f,ch,meta32050,_,fn1,meta32053){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32050 = meta32050;
this._ = _;
this.fn1 = fn1;
this.meta32053 = meta32053;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32054,meta32053__$1){
var self__ = this;
var _32054__$1 = this;
return (new cljs.core.async.t_cljs$core$async32052(self__.map_LT_,self__.f,self__.ch,self__.meta32050,self__._,self__.fn1,meta32053__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32052.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32054){
var self__ = this;
var _32054__$1 = this;
return self__.meta32053;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32052.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32052.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32052.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32052.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32042_SHARP_){
return f1.call(null,(((p1__32042_SHARP_ == null))?null:self__.f.call(null,p1__32042_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32052.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32050","meta32050",1519023936,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32049","cljs.core.async/t_cljs$core$async32049",-2133898004,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32053","meta32053",-701742881,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32052.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32052.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32052";

cljs.core.async.t_cljs$core$async32052.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25749__auto__,writer__25750__auto__,opt__25751__auto__){
return cljs.core._write.call(null,writer__25750__auto__,"cljs.core.async/t_cljs$core$async32052");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32052 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32052(map_LT___$1,f__$1,ch__$1,meta32050__$1,___$2,fn1__$1,meta32053){
return (new cljs.core.async.t_cljs$core$async32052(map_LT___$1,f__$1,ch__$1,meta32050__$1,___$2,fn1__$1,meta32053));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32052(self__.map_LT_,self__.f,self__.ch,self__.meta32050,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25131__auto__ = ret;
if(cljs.core.truth_(and__25131__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25131__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32049.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32049.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32049.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32050","meta32050",1519023936,null)], null);
});

cljs.core.async.t_cljs$core$async32049.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32049.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32049";

cljs.core.async.t_cljs$core$async32049.cljs$lang$ctorPrWriter = (function (this__25749__auto__,writer__25750__auto__,opt__25751__auto__){
return cljs.core._write.call(null,writer__25750__auto__,"cljs.core.async/t_cljs$core$async32049");
});

cljs.core.async.__GT_t_cljs$core$async32049 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32049(map_LT___$1,f__$1,ch__$1,meta32050){
return (new cljs.core.async.t_cljs$core$async32049(map_LT___$1,f__$1,ch__$1,meta32050));
});

}

return (new cljs.core.async.t_cljs$core$async32049(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32058 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32058 = (function (map_GT_,f,ch,meta32059){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta32059 = meta32059;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32060,meta32059__$1){
var self__ = this;
var _32060__$1 = this;
return (new cljs.core.async.t_cljs$core$async32058(self__.map_GT_,self__.f,self__.ch,meta32059__$1));
});

cljs.core.async.t_cljs$core$async32058.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32060){
var self__ = this;
var _32060__$1 = this;
return self__.meta32059;
});

cljs.core.async.t_cljs$core$async32058.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32058.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32058.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32058.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32058.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32058.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32058.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32059","meta32059",-910596446,null)], null);
});

cljs.core.async.t_cljs$core$async32058.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32058.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32058";

cljs.core.async.t_cljs$core$async32058.cljs$lang$ctorPrWriter = (function (this__25749__auto__,writer__25750__auto__,opt__25751__auto__){
return cljs.core._write.call(null,writer__25750__auto__,"cljs.core.async/t_cljs$core$async32058");
});

cljs.core.async.__GT_t_cljs$core$async32058 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32058(map_GT___$1,f__$1,ch__$1,meta32059){
return (new cljs.core.async.t_cljs$core$async32058(map_GT___$1,f__$1,ch__$1,meta32059));
});

}

return (new cljs.core.async.t_cljs$core$async32058(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32064 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32064 = (function (filter_GT_,p,ch,meta32065){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta32065 = meta32065;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32066,meta32065__$1){
var self__ = this;
var _32066__$1 = this;
return (new cljs.core.async.t_cljs$core$async32064(self__.filter_GT_,self__.p,self__.ch,meta32065__$1));
});

cljs.core.async.t_cljs$core$async32064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32066){
var self__ = this;
var _32066__$1 = this;
return self__.meta32065;
});

cljs.core.async.t_cljs$core$async32064.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32064.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32064.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32064.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32064.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32064.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32064.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32064.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32065","meta32065",-21910967,null)], null);
});

cljs.core.async.t_cljs$core$async32064.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32064.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32064";

cljs.core.async.t_cljs$core$async32064.cljs$lang$ctorPrWriter = (function (this__25749__auto__,writer__25750__auto__,opt__25751__auto__){
return cljs.core._write.call(null,writer__25750__auto__,"cljs.core.async/t_cljs$core$async32064");
});

cljs.core.async.__GT_t_cljs$core$async32064 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32064(filter_GT___$1,p__$1,ch__$1,meta32065){
return (new cljs.core.async.t_cljs$core$async32064(filter_GT___$1,p__$1,ch__$1,meta32065));
});

}

return (new cljs.core.async.t_cljs$core$async32064(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args32067 = [];
var len__26218__auto___32111 = arguments.length;
var i__26219__auto___32112 = (0);
while(true){
if((i__26219__auto___32112 < len__26218__auto___32111)){
args32067.push((arguments[i__26219__auto___32112]));

var G__32113 = (i__26219__auto___32112 + (1));
i__26219__auto___32112 = G__32113;
continue;
} else {
}
break;
}

var G__32069 = args32067.length;
switch (G__32069) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32067.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29843__auto___32115 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29843__auto___32115,out){
return (function (){
var f__29844__auto__ = (function (){var switch__29731__auto__ = ((function (c__29843__auto___32115,out){
return (function (state_32090){
var state_val_32091 = (state_32090[(1)]);
if((state_val_32091 === (7))){
var inst_32086 = (state_32090[(2)]);
var state_32090__$1 = state_32090;
var statearr_32092_32116 = state_32090__$1;
(statearr_32092_32116[(2)] = inst_32086);

(statearr_32092_32116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32091 === (1))){
var state_32090__$1 = state_32090;
var statearr_32093_32117 = state_32090__$1;
(statearr_32093_32117[(2)] = null);

(statearr_32093_32117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32091 === (4))){
var inst_32072 = (state_32090[(7)]);
var inst_32072__$1 = (state_32090[(2)]);
var inst_32073 = (inst_32072__$1 == null);
var state_32090__$1 = (function (){var statearr_32094 = state_32090;
(statearr_32094[(7)] = inst_32072__$1);

return statearr_32094;
})();
if(cljs.core.truth_(inst_32073)){
var statearr_32095_32118 = state_32090__$1;
(statearr_32095_32118[(1)] = (5));

} else {
var statearr_32096_32119 = state_32090__$1;
(statearr_32096_32119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32091 === (6))){
var inst_32072 = (state_32090[(7)]);
var inst_32077 = p.call(null,inst_32072);
var state_32090__$1 = state_32090;
if(cljs.core.truth_(inst_32077)){
var statearr_32097_32120 = state_32090__$1;
(statearr_32097_32120[(1)] = (8));

} else {
var statearr_32098_32121 = state_32090__$1;
(statearr_32098_32121[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32091 === (3))){
var inst_32088 = (state_32090[(2)]);
var state_32090__$1 = state_32090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32090__$1,inst_32088);
} else {
if((state_val_32091 === (2))){
var state_32090__$1 = state_32090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32090__$1,(4),ch);
} else {
if((state_val_32091 === (11))){
var inst_32080 = (state_32090[(2)]);
var state_32090__$1 = state_32090;
var statearr_32099_32122 = state_32090__$1;
(statearr_32099_32122[(2)] = inst_32080);

(statearr_32099_32122[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32091 === (9))){
var state_32090__$1 = state_32090;
var statearr_32100_32123 = state_32090__$1;
(statearr_32100_32123[(2)] = null);

(statearr_32100_32123[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32091 === (5))){
var inst_32075 = cljs.core.async.close_BANG_.call(null,out);
var state_32090__$1 = state_32090;
var statearr_32101_32124 = state_32090__$1;
(statearr_32101_32124[(2)] = inst_32075);

(statearr_32101_32124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32091 === (10))){
var inst_32083 = (state_32090[(2)]);
var state_32090__$1 = (function (){var statearr_32102 = state_32090;
(statearr_32102[(8)] = inst_32083);

return statearr_32102;
})();
var statearr_32103_32125 = state_32090__$1;
(statearr_32103_32125[(2)] = null);

(statearr_32103_32125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32091 === (8))){
var inst_32072 = (state_32090[(7)]);
var state_32090__$1 = state_32090;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32090__$1,(11),out,inst_32072);
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
});})(c__29843__auto___32115,out))
;
return ((function (switch__29731__auto__,c__29843__auto___32115,out){
return (function() {
var cljs$core$async$state_machine__29732__auto__ = null;
var cljs$core$async$state_machine__29732__auto____0 = (function (){
var statearr_32107 = [null,null,null,null,null,null,null,null,null];
(statearr_32107[(0)] = cljs$core$async$state_machine__29732__auto__);

(statearr_32107[(1)] = (1));

return statearr_32107;
});
var cljs$core$async$state_machine__29732__auto____1 = (function (state_32090){
while(true){
var ret_value__29733__auto__ = (function (){try{while(true){
var result__29734__auto__ = switch__29731__auto__.call(null,state_32090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29734__auto__;
}
break;
}
}catch (e32108){if((e32108 instanceof Object)){
var ex__29735__auto__ = e32108;
var statearr_32109_32126 = state_32090;
(statearr_32109_32126[(5)] = ex__29735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32127 = state_32090;
state_32090 = G__32127;
continue;
} else {
return ret_value__29733__auto__;
}
break;
}
});
cljs$core$async$state_machine__29732__auto__ = function(state_32090){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29732__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29732__auto____1.call(this,state_32090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29732__auto____0;
cljs$core$async$state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29732__auto____1;
return cljs$core$async$state_machine__29732__auto__;
})()
;})(switch__29731__auto__,c__29843__auto___32115,out))
})();
var state__29845__auto__ = (function (){var statearr_32110 = f__29844__auto__.call(null);
(statearr_32110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29843__auto___32115);

return statearr_32110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29845__auto__);
});})(c__29843__auto___32115,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args32128 = [];
var len__26218__auto___32131 = arguments.length;
var i__26219__auto___32132 = (0);
while(true){
if((i__26219__auto___32132 < len__26218__auto___32131)){
args32128.push((arguments[i__26219__auto___32132]));

var G__32133 = (i__26219__auto___32132 + (1));
i__26219__auto___32132 = G__32133;
continue;
} else {
}
break;
}

var G__32130 = args32128.length;
switch (G__32130) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32128.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29843__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29843__auto__){
return (function (){
var f__29844__auto__ = (function (){var switch__29731__auto__ = ((function (c__29843__auto__){
return (function (state_32300){
var state_val_32301 = (state_32300[(1)]);
if((state_val_32301 === (7))){
var inst_32296 = (state_32300[(2)]);
var state_32300__$1 = state_32300;
var statearr_32302_32343 = state_32300__$1;
(statearr_32302_32343[(2)] = inst_32296);

(statearr_32302_32343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (20))){
var inst_32266 = (state_32300[(7)]);
var inst_32277 = (state_32300[(2)]);
var inst_32278 = cljs.core.next.call(null,inst_32266);
var inst_32252 = inst_32278;
var inst_32253 = null;
var inst_32254 = (0);
var inst_32255 = (0);
var state_32300__$1 = (function (){var statearr_32303 = state_32300;
(statearr_32303[(8)] = inst_32277);

(statearr_32303[(9)] = inst_32253);

(statearr_32303[(10)] = inst_32255);

(statearr_32303[(11)] = inst_32252);

(statearr_32303[(12)] = inst_32254);

return statearr_32303;
})();
var statearr_32304_32344 = state_32300__$1;
(statearr_32304_32344[(2)] = null);

(statearr_32304_32344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (1))){
var state_32300__$1 = state_32300;
var statearr_32305_32345 = state_32300__$1;
(statearr_32305_32345[(2)] = null);

(statearr_32305_32345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (4))){
var inst_32241 = (state_32300[(13)]);
var inst_32241__$1 = (state_32300[(2)]);
var inst_32242 = (inst_32241__$1 == null);
var state_32300__$1 = (function (){var statearr_32306 = state_32300;
(statearr_32306[(13)] = inst_32241__$1);

return statearr_32306;
})();
if(cljs.core.truth_(inst_32242)){
var statearr_32307_32346 = state_32300__$1;
(statearr_32307_32346[(1)] = (5));

} else {
var statearr_32308_32347 = state_32300__$1;
(statearr_32308_32347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (15))){
var state_32300__$1 = state_32300;
var statearr_32312_32348 = state_32300__$1;
(statearr_32312_32348[(2)] = null);

(statearr_32312_32348[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (21))){
var state_32300__$1 = state_32300;
var statearr_32313_32349 = state_32300__$1;
(statearr_32313_32349[(2)] = null);

(statearr_32313_32349[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (13))){
var inst_32253 = (state_32300[(9)]);
var inst_32255 = (state_32300[(10)]);
var inst_32252 = (state_32300[(11)]);
var inst_32254 = (state_32300[(12)]);
var inst_32262 = (state_32300[(2)]);
var inst_32263 = (inst_32255 + (1));
var tmp32309 = inst_32253;
var tmp32310 = inst_32252;
var tmp32311 = inst_32254;
var inst_32252__$1 = tmp32310;
var inst_32253__$1 = tmp32309;
var inst_32254__$1 = tmp32311;
var inst_32255__$1 = inst_32263;
var state_32300__$1 = (function (){var statearr_32314 = state_32300;
(statearr_32314[(14)] = inst_32262);

(statearr_32314[(9)] = inst_32253__$1);

(statearr_32314[(10)] = inst_32255__$1);

(statearr_32314[(11)] = inst_32252__$1);

(statearr_32314[(12)] = inst_32254__$1);

return statearr_32314;
})();
var statearr_32315_32350 = state_32300__$1;
(statearr_32315_32350[(2)] = null);

(statearr_32315_32350[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (22))){
var state_32300__$1 = state_32300;
var statearr_32316_32351 = state_32300__$1;
(statearr_32316_32351[(2)] = null);

(statearr_32316_32351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (6))){
var inst_32241 = (state_32300[(13)]);
var inst_32250 = f.call(null,inst_32241);
var inst_32251 = cljs.core.seq.call(null,inst_32250);
var inst_32252 = inst_32251;
var inst_32253 = null;
var inst_32254 = (0);
var inst_32255 = (0);
var state_32300__$1 = (function (){var statearr_32317 = state_32300;
(statearr_32317[(9)] = inst_32253);

(statearr_32317[(10)] = inst_32255);

(statearr_32317[(11)] = inst_32252);

(statearr_32317[(12)] = inst_32254);

return statearr_32317;
})();
var statearr_32318_32352 = state_32300__$1;
(statearr_32318_32352[(2)] = null);

(statearr_32318_32352[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (17))){
var inst_32266 = (state_32300[(7)]);
var inst_32270 = cljs.core.chunk_first.call(null,inst_32266);
var inst_32271 = cljs.core.chunk_rest.call(null,inst_32266);
var inst_32272 = cljs.core.count.call(null,inst_32270);
var inst_32252 = inst_32271;
var inst_32253 = inst_32270;
var inst_32254 = inst_32272;
var inst_32255 = (0);
var state_32300__$1 = (function (){var statearr_32319 = state_32300;
(statearr_32319[(9)] = inst_32253);

(statearr_32319[(10)] = inst_32255);

(statearr_32319[(11)] = inst_32252);

(statearr_32319[(12)] = inst_32254);

return statearr_32319;
})();
var statearr_32320_32353 = state_32300__$1;
(statearr_32320_32353[(2)] = null);

(statearr_32320_32353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (3))){
var inst_32298 = (state_32300[(2)]);
var state_32300__$1 = state_32300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32300__$1,inst_32298);
} else {
if((state_val_32301 === (12))){
var inst_32286 = (state_32300[(2)]);
var state_32300__$1 = state_32300;
var statearr_32321_32354 = state_32300__$1;
(statearr_32321_32354[(2)] = inst_32286);

(statearr_32321_32354[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (2))){
var state_32300__$1 = state_32300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32300__$1,(4),in$);
} else {
if((state_val_32301 === (23))){
var inst_32294 = (state_32300[(2)]);
var state_32300__$1 = state_32300;
var statearr_32322_32355 = state_32300__$1;
(statearr_32322_32355[(2)] = inst_32294);

(statearr_32322_32355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (19))){
var inst_32281 = (state_32300[(2)]);
var state_32300__$1 = state_32300;
var statearr_32323_32356 = state_32300__$1;
(statearr_32323_32356[(2)] = inst_32281);

(statearr_32323_32356[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (11))){
var inst_32266 = (state_32300[(7)]);
var inst_32252 = (state_32300[(11)]);
var inst_32266__$1 = cljs.core.seq.call(null,inst_32252);
var state_32300__$1 = (function (){var statearr_32324 = state_32300;
(statearr_32324[(7)] = inst_32266__$1);

return statearr_32324;
})();
if(inst_32266__$1){
var statearr_32325_32357 = state_32300__$1;
(statearr_32325_32357[(1)] = (14));

} else {
var statearr_32326_32358 = state_32300__$1;
(statearr_32326_32358[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (9))){
var inst_32288 = (state_32300[(2)]);
var inst_32289 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32300__$1 = (function (){var statearr_32327 = state_32300;
(statearr_32327[(15)] = inst_32288);

return statearr_32327;
})();
if(cljs.core.truth_(inst_32289)){
var statearr_32328_32359 = state_32300__$1;
(statearr_32328_32359[(1)] = (21));

} else {
var statearr_32329_32360 = state_32300__$1;
(statearr_32329_32360[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (5))){
var inst_32244 = cljs.core.async.close_BANG_.call(null,out);
var state_32300__$1 = state_32300;
var statearr_32330_32361 = state_32300__$1;
(statearr_32330_32361[(2)] = inst_32244);

(statearr_32330_32361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (14))){
var inst_32266 = (state_32300[(7)]);
var inst_32268 = cljs.core.chunked_seq_QMARK_.call(null,inst_32266);
var state_32300__$1 = state_32300;
if(inst_32268){
var statearr_32331_32362 = state_32300__$1;
(statearr_32331_32362[(1)] = (17));

} else {
var statearr_32332_32363 = state_32300__$1;
(statearr_32332_32363[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (16))){
var inst_32284 = (state_32300[(2)]);
var state_32300__$1 = state_32300;
var statearr_32333_32364 = state_32300__$1;
(statearr_32333_32364[(2)] = inst_32284);

(statearr_32333_32364[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (10))){
var inst_32253 = (state_32300[(9)]);
var inst_32255 = (state_32300[(10)]);
var inst_32260 = cljs.core._nth.call(null,inst_32253,inst_32255);
var state_32300__$1 = state_32300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32300__$1,(13),out,inst_32260);
} else {
if((state_val_32301 === (18))){
var inst_32266 = (state_32300[(7)]);
var inst_32275 = cljs.core.first.call(null,inst_32266);
var state_32300__$1 = state_32300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32300__$1,(20),out,inst_32275);
} else {
if((state_val_32301 === (8))){
var inst_32255 = (state_32300[(10)]);
var inst_32254 = (state_32300[(12)]);
var inst_32257 = (inst_32255 < inst_32254);
var inst_32258 = inst_32257;
var state_32300__$1 = state_32300;
if(cljs.core.truth_(inst_32258)){
var statearr_32334_32365 = state_32300__$1;
(statearr_32334_32365[(1)] = (10));

} else {
var statearr_32335_32366 = state_32300__$1;
(statearr_32335_32366[(1)] = (11));

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
});})(c__29843__auto__))
;
return ((function (switch__29731__auto__,c__29843__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29732__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29732__auto____0 = (function (){
var statearr_32339 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32339[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29732__auto__);

(statearr_32339[(1)] = (1));

return statearr_32339;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29732__auto____1 = (function (state_32300){
while(true){
var ret_value__29733__auto__ = (function (){try{while(true){
var result__29734__auto__ = switch__29731__auto__.call(null,state_32300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29734__auto__;
}
break;
}
}catch (e32340){if((e32340 instanceof Object)){
var ex__29735__auto__ = e32340;
var statearr_32341_32367 = state_32300;
(statearr_32341_32367[(5)] = ex__29735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32368 = state_32300;
state_32300 = G__32368;
continue;
} else {
return ret_value__29733__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29732__auto__ = function(state_32300){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29732__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29732__auto____1.call(this,state_32300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29732__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29732__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29732__auto__;
})()
;})(switch__29731__auto__,c__29843__auto__))
})();
var state__29845__auto__ = (function (){var statearr_32342 = f__29844__auto__.call(null);
(statearr_32342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29843__auto__);

return statearr_32342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29845__auto__);
});})(c__29843__auto__))
);

return c__29843__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args32369 = [];
var len__26218__auto___32372 = arguments.length;
var i__26219__auto___32373 = (0);
while(true){
if((i__26219__auto___32373 < len__26218__auto___32372)){
args32369.push((arguments[i__26219__auto___32373]));

var G__32374 = (i__26219__auto___32373 + (1));
i__26219__auto___32373 = G__32374;
continue;
} else {
}
break;
}

var G__32371 = args32369.length;
switch (G__32371) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32369.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args32376 = [];
var len__26218__auto___32379 = arguments.length;
var i__26219__auto___32380 = (0);
while(true){
if((i__26219__auto___32380 < len__26218__auto___32379)){
args32376.push((arguments[i__26219__auto___32380]));

var G__32381 = (i__26219__auto___32380 + (1));
i__26219__auto___32380 = G__32381;
continue;
} else {
}
break;
}

var G__32378 = args32376.length;
switch (G__32378) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32376.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args32383 = [];
var len__26218__auto___32434 = arguments.length;
var i__26219__auto___32435 = (0);
while(true){
if((i__26219__auto___32435 < len__26218__auto___32434)){
args32383.push((arguments[i__26219__auto___32435]));

var G__32436 = (i__26219__auto___32435 + (1));
i__26219__auto___32435 = G__32436;
continue;
} else {
}
break;
}

var G__32385 = args32383.length;
switch (G__32385) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32383.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29843__auto___32438 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29843__auto___32438,out){
return (function (){
var f__29844__auto__ = (function (){var switch__29731__auto__ = ((function (c__29843__auto___32438,out){
return (function (state_32409){
var state_val_32410 = (state_32409[(1)]);
if((state_val_32410 === (7))){
var inst_32404 = (state_32409[(2)]);
var state_32409__$1 = state_32409;
var statearr_32411_32439 = state_32409__$1;
(statearr_32411_32439[(2)] = inst_32404);

(statearr_32411_32439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32410 === (1))){
var inst_32386 = null;
var state_32409__$1 = (function (){var statearr_32412 = state_32409;
(statearr_32412[(7)] = inst_32386);

return statearr_32412;
})();
var statearr_32413_32440 = state_32409__$1;
(statearr_32413_32440[(2)] = null);

(statearr_32413_32440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32410 === (4))){
var inst_32389 = (state_32409[(8)]);
var inst_32389__$1 = (state_32409[(2)]);
var inst_32390 = (inst_32389__$1 == null);
var inst_32391 = cljs.core.not.call(null,inst_32390);
var state_32409__$1 = (function (){var statearr_32414 = state_32409;
(statearr_32414[(8)] = inst_32389__$1);

return statearr_32414;
})();
if(inst_32391){
var statearr_32415_32441 = state_32409__$1;
(statearr_32415_32441[(1)] = (5));

} else {
var statearr_32416_32442 = state_32409__$1;
(statearr_32416_32442[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32410 === (6))){
var state_32409__$1 = state_32409;
var statearr_32417_32443 = state_32409__$1;
(statearr_32417_32443[(2)] = null);

(statearr_32417_32443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32410 === (3))){
var inst_32406 = (state_32409[(2)]);
var inst_32407 = cljs.core.async.close_BANG_.call(null,out);
var state_32409__$1 = (function (){var statearr_32418 = state_32409;
(statearr_32418[(9)] = inst_32406);

return statearr_32418;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32409__$1,inst_32407);
} else {
if((state_val_32410 === (2))){
var state_32409__$1 = state_32409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32409__$1,(4),ch);
} else {
if((state_val_32410 === (11))){
var inst_32389 = (state_32409[(8)]);
var inst_32398 = (state_32409[(2)]);
var inst_32386 = inst_32389;
var state_32409__$1 = (function (){var statearr_32419 = state_32409;
(statearr_32419[(7)] = inst_32386);

(statearr_32419[(10)] = inst_32398);

return statearr_32419;
})();
var statearr_32420_32444 = state_32409__$1;
(statearr_32420_32444[(2)] = null);

(statearr_32420_32444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32410 === (9))){
var inst_32389 = (state_32409[(8)]);
var state_32409__$1 = state_32409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32409__$1,(11),out,inst_32389);
} else {
if((state_val_32410 === (5))){
var inst_32386 = (state_32409[(7)]);
var inst_32389 = (state_32409[(8)]);
var inst_32393 = cljs.core._EQ_.call(null,inst_32389,inst_32386);
var state_32409__$1 = state_32409;
if(inst_32393){
var statearr_32422_32445 = state_32409__$1;
(statearr_32422_32445[(1)] = (8));

} else {
var statearr_32423_32446 = state_32409__$1;
(statearr_32423_32446[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32410 === (10))){
var inst_32401 = (state_32409[(2)]);
var state_32409__$1 = state_32409;
var statearr_32424_32447 = state_32409__$1;
(statearr_32424_32447[(2)] = inst_32401);

(statearr_32424_32447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32410 === (8))){
var inst_32386 = (state_32409[(7)]);
var tmp32421 = inst_32386;
var inst_32386__$1 = tmp32421;
var state_32409__$1 = (function (){var statearr_32425 = state_32409;
(statearr_32425[(7)] = inst_32386__$1);

return statearr_32425;
})();
var statearr_32426_32448 = state_32409__$1;
(statearr_32426_32448[(2)] = null);

(statearr_32426_32448[(1)] = (2));


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
});})(c__29843__auto___32438,out))
;
return ((function (switch__29731__auto__,c__29843__auto___32438,out){
return (function() {
var cljs$core$async$state_machine__29732__auto__ = null;
var cljs$core$async$state_machine__29732__auto____0 = (function (){
var statearr_32430 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32430[(0)] = cljs$core$async$state_machine__29732__auto__);

(statearr_32430[(1)] = (1));

return statearr_32430;
});
var cljs$core$async$state_machine__29732__auto____1 = (function (state_32409){
while(true){
var ret_value__29733__auto__ = (function (){try{while(true){
var result__29734__auto__ = switch__29731__auto__.call(null,state_32409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29734__auto__;
}
break;
}
}catch (e32431){if((e32431 instanceof Object)){
var ex__29735__auto__ = e32431;
var statearr_32432_32449 = state_32409;
(statearr_32432_32449[(5)] = ex__29735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32450 = state_32409;
state_32409 = G__32450;
continue;
} else {
return ret_value__29733__auto__;
}
break;
}
});
cljs$core$async$state_machine__29732__auto__ = function(state_32409){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29732__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29732__auto____1.call(this,state_32409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29732__auto____0;
cljs$core$async$state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29732__auto____1;
return cljs$core$async$state_machine__29732__auto__;
})()
;})(switch__29731__auto__,c__29843__auto___32438,out))
})();
var state__29845__auto__ = (function (){var statearr_32433 = f__29844__auto__.call(null);
(statearr_32433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29843__auto___32438);

return statearr_32433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29845__auto__);
});})(c__29843__auto___32438,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32451 = [];
var len__26218__auto___32521 = arguments.length;
var i__26219__auto___32522 = (0);
while(true){
if((i__26219__auto___32522 < len__26218__auto___32521)){
args32451.push((arguments[i__26219__auto___32522]));

var G__32523 = (i__26219__auto___32522 + (1));
i__26219__auto___32522 = G__32523;
continue;
} else {
}
break;
}

var G__32453 = args32451.length;
switch (G__32453) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32451.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29843__auto___32525 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29843__auto___32525,out){
return (function (){
var f__29844__auto__ = (function (){var switch__29731__auto__ = ((function (c__29843__auto___32525,out){
return (function (state_32491){
var state_val_32492 = (state_32491[(1)]);
if((state_val_32492 === (7))){
var inst_32487 = (state_32491[(2)]);
var state_32491__$1 = state_32491;
var statearr_32493_32526 = state_32491__$1;
(statearr_32493_32526[(2)] = inst_32487);

(statearr_32493_32526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (1))){
var inst_32454 = (new Array(n));
var inst_32455 = inst_32454;
var inst_32456 = (0);
var state_32491__$1 = (function (){var statearr_32494 = state_32491;
(statearr_32494[(7)] = inst_32455);

(statearr_32494[(8)] = inst_32456);

return statearr_32494;
})();
var statearr_32495_32527 = state_32491__$1;
(statearr_32495_32527[(2)] = null);

(statearr_32495_32527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (4))){
var inst_32459 = (state_32491[(9)]);
var inst_32459__$1 = (state_32491[(2)]);
var inst_32460 = (inst_32459__$1 == null);
var inst_32461 = cljs.core.not.call(null,inst_32460);
var state_32491__$1 = (function (){var statearr_32496 = state_32491;
(statearr_32496[(9)] = inst_32459__$1);

return statearr_32496;
})();
if(inst_32461){
var statearr_32497_32528 = state_32491__$1;
(statearr_32497_32528[(1)] = (5));

} else {
var statearr_32498_32529 = state_32491__$1;
(statearr_32498_32529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (15))){
var inst_32481 = (state_32491[(2)]);
var state_32491__$1 = state_32491;
var statearr_32499_32530 = state_32491__$1;
(statearr_32499_32530[(2)] = inst_32481);

(statearr_32499_32530[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (13))){
var state_32491__$1 = state_32491;
var statearr_32500_32531 = state_32491__$1;
(statearr_32500_32531[(2)] = null);

(statearr_32500_32531[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (6))){
var inst_32456 = (state_32491[(8)]);
var inst_32477 = (inst_32456 > (0));
var state_32491__$1 = state_32491;
if(cljs.core.truth_(inst_32477)){
var statearr_32501_32532 = state_32491__$1;
(statearr_32501_32532[(1)] = (12));

} else {
var statearr_32502_32533 = state_32491__$1;
(statearr_32502_32533[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (3))){
var inst_32489 = (state_32491[(2)]);
var state_32491__$1 = state_32491;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32491__$1,inst_32489);
} else {
if((state_val_32492 === (12))){
var inst_32455 = (state_32491[(7)]);
var inst_32479 = cljs.core.vec.call(null,inst_32455);
var state_32491__$1 = state_32491;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32491__$1,(15),out,inst_32479);
} else {
if((state_val_32492 === (2))){
var state_32491__$1 = state_32491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32491__$1,(4),ch);
} else {
if((state_val_32492 === (11))){
var inst_32471 = (state_32491[(2)]);
var inst_32472 = (new Array(n));
var inst_32455 = inst_32472;
var inst_32456 = (0);
var state_32491__$1 = (function (){var statearr_32503 = state_32491;
(statearr_32503[(10)] = inst_32471);

(statearr_32503[(7)] = inst_32455);

(statearr_32503[(8)] = inst_32456);

return statearr_32503;
})();
var statearr_32504_32534 = state_32491__$1;
(statearr_32504_32534[(2)] = null);

(statearr_32504_32534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (9))){
var inst_32455 = (state_32491[(7)]);
var inst_32469 = cljs.core.vec.call(null,inst_32455);
var state_32491__$1 = state_32491;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32491__$1,(11),out,inst_32469);
} else {
if((state_val_32492 === (5))){
var inst_32459 = (state_32491[(9)]);
var inst_32464 = (state_32491[(11)]);
var inst_32455 = (state_32491[(7)]);
var inst_32456 = (state_32491[(8)]);
var inst_32463 = (inst_32455[inst_32456] = inst_32459);
var inst_32464__$1 = (inst_32456 + (1));
var inst_32465 = (inst_32464__$1 < n);
var state_32491__$1 = (function (){var statearr_32505 = state_32491;
(statearr_32505[(11)] = inst_32464__$1);

(statearr_32505[(12)] = inst_32463);

return statearr_32505;
})();
if(cljs.core.truth_(inst_32465)){
var statearr_32506_32535 = state_32491__$1;
(statearr_32506_32535[(1)] = (8));

} else {
var statearr_32507_32536 = state_32491__$1;
(statearr_32507_32536[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (14))){
var inst_32484 = (state_32491[(2)]);
var inst_32485 = cljs.core.async.close_BANG_.call(null,out);
var state_32491__$1 = (function (){var statearr_32509 = state_32491;
(statearr_32509[(13)] = inst_32484);

return statearr_32509;
})();
var statearr_32510_32537 = state_32491__$1;
(statearr_32510_32537[(2)] = inst_32485);

(statearr_32510_32537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (10))){
var inst_32475 = (state_32491[(2)]);
var state_32491__$1 = state_32491;
var statearr_32511_32538 = state_32491__$1;
(statearr_32511_32538[(2)] = inst_32475);

(statearr_32511_32538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (8))){
var inst_32464 = (state_32491[(11)]);
var inst_32455 = (state_32491[(7)]);
var tmp32508 = inst_32455;
var inst_32455__$1 = tmp32508;
var inst_32456 = inst_32464;
var state_32491__$1 = (function (){var statearr_32512 = state_32491;
(statearr_32512[(7)] = inst_32455__$1);

(statearr_32512[(8)] = inst_32456);

return statearr_32512;
})();
var statearr_32513_32539 = state_32491__$1;
(statearr_32513_32539[(2)] = null);

(statearr_32513_32539[(1)] = (2));


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
});})(c__29843__auto___32525,out))
;
return ((function (switch__29731__auto__,c__29843__auto___32525,out){
return (function() {
var cljs$core$async$state_machine__29732__auto__ = null;
var cljs$core$async$state_machine__29732__auto____0 = (function (){
var statearr_32517 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32517[(0)] = cljs$core$async$state_machine__29732__auto__);

(statearr_32517[(1)] = (1));

return statearr_32517;
});
var cljs$core$async$state_machine__29732__auto____1 = (function (state_32491){
while(true){
var ret_value__29733__auto__ = (function (){try{while(true){
var result__29734__auto__ = switch__29731__auto__.call(null,state_32491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29734__auto__;
}
break;
}
}catch (e32518){if((e32518 instanceof Object)){
var ex__29735__auto__ = e32518;
var statearr_32519_32540 = state_32491;
(statearr_32519_32540[(5)] = ex__29735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32541 = state_32491;
state_32491 = G__32541;
continue;
} else {
return ret_value__29733__auto__;
}
break;
}
});
cljs$core$async$state_machine__29732__auto__ = function(state_32491){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29732__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29732__auto____1.call(this,state_32491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29732__auto____0;
cljs$core$async$state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29732__auto____1;
return cljs$core$async$state_machine__29732__auto__;
})()
;})(switch__29731__auto__,c__29843__auto___32525,out))
})();
var state__29845__auto__ = (function (){var statearr_32520 = f__29844__auto__.call(null);
(statearr_32520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29843__auto___32525);

return statearr_32520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29845__auto__);
});})(c__29843__auto___32525,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args32542 = [];
var len__26218__auto___32616 = arguments.length;
var i__26219__auto___32617 = (0);
while(true){
if((i__26219__auto___32617 < len__26218__auto___32616)){
args32542.push((arguments[i__26219__auto___32617]));

var G__32618 = (i__26219__auto___32617 + (1));
i__26219__auto___32617 = G__32618;
continue;
} else {
}
break;
}

var G__32544 = args32542.length;
switch (G__32544) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32542.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29843__auto___32620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29843__auto___32620,out){
return (function (){
var f__29844__auto__ = (function (){var switch__29731__auto__ = ((function (c__29843__auto___32620,out){
return (function (state_32586){
var state_val_32587 = (state_32586[(1)]);
if((state_val_32587 === (7))){
var inst_32582 = (state_32586[(2)]);
var state_32586__$1 = state_32586;
var statearr_32588_32621 = state_32586__$1;
(statearr_32588_32621[(2)] = inst_32582);

(statearr_32588_32621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32587 === (1))){
var inst_32545 = [];
var inst_32546 = inst_32545;
var inst_32547 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32586__$1 = (function (){var statearr_32589 = state_32586;
(statearr_32589[(7)] = inst_32546);

(statearr_32589[(8)] = inst_32547);

return statearr_32589;
})();
var statearr_32590_32622 = state_32586__$1;
(statearr_32590_32622[(2)] = null);

(statearr_32590_32622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32587 === (4))){
var inst_32550 = (state_32586[(9)]);
var inst_32550__$1 = (state_32586[(2)]);
var inst_32551 = (inst_32550__$1 == null);
var inst_32552 = cljs.core.not.call(null,inst_32551);
var state_32586__$1 = (function (){var statearr_32591 = state_32586;
(statearr_32591[(9)] = inst_32550__$1);

return statearr_32591;
})();
if(inst_32552){
var statearr_32592_32623 = state_32586__$1;
(statearr_32592_32623[(1)] = (5));

} else {
var statearr_32593_32624 = state_32586__$1;
(statearr_32593_32624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32587 === (15))){
var inst_32576 = (state_32586[(2)]);
var state_32586__$1 = state_32586;
var statearr_32594_32625 = state_32586__$1;
(statearr_32594_32625[(2)] = inst_32576);

(statearr_32594_32625[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32587 === (13))){
var state_32586__$1 = state_32586;
var statearr_32595_32626 = state_32586__$1;
(statearr_32595_32626[(2)] = null);

(statearr_32595_32626[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32587 === (6))){
var inst_32546 = (state_32586[(7)]);
var inst_32571 = inst_32546.length;
var inst_32572 = (inst_32571 > (0));
var state_32586__$1 = state_32586;
if(cljs.core.truth_(inst_32572)){
var statearr_32596_32627 = state_32586__$1;
(statearr_32596_32627[(1)] = (12));

} else {
var statearr_32597_32628 = state_32586__$1;
(statearr_32597_32628[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32587 === (3))){
var inst_32584 = (state_32586[(2)]);
var state_32586__$1 = state_32586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32586__$1,inst_32584);
} else {
if((state_val_32587 === (12))){
var inst_32546 = (state_32586[(7)]);
var inst_32574 = cljs.core.vec.call(null,inst_32546);
var state_32586__$1 = state_32586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32586__$1,(15),out,inst_32574);
} else {
if((state_val_32587 === (2))){
var state_32586__$1 = state_32586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32586__$1,(4),ch);
} else {
if((state_val_32587 === (11))){
var inst_32550 = (state_32586[(9)]);
var inst_32554 = (state_32586[(10)]);
var inst_32564 = (state_32586[(2)]);
var inst_32565 = [];
var inst_32566 = inst_32565.push(inst_32550);
var inst_32546 = inst_32565;
var inst_32547 = inst_32554;
var state_32586__$1 = (function (){var statearr_32598 = state_32586;
(statearr_32598[(7)] = inst_32546);

(statearr_32598[(11)] = inst_32564);

(statearr_32598[(12)] = inst_32566);

(statearr_32598[(8)] = inst_32547);

return statearr_32598;
})();
var statearr_32599_32629 = state_32586__$1;
(statearr_32599_32629[(2)] = null);

(statearr_32599_32629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32587 === (9))){
var inst_32546 = (state_32586[(7)]);
var inst_32562 = cljs.core.vec.call(null,inst_32546);
var state_32586__$1 = state_32586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32586__$1,(11),out,inst_32562);
} else {
if((state_val_32587 === (5))){
var inst_32550 = (state_32586[(9)]);
var inst_32547 = (state_32586[(8)]);
var inst_32554 = (state_32586[(10)]);
var inst_32554__$1 = f.call(null,inst_32550);
var inst_32555 = cljs.core._EQ_.call(null,inst_32554__$1,inst_32547);
var inst_32556 = cljs.core.keyword_identical_QMARK_.call(null,inst_32547,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32557 = (inst_32555) || (inst_32556);
var state_32586__$1 = (function (){var statearr_32600 = state_32586;
(statearr_32600[(10)] = inst_32554__$1);

return statearr_32600;
})();
if(cljs.core.truth_(inst_32557)){
var statearr_32601_32630 = state_32586__$1;
(statearr_32601_32630[(1)] = (8));

} else {
var statearr_32602_32631 = state_32586__$1;
(statearr_32602_32631[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32587 === (14))){
var inst_32579 = (state_32586[(2)]);
var inst_32580 = cljs.core.async.close_BANG_.call(null,out);
var state_32586__$1 = (function (){var statearr_32604 = state_32586;
(statearr_32604[(13)] = inst_32579);

return statearr_32604;
})();
var statearr_32605_32632 = state_32586__$1;
(statearr_32605_32632[(2)] = inst_32580);

(statearr_32605_32632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32587 === (10))){
var inst_32569 = (state_32586[(2)]);
var state_32586__$1 = state_32586;
var statearr_32606_32633 = state_32586__$1;
(statearr_32606_32633[(2)] = inst_32569);

(statearr_32606_32633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32587 === (8))){
var inst_32550 = (state_32586[(9)]);
var inst_32546 = (state_32586[(7)]);
var inst_32554 = (state_32586[(10)]);
var inst_32559 = inst_32546.push(inst_32550);
var tmp32603 = inst_32546;
var inst_32546__$1 = tmp32603;
var inst_32547 = inst_32554;
var state_32586__$1 = (function (){var statearr_32607 = state_32586;
(statearr_32607[(7)] = inst_32546__$1);

(statearr_32607[(14)] = inst_32559);

(statearr_32607[(8)] = inst_32547);

return statearr_32607;
})();
var statearr_32608_32634 = state_32586__$1;
(statearr_32608_32634[(2)] = null);

(statearr_32608_32634[(1)] = (2));


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
});})(c__29843__auto___32620,out))
;
return ((function (switch__29731__auto__,c__29843__auto___32620,out){
return (function() {
var cljs$core$async$state_machine__29732__auto__ = null;
var cljs$core$async$state_machine__29732__auto____0 = (function (){
var statearr_32612 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32612[(0)] = cljs$core$async$state_machine__29732__auto__);

(statearr_32612[(1)] = (1));

return statearr_32612;
});
var cljs$core$async$state_machine__29732__auto____1 = (function (state_32586){
while(true){
var ret_value__29733__auto__ = (function (){try{while(true){
var result__29734__auto__ = switch__29731__auto__.call(null,state_32586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29734__auto__;
}
break;
}
}catch (e32613){if((e32613 instanceof Object)){
var ex__29735__auto__ = e32613;
var statearr_32614_32635 = state_32586;
(statearr_32614_32635[(5)] = ex__29735__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32636 = state_32586;
state_32586 = G__32636;
continue;
} else {
return ret_value__29733__auto__;
}
break;
}
});
cljs$core$async$state_machine__29732__auto__ = function(state_32586){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29732__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29732__auto____1.call(this,state_32586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29732__auto____0;
cljs$core$async$state_machine__29732__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29732__auto____1;
return cljs$core$async$state_machine__29732__auto__;
})()
;})(switch__29731__auto__,c__29843__auto___32620,out))
})();
var state__29845__auto__ = (function (){var statearr_32615 = f__29844__auto__.call(null);
(statearr_32615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29843__auto___32620);

return statearr_32615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29845__auto__);
});})(c__29843__auto___32620,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1489243591607