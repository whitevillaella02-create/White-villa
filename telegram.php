<?php
$botToken="8290182810:AAH6EypIn5dU9jWSkq0xaTkI3zi6wUnQOgw";
$chatId="7068554677";

$msg="📊 Visitor: ".$_GET['count'].
"\n\n📅 ".$_GET['date']."\n⏰ ".$_GET['time'].
"\n\n🌍 ".$_GET['country']." - ".$_GET['city'].
"\n🌐 IP: ".$_GET['ip'].
"\n\n".$_GET['device'].
"\n\n".$_GET['ua'];

file_get_contents("https://api.telegram.org/bot$botToken/sendMessage?chat_id=$chatId&text=".urlencode($msg));
?>
