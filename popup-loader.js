document.addEventListener("DOMContentLoaded", function () {

let popup = document.createElement("div");
popup.id = "welcomePopup";

popup.innerHTML = `
<div class="popup-box">
    <div class="hotel-icon">🏨</div>
    <h1>WHITE VILLA ELLA</h1>
    <p>Peaceful Nature Stay With Mountain View</p>
    <button onclick="closeWelcomePopup()">ENTER</button>
</div>
`;

document.body.appendChild(popup);

let style = document.createElement("style");
style.innerHTML = `
#welcomePopup{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:black;
z-index:99999;
display:flex;
justify-content:center;
align-items:center;
animation:fadeIn 0.5s ease;
}

.popup-box{
text-align:center;
color:white;
padding:20px;
width:90%;
}

.popup-box h1{
font-size:42px;
margin:10px 0;
font-weight:bold;
letter-spacing:2px;
animation:zoom 1s ease;
}

.popup-box p{
font-size:18px;
color:#ccc;
margin-bottom:25px;
}

.hotel-icon{
font-size:80px;
animation:float 2s infinite;
}

.popup-box button{
padding:14px 35px;
font-size:18px;
background:#ff9800;
border:none;
color:white;
border-radius:10px;
cursor:pointer;
}

@keyframes zoom{
0%{transform:scale(0);}
100%{transform:scale(1);}
}

@keyframes fadeIn{
0%{opacity:0;}
100%{opacity:1;}
}

@keyframes float{
0%{transform:translateY(0px);}
50%{transform:translateY(-10px);}
100%{transform:translateY(0px);}
}
`;
document.head.appendChild(style);

setTimeout(()=>{
closeWelcomePopup();
},5000);

});

function closeWelcomePopup(){
let p = document.getElementById("welcomePopup");
if(p){
p.style.opacity="0";
setTimeout(()=>p.remove(),500);
}
}
