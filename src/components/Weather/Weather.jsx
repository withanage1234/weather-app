import "./weather.css";
import newtwo from "../assets/newtwo.png";
import mix_weather from "../assets/mix_weather.png";

import clear_sun from "../assets/clear_sun.png";
import rain_umbrella from "../assets/rain_umbrella.png";
import snow_cloud from "../assets/snow_cloud.png";
import sun_cloud from "../assets/sun_cloud.png";
import thunder from "../assets/thunder.png";
import vecteezy_cloud from "../assets/vecteezy_cloud.png";

import { AiOutlineSearch } from "react-icons/ai";
import { FaWater, FaWind } from "react-icons/fa";
import { useEffect, useState } from "react";

const Weather = () => {
  let apiKey = "dd94f859a0e52d6e4767fddf735f04a7";

  const [wicon, setWicon] = useState();
  const [dataValue, setDataValue] = useState();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    async function fetchData() {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=Sri Lanka&units=Metric&appid=${apiKey}`;

      let response = await fetch(url);
      let data = await response.json();

      setDataValue({
        name: data.name,
        temp: `${Math.floor(data.main.temp)}℃`,
        humidity: `${data.main.humidity}﹪`,
        speed: `${Math.floor(data.wind.speed)}km/h`,
      });

      let weatherIcon = data.weather[0].icon;

      switch (weatherIcon) {
        case "01d":
        case "01n":
          setWicon(clear_sun);
          break;
        case "02d":
        case "02n":
        case "03d ":
        case "03n":
          setWicon(sun_cloud);
          break;
        case "04d":
        case "04n":
          setWicon(vecteezy_cloud);
          break;
        case "09d":
        case "09n":
          setWicon(rain_umbrella);
          break;
        case "10d":
        case "10n":
          setWicon(mix_weather);
          break;
        case "11d":
        case "11n":
          setWicon(thunder);
          break;
        case "13d":
        case "13n":
          setWicon(snow_cloud);
          break;
        default:
          setWicon(newtwo);
      }
    }
    fetchData();
  }, []);

  const search = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=Metric&appid=${apiKey}`;

    let response = await fetch(url);
    let data = await response.json();

    setDataValue({
      name: data?.name,
      temp: `${Math.floor(data?.main.temp)}℃`,
      humidity: `${data?.main.humidity}﹪`,
      speed: `${Math.floor(data?.wind.speed)}km/h`,
    });

    let weatherIcon = data.weather[0].icon;
    switch (weatherIcon) {
      case "01d":
      case "01n":
        setWicon(clear_sun);
        break;
      case "02d":
      case "02n":
      case "03d ":
      case "03n":
        setWicon(sun_cloud);
        break;
      case "04d":
      case "04n":
        setWicon(vecteezy_cloud);
        break;
      case "09d":
      case "09n":
        setWicon(rain_umbrella);
        break;
      case "10d":
      case "10n":
        setWicon(mix_weather);
        break;
      case "11d":
      case "11n":
        setWicon(thunder);
        break;
      case "13d":
      case "13n":
        setWicon(snow_cloud);
        break;
      default:
        setWicon(newtwo);
    }
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input
          type="text"
          className="cityInput"
          placeholder="Search"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <AiOutlineSearch size={30} />
        </div>
      </div>
      <div className="weather-image">
        <img src={wicon} alt="newtwo" />
      </div>
      <div className="weather-temp">{dataValue?.temp}</div>
      <div className="weather-location">{dataValue?.name}</div>
      <div className="data-container">
        <div className="element">
          <FaWater size={40} className="icon" />

          <div className="data">
            <div className="humidity-percent">{dataValue?.humidity}</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <FaWind size={40} className="icon" />
          <div className="data">
            <div className="wind-rate">{dataValue?.speed}</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
