import{S as d,i as a}from"./assets/vendor-BvkBopno.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f="42306432-61ab7fb6a7e28dda5f126fb86",u=document.getElementById("searchForm"),m=document.getElementById("searchInput"),i=document.getElementById("loader"),l=document.getElementById("gallery"),p=new d(".gallery a");u.addEventListener("submit",function(c){c.preventDefault();const s=m.value.trim();if(s===""){a.error({title:"Error",message:"Please enter a search term"});return}i.style.display="block",l.innerHTML="",fetch(`https://pixabay.com/api/?key=${f}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>o.json()).then(o=>{if(i.style.display="none",o.hits.length===0){a.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"});return}o.hits.forEach(r=>{const e=document.createElement("div");e.classList.add("card"),e.innerHTML=`
                    <a href="${r.largeImageURL}" data-lightbox="gallery">
                        <img src="${r.webformatURL}" alt="${r.tags}">
                    </a>
                    <p>Likes: ${r.likes}</p>
                    <p>Views: ${r.views}</p>
                    <p>Comments: ${r.comments}</p>
                    <p>Downloads: ${r.downloads}</p>
                `,l.appendChild(e)}),p.refresh()}).catch(o=>{i.style.display="none",console.error("Error fetching data:",o),a.error({title:"Error",message:"An error occurred while fetching data. Please try again."})})});
//# sourceMappingURL=commonHelpers.js.map