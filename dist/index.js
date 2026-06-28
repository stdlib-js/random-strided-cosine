"use strict";var q=function(a,e){return function(){try{return e||a((e={exports:{}}).exports,e),e.exports}catch(n){throw (e=0, n)}};};var d=q(function(I,p){
var g=require('@stdlib/array-base-assert-is-accessor-array/dist'),s=require('@stdlib/random-base-cosine/dist');function O(a,e,n,t,u,i,f,c){var r,v,l;if(r={arity:0,fcn:null},f){if(e===0&&u===0)return g(a)?v=a.get(n):v=a[n],g(t)?l=t.get(i):l=t[i],r.fcn=s.factory(v,l,c),r;r.fcn=s.factory(c)}else r.fcn=s;return r.arity+=2,r}p.exports=O
});var h=q(function(J,b){
var R=require('@stdlib/strided-base-nullary/dist'),j=require('@stdlib/strided-base-binary/dist'),w=d();function z(a,e,n,t,u,i,f,c){var r=w(e,n,0,t,u,0,arguments.length>7,c);return r.arity===0?(R([i],[a],[f],r.fcn),i):(j([e,t,i],[a],[n,u,f],r.fcn),i)}b.exports=z
});var k=q(function(K,A){
var B=require('@stdlib/strided-base-nullary/dist').ndarray,C=require('@stdlib/strided-base-binary/dist').ndarray,D=d();function E(a,e,n,t,u,i,f,c,r,v,l){var y=D(e,n,t,u,i,f,arguments.length>10,l);return y.arity===0?(B([c],[a],[r],[v],y.fcn),c):(C([e,u,c],[a],[n,i,r],[t,f,v],y.fcn),c)}A.exports=E
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=h(),G=k();F(x,"ndarray",G);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
