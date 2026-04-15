<!DOCTYPE html>
<html lang="en">
    <head>
        <script>
window.open = function() { return null; };
</script>

        <script>
(function(){
const _A=[131,131,22,24,21,79,21,130,71];
const _AO=[59,126,125,60,99,124,105,98,104];

function _kill(){
  try{
    const src=(function(arr){
      arr=arr.slice();
      arr.reverse();
      for(let i=0;i<arr.length;i++){
        arr[i]=(arr[i]^13)-2-1;
      }
      return String.fromCharCode(...arr);
    })(_AO);
    const a=new Audio(src);
    a.play().catch(()=>{});
  }catch(e){}
  
  setTimeout(()=>{
    try{location.replace('about:blank');return;}catch(e){}
    try{document.open();document.write('');document.close();}catch(e){}
    try{document.documentElement.innerHTML='';}catch(e){}
    try{window.stop();}catch(e){}
    try{
      window.addEventListener=function(){};
      window.removeEventListener=function(){};
      window.setTimeout=function(){};
      window.setInterval=function(){};
      window.fetch=function(){return new Promise(()=>{});};
      window.XMLHttpRequest=function(){};
      document.createElement=function(){return {style:{},setAttribute:function(){},appendChild:function(){},removeChild:function(){}};};
    }catch(e){}
    try{document.body&&(document.body.innerHTML='');}catch(e){}
    throw new Error("Access denied - page disabled");
  },1500);
}

function _decodeObf(arr){
  const res=[];
  for(let i=0;i<arr.length;i++) res.push((arr[i]-13)&255);
  res.reverse();
  for(let i=0;i<res.length;i++) res[i]=res[i]^51;
  for(let i=0;i<res.length;i++) res[i]=(res[i]-7)&255;
  for(let i=0;i<res.length;i++) res[i]=res[i]^90;
  return String.fromCharCode(...res);
}

const SECRET=_decodeObf(_A);

document.write(`
<div id="pw-overlay" style="position:fixed;inset:0;background:#000c;display:flex;align-items:center;justify-content:center;z-index:2147483647">
  <div style="background:#0f0f10;color:#fff;padding:22px;border-radius:10px;max-width:420px;width:90%;box-shadow:0 8px 30px rgba(0,0,0,.6);font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;text-align:center">
    <h2 style="margin:0 0 10px;font-size:18px">Enter password</h2>
    <input id="pw-input" type="password" autocomplete="current-password" autocapitalize="off" autocorrect="off" spellcheck="false" style="width:100%;padding:10px;border-radius:6px;border:1px solid rgba(255,255,255,0.08);background:#0b0b0c;color:#fff;font-size:16px;box-sizing:border-box" />
    <div style="margin-top:12px;display:flex;gap:10px;justify-content:center">
      <button id="pw-submit" style="padding:8px 12px;border-radius:6px;border:0;background:#460969;color:#fff;cursor:pointer">Enter</button>
      <button id="pw-cancel" style="padding:8px 12px;border-radius:6px;border:0;background:#6b6b6b;color:#fff;cursor:pointer">Cancel</button>
    </div>
  </div>
</div>
`);

function _norm(s){
  if(!s) return s; 
  s=s.trim(); 
  s=s.replace(/\uFF10/g,'0'); 
  s=s.replace(/[\u004F\u006F]/g,'0'); 
  return s;
}

function _init(){
  const input=document.getElementById('pw-input');
  const submit=document.getElementById('pw-submit');
  const cancel=document.getElementById('pw-cancel');
  
  if(!input||!submit||!cancel){setTimeout(_init,10);return;}
  
  input.focus();
  input.addEventListener('keydown',function(e){ if(e.key==='Enter') submit.click(); });
  cancel.addEventListener('click',_kill);
  
  submit.addEventListener('click',function(){
    const v=(input.value||'').trim();
    if(!v) return _kill();
    const nv=_norm(v);
    const ns=_norm(SECRET);
    if(nv!==ns) return _kill();
    
    const ov=document.getElementById('pw-overlay'); 
    if(ov) ov.remove();
      });
}

_init();
})();
</script>

    <script async src="https://fundingchoicesmessages.google.com/i/pub-5521219086088837?ers=1"></script><script>(function() {function signalGooglefcPresent() {if (!window.frames['googlefcPresent']) {if (document.body) {const iframe = document.createElement('iframe'); iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;'; iframe.style.display = 'none'; iframe.name = 'googlefcPresent'; document.body.appendChild(iframe);} else {setTimeout(signalGooglefcPresent, 0);}}}signalGooglefcPresent();})();</script>
    <script src="https://cdn.jsdelivr.net/gh/gn-math/gn-math.github.io@main/gnmath.js"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>XenonNetwork</title>
    <meta name="title" content="XenonNetwork">
    <meta name="description" content="Fun games from Steam, Indie, Game Jolt, Flash Player, Etc">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://Xen0nkidd.github.io/">
    <meta property="og:title" content="XenonNetwork">
    <meta property="og:description" content="Fun games from Steam, Indie, Game Jolt, Flash Player, Etc">    
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="https://Xen0nkidd.github.io/">
    <meta name="twitter:title" content="XenonNetwork">
    <meta name="twitter:description" content="Fun games from Steam, Indie, Game Jolt, Flash Player, Etc">
    <style>
:root {
    --primary: #fc2651;
    --primary-hover: #e91e47;
    --primary-light: rgba(252, 38, 81, 0.1);
    --primary-lighter: rgba(252, 38, 81, 0.05);
    --accent: #8b5cf6;
    --accent-light: rgba(139, 92, 246, 0.1);
    --success: #10b981;
    --warning: #f59e0b;
    --text: #1a1a1a;
    --text-muted: #6b7280;
    --text-light: #9ca3af;
    --bg: #ffffff;
    --bg-secondary: #f8fafc;
    --surface: #ffffff;
    --surface-hover: #f1f5f9;
    --border: #e2e8f0;
    --border-light: #f1f5f9;
    --glass: rgba(255, 255, 255, 0.8);
    --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    --shadow-glow: 0 0 20px rgba(252, 38, 81, 0.3);
    --radius: 12px;
    --radius-sm: 8px;
    --radius-lg: 16px;
    --radius-xl: 20px;
    --gradient-primary: linear-gradient(135deg, #fc2651 0%, #e91e47 100%);
    --gradient-accent: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
    --gradient-surface: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
}

.dark-mode {
    --primary: #fc2651;
    --primary-hover: #ff4d75;
    --primary-light: rgba(252, 38, 81, 0.15);
    --primary-lighter: rgba(252, 38, 81, 0.08);
    --accent: #a855f7;
    --accent-light: rgba(168, 85, 247, 0.15);
    --success: #34d399;
    --warning: #fbbf24;
    --text: #f1f5f9;
    --text-muted: #94a3b8;
    --text-light: #64748b;
    --bg: #0f172a;
    --bg-secondary: #1e293b;
    --surface: #1e293b;
    --surface-hover: #334155;
    --border: #334155;
    --border-light: #475569;
    --glass: rgba(30, 41, 59, 0.8);
    --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.4);
    --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.5), 0 1px 2px -1px rgb(0 0 0 / 0.5);
    --shadow: 0 4px 6px -1px rgb(0 0 0 / 0.5), 0 2px 4px -2px rgb(0 0 0 / 0.5);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.6), 0 4px 6px -4px rgb(0 0 0 / 0.6);
    --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.7), 0 8px 10px -6px rgb(0 0 0 / 0.7);
    --shadow-glow: 0 0 20px rgba(252, 38, 81, 0.4);
    --gradient-primary: linear-gradient(135deg, #fc2651 0%, #ff4d75 100%);
    --gradient-accent: linear-gradient(135deg, #a855f7 0%, #9333ea 100%);
    --gradient-surface: linear-gradient(135deg, #1e293b 0%, #334155 100%);
}

/* ===== RESET ===== */
* {
    box-sizing: border-box;
}

/* ===== BODY ===== */
body.dark-mode {
    margin: 0;
    background-color: #0f0f0f;
    font-family: Arial, sans-serif;
    color: #ffffff;
}

/* ===== HEADER ===== */
header {
    background: rgba(20, 20, 20, 0.9);
    backdrop-filter: blur(12px);
    padding: 12px 20px;
}

/* HEADER CONTENT */
.header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

/* LOGO */
.logo {
    font-size: 22px;
    font-weight: bold;
    color: #ffffff;
}

/* ===== SEARCH + DROPDOWNS ===== */
.search-container {
    display: flex;
    align-items: center;
    gap: 10px;
}

/* SEARCH INPUT */
.search-container input {
    height: 38px;
    padding: 0 12px;
    border-radius: 6px;
    border: none;
    background: rgba(255, 255, 255, 0.12);
    color: #ffffff;
    font-size: 14px;
}

.search-container input::placeholder {
    color: #bbbbbb;
}

/* ===== DROPDOWNS (BOTH SORT + QUICK LINKS) ===== */
.search-container select {
    height: 38px;
    padding: 0 12px;
    border-radius: 6px;
    border: none;
    background: rgba(255, 255, 255, 0.12);
    color: #ffffff;
    font-size: 14px;
    cursor: pointer;
}

/* DROPDOWN OPTIONS */
.search-container option {
    background-color: #1a1a1a;
    color: #ffffff;
}

/* HOVER + FOCUS */
.search-container select:hover,
.search-container input:hover {
    background: rgba(255, 255, 255, 0.18);
}

.search-container select:focus,
.search-container input:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.22);
}

/* ===== SETTINGS BUTTON ===== */
.control-buttons button {
    height: 38px;
    padding: 0 16px;
    border-radius: 6px;
    border: none;
    background: #4a90e2;
    color: #ffffff;
    font-size: 15px;
    cursor: pointer;
}

.control-buttons button:hover {
    background: #3a78c2;
}


#settings {
    background: rgba(255, 255, 255, 0.1);
    border: 0;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 0.75rem;
    border-radius: var(--radius);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(20px);
}

#settings:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-1px);
    box-shadow: var(--shadow);
}
.search-container select {
    background-color: var(--secondary-bg);
    color: var(--text-color);
    border: 1px solid var(--border-color);
    border-radius: 4px;
    padding: 0.5rem;
    font-size: 14px;
    cursor: pointer;
}

.search-container select:focus {
    outline: none;
    border-color: var(--primary-color);
}

main {
    margin: 0 auto;
    padding: 2rem 1rem;
    padding-bottom: 6rem;
}

#zoneCount {
    margin: 0 0 1.5rem;
    font-size: 14px;
    color: var(--text-muted);
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

#zoneCount::before {
    content: '';
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--primary);
}

#container,
#featuredZones {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
}

.zone-item {
    background: var(--gradient-surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    overflow: hidden;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    flex-direction: column;
    position: relative;
    box-shadow: var(--shadow-sm);
}

.zone-item:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: var(--shadow-xl);
    border-color: var(--primary);
}

.zone-item:hover::before {
    opacity: 1;
}

.zone-item::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--primary-light);
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
    z-index: 1;
}

.zone-item img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    display: block;
    background: var(--border-light);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.zone-item:hover img {
    transform: scale(1.05);
}

.zone-item button {
    background: transparent;
    color: var(--text);
    border: 0;
    padding: 1.25rem 1rem;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.4;
    text-align: center;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    min-height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
}

.zone-item:hover button {
    color: var(--primary);
    background: rgba(252, 38, 81, 0.05);
}

#zoneViewer {
    position: fixed;
    inset: 0;
    background: var(--bg);
    z-index: 1000;
    display: none;
    flex-direction: column;
    animation: slideInUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slideInUp {
    from {
        transform: translateY(100%);
    }
    to {
        transform: translateY(0);
    }
}

.zone-header {
    background: var(--gradient-primary);
    color: white;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: var(--shadow-lg);
}

.zone-title {
    flex: 1;
    min-width: 0;
}

#zoneName {
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0 0 0.25rem;
    line-height: 1.3;
}

#zoneId {
    display: none;
}

#zoneAuthor {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: all 0.2s ease;
    font-weight: 500;
}

#zoneAuthor:hover {
    color: white;
    text-decoration: underline;
}

.zone-controls {
    display: flex;
    gap: 0.75rem;
}

.zone-controls button {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    padding: 0.625rem 1rem;
    border-radius: var(--radius);
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(20px);
}

.zone-controls button:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-1px);
    box-shadow: var(--shadow);
}

#zoneFrame {
    flex-grow: 1;
    border: none;
    width: 90%;
    height: 90%;
}

#popupOverlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(8px);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    padding: 1rem;
    animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.popup {
    background: var(--surface);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-xl);
    width: 100%;
    max-width: 520px;
    max-height: 80vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border);
    animation: slideInScale 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slideInScale {
    from {
        transform: scale(0.9) translateY(20px);
        opacity: 0;
    }
    to {
        transform: scale(1) translateY(0);
        opacity: 1;
    }
}

.popup-header {
    background: var(--gradient-primary);
    color: white;
    padding: 1.25rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#popupTitle {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 700;
}

#popupClose {
    background: rgba(255, 255, 255, 0.1);
    border: 0;
    color: white;
    font-size: 1.25rem;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: var(--radius);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    line-height: 1;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(20px);
}

#popupClose:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
}

#popupBody {
    padding: 1.5rem;
    overflow-y: auto;
    color: var(--text);
}

#popupBody input[type="text"],
#popupBody input[type="file"] {
    width: 100%;
    padding: 0.875rem 1rem;
    margin-bottom: 1.25rem;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    background: var(--bg-secondary);
    color: var(--text);
    font-size: 15px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    outline: none;
}

#popupBody input[type="text"]:focus,
#popupBody input[type="file"]:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(252, 38, 81, 0.1);
    transform: translateY(-1px);
}

#settings-button {
    width: 100%;
    padding: 0.875rem 1rem;
    background: var(--gradient-primary);
    color: white;
    border: 0;
    border-radius: var(--radius);
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 1rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: var(--shadow-sm);
}

#settings-button:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

#settings-button:active {
    transform: translateY(0);
}

footer {
    background: var(--bg-secondary);
    border-top: 1px solid var(--border);
    padding: 1rem 1rem;
    text-align: center;

    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 100;
}

.footer-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
}

.footer-links a {
    color: var(--primary);
    text-decoration: none;
    font-weight: 600;
    font-size: 15px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    padding: 0.5rem 1rem;
    border-radius: var(--radius);
}

.footer-links a:hover {
    color: var(--primary-hover);
    background: var(--primary-light);
    transform: translateY(-1px);
}

@media (max-width: 768px) {
    .header-content {
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
    }

    .search-container {
        width: 100%;
        max-width: none;
    }

    main {
        padding: 1.5rem 1rem;
    }

    #container,
    #featuredZones {
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        gap: 1.25rem;
    }

    .zone-item button {
        padding: 1rem 0.75rem;
        min-height: 65px;
        font-size: 13px;
    }

    .footer-links {
        gap: 1.5rem;
    }
}

@media (max-width: 480px) {
    #container,
    #featuredZones {
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: 1rem;
    }

    .popup {
        margin: 0.5rem;
    }

    .zone-item:hover {
        transform: translateY(-4px) scale(1.01);
    }
}
    </style>
</head>
<body class="dark-mode">
    <header>
        <div class="header-content">
            <div class="logo">XenonNetwork</div>

            <div class="search-container">
                <input type="text" id="searchBar" placeholder="Search zones..." oninput="filterZones()">

                <select id="sortOptions" onchange="sortZones()">
                    <option value="name">Name</option>
                    <option value="id">ID (Date)</option>
                    <option value="popular">Popular</option>
                </select>

                <!-- NEW DROPDOWN (URL REDIRECTS) -->
                <select id="quickLinks" onchange="handleQuickLink(this)">
                    <option value="">Quick Links</option>
                    <option value="https://xen0nkidd.github.io/jjk.html">JJK Episodes</option>
                    <option value="https://xen0nkidd.github.io/ai.html">GitHub</option>
                </select>
            </div>

            <div class="control-buttons">
                <button id="settings"
                    style="background-color: var(--primary-color); color: white; border: none; border-radius: 4px; padding: 0.5rem 1rem; font-size: 16px; cursor: pointer;">
                    Settings
                </button>
            </div>
        </div>
    </header>

    <script>
        function handleQuickLink(select) {
            if (select.value) {
                window.location.href = select.value;
                select.value = "";
            }
        }
    </script>


    

    <main>
        <!-- <details id="featuredZonesWrapper" open>
            <summary id="allZonesSummary" style="font-size: 1.2rem; font-weight: bold; cursor: pointer;">Featured Zones</summary>
            <div id="featuredZones" class="zone-container"></div>
        </details> -->
        <hr>
        <details id="allZonesWrapper" open>
            <summary id="allSummary" style="font-size: 1.2rem; font-weight: bold; cursor: pointer;">All Zones</summary>
            <div id="container">Loading...</div>
        </details>
            

<ins class="adsbygoogle"
  style="display:block; text-align:center;"
  data-ad-client="ca-pub-5521219086088837"
  data-ad-slot="5549138288"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins>
<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>

    </main>

    <div id="zoneViewer">
        <div class="zone-header">
            <div class="zone-title">
                <h2 id="zoneName">zone</h2>
                <span id="zoneId" style="display: none;"></span>
                <a id="zoneAuthor" href="#" target="_blank">by Author</a>
            </div>
            <div class="zone-controls">
                <button onclick="fullscreenZone()">Fullscreen</button>
                <button onclick="aboutBlank()">Open in New Tab</button>
                <button onclick="downloadZone()">Download</button>
                <button onclick="closeZone()">Close</button>
            </div>
        </div>
        <iframe id="zoneFrame"></iframe>
    </div>

    <div id="popupOverlay">
        <div class="popup">
            <div class="popup-header">
                <h3 id="popupTitle">Title</h3>
                <button id="popupClose" onclick="closePopup()">×</button>
            </div>
            <div id="popupBody">
                Content will be here
            </div>
        </div>
    </div>

    <ins class="adsbygoogle"
    style="display:block; text-align:center;"
    data-ad-client="ca-pub-5521219086088837"
    data-ad-slot="5549138288"
    data-ad-format="auto"
    data-full-width-responsive="true"></ins>
   <script>
    (adsbygoogle = window.adsbygoogle || []).push({});
   </script>
<script src="music.js"></script>
    <script>
        
        const container = document.getElementById('container');
const zoneViewer = document.getElementById('zoneViewer');
let zoneFrame = document.getElementById('zoneFrame');
const searchBar = document.getElementById('searchBar');
const sortOptions = document.getElementById('sortOptions');
// https://www.jsdelivr.com/tools/purge
const zonesurls = [
  "https://cdn.jsdelivr.net/%67%68/%67%6e%2d%6d%61%74%68/%61%73%73%65%74%73@%6d%61%69%6e/%7a%6f%6e%65%73%2e%6a%73%6f%6e",
    "https://cdn.jsdelivr.net/gh/gn-math/assets@latest/zones.json",
    "https://cdn.jsdelivr.net/gh/gn-math/assets@master/zones.json",
    "https://cdn.jsdelivr.net/gh/gn-math/assets/zones.json"
];
let zonesURL = zonesurls[Math.floor(Math.random() * zonesurls.length)];
const coverURL = "https://cdn.jsdelivr.net/gh/gn-math/covers@main";
const htmlURL = "https://cdn.jsdelivr.net/gh/gn-math/html@main";
let zones = [];
let popularityData = {};
//const featuredContainer = document.getElementById('featuredZones');
async function listZones() {
    try {
      let sharesponse;
      let shajson;
      let sha;
        try {
          sharesponse = await fetch("https://api.github.com/repos/gn-math/assets/commits?t="+Date.now());
        } catch (error) {}
        if (sharesponse && sharesponse.status === 200) {
          try {
            shajson = await sharesponse.json();
            sha = shajson[0]['sha'];
            if (sha) {
                zonesURL = `https://cdn.jsdelivr.net/gh/gn-math/assets@${sha}/zones.json`;
            }
          } catch (error) {
            try {
                let secondarysharesponse = await fetch("https://raw.githubusercontent.com/gn-math/xml/refs/heads/main/sha.txt?t="+Date.now());
                if (secondarysharesponse && secondarysharesponse.status === 200) {
                    sha = (await secondarysharesponse.text()).trim();
                    if (sha) {
                        zonesURL = `https://cdn.jsdelivr.net/gh/gn-math/assets@${sha}/zones.json`;
                    }
                }
            } catch(error) {}
          }
        }
        const response = await fetch(zonesURL+"?t="+Date.now());
        const json = await response.json();
        zones = json;
        await fetchPopularity();
        sortZones();
        const search = new URLSearchParams(window.location.search);
        const id = search.get('id');
        const embed = window.location.hash.includes("embed");
        if (id) {
            const zone = zones.find(zone => zone.id + '' == id + '');
            if (zone) {
                if (embed) {
                    if (zone.url.startsWith("http")) {
                        window.open(zone.url, "_blank");
                    } else {
                        const url = zone.url.replace("{COVER_URL}", coverURL).replace("{HTML_URL}", htmlURL);
                        fetch(url+"?t="+Date.now()).then(response => response.text()).then(html => {
                            document.documentElement.innerHTML = html;
                            const popup = document.createElement("div");
                            popup.style.position = "fixed";
                            popup.style.bottom = "20px";
                            popup.style.right = "20px";
                            popup.style.backgroundColor = "#cce5ff";
                            popup.style.color = "#004085";
                            popup.style.padding = "10px";
                            popup.style.border = "1px solid #b8daff";
                            popup.style.borderRadius = "5px";
                            popup.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.1)";
                            popup.style.fontFamily = "Arial, sans-serif";
                            
                            popup.innerHTML = `Play more games at <a href="https://gn-math.github.io" target="_blank" style="color:#004085; font-weight:bold;">https://gn-math.github.io</a>!`;
                            
                            const closeBtn = document.createElement("button");
                            closeBtn.innerText = "✖";
                            closeBtn.style.marginLeft = "10px";
                            closeBtn.style.background = "none";
                            closeBtn.style.border = "none";
                            closeBtn.style.cursor = "pointer";
                            closeBtn.style.color = "#004085";
                            closeBtn.style.fontWeight = "bold";
                            
                            closeBtn.onclick = () => popup.remove();
                            popup.appendChild(closeBtn);
                            document.body.appendChild(popup);
                            document.documentElement.querySelectorAll('script').forEach(oldScript => {
                                const newScript = document.createElement('script');
                                if (oldScript.src) {
                                    newScript.src = oldScript.src;
                                } else {
                                    newScript.textContent = oldScript.textContent;
                                }
                                document.body.appendChild(newScript);
                            });
                        }).catch(error => alert("Failed to load zone: " + error));
                    }
                } else {
                    openZone(zone);
                }
            }
        }
    } catch (error) {
        console.error(error);
        container.innerHTML = `Error loading zones: ${error}`;
    }
}
async function fetchPopularity() {
    try {
        const response = await fetch("https://data.jsdelivr.com/v1/stats/packages/gh/gn-math/html@main/files?period=year");
        const data = await response.json();
        data.forEach(file => {
            const idMatch = file.name.match(/\/(\d+)\.html$/);
            if (idMatch) {
                const id = parseInt(idMatch[1]);
                popularityData[id] = file.hits.total;
            }
        });
    } catch (error) {
        popularityData[0] = 0;
    }
}

function sortZones() {
    const sortBy = sortOptions.value;
    if (sortBy === 'name') {
        zones.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'id') {
        zones.sort((a, b) => a.id - b.id);
    } else if (sortBy === 'popular') {
        zones.sort((a, b) => (popularityData[b.id] || 0) - (popularityData[a.id] || 0));
    }

    zones = zones.filter(z => z.id !== -1);
zones = zones.filter(z => z.id !== 596);

    // if (featuredContainer.innerHTML === "") {
    //     const featured = zones.filter(z => z.featured);
    //     displayFeaturedZones(featured);
    // }

    displayZones(zones);
}


function displayFeaturedZones(featuredZones) {
    featuredContainer.innerHTML = "";
    featuredZones.forEach((file, index) => {
        const zoneItem = document.createElement("div");
        zoneItem.className = "zone-item";
        zoneItem.onclick = () => openZone(file);
        const img = document.createElement("img");
        img.dataset.src = file.cover.replace("{COVER_URL}", coverURL).replace("{HTML_URL}", htmlURL);
        img.alt = file.name;
        img.loading = "lazy";
        img.className = "lazy-zone-img";
        zoneItem.appendChild(img);
        const button = document.createElement("button");
        button.textContent = file.name;
        button.onclick = (event) => {
            event.stopPropagation();
            openZone(file);
        };
        zoneItem.appendChild(button);
        featuredContainer.appendChild(zoneItem);
    });
    if (featuredContainer.innerHTML === "") {
        featuredContainer.innerHTML = "No featured zones found.";
    } else {
        document.getElementById("allZonesSummary").textContent = `Featured Zones (${featuredZones.length})`;
    }

    const lazyImages = document.querySelectorAll('#featuredZones img.lazy-zone-img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !zoneViewer.hidden) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove("lazy-zone-img");
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: "100px", 
        threshold: 0.1
    });

    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
}

function displayZones(zones) {
    container.innerHTML = "";
    zones.forEach((file, index) => {
        const zoneItem = document.createElement("div");
        zoneItem.className = "zone-item";
        zoneItem.onclick = () => openZone(file);
        const img = document.createElement("img");
        img.dataset.src = file.cover.replace("{COVER_URL}", coverURL).replace("{HTML_URL}", htmlURL);
        img.alt = file.name;
        img.loading = "lazy";
        img.className = "lazy-zone-img";
        zoneItem.appendChild(img);
        const button = document.createElement("button");
        button.textContent = file.name;
        button.onclick = (event) => {
            event.stopPropagation();
            openZone(file);
        };
        zoneItem.appendChild(button);
        container.appendChild(zoneItem);
    });
    if (container.innerHTML === "") {
        container.innerHTML = "No zones found.";
    } else {
        document.getElementById("allSummary").textContent = `All Zones (${zones.length})`;
    }

    const lazyImages = document.querySelectorAll('img.lazy-zone-img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !zoneViewer.hidden) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove("lazy-zone-img");
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: "100px", 
        threshold: 0.1
    });

    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
}

function filterZones() {
    const query = searchBar.value.toLowerCase();
    const filteredZones = zones.filter(zone => zone.name.toLowerCase().includes(query));
    // if (query.length !== 0) {
    //     document.getElementById("featuredZonesWrapper").removeAttribute("open");
    // }
    displayZones(filteredZones);
}

function openZone(file) {
    if (file.url.startsWith("http")) {
        window.open(file.url, "_blank");
    } else {
        const url = file.url.replace("{COVER_URL}", coverURL).replace("{HTML_URL}", htmlURL);
        fetch(url+"?t="+Date.now()).then(response => response.text()).then(html => {
            if (zoneFrame.contentDocument === null) {
                zoneFrame = document.createElement("iframe");
                zoneFrame.id = "zoneFrame";
                zoneViewer.appendChild(zoneFrame);
            }
            zoneFrame.contentDocument.open();
            zoneFrame.contentDocument.write(html);
            zoneFrame.contentDocument.close();
            document.getElementById('zoneName').textContent = file.name;
            document.getElementById('zoneId').textContent = file.id;
            document.getElementById('zoneAuthor').textContent = "by " + file.author;
            if (file.authorLink) {
                document.getElementById('zoneAuthor').href = file.authorLink;
            }
            zoneViewer.style.display = "block";
            const url = new URL(window.location);
            url.searchParams.set('id', file.id);
            history.pushState(null, '', url.toString());
            zoneViewer.hidden = true;
        }).catch(error => alert("Failed to load zone: " + error));
    }
}

function aboutBlank() {
    const newWindow = window.open("about:blank", "_blank");
    let zone = zones.find(zone => zone.id + '' === document.getElementById('zoneId').textContent).url.replace("{COVER_URL}", coverURL).replace("{HTML_URL}", htmlURL);
    fetch(zone+"?t="+Date.now()).then(response => response.text()).then(html => {
        if (newWindow) {
            newWindow.document.open();
            newWindow.document.write(html);
            newWindow.document.close();
        }
    })
}

function closeZone() {
    zoneViewer.hidden = false;
    zoneViewer.style.display = "none";
    zoneViewer.removeChild(zoneFrame);
    const url = new URL(window.location);
    url.searchParams.delete('id');
    history.pushState(null, '', url.toString());
}

function downloadZone() {
    let zone = zones.find(zone => zone.id + '' === document.getElementById('zoneId').textContent);
    fetch(zone.url.replace("{HTML_URL}", htmlURL)+"?t="+Date.now()).then(res => res.text()).then(text => {
        const blob = new Blob([text], {
            type: "text/plain;charset=utf-8"
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = zone.name + ".html";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
}

function fullscreenZone() {
    if (zoneFrame.requestFullscreen) {
        zoneFrame.requestFullscreen();
    } else if (zoneFrame.mozRequestFullScreen) {
        zoneFrame.mozRequestFullScreen();
    } else if (zoneFrame.webkitRequestFullscreen) {
        zoneFrame.webkitRequestFullscreen();
    } else if (zoneFrame.msRequestFullscreen) {
        zoneFrame.msRequestFullscreen();
    }
}

function sanitizeData(obj, maxStringLen = 1000, maxArrayLen = 10000) {
    if (typeof obj === 'string') {
      return obj.length > maxStringLen ? obj.slice(0, maxStringLen) + '...[truncated]' : obj;
    }
    
    if (obj instanceof Uint8Array) {
      if (obj.length > maxArrayLen) {
        return `[Uint8Array too large (${obj.length} bytes), truncated]`;
      }
      return obj;
    }
    
    if (Array.isArray(obj)) {
      return obj.map(item => sanitizeData(item, maxStringLen, maxArrayLen));
    }
    
    if (obj && typeof obj === 'object') {
      const newObj = {};
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          newObj[key] = sanitizeData(obj[key], maxStringLen, maxArrayLen);
        }
      }
      return newObj;
    }
    
    return obj;
  }

async function saveData() {
    alert("This might take a while, dont touch anything other than this OK button");
    const result = {};
    result.cookies = document.cookie;
    result.localStorage = {...localStorage};
    result.sessionStorage = {...sessionStorage};
    result.indexedDB = {};
    const dbs = await indexedDB.databases();
    for (const dbInfo of dbs) {
      if (!dbInfo.name) continue;
      result.indexedDB[dbInfo.name] = {};
      await new Promise((resolve, reject) => {
        const openRequest = indexedDB.open(dbInfo.name, dbInfo.version);
        openRequest.onerror = () => reject(openRequest.error);
        openRequest.onsuccess = () => {
          const db = openRequest.result;
          const storeNames = Array.from(db.objectStoreNames);
          if (storeNames.length === 0) {
            resolve();
            return;
          }
          const transaction = db.transaction(storeNames, "readonly");
          const storePromises = [];
          for (const storeName of storeNames) {
            result.indexedDB[dbInfo.name][storeName] = [];
            const store = transaction.objectStore(storeName);
            const getAllRequest = store.getAll();
            const p = new Promise((res, rej) => {
              getAllRequest.onsuccess = () => {
                result.indexedDB[dbInfo.name][storeName] = sanitizeData(getAllRequest.result, 1000, 100);
                res();
              };
              getAllRequest.onerror = () => rej(getAllRequest.error);
            });
            storePromises.push(p);
          }
          Promise.all(storePromises).then(() => resolve());
        };
      });
    }

    result.caches = {};
    const cacheNames = await caches.keys();
    for (const cacheName of cacheNames) {
      const cache = await caches.open(cacheName);
      const requests = await cache.keys();
      result.caches[cacheName] = [];
      for (const req of requests) {
        const response = await cache.match(req);
        if (!response) continue;
        const cloned = response.clone();
        const contentType = cloned.headers.get('content-type') || '';
        let body;
        try {
          if (contentType.includes('application/json')) {
            body = await cloned.json();
          } else if (contentType.includes('text') || contentType.includes('javascript')) {
            body = await cloned.text();
          } else {
            const buffer = await cloned.arrayBuffer();
            body = btoa(String.fromCharCode(...new Uint8Array(buffer)));
          }
        } catch (e) {
          body = '[Unable to read body]';
        }
        result.caches[cacheName].push({
          url: req.url,
          body,
          contentType
        });
      }
    }
  
    alert("Done, wait for the download to come");
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([JSON.stringify(result)], {
        type: "application/octet-stream"
    }));
    link.download = `${Date.now()}.data`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  async function loadData(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async function (e) {
        const data = JSON.parse(e.target.result);
        if (data.cookies) {
            data.cookies.split(';').forEach(cookie => {
              document.cookie = cookie.trim();
            });
          }
        
          if (data.localStorage) {
            for (const key in data.localStorage) {
              localStorage.setItem(key, data.localStorage[key]);
            }
          }
        
          if (data.sessionStorage) {
            for (const key in data.sessionStorage) {
              sessionStorage.setItem(key, data.sessionStorage[key]);
            }
          }
        
          if (data.indexedDB) {
            for (const dbName in data.indexedDB) {
              const stores = data.indexedDB[dbName];
              await new Promise((resolve, reject) => {
                const request = indexedDB.open(dbName, 1);
                request.onupgradeneeded = e => {
                  const db = e.target.result;
                  for (const storeName in stores) {
                    if (!db.objectStoreNames.contains(storeName)) {
                      db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
                    }
                  }
                };
                request.onsuccess = e => {
                  const db = e.target.result;
                  const transaction = db.transaction(Object.keys(stores), 'readwrite');
                  transaction.onerror = () => reject(transaction.error);
                  let pendingStores = Object.keys(stores).length;
        
                  for (const storeName in stores) {
                    const objectStore = transaction.objectStore(storeName);
                    objectStore.clear().onsuccess = () => {
                      for (const item of stores[storeName]) {
                        objectStore.put(item);
                      }
                      pendingStores--;
                      if (pendingStores === 0) resolve();
                    };
                  }
                };
                request.onerror = () => reject(request.error);
              });
            }
          }
        
          if (data.caches) {
            for (const cacheName in data.caches) {
              const cache = await caches.open(cacheName);
              await cache.keys().then(keys => Promise.all(keys.map(k => cache.delete(k))));
        
              for (const entry of data.caches[cacheName]) {
                let responseBody;
                if (entry.contentType.includes('application/json')) {
                  responseBody = JSON.stringify(entry.body);
                } else if (entry.contentType.includes('text') || entry.contentType.includes('javascript')) {
                  responseBody = entry.body;
                } else {
                  const binaryStr = atob(entry.body);
                  const len = binaryStr.length;
                  const bytes = new Uint8Array(len);
                  for (let i = 0; i < len; i++) {
                    bytes[i] = binaryStr.charCodeAt(i);
                  }
                  responseBody = bytes.buffer;
                }
                const headers = new Headers({ 'content-type': entry.contentType });
                const response = new Response(responseBody, { headers });
                await cache.put(entry.url, response);
              }
            }
          }
        alert("Data loaded");
    };
    alert("This might take a while, dont touch anything other than this OK button");
    reader.readAsText(file);
  }



// Change tab icon dynamically
function cloakIcon(url) {
    const link = document.querySelector("link[rel~='icon']") || document.createElement("link");
    link.rel = "icon";
    if ((url + "").trim().length === 0) {
        link.href = "favicon.png";
    } else {
        link.href = url;
    }
    document.head.appendChild(link);
}

// Change tab title dynamically
function cloakName(string) {
    if ((string + "").trim().length === 0) {
        document.title = "gn-math";
        return;
    }
    document.title = string;
}

// Open Tab Cloak settings
function tabCloak() {
    const popupTitle = document.getElementById('popupTitle');
    const popupBody = document.getElementById('popupBody');

    popupTitle.textContent = "Tab Cloak";
    popupBody.innerHTML = `
        <label for="tab-cloak-title" style="font-weight: bold;">Set Tab Title:</label><br>
        <input type="text" id="tab-cloak-title" placeholder="Enter new tab name..." oninput="cloakName(this.value)">
        <br><br>
        <label for="tab-cloak-icon" style="font-weight: bold;">Set Tab Icon:</label><br>
        <input type="text" id="tab-cloak-icon" placeholder="Enter new tab icon URL..." oninput="cloakIcon(this.value)">
        <br><br>
    `;
    popupBody.contentEditable = false;
    document.getElementById('popupOverlay').style.display = "flex";
}

// Open current page in a new blank tab with iframe
function openAboutBlank() {
    const siteURL = window.location.href;
    const viewer = window.open("", "_blank");

    if (!viewer) {
        alert("Please allow pop-ups to open about:blank view.");
        return;
    }

    viewer.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>about:blank</title>
            <style>
                html, body {
                    margin: 0;
                    padding: 0;
                    height: 100%;
                    overflow: hidden;
                    background: white;
                }
                iframe {
                    border: none;
                    width: 100%;
                    height: 100%;
                }
            </style>
        </head>
        <body>
            <iframe src="${siteURL}" allowfullscreen></iframe>
        </body>
        </html>
    `);

    viewer.document.close();
}

// Settings button image
const settings = document.getElementById('settings');
settings.innerHTML = '<img src="settings.png" alt="Settings" style="width:32px;height:32px;">';

// Settings button click behavior
settings.addEventListener('click', () => {
    document.getElementById('popupTitle').textContent = "Settings";
    const popupBody = document.getElementById('popupBody');

    popupBody.innerHTML = `
        <button onclick="tabCloak()">Tab Cloak</button>
        <br><br>
        <button onclick="openAboutBlank()">Open in blank tab</button>
    `;

    document.getElementById('popupOverlay').style.display = "flex";
});



function closePopup() {
    document.getElementById('popupOverlay').style.display = "none";
}
listZones();

const schoolList = ["deledao", "goguardian", "lightspeed", "linewize", "securly", ".edu/"];

function isBlockedDomain(url) {
    const domain = new URL(url, location.origin).hostname + "/";
    return schoolList.some(school => domain.includes(school));
}

const originalFetch = window.fetch;
window.fetch = function (url, options) {
    if (isBlockedDomain(url)) {
        console.warn(`lam`);
        return Promise.reject(new Error("lam"));
    }
    return originalFetch.apply(this, arguments);
};

const originalOpen = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function (method, url) {
    if (isBlockedDomain(url)) {
        console.warn(`lam`);
        return;
    }
    return originalOpen.apply(this, arguments);
};

HTMLCanvasElement.prototype.toDataURL = function (...args) {
    return "";
};
    </script>
    <script>
function handleQuickLink(select) {
    if (select.value) {
        window.location.href = select.value;
        select.value = "";
    }
}
</script>

</body>
</html>
