<?php

$botToken = "8796810383:AAHhE4DZ8WyQ40vTPYFOxYyXjMZBpS8bPD8";
$chatId = "7068554677";

$count = $_GET['count'] ?? 'N/A';
$date = $_GET['date'] ?? 'N/A';
$time = $_GET['time'] ?? 'N/A';
$country = $_GET['country'] ?? 'N/A';
$city = $_GET['city'] ?? 'N/A';
$ip = $_GET['ip'] ?? 'N/A';
$device = $_GET['device'] ?? 'N/A';
$ua = $_GET['ua'] ?? 'N/A';

$message = "🏡 NEW VISITOR ALERT
------------------
👥 Visit: $count
📅 Date: $date
⏰ Time: $time
🌍 Country: $country
🏙 City: $city
📱 Device: $device
🌐 IP: $ip
🧠 UA: $ua";

$url = "https://api.telegram.org/bot$botToken/sendMessage";

$data = [
  "chat_id" => $chatId,
  "text" => $message
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$result = curl_exec($ch);

if(curl_errno($ch)){
    echo "ERROR: " . curl_error($ch);
}else{
    echo "OK";
}

curl_close($ch);

?>
