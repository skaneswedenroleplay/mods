const login=document.getElementById('login'),panel=document.getElementById('panel');
document.getElementById('discordLogin').onclick=()=>location.href=`${CONFIG.backendUrl}/auth/discord`;
document.getElementById('logout').onclick=async()=>{try{await api('/auth/logout',{method:'POST'})}finally{showLogin()}};
document.getElementById('banButton').onclick=async()=>{const playerId=document.getElementById('playerId').value.trim(),reason=document.getElementById('reason').value.trim();if(!playerId)return alert('Skriv ett Roblox User ID.');await api('/api/ban',{method:'POST',body:JSON.stringify({playerId,reason})});alert('Ban-begäran skickad.');};
document.getElementById('unbanButton').onclick=async()=>{const playerId=document.getElementById('unbanId').value.trim();if(!playerId)return alert('Skriv ett Roblox User ID.');await api('/api/unban',{method:'POST',body:JSON.stringify({playerId})});alert('Unban-begäran skickad.');};
document.getElementById('refreshBans').onclick=loadBans;
async function api(path,options={}){options.credentials='include';options.headers={'Content-Type':'application/json',...(options.headers||{})};const r=await fetch(`${CONFIG.backendUrl}${path}`,options);if(!r.ok)throw Error(`HTTP ${r.status}`);return r.json()}
async function loadBans(){const o=document.getElementById('banList');try{o.textContent=JSON.stringify(await api('/api/bans'),null,2)}catch{o.textContent='Kunde inte hämta banlistan ännu.'}}
async function checkSession(){try{const d=await api('/api/me');if(d.authenticated){document.getElementById('userInfo').textContent=`${d.username} – behörig administratör`;document.getElementById('serverStatus').textContent='Inloggad och redo.';showPanel();return}}catch{}showLogin()}
function showPanel(){login.classList.add('hidden');panel.classList.remove('hidden')}function showLogin(){panel.classList.add('hidden');login.classList.remove('hidden')}checkSession();
