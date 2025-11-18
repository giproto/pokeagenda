import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PokemonListResponseDto } from "../DTOs/pokemon-list-response.dto";

@Injectable({
    providedIn: 'root'
})
export class PokemonAPI 
{
    private baseURL = 'https://pokeapi.co/api/v2/';

    // * Injects
    private _httpClient = inject(HttpClient);

    /**
     * Busca os dados da lista de pokemóns
     * @returns Observable<{ name: string, url: string }[]>
     */
    public getPokemonListApi(urlDoParametro?: string): Observable<PokemonListResponseDto>
    {
        const _urlDaRequest = urlDoParametro ?? `${this.baseURL}pokemon?limit=2000`;

        return this._httpClient.get<PokemonListResponseDto>(_urlDaRequest);
    }

    /**
     * O método detalha apenas 1 pokemón
     * @param url Essa URL é a representação da request de detalhes de um pokemon
     * @returns Observable<any>
     */
    public getPokemonDetails(url: string): Observable<any>
    {
        return this._httpClient.get<any>(url);
    }
}
