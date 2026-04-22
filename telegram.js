(function(){

  let now=new Date();
  let options={timeZone:'Asia/Colombo'};
  let date=now.toLocaleDateString('en-GB',options);
  let time=now.toLocaleTimeString('en-GB',options);

  let ua=navigator.userAgent;
  let deviceType=/Mobi|Android/i.test(ua)?"📱 Mobile":"💻 Desktop";

  let count=localStorage.getItem("visitCount")||0;
  count++;
  localStorage.setItem("visitCount",count);

  fetch("https://ipapi.co/json/")
  .then(res=>res.json())
  .then(data=>{

    let text =
"🚨 Website Visitor Alert\n\n"+
"📊 Visitor: "+count+"\n\n"+
"📅 "+date+"\n⏰ "+time+"\n\n"+
"🌍 "+data.country_name+" - "+data.city+"\n"+
"🌐 IP: "+data.ip+"\n\n"+
deviceType+"\n\n"+ua;

    // 👉 IMPORTANT: encode කරන්න
    let url = "https://api.telegram.org/bot8608265146:AAHivQnYfyEcioxG-TNjji7r6ZmLrs77KEU/sendMessage?chat_id=7068554677&text=" + encodeURIComponent(text);

    fetch(url)
    .catch(()=>{});

    // backup method
    new Image().src = url;

  })
  .catch(()=>{
    console.log("IP fetch error");
  });

})();
