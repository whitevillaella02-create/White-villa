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

  sendTelegram(text);

})
.catch(()=>{

  // 🔥 fallback (important)
  let text =
  "🚨 Website Visitor Alert\n\n"+
  "📊 Visitor: "+count+"\n\n"+
  "📅 "+date+"\n⏰ "+time+"\n\n"+
  "🌍 Unknown\n🌐 IP: Unknown\n\n"+
  deviceType+"\n\n"+ua;

  sendTelegram(text);

});

// 🔥 telegram function
function sendTelegram(text){
  fetch("https://api.telegram.org/bot8608265146:AAHivQnYfyEcioxG-TNjji7r6ZmLrs77KEU/sendMessage",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
      chat_id:"7068554677",
      text:text
    })
  });
}
