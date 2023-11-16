import{d as mt,r as Y,s as P,o as j,c as C,a as t,t as x,u as f,b as ft,e as X,w as L,v as tt,i as U,f as Mt,g as rt,h as ht,n as $t,j as gt,k as J,l as Dt,F as bt,m as Yt,p as Z}from"./index-284f5e84.js";var nt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _t(y){return y&&y.__esModule&&Object.prototype.hasOwnProperty.call(y,"default")?y.default:y}var wt={exports:{}};(function(y,m){(function(i,d){y.exports=d()})(nt,function(){var i=1e3,d=6e4,l=36e5,_="millisecond",r="second",a="minute",n="hour",c="day",O="week",h="month",$="quarter",A="year",V="date",q="Invalid Date",I=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,lt=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,dt={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(p){var o=["th","st","nd","rd"],e=p%100;return"["+p+(o[(e-20)%10]||o[e]||o[0])+"]"}},R=function(p,o,e){var u=String(p);return!u||u.length>=o?p:""+Array(o+1-u.length).join(e)+p},ut={s:R,z:function(p){var o=-p.utcOffset(),e=Math.abs(o),u=Math.floor(e/60),s=e%60;return(o<=0?"+":"-")+R(u,2,"0")+":"+R(s,2,"0")},m:function p(o,e){if(o.date()<e.date())return-p(e,o);var u=12*(e.year()-o.year())+(e.month()-o.month()),s=o.clone().add(u,h),v=e-s<0,M=o.clone().add(u+(v?-1:1),h);return+(-(u+(e-s)/(v?s-M:M-s))||0)},a:function(p){return p<0?Math.ceil(p)||0:Math.floor(p)},p:function(p){return{M:h,y:A,w:O,d:c,D:V,h:n,m:a,s:r,ms:_,Q:$}[p]||String(p||"").toLowerCase().replace(/s$/,"")},u:function(p){return p===void 0}},z="en",W={};W[z]=dt;var yt="$isDayjsObject",ct=function(p){return p instanceof ot||!(!p||!p[yt])},st=function p(o,e,u){var s;if(!o)return z;if(typeof o=="string"){var v=o.toLowerCase();W[v]&&(s=v),e&&(W[v]=e,s=v);var M=o.split("-");if(!s&&M.length>1)return p(M[0])}else{var D=o.name;W[D]=o,s=D}return!u&&s&&(z=s),s||!u&&z},k=function(p,o){if(ct(p))return p.clone();var e=typeof o=="object"?o:{};return e.date=p,e.args=arguments,new ot(e)},g=ut;g.l=st,g.i=ct,g.w=function(p,o){return k(p,{locale:o.$L,utc:o.$u,x:o.$x,$offset:o.$offset})};var ot=function(){function p(e){this.$L=st(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[yt]=!0}var o=p.prototype;return o.parse=function(e){this.$d=function(u){var s=u.date,v=u.utc;if(s===null)return new Date(NaN);if(g.u(s))return new Date;if(s instanceof Date)return new Date(s);if(typeof s=="string"&&!/Z$/i.test(s)){var M=s.match(I);if(M){var D=M[2]-1||0,w=(M[7]||"0").substring(0,3);return v?new Date(Date.UTC(M[1],D,M[3]||1,M[4]||0,M[5]||0,M[6]||0,w)):new Date(M[1],D,M[3]||1,M[4]||0,M[5]||0,M[6]||0,w)}}return new Date(s)}(e),this.init()},o.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},o.$utils=function(){return g},o.isValid=function(){return this.$d.toString()!==q},o.isSame=function(e,u){var s=k(e);return this.startOf(u)<=s&&s<=this.endOf(u)},o.isAfter=function(e,u){return k(e)<this.startOf(u)},o.isBefore=function(e,u){return this.endOf(u)<k(e)},o.$g=function(e,u,s){return g.u(e)?this[u]:this.set(s,e)},o.unix=function(){return Math.floor(this.valueOf()/1e3)},o.valueOf=function(){return this.$d.getTime()},o.startOf=function(e,u){var s=this,v=!!g.u(u)||u,M=g.p(e),D=function(B,T){var F=g.w(s.$u?Date.UTC(s.$y,T,B):new Date(s.$y,T,B),s);return v?F:F.endOf(c)},w=function(B,T){return g.w(s.toDate()[B].apply(s.toDate("s"),(v?[0,0,0,0]:[23,59,59,999]).slice(T)),s)},S=this.$W,H=this.$M,N=this.$D,G="set"+(this.$u?"UTC":"");switch(M){case A:return v?D(1,0):D(31,11);case h:return v?D(1,H):D(0,H+1);case O:var E=this.$locale().weekStart||0,Q=(S<E?S+7:S)-E;return D(v?N-Q:N+(6-Q),H);case c:case V:return w(G+"Hours",0);case n:return w(G+"Minutes",1);case a:return w(G+"Seconds",2);case r:return w(G+"Milliseconds",3);default:return this.clone()}},o.endOf=function(e){return this.startOf(e,!1)},o.$set=function(e,u){var s,v=g.p(e),M="set"+(this.$u?"UTC":""),D=(s={},s[c]=M+"Date",s[V]=M+"Date",s[h]=M+"Month",s[A]=M+"FullYear",s[n]=M+"Hours",s[a]=M+"Minutes",s[r]=M+"Seconds",s[_]=M+"Milliseconds",s)[v],w=v===c?this.$D+(u-this.$W):u;if(v===h||v===A){var S=this.clone().set(V,1);S.$d[D](w),S.init(),this.$d=S.set(V,Math.min(this.$D,S.daysInMonth())).$d}else D&&this.$d[D](w);return this.init(),this},o.set=function(e,u){return this.clone().$set(e,u)},o.get=function(e){return this[g.p(e)]()},o.add=function(e,u){var s,v=this;e=Number(e);var M=g.p(u),D=function(H){var N=k(v);return g.w(N.date(N.date()+Math.round(H*e)),v)};if(M===h)return this.set(h,this.$M+e);if(M===A)return this.set(A,this.$y+e);if(M===c)return D(1);if(M===O)return D(7);var w=(s={},s[a]=d,s[n]=l,s[r]=i,s)[M]||1,S=this.$d.getTime()+e*w;return g.w(S,this)},o.subtract=function(e,u){return this.add(-1*e,u)},o.format=function(e){var u=this,s=this.$locale();if(!this.isValid())return s.invalidDate||q;var v=e||"YYYY-MM-DDTHH:mm:ssZ",M=g.z(this),D=this.$H,w=this.$m,S=this.$M,H=s.weekdays,N=s.months,G=s.meridiem,E=function(T,F,K,at){return T&&(T[F]||T(u,v))||K[F].slice(0,at)},Q=function(T){return g.s(D%12||12,T,"0")},B=G||function(T,F,K){var at=T<12?"AM":"PM";return K?at.toLowerCase():at};return v.replace(lt,function(T,F){return F||function(K){switch(K){case"YY":return String(u.$y).slice(-2);case"YYYY":return g.s(u.$y,4,"0");case"M":return S+1;case"MM":return g.s(S+1,2,"0");case"MMM":return E(s.monthsShort,S,N,3);case"MMMM":return E(N,S);case"D":return u.$D;case"DD":return g.s(u.$D,2,"0");case"d":return String(u.$W);case"dd":return E(s.weekdaysMin,u.$W,H,2);case"ddd":return E(s.weekdaysShort,u.$W,H,3);case"dddd":return H[u.$W];case"H":return String(D);case"HH":return g.s(D,2,"0");case"h":return Q(1);case"hh":return Q(2);case"a":return B(D,w,!0);case"A":return B(D,w,!1);case"m":return String(w);case"mm":return g.s(w,2,"0");case"s":return String(u.$s);case"ss":return g.s(u.$s,2,"0");case"SSS":return g.s(u.$ms,3,"0");case"Z":return M}return null}(T)||M.replace(":","")})},o.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},o.diff=function(e,u,s){var v,M=this,D=g.p(u),w=k(e),S=(w.utcOffset()-this.utcOffset())*d,H=this-w,N=function(){return g.m(M,w)};switch(D){case A:v=N()/12;break;case h:v=N();break;case $:v=N()/3;break;case O:v=(H-S)/6048e5;break;case c:v=(H-S)/864e5;break;case n:v=H/l;break;case a:v=H/d;break;case r:v=H/i;break;default:v=H}return s?v:g.a(v)},o.daysInMonth=function(){return this.endOf(h).$D},o.$locale=function(){return W[this.$L]},o.locale=function(e,u){if(!e)return this.$L;var s=this.clone(),v=st(e,u,!0);return v&&(s.$L=v),s},o.clone=function(){return g.w(this.$d,this)},o.toDate=function(){return new Date(this.valueOf())},o.toJSON=function(){return this.isValid()?this.toISOString():null},o.toISOString=function(){return this.$d.toISOString()},o.toString=function(){return this.$d.toUTCString()},p}(),vt=ot.prototype;return k.prototype=vt,[["$ms",_],["$s",r],["$m",a],["$H",n],["$W",c],["$M",h],["$y",A],["$D",V]].forEach(function(p){vt[p[1]]=function(o){return this.$g(o,p[0],p[1])}}),k.extend=function(p,o){return p.$i||(p(o,ot,k),p.$i=!0),k},k.locale=st,k.isDayjs=ct,k.unix=function(p){return k(1e3*p)},k.en=W[z],k.Ls=W,k.p={},k})})(wt);var pt=wt.exports;const b=_t(pt),xt=mt("demo1Store",()=>{const y=Y(""),m=Y(""),i=Y(""),d=Y(""),l=Y("");function _(){b.weekdays&&b.weekdaysShort&&b.weekdaysMin&&b.monthsShort&&b.months&&(y.value=b.weekdays(),m.value=b.weekdaysShort(),i.value=b.weekdaysMin(),d.value=b.monthsShort(),l.value=b.months())}return{weekdays:y,weekdaysShort:m,weekdaysMin:i,monthsShort:d,months:l,列出該語系的月份和週:_}}),Ht={class:"bg-gainsboro mb-3 p-10"},Ot=t("h2",{class:"text-20 mb-3"},"1. 列出該語系的月份、週",-1),Tt={class:"bg-whitesmoke mb-3 p-3"},Lt=t("h3",{class:"text-18 fw-bold-7 mb-1"},"dayjs.weekdays",-1),Ut={class:"p-2"},At={class:"bg-whitesmoke mb-3 p-3"},Nt=t("h3",{class:"text-18 fw-bold-7 mb-1"},"dayjs.weekdaysShort",-1),jt={class:"p-2"},Ct={class:"bg-whitesmoke mb-3 p-3"},Vt=t("h3",{class:"text-18 fw-bold-7 mb-1"},"dayjs.weekdaysMin",-1),Wt={class:"p-2"},zt={class:"bg-whitesmoke mb-3 p-3"},Ft=t("h3",{class:"text-18 fw-bold-7 mb-1"},"dayjs.monthsShort",-1),It={class:"p-2"},Rt={class:"bg-whitesmoke mb-3 p-3"},Et=t("h3",{class:"text-18 fw-bold-7 mb-1"},"dayjs.months",-1),Bt={class:"p-2"},Jt={__name:"Demo1列出該語系的月份和週",setup(y){const{weekdays:m,weekdaysShort:i,weekdaysMin:d,monthsShort:l,months:_}=P(xt());return(r,a)=>(j(),C("section",Ht,[Ot,t("div",Tt,[Lt,t("p",Ut,x(f(m)),1)]),t("div",At,[Nt,t("p",jt,x(f(i)),1)]),t("div",Ct,[Vt,t("p",Wt,x(f(d)),1)]),t("div",zt,[Ft,t("p",It,x(f(l)),1)]),t("div",Rt,[Et,t("p",Bt,x(f(_)),1)])]))}};var kt={exports:{}};(function(y,m){(function(i,d){y.exports=d()})(nt,function(){return function(i,d,l){var _=function(r,a){if(!a||!a.length||a.length===1&&!a[0]||a.length===1&&Array.isArray(a[0])&&!a[0].length)return null;var n;a.length===1&&a[0].length>0&&(a=a[0]),n=(a=a.filter(function(O){return O}))[0];for(var c=1;c<a.length;c+=1)a[c].isValid()&&!a[c][r](n)||(n=a[c]);return n};l.max=function(){var r=[].slice.call(arguments,0);return _("isAfter",r)},l.min=function(){var r=[].slice.call(arguments,0);return _("isBefore",r)}}})})(kt);var Zt=kt.exports;const Pt=_t(Zt);function qt(){const y=Y("2023-01-01"),m=Y("2023/03/15"),i=Y("2023.05.20"),d=Y(""),l=Y("");b.extend(Pt),ft(()=>{_()});function _(){const r=b(y.value),a=b(m.value),n=b(i.value),c=b.min(r,a,n),O=b.max(r,a,n);isNaN(c.$D)||(l.value=O.format("YYYY-MM-DD")),isNaN(O.$D)||(d.value=c.format("YYYY-MM-DD"))}return{date1:y,date2:m,date3:i,minDate:d,maxDate:l,比較日期的大小:_}}const Gt={class:"bg-gainsboro mb-3 p-10"},Qt=t("h2",{class:"text-20 mb-3"},"2. 比較日期的大小",-1),Kt={class:"bg-whitesmoke p-3"},Xt={class:"d-flex align-items-center mt-3"},te={for:"demo2Date1"},ee={for:"demo2Date2",class:"mx-5"},ne={for:"demo2Date3"},se={__name:"Demo2比較日期的大小",setup(y){const{date1:m,date2:i,date3:d,minDate:l,maxDate:_,比較日期的大小:r}=qt();return(a,n)=>(j(),C("section",Gt,[Qt,t("div",null,[t("div",Kt,[t("p",null,"最大的日期為： "+x(f(_)),1),t("p",null,"最小的日期為： "+x(f(l)),1)]),t("div",Xt,[t("label",te,[X(" (一) 請輸入日期 "),L(t("input",{type:"text",id:"demo2Date1",class:"form-control",placeholder:"日期格式 YYYY/MM/DD","onUpdate:modelValue":n[0]||(n[0]=c=>U(m)?m.value=c:null),onInput:n[1]||(n[1]=(...c)=>f(r)&&f(r)(...c))},null,544),[[tt,f(m)]])]),t("label",ee,[X(" (二) 請輸入日期 "),L(t("input",{type:"text",id:"demo2Date2",class:"form-control",placeholder:"日期格式 YYYY/MM/DD","onUpdate:modelValue":n[2]||(n[2]=c=>U(i)?i.value=c:null),onInput:n[3]||(n[3]=(...c)=>f(r)&&f(r)(...c))},null,544),[[tt,f(i)]])]),t("label",ne,[X(" (三) 請輸入日期 "),L(t("input",{type:"text",id:"demo2Date3",class:"form-control",placeholder:"日期格式 YYYY/MM/DD","onUpdate:modelValue":n[4]||(n[4]=c=>U(d)?d.value=c:null),onInput:n[5]||(n[5]=(...c)=>f(r)&&f(r)(...c))},null,544),[[tt,f(d)]])])])])]))}},it=mt("todayStore",()=>{const y=Y(b()),m=Y("todayAdd"),i=Y(1),d=Y("day"),l=Y(""),_=Mt({day:{cn:"天",en:"day"},week:{cn:"週",en:"week"},month:{cn:"月",en:"month"},year:{cn:"年",en:"year"},hour:{cn:"小時",en:"hour"},minute:{cn:"分鐘",en:"minute"},second:{cn:"秒",en:"second"},millisecond:{cn:"毫秒",en:"millisecond"}}),r=rt(()=>m.value==="todayAdd"),a=rt(()=>_[d.value].cn);function n(){const c=r.value?"add":"subtract",O=b(y.value)[c](i.value,d.value).format("YYYY-MM-DD hh:mm:ss A");l.value=O}return{today:y,todayDateOperationMode:m,todayModificationNum:i,todayMdificationUnit:d,todayResult:l,isTodayAddMode:r,todayUnitCn:a,unitSelectionData:_,todayDateComputed:n}});function oe(){const{todayModificationNum:y,todayMdificationUnit:m}=P(it()),{todayDateComputed:i}=it();return ht(()=>{y.value!==""&&m.value&&i()}),ft(()=>{i()}),{}}const ae={class:"d-flex align-items-center"},re={class:"d-flex align-items-center"},ie={class:"text-gray border-bottom border-dark px-3"},le={class:"text-gray border-bottom border-dark px-3"},de=t("span",{class:"text-gray mx-3"},"=",-1),ue={class:"text-gray border-bottom border-dark px-3"},ce={__name:"TodayComputed",setup(y){const{today:m,todayModificationNum:i,isTodayAddMode:d,todayUnitCn:l,todayResult:_}=P(it());return oe(),(r,a)=>(j(),C("div",ae,[t("div",re,[t("span",ie,x(f(m).format("YYYY-MM-DD HH:mm:ss A")),1),t("span",{class:$t(["text-20 fw-bold-9 mx-3",f(d)?"text-success":"text-danger"]),style:gt(!f(d)&&"padding:0 2.25px;")},x(f(d)?"+":"-"),7),t("span",le,x(f(i))+" "+x(f(l)),1),de,t("span",ue,x(f(_)),1)])]))}},me={class:"bg-whitesmoke me-auto p-7 mb-10",style:{width:"100%"}},fe=t("p",{class:"text-18 text-center fw-bold-7 mb-5"},"今天日期",-1),he={for:"todayReadonly",class:"d-flex align-items-center mb-3"},_e=["value"],pe={class:"d-flex align-items-center py-5"},ye={class:"d-flex align-items-center"},ve={class:"me-5"},Me=t("label",{class:"form-check-label ps-2",for:"todayAdd"}," 增加 ",-1),$e={class:"my-2"},ge=t("label",{class:"form-check-label ps-2",for:"todaySubtract"}," 減少 ",-1),De={for:"todayModificationNum",class:"d-flex align-items-center me-2"},be={class:"d-flex align-items-center"},Ye=t("label",{for:"targetUnitSetup"},null,-1),we=["value"],xe={__name:"Today",setup(y){const{today:m,todayDateOperationMode:i,todayModificationNum:d,todayMdificationUnit:l,unitSelectionData:_}=P(it());return(r,a)=>(j(),C("div",me,[fe,t("label",he,[X(" 今天日期 "),t("input",{type:"text",class:"form-control w-75 ms-3",id:"todayReadonly",value:f(m).format("YYYY-MM-DD HH:mm:ss A"),readonly:""},null,8,_e)]),t("div",pe,[t("div",ye,[t("div",ve,[L(t("input",{class:"form-check-input",type:"radio",value:"todayAdd",id:"todayAdd",name:"todayDateOperationMode","onUpdate:modelValue":a[0]||(a[0]=n=>U(i)?i.value=n:null)},null,512),[[J,f(i)]]),Me]),t("div",$e,[L(t("input",{class:"form-check-input",type:"radio",value:"todaySubtract",id:"todaySubtract",name:"todayDateOperationMode","onUpdate:modelValue":a[1]||(a[1]=n=>U(i)?i.value=n:null)},null,512),[[J,f(i)]]),ge])]),t("label",De,[L(t("input",{type:"number",class:"form-control text-center ms-3",id:"todayModificationNum","onUpdate:modelValue":a[2]||(a[2]=n=>U(d)?d.value=n:null),style:{width:"100px",padding:"4.5px 0"}},null,512),[[tt,f(d),void 0,{number:!0}]])]),t("div",be,[Ye,L(t("select",{class:"form-select","onUpdate:modelValue":a[3]||(a[3]=n=>U(l)?l.value=n:null),id:"targetUnitSetup"},[(j(!0),C(bt,null,Yt(f(_),n=>(j(),C("option",{key:n,value:n.en},x(n.cn),9,we))),128))],512),[[Dt,f(l)]])])]),Z(ce)]))}},et=mt("targetStore",()=>{const y=Y(b("2023-11-20 21:33:26")),m=Y("targetAdd"),i=Y(1),d=Y("day"),l=Y(""),_=Y(!1),r=Mt({day:{cn:"天",en:"day"},week:{cn:"週",en:"week"},month:{cn:"月",en:"month"},year:{cn:"年",en:"year"},hour:{cn:"小時",en:"hour"},minute:{cn:"分鐘",en:"minute"},second:{cn:"秒",en:"second"},millisecond:{cn:"毫秒",en:"millisecond"}}),a=rt(()=>m.value==="targetAdd"),n=rt(()=>r[d.value].cn);function c(){const h=a.value?"add":"subtract",$=b(y.value)[h](i.value,d.value).format("YYYY-MM-DD hh:mm:ss A");l.value=$}function O(h){const $=b(h.target.value);isNaN($.$D)?_.value=!0:(_.value=!1,y.value=$,console.log("賦予直",y.value))}return{targetDate:y,targetDateOperationMode:m,targetModificationNum:i,targetMdificationUnit:d,targetResult:l,isTargetAddMode:a,targetUnitCn:n,unitSelectionData:r,isErrorMessageShow:_,targetDateComputed:c,updateDate:O}});function ke(){const{targetModificationNum:y,targetMdificationUnit:m}=P(et()),{targetDateComputed:i}=et();return ht(()=>{y.value!==""&&m.value&&i()}),ft(()=>{i()}),{}}const Se={class:"d-flex align-items-center"},He={class:"d-flex align-items-center"},Oe={class:"text-gray border-bottom border-dark px-3"},Te={class:"text-gray border-bottom border-dark px-3"},Le=t("span",{class:"text-gray mx-5"},"=",-1),Ue={class:"text-gray border-bottom border-dark px-3"},Ae={__name:"TargetComputed",setup(y){const{targetDate:m,targetModificationNum:i,isTargetAddMode:d,targetUnitCn:l,targetResult:_}=P(et());return ke(),(r,a)=>(j(),C("div",Se,[t("div",He,[t("span",Oe,x(f(m).format("YYYY-MM-DD HH:mm:ss A")),1),t("span",{class:$t(["text-20 fw-bold-9 mx-5",f(d)?"text-success":"text-danger"]),style:gt(!f(d)&&"padding:0 2.25px;")},x(f(d)?"+":"-"),7),t("span",Te,x(f(i))+" "+x(f(l)),1),Le,t("span",Ue,x(f(_)),1)])]))}},Ne={class:"bg-whitesmoke ms-5 p-7 mb-10",style:{width:"100%"}},je=t("p",{class:"text-18 text-center fw-bold-7 mb-5"},"指定日期",-1),Ce={for:"setTargetDate",class:"d-flex align-items-center mb-3"},Ve=["value"],We={class:"d-flex align-items-center py-5"},ze={class:"d-flex align-items-center"},Fe={class:"me-5"},Ie=t("label",{class:"form-check-label ps-2",for:"targetAdd"}," 增加 ",-1),Re={class:"my-2"},Ee=t("label",{class:"form-check-label ps-2",for:"targetSubtract"}," 減少 ",-1),Be={for:"targetModificationNum",class:"d-flex align-items-center me-2"},Je={class:"d-flex align-items-center"},Ze=["value"],Pe={__name:"Target",setup(y){const{targetDate:m,targetDateOperationMode:i,targetModificationNum:d,targetMdificationUnit:l,unitSelectionData:_}=P(et()),{updateDate:r}=et();return(a,n)=>(j(),C("div",Ne,[je,t("label",Ce,[X(" 指定日期 "),t("input",{type:"text",class:"form-control w-75 ms-3",id:"setTargetDate",placeholder:"輸入日期格式 yyyy/mm/dd hh:mm:ss",value:f(m).format("YYYY-MM-DD HH:mm:ss"),onChange:n[0]||(n[0]=(...c)=>f(r)&&f(r)(...c))},null,40,Ve)]),t("div",We,[t("div",ze,[t("div",Fe,[L(t("input",{class:"form-check-input",type:"radio",value:"targetAdd",id:"targetAdd",name:"targetDateOperationMode","onUpdate:modelValue":n[1]||(n[1]=c=>U(i)?i.value=c:null)},null,512),[[J,f(i)]]),Ie]),t("div",Re,[L(t("input",{class:"form-check-input",type:"radio",value:"targetSubtract",id:"targetSubtract",name:"targetDateOperationMode","onUpdate:modelValue":n[2]||(n[2]=c=>U(i)?i.value=c:null)},null,512),[[J,f(i)]]),Ee])]),t("label",Be,[L(t("input",{type:"number",class:"form-control text-center ms-3",id:"targetModificationNum","onUpdate:modelValue":n[3]||(n[3]=c=>U(d)?d.value=c:null),style:{width:"100px",padding:"4.5px 0"}},null,512),[[tt,f(d),void 0,{number:!0}]])]),t("div",Je,[L(t("select",{class:"form-select","onUpdate:modelValue":n[4]||(n[4]=c=>U(l)?l.value=c:null),id:"targetUnitSetup"},[(j(!0),C(bt,null,Yt(f(_),c=>(j(),C("option",{key:c,value:c.en},x(c.cn),9,Ze))),128))],512),[[Dt,f(l)]])])]),Z(Ae)]))}},qe={class:"bg-gainsboro mb-3 p-10 pb-5"},Ge=t("h2",{class:"text-20 mb-3"},"3. 日期加減",-1),Qe={class:"d-flex align-items-center"},Ke={__name:"Demo3日期加減",setup(y){return(m,i)=>(j(),C("section",qe,[Ge,t("div",Qe,[Z(xe),Z(Pe)])]))}};var Xe={exports:{}};(function(y,m){(function(i,d){y.exports=d(pt)})(nt,function(i){function d(r){return r&&typeof r=="object"&&"default"in r?r:{default:r}}var l=d(i),_={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(r,a){return a==="W"?r+"周":r+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(r,a){var n=100*r+a;return n<600?"凌晨":n<900?"早上":n<1100?"上午":n<1300?"中午":n<1800?"下午":"晚上"}};return l.default.locale(_,null,!0),_})})(Xe);var tn={exports:{}};(function(y,m){(function(i,d){y.exports=d(pt)})(nt,function(i){function d(r){return r&&typeof r=="object"&&"default"in r?r:{default:r}}var l=d(i),_={name:"ja",weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(r){return r+"日"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日 dddd HH:mm",l:"YYYY/MM/DD",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日(ddd) HH:mm"},meridiem:function(r){return r<12?"午前":"午後"},relativeTime:{future:"%s後",past:"%s前",s:"数秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}};return l.default.locale(_,null,!0),_})})(tn);var St={exports:{}};(function(y,m){(function(i,d){y.exports=d()})(nt,function(){return function(i,d,l){var _=d.prototype,r=function(h){return h&&(h.indexOf?h:h.s)},a=function(h,$,A,V,q){var I=h.name?h:h.$locale(),lt=r(I[$]),dt=r(I[A]),R=lt||dt.map(function(z){return z.slice(0,V)});if(!q)return R;var ut=I.weekStart;return R.map(function(z,W){return R[(W+(ut||0))%7]})},n=function(){return l.Ls[l.locale()]},c=function(h,$){return h.formats[$]||function(A){return A.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(V,q,I){return q||I.slice(1)})}(h.formats[$.toUpperCase()])},O=function(){var h=this;return{months:function($){return $?$.format("MMMM"):a(h,"months")},monthsShort:function($){return $?$.format("MMM"):a(h,"monthsShort","months",3)},firstDayOfWeek:function(){return h.$locale().weekStart||0},weekdays:function($){return $?$.format("dddd"):a(h,"weekdays")},weekdaysMin:function($){return $?$.format("dd"):a(h,"weekdaysMin","weekdays",2)},weekdaysShort:function($){return $?$.format("ddd"):a(h,"weekdaysShort","weekdays",3)},longDateFormat:function($){return c(h.$locale(),$)},meridiem:this.$locale().meridiem,ordinal:this.$locale().ordinal}};_.localeData=function(){return O.bind(this)()},l.localeData=function(){var h=n();return{firstDayOfWeek:function(){return h.weekStart||0},weekdays:function(){return l.weekdays()},weekdaysShort:function(){return l.weekdaysShort()},weekdaysMin:function(){return l.weekdaysMin()},months:function(){return l.months()},monthsShort:function(){return l.monthsShort()},longDateFormat:function($){return c(h,$)},meridiem:h.meridiem,ordinal:h.ordinal}},l.months=function(){return a(n(),"months")},l.monthsShort=function(){return a(n(),"monthsShort","months",3)},l.weekdays=function(h){return a(n(),"weekdays",null,null,h)},l.weekdaysShort=function(h){return a(n(),"weekdaysShort","weekdays",3,h)},l.weekdaysMin=function(h){return a(n(),"weekdaysMin","weekdays",2,h)}}})})(St);var en=St.exports;const nn=_t(en);function sn(){const{列出該語系的月份和週:y}=xt();b.extend(nn),b().localeData();const m=Y("zh-cn");return ht(()=>{b.locale(m.value),console.log("當前的語系為：",b.locale()),y()}),{lang:m}}const on={class:"container py-10"},an={class:"bg-gainsboro mb-3 p-10"},rn=t("h2",{class:"text-20 my-5"},"設定語系",-1),ln={class:"d-flex align-items-center bg-whitesmoke p-3"},dn=t("label",{class:"form-check-label ps-2",for:"zh-cn"}," 中文 ",-1),un={class:"mx-4"},cn=t("label",{class:"form-check-label ps-2",for:"en"}," 英文 ",-1),mn=t("label",{class:"form-check-label ps-2",for:"ja"}," 日文 ",-1),hn={__name:"HomeView",setup(y){const{lang:m}=sn(),i=b();return console.log("dayjs()",i),(d,l)=>(j(),C("div",on,[t("header",an,[rn,t("div",ln,[t("div",null,[L(t("input",{class:"form-check-input",type:"radio",value:"zh-cn",id:"zh-cn",name:"i18n","onUpdate:modelValue":l[0]||(l[0]=_=>U(m)?m.value=_:null)},null,512),[[J,f(m)]]),dn]),t("div",un,[L(t("input",{class:"form-check-input",type:"radio",value:"en",id:"en",name:"i18n","onUpdate:modelValue":l[1]||(l[1]=_=>U(m)?m.value=_:null)},null,512),[[J,f(m)]]),cn]),t("div",null,[L(t("input",{class:"form-check-input",type:"radio",value:"ja",id:"ja",name:"i18n","onUpdate:modelValue":l[2]||(l[2]=_=>U(m)?m.value=_:null)},null,512),[[J,f(m)]]),mn])])]),t("main",null,[Z(Jt),Z(se),Z(Ke)])]))}};export{hn as default};