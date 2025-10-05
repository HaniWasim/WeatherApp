import React from "react";
import "./display.css";
function Dispalyweather(props) {
  const { data } = props;
  console.log(data);
  const iconUrl =
    "https://openweathermap.org/img/wn/" +
    `${data.cod !== "404" ? data.weather[0].icon : null}` +
    ".png";
  return (
    <div className="displayweather">
      {data.cod != 404 ? (
        <React.Fragment>
          <div className="mainard">
            <span className="cardtitle para">
              {data.name},{data.sys.country}. Weather
            </span>
            <span className="cardSubtitle para">
              As of {new Date().toLocaleDateString()}
            </span>
            <h2 className="para maths_heading">
              {Math.floor(data.main.temp - 273.73)}
              <sup> o</sup>
            </h2>
            <span className="weather_main para">{data.weather[0].main}</span>
            <img src={iconUrl} alt="" className="weatherIcon" />
            <span className="weather_description para">
              description : {data.weather[0].description}
            </span>
          </div>
          <div className="weatherdetails">
            <div className="section1">
              <table>
                <tr className="firstRow">
                  <td className="Highname">High/Low</td>
                  <td>
                    <span>
                      {Math.floor(data.main.temp_max - 273.73)}/{" "}
                      {Math.floor(data.main.temp_min - 273.73)} <sup>o </sup>C
                    </span>
                  </td>
                </tr>
                <tr className="firstRow">
                  <td className="Highname">Humidity</td>
                  <td>
                    <span>{data.main.humidity}%</span>
                  </td>
                </tr>
                <tr className="firstRow">
                  <td className="Highname">Pressure</td>
                  <td>
                    <span>{data.main.pressure}hPa</span>
                  </td>
                </tr>
                <tr className="firstRow">
                  <td className="Highname">Visibility</td>
                  <td>
                    <span>{data.visibility / 1000}km</span>
                  </td>
                </tr>
              </table>
            </div>
            <div className="section2">
              <table>
                <tr className="firstRow">
                  <td className="Highname">Wind</td>
                  <td>
                    <span>{Math.floor((data.wind.speed * 18) / 5)} Km/hr</span>
                  </td>
                </tr>
                <tr className="firstRow">
                  <td className="Highname">Wind direction</td>
                  <td>
                    <span>
                      {data.wind.deg} <sup>o</sup>deg
                    </span>
                  </td>
                </tr>
                <tr className="firstRow">
                  <td className="Highname">SunRise</td>
                  <td>
                    <span>
                      {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                    </span>
                  </td>
                </tr>
                <tr className="firstRow">
                  <td className="Highname">SunSet</td>
                  <td>
                    <span>
                      {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                    </span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <div className="main_card">
          <h2>{data.message}</h2>
        </div>
      )}
    </div>
  );
}

export default Dispalyweather;
