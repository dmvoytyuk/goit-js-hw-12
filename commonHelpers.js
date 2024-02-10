var h=Object.defineProperty;var L=(s,e,t)=>e in s?h(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var o=(s,e,t)=>(L(s,typeof e!="symbol"?e+"":e,t),t);import{a as I,i as c,S as P}from"./assets/vendor-483db976.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))f(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const g of r.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&f(g)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function f(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();class b{constructor(e){o(this,"BASE_URL","https://pixabay.com/api/");o(this,"currentPage",1);o(this,"resultsPerPage",15);o(this,"totalPages",0);o(this,"query","");this.apiKey=e}async getImageList(){const e={params:{key:this.apiKey,q:this.query,image_type:"photo",orientation:"horizontal",safesearch:"true",page:this.currentPage,per_page:this.resultsPerPage}};try{const t=await I.get(this.BASE_URL,e);return this.totalPages=Math.ceil(t.data.totalHits/15),t.data.hits}catch{throw new Error("something went wrong")}}}function d(s){return s.length<=0?(c.error({message:"Sorry, there are no images matching your search query. Please try again!",progressBar:!1,transitionIn:"fadeIn",position:"topRight"}),"no images found"):s.map(t=>`<li class="gallery-item">
            <a class="gallery-link" href="${t.largeImageURL}">
              <img src="${t.webformatURL}" alt="${t.tags}" width="360" height="200">
            </a>
            <ul class="gallery-item-desc">
              <li class="gallery-item-desc-item"><span class="gallery-item-desc-cap">Likes</span><span>${t.likes}</span></li>
              <li class="gallery-item-desc-item"><span class="gallery-item-desc-cap">Views</span><span>${t.views}</span></li>
              <li class="gallery-item-desc-item"><span class="gallery-item-desc-cap">Comments</span><span>${t.comments}</span></li>
              <li class="gallery-item-desc-item"><span class="gallery-item-desc-cap">Downloads</span><span>${t.downloads}</span></li>
            </ul>
          </li>`).join("")}function p(s,e){e.insertAdjacentHTML("beforeend",s)}const m=document.querySelector(".gallery-list"),w=document.querySelector(".search-form-input"),q=document.querySelector(".search-form"),u=document.querySelector(".loader"),l=document.querySelector(".load-more-button"),S="42304499-2f6eff4512ca2196326987647",i=new b(S),y=new P(".gallery-list a",{captionDelay:250,captionsData:"alt"});async function v(s){if(s.preventDefault(),m.innerHTML="",i.currentPage=1,i.query=w.value,n(l,!1),R(i.query)){n(u,!0);const e=await i.getImageList();if(n(u,!1),e.length>0){const t=d(e);p(t,m),y.refresh(),i.totalPages>1&&n(l,!0)}else c.info({message:"No images found",progressBar:!1,transitionIn:"fadeIn",position:"topRight"})}else console.log("query bad"),c.error({message:"Search attribute is not valid",progressBar:!1,transitionIn:"fadeIn",position:"topRight"})}async function E(s){s.preventDefault(),i.currentPage+=1,n(u,!0),n(l,!1);const e=await i.getImageList();n(u,!1);const t=d(e);p(t,m),y.refresh(),i.totalPages===i.currentPage?(n(l,!1),c.info({message:"We're sorry, but you've reached the end of search results.",progressBar:!1,transitionIn:"fadeIn",position:"topRight"})):n(l,!0)}function R(s){return s.trim()!==""}function n(s,e=!1){e?s.classList.remove("hidden"):s.classList.add("hidden")}q.addEventListener("submit",v);l.addEventListener("click",E);
//# sourceMappingURL=commonHelpers.js.map
