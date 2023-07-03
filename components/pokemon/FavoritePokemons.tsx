import { FC } from "react";
import { Grid } from "@nextui-org/react";
import { FavoriteCardPokemon } from "./";

interface Props {
  pokemons: number[];
}

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container direction="row" gap={2}>
      {pokemons.map((id) => (
        <FavoriteCardPokemon key={id} pokemonID={id} />
      ))}
    </Grid.Container>
  );
};
