export class PokemonEntity
{
    name: string;
    image: string;
    id: number;
    type: string;
    ability: string;
    details: PokemonDetail[];
}

export class PokemonDetail
{
    name: string;
    value: number;
}
