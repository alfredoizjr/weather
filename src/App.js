import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Formulary from './components/Formulary';
import Error from './components/Error';
import WeatherResults from './components/WeatherResults';

function App() {

  // main State
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [error, setError] = useState(false);
  const [results, setResults] = useState({

  });

  const dataQuery = data => {
   
    // validate the data is not empty
    if (data.country === '' || data.city === '') {
      // set error
      setError(true);
      return;
    }

    // if those exist add to each state
    setCity(data.city);
    setCountry(data.country);
    setError(false);
  }

  // if we have an error

  let components;

  if (error) {
    // have error
    components = <Error message='All fields are required' />
  } else if (results.cod === '404') {
    components = <Error message='Not result for those parameter' />
  } else {
    // not error
    components = <WeatherResults results={results} />;
  }

  useEffect(() => {

    // prevent the first execute
    if(city === '') return;

    const consultApi = async () => {
      const apikey = 'ac5a03f1751293cf51370f8f66f4d358';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apikey}`;
      const response = await fetch(url);
      const weather = await response.json();

      console.log(weather)
  
      setResults(weather);
    }


    consultApi();
  }, [city,country])



  return (
    <div>
      <Header title='Weather app' />
      <div className='contenedor-form'>
        <div className='container'>
          <div className='row'>
            <div className='col s12 m6'>
              <Formulary dataQuery={dataQuery} />
            </div>
            <div className='col s12 m6'>
              {components}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
