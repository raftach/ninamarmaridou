import{n as e,r as t,t as n}from"./index-fa0eXsxb.js";async function r(r,i){let a=e.find(e=>e.id===i);if(!a){r.innerHTML=`<h1 style="text-align:center; padding-top: 100px;">Project not found</h1>`;return}let o=t(),s=a.title[o]||a.title.en,c=a.images.map(e=>`
    <div class="project-detail-image" style="margin-bottom: 2rem;">
      <img src="${e}" style="width: 100%; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);" alt="${s} view" loading="lazy" />
    </div>
  `).join(``);r.innerHTML=`
    <div class="page-container project-page" style="padding-top: 100px; max-width: 1000px; margin: 0 auto; padding-left: 20px; padding-right: 20px;">
      <h1 class="page-title" style="margin-top: 2rem; font-size: 3rem;">${s}</h1>
      <p style="text-align:center; max-width: 800px; margin: 0 auto; margin-bottom: 4rem; color: rgba(255,255,255,0.7); font-size: 1.2rem;">${a.description[o]||a.description.en}</p>
      
      <div class="project-detail-gallery">
         ${c}
      </div>
      
      <div style="text-align:center; margin-top: 4rem; margin-bottom: 4rem;">
         <a href="/" data-link class="btn-primary" style="text-decoration: none;">&larr; Back to Home</a>
      </div>
    </div>
  `,setTimeout(()=>{n(async()=>{let{gsap:e}=await import(`./gsap-QonJFgvq.js`).then(e=>e.n);return{gsap:e}},[]).then(({gsap:e})=>{e.fromTo(`.project-detail-image img`,{opacity:0,y:50},{opacity:1,y:0,duration:1,stagger:.2,ease:`power2.out`})})},100)}export{r as renderProject};