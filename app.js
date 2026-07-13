const cfg = window.ZERO_CONFIG || {};
const ready = cfg.SUPABASE_URL && cfg.SUPABASE_ANON_KEY &&
  !cfg.SUPABASE_URL.includes("여기에_") &&
  !cfg.SUPABASE_ANON_KEY.includes("여기에_");

const client = ready
  ? supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY)
  : null;

async function sha256(text){
  const bytes = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(hash)]
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}

function makeConsultationNo(){
  const d = new Date();
  const ymd = `${d.getFullYear()}${String(d.getMonth()+1).padStart(2,"0")}${String(d.getDate()).padStart(2,"0")}`;
  const random = Math.random().toString(36).slice(2,7).toUpperCase();
  return `ZERO-${ymd}-${random}`;
}

function needSetup(){
  alert("Supabase 연결 전입니다. config.js에 프로젝트 URL과 anon key를 입력해 주세요.");
}

window.ZERO_APP = { client, ready, sha256, makeConsultationNo, needSetup };
