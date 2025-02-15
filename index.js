import{S as u,a as d,i as c}from"./assets/vendor-Fd3mU3Z4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function p(s,r){const o=s.map(e=>`<li>
            <div class="gallery">
                <a href="${e.largeImageURL}">
                    <img src="${e.largeImageURL}" alt="${e.tags}" title="${e.tags}"/>
                </a>
            </div>
            <div class="info">
                <p><b>Likes:</b> ${e.likes}</p>
                <p><b>Views:</b> ${e.views}</p>
                <p><b>Comments:</b> ${e.comments}</p>
                <p><b>Downloads:</b> ${e.downloads}</p>
            </div>
        </li>`).join("");r.insertAdjacentHTML("beforeend",o),new u(".gallery a",{captionsData:"alt",captionDelay:250,enableKeyboard:!0,closeOnClick:!0,swipeClose:!0}).refresh()}async function f(s,r){const o="48820744-2d2f423ba9a206b8d884159e3",n="https://pixabay.com/api/";try{const e=await d.get(n,{params:{key:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}});if(console.log("Результати пошуку:",e.data.hits),r.innerHTML="",e.data.hits.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"});return}p(e.data.hits,r)}catch(e){console.log("Помилка при запиті:",e)}}const i=document.querySelector(".form"),m=document.querySelector(".galleryList"),l=document.querySelector(".loader");i.addEventListener("submit",async s=>{s.preventDefault();const o=i.elements.text.value.trim();if(o===""){c.error({title:"Error",message:"Поле пошуку не може бути порожнім!",position:"topCenter"});return}l.style.display="inline-block",await f(o,m),l.style.display="none",i.reset()});
//# sourceMappingURL=index.js.map
