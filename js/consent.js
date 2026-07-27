/* Heart of the City — cookie consent + analytics loader (heartestate.ae)
 * Loads GA4 / Yandex Metrica / Meta Pixel only after the visitor opts in.
 */
(function () {
  "use strict";

  var GA_ID         = "G-8YRTNYEJHF";
  var YM_ID         = 108684290;
  var META_PIXEL_ID = null;

  var STORAGE_KEY = "hotc_consent_v1";
  var POLICY_HREF = "/privacy";

  var lang = (document.documentElement.lang || "en").slice(0, 2).toLowerCase();
  var T = {
    en: {
      title: "Cookies & privacy",
      body: "We use cookies to measure traffic (Google Analytics, Yandex Metrica) and to improve our campaigns. Nothing loads until you choose. You can change your mind anytime.",
      accept: "Accept all",
      essential: "Essential only",
      link: "Privacy Policy"
    },
    ru: {
      title: "Cookies и приватность",
      body: "Мы используем cookies для аналитики (Google Analytics, Яндекс Метрика) и рекламных кампаний. До вашего выбора ничего не загружается. Решение можно изменить в любой момент.",
      accept: "Принять все",
      essential: "Только необходимые",
      link: "Политика конфиденциальности"
    }
  };
  var t = T[lang] || T.en;

  function readConsent() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "null"); }
    catch (e) { return null; }
  }
  function writeConsent(obj) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(obj)); } catch (e) {}
  }

  function loadGA() {
    if (!GA_ID || window.__gaLoaded) return;
    window.__gaLoaded = true;
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag(){ window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", GA_ID, { anonymize_ip: true });
  }

  function loadYandex() {
    if (!YM_ID || window.__ymLoaded) return;
    window.__ymLoaded = true;
    window.ymCounterId = YM_ID;
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");
    window.ym(YM_ID, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:false });
  }

  function loadMetaPixel() {
    if (!META_PIXEL_ID || window.__fbLoaded) return;
    window.__fbLoaded = true;
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version="2.0";n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
    (window,document,"script","https://connect.facebook.net/en_US/fbevents.js");
    window.fbq("init", META_PIXEL_ID);
    window.fbq("track", "PageView");
  }

  function fireAnalytics() { loadGA(); loadYandex(); loadMetaPixel(); }

  function buildBanner() {
    var wrap = document.createElement("div");
    wrap.id = "hotc-consent";
    wrap.setAttribute("role", "dialog");
    wrap.setAttribute("aria-live", "polite");
    wrap.setAttribute("aria-label", t.title);
    wrap.style.cssText = [
      "position:fixed","left:20px","right:20px","bottom:20px","max-width:520px",
      "margin-left:auto","margin-right:auto","background:#131211","color:#F2EEE6",
      "border:1px solid rgba(242,238,230,.16)","border-radius:4px",
      "padding:20px 22px","font-family:system-ui,-apple-system,Segoe UI,sans-serif",
      "font-size:13px","line-height:1.6","z-index:100000",
      "box-shadow:0 20px 60px rgba(0,0,0,.4)","opacity:0","transform:translateY(12px)",
      "transition:opacity .4s ease,transform .4s ease"
    ].join(";");

    var h = document.createElement("div");
    h.style.cssText = "font-size:15px;font-weight:600;color:#F2EEE6;margin-bottom:8px;letter-spacing:.2px";
    h.textContent = t.title;

    var p = document.createElement("p");
    p.style.cssText = "margin:0 0 16px 0;color:rgba(242,238,230,.72)";
    p.textContent = t.body + " ";
    var link = document.createElement("a");
    link.href = POLICY_HREF;
    link.textContent = t.link;
    link.style.cssText = "color:#E5482A;border-bottom:1px solid rgba(229,72,42,.5);text-decoration:none;white-space:nowrap";
    p.appendChild(link);

    var row = document.createElement("div");
    row.style.cssText = "display:flex;gap:10px;flex-wrap:wrap";

    var bAll = document.createElement("button");
    bAll.type = "button";
    bAll.textContent = t.accept;
    bAll.style.cssText = "flex:1 1 auto;background:#E5482A;color:#fff;border:0;padding:11px 18px;font:600 11px/1.2 system-ui,sans-serif;letter-spacing:1.4px;text-transform:uppercase;cursor:pointer;border-radius:2px;transition:opacity .25s";
    bAll.onmouseenter = function(){ bAll.style.opacity = ".85"; };
    bAll.onmouseleave = function(){ bAll.style.opacity = "1"; };
    bAll.onclick = function(){
      writeConsent({ analytics:true, marketing:true, ts:Date.now() });
      fireAnalytics();
      dismiss(wrap);
    };

    var bEss = document.createElement("button");
    bEss.type = "button";
    bEss.textContent = t.essential;
    bEss.style.cssText = "flex:1 1 auto;background:transparent;color:rgba(242,238,230,.8);border:1px solid rgba(242,238,230,.28);padding:11px 18px;font:600 11px/1.2 system-ui,sans-serif;letter-spacing:1.4px;text-transform:uppercase;cursor:pointer;border-radius:2px;transition:all .25s";
    bEss.onmouseenter = function(){ bEss.style.borderColor = "rgba(242,238,230,.6)"; };
    bEss.onmouseleave = function(){ bEss.style.borderColor = "rgba(242,238,230,.28)"; };
    bEss.onclick = function(){
      writeConsent({ analytics:false, marketing:false, ts:Date.now() });
      dismiss(wrap);
    };

    row.appendChild(bAll); row.appendChild(bEss);
    wrap.appendChild(h); wrap.appendChild(p); wrap.appendChild(row);
    return wrap;
  }

  function dismiss(el) {
    el.style.opacity = "0";
    el.style.transform = "translateY(12px)";
    setTimeout(function(){ if (el.parentNode) el.parentNode.removeChild(el); }, 450);
  }

  function init() {
    var consent = readConsent();
    if (consent && consent.analytics) { fireAnalytics(); return; }
    if (consent && consent.analytics === false) { return; }
    var banner = buildBanner();
    document.body.appendChild(banner);
    requestAnimationFrame(function(){
      banner.style.opacity = "1";
      banner.style.transform = "translateY(0)";
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else { init(); }
})();
