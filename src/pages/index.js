import { Inter } from "next/font/google";
import Image from "next/image";
import { useRef, useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;

export default function Home() {
  const [currentWeather, setWeather] = useState("");

  const weather = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    getWeather(weather.current.value);
  };

  const getWeather = async (city) => {
    weather.innerHTML = `<h2> Loading... <h2>`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    setWeather(data);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "15vh",
        }}
      >
        <style jsx>{`
          h1 {
            font-size: 40px;
            color: #516ea0;
            text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
            /* Add any additional CSS styles here */
          }
        `}</style>
        <h1>WEATHER</h1>
      </div>

      <div
        style={{
          height: "55vh",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ marginBottom: "15px" }}>
          <form action="" onSubmit={submitHandler}>
            <input
              style={{
                borderRadius: "20px",
                padding: "10px",
                textAlign: "center",
                background: "transparent",
                border: "1px solid #333",
                color: "#4d2e2e",
                fontSize: "20px",
                width: "160px",
                margin: "10px 10px",
              }}
              type="search"
              id="search"
              placeholder="Search your city "
              ref={weather}
              autoComplete="off"
            />
            <style jsx>{`
              input::placeholder {
                color: white;
              }
              button {
                border: 2px solid #4d2e2e;
                background-color: transparent;
                color: #4d2e2e;
                padding: 10px 20px;
                border-radius: 20px;
                font-size: 20px;
                cursor: pointer;
                text-align: center;
                transition: background-color 0.3s;
              }
              button:hover {
                background-color: #603838; /* Change color on hover */
                color: white; /* Change text color on hover */
              }
            `}</style>
            <button type="submit">Search</button>
          </form>
        </div>

        {currentWeather && currentWeather.cod == "404" ? (
          <h2 style={{ color: "red" }}>City Not Found!</h2>
        ) : (
          ""
        )}

        {currentWeather && currentWeather.cod !== "404" ? (
          <>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <Image
                  src={"https://openweathermap.org/img/wn/04n@2x.png"}
                  width={"80"}
                  height={"80"}
                />
              </div>
              <div>
                <h1>{currentWeather.main.temp} ℃</h1>
                <h3>{currentWeather.weather[0].main}</h3>
                <h4>wind speed : {currentWeather.wind.speed} Km/H</h4>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
