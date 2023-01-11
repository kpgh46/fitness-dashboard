(()=>{var e={426:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,'.container{\n    /* height: 550px; */\n    border:\n     1px black;\n}\n\n#cell{\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;\n}\n\n#cell:hover{\n    box-shadow:rgb(255,83,73) 0px 1px 4px;\n}\n\n.mask{\n    background-color: rgba(251, 251, 251, 0.2);\n}\n\n.middle{\n    /* height: 450px; */\n    /* border: 1px solid silver; */\n    border-radius: 10px;\n}\n\n.bottom{\n    height: 450px;\n    /* border: 1px solid silver; */\n    border-radius: 10px;\n\n}\n\n.row.bottom{\n    height:auto;\n    /* border: .25px solid #FF5349; */\n}\n\n.col-2.completed{\n    /* border: 1px solid silver; */\n    border-radius: 10px;\n}\n\n.markComplete{\n    background-color: rgba(234, 236, 238, 0.85);\n    color:#FF5349;\n    font-size: 20px;\n    position: absolute;\n    right: 3px;\n    top: 3px;\n}\n\n.drop:hover{\n    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n}\n\n.bi.bi-check-circle{\n    font-size: 20px;\n    position: absolute;\n    top: 3px;\n    right: 3px;\n}\n\n.choices{\n    color:#FF5349;\n    border-color:#FF5349;;\n}\n\n.choices:hover{\n    background-color:#FF5349;;\n    border: #FF5349;\n    /* color: blue; */\n}\n\n.custom-control-input {\n    background-color: #6C757D;\n}\n\ninput[type="radio"]:checked + .choices {\n    background: #FF5349;\n    border: #FF5349;\n    box-shadow: none;\n  }\ninput[type="checkbox"]:checked + .choices {\n    background: #FF5349;\n    border: #FF5349;\n    box-shadow: none;\n  }\n\n  .progress{\n    height: 170px;\n    width: 170px;\n    border-radius: 50%;\n    border: 10px solid #FF5349;\n    background-color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 18px;\n    flex-direction: column;\n  }',""]);const c=i},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=n(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},104:e=>{var t="undefined"!=typeof process&&process.pid?process.pid.toString(36):"";function n(){var e=Date.now(),t=n.last||e;return n.last=e>t?e:t+1}e.exports=e.exports.default=function(e,r){return(e||"")+""+t+n().toString(36)+(r||"")},e.exports.process=function(e,r){return(e||"")+t+n().toString(36)+(r||"")},e.exports.time=function(e,t){return(e||"")+n().toString(36)+(t||"")}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,(()=>{"use strict";var e={};n.r(e),n.d(e,{wj:()=>w,oP:()=>g,GB:()=>x,DP:()=>E,J9:()=>S});var t=n(379),r=n.n(t),o=n(795),a=n.n(o),i=n(569),c=n.n(i),s=n(565),d=n.n(s),l=n(216),p=n.n(l),u=n(589),m=n.n(u),f=n(426),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=p(),r()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;var b=n(104),v=n.n(b);let x=[],y=0,g=async(e=[])=>(await(async()=>{let e=await fetch("https://exercisedb.p.rapidapi.com/exercises",{method:"GET",headers:{"X-RapidAPI-Key":"762c75f4ecmshb09408299e534b3p1f6bebjsnbb1df82a374c","X-RapidAPI-Host":"exercisedb.p.rapidapi.com"}});return await e.json()})()).filter((t=>e.includes(t.equipment))),k=(e,t,n)=>((e,t)=>{for(let n=0;n<t;n++)e.push(e[n]);return e})(t,n-t.length).map(((t,n)=>{let r=e.filter((e=>e.bodyPart===t));return r[Math.floor(Math.random()*r.length)]})),w=async(e,t,n)=>{let r=[],o=15===(a=n)?3:30===a?6:45===a?9:60===a?12:void 0;var a;let i=await e,c=2===t?3:2,s=["back","chest","shoulders","upper legs","waist","upper arms"];for(let e=0;e<t;e++){console.log("startingPoint",y),y>5&&(y=0);let e=s.slice(y,y+c);r.push(k(i,e,o)),y+=2}x.push(r.map((e=>{return t=e,{complete:!1,dayId:v()(),dailyExcercises:[...t.map(((e,t)=>({id:v()(),excerciseNum:t+1,bodyPart:e.bodyPart,excerciseName:e.name,equipment:e.equipment,sets:3,url:e.gifUrl,complete:!1})))]};var t})))},E=e=>{let t=0,n=document.querySelector("#weeks-completed");e.forEach((e=>{e.every((e=>e.complete))&&t++})),n.textContent=t},S=e=>{let t=0,n=document.querySelector("#workouts-completed");e.forEach((e=>{e.forEach((e=>{e.complete&&t++}))})),n.textContent=t},F=e=>{(e=>{let t=document.querySelector("#workout-container");t.innerHTML="",e.forEach(((e,n)=>{let r=document.createElement("section");r.classList.add("row"),r.id="days",r.style="height: auto",e.forEach(((e,t)=>{let o=document.createElement("div");o.classList.add("col-2"),o.classList.add("completed"),o.classList.add("cell"),o.classList.add("mask"),!0===e.complete&&o.classList.add("markComplete"),o.dataset.id=`${n}${t}`,o.id="cell",o.style.position="relative",o.style.height="120px",o.style.fontSize="100%",o.style.marginTop="5px",o.classList.add("d-flex"),o.classList.add("align-items-center"),o.classList.add("justify-content-center"),o.innerHTML=`${e.dailyExcercises[0].bodyPart.toUpperCase()} & ${e.dailyExcercises[1].bodyPart.toUpperCase()}`;let a=document.createElement("i");a.classList.add("bi"),a.classList.add("bi-check-circle"),a.dataset.id=`${n}${t}`,a.id="complete",o.appendChild(a),r.appendChild(o)})),t.appendChild(r)}))})(e)};document.querySelector("#submit-workout").addEventListener("click",(async e=>{let t=parseInt(document.querySelector('input[name="days"]:checked').value),n=parseInt(document.querySelector('input[name = "time"]:checked').value),r=document.querySelectorAll('input[name="equipment"]:checked'),o=[];r.forEach((e=>o.push(e.value)));let a=g(o);await w(a,t,n),console.log(x),F(x)})),document.addEventListener("click",(e=>{let t=e.target;if("cell"===e.target.id){let{0:e,1:n}=t.dataset.id.split("");(e=>{document.getElementById("selected").innerHTML=e.dailyExcercises.map(((e,t)=>{return`\n                <div>\n                    <div class = "drop" data-bs-toggle="collapse" data-bs-target="#collapseExample${e.id}" aria-expanded="true" aria-controls="collapseExample"\n                        data-id = ${e.id}>\n                        ${t+1}: ${n=e.excerciseName,n.charAt(0).toUpperCase()+n.slice(1)} <span> <i class="bi bi-caret-down"></i></span>    \n                        </div>\n                    </div>\n\n                    <div class="collapse" id="collapseExample${e.id}">\n                        <div class="card card-body">\n                        <img style = "height: 220px;" src = ${e.url}>\n                    </div>  \n                </div>\n        `;var n})).join("")})(x[e][n])}})),document.addEventListener("click",(e=>{let t=e.target;if("complete"===t.id){let{0:e,1:n}=t.dataset.id.split(""),r=x[e][n];r.complete=!r.complete,E(x),S(x),F(x)}})),(async()=>{document.querySelector("#motivation").addEventListener("click",(()=>{var e,t;e=information.quote,t=information.author,document.querySelector("#quote").textContent=`${e} - ${t}`}))})(),(0,e.fetchQuote)()})()})();