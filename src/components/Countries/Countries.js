import React, { useEffect, useState } from 'react';
import './Countries.css'
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h2>Hello From Countries.js</h2>
            <p>Count: {countries.length}</p>
            <div className='countries-container'>
                {
                    countries.map(country => <Country
                        country={country}
                        key={country.cca3}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;