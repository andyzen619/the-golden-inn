(this["webpackJsonpthe-golden-inn"]=this["webpackJsonpthe-golden-inn"]||[]).push([[0],{1518:function(e,t,a){},1528:function(e,t,a){},1529:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(44),c=a.n(r),i=a(16),o=a(20),m=a(50),s=a(172),u=a(1544),d=a(1547),E=a(18),p=a(1553),h=a(1546),g=a(1538),f=a(1549),b=a(27),v=(a(289),a(1543)),x=a(79),y=a(1541),w=a(1539),C=a(271),j=a(167),k=a.n(j);k.a.initializeApp({apiKey:"AIzaSyCEjL7ZIpn9SUG8raac9BtH18ZONAD_3hc",authDomain:"the-golden-inn-restaurant.firebaseapp.com",projectId:"the-golden-inn-restaurant"});var O=k.a.firestore(),S=l.a.createContext([{},function(){}]),N=function(e){var t=Object(n.useState)({}),a=Object(i.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){O.collection("menu-items").get().then((function(e){e.forEach((function(e){c(e.data())}))}))}),[]),l.a.createElement(S.Provider,{value:[r,c]},e.children)},M=function(){var e=Object(n.useContext)(S),t=Object(i.a)(e,2),a=t[0],r=(t[1],function(){if(a.dishes){var e=a.dishes.appetizers;return Object.values(e)}return[]});return l.a.createElement(E.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.mobile&&l.a.createElement(d.a.Group,null,r().map((function(e){return l.a.createElement(d.a,{key:e.name},l.a.createElement(y.a.Content,null,l.a.createElement(f.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(y.a.Header,null,l.a.createElement(f.a,{as:"h4"},e.name)),e.description&&l.a.createElement(f.a,{as:"h5",color:"grey"},e.description)))}))),!e.mobile&&l.a.createElement(w.a.Group,{style:{background:"white",padding:"5%",boxShadow:"5px 5px 5px 5px black"},divided:!0},r().map((function(e){return l.a.createElement(w.a,{key:e.name},e.image&&l.a.createElement(C.a,{src:e.image,size:"small"}),l.a.createElement(y.a.Content,null,l.a.createElement(f.a,{as:"h3",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(w.a.Header,null,l.a.createElement(f.a,{as:"h4"},e.name)),e.description&&l.a.createElement(w.a.Meta,null,e.description)))}))))}))},T=function(){var e=Object(n.useContext)(S),t=Object(i.a)(e,2),a=t[0],r=(t[1],function(){if(a.dishes){var e=a.dishes.Rice;return Object.values(e)}return[]});return l.a.createElement(E.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.mobile&&l.a.createElement(d.a.Group,null,r().map((function(e){return l.a.createElement(d.a,{key:e.name},l.a.createElement(y.a.Content,null,l.a.createElement(f.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(y.a.Header,null,l.a.createElement(f.a,{as:"h4"},e.name)),e.description&&l.a.createElement(f.a,{as:"h5",color:"grey"},e.description)))}))),!e.mobile&&l.a.createElement(w.a.Group,{style:{background:"white",padding:"5%",boxShadow:"5px 5px 5px 5px black"},divided:!0},r().map((function(e){return l.a.createElement(w.a,{key:e.name},e.image&&l.a.createElement(C.a,{src:e.image,size:"small"}),l.a.createElement(y.a.Content,null,l.a.createElement(f.a,{as:"h3",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(w.a.Header,null,l.a.createElement(f.a,{as:"h4"},e.name)),e.description&&l.a.createElement(w.a.Meta,null,e.description)))}))))}))},A=a(1540),z=function(){var e=Object(n.useContext)(S),t=Object(i.a)(e,2),a=t[0],r=(t[1],function(){if(a.dishes){var e=a.dishes["sweet&Sour"];return Object.values(e)}return[]});return l.a.createElement(E.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.mobile&&l.a.createElement(d.a.Group,null,r().map((function(e){return l.a.createElement(d.a,{key:e.name},e.image&&l.a.createElement(A.a,{trigger:l.a.createElement(C.a,{src:e.image,floated:"right",rounded:!0,style:{width:"60px"}}),hideOnScroll:!0,flowing:!0},l.a.createElement(C.a,{src:e.image,size:"medium",rounded:!0})),l.a.createElement(y.a.Content,null,l.a.createElement(f.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(y.a.Header,null,l.a.createElement(f.a,{as:"h4"},e.name)),e.description&&l.a.createElement(f.a,{as:"h5",color:"grey"},e.description)))}))),!e.mobile&&l.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}}," ",l.a.createElement(w.a.Group,{style:{background:"white",padding:"5%",boxShadow:"5px 5px 5px 5px black",width:"60%"},divided:!0},r().map((function(e){return l.a.createElement(w.a,{key:e.name},l.a.createElement(y.a.Content,null,l.a.createElement(f.a,{as:"h3",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(w.a.Header,null,l.a.createElement(f.a,{as:"h4"},e.name)),e.description&&l.a.createElement(w.a.Meta,null,e.description)))}))),l.a.createElement("div",{style:{width:"30%"}},r().map((function(e){if(e.image)return l.a.createElement(C.a,{src:e.image,size:"large",rounded:!0,style:{margin:"50px",borderRadius:"25px"},label:{color:"brown",content:e.name,icon:"food",ribbon:"right",size:"large"}})})))))}))},F=function(){var e=Object(n.useContext)(S),t=Object(i.a)(e,2),a=t[0],r=(t[1],function(){if(a.dishes){var e=a.dishes.eggFooYoung;return Object.values(e)}return[]});return l.a.createElement(E.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.mobile&&l.a.createElement(d.a.Group,null,r().map((function(e){return l.a.createElement(d.a,{key:e.name},l.a.createElement(y.a.Content,null,l.a.createElement(f.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(y.a.Header,null,l.a.createElement(f.a,{as:"h4"},e.name)),e.description&&l.a.createElement(f.a,{as:"h5",color:"grey"},e.description)))}))),!e.mobile&&l.a.createElement(w.a.Group,{style:{background:"white",padding:"5%",boxShadow:"5px 5px 5px 5px black"},divided:!0},r().map((function(e){return l.a.createElement(w.a,{key:e.name},e.image&&l.a.createElement(C.a,{src:e.image,size:"small"}),l.a.createElement(y.a.Content,null,l.a.createElement(f.a,{as:"h3",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(w.a.Header,null,l.a.createElement(f.a,{as:"h4"},e.name)),e.description&&l.a.createElement(w.a.Meta,null,e.description)))}))))}))},W=function(){var e=Object(n.useContext)(S),t=Object(i.a)(e,2),a=t[0],r=(t[1],function(){if(a.dishes){var e=a.dishes.vA;return Object.values(e)}return[]});return l.a.createElement(E.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.mobile&&l.a.createElement(d.a.Group,null,r().map((function(e){return l.a.createElement(d.a,{key:e.name},l.a.createElement(y.a.Content,null,l.a.createElement(f.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(y.a.Header,null,l.a.createElement(f.a,{as:"h4"},e.name)),e.description&&l.a.createElement(f.a,{as:"h5",color:"grey"},e.description)))}))),!e.mobile&&l.a.createElement(w.a.Group,{style:{background:"white",padding:"5%",boxShadow:"5px 5px 5px 5px black"},divided:!0},r().map((function(e){return l.a.createElement(w.a,{key:e.name},e.image&&l.a.createElement(C.a,{src:e.image,size:"small"}),l.a.createElement(y.a.Content,null,l.a.createElement(f.a,{as:"h3",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(w.a.Header,null,l.a.createElement(f.a,{as:"h4"},e.name)),e.description&&l.a.createElement(w.a.Meta,null,e.description)))}))))}))},G=function(){var e=Object(n.useContext)(S),t=Object(i.a)(e,2),a=t[0],r=(t[1],function(){if(a.dishes){var e=a.dishes.chowMein;return Object.values(e)}return[]});return l.a.createElement(E.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.mobile&&l.a.createElement(d.a.Group,null,r().map((function(e){return l.a.createElement(d.a,{key:e.name},e.image&&l.a.createElement(A.a,{trigger:l.a.createElement(C.a,{src:e.image,floated:"right",rounded:!0,style:{width:"60px"}}),hideOnScroll:!0,flowing:!0},l.a.createElement(C.a,{src:e.image,size:"medium",rounded:!0})),l.a.createElement(y.a.Content,null,l.a.createElement(f.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(y.a.Header,null,l.a.createElement(f.a,{as:"h4"},e.name)),e.description&&l.a.createElement(f.a,{as:"h5",color:"grey"},e.description)))}))),!e.mobile&&l.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},l.a.createElement(w.a.Group,{style:{background:"white",padding:"5%",boxShadow:"5px 5px 5px 5px black",width:"60%"},divided:!0},r().map((function(e){return l.a.createElement(w.a,{key:e.name},l.a.createElement(y.a.Content,null,l.a.createElement(f.a,{as:"h3",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(w.a.Header,null,l.a.createElement(f.a,{as:"h4"},e.name)),e.description&&l.a.createElement(w.a.Meta,null,e.description)))}))),l.a.createElement("div",{style:{width:"30%"}},r().map((function(e){if(e.image)return l.a.createElement(C.a,{src:e.image,size:"large",rounded:!0,style:{margin:"50px",borderRadius:"25px"},label:{color:"brown",content:e.name,icon:"food",ribbon:"right",size:"large"}})})))))}))},H=function(){var e=Object(n.useContext)(S),t=Object(i.a)(e,2),a=t[0],r=(t[1],function(){if(a.dishes){var e=a.dishes.cantonese;return Object.values(e)}return[]});return l.a.createElement(E.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.mobile&&l.a.createElement(d.a.Group,null,r().map((function(e){return l.a.createElement(d.a,{key:e.name},e.image&&l.a.createElement(A.a,{trigger:l.a.createElement(C.a,{src:e.image,floated:"right",rounded:!0,style:{width:"60px"}}),hideOnScroll:!0,flowing:!0},l.a.createElement(C.a,{src:e.image,size:"medium",rounded:!0})),l.a.createElement(y.a.Content,null,l.a.createElement(f.a,{as:"h4",floated:"right",textAlign:"center",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(y.a.Header,null,l.a.createElement(f.a,{as:"h4"},e.name)),e.description&&l.a.createElement(f.a,{as:"h5",color:"grey",style:{display:"flex",justifyContent:"space-between"}},e.description)))}))),!e.mobile&&l.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},l.a.createElement(w.a.Group,{style:{background:"white",padding:"5%",boxShadow:"5px 5px 5px 5px black",width:"60%"},divided:!0},r().map((function(e){return l.a.createElement(w.a,{key:e.name},l.a.createElement(y.a.Content,null,l.a.createElement(f.a,{as:"h3",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(w.a.Header,null,l.a.createElement(f.a,{as:"h4"},e.name)),e.description&&l.a.createElement(w.a.Meta,null,e.description)))}))),l.a.createElement("div",{style:{width:"30%"}},r().map((function(e){if(e.image)return l.a.createElement(C.a,{src:e.image,size:"large",rounded:!0,style:{margin:"50px",borderRadius:"25px"},label:{color:"brown",content:e.name,icon:"food",ribbon:"right",size:"large"}})})))))}))},P=function(){var e=Object(n.useContext)(S),t=Object(i.a)(e,2),a=t[0],r=(t[1],function(){if(a.dishes){var e=a.dishes.soups;return Object.values(e)}return[]});return l.a.createElement(E.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.mobile&&l.a.createElement(d.a.Group,null,r().map((function(e){return l.a.createElement(d.a,{key:e.name},l.a.createElement(y.a.Content,null,l.a.createElement(f.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(y.a.Header,null,l.a.createElement(f.a,{as:"h4"},e.name)),e.description&&l.a.createElement(f.a,{as:"h5",color:"grey"},e.description)))}))),!e.mobile&&l.a.createElement(w.a.Group,{style:{background:"white",padding:"5%",boxShadow:"5px 5px 5px 5px black"},divided:!0},r().map((function(e){return l.a.createElement(w.a,{key:e.name},e.image&&l.a.createElement(C.a,{src:e.image,size:"small"}),l.a.createElement(y.a.Content,null,l.a.createElement(f.a,{as:"h3",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(w.a.Header,null,l.a.createElement(f.a,{as:"h4"},e.name)),e.description&&l.a.createElement(w.a.Meta,null,e.description)))}))))}))},I=function(){var e=Object(n.useContext)(S),t=Object(i.a)(e,2),a=t[0],r=(t[1],function(){if(a.combinations){var e=a.combinations;return Object.values(e)}return[]});return l.a.createElement(E.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.mobile&&l.a.createElement(d.a.Group,null,r().map((function(e){return l.a.createElement(d.a,{key:e.name},e.image&&l.a.createElement(A.a,{trigger:l.a.createElement(C.a,{src:e.image,floated:"right",rounded:!0,style:{width:"60px"}}),hideOnScroll:!0,flowing:!0},l.a.createElement(C.a,{src:e.image,size:"medium",rounded:!0})),l.a.createElement(y.a.Content,null,l.a.createElement(f.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(y.a.Header,null,l.a.createElement(f.a,{as:"h4"},e.name)),e.description&&l.a.createElement(f.a,{as:"h5",color:"grey",style:{display:"flex",justifyContent:"space-between"}},e.description)))}))),!e.mobile&&l.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},l.a.createElement(w.a.Group,{style:{background:"white",padding:"5%",boxShadow:"5px 5px 5px 5px black",width:"80%"},divided:!0},r().map((function(e){return l.a.createElement(w.a,{key:e.name},l.a.createElement(y.a.Content,null,l.a.createElement(f.a,{as:"h3",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(w.a.Header,null,l.a.createElement(f.a,{as:"h4"},e.name)),e.description&&l.a.createElement(w.a.Meta,null,e.description)))}))),l.a.createElement("div",{style:{width:"30%"}},r().map((function(e){if(e.image)return l.a.createElement(C.a,{src:e.image,size:"large",rounded:!0,style:{margin:"50px",borderRadius:"25px"},label:{color:"brown",content:e.name,icon:"food",ribbon:"right",size:"large"}})})))))}))},R=function(){var e=Object(n.useContext)(S),t=Object(i.a)(e,2),a=t[0],r=(t[1],function(){if(a.dinners){var e=a.dinners;return Object.values(e)}return[]});return l.a.createElement(E.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.mobile&&l.a.createElement(d.a.Group,null,r().map((function(e){return l.a.createElement(d.a,{key:e.name},l.a.createElement(y.a.Content,null,l.a.createElement(f.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(y.a.Header,null,l.a.createElement(f.a,{as:"h4"},e.name)),e.description&&l.a.createElement(f.a,{as:"h5",color:"grey"},e.description)))}))),!e.mobile&&l.a.createElement(w.a.Group,{style:{background:"white",padding:"5%",boxShadow:"5px 5px 5px 5px black"},divided:!0},r().map((function(e){return l.a.createElement(w.a,{key:e.name},e.image&&l.a.createElement(C.a,{src:e.image,size:"small"}),l.a.createElement(y.a.Content,null,l.a.createElement(f.a,{as:"h3",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(w.a.Header,null,l.a.createElement(f.a,{as:"h4"},e.name)),e.description&&l.a.createElement(w.a.Meta,null,e.description)))}))))}))},D=function(){var e=Object(n.useContext)(S),t=Object(i.a)(e,2),a=t[0],r=(t[1],function(){if(a.dishes){var e=a.dishes.canadian;return Object.values(e)}return[]});return l.a.createElement(E.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.mobile&&l.a.createElement(d.a.Group,null,r().map((function(e){return l.a.createElement(d.a,{key:e.name},l.a.createElement(y.a.Content,null,l.a.createElement(f.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(y.a.Header,null,l.a.createElement(f.a,{as:"h4"},e.name)),e.description&&l.a.createElement(f.a,{as:"h5",color:"grey"},e.description)))}))),!e.mobile&&l.a.createElement(w.a.Group,{style:{background:"white",padding:"5%",boxShadow:"5px 5px 5px 5px black"},divided:!0},r().map((function(e){return l.a.createElement(w.a,{key:e.name},e.image&&l.a.createElement(C.a,{src:e.image,size:"small"}),l.a.createElement(y.a.Content,null,l.a.createElement(f.a,{as:"h3",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(w.a.Header,null,l.a.createElement(f.a,{as:"h4"},e.name)),e.description&&l.a.createElement(w.a.Meta,null,e.description)))}))))}))},_=function(){var e=Object(n.useState)(-1),t=Object(i.a)(e,2),a=t[0],r=t[1],c=function(e,t){t.index===a?r(-1):r(t.index)};return l.a.createElement(v.a,{fluid:!0,styled:!0,className:"accordian"},l.a.createElement(v.a.Title,{active:0===a,index:0,onClick:c,as:f.a},l.a.createElement(x.a,{name:"dropdown"}),"Special Combination Plates"),l.a.createElement(v.a.Content,{active:0===a},l.a.createElement(I,null)),l.a.createElement(v.a.Title,{active:1===a,index:1,onClick:c,as:f.a},l.a.createElement(x.a,{name:"dropdown"}),"Full Course Dinner"),l.a.createElement(v.a.Content,{active:1===a},l.a.createElement("h6",{style:{margin:0,left:"15px",position:"relative"}},"Minimum $2.00 charge for substitutions"),l.a.createElement(R,null)),l.a.createElement(v.a.Title,{active:2===a,index:2,onClick:c,as:f.a},l.a.createElement(x.a,{name:"dropdown"}),"Appetizers"),l.a.createElement(v.a.Content,{active:2===a},l.a.createElement(M,null)),l.a.createElement(v.a.Title,{active:3===a,index:3,onClick:c,as:f.a},l.a.createElement(x.a,{name:"dropdown"}),"Rice (One size only)"),l.a.createElement(v.a.Content,{active:3===a},l.a.createElement(T,null)),l.a.createElement(v.a.Title,{active:4===a,index:4,onClick:c,as:f.a},l.a.createElement(x.a,{name:"dropdown"}),"Sweet And Sour"),l.a.createElement(v.a.Content,{active:4===a},l.a.createElement(z,null)),l.a.createElement(v.a.Title,{active:5===a,index:5,onClick:c,as:f.a},l.a.createElement(x.a,{name:"dropdown"}),"Egg Foo Young (grilled)"),l.a.createElement(v.a.Content,{active:5===a},l.a.createElement(F,null)),l.a.createElement(v.a.Title,{active:6===a,as:f.a,index:6,onClick:c},l.a.createElement(x.a,{name:"dropdown"}),"Vegetable and Almonds"),l.a.createElement(v.a.Content,{active:6===a},l.a.createElement(W,null)),l.a.createElement(v.a.Title,{active:7===a,as:f.a,index:7,onClick:c},l.a.createElement(x.a,{name:"dropdown"}),"Chow Mein/Chop Suey"),l.a.createElement(v.a.Content,{active:7===a},l.a.createElement(G,null)),l.a.createElement(v.a.Title,Object(b.a)({active:8===a,as:f.a,index:8,onClick:c},"as",f.a),l.a.createElement(x.a,{name:"dropdown"}),"Cantonese Style"),l.a.createElement(v.a.Content,{active:8===a},l.a.createElement(H,null)),l.a.createElement(v.a.Title,{active:9===a,as:f.a,index:9,onClick:c},l.a.createElement(x.a,{name:"dropdown"}),"Soups"),l.a.createElement(v.a.Content,{active:9===a},l.a.createElement(P,null)),l.a.createElement(v.a.Title,{active:10===a,as:f.a,index:10,onClick:c},l.a.createElement(x.a,{name:"dropdown"}),"Canadian Dishes"),l.a.createElement(v.a.Content,{active:10===a},l.a.createElement(D,null)))},q={top:"5%",width:"90%",height:"80%"},L=function(){return l.a.createElement(g.a,{trigger:l.a.createElement(h.a.Item,{position:"left"},l.a.createElement("div",{className:"text-white text-lg"},"Menu")),closeIcon:!0,style:q},l.a.createElement(g.a.Content,{style:{maxHeight:"calc(100vh - 10em)",overflow:"auto"}},l.a.createElement(f.a,{as:"h2"},"Menu"),l.a.createElement(_,null),l.a.createElement(f.a,{sub:!0,as:"h6"},"Prices are subject to change.**")))},U=a(71),Y=a(72),B=a(73),V=a(74),$=a(77),J=a(130),Z=a.n(J),K=(a(471),a(1550)),X=a(1542),Q=(a(1518),{position:"relative"}),ee={isLoading:!1,results:[],value:""},te=function(e){function t(){var e,a;Object(U.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(B.a)(this,(e=Object(V.a)(t)).call.apply(e,[this].concat(l)))).state=ee,a.getAllDishes=function(e){var t=e.dishes,a=e.combinations,n=e.dinners,l=[];return Object.values(t).forEach((function(e){Object.values(e).forEach((function(e){var t={title:e.name,description:e.description,price:e.price};l.push(t)}))})),Object.values(a).forEach((function(e){var t={title:e.name,description:e.description,price:e.price};l.push(t)})),Object.values(n).forEach((function(e){var t={title:e.name,description:e.description,price:e.price};l.push(t)})),l},a.handleResultSelect=function(e,t){var n=t.result;return a.setState({value:n.title})},a.handleSearchChange=function(e,t){var n=t.value;a.setState({isLoading:!0,value:n}),setTimeout((function(){if(a.state.value.length<1)return a.setState(ee);var e=new RegExp(Z.a.escapeRegExp(a.state.value),"i");a.setState({isLoading:!1,results:Z.a.filter(a.getAllDishes(a.context[0]),(function(t){return e.test(t.title)}))})}),300)},a}return Object($.a)(t,e),Object(Y.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.value,n=e.results;return l.a.createElement(K.a,null,l.a.createElement(K.a.Column,{width:4,style:Q},l.a.createElement("div",null,l.a.createElement(X.a,Object.assign({aligned:"left",loading:t,onSearchChange:Z.a.debounce(this.handleSearchChange,500,{leading:!0}),results:n,value:a},this.props)))))}}]),t}(n.Component);te.contextType=S;var ae=function(){return l.a.createElement(p.a,Object.assign({as:h.a},p.a.onlyMobile,{style:{background:"#b82e26",padding:"3%",fontSize:".90rem"}}),l.a.createElement(L,null),l.a.createElement(te,{style:{right:"100%",position:"relative"}}))},ne=function(){return l.a.createElement(p.a,Object.assign({as:h.a},p.a.onlyMobile,{style:{background:"#b82e26",padding:"3%"}}),l.a.createElement(L,null),l.a.createElement(te,{style:{right:"100%",position:"relative"}}))},le=function(e){return l.a.createElement(E.a,{queries:{small:"(max-width: 320px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.small&&l.a.createElement(ae,null),!e.small&&l.a.createElement(ne,null))}))},re=a(76),ce=a.n(re).a.Link,ie=function(){var e="text-sm sm:text-2xl hover:font-semibold text-white";return l.a.createElement("div",{style:{background:"#b82e26"},className:"flex text-white justify-around py-4"},l.a.createElement(h.a.Item,{className:"flex flex-col justify-center"},l.a.createElement(o.b,{to:"/"},l.a.createElement("div",{className:"".concat(e)},"HOME"))),l.a.createElement(h.a.Item,{name:"Menu",className:"flex flex-col justify-center"},l.a.createElement(o.b,{to:"/menu"},l.a.createElement("div",{className:"".concat(e)},"MENU"))),l.a.createElement(h.a.Item,{name:"Menu",className:"flex flex-col justify-center"},l.a.createElement(ce,{to:"visit_us"},l.a.createElement(o.b,{to:"/"},l.a.createElement("button",{className:"".concat(e)},"VISIT US")))),l.a.createElement(h.a.Item,{name:"Menu",className:"flex flex-col justify-center"},l.a.createElement(o.b,{to:"/"},l.a.createElement(ce,{to:"hours"},l.a.createElement("button",{className:"".concat(e)}," HOURS")))),l.a.createElement(h.a.Menu,{className:"flex flex-col justify-center"},l.a.createElement(h.a.Item,null,l.a.createElement(te,null))))},oe=function(e){e.menuItems;var t=Object(n.useContext)(S),a=Object(i.a)(t,2),r=a[0];a[1];return l.a.createElement("div",null,l.a.createElement(d.a.Group,null,l.a.createElement(E.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.mobile&&l.a.createElement("div",null,l.a.createElement(le,{menu:r})),!e.mobile&&l.a.createElement("div",null,l.a.createElement(ie,{menu:r})))}))))},me=a(269),se=function(){return l.a.createElement(re.Element,{name:"visit_us"},l.a.createElement("div",{className:"flex w-screen justify-center"},l.a.createElement(me.a,{url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7025.307316203426!2d-77.14187548434793!3d44.00714172541031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d7ca541acadc9d%3A0xe6740b299f5e525e!2s155%20Picton%20Main%20St%2C%20Prince%20Edward%2C%20ON!5e0!3m2!1sen!2sca!4v1581291195493!5m2!1sen!2sca",width:"100%",height:"450px",id:"myId"})))},ue=a(1551),de=function(e){var t=e.setDefaultFalse,a=Object(n.useState)(0),r=Object(i.a)(a,2),c=r[0],m=r[1];return l.a.createElement(ue.a,{as:v.a,animation:"push",icon:"labeled",vertical:!0,visible:!0,styled:!0,style:{background:"#f0f0f0"}},l.a.createElement(o.b,{to:"/menu/combinations"},l.a.createElement(v.a.Title,{onClick:t},l.a.createElement(x.a,null),"Special Combination Plates")),l.a.createElement(o.b,{to:"/menu/fullcourse"},l.a.createElement(v.a.Title,{onClick:t},l.a.createElement(x.a,null),"Full Course Dinners")),l.a.createElement(v.a.Title,{active:1===c,index:1,onClick:function(e,t){var a=t.index;m(c===a?-1:a)}},l.a.createElement(x.a,{name:"dropdown"}),"Main Dishes"),l.a.createElement(v.a.Content,{active:1===c,styled:!1},l.a.createElement(v.a,{style:{boxShadow:"none",background:"#f0f0f0"}},l.a.createElement(o.b,{to:"/menu/soups"},l.a.createElement(v.a.Title,{onClick:t},"Soups")),l.a.createElement(o.b,{to:"/menu/appetizers"},l.a.createElement(v.a.Title,{onClick:t},"Appetizers")),l.a.createElement(o.b,{to:"/menu/rice"},l.a.createElement(v.a.Title,{onClick:t},"Rice (One size)")),l.a.createElement(o.b,{to:"/menu/eggFooYoung"},l.a.createElement(v.a.Title,{onClick:t},"Egg Foo Young (Grilled)")),l.a.createElement(o.b,{to:"/menu/chowMein"},l.a.createElement(v.a.Title,{onClick:t},"Chow Mein (Dry noodles)/Chop Suey")),l.a.createElement(o.b,{to:"/menu/sweetAndSour"},l.a.createElement(v.a.Title,{onClick:t},"Sweet and Sour")),l.a.createElement(o.b,{to:"/menu/vegtablesAndAlmonds"},l.a.createElement(v.a.Title,{onClick:t},"Vegetables and Almonds")),l.a.createElement(o.b,{to:"/menu/cantonese"},l.a.createElement(v.a.Title,{onClick:t},"Cantonese Style")),l.a.createElement(o.b,{to:"/menu/canadian"},l.a.createElement(v.a.Title,{onClick:t},"Canadian Dishes")))))},Ee={paddingLeft:"50px",paddingRight:"300px",paddingTop:"50px",paddingBottom:"50px",height:"450px"},pe=function(){var e=Ee;return l.a.createElement(ue.a.Pusher,{style:{padding:" 2% 5%",overflow:"auto"},className:"text-white"},l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/menu"},l.a.createElement(d.a,{basic:!0},l.a.createElement("div",{className:"text-4xl py-8"},"Special Combinations Plates"),l.a.createElement(w.a.Meta,null,"No substitutions within combinations plates. Get $1 off betwean 11:30am-2pm",l.a.createElement("div",null,"Prices are subject to change.**"))),l.a.createElement("div",{style:e},l.a.createElement(I,null))),l.a.createElement(m.a,{path:"/menu/combinations"},l.a.createElement(d.a,{basic:!0},l.a.createElement("div",{className:"text-4xl py-8"},"Special Combinations Plates"),l.a.createElement(w.a.Meta,null,"No substitutions within combinations plates. Get $1 off betwean 11:30am-2pm",l.a.createElement("div",null,"Prices are subject to change.**"))),l.a.createElement("div",{style:e},l.a.createElement(I,null))),l.a.createElement(m.a,{path:"/menu/fullcourse"},l.a.createElement(d.a,{basic:!0},l.a.createElement("div",{className:"text-4xl py-8"},"Full Course Meals"),l.a.createElement(w.a.Meta,null,"Appetizers cannot be substituted. Other substitutions require minimum $2.00 charge**.",l.a.createElement("div",null,"Prices are subject to change.**"))),l.a.createElement("div",{style:e},l.a.createElement(R,null))),l.a.createElement(m.a,{path:"/menu/soups"},l.a.createElement(d.a,{basic:!0},l.a.createElement("div",{className:"text-4xl py-8"},"Soups"),l.a.createElement(w.a.Meta,null,l.a.createElement("div",null,"Prices are subject to change.**"))),l.a.createElement("div",{style:e},l.a.createElement(P,null))),l.a.createElement(m.a,{path:"/menu/appetizers"},l.a.createElement(d.a,{basic:!0},l.a.createElement("div",{className:"text-4xl py-8"},"Appetizers"),l.a.createElement(w.a.Meta,null,l.a.createElement("div",null,"Prices are subject to change.**"))),l.a.createElement("div",{style:e},l.a.createElement(M,null))),l.a.createElement(m.a,{path:"/menu/rice"},l.a.createElement(d.a,{basic:!0},l.a.createElement("div",{className:"text-4xl py-8"},"Rice (One size only)"),l.a.createElement(w.a.Meta,null,l.a.createElement("div",null,"Prices are subject to change.**"))),l.a.createElement("div",{style:e},l.a.createElement(T,null))),l.a.createElement(m.a,{path:"/menu/eggFooYoung"},l.a.createElement(d.a,{basic:!0},l.a.createElement("div",{className:"text-4xl py-8"},"Egg Foo Young (Grilled)"),l.a.createElement(w.a.Meta,null,l.a.createElement("div",null,"Prices are subject to change.**"))),l.a.createElement("div",{style:e},l.a.createElement(F,null))),l.a.createElement(m.a,{path:"/menu/chowMein"},l.a.createElement(d.a,{basic:!0},l.a.createElement("div",{className:"text-4xl py-8"},"Chow Mein (Dry noodles)/Chop Suey"),l.a.createElement(w.a.Meta,null,l.a.createElement("div",null,"Prices are subject to change.**"))),l.a.createElement("div",{style:e},l.a.createElement(G,null))),l.a.createElement(m.a,{path:"/menu/sweetAndSour"},l.a.createElement(d.a,{basic:!0},l.a.createElement("div",{className:"text-4xl py-8"},"Sweet and Sour"),l.a.createElement(w.a.Meta,null,l.a.createElement("div",null,"Prices are subject to change.**"))),l.a.createElement("div",{style:e},l.a.createElement(z,null))),l.a.createElement(m.a,{path:"/menu/vegtablesAndAlmonds"},l.a.createElement(d.a,{basic:!0},l.a.createElement("div",{className:"text-4xl py-8"},"Vegetables and Almonds"),l.a.createElement(w.a.Meta,null,l.a.createElement("div",null,"Prices are subject to change.**"))),l.a.createElement("div",{style:e},l.a.createElement(W,null))),l.a.createElement(m.a,{path:"/menu/cantonese"},l.a.createElement(d.a,{basic:!0},l.a.createElement("div",{className:"text-4xl py-8"},"Cantonese Style"),l.a.createElement(w.a.Meta,null,l.a.createElement("div",null,"Prices are subject to change.**"))),l.a.createElement("div",{style:e},l.a.createElement(H,null))),l.a.createElement(m.a,{path:"/menu/canadian"},l.a.createElement(d.a,{basic:!0},l.a.createElement("div",{className:"text-4xl py-8"},"Canadian Dishes"),l.a.createElement(w.a.Meta,null,l.a.createElement("div",null,"Prices are subject to change.**"))),l.a.createElement("div",{style:e},l.a.createElement(D,null)))))},he={height:"700px",backgroundImage:'linear-gradient(\n      rgba(0, 0, 0, 0.5),\n      rgba(0, 0, 0, 0.5)\n    ),url("https://scontent-ort2-2.xx.fbcdn.net/v/t1.15752-9/90638527_2542059202721532_3598802648356093952_n.png?_nc_cat=106&_nc_sid=b96e70&_nc_ohc=c5iOBlIIPsUAX_z4-zw&_nc_ht=scontent-ort2-2.xx&oh=73412c67136a40e2e6151d3719d87da2&oe=5EA3FC74")'},ge=function(){var e=he,t=Object(n.useState)(!0),a=Object(i.a)(t,2),r=(a[0],a[1]);return l.a.createElement(o.a,null,l.a.createElement(ue.a.Pushable,{style:e},l.a.createElement(de,{setDefaultFalse:function(){console.log("TURNING OFF DEFAULT"),r(!1)}}),l.a.createElement(pe,null)))},fe=function(e){var t={top:"5%",width:"90%",height:"80%"};return l.a.createElement("div",{style:{height:"600px"},className:"flex flex-col justify-center text-white"},l.a.createElement("div",{className:"flex justify-center p-8"},l.a.createElement("div",{style:{backgroundColor:"#b82e26"},className:"px-8 py-24 rounded-full text-4xl opacity-75"},l.a.createElement("div",{className:"flex justify-center text-white opacity-100"},"GOLDEN INN"),l.a.createElement("div",{className:"flex justify-center pt-2 opacity-100"},"RESTAURANT"))),l.a.createElement("div",{className:"flex justify-center text-lg text-center p-4"},"SERVING AUTHENTIC CANTONESE STYLE CHINESE FOOD FOR 25 YEARS"),l.a.createElement("div",{className:"flex justify-center text-black p-2"},l.a.createElement("div",{className:"bg-white opacity-75 hover:opacity-100 p-4 px-12 ml-2"},l.a.createElement(E.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.mobile&&l.a.createElement("div",null,l.a.createElement(g.a,{trigger:l.a.createElement("div",{className:"text-black text-lg"},"Menu"),closeIcon:!0,style:t},l.a.createElement(g.a.Content,{style:{maxHeight:"calc(100vh - 10em)",overflow:"auto"}},l.a.createElement(f.a,{as:"h2"},"Menu"),l.a.createElement(_,null),l.a.createElement(f.a,{sub:!0,as:"h6"},"Prices are subject to change.**")))),!e.mobile&&l.a.createElement(o.b,{to:"/menu",className:"font-semibold hover:text-black"},"Menu"))})))))},be=[{day:"Mon",hours:"Closed"},{day:"Tue",hours:"11:30 a.m. \u2013 09:00 p.m."},{day:"Wed",hours:"11:30 a.m. \u2013 09:00 p.m."},{day:"Thurs",hours:"11:30 a.m. \u2013 09:00 p.m."},{day:"Fri",hours:"11:30 a.m. \u2013 09:00 p.m."},{day:"Sat",hours:"11:30 a.m. \u2013 09:00 p.m."},{day:"Sun",hours:"11:30 a.m. \u2013 09:00 p.m."}],ve=function(e){return l.a.createElement("div",{style:{height:"600px"},className:"flex flex-col w-screen justify-evenly text-white"},l.a.createElement(re.Element,{name:"hours"},l.a.createElement("div",{className:"flex justify-center text-5xl"},"VISIT US")),l.a.createElement("div",{className:"flex justify-center text-xl text-center p-4"},"155 Main Street West, Picton, Prince Edward, ON, Canada"),l.a.createElement("div",{className:"flex justify-center text-xl"},"613-476-7056"),l.a.createElement("div",{className:"flex justify-center"},l.a.createElement("a",{href:"tel:6134767056"},l.a.createElement("div",{className:"rounded-full p-4 shadow bg-red-700 opacity-75 hover:opacity-100 font-semibold hover:text-white"},"CALL TO PLACE YOUR ORDER"))),l.a.createElement("div",{id:"/visit_us",className:"flex justify-center text-xl"},"Hours of Operation"),l.a.createElement("div",{className:"flex justify-center text-lg"},l.a.createElement("div",{className:"flex flex-col justify-center"},be.map((function(e){return l.a.createElement("div",{className:"flex justify-end p-2"},l.a.createElement("div",null,e.day))}))),l.a.createElement("div",{className:"w-12"}),l.a.createElement("div",{className:"flex flex-col justify-center"},be.map((function(e){return l.a.createElement("div",{className:"flex justify-center p-2"},l.a.createElement("div",null,e.hours))})))))},xe={backgroundColor:{backgroundImage:'linear-gradient(\n    rgba(0, 0, 0, 0.5),\n    rgba(0, 0, 0, 0.5)\n  ),url("https://firebasestorage.googleapis.com/v0/b/the-golden-inn-restaurant.appspot.com/o/goldenInnBackground.png?alt=media&token=c031b198-7ddc-4881-94e9-b61866bc15ca")'}};var ye=function(e){var t=xe.backgroundColor;return s.a.initialize("UA-160054958-1"),s.a.pageview("/"),l.a.createElement("div",{style:t},l.a.createElement(fe,null),l.a.createElement(ve,null),l.a.createElement(se,null))};var we=function(){var e=Object(n.useState)({visible:!1,title:"",message:""}),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){O.collection("messages").doc("bannerMessage").get().then((function(e){var t=e.data(),a=t.message,n=t.title,l=t.visible;r({message:a,title:n,visible:l})}))}),[]),l.a.createElement(o.a,{style:xe.backgroundColor},l.a.createElement("div",{style:xe.backgroundColor,className:"font-advent"},l.a.createElement(N,null,l.a.createElement(oe,null),a.visible&&l.a.createElement(u.a,{warning:!0,style:{textAlign:"center",margin:"0"}},l.a.createElement(u.a.Header,null,a.title),l.a.createElement("p",{className:"font-sans"},a.message)),l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/"},l.a.createElement(ye,null)),l.a.createElement(m.a,{path:"/menu"},l.a.createElement(ge,null))))))},Ce=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function je(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(1528);c.a.render(l.a.createElement(we,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Ce?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):je(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):je(t,e)}))}}()},281:function(e,t,a){e.exports=a(1529)},289:function(e,t,a){}},[[281,1,2]]]);
//# sourceMappingURL=main.0f1c73b0.chunk.js.map