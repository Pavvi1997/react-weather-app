import { render, screen } from "@testing-library/react";
import CurrentWeatherDetails from "./CurrentWeatherDetails";

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
      <CurrentWeatherDetails weatherCity={weatherCity}  />
    );
    expect(weatherCity).toMatchSnapshot();
    expect(screen.queryAllByText("pressure")).not.toBeNull()
    expect(screen.queryAllByText(1014)).not.toBeNull()
    expect(screen.queryAllByText("humidity")).not.toBeNull()
    expect(screen.queryAllByText(72)).not.toBeNull()
    expect(screen.queryAllByText("Wind")).not.toBeNull()
    expect(screen.queryAllByText(3.47)).not.toBeNull()
    expect(screen.queryAllByText("Pollen Count")).not.toBeNull()
    expect(screen.queryAllByText(0)).not.toBeNull()
  });
});
