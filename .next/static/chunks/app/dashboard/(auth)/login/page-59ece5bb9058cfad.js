(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[997],{2217:function(e,t,s){Promise.resolve().then(s.bind(s,1576))},1576:function(e,t,s){"use strict";s.r(t);var n=s(9268),a=s(6006),i=s(3854),r=s.n(i),l=s(4751),o=s(6008),u=s(5846),c=s.n(u);let _=e=>{let{url:t}=e,s=(0,l.useSession)(),i=(0,o.useRouter)(),u=(0,o.useSearchParams)(),[_,p]=(0,a.useState)(""),[g,d]=(0,a.useState)("");if((0,a.useEffect)(()=>{p(u.get("error")),d(u.get("success"))},[u]),"loading"===s.status)return(0,n.jsx)("p",{children:"Loading..."});"authenticated"===s.status&&(null==i||i.push("/dashboard"));let h=e=>{e.preventDefault();let t=e.target[0].value,s=e.target[1].value;(0,l.signIn)("credentials",{email:t,password:s})};return(0,n.jsxs)("div",{className:r().container,children:[(0,n.jsx)("h1",{className:r().title,children:g||"Welcome Back"}),(0,n.jsx)("h2",{className:r().subtitle,children:"Please sign in to see the dashboard."}),(0,n.jsxs)("form",{onSubmit:h,className:r().form,children:[(0,n.jsx)("input",{type:"text",placeholder:"Email",required:!0,className:r().input}),(0,n.jsx)("input",{type:"password",placeholder:"Password",required:!0,className:r().input}),(0,n.jsx)("button",{className:r().button,children:"Login"}),_&&_]}),(0,n.jsx)("button",{onClick:()=>{(0,l.signIn)("google")},className:r().button+" "+r().google,children:"Login with Google"}),(0,n.jsx)("span",{className:r().or,children:"- OR -"}),(0,n.jsx)(c(),{className:r().link,href:"/dashboard/register",children:"Create new account"})]})};t.default=_},3854:function(e){e.exports={container:"page_container__iHLIK",title:"page_title__dIlPn",subtitle:"page_subtitle__OktW7",form:"page_form__BqeIp",input:"page_input__zuXmB",button:"page_button__ShNXW",or:"page_or__BKfVS",link:"page_link__pbnyY",google:"page_google__cUOz6"}},5846:function(e,t,s){e.exports=s(414)},6008:function(e,t,s){e.exports=s(167)}},function(e){e.O(0,[414,751,667,139,744],function(){return e(e.s=2217)}),_N_E=e.O()}]);