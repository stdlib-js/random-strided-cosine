"use strict";var q=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var d=q(function(I,p){
var g=require('@stdlib/array-base-assert-is-accessor-array/dist'),s=require('@stdlib/random-base-cosine/dist');function O(a,e,c,i,u,n,f,t){var r,v,l;if(r={arity:0,fcn:null},f){if(e===0&&u===0)return g(a)?v=a.get(c):v=a[c],g(i)?l=i.get(n):l=i[n],r.fcn=s.factory(v,l,t),r;r.fcn=s.factory(t)}else r.fcn=s;return r.arity+=2,r}p.exports=O
});var h=q(function(J,b){
var R=require('@stdlib/strided-base-nullary/dist'),j=require('@stdlib/strided-base-binary/dist'),w=d();function z(a,e,c,i,u,n,f,t){var r=w(e,c,0,i,u,0,arguments.length>7,t);return r.arity===0?(R([n],[a],[f],r.fcn),n):(j([e,i,n],[a],[c,u,f],r.fcn),n)}b.exports=z
});var k=q(function(K,A){
var B=require('@stdlib/strided-base-nullary/dist').ndarray,C=require('@stdlib/strided-base-binary/dist').ndarray,D=d();function E(a,e,c,i,u,n,f,t,r,v,l){var y=D(e,c,i,u,n,f,arguments.length>10,l);return y.arity===0?(B([t],[a],[r],[v],y.fcn),t):(C([e,u,t],[a],[c,n,r],[i,f,v],y.fcn),t)}A.exports=E
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=h(),G=k();F(x,"ndarray",G);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
