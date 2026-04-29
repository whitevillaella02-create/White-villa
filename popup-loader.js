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
    overflow: hidden;
}

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
}

#welcomePopup::after{
    content: "";
    position: absolute;
    inset: 8px;
    background: black;
}

.popup-box{
    position: relative;
    z-index: 5;
    text-align: center;
    color: white;
    width: 90%;
    max-width: 500px;
}

.hotel-icon{
    font-size: 90px;
    margin-bottom: 15px;
}

.rainbow-text{
    font-size: 52px;
    font-weight: bold;
    text-transform: uppercase;
    line-height: 1.2;
    background: linear-gradient(
        90deg,
        red,
        orange,
        yellow,
        lime,
        cyan,
        blue,
        magenta
    );
    background-size: 400%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: rainbowMove 5s linear infinite;
}

.popup-box p{
    font-size: 18px;
    color: #ccc;
    margin: 20px 0 30px;
}

.popup-box button{
    padding: 14px 35px;
    font-size: 18px;
    background: #ff9800;
    border: none;
    color: white;
    border-radius: 12px;
    cursor: pointer;
}

@keyframes rotateBorder{
    from{transform: rotate(0deg);}
    to{transform: rotate(360deg);}
}

@keyframes rainbowMove{
    from{background-position: 0%;}
    to{background-position: 400%;}
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
        p.style.opacity = "0";
        p.style.transition = "0.5s";
        setTimeout(() => {
            p.remove();
        }, 500);
    }
}
