// sambungkan ke API OpenWeather
let weather = {
  apiKey: "a17e116ef18d2d28c72fa3ed17ca9ccc",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&lang=id&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },

  // Menampilkan data-data cuaca
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity, feels_like } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerText = "Cuaca di " + name;
    document.querySelector(".icon").src =
      "http://openweathermap.org/img/w/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Kelembaban: " + humidity + "%";
    document.querySelector(".angin").innerText =
      "Kecepatan Angin: " + speed + " km/h";
    document.querySelector(".like").innerText =
      "Terasa Seperti: " + feels_like + "°C";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name +"')"
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

// fungsi klik button search
document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

// fungsi press enter key untuk search
document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

  weather.fetchWeather("Yogyakarta")