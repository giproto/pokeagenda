import { inject, Injectable } from "@angular/core";
import { PokemonAPI } from "../APIs/pokemon.api";
import { forkJoin, map, Observable, switchMap } from "rxjs";
import { PokemonDetail, PokemonEntity } from "../entities/pokemon.entity";

@Injectable({
    providedIn: 'root'
})
export class PokemonController 
{
    private pokemonList: PokemonEntity[] = [];

    // * Injects
    private _pokemonAPI = inject(PokemonAPI);

    /**
     * Busca os dados da lista de pokemóns
     * @returns Observable<any>
     */
    public getPokemonListController(): Observable<any>
    {
        return this._pokemonAPI.getPokemonListApi().pipe(
            switchMap(firstResp => 
            {
                const pokemonDetailsRequest = [];
                for (const pokemon of firstResp.results)
                {
                    pokemonDetailsRequest.push(
                        this._pokemonAPI.getPokemonDetails(pokemon.url)
                    );
                }

                return forkJoin(pokemonDetailsRequest);
            }),
            map(pokemonDetailsResp =>
            {
                for (const pokemonDetail of pokemonDetailsResp)
                {
                    const pokemon = new PokemonEntity();
                    pokemon.id = pokemonDetail.id;
                    pokemon.name = pokemonDetail.name;
                    pokemon.image = pokemonDetail.sprites.other["official-artwork"].front_default || pokemonDetail.sprites.other.dream_world.front_default;
                    pokemon.type = pokemonDetail.types[0].type.name;
                    pokemon.ability = pokemonDetail?.types[1]?.type?.name;
                    
                    // Pega a lista de stats, e preenche o detalhes do pokemons
                    pokemon.details = [];
                    for (const item of pokemonDetail.stats)
                    {
                        const detail = new PokemonDetail();
                        detail.name = item.stat.name;
                        detail.value = item.base_stat;
                        pokemon.details.push(detail);
                    }
    
                    this.pokemonList.push(pokemon);
                }

                return this.pokemonList;
            })
        );
    }
}
