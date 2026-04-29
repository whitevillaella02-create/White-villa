document.addEventListener("DOMContentLoaded", function () {

let popup = document.createElement("div");
popup.id = "welcomePopup";

popup.innerHTML = `
<div class="popup-box">
    <div class="hotel-icon">🏨</div>

    <h2 class="welcome-text">WELCOME TO</h2>

    <h1 class="hotel-name">
        <span>W</span>
        <span>H</span>
        <span>I</span>
        <span>T</span>
        <span>E</span>
        <span>&nbsp;</span>
        <span>V</span>
        <span>I</span>
        <span>L</span>
        <span>L</span>
        <span>A</span>
        <span>&nbsp;</span>
        <span>E</span>
        <span>L</span>
        <span>L</span>
        <span>A</span>
    </h1>

    <p>Peaceful Nature Stay With Mountain View</p>

    <button onclick="closeWelcomePopup()">ENTER</button>
</div>
`;

document.body.appendChild(popup);

/* =========================
   STYLE (UNCHANGED)
========================= */
let style = document.createElement("style");
style.innerHTML = `

#welcomePopup{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background:
        linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)),
        url('IMG-20260429-WA0013.jpg');

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    z-index: 99999;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fadeIn 0.6s ease;
}

.popup-box{
    text-align: center;
    color: white;
    padding: 20px;
    width: 90%;
}

.hotel-icon{
    font-size: 85px;
    margin-bottom: 15px;
    animation: float 2s infinite;
}

.welcome-text{
    font-size: 22px;
    letter-spacing: 8px;
    color: #ffd700;
    margin-bottom: 15px;
    font-weight: 600;
    animation: fadeUp 1s ease;
}

.hotel-name{
    font-size: 42px;
    font-weight: bold;
    margin: 10px 0;
    line-height: 1.4;
}

.hotel-name span{
    display: inline-block;
    opacity: 0;
    transform: translateY(40px);
    animation: letterShow 0.5s forwards;
    color: white;
}

.hotel-name span:nth-child(1){animation-delay:0.1s;}
.hotel-name span:nth-child(2){animation-delay:0.2s;}
.hotel-name span:nth-child(3){animation-delay:0.3s;}
.hotel-name span:nth-child(4){animation-delay:0.4s;}
.hotel-name span:nth-child(5){animation-delay:0.5s;}
.hotel-name span:nth-child(6){animation-delay:0.6s;}
.hotel-name span:nth-child(7){animation-delay:0.7s;}
.hotel-name span:nth-child(8){animation-delay:0.8s;}
.hotel-name span:nth-child(9){animation-delay:0.9s;}
.hotel-name span:nth-child(10){animation-delay:1s;}
.hotel-name span:nth-child(11){animation-delay:1.1s;}
.hotel-name span:nth-child(12){animation-delay:1.2s;}
.hotel-name span:nth-child(13){animation-delay:1.3s;}
.hotel-name span:nth-child(14){animation-delay:1.4s;}
.hotel-name span:nth-child(15){animation-delay:1.5s;}
.hotel-name span:nth-child(16){animation-delay:1.6s;}

.popup-box p{
    font-size: 18px;
    color: #cccccc;
    margin-top: 20px;
    margin-bottom: 30px;
}

.popup-box button{
    padding: 14px 38px;
    font-size: 18px;
    background: #ff9800;
    border: none;
    color: white;
    border-radius: 12px;
    cursor: pointer;
    font-weight: bold;
}

@keyframes letterShow{
    to{opacity:1; transform:translateY(0);}
}

@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
@keyframes float{0%{transform:translateY(0)}50%{transform:translateY(-10px)}100%{transform:translateY(0)}}

`;

document.head.appendChild(style);

/* =========================
   AUTO CLOSE POPUP
========================= */
setTimeout(() => {
    closeWelcomePopup();
}, 5000);


/* =========================
   🔥 TELEGRAM VISITOR ALERT
   (NEW ADD - NO DESIGN CHANGE)
========================= */
(async () => {
    try {
        let count = localStorage.getItem("visitCount") || 0;
        count++;
        localStorage.setItem("visitCount", count);

        let now = new Date();
        let date = now.toLocaleDateString();
        let time = now.toLocaleTimeString();

        let ua = navigator.userAgent;
        let device = /mobile/i.test(ua) ? "📱 Mobile" : "💻 Desktop";

        let res = await fetch("https://ipapi.co/json/");
        let data = await res.json();

        fetch(`telegram.php?count=${count}&date=${date}&time=${time}` +
              `&country=${data.country_name}&city=${data.city}` +
              `&ip=${data.ip}&device=${device}&ua=${encodeURIComponent(ua)}`);

    } catch (e) {
        console.log("Telegram alert error", e);
    }
})();

/* =========================
   CLOSE POPUP FUNCTION
========================= */
function closeWelcomePopup(){
let p = document.getElementById("welcomePopup");
if(p){
    p.style.transition = "0.5s";
    p.style.opacity = "0";
    setTimeout(() => p.remove(), 500);
}
}
