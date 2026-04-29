<?php

$botToken = "8698603109:AAGDSGo7O3oeo-pILZG4R85s8N6Iv_8V-4w";
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
👥 Visit: $count
📅 Date: $date
⏰ Time: $time
🌍 Country: $country
🏙 City: $city
📱 Device: $device
🌐 IP: $ip
🧠 Browser: $ua";

$url = "https://api.telegram.org/bot$botToken/sendMessage";

$data = [
    'chat_id' => $chatId,
    'text' => $message
];

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);

if(curl_errno($ch)){
    file_put_contents("error.log", curl_error($ch));
}

curl_close($ch);

echo $response;

?>
