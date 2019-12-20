import React from 'react';

const Pokemon = (props) => {
    return <div className="one-poke-container">
        <h1 style={{ textTransform: 'capitalize' }} className="poke-name">{props.nameOfEachPokemon}</h1>
        <img className="poke-photo" src={props.imageOfEachPokemon} alt={props.nameOfEachPokemon} />
        <ul className="skills-container">
            {props.arrayOfSkills.map((skills, index) => {
                return <li key={index} className="one-poke-skill">
                    {skills}
                </li>
            })}
        </ul>
    </div>

}

export default Pokemon