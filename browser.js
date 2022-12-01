// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,n=Object.prototype,t=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,o=n.__lookupGetter__,u=n.__lookupSetter__,c=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,c){var f,l,s,p;if("object"!=typeof r||null===r||"[object Array]"===t.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof c||null===c||"[object Array]"===t.call(c))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+c+"`.");if((l="value"in c)&&(o.call(r,e)||u.call(r,e)?(f=r.__proto__,r.__proto__=n,delete r[e],r[e]=c.value,r.__proto__=f):r[e]=c.value),s="get"in c,p="set"in c,l&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(r,e,c.get),p&&a&&a.call(r,e,c.set),r};function f(r,e,n){c(r,e,{configurable:!1,enumerable:!0,writable:!1,value:n})}function l(r){return"number"==typeof r}function s(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function p(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+s(i):s(i)+r,t&&(r="-"+r)),r}var g=String.prototype.toLowerCase,y=String.prototype.toUpperCase;function d(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!l(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=p(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=p(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===y.call(r.specifier)?y.call(n):g.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function h(r){return"string"==typeof r}var v=Math.abs,w=String.prototype.toLowerCase,b=String.prototype.toUpperCase,m=String.prototype.replace,A=/e\+(\d)$/,E=/e-(\d)$/,_=/^(\d+)$/,S=/^(\d+)e/,j=/\.0$/,U=/\.0*e/,x=/(\..*[^0])0*e/;function T(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!l(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":v(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=m.call(n,x,"$1e"),n=m.call(n,U,"e"),n=m.call(n,j,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=m.call(n,A,"e+0$1"),n=m.call(n,E,"e-0$1"),r.alternate&&(n=m.call(n,_,"$1."),n=m.call(n,S,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===b.call(r.specifier)?b.call(n):w.call(n)}function I(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function O(r,e,n){var t=e-r.length;return t<0?r:r=n?r+I(t):I(t)+r}var V=String.fromCharCode,F=isNaN,k=Array.isArray;function N(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function P(r){var e,n,t,i,a,o,u,c,f;if(!k(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,c=0;c<r.length;c++)if(h(t=r[c]))o+=t;else{if(e=void 0!==t.precision,!(t=N(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,f=0;f<n.length;f++)switch(i=n.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,F(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,F(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=d(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!F(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=F(a)?String(t.arg):V(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=T(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=p(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=O(t.arg,t.width,t.padRight)),o+=t.arg||"",u+=1}return o}var $=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function G(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function R(r){var e,n,t,i;for(n=[],i=0,t=$.exec(r);t;)(e=r.slice(i,$.lastIndex-t[0].length)).length&&n.push(e),n.push(G(t)),i=$.lastIndex,t=$.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function H(r){return"string"==typeof r}function W(r){var e,n,t;if(!H(r))throw new TypeError(W("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=R(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return P.apply(null,n)}function C(r){return r!=r}var L=Math.floor;function M(r){return L(r)===r}function Z(r){return M(r/2)}function q(r){return Z(r>0?r-1:r+1)}var B=Number.POSITIVE_INFINITY,X=Number,Y=X.NEGATIVE_INFINITY;function z(r){return r===B||r===Y}var D=Math.sqrt;function J(r){return Math.abs(r)}function K(r,e,n){c(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var Q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function rr(){return Q&&"symbol"==typeof Symbol.toStringTag}var er,nr=Object.prototype.toString,tr=Object.prototype.hasOwnProperty,ir="function"==typeof Symbol?Symbol.toStringTag:"",ar=rr()?function(r){var e,n,t,i,a;if(null==r)return nr.call(r);n=r[ir],a=ir,e=null!=(i=r)&&tr.call(i,a);try{r[ir]=void 0}catch(e){return nr.call(r)}return t=nr.call(r),e?r[ir]=n:delete r[ir],t}:function(r){return nr.call(r)},or="function"==typeof Uint32Array,ur="function"==typeof Uint32Array?Uint32Array:null,cr="function"==typeof Uint32Array?Uint32Array:void 0;er=function(){var r,e,n;if("function"!=typeof ur)return!1;try{e=new ur(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(or&&n instanceof Uint32Array||"[object Uint32Array]"===ar(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var fr,lr=er,sr="function"==typeof Float64Array,pr="function"==typeof Float64Array?Float64Array:null,gr="function"==typeof Float64Array?Float64Array:void 0;fr=function(){var r,e,n;if("function"!=typeof pr)return!1;try{e=new pr([1,3.14,-3.14,NaN]),n=e,r=(sr&&n instanceof Float64Array||"[object Float64Array]"===ar(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var yr,dr=fr,hr="function"==typeof Uint8Array,vr="function"==typeof Uint8Array?Uint8Array:null,wr="function"==typeof Uint8Array?Uint8Array:void 0;yr=function(){var r,e,n;if("function"!=typeof vr)return!1;try{e=new vr(e=[1,3.14,-3.14,256,257]),n=e,r=(hr&&n instanceof Uint8Array||"[object Uint8Array]"===ar(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var br,mr=yr,Ar="function"==typeof Uint16Array,Er="function"==typeof Uint16Array?Uint16Array:null,_r="function"==typeof Uint16Array?Uint16Array:void 0;br=function(){var r,e,n;if("function"!=typeof Er)return!1;try{e=new Er(e=[1,3.14,-3.14,65536,65537]),n=e,r=(Ar&&n instanceof Uint16Array||"[object Uint16Array]"===ar(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Sr,jr={uint16:br,uint8:mr};(Sr=new jr.uint16(1))[0]=4660;var Ur,xr,Tr=52===new jr.uint8(Sr.buffer)[0];!0===Tr?(Ur=1,xr=0):(Ur=0,xr=1);var Ir={HIGH:Ur,LOW:xr},Or=new dr(1),Vr=new lr(Or.buffer),Fr=Ir.HIGH,kr=Ir.LOW;function Nr(r,e,n,t){return Or[0]=r,e[t]=Vr[Fr],e[t+n]=Vr[kr],e}function Pr(r){return Nr(r,[0,0],1,0)}K(Pr,"assign",Nr);var $r=!0===Tr?0:1,Gr=new dr(1),Rr=new lr(Gr.buffer);function Hr(r,e){return Gr[0]=r,Rr[$r]=e>>>0,Gr[0]}function Wr(r){return 0|r}var Cr,Lr,Mr=2147483647,Zr=!0===Tr?1:0,qr=new dr(1),Br=new lr(qr.buffer);function Xr(r){return qr[0]=r,Br[Zr]}!0===Tr?(Cr=1,Lr=0):(Cr=0,Lr=1);var Yr={HIGH:Cr,LOW:Lr},zr=new dr(1),Dr=new lr(zr.buffer),Jr=Yr.HIGH,Kr=Yr.LOW;function Qr(r,e){return Dr[Jr]=r,Dr[Kr]=e,zr[0]}var re=[0,0];function ee(r,e){var n,t;return Pr.assign(r,re,1,0),n=re[0],n&=Mr,t=Xr(e),Qr(n|=t&=2147483648,re[1])}var ne=!0===Tr?1:0,te=new dr(1),ie=new lr(te.buffer);function ae(r,e){return te[0]=r,ie[ne]=e>>>0,te[0]}var oe=1023,ue=1048576,ce=[1,1.5],fe=[0,.5849624872207642],le=[0,1.350039202129749e-8];function se(r,e,n,t){return C(r)||z(r)?(e[t]=r,e[t+n]=0,e):0!==r&&J(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}K((function(r){return se(r,[0,0],1,0)}),"assign",se);var pe=[0,0],ge=[0,0];function ye(r,e){var n,t;return 0===e||0===r||C(r)||z(r)?r:(se(r,pe,1,0),e+=pe[1],e+=function(r){var e=Xr(r);return(e=(2146435072&e)>>>20)-oe|0}(r=pe[0]),e<-1074?ee(0,r):e>1023?r<0?Y:B:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,Pr.assign(r,ge,1,0),n=ge[0],n&=2148532223,t*Qr(n|=e+oe<<20,ge[1])))}var de=1048575,he=1048576,ve=1083179008,we=1e300,be=1e-300,me=[0,0],Ae=[0,0];function Ee(r,e){var n,t,i,a,o,u,c,f,l,s,p,g,y,d;if(C(r)||C(e))return NaN;if(Pr.assign(e,me,1,0),o=me[0],0===me[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return D(r);if(-.5===e)return 1/D(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(z(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:J(r)<1==(e===B)?0:B}(r,e)}if(Pr.assign(r,me,1,0),a=me[0],0===me[1]){if(0===a)return function(r,e){return e===Y?B:e===B?0:e>0?q(e)?r:0:q(e)?ee(B,r):B}(r,e);if(1===r)return 1;if(-1===r&&q(e))return-1;if(z(r))return r===Y?Ee(-0,-e):e<0?0:B}if(r<0&&!1===M(e))return(r-r)/(r-r);if(i=J(r),n=a&Mr|0,t=o&Mr|0,c=o>>>31|0,u=(u=a>>>31|0)&&q(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(Xr(r)&Mr)<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===c?u*we*we:u*be*be;if(n>1072693248)return 0===c?u*we*we:u*be*be;p=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=Hr(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(Ae,i)}else p=function(r,e,n){var t,i,a,o,u,c,f,l,s,p,g,y,d,h,v,w,b,m,A,E,_;return m=0,n<ue&&(m-=53,n=Xr(e*=9007199254740992)),m+=(n>>20)-oe|0,n=1072693248|(A=1048575&n|0),A<=235662?E=0:A<767610?E=1:(E=0,m+=1,n-=ue),o=Hr(i=(w=(e=ae(e,n))-(f=ce[E]))*(b=1/(e+f)),0),t=524288+(n>>1|536870912),c=ae(0,t+=E<<18),v=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),c=Hr(c=3+(a=o*o)+(v+=(u=b*(w-o*c-o*(e-(c-f))))*(o+i)),0),d=(g=-7.028461650952758e-9*(s=Hr(s=(w=o*c)+(b=u*c+(v-(c-3-a))*i),0))+.9617966939259756*(b-(s-w))+le[E])-((y=Hr(y=(p=.9617967009544373*s)+g+(l=fe[E])+(h=m),0))-h-l-p),r[0]=y,r[1]=d,r}(Ae,i,n);if(g=(s=(e-(f=Hr(e,0)))*p[0]+e*p[1])+(l=f*p[0]),Pr.assign(g,me,1,0),y=Wr(me[0]),d=Wr(me[1]),y>=ve){if(0!=(y-ve|d))return u*we*we;if(s+8008566259537294e-32>g-l)return u*we*we}else if((y&Mr)>=1083231232){if(0!=(y-3230714880|d))return u*be*be;if(s<=g-l)return u*be*be}return g=function(r,e,n){var t,i,a,o,u,c,f,l,s,p;return s=((l=r&Mr|0)>>20)-oe|0,f=0,l>1071644672&&(i=ae(0,((f=r+(he>>s+1)>>>0)&~(de>>(s=((f&Mr)>>20)-oe|0)))>>>0),f=(f&de|he)>>20-s>>>0,r<0&&(f=-f),e-=i),r=Wr(r=Xr(c=1-((c=(a=.6931471824645996*(i=Hr(i=n+e,0)))+(o=.6931471805599453*(n-(i-e))+-1.904654299957768e-9*i))*(t=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(c-a))+c*u)-c))),(r+=f<<20>>>0)>>20<=0?ye(c,f):ae(c,r)}(y,l,s),u*g}function _e(r){return"number"==typeof r}var Se=X.prototype.toString,je=rr();function Ue(r){return"object"==typeof r&&(r instanceof X||(je?function(r){try{return Se.call(r),!0}catch(r){return!1}}(r):"[object Number]"===ar(r)))}function xe(r){return _e(r)||Ue(r)}function Te(r){return r<B&&r>Y&&M(r)}function Ie(r){return _e(r)&&Te(r)}function Oe(r){return Ue(r)&&Te(r.valueOf())}function Ve(r){return Ie(r)||Oe(r)}function Fe(r){return Ie(r)&&r>=0}function ke(r){return Oe(r)&&r.valueOf()>=0}function Ne(r){return Fe(r)||ke(r)}function Pe(r){return"string"==typeof r}K(xe,"isPrimitive",_e),K(xe,"isObject",Ue),K(Ve,"isPrimitive",Ie),K(Ve,"isObject",Oe),K(Ne,"isPrimitive",Fe),K(Ne,"isObject",ke);var $e=String.prototype.valueOf,Ge=rr();function Re(r){return"object"==typeof r&&(r instanceof String||(Ge?function(r){try{return $e.call(r),!0}catch(r){return!1}}(r):"[object String]"===ar(r)))}function He(r){return Pe(r)||Re(r)}K(He,"isPrimitive",Pe),K(He,"isObject",Re);var We=9007199254740991;function Ce(r,e){var n,t;if(!Pe(r))throw new TypeError(W("invalid argument. First argument must be a string. Value: `%s`.",r));if(!Fe(e))throw new TypeError(W("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(0===r.length||0===e)return"";if(r.length*e>We)throw new RangeError(W("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",r.length*e));for(n="",t=e;1==(1&t)&&(n+=r),0!=(t>>>=1);)r+=r;return n}var Le=Math.ceil,Me={};f(Me,"fromBinaryStringUint8",(function(r){var e,n;if(8!==r.length)throw new Error(W("invalid argument. Input string must have a length equal to %u. Value: `%s`.",8,r));for(e=0,n=0;n<r.length;n++)"1"===r[n]&&(e+=Ee(2,8-n-1));return e})),f(Me,"toBinaryStringUint8",(function(r){var e;return e=function(r){var e,n,t="";for(e=8;r>0&&e;)t=(n=r/2)===(r=L(n))?"0"+t:"1"+t,e-=1;return t}(r),e=function(r,e,n){var t,i;if(!Pe(r))throw new TypeError(W("invalid argument. First argument must be a string. Value: `%s`.",r));if(!Fe(e))throw new TypeError(W("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(arguments.length>2){if(!Pe(i=n))throw new TypeError(W("invalid argument. Third argument must be a string. Value: `%s`.",i));if(0===i.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else i=" ";if(e>We)throw new RangeError(W("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",e));return(t=(e-r.length)/i.length)<=0?r:Ce(i,t=Le(t))+r}(e,8,"0"),e}));var Ze={};return f(Ze,"base",Me),Ze},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).ns=e();
//# sourceMappingURL=browser.js.map
