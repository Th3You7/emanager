(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[6],{149:function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return x})),n.d(t,"e",(function(){return f}));var r=n(13),a=n.n(r),c=n(24),i=n(23),o=n.n(i),l=n(21),s="https://manage-commerce.herokuapp.com",u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(){var t=Object(c.a)(a.a.mark((function t(n){var r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:l.e}),t.prev=1,t.next=4,o.a.get("".concat(s,"/api/store/").concat(e));case 4:r=t.sent,c=r.data,n({type:l.f,payload:c}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n({type:l.d,payload:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:l.h}),t.prev=1,t.next=4,o.a.get("".concat(s,"/api/product/").concat(e));case 4:r=t.sent,c=r.data,n({type:l.i,payload:c}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n({type:l.g,payload:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},p=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:l.b}),e.prev=1,e.next=4,o.a.get("".concat(s,"/api/admin/allproducts"));case 4:n=e.sent,r=n.data,t({type:l.c,payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:l.a,payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},x=function(e){return function(t){t({type:"SELECT_PROD",payload:e})}},f=function(){return function(e){e({type:l.j})}}},150:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return i}));var r=n(39),a=function(e){return function(t,n){t({type:r.a,payload:e}),localStorage.setItem("products",JSON.stringify(n().cartReducer.products))}},c=function(e){return function(t,n){t({type:r.c,payload:e}),localStorage.setItem("products",JSON.stringify(n().cartReducer.products))}},i=function(){return function(e){e({type:r.b}),localStorage.clear()}}},152:function(e,t,n){"use strict";n.d(t,"c",(function(){return O})),n.d(t,"k",(function(){return z})),n.d(t,"e",(function(){return A})),n.d(t,"d",(function(){return F})),n.d(t,"j",(function(){return M})),n.d(t,"i",(function(){return K})),n.d(t,"b",(function(){return ee})),n.d(t,"a",(function(){return ne})),n.d(t,"g",(function(){return oe})),n.d(t,"f",(function(){return le})),n.d(t,"h",(function(){return de}));var r=n(1),a=n(34),c=n(118),i=n(35),o=n(951),l=n(952),s=n(954),u=n(955),d=n(958),p=n(956),x=n(957),f=n(959),j=n(960),b=n(961),h=n(28),y=n(57),g=n(3),m=Object(c.a)((function(e){return{appBar:{top:"auto",bottom:0},grow:{flexGrow:1},fabButton:{position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"}}})),v=Object(i.a)((function(e){return{badge:{right:-8,top:-9,padding:"0 4px"}}}))(o.a),O=function(){var e=m(),t=Object(h.c)((function(e){return e.cartReducer})).products,n=Object(r.useContext)(y.a),c=n.theme,i=n.toggleTheme,o=c.palette.type;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(l.a,{position:"fixed",color:"inherit",className:e.appBar,children:Object(g.jsxs)(s.a,{variant:"regular",children:[Object(g.jsx)(u.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:i,children:"light"===o?Object(g.jsx)(p.a,{}):Object(g.jsx)(x.a,{})}),Object(g.jsx)(d.a,{color:"secondary","aria-label":"add",className:e.fabButton,component:a.b,to:"/cart",children:Object(g.jsx)(v,{badgeContent:t.length,color:"primary",overlap:"circle",children:Object(g.jsx)(f.a,{})})}),Object(g.jsx)("div",{className:e.grow}),Object(g.jsx)(u.a,{color:"inherit",component:a.b,to:"/loan",children:Object(g.jsx)(j.a,{})}),Object(g.jsx)(u.a,{edge:"end",color:"inherit",component:a.b,to:"/admin",children:Object(g.jsx)(b.a,{})})]})})})},w=n(4),k=n(962),N=n(963),C=n(964),T=n(965),I=n(966),V=n(967),D=n(141),S=Object(c.a)((function(e){return{root:{position:function(e){return/^\/product/.test(e.pathname)?"absolute":"static"},width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",padding:e.spacing(1.5,0)},menuButton:{marginRight:e.spacing(2)},flexGrow:{flexGrow:2},flex:{display:"flex",alignItems:"center",justifyContent:"flex-end"},btn:{margin:e.spacing(0,1.2,0,0)},link:{color:e.palette.text.primary}}}));function z(e){var t=e.handleRemove,n=e.handleAdd,r=e.handleBack,c=e.handleStore,i=e.to,o=e.id,l=e.categoryId,s=e.saleId,p=e.spendingId,x=e.paymentId,f=e.productsId,j=e.invoiceId,b=S(Object(w.h)()),y=Object(w.h)().pathname,m=Object(w.i)().profileid,v=Object(h.c)((function(e){return e.currSelInvoiceReducer}));return Object(g.jsxs)("div",{className:b.root,children:[Object(g.jsx)(u.a,{"aria-label":"back",onClick:r,style:{background:/^\/product/.test(y)?"rgba(0,0,0,.3)":"inherit"},children:Object(g.jsx)(k.a,{fontSize:"inherit"})}),/^\/cart/.test(y)&&Object(g.jsx)(u.a,{color:"inherit","aria-label":"delete",onClick:t,children:Object(g.jsx)(N.a,{fontSize:"inherit"})}),/^\/product/.test(y)&&Object(g.jsx)(u.a,{color:"inherit","aria-label":"store",onClick:c,style:{background:"rgba(0,0,0,.3)"},children:Object(g.jsx)(C.a,{})}),("/admin/allproducts"===y||"/admin/categories"===y||"/admin/sales"===y||"/admin/spending"===y||"/admin/invoices"===y||"/loan"===y||y==="/loan/".concat(m,"/payments")||y==="/loan/".concat(m,"/products"))&&Object(g.jsxs)("div",{className:b.flex,children:["/admin/sales"!==y&&y!=="/loan/".concat(m,"/products")&&"/admin/invoices"!==y&&Object(g.jsx)(d.a,{color:"primary",size:"small","aria-label":"add",className:b.btn,onClick:n,children:Object(g.jsx)(T.a,{})}),j&&(null===v||void 0===v?void 0:v.invoiceId)&&Object(g.jsx)(u.a,{children:Object(g.jsx)(D.PDFDownloadLink,{className:b.link,document:Object(g.jsx)(de,{data:v}),fileName:"".concat(null===v||void 0===v?void 0:v.invoiceId,".pdf"),children:Object(g.jsx)(I.a,{})})}),(o||l||s||p||x||f||j)&&Object(g.jsx)(d.a,{color:"secondary",size:"small","aria-label":"delete",className:b.btn,component:a.b,to:i,children:Object(g.jsx)(N.a,{})}),o&&Object(g.jsx)(d.a,{color:"default",size:"small",className:b.btn,component:a.b,"aria-label":"delete",to:{pathname:"/admin/edit/".concat(o)},children:Object(g.jsx)(V.a,{})})]})]})}var B=Object(c.a)((function(e){return{root:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:e.spacing(2),position:"absolute",left:0,bottom:0,width:"100%",background:"transparent"},fab:{width:"100%"}}})),A=function(e){var t=e.handleCheck,n=B();return Object(g.jsx)("div",{className:n.root,children:Object(g.jsx)(d.a,{variant:"extended",className:n.fab,onClick:t,children:"Check Out"})})},P=n(953),R=n(968),W=Object(c.a)((function(e){return{paper:{display:"inline-block",margin:e.spacing(0,.5),padding:e.spacing(1),cursor:"pointer"}}})),F=function(e){var t=e.title,n=W(),r=Object(w.g)();return Object(g.jsx)(P.a,{className:n.paper,onClick:function(){return e=t,void r.push("/store/".concat(e.toLowerCase()));var e},children:Object(g.jsx)(R.a,{children:t.replace(/\b\w/g,(function(e){return e.toUpperCase()}))})})},U=n(969),L=n(970),H=n(972),J=n(973),E=n(971),_=n(150),q=n(149),G=Object(c.a)((function(e){return{card:{overflow:"visible",flex:"0 1 48%",display:function(e){return/^\/store/.test(e.pathname)?"block":"flex"},height:function(t){return/^\/store/.test(t.pathname)?"auto":e.spacing(12)},marginBottom:e.spacing(2)},cardContent:{width:function(e){return/^\/store/.test(e.pathname)?"100%":"70%"}},area:{width:function(e){return/^\/store/.test(e.pathname)?"100%":"30%"}},img:{width:"100%",height:function(t){return/^\/store/.test(t.pathname)?e.spacing(20):"100%"},objectFit:"fill"},price:{color:e.palette.text.secondary}}})),Y=Object(i.a)((function(e){return{badge:{right:0,top:0,padding:"0 4px"}}}))(o.a),M=function(e){var t=e,n=t.id,r=t.title,a=t.price,c=t.img,i=t.fetching,o=t.soldPrice,l=t.size,s=Object(w.h)(),u=Object(h.b)(),d=G(e=s),p=Object(w.g)(),x=/^\/cart/,f="/product/".concat(n);return Object(g.jsxs)(U.a,{className:d.card,children:[Object(g.jsx)(L.a,{className:d.area,children:i?Object(g.jsx)(E.a,{variant:"rect",height:140,width:"100%"}):Object(g.jsx)(H.a,{className:d.img,component:"img",alt:r,image:c,title:r,onClick:function(){u(Object(q.e)()),p.push(f)}})}),Object(g.jsxs)(J.a,{className:d.cardContent,children:[i?Object(g.jsx)(E.a,{variant:"text",width:"70%"}):Object(g.jsx)(R.a,{component:"h4",variant:"body2",children:r.replace(/\b\w/g,(function(e){return e.toUpperCase()}))}),x.test(s.pathname)&&Object(g.jsxs)(R.a,{variant:"subtitle2",children:["Sizes:"," ",Object.keys(l).map((function(e){return"".concat(e.toUpperCase(),": ").concat(l[e]," ")}))]}),Object(g.jsxs)("div",{style:{display:"flex"},children:[i?Object(g.jsx)(E.a,{variant:"text",width:"40%"}):Object(g.jsxs)(R.a,{component:"h4",variant:"body1",className:d.price,style:{marginRight:"48px"},children:[a,"DH"]}),x.test(s.pathname)&&Object(g.jsxs)(R.a,{component:"h4",variant:"body1",className:d.price,children:[o,"DH"]})]})]}),x.test(s.pathname)&&Object(g.jsx)(Y,{color:"error",badgeContent:"X",onClick:function(){u(Object(_.c)(n))},style:{cursor:"pointer"}})]})},Q=n(1022),X=n(974),$=Object(c.a)((function(e){return{root:{width:"95%",background:e.palette.background.paper,borderRadius:"2px",height:"41vh",margin:e.spacing(0,"auto",1.5),position:"relative"},media:{height:e.spacing(10),width:e.spacing(10),top:"-23%",left:"3%"},title:{lineHeight:".5",fontWeight:600,fontSize:e.spacing(2.2)},cover:{width:"100%",height:e.spacing(18),background:"#ebe4e4",position:"relative",top:0},info:{padding:e.spacing(0,2),marginTop:e.spacing(-4),display:"flex"},menu:{textAlign:"right",position:"absolute",left:0,top:0,width:"100%",zIndex:100},img:{width:"100%",height:"100%",position:"absolute",top:0,left:0},subtitle:{fontWeight:700}}}));function K(e){var t,n,r=e.name,a=e.img,c=e.productsSum,i=e.paymentsSum,o=e.phone,l=$(),s=Object(w.g)(),d=Object(w.i)().profileid;return Object(g.jsxs)(P.a,{variant:"outlined",className:l.root,children:[Object(g.jsxs)("div",{className:l.cover,children:[Object(g.jsx)("div",{className:l.menu,children:Object(g.jsx)(u.a,{onClick:function(){s.push("/loan/".concat(d,"/edit"))},children:Object(g.jsx)(V.a,{})})}),(null===a||void 0===a?void 0:a.cover)&&Object(g.jsx)("img",{className:l.img,src:null===a||void 0===a||null===(t=a.cover)||void 0===t?void 0:t.url,alt:"cover"})]}),Object(g.jsx)(Q.a,{alt:"admin logo",className:l.media,src:null===a||void 0===a||null===(n=a.profile)||void 0===n?void 0:n.url}),Object(g.jsxs)("div",{className:l.info,children:[Object(g.jsxs)("div",{style:{flex:"0 1 50%"},children:[Object(g.jsx)(R.a,{variant:"h5",component:"h2",color:"textPrimary",className:l.title,children:r&&r.replace(/\b\w/g,(function(e){return e.toUpperCase()}))}),Object(g.jsxs)(R.a,{variant:"subtitle1",component:"h6",color:"textSecondary",className:l.subtitle,children:[Number(c-i)," DH"]})]}),Object(g.jsx)("div",{style:{flex:"0 1 50%"},children:Object(g.jsxs)(R.a,{variant:"subtitle1",component:"h6",color:"textSecondary",className:l.subtitle,style:{display:"flex"},children:[Object(g.jsx)(X.a,{style:{marginRight:"4px"}}),Object(g.jsx)("span",{children:o})]})})]})]})}var Z=Object(c.a)((function(e){return{root:{width:"95%",background:e.palette.background.paper,borderRadius:"2px",height:"35vh",margin:e.spacing(0,"auto",1.5),display:"flex",flexDirection:"column",alignItems:"center"},media:{position:"absolute",bottom:-10,left:"50%",transform:"translate(-50%, 0%)",height:e.spacing(16),width:e.spacing(16)},title:{lineHeight:".8"},edit:{position:"absolute",right:0,top:0,background:"rgba(0,0,0,0.5)"},cover:{width:"100%",height:"63%",position:"relative",backgroundImage:function(e){var t,n,r,a,c,i;return(null===e||void 0===e||null===(t=e.result)||void 0===t||null===(n=t.img)||void 0===n||null===(r=n.cover)||void 0===r?void 0:r.url)?'url("'.concat(null===(a=e.result)||void 0===a||null===(c=a.img)||void 0===c||null===(i=c.cover)||void 0===i?void 0:i.url,'")'):""},backgroundColor:"white",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},info:{marginTop:"20px"}}}));function ee(){var e,t,n,r,a=Object(h.c)((function(e){return e.getProfileReducer})).result,c=Z({result:a}),i=Object(w.g)();return Object(g.jsxs)(P.a,{variant:"outlined",className:c.root,children:[Object(g.jsxs)("div",{className:c.cover,children:[Object(g.jsx)(u.a,{onClick:function(){i.push("/admin/edit")},className:c.edit,children:Object(g.jsx)(V.a,{})}),Object(g.jsx)(Q.a,{alt:"admin logo",src:null===a||void 0===a||null===(e=a.img)||void 0===e||null===(t=e.profile)||void 0===t?void 0:t.url,className:c.media})]}),a?Object(g.jsxs)("div",{className:c.info,children:[Object(g.jsx)(R.a,{variant:"h4",component:"h2",color:"textPrimary",align:"center",className:c.title,children:null===a||void 0===a||null===(n=a.storeName)||void 0===n?void 0:n.replace(/\b\w/g,(function(e){return e.toUpperCase()}))}),Object(g.jsx)(R.a,{variant:"subtitle1",component:"h6",color:"textSecondary",align:"center",className:c.subtitle,children:null===a||void 0===a||null===(r=a.name)||void 0===r?void 0:r.replace(/\b\w/g,(function(e){return e.toUpperCase()}))})]}):Object(g.jsx)("p",{children:"loading"})]})}var te=Object(c.a)((function(e){return{paper:{width:"95%",height:e.spacing(6),margin:e.spacing(0,"auto",.5),padding:e.spacing(1),display:"flex",alignItems:"center",cursor:"pointer"},flex:{display:"flex",alignItems:"center"},p:{margin:e.spacing(0,0,0,1.5)}}}));function ne(e){var t=e.children,n=e.name,r=e.path,a=te(),c=Object(w.g)();return Object(g.jsx)(P.a,{variant:"outlined",className:a.paper,elevation:0,onClick:function(){c.push(r)},children:Object(g.jsxs)("div",{className:a.flex,children:[t,Object(g.jsx)("p",{className:a.p,children:n})]})})}var re=n(153),ae=n.n(re),ce=n(151),ie=n.n(ce);function oe(e){var t=e.options;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(ae.a,{highcharts:ie.a,options:t,constructorType:"stockChart"})})}function le(e){var t=e.options;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(ae.a,{highcharts:ie.a,options:t})})}function se(e){var t=e.name,n=e.qty,r=e.unitPrice;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(D.View,{style:{flex:"0 1 15%",padding:"4px 8px 10px",textAlign:"center"},children:Object(g.jsx)(D.Text,{style:{color:"#292b2c"},children:n})}),Object(g.jsx)(D.View,{style:{flex:"0 1 55% ",padding:"4px 8px 10px"},children:Object(g.jsx)(D.Text,{style:{color:"#292b2c"},children:t})}),Object(g.jsx)(D.View,{style:{flex:"0 1 15%",padding:"4px 8px 10px",textAlign:"right"},children:Object(g.jsx)(D.Text,{style:{color:"#292b2c"},children:r})}),Object(g.jsx)(D.View,{style:{flex:"0 1 15%",padding:"4px 8px 10px",textAlign:"right"},children:Object(g.jsx)(D.Text,{style:{color:"#292b2c"},children:r*n})})]})}var ue=D.StyleSheet.create({page:{width:"100%",display:"inline-block",padding:"16px"},flex:{display:"flex",flexDirection:"row",marginBottom:48},store:{display:"flex",flexDirection:"column",flex:"0 1 50%"},logo:{flex:"0 1 50%",display:"flex",flexDirection:"row",justifyContent:"flex-end"},billInfo:{display:"flex",flexDirection:"row"},billTo:{display:"flex",flexDirection:"column",flex:"0 1 50%",marginBottom:20},billDetails:{flex:"0 1 50%"}});function de(e){var t=e.data,n=t.client,r=t.invoiceId,a=t.products,c=t.date,i=t.total;t.paymentMethod,t.advance;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(D.Document,{children:Object(g.jsxs)(D.Page,{style:ue.page,size:"A4",children:[Object(g.jsxs)(D.View,{style:ue.flex,children:[Object(g.jsxs)(D.View,{style:ue.store,children:[Object(g.jsx)(D.Text,{style:{fontSize:"30px",fontWeight:"bold",marginBottom:12},children:"Jabri Store"}),Object(g.jsx)(D.Text,{children:"Youssef Jabri"}),Object(g.jsx)(D.Text,{children:"Bradia Centre, Fquih Ben Salah"}),Object(g.jsx)(D.Text,{children:"23302"})]}),Object(g.jsx)(D.View,{style:ue.logo,children:Object(g.jsx)(D.Image,{src:"https://res.cloudinary.com/datlc9ohl/image/upload/v1630519287/437794623_cmtwlm.png",style:{height:100,width:100}})})]}),Object(g.jsxs)(D.View,{style:ue.billInfo,children:[Object(g.jsxs)(D.View,{style:ue.billTo,children:[Object(g.jsx)(D.Text,{style:{fontWeight:"bold",marginBottom:"5px"},children:"Bill To"}),Object(g.jsx)(D.Text,{style:{color:"#292b2c"},children:n.replace(/\b\w/g,(function(e){return e.toUpperCase()}))})]}),Object(g.jsxs)(D.View,{style:{flex:"0 1 50%"},styles:ue.billDetails,children:[Object(g.jsxs)(D.View,{style:{marginBottom:"5px",display:"flex",flexDirection:"row"},children:[Object(g.jsx)(D.View,{style:{flex:"0 1 40%"},children:Object(g.jsx)(D.Text,{style:{fontWeight:"bold"},children:"Invoice"})}),Object(g.jsx)(D.View,{style:{flex:"0 1 60%"},children:Object(g.jsx)(D.Text,{style:{color:"#292b2c"},children:r})})]}),Object(g.jsxs)(D.View,{style:{marginBottom:"5px",display:"flex",flexDirection:"row"},children:[Object(g.jsx)(D.View,{style:{flex:"0 1 40%"},children:Object(g.jsx)(D.Text,{style:{fontWeight:"bold"},children:"Invoice Date"})}),Object(g.jsx)(D.View,{style:{flex:"0 1 60%"},children:Object(g.jsx)(D.Text,{style:{color:"#292b2c"},children:c.slice(0,c.indexOf("T"))})})]})]})]}),Object(g.jsxs)(D.View,{style:{marginTop:"30px",backgroundColor:"#292b2c",display:"flex",flexDirection:"row"},children:[Object(g.jsx)(D.View,{style:{flex:"0 1 15%",padding:"4px 8px",textAlign:"center"},children:Object(g.jsx)(D.Text,{style:{color:"white",fontWeight:"bold"},children:"Qty"})}),Object(g.jsx)(D.View,{style:{flex:"0 1 55%",padding:"4px 8px"},children:Object(g.jsx)(D.Text,{style:{color:"white",fontWeight:"bold"},children:"Description"})}),Object(g.jsx)(D.View,{style:{flex:"0 1 15%",padding:"4px 8px",textAlign:"right"},children:Object(g.jsx)(D.Text,{style:{color:"white",fontWeight:"bold"},children:"Unit Price"})}),Object(g.jsx)(D.View,{style:{flex:"0 1 15%",padding:"4px 8px",textAlign:"right"},children:Object(g.jsx)(D.Text,{style:{color:"white",fontWeight:"bold"},children:"Amount"})})]}),Object(g.jsx)(D.View,{style:{display:"flex",flexDirection:"row"},children:a.map((function(e){return Object(g.jsx)(se,{name:e.product,unitPrice:e.unitPrice,qty:Object.keys(e.sizes).reduce((function(t,n){return t+e.sizes[n]}),0)},e._id)}))}),Object(g.jsx)(D.View,{style:{justifyContent:"flex-end",textAlign:"right",display:"flex",flexDirection:"row"},children:Object(g.jsx)(D.View,{style:{flex:"0 1 40%",marginTop:"8px"},children:Object(g.jsxs)(D.View,{style:{backgroundColor:"#e3e3e3",padding:"5px",display:"flex",flexDirection:"row"},children:[Object(g.jsx)(D.View,{style:{flex:"0 1 50%",padding:"5px",textAlign:"right"},children:Object(g.jsx)(D.Text,{style:{fontWeight:"bold"},children:"TOTAL"})}),Object(g.jsxs)(D.View,{style:{display:"flex",flexDirection:"row",flex:"0 1 50%",justifyContent:"flex-end",padding:"5px"},children:[Object(g.jsx)(D.Text,{style:{color:"#292b2c",fontWeight:"bold",marginLeft:"30px"},children:"$"}),Object(g.jsx)(D.Text,{style:{fontWeight:"bold",color:"#292b2c"},children:i})]})]})})}),Object(g.jsx)(D.View,{style:{marginTop:"30px",display:"block"},children:Object(g.jsx)(D.Text,{style:{flex:"0 1 100%",fontWeight:"bold",fontSize:"20px"},children:"Notes"})})]})})})}},186:function(e,t){},187:function(e,t){},188:function(e,t){},189:function(e,t){},190:function(e,t){},222:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"j",(function(){return d})),n.d(t,"g",(function(){return j})),n.d(t,"h",(function(){return b})),n.d(t,"i",(function(){return h})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return x})),n.d(t,"f",(function(){return f})),n.d(t,"m",(function(){return y})),n.d(t,"l",(function(){return g})),n.d(t,"k",(function(){return O})),n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return v})),n.d(t,"n",(function(){return w}));var r=n(13),a=n.n(r),c=n(24),i=n(23),o=n.n(i),l=n(6),s="https://manage-commerce.herokuapp.com",u=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:l.F}),e.prev=1,e.next=4,o.a.get("".concat(s,"/api/loan/all"));case 4:n=e.sent,r=n.data,t({type:l.H,payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:l.a,payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:l.D}),t.prev=1,t.next=4,o.a.get("".concat(s,"/api/loan/").concat(e));case 4:r=t.sent,c=r.data,n({type:l.E,payload:c}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n({type:l.C,payload:t.t0});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r,c,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:l.i}),t.prev=1,t.next=4,o.a.get("".concat(s,"/api/loan/").concat(e,"/payments"));case 4:r=t.sent,c=r.data,i=c.payments,n({type:l.j,payload:i}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),n({type:l.e,payload:t.t0});case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()},x=function(e){var t=e.profileid,n=e.payment;return function(){var e=Object(c.a)(a.a.mark((function e(r){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r({type:l.c}),e.prev=1,e.next=4,o.a.post("".concat(s,"/api/loan/").concat(t,"/payments/add"),{payment:n});case 4:c=e.sent,r({type:l.d,payload:c}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),r({type:l.b,payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},f=function(e){var t=e.profileId,n=e.paymentId;return function(){var e=Object(c.a)(a.a.mark((function e(r){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r({type:l.g}),e.prev=1,e.next=4,o.a.delete("".concat(s,"/api/loan/").concat(t,"/payments/remove"),{data:{paymentId:n}});case 4:c=e.sent,r({type:l.h,payload:c}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),r({type:l.f,payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r,c,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:l.r}),t.prev=1,t.next=4,o.a.get("".concat(s,"/api/loan/").concat(e,"/products"));case 4:r=t.sent,c=r.data,i=c.products,n({type:l.s,payload:i}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),n({type:l.n,payload:t.t0});case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()},b=function(e){var t=e.products,n=e.profileid;return function(){var e=Object(c.a)(a.a.mark((function e(r){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r({type:l.l}),e.prev=1,e.next=4,o.a.post("".concat(s,"/api/loan/").concat(n,"/addproducts"),{products:t});case 4:c=e.sent,r({type:l.m,payload:c}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),r({type:l.k,payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},h=function(e){var t=e.products,n=e.profileId;return function(){var e=Object(c.a)(a.a.mark((function e(r){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r({type:l.p}),e.prev=1,e.next=4,o.a.delete("".concat(s,"/api/loan/").concat(n,"/removeProducts"),{data:{products:t}});case 4:c=e.sent,r({type:l.q,payload:c}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),r({type:l.o,payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},y=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c,i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r({type:l.A}),n.prev=1,n.next=4,o.a.post("".concat(s,"/api/loan/").concat(t,"/edit"),e);case 4:c=n.sent,i=c.data,r({type:l.B,payload:i}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),r({type:l.z,payload:n.t0});case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:l.x}),t.prev=1,t.next=4,o.a.delete("".concat(s,"/api/loan/").concat(e,"/delete"));case 4:r=t.sent,c=r.data,n({type:l.y,payload:c}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n({type:l.w,payload:t.t0});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"SEL_PAY",payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"SEL_PROD",payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:l.u}),t.prev=1,t.next=4,o.a.post("".concat(s,"/api/loan/add"),e);case 4:r=t.sent,n({type:l.v,payload:r.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),n({type:l.t,payload:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},w=function(){return function(e){e({type:l.G})}}}}]);
//# sourceMappingURL=6.28d83c95.chunk.js.map