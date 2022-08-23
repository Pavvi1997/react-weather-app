import './CurrentData.scss'

type CurrentDataProps = {
    unit: string;
    location: string;
    weatherCity: any;
}

const CurrentData = ({ unit, location, weatherCity }: CurrentDataProps) => {

    const getFormatedDate = () => {
        const selectedDate = new Date(weatherCity?.daily[0].dt * 1000);
        var date = selectedDate.toLocaleString("en-GB", {
            day: "numeric",
            weekday: "short",
            month: "short",
        });
        var year = selectedDate.toLocaleString("en-GB", {
            year: "numeric",
        });
        var hour = selectedDate.toLocaleString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        });
        return `${date} ${year} ${hour}`;
    };
    return (
        <>
            <h1>{location || ''}</h1>
            <div>{getFormatedDate()}</div>
            <div>Overcast</div>
            <div className="current-weather">
                <img
                    src={`http://openweathermap.org/img/wn/${weatherCity?.daily[0].weather[0].icon}.png`}
                    alt="" />
                <p>
                    {unit === "C"
                        ? (weatherCity.current.temp - 272.15).toFixed(0)
                        : (
                            (weatherCity.current.temp - 272.15) * (9 / 5) +
                            32
                        ).toFixed(0)}
                </p>
                º{unit || ''}
            </div>
        </>
    )

}

export default CurrentData