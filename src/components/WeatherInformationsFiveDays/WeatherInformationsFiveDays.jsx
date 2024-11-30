function WeatherInformationsFiveDays({ weatherFiveDays }) {
  let dailyForecast = {};

  for (let foreCast of weatherFiveDays.list) {
    const date = new Date(foreCast.dt * 1000).toLocaleDateString();

    if (!dailyForecast[date]) {
      dailyForecast[date] = foreCast;
    }
  }

  const nextFiveDays = Object.values(dailyForecast).slice(1, 6);

  function convertDate(data) {
    const dateFormatted = new Date(data.dt * 1000).toLocaleDateString("pt-bt", {
      weekday: "long",
      day: "2-digit",
    });

    return dateFormatted;
  }

  return (
    <div className=" bg-white bg-opacity-80 p-8 my-4 rounded-2xl">
      <h2 className="text-3xl text-center">Previsão para os proximos 5 dias</h2>

      <div className="flex item-center justify-between mt-4 gap-2">
        {nextFiveDays.map((foreCast) => {
          return (
            <div
              className="flex flex-col items-center p-2 bg-white bg-opacity-90 rounded-sm shadow-inner"
              key={foreCast.dt}
            >
              <p className="capitalize">{convertDate(foreCast)}</p>

              <img
                src={`http://openweathermap.org/img/wn/${foreCast.weather[0].icon}.png`}
                alt="Imagem representando clima no dia"
              />

              <p className="capitalize">{foreCast.weather[0].description}</p>

              <p>
                {Math.round(foreCast.main.temp_min)}ºC min /{" "}
                {Math.round(foreCast.main.temp_max)}ºC max
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WeatherInformationsFiveDays;
