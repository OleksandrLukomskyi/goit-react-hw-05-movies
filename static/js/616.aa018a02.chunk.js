"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[616],{616:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(861),a=t(439),i=t(757),s=t.n(i),c=t(791),o=t(689),u=t(87),l=t(643),p={container:"MovieDetails_container__yKjnD",block:"MovieDetails_block__34Ku0",backButton:"MovieDetails_backButton__0nbPy",poster:"MovieDetails_poster__s+oXh",genres:"MovieDetails_genres__wYpii",additionalInfo:"MovieDetails_additionalInfo__TgRub"},d=t(184),h=function(){var e=(0,o.UO)().movieId,n=(0,c.useState)(null),t=(0,a.Z)(n,2),i=t[0],h=t[1],f=(0,o.TH)().state,v=(0,o.s0)();(0,c.useEffect)((function(){var n=function(){var n=(0,r.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,l.dB)(e);case 3:t=n.sent,h(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();e&&n()}),[e]);return i&&(0,d.jsxs)("div",{className:p.container,children:[(0,d.jsx)("button",{onClick:function(){v(null!==f&&void 0!==f?f:"/")},className:p.backButton}),(0,d.jsxs)("div",{className:p.block,children:[(0,d.jsx)("div",{children:(0,d.jsx)("img",{src:i.poster_path?["https://image.tmdb.org/t/p/w600_and_h900_bestv2"+i.poster_path]:"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:"poster",className:p.poster})}),(0,d.jsxs)("div",{className:p.movieDetails,children:[(0,d.jsxs)("h2",{children:[i.original_title," (",i.release_date.split("-")[0],")"]}),(0,d.jsxs)("p",{children:["User score:",Math.round(10*i.vote_average),"%"]}),(0,d.jsx)("h3",{children:"Overview:"}),(0,d.jsx)("p",{children:i.overview}),(0,d.jsx)("h3",{children:"Genres"}),i.genres.map((function(e){return(0,d.jsx)("p",{className:p.genres,children:e.name})}))]})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{children:"Additional information:"}),(0,d.jsxs)("ul",{className:p.additionalInfo,children:[(0,d.jsx)("li",{children:(0,d.jsx)(u.rU,{to:"cast",state:f,children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(u.rU,{to:"reviews",state:f,children:"Reviews"})})]}),(0,d.jsx)(o.j3,{})]})]})}},643:function(e,n,t){t.d(n,{UO:function(){return p},dB:function(){return l},Oy:function(){return d},V0:function(){return u},Df:function(){return o}});var r=t(861),a=t(757),i=t.n(a),s=t(340).Z.create({baseURL:"https://api.themoviedb.org/3"}),c={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWJjYzk3NDRiYTQzN2UzMzRlNGY4ZWU0MzAwNTY0NiIsInN1YiI6IjY1YTA2NDA5MWZhMWM4MDEyMjZjZGUzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lH34rbPW40PPr32_DlywakU7hh55fJZgA_lqHibxe9E"}},o=function(){var e=(0,r.Z)(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s("/trending/movie/day?language=en-US",c);case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s("/search/movie?query=".concat(n,"&include_adult=false&language=en-US&page=1"),c);case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s("/movie/".concat(n,"?language=en-US"),c);case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s("/movie/".concat(n,"/credits?language=en-US"),c);case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s("/movie/".concat(n,"/reviews?language=en-US&page=1"),c);case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=616.aa018a02.chunk.js.map