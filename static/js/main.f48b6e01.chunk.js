(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),c=a(4),s=a(2),r=a(1),l=(a(13),a(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),o=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],d=a(8),m=a.n(d),u=a(0),j=function(e){var t=e.user;return Object(u.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})};var b=function(e){var t,a=e.todo,n=(t=a.userId,l.find((function(e){return e.id===t}))||null);return Object(u.jsxs)("article",{"data-id":a.id,className:m()("TodoInfo",{"TodoInfo--completed":a.completed}),children:[Object(u.jsx)("h2",{className:"TodoInfo__title",children:a.title}),n&&Object(u.jsx)(j,{user:n})]},a.id)},h=function(e){var t=e.todos;return Object(u.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(u.jsx)(b,{todo:e},e.id)}))})};var O=function(){var e,t=Object(r.useState)(""),a=Object(s.a)(t,2),n=a[0],i=a[1],d=Object(r.useState)(0),m=Object(s.a)(d,2),j=m[0],b=m[1],O=Object(r.useState)(o),f=Object(s.a)(O,2),p=f[0],x=f[1],v=Object(r.useState)(!1),N=Object(s.a)(v,2),y=N[0],S=N[1],I=Object(r.useState)(!1),g=Object(s.a)(I,2),C=g[0],_=g[1],k=(e=p,Math.max.apply(Math,Object(c.a)(e.map((function(e){return e.id}))))+1),D=Object(c.a)(l);return Object(u.jsxs)("div",{className:"section",children:[Object(u.jsx)("h1",{className:"title",children:"Add todo form"}),Object(u.jsxs)("form",{name:"form ".concat(k),action:"/api/todos",method:"POST",onSubmit:function(e){e.preventDefault(),S(j<=0),""===n.trim()?_(!0):_(!1),j>0&&""!==n.trim()&&(S(!1),_(!1),x([].concat(Object(c.a)(p),[{id:k,title:n,completed:!1,userId:j}])),i(""),b(0))},className:"box",children:[Object(u.jsx)("div",{className:"field",children:Object(u.jsxs)("div",{className:"control",children:[Object(u.jsx)("input",{className:"input input-length",id:"".concat(k),type:"text",placeholder:"Please enter a title","data-cy":"titleInput",value:n,onChange:function(e){i(e.target.value),_(!1)}}),C&&Object(u.jsx)("div",{className:"error",children:"Please enter a title"})]})}),Object(u.jsx)("div",{className:"field",children:Object(u.jsxs)("div",{className:"control",children:[Object(u.jsx)("div",{className:"select",children:Object(u.jsxs)("select",{"data-cy":"userSelect",id:"selectFild ".concat(k),value:j,onChange:function(e){b(+e.target.value),S(!1)},children:[Object(u.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),D.map((function(e){var t=e.id,a=e.name;return Object(u.jsx)("option",{value:t,children:a},t)}))]})}),y&&Object(u.jsx)("div",{className:"error",children:"Please choose a user"})]})}),Object(u.jsx)("div",{className:"field",children:Object(u.jsx)("div",{className:"control",children:Object(u.jsx)("button",{className:"button is-link",id:"submit",type:"submit","data-cy":"submitButton",children:"Add"})})})]}),Object(u.jsx)(h,{todos:p})]})};i.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.f48b6e01.chunk.js.map