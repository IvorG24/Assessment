// data fetching

export const fetchPokemonData = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
    if (!response.ok) {
      throw new Error("Failed to fetch Pokémon data");
    }
    const data = await response.json();
    const pokemonList = data.results;

    // Fetch additional details for each Pokémon
    const pokemonDetails = await Promise.all(
      pokemonList.map(async (pokemon: any) => {
        const detailResponse = await fetch(pokemon.url);
        if (!detailResponse.ok) {
          throw new Error(`Failed to fetch details for ${pokemon.name}`);
        }
        const detailData = await detailResponse.json();
        return {
          id: detailData.id,
          name: detailData.name,
          image: detailData.sprites.front_default,
          description: `Height: ${detailData.height / 10} m, Weight: ${
            detailData.weight / 10
          } kg`,
        };
      })
    );

    return pokemonDetails;
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    return [];
  }
};
