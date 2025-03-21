!function(){"use strict";var e,t={530:function(e,t,r){var n,a=r(848),i=r(540),o=r(338),s=r(600),c=r(468),l=r(816),u=(0,l.Z0)({name:"search",initialState:{query:""},reducers:{setQuery:function(e,t){e.query=t.payload}}}),d=u.actions.setQuery,f=function(e){return e.search.query},h=u.reducer,p=(0,l.zD)("category/fetchCategories",(function(){return e=void 0,t=void 0,n=function(){return function(e,t){var r,n,a,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},o=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return o.next=s(0),o.throw=s(1),o.return=s(2),"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(c){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(i=0)),i;)try{if(r=1,n&&(a=2&s[0]?n.return:s[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,s[1])).done)return a;switch(n=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,n=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){i.label=s[1];break}if(6===s[0]&&i.label<a[1]){i.label=a[1],a=s;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(s);break}a[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],n=0}finally{r=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}(this,(function(e){switch(e.label){case 0:return[4,fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")];case 1:return[4,e.sent().json()];case 2:return[2,e.sent().meals]}}))},new((r=Promise)||(r=Promise))((function(a,i){function o(e){try{c(n.next(e))}catch(e){i(e)}}function s(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,s)}c((n=n.apply(e,t||[])).next())}));var e,t,r,n})),m=(0,l.Z0)({name:"category",initialState:{category:"",categories:{list:[],status:"idle",error:null}},reducers:{setCategory:function(e,t){e.category=t.payload}},extraReducers:function(e){e.addCase(p.pending,(function(e){e.categories.status="loading"})).addCase(p.fulfilled,(function(e,t){e.categories.status="succeeded",Array.isArray(t.payload)?e.categories.list=t.payload.map((function(e){return e.strCategory})):(console.error("API response is not in expected format:",t.payload),e.categories.list=[])})).addCase(p.rejected,(function(e,t){e.categories.status="failed",e.categories.error=t.error.message||"Failed to fetch categories"}))}}),v=m.actions.setCategory,g=function(e){return e.category.category},x=function(e){return e.category.categories},j=m.reducer,y=(0,l.Z0)({name:"pagination",initialState:{currentPage:1},reducers:{setPage:function(e,t){e.currentPage=t.payload}}}),b=y.actions.setPage,w=function(e){return e.pagination.currentPage},P=y.reducer,M=(0,l.Z0)({name:"selected",initialState:{selectedMeals:[]},reducers:{addSelectedMeals:function(e,t){e.selectedMeals.find((function(e){return e.idMeal===t.payload.idMeal}))||e.selectedMeals.push(t.payload)},removeSelectedMeals:function(e,t){e.selectedMeals=e.selectedMeals.filter((function(e){return e.idMeal!==t.payload}))}}}),I=(n=M.actions).addSelectedMeals,S=n.removeSelectedMeals,k=function(e){return e.selected.selectedMeals},N=M.reducer,C=(0,l.U1)({reducer:{selected:N,search:h,category:j,pagination:P}}),E=r(984),O=c.wA.withTypes(),A=c.d4.withTypes(),T=i.memo((function(e){var t=function(){var e=(0,E.ok)(),t=e[0],r=e[1],n=(0,c.wA)(),a=t.get("search")||"";return(0,i.useEffect)((function(){n(d(a))}),[a,n]),{setSearchQuery:function(e){n(d(e));var a=new URLSearchParams(t);e?a.set("search",e):a.delete("search"),r(a)}}}().setSearchQuery,r=A(f);return(0,a.jsx)("input",{className:"OAtCkO7u",type:"text",value:r,onChange:function(e){return t(e.target.value)},placeholder:"Search..."})})),F=i.memo((function(e){var t=function(e){var t=O(),r=A(k).some((function(t){return t.idMeal===e.meal.idMeal}));return{toggleFavorite:function(){t(r?S(e.meal.idMeal):I(e.meal))},isSelected:r}}({meal:e.meal}),r=t.toggleFavorite,n=t.isSelected;return(0,a.jsx)("button",{onClick:r,children:n?"✅ У вибраних":"➕ Додати у вибрані"})})),R=i.memo((function(e){return(0,a.jsx)(E.N_,{to:e.linkTo,className:"N1QQfcRi",children:e.buttonText})})),L=i.memo((function(e){var t=e.meal,r=t.strMeal,n=t.strMealThumb,i=t.strArea,o=t.strCategory;return(0,a.jsxs)("div",{className:"Sf6m2Xbn",children:[(0,a.jsx)("img",{src:n,alt:r,className:"IDWxcxyg"}),(0,a.jsx)("h3",{children:r}),(0,a.jsxs)("p",{children:[o," | ",i]}),(0,a.jsx)("div",{className:"uAvr_8oz",children:e.actionSlot}),(0,a.jsx)("div",{className:"boZXB1Ch",children:e.actionSlot1})]})})),q=function(e,t,r){if(r||2===arguments.length)for(var n,a=0,i=t.length;a<i;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))},H="...",Q=function(e,t){var r=t-e+1;return Array.from({length:r},(function(t,r){return r+e}))};function B(){var e=(0,E.ok)(),t=e[0],r=e[1],n=O(),a=Number(t.get("page"))||1,o=t.get("category"),s=t.get("search");return(0,i.useEffect)((function(){n(b(a))}),[a,n]),(0,i.useEffect)((function(){var e=new URLSearchParams(t);e.delete("page"),r(e),n(b(1))}),[o,s,n]),{setPage:function(e){n(b(e));var a=new URLSearchParams(t);e>1?a.set("page",String(e)):a.delete("page"),r(a)}}}var Z=i.memo((function(e){var t=e.totalCount,r=e.itemsPerPage,n=A(w),o=function(e){var t=e.totalCount,r=e.pageSize,n=e.siblingCount,a=void 0===n?1:n,o=e.currentPage;return(0,i.useMemo)((function(){var e=Math.ceil(t/r);if(a+5>=e)return Q(1,e);var n=Math.max(o-a,1),i=Math.min(o+a,e),s=n>2,c=i<e-2,l=e;if(!s&&c){var u=Q(1,3+2*a);return q(q([],u,!0),[H,e],!1)}if(s&&!c){var d=Q(e-(3+2*a)+1,e);return q([1,H],d,!0)}if(s&&c){var f=Q(n,i);return q(q([1,H],f,!0),[H,l],!1)}return[]}),[t,r,a,o])}({totalCount:t,pageSize:r,siblingCount:1,currentPage:n}),s=B().setPage;return!o||o.length<=1?null:(0,a.jsx)("div",{className:"Ig9BGEDH",children:o.map((function(e,t){return e===H?(0,a.jsx)("span",{className:"vW8d7iFu",children:H},t):(0,a.jsx)("button",{onClick:function(){return function(e){s(e)}(Number(e))},className:"".concat("Eq18wG7H"," ").concat(e===n?"cq4e2E4F":""),children:e},t)}))})})),z=Z,G=i.memo((function(e){var t=e.filteredItems,r=e.itemsPerPage,n=function(e){var t=(e.currentPage-1)*e.itemsPerPage;return e.filteredItems.slice(t,t+e.itemsPerPage)}({currentPage:A(w),itemsPerPage:r,filteredItems:t});return e.status?(0,a.jsx)("div",{children:"Loading..."}):e.error?(0,a.jsxs)("div",{children:["Error: ",e.error.message]}):n?(0,a.jsxs)("div",{children:[(0,a.jsx)("ul",{className:"Fw7PyxcP",children:n.length>0?n.map((function(e){return(0,a.jsx)("li",{children:(0,a.jsx)(L,{meal:e,actionSlot:(0,a.jsx)(F,{meal:e}),actionSlot1:(0,a.jsx)(R,{linkTo:"/recipe/".concat(e.idMeal),buttonText:"View Recipe"})})},e.idMeal)})):(0,a.jsx)("p",{children:"No results found"})}),(0,a.jsx)("div",{className:"NNpw6VA7",children:(0,a.jsx)(z,{totalCount:t.length,itemsPerPage:r})})]}):void 0}));function U(){var e=(0,E.ok)(),t=e[0],r=e[1],n=(0,c.wA)(),a=t.get("category")||"";return(0,i.useEffect)((function(){n(v(a))}),[a,n]),{setCategory:function(e){n(v(e));var a=new URLSearchParams(t);e?a.set("category",e):a.delete("category"),r(a)}}}var V=i.memo((function(e){var t=O(),r=U().setCategory,n=A(g),o=A(x),s=o.list,c=o.status,l=o.error;return(0,i.useEffect)((function(){t(p())}),[t]),(0,a.jsx)("div",{className:"nrdpokiT",children:(0,a.jsxs)("select",{className:"gO_sHnQx",value:n,onChange:function(e){return r(e.target.value)},children:[(0,a.jsx)("option",{value:"",children:"All Categories"}),"loading"===c&&(0,a.jsx)("option",{value:"",children:"Loading categories..."}),"failed"===c&&(0,a.jsxs)("option",{value:"",children:["Error loading categories ",l]}),s&&s.length>0?s.map((function(e){return(0,a.jsx)("option",{value:e,children:e},e)})):(0,a.jsx)("option",{value:"",children:"No categories available"})]})})})),W=i.memo((function(e){return(0,a.jsxs)("div",{className:"P11z3Vjg",children:[(0,a.jsx)(T,{}),(0,a.jsx)(V,{})]})})),D=r(176),J=function(e){return(0,D.I)({queryKey:["meals",e],queryFn:function(){return function(e){return t=void 0,r=void 0,a=function(){var t;return function(e,t){var r,n,a,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},o=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return o.next=s(0),o.throw=s(1),o.return=s(2),"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(c){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(i=0)),i;)try{if(r=1,n&&(a=2&s[0]?n.return:s[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,s[1])).done)return a;switch(n=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,n=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){i.label=s[1];break}if(6===s[0]&&i.label<a[1]){i.label=a[1],a=s;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(s);break}a[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],n=0}finally{r=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}(this,(function(r){switch(r.label){case 0:return[4,fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=".concat(encodeURIComponent(e)))];case 1:if(!(t=r.sent()).ok)throw new Error("Failed to fetch recipes");return[4,t.json()];case 2:return[2,r.sent().meals]}}))},new((n=Promise)||(n=Promise))((function(e,i){function o(e){try{c(a.next(e))}catch(e){i(e)}}function s(e){try{c(a.throw(e))}catch(e){i(e)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(o,s)}c((a=a.apply(t,r||[])).next())}));var t,r,n,a}(e)}})},_=function(e){return(0,D.I)({queryKey:["meals",e],queryFn:function(){return function(e){return t=void 0,r=void 0,a=function(){var t;return function(e,t){var r,n,a,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},o=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return o.next=s(0),o.throw=s(1),o.return=s(2),"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(c){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(i=0)),i;)try{if(r=1,n&&(a=2&s[0]?n.return:s[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,s[1])).done)return a;switch(n=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,n=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){i.label=s[1];break}if(6===s[0]&&i.label<a[1]){i.label=a[1],a=s;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(s);break}a[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],n=0}finally{r=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}(this,(function(r){switch(r.label){case 0:return[4,fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=".concat(e))];case 1:if(!(t=r.sent()).ok)throw new Error("Failed to fetch recipe");return[4,t.json()];case 2:return[2,r.sent().meals[0]]}}))},new((n=Promise)||(n=Promise))((function(e,i){function o(e){try{c(a.next(e))}catch(e){i(e)}}function s(e){try{c(a.throw(e))}catch(e){i(e)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(o,s)}c((a=a.apply(t,r||[])).next())}));var t,r,n,a}(e)},enabled:Boolean(e)})},K=i.memo((function(e){var t=e.mealById,r=t.strMeal,n=t.strCategory,i=t.strArea,o=t.strInstructions,s=t.strMealThumb;return(0,a.jsxs)("div",{className:"eEfVFY7n",children:[(0,a.jsx)("h1",{children:r}),(0,a.jsx)("img",{src:s,alt:r}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"Category:"})," ",n]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"Area:"})," ",i]}),(0,a.jsx)("h3",{children:"Ingredients"}),(0,a.jsx)("ul",{children:e.ingredients.map((function(e,t){return(0,a.jsx)("li",{children:e},t)}))}),(0,a.jsx)("h3",{children:"Instructions"}),(0,a.jsx)("p",{children:o})]})})),Y=i.memo((function(e){var t=(0,E.g)().idMeal;if(!t)return(0,a.jsx)("div",{children:"Invalid meal ID"});var r,n,o=_(t),s=o.data,c=o.isLoading,l=o.error,u=(r=s||[],n="strIngredient",(0,i.useMemo)((function(){return Object.entries(r).filter((function(e){var t=e[0],r=e[1];return t.startsWith(n)&&Boolean(r)})).map((function(e){e[0];var t=e[1];return String(t)}))}),[r,n]));return c?(0,a.jsx)("div",{children:"Loading..."}):l?(0,a.jsxs)("div",{children:["Error: ",l.message]}):s?(0,a.jsx)("div",{children:(0,a.jsx)(K,{mealById:s,ingredients:u})}):void 0})),X=i.memo((function(e){return(0,a.jsxs)("div",{className:"FEo2J3bs",children:[(0,a.jsx)("h3",{children:"Instructions:"}),e.selectedMeals.map((function(e){return(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{children:e.strMeal}),(0,a.jsx)("p",{children:e.strInstructions})]},e.idMeal)}))]})})),$=i.memo((function(e){return(0,a.jsxs)("div",{className:"Zcxtafdn",children:[(0,a.jsxs)("h3",{children:["Total Ingredients: ",e.totalIngredients.length]}),(0,a.jsx)("ul",{children:e.totalIngredients.map((function(e,t){return(0,a.jsxs)("li",{children:[e.strMeasure," ",e.strIngredient]},t)}))})]})})),ee=i.memo((function(e){var t=e.selectedMeals.flatMap((function(e){var t=[],r=function(r){if(r.startsWith("strIngredient")){var n=r.replace("strIngredient",""),a=e[r],i=e["strMeasure".concat(n)];if(a&&""!==a){var o=t.find((function(e){return e.strIngredient===a}));o?o.strMeasure+=", ".concat(i||""):t.push({strIngredient:a,strMeasure:i||""})}}};for(var n in e)r(n);return t}));return(0,a.jsx)("div",{children:(0,a.jsx)($,{totalIngredients:t})})})),te=function(e){return(0,a.jsxs)("div",{className:"AoaxYbxP",children:[(0,a.jsx)("div",{children:(0,a.jsx)(R,{linkTo:"/",buttonText:"Home"})}),(0,a.jsx)("div",{children:(0,a.jsx)("h1",{className:"WJfH1Eks",children:"Recipes App"})}),(0,a.jsx)("div",{children:(0,a.jsx)(R,{linkTo:"/selected",buttonText:"Selected"})})]})},re=(0,E.Ys)([{path:"/",element:(0,a.jsx)((function(){return(0,a.jsxs)("div",{className:"VZEuQ_Vf",children:[(0,a.jsx)(te,{}),(0,a.jsx)(E.sv,{})]})}),{}),children:[{path:"/",element:(0,a.jsx)((function(){var e,t=A(f),r=A(g),n=J(t||""),i=n.data,o=n.isLoading,s=n.error,c=(e={meals:i,search:t,category:r}).meals?e.meals.filter((function(t){return(!e.search||t.strMeal.toLowerCase().includes(e.search.toLowerCase()))&&(!e.category||t.strCategory===e.category)})):[];return(0,a.jsxs)("div",{className:"wjA5lAvT",children:[(0,a.jsx)(W,{}),(0,a.jsx)(G,{status:o,error:s,filteredItems:c,itemsPerPage:4})]})}),{})},{path:"/recipe/:idMeal",element:(0,a.jsx)((function(){return(0,a.jsx)("div",{children:(0,a.jsx)(Y,{})})}),{})},{path:"/selected",element:(0,a.jsx)((function(){var e=A(k);return(0,a.jsxs)("div",{className:"EkJ3wGzH",children:[(0,a.jsx)("div",{children:(0,a.jsx)("h1",{className:"nJH8ujrj",children:"Selected Recipes"})}),(0,a.jsx)("div",{children:0===e.length?(0,a.jsx)("p",{children:"No recipes selected"}):(0,a.jsxs)("div",{children:[(0,a.jsx)(G,{filteredItems:e,itemsPerPage:2}),(0,a.jsx)(ee,{selectedMeals:e}),(0,a.jsx)(X,{selectedMeals:e})]})})]})}),{})}]}],{basename:"/Recipes"}),ne=r(417),ae=r(665),ie=new ne.E,oe=document.getElementById("root");if(!oe)throw new Error("Root node not found");(0,o.H)(oe).render((0,a.jsx)(ae.Ht,{client:ie,children:(0,a.jsxs)(c.Kq,{store:C,children:[(0,a.jsx)(s.p,{router:re})," "]})}))}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=function(t,r,a,i){if(!r){var o=1/0;for(u=0;u<e.length;u++){r=e[u][0],a=e[u][1],i=e[u][2];for(var s=!0,c=0;c<r.length;c++)(!1&i||o>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(s=!1,i<o&&(o=i));if(s){e.splice(u--,1);var l=a();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,a,i]},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={792:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,i,o=r[0],s=r[1],c=r[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(c)var u=c(n)}for(t&&t(r);l<o.length;l++)i=o[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},r=self.webpackChunkrecipes=self.webpackChunkrecipes||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var a=n.O(void 0,[96],(function(){return n(530)}));a=n.O(a)}();
//# sourceMappingURL=main.b81597b186e2d0ed6e96.js.map