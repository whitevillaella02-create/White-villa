document.addEventListener("DOMContentLoaded", function () {

let popup = document.createElement("div");
popup.id = "welcomePopup";

popup.innerHTML = `
<div class="popup-box">
    <div class="hotel-icon">🏨</div>

    <h1 class="rainbow-text">WHITE VILLA ELLA</h1>

    <p>Peaceful Nature Stay With Mountain View</p>

    <button onclick="closeWelcomePopup()">ENTER</button>
</div>
`;

document.body.appendChild(popup);

let style = document.createElement("style");
style.innerHTML = `

#welcomePopup{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    z-index: 999999;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fadeIn 0.5s ease;
    overflow: hidden;
}

/* Color moving border */

#welcomePopup::before{
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    background: conic-gradient(
        red,
        orange,
        yellow,
        lime,
        cyan,
        blue,
        magenta,
        red
    );
    animation: rotateBorder 6s linear infinite;
    z-index: 1;
}

/* Black center */

#welcomePopup::after{
    content: "";
    position: absolute;
    inset: 8px;
    background: black;
    z-index: 2;
}

.popup-box{
    position: relative;
    z-index: 5;
    text-align: center;
    color: white;
    padding: 20px;
    width: 90%;
    max-width: 500px;
}

.hotel-icon{
    font-size: 85px;
    margin-bottom: 15px;
    animation: float 2s infinite;
}

/* Color animated text */

.rainbow-text{
    font-size: 52px;
    margin: 10px 0;
    font-weight: bold;
    letter-spacing: 2px;
    line-height: 1.2;
    text-transform: uppercase;

    background: linear-gradient(
        90deg,
        red,
        orange,
        yellow,
        lime,
        cyan,
        blue,
        magenta,
        red
    );

    background-size: 400%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: rainbowMove 5s linear infinite, zoom 1s ease;
}

.popup-box p{
    font-size: 18px;
    color: #ccc;
    margin-bottom: 30px;
}

.popup-box button{
    padding: 14px 35px;
    font-size: 18px;
    font-weight: bold;
    background: #ff9800;
    border: none;
    color: white;
    border-radius: 12px;
    cursor: pointer;
    transition: 0.3s;
}

.popup-box button:hover{
    transform: scale(1.05);
}

@keyframes zoom{
    0%{
        transform: scale(0);
    }
    100%{
        transform: scale(1);
    }
}

@keyframes fadeIn{
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

@keyframes float{
    0%{
        transform: translateY(0px);
    }
    50%{
        transform: translateY(-10px);
    }
    100%{
        transform: translateY(0px);
    }
}

@keyframes rotateBorder{
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
}

@keyframes rainbowMove{
    from{
        background-position: 0%;
    }
    to{
        background-position: 400%;
    }
}

@media(max-width: 600px){
    .rainbow-text{
        font-size: 40px;
    }

    .popup-box p{
        font-size: 16px;
    }

    .hotel-icon{
        font-size: 75px;
    }
}

`;

document.head.appendChild(style);

setTimeout(() => {
    closeWelcomePopup();
}, 6000);

});

function closeWelcomePopup(){
    let p = document.getElementById("welcomePopup");

    if(p){
        p.style.transition = "0.5s";
        p.style.opacity = "0";

        setTimeout(() => {
            p.remove();
        }, 500);
    }
}
