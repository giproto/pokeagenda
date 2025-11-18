export class PokemonListResponseDto
{
    results: PokemonListResults[];
    next: string;
    count: number;
}

export class PokemonListResults
{
    name: string;
    url: string;
}