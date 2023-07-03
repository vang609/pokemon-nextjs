import { useEffect, useState } from "react";
import { NoFavorites } from "../../components/ui";
import { Layout } from "../../components/layouts/Layout";
import { localFavorites } from "@/utils";
import { FavoritePokemons } from "../../components/pokemon";

const favoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons);
  }, []);

  return (
    <Layout title="Pokemons - Favorites">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default favoritesPage;
