"use strict";if("undefined"==typeof scramblers){var scramblers={};scramblers.lib={randomInt:function(){function r(){var r="WARNING: randomInt is falling back to Math.random for random number generation.";console.warn?console.warn(r):console.log(r),f=!0}function o(r){if("number"!=typeof r||0>r||Math.floor(r)!==r)throw new Error("randomInt.below() not called with a positive integer value.");if(r>9007199254740992)throw new Error("Called randomInt.below() with max == "+r+", which is larger than Javascript can handle with integer precision.")}function n(r){o(r);var f=e(),i=Math.floor(t/r)*r;return i>f?f%r:n(r)}var e,t=9007199254740992,f=!1,i=window.crypto||window.msCrypto||window.cryptoUint32;if(i)e=function(){var r=2097152,o=new Uint32Array(2);return i.getRandomValues(o),o[0]*r+(o[1]>>21)};else{var a="ERROR: randomInt could not find a suitable crypto.getRandomValues() function.";console.error?console.error(a):console.log(a),e=function(){if(f)return Math.floor(Math.random()*t);throw new Error("randomInt cannot get random values.")}}return{below:n,enableInsecureMathRandomFallback:r}}()}}scramblers[333]=function(){function r(){}function o(r,o){var n,e;for(n=Array(r),e=0;r>e;n[e++]=Array(o));return n}function n(){n=r,Ur=o(495,18),zr=o(324,18),Ar=o(336,18),Pr=o(495,8),Dr=Array(160380),Cr=Array(166320),Sr=Array(870912),Rr=o(1320,18),kr=Array(24),dr=Array(346),gr=o(2768,18),br=o(2768,10),Ir=o(24,10),Mr=o(24,16),xr=Array(66432),Fr=Array(66432)}function e(){var r;for(r=0;346>r;++r)dr[r]=0;for(r=0;2768>r;++r)dr[r>>>3]=dr[r>>>3]|pr(Er[r])<<(7&r)}function t(){var r,o,n,e;for(r=new N,o=new N,n=0;2768>n;++n)for(X(r.cp,Er[n]),e=0;18>e;++e)T(r,no[e],o),gr[n][e]=g(o)}function f(){var r,o,n,e;for(r=new N,o=new N,n=0;2768>n;++n)for(X(r.ep,_r[n]),e=0;10>e;++e)j(r,no[vo[e]],o),br[n][e]=A(o)}function i(){var r,o,n,e;for(r=new N,o=new N,n=0;336>n;++n)for(U(r,Br[n]),e=0;18>e;++e)j(r,no[e],o),Ar[n][e]=F(o)}function a(r){var o,n,e,t,f,i,a,c,u,l,s,p,m,h,v,w,y,d,g,b,A;for(n=new N,i=new N,a=0,c=1,o=Array(2768),s=0;2768>s;++s)for(o[s]=0,X(n.ep,_r[s]),v=1;16>v;++v)j(Lr[Gr[v]],n,Qr),j(Qr,Lr[v],i),65535!=ar(_r,q(i.ep))&&(o[s]=o[s]|1<<v);for(s=0;66432>s;++s)Fr[s]=-1;for(Fr[0]=0;66432>c;){for(h=a>7,g=h?-1:a,e=h?a:-1,++a,s=0;66432>s;++s)if(Fr[s]===g)for(y=s%24,u=~~(s/24),w=0;10>w;++w)if(l=br[u][w],A=15&l,d=Mr[Ir[y][w]][A],l>>>=4,p=24*l+d,Fr[p]===e){if(++c,h){Fr[s]=a;break}if(Fr[p]=a,b=o[l],0!=b)for(v=1;16>v;++v)b>>=1,1===(1&b)&&(m=24*l+Mr[d][v],-1===Fr[m]&&(Fr[m]=a,++c))}c/66432>.01&&r("MEPermPrun: "+Math.floor(100*c/66432)+"% ("+c+"/66432)")}for(s=0;66432>s;++s)xr[s]=-1;for(xr[0]=0,a=0,c=1;66432>c;){for(h=a>7,g=h?-1:a,e=h?a:-1,++a,s=0;66432>s;++s)if(xr[s]===g)for(y=s%24,t=~~(s/24),w=0;10>w;++w)if(f=gr[t][vo[w]],A=15&f,d=Mr[Ir[y][w]][A],f>>>=4,p=24*f+d,xr[p]===e){if(++c,h){xr[s]=a;break}if(xr[p]=a,b=o[f],0!=b)for(v=1;16>v;++v)b>>=1,1===(1&b)&&(m=24*f+Mr[d][v^Hr[v]],-1===xr[m]&&(xr[m]=a,++c))}c/66432>.01&&r("MCPermPrun: "+Math.floor(100*c/66432)+"% ("+c+"/66432)")}}function c(){var r,o,n,e;for(r=new N,o=new N,n=0;24>n;++n)for(D(r,n),e=0;16>e;++e)W(r,Gr[e],o),Mr[n][e]=M(o)}function u(){var r,o,n,e;for(r=new N,o=new N,n=0;24>n;++n)for(D(r,n),e=0;10>e;++e)j(r,no[vo[e]],o),Ir[n][e]=M(o)}function l(){var r,o;for(r=new N,o=0;24>o;++o)D(r,o),kr[I(r)%24]=o}function s(){var r,o,n,e;for(r=new N,o=new N,n=0;1320>n;++n)for(E(r,n),e=0;18>e;++e)j(r,no[e],o),Rr[n][e]=I(o)}function p(r){var o,n,e,t,f,i,a,c,u,l,s,p,m,h,v,w,y,d,g,b,A,F,M,I,R,S,z,P;for(o=Array(324),e=new N,f=new N,m=0;324>m;++m)for(o[m]=0,L(e,qr[m]),y=0;8>y;++y)J(Lr[Gr[y<<1]],e,Qr),J(Qr,Lr[y<<1],f),65535!=ar(qr,k(f))&&(o[m]=o[m]|1<<y);for(n=Array(336),m=0;336>m;++m)for(n[m]=0,U(e,Br[m]),y=0;8>y;++y)j(Lr[Gr[y<<1]],e,Qr),j(Qr,Lr[y<<1],f),65535!=ar(Br,x(f))&&(n[m]=n[m]|1<<y);for(m=0;870912>m;++m)Sr[m]=-1;for(m=0;8>m;++m)Sr[m]=0;for(i=0,a=8;870912>a;){for(w=i>6,b=w?-1:i,t=w?i:-1,++i,m=0;870912>m;++m)if(Sr[m]==b)for(z=~~(m/2688),c=m%2688,l=7&m,c>>>=3,g=0;18>g;++g)if(P=zr[z][g],S=7&P,P>>>=3,u=Ar[c][Jr[l][g]],s=Vr[Nr[7&u][l]][S],u>>>=3,h=2688*P+(u<<3|s),Sr[h]===t){if(++a,w){Sr[m]=i;break}if(Sr[h]=i,M=o[P],I=n[u],1!=M||1!=I)for(y=0;8>y;++y,I>>=1)if(1===(1&I))for(p=Vr[s][y],d=0;8>d;++d)0!=(M&1<<d)&&(v=2688*P+(u<<3|Vr[p][d]),-1===Sr[v]&&(Sr[v]=i,++a))}a/870912>.01&&r("TwistFlipPrun: "+Math.floor(100*a/870912)+"% ("+a+"/870912)")}for(m=0;160380>m;++m)Dr[m]=-1;for(Dr[0]=0,i=0,a=1;160380>a;){for(w=i>6,b=w?-1:i,t=w?i:-1,++i,m=0;160380>m;++m)if(Dr[m]===b)for(A=m%495,z=~~(m/495),g=0;18>g;++g)if(P=zr[z][g],R=7&P,F=Pr[Ur[A][g]][R],P>>>=3,h=495*P+F,Dr[h]===t){if(++a,w){Dr[m]=i;break}if(Dr[h]=i,M=o[P],1!=M)for(y=1;8>y;++y)M>>=1,1===(1&M)&&(v=495*P+Pr[F][y],-1===Dr[v]&&(Dr[v]=i,++a))}a/160380>.01&&r("UDSliceTwistPrun: "+Math.floor(100*a/160380)+"% ("+a+"/160380)")}for(m=0;166320>m;++m)Cr[m]=-1;for(Cr[0]=0,i=0,a=1;166320>a;){for(w=i>6,b=w?-1:i,t=w?i:-1,++i,m=0;166320>m;++m)if(Cr[m]===b)for(A=m%495,c=~~(m/495),g=0;18>g;++g)if(u=Ar[c][g],R=7&u,F=Pr[Ur[A][g]][R],u>>>=3,h=495*u+F,Cr[h]===t){if(++a,w){Cr[m]=i;break}if(Cr[h]=i,M=n[u],1!=M)for(y=1;8>y;++y)M>>=1,1===(1&M)&&(v=495*u+Pr[F][y],-1===Cr[v]&&(Cr[v]=i,++a))}a/166320>.01&&r("UDSliceFlipPrun: "+Math.floor(100*a/166320)+"% ("+a+"/166320)")}}function m(){var r,o,n,e;for(r=new N,o=new N,n=0;324>n;++n)for(L(r,qr[n]),e=0;18>e;++e)T(r,no[e],o),zr[n][e]=R(o)}function h(){var r,o,n,e;for(r=new N,o=new N,n=0;495>n;++n)for(_(r,n),e=0;16>e;e+=2)W(r,Gr[e],o),Pr[n][e>>>1]=S(o)}function v(){var r,o,n,e;for(r=new N,o=new N,n=0;495>n;++n)for(_(r,n),e=0;18>e;++e)j(r,no[e],o),Ur[n][e]=S(o)}function w(){w=r,Qr=new N,Lr=Array(16),Gr=Array(16),jr=o(16,16),Or=o(16,18),Nr=o(8,8),Jr=o(8,18),Vr=o(8,8),Wr=o(16,10),Br=Array(336),qr=Array(324),Er=Array(2768),_r=Er,Tr=Array(40320),Kr=o(56,56),Hr=[0,0,0,0,1,3,1,3,1,3,1,3,0,0,0,0],Xr=new G(2531,1373,67026819,1877),Yr=new G(2089,1906,322752913,255),Zr=[[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],[6,7,8,0,1,2,3,4,5,15,16,17,9,10,11,12,13,14],[3,4,5,6,7,8,0,1,2,12,13,14,15,16,17,9,10,11],[2,1,0,5,4,3,8,7,6,11,10,9,14,13,12,17,16,15],[8,7,6,2,1,0,5,4,3,17,16,15,11,10,9,14,13,12],[5,4,3,8,7,6,2,1,0,14,13,12,17,16,15,11,10,9]],H(),K()}function y(r){r.cp=[0,1,2,3,4,5,6,7],r.co=[0,0,0,0,0,0,0,0],r.ep=[0,1,2,3,4,5,6,7,8,9,10,11],r.eo=[0,0,0,0,0,0,0,0,0,0,0,0]}function d(r,o){var n;for(n=0;8>n;++n)r.cp[n]=o.cp[n],r.co[n]=o.co[n];for(n=0;12>n;++n)r.ep[n]=o.ep[n],r.eo[n]=o.eo[n]}function g(r){var o,n;if(null!=$r)return o=$r[q(r.cp)],o^=Hr[15&o];for(n=0;16>n;++n)if(B(r,Gr[n],r.temps),o=ar(Er,q(r.temps.cp)),65535!=o)return o<<4|n;return 0}function b(r){var o,n,e,t,f,i;for(n=0,e=0,t=0,f=3,o=11;o>=0;--o)4<=r.ep[o]&&r.ep[o]<=6&&(n+=eo[o][f--],i=1<<r.ep[o],e+=cr(t&i-1)*lo[2-f],t|=i);return 6*n+e}function A(r){var o,n;if(null!=$r)return $r[q(r.ep)];for(n=0;16>n;++n)if(W(r,Gr[n],r.temps),o=ar(_r,q(r.temps.ep)),65535!=o)return o<<4|n;return 0}function x(r){var o,n;for(n=0,o=0;11>o;++o)n|=r.eo[o]<<o;return n}function F(r){var o,n;if(null!=ro)return ro[x(r)];for(n=0;16>n;n+=2)if(W(r,Gr[n],r.temps),o=ar(Br,x(r.temps)),65535!=o)return o<<3|n>>>1;return 0}function M(r){var o,n,e,t;for(e=1<<r.ep[11],n=0,o=10;o>=8;--o)t=1<<r.ep[o],n+=cr(e&t-1)*lo[11-o],e|=t;return n}function I(r){var o,n,e,t,f,i;for(n=0,e=0,t=0,f=3,o=11;o>=0;--o)r.ep[o]>=9&&(n+=eo[o][f--],i=1<<r.ep[o],e+=cr(t&i-1)*lo[2-f],t|=i);return 6*n+e}function k(r){var o,n;for(n=0,o=0;7>o;++o)n=3*n,n+=r.co[o];return n}function R(r){var o,n;if(null!=oo)return oo[k(r)];for(n=0;16>n;n+=2)if(B(r,Gr[n],r.temps),o=k(r.temps),o=ar(qr,o),65535!=o)return o<<3|n>>>1;return 0}function S(r){var o,n,e;for(n=0,e=4,o=0;12>o;++o)r.ep[o]>=8&&(n+=eo[11-o][e--]);return n}function z(r){var o,n,e,t,f,i;for(n=0,e=0,t=0,f=3,o=11;o>=0;--o)r.ep[o]<=2&&(n+=eo[o][f--],i=1<<r.ep[o],e+=cr(t&i-1)*lo[2-f],t|=i);return 6*n+e}function P(r){var o,n,e;for(n=0;12>n;++n)r.temps.ep[r.ep[n]]=n;for(n=0;12>n;++n)r.temps.eo[n]=r.eo[r.temps.ep[n]];for(o=0;8>o;++o)r.temps.cp[r.cp[o]]=o;for(o=0;8>o;++o)e=r.co[r.temps.cp[o]],r.temps.co[o]=-e,r.temps.co[o]<0&&(r.temps.co[o]=r.temps.co[o]+3);d(r,r.temps)}function C(r,o){var n,e;for(r.ep[11]=0,n=10;n>=0;--n)for(r.ep[n]=o%(12-n),o=~~(o/(12-n)),e=n+1;12>e;++e)r.ep[e]>=r.ep[n]&&++r.ep[e]}function U(r,o){var n;for(r.eo[11]=ur(o),n=0;11>n;++n)r.eo[n]=1&o,o>>>=1}function D(r,o){var n,e;for(r.ep[11]=8,n=10;n>=8;--n)for(r.ep[n]=o%(12-n)+8,o=~~(o/(12-n)),e=n+1;12>e;++e)r.ep[e]>=r.ep[n]&&++r.ep[e]}function E(r,o){var n,e,t;for(n=mo[o%6],o=~~(o/6),t=3,e=11;e>=0;--e)o>=eo[e][t]?(o-=eo[e][t--],r.ep[e]=n[2-t]):r.ep[e]=8-e+t}function L(r,o){var n,e;for(e=0,n=6;n>=0;--n)e+=r.co[n]=o%3,o=~~(o/3);r.co[7]=(15-e)%3}function _(r,o){var n,e;for(e=4,n=0;12>n;++n)o>=eo[11-n][e]?(o-=eo[11-n][e--],r.ep[n]=11-e):r.ep[n]=n+e-4}function B(r,o,n){J(Lr[Gr[o]],r,Qr),J(Qr,Lr[o],n)}function T(r,o,n){var e;for(e=0;8>e;++e)n.cp[e]=r.cp[o.cp[e]],n.co[e]=(r.co[o.cp[e]]+o.co[e])%3}function J(r,o,n){var e,t,f,i;for(e=0;8>e;++e)n.cp[e]=r.cp[o.cp[e]],f=r.co[o.cp[e]],i=o.co[e],t=f,t+=3>f?i:3-i,t%=3,3>f^3>i&&(t+=3),n.co[e]=t}function N(){y(this)}function V(r,o,n,e){var t;for(y(this),t=0;8>t;++t)this.cp[t]=r[t],this.co[t]=o[t];for(t=0;12>t;++t)this.ep[t]=n[t],this.eo[t]=e[t]}function G(r,o,n,e){y(this),X(this.cp,r),L(this,o),C(this,n),U(this,e)}function O(r){V.call(this,r.cp,r.co,r.ep,r.eo)}function W(r,o,n){j(Lr[Gr[o]],r,Qr),j(Qr,Lr[o],n)}function j(r,o,n){var e;for(e=0;12>e;++e)n.ep[e]=r.ep[o.ep[e]],n.eo[e]=o.eo[e]^r.eo[o.ep[e]]}function q(r){var o,n,e,t;for(n=0,t=1985229328,o=0;7>o;++o)e=r[o]<<2,n=(8-o)*n+(t>>e&7),t-=286331152<<e;return n}function H(){var r,o,n;for(o=Array(18),no=[new G(15120,0,119750400,0),new G(21021,1494,323403417,0),new G(8064,1236,29441808,802),new G(9,0,5880,0),new G(1230,412,2949660,0),new G(224,137,328552,1160)],r=0;6>r;++r)for(o[3*r]=no[r],n=0;2>n;++n)o[3*r+n+1]=new N,j(o[3*r+n],no[r],o[3*r+n+1]),T(o[3*r+n],no[r],o[3*r+n+1]);no=o}function K(){var r,o,n,e,t,f,i,a,c,u,l;for(r=new N,o=new N,n=new G(28783,0,259268407,0),l=new G(15138,0,119765538,1792),i=new G(5167,0,83473207,0),i.co=[3,3,3,3,3,3,3,3],e=0;16>e;++e)Lr[e]=new O(r),J(r,l,o),j(r,l,o),u=o,o=r,r=u,e%4===3&&(J(u,i,o),j(u,i,o),u=o,o=r,r=u),e%8===7&&(J(u,n,o),j(u,n,o),u=o,o=r,r=u);for(t=0;16>t;++t)for(f=0;16>f;++f)if(J(Lr[t],Lr[f],r),0===r.cp[0]&&1===r.cp[1]&&2===r.cp[2]){Gr[t]=f;break}for(e=0;16>e;++e)for(t=0;16>t;++t)for(J(Lr[e],Lr[t],r),f=0;16>f;++f)if(Lr[f].cp[0]===r.cp[0]&&Lr[f].cp[1]===r.cp[1]&&Lr[f].cp[2]===r.cp[2]){jr[e][t]=f;break}for(t=0;18>t;++t)for(c=0;16>c;++c){B(no[t],Gr[c],r);r:for(a=0;18>a;++a){for(e=0;8>e;++e)if(r.cp[e]!=no[a].cp[e]||r.co[e]!=no[a].co[e])continue r;Or[c][t]=a}}for(t=0;10>t;++t)for(c=0;16>c;++c)Wr[c][t]=ho[Or[c][vo[t]]];for(t=0;8>t;++t)for(c=0;8>c;++c)Nr[c][t]=jr[c<<1][t<<1]>>>1;for(t=0;18>t;++t)for(c=0;8>c;++c)Jr[c][t]=Or[c<<1][t];for(t=0;8>t;++t)for(c=0;8>c;++c)Vr[t][c]=Nr[t][Gr[c<<1]>>1]}function Q(){var r,o,n,e,t,f,i,a,c,u,l,s;for(n=new N,t=new N,l=Array(1260),e=0,f=0;64>f;l[f++]=0);for(f=0;2048>f;++f)if(0===(l[f>>>5]&1<<(31&f))){for(U(n,f),s=0;16>s;s+=2)j(Lr[Gr[s]],n,Qr),j(Qr,Lr[s],t),i=x(t),l[i>>>5]|=1<<(31&i),ro[i]=e<<3|s>>>1;Br[e++]=f}for(e=0,f=0;69>f;l[f++]=0);for(f=0;2187>f;++f)if(0===(l[f>>>5]&1<<(31&f))){for(L(n,f),s=0;16>s;s+=2)J(Lr[Gr[s]],n,Qr),J(Qr,Lr[s],t),i=k(t),l[i>>>5]|=1<<(31&i),oo[i]=e<<3|s>>>1;qr[e++]=f}for(u=Array(2),u[0]=Array(56),u[1]=Array(56),f=0;56>f;++f)u[0][f]=u[1][f]=0;for(f=0;40320>f;++f)X(n.ep,f),r=~~(z(n)/6),o=~~(b(n)/6),u[o>>5][r]|=1<<(31&o);for(f=0;56>f;++f)for(e=0,a=0;56>a;++a)0!=(u[a>>5][f]&1<<(31&a))&&(Kr[f][a]=e++);for(e=0,f=0;1260>f;l[f++]=0);for(f=0;40320>f;++f)if(0===(l[f>>>5]&1<<(31&f))){for(X(n.ep,f),s=0;16>s;++s)j(Lr[Gr[s]],n,Qr),j(Qr,Lr[s],t),i=q(t.ep),l[i>>>5]|=1<<(31&i),r=z(t),o=b(t),c=4032*Kr[~~(r/6)][~~(o/6)]+12*r+o%6*2+pr(i),Tr[c]=e<<4|s,$r[i]=e<<4|s;_r[e++]=f}}function X(r,o){var n,e,t,f,i;for(i=1985229328,n=0;7>n;++n)t=lo[7-n],f=~~(o/t),o-=f*t,f<<=2,r[n]=i>>f&7,e=(1<<f)-1,i=(i&e)+(i>>4&~e);r[7]=i}function Y(){}function Z(r,o){var n;for(o.temps=new N,n=0;6>n;++n)r.twist[n]=R(o),r.tsym[n]=7&r.twist[n],r.twist[n]>>>=3,r.flip[n]=F(o),r.fsym[n]=7&r.flip[n],r.flip[n]>>>=3,r.slice_0[n]=S(o),r.corn0[n]=g(o),r.csym0[n]=15&r.corn0[n],r.corn0[n]>>>=4,r.mid30[n]=I(o),r.e10[n]=z(o),r.e20[n]=b(o),r.prun[n]=Math.max(Math.max(Dr[495*r.twist[n]+Pr[r.slice_0[n]][r.tsym[n]]],Cr[495*r.flip[n]+Pr[r.slice_0[n]][r.fsym[n]]]),Sr[2688*r.twist[n]+(r.flip[n]<<3|Vr[r.fsym[n]][r.tsym[n]])]),T(Yr,o,o.temps),T(o.temps,Xr,o),j(Yr,o,o.temps),j(o.temps,Xr,o),2===n&&P(o);for(r.solution=null,r.length1=0;r.length1<r.sol;++r.length1)for(r.maxlength2=Math.min(~~(r.sol/2)+1,r.sol-r.length1),r.urfidx=0;r.urfidx<6;++r.urfidx)if(r.corn[0]=r.corn0[r.urfidx],r.csym[0]=r.csym0[r.urfidx],r.mid3[0]=r.mid30[r.urfidx],r.e1[0]=r.e10[r.urfidx],r.e2[0]=r.e20[r.urfidx],r.prun[r.urfidx]<=r.length1&&rr(r,r.twist[r.urfidx],r.tsym[r.urfidx],r.flip[r.urfidx],r.fsym[r.urfidx],r.slice_0[r.urfidx],r.length1,18))return null===r.solution?"Error 8":r.solution;return"Error 7"}function $(r){var o,n,e,t,f,i,a,c,u,l,s,p;for(r.valid2=Math.min(r.valid2,r.valid1),f=r.valid1;f<r.length1;++f)a=r.move[f],r.corn[f+1]=gr[r.corn[f]][Or[r.csym[f]][a]],r.csym[f+1]=jr[15&r.corn[f+1]][r.csym[f]],r.corn[f+1]>>>=4,r.mid3[f+1]=Rr[r.mid3[f]][a];if(r.valid1=r.length1,c=kr[r.mid3[r.length1]%24],u=xr[24*r.corn[r.length1]+Mr[c][r.csym[r.length1]]],u>=r.maxlength2)return!1;for(f=r.valid2;f<r.length1;++f)r.e1[f+1]=Rr[r.e1[f]][r.move[f]],r.e2[f+1]=Rr[r.e2[f]][r.move[f]];if(r.valid2=r.length1,o=r.corn[r.length1],t=4032*Kr[~~(r.e1[r.length1]/6)][~~(r.e2[r.length1]/6)]+12*r.e1[r.length1]+r.e2[r.length1]%6*2+(dr[o>>>3]>>>(7&o)&1^po[c]),n=Tr[t],e=15&n,n>>>=4,u=Math.max(Fr[24*n+Mr[c][e]],u),u>=r.maxlength2)return!1;for(i=0===r.length1?10:ho[3*~~(r.move[r.length1-1]/3)+1],f=u;f<r.maxlength2;++f)if(or(r,n,e,r.corn[r.length1],r.csym[r.length1],c,f,r.length1,i)){if(r.sol=r.length1+f,s="",p=r.urfidx,p=(p+3)%6,3>p){for(l=0;l<r.length1;++l)s+=so[Zr[p][r.move[l]]],s+=" ";for(r.useSeparator&&(s.impl.string+=".",s),l=r.length1;l<r.sol;++l)s+=so[Zr[p][r.move[l]]],s+=" "}else{for(l=r.sol-1;l>=r.length1;--l)s+=so[Zr[p][r.move[l]]],s+=" ";for(r.useSeparator&&(s+="."),l=r.length1-1;l>=0;--l)s+=so[Zr[p][r.move[l]]],s+=" "}return r.solution=s,!0}return!1}function rr(r,o,n,e,t,f,i,a){var c,u,l,s,p,m;if(0===o&&0===e&&0===f&&5>i)return 0===i&&$(r);for(l=0;18>l;++l)if(to[a][l])l+=2;else if(s=Ur[f][l],m=zr[o][Jr[n][l]],p=Nr[7&m][n],m>>>=3,!(Dr[495*m+Pr[s][p]]>=i)&&(c=Ar[e][Jr[t][l]],u=Nr[7&c][t],c>>>=3,!(Sr[2688*m+(c<<3|Vr[u][p])]>=i||Cr[495*c+Pr[s][u]]>=i)&&(r.move[r.length1-i]=l,r.valid1=Math.min(r.valid1,r.length1-i),rr(r,m,p,c,u,s,i-1,l))))return!0;return!1}function or(r,o,n,e,t,f,i,a,c){var u,l,s,p,m,h;if(0===o&&0===e&&0===f)return!0;for(m=0;10>m;++m)if(!fo[c][m]&&(h=Ir[f][m],s=br[o][Wr[n][m]],p=jr[15&s][n],s>>>=4,!(Fr[24*s+Mr[h][p]]>=i)&&(u=gr[e][Or[t][vo[m]]],l=jr[15&u][t],u>>>=4,!(xr[24*u+Mr[h][l]]>=i)&&(r.move[a]=vo[m],or(r,s,p,u,l,h,i-1,a+1,m)))))return!0;return!1}function nr(r,o){var n,e;for(tr(),e=0;54>e;++e)switch(o.charCodeAt(e)){case 85:r.f[e]=0;break;case 82:r.f[e]=1;break;case 70:r.f[e]=2;break;case 68:r.f[e]=3;break;case 76:r.f[e]=4;break;case 66:r.f[e]=5;break;default:return"Error 1"}return n=mr(r.f),r.sol=22,Z(r,n)}function er(){this.move=Array(31),this.corn=Array(20),this.csym=Array(20),this.mid3=Array(20),this.e1=Array(20),this.e2=Array(20),this.twist=Array(6),this.tsym=Array(6),this.flip=Array(6),this.fsym=Array(6),this.slice_0=Array(6),this.corn0=Array(6),this.csym0=Array(6),this.mid30=Array(6),this.e10=Array(6),this.e20=Array(6),this.prun=Array(6),this.count=Array(6),this.f=Array(54)}function tr(r){yo||(ir(),r("[0/9] Initializing Cubie Cube..."),w(),ro=Array(2048),oo=Array(2187),$r=Array(40320),r("[1/9] Initializing Sym2Raw..."),Q(),r("[2/9] Initializing CoordCube..."),n(),r("[3/9] Initializing Perm, Flip, and Twist Moves..."),t(),f(),i(),m(),r("[4/9] Initializing UDSlice..."),$r=null,ro=null,oo=null,v(),h(),r("[5/9] Initializing Mid3Move..."),s(),l(),e(),r("[6/9] Initializing Perms..."),u(),c(),r("[7/9] Initializing TwistFlipSlicePrun..."),p(r),r("[8/9] Initializing MCEPermPrum..."),a(r),r("[9/9] Done initializing 3x3x3..."),yo=!0)}function fr(){var r,o;do o=scramblers.lib.randomInt.below(479001600),r=scramblers.lib.randomInt.below(40320);while(0!=(pr(r)^lr(o)));return hr(new G(r,scramblers.lib.randomInt.below(2187),o,scramblers.lib.randomInt.below(2048)))}function ir(){ir=r;var n,e;for(ao=[[8,9,20],[6,18,38],[0,36,47],[2,45,11],[29,26,15],[27,44,24],[33,53,42],[35,17,51]],uo=[[5,10],[7,19],[3,37],[1,46],[32,16],[28,25],[30,43],[34,52],[23,12],[21,41],[50,39],[48,14]],io=[[0,1,2],[0,2,4],[0,4,5],[0,5,1],[3,2,1],[3,4,2],[3,5,4],[3,1,5]],co=[[0,1],[0,2],[0,4],[0,5],[3,1],[3,2],[3,4],[3,5],[2,1],[2,4],[5,4],[5,1]],eo=o(12,12),lo=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600],so=["U ","U2","U'","R ","R2","R'","F ","F2","F'","D ","D2","D'","L ","L2","L'","B ","B2","B'"],vo=[0,1,2,4,7,9,10,11,13,16],ho=Array(18),to=o(19,18),fo=o(11,10),po=Array(24),mo=[[11,10,9],[10,11,9],[11,9,10],[9,11,10],[10,9,11],[9,10,11]],n=0;10>n;++n)ho[vo[n]]=n;for(n=0;18>n;++n){for(e=0;18>e;++e)to[n][e]=~~(n/3)===~~(e/3)||~~(n/3)%3===~~(e/3)%3&&n>=e;to[18][n]=!1}for(n=0;10>n;++n){for(e=0;10>e;++e)fo[n][e]=to[vo[n]][vo[e]];fo[10][n]=!1}for(n=0;12>n;++n)for(e=0;12>e;++e)eo[n][e]=0;for(n=0;12>n;++n)for(eo[n][0]=1,eo[n][n]=1,e=1;n>e;++e)eo[n][e]=eo[n-1][e-1]+eo[n-1][e];for(n=0;24>n;++n)po[n]=sr(n)}function ar(r,o){var n,e,t,f,i;if(e=r.length,o<=r[e-1])for(n=0,f=e-1;f>=n;)if(t=n+f>>>1,i=r[t],o>i)n=t+1;else{if(!(i>o))return t;f=t-1}return 65535}function cr(r){return r-=r>>>1&1431655765,r=(858993459&r)+(r>>>2&858993459),r+(r>>>8)+(r>>>4)&15}function ur(r){return r^=r>>>1,r^=r>>>2,r^=r>>>4,r^=r>>>8,1&r}function lr(r){var o,n;for(n=0,o=10;o>=0;--o)n+=r%(12-o),r=~~(r/(12-o));return n=1&n}function sr(r){var o,n;for(n=0,o=2;o>=0;--o)n+=r%(4-o),r=~~(r/(4-o));return n=1&n}function pr(r){var o,n;for(n=0,o=6;o>=0;--o)n+=r%(8-o),r=~~(r/(8-o));return n=1&n}function mr(r){var o,n,e,t,f,i;for(o=new N,t=0;8>t;++t)o.cp[t]=0;for(t=0;12>t;++t)o.ep[t]=0;for(t=0;8>t;++t){for(i=0;3>i&&(0!==r[ao[t][i]]&&3!==r[ao[t][i]]);++i);for(n=r[ao[t][(i+1)%3]],e=r[ao[t][(i+2)%3]],f=0;8>f;++f)if(n===io[f][1]&&e===io[f][2]){o.cp[t]=f,o.co[t]=i%3;break}}for(t=0;12>t;++t)for(f=0;12>f;++f){if(r[uo[t][0]]===co[f][0]&&r[uo[t][1]]===co[f][1]){o.ep[t]=f,o.eo[t]=0;break}if(r[uo[t][0]]===co[f][1]&&r[uo[t][1]]===co[f][0]){o.ep[t]=f,o.eo[t]=1;break}}return o}function hr(r){var o,n,e,t,f,i,a,c;for(e=Array(54),c=[85,82,70,68,76,66],t=0;54>t;++t)e[t]=c[~~(t/9)];for(o=0;8>o;++o)for(f=r.cp[o],a=r.co[o],i=0;3>i;++i)e[ao[o][(i+a)%3]]=c[io[f][i]];for(n=0;12>n;++n)for(f=r.ep[n],a=r.eo[n],i=0;2>i;++i)e[uo[n][(i+a)%2]]=c[co[f][i]];return String.fromCharCode.apply(null,e)}function vr(r){return"r"===r?"#FF0000":"o"===r?"#FF8000":"b"===r?"#0000FF":"g"===r?"#00FF00":"y"===r?"#FFFF00":"w"===r?"#FFFFFF":"x"===r?"#000000":void 0}function wr(r,o,n,e,t,f,i){for(var a=[e-f,e-f,e+f,e+f],c=[t-f,t+f,t+f,t-f],u="",l=0;l<a.length;l++){var s=Mo(o,n,[a[l],c[l]]);u+=(0===l?"M":"L")+s[0]+","+s[1]}u+="z",r.path(u).attr({fill:vr(i),stroke:"#000"})}var yr,dr,gr,br,Ar,xr,Fr,Mr,Ir,kr,Rr,Sr,zr,Pr,Cr,Ur,Dr;yr=O.prototype=G.prototype=N.prototype=Y.prototype,yr.temps=null;var Er,Lr,_r,Br,Tr,Jr,Nr,Vr,Gr,Or,Wr,jr,qr,Hr,Kr,Qr,Xr,Yr,Zr,$r=null,ro=null,oo=null,no=null;yr=er.prototype,yr.inverse=!1,yr.length1=0,yr.maxlength2=0,yr.sol=999,yr.solution=null,yr.urfidx=0,yr.useSeparator=!1,yr.valid1=0,yr.valid2=0;var eo,to,fo,io,ao,co,uo,lo,so,po,mo,ho,vo,wo,yo=!1,go=[[[0,1,2],[3,4,5],[6,7,8]],[[9,10,11],[12,13,14],[15,16,17]],[[18,19,20],[21,22,23],[24,25,26]],[[36,37,38],[39,40,41],[42,43,44]],[[45,46,47],[48,49,50],[51,52,53]],[[27,28,29],[30,31,32],[33,34,35]]],bo=2,Ao=12,xo=4,Fo=[[bo+Ao/2*9+1*xo,bo+Ao/2*3],[bo+Ao/2*15+2*xo,bo+Ao/2*9+1*xo],[bo+Ao/2*9+1*xo,bo+Ao/2*9+1*xo],[bo+Ao/2*3+0*xo,bo+Ao/2*9+1*xo],[bo+Ao/2*21+3*xo,bo+Ao/2*9+1*xo],[bo+Ao/2*9+1*xo,bo+Ao/2*15+2*xo]],Mo=function(r,o,n){var e=2*bo+12*Ao+3*xo,t=2*bo+9*Ao+2*xo,f=Math.min(r/e,o/t),i=Math.floor(n[0]*f+(r-e*f)/2)+.5,a=Math.floor(n[1]*f+(o-t*f)/2)+.5;return[i,a]},Io=function(r,o,n,e){for(var t="wrgoby",f={U:t[0],R:t[1],F:t[2],L:t[3],B:t[4],D:t[5]},i=Raphael(r,n,e),a=o+" URFLBD",c=0;6>c;c++)for(var u=0;3>u;u++)for(var l=0;3>l;l++){var s=a[go[c][u][l]];wr(i,n,e,Fo[c][0]+(l-1)*Ao,Fo[c][1]+(u-1)*Ao,Ao/2,f[s])}},ko=!1,Ro=function(r,o,n){"function"!=typeof n&&(n=function(){}),ko||(wo=new er,tr(n),ko=!0),r&&setTimeout(r,0)},So=function(){Ro();var r=fr(),o=nr(wo,r);return{state:r,scramble_string:o}};return{version:"July 05, 2015",initialize:Ro,setRandomSource:function(){console.log("setRandomSource is deprecated. It has no effect anymore.")},getRandomScramble:So,drawScramble:Io}}(),scramblers["333fm"]=scramblers[333],scramblers["333ft"]=scramblers[333],scramblers["333bf"]=scramblers[333],scramblers["333oh"]=scramblers[333],scramblers["333mbf"]=scramblers[333];
