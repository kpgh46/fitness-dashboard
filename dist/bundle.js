(()=>{"use strict";var e={174:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(601),o=r.n(n),a=r(609),s=r.n(a)()(o());s.push([e.id,".container{\n    /* height: 550px; */\n    border: 1px black;\n}\n\n.middle{\n    /* height: 450px; */\n    border: 1px solid silver;\n    border-radius: 10px;\n}\n\n.bottom{\n    height: 450px;\n    border: 1px solid silver;\n    border-radius: 10px;\n}\n\n.row.bottom{\n    height:130px;\n    border: 1px solid silver;\n}\n\n.col-2.completed{\n    border: 1px solid silver;\n    border-radius: 10px;\n}",""]);const c=s},609:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(n)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(s[i]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);n&&s[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},601:e=>{e.exports=function(e){return e[1]}},62:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},s=[],c=0;c<e.length;c++){var i=e[c],u=n.base?i[0]+n.base:i[0],l=a[u]||0,p="".concat(u," ").concat(l);a[u]=l+1;var d=r(p),f={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var h=o(f,n);n.byIndex=c,t.splice(c,0,{identifier:p,updater:h,references:1})}s.push(p)}return s}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var c=r(a[s]);t[c].references--}for(var i=n(e,o),u=0;u<a.length;u++){var l=r(a[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=i}}},793:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},173:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},892:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},36:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},464:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,(()=>{var e=r(62),t=r.n(e),n=r(36),o=r.n(n),a=r(793),s=r.n(a),c=r(892),i=r.n(c),u=r(173),l=r.n(u),p=r(464),d=r.n(p),f=r(174),h={};h.styleTagTransform=d(),h.setAttributes=i(),h.insert=s().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),t()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;let m=[],v=(e,t,r)=>{let n=[],o=r-t.length;for(let e=0;e<o;e++)t.push(t[e]);return t.forEach((t=>{let r=e.filter((e=>e.bodyPart===t)),o=Math.floor(Math.random()*r.length);n.push(r[o])})),n};document.querySelector("#submit-workout").addEventListener("click",(async()=>{parseInt(document.querySelector('input[name="days"]:checked').value),parseInt(document.querySelector('input[name = "time"]:checked').value);let e=document.querySelectorAll('input[name="equipment"]:checked'),t=[];e.forEach((e=>t.push(e.value)));let r=(async(e=[])=>{let t=await(async()=>{let e=await fetch("https://exercisedb.p.rapidapi.com/exercises",{method:"GET",headers:{"X-RapidAPI-Key":"762c75f4ecmshb09408299e534b3p1f6bebjsnbb1df82a374c","X-RapidAPI-Host":"exercisedb.p.rapidapi.com"}});return await e.json()})(),r=[];return e.forEach((e=>{t.forEach((t=>{t.equipment===e&&r.push(t)}))})),r})(["dumbbell","barbell"]);await(async(e,t,r)=>{let n=[],o=await e,a=["back","chest","shoulders","upper legs","waist","upper arms"],s=0;for(let e=0;e<3;e++){s>5&&(s=0);let e=a.slice(s,s+2);n.push(v(o,e,9)),s+=2}m.push((e=>{let t=[];return e.forEach(((e,r)=>{e.forEach(((e,r)=>{t.push(((e,t)=>({number:t,bodyPart:e.bodyPart,excerciseName:e.name,sets:3,complete:!1}))(e,r))}))})),t})(n))})(r),console.log(m)}))})()})();