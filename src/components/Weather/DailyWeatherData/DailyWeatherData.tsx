import './DailyWeatherData.scss'

type DailyWeatherDataProps = {
    d: any,
    unit: string;
    weatherCity: any
}

const DailyWeatherData = ({ d, unit, weatherCity }: DailyWeatherDataProps) => {
    return (
        <div className="daily-data-grid" key={d.dt}>
            <h3>
                {new Date(d.dt * 1000).toLocaleString("en-GB", {
                    weekday: "long",
                })}
            </h3>
            <img
                src={`http://openweathermap.org/img/wn/${d.weather[0].icon}.png`}
                alt=""
            />
            <label>
                <strong>
                    {unit === "C"
                        ? (d.temp.min - 272.15).toFixed(0)
                        : ((d.temp.min - 272.15) * (9 / 5) + 32).toFixed(0)}
                </strong>{" "}
                º{unit}
                <label>
                    {unit === "C"
                        ? (d.temp.max - 272.15).toFixed(0)
                        : ((d.temp.max - 272.15) * (9 / 5) + 32).toFixed(0)}
                </label>
                º{unit}
            </label>
            <label>
                Pollen :{" "}
                {weatherCity ? Math.round(weatherCity?.daily[0].pop) : ""}
            </label>
        </div>
    )
}
export default DailyWeatherData