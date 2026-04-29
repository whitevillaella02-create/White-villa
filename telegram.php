<?php

$botToken = "8698603109:AAGDSGo7O3oeo-pILZG4R85s8N6Iv_8V-4w";
$chatId = "-1003986545400";

/* =========================
   SAFE INPUT HANDLING
========================= */
$count   = $_GET['count'] ?? 'N/A';
$date    = $_GET['date'] ?? 'N/A';
$time    = $_GET['time'] ?? 'N/A';
$country = $_GET['country'] ?? 'N/A';
$city    = $_GET['city'] ?? 'N/A';
$ip      = $_GET['ip'] ?? 'N/A';
$device  = $_GET['device'] ?? 'N/A';
$ua      = $_GET['ua'] ?? 'N/A';

/* =========================
   MESSAGE FORMAT
========================= */
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

/* =========================
   TELEGRAM API REQUEST
========================= */
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
    'timeout' => 5
  ],
];

$context = stream_context_create($options);
$result = @file_get_contents($url, false, $context);

/* =========================
   OPTIONAL DEBUG LOG
========================= */
if ($result === false) {
    file_put_contents("telegram_error.log", "Failed at " . date("Y-m-d H:i:s") . "\n", FILE_APPEND);
}

?>
