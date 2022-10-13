import React from "react";

function PokemonLIst({ pokemon }) {
  return (
    <div>
      {pokemon.map((p) => (
        <div key={p}>{p}</div>
      ))}
    </div>
  );
}

export default PokemonLIst;
