"use strict";(self.webpackChunkrealtor_react=self.webpackChunkrealtor_react||[]).push([[132],{984:(e,s,t)=>{t.d(s,{f:()=>d});var a=t(5689),n=t(7799),i=t(3728),r=t(9085),o=t(673),c=t(7689),l=t(2791),m=t(184);const d=l.memo((()=>{const e=(0,c.s0)();return(0,m.jsxs)("button",{onClick:async function(){try{const s=(0,a.v0)(),t=new a.hJ,i=(await(0,a.rh)(s,t)).user,r=(0,n.JU)(o.db,"users",i.uid);(await(0,n.QT)(r)).exists()||await(0,n.pl)(r,{name:i.displayName,email:i.email,timestamp:(0,n.Bt)()}),e("/")}catch(s){r.Am.error("Could not authorize with Google")}},type:"button",className:" OAuth-btn",children:[(0,m.jsx)(i.JM8,{className:" OAuth-btn__google"}),"Continue with Google"]})}))},8132:(e,s,t)=>{t.r(s),t.d(s,{default:()=>l});var a=t(2791),n=(t(9401),t(5689)),i=t(1087),r=t(9085),o=t(984),c=t(184);const l=()=>{const[e,s]=(0,a.useState)(""),[t,l]=(0,a.useState)(!1);return(0,c.jsxs)("section",{className:"form-section",children:[(0,c.jsx)("h1",{className:" form-section__title",children:"Reset Password"}),(0,c.jsxs)("div",{className:" form-section__form-wrapper",children:[(0,c.jsx)("div",{className:"form-section__image-wrap",children:(0,c.jsx)("img",{src:"https://wallpapers.com/images/hd/real-estate-house-keys-h79pvlxway8mwu2p.jpg",alt:"key"})}),(0,c.jsx)("div",{className:"form-section__form-wrap",children:(0,c.jsxs)("form",{onSubmit:async function(s){s.preventDefault(),l(!0);try{const s=(0,n.v0)();await(0,n.LS)(s,e),r.Am.success("Email was sent"),l(!1)}catch(t){r.Am.error("Could not send reset password, Enter valid email"),l(!1)}},className:"form-section__form",children:[(0,c.jsx)("input",{type:"email",id:"email",placeholder:"Email address",className:"form-section__form-input",value:e,onChange:function(e){s(e.target.value)}}),(0,c.jsxs)("div",{className:"form-section__other-detail",children:[(0,c.jsxs)("p",{className:"form-section__account-signing",children:["Don't have a account?",(0,c.jsx)(i.rU,{to:"/sign-up",children:"Register"})]}),(0,c.jsx)("p",{className:"form-section__forgot-password",children:(0,c.jsx)(i.rU,{to:"/sign-in",children:"Sign in instead"})})]}),(0,c.jsx)("button",{className:"form-section__btn-signing",type:"submit",children:t?"Sending Email...":"Send reset Email"}),(0,c.jsx)("div",{className:"form-section__border-line",children:(0,c.jsx)("p",{children:"OR"})}),(0,c.jsx)(o.f,{})]})})]})]})}},9401:()=>{}}]);
//# sourceMappingURL=132.0d0053b2.chunk.js.map