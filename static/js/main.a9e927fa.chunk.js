(this["webpackJsonpthe-golden-inn"]=this["webpackJsonpthe-golden-inn"]||[]).push([[0],{1451:function(e,a,t){},1452:function(e,a,t){},1513:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(62),c=t.n(r),i=(t(275),t(17)),o=(t(279),t(23)),m=t(49),s=(t(280),t(260)),u=t(1533),d=function(){return l.a.createElement("div",{className:"divStyle",style:{height:"250px"}},l.a.createElement(s.a,{src:"https://img1.wsimg.com/isteam/stock/107160/:/rs=h:1026",className:"image",style:{width:"100%",filter:"brightness(55%)"}}),l.a.createElement("div",{style:{position:"relative",left:"50%",transform:"translate(-50%, -125%)",padding:"5%"}},l.a.createElement(i.a,{queries:{small:"(max-width: 320px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.small&&l.a.createElement(u.a,{size:"huge",style:{color:"white",position:"absolute",top:"-40%"}},"WELCOME TO THE GOLDEN INN"),!e.small&&l.a.createElement(u.a,{size:"huge",style:{color:"white"}},"WELCOME TO THE GOLDEN INN"))})),l.a.createElement(u.a,{size:"small",style:{color:"white"}},"Serving authentic Chinese food for over 25 years")))},E=t(16),p=t(1531),h=t(1538),g=t(73),f=t(74),b=t(75),y=t(76),v=t(78),x=t(127),C=t.n(x),w=(t(363),t(1534)),k=t(1528),O=t(161),S=t.n(O);console.log("the-golden-inn-restaurant"),S.a.initializeApp({apiKey:"AIzaSyCEjL7ZIpn9SUG8raac9BtH18ZONAD_3hc",authDomain:"the-golden-inn-restaurant.firebaseapp.com",projectId:"the-golden-inn-restaurant"});var j=S.a.firestore(),z=l.a.createContext([{},function(){}]),T=function(e){var a=Object(n.useState)({}),t=Object(E.a)(a,2),r=t[0],c=t[1];return Object(n.useEffect)((function(){j.collection("menu-items").get().then((function(e){e.forEach((function(e){c(e.data())}))}))}),[]),l.a.createElement(z.Provider,{value:[r,c]},e.children)},W={position:"relative"},M={isLoading:!1,results:[],value:""},F=function(e){function a(){var e,t;Object(g.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(b.a)(this,(e=Object(y.a)(a)).call.apply(e,[this].concat(l)))).state=M,t.getAllDishes=function(e){var a=e.dishes,t=e.combinations,n=e.dinners,l=[];return Object.values(a).forEach((function(e){Object.values(e).forEach((function(e){var a={title:e.name,description:e.description,price:e.price};l.push(a)}))})),Object.values(t).forEach((function(e){var a={title:e.name,description:e.description,price:e.price,image:e.image};l.push(a)})),Object.values(n).forEach((function(e){var a={title:e.name,description:e.description,price:e.price};l.push(a)})),l},t.handleResultSelect=function(e,a){var n=a.result;return t.setState({value:n.title})},t.handleSearchChange=function(e,a){var n=a.value;t.setState({isLoading:!0,value:n}),setTimeout((function(){if(t.state.value.length<1)return t.setState(M);var e=new RegExp(C.a.escapeRegExp(t.state.value),"i");t.setState({isLoading:!1,results:C.a.filter(t.getAllDishes(t.context[0]),(function(a){return e.test(a.title)}))})}),300)},t}return Object(v.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.value,n=e.results;return l.a.createElement(w.a,null,l.a.createElement(w.a.Column,{width:4,style:W},l.a.createElement("div",null,l.a.createElement(k.a,Object.assign({aligned:"left",loading:a,onSearchChange:C.a.debounce(this.handleSearchChange,500,{leading:!0}),results:n,value:t},this.props)))))}}]),a}(n.Component);F.contextType=z;var A={background:"#d9c8b5",padding:"0 2em"},N=function(){var e=Object(n.useState)(!0),a=Object(E.a)(e,2),t=a[0],r=a[1],c=A,i=function(e){r(!0)};return l.a.createElement(h.a,Object.assign({as:p.a},h.a.onlyComputer,{style:c,fluid:!0,secondary:!0}),t?l.a.createElement(p.a.Item,{style:{position:"absolute",top:"5%",zIndex:"10"},onClick:i},l.a.createElement(o.b,{to:"/"},l.a.createElement(s.a,{size:"small",src:"https://i.imgur.com/7SBSyFL.png"}))):l.a.createElement(p.a.Item,{onClick:i},l.a.createElement(o.b,{to:"/"},l.a.createElement(s.a,{size:"tiny",src:"https://i.imgur.com/wTWZiYT.png"}))),l.a.createElement(p.a.Menu,{position:"right"},l.a.createElement(p.a.Item,{name:"Menu",onClick:function(){r(!1)}},l.a.createElement(o.b,{to:"/menu"},l.a.createElement(u.a,{as:"h4"},"Menu"))),l.a.createElement(p.a.Item,{name:"About"},l.a.createElement(u.a,{as:"h4"},"About")),l.a.createElement(p.a.Item,null,l.a.createElement(F,null))))},G={textAlign:"center",position:"relative",textShadow:"0 1px black",height:"500px"},H={width:"100%",height:"500px",filter:"brightness(55%)",objectFit:"cover"},D={position:"relative",left:"50%",transform:"translate(-50%, -125%)",padding:"5%"},I={color:"white",fontSize:"2.3em"},L=function(e){var a=G,t=H,n=I,r=D;return l.a.createElement("div",{style:a},l.a.createElement(s.a,{src:"https://img1.wsimg.com/isteam/stock/107160/:/rs=h:1026",className:"image",style:t}),l.a.createElement("div",{style:r},l.a.createElement(u.a,{size:"huge",style:n},"WELCOME TO THE GOLDEN INN"),l.a.createElement(u.a,{size:"small",style:n},"Serving authentic Chinese food for over 25 years")))},q=t(1530),P=t(1525),R=(t(1451),function(){return l.a.createElement("div",{className:"visitUsDivStyle"},l.a.createElement(u.a,{size:"large",style:{color:"black"}},"VISIT US"),l.a.createElement(u.a,{size:"tiny",style:{color:"black",fontWeight:"365",textShadow:"0 1px grey"}},"155 Main Street West, Picton, Prince Edward, ON, Canada"),l.a.createElement(u.a,{size:"medium"},"613-476-7056"),l.a.createElement("a",{href:"tel:+613-476-7056"},l.a.createElement(q.a,{color:"google plus"},"Call to place your order")),l.a.createElement(u.a,{size:"medium"},"Hours of operation"),l.a.createElement(P.a,{basic:"very",celled:!0,collapsing:!0,className:"hoursOfOperationsStyle"},l.a.createElement(P.a.Body,{className:"hoursOfOperationsTableBodyStyle"},[{day:"Mon",hours:"Closed"},{day:"Tue",hours:"11:30 a.m. \u2013 09:00 p.m."},{day:"Wed",hours:"11:30 a.m. \u2013 09:00 p.m."},{day:"Thurs",hours:"11:30 a.m. \u2013 09:00 p.m."},{day:"Fri",hours:"11:30 a.m. \u2013 09:00 p.m."},{day:"Sat",hours:"11:30 a.m. \u2013 09:00 p.m."},{day:"Sun",hours:"11:30 a.m. \u2013 09:00 p.m."}].map((function(e){return l.a.createElement(P.a.Row,{key:e.day},l.a.createElement(P.a.Cell,null,l.a.createElement("div",{className:"hoursOfOperationCellStyle"},l.a.createElement("span",{className:"hoursFontDay"},e.day),l.a.createElement("span",{style:{color:"black",fontWeight:365,textShadow:"0 1px grey",fontSize:"1em"}},e.hours))))})))))}),U=t(1535),B=t(1522),Y=t(27),V=(t(1452),t(1529)),Z=t(50),J=t(1527),$=t(1523),K=function(){var e=Object(n.useContext)(z),a=Object(E.a)(e,2),t=a[0],r=(a[1],function(){if(t.dishes){var e=t.dishes.appetizers;return Object.values(e)}return[]});return l.a.createElement(i.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.mobile&&l.a.createElement(U.a.Group,null,r().map((function(e){return l.a.createElement(U.a,{key:e.name},l.a.createElement(J.a.Content,null,l.a.createElement(u.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(J.a.Header,null,l.a.createElement(u.a,{as:"h4"},e.name)),e.description&&l.a.createElement(u.a,{as:"h5",color:"grey"},e.description)))}))),!e.mobile&&l.a.createElement($.a.Group,{style:{background:"white",padding:"5%",boxShadow:"5px 5px 5px 5px black"},divided:!0},r().map((function(e){return l.a.createElement($.a,{key:e.name},e.image&&l.a.createElement(s.a,{src:e.image,size:"small"}),l.a.createElement(J.a.Content,null,l.a.createElement(u.a,{as:"h3",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement($.a.Header,null,l.a.createElement(u.a,{as:"h4"},e.name)),e.description&&l.a.createElement($.a.Meta,null,e.description)))}))))}))},_=function(){var e=Object(n.useContext)(z),a=Object(E.a)(e,2),t=a[0],r=(a[1],function(){if(t.dishes){var e=t.dishes.Rice;return Object.values(e)}return[]});return l.a.createElement(i.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.mobile&&l.a.createElement(U.a.Group,null,r().map((function(e){return l.a.createElement(U.a,{key:e.name},l.a.createElement(J.a.Content,null,l.a.createElement(u.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(J.a.Header,null,l.a.createElement(u.a,{as:"h4"},e.name)),e.description&&l.a.createElement(u.a,{as:"h5",color:"grey"},e.description)))}))),!e.mobile&&l.a.createElement($.a.Group,{style:{background:"white",padding:"5%",boxShadow:"5px 5px 5px 5px black"},divided:!0},r().map((function(e){return l.a.createElement($.a,{key:e.name},e.image&&l.a.createElement(s.a,{src:e.image,size:"small"}),l.a.createElement(J.a.Content,null,l.a.createElement(u.a,{as:"h3",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement($.a.Header,null,l.a.createElement(u.a,{as:"h4"},e.name)),e.description&&l.a.createElement($.a.Meta,null,e.description)))}))))}))},Q=function(){var e=Object(n.useContext)(z),a=Object(E.a)(e,2),t=a[0],r=(a[1],function(){if(t.dishes){var e=t.dishes["sweet&Sour"];return Object.values(e)}return[]});return l.a.createElement(i.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.mobile&&l.a.createElement(U.a.Group,null,r().map((function(e){return l.a.createElement(U.a,{key:e.name},l.a.createElement(J.a.Content,null,l.a.createElement(u.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(J.a.Header,null,l.a.createElement(u.a,{as:"h4"},e.name)),e.description&&l.a.createElement(u.a,{as:"h5",color:"grey"},e.description)))}))),!e.mobile&&l.a.createElement($.a.Group,{style:{background:"white",padding:"5%",boxShadow:"5px 5px 5px 5px black"},divided:!0},r().map((function(e){return l.a.createElement($.a,{key:e.name},e.image&&l.a.createElement(s.a,{src:e.image,size:"small"}),l.a.createElement(J.a.Content,null,l.a.createElement(u.a,{as:"h3",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement($.a.Header,null,l.a.createElement(u.a,{as:"h4"},e.name)),e.description&&l.a.createElement($.a.Meta,null,e.description)))}))))}))},X=function(){var e=Object(n.useContext)(z),a=Object(E.a)(e,2),t=a[0],r=(a[1],function(){if(t.dishes){var e=t.dishes.eggFooYoung;return Object.values(e)}return[]});return l.a.createElement(i.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.mobile&&l.a.createElement(U.a.Group,null,r().map((function(e){return l.a.createElement(U.a,{key:e.name},l.a.createElement(J.a.Content,null,l.a.createElement(u.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(J.a.Header,null,l.a.createElement(u.a,{as:"h4"},e.name)),e.description&&l.a.createElement(u.a,{as:"h5",color:"grey"},e.description)))}))),!e.mobile&&l.a.createElement($.a.Group,{style:{background:"white",padding:"5%",boxShadow:"5px 5px 5px 5px black"},divided:!0},r().map((function(e){return l.a.createElement($.a,{key:e.name},e.image&&l.a.createElement(s.a,{src:e.image,size:"small"}),l.a.createElement(J.a.Content,null,l.a.createElement(u.a,{as:"h3",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement($.a.Header,null,l.a.createElement(u.a,{as:"h4"},e.name)),e.description&&l.a.createElement($.a.Meta,null,e.description)))}))))}))},ee=function(){var e=Object(n.useContext)(z),a=Object(E.a)(e,2),t=a[0],r=(a[1],function(){if(t.dishes){var e=t.dishes.vA;return Object.values(e)}return[]});return l.a.createElement(i.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.mobile&&l.a.createElement(U.a.Group,null,r().map((function(e){return l.a.createElement(U.a,{key:e.name},l.a.createElement(J.a.Content,null,l.a.createElement(u.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(J.a.Header,null,l.a.createElement(u.a,{as:"h4"},e.name)),e.description&&l.a.createElement(u.a,{as:"h5",color:"grey"},e.description)))}))),!e.mobile&&l.a.createElement($.a.Group,{style:{background:"white",padding:"5%",boxShadow:"5px 5px 5px 5px black"},divided:!0},r().map((function(e){return l.a.createElement($.a,{key:e.name},e.image&&l.a.createElement(s.a,{src:e.image,size:"small"}),l.a.createElement(J.a.Content,null,l.a.createElement(u.a,{as:"h3",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement($.a.Header,null,l.a.createElement(u.a,{as:"h4"},e.name)),e.description&&l.a.createElement($.a.Meta,null,e.description)))}))))}))},ae=function(){var e=Object(n.useContext)(z),a=Object(E.a)(e,2),t=a[0],r=(a[1],function(){if(t.dishes){var e=t.dishes.chowMein;return Object.values(e)}return[]});return l.a.createElement(i.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.mobile&&l.a.createElement(U.a.Group,null,r().map((function(e){return l.a.createElement(U.a,{key:e.name},l.a.createElement(J.a.Content,null,l.a.createElement(u.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(J.a.Header,null,l.a.createElement(u.a,{as:"h4"},e.name)),e.description&&l.a.createElement(u.a,{as:"h5",color:"grey"},e.description)))}))),!e.mobile&&l.a.createElement($.a.Group,{style:{background:"white",padding:"5%",boxShadow:"5px 5px 5px 5px black"},divided:!0},r().map((function(e){return l.a.createElement($.a,{key:e.name},e.image&&l.a.createElement(s.a,{src:e.image,size:"small"}),l.a.createElement(J.a.Content,null,l.a.createElement(u.a,{as:"h3",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement($.a.Header,null,l.a.createElement(u.a,{as:"h4"},e.name)),e.description&&l.a.createElement($.a.Meta,null,e.description)))}))))}))},te=t(1526),ne=t(1524),le=function(){var e=Object(n.useContext)(z),a=Object(E.a)(e,2),t=a[0],r=(a[1],function(){if(t.dishes){var e=t.dishes.cantonese;return Object.values(e)}return[]});return l.a.createElement(i.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.mobile&&l.a.createElement(te.a,{style:{position:"relative",top:"15px"}},r().map((function(e){return l.a.createElement(te.a.Item,{key:e.name,style:{paddingTop:"5%"}},l.a.createElement(J.a.Content,{style:{left:"15px"}},l.a.createElement(u.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400",position:"relative",bottom:"25px"}},e.price),l.a.createElement(J.a.Header,{style:{position:"relative",right:"15px",bottom:"25px"}},l.a.createElement(ne.a,{trigger:l.a.createElement(s.a,{avatar:!0,src:e.image,size:"tiny",floated:"left"}),hideOnScroll:!0,flowing:!0},l.a.createElement(s.a,{src:e.image,size:"medium",rounded:!0})),l.a.createElement(u.a,{as:"h4"},e.name)),e.description&&l.a.createElement(J.a.Description,null,l.a.createElement(u.a,{as:"h5",color:"grey"},e.description))))}))),!e.mobile&&l.a.createElement($.a.Group,{style:{background:"white",padding:"5%",boxShadow:"5px 5px 5px 5px black"},divided:!0},r().map((function(e){return l.a.createElement($.a,{key:e.name},e.image&&l.a.createElement(s.a,{src:e.image,size:"small",rounded:!0}),l.a.createElement(J.a.Content,null,l.a.createElement(u.a,{as:"h3",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement($.a.Header,null,l.a.createElement(u.a,{as:"h4"},e.name)),e.description&&l.a.createElement($.a.Meta,null,e.description)))}))))}))},re=function(){var e=Object(n.useContext)(z),a=Object(E.a)(e,2),t=a[0],r=(a[1],function(){if(t.dishes){var e=t.dishes.soups;return Object.values(e)}return[]});return l.a.createElement(i.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.mobile&&l.a.createElement(U.a.Group,null,r().map((function(e){return l.a.createElement(U.a,{key:e.name},l.a.createElement(J.a.Content,null,l.a.createElement(u.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(J.a.Header,null,l.a.createElement(u.a,{as:"h4"},e.name)),e.description&&l.a.createElement(u.a,{as:"h5",color:"grey"},e.description)))}))),!e.mobile&&l.a.createElement($.a.Group,{style:{background:"white",padding:"5%",boxShadow:"5px 5px 5px 5px black"},divided:!0},r().map((function(e){return l.a.createElement($.a,{key:e.name},e.image&&l.a.createElement(s.a,{src:e.image,size:"small"}),l.a.createElement(J.a.Content,null,l.a.createElement(u.a,{as:"h3",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement($.a.Header,null,l.a.createElement(u.a,{as:"h4"},e.name)),e.description&&l.a.createElement($.a.Meta,null,e.description)))}))))}))},ce=function(){var e=Object(n.useContext)(z),a=Object(E.a)(e,2),t=a[0],r=(a[1],function(){if(t.combinations){var e=t.combinations;return Object.values(e)}return[]});return l.a.createElement(i.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.mobile&&l.a.createElement(te.a,null,r().map((function(e){return l.a.createElement(te.a.Item,{key:e.name,style:{paddingTop:"5%"}},l.a.createElement(J.a.Content,null,l.a.createElement(u.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400",position:"relative",bottom:"25px"}},e.price),l.a.createElement(J.a.Header,{style:{position:"relative",right:"15px",bottom:"25px"}},l.a.createElement(ne.a,{trigger:l.a.createElement(s.a,{avatar:!0,src:e.image,size:"tiny",floated:"left"}),hideOnScroll:!0,flowing:!0},l.a.createElement(s.a,{src:e.image,size:"medium",rounded:!0})),l.a.createElement(u.a,{as:"h4"},e.name)),e.description&&l.a.createElement(J.a.Description,{style:{display:"flex",position:"relative",bottom:"25px"}},l.a.createElement(u.a,{as:"h5",color:"grey"},e.description))))}))),!e.mobile&&l.a.createElement($.a.Group,{style:{background:"white",padding:"5%",boxShadow:"5px 5px 5px 5px black"},divided:!0},r().map((function(e){return l.a.createElement($.a,{key:e.name},e.image&&l.a.createElement(s.a,{src:e.image,size:"small"}),l.a.createElement(J.a.Content,null,l.a.createElement(u.a,{as:"h3",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement($.a.Header,null,l.a.createElement(u.a,{as:"h4"},e.name)),e.description&&l.a.createElement($.a.Meta,null,e.description)))}))))}))},ie=function(){var e=Object(n.useContext)(z),a=Object(E.a)(e,2),t=a[0],r=(a[1],function(){if(t.dinners){var e=t.dinners;return Object.values(e)}return[]});return l.a.createElement(i.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.mobile&&l.a.createElement(U.a.Group,null,r().map((function(e){return l.a.createElement(U.a,{key:e.name},l.a.createElement(J.a.Content,null,l.a.createElement(u.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(J.a.Header,null,l.a.createElement(u.a,{as:"h4"},e.name)),e.description&&l.a.createElement(u.a,{as:"h5",color:"grey"},e.description)))}))),!e.mobile&&l.a.createElement($.a.Group,{style:{background:"white",padding:"5%",boxShadow:"5px 5px 5px 5px black"},divided:!0},r().map((function(e){return l.a.createElement($.a,{key:e.name},e.image&&l.a.createElement(s.a,{src:e.image,size:"small"}),l.a.createElement(J.a.Content,null,l.a.createElement(u.a,{as:"h3",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement($.a.Header,null,l.a.createElement(u.a,{as:"h4"},e.name)),e.description&&l.a.createElement($.a.Meta,null,e.description)))}))))}))},oe=function(){var e=Object(n.useContext)(z),a=Object(E.a)(e,2),t=a[0],r=(a[1],function(){if(t.dishes){var e=t.dishes.canadian;return Object.values(e)}return[]});return l.a.createElement(i.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.mobile&&l.a.createElement(U.a.Group,null,r().map((function(e){return l.a.createElement(U.a,{key:e.name},l.a.createElement(J.a.Content,null,l.a.createElement(u.a,{as:"h4",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement(J.a.Header,null,l.a.createElement(u.a,{as:"h4"},e.name)),e.description&&l.a.createElement(u.a,{as:"h5",color:"grey"},e.description)))}))),!e.mobile&&l.a.createElement($.a.Group,{style:{background:"white",padding:"5%",boxShadow:"5px 5px 5px 5px black"},divided:!0},r().map((function(e){return l.a.createElement($.a,{key:e.name},e.image&&l.a.createElement(s.a,{src:e.image,size:"small"}),l.a.createElement(J.a.Content,null,l.a.createElement(u.a,{as:"h3",floated:"right",color:"green",style:{fontWeight:"400"}},e.price),l.a.createElement($.a.Header,null,l.a.createElement(u.a,{as:"h4"},e.name)),e.description&&l.a.createElement($.a.Meta,null,e.description)))}))))}))},me=function(){var e=Object(n.useState)(-1),a=Object(E.a)(e,2),t=a[0],r=a[1],c=function(e,a){a.index===t?r(-1):r(a.index)};return l.a.createElement(V.a,{fluid:!0,styled:!0,className:"accordian"},l.a.createElement(V.a.Title,{active:0===t,index:0,onClick:c,as:u.a},l.a.createElement(Z.a,{name:"dropdown"}),"Special Combination Plates"),l.a.createElement(V.a.Content,{active:0===t},l.a.createElement(ce,null)),l.a.createElement(V.a.Title,{active:1===t,index:1,onClick:c,as:u.a},l.a.createElement(Z.a,{name:"dropdown"}),"Full Court Dinner"),l.a.createElement(V.a.Content,{active:1===t},l.a.createElement(ie,null)),l.a.createElement(V.a.Title,{active:2===t,index:2,onClick:c,as:u.a},l.a.createElement(Z.a,{name:"dropdown"}),"Appetizers"),l.a.createElement(V.a.Content,{active:2===t},l.a.createElement(K,null)),l.a.createElement(V.a.Title,{active:3===t,index:3,onClick:c,as:u.a},l.a.createElement(Z.a,{name:"dropdown"}),"Rice (One size only)"),l.a.createElement(V.a.Content,{active:3===t},l.a.createElement(_,null)),l.a.createElement(V.a.Title,{active:4===t,index:4,onClick:c,as:u.a},l.a.createElement(Z.a,{name:"dropdown"}),"Sweet And Sour"),l.a.createElement(V.a.Content,{active:4===t},l.a.createElement(Q,null)),l.a.createElement(V.a.Title,{active:5===t,index:5,onClick:c,as:u.a},l.a.createElement(Z.a,{name:"dropdown"}),"Egg Foo Young (grilled)"),l.a.createElement(V.a.Content,{active:5===t},l.a.createElement(X,null)),l.a.createElement(V.a.Title,{active:6===t,as:u.a,index:6,onClick:c},l.a.createElement(Z.a,{name:"dropdown"}),"Vegetable and Almonds"),l.a.createElement(V.a.Content,{active:6===t},l.a.createElement(ee,null)),l.a.createElement(V.a.Title,{active:7===t,as:u.a,index:7,onClick:c},l.a.createElement(Z.a,{name:"dropdown"}),"Chow Mein/Chop Suey"),l.a.createElement(V.a.Content,{active:7===t},l.a.createElement(ae,null)),l.a.createElement(V.a.Title,Object(Y.a)({active:8===t,as:u.a,index:8,onClick:c},"as",u.a),l.a.createElement(Z.a,{name:"dropdown"}),"Cantonese Style"),l.a.createElement(V.a.Content,{active:8===t},l.a.createElement(le,null)),l.a.createElement(V.a.Title,{active:9===t,as:u.a,index:9,onClick:c},l.a.createElement(Z.a,{name:"dropdown"}),"Soups"),l.a.createElement(V.a.Content,{active:9===t},l.a.createElement(re,null)),l.a.createElement(V.a.Title,{active:10===t,as:u.a,index:10,onClick:c},l.a.createElement(Z.a,{name:"dropdown"}),"Canadian Dishes"),l.a.createElement(V.a.Content,{active:10===t},l.a.createElement(oe,null)))},se={top:"5%",width:"90%",height:"80%"},ue=function(){return l.a.createElement(B.a,{trigger:l.a.createElement(p.a.Item,{position:"left"},l.a.createElement(u.a,null,"Menu")),closeIcon:!0,style:se},l.a.createElement(B.a.Content,{style:{maxHeight:"calc(100vh - 10em)",overflow:"auto"}},l.a.createElement(u.a,{as:"h2",content:"Menu"}),l.a.createElement(me,null)))},de=function(){return l.a.createElement(h.a,Object.assign({as:p.a},h.a.onlyMobile,{style:{background:"#d9c8b5",padding:"3%",fontSize:".90rem"}}),l.a.createElement(ue,null),l.a.createElement(F,{style:{right:"100%",position:"relative"}}))},Ee=function(){return l.a.createElement(h.a,Object.assign({as:p.a},h.a.onlyMobile,{style:{background:"#d9c8b5",padding:"3%"}}),l.a.createElement(ue,null),l.a.createElement(F,{style:{right:"100%",position:"relative"}}))},pe=function(e){return l.a.createElement(i.a,{queries:{small:"(max-width: 320px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.small&&l.a.createElement(de,null),!e.small&&l.a.createElement(Ee,null))}))},he=function(e){e.menuItems;var a=Object(n.useContext)(z),t=Object(E.a)(a,2),r=t[0];t[1];return l.a.createElement("div",null,l.a.createElement(U.a.Group,null,l.a.createElement(pe,{menu:r}),l.a.createElement(N,{menu:r})))},ge=t(258),fe=function(){return l.a.createElement("div",null,l.a.createElement(ge.a,{url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7025.307316203426!2d-77.14187548434793!3d44.00714172541031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d7ca541acadc9d%3A0xe6740b299f5e525e!2s155%20Picton%20Main%20St%2C%20Prince%20Edward%2C%20ON!5e0!3m2!1sen!2sca!4v1581291195493!5m2!1sen!2sca",width:"100%",height:"450px",id:"myId"}))},be={position:"relative",fontSize:"1.5em"},ye={color:"black"},ve={color:"black",fontWeight:"365",textShadow:"0 1px grey"},xe={color:"black",fontWeight:365,textShadow:"0 1px grey",fontSize:"1em"},Ce={padding:0,width:"50%",display:"inline-table"},we=function(){var e=be,a=ye,t=xe,n=ve,r=Ce;return l.a.createElement("div",{className:"visitUsDivStyle",style:e},l.a.createElement(u.a,{size:"large",style:a},"VISIT US"),l.a.createElement(u.a,{size:"tiny",style:n},"155 Main Street West, Picton, Prince Edward, ON, Canada"),l.a.createElement(u.a,{size:"medium"},"613-476-7056"),l.a.createElement("a",{href:"tel:+613-476-7056"},l.a.createElement(q.a,{color:"google plus"},"Call to place your order")),l.a.createElement(u.a,{size:"medium"},"Hours of operation"),l.a.createElement(P.a,{basic:"very",celled:!0,collapsing:!0,style:r,size:"large"},l.a.createElement(P.a.Body,{className:"hoursOfOperationsTableBodyStyle"},[{day:"Mon",hours:"Closed"},{day:"Tue",hours:"11:30 a.m. \u2013 09:00 p.m."},{day:"Wed",hours:"11:30 a.m. \u2013 09:00 p.m."},{day:"Thurs",hours:"11:30 a.m. \u2013 09:00 p.m."},{day:"Fri",hours:"11:30 a.m. \u2013 09:00 p.m."},{day:"Sat",hours:"11:30 a.m. \u2013 09:00 p.m."},{day:"Sun",hours:"11:30 a.m. \u2013 09:00 p.m."}].map((function(e){return l.a.createElement(P.a.Row,{key:e.day},l.a.createElement(P.a.Cell,null,l.a.createElement("div",{className:"hoursOfOperationCellStyle"},l.a.createElement("span",{className:"hoursFontDay"},e.day),l.a.createElement("span",{style:t},e.hours))))})))))},ke=t(1536),Oe=function(e){var a=e.setDefaultFalse,t=Object(n.useState)(0),r=Object(E.a)(t,2),c=r[0],i=r[1];return l.a.createElement(ke.a,{as:V.a,animation:"push",icon:"labeled",vertical:!0,visible:!0,styled:!0,style:{background:"#f0f0f0"}},l.a.createElement(o.b,{to:"/menu/combinations"},l.a.createElement(V.a.Title,{onClick:a},l.a.createElement(Z.a,null),"Special Combination Plates")),l.a.createElement(o.b,{to:"/menu/fullcourse"},l.a.createElement(V.a.Title,{onClick:a},l.a.createElement(Z.a,null),"Full Course Dinners")),l.a.createElement(V.a.Title,{active:1===c,index:1,onClick:function(e,a){var t=a.index;i(c===t?-1:t)}},l.a.createElement(Z.a,{name:"dropdown"}),"Main Dishes"),l.a.createElement(V.a.Content,{active:1===c,styled:!1},l.a.createElement(V.a,{style:{boxShadow:"none",background:"#f0f0f0"}},l.a.createElement(o.b,{to:"/menu/soups"},l.a.createElement(V.a.Title,{onClick:a},"Soups")),l.a.createElement(o.b,{to:"/menu/appetizers"},l.a.createElement(V.a.Title,{onClick:a},"Appetizers")),l.a.createElement(o.b,{to:"/menu/rice"},l.a.createElement(V.a.Title,{onClick:a},"Rice (One size)")),l.a.createElement(o.b,{to:"/menu/eggFooYoung"},l.a.createElement(V.a.Title,{onClick:a},"Egg Foo Young (Grilled)")),l.a.createElement(o.b,{to:"/menu/chowMein"},l.a.createElement(V.a.Title,{onClick:a},"Chow Mein (Dry noodles)/Chop Suey")),l.a.createElement(o.b,{to:"/menu/sweetAndSour"},l.a.createElement(V.a.Title,{onClick:a},"Sweet and Sour")),l.a.createElement(o.b,{to:"/menu/vegtablesAndAlmonds"},l.a.createElement(V.a.Title,{onClick:a},"Vegetables and Almonds")),l.a.createElement(o.b,{to:"/menu/cantonese"},l.a.createElement(V.a.Title,{onClick:a},"Cantonese Style")),l.a.createElement(o.b,{to:"/menu/canadian"},l.a.createElement(V.a.Title,{onClick:a},"Canadian Dishes")))))},Se={paddingLeft:"50px",paddingRight:"300px",paddingTop:"50px",paddingBottom:"50px",height:"450px"},je=function(){var e=Se;return l.a.createElement(ke.a.Pusher,{style:{padding:" 2% 5%",overflow:"auto"}},l.a.createElement(m.a,{exact:!0,path:"/menu/"},l.a.createElement(U.a,{basic:!0},l.a.createElement(u.a,{as:"h3"},"Special Combinations Plates")),l.a.createElement("div",{style:e},l.a.createElement(ce,null))),l.a.createElement(m.a,{path:"/menu/combinations"},l.a.createElement(U.a,{basic:!0},l.a.createElement(u.a,{as:"h1"},"Special Combinations Plates"),l.a.createElement($.a.Meta,null,"No substitutions within combinations plates. Get $1 off betwean 11:30am-2pm")),l.a.createElement("div",{style:e},l.a.createElement(ce,null))),l.a.createElement(m.a,{path:"/menu/fullcourse"},l.a.createElement(U.a,{basic:!0},l.a.createElement(u.a,{as:"h1"},"Full Course Meals"),l.a.createElement($.a.Meta,null,"Appetizers cannot be substituted. Other substitutions require charge.")),l.a.createElement("div",{style:e},l.a.createElement(ie,null))),l.a.createElement(m.a,{path:"/menu/soups"},l.a.createElement(U.a,{basic:!0},l.a.createElement(u.a,{as:"h1"},"Soups")),l.a.createElement("div",{style:e},l.a.createElement(re,null))),l.a.createElement(m.a,{path:"/menu/appetizers"},l.a.createElement(U.a,{basic:!0},l.a.createElement(u.a,{as:"h1"},"Appetizers")),l.a.createElement("div",{style:e},l.a.createElement(K,null))),l.a.createElement(m.a,{path:"/menu/rice"},l.a.createElement(U.a,{basic:!0},l.a.createElement(u.a,{as:"h1"},"Rice (One size only)")),l.a.createElement("div",{style:e},l.a.createElement(_,null))),l.a.createElement(m.a,{path:"/menu/eggFooYoung"},l.a.createElement(U.a,{basic:!0},l.a.createElement(u.a,{as:"h1"},"Egg Foo Young (Grilled)")),l.a.createElement("div",{style:e},l.a.createElement(X,null))),l.a.createElement(m.a,{path:"/menu/chowMein"},l.a.createElement(U.a,{basic:!0},l.a.createElement(u.a,{as:"h1"},"Chow Mein (Dry noodles)/Chop Suey")),l.a.createElement("div",{style:e},l.a.createElement(ae,null))),l.a.createElement(m.a,{path:"/menu/sweetAndSour"},l.a.createElement(U.a,{basic:!0},l.a.createElement(u.a,{as:"h1"},"Sweet and Sour")),l.a.createElement("div",{style:e},l.a.createElement(Q,null))),l.a.createElement(m.a,{path:"/menu/vegtablesAndAlmonds"},l.a.createElement(U.a,{basic:!0},l.a.createElement(u.a,{as:"h1"},"Vegetables and Almonds")),l.a.createElement("div",{style:e},l.a.createElement(ee,null))),l.a.createElement(m.a,{path:"/menu/cantonese"},l.a.createElement(U.a,{basic:!0},l.a.createElement(u.a,{as:"h1"},"Cantonese Style")),l.a.createElement("div",{style:e},l.a.createElement(le,null))),l.a.createElement(m.a,{path:"/menu/canadian"},l.a.createElement(U.a,{basic:!0},l.a.createElement(u.a,{as:"h1"},"Canadian Dishes")),l.a.createElement("div",{style:e},l.a.createElement(oe,null))))},ze={height:"700px",background:"url(https://img1.wsimg.com/isteam/stock/107160/:/rs=h:1080)"},Te=function(){var e=ze,a=Object(n.useState)(!0),t=Object(E.a)(a,2),r=(t[0],t[1]);return l.a.createElement(o.a,null,l.a.createElement(ke.a.Pushable,{style:e},l.a.createElement(Oe,{setDefaultFalse:function(){console.log("TURNING OFF DEFAULT"),r(!1)}}),l.a.createElement(je,null)))},We={backgroundColor:{background:"#d9c8b5"}},Me=function(e){var a=We.backgroundColor;return l.a.createElement(i.a,{queries:{mobile:"(max-width: 467px)"}},(function(e){return l.a.createElement(n.Fragment,null,e.mobile&&l.a.createElement("div",{style:a},l.a.createElement(d,null),l.a.createElement(R,null)),!e.mobile&&l.a.createElement("div",{style:a},l.a.createElement(L,null),l.a.createElement(we,null)),l.a.createElement(fe,null))}))};var Fe=function(){return l.a.createElement(o.a,{style:We.backgroundColor},l.a.createElement("div",{style:We.backgroundColor},l.a.createElement(T,null,l.a.createElement(he,null),l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/"},l.a.createElement(Me,null)),l.a.createElement(m.a,{exact:!0,path:"/menu"},l.a.createElement(Te,null))))))},Ae=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ne(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(l.a.createElement(Fe,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/the-golden-inn",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/the-golden-inn","/service-worker.js");Ae?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ne(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ne(a,e)}))}}()},270:function(e,a,t){e.exports=t(1513)},275:function(e,a,t){},279:function(e,a,t){},280:function(e,a,t){}},[[270,1,2]]]);
//# sourceMappingURL=main.a9e927fa.chunk.js.map