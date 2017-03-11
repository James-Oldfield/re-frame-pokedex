// Compiled by ClojureScript 1.9.229 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__28154_28158 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__28155_28159 = null;
var count__28156_28160 = (0);
var i__28157_28161 = (0);
while(true){
if((i__28157_28161 < count__28156_28160)){
var k_28162 = cljs.core._nth.call(null,chunk__28155_28159,i__28157_28161);
var v_28163 = (b[k_28162]);
(a[k_28162] = v_28163);

var G__28164 = seq__28154_28158;
var G__28165 = chunk__28155_28159;
var G__28166 = count__28156_28160;
var G__28167 = (i__28157_28161 + (1));
seq__28154_28158 = G__28164;
chunk__28155_28159 = G__28165;
count__28156_28160 = G__28166;
i__28157_28161 = G__28167;
continue;
} else {
var temp__4657__auto___28168 = cljs.core.seq.call(null,seq__28154_28158);
if(temp__4657__auto___28168){
var seq__28154_28169__$1 = temp__4657__auto___28168;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28154_28169__$1)){
var c__25954__auto___28170 = cljs.core.chunk_first.call(null,seq__28154_28169__$1);
var G__28171 = cljs.core.chunk_rest.call(null,seq__28154_28169__$1);
var G__28172 = c__25954__auto___28170;
var G__28173 = cljs.core.count.call(null,c__25954__auto___28170);
var G__28174 = (0);
seq__28154_28158 = G__28171;
chunk__28155_28159 = G__28172;
count__28156_28160 = G__28173;
i__28157_28161 = G__28174;
continue;
} else {
var k_28175 = cljs.core.first.call(null,seq__28154_28169__$1);
var v_28176 = (b[k_28175]);
(a[k_28175] = v_28176);

var G__28177 = cljs.core.next.call(null,seq__28154_28169__$1);
var G__28178 = null;
var G__28179 = (0);
var G__28180 = (0);
seq__28154_28158 = G__28177;
chunk__28155_28159 = G__28178;
count__28156_28160 = G__28179;
i__28157_28161 = G__28180;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__25749__auto__,writer__25750__auto__,opt__25751__auto__){
return cljs.core._write.call(null,writer__25750__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__25749__auto__,writer__25750__auto__,opt__25751__auto__){
return cljs.core._write.call(null,writer__25750__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args28181 = [];
var len__26218__auto___28184 = arguments.length;
var i__26219__auto___28185 = (0);
while(true){
if((i__26219__auto___28185 < len__26218__auto___28184)){
args28181.push((arguments[i__26219__auto___28185]));

var G__28186 = (i__26219__auto___28185 + (1));
i__26219__auto___28185 = G__28186;
continue;
} else {
}
break;
}

var G__28183 = args28181.length;
switch (G__28183) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28181.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__28188 = (i + (2));
var G__28189 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__28188;
ret = G__28189;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__25749__auto__,writer__25750__auto__,opt__25751__auto__){
return cljs.core._write.call(null,writer__25750__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__25749__auto__,writer__25750__auto__,opt__25751__auto__){
return cljs.core._write.call(null,writer__25750__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__28190_28194 = cljs.core.seq.call(null,v);
var chunk__28191_28195 = null;
var count__28192_28196 = (0);
var i__28193_28197 = (0);
while(true){
if((i__28193_28197 < count__28192_28196)){
var x_28198 = cljs.core._nth.call(null,chunk__28191_28195,i__28193_28197);
ret.push(x_28198);

var G__28199 = seq__28190_28194;
var G__28200 = chunk__28191_28195;
var G__28201 = count__28192_28196;
var G__28202 = (i__28193_28197 + (1));
seq__28190_28194 = G__28199;
chunk__28191_28195 = G__28200;
count__28192_28196 = G__28201;
i__28193_28197 = G__28202;
continue;
} else {
var temp__4657__auto___28203 = cljs.core.seq.call(null,seq__28190_28194);
if(temp__4657__auto___28203){
var seq__28190_28204__$1 = temp__4657__auto___28203;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28190_28204__$1)){
var c__25954__auto___28205 = cljs.core.chunk_first.call(null,seq__28190_28204__$1);
var G__28206 = cljs.core.chunk_rest.call(null,seq__28190_28204__$1);
var G__28207 = c__25954__auto___28205;
var G__28208 = cljs.core.count.call(null,c__25954__auto___28205);
var G__28209 = (0);
seq__28190_28194 = G__28206;
chunk__28191_28195 = G__28207;
count__28192_28196 = G__28208;
i__28193_28197 = G__28209;
continue;
} else {
var x_28210 = cljs.core.first.call(null,seq__28190_28204__$1);
ret.push(x_28210);

var G__28211 = cljs.core.next.call(null,seq__28190_28204__$1);
var G__28212 = null;
var G__28213 = (0);
var G__28214 = (0);
seq__28190_28194 = G__28211;
chunk__28191_28195 = G__28212;
count__28192_28196 = G__28213;
i__28193_28197 = G__28214;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__25749__auto__,writer__25750__auto__,opt__25751__auto__){
return cljs.core._write.call(null,writer__25750__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__25749__auto__,writer__25750__auto__,opt__25751__auto__){
return cljs.core._write.call(null,writer__25750__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__28215_28219 = cljs.core.seq.call(null,v);
var chunk__28216_28220 = null;
var count__28217_28221 = (0);
var i__28218_28222 = (0);
while(true){
if((i__28218_28222 < count__28217_28221)){
var x_28223 = cljs.core._nth.call(null,chunk__28216_28220,i__28218_28222);
ret.push(x_28223);

var G__28224 = seq__28215_28219;
var G__28225 = chunk__28216_28220;
var G__28226 = count__28217_28221;
var G__28227 = (i__28218_28222 + (1));
seq__28215_28219 = G__28224;
chunk__28216_28220 = G__28225;
count__28217_28221 = G__28226;
i__28218_28222 = G__28227;
continue;
} else {
var temp__4657__auto___28228 = cljs.core.seq.call(null,seq__28215_28219);
if(temp__4657__auto___28228){
var seq__28215_28229__$1 = temp__4657__auto___28228;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28215_28229__$1)){
var c__25954__auto___28230 = cljs.core.chunk_first.call(null,seq__28215_28229__$1);
var G__28231 = cljs.core.chunk_rest.call(null,seq__28215_28229__$1);
var G__28232 = c__25954__auto___28230;
var G__28233 = cljs.core.count.call(null,c__25954__auto___28230);
var G__28234 = (0);
seq__28215_28219 = G__28231;
chunk__28216_28220 = G__28232;
count__28217_28221 = G__28233;
i__28218_28222 = G__28234;
continue;
} else {
var x_28235 = cljs.core.first.call(null,seq__28215_28229__$1);
ret.push(x_28235);

var G__28236 = cljs.core.next.call(null,seq__28215_28229__$1);
var G__28237 = null;
var G__28238 = (0);
var G__28239 = (0);
seq__28215_28219 = G__28236;
chunk__28216_28220 = G__28237;
count__28217_28221 = G__28238;
i__28218_28222 = G__28239;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__25749__auto__,writer__25750__auto__,opt__25751__auto__){
return cljs.core._write.call(null,writer__25750__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__28240_28244 = cljs.core.seq.call(null,v);
var chunk__28241_28245 = null;
var count__28242_28246 = (0);
var i__28243_28247 = (0);
while(true){
if((i__28243_28247 < count__28242_28246)){
var x_28248 = cljs.core._nth.call(null,chunk__28241_28245,i__28243_28247);
ret.push(x_28248);

var G__28249 = seq__28240_28244;
var G__28250 = chunk__28241_28245;
var G__28251 = count__28242_28246;
var G__28252 = (i__28243_28247 + (1));
seq__28240_28244 = G__28249;
chunk__28241_28245 = G__28250;
count__28242_28246 = G__28251;
i__28243_28247 = G__28252;
continue;
} else {
var temp__4657__auto___28253 = cljs.core.seq.call(null,seq__28240_28244);
if(temp__4657__auto___28253){
var seq__28240_28254__$1 = temp__4657__auto___28253;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28240_28254__$1)){
var c__25954__auto___28255 = cljs.core.chunk_first.call(null,seq__28240_28254__$1);
var G__28256 = cljs.core.chunk_rest.call(null,seq__28240_28254__$1);
var G__28257 = c__25954__auto___28255;
var G__28258 = cljs.core.count.call(null,c__25954__auto___28255);
var G__28259 = (0);
seq__28240_28244 = G__28256;
chunk__28241_28245 = G__28257;
count__28242_28246 = G__28258;
i__28243_28247 = G__28259;
continue;
} else {
var x_28260 = cljs.core.first.call(null,seq__28240_28254__$1);
ret.push(x_28260);

var G__28261 = cljs.core.next.call(null,seq__28240_28254__$1);
var G__28262 = null;
var G__28263 = (0);
var G__28264 = (0);
seq__28240_28244 = G__28261;
chunk__28241_28245 = G__28262;
count__28242_28246 = G__28263;
i__28243_28247 = G__28264;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__25749__auto__,writer__25750__auto__,opt__25751__auto__){
return cljs.core._write.call(null,writer__25750__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__25749__auto__,writer__25750__auto__,opt__25751__auto__){
return cljs.core._write.call(null,writer__25750__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args28265 = [];
var len__26218__auto___28280 = arguments.length;
var i__26219__auto___28281 = (0);
while(true){
if((i__26219__auto___28281 < len__26218__auto___28280)){
args28265.push((arguments[i__26219__auto___28281]));

var G__28282 = (i__26219__auto___28281 + (1));
i__26219__auto___28281 = G__28282;
continue;
} else {
}
break;
}

var G__28267 = args28265.length;
switch (G__28267) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28265.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__28268 = obj;
G__28268.push(kfn.call(null,k),vfn.call(null,v));

return G__28268;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x28269 = cljs.core.clone.call(null,handlers);
x28269.forEach = ((function (x28269,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__28270 = cljs.core.seq.call(null,coll);
var chunk__28271 = null;
var count__28272 = (0);
var i__28273 = (0);
while(true){
if((i__28273 < count__28272)){
var vec__28274 = cljs.core._nth.call(null,chunk__28271,i__28273);
var k = cljs.core.nth.call(null,vec__28274,(0),null);
var v = cljs.core.nth.call(null,vec__28274,(1),null);
f.call(null,v,k);

var G__28284 = seq__28270;
var G__28285 = chunk__28271;
var G__28286 = count__28272;
var G__28287 = (i__28273 + (1));
seq__28270 = G__28284;
chunk__28271 = G__28285;
count__28272 = G__28286;
i__28273 = G__28287;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28270);
if(temp__4657__auto__){
var seq__28270__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28270__$1)){
var c__25954__auto__ = cljs.core.chunk_first.call(null,seq__28270__$1);
var G__28288 = cljs.core.chunk_rest.call(null,seq__28270__$1);
var G__28289 = c__25954__auto__;
var G__28290 = cljs.core.count.call(null,c__25954__auto__);
var G__28291 = (0);
seq__28270 = G__28288;
chunk__28271 = G__28289;
count__28272 = G__28290;
i__28273 = G__28291;
continue;
} else {
var vec__28277 = cljs.core.first.call(null,seq__28270__$1);
var k = cljs.core.nth.call(null,vec__28277,(0),null);
var v = cljs.core.nth.call(null,vec__28277,(1),null);
f.call(null,v,k);

var G__28292 = cljs.core.next.call(null,seq__28270__$1);
var G__28293 = null;
var G__28294 = (0);
var G__28295 = (0);
seq__28270 = G__28292;
chunk__28271 = G__28293;
count__28272 = G__28294;
i__28273 = G__28295;
continue;
}
} else {
return null;
}
}
break;
}
});})(x28269,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x28269;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args28296 = [];
var len__26218__auto___28302 = arguments.length;
var i__26219__auto___28303 = (0);
while(true){
if((i__26219__auto___28303 < len__26218__auto___28302)){
args28296.push((arguments[i__26219__auto___28303]));

var G__28304 = (i__26219__auto___28303 + (1));
i__26219__auto___28303 = G__28304;
continue;
} else {
}
break;
}

var G__28298 = args28296.length;
switch (G__28298) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28296.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit28299 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit28299 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta28300){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta28300 = meta28300;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit28299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28301,meta28300__$1){
var self__ = this;
var _28301__$1 = this;
return (new cognitect.transit.t_cognitect$transit28299(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta28300__$1));
});

cognitect.transit.t_cognitect$transit28299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28301){
var self__ = this;
var _28301__$1 = this;
return self__.meta28300;
});

cognitect.transit.t_cognitect$transit28299.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit28299.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit28299.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit28299.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit28299.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta28300","meta28300",-408575116,null)], null);
});

cognitect.transit.t_cognitect$transit28299.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit28299.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit28299";

cognitect.transit.t_cognitect$transit28299.cljs$lang$ctorPrWriter = (function (this__25749__auto__,writer__25750__auto__,opt__25751__auto__){
return cljs.core._write.call(null,writer__25750__auto__,"cognitect.transit/t_cognitect$transit28299");
});

cognitect.transit.__GT_t_cognitect$transit28299 = (function cognitect$transit$__GT_t_cognitect$transit28299(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta28300){
return (new cognitect.transit.t_cognitect$transit28299(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta28300));
});

}

return (new cognitect.transit.t_cognitect$transit28299(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__25143__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__25143__auto__)){
return or__25143__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1489243586295