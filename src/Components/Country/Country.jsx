import React, { useState } from 'react';
import './country.css'

const Country = ({ country }) => {

    const [visited, setVisited] = useState(false);

    const buttonClick = () => {
        
        //system 1
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }

        //system 2
        // setVisited(visited ? false : true)

        //system 3
        setVisited(!visited)

    }

    return (
        <div className={`main-cards2 d-flex ${visited && "card-visited"}`}>
            <div className="flag-image" style={{ marginRight: "20px" }}>
                <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            </div>
            <div className="country-content">
                <h3>Country Name:{country.name.common}</h3>
                <h3>Capita: {country.capital.capital}</h3>
                <h4>Area: {country.area.area}</h4>
                <h4>{country.area.area > 300000 ? "Big Country 😮" : "Small Country 🫩"}</h4>
                <button onClick={buttonClick}>{ visited ? "Visited" : "Not Visited" }</button>
            </div>
        </div>
    );
};

export default Country;