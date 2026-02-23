import React from 'react';
import './App.css'

const People2 = ({people}) => {
    console.log(people)
    return (
        <div className='border22'>
            <h1>Name: {people.name}</h1>
        </div>
    );
};

export default People2;