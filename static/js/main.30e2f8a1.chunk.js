(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{12:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var c=s(3),n=s.n(c),a=s(4),r=s(5),o=s(7),l=s(6),i=s(1),d=s.n(i),u=(s(12),s(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){var e;Object(a.a)(this,s);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={selectedGoods:["Jam"],message:"Jam is selected"},e.createMessage=function(e){var t,s="No goods selected",c=e.join(", "),n=e.length;switch(n>=0){case 0===n:return s;case 1===n:s=e.toString().concat(" is selected");break;case 2===n:s=e.join(" and ").concat(" are selected");break;case n>=3:t=c.lastIndexOf(","),s="".concat(c.substring(0,t)," and\n          ").concat(c.substring(t+1)," are selected");break;default:return"No goods selected"}return s},e.updateSelectedGoods=function(e,t){return e.includes(t)?e.splice(e.indexOf(t),1):e.push(t),e},e}return Object(r.a)(s,[{key:"render",value:function(){var e=this,t=this.state,s=t.selectedGoods,c=t.message;return Object(u.jsxs)("div",{className:"App container",children:[Object(u.jsxs)("h1",{children:[c,"  ",Object(u.jsx)("button",{className:"btn btn-warning",type:"button",onClick:function(){s.length=0,e.setState({message:e.createMessage(s)})},children:"Clear"})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("br",{}),Object(u.jsx)("ul",{className:"list-group",children:b.map((function(t){return Object(u.jsxs)("label",{className:"ListItem list-group-item",children:[Object(u.jsx)("li",{className:"list-group-item",children:t}),Object(u.jsx)("button",{className:"btn btn-primary",type:"button",onClick:function(){e.setState({selectedGoods:e.updateSelectedGoods(s,t)}),e.setState({message:e.createMessage(s)})},children:"Select"})]},t)}))})]})}}]),s}(d.a.Component);n.a.render(Object(u.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.30e2f8a1.chunk.js.map