(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{51:function(e,t,r){},59:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),i=r(9),c=r.n(i),s=(r(51),r(79)),o=r(87),l=r(82),u=r(83),d=r(84),m=r(85),b=r(61),j=r(41),O=r(86),f=r(20),h=r(5),p=function(e,t){for(var r=[],a=0;a<e;a++){for(var n=[],i=0;i<e;i++)n.push({isMine:!1});r.push(n)}for(var c=0;c<t;c++)v(r,e);return r},v=function(e,t){for(var r=z(t),a=Object(f.a)(r,2),n=a[0],i=a[1];!x(e,t,n,i);){var c=z(t),s=Object(f.a)(c,2);n=s[0],i=s[1]}e[n][i].isMine=!0},x=function(e,t,r,a){return!g(e,t,r,a)&&8!==k(e,t,r,a)},k=function(e,t,r,a){return[g(e,t,r+1,a),g(e,t,r-1,a),g(e,t,r,a+1),g(e,t,r,a-1),g(e,t,r-1,a-1),g(e,t,r-1,a+1),g(e,t,r+1,a-1),g(e,t,r+1,a+1)].filter((function(e){return e})).length},g=function(e,t,r,a){return!(r<0||r>=t||a<0||a>=t)&&e[r][a].isMine},z=function(e){return[Math.floor(Math.random()*e),Math.floor(Math.random()*e)]},M=function e(t,r,a,n,i,c){if(!(a<0||a>=r||n<0||n>=r)&&0!==t[a][n].value){var s=k(t,r,a,n);t[a][n].value=s,t[a][n].shown=!0,0===t[a][n].value&&(i===a+1&&c===n-1||e(t,r,a+1,n-1,a,n),i===a+1&&c===n||e(t,r,a+1,n,a,n),i===a+1&&c===n+1||e(t,r,a+1,n+1,a,n),i===a-1&&c===n-1||e(t,r,a-1,n-1,a,n),i===a-1&&c===n||e(t,r,a-1,n,a,n),i===a-1&&c===n-1||e(t,r,a-1,n-1,a,n),i===a&&c===n-1||e(t,r,a,n-1,a,n),i===a&&c===n+1||e(t,r,a,n+1,a,n))}},w=function(e,t,r,a){var n=k(e,t,r,a);return n?e.map((function(e,t){return t!==r?e:e.map((function(e,t){return t!==a?e:Object(h.a)(Object(h.a)({},e),{},{shown:!0,value:n})}))})):function(e,t,r,a){return e[r][a].value=0,e[r][a].shown=!0,M(e,t,r+1,a,r,a),M(e,t,r+1,a-1,r,a),M(e,t,r+1,a+1,r,a),M(e,t,r,a-1,r,a),M(e,t,r,a+1,r,a),M(e,t,r-1,a,r,a),M(e,t,r-1,a-1,r,a),M(e,t,r-1,a+1,r,a),Array.from(e)}(e,t,r,a)},y=function(e){return Math.floor(e*e*.15)},C=function(e){var t=Math.floor(e/60),r=e%60,a="",n="";return t&&(a=1===t?"1 Minute":"".concat(t," Minutes"),a+=" and "),r&&(n=1===r?"1 Second":"".concat(r," Seconds")),a+n},F=r(3),A=Object(a.createContext)(),S={minesboard:[],size:20,marked:0,time:0,won:!1,gameOver:!1,actualMarked:0,mines:y(20)},T=function(e,t){switch(t.type){case"initialize":return clearInterval(e.timer),Object(h.a)(Object(h.a)({},S),{},{size:e.size,mines:y(e.size),minesboard:p(e.size,y(e.size))});case"incrementSize":return Object(h.a)(Object(h.a)({},e),{},{size:e.size+1,mines:y(e.size+1),minesboard:p(e.size+1,y(e.size+1))});case"decrementSize":return Object(h.a)(Object(h.a)({},e),{},{size:e.size-1,mines:y(e.size-1),minesboard:p(e.size-1,y(e.size-1))});case"updateBoard":return Object(h.a)(Object(h.a)({},e),{},{minesboard:t.minesboard});case"updateMark":return Object(h.a)(Object(h.a)({},e),{},{marked:t.marked,actualMarked:t.actualMarked});case"gameOver":return clearInterval(e.timer),Object(h.a)(Object(h.a)({},e),{},{isGameOver:!0});case"won":return clearInterval(e.timer),Object(h.a)(Object(h.a)({},e),{},{won:!0});case"started":return Object(h.a)(Object(h.a)({},e),{},{started:!0});case"setTimer":return Object(h.a)(Object(h.a)({},e),{},{timer:t.timer});case"tick":return Object(h.a)(Object(h.a)({},e),{},{time:e.time+1});default:return e}},N=function(e){var t=e.children,r=Object(a.useReducer)(T,S),n=Object(f.a)(r,2),i=n[0],c=n[1],s=i.minesboard,o=i.size,l=i.started,u=i.isGameOver,d=i.marked,m=i.actualMarked,b=i.mines,j=i.won,O={incrementSize:function(){return c({type:"incrementSize"})},decrementSize:function(){return c({type:"decrementSize"})},initializeMinesField:Object(a.useCallback)((function(){return c({type:"initialize"})}),[]),clearField:function(e,t){s[e][t].shown||u||j||(l||c({type:"started"}),g(s,o,e,t)?c({type:"gameOver"}):c({type:"updateBoard",minesboard:w(s,o,e,t)}))},markField:function(e,t){if(!(s[e][t].shown||u||j)){l||c({type:"started"});var r=function(e,t,r,a,n){return[e.map((function(e,i){return i!==a?e:e.map((function(e,a){return a!==n?e:(e.isMarked?t--:t++,e.isMine&&(e.isMarked&&r--,r++),Object(h.a)(Object(h.a)({},e),{},{isMarked:!e.isMarked}))}))})),t,r]}(s,d,m,e,t),a=Object(f.a)(r,3),n=a[0],i=a[1],o=a[2];c({type:"updateBoard",minesboard:n}),c({type:"updateMark",marked:i,actualMarked:o})}}};return Object(a.useEffect)((function(){m===b&&c({type:"won"})}),[m,b]),Object(a.useEffect)((function(){if(l){var e=setInterval((function(){return c({type:"tick"})}),1e3);c({type:"setTimer",timer:e})}}),[l]),Object(F.jsx)(A.Provider,{value:{state:i,actions:O},children:t})},I=A,G=r(60),B=Object(s.a)({cell:{height:25,width:25,border:"1px solid gray",backgroundColor:function(e){var t=e.cell,r=e.isGameOver;return t.isMine&&r?"#ff9595":t.isMarked?"#f7bba1":t.shown?"#e7e6f7":"#dbdaf7"}}}),E=function(e){var t=e.cell,r=e.clearField,n=e.markField,i=Object(a.useContext)(I).state.isGameOver,c=B({cell:t,isGameOver:i});return Object(F.jsx)("div",{className:c.cell,onClick:r,onContextMenu:function(e){e.preventDefault(),n()},children:i&&t.isMine?"*":t.isMarked?"?":0===t.value?"":t.value})},R=Object(G.a)({minesboard:{margin:"0 auto",gridArea:"minesboard",height:function(e){return 25*e.size+2},width:function(e){return 25*e.size+2},border:"1px solid black",display:"grid",gridTemplateColumns:function(e){var t=e.size;return"repeat(".concat(t,", auto)")}}}),W=function(){var e=Object(a.useContext)(I),t=e.state,r=e.actions,n=t.minesboard,i=t.size,c=r.clearField,s=r.markField,o=R({size:i});return Object(F.jsx)("div",{className:o.minesboard,children:n.map((function(e,t){return e.map((function(e,r){return Object(F.jsx)(E,{cell:e,clearField:function(){return c(t,r)},markField:function(){return s(t,r)}},"cell-".concat(t,"-").concat(r))}))}))})},D=Object(s.a)({minesweeper:{display:"grid",width:800,margin:"0 auto",gridTemplateColumns:"repeat(2, auto) 200px",gridTemplateRows:"auto auto 70px auto",gap:20,textAlign:"center",gridTemplateAreas:'\n        ". header ."\n        ". options restart"\n        "total available time"\n        "minesboard minesboard minesboard"\n        '},header:{gridArea:"header"},options:{gridArea:"options"},time:{gridArea:"time",justifyItem:"center"},restart:{gridArea:"restart"},total:{gridArea:"total"},available:{gridArea:"available"}}),P=function(){var e=Object(a.useContext)(I),t=e.actions,r=e.state,n=t.incrementSize,i=t.decrementSize,c=t.initializeMinesField;Object(a.useEffect)(c,[c]);var s=D(),f=r.size,h=r.mines,p=r.marked,v=r.time,x=r.won,k=r.gameOver;return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)(o.a,{open:k,children:[Object(F.jsx)(l.a,{children:"Game Over"}),Object(F.jsx)(u.a,{children:Object(F.jsx)(d.a,{children:"Oops, You stepped on a mine. Try again."})}),Object(F.jsx)(m.a,{children:Object(F.jsx)(b.a,{variant:"outlined",color:"primary",onClick:c,children:"Try Again"})})]}),Object(F.jsxs)(o.a,{open:x,children:[Object(F.jsx)(l.a,{children:"You Won"}),Object(F.jsx)(u.a,{children:Object(F.jsxs)(d.a,{children:["Well Done. You won the game in ",C(v),"."]})}),Object(F.jsx)(m.a,{children:Object(F.jsx)(b.a,{variant:"outlined",color:"primary",onClick:c,children:"Restart"})})]}),Object(F.jsxs)("div",{className:s.minesweeper,children:[Object(F.jsx)(j.a,{className:s.header,variant:"h3",children:"Minesweeper"}),Object(F.jsxs)(O.a,{disableElevation:!0,fullWidth:!0,className:s.options,variant:"contained",color:"primary",children:[Object(F.jsx)(b.a,{onClick:n,children:"+"}),Object(F.jsxs)(b.a,{children:[f," X ",f]}),Object(F.jsx)(b.a,{onClick:i,children:"-"})]}),Object(F.jsx)(b.a,{fullWidth:!0,className:s.restart,variant:"outlined",color:"primary",onClick:c,children:"Restart"}),Object(F.jsxs)(j.a,{className:s.total,children:["Total Mines: ",h]}),Object(F.jsxs)(j.a,{className:s.available,children:["Available Mines: ",h-p]}),Object(F.jsx)(j.a,{className:s.time,children:v?C(v):"Click on tile start timer"}),Object(F.jsx)(W,{})]})]})};var Y=function(){return Object(F.jsx)(N,{children:Object(F.jsx)(P,{})})},J=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,89)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;r(e),a(e),n(e),i(e),c(e)}))};c.a.render(Object(F.jsx)(n.a.StrictMode,{children:Object(F.jsx)(Y,{})}),document.getElementById("root")),J()}},[[59,1,2]]]);
//# sourceMappingURL=main.c37d99a7.chunk.js.map