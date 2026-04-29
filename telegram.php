<?php

$botToken = "8698603109:AAGDSGo7O3oeo-pILZG4R85s8N6Iv_8V-4w";
$chatId = "7068554677";

$count = $_GET['count'];
$date = $_GET['date'];
$time = $_GET['time'];
$country = $_GET['country'];
$city = $_GET['city'];
$ip = $_GET['ip'];
$device = $_GET['device'];
$ua = $_GET['ua'];

$message = "
🏡 NEW VISITOR ALERT
---------------------
👥 Visit: $count
📅 Date: $date
⏰ Time: $time
🌍 Country: $country
🏙 City: $city
📱 Device: $device
🌐 IP: $ip
🧠 Browser: $ua
";

$url = "https://api.telegram.org/bot$botToken/sendMessage";

$data = [
  'chat_id' => $chatId,
  'text' => $message
];

$options = [
  'http' => [
    'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
    'method'  => 'POST',
    'content' => http_build_query($data),
  ],
];

$context = stream_context_create($options);
file_get_contents($url, false, $context);

?>
