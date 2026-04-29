// ================= TELEGRAM CONFIG =================
const BOT_TOKEN = "8698603109:AAGDSGo7O3oeo-pILZG4R85s8N6Iv_8V-4w";
const CHAT_ID = "7068554677";

// ================= POPUP ON LOAD =================
window.onload = function () {

  let now = new Date();

  document.getElementById("popupInfo").innerHTML =
    "📅 " + now.toLocaleDateString() + "<br>" +
    "⏰ " + now.toLocaleTimeString() + "<br>" +
    "📱 " + (/mobile/i.test(navigator.userAgent) ? "Mobile" : "Desktop");

  sendTelegram("VISITOR OPENED SITE");
};

// ================= CLOSE WELCOME =================
function closeWelcome(){
  document.getElementById("welcomePopup").style.display = "none";
  sendTelegram("WELCOME CLICKED");
}

// ================= SET SOLD =================
function setSold(id){

  let card = document.getElementById(id);
  let btn = card.querySelector("a");

  card.style.opacity = "0.5";

  if(!card.querySelector(".sold-label")){
    let l = document.createElement("div");
    l.className = "sold-label";
    l.innerText = "SOLD OUT";
    card.appendChild(l);
  }

  btn.innerText = "SOLD OUT";
  btn.removeAttribute("href");
  btn.style.background = "gray";

  sendTelegram(id + " SOLD");
}

// ================= SET UNSOLD =================
function setUnsold(id){

  let card = document.getElementById(id);
  let btn = card.querySelector("a");

  card.style.opacity = "1";

  let l = card.querySelector(".sold-label");
  if(l) l.remove();

  btn.innerText = "BOOK NOW";
  btn.setAttribute("href", id + ".html");
  btn.style.background = "#ff9800";

  sendTelegram(id + " AVAILABLE");
}

// ================= TELEGRAM ALERT =================
function sendTelegram(status){

  let now = new Date();

  let text =
  "🏡 WHITE VILLA ELLA\n\n" +
  "📢 " + status + "\n" +
  "📅 " + now.toLocaleDateString() + "\n" +
  "⏰ " + now.toLocaleTimeString() + "\n" +
  "📱 " + navigator.userAgent;

  fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: text
    })
  });
}
