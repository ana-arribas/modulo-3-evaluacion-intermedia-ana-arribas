import React from 'react';
import Pokemon from './Pokemon'

const PokeList = (props) => {
    return <ul className="list-container">
        {props.items.map((item, index) => {
            return <li key={index} className="one-pokemon">
                <Pokemon
                    nameOfEachPokemon={item.name}
                    imageOfEachPokemon={item.url}
                    arrayOfSkills={item.types}
                />
            </li>
        })}
    </ul>

}

export default PokeList