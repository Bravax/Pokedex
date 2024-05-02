import PropTypes from "prop-types";

function NavBar({ pokemonList, setPokemonIndex }) {
  
  return (
    <nav>
      {pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => setPokemonIndex(index)}> 
        {pokemon.name}
        </button>
      ))}
    </nav>
  );
}

NavBar.propTypes = {
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    })
  ).isRequired,
  setPokemonIndex: PropTypes.func.isRequired,
};

export default NavBar;
