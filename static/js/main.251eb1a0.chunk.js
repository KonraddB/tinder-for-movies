(this["webpackJsonptinder-for-movies"]=this["webpackJsonptinder-for-movies"]||[]).push([[0],{38:function(e,c,t){},39:function(e,c,t){},64:function(e,c,t){"use strict";t.r(c);var i,n=t(0),s=t.n(n),r=t(31),a=t.n(r),l=(t(38),t(39),t(32)),j=t(6),o=t(76),d=t(18),m=t.n(d),u={getAll:function(){return m.a.get("/tinder-for-movies/movie-card.json")},rejectOrAcceptById:function(e,c){return m.a.put("/tinder-for-movies/".concat(e,"/").concat(c))}};!function(e){e.ACCEPT="accept",e.REJECT="reject"}(i||(i={}));var b=t(77),O=t(75),v=(t(28),t(29),t(1)),h=function(e){return Object(v.jsx)("div",{className:"cellphone-container",children:Object(v.jsxs)("div",{className:"movie",children:[Object(v.jsx)("div",{className:"movie-img",style:{backgroundImage:"url(".concat(e.imageURL,")")}}),Object(v.jsxs)("div",{className:"text-movie-cont",children:[Object(v.jsx)("div",{className:"mr-grid",children:Object(v.jsxs)("div",{className:"col1",children:[Object(v.jsx)("h1",{children:e.title}),Object(v.jsxs)("ul",{className:"movie-gen",children:[Object(v.jsx)("li",{children:"16 yo /"}),Object(v.jsx)("li",{children:"1h 45min /"}),Object(v.jsx)("li",{children:"Adventure, Drama, Sci-Fi"})]})]})}),Object(v.jsxs)("div",{className:"mr-grid summary-row",children:[Object(v.jsx)("div",{className:"col2",children:Object(v.jsx)("h5",{children:"SUMMARY"})}),Object(v.jsx)("div",{className:"col2",children:Object(v.jsx)("ul",{className:"movie-likes",children:Object(v.jsxs)("li",{children:["Rating:",e.rating]})})})]}),Object(v.jsx)("div",{className:"mr-grid",children:Object(v.jsx)("div",{className:"col1",children:Object(v.jsx)("p",{className:"movie-description",children:e.summary})})}),Object(v.jsx)("div",{className:"mr-grid actors-row",children:Object(v.jsx)("div",{className:"col1",children:Object(v.jsx)("p",{className:"movie-actors",children:"Chris Evans, Robert Downey, Channing Tatum"})})})]})]})})},x=function(){var e=Object(n.useState)([]),c=Object(j.a)(e,2),t=c[0],s=c[1],r=Object(n.useState)(),a=Object(j.a)(r,2),d=a[0],m=a[1],x=Object(n.useState)(),f=Object(j.a)(x,2),N=f[0],p=f[1];Object(n.useEffect)((function(){g()}),[]);var g=function(){u.getAll().then((function(e){s(e.data),m(e.data[0])}))},C=function(e,c){var i=N.realIndex+1;return m(t[i]),u.rejectOrAcceptById(null===d||void 0===d?void 0:d.id,e),!c||N.slideTo(i)};return Object(v.jsx)("div",{className:"container pt-5 pb-5",children:Object(v.jsx)("div",{className:"row justify-content-md-center",children:Object(v.jsxs)("div",{className:"col-12 col-lg-4",children:[Object(v.jsx)(b.a,{onSwiper:p,onSliderFirstMove:function(){return C(i.REJECT,!1)},allowSlidePrev:!1,children:t.map((function(e,c){return Object(v.jsx)(O.a,{children:Object(v.jsx)(h,Object(l.a)({},e))},c)}))}),Object(v.jsxs)("div",{className:"button-container",children:[Object(v.jsx)(o.a,{size:"medium",variant:"contained",color:"success",onClick:function(){return C(i.ACCEPT,!0)},children:"Accept"}),Object(v.jsx)(o.a,{size:"medium",variant:"outlined",color:"error",onClick:function(){return C(i.REJECT,!0)},children:"Reject"})]})]})})})},f=function(){return Object(v.jsx)(x,{})};t(63);a.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(f,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.251eb1a0.chunk.js.map