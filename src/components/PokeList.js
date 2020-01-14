import React from 'react';
import Pokemon from './Pokemon'
import PropTypes from 'prop-types';

const PokeList = (props) => {
    return <ul className="list-container">
        {props.items.map(item => {
            return <li key={item.id} className="one-pokemon">
                <Pokemon
                    nameOfEachPokemon={item.name}
                    imageOfEachPokemon={item.url}
                    arrayOfSkills={item.types}
                    id={item.id}
                />
            </li>
        })}
    </ul>
}
PokeList.propTypes = {
    items: PropTypes.array,
};
export default PokeList