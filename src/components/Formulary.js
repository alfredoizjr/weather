import React, { useState } from 'react';

const Formulary = ({dataQuery}) => {

    // state
    // serach = state & saveSearch = setState
    const [search, saveSearch] = useState({
        city: '',
        country: ''
    })

    const handleChange = e => {
        // change the state
        saveSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    const queryWeather = e => {
        e.preventDefault();
        // pass the field result to the app
        dataQuery(search);
    }

    return (
        <form onSubmit={queryWeather}>
            <div className='inpud-filed col s12'>
                <input
                    type='text'
                    name='city'
                    id='city'
                    onChange={handleChange}
                />
                <label htmlFor='city'>City: </label>
            </div>
            <div className='inpud-filed col s12'>
                <select name='country' onChange={handleChange}>
                    <option value=''>Select a country</option>
                    <option value='US'>Unite State</option>
                    <option value='MX'>Mexico</option>
                    <option value='AR'>Argetina</option>
                    <option value='CO'>Colombia</option>
                    <option value='ES'>Spain</option>
                </select>
            </div>
            <div className='inpud-filed col s12'>
                <input type='submit' className='waves-effect waves-light btn-large btn-block yellow accent-4' value='Search weather' />
            </div>
        </form>
    );
}

export default Formulary;