(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(5),c=a(9),l=a(8),s=a(0),o=a.n(s),i=a(6),u=a.n(i),m=(a(15),a(1)),p=a.n(m),d=a(7),v=a(2);function E(e){var t=e.movie;return o.a.createElement("div",{className:"card"},o.a.createElement("h3",{className:"card--title"},t.title),o.a.createElement("img",{className:"card--image",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(t.poster_path),alt:t.title+" poster"}),o.a.createElement("div",{className:"card--content"},o.a.createElement("p",null,o.a.createElement("small",null,"RELEASE DATE: ",t.release_date)),o.a.createElement("p",null,o.a.createElement("small",null,"RATING: ",t.vote_average)),o.a.createElement("p",{className:"card--desc"},t.overview),o.a.createElement("button",{className:"add",onClick:function(e){e.preventDefault(),console.log("adding to like page");var a=t;console.log(a)}}," Like ")))}function b(){var e=Object(s.useState)(""),t=Object(v.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)([]),c=Object(v.a)(r,2),l=c[0],i=c[1],u=function(){var e=Object(d.a)(p.a.mark((function e(t){var n,r,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n="https://api.themoviedb.org/3/search/movie?api_key=14202c1bfdc2e4b00798b1890506898d&language=en-US&query=".concat(a,"&page=1&include_adult=false"),e.prev=2,e.next=5,fetch(n);case 5:return r=e.sent,e.next=8,r.json();case 8:c=e.sent,console.log(c.results),i(c.results),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.log("Error in loading api");case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}();return o.a.createElement("div",null,o.a.createElement("form",{className:"form",onSubmit:u},o.a.createElement("label",{className:"label",htmlFor:"query"},"Movie Name"),o.a.createElement("input",{className:"input",type:"text",name:"query",placeholder:"i.e. The Shawshank",onChange:function(e){return n(e.target.value)},required:!0}),o.a.createElement("button",{className:"button",type:"submit"},"Search")),o.a.createElement("div",{className:"card-list"},l.filter((function(e){return e.poster_path})).map((function(e){return o.a.createElement(E,{movie:e,key:e.id})}))))}var f=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"title"},"Movie App"),o.a.createElement(b,null))}}]),a}(o.a.Component);u.a.render(o.a.createElement(f,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.ebcabc48.chunk.js.map