(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[31,6],{1008:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var a=n(29),c=n(1),r=n(118),i=n(968),o=n(986),s=n(131),l=n(363),u=n(4),d=n(28),p=n(152),j=n(362),f=n(222),x=n(3),b=Object(r.a)((function(e){return{container:{margin:e.spacing(2),padding:e.spacing(2)},btn:{background:e.palette.error.light,margin:e.spacing(2,0)},title:{fontWeight:700,fontSize:e.spacing(3),marginBottom:e.spacing(4)}}}));function h(){var e=b(),t=Object(u.i)().profileid,n=Object(u.g)(),r=Object(d.b)(),h=Object(d.c)((function(e){return e.currSelPaymentReducer})),g=Object(d.c)((function(e){return e.loanPaymentsRemoveReducer})),m=g.payload,y=g.loading,v=g.error,O=Object(c.useState)(!1),w=Object(a.a)(O,2),k=w[0],N=w[1];Object(c.useEffect)((function(){m&&N(!0)}),[N,m]);var C=function(e,t){"clickaway"!==t&&N(!1)};return Object(x.jsxs)("div",{className:e.overlay,children:[Object(x.jsx)(p.k,{handleBack:function(){n.goBack(),r(Object(f.n)())}}),Object(x.jsxs)("div",{className:e.container,children:[Object(x.jsx)(i.a,{variant:"h3",component:"h3",className:e.title,children:"Remove Payments"}),Object(x.jsxs)(i.a,{children:["Are You Sure You wanna Delete This Payment",Object(x.jsx)("br",{}),Object(x.jsx)("b",{children:h.payment})," ?"]}),!y&&!m&&Object(x.jsx)(o.a,{variant:"contained",onClick:function(){r(Object(f.f)({paymentId:h._id,profileId:t}))},className:e.btn,children:"Delete"}),y&&Object(x.jsx)(s.a,{color:"inherit"}),Object(x.jsx)(l.a,{open:k,onClose:C,children:Object(x.jsx)(j.a,{onClose:C,severity:"success",children:"Removed successfully!"})}),v&&!h&&Object(x.jsx)(i.a,{className:e.failed,children:"Error has occured"})]})]})}},149:function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j})),n.d(t,"e",(function(){return f}));var a=n(13),c=n.n(a),r=n(24),i=n(23),o=n.n(i),s=n(21),l="https://manage-commerce.herokuapp.com",u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(){var t=Object(r.a)(c.a.mark((function t(n){var a,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:s.e}),t.prev=1,t.next=4,o.a.get("".concat(l,"/api/store/").concat(e));case 4:a=t.sent,r=a.data,n({type:s.f,payload:r}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n({type:s.d,payload:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(n){var a,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:s.h}),t.prev=1,t.next=4,o.a.get("".concat(l,"/api/product/").concat(e));case 4:a=t.sent,r=a.data,n({type:s.i,payload:r}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n({type:s.g,payload:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},p=function(){return function(){var e=Object(r.a)(c.a.mark((function e(t){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:s.b}),e.prev=1,e.next=4,o.a.get("".concat(l,"/api/admin/allproducts"));case 4:n=e.sent,a=n.data,t({type:s.c,payload:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:s.a,payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},j=function(e){return function(t){t({type:"SELECT_PROD",payload:e})}},f=function(){return function(e){e({type:s.j})}}},150:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return i}));var a=n(39),c=function(e){return function(t,n){t({type:a.a,payload:e}),localStorage.setItem("products",JSON.stringify(n().cartReducer.products))}},r=function(e){return function(t,n){t({type:a.c,payload:e}),localStorage.setItem("products",JSON.stringify(n().cartReducer.products))}},i=function(){return function(e){e({type:a.b}),localStorage.clear()}}},152:function(e,t,n){"use strict";n.d(t,"c",(function(){return O})),n.d(t,"k",(function(){return B})),n.d(t,"e",(function(){return R})),n.d(t,"d",(function(){return F})),n.d(t,"j",(function(){return M})),n.d(t,"i",(function(){return K})),n.d(t,"b",(function(){return ee})),n.d(t,"a",(function(){return ne})),n.d(t,"g",(function(){return oe})),n.d(t,"f",(function(){return se})),n.d(t,"h",(function(){return de}));var a=n(1),c=n(34),r=n(118),i=n(35),o=n(951),s=n(952),l=n(954),u=n(955),d=n(958),p=n(956),j=n(957),f=n(959),x=n(960),b=n(961),h=n(28),g=n(57),m=n(3),y=Object(r.a)((function(e){return{appBar:{top:"auto",bottom:0},grow:{flexGrow:1},fabButton:{position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"}}})),v=Object(i.a)((function(e){return{badge:{right:-8,top:-9,padding:"0 4px"}}}))(o.a),O=function(){var e=y(),t=Object(h.c)((function(e){return e.cartReducer})).products,n=Object(a.useContext)(g.a),r=n.theme,i=n.toggleTheme,o=r.palette.type;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(s.a,{position:"fixed",color:"inherit",className:e.appBar,children:Object(m.jsxs)(l.a,{variant:"regular",children:[Object(m.jsx)(u.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:i,children:"light"===o?Object(m.jsx)(p.a,{}):Object(m.jsx)(j.a,{})}),Object(m.jsx)(d.a,{color:"secondary","aria-label":"add",className:e.fabButton,component:c.b,to:"/cart",children:Object(m.jsx)(v,{badgeContent:t.length,color:"primary",overlap:"circle",children:Object(m.jsx)(f.a,{})})}),Object(m.jsx)("div",{className:e.grow}),Object(m.jsx)(u.a,{color:"inherit",component:c.b,to:"/loan",children:Object(m.jsx)(x.a,{})}),Object(m.jsx)(u.a,{edge:"end",color:"inherit",component:c.b,to:"/admin",children:Object(m.jsx)(b.a,{})})]})})})},w=n(4),k=n(962),N=n(963),C=n(964),T=n(965),I=n(966),S=n(967),D=n(141),V=Object(r.a)((function(e){return{root:{position:function(e){return/^\/product/.test(e.pathname)?"absolute":"static"},width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",padding:e.spacing(1.5,0)},menuButton:{marginRight:e.spacing(2)},flexGrow:{flexGrow:2},flex:{display:"flex",alignItems:"center",justifyContent:"flex-end"},btn:{margin:e.spacing(0,1.2,0,0)},link:{color:e.palette.text.primary}}}));function B(e){var t=e.handleRemove,n=e.handleAdd,a=e.handleBack,r=e.handleStore,i=e.to,o=e.id,s=e.categoryId,l=e.saleId,p=e.spendingId,j=e.paymentId,f=e.productsId,x=e.invoiceId,b=V(Object(w.h)()),g=Object(w.h)().pathname,y=Object(w.i)().profileid,v=Object(h.c)((function(e){return e.currSelInvoiceReducer}));return Object(m.jsxs)("div",{className:b.root,children:[Object(m.jsx)(u.a,{"aria-label":"back",onClick:a,style:{background:/^\/product/.test(g)?"rgba(0,0,0,.3)":"inherit"},children:Object(m.jsx)(k.a,{fontSize:"inherit"})}),/^\/cart/.test(g)&&Object(m.jsx)(u.a,{color:"inherit","aria-label":"delete",onClick:t,children:Object(m.jsx)(N.a,{fontSize:"inherit"})}),/^\/product/.test(g)&&Object(m.jsx)(u.a,{color:"inherit","aria-label":"store",onClick:r,style:{background:"rgba(0,0,0,.3)"},children:Object(m.jsx)(C.a,{})}),("/admin/allproducts"===g||"/admin/categories"===g||"/admin/sales"===g||"/admin/spending"===g||"/admin/invoices"===g||"/loan"===g||g==="/loan/".concat(y,"/payments")||g==="/loan/".concat(y,"/products"))&&Object(m.jsxs)("div",{className:b.flex,children:["/admin/sales"!==g&&g!=="/loan/".concat(y,"/products")&&"/admin/invoices"!==g&&Object(m.jsx)(d.a,{color:"primary",size:"small","aria-label":"add",className:b.btn,onClick:n,children:Object(m.jsx)(T.a,{})}),x&&(null===v||void 0===v?void 0:v.invoiceId)&&Object(m.jsx)(u.a,{children:Object(m.jsx)(D.PDFDownloadLink,{className:b.link,document:Object(m.jsx)(de,{data:v}),fileName:"".concat(null===v||void 0===v?void 0:v.invoiceId,".pdf"),children:Object(m.jsx)(I.a,{})})}),(o||s||l||p||j||f||x)&&Object(m.jsx)(d.a,{color:"secondary",size:"small","aria-label":"delete",className:b.btn,component:c.b,to:i,children:Object(m.jsx)(N.a,{})}),o&&Object(m.jsx)(d.a,{color:"default",size:"small",className:b.btn,component:c.b,"aria-label":"delete",to:{pathname:"/admin/edit/".concat(o)},children:Object(m.jsx)(S.a,{})})]})]})}var P=Object(r.a)((function(e){return{root:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:e.spacing(2),position:"absolute",left:0,bottom:0,width:"100%",background:"transparent"},fab:{width:"100%"}}})),R=function(e){var t=e.handleCheck,n=P();return Object(m.jsx)("div",{className:n.root,children:Object(m.jsx)(d.a,{variant:"extended",className:n.fab,onClick:t,children:"Check Out"})})},z=n(953),A=n(968),W=Object(r.a)((function(e){return{paper:{display:"inline-block",margin:e.spacing(0,.5),padding:e.spacing(1),cursor:"pointer"}}})),F=function(e){var t=e.title,n=W(),a=Object(w.g)();return Object(m.jsx)(z.a,{className:n.paper,onClick:function(){return e=t,void a.push("/store/".concat(e.toLowerCase()));var e},children:Object(m.jsx)(A.a,{children:t.replace(/\b\w/g,(function(e){return e.toUpperCase()}))})})},U=n(969),E=n(970),L=n(972),H=n(973),J=n(971),_=n(150),q=n(149),G=Object(r.a)((function(e){return{card:{overflow:"visible",flex:"0 1 48%",display:function(e){return/^\/store/.test(e.pathname)?"block":"flex"},height:function(t){return/^\/store/.test(t.pathname)?"auto":e.spacing(12)},marginBottom:e.spacing(2)},cardContent:{width:function(e){return/^\/store/.test(e.pathname)?"100%":"70%"}},area:{width:function(e){return/^\/store/.test(e.pathname)?"100%":"30%"}},img:{width:"100%",height:function(t){return/^\/store/.test(t.pathname)?e.spacing(20):"100%"},objectFit:"fill"},price:{color:e.palette.text.secondary}}})),Y=Object(i.a)((function(e){return{badge:{right:0,top:0,padding:"0 4px"}}}))(o.a),M=function(e){var t=e,n=t.id,a=t.title,c=t.price,r=t.img,i=t.fetching,o=t.soldPrice,s=t.size,l=Object(w.h)(),u=Object(h.b)(),d=G(e=l),p=Object(w.g)(),j=/^\/cart/,f="/product/".concat(n);return Object(m.jsxs)(U.a,{className:d.card,children:[Object(m.jsx)(E.a,{className:d.area,children:i?Object(m.jsx)(J.a,{variant:"rect",height:140,width:"100%"}):Object(m.jsx)(L.a,{className:d.img,component:"img",alt:a,image:r,title:a,onClick:function(){u(Object(q.e)()),p.push(f)}})}),Object(m.jsxs)(H.a,{className:d.cardContent,children:[i?Object(m.jsx)(J.a,{variant:"text",width:"70%"}):Object(m.jsx)(A.a,{component:"h4",variant:"body2",children:a.replace(/\b\w/g,(function(e){return e.toUpperCase()}))}),j.test(l.pathname)&&Object(m.jsxs)(A.a,{variant:"subtitle2",children:["Sizes:"," ",Object.keys(s).map((function(e){return"".concat(e.toUpperCase(),": ").concat(s[e]," ")}))]}),Object(m.jsxs)("div",{style:{display:"flex"},children:[i?Object(m.jsx)(J.a,{variant:"text",width:"40%"}):Object(m.jsxs)(A.a,{component:"h4",variant:"body1",className:d.price,style:{marginRight:"48px"},children:[c,"DH"]}),j.test(l.pathname)&&Object(m.jsxs)(A.a,{component:"h4",variant:"body1",className:d.price,children:[o,"DH"]})]})]}),j.test(l.pathname)&&Object(m.jsx)(Y,{color:"error",badgeContent:"X",onClick:function(){u(Object(_.c)(n))},style:{cursor:"pointer"}})]})},Q=n(1022),X=n(974),$=Object(r.a)((function(e){return{root:{width:"95%",background:e.palette.background.paper,borderRadius:"2px",height:"41vh",margin:e.spacing(0,"auto",1.5),position:"relative"},media:{height:e.spacing(10),width:e.spacing(10),top:"-23%",left:"3%"},title:{lineHeight:".5",fontWeight:600,fontSize:e.spacing(2.2)},cover:{width:"100%",height:e.spacing(18),background:"#ebe4e4",position:"relative",top:0},info:{padding:e.spacing(0,2),marginTop:e.spacing(-4),display:"flex"},menu:{textAlign:"right",position:"absolute",left:0,top:0,width:"100%",zIndex:100},img:{width:"100%",height:"100%",position:"absolute",top:0,left:0},subtitle:{fontWeight:700}}}));function K(e){var t,n,a=e.name,c=e.img,r=e.productsSum,i=e.paymentsSum,o=e.phone,s=$(),l=Object(w.g)(),d=Object(w.i)().profileid;return Object(m.jsxs)(z.a,{variant:"outlined",className:s.root,children:[Object(m.jsxs)("div",{className:s.cover,children:[Object(m.jsx)("div",{className:s.menu,children:Object(m.jsx)(u.a,{onClick:function(){l.push("/loan/".concat(d,"/edit"))},children:Object(m.jsx)(S.a,{})})}),(null===c||void 0===c?void 0:c.cover)&&Object(m.jsx)("img",{className:s.img,src:null===c||void 0===c||null===(t=c.cover)||void 0===t?void 0:t.url,alt:"cover"})]}),Object(m.jsx)(Q.a,{alt:"admin logo",className:s.media,src:null===c||void 0===c||null===(n=c.profile)||void 0===n?void 0:n.url}),Object(m.jsxs)("div",{className:s.info,children:[Object(m.jsxs)("div",{style:{flex:"0 1 50%"},children:[Object(m.jsx)(A.a,{variant:"h5",component:"h2",color:"textPrimary",className:s.title,children:a&&a.replace(/\b\w/g,(function(e){return e.toUpperCase()}))}),Object(m.jsxs)(A.a,{variant:"subtitle1",component:"h6",color:"textSecondary",className:s.subtitle,children:[Number(r-i)," DH"]})]}),Object(m.jsx)("div",{style:{flex:"0 1 50%"},children:Object(m.jsxs)(A.a,{variant:"subtitle1",component:"h6",color:"textSecondary",className:s.subtitle,style:{display:"flex"},children:[Object(m.jsx)(X.a,{style:{marginRight:"4px"}}),Object(m.jsx)("span",{children:o})]})})]})]})}var Z=Object(r.a)((function(e){return{root:{width:"95%",background:e.palette.background.paper,borderRadius:"2px",height:"35vh",margin:e.spacing(0,"auto",1.5),display:"flex",flexDirection:"column",alignItems:"center"},media:{position:"absolute",bottom:-10,left:"50%",transform:"translate(-50%, 0%)",height:e.spacing(16),width:e.spacing(16)},title:{lineHeight:".8"},edit:{position:"absolute",right:0,top:0,background:"rgba(0,0,0,0.5)"},cover:{width:"100%",height:"63%",position:"relative",backgroundImage:function(e){var t,n,a,c,r,i;return(null===e||void 0===e||null===(t=e.result)||void 0===t||null===(n=t.img)||void 0===n||null===(a=n.cover)||void 0===a?void 0:a.url)?'url("'.concat(null===(c=e.result)||void 0===c||null===(r=c.img)||void 0===r||null===(i=r.cover)||void 0===i?void 0:i.url,'")'):""},backgroundColor:"white",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},info:{marginTop:"20px"}}}));function ee(){var e,t,n,a,c=Object(h.c)((function(e){return e.getProfileReducer})).result,r=Z({result:c}),i=Object(w.g)();return Object(m.jsxs)(z.a,{variant:"outlined",className:r.root,children:[Object(m.jsxs)("div",{className:r.cover,children:[Object(m.jsx)(u.a,{onClick:function(){i.push("/admin/edit")},className:r.edit,children:Object(m.jsx)(S.a,{})}),Object(m.jsx)(Q.a,{alt:"admin logo",src:null===c||void 0===c||null===(e=c.img)||void 0===e||null===(t=e.profile)||void 0===t?void 0:t.url,className:r.media})]}),c?Object(m.jsxs)("div",{className:r.info,children:[Object(m.jsx)(A.a,{variant:"h4",component:"h2",color:"textPrimary",align:"center",className:r.title,children:null===c||void 0===c||null===(n=c.storeName)||void 0===n?void 0:n.replace(/\b\w/g,(function(e){return e.toUpperCase()}))}),Object(m.jsx)(A.a,{variant:"subtitle1",component:"h6",color:"textSecondary",align:"center",className:r.subtitle,children:null===c||void 0===c||null===(a=c.name)||void 0===a?void 0:a.replace(/\b\w/g,(function(e){return e.toUpperCase()}))})]}):Object(m.jsx)("p",{children:"loading"})]})}var te=Object(r.a)((function(e){return{paper:{width:"95%",height:e.spacing(6),margin:e.spacing(0,"auto",.5),padding:e.spacing(1),display:"flex",alignItems:"center",cursor:"pointer"},flex:{display:"flex",alignItems:"center"},p:{margin:e.spacing(0,0,0,1.5)}}}));function ne(e){var t=e.children,n=e.name,a=e.path,c=te(),r=Object(w.g)();return Object(m.jsx)(z.a,{variant:"outlined",className:c.paper,elevation:0,onClick:function(){r.push(a)},children:Object(m.jsxs)("div",{className:c.flex,children:[t,Object(m.jsx)("p",{className:c.p,children:n})]})})}var ae=n(153),ce=n.n(ae),re=n(151),ie=n.n(re);function oe(e){var t=e.options;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(ce.a,{highcharts:ie.a,options:t,constructorType:"stockChart"})})}function se(e){var t=e.options;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(ce.a,{highcharts:ie.a,options:t})})}function le(e){var t=e.name,n=e.qty,a=e.unitPrice;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(D.View,{style:{flex:"0 1 15%",padding:"4px 8px 10px",textAlign:"center"},children:Object(m.jsx)(D.Text,{style:{color:"#292b2c"},children:n})}),Object(m.jsx)(D.View,{style:{flex:"0 1 55% ",padding:"4px 8px 10px"},children:Object(m.jsx)(D.Text,{style:{color:"#292b2c"},children:t})}),Object(m.jsx)(D.View,{style:{flex:"0 1 15%",padding:"4px 8px 10px",textAlign:"right"},children:Object(m.jsx)(D.Text,{style:{color:"#292b2c"},children:a})}),Object(m.jsx)(D.View,{style:{flex:"0 1 15%",padding:"4px 8px 10px",textAlign:"right"},children:Object(m.jsx)(D.Text,{style:{color:"#292b2c"},children:a*n})})]})}var ue=D.StyleSheet.create({page:{width:"100%",display:"inline-block",padding:"16px"},flex:{display:"flex",flexDirection:"row",marginBottom:48},store:{display:"flex",flexDirection:"column",flex:"0 1 50%"},logo:{flex:"0 1 50%",display:"flex",flexDirection:"row",justifyContent:"flex-end"},billInfo:{display:"flex",flexDirection:"row"},billTo:{display:"flex",flexDirection:"column",flex:"0 1 50%",marginBottom:20},billDetails:{flex:"0 1 50%"}});function de(e){var t=e.data,n=t.client,a=t.invoiceId,c=t.products,r=t.date,i=t.total;t.paymentMethod,t.advance;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(D.Document,{children:Object(m.jsxs)(D.Page,{style:ue.page,size:"A4",children:[Object(m.jsxs)(D.View,{style:ue.flex,children:[Object(m.jsxs)(D.View,{style:ue.store,children:[Object(m.jsx)(D.Text,{style:{fontSize:"30px",fontWeight:"bold",marginBottom:12},children:"Jabri Store"}),Object(m.jsx)(D.Text,{children:"Youssef Jabri"}),Object(m.jsx)(D.Text,{children:"Bradia Centre, Fquih Ben Salah"}),Object(m.jsx)(D.Text,{children:"23302"})]}),Object(m.jsx)(D.View,{style:ue.logo,children:Object(m.jsx)(D.Image,{src:"https://res.cloudinary.com/datlc9ohl/image/upload/v1630519287/437794623_cmtwlm.png",style:{height:100,width:100}})})]}),Object(m.jsxs)(D.View,{style:ue.billInfo,children:[Object(m.jsxs)(D.View,{style:ue.billTo,children:[Object(m.jsx)(D.Text,{style:{fontWeight:"bold",marginBottom:"5px"},children:"Bill To"}),Object(m.jsx)(D.Text,{style:{color:"#292b2c"},children:n.replace(/\b\w/g,(function(e){return e.toUpperCase()}))})]}),Object(m.jsxs)(D.View,{style:{flex:"0 1 50%"},styles:ue.billDetails,children:[Object(m.jsxs)(D.View,{style:{marginBottom:"5px",display:"flex",flexDirection:"row"},children:[Object(m.jsx)(D.View,{style:{flex:"0 1 40%"},children:Object(m.jsx)(D.Text,{style:{fontWeight:"bold"},children:"Invoice"})}),Object(m.jsx)(D.View,{style:{flex:"0 1 60%"},children:Object(m.jsx)(D.Text,{style:{color:"#292b2c"},children:a})})]}),Object(m.jsxs)(D.View,{style:{marginBottom:"5px",display:"flex",flexDirection:"row"},children:[Object(m.jsx)(D.View,{style:{flex:"0 1 40%"},children:Object(m.jsx)(D.Text,{style:{fontWeight:"bold"},children:"Invoice Date"})}),Object(m.jsx)(D.View,{style:{flex:"0 1 60%"},children:Object(m.jsx)(D.Text,{style:{color:"#292b2c"},children:r.slice(0,r.indexOf("T"))})})]})]})]}),Object(m.jsxs)(D.View,{style:{marginTop:"30px",backgroundColor:"#292b2c",display:"flex",flexDirection:"row"},children:[Object(m.jsx)(D.View,{style:{flex:"0 1 15%",padding:"4px 8px",textAlign:"center"},children:Object(m.jsx)(D.Text,{style:{color:"white",fontWeight:"bold"},children:"Qty"})}),Object(m.jsx)(D.View,{style:{flex:"0 1 55%",padding:"4px 8px"},children:Object(m.jsx)(D.Text,{style:{color:"white",fontWeight:"bold"},children:"Description"})}),Object(m.jsx)(D.View,{style:{flex:"0 1 15%",padding:"4px 8px",textAlign:"right"},children:Object(m.jsx)(D.Text,{style:{color:"white",fontWeight:"bold"},children:"Unit Price"})}),Object(m.jsx)(D.View,{style:{flex:"0 1 15%",padding:"4px 8px",textAlign:"right"},children:Object(m.jsx)(D.Text,{style:{color:"white",fontWeight:"bold"},children:"Amount"})})]}),Object(m.jsx)(D.View,{style:{display:"flex",flexDirection:"row"},children:c.map((function(e){return Object(m.jsx)(le,{name:e.product,unitPrice:e.unitPrice,qty:Object.keys(e.sizes).reduce((function(t,n){return t+e.sizes[n]}),0)},e._id)}))}),Object(m.jsx)(D.View,{style:{justifyContent:"flex-end",textAlign:"right",display:"flex",flexDirection:"row"},children:Object(m.jsx)(D.View,{style:{flex:"0 1 40%",marginTop:"8px"},children:Object(m.jsxs)(D.View,{style:{backgroundColor:"#e3e3e3",padding:"5px",display:"flex",flexDirection:"row"},children:[Object(m.jsx)(D.View,{style:{flex:"0 1 50%",padding:"5px",textAlign:"right"},children:Object(m.jsx)(D.Text,{style:{fontWeight:"bold"},children:"TOTAL"})}),Object(m.jsxs)(D.View,{style:{display:"flex",flexDirection:"row",flex:"0 1 50%",justifyContent:"flex-end",padding:"5px"},children:[Object(m.jsx)(D.Text,{style:{color:"#292b2c",fontWeight:"bold",marginLeft:"30px"},children:"$"}),Object(m.jsx)(D.Text,{style:{fontWeight:"bold",color:"#292b2c"},children:i})]})]})})}),Object(m.jsx)(D.View,{style:{marginTop:"30px",display:"block"},children:Object(m.jsx)(D.Text,{style:{flex:"0 1 100%",fontWeight:"bold",fontSize:"20px"},children:"Notes"})})]})})})}},186:function(e,t){},187:function(e,t){},188:function(e,t){},189:function(e,t){},190:function(e,t){},222:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"j",(function(){return d})),n.d(t,"g",(function(){return x})),n.d(t,"h",(function(){return b})),n.d(t,"i",(function(){return h})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return j})),n.d(t,"f",(function(){return f})),n.d(t,"m",(function(){return g})),n.d(t,"l",(function(){return m})),n.d(t,"k",(function(){return O})),n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return v})),n.d(t,"n",(function(){return w}));var a=n(13),c=n.n(a),r=n(24),i=n(23),o=n.n(i),s=n(6),l="https://manage-commerce.herokuapp.com",u=function(){return function(){var e=Object(r.a)(c.a.mark((function e(t){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:s.F}),e.prev=1,e.next=4,o.a.get("".concat(l,"/api/loan/all"));case 4:n=e.sent,a=n.data,t({type:s.H,payload:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:s.a,payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(n){var a,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:s.D}),t.prev=1,t.next=4,o.a.get("".concat(l,"/api/loan/").concat(e));case 4:a=t.sent,r=a.data,n({type:s.E,payload:r}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n({type:s.C,payload:t.t0});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(n){var a,r,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:s.i}),t.prev=1,t.next=4,o.a.get("".concat(l,"/api/loan/").concat(e,"/payments"));case 4:a=t.sent,r=a.data,i=r.payments,n({type:s.j,payload:i}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),n({type:s.e,payload:t.t0});case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()},j=function(e){var t=e.profileid,n=e.payment;return function(){var e=Object(r.a)(c.a.mark((function e(a){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:s.c}),e.prev=1,e.next=4,o.a.post("".concat(l,"/api/loan/").concat(t,"/payments/add"),{payment:n});case 4:r=e.sent,a({type:s.d,payload:r}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a({type:s.b,payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},f=function(e){var t=e.profileId,n=e.paymentId;return function(){var e=Object(r.a)(c.a.mark((function e(a){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:s.g}),e.prev=1,e.next=4,o.a.delete("".concat(l,"/api/loan/").concat(t,"/payments/remove"),{data:{paymentId:n}});case 4:r=e.sent,a({type:s.h,payload:r}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a({type:s.f,payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(n){var a,r,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:s.r}),t.prev=1,t.next=4,o.a.get("".concat(l,"/api/loan/").concat(e,"/products"));case 4:a=t.sent,r=a.data,i=r.products,n({type:s.s,payload:i}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),n({type:s.n,payload:t.t0});case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()},b=function(e){var t=e.products,n=e.profileid;return function(){var e=Object(r.a)(c.a.mark((function e(a){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:s.l}),e.prev=1,e.next=4,o.a.post("".concat(l,"/api/loan/").concat(n,"/addproducts"),{products:t});case 4:r=e.sent,a({type:s.m,payload:r}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a({type:s.k,payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},h=function(e){var t=e.products,n=e.profileId;return function(){var e=Object(r.a)(c.a.mark((function e(a){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:s.p}),e.prev=1,e.next=4,o.a.delete("".concat(l,"/api/loan/").concat(n,"/removeProducts"),{data:{products:t}});case 4:r=e.sent,a({type:s.q,payload:r}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a({type:s.o,payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},g=function(e,t){return function(){var n=Object(r.a)(c.a.mark((function n(a){var r,i;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a({type:s.A}),n.prev=1,n.next=4,o.a.post("".concat(l,"/api/loan/").concat(t,"/edit"),e);case 4:r=n.sent,i=r.data,a({type:s.B,payload:i}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),a({type:s.z,payload:n.t0});case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(n){var a,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:s.x}),t.prev=1,t.next=4,o.a.delete("".concat(l,"/api/loan/").concat(e,"/delete"));case 4:a=t.sent,r=a.data,n({type:s.y,payload:r}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n({type:s.w,payload:t.t0});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},y=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"SEL_PAY",payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"SEL_PROD",payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(n){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:s.u}),t.prev=1,t.next=4,o.a.post("".concat(l,"/api/loan/add"),e);case 4:a=t.sent,n({type:s.v,payload:a.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),n({type:s.t,payload:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},w=function(){return function(e){e({type:s.G})}}}}]);
//# sourceMappingURL=31.d294ca11.chunk.js.map