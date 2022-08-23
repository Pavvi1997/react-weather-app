import './CurrentWeatherDetails.scss'

type CurrentWeatherDetailsProps = {
    weatherCity: any
}

const CurrentWeatherDetails = ({ weatherCity }: CurrentWeatherDetailsProps) => {
    return (
        <div className="current-weather-details">
            <div className="current-weather-details-grid-item">
                <label>Precipitation: </label>{" "}
                <label>{weatherCity?.daily[0].pressure.toFixed(0)}%</label>
            </div>
            <div className="current-weather-details-grid-item">
                <label>Humidity: </label>{" "}
                <label>{weatherCity?.daily[0].humidity} %</label>
            </div>
            <div className="current-weather-details-grid-item">
                <label>Wind: </label>{" "}
                <label>
                    {weatherCity?.daily[0].wind_speed.toFixed(0)} kph SW
                </label>
            </div>
            <div className="current-weather-details-grid-item">
                <label>Pollen Count: </label>{" "}
                <label>
                    {weatherCity ? Math.round(weatherCity?.daily[0].pop) : ""}
                </label>
            </div>
        </div>
    )
}

export default CurrentWeatherDetails