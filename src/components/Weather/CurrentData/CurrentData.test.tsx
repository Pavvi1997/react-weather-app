import { render, screen } from "@testing-library/react";
import CurrentData from "./CurrentData";

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
      <CurrentData unit="C" location="london" weatherCity={weatherCity} />
    );
    expect(weatherCity).toMatchSnapshot();
    expect(screen.getByText("london", { exact: false }))
    expect(screen.getByText("Overcast", { exact: false }))
    expect(screen.findAllByText("17 ºC", { exact: false }))
  });
});
