function getWeather() {
  const city = document.getElementById("city").value.trim();
  const result = document.getElementById("result");
  if (!city) {
    result.innerHTML = "<p>Vui lòng nhập tên thành phố</p>";
    return;
  }
  const mockData = {
    "Ho Chi Minh": { temp: 29, desc: "Mây rải rác", country: "VN" },
    "Ha Noi": { temp: 28, desc: "Nắng nhẹ", country: "VN" },
    "Tokyo": { temp: 26, desc: "Mưa nhẹ", country: "JP" }
  };
  if (mockData[city]) {
    const data = mockData[city];
    result.innerHTML = `<h3>${city}, ${data.country}</h3>
                        <p>Nhiệt độ: ${data.temp}°C</p>
                        <p>Thời tiết: ${data.desc}</p>`;
  } else {
    result.innerHTML = `<p>Không tìm thấy dữ liệu thời tiết cho "${city}"</p>`;
  }
}