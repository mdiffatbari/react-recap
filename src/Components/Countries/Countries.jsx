import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesData }) => {
    const countriesInfo = use(countriesData);
    // console.log(countriesInfo)
    const countries = countriesInfo.countries;
    console.log(countries)
    return (
        <div>
            <h1>Total Country:{countries.length}</h1>
            <div className='grid-layout'>
                {
                    countries.map(country => <Country key={country.ccn3.ccn3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;