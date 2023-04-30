"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[248],{2248:function(e,n,t){t.r(n),t.d(n,{default:function(){return S}});var r=t(9434),a=t(4942),o=t(1413),u=t(9439),c=t(2791),i="contact-form_boxForm__8ANLS",s="contact-form_boxInput__S4cWZ",l="contact-form_buttonAdd__eO8+u",f={name:"",number:""},m=t(8525),d="NOT_FOUND";var v=function(e,n){return e===n};function p(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,a=void 0===r?v:r,o=t.maxSize,u=void 0===o?1:o,c=t.resultEqualityCheck,i=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,a=0;a<r;a++)if(!e(n[a],t[a]))return!1;return!0}}(a),s=1===u?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:d},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(i):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var a=t[r];return r>0&&(t.splice(r,1),t.unshift(a)),a.value}return d}return{get:r,put:function(n,a){r(n)===d&&(t.unshift({key:n,value:a}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(u,i);function l(){var n=s.get(arguments);if(n===d){if(n=e.apply(null,arguments),c){var t=s.getEntries(),r=t.find((function(e){return c(e.value,n)}));r&&(n=r.value)}s.put(arguments,n)}return n}return l.clearCache=function(){return s.clear()},l}function h(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function x(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var a=function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var o,u=0,c={memoizeOptions:void 0},i=r.pop();if("object"===typeof i&&(c=i,i=r.pop()),"function"!==typeof i)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof i+"]");var s=c,l=s.memoizeOptions,f=void 0===l?t:l,m=Array.isArray(f)?f:[f],d=h(r),v=e.apply(void 0,[function(){return u++,i.apply(null,arguments)}].concat(m)),p=e((function(){for(var e=[],n=d.length,t=0;t<n;t++)e.push(d[t].apply(null,arguments));return o=v.apply(null,e)}));return Object.assign(p,{resultFunc:i,memoizedResultFunc:v,dependencies:d,lastResult:function(){return o},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),p};return a}var b=x(p),y=b([function(e){return e.contacts.items},function(e){return e.filter}],(function(e,n){if(!n)return e;var t=n.toLowerCase();return e.filter((function(e){var n=e.name,r=e.number;return n.toLowerCase().includes(t)||r.toLowerCase().includes(t)}))})),_=t(184),j=function(){var e=(0,c.useState)((0,o.Z)({},f)),n=(0,u.Z)(e,2),t=n[0],d=n[1],v=(0,r.v9)(y),p=(0,r.I0)();(0,c.useEffect)((function(){p((0,m.yF)())}),[p]);var h=function(e){var n=e.target,t=n.name,r=n.value;d((function(e){return(0,o.Z)((0,o.Z)({},e),{},(0,a.Z)({},t,r))}))},x=t.name,b=t.number;return(0,_.jsxs)("form",{className:i,action:"",onSubmit:function(e){if(e.preventDefault(),function(e,n){var t=e.toLowerCase(),r=n.toLowerCase(),a=v.find((function(e){var n=e.name,a=e.number;return n.toLowerCase()===t||a.toLowerCase()===r}));return Boolean(a)}(x,b))return alert("".concat(x,": ").concat(b," is already ixist")),!1;!function(e){var n=e.name,t=e.number;p((0,m.v6)({name:n,number:t}))}((0,o.Z)({},t)),d((0,o.Z)({},f))},children:[(0,_.jsxs)("div",{className:s,children:[(0,_.jsx)("label",{children:"Name"}),(0,_.jsx)("input",{type:"text",name:"name",value:x,onChange:h,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,_.jsxs)("div",{className:s,children:[(0,_.jsx)("label",{children:"Number"}),(0,_.jsx)("input",{type:"tel",name:"number",value:b,onChange:h,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,_.jsx)("button",{className:l,children:"Add contact"})]})},g="contact-filter_labelFilter__sc0Ax",C="contact-filter_filterBox__A6U9E",w="contact-filter_inputFilter__At9Wg",N=t(5653),A=function(e){return e.filter},k=function(){var e=(0,r.v9)(A),n=(0,r.I0)();return(0,_.jsxs)("div",{className:C,children:[(0,_.jsx)("label",{className:g,children:"Find contacts bu name"}),(0,_.jsx)("input",{className:w,type:"text",value:e,name:"filter",onChange:function(e){var t=e.target;n((0,N.T)(t.value))}})]})},Z={buttonRemove:"contact-item_buttonRemove__CCUAx"},B=function(e){var n=e.id,t=e.number,a=e.name,o=(0,r.I0)();return(0,_.jsxs)("li",{className:Z.item,children:[a,": ",t,(0,_.jsx)("button",{className:Z.buttonRemove,onClick:function(){return function(e){o((0,m.ze)(e))}(n)},type:"button",children:"Delete"})]})},z=B;B.defaultProps={items:[]};var F="contact-list_contactList__5myvw",L=function(){var e=(0,r.v9)(y).map((function(e){return(0,_.jsx)(z,(0,o.Z)({},e),e.id)}));return(0,_.jsx)("ol",{className:F,children:e})},E={contactBox:"add-number-page_contactBox__woS8t",listBox:"add-number-page_listBox__ap5UH"},S=function(){var e=(0,r.v9)(y),n=Boolean(e.length);return(0,_.jsxs)("div",{className:E.contactBox,children:[(0,_.jsxs)("div",{className:E.block,children:[(0,_.jsx)("h3",{children:"Pnonebook"}),(0,_.jsx)(j,{})]}),(0,_.jsxs)("div",{className:E.block,children:[(0,_.jsx)("h3",{children:"Contacts"}),(0,_.jsxs)("div",{className:E.listBox,children:[(0,_.jsx)(k,{}),n&&(0,_.jsx)(L,{}),!n&&"You dont have a contacts"]})]})]})}}}]);
//# sourceMappingURL=248.3ceefa91.chunk.js.map