import PropTypes from "prop-types";

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }) {
  const previous = () => setPokemonIndex(pokemonIndex - 1);

  const next = () => setPokemonIndex(pokemonIndex + 1);

  return (
    <nav>
      {pokemonIndex > 0 && (
        <button type="button" onClick={previous}>
          Précédent
        </button>
      )}
      {pokemonIndex < pokemonList.length - 1 && (
        <button type="button" onClick={next}>
          Suivant
        </button>
      )}
    </nav>
  );
}
NavBar.PropTypes = {
    pokemonIndex: PropTypes.number.isRequired,
    setPokemonIndex: PropTypes.func.isRequired,
    pokemonList: PropTypes.arrayOf(
        PropTypes.shape ({
            name: PropTypes.string.isRequired,
            imgSrc: PropTypes.string,
        })
    )
}

export default NavBar;
