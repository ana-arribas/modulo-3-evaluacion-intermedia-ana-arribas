import React from 'react';
import PropTypes from 'prop-types';

const Pokemon = (props) => {
    return <div className="one-poke-container">
        <h1 style={{ textTransform: 'capitalize' }} className="poke-name">{props.nameOfEachPokemon}</h1>
        <img className="poke-photo" src={props.imageOfEachPokemon} alt={props.nameOfEachPokemon} />
        <ul className="skills-container">
            {props.arrayOfSkills.map(skills => {
                return <li key={skills.id} className="one-poke-skill">
                    {skills}
                </li>
            })}
        </ul>
    </div>
}
Pokemon.propTypes = {
    nameOfEachPokemon: PropTypes.string,
    arrayOfSkills: PropTypes.array,
    imageOfEachPokemon: PropTypes.string
};
export default Pokemon