(()=>{"use strict";var e={426:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(81),o=r.n(n),a=r(645),s=r.n(a)()(o());s.push([e.id,".container{\n    /* height: 550px; */\n    border: 1px black;\n}\n\n.middle{\n    /* height: 450px; */\n    border: 1px solid silver;\n    border-radius: 10px;\n}\n\n.bottom{\n    height: 450px;\n    border: 1px solid silver;\n    border-radius: 10px;\n}\n\n.row.bottom{\n    height:130px;\n    border: 1px solid silver;\n}\n\n.col-2.completed{\n    border: 1px solid silver;\n    border-radius: 10px;\n}",""]);const i=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(n)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);n&&s[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},s=[],i=0;i<e.length;i++){var c=e[i],l=n.base?c[0]+n.base:c[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var p=r(d),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var f=o(h,n);n.byIndex=i,t.splice(i,0,{identifier:d,updater:f,references:1})}s.push(d)}return s}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var i=r(a[s]);t[i].references--}for(var c=n(e,o),l=0;l<a.length;l++){var u=r(a[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=c}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,(()=>{var e=r(379),t=r.n(e),n=r(795),o=r.n(n),a=r(569),s=r.n(a),i=r(565),c=r.n(i),l=r(216),u=r.n(l),d=r(589),p=r.n(d),h=r(426),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=s().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=u(),t()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;let m=[],v=(e,t,r)=>{let n=[],o=r-t.length;for(let e=0;e<o;e++)t.push(t[e]);return t.forEach(((t,r)=>{let o=e.filter((e=>e.bodyPart===t)),a=o[Math.floor(Math.random()*o.length)];n.push(a)})),n};document.querySelector("#submit-workout").addEventListener("click",(async()=>{let e=parseInt(document.querySelector('input[name="days"]:checked').value),t=parseInt(document.querySelector('input[name = "time"]:checked').value),r=document.querySelectorAll('input[name="equipment"]:checked'),n=[];r.forEach((e=>n.push(e.value)));let o=(async(e=[])=>{let t=await(async()=>{let e=await fetch("https://exercisedb.p.rapidapi.com/exercises",{method:"GET",headers:{"X-RapidAPI-Key":"762c75f4ecmshb09408299e534b3p1f6bebjsnbb1df82a374c","X-RapidAPI-Host":"exercisedb.p.rapidapi.com"}});return await e.json()})(),r=[];return e.forEach((e=>{t.forEach((t=>{t.equipment===e&&r.push(t)}))})),r})(n);await(async(e,t,r)=>{let n=[],o=await e,a=["back","chest","shoulders","upper legs","waist","upper arms"],s=15===r?3:30===r?6:45===r?9:60===r?12:0,i=2===t?3:2,c=0;for(let e=0;e<t;e++){c>5&&(c=0);let e=a.slice(c,c+i);n.push(v(o,e,s)),c+=2}m.push((e=>{let t=[];return e.forEach(((e,r)=>{t.push((e=>{let t=[];return e.forEach(((e,r)=>{t.push({excerciseNum:r+1,bodyPart:e.bodyPart,excerciseName:e.name,equipment:e.equipment,sets:3,complete:!1})})),t})(e))})),t})(n))})(o,e,t),console.log(m),(()=>{let e=document.createElement("section");e.classList.add("row"),e.classList.add("bottom"),e.id="days",e.style="height: 4vw",e.textContent="this is a bottom Row";let t=document.createElement("div");t.classList.add("col-2"),t.classList.add("completed"),t.textContent="this is a cell in the row",e.appendChild(t),document.querySelector("#container-bottom").appendChild(e)})()}))})()})();