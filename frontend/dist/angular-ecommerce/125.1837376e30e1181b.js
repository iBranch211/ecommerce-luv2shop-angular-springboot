"use strict";(self.webpackChunkangular_ecommerce=self.webpackChunkangular_ecommerce||[]).push([[125],{33125:(v,i,c)=>{c.r(i),c.d(i,{ProductDetailsComponent:()=>h});var s=c(53162);class u{}var t=c(98256),l=c(66082),n=c(94166),p=c(90910),m=c(36895);let h=(()=>{class o{constructor(r,e,d){this.productService=r,this.route=e,this.cartService=d,this.product=new u}ngOnInit(){this.route.paramMap.subscribe(()=>{this.handleProductDetails()})}handleProductDetails(){const r=+this.route.snapshot.paramMap.get("id");this.productService.getProduct(r).subscribe(e=>{this.product=e})}addToCart(){const r=new s.b(this.product);this.cartService.addToCart(r)}}return o.\u0275fac=function(r){return new(r||o)(t.Y36(l.M),t.Y36(n.gz),t.Y36(p.N))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-product-details"]],decls:18,vars:7,consts:[[1,"detail-section"],[1,"container-fluid","product-detail-container"],[1,"left-detail"],["alt","image-url",1,"detail-img",3,"src"],[1,"price"],[1,"btn","btn-primary","btn-style",3,"click"],[1,"right-detail"],["routerLink","/products"]],template:function(r,e){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h3"),t._uU(4),t.qZA(),t._UZ(5,"img",3),t.TgZ(6,"div",4),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.TgZ(9,"button",5),t.NdJ("click",function(){return e.addToCart()}),t._uU(10," Add to cart "),t.qZA()(),t.TgZ(11,"div",6)(12,"h4"),t._uU(13,"Description"),t.qZA(),t.TgZ(14,"p"),t._uU(15),t.qZA(),t.TgZ(16,"a",7),t._uU(17,"\u21da Back to Product List"),t.qZA()()()()),2&r&&(t.xp6(4),t.Oqu(e.product.name),t.xp6(1),t.s9C("src",e.product.imageUrl,t.LSH),t.xp6(2),t.Oqu(t.xi3(8,4,e.product.unitPrice,"USD")),t.xp6(8),t.Oqu(e.product.description))},dependencies:[n.yS,m.H9]}),o})()}}]);