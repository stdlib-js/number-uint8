// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(r){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,i=t.toString,a=t.__defineGetter__,o=t.__defineSetter__,u=t.__lookupGetter__,f=t.__lookupSetter__,c=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?n:function(r,e,n){var c,l,s,p;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===i.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(u.call(r,e)||f.call(r,e)?(c=r.__proto__,r.__proto__=t,delete r[e],r[e]=n.value,r.__proto__=c):r[e]=n.value),s="get"in n,p="set"in n,l&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&a&&a.call(r,e,n.get),p&&o&&o.call(r,e,n.set),r};function l(r,e,n){c(r,e,{configurable:!1,enumerable:!0,writable:!1,value:n})}function s(r){return"number"==typeof r}function p(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function g(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+p(i):p(i)+r,t&&(r="-"+r)),r}var y=String.prototype.toLowerCase,d=String.prototype.toUpperCase;function h(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!s(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=g(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=g(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===d.call(r.specifier)?d.call(n):y.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function v(r){return"string"==typeof r}var w=Math.abs,b=String.prototype.toLowerCase,m=String.prototype.toUpperCase,A=String.prototype.replace,E=/e\+(\d)$/,_=/e-(\d)$/,S=/^(\d+)$/,j=/^(\d+)e/,U=/\.0$/,x=/\.0*e/,O=/(\..*[^0])0*e/;function T(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!s(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":w(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=A.call(n,O,"$1e"),n=A.call(n,x,"e"),n=A.call(n,U,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=A.call(n,E,"e+0$1"),n=A.call(n,_,"e-0$1"),r.alternate&&(n=A.call(n,S,"$1."),n=A.call(n,j,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===m.call(r.specifier)?m.call(n):b.call(n)}function I(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function V(r,e,n){var t=e-r.length;return t<0?r:r=n?r+I(t):I(t)+r}var F=String.fromCharCode,k=isNaN,N=Array.isArray;function P(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function $(r){var e,n,t,i,a,o,u,f,c;if(!N(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if(v(t=r[f]))o+=t;else{if(e=void 0!==t.precision,!(t=P(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,k(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,k(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=h(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!k(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=k(a)?String(t.arg):F(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=T(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=g(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=V(t.arg,t.width,t.padRight)),o+=t.arg||"",u+=1}return o}var G=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function H(r){var e,n,t,i;for(n=[],i=0,t=G.exec(r);t;)(e=r.slice(i,G.lastIndex-t[0].length)).length&&n.push(e),n.push(R(t)),i=G.lastIndex,t=G.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function W(r){return"string"==typeof r}function C(r){var e,n,t;if(!W(r))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=H(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return $.apply(null,n)}function L(r){return r!=r}var M=Math.floor;function Z(r){return M(r)===r}function q(r){return Z(r/2)}function B(r){return q(r>0?r-1:r+1)}var X=Number.POSITIVE_INFINITY,Y=Number,z=Y.NEGATIVE_INFINITY;function D(r){return r===X||r===z}var J=Math.sqrt;function K(r){return Math.abs(r)}var Q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function rr(){return Q&&"symbol"==typeof Symbol.toStringTag}var er,nr=Object.prototype.toString,tr=Object.prototype.hasOwnProperty,ir="function"==typeof Symbol?Symbol.toStringTag:"",ar=rr()?function(r){var e,n,t,i,a;if(null==r)return nr.call(r);n=r[ir],a=ir,e=null!=(i=r)&&tr.call(i,a);try{r[ir]=void 0}catch(e){return nr.call(r)}return t=nr.call(r),e?r[ir]=n:delete r[ir],t}:function(r){return nr.call(r)},or="function"==typeof Uint32Array,ur="function"==typeof Uint32Array?Uint32Array:null,fr="function"==typeof Uint32Array?Uint32Array:void 0;er=function(){var r,e,n;if("function"!=typeof ur)return!1;try{e=new ur(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(or&&n instanceof Uint32Array||"[object Uint32Array]"===ar(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var cr,lr=er,sr="function"==typeof Float64Array,pr="function"==typeof Float64Array?Float64Array:null,gr="function"==typeof Float64Array?Float64Array:void 0;cr=function(){var r,e,n;if("function"!=typeof pr)return!1;try{e=new pr([1,3.14,-3.14,NaN]),n=e,r=(sr&&n instanceof Float64Array||"[object Float64Array]"===ar(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var yr,dr=cr,hr="function"==typeof Uint8Array,vr="function"==typeof Uint8Array?Uint8Array:null,wr="function"==typeof Uint8Array?Uint8Array:void 0;yr=function(){var r,e,n;if("function"!=typeof vr)return!1;try{e=new vr(e=[1,3.14,-3.14,256,257]),n=e,r=(hr&&n instanceof Uint8Array||"[object Uint8Array]"===ar(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var br,mr=yr,Ar="function"==typeof Uint16Array,Er="function"==typeof Uint16Array?Uint16Array:null,_r="function"==typeof Uint16Array?Uint16Array:void 0;br=function(){var r,e,n;if("function"!=typeof Er)return!1;try{e=new Er(e=[1,3.14,-3.14,65536,65537]),n=e,r=(Ar&&n instanceof Uint16Array||"[object Uint16Array]"===ar(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Sr,jr={uint16:br,uint8:mr};(Sr=new jr.uint16(1))[0]=4660;var Ur,xr,Or=52===new jr.uint8(Sr.buffer)[0];!0===Or?(Ur=1,xr=0):(Ur=0,xr=1);var Tr={HIGH:Ur,LOW:xr},Ir=new dr(1),Vr=new lr(Ir.buffer),Fr=Tr.HIGH,kr=Tr.LOW;function Nr(r,e){return Ir[0]=e,r[0]=Vr[Fr],r[1]=Vr[kr],r}function Pr(r,e){return 1===arguments.length?Nr([0,0],r):Nr(r,e)}var $r=!0===Or?0:1,Gr=new dr(1),Rr=new lr(Gr.buffer);function Hr(r,e){return Gr[0]=r,Rr[$r]=e>>>0,Gr[0]}function Wr(r){return 0|r}var Cr,Lr,Mr=!0===Or?1:0,Zr=new dr(1),qr=new lr(Zr.buffer);function Br(r){return Zr[0]=r,qr[Mr]}!0===Or?(Cr=1,Lr=0):(Cr=0,Lr=1);var Xr={HIGH:Cr,LOW:Lr},Yr=new dr(1),zr=new lr(Yr.buffer),Dr=Xr.HIGH,Jr=Xr.LOW;function Kr(r,e){return zr[Dr]=r,zr[Jr]=e,Yr[0]}var Qr=[0,0];function re(r,e){var n,t;return Pr(Qr,r),n=Qr[0],n&=2147483647,t=Br(e),Kr(n|=t&=2147483648,Qr[1])}var ee=!0===Or?1:0,ne=new dr(1),te=new lr(ne.buffer);function ie(r,e){return ne[0]=r,te[ee]=e>>>0,ne[0]}var ae=1023,oe=1048576,ue=[1,1.5],fe=[0,.5849624872207642],ce=[0,1.350039202129749e-8];function le(r,e){return L(e)||D(e)?(r[0]=e,r[1]=0,r):0!==e&&K(e)<22250738585072014e-324?(r[0]=4503599627370496*e,r[1]=-52,r):(r[0]=e,r[1]=0,r)}var se=[0,0],pe=[0,0];function ge(r,e){var n,t;return 0===e||0===r||L(r)||D(r)?r:(function(r,e){1===arguments.length?le([0,0],r):le(r,e)}(se,r),e+=se[1],e+=function(r){var e=Br(r);return(e=(2146435072&e)>>>20)-ae|0}(r=se[0]),e<-1074?re(0,r):e>1023?r<0?z:X:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,Pr(pe,r),n=pe[0],n&=2148532223,t*Kr(n|=e+ae<<20,pe[1])))}var ye=2147483647,de=1048575,he=1048576,ve=2147483647,we=1083179008,be=1e300,me=1e-300,Ae=[0,0],Ee=[0,0];function _e(r,e){var n,t,i,a,o,u,f,c,l,s,p,g,y,d;if(L(r)||L(e))return NaN;if(Pr(Ae,e),o=Ae[0],0===Ae[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return J(r);if(-.5===e)return 1/J(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(D(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:K(r)<1==(e===X)?0:X}(r,e)}if(Pr(Ae,r),a=Ae[0],0===Ae[1]){if(0===a)return function(r,e){return e===z?X:e===X?0:e>0?B(e)?r:0:B(e)?re(X,r):X}(r,e);if(1===r)return 1;if(-1===r&&B(e))return-1;if(D(r))return r===z?_e(-0,-e):e<0?0:X}if(r<0&&!1===Z(e))return(r-r)/(r-r);if(i=K(r),n=a&ve|0,t=o&ve|0,f=o>>>31|0,u=(u=a>>>31|0)&&B(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(2147483647&Br(r))<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===f?u*be*be:u*me*me;if(n>1072693248)return 0===f?u*be*be:u*me*me;p=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=Hr(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(Ee,i)}else p=function(r,e,n){var t,i,a,o,u,f,c,l,s,p,g,y,d,h,v,w,b,m,A,E,_;return m=0,n<oe&&(m-=53,n=Br(e*=9007199254740992)),m+=(n>>20)-ae|0,n=1072693248|(A=1048575&n|0),A<=235662?E=0:A<767610?E=1:(E=0,m+=1,n-=oe),o=Hr(i=(w=(e=ie(e,n))-(c=ue[E]))*(b=1/(e+c)),0),t=524288+(n>>1|536870912),f=ie(0,t+=E<<18),v=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=Hr(f=3+(a=o*o)+(v+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),d=(g=-7.028461650952758e-9*(s=Hr(s=(w=o*f)+(b=u*f+(v-(f-3-a))*i),0))+.9617966939259756*(b-(s-w))+ce[E])-((y=Hr(y=(p=.9617967009544373*s)+g+(l=fe[E])+(h=m),0))-h-l-p),r[0]=y,r[1]=d,r}(Ee,i,n);if(s=(e-(c=Hr(e,0)))*p[0]+e*p[1],l=c*p[0],Pr(Ae,g=s+l),y=Wr(Ae[0]),d=Wr(Ae[1]),y>=we){if(0!=(y-we|d))return u*be*be;if(s+8008566259537294e-32>g-l)return u*be*be}else if((y&ve)>=1083231232){if(0!=(y-3230714880|d))return u*me*me;if(s<=g-l)return u*me*me}return g=function(r,e,n){var t,i,a,o,u,f,c,l,s,p;return s=((l=r&ye|0)>>20)-ae|0,c=0,l>1071644672&&(i=ie(0,((c=r+(he>>s+1)>>>0)&~(de>>(s=((c&ye)>>20)-ae|0)))>>>0),c=(c&de|he)>>20-s>>>0,r<0&&(c=-c),e-=i),r=Wr(r=Br(f=1-((f=(a=.6931471824645996*(i=Hr(i=n+e,0)))+(o=.6931471805599453*(n-(i-e))+-1.904654299957768e-9*i))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?ge(f,c):ie(f,r)}(y,l,s),u*g}function Se(r,e,n){c(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function je(r){return"number"==typeof r}var Ue=Y.prototype.toString,xe=rr();function Oe(r){return"object"==typeof r&&(r instanceof Y||(xe?function(r){try{return Ue.call(r),!0}catch(r){return!1}}(r):"[object Number]"===ar(r)))}function Te(r){return je(r)||Oe(r)}function Ie(r){return r<X&&r>z&&Z(r)}function Ve(r){return je(r)&&Ie(r)}function Fe(r){return Oe(r)&&Ie(r.valueOf())}function ke(r){return Ve(r)||Fe(r)}function Ne(r){return Ve(r)&&r>=0}function Pe(r){return Fe(r)&&r.valueOf()>=0}function $e(r){return Ne(r)||Pe(r)}function Ge(r){return"string"==typeof r}Se(Te,"isPrimitive",je),Se(Te,"isObject",Oe),Se(ke,"isPrimitive",Ve),Se(ke,"isObject",Fe),Se($e,"isPrimitive",Ne),Se($e,"isObject",Pe);var Re=String.prototype.valueOf,He=rr();function We(r){return"object"==typeof r&&(r instanceof String||(He?function(r){try{return Re.call(r),!0}catch(r){return!1}}(r):"[object String]"===ar(r)))}function Ce(r){return Ge(r)||We(r)}Se(Ce,"isPrimitive",Ge),Se(Ce,"isObject",We);var Le=9007199254740991;function Me(r,e){var n,t;if(!Ge(r))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",r));if(!Ne(e))throw new TypeError(C("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(0===r.length||0===e)return"";if(r.length*e>Le)throw new RangeError(C("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",r.length*e));for(n="",t=e;1==(1&t)&&(n+=r),0!=(t>>>=1);)r+=r;return n}var Ze=Math.ceil,qe={};l(qe,"fromBinaryStringUint8",(function(r){var e,n;if(8!==r.length)throw new Error(C("invalid argument. Input string must have a length equal to %u. Value: `%s`.",8,r));for(e=0,n=0;n<r.length;n++)"1"===r[n]&&(e+=_e(2,8-n-1));return e})),l(qe,"toBinaryStringUint8",(function(r){var e;return e=function(r){var e,n,t="";for(e=8;r>0&&e;)t=(n=r/2)===(r=M(n))?"0"+t:"1"+t,e-=1;return t}(r),e=function(r,e,n){var t,i;if(!Ge(r))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",r));if(!Ne(e))throw new TypeError(C("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(arguments.length>2){if(!Ge(i=n))throw new TypeError(C("invalid argument. Third argument must be a string. Value: `%s`.",i));if(0===i.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else i=" ";if(e>Le)throw new RangeError(C("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",e));return(t=(e-r.length)/i.length)<=0?r:Me(i,t=Ze(t))+r}(e,8,"0"),e}));var Be={};l(Be,"base",qe),r.base=qe,r.default=Be,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((r="undefined"!=typeof globalThis?globalThis:r||self).ns={});
//# sourceMappingURL=browser.js.map
