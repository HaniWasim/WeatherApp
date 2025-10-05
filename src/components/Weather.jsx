import React, { useState } from "react";
import "./Weather.css";
import Dispalyweather from "./Dispalyweather";
function Weather() {
  const APIKEY = "254641416264073516039d3684c4df22";
  const [Weather, setWeather] = useState([]);
  async function WeatherData(e) {
    e.preventDefault();
    if (Form.city == "") {
      alert("Add Values");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${Form.city},${Form.country}&appid=${APIKEY}`
      )
        .then((res) => res.json()) // convert response to JSON
        .then((data) => data);
      setWeather({
        data: data,
      });
    }
  }
  const [Form, setForm] = useState({
    city: "",
    country: "",
  });
  const handlechange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name == "city") {
      setForm({ ...Form, city: value });
    }

    if (name == "country") {
      setForm({ ...Form, country: value });
    }
  };
  return (
    <div className="Weather">
      <h1>Weather App</h1>
      <form action="">
        <input
          type="text"
          name="city"
          onChange={(e) => {
            handlechange(e);
          }}
          placeholder="Enter City Name"
        />
        <input
          type="text"
          name="country"
          placeholder="Enter Country Name"
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <button
          onClick={(e) => {
            WeatherData(e);
          }}
          className="getWeather"
        >
          Submit
        </button>
      </form>
      {Weather.data != undefined ? (
        <div>
          <Dispalyweather data={Weather.data} />
        </div>
      ) : null}
    </div>
  );
}

export default Weather;
