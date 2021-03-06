import React from 'react';
import StarChar from './StarChar';
import './StarWars.css';

const StarList = props => {
    return (
        <div className="background">
            {props.starwarsChars.map((char) => (
                <StarChar key={char.name} char={char}/>
            ))}
        </div>
    );
};


export default StarList;