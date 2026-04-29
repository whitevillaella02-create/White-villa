<script>
document.addEventListener("DOMContentLoaded", function () {

let popup = document.createElement("div");
popup.id = "welcomePopup";

popup.innerHTML = `
<div class="popup-box">
    <div class="animated-border"></div>

    <div class="hotel-icon">🏨</div>

    <h1 class="rainbow-text">WHITE VILLA ELLA</h1>

    <p>Peaceful Nature Stay With Mountain View</p>

    <button onclick="closeWelcomePopup()">ENTER</button>
</div>
`;

document.body.appendChild(popup);

let style = document.createElement("style");
style.innerHTML = `

/* FULL SCREEN POPUP */

#welcomePopup{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    z-index: 999999;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fadeIn 0.8s ease;
    overflow: hidden;
}

/* Moving colorful frame background */

#welcomePopup::before{
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    background: conic-gradient(
        #ff0000,
        #ff9900,
        #ffee00,
        #00ff00,
        #00ffff,
        #0000ff,
        #ff00ff,
        #ff0000
    );
    animation: rotateBorder 6s linear infinite;
    z-index: 1;
}

/* Black center area */

#welcomePopup::after{
    content: "";
    position: absolute;
    inset: 8px;
    background: #000;
    z-index: 2;
}

/* Main box */

.popup-box{
    position: relative;
    z-index: 5;
    text-align: center;
    color: white;
    width: 90%;
    max-width: 500px;
    padding: 30px 20px;
}

/* Hotel icon */

.hotel-icon{
    font-size: 95px;
    margin-bottom: 15px;
    animation: float 2.5s ease-in-out infinite;
}

/* BIG colorful animated title */

.rainbow-text{
    font-size: 52px;
    font-weight: 900;
    line-height: 1.2;
    margin: 10px 0;
    text-transform: uppercase;
    letter-spacing: 3px;

    background: linear-gradient(
        90deg,
        #ff0000,
        #ff9900,
        #ffee00,
        #00ff00,
        #00ffff,
        #0000ff,
        #ff00ff,
        #ff0000
    );

    background-size: 400%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: rainbowMove 6s linear infinite, zoomIn 1s ease;
}

/* Subtitle */

.popup-box p{
    font-size: 20px;
    color: #dddddd;
    margin-top: 15px;
    margin-bottom: 35px;
    line-height: 1.6;
}

/* Button */

.popup-box button{
    padding: 15px 42px;
    font-size: 20px;
    font-weight: bold;
    background: linear-gradient(45deg, #ff9800, #ff5722);
    border: none;
    color: white;
    border-radius: 14px;
    cursor: pointer;
    box-shadow: 0 0 20px rgba(255,152,0,0.4);
    transition: 0.3s;
}

.popup-box button:hover{
    transform: scale(1.08);
    box-shadow: 0 0 30px rgba(255,152,0,0.7);
}

/* Animations */

@keyframes rotateBorder{
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
}

@keyframes rainbowMove{
    0%{
        background-position: 0%;
    }
    100%{
        background-position: 400%;
    }
}

@keyframes zoomIn{
    0%{
        transform: scale(0.5);
        opacity: 0;
    }
    100%{
        transform: scale(1);
        opacity: 1;
    }
}

@keyframes fadeIn{
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}

@keyframes float{
    0%{
        transform: translateY(0px);
    }
    50%{
        transform: translateY(-12px);
    }
    100%{
        transform: translateY(0px);
    }
}

/* Mobile responsive */

@media(max-width: 600px){
    .rainbow-text{
        font-size: 42px;
    }

    .popup-box p{
        font-size: 17px;
    }

    .hotel-icon{
        font-size: 80px;
    }
}

`;
document.head.appendChild(style);

/* Auto close after 6 sec */

setTimeout(() => {
    closeWelcomePopup();
}, 6000);

});

function closeWelcomePopup(){
    let popup = document.getElementById("welcomePopup");

    if(popup){
        popup.style.transition = "0.6s";
        popup.style.opacity = "0";

        setTimeout(() => {
            popup.remove();
        }, 600);
    }
}
</script>
