import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesData }) => {
    const countriesInfo = use(countriesData);
    const countries = countriesInfo.countries;

    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountries = (country) => {
        console.log(country);
        const newCountries = [...visitedCountries, country];
        setVisitedCountries(newCountries)
    };

    const handleVisitedFlags = (flag) => {
        console.log("Visited flags added", flag)
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    return (
        <div>
            <h1>Total Country:{countries.length}</h1>
            <h2>Total Visited Countries: {visitedCountries.length}</h2>
            <h3>Total visited flags: {visitedFlags.length}</h3>
            <div className='flag-container'>
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag} ></img>)
                }
            </div>
            <div className='grid-layout'>
                {
                    countries.map(country => <Country handleVisitedCountries = {handleVisitedCountries} handleVisitedFlags = {handleVisitedFlags} key={country.ccn3.ccn3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;