"use strict";(self.webpackChunkmyEcommerce=self.webpackChunkmyEcommerce||[]).push([[848],{848:(m,i,t)=>{t.r(i),t.d(i,{AllordersComponent:()=>p});var l=t(6814),e=t(9468),a=t(3750),d=t(6425);function _(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"div",5)(2,"div",6)(3,"div"),e._uU(4),e.qZA(),e.TgZ(5,"div"),e._uU(6),e.qZA(),e.TgZ(7,"div"),e._uU(8),e.ALo(9,"currency"),e.qZA()()(),e.BQk()),2&n){const s=o.$implicit,r=o.index;e.xp6(4),e.hij("order ",r+1,""),e.xp6(2),e.hij(" ",s.paymentMethodType," "),e.xp6(2),e.hij(" Total Price: ",e.xi3(9,3,s.totalOrderPrice,"EGP ")," ")}}let p=(()=>{var n;class o{constructor(r,c){this._AuthService=r,this._CartService=c,this.allOrders=[]}ngOnInit(){this._CartService.allOrders(this._AuthService.saveUsrData().id).subscribe({next:r=>{this.allOrders=r,console.log(this.allOrders)}})}}return(n=o).\u0275fac=function(r){return new(r||n)(e.Y36(a.e),e.Y36(d.N))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-allorders"]],standalone:!0,features:[e.jDz],decls:6,vars:1,consts:[[1,"py-5"],[1,"container"],[1,"text-center"],[1,"row","g-3"],[4,"ngFor","ngForOf"],[1,"col-md-4","col-lg-3"],[1,"card","p-3"]],template:function(r,c){1&r&&(e.TgZ(0,"section",0)(1,"div",1)(2,"h1",2),e._uU(3,"All User Orders"),e.qZA(),e.TgZ(4,"div",3),e.YNc(5,_,10,6,"ng-container",4),e.qZA()()()),2&r&&(e.xp6(5),e.Q6J("ngForOf",c.allOrders))},dependencies:[l.ez,l.sg,l.H9]}),o})()}}]);