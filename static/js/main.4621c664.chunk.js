(this["webpackJsonpthe-golden-inn"]=this["webpackJsonpthe-golden-inn"]||[]).push([[0],{1435:function(e,a,t){},1436:function(e,a,t){},1479:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(58),c=t.n(l),o=(t(254),t(17)),i=(t(258),t(23)),m=t(45),s=(t(259),t(238)),u=t(1496),E=function(){return r.a.createElement("div",{className:"divStyle",style:{height:"250px"}},r.a.createElement(s.a,{src:"https://img1.wsimg.com/isteam/stock/107160/:/rs=h:1026",className:"image",style:{width:"100%",filter:"brightness(55%)"}}),r.a.createElement("div",{style:{position:"relative",left:"50%",transform:"translate(-50%, -125%)",padding:"5%"}},r.a.createElement(o.a,{queries:{small:"(max-width: 320px)"}},(function(e){return r.a.createElement(n.Fragment,null,e.small&&r.a.createElement(u.a,{size:"huge",style:{color:"white",position:"absolute",top:"-40%"}},"WELCOME TO THE GOLDEN INN"),!e.small&&r.a.createElement(u.a,{size:"huge",style:{color:"white"}},"WELCOME TO THE GOLDEN INN"))})),r.a.createElement(u.a,{size:"small",style:{color:"white"}},"Serving authentic Chinese food for over 25 years")))},d=t(1501),h=t(1494),p=t(68),g=t(69),f=t(70),y=t(71),b=t(72),v=t(120),C=t.n(v),w=(t(346),t(1497)),x=t(1491),O=t(16),S=t(149),k=t.n(S);console.log("the-golden-inn-restaurant"),k.a.initializeApp({apiKey:"AIzaSyCEjL7ZIpn9SUG8raac9BtH18ZONAD_3hc",authDomain:"the-golden-inn-restaurant.firebaseapp.com",projectId:"the-golden-inn-restaurant"});var j=k.a.firestore(),T=r.a.createContext([{},function(){}]),W=function(e){var a=Object(n.useState)({}),t=Object(O.a)(a,2),l=t[0],c=t[1];return Object(n.useEffect)((function(){j.collection("menu-items").get().then((function(e){e.forEach((function(e){c(e.data())}))}))}),[]),r.a.createElement(T.Provider,{value:[l,c]},e.children)},z={position:"relative"},A={isLoading:!1,results:[],value:""},H=function(e){function a(){var e,t;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(f.a)(this,(e=Object(y.a)(a)).call.apply(e,[this].concat(r)))).state=A,t.getAllDishes=function(e){var a=e.dishes,t=e.combinations,n=e.dinners,r=[];return Object.values(a).forEach((function(e){Object.values(e).forEach((function(e){var a={title:e.name,description:e.description,price:e.price};r.push(a)}))})),Object.values(t).forEach((function(e){var a={title:e.name,description:e.description,price:e.price};r.push(a)})),Object.values(n).forEach((function(e){var a={title:e.name,description:e.description,price:e.price};r.push(a)})),r},t.handleResultSelect=function(e,a){var n=a.result;return t.setState({value:n.title})},t.handleSearchChange=function(e,a){var n=a.value;t.setState({isLoading:!0,value:n}),setTimeout((function(){if(t.state.value.length<1)return t.setState(A);var e=new RegExp(C.a.escapeRegExp(t.state.value),"i");t.setState({isLoading:!1,results:C.a.filter(t.getAllDishes(t.context[0]),(function(a){return e.test(a.title)}))})}),300)},t}return Object(b.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.value,n=e.results;return r.a.createElement(w.a,null,r.a.createElement(w.a.Column,{width:4,style:z},r.a.createElement("div",null,r.a.createElement(x.a,Object.assign({aligned:"left",loading:a,onSearchChange:C.a.debounce(this.handleSearchChange,500,{leading:!0}),results:n,value:t},this.props)))))}}]),a}(n.Component);H.contextType=T;var F={background:"#d9c8b5",padding:"0 2em"},G=function(){var e=F;return r.a.createElement(d.a,Object.assign({as:h.a},d.a.onlyComputer,{style:e,fluid:!0,secondary:!0}),r.a.createElement(h.a.Item,null,r.a.createElement(i.b,{to:"/"},r.a.createElement(u.a,null,"The Golden Inn"))),r.a.createElement(h.a.Menu,{position:"right"},r.a.createElement(h.a.Item,{name:"Menu"},r.a.createElement(i.b,{to:"/menu"},r.a.createElement(u.a,{as:"h4"},"Menu"))),r.a.createElement(h.a.Item,{name:"About"},r.a.createElement(u.a,{as:"h4"},"About")),r.a.createElement(h.a.Item,null,r.a.createElement(H,null))))},N={textAlign:"center",position:"relative",textShadow:"0 1px black"},M={width:"100%",height:"500px",filter:"brightness(55%)",objectFit:"cover"},I={position:"relative",left:"50%",transform:"translate(-50%, -125%)",padding:"5%"},D={color:"white",fontSize:"2.3em"},q=function(e){var a=N,t=M,n=D,l=I;return r.a.createElement("div",{style:a},r.a.createElement(s.a,{src:"https://img1.wsimg.com/isteam/stock/107160/:/rs=h:1026",className:"image",style:t}),r.a.createElement("div",{style:l},r.a.createElement(u.a,{size:"huge",style:n},"WELCOME TO THE GOLDEN INN"),r.a.createElement(u.a,{size:"small",style:n},"Serving authentic Chinese food for over 25 years")))},L=t(1493),P=t(1488),R=(t(1435),function(){return r.a.createElement("div",{className:"visitUsDivStyle"},r.a.createElement(u.a,{size:"large",style:{color:"black"}},"VISIT US"),r.a.createElement(u.a,{size:"tiny",style:{color:"black",fontWeight:"365",textShadow:"0 1px grey"}},"155 Main Street West, Picton, Prince Edward, ON, Canada"),r.a.createElement(u.a,{size:"medium"},"613-476-7056"),r.a.createElement("a",{href:"tel:+613-476-7056"},r.a.createElement(L.a,{color:"google plus"},"Call to place your order")),r.a.createElement(u.a,{size:"medium"},"Hours of operation"),r.a.createElement(P.a,{basic:"very",celled:!0,collapsing:!0,className:"hoursOfOperationsStyle"},r.a.createElement(P.a.Body,{className:"hoursOfOperationsTableBodyStyle"},[{day:"Mon",hours:"Closed"},{day:"Tue",hours:"11:30 a.m. \u2013 09:00 p.m."},{day:"Wed",hours:"11:30 a.m. \u2013 09:00 p.m."},{day:"Thurs",hours:"11:30 a.m. \u2013 09:00 p.m."},{day:"Fri",hours:"11:30 a.m. \u2013 09:00 p.m."},{day:"Sat",hours:"11:30 a.m. \u2013 09:00 p.m."},{day:"Sun",hours:"11:30 a.m. \u2013 09:00 p.m."}].map((function(e){return r.a.createElement(P.a.Row,{key:e.day},r.a.createElement(P.a.Cell,null,r.a.createElement("div",{className:"hoursOfOperationCellStyle"},r.a.createElement("span",{className:"hoursFontDay"},e.day),r.a.createElement("span",{style:{color:"black",fontWeight:365,textShadow:"0 1px grey",fontSize:"1em"}},e.hours))))})))))}),B=t(1498),U=t(1487),Y=t(27),V=(t(1436),t(1492)),J=t(46),Z=t(1490),K=function(){var e=Object(n.useContext)(T),a=Object(O.a)(e,2),t=a[0],l=(a[1],function(){if(t.dishes){var e=t.dishes.appetizers;return Object.values(e)}return[]});return r.a.createElement(o.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return r.a.createElement(n.Fragment,null,e.mobile&&r.a.createElement(B.a.Group,null,l().map((function(e){return r.a.createElement(B.a,{key:e.name},r.a.createElement(Z.a.Content,null,r.a.createElement(u.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),r.a.createElement(Z.a.Header,null,r.a.createElement(u.a,{as:"h4"},e.name)),e.description&&r.a.createElement(u.a,{as:"h5",color:"grey"},e.description)))}))),!e.mobile&&r.a.createElement(Z.a.Group,null,l().map((function(e){return r.a.createElement(Z.a,{key:e.name},r.a.createElement(Z.a.Content,null,r.a.createElement(u.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),r.a.createElement(Z.a.Header,null,r.a.createElement(u.a,{as:"h4"},e.name)),e.description&&r.a.createElement(u.a,{as:"h5",color:"grey"},e.description)))}))))}))},$=function(){var e=Object(n.useContext)(T),a=Object(O.a)(e,2),t=a[0],l=(a[1],function(){if(t.dishes){var e=t.dishes.Rice;return Object.values(e)}return[]});return r.a.createElement(o.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return r.a.createElement(n.Fragment,null,e.mobile&&r.a.createElement(B.a.Group,null,l().map((function(e){return r.a.createElement(B.a,{key:e.name},r.a.createElement(Z.a.Content,null,r.a.createElement(u.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),r.a.createElement(Z.a.Header,null,r.a.createElement(u.a,{as:"h4"},e.name)),e.description&&r.a.createElement(u.a,{as:"h5",color:"grey"},e.description)))}))),!e.mobile&&r.a.createElement(Z.a.Group,null,l().map((function(e){return r.a.createElement(Z.a,{key:e.name},r.a.createElement(Z.a.Content,null,r.a.createElement(u.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),r.a.createElement(Z.a.Header,null,r.a.createElement(u.a,{as:"h4"},e.name)),e.description&&r.a.createElement(u.a,{as:"h5",color:"grey"},e.description)))}))))}))},_=function(){var e=Object(n.useContext)(T),a=Object(O.a)(e,2),t=a[0],l=(a[1],function(){if(t.dishes){var e=t.dishes["sweet&Sour"];return Object.values(e)}return[]});return r.a.createElement(o.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return r.a.createElement(n.Fragment,null,e.mobile&&r.a.createElement(B.a.Group,null,l().map((function(e){return r.a.createElement(B.a,{key:e.name},r.a.createElement(Z.a.Content,null,r.a.createElement(u.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),r.a.createElement(Z.a.Header,null,r.a.createElement(u.a,{as:"h4"},e.name)),e.description&&r.a.createElement(u.a,{as:"h5",color:"grey"},e.description)))}))),!e.mobile&&r.a.createElement(Z.a.Group,null,l().map((function(e){return r.a.createElement(Z.a,{key:e.name},r.a.createElement(Z.a.Content,null,r.a.createElement(u.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),r.a.createElement(Z.a.Header,null,r.a.createElement(u.a,{as:"h4"},e.name)),e.description&&r.a.createElement(u.a,{as:"h5",color:"grey"},e.description)))}))))}))},Q=function(){var e=Object(n.useContext)(T),a=Object(O.a)(e,2),t=a[0],l=(a[1],function(){if(t.dishes){var e=t.dishes.eggFooYoung;return Object.values(e)}return[]});return r.a.createElement(o.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return r.a.createElement(n.Fragment,null,e.mobile&&r.a.createElement(B.a.Group,null,l().map((function(e){return r.a.createElement(B.a,{key:e.name},r.a.createElement(Z.a.Content,null,r.a.createElement(u.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),r.a.createElement(Z.a.Header,null,r.a.createElement(u.a,{as:"h4"},e.name)),e.description&&r.a.createElement(u.a,{as:"h5",color:"grey"},e.description)))}))),!e.mobile&&r.a.createElement(Z.a.Group,null,l().map((function(e){return r.a.createElement(Z.a,{key:e.name},r.a.createElement(Z.a.Content,null,r.a.createElement(u.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),r.a.createElement(Z.a.Header,null,r.a.createElement(u.a,{as:"h4"},e.name)),e.description&&r.a.createElement(u.a,{as:"h5",color:"grey"},e.description)))}))))}))},X=function(){var e=Object(n.useContext)(T),a=Object(O.a)(e,2),t=a[0],l=(a[1],function(){if(t.dishes){var e=t.dishes.vA;return Object.values(e)}return[]});return r.a.createElement(o.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return r.a.createElement(n.Fragment,null,e.mobile&&r.a.createElement(B.a.Group,null,l().map((function(e){return r.a.createElement(B.a,{key:e.name},r.a.createElement(Z.a.Content,null,r.a.createElement(u.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),r.a.createElement(Z.a.Header,null,r.a.createElement(u.a,{as:"h4"},e.name)),e.description&&r.a.createElement(u.a,{as:"h5",color:"grey"},e.description)))}))),!e.mobile&&r.a.createElement(Z.a.Group,null,l().map((function(e){return r.a.createElement(Z.a,{key:e.name},r.a.createElement(Z.a.Content,null,r.a.createElement(u.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),r.a.createElement(Z.a.Header,null,r.a.createElement(u.a,{as:"h4"},e.name)),e.description&&r.a.createElement(u.a,{as:"h5",color:"grey"},e.description)))}))))}))},ee=function(){var e=Object(n.useContext)(T),a=Object(O.a)(e,2),t=a[0],l=(a[1],function(){if(t.dishes){var e=t.dishes.chowMein;return Object.values(e)}return[]});return r.a.createElement(o.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return r.a.createElement(n.Fragment,null,e.mobile&&r.a.createElement(B.a.Group,null,l().map((function(e){return r.a.createElement(B.a,{key:e.name},r.a.createElement(Z.a.Content,null,r.a.createElement(u.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),r.a.createElement(Z.a.Header,null,r.a.createElement(u.a,{as:"h4"},e.name)),e.description&&r.a.createElement(u.a,{as:"h5",color:"grey"},e.description)))}))),!e.mobile&&r.a.createElement(Z.a.Group,null,l().map((function(e){return r.a.createElement(Z.a,{key:e.name},r.a.createElement(Z.a.Content,null,r.a.createElement(u.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),r.a.createElement(Z.a.Header,null,r.a.createElement(u.a,{as:"h4"},e.name)),e.description&&r.a.createElement(u.a,{as:"h5",color:"grey"},e.description)))}))))}))},ae=t(1489),te=function(){var e=Object(n.useContext)(T),a=Object(O.a)(e,2),t=a[0],l=(a[1],function(){if(t.dishes){var e=t.dishes.cantonese;return Object.values(e)}return[]});return r.a.createElement(o.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return r.a.createElement(n.Fragment,null,e.mobile&&r.a.createElement(ae.a,null,l().map((function(e){return r.a.createElement(ae.a.Item,{key:e.name},r.a.createElement(Z.a.Content,null,r.a.createElement(u.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),r.a.createElement(Z.a.Header,null,r.a.createElement(u.a,{as:"h4"},e.name)),e.description&&r.a.createElement(Z.a.Description,null,r.a.createElement(u.a,{as:"h5",color:"grey"},e.description))))}))),!e.mobile&&r.a.createElement(Z.a.Group,{style:{paddingBottom:"50px"}},l().map((function(e){return r.a.createElement(Z.a,{key:e.name},r.a.createElement(Z.a.Content,null,r.a.createElement(u.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),r.a.createElement(Z.a.Header,null,r.a.createElement(u.a,{as:"h4"},e.name)),e.description&&r.a.createElement(u.a,{as:"h5",color:"grey"},e.description)))}))))}))},ne=function(){var e=Object(n.useContext)(T),a=Object(O.a)(e,2),t=a[0],l=(a[1],function(){if(t.dishes){var e=t.dishes.soups;return Object.values(e)}return[]});return r.a.createElement(o.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return r.a.createElement(n.Fragment,null,e.mobile&&r.a.createElement(B.a.Group,null,l().map((function(e){return r.a.createElement(B.a,{key:e.name},r.a.createElement(Z.a.Content,null,r.a.createElement(u.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),r.a.createElement(Z.a.Header,null,r.a.createElement(u.a,{as:"h4"},e.name)),e.description&&r.a.createElement(u.a,{as:"h5",color:"grey"},e.description)))}))),!e.mobile&&r.a.createElement(Z.a.Group,null,l().map((function(e){return r.a.createElement(Z.a,{key:e.name},r.a.createElement(Z.a.Content,null,r.a.createElement(u.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),r.a.createElement(Z.a.Header,null,r.a.createElement(u.a,{as:"h4"},e.name)),e.description&&r.a.createElement(u.a,{as:"h5",color:"grey"},e.description)))}))))}))},re=function(){var e=Object(n.useContext)(T),a=Object(O.a)(e,2),t=a[0],l=(a[1],function(){if(t.combinations){var e=t.combinations;return Object.values(e)}return[]});return r.a.createElement(o.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return r.a.createElement(n.Fragment,null,e.mobile&&r.a.createElement(ae.a,null,l().map((function(e){return r.a.createElement(ae.a.Item,{key:e.name},r.a.createElement(Z.a.Content,null,r.a.createElement(u.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),r.a.createElement(Z.a.Header,null,r.a.createElement(u.a,{as:"h4"},e.name)),e.description&&r.a.createElement(Z.a.Description,null,r.a.createElement(u.a,{as:"h5",color:"grey"},e.description))))}))),!e.mobile&&r.a.createElement(Z.a.Group,null,l().map((function(e){return r.a.createElement(Z.a,{key:e.name},r.a.createElement(Z.a.Content,null,r.a.createElement(u.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),r.a.createElement(Z.a.Header,null,r.a.createElement(u.a,{as:"h4"},e.name)),e.description&&r.a.createElement(u.a,{as:"h5",color:"grey"},e.description)))}))))}))},le=function(){var e=Object(n.useContext)(T),a=Object(O.a)(e,2),t=a[0],l=(a[1],function(){if(t.dinners){var e=t.dinners;return Object.values(e)}return[]});return r.a.createElement(o.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return r.a.createElement(n.Fragment,null,e.mobile&&r.a.createElement(B.a.Group,null,l().map((function(e){return r.a.createElement(B.a,{key:e.name},r.a.createElement(Z.a.Content,null,r.a.createElement(u.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),r.a.createElement(Z.a.Header,null,r.a.createElement(u.a,{as:"h4"},e.name)),e.description&&r.a.createElement(u.a,{as:"h5",color:"grey"},e.description)))}))),!e.mobile&&r.a.createElement(Z.a.Group,null,l().map((function(e){return r.a.createElement(Z.a,{key:e.name},r.a.createElement(Z.a.Content,null,r.a.createElement(u.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),r.a.createElement(Z.a.Header,null,r.a.createElement(u.a,{as:"h4"},e.name)),e.description&&r.a.createElement(u.a,{as:"h5",color:"grey"},e.description)))}))))}))},ce=function(){var e=Object(n.useContext)(T),a=Object(O.a)(e,2),t=a[0],l=(a[1],function(){if(t.dishes){var e=t.dishes.canadian;return Object.values(e)}return[]});return r.a.createElement(o.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return r.a.createElement(n.Fragment,null,e.mobile&&r.a.createElement(B.a.Group,null,l().map((function(e){return r.a.createElement(B.a,{key:e.name},r.a.createElement(Z.a.Content,null,r.a.createElement(u.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),r.a.createElement(Z.a.Header,null,r.a.createElement(u.a,{as:"h4"},e.name)),e.description&&r.a.createElement(u.a,{as:"h5",color:"grey"},e.description)))}))),!e.mobile&&r.a.createElement(Z.a.Group,null,l().map((function(e){return r.a.createElement(Z.a,{key:e.name},r.a.createElement(Z.a.Content,null,r.a.createElement(u.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),r.a.createElement(Z.a.Header,null,r.a.createElement(u.a,{as:"h4"},e.name)),e.description&&r.a.createElement(u.a,{as:"h5",color:"grey"},e.description)))}))))}))},oe=function(){var e=Object(n.useState)(-1),a=Object(O.a)(e,2),t=a[0],l=a[1],c=function(e,a){a.index===t?l(-1):l(a.index)};return r.a.createElement(V.a,{fluid:!0,styled:!0,className:"accordian"},r.a.createElement(V.a.Title,{active:0===t,index:0,onClick:c,as:u.a},r.a.createElement(J.a,{name:"dropdown"}),"Special Combination Plates"),r.a.createElement(V.a.Content,{active:0===t},r.a.createElement(re,null)),r.a.createElement(V.a.Title,{active:1===t,index:1,onClick:c,as:u.a},r.a.createElement(J.a,{name:"dropdown"}),"Full Court Dinner"),r.a.createElement(V.a.Content,{active:1===t},r.a.createElement(le,null)),r.a.createElement(V.a.Title,{active:2===t,index:2,onClick:c,as:u.a},r.a.createElement(J.a,{name:"dropdown"}),"Appetizers"),r.a.createElement(V.a.Content,{active:2===t},r.a.createElement(K,null)),r.a.createElement(V.a.Title,{active:3===t,index:3,onClick:c,as:u.a},r.a.createElement(J.a,{name:"dropdown"}),"Rice (One size only)"),r.a.createElement(V.a.Content,{active:3===t},r.a.createElement($,null)),r.a.createElement(V.a.Title,{active:4===t,index:4,onClick:c,as:u.a},r.a.createElement(J.a,{name:"dropdown"}),"Sweet And Sour"),r.a.createElement(V.a.Content,{active:4===t},r.a.createElement(_,null)),r.a.createElement(V.a.Title,{active:5===t,index:5,onClick:c,as:u.a},r.a.createElement(J.a,{name:"dropdown"}),"Egg Foo Young (grilled)"),r.a.createElement(V.a.Content,{active:5===t},r.a.createElement(Q,null)),r.a.createElement(V.a.Title,{active:6===t,as:u.a,index:6,onClick:c},r.a.createElement(J.a,{name:"dropdown"}),"Vegetable and Almonds"),r.a.createElement(V.a.Content,{active:6===t},r.a.createElement(X,null)),r.a.createElement(V.a.Title,{active:7===t,as:u.a,index:7,onClick:c},r.a.createElement(J.a,{name:"dropdown"}),"Chow Mein/Chop Suey"),r.a.createElement(V.a.Content,{active:7===t},r.a.createElement(ee,null)),r.a.createElement(V.a.Title,Object(Y.a)({active:8===t,as:u.a,index:8,onClick:c},"as",u.a),r.a.createElement(J.a,{name:"dropdown"}),"Cantonese Style"),r.a.createElement(V.a.Content,{active:8===t},r.a.createElement(te,null)),r.a.createElement(V.a.Title,{active:9===t,as:u.a,index:9,onClick:c},r.a.createElement(J.a,{name:"dropdown"}),"Soups"),r.a.createElement(V.a.Content,{active:9===t},r.a.createElement(ne,null)),r.a.createElement(V.a.Title,{active:10===t,as:u.a,index:10,onClick:c},r.a.createElement(J.a,{name:"dropdown"}),"Canadian Dishes"),r.a.createElement(V.a.Content,{active:10===t},r.a.createElement(ce,null)))},ie={top:"5%",width:"90%",height:"80%"},me=function(){return r.a.createElement(U.a,{trigger:r.a.createElement(h.a.Item,{position:"left"},"Menu"),closeIcon:!0,style:ie,dimmer:"blurring"},r.a.createElement(U.a.Content,{style:{maxHeight:"calc(100vh - 10em)",overflow:"auto"}},r.a.createElement(u.a,{content:"Menu"}),r.a.createElement(oe,null)))},se=function(){return r.a.createElement(d.a,Object.assign({as:h.a},d.a.onlyMobile,{style:{background:"#d9c8b5",padding:"3%",fontSize:".90rem"}}),r.a.createElement(me,null),r.a.createElement(H,{style:{right:"100%",position:"relative"}}))},ue=function(){return r.a.createElement(d.a,Object.assign({as:h.a},d.a.onlyMobile,{style:{background:"#d9c8b5",padding:"3%"}}),r.a.createElement(me,null),r.a.createElement(H,{style:{right:"100%",position:"relative"}}))},Ee=function(e){return r.a.createElement(o.a,{queries:{small:"(max-width: 320px)"}},(function(e){return r.a.createElement(n.Fragment,null,e.small&&r.a.createElement(se,null),!e.small&&r.a.createElement(ue,null))}))},de=function(e){e.menuItems;var a=Object(n.useContext)(T),t=Object(O.a)(a,2),l=t[0];t[1];return r.a.createElement("div",null,r.a.createElement(B.a.Group,null,r.a.createElement(Ee,{menu:l}),r.a.createElement(G,{menu:l})))},he=t(236),pe=function(){return r.a.createElement("div",null,r.a.createElement(he.a,{url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7025.307316203426!2d-77.14187548434793!3d44.00714172541031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d7ca541acadc9d%3A0xe6740b299f5e525e!2s155%20Picton%20Main%20St%2C%20Prince%20Edward%2C%20ON!5e0!3m2!1sen!2sca!4v1581291195493!5m2!1sen!2sca",width:"100%",height:"450px",id:"myId"}))},ge={position:"relative",bottom:"200px",fontSize:"1.5em"},fe={color:"black"},ye={color:"black",fontWeight:"365",textShadow:"0 1px grey"},be={color:"black",fontWeight:365,textShadow:"0 1px grey",fontSize:"1em"},ve={padding:0,width:"50%",display:"inline-table"},Ce=function(){var e=ge,a=fe,t=be,n=ye,l=ve;return r.a.createElement("div",{className:"visitUsDivStyle",style:e},r.a.createElement(u.a,{size:"large",style:a},"VISIT US"),r.a.createElement(u.a,{size:"tiny",style:n},"155 Main Street West, Picton, Prince Edward, ON, Canada"),r.a.createElement(u.a,{size:"medium"},"613-476-7056"),r.a.createElement("a",{href:"tel:+613-476-7056"},r.a.createElement(L.a,{color:"google plus"},"Call to place your order")),r.a.createElement(u.a,{size:"medium"},"Hours of operation"),r.a.createElement(P.a,{basic:"very",celled:!0,collapsing:!0,style:l,size:"large"},r.a.createElement(P.a.Body,{className:"hoursOfOperationsTableBodyStyle"},[{day:"Mon",hours:"Closed"},{day:"Tue",hours:"11:30 a.m. \u2013 09:00 p.m."},{day:"Wed",hours:"11:30 a.m. \u2013 09:00 p.m."},{day:"Thurs",hours:"11:30 a.m. \u2013 09:00 p.m."},{day:"Fri",hours:"11:30 a.m. \u2013 09:00 p.m."},{day:"Sat",hours:"11:30 a.m. \u2013 09:00 p.m."},{day:"Sun",hours:"11:30 a.m. \u2013 09:00 p.m."}].map((function(e){return r.a.createElement(P.a.Row,{key:e.day},r.a.createElement(P.a.Cell,null,r.a.createElement("div",{className:"hoursOfOperationCellStyle"},r.a.createElement("span",{className:"hoursFontDay"},e.day),r.a.createElement("span",{style:t},e.hours))))})))))},we=t(1499),xe=function(){var e=Object(n.useState)(0),a=Object(O.a)(e,2),t=a[0],l=a[1];return r.a.createElement(we.a,{as:V.a,animation:"push",icon:"labeled",vertical:!0,visible:!0,styled:!0,style:{background:"#f0f0f0"}},r.a.createElement(i.b,{to:"/menu/combinations"},r.a.createElement(V.a.Title,null,r.a.createElement(J.a,null),"Special Combination Plates")),r.a.createElement(i.b,{to:"/menu/fullcourse"},r.a.createElement(V.a.Title,null,r.a.createElement(J.a,null),"Full Course Dinners")),r.a.createElement(V.a.Title,{active:1===t,index:1,onClick:function(e,a){var n=a.index;l(t===n?-1:n)}},r.a.createElement(J.a,{name:"dropdown"}),"Main Dishes"),r.a.createElement(V.a.Content,{active:1===t,styled:!1},r.a.createElement(V.a,{style:{boxShadow:"none",background:"#f0f0f0"}},r.a.createElement(i.b,{to:"/menu/soups"},r.a.createElement(V.a.Title,null,"Soups")),r.a.createElement(i.b,{to:"/menu/appetizers"},r.a.createElement(V.a.Title,null,"Appetizers")),r.a.createElement(i.b,{to:"/menu/rice"},r.a.createElement(V.a.Title,null,"Rice (One size)")),r.a.createElement(i.b,{to:"/menu/eggFooYoung"},r.a.createElement(V.a.Title,null,"Egg Foo Young (Grilled)")),r.a.createElement(i.b,{to:"/menu/chowMein"},r.a.createElement(V.a.Title,null,"Chow Mein/Chop Suey")),r.a.createElement(i.b,{to:"/menu/sweetAndSour"},r.a.createElement(V.a.Title,null,"Sweet and Sour")),r.a.createElement(i.b,{to:"/menu/vegtablesAndAlmonds"},r.a.createElement(V.a.Title,null,"Vegetables and Almonds")),r.a.createElement(i.b,{to:"/menu/cantonese"},r.a.createElement(V.a.Title,null,"Cantonese Style")),r.a.createElement(i.b,{to:"/menu/canadian"},r.a.createElement(V.a.Title,null,"Canadian Dishes")))))},Oe={paddingLeft:"50px",paddingRight:"300px",paddingTop:"50px",paddingBottom:"50px",height:"450px"},Se=function(){var e=Oe;return r.a.createElement(we.a.Pusher,{style:{padding:" 2% 5%",overflow:"auto"}},r.a.createElement(m.a,{path:"/menu/combinations"},r.a.createElement(B.a,{basic:!0},r.a.createElement(u.a,{as:"h3"},"Special Combinations Plates")),r.a.createElement("div",{style:e},r.a.createElement(re,null))),r.a.createElement(m.a,{path:"/menu/fullcourse"},r.a.createElement(B.a,{basic:!0},r.a.createElement(u.a,{as:"h3"},"Full Course Meals")),r.a.createElement("div",{style:e},r.a.createElement(le,null))),r.a.createElement(m.a,{path:"/menu/soups"},r.a.createElement(B.a,{basic:!0},r.a.createElement(u.a,{as:"h3"},"Soups")),r.a.createElement("div",{style:e},r.a.createElement(ne,null))),r.a.createElement(m.a,{path:"/menu/appetizers"},r.a.createElement(B.a,{basic:!0},r.a.createElement(u.a,{as:"h3"},"Appetizers")),r.a.createElement("div",{style:e},r.a.createElement(K,null))),r.a.createElement(m.a,{path:"/menu/rice"},r.a.createElement(B.a,{basic:!0},r.a.createElement(u.a,{as:"h3"},"Rice")),r.a.createElement("div",{style:e},r.a.createElement($,null))),r.a.createElement(m.a,{path:"/menu/eggFooYoung"},r.a.createElement(B.a,{basic:!0},r.a.createElement(u.a,{as:"h3"},"Egg Foo Young (Grilled)")),r.a.createElement("div",{style:e},r.a.createElement(Q,null))),r.a.createElement(m.a,{path:"/menu/chowMein"},r.a.createElement(B.a,{basic:!0},r.a.createElement(u.a,{as:"h3"},"Chow Mein/Chop Suey")),r.a.createElement("div",{style:e},r.a.createElement(ee,null))),r.a.createElement(m.a,{path:"/menu/sweetAndSour"},r.a.createElement(B.a,{basic:!0},r.a.createElement(u.a,{as:"h3"},"Sweet and Sour")),r.a.createElement("div",{style:e},r.a.createElement(_,null))),r.a.createElement(m.a,{path:"/menu/vegtablesAndAlmonds"},r.a.createElement(B.a,{basic:!0},r.a.createElement(u.a,{as:"h3"},"Vegetables and Almonds")),r.a.createElement("div",{style:e},r.a.createElement(X,null))),r.a.createElement(m.a,{path:"/menu/cantonese"},r.a.createElement(B.a,{basic:!0},r.a.createElement(u.a,{as:"h3"},"Cantonese Style")),r.a.createElement("div",{style:e},r.a.createElement(te,null))),r.a.createElement(m.a,{path:"/menu/canadian"},r.a.createElement(B.a,{basic:!0},r.a.createElement(u.a,{as:"h3"},"Canadian Dishes")),r.a.createElement("div",{style:e},r.a.createElement(ce,null))))},ke={height:"600px",background:"url(https://img1.wsimg.com/isteam/stock/107160/:/rs=h:1080)"},je=function(){var e=ke;return r.a.createElement(i.a,null,r.a.createElement(we.a.Pushable,{style:e},r.a.createElement(xe,null),r.a.createElement(Se,null)))},Te={backgroundColor:{background:"#d9c8b5"}},We=function(e){var a=Te.backgroundColor;return r.a.createElement(o.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return r.a.createElement(n.Fragment,null,e.mobile&&r.a.createElement("div",{style:a},r.a.createElement(E,null),r.a.createElement(R,null)),!e.mobile&&r.a.createElement("div",{style:a},r.a.createElement(q,null),r.a.createElement(Ce,null)),r.a.createElement(pe,null))}))};var ze=function(){return r.a.createElement(i.a,{style:Te.backgroundColor,basename:"/the-golden-inn"},r.a.createElement("div",{style:Te.backgroundColor},r.a.createElement(W,null,r.a.createElement(de,null),r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/"},r.a.createElement(We,null)),r.a.createElement(m.a,{exact:!0,path:"/menu"},r.a.createElement(je,null))))))},Ae=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function He(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(ze,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/the-golden-inn",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/the-golden-inn","/service-worker.js");Ae?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):He(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):He(a,e)}))}}()},249:function(e,a,t){e.exports=t(1479)},254:function(e,a,t){},258:function(e,a,t){},259:function(e,a,t){}},[[249,1,2]]]);
//# sourceMappingURL=main.4621c664.chunk.js.map