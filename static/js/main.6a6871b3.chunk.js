(this["webpackJsonptinder-for-movies"]=this["webpackJsonptinder-for-movies"]||[]).push([[0],{38:function(e,c,t){},39:function(e,c,t){},64:function(e,c,t){"use strict";t.r(c);var n,i=t(0),s=t.n(i),r=t(31),a=t.n(r),l=(t(38),t(39),t(32)),j=t(6),o=t(76),d=t(18),m=t.n(d),u={getAll:function(){return m.a.get("/movie-card.json")},rejectOrAcceptById:function(e,c){return m.a.put("/".concat(e,"/").concat(c))}};!function(e){e.ACCEPT="accept",e.REJECT="reject"}(n||(n={}));var b=t(77),O=t(75),h=(t(28),t(29),t(1)),v=function(e){return Object(h.jsx)("div",{className:"cellphone-container",children:Object(h.jsxs)("div",{className:"movie",children:[Object(h.jsx)("div",{className:"movie-img",style:{backgroundImage:"url(".concat(e.imageURL,")")}}),Object(h.jsxs)("div",{className:"text-movie-cont",children:[Object(h.jsx)("div",{className:"mr-grid",children:Object(h.jsxs)("div",{className:"col1",children:[Object(h.jsx)("h1",{children:e.title}),Object(h.jsxs)("ul",{className:"movie-gen",children:[Object(h.jsx)("li",{children:"16 yo /"}),Object(h.jsx)("li",{children:"1h 45min /"}),Object(h.jsx)("li",{children:"Adventure, Drama, Sci-Fi"})]})]})}),Object(h.jsxs)("div",{className:"mr-grid summary-row",children:[Object(h.jsx)("div",{className:"col2",children:Object(h.jsx)("h5",{children:"SUMMARY"})}),Object(h.jsx)("div",{className:"col2",children:Object(h.jsx)("ul",{className:"movie-likes",children:Object(h.jsxs)("li",{children:["Rating:",e.rating]})})})]}),Object(h.jsx)("div",{className:"mr-grid",children:Object(h.jsx)("div",{className:"col1",children:Object(h.jsx)("p",{className:"movie-description",children:e.summary})})}),Object(h.jsx)("div",{className:"mr-grid actors-row",children:Object(h.jsx)("div",{className:"col1",children:Object(h.jsx)("p",{className:"movie-actors",children:"Chris Evans, Robert Downey, Channing Tatum"})})})]})]})})},x=function(){var e=Object(i.useState)([]),c=Object(j.a)(e,2),t=c[0],s=c[1],r=Object(i.useState)(),a=Object(j.a)(r,2),d=a[0],m=a[1],x=Object(i.useState)(),f=Object(j.a)(x,2),N=f[0],p=f[1];Object(i.useEffect)((function(){g()}),[]);var g=function(){u.getAll().then((function(e){s(e.data),m(e.data[0])}))},C=function(e,c){var n=N.realIndex+1;return m(t[n]),u.rejectOrAcceptById(null===d||void 0===d?void 0:d.id,e),!c||N.slideTo(n)};return Object(h.jsx)("div",{className:"container pt-5 pb-5",children:Object(h.jsx)("div",{className:"row justify-content-md-center",children:Object(h.jsxs)("div",{className:"col-12 col-lg-4",children:[Object(h.jsx)(b.a,{onSwiper:p,onSliderFirstMove:function(){return C(n.REJECT,!1)},allowSlidePrev:!1,children:t.map((function(e,c){return Object(h.jsx)(O.a,{children:Object(h.jsx)(v,Object(l.a)({},e))},c)}))}),Object(h.jsxs)("div",{className:"button-container",children:[Object(h.jsx)(o.a,{size:"medium",variant:"contained",color:"success",onClick:function(){return C(n.ACCEPT,!0)},children:"Accept"}),Object(h.jsx)(o.a,{size:"medium",variant:"outlined",color:"error",onClick:function(){return C(n.REJECT,!0)},children:"Reject"})]})]})})})},f=function(){return Object(h.jsx)(x,{})};t(63);a.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.6a6871b3.chunk.js.map