_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"/EDR":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("QeBL")}])},QeBL:function(t,e,n){"use strict";n.r(e);var s=n("q1tI"),r=n.n(s),i=n("YFqc"),a=n.n(i),o=n("4ier"),u=n("fneu"),c=n("l07G"),l=n("szSY"),h=r.a.createElement,d=function(){return h("div",{className:"scrollable-members"},c.a.map((function(t,e){return h(a.a,{key:"scrollable-member-".concat(e),href:Object(l.d)(t.id),passHref:!0},h("a",{className:"scrollable-member__link"},h("span",{className:"scrollable-member__image"},h("img",{src:t.avatarSrc,alt:t.name,className:"scrollable-member__img",width:80,height:80})),h("span",{className:"scrollable-member__name"},t.name),h("span",{className:"scrollable-member__role"},t.role)))})))},f=n("qhaX"),m=n("Mmls"),$=n("AAbX"),p=r.a.createElement;e.default=function(){return p(r.a.Fragment,null,p(m.a,{title:u.a.siteMeta.title,description:u.a.siteMeta.description,path:"/",removeSiteNameFromTitle:!0}),p("section",{className:"home-hero"},p($.a,null,p("h1",{className:"home-hero__title"},u.a.siteMeta.title),!!u.a.siteMeta.description&&p("p",{className:"home-hero__description"},u.a.siteMeta.description),p(a.a,{href:"/rss/feed.xml"},p("a",{className:"home-hero__feed-icon"},p("img",{src:"/icons/rss-fill.svg",alt:"rss",width:22,height:22}))))),p("section",{className:"home-members"},p($.a,null,p("div",{className:"home-section-title-container"},p("h2",{className:"home-section-title"},"Members"),p(a.a,{href:"/members"},p("a",{className:"home-section-link"},"See Details \u2192"))),p("div",{className:"home-members-container"},p($.b,null,p(d,null))))),p("section",{className:"home-posts"},p($.a,null,p("div",{className:"home-section-title-container"},p("h2",{className:"home-section-title"},"Articles")),p("div",{className:"home-posts-container"},p(f.a,{items:o})))))}},QgiU:function(t,e,n){t.exports=function(){"use strict";return function(t,e,n){t=t||{};var s=e.prototype,r={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};n.en.relativeTime=r;var i=function(e,s,i,a){for(var o,u,c,l=i.$locale().relativeTime||r,h=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],d=h.length,f=0;f<d;f+=1){var m=h[f];m.d&&(o=a?n(e).diff(i,m.d,!0):i.diff(e,m.d,!0));var $=(t.rounding||Math.round)(Math.abs(o));if(c=o>0,$<=m.r||!m.r){$<=1&&f>0&&(m=h[f-1]);var p=l[m.l];u="string"==typeof p?p.replace("%d",$):p($,s,m.l,c);break}}return s?u:(c?l.future:l.past).replace("%s",u)};s.to=function(t,e){return i(t,e,this,!0)},s.from=function(t,e){return i(t,e,this)};var a=function(t){return t.$u?n.utc():n()};s.toNow=function(t){return this.to(a(this),t)},s.fromNow=function(t){return this.from(a(this),t)}}}()},Wgwc:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",s="hour",r="day",i="week",a="month",o="quarter",u="year",c="date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,h=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f=function(t,e,n){var s=String(t);return!s||s.length>=e?t:""+Array(e+1-s.length).join(n)+t},m={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),s=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+f(s,2,"0")+":"+f(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var s=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(s,a),i=n-r<0,o=e.clone().add(s+(i?-1:1),a);return+(-(s+(n-r)/(i?r-o:o-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(l){return{M:a,y:u,w:i,d:r,D:c,h:s,m:n,s:e,ms:t,Q:o}[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",p={};p[$]=d;var v=function(t){return t instanceof y},_=function(t,e,n){var s;if(!t)return $;if("string"==typeof t)p[t]&&(s=t),e&&(p[t]=e,s=t);else{var r=t.name;p[r]=t,s=r}return!n&&s&&($=s),s||!n&&$},M=function(t,e){if(v(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new y(n)},g=m;g.l=_,g.i=v,g.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var y=function(){function d(t){this.$L=this.$L||_(t.locale,null,!0),this.parse(t)}var f=d.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var s=e.match(l);if(s){var r=s[2]-1||0,i=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],r,s[3]||1,s[4]||0,s[5]||0,s[6]||0,i)):new Date(s[1],r,s[3]||1,s[4]||0,s[5]||0,s[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return g},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return M(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<M(t)},f.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,o){var l=this,h=!!g.u(o)||o,d=g.p(t),f=function(t,e){var n=g.w(l.$u?Date.UTC(l.$y,e,t):new Date(l.$y,e,t),l);return h?n:n.endOf(r)},m=function(t,e){return g.w(l.toDate()[t].apply(l.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(e)),l)},$=this.$W,p=this.$M,v=this.$D,_="set"+(this.$u?"UTC":"");switch(d){case u:return h?f(1,0):f(31,11);case a:return h?f(1,p):f(0,p+1);case i:var M=this.$locale().weekStart||0,y=($<M?$+7:$)-M;return f(h?v-y:v+(6-y),p);case r:case c:return m(_+"Hours",0);case s:return m(_+"Minutes",1);case n:return m(_+"Seconds",2);case e:return m(_+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(i,o){var l,h=g.p(i),d="set"+(this.$u?"UTC":""),f=(l={},l[r]=d+"Date",l[c]=d+"Date",l[a]=d+"Month",l[u]=d+"FullYear",l[s]=d+"Hours",l[n]=d+"Minutes",l[e]=d+"Seconds",l[t]=d+"Milliseconds",l)[h],m=h===r?this.$D+(o-this.$W):o;if(h===a||h===u){var $=this.clone().set(c,1);$.$d[f](m),$.init(),this.$d=$.set(c,Math.min(this.$D,$.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[g.p(t)]()},f.add=function(t,o){var c,l=this;t=Number(t);var h=g.p(o),d=function(e){var n=M(l);return g.w(n.date(n.date()+Math.round(e*t)),l)};if(h===a)return this.set(a,this.$M+t);if(h===u)return this.set(u,this.$y+t);if(h===r)return d(1);if(h===i)return d(7);var f=(c={},c[n]=6e4,c[s]=36e5,c[e]=1e3,c)[h]||1,m=this.$d.getTime()+t*f;return g.w(m,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",s=g.z(this),r=this.$locale(),i=this.$H,a=this.$m,o=this.$M,u=r.weekdays,c=r.months,l=function(t,s,r,i){return t&&(t[s]||t(e,n))||r[s].substr(0,i)},d=function(t){return g.s(i%12||12,t,"0")},f=r.meridiem||function(t,e,n){var s=t<12?"AM":"PM";return n?s.toLowerCase():s},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:g.s(o+1,2,"0"),MMM:l(r.monthsShort,o,c,3),MMMM:l(c,o),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:l(r.weekdaysMin,this.$W,u,2),ddd:l(r.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(i),HH:g.s(i,2,"0"),h:d(1),hh:d(2),a:f(i,a,!0),A:f(i,a,!1),m:String(a),mm:g.s(a,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:s};return n.replace(h,(function(t,e){return e||m[t]||s.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,c,l){var h,d=g.p(c),f=M(t),m=6e4*(f.utcOffset()-this.utcOffset()),$=this-f,p=g.m(this,f);return p=(h={},h[u]=p/12,h[a]=p,h[o]=p/3,h[i]=($-m)/6048e5,h[r]=($-m)/864e5,h[s]=$/36e5,h[n]=$/6e4,h[e]=$/1e3,h)[d]||$,l?p:g.a(p)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return p[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),s=_(t,e,!0);return s&&(n.$L=s),n},f.clone=function(){return g.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},d}(),N=y.prototype;return M.prototype=N,[["$ms",t],["$s",e],["$m",n],["$H",s],["$W",r],["$M",a],["$y",u],["$D",c]].forEach((function(t){N[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t(e,y,M),M},M.locale=_,M.isDayjs=v,M.unix=function(t){return M(1e3*t)},M.en=p[$],M.Ls=p,M}()},qhaX:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var s=n("q1tI"),r=n.n(s),i=n("YFqc"),a=n.n(i),o=n("Wgwc"),u=n.n(o),c=n("QgiU"),l=n.n(c),h=n("szSY"),d=r.a.createElement;u.a.extend(l.a);var f=function(t){var e=t.item,n=e.authorId,s=e.title,r=e.isoDate,i=e.link,o=e.dateMiliSeconds,c=Object(h.c)(n);if(!c)return null;var l=Object(h.b)(i);return d("article",{className:"post-link"},d(a.a,{href:Object(h.d)(c.id),passHref:!0},d("a",{className:"post-link__author"},d("img",{src:c.avatarSrc,className:"post-link__author-img",width:35,height:35}),d("div",{className:"post-link__author-name"},d("div",{className:"post-link__author-name"},c.name),d("time",{dateTime:r,className:"post-link__date"},u()(r).fromNow())))),d("a",{href:i,className:"post-link__main-link",target:"_blank"},d("h2",{className:"post-link__title"},s),l&&d("div",{className:"post-link__site"},d("img",{src:Object(h.a)(l),width:14,height:14,className:"post-link__site-favicon"}),l)),o&&o>Date.now()-2592e5&&d("div",{className:"post-link__new-label"},"NEW"))},m=function(t){var e,n=Object(s.useState)(32),i=n[0],a=n[1],o=(null===(e=t.items)||void 0===e?void 0:e.length)||0,u=o-i>0;return o?d(r.a.Fragment,null,d("div",{className:"post-list"},t.items.slice(0,i).map((function(t,e){return d(f,{key:"post-item-".concat(e),item:t})}))),u&&d("div",{className:"post-list-load"},d("button",{onClick:function(){return a(i+32)},className:"post-list-load__button"},"LOAD MORE"))):d("div",{className:"post-list-empty"},"No posts yet")}}},[["/EDR",0,1,2,3,4]]]);