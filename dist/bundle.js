(()=>{"use strict";var e={174:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(601),o=r.n(n),a=r(609),i=r.n(a)()(o());i.push([e.id,".container{\n    /* height: 550px; */\n    border: 1px black;\n}\n\n.middle{\n    /* height: 450px; */\n    border: 1px solid silver;\n    border-radius: 10px;\n}\n\n.bottom{\n    height: 450px;\n    border: 1px solid silver;\n    border-radius: 10px;\n}\n\n.row.bottom{\n    height:130px;\n    border: 1px solid silver;\n}\n\n.col-2.completed{\n    border: 1px solid silver;\n    border-radius: 10px;\n}",""]);const c=i},609:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);n&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},601:e=>{e.exports=function(e){return e[1]}},62:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],u=n.base?s[0]+n.base:s[0],d=a[u]||0,p="".concat(u," ").concat(d);a[u]=d+1;var l=r(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)t[l].references++,t[l].updater(f);else{var v=o(f,n);n.byIndex=c,t.splice(c,0,{identifier:p,updater:v,references:1})}i.push(p)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=r(a[i]);t[c].references--}for(var s=n(e,o),u=0;u<a.length;u++){var d=r(a[u]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=s}}},793:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},173:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},892:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},36:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},464:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,(()=>{var e=r(62),t=r.n(e),n=r(36),o=r.n(n),a=r(793),i=r.n(a),c=r(892),s=r.n(c),u=r(173),d=r.n(u),p=r(464),l=r.n(p),f=r(174),v={};v.styleTagTransform=l(),v.setAttributes=s(),v.insert=i().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=d(),t()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;document.querySelector("#submit-workout").addEventListener("click",(()=>{let e=parseInt(document.querySelector('input[name="days"]:checked').value),t=parseInt(document.querySelector('input[name = "time"]:checked').value),r=document.querySelectorAll('input[name="equipment"]:checked'),n=[];r.forEach((e=>n.push(e.value))),(async(e,t,r)=>{let n=await e;console.log(n,t,r)})((async(e=[])=>{let t=await(async()=>{let e=await fetch("https://exercisedb.p.rapidapi.com/exercises",{method:"GET",headers:{"X-RapidAPI-Key":"762c75f4ecmshb09408299e534b3p1f6bebjsnbb1df82a374c","X-RapidAPI-Host":"exercisedb.p.rapidapi.com"}});return await e.json()})(),r=[];return e.forEach((e=>{t.forEach((t=>{t.equipment===e&&r.push(t)}))})),r})(["dumbbell","barbell"]),e,t)}))})()})();