(this["webpackJsonpthe-golden-inn"]=this["webpackJsonpthe-golden-inn"]||[]).push([[0],{1508:function(e,a,t){},1511:function(e,a,t){},1512:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(61),c=t.n(r),i=t(20),o=t(49),m=t(165),s=t(16),u=t(1530),d=t(18),E=t(1536),p=t(1529),h=t(1521),g=t(1532),f=t(27),b=(t(279),t(1526)),x=t(78),v=t(1524),y=t(1522),w=t(261),C=t(160),j=t.n(C);console.log("the-golden-inn-restaurant"),j.a.initializeApp({apiKey:"AIzaSyCEjL7ZIpn9SUG8raac9BtH18ZONAD_3hc",authDomain:"the-golden-inn-restaurant.firebaseapp.com",projectId:"the-golden-inn-restaurant"});var k=j.a.firestore(),O=l.a.createContext([{},function(){}]),S=function(e){var a=Object(n.useState)({}),t=Object(s.a)(a,2),r=t[0],c=t[1];return Object(n.useEffect)((function(){k.collection("menu-items").get().then((function(e){e.forEach((function(e){c(e.data())}))}))}),[]),l.a.createElement(O.Provider,{value:[r,c]},e.children)},N=function(){var e=Object(n.useContext)(O),a=Object(s.a)(e,2),t=a[0],r=(a[1],function(){if(t.dishes){var e=t.dishes.appetizers;return Object.values(e)}return[]});return l.a.createElement(d.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.mobile&&l.a.createElement(u.a.Group,null,r().map((function(e){return l.a.createElement(u.a,{key:e.name},l.a.createElement(v.a.Content,null,l.a.createElement(g.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(v.a.Header,null,l.a.createElement(g.a,{as:"h4"},e.name)),e.description&&l.a.createElement(g.a,{as:"h5",color:"grey"},e.description)))}))),!e.mobile&&l.a.createElement(y.a.Group,{style:{background:"white",padding:"5%",boxShadow:"5px 5px 5px 5px black"},divided:!0},r().map((function(e){return l.a.createElement(y.a,{key:e.name},e.image&&l.a.createElement(w.a,{src:e.image,size:"small"}),l.a.createElement(v.a.Content,null,l.a.createElement(g.a,{as:"h3",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(y.a.Header,null,l.a.createElement(g.a,{as:"h4"},e.name)),e.description&&l.a.createElement(y.a.Meta,null,e.description)))}))))}))},M=function(){var e=Object(n.useContext)(O),a=Object(s.a)(e,2),t=a[0],r=(a[1],function(){if(t.dishes){var e=t.dishes.Rice;return Object.values(e)}return[]});return l.a.createElement(d.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.mobile&&l.a.createElement(u.a.Group,null,r().map((function(e){return l.a.createElement(u.a,{key:e.name},l.a.createElement(v.a.Content,null,l.a.createElement(g.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(v.a.Header,null,l.a.createElement(g.a,{as:"h4"},e.name)),e.description&&l.a.createElement(g.a,{as:"h5",color:"grey"},e.description)))}))),!e.mobile&&l.a.createElement(y.a.Group,{style:{background:"white",padding:"5%",boxShadow:"5px 5px 5px 5px black"},divided:!0},r().map((function(e){return l.a.createElement(y.a,{key:e.name},e.image&&l.a.createElement(w.a,{src:e.image,size:"small"}),l.a.createElement(v.a.Content,null,l.a.createElement(g.a,{as:"h3",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(y.a.Header,null,l.a.createElement(g.a,{as:"h4"},e.name)),e.description&&l.a.createElement(y.a.Meta,null,e.description)))}))))}))},T=t(1523),A=function(){var e=Object(n.useContext)(O),a=Object(s.a)(e,2),t=a[0],r=(a[1],function(){if(t.dishes){var e=t.dishes["sweet&Sour"];return Object.values(e)}return[]});return l.a.createElement(d.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.mobile&&l.a.createElement(u.a.Group,null,r().map((function(e){return l.a.createElement(u.a,{key:e.name},e.image&&l.a.createElement(T.a,{trigger:l.a.createElement(w.a,{src:e.image,floated:"right",rounded:!0,style:{width:"60px"}}),hideOnScroll:!0,flowing:!0},l.a.createElement(w.a,{src:e.image,size:"medium",rounded:!0})),l.a.createElement(v.a.Content,null,l.a.createElement(g.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(v.a.Header,null,l.a.createElement(g.a,{as:"h4"},e.name)),e.description&&l.a.createElement(g.a,{as:"h5",color:"grey"},e.description)))}))),!e.mobile&&l.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}}," ",l.a.createElement(y.a.Group,{style:{background:"white",padding:"5%",boxShadow:"5px 5px 5px 5px black",width:"60%"},divided:!0},r().map((function(e){return l.a.createElement(y.a,{key:e.name},l.a.createElement(v.a.Content,null,l.a.createElement(g.a,{as:"h3",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(y.a.Header,null,l.a.createElement(g.a,{as:"h4"},e.name)),e.description&&l.a.createElement(y.a.Meta,null,e.description)))}))),l.a.createElement("div",{style:{width:"30%"}},r().map((function(e){if(e.image)return l.a.createElement(w.a,{src:e.image,size:"large",rounded:!0,style:{margin:"50px",borderRadius:"25px"},label:{color:"brown",content:e.name,icon:"food",ribbon:"right",size:"large"}})})))))}))},z=function(){var e=Object(n.useContext)(O),a=Object(s.a)(e,2),t=a[0],r=(a[1],function(){if(t.dishes){var e=t.dishes.eggFooYoung;return Object.values(e)}return[]});return l.a.createElement(d.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.mobile&&l.a.createElement(u.a.Group,null,r().map((function(e){return l.a.createElement(u.a,{key:e.name},l.a.createElement(v.a.Content,null,l.a.createElement(g.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(v.a.Header,null,l.a.createElement(g.a,{as:"h4"},e.name)),e.description&&l.a.createElement(g.a,{as:"h5",color:"grey"},e.description)))}))),!e.mobile&&l.a.createElement(y.a.Group,{style:{background:"white",padding:"5%",boxShadow:"5px 5px 5px 5px black"},divided:!0},r().map((function(e){return l.a.createElement(y.a,{key:e.name},e.image&&l.a.createElement(w.a,{src:e.image,size:"small"}),l.a.createElement(v.a.Content,null,l.a.createElement(g.a,{as:"h3",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(y.a.Header,null,l.a.createElement(g.a,{as:"h4"},e.name)),e.description&&l.a.createElement(y.a.Meta,null,e.description)))}))))}))},W=function(){var e=Object(n.useContext)(O),a=Object(s.a)(e,2),t=a[0],r=(a[1],function(){if(t.dishes){var e=t.dishes.vA;return Object.values(e)}return[]});return l.a.createElement(d.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.mobile&&l.a.createElement(u.a.Group,null,r().map((function(e){return l.a.createElement(u.a,{key:e.name},l.a.createElement(v.a.Content,null,l.a.createElement(g.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(v.a.Header,null,l.a.createElement(g.a,{as:"h4"},e.name)),e.description&&l.a.createElement(g.a,{as:"h5",color:"grey"},e.description)))}))),!e.mobile&&l.a.createElement(y.a.Group,{style:{background:"white",padding:"5%",boxShadow:"5px 5px 5px 5px black"},divided:!0},r().map((function(e){return l.a.createElement(y.a,{key:e.name},e.image&&l.a.createElement(w.a,{src:e.image,size:"small"}),l.a.createElement(v.a.Content,null,l.a.createElement(g.a,{as:"h3",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(y.a.Header,null,l.a.createElement(g.a,{as:"h4"},e.name)),e.description&&l.a.createElement(y.a.Meta,null,e.description)))}))))}))},F=function(){var e=Object(n.useContext)(O),a=Object(s.a)(e,2),t=a[0],r=(a[1],function(){if(t.dishes){var e=t.dishes.chowMein;return Object.values(e)}return[]});return l.a.createElement(d.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.mobile&&l.a.createElement(u.a.Group,null,r().map((function(e){return l.a.createElement(u.a,{key:e.name},e.image&&l.a.createElement(T.a,{trigger:l.a.createElement(w.a,{src:e.image,floated:"right",rounded:!0,style:{width:"60px"}}),hideOnScroll:!0,flowing:!0},l.a.createElement(w.a,{src:e.image,size:"medium",rounded:!0})),l.a.createElement(v.a.Content,null,l.a.createElement(g.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(v.a.Header,null,l.a.createElement(g.a,{as:"h4"},e.name)),e.description&&l.a.createElement(g.a,{as:"h5",color:"grey"},e.description)))}))),!e.mobile&&l.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},l.a.createElement(y.a.Group,{style:{background:"white",padding:"5%",boxShadow:"5px 5px 5px 5px black",width:"60%"},divided:!0},r().map((function(e){return l.a.createElement(y.a,{key:e.name},l.a.createElement(v.a.Content,null,l.a.createElement(g.a,{as:"h3",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(y.a.Header,null,l.a.createElement(g.a,{as:"h4"},e.name)),e.description&&l.a.createElement(y.a.Meta,null,e.description)))}))),l.a.createElement("div",{style:{width:"30%"}},r().map((function(e){if(e.image)return l.a.createElement(w.a,{src:e.image,size:"large",rounded:!0,style:{margin:"50px",borderRadius:"25px"},label:{color:"brown",content:e.name,icon:"food",ribbon:"right",size:"large"}})})))))}))},G=function(){var e=Object(n.useContext)(O),a=Object(s.a)(e,2),t=a[0],r=(a[1],function(){if(t.dishes){var e=t.dishes.cantonese;return Object.values(e)}return[]});return l.a.createElement(d.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.mobile&&l.a.createElement(u.a.Group,null,r().map((function(e){return l.a.createElement(u.a,{key:e.name},e.image&&l.a.createElement(T.a,{trigger:l.a.createElement(w.a,{src:e.image,floated:"right",rounded:!0,style:{width:"60px"}}),hideOnScroll:!0,flowing:!0},l.a.createElement(w.a,{src:e.image,size:"medium",rounded:!0})),l.a.createElement(v.a.Content,null,l.a.createElement(g.a,{as:"h4",floated:"right",textAlign:"center",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(v.a.Header,null,l.a.createElement(g.a,{as:"h4"},e.name)),e.description&&l.a.createElement(g.a,{as:"h5",color:"grey",style:{display:"flex",justifyContent:"space-between"}},e.description)))}))),!e.mobile&&l.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},l.a.createElement(y.a.Group,{style:{background:"white",padding:"5%",boxShadow:"5px 5px 5px 5px black",width:"60%"},divided:!0},r().map((function(e){return l.a.createElement(y.a,{key:e.name},l.a.createElement(v.a.Content,null,l.a.createElement(g.a,{as:"h3",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(y.a.Header,null,l.a.createElement(g.a,{as:"h4"},e.name)),e.description&&l.a.createElement(y.a.Meta,null,e.description)))}))),l.a.createElement("div",{style:{width:"30%"}},r().map((function(e){if(e.image)return l.a.createElement(w.a,{src:e.image,size:"large",rounded:!0,style:{margin:"50px",borderRadius:"25px"},label:{color:"brown",content:e.name,icon:"food",ribbon:"right",size:"large"}})})))))}))},H=function(){var e=Object(n.useContext)(O),a=Object(s.a)(e,2),t=a[0],r=(a[1],function(){if(t.dishes){var e=t.dishes.soups;return Object.values(e)}return[]});return l.a.createElement(d.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.mobile&&l.a.createElement(u.a.Group,null,r().map((function(e){return l.a.createElement(u.a,{key:e.name},l.a.createElement(v.a.Content,null,l.a.createElement(g.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(v.a.Header,null,l.a.createElement(g.a,{as:"h4"},e.name)),e.description&&l.a.createElement(g.a,{as:"h5",color:"grey"},e.description)))}))),!e.mobile&&l.a.createElement(y.a.Group,{style:{background:"white",padding:"5%",boxShadow:"5px 5px 5px 5px black"},divided:!0},r().map((function(e){return l.a.createElement(y.a,{key:e.name},e.image&&l.a.createElement(w.a,{src:e.image,size:"small"}),l.a.createElement(v.a.Content,null,l.a.createElement(g.a,{as:"h3",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(y.a.Header,null,l.a.createElement(g.a,{as:"h4"},e.name)),e.description&&l.a.createElement(y.a.Meta,null,e.description)))}))))}))},I=function(){var e=Object(n.useContext)(O),a=Object(s.a)(e,2),t=a[0],r=(a[1],function(){if(t.combinations){var e=t.combinations;return Object.values(e)}return[]});return l.a.createElement(d.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.mobile&&l.a.createElement(u.a.Group,null,r().map((function(e){return l.a.createElement(u.a,{key:e.name},e.image&&l.a.createElement(T.a,{trigger:l.a.createElement(w.a,{src:e.image,floated:"right",rounded:!0,style:{width:"60px"}}),hideOnScroll:!0,flowing:!0},l.a.createElement(w.a,{src:e.image,size:"medium",rounded:!0})),l.a.createElement(v.a.Content,null,l.a.createElement(g.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(v.a.Header,null,l.a.createElement(g.a,{as:"h4"},e.name)),e.description&&l.a.createElement(g.a,{as:"h5",color:"grey",style:{display:"flex",justifyContent:"space-between"}},e.description)))}))),!e.mobile&&l.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},l.a.createElement(y.a.Group,{style:{background:"white",padding:"5%",boxShadow:"5px 5px 5px 5px black",width:"80%"},divided:!0},r().map((function(e){return l.a.createElement(y.a,{key:e.name},l.a.createElement(v.a.Content,null,l.a.createElement(g.a,{as:"h3",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(y.a.Header,null,l.a.createElement(g.a,{as:"h4"},e.name)),e.description&&l.a.createElement(y.a.Meta,null,e.description)))}))),l.a.createElement("div",{style:{width:"30%"}},r().map((function(e){if(e.image)return l.a.createElement(w.a,{src:e.image,size:"large",rounded:!0,style:{margin:"50px",borderRadius:"25px"},label:{color:"brown",content:e.name,icon:"food",ribbon:"right",size:"large"}})})))))}))},P=function(){var e=Object(n.useContext)(O),a=Object(s.a)(e,2),t=a[0],r=(a[1],function(){if(t.dinners){var e=t.dinners;return Object.values(e)}return[]});return l.a.createElement(d.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.mobile&&l.a.createElement(u.a.Group,null,r().map((function(e){return l.a.createElement(u.a,{key:e.name},l.a.createElement(v.a.Content,null,l.a.createElement(g.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(v.a.Header,null,l.a.createElement(g.a,{as:"h4"},e.name)),e.description&&l.a.createElement(g.a,{as:"h5",color:"grey"},e.description)))}))),!e.mobile&&l.a.createElement(y.a.Group,{style:{background:"white",padding:"5%",boxShadow:"5px 5px 5px 5px black"},divided:!0},r().map((function(e){return l.a.createElement(y.a,{key:e.name},e.image&&l.a.createElement(w.a,{src:e.image,size:"small"}),l.a.createElement(v.a.Content,null,l.a.createElement(g.a,{as:"h3",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(y.a.Header,null,l.a.createElement(g.a,{as:"h4"},e.name)),e.description&&l.a.createElement(y.a.Meta,null,e.description)))}))))}))},R=function(){var e=Object(n.useContext)(O),a=Object(s.a)(e,2),t=a[0],r=(a[1],function(){if(t.dishes){var e=t.dishes.canadian;return Object.values(e)}return[]});return l.a.createElement(d.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.mobile&&l.a.createElement(u.a.Group,null,r().map((function(e){return l.a.createElement(u.a,{key:e.name},l.a.createElement(v.a.Content,null,l.a.createElement(g.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(v.a.Header,null,l.a.createElement(g.a,{as:"h4"},e.name)),e.description&&l.a.createElement(g.a,{as:"h5",color:"grey"},e.description)))}))),!e.mobile&&l.a.createElement(y.a.Group,{style:{background:"white",padding:"5%",boxShadow:"5px 5px 5px 5px black"},divided:!0},r().map((function(e){return l.a.createElement(y.a,{key:e.name},e.image&&l.a.createElement(w.a,{src:e.image,size:"small"}),l.a.createElement(v.a.Content,null,l.a.createElement(g.a,{as:"h3",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(y.a.Header,null,l.a.createElement(g.a,{as:"h4"},e.name)),e.description&&l.a.createElement(y.a.Meta,null,e.description)))}))))}))},D=function(){var e=Object(n.useState)(-1),a=Object(s.a)(e,2),t=a[0],r=a[1],c=function(e,a){a.index===t?r(-1):r(a.index)};return l.a.createElement(b.a,{fluid:!0,styled:!0,className:"accordian"},l.a.createElement(b.a.Title,{active:0===t,index:0,onClick:c,as:g.a},l.a.createElement(x.a,{name:"dropdown"}),"Special Combination Plates"),l.a.createElement(b.a.Content,{active:0===t},l.a.createElement(I,null)),l.a.createElement(b.a.Title,{active:1===t,index:1,onClick:c,as:g.a},l.a.createElement(x.a,{name:"dropdown"}),"Full Court Dinner"),l.a.createElement(b.a.Content,{active:1===t},l.a.createElement("h6",{style:{margin:0,left:"15px",position:"relative"}},"Minimum $2.00 charge for substitutions"),l.a.createElement(P,null)),l.a.createElement(b.a.Title,{active:2===t,index:2,onClick:c,as:g.a},l.a.createElement(x.a,{name:"dropdown"}),"Appetizers"),l.a.createElement(b.a.Content,{active:2===t},l.a.createElement(N,null)),l.a.createElement(b.a.Title,{active:3===t,index:3,onClick:c,as:g.a},l.a.createElement(x.a,{name:"dropdown"}),"Rice (One size only)"),l.a.createElement(b.a.Content,{active:3===t},l.a.createElement(M,null)),l.a.createElement(b.a.Title,{active:4===t,index:4,onClick:c,as:g.a},l.a.createElement(x.a,{name:"dropdown"}),"Sweet And Sour"),l.a.createElement(b.a.Content,{active:4===t},l.a.createElement(A,null)),l.a.createElement(b.a.Title,{active:5===t,index:5,onClick:c,as:g.a},l.a.createElement(x.a,{name:"dropdown"}),"Egg Foo Young (grilled)"),l.a.createElement(b.a.Content,{active:5===t},l.a.createElement(z,null)),l.a.createElement(b.a.Title,{active:6===t,as:g.a,index:6,onClick:c},l.a.createElement(x.a,{name:"dropdown"}),"Vegetable and Almonds"),l.a.createElement(b.a.Content,{active:6===t},l.a.createElement(W,null)),l.a.createElement(b.a.Title,{active:7===t,as:g.a,index:7,onClick:c},l.a.createElement(x.a,{name:"dropdown"}),"Chow Mein/Chop Suey"),l.a.createElement(b.a.Content,{active:7===t},l.a.createElement(F,null)),l.a.createElement(b.a.Title,Object(f.a)({active:8===t,as:g.a,index:8,onClick:c},"as",g.a),l.a.createElement(x.a,{name:"dropdown"}),"Cantonese Style"),l.a.createElement(b.a.Content,{active:8===t},l.a.createElement(G,null)),l.a.createElement(b.a.Title,{active:9===t,as:g.a,index:9,onClick:c},l.a.createElement(x.a,{name:"dropdown"}),"Soups"),l.a.createElement(b.a.Content,{active:9===t},l.a.createElement(H,null)),l.a.createElement(b.a.Title,{active:10===t,as:g.a,index:10,onClick:c},l.a.createElement(x.a,{name:"dropdown"}),"Canadian Dishes"),l.a.createElement(b.a.Content,{active:10===t},l.a.createElement(R,null)))},q={top:"5%",width:"90%",height:"80%"},U=function(){return l.a.createElement(h.a,{trigger:l.a.createElement(p.a.Item,{position:"left"},l.a.createElement("div",{className:"text-white text-lg"},"Menu")),closeIcon:!0,style:q},l.a.createElement(h.a.Content,{style:{maxHeight:"calc(100vh - 10em)",overflow:"auto"}},l.a.createElement(g.a,{as:"h2"},"Menu"),l.a.createElement(D,null),l.a.createElement(g.a,{sub:!0,as:"h6"},"Prices are subject to change.**")))},L=t(71),_=t(72),Y=t(73),V=t(74),B=t(76),$=t(127),J=t.n($),Z=(t(461),t(1533)),K=t(1525),X=(t(1508),{position:"relative"}),Q={isLoading:!1,results:[],value:""},ee=function(e){function a(){var e,t;Object(L.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(Y.a)(this,(e=Object(V.a)(a)).call.apply(e,[this].concat(l)))).state=Q,t.getAllDishes=function(e){var a=e.dishes,t=e.combinations,n=e.dinners,l=[];return Object.values(a).forEach((function(e){Object.values(e).forEach((function(e){var a={title:e.name,description:e.description,price:e.price};l.push(a)}))})),Object.values(t).forEach((function(e){var a={title:e.name,description:e.description,price:e.price};l.push(a)})),Object.values(n).forEach((function(e){var a={title:e.name,description:e.description,price:e.price};l.push(a)})),l},t.handleResultSelect=function(e,a){var n=a.result;return t.setState({value:n.title})},t.handleSearchChange=function(e,a){var n=a.value;t.setState({isLoading:!0,value:n}),setTimeout((function(){if(t.state.value.length<1)return t.setState(Q);var e=new RegExp(J.a.escapeRegExp(t.state.value),"i");t.setState({isLoading:!1,results:J.a.filter(t.getAllDishes(t.context[0]),(function(a){return e.test(a.title)}))})}),300)},t}return Object(B.a)(a,e),Object(_.a)(a,[{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.value,n=e.results;return l.a.createElement(Z.a,null,l.a.createElement(Z.a.Column,{width:4,style:X},l.a.createElement("div",null,l.a.createElement(K.a,Object.assign({aligned:"left",loading:a,onSearchChange:J.a.debounce(this.handleSearchChange,500,{leading:!0}),results:n,value:t},this.props)))))}}]),a}(n.Component);ee.contextType=O;var ae=function(){return l.a.createElement(E.a,Object.assign({as:p.a},E.a.onlyMobile,{style:{background:"#b82e26",padding:"3%",fontSize:".90rem"}}),l.a.createElement(U,null),l.a.createElement(ee,{style:{right:"100%",position:"relative"}}))},te=function(){return l.a.createElement(E.a,Object.assign({as:p.a},E.a.onlyMobile,{style:{background:"#b82e26",padding:"3%"}}),l.a.createElement(U,null),l.a.createElement(ee,{style:{right:"100%",position:"relative"}}))},ne=function(e){return l.a.createElement(d.a,{queries:{small:"(max-width: 320px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.small&&l.a.createElement(ae,null),!e.small&&l.a.createElement(te,null))}))},le=function(){var e="text-sm sm:text-2xl hover:font-semibold text-white";return l.a.createElement("div",{style:{background:"#b82e26"},className:"flex text-white justify-around py-4"},l.a.createElement(p.a.Item,{className:"flex flex-col justify-center"},l.a.createElement(i.b,{to:"/"},l.a.createElement("div",{className:"".concat(e)},"HOME"))),l.a.createElement(p.a.Item,{name:"Menu",className:"flex flex-col justify-center"},l.a.createElement(i.b,{to:"/menu"},l.a.createElement("div",{className:"".concat(e)},"MENU"))),l.a.createElement(p.a.Item,{name:"Menu",className:"flex flex-col justify-center"},l.a.createElement(i.b,{to:""},l.a.createElement("div",{className:"".concat(e)},"VISIT US"))),l.a.createElement(p.a.Item,{name:"Menu",className:"flex flex-col justify-center"},l.a.createElement(i.b,{to:""},l.a.createElement("div",{className:"".concat(e)}," HOURS"))),l.a.createElement(p.a.Menu,{className:"flex flex-col justify-center"},l.a.createElement(p.a.Item,null,l.a.createElement(ee,null))))},re=function(e){e.menuItems;var a=Object(n.useContext)(O),t=Object(s.a)(a,2),r=t[0];t[1];return l.a.createElement("div",null,l.a.createElement(u.a.Group,null,l.a.createElement(d.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.mobile&&l.a.createElement("div",null,l.a.createElement(ne,{menu:r})),!e.mobile&&l.a.createElement("div",null,l.a.createElement(le,{menu:r})))}))))},ce=t(259),ie=function(){return l.a.createElement("div",{className:"flex w-screen justify-center"},l.a.createElement(ce.a,{url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7025.307316203426!2d-77.14187548434793!3d44.00714172541031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d7ca541acadc9d%3A0xe6740b299f5e525e!2s155%20Picton%20Main%20St%2C%20Prince%20Edward%2C%20ON!5e0!3m2!1sen!2sca!4v1581291195493!5m2!1sen!2sca",width:"100%",height:"450px",id:"myId"}))},oe=t(1534),me=function(e){var a=e.setDefaultFalse,t=Object(n.useState)(0),r=Object(s.a)(t,2),c=r[0],o=r[1];return l.a.createElement(oe.a,{as:b.a,animation:"push",icon:"labeled",vertical:!0,visible:!0,styled:!0,style:{background:"#f0f0f0"}},l.a.createElement(i.b,{to:"/menu/combinations"},l.a.createElement(b.a.Title,{onClick:a},l.a.createElement(x.a,null),"Special Combination Plates")),l.a.createElement(i.b,{to:"/menu/fullcourse"},l.a.createElement(b.a.Title,{onClick:a},l.a.createElement(x.a,null),"Full Course Dinners")),l.a.createElement(b.a.Title,{active:1===c,index:1,onClick:function(e,a){var t=a.index;o(c===t?-1:t)}},l.a.createElement(x.a,{name:"dropdown"}),"Main Dishes"),l.a.createElement(b.a.Content,{active:1===c,styled:!1},l.a.createElement(b.a,{style:{boxShadow:"none",background:"#f0f0f0"}},l.a.createElement(i.b,{to:"/menu/soups"},l.a.createElement(b.a.Title,{onClick:a},"Soups")),l.a.createElement(i.b,{to:"/menu/appetizers"},l.a.createElement(b.a.Title,{onClick:a},"Appetizers")),l.a.createElement(i.b,{to:"/menu/rice"},l.a.createElement(b.a.Title,{onClick:a},"Rice (One size)")),l.a.createElement(i.b,{to:"/menu/eggFooYoung"},l.a.createElement(b.a.Title,{onClick:a},"Egg Foo Young (Grilled)")),l.a.createElement(i.b,{to:"/menu/chowMein"},l.a.createElement(b.a.Title,{onClick:a},"Chow Mein (Dry noodles)/Chop Suey")),l.a.createElement(i.b,{to:"/menu/sweetAndSour"},l.a.createElement(b.a.Title,{onClick:a},"Sweet and Sour")),l.a.createElement(i.b,{to:"/menu/vegtablesAndAlmonds"},l.a.createElement(b.a.Title,{onClick:a},"Vegetables and Almonds")),l.a.createElement(i.b,{to:"/menu/cantonese"},l.a.createElement(b.a.Title,{onClick:a},"Cantonese Style")),l.a.createElement(i.b,{to:"/menu/canadian"},l.a.createElement(b.a.Title,{onClick:a},"Canadian Dishes")))))},se={paddingLeft:"50px",paddingRight:"300px",paddingTop:"50px",paddingBottom:"50px",height:"450px"},ue=function(){var e=se;return l.a.createElement(oe.a.Pusher,{style:{padding:" 2% 5%",overflow:"auto"},className:"text-white"},l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/menu"},l.a.createElement(u.a,{basic:!0},l.a.createElement("div",{className:"text-4xl py-8"},"Special Combinations Plates"),l.a.createElement(y.a.Meta,null,"No substitutions within combinations plates. Get $1 off betwean 11:30am-2pm",l.a.createElement("div",null,"Prices are subject to change.**"))),l.a.createElement("div",{style:e},l.a.createElement(I,null))),l.a.createElement(o.a,{path:"/menu/combinations"},l.a.createElement(u.a,{basic:!0},l.a.createElement("div",{className:"text-4xl py-8"},"Special Combinations Plates"),l.a.createElement(y.a.Meta,null,"No substitutions within combinations plates. Get $1 off betwean 11:30am-2pm",l.a.createElement("div",null,"Prices are subject to change.**"))),l.a.createElement("div",{style:e},l.a.createElement(I,null))),l.a.createElement(o.a,{path:"/menu/fullcourse"},l.a.createElement(u.a,{basic:!0},l.a.createElement("div",{className:"text-4xl py-8"},"Full Course Meals"),l.a.createElement(y.a.Meta,null,"Appetizers cannot be substituted. Other substitutions require minimum $2.00 charge**.",l.a.createElement("div",null,"Prices are subject to change.**"))),l.a.createElement("div",{style:e},l.a.createElement(P,null))),l.a.createElement(o.a,{path:"/menu/soups"},l.a.createElement(u.a,{basic:!0},l.a.createElement("div",{className:"text-4xl py-8"},"Soups"),l.a.createElement(y.a.Meta,null,l.a.createElement("div",null,"Prices are subject to change.**"))),l.a.createElement("div",{style:e},l.a.createElement(H,null))),l.a.createElement(o.a,{path:"/menu/appetizers"},l.a.createElement(u.a,{basic:!0},l.a.createElement("div",{className:"text-4xl py-8"},"Appetizers"),l.a.createElement(y.a.Meta,null,l.a.createElement("div",null,"Prices are subject to change.**"))),l.a.createElement("div",{style:e},l.a.createElement(N,null))),l.a.createElement(o.a,{path:"/menu/rice"},l.a.createElement(u.a,{basic:!0},l.a.createElement("div",{className:"text-4xl py-8"},"Rice (One size only)"),l.a.createElement(y.a.Meta,null,l.a.createElement("div",null,"Prices are subject to change.**"))),l.a.createElement("div",{style:e},l.a.createElement(M,null))),l.a.createElement(o.a,{path:"/menu/eggFooYoung"},l.a.createElement(u.a,{basic:!0},l.a.createElement("div",{className:"text-4xl py-8"},"Egg Foo Young (Grilled)"),l.a.createElement(y.a.Meta,null,l.a.createElement("div",null,"Prices are subject to change.**"))),l.a.createElement("div",{style:e},l.a.createElement(z,null))),l.a.createElement(o.a,{path:"/menu/chowMein"},l.a.createElement(u.a,{basic:!0},l.a.createElement("div",{className:"text-4xl py-8"},"Chow Mein (Dry noodles)/Chop Suey"),l.a.createElement(y.a.Meta,null,l.a.createElement("div",null,"Prices are subject to change.**"))),l.a.createElement("div",{style:e},l.a.createElement(F,null))),l.a.createElement(o.a,{path:"/menu/sweetAndSour"},l.a.createElement(u.a,{basic:!0},l.a.createElement("div",{className:"text-4xl py-8"},"Sweet and Sour"),l.a.createElement(y.a.Meta,null,l.a.createElement("div",null,"Prices are subject to change.**"))),l.a.createElement("div",{style:e},l.a.createElement(A,null))),l.a.createElement(o.a,{path:"/menu/vegtablesAndAlmonds"},l.a.createElement(u.a,{basic:!0},l.a.createElement("div",{className:"text-4xl py-8"},"Vegetables and Almonds"),l.a.createElement(y.a.Meta,null,l.a.createElement("div",null,"Prices are subject to change.**"))),l.a.createElement("div",{style:e},l.a.createElement(W,null))),l.a.createElement(o.a,{path:"/menu/cantonese"},l.a.createElement(u.a,{basic:!0},l.a.createElement("div",{className:"text-4xl py-8"},"Cantonese Style"),l.a.createElement(y.a.Meta,null,l.a.createElement("div",null,"Prices are subject to change.**"))),l.a.createElement("div",{style:e},l.a.createElement(G,null))),l.a.createElement(o.a,{path:"/menu/canadian"},l.a.createElement(u.a,{basic:!0},l.a.createElement("div",{className:"text-4xl py-8"},"Canadian Dishes"),l.a.createElement(y.a.Meta,null,l.a.createElement("div",null,"Prices are subject to change.**"))),l.a.createElement("div",{style:e},l.a.createElement(R,null)))))},de={height:"700px",backgroundImage:'linear-gradient(\n      rgba(0, 0, 0, 0.5),\n      rgba(0, 0, 0, 0.5)\n    ),url("https://scontent-ort2-2.xx.fbcdn.net/v/t1.15752-9/90638527_2542059202721532_3598802648356093952_n.png?_nc_cat=106&_nc_sid=b96e70&_nc_ohc=c5iOBlIIPsUAX_z4-zw&_nc_ht=scontent-ort2-2.xx&oh=73412c67136a40e2e6151d3719d87da2&oe=5EA3FC74")'},Ee=function(){var e=de,a=Object(n.useState)(!0),t=Object(s.a)(a,2),r=(t[0],t[1]);return l.a.createElement(i.a,null,l.a.createElement(oe.a.Pushable,{style:e},l.a.createElement(me,{setDefaultFalse:function(){console.log("TURNING OFF DEFAULT"),r(!1)}}),l.a.createElement(ue,null)))},pe=function(e){var a={top:"5%",width:"90%",height:"80%"};return l.a.createElement("div",{style:{height:"600px"},className:"flex flex-col justify-center text-white"},l.a.createElement("div",{className:"flex justify-center p-8"},l.a.createElement("div",{style:{backgroundColor:"#b82e26"},className:"px-8 py-24 rounded-full text-4xl opacity-75"},l.a.createElement("div",{className:"flex justify-center text-white opacity-100"},"GOLDEN INN"),l.a.createElement("div",{className:"flex justify-center pt-2 opacity-100"},"RESTAURANT"))),l.a.createElement("div",{className:"flex justify-center text-lg text-center p-4"},"SERVING AUTHENTIC CANTONESE STYLE CHINESE FOOD FOR 25 YEARS"),l.a.createElement("div",{className:"flex justify-center text-black p-2"},l.a.createElement("a",{href:"tel:+613-476-7056"},l.a.createElement("div",{className:"bg-white opacity-75 hover:opacity-100 p-4 px-12 mr-2 font-semibold hover:text-black"},"Order")),l.a.createElement("div",{className:"bg-white opacity-75 hover:opacity-100 p-4 px-12 ml-2"},l.a.createElement(d.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.mobile&&l.a.createElement("div",null,l.a.createElement(h.a,{trigger:l.a.createElement("div",{className:"text-black text-lg"},"Menu"),closeIcon:!0,style:a},l.a.createElement(h.a.Content,{style:{maxHeight:"calc(100vh - 10em)",overflow:"auto"}},l.a.createElement(g.a,{as:"h2"},"Menu"),l.a.createElement(D,null),l.a.createElement(g.a,{sub:!0,as:"h6"},"Prices are subject to change.**")))),!e.mobile&&l.a.createElement(i.b,{to:"/menu",className:"font-semibold hover:text-black"},"Menu"))})))))},he=[{day:"Mon",hours:"Closed"},{day:"Tue",hours:"11:30 a.m. \u2013 09:00 p.m."},{day:"Wed",hours:"11:30 a.m. \u2013 09:00 p.m."},{day:"Thurs",hours:"11:30 a.m. \u2013 09:00 p.m."},{day:"Fri",hours:"11:30 a.m. \u2013 09:00 p.m."},{day:"Sat",hours:"11:30 a.m. \u2013 09:00 p.m."},{day:"Sun",hours:"11:30 a.m. \u2013 09:00 p.m."}],ge=function(e){return l.a.createElement("div",{style:{height:"600px"},className:"flex flex-col w-screen justify-evenly text-white"},l.a.createElement("div",{className:"flex justify-center text-5xl"},"VISIT US"),l.a.createElement("div",{className:"flex justify-center text-xl text-center p-4"},"155 Main Street West, Picton, Prince Edward, ON, Canada"),l.a.createElement("div",{className:"flex justify-center text-xl"},"613-476-7056"),l.a.createElement("div",{className:"flex justify-center"},l.a.createElement("a",{href:"tel:+613-476-7056"},l.a.createElement("div",{className:"rounded-full p-4 shadow bg-red-700 opacity-75 hover:opacity-100 font-semibold hover:text-white"},"CALL TO PLACE YOUR ORDER"))),l.a.createElement("div",{className:"flex justify-center text-xl"},"Hours of Operation"),l.a.createElement("div",{className:"flex justify-center text-lg"},l.a.createElement("div",{className:"flex flex-col justify-center"},he.map((function(e){return l.a.createElement("div",{className:"flex justify-end p-2"},l.a.createElement("div",null,e.day))}))),l.a.createElement("div",{className:"w-12"}),l.a.createElement("div",{className:"flex flex-col justify-center"},he.map((function(e){return l.a.createElement("div",{className:"flex justify-center p-2"},l.a.createElement("div",null,e.hours))})))))},fe=t(1527),be={backgroundColor:{backgroundImage:'linear-gradient(\n    rgba(0, 0, 0, 0.5),\n    rgba(0, 0, 0, 0.5)\n  ),url("https://firebasestorage.googleapis.com/v0/b/the-golden-inn-restaurant.appspot.com/o/goldenInnBackground.png?alt=media&token=c031b198-7ddc-4881-94e9-b61866bc15ca")'}};var xe=function(e){var a=be.backgroundColor;return m.a.initialize("UA-160054958-1"),m.a.pageview("/"),l.a.createElement("div",{style:a},l.a.createElement(pe,null),l.a.createElement(ge,null),l.a.createElement(ie,null))};var ve=function(){return l.a.createElement(i.a,{style:be.backgroundColor},l.a.createElement("div",{style:be.backgroundColor,className:"font-advent"},l.a.createElement(S,null,l.a.createElement(re,null),l.a.createElement(fe.a,{warning:!0,style:{textAlign:"center",margin:"0"}},l.a.createElement(fe.a.Header,null,"Changes in Service"),l.a.createElement("p",{className:"font-sans"},"We will only be doing"," ",l.a.createElement("a",{style:{fontSize:"1.2em",color:"black"}},"take-out")," and are suspending all dine-in services to aid in slowing the COVID-19 virus outbreak. We apologize for any inconvenience.")),l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/"},l.a.createElement(xe,null)),l.a.createElement(o.a,{path:"/menu"},l.a.createElement(Ee,null))))))},ye=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function we(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(1511);c.a.render(l.a.createElement(ve,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");ye?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):we(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):we(a,e)}))}}()},271:function(e,a,t){e.exports=t(1512)},279:function(e,a,t){}},[[271,1,2]]]);
//# sourceMappingURL=main.627024cf.chunk.js.map