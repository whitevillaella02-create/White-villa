document.addEventListener("DOMContentLoaded", function () {

let popup = document.createElement("div");
popup.id = "welcomePopup";

popup.innerHTML = `
<div class="popup-box">
    <div class="hotel-icon">🏨</div>

    <h2 class="welcome-text">WELCOME TO</h2>

    <h1 class="hotel-name">
        <span>W</span><span>H</span><span>I</span><span>T</span><span>E</span>
        <span>&nbsp;</span>
        <span>V</span><span>I</span><span>L</span><span>L</span><span>A</span>
        <span>&nbsp;</span>
        <span>E</span><span>L</span><span>L</span><span>A</span>
    </h1>

    <p>Peaceful Nature Stay With Mountain View</p>

    <button onclick="closeWelcomePopup()">ENTER</button>
</div>
`;

document.body.appendChild(popup);

/* ================= STYLE ================= */
let style = document.createElement("style");
style.innerHTML = `
#welcomePopup{
    position:fixed;
    top:0;left:0;
    width:100%;height:100%;
    background:linear-gradient(rgba(0,0,0,0.60),rgba(0,0,0,0.60)),
    url('IMG-20260429-WA0013.jpg');
    background-size:cover;
    background-position:center;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:99999;
    animation:fadeIn 0.6s ease;
}

.popup-box{text-align:center;color:#fff;width:90%;}
.hotel-icon{font-size:85px;animation:float 2s infinite;}
.welcome-text{color:#ffd700;letter-spacing:8px;}
.hotel-name{font-size:32px;margin:10px 0;}

.hotel-name span{
    display:inline-block;
    opacity:0;
    transform:translateY(40px);
    animation:letterShow 0.5s forwards;
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
.hotel-name span:nth-child(16){animation-delay:1.6s}

/* BUTTON */
.popup-box button{
    padding: 18px 60px;
    font-size: 20px;
    background: linear-gradient(45deg, #ff6a00, #ff9800);
    border: none;
    color: white;
    border-radius: 14px;
    cursor: pointer;
    font-weight: bold;
    letter-spacing: 2px;
    box-shadow: 0 10px 25px rgba(255, 140, 0, 0.5);
    transition: 0.3s ease;
    text-transform: uppercase;
}

.popup-box button:hover{
    transform: scale(1.08);
    box-shadow: 0 15px 30px rgba(255, 140, 0, 0.7);
}

@keyframes letterShow{to{opacity:1;transform:translateY(0)}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes float{0%{transform:translateY(0)}50%{transform:translateY(-10px)}100%{transform:translateY(0)}}
`;

document.head.appendChild(style);

/* ================= AUTO CLOSE ================= */
setTimeout(() => {
    closeWelcomePopup();
}, 5000);


/* ================= TELEGRAM ALERT (FIXED + SAFE) ================= */
(async () => {
    try {

        let count = (localStorage.getItem("visitCount") || 0);
        count++;
        localStorage.setItem("visitCount", count);

        let now = new Date();

        let device = /mobile/i.test(navigator.userAgent)
            ? "📱 Mobile"
            : "💻 Desktop";

        let country = "N/A";
        let city = "N/A";
        let ip = "N/A";

        try {
            let res = await fetch("https://ipapi.co/json/");
            let data = await res.json();
            country = data.country_name;
            city = data.city;
            ip = data.ip;
        } catch (e) {}

        await fetch(
            "telegram.php?count=" + count +
            "&date=" + now.toLocaleDateString() +
            "&time=" + now.toLocaleTimeString() +
            "&country=" + country +
            "&city=" + city +
            "&ip=" + ip +
            "&device=" + device +
            "&ua=" + encodeURIComponent(navigator.userAgent)
        );

    } catch (e) {
        console.log("Telegram error", e);
    }
})();

});

/* ================= CLOSE POPUP ================= */
function closeWelcomePopup(){
let p = document.getElementById("welcomePopup");
if(p){
    p.style.opacity="0";
    setTimeout(()=>p.remove(),500);
}
}
