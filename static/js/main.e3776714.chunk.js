(this.webpackJsonpproject2=this.webpackJsonpproject2||[]).push([[0],{43:function(e,t,a){e.exports=a.p+"static/media/image2.b8b15254.jpeg"},44:function(e,t,a){e.exports=a.p+"static/media/image3.c5092309.jpg"},45:function(e,t,a){e.exports=a.p+"static/media/image4.dcaa550e.jpg"},46:function(e,t,a){e.exports=a.p+"static/media/image5.8b203bec.jpg"},47:function(e,t,a){e.exports=a.p+"static/media/burger4.014a0cb3.jpg"},48:function(e,t,a){e.exports=a.p+"static/media/sliderchicken.b2c1268c.jpg"},52:function(e,t,a){e.exports=a(89)},57:function(e,t,a){},58:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(40),o=a.n(r),l=(a(57),a(25)),i=a(28),m=a(14),s=a(15),u=a(17),p=a(16),d=a(18),f=(a(58),a(90)),h=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{src:e.food.img,width:"800px",height:"700px",alt:"image of the item"}),c.a.createElement("div",{className:"details"},c.a.createElement("h3",null,e.food.name),c.a.createElement("p",null,e.food.price)),c.a.createElement(f.a,{onClick:function(){return e.handleBtnClick(e.food)},variant:"outline-warning"},"Add item to the cart"))},E=a(94),g=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.foodDB.map((function(t,a){return c.a.createElement(E.a.Item,{key:a},c.a.createElement(h,{handleBtnClick:e.props.handleBtnClick,food:t}))}));return c.a.createElement(E.a,null,t)}}]),t}(n.Component),v=a(43),b=a.n(v),y=a(44),C=a.n(y),k=a(45),j=a.n(k),B=a(46),O=a.n(B),w=a(47),x=a.n(w),S=a(48),D=a.n(S),N=function(e){var t;return t=0==e.foods.length?c.a.createElement("h1",null,"Empty Cart.."):e.foods.map((function(e,t){return c.a.createElement("div",{key:t},c.a.createElement("img",{src:e.img,width:"800px",height:"700px",alt:"image of the item"}),c.a.createElement("div",{className:"details"},c.a.createElement("h3",null,e.name),c.a.createElement("p",null,e.price)))})),c.a.createElement("div",{className:"cart"},t)};var R=function(e){return c.a.createElement("div",{className:"containerhome"},c.a.createElement("div",{className:"citytemp"},c.a.createElement("h3",null,e.city),c.a.createElement("h3",null,e.temp,"\xb0C")),c.a.createElement("div",{className:"title"},c.a.createElement("h1",null,"Yummy Yum App"),c.a.createElement("p",null,"Welcome to my Dilicious App")))},H=a(11),A=a(9),F=a(91),I=a(92),M=a(93);function W(e){return c.a.createElement(F.a,{className:"mnue"},c.a.createElement(I.a,null,c.a.createElement(M.a,{xs:8},c.a.createElement(g,{foodDB:e.foodDB,handleBtnClick:e.handleBtnClick}))),c.a.createElement(f.a,{onClick:e.clearHanle,variant:"outline-warning"},"Clear"),e.carts.length>0&&c.a.createElement(N,{foods:e.carts}))}function J(){return c.a.createElement("div",{className:"contact-container"},c.a.createElement("div",{className:"contact"},c.a.createElement("h1",null,"Contact"),c.a.createElement("p",null,"frontdesk@foodapp.com"),c.a.createElement("p",null," 1 (800) 698-3384 ")))}var P=a(49),Y=a.n(P),$=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleBtnClick=function(e){var t=Object(i.a)(a.state.carts);console.log(e);var n=t.indexOf(e);-1!==n?(t.splice(n,1),console.log("Removing ${food.name} From Carts")):(t=[].concat(Object(i.a)(a.state.carts),[e]),a.setState({carts:t}),console.log(a.state.carts),console.log("Adding ".concat(e.name," To Carts"))),a.setState({carts:t}),console.log(a.state.carts)},a.clearHanle=function(){console.log(a.state.carts),a.setState({carts:[]}),console.log(a.state.carts)},a.state={foodDB:[{img:b.a,name:"Chicken Crispy",price:"45 SR"},{img:C.a,name:"Solar Gravity",price:"45 SR"},{img:j.a,name:"Chickn Burger",price:"45 SR"},{img:x.a,name:"Beef Burger",price:"45 SR"},{img:D.a,name:"Dynamit-Shrimp",price:"60 SR"},{img:O.a,name:"Crazy Fryse",price:"45 SR"}],carts:[],temp:"",city:""},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;Y()({method:"get",url:"http://api.openweathermap.org/data/2.5/weather?q=Riyadh&APPID=17fb5fb0eaaf777fa63a9d3ce7daa9c6"}).then((function(t){var a=t.data.main.temp-273.15,n=t.data.name;e.setState({temp:a,city:n}),console.log(t)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return c.a.createElement(H.a,{basename:"/"},c.a.createElement("nav",{className:"navbar"},c.a.createElement(H.b,{to:"/"},"Home"),"  |  ",c.a.createElement(H.b,{to:"/mnue"},"Mnue"),"  |  ",c.a.createElement(H.b,{to:"/contact"},"Contact"),"  |  ",c.a.createElement(H.b,{to:"/cartfood"},"My Cart"),"  |  "),c.a.createElement("div",null,c.a.createElement(A.a,{exact:!0,path:"/",component:function(){return c.a.createElement(R,{temp:e.state.temp,city:e.state.city})}}),c.a.createElement(A.a,{path:"/mnue",component:function(){var t;return c.a.createElement(W,(t={carts:e.state.carts,clearHanle:e.clearHanle,foodDB:e.state.foodDB},Object(l.a)(t,"clearHanle",e.clearHanle),Object(l.a)(t,"handleBtnClick",e.handleBtnClick),t))}}),c.a.createElement(A.a,{path:"/contact",component:J}),c.a.createElement(A.a,{path:"/cartfood",component:function(){return c.a.createElement(N,{foods:e.state.carts})}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(88);o.a.render(c.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[52,1,2]]]);
//# sourceMappingURL=main.e3776714.chunk.js.map