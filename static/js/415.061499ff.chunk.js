"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{448:function(n,e,r){r.d(e,{Z:function(){return i}});r(791);var t=r(689),a=r(87),u=r(184),c=function(n){var e=n.result,r=(0,t.TH)();return(0,u.jsx)(a.rU,{to:"/"===r.pathname?"movies/".concat(e.id):"".concat(e.id),state:r,children:(0,u.jsx)("li",{children:e.title})})},i=function(n){var e=n.movies;return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("ul",{children:e.results&&e.results.map((function(n){return(0,u.jsx)(c,{result:n},n.id)}))})})}},415:function(n,e,r){r.r(e);var t=r(861),a=r(439),u=r(757),c=r.n(u),i=r(448),s=r(791),o=r(643),f=r(184);e.default=function(){var n=(0,s.useState)(null),e=(0,a.Z)(n,2),r=e[0],u=e[1];return(0,s.useEffect)((function(){var n=function(){var n=(0,t.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.Df)();case 3:e=n.sent,u(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();!r&&n()}),[r]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h1",{children:"Trending today"}),r&&(0,f.jsx)(i.Z,{movies:r})]})}},643:function(n,e,r){r.d(e,{UO:function(){return p},dB:function(){return f},Oy:function(){return l},V0:function(){return o},Df:function(){return s}});var t=r(861),a=r(757),u=r.n(a),c=r(340).Z.create({baseURL:"https://api.themoviedb.org/3"}),i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWJjYzk3NDRiYTQzN2UzMzRlNGY4ZWU0MzAwNTY0NiIsInN1YiI6IjY1YTA2NDA5MWZhMWM4MDEyMjZjZGUzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lH34rbPW40PPr32_DlywakU7hh55fJZgA_lqHibxe9E"}},s=function(){var n=(0,t.Z)(u().mark((function n(){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c("/trending/movie/day?language=en-US",i);case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,t.Z)(u().mark((function n(e){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c("/search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=1"),i);case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(u().mark((function n(e){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c("/movie/".concat(e,"?language=en-US"),i);case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(u().mark((function n(e){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c("/movie/".concat(e,"/credits?language=en-US"),i);case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(u().mark((function n(e){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c("/movie/".concat(e,"/reviews?language=en-US&page=1"),i);case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.061499ff.chunk.js.map