(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{60:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(9),c=a.n(i),s=(a(60),a(88)),o=a(96),u=a(91),l=a(92),d=a(93),b=a(94),j=a(70),m=a(50),O=a(95),f=a(22),h=a(5),p=a(35),v=a(36),g=a(33),k=a(14),x=a(37),M=a(47),y=a(48),z=function(e){Object(x.a)(a,e);var t=Object(M.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"add",value:function(e){return Object(g.a)(Object(k.a)(a.prototype),"add",this).call(this,"object"===typeof e?JSON.stringify(e):e)}},{key:"has",value:function(e){return Object(g.a)(Object(k.a)(a.prototype),"has",this).call(this,"object"===typeof e?JSON.stringify(e):e)}}]),a}(Object(y.a)(Set)),w=function(e,t){for(var a=[],r=0;r<e;r++){for(var n=[],i=0;i<e;i++)n.push({isMine:!1});a.push(n)}for(var c=0;c<t;c++)C(a,e);return a},C=function(e,t){for(var a=N(t),r=Object(f.a)(a,2),n=r[0],i=r[1];!S(e,t,n,i);){var c=N(t),s=Object(f.a)(c,2);n=s[0],i=s[1]}e[n][i].isMine=!0},S=function(e,t,a,r){return!A(e,t,a,r)&&8!==F(e,t,a,r)},F=function(e,t,a,r){return[A(e,t,a+1,r),A(e,t,a-1,r),A(e,t,a,r+1),A(e,t,a,r-1),A(e,t,a-1,r-1),A(e,t,a-1,r+1),A(e,t,a+1,r-1),A(e,t,a+1,r+1)].filter((function(e){return e})).length},A=function(e,t,a,r){return!(a<0||a>=t||r<0||r>=t)&&e[a][r].isMine},N=function(e){return[Math.floor(Math.random()*e),Math.floor(Math.random()*e)]},T=function e(t,a,r,n,i){if(!(r<0||r>=a||n<0||n>=a)&&!i.has([r,n])){i.add([r,n]);var c=F(t,a,r,n);t[r][n].value=c,t[r][n].shown=!0,0===t[r][n].value&&(e(t,a,r+1,n-1,i),e(t,a,r+1,n,i),e(t,a,r+1,n+1,i),e(t,a,r-1,n-1,i),e(t,a,r-1,n,i),e(t,a,r-1,n+1,i),e(t,a,r,n-1,i),e(t,a,r,n+1,i))}},I=function(e,t,a,r){var n=F(e,t,a,r);return n?e.map((function(e,t){return t!==a?e:e.map((function(e,t){return t!==r?e:Object(h.a)(Object(h.a)({},e),{},{shown:!0,value:n})}))})):function(e,t,a,r){var n=new z;return n.add([a,r]),e[a][r].value=0,e[a][r].shown=!0,T(e,t,a+1,r-1,n),T(e,t,a+1,r,n),T(e,t,a+1,r+1,n),T(e,t,a-1,r-1,n),T(e,t,a-1,r,n),T(e,t,a-1,r+1,n),T(e,t,a,r-1,n),T(e,t,a,r+1,n),Array.from(e)}(e,t,a,r)},E=function(e){return Math.floor(e*e*.15)},B=function(e){if(!e)return"0 Second";var t=Math.floor(e/60),a=e%60,r="",n="";return t&&(r=1===t?"1 Minute":"".concat(t," Minutes"),r+=" and "),a&&(n=1===a?"1 Second":"".concat(a," Seconds")),r+n},J=a(3),R=Object(r.createContext)(),W={minesboard:[],size:20,marked:0,time:0,won:!1,gameOver:!1,actualMarked:0,mines:E(20)},D=function(e,t){switch(t.type){case"initialize":return clearInterval(e.timer),Object(h.a)(Object(h.a)({},W),{},{size:e.size,mines:E(e.size),minesboard:w(e.size,E(e.size))});case"incrementSize":return Object(h.a)(Object(h.a)({},e),{},{size:e.size+1});case"decrementSize":return Object(h.a)(Object(h.a)({},e),{},{size:e.size-1});case"updateBoard":return Object(h.a)(Object(h.a)({},e),{},{minesboard:t.minesboard});case"updateMark":return Object(h.a)(Object(h.a)({},e),{},{marked:t.marked,actualMarked:t.actualMarked});case"gameOver":return clearInterval(e.timer),Object(h.a)(Object(h.a)({},e),{},{gameOver:!0});case"won":return clearInterval(e.timer),Object(h.a)(Object(h.a)({},e),{},{won:!0});case"started":return Object(h.a)(Object(h.a)({},e),{},{started:!0});case"setTimer":return Object(h.a)(Object(h.a)({},e),{},{timer:t.timer});case"tick":return Object(h.a)(Object(h.a)({},e),{},{time:e.time+1});default:return e}},P=function(e){var t=e.children,a=Object(r.useReducer)(D,W),n=Object(f.a)(a,2),i=n[0],c=n[1],s=i.minesboard,o=i.size,u=i.started,l=i.isGameOver,d=i.marked,b=i.actualMarked,j=i.mines,m=i.won,O={incrementSize:function(){return c({type:"incrementSize"})},decrementSize:function(){return c({type:"decrementSize"})},initializeMinesField:Object(r.useCallback)((function(){return c({type:"initialize"})}),[]),clearField:function(e,t){s[e][t].shown||l||m||(A(s,o,e,t)?c({type:"gameOver"}):(u||c({type:"started"}),c({type:"updateBoard",minesboard:I(s,o,e,t)})))},markField:function(e,t){if(!(s[e][t].shown||l||m)){u||c({type:"started"});var a=function(e,t,a,r,n){return[e.map((function(e,i){return i!==r?e:e.map((function(e,r){return r!==n?e:(e.isMarked?t--:t++,e.isMine&&(e.isMarked&&a--,a++),Object(h.a)(Object(h.a)({},e),{},{isMarked:!e.isMarked}))}))})),t,a]}(s,d,b,e,t),r=Object(f.a)(a,3),n=r[0],i=r[1],o=r[2];c({type:"updateBoard",minesboard:n}),c({type:"updateMark",marked:i,actualMarked:o})}}};return Object(r.useEffect)((function(){c({type:"initialize"})}),[o]),Object(r.useEffect)((function(){b===j&&c({type:"won"})}),[b,j]),Object(r.useEffect)((function(){if(u){var e=setInterval((function(){return c({type:"tick"})}),1e3);c({type:"setTimer",timer:e})}}),[u]),Object(J.jsx)(R.Provider,{value:{state:i,actions:O},children:t})},L=R,Y=a(69),G=Object(s.a)({cell:{height:25,width:25,border:"1px solid gray",backgroundColor:function(e){var t=e.cell,a=e.gameOver;return t.isMine&&a?"#ff9595":t.isMarked?"#f7bba1":t.shown?"#e7e6f7":"#dbdaf7"}}}),X=function(e){var t=e.cell,a=e.clearField,n=e.markField,i=Object(r.useContext)(L).state.gameOver,c=G({cell:t,gameOver:i});return Object(J.jsx)("div",{className:c.cell,onClick:a,onContextMenu:function(e){e.preventDefault(),n()},children:Object(J.jsx)(m.a,{children:i&&t.isMine?"\ud83d\udd34":t.isMarked?"\ud83d\udea9":0===t.value?"":t.value})})},q=Object(Y.a)({minesboard:{margin:"0 auto",gridArea:"minesboard",height:function(e){return 25*e.size+2},width:function(e){return 25*e.size+2},border:"1px solid black",display:"grid",gridTemplateColumns:function(e){var t=e.size;return"repeat(".concat(t,", auto)")}}}),H=function(){var e=Object(r.useContext)(L),t=e.state,a=e.actions,n=t.minesboard,i=t.size,c=a.clearField,s=a.markField,o=q({size:i});return Object(J.jsx)("div",{className:o.minesboard,children:n.map((function(e,t){return e.map((function(e,a){return Object(J.jsx)(X,{cell:e,clearField:function(){return c(t,a)},markField:function(){return s(t,a)}},"cell-".concat(t,"-").concat(a))}))}))})},K=Object(s.a)({minesweeper:{display:"grid",width:800,margin:"0 auto",gridTemplateColumns:"repeat(2, auto) 200px",gridTemplateRows:"20px auto auto 50px auto",gap:20,textAlign:"center",gridTemplateAreas:'\n        ". . ."\n        ". header ."\n        ". options restart"\n        "total available time"\n        "minesboard minesboard minesboard"\n        '},header:{gridArea:"header"},options:{gridArea:"options"},time:{gridArea:"time",justifyItem:"center"},restart:{gridArea:"restart"},total:{gridArea:"total"},available:{gridArea:"available"}}),Q=function(){var e=Object(r.useContext)(L),t=e.actions,a=e.state,n=t.incrementSize,i=t.decrementSize,c=t.initializeMinesField;Object(r.useEffect)(c,[c]);var s=K(),f=a.size,h=a.mines,p=a.marked,v=a.time,g=a.won,k=a.started;return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsxs)(o.a,{open:g,children:[Object(J.jsx)(u.a,{children:"You Won"}),Object(J.jsx)(l.a,{children:Object(J.jsxs)(d.a,{children:["Well Done. You won the game in ",B(v),"."]})}),Object(J.jsx)(b.a,{children:Object(J.jsx)(j.a,{variant:"outlined",color:"primary",onClick:c,children:"Restart"})})]}),Object(J.jsxs)("div",{className:s.minesweeper,children:[Object(J.jsx)(m.a,{className:s.header,variant:"h3",children:"Minesweeper"}),Object(J.jsxs)(O.a,{disableElevation:!0,fullWidth:!0,className:s.options,variant:"contained",color:"primary",children:[Object(J.jsx)(j.a,{onClick:n,children:"+"}),Object(J.jsxs)(j.a,{children:[f," X ",f]}),Object(J.jsx)(j.a,{onClick:i,children:"-"})]}),Object(J.jsx)(j.a,{fullWidth:!0,className:s.restart,variant:"outlined",color:"primary",onClick:c,children:"Restart"}),Object(J.jsxs)(m.a,{className:s.total,children:["Total Mines: ",h]}),Object(J.jsxs)(m.a,{className:s.available,children:["Available Mines: ",h-p]}),Object(J.jsx)(m.a,{className:s.time,children:k?B(v):"Click on tile start timer"}),Object(J.jsx)(H,{})]})]})};var U=function(){return Object(J.jsx)(P,{children:Object(J.jsx)(Q,{})})},V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,98)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),r(e),n(e),i(e),c(e)}))};c.a.render(Object(J.jsx)(n.a.StrictMode,{children:Object(J.jsx)(U,{})}),document.getElementById("root")),V()}},[[68,1,2]]]);
//# sourceMappingURL=main.44705209.chunk.js.map