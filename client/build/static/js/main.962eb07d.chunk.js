(this.webpackJsonpmy_portfolio=this.webpackJsonpmy_portfolio||[]).push([[0],{111:function(e,t,i){},112:function(e,t,i){},120:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i(32),c=i.n(a),s=i(12),o=i(13),r=i(14),l=i(15),d=i(79),j=i(9),h=i(36),u=(i(55),i(25)),b=i(44),m=i(1),p=function(e){Object(r.a)(i,e);var t=Object(l.a)(i);function i(){var e;Object(s.a)(this,i);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).handleGitHubclick=function(){window.open("https://github.com/Eddie-Reta","_blank")},e.handleLinkedInclick=function(){window.open("https://www.linkedin.com/in/eduardo-reta-936130181/","_blank")},e}return Object(o.a)(i,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:this.props.NSL,children:[Object(m.jsx)(u.a,{onClick:this.handleGitHubclick,className:this.props.iconStyle,icon:b.b,size:"3x"}),Object(m.jsx)(u.a,{onClick:this.handleLinkedInclick,className:this.props.iconStyle,icon:b.c,size:"3x"})]})}}]),i}(n.Component),O=p,x=i(24),k=window.matchMedia("(min-width: 800px)"),v=function(e){Object(r.a)(i,e);var t=Object(l.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e)).state={matches:k.matches,active:!1},n.navActive=n.navActive.bind(Object(h.a)(n)),n}return Object(o.a)(i,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.navActive)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.navActive)}},{key:"navActive",value:function(){window.scrollY>100?this.setState({active:!0}):this.setState({active:!1})}},{key:"render",value:function(){return Object(m.jsx)("div",{id:"deskNav",children:this.state.matches&&Object(m.jsx)("nav",{children:Object(m.jsxs)("div",{className:this.state.active?"navBar active":"navBar",children:[Object(m.jsxs)("div",{className:"linkBox",children:[Object(m.jsx)(x.Link,{to:"info",className:"buttonLink",smooth:!0,delay:400,duration:700,children:"About"}),Object(m.jsx)(x.Link,{to:"portfolio",className:"buttonLink",smooth:!0,delay:400,duration:700,children:"Portfolio"}),Object(m.jsx)(x.Link,{to:"contact",className:"buttonLink",smooth:!0,delay:400,duration:700,children:"Contact"})]}),Object(m.jsx)(O,{NSL:"nsl",iconStyle:"navSocialLinks"})]})})})}}]),i}(n.Component),f=i.p+"static/media/dead_link.8381ef01.png",g=function(e){Object(r.a)(i,e);var t=Object(l.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"noMatch",children:[Object(m.jsx)(v,{}),Object(m.jsxs)("div",{className:"errorMessage",children:[Object(m.jsx)("a",{className:"errorHomeBtn",href:"/",children:"Home"}),Object(m.jsx)("h1",{className:"errorPara",children:"404 Sorry!! Link does not exist!!"}),Object(m.jsx)("img",{id:"deadLink",src:f,alt:"deadLink"})]})]})}}]),i}(n.Component),y=g,N=i(8),w=(i(71),function(e){Object(r.a)(i,e);var t=Object(l.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(m.jsxs)("div",{id:"info",name:"info",children:[Object(m.jsx)("div",{className:"homeText",children:Object(m.jsxs)("div",{id:"aboutMe",children:[Object(m.jsx)("h1",{className:"h1Title",children:"About Me"}),Object(m.jsx)("p",{className:"aboutPara",children:"Hi my name is Eduardo Reta. I am a recent graduate from the UNC Full Stack Web Developer Boot Camp and I am eager to begin exploring web development opportunities. I have a passion for building front and back end web applications, this can be showcased via my portfolio."})]})}),Object(m.jsxs)("div",{className:"homeText1",children:[Object(m.jsx)("h1",{className:"h1Title",children:" Technologies worked with:"}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{className:"skill",children:"HTML"}),Object(m.jsx)("li",{className:"skill",children:"CSS"}),Object(m.jsx)("li",{className:"skill",children:"JAVASCRIPT"}),Object(m.jsx)("li",{className:"skill",children:"JQUERY"}),Object(m.jsx)("li",{className:"skill",children:"React.js"}),Object(m.jsx)("li",{className:"skill",children:"MongoDB"}),Object(m.jsx)("li",{className:"skill",children:"Bootstrap"}),Object(m.jsx)("li",{className:"skill",children:"Node.js"}),Object(m.jsx)("li",{className:"skill",children:"Heroku"}),Object(m.jsx)("li",{className:"skill",children:"Git/GitHub"}),Object(m.jsx)("li",{className:"skill",children:"RESTful API's"})]})]})]})}}]),i}(n.Component)),S=w,L=i.p+"static/media/reactPort (2).e8aea952.png",C=i.p+"static/media/NoteStack.02a31ca1.jpg",T=i.p+"static/media/Liri.ff43389a.jpg",_=i.p+"static/media/dice.31637a99.jpg",E=i.p+"static/media/box.2717a179.jpg",R=(i(111),function(e){Object(r.a)(i,e);var t=Object(l.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e)).handleGitLink=function(){"NodeStack"===n.props.image&&n.setState({image:C}),"Liri"===n.props.image&&n.setState({image:T}),"Dice"===n.props.image&&n.setState({image:_}),"ReactThumbnail"===n.props.image&&n.setState({image:L}),"Box"===n.props.image&&n.setState({image:E})},n.missingLink=function(){var e=n.props.link;void 0===e&&null===e||n.setState({links:!0})},n.state={image:[],links:!1},n}return Object(o.a)(i,[{key:"componentDidMount",value:function(){this.handleGitLink(),this.missingLink()}},{key:"render",value:function(){var e=this,t={color:"#222731"};return Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("div",{className:"img-container",children:Object(m.jsx)("img",{className:"imageControl",src:this.state.image,alt:this.props.imageCredit})}),Object(m.jsx)("div",{className:"content",children:Object(m.jsxs)("ul",{children:[Object(m.jsxs)("li",{children:[Object(m.jsx)("strong",{style:t,children:"Project:"})," ",this.props.name]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("strong",{style:t,children:"Description:"})," ",this.props.description]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("strong",{style:t,children:"Technologies:"})," ",this.props.technologies]}),this.state.links&&Object(m.jsx)("li",{children:Object(m.jsx)("button",{className:"herokuButton",onClick:function(t){t=e.props.link,window.open(t,"_blank")},children:"Website Link"})}),Object(m.jsx)("li",{children:Object(m.jsx)("button",{className:"githubButton",onClick:function(t){t=e.props.github,window.open(t,"_blank")},children:Object(m.jsx)(u.a,{icon:b.a,size:"2x"})})})]})})]})}}]),i}(n.Component)),A=i(62),B=i(38),P=function(e){Object(r.a)(i,e);var t=Object(l.a)(i);function i(){var e;Object(s.a)(this,i);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={projects:A},e}return Object(o.a)(i,[{key:"render",value:function(){return Object(m.jsx)("div",{id:"portfolio2",className:"portfolio",children:Object(m.jsx)("div",{className:"cards",children:this.state.projects.map((function(e){return Object(m.jsx)(R,{id:e.id,name:e.name,image:e.image,description:e.description,technologies:e.technologies,github:e.github_link,link:e.link},e.id)}))})})}}]),i}(n.Component);function I(){var e=Object(n.useState)(0),t=Object(N.a)(e,2),i=t[0],a=t[1],c=[];A.map((function(e){return c.push(Object(m.jsx)(R,{id:e.id,name:e.name,image:e.image,description:e.description,technologies:e.technologies,github:e.github_link,link:e.link},e.id))}));return Object(m.jsxs)("div",{id:"portfolioCarousel",name:"portfolioCarousel",children:[c[i],Object(m.jsxs)("div",{className:"portfolioLR",children:[Object(m.jsx)("div",{onClick:function(){var e=c.length-1;a(0===i?e:i-1)},style:{color:"white"},children:Object(m.jsx)(u.a,{icon:B.c,size:"3x"})}),Object(m.jsx)("div",{onClick:function(){var e=c.length-1;a(i>=e?0:i+1)},style:{color:"white"},children:Object(m.jsx)(u.a,{icon:B.d,size:"3x"})})]})]})}var D=function(e){Object(r.a)(i,e);var t=Object(l.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e)).state={colorChange:""},n}return Object(o.a)(i,[{key:"componentDidMount",value:function(){var e=this;return this.pageLoad=[setInterval((function(){e.setState({colorChange:"#ca3e47"})}),1500)],function(){return clearInterval(e.pageLoad)}}},{key:"componentWillUnmount",value:function(){clearInterval(this.pageLoad)}},{key:"render",value:function(){return Object(m.jsx)("div",{id:"intro",children:Object(m.jsxs)("div",{className:"introDescription",children:[Object(m.jsxs)("div",{id:"h_1",className:"introPara",children:["Hello, I'm ",Object(m.jsx)("span",{className:"fullName",children:"Eduardo Reta Jr."})]}),Object(m.jsxs)("div",{id:"h_2",className:"introPara",children:["I'm a ",Object(m.jsx)("span",{children:"full stack web developer."})]}),Object(m.jsx)("div",{id:"h_3",style:{visibility:this.state.h_3},className:"introPara",children:Object(m.jsx)("span",{children:"Ready to bring your website and ideas online."})})]})})}}]),i}(n.Component);i(112);var H=function(e){var t=(new Date).getFullYear(),i=Object(n.useState)(!1),a=Object(N.a)(i,2),c=a[0],s=a[1];return Object(n.useEffect)((function(){var e=function(){var e=window.innerWidth;s(e<800)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[c]),Object(m.jsxs)("div",{id:"footer",children:[Object(m.jsx)(O,{NSL:"footerLinks",iconStyle:"socialFooterLinks"}),Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Copyright \xa9 "})," 2019 - ",t]}),Object(m.jsx)("button",{style:{display:"".concat(e.styleButton),marginTop:"".concat(c?"1%":"0.5%")},className:"scrollUp",onClick:function(){x.animateScroll.scrollToTop()},children:"Back to Top"})]})};var M=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{className:"emailPlaceholder",children:"Thank you for checking out my site."}),Object(m.jsx)("h2",{className:"emailPlaceholder",children:"To checkout my resume out, please click on the resume button link."})]})},G=function(e){Object(r.a)(i,e);var t=Object(l.a)(i);function i(){var e;Object(s.a)(this,i);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).handleEmailClick=function(){window.location.href="mailto:dev.eddie.reta@gmail.com"},e.resumeLink=function(){return Object(m.jsx)("a",{className:"emailLink",href:"mobilePDF",children:"Click for Resume"})},e}return Object(o.a)(i,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"contact",name:"contact",children:Object(m.jsx)(M,{})})}}]),i}(n.Component),J=G,z=(i(72),i(63)),W=i(145),U=i(154),F=i(150),K=i(153),Q=i(152);var Y=function(){var e=Object(n.useState)(!1),t=Object(N.a)(e,2),i=t[0],a=t[1],c=Object(n.useState)(null),s=Object(N.a)(c,2),o=s[0],r=s[1],l=i&&Boolean(o)?"transition-popper":void 0,d=function(){a(!1)},j=function(){x.animateScroll.scrollToTop()};return Object(m.jsxs)("div",{id:"mobNav",children:[Object(m.jsx)(W.a,{onClickAway:d,children:Object(m.jsx)(U.a,{size:"large",variant:"contained",color:"secondary","aria-describedby":l,type:"button",onClick:function(e){r(e.currentTarget),a((function(e){return!e}))},style:{backgroundColor:"#ca3e47"},children:Object(m.jsx)(u.a,{icon:B.b,size:"2x"})})}),Object(m.jsx)(F.a,{id:l,open:i,anchorEl:o,transition:!0,children:function(e){var t=e.TransitionProps;return Object(m.jsx)(K.a,Object(z.a)(Object(z.a)({},t),{},{timeout:350,children:Object(m.jsxs)("div",{className:"mobileMenuColl",children:[Object(m.jsx)(Q.a,{children:Object(m.jsx)(x.Link,{to:"info",className:"buttonLink",smooth:!0,delay:400,duration:700,onClick:d,children:"About"})}),Object(m.jsx)(Q.a,{children:Object(m.jsx)(x.Link,{to:"portfolioCarousel",className:"buttonLink",smooth:!0,delay:400,duration:700,onClick:d,children:"Portfolio"})}),Object(m.jsx)(Q.a,{children:Object(m.jsx)(x.Link,{to:"contact",className:"buttonLink",smooth:!0,delay:400,duration:700,onClick:d,children:"Contact"})}),Object(m.jsx)(Q.a,{children:Object(m.jsx)(u.a,{className:"buttonLink",icon:B.a,size:"2x",onClick:j})})]})}))}})]})},V=function(){return Object(m.jsx)("div",{id:"resumeLink",children:Object(m.jsx)("a",{href:"https://docs.google.com/document/d/1KJIBTB8b65RRJXyyalPKKB1rJcQ7EWmnmslmASjEdF8/edit?usp=sharing",target:"_blank",rel:"noreferrer",children:Object(m.jsx)("strong",{children:"Resume"})})})};var X=function(){var e=Object(n.useState)(!1),t=Object(N.a)(e,2),i=t[0],a=t[1],c=window.innerWidth;Object(n.useEffect)((function(){s()}));var s=function(){c<800&&a(!0)};return window.addEventListener("resize",(function(e){var t=window.innerWidth;a(t<800)})),Object(m.jsxs)("div",{className:"homePage",children:[i?Object(m.jsx)(Y,{}):Object(m.jsx)(v,{}),Object(m.jsx)(D,{}),Object(m.jsx)(S,{}),i?Object(m.jsx)(I,{}):Object(m.jsx)(P,{}),Object(m.jsx)(V,{}),Object(m.jsx)(J,{}),Object(m.jsx)(H,{})]})},q=function(e){Object(r.a)(i,e);var t=Object(l.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(m.jsx)(d.a,{children:Object(m.jsxs)(j.c,{children:[Object(m.jsx)(j.a,{exact:!0,path:"/",component:X}),Object(m.jsx)(j.a,{exact:!0,path:"/api"}),Object(m.jsx)(j.a,{component:y})]})})}}]),i}(n.Component),Z=q;c.a.render(Object(m.jsx)(Z,{}),document.getElementById("root"))},55:function(e,t,i){},62:function(e){e.exports=JSON.parse('[{"id":1,"name":"React Portfolio","image":"ReactThumbnail","description":"Portfolio created using React.","technologies":"React, HTML, Javascript, CSS, NODE, GIT BASH, Express.js, EmailJS, Heroku","link":"https://eddie-reta.herokuapp.com/","github_link":"https://github.com/Eddie-Reta/Portfolio"},{"id":2,"name":"Note Stack","image":"NodeStack","imageCredit":"<span>Photo by <a href=\'https://unsplash.com/@freegraphictoday?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText\'>AbsolutVision</a> on <a href=\'https://unsplash.com/s/photos/note?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText\'>Unsplash</a></span>","description":"Simple site to keep notes on your desktop.","technologies":"React, HTML, Javascript, CSS, NODE, GIT BASH","link":"https://eddie-reta.github.io/Note_Stack/","github_link":"https://github.com/Eddie-Reta/Note_Stack"},{"id":3,"name":"Liri","image":"Liri","imageCredit":"<span>Photo by <a href=\'https://unsplash.com/@markusspiske?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText\'>Markus Spiske</a> on <a href=\'https://unsplash.com/s/photos/javascript?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText\'>Unsplash</a></span>","description":"LIRI will be a command line node app that takes in parameters and gives you back data.","technologies":"Javascript, NODE, GIT BASH","github_link":"https://github.com/Eddie-Reta/liri-node-app"},{"id":4,"name":"DiceGame","image":"Dice","description":"PIG(Dice Game) Two player game to reach 100 points first. Raise your bet!!","technologies":"HTML, Javascript, CSS, NODE, GIT BASH,","link":"https://eddie-reta.github.io/DiceGame/","github_link":"https://github.com/Eddie-Reta/DiceGame"},{"id":5,"name":"bAmazon","image":"Box","imageCredit":"Box","description":"Amazon-like storefront app which takes orders from customers and depletes stock from the store\'s inventory.","technologies":"Node.js. Javascript, MySQL","github_link":"https://github.com/Eddie-Reta/bAmazon"}]')},71:function(e,t,i){},72:function(e,t,i){}},[[120,1,2]]]);
//# sourceMappingURL=main.962eb07d.chunk.js.map