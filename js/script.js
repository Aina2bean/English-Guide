var map = L.map('map').setView([35.68111, 139.76667], 18);
var marker = L.marker([35.681236, 139.767125]).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const route = [
  [35.681236, 139.767125], // 東京駅
  [35.67016, 139.76359]
];

L.polyline(route).addTo(map);