const navItems = [
 ["Home","index.html"],["North","north.html"],["South","south.html"],
 ["East","east.html"],["West","west.html"],["Gallery","gallery.html"],
 ["About Us","about.html"],["Feedback","feedback.html"],["Queries","queries.html"],
 ["Contact","contact.html"],["Sitemap","sitemap.html"]
];
const currentFile = location.pathname.split("/").pop() || "index.html";
const nav = `<header class="site-header"><div class="container nav-wrap">
<a class="brand" href="index.html"><span class="brand-mark">🌊</span>Beauty<span>Of</span>Beaches</a>
<button class="nav-toggle" id="navToggle" aria-label="Open navigation" aria-expanded="false">☰</button>
<ul class="nav-links" id="navLinks">${navItems.map(([label,url])=>`<li><a class="${currentFile===url?'active':''}" href="${url}">${label}</a></li>`).join("")}</ul>
</div></header>`;
const footer = `<footer class="site-footer"><div class="container">
<div class="footer-grid">
<div><h3>🌊 Beauty Of Beaches</h3><p>Your guide to the world's most beautiful coastlines. Discover, explore and experience the magic of the ocean.</p></div>
<div><h4>Quick Links</h4><ul><li><a href="index.html">Home</a></li><li><a href="about.html">About Us</a></li><li><a href="gallery.html">Gallery</a></li><li><a href="sitemap.html">Sitemap</a></li></ul></div>
<div><h4>Explore Zones</h4><ul><li><a href="north.html">North Zone</a></li><li><a href="south.html">South Zone</a></li><li><a href="east.html">East Zone</a></li><li><a href="west.html">West Zone</a></li></ul></div>
<div><h4>Contact</h4><p>📧 info@beautyofbeaches.com</p><p>📞 +92 300 1234567</p><p>📍 Karachi, Pakistan</p></div>
</div><div class="footer-bottom">© <span id="year"></span> Beauty Of Beaches. All rights reserved.</div>
</div></footer><div class="ticker"><div class="container"><span id="tickerText">🌴 Welcome to Beauty Of Beaches · Explore the world</span></div></div>`;
document.addEventListener("DOMContentLoaded",()=>{
 const header=document.getElementById("siteHeader"); if(header) header.innerHTML=nav;
 const foot=document.getElementById("siteFooter"); if(foot) foot.innerHTML=footer;
 const toggle=document.getElementById("navToggle"), links=document.getElementById("navLinks");
 if(toggle&&links) toggle.addEventListener("click",()=>{const open=links.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));toggle.textContent=open?"✕":"☰";});
 const year=document.getElementById("year"); if(year) year.textContent=new Date().getFullYear();
 let visits=Number(localStorage.getItem("bob-visits")||0)+1;localStorage.setItem("bob-visits",visits);
 document.querySelectorAll("[data-visitors]").forEach(el=>el.textContent=visits.toLocaleString());
 const ticker=document.getElementById("tickerText");
 const update=()=>{if(ticker){const d=new Date();ticker.textContent=`🌊 Beauty Of Beaches  ·  📅 ${d.toLocaleDateString()}  ·  🕒 ${d.toLocaleTimeString()}  ·  Discover the beauty of nature`; }};
 update();setInterval(update,1000);
 const locBtn=document.getElementById("locationBtn"), locOut=document.getElementById("locationResult");
 if(locBtn&&locOut)locBtn.addEventListener("click",()=>{if(!navigator.geolocation){locOut.textContent="Geolocation is not supported by this browser.";return;}locOut.textContent="Requesting location permission…";navigator.geolocation.getCurrentPosition(p=>{locOut.textContent=`Your coordinates: ${p.coords.latitude.toFixed(4)}, ${p.coords.longitude.toFixed(4)}`},()=>{locOut.textContent="Location permission was not granted. You can still explore the website."});});
 document.querySelectorAll("form[data-local-form]").forEach(form=>form.addEventListener("submit",e=>{e.preventDefault();const msg=form.querySelector("[data-form-message]");if(msg)msg.textContent="Thank you! Your entry has been saved in this browser for this demo.";form.reset();}));
});
