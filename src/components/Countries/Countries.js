import React, { useEffect, useState } from 'react';
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
            {
                countries.map(country => <Country
                    name={country.name.common}
                    area={country.area}
                    population={country.population}
                ></Country>)
            }
        </div>
    );
};

export default Countries;