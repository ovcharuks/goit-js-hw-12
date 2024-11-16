import{i as n,S as d}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function u(s){return s.map(({largeImageURL:r,webformatURL:a,tags:o,likes:e,views:t,comments:c,downloads:l})=>`<li class="gallery-item">
          <article class="card">
      <a class="card-link" href="${r}"><img class="card-image" src="${a}" alt="${o}"/></a>        <div class="card-container">
            <div class="card-item">
              <p class="card-text">Likes</p>
              <p class="card-number">${e}</p>
            </div>
            <div class="card-item">
              <p class="card-text">Views</p>
              <p class="card-number">${t}</p>
            </div>
            <div class="card-item">
              <p class="card-text">Comments</p>
              <p class="card-number">${c}</p>
            </div>
            <div class="card-item">
              <p class="card-text">Downloads</p>
              <p class="card-number">${l}</p>
            </div>
          </div>
          </article>
            </li>`).join("")}const m="https://pixabay.com/api/",p="47074953-ce587c3b0a52a629055965741";function f(s){return fetch(`${m}?key=${p}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&per_page=30`).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()}).then(r=>{if(r.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"});return}const a=u(r.hits);i.gallery.insertAdjacentHTML("beforeend",a),new d(".gallery a",{captionDelay:300,captionsData:"alt"}).refresh()}).catch(r=>{throw console.error("Error fetching images:",r),r})}const i={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};i.form.addEventListener("submit",y);function y(s){s.preventDefault();const a=s.currentTarget.elements.state.value.trim();if(i.gallery.innerHTML="",!a){n.error({message:"Please enter your request",position:"bottomRight"});return}i.loader.style.display="inline-block",f(a).then(()=>{i.loader.style.display="none"}).catch(o=>{i.loader.style.display="none",n.error({message:"Error fetching images. Please try again later.",position:"bottomRight"}),console.error(o)}),i.form.reset()}fetch("https://pixabay.com/api/?key=47074953-ce587c3b0a52a629055965741");
//# sourceMappingURL=index.js.map
