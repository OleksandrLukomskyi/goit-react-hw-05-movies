"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[986],{986:function(e,n,r){r.r(n),r.d(n,{default:function(){return l}});var t=r(861),a=r(439),u=r(757),c=r.n(u),i=r(184),s=function(e){var n=e.cast;return n&&(0,i.jsxs)("li",{children:[(0,i.jsx)("img",{src:n.profile_path?"https://image.tmdb.org/t/p/w600_and_h900_bestv2"+n.profile_path:"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:"poster",style:{width:"20%"}}),(0,i.jsx)("p",{children:n.name}),(0,i.jsxs)("h3",{children:["Character:",n.character]})]})},o=r(791),p=r(689),f=r(643),l=function(){var e=(0,p.UO)().movieId,n=(0,o.useState)(null),r=(0,a.Z)(n,2),u=r[0],l=r[1];return(0,o.useEffect)((function(){var n=function(){var n=(0,t.Z)(c().mark((function n(){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,f.UO)(e);case 3:r=n.sent,l(r),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();e&&n()}),[e]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("ul",{children:u&&u.cast.map((function(e){return(0,i.jsx)(s,{cast:e},e.id)}))})})}},643:function(e,n,r){r.d(n,{UO:function(){return f},dB:function(){return p},Oy:function(){return l},V0:function(){return o},Df:function(){return s}});var t=r(861),a=r(757),u=r.n(a),c=r(340).Z.create({baseURL:"https://api.themoviedb.org/3"}),i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWJjYzk3NDRiYTQzN2UzMzRlNGY4ZWU0MzAwNTY0NiIsInN1YiI6IjY1YTA2NDA5MWZhMWM4MDEyMjZjZGUzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lH34rbPW40PPr32_DlywakU7hh55fJZgA_lqHibxe9E"}},s=function(){var e=(0,t.Z)(u().mark((function e(){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/trending/movie/day?language=en-US",i);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/search/movie?query=".concat(n,"&include_adult=false&language=en-US&page=1"),i);case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/movie/".concat(n,"?language=en-US"),i);case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/movie/".concat(n,"/credits?language=en-US"),i);case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/movie/".concat(n,"/reviews?language=en-US&page=1"),i);case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=986.3d0433ac.chunk.js.map