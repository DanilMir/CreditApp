import React, {useEffect, useState} from 'react';

export const FetchData = () => {
  const [forecasts, updateForecasts] = useState([]);
  const [loading, updateLoading] = useState(true);

  
  useEffect(() => {
    populateWeatherData();
  }, []);

  function renderForecastsTable(forecasts : any) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map((forecast: any) =>
            <tr key={forecast.date}>
              <td>{forecast.date}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
  
    let contents = loading
      ? <p><em>Loading...</em></p>
      : renderForecastsTable(forecasts);

    return (
      <div>
        <h1 id="tabelLabel" >Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  

  async function populateWeatherData() {
    const response = await fetch('weatherforecast');
    const data = await response.json();
    updateForecasts(data);
    updateLoading(false);
  }
}
