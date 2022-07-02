// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,u=Object.prototype,e=u.toString,i=u.__defineGetter__,f=u.__defineSetter__,o=u.__lookupGetter__,a=u.__lookupSetter__;var c=t,v=function(r,n,t){var c,v,l,y;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===e.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((v="value"in t)&&(o.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=u,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),l="get"in t,y="set"in t,v&&(l||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&i&&i.call(r,n,t.get),y&&f&&f.call(r,n,t.set),r},l=n()?c:v,y=l;var m,p,g,s,b,w,h,d,A,_,j,O,U,S,E,P,T,I,F,N,V,H,G,x,L,M,W,R,k,q,B,Y,C,z,D,J,K,Q,X,Z,$,rr,nr,tr,ur,er,ir,fr,or,ar,cr,vr,lr,yr,mr,pr,gr,sr,br,wr,hr,dr,Ar,_r,jr,Or,Ur,Sr,Er,Pr,Tr,Ir,Fr,Nr,Vr,Hr,Gr,xr,Lr,Mr,Wr,Rr,kr,qr,Br,Yr,Cr,zr,Dr,Jr,Kr,Qr,Xr,Zr,$r,rn,nn,tn,un,en,fn,on,an,cn,vn,ln,yn,mn,pn,gn,sn,bn,wn,hn,dn,An,_n,jn,On,Un,Sn,En,Pn,Tn,In,Fn,Nn,Vn,Hn,Gn,xn,Ln,Mn,Wn,Rn,kn,qn,Bn,Yn,Cn,zn,Dn,Jn,Kn,Qn,Xn,Zn,$n,rt,nt,tt,ut,et,it,ft,ot,at,ct,vt,lt,yt,mt,pt,gt,st,bt,wt,ht,dt,At,_t,jt,Ot,Ut,St,Et,Pt,Tt,It,Ft,Nt,Vt,Ht,Gt,xt,Lt,Mt,Wt,Rt,kt,qt,Bt,Yt,Ct,zt,Dt,Jt,Kt,Qt,Xt,Zt,$t,ru,nu,tu,uu,eu,iu,fu,ou,au,cu,vu,lu,yu,mu,pu,gu,su,bu,wu,hu,du,Au,_u,ju,Ou,Uu,Su,Eu,Pu,Tu,Iu,Fu,Nu,Vu,Hu,Gu,xu,Lu,Mu,Wu,Ru,ku,qu,Bu,Yu,Cu,zu,Du,Ju,Ku,Qu,Xu,Zu,$u,re,ne,te,ue,ee,ie,fe,oe,ae,ce,ve,le,ye,me,pe,ge,se,be,we,he,de,Ae,_e,je,Oe,Ue,Se,Ee,Pe,Te,Ie,Fe,Ne,Ve,He,Ge,xe,Le,Me,We,Re,ke,qe=function(r,n,t){y(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})},Be=qe,Ye=Be;function Ce(){if(s)return g;s=1;var r=p?m:(p=1,m=function(r){return r!=r});return g=r}function ze(){if(d)return h;d=1;var r=function(){if(w)return b;w=1;var r=Math.floor;return b=r}();return h=r}function De(){if(O)return j;O=1;var r=function(){if(_)return A;_=1;var r=ze();return A=function(n){return r(n)===n}}();return j=r}function Je(){if(P)return E;P=1;var r=function(){if(S)return U;S=1;var r=De();return U=function(n){return r(n/2)}}();return E=r}function Ke(){if(N)return F;N=1;var r=function(){if(I)return T;I=1;var r=Je();return T=function(n){return r(n>0?n-1:n+1)}}();return F=r}function Qe(){if(H)return V;H=1;var r=Number.POSITIVE_INFINITY;return V=r}function Xe(){return x?G:(x=1,G=Number)}function Ze(){if(M)return L;M=1;var r=Xe();return L=r}function $e(){if(R)return W;R=1;var r=Ze().NEGATIVE_INFINITY;return W=r}function ri(){if(Y)return B;Y=1;var r=function(){if(q)return k;q=1;var r=Qe(),n=$e();return k=function(t){return t===r||t===n}}();return B=r}function ni(){if(J)return D;J=1;var r=function(){if(z)return C;z=1;var r=Math.sqrt;return C=r}();return D=r}function ti(){if(Z)return X;Z=1;var r=Q?K:(Q=1,K=function(r){return Math.abs(r)});return X=r}function ui(){if(tr)return nr;tr=1;var r=rr?$:(rr=1,$=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")});return nr=r}function ei(){if(fr)return ir;fr=1;var r=function(){if(er)return ur;er=1;var r=ui()();return ur=function(){return r&&"symbol"==typeof Symbol.toStringTag}}();return ir=r}function ii(){if(ar)return or;ar=1;var r=Object.prototype.toString;return or=r}function fi(){if(pr)return mr;pr=1;var r=function(){if(yr)return lr;yr=1;var r=Object.prototype.hasOwnProperty;return lr=function(n,t){return null!=n&&r.call(n,t)}}();return mr=r}function oi(){if(wr)return br;wr=1;var r=fi(),n=function(){if(sr)return gr;sr=1;var r="function"==typeof Symbol?Symbol.toStringTag:"";return gr=r}(),t=ii();return br=function(u){var e,i,f;if(null==u)return t.call(u);i=u[n],e=r(u,n);try{u[n]=void 0}catch(r){return t.call(u)}return f=t.call(u),e?u[n]=i:delete u[n],f}}function ai(){if(dr)return hr;dr=1;var r,n=ei(),t=function(){if(vr)return cr;vr=1;var r=ii();return cr=function(n){return r.call(n)}}(),u=oi();return r=n()?u:t,hr=r}function ci(){if(Or)return jr;Or=1;var r=function(){if(_r)return Ar;_r=1;var r=ai(),n="function"==typeof Uint32Array;return Ar=function(t){return n&&t instanceof Uint32Array||"[object Uint32Array]"===r(t)}}();return jr=r}function vi(){if(Ir)return Tr;Ir=1;var r=ci(),n=Sr?Ur:(Sr=1,Ur=4294967295),t=function(){if(Pr)return Er;Pr=1;var r="function"==typeof Uint32Array?Uint32Array:null;return Er=r}();return Tr=function(){var u,e;if("function"!=typeof t)return!1;try{e=new t(e=[1,3.14,-3.14,n+1,n+2]),u=r(e)&&1===e[0]&&3===e[1]&&e[2]===n-2&&0===e[3]&&1===e[4]}catch(r){u=!1}return u}}function li(){if(Mr)return Lr;Mr=1;var r,n=function(){if(Nr)return Fr;Nr=1;var r=vi();return Fr=r}(),t=function(){if(Hr)return Vr;Hr=1;var r="function"==typeof Uint32Array?Uint32Array:void 0;return Vr=r}(),u=xr?Gr:(xr=1,Gr=function(){throw new Error("not implemented")});return r=n()?t:u,Lr=r}function yi(){if(qr)return kr;qr=1;var r=function(){if(Rr)return Wr;Rr=1;var r=ai(),n="function"==typeof Float64Array;return Wr=function(t){return n&&t instanceof Float64Array||"[object Float64Array]"===r(t)}}();return kr=r}function mi(){if(zr)return Cr;zr=1;var r=yi(),n=function(){if(Yr)return Br;Yr=1;var r="function"==typeof Float64Array?Float64Array:null;return Br=r}();return Cr=function(){var t,u;if("function"!=typeof n)return!1;try{u=new n([1,3.14,-3.14,NaN]),t=r(u)&&1===u[0]&&3.14===u[1]&&-3.14===u[2]&&u[3]!=u[3]}catch(r){t=!1}return t}}function pi(){if(rn)return $r;rn=1;var r,n=function(){if(Jr)return Dr;Jr=1;var r=mi();return Dr=r}(),t=function(){if(Qr)return Kr;Qr=1;var r="function"==typeof Float64Array?Float64Array:void 0;return Kr=r}(),u=Zr?Xr:(Zr=1,Xr=function(){throw new Error("not implemented")});return r=n()?t:u,$r=r}function gi(){if(en)return un;en=1;var r=function(){if(tn)return nn;tn=1;var r=ai(),n="function"==typeof Uint8Array;return nn=function(t){return n&&t instanceof Uint8Array||"[object Uint8Array]"===r(t)}}();return un=r}function si(){if(ln)return vn;ln=1;var r=gi(),n=on?fn:(on=1,fn=255),t=function(){if(cn)return an;cn=1;var r="function"==typeof Uint8Array?Uint8Array:null;return an=r}();return vn=function(){var u,e;if("function"!=typeof t)return!1;try{e=new t(e=[1,3.14,-3.14,n+1,n+2]),u=r(e)&&1===e[0]&&3===e[1]&&e[2]===n-2&&0===e[3]&&1===e[4]}catch(r){u=!1}return u}}function bi(){if(hn)return wn;hn=1;var r,n=function(){if(mn)return yn;mn=1;var r=si();return yn=r}(),t=function(){if(gn)return pn;gn=1;var r="function"==typeof Uint8Array?Uint8Array:void 0;return pn=r}(),u=bn?sn:(bn=1,sn=function(){throw new Error("not implemented")});return r=n()?t:u,wn=r}function wi(){if(jn)return _n;jn=1;var r=function(){if(An)return dn;An=1;var r=ai(),n="function"==typeof Uint16Array;return dn=function(t){return n&&t instanceof Uint16Array||"[object Uint16Array]"===r(t)}}();return _n=r}function hi(){if(Tn)return Pn;Tn=1;var r=wi(),n=Un?On:(Un=1,On=65535),t=function(){if(En)return Sn;En=1;var r="function"==typeof Uint16Array?Uint16Array:null;return Sn=r}();return Pn=function(){var u,e;if("function"!=typeof t)return!1;try{e=new t(e=[1,3.14,-3.14,n+1,n+2]),u=r(e)&&1===e[0]&&3===e[1]&&e[2]===n-2&&0===e[3]&&1===e[4]}catch(r){u=!1}return u}}function di(){if(Ln)return xn;Ln=1;var r,n=function(){if(Fn)return In;Fn=1;var r=hi();return In=r}(),t=function(){if(Vn)return Nn;Vn=1;var r="function"==typeof Uint16Array?Uint16Array:void 0;return Nn=r}(),u=Gn?Hn:(Gn=1,Hn=function(){throw new Error("not implemented")});return r=n()?t:u,xn=r}function Ai(){if(kn)return Rn;kn=1;var r,n,t=function(){if(Wn)return Mn;Wn=1;var r=bi(),n=di();return Mn={uint16:n,uint8:r}}();return(n=new t.uint16(1))[0]=4660,r=52===new t.uint8(n.buffer)[0],Rn=r}function _i(){if(Bn)return qn;Bn=1;var r=Ai();return qn=r}function ji(){if(Dn)return zn;Dn=1;var r=li(),n=pi(),t=function(){return Cn?Yn:(Cn=1,!0===_i()?(r=1,n=0):(r=0,n=1),Yn={HIGH:r,LOW:n});var r,n}(),u=new n(1),e=new r(u.buffer),i=t.HIGH,f=t.LOW;return zn=function(r,n){return u[0]=n,r[0]=e[i],r[1]=e[f],r}}function Oi(){if(Xn)return Qn;Xn=1;var r=function(){if(Kn)return Jn;Kn=1;var r=ji();return Jn=function(n,t){return 1===arguments.length?r([0,0],n):r(n,t)},Jn}();return Qn=r}function Ui(){if(nt)return rt;nt=1;var r=li(),n=pi(),t=function(){if($n)return Zn;$n=1;var r=_i();return Zn=!0===r?0:1}(),u=new n(1),e=new r(u.buffer);return rt=function(r,n){return u[0]=r,e[t]=n>>>0,u[0]},rt}function Si(){if(ut)return tt;ut=1;var r=Ui();return tt=r}function Ei(){if(ot)return ft;ot=1;var r=it?et:(it=1,et=function(r){return 0|r});return ft=r}function Pi(){if(lt)return vt;lt=1;var r=li(),n=pi(),t=function(){if(ct)return at;ct=1;var r=_i();return at=!0===r?1:0}(),u=new n(1),e=new r(u.buffer);return vt=function(r){return u[0]=r,e[t]}}function Ti(){if(mt)return yt;mt=1;var r=Pi();return yt=r}function Ii(){if(bt)return st;bt=1;var r=li(),n=pi(),t=function(){return gt?pt:(gt=1,!0===_i()?(r=1,n=0):(r=0,n=1),pt={HIGH:r,LOW:n});var r,n}(),u=new n(1),e=new r(u.buffer),i=t.HIGH,f=t.LOW;return st=function(r,n){return e[i]=r,e[f]=n,u[0]},st}function Fi(){if(ht)return wt;ht=1;var r=Ii();return wt=r}function Ni(){if(jt)return _t;jt=1;var r=function(){if(At)return dt;At=1;var r=Oi(),n=Ti(),t=Fi(),u=[0,0];return dt=function(e,i){var f,o;return r(u,e),f=u[0],f&=2147483647,o=n(i),t(f|=o&=2147483648,u[1])}}();return _t=r}function Vi(){if(Vt)return Nt;Vt=1;var r=li(),n=pi(),t=function(){if(Ft)return It;Ft=1;var r=_i();return It=!0===r?1:0}(),u=new n(1),e=new r(u.buffer);return Nt=function(r,n){return u[0]=r,e[t]=n>>>0,u[0]},Nt}function Hi(){if(Gt)return Ht;Gt=1;var r=Vi();return Ht=r}function Gi(){if(Lt)return xt;Lt=1;return xt=1023}function xi(){if(kt)return Rt;kt=1;var r=Ti(),n=Si(),t=Hi(),u=Gi(),e=Wt?Mt:(Wt=1,Mt=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))}),i=1048576,f=[1,1.5],o=[0,.5849624872207642],a=[0,1.350039202129749e-8];return Rt=function(c,v,l){var y,m,p,g,s,b,w,h,d,A,_,j,O,U,S,E,P,T,I,F;return T=0,l<i&&(T-=53,l=r(v*=9007199254740992)),T+=(l>>20)-u|0,l=1072693248|(I=1048575&l|0),I<=235662?F=0:I<767610?F=1:(F=0,T+=1,l-=i),y=524288+(l>>1|536870912),s=(P=1/((v=t(v,l))+(w=f[F])))*((E=v-w)-(g=n(m=E*P,0))*(b=t(0,y+=F<<18))-g*(v-(b-w))),S=(p=m*m)*p*e(p),b=n(b=3+(p=g*g)+(S+=s*(g+m)),0),O=(_=-7.028461650952758e-9*(d=n(d=(E=g*b)+(P=s*b+(S-(b-3-p))*m),0))+.9617966939259756*(P-(d-E))+a[F])-((j=n(j=(A=.9617967009544373*d)+_+(h=o[F])+(U=T),0))-U-h-A),c[0]=j,c[1]=O,c}}function Li(){if(Ct)return Yt;Ct=1;var r=Si(),n=Bt?qt:(Bt=1,qt=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)});return Yt=function(t,u){var e,i,f,o,a;return e=(a=1.9259629911266175e-8*(f=u-1)-1.4426950408889634*(f*f*n(f)))-((i=r(i=(o=1.4426950216293335*f)+a,0))-o),t[0]=i,t[1]=e,t}}function Mi(){if(nu)return ru;nu=1;var r=$t?Zt:($t=1,Zt=22250738585072014e-324),n=ri(),t=Ce(),u=ti();return ru=function(e,i){return t(i)||n(i)?(e[0]=i,e[1]=0,e):0!==i&&u(i)<r?(e[0]=4503599627370496*i,e[1]=-52,e):(e[0]=i,e[1]=0,e)}}function Wi(){if(iu)return eu;iu=1;var r=function(){if(uu)return tu;uu=1;var r=Mi();return tu=function(n,t){return 1===arguments.length?r([0,0],n):r(n,t)},tu}();return eu=r}function Ri(){if(cu)return au;cu=1;var r=Ti(),n=ou?fu:(ou=1,fu=2146435072),t=Gi();return au=function(u){var e=r(u);return(e=(e&n)>>>20)-t|0},au}function ki(){if(mu)return yu;mu=1;var r=Qe(),n=$e(),t=Gi(),u=Dt?zt:(Dt=1,zt=1023),e=Kt?Jt:(Kt=1,Jt=-1023),i=Xt?Qt:(Xt=1,Qt=-1074),f=Ce(),o=ri(),a=Ni(),c=Wi(),v=function(){if(lu)return vu;lu=1;var r=Ri();return vu=r}(),l=Oi(),y=Fi(),m=[0,0],p=[0,0];return yu=function(g,s){var b,w;return 0===s||0===g||f(g)||o(g)?g:(c(m,g),s+=m[1],(s+=v(g=m[0]))<i?a(0,g):s>u?g<0?n:r:(s<=e?(s+=52,w=2220446049250313e-31):w=1,l(p,g),b=p[0],b&=2148532223,w*y(b|=s+t<<20,p[1])))},yu}function qi(){if(Au)return du;Au=1;var r=Ti(),n=Hi(),t=Si(),u=Ei(),e=function(){if(gu)return pu;gu=1;var r=ki();return pu=r}(),i=bu?su:(bu=1,su=.6931471805599453),f=Gi(),o=hu?wu:(hu=1,wu=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)}),a=2147483647,c=1048575,v=1048576;return du=function(l,y,m){var p,g,s,b,w,h,d,A,_;return _=((A=l&a|0)>>20)-f|0,d=0,A>1071644672&&(g=n(0,((d=l+(v>>_+1)>>>0)&~(c>>(_=((d&a)>>20)-f|0)))>>>0),d=(d&c|v)>>20-_>>>0,l<0&&(d=-d),y-=g),w=(b=(m-((g=t(g=m+y,0))-y))*i+-1.904654299957768e-9*g)-((h=(s=.6931471824645996*g)+b)-s),p=h-(g=h*h)*o(g),l=r(h=1-(h*p/(p-2)-(w+h*w)-h)),l=u(l),h=(l+=d<<20>>>0)>>20<=0?e(h,d):n(h,l)}}function Bi(){if(ju)return _u;ju=1;var r=Ce(),n=Ke(),t=ri(),u=De(),e=ni(),i=ti(),f=Oi(),o=Si(),a=Ei(),c=$e(),v=Qe(),l=function(){if(Ut)return Ot;Ut=1;var r=Ke(),n=Ni(),t=$e(),u=Qe();return Ot=function(e,i){return i===t?u:i===u?0:i>0?r(i)?e:0:r(i)?n(u,e):u}}(),y=function(){if(Et)return St;Et=1;var r=Ti();return St=function(n,t){return(2147483647&r(n))<=1072693247?t<0?1/0:0:t>0?1/0:0}}(),m=function(){if(Tt)return Pt;Tt=1;var r=ti(),n=Qe();return Pt=function(t,u){return-1===t?(t-t)/(t-t):1===t?1:r(t)<1==(u===n)?0:n}}(),p=xi(),g=Li(),s=qi(),b=2147483647,w=1083179008,h=1e300,d=1e-300,A=[0,0],_=[0,0];return _u=function j(O,U){var S,E,P,T,I,F,N,V,H,G,x,L,M,W;if(r(O)||r(U))return NaN;if(f(A,U),I=A[0],0===A[1]){if(0===U)return 1;if(1===U)return O;if(-1===U)return 1/O;if(.5===U)return e(O);if(-.5===U)return 1/e(O);if(2===U)return O*O;if(3===U)return O*O*O;if(4===U)return(O*=O)*O;if(t(U))return m(O,U)}if(f(A,O),T=A[0],0===A[1]){if(0===T)return l(O,U);if(1===O)return 1;if(-1===O&&n(U))return-1;if(t(O))return O===c?j(-0,-U):U<0?0:v}if(O<0&&!1===u(U))return(O-O)/(O-O);if(P=i(O),S=T&b|0,E=I&b|0,N=I>>>31|0,F=(F=T>>>31|0)&&n(U)?-1:1,E>1105199104){if(E>1139802112)return y(O,U);if(S<1072693247)return 1===N?F*h*h:F*d*d;if(S>1072693248)return 0===N?F*h*h:F*d*d;x=g(_,P)}else x=p(_,P,S);if(G=(U-(V=o(U,0)))*x[0]+U*x[1],H=V*x[0],f(A,L=G+H),M=a(A[0]),W=a(A[1]),M>=w){if(0!=(M-w|W))return F*h*h;if(G+8008566259537294e-32>L-H)return F*h*h}else if((M&b)>=1083231232){if(0!=(M-3230714880|W))return F*d*d;if(G<=L-H)return F*d*d}return F*(L=s(M,H,G))},_u}function Yi(){if(Eu)return Su;Eu=1;var r=function(){if(Uu)return Ou;Uu=1;var r=Bi();return Ou=r}();return Su=function(n){var t,u;if(8!==n.length)throw new Error("invalid argument. Input string must have a length equal to 8. Value: `"+n+"`.");for(t=0,u=0;u<n.length;u++)"1"===n[u]&&(t+=r(2,8-u-1));return t}}function Ci(){if(Vu)return Nu;Vu=1;var r=function(){if(Fu)return Iu;Fu=1;var r=l;return Iu=function(n,t,u){r(n,t,{configurable:!1,enumerable:!1,writable:!1,value:u})}}();return Nu=r}function zi(){if(Gu)return Hu;return Gu=1,Hu=function(r){return"number"==typeof r}}function Di(){if(Wu)return Mu;Wu=1;var r=function(){if(Lu)return xu;Lu=1;var r=Ze().prototype.toString;return xu=r}();return Mu=function(n){try{return r.call(n),!0}catch(r){return!1}}}function Ji(){if(ku)return Ru;ku=1;var r=ei(),n=ai(),t=Ze(),u=Di(),e=r();return Ru=function(r){return"object"==typeof r&&(r instanceof t||(e?u(r):"[object Number]"===n(r)))}}function Ki(){if(Cu)return Yu;Cu=1;var r=Ci(),n=function(){if(Bu)return qu;Bu=1;var r=zi(),n=Ji();return qu=function(t){return r(t)||n(t)}}(),t=zi(),u=Ji();return r(n,"isPrimitive",t),r(n,"isObject",u),Yu=n}function Qi(){if(Du)return zu;Du=1;var r=Qe(),n=$e(),t=De();return zu=function(u){return u<r&&u>n&&t(u)}}function Xi(){if(Ku)return Ju;Ku=1;var r=Ki().isPrimitive,n=Qi();return Ju=function(t){return r(t)&&n(t)}}function Zi(){if(Xu)return Qu;Xu=1;var r=Ki().isObject,n=Qi();return Qu=function(t){return r(t)&&n(t.valueOf())}}function $i(){if(ne)return re;ne=1;var r=Ci(),n=function(){if($u)return Zu;$u=1;var r=Xi(),n=Zi();return Zu=function(t){return r(t)||n(t)}}(),t=Xi(),u=Zi();return r(n,"isPrimitive",t),r(n,"isObject",u),re=n}function rf(){if(ue)return te;ue=1;var r=$i().isPrimitive;return te=function(n){return r(n)&&n>=0}}function nf(){if(ie)return ee;ie=1;var r=$i().isObject;return ee=function(n){return r(n)&&n.valueOf()>=0}}function tf(){if(ce)return ae;ce=1;var r=Ci(),n=function(){if(oe)return fe;oe=1;var r=rf(),n=nf();return fe=function(t){return r(t)||n(t)}}(),t=rf(),u=nf();return r(n,"isPrimitive",t),r(n,"isObject",u),ae=n}function uf(){if(le)return ve;return le=1,ve=function(r){return"string"==typeof r}}function ef(){if(ge)return pe;ge=1;var r=function(){if(me)return ye;me=1;var r=String.prototype.valueOf;return ye=r}();return pe=function(n){try{return r.call(n),!0}catch(r){return!1}}}function ff(){if(be)return se;be=1;var r=ei(),n=ai(),t=ef(),u=r();return se=function(r){return"object"==typeof r&&(r instanceof String||(u?t(r):"[object String]"===n(r)))}}function of(){if(Ae)return de;Ae=1;var r=Ci(),n=function(){if(he)return we;he=1;var r=uf(),n=ff();return we=function(t){return r(t)||n(t)}}(),t=uf(),u=ff();return r(n,"isPrimitive",t),r(n,"isObject",u),de=n}function af(){if(je)return _e;je=1;return _e=9007199254740991}function cf(){if(Ee)return Se;Ee=1;var r=function(){if(Ue)return Oe;Ue=1;var r=tf().isPrimitive,n=of().isPrimitive,t=af();return Oe=function(u,e){var i,f;if(!n(u))throw new TypeError("invalid argument. First argument must be a string. Value: `"+u+"`.");if(!r(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===u.length||0===e)return"";if(u.length*e>t)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(i="",f=e;1==(1&f)&&(i+=u),0!=(f>>>=1);)u+=u;return i}}();return Se=r}function vf(){if(Fe)return Ie;Fe=1;var r=function(){if(Te)return Pe;Te=1;var r=Math.ceil;return Pe=r}();return Ie=r}function lf(){if(Ge)return He;Ge=1;var r=function(){if(Ve)return Ne;Ve=1;var r=tf().isPrimitive,n=of().isPrimitive,t=cf(),u=vf(),e=af();return Ne=function(i,f,o){var a,c;if(!n(i))throw new TypeError("invalid argument. First argument must be a string. Value: `"+i+"`.");if(!r(f))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+f+"`.");if(arguments.length>2){if(!n(c=o))throw new TypeError("invalid argument. Third argument must be a string. Value: `"+c+"`.");if(0===c.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else c=" ";if(f>e)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");return(a=(f-i.length)/c.length)<=0?i:(a=u(a),t(c,a)+i)},Ne}();return He=r}function yf(){if(We)return Me;We=1;var r=lf(),n=function(){if(Le)return xe;Le=1;var r=ze();return xe=function(n){var t,u,e="";for(t=8;n>0&&t;)e=(u=n/2)===(n=r(u))?"0"+e:"1"+e,t-=1;return e}}();return Me=function(t){var u;return u=n(t),u=r(u,8,"0")}}var mf=Ye,pf={};mf(pf,"fromBinaryStringUint8",function(){if(Tu)return Pu;Tu=1;var r=Yi();return Pu=r}()),mf(pf,"toBinaryStringUint8",function(){if(ke)return Re;ke=1;var r=yf();return Re=r}());var gf=pf,sf={};Ye(sf,"base",gf);export{gf as base,sf as default};
//# sourceMappingURL=mod.js.map
