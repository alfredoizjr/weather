import React from 'react';

const WeatherResults = ({ results }) => {
    console.log(results)
    const { name, main } = results;

    if (!name) return null;

    // rest results kelvin
    const kelvin = 273.15;

    return (
        <div className='card-panel white col s12'>
            <div className='black-text'>
                <h2>Result weater of {name}</h2>
                <p className='temperatura'>
                    {parseInt(main.temp - kelvin, 10)} <span>&#x2103;</span>
                </p>
                <p>
                    Min temp {parseInt(main.temp_min - kelvin, 10)} &#x2103;
                </p>
                <p>
                    Max temp {parseInt(main.temp_max - kelvin, 10)} &#x2103;
                </p>
            </div>
        </div>
    );
}

export default WeatherResults;