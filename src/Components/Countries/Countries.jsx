import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesData }) => {
    const countriesInfo = use(countriesData);
    const countries = countriesInfo.countries;

    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries = (country) => {
        console.log(country);
        const newCountries = [...visitedCountries, country];
        setVisitedCountries(newCountries)
    };

    return (
        <div>
            <h1>Total Country:{countries.length}</h1>
            <h2>Total Visited Countries: {visitedCountries.length}</h2>
            <div className='grid-layout'>
                {
                    countries.map(country => <Country handleVisitedCountries = {handleVisitedCountries} key={country.ccn3.ccn3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;