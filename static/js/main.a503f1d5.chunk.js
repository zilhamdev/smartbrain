(this.webpackJsonpsmartbrain=this.webpackJsonpsmartbrain||[]).push([[0],{322:function(e,t,n){},324:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n(13),i=n(45),r=n.n(i),c=n(10),o=n(22),l=n(23),u=n(25),b=n(24);function d(e){var t=e.onRouteChange,n=e.isSignedIn,s=e.signOut;return n?Object(a.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(a.jsx)("p",{className:"f3 link dim black underline pa3 pointer",onClick:s,children:"Sign Out"})}):Object(a.jsxs)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(a.jsx)("p",{className:"f3 link dim black underline pa3 pointer",onClick:function(){return t("signin")},children:"Sign In"}),Object(a.jsx)("p",{className:"f3 link dim black underline pa3 pointer",onClick:function(){return t("register")},children:"Register"})]})}n(86),n(87);var h=n(79),m=n.n(h),p=n.p+"static/media/brain.e54bb859.svg";function j(){return Object(a.jsx)("div",{className:"ma4 mt0",children:Object(a.jsx)(m.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{height:120,width:120},children:Object(a.jsx)("div",{className:"Tilt-inner pa3",children:Object(a.jsx)("img",{src:p,alt:"brain logo",style:{width:100}})})})})}function g(e){var t=e.userName,n=e.userEntries;return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"white f3",children:"".concat(t,", your current entry count is...")}),Object(a.jsx)("div",{className:"white f1",children:n})]})}n(88);function f(e){var t=e.onInputChange,n=e.inputValue,s=e.onDetect;return Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{className:"f3",children:"This Magic Brain will detect faces in your pictures. Give it a try."}),Object(a.jsx)("div",{className:"form center",children:Object(a.jsxs)("div",{className:"center pa4 br3 shadow-5",children:[Object(a.jsx)("input",{className:"f4 pa2 w-70 center",type:"text",name:"url",onChange:t,value:n}),Object(a.jsx)("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:s,children:"Detect"})]})})]})}n(89);function O(e){var t=e.imgUrl,n=e.box;return Object(a.jsx)("div",{className:"centered ma",children:Object(a.jsxs)("div",{className:"relative mt3",children:[Object(a.jsx)("img",{id:"imageInput",src:t,alt:"",width:"500vw",height:"auto"}),t&&n?n.map((function(e){return Object(a.jsx)("div",{className:"bounding-box",style:{top:e.topRow,right:e.rightCol,bottom:e.bottomRow,left:e.leftCol}},e.id)})):null]})})}function v(){var e=(new Date).getFullYear();return Object(a.jsx)("footer",{className:"pt2",children:Object(a.jsxs)("p",{className:"f6 center black pa3",children:["\xa9 ",e," Zilhamdev."]})})}var x=n(21),w=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).onChange=function(e){var t=e.target,n=t.name,s=t.value;a.setState(Object(x.a)({},n,s))},a.onSubmitSignIn=function(){fetch("https://zildev-smartbrain-api.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.emailAddress,password:a.state.password})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))})).catch((function(e){return console.log(e)}))},a.state={emailAddress:"",password:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.onRouteChange;return Object(a.jsx)("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(a.jsx)("main",{className:"pa4 black-80",children:Object(a.jsxs)("div",{className:"measure center",children:[Object(a.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(a.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Sign In"}),Object(a.jsxs)("div",{className:"mt3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(a.jsx)("input",{className:"pa2 input-reset b--black-50 ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"emailAddress",id:"email-address",onChange:this.onChange,value:this.state.emailAddress})]}),Object(a.jsxs)("div",{className:"mv3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{className:"b pa2 input-reset b--black-50 ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onChange,value:this.state.password})]})]}),Object(a.jsx)("div",{className:"",children:Object(a.jsx)("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in",onClick:function(){e.onSubmitSignIn()}})}),Object(a.jsx)("div",{className:"lh-copy mt3",children:Object(a.jsx)("p",{className:"f6 link dim black db pointer",onClick:function(){return t("register")},children:"Register"})})]})})})}}]),n}(s.Component),N=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).onChange=function(e){var t=e.target,n=t.name,s=t.value;a.setState(Object(x.a)({},n,s))},a.onSubmitRegister=function(){fetch("https://zildev-smartbrain-api.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a.state.name,email:a.state.emailAddress,password:a.state.password})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))})).catch((function(e){return console.log(e)}))},a.state={name:"",emailAddress:"",password:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsx)("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(a.jsx)("main",{className:"pa4 black-80",children:Object(a.jsxs)("form",{className:"measure center",children:[Object(a.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(a.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Register"}),Object(a.jsxs)("div",{className:"mt3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"name",children:"Name"}),Object(a.jsx)("input",{className:"pa2 input-reset b--black-50 ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onChange,value:this.state.name})]}),Object(a.jsxs)("div",{className:"mt3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(a.jsx)("input",{className:"pa2 input-reset b--black-50 ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"emailAddress",id:"email-address",onChange:this.onChange,value:this.state.emailAddress})]}),Object(a.jsxs)("div",{className:"mv3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{className:"b pa2 input-reset b--black-50 ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onChange,value:this.state.password})]})]}),Object(a.jsx)("div",{className:"",children:Object(a.jsx)("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register",onClick:function(t){t.preventDefault(),e.onSubmitRegister()}})}),Object(a.jsx)("div",{className:"lh-copy mt3",children:Object(a.jsx)("p",{className:"f6 link dim black db pointer",onClick:function(){return e.props.onRouteChange("signin")},children:"Sign In"})})]})})})}}]),n}(s.Component),C=n(80),y=n.n(C),k={particles:{number:{value:150,density:{enable:!0},value_area:800}}},S={route:"signin",isSignedIn:!1,input:"",imgUrl:"",box:{},user:{id:null,name:"",email:"",entries:0,joined:""}},R=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).signOut=function(){e.setState(S)},e.loadUser=function(t){e.setState((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})}))},e.onRouteChange=function(t){"home"!==t?e.setState(Object(c.a)(Object(c.a)({},S),{},{route:t})):"home"===t&&e.setState((function(e){return Object(c.a)(Object(c.a)({},e),{},{isSignedIn:!0,route:t})}))},e.onInputChange=function(t){var n=t.target.value;e.setState((function(e){return Object(c.a)(Object(c.a)({},e),{},{input:n,imgUrl:n,box:[]})}))},e.calculateFaceLocation=function(e){var t=document.getElementById("imageInput"),n=Number(t.width),a=Number(t.height);return e.outputs[0].data.regions.map((function(e){return e.region_info.bounding_box})).map((function(e,t){return{id:t,leftCol:e.left_col*n,topRow:e.top_row*a,rightCol:n-e.right_col*n,bottomRow:a-e.bottom_row*a}}))},e.displayFaceBox=function(t){e.setState((function(e){return Object(c.a)(Object(c.a)({},e),{},{box:t})}))},e.onDetect=function(){e.setState((function(t){return Object(c.a)(Object(c.a)({},t),{},{imgUrl:e.state.input})})),fetch("https://zildev-smartbrain-api.herokuapp.com/imageurl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.imgUrl})}).then((function(e){return e.json()})).then((function(t){t&&fetch("https://zildev-smartbrain-api.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})).catch((function(e){return console.log(e)})),e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.state=S,e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.route,n=e.isSignedIn,s=e.input,i=e.imgUrl,r=e.box;return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(y.a,{className:"particles",params:k}),Object(a.jsx)(d,{isSignedIn:n,signOut:this.signOut,onRouteChange:this.onRouteChange}),"register"===t&&Object(a.jsx)(N,{onRouteChange:this.onRouteChange,loadUser:this.loadUser}),("signin"===t||"signout"===t)&&Object(a.jsx)(w,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}),"home"===t&&Object(a.jsxs)("div",{children:[Object(a.jsx)(j,{}),Object(a.jsx)(g,{userName:this.state.user.name,userEntries:this.state.user.entries}),Object(a.jsx)(f,{onInputChange:this.onInputChange,inputValue:s,onDetect:this.onDetect}),Object(a.jsx)(O,{box:r,imgUrl:i})]}),Object(a.jsx)(v,{})]})}}]),n}(s.Component),I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,325)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),i(e),r(e)}))};n(322),n(323);r.a.render(Object(a.jsx)(R,{}),document.getElementById("root")),I()},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){}},[[324,1,2]]]);
//# sourceMappingURL=main.a503f1d5.chunk.js.map