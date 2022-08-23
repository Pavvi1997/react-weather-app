import { FormEvent, useState } from "react";
import api from "../../services/api";
import "./WeatherDetails.scss";
import CurrentData from '../Weather/CurrentData'
import CurrentWeatherDetails from '../Weather/CurrentWeatherDetails'
import DailyWeatherData from '../Weather/DailyWeatherData'
import UnitConverter from '../Weather/UnitConverter'
import SearchLocation from '../Weather/SearchLocation'

interface WeatherData {
  current: {
    temp: number;
  };
  daily: [
    {
      dt: number;
      temp: {
        min: number;
        max: number;
      };
      pop: number;
      pressure: number;
      humidity: number;
      rain: number;
      wind_speed: number;
      weather: [
        {
          icon: string;
        }
      ];
    }
  ];
}

export default function WeatherDetails() {
  const [city, setCity] = useState("");
  const [locale, setLocale] = useState("");
  const [weatherCity, setWeatherCity] = useState<WeatherData>();
  const [unit, setUnit] = useState("C");

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

  async function searchCity(event: FormEvent) {
    event.preventDefault();

    const cityData = await api.get(
      `forecast?q=${city}&units=${unit}&appid=${API_KEY}`
    );
    setLocale(cityData.data.city.name);
    const [lat, lon] = [
      cityData.data.city.coord.lat,
      cityData.data.city.coord.lon,
    ];

    const response = await api.get(
      `onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );
    setWeatherCity(response.data);
  }

  return (
    <div id="page-landing">
      <header>Weather App</header>
      <main className="container">
        <SearchLocation searchCity={searchCity} city={city} setCity={setCity} />
        {weatherCity && (
          <section className="result-container">
            <UnitConverter unit={unit} setUnit={setUnit} />

            <CurrentData weatherCity={weatherCity} location={locale} unit={unit} />

            <CurrentWeatherDetails weatherCity={weatherCity} />

            <div className="daily-container">
              {weatherCity.daily.map((d) => (
                <DailyWeatherData d={d} unit={unit} weatherCity={weatherCity} />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
