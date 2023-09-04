(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function d(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=d(t);fetch(t.href,r)}})();const f=document.querySelectorAll(".draggable-box"),i=document.querySelector(".dropzone"),p=document.querySelector(".history-list");f.forEach(o=>{o.addEventListener("dragstart",g)});i.addEventListener("dragover",b);i.addEventListener("drop",m);function g(o){o.dataTransfer.setData("text/plain",o.target.className)}function b(o){o.preventDefault()}function m(o){o.preventDefault();let e=o.dataTransfer.getData("text/plain");e.includes("ellipse")&&(e="ellipse"),e.includes("parallelogram")&&(e="parallelogram"),e.includes("pentagon")&&(e="pentagon"),e.includes("rectangle")&&(e="rectangle"),e.includes("rhombus")&&(e="rhombus"),e.includes("triangle")&&(e="triangle"),console.log("here is the tag",e);const d=`
  <div class="">
  <div class="text-white text-center py-1 mb-1"><h2 class="text-xl uppercase font-bold text-black">${e} calculator</h2></div>
  <div class=" mb-3">
         <div class="text-center mb-2"><h2 class="text-black">Area = w x s</h2></div>
          <div class="grid grid-cols-2 gap-2 mb-2" >
             <input id="" type="text"
             class="block w-full p-1 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
          
            
              
             <input id="" type="text"
              class="block w-full p-1 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
          
          </div>

         
          
          
</div>
<div class="w-full rounded text-white text-center  bg-pink-500 py-1">Calculate</div>
</div>
        
    `;i.innerHTML=`<div class="calculator-box">
     ${d}
    </div>`;const s=i.querySelector(".calculator-box"),t=s.querySelector(".calculate-button"),r=s.querySelector(".result"),a=s.querySelectorAll(".num-input");t.addEventListener("click",()=>{const l=parseFloat(a[0].value),n=parseFloat(a[1].value);let c=0;e==="Circle"?c=l+n:e==="Subtraction"?c=l-n:e==="Multiplication"&&(c=l*n),r.textContent=`Result: ${c}`,u(`${l} ${e} ${n} = ${c}`)});function u(l){console.log(l);const n=document.createElement("li");n.textContent=l,p.appendChild(n)}}
