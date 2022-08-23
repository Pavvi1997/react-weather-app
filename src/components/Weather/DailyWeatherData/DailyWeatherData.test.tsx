import { render, screen } from "@testing-library/react";
import DailyWeatherData from "./DailyWeatherData";

const d ={
    dt: 1661158800
}

const weatherCity = {
  current: {
    temp: 289.1,
  },
  daily: [
    {
      dt: 1661158800,
      temp: {
        min: 290.73,
        max: 293.99,
      },
      pop: 0,
      pressure: 1014,
      humidity: 72,
      rain: 0.32,
      wind_speed: 3.47,
      weather: [
        {
          icon: "04d",
        },
      ],
    },
  ],
};

describe("CurrentData", () => {
  it("Renders the CurrentData", () => {
    render(
      <DailyWeatherData d={weatherCity.daily[0]} unit={"C"} weatherCity={weatherCity} />
    );
    expect(weatherCity).toMatchSnapshot();
    expect(screen.queryAllByText("dt")).not.toBeNull()
    expect(screen.queryAllByText(1661158800)).not.toBeNull()
    expect(screen.queryAllByText("temp_min")).not.toBeNull()
    expect(screen.queryAllByText(290.73)).not.toBeNull()
    expect(screen.queryAllByText("temp_max")).not.toBeNull()
    expect(screen.queryAllByText(293.99)).not.toBeNull()
    expect(screen.queryAllByText("Pollen")).not.toBeNull()
    expect(screen.queryAllByText(0)).not.toBeNull()
  });
});
